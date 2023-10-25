const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractGqwFz2l = await IERC721Receiver.new({from: accounts[0]});
		const dataWjgiyH8 = "0x1712010d1319171216080411090a10140d0408011c191001"
		const tokenIdQ8WlR75 = BigInt("1794")
		const fromPRrpl3 = accounts[0]
		const operatorapFZ5Er = accounts[4]
		const dataqDctUR4 = "0x090c091b1e121e050f1d1d04090b130c151813200e"
		const tokenIdMqtv5yh = BigInt("353")
		const fromuFWuZHp = accounts[4]
		const operatormzbOpa4 = accounts[3]
		const datafb8HKK = "0x03"
		const tokenIdERcL1JY = BigInt("1696")
		const fromdZioUW4 = accounts[4]
		const operatorkoTORYc = accounts[2]
		const nullB5Ewc0 = await contractGqwFz2l.onERC721Received.call(operatorapFZ5Er, fromPRrpl3, tokenIdQ8WlR75, dataWjgiyH8, {from: accounts[4]});
		const nulldl5bdlL = await contractGqwFz2l.onERC721Received.call(operatormzbOpa4, fromuFWuZHp, tokenIdMqtv5yh, dataqDctUR4, {from: accounts[1]});
		const nullDzThWwW = await contractGqwFz2l.onERC721Received.call(operatorkoTORYc, fromdZioUW4, tokenIdERcL1JY, datafb8HKK, {from: accounts[5]});
	});
})