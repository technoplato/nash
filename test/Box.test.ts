import { Suite } from "mocha";
import { BoxContract, BoxInstance } from "../types/truffle-contracts";
import Accounts = Truffle.Accounts;
const { BN, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");

const { expect } = require("chai");

const Box = artifacts.require("Box");

contract("Box", ([owner, other]) => {
  const value = new BN("42");

  it("retrieve returns a value previously stored", async () => {
    const box = await Box.new({ from: owner });
    await box.store(value);

    expect(await box.retrieve()).to.be.bignumber.equal(value);
  });

  it("storing a value causes an event to be emitted", async () => {
    const box = await Box.new({ from: owner });
    const receipt = await box.store(value, { from: owner });

    expectEvent(receipt, "ValueChanged", { newValue: value });
  });

  it("should not allow a non owner to store a value", async () => {
    const box = await Box.new({ from: owner });
    await expectRevert(
      box.store(value, { from: other }),
      "Ownable: caller is not the owner"
    );
  });
});
