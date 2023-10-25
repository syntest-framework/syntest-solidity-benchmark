const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractqGnKcfW = await IERC721.new({from: accounts[2]});
		const operatorukFYqeo = accounts[1]
		const ownerceAu3Us = accounts[5]
		const operatoreJmNltn = accounts[5]
		const ownerQUrmU37 = "0x0000000000000000000000000000000000000001"
		const tokenIdPn6grLn = BigInt("1196")
		const tofpMSoK = accounts[1]
		const _approvedHzx9isK = true
		const operatorCyKM7pU = accounts[2]
		const _approvedAoVevt5 = false
		const operatorF50ZR7S = accounts[0]
		const nullWtC65BG = await contractqGnKcfW.isApprovedForAll.call(ownerceAu3Us, operatorukFYqeo, {from: "0x0000000000000000000000000000000000000001"});
		const nullz3s3IvX = await contractqGnKcfW.isApprovedForAll.call(ownerQUrmU37, operatoreJmNltn, {from: accounts[2]});
		await contractqGnKcfW.approve.call(tofpMSoK, tokenIdPn6grLn, {from: accounts[2]});
		await contractqGnKcfW.setApprovalForAll.call(operatorCyKM7pU, _approvedHzx9isK, {from: accounts[0]});
		await contractqGnKcfW.setApprovalForAll.call(operatorF50ZR7S, _approvedAoVevt5, {from: accounts[3]});
	});
})