const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractrgqdMhF = await IERC721Receiver.new({from: accounts[0]});
		const datazeUlyY = "0x0c1a031b0c1315180d1a180a020e1c150a1d0109180315151201"
		const tokenIdP3G8TDl = BigInt("1964")
		const fromDrfNyh2 = accounts[5]
		const operatorTTw6Nx2 = accounts[4]
		const dataqdoNqOH = "0x1e031e1c1118011f191e"
		const tokenIdA9wnWU = BigInt("2044")
		const fromR0Ntv11 = accounts[3]
		const operatorfPwKMrU = accounts[4]
		const dataUIeUiag = "0x010b1d1d1d15040a0911080320010e0e0d040e030e0b12171d0d13010d0f140e"
		const tokenIdD9MYZb6 = BigInt("1269")
		const fromx3PScm0 = accounts[3]
		const operatorFEIGSg = accounts[2]
		const dataea9p5sc = "0x2002200a0f050d05091d1207"
		const tokenIddlziyZi = BigInt("238")
		const froms5DsFS6 = accounts[4]
		const operatordiPOTZa = accounts[2]
		const dataxJt3THf = "0x061b0809111413"
		const tokenIdundWt7h = BigInt("1702")
		const fromBAFL9fD = accounts[3]
		const operatorK68kiEK = accounts[3]
		const nullpD8LuMm = await contractrgqdMhF.onERC721Received.call(operatorTTw6Nx2, fromDrfNyh2, tokenIdP3G8TDl, datazeUlyY, {from: accounts[4]});
		const nullzy8FbzP = await contractrgqdMhF.onERC721Received.call(operatorfPwKMrU, fromR0Ntv11, tokenIdA9wnWU, dataqdoNqOH, {from: accounts[2]});
		const nullSbE7E14 = await contractrgqdMhF.onERC721Received.call(operatorFEIGSg, fromx3PScm0, tokenIdD9MYZb6, dataUIeUiag, {from: accounts[5]});
		const nullKnAWHnB = await contractrgqdMhF.onERC721Received.call(operatordiPOTZa, froms5DsFS6, tokenIddlziyZi, dataea9p5sc, {from: accounts[2]});
		const nullCJNheS3 = await contractrgqdMhF.onERC721Received.call(operatorK68kiEK, fromBAFL9fD, tokenIdundWt7h, dataxJt3THf, {from: accounts[0]});
	});
})