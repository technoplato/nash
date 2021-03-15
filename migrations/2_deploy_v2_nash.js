const { deployProxy, upgradeProxy } = require("@openzeppelin/truffle-upgrades");

const NashCoin = artifacts.require("NashCoin");
const NashCoinV2 = artifacts.require("NashCoinV2");

module.exports = async function (deployer) {
  const instance = await deployProxy(NashCoin, { deployer });
  const upgraded = await upgradeProxy(instance.address, NashCoinV2, {
    deployer,
  });
};
