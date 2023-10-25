const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const uintFJlALz3 = BigInt("805")
		const addressp8HgSn = "0x0000000000000000000000000000000000000001"
		const addressj4QC80 = accounts[4]
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});
//		const booloXlyY4k = await NALpPnhdwj.transferFrom.call(addressj4QC80, addressp8HgSn, uintFJlALz3, {from: accounts[2]});

		await expect(NALpPnhdwj.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALVX2mCn1 = await NAL.new({from: accounts[5]});
		const addressR4N9giC = accounts[2]
		const uintQRDW2Hn = BigInt("274")
		const addressADaVPWv = accounts[1]
		const addressRtmlKoJ = accounts[3]
		const uintfqy6FKL = BigInt("455")
		const addressWt2gtmD = accounts[3]
//		const addressgSOPjR6 = await NALVX2mCn1.transferOwnership.call(addressR4N9giC, {from: accounts[2]});
//		const boolRvc5oG = await NALVX2mCn1.transfer.call(addressADaVPWv, uintQRDW2Hn, {from: accounts[2]});
//		const addressUUdAXOI = await NALVX2mCn1.addAdmin.call(addressRtmlKoJ, {from: accounts[2]});
//		const boolOTxscLi = await NALVX2mCn1.approve.call(addressWt2gtmD, uintfqy6FKL, {from: accounts[4]});

		await expect(NALVX2mCn1.transferOwnership.call(addressR4N9giC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const strings7zv6h3 = "v13uarMjxrfvkxQZ2J2XvPo3y8wnJEwg2p8NZQZsL9Yryo4uAzmUkpnDHiw5jI9Crtud"
		const stringf8cHsQE = "ui7g1ts7ZqWXovtCjf"
		const uintnEZlqKB = BigInt("51")
		const NALSEsHR2 = await NAL.new(strings7zv6h3, stringf8cHsQE, uintnEZlqKB, {from: accounts[5]});
		const addressFLJhLNr = accounts[0]
		const addressDLaLDpc = accounts[1]
		const addressZ5kqFNP = await NALSEsHR2.removeAdmin.call(addressFLJhLNr, {from: accounts[4]});
		await NALSEsHR2.whenNotPaused.call({from: accounts[3]});
		const boolLWajhi5 = await NALSEsHR2.freezeAccount.call(addressDLaLDpc, {from: accounts[3]});
		await NALSEsHR2.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NAL', async () => {
		const NALvYZ1S93 = await NAL.new({from: accounts[4]});
		const uintsPcw5V2 = BigInt("784")
		const addresst15D2yr = accounts[1]
		const addressp5Ts5h0 = accounts[4]
		const uintVrmcrd8 = BigInt("457")
		const addressGI44mZx = accounts[4]
//		const boolMcJEcPi = await NALvYZ1S93.decreaseAllowance.call(addresst15D2yr, uintsPcw5V2, {from: accounts[0]});
//		const boolhIQan9 = await NALvYZ1S93.paused.call({from: accounts[0]});
//		const uint256eb6Jh3x = await NALvYZ1S93.balanceOf.call(addressp5Ts5h0, {from: accounts[5]});
//		const boolkpHF5e = await NALvYZ1S93.decreaseAllowance.call(addressGI44mZx, uintVrmcrd8, {from: accounts[2]});

		await expect(NALvYZ1S93.decreaseAllowance.call(addresst15D2yr, uintsPcw5V2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const string80uBfR = await NALpPnhdwj.symbol.call({from: accounts[4]});
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});

		assert.equal(string80uBfR, "NAL")
		await expect(NALpPnhdwj.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const addressuBWi2Cr = accounts[4]
		const uint256DcgZH6t = await NALpPnhdwj.totalSupply.call({from: accounts[0]});
//		const boolkoItJTa = await NALpPnhdwj.unfreezeAccount.call(addressuBWi2Cr, {from: accounts[1]});
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});

		assert.equal(uint256DcgZH6t, BigInt("2000000000000000000000000000"))
		await expect(NALpPnhdwj.unfreezeAccount.call(addressuBWi2Cr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const uintwZK9sIO = BigInt("519")
		const addressHl9GkV3 = accounts[0]
//		const boolZS8jmcs = await NALpPnhdwj.transfer.call(addressHl9GkV3, uintwZK9sIO, {from: "0x0000000000000000000000000000000000000001"});
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});

		await expect(NALpPnhdwj.transfer.call(addressHl9GkV3, uintwZK9sIO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const addressYB6h7FX = accounts[1]
//		await NALpPnhdwj.renounceAdmin.call({from: accounts[3]});
//		const uint256TtBF014 = await NALpPnhdwj.balanceOf.call(addressYB6h7FX, {from: accounts[1]});
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});

		await expect(NALpPnhdwj.renounceAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const uintKiC3DDj = BigInt("537")
		const addressisHkmS7 = accounts[0]
		const boolG8dVf7C = await NALpPnhdwj.increaseAllowance.call(addressisHkmS7, uintKiC3DDj, {from: accounts[0]});
//		await NALpPnhdwj.pause.call({from: accounts[0]});
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});

		assert.equal(boolG8dVf7C, true)
		await expect(NALpPnhdwj.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const uint8y6AQqDS = await NALpPnhdwj.decimals.call({from: accounts[2]});
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});

		assert.equal(uint8y6AQqDS, BigInt("18"))
		await expect(NALpPnhdwj.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const uintYrNR5xa = BigInt("98")
		const addresslpxh4mo = accounts[4]
		const boolg4neIUW = await NALpPnhdwj.approve.call(addresslpxh4mo, uintYrNR5xa, {from: accounts[3]});
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});

		assert.equal(boolg4neIUW, true)
		await expect(NALpPnhdwj.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const addressNVPeYp9 = accounts[1]
		const addresspwB9l9S = accounts[4]
		const addressNJuV2Hc = await NALpPnhdwj.transferOwnership.call(addressNVPeYp9, {from: accounts[0]});
//		const addressMeKPqgA = await NALpPnhdwj.transferOwnership.call(addresspwB9l9S, {from: accounts[1]});
//		await NALpPnhdwj.whenNotPaused.call({from: accounts[5]});
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});

		await expect(NALpPnhdwj.transferOwnership.call(addresspwB9l9S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const uintmz7NoQI = BigInt("2001")
		const addressZbZiJ4s = accounts[2]
		const addresssrHgJ0M = accounts[4]
		const uintwt2bq1t = BigInt("1124")
		const uintmnXEMI3 = BigInt("170")
		const addressaaNseeL = accounts[4]
		const uintPmNwBDG = BigInt("519")
		const addressYTDcuLy = accounts[0]
//		const boolEKMtf70 = await NALpPnhdwj.transferFrom.call(addresssrHgJ0M, addressZbZiJ4s, uintmz7NoQI, {from: accounts[2]});
//		const boolHScwAyP = await NALpPnhdwj.lock.call(addressaaNseeL, uintmnXEMI3, uintwt2bq1t, {from: accounts[0]});
//		const boolZS8jmcs = await NALpPnhdwj.transfer.call(addressYTDcuLy, uintPmNwBDG, {from: "0x0000000000000000000000000000000000000001"});
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});

		await expect(NALpPnhdwj.transferFrom.call(addresssrHgJ0M, addressZbZiJ4s, uintmz7NoQI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const stringqjgNb8f = await NALpPnhdwj.name.call({from: accounts[2]});
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});

		assert.equal(stringqjgNb8f, "Personal Token")
		await expect(NALpPnhdwj.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const addressHtV2bB0 = accounts[4]
		const addressq5H6djR = accounts[0]
		const uint256wkjuwfj = await NALpPnhdwj.balanceOf.call(addressHtV2bB0, {from: accounts[5]});
//		await NALpPnhdwj.pause.call({from: accounts[1]});
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});
//		const addressYYRWieY = await NALpPnhdwj.transferOwnership.call(addressq5H6djR, {from: accounts[0]});

		assert.equal(uint256wkjuwfj, BigInt("0"))
		await expect(NALpPnhdwj.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const uintNyFSiSN = BigInt("2019")
//		const uint256zVCFqhZ = await NALpPnhdwj.burn.call(uintNyFSiSN, {from: accounts[1]});
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});

		await expect(NALpPnhdwj.burn.call(uintNyFSiSN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const addresscTT7NX7 = accounts[4]
		const uintKOXu8vC = BigInt("1440")
		const addressiXcpsKD = accounts[4]
		const addressg2DdKJ = accounts[1]
		const boolu8q24BF = await NALpPnhdwj.paused.call({from: accounts[3]});
		const uint256wkjuwfj = await NALpPnhdwj.balanceOf.call(addresscTT7NX7, {from: accounts[5]});
//		const bools2zBE5c = await NALpPnhdwj.transfer.call(addressiXcpsKD, uintKOXu8vC, {from: accounts[4]});
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});
//		const addressYYRWieY = await NALpPnhdwj.transferOwnership.call(addressg2DdKJ, {from: accounts[0]});

		assert.equal(boolu8q24BF, false)
		assert.equal(uint256wkjuwfj, BigInt("0"))
		await expect(NALpPnhdwj.transfer.call(addressiXcpsKD, uintKOXu8vC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const uintFJAPvO = BigInt("1338")
		const addressV8fRhkE = "0x0000000000000000000000000000000000000001"
		const uintEix0ywE = BigInt("519")
		const addressM66AVm = accounts[0]
//		const addressvBCiq80 = await NALpPnhdwj.burnFrom.call(addressV8fRhkE, uintFJAPvO, {from: accounts[5]});
//		await NALpPnhdwj.pause.call({from: accounts[2]});
//		const boolZS8jmcs = await NALpPnhdwj.transfer.call(addressM66AVm, uintEix0ywE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALpPnhdwj.burnFrom.call(addressV8fRhkE, uintFJAPvO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const addressKLq1P4n = accounts[2]
		const addressxfKNmd = accounts[2]
		const uint256yUKqWv6 = await NALpPnhdwj.allowance.call(addressxfKNmd, addressKLq1P4n, {from: accounts[1]});
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});

		assert.equal(uint256yUKqWv6, BigInt("0"))
		await expect(NALpPnhdwj.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALqRMTw8b = await NAL.new({from: accounts[3]});
		const addressOeSFBn = accounts[3]
		const addressMG0gl4Q = accounts[4]
		const addressgNkcOpD = accounts[5]
		const uintYUnsTrg = BigInt("742")
		const addressRyRoYiS = accounts[4]
		const uintpEb39U = BigInt("78")
		const addressqjYv6P = accounts[1]
//		const addressxDQJMB = await NALqRMTw8b.addAdmin.call(addressOeSFBn, {from: accounts[3]});
//		const uint256qyOJavw = await NALqRMTw8b.allowance.call(addressgNkcOpD, addressMG0gl4Q, {from: accounts[3]});
//		const boolddQFveE = await NALqRMTw8b.unlock.call(addressRyRoYiS, uintYUnsTrg, {from: accounts[0]});
//		const addressjtrEIBQ = await NALqRMTw8b.burnFrom.call(addressqjYv6P, uintpEb39U, {from: accounts[3]});

		await expect(NALqRMTw8b.addAdmin.call(addressOeSFBn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const uintV2u7B2i = BigInt("1101")
		const addressd8hfel8 = accounts[3]
		const addressdwMM6cq = accounts[0]
		const uintHrR8U5D = BigInt("772")
		const addressVEVyEzO = accounts[4]
		const addresszxJN4l = accounts[2]
//		const boolB6osmLL = await NALpPnhdwj.unlock.call(addressd8hfel8, uintV2u7B2i, {from: accounts[0]});
//		const boolDxTUYHD = await NALpPnhdwj.isOwner.call(addressdwMM6cq, {from: accounts[4]});
//		const booliWHdETm = await NALpPnhdwj.transferFrom.call(addresszxJN4l, addressVEVyEzO, uintHrR8U5D, {from: accounts[2]});

		await expect(NALpPnhdwj.unlock.call(addressd8hfel8, uintV2u7B2i, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const addresscxZ4sML = accounts[2]
		const addressijk61H5 = accounts[0]
		const boolNG4J2z8 = await NALpPnhdwj.isOwner.call(addresscxZ4sML, {from: accounts[1]});
		const boolODZupsb = await NALpPnhdwj.isOwner.call(addressijk61H5, {from: accounts[1]});
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});

		assert.equal(boolNG4J2z8, false)
		assert.equal(boolODZupsb, true)
		await expect(NALpPnhdwj.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const uintL7NJ8r = BigInt("1003")
		const uintloJHZy = BigInt("1617")
		const addresshp2kwuM = accounts[4]
		const uintGpQHWWL = BigInt("383")
		const addressT8LOSHf = accounts[0]
		const addresseY2qCbf = accounts[0]
		const addressia73j4f = accounts[6]
//		const boolS27e0DS = await NALpPnhdwj.lock.call(addresshp2kwuM, uintloJHZy, uintL7NJ8r, {from: accounts[0]});
//		const boolaksS8Hz = await NALpPnhdwj.transferFrom.call(addresseY2qCbf, addressT8LOSHf, uintGpQHWWL, {from: accounts[2]});
//		const uint256wkjuwfj = await NALpPnhdwj.balanceOf.call(addressia73j4f, {from: accounts[5]});

		await expect(NALpPnhdwj.lock.call(addresshp2kwuM, uintloJHZy, uintL7NJ8r, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const addresspyAe8SQ = accounts[1]
		const uintgVQj6NU = BigInt("772")
		const addressIJGsht = accounts[4]
		const addressTHiqsO1 = accounts[2]
		const uintCJNwHxb = BigInt("1240")
		const addressFptFELd = accounts[1]
		const addressW2nATmy = accounts[5]
//		const addressxf7rZD = await NALpPnhdwj.removeAdmin.call(addresspyAe8SQ, {from: accounts[0]});
//		const booliWHdETm = await NALpPnhdwj.transferFrom.call(addressTHiqsO1, addressIJGsht, uintgVQj6NU, {from: accounts[2]});
//		const boolNUKhFD7 = await NALpPnhdwj.transfer.call(addressFptFELd, uintCJNwHxb, {from: accounts[1]});
//		const boola7RJItM = await NALpPnhdwj.isAdmin.call(addressW2nATmy, {from: accounts[2]});

		await expect(NALpPnhdwj.removeAdmin.call(addresspyAe8SQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const uintgSeL6mk = BigInt("29")
		const uintVbw9X3F = BigInt("6")
		const addressf11hXKF = accounts[1]
		const uintTez6KeB = BigInt("1322")
		const addressoYMu63i = accounts[2]
		const uintwisO4xw = BigInt("772")
		const addressmIPfHEJ = accounts[3]
		const addresstw23eda = accounts[3]
		const boolQPi8u0n = await NALpPnhdwj.transferWithLock.call(addressf11hXKF, uintVbw9X3F, uintgSeL6mk, {from: accounts[0]});
//		const boolA1zb8Hx = await NALpPnhdwj.unlock.call(addressoYMu63i, uintTez6KeB, {from: accounts[0]});
//		await NALpPnhdwj.unpause.call({from: accounts[4]});
//		const booliWHdETm = await NALpPnhdwj.transferFrom.call(addresstw23eda, addressmIPfHEJ, uintwisO4xw, {from: accounts[2]});

		assert.equal(boolQPi8u0n, true)
		await expect(NALpPnhdwj.unlock.call(addressoYMu63i, uintTez6KeB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const addressyfxpYoO = accounts[6]
		const addressdkVerbL = accounts[0]
		const addressfO3eTR7 = accounts[3]
		const addressNFBo3Ws = accounts[0]
		const uint256wkjuwfj = await NALpPnhdwj.balanceOf.call(addressyfxpYoO, {from: accounts[5]});
		const addressVVVhptC = await NALpPnhdwj.upgradeTo.call(addressdkVerbL, {from: accounts[0]});
//		const addressF5LRCmu = await NALpPnhdwj.upgradeTo.call(addressfO3eTR7, {from: accounts[3]});
//		const addresseneekg = await NALpPnhdwj.notFrozen.call(addressNFBo3Ws, {from: accounts[1]});

		assert.equal(uint256wkjuwfj, BigInt("0"))
		await expect(NALpPnhdwj.upgradeTo.call(addressfO3eTR7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const addressEuO5fj1 = accounts[2]
		const uintzBL76sy = BigInt("519")
		const addressqwKMiDO = accounts[0]
		const boolU5ZdaUT = await NALpPnhdwj.freezeAccount.call(addressEuO5fj1, {from: accounts[0]});
//		const boolZS8jmcs = await NALpPnhdwj.transfer.call(addressqwKMiDO, uintzBL76sy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolU5ZdaUT, true)
		await expect(NALpPnhdwj.transfer.call(addressqwKMiDO, uintzBL76sy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALpPnhdwj = await NAL.new({from: accounts[0]});
		const addressPcRQEqK = accounts[1]
		const uintf3WKcXG = BigInt("1997")
		const addressZnC1NTa = accounts[0]
		const addresshSTeS6l = "0x0000000000000000000000000000000000000001"
//		const booljRqg4Ay = await NALpPnhdwj.unfreezeAccount.call(addressPcRQEqK, {from: accounts[0]});
//		await NALpPnhdwj.whenPaused.call({from: accounts[0]});
//		const boolzpholP7 = await NALpPnhdwj.transferFrom.call(addresshSTeS6l, addressZnC1NTa, uintf3WKcXG, {from: accounts[1]});

		await expect(NALpPnhdwj.unfreezeAccount.call(addressPcRQEqK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})