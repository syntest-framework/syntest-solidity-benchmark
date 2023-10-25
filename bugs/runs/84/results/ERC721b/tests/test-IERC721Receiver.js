const IERC721Receiver = artifacts.require("IERC721Receiver");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721Receiver', (accounts) => {
	it('test for IERC721Receiver', async () => {
		const contracth85zplA = await IERC721Receiver.new({from: accounts[3]});
		const dataaP4NnSa = "0x1308130707010709131c0d010e1d0d151b18"
		const tokenIdwOJtCcT = BigInt("576")
		const fromr9Er2bS = accounts[0]
		const operatorlGl2qur = accounts[1]
		const dataBOnDvyX = "0x061c090b051019131404190c150515020d1a0f0606"
		const tokenId1s8yZu = BigInt("638")
		const fromxzlORjx = accounts[5]
		const operatortIeuOUE = accounts[3]
		const dataZH3PWG5 = "0x121312041816050e110b171706150101100b151012181b1d"
		const tokenIdG1CHAZJ = BigInt("224")
		const fromV0PfboW = accounts[5]
		const operatorBOOmVGQ = accounts[2]
		const dataIwxJWlw = "0x070f14151c1a1c121c18101c15131c010a07191a121f0119"
		const tokenIdepRXCrQ = BigInt("1316")
		const frome1Pmcy7 = accounts[1]
		const operatorZziHdFO = accounts[0]
		const dataW5hpfNp = "0x1d0f1f0a151912020e171e1e1b0f14081405100f0d"
		const tokenIdm4ZLLSg = BigInt("323")
		const fromRRNLOfv = accounts[2]
		const operatorar22mZ8 = accounts[0]
		const nullgnQb4i5 = await contracth85zplA.onERC721Received.call(operatorlGl2qur, fromr9Er2bS, tokenIdwOJtCcT, dataaP4NnSa, {from: accounts[4]});
		const nullraX4yMk = await contracth85zplA.onERC721Received.call(operatortIeuOUE, fromxzlORjx, tokenId1s8yZu, dataBOnDvyX, {from: accounts[2]});
		const nullPuniqw = await contracth85zplA.onERC721Received.call(operatorBOOmVGQ, fromV0PfboW, tokenIdG1CHAZJ, dataZH3PWG5, {from: accounts[2]});
		const nullc3oFCO5 = await contracth85zplA.onERC721Received.call(operatorZziHdFO, frome1Pmcy7, tokenIdepRXCrQ, dataIwxJWlw, {from: accounts[2]});
		const nullUUJe3So = await contracth85zplA.onERC721Received.call(operatorar22mZ8, fromRRNLOfv, tokenIdm4ZLLSg, dataW5hpfNp, {from: accounts[4]});
	});
})