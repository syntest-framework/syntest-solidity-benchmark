const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractLxpQkQu = await IERC721.new({from: accounts[0]});
		const tokenIdvZ2FF9Q = BigInt("1059")
		const toiwexyHh = accounts[3]
		const fromQWuoO8I = accounts[1]
		const tokenIdtp7fG4B = BigInt("1815")
		const operatoroqiup7x = accounts[2]
		const ownerKIAhzXS = accounts[3]
		await contractLxpQkQu.safeTransferFrom.call(fromQWuoO8I, toiwexyHh, tokenIdvZ2FF9Q, {from: "0x0000000000000000000000000000000000000001"});
		const operatorcLPNF2e = await contractLxpQkQu.getApproved.call(tokenIdtp7fG4B, {from: accounts[1]});
		const nullCVKUOPr = await contractLxpQkQu.isApprovedForAll.call(ownerKIAhzXS, operatoroqiup7x, {from: accounts[0]});
	});
})