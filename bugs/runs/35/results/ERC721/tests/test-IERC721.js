const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractFIqq3de = await IERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const _approvedYsRiGAe = true
		const operatorMi2xCvX = accounts[2]
		const tokenIdX24pyxJ = BigInt("1802")
		const tokenIdf6DQybS = BigInt("1821")
		const toIeOW0IV = accounts[4]
		const fromaWHAapa = accounts[2]
		const tokenIdhJkfwPz = BigInt("1759")
		const _approvednZP8adg = false
		const operatorxbp1O4v = accounts[4]
		const operatorTx8nRp7 = accounts[2]
		const ownervFxrsuz = accounts[5]
		await contractFIqq3de.setApprovalForAll.call(operatorMi2xCvX, _approvedYsRiGAe, {from: accounts[4]});
		const operatorq7hCeO = await contractFIqq3de.getApproved.call(tokenIdX24pyxJ, {from: accounts[4]});
		await contractFIqq3de.transferFrom.call(fromaWHAapa, toIeOW0IV, tokenIdf6DQybS, {from: accounts[3]});
		const operatorzTsop1 = await contractFIqq3de.getApproved.call(tokenIdhJkfwPz, {from: accounts[0]});
		await contractFIqq3de.setApprovalForAll.call(operatorxbp1O4v, _approvednZP8adg, {from: accounts[2]});
		const nullFaLXFV6 = await contractFIqq3de.isApprovedForAll.call(ownervFxrsuz, operatorTx8nRp7, {from: accounts[0]});
	});
})