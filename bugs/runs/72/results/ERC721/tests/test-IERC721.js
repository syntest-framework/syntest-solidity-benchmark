const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractZWL2MEe = await IERC721.new({from: accounts[0]});
		const tokenIdfk7U7U4 = BigInt("1654")
		const tokenIdZep6hx9 = BigInt("625")
		const toeB0Zwd = accounts[2]
		const fromSlJ4yzg = accounts[1]
		const tokenIdSFRnctp = BigInt("1635")
		const toeKE0TcG = accounts[4]
		const fromZQI48aj = accounts[3]
		const ownerVO8ceRK = await contractZWL2MEe.ownerOf.call(tokenIdfk7U7U4, {from: accounts[1]});
		await contractZWL2MEe.transferFrom.call(fromSlJ4yzg, toeB0Zwd, tokenIdZep6hx9, {from: accounts[0]});
		await contractZWL2MEe.transferFrom.call(fromZQI48aj, toeKE0TcG, tokenIdSFRnctp, {from: accounts[1]});
	});
})