const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractEcYiRSs = await IERC721Receiver.new({from: accounts[0]});
		const datao0vDzco = "0x17141b09051111070f06010b160f0109170b120808110b051310010c041918"
		const tokenIdQrFtwB = BigInt("2018")
		const fromaZOci0y = accounts[4]
		const operatorrPjqy36 = accounts[0]
		const dataueMJh5z = "0x09140d0b0e0f1b1513181612021b0612031b011d100c0b12130409190c"
		const tokenIdIaeaHxL = BigInt("1453")
		const fromqF1chi = accounts[0]
		const operatorrU1KEWZ = accounts[2]
		const dataLm7PaIj = "0x20091717191c1e010e031704001f0215100d070414081d09080702"
		const tokenIdXQxFkd = BigInt("1380")
		const fromi9pxpxA = accounts[2]
		const operatorB1sl4yb = accounts[2]
		const nullsXVXTKy = await contractEcYiRSs.onERC721Received.call(operatorrPjqy36, fromaZOci0y, tokenIdQrFtwB, datao0vDzco, {from: accounts[0]});
		const nullABoOVsy = await contractEcYiRSs.onERC721Received.call(operatorrU1KEWZ, fromqF1chi, tokenIdIaeaHxL, dataueMJh5z, {from: "0x0000000000000000000000000000000000000001"});
		const nullWIBpjrF = await contractEcYiRSs.onERC721Received.call(operatorB1sl4yb, fromi9pxpxA, tokenIdXQxFkd, dataLm7PaIj, {from: "0x0000000000000000000000000000000000000001"});
	});
})