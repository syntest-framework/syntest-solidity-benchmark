const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractvKuHAmu = await IERC721Receiver.new({from: accounts[0]});
		const datarqP40ZS = "0x1e1d200815100a080a1e0e1a05131d050b0a1c03111208"
		const tokenIdjajrqq = BigInt("40")
		const fromA27UcpS = accounts[0]
		const operatormV7wTx5 = accounts[2]
		const dataUCBnNTD = "0x0400130e1c161a0610051314180805"
		const tokenIdQGEjM1 = BigInt("1931")
		const fromXSZmXqw = accounts[0]
		const operatorewsxX0Y = accounts[2]
		const dataDGcFzm7 = "0x051c1600101917100d0e04090b19020a030f05061b1e0b1818"
		const tokenIdzumGiQ2 = BigInt("69")
		const fromYBnaGdd = accounts[2]
		const operatorz4vDLtY = accounts[1]
		const dataVsw9VkW = "0x14091f0503020b081b03081c17010201150516061b01"
		const tokenIdT8y2YTx = BigInt("431")
		const fromIMH8Axd = accounts[4]
		const operatorrQAtFKf = accounts[2]
		const datauTG62cp = "0x0f12110f15081c1f1b17010114"
		const tokenIdzGMf03o = BigInt("1931")
		const fromzB1yO3g = accounts[2]
		const operatorJ2t735N = accounts[2]
		const nullq9ey42H = await contractvKuHAmu.onERC721Received.call(operatormV7wTx5, fromA27UcpS, tokenIdjajrqq, datarqP40ZS, {from: accounts[2]});
		const nullfJOmuft = await contractvKuHAmu.onERC721Received.call(operatorewsxX0Y, fromXSZmXqw, tokenIdQGEjM1, dataUCBnNTD, {from: accounts[0]});
		const nullfWdS9Rh = await contractvKuHAmu.onERC721Received.call(operatorz4vDLtY, fromYBnaGdd, tokenIdzumGiQ2, dataDGcFzm7, {from: accounts[3]});
		const nullg9etQ4R = await contractvKuHAmu.onERC721Received.call(operatorrQAtFKf, fromIMH8Axd, tokenIdT8y2YTx, dataVsw9VkW, {from: accounts[0]});
		const nullYZQz4at = await contractvKuHAmu.onERC721Received.call(operatorJ2t735N, fromzB1yO3g, tokenIdzGMf03o, datauTG62cp, {from: accounts[4]});
	});
})