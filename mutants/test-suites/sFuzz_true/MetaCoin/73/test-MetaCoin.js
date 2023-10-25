const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinOErP4GT = await MetaCoin.new({from: accounts[4]});
		const uintZ2nkFmo = BigInt("1694")
		const addresskVYJJlU = accounts[0]
		const uintAQQDlaD = BigInt("195")
		const addresshufaQ3C = accounts[4]
		const uintItHSCYe = BigInt("1320")
		const addressy7Cdx79 = accounts[2]
		const uintxCzO3t = BigInt("131")
		const addressGBQyean = accounts[5]
		const uintx9C0LV3 = BigInt("700")
		const addressQyrjV1v = accounts[3]
		const boolzeGhKa0 = await MetaCoinOErP4GT.sendCoin.call(addresskVYJJlU, uintZ2nkFmo, {from: accounts[0]});
		const boolUSUnLAz = await MetaCoinOErP4GT.sendCoin.call(addresshufaQ3C, uintAQQDlaD, {from: accounts[2]});
		const booljnu8dKJ = await MetaCoinOErP4GT.sendCoin.call(addressy7Cdx79, uintItHSCYe, {from: accounts[4]});
		const boolDfIJM0 = await MetaCoinOErP4GT.sendCoin.call(addressGBQyean, uintxCzO3t, {from: accounts[1]});
		const booldMsDWFB = await MetaCoinOErP4GT.sendCoin.call(addressQyrjV1v, uintx9C0LV3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolDfIJM0, false)
		assert.equal(boolUSUnLAz, false)
		assert.equal(booldMsDWFB, false)
		assert.equal(booljnu8dKJ, true)
		assert.equal(boolzeGhKa0, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinUt6WPGs = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTEonQr = BigInt("159")
		const addressCbpSZfF = accounts[1]
		const uintvLfvTKS = BigInt("43")
		const addressiOqzo6h = accounts[3]
		const uintM6jZQVc = BigInt("2023")
		const addressX9r5Z6 = accounts[0]
		const uintSyAMssE = BigInt("1464")
		const addressdQVAU6c = accounts[4]
		const uintQY1lIKz = BigInt("792")
		const addressxEeQuJt = accounts[3]
		const boolrO0Ycaf = await MetaCoinUt6WPGs.sendCoin.call(addressCbpSZfF, uintTEonQr, {from: "0x0000000000000000000000000000000000000001"});
		const boolQus5gAJ = await MetaCoinUt6WPGs.sendCoin.call(addressiOqzo6h, uintvLfvTKS, {from: accounts[0]});
		const boolgChQ3yx = await MetaCoinUt6WPGs.sendCoin.call(addressX9r5Z6, uintM6jZQVc, {from: accounts[4]});
		const boolntBzSub = await MetaCoinUt6WPGs.sendCoin.call(addressdQVAU6c, uintSyAMssE, {from: accounts[3]});
		const booliQbp2T = await MetaCoinUt6WPGs.sendCoin.call(addressxEeQuJt, uintQY1lIKz, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinGobyzMn = await MetaCoin.new({from: accounts[0]});
		const uintNs1Jr3i = BigInt("14")
		const addressbIzvlsR = accounts[0]
		const uintaDGWpS7 = BigInt("2")
		const addressi57ac6f = accounts[2]
		const uintGVBGRzh = BigInt("1817")
		const addresszNViFlG = accounts[1]
		const uintR97uiav = BigInt("1905")
		const addressYpbF1hJ = accounts[2]
		const boolgkSBfk = await MetaCoinGobyzMn.sendCoin.call(addressbIzvlsR, uintNs1Jr3i, {from: accounts[0]});
		const boolYEOG2hY = await MetaCoinGobyzMn.sendCoin.call(addressi57ac6f, uintaDGWpS7, {from: accounts[0]});
		const booleOYHbIf = await MetaCoinGobyzMn.sendCoin.call(addresszNViFlG, uintGVBGRzh, {from: accounts[3]});
		const boolCHKA2rN = await MetaCoinGobyzMn.sendCoin.call(addressYpbF1hJ, uintR97uiav, {from: accounts[0]});

		assert.equal(boolCHKA2rN, true)
		assert.equal(boolYEOG2hY, true)
		assert.equal(booleOYHbIf, false)
		assert.equal(boolgkSBfk, true)
	});
})