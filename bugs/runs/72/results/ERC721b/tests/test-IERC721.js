const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractWs6YCgr = await IERC721.new({from: accounts[5]});
		const _approvedaSL1Uf = true
		const operatornDmymur = accounts[2]
		const _approvedpSYzgT7 = true
		const operatorU9orEwL = accounts[5]
		const tokenIdo1BCp6U = BigInt("798")
		const tokenIdbsll3fO = BigInt("926")
		const toLhcvvlP = accounts[2]
		const fromvW4snDO = accounts[3]
		const tokenIdqU2pq5x = BigInt("684")
		await contractWs6YCgr.setApprovalForAll.call(operatornDmymur, _approvedaSL1Uf, {from: accounts[2]});
		await contractWs6YCgr.setApprovalForAll.call(operatorU9orEwL, _approvedpSYzgT7, {from: accounts[3]});
		const operatorz0i4Ndl = await contractWs6YCgr.getApproved.call(tokenIdo1BCp6U, {from: accounts[4]});
		await contractWs6YCgr.safeTransferFrom.call(fromvW4snDO, toLhcvvlP, tokenIdbsll3fO, {from: accounts[5]});
		const operatorZ9lwu7D = await contractWs6YCgr.getApproved.call(tokenIdqU2pq5x, {from: accounts[4]});
	});
})