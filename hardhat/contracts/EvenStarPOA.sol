// SPDX-License-Identifier: MIT
// Compatible with OpenZeppelin Contracts ^5.0.0
pragma solidity 0.8.24;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract EvenStarPOA is ERC721 {

    address public owner;
    uint256 private _nextTokenId;

    constructor(address _owner)
        ERC721("EvenStarPOA", "ESP") {
        owner = _owner;

        for (uint256 i = 0; i < 100; i++) {
            safeMint(address(this)); 
        }
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Unauthorized User");
        _;
    }

    function safeMint(address to) public onlyOwner {
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);
    }

    function transferTokenFromContract(address to, uint256 tokenId) public onlyOwner {
        require(ownerOf(tokenId) == address(this), "Contract does not own this token");
        _safeTransfer(address(this), to, tokenId, "");
    }
}
