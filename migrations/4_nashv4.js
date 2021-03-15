const { deployProxy, upgradeProxy } = require("@openzeppelin/truffle-upgrades");

const NashCoinV3 = artifacts.require("NashCoinV3");
const NashCoinV4 = artifacts.require("NashCoinV4");

module.exports = async function (deployer) {
  const instance = await deployProxy(NashCoinV3, { deployer });
  await upgradeProxy(instance.address, NashCoinV4, {
    deployer,
  });
};
