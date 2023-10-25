const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceSYnEdX5 = await Straight_Fire_Finance.new({from: accounts[0]});
		const uintyRLtQ6m = BigInt("1806")
		const addresstood3K0 = accounts[0]
		const addressfL7930N = accounts[3]
		const uintUrHgAsS = BigInt("471")
		const addressZIsx02q = accounts[4]
		const addressAc0agls = accounts[0]
		const uintJLFnUkw = BigInt("119")
		const addressAmG6dn = accounts[2]
		const addressGHGZfxH = accounts[3]
		const uintK7tL3OJ = BigInt("536")
		const addressj07lqrM = accounts[2]
		const addressQYGQaW = accounts[4]
		const boolb0KdoVP = await Straight_Fire_FinanceSYnEdX5.transferFrom.call(addressfL7930N, addresstood3K0, uintyRLtQ6m, {from: accounts[3]});
		const boolkzAkOe = await Straight_Fire_FinanceSYnEdX5.transferFrom.call(addressAc0agls, addressZIsx02q, uintUrHgAsS, {from: accounts[4]});
		const boolrFg7AW2 = await Straight_Fire_FinanceSYnEdX5.transferFrom.call(addressGHGZfxH, addressAmG6dn, uintJLFnUkw, {from: accounts[4]});
		const boolQDtDB1S = await Straight_Fire_FinanceSYnEdX5.transferFrom.call(addressQYGQaW, addressj07lqrM, uintK7tL3OJ, {from: accounts[0]});

		assert.equal(boolQDtDB1S, false)
		assert.equal(boolb0KdoVP, false)
		assert.equal(boolkzAkOe, false)
		assert.equal(boolrFg7AW2, false)
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceQTWJFKx = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintbcHy5JE = BigInt("51")
		const addressA2GXoh = accounts[1]
		const addressSMfiOnv = accounts[4]
		const addressbqlf3eL = accounts[2]
		const boolRviN2L3 = await Straight_Fire_FinanceQTWJFKx.transfer.call(addressA2GXoh, uintbcHy5JE, {from: accounts[0]});
		const uinttrXKne6 = await Straight_Fire_FinanceQTWJFKx.allowance.call(addressbqlf3eL, addressSMfiOnv, {from: accounts[1]});
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_Financeji4d3rp = await Straight_Fire_Finance.new({from: accounts[2]});
		const uintbZDWGBQ = BigInt("774")
		const addressJFWLf4F = accounts[4]
		const addressUKgV4uM = accounts[0]
		const addressCBpFpPC = accounts[4]
		const uintBsX7zB = BigInt("1766")
		const addressBeAl3dk = accounts[5]
		const uintYY2yhDA = BigInt("1177")
		const addressOAVQoHj = accounts[0]
		const addressUoHzbIl = accounts[2]
		const bool4CzDi0 = await Straight_Fire_Financeji4d3rp.approve.call(addressJFWLf4F, uintbZDWGBQ, {from: accounts[3]});
		const uintU6inaKH = await Straight_Fire_Financeji4d3rp.allowance.call(addressCBpFpPC, addressUKgV4uM, {from: accounts[4]});
		const booljjiDtkt = await Straight_Fire_Financeji4d3rp.approve.call(addressBeAl3dk, uintBsX7zB, {from: accounts[2]});
		const boolyaJpasq = await Straight_Fire_Financeji4d3rp.transferFrom.call(addressUoHzbIl, addressOAVQoHj, uintYY2yhDA, {from: accounts[4]});

		assert.equal(bool4CzDi0, true)
		assert.equal(booljjiDtkt, true)
		assert.equal(boolyaJpasq, false)
		assert.equal(uintU6inaKH, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceR6udAmp = await Straight_Fire_Finance.new({from: accounts[2]});
		const addressCHmI2u6 = accounts[0]
		const addressahgHeEp = accounts[3]
		const addresswh2YUdz = accounts[3]
		const uintgSlFmbs = BigInt("965")
		const addressE6UmWez = accounts[5]
		const uintPzWbgg = BigInt("624")
		const addressSf0OZZi = accounts[0]
		const addressTXzPFNH = accounts[1]
		const addressQ8WqLmv = accounts[3]
		const addressyWC6Nvw = accounts[5]
		const addressax8QtMC = accounts[0]
		const uintxjUNIzl = await Straight_Fire_FinanceR6udAmp.allowance.call(addressahgHeEp, addressCHmI2u6, {from: accounts[1]});
		const uint256vrHJanJ = await Straight_Fire_FinanceR6udAmp.balanceOf.call(addresswh2YUdz, {from: accounts[3]});
		const booluodgDHM = await Straight_Fire_FinanceR6udAmp.transfer.call(addressE6UmWez, uintgSlFmbs, {from: accounts[2]});
		const boolyUSxNbg = await Straight_Fire_FinanceR6udAmp.transferFrom.call(addressTXzPFNH, addressSf0OZZi, uintPzWbgg, {from: accounts[4]});
		const uintdo7NJYk = await Straight_Fire_FinanceR6udAmp.allowance.call(addressyWC6Nvw, addressQ8WqLmv, {from: accounts[2]});
		const uint256JR4RM50 = await Straight_Fire_FinanceR6udAmp.balanceOf.call(addressax8QtMC, {from: accounts[4]});

		assert.equal(booluodgDHM, true)
		assert.equal(boolyUSxNbg, false)
		assert.equal(uint256JR4RM50, BigInt("0"))
		assert.equal(uint256vrHJanJ, BigInt("0"))
		assert.equal(uintdo7NJYk, BigInt("0"))
		assert.equal(uintxjUNIzl, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceOuYHrQV = await Straight_Fire_Finance.new({from: accounts[0]});
		const addressDNwTqYT = accounts[1]
		const addressmqB9L0C = accounts[4]
		const addressOlLNVFH = accounts[4]
		const addressYtPYkx4 = accounts[1]
		const addressx60hRb9 = accounts[2]
		const addresscOi7oXz = accounts[0]
		const addressGAh24d = "0x0000000000000000000000000000000000000001"
		const uintdragH7Y = BigInt("1333")
		const addressSsu6HOu = "0x0000000000000000000000000000000000000001"
		const uintzkdA9Q0 = await Straight_Fire_FinanceOuYHrQV.allowance.call(addressmqB9L0C, addressDNwTqYT, {from: accounts[3]});
		const uinttiQ1dDN = await Straight_Fire_FinanceOuYHrQV.allowance.call(addressYtPYkx4, addressOlLNVFH, {from: accounts[3]});
		const uint256nstdr2u = await Straight_Fire_FinanceOuYHrQV.balanceOf.call(addressx60hRb9, {from: accounts[0]});
		const uintfTH1aFc = await Straight_Fire_FinanceOuYHrQV.allowance.call(addressGAh24d, addresscOi7oXz, {from: accounts[1]});
		const boolpFNQpUA = await Straight_Fire_FinanceOuYHrQV.transfer.call(addressSsu6HOu, uintdragH7Y, {from: accounts[4]});

		assert.equal(boolpFNQpUA, false)
		assert.equal(uint256nstdr2u, BigInt("0"))
		assert.equal(uintfTH1aFc, BigInt("0"))
		assert.equal(uinttiQ1dDN, BigInt("0"))
		assert.equal(uintzkdA9Q0, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceR6udAmp = await Straight_Fire_Finance.new({from: accounts[2]});
		const addresstwOlLX7 = accounts[0]
		const addressJE4yi8y = accounts[4]
		const uintTUObuxn = BigInt("752")
		const addressArKwHcD = accounts[0]
		const addresso9vslS6 = accounts[3]
		const uinth82BTpc = BigInt("965")
		const addressEbEWwbT = accounts[5]
		const uintSnZZtwa = BigInt("624")
		const addresszCqj4gB = accounts[0]
		const addressXMGivry = accounts[1]
		const addressHERKlM3 = accounts[3]
		const addresso8zmK6u = accounts[5]
		const addressP0pODTK = accounts[0]
		const uintxjUNIzl = await Straight_Fire_FinanceR6udAmp.allowance.call(addressJE4yi8y, addresstwOlLX7, {from: accounts[1]});
		const boolcanrlh = await Straight_Fire_FinanceR6udAmp.transfer.call(addressArKwHcD, uintTUObuxn, {from: accounts[0]});
		const uint256vrHJanJ = await Straight_Fire_FinanceR6udAmp.balanceOf.call(addresso9vslS6, {from: accounts[3]});
		const booluodgDHM = await Straight_Fire_FinanceR6udAmp.transfer.call(addressEbEWwbT, uinth82BTpc, {from: accounts[2]});
		const boolyUSxNbg = await Straight_Fire_FinanceR6udAmp.transferFrom.call(addressXMGivry, addresszCqj4gB, uintSnZZtwa, {from: accounts[4]});
		const uintdo7NJYk = await Straight_Fire_FinanceR6udAmp.allowance.call(addresso8zmK6u, addressHERKlM3, {from: accounts[2]});
		const uint256JR4RM50 = await Straight_Fire_FinanceR6udAmp.balanceOf.call(addressP0pODTK, {from: accounts[4]});
		const uint256LH7uEsL = await Straight_Fire_FinanceR6udAmp.totalSupply.call({from: accounts[4]});

		assert.equal(boolcanrlh, false)
		assert.equal(booluodgDHM, true)
		assert.equal(boolyUSxNbg, false)
		assert.equal(uint256JR4RM50, BigInt("0"))
		assert.equal(uint256LH7uEsL, BigInt("80000000000000000000000"))
		assert.equal(uint256vrHJanJ, BigInt("0"))
		assert.equal(uintdo7NJYk, BigInt("0"))
		assert.equal(uintxjUNIzl, BigInt("0"))
	});
})