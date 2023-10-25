const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contractjc6mtc = await IERC721Receiver.new({from: accounts[0]});
		const datav4bM7zN = "0x0202040d1d200e041e08070b021218050c"
		const tokenIdVWbUi0 = BigInt("1533")
		const fromOxvR9cQ = "0x0000000000000000000000000000000000000001"
		const operatorU4bcMxR = accounts[2]
		const datarE4qJkD = "0x1c1b190e0f031a2017"
		const tokenIdE5gCq0 = BigInt("1513")
		const fromqr12bcA = accounts[2]
		const operatoryzGRpUD = accounts[3]
		const dataqGcAbRq = "0x040412150d1a1812151a0119070a0a1a071e1105"
		const tokenIdkQLYKE5 = BigInt("350")
		const fromnU3IjjG = accounts[2]
		const operatorU6yEvI = accounts[2]
		const dataZFGP6BQ = "0x091d080b1c1703020919080814000f001a10201a1b0b0d"
		const tokenIdEUlQuB7 = BigInt("590")
		const fromBn5W3ME = accounts[1]
		const operatorJPTz0oT = accounts[0]
		const datamSVF4mh = "0x170f1d061d101a01050d"
		const tokenIdR0vu0H = BigInt("88")
		const frombsBRsKC = accounts[0]
		const operatorqYF2WA1 = accounts[4]
		const nullY5SeblP = await contractjc6mtc.onERC721Received.call(operatorU4bcMxR, fromOxvR9cQ, tokenIdVWbUi0, datav4bM7zN, {from: accounts[4]});
		const nullBe1NYwK = await contractjc6mtc.onERC721Received.call(operatoryzGRpUD, fromqr12bcA, tokenIdE5gCq0, datarE4qJkD, {from: accounts[1]});
		const nullVFm0LHM = await contractjc6mtc.onERC721Received.call(operatorU6yEvI, fromnU3IjjG, tokenIdkQLYKE5, dataqGcAbRq, {from: accounts[3]});
		const nullamdvSkh = await contractjc6mtc.onERC721Received.call(operatorJPTz0oT, fromBn5W3ME, tokenIdEUlQuB7, dataZFGP6BQ, {from: accounts[2]});
		const nullNfdsS6D = await contractjc6mtc.onERC721Received.call(operatorqYF2WA1, frombsBRsKC, tokenIdR0vu0H, datamSVF4mh, {from: accounts[3]});
	});
})