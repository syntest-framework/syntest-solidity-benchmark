const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerge7iyOL = await TimeMiner.new({from: accounts[3]});
		const uintb5IVO3n = BigInt("1665")
		const boolIDPBdHm = true
		const addressj6o9hz7 = accounts[1]
		const uintdimsaal = BigInt("529")
		const addressJ0fu604 = accounts[2]
		const uintBt0PuAe = BigInt("871")
		const boolBpvmmSd = false
		const addressIPz8KLM = accounts[3]
		const addresssAB9NGV = "0x0000000000000000000000000000000000000001"
//		const uintRPB5kMt = await TimeMinerge7iyOL.preSale.call(uintb5IVO3n, {from: accounts[1]});
//		const addressOI9DGNy = await TimeMinerge7iyOL.whitelist.call(addressj6o9hz7, boolIDPBdHm, {from: accounts[0]});
//		const boolyTckrdF = await TimeMinerge7iyOL.transfer.call(addressJ0fu604, uintdimsaal, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256rx5XgY1 = await TimeMinerge7iyOL.changePreSalePriceIfToHigh.call(uintBt0PuAe, {from: accounts[0]});
//		const addressPvVoid6 = await TimeMinerge7iyOL.whitelist.call(addressIPz8KLM, boolBpvmmSd, {from: accounts[5]});
//		const uint256DY6BgJG = await TimeMinerge7iyOL.balanceOf.call(addresssAB9NGV, {from: accounts[2]});

		await expect(TimeMinerge7iyOL.preSale.call(uintb5IVO3n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiners1gaE00 = await TimeMiner.new({from: accounts[4]});
		const uintmvUpm1b = BigInt("1528")
		const addressWIgPWaZ = "0x0000000000000000000000000000000000000001"
		const addresswfRkkCB = accounts[5]
		const uintpcO75Ur = BigInt("1460")
		const uintGWWTUZ0 = BigInt("661")
		const uintmIjiV3p = BigInt("262")
//		const boolklU7JHN = await TimeMiners1gaE00.transfer.call(addressWIgPWaZ, uintmvUpm1b, {from: accounts[1]});
//		const uint256ydmzGPL = await TimeMiners1gaE00.balanceOfTokenCirculation.call(addresswfRkkCB, {from: accounts[1]});
//		const uint256NopfJcs = await TimeMiners1gaE00.setPrizeFromNewAddress.call(uintGWWTUZ0, uintpcO75Ur, {from: accounts[4]});
//		const uintAuGIoPJ = await TimeMiners1gaE00.preSale.call(uintmIjiV3p, {from: accounts[3]});
//		const boolgsvNvNP = await TimeMiners1gaE00.infoStableSystem.call({from: accounts[1]});

		await expect(TimeMiners1gaE00.transfer.call(addressWIgPWaZ, uintmvUpm1b, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerwWuhewr = await TimeMiner.new({from: accounts[3]});
//		await TimeMinerwWuhewr.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"});
//		await TimeMinerwWuhewr.preSaleFinished.call({from: accounts[0]});

		await expect(TimeMinerwWuhewr.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerl6a13bx = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addresspIocXqg = accounts[4]
		const addresspedeRH7 = accounts[1]
		const addressMoNXUmp = accounts[4]
		const addressXoTN0D = "0x0000000000000000000000000000000000000001"
		const uint256dJAFzN = await TimeMinerl6a13bx.allowance.call(addresspedeRH7, addresspIocXqg, {from: accounts[3]});
		const uint256FAAzQoz = await TimeMinerl6a13bx.balanceOf.call(addressMoNXUmp, {from: accounts[3]});
		const uint256jp9vej = await TimeMinerl6a13bx.balanceOf.call(addressXoTN0D, {from: accounts[0]});
		const booluAzSmc = await TimeMinerl6a13bx.infoStableSystem.call({from: accounts[1]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerSJqI6TX = await TimeMiner.new({from: accounts[4]});
		const boolOv0iFi7 = true
		const addresszz4W4Er = accounts[5]
//		const boolDAdCv8Y = await TimeMinerSJqI6TX.setStableCoinSystem.call(boolOv0iFi7, {from: accounts[1]});
//		const uint256hZ8loVX = await TimeMinerSJqI6TX.balanceOfTokenCirculation.call(addresszz4W4Er, {from: accounts[1]});

		await expect(TimeMinerSJqI6TX.setStableCoinSystem.call(boolOv0iFi7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPytz0EN = await TimeMiner.new({from: accounts[5]});
		const addressA6eROhi = accounts[0]
		const addressPrJFsw4 = accounts[4]
		const uintupJlStm = BigInt("80")
		const addressqO3hBzW = accounts[2]
		const addressIc4UwjL = accounts[3]
		const bool1AWnzI = await TimeMinerPytz0EN.isWhitelisted.call(addressA6eROhi, {from: accounts[2]});
		const uint256PBWb0CE = await TimeMinerPytz0EN.balanceOf.call(addressPrJFsw4, {from: accounts[1]});
		const booltIkaHQA = await TimeMinerPytz0EN.approve.call(addressqO3hBzW, uintupJlStm, {from: accounts[1]});
//		const uint256TLlqCwA = await TimeMinerPytz0EN.tokensToClaim.call(addressIc4UwjL, {from: accounts[1]});

		assert.equal(bool1AWnzI, false)
		assert.equal(booltIkaHQA, true)
		assert.equal(uint256PBWb0CE, BigInt("0"))
		await expect(TimeMinerPytz0EN.tokensToClaim.call(addressIc4UwjL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerwgjW89G = await TimeMiner.new({from: accounts[0]});
		const boolkYtXJip = false
		const addresseT94Be = accounts[1]
		const addresskIFBywG = accounts[3]
		const addressubuamz0 = accounts[5]
//		const addressvqNBkVg = await TimeMinerwgjW89G.whitelist.call(addresseT94Be, boolkYtXJip, {from: accounts[2]});
//		const boolCbTzMc9 = await TimeMinerwgjW89G.isWhitelisted.call(addresskIFBywG, {from: accounts[2]});
//		const uint256K0ODjuq = await TimeMinerwgjW89G.tokensToClaim.call(addressubuamz0, {from: accounts[4]});

		await expect(TimeMinerwgjW89G.whitelist.call(addresseT94Be, boolkYtXJip, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerjkLUWON = await TimeMiner.new({from: accounts[5]});
		const addresswGduExm = accounts[1]
		const addressVWL7we4 = accounts[3]
		const addressk734npu = accounts[1]
		const addressfmzdKLG = accounts[5]
		const boolpPlocb = await TimeMinerjkLUWON.infoStableSystem.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256t7fmVgr = await TimeMinerjkLUWON.balanceOf.call(addresswGduExm, {from: accounts[2]});
		const boolS4diHsN = await TimeMinerjkLUWON.isWhitelisted.call(addressVWL7we4, {from: accounts[3]});
		const boolM9ar1Ta = await TimeMinerjkLUWON.isWhitelisted.call(addressk734npu, {from: accounts[0]});
		const uint256q450II0 = await TimeMinerjkLUWON.balanceOfTokenCirculation.call(addressfmzdKLG, {from: accounts[0]});

		assert.equal(boolM9ar1Ta, false)
		assert.equal(boolS4diHsN, false)
		assert.equal(uint256q450II0, BigInt("24000000"))
		assert.equal(uint256t7fmVgr, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerJXz69S = await TimeMiner.new({from: accounts[0]});
		const addressTv7kmd6 = accounts[3]
		const addressxr621W9 = accounts[2]
		const uintxs5ykIL = BigInt("668")
		const addressmwdZIAP = accounts[1]
		const boolwCkZFhA = true
		const boolbisiJYZ = false
		const addressollu3J3 = accounts[0]
		const addressbrPnqGS = accounts[5]
		const boolUN1Y3jC = await TimeMinerJXz69S.isWhitelisted.call(addressTv7kmd6, {from: "0x0000000000000000000000000000000000000001"});
		const boolAxp3qgQ = await TimeMinerJXz69S.isWhitelisted.call(addressxr621W9, {from: accounts[3]});
		const boolxgUNdUv = await TimeMinerJXz69S.transfer.call(addressmwdZIAP, uintxs5ykIL, {from: accounts[0]});
//		const boolr1z9Bew = await TimeMinerJXz69S.setStableCoinSystem.call(boolwCkZFhA, {from: accounts[2]});
//		const boolDYPUPQu = await TimeMinerJXz69S.setStableCoinSystem.call(boolbisiJYZ, {from: accounts[4]});
//		const uint256zIdAUB5 = await TimeMinerJXz69S.allowance.call(addressbrPnqGS, addressollu3J3, {from: accounts[4]});

		assert.equal(boolAxp3qgQ, false)
		assert.equal(boolUN1Y3jC, false)
		assert.equal(boolxgUNdUv, true)
		await expect(TimeMinerJXz69S.setStableCoinSystem.call(boolwCkZFhA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerJXz69S = await TimeMiner.new({from: accounts[0]});
		const uintbgYxUDB = BigInt("1044")
		const uintSKBkPL5 = BigInt("364")
		const addressKa3SLFP = accounts[3]
		const boolZjKhnrz = false
		const addresssMTPya4 = accounts[2]
		const uintTcTC31m = BigInt("668")
		const addresslF9d6jG = accounts[1]
		const boolwCkZFhA = true
		const boolbisiJYZ = true
		const addressTUJpOKZ = accounts[0]
		const addressboC2APC = accounts[5]
//		const uint256dxBKEe = await TimeMinerJXz69S.setPrizeFromNewAddress.call(uintSKBkPL5, uintbgYxUDB, {from: accounts[1]});
//		const boolUN1Y3jC = await TimeMinerJXz69S.isWhitelisted.call(addressKa3SLFP, {from: "0x0000000000000000000000000000000000000001"});
//		const booliJqsFMV = await TimeMinerJXz69S.setStableCoinSystem.call(boolZjKhnrz, {from: accounts[3]});
//		const boolAxp3qgQ = await TimeMinerJXz69S.isWhitelisted.call(addresssMTPya4, {from: accounts[3]});
//		const boolxgUNdUv = await TimeMinerJXz69S.transfer.call(addresslF9d6jG, uintTcTC31m, {from: accounts[0]});
//		const boolr1z9Bew = await TimeMinerJXz69S.setStableCoinSystem.call(boolwCkZFhA, {from: accounts[2]});
//		const boolDYPUPQu = await TimeMinerJXz69S.setStableCoinSystem.call(boolbisiJYZ, {from: accounts[4]});
//		const uint256zIdAUB5 = await TimeMinerJXz69S.allowance.call(addressboC2APC, addressTUJpOKZ, {from: accounts[4]});

		await expect(TimeMinerJXz69S.setPrizeFromNewAddress.call(uintSKBkPL5, uintbgYxUDB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerCE3K91 = await TimeMiner.new({from: accounts[4]});
		const addressCTiPBTL = accounts[2]
		const uintS2Dohi = BigInt("2013")
		const addressEyglrEI = accounts[1]
		const boolGWkhNrs = false
		const addressfmb3SS = accounts[0]
		const addresshGBWtv = accounts[0]
		const uint256z0KOPvt = await TimeMinerCE3K91.totalSupply.call({from: accounts[3]});
		const boolM2EJc03 = await TimeMinerCE3K91.isWhitelisted.call(addressCTiPBTL, {from: accounts[2]});
//		const bool5aVkeW = await TimeMinerCE3K91.transfer.call(addressEyglrEI, uintS2Dohi, {from: accounts[2]});
//		const addressAnIfDNu = await TimeMinerCE3K91.whitelist.call(addressfmb3SS, boolGWkhNrs, {from: accounts[1]});
//		const boolvYKNPZx = await TimeMinerCE3K91.isWhitelisted.call(addresshGBWtv, {from: accounts[0]});

		assert.equal(boolM2EJc03, false)
		assert.equal(uint256z0KOPvt, BigInt("24000000"))
		await expect(TimeMinerCE3K91.transfer.call(addressEyglrEI, uintS2Dohi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerGjQyXoh = await TimeMiner.new({from: accounts[3]});
		const uintcCyB0U1 = BigInt("898")
		const addresssIgT5G = accounts[3]
		const addressHu0LeTn = accounts[5]
		const addressvYVSyc = "0x0000000000000000000000000000000000000001"
//		const boollMwBAHg = await TimeMinerGjQyXoh.transferFrom.call(addressHu0LeTn, addresssIgT5G, uintcCyB0U1, {from: accounts[2]});
//		await TimeMinerGjQyXoh.preSaleFinished.call({from: accounts[2]});
//		const uint256d6e97C2 = await TimeMinerGjQyXoh.balanceOf.call(addressvYVSyc, {from: accounts[2]});

		await expect(TimeMinerGjQyXoh.transferFrom.call(addressHu0LeTn, addresssIgT5G, uintcCyB0U1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerJXz69S = await TimeMiner.new({from: accounts[0]});
		const addressvgYYCAh = accounts[3]
		const boolTGSEdPI = false
		const uintsM8tME = BigInt("690")
		const addressbcoGFAV = accounts[2]
		const uintDMqI71c = BigInt("571")
		const boolbisiJYZ = true
		const boolUN1Y3jC = await TimeMinerJXz69S.isWhitelisted.call(addressvgYYCAh, {from: "0x0000000000000000000000000000000000000001"});
		const boolHG4sqFS = await TimeMinerJXz69S.setStableCoinSystem.call(boolTGSEdPI, {from: accounts[0]});
		const boolxgUNdUv = await TimeMinerJXz69S.transfer.call(addressbcoGFAV, uintsM8tME, {from: accounts[0]});
//		const uint256mQPgGiE = await TimeMinerJXz69S.changePreSalePriceIfToHigh.call(uintDMqI71c, {from: accounts[1]});
//		const boolDYPUPQu = await TimeMinerJXz69S.setStableCoinSystem.call(boolbisiJYZ, {from: accounts[4]});

		assert.equal(boolUN1Y3jC, false)
		assert.equal(boolxgUNdUv, true)
		await expect(TimeMinerJXz69S.changePreSalePriceIfToHigh.call(uintDMqI71c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerJXz69S = await TimeMiner.new({from: accounts[0]});
		const addressVcYr2ZV = accounts[3]
		const addressh6hVDLZ = accounts[4]
		const addressDC1KMW = accounts[1]
		const addressGhM2e2h = accounts[1]
		const uintFQTvAlB = BigInt("1799")
		const addressVAttZLP = accounts[4]
		const addressEAXedoZ = accounts[4]
		const uintfLyQSWv = BigInt("1281")
		const addressfBbaHWT = accounts[3]
		const uintvf0ZVuq = BigInt("668")
		const addressyfIf4l = accounts[1]
		const uintyrwp96V = BigInt("90")
		const address5j4KW5 = accounts[1]
		const boolwCkZFhA = true
		const boolbisiJYZ = false
		const addressnX1tU4 = accounts[0]
		const addressPoVWP3y = accounts[0]
		const addressHqXwJQ = accounts[5]
		const addresslEHDPRu = accounts[4]
		const address0fQ93p = accounts[4]
		const boolUN1Y3jC = await TimeMinerJXz69S.isWhitelisted.call(addressVcYr2ZV, {from: "0x0000000000000000000000000000000000000001"});
		const boolAxp3qgQ = await TimeMinerJXz69S.isWhitelisted.call(addressh6hVDLZ, {from: accounts[3]});
		const uint256xLGIgc = await TimeMinerJXz69S.allowance.call(addressGhM2e2h, addressDC1KMW, {from: accounts[2]});
		const boolU7b2Hry = await TimeMinerJXz69S.infoStableSystem.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolZP3Q0Ml = await TimeMinerJXz69S.transfer.call(addressVAttZLP, uintFQTvAlB, {from: accounts[2]});
//		const uint256fMkJS4y = await TimeMinerJXz69S.balanceOf.call(addressEAXedoZ, {from: accounts[3]});
//		const boolBPfsHyL = await TimeMinerJXz69S.approve.call(addressfBbaHWT, uintfLyQSWv, {from: accounts[1]});
//		const boolxgUNdUv = await TimeMinerJXz69S.transfer.call(addressyfIf4l, uintvf0ZVuq, {from: accounts[0]});
//		const booloB3kp8 = await TimeMinerJXz69S.approve.call(address5j4KW5, uintyrwp96V, {from: accounts[5]});
//		const boolr1z9Bew = await TimeMinerJXz69S.setStableCoinSystem.call(boolwCkZFhA, {from: accounts[2]});
//		const boolDYPUPQu = await TimeMinerJXz69S.setStableCoinSystem.call(boolbisiJYZ, {from: accounts[4]});
//		const uint256OraXR2H = await TimeMinerJXz69S.tokensToClaim.call(addressnX1tU4, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256zIdAUB5 = await TimeMinerJXz69S.allowance.call(addressHqXwJQ, addressPoVWP3y, {from: accounts[4]});
//		const uint256ih4uz8Y = await TimeMinerJXz69S.allowance.call(address0fQ93p, addresslEHDPRu, {from: accounts[4]});

		assert.equal(boolAxp3qgQ, false)
		assert.equal(boolUN1Y3jC, false)
		assert.equal(uint256xLGIgc, BigInt("0"))
		await expect(TimeMinerJXz69S.transfer.call(addressVAttZLP, uintFQTvAlB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerJXz69S = await TimeMiner.new({from: accounts[0]});
		const addressMNFMTyO = accounts[4]
		const addressskzK7fm = accounts[1]
		const addressdbpNKlM = accounts[2]
		const addressqVi0OMf = accounts[3]
		const uintKM0ulVI = BigInt("690")
		const addressccxYjQ1 = accounts[1]
		const boolbisiJYZ = true
		const addressOxVdbw = accounts[0]
		const addressl5qmhM1 = accounts[6]
		const uint256M1YMad = await TimeMinerJXz69S.allowance.call(addressskzK7fm, addressMNFMTyO, {from: accounts[0]});
//		const uint256ZVnxsPm = await TimeMinerJXz69S.allInfoFor.call(addressdbpNKlM, {from: accounts[2]});
//		const boolUN1Y3jC = await TimeMinerJXz69S.isWhitelisted.call(addressqVi0OMf, {from: "0x0000000000000000000000000000000000000001"});
//		const boolxgUNdUv = await TimeMinerJXz69S.transfer.call(addressccxYjQ1, uintKM0ulVI, {from: accounts[0]});
//		const boolDYPUPQu = await TimeMinerJXz69S.setStableCoinSystem.call(boolbisiJYZ, {from: accounts[4]});
//		const uint256zIdAUB5 = await TimeMinerJXz69S.allowance.call(addressl5qmhM1, addressOxVdbw, {from: accounts[4]});

		assert.equal(uint256M1YMad, BigInt("0"))
		await expect(TimeMinerJXz69S.allInfoFor.call(addressdbpNKlM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerJXXBNyh = await TimeMiner.new({from: accounts[0]});
		const addressD1MSXwt = accounts[0]
		const addressVWQEi1T = accounts[4]
		const addressoHV1fYO = accounts[1]
//		await TimeMinerJXXBNyh.preSaleFinished.call({from: accounts[0]});
//		const bool4X8KYt = await TimeMinerJXXBNyh.infoStableSystem.call({from: accounts[4]});
//		const uint256qkMpiSF = await TimeMinerJXXBNyh.tokensToClaim.call(addressD1MSXwt, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256oYOeh07 = await TimeMinerJXXBNyh.allowance.call(addressoHV1fYO, addressVWQEi1T, {from: accounts[4]});

		await expect(TimeMinerJXXBNyh.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})