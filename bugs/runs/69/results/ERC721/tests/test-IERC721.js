const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractS6fHDRx = await IERC721.new({from: accounts[4]});
		const tokenIdt1hjOjX = BigInt("1931")
		const toflUzZL8 = accounts[1]
		const fromAMtmmMk = accounts[0]
		const tokenIdVpfhSI = BigInt("1144")
		const tonkAGtR = accounts[4]
		const fromZ1BusT = accounts[0]
		const tokenIdXjgiVm = BigInt("105")
		const tokenIdlQjIo62 = BigInt("638")
		const togYerGZn = accounts[0]
		const fromfk1UPBu = accounts[4]
		const tokenIdE3fI8D8 = BigInt("1684")
		await contractS6fHDRx.transferFrom.call(fromAMtmmMk, toflUzZL8, tokenIdt1hjOjX, {from: accounts[1]});
		await contractS6fHDRx.safeTransferFrom.call(fromZ1BusT, tonkAGtR, tokenIdVpfhSI, {from: accounts[1]});
		const ownerpNMtVo9 = await contractS6fHDRx.ownerOf.call(tokenIdXjgiVm, {from: accounts[5]});
		await contractS6fHDRx.transferFrom.call(fromfk1UPBu, togYerGZn, tokenIdlQjIo62, {from: accounts[5]});
		const ownerwwATYrc = await contractS6fHDRx.ownerOf.call(tokenIdE3fI8D8, {from: accounts[4]});
	});
})