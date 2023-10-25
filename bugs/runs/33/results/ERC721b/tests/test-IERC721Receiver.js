const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractJmZTl0J = await IERC721Receiver.new({from: accounts[0]});
		const dataxBSOA63 = "0x1a0a0f0d0f0d1e011906"
		const tokenIdKfpdR0i = BigInt("829")
		const fromWdtgdWn = accounts[4]
		const operatoryULcVKd = accounts[1]
		const datah4nqGrN = "0x0b1b1b081b10200901171703060920"
		const tokenIdVrQb0Jr = BigInt("669")
		const fromGZVtD61 = accounts[4]
		const operatorKxnqRn3 = accounts[2]
		const dataFwH5GKI = "0x0c000218160b060b191814"
		const tokenIdkZkH0D7 = BigInt("786")
		const fromVS6J2Xp = accounts[1]
		const operatorsguJaWq = accounts[1]
		const dataqgnGCVM = "0x1513060511081f011f011e0206191a1f0703081b1c0f031e151f"
		const tokenIdXWba0xq = BigInt("1107")
		const fromoztorg = accounts[1]
		const operatorfNz6BfJ = accounts[2]
		const dataGcNvTJH = "0x1703101d1919070116140c171b1b190c010b1e"
		const tokenIddqrn0PK = BigInt("1376")
		const fromtxBooo7 = accounts[0]
		const operatorWSx7gdR = accounts[3]
		const nullIw8tcrP = await contractJmZTl0J.onERC721Received.call(operatoryULcVKd, fromWdtgdWn, tokenIdKfpdR0i, dataxBSOA63, {from: accounts[3]});
		const null0Vtnxi = await contractJmZTl0J.onERC721Received.call(operatorKxnqRn3, fromGZVtD61, tokenIdVrQb0Jr, datah4nqGrN, {from: accounts[3]});
		const nullKKvTfZ5 = await contractJmZTl0J.onERC721Received.call(operatorsguJaWq, fromVS6J2Xp, tokenIdkZkH0D7, dataFwH5GKI, {from: accounts[2]});
		const nullxMb7oR6 = await contractJmZTl0J.onERC721Received.call(operatorfNz6BfJ, fromoztorg, tokenIdXWba0xq, dataqgnGCVM, {from: "0x0000000000000000000000000000000000000001"});
		const null3zqt36 = await contractJmZTl0J.onERC721Received.call(operatorWSx7gdR, fromtxBooo7, tokenIddqrn0PK, dataGcNvTJH, {from: accounts[1]});
	});
})