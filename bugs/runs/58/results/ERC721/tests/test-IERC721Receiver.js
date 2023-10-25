const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractUmeFG3o = await IERC721Receiver.new({from: "0x0000000000000000000000000000000000000001"});
		const datazSzs6Vy = "0x0112"
		const tokenIdgaG2apV = BigInt("686")
		const fromoCwM0ie = accounts[1]
		const operatormtGdYP6 = accounts[0]
		const dataB1HtOik = "0x000f191a0b03040e0302171e02050c1f"
		const tokenIdMspMfUa = BigInt("944")
		const fromWM5hJW = accounts[2]
		const operatorV5YveT4 = accounts[4]
		const dataKavLz0C = "0x190b10100d"
		const tokenIdnTocQBf = BigInt("1043")
		const fromkFbkcR = accounts[1]
		const operatorWQqfYRm = accounts[1]
		const dataDclhfz = "0x060e0917091f13151e0112111d0a0c1c081a071415160e"
		const tokenIdviBIfP = BigInt("1374")
		const fromKWsgQ4x = accounts[1]
		const operatorDJ32lt9 = accounts[0]
		const nullBqQLWbE = await contractUmeFG3o.onERC721Received.call(operatormtGdYP6, fromoCwM0ie, tokenIdgaG2apV, datazSzs6Vy, {from: accounts[0]});
		const nullaq2JpnW = await contractUmeFG3o.onERC721Received.call(operatorV5YveT4, fromWM5hJW, tokenIdMspMfUa, dataB1HtOik, {from: accounts[4]});
		const nullKaAlye = await contractUmeFG3o.onERC721Received.call(operatorWQqfYRm, fromkFbkcR, tokenIdnTocQBf, dataKavLz0C, {from: accounts[1]});
		const nullaAWBNJP = await contractUmeFG3o.onERC721Received.call(operatorDJ32lt9, fromKWsgQ4x, tokenIdviBIfP, dataDclhfz, {from: accounts[3]});
	});
})