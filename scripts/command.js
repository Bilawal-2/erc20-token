const token = await ethers.getContractAt("MyToken", "0x99a5ca76bfAFA17FFD7b9c12639b4185E1959110");
const name = await token.name();
console.log("Token Name:", name);

const symbol = await token.symbol();
console.log("Token Symbol:", symbol);

const totalSupply = await token.totalSupply();
console.log("Total Supply:", totalSupply.toString());