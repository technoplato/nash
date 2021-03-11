const { expect } = require("chai");
const { BN, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");

const Box = artifacts.require("Box");

contract("Box", function ([owner, other]: [string, string]) {
  const value = new BN("42");

  beforeEach(async function () {
    this.box = await Box.new({ from: owner });
  });

  it("retrieve returns a value previously stored", async function () {
    await this.box.store(value);

    expect(await this.box.retrieve()).to.be.bignumber.equal(value);
  });

  it("storing a value causes an event to be emitted", async function () {
    const receipt = await this.box.store(value, { from: owner });

    expectEvent(receipt, "ValueChanged", { newValue: value });
  });
});
