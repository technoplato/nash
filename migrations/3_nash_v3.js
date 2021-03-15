const { deployProxy, upgradeProxy } = require("@openzeppelin/truffle-upgrades");

const NashCoinV2 = artifacts.require("NashCoinV2");
const NashCoinV3 = artifacts.require("NashCoinV3");

module.exports = async function (deployer) {
  const instance = await deployProxy(NashCoinV2, { deployer });
  await upgradeProxy(instance.address, NashCoinV3, {
    deployer,
  });
};
