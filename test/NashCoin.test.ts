const NashCoin = artifacts.require("NashCoin");

const { BN, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");
// @ts-ignore
const { expect } = require("chai");
const { deployProxy } = require("@openzeppelin/truffle-upgrades");

contract("NashCoin", ([owner, other]) => {
  it("should not allow a non owner to distribute tokens", async () => {
    const nash = await deployProxy(NashCoin);
    await expectRevert(
      nash.distribute({ from: other }),
      "Ownable: caller is not the owner"
    );
  });

  it("should not allow a non owner to add users", async () => {
    const nash = await deployProxy(NashCoin);
    await expectRevert(
      nash.addUser(other, { from: other }),
      "Ownable: caller is not the owner"
    );
  });

  it("should have an initial supply of 1", async () => {
    const nash = await deployProxy(NashCoin);
    const supplyBn = await nash.totalSupply();
    expect(supplyBn).to.be.bignumber.equal(new BN(1));
  });

  it("should have correct metadata", async () => {
    const nash = await deployProxy(NashCoin);
    expect(await nash.symbol()).to.be.equal("NASH");
    expect(await nash.name()).to.be.equal("NashCoin");
  });

  it("should add new accounts with a starting balance of 0", async () => {
    const nash = await deployProxy(NashCoin);

    await nash.addUser(other);

    expect(await nash.balanceOf(other)).to.be.bignumber.equal(new BN(0));
  });

  it("should not allow distribute events if no new users have been added since previous distribution event", async () => {
    const nash = await deployProxy(NashCoin);
    await expectRevert(
      nash.distribute({ from: owner }),
      "NashCoin: No new users since previous distribution event."
    );
  });

  it("should not add addresses that are already involved", async () => {
    const nash = await deployProxy(NashCoin);

    await nash.addUser(other);

    await expectRevert(
      nash.addUser(other),
      "NashCoin: Cannot add a user that has previously been added."
    );
  });

  it("should add one token to every 'member' upon each distribution event", async () => {
    const nash = await deployProxy(NashCoin);

    await nash.addUser(other);

    await nash.distribute({ from: owner });

    expect(await nash.balanceOf(owner)).to.be.bignumber.equal(new BN(2));
    expect(await nash.balanceOf(other)).to.be.bignumber.equal(new BN(1));
  });
});
