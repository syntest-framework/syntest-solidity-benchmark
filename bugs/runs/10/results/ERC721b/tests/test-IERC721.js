const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractQTEQq4C = await IERC721.new({from: accounts[0]});
		const tokenIdIJUnQSd = BigInt("287")
		const toooeVTT0 = accounts[1]
		const fromNRGjmfe = accounts[2]
		const tokenIdTqSBX5r = BigInt("1217")
		const toxYW5vL = accounts[2]
		await contractQTEQq4C.transferFrom.call(fromNRGjmfe, toooeVTT0, tokenIdIJUnQSd, {from: accounts[3]});
		await contractQTEQq4C.approve.call(toxYW5vL, tokenIdTqSBX5r, {from: accounts[4]});
	});
})