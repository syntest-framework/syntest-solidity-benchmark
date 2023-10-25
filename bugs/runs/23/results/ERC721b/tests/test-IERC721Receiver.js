const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractHlprZyz = await IERC721Receiver.new({from: accounts[2]});
		const dataYTreYzR = "0x1d061c0f1c000e0e0e1d1014191f1f"
		const tokenIdQF6vsCe = BigInt("1103")
		const fromazYo6O8 = accounts[0]
		const operatorX6B6yJJ = accounts[1]
		const dataLyunqUt = "0x0f11091d"
		const tokenIdWYliHW = BigInt("623")
		const fromJXVnj3h = accounts[4]
		const operatorbvvnRTP = accounts[4]
		const datasifesu2 = "0x170b1f0f0d090a060307121c000508140b0316190b1f040f"
		const tokenIdQVglnE = BigInt("89")
		const fromriZNQRD = accounts[3]
		const operatorqV5rfC0 = accounts[5]
		const nullRj1VMng = await contractHlprZyz.onERC721Received.call(operatorX6B6yJJ, fromazYo6O8, tokenIdQF6vsCe, dataYTreYzR, {from: accounts[3]});
		const nullbnfrJq3 = await contractHlprZyz.onERC721Received.call(operatorbvvnRTP, fromJXVnj3h, tokenIdWYliHW, dataLyunqUt, {from: accounts[3]});
		const nullEGLhnOF = await contractHlprZyz.onERC721Received.call(operatorqV5rfC0, fromriZNQRD, tokenIdQVglnE, datasifesu2, {from: accounts[5]});
	});
})