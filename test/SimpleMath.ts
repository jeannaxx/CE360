import { assert } from "chai";
import { network } from "hardhat";

const { ethers } = await network.create();

describe("SimpleMath", function () {
  it("should add two numbers correctly", async function () { // บวก
    const simpleMath = await ethers.deployContract("SimpleMath");
    assert.equal(await simpleMath.add(7n, 2n), 9n);
  });

  it("should subtract two numbers correctly", async function () { // ลบ
    const simpleMath = await ethers.deployContract("SimpleMath");
    assert.equal(await simpleMath.subtract(8n, 6n), 2n);
  });

  it("should multiply two numbers correctly", async function () { // คูณ
    const simpleMath = await ethers.deployContract("SimpleMath");
    assert.equal(await simpleMath.multiply(2n, 2n), 4n);
  });

  it("should divide two numbers correctly", async function () { // หาร
    const simpleMath = await ethers.deployContract("SimpleMath");
    assert.equal(await simpleMath.divide(12n, 3n), 4n);
  });
});
