const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyg8K0wCC = await HungryHoody.new({from: accounts[2]});
		const uintC5Dbg39 = BigInt("446")
		const uintiWiUlPa = BigInt("1081")
		const uintqCLiVl7 = BigInt("1733")
		const uintVhXaGtM = BigInt("896")
		const uintqxHMyv = BigInt("1872")
		const uintBKmJ4h = BigInt("1737")
		const uintIi99Bz = await HungryHoodyg8K0wCC.safeMul.call(uintiWiUlPa, uintC5Dbg39, {from: accounts[1]});
		const uintkjrdEJk = await HungryHoodyg8K0wCC.safeDiv.call(uintVhXaGtM, uintqCLiVl7, {from: accounts[0]});
		const uintug1lQzQ = await HungryHoodyg8K0wCC.safeDiv.call(uintBKmJ4h, uintqxHMyv, {from: accounts[0]});

		assert.equal(uintIi99Bz, BigInt("482126"))
		assert.equal(uintkjrdEJk, BigInt("0"))
		assert.equal(uintug1lQzQ, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyxt4NDsU = await HungryHoody.new({from: accounts[1]});
		const uintdZANVH5 = BigInt("1618")
		const addressDh1bk3P = accounts[1]
		const addressXNHJ2G8 = accounts[3]
		const addressIwGMqBj = accounts[3]
		const addressjrLy2bO = accounts[2]
		const addressMSRl31P = accounts[4]
		const addresstCIVgbJ = accounts[2]
		const addressTpenl1X = accounts[5]
		const boolRMUrsby = await HungryHoodyxt4NDsU.approve.call(addressDh1bk3P, uintdZANVH5, {from: accounts[4]});
		const uinte1n0jc0 = await HungryHoodyxt4NDsU.balanceOf.call(addressXNHJ2G8, {from: accounts[4]});
		const uintOQFKIcH = await HungryHoodyxt4NDsU.allowance.call(addressjrLy2bO, addressIwGMqBj, {from: accounts[0]});
		const uintMGFpqQJ = await HungryHoodyxt4NDsU.balanceOf.call(addressMSRl31P, {from: accounts[2]});
		const uintSvYLWYH = await HungryHoodyxt4NDsU.allowance.call(addressTpenl1X, addresstCIVgbJ, {from: accounts[4]});

		assert.equal(boolRMUrsby, true)
		assert.equal(uintMGFpqQJ, BigInt("0"))
		assert.equal(uintOQFKIcH, BigInt("0"))
		assert.equal(uintSvYLWYH, BigInt("0"))
		assert.equal(uinte1n0jc0, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyKNuyZYy = await HungryHoody.new({from: accounts[2]});
		const addressZObBQcE = accounts[3]
		const addressPAyykfC = accounts[2]
		const uintTe6jnFp = BigInt("56")
		const uintJQMjwAN = BigInt("620")
		const uintm89tlrn = await HungryHoodyKNuyZYy.balanceOf.call(addressZObBQcE, {from: accounts[1]});
		const uintZWGDamv = await HungryHoodyKNuyZYy.balanceOf.call(addressPAyykfC, {from: accounts[4]});
		const uintXNP3CZ = await HungryHoodyKNuyZYy.safeDiv.call(uintJQMjwAN, uintTe6jnFp, {from: accounts[1]});
		const uintAq7sA3f = await HungryHoodyKNuyZYy.totalSupply.call({from: accounts[0]});

		assert.equal(uintAq7sA3f, BigInt("25000000000000000000"))
		assert.equal(uintXNP3CZ, BigInt("11"))
		assert.equal(uintZWGDamv, BigInt("25000000000000000000"))
		assert.equal(uintm89tlrn, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodynVO7bF = await HungryHoody.new({from: accounts[1]});
		const uintaNsHjns = BigInt("119")
		const addressN0BhXXW = accounts[0]
		const addressaraYF5 = accounts[4]
		const uintEqc3uDS = BigInt("570")
		const uintae5k9iN = BigInt("904")
		const uinttMdTVrL = BigInt("1047")
		const uintwMKiAr1 = BigInt("542")
		const uintfqZCYa = await HungryHoodynVO7bF.totalSupply.call({from: accounts[4]});
//		const boolTwXTTau = await HungryHoodynVO7bF.transferFrom.call(addressaraYF5, addressN0BhXXW, uintaNsHjns, {from: accounts[5]});
//		const uintcLdR58j = await HungryHoodynVO7bF.safeMul.call(uintae5k9iN, uintEqc3uDS, {from: accounts[3]});
//		const uintSTvWSGp = await HungryHoodynVO7bF.safeDiv.call(uintwMKiAr1, uinttMdTVrL, {from: accounts[0]});
//		const uintBYIyDFT = await HungryHoodynVO7bF.totalSupply.call({from: accounts[0]});

		assert.equal(uintfqZCYa, BigInt("25000000000000000000"))
		await expect(HungryHoodynVO7bF.transferFrom.call(addressaraYF5, addressN0BhXXW, uintaNsHjns, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyny50WVd = await HungryHoody.new({from: accounts[1]});
		const uintbaqOGeq = BigInt("914")
		const addressCsnod9J = "0x0000000000000000000000000000000000000001"
		const uintjFSSBvf = BigInt("389")
		const uintLeXSysN = BigInt("365")
//		const boolOGcC2Lm = await HungryHoodyny50WVd.transfer.call(addressCsnod9J, uintbaqOGeq, {from: accounts[3]});
//		const uintGLIKbVV = await HungryHoodyny50WVd.safeSub.call(uintLeXSysN, uintjFSSBvf, {from: accounts[1]});

		await expect(HungryHoodyny50WVd.transfer.call(addressCsnod9J, uintbaqOGeq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyny50WVd = await HungryHoody.new({from: accounts[1]});
		const uintcHCWhWk = BigInt("1229")
		const uintVCoSREs = BigInt("1686")
		const uintOR1SJ1d = BigInt("389")
		const uintlCsqpdM = BigInt("1419")
		const uintqtenzCU = await HungryHoodyny50WVd.safeAdd.call(uintVCoSREs, uintcHCWhWk, {from: accounts[1]});
		const uintGLIKbVV = await HungryHoodyny50WVd.safeSub.call(uintlCsqpdM, uintOR1SJ1d, {from: accounts[1]});

		assert.equal(uintGLIKbVV, BigInt("1030"))
		assert.equal(uintqtenzCU, BigInt("2915"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyyhsbQY7 = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCJORrgp = BigInt("740")
		const addressfBfU5N0 = accounts[1]
		const uintN3ARP8f = BigInt("1595")
		const uintgVNzXMW = BigInt("454")
		const uintxUYEkB = BigInt("774")
		const uintM0wxS1t = BigInt("726")
		const addressLlpAyFC = "0x0000000000000000000000000000000000000001"
		const uintDctGW9g = BigInt("926")
		const uintjYQB7IU = BigInt("532")
		const boolWdWW3ba = await HungryHoodyyhsbQY7.approve.call(addressfBfU5N0, uintCJORrgp, {from: accounts[4]});
		const uintXl1npIS = await HungryHoodyyhsbQY7.safeDiv.call(uintgVNzXMW, uintN3ARP8f, {from: accounts[0]});
		const uintblCp81N = await HungryHoodyyhsbQY7.safeMul.call(uintM0wxS1t, uintxUYEkB, {from: accounts[2]});
		const uintf04zLW = await HungryHoodyyhsbQY7.balanceOf.call(addressLlpAyFC, {from: "0x0000000000000000000000000000000000000001"});
		const uintCRxYHC = await HungryHoodyyhsbQY7.safeAdd.call(uintjYQB7IU, uintDctGW9g, {from: accounts[4]});
	});
})