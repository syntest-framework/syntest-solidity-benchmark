const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrthsHFZt = accounts[3]
		const FOSTERAddr9EqVK1 = accounts[4]
		const initialRatedycbNJ = BigInt("882")
		const initialPeriodXQHwe7Q = BigInt("1961")
		const initialOwnerye17Ab = accounts[0]
		const contracthmDZ9uY = await Reseller.new(USDTAddrthsHFZt, FOSTERAddr9EqVK1, initialRatedycbNJ, initialPeriodXQHwe7Q, initialOwnerye17Ab, {from: accounts[3]});
		const newPeriodyx90jh7 = BigInt("565")
		const newRateVHD6xIj = BigInt("369")
		const accountjXAhkGp = accounts[4]
		const level5zI6MpWG = BigInt("241")
		const level4Ejkp148 = BigInt("83")
		const level3PY7KS2d = BigInt("97")
		const level2hFjAnSD = BigInt("251")
		const level1UzJAmNY = BigInt("3")
		await contracthmDZ9uY.setPeriod.call(newPeriodyx90jh7, {from: accounts[2]});
		await contracthmDZ9uY.setRate.call(newRateVHD6xIj, {from: accounts[3]});
		const nullu1ZR8N = await contracthmDZ9uY.allowanceFOSTER.call(accountjXAhkGp, {from: accounts[1]});
		await contracthmDZ9uY.setRefBonus.call(level1UzJAmNY, level2hFjAnSD, level3PY7KS2d, level4Ejkp148, level5zI6MpWG, {from: accounts[0]});

		await expect(contracthmDZ9uY.setPeriod.call(newPeriodyx90jh7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddri9EBlr8 = accounts[2]
		const FOSTERAddrP20imD0 = accounts[4]
		const initialRatePZH63mf = BigInt("801")
		const initialPeriodyfJaX3x = BigInt("1440")
		const initialOwnerad6srG0 = accounts[0]
		const contractaSKSeHC = await Reseller.new(USDTAddri9EBlr8, FOSTERAddrP20imD0, initialRatePZH63mf, initialPeriodyfJaX3x, initialOwnerad6srG0, {from: accounts[0]});
		const accountLrYpqD9 = accounts[4]
		const _ref5K7O21u8 = "0x0000000000000000000000000000000000000001"
		const _ref4rCQBVzr = accounts[4]
		const _ref3WZezUCQ = accounts[4]
		const _ref2Us2AQFM = accounts[4]
		const _ref1iSima5F = accounts[5]
		const valueSSiG5lS = BigInt("1676")
		const level5HXA78tb = BigInt("123")
		const level4ZVp7BCq = BigInt("215")
		const level3S9WXXYS = BigInt("33")
		const level2uypIaw = BigInt("173")
		const level1IkmO354 = BigInt("87")
		const accountxolqTPT = accounts[1]
		const nullJRjpFPa = await contractaSKSeHC.allowanceFOSTER.call(accountLrYpqD9, {from: accounts[0]});
		await contractaSKSeHC.buy.call(valueSSiG5lS, _ref1iSima5F, _ref2Us2AQFM, _ref3WZezUCQ, _ref4rCQBVzr, _ref5K7O21u8, {from: accounts[0]});
		await contractaSKSeHC.setRefBonus.call(level1IkmO354, level2uypIaw, level3S9WXXYS, level4ZVp7BCq, level5HXA78tb, {from: accounts[4]});
		const nullN84TEJQ = await contractaSKSeHC.allowanceUSDT.call(accountxolqTPT, {from: accounts[3]});

		await expect(contractaSKSeHC.allowanceFOSTER.call(accountLrYpqD9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrJI6tgo = accounts[3]
		const FOSTERAddrxmdb1wN = accounts[0]
		const initialRateHG8wS7n = BigInt("1698")
		const initialPeriodgsjaY15 = BigInt("80")
		const initialOwnerZHeYJ4E = accounts[1]
		const contractoU6cGC = await Reseller.new(USDTAddrJI6tgo, FOSTERAddrxmdb1wN, initialRateHG8wS7n, initialPeriodgsjaY15, initialOwnerZHeYJ4E, {from: accounts[1]});
		const newBoss3d39WkDy = accounts[3]
		const newBoss1mqFhNZl = accounts[1]
		const newFeeQywm83U = BigInt("171")
		const newBoss1LOuoTyx = accounts[3]
		const valuecw2sXs4 = BigInt("1026")
		const recipientQSaW2Oy = accounts[3]
		const ERC20TokenEOZYqP1 = "0x0000000000000000000000000000000000000001"
		const accounttMqNcCf = accounts[0]
		await contractoU6cGC.deposeBoss3.call(newBoss3d39WkDy, {from: "0x0000000000000000000000000000000000000001"});
		await contractoU6cGC.deposeBoss1.call(newBoss1mqFhNZl, {from: accounts[0]});
		await contractoU6cGC.setFee.call(newFeeQywm83U, {from: accounts[2]});
		await contractoU6cGC.deposeBoss1.call(newBoss1LOuoTyx, {from: accounts[0]});
		await contractoU6cGC.withdrawERC20.call(ERC20TokenEOZYqP1, recipientQSaW2Oy, valuecw2sXs4, {from: accounts[4]});
		const nullENBltHK = await contractoU6cGC.allowanceUSDT.call(accounttMqNcCf, {from: accounts[0]});

		await expect(contractoU6cGC.deposeBoss3.call(newBoss3d39WkDy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrJ2YlSy = accounts[1]
		const FOSTERAddrMRWyQIP = accounts[3]
		const initialRatekdvdqF1 = BigInt("329")
		const initialPeriodvb1gU6t = BigInt("573")
		const initialOwnerZL1t5Kh = accounts[2]
		const contractcYAmYnd = await Reseller.new(USDTAddrJ2YlSy, FOSTERAddrMRWyQIP, initialRatekdvdqF1, initialPeriodvb1gU6t, initialOwnerZL1t5Kh, {from: accounts[0]});
		const valueoZJG0Ol = BigInt("1250")
		const recipientOvIjWU = accounts[2]
		const ERC20TokenyiuebB5 = accounts[1]
		const amounto2Y2KmR = BigInt("1784")
		const newRateTjPjJ2U = BigInt("1413")
		const accountZbwRcs = accounts[0]
		const newBoss2vA6Qi8B = accounts[0]
		const valueDurliOa = BigInt("525")
		const recipientnyXxNLp = accounts[0]
		const ERC20Tokend7GCoPC = accounts[3]
		await contractcYAmYnd.withdrawERC20.call(ERC20TokenyiuebB5, recipientOvIjWU, valueoZJG0Ol, {from: accounts[0]});
		const nullQcwx5Dt = await contractcYAmYnd.getEstimation.call(amounto2Y2KmR, {from: accounts[0]});
		await contractcYAmYnd.setRate.call(newRateTjPjJ2U, {from: accounts[4]});
		const nullBMhaxHR = await contractcYAmYnd.balanceUSDT.call(accountZbwRcs, {from: accounts[3]});
		await contractcYAmYnd.deposeBoss2.call(newBoss2vA6Qi8B, {from: accounts[1]});
		await contractcYAmYnd.withdrawERC20.call(ERC20Tokend7GCoPC, recipientnyXxNLp, valueDurliOa, {from: accounts[2]});

		await expect(contractcYAmYnd.withdrawERC20.call(ERC20TokenyiuebB5, recipientOvIjWU, valueoZJG0Ol, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQA4m0MA = accounts[1]
		const FOSTERAddrFoZAmgW = "0x0000000000000000000000000000000000000001"
		const initialRatetTiB6ku = BigInt("303")
		const initialPerioduYLrNqO = BigInt("264")
		const initialOwnernKIMRIo = accounts[2]
		const contracttHRCpHv = await Reseller.new(USDTAddrQA4m0MA, FOSTERAddrFoZAmgW, initialRatetTiB6ku, initialPerioduYLrNqO, initialOwnernKIMRIo, {from: accounts[0]});
		const accountnZBzWNs = accounts[0]
		const newBoss3V8RgvnY = accounts[5]
		const accountIP1Y4xu = accounts[1]
		const newPeriodhAuBBN = BigInt("359")
		const nullJGSIIEf = await contracttHRCpHv.balanceFOSTER.call(accountnZBzWNs, {from: accounts[4]});
		await contracttHRCpHv.deposeBoss3.call(newBoss3V8RgvnY, {from: accounts[1]});
		const nullDmSZ5XB = await contracttHRCpHv.allowanceFOSTER.call(accountIP1Y4xu, {from: accounts[3]});
		await contracttHRCpHv.setPeriod.call(newPeriodhAuBBN, {from: accounts[1]});

		await expect(contracttHRCpHv.balanceFOSTER.call(accountnZBzWNs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr58w7xu = accounts[4]
		const FOSTERAddrV0Qqj6K = accounts[0]
		const initialRatemJEZm3D = BigInt("247")
		const initialPeriodg4KOtbI = BigInt("640")
		const initialOwneri2xbvq8 = accounts[2]
		const contractjDiNr9v = await Reseller.new(USDTAddr58w7xu, FOSTERAddrV0Qqj6K, initialRatemJEZm3D, initialPeriodg4KOtbI, initialOwneri2xbvq8, {from: accounts[2]});
		const newFeebJNl3Gn = BigInt("207")
		const newFeepAjwgVS = BigInt("4")
		const newMinimumKORVMjC = BigInt("785")
		const accountKrFtW90 = accounts[4]
		const newBoss4FtyNgRJ = accounts[0]
		await contractjDiNr9v.setFee.call(newFeebJNl3Gn, {from: accounts[3]});
		await contractjDiNr9v.setFee.call(newFeepAjwgVS, {from: accounts[3]});
		await contractjDiNr9v.setMinimum.call(newMinimumKORVMjC, {from: accounts[2]});
		const nullLuPXVqb = await contractjDiNr9v.allowanceUSDT.call(accountKrFtW90, {from: accounts[3]});
		await contractjDiNr9v.deposeBoss4.call(newBoss4FtyNgRJ, {from: accounts[0]});

		await expect(contractjDiNr9v.setFee.call(newFeebJNl3Gn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrtq18TTi = accounts[2]
		const FOSTERAddrMS7H9yh = accounts[2]
		const initialRatefmX6WCg = BigInt("886")
		const initialPeriodjb54wzp = BigInt("407")
		const initialOwnerull7lBE = accounts[1]
		const contracthGpdzY2 = await Reseller.new(USDTAddrtq18TTi, FOSTERAddrMS7H9yh, initialRatefmX6WCg, initialPeriodjb54wzp, initialOwnerull7lBE, {from: accounts[3]});
		const newBoss2gQhKQb5 = "0x0000000000000000000000000000000000000001"
		const accountOj9mlmD = accounts[5]
		const newBoss1U4VUPx = accounts[4]
		await contracthGpdzY2.deposeBoss2.call(newBoss2gQhKQb5, {from: accounts[3]});
		const nullRqAaIfX = await contracthGpdzY2.balanceUSDT.call(accountOj9mlmD, {from: accounts[4]});
		await contracthGpdzY2.deposeBoss1.call(newBoss1U4VUPx, {from: accounts[2]});

		await expect(contracthGpdzY2.deposeBoss2.call(newBoss2gQhKQb5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrz4OP5ON = accounts[5]
		const FOSTERAddrlTqFG9Y = accounts[4]
		const initialRateith2s9i = BigInt("463")
		const initialPeriodw9Y2pyj = BigInt("2014")
		const initialOwneriwt0It6 = accounts[3]
		const contractbKun5HR = await Reseller.new(USDTAddrz4OP5ON, FOSTERAddrlTqFG9Y, initialRateith2s9i, initialPeriodw9Y2pyj, initialOwneriwt0It6, {from: accounts[4]});
		const level5hXovBfx = BigInt("59")
		const level4bp5AimA = BigInt("27")
		const level3qJKVt0 = BigInt("208")
		const level2bhiOEV = BigInt("67")
		const level1xSbFG8X = BigInt("224")
		const accountG20iDgg = accounts[2]
		const commentrKzwkvz = "F5jjLmmfmPRq4P1ewkFalcw0aNHaWxYSLDc"
		const _ref5XuFDL2z = accounts[3]
		const _ref4IxsHpz = accounts[2]
		const _ref3wZkj7t = accounts[0]
		const _ref2TAxLlbg = accounts[2]
		const _ref1FLp5Lw9 = accounts[0]
		const valueQGjjiVn = BigInt("481")
		const valuedW5o07d = BigInt("1655")
		const newBoss1edkEfL = accounts[2]
		const _ref5RnIqyEF = accounts[0]
		const _ref4jC3uusx = accounts[0]
		const _ref3reKDn2J = accounts[0]
		const _ref2EmwJ3VZ = accounts[3]
		const _ref1VGrrZOD = accounts[2]
		const valueuE0r8VO = BigInt("1406")
		await contractbKun5HR.setRefBonus.call(level1xSbFG8X, level2bhiOEV, level3qJKVt0, level4bp5AimA, level5hXovBfx, {from: accounts[2]});
		const nullr4hhJ2o = await contractbKun5HR.balanceUSDT.call(accountG20iDgg, {from: accounts[1]});
		await contractbKun5HR.purchase.call(valueQGjjiVn, _ref1FLp5Lw9, _ref2TAxLlbg, _ref3wZkj7t, _ref4IxsHpz, _ref5XuFDL2z, commentrKzwkvz, {from: accounts[1]});
		await contractbKun5HR.withdraw.call(valuedW5o07d, {from: accounts[0]});
		await contractbKun5HR.deposeBoss1.call(newBoss1edkEfL, {from: accounts[3]});
		await contractbKun5HR.buy.call(valueuE0r8VO, _ref1VGrrZOD, _ref2EmwJ3VZ, _ref3reKDn2J, _ref4jC3uusx, _ref5RnIqyEF, {from: accounts[1]});

		await expect(contractbKun5HR.setRefBonus.call(level1xSbFG8X, level2bhiOEV, level3qJKVt0, level4bp5AimA, level5hXovBfx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrcHq0HOH = accounts[4]
		const FOSTERAddrBSEV1e9 = accounts[5]
		const initialRateVnFHpmF = BigInt("267")
		const initialPeriodxSQSjL4 = BigInt("1816")
		const initialOwnerx2d5EP5 = accounts[2]
		const contractTwA53B = await Reseller.new(USDTAddrcHq0HOH, FOSTERAddrBSEV1e9, initialRateVnFHpmF, initialPeriodxSQSjL4, initialOwnerx2d5EP5, {from: "0x0000000000000000000000000000000000000001"});
		const accountyI9Ia6i = accounts[1]
		const accountsH9DXhs = accounts[3]
		const commentKfMpuHt = "af9mRcQ9yI85P7upp0rLrl8P4sAnTE2kuUMFlQMk1iPV9bOVTFisVJTRi"
		const _ref5e0MiXrM = accounts[3]
		const _ref4EV5zKI6 = accounts[2]
		const _ref3UKvbWV4 = accounts[0]
		const _ref2RLHZwX7 = accounts[0]
		const _ref1vgf2SXs = accounts[2]
		const valueOMt5xB3 = BigInt("346")
		const nulltgUB0uw = await contractTwA53B.balanceFOSTER.call(accountyI9Ia6i, {from: accounts[1]});
		const nullGimtFWz = await contractTwA53B.balanceUSDT.call(accountsH9DXhs, {from: accounts[0]});
		await contractTwA53B.purchase.call(valueOMt5xB3, _ref1vgf2SXs, _ref2RLHZwX7, _ref3UKvbWV4, _ref4EV5zKI6, _ref5e0MiXrM, commentKfMpuHt, {from: accounts[1]});
	});

	it('test for Reseller', async () => {
		const USDTAddrEbJgklT = accounts[3]
		const FOSTERAddrSpKzPuN = accounts[0]
		const initialRateBtRAYf = BigInt("1698")
		const initialPeriodDhPq8KO = BigInt("80")
		const initialOwnerxtas8Fc = accounts[1]
		const contractbYm5wUA = await Reseller.new(USDTAddrEbJgklT, FOSTERAddrSpKzPuN, initialRateBtRAYf, initialPeriodDhPq8KO, initialOwnerxtas8Fc, {from: accounts[1]});
		const newPeriodtxHSejn = BigInt("1897")
		const newBoss3xENTwTm = accounts[3]
		const accounthpUoy7C = accounts[0]
		const newBoss1nd66Su9 = accounts[1]
		const newFeeIUdbboa = BigInt("171")
		const newBoss1dLIg5Lb = accounts[3]
		const valueEblE5ih = BigInt("1026")
		const recipientuR0a5jV = accounts[3]
		const ERC20TokenCY9sfNr = "0x0000000000000000000000000000000000000001"
		const accountzAA72O = accounts[0]
		await contractbYm5wUA.setPeriod.call(newPeriodtxHSejn, {from: accounts[1]});
		await contractbYm5wUA.deposeBoss3.call(newBoss3xENTwTm, {from: "0x0000000000000000000000000000000000000001"});
		const nullLjXTcej = await contractbYm5wUA.balanceFOSTER.call(accounthpUoy7C, {from: accounts[5]});
		await contractbYm5wUA.deposeBoss1.call(newBoss1nd66Su9, {from: accounts[0]});
		await contractbYm5wUA.setFee.call(newFeeIUdbboa, {from: accounts[2]});
		await contractbYm5wUA.deposeBoss1.call(newBoss1dLIg5Lb, {from: accounts[0]});
		await contractbYm5wUA.withdrawERC20.call(ERC20TokenCY9sfNr, recipientuR0a5jV, valueEblE5ih, {from: accounts[4]});
		const nullVaxcHd = await contractbYm5wUA.allowanceUSDT.call(accountzAA72O, {from: accounts[0]});

		await expect(contractbYm5wUA.setPeriod.call(newPeriodtxHSejn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrufo5Yi = accounts[2]
		const FOSTERAddrQIW0c27 = accounts[2]
		const initialRateGphO3mH = BigInt("886")
		const initialPeriodqwkvcl = BigInt("407")
		const initialOwnerPHJObw = accounts[1]
		const contractZMa84L = await Reseller.new(USDTAddrufo5Yi, FOSTERAddrQIW0c27, initialRateGphO3mH, initialPeriodqwkvcl, initialOwnerPHJObw, {from: accounts[3]});
		const amountjKzveQH = BigInt("591")
		const newBoss2KZCJNS = "0x0000000000000000000000000000000000000000"
		const accountZJ2bNNM = accounts[5]
		const newBoss1UHgeZd6 = accounts[4]
		const nullWrs7mte = await contractZMa84L.getEstimation.call(amountjKzveQH, {from: accounts[3]});
		await contractZMa84L.deposeBoss2.call(newBoss2KZCJNS, {from: accounts[3]});
		const nullfqcG6pi = await contractZMa84L.balanceUSDT.call(accountZJ2bNNM, {from: accounts[4]});
		await contractZMa84L.deposeBoss1.call(newBoss1UHgeZd6, {from: accounts[2]});

		assert.equal(nullWrs7mte, 523626)
		await expect(contractZMa84L.deposeBoss2.call(newBoss2KZCJNS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrXBq1Mwv = accounts[3]
		const FOSTERAddrrxKNNaq = accounts[0]
		const initialRateoOZZNPA = BigInt("1698")
		const initialPeriod6vkTTq = BigInt("80")
		const initialOwnerbkuwuj9 = accounts[1]
		const contractlqYAeCo = await Reseller.new(USDTAddrXBq1Mwv, FOSTERAddrrxKNNaq, initialRateoOZZNPA, initialPeriod6vkTTq, initialOwnerbkuwuj9, {from: accounts[1]});
		const newBoss1P4V1qwL = accounts[1]
		const newPeriodYaFBeui = BigInt("1049")
		const newFeeQ8J3qly = BigInt("171")
		const newBoss1G3aNz4V = accounts[3]
		const valuerYV9ZIf = BigInt("1026")
		const recipientqiwp2a = accounts[3]
		const ERC20Tokenq7tygTc = "0x0000000000000000000000000000000000000001"
		const accountDqAZmOu = accounts[0]
		await contractlqYAeCo.deposeBoss1.call(newBoss1P4V1qwL, {from: accounts[0]});
		await contractlqYAeCo.setPeriod.call(newPeriodYaFBeui, {from: accounts[0]});
		await contractlqYAeCo.setFee.call(newFeeQ8J3qly, {from: accounts[2]});
		await contractlqYAeCo.deposeBoss1.call(newBoss1G3aNz4V, {from: accounts[0]});
		await contractlqYAeCo.withdrawERC20.call(ERC20Tokenq7tygTc, recipientqiwp2a, valuerYV9ZIf, {from: accounts[4]});
		const nulln1tLOdk = await contractlqYAeCo.allowanceUSDT.call(accountDqAZmOu, {from: accounts[0]});

		await expect(contractlqYAeCo.deposeBoss1.call(newBoss1P4V1qwL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTopZoCA = accounts[2]
		const FOSTERAddrQi5eeS2 = accounts[2]
		const initialRateAZ01dDY = BigInt("886")
		const initialPeriodbHbjHjA = BigInt("407")
		const initialOwnerS9FNU5I = accounts[1]
		const contractQBN3p5s = await Reseller.new(USDTAddrTopZoCA, FOSTERAddrQi5eeS2, initialRateAZ01dDY, initialPeriodbHbjHjA, initialOwnerS9FNU5I, {from: accounts[3]});
		const valuejRVy41R = BigInt("1536")
		const newBoss2tLNtWQt = "0x0000000000000000000000000000000000000001"
		const accountXoe4Bi0 = accounts[6]
		const amountJAwBHzl = BigInt("1563")
		const newBoss1fGdYfk1 = accounts[5]
		const newBoss1ZK3PacZ = accounts[3]
		await contractQBN3p5s.withdraw.call(valuejRVy41R, {from: accounts[4]});
		await contractQBN3p5s.deposeBoss2.call(newBoss2tLNtWQt, {from: accounts[3]});
		const nullPzc8rs3 = await contractQBN3p5s.balanceUSDT.call(accountXoe4Bi0, {from: accounts[4]});
		const nullNvxJ2FR = await contractQBN3p5s.getEstimation.call(amountJAwBHzl, {from: accounts[0]});
		await contractQBN3p5s.deposeBoss1.call(newBoss1fGdYfk1, {from: accounts[2]});
		await contractQBN3p5s.deposeBoss1.call(newBoss1ZK3PacZ, {from: accounts[4]});

		await expect(contractQBN3p5s.withdraw.call(valuejRVy41R, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrcf7YU6 = accounts[4]
		const FOSTERAddrkVDVhj3 = accounts[4]
		const initialRatewjb5mH = BigInt("1043")
		const initialPeriodjtaB3Ao = BigInt("651")
		const initialOwnerB67C8eK = accounts[3]
		const contracteSka8S5 = await Reseller.new(USDTAddrcf7YU6, FOSTERAddrkVDVhj3, initialRatewjb5mH, initialPeriodjtaB3Ao, initialOwnerB67C8eK, {from: accounts[0]});
		const _periodtkKrK7b = BigInt("1109")
		const amountNamsZiM = BigInt("1371")
		const recipientR41gqYO = accounts[3]
		const accountitj3NMB = accounts[4]
		await contracteSka8S5.freezeAndTransfer.call(recipientR41gqYO, amountNamsZiM, _periodtkKrK7b, {from: accounts[0]});
		const nullfsCFtXz = await contracteSka8S5.allowanceUSDT.call(accountitj3NMB, {from: accounts[0]});

		await expect(contracteSka8S5.freezeAndTransfer.call(recipientR41gqYO, amountNamsZiM, _periodtkKrK7b, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrtkkhcpU = accounts[3]
		const FOSTERAddrnLOJlD5 = accounts[0]
		const initialRateET0RRIb = BigInt("1698")
		const initialPeriodFYXkzQd = BigInt("80")
		const initialOwnerc4eaCh3 = accounts[1]
		const contractoE90c5k = await Reseller.new(USDTAddrtkkhcpU, FOSTERAddrnLOJlD5, initialRateET0RRIb, initialPeriodFYXkzQd, initialOwnerc4eaCh3, {from: accounts[1]});
		const commentgWXusXG = "qzMVa3zWpvKtTx8RDlxxTLpedoxHuQk3i3w3kREcInyF"
		const _ref5ecQGBUq = accounts[0]
		const _ref4KxAiAUb = accounts[2]
		const _ref3Fhrouq7 = accounts[0]
		const _ref2LAMHP0h = accounts[5]
		const _ref1qdfRqaf = "0x0000000000000000000000000000000000000001"
		const valuexF98G2W = BigInt("1072")
		const newBoss1GTTyV06 = accounts[4]
		const newBoss4DjM4BbI = accounts[3]
		const valuebj8WLA = BigInt("1026")
		const recipientjggBaPC = accounts[3]
		const ERC20TokennKNsEQZ = "0x0000000000000000000000000000000000000001"
		const accountlX0RROd = accounts[0]
		await contractoE90c5k.purchase.call(valuexF98G2W, _ref1qdfRqaf, _ref2LAMHP0h, _ref3Fhrouq7, _ref4KxAiAUb, _ref5ecQGBUq, commentgWXusXG, {from: accounts[0]});
		await contractoE90c5k.deposeBoss1.call(newBoss1GTTyV06, {from: accounts[0]});
		await contractoE90c5k.deposeBoss4.call(newBoss4DjM4BbI, {from: accounts[1]});
		await contractoE90c5k.withdrawERC20.call(ERC20TokennKNsEQZ, recipientjggBaPC, valuebj8WLA, {from: accounts[4]});
		const nullCUD3D7g = await contractoE90c5k.allowanceUSDT.call(accountlX0RROd, {from: accounts[0]});

		await expect(contractoE90c5k.purchase.call(valuexF98G2W, _ref1qdfRqaf, _ref2LAMHP0h, _ref3Fhrouq7, _ref4KxAiAUb, _ref5ecQGBUq, commentgWXusXG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrnw2Jno = accounts[3]
		const FOSTERAddrK0j4jfr = accounts[0]
		const initialRatedTLZZvc = BigInt("1698")
		const initialPeriodSuLm2E1 = BigInt("80")
		const initialOwnerWkVsXNY = accounts[1]
		const contractzIGiFbo = await Reseller.new(USDTAddrnw2Jno, FOSTERAddrK0j4jfr, initialRatedTLZZvc, initialPeriodSuLm2E1, initialOwnerWkVsXNY, {from: accounts[1]});
		const accountabBblr = accounts[3]
		const commentKyWErsX = "qzMVa3zWpvKtTx8RDlxxTLpedoxHuQk3i3w3kREcInyF"
		const _ref5g0nvn8P = accounts[0]
		const _ref4Z7lkqpR = accounts[2]
		const _ref3swy9LT1 = accounts[0]
		const _ref2Rxcoi92 = accounts[5]
		const _ref1Uuwn6oN = "0x0000000000000000000000000000000000000001"
		const valueXCvApEO = BigInt("1072")
		const newBoss1CEQRKR8 = accounts[4]
		const valueuqFpvWW = BigInt("1026")
		const recipientmnRHKWX = accounts[3]
		const ERC20TokenCH2cjA1 = "0x0000000000000000000000000000000000000001"
		const accountUjhRcVc = accounts[0]
		const nullTZEITY = await contractzIGiFbo.balanceUSDT.call(accountabBblr, {from: accounts[1]});
		await contractzIGiFbo.purchase.call(valueXCvApEO, _ref1Uuwn6oN, _ref2Rxcoi92, _ref3swy9LT1, _ref4Z7lkqpR, _ref5g0nvn8P, commentKyWErsX, {from: accounts[0]});
		await contractzIGiFbo.deposeBoss1.call(newBoss1CEQRKR8, {from: accounts[0]});
		await contractzIGiFbo.withdrawERC20.call(ERC20TokenCH2cjA1, recipientmnRHKWX, valueuqFpvWW, {from: accounts[4]});
		const nullmq9I3v3 = await contractzIGiFbo.allowanceUSDT.call(accountUjhRcVc, {from: accounts[0]});

		await expect(contractzIGiFbo.balanceUSDT.call(accountabBblr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCo6YAdc = accounts[1]
		const FOSTERAddrh7zYvJo = accounts[1]
		const initialRateVXo3Ihm = BigInt("92")
		const initialPeriodUtMC75m = BigInt("71")
		const initialOwnersAtKMN = accounts[0]
		const contractYH1dt7q = await Reseller.new(USDTAddrCo6YAdc, FOSTERAddrh7zYvJo, initialRateVXo3Ihm, initialPeriodUtMC75m, initialOwnersAtKMN, {from: accounts[0]});
		const _ref5pzQbnef = "0x0000000000000000000000000000000000000001"
		const _ref4cH60cL8 = accounts[5]
		const _ref3NqYX42 = accounts[3]
		const _ref2lx1qLRb = accounts[0]
		const _ref1oeYusYF = accounts[4]
		const valueOPGaH9k = BigInt("1570")
		const newBoss1Ok3ZyHZ = "0x0000000000000000000000000000000000000001"
		const newPeriodABD38J = BigInt("1330")
		const amountwCAzgAn = BigInt("997")
		const newRateuuTu8hI = BigInt("395")
		await contractYH1dt7q.buy.call(valueOPGaH9k, _ref1oeYusYF, _ref2lx1qLRb, _ref3NqYX42, _ref4cH60cL8, _ref5pzQbnef, {from: "0x0000000000000000000000000000000000000001"});
		await contractYH1dt7q.deposeBoss1.call(newBoss1Ok3ZyHZ, {from: accounts[1]});
		await contractYH1dt7q.setPeriod.call(newPeriodABD38J, {from: accounts[3]});
		const nullVL0Y9Vo = await contractYH1dt7q.getEstimation.call(amountwCAzgAn, {from: "0x0000000000000000000000000000000000000001"});
		await contractYH1dt7q.setRate.call(newRateuuTu8hI, {from: accounts[2]});

		await expect(contractYH1dt7q.buy.call(valueOPGaH9k, _ref1oeYusYF, _ref2lx1qLRb, _ref3NqYX42, _ref4cH60cL8, _ref5pzQbnef, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrkFtRMmE = accounts[1]
		const FOSTERAddrmmeoTZf = accounts[3]
		const initialRatejADDN4C = BigInt("329")
		const initialPerioddSV567E = BigInt("573")
		const initialOwnerVLTT8jb = accounts[2]
		const contracttoZnPwB = await Reseller.new(USDTAddrkFtRMmE, FOSTERAddrmmeoTZf, initialRatejADDN4C, initialPerioddSV567E, initialOwnerVLTT8jb, {from: accounts[0]});
		const commentVc74Pjd = "3pEuOea8G7fYSojTWziXsnh6xvKwLFR6zfyvsQYihllgWHlDgvRF2pc2DJAD91OYi2rU1ynLgmCjqG"
		const _ref5ggNNrS = accounts[3]
		const _ref4ei7zxSF = accounts[2]
		const _ref3oJO2RIN = accounts[1]
		const _ref2bsK6Do0 = "0x0000000000000000000000000000000000000001"
		const _ref1tDql0yI = "0x0000000000000000000000000000000000000001"
		const value4ka34D = BigInt("702")
		const valueKzGh9qu = BigInt("664")
		const recipientV7YBrpA = accounts[2]
		const ERC20TokenjTEeThd = accounts[1]
		const accountYgQJlWN = accounts[5]
		const amountQzJRor = BigInt("1784")
		const account2SGtsQ = accounts[1]
		const newBoss2xeUbRAl = accounts[0]
		await contracttoZnPwB.purchase.call(value4ka34D, _ref1tDql0yI, _ref2bsK6Do0, _ref3oJO2RIN, _ref4ei7zxSF, _ref5ggNNrS, commentVc74Pjd, {from: accounts[2]});
		await contracttoZnPwB.withdrawERC20.call(ERC20TokenjTEeThd, recipientV7YBrpA, valueKzGh9qu, {from: accounts[0]});
		const nullVLA1a9k = await contracttoZnPwB.balanceFOSTER.call(accountYgQJlWN, {from: accounts[0]});
		const nullW6dXnQ6 = await contracttoZnPwB.getEstimation.call(amountQzJRor, {from: accounts[0]});
		const nullfrK2zZ = await contracttoZnPwB.balanceUSDT.call(account2SGtsQ, {from: accounts[3]});
		await contracttoZnPwB.deposeBoss2.call(newBoss2xeUbRAl, {from: accounts[1]});

		await expect(contracttoZnPwB.purchase.call(value4ka34D, _ref1tDql0yI, _ref2bsK6Do0, _ref3oJO2RIN, _ref4ei7zxSF, _ref5ggNNrS, commentVc74Pjd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrGDmd78i = accounts[0]
		const FOSTERAddrngiOqFq = accounts[5]
		const initialRateFh20U4C = BigInt("1701")
		const initialPeriodVD1o7bk = BigInt("354")
		const initialOwnerPoCZqPY = "0x0000000000000000000000000000000000000001"
		const contractqYndLb = await Reseller.new(USDTAddrGDmd78i, FOSTERAddrngiOqFq, initialRateFh20U4C, initialPeriodVD1o7bk, initialOwnerPoCZqPY, {from: accounts[4]});
		const newPeriodO2ORuRq = BigInt("386")
		const valueB4NdBe6 = BigInt("1631")
		const recipientvuSpyg = accounts[0]
		const ERC20TokenYB42m0I = accounts[0]
		const newBoss4cZdD3us = accounts[2]
		const accountWNAfi5p = accounts[3]
		await contractqYndLb.switchState.call({from: accounts[0]});
		await contractqYndLb.setPeriod.call(newPeriodO2ORuRq, {from: accounts[1]});
		await contractqYndLb.withdrawERC20.call(ERC20TokenYB42m0I, recipientvuSpyg, valueB4NdBe6, {from: accounts[3]});
		await contractqYndLb.deposeBoss4.call(newBoss4cZdD3us, {from: accounts[3]});
		const nullN6ECVKW = await contractqYndLb.allowanceFOSTER.call(accountWNAfi5p, {from: accounts[2]});

		await expect(contractqYndLb.switchState.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrz70mjrL = accounts[5]
		const FOSTERAddrpWUtbdN = accounts[2]
		const initialRateVym29EE = BigInt("270")
		const initialPeriodAsgNmMO = BigInt("388")
		const initialOwnerW4RHGDi = accounts[0]
		const contractVJ1Ti5z = await Reseller.new(USDTAddrz70mjrL, FOSTERAddrpWUtbdN, initialRateVym29EE, initialPeriodAsgNmMO, initialOwnerW4RHGDi, {from: accounts[0]});
		const accountPkzZHxh = accounts[5]
		const newBoss3N4tm1CY = accounts[4]
		const level5hon55sc = BigInt("163")
		const level4PU8dZ9i = BigInt("27")
		const level3vVU7LiP = BigInt("216")
		const level2g7hCzeK = BigInt("150")
		const level1EVty2at = BigInt("220")
		const nulluUcVVZB = await contractVJ1Ti5z.allowanceUSDT.call(accountPkzZHxh, {from: accounts[2]});
		await contractVJ1Ti5z.deposeBoss3.call(newBoss3N4tm1CY, {from: accounts[3]});
		await contractVJ1Ti5z.setRefBonus.call(level1EVty2at, level2g7hCzeK, level3vVU7LiP, level4PU8dZ9i, level5hon55sc, {from: accounts[4]});

		await expect(contractVJ1Ti5z.allowanceUSDT.call(accountPkzZHxh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrhnn8xq = accounts[1]
		const FOSTERAddru5anwFA = accounts[3]
		const initialRateX9qpfgj = BigInt("623")
		const initialPeriodTMYj4jW = BigInt("1857")
		const initialOwnerEUYbK9K = accounts[5]
		const contractFMHKStl = await Reseller.new(USDTAddrhnn8xq, FOSTERAddru5anwFA, initialRateX9qpfgj, initialPeriodTMYj4jW, initialOwnerEUYbK9K, {from: accounts[4]});
		const newBoss4F7gJTvF = accounts[0]
		const newRatedWvCA3S = BigInt("987")
		const newFeeTwtvioH = BigInt("26")
		const level5igmydJY = BigInt("68")
		const level4ErbTqq = BigInt("3")
		const level3Odvo5e2 = BigInt("151")
		const level2OelXgTZ = BigInt("64")
		const level1TJGzCwn = BigInt("217")
		await contractFMHKStl.deposeBoss4.call(newBoss4F7gJTvF, {from: accounts[1]});
		await contractFMHKStl.setRate.call(newRatedWvCA3S, {from: accounts[4]});
		await contractFMHKStl.setFee.call(newFeeTwtvioH, {from: "0x0000000000000000000000000000000000000001"});
		await contractFMHKStl.setRefBonus.call(level1TJGzCwn, level2OelXgTZ, level3Odvo5e2, level4ErbTqq, level5igmydJY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractFMHKStl.deposeBoss4.call(newBoss4F7gJTvF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrYj7ECW9 = accounts[1]
		const FOSTERAddrgkw0hXU = accounts[3]
		const initialRateBHTNlKe = BigInt("1877")
		const initialPeriodlLx09db = BigInt("168")
		const initialOwnerZ8Jf5LR = accounts[4]
		const contractKxYH26m = await Reseller.new(USDTAddrYj7ECW9, FOSTERAddrgkw0hXU, initialRateBHTNlKe, initialPeriodlLx09db, initialOwnerZ8Jf5LR, {from: accounts[2]});
		const newRateQU2BOOl = BigInt("1244")
		const newBoss1SIdpOiB = accounts[5]
		const commentDB0dFgg = "P2hHCivwuku"
		const _ref5iqVvH14 = "0x0000000000000000000000000000000000000001"
		const _ref4R3ZIeWR = accounts[3]
		const _ref3yLjlZhQ = accounts[1]
		const _ref2nCsEC3b = accounts[1]
		const _ref1dU7MHld = accounts[2]
		const valueYWMNeKV = BigInt("192")
		const newBoss1J1nSiEk = accounts[4]
		const newBoss4pHfMhmo = accounts[5]
		await contractKxYH26m.setRate.call(newRateQU2BOOl, {from: accounts[4]});
		await contractKxYH26m.deposeBoss1.call(newBoss1SIdpOiB, {from: accounts[5]});
		await contractKxYH26m.purchase.call(valueYWMNeKV, _ref1dU7MHld, _ref2nCsEC3b, _ref3yLjlZhQ, _ref4R3ZIeWR, _ref5iqVvH14, commentDB0dFgg, {from: accounts[3]});
		await contractKxYH26m.deposeBoss1.call(newBoss1J1nSiEk, {from: "0x0000000000000000000000000000000000000001"});
		await contractKxYH26m.deposeBoss4.call(newBoss4pHfMhmo, {from: accounts[0]});

		await expect(contractKxYH26m.setRate.call(newRateQU2BOOl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrZxqeVVX = accounts[1]
		const FOSTERAddred2J4Tx = accounts[0]
		const initialRateA1Y5YCp = BigInt("1355")
		const initialPeriodeXNkpfE = BigInt("42")
		const initialOwnerXZKasU = accounts[4]
		const contractjxxFofO = await Reseller.new(USDTAddrZxqeVVX, FOSTERAddred2J4Tx, initialRateA1Y5YCp, initialPeriodeXNkpfE, initialOwnerXZKasU, {from: accounts[2]});
		const newFeevdhURPd = BigInt("102")
		const valuecDIjEYG = BigInt("577")
		const recipientWc3bjEQ = accounts[0]
		const ERC20TokenAaYlAcY = accounts[3]
		const _ref5ykbgrK = accounts[3]
		const _ref4HA0yBN3 = accounts[1]
		const _ref3rAizbU = accounts[5]
		const _ref2e2Rs7ed = "0x0000000000000000000000000000000000000001"
		const _ref1ldAIF7e = accounts[3]
		const valueeOZTe4T = BigInt("71")
		const valueuAVx4we = BigInt("354")
		const recipientYkjci9U = accounts[4]
		const ERC20Tokenhz2ukFL = accounts[3]
		await contractjxxFofO.setFee.call(newFeevdhURPd, {from: accounts[4]});
		await contractjxxFofO.withdrawERC20.call(ERC20TokenAaYlAcY, recipientWc3bjEQ, valuecDIjEYG, {from: accounts[3]});
		await contractjxxFofO.buy.call(valueeOZTe4T, _ref1ldAIF7e, _ref2e2Rs7ed, _ref3rAizbU, _ref4HA0yBN3, _ref5ykbgrK, {from: "0x0000000000000000000000000000000000000001"});
		await contractjxxFofO.withdrawERC20.call(ERC20Tokenhz2ukFL, recipientYkjci9U, valueuAVx4we, {from: accounts[3]});

		await expect(contractjxxFofO.setFee.call(newFeevdhURPd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddryTRooU = accounts[1]
		const FOSTERAddrXUV7hzh = accounts[3]
		const initialRateBZakp8 = BigInt("623")
		const initialPeriodm5HcoaU = BigInt("1857")
		const initialOwnerQ0TUKJS = accounts[5]
		const contractnOAqno8 = await Reseller.new(USDTAddryTRooU, FOSTERAddrXUV7hzh, initialRateBZakp8, initialPeriodm5HcoaU, initialOwnerQ0TUKJS, {from: accounts[4]});
		const newMinimumDf0wpSC = BigInt("269")
		const newBoss49YBamO = accounts[0]
		const newRatewJJv0rT = BigInt("1433")
		const level5n3n0LN8 = BigInt("99")
		const level4z9zFyPH = BigInt("206")
		const level3tqp4Qse = BigInt("168")
		const level2jBIfOBI = BigInt("225")
		const level1oBXGxw2 = BigInt("249")
		const newRateCYdVxrp = BigInt("438")
		const newFeevLqGMr = BigInt("26")
		await contractnOAqno8.setMinimum.call(newMinimumDf0wpSC, {from: accounts[0]});
		await contractnOAqno8.deposeBoss4.call(newBoss49YBamO, {from: accounts[1]});
		await contractnOAqno8.setRate.call(newRatewJJv0rT, {from: accounts[4]});
		await contractnOAqno8.setRefBonus.call(level1oBXGxw2, level2jBIfOBI, level3tqp4Qse, level4z9zFyPH, level5n3n0LN8, {from: accounts[2]});
		await contractnOAqno8.setRate.call(newRateCYdVxrp, {from: accounts[2]});
		await contractnOAqno8.setFee.call(newFeevLqGMr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractnOAqno8.setMinimum.call(newMinimumDf0wpSC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrLirnZQ8 = accounts[5]
		const FOSTERAddrzOQVbid = accounts[4]
		const initialRateAc9VvII = BigInt("463")
		const initialPeriodIoyBkoG = BigInt("2014")
		const initialOwneru6XFWO = accounts[3]
		const contract6Ymz9r = await Reseller.new(USDTAddrLirnZQ8, FOSTERAddrzOQVbid, initialRateAc9VvII, initialPeriodIoyBkoG, initialOwneru6XFWO, {from: accounts[4]});
		const newBoss4Vek3NMn = accounts[1]
		const newBoss4JM18GU2 = accounts[1]
		const newBoss4jBND7VL = accounts[4]
		const _ref5ghclK2l = accounts[1]
		const _ref4QCaHCvV = accounts[1]
		const _ref3F3vxKB = accounts[0]
		const _ref2krxFKSa = accounts[3]
		const _ref1WPZkBGe = accounts[3]
		const valueMNnp2Jt = BigInt("1406")
		await contract6Ymz9r.deposeBoss4.call(newBoss4Vek3NMn, {from: accounts[3]});
		await contract6Ymz9r.deposeBoss4.call(newBoss4JM18GU2, {from: accounts[2]});
		await contract6Ymz9r.deposeBoss4.call(newBoss4jBND7VL, {from: accounts[4]});
		await contract6Ymz9r.buy.call(valueMNnp2Jt, _ref1WPZkBGe, _ref2krxFKSa, _ref3F3vxKB, _ref4QCaHCvV, _ref5ghclK2l, {from: accounts[1]});

		await expect(contract6Ymz9r.deposeBoss4.call(newBoss4Vek3NMn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrHa5NjrJ = accounts[2]
		const FOSTERAddrdAoluWr = accounts[2]
		const initialRateD8uqYQ4 = BigInt("886")
		const initialPeriodr1mpuLn = BigInt("407")
		const initialOwnerxNpjoTx = accounts[1]
		const contractbtFkmuG = await Reseller.new(USDTAddrHa5NjrJ, FOSTERAddrdAoluWr, initialRateD8uqYQ4, initialPeriodr1mpuLn, initialOwnerxNpjoTx, {from: accounts[3]});
		const newBoss26UZFRk = "0x00000000000000000000000000000000000000-1"
		const newRateTiOnVGd = BigInt("823")
		const newBoss1npqtb7W = accounts[4]
		await contractbtFkmuG.deposeBoss2.call(newBoss26UZFRk, {from: accounts[3]});
		await contractbtFkmuG.setRate.call(newRateTiOnVGd, {from: "0x0000000000000000000000000000000000000001"});
		await contractbtFkmuG.deposeBoss1.call(newBoss1npqtb7W, {from: accounts[2]});

		await expect(contractbtFkmuG.deposeBoss2.call(newBoss26UZFRk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrOr3tr1 = accounts[5]
		const FOSTERAddrGvfH5c = accounts[4]
		const initialRateuVtaTQL = BigInt("463")
		const initialPeriod4SdTDO = BigInt("2014")
		const initialOwnerIVBQhni = accounts[3]
		const contractQ2nvkBw = await Reseller.new(USDTAddrOr3tr1, FOSTERAddrGvfH5c, initialRateuVtaTQL, initialPeriod4SdTDO, initialOwnerIVBQhni, {from: accounts[4]});
		const level5l0ovdd = BigInt("253")
		const level4a1SYNQ = BigInt("65")
		const level3KM5f6U = BigInt("184")
		const level2jx2T9p9 = BigInt("165")
		const level1J24vLy6 = BigInt("173")
		const _ref5ZXYlAeJ = accounts[1]
		const _ref4vBNERZ = accounts[1]
		const _ref3ZFB21KF = accounts[0]
		const _ref2b30ShvS = accounts[3]
		const _ref1xeIzUBc = accounts[3]
		const valueHam5rCg = BigInt("1406")
		const accountzzY5EWi = accounts[5]
		await contractQ2nvkBw.setRefBonus.call(level1J24vLy6, level2jx2T9p9, level3KM5f6U, level4a1SYNQ, level5l0ovdd, {from: accounts[3]});
		await contractQ2nvkBw.buy.call(valueHam5rCg, _ref1xeIzUBc, _ref2b30ShvS, _ref3ZFB21KF, _ref4vBNERZ, _ref5ZXYlAeJ, {from: accounts[1]});
		const nullCg930X7 = await contractQ2nvkBw.allowanceUSDT.call(accountzzY5EWi, {from: accounts[4]});

		await expect(contractQ2nvkBw.setRefBonus.call(level1J24vLy6, level2jx2T9p9, level3KM5f6U, level4a1SYNQ, level5l0ovdd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrU38wnY0 = accounts[5]
		const FOSTERAddruIpWtN = accounts[4]
		const initialRateS6iX3A = BigInt("463")
		const initialPeriodz7EjKuu = BigInt("2014")
		const initialOwnerI9NDz07 = accounts[3]
		const contractyTCVCzv = await Reseller.new(USDTAddrU38wnY0, FOSTERAddruIpWtN, initialRateS6iX3A, initialPeriodz7EjKuu, initialOwnerI9NDz07, {from: accounts[4]});
		const newMinimumEq10Cj = BigInt("723")
		const valueiGDkzpd = BigInt("1789")
		const _periodkjU8KH9 = BigInt("1491")
		const amountXEPNTjs = BigInt("834")
		const recipientsiWcxeX = accounts[1]
		const _ref5kaZJrw2 = accounts[4]
		const _ref4grD45Sa = accounts[2]
		const _ref3TQJI4l = accounts[2]
		const _ref2g7mZ10h = accounts[5]
		const _ref1lczgRiw = accounts[2]
		const valuedLnjQ4c = BigInt("1246")
		await contractyTCVCzv.setMinimum.call(newMinimumEq10Cj, {from: accounts[3]});
		await contractyTCVCzv.withdraw.call(valueiGDkzpd, {from: accounts[0]});
		await contractyTCVCzv.freezeAndTransfer.call(recipientsiWcxeX, amountXEPNTjs, _periodkjU8KH9, {from: accounts[5]});
		await contractyTCVCzv.buy.call(valuedLnjQ4c, _ref1lczgRiw, _ref2g7mZ10h, _ref3TQJI4l, _ref4grD45Sa, _ref5kaZJrw2, {from: accounts[3]});

		await expect(contractyTCVCzv.setMinimum.call(newMinimumEq10Cj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrZY70W6y = accounts[1]
		const FOSTERAddrUf4H7LH = accounts[1]
		const initialRateyAMAn3 = BigInt("1038")
		const initialPeriodEFFeUtF = BigInt("912")
		const initialOwnern8lCTlg = accounts[2]
		const contract0XZosR = await Reseller.new(USDTAddrZY70W6y, FOSTERAddrUf4H7LH, initialRateyAMAn3, initialPeriodEFFeUtF, initialOwnern8lCTlg, {from: accounts[1]});
		const _periodHB2MPVk = BigInt("2004")
		const amounti9bTxHF = BigInt("14")
		const recipientsrmx9NM = accounts[3]
		const commentPaFLJb2 = "EUyOTV6OFb94EdCR8MUIxbxq3T37bRk6Gop36Vvx2m2G4lL0I4k1MbQCf5"
		const _ref5kYEMTtA = accounts[2]
		const _ref4iULnsAu = accounts[3]
		const _ref3EL43rOD = accounts[1]
		const _ref2b3SH99j = accounts[1]
		const _ref1z0tcAKI = accounts[1]
		const valueZt6MxCy = BigInt("500")
		const accountUpUKhw = accounts[2]
		const level5o2Yo8Kc = BigInt("158")
		const level4Ic9fvLt = BigInt("13")
		const level3PKA0HTs = BigInt("244")
		const level2AFxl2E4 = BigInt("74")
		const level1jM4jaaP = BigInt("173")
		const newFeekBnRt6 = BigInt("188")
		await contract0XZosR.freezeAndTransfer.call(recipientsrmx9NM, amounti9bTxHF, _periodHB2MPVk, {from: accounts[2]});
		await contract0XZosR.purchase.call(valueZt6MxCy, _ref1z0tcAKI, _ref2b3SH99j, _ref3EL43rOD, _ref4iULnsAu, _ref5kYEMTtA, commentPaFLJb2, {from: accounts[5]});
		const nullhpR9QX = await contract0XZosR.allowanceFOSTER.call(accountUpUKhw, {from: accounts[4]});
		await contract0XZosR.setRefBonus.call(level1jM4jaaP, level2AFxl2E4, level3PKA0HTs, level4Ic9fvLt, level5o2Yo8Kc, {from: accounts[0]});
		await contract0XZosR.setFee.call(newFeekBnRt6, {from: accounts[3]});

		await expect(contract0XZosR.freezeAndTransfer.call(recipientsrmx9NM, amounti9bTxHF, _periodHB2MPVk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrHvAFYH = accounts[5]
		const FOSTERAddrfDwoljT = accounts[3]
		const initialRateEaVXwlX = BigInt("1503")
		const initialPeriodglSelS5 = BigInt("1104")
		const initialOwnerksjl23S = accounts[1]
		const contractROVPyWi = await Reseller.new(USDTAddrHvAFYH, FOSTERAddrfDwoljT, initialRateEaVXwlX, initialPeriodglSelS5, initialOwnerksjl23S, {from: accounts[1]});
		const newBoss3Eygq3xa = accounts[0]
		const accounth3hEXkM = accounts[1]
		const _ref5MLgHWq = "0x0000000000000000000000000000000000000001"
		const _ref4BiyXUEE = accounts[4]
		const _ref3FbJvybo = accounts[3]
		const _ref2HdyLrZv = accounts[1]
		const _ref1N20o4lO = accounts[2]
		const valueEaV7ESr = BigInt("608")
		const newRatepskkeXY = BigInt("632")
		const newRatemJN5M7K = BigInt("126")
		const level5l31nK29 = BigInt("159")
		const level4L82sISJ = BigInt("175")
		const level3xKGUXOY = BigInt("111")
		const level2vZkMS9O = BigInt("49")
		const level1nEUs0Nt = BigInt("202")
		await contractROVPyWi.deposeBoss3.call(newBoss3Eygq3xa, {from: accounts[1]});
		const nullhd0LSV0 = await contractROVPyWi.balanceUSDT.call(accounth3hEXkM, {from: accounts[1]});
		await contractROVPyWi.buy.call(valueEaV7ESr, _ref1N20o4lO, _ref2HdyLrZv, _ref3FbJvybo, _ref4BiyXUEE, _ref5MLgHWq, {from: accounts[5]});
		await contractROVPyWi.setRate.call(newRatepskkeXY, {from: accounts[2]});
		await contractROVPyWi.setRate.call(newRatemJN5M7K, {from: accounts[0]});
		await contractROVPyWi.setRefBonus.call(level1nEUs0Nt, level2vZkMS9O, level3xKGUXOY, level4L82sISJ, level5l31nK29, {from: accounts[5]});

		await expect(contractROVPyWi.deposeBoss3.call(newBoss3Eygq3xa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr0gnZNI = accounts[4]
		const FOSTERAddrzLJXUm = accounts[4]
		const initialRatebWZRcuB = BigInt("1043")
		const initialPeriodMbt1i8N = BigInt("651")
		const initialOwnerKBj02L = accounts[3]
		const contractS5Fm0hI = await Reseller.new(USDTAddr0gnZNI, FOSTERAddrzLJXUm, initialRatebWZRcuB, initialPeriodMbt1i8N, initialOwnerKBj02L, {from: accounts[0]});
		await contractS5Fm0hI.switchState.call({from: accounts[3]});
		await contractS5Fm0hI.switchState.call({from: accounts[1]});

		await expect(contractS5Fm0hI.switchState.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})