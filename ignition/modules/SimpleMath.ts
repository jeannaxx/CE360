import { expect, assert } from "chai";
import { network } from "hardhat";

const { ethers } = await network.create();

describe("Simplemath", function () {
  it("should add two number correctly", async function () {    //test castfunction () {
    const simpleMath = await ethers.deployContract("SimpleMath")
    //ทุกดคสจะเฟลให้พิมคำนี้ 
    assert.equal(await simpleMath.add(7n, 2n,), 9n)
  })

  it("should subtract two number correctly", async function () {    //test cast
    const simpleMath = await ethers.deployContract("SimpleMath")
    //ทุกดคสจะเฟลให้พิมคำนี้ 
    assert.equal(await simpleMath.subtract(8n, 6n,), 2n)
  })

  it("should multiply two numbers correctly", async function () {
    const simpleMath = await ethers.deployContract("SimpleMath")
    //ทุกดคสจะเฟลให้พิมคำนี้ 
    assert.equal(await simpleMath.multiply(2n, 2,), 4n)
  })

  it("should divide two number correctly", async function () {    //test cast
    const simpleMath = await ethers.deployContract("SimpleMath")
    //ทุกดคสจะเฟลให้พิมคำนี้ 
    assert.equal(await simpleMath.divide(12n, 3n,), 4n)
  })
});
