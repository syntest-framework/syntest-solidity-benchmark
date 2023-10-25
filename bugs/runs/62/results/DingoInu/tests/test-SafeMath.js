const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contract6zqIDA = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bzGKmlEt = BigInt("971")
		const aJRAPETC = BigInt("409")
		const bUaGDq7n = BigInt("1993")
		const aButAqop = BigInt("742")
		const bZ57sgmN = BigInt("257")
		const aTRhF4DL = BigInt("1664")
		const c28Sqiw = await contract6zqIDA.safeAdd.call(aJRAPETC, bzGKmlEt, {from: accounts[3]});
		const cRrl1VM8 = await contract6zqIDA.safeDiv.call(aButAqop, bUaGDq7n, {from: accounts[4]});
		const cI3Jesg9 = await contract6zqIDA.safeSub.call(aTRhF4DL, bZ57sgmN, {from: accounts[4]});
	});

	it('test for SafeMath', async () => {
		const contractumEgJU = await SafeMath.new({from: accounts[4]});
		const bHh8HpSa = BigInt("289")
		const aZaJzxMh = BigInt("1490")
		const bPkOcroF = BigInt("138")
		const aq2MrWPM = BigInt("1111")
		const bjoiJH10 = BigInt("1331")
		const agR21GYf = BigInt("179")
		const cxYuuUz = await contractumEgJU.safeDiv.call(aZaJzxMh, bHh8HpSa, {from: accounts[4]});
		const cgT20Yr = await contractumEgJU.safeSub.call(aq2MrWPM, bPkOcroF, {from: accounts[2]});
		const cQdM6BvM = await contractumEgJU.safeSub.call(agR21GYf, bjoiJH10, {from: accounts[3]});

		assert.equal(cgT20Yr, 973)
		assert.equal(cxYuuUz, 5)
		await expect(contractumEgJU.safeSub.call(agR21GYf, bjoiJH10, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})