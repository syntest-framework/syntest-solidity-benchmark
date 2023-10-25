const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractEflj4rO = await IERC721Receiver.new({from: "0x0000000000000000000000000000000000000001"});
		const dataUA68RL4 = "0x040f08"
		const tokenIdlWFXjoU = BigInt("236")
		const fromv9LzCXq = accounts[2]
		const operatorN6J31u3 = accounts[3]
		const datadPeQk9M = "0x1b12161911150b070f061619080e"
		const tokenIdj3nKOmy = BigInt("585")
		const fromXaBGQzv = accounts[3]
		const operatoryUK3biA = accounts[4]
		const nullV44qo5 = await contractEflj4rO.onERC721Received.call(operatorN6J31u3, fromv9LzCXq, tokenIdlWFXjoU, dataUA68RL4, {from: accounts[2]});
		const nullp7EZCVn = await contractEflj4rO.onERC721Received.call(operatoryUK3biA, fromXaBGQzv, tokenIdj3nKOmy, datadPeQk9M, {from: accounts[1]});
	});
})