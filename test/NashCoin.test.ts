const NashCoin = artifacts.require("NashCoin");

const { BN, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");
// @ts-ignore
const { expect } = require("chai");

contract("NashCoin", ([owner, other]) => {
  it("should not allow a non owner to distribute tokens", async () => {
    const nash = await deployProxy(NashCoin);
    await expectRevert(
      nash.distribute({ from: other }),
      "Ownable: caller is not the owner"
    );
  });

  it("should have an initial supply of 1", async () => {
    const nash = await deployProxy(NashCoin);
    const supplyBn = await nash.totalSupply();
    expect(supplyBn).to.be.bignumber.equal(new BN(1));
  });

  const { deployProxy } = require("@openzeppelin/truffle-upgrades");

  it("should have correct metadata", async () => {
    const nash = await deployProxy(NashCoin);
    expect(await nash.symbol()).to.be.equal("NASH");
    expect(await nash.name()).to.be.equal("NashCoin");
  });
});
