const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyXEgwRwe = await HungryHoody.new({from: accounts[1]});
		const addressaPB5ED = accounts[0]
		const addressCKKlqYw = accounts[2]
		const addresshGIHpTY = "0x0000000000000000000000000000000000000001"
		const uintmMIxPVb = await HungryHoodyXEgwRwe.allowance.call(addressCKKlqYw, addressaPB5ED, {from: accounts[3]});
		const uintroXd2DN = await HungryHoodyXEgwRwe.totalSupply.call({from: accounts[0]});
		const uintSbl1AsP = await HungryHoodyXEgwRwe.balanceOf.call(addresshGIHpTY, {from: accounts[0]});
		const uintJXFGK7q = await HungryHoodyXEgwRwe.totalSupply.call({from: accounts[2]});
		const uintopN5eUs = await HungryHoodyXEgwRwe.totalSupply.call({from: accounts[2]});

		assert.equal(uintJXFGK7q, BigInt("25000000000000000000"))
		assert.equal(uintSbl1AsP, BigInt("0"))
		assert.equal(uintmMIxPVb, BigInt("0"))
		assert.equal(uintopN5eUs, BigInt("25000000000000000000"))
		assert.equal(uintroXd2DN, BigInt("25000000000000000000"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyfGKMDW7 = await HungryHoody.new({from: accounts[2]});
		const addressLDVbjnG = accounts[1]
		const addressRyAIjtb = accounts[2]
		const uintQeANaEW = BigInt("1433")
		const uintS1jC7Wu = BigInt("548")
		const uintSYOTnNJ = BigInt("154")
		const addressX0g2gL9 = accounts[2]
		const uintqImStvv = BigInt("992")
		const addressO50HL2y = accounts[4]
		const addressKivai4Z = accounts[0]
		const uintMLo2OSj = await HungryHoodyfGKMDW7.totalSupply.call({from: accounts[0]});
		const uintTrNjbj = await HungryHoodyfGKMDW7.allowance.call(addressRyAIjtb, addressLDVbjnG, {from: accounts[0]});
		const uintHWaJLv5 = await HungryHoodyfGKMDW7.safeMul.call(uintS1jC7Wu, uintQeANaEW, {from: accounts[3]});
		const boolyFVUrdt = await HungryHoodyfGKMDW7.transfer.call(addressX0g2gL9, uintSYOTnNJ, {from: accounts[3]});
		const boolbPdvHjO = await HungryHoodyfGKMDW7.transferFrom.call(addressKivai4Z, addressO50HL2y, uintqImStvv, {from: accounts[1]});

		assert.equal(uintHWaJLv5, BigInt("785284"))
		assert.equal(uintMLo2OSj, BigInt("25000000000000000000"))
		assert.equal(uintTrNjbj, BigInt("0"))
		await expect(HungryHoodyfGKMDW7.transfer.call(addressX0g2gL9, uintSYOTnNJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodymuGaRxt = await HungryHoody.new({from: accounts[5]});
		const uintA3aSp4n = BigInt("1501")
		const uintbF48mvQ = BigInt("209")
		const uintVMyUjor = BigInt("1742")
		const addresscMzQOWy = accounts[3]
		const uintLY8E9j3 = BigInt("1049")
		const uintufLBUtS = BigInt("969")
		const addressjs0DUzc = accounts[3]
		const uint1W7dvv = await HungryHoodymuGaRxt.totalSupply.call({from: accounts[4]});
		const uintPV1P6mK = await HungryHoodymuGaRxt.safeAdd.call(uintbF48mvQ, uintA3aSp4n, {from: "0x0000000000000000000000000000000000000001"});
		const boolj1ZVVwn = await HungryHoodymuGaRxt.transfer.call(addresscMzQOWy, uintVMyUjor, {from: "0x0000000000000000000000000000000000000001"});
		const uintuRzMJ3f = await HungryHoodymuGaRxt.safeSub.call(uintufLBUtS, uintLY8E9j3, {from: accounts[1]});
		const uintLVSSCzV = await HungryHoodymuGaRxt.balanceOf.call(addressjs0DUzc, {from: accounts[1]});

		assert.equal(uint1W7dvv, BigInt("25000000000000000000"))
		assert.equal(uintPV1P6mK, BigInt("1710"))
		await expect(HungryHoodymuGaRxt.transfer.call(addresscMzQOWy, uintVMyUjor, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyqUvZ0XZ = await HungryHoody.new({from: accounts[1]});
		const uintAKHIUnC = BigInt("1400")
		const uintdwThmxQ = BigInt("409")
		const uintcrXquE3 = BigInt("816")
		const addresssbBAr2D = accounts[3]
		const uintdsUzrF = BigInt("1498")
		const addressUOUhBif = accounts[1]
		const addresszjphxQ3 = accounts[4]
		const addressxDvyhvW = accounts[1]
		const uintya6I9FS = await HungryHoodyqUvZ0XZ.safeAdd.call(uintdwThmxQ, uintAKHIUnC, {from: accounts[0]});
		const boolc4BtvtN = await HungryHoodyqUvZ0XZ.approve.call(addresssbBAr2D, uintcrXquE3, {from: accounts[0]});
		const boolQWh2Vj = await HungryHoodyqUvZ0XZ.transferFrom.call(addresszjphxQ3, addressUOUhBif, uintdsUzrF, {from: accounts[2]});
		const uintMC9a55t = await HungryHoodyqUvZ0XZ.balanceOf.call(addressxDvyhvW, {from: accounts[2]});

		assert.equal(boolc4BtvtN, true)
		assert.equal(uintya6I9FS, BigInt("1809"))
		await expect(HungryHoodyqUvZ0XZ.transferFrom.call(addresszjphxQ3, addressUOUhBif, uintdsUzrF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyI3EtT9M = await HungryHoody.new({from: accounts[0]});
		const uintD2HEPwy = BigInt("260")
		const uintd5d7aQP = BigInt("1034")
		const uintF9mBkq = BigInt("1983")
		const uinttrBtAhY = BigInt("1891")
		const uintBfhxe9 = BigInt("105")
		const addressMpK155U = accounts[3]
		const uintCdrxfs6 = await HungryHoodyI3EtT9M.safeDiv.call(uintd5d7aQP, uintD2HEPwy, {from: accounts[3]});
		const uintUl9P6r0 = await HungryHoodyI3EtT9M.totalSupply.call({from: accounts[3]});
		const uintx1oxV6C = await HungryHoodyI3EtT9M.safeSub.call(uinttrBtAhY, uintF9mBkq, {from: accounts[2]});
		const boolGZ0Lu6j = await HungryHoodyI3EtT9M.transfer.call(addressMpK155U, uintBfhxe9, {from: accounts[1]});

		assert.equal(uintCdrxfs6, BigInt("3"))
		assert.equal(uintUl9P6r0, BigInt("25000000000000000000"))
		await expect(HungryHoodyI3EtT9M.safeSub.call(uinttrBtAhY, uintF9mBkq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodycAlBBYi = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintteDWReo = BigInt("1716")
		const addresssLgeNVg = accounts[1]
		const addressHkhWwdA = accounts[5]
		const uintIxGQnws = BigInt("1600")
		const uintpw8b13q = BigInt("609")
		const uintGWVA5EF = BigInt("939")
		const addressHvHt345 = accounts[2]
		const uintnSI0UsZ = BigInt("2033")
		const uintfuVOrhV = BigInt("1075")
		const boolAJzerDt = await HungryHoodycAlBBYi.transferFrom.call(addressHkhWwdA, addresssLgeNVg, uintteDWReo, {from: accounts[0]});
		const uintOctU5ql = await HungryHoodycAlBBYi.safeDiv.call(uintpw8b13q, uintIxGQnws, {from: accounts[3]});
		const boolu0gZ3mJ = await HungryHoodycAlBBYi.transfer.call(addressHvHt345, uintGWVA5EF, {from: accounts[1]});
		const uintBQ5MSVK = await HungryHoodycAlBBYi.safeDiv.call(uintfuVOrhV, uintnSI0UsZ, {from: accounts[1]});
	});
})