const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeQUqIJtC = await Rootkit_finance.new({from: accounts[2]});
		const addresszncUWe = accounts[0]
		const addressUAJvjBV = accounts[1]
		const addressUG6wkEV = accounts[0]
		const uintAMjs6Ux = BigInt("1338")
		const addressj7BQG3 = "0x0000000000000000000000000000000000000001"
		const uintLC14ogO = BigInt("380")
		const addresslDvX4vz = accounts[5]
		const addressJH6JTCi = accounts[4]
		const uintDOY8BNC = await Rootkit_financeQUqIJtC.allowance.call(addressUAJvjBV, addresszncUWe, {from: accounts[1]});
		const uint256ebXP5lM = await Rootkit_financeQUqIJtC.balanceOf.call(addressUG6wkEV, {from: accounts[5]});
		const boolG14fHjn = await Rootkit_financeQUqIJtC.transfer.call(addressj7BQG3, uintAMjs6Ux, {from: accounts[5]});
		const boolgW6JdWJ = await Rootkit_financeQUqIJtC.transferFrom.call(addressJH6JTCi, addresslDvX4vz, uintLC14ogO, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolG14fHjn, false)
		assert.equal(boolgW6JdWJ, false)
		assert.equal(uint256ebXP5lM, BigInt("0"))
		assert.equal(uintDOY8BNC, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financemAaVu2c = await Rootkit_finance.new({from: accounts[1]});
		const uintEWQy96p = BigInt("1167")
		const addressks8nh7f = accounts[0]
		const addressw0hdg4A = "0x0000000000000000000000000000000000000001"
		const uintbRS2stL = BigInt("962")
		const addressGjz0I4 = accounts[5]
		const addressDKHfAW = "0x0000000000000000000000000000000000000001"
		const addressSCWyOUj = "0x0000000000000000000000000000000000000001"
		const addressf9ANJT8 = accounts[2]
		const uintG6WJcfY = BigInt("940")
		const addressxKTTL67 = accounts[5]
		const boolNEqzNFg = await Rootkit_financemAaVu2c.transferFrom.call(addressw0hdg4A, addressks8nh7f, uintEWQy96p, {from: accounts[2]});
		const boolzyU7AI2 = await Rootkit_financemAaVu2c.transferFrom.call(addressDKHfAW, addressGjz0I4, uintbRS2stL, {from: accounts[4]});
		const uintgBlkbF4 = await Rootkit_financemAaVu2c.allowance.call(addressf9ANJT8, addressSCWyOUj, {from: accounts[4]});
		const boolmbNMkJJ = await Rootkit_financemAaVu2c.approve.call(addressxKTTL67, uintG6WJcfY, {from: accounts[4]});

		assert.equal(boolNEqzNFg, false)
		assert.equal(boolmbNMkJJ, true)
		assert.equal(boolzyU7AI2, false)
		assert.equal(uintgBlkbF4, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeyhGh8E = await Rootkit_finance.new({from: accounts[4]});
		const uintVnsBA2h = BigInt("890")
		const addressaJp8Sl = accounts[1]
		const uintQhn0HXI = BigInt("297")
		const addressesxqIKx = accounts[0]
		const addresszQm0Cqs = accounts[4]
		const addressgjCnvDW = accounts[4]
		const uintqlutjxX = BigInt("341")
		const addressqMd0Ld = accounts[1]
		const boolvGVaI6R = await Rootkit_financeyhGh8E.transfer.call(addressaJp8Sl, uintVnsBA2h, {from: accounts[3]});
		const boolCJDopSd = await Rootkit_financeyhGh8E.transfer.call(addressesxqIKx, uintQhn0HXI, {from: accounts[1]});
		const uintItBWgcU = await Rootkit_financeyhGh8E.allowance.call(addressgjCnvDW, addresszQm0Cqs, {from: accounts[4]});
		const uint2569SB2Ko = await Rootkit_financeyhGh8E.totalSupply.call({from: accounts[3]});
		const boolhkHVslz = await Rootkit_financeyhGh8E.approve.call(addressqMd0Ld, uintqlutjxX, {from: accounts[1]});

		assert.equal(boolCJDopSd, false)
		assert.equal(boolhkHVslz, true)
		assert.equal(boolvGVaI6R, false)
		assert.equal(uint2569SB2Ko, BigInt("10000000000000000000000"))
		assert.equal(uintItBWgcU, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financefLwPwMe = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNO2LTX = BigInt("1076")
		const addresssJBj5QU = accounts[2]
		const addressSeqP1sY = accounts[3]
		const addressrD2b8Ht = accounts[0]
		const uint256BueB63H = await Rootkit_financefLwPwMe.totalSupply.call({from: accounts[1]});
		const bool4v2fba = await Rootkit_financefLwPwMe.transfer.call(addresssJBj5QU, uintNO2LTX, {from: accounts[0]});
		const uint256RJr0uOK = await Rootkit_financefLwPwMe.balanceOf.call(addressSeqP1sY, {from: accounts[4]});
		const uint256PSXpyj1 = await Rootkit_financefLwPwMe.balanceOf.call(addressrD2b8Ht, {from: accounts[4]});
	});
})