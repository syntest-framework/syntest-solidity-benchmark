const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financehGbq6TH = await Rootkit_finance.new({from: accounts[5]});
		const uintmHneJf = BigInt("916")
		const addressggZn09b = accounts[1]
		const addressSw0WX0S = accounts[2]
		const addressegcirWJ = accounts[2]
		const addresspmbKJId = "0x0000000000000000000000000000000000000001"
		const boolwcLx785 = await Rootkit_financehGbq6TH.transferFrom.call(addressSw0WX0S, addressggZn09b, uintmHneJf, {from: accounts[5]});
		const uint256nyj7we = await Rootkit_financehGbq6TH.totalSupply.call({from: accounts[1]});
		const uintshFyv4x = await Rootkit_financehGbq6TH.allowance.call(addresspmbKJId, addressegcirWJ, {from: accounts[1]});

		assert.equal(boolwcLx785, false)
		assert.equal(uint256nyj7we, BigInt("10000000000000000000000"))
		assert.equal(uintshFyv4x, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeGy8Z7uG = await Rootkit_finance.new({from: accounts[2]});
		const uintGidUop = BigInt("1777")
		const addresszVsVzV1 = accounts[1]
		const uintUPTgOG = BigInt("1589")
		const addressKGRWb2p = "0x0000000000000000000000000000000000000001"
		const booluIaFew7 = await Rootkit_financeGy8Z7uG.approve.call(addresszVsVzV1, uintGidUop, {from: accounts[3]});
		const boolwUmc5OR = await Rootkit_financeGy8Z7uG.transfer.call(addressKGRWb2p, uintUPTgOG, {from: accounts[1]});
		const uint256nkuhKx = await Rootkit_financeGy8Z7uG.totalSupply.call({from: accounts[2]});

		assert.equal(booluIaFew7, true)
		assert.equal(boolwUmc5OR, false)
		assert.equal(uint256nkuhKx, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeo9JYV3 = await Rootkit_finance.new({from: accounts[5]});
		const addressq1WsbVD = accounts[4]
		const addressgaKtqr = accounts[4]
		const addressghxAn30 = accounts[4]
		const uintVP4U05D = BigInt("1099")
		const addresso6s9LaZ = accounts[4]
		const addressPyW9lMg = "0x0000000000000000000000000000000000000001"
		const addressCaxxbkD = accounts[5]
		const addressLglUWb = "0x0000000000000000000000000000000000000001"
		const uint2569gz0oS = await Rootkit_financeo9JYV3.balanceOf.call(addressq1WsbVD, {from: accounts[5]});
		const uintsJrIH5k = await Rootkit_financeo9JYV3.allowance.call(addressghxAn30, addressgaKtqr, {from: accounts[3]});
		const boolPs9wZeM = await Rootkit_financeo9JYV3.approve.call(addresso6s9LaZ, uintVP4U05D, {from: accounts[2]});
		const uintLSzu7tD = await Rootkit_financeo9JYV3.allowance.call(addressCaxxbkD, addressPyW9lMg, {from: accounts[1]});
		const uint256WrTrRHM = await Rootkit_financeo9JYV3.balanceOf.call(addressLglUWb, {from: accounts[0]});

		assert.equal(boolPs9wZeM, true)
		assert.equal(uint2569gz0oS, BigInt("0"))
		assert.equal(uint256WrTrRHM, BigInt("0"))
		assert.equal(uintLSzu7tD, BigInt("0"))
		assert.equal(uintsJrIH5k, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financePAgIUZz = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDmdeI2n = BigInt("1144")
		const addressXtWjfQW = accounts[4]
		const uint2568vEAaY = await Rootkit_financePAgIUZz.totalSupply.call({from: accounts[3]});
		const boolj7CjFDk = await Rootkit_financePAgIUZz.transfer.call(addressXtWjfQW, uintDmdeI2n, {from: accounts[1]});
		const uint256FYjrtLE = await Rootkit_financePAgIUZz.totalSupply.call({from: accounts[4]});
	});
})