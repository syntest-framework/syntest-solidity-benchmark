const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMineryWPFEjw = await TimeMiner.new({from: accounts[4]});
		const bool8NzTL6 = false
		const uintozi6yJf = BigInt("799")
//		const boolZ5xrqdC = await TimeMineryWPFEjw.setStableCoinSystem.call(bool8NzTL6, {from: accounts[1]});
//		const uint25640gznC = await TimeMineryWPFEjw.totalSupply.call({from: accounts[3]});
//		const uint256hzZG8M = await TimeMineryWPFEjw.totalSupply.call({from: accounts[4]});
//		const uint256zKysyNI = await TimeMineryWPFEjw.changePreSalePriceIfToHigh.call(uintozi6yJf, {from: accounts[0]});

		await expect(TimeMineryWPFEjw.setStableCoinSystem.call(bool8NzTL6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinertlggRWn = await TimeMiner.new({from: accounts[2]});
		const uintsxU6kZ = BigInt("1729")
		const uintXAVBgKa = BigInt("1715")
		const addresspWq4XSR = accounts[1]
		const uintQJXd5TY = BigInt("1105")
		const boolsIGsvhM = true
		const addressEpNLLjA = accounts[1]
//		const uint256SD1fvOW = await TimeMinertlggRWn.changePreSalePriceIfToHigh.call(uintsxU6kZ, {from: accounts[5]});
//		const boolGTrWRZm = await TimeMinertlggRWn.transfer.call(addresspWq4XSR, uintXAVBgKa, {from: accounts[3]});
//		const boolFWIzzCb = await TimeMinertlggRWn.infoStableSystem.call({from: accounts[0]});
//		const uint256v9ugi2U = await TimeMinertlggRWn.changePreSalePriceIfToHigh.call(uintQJXd5TY, {from: accounts[3]});
//		const addressmCTzTPW = await TimeMinertlggRWn.whitelist.call(addressEpNLLjA, boolsIGsvhM, {from: accounts[4]});

		await expect(TimeMinertlggRWn.changePreSalePriceIfToHigh.call(uintsxU6kZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerVibfZ3j = await TimeMiner.new({from: accounts[4]});
		const uintVtoSM8Y = BigInt("844")
		const uintyXJa3N6 = BigInt("214")
		const uintlqRoKY6 = BigInt("405")
		const uintUMj9ibW = BigInt("44")
//		const uintjmfMVcm = await TimeMinerVibfZ3j.preSale.call(uintVtoSM8Y, {from: accounts[3]});
//		const uintT6IZD2U = await TimeMinerVibfZ3j.preSale.call(uintyXJa3N6, {from: accounts[1]});
//		const uint2561u80Ru = await TimeMinerVibfZ3j.totalSupply.call({from: accounts[3]});
//		const uint256IoY80wJ = await TimeMinerVibfZ3j.setPrizeFromNewAddress.call(uintUMj9ibW, uintlqRoKY6, {from: accounts[0]});

		await expect(TimeMinerVibfZ3j.preSale.call(uintVtoSM8Y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerBpkxnwb = await TimeMiner.new({from: accounts[0]});
		const addressERtyfoG = accounts[2]
		const uint6u6oSG = BigInt("1544")
		const addressxwUL54X = accounts[3]
		const booln5o7M5c = false
		const addressed2Ma6H = accounts[4]
		const address2c8fcx = accounts[3]
		const addressDl396lv = accounts[1]
//		const uint256D9fcS0 = await TimeMinerBpkxnwb.allInfoFor.call(addressERtyfoG, {from: accounts[5]});
//		const boolLYpPajO = await TimeMinerBpkxnwb.transfer.call(addressxwUL54X, uint6u6oSG, {from: accounts[3]});
//		const addressjs34wpf = await TimeMinerBpkxnwb.whitelist.call(addressed2Ma6H, booln5o7M5c, {from: accounts[2]});
//		const uint256UloFCqD = await TimeMinerBpkxnwb.allowance.call(addressDl396lv, address2c8fcx, {from: accounts[2]});

		await expect(TimeMinerBpkxnwb.allInfoFor.call(addressERtyfoG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerDLURxI = await TimeMiner.new({from: accounts[4]});
		const addressnjN2hgP = accounts[4]
		const uint256PUyiw06 = await TimeMinerDLURxI.totalSupply.call({from: accounts[0]});
		const uint256IZKeQJk = await TimeMinerDLURxI.balanceOf.call(addressnjN2hgP, {from: accounts[2]});
		const boolyZFqLL2 = await TimeMinerDLURxI.infoStableSystem.call({from: accounts[4]});
//		await TimeMinerDLURxI.preSaleFinished.call({from: accounts[1]});

		assert.equal(uint256IZKeQJk, BigInt("12000000"))
		assert.equal(uint256PUyiw06, BigInt("24000000"))
		await expect(TimeMinerDLURxI.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinercCVRj3J = await TimeMiner.new({from: accounts[2]});
		const uintGQBy4jS = BigInt("1321")
		const uintPtrWoFW = BigInt("70")
		const uintYUjFC1G = BigInt("1965")
		const address2gPMeA = accounts[0]
//		const uint2561N6hRJ = await TimeMinercCVRj3J.setPrizeFromNewAddress.call(uintPtrWoFW, uintGQBy4jS, {from: accounts[4]});
//		await TimeMinercCVRj3J.preSaleFinished.call({from: accounts[2]});
//		const uint5hK69g = await TimeMinercCVRj3J.preSale.call(uintYUjFC1G, {from: accounts[3]});
//		const uint256SN2RCQC = await TimeMinercCVRj3J.balanceOf.call(address2gPMeA, {from: accounts[4]});
//		await TimeMinercCVRj3J.preSaleFinished.call({from: accounts[5]});

		await expect(TimeMinercCVRj3J.setPrizeFromNewAddress.call(uintPtrWoFW, uintGQBy4jS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerBQ9ov1O = await TimeMiner.new({from: accounts[0]});
		const addressnSrlUO3 = accounts[4]
		const uintfj39xp1 = BigInt("274")
		const addressYz1OK3 = accounts[4]
		const uint256ZLCPjS = await TimeMinerBQ9ov1O.balanceOfTokenCirculation.call(addressnSrlUO3, {from: accounts[2]});
//		const boolmTJCzql = await TimeMinerBQ9ov1O.transfer.call(addressYz1OK3, uintfj39xp1, {from: accounts[2]});
//		await TimeMinerBQ9ov1O.preSaleFinished.call({from: accounts[3]});
//		const uint256WffIjls = await TimeMinerBQ9ov1O.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ZLCPjS, BigInt("0"))
		await expect(TimeMinerBQ9ov1O.transfer.call(addressYz1OK3, uintfj39xp1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineretFfzZ7 = await TimeMiner.new({from: accounts[5]});
		const addressxBiDOlV = accounts[5]
		const addressQbi3OOP = accounts[0]
		const boolWjLwIOx = true
		const boolptluvcD = true
		const addressQpwOHqG = accounts[2]
		const uintKbHEJTv = BigInt("1700")
		const uintdjsulAe = BigInt("341")
		const uint256x6TLGiw = await TimeMineretFfzZ7.allowance.call(addressQbi3OOP, addressxBiDOlV, {from: "0x0000000000000000000000000000000000000001"});
//		const bool1b6NRY = await TimeMineretFfzZ7.setStableCoinSystem.call(boolWjLwIOx, {from: accounts[1]});
//		const addressKOpmQnU = await TimeMineretFfzZ7.whitelist.call(addressQpwOHqG, boolptluvcD, {from: accounts[4]});
//		const uint256nG9303c = await TimeMineretFfzZ7.changePreSalePriceIfToHigh.call(uintKbHEJTv, {from: accounts[1]});
//		const uint256H9Et4j5 = await TimeMineretFfzZ7.changePreSalePriceIfToHigh.call(uintdjsulAe, {from: accounts[5]});

		assert.equal(uint256x6TLGiw, BigInt("0"))
		await expect(TimeMineretFfzZ7.setStableCoinSystem.call(boolWjLwIOx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerxTAK6ei = await TimeMiner.new({from: accounts[4]});
		const addressADGb5f1 = accounts[4]
		const uintxFDR6e = BigInt("226")
		const addressTKzBbKw = accounts[0]
		const boolfmhBO5E = await TimeMinerxTAK6ei.isWhitelisted.call(addressADGb5f1, {from: accounts[1]});
//		const boolvjtyaZR = await TimeMinerxTAK6ei.transfer.call(addressTKzBbKw, uintxFDR6e, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfmhBO5E, true)
		await expect(TimeMinerxTAK6ei.transfer.call(addressTKzBbKw, uintxFDR6e, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhj4u3CY = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressLYo16mq = accounts[1]
		const boolYINxlxN = false
		const addressEuwL2uK = accounts[4]
		const addresswBHA0e = accounts[3]
		const uintmdBVX9Z = BigInt("1817")
		const uintWBwNmxz = BigInt("1955")
		const addresshz5QxQo = accounts[2]
		const uint256UzJms7 = await TimeMinerhj4u3CY.balanceOfTokenCirculation.call(addressLYo16mq, {from: accounts[5]});
		const addressyVv2LtF = await TimeMinerhj4u3CY.whitelist.call(addressEuwL2uK, boolYINxlxN, {from: accounts[2]});
		const uint256s2Fcz9 = await TimeMinerhj4u3CY.balanceOf.call(addresswBHA0e, {from: accounts[5]});
		const uint256hBU20xd = await TimeMinerhj4u3CY.setPrizeFromNewAddress.call(uintWBwNmxz, uintmdBVX9Z, {from: accounts[1]});
		await TimeMinerhj4u3CY.preSaleFinished.call({from: accounts[3]});
		const uint256QUH21jq = await TimeMinerhj4u3CY.allInfoFor.call(addresshz5QxQo, {from: accounts[1]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerhghzJvA = await TimeMiner.new({from: accounts[2]});
		const addressQypIgJa = accounts[2]
		const uintpzXaYXO = BigInt("445")
		const addressJpxZn4 = accounts[3]
		const uint256ErawudK = await TimeMinerhghzJvA.tokensToClaim.call(addressQypIgJa, {from: accounts[1]});
		const boolvFUOWUg = await TimeMinerhghzJvA.approve.call(addressJpxZn4, uintpzXaYXO, {from: accounts[4]});

		assert.equal(boolvFUOWUg, true)
		assert.equal(uint256ErawudK, BigInt("12000000"))
	});

	it('test for TimeMiner', async () => {
		const TimeMineryWPFEjw = await TimeMiner.new({from: accounts[4]});
		const uintv01qfCF = BigInt("75")
		const addressTTpBQJ = accounts[0]
		const addressXKYCtF1 = accounts[5]
		const uintmfZZEb = BigInt("815")
		const uint2BbQNQ = BigInt("792")
//		const boolFAyM4Uo = await TimeMineryWPFEjw.transferFrom.call(addressXKYCtF1, addressTTpBQJ, uintv01qfCF, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256zKysyNI = await TimeMineryWPFEjw.changePreSalePriceIfToHigh.call(uintmfZZEb, {from: accounts[0]});
//		const uint256663uLX = await TimeMineryWPFEjw.changePreSalePriceIfToHigh.call(uint2BbQNQ, {from: accounts[2]});

		await expect(TimeMineryWPFEjw.transferFrom.call(addressXKYCtF1, addressTTpBQJ, uintv01qfCF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerVibfZ3j = await TimeMiner.new({from: accounts[4]});
		const uintaDEO8bz = BigInt("1356")
		const uintTyYx9c = BigInt("1484")
		const uintTXy3XXR = BigInt("379")
		const uintTBZGX9h = BigInt("44")
		const addressjcbwFOf = accounts[2]
		const uint256MUFAQpw = await TimeMinerVibfZ3j.setPrizeFromNewAddress.call(uintTyYx9c, uintaDEO8bz, {from: accounts[4]});
//		const uint256IoY80wJ = await TimeMinerVibfZ3j.setPrizeFromNewAddress.call(uintTBZGX9h, uintTXy3XXR, {from: accounts[0]});
//		const boolAI3hX2X = await TimeMinerVibfZ3j.isWhitelisted.call(addressjcbwFOf, {from: accounts[1]});

		await expect(TimeMinerVibfZ3j.setPrizeFromNewAddress.call(uintTBZGX9h, uintTXy3XXR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerxTAK6ei = await TimeMiner.new({from: accounts[4]});
		const boolH81o1VB = true
		const addresssFxcGWa = accounts[5]
		const boolgDwnpOY = await TimeMinerxTAK6ei.setStableCoinSystem.call(boolH81o1VB, {from: accounts[4]});
		const boolfmhBO5E = await TimeMinerxTAK6ei.isWhitelisted.call(addresssFxcGWa, {from: accounts[1]});
		const booln3NBrna = await TimeMinerxTAK6ei.infoStableSystem.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolfmhBO5E, false)
	});

	it('test for TimeMiner', async () => {
		const TimeMineryWPFEjw = await TimeMiner.new({from: accounts[4]});
		const boollk8LD6 = true
		const addressjNrMF3p = "0x0000000000000000000000000000000000000001"
		const uintqiD9iDL = BigInt("990")
		const addressBVBwfKO = accounts[3]
		const addressKGqj0Al = accounts[1]
		const bool8NzTL6 = true
//		const addressuExopeg = await TimeMineryWPFEjw.whitelist.call(addressjNrMF3p, boollk8LD6, {from: accounts[2]});
//		const boolYeDrYKy = await TimeMineryWPFEjw.transferFrom.call(addressKGqj0Al, addressBVBwfKO, uintqiD9iDL, {from: accounts[0]});
//		const boolZ5xrqdC = await TimeMineryWPFEjw.setStableCoinSystem.call(bool8NzTL6, {from: accounts[1]});

		await expect(TimeMineryWPFEjw.whitelist.call(addressjNrMF3p, boollk8LD6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerVibfZ3j = await TimeMiner.new({from: accounts[4]});
		const uintJywJAwn = BigInt("111")
		const addressbUHVZhj = accounts[1]
		const uintJv2IOhY = BigInt("943")
		const uint256v1gHhLg = await TimeMinerVibfZ3j.changePreSalePriceIfToHigh.call(uintJywJAwn, {from: accounts[4]});
		const boolxHWVivS = await TimeMinerVibfZ3j.isWhitelisted.call(addressbUHVZhj, {from: accounts[0]});
//		const uintjmfMVcm = await TimeMinerVibfZ3j.preSale.call(uintJv2IOhY, {from: accounts[3]});

		assert.equal(boolxHWVivS, false)
		await expect(TimeMinerVibfZ3j.preSale.call(uintJv2IOhY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineryWPFEjw = await TimeMiner.new({from: accounts[4]});
		const uintyMaeCm = BigInt("2047")
		const addressWE5dYc = accounts[0]
		const boolJvVqjsI = true
		const uintQlXdvtX = BigInt("75")
		const addressR9YQwpV = accounts[0]
		const addresscL8kXKj = accounts[5]
		const uintlYFyM85 = BigInt("1886")
		const uintzyu8eEY = BigInt("2004")
		const boolmUTXSKN = await TimeMineryWPFEjw.transfer.call(addressWE5dYc, uintyMaeCm, {from: accounts[4]});
//		const boolUJ17Njl = await TimeMineryWPFEjw.setStableCoinSystem.call(boolJvVqjsI, {from: accounts[0]});
//		const boolFAyM4Uo = await TimeMineryWPFEjw.transferFrom.call(addresscL8kXKj, addressR9YQwpV, uintQlXdvtX, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256NKzbIvm = await TimeMineryWPFEjw.setPrizeFromNewAddress.call(uintzyu8eEY, uintlYFyM85, {from: accounts[4]});

		assert.equal(boolmUTXSKN, true)
		await expect(TimeMineryWPFEjw.setStableCoinSystem.call(boolJvVqjsI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerVibfZ3j = await TimeMiner.new({from: accounts[4]});
		const addressXK8uPv2 = accounts[4]
		const addressRaNztRV = accounts[0]
		const uint9Vn8PZ = BigInt("1708")
		const uint256kDsmVp = await TimeMinerVibfZ3j.allowance.call(addressRaNztRV, addressXK8uPv2, {from: accounts[4]});
//		await TimeMinerVibfZ3j.preSaleFinished.call({from: accounts[4]});
//		const uintjmfMVcm = await TimeMinerVibfZ3j.preSale.call(uint9Vn8PZ, {from: accounts[3]});

		assert.equal(uint256kDsmVp, BigInt("0"))
		await expect(TimeMinerVibfZ3j.preSaleFinished.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineryWPFEjw = await TimeMiner.new({from: accounts[4]});
		const boolyO5vUlh = false
		const addressdOAnwvw = accounts[3]
		const addressB5SLgRV = accounts[3]
		const uintfTpRAoa = BigInt("1674")
		const addressDM6a0r = accounts[0]
		const addressRjaHpNe = await TimeMineryWPFEjw.whitelist.call(addressdOAnwvw, boolyO5vUlh, {from: accounts[4]});
		const uint256eS2bB6M = await TimeMineryWPFEjw.balanceOfTokenCirculation.call(addressB5SLgRV, {from: accounts[2]});
		const boolmUTXSKN = await TimeMineryWPFEjw.transfer.call(addressDM6a0r, uintfTpRAoa, {from: accounts[4]});

		assert.equal(boolmUTXSKN, true)
		assert.equal(uint256eS2bB6M, BigInt("0"))
	});
})