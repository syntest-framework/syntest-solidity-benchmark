const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractCutDdtF = await SafeMath.new({from: accounts[2]});
		const bzUjDMp = BigInt("1801")
		const aBOmVTnU = BigInt("1796")
		const bm8UXiSC = BigInt("1391")
		const aVJS62pH = BigInt("1081")
		const bI74rmBQ = BigInt("1839")
		const aVhjqHq = BigInt("1658")
		const bD5Jqiy7 = BigInt("1445")
		const amHqV4oo = BigInt("1894")
		const bf6wCFmw = BigInt("17")
		const awBoH3Zk = BigInt("1215")
		const cOgHefDj = await contractCutDdtF.safeSub.call(aBOmVTnU, bzUjDMp, {from: accounts[2]});
		const cVSreVWz = await contractCutDdtF.safeMul.call(aVJS62pH, bm8UXiSC, {from: accounts[0]});
		const cAc64geK = await contractCutDdtF.safeSub.call(aVhjqHq, bI74rmBQ, {from: accounts[1]});
		const c5wbCBr = await contractCutDdtF.safeAdd.call(amHqV4oo, bD5Jqiy7, {from: accounts[4]});
		const cZGeh7h = await contractCutDdtF.safeDiv.call(awBoH3Zk, bf6wCFmw, {from: accounts[1]});

		await expect(contractCutDdtF.safeSub.call(aBOmVTnU, bzUjDMp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractTEZ2RyC = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bQR6TyCB = BigInt("1401")
		const alZ0MTp0 = BigInt("380")
		const bVLgsDGw = BigInt("1615")
		const aYcRCQgI = BigInt("791")
		const bm4kAxzB = BigInt("1801")
		const aNAuAgg = BigInt("894")
		const bo8h9EHj = BigInt("1965")
		const aFWcx0NJ = BigInt("334")
		const bEWG9EBu = BigInt("1747")
		const aIpga6cT = BigInt("1225")
		const cxPaN9mp = await contractTEZ2RyC.safeAdd.call(alZ0MTp0, bQR6TyCB, {from: accounts[3]});
		const cqDANH5K = await contractTEZ2RyC.safeMul.call(aYcRCQgI, bVLgsDGw, {from: accounts[3]});
		const cIuuDUxq = await contractTEZ2RyC.safeAdd.call(aNAuAgg, bm4kAxzB, {from: "0x0000000000000000000000000000000000000001"});
		const cFwB3qwX = await contractTEZ2RyC.safeMul.call(aFWcx0NJ, bo8h9EHj, {from: accounts[0]});
		const cJgVxBSq = await contractTEZ2RyC.safeAdd.call(aIpga6cT, bEWG9EBu, {from: accounts[3]});
	});
})