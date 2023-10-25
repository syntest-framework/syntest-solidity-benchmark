const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractalJz9Iw = await IERC721Receiver.new({from: accounts[0]});
		const datay83BKF = "0x18040c1f120d1e0b05090e04071c191a1901"
		const tokenIdF7Gp0ug = BigInt("1069")
		const fromWHd1UdV = accounts[3]
		const operatorMLPTRlu = accounts[2]
		const datapoLdBbe = "0x1701060c141515191c01151317141c11101518120c08141f04101c04"
		const tokenIdu6Cw72 = BigInt("1605")
		const fromHQzOu2i = accounts[4]
		const operatorCwxNZn5 = accounts[0]
		const datac42XAGh = "0x0f07121c120e0711"
		const tokenIdb3mOyf = BigInt("1492")
		const fromtT8JPor = accounts[0]
		const operatorrgDNHeD = accounts[0]
		const dataqE79S9 = "0x1410060f0d09"
		const tokenIdmRGOed9 = BigInt("356")
		const fromkc6WiwD = accounts[1]
		const operatorQrxulIH = accounts[0]
		const dataSEwffX8 = "0x1e00140d0f16111002"
		const tokenIdSKHpdL = BigInt("388")
		const fromey8Kmp2 = accounts[4]
		const operatorFh9MWg2 = accounts[3]
		const datavHMbZEg = "0x15141e080b121e1d1e1511150009201d04160c12021b180203"
		const tokenIdYfvJGmi = BigInt("394")
		const fromGpGcoFc = accounts[2]
		const operatorbvQ7HC = accounts[0]
		const nullKKmeDcL = await contractalJz9Iw.onERC721Received.call(operatorMLPTRlu, fromWHd1UdV, tokenIdF7Gp0ug, datay83BKF, {from: accounts[2]});
		const nullHtT5xe0 = await contractalJz9Iw.onERC721Received.call(operatorCwxNZn5, fromHQzOu2i, tokenIdu6Cw72, datapoLdBbe, {from: accounts[1]});
		const nullFGHjTh4 = await contractalJz9Iw.onERC721Received.call(operatorrgDNHeD, fromtT8JPor, tokenIdb3mOyf, datac42XAGh, {from: accounts[4]});
		const nullygolJO1 = await contractalJz9Iw.onERC721Received.call(operatorQrxulIH, fromkc6WiwD, tokenIdmRGOed9, dataqE79S9, {from: accounts[1]});
		const nulle3ix4SM = await contractalJz9Iw.onERC721Received.call(operatorFh9MWg2, fromey8Kmp2, tokenIdSKHpdL, dataSEwffX8, {from: accounts[4]});
		const nullNn6xzq = await contractalJz9Iw.onERC721Received.call(operatorbvQ7HC, fromGpGcoFc, tokenIdYfvJGmi, datavHMbZEg, {from: accounts[4]});
	});
})