const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3RH0xOvG = await Core_Fi_V3.new({from: accounts[2]});
		const uintjEmCpOh = BigInt("1152")
		const addressSEW8X3s = "0x0000000000000000000000000000000000000001"
		const addressRmzaO6A = "0x0000000000000000000000000000000000000001"
		const uintkNDrc2F = BigInt("1829")
		const addressB4hONKd = accounts[0]
		const uintQlzMpT9 = BigInt("1633")
		const addressvQARUt4 = "0x0000000000000000000000000000000000000001"
		const uintqB1I3zG = BigInt("439")
		const addressuUNWBHo = accounts[3]
		const addressgEF9W2p = accounts[5]
		const addressYs5YCDP = accounts[2]
		const boolGnsp9wF = await Core_Fi_V3RH0xOvG.transferFrom.call(addressRmzaO6A, addressSEW8X3s, uintjEmCpOh, {from: accounts[4]});
		const boolngZAhc7 = await Core_Fi_V3RH0xOvG.approve.call(addressB4hONKd, uintkNDrc2F, {from: accounts[1]});
		const boolObrYoO = await Core_Fi_V3RH0xOvG.approve.call(addressvQARUt4, uintQlzMpT9, {from: accounts[1]});
		const boolLPtIz3 = await Core_Fi_V3RH0xOvG.transfer.call(addressuUNWBHo, uintqB1I3zG, {from: "0x0000000000000000000000000000000000000001"});
		const uints1BdQCt = await Core_Fi_V3RH0xOvG.allowance.call(addressYs5YCDP, addressgEF9W2p, {from: accounts[4]});

		assert.equal(boolGnsp9wF, false)
		assert.equal(boolLPtIz3, false)
		assert.equal(boolObrYoO, true)
		assert.equal(boolngZAhc7, true)
		assert.equal(uints1BdQCt, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3E9Us9n7 = await Core_Fi_V3.new({from: accounts[2]});
		const addressTTN6x8U = "0x0000000000000000000000000000000000000001"
		const addressuqP3q0g = "0x0000000000000000000000000000000000000001"
		const uintKYmk2ry = BigInt("623")
		const addressU5dIHcj = accounts[5]
		const addresslooWA1f = accounts[4]
		const uintbtygJx = BigInt("1020")
		const addressbfGQp36 = accounts[1]
		const uintNZyo5ny = BigInt("370")
		const addresskEOemQH = accounts[0]
		const uint256N1MZyh = await Core_Fi_V3E9Us9n7.totalSupply.call({from: accounts[0]});
		const uintfRK4gVC = await Core_Fi_V3E9Us9n7.allowance.call(addressuqP3q0g, addressTTN6x8U, {from: accounts[4]});
		const boolV4Jqut2 = await Core_Fi_V3E9Us9n7.transfer.call(addressU5dIHcj, uintKYmk2ry, {from: accounts[0]});
		const uint256JuFdPHT = await Core_Fi_V3E9Us9n7.balanceOf.call(addresslooWA1f, {from: accounts[4]});
		const boolMYMB9st = await Core_Fi_V3E9Us9n7.transfer.call(addressbfGQp36, uintbtygJx, {from: accounts[0]});
		const boolh9VWJZY = await Core_Fi_V3E9Us9n7.approve.call(addresskEOemQH, uintNZyo5ny, {from: accounts[1]});

		assert.equal(boolMYMB9st, false)
		assert.equal(boolV4Jqut2, false)
		assert.equal(boolh9VWJZY, true)
		assert.equal(uint256JuFdPHT, BigInt("0"))
		assert.equal(uint256N1MZyh, BigInt("84000000000000000000000"))
		assert.equal(uintfRK4gVC, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3Q68eAa = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressjl9H0Nm = "0x0000000000000000000000000000000000000001"
		const uintgNjCpp = BigInt("231")
		const addresstapzXZx = accounts[2]
		const uintJZhiGcz = BigInt("1819")
		const addressX8REozT = accounts[3]
		const uintZkKTxnO = BigInt("1850")
		const addressk4VjAmp = accounts[3]
		const uintffj2kXr = BigInt("146")
		const addressCfP3sgC = accounts[0]
		const addressiaZr4uk = accounts[1]
		const uintFOsdBaW = BigInt("1321")
		const addressWTTWN1q = accounts[0]
		const uint256Cl2BIdD = await Core_Fi_V3Q68eAa.balanceOf.call(addressjl9H0Nm, {from: accounts[0]});
		const boolyTRUZkl = await Core_Fi_V3Q68eAa.transfer.call(addresstapzXZx, uintgNjCpp, {from: accounts[2]});
		const boolzkU0GJD = await Core_Fi_V3Q68eAa.approve.call(addressX8REozT, uintJZhiGcz, {from: accounts[3]});
		const bools3nWXe7 = await Core_Fi_V3Q68eAa.approve.call(addressk4VjAmp, uintZkKTxnO, {from: accounts[3]});
		const boolGWzV0o = await Core_Fi_V3Q68eAa.transferFrom.call(addressiaZr4uk, addressCfP3sgC, uintffj2kXr, {from: accounts[3]});
		const boolkfrV698 = await Core_Fi_V3Q68eAa.transfer.call(addressWTTWN1q, uintFOsdBaW, {from: accounts[4]});
	});
})