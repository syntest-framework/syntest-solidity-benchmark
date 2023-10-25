const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contracte5egdri = await IERC721Receiver.new({from: accounts[3]});
		const dataGf6kf2 = "0x100417"
		const tokenIdt8CmBgo = BigInt("1715")
		const fromh7OBvXr = accounts[0]
		const operatorBbadpu = accounts[4]
		const dataV9qAlHU = "0x101a0d0f"
		const tokenIdHhxwR7 = BigInt("766")
		const fromUrBPpa = accounts[0]
		const operatorpAZ0T3n = accounts[0]
		const dataVuLvea3 = "0x011f011801051d1716130b"
		const tokenIdqSmphjG = BigInt("1196")
		const fromp3Rthar = accounts[4]
		const operatorHFCF40i = accounts[2]
		const nullkdY77Lk = await contracte5egdri.onERC721Received.call(operatorBbadpu, fromh7OBvXr, tokenIdt8CmBgo, dataGf6kf2, {from: accounts[0]});
		const nullDe5sA3 = await contracte5egdri.onERC721Received.call(operatorpAZ0T3n, fromUrBPpa, tokenIdHhxwR7, dataV9qAlHU, {from: accounts[2]});
		const nullk9DWId8 = await contracte5egdri.onERC721Received.call(operatorHFCF40i, fromp3Rthar, tokenIdqSmphjG, dataVuLvea3, {from: accounts[1]});
	});
})