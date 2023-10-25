const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerFktlvR = await TimeMiner.new({from: accounts[3]});
		const uintKlZdTmf = BigInt("924")
		const addressThzL1Ts = accounts[0]
		const addressuTbqfaq = accounts[2]
		const addresstsRSGeI = accounts[0]
		const addressU7z3ulj = accounts[5]
		const boolmMOSP0o = true
		const uintu0khwpp = BigInt("617")
		const uintqPpvyrx = BigInt("1268")
		const addressz8LPuVU = accounts[3]
		const uintY65dH9E = BigInt("736")
		const uintTzqGo3R = BigInt("1623")
		const boolZfjCEEH = await TimeMinerFktlvR.transferFrom.call(addressuTbqfaq, addressThzL1Ts, uintKlZdTmf, {from: accounts[1]});
		const uint256OAJhSFY = await TimeMinerFktlvR.allowance.call(addressU7z3ulj, addresstsRSGeI, {from: accounts[4]});
		const boolgLrFMsh = await TimeMinerFktlvR.setStableCoinSystem.call(boolmMOSP0o, {from: accounts[3]});
		const uint256VmrS9NK = await TimeMinerFktlvR.setPrizeFromNewAddress.call(uintqPpvyrx, uintu0khwpp, {from: accounts[3]});
		const uint256TgwayXm = await TimeMinerFktlvR.balanceOfTokenCirculation.call(addressz8LPuVU, {from: accounts[1]});
		const uint256Y7rUh45 = await TimeMinerFktlvR.setPrizeFromNewAddress.call(uintTzqGo3R, uintY65dH9E, {from: accounts[3]});

		await expect(TimeMinerFktlvR.transferFrom.call(addressuTbqfaq, addressThzL1Ts, uintKlZdTmf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerShmmOUI = await TimeMiner.new({from: accounts[1]});
		const addressLBcXyRG = accounts[0]
		const addressccm7fkj = accounts[2]
		const addressNZey6M7 = accounts[3]
		const boolYJf8Pc = true
		const addressFXL93vu = accounts[5]
		const addressrFIM9in = accounts[5]
		const uint256ogFrAHh = await TimeMinerShmmOUI.balanceOf.call(addressLBcXyRG, {from: accounts[2]});
		const boolnLOPpH = await TimeMinerShmmOUI.isWhitelisted.call(addressccm7fkj, {from: accounts[1]});
		const uint256FjEf9dv = await TimeMinerShmmOUI.tokensToClaim.call(addressNZey6M7, {from: accounts[4]});
		const boolqGE445I = await TimeMinerShmmOUI.infoStableSystem.call({from: accounts[2]});
		const boolYgeu2e = await TimeMinerShmmOUI.setStableCoinSystem.call(boolYJf8Pc, {from: accounts[2]});
		const uint256fwV6N4 = await TimeMinerShmmOUI.allowance.call(addressrFIM9in, addressFXL93vu, {from: accounts[5]});

		assert.equal(boolnLOPpH, false)
		assert.equal(uint256ogFrAHh, BigInt("0"))
		await expect(TimeMinerShmmOUI.tokensToClaim.call(addressNZey6M7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerzjWpy6u = await TimeMiner.new({from: accounts[4]});
		const addressxmVSArF = accounts[1]
		const uintaELNbJo = BigInt("306")
		const uintb11VF75 = BigInt("1555")
		const uint256M4GJiEQ = await TimeMinerzjWpy6u.totalSupply.call({from: accounts[2]});
		const uint256LU9xQBO = await TimeMinerzjWpy6u.balanceOf.call(addressxmVSArF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256m4vxHwj = await TimeMinerzjWpy6u.setPrizeFromNewAddress.call(uintb11VF75, uintaELNbJo, {from: accounts[0]});

		assert.equal(uint256LU9xQBO, BigInt("0"))
		assert.equal(uint256M4GJiEQ, BigInt("24000000"))
		await expect(TimeMinerzjWpy6u.setPrizeFromNewAddress.call(uintb11VF75, uintaELNbJo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineraoNSu0G = await TimeMiner.new({from: accounts[4]});
		const addressUApa7s5 = accounts[3]
		const addressY4VWPF2 = accounts[0]
		const addresso4eLuv = accounts[0]
		const boolxsBEBRE = false
		const addressZKKjDRx = accounts[0]
		const uint256LeLy1RW = await TimeMineraoNSu0G.allowance.call(addressY4VWPF2, addressUApa7s5, {from: accounts[3]});
		const uint256LRRoiDq = await TimeMineraoNSu0G.tokensToClaim.call(addresso4eLuv, {from: accounts[0]});
		const addressrcHr11q = await TimeMineraoNSu0G.whitelist.call(addressZKKjDRx, boolxsBEBRE, {from: accounts[4]});

		assert.equal(uint256LeLy1RW, BigInt("0"))
		await expect(TimeMineraoNSu0G.tokensToClaim.call(addresso4eLuv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerILBcFn7 = await TimeMiner.new({from: accounts[1]});
		const uinttMT2wYE = BigInt("1538")
		const boolQFSV4SM = false
		const addressoq2WzS1 = accounts[2]
		const uintIrjuRFd = BigInt("1326")
		const addressGoOR9NX = accounts[5]
		await TimeMinerILBcFn7.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"});
		const uinthFOaNCQ = await TimeMinerILBcFn7.preSale.call(uinttMT2wYE, {from: accounts[4]});
		const addressXTKIKDV = await TimeMinerILBcFn7.whitelist.call(addressoq2WzS1, boolQFSV4SM, {from: accounts[3]});
		const boolzMiehl = await TimeMinerILBcFn7.infoStableSystem.call({from: accounts[0]});
		const boolAjSblMp = await TimeMinerILBcFn7.approve.call(addressGoOR9NX, uintIrjuRFd, {from: accounts[3]});

		await expect(TimeMinerILBcFn7.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineruxYMkTq = await TimeMiner.new({from: accounts[2]});
		const uintUsueuIt = BigInt("581")
		const uintHrkHs0 = BigInt("1444")
		const uintqo5Ana = BigInt("2029")
		const addressqw1JdET = accounts[4]
		const uintrm7cJ8o = await TimeMineruxYMkTq.preSale.call(uintUsueuIt, {from: accounts[5]});
		const uint256TyH4by0 = await TimeMineruxYMkTq.changePreSalePriceIfToHigh.call(uintHrkHs0, {from: accounts[4]});
		const uint256TBMy9vD = await TimeMineruxYMkTq.totalSupply.call({from: accounts[4]});
		const uint256TquMk2b = await TimeMineruxYMkTq.totalSupply.call({from: accounts[3]});
		const boolH8Z7w5H = await TimeMineruxYMkTq.transfer.call(addressqw1JdET, uintqo5Ana, {from: accounts[4]});

		await expect(TimeMineruxYMkTq.preSale.call(uintUsueuIt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerxeucPFJ = await TimeMiner.new({from: accounts[3]});
		const boolhLJH79 = true
		const uintbYbj3p = BigInt("851")
		const uintFlLzsQ = BigInt("598")
		const booltQp8Fa = await TimeMinerxeucPFJ.setStableCoinSystem.call(boolhLJH79, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GDIiKdZ = await TimeMinerxeucPFJ.setPrizeFromNewAddress.call(uintFlLzsQ, uintbYbj3p, {from: accounts[5]});
		const boolt1Ex5eV = await TimeMinerxeucPFJ.infoStableSystem.call({from: accounts[0]});

		await expect(TimeMinerxeucPFJ.setStableCoinSystem.call(boolhLJH79, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinervvdK7mD = await TimeMiner.new({from: accounts[0]});
		const addressV2O6nDF = accounts[4]
		const boolr8rt5rf = false
		const addresslSLYeLh = accounts[1]
		const uint256U7NjLKr = await TimeMinervvdK7mD.allInfoFor.call(addressV2O6nDF, {from: "0x0000000000000000000000000000000000000001"});
		const addressEjj3e8T = await TimeMinervvdK7mD.whitelist.call(addresslSLYeLh, boolr8rt5rf, {from: accounts[2]});

		await expect(TimeMinervvdK7mD.allInfoFor.call(addressV2O6nDF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerTAJqtOa = await TimeMiner.new({from: accounts[0]});
		const boolVCsdpsO = false
		const addressKySrTqE = accounts[2]
		const addressK6HxIOD = accounts[1]
		const boolHSztwgh = true
		const addressNpPwUhE = accounts[0]
		const addressjIcxlpS = await TimeMinerTAJqtOa.whitelist.call(addressKySrTqE, boolVCsdpsO, {from: accounts[1]});
		const uint256QarUHHS = await TimeMinerTAJqtOa.balanceOf.call(addressK6HxIOD, {from: "0x0000000000000000000000000000000000000001"});
		const addressvNhnEcF = await TimeMinerTAJqtOa.whitelist.call(addressNpPwUhE, boolHSztwgh, {from: accounts[3]});

		await expect(TimeMinerTAJqtOa.whitelist.call(addressKySrTqE, boolVCsdpsO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerzjWpy6u = await TimeMiner.new({from: accounts[4]});
		const boolf7YT83W = true
		const addressSKYlBWW = accounts[1]
		const uintnlAPipc = BigInt("302")
		const uintbYavWX = BigInt("1555")
		const uint256M4GJiEQ = await TimeMinerzjWpy6u.totalSupply.call({from: accounts[2]});
		const boolllhxn36 = await TimeMinerzjWpy6u.setStableCoinSystem.call(boolf7YT83W, {from: accounts[4]});
		const uint256LU9xQBO = await TimeMinerzjWpy6u.balanceOf.call(addressSKYlBWW, {from: "0x0000000000000000000000000000000000000001"});
		const uint256m4vxHwj = await TimeMinerzjWpy6u.setPrizeFromNewAddress.call(uintbYavWX, uintnlAPipc, {from: accounts[0]});

		assert.equal(uint256LU9xQBO, BigInt("0"))
		assert.equal(uint256M4GJiEQ, BigInt("24000000"))
		await expect(TimeMinerzjWpy6u.setPrizeFromNewAddress.call(uintbYavWX, uintnlAPipc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerzjWpy6u = await TimeMiner.new({from: accounts[4]});
		const addressV1K431q = accounts[1]
		const uintt3xuzfg = BigInt("306")
		const uintGimjf8 = BigInt("1550")
		const boolEJkxu8I = await TimeMinerzjWpy6u.infoStableSystem.call({from: accounts[1]});
		const uint256M4GJiEQ = await TimeMinerzjWpy6u.totalSupply.call({from: accounts[2]});
		const uint256LU9xQBO = await TimeMinerzjWpy6u.balanceOf.call(addressV1K431q, {from: "0x0000000000000000000000000000000000000001"});
		const boolfcmZPl1 = await TimeMinerzjWpy6u.infoStableSystem.call({from: accounts[2]});
		const uint256m4vxHwj = await TimeMinerzjWpy6u.setPrizeFromNewAddress.call(uintGimjf8, uintt3xuzfg, {from: accounts[0]});

		assert.equal(uint256LU9xQBO, BigInt("0"))
		assert.equal(uint256M4GJiEQ, BigInt("24000000"))
		await expect(TimeMinerzjWpy6u.setPrizeFromNewAddress.call(uintGimjf8, uintt3xuzfg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerC6tzHnQ = await TimeMiner.new({from: accounts[3]});
		const boolv4SsCGK = false
		const uintDuC3Htq = BigInt("576")
		const boolcXf1CO = await TimeMinerC6tzHnQ.setStableCoinSystem.call(boolv4SsCGK, {from: accounts[3]});
		const uint256Ivd5szX = await TimeMinerC6tzHnQ.changePreSalePriceIfToHigh.call(uintDuC3Htq, {from: accounts[4]});

		await expect(TimeMinerC6tzHnQ.changePreSalePriceIfToHigh.call(uintDuC3Htq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerEGYIqp2 = await TimeMiner.new({from: accounts[5]});
		const uintJwQopkW = BigInt("58")
		const addressqUjV2xF = accounts[3]
		const uintVmscsj = BigInt("319")
		const uinty5n09c = BigInt("968")
		const boolZLWBFk = await TimeMinerEGYIqp2.transfer.call(addressqUjV2xF, uintJwQopkW, {from: "0x0000000000000000000000000000000000000001"});
		const uintpA1AFZT = await TimeMinerEGYIqp2.preSale.call(uintVmscsj, {from: accounts[0]});
		const uint256EScZAJo = await TimeMinerEGYIqp2.changePreSalePriceIfToHigh.call(uinty5n09c, {from: accounts[2]});

		await expect(TimeMinerEGYIqp2.transfer.call(addressqUjV2xF, uintJwQopkW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerIktsWEl = await TimeMiner.new({from: accounts[2]});
		const uintrJmtxI5 = BigInt("33")
		const uintTjYhGM2 = BigInt("1610")
		const booluHLYay6 = true
		const addressLaT3P4Q = accounts[5]
		const addressahMnwxY = accounts[1]
		const uintGvsrK2X = BigInt("1676")
		const addressimIRsQ6 = "0x0000000000000000000000000000000000000001"
		await TimeMinerIktsWEl.preSaleFinished.call({from: accounts[2]});
		await TimeMinerIktsWEl.preSaleFinished.call({from: accounts[5]});
		const uint256tPFPpuh = await TimeMinerIktsWEl.setPrizeFromNewAddress.call(uintTjYhGM2, uintrJmtxI5, {from: accounts[4]});
		const boolbv6BFva = await TimeMinerIktsWEl.setStableCoinSystem.call(booluHLYay6, {from: accounts[1]});
		const uint256U5eVl0v = await TimeMinerIktsWEl.allowance.call(addressahMnwxY, addressLaT3P4Q, {from: accounts[3]});
		const boolccy2H7 = await TimeMinerIktsWEl.approve.call(addressimIRsQ6, uintGvsrK2X, {from: accounts[5]});

		await expect(TimeMinerIktsWEl.preSaleFinished.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerWFqccfb = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSI0MtFa = accounts[1]
		const addresseqicICS = accounts[2]
		const addressH0EjdHO = "0x0000000000000000000000000000000000000001"
		const uintQ3Z1aml = BigInt("1816")
		const uint256khijcT2 = await TimeMinerWFqccfb.totalSupply.call({from: accounts[0]});
		const uint256PVMQCZt = await TimeMinerWFqccfb.allowance.call(addresseqicICS, addressSI0MtFa, {from: accounts[1]});
		const boolvnSaYUc = await TimeMinerWFqccfb.infoStableSystem.call({from: accounts[3]});
		const boolzSX0T7V = await TimeMinerWFqccfb.isWhitelisted.call(addressH0EjdHO, {from: accounts[1]});
		const uint2566HHiLY = await TimeMinerWFqccfb.changePreSalePriceIfToHigh.call(uintQ3Z1aml, {from: accounts[3]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerX6n5P6O = await TimeMiner.new({from: accounts[5]});
		const uintJXo4aN = BigInt("1344")
		const addressPtO9mF6 = "0x0000000000000000000000000000000000000001"
		const booldL8AT4t = await TimeMinerX6n5P6O.approve.call(addressPtO9mF6, uintJXo4aN, {from: accounts[2]});
		const boolc7rh0U = await TimeMinerX6n5P6O.infoStableSystem.call({from: accounts[2]});

		assert.equal(booldL8AT4t, true)
	});

	it('test for TimeMiner', async () => {
		const TimeMinerIktsWEl = await TimeMiner.new({from: accounts[2]});
		const uintqxXWMs4 = BigInt("1500")
		const addressM5kFOSe = accounts[3]
		const addressCjUeHp = "0x0000000000000000000000000000000000000001"
		const uintie7cYqr = BigInt("33")
		const uintsxK2eo4 = BigInt("1610")
		const addressYAu3FLz = accounts[2]
		const addresseL0yMb = accounts[4]
		const address5jXhpb = accounts[5]
		const addressrzWAURf = accounts[1]
		const addressm0PyjZ9 = accounts[2]
		const uintzdxD99o = BigInt("1676")
		const addressMVr92oc = "0x0000000000000000000000000000000000000001"
		await TimeMinerIktsWEl.preSaleFinished.call({from: accounts[2]});
		const uint256YwJ56xZ = await TimeMinerIktsWEl.changePreSalePriceIfToHigh.call(uintqxXWMs4, {from: accounts[2]});
		const uint256z4xykXB = await TimeMinerIktsWEl.balanceOfTokenCirculation.call(addressM5kFOSe, {from: accounts[0]});
		await TimeMinerIktsWEl.preSaleFinished.call({from: accounts[5]});
		const uint256Ig32iZA = await TimeMinerIktsWEl.tokensToClaim.call(addressCjUeHp, {from: accounts[2]});
		const uint256tPFPpuh = await TimeMinerIktsWEl.setPrizeFromNewAddress.call(uintsxK2eo4, uintie7cYqr, {from: accounts[4]});
		const uint256W1lWuxT = await TimeMinerIktsWEl.allowance.call(addresseL0yMb, addressYAu3FLz, {from: accounts[4]});
		const uint256U5eVl0v = await TimeMinerIktsWEl.allowance.call(addressrzWAURf, address5jXhpb, {from: accounts[3]});
		const uint256xITVtrL = await TimeMinerIktsWEl.balanceOf.call(addressm0PyjZ9, {from: accounts[2]});
		const boolccy2H7 = await TimeMinerIktsWEl.approve.call(addressMVr92oc, uintzdxD99o, {from: accounts[5]});

		await expect(TimeMinerIktsWEl.preSaleFinished.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerYmMIejU = await TimeMiner.new({from: accounts[2]});
		const uintZctJFG1 = BigInt("1155")
		const addresscmeklGZ = accounts[0]
		const uintAACkPj = BigInt("1276")
		const uinthC7BI9r = BigInt("534")
		const addressIVQfnp = accounts[0]
		const boolSkZ6fEd = true
		const addressa6JH2GW = accounts[2]
		const boolYfyFLHI = await TimeMinerYmMIejU.transfer.call(addresscmeklGZ, uintZctJFG1, {from: accounts[2]});
		const uintaW6Nfl = await TimeMinerYmMIejU.preSale.call(uintAACkPj, {from: accounts[2]});
		const boolZoa3Rma = await TimeMinerYmMIejU.approve.call(addressIVQfnp, uinthC7BI9r, {from: accounts[3]});
		const addressbt2bXxe = await TimeMinerYmMIejU.whitelist.call(addressa6JH2GW, boolSkZ6fEd, {from: accounts[0]});
		await TimeMinerYmMIejU.preSaleFinished.call({from: accounts[5]});

		assert.equal(boolYfyFLHI, true)
		await expect(TimeMinerYmMIejU.preSale.call(uintAACkPj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerzjWpy6u = await TimeMiner.new({from: accounts[4]});
		const boolK7UmtiU = true
		const addressGoIznmA = accounts[0]
		const addressW628RJf = accounts[0]
		const uintkYbfHol = BigInt("306")
		const uintotENHH7 = BigInt("1555")
		const addressZnihGZ9 = await TimeMinerzjWpy6u.whitelist.call(addressGoIznmA, boolK7UmtiU, {from: accounts[4]});
		const uint256XpRKTx = await TimeMinerzjWpy6u.tokensToClaim.call(addressW628RJf, {from: accounts[1]});
		const uint256m4vxHwj = await TimeMinerzjWpy6u.setPrizeFromNewAddress.call(uintotENHH7, uintkYbfHol, {from: accounts[0]});

		await expect(TimeMinerzjWpy6u.tokensToClaim.call(addressW628RJf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineryo6uQi8 = await TimeMiner.new({from: accounts[4]});
		const uintoOEPn1 = BigInt("409")
		const uintKDNb0qS = BigInt("1650")
		const boolE5zvrou = true
		const addressiEHSDy7 = accounts[2]
		const uintUU6es2x = BigInt("1692")
		const addressgiH5sY0 = accounts[1]
		const addressI8z9EYH = accounts[5]
		const uintd8Vclzv = BigInt("516")
		const address6RmKmR = accounts[1]
		const uint256CM9Asvg = await TimeMineryo6uQi8.setPrizeFromNewAddress.call(uintKDNb0qS, uintoOEPn1, {from: accounts[4]});
		const addressYmT082Q = await TimeMineryo6uQi8.whitelist.call(addressiEHSDy7, boolE5zvrou, {from: accounts[2]});
		const boolXXHBmMl = await TimeMineryo6uQi8.transferFrom.call(addressI8z9EYH, addressgiH5sY0, uintUU6es2x, {from: accounts[1]});
		const boolQoCyIxL = await TimeMineryo6uQi8.transfer.call(address6RmKmR, uintd8Vclzv, {from: accounts[1]});

		await expect(TimeMineryo6uQi8.whitelist.call(addressiEHSDy7, boolE5zvrou, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})