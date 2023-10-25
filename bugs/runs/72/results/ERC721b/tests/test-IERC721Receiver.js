const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractMI0691K = await IERC721Receiver.new({from: accounts[3]});
		const dataa1jxpXh = "0x10141d170d0f06180f201f06021619020d021c070a1d03181908"
		const tokenIdoyLkZd6 = BigInt("1838")
		const fromgeMSu1z = "0x0000000000000000000000000000000000000001"
		const operatorEldZe8T = accounts[0]
		const datauZvDa6b = "0x090708110f0f170a"
		const tokenIdmOMl8zg = BigInt("795")
		const fromzIZPWz6 = accounts[1]
		const operatormXFZETz = accounts[4]
		const dataDYyJecO = "0x0e1905060f1c04100c11071513"
		const tokenIdQrvNA2K = BigInt("2023")
		const fromets94CT = "0x0000000000000000000000000000000000000001"
		const operatoruZrI80Y = accounts[0]
		const dataHSP6DTk = "0x0e1f11041c0114170100080a13"
		const tokenIdL1qWYQR = BigInt("1054")
		const fromQ58364F = "0x0000000000000000000000000000000000000001"
		const operatorhDFQJFK = accounts[3]
		const datadlCQpjR = "0x1911160f141a0a09040b0e0f1a0d080410181c09201b0a"
		const tokenIdPmq7LyV = BigInt("62")
		const fromAO3EqTb = accounts[3]
		const operatornK5T3kY = accounts[2]
		const nullm071noc = await contractMI0691K.onERC721Received.call(operatorEldZe8T, fromgeMSu1z, tokenIdoyLkZd6, dataa1jxpXh, {from: accounts[5]});
		const nullmQwZZCi = await contractMI0691K.onERC721Received.call(operatormXFZETz, fromzIZPWz6, tokenIdmOMl8zg, datauZvDa6b, {from: accounts[3]});
		const nullhwBpWT2 = await contractMI0691K.onERC721Received.call(operatoruZrI80Y, fromets94CT, tokenIdQrvNA2K, dataDYyJecO, {from: "0x0000000000000000000000000000000000000001"});
		const nulluYUn2Ej = await contractMI0691K.onERC721Received.call(operatorhDFQJFK, fromQ58364F, tokenIdL1qWYQR, dataHSP6DTk, {from: accounts[1]});
		const nullRkJiKEg = await contractMI0691K.onERC721Received.call(operatornK5T3kY, fromAO3EqTb, tokenIdPmq7LyV, datadlCQpjR, {from: accounts[2]});
	});
})