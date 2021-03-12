// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";

contract NashCoin is Initializable, ERC20Upgradeable, OwnableUpgradeable {
    function initialize() public initializer {
        __ERC20_init("NashCoin", "NASH");
        __Ownable_init_unchained();
        _mint(_msgSender(), 1);
    }

    function addUser(address newUser) public returns (bool) {
        _mint(newUser, 0);
        return true;
    }

    function distribute() public onlyOwner {}
}
