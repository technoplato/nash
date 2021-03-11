// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";

contract NashCoin is ERC20Upgradeable {
    function initialize() public initializer {
        __ERC20_init("NashCoin", "NASH");
    }

    function distribute() public {}
}
