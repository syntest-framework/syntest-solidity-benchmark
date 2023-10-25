const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contract1WPsQF = await IERC721Receiver.new({from: accounts[5]});
		const dataftIAhhn = "0x0b1c1c1e02"
		const tokenIdDw11jZx = BigInt("1895")
		const fromkpa8ULT = accounts[4]
		const operatoriz90qYa = accounts[2]
		const datakZnlG0T = "0x13061d1f09031d1105061f0e1110121b0a140613110811"
		const tokenIdryOFsY = BigInt("1127")
		const frommckHOrL = accounts[3]
		const operatorjAlWvsO = accounts[3]
		const dataEGpyDbf = "0x1a0e0d180a"
		const tokenIdPFzq9yr = BigInt("732")
		const fromB1IJ9AY = accounts[4]
		const operatorkRnObQu = accounts[5]
		const datajOeF982 = "0x1b1e1b110b1c0c1a0d120c1113041103071106171019111d100c"
		const tokenIdlWy9b4 = BigInt("239")
		const fromqckICb6 = accounts[0]
		const operatorH1JlnL = accounts[4]
		const nullcqXCGLR = await contract1WPsQF.onERC721Received.call(operatoriz90qYa, fromkpa8ULT, tokenIdDw11jZx, dataftIAhhn, {from: accounts[1]});
		const nullZZzbHEa = await contract1WPsQF.onERC721Received.call(operatorjAlWvsO, frommckHOrL, tokenIdryOFsY, datakZnlG0T, {from: accounts[5]});
		const nulliCR5oTL = await contract1WPsQF.onERC721Received.call(operatorkRnObQu, fromB1IJ9AY, tokenIdPFzq9yr, dataEGpyDbf, {from: accounts[0]});
		const nullY1AvNSd = await contract1WPsQF.onERC721Received.call(operatorH1JlnL, fromqckICb6, tokenIdlWy9b4, datajOeF982, {from: accounts[3]});
	});
})