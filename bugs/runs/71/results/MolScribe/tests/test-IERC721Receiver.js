const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contract8uS3qw = await IERC721Receiver.new({from: accounts[4]});
		const dataP2PufTr = "0x0d0c03131702001e1919190c06020e1116100d03040408151d"
		const tokenIdPKTOaL = BigInt("847")
		const fromGyuOahW = accounts[3]
		const operatorJrfTuPR = accounts[5]
		const datavBJvSY3 = "0x110318051603090b030b041d081b1a06070b16"
		const tokenIdiXDRLUG = BigInt("859")
		const fromsHapOez = accounts[4]
		const operatorgZnzNu9 = accounts[5]
		const datafPzrPHJ = "0x150b1912040f1d"
		const tokenIdOT3s5yo = BigInt("907")
		const fromcXMapS = accounts[4]
		const operatorMgaAXXd = accounts[2]
		const dataXv5fufH = "0x14010e0e140c1f0118"
		const tokenIdVRppdU8 = BigInt("896")
		const fromt0O9BmP = accounts[4]
		const operatormqJWTpK = accounts[2]
		const nullfh0c98N = await contract8uS3qw.onERC721Received.call(operatorJrfTuPR, fromGyuOahW, tokenIdPKTOaL, dataP2PufTr, {from: accounts[4]});
		const nullK5TQSmo = await contract8uS3qw.onERC721Received.call(operatorgZnzNu9, fromsHapOez, tokenIdiXDRLUG, datavBJvSY3, {from: accounts[1]});
		const nullZDQGwIB = await contract8uS3qw.onERC721Received.call(operatorMgaAXXd, fromcXMapS, tokenIdOT3s5yo, datafPzrPHJ, {from: accounts[3]});
		const nulllCDD9tU = await contract8uS3qw.onERC721Received.call(operatormqJWTpK, fromt0O9BmP, tokenIdVRppdU8, dataXv5fufH, {from: accounts[0]});
	});
})