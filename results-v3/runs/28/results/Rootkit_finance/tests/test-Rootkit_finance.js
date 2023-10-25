const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeNYa6pgV = await Rootkit_finance.new({from: accounts[4]});
		const uintjnU7VSI = BigInt("1864")
		const addressA7b3NPY = accounts[3]
		const uintiyuQn9p = BigInt("1070")
		const addressTf4xK9g = accounts[1]
		const uintcUfWjsG = BigInt("1863")
		const addressht0nH6P = accounts[4]
		const addresszSHOKr = accounts[1]
		const uintLeQg3TA = BigInt("416")
		const addresspUBHOIZ = accounts[4]
		const addressago44lh = accounts[5]
		const boolR5sq4eX = await Rootkit_financeNYa6pgV.approve.call(addressA7b3NPY, uintjnU7VSI, {from: accounts[2]});
		const boolEtBt5o0 = await Rootkit_financeNYa6pgV.transfer.call(addressTf4xK9g, uintiyuQn9p, {from: "0x0000000000000000000000000000000000000001"});
		const boollq9FR1Z = await Rootkit_financeNYa6pgV.transferFrom.call(addresszSHOKr, addressht0nH6P, uintcUfWjsG, {from: accounts[1]});
		const boola8S0Ei4 = await Rootkit_financeNYa6pgV.transfer.call(addresspUBHOIZ, uintLeQg3TA, {from: accounts[0]});
		const uint256SLIxdpS = await Rootkit_financeNYa6pgV.balanceOf.call(addressago44lh, {from: accounts[3]});

		assert.equal(boolEtBt5o0, false)
		assert.equal(boolR5sq4eX, true)
		assert.equal(boola8S0Ei4, false)
		assert.equal(boollq9FR1Z, false)
		assert.equal(uint256SLIxdpS, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeCBGS9Pf = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressR2DI09G = accounts[4]
		const uintyocGL5j = BigInt("158")
		const addressgq00so1 = accounts[2]
		const uintKgtzpW = BigInt("138")
		const addressKMAwDHn = accounts[0]
		const addressdDHm6lk = accounts[0]
		const addressub3aBr = accounts[2]
		const uint256EKbELd = await Rootkit_financeCBGS9Pf.balanceOf.call(addressR2DI09G, {from: accounts[2]});
		const boolyYFtThf = await Rootkit_financeCBGS9Pf.transfer.call(addressgq00so1, uintyocGL5j, {from: accounts[3]});
		const boolUnqCQcF = await Rootkit_financeCBGS9Pf.transferFrom.call(addressdDHm6lk, addressKMAwDHn, uintKgtzpW, {from: accounts[3]});
		const uint256FcM38ph = await Rootkit_financeCBGS9Pf.balanceOf.call(addressub3aBr, {from: accounts[2]});
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeDeazIEE = await Rootkit_finance.new({from: accounts[3]});
		const addresstcf3mPs = accounts[1]
		const uintVbrcs4A = BigInt("1185")
		const addressxBx1CpO = "0x0000000000000000000000000000000000000001"
		const uint256hVrr3GU = await Rootkit_financeDeazIEE.balanceOf.call(addresstcf3mPs, {from: accounts[2]});
		const uint256gvRQnvV = await Rootkit_financeDeazIEE.totalSupply.call({from: accounts[3]});
		const boolX3uEK4D = await Rootkit_financeDeazIEE.transfer.call(addressxBx1CpO, uintVbrcs4A, {from: accounts[4]});
		const uint256VWp5rbc = await Rootkit_financeDeazIEE.totalSupply.call({from: accounts[2]});

		assert.equal(boolX3uEK4D, false)
		assert.equal(uint256VWp5rbc, BigInt("10000000000000000000000"))
		assert.equal(uint256gvRQnvV, BigInt("10000000000000000000000"))
		assert.equal(uint256hVrr3GU, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeNYa6pgV = await Rootkit_finance.new({from: accounts[4]});
		const uintfW7DdLY = BigInt("1864")
		const addressA0I6bdQ = accounts[3]
		const uintbp9HUBC = BigInt("1070")
		const addressIZJlHIZ = accounts[1]
		const uintJWouuph = BigInt("1863")
		const addresssuEdyFq = accounts[4]
		const addressniAGzgg = accounts[1]
		const uinttNRCgvX = BigInt("416")
		const addressL1lKjjR = accounts[4]
		const uintdrdXDFZ = BigInt("1297")
		const addressKkIf2xy = accounts[3]
		const addressPj9GMG0 = accounts[0]
		const addresschx8FWY = accounts[5]
		const addressRCaGgIv = accounts[2]
		const addressPuUC1LL = accounts[4]
		const boolR5sq4eX = await Rootkit_financeNYa6pgV.approve.call(addressA0I6bdQ, uintfW7DdLY, {from: accounts[2]});
		const boolEtBt5o0 = await Rootkit_financeNYa6pgV.transfer.call(addressIZJlHIZ, uintbp9HUBC, {from: "0x0000000000000000000000000000000000000001"});
		const boollq9FR1Z = await Rootkit_financeNYa6pgV.transferFrom.call(addressniAGzgg, addresssuEdyFq, uintJWouuph, {from: accounts[1]});
		const boola8S0Ei4 = await Rootkit_financeNYa6pgV.transfer.call(addressL1lKjjR, uinttNRCgvX, {from: accounts[0]});
		const boolWshX7v = await Rootkit_financeNYa6pgV.transferFrom.call(addressPj9GMG0, addressKkIf2xy, uintdrdXDFZ, {from: accounts[0]});
		const uint256SLIxdpS = await Rootkit_financeNYa6pgV.balanceOf.call(addresschx8FWY, {from: accounts[3]});
		const uintZwbYs1L = await Rootkit_financeNYa6pgV.allowance.call(addressPuUC1LL, addressRCaGgIv, {from: accounts[0]});

		assert.equal(boolEtBt5o0, false)
		assert.equal(boolR5sq4eX, true)
		assert.equal(boolWshX7v, false)
		assert.equal(boola8S0Ei4, false)
		assert.equal(boollq9FR1Z, false)
		assert.equal(uint256SLIxdpS, BigInt("0"))
		assert.equal(uintZwbYs1L, BigInt("0"))
	});
})