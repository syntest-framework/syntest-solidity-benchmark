const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceTQeTb1o = await Straight_Fire_Finance.new({from: accounts[3]});
		const uintZ5GbaSw = BigInt("118")
		const addressn4YN9M1 = accounts[4]
		const addressumeBiMF = accounts[0]
		const uintuquOQm = BigInt("1965")
		const addressC3uvWBI = accounts[2]
		const addressNbQXmmn = accounts[0]
		const addressMgcoP4i = accounts[2]
		const boolgoYZZh5 = await Straight_Fire_FinanceTQeTb1o.transferFrom.call(addressumeBiMF, addressn4YN9M1, uintZ5GbaSw, {from: accounts[4]});
		const uint256AIhkRhI = await Straight_Fire_FinanceTQeTb1o.totalSupply.call({from: accounts[1]});
		const boolO39kFdZ = await Straight_Fire_FinanceTQeTb1o.approve.call(addressC3uvWBI, uintuquOQm, {from: "0x0000000000000000000000000000000000000001"});
		const uintp3xiGJp = await Straight_Fire_FinanceTQeTb1o.allowance.call(addressMgcoP4i, addressNbQXmmn, {from: accounts[3]});
		const uint256pGjrLpC = await Straight_Fire_FinanceTQeTb1o.totalSupply.call({from: accounts[4]});

		assert.equal(boolO39kFdZ, true)
		assert.equal(boolgoYZZh5, false)
		assert.equal(uint256AIhkRhI, BigInt("80000000000000000000000"))
		assert.equal(uint256pGjrLpC, BigInt("80000000000000000000000"))
		assert.equal(uintp3xiGJp, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceiVup66S = await Straight_Fire_Finance.new({from: accounts[5]});
		const uintG2bHKZ4 = BigInt("2013")
		const addressAHtqo3t = accounts[4]
		const uintBd4r453 = BigInt("2014")
		const addressohtp2ug = accounts[1]
		const addressc2XNkC9 = accounts[2]
		const addresswn7xad2 = accounts[0]
		const uint0DxS76 = BigInt("1361")
		const addressynBdEMR = "0x0000000000000000000000000000000000000001"
		const addressIKcXWEy = accounts[1]
		const boolAlsHPe = await Straight_Fire_FinanceiVup66S.transfer.call(addressAHtqo3t, uintG2bHKZ4, {from: accounts[2]});
		const boolaU48Gix = await Straight_Fire_FinanceiVup66S.approve.call(addressohtp2ug, uintBd4r453, {from: accounts[3]});
		const uintVXWYSFb = await Straight_Fire_FinanceiVup66S.allowance.call(addresswn7xad2, addressc2XNkC9, {from: accounts[3]});
		const boolFJUa8f = await Straight_Fire_FinanceiVup66S.transferFrom.call(addressIKcXWEy, addressynBdEMR, uint0DxS76, {from: accounts[2]});

		assert.equal(boolAlsHPe, false)
		assert.equal(boolFJUa8f, false)
		assert.equal(boolaU48Gix, true)
		assert.equal(uintVXWYSFb, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceiF17gBc = await Straight_Fire_Finance.new({from: accounts[4]});
		const uintRnopqXw = BigInt("266")
		const addressgYimuFW = accounts[3]
		const addressPgj6cAO = accounts[2]
		const uintHmpLnFK = BigInt("1589")
		const addressZpM8hOO = accounts[4]
		const boolioxgU7B = await Straight_Fire_FinanceiF17gBc.transfer.call(addressgYimuFW, uintRnopqXw, {from: accounts[1]});
		const uint256eIow2us = await Straight_Fire_FinanceiF17gBc.totalSupply.call({from: accounts[3]});
		const uint256coU6U1 = await Straight_Fire_FinanceiF17gBc.balanceOf.call(addressPgj6cAO, {from: accounts[3]});
		const boolO7cuqM = await Straight_Fire_FinanceiF17gBc.approve.call(addressZpM8hOO, uintHmpLnFK, {from: accounts[4]});

		assert.equal(boolO7cuqM, true)
		assert.equal(boolioxgU7B, false)
		assert.equal(uint256coU6U1, BigInt("0"))
		assert.equal(uint256eIow2us, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceHC00cUt = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMk0tY7G = accounts[2]
		const uintx1eN0q = BigInt("1490")
		const addressdoXIVQ = accounts[1]
		const addresssTjP38 = accounts[4]
		const addressHSaMy7k = accounts[4]
		const addressvAJz61g = accounts[4]
		const uint256zt3P6R = await Straight_Fire_FinanceHC00cUt.balanceOf.call(addressMk0tY7G, {from: accounts[1]});
		const uint256p8OQq5 = await Straight_Fire_FinanceHC00cUt.totalSupply.call({from: accounts[4]});
		const boolwWfrP7f = await Straight_Fire_FinanceHC00cUt.transferFrom.call(addresssTjP38, addressdoXIVQ, uintx1eN0q, {from: accounts[2]});
		const uintUoWBzWC = await Straight_Fire_FinanceHC00cUt.allowance.call(addressvAJz61g, addressHSaMy7k, {from: accounts[2]});
		const uint256Z0btLsz = await Straight_Fire_FinanceHC00cUt.totalSupply.call({from: accounts[1]});
	});
})