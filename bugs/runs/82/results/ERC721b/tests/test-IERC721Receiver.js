const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractXNUUdUf = await IERC721Receiver.new({from: accounts[2]});
		const datauuy5S9r = "0x07181c09101d01141315181b0c191213100d1f1a071e18040913160b"
		const tokenIdQKoLznk = BigInt("1390")
		const fromZ6Qhj1h = accounts[5]
		const operatorASFUdMr = accounts[4]
		const dataQGRJiDH = "0x1d181d17140d0a0104180c041c15111c1c01140510040e"
		const tokenIdg0eMCqY = BigInt("1460")
		const fromJtXTevB = accounts[2]
		const operatoru19q17r = accounts[1]
		const null3hr7Vn = await contractXNUUdUf.onERC721Received.call(operatorASFUdMr, fromZ6Qhj1h, tokenIdQKoLznk, datauuy5S9r, {from: accounts[1]});
		const nullwkKwmwq = await contractXNUUdUf.onERC721Received.call(operatoru19q17r, fromJtXTevB, tokenIdg0eMCqY, dataQGRJiDH, {from: accounts[0]});
	});
})