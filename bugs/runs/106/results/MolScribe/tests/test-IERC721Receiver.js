const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractsFEXZnI = await IERC721Receiver.new({from: accounts[5]});
		const dataIJkQv6D = "0x0f071e010103070e1c"
		const tokenIdD3OzB3 = BigInt("1267")
		const fromID7Cvr4 = accounts[4]
		const operatorWKTftA = "0x0000000000000000000000000000000000000001"
		const datasockYvX = "0x0c1b050b0f0e0c041e1303200b1a040f071c0a1f1c041e0213"
		const tokenIdt3Ee8BM = BigInt("980")
		const fromQwOBbrf = "0x0000000000000000000000000000000000000001"
		const operatorTnx1HYH = accounts[2]
		const dataOMlmjVP = "0x19030c120704181d051a1306001f1c010704161617131a14010e0a060f0903"
		const tokenIdQmBqoXy = BigInt("493")
		const fromtNto7gC = "0x0000000000000000000000000000000000000001"
		const operatory77Z7Uf = accounts[5]
		const datapwcPy84 = "0x0e000e00191a15150f1b0a0811170219"
		const tokenIdHfNmFbo = BigInt("119")
		const fromZqZyT7 = accounts[3]
		const operatorKrcskaY = accounts[3]
		const dataUVPlOdk = "0x030e1a150c080f1c0d17"
		const tokenIdBlopI49 = BigInt("1861")
		const fromrz3RPH = accounts[1]
		const operatorsRl6eBN = accounts[5]
		const nullBdbG4lh = await contractsFEXZnI.onERC721Received.call(operatorWKTftA, fromID7Cvr4, tokenIdD3OzB3, dataIJkQv6D, {from: accounts[1]});
		const nullkG1OIED = await contractsFEXZnI.onERC721Received.call(operatorTnx1HYH, fromQwOBbrf, tokenIdt3Ee8BM, datasockYvX, {from: "0x0000000000000000000000000000000000000001"});
		const null8RpBRL = await contractsFEXZnI.onERC721Received.call(operatory77Z7Uf, fromtNto7gC, tokenIdQmBqoXy, dataOMlmjVP, {from: accounts[2]});
		const nullYblnSAv = await contractsFEXZnI.onERC721Received.call(operatorKrcskaY, fromZqZyT7, tokenIdHfNmFbo, datapwcPy84, {from: accounts[1]});
		const nullK3Uoj75 = await contractsFEXZnI.onERC721Received.call(operatorsRl6eBN, fromrz3RPH, tokenIdBlopI49, dataUVPlOdk, {from: accounts[5]});
	});
})