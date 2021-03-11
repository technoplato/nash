const Box = artifacts.require("Box");
const NashCoin = artifacts.require("NashCoin");

module.exports = async function (deployer) {
  await deployer.deploy(Box);
  await deployer.deploy(NashCoin);
};
