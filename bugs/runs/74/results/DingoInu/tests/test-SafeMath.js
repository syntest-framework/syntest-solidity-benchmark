const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractfq7BjP9 = await SafeMath.new({from: accounts[2]});
		const bW84Igsb = BigInt("30")
		const aLtix01s = BigInt("224")
		const bLlN1Jy0 = BigInt("1750")
		const aMtGagD0 = BigInt("1481")
		const bq09Skt3 = BigInt("1369")
		const aMiGQmUM = BigInt("1103")
		const cMx3seio = await contractfq7BjP9.safeSub.call(aLtix01s, bW84Igsb, {from: accounts[4]});
		const cfJJUGj4 = await contractfq7BjP9.safeSub.call(aMtGagD0, bLlN1Jy0, {from: accounts[3]});
		const cpgaGgZ1 = await contractfq7BjP9.safeMul.call(aMiGQmUM, bq09Skt3, {from: accounts[3]});

		assert.equal(cMx3seio, 194)
		await expect(contractfq7BjP9.safeSub.call(aMtGagD0, bLlN1Jy0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractMVKRGhV = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bvV8WF64 = BigInt("49")
		const aUnnVzo = BigInt("139")
		const bbOBGEc = BigInt("1144")
		const atDkgYUN = BigInt("61")
		const btfmP1yn = BigInt("253")
		const aNyA0cHj = BigInt("981")
		const bKaDNmAJ = BigInt("1190")
		const a9H4sAB = BigInt("609")
		const cPvapLc = await contractMVKRGhV.safeMul.call(aUnnVzo, bvV8WF64, {from: accounts[5]});
		const cEvRP7P3 = await contractMVKRGhV.safeMul.call(atDkgYUN, bbOBGEc, {from: accounts[2]});
		const cUqoqdDH = await contractMVKRGhV.safeSub.call(aNyA0cHj, btfmP1yn, {from: accounts[2]});
		const cKJ34LbK = await contractMVKRGhV.safeAdd.call(a9H4sAB, bKaDNmAJ, {from: accounts[3]});
	});
})