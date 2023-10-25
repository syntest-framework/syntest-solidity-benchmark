const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractSQG2LK = await IERC721Receiver.new({from: accounts[5]});
		const datanoDbI8e = "0x05010d"
		const tokenIdqIqzI8w = BigInt("934")
		const fromPVpJ5PB = accounts[5]
		const operatorazfRePS = accounts[4]
		const dataqSFFOvH = "0x141916020913140b080d021b0407180d1d"
		const tokenIdZJm6SkL = BigInt("849")
		const fromKzrXyjR = accounts[3]
		const operator20V3pW = "0x0000000000000000000000000000000000000001"
		const datarXXcHEX = "0x1d0119090f130f03081f"
		const tokenIdruWxTrg = BigInt("1662")
		const fromUU2vgA = accounts[1]
		const operatorv7wnhAQ = accounts[3]
		const dataC2tPS3e = "0x181b201d101f1e11020d1803181b10021c0f1c130e181818"
		const tokenIdKVM8taw = BigInt("1031")
		const fromy1Kc9zp = accounts[2]
		const operatorIf4arM = accounts[1]
		const dataa9qLqzG = "0x130f181701200218181e0f0c14161d0a"
		const tokenIdh05Qphw = BigInt("1190")
		const fromXhgHiYX = accounts[4]
		const operatorWL7IQIE = accounts[2]
		const nullmwtVExM = await contractSQG2LK.onERC721Received.call(operatorazfRePS, fromPVpJ5PB, tokenIdqIqzI8w, datanoDbI8e, {from: "0x0000000000000000000000000000000000000001"});
		const nullTi1tU8g = await contractSQG2LK.onERC721Received.call(operator20V3pW, fromKzrXyjR, tokenIdZJm6SkL, dataqSFFOvH, {from: accounts[3]});
		const nulljxiT0Eq = await contractSQG2LK.onERC721Received.call(operatorv7wnhAQ, fromUU2vgA, tokenIdruWxTrg, datarXXcHEX, {from: accounts[2]});
		const nullLtQXg12 = await contractSQG2LK.onERC721Received.call(operatorIf4arM, fromy1Kc9zp, tokenIdKVM8taw, dataC2tPS3e, {from: accounts[1]});
		const nullSfgh7eY = await contractSQG2LK.onERC721Received.call(operatorWL7IQIE, fromXhgHiYX, tokenIdh05Qphw, dataa9qLqzG, {from: accounts[4]});
	});
})