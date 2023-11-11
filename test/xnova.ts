// import { expect } from "chai";
import { ethers } from "hardhat";
import { XNOVA } from "../typechain-types";

describe("XNOVA", function () {
  // We define a fixture to reuse the same setup in every test.

  let xnova: XNOVA;
  before(async () => {
    const [owner] = await ethers.getSigners();
    const xnovaFactory = await ethers.getContractFactory("XNOVA");
    xnova = (await xnovaFactory.deploy(owner.address)) as XNOVA;
    await xnova.deployed();
  });
});
