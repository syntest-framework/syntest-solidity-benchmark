const ERC165 = artifacts.require("ERC165");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ERC165', (accounts) => {
	it('test for ERC165', async () => {
		const contractyegJKdw = await ERC165.new({from: accounts[4]});
		const interfaceIdQbdhaIP = "0x1b1a0709"
		const interfaceIdBvkOgrP = "0x07010e1c"
		const interfaceIdHxFKsfQ = "0x0e1a0006"
		const interfaceIdrnl3rFQ = "0x020a121f"
		const interfaceIdfPrOBXp = "0x0d160c18"
		const nulllFeffRm = await contractyegJKdw.supportsInterface.call(interfaceIdQbdhaIP, {from: accounts[1]});
		const nullwVNwMTv = await contractyegJKdw.supportsInterface.call(interfaceIdBvkOgrP, {from: accounts[2]});
		const nullNRR1b8o = await contractyegJKdw.supportsInterface.call(interfaceIdHxFKsfQ, {from: "0x0000000000000000000000000000000000000001"});
		const nullxBk5vOZ = await contractyegJKdw.supportsInterface.call(interfaceIdrnl3rFQ, {from: accounts[0]});
		const nullA85kJX = await contractyegJKdw.supportsInterface.call(interfaceIdfPrOBXp, {from: accounts[1]});
	});
})