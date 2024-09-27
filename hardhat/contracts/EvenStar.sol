// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol"; 
import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; 

contract EvenStar {
    address public owner;
    address public evenStarPOA; 
    address public paymentToken;  
    uint256 public contractBalance; 

    struct User {
        uint256 id;
        address userAddress;
        bool isRegistered; 
    }

    User[] public allUsers;
    mapping(address => User) public hasRegistered; 
    mapping(uint256 => User) public registeredUserID; 
    mapping(address => uint256) public userBalance;

    struct Program {
        uint256 id;
        string title;
        string desc;
        uint256 date;
        uint256 time;
        string location;
        string duration;
        string url;
        uint256 ticket;  
        bool isActive;
        address creator;
    }

    Program[] public allPrograms;
    Program[] public archivePrograms;

    mapping(uint256 => bool) public isArchived; 
    mapping(uint256 => Program) public registeredPrograms; 
    mapping(string => Program) public programsTitle; 
    mapping(uint256 => address[]) public programAttendees;
    mapping(uint256 => bool) public programCompleted; 


    event UserRegistered(address indexed userAddress, uint256 indexed userId);
    event EventCreated(uint256 indexed eventId, string indexed title, address indexed creator);
    event EventSignup(uint256 indexed eventId, address indexed userAddress);
    event EventArchived(uint256 indexed eventId);
    event EventRemoved(uint256 indexed eventId);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor(address _evenStarPOA, address _paymentToken) {
        owner = msg.sender;
        evenStarPOA = _evenStarPOA; 
        paymentToken = _paymentToken;
    }

    function registerUser() external {
        require(!hasRegistered[msg.sender].isRegistered, "User already registered");
        uint256 id = allUsers.length + 1;
        User memory newUser = User(id, msg.sender, true);
        allUsers.push(newUser);
        hasRegistered[msg.sender] = newUser;
        registeredUserID[id] = newUser;

        emit UserRegistered(msg.sender, id);
    }

    function createEvent(
        string memory _title, 
        string memory _desc, 
        uint256 _date, 
        uint256 _time, 
        string memory _location, 
        string memory _duration,
        string memory _url,
        uint256 _ticket
    ) external {
        uint256 id = allPrograms.length;
        Program memory newProgram = Program(id, _title, _desc, _date, _time, _location, _duration, _url, _ticket, true, msg.sender);
        allPrograms.push(newProgram);
        registeredPrograms[id] = newProgram;
        programsTitle[_title] = newProgram;

        emit EventCreated(id, _title, msg.sender);

    }

    // User signup for event with ERC20 token payment
    function eventSignup(uint256 id) external {
        require(id != 0, "Invalid Id");
        Program storage program = allPrograms[id];

        require(program.isActive, "Event is not active");
        require(IERC20(paymentToken).balanceOf(msg.sender) >= program.ticket, "Insufficient token balance");
        require(IERC20(paymentToken).transferFrom(msg.sender, address(this), program.ticket), "Token transfer failed");

        uint256 creatorShare = (program.ticket * 99) / 100;
        uint256 contractShare = program.ticket - creatorShare;

        require(IERC20(paymentToken).transfer(program.creator, creatorShare), "Transfer to creator failed");

        contractBalance += contractShare;

        // Add user to the attendees list
        programAttendees[id].push(msg.sender);
    }
    

    function archiveEvent(uint256 id) external onlyOwner {

        Program storage selectedProgram = allPrograms[id];
        require(selectedProgram.isActive, "Program is not active");
        archivePrograms.push(selectedProgram);
        isArchived[id] = true;
        selectedProgram.isActive = false;
    }

    function removeEvent(uint256 id) external onlyOwner {
        require(id < allPrograms.length, "Invalid program ID");
        delete allPrograms[id];
    }

    function searchEvent(uint256 id, string memory _title) external view returns (Program memory) {
        if (id < allPrograms.length && allPrograms[id].id == id) {
            return allPrograms[id];
        } else if (bytes(_title).length > 0) {
            return programsTitle[_title];
        }
        revert("Event not found");
    }

    function getUser(uint256 id) external view returns (User memory) {
        return registeredUserID[id];
    }

    function proofOfAttendance(uint256 id) internal {
        require(id != 0, "Invalid Id");
        require(id < allPrograms.length, "Invalid event ID");
        require(programCompleted[id], "Event is still ongoing");

        // Check if the user attended the event
        bool isAttendee = false;
        for (uint256 i = 0; i < programAttendees[id].length; i++) {
            if (programAttendees[id][i] == msg.sender) {
                isAttendee = true;
                break;
            }
        }

        require(isAttendee, "You did not attend this event");

        // Mint Proof of Attendance (POA) to the user
        IERC721 evenStarToken = IERC721(evenStarPOA);
        
        // Assuming evenStarPOA has a 'mint' function with signature: `mint(address to, uint256 tokenId)`

        (bool success, bytes memory data) = evenStarPOA.call(abi.encodeWithSignature("mint(address,uint256)", msg.sender, id));

        require(success && (data.length == 0 || abi.decode(data, (bool))), "Minting failed");
    }


    // Search for events with no ticket price
    function searchFreeEvents() external view returns (Program[] memory) {
        uint256 freeEventCount = 0;

        for (uint256 i = 0; i < allPrograms.length; i++) {
            if (allPrograms[i].ticket == 0) {
                freeEventCount++;
            }
        }

        Program[] memory freeEvents = new Program[](freeEventCount);
        uint256 index = 0;

        for (uint256 i = 0; i < allPrograms.length; i++) {
            if (allPrograms[i].ticket == 0) {
                freeEvents[index] = allPrograms[i];
                index++;
            }
        }

        return freeEvents;
    }

    // Search for events with ticket price
    function searchPaidEvents() external view returns (Program[] memory) {
        uint256 paidEventCount = 0;

        for (uint256 i = 0; i < allPrograms.length; i++) {
            if (allPrograms[i].ticket > 0) {
                paidEventCount++;
            }
        }

        Program[] memory paidEvents = new Program[](paidEventCount);
        uint256 index = 0;

        for (uint256 i = 0; i < allPrograms.length; i++) {
            if (allPrograms[i].ticket > 0) {
                paidEvents[index] = allPrograms[i];
                index++;
            }
        }

        return paidEvents;
    }

    function getUserBalance(address _address) external  onlyOwner view returns(uint256){
        require(_address != address(0), "Address zero detected");
        return userBalance[_address];
    }

    function getUserBalance() external view returns(uint256){
        require(msg.sender != address(0), "Address zero detected");
        return userBalance[msg.sender];
    }

    function checkContractBalance() external onlyOwner view returns(uint256){
        return contractBalance;
    }

    function updateProgram()external{

    } 
}
