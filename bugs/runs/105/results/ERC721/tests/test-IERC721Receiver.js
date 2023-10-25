const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractCA1BFfD = await IERC721Receiver.new({from: accounts[2]});
		const dataMRcE3CI = "0x0c0c141c0203051f201c1a1915100a1a0004050c0b09"
		const tokenIdZXoommT = BigInt("1945")
		const fromK1VPRFQ = accounts[0]
		const operatorwvHwXRW = accounts[0]
		const dataNwMLTc = "0x081208091d0b0d081e0f04081218061707041e1c0d0c1c04111c"
		const tokenIdXGSdkTZ = BigInt("742")
		const fromznCJNku = "0x0000000000000000000000000000000000000001"
		const operatorQJiLKE0 = accounts[0]
		const datasKThqEd = "0x0500181b0a18131a04011906191e0a180b0b1417170705"
		const tokenIdiIcMeT = BigInt("1153")
		const fromz99RF1 = accounts[4]
		const operatormrd8fSq = accounts[4]
		const datakC7A3xc = "0x1f1b1c17040315"
		const tokenIdCw3M7be = BigInt("1836")
		const fromIpiF2xW = accounts[2]
		const operatorW8keL88 = "0x0000000000000000000000000000000000000001"
		const datajVCoxfL = "0x051a180a1e121d0b14191f18050309051b031f051d09070810070e0f13111d"
		const tokenIdnHHbgvh = BigInt("1589")
		const fromrQ4BXJK = accounts[0]
		const operatorqbUsrmm = accounts[3]
		const nullsRawvDc = await contractCA1BFfD.onERC721Received.call(operatorwvHwXRW, fromK1VPRFQ, tokenIdZXoommT, dataMRcE3CI, {from: accounts[5]});
		const nulljmoa5Ls = await contractCA1BFfD.onERC721Received.call(operatorQJiLKE0, fromznCJNku, tokenIdXGSdkTZ, dataNwMLTc, {from: accounts[3]});
		const nullTTlmCfm = await contractCA1BFfD.onERC721Received.call(operatormrd8fSq, fromz99RF1, tokenIdiIcMeT, datasKThqEd, {from: accounts[1]});
		const nullpsxHYx9 = await contractCA1BFfD.onERC721Received.call(operatorW8keL88, fromIpiF2xW, tokenIdCw3M7be, datakC7A3xc, {from: accounts[0]});
		const nulldaBYTDT = await contractCA1BFfD.onERC721Received.call(operatorqbUsrmm, fromrQ4BXJK, tokenIdnHHbgvh, datajVCoxfL, {from: accounts[3]});
	});
})