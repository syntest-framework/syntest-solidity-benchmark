const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractLCdn8TA = await IERC721Receiver.new({from: accounts[3]});
		const datal8veoZ1 = "0x151e0210130b1b0e0a1e041c"
		const tokenId7BrPSl = BigInt("1114")
		const fromnG6jh6A = accounts[5]
		const operatorCaiXKhN = accounts[4]
		const datasv19tqV = "0x06041a021a0a101f"
		const tokenIdaEnxcR = BigInt("1560")
		const fromziat4DH = accounts[2]
		const operatorJ5bTh2D = accounts[4]
		const dataAX05KiT = "0x170f051d071e011d0214030809021b0e1c040e031e1e1a15"
		const tokenIdvHgnF5u = BigInt("826")
		const fromjpJ26Hb = accounts[2]
		const operatorNhiSTLC = accounts[0]
		const datatNWyZKh = "0x19161c1c1d1b0a1c03141a1508110c0b1f0511150a0c"
		const tokenIdPpQL6hG = BigInt("1596")
		const fromuLkoqnL = accounts[1]
		const operatorUbO5gZz = "0x0000000000000000000000000000000000000001"
		const dataFykDUXx = "0x100e0612"
		const tokenIdIhH8fhF = BigInt("645")
		const fromGTpvMmB = accounts[5]
		const operatory9ZNxSV = accounts[1]
		const dataD090eW = "0x060509020812201920201c110204120d12031b051a121e1f200e1b161704"
		const tokenIdfAKh4Mp = BigInt("1360")
		const fromQr5LsjX = accounts[4]
		const operatorUU9xTI = accounts[0]
		const nullrSEFb7 = await contractLCdn8TA.onERC721Received.call(operatorCaiXKhN, fromnG6jh6A, tokenId7BrPSl, datal8veoZ1, {from: accounts[4]});
		const nullfLjTY8U = await contractLCdn8TA.onERC721Received.call(operatorJ5bTh2D, fromziat4DH, tokenIdaEnxcR, datasv19tqV, {from: "0x0000000000000000000000000000000000000001"});
		const nullWoXcyW = await contractLCdn8TA.onERC721Received.call(operatorNhiSTLC, fromjpJ26Hb, tokenIdvHgnF5u, dataAX05KiT, {from: accounts[4]});
		const nullEcaQuQs = await contractLCdn8TA.onERC721Received.call(operatorUbO5gZz, fromuLkoqnL, tokenIdPpQL6hG, datatNWyZKh, {from: accounts[5]});
		const nulljz0wr10 = await contractLCdn8TA.onERC721Received.call(operatory9ZNxSV, fromGTpvMmB, tokenIdIhH8fhF, dataFykDUXx, {from: accounts[4]});
		const nulllY736T8 = await contractLCdn8TA.onERC721Received.call(operatorUU9xTI, fromQr5LsjX, tokenIdfAKh4Mp, dataD090eW, {from: accounts[3]});
	});
})