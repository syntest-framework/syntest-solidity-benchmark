const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinPDLBRK5 = await MetaCoin.new({from: accounts[4]});
		const uintTTnJabc = BigInt("208")
		const addressxpfsgpb = accounts[2]
		const uintTVqoP2Q = BigInt("884")
		const addressPEJGc5T = accounts[2]
		const uintkG1qERQ = BigInt("1227")
		const addressjnrO73 = accounts[4]
		const boolEPj0uYW = await MetaCoinPDLBRK5.sendCoin.call(addressxpfsgpb, uintTTnJabc, {from: accounts[2]});
		const boolfivd6Kl = await MetaCoinPDLBRK5.sendCoin.call(addressPEJGc5T, uintTVqoP2Q, {from: accounts[2]});
		const boolMc7zEGu = await MetaCoinPDLBRK5.sendCoin.call(addressjnrO73, uintkG1qERQ, {from: accounts[0]});

		assert.equal(boolEPj0uYW, false)
		assert.equal(boolMc7zEGu, false)
		assert.equal(boolfivd6Kl, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinKc4hmER = await MetaCoin.new({from: accounts[2]});
		const uintGbyW8Sh = BigInt("1104")
		const addresskKJbyB = accounts[5]
		const uintfn0XCHz = BigInt("1863")
		const addressZ0LuAJM = accounts[3]
		const uintL5qBEcm = BigInt("43")
		const addressyMIya1w = accounts[1]
		const uintL12TGLp = BigInt("162")
		const addressdSrROqB = accounts[2]
		const boolAX948wa = await MetaCoinKc4hmER.sendCoin.call(addresskKJbyB, uintGbyW8Sh, {from: accounts[4]});
		const boolh1htkBr = await MetaCoinKc4hmER.sendCoin.call(addressZ0LuAJM, uintfn0XCHz, {from: accounts[2]});
		const boolyCOBznT = await MetaCoinKc4hmER.sendCoin.call(addressyMIya1w, uintL5qBEcm, {from: accounts[1]});
		const boolXkOZvC = await MetaCoinKc4hmER.sendCoin.call(addressdSrROqB, uintL12TGLp, {from: accounts[5]});

		assert.equal(boolAX948wa, false)
		assert.equal(boolXkOZvC, false)
		assert.equal(boolh1htkBr, true)
		assert.equal(boolyCOBznT, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinYZhv4Oe = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintMBJ4bkW = BigInt("724")
		const addressXTwpJBm = accounts[4]
		const uintlUvTE9V = BigInt("1612")
		const addressvQpSoiR = accounts[5]
		const uintohNDOMk = BigInt("1204")
		const addressJmkqM53 = accounts[1]
		const boolAwE6zC8 = await MetaCoinYZhv4Oe.sendCoin.call(addressXTwpJBm, uintMBJ4bkW, {from: accounts[4]});
		const bool5Hfkxr = await MetaCoinYZhv4Oe.sendCoin.call(addressvQpSoiR, uintlUvTE9V, {from: accounts[2]});
		const boolbcjnvj = await MetaCoinYZhv4Oe.sendCoin.call(addressJmkqM53, uintohNDOMk, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinkKOiSJ = await MetaCoin.new({from: accounts[4]});
		const uintFoCJnut = BigInt("1157")
		const addresskp0GiHa = accounts[0]
		const uintnZSLuUz = BigInt("1796")
		const addressgScASkj = accounts[2]
		const uintNZ6sMrw = BigInt("2")
		const addressaI5OzQY = accounts[3]
		const bool8GTGuu = await MetaCoinkKOiSJ.sendCoin.call(addresskp0GiHa, uintFoCJnut, {from: accounts[1]});
		const boolBVKTfLr = await MetaCoinkKOiSJ.sendCoin.call(addressgScASkj, uintnZSLuUz, {from: accounts[2]});
		const boolT7EkaMB = await MetaCoinkKOiSJ.sendCoin.call(addressaI5OzQY, uintNZ6sMrw, {from: accounts[4]});

		assert.equal(bool8GTGuu, false)
		assert.equal(boolBVKTfLr, false)
		assert.equal(boolT7EkaMB, true)
	});
})