const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractwCPMnrF = await IERC721Receiver.new({from: accounts[2]});
		const dataDQCuet8 = "0x0a18010401191c14051d191a120014"
		const tokenIdj2MVGFu = BigInt("651")
		const fromPKBiUC = accounts[0]
		const operatorCq87zbF = "0x0000000000000000000000000000000000000001"
		const dataU1ngp3G = "0x20021909131f200c1f01180b19001b1906050a121a121115"
		const tokenIdjzyIl1 = BigInt("1374")
		const fromKng3w8G = accounts[4]
		const operatorDFtFkr8 = accounts[1]
		const datacn9R7oN = "0x0b08"
		const tokenIddzNnPqc = BigInt("533")
		const fromtCzIyTS = accounts[1]
		const operatorDwHe2i9 = accounts[5]
		const datas2VYSag = "0x171e0e070e0c000c090d0d180c1b"
		const tokenIdESlmKpx = BigInt("498")
		const fromQN4PiIs = accounts[2]
		const operatorJOTvHD = accounts[3]
		const dataeXXxHi = "0x1e061216041305130e05051c"
		const tokenIdoLzzVSO = BigInt("1270")
		const fromihTELh = "0x0000000000000000000000000000000000000001"
		const operatorJnoZfLG = accounts[5]
		const datazLFPn2a = "0x0b1317071d1608100a0609161a0a19071b051a11"
		const tokenIdisH47Z = BigInt("1151")
		const fromvCGuauG = accounts[4]
		const operatorgBvnaM7 = accounts[2]
		const nullueKp8gQ = await contractwCPMnrF.onERC721Received.call(operatorCq87zbF, fromPKBiUC, tokenIdj2MVGFu, dataDQCuet8, {from: accounts[2]});
		const nullwHTVoxr = await contractwCPMnrF.onERC721Received.call(operatorDFtFkr8, fromKng3w8G, tokenIdjzyIl1, dataU1ngp3G, {from: accounts[4]});
		const nullfxdbZR = await contractwCPMnrF.onERC721Received.call(operatorDwHe2i9, fromtCzIyTS, tokenIddzNnPqc, datacn9R7oN, {from: accounts[0]});
		const nullFohnAX1 = await contractwCPMnrF.onERC721Received.call(operatorJOTvHD, fromQN4PiIs, tokenIdESlmKpx, datas2VYSag, {from: accounts[1]});
		const nullNKaVsLL = await contractwCPMnrF.onERC721Received.call(operatorJnoZfLG, fromihTELh, tokenIdoLzzVSO, dataeXXxHi, {from: accounts[5]});
		const nullepSQgsC = await contractwCPMnrF.onERC721Received.call(operatorgBvnaM7, fromvCGuauG, tokenIdisH47Z, datazLFPn2a, {from: accounts[0]});
	});
})