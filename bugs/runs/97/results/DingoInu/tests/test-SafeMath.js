const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractY4R5q9 = await SafeMath.new({from: accounts[0]});
		const bYCx5LB3 = BigInt("930")
		const asGNPlcm = BigInt("364")
		const bbVW6hF = BigInt("1523")
		const att71iIY = BigInt("1935")
		const bOxpPKAX = BigInt("1285")
		const aCUkwDDG = BigInt("883")
		const bfeNyfdl = BigInt("1681")
		const amnobxTv = BigInt("1039")
		const bRmtRnSy = BigInt("1628")
		const apcCbY4f = BigInt("1631")
		const cp4ZjWoa = await contractY4R5q9.safeDiv.call(asGNPlcm, bYCx5LB3, {from: accounts[1]});
		const cF9DRY3r = await contractY4R5q9.safeAdd.call(att71iIY, bbVW6hF, {from: accounts[3]});
		const ciYTmhb = await contractY4R5q9.safeSub.call(aCUkwDDG, bOxpPKAX, {from: accounts[3]});
		const caCbQlOA = await contractY4R5q9.safeAdd.call(amnobxTv, bfeNyfdl, {from: accounts[1]});
		const ckkvAxBW = await contractY4R5q9.safeSub.call(apcCbY4f, bRmtRnSy, {from: accounts[3]});

		assert.equal(cF9DRY3r, 3458)
		assert.equal(cp4ZjWoa, 0)
		await expect(contractY4R5q9.safeSub.call(aCUkwDDG, bOxpPKAX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractwev5lQ1 = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bgMGCtsy = BigInt("1351")
		const aXNsutfv = BigInt("840")
		const bH1vOjNY = BigInt("1763")
		const aSJGlZ20 = BigInt("1896")
		const bp441kKE = BigInt("483")
		const aFTQaZuA = BigInt("1687")
		const bPdypZY = BigInt("749")
		const aJ3Okooo = BigInt("803")
		const ckk92N57 = await contractwev5lQ1.safeMul.call(aXNsutfv, bgMGCtsy, {from: accounts[3]});
		const cql9oqzJ = await contractwev5lQ1.safeDiv.call(aSJGlZ20, bH1vOjNY, {from: accounts[3]});
		const cSJyG8f6 = await contractwev5lQ1.safeSub.call(aFTQaZuA, bp441kKE, {from: accounts[1]});
		const cY8Am3z3 = await contractwev5lQ1.safeMul.call(aJ3Okooo, bPdypZY, {from: "0x0000000000000000000000000000000000000001"});
	});
})