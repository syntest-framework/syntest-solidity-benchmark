const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractuZoXSvm = await IERC721Receiver.new({from: accounts[5]});
		const datauw5Sr9T = "0x1f0e19071e0e1c0303070a130a1a1e0317081d0815"
		const tokenIdZdaYM52 = BigInt("568")
		const fromAa9LFhd = accounts[2]
		const operatorimv3luR = accounts[1]
		const dataT4DOExi = "0x191010010f"
		const tokenIdEclIarh = BigInt("22")
		const fromwojhcJ = accounts[1]
		const operatorND7ZZWj = accounts[0]
		const datadWCE5j = "0x140c0816030d1b0508011d11151c040713140105"
		const tokenIdgoXF8z9 = BigInt("63")
		const fromNatYDx4 = accounts[3]
		const operatorZeLMnv8 = accounts[1]
		const nulleXkziih = await contractuZoXSvm.onERC721Received.call(operatorimv3luR, fromAa9LFhd, tokenIdZdaYM52, datauw5Sr9T, {from: accounts[4]});
		const nullraZXnsS = await contractuZoXSvm.onERC721Received.call(operatorND7ZZWj, fromwojhcJ, tokenIdEclIarh, dataT4DOExi, {from: accounts[2]});
		const nulln4b9fr = await contractuZoXSvm.onERC721Received.call(operatorZeLMnv8, fromNatYDx4, tokenIdgoXF8z9, datadWCE5j, {from: accounts[3]});
	});
})