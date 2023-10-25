const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrwv3OWAN = accounts[2]
		const FOSTERAddrvSd8Hx = accounts[2]
		const initialRateePtAiwx = BigInt("1402")
		const initialPeriodgENe9Yx = BigInt("729")
		const initialOwnerjWXOqs = accounts[2]
		const contractHxzkjIu = await Reseller.new(USDTAddrwv3OWAN, FOSTERAddrvSd8Hx, initialRateePtAiwx, initialPeriodgENe9Yx, initialOwnerjWXOqs, {from: accounts[3]});
		const newPeriodQLu9zhh = BigInt("1394")
		const valuejvfGCx6 = BigInt("1550")
		const newPeriodQR9OCTg = BigInt("1657")
		const newMinimumMMBzCKb = BigInt("1361")
		await contractHxzkjIu.setPeriod.call(newPeriodQLu9zhh, {from: accounts[4]});
		await contractHxzkjIu.withdraw.call(valuejvfGCx6, {from: accounts[5]});
		await contractHxzkjIu.setPeriod.call(newPeriodQR9OCTg, {from: accounts[4]});
		await contractHxzkjIu.setMinimum.call(newMinimumMMBzCKb, {from: accounts[3]});
		await contractHxzkjIu.switchState.call({from: accounts[5]});

		await expect(contractHxzkjIu.setPeriod.call(newPeriodQLu9zhh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrSb5XBMC = accounts[0]
		const FOSTERAddrvXFBHr2 = accounts[2]
		const initialRateh6CX1r = BigInt("1205")
		const initialPeriodV7W89gd = BigInt("1841")
		const initialOwnerYsiy56t = accounts[4]
		const contractM1yM0A = await Reseller.new(USDTAddrSb5XBMC, FOSTERAddrvXFBHr2, initialRateh6CX1r, initialPeriodV7W89gd, initialOwnerYsiy56t, {from: accounts[2]});
		const accountBcVfaKY = accounts[2]
		const accountQz8yLED = accounts[0]
		const newBoss4EGER3rj = accounts[5]
		const newBoss1MMERqSn = accounts[3]
		const newBoss2dUWq5za = accounts[4]
		const nullvwvbdn0 = await contractM1yM0A.allowanceFOSTER.call(accountBcVfaKY, {from: accounts[3]});
		const nullqynhjHM = await contractM1yM0A.balanceUSDT.call(accountQz8yLED, {from: accounts[4]});
		await contractM1yM0A.deposeBoss4.call(newBoss4EGER3rj, {from: accounts[0]});
		await contractM1yM0A.deposeBoss1.call(newBoss1MMERqSn, {from: accounts[3]});
		await contractM1yM0A.deposeBoss2.call(newBoss2dUWq5za, {from: accounts[0]});

		await expect(contractM1yM0A.allowanceFOSTER.call(accountBcVfaKY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrn2KHq31 = accounts[1]
		const FOSTERAddrMzuyVeU = accounts[0]
		const initialRateXeAasS1 = BigInt("177")
		const initialPeriodCX8YaN = BigInt("1929")
		const initialOwneryHG0pZW = accounts[4]
		const contractOHzgvxr = await Reseller.new(USDTAddrn2KHq31, FOSTERAddrMzuyVeU, initialRateXeAasS1, initialPeriodCX8YaN, initialOwneryHG0pZW, {from: accounts[4]});
		const _periodwCBexbf = BigInt("1539")
		const amountDiwUMb5 = BigInt("1227")
		const recipientMEpFLx2 = accounts[2]
		const newFeegtOgQo = BigInt("153")
		const valueWsS2Y6j = BigInt("1965")
		const recipientAxYzcdO = accounts[2]
		const ERC20TokenmCcdFuf = accounts[0]
		const account3aH8YR = accounts[0]
		await contractOHzgvxr.freezeAndTransfer.call(recipientMEpFLx2, amountDiwUMb5, _periodwCBexbf, {from: accounts[1]});
		await contractOHzgvxr.setFee.call(newFeegtOgQo, {from: accounts[5]});
		await contractOHzgvxr.withdrawERC20.call(ERC20TokenmCcdFuf, recipientAxYzcdO, valueWsS2Y6j, {from: accounts[0]});
		const nullWpRTVG = await contractOHzgvxr.balanceUSDT.call(account3aH8YR, {from: accounts[2]});

		await expect(contractOHzgvxr.freezeAndTransfer.call(recipientMEpFLx2, amountDiwUMb5, _periodwCBexbf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTbgEot2 = accounts[2]
		const FOSTERAddrfs7tDz = "0x0000000000000000000000000000000000000001"
		const initialRatesRffjl = BigInt("733")
		const initialPeriodlIJSiRP = BigInt("1503")
		const initialOwnerf5OmXbH = accounts[3]
		const contractkaN0zqF = await Reseller.new(USDTAddrTbgEot2, FOSTERAddrfs7tDz, initialRatesRffjl, initialPeriodlIJSiRP, initialOwnerf5OmXbH, {from: accounts[0]});
		const newMinimumJ3uSPPd = BigInt("1549")
		const newMinimumPRnLjQU = BigInt("360")
		await contractkaN0zqF.setMinimum.call(newMinimumJ3uSPPd, {from: "0x0000000000000000000000000000000000000001"});
		await contractkaN0zqF.switchState.call({from: accounts[0]});
		await contractkaN0zqF.setMinimum.call(newMinimumPRnLjQU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractkaN0zqF.setMinimum.call(newMinimumJ3uSPPd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrxdclPVF = accounts[4]
		const FOSTERAddrCli5wxn = accounts[1]
		const initialRatenHNo0Sf = BigInt("26")
		const initialPeriodEIFL0v = BigInt("1363")
		const initialOwnerhPVPtl = accounts[4]
		const contractOF3dkYk = await Reseller.new(USDTAddrxdclPVF, FOSTERAddrCli5wxn, initialRatenHNo0Sf, initialPeriodEIFL0v, initialOwnerhPVPtl, {from: accounts[0]});
		const accountu5QTCw7 = accounts[3]
		const newBoss3KnaqNhZ = accounts[3]
		const _ref5QqhlPeh = accounts[4]
		const _ref4AO7bhxg = accounts[1]
		const _ref3A6y1I9k = accounts[3]
		const _ref2JWMm68R = accounts[1]
		const _ref1hd2WnWD = accounts[1]
		const valueJDUaX7J = BigInt("575")
		const newBoss2vgHxUtl = accounts[0]
		const nullHDldSZs = await contractOF3dkYk.allowanceUSDT.call(accountu5QTCw7, {from: accounts[5]});
		await contractOF3dkYk.deposeBoss3.call(newBoss3KnaqNhZ, {from: accounts[5]});
		await contractOF3dkYk.buy.call(valueJDUaX7J, _ref1hd2WnWD, _ref2JWMm68R, _ref3A6y1I9k, _ref4AO7bhxg, _ref5QqhlPeh, {from: accounts[1]});
		await contractOF3dkYk.deposeBoss2.call(newBoss2vgHxUtl, {from: accounts[0]});

		await expect(contractOF3dkYk.allowanceUSDT.call(accountu5QTCw7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbu1i90U = accounts[2]
		const FOSTERAddrFCcvsSf = accounts[0]
		const initialRatevg4uD0z = BigInt("1369")
		const initialPeriodYs9tDtk = BigInt("1534")
		const initialOwnerzD4aw7V = accounts[3]
		const contractT4kedl = await Reseller.new(USDTAddrbu1i90U, FOSTERAddrFCcvsSf, initialRatevg4uD0z, initialPeriodYs9tDtk, initialOwnerzD4aw7V, {from: accounts[5]});
		const accounteVB63ky = accounts[0]
		const newMinimumKLRu2G9 = BigInt("636")
		const _ref5nsvhWs = accounts[5]
		const _ref4HfFbtI = accounts[4]
		const _ref3ELN2gh0 = accounts[2]
		const _ref2pto6L1O = accounts[0]
		const _ref1ZXngKS = accounts[3]
		const valueeIKWLwF = BigInt("1960")
		const valueYpI0pA = BigInt("733")
		const nullonfC8Tx = await contractT4kedl.balanceFOSTER.call(accounteVB63ky, {from: accounts[2]});
		await contractT4kedl.setMinimum.call(newMinimumKLRu2G9, {from: accounts[3]});
		await contractT4kedl.buy.call(valueeIKWLwF, _ref1ZXngKS, _ref2pto6L1O, _ref3ELN2gh0, _ref4HfFbtI, _ref5nsvhWs, {from: accounts[0]});
		await contractT4kedl.withdraw.call(valueYpI0pA, {from: accounts[2]});

		await expect(contractT4kedl.balanceFOSTER.call(accounteVB63ky, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrMmI3Y35 = accounts[2]
		const FOSTERAddryeEjrbO = accounts[2]
		const initialRateYz2Y0l = BigInt("1704")
		const initialPeriodxayttqL = BigInt("1102")
		const initialOwnerMvvpgd6 = accounts[2]
		const contractktVBgHN = await Reseller.new(USDTAddrMmI3Y35, FOSTERAddryeEjrbO, initialRateYz2Y0l, initialPeriodxayttqL, initialOwnerMvvpgd6, {from: accounts[1]});
		const amountF0axf0e = BigInt("851")
		const accountwoIZtuz = accounts[0]
		const nullcxlhcUB = await contractktVBgHN.getEstimation.call(amountF0axf0e, {from: accounts[5]});
		const nullP9nK7gQ = await contractktVBgHN.allowanceUSDT.call(accountwoIZtuz, {from: accounts[4]});

		assert.equal(nullcxlhcUB, 1450104)
		await expect(contractktVBgHN.allowanceUSDT.call(accountwoIZtuz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrqWi29Nv = accounts[3]
		const FOSTERAddrTsu5rUQ = accounts[3]
		const initialRatep8NhU53 = BigInt("933")
		const initialPeriodHrC3Ggu = BigInt("198")
		const initialOwnerXyDtBz6 = accounts[2]
		const contractEgbvOcC = await Reseller.new(USDTAddrqWi29Nv, FOSTERAddrTsu5rUQ, initialRatep8NhU53, initialPeriodHrC3Ggu, initialOwnerXyDtBz6, {from: "0x0000000000000000000000000000000000000001"});
		const accountMNoVPc4 = accounts[0]
		const valueYK9Fgn9 = BigInt("1004")
		const recipientI8zcAz6 = "0x0000000000000000000000000000000000000001"
		const ERC20TokenyvlH3sC = accounts[3]
		const accountKHKoRJz = accounts[0]
		const valueRWYOOxg = BigInt("491")
		const nullagL8auY = await contractEgbvOcC.allowanceUSDT.call(accountMNoVPc4, {from: accounts[1]});
		await contractEgbvOcC.withdrawERC20.call(ERC20TokenyvlH3sC, recipientI8zcAz6, valueYK9Fgn9, {from: accounts[0]});
		const nullZPo1CB0 = await contractEgbvOcC.balanceFOSTER.call(accountKHKoRJz, {from: accounts[5]});
		await contractEgbvOcC.withdraw.call(valueRWYOOxg, {from: accounts[3]});
	});

	it('test for Reseller', async () => {
		const USDTAddrhExFA3 = accounts[3]
		const FOSTERAddrh0LHo1 = accounts[4]
		const initialRateVvA4wg = BigInt("1305")
		const initialPeriodQoDjkBp = BigInt("1935")
		const initialOwnerMDK3brB = "0x0000000000000000000000000000000000000001"
		const contractRxYKwH = await Reseller.new(USDTAddrhExFA3, FOSTERAddrh0LHo1, initialRateVvA4wg, initialPeriodQoDjkBp, initialOwnerMDK3brB, {from: accounts[5]});
		const valueNkzGeWU = BigInt("530")
		const accountfwt5jp8 = accounts[4]
		const amounthgwXzle = BigInt("1589")
		const valuet2xJ3e0 = BigInt("210")
		const recipientP1RjptP = accounts[5]
		const ERC20TokenWl2ft3P = accounts[2]
		await contractRxYKwH.withdraw.call(valueNkzGeWU, {from: accounts[1]});
		const nullRosoHTO = await contractRxYKwH.balanceFOSTER.call(accountfwt5jp8, {from: accounts[3]});
		const nullWFg6La7 = await contractRxYKwH.getEstimation.call(amounthgwXzle, {from: accounts[0]});
		await contractRxYKwH.withdrawERC20.call(ERC20TokenWl2ft3P, recipientP1RjptP, valuet2xJ3e0, {from: accounts[0]});

		await expect(contractRxYKwH.withdraw.call(valueNkzGeWU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrFOvhOvA = accounts[2]
		const FOSTERAddrbjO6E2r = accounts[0]
		const initialRateh88SU4 = BigInt("1677")
		const initialPeriodhACxjTP = BigInt("1311")
		const initialOwnerG1J481y = accounts[1]
		const contractV9PUgzp = await Reseller.new(USDTAddrFOvhOvA, FOSTERAddrbjO6E2r, initialRateh88SU4, initialPeriodhACxjTP, initialOwnerG1J481y, {from: accounts[4]});
		const amountxO0ZOXN = BigInt("683")
		const newBoss4SAjXs5 = accounts[1]
		const newFeeYXA7Jxh = BigInt("92")
		const accountr3XLU1S = accounts[1]
		const nullmgFfABX = await contractV9PUgzp.getEstimation.call(amountxO0ZOXN, {from: accounts[5]});
		await contractV9PUgzp.deposeBoss4.call(newBoss4SAjXs5, {from: accounts[2]});
		await contractV9PUgzp.setFee.call(newFeeYXA7Jxh, {from: accounts[1]});
		const nullC1Bsjah = await contractV9PUgzp.balanceFOSTER.call(accountr3XLU1S, {from: accounts[0]});

		assert.equal(nullmgFfABX, 1145391)
		await expect(contractV9PUgzp.deposeBoss4.call(newBoss4SAjXs5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddriYHmAPE = accounts[2]
		const FOSTERAddrFSuUqYY = accounts[0]
		const initialRateKy2Rk04 = BigInt("1677")
		const initialPeriodMnzVh5 = BigInt("1311")
		const initialOwnero3qIQp8 = accounts[1]
		const contractz20mcAz = await Reseller.new(USDTAddriYHmAPE, FOSTERAddrFSuUqYY, initialRateKy2Rk04, initialPeriodMnzVh5, initialOwnero3qIQp8, {from: accounts[4]});
		const amountQf25IAA = BigInt("683")
		const newMinimumTpEOaRM = BigInt("474")
		const newBoss4K5Q7tto = accounts[1]
		const newFeeAn77Rf6 = BigInt("92")
		const accountqqUyHWs = accounts[2]
		const nullBqAV2LF = await contractz20mcAz.getEstimation.call(amountQf25IAA, {from: accounts[5]});
		await contractz20mcAz.setMinimum.call(newMinimumTpEOaRM, {from: accounts[1]});
		await contractz20mcAz.deposeBoss4.call(newBoss4K5Q7tto, {from: accounts[2]});
		await contractz20mcAz.setFee.call(newFeeAn77Rf6, {from: accounts[1]});
		const nullpecoSJv = await contractz20mcAz.balanceFOSTER.call(accountqqUyHWs, {from: accounts[0]});

		assert.equal(nullBqAV2LF, 1145391)
		await expect(contractz20mcAz.setMinimum.call(newMinimumTpEOaRM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrJy8CCAr = accounts[0]
		const FOSTERAddrut9CE8B = "0x0000000000000000000000000000000000000001"
		const initialRatean2njN = BigInt("2005")
		const initialPeriodAEbDqTe = BigInt("700")
		const initialOwnerUc6nsaF = accounts[3]
		const contractZx3raG4 = await Reseller.new(USDTAddrJy8CCAr, FOSTERAddrut9CE8B, initialRatean2njN, initialPeriodAEbDqTe, initialOwnerUc6nsaF, {from: accounts[5]});
		const newRateVwuIM8L = BigInt("1240")
		const newFeeXHaol6A = BigInt("97")
		const newBoss4OgAVDeh = accounts[4]
		const commentHfrpfmu = "cFrwdlU4xelVPRBOZCAMjb7TCt75aERzYR5obxjiEiw6XxAfhVyPzn7AgAY2YueCCx56cOM2Qjs48Z2XBQ1cHJVqMh"
		const _ref5VFLzuCm = accounts[3]
		const _ref4jOwJgMd = accounts[2]
		const _ref3MIxP4N4 = accounts[0]
		const _ref2vmKp6L = "0x0000000000000000000000000000000000000001"
		const _ref1LmYeJuC = accounts[1]
		const valueEatFM2v = BigInt("241")
		const amountKPz5ZQI = BigInt("290")
		const commentGdXgyM4 = "MFmDEwOrdtKY2afVGnziF5ZEA3IezYuOi0PgoXh7bSFjYYZBTI3tXLghiBcEAfozvMoG8EndcjD28DVDG1"
		const _ref5uNohdkY = accounts[4]
		const _ref4TmA4qJi = accounts[0]
		const _ref3TnGRFxh = accounts[0]
		const _ref2S60xpWw = accounts[4]
		const _ref1WtZSj5i = accounts[1]
		const valuemPKPA7J = BigInt("1319")
		await contractZx3raG4.setRate.call(newRateVwuIM8L, {from: accounts[2]});
		await contractZx3raG4.setFee.call(newFeeXHaol6A, {from: accounts[0]});
		await contractZx3raG4.deposeBoss4.call(newBoss4OgAVDeh, {from: accounts[2]});
		await contractZx3raG4.purchase.call(valueEatFM2v, _ref1LmYeJuC, _ref2vmKp6L, _ref3MIxP4N4, _ref4jOwJgMd, _ref5VFLzuCm, commentHfrpfmu, {from: accounts[1]});
		const null2iSSZu = await contractZx3raG4.getEstimation.call(amountKPz5ZQI, {from: accounts[2]});
		await contractZx3raG4.purchase.call(valuemPKPA7J, _ref1WtZSj5i, _ref2S60xpWw, _ref3TnGRFxh, _ref4TmA4qJi, _ref5uNohdkY, commentGdXgyM4, {from: accounts[3]});

		await expect(contractZx3raG4.setRate.call(newRateVwuIM8L, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr8eXl8T = accounts[2]
		const FOSTERAddrFqERCTD = accounts[2]
		const initialRateNak3Mml = BigInt("1704")
		const initialPeriodaLDe90d = BigInt("1102")
		const initialOwnerWbjemGB = accounts[2]
		const contractRtXmhQx = await Reseller.new(USDTAddr8eXl8T, FOSTERAddrFqERCTD, initialRateNak3Mml, initialPeriodaLDe90d, initialOwnerWbjemGB, {from: accounts[1]});
		const newBoss1KdsWFN9 = accounts[5]
		const amountph8E8QE = BigInt("851")
		await contractRtXmhQx.deposeBoss1.call(newBoss1KdsWFN9, {from: accounts[3]});
		const nullYivJWMd = await contractRtXmhQx.getEstimation.call(amountph8E8QE, {from: accounts[5]});

		await expect(contractRtXmhQx.deposeBoss1.call(newBoss1KdsWFN9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddreNKsCt = accounts[3]
		const FOSTERAddrCwqOJm9 = accounts[4]
		const initialRaterfpUbnb = BigInt("1305")
		const initialPeriodBbMbNZ = BigInt("1935")
		const initialOwnervkgAdQf = "0x0000000000000000000000000000000000000001"
		const contractNz2BbT = await Reseller.new(USDTAddreNKsCt, FOSTERAddrCwqOJm9, initialRaterfpUbnb, initialPeriodBbMbNZ, initialOwnervkgAdQf, {from: accounts[5]});
		const valuecqu1m1B = BigInt("530")
		const _ref5tFFOTXR = accounts[3]
		const _ref4U1LTz03 = accounts[4]
		const _ref38pyEzE = accounts[0]
		const _ref2mkNg5K = accounts[1]
		const _ref1aJNof5 = accounts[4]
		const valuerNm5VAd = BigInt("562")
		const accountqDiMDB = accounts[4]
		const valueONkt1xd = BigInt("210")
		const recipienthhq44U = accounts[5]
		const ERC20TokenIvfWZVO = accounts[2]
		await contractNz2BbT.switchState.call({from: accounts[4]});
		await contractNz2BbT.withdraw.call(valuecqu1m1B, {from: accounts[1]});
		await contractNz2BbT.buy.call(valuerNm5VAd, _ref1aJNof5, _ref2mkNg5K, _ref38pyEzE, _ref4U1LTz03, _ref5tFFOTXR, {from: accounts[4]});
		const nullQJA2DnW = await contractNz2BbT.balanceFOSTER.call(accountqDiMDB, {from: accounts[3]});
		await contractNz2BbT.withdrawERC20.call(ERC20TokenIvfWZVO, recipienthhq44U, valueONkt1xd, {from: accounts[0]});

		await expect(contractNz2BbT.switchState.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrugBKxl = accounts[2]
		const FOSTERAddrQSTjAfw = accounts[2]
		const initialRateIkbqvQ4 = BigInt("1704")
		const initialPeriodZKnHf5w = BigInt("1102")
		const initialOwneroQJKU9 = accounts[2]
		const contractA5NvQBC = await Reseller.new(USDTAddrugBKxl, FOSTERAddrQSTjAfw, initialRateIkbqvQ4, initialPeriodZKnHf5w, initialOwneroQJKU9, {from: accounts[1]});
		const valueddgXqKt = BigInt("1451")
		const recipientX5vtvu = accounts[1]
		const ERC20TokennlfyuX = accounts[0]
		const newBoss1TfBQdOe = accounts[6]
		await contractA5NvQBC.withdrawERC20.call(ERC20TokennlfyuX, recipientX5vtvu, valueddgXqKt, {from: accounts[1]});
		await contractA5NvQBC.deposeBoss1.call(newBoss1TfBQdOe, {from: accounts[3]});

		await expect(contractA5NvQBC.withdrawERC20.call(ERC20TokennlfyuX, recipientX5vtvu, valueddgXqKt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddruuJJ2BF = accounts[2]
		const FOSTERAddrZScXc5e = accounts[2]
		const initialRatexPUEcNQ = BigInt("1704")
		const initialPeriodXvI4Pzo = BigInt("1102")
		const initialOwnerxwDHf5H = accounts[2]
		const contractZqLIlvv = await Reseller.new(USDTAddruuJJ2BF, FOSTERAddrZScXc5e, initialRatexPUEcNQ, initialPeriodXvI4Pzo, initialOwnerxwDHf5H, {from: accounts[1]});
		const amountBd8DRl1 = BigInt("851")
		const newBoss2F1vM1cH = accounts[3]
		const nulluFW6sYm = await contractZqLIlvv.getEstimation.call(amountBd8DRl1, {from: accounts[5]});
		await contractZqLIlvv.deposeBoss2.call(newBoss2F1vM1cH, {from: accounts[4]});

		assert.equal(nulluFW6sYm, 1450104)
		await expect(contractZqLIlvv.deposeBoss2.call(newBoss2F1vM1cH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddre3ui3Q = accounts[5]
		const FOSTERAddrZAs641Q = "0x0000000000000000000000000000000000000001"
		const initialRateYF4OxuB = BigInt("842")
		const initialPeriodY7pSQbM = BigInt("24")
		const initialOwnervQEMQHj = accounts[0]
		const contractxUNV7Ji = await Reseller.new(USDTAddre3ui3Q, FOSTERAddrZAs641Q, initialRateYF4OxuB, initialPeriodY7pSQbM, initialOwnervQEMQHj, {from: accounts[0]});
		const level5dzJ98TI = BigInt("69")
		const level4NdNPl7k = BigInt("17")
		const level3K0BpS8 = BigInt("182")
		const level2lf3ZLTe = BigInt("114")
		const level1nkEgHJi = BigInt("55")
		const newBoss1hWaKUQu = accounts[2]
		const newRateEmCOA1t = BigInt("2019")
		const newBoss4FFNyKtT = accounts[1]
		await contractxUNV7Ji.setRefBonus.call(level1nkEgHJi, level2lf3ZLTe, level3K0BpS8, level4NdNPl7k, level5dzJ98TI, {from: "0x0000000000000000000000000000000000000001"});
		await contractxUNV7Ji.deposeBoss1.call(newBoss1hWaKUQu, {from: accounts[5]});
		await contractxUNV7Ji.setRate.call(newRateEmCOA1t, {from: accounts[0]});
		await contractxUNV7Ji.deposeBoss4.call(newBoss4FFNyKtT, {from: accounts[1]});
		await contractxUNV7Ji.switchState.call({from: accounts[2]});

		await expect(contractxUNV7Ji.setRefBonus.call(level1nkEgHJi, level2lf3ZLTe, level3K0BpS8, level4NdNPl7k, level5dzJ98TI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjoxQadD = accounts[2]
		const FOSTERAddrlUBhhOT = accounts[2]
		const initialRateZOhWctk = BigInt("1704")
		const initialPeriodRI3S8Co = BigInt("1102")
		const initialOwnerSk4eckc = accounts[2]
		const contractsiGxm8L = await Reseller.new(USDTAddrjoxQadD, FOSTERAddrlUBhhOT, initialRateZOhWctk, initialPeriodRI3S8Co, initialOwnerSk4eckc, {from: accounts[1]});
		const newBoss3q0IC7N9 = accounts[3]
		const accountM83cPou = accounts[1]
		const value7knCCF = BigInt("1451")
		const recipientJXtivZl = accounts[2]
		const ERC20Tokendt0KF2j = accounts[0]
		await contractsiGxm8L.deposeBoss3.call(newBoss3q0IC7N9, {from: "0x0000000000000000000000000000000000000001"});
		const nullbGwE9Fy = await contractsiGxm8L.balanceUSDT.call(accountM83cPou, {from: accounts[0]});
		await contractsiGxm8L.withdrawERC20.call(ERC20Tokendt0KF2j, recipientJXtivZl, value7knCCF, {from: accounts[1]});

		await expect(contractsiGxm8L.deposeBoss3.call(newBoss3q0IC7N9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrhvEaCY = accounts[2]
		const FOSTERAddrQt11c8P = accounts[2]
		const initialRatexjG6ZUb = BigInt("1704")
		const initialPerioddOEMMkC = BigInt("1102")
		const initialOwnerXs12xR = accounts[2]
		const contractnNFKQv4 = await Reseller.new(USDTAddrhvEaCY, FOSTERAddrQt11c8P, initialRatexjG6ZUb, initialPerioddOEMMkC, initialOwnerXs12xR, {from: accounts[1]});
		const commentXUZ7F1a = "6HRuUvwMq96RfVuFH2udXMiBBKSf8hyCUnXeYTCw9pHnjgwJFdXD4dIgAHrpglERkBK9roO2V7j7GR2t"
		const _ref5o423490 = accounts[1]
		const _ref4KCAFdpJ = accounts[0]
		const _ref3AUzSFmq = accounts[0]
		const _ref2DuyxWAE = accounts[3]
		const _ref1zu7rxCS = accounts[3]
		const valuekFQKpPU = BigInt("508")
		const valueGwi0tNY = BigInt("1451")
		const recipientumnv2BF = accounts[2]
		const ERC20TokenXPPrHf = accounts[0]
		await contractnNFKQv4.purchase.call(valuekFQKpPU, _ref1zu7rxCS, _ref2DuyxWAE, _ref3AUzSFmq, _ref4KCAFdpJ, _ref5o423490, commentXUZ7F1a, {from: accounts[2]});
		await contractnNFKQv4.withdrawERC20.call(ERC20TokenXPPrHf, recipientumnv2BF, valueGwi0tNY, {from: accounts[1]});

		await expect(contractnNFKQv4.purchase.call(valuekFQKpPU, _ref1zu7rxCS, _ref2DuyxWAE, _ref3AUzSFmq, _ref4KCAFdpJ, _ref5o423490, commentXUZ7F1a, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjfIx5k9 = accounts[3]
		const FOSTERAddrFzSbHFo = accounts[4]
		const initialRatecjQAnk = BigInt("1305")
		const initialPeriodeiCBjbz = BigInt("1935")
		const initialOwnerDvgrpj7 = "0x0000000000000000000000000000000000000001"
		const contractyTA78a1 = await Reseller.new(USDTAddrjfIx5k9, FOSTERAddrFzSbHFo, initialRatecjQAnk, initialPeriodeiCBjbz, initialOwnerDvgrpj7, {from: accounts[5]});
		const _ref5lrZHr8 = accounts[5]
		const _ref4T61D6yv = accounts[1]
		const _ref3xEz4Bi = accounts[5]
		const _ref2WRunCvZ = accounts[1]
		const _ref1AoyyJHG = accounts[0]
		const valuejZHKiaL = BigInt("1543")
		const newBoss3KZYqr3G = accounts[0]
		const valuee2qofgv = BigInt("530")
		const valueCzxn4ap = BigInt("843")
		const recipientXzQoA4x = accounts[5]
		const ERC20TokenElq5FLR = "0x0000000000000000000000000000000000000001"
		await contractyTA78a1.buy.call(valuejZHKiaL, _ref1AoyyJHG, _ref2WRunCvZ, _ref3xEz4Bi, _ref4T61D6yv, _ref5lrZHr8, {from: "0x0000000000000000000000000000000000000001"});
		await contractyTA78a1.deposeBoss3.call(newBoss3KZYqr3G, {from: accounts[0]});
		await contractyTA78a1.withdraw.call(valuee2qofgv, {from: accounts[1]});
		await contractyTA78a1.withdrawERC20.call(ERC20TokenElq5FLR, recipientXzQoA4x, valueCzxn4ap, {from: accounts[5]});

		await expect(contractyTA78a1.buy.call(valuejZHKiaL, _ref1AoyyJHG, _ref2WRunCvZ, _ref3xEz4Bi, _ref4T61D6yv, _ref5lrZHr8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrF7qxG2 = accounts[3]
		const FOSTERAddrM9oFWAU = accounts[2]
		const initialRatecWwuT8 = BigInt("1300")
		const initialPeriodFRprVon = BigInt("1195")
		const initialOwnerUARznU = accounts[2]
		const contractYZWZPbg = await Reseller.new(USDTAddrF7qxG2, FOSTERAddrM9oFWAU, initialRatecWwuT8, initialPeriodFRprVon, initialOwnerUARznU, {from: accounts[3]});
		const accountC3UALh0 = accounts[0]
		const newMinimumZDEhgLM = BigInt("815")
		const _periodtrYkf3Q = BigInt("945")
		const amountHtn55xM = BigInt("473")
		const recipientrv1tHqZ = accounts[3]
		const newBoss1hU5rSfC = accounts[2]
		const level5Yzv4eFW = BigInt("235")
		const level4GIQZpaE = BigInt("254")
		const level33ZXHtr = BigInt("213")
		const level2UDuRlCW = BigInt("15")
		const level1p6f2bIZ = BigInt("240")
		const nullazUslzM = await contractYZWZPbg.balanceUSDT.call(accountC3UALh0, {from: accounts[2]});
		await contractYZWZPbg.setMinimum.call(newMinimumZDEhgLM, {from: accounts[5]});
		await contractYZWZPbg.freezeAndTransfer.call(recipientrv1tHqZ, amountHtn55xM, _periodtrYkf3Q, {from: accounts[0]});
		await contractYZWZPbg.deposeBoss1.call(newBoss1hU5rSfC, {from: accounts[3]});
		await contractYZWZPbg.setRefBonus.call(level1p6f2bIZ, level2UDuRlCW, level33ZXHtr, level4GIQZpaE, level5Yzv4eFW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractYZWZPbg.balanceUSDT.call(accountC3UALh0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrPPRJOQG = accounts[3]
		const FOSTERAddrPQ0JorD = accounts[4]
		const initialRateqRe4Vij = BigInt("1305")
		const initialPeriodUrb4vXp = BigInt("1935")
		const initialOwnerMWgf64b = "0x0000000000000000000000000000000000000001"
		const contractyyBj4sz = await Reseller.new(USDTAddrPPRJOQG, FOSTERAddrPQ0JorD, initialRateqRe4Vij, initialPeriodUrb4vXp, initialOwnerMWgf64b, {from: accounts[5]});
		const newFees0QSzSJ = BigInt("200")
		const valueiUlhfax = BigInt("530")
		const commentFhVEUjb = "PmwTbiVSvkI4xXeA2jzHLL8sxqP4oukfuWbdSXPtgkrlegPEgam7Lqu6fG5HutyazodB50wc"
		const _ref5RA1Laaa = accounts[0]
		const _ref45RIvkM = accounts[2]
		const _ref3Wf5HuSj = accounts[2]
		const _ref2jgXx3oT = accounts[1]
		const _ref1S6jYCD2 = accounts[3]
		const valueNQAsTen = BigInt("168")
		await contractyyBj4sz.setFee.call(newFees0QSzSJ, {from: accounts[1]});
		await contractyyBj4sz.switchState.call({from: accounts[1]});
		await contractyyBj4sz.withdraw.call(valueiUlhfax, {from: accounts[1]});
		await contractyyBj4sz.purchase.call(valueNQAsTen, _ref1S6jYCD2, _ref2jgXx3oT, _ref3Wf5HuSj, _ref45RIvkM, _ref5RA1Laaa, commentFhVEUjb, {from: accounts[0]});

		await expect(contractyyBj4sz.setFee.call(newFees0QSzSJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdnuMCOg = accounts[2]
		const FOSTERAddrU4ChT0l = accounts[2]
		const initialRateZF9FEYe = BigInt("1704")
		const initialPeriodYuK1us5 = BigInt("1102")
		const initialOwnerUr0QbRG = accounts[2]
		const contractNN0cEzP = await Reseller.new(USDTAddrdnuMCOg, FOSTERAddrU4ChT0l, initialRateZF9FEYe, initialPeriodYuK1us5, initialOwnerUr0QbRG, {from: accounts[1]});
		const _periodzJafrs5 = BigInt("287")
		const amounttlrKm4W = BigInt("696")
		const recipientxjjvMFY = accounts[2]
		const valueZzAMdt = BigInt("365")
		const recipientgRftwqD = accounts[2]
		const ERC20TokenvniRaA = accounts[0]
		await contractNN0cEzP.freezeAndTransfer.call(recipientxjjvMFY, amounttlrKm4W, _periodzJafrs5, {from: accounts[2]});
		await contractNN0cEzP.withdrawERC20.call(ERC20TokenvniRaA, recipientgRftwqD, valueZzAMdt, {from: accounts[1]});

		await expect(contractNN0cEzP.freezeAndTransfer.call(recipientxjjvMFY, amounttlrKm4W, _periodzJafrs5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrFBso3gn = accounts[3]
		const FOSTERAddrhxoCHLT = accounts[4]
		const initialRatekdvU0dh = BigInt("1305")
		const initialPeriodJpiuhz0 = BigInt("1935")
		const initialOwnerfDZxswJ = "0x0000000000000000000000000000000000000001"
		const contractUGdpmm = await Reseller.new(USDTAddrFBso3gn, FOSTERAddrhxoCHLT, initialRatekdvU0dh, initialPeriodJpiuhz0, initialOwnerfDZxswJ, {from: accounts[5]});
		const newFeeYwkC7ek = BigInt("56")
		const newBoss2AFC4Q7G = accounts[4]
		const valuetShmi56 = BigInt("1270")
		await contractUGdpmm.setFee.call(newFeeYwkC7ek, {from: "0x0000000000000000000000000000000000000001"});
		await contractUGdpmm.deposeBoss2.call(newBoss2AFC4Q7G, {from: accounts[0]});
		await contractUGdpmm.withdraw.call(valuetShmi56, {from: accounts[1]});

		await expect(contractUGdpmm.setFee.call(newFeeYwkC7ek, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrOdeXlCK = accounts[3]
		const FOSTERAddrW5lpqgb = accounts[4]
		const initialRateK8iggLe = BigInt("1305")
		const initialPeriodTahy43 = BigInt("1935")
		const initialOwnerOZJfHBw = "0x0000000000000000000000000000000000000001"
		const contractdiop6kw = await Reseller.new(USDTAddrOdeXlCK, FOSTERAddrW5lpqgb, initialRateK8iggLe, initialPeriodTahy43, initialOwnerOZJfHBw, {from: accounts[5]});
		const newBoss3uk2nkak = accounts[2]
		const newRateEZk3jv = BigInt("457")
		const valueMnlb6y = BigInt("530")
		await contractdiop6kw.deposeBoss3.call(newBoss3uk2nkak, {from: "0x0000000000000000000000000000000000000001"});
		await contractdiop6kw.setRate.call(newRateEZk3jv, {from: accounts[1]});
		await contractdiop6kw.withdraw.call(valueMnlb6y, {from: accounts[1]});

		await expect(contractdiop6kw.deposeBoss3.call(newBoss3uk2nkak, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrrUrqFSK = accounts[2]
		const FOSTERAddrkzL6u9M = accounts[2]
		const initialRateNIN6nC = BigInt("1704")
		const initialPerioduL2bUqn = BigInt("1102")
		const initialOwnerzBOsx6X = accounts[2]
		const contractHzcUTKl = await Reseller.new(USDTAddrrUrqFSK, FOSTERAddrkzL6u9M, initialRateNIN6nC, initialPerioduL2bUqn, initialOwnerzBOsx6X, {from: accounts[1]});
		const amountFHfIQQV = BigInt("822")
		const newBoss4ZuDy5jY = "0x0000000000000000000000000000000000000001"
		const newBoss2NLADr8 = accounts[3]
		const nullitX7Sgh = await contractHzcUTKl.getEstimation.call(amountFHfIQQV, {from: accounts[5]});
		await contractHzcUTKl.deposeBoss4.call(newBoss4ZuDy5jY, {from: accounts[2]});
		await contractHzcUTKl.deposeBoss2.call(newBoss2NLADr8, {from: accounts[2]});

		assert.equal(nullitX7Sgh, 1400688)
		await expect(contractHzcUTKl.deposeBoss4.call(newBoss4ZuDy5jY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTXKEVVt = accounts[2]
		const FOSTERAddrRyHT2n5 = accounts[2]
		const initialRatebN6XGyt = BigInt("1704")
		const initialPeriodCRLZ0G9 = BigInt("1102")
		const initialOwnery7P73O9 = accounts[2]
		const contractVCRN6qW = await Reseller.new(USDTAddrTXKEVVt, FOSTERAddrRyHT2n5, initialRatebN6XGyt, initialPeriodCRLZ0G9, initialOwnery7P73O9, {from: accounts[1]});
		const level5UJ8qrrv = BigInt("244")
		const level4B5ebio = BigInt("159")
		const level3Sciti9w = BigInt("206")
		const level2smcVLMr = BigInt("221")
		const level1XSuu7SA = BigInt("64")
		const amountTQcFUf9 = BigInt("2033")
		await contractVCRN6qW.setRefBonus.call(level1XSuu7SA, level2smcVLMr, level3Sciti9w, level4B5ebio, level5UJ8qrrv, {from: accounts[2]});
		const nullmcIreah = await contractVCRN6qW.getEstimation.call(amountTQcFUf9, {from: accounts[5]});

		assert.equal(nullmcIreah, 3464232)
	});

	it('test for Reseller', async () => {
		const USDTAddrSk5Buj = accounts[1]
		const FOSTERAddrBf9m59l = accounts[4]
		const initialRateAdQXkGx = BigInt("834")
		const initialPeriodvv5SFS = BigInt("1961")
		const initialOwneryrOM00l = accounts[1]
		const contractSdTtae2 = await Reseller.new(USDTAddrSk5Buj, FOSTERAddrBf9m59l, initialRateAdQXkGx, initialPeriodvv5SFS, initialOwneryrOM00l, {from: accounts[3]});
		const newPeriodDIbI0Ha = BigInt("258")
		const newMinimumxmASCR = BigInt("901")
		await contractSdTtae2.setPeriod.call(newPeriodDIbI0Ha, {from: accounts[1]});
		await contractSdTtae2.setMinimum.call(newMinimumxmASCR, {from: accounts[0]});
		await contractSdTtae2.switchState.call({from: "0x0000000000000000000000000000000000000001"});
		await contractSdTtae2.switchState.call({from: accounts[1]});

		await expect(contractSdTtae2.setPeriod.call(newPeriodDIbI0Ha, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCGCrZbN = accounts[3]
		const FOSTERAddrhI2hiip = accounts[4]
		const initialRateN3p18Ou = BigInt("1305")
		const initialPeriodws2FLQ = BigInt("1935")
		const initialOwnera6F2OKd = "0x0000000000000000000000000000000000000001"
		const contractVHGV9EA = await Reseller.new(USDTAddrCGCrZbN, FOSTERAddrhI2hiip, initialRateN3p18Ou, initialPeriodws2FLQ, initialOwnera6F2OKd, {from: accounts[5]});
		const valueQcKYXuu = BigInt("530")
		await contractVHGV9EA.switchState.call({from: "0x0000000000000000000000000000000000000001"});
		await contractVHGV9EA.withdraw.call(valueQcKYXuu, {from: accounts[1]});

		await expect(contractVHGV9EA.switchState.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})