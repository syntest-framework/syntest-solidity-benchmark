const IERC721 = artifacts.require("IERC721");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('IERC721', (accounts) => {
	it('test for IERC721', async () => {
		const contractwriqzyg = await IERC721.new({from: "0x0000000000000000000000000000000000000001"});
		const tokenIdSodHYSp = BigInt("735")
		const tokenIdDloAB57 = BigInt("1096")
		const toJlmZXED = accounts[1]
		const fromBEMtbkS = accounts[3]
		const operatorOcM3Xd = accounts[1]
		const owneruI5DI7 = accounts[3]
		const tokenIdhEdAaRs = BigInt("1768")
		const toeY1nQTL = accounts[4]
		const tokenIdKY4VFE = BigInt("1767")
		const toOMvDYuU = accounts[2]
		const fromjmldSii = accounts[0]
		const ownervhRw3NV = await contractwriqzyg.ownerOf.call(tokenIdSodHYSp, {from: accounts[3]});
		await contractwriqzyg.transferFrom.call(fromBEMtbkS, toJlmZXED, tokenIdDloAB57, {from: accounts[4]});
		const nullgIKGDyj = await contractwriqzyg.isApprovedForAll.call(owneruI5DI7, operatorOcM3Xd, {from: accounts[0]});
		await contractwriqzyg.approve.call(toeY1nQTL, tokenIdhEdAaRs, {from: accounts[3]});
		await contractwriqzyg.transferFrom.call(fromjmldSii, toOMvDYuU, tokenIdKY4VFE, {from: accounts[2]});
	});
})