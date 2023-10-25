const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const addresszWOwQkw = "0x0000000000000000000000000000000000000001"
		const addressiso2S1I = accounts[1]
		const addressaTZ8J9Y = "0x0000000000000000000000000000000000000001"
		const addresswU9fstg = accounts[3]
		const addressyPhl8SK = "0x0000000000000000000000000000000000000001"
		const addressrHKK6F8 = accounts[5]
		const addresshxA3vIs = accounts[0]
		const addressuPV0UTo = accounts[2]
		const addressYuT1B3u = accounts[2]
		const uintutToJxl = BigInt("1444")
		const uinte9ExuL9 = BigInt("1254")
		const addressOIpLmFD = accounts[4]
		const DmmControllerV2pn9k1Y = await DmmControllerV2.new(addresszWOwQkw, addressiso2S1I, addressaTZ8J9Y, addresswU9fstg, addressyPhl8SK, addressrHKK6F8, addresshxA3vIs, addressuPV0UTo, addressYuT1B3u, uintutToJxl, uinte9ExuL9, addressOIpLmFD, {from: accounts[0]});
		const addressIWmf79s = accounts[4]
		const addressSEFBd15 = accounts[5]
		const addresstmg5xFh = accounts[2]
		const uintHjtCA6P = await DmmControllerV2pn9k1Y.getExchangeRateByUnderlying.call(addressIWmf79s, {from: accounts[2]});
		const boolG1wWOqj = await DmmControllerV2pn9k1Y.isPauser.call(addressSEFBd15, {from: accounts[2]});
		const addressoqnp0CD = await DmmControllerV2pn9k1Y.checkNotBlacklisted.call(addresstmg5xFh, {from: accounts[3]});
		await DmmControllerV2pn9k1Y.renounceGuardian.call({from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressg6z2ZWk = accounts[2]
		const addressnoYUkKG = accounts[5]
		const addressGL8bEwi = accounts[3]
		const addressCllqZ5y = accounts[0]
		const addressrNTl7Su = accounts[1]
		const addressOLvh09e = accounts[2]
		const addressWZRu8fk = accounts[0]
		const addressFa3zudz = accounts[3]
		const addressyPS34F0 = accounts[3]
		const uintIpfrhZN = BigInt("899")
		const uintuxGlJ5O = BigInt("722")
		const addressi8phVR = accounts[4]
		const DmmControllerV2O4t8g2d = await DmmControllerV2.new(addressg6z2ZWk, addressnoYUkKG, addressGL8bEwi, addressCllqZ5y, addressrNTl7Su, addressOLvh09e, addressWZRu8fk, addressFa3zudz, addressyPS34F0, uintIpfrhZN, uintuxGlJ5O, addressi8phVR, {from: accounts[4]});
		const addresse0q13c = accounts[3]
		const addressFg8EGE0 = "0x0000000000000000000000000000000000000001"
		const addressbAhrSP5 = accounts[4]
		const uintfQUDgB = BigInt("1585")
		const uintIyhhhO = BigInt("647")
		const addressNAnSpwp = await DmmControllerV2O4t8g2d.guardian.call({from: accounts[3]});
		const 
Dl67BMB = await DmmControllerV2O4t8g2d.addMarketFromExistingDmmToken.call(addressFg8EGE0, addresse0q13c, {from: accounts[4]});
		const uintAwxY1B6 = await DmmControllerV2O4t8g2d.getTokenIdFromDmmTokenAddress.call(addressbAhrSP5, {from: accounts[1]});
		const 
EiiblI = await DmmControllerV2O4t8g2d.decreaseTotalSupply.call(uintIyhhhO, uintfQUDgB, {from: "0x0000000000000000000000000000000000000001"});
		const addressT6huUpC = await DmmControllerV2O4t8g2d.guardian.call({from: accounts[0]});
		const bool5vIzKk = await DmmControllerV2O4t8g2d.paused.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const DmmControllerV2wuWVKkG = await DmmControllerV2.new({from: accounts[1]});
		const uinttARxG6d = BigInt("512")
		const addressMOp7AKh = accounts[4]
		const addressoNVeZtF = accounts[2]
		const addressqRxs8zN = accounts[4]
		const addressDf4PyZV = accounts[0]
		const addressCk4ZN0U = accounts[4]
		const uintupPQ0RJ = await DmmControllerV2wuWVKkG.requireTokenExists.call(uinttARxG6d, {from: accounts[2]});
		const 
f9VqdmD = await DmmControllerV2wuWVKkG.transferGuardian.call(addressMOp7AKh, {from: accounts[2]});
		await DmmControllerV2wuWVKkG.renounceOwnership.call({from: accounts[1]});
		const addressvYB2r9S = await DmmControllerV2wuWVKkG.setOffChainCurrencyValuator.call(addressoNVeZtF, {from: accounts[3]});
		const uintrAIShSU = await DmmControllerV2wuWVKkG.getInterestRateByUnderlyingTokenAddress.call(addressqRxs8zN, {from: accounts[2]});
		const 
GTJpWt = await DmmControllerV2wuWVKkG.addMarketFromExistingDmmToken.call(addressCk4ZN0U, addressDf4PyZV, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressbYc2eUL = accounts[1]
		const addressVgOiwPE = accounts[5]
		const addressUR847fO = accounts[4]
		const addressSr5LC5y = accounts[0]
		const addressC62QQAA = accounts[1]
		const addressUh1Lnt0 = accounts[3]
		const addressNZUN1cA = accounts[3]
		const addresspe1GQTj = accounts[2]
		const addresshPHrrCk = accounts[3]
		const uinttfBYG4w = BigInt("1334")
		const uintyUExT8t = BigInt("1060")
		const addressoD73h7j = accounts[3]
		const DmmControllerV2MTYO7GY = await DmmControllerV2.new(addressbYc2eUL, addressVgOiwPE, addressUR847fO, addressSr5LC5y, addressC62QQAA, addressUh1Lnt0, addressNZUN1cA, addresspe1GQTj, addresshPHrrCk, uinttfBYG4w, uintyUExT8t, addressoD73h7j, {from: accounts[3]});
		const addressU9IJUJ0 = "0x0000000000000000000000000000000000000001"
		const uintx9shOIg = BigInt("1205")
		const address9lZFaX = accounts[0]
		const uintPzQQ8CT = await DmmControllerV2MTYO7GY.getTokenIdFromDmmTokenAddress.call(addressU9IJUJ0, {from: accounts[1]});
		const uintvTogOS = await DmmControllerV2MTYO7GY.requireIsValidNft.call(uintx9shOIg, {from: accounts[2]});
		await DmmControllerV2MTYO7GY.whenPaused.call({from: accounts[3]});
		await DmmControllerV2MTYO7GY.requireIsFromAssetIntroducer.call({from: accounts[4]});
		await DmmControllerV2MTYO7GY.whenNotPaused.call({from: accounts[0]});
		const addressY4UyFo = await DmmControllerV2MTYO7GY.setOffChainCurrencyValuator.call(address9lZFaX, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressr3MThT6 = accounts[2]
		const addressCBCz8D9 = accounts[3]
		const addressnSdhIgb = "0x0000000000000000000000000000000000000001"
		const addressdmmcCC6 = "0x0000000000000000000000000000000000000001"
		const addressROU97Gt = accounts[4]
		const addressswacLsH = accounts[3]
		const addressZyhHp2K = accounts[1]
		const addressavs4hOT = accounts[2]
		const addressOjYXnuK = accounts[2]
		const uintcmxcwBY = BigInt("1271")
		const uintb2ReG4u = BigInt("2024")
		const addressrecT8Or = accounts[4]
		const DmmControllerV2EnDdbVq = await DmmControllerV2.new(addressr3MThT6, addressCBCz8D9, addressnSdhIgb, addressdmmcCC6, addressROU97Gt, addressswacLsH, addressZyhHp2K, addressavs4hOT, addressOjYXnuK, uintcmxcwBY, uintb2ReG4u, addressrecT8Or, {from: accounts[0]});
		const addressPXAgkWW = accounts[0]
		const addresswrpdGoL = accounts[1]
		const uintUTi5NTd = BigInt("587")
		const uintiKWTn5I = BigInt("1249")
		const addressBZp2oN0 = await DmmControllerV2EnDdbVq.setInterestRateInterface.call(addressPXAgkWW, {from: accounts[4]});
		const uintlSKNiZ = await DmmControllerV2EnDdbVq.getInterestRateByUnderlyingTokenAddress.call(addresswrpdGoL, {from: accounts[3]});
		const uintsGdua17 = await DmmControllerV2EnDdbVq.getInterestRateByDmmTokenId.call(uintUTi5NTd, {from: accounts[4]});
		const uintR9u1y58 = await DmmControllerV2EnDdbVq.requireCanWithdrawFunds.call(uintiKWTn5I, {from: accounts[3]});
		await DmmControllerV2EnDdbVq.whenNotPaused.call({from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressKz8dI7w = accounts[5]
		const addressNpS2FtW = accounts[3]
		const addressSYU3nyY = accounts[1]
		const addressRqLzpcW = accounts[0]
		const addressRGMQ3kc = accounts[2]
		const addresswNUhbJ = accounts[0]
		const addressZPBHslj = accounts[2]
		const addressQb7diwK = accounts[4]
		const addressKYBnfhj = accounts[2]
		const uintKlgObcR = BigInt("627")
		const uintBz6ZbNx = BigInt("263")
		const addressuf1mtr = accounts[0]
		const DmmControllerV2wEwzjTi = await DmmControllerV2.new(addressKz8dI7w, addressNpS2FtW, addressSYU3nyY, addressRqLzpcW, addressRGMQ3kc, addresswNUhbJ, addressZPBHslj, addressQb7diwK, addressKYBnfhj, uintKlgObcR, uintBz6ZbNx, addressuf1mtr, {from: "0x0000000000000000000000000000000000000001"});
		const uintQhhAVbU = BigInt("2037")
		const uintMXnZsqX = BigInt("1868")
		const addressMVCkBZb = accounts[3]
		const uintrGMQnX4 = BigInt("78")
		const uintV0Wj1Er = BigInt("1374")
		const 
kKwamaB = await DmmControllerV2wEwzjTi.adminWithdrawFunds.call(uintMXnZsqX, uintQhhAVbU, {from: accounts[4]});
		await DmmControllerV2wEwzjTi.onlyOwner.call({from: accounts[4]});
		await DmmControllerV2wEwzjTi.unpause.call({from: accounts[5]});
		const boolLDhbDET = await DmmControllerV2wEwzjTi.isPauser.call(addressMVCkBZb, {from: accounts[1]});
		const 
atgUnc6 = await DmmControllerV2wEwzjTi.adminWithdrawFunds.call(uintV0Wj1Er, uintrGMQnX4, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressgnUESWt = accounts[4]
		const addresstv9TebN = accounts[3]
		const addresstkfLlI = accounts[4]
		const addressCZT842U = accounts[0]
		const addressQPHRItM = "0x0000000000000000000000000000000000000001"
		const addressEob3sXW = accounts[0]
		const addressuXX416Z = accounts[4]
		const addressfbQ4OyN = accounts[1]
		const addressHwC80yc = accounts[1]
		const uintwa30QtI = BigInt("1140")
		const uintkHKxMU1 = BigInt("310")
		const addressUULzvnU = accounts[2]
		const DmmControllerV2gtjpUCk = await DmmControllerV2.new(addressgnUESWt, addresstv9TebN, addresstkfLlI, addressCZT842U, addressQPHRItM, addressEob3sXW, addressuXX416Z, addressfbQ4OyN, addressHwC80yc, uintwa30QtI, uintkHKxMU1, addressUULzvnU, {from: accounts[2]});
		const addressqyFxnaZ = accounts[5]
		const uintK9Flqkh = await DmmControllerV2gtjpUCk.getInterestRateByDmmTokenAddress.call(addressqyFxnaZ, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addresslBPi1mt = accounts[4]
		const addressWTywgSe = accounts[3]
		const addresseaAcAmw = accounts[4]
		const addresseY4L63e = accounts[0]
		const addressBlPiQ2 = "0x0000000000000000000000000000000000000001"
		const addressziauBmT = accounts[0]
		const addressITkFiDx = accounts[4]
		const addressyi1MuLw = accounts[1]
		const addressfrmMyv = accounts[1]
		const uintOxphZwq = BigInt("1140")
		const uintZwJa4F7 = BigInt("310")
		const addressvvxaPoi = accounts[2]
		const DmmControllerV2gtjpUCk = await DmmControllerV2.new(addresslBPi1mt, addressWTywgSe, addresseaAcAmw, addresseY4L63e, addressBlPiQ2, addressziauBmT, addressITkFiDx, addressyi1MuLw, addressfrmMyv, uintOxphZwq, uintZwJa4F7, addressvvxaPoi, {from: accounts[2]});
		const addressTCQaHTw = accounts[0]
		const 
FsYICw = await DmmControllerV2gtjpUCk.setCollateralizationCalculator.call(addressTCQaHTw, {from: accounts[2]});
		await DmmControllerV2gtjpUCk.onlyBlacklister.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressTMdEfez = accounts[4]
		const addressvqNEGY7 = accounts[3]
		const addressoImD6kd = accounts[4]
		const addresswN7uWa = accounts[0]
		const addressAvwfzlj = "0x0000000000000000000000000000000000000001"
		const addressE6JOKzO = accounts[0]
		const addressO6HQSlb = accounts[4]
		const addressEepAZ4s = accounts[1]
		const addressn1LZVDW = accounts[1]
		const uintezjtZX9 = BigInt("1140")
		const uintPG9rxpl = BigInt("310")
		const addressBiWgpOX = accounts[2]
		const DmmControllerV2gtjpUCk = await DmmControllerV2.new(addressTMdEfez, addressvqNEGY7, addressoImD6kd, addresswN7uWa, addressAvwfzlj, addressE6JOKzO, addressO6HQSlb, addressEepAZ4s, addressn1LZVDW, uintezjtZX9, uintPG9rxpl, addressBiWgpOX, {from: accounts[2]});
		const addresssF1uo7p = accounts[1]
		const boolcPWcAis = await DmmControllerV2gtjpUCk.isMarketEnabledByDmmTokenAddress.call(addresssF1uo7p, {from: accounts[1]});
		await DmmControllerV2gtjpUCk.onlyBlacklister.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressDdpTZa4 = accounts[4]
		const addressbnPzHgi = accounts[3]
		const addressUHcWrIN = accounts[4]
		const addressRYdkNPV = accounts[0]
		const addressRMxRuD9 = "0x0000000000000000000000000000000000000001"
		const addressH7mlT9U = accounts[0]
		const addressoTTzjOy = accounts[4]
		const addressTWf5ch6 = accounts[1]
		const addressI3mO4UH = accounts[1]
		const uintuiSqJzz = BigInt("1140")
		const uintlvp01s = BigInt("310")
		const addressIvcYO4a = accounts[2]
		const DmmControllerV2gtjpUCk = await DmmControllerV2.new(addressDdpTZa4, addressbnPzHgi, addressUHcWrIN, addressRYdkNPV, addressRMxRuD9, addressH7mlT9U, addressoTTzjOy, addressTWf5ch6, addressI3mO4UH, uintuiSqJzz, uintlvp01s, addressIvcYO4a, {from: accounts[2]});
		await DmmControllerV2gtjpUCk.renouncePauser.call({from: accounts[2]});
		await DmmControllerV2gtjpUCk.onlyBlacklister.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressoVFDlJ = accounts[4]
		const addressQM9Q0nA = accounts[3]
		const addressCTFGgoc = accounts[4]
		const addresskfWi0Ob = accounts[0]
		const addressPX0inu = "0x0000000000000000000000000000000000000001"
		const addressq8HxNKT = accounts[0]
		const addressV0MdY5d = accounts[4]
		const addressV5nvURD = accounts[1]
		const addressWfUc5Kz = accounts[1]
		const uintSPB6dgq = BigInt("1140")
		const uintIUymZO2 = BigInt("310")
		const addressZnEJnMK = accounts[2]
		const DmmControllerV2gtjpUCk = await DmmControllerV2.new(addressoVFDlJ, addressQM9Q0nA, addressCTFGgoc, addresskfWi0Ob, addressPX0inu, addressq8HxNKT, addressV0MdY5d, addressV5nvURD, addressWfUc5Kz, uintSPB6dgq, uintIUymZO2, addressZnEJnMK, {from: accounts[2]});
		const uintn4v52Bx = BigInt("138")
		await DmmControllerV2gtjpUCk.renounceOwnership.call({from: accounts[2]});
		await DmmControllerV2gtjpUCk.onlyBlacklister.call({from: accounts[0]});
		const uintubCHsjO = await DmmControllerV2gtjpUCk.requireIsSecondaryMarketNft.call(uintn4v52Bx, {from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressK1WOTuV = accounts[4]
		const addressqEGChdJ = accounts[3]
		const addresscNeLuPE = accounts[4]
		const addressSr5NHMy = accounts[0]
		const addressLZRRNp = "0x0000000000000000000000000000000000000001"
		const addressvluEBS = accounts[0]
		const addresszz5bMt9 = accounts[4]
		const addressZTSuKFJ = accounts[1]
		const addressdZHIAH = accounts[1]
		const uintAiaHP5M = BigInt("1140")
		const uintYv5EEnP = BigInt("310")
		const addressDvwThh = accounts[2]
		const DmmControllerV2gtjpUCk = await DmmControllerV2.new(addressK1WOTuV, addressqEGChdJ, addresscNeLuPE, addressSr5NHMy, addressLZRRNp, addressvluEBS, addresszz5bMt9, addressZTSuKFJ, addressdZHIAH, uintAiaHP5M, uintYv5EEnP, addressDvwThh, {from: accounts[2]});
		const addressYeT3zgk = accounts[3]
		const addressrmmyBp = await DmmControllerV2gtjpUCk.getUnderlyingTokenForDmm.call(addressYeT3zgk, {from: accounts[3]});
		await DmmControllerV2gtjpUCk.onlyBlacklister.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressXc27aG = accounts[4]
		const addressINYdvA = accounts[3]
		const addressYvkz7DS = accounts[4]
		const addresscCfF4kR = accounts[0]
		const addresswH7nd9V = "0x0000000000000000000000000000000000000001"
		const addressBMzKJs1 = accounts[0]
		const addressYBuTmyC = accounts[4]
		const addressWHn3P86 = accounts[1]
		const address21y8fa = accounts[1]
		const uintUotouBt = BigInt("1140")
		const uintNMHtxDf = BigInt("310")
		const addressE8lZkd2 = accounts[2]
		const DmmControllerV2gtjpUCk = await DmmControllerV2.new(addressXc27aG, addressINYdvA, addressYvkz7DS, addresscCfF4kR, addresswH7nd9V, addressBMzKJs1, addressYBuTmyC, addressWHn3P86, address21y8fa, uintUotouBt, uintNMHtxDf, addressE8lZkd2, {from: accounts[2]});
		const uintktzx7wA = BigInt("86")
		const uint6RdeOK = await DmmControllerV2gtjpUCk.setMinReserveRatio.call(uintktzx7wA, {from: accounts[2]});
		await DmmControllerV2gtjpUCk.onlyBlacklister.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addressBWtzLPg = accounts[4]
		const addresssvxaolP = accounts[3]
		const addressKnJ7fiz = accounts[4]
		const addressRDIFQT1 = accounts[0]
		const addressVrL7Mbk = "0x0000000000000000000000000000000000000001"
		const addresslvlKHds = accounts[0]
		const addressk2yVk19 = accounts[4]
		const addressMrJVrUk = accounts[1]
		const addressVfnbNQ = accounts[1]
		const uintVsAOzuY = BigInt("1140")
		const uintTQHYIwJ = BigInt("310")
		const addressPbINPcR = accounts[2]
		const DmmControllerV2gtjpUCk = await DmmControllerV2.new(addressBWtzLPg, addresssvxaolP, addressKnJ7fiz, addressRDIFQT1, addressVrL7Mbk, addresslvlKHds, addressk2yVk19, addressMrJVrUk, addressVfnbNQ, uintVsAOzuY, uintTQHYIwJ, addressPbINPcR, {from: accounts[2]});
		const addressc1IilWh = accounts[4]
		const addresscOvNIrz = accounts[3]
		const uintbP6dIvu = await DmmControllerV2gtjpUCk.getTotalCollateralization.call({from: accounts[3]});
		await DmmControllerV2gtjpUCk.onlyBlacklister.call({from: accounts[0]});
		const addressiCPiGt = await DmmControllerV2gtjpUCk.setOffChainAssetValuator.call(addressc1IilWh, {from: accounts[0]});
		const addresscGg3bh = await DmmControllerV2gtjpUCk.addPauser.call(addresscOvNIrz, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressZoza4hP = accounts[4]
		const addresssIh191T = accounts[3]
		const addressz7eqqd6 = accounts[4]
		const addressbr3bzy = accounts[0]
		const addresso9IPe8h = "0x0000000000000000000000000000000000000001"
		const addressrb2e6S6 = accounts[0]
		const addressQRP2XnN = accounts[4]
		const addressdLI066K = accounts[1]
		const addressFgcFbGI = accounts[1]
		const uintCj5NlVV = BigInt("1140")
		const uintdTVhqwK = BigInt("310")
		const addressDAYunc = accounts[2]
		const DmmControllerV2gtjpUCk = await DmmControllerV2.new(addressZoza4hP, addresssIh191T, addressz7eqqd6, addressbr3bzy, addresso9IPe8h, addressrb2e6S6, addressQRP2XnN, addressdLI066K, addressFgcFbGI, uintCj5NlVV, uintdTVhqwK, addressDAYunc, {from: accounts[2]});
		const addressiGYWiv8 = accounts[2]
		const addresswF8lie8 = await DmmControllerV2gtjpUCk.addPauser.call(addressiGYWiv8, {from: accounts[1]});
		await DmmControllerV2gtjpUCk.onlyBlacklister.call({from: accounts[0]});
	});
})