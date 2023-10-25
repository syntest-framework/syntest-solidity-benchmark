const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contracte0jS9PV = await IERC721Receiver.new({from: "0x0000000000000000000000000000000000000001"});
		const datam5Ad8P = "0x1c07021a160a0102040910131e080b0d1a120e1601060e0d061e081006091d"
		const tokenIdp4VIHT = BigInt("1208")
		const fromdiN7fY = accounts[1]
		const operatorGM8BIqk = accounts[0]
		const datadcphbE = "0x1f1611"
		const tokenIdmPhrmXB = BigInt("307")
		const fromRhnJYiS = accounts[0]
		const operatorMUdqrMJ = accounts[4]
		const nullCwRkUW = await contracte0jS9PV.onERC721Received.call(operatorGM8BIqk, fromdiN7fY, tokenIdp4VIHT, datam5Ad8P, {from: accounts[4]});
		const nullXUp35ze = await contracte0jS9PV.onERC721Received.call(operatorMUdqrMJ, fromRhnJYiS, tokenIdmPhrmXB, datadcphbE, {from: "0x0000000000000000000000000000000000000001"});
	});
})