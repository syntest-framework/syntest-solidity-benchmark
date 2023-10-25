const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddr0ZON0T = accounts[3]
		const FOSTERAddrgRYXFGI = accounts[2]
		const initialRateGlqwjWy = BigInt("398")
		const initialPeriodaIQFiR = BigInt("1305")
		const initialOwnerTEZj2b = accounts[2]
		const contractKe49kob = await Reseller.new(USDTAddr0ZON0T, FOSTERAddrgRYXFGI, initialRateGlqwjWy, initialPeriodaIQFiR, initialOwnerTEZj2b, {from: accounts[5]});
		const newBoss2T4haVQn = accounts[5]
		const _ref5O0H6FKK = accounts[3]
		const _ref4zuUIBk3 = accounts[4]
		const _ref3ZChHLVH = accounts[1]
		const _ref2bpumTIl = "0x0000000000000000000000000000000000000001"
		const _ref1e48bkDF = accounts[5]
		const valueNGGW06D = BigInt("930")
		const newBoss1FnkgSsx = accounts[3]
		const newBoss1G0vFTr5 = accounts[5]
		const valueMaa93Wx = BigInt("613")
		await contractKe49kob.deposeBoss2.call(newBoss2T4haVQn, {from: accounts[4]});
		await contractKe49kob.buy.call(valueNGGW06D, _ref1e48bkDF, _ref2bpumTIl, _ref3ZChHLVH, _ref4zuUIBk3, _ref5O0H6FKK, {from: accounts[0]});
		await contractKe49kob.deposeBoss1.call(newBoss1FnkgSsx, {from: accounts[5]});
		await contractKe49kob.deposeBoss1.call(newBoss1G0vFTr5, {from: accounts[2]});
		await contractKe49kob.withdraw.call(valueMaa93Wx, {from: accounts[1]});

		await expect(contractKe49kob.deposeBoss2.call(newBoss2T4haVQn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrZqwgJ1t = accounts[0]
		const FOSTERAddrA0wz4Tw = accounts[1]
		const initialRateCvGIVd = BigInt("15")
		const initialPeriod96PpP7 = BigInt("835")
		const initialOwnerF5OOZZ3 = accounts[0]
		const contracte3bWhBz = await Reseller.new(USDTAddrZqwgJ1t, FOSTERAddrA0wz4Tw, initialRateCvGIVd, initialPeriod96PpP7, initialOwnerF5OOZZ3, {from: accounts[1]});
		const level5QyxxH0I = BigInt("235")
		const level4Cghb19t = BigInt("142")
		const level3bdEbW4M = BigInt("121")
		const level2a8fTSoI = BigInt("238")
		const level1zGeGgv5 = BigInt("253")
		const accountnBmee5O = accounts[4]
		const accountOz20g8m = accounts[5]
		await contracte3bWhBz.setRefBonus.call(level1zGeGgv5, level2a8fTSoI, level3bdEbW4M, level4Cghb19t, level5QyxxH0I, {from: "0x0000000000000000000000000000000000000001"});
		const nulljyFW1VR = await contracte3bWhBz.allowanceUSDT.call(accountnBmee5O, {from: accounts[1]});
		const nullC2rUCs1 = await contracte3bWhBz.allowanceFOSTER.call(accountOz20g8m, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contracte3bWhBz.setRefBonus.call(level1zGeGgv5, level2a8fTSoI, level3bdEbW4M, level4Cghb19t, level5QyxxH0I, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrhOPwT1 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrzQBVa55 = accounts[0]
		const initialRateiaz5nPd = BigInt("205")
		const initialPeriodipqWm8o = BigInt("96")
		const initialOwnereEjCEAv = accounts[2]
		const contractrFGZULw = await Reseller.new(USDTAddrhOPwT1, FOSTERAddrzQBVa55, initialRateiaz5nPd, initialPeriodipqWm8o, initialOwnereEjCEAv, {from: accounts[2]});
		const accountTO2mQcm = accounts[2]
		const level5yMFLnie = BigInt("16")
		const level4UtmUMTY = BigInt("164")
		const level3lQwt6lh = BigInt("41")
		const level2sLkBfPt = BigInt("119")
		const level1TEWhKFp = BigInt("180")
		const nullAHuw0o7 = await contractrFGZULw.allowanceFOSTER.call(accountTO2mQcm, {from: "0x0000000000000000000000000000000000000001"});
		await contractrFGZULw.setRefBonus.call(level1TEWhKFp, level2sLkBfPt, level3lQwt6lh, level4UtmUMTY, level5yMFLnie, {from: accounts[2]});

		await expect(contractrFGZULw.allowanceFOSTER.call(accountTO2mQcm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrA5XnUAh = accounts[0]
		const FOSTERAddrSlMrFhn = accounts[1]
		const initialRatez0704Lj = BigInt("798")
		const initialPeriodI582Kdh = BigInt("962")
		const initialOwnerTepsgwl = accounts[4]
		const contractnovidkF = await Reseller.new(USDTAddrA5XnUAh, FOSTERAddrSlMrFhn, initialRatez0704Lj, initialPeriodI582Kdh, initialOwnerTepsgwl, {from: accounts[1]});
		const accountXiR50cT = accounts[1]
		const _periodxATD555 = BigInt("336")
		const amountr1CTRnf = BigInt("1956")
		const recipientZHuvtAO = "0x0000000000000000000000000000000000000001"
		const nullJI2HiPL = await contractnovidkF.balanceFOSTER.call(accountXiR50cT, {from: accounts[2]});
		await contractnovidkF.freezeAndTransfer.call(recipientZHuvtAO, amountr1CTRnf, _periodxATD555, {from: accounts[5]});

		await expect(contractnovidkF.balanceFOSTER.call(accountXiR50cT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQkYcVPP = accounts[4]
		const FOSTERAddrfWqCwbP = accounts[4]
		const initialRateupsI8T1 = BigInt("1108")
		const initialPeriodD2QBI4C = BigInt("506")
		const initialOwnerDHJzh4 = accounts[4]
		const contractz35xnqn = await Reseller.new(USDTAddrQkYcVPP, FOSTERAddrfWqCwbP, initialRateupsI8T1, initialPeriodD2QBI4C, initialOwnerDHJzh4, {from: accounts[1]});
		const valueGJPLt4 = BigInt("1779")
		const accountWORO3uH = accounts[0]
		const newBoss1a6tZ8cs = accounts[2]
		const accountKjQATyj = accounts[1]
		await contractz35xnqn.withdraw.call(valueGJPLt4, {from: accounts[5]});
		const nullY7Ot8EJ = await contractz35xnqn.allowanceUSDT.call(accountWORO3uH, {from: accounts[0]});
		await contractz35xnqn.deposeBoss1.call(newBoss1a6tZ8cs, {from: accounts[1]});
		const nullGCzNjTV = await contractz35xnqn.allowanceUSDT.call(accountKjQATyj, {from: accounts[4]});

		await expect(contractz35xnqn.withdraw.call(valueGJPLt4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrt8xlsmh = accounts[4]
		const FOSTERAddrBDwM3zg = accounts[3]
		const initialRateU0dLdtk = BigInt("1425")
		const initialPeriodWS6lZ7a = BigInt("447")
		const initialOwnerz5VJext = accounts[3]
		const contracte3mPizr = await Reseller.new(USDTAddrt8xlsmh, FOSTERAddrBDwM3zg, initialRateU0dLdtk, initialPeriodWS6lZ7a, initialOwnerz5VJext, {from: accounts[1]});
		const newPeriodKp6Ixi0 = BigInt("959")
		const accountljKWoEf = accounts[1]
		const newBoss3MfHMU0D = accounts[4]
		const newRateuDsGnU7 = BigInt("918")
		const commentUv6t5eB = "x6L3pGePMCEgmfRX"
		const _ref5r64hrOc = "0x0000000000000000000000000000000000000001"
		const _ref46GWe6S = accounts[3]
		const _ref3NvrwWV2 = accounts[2]
		const _ref2KOhwSfH = accounts[3]
		const _ref1PKCoRM8 = accounts[0]
		const valueCFqE0l5 = BigInt("565")
		await contracte3mPizr.setPeriod.call(newPeriodKp6Ixi0, {from: accounts[2]});
		const nullLvSKqiB = await contracte3mPizr.balanceUSDT.call(accountljKWoEf, {from: accounts[2]});
		await contracte3mPizr.deposeBoss3.call(newBoss3MfHMU0D, {from: "0x0000000000000000000000000000000000000001"});
		await contracte3mPizr.setRate.call(newRateuDsGnU7, {from: accounts[5]});
		await contracte3mPizr.purchase.call(valueCFqE0l5, _ref1PKCoRM8, _ref2KOhwSfH, _ref3NvrwWV2, _ref46GWe6S, _ref5r64hrOc, commentUv6t5eB, {from: accounts[2]});

		await expect(contracte3mPizr.setPeriod.call(newPeriodKp6Ixi0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrvUPEr3J = accounts[1]
		const FOSTERAddrj19tYU = accounts[2]
		const initialRatemOlsTRu = BigInt("363")
		const initialPeriodlsr9s6f = BigInt("330")
		const initialOwnerUW6Goj = accounts[2]
		const contractxdCFGAl = await Reseller.new(USDTAddrvUPEr3J, FOSTERAddrj19tYU, initialRatemOlsTRu, initialPeriodlsr9s6f, initialOwnerUW6Goj, {from: accounts[1]});
		const _periodCGDOlh9 = BigInt("7")
		const amountWvmR7dQ = BigInt("1615")
		const recipientr5WZoqc = accounts[1]
		const newBoss3yvJ03yy = accounts[4]
		const newRatezbdmsAh = BigInt("1795")
		const accountgnR5LZ = accounts[3]
		const newMinimumhL84f2t = BigInt("386")
		const newBoss2YFKBkMs = accounts[1]
		await contractxdCFGAl.freezeAndTransfer.call(recipientr5WZoqc, amountWvmR7dQ, _periodCGDOlh9, {from: "0x0000000000000000000000000000000000000001"});
		await contractxdCFGAl.deposeBoss3.call(newBoss3yvJ03yy, {from: accounts[1]});
		await contractxdCFGAl.setRate.call(newRatezbdmsAh, {from: accounts[0]});
		const nullJWYqth = await contractxdCFGAl.allowanceUSDT.call(accountgnR5LZ, {from: accounts[1]});
		await contractxdCFGAl.setMinimum.call(newMinimumhL84f2t, {from: accounts[1]});
		await contractxdCFGAl.deposeBoss2.call(newBoss2YFKBkMs, {from: accounts[2]});

		await expect(contractxdCFGAl.freezeAndTransfer.call(recipientr5WZoqc, amountWvmR7dQ, _periodCGDOlh9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrKpSdgIX = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrooo9Z7d = accounts[0]
		const initialRateKYG9CHA = BigInt("611")
		const initialPeriodfSoBY1 = BigInt("1886")
		const initialOwnerRzYJaXY = accounts[1]
		const contractIV6cixa = await Reseller.new(USDTAddrKpSdgIX, FOSTERAddrooo9Z7d, initialRateKYG9CHA, initialPeriodfSoBY1, initialOwnerRzYJaXY, {from: accounts[2]});
		const accountCMbxYq = accounts[1]
		const newBoss3DUvYzA = accounts[4]
		const newRateGBIzpVl = BigInt("314")
		const newPeriodVK68GE = BigInt("1065")
		const newBoss2IbBfdWu = accounts[0]
		const nullRT8FJkM = await contractIV6cixa.balanceUSDT.call(accountCMbxYq, {from: accounts[4]});
		await contractIV6cixa.deposeBoss3.call(newBoss3DUvYzA, {from: accounts[4]});
		await contractIV6cixa.setRate.call(newRateGBIzpVl, {from: accounts[0]});
		await contractIV6cixa.setPeriod.call(newPeriodVK68GE, {from: accounts[3]});
		await contractIV6cixa.switchState.call({from: accounts[1]});
		await contractIV6cixa.deposeBoss2.call(newBoss2IbBfdWu, {from: accounts[1]});

		await expect(contractIV6cixa.balanceUSDT.call(accountCMbxYq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrIbajGeu = accounts[0]
		const FOSTERAddrNLCeia9 = accounts[3]
		const initialRateKwNrwIB = BigInt("1140")
		const initialPeriodAKw7GXU = BigInt("1960")
		const initialOwnerkZkxmXN = accounts[2]
		const contractr5rxhFX = await Reseller.new(USDTAddrIbajGeu, FOSTERAddrNLCeia9, initialRateKwNrwIB, initialPeriodAKw7GXU, initialOwnerkZkxmXN, {from: accounts[3]});
		const valueFRAK3aG = BigInt("834")
		const recipientvIAtrDc = "0x0000000000000000000000000000000000000001"
		const ERC20TokenQAJSS5a = accounts[3]
		const newFeelki4rMv = BigInt("249")
		const newPeriodpUCciiR = BigInt("1809")
		const _periodrpuhpa = BigInt("1002")
		const amountijuQcRy = BigInt("91")
		const recipient095iB5 = accounts[4]
		const newBoss3VtcOT4v = accounts[5]
		const newMinimumjMBDMWU = BigInt("1769")
		await contractr5rxhFX.withdrawERC20.call(ERC20TokenQAJSS5a, recipientvIAtrDc, valueFRAK3aG, {from: accounts[2]});
		await contractr5rxhFX.setFee.call(newFeelki4rMv, {from: accounts[3]});
		await contractr5rxhFX.setPeriod.call(newPeriodpUCciiR, {from: accounts[2]});
		await contractr5rxhFX.freezeAndTransfer.call(recipient095iB5, amountijuQcRy, _periodrpuhpa, {from: accounts[4]});
		await contractr5rxhFX.deposeBoss3.call(newBoss3VtcOT4v, {from: accounts[5]});
		await contractr5rxhFX.setMinimum.call(newMinimumjMBDMWU, {from: accounts[1]});

		await expect(contractr5rxhFX.withdrawERC20.call(ERC20TokenQAJSS5a, recipientvIAtrDc, valueFRAK3aG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrznt1ebM = accounts[3]
		const FOSTERAddrZofQiUD = accounts[5]
		const initialRateoqXBeCJ = BigInt("1660")
		const initialPeriodWUEvBpq = BigInt("1920")
		const initialOwnerASimYxE = accounts[1]
		const contractWZrHe2A = await Reseller.new(USDTAddrznt1ebM, FOSTERAddrZofQiUD, initialRateoqXBeCJ, initialPeriodWUEvBpq, initialOwnerASimYxE, {from: accounts[4]});
		const newPeriodwO0Yc8i = BigInt("1683")
		const newBoss1Mkmu0i7 = accounts[4]
		const amountwICQIMb = BigInt("1230")
		const _ref5YZXnsMA = "0x0000000000000000000000000000000000000001"
		const _ref4DQLvuSB = accounts[0]
		const _ref3cCGnOPk = accounts[2]
		const _ref2XV7E15J = accounts[0]
		const _ref1b6hN8hU = accounts[3]
		const valuerID334 = BigInt("574")
		await contractWZrHe2A.setPeriod.call(newPeriodwO0Yc8i, {from: accounts[1]});
		await contractWZrHe2A.switchState.call({from: accounts[3]});
		await contractWZrHe2A.deposeBoss1.call(newBoss1Mkmu0i7, {from: "0x0000000000000000000000000000000000000001"});
		const nullQs7Zd9 = await contractWZrHe2A.getEstimation.call(amountwICQIMb, {from: accounts[0]});
		await contractWZrHe2A.buy.call(valuerID334, _ref1b6hN8hU, _ref2XV7E15J, _ref3cCGnOPk, _ref4DQLvuSB, _ref5YZXnsMA, {from: accounts[1]});

		await expect(contractWZrHe2A.setPeriod.call(newPeriodwO0Yc8i, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrgAiHoPW = accounts[4]
		const FOSTERAddrQyUV0Zh = accounts[3]
		const initialRateb1p4ZNI = BigInt("1425")
		const initialPeriodPSG6Q5s = BigInt("447")
		const initialOwnerIq14dql = accounts[3]
		const contractZ8lFCZk = await Reseller.new(USDTAddrgAiHoPW, FOSTERAddrQyUV0Zh, initialRateb1p4ZNI, initialPeriodPSG6Q5s, initialOwnerIq14dql, {from: accounts[1]});
		const commentUjWNbJZ = "jOCGcBuNYY2da4ADxbPQ"
		const _ref5pYtCn6x = accounts[0]
		const _ref4KVdlWrj = "0x0000000000000000000000000000000000000001"
		const _ref3GhX7BvX = accounts[5]
		const _ref2FV8PNvv = "0x0000000000000000000000000000000000000001"
		const _ref1vcUf9eT = accounts[1]
		const valuec8s5jg2 = BigInt("1576")
		const newPeriodIfO4Xms = BigInt("959")
		const newFeeDAbRipO = BigInt("24")
		const accountXcoP8Co = accounts[1]
		const newBoss3QLKRfVA = accounts[4]
		const newRateFznYU5h = BigInt("918")
		const valuex1mriqh = BigInt("1946")
		const commentytcWUAD = "x6L3pGePMCEgmfRX"
		const _ref5q2NNL44 = "0x0000000000000000000000000000000000000001"
		const _ref4xM2FrRX = accounts[4]
		const _ref3NqP862Y = accounts[2]
		const _ref2HTLmWq7 = accounts[3]
		const _ref1O1kyCCx = accounts[0]
		const valueuEjg5IL = BigInt("565")
		await contractZ8lFCZk.purchase.call(valuec8s5jg2, _ref1vcUf9eT, _ref2FV8PNvv, _ref3GhX7BvX, _ref4KVdlWrj, _ref5pYtCn6x, commentUjWNbJZ, {from: accounts[3]});
		await contractZ8lFCZk.setPeriod.call(newPeriodIfO4Xms, {from: accounts[2]});
		await contractZ8lFCZk.setFee.call(newFeeDAbRipO, {from: "0x0000000000000000000000000000000000000001"});
		const nullQ1RTxVe = await contractZ8lFCZk.balanceUSDT.call(accountXcoP8Co, {from: accounts[2]});
		await contractZ8lFCZk.deposeBoss3.call(newBoss3QLKRfVA, {from: "0x0000000000000000000000000000000000000001"});
		await contractZ8lFCZk.setRate.call(newRateFznYU5h, {from: accounts[5]});
		await contractZ8lFCZk.withdraw.call(valuex1mriqh, {from: accounts[1]});
		await contractZ8lFCZk.purchase.call(valueuEjg5IL, _ref1O1kyCCx, _ref2HTLmWq7, _ref3NqP862Y, _ref4xM2FrRX, _ref5q2NNL44, commentytcWUAD, {from: accounts[2]});

		await expect(contractZ8lFCZk.purchase.call(valuec8s5jg2, _ref1vcUf9eT, _ref2FV8PNvv, _ref3GhX7BvX, _ref4KVdlWrj, _ref5pYtCn6x, commentUjWNbJZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrGl4HhnS = "0x0000000000000000000000000000000000000001"
		const FOSTERAddraDG5Xi7 = accounts[0]
		const initialRateS4nm9sK = BigInt("611")
		const initialPeriodjyU14yS = BigInt("1886")
		const initialOwnerG0pBRD5 = accounts[1]
		const contractijNDJxW = await Reseller.new(USDTAddrGl4HhnS, FOSTERAddraDG5Xi7, initialRateS4nm9sK, initialPeriodjyU14yS, initialOwnerG0pBRD5, {from: accounts[2]});
		const _ref5sUJpE24 = accounts[4]
		const _ref4rmDTdGX = accounts[4]
		const _ref3wwMXCQt = accounts[0]
		const _ref2hGymJ3 = accounts[2]
		const _ref1zWa6Vxl = accounts[3]
		const valueAlC0eyq = BigInt("552")
		const accountlDtFv5K = accounts[1]
		const newRateM4ona8J = BigInt("314")
		const newPeriodJppMeOJ = BigInt("1065")
		const newBoss2qCnPSoz = accounts[1]
		await contractijNDJxW.buy.call(valueAlC0eyq, _ref1zWa6Vxl, _ref2hGymJ3, _ref3wwMXCQt, _ref4rmDTdGX, _ref5sUJpE24, {from: accounts[0]});
		const nulliCrbCs = await contractijNDJxW.balanceUSDT.call(accountlDtFv5K, {from: accounts[4]});
		await contractijNDJxW.setRate.call(newRateM4ona8J, {from: accounts[0]});
		await contractijNDJxW.setPeriod.call(newPeriodJppMeOJ, {from: accounts[3]});
		await contractijNDJxW.switchState.call({from: accounts[1]});
		await contractijNDJxW.deposeBoss2.call(newBoss2qCnPSoz, {from: accounts[1]});

		await expect(contractijNDJxW.buy.call(valueAlC0eyq, _ref1zWa6Vxl, _ref2hGymJ3, _ref3wwMXCQt, _ref4rmDTdGX, _ref5sUJpE24, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrotEtAwO = accounts[4]
		const FOSTERAddrQRhVfl0 = accounts[4]
		const initialRatehcbnrkG = BigInt("1108")
		const initialPeriodBCZeGj = BigInt("506")
		const initialOwnerAuxbGeR = accounts[4]
		const contractC2gJfHu = await Reseller.new(USDTAddrotEtAwO, FOSTERAddrQRhVfl0, initialRatehcbnrkG, initialPeriodBCZeGj, initialOwnerAuxbGeR, {from: accounts[1]});
		const accountrzLEw0m = accounts[0]
		const newBoss1k6PiqqK = accounts[2]
		const accountY3e2nun = accounts[1]
		const nullK49761 = await contractC2gJfHu.allowanceUSDT.call(accountrzLEw0m, {from: accounts[0]});
		await contractC2gJfHu.deposeBoss1.call(newBoss1k6PiqqK, {from: accounts[1]});
		const nullFh7inbe = await contractC2gJfHu.allowanceUSDT.call(accountY3e2nun, {from: accounts[4]});

		await expect(contractC2gJfHu.allowanceUSDT.call(accountrzLEw0m, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddroHi57XV = accounts[2]
		const FOSTERAddrMfNPUl8 = accounts[2]
		const initialRateLrPfKEV = BigInt("281")
		const initialPeriodp3Hhfzh = BigInt("1540")
		const initialOwnerWDhNXmo = accounts[2]
		const contractwu53uq = await Reseller.new(USDTAddroHi57XV, FOSTERAddrMfNPUl8, initialRateLrPfKEV, initialPeriodp3Hhfzh, initialOwnerWDhNXmo, {from: "0x0000000000000000000000000000000000000001"});
		const newBoss2Rb9Bd6H = accounts[2]
		const newBoss38jbEF9 = accounts[0]
		const valuebLfGQeV = BigInt("1204")
		const newBoss3WpzfJ3l = accounts[3]
		await contractwu53uq.deposeBoss2.call(newBoss2Rb9Bd6H, {from: accounts[1]});
		await contractwu53uq.deposeBoss3.call(newBoss38jbEF9, {from: "0x0000000000000000000000000000000000000001"});
		await contractwu53uq.withdraw.call(valuebLfGQeV, {from: accounts[0]});
		await contractwu53uq.deposeBoss3.call(newBoss3WpzfJ3l, {from: accounts[2]});
	});

	it('test for Reseller', async () => {
		const USDTAddrWXtUmIx = accounts[0]
		const FOSTERAddrug1OWzF = accounts[3]
		const initialRateLKZMKyC = BigInt("1140")
		const initialPeriod0BaMWk = BigInt("1960")
		const initialOwnerDfobLzu = accounts[2]
		const contractMVtMTZw = await Reseller.new(USDTAddrWXtUmIx, FOSTERAddrug1OWzF, initialRateLKZMKyC, initialPeriod0BaMWk, initialOwnerDfobLzu, {from: accounts[3]});
		const newBoss4L0DPqbt = accounts[2]
		const valueCEsQ776 = BigInt("834")
		const recipientjQAptUm = "0x0000000000000000000000000000000000000000"
		const ERC20TokenBpPC5cF = accounts[3]
		const newFeeLyCPLbv = BigInt("249")
		const newPeriodZT5sfSn = BigInt("1809")
		const _periodBpm2nTg = BigInt("1002")
		const amountK3I0S8w = BigInt("91")
		const recipientVPZRe3N = accounts[4]
		const newBoss3eKlfqnl = accounts[5]
		const newMinimumQHkVNO = BigInt("1769")
		await contractMVtMTZw.deposeBoss4.call(newBoss4L0DPqbt, {from: accounts[0]});
		await contractMVtMTZw.withdrawERC20.call(ERC20TokenBpPC5cF, recipientjQAptUm, valueCEsQ776, {from: accounts[2]});
		await contractMVtMTZw.setFee.call(newFeeLyCPLbv, {from: accounts[3]});
		await contractMVtMTZw.setPeriod.call(newPeriodZT5sfSn, {from: accounts[2]});
		await contractMVtMTZw.freezeAndTransfer.call(recipientVPZRe3N, amountK3I0S8w, _periodBpm2nTg, {from: accounts[4]});
		await contractMVtMTZw.deposeBoss3.call(newBoss3eKlfqnl, {from: accounts[5]});
		await contractMVtMTZw.setMinimum.call(newMinimumQHkVNO, {from: accounts[1]});

		await expect(contractMVtMTZw.deposeBoss4.call(newBoss4L0DPqbt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrMOHIwi5 = accounts[3]
		const FOSTERAddrkO4MeyE = accounts[2]
		const initialRateEcmvZn2 = BigInt("1260")
		const initialPeriodnonD5Bt = BigInt("1718")
		const initialOwnertihbid = accounts[3]
		const contractjh91VdS = await Reseller.new(USDTAddrMOHIwi5, FOSTERAddrkO4MeyE, initialRateEcmvZn2, initialPeriodnonD5Bt, initialOwnertihbid, {from: accounts[2]});
		const newBoss1QgqaZ8 = accounts[4]
		const newBoss15IaU9i = accounts[5]
		await contractjh91VdS.deposeBoss1.call(newBoss1QgqaZ8, {from: accounts[4]});
		await contractjh91VdS.deposeBoss1.call(newBoss15IaU9i, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractjh91VdS.deposeBoss1.call(newBoss1QgqaZ8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDbPy5q9 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrAZP59ou = accounts[0]
		const initialRateJr10Psk = BigInt("611")
		const initialPeriodFdog3Vr = BigInt("1886")
		const initialOwnerLNDzGKb = accounts[1]
		const contractv6kR6Bo = await Reseller.new(USDTAddrDbPy5q9, FOSTERAddrAZP59ou, initialRateJr10Psk, initialPeriodFdog3Vr, initialOwnerLNDzGKb, {from: accounts[2]});
		const newRateMfkeaqj = BigInt("1804")
		const _ref5uNJPNo = accounts[4]
		const _ref4rX6uP7Q = accounts[4]
		const _ref3sIUy55J = accounts[0]
		const _ref2UmZXkXK = accounts[2]
		const _ref1kTd7dWZ = accounts[3]
		const valuehsnFJa = BigInt("552")
		const accountartGLB5 = accounts[1]
		const newRatellOkN5S = BigInt("314")
		const newPeriodmsvOuA = BigInt("1065")
		const newBoss23dXUnh = accounts[1]
		await contractv6kR6Bo.setRate.call(newRateMfkeaqj, {from: accounts[1]});
		await contractv6kR6Bo.buy.call(valuehsnFJa, _ref1kTd7dWZ, _ref2UmZXkXK, _ref3sIUy55J, _ref4rX6uP7Q, _ref5uNJPNo, {from: accounts[0]});
		const nullyzSRwCm = await contractv6kR6Bo.balanceUSDT.call(accountartGLB5, {from: accounts[4]});
		await contractv6kR6Bo.setRate.call(newRatellOkN5S, {from: accounts[0]});
		await contractv6kR6Bo.setPeriod.call(newPeriodmsvOuA, {from: accounts[3]});
		await contractv6kR6Bo.deposeBoss2.call(newBoss23dXUnh, {from: accounts[1]});

		await expect(contractv6kR6Bo.setRate.call(newRateMfkeaqj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrY4nwoF0 = accounts[3]
		const FOSTERAddrqLzVxG1 = accounts[1]
		const initialRateiMJ0RN = BigInt("1827")
		const initialPeriodEt2LYqi = BigInt("1501")
		const initialOwnerJFKvFH3 = accounts[4]
		const contractubJa6c0 = await Reseller.new(USDTAddrY4nwoF0, FOSTERAddrqLzVxG1, initialRateiMJ0RN, initialPeriodEt2LYqi, initialOwnerJFKvFH3, {from: accounts[5]});
		const newBoss3Nt7IMZ = accounts[4]
		const newMinimumXn9VZ0K = BigInt("602")
		const level5gOhkJy = BigInt("212")
		const level4kJGU3i = BigInt("54")
		const level3ESdZZF3 = BigInt("210")
		const level2MChvOi = BigInt("224")
		const level1JyYSoOP = BigInt("66")
		const commentNlJONab = "dbduN3IrDEKOaXsa3Jihf5sa7Hwuo6extVP4bR4r7c4unOh49"
		const _ref5POJojq = accounts[5]
		const _ref4YxLTci2 = accounts[1]
		const _ref3C4iyrB7 = accounts[2]
		const _ref2B14xX18 = accounts[0]
		const _ref1rvvIABI = accounts[1]
		const valuevt0Xns6 = BigInt("2030")
		const newBoss1HHNZ2QW = accounts[4]
		await contractubJa6c0.deposeBoss3.call(newBoss3Nt7IMZ, {from: accounts[2]});
		await contractubJa6c0.setMinimum.call(newMinimumXn9VZ0K, {from: accounts[2]});
		await contractubJa6c0.setRefBonus.call(level1JyYSoOP, level2MChvOi, level3ESdZZF3, level4kJGU3i, level5gOhkJy, {from: accounts[0]});
		await contractubJa6c0.purchase.call(valuevt0Xns6, _ref1rvvIABI, _ref2B14xX18, _ref3C4iyrB7, _ref4YxLTci2, _ref5POJojq, commentNlJONab, {from: accounts[4]});
		await contractubJa6c0.deposeBoss1.call(newBoss1HHNZ2QW, {from: accounts[0]});

		await expect(contractubJa6c0.deposeBoss3.call(newBoss3Nt7IMZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdczk0S9 = accounts[4]
		const FOSTERAddriTdOm10 = accounts[4]
		const initialRateiCAeaXx = BigInt("663")
		const initialPeriodMa2wz9K = BigInt("1654")
		const initialOwnerIXKOt2C = accounts[1]
		const contractylnKUtX = await Reseller.new(USDTAddrdczk0S9, FOSTERAddriTdOm10, initialRateiCAeaXx, initialPeriodMa2wz9K, initialOwnerIXKOt2C, {from: accounts[4]});
		const newFeeIU6RbjR = BigInt("61")
		const newBoss4MBULtZ = "0x0000000000000000000000000000000000000001"
		const newBoss4CZ88Zc = "0x0000000000000000000000000000000000000001"
		const newBoss3Muli1ei = accounts[5]
		const amountfMskjY = BigInt("1420")
		await contractylnKUtX.setFee.call(newFeeIU6RbjR, {from: accounts[4]});
		await contractylnKUtX.deposeBoss4.call(newBoss4MBULtZ, {from: accounts[2]});
		await contractylnKUtX.deposeBoss4.call(newBoss4CZ88Zc, {from: accounts[0]});
		await contractylnKUtX.deposeBoss3.call(newBoss3Muli1ei, {from: accounts[2]});
		const nullSmK103v = await contractylnKUtX.getEstimation.call(amountfMskjY, {from: accounts[1]});

		await expect(contractylnKUtX.setFee.call(newFeeIU6RbjR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrYLuZdIz = accounts[5]
		const FOSTERAddrPDaYvcx = accounts[2]
		const initialRatexYtaBMV = BigInt("1445")
		const initialPeriodRs6QYqR = BigInt("1935")
		const initialOwnerfJSZa74 = accounts[2]
		const contractJgCL8Ma = await Reseller.new(USDTAddrYLuZdIz, FOSTERAddrPDaYvcx, initialRatexYtaBMV, initialPeriodRs6QYqR, initialOwnerfJSZa74, {from: accounts[4]});
		const newMinimumvi4Ry8j = BigInt("1168")
		const _periodOBp9o1H = BigInt("1642")
		const amountzemvhTn = BigInt("1873")
		const recipienttbwzNO = "0x0000000000000000000000000000000000000001"
		const amountzWP3HYY = BigInt("482")
		const commentEqc6wu = "8QYNvqqGjpYx2qO5KPIUgSS5t7jJwV9x0aXUdMOvwp4q7aNvN4ZF1MLUhesBGYhZCqlqGRRUtTt9fIY65EDQm4bH"
		const _ref5Sb31Xaw = accounts[3]
		const _ref4Mmnim4 = "0x0000000000000000000000000000000000000001"
		const _ref3k3ypQ3e = accounts[1]
		const _ref2QIO4mI = accounts[5]
		const _ref1lhp6WK = accounts[3]
		const valuefImhNzF = BigInt("1207")
		await contractJgCL8Ma.setMinimum.call(newMinimumvi4Ry8j, {from: accounts[2]});
		await contractJgCL8Ma.freezeAndTransfer.call(recipienttbwzNO, amountzemvhTn, _periodOBp9o1H, {from: accounts[1]});
		const nullhNAusYr = await contractJgCL8Ma.getEstimation.call(amountzWP3HYY, {from: accounts[4]});
		await contractJgCL8Ma.purchase.call(valuefImhNzF, _ref1lhp6WK, _ref2QIO4mI, _ref3k3ypQ3e, _ref4Mmnim4, _ref5Sb31Xaw, commentEqc6wu, {from: accounts[2]});

		await expect(contractJgCL8Ma.setMinimum.call(newMinimumvi4Ry8j, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrIkFfzfY = accounts[3]
		const FOSTERAddrRyJiiqd = accounts[2]
		const initialRateCtcbtQo = BigInt("1260")
		const initialPeriodioUeQTq = BigInt("1718")
		const initialOwneri88TYfx = accounts[3]
		const contracti1pLQ4w = await Reseller.new(USDTAddrIkFfzfY, FOSTERAddrRyJiiqd, initialRateCtcbtQo, initialPeriodioUeQTq, initialOwneri88TYfx, {from: accounts[2]});
		const amountR9FCHn = BigInt("1989")
		const amountVpdOMtN = BigInt("1843")
		const valueTl0SKaf = BigInt("785")
		const recipientooiH5ZZ = accounts[4]
		const ERC20TokenkQCQrPT = accounts[6]
		const nullbio3V7D = await contracti1pLQ4w.getEstimation.call(amountR9FCHn, {from: accounts[3]});
		const nullP7BEzRP = await contracti1pLQ4w.getEstimation.call(amountVpdOMtN, {from: accounts[0]});
		await contracti1pLQ4w.withdrawERC20.call(ERC20TokenkQCQrPT, recipientooiH5ZZ, valueTl0SKaf, {from: accounts[2]});

		assert.equal(nullP7BEzRP, 2322180)
		assert.equal(nullbio3V7D, 2506140)
		await expect(contracti1pLQ4w.withdrawERC20.call(ERC20TokenkQCQrPT, recipientooiH5ZZ, valueTl0SKaf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})