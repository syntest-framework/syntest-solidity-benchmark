const SafeMath = artifacts.require("SafeMath");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SafeMath', (accounts) => {
	it('test for SafeMath', async () => {
		const contractO9UmCdH = await SafeMath.new({from: "0x0000000000000000000000000000000000000001"});
		const bJcRVRC3 = BigInt("253")
		const aSMZn1Jt = BigInt("1880")
		const bkV2TaPk = BigInt("1447")
		const aQops76 = BigInt("585")
		const bmk2XsGY = BigInt("1333")
		const a9DopTN = BigInt("376")
		const bOBMCkTz = BigInt("602")
		const aSp1BFUE = BigInt("1717")
		const cLPUBO0J = await contractO9UmCdH.safeSub.call(aSMZn1Jt, bJcRVRC3, {from: accounts[4]});
		const cckLPiHH = await contractO9UmCdH.safeMul.call(aQops76, bkV2TaPk, {from: accounts[2]});
		const cI8u6LiQ = await contractO9UmCdH.safeMul.call(a9DopTN, bmk2XsGY, {from: accounts[0]});
		const cXn39Qo3 = await contractO9UmCdH.safeAdd.call(aSp1BFUE, bOBMCkTz, {from: accounts[4]});
	});

	it('test for SafeMath', async () => {
		const contracth5Xa7KT = await SafeMath.new({from: accounts[3]});
		const bZ8jM49o = BigInt("788")
		const aM1rUffT = BigInt("780")
		const bZu1qtz = BigInt("60")
		const aSlKmBbA = BigInt("219")
		const bRh8ww4 = BigInt("1189")
		const awsandh4 = BigInt("542")
		const bItJtwW6 = BigInt("1875")
		const aWJzlLW9 = BigInt("762")
		const bVhv5soL = BigInt("615")
		const abZfmPo6 = BigInt("512")
		const cIlzlIQW = await contracth5Xa7KT.safeDiv.call(aM1rUffT, bZ8jM49o, {from: "0x0000000000000000000000000000000000000001"});
		const cxlvm2iq = await contracth5Xa7KT.safeAdd.call(aSlKmBbA, bZu1qtz, {from: accounts[2]});
		const ckO6mZrt = await contracth5Xa7KT.safeSub.call(awsandh4, bRh8ww4, {from: accounts[4]});
		const czdUtkTB = await contracth5Xa7KT.safeDiv.call(aWJzlLW9, bItJtwW6, {from: accounts[0]});
		const cg91nsrT = await contracth5Xa7KT.safeSub.call(abZfmPo6, bVhv5soL, {from: accounts[0]});

		assert.equal(cIlzlIQW, 0)
		assert.equal(cxlvm2iq, 279)
		await expect(contracth5Xa7KT.safeSub.call(awsandh4, bRh8ww4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})