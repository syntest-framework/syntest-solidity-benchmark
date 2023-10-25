const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinXRWIuia = await MetaCoin.new({from: accounts[5]});
		const uintacHEZqL = BigInt("458")
		const address4ATnDC = accounts[0]
		const uintKUrwi0l = BigInt("299")
		const addresscAKML2B = accounts[4]
		const uintLAL9wh = BigInt("512")
		const addressuORKHiY = accounts[3]
		const uintsrhvXc5 = BigInt("73")
		const addressLgoP4I = accounts[0]
		const uintbTYEmZ1 = BigInt("255")
		const address6MNQMT = accounts[0]
		const boolAF9dm3m = await MetaCoinXRWIuia.sendCoin.call(address4ATnDC, uintacHEZqL, {from: accounts[3]});
		const booltrM5YST = await MetaCoinXRWIuia.sendCoin.call(addresscAKML2B, uintKUrwi0l, {from: "0x0000000000000000000000000000000000000001"});
		const boolTAs2ND = await MetaCoinXRWIuia.sendCoin.call(addressuORKHiY, uintLAL9wh, {from: accounts[4]});
		const boolyC3QCKm = await MetaCoinXRWIuia.sendCoin.call(addressLgoP4I, uintsrhvXc5, {from: accounts[2]});
		const boollVLyEIv = await MetaCoinXRWIuia.sendCoin.call(address6MNQMT, uintbTYEmZ1, {from: accounts[3]});

		assert.equal(boolAF9dm3m, false)
		assert.equal(boolTAs2ND, false)
		assert.equal(boollVLyEIv, false)
		assert.equal(booltrM5YST, false)
		assert.equal(boolyC3QCKm, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinkHKilBJ = await MetaCoin.new({from: accounts[0]});
		const uintexVUyHM = BigInt("384")
		const addresswme8Vzy = accounts[1]
		const uintok2pULh = BigInt("1269")
		const addressYEKJZ2d = accounts[0]
		const uintB5JmNtz = BigInt("1417")
		const addressCRUfCHt = accounts[2]
		const boolsUhCyXH = await MetaCoinkHKilBJ.sendCoin.call(addresswme8Vzy, uintexVUyHM, {from: accounts[2]});
		const boolXHtoXbg = await MetaCoinkHKilBJ.sendCoin.call(addressYEKJZ2d, uintok2pULh, {from: accounts[3]});
		const booloLEZTu8 = await MetaCoinkHKilBJ.sendCoin.call(addressCRUfCHt, uintB5JmNtz, {from: accounts[0]});

		assert.equal(boolXHtoXbg, false)
		assert.equal(booloLEZTu8, true)
		assert.equal(boolsUhCyXH, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinx7KPExs = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintr0ulIJ8 = BigInt("304")
		const addressnlVK0N9 = accounts[0]
		const uintQzVSsCj = BigInt("1371")
		const addressAuJJhuh = accounts[0]
		const uintEA58Rq = BigInt("1611")
		const addressrtmaE1Q = accounts[0]
		const uintfJHhObi = BigInt("1098")
		const addressp7EhIc = accounts[2]
		const uintSQTi78I = BigInt("1035")
		const addresspEaKGL7 = accounts[4]
		const uintKycOJMX = BigInt("1348")
		const addressWttfGJx = accounts[5]
		const boole15Fc2T = await MetaCoinx7KPExs.sendCoin.call(addressnlVK0N9, uintr0ulIJ8, {from: accounts[4]});
		const bool0eKQjJ = await MetaCoinx7KPExs.sendCoin.call(addressAuJJhuh, uintQzVSsCj, {from: accounts[1]});
		const boolVjuWQHq = await MetaCoinx7KPExs.sendCoin.call(addressrtmaE1Q, uintEA58Rq, {from: accounts[2]});
		const boolfCldUYQ = await MetaCoinx7KPExs.sendCoin.call(addressp7EhIc, uintfJHhObi, {from: "0x0000000000000000000000000000000000000001"});
		const boolhuEXjIv = await MetaCoinx7KPExs.sendCoin.call(addresspEaKGL7, uintSQTi78I, {from: accounts[2]});
		const boolc1e1TE = await MetaCoinx7KPExs.sendCoin.call(addressWttfGJx, uintKycOJMX, {from: accounts[1]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinJJ7hsbD = await MetaCoin.new({from: accounts[1]});
		const uintM92Tzpg = BigInt("877")
		const addresspk54QFK = accounts[0]
		const uinttturvLm = BigInt("0")
		const addressR09akjA = "0x0000000000000000000000000000000000000001"
		const uintmIVyY3 = BigInt("443")
		const addressd1Q268R = accounts[4]
		const uintPWqjaLK = BigInt("366")
		const addressykAL5ZE = accounts[1]
		const boolxsm9Pkk = await MetaCoinJJ7hsbD.sendCoin.call(addresspk54QFK, uintM92Tzpg, {from: accounts[4]});
		const boolAV2gzgE = await MetaCoinJJ7hsbD.sendCoin.call(addressR09akjA, uinttturvLm, {from: accounts[1]});
		const boolUVqsTP0 = await MetaCoinJJ7hsbD.sendCoin.call(addressd1Q268R, uintmIVyY3, {from: accounts[3]});
		const boolnLuWkJ2 = await MetaCoinJJ7hsbD.sendCoin.call(addressykAL5ZE, uintPWqjaLK, {from: accounts[4]});

		assert.equal(boolAV2gzgE, true)
		assert.equal(boolUVqsTP0, false)
		assert.equal(boolnLuWkJ2, false)
		assert.equal(boolxsm9Pkk, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinES9y6K6 = await MetaCoin.new({from: accounts[0]});
		const uintidWjebc = BigInt("3686")
		const addresseMrfF3I = accounts[10]
		const boolJ9gQv1A = await MetaCoinES9y6K6.sendCoin.call(addresseMrfF3I, uintidWjebc, {from: accounts[0]});

		await expect(MetaCoinES9y6K6.sendCoin.call(addresseMrfF3I, uintidWjebc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})