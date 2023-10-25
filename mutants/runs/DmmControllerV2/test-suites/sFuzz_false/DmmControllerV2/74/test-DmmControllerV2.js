const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const addressT75qvfD = "0x0000000000000000000000000000000000000001"
		const addressD4ebIc6 = accounts[4]
		const addressIWxRALg = accounts[2]
		const addressiyuXYb5 = accounts[2]
		const addressxXiy6Gv = accounts[2]
		const addressdCgeOAu = accounts[0]
		const addressGUfW6UM = accounts[2]
		const addressVMgoq1f = accounts[0]
		const addresspwsp1hf = accounts[3]
		const uintz25uIAJ = BigInt("912")
		const uintclhp0g = BigInt("1207")
		const addressPUdTaB = accounts[0]
		const DmmControllerV2fXVTb0S = await DmmControllerV2.new(addressT75qvfD, addressD4ebIc6, addressIWxRALg, addressiyuXYb5, addressxXiy6Gv, addressdCgeOAu, addressGUfW6UM, addressVMgoq1f, addresspwsp1hf, uintz25uIAJ, uintclhp0g, addressPUdTaB, {from: accounts[5]});
		const addressOYsYefl = accounts[0]
		const addressckAxjU9 = await DmmControllerV2fXVTb0S.setDmmEtherFactory.call(addressOYsYefl, {from: accounts[0]});
		const uintCakZR46 = await DmmControllerV2fXVTb0S.getActiveCollateralization.call({from: accounts[3]});
		await DmmControllerV2fXVTb0S.initializer.call({from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressfwPoypK = accounts[3]
		const addressfcAaYDe = accounts[2]
		const addressabmsdlN = "0x0000000000000000000000000000000000000001"
		const address8oaw8m = accounts[1]
		const addressDcjDbR3 = accounts[2]
		const addresstxp2fvz = accounts[0]
		const addresshnQdmR6 = accounts[3]
		const addressJQX85U = accounts[0]
		const addresspqzb4b1 = accounts[0]
		const uintFcFpQsE = BigInt("1422")
		const uintdfCaoUw = BigInt("2040")
		const addressOlEagsy = accounts[4]
		const DmmControllerV2UPlX99E = await DmmControllerV2.new(addressfwPoypK, addressfcAaYDe, addressabmsdlN, address8oaw8m, addressDcjDbR3, addresstxp2fvz, addresshnQdmR6, addressJQX85U, addresspqzb4b1, uintFcFpQsE, uintdfCaoUw, addressOlEagsy, {from: accounts[2]});
		const uintjUNOGdB = BigInt("992")
		const addressf3YSuhr = accounts[1]
		const boolLVIVS8R = await DmmControllerV2UPlX99E.isMarketEnabledByDmmTokenId.call(uintjUNOGdB, {from: accounts[2]});
		await DmmControllerV2UPlX99E.pause.call({from: accounts[1]});
		await DmmControllerV2UPlX99E.pause.call({from: accounts[4]});
		const addresspoLKv8 = await DmmControllerV2UPlX99E.transferOwnership.call(addressf3YSuhr, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const DmmControllerV2PaCCcgb = await DmmControllerV2.new({from: accounts[0]});
		const addressrjd2g5d = accounts[3]
		const addressOiosxl0 = accounts[1]
		const uintFEDZdTu = BigInt("1843")
		const uintmjizcO = await DmmControllerV2PaCCcgb.getInterestRateByDmmTokenAddress.call(addressrjd2g5d, {from: accounts[1]});
		await DmmControllerV2PaCCcgb.renounceOwnership.call({from: accounts[4]});
		const addresszGrPbc2 = await DmmControllerV2PaCCcgb.setInterestRateInterface.call(addressOiosxl0, {from: "0x0000000000000000000000000000000000000001"});
		const addressaFA9NFK = await DmmControllerV2PaCCcgb.getDmmTokenAddressByDmmTokenId.call(uintFEDZdTu, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressewgNbhw = accounts[4]
		const addressNHoSwZH = accounts[0]
		const address1G7dRV = accounts[3]
		const addressghxrnBA = accounts[1]
		const addressOOH9V9Q = accounts[2]
		const addresspAf6hIc = accounts[3]
		const addressH0OHeS6 = accounts[3]
		const addressbWziIiO = accounts[5]
		const addressguMljHK = accounts[3]
		const uintTnkr1Ws = BigInt("648")
		const uintKpmjqj = BigInt("826")
		const addressBq9ciKX = accounts[5]
		const DmmControllerV2uxBa9XE = await DmmControllerV2.new(addressewgNbhw, addressNHoSwZH, address1G7dRV, addressghxrnBA, addressOOH9V9Q, addresspAf6hIc, addressH0OHeS6, addressbWziIiO, addressguMljHK, uintTnkr1Ws, uintKpmjqj, addressBq9ciKX, {from: accounts[5]});
		const addressXZIbK02 = accounts[0]
		const addresszHhxWxe = accounts[4]
		const addresscWtZkKI = accounts[1]
		const 
aghbtSZ = await DmmControllerV2uxBa9XE.initialize.call(addresszHhxWxe, addressXZIbK02, {from: accounts[4]});
		const addressvn5SXPB = await DmmControllerV2uxBa9XE.setInterestRateInterface.call(addresscWtZkKI, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressNVZq0Kl = accounts[1]
		const addressrL0UDm6 = accounts[1]
		const addressfd75Rtl = accounts[1]
		const addressPueH8mn = accounts[2]
		const addressRsg46s0 = accounts[2]
		const addressnrqDZBZ = accounts[5]
		const addressSlnhGTS = accounts[1]
		const addressQJZDVll = accounts[0]
		const addressOuhn7HR = accounts[3]
		const uintoQT25gn = BigInt("1242")
		const uintFoCQnLz = BigInt("304")
		const addressdbMK5Ay = accounts[3]
		const DmmControllerV2X9qlZZK = await DmmControllerV2.new(addressNVZq0Kl, addressrL0UDm6, addressfd75Rtl, addressPueH8mn, addressRsg46s0, addressnrqDZBZ, addressSlnhGTS, addressQJZDVll, addressOuhn7HR, uintoQT25gn, uintFoCQnLz, addressdbMK5Ay, {from: "0x0000000000000000000000000000000000000001"});
		const uintFO2v1LN = BigInt("22")
		const addressvrfFDXi = accounts[3]
		await DmmControllerV2X9qlZZK.onlyBlacklister.call({from: accounts[1]});
		const uintRWZEVL = await DmmControllerV2X9qlZZK.disableMarket.call(uintFO2v1LN, {from: accounts[0]});
		const addresseTR4SGC = await DmmControllerV2X9qlZZK.setOffChainCurrencyValuator.call(addressvrfFDXi, {from: accounts[1]});
		const uintPTmnDMX = await DmmControllerV2X9qlZZK.getTotalCollateralization.call({from: accounts[3]});
		await DmmControllerV2X9qlZZK.requireIsFromAssetIntroducer.call({from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressquB7YNz = accounts[4]
		const addressLx0QJ3P = accounts[0]
		const addressuMpAswk = accounts[3]
		const addressM7yQOs5 = accounts[1]
		const addressfiEMHKO = accounts[2]
		const addressL0MixEB = accounts[3]
		const addressPn603u2 = accounts[3]
		const addresskiRtL6P = accounts[5]
		const addressitWRtL = accounts[3]
		const uintb7bAWC6 = BigInt("648")
		const uintnElzUvG = BigInt("826")
		const addresstCPItov = accounts[5]
		const DmmControllerV2uxBa9XE = await DmmControllerV2.new(addressquB7YNz, addressLx0QJ3P, addressuMpAswk, addressM7yQOs5, addressfiEMHKO, addressL0MixEB, addressPn603u2, addresskiRtL6P, addressitWRtL, uintb7bAWC6, uintnElzUvG, addresstCPItov, {from: accounts[5]});
		const address42Zj02 = accounts[0]
		const addressRCeP9Pd = accounts[4]
		const addressgmAJep3 = accounts[1]
		await DmmControllerV2uxBa9XE.pause.call({from: accounts[1]});
		const 
aghbtSZ = await DmmControllerV2uxBa9XE.initialize.call(addressRCeP9Pd, address42Zj02, {from: accounts[4]});
		const addressvn5SXPB = await DmmControllerV2uxBa9XE.setInterestRateInterface.call(addressgmAJep3, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressnacbMqX = accounts[4]
		const addressRm7jZXI = accounts[0]
		const addressB5z3zvY = accounts[3]
		const addressjOI4vOg = accounts[1]
		const addressQ0gidoo = accounts[2]
		const addressKwbPUh = accounts[3]
		const addresslTnOL7S = accounts[3]
		const addressqLKXxa4 = accounts[5]
		const addressJwY033M = accounts[3]
		const uintlBveLe = BigInt("648")
		const uintInQIb1y = BigInt("826")
		const addressyztUIp0 = accounts[5]
		const DmmControllerV2uxBa9XE = await DmmControllerV2.new(addressnacbMqX, addressRm7jZXI, addressB5z3zvY, addressjOI4vOg, addressQ0gidoo, addressKwbPUh, addresslTnOL7S, addressqLKXxa4, addressJwY033M, uintlBveLe, uintInQIb1y, addressyztUIp0, {from: accounts[5]});
		const addressNGlVX0w = accounts[3]
		const addressoc7Rzmo = accounts[4]
		const uintiuY3IJ9 = BigInt("1754")
		await DmmControllerV2uxBa9XE.renouncePauser.call({from: accounts[1]});
		const addressTXwJsp = await DmmControllerV2uxBa9XE.owner.call({from: accounts[0]});
		const 
aghbtSZ = await DmmControllerV2uxBa9XE.initialize.call(addressoc7Rzmo, addressNGlVX0w, {from: accounts[4]});
		const addressZu8sNZR = await DmmControllerV2uxBa9XE.getDmmTokenAddressByDmmTokenId.call(uintiuY3IJ9, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressaqt7zhC = accounts[4]
		const addressUt6ytiC = accounts[0]
		const addresspLqYj7x = accounts[3]
		const addressQQPiVM1 = accounts[1]
		const addressNTizc85 = accounts[2]
		const addressN3w2muF = accounts[3]
		const addressAyUzVBx = accounts[3]
		const addressGzm2DWQ = accounts[5]
		const addresscMyOfSH = accounts[3]
		const uint43z9Yl = BigInt("648")
		const uintzv0j2b1 = BigInt("826")
		const addressHWA5IZ = accounts[5]
		const DmmControllerV2uxBa9XE = await DmmControllerV2.new(addressaqt7zhC, addressUt6ytiC, addresspLqYj7x, addressQQPiVM1, addressNTizc85, addressN3w2muF, addressAyUzVBx, addressGzm2DWQ, addresscMyOfSH, uint43z9Yl, uintzv0j2b1, addressHWA5IZ, {from: accounts[5]});
		const addressM8hk653 = accounts[0]
		const addressH1WgiKW = accounts[1]
		const addressTUfJbzv = accounts[5]
		const addressqF7RhWi = await DmmControllerV2uxBa9XE.getDmmTokenForUnderlying.call(addressM8hk653, {from: accounts[0]});
		const 
aghbtSZ = await DmmControllerV2uxBa9XE.initialize.call(addressTUfJbzv, addressH1WgiKW, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressewyYX4b = accounts[4]
		const addressoUu0ly = accounts[0]
		const addressEIsuR8Q = accounts[3]
		const addressragLBBu = accounts[1]
		const addressg1AwIyD = accounts[2]
		const addressHO91IWG = accounts[3]
		const addressI5SjEv8 = accounts[3]
		const addressUWmiqQs = accounts[5]
		const addressyIw1F7 = accounts[3]
		const uintIkJqpxl = BigInt("648")
		const uinttec39M9 = BigInt("826")
		const addressjFfHNC3 = accounts[5]
		const DmmControllerV2uxBa9XE = await DmmControllerV2.new(addressewyYX4b, addressoUu0ly, addressEIsuR8Q, addressragLBBu, addressg1AwIyD, addressHO91IWG, addressI5SjEv8, addressUWmiqQs, addressyIw1F7, uintIkJqpxl, uinttec39M9, addressjFfHNC3, {from: accounts[5]});
		const uintkVGmZHu = BigInt("426")
		const addressgqI2pM1 = accounts[0]
		const addressGA3lzPy = accounts[5]
		const addressJBtZ8O3 = await DmmControllerV2uxBa9XE.getDmmTokenAddressByDmmTokenId.call(uintkVGmZHu, {from: accounts[3]});
		const 
aghbtSZ = await DmmControllerV2uxBa9XE.initialize.call(addressGA3lzPy, addressgqI2pM1, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressSllOYcY = accounts[4]
		const addressyRxPNE = accounts[0]
		const addressxppq5y8 = accounts[3]
		const addressMN5hL4w = accounts[1]
		const addressMwHV04d = accounts[2]
		const addressDzywlBq = accounts[3]
		const addressVd3sYlV = accounts[3]
		const addressJTCiSqt = accounts[5]
		const addresstGIxGev = accounts[3]
		const uintftBpuVV = BigInt("648")
		const uintfnwiwiR = BigInt("826")
		const addressl9XbFdg = accounts[5]
		const DmmControllerV2uxBa9XE = await DmmControllerV2.new(addressSllOYcY, addressyRxPNE, addressxppq5y8, addressMN5hL4w, addressMwHV04d, addressDzywlBq, addressVd3sYlV, addressJTCiSqt, addresstGIxGev, uintftBpuVV, uintfnwiwiR, addressl9XbFdg, {from: accounts[5]});
		const addressZqgxBKD = accounts[3]
		const addressuInw6RY = accounts[1]
		const address9DqMSJ = accounts[3]
		await DmmControllerV2uxBa9XE.pause.call({from: accounts[5]});
		const addressXzxvyTE = await DmmControllerV2uxBa9XE.setOffChainCurrencyValuator.call(addressZqgxBKD, {from: accounts[5]});
		const 
aghbtSZ = await DmmControllerV2uxBa9XE.initialize.call(address9DqMSJ, addressuInw6RY, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addresspXQ1QoM = accounts[4]
		const addressx4iN19y = accounts[0]
		const addressyIR4HuP = accounts[3]
		const addressF0ere7Y = accounts[1]
		const addressv5cXNJp = accounts[2]
		const addresstQLsMp = accounts[3]
		const address7lxoHf = accounts[3]
		const addressjSxlj1C = accounts[5]
		const addressMH1ybj = accounts[3]
		const uintZaCmW3V = BigInt("648")
		const uintkNPftX8 = BigInt("826")
		const addressrR4NYn6 = accounts[5]
		const DmmControllerV2uxBa9XE = await DmmControllerV2.new(addresspXQ1QoM, addressx4iN19y, addressyIR4HuP, addressF0ere7Y, addressv5cXNJp, addresstQLsMp, address7lxoHf, addressjSxlj1C, addressMH1ybj, uintZaCmW3V, uintkNPftX8, addressrR4NYn6, {from: accounts[5]});
		const addressizJo37 = accounts[1]
		const addressdxHSp8p = accounts[3]
		const uintzJsQQQ = await DmmControllerV2uxBa9XE.getActiveCollateralization.call({from: accounts[2]});
		const 
aghbtSZ = await DmmControllerV2uxBa9XE.initialize.call(addressdxHSp8p, addressizJo37, {from: accounts[4]});
		await DmmControllerV2uxBa9XE.onlyBlacklister.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressC0lNiw = accounts[4]
		const addressUyajplr = accounts[0]
		const addressuWeB70w = accounts[3]
		const addressZYpAz4P = accounts[1]
		const addressOdM906o = accounts[2]
		const addressnzRsYqn = accounts[3]
		const addressHIC5C4l = accounts[3]
		const addressM4Cp550 = accounts[5]
		const addressT3qwmoF = accounts[3]
		const uintzlhpRHf = BigInt("648")
		const uintW87iyID = BigInt("826")
		const addressoMV8ScS = accounts[5]
		const DmmControllerV2uxBa9XE = await DmmControllerV2.new(addressC0lNiw, addressUyajplr, addressuWeB70w, addressZYpAz4P, addressOdM906o, addressnzRsYqn, addressHIC5C4l, addressM4Cp550, addressT3qwmoF, uintzlhpRHf, uintW87iyID, addressoMV8ScS, {from: accounts[5]});
		const addressB2H0yIh = accounts[3]
		const addresstMBaM7W = accounts[0]
		const addressl2Aj82r = accounts[4]
		const addressJHAbsKq = await DmmControllerV2uxBa9XE.transferOwnership.call(addressB2H0yIh, {from: accounts[5]});
		const addresscNYlIyY = await DmmControllerV2uxBa9XE.guardian.call({from: "0x0000000000000000000000000000000000000001"});
		const 
aghbtSZ = await DmmControllerV2uxBa9XE.initialize.call(addressl2Aj82r, addresstMBaM7W, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressH6BIZRo = accounts[4]
		const addressn9JfWN = accounts[0]
		const addressZzeQYeG = accounts[3]
		const addressx83G8M = accounts[1]
		const addressoiIi56Y = accounts[2]
		const addressYJcahj = accounts[3]
		const addresswsIUk1t = accounts[3]
		const addresszYM43iR = accounts[5]
		const addressiO0U6HK = accounts[3]
		const uinth4msb8L = BigInt("648")
		const uintnSGZSXU = BigInt("826")
		const addresskzymXs8 = accounts[5]
		const DmmControllerV2uxBa9XE = await DmmControllerV2.new(addressH6BIZRo, addressn9JfWN, addressZzeQYeG, addressx83G8M, addressoiIi56Y, addressYJcahj, addresswsIUk1t, addresszYM43iR, addressiO0U6HK, uinth4msb8L, uintnSGZSXU, addresskzymXs8, {from: accounts[5]});
		const addressAKdmzfS = accounts[0]
		const addressQxoIu2S = accounts[5]
		const uintQd9mwWs = await DmmControllerV2uxBa9XE.getTotalCollateralization.call({from: accounts[5]});
		await DmmControllerV2uxBa9XE.unpause.call({from: accounts[4]});
		const 
aghbtSZ = await DmmControllerV2uxBa9XE.initialize.call(addressQxoIu2S, addressAKdmzfS, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addresslZRuQM = accounts[4]
		const addressnDAeYs3 = accounts[0]
		const addressakLhBrv = accounts[3]
		const addressxK5HWAc = accounts[1]
		const address1gdExp = accounts[2]
		const addressft441kw = accounts[3]
		const address0VydgC = accounts[3]
		const addresseSIknui = accounts[5]
		const addressTiYEMIq = accounts[3]
		const uintf26NRJq = BigInt("648")
		const uintTC1vXlL = BigInt("826")
		const addressESUeUP = accounts[5]
		const DmmControllerV2uxBa9XE = await DmmControllerV2.new(addresslZRuQM, addressnDAeYs3, addressakLhBrv, addressxK5HWAc, address1gdExp, addressft441kw, address0VydgC, addresseSIknui, addressTiYEMIq, uintf26NRJq, uintTC1vXlL, addressESUeUP, {from: accounts[5]});
		const address5TGpqs = accounts[3]
		const addressNf0MOWq = accounts[5]
		const addressu1qPjg5 = accounts[1]
		const addressUp3S5LW = accounts[4]
		const boolAuxq6eg = await DmmControllerV2uxBa9XE.paused.call({from: accounts[2]});
		const uintoctrga3 = await DmmControllerV2uxBa9XE.getInterestRateByUnderlyingTokenAddress.call(address5TGpqs, {from: accounts[2]});
		const addressg4aIAYz = await DmmControllerV2uxBa9XE.getDmmTokenForUnderlying.call(addressNf0MOWq, {from: accounts[5]});
		const 
aghbtSZ = await DmmControllerV2uxBa9XE.initialize.call(addressUp3S5LW, addressu1qPjg5, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addresswUqnAG5 = accounts[4]
		const addressZqKdDkW = accounts[0]
		const addressoTz9JR5 = accounts[3]
		const addressWWzjog = accounts[1]
		const addressXyi9Ju5 = accounts[2]
		const addressMN65neK = accounts[3]
		const addressP4Mtdvl = accounts[3]
		const addressDAFMMo = accounts[5]
		const addresso0dSkrh = accounts[3]
		const uintDNiomxN = BigInt("648")
		const uintosxSdID = BigInt("826")
		const addressNzqQyb6 = accounts[5]
		const DmmControllerV2uxBa9XE = await DmmControllerV2.new(addresswUqnAG5, addressZqKdDkW, addressoTz9JR5, addressWWzjog, addressXyi9Ju5, addressMN65neK, addressP4Mtdvl, addressDAFMMo, addresso0dSkrh, uintDNiomxN, uintosxSdID, addressNzqQyb6, {from: accounts[5]});
		const addressJvwDCHi = accounts[5]
		const addresswDqRZio = accounts[1]
		const addressOW2xuQD = accounts[1]
		const addressDPWFQg = accounts[3]
		const 
hthS54f = await DmmControllerV2uxBa9XE.setGuardian.call(addressJvwDCHi, {from: accounts[5]});
		const 
aghbtSZ = await DmmControllerV2uxBa9XE.initialize.call(addressOW2xuQD, addresswDqRZio, {from: accounts[4]});
		const addressq7YiyiV = await DmmControllerV2uxBa9XE.getDmmTokenForUnderlying.call(addressDPWFQg, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressZF0jDtP = accounts[4]
		const addresss23Jhhs = accounts[0]
		const addressV3hA6PS = accounts[3]
		const addressTGNJmJB = accounts[1]
		const addressprmFu1C = accounts[2]
		const address6eeDJg = accounts[3]
		const addressY8lVKWi = accounts[3]
		const addressD0btkms = accounts[5]
		const addressQyszXtV = accounts[3]
		const uintsGE41Fd = BigInt("648")
		const uintiAZGUIL = BigInt("826")
		const addressSOHYecC = accounts[5]
		const DmmControllerV2uxBa9XE = await DmmControllerV2.new(addressZF0jDtP, addresss23Jhhs, addressV3hA6PS, addressTGNJmJB, addressprmFu1C, address6eeDJg, addressY8lVKWi, addressD0btkms, addressQyszXtV, uintsGE41Fd, uintiAZGUIL, addressSOHYecC, {from: accounts[5]});
		const addressjvmXPzw = accounts[3]
		const addressDGoSKl6 = accounts[3]
		const addressGFi3ITs = accounts[4]
		const uintfzgXrk9 = await DmmControllerV2uxBa9XE.getExchangeRate.call(addressjvmXPzw, {from: accounts[0]});
		const 
aghbtSZ = await DmmControllerV2uxBa9XE.initialize.call(addressGFi3ITs, addressDGoSKl6, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressitNoqSK = accounts[4]
		const addressWZk89fW = accounts[0]
		const addressxiIOZrz = accounts[3]
		const addressdhbneWT = accounts[1]
		const addressgGnunaq = accounts[2]
		const addressPxaFZIf = accounts[3]
		const addressJJYWdWE = accounts[3]
		const addressxMIq9V4 = accounts[5]
		const addressHFAB9Sg = accounts[3]
		const uintO8t7yaT = BigInt("648")
		const uintaQtXARx = BigInt("826")
		const addressbEGVUAs = accounts[5]
		const DmmControllerV2uxBa9XE = await DmmControllerV2.new(addressitNoqSK, addressWZk89fW, addressxiIOZrz, addressdhbneWT, addressgGnunaq, addressPxaFZIf, addressJJYWdWE, addressxMIq9V4, addressHFAB9Sg, uintO8t7yaT, uintaQtXARx, addressbEGVUAs, {from: accounts[5]});
		const addressouaiTXM = accounts[1]
		const addressa9N6DBZ = accounts[5]
		await DmmControllerV2uxBa9XE.renounceOwnership.call({from: accounts[5]});
		const 
aghbtSZ = await DmmControllerV2uxBa9XE.initialize.call(addressa9N6DBZ, addressouaiTXM, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressODXdBC8 = accounts[4]
		const addressbg8Oktl = accounts[0]
		const addressJ6BlYmJ = accounts[3]
		const addressPkh2On8 = accounts[1]
		const addressUNjSIC5 = accounts[2]
		const addressOcXGgcB = accounts[3]
		const addresseXzJwpN = accounts[3]
		const addresskefBK1d = accounts[5]
		const addressYiYoZXT = accounts[3]
		const uintpEb77zS = BigInt("648")
		const uintirnUuii = BigInt("826")
		const addressxUy8sfQ = accounts[5]
		const DmmControllerV2uxBa9XE = await DmmControllerV2.new(addressODXdBC8, addressbg8Oktl, addressJ6BlYmJ, addressPkh2On8, addressUNjSIC5, addressOcXGgcB, addresseXzJwpN, addresskefBK1d, addressYiYoZXT, uintpEb77zS, uintirnUuii, addressxUy8sfQ, {from: accounts[5]});
		const addressPrhFLx3 = accounts[4]
		const addresspUr3wTK = accounts[0]
		const address9VzvjT = accounts[5]
		const addresskjR5eNH = await DmmControllerV2uxBa9XE.getUnderlyingTokenForDmm.call(addressPrhFLx3, {from: accounts[0]});
		const 
aghbtSZ = await DmmControllerV2uxBa9XE.initialize.call(address9VzvjT, addresspUr3wTK, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addresskNoUavg = accounts[4]
		const addressKf8Rwpu = accounts[0]
		const addressSj8WjS5 = accounts[3]
		const addresshP0j3H = accounts[1]
		const addressPKKKmu4 = accounts[2]
		const addressgusH9Tn = accounts[3]
		const addressrMpJ6ab = accounts[3]
		const addressXemXsV = accounts[5]
		const addressksjDZoK = accounts[3]
		const uintqdSwLMu = BigInt("648")
		const uintNjyG9me = BigInt("826")
		const addresszPwPmIr = accounts[5]
		const DmmControllerV2uxBa9XE = await DmmControllerV2.new(addresskNoUavg, addressKf8Rwpu, addressSj8WjS5, addresshP0j3H, addressPKKKmu4, addressgusH9Tn, addressrMpJ6ab, addressXemXsV, addressksjDZoK, uintqdSwLMu, uintNjyG9me, addresszPwPmIr, {from: accounts[5]});
		const addressSZ3wBtx = accounts[4]
		const addressSgpm0zC = accounts[0]
		const addressUEs8Obi = accounts[4]
		const boolo57Ovev = await DmmControllerV2uxBa9XE.isMarketEnabledByDmmTokenAddress.call(addressSZ3wBtx, {from: accounts[1]});
		const 
aghbtSZ = await DmmControllerV2uxBa9XE.initialize.call(addressUEs8Obi, addressSgpm0zC, {from: accounts[4]});
	});
})