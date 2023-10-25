const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractCnk3AcU = await IERC721Receiver.new({from: accounts[2]});
		const data70of5r = "0x100a0203031e180319050a1315121e080612071314011e1b07"
		const tokenIdMqugPcl = BigInt("611")
		const fromeEzESfl = accounts[2]
		const operatorJQctk3f = accounts[1]
		const data9Qd0Ai = "0x03051d090b1e031d"
		const tokenIdVDFF8bH = BigInt("1298")
		const fromF4Vvwp = accounts[0]
		const operatorP2gLVTF = accounts[4]
		const dataKWGDCX3 = "0x1d06"
		const tokenId50H1Nt = BigInt("462")
		const fromgLXf13f = accounts[3]
		const operator9pjQtE = accounts[3]
		const datac9Rqwd1 = "0x14131f1d191e1a0905091a0e0a1d1c0917100d130e14"
		const tokenIdDZUb2YV = BigInt("1795")
		const fromUjipB9Q = accounts[0]
		const operatoroWDzMhS = accounts[4]
		const dataTf8lPtz = "0x14011d1f1a1d1b15171713"
		const tokenIdMSxlLar = BigInt("692")
		const fromlDnc7r = accounts[2]
		const operatorKD8TodY = accounts[2]
		const dataaP5oZSE = "0x08091915"
		const tokenIdaGjivdn = BigInt("568")
		const fromzaMd6wy = accounts[2]
		const operatorplQ3YZK = "0x0000000000000000000000000000000000000001"
		const nulleZZP9Xg = await contractCnk3AcU.onERC721Received.call(operatorJQctk3f, fromeEzESfl, tokenIdMqugPcl, data70of5r, {from: accounts[3]});
		const nullZnolq2r = await contractCnk3AcU.onERC721Received.call(operatorP2gLVTF, fromF4Vvwp, tokenIdVDFF8bH, data9Qd0Ai, {from: accounts[2]});
		const nullbDDtjcG = await contractCnk3AcU.onERC721Received.call(operator9pjQtE, fromgLXf13f, tokenId50H1Nt, dataKWGDCX3, {from: accounts[0]});
		const nullRv2tis4 = await contractCnk3AcU.onERC721Received.call(operatoroWDzMhS, fromUjipB9Q, tokenIdDZUb2YV, datac9Rqwd1, {from: accounts[5]});
		const nullGXfy7Vz = await contractCnk3AcU.onERC721Received.call(operatorKD8TodY, fromlDnc7r, tokenIdMSxlLar, dataTf8lPtz, {from: accounts[3]});
		const nullwJ22clA = await contractCnk3AcU.onERC721Received.call(operatorplQ3YZK, fromzaMd6wy, tokenIdaGjivdn, dataaP5oZSE, {from: "0x0000000000000000000000000000000000000001"});
	});
})