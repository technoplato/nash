pragma solidity ^0.6.0;

contract Auth {
    address private administrator;

    constructor() public {
        // Make the deployer of the contract the administrator
        administrator = msg.sender;
    }

    function isAdministrator(address user) public returns (bool) {
        return user == administrator;
    }
}