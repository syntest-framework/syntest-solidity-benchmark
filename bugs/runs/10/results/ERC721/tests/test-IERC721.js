const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contract73UJeg = await IERC721.new({from: accounts[3]});
		const tokenIdJnFPpI = BigInt("1506")
		const _approvediafdmy4 = false
		const operatorzaQsef2 = accounts[2]
		const tokenIdYCkmVgW = BigInt("1757")
		const tolqrdjib = accounts[1]
		const fromFhlkSHw = accounts[4]
		const _approved9UtJpF = true
		const operatorU2liQ8e = accounts[0]
		const _approvedKoo7iBM = true
		const operatorxVoCp3R = accounts[1]
		const operatoriMoF5YR = await contract73UJeg.getApproved.call(tokenIdJnFPpI, {from: "0x0000000000000000000000000000000000000001"});
		await contract73UJeg.setApprovalForAll.call(operatorzaQsef2, _approvediafdmy4, {from: accounts[4]});
		await contract73UJeg.safeTransferFrom.call(fromFhlkSHw, tolqrdjib, tokenIdYCkmVgW, {from: accounts[2]});
		await contract73UJeg.setApprovalForAll.call(operatorU2liQ8e, _approved9UtJpF, {from: accounts[5]});
		await contract73UJeg.setApprovalForAll.call(operatorxVoCp3R, _approvedKoo7iBM, {from: accounts[0]});
	});
})