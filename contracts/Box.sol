// SPDX-License-Identifier: MIT

pragma solidity ^0.6.10;

import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract Box is OwnableUpgradeable {
    uint256 private value;

    function initialize() public initializer {
        __Ownable_init_unchained();
    }

    // Emitted when the stored value changes
    event ValueChanged(uint256 newValue);

    // Stores a new value in the contract
    function store(uint256 newValue) public {
        value = newValue;
        emit ValueChanged(newValue);
    }

    function retrieve() public view returns (uint256) {
        return value;
    }
}
