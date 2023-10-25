const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractDSKR0Vm = await IERC721Receiver.new({from: accounts[1]});
		const datas2GNZc = "0x111f1c19031116080c06"
		const tokenIdsUY8Rly = BigInt("640")
		const fromcSARt1J = accounts[1]
		const operatoro0egvhm = accounts[4]
		const dataRA7wHo0 = "0x061f060314"
		const tokenIdKPnPdB2 = BigInt("1894")
		const fromvNvF19n = accounts[1]
		const operatore8RAH85 = accounts[4]
		const datarTkomG5 = "0x1107"
		const tokenIdxGosVlN = BigInt("1193")
		const from6X0It5 = accounts[0]
		const operatormX0KU0q = "0x0000000000000000000000000000000000000001"
		const datalFV6hiN = "0x1407130c0f1f02140d0d110205130e101709181c1a1d1a000f11060319030c"
		const tokenIdeL7dT1 = BigInt("1255")
		const fromIGWV7ND = accounts[1]
		const operatorkUyOnKA = accounts[0]
		const nullkovKCt = await contractDSKR0Vm.onERC721Received.call(operatoro0egvhm, fromcSARt1J, tokenIdsUY8Rly, datas2GNZc, {from: accounts[0]});
		const nullab2yxwJ = await contractDSKR0Vm.onERC721Received.call(operatore8RAH85, fromvNvF19n, tokenIdKPnPdB2, dataRA7wHo0, {from: accounts[2]});
		const null5yLL33 = await contractDSKR0Vm.onERC721Received.call(operatormX0KU0q, from6X0It5, tokenIdxGosVlN, datarTkomG5, {from: accounts[0]});
		const nullJH9g9Uy = await contractDSKR0Vm.onERC721Received.call(operatorkUyOnKA, fromIGWV7ND, tokenIdeL7dT1, datalFV6hiN, {from: accounts[4]});
	});
})