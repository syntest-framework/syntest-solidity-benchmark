const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financePLPa47H = await Rootkit_finance.new({from: accounts[4]});
		const uintt6PTUP = BigInt("2044")
		const addressrSb4YHB = "0x0000000000000000000000000000000000000001"
		const addresscbCQNtU = accounts[1]
		const uintBFqnFj8 = BigInt("730")
		const addressiOXuiLx = accounts[1]
		const addressdipL2Ip = accounts[0]
		const boolfaaLx2x = await Rootkit_financePLPa47H.transferFrom.call(addresscbCQNtU, addressrSb4YHB, uintt6PTUP, {from: accounts[4]});
		const uint256FO7R9D8 = await Rootkit_financePLPa47H.totalSupply.call({from: accounts[5]});
		const boolaBJ5i6a = await Rootkit_financePLPa47H.transferFrom.call(addressdipL2Ip, addressiOXuiLx, uintBFqnFj8, {from: accounts[3]});

		assert.equal(boolaBJ5i6a, false)
		assert.equal(boolfaaLx2x, false)
		assert.equal(uint256FO7R9D8, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeVxWg0j7 = await Rootkit_finance.new({from: accounts[5]});
		const address2ilYYX = accounts[4]
		const uintbXxPfQL = BigInt("53")
		const addressE44wj2W = accounts[5]
		const addressO74wNun = accounts[3]
		const uint256jA7HST = await Rootkit_financeVxWg0j7.balanceOf.call(address2ilYYX, {from: accounts[3]});
		const boolAb9wnjd = await Rootkit_financeVxWg0j7.transfer.call(addressE44wj2W, uintbXxPfQL, {from: accounts[5]});
		const uint256gvbXDDJ = await Rootkit_financeVxWg0j7.balanceOf.call(addressO74wNun, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolAb9wnjd, true)
		assert.equal(uint256gvbXDDJ, BigInt("0"))
		assert.equal(uint256jA7HST, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_finance0Kqjbh = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWP00LRg = BigInt("171")
		const addressdEM3OrQ = accounts[2]
		const addressQOagAR1 = accounts[3]
		const uintYJc9eki = BigInt("1564")
		const addressbKF6NBn = accounts[2]
		const boolGx2ssoK = await Rootkit_finance0Kqjbh.transferFrom.call(addressQOagAR1, addressdEM3OrQ, uintWP00LRg, {from: "0x0000000000000000000000000000000000000001"});
		const boolubyzfDQ = await Rootkit_finance0Kqjbh.transfer.call(addressbKF6NBn, uintYJc9eki, {from: accounts[2]});
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financex98anu5 = await Rootkit_finance.new({from: accounts[2]});
		const addressEnY2h8F = accounts[2]
		const addressa0EGTx = accounts[5]
		const uintUrxWKtA = BigInt("102")
		const addressXFLc7eh = accounts[5]
		const uintIYfl4P = BigInt("1495")
		const addresscpoVI4L = accounts[4]
		const addressaeiD2Tz = accounts[4]
		const addresssK5ph02 = accounts[1]
		const uint256HxUPZYs = await Rootkit_financex98anu5.balanceOf.call(addressEnY2h8F, {from: accounts[3]});
		const uint256q1TIrg = await Rootkit_financex98anu5.balanceOf.call(addressa0EGTx, {from: accounts[5]});
		const boolU3PAByA = await Rootkit_financex98anu5.transfer.call(addressXFLc7eh, uintUrxWKtA, {from: accounts[0]});
		const boolvI5UZAo = await Rootkit_financex98anu5.transferFrom.call(addressaeiD2Tz, addresscpoVI4L, uintIYfl4P, {from: accounts[2]});
		const uint256N8XnfE = await Rootkit_financex98anu5.balanceOf.call(addresssK5ph02, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolU3PAByA, false)
		assert.equal(boolvI5UZAo, false)
		assert.equal(uint256HxUPZYs, BigInt("10000000000000000000000"))
		assert.equal(uint256N8XnfE, BigInt("0"))
		assert.equal(uint256q1TIrg, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeAQU4VzG = await Rootkit_finance.new({from: accounts[3]});
		const addressnai6a2D = accounts[0]
		const addressBwvWECn = accounts[1]
		const uintBSZXS3 = BigInt("852")
		const addresscO5F14Z = accounts[1]
		const addressbqCM7ZI = accounts[1]
		const uintKuEB2g = BigInt("2033")
		const addressbDUbWx6 = accounts[1]
		const addressqSKI69L = accounts[4]
		const uintw1Cl8xF = BigInt("147")
		const addressbxkHQMx = accounts[5]
		const uintdzyHDa = await Rootkit_financeAQU4VzG.allowance.call(addressBwvWECn, addressnai6a2D, {from: accounts[0]});
		const booljfyik3q = await Rootkit_financeAQU4VzG.transferFrom.call(addressbqCM7ZI, addresscO5F14Z, uintBSZXS3, {from: accounts[2]});
		const boola0Pi7Zx = await Rootkit_financeAQU4VzG.transferFrom.call(addressqSKI69L, addressbDUbWx6, uintKuEB2g, {from: accounts[0]});
		const boolm0FeHLl = await Rootkit_financeAQU4VzG.transfer.call(addressbxkHQMx, uintw1Cl8xF, {from: accounts[0]});

		assert.equal(boola0Pi7Zx, false)
		assert.equal(booljfyik3q, false)
		assert.equal(boolm0FeHLl, false)
		assert.equal(uintdzyHDa, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeQantPU = await Rootkit_finance.new({from: accounts[0]});
		const addressm1u3Es4 = "0x0000000000000000000000000000000000000001"
		const uintraKj0Bx = BigInt("234")
		const addressM79kTXQ = accounts[0]
		const addresspRcXNXu = accounts[0]
		const uintExmfW3 = BigInt("570")
		const addressGIhz1qX = accounts[1]
		const addressppsAEb = accounts[1]
		const uintBrzu3jX = BigInt("976")
		const addressELilcBG = accounts[0]
		const uint256MQF9GaW = await Rootkit_financeQantPU.balanceOf.call(addressm1u3Es4, {from: accounts[4]});
		const boolgPou34l = await Rootkit_financeQantPU.approve.call(addressM79kTXQ, uintraKj0Bx, {from: accounts[3]});
		const uint256upr86z = await Rootkit_financeQantPU.balanceOf.call(addresspRcXNXu, {from: "0x0000000000000000000000000000000000000001"});
		const boolOIev3b4 = await Rootkit_financeQantPU.transferFrom.call(addressppsAEb, addressGIhz1qX, uintExmfW3, {from: "0x0000000000000000000000000000000000000001"});
		const boolj9DnpXp = await Rootkit_financeQantPU.transfer.call(addressELilcBG, uintBrzu3jX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolOIev3b4, false)
		assert.equal(boolgPou34l, true)
		assert.equal(boolj9DnpXp, false)
		assert.equal(uint256MQF9GaW, BigInt("0"))
		assert.equal(uint256upr86z, BigInt("10000000000000000000000"))
	});
})