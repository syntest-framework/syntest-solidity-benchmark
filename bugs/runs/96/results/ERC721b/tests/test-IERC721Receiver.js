const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractCQE5XkT = await IERC721Receiver.new({from: accounts[3]});
		const dataiyFVzdp = "0x1317090212170e160312111a1320040f17020e1811"
		const tokenIdyaCUFTs = BigInt("848")
		const fromdSBDohi = "0x0000000000000000000000000000000000000001"
		const operatorusWNT1p = accounts[2]
		const datage8ciqz = "0x150a1d1305020213100b"
		const tokenIdSyerp4J = BigInt("1471")
		const fromAQV4IN1 = accounts[4]
		const operator1bSb88 = accounts[1]
		const datalFvOxUP = "0x1103080c050101151404"
		const tokenIdWGCEOQ2 = BigInt("1628")
		const fromQJHeWFr = accounts[2]
		const operatorWJXe8nY = "0x0000000000000000000000000000000000000001"
		const datazN5Mvh = "0x0f12"
		const tokenIdekRat02 = BigInt("1953")
		const fromRNhUZm = accounts[2]
		const operatoreYKsIhU = accounts[5]
		const dataB7HAvcq = "0x09090e1f00020a13041f19"
		const tokenIdzYymQu = BigInt("897")
		const fromI7Fqw6A = accounts[0]
		const operatorIqXsRbd = accounts[2]
		const nullEobmEMX = await contractCQE5XkT.onERC721Received.call(operatorusWNT1p, fromdSBDohi, tokenIdyaCUFTs, dataiyFVzdp, {from: accounts[3]});
		const nullwbN1cnV = await contractCQE5XkT.onERC721Received.call(operator1bSb88, fromAQV4IN1, tokenIdSyerp4J, datage8ciqz, {from: accounts[5]});
		const nullYwvEmjM = await contractCQE5XkT.onERC721Received.call(operatorWJXe8nY, fromQJHeWFr, tokenIdWGCEOQ2, datalFvOxUP, {from: accounts[4]});
		const nullEyNXSay = await contractCQE5XkT.onERC721Received.call(operatoreYKsIhU, fromRNhUZm, tokenIdekRat02, datazN5Mvh, {from: accounts[0]});
		const nullOoyVf7 = await contractCQE5XkT.onERC721Received.call(operatorIqXsRbd, fromI7Fqw6A, tokenIdzYymQu, dataB7HAvcq, {from: accounts[1]});
	});
})