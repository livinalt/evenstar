// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

interface IEvenStarPOA {

    function safeMint(address to) external;

    function transferTokenFromContract(address to, uint256 tokenId) external;
    
}
