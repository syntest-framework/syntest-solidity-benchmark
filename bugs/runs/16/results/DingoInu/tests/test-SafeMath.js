const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractdpyDym6 = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bGYtbfnM = BigInt("590")
		const anabpte = BigInt("1429")
		const bIFtXa3Z = BigInt("393")
		const aKmNlSE = BigInt("276")
		const bgDWKmNX = BigInt("58")
		const axVpb2D = BigInt("1562")
		const cjpeLXx5 = await contractdpyDym6.safeMul.call(anabpte, bGYtbfnM, {from: accounts[1]});
		const cqrsbmv = await contractdpyDym6.safeSub.call(aKmNlSE, bIFtXa3Z, {from: accounts[5]});
		const c7gr34S = await contractdpyDym6.safeMul.call(axVpb2D, bgDWKmNX, {from: accounts[3]});
	});

	it('test for SafeMath', async () => {
		const contractsAgAUJX = await SafeMath.new({from: accounts[1]});
		const bJkFwwp = BigInt("1489")
		const anc97IBm = BigInt("320")
		const bjeO9Ue = BigInt("1805")
		const axjEzxuf = BigInt("459")
		const bn9G2jrj = BigInt("349")
		const alekyyw = BigInt("139")
		const cKzjLStg = await contractsAgAUJX.safeDiv.call(anc97IBm, bJkFwwp, {from: "0x0000000000000000000000000000000000000001"});
		const cT1zDRDe = await contractsAgAUJX.safeMul.call(axjEzxuf, bjeO9Ue, {from: accounts[2]});
		const ctHHzxAv = await contractsAgAUJX.safeSub.call(alekyyw, bn9G2jrj, {from: accounts[4]});

		assert.equal(cKzjLStg, 0)
		assert.equal(cT1zDRDe, 828495)
		await expect(contractsAgAUJX.safeSub.call(alekyyw, bn9G2jrj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})