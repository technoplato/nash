const { deployProxy } = require("@openzeppelin/truffle-upgrades");

const NashCoin = artifacts.require("NashCoin");

module.exports = async function (deployer) {
  await deployProxy(NashCoin, { deployer, initializer: "initialize" });
};
