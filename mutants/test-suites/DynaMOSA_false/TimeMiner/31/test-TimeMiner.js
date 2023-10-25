const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerEoGpeGE = await TimeMiner.new({from: accounts[3]});
		const boolqWivtM = true
		const addressWmNS8CB = accounts[2]
		const address0Y4JKa = accounts[0]
		const uintqRt5p9V = BigInt("1852")
		const uintehwDo9R = BigInt("931")
//		const addressMOr0S4M = await TimeMinerEoGpeGE.whitelist.call(addressWmNS8CB, boolqWivtM, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256IKdiDYh = await TimeMinerEoGpeGE.totalSupply.call({from: accounts[1]});
//		const uint256wg6up6K = await TimeMinerEoGpeGE.tokensToClaim.call(address0Y4JKa, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256HQWafpl = await TimeMinerEoGpeGE.setPrizeFromNewAddress.call(uintehwDo9R, uintqRt5p9V, {from: accounts[4]});

		await expect(TimeMinerEoGpeGE.whitelist.call(addressWmNS8CB, boolqWivtM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerzz4mGMm = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressjoJx79P = accounts[1]
		const addressiunuft8 = "0x0000000000000000000000000000000000000001"
		const uint256vnZS3O = await TimeMinerzz4mGMm.tokensToClaim.call(addressjoJx79P, {from: accounts[4]});
		const uint256cIDQpUA = await TimeMinerzz4mGMm.balanceOfTokenCirculation.call(addressiunuft8, {from: accounts[4]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinero4HFrXq = await TimeMiner.new({from: accounts[4]});
		const booloWiJOVV = true
		const addressULwnWSJ = accounts[2]
		const addresscdF8CkB = accounts[4]
		const addressg9FR2sE = accounts[1]
//		const boolbM9h6b4 = await TimeMinero4HFrXq.setStableCoinSystem.call(booloWiJOVV, {from: accounts[1]});
//		const boolxyxUrKf = await TimeMinero4HFrXq.infoStableSystem.call({from: accounts[1]});
//		const uint256KRTt3UK = await TimeMinero4HFrXq.allInfoFor.call(addressULwnWSJ, {from: accounts[3]});
//		const uint256X4o7uNy = await TimeMinero4HFrXq.tokensToClaim.call(addresscdF8CkB, {from: accounts[0]});
//		const uint256kGVxAo = await TimeMinero4HFrXq.allInfoFor.call(addressg9FR2sE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinero4HFrXq.setStableCoinSystem.call(booloWiJOVV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerwlioU5 = await TimeMiner.new({from: accounts[1]});
		const uint0dIbJF = BigInt("753")
		const uintst2NHtk = BigInt("214")
//		await TimeMinerwlioU5.preSaleFinished.call({from: accounts[3]});
//		const uint256OwasXPr = await TimeMinerwlioU5.changePreSalePriceIfToHigh.call(uint0dIbJF, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256a7VCh2X = await TimeMinerwlioU5.changePreSalePriceIfToHigh.call(uintst2NHtk, {from: accounts[3]});

		await expect(TimeMinerwlioU5.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerrnYJgb = await TimeMiner.new({from: accounts[1]});
		const uintRaOOFL1 = BigInt("194")
		const uintKRklNv = BigInt("185")
		const uintMK9qrEs = BigInt("15")
		const uintO1XXui = BigInt("1329")
		const addressAceqRZ = "0x0000000000000000000000000000000000000001"
//		const uint256ftSJAKt = await TimeMinerrnYJgb.setPrizeFromNewAddress.call(uintKRklNv, uintRaOOFL1, {from: accounts[3]});
//		const uint256TtxYedG = await TimeMinerrnYJgb.setPrizeFromNewAddress.call(uintO1XXui, uintMK9qrEs, {from: accounts[2]});
//		const uint256bfgPHdM = await TimeMinerrnYJgb.tokensToClaim.call(addressAceqRZ, {from: accounts[4]});

		await expect(TimeMinerrnYJgb.setPrizeFromNewAddress.call(uintKRklNv, uintRaOOFL1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerXrFAg97 = await TimeMiner.new({from: accounts[5]});
		const uintj6DB4Li = BigInt("729")
		const addressAIe0Haz = accounts[5]
		const uintJ89yM9 = BigInt("1592")
		const addressXE3Ubbt = accounts[0]
//		const bool34Q9uT = await TimeMinerXrFAg97.transfer.call(addressAIe0Haz, uintj6DB4Li, {from: accounts[1]});
//		const boolfQW41pg = await TimeMinerXrFAg97.transfer.call(addressXE3Ubbt, uintJ89yM9, {from: accounts[5]});

		await expect(TimeMinerXrFAg97.transfer.call(addressAIe0Haz, uintj6DB4Li, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerq2kaFgq = await TimeMiner.new({from: accounts[1]});
		const addressoMeyXZH = "0x0000000000000000000000000000000000000001"
		const uintPrKCkJ = BigInt("1585")
//		const uint256j3YxR0B = await TimeMinerq2kaFgq.tokensToClaim.call(addressoMeyXZH, {from: accounts[4]});
//		const uint256FSCQsnH = await TimeMinerq2kaFgq.changePreSalePriceIfToHigh.call(uintPrKCkJ, {from: accounts[1]});

		await expect(TimeMinerq2kaFgq.tokensToClaim.call(addressoMeyXZH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinercjWk3v7 = await TimeMiner.new({from: accounts[1]});
		const uintN6OCQW0 = BigInt("1090")
		const uintjsNlMKK = BigInt("163")
		const addressmtypLEo = accounts[2]
		const boolWINVc8N = true
		const addressxvmFeYS = accounts[0]
		const addressoFyf5Ew = accounts[1]
		const addressd0qjxhm = accounts[3]
		const uintxrPLNm = BigInt("213")
		const uintJNWEnJD = BigInt("254")
		const boolMWAvU5k = await TimeMinercjWk3v7.infoStableSystem.call({from: accounts[0]});
//		const uint256ZAT8WoO = await TimeMinercjWk3v7.setPrizeFromNewAddress.call(uintjsNlMKK, uintN6OCQW0, {from: accounts[3]});
//		const boolTWm4puO = await TimeMinercjWk3v7.isWhitelisted.call(addressmtypLEo, {from: accounts[2]});
//		const addressRzue71K = await TimeMinercjWk3v7.whitelist.call(addressxvmFeYS, boolWINVc8N, {from: accounts[0]});
//		const uint256C3Ioj7 = await TimeMinercjWk3v7.tokensToClaim.call(addressoFyf5Ew, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256dsq2fRj = await TimeMinercjWk3v7.balanceOfTokenCirculation.call(addressd0qjxhm, {from: accounts[5]});
//		const uint256cTc5YTV = await TimeMinercjWk3v7.setPrizeFromNewAddress.call(uintJNWEnJD, uintxrPLNm, {from: accounts[3]});

		await expect(TimeMinercjWk3v7.setPrizeFromNewAddress.call(uintjsNlMKK, uintN6OCQW0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerfeJHRup = await TimeMiner.new({from: accounts[1]});
		const uintv6lYW8W = BigInt("904")
		const addressSpohr4m = accounts[1]
		const boolYoj7lea = true
		const booleguRrjV = await TimeMinerfeJHRup.approve.call(addressSpohr4m, uintv6lYW8W, {from: accounts[3]});
//		const boolKZaMDxe = await TimeMinerfeJHRup.setStableCoinSystem.call(boolYoj7lea, {from: accounts[0]});

		assert.equal(booleguRrjV, true)
		await expect(TimeMinerfeJHRup.setStableCoinSystem.call(boolYoj7lea, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerwlioU5 = await TimeMiner.new({from: accounts[1]});
		const uintJ9pPkV = BigInt("753")
		const uintSrOs3wn = BigInt("214")
//		const uint256OwasXPr = await TimeMinerwlioU5.changePreSalePriceIfToHigh.call(uintJ9pPkV, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256a7VCh2X = await TimeMinerwlioU5.changePreSalePriceIfToHigh.call(uintSrOs3wn, {from: accounts[3]});

		await expect(TimeMinerwlioU5.changePreSalePriceIfToHigh.call(uintJ9pPkV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerWsITwpw = await TimeMiner.new({from: accounts[2]});
		const uintrXci0rQ = BigInt("1926")
		const addressVpF1ivh = accounts[2]
		const boolJCmpcv3 = false
		const addresslCU7koj = accounts[4]
		const boolvOBULku = await TimeMinerWsITwpw.transfer.call(addressVpF1ivh, uintrXci0rQ, {from: accounts[2]});
//		const addressi30RizK = await TimeMinerWsITwpw.whitelist.call(addresslCU7koj, boolJCmpcv3, {from: accounts[4]});

		assert.equal(boolvOBULku, true)
		await expect(TimeMinerWsITwpw.whitelist.call(addresslCU7koj, boolJCmpcv3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerXrFAg97 = await TimeMiner.new({from: accounts[5]});
		const uintfY2PrYx = BigInt("1641")
		const addressGcxPZoM = accounts[0]
		const boolfQW41pg = await TimeMinerXrFAg97.transfer.call(addressGcxPZoM, uintfY2PrYx, {from: accounts[5]});

		assert.equal(boolfQW41pg, true)
	});

	it('test for TimeMiner', async () => {
		const TimeMiner04OpAM = await TimeMiner.new({from: accounts[1]});
		const addressQ57J2PM = accounts[3]
		const addressyBA4CeR = accounts[0]
		const uintMgWufOM = BigInt("662")
		const addressQfvUEkf = accounts[0]
		const addressvxk4W3p = accounts[1]
		const addresswmwydYu = accounts[3]
		const addressvoRqmf0 = accounts[3]
		const boolbs9aAIP = false
		const uint256bn6SsV0 = await TimeMiner04OpAM.allowance.call(addressyBA4CeR, addressQ57J2PM, {from: accounts[4]});
//		const boolRbYOHcL = await TimeMiner04OpAM.transfer.call(addressQfvUEkf, uintMgWufOM, {from: accounts[3]});
//		const uint256Y8Ci0cx = await TimeMiner04OpAM.totalSupply.call({from: accounts[3]});
//		const uint256a0Fl2oh = await TimeMiner04OpAM.allowance.call(addresswmwydYu, addressvxk4W3p, {from: accounts[3]});
//		const uint256aqkYsMR = await TimeMiner04OpAM.balanceOf.call(addressvoRqmf0, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBOAv5uE = await TimeMiner04OpAM.setStableCoinSystem.call(boolbs9aAIP, {from: accounts[3]});

		assert.equal(uint256bn6SsV0, BigInt("0"))
		await expect(TimeMiner04OpAM.transfer.call(addressQfvUEkf, uintMgWufOM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerXrFAg97 = await TimeMiner.new({from: accounts[5]});
		const addresskcU5AK = accounts[5]
		const uintylp3HZl = BigInt("1582")
		const addressEkPDDDy = accounts[1]
		const addressAuhpqDI = accounts[3]
		const boolhkXksEV = false
		const addressGaEFWL4 = accounts[3]
		const uint256JAN0CG9 = await TimeMinerXrFAg97.balanceOf.call(addresskcU5AK, {from: accounts[2]});
		const boolfQW41pg = await TimeMinerXrFAg97.transfer.call(addressEkPDDDy, uintylp3HZl, {from: accounts[5]});
		const boolCETV4EQ = await TimeMinerXrFAg97.isWhitelisted.call(addressAuhpqDI, {from: accounts[3]});
//		const addressw1yHHBF = await TimeMinerXrFAg97.whitelist.call(addressGaEFWL4, boolhkXksEV, {from: accounts[3]});

		assert.equal(boolCETV4EQ, false)
		assert.equal(boolfQW41pg, true)
		assert.equal(uint256JAN0CG9, BigInt("12000000"))
		await expect(TimeMinerXrFAg97.whitelist.call(addressGaEFWL4, boolhkXksEV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerWsITwpw = await TimeMiner.new({from: accounts[2]});
		const uintVnMHp6 = BigInt("1926")
		const addressh7cKHTt = accounts[2]
		const addressI2pyvQp = accounts[2]
		const addresssPXWmg2 = accounts[4]
		const boolJCmpcv3 = true
		const addressLUUDusQ = accounts[5]
		const boolvOBULku = await TimeMinerWsITwpw.transfer.call(addressh7cKHTt, uintVnMHp6, {from: accounts[2]});
		const uint256ywn1U3w = await TimeMinerWsITwpw.allInfoFor.call(addressI2pyvQp, {from: accounts[4]});
		const uint256ohfPKPY = await TimeMinerWsITwpw.balanceOfTokenCirculation.call(addresssPXWmg2, {from: accounts[0]});
//		const addressi30RizK = await TimeMinerWsITwpw.whitelist.call(addressLUUDusQ, boolJCmpcv3, {from: accounts[4]});

		assert.equal(boolvOBULku, true)
		assert.equal(uint256ohfPKPY, BigInt("0"))
		await expect(TimeMinerWsITwpw.whitelist.call(addressLUUDusQ, boolJCmpcv3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhWPxiB3 = await TimeMiner.new({from: accounts[0]});
		const addressCMYcv6S = accounts[1]
		const uinten6uppo = BigInt("575")
		const addressNw8pGoS = accounts[2]
		const addressR9KYTc = accounts[2]
		const addresspZVLBB = accounts[3]
		const uint256b1aZeZJ = await TimeMinerhWPxiB3.balanceOf.call(addressCMYcv6S, {from: accounts[3]});
//		const uintRQughNB = await TimeMinerhWPxiB3.preSale.call(uinten6uppo, {from: accounts[1]});
//		const uint256txIz3C = await TimeMinerhWPxiB3.totalSupply.call({from: accounts[3]});
//		const uint256AwfB3J = await TimeMinerhWPxiB3.balanceOf.call(addressNw8pGoS, {from: accounts[2]});
//		const uint256LjXiI7v = await TimeMinerhWPxiB3.allowance.call(addresspZVLBB, addressR9KYTc, {from: accounts[4]});

		assert.equal(uint256b1aZeZJ, BigInt("0"))
		await expect(TimeMinerhWPxiB3.preSale.call(uinten6uppo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerRdNOT7E = await TimeMiner.new({from: accounts[5]});
		const addresspM79IvC = accounts[4]
		const uintohzVomb = BigInt("1303")
		const addressVqzFSHs = accounts[4]
		const addressWECklJg = accounts[1]
		const addressnq5inQN = accounts[5]
		const uintWSXo1yA = BigInt("169")
		const addressaBA5hcE = accounts[1]
		const boolnheYXiw = await TimeMinerRdNOT7E.infoStableSystem.call({from: accounts[2]});
		const uint256ZtVyWV9 = await TimeMinerRdNOT7E.balanceOf.call(addresspM79IvC, {from: accounts[3]});
//		const bool1ga4zt = await TimeMinerRdNOT7E.transferFrom.call(addressWECklJg, addressVqzFSHs, uintohzVomb, {from: accounts[2]});
//		await TimeMinerRdNOT7E.preSaleFinished.call({from: accounts[4]});
//		const uint256865MCq = await TimeMinerRdNOT7E.balanceOf.call(addressnq5inQN, {from: accounts[2]});
//		const boolYiO9phr = await TimeMinerRdNOT7E.transfer.call(addressaBA5hcE, uintWSXo1yA, {from: accounts[3]});

		assert.equal(uint256ZtVyWV9, BigInt("0"))
		await expect(TimeMinerRdNOT7E.transferFrom.call(addressWECklJg, addressVqzFSHs, uintohzVomb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})