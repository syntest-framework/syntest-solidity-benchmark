const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerwXhr5s = await TimeMiner.new({from: accounts[2]});
		const uintyzor1Ls = BigInt("1864")
		const uintlLKfPO8 = BigInt("1463")
		const addressGcmWhr = accounts[2]
		const addressM2oZ78 = accounts[1]
		const addressTrNQh58 = accounts[0]
		const bool97lqU4 = await TimeMinerwXhr5s.infoStableSystem.call({from: accounts[0]});
		const uint256w74INbN = await TimeMinerwXhr5s.changePreSalePriceIfToHigh.call(uintyzor1Ls, {from: accounts[0]});
		const uint256H33ER6k = await TimeMinerwXhr5s.changePreSalePriceIfToHigh.call(uintlLKfPO8, {from: accounts[5]});
		const uint256atxa1E5 = await TimeMinerwXhr5s.balanceOfTokenCirculation.call(addressGcmWhr, {from: accounts[0]});
		const uint256ULHso2 = await TimeMinerwXhr5s.allowance.call(addressTrNQh58, addressM2oZ78, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerwXhr5s.changePreSalePriceIfToHigh.call(uintyzor1Ls, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlUtI5gP = await TimeMiner.new({from: accounts[3]});
		const boolD7HUo69 = false
		const addresscuNTjH = accounts[4]
		const addressajPxUWG = accounts[2]
		const uintjmLFl3y = BigInt("1937")
		const uintl5vylPS = BigInt("1869")
		const addressypxuZVP = await TimeMinerlUtI5gP.whitelist.call(addresscuNTjH, boolD7HUo69, {from: accounts[1]});
		const uint256hpFIwDB = await TimeMinerlUtI5gP.totalSupply.call({from: accounts[2]});
		const uint256O0nbFHd = await TimeMinerlUtI5gP.allInfoFor.call(addressajPxUWG, {from: accounts[2]});
		const uint256OhPrMIV = await TimeMinerlUtI5gP.setPrizeFromNewAddress.call(uintl5vylPS, uintjmLFl3y, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerlUtI5gP.whitelist.call(addresscuNTjH, boolD7HUo69, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerRDQqt6l = await TimeMiner.new({from: accounts[2]});
		const uintfayQRXb = BigInt("732")
		const addresshd5q9Qr = accounts[2]
		const uintEeJ9X3h = BigInt("724")
		const addresswjfV9JZ = accounts[3]
		const addressFklpmvy = accounts[1]
		const uintX7mFd9k = BigInt("309")
		const addressW3WqsZh = accounts[1]
		const uintDfSWn55 = BigInt("1833")
		const uintm6k7tx2 = BigInt("1188")
		const boolFEckWf = await TimeMinerRDQqt6l.approve.call(addresshd5q9Qr, uintfayQRXb, {from: accounts[5]});
		const uint256rs15oLB = await TimeMinerRDQqt6l.changePreSalePriceIfToHigh.call(uintEeJ9X3h, {from: accounts[0]});
		const uint256m7VOkdn = await TimeMinerRDQqt6l.allowance.call(addressFklpmvy, addresswjfV9JZ, {from: accounts[4]});
		const boollFm6xnO = await TimeMinerRDQqt6l.transfer.call(addressW3WqsZh, uintX7mFd9k, {from: accounts[3]});
		const uint256PMrDoag = await TimeMinerRDQqt6l.setPrizeFromNewAddress.call(uintm6k7tx2, uintDfSWn55, {from: accounts[5]});

		assert.equal(boolFEckWf, true)
		await expect(TimeMinerRDQqt6l.changePreSalePriceIfToHigh.call(uintEeJ9X3h, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerCXkaiRn = await TimeMiner.new({from: accounts[4]});
		const uintXafGiuw = BigInt("1990")
		const uintVKcZ3il = BigInt("14")
		const addressQMT4CD = accounts[3]
		const addressDf8kcp = accounts[3]
		const uint256Owu1sz = await TimeMinerCXkaiRn.setPrizeFromNewAddress.call(uintVKcZ3il, uintXafGiuw, {from: accounts[3]});
		const uint256Czg31DT = await TimeMinerCXkaiRn.allInfoFor.call(addressQMT4CD, {from: accounts[3]});
		const boolArlVJJq = await TimeMinerCXkaiRn.infoStableSystem.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256oiNT5zM = await TimeMinerCXkaiRn.tokensToClaim.call(addressDf8kcp, {from: accounts[2]});

		await expect(TimeMinerCXkaiRn.setPrizeFromNewAddress.call(uintVKcZ3il, uintXafGiuw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerrfY1DUw = await TimeMiner.new({from: accounts[0]});
		const uintsw3Rg1g = BigInt("1247")
		const addresstSxqRRK = accounts[1]
		const uintteu68um = await TimeMinerrfY1DUw.preSale.call(uintsw3Rg1g, {from: accounts[0]});
		const uint256xDuzGP3 = await TimeMinerrfY1DUw.balanceOf.call(addresstSxqRRK, {from: accounts[5]});

		await expect(TimeMinerrfY1DUw.preSale.call(uintsw3Rg1g, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerRuuENdm = await TimeMiner.new({from: accounts[0]});
		const uintNSylbVU = BigInt("364")
		const addresssdWFs0J = accounts[2]
		const addressl62jP2R = accounts[5]
		const addressukdIaHb = accounts[3]
		const addressRsDrmC = accounts[0]
		const uintURg4C2s = BigInt("1953")
		const addressP2iNAa = accounts[2]
		const addresst6uRhN5 = accounts[2]
		const addressToQrEXI = accounts[1]
		const boolxaF8Fuv = await TimeMinerRuuENdm.transferFrom.call(addressl62jP2R, addresssdWFs0J, uintNSylbVU, {from: accounts[1]});
		const uint256G14j6oi = await TimeMinerRuuENdm.allowance.call(addressRsDrmC, addressukdIaHb, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Gnol2HY = await TimeMinerRuuENdm.changePreSalePriceIfToHigh.call(uintURg4C2s, {from: accounts[3]});
		const uint256fxRCo1 = await TimeMinerRuuENdm.tokensToClaim.call(addressP2iNAa, {from: accounts[3]});
		const uint256qcCFGuB = await TimeMinerRuuENdm.allowance.call(addressToQrEXI, addresst6uRhN5, {from: accounts[1]});

		await expect(TimeMinerRuuENdm.transferFrom.call(addressl62jP2R, addresssdWFs0J, uintNSylbVU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerbFqYRoR = await TimeMiner.new({from: accounts[2]});
		const boollUFNzef = false
		const uintKyRSWEH = BigInt("93")
		const addressbs7OPug = accounts[4]
		const boolIhXdLE7 = await TimeMinerbFqYRoR.setStableCoinSystem.call(boollUFNzef, {from: accounts[3]});
		const uint256BMTo1aB = await TimeMinerbFqYRoR.totalSupply.call({from: accounts[0]});
		const boolEPg61j = await TimeMinerbFqYRoR.transfer.call(addressbs7OPug, uintKyRSWEH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerbFqYRoR.setStableCoinSystem.call(boollUFNzef, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhkonpwo = await TimeMiner.new({from: accounts[0]});
		const uintrdNHwg6 = BigInt("1021")
		const addressi0MxxMu = accounts[1]
		const addressUeTzHu6 = accounts[5]
		const boolCltNswj = await TimeMinerhkonpwo.approve.call(addressi0MxxMu, uintrdNHwg6, {from: accounts[4]});
		const uint256CycRCoN = await TimeMinerhkonpwo.allInfoFor.call(addressUeTzHu6, {from: accounts[3]});
		await TimeMinerhkonpwo.preSaleFinished.call({from: accounts[0]});

		assert.equal(boolCltNswj, true)
		await expect(TimeMinerhkonpwo.allInfoFor.call(addressUeTzHu6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerHqYUESK = await TimeMiner.new({from: accounts[5]});
		const addressJLG96eS = accounts[3]
		const addressBXkTnwW = accounts[4]
		const addressKoPPjt4 = accounts[0]
		const boolbcRE1S1 = await TimeMinerHqYUESK.isWhitelisted.call(addressJLG96eS, {from: accounts[4]});
		const uint256f7p6gQ = await TimeMinerHqYUESK.allInfoFor.call(addressBXkTnwW, {from: accounts[1]});
		const boolm7HNPk9 = await TimeMinerHqYUESK.infoStableSystem.call({from: accounts[0]});
		const uint256l29RAgI = await TimeMinerHqYUESK.tokensToClaim.call(addressKoPPjt4, {from: accounts[1]});

		assert.equal(boolbcRE1S1, false)
		await expect(TimeMinerHqYUESK.allInfoFor.call(addressBXkTnwW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerF8V3Oee = await TimeMiner.new({from: accounts[2]});
		const addressx3xtPP = accounts[0]
		const booltEjsfw3 = false
		const addressowrSpog = accounts[4]
		const uinteWcgaXp = BigInt("246")
		const addressa3i9VR = accounts[4]
		const addresshA1xRx9 = accounts[0]
		const uintD7AMuOK = BigInt("531")
		const uinttPt7iew = BigInt("718")
		const uint256zOXVVaI = await TimeMinerF8V3Oee.balanceOfTokenCirculation.call(addressx3xtPP, {from: accounts[3]});
		const uint256oBUvTAn = await TimeMinerF8V3Oee.totalSupply.call({from: accounts[5]});
		const addressLcJ1Kbp = await TimeMinerF8V3Oee.whitelist.call(addressowrSpog, booltEjsfw3, {from: accounts[2]});
		const boolQzmguoi = await TimeMinerF8V3Oee.transfer.call(addressa3i9VR, uinteWcgaXp, {from: accounts[3]});
		const uint256b2z8ysZ = await TimeMinerF8V3Oee.balanceOfTokenCirculation.call(addresshA1xRx9, {from: accounts[4]});
		const uint256niCU3Ic = await TimeMinerF8V3Oee.setPrizeFromNewAddress.call(uinttPt7iew, uintD7AMuOK, {from: accounts[1]});

		assert.equal(uint256oBUvTAn, BigInt("24000000"))
		assert.equal(uint256zOXVVaI, BigInt("0"))
		await expect(TimeMinerF8V3Oee.transfer.call(addressa3i9VR, uinteWcgaXp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerrfY1DUw = await TimeMiner.new({from: accounts[0]});
		const addresss2BXmUS = accounts[0]
		const addressyZk342Y = accounts[2]
		const uint2566K58gQ = await TimeMinerrfY1DUw.tokensToClaim.call(addresss2BXmUS, {from: accounts[5]});
		const uint256xDuzGP3 = await TimeMinerrfY1DUw.balanceOf.call(addressyZk342Y, {from: accounts[5]});
		await TimeMinerrfY1DUw.preSaleFinished.call({from: accounts[1]});

		assert.equal(uint2566K58gQ, BigInt("12000000"))
		assert.equal(uint256xDuzGP3, BigInt("0"))
		await expect(TimeMinerrfY1DUw.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerrfY1DUw = await TimeMiner.new({from: accounts[0]});
		const addressq6fJHMX = accounts[2]
		const addresshKtcqYt = accounts[0]
		const addresssbzR3A9 = accounts[5]
		const addresspjpRm64 = accounts[4]
		const uint256xDuzGP3 = await TimeMinerrfY1DUw.balanceOf.call(addressq6fJHMX, {from: accounts[5]});
		const uint256xVf6ORV = await TimeMinerrfY1DUw.allowance.call(addresssbzR3A9, addresshKtcqYt, {from: accounts[1]});
		const uint256MdgMGNt = await TimeMinerrfY1DUw.balanceOfTokenCirculation.call(addresspjpRm64, {from: accounts[4]});

		assert.equal(uint256MdgMGNt, BigInt("0"))
		assert.equal(uint256xDuzGP3, BigInt("0"))
		assert.equal(uint256xVf6ORV, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerrfY1DUw = await TimeMiner.new({from: accounts[0]});
		const addressy6PzJdp = accounts[2]
		const uint256xDuzGP3 = await TimeMinerrfY1DUw.balanceOf.call(addressy6PzJdp, {from: accounts[5]});
		await TimeMinerrfY1DUw.preSaleFinished.call({from: accounts[0]});

		assert.equal(uint256xDuzGP3, BigInt("0"))
		await expect(TimeMinerrfY1DUw.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerrfY1DUw = await TimeMiner.new({from: accounts[0]});
		const uintYNUICho = BigInt("1768")
		const addresshWAfHfY = accounts[2]
		const uinthf1YUT5 = BigInt("1157")
		const addresspBqmLd = accounts[2]
		const booldEhf1NI = await TimeMinerrfY1DUw.transfer.call(addresshWAfHfY, uintYNUICho, {from: accounts[0]});
		const boolTJJUCxK = await TimeMinerrfY1DUw.approve.call(addresspBqmLd, uinthf1YUT5, {from: accounts[4]});
		await TimeMinerrfY1DUw.preSaleFinished.call({from: accounts[0]});

		assert.equal(boolTJJUCxK, true)
		assert.equal(booldEhf1NI, true)
		await expect(TimeMinerrfY1DUw.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerDOQRvoI = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressgFT9cyV = accounts[3]
		const addresssBvgaa0 = accounts[4]
		const uintYNrPkTE = BigInt("1792")
		const addressXycPd5y = accounts[5]
		const addressI0Kv92X = accounts[1]
		const uint256ToppQVv = await TimeMinerDOQRvoI.allowance.call(addresssBvgaa0, addressgFT9cyV, {from: "0x0000000000000000000000000000000000000001"});
		const boolBmQPmFf = await TimeMinerDOQRvoI.approve.call(addressXycPd5y, uintYNrPkTE, {from: accounts[0]});
		const uint256l8B0b5Z = await TimeMinerDOQRvoI.allInfoFor.call(addressI0Kv92X, {from: accounts[5]});
		const boolySvblCq = await TimeMinerDOQRvoI.infoStableSystem.call({from: accounts[4]});
	});
})