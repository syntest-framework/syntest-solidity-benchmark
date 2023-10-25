const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financef0YcKgu = await Rootkit_finance.new({from: accounts[1]});
		const uintLG90dY8 = BigInt("1994")
		const addressRwLUCwS = accounts[1]
		const uintb6iX7k = BigInt("1961")
		const addressyAtVL1t = accounts[1]
		const uintPBrJpp6 = BigInt("276")
		const addressOaySmES = accounts[0]
		const addressX3MzVJ = accounts[0]
		const addressLJyMHeZ = accounts[1]
		const boolEYvfZhq = await Rootkit_financef0YcKgu.approve.call(addressRwLUCwS, uintLG90dY8, {from: accounts[3]});
		const boolQPOnd16 = await Rootkit_financef0YcKgu.transfer.call(addressyAtVL1t, uintb6iX7k, {from: "0x0000000000000000000000000000000000000001"});
		const boolfeSBd4 = await Rootkit_financef0YcKgu.transfer.call(addressOaySmES, uintPBrJpp6, {from: "0x0000000000000000000000000000000000000001"});
		const uintDPROzIn = await Rootkit_financef0YcKgu.allowance.call(addressLJyMHeZ, addressX3MzVJ, {from: accounts[0]});

		assert.equal(boolEYvfZhq, true)
		assert.equal(boolQPOnd16, false)
		assert.equal(boolfeSBd4, false)
		assert.equal(uintDPROzIn, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeMsUctWR = await Rootkit_finance.new({from: accounts[4]});
		const uintSJaPU75 = BigInt("1968")
		const addresshNVVkLu = accounts[0]
		const addressUdRdX4 = accounts[1]
		const uintXok2DBP = BigInt("28")
		const addressg4vKkC6 = accounts[2]
		const addresszNYwsEW = accounts[0]
		const uintYzBivcM = BigInt("1716")
		const addressWIox8DH = accounts[5]
		const addressevuN1v0 = "0x0000000000000000000000000000000000000001"
		const uintmF6N9zK = BigInt("1277")
		const addressuBGxM6J = accounts[1]
		const addressJeFypOl = accounts[1]
		const addressQDTaZay = accounts[0]
		const boolOpvdibL = await Rootkit_financeMsUctWR.transferFrom.call(addressUdRdX4, addresshNVVkLu, uintSJaPU75, {from: "0x0000000000000000000000000000000000000001"});
		const boolguCWEON = await Rootkit_financeMsUctWR.transferFrom.call(addresszNYwsEW, addressg4vKkC6, uintXok2DBP, {from: accounts[3]});
		const boolDio3xjl = await Rootkit_financeMsUctWR.transferFrom.call(addressevuN1v0, addressWIox8DH, uintYzBivcM, {from: accounts[4]});
		const boolIK3PRax = await Rootkit_financeMsUctWR.transfer.call(addressuBGxM6J, uintmF6N9zK, {from: accounts[4]});
		const uintP54Ly7T = await Rootkit_financeMsUctWR.allowance.call(addressQDTaZay, addressJeFypOl, {from: accounts[0]});

		assert.equal(boolDio3xjl, false)
		assert.equal(boolIK3PRax, true)
		assert.equal(boolOpvdibL, false)
		assert.equal(boolguCWEON, false)
		assert.equal(uintP54Ly7T, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financessdGujF = await Rootkit_finance.new({from: accounts[0]});
		const uintWq1kLR9 = BigInt("1818")
		const addressVYVtLR = accounts[1]
		const uintaHKnL9i = BigInt("495")
		const addressdGh1WKX = accounts[3]
		const boolNTk9Co = await Rootkit_financessdGujF.transfer.call(addressVYVtLR, uintWq1kLR9, {from: accounts[4]});
		const uint256UjfPvn = await Rootkit_financessdGujF.totalSupply.call({from: accounts[1]});
		const boolk2wAVbR = await Rootkit_financessdGujF.transfer.call(addressdGh1WKX, uintaHKnL9i, {from: accounts[4]});

		assert.equal(boolNTk9Co, false)
		assert.equal(boolk2wAVbR, false)
		assert.equal(uint256UjfPvn, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeFsPITz0 = await Rootkit_finance.new({from: accounts[4]});
		const uintHCxyaQx = BigInt("554")
		const addresslRCt3AH = accounts[5]
		const addressroZunSz = accounts[4]
		const addressvsEVuli = accounts[3]
		const addresse3y80GX = accounts[2]
		const addressBBTSBGe = accounts[1]
		const addressCPd4P1u = accounts[3]
		const boolS9QjVZ0 = await Rootkit_financeFsPITz0.transferFrom.call(addressroZunSz, addresslRCt3AH, uintHCxyaQx, {from: accounts[3]});
		const uintYTLJetU = await Rootkit_financeFsPITz0.allowance.call(addresse3y80GX, addressvsEVuli, {from: accounts[4]});
		const uint256xp8GCJ = await Rootkit_financeFsPITz0.balanceOf.call(addressBBTSBGe, {from: accounts[1]});
		const uint256G3UzpX5 = await Rootkit_financeFsPITz0.balanceOf.call(addressCPd4P1u, {from: accounts[0]});
		const uint256zKaFhnK = await Rootkit_financeFsPITz0.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolS9QjVZ0, false)
		assert.equal(uint256G3UzpX5, BigInt("0"))
		assert.equal(uint256xp8GCJ, BigInt("0"))
		assert.equal(uint256zKaFhnK, BigInt("10000000000000000000000"))
		assert.equal(uintYTLJetU, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeqVduLKp = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintAGwVNC9 = BigInt("1802")
		const addressMN3Y6YY = accounts[4]
		const addressRfSeAh = accounts[3]
		const uintAI6nsut = BigInt("1912")
		const addressM3hOt91 = accounts[2]
		const boolX4EsANr = await Rootkit_financeqVduLKp.approve.call(addressMN3Y6YY, uintAGwVNC9, {from: accounts[3]});
		const uint256eH4rscE = await Rootkit_financeqVduLKp.balanceOf.call(addressRfSeAh, {from: accounts[4]});
		const boolHud7r5f = await Rootkit_financeqVduLKp.transfer.call(addressM3hOt91, uintAI6nsut, {from: accounts[1]});
		const uint256Es4p6aE = await Rootkit_financeqVduLKp.totalSupply.call({from: accounts[4]});
	});
})