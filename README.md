# MyToken - ERC-20 Token Project

MyToken is a beginner-friendly blockchain project that demonstrates how to create a fungible token using the ERC-20 standard on the Ethereum blockchain. Built with Solidity and OpenZeppelin, this project is designed to help developers get started with smart contract development and blockchain technology.

## Features

- **ERC-20 Standard**: Fully compliant with the ERC-20 token standard.
- **Custom Token Name and Symbol**: MyToken (MTK).
- **Initial Supply**: 1,000,000 tokens minted to the deployer's address.
- **Built with OpenZeppelin**: Ensures best practices and security for smart contracts.

## Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js**: [Download and install](https://nodejs.org/)
- **Hardhat**: Install globally with `npm install --save-dev hardhat`.
- **Ganache**: [Download Ganache](https://trufflesuite.com/ganache/).
- **MetaMask**: [Install MetaMask](https://metamask.io/).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/MyToken.git
   cd MyToken
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Install OpenZeppelin Contracts:

   ```bash
   npm install @openzeppelin/contracts
   ```

## Usage

### 1. Initialize Hardhat

Set up Hardhat in the project:

```bash
npx hardhat
```

Follow the prompts to create a Hardhat project. Use the default settings.

### 2. Compile the Smart Contract

Compile the Solidity code:

```bash
npx hardhat compile
```

### 3. Start Ganache

Start Ganache to set up a local Ethereum blockchain for testing.

### 4. Deploy the Contract

Deploy the smart contract to the local blockchain:

1. Create a deployment script in `scripts/deploy.js`:

   ```javascript
   const hre = require("hardhat");

   async function main() {
       const MyToken = await hre.ethers.getContractFactory("MyToken");
       const token = await MyToken.deploy();

       await token.deployed();
       console.log("MyToken deployed to:", token.address);
   }

   main().catch((error) => {
       console.error(error);
       process.exitCode = 1;
   });
   ```

2. Run the deployment script:

   ```bash
   npx hardhat run scripts/deploy.js --network localhost
   ```

### 5. Interact with the Contract

Use Hardhat's console to interact with the deployed contract:

```bash
npx hardhat console --network localhost
```

Example commands:

```javascript
const token = await ethers.getContractAt("MyToken", "<DEPLOYED_CONTRACT_ADDRESS>");
const name = await token.name();
console.log("Token Name:", name);

const symbol = await token.symbol();
console.log("Token Symbol:", symbol);

const totalSupply = await token.totalSupply();
console.log("Total Supply:", totalSupply.toString());
```

## Testing

Run the test suite to ensure the contract behaves as expected:

1. Create a test file in `test/MyToken.js`:

   ```javascript
   const { expect } = require("chai");

   describe("MyToken", function () {
       it("should have the correct name and symbol", async function () {
           const MyToken = await ethers.getContractFactory("MyToken");
           const token = await MyToken.deploy();
           await token.deployed();

           expect(await token.name()).to.equal("MyToken");
           expect(await token.symbol()).to.equal("MTK");
       });

       it("should mint the total supply to the deployer's address", async function () {
           const [deployer] = await ethers.getSigners();
           const MyToken = await ethers.getContractFactory("MyToken");
           const token = await MyToken.deploy();
           await token.deployed();

           const totalSupply = await token.totalSupply();
           const deployerBalance = await token.balanceOf(deployer.address);

           expect(totalSupply).to.equal(deployerBalance);
       });
   });
   ```

2. Run the tests:

   ```bash
   npx hardhat test
   ```

## Deployment on Testnet (Optional)

1. Configure the `hardhat.config.js` file with your Infura project ID and testnet settings.
2. Deploy the contract to a testnet (e.g., Goerli):

   ```bash
   npx hardhat run scripts/deploy.js --network goerli
   ```

## Project Structure

```
MyToken/
├── contracts/       # Solidity smart contracts
│   └── MyToken.sol  # ERC-20 token contract
├── scripts/         # Deployment scripts
│   └── deploy.js
├── test/            # Test scripts for the token
│   └── MyToken.js
├── hardhat.config.js # Hardhat configuration file
└── README.md        # Project documentation
```

## Technologies Used

- **Solidity**: Smart contract programming language.
- **Hardhat**: Development environment for Ethereum.
- **Ganache**: Local Ethereum blockchain for testing.
- **MetaMask**: Ethereum wallet for interaction.
- **OpenZeppelin**: Secure smart contract library.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Feel free to reach out if you have any questions or suggestions for improvement!
