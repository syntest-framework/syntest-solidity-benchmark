const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractgR53nh6 = await IERC721Receiver.new({from: accounts[2]});
		const dataFHWrdDY = "0x060d1a090d16030606120d0118001313"
		const tokenIdfEWEY9Y = BigInt("1931")
		const fromP4AcLk = accounts[3]
		const operatorNpd7i3m = accounts[1]
		const dataTDjh9UJ = "0x100b0710021b0e"
		const tokenIdAR89Gxf = BigInt("281")
		const fromjq7jjpI = accounts[2]
		const operatorvcSaAiJ = accounts[1]
		const dataJMyUg1c = "0x0a0b19080d160d020d0008131e0e02120b20161602060b1808021a0a18"
		const tokenIdBLBq8DN = BigInt("1248")
		const fromSTum7Za = accounts[4]
		const operatorodMQ5N = accounts[0]
		const dataFTe13g4 = "0x150e0c16010919030d1a1912100c1406081c190c190d041a060c"
		const tokenId9oZfGQ = BigInt("1875")
		const fromKllTuoC = "0x0000000000000000000000000000000000000001"
		const operatorvH7uHMP = accounts[5]
		const datau7uHBy7 = "0x14171a1102100e1811031102170d030802081b1203"
		const tokenId0Siv8t = BigInt("2040")
		const fromnfHfsak = accounts[4]
		const operatorngLE7HD = accounts[2]
		const nullyL9feY = await contractgR53nh6.onERC721Received.call(operatorNpd7i3m, fromP4AcLk, tokenIdfEWEY9Y, dataFHWrdDY, {from: accounts[0]});
		const nullUM3om6B = await contractgR53nh6.onERC721Received.call(operatorvcSaAiJ, fromjq7jjpI, tokenIdAR89Gxf, dataTDjh9UJ, {from: accounts[0]});
		const nullluu7KUS = await contractgR53nh6.onERC721Received.call(operatorodMQ5N, fromSTum7Za, tokenIdBLBq8DN, dataJMyUg1c, {from: accounts[3]});
		const nullfSutKx = await contractgR53nh6.onERC721Received.call(operatorvH7uHMP, fromKllTuoC, tokenId9oZfGQ, dataFTe13g4, {from: accounts[1]});
		const nulleawY5Ut = await contractgR53nh6.onERC721Received.call(operatorngLE7HD, fromnfHfsak, tokenId0Siv8t, datau7uHBy7, {from: accounts[1]});
	});
})