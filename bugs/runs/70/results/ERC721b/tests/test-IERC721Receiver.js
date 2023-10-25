const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractnWvgVDQ = await IERC721Receiver.new({from: accounts[0]});
		const datahqH4rK = "0x18111d1e190215"
		const tokenIdDLhu2GC = BigInt("1355")
		const fromF9cMACE = accounts[2]
		const operatorH0TI4xV = accounts[1]
		const dataeq3genW = "0x061b1a131f1f0f1f0e181b0b020c1a03011c0c1b041604030e15170a101705"
		const tokenIdB27dWy = BigInt("2006")
		const fromHlXJDQz = "0x0000000000000000000000000000000000000001"
		const operatorUKbU49V = accounts[1]
		const null80OYdm = await contractnWvgVDQ.onERC721Received.call(operatorH0TI4xV, fromF9cMACE, tokenIdDLhu2GC, datahqH4rK, {from: accounts[0]});
		const nullqTWpf5Q = await contractnWvgVDQ.onERC721Received.call(operatorUKbU49V, fromHlXJDQz, tokenIdB27dWy, dataeq3genW, {from: accounts[2]});
	});
})