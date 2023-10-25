const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractHpS46qa = await SafeMath.new({from: accounts[2]});
		const bPjNNaC = BigInt("1978")
		const acjOpqBy = BigInt("83")
		const bxvzUDAO = BigInt("468")
		const ayeEGh6l = BigInt("1890")
		const bAnIeEHs = BigInt("1880")
		const apypXfN = BigInt("662")
		const bGEkb1gW = BigInt("522")
		const acxp2tEA = BigInt("1084")
		const bMKNja6j = BigInt("1294")
		const ahMYouBi = BigInt("1503")
		const ccrGARi4 = await contractHpS46qa.safeMul.call(acjOpqBy, bPjNNaC, {from: accounts[4]});
		const clZdnwJj = await contractHpS46qa.safeSub.call(ayeEGh6l, bxvzUDAO, {from: accounts[3]});
		const ctsrz9U = await contractHpS46qa.safeSub.call(apypXfN, bAnIeEHs, {from: "0x0000000000000000000000000000000000000001"});
		const co7bWSi8 = await contractHpS46qa.safeSub.call(acxp2tEA, bGEkb1gW, {from: accounts[2]});
		const cMRTmB7G = await contractHpS46qa.safeMul.call(ahMYouBi, bMKNja6j, {from: accounts[2]});

		assert.equal(ccrGARi4, 164174)
		assert.equal(clZdnwJj, 1422)
		await expect(contractHpS46qa.safeSub.call(apypXfN, bAnIeEHs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SafeMath', async () => {
		const contractQpjIUjS = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const buP0V1bH = BigInt("1469")
		const aWPntmAb = BigInt("604")
		const bUymgbZt = BigInt("1208")
		const aO4VeZ6X = BigInt("1836")
		const bn4ci5lU = BigInt("968")
		const aL5MqY9l = BigInt("1212")
		const bOW0s4Hv = BigInt("940")
		const aO04qb1R = BigInt("887")
		const bnETx33 = BigInt("1825")
		const awaaeQBs = BigInt("923")
		const cIxLlMw = await contractQpjIUjS.safeSub.call(aWPntmAb, buP0V1bH, {from: accounts[4]});
		const cL7FRNXG = await contractQpjIUjS.safeAdd.call(aO4VeZ6X, bUymgbZt, {from: accounts[4]});
		const cshEu4sE = await contractQpjIUjS.safeMul.call(aL5MqY9l, bn4ci5lU, {from: accounts[2]});
		const c8U3iAW = await contractQpjIUjS.safeDiv.call(aO04qb1R, bOW0s4Hv, {from: accounts[0]});
		const cPfGXOOr = await contractQpjIUjS.safeSub.call(awaaeQBs, bnETx33, {from: accounts[3]});
	});
})