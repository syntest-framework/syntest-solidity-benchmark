const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractJMKRz1A = await IERC721.new({from: accounts[4]});
		const tokenIdT8eLL2D = BigInt("1423")
		const tohzBHmkZ = accounts[0]
		const operatoru7HlCNK = accounts[4]
		const ownerRC3SMBU = accounts[1]
		const tokenIdhrzEf3 = BigInt("740")
		const tokenIdX6IzG5R = BigInt("1199")
		const operatorzXTY4Dy = "0x0000000000000000000000000000000000000001"
		const ownerPsr8Fb = accounts[2]
		await contractJMKRz1A.approve.call(tohzBHmkZ, tokenIdT8eLL2D, {from: "0x0000000000000000000000000000000000000001"});
		const nullJnm2kuj = await contractJMKRz1A.isApprovedForAll.call(ownerRC3SMBU, operatoru7HlCNK, {from: accounts[1]});
		const operatorVMCeaRj = await contractJMKRz1A.getApproved.call(tokenIdhrzEf3, {from: "0x0000000000000000000000000000000000000001"});
		const ownerp2LDYgI = await contractJMKRz1A.ownerOf.call(tokenIdX6IzG5R, {from: accounts[2]});
		const nulle3XXHP1 = await contractJMKRz1A.isApprovedForAll.call(ownerPsr8Fb, operatorzXTY4Dy, {from: accounts[4]});
	});
})