const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractYgEd1ml = await IERC721Receiver.new({from: accounts[3]});
		const datapoXkJqS = "0x0b05000115"
		const tokenIdSkklg42 = BigInt("137")
		const fromD0xpbLl = accounts[4]
		const operatorHVXDoLQ = accounts[1]
		const dataKh23AYj = "0x1b051f141d14031012040e0b10121b111f0b1218140e100d1f060704010c0d06"
		const tokenIdXtv3C5h = BigInt("535")
		const fromXJeX8Yl = accounts[0]
		const operatortwm5Qed = accounts[2]
		const datamYc4Xtk = "0x170a0d170c0d1c"
		const tokenIdUiigyVT = BigInt("1313")
		const fromZNzHGh1 = accounts[0]
		const operatormK6416B = accounts[4]
		const datadoV2Ebf = "0x0c161212"
		const tokenIduJL1aRy = BigInt("49")
		const frompcZBdHz = accounts[4]
		const operatoroaEbhWX = accounts[0]
		const dataIrgUMY5 = "0x101c191f0e1c1817190c021f06081e18051b160d0d190e201d"
		const tokenIdL3FDruf = BigInt("923")
		const fromHXIz4In = accounts[1]
		const operatorWQj67hR = accounts[0]
		const nullJewI1dY = await contractYgEd1ml.onERC721Received.call(operatorHVXDoLQ, fromD0xpbLl, tokenIdSkklg42, datapoXkJqS, {from: "0x0000000000000000000000000000000000000001"});
		const nulleGmLCEY = await contractYgEd1ml.onERC721Received.call(operatortwm5Qed, fromXJeX8Yl, tokenIdXtv3C5h, dataKh23AYj, {from: accounts[2]});
		const null6bJ900 = await contractYgEd1ml.onERC721Received.call(operatormK6416B, fromZNzHGh1, tokenIdUiigyVT, datamYc4Xtk, {from: accounts[2]});
		const nullPNgGzn = await contractYgEd1ml.onERC721Received.call(operatoroaEbhWX, frompcZBdHz, tokenIduJL1aRy, datadoV2Ebf, {from: accounts[1]});
		const nullHDiOhG3 = await contractYgEd1ml.onERC721Received.call(operatorWQj67hR, fromHXIz4In, tokenIdL3FDruf, dataIrgUMY5, {from: accounts[0]});
	});
})