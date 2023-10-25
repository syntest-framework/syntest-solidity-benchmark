const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contract46owpI = await IERC721Receiver.new({from: accounts[3]});
		const dataAYf9yrm = "0x0505130303111012150b051f"
		const tokenIdVyTRpn8 = BigInt("207")
		const fromYn72FRt = accounts[2]
		const operatoroKt1Z8g = accounts[2]
		const dataiA8RCIS = "0x0b17100f14041b070112120c0e180c1617"
		const tokenIdmgorGL = BigInt("236")
		const fromHoBrSlz = accounts[2]
		const operatorhAkXTuR = accounts[0]
		const datamn3AXQT = "0x0e1919120b16040a071b1a03020b1d1c010d080f0b0c19"
		const tokenIdtE2MhKi = BigInt("1239")
		const from2NxV7o = accounts[2]
		const operatorVJkuM4P = accounts[0]
		const datai39d2Go = "0x050c1b0b1611091a090d0f100407081d030514"
		const tokenIdvvhCUAH = BigInt("670")
		const fromt5oe0t = accounts[4]
		const operatorUHSZY7r = accounts[4]
		const nulliXm2rWk = await contract46owpI.onERC721Received.call(operatoroKt1Z8g, fromYn72FRt, tokenIdVyTRpn8, dataAYf9yrm, {from: accounts[0]});
		const nulla1HKWF8 = await contract46owpI.onERC721Received.call(operatorhAkXTuR, fromHoBrSlz, tokenIdmgorGL, dataiA8RCIS, {from: accounts[3]});
		const nulln6hNTUn = await contract46owpI.onERC721Received.call(operatorVJkuM4P, from2NxV7o, tokenIdtE2MhKi, datamn3AXQT, {from: accounts[5]});
		const nullKYd0zvr = await contract46owpI.onERC721Received.call(operatorUHSZY7r, fromt5oe0t, tokenIdvvhCUAH, datai39d2Go, {from: accounts[2]});
	});
})