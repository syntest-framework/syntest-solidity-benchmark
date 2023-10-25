const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractHU7gCH = await IERC721Receiver.new({from: accounts[0]});
		const datavLBsSn3 = "0x040f190c0a100c1f181908001e050b151a0f011f"
		const tokenIdmPgEIMs = BigInt("1228")
		const frome0Cx1RQ = accounts[0]
		const operatorzFaDQak = "0x0000000000000000000000000000000000000001"
		const datahdKULBK = "0x0d0617091e03081d061e1e06040609191e11151f160e"
		const tokenIdeaISPSc = BigInt("1504")
		const fromceUWqt = accounts[2]
		const operatoryDrFjn6 = accounts[4]
		const dataQrJAKV = "0x0e0a06141f01110512060e0f131f0d0e0714091804071f07071016"
		const tokenIdkL7BjDA = BigInt("1966")
		const fromYkcApx = accounts[4]
		const operatorXdR2IX9 = "0x0000000000000000000000000000000000000001"
		const dataOulcjaf = "0x14090a0715060708"
		const tokenIdjedTI15 = BigInt("1513")
		const fromLpz2sgF = accounts[3]
		const operatorUXXFroQ = accounts[1]
		const dataOvomwlx = "0x1805060715140f1c100c"
		const tokenIdqtYLwQ = BigInt("1425")
		const fromy9AWhbT = accounts[1]
		const operatorJchdKii = accounts[2]
		const dataYq4oZDP = "0x0217141814151f161702"
		const tokenIdeul7BuN = BigInt("235")
		const fromJQ2D1YK = accounts[0]
		const operatorN3trqHW = accounts[4]
		const nullfPAXkVn = await contractHU7gCH.onERC721Received.call(operatorzFaDQak, frome0Cx1RQ, tokenIdmPgEIMs, datavLBsSn3, {from: accounts[1]});
		const nullLYsrDvT = await contractHU7gCH.onERC721Received.call(operatoryDrFjn6, fromceUWqt, tokenIdeaISPSc, datahdKULBK, {from: accounts[4]});
		const nullQVqCYE7 = await contractHU7gCH.onERC721Received.call(operatorXdR2IX9, fromYkcApx, tokenIdkL7BjDA, dataQrJAKV, {from: accounts[2]});
		const nullhVKLsb = await contractHU7gCH.onERC721Received.call(operatorUXXFroQ, fromLpz2sgF, tokenIdjedTI15, dataOulcjaf, {from: accounts[1]});
		const nullVSOBpR1 = await contractHU7gCH.onERC721Received.call(operatorJchdKii, fromy9AWhbT, tokenIdqtYLwQ, dataOvomwlx, {from: accounts[3]});
		const nullgDbGOtN = await contractHU7gCH.onERC721Received.call(operatorN3trqHW, fromJQ2D1YK, tokenIdeul7BuN, dataYq4oZDP, {from: accounts[4]});
	});
})