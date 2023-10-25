const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerbs9ZMxZ = await TimeMiner.new({from: accounts[2]});
		const uintvjImNav = BigInt("1448")
		const uinthdHzVnp = BigInt("1562")
		const addressYZlzJh6 = accounts[3]
//		await TimeMinerbs9ZMxZ.preSaleFinished.call({from: accounts[4]});
//		const uint256b7t5kS0 = await TimeMinerbs9ZMxZ.setPrizeFromNewAddress.call(uinthdHzVnp, uintvjImNav, {from: accounts[0]});
//		const uint256J7VEe9V = await TimeMinerbs9ZMxZ.balanceOf.call(addressYZlzJh6, {from: accounts[4]});

		await expect(TimeMinerbs9ZMxZ.preSaleFinished.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiners1DQNIm = await TimeMiner.new({from: accounts[5]});
		const addressdDZs9Ul = accounts[0]
		const boolt2Jm6rg = false
		const addressbmthxkO = accounts[4]
		const uint256QQNpToG = await TimeMiners1DQNIm.balanceOfTokenCirculation.call(addressdDZs9Ul, {from: accounts[0]});
//		await TimeMiners1DQNIm.preSaleFinished.call({from: accounts[5]});
//		const uint256stGurs = await TimeMiners1DQNIm.totalSupply.call({from: accounts[1]});
//		const boolDH73erx = await TimeMiners1DQNIm.infoStableSystem.call({from: accounts[5]});
//		const addresselgVFYP = await TimeMiners1DQNIm.whitelist.call(addressbmthxkO, boolt2Jm6rg, {from: accounts[0]});

		assert.equal(uint256QQNpToG, BigInt("0"))
		await expect(TimeMiners1DQNIm.preSaleFinished.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerPEfDqBr = await TimeMiner.new({from: accounts[4]});
		const booll53PpY = true
		const uintcIPoooy = BigInt("1511")
		const uintbASZwG1 = BigInt("450")
		const addresskt1cLgH = accounts[1]
//		const boolQTgmMM = await TimeMinerPEfDqBr.setStableCoinSystem.call(booll53PpY, {from: accounts[0]});
//		const booliPGj3Xt = await TimeMinerPEfDqBr.infoStableSystem.call({from: accounts[3]});
//		const uint256gQIarg = await TimeMinerPEfDqBr.setPrizeFromNewAddress.call(uintbASZwG1, uintcIPoooy, {from: accounts[3]});
//		const uint256iVIQIrh = await TimeMinerPEfDqBr.allInfoFor.call(addresskt1cLgH, {from: accounts[3]});

		await expect(TimeMinerPEfDqBr.setStableCoinSystem.call(booll53PpY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerI8FJlLi = await TimeMiner.new({from: accounts[5]});
		const uintSt5cm0T = BigInt("1078")
		const addressoyZ0Uxp = accounts[2]
		const addressk4WxkJn = accounts[0]
		const addressBrbl2ws = accounts[1]
		const boolcjlxGJq = await TimeMinerI8FJlLi.approve.call(addressoyZ0Uxp, uintSt5cm0T, {from: accounts[2]});
		const booldwGSNeC = await TimeMinerI8FJlLi.isWhitelisted.call(addressk4WxkJn, {from: accounts[1]});
		const uint256CMokwuh = await TimeMinerI8FJlLi.balanceOfTokenCirculation.call(addressBrbl2ws, {from: accounts[5]});

		assert.equal(boolcjlxGJq, true)
		assert.equal(booldwGSNeC, false)
		assert.equal(uint256CMokwuh, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerBetjVuK = await TimeMiner.new({from: accounts[2]});
		const addressv3xuho = accounts[3]
//		const uint256Lj5W6PP = await TimeMinerBetjVuK.tokensToClaim.call(addressv3xuho, {from: accounts[1]});
//		await TimeMinerBetjVuK.preSaleFinished.call({from: accounts[2]});

		await expect(TimeMinerBetjVuK.tokensToClaim.call(addressv3xuho, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerfHyCOjr = await TimeMiner.new({from: accounts[3]});
		const addressCVjM5BO = accounts[3]
		const addressa4AMwmK = accounts[4]
		const addresswQoiCCu = accounts[3]
		const addressnSryi6 = accounts[0]
		const addressnawcJ5p = accounts[0]
		const boollJbFxEa = await TimeMinerfHyCOjr.isWhitelisted.call(addressCVjM5BO, {from: accounts[1]});
		const uint256cLo5WtH = await TimeMinerfHyCOjr.allowance.call(addresswQoiCCu, addressa4AMwmK, {from: accounts[1]});
//		const uint256ox9yegZ = await TimeMinerfHyCOjr.allInfoFor.call(addressnSryi6, {from: accounts[3]});
//		const uint256nIL5SRR = await TimeMinerfHyCOjr.balanceOfTokenCirculation.call(addressnawcJ5p, {from: accounts[3]});

		assert.equal(boollJbFxEa, true)
		assert.equal(uint256cLo5WtH, BigInt("0"))
		await expect(TimeMinerfHyCOjr.allInfoFor.call(addressnSryi6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerdRt0yNa = await TimeMiner.new({from: accounts[5]});
		const uinta4bopZ = BigInt("748")
		const uintBRBgbcH = BigInt("1671")
		const uintTzfhcgx = BigInt("1126")
		const addressfvaUKyr = accounts[0]
		const boolPRNTbfJ = await TimeMinerdRt0yNa.infoStableSystem.call({from: accounts[2]});
//		const uint256yppARRg = await TimeMinerdRt0yNa.setPrizeFromNewAddress.call(uintBRBgbcH, uinta4bopZ, {from: accounts[3]});
//		const uintGFypSOi = await TimeMinerdRt0yNa.preSale.call(uintTzfhcgx, {from: accounts[4]});
//		const uint256FF8k6T0 = await TimeMinerdRt0yNa.balanceOfTokenCirculation.call(addressfvaUKyr, {from: accounts[1]});

		await expect(TimeMinerdRt0yNa.setPrizeFromNewAddress.call(uintBRBgbcH, uinta4bopZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerI8FJlLi = await TimeMiner.new({from: accounts[5]});
		const uintEQNXNPl = BigInt("1078")
		const addressrIOpRzQ = accounts[2]
		const addressRARrlVw = accounts[0]
		const uintW739vf = BigInt("1178")
		const addresssxeHbrE = accounts[0]
		const addressTT0B9d0 = accounts[0]
		const addressd0Uk6o = accounts[2]
		const addressBf41G6t = accounts[2]
		const boolcjlxGJq = await TimeMinerI8FJlLi.approve.call(addressrIOpRzQ, uintEQNXNPl, {from: accounts[2]});
		const booldwGSNeC = await TimeMinerI8FJlLi.isWhitelisted.call(addressRARrlVw, {from: accounts[1]});
//		const boolNTgazKU = await TimeMinerI8FJlLi.transferFrom.call(addressTT0B9d0, addresssxeHbrE, uintW739vf, {from: accounts[0]});
//		const uint256CMokwuh = await TimeMinerI8FJlLi.balanceOfTokenCirculation.call(addressd0Uk6o, {from: accounts[5]});
//		const uint256pojLZ8y = await TimeMinerI8FJlLi.tokensToClaim.call(addressBf41G6t, {from: accounts[3]});

		assert.equal(boolcjlxGJq, true)
		assert.equal(booldwGSNeC, false)
		await expect(TimeMinerI8FJlLi.transferFrom.call(addressTT0B9d0, addresssxeHbrE, uintW739vf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiners1DQNIm = await TimeMiner.new({from: accounts[5]});
		const addressRDf97pD = accounts[0]
		const uintElA2RZU = BigInt("1273")
		const addresszL93mQS = accounts[0]
		const addressCPayMPm = accounts[5]
		const addressfE1Odoj = accounts[2]
		const boolt2Jm6rg = false
		const addresspNDVYz = accounts[4]
		const uint256QQNpToG = await TimeMiners1DQNIm.balanceOfTokenCirculation.call(addressRDf97pD, {from: accounts[0]});
//		const bool1Xrj0Y = await TimeMiners1DQNIm.transfer.call(addresszL93mQS, uintElA2RZU, {from: accounts[0]});
//		await TimeMiners1DQNIm.preSaleFinished.call({from: accounts[5]});
//		const uint256uUmHPaI = await TimeMiners1DQNIm.balanceOf.call(addressCPayMPm, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256stGurs = await TimeMiners1DQNIm.totalSupply.call({from: accounts[1]});
//		const uint256OFSH17 = await TimeMiners1DQNIm.allInfoFor.call(addressfE1Odoj, {from: accounts[2]});
//		const boolDH73erx = await TimeMiners1DQNIm.infoStableSystem.call({from: accounts[5]});
//		const addresselgVFYP = await TimeMiners1DQNIm.whitelist.call(addresspNDVYz, boolt2Jm6rg, {from: accounts[0]});

		assert.equal(uint256QQNpToG, BigInt("0"))
		await expect(TimeMiners1DQNIm.transfer.call(addresszL93mQS, uintElA2RZU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiners1DQNIm = await TimeMiner.new({from: accounts[5]});
		const addressT5AOC1t = accounts[1]
		const uinthvsDiol = BigInt("405")
		const addressd3Pteg1 = "0x0000000000000000000000000000000000000001"
		const addressOlwcVfH = accounts[2]
		const boolt2Jm6rg = false
		const addressGBIQKWV = accounts[4]
		const uint256QQNpToG = await TimeMiners1DQNIm.balanceOfTokenCirculation.call(addressT5AOC1t, {from: accounts[0]});
//		await TimeMiners1DQNIm.preSaleFinished.call({from: accounts[5]});
//		const uint256stGurs = await TimeMiners1DQNIm.totalSupply.call({from: accounts[1]});
//		const uintT1D5F6p = await TimeMiners1DQNIm.preSale.call(uinthvsDiol, {from: accounts[3]});
//		const boolLnZPoZu = await TimeMiners1DQNIm.isWhitelisted.call(addressd3Pteg1, {from: accounts[1]});
//		const boolDH73erx = await TimeMiners1DQNIm.infoStableSystem.call({from: accounts[5]});
//		const uint256qRjGot4 = await TimeMiners1DQNIm.balanceOf.call(addressOlwcVfH, {from: "0x0000000000000000000000000000000000000001"});
//		const addresselgVFYP = await TimeMiners1DQNIm.whitelist.call(addressGBIQKWV, boolt2Jm6rg, {from: accounts[0]});

		assert.equal(uint256QQNpToG, BigInt("0"))
		await expect(TimeMiners1DQNIm.preSaleFinished.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiners1DQNIm = await TimeMiner.new({from: accounts[5]});
		const addressm1dAXI = accounts[1]
		const boolQdwjIt = true
		const boolEXNacpn = true
		const addressBqaico0 = accounts[4]
		const addressS7hzMbu = "0x0000000000000000000000000000000000000001"
		const addressb2JHGsN = accounts[2]
		const boolt2Jm6rg = false
		const addressWyh8NjZ = accounts[4]
		const uint256QQNpToG = await TimeMiners1DQNIm.balanceOfTokenCirculation.call(addressm1dAXI, {from: accounts[0]});
//		await TimeMiners1DQNIm.preSaleFinished.call({from: accounts[5]});
//		const boolcE6xelz = await TimeMiners1DQNIm.setStableCoinSystem.call(boolQdwjIt, {from: accounts[5]});
//		const uint256stGurs = await TimeMiners1DQNIm.totalSupply.call({from: accounts[1]});
//		const addressw0ds4rI = await TimeMiners1DQNIm.whitelist.call(addressBqaico0, boolEXNacpn, {from: accounts[2]});
//		const boolLnZPoZu = await TimeMiners1DQNIm.isWhitelisted.call(addressS7hzMbu, {from: accounts[1]});
//		const boolDH73erx = await TimeMiners1DQNIm.infoStableSystem.call({from: accounts[5]});
//		const uint256qRjGot4 = await TimeMiners1DQNIm.balanceOf.call(addressb2JHGsN, {from: "0x0000000000000000000000000000000000000001"});
//		const addresselgVFYP = await TimeMiners1DQNIm.whitelist.call(addressWyh8NjZ, boolt2Jm6rg, {from: accounts[0]});

		assert.equal(uint256QQNpToG, BigInt("0"))
		await expect(TimeMiners1DQNIm.preSaleFinished.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiners1DQNIm = await TimeMiner.new({from: accounts[5]});
		const addressqVTnMwq = accounts[1]
		const uintQt8spxY = BigInt("1824")
		const uintzgLDn43 = BigInt("411")
		const address1bJPOw = "0x0000000000000000000000000000000000000001"
		const addressreW1bMD = accounts[2]
		const uintkAThOvu = BigInt("1915")
		const addressSNrsPCI = accounts[3]
		const uintAMz6RYS = BigInt("1561")
		const addressGguLY7e = accounts[4]
		const boolt2Jm6rg = true
		const addressXFfOcp5 = accounts[4]
		const uint256QQNpToG = await TimeMiners1DQNIm.balanceOfTokenCirculation.call(addressqVTnMwq, {from: accounts[0]});
//		await TimeMiners1DQNIm.preSaleFinished.call({from: accounts[5]});
//		const uint256gOtHJMB = await TimeMiners1DQNIm.changePreSalePriceIfToHigh.call(uintQt8spxY, {from: accounts[5]});
//		const uint256stGurs = await TimeMiners1DQNIm.totalSupply.call({from: accounts[1]});
//		const uintT1D5F6p = await TimeMiners1DQNIm.preSale.call(uintzgLDn43, {from: accounts[3]});
//		const boolLnZPoZu = await TimeMiners1DQNIm.isWhitelisted.call(address1bJPOw, {from: accounts[1]});
//		const boolDH73erx = await TimeMiners1DQNIm.infoStableSystem.call({from: accounts[5]});
//		const uint256qRjGot4 = await TimeMiners1DQNIm.balanceOf.call(addressreW1bMD, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbnrAzB = await TimeMiners1DQNIm.approve.call(addressSNrsPCI, uintkAThOvu, {from: accounts[2]});
//		const boolEMkwYe3 = await TimeMiners1DQNIm.approve.call(addressGguLY7e, uintAMz6RYS, {from: accounts[2]});
//		const addresselgVFYP = await TimeMiners1DQNIm.whitelist.call(addressXFfOcp5, boolt2Jm6rg, {from: accounts[0]});

		assert.equal(uint256QQNpToG, BigInt("0"))
		await expect(TimeMiners1DQNIm.preSaleFinished.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiners1DQNIm = await TimeMiner.new({from: accounts[5]});
		const boolWk1PBf8 = false
		const addressqT21rGg = "0x0000000000000000000000000000000000000001"
		const addresspDijEg = accounts[0]
		const addresspEdhgOd = accounts[5]
		const boolt2Jm6rg = false
		const addressCvaZ2sX = accounts[4]
		const addressssYAtoz = await TimeMiners1DQNIm.whitelist.call(addressqT21rGg, boolWk1PBf8, {from: accounts[5]});
		const uint256LXX4FOA = await TimeMiners1DQNIm.totalSupply.call({from: accounts[4]});
		const uint256QQNpToG = await TimeMiners1DQNIm.balanceOfTokenCirculation.call(addresspDijEg, {from: accounts[0]});
		const uint256stGurs = await TimeMiners1DQNIm.totalSupply.call({from: accounts[1]});
		const boolsuP6KR = await TimeMiners1DQNIm.isWhitelisted.call(addresspEdhgOd, {from: accounts[0]});
//		const addresselgVFYP = await TimeMiners1DQNIm.whitelist.call(addressCvaZ2sX, boolt2Jm6rg, {from: accounts[0]});

		assert.equal(boolsuP6KR, true)
		assert.equal(uint256LXX4FOA, BigInt("24000000"))
		assert.equal(uint256QQNpToG, BigInt("0"))
		assert.equal(uint256stGurs, BigInt("24000000"))
		await expect(TimeMiners1DQNIm.whitelist.call(addressCvaZ2sX, boolt2Jm6rg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiners1DQNIm = await TimeMiner.new({from: accounts[5]});
		const addressUAG1h0p = accounts[0]
		const uintPnrBNhE = BigInt("1536")
		const uintZa3LUKv = BigInt("1977")
		const uint256QQNpToG = await TimeMiners1DQNIm.balanceOfTokenCirculation.call(addressUAG1h0p, {from: accounts[0]});
		const uint256eEnzzAL = await TimeMiners1DQNIm.setPrizeFromNewAddress.call(uintZa3LUKv, uintPnrBNhE, {from: accounts[5]});
//		await TimeMiners1DQNIm.preSaleFinished.call({from: accounts[5]});
//		const uint256stGurs = await TimeMiners1DQNIm.totalSupply.call({from: accounts[1]});

		assert.equal(uint256QQNpToG, BigInt("0"))
		await expect(TimeMiners1DQNIm.preSaleFinished.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerKtvaMvS = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKWqUGka = accounts[2]
		const addresshNFVsIv = accounts[2]
		const addressDYRXwss = accounts[3]
		const addresswUnfSd0 = accounts[0]
		const boolGVJFVmb = true
		const uint256IEyxUeU = await TimeMinerKtvaMvS.tokensToClaim.call(addressKWqUGka, {from: accounts[4]});
		const uint256UYP48gq = await TimeMinerKtvaMvS.totalSupply.call({from: accounts[1]});
		const uint256LogFGGV = await TimeMinerKtvaMvS.balanceOfTokenCirculation.call(addresshNFVsIv, {from: accounts[5]});
		const uint256X3dxt42 = await TimeMinerKtvaMvS.allowance.call(addresswUnfSd0, addressDYRXwss, {from: "0x0000000000000000000000000000000000000001"});
		const boolRGPfwsc = await TimeMinerKtvaMvS.setStableCoinSystem.call(boolGVJFVmb, {from: accounts[4]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerbgvB12I = await TimeMiner.new({from: accounts[1]});
		const uintRtGdvH8 = BigInt("777")
		const addresstacVlyj = accounts[4]
		const addressYRTMrZN = accounts[3]
		const addressHlzrImf = accounts[4]
		const addressOPKs8a = accounts[4]
		const boolhG3B0JD = await TimeMinerbgvB12I.transfer.call(addresstacVlyj, uintRtGdvH8, {from: accounts[1]});
//		const uint256TGb3ksT = await TimeMinerbgvB12I.allInfoFor.call(addressYRTMrZN, {from: accounts[3]});
//		const boolluaVQan = await TimeMinerbgvB12I.isWhitelisted.call(addressHlzrImf, {from: accounts[2]});
//		const uint256LhClZkn = await TimeMinerbgvB12I.allInfoFor.call(addressOPKs8a, {from: accounts[5]});

		assert.equal(boolhG3B0JD, true)
		await expect(TimeMinerbgvB12I.allInfoFor.call(addressYRTMrZN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerx6xuexF = await TimeMiner.new({from: accounts[4]});
		const uinte1t3i5q = BigInt("1926")
		const addressIhXJ8Ua = "0x00000000000000000000000000000000000000-1"
		const addressHuLF2DG = accounts[1]
//		const boolummkYVm = await TimeMinerx6xuexF.transferFrom.call(addressHuLF2DG, addressIhXJ8Ua, uinte1t3i5q, {from: accounts[5]});

		await expect(TimeMinerx6xuexF.transferFrom.call(addressHuLF2DG, addressIhXJ8Ua, uinte1t3i5q, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})