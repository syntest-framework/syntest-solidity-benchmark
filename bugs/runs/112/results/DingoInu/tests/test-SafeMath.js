const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractoBYrf50 = await SafeMath.new({from: accounts[3]});
		const beEdTGyb = BigInt("924")
		const aWSdiNlu = BigInt("133")
		const b15gJrS = BigInt("1415")
		const aCCAzvrs = BigInt("1780")
		const brImnRB0 = BigInt("483")
		const anRBbmyR = BigInt("1775")
		const bJQRqHyT = BigInt("1569")
		const adKVSP8J = BigInt("1487")
		const bW0mqqWr = BigInt("283")
		const axlYEbXt = BigInt("1239")
		const cdoEIugf = await contractoBYrf50.safeSub.call(aWSdiNlu, beEdTGyb, {from: accounts[0]});
		const cCKStROQ = await contractoBYrf50.safeMul.call(aCCAzvrs, b15gJrS, {from: accounts[1]});
		const cTWljVUw = await contractoBYrf50.safeMul.call(anRBbmyR, brImnRB0, {from: accounts[2]});
		const cozzB7oP = await contractoBYrf50.safeSub.call(adKVSP8J, bJQRqHyT, {from: accounts[2]});
		const cNJRDT2T = await contractoBYrf50.safeAdd.call(axlYEbXt, bW0mqqWr, {from: accounts[5]});

		await expect(contractoBYrf50.safeSub.call(aWSdiNlu, beEdTGyb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractVn6tQnk = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bHGAE9k = BigInt("1553")
		const aLNCiEp = BigInt("648")
		const blziJW6 = BigInt("858")
		const aFkDqR2e = BigInt("214")
		const bssMGfTH = BigInt("1819")
		const ayi2k3g9 = BigInt("357")
		const b3ovZrd = BigInt("1515")
		const anDfskkM = BigInt("892")
		const bd3DsFrG = BigInt("517")
		const awkvdCPn = BigInt("33")
		const cv7Xi1V = await contractVn6tQnk.safeSub.call(aLNCiEp, bHGAE9k, {from: accounts[4]});
		const coAYSYzf = await contractVn6tQnk.safeSub.call(aFkDqR2e, blziJW6, {from: accounts[2]});
		const caFyb0zc = await contractVn6tQnk.safeAdd.call(ayi2k3g9, bssMGfTH, {from: "0x0000000000000000000000000000000000000001"});
		const cMbypW7g = await contractVn6tQnk.safeSub.call(anDfskkM, b3ovZrd, {from: accounts[5]});
		const cAjs0kuU = await contractVn6tQnk.safeDiv.call(awkvdCPn, bd3DsFrG, {from: "0x0000000000000000000000000000000000000001"});
	});
})