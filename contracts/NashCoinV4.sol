// SPDX-License-Identifier: MIT

pragma solidity >=0.6.0 <0.8.0;

import "@openzeppelin/contracts-upgradeable/token/ERC20/ERC20Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/Initializable.sol";
import "@openzeppelin/contracts-upgradeable/access/OwnableUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/utils/EnumerableSetUpgradeable.sol";

contract NashCoinV4 is Initializable, ERC20Upgradeable, OwnableUpgradeable {
    bool allowDistribute;

    using EnumerableSetUpgradeable for EnumerableSetUpgradeable.AddressSet;

    EnumerableSetUpgradeable.AddressSet private members;

    function initialize() public initializer {
        __ERC20_init("NashCoin", "NASH");
        __Ownable_init_unchained();
        _mint(_msgSender(), 1);
        members.add(_msgSender());
        allowDistribute = false;
    }

    function addUser(address newUser) public onlyOwner returns (bool) {
        require(
            !members.contains(newUser),
            "NashCoin: Cannot add a user that has previously been added."
        );
        members.add(newUser);
        allowDistribute = true;
        return true;
    }

    function distribute() public onlyOwner {
        require(
            allowDistribute,
            "NashCoin: No new users since previous distribution event."
        );

        uint256 memberCount = members.length();
        for (uint256 i = 0; i < memberCount; i++) {
            _mint(members.at(i), 1);
        }
    }

    function number() public view returns (uint256) {
        return members.length();
    }

    function whatIs2TimesMembersSize() public view returns (uint256) {
        return members.length() * 2;
    }

    function shorty3() public view returns (uint256) {
        return members.length() * 3;
    }
}
