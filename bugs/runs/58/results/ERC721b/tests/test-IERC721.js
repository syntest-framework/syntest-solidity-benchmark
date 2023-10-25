const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractigkCDcI = await IERC721.new({from: accounts[3]});
		const tokenIdo3zRizl = BigInt("83")
		const toB3OlG0G = accounts[4]
		const tokenIdDqFknIl = BigInt("395")
		const tokenIdYYLUB6I = BigInt("1678")
		const toy456R8C = accounts[1]
		const fromHYVULof = accounts[2]
		await contractigkCDcI.approve.call(toB3OlG0G, tokenIdo3zRizl, {from: accounts[0]});
		const ownerrY2HM5l = await contractigkCDcI.ownerOf.call(tokenIdDqFknIl, {from: accounts[4]});
		await contractigkCDcI.safeTransferFrom.call(fromHYVULof, toy456R8C, tokenIdYYLUB6I, {from: accounts[2]});
	});
})