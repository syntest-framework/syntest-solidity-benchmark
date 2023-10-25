const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractV9izOjb = await IERC721Receiver.new({from: accounts[3]});
		const dataLlFr8BY = "0x051a150c1b09101605071a141e0a100a05141819"
		const tokenIdWKAJeKN = BigInt("815")
		const fromoB8kZWd = accounts[1]
		const operatorzlMDDnB = accounts[4]
		const datacSFTBEJ = "0x1013010210100d031f1418"
		const tokenIdN5AFciv = BigInt("558")
		const fromYbBsnGC = "0x0000000000000000000000000000000000000001"
		const operatorD9AZGLR = accounts[1]
		const datazzowdv = "0x19061f1817120f0d190d0a041718100e14080e1e020616"
		const tokenIdnzA52NU = BigInt("880")
		const fromreP4rXS = accounts[2]
		const operatorDLK98CE = accounts[0]
		const dataPAqcREZ = "0x02091f1c1c141b0b1a17121a020c160d1805170a021a040d"
		const tokenIdb9XacIJ = BigInt("123")
		const fromxky70D = accounts[4]
		const operatorqNxENwk = accounts[0]
		const datalPGi3z4 = "0x1f030f0103"
		const tokenIdL4YH6Ry = BigInt("651")
		const fromtfilj3v = accounts[4]
		const operatorTEz8txN = accounts[3]
		const nullsNhdfpv = await contractV9izOjb.onERC721Received.call(operatorzlMDDnB, fromoB8kZWd, tokenIdWKAJeKN, dataLlFr8BY, {from: accounts[0]});
		const nullRV9QmJ6 = await contractV9izOjb.onERC721Received.call(operatorD9AZGLR, fromYbBsnGC, tokenIdN5AFciv, datacSFTBEJ, {from: accounts[4]});
		const nullYWKDZA = await contractV9izOjb.onERC721Received.call(operatorDLK98CE, fromreP4rXS, tokenIdnzA52NU, datazzowdv, {from: accounts[1]});
		const nullND0vll = await contractV9izOjb.onERC721Received.call(operatorqNxENwk, fromxky70D, tokenIdb9XacIJ, dataPAqcREZ, {from: accounts[1]});
		const nulllUtLIv = await contractV9izOjb.onERC721Received.call(operatorTEz8txN, fromtfilj3v, tokenIdL4YH6Ry, datalPGi3z4, {from: accounts[4]});
	});
})