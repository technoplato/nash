// SPDX-License-Identifier: MIT

pragma solidity ^0.6.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NashCoin is ERC20, Ownable {
    constructor() public ERC20("NashCoin", "NASH") Ownable() {}
}
