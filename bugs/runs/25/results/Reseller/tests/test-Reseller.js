const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrw57fhrn = accounts[2]
		const FOSTERAddrzE2zJEw = accounts[4]
		const initialRatez7pBtJ = BigInt("1855")
		const initialPeriodoaufY96 = BigInt("1883")
		const initialOwnerLhYwTO = accounts[4]
		const contractxZi3O4N = await Reseller.new(USDTAddrw57fhrn, FOSTERAddrzE2zJEw, initialRatez7pBtJ, initialPeriodoaufY96, initialOwnerLhYwTO, {from: accounts[0]});
		const newBoss2kO8CobF = accounts[5]
		const commentggngkgG = "ye0sC"
		const _ref5aBZBqTo = accounts[2]
		const _ref4PllaUvM = accounts[5]
		const _ref3eQ0kg9u = accounts[2]
		const _ref2Xwz3mV6 = "0x0000000000000000000000000000000000000001"
		const _ref1CLid81 = accounts[4]
		const valueckA9zwd = BigInt("830")
		const newBoss1WZnEYp = "0x0000000000000000000000000000000000000001"
		await contractxZi3O4N.deposeBoss2.call(newBoss2kO8CobF, {from: accounts[3]});
		await contractxZi3O4N.purchase.call(valueckA9zwd, _ref1CLid81, _ref2Xwz3mV6, _ref3eQ0kg9u, _ref4PllaUvM, _ref5aBZBqTo, commentggngkgG, {from: accounts[3]});
		await contractxZi3O4N.deposeBoss1.call(newBoss1WZnEYp, {from: accounts[1]});

		await expect(contractxZi3O4N.deposeBoss2.call(newBoss2kO8CobF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrfVD5CCg = accounts[0]
		const FOSTERAddrqiIcEn1 = accounts[1]
		const initialRateOyyillJ = BigInt("1116")
		const initialPeriodz3uvVJm = BigInt("1020")
		const initialOwnersLT8gl = accounts[4]
		const contracta0ltlk = await Reseller.new(USDTAddrfVD5CCg, FOSTERAddrqiIcEn1, initialRateOyyillJ, initialPeriodz3uvVJm, initialOwnersLT8gl, {from: accounts[3]});
		const valuei9c5Tkv = BigInt("1031")
		const newBoss4U3kSu0W = accounts[0]
		const newBoss2SEfIE7P = accounts[3]
		const newBoss3pjZvKh = accounts[5]
		await contracta0ltlk.withdraw.call(valuei9c5Tkv, {from: "0x0000000000000000000000000000000000000001"});
		await contracta0ltlk.deposeBoss4.call(newBoss4U3kSu0W, {from: accounts[0]});
		await contracta0ltlk.deposeBoss2.call(newBoss2SEfIE7P, {from: accounts[1]});
		await contracta0ltlk.deposeBoss3.call(newBoss3pjZvKh, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contracta0ltlk.withdraw.call(valuei9c5Tkv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrc08NpbW = accounts[3]
		const FOSTERAddrdLUVocg = accounts[1]
		const initialRateCrtySTC = BigInt("1867")
		const initialPeriodFDomDR0 = BigInt("656")
		const initialOwnerRQ3KKpL = accounts[2]
		const contractd9iWM7V = await Reseller.new(USDTAddrc08NpbW, FOSTERAddrdLUVocg, initialRateCrtySTC, initialPeriodFDomDR0, initialOwnerRQ3KKpL, {from: accounts[3]});
		const _period8hh8mq = BigInt("615")
		const amountsDDYWKv = BigInt("1403")
		const recipientWVjuXZ = accounts[5]
		const _periodFOU19LN = BigInt("291")
		const amountXE4eH6R = BigInt("1959")
		const recipientYuvSJli = accounts[2]
		await contractd9iWM7V.freezeAndTransfer.call(recipientWVjuXZ, amountsDDYWKv, _period8hh8mq, {from: accounts[3]});
		await contractd9iWM7V.freezeAndTransfer.call(recipientYuvSJli, amountXE4eH6R, _periodFOU19LN, {from: accounts[4]});

		await expect(contractd9iWM7V.freezeAndTransfer.call(recipientWVjuXZ, amountsDDYWKv, _period8hh8mq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjsvU89D = accounts[3]
		const FOSTERAddrHWSGhq9 = accounts[1]
		const initialRatezTTd5x5 = BigInt("457")
		const initialPeriodOevW7yx = BigInt("1369")
		const initialOwneruIVTHhF = accounts[4]
		const contractcovO4XR = await Reseller.new(USDTAddrjsvU89D, FOSTERAddrHWSGhq9, initialRatezTTd5x5, initialPeriodOevW7yx, initialOwneruIVTHhF, {from: accounts[3]});
		const _ref5VnWg6p = "0x0000000000000000000000000000000000000001"
		const _ref4xZrm74j = accounts[1]
		const _ref3zxmbLJu = accounts[0]
		const _ref2RxpC5P2 = accounts[3]
		const _ref1qDdLmdZ = accounts[0]
		const valueDt9ZYfN = BigInt("824")
		const newBoss2Jwx8il = accounts[1]
		const valueNa4N3MK = BigInt("332")
		const newRateIKIfFt8 = BigInt("664")
		await contractcovO4XR.buy.call(valueDt9ZYfN, _ref1qDdLmdZ, _ref2RxpC5P2, _ref3zxmbLJu, _ref4xZrm74j, _ref5VnWg6p, {from: accounts[2]});
		await contractcovO4XR.deposeBoss2.call(newBoss2Jwx8il, {from: accounts[3]});
		await contractcovO4XR.withdraw.call(valueNa4N3MK, {from: accounts[0]});
		await contractcovO4XR.setRate.call(newRateIKIfFt8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractcovO4XR.buy.call(valueDt9ZYfN, _ref1qDdLmdZ, _ref2RxpC5P2, _ref3zxmbLJu, _ref4xZrm74j, _ref5VnWg6p, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrSda03ye = accounts[5]
		const FOSTERAddrjyvg6Z = accounts[0]
		const initialRateA48Ai9x = BigInt("1410")
		const initialPeriodDDlSHat = BigInt("196")
		const initialOwner3IvNiM = accounts[3]
		const contractvc8WExX = await Reseller.new(USDTAddrSda03ye, FOSTERAddrjyvg6Z, initialRateA48Ai9x, initialPeriodDDlSHat, initialOwner3IvNiM, {from: accounts[3]});
		const valueno1zGcp = BigInt("218")
		const recipientHtF50PX = accounts[3]
		const ERC20Tokenfgzstcf = accounts[0]
		const accountLMmmfss = "0x0000000000000000000000000000000000000001"
		const level5tS2wibO = BigInt("148")
		const level4VmmrnD = BigInt("197")
		const level3Nmtc6Dc = BigInt("233")
		const level2EANJfnu = BigInt("216")
		const level1fDhdHF8 = BigInt("119")
		const _periodlCbx48K = BigInt("909")
		const amountMCL13ci = BigInt("1583")
		const recipientofJXC63 = accounts[3]
		await contractvc8WExX.withdrawERC20.call(ERC20Tokenfgzstcf, recipientHtF50PX, valueno1zGcp, {from: accounts[4]});
		const nullq340t4n = await contractvc8WExX.balanceUSDT.call(accountLMmmfss, {from: accounts[3]});
		await contractvc8WExX.setRefBonus.call(level1fDhdHF8, level2EANJfnu, level3Nmtc6Dc, level4VmmrnD, level5tS2wibO, {from: accounts[0]});
		await contractvc8WExX.freezeAndTransfer.call(recipientofJXC63, amountMCL13ci, _periodlCbx48K, {from: accounts[2]});

		await expect(contractvc8WExX.withdrawERC20.call(ERC20Tokenfgzstcf, recipientHtF50PX, valueno1zGcp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrIhFxQ3F = accounts[5]
		const FOSTERAddrVPbiG6R = accounts[1]
		const initialRate22mnYw = BigInt("255")
		const initialPeriods6yetRd = BigInt("903")
		const initialOwnerP09rw6I = accounts[0]
		const contractopPlOn7 = await Reseller.new(USDTAddrIhFxQ3F, FOSTERAddrVPbiG6R, initialRate22mnYw, initialPeriods6yetRd, initialOwnerP09rw6I, {from: accounts[1]});
		const commentIppWCkZ = "GbIJnutaxWgvhDcI5hdlM4AYHjVLdo0NBHYvIIrQ"
		const _ref5lO4dF7M = accounts[4]
		const _ref4hLxExKR = accounts[3]
		const _ref3oFnO3r6 = accounts[4]
		const _ref2pMqQqHJ = accounts[1]
		const _ref1WqKqDZV = accounts[1]
		const valueBqsmsy = BigInt("425")
		const newRateYUYKL2A = BigInt("1945")
		const _periodNwmTwTs = BigInt("1495")
		const amountsRk98Cz = BigInt("812")
		const recipientEFgn7Gh = accounts[1]
		const commentK5R0aT = "U4kJo3ARuT3xvQjMAdzjSIsmCemab5XP3Epy1z"
		const _ref5l6QOmo1 = accounts[0]
		const _ref4gYfy393 = accounts[3]
		const _ref3QD3mafS = accounts[0]
		const _ref2K3hzxri = accounts[4]
		const _ref1SoNKql3 = accounts[4]
		const valuebmpfTvk = BigInt("434")
		await contractopPlOn7.purchase.call(valueBqsmsy, _ref1WqKqDZV, _ref2pMqQqHJ, _ref3oFnO3r6, _ref4hLxExKR, _ref5lO4dF7M, commentIppWCkZ, {from: accounts[5]});
		await contractopPlOn7.setRate.call(newRateYUYKL2A, {from: accounts[0]});
		await contractopPlOn7.freezeAndTransfer.call(recipientEFgn7Gh, amountsRk98Cz, _periodNwmTwTs, {from: "0x0000000000000000000000000000000000000001"});
		await contractopPlOn7.purchase.call(valuebmpfTvk, _ref1SoNKql3, _ref2K3hzxri, _ref3QD3mafS, _ref4gYfy393, _ref5l6QOmo1, commentK5R0aT, {from: accounts[2]});

		await expect(contractopPlOn7.purchase.call(valueBqsmsy, _ref1WqKqDZV, _ref2pMqQqHJ, _ref3oFnO3r6, _ref4hLxExKR, _ref5lO4dF7M, commentIppWCkZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbKbvxNj = accounts[1]
		const FOSTERAddrVdVkElx = accounts[3]
		const initialRatenvW0wX1 = BigInt("92")
		const initialPeriodQXvOc6 = BigInt("883")
		const initialOwnerZgmQoIl = accounts[2]
		const contractkTLhOjn = await Reseller.new(USDTAddrbKbvxNj, FOSTERAddrVdVkElx, initialRatenvW0wX1, initialPeriodQXvOc6, initialOwnerZgmQoIl, {from: "0x0000000000000000000000000000000000000001"});
		const valuejnNjAYR = BigInt("1900")
		const accountMnytEVM = accounts[4]
		const valueygBrEyn = BigInt("1730")
		const newBoss2h2XELr5 = accounts[4]
		const valueKVBz04X = BigInt("765")
		await contractkTLhOjn.withdraw.call(valuejnNjAYR, {from: accounts[1]});
		const nullibrEe6E = await contractkTLhOjn.allowanceUSDT.call(accountMnytEVM, {from: accounts[2]});
		await contractkTLhOjn.withdraw.call(valueygBrEyn, {from: accounts[4]});
		await contractkTLhOjn.deposeBoss2.call(newBoss2h2XELr5, {from: accounts[4]});
		await contractkTLhOjn.withdraw.call(valueKVBz04X, {from: accounts[1]});
	});

	it('test for Reseller', async () => {
		const USDTAddrjLjjYp = accounts[4]
		const FOSTERAddrxHgwVQk = "0x0000000000000000000000000000000000000001"
		const initialRateAXRVq7C = BigInt("331")
		const initialPerioddvwdJJZ = BigInt("553")
		const initialOwnerBb7etg0 = accounts[5]
		const contractNeRHFap = await Reseller.new(USDTAddrjLjjYp, FOSTERAddrxHgwVQk, initialRateAXRVq7C, initialPerioddvwdJJZ, initialOwnerBb7etg0, {from: accounts[3]});
		const accountUEgGQHg = accounts[1]
		const newRateF43xZ3d = BigInt("1594")
		const commenthQrT3SY = "2kyWbpIgjIwfA9oEYrpzCXXwqkCIQ8UAAZ197bfbvBNE7TzvM7m6H2S4sHLrrhkHvrtBg5frDbTmzV658SV46glY9XyM"
		const _ref5ZjFnNNl = accounts[3]
		const _ref4epUQ3dM = accounts[0]
		const _ref3W5FMzS = accounts[0]
		const _ref2r22eB7n = accounts[2]
		const _ref1Jxa1mMO = accounts[3]
		const valueOReIM9 = BigInt("1512")
		const valueaKfI7ES = BigInt("889")
		const recipientyrM3QD0 = accounts[0]
		const ERC20TokenKktLZYK = accounts[0]
		const nullN6GF7vK = await contractNeRHFap.balanceUSDT.call(accountUEgGQHg, {from: accounts[1]});
		await contractNeRHFap.setRate.call(newRateF43xZ3d, {from: accounts[1]});
		await contractNeRHFap.purchase.call(valueOReIM9, _ref1Jxa1mMO, _ref2r22eB7n, _ref3W5FMzS, _ref4epUQ3dM, _ref5ZjFnNNl, commenthQrT3SY, {from: accounts[5]});
		await contractNeRHFap.withdrawERC20.call(ERC20TokenKktLZYK, recipientyrM3QD0, valueaKfI7ES, {from: accounts[5]});

		await expect(contractNeRHFap.balanceUSDT.call(accountUEgGQHg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbBC0EdT = accounts[4]
		const FOSTERAddrlZLGYgN = accounts[1]
		const initialRatevBY1CcJ = BigInt("2001")
		const initialPeriodW3OKcM = BigInt("1348")
		const initialOwnerdwop7SJ = accounts[4]
		const contractiTIyzEK = await Reseller.new(USDTAddrbBC0EdT, FOSTERAddrlZLGYgN, initialRatevBY1CcJ, initialPeriodW3OKcM, initialOwnerdwop7SJ, {from: accounts[0]});
		const newPeriodKVUJg4w = BigInt("839")
		const level5k6EYf3U = BigInt("115")
		const level4ZYmIzh = BigInt("73")
		const level3q1LMw7n = BigInt("176")
		const level2hxuRdOX = BigInt("191")
		const level1N2Wb69s = BigInt("215")
		const _periodOJpejd2 = BigInt("169")
		const amountaLxue1 = BigInt("641")
		const recipientH162mZv = accounts[0]
		const _periodSFfqZWG = BigInt("2028")
		const amountvaIkFKt = BigInt("547")
		const recipientFahIiId = accounts[0]
		const newBoss2sm6r9B = "0x0000000000000000000000000000000000000000"
		await contractiTIyzEK.setPeriod.call(newPeriodKVUJg4w, {from: accounts[0]});
		await contractiTIyzEK.setRefBonus.call(level1N2Wb69s, level2hxuRdOX, level3q1LMw7n, level4ZYmIzh, level5k6EYf3U, {from: accounts[3]});
		await contractiTIyzEK.switchState.call({from: accounts[0]});
		await contractiTIyzEK.freezeAndTransfer.call(recipientH162mZv, amountaLxue1, _periodOJpejd2, {from: accounts[5]});
		await contractiTIyzEK.freezeAndTransfer.call(recipientFahIiId, amountvaIkFKt, _periodSFfqZWG, {from: accounts[0]});
		await contractiTIyzEK.deposeBoss2.call(newBoss2sm6r9B, {from: accounts[2]});

		await expect(contractiTIyzEK.setPeriod.call(newPeriodKVUJg4w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrzTo6YoW = accounts[3]
		const FOSTERAddrqjqpEpa = accounts[1]
		const initialRateDPVxtzd = BigInt("1867")
		const initialPeriodayqIlj = BigInt("656")
		const initialOwnerYqGcjNq = accounts[2]
		const contractDoet6vt = await Reseller.new(USDTAddrzTo6YoW, FOSTERAddrqjqpEpa, initialRateDPVxtzd, initialPeriodayqIlj, initialOwnerYqGcjNq, {from: accounts[3]});
		const accountl9Rm1wL = accounts[3]
		const _periodBFBq7Rp = BigInt("615")
		const amountSpBSssS = BigInt("1403")
		const recipientF4woou = accounts[5]
		const newPeriodRbMq2p = BigInt("907")
		const accountKsywxm7 = accounts[2]
		const _periodqsPH17c = BigInt("291")
		const amountIqs2bw = BigInt("1959")
		const recipientTeSuR46 = accounts[2]
		const nullvGm4N6M = await contractDoet6vt.allowanceFOSTER.call(accountl9Rm1wL, {from: accounts[2]});
		await contractDoet6vt.freezeAndTransfer.call(recipientF4woou, amountSpBSssS, _periodBFBq7Rp, {from: accounts[3]});
		await contractDoet6vt.setPeriod.call(newPeriodRbMq2p, {from: accounts[3]});
		const nullZ4680Aj = await contractDoet6vt.balanceUSDT.call(accountKsywxm7, {from: accounts[0]});
		await contractDoet6vt.freezeAndTransfer.call(recipientTeSuR46, amountIqs2bw, _periodqsPH17c, {from: accounts[4]});

		await expect(contractDoet6vt.allowanceFOSTER.call(accountl9Rm1wL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrez0GmkF = accounts[3]
		const FOSTERAddrMnCnro8 = accounts[1]
		const initialRateOZYweh = BigInt("1867")
		const initialPeriodNaL7OYH = BigInt("656")
		const initialOwnerCHNgFk4 = accounts[2]
		const contractRXbeGu3 = await Reseller.new(USDTAddrez0GmkF, FOSTERAddrMnCnro8, initialRateOZYweh, initialPeriodNaL7OYH, initialOwnerCHNgFk4, {from: accounts[3]});
		const accountGrlQvo = accounts[3]
		const _periodNBjzMRB = BigInt("291")
		const amounto9aaPpa = BigInt("1970")
		const recipientO6LJLYK = accounts[2]
		const level5fLw88NE = BigInt("232")
		const level4OJZEHVr = BigInt("53")
		const level3f6srEp = BigInt("160")
		const level2zVS5m4Z = BigInt("64")
		const level1S1NvLU = BigInt("136")
		const nullTBYHr1R = await contractRXbeGu3.allowanceUSDT.call(accountGrlQvo, {from: "0x0000000000000000000000000000000000000001"});
		await contractRXbeGu3.freezeAndTransfer.call(recipientO6LJLYK, amounto9aaPpa, _periodNBjzMRB, {from: accounts[4]});
		await contractRXbeGu3.setRefBonus.call(level1S1NvLU, level2zVS5m4Z, level3f6srEp, level4OJZEHVr, level5fLw88NE, {from: accounts[5]});

		await expect(contractRXbeGu3.allowanceUSDT.call(accountGrlQvo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjyRHin6 = accounts[3]
		const FOSTERAddrpHvFiX = accounts[1]
		const initialRateaewDch = BigInt("1867")
		const initialPeriodCbrM1F1 = BigInt("656")
		const initialOwnerVotrNIX = accounts[2]
		const contractBh6Wt2x = await Reseller.new(USDTAddrjyRHin6, FOSTERAddrpHvFiX, initialRateaewDch, initialPeriodCbrM1F1, initialOwnerVotrNIX, {from: accounts[3]});
		const newFeeBEqLFA = BigInt("186")
		const _periodg92oJbM = BigInt("291")
		const amountRRzyv26 = BigInt("1978")
		const recipientOJKYO1S = accounts[2]
		const newBoss4QhOhtKE = accounts[5]
		const newBoss2LE1JBic = accounts[1]
		await contractBh6Wt2x.setFee.call(newFeeBEqLFA, {from: accounts[1]});
		await contractBh6Wt2x.freezeAndTransfer.call(recipientOJKYO1S, amountRRzyv26, _periodg92oJbM, {from: accounts[4]});
		await contractBh6Wt2x.deposeBoss4.call(newBoss4QhOhtKE, {from: accounts[4]});
		await contractBh6Wt2x.deposeBoss2.call(newBoss2LE1JBic, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractBh6Wt2x.setFee.call(newFeeBEqLFA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrv1TptLQ = accounts[3]
		const FOSTERAddrOD52wtm = accounts[1]
		const initialRatelOwO2x = BigInt("1867")
		const initialPeriodBcVSnys = BigInt("656")
		const initialOwnerXH0a2OL = accounts[2]
		const contractjG2NjUe = await Reseller.new(USDTAddrv1TptLQ, FOSTERAddrOD52wtm, initialRatelOwO2x, initialPeriodBcVSnys, initialOwnerXH0a2OL, {from: accounts[3]});
		const newFeeXNpRG1Y = BigInt("119")
		const newMinimumzAD3LVq = BigInt("264")
		const _periodGg7Dx5D = BigInt("291")
		const amountL2IVDMt = BigInt("1991")
		const recipientN0Fmm7N = accounts[2]
		await contractjG2NjUe.setFee.call(newFeeXNpRG1Y, {from: accounts[2]});
		await contractjG2NjUe.setMinimum.call(newMinimumzAD3LVq, {from: "0x0000000000000000000000000000000000000001"});
		await contractjG2NjUe.freezeAndTransfer.call(recipientN0Fmm7N, amountL2IVDMt, _periodGg7Dx5D, {from: accounts[4]});

		await expect(contractjG2NjUe.setFee.call(newFeeXNpRG1Y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddruGF8kjZ = accounts[1]
		const FOSTERAddrbA4b3p5 = accounts[0]
		const initialRateNadVEKA = BigInt("1622")
		const initialPeriodKARe4Nl = BigInt("1218")
		const initialOwnerlTiacV = accounts[0]
		const contractx26r4kB = await Reseller.new(USDTAddruGF8kjZ, FOSTERAddrbA4b3p5, initialRateNadVEKA, initialPeriodKARe4Nl, initialOwnerlTiacV, {from: accounts[5]});
		const accounts6kDHEL = accounts[0]
		const _periodfOvVwi3 = BigInt("1666")
		const amountXyvy6GN = BigInt("976")
		const recipientx1yJKvv = accounts[0]
		const valuenJOzSN = BigInt("1948")
		const recipienthxFzXyI = accounts[1]
		const ERC20TokenMPqw4DE = accounts[5]
		const amountMUafUDB = BigInt("359")
		const newBoss1eYNeLTK = accounts[4]
		const nullfXwF932 = await contractx26r4kB.balanceFOSTER.call(accounts6kDHEL, {from: accounts[1]});
		await contractx26r4kB.freezeAndTransfer.call(recipientx1yJKvv, amountXyvy6GN, _periodfOvVwi3, {from: accounts[5]});
		await contractx26r4kB.withdrawERC20.call(ERC20TokenMPqw4DE, recipienthxFzXyI, valuenJOzSN, {from: accounts[3]});
		const nullQRLRNi3 = await contractx26r4kB.getEstimation.call(amountMUafUDB, {from: accounts[2]});
		await contractx26r4kB.deposeBoss1.call(newBoss1eYNeLTK, {from: accounts[4]});

		await expect(contractx26r4kB.balanceFOSTER.call(accounts6kDHEL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrhvjk1wE = accounts[3]
		const FOSTERAddrVSOMZY9 = accounts[1]
		const initialRateArrUWrb = BigInt("1867")
		const initialPeriodfTksQrg = BigInt("656")
		const initialOwnerccRvM3q = accounts[2]
		const contractiidtWT = await Reseller.new(USDTAddrhvjk1wE, FOSTERAddrVSOMZY9, initialRateArrUWrb, initialPeriodfTksQrg, initialOwnerccRvM3q, {from: accounts[3]});
		const newBoss1OX9uReM = accounts[2]
		const newBoss1u9cep6C = accounts[0]
		const valueEr3X4ty = BigInt("918")
		const recipientklw7xhk = accounts[4]
		const ERC20TokenUMbNDW3 = accounts[5]
		const _periodY4o5ZYD = BigInt("314")
		const amountHBhsXzZ = BigInt("1959")
		const recipientb4vM1e = accounts[2]
		await contractiidtWT.deposeBoss1.call(newBoss1OX9uReM, {from: accounts[3]});
		await contractiidtWT.deposeBoss1.call(newBoss1u9cep6C, {from: accounts[4]});
		await contractiidtWT.withdrawERC20.call(ERC20TokenUMbNDW3, recipientklw7xhk, valueEr3X4ty, {from: accounts[1]});
		await contractiidtWT.freezeAndTransfer.call(recipientb4vM1e, amountHBhsXzZ, _periodY4o5ZYD, {from: accounts[4]});

		await expect(contractiidtWT.deposeBoss1.call(newBoss1OX9uReM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrOqX5Yj = accounts[3]
		const FOSTERAddryDk3pvh = accounts[1]
		const initialRateufJOZwD = BigInt("1867")
		const initialPeriodsgq3uf6 = BigInt("656")
		const initialOwnerhClFsR3 = accounts[2]
		const contractISYEkpj = await Reseller.new(USDTAddrOqX5Yj, FOSTERAddryDk3pvh, initialRateufJOZwD, initialPeriodsgq3uf6, initialOwnerhClFsR3, {from: accounts[3]});
		const newBoss3pWvIvAo = accounts[5]
		const _periodEJEtvzD = BigInt("292")
		const amountjDP3Pk = BigInt("1959")
		const recipientKVEunGB = accounts[2]
		await contractISYEkpj.deposeBoss3.call(newBoss3pWvIvAo, {from: accounts[0]});
		await contractISYEkpj.freezeAndTransfer.call(recipientKVEunGB, amountjDP3Pk, _periodEJEtvzD, {from: accounts[4]});

		await expect(contractISYEkpj.deposeBoss3.call(newBoss3pWvIvAo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDIqzb6 = accounts[3]
		const FOSTERAddrKBtiJx5 = accounts[1]
		const initialRateTCk6kgW = BigInt("1867")
		const initialPeriodHO2Z6J = BigInt("656")
		const initialOwnerrFaAUak = accounts[2]
		const contractjzucRY = await Reseller.new(USDTAddrDIqzb6, FOSTERAddrKBtiJx5, initialRateTCk6kgW, initialPeriodHO2Z6J, initialOwnerrFaAUak, {from: accounts[3]});
		const newRategr1erR = BigInt("1084")
		const _perioddz7LIm = BigInt("291")
		const amountROP8M5E = BigInt("1959")
		const recipientNCCKHFG = accounts[2]
		await contractjzucRY.setRate.call(newRategr1erR, {from: accounts[5]});
		await contractjzucRY.freezeAndTransfer.call(recipientNCCKHFG, amountROP8M5E, _perioddz7LIm, {from: accounts[4]});
		await contractjzucRY.switchState.call({from: accounts[0]});

		await expect(contractjzucRY.setRate.call(newRategr1erR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrziSUiFb = accounts[3]
		const FOSTERAddrzR2TsG5 = accounts[1]
		const initialRateZxUoP5 = BigInt("1867")
		const initialPeriodzttNkl4 = BigInt("656")
		const initialOwneryUpfbBB = accounts[2]
		const contractM4KPYE9 = await Reseller.new(USDTAddrziSUiFb, FOSTERAddrzR2TsG5, initialRateZxUoP5, initialPeriodzttNkl4, initialOwneryUpfbBB, {from: accounts[3]});
		const amountMSTxAES = BigInt("513")
		const _periodQYu5mo = BigInt("291")
		const amountdPLq60j = BigInt("1959")
		const recipientIcpJPt7 = accounts[2]
		const nullaaVhS8N = await contractM4KPYE9.getEstimation.call(amountMSTxAES, {from: accounts[5]});
		await contractM4KPYE9.freezeAndTransfer.call(recipientIcpJPt7, amountdPLq60j, _periodQYu5mo, {from: accounts[4]});

		assert.equal(nullaaVhS8N, 957771)
		await expect(contractM4KPYE9.freezeAndTransfer.call(recipientIcpJPt7, amountdPLq60j, _periodQYu5mo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTgN03FQ = accounts[3]
		const FOSTERAddrlBs12nx = accounts[1]
		const initialRatekIoBSI4 = BigInt("1867")
		const initialPeriodR6TIhO = BigInt("656")
		const initialOwnerTKBQIzR = accounts[2]
		const contractUgJlFpn = await Reseller.new(USDTAddrTgN03FQ, FOSTERAddrlBs12nx, initialRatekIoBSI4, initialPeriodR6TIhO, initialOwnerTKBQIzR, {from: accounts[3]});
		const newBoss4YxO3MO = accounts[4]
		const _periodFXjFrTN = BigInt("291")
		const amountfKBZU9B = BigInt("1965")
		const recipientNEyNKqm = accounts[2]
		await contractUgJlFpn.deposeBoss4.call(newBoss4YxO3MO, {from: accounts[3]});
		await contractUgJlFpn.freezeAndTransfer.call(recipientNEyNKqm, amountfKBZU9B, _periodFXjFrTN, {from: accounts[4]});

		await expect(contractUgJlFpn.deposeBoss4.call(newBoss4YxO3MO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrhSEQo0a = accounts[1]
		const FOSTERAddrLKEGkHz = accounts[1]
		const initialRatepW4rFpY = BigInt("68")
		const initialPeriodxLoR0ur = BigInt("1654")
		const initialOwnerEw6HMMp = accounts[0]
		const contractlWq0fMX = await Reseller.new(USDTAddrhSEQo0a, FOSTERAddrLKEGkHz, initialRatepW4rFpY, initialPeriodxLoR0ur, initialOwnerEw6HMMp, {from: accounts[3]});
		const level5VDNpYA = BigInt("198")
		const level4W2RUMHG = BigInt("93")
		const level3fnNxvo3 = BigInt("109")
		const level2U7Y8z4 = BigInt("185")
		const level1KGWbqe = BigInt("42")
		const commentTbhjF2F = "WhgNlTPKT4SePgu1S7U3k18IbuaMXoL9JwAqInlv26h1rmgeV7KjP0WH4el3KiQ6hZ"
		const _ref5IxpSWGk = accounts[0]
		const _ref4WtqvPom = "0x0000000000000000000000000000000000000001"
		const _ref3mqTFVL = accounts[3]
		const _ref2nbvtOg7 = "0x0000000000000000000000000000000000000001"
		const _ref1v15zUK = accounts[2]
		const valueNIMpW09 = BigInt("989")
		const newBoss1jZMs4z = accounts[0]
		const newPeriodL4YrSlq = BigInt("892")
		const newBoss4l8bkdfJ = accounts[1]
		await contractlWq0fMX.switchState.call({from: accounts[0]});
		await contractlWq0fMX.setRefBonus.call(level1KGWbqe, level2U7Y8z4, level3fnNxvo3, level4W2RUMHG, level5VDNpYA, {from: accounts[2]});
		await contractlWq0fMX.purchase.call(valueNIMpW09, _ref1v15zUK, _ref2nbvtOg7, _ref3mqTFVL, _ref4WtqvPom, _ref5IxpSWGk, commentTbhjF2F, {from: accounts[3]});
		await contractlWq0fMX.deposeBoss1.call(newBoss1jZMs4z, {from: accounts[0]});
		await contractlWq0fMX.setPeriod.call(newPeriodL4YrSlq, {from: accounts[1]});
		await contractlWq0fMX.deposeBoss4.call(newBoss4l8bkdfJ, {from: accounts[4]});

		await expect(contractlWq0fMX.switchState.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})