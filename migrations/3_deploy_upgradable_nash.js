const { deployProxy } = require("@openzeppelin/truffle-upgrades");

const NashCoin = artifacts.require("NashCoin");
const Box = artifacts.require("Box");

module.exports = async function (deployer) {
  await deployProxy(Box, [44], { deployer, initializer: "store" });
};
