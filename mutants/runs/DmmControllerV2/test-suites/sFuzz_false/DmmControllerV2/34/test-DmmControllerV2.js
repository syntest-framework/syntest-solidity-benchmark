const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const DmmControllerV2NnjFVel = await DmmControllerV2.new({from: accounts[0]});
		await DmmControllerV2NnjFVel.requireIsFromAssetIntroducer.call({from: accounts[1]});
		const boolXuVm1ah = await DmmControllerV2NnjFVel.paused.call({from: accounts[0]});
		await DmmControllerV2NnjFVel.whenPaused.call({from: accounts[0]});
		await DmmControllerV2NnjFVel.whenNotPaused.call({from: accounts[1]});
		await DmmControllerV2NnjFVel.onlyBlacklister.call({from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressKl2gm9k = accounts[1]
		const addressfBVdXR = "0x0000000000000000000000000000000000000001"
		const addressL2WOCOF = accounts[3]
		const addressMioi1bN = accounts[0]
		const addressX92ZUtp = "0x0000000000000000000000000000000000000001"
		const addressDFEiEq0 = accounts[0]
		const addresssRC5ooH = accounts[3]
		const addressVnxeBv = accounts[2]
		const addressz9rOpSi = accounts[5]
		const uintTqb5Nty = BigInt("983")
		const uintvKkmoOo = BigInt("532")
		const addressRJRrLrX = accounts[0]
		const DmmControllerV2bW5co1O = await DmmControllerV2.new(addressKl2gm9k, addressfBVdXR, addressL2WOCOF, addressMioi1bN, addressX92ZUtp, addressDFEiEq0, addresssRC5ooH, addressVnxeBv, addressz9rOpSi, uintTqb5Nty, uintvKkmoOo, addressRJRrLrX, {from: accounts[1]});
		const addressQyQ4jSx = "0x0000000000000000000000000000000000000001"
		const addressEuFSDfs = accounts[0]
		const addressGNrKpyQ = accounts[0]
		const uintlrB0Yjl = BigInt("1422")
		const uintul07ep = BigInt("372")
		const uintiUC9WB2 = BigInt("354")
		const 
sQd8aQG = await DmmControllerV2bW5co1O.setCollateralizationCalculator.call(addressQyQ4jSx, {from: "0x0000000000000000000000000000000000000001"});
		const addressPCCOKQI = await DmmControllerV2bW5co1O.setUnderlyingTokenValuator.call(addressEuFSDfs, {from: accounts[3]});
		const addressZfl66D6 = await DmmControllerV2bW5co1O.unBlacklist.call(addressGNrKpyQ, {from: accounts[2]});
		const uintJVQanXL = await DmmControllerV2bW5co1O.requireIsValidNft.call(uintlrB0Yjl, {from: accounts[5]});
		const 
Td29HQ8 = await DmmControllerV2bW5co1O.increaseTotalSupply.call(uintiUC9WB2, uintul07ep, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressL343Nq = accounts[1]
		const addressmZY4Na5 = accounts[0]
		const addressEJlOcgy = accounts[0]
		const addressTYxFC3i = accounts[1]
		const addressHSa56AP = accounts[0]
		const addresse1VyoZ = accounts[5]
		const addressFuqXpx5 = accounts[2]
		const addressFariN71 = accounts[2]
		const addressorcVR5l = "0x0000000000000000000000000000000000000001"
		const uintKl3IXpl = BigInt("111")
		const uintkERyLy = BigInt("1316")
		const addressfbTFwhg = accounts[2]
		const DmmControllerV2CRqRV8Q = await DmmControllerV2.new(addressL343Nq, addressmZY4Na5, addressEJlOcgy, addressTYxFC3i, addressHSa56AP, addresse1VyoZ, addressFuqXpx5, addressFariN71, addressorcVR5l, uintKl3IXpl, uintkERyLy, addressfbTFwhg, {from: accounts[1]});
		const uintPVU5Uiz = BigInt("1805")
		const addressJFVFv37 = accounts[3]
		const uintLpqJ3pA = BigInt("1630")
		await DmmControllerV2CRqRV8Q.requireIsFromAssetIntroducer.call({from: accounts[1]});
		const uintrVkFhFP = await DmmControllerV2CRqRV8Q.disableMarket.call(uintPVU5Uiz, {from: accounts[1]});
		const addressE9igkzA = await DmmControllerV2CRqRV8Q.blacklist.call(addressJFVFv37, {from: accounts[2]});
		const uintEKlimg6 = await DmmControllerV2CRqRV8Q.setMinReserveRatio.call(uintLpqJ3pA, {from: accounts[0]});
		await DmmControllerV2CRqRV8Q.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addressatDQh1M = accounts[1]
		const addressjL5ddBT = accounts[0]
		const addressOVJNgvK = accounts[4]
		const addressZ2CD05g = accounts[2]
		const addressrCiJ3b7 = "0x0000000000000000000000000000000000000001"
		const addressYTeM1m = accounts[2]
		const addressdR2voti = "0x0000000000000000000000000000000000000001"
		const addressTcMvXi2 = accounts[1]
		const addressGPjvRhc = accounts[5]
		const uintQl9Dim = BigInt("763")
		const uintV7n00KR = BigInt("1759")
		const addressCbJTkw6 = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2PFgDieA = await DmmControllerV2.new(addressatDQh1M, addressjL5ddBT, addressOVJNgvK, addressZ2CD05g, addressrCiJ3b7, addressYTeM1m, addressdR2voti, addressTcMvXi2, addressGPjvRhc, uintQl9Dim, uintV7n00KR, addressCbJTkw6, {from: "0x0000000000000000000000000000000000000001"});
		const addresssntkc4T = "0x0000000000000000000000000000000000000001"
		const uintRfDg7zD = BigInt("671")
		const addressOlMHKVo = accounts[3]
		const addressaEtML3Z = accounts[5]
		const addressOxCZZr1 = await DmmControllerV2PFgDieA.getDmmTokenForUnderlying.call(addresssntkc4T, {from: accounts[1]});
		const addresssL5QI7q = await DmmControllerV2PFgDieA.getDmmTokenAddressByDmmTokenId.call(uintRfDg7zD, {from: accounts[2]});
		const 
W9zAHBp = await DmmControllerV2PFgDieA.transferOwnership.call(addressOlMHKVo, {from: accounts[4]});
		const addressReC5MjM = await DmmControllerV2PFgDieA.setInterestRateInterface.call(addressaEtML3Z, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressbP7HXQt = accounts[0]
		const addressiIjyLAH = accounts[0]
		const addressvsHqOj = accounts[1]
		const addressK5NJlxN = accounts[1]
		const addressN6qXQaf = accounts[0]
		const addressjG63pAm = accounts[0]
		const addressLOEArSW = accounts[3]
		const addressQC4jYax = accounts[4]
		const addresskZve8eB = accounts[5]
		const uintpRp1xgO = BigInt("119")
		const uintyHxAwJN = BigInt("1185")
		const addresslduLkZg = accounts[4]
		const DmmControllerV2RtPgUjr = await DmmControllerV2.new(addressbP7HXQt, addressiIjyLAH, addressvsHqOj, addressK5NJlxN, addressN6qXQaf, addressjG63pAm, addressLOEArSW, addressQC4jYax, addresskZve8eB, uintpRp1xgO, uintyHxAwJN, addresslduLkZg, {from: accounts[1]});
		const uintA9HDGR8 = BigInt("1826")
		const uintXzizKWb = BigInt("1119")
		const addressAoVTNMM = accounts[2]
		const uintIxkkBe7 = BigInt("276")
		const uintDLpNICJ = BigInt("421")
		const uintEROIFHT = BigInt("294")
		const uintCEOdzwg = BigInt("117")
		const stringp1W9xps = "npdqjOXRYxfDdQcbfjDBLrvYOiHEMqxIY7aMwyu1RneC1"
		const stringnG5iYZ = "3XP4NW69cMzcT7dvUareVuvNnzQvUp3UQBvbJ8V52SrrMQuCMIJTdDQbiiSmFq4sWtkg6JkCdcQi3"
		const addressexmZgEl = accounts[0]
		const 
Kp2U4S = await DmmControllerV2RtPgUjr.adminWithdrawFunds.call(uintXzizKWb, uintA9HDGR8, {from: accounts[3]});
		await DmmControllerV2RtPgUjr.nonReentrant.call({from: accounts[2]});
		const addressqqSmare = await DmmControllerV2RtPgUjr.setUnderlyingTokenValuator.call(addressAoVTNMM, {from: accounts[1]});
		await DmmControllerV2RtPgUjr.pause.call({from: accounts[1]});
		const 
gyMXfe6 = await DmmControllerV2RtPgUjr.addMarket.call(addressexmZgEl, stringnG5iYZ, stringp1W9xps, uintCEOdzwg, uintEROIFHT, uintDLpNICJ, uintIxkkBe7, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const address17POeo = "0x0000000000000000000000000000000000000001"
		const addresskxCLxiu = accounts[4]
		const addressiNbgzyV = accounts[3]
		const addressWpnzPnD = accounts[2]
		const addressLTGdLzD = accounts[2]
		const address8wUZ16 = accounts[4]
		const addressk42ySL = accounts[1]
		const addressRQyjaLf = accounts[1]
		const addresscXi6LV6 = accounts[4]
		const uintYHZPGj1 = BigInt("1219")
		const uintQJWAx1x = BigInt("995")
		const addressSnWIGUw = accounts[2]
		const DmmControllerV2NBXyQc = await DmmControllerV2.new(address17POeo, addresskxCLxiu, addressiNbgzyV, addressWpnzPnD, addressLTGdLzD, address8wUZ16, addressk42ySL, addressRQyjaLf, addresscXi6LV6, uintYHZPGj1, uintQJWAx1x, addressSnWIGUw, {from: accounts[0]});
		const addressPrAP3f4 = accounts[3]
		const uint8ipxt4 = BigInt("1205")
		const boolpHrCwuW = await DmmControllerV2NBXyQc.isMarketEnabledByDmmTokenAddress.call(addressPrAP3f4, {from: "0x0000000000000000000000000000000000000001"});
		const uintyOAPQkf = await DmmControllerV2NBXyQc.getInterestRateByDmmTokenId.call(uint8ipxt4, {from: accounts[2]});
		const uintR84vHdQ = await DmmControllerV2NBXyQc.getActiveCollateralization.call({from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressAqkW6MX = "0x0000000000000000000000000000000000000001"
		const addresseVdaxPr = accounts[4]
		const addressFRCXckY = accounts[3]
		const addressBkcVOhx = accounts[2]
		const addressnw3tNxb = accounts[2]
		const addressBtnv9Y = accounts[4]
		const addressLkJPRVi = accounts[1]
		const addressVB994k1 = accounts[1]
		const addressEltDBuq = accounts[4]
		const uintGZBoID = BigInt("1219")
		const uintR3A1HE9 = BigInt("995")
		const addressIDS76eW = accounts[2]
		const DmmControllerV2NBXyQc = await DmmControllerV2.new(addressAqkW6MX, addresseVdaxPr, addressFRCXckY, addressBkcVOhx, addressnw3tNxb, addressBtnv9Y, addressLkJPRVi, addressVB994k1, addressEltDBuq, uintGZBoID, uintR3A1HE9, addressIDS76eW, {from: accounts[0]});
		const addressas5olHr = accounts[0]
		const uintAA3WqNo = BigInt("1605")
		const uintvXJ9bo7 = BigInt("403")
		const uintFyi6FRN = BigInt("140")
		const addressW6OkTd7 = await DmmControllerV2NBXyQc.getDmmTokenForUnderlying.call(addressas5olHr, {from: accounts[0]});
		const uintc48yKRs = await DmmControllerV2NBXyQc.requireIsNftOwner.call(uintAA3WqNo, {from: accounts[1]});
		const uintlJKxIMV = await DmmControllerV2NBXyQc.disableMarket.call(uintvXJ9bo7, {from: accounts[4]});
		const uintyOAPQkf = await DmmControllerV2NBXyQc.getInterestRateByDmmTokenId.call(uintFyi6FRN, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressGeIJobx = "0x0000000000000000000000000000000000000001"
		const addressboLmDBK = accounts[4]
		const addresskoL5g2f = accounts[3]
		const addressKBuN3ha = accounts[2]
		const addressUskEMz = accounts[2]
		const addressH3rDCsi = accounts[4]
		const addressZTjAIKz = accounts[1]
		const addressz1GOMMj = accounts[1]
		const addressd6gyxjl = accounts[4]
		const uintk02JLSL = BigInt("1219")
		const uinttsuPBzd = BigInt("995")
		const addressJEnlCww = accounts[2]
		const DmmControllerV2NBXyQc = await DmmControllerV2.new(addressGeIJobx, addressboLmDBK, addresskoL5g2f, addressKBuN3ha, addressUskEMz, addressH3rDCsi, addressZTjAIKz, addressz1GOMMj, addressd6gyxjl, uintk02JLSL, uinttsuPBzd, addressJEnlCww, {from: accounts[0]});
		const addressrJrNfnl = accounts[0]
		const uintsSzFtt = BigInt("134")
		const uintntAGcd3 = await DmmControllerV2NBXyQc.getTokenIdFromDmmTokenAddress.call(addressrJrNfnl, {from: accounts[1]});
		const uintyOAPQkf = await DmmControllerV2NBXyQc.getInterestRateByDmmTokenId.call(uintsSzFtt, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressG5ALKNn = "0x0000000000000000000000000000000000000001"
		const addressDDGvhHM = accounts[4]
		const addressOuod4um = accounts[3]
		const addressYEoy0P = accounts[2]
		const addressAmiOT8z = accounts[2]
		const addressC3acn8Y = accounts[4]
		const addressoxi0KIx = accounts[1]
		const addressPvITN17 = accounts[1]
		const addressLvpEVIP = accounts[4]
		const uintkIx4wvd = BigInt("1219")
		const uintHTltWaJ = BigInt("995")
		const addressVIbX27y = accounts[2]
		const DmmControllerV2NBXyQc = await DmmControllerV2.new(addressG5ALKNn, addressDDGvhHM, addressOuod4um, addressYEoy0P, addressAmiOT8z, addressC3acn8Y, addressoxi0KIx, addressPvITN17, addressLvpEVIP, uintkIx4wvd, uintHTltWaJ, addressVIbX27y, {from: accounts[0]});
		const uintqc4G8ph = BigInt("133")
		const uintizDtxpE = await DmmControllerV2NBXyQc.getActiveCollateralization.call({from: accounts[1]});
		const uintyOAPQkf = await DmmControllerV2NBXyQc.getInterestRateByDmmTokenId.call(uintqc4G8ph, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addresswsrskx = "0x0000000000000000000000000000000000000001"
		const addressdgUouRJ = accounts[4]
		const addressCNqxdd9 = accounts[3]
		const addressCsFTJBK = accounts[2]
		const addressKcxfcsZ = accounts[2]
		const addressviNjP37 = accounts[4]
		const addressYg39vf = accounts[1]
		const addressSli15e8 = accounts[1]
		const addressSUUpyYz = accounts[4]
		const uintSe8qDQO = BigInt("1219")
		const uintvLWAj80 = BigInt("995")
		const addressZ1TJrzw = accounts[2]
		const DmmControllerV2NBXyQc = await DmmControllerV2.new(addresswsrskx, addressdgUouRJ, addressCNqxdd9, addressCsFTJBK, addressKcxfcsZ, addressviNjP37, addressYg39vf, addressSli15e8, addressSUUpyYz, uintSe8qDQO, uintvLWAj80, addressZ1TJrzw, {from: accounts[0]});
		const addresssC9ovIK = accounts[1]
		const uintStA1jHz = BigInt("147")
		const addressT9Wym3B = accounts[1]
		const addressiFeUsa = await DmmControllerV2NBXyQc.addPauser.call(addresssC9ovIK, {from: accounts[1]});
		const uintyOAPQkf = await DmmControllerV2NBXyQc.getInterestRateByDmmTokenId.call(uintStA1jHz, {from: accounts[2]});
		const 
E0WcPDj = await DmmControllerV2NBXyQc.transferOwnership.call(addressT9Wym3B, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressRQRQIK = "0x0000000000000000000000000000000000000001"
		const addressxrahrHR = accounts[4]
		const addressQbjS25V = accounts[3]
		const addressvg3fJ6 = accounts[2]
		const addressuDOs6p2 = accounts[2]
		const addressR9JxC5I = accounts[4]
		const addressAUwdFDg = accounts[1]
		const addresskCURId = accounts[1]
		const addressteSHJS6 = accounts[4]
		const uintq20NqF3 = BigInt("1219")
		const uintLdvScf4 = BigInt("995")
		const addressPMYnCpo = accounts[2]
		const DmmControllerV2NBXyQc = await DmmControllerV2.new(addressRQRQIK, addressxrahrHR, addressQbjS25V, addressvg3fJ6, addressuDOs6p2, addressR9JxC5I, addressAUwdFDg, addresskCURId, addressteSHJS6, uintq20NqF3, uintLdvScf4, addressPMYnCpo, {from: accounts[0]});
		const addressrKm86tf = accounts[1]
		const addressLKvszB2 = accounts[2]
		const uintUfDz9y0 = BigInt("133")
		const uinthMzkOeg = await DmmControllerV2NBXyQc.getInterestRateByUnderlyingTokenAddress.call(addressrKm86tf, {from: accounts[4]});
		const booloNiGuKb = await DmmControllerV2NBXyQc.isPauser.call(addressLKvszB2, {from: accounts[4]});
		const uintyOAPQkf = await DmmControllerV2NBXyQc.getInterestRateByDmmTokenId.call(uintUfDz9y0, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressZIhwSh = "0x0000000000000000000000000000000000000001"
		const addressJQFHUSF = accounts[4]
		const addressbEcuZGG = accounts[3]
		const addressWK7E1HB = accounts[2]
		const addressHjgWGcm = accounts[2]
		const addressqgTFAvB = accounts[4]
		const addressXRTMNKP = accounts[1]
		const addressRZzUBOl = accounts[1]
		const addressqUPdeTD = accounts[4]
		const uintfmvVveS = BigInt("1219")
		const uintGKssGkV = BigInt("995")
		const addressTVtrXU = accounts[2]
		const DmmControllerV2NBXyQc = await DmmControllerV2.new(addressZIhwSh, addressJQFHUSF, addressbEcuZGG, addressWK7E1HB, addressHjgWGcm, addressqgTFAvB, addressXRTMNKP, addressRZzUBOl, addressqUPdeTD, uintfmvVveS, uintGKssGkV, addressTVtrXU, {from: accounts[0]});
		const addresseATCX0S = accounts[4]
		const uintuS4Jya5 = BigInt("121")
		const addressOK7M5aE = accounts[5]
		const uintfVFF2kK = await DmmControllerV2NBXyQc.getExchangeRate.call(addresseATCX0S, {from: accounts[0]});
		const uintyOAPQkf = await DmmControllerV2NBXyQc.getInterestRateByDmmTokenId.call(uintuS4Jya5, {from: accounts[2]});
		const addressdD3d9VO = await DmmControllerV2NBXyQc.setDmmEtherFactory.call(addressOK7M5aE, {from: accounts[5]});
	});
})