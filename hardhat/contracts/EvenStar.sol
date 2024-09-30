// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol"; 
import "@openzeppelin/contracts/token/ERC20/IERC20.sol"; 
import "./IEvenStarPOA.sol";

contract EvenStar {
    address owner;
    address evenStarPOA; 
    address paymentToken;  
    uint256 contractBalance; 

    struct User {
        uint256 id;
        address userAddress;
        bool isRegistered; 
    }

    User[] allUsers;
    mapping(address => User) hasRegistered; 
    mapping(uint256 => User) registeredUserID; 
    mapping(address => uint256) userBalance;

    enum EventCategorys { None, Education, Liesure, Brainstorm, Lifestyle, Sport }

    struct Program {
        uint256 id;
        string title;
        string desc;
        uint256 date;
        uint256 time;
        string location;
        uint256 duration;
        string url;
        uint256 ticket;  
        EventCategorys category;  
        bool isActive;
        address creator;
        string eventArt;
    }

    Program[] allPrograms;
    Program[] archivePrograms;

    mapping(uint256 => bool) isArchived; 
    mapping(uint256 => Program) registeredPrograms; 
    mapping(string => Program) programsTitle; 
    mapping(uint256 => address[]) programAttendees;
    mapping(uint256 => bool) programCompleted; 


    event UserRegistered(address indexed userAddress, uint256 indexed userId);
    event EventCreated(uint256 indexed eventId, string indexed title, address indexed creator);
    event EventSignup(uint256 indexed eventId, address indexed userAddress);
    event EventArchived(uint256 indexed eventId);
    event EventRemoved(uint256 indexed eventId);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }

    constructor(address _evenStarPOA, address _paymentToken, address _owner) {
        owner = _owner;
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
    uint256 _duration,
    string memory _url,
    uint256 _ticket,
    EventCategorys _category,
    string memory _eventArt
) external {
    // Ensure the user is registered
    require(hasRegistered[msg.sender].isRegistered, "You need to register before creating an event");

    uint256 id = allPrograms.length + 1;

    Program memory newProgram = Program(
        id, 
        _title, 
        _desc, 
        _date, 
        _time, 
        _location, 
        _duration, 
        _url, 
        _ticket, 
        _category, 
        true, 
        msg.sender, 
        _eventArt
    );

    allPrograms.push(newProgram);
    registeredPrograms[id] = newProgram;
    programsTitle[_title] = newProgram;

    emit EventCreated(id, _title, msg.sender);
}


    function updateProgram(
        uint256 id, 
        string memory _title, 
        string memory _desc, 
        uint256 _date, 
        uint256 _time, 
        string memory _location, 
        uint256 _duration, 
        string memory _url, 
        uint256 _ticket,
        string memory _eventArt
    ) external {
        require(id < allPrograms.length, "Invalid program ID");

        Program storage program = allPrograms[id];

        require(program.creator == msg.sender, "You are not the creator of this event");

        program.title = _title;
        program.desc = _desc;
        program.date = _date;
        program.time = _time;
        program.location = _location;
        program.duration = _duration;
        program.url = _url;
        program.ticket = _ticket;
        program.eventArt = _eventArt;

        programsTitle[_title] = program;
    }

    function eventSignup(uint256 id) external {
    require(id != 0, "Invalid event ID");
    require(id < allPrograms.length, "Invalid event ID");

    Program storage program = allPrograms[id];
    require(program.isActive, "Event is not active");

    // Check if the user has already signed up for the event
    address[] storage attendees = programAttendees[id];
    for (uint256 i = 0; i < attendees.length; i++) {
        require(attendees[i] != msg.sender, "User has already signed up for this event");
    }

    // If there's a ticket price, deduct the tokens from the user
    if (program.ticket > 0) {
        uint256 ticketWithDecimals = program.ticket * (10**18);
        require(IERC20(paymentToken).balanceOf(msg.sender) >= ticketWithDecimals, "Insufficient token balance");
        require(IERC20(paymentToken).transferFrom(msg.sender, address(this), ticketWithDecimals), "Token transfer failed");

        uint256 creatorShare = (ticketWithDecimals * 99) / 100;
        uint256 contractShare = ticketWithDecimals - creatorShare;

        require(IERC20(paymentToken).transfer(program.creator, creatorShare), "Transfer to creator failed");
        contractBalance += contractShare;
    }

    // Register the user as an attendee for the event
    programAttendees[id].push(msg.sender);

    emit EventSignup(id, msg.sender);
}


    function archiveEvent(uint256 id) external onlyOwner {
        require(id < allPrograms.length, "Invalid program ID");

        Program storage selectedProgram = allPrograms[id];

        require(selectedProgram.isActive, "Program is not active");

        archivePrograms.push(selectedProgram);
        isArchived[id] = true;
        selectedProgram.isActive = false;

        emit EventArchived(id);
    }

    function removeEvent(uint256 id) external onlyOwner {
        require(id < allPrograms.length, "Invalid program ID");
        delete allPrograms[id];
        emit EventRemoved(id);
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

    function proofOfAttendance(uint256 id) external {
        require(id != 0, "Invalid event ID");
        require(id < allPrograms.length, "Invalid event ID");
        require(programCompleted[id], "Event is still ongoing");

        bool isAttendee = false;

        for (uint256 i = 0; i < programAttendees[id].length; i++) {
            if (programAttendees[id][i] == msg.sender) {
                isAttendee = true;
                break;
            }
        }

        require(isAttendee, "You did not attend this event");

        IEvenStarPOA(evenStarPOA).transferTokenFromContract(msg.sender, id);
    }

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

    function getAllEvents() external view returns (Program[] memory) {
        return allPrograms;
    }

    function getUserBalance(address _address) external view onlyOwner returns (uint256) {
        require(_address != address(0), "Invalid address");
        return userBalance[_address];
    }

    function getUserBalance() external view returns (uint256) {
        return userBalance[msg.sender];
    }

    function getEventAttendees(uint256 eventId) external view returns (address[] memory) {
        require(eventId != 0, "Invalid event ID");
        require(eventId < allPrograms.length, "Invalid event ID");

        return programAttendees[eventId];
    }

    function getEventsByCategory(EventCategorys _category) external view returns (Program[] memory) {
        uint256 matchingEventCount = 0;

        for (uint256 i = 0; i < allPrograms.length; i++) {
            if (allPrograms[i].category == _category && allPrograms[i].isActive) {
                matchingEventCount++;
            }
        }

        // This array stores matching events
        Program[] memory matchingEvents = new Program[](matchingEventCount);
        uint256 index = 0;

        for (uint256 i = 0; i < allPrograms.length; i++) {
            if (allPrograms[i].category == _category && allPrograms[i].isActive) {
                matchingEvents[index] = allPrograms[i];
                index++;
            }
        }

        return matchingEvents;
    }


}
