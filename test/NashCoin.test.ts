const NashCoin = artifacts.require("NashCoin");

const { BN, expectEvent, expectRevert } = require("@openzeppelin/test-helpers");
// const { expect } = require("chai");

contract("NashCoin", ([owner, other]) => {
  // it("retrieve returns a value previously stored", async () => {
  //   const box = await NashCoin.new({ from: owner });
  //   await box.store(value);
  //
  //   expect(await box.retrieve()).to.be.bignumber.equal(value);
  // });
  //
  // it("storing a value causes an event to be emitted", async () => {
  //   const box = await NashCoin.new({ from: owner });
  //   const receipt = await box.store(value, { from: owner });
  //
  //   expectEvent(receipt, "ValueChanged", { newValue: value });
  // });

  it("should not allow a non owner to distribute tokens", async () => {
    const nash = await NashCoin.new({ from: owner });
    await expectRevert(
      nash.distribute({ from: other }),
      "Ownable: caller is not the owner"
    );
  });
});
