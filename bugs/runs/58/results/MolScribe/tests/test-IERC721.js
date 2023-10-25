const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractO3ILDks = await IERC721.new({from: accounts[5]});
		const _approvedYRU2RJv = false
		const operatorLaLYsQ1 = accounts[5]
		const tokenIdlxjW6JL = BigInt("1282")
		const operatorSn6cNoJ = accounts[1]
		const ownerkgbvOHO = accounts[3]
		const operatorZ6I8TT5 = accounts[3]
		const ownerrFMyMY = accounts[1]
		const tokenIdaNzHrum = BigInt("290")
		const toCKtRaWF = accounts[5]
		const frommldxZwj = accounts[0]
		const tokenIdjrf453Q = BigInt("716")
		const toY6gozcd = accounts[3]
		const fromTDaEWq = accounts[3]
		await contractO3ILDks.setApprovalForAll.call(operatorLaLYsQ1, _approvedYRU2RJv, {from: accounts[4]});
		const operatorZubiImN = await contractO3ILDks.getApproved.call(tokenIdlxjW6JL, {from: accounts[2]});
		const nullMgTfnOE = await contractO3ILDks.isApprovedForAll.call(ownerkgbvOHO, operatorSn6cNoJ, {from: "0x0000000000000000000000000000000000000001"});
		const nullvAeWiqc = await contractO3ILDks.isApprovedForAll.call(ownerrFMyMY, operatorZ6I8TT5, {from: accounts[4]});
		await contractO3ILDks.safeTransferFrom.call(frommldxZwj, toCKtRaWF, tokenIdaNzHrum, {from: accounts[1]});
		await contractO3ILDks.transferFrom.call(fromTDaEWq, toY6gozcd, tokenIdjrf453Q, {from: accounts[3]});
	});
})