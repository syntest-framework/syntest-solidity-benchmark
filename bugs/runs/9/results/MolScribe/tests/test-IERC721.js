const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractfT4ygQK = await IERC721.new({from: accounts[4]});
		const tokenIdOcQOJRN = BigInt("1514")
		const tokenIdi4EyVzQ = BigInt("312")
		const _approvedPDsX5kj = true
		const operatorA3k3I88 = accounts[2]
		const ownergHZA4EA = await contractfT4ygQK.ownerOf.call(tokenIdOcQOJRN, {from: accounts[0]});
		const operatorsaMEUD = await contractfT4ygQK.getApproved.call(tokenIdi4EyVzQ, {from: accounts[3]});
		await contractfT4ygQK.setApprovalForAll.call(operatorA3k3I88, _approvedPDsX5kj, {from: accounts[3]});
	});
})