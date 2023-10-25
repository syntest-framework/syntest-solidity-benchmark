const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerEnjX7al = await TimeMiner.new({from: accounts[0]});
		const uintLwxU0Cd = BigInt("1930")
		const addressJ84ovB = accounts[3]
		const addressGIEeO8v = accounts[1]
		const addressrox2Qnv = accounts[1]
//		const boolV8Ta8qw = await TimeMinerEnjX7al.transferFrom.call(addressGIEeO8v, addressJ84ovB, uintLwxU0Cd, {from: accounts[5]});
//		const uint256G6xf3I = await TimeMinerEnjX7al.tokensToClaim.call(addressrox2Qnv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerEnjX7al.transferFrom.call(addressGIEeO8v, addressJ84ovB, uintLwxU0Cd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerVxpJeA2 = await TimeMiner.new({from: accounts[0]});
		const boolHoH9IuY = true
		const addressqQDR1b6 = accounts[0]
		const booltdNN6VF = await TimeMinerVxpJeA2.setStableCoinSystem.call(boolHoH9IuY, {from: accounts[0]});
		const uint256WsSGL44 = await TimeMinerVxpJeA2.totalSupply.call({from: accounts[4]});
		const boolIICtNhg = await TimeMinerVxpJeA2.infoStableSystem.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256RIyVeE = await TimeMinerVxpJeA2.totalSupply.call({from: accounts[3]});
		const uint256NTbGlT7 = await TimeMinerVxpJeA2.balanceOfTokenCirculation.call(addressqQDR1b6, {from: accounts[2]});

		assert.equal(uint256NTbGlT7, BigInt("24000000"))
		assert.equal(uint256RIyVeE, BigInt("24000000"))
		assert.equal(uint256WsSGL44, BigInt("24000000"))
	});

	it('test for TimeMiner', async () => {
		const TimeMineriuxbe3 = await TimeMiner.new({from: accounts[0]});
		const addressyjSklYX = accounts[0]
		const addressHBbUSqt = accounts[3]
		const uintnLktf99 = BigInt("22")
		const addressnYwrgn = accounts[4]
		const addressOWZITh = accounts[0]
		const addresslZi3A9f = accounts[3]
		const uintPQ4AD8s = BigInt("1350")
		const uint256pdWULRR = await TimeMineriuxbe3.allowance.call(addressHBbUSqt, addressyjSklYX, {from: accounts[0]});
//		const boolVJt5NNr = await TimeMineriuxbe3.transferFrom.call(addressOWZITh, addressnYwrgn, uintnLktf99, {from: accounts[5]});
//		const uint256nXeErzj = await TimeMineriuxbe3.allInfoFor.call(addresslZi3A9f, {from: accounts[0]});
//		const uint256lpQXtk6 = await TimeMineriuxbe3.changePreSalePriceIfToHigh.call(uintPQ4AD8s, {from: accounts[3]});
//		const boolnNbFo9W = await TimeMineriuxbe3.infoStableSystem.call({from: accounts[2]});
//		const uint256bETGNSf = await TimeMineriuxbe3.totalSupply.call({from: accounts[0]});

		assert.equal(uint256pdWULRR, BigInt("0"))
		await expect(TimeMineriuxbe3.transferFrom.call(addressOWZITh, addressnYwrgn, uintnLktf99, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerzBOwVh = await TimeMiner.new({from: accounts[3]});
		const uintCOV674u = BigInt("521")
		const uintnyKYf8q = BigInt("1300")
		const uintHOtkeZC = BigInt("320")
		const addressJOlBs4r = accounts[4]
//		const uint256gkaSlqY = await TimeMinerzBOwVh.changePreSalePriceIfToHigh.call(uintCOV674u, {from: accounts[2]});
//		const uint256PlNsOU0 = await TimeMinerzBOwVh.changePreSalePriceIfToHigh.call(uintnyKYf8q, {from: accounts[2]});
//		const boolEy5s0Cv = await TimeMinerzBOwVh.approve.call(addressJOlBs4r, uintHOtkeZC, {from: accounts[1]});

		await expect(TimeMinerzBOwVh.changePreSalePriceIfToHigh.call(uintCOV674u, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerYtEcaSy = await TimeMiner.new({from: accounts[3]});
		const uintHhywz9O = BigInt("934")
		const addressI6fGAGb = accounts[0]
		const addressqXIeubM = accounts[4]
		const addressT0QF9SP = accounts[4]
		const addressgR9fEfJ = accounts[2]
//		const uintPM9BkaP = await TimeMinerYtEcaSy.preSale.call(uintHhywz9O, {from: accounts[5]});
//		const uint256ErLvxdi = await TimeMinerYtEcaSy.balanceOf.call(addressI6fGAGb, {from: accounts[4]});
//		await TimeMinerYtEcaSy.preSaleFinished.call({from: accounts[1]});
//		const uint256iZuCnFE = await TimeMinerYtEcaSy.allowance.call(addressT0QF9SP, addressqXIeubM, {from: accounts[2]});
//		const booloM5yUXG = await TimeMinerYtEcaSy.isWhitelisted.call(addressgR9fEfJ, {from: accounts[0]});

		await expect(TimeMinerYtEcaSy.preSale.call(uintHhywz9O, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinercpd03OD = await TimeMiner.new({from: accounts[4]});
		const uintH9lrCmG = BigInt("434")
		const addressXoNVyBs = accounts[3]
		const addressRu2jqsR = accounts[2]
		const bool5B1hBh = false
//		const boolHakHR5s = await TimeMinercpd03OD.transfer.call(addressXoNVyBs, uintH9lrCmG, {from: accounts[3]});
//		const uint256uS5C7Xn = await TimeMinercpd03OD.balanceOf.call(addressRu2jqsR, {from: accounts[1]});
//		const uint256940EZu = await TimeMinercpd03OD.totalSupply.call({from: accounts[4]});
//		const boolB6v9Mwn = await TimeMinercpd03OD.setStableCoinSystem.call(bool5B1hBh, {from: accounts[0]});

		await expect(TimeMinercpd03OD.transfer.call(addressXoNVyBs, uintH9lrCmG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinervxF3IEP = await TimeMiner.new({from: accounts[4]});
		const addresshlfypCc = accounts[2]
		const addressPfw2cCh = accounts[2]
		const addressXbgdFsj = accounts[1]
		const addressUpEspoO = accounts[2]
		const boolsNHDyFY = await TimeMinervxF3IEP.isWhitelisted.call(addresshlfypCc, {from: accounts[4]});
//		const uint256PUWm2iV = await TimeMinervxF3IEP.allInfoFor.call(addressPfw2cCh, {from: accounts[3]});
//		const uint2564zkfkD = await TimeMinervxF3IEP.allowance.call(addressUpEspoO, addressXbgdFsj, {from: accounts[1]});

		assert.equal(boolsNHDyFY, false)
		await expect(TimeMinervxF3IEP.allInfoFor.call(addressPfw2cCh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinereXJ66Nc = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcEtFRts = BigInt("1847")
		const uintRRC5MG = BigInt("1051")
		const uintWQuRRQ7 = BigInt("380")
		const uintWyzUM6I = BigInt("1318")
		const addressGZDGaoj = accounts[3]
		const uintae3Lc0o = BigInt("434")
		const addressxgHTin = accounts[2]
		const uint256ECjr8MA = await TimeMinereXJ66Nc.setPrizeFromNewAddress.call(uintRRC5MG, uintcEtFRts, {from: accounts[0]});
		const uint256jpJflyT = await TimeMinereXJ66Nc.setPrizeFromNewAddress.call(uintWyzUM6I, uintWQuRRQ7, {from: accounts[2]});
		const uint256xdzl2e = await TimeMinereXJ66Nc.tokensToClaim.call(addressGZDGaoj, {from: "0x0000000000000000000000000000000000000001"});
		const uinttycMFM4 = await TimeMinereXJ66Nc.preSale.call(uintae3Lc0o, {from: accounts[0]});
		const boolyE9ZWbm = await TimeMinereXJ66Nc.isWhitelisted.call(addressxgHTin, {from: accounts[5]});
	});

	it('test for TimeMiner', async () => {
		const TimeMineroOJGiS = await TimeMiner.new({from: accounts[2]});
		const uintUPhEnbG = BigInt("656")
		const addressMWwSBeD = accounts[4]
		const uintMvC1CHC = BigInt("385")
		const addressAtzJsgL = accounts[0]
		const uintapqDweo = BigInt("147")
		const addressv0Dyb3 = accounts[1]
		const addressZPnxdk = accounts[0]
		const boolHHdS0O = await TimeMineroOJGiS.approve.call(addressMWwSBeD, uintUPhEnbG, {from: accounts[5]});
		const boolaZEHO4E = await TimeMineroOJGiS.transfer.call(addressAtzJsgL, uintMvC1CHC, {from: accounts[2]});
//		const uint256k6aSJBA = await TimeMineroOJGiS.changePreSalePriceIfToHigh.call(uintapqDweo, {from: accounts[3]});
//		const uint256fKWFQvd = await TimeMineroOJGiS.allInfoFor.call(addressv0Dyb3, {from: accounts[3]});
//		const uint256apkkoDO = await TimeMineroOJGiS.balanceOfTokenCirculation.call(addressZPnxdk, {from: accounts[4]});

		assert.equal(boolHHdS0O, true)
		assert.equal(boolaZEHO4E, true)
		await expect(TimeMineroOJGiS.changePreSalePriceIfToHigh.call(uintapqDweo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerYtEcaSy = await TimeMiner.new({from: accounts[3]});
		const addressubjBuId = accounts[1]
		const uint256ErLvxdi = await TimeMinerYtEcaSy.balanceOf.call(addressubjBuId, {from: accounts[4]});
//		await TimeMinerYtEcaSy.preSaleFinished.call({from: accounts[1]});

		assert.equal(uint256ErLvxdi, BigInt("0"))
		await expect(TimeMinerYtEcaSy.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineroOJGiS = await TimeMiner.new({from: accounts[2]});
		const uintYhSvzae = BigInt("20")
		const uintofVdrgo = BigInt("2000")
		const uintIdAhNJV = BigInt("656")
		const addressjF5qWeU = accounts[4]
		const uintaHtIn6M = BigInt("385")
		const addressAGvgDm4 = accounts[0]
		const uintoeJrUR7 = BigInt("147")
		const addressSK2o7u7 = accounts[1]
		const addressxaplufo = accounts[0]
//		const uint256a4Jhpci = await TimeMineroOJGiS.setPrizeFromNewAddress.call(uintofVdrgo, uintYhSvzae, {from: accounts[0]});
//		const boolHHdS0O = await TimeMineroOJGiS.approve.call(addressjF5qWeU, uintIdAhNJV, {from: accounts[5]});
//		await TimeMineroOJGiS.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolaZEHO4E = await TimeMineroOJGiS.transfer.call(addressAGvgDm4, uintaHtIn6M, {from: accounts[2]});
//		const uint256k6aSJBA = await TimeMineroOJGiS.changePreSalePriceIfToHigh.call(uintoeJrUR7, {from: accounts[3]});
//		const uint256fKWFQvd = await TimeMineroOJGiS.allInfoFor.call(addressSK2o7u7, {from: accounts[3]});
//		const uint256apkkoDO = await TimeMineroOJGiS.balanceOfTokenCirculation.call(addressxaplufo, {from: accounts[4]});

		await expect(TimeMineroOJGiS.setPrizeFromNewAddress.call(uintofVdrgo, uintYhSvzae, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineroOJGiS = await TimeMiner.new({from: accounts[2]});
		const uint4RAa04 = BigInt("656")
		const addressjNmO5jP = accounts[4]
		const uintnWlnost = BigInt("408")
		const addressIb6L5bC = accounts[0]
		const uinttk6h98 = BigInt("775")
		const uintkOYFHPa = BigInt("1088")
		const uintHBkTjoB = BigInt("147")
		const addressrt1u86e = accounts[1]
		const uintPXfbMk = BigInt("1737")
		const addressxoJThxA = accounts[1]
		const addressYfw7rsS = accounts[0]
		const boolHHdS0O = await TimeMineroOJGiS.approve.call(addressjNmO5jP, uint4RAa04, {from: accounts[5]});
		const boolaZEHO4E = await TimeMineroOJGiS.transfer.call(addressIb6L5bC, uintnWlnost, {from: accounts[2]});
		const uint256rwtORa = await TimeMineroOJGiS.setPrizeFromNewAddress.call(uintkOYFHPa, uinttk6h98, {from: accounts[2]});
//		const uint256k6aSJBA = await TimeMineroOJGiS.changePreSalePriceIfToHigh.call(uintHBkTjoB, {from: accounts[3]});
//		const uint256fKWFQvd = await TimeMineroOJGiS.allInfoFor.call(addressrt1u86e, {from: accounts[3]});
//		const boolx0sUMB4 = await TimeMineroOJGiS.approve.call(addressxoJThxA, uintPXfbMk, {from: accounts[1]});
//		const uint256apkkoDO = await TimeMineroOJGiS.balanceOfTokenCirculation.call(addressYfw7rsS, {from: accounts[4]});

		assert.equal(boolHHdS0O, true)
		assert.equal(boolaZEHO4E, true)
		await expect(TimeMineroOJGiS.changePreSalePriceIfToHigh.call(uintHBkTjoB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerzBOwVh = await TimeMiner.new({from: accounts[3]});
		const addressjsnwmNp = accounts[3]
		const boolLEAbwg = true
		const addressGXaqRcN = accounts[1]
		const uintpsae4Fu = BigInt("1301")
		const uint7hC01d = BigInt("320")
		const addressjmhWyg6 = accounts[4]
		const boolpSYE05c = await TimeMinerzBOwVh.isWhitelisted.call(addressjsnwmNp, {from: accounts[4]});
//		const addressxdpJi2O = await TimeMinerzBOwVh.whitelist.call(addressGXaqRcN, boolLEAbwg, {from: accounts[2]});
//		const uint256PlNsOU0 = await TimeMinerzBOwVh.changePreSalePriceIfToHigh.call(uintpsae4Fu, {from: accounts[2]});
//		const boolEy5s0Cv = await TimeMinerzBOwVh.approve.call(addressjmhWyg6, uint7hC01d, {from: accounts[1]});

		assert.equal(boolpSYE05c, true)
		await expect(TimeMinerzBOwVh.whitelist.call(addressGXaqRcN, boolLEAbwg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineroOJGiS = await TimeMiner.new({from: accounts[2]});
		const uintR1l5sge = BigInt("656")
		const addressqx8hxMc = accounts[4]
		const uinthWwz57p = BigInt("385")
		const addressNt9zgoK = accounts[0]
		const addressjkZFH5 = accounts[1]
		const addresslrxWwQh = accounts[0]
		const addressOpyPoVk = accounts[3]
		const addressEC3APyB = accounts[1]
		const boolHHdS0O = await TimeMineroOJGiS.approve.call(addressqx8hxMc, uintR1l5sge, {from: accounts[5]});
		const boolaZEHO4E = await TimeMineroOJGiS.transfer.call(addressNt9zgoK, uinthWwz57p, {from: accounts[2]});
//		await TimeMineroOJGiS.preSaleFinished.call({from: accounts[2]});
//		const uint256fKWFQvd = await TimeMineroOJGiS.allInfoFor.call(addressjkZFH5, {from: accounts[3]});
//		const uint256KhK4wfk = await TimeMineroOJGiS.allowance.call(addressOpyPoVk, addresslrxWwQh, {from: accounts[4]});
//		const uint256apkkoDO = await TimeMineroOJGiS.balanceOfTokenCirculation.call(addressEC3APyB, {from: accounts[4]});

		assert.equal(boolHHdS0O, true)
		assert.equal(boolaZEHO4E, true)
		await expect(TimeMineroOJGiS.preSaleFinished.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerzBOwVh = await TimeMiner.new({from: accounts[3]});
		const uintY0nO9IN = BigInt("1522")
		const addressYPWRN9 = accounts[0]
		const uinth72AO0x = BigInt("324")
		const uintbjK6HmP = BigInt("1353")
		const boolXvcjCk5 = await TimeMinerzBOwVh.transfer.call(addressYPWRN9, uintY0nO9IN, {from: accounts[3]});
		const uint256GrmjA7S = await TimeMinerzBOwVh.changePreSalePriceIfToHigh.call(uinth72AO0x, {from: accounts[3]});
//		const uint256PlNsOU0 = await TimeMinerzBOwVh.changePreSalePriceIfToHigh.call(uintbjK6HmP, {from: accounts[2]});

		assert.equal(boolXvcjCk5, true)
		await expect(TimeMinerzBOwVh.changePreSalePriceIfToHigh.call(uintbjK6HmP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerbdGF3KY = await TimeMiner.new({from: accounts[4]});
		const uintvjwrJIY = BigInt("325")
		const uintifLB8wl = BigInt("579")
		const boolUQ1oXiQ = true
		const addressXDx36ro = accounts[2]
		const uint256Tr6PIjy = await TimeMinerbdGF3KY.setPrizeFromNewAddress.call(uintifLB8wl, uintvjwrJIY, {from: accounts[4]});
		const boolIwtdLAo = await TimeMinerbdGF3KY.infoStableSystem.call({from: accounts[0]});
		const boolOGorfoF = await TimeMinerbdGF3KY.infoStableSystem.call({from: accounts[3]});
		const boolLbHO5qX = await TimeMinerbdGF3KY.infoStableSystem.call({from: accounts[1]});
		const addressxf0uT2z = await TimeMinerbdGF3KY.whitelist.call(addressXDx36ro, boolUQ1oXiQ, {from: accounts[4]});
	});
})