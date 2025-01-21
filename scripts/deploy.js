const hre = require("hardhat");

async function main() {
    const MyToken = await hre.ethers.getContractFactory("MyToken");
    const token = await MyToken.deploy();

    // Wait for the transaction to be mined
    await token.waitForDeployment();
    
    console.log("MyToken deployed to:", await token.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});