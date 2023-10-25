const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractKtETvs1 = await IERC721Receiver.new({from: accounts[2]});
		const dataNNMfoGn = "0x080015071319080f0b081c0811071e130d080d1a1d0902"
		const tokenIdGmYvff = BigInt("1525")
		const fromtyvwPgE = accounts[1]
		const operatorIidK9k8 = accounts[2]
		const data2kwwrT = "0x0c141f100d1003020f130b051e1e060c11171018121d0c0e13151e"
		const tokenIdKW8yNnf = BigInt("1724")
		const fromDU5UzR = accounts[5]
		const operatorQwMTudS = accounts[0]
		const dataUFJrr0s = "0x0a1819150b0e09060d1e0b040e1f0b06111f110a0a150b"
		const tokenIdgDzjD1w = BigInt("1704")
		const fromLEmkGMT = accounts[2]
		const operatorkearDE = accounts[2]
		const datasIa8OZE = "0x111d090f06151c180f141e020803170017070f1a160f01070c071c"
		const tokenIdw4oJLJh = BigInt("1097")
		const fromJDnnplT = accounts[0]
		const operatortQ50yV7 = "0x0000000000000000000000000000000000000001"
		const nulldMmnxvW = await contractKtETvs1.onERC721Received.call(operatorIidK9k8, fromtyvwPgE, tokenIdGmYvff, dataNNMfoGn, {from: accounts[2]});
		const null4ymiIk = await contractKtETvs1.onERC721Received.call(operatorQwMTudS, fromDU5UzR, tokenIdKW8yNnf, data2kwwrT, {from: accounts[3]});
		const nullbAFIkXD = await contractKtETvs1.onERC721Received.call(operatorkearDE, fromLEmkGMT, tokenIdgDzjD1w, dataUFJrr0s, {from: "0x0000000000000000000000000000000000000001"});
		const nullrKnBOIt = await contractKtETvs1.onERC721Received.call(operatortQ50yV7, fromJDnnplT, tokenIdw4oJLJh, datasIa8OZE, {from: accounts[3]});
	});
})