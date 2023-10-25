const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractWdOPbqa = await IERC721.new({from: accounts[0]});
		const tokenIdtTyHQFt = BigInt("1234")
		const toLU6MY6d = accounts[3]
		const fromRqylPa = accounts[5]
		const tokenIdRDY6cpu = BigInt("312")
		const tokzKEc7 = accounts[4]
		const fromqwhCzg = accounts[0]
		const operatorASVXggA = accounts[2]
		const ownerHNwguYp = accounts[2]
		const operatorYVT8ti = accounts[3]
		const ownerONRNbGC = "0x0000000000000000000000000000000000000001"
		const tokenIdOC1tOa5 = BigInt("1436")
		const toCTcUGlz = accounts[4]
		await contractWdOPbqa.safeTransferFrom.call(fromRqylPa, toLU6MY6d, tokenIdtTyHQFt, {from: "0x0000000000000000000000000000000000000001"});
		await contractWdOPbqa.transferFrom.call(fromqwhCzg, tokzKEc7, tokenIdRDY6cpu, {from: accounts[5]});
		const nullH2qLThv = await contractWdOPbqa.isApprovedForAll.call(ownerHNwguYp, operatorASVXggA, {from: accounts[1]});
		const nullviTAfD = await contractWdOPbqa.isApprovedForAll.call(ownerONRNbGC, operatorYVT8ti, {from: accounts[5]});
		await contractWdOPbqa.approve.call(toCTcUGlz, tokenIdOC1tOa5, {from: accounts[5]});
	});
})