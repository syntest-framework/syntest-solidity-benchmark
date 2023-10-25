const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractILQDLJO = await IERC721.new({from: accounts[2]});
		const dataHhwA6NP = "0x1308020c0910100d0f0b0e181f111d1003071a161313"
		const tokenIdTOC5TO8 = BigInt("1819")
		const toB4yqHKi = "0x0000000000000000000000000000000000000001"
		const fromLgRUq0E = accounts[2]
		const owneryCh8mjz = accounts[1]
		const _approvedEYDQ2Oi = false
		const operatorKwupmC = accounts[2]
		const dataujOTJiI = "0x11071a18131d0302071b110d05161104151c0916031b0017111b0c0004"
		const tokenIdhcdLJlT = BigInt("1914")
		const toqPrYBDk = accounts[3]
		const fromUxFDwHl = "0x0000000000000000000000000000000000000001"
		const tokenIdHoqmEKS = BigInt("154")
		const tosnHrOcx = accounts[5]
		const tokenIdUEbHqEp = BigInt("576")
		const toKLxDJlr = accounts[5]
		const fromXUFaEpO = accounts[3]
		await contractILQDLJO.safeTransferFrom.call(fromLgRUq0E, toB4yqHKi, tokenIdTOC5TO8, dataHhwA6NP, {from: accounts[2]});
		const balanceFBusFz7 = await contractILQDLJO.balanceOf.call(owneryCh8mjz, {from: "0x0000000000000000000000000000000000000001"});
		await contractILQDLJO.setApprovalForAll.call(operatorKwupmC, _approvedEYDQ2Oi, {from: accounts[0]});
		await contractILQDLJO.safeTransferFrom.call(fromUxFDwHl, toqPrYBDk, tokenIdhcdLJlT, dataujOTJiI, {from: accounts[0]});
		await contractILQDLJO.approve.call(tosnHrOcx, tokenIdHoqmEKS, {from: accounts[1]});
		await contractILQDLJO.transferFrom.call(fromXUFaEpO, toKLxDJlr, tokenIdUEbHqEp, {from: accounts[2]});
	});
})