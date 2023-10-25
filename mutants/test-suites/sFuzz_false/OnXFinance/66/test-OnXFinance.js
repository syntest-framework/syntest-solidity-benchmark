const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringHPoBEmA = "iv9xPQxp90Ddg8ofXdecykMFwXYS2cx80bdRJBxUgUun59YX5Tj13UukA8kOae2nu6MX6PgvO1hEIpNROf"
		const stringlZcOntF = "9CxTejlYBDyTA8hGyILm3rf2x2Hxt6i7PXz84YXHjR6pL2P"
		const uintJPYDbbV = BigInt("213")
		const OnXFinances0TVXJW = await OnXFinance.new(stringHPoBEmA, stringlZcOntF, uintJPYDbbV, {from: accounts[1]});
		const uintiohimDU = BigInt("875")
		const addressVCOFcsm = accounts[0]
		const addressE9dJyll = accounts[4]
		const addressEgHcH7j = accounts[0]
		const uintuuLWoc0 = BigInt("1597")
		const addressL4Pzifo = accounts[3]
		const boolpCDM8rC = await OnXFinances0TVXJW.transfer.call(addressVCOFcsm, uintiohimDU, {from: accounts[1]});
		const uint8jdqe8Pr = await OnXFinances0TVXJW.decimals.call({from: accounts[4]});
		const uintXTtRZPo = await OnXFinances0TVXJW.allowance.call(addressEgHcH7j, addressE9dJyll, {from: accounts[5]});
//		const boolDSpFPrb = await OnXFinances0TVXJW.approveAndCall.call(addressL4Pzifo, uintuuLWoc0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolpCDM8rC, true)
		assert.equal(uint8jdqe8Pr, BigInt("18"))
		assert.equal(uintXTtRZPo, BigInt("0"))
		await expect(OnXFinances0TVXJW.approveAndCall.call(addressL4Pzifo, uintuuLWoc0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringZGc6q6F = "PD2ut5DQ2BLGmnjv9Tc4AHhB4NqNRsn2Oukbx4bmQsnAsW9y1ycEEIpJqT54s2hwwTMpmNt1GD241MQ4xRMAh1wah2B8"
		const stringfME6dUg = "3HIkHjcujttyTFnxv9XmGC7OEblwRUsY9xxse9tI35ipwTxLd1611xLvjRgk3vglb"
		const uintInmlbgW = BigInt("22")
		const OnXFinanceuNpSd2i = await OnXFinance.new(stringZGc6q6F, stringfME6dUg, uintInmlbgW, {from: "0x0000000000000000000000000000000000000001"});
		const uintKypKDXv = BigInt("1978")
		const addressEmvNKec = accounts[2]
		const addressoTYhLa1 = accounts[3]
		const boolGhJJlDc = await OnXFinanceuNpSd2i.approveAndCall.call(addressEmvNKec, uintKypKDXv, {from: accounts[0]});
		const uint8oRya5j1 = await OnXFinanceuNpSd2i.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTXebA2q = await OnXFinanceuNpSd2i.transferownership.call(addressoTYhLa1, {from: accounts[3]});
	});

	it('test for OnXFinance', async () => {
		const stringufHIjHY = "Ywb5CM"
		const stringJCmXXoV = "YsQwkqrnqx9MwAddpvlP0XYrWTztzpPaxRJjrH"
		const uintNdczX2Z = BigInt("769")
		const OnXFinancebLDntOP = await OnXFinance.new(stringufHIjHY, stringJCmXXoV, uintNdczX2Z, {from: accounts[5]});
		const uintmnj3x2 = BigInt("915")
		const addresslpNJRaE = accounts[5]
		const uintjupc6f = BigInt("440")
		const addressYjUlriM = "0x0000000000000000000000000000000000000001"
		const uintKwfK57 = BigInt("24")
		const addresspO5573 = accounts[5]
		const uintRaWPdOS = BigInt("825")
		const addressoquzn7U = accounts[4]
//		const boolx47ZfZ = await OnXFinancebLDntOP.decreaseAllowance.call(addresslpNJRaE, uintmnj3x2, {from: "0x0000000000000000000000000000000000000001"});
//		const booluK2jhfB = await OnXFinancebLDntOP.approveAndCall.call(addressYjUlriM, uintjupc6f, {from: accounts[1]});
//		const boolIjSOWxE = await OnXFinancebLDntOP.approveAndCall.call(addresspO5573, uintKwfK57, {from: accounts[4]});
//		const uintVrCuAT8 = await OnXFinancebLDntOP.totalSupply.call({from: accounts[0]});
//		const boolk2VJo0j = await OnXFinancebLDntOP.transfer.call(addressoquzn7U, uintRaWPdOS, {from: accounts[4]});

		await expect(OnXFinancebLDntOP.decreaseAllowance.call(addresslpNJRaE, uintmnj3x2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringZMInZ5s = "XB4ZiONzRLdQzJEzLT6l1BBv3oqXulebLB2VYC8lX3BzLVXAwOuHP2UtJnkz9qH7VsiIikbQb0z27UMY1x9Xc57MsCaGzy"
		const stringZSFaemi = "OlOeJNq"
		const uint2mJ6Ek = BigInt("1412")
		const OnXFinanceFEIuPME = await OnXFinance.new(stringZMInZ5s, stringZSFaemi, uint2mJ6Ek, {from: accounts[2]});
		const uintsUmqlU = BigInt("935")
		const addresseRz9JuA = accounts[3]
		const addressVSi8M5b = accounts[1]
		const boolH8M3Af1 = await OnXFinanceFEIuPME.approveAndCall.call(addresseRz9JuA, uintsUmqlU, {from: accounts[2]});
		const uintvnVbbj7 = await OnXFinanceFEIuPME.balanceOf.call(addressVSi8M5b, {from: accounts[3]});

		assert.equal(boolH8M3Af1, true)
		assert.equal(uintvnVbbj7, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringtHfMh9s = "lrtnnRvmAp9rrnncvWyWWmt9wjalepyaQRGIpn18VP2rTNvmvUMnFHz76OfzibIbD6RBwBtd"
		const string8MrAbo = "jt7Mr4UxDxAYDQLx48"
		const uintiOz4mt1 = BigInt("1765")
		const OnXFinancesEqOSQI = await OnXFinance.new(stringtHfMh9s, string8MrAbo, uintiOz4mt1, {from: accounts[2]});
		const uintrgZBGVE = BigInt("1188")
		const addressXFMkrG = accounts[5]
		const stringrPzsfFT = await OnXFinancesEqOSQI.name.call({from: accounts[4]});
//		const booltNEUtTG = await OnXFinancesEqOSQI.transfer.call(addressXFMkrG, uintrgZBGVE, {from: accounts[0]});

		assert.equal(stringrPzsfFT, "lrtnnRvmAp9rrnncvWyWWmt9wjalepyaQRGIpn18VP2rTNvmvUMnFHz76OfzibIbD6RBwBtd")
		await expect(OnXFinancesEqOSQI.transfer.call(addressXFMkrG, uintrgZBGVE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringCVnAvdx = "R8Ap"
		const stringdZucSQn = "XIA4KEl8BI5BUnGI2CuifKGRXlsWrBl7sd9t5WRuEkgHa"
		const uintrYPwh2d = BigInt("208")
		const OnXFinancekhBrTEC = await OnXFinance.new(stringCVnAvdx, stringdZucSQn, uintrYPwh2d, {from: accounts[4]});
		const addressaZOMJJ0 = accounts[5]
		const uintIxJs10E = BigInt("1223")
		const addresssnaMc7A = accounts[1]
		const addressoQEUBxf = accounts[0]
//		const booltYmWGzl = await OnXFinancekhBrTEC.transferownership.call(addressaZOMJJ0, {from: accounts[3]});
//		const bool9ehx9I = await OnXFinancekhBrTEC.transferFrom.call(addressoQEUBxf, addresssnaMc7A, uintIxJs10E, {from: accounts[3]});
//		const stringbfJ6IOZ = await OnXFinancekhBrTEC.symbol.call({from: accounts[4]});
//		const stringdYKIACP = await OnXFinancekhBrTEC.name.call({from: accounts[4]});

		await expect(OnXFinancekhBrTEC.transferownership.call(addressaZOMJJ0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringHPoBEmA = "iv9xPQxp90Ddg8ofXdecykMFwXYS2cx80bdRJBxUgUun59YX5Tj13UukA8kOae2nu6MX6PgvO1hEIpNROf"
		const stringlZcOntF = "9CxTejlYBDyTA8hGyILm3rf2x2Hxt6i7PXz84YXHjR6pL2P"
		const uinthdkGCDU = BigInt("213")
		const OnXFinances0TVXJW = await OnXFinance.new(stringHPoBEmA, stringlZcOntF, uinthdkGCDU, {from: accounts[1]});
		const uintkTWm1KS = BigInt("875")
		const addressHCQZIEq = accounts[0]
		const addressWRRMwLI = accounts[4]
		const addressLIxniY = accounts[0]
		const uintxEmEpIF = BigInt("120")
		const addressc4ebkic = accounts[1]
		const uintNPGf8sm = BigInt("1597")
		const addressmEay3Mc = accounts[3]
		const boolpCDM8rC = await OnXFinances0TVXJW.transfer.call(addressHCQZIEq, uintkTWm1KS, {from: accounts[1]});
		const uint8jdqe8Pr = await OnXFinances0TVXJW.decimals.call({from: accounts[4]});
		const uintXTtRZPo = await OnXFinances0TVXJW.allowance.call(addressLIxniY, addressWRRMwLI, {from: accounts[5]});
		const boolTqE4UDr = await OnXFinances0TVXJW.approve.call(addressc4ebkic, uintxEmEpIF, {from: accounts[0]});
//		const boolDSpFPrb = await OnXFinances0TVXJW.approveAndCall.call(addressmEay3Mc, uintNPGf8sm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolTqE4UDr, true)
		assert.equal(boolpCDM8rC, true)
		assert.equal(uint8jdqe8Pr, BigInt("18"))
		assert.equal(uintXTtRZPo, BigInt("0"))
		await expect(OnXFinances0TVXJW.approveAndCall.call(addressmEay3Mc, uintNPGf8sm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringZ2LMdiT = "2vrWkrPLQzTTe2JxbYvDbZq0LBiiHuYmBsWJqT98cXL1PQwRjtNTTtjadfQyw5bti7tVT"
		const stringyM6zrpc = "uRRWjHYoVuo1TGBZL9rlAaFfTdNnBzA69tWYyyFTLNg0wzKpBLWc0qJQTX9jtr2AdXq5XGyxJxHm"
		const uintRS6zUrT = BigInt("147")
		const OnXFinancezXApYM = await OnXFinance.new(stringZ2LMdiT, stringyM6zrpc, uintRS6zUrT, {from: accounts[0]});
		const uints0KN56C = BigInt("120")
		const addressb1GkRwd = accounts[1]
		const uintbEMAe3e = BigInt("0")
		const addressENy7OIZ = "0x0000000000000000000000000000000000000001"
		const uintM8u80wk = BigInt("1874")
		const addressLW5P00t = accounts[3]
		const boolZ33wP3l = await OnXFinancezXApYM.approveAndCall.call(addressb1GkRwd, uints0KN56C, {from: accounts[0]});
		const boolSHRQGV4 = await OnXFinancezXApYM.transfer.call(addressENy7OIZ, uintbEMAe3e, {from: "0x0000000000000000000000000000000000000001"});
//		const boolXLX4nON = await OnXFinancezXApYM.transfer.call(addressLW5P00t, uintM8u80wk, {from: accounts[3]});

		assert.equal(boolSHRQGV4, true)
		assert.equal(boolZ33wP3l, true)
		await expect(OnXFinancezXApYM.transfer.call(addressLW5P00t, uintM8u80wk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringZ2LMdiT = "2vrWkrPLQzTTe2JxbYvDbZq0LBiiHuYmBsWJqT98cXL1PQwRjtNTTtjadfQyw5bti7tVT"
		const stringyM6zrpc = "uRRWjHYoVuo1TGBZL9rlAaFfTdNnBzA69tWYyyFTLNg0wzKpBLWc0qJQTX9jtr2AdXq5XGyxJxHm"
		const uintyP9C7H4 = BigInt("147")
		const OnXFinancezXApYM = await OnXFinance.new(stringZ2LMdiT, stringyM6zrpc, uintyP9C7H4, {from: accounts[0]});
		const uintMY8MjfC = BigInt("0")
		const addressvf4P4j2 = accounts[1]
		const uintE3hyJdL = BigInt("141")
		const addresswCly3sX = accounts[3]
		const boolZ33wP3l = await OnXFinancezXApYM.approveAndCall.call(addressvf4P4j2, uintMY8MjfC, {from: accounts[0]});
		const boolWTulEJB = await OnXFinancezXApYM.approve.call(addresswCly3sX, uintE3hyJdL, {from: accounts[0]});

		assert.equal(boolWTulEJB, true)
		assert.equal(boolZ33wP3l, true)
	});
})