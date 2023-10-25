const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractw6erhA2 = await IERC721Receiver.new({from: accounts[3]});
		const dataiZ9X9jd = "0x07090b0c160c1d080406191e1f0e0f0004001b121c0603060b1e0e"
		const tokenIdpwMWGzN = BigInt("334")
		const fromgrUC1T = accounts[3]
		const operatorWgJC6x = accounts[2]
		const datay8RnLxK = "0x0b1f15150f101000050306120f18020e0709051616040e1512011d11"
		const tokenIdfxr1VLk = BigInt("2006")
		const fromjS423wF = accounts[4]
		const operatorlL81QAb = accounts[0]
		const datatvFXpvy = "0x0d1c09"
		const tokenIdgQQqxwH = BigInt("1384")
		const fromC5PlF0m = accounts[4]
		const operatorTDnqwtM = accounts[4]
		const dataxInEbic = "0x0703191c190c0a10101b16050d111d1d1f0a1a1c1b1108011d04110c0304"
		const tokenIdlzQYZ42 = BigInt("1923")
		const fromgPGQr5d = "0x0000000000000000000000000000000000000001"
		const operatorchAM2pR = accounts[1]
		const dataRpSpb3 = "0x140714151e1e1c07060416"
		const tokenIdpCgRC04 = BigInt("962")
		const fromoyH422d = accounts[0]
		const operatorfatDgoE = accounts[2]
		const dataetC3BjC = "0x1607031e1613001f0114150b141b111612"
		const tokenIdvtksRm = BigInt("1227")
		const fromolVoBrc = accounts[2]
		const operatorxR6SweZ = accounts[4]
		const nullqoZZxnq = await contractw6erhA2.onERC721Received.call(operatorWgJC6x, fromgrUC1T, tokenIdpwMWGzN, dataiZ9X9jd, {from: accounts[4]});
		const nullZdXQLk1 = await contractw6erhA2.onERC721Received.call(operatorlL81QAb, fromjS423wF, tokenIdfxr1VLk, datay8RnLxK, {from: accounts[4]});
		const nullVWRE3U3 = await contractw6erhA2.onERC721Received.call(operatorTDnqwtM, fromC5PlF0m, tokenIdgQQqxwH, datatvFXpvy, {from: accounts[3]});
		const nulliubOgtA = await contractw6erhA2.onERC721Received.call(operatorchAM2pR, fromgPGQr5d, tokenIdlzQYZ42, dataxInEbic, {from: accounts[3]});
		const nullnB8Cntd = await contractw6erhA2.onERC721Received.call(operatorfatDgoE, fromoyH422d, tokenIdpCgRC04, dataRpSpb3, {from: accounts[0]});
		const nullprojg3P = await contractw6erhA2.onERC721Received.call(operatorxR6SweZ, fromolVoBrc, tokenIdvtksRm, dataetC3BjC, {from: accounts[5]});
	});
})