const { expect } = require("chai");

describe("MyToken", function () {
    it("should have the correct name and symbol", async function () {
        const MyToken = await ethers.getContractFactory("MyToken");
        const token = await MyToken.deploy();
        await token.waitForDeployment();

        expect(await token.name()).to.equal("MyToken");
        expect(await token.symbol()).to.equal("MTK");
    });

    it("should mint the total supply to the deployer's address", async function () {
        const [deployer] = await ethers.getSigners();
        const MyToken = await ethers.getContractFactory("MyToken");
        const token = await MyToken.deploy();
        await token.waitForDeployment();

        const totalSupply = await token.totalSupply();
        const deployerBalance = await token.balanceOf(deployer.address);

        expect(totalSupply).to.equal(deployerBalance);
    });
});