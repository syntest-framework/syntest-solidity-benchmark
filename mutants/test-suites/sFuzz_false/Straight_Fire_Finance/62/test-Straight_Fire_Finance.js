const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceEoGpeGE = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintqWivtM = BigInt("14")
		const addressWmNS8CB = accounts[2]
		const addressASs3F5J = accounts[3]
		const addressW6up6KE = accounts[5]
		const uintHQWafpl = BigInt("1867")
		const addressHt5p9V4 = accounts[4]
		const addressXwDo9Rc = accounts[3]
		const uint256xfbTbN = await Straight_Fire_FinanceEoGpeGE.totalSupply.call({from: accounts[2]});
		const boolMOr0S4M = await Straight_Fire_FinanceEoGpeGE.transfer.call(addressWmNS8CB, uintqWivtM, {from: "0x0000000000000000000000000000000000000001"});
		const uintIKdiDYh = await Straight_Fire_FinanceEoGpeGE.allowance.call(addressW6up6KE, addressASs3F5J, {from: accounts[1]});
		const boolrGe8nZh = await Straight_Fire_FinanceEoGpeGE.transferFrom.call(addressXwDo9Rc, addressHt5p9V4, uintHQWafpl, {from: accounts[2]});

		assert.equal(boolMOr0S4M, false)
		assert.equal(boolrGe8nZh, false)
		assert.equal(uint256xfbTbN, BigInt("80000000000000000000000"))
		assert.equal(uintIKdiDYh, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceHAsunuf = await Straight_Fire_Finance.new({from: accounts[3]});
		const addressz33cBkF = accounts[3]
		const uintvnZS3O = BigInt("1868")
		const addressjoJx79P = accounts[1]
		const addresszMeAowf = accounts[1]
		const uint256pdJSNi0 = await Straight_Fire_FinanceHAsunuf.balanceOf.call(addressz33cBkF, {from: accounts[5]});
		const boolzfTnPn = await Straight_Fire_FinanceHAsunuf.transferFrom.call(addresszMeAowf, addressjoJx79P, uintvnZS3O, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolzfTnPn, false)
		assert.equal(uint256pdJSNi0, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financef63J6lv = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressiel2TTx = accounts[1]
		const addressHTt3UKs = accounts[1]
		const addressULwnWSJ = accounts[2]
		const uintjpV6VCw = BigInt("943")
		const addressFrXq49 = accounts[4]
		const addressCAJteby = accounts[2]
		const uint256oWiJOVV = await Straight_Fire_Financef63J6lv.balanceOf.call(addressiel2TTx, {from: accounts[1]});
		const uintS8eAJh = await Straight_Fire_Financef63J6lv.allowance.call(addressULwnWSJ, addressHTt3UKs, {from: accounts[3]});
		const uint256X4o7uNy = await Straight_Fire_Financef63J6lv.totalSupply.call({from: accounts[0]});
		const uint256g4HnqXS = await Straight_Fire_Financef63J6lv.totalSupply.call({from: accounts[2]});
		const boolJq9FR2s = await Straight_Fire_Financef63J6lv.transferFrom.call(addressCAJteby, addressFrXq49, uintjpV6VCw, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceptSJAK = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintu1pg5mi = BigInt("1992")
		const addressoM9wpQW = accounts[5]
		const uintXoYUlAx = BigInt("1085")
		const addressz7HEpTM = accounts[4]
		const booljrhk46K = await Straight_Fire_FinanceptSJAK.approve.call(addressoM9wpQW, uintu1pg5mi, {from: accounts[0]});
		const uint256TuF6Ih = await Straight_Fire_FinanceptSJAK.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolkYkhrF = await Straight_Fire_FinanceptSJAK.transfer.call(addressz7HEpTM, uintXoYUlAx, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booljrhk46K, true)
		assert.equal(boolkYkhrF, false)
		assert.equal(uint256TuF6Ih, BigInt("80000000000000000000000"))
	});
})