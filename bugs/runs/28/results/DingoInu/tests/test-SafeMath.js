const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractGHxAOKq = await SafeMath.new({from: accounts[4]});
		const bXqLPgcY = BigInt("582")
		const aKYHjMXs = BigInt("1288")
		const buP6mw1F = BigInt("474")
		const a9rWGPp = BigInt("1319")
		const bepAyqX1 = BigInt("360")
		const aVBFJ2f = BigInt("1055")
		const bNYKZZWh = BigInt("508")
		const aLFMT2Lo = BigInt("334")
		const cQCmr5H = await contractGHxAOKq.safeAdd.call(aKYHjMXs, bXqLPgcY, {from: accounts[0]});
		const cdRuZuMw = await contractGHxAOKq.safeMul.call(a9rWGPp, buP6mw1F, {from: accounts[3]});
		const cIOOaZrD = await contractGHxAOKq.safeSub.call(aVBFJ2f, bepAyqX1, {from: accounts[4]});
		const cYSsV4GS = await contractGHxAOKq.safeSub.call(aLFMT2Lo, bNYKZZWh, {from: accounts[4]});

		assert.equal(cIOOaZrD, 695)
		assert.equal(cQCmr5H, 1870)
		assert.equal(cdRuZuMw, 625206)
		await expect(contractGHxAOKq.safeSub.call(aLFMT2Lo, bNYKZZWh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractdRL92NB = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const biDQdfHf = BigInt("907")
		const aYSalI4 = BigInt("1317")
		const bXyhwSBO = BigInt("1422")
		const akie0RRr = BigInt("836")
		const bjyg8JWk = BigInt("1083")
		const aqaGI69 = BigInt("106")
		const bmJpoQJN = BigInt("136")
		const aYXZbOXx = BigInt("61")
		const cr3CAEu7 = await contractdRL92NB.safeDiv.call(aYSalI4, biDQdfHf, {from: accounts[4]});
		const cohBLuUQ = await contractdRL92NB.safeMul.call(akie0RRr, bXyhwSBO, {from: accounts[1]});
		const cqwtoIc = await contractdRL92NB.safeSub.call(aqaGI69, bjyg8JWk, {from: accounts[2]});
		const cmem2VzO = await contractdRL92NB.safeSub.call(aYXZbOXx, bmJpoQJN, {from: accounts[3]});
	});
})