const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddraFbCEeN = accounts[4]
		const FOSTERAddrYH4hMBY = accounts[5]
		const initialRateY6pE7Sn = BigInt("338")
		const initialPeriodoSt6y6W = BigInt("1924")
		const initialOwnerUJdSN5i = accounts[3]
		const contractsvH6Qr6 = await Reseller.new(USDTAddraFbCEeN, FOSTERAddrYH4hMBY, initialRateY6pE7Sn, initialPeriodoSt6y6W, initialOwnerUJdSN5i, {from: accounts[4]});
		const accountg8ziPJ = accounts[2]
		const newFeeKmEY5H0 = BigInt("95")
		const nulla0l96eP = await contractsvH6Qr6.balanceUSDT.call(accountg8ziPJ, {from: accounts[3]});
		await contractsvH6Qr6.setFee.call(newFeeKmEY5H0, {from: accounts[4]});

		await expect(contractsvH6Qr6.balanceUSDT.call(accountg8ziPJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddraiUndxQ = accounts[5]
		const FOSTERAddrJIy7vQl = "0x0000000000000000000000000000000000000001"
		const initialRatesc4UEyn = BigInt("269")
		const initialPeriodEyt3zqc = BigInt("477")
		const initialOwnerKkZjl9s = accounts[0]
		const contractX2YTzO = await Reseller.new(USDTAddraiUndxQ, FOSTERAddrJIy7vQl, initialRatesc4UEyn, initialPeriodEyt3zqc, initialOwnerKkZjl9s, {from: accounts[2]});
		const newMinimumC8BNM1i = BigInt("1000")
		const accountzPQ2AUt = accounts[0]
		const amountx3QclNr = BigInt("576")
		const newBoss4T1FhrOY = accounts[4]
		const newFeeCH0SWb3 = BigInt("174")
		await contractX2YTzO.setMinimum.call(newMinimumC8BNM1i, {from: accounts[2]});
		const nullMbuOLZF = await contractX2YTzO.balanceUSDT.call(accountzPQ2AUt, {from: accounts[3]});
		const nullz3KUxe1 = await contractX2YTzO.getEstimation.call(amountx3QclNr, {from: accounts[3]});
		await contractX2YTzO.deposeBoss4.call(newBoss4T1FhrOY, {from: accounts[3]});
		await contractX2YTzO.setFee.call(newFeeCH0SWb3, {from: accounts[3]});

		await expect(contractX2YTzO.setMinimum.call(newMinimumC8BNM1i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrqT65244 = accounts[4]
		const FOSTERAddrjAmRRum = accounts[5]
		const initialRateS8qPY4F = BigInt("256")
		const initialPeriodBp6DQxN = BigInt("1550")
		const initialOwnersgqTBvI = "0x0000000000000000000000000000000000000001"
		const contractE4lRbyU = await Reseller.new(USDTAddrqT65244, FOSTERAddrjAmRRum, initialRateS8qPY4F, initialPeriodBp6DQxN, initialOwnersgqTBvI, {from: accounts[2]});
		const level5gM2U89N = BigInt("25")
		const level4m39DCZ = BigInt("245")
		const level3Lr8D4rN = BigInt("143")
		const level26PNKvN = BigInt("249")
		const level1fxN4RYD = BigInt("35")
		const _periodoUys3r5 = BigInt("194")
		const amountFor5WEK = BigInt("447")
		const recipientXWrZJ2b = accounts[2]
		const accountt3iDGWW = accounts[3]
		await contractE4lRbyU.setRefBonus.call(level1fxN4RYD, level26PNKvN, level3Lr8D4rN, level4m39DCZ, level5gM2U89N, {from: accounts[4]});
		await contractE4lRbyU.freezeAndTransfer.call(recipientXWrZJ2b, amountFor5WEK, _periodoUys3r5, {from: accounts[0]});
		const nullTQ1muS = await contractE4lRbyU.allowanceUSDT.call(accountt3iDGWW, {from: accounts[3]});

		await expect(contractE4lRbyU.setRefBonus.call(level1fxN4RYD, level26PNKvN, level3Lr8D4rN, level4m39DCZ, level5gM2U89N, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDh7B5OB = accounts[2]
		const FOSTERAddrEV10gLI = accounts[1]
		const initialRateF008hrX = BigInt("927")
		const initialPeriodWcqyIwt = BigInt("1389")
		const initialOwnerC7P535 = accounts[4]
		const contractEqzLBHW = await Reseller.new(USDTAddrDh7B5OB, FOSTERAddrEV10gLI, initialRateF008hrX, initialPeriodWcqyIwt, initialOwnerC7P535, {from: accounts[0]});
		const newBoss3J1e0PrE = accounts[1]
		const accounthDyAMyE = accounts[1]
		const accountEApUdDF = accounts[0]
		await contractEqzLBHW.deposeBoss3.call(newBoss3J1e0PrE, {from: accounts[3]});
		const nullcxJrnkw = await contractEqzLBHW.balanceFOSTER.call(accounthDyAMyE, {from: accounts[3]});
		const nullN8ULQfN = await contractEqzLBHW.balanceUSDT.call(accountEApUdDF, {from: accounts[0]});

		await expect(contractEqzLBHW.deposeBoss3.call(newBoss3J1e0PrE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrothTSs2 = accounts[4]
		const FOSTERAddrS3l1NVe = accounts[4]
		const initialRateX3gtPmG = BigInt("843")
		const initialPeriodZd2dBRb = BigInt("78")
		const initialOwnerSxS2qdk = accounts[2]
		const contractfRTEHE9 = await Reseller.new(USDTAddrothTSs2, FOSTERAddrS3l1NVe, initialRateX3gtPmG, initialPeriodZd2dBRb, initialOwnerSxS2qdk, {from: accounts[1]});
		const _ref5HsSsjsU = accounts[1]
		const _ref4M1VidJq = accounts[0]
		const _ref3C8QLlEZ = accounts[1]
		const _ref2ekPefhb = "0x0000000000000000000000000000000000000001"
		const _ref1KdGALQ = accounts[5]
		const valueKbYkyFc = BigInt("1128")
		const accountKklcV47 = accounts[0]
		const _ref5kBuS6SV = accounts[1]
		const _ref4ZsCNWFX = accounts[2]
		const _ref3a6dVOy = "0x0000000000000000000000000000000000000001"
		const _ref2aLNEiF7 = accounts[5]
		const _ref1YCa7zw = accounts[1]
		const valueIWRIez6 = BigInt("1476")
		const newRateaQ5vvTm = BigInt("1795")
		await contractfRTEHE9.buy.call(valueKbYkyFc, _ref1KdGALQ, _ref2ekPefhb, _ref3C8QLlEZ, _ref4M1VidJq, _ref5HsSsjsU, {from: accounts[1]});
		const nullJZGD2jg = await contractfRTEHE9.allowanceUSDT.call(accountKklcV47, {from: accounts[2]});
		await contractfRTEHE9.buy.call(valueIWRIez6, _ref1YCa7zw, _ref2aLNEiF7, _ref3a6dVOy, _ref4ZsCNWFX, _ref5kBuS6SV, {from: accounts[1]});
		await contractfRTEHE9.setRate.call(newRateaQ5vvTm, {from: accounts[4]});

		await expect(contractfRTEHE9.buy.call(valueKbYkyFc, _ref1KdGALQ, _ref2ekPefhb, _ref3C8QLlEZ, _ref4M1VidJq, _ref5HsSsjsU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrA4ujaEd = accounts[3]
		const FOSTERAddrzgJamzm = accounts[1]
		const initialRateGjuDAEe = BigInt("783")
		const initialPerioddsgwv86 = BigInt("1135")
		const initialOwnerf4UcExe = accounts[4]
		const contractW32QCOf = await Reseller.new(USDTAddrA4ujaEd, FOSTERAddrzgJamzm, initialRateGjuDAEe, initialPerioddsgwv86, initialOwnerf4UcExe, {from: accounts[2]});
		const accountMHDArAZ = "0x0000000000000000000000000000000000000001"
		const accounti7QJxMB = accounts[1]
		const newBoss2Xq3ovcs = accounts[3]
		const nullDt9EwYT = await contractW32QCOf.allowanceUSDT.call(accountMHDArAZ, {from: accounts[1]});
		const nullSEJbEoa = await contractW32QCOf.balanceFOSTER.call(accounti7QJxMB, {from: accounts[5]});
		await contractW32QCOf.deposeBoss2.call(newBoss2Xq3ovcs, {from: accounts[3]});

		await expect(contractW32QCOf.allowanceUSDT.call(accountMHDArAZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrWHBazlR = accounts[0]
		const FOSTERAddrI8I0YSt = accounts[4]
		const initialRateVKUl8IB = BigInt("1301")
		const initialPeriodLpWoalf = BigInt("1634")
		const initialOwnerOFuoKKL = accounts[1]
		const contractEKpZw6a = await Reseller.new(USDTAddrWHBazlR, FOSTERAddrI8I0YSt, initialRateVKUl8IB, initialPeriodLpWoalf, initialOwnerOFuoKKL, {from: accounts[4]});
		const accountCFC6oa9 = accounts[2]
		const newMinimumh7U97EI = BigInt("1001")
		const level5J5uZmi = BigInt("194")
		const level4dNAo0Io = BigInt("82")
		const level3DKnLRTe = BigInt("193")
		const level2gPmLezi = BigInt("250")
		const level1WWCj1kj = BigInt("218")
		const _ref5QZoBCec = accounts[2]
		const _ref4zqcE6jl = accounts[5]
		const _ref3zKxxdAy = accounts[3]
		const _ref2JvR34hr = accounts[1]
		const _ref1nv5LHwF = accounts[3]
		const valueX0sOH6q = BigInt("1399")
		const nullbgQ7u4i = await contractEKpZw6a.balanceFOSTER.call(accountCFC6oa9, {from: accounts[3]});
		await contractEKpZw6a.setMinimum.call(newMinimumh7U97EI, {from: accounts[3]});
		await contractEKpZw6a.switchState.call({from: accounts[5]});
		await contractEKpZw6a.setRefBonus.call(level1WWCj1kj, level2gPmLezi, level3DKnLRTe, level4dNAo0Io, level5J5uZmi, {from: "0x0000000000000000000000000000000000000001"});
		await contractEKpZw6a.buy.call(valueX0sOH6q, _ref1nv5LHwF, _ref2JvR34hr, _ref3zKxxdAy, _ref4zqcE6jl, _ref5QZoBCec, {from: accounts[3]});

		await expect(contractEKpZw6a.balanceFOSTER.call(accountCFC6oa9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrTUBNDKa = accounts[0]
		const FOSTERAddrHitUQG9 = accounts[2]
		const initialRatesvDTy1x = BigInt("1154")
		const initialPeriodk6bGuw2 = BigInt("1776")
		const initialOwnerS0GJaqk = accounts[4]
		const contractdRtkmiR = await Reseller.new(USDTAddrTUBNDKa, FOSTERAddrHitUQG9, initialRatesvDTy1x, initialPeriodk6bGuw2, initialOwnerS0GJaqk, {from: accounts[2]});
		const newBoss2U6D6GK9 = accounts[4]
		const amountcpge81P = BigInt("517")
		const newBoss3fOBaIl0 = accounts[4]
		const valueb2DjjEx = BigInt("1928")
		const newBoss1KrnNic = accounts[1]
		await contractdRtkmiR.deposeBoss2.call(newBoss2U6D6GK9, {from: accounts[2]});
		const nullkN720b1 = await contractdRtkmiR.getEstimation.call(amountcpge81P, {from: accounts[0]});
		await contractdRtkmiR.deposeBoss3.call(newBoss3fOBaIl0, {from: accounts[1]});
		await contractdRtkmiR.withdraw.call(valueb2DjjEx, {from: accounts[1]});
		await contractdRtkmiR.deposeBoss1.call(newBoss1KrnNic, {from: accounts[4]});

		await expect(contractdRtkmiR.deposeBoss2.call(newBoss2U6D6GK9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrnWPHtwA = accounts[2]
		const FOSTERAddrXGEgFnC = accounts[0]
		const initialRaterlra4W = BigInt("21")
		const initialPeriodail26Hu = BigInt("1756")
		const initialOwnerdY7CaOh = accounts[1]
		const contractOi92ms0 = await Reseller.new(USDTAddrnWPHtwA, FOSTERAddrXGEgFnC, initialRaterlra4W, initialPeriodail26Hu, initialOwnerdY7CaOh, {from: "0x0000000000000000000000000000000000000001"});
		const commenttYWDxFY = "CVmp92oz5y8pj7oSGxU9WtBvnGL80u9NjbePmEDwjpRuBYpsZ56hBWiFJSdOzK30lvr"
		const _ref5LqvNAc9 = accounts[4]
		const _ref4cLeiEwR = accounts[4]
		const _ref3Ki9QIaV = accounts[3]
		const _ref2pTmMIZS = accounts[1]
		const _ref1YTOr6j5 = accounts[4]
		const valuecorJoTX = BigInt("781")
		const accountHO6aCRw = accounts[0]
		const commentPzwhvGX = "VtixDAywguBolxl8KijvlKoSBPyiacjXDGUhXiCs9Aow9U5p4wDyhCB"
		const _ref5pLkve38 = accounts[1]
		const _ref4cbPzVY = accounts[1]
		const _ref3wceZvjQ = accounts[4]
		const _ref2YyOdBRT = accounts[2]
		const _ref1eYesun = accounts[1]
		const valueKjdzxi = BigInt("1741")
		const newBoss1tP0OmTn = accounts[4]
		const accountsrlsP1S = accounts[2]
		const accountmvO9vIS = accounts[2]
		await contractOi92ms0.purchase.call(valuecorJoTX, _ref1YTOr6j5, _ref2pTmMIZS, _ref3Ki9QIaV, _ref4cLeiEwR, _ref5LqvNAc9, commenttYWDxFY, {from: accounts[0]});
		const nullVDBispG = await contractOi92ms0.balanceUSDT.call(accountHO6aCRw, {from: accounts[3]});
		await contractOi92ms0.purchase.call(valueKjdzxi, _ref1eYesun, _ref2YyOdBRT, _ref3wceZvjQ, _ref4cbPzVY, _ref5pLkve38, commentPzwhvGX, {from: accounts[3]});
		await contractOi92ms0.deposeBoss1.call(newBoss1tP0OmTn, {from: accounts[4]});
		const nullYMqoYH = await contractOi92ms0.allowanceFOSTER.call(accountsrlsP1S, {from: "0x0000000000000000000000000000000000000001"});
		const nullmFjK7CA = await contractOi92ms0.balanceUSDT.call(accountmvO9vIS, {from: accounts[5]});
	});

	it('test for Reseller', async () => {
		const USDTAddreryB2Fs = accounts[4]
		const FOSTERAddrzT7gbYb = accounts[0]
		const initialRateqA77gf4 = BigInt("1590")
		const initialPeriodtv9FuzZ = BigInt("524")
		const initialOwnerIFZ9nwu = accounts[3]
		const contractAj0xI8 = await Reseller.new(USDTAddreryB2Fs, FOSTERAddrzT7gbYb, initialRateqA77gf4, initialPeriodtv9FuzZ, initialOwnerIFZ9nwu, {from: accounts[1]});
		const newPeriodL70TO33 = BigInt("1770")
		const newPeriodn6bJVC = BigInt("1461")
		const newMinimumnUE5mrX = BigInt("1470")
		const _periodceTAD6 = BigInt("165")
		const amountnHh6rEo = BigInt("972")
		const recipienteMAWK5R = accounts[0]
		const valueVBKStC7 = BigInt("416")
		const recipientZa7Cme = accounts[3]
		const ERC20TokenOdxZm8 = accounts[2]
		const _periodjQSi2jy = BigInt("1927")
		const amountagSk5yo = BigInt("814")
		const recipientcZFQMX9 = accounts[3]
		await contractAj0xI8.setPeriod.call(newPeriodL70TO33, {from: accounts[1]});
		await contractAj0xI8.setPeriod.call(newPeriodn6bJVC, {from: accounts[1]});
		await contractAj0xI8.setMinimum.call(newMinimumnUE5mrX, {from: accounts[3]});
		await contractAj0xI8.freezeAndTransfer.call(recipienteMAWK5R, amountnHh6rEo, _periodceTAD6, {from: accounts[2]});
		await contractAj0xI8.withdrawERC20.call(ERC20TokenOdxZm8, recipientZa7Cme, valueVBKStC7, {from: accounts[3]});
		await contractAj0xI8.freezeAndTransfer.call(recipientcZFQMX9, amountagSk5yo, _periodjQSi2jy, {from: accounts[0]});

		await expect(contractAj0xI8.setPeriod.call(newPeriodL70TO33, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddroSFmNlZ = accounts[5]
		const FOSTERAddrf3BXgGG = "0x0000000000000000000000000000000000000001"
		const initialRatevOfvdxA = BigInt("269")
		const initialPeriodtM1rmdZ = BigInt("477")
		const initialOwnerbSi2z9S = accounts[0]
		const contractaLa3Bd8 = await Reseller.new(USDTAddroSFmNlZ, FOSTERAddrf3BXgGG, initialRatevOfvdxA, initialPeriodtM1rmdZ, initialOwnerbSi2z9S, {from: accounts[2]});
		const _periodZ0nxQ2E = BigInt("793")
		const amountd78FALP = BigInt("375")
		const recipientSgGZRAz = accounts[0]
		const newMinimumUexZ0oA = BigInt("1000")
		const accountoqJCYck = "0x0000000000000000000000000000000000000001"
		const valueiFa5qfM = BigInt("1522")
		const accounty8Ces7 = accounts[1]
		const newBoss4MZrRYSJ = accounts[4]
		const newFeejprbPSq = BigInt("174")
		await contractaLa3Bd8.freezeAndTransfer.call(recipientSgGZRAz, amountd78FALP, _periodZ0nxQ2E, {from: accounts[2]});
		await contractaLa3Bd8.setMinimum.call(newMinimumUexZ0oA, {from: accounts[2]});
		const nullYM1aAp1 = await contractaLa3Bd8.allowanceUSDT.call(accountoqJCYck, {from: accounts[1]});
		await contractaLa3Bd8.withdraw.call(valueiFa5qfM, {from: accounts[2]});
		const nullf4JV57 = await contractaLa3Bd8.balanceUSDT.call(accounty8Ces7, {from: accounts[3]});
		await contractaLa3Bd8.deposeBoss4.call(newBoss4MZrRYSJ, {from: accounts[3]});
		await contractaLa3Bd8.setFee.call(newFeejprbPSq, {from: accounts[3]});

		await expect(contractaLa3Bd8.freezeAndTransfer.call(recipientSgGZRAz, amountd78FALP, _periodZ0nxQ2E, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrePvUFKo = accounts[2]
		const FOSTERAddrk2GCjkU = accounts[1]
		const initialRateiJwlLJI = BigInt("927")
		const initialPeriods1EP3dx = BigInt("1389")
		const initialOwnerDOUzNjs = accounts[4]
		const contractiGvO9ss = await Reseller.new(USDTAddrePvUFKo, FOSTERAddrk2GCjkU, initialRateiJwlLJI, initialPeriods1EP3dx, initialOwnerDOUzNjs, {from: accounts[0]});
		const valueDF9szj5 = BigInt("1453")
		const newBoss3LVn5vRl = accounts[1]
		const accountgqjVsWc = accounts[2]
		const accountzT4x4QA = accounts[0]
		await contractiGvO9ss.withdraw.call(valueDF9szj5, {from: "0x0000000000000000000000000000000000000001"});
		await contractiGvO9ss.deposeBoss3.call(newBoss3LVn5vRl, {from: accounts[3]});
		const nullh1QznTH = await contractiGvO9ss.balanceFOSTER.call(accountgqjVsWc, {from: accounts[3]});
		const nullUsskaY5 = await contractiGvO9ss.balanceUSDT.call(accountzT4x4QA, {from: accounts[0]});

		await expect(contractiGvO9ss.withdraw.call(valueDF9szj5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrRbmg183 = accounts[4]
		const FOSTERAddrMbdTwvU = accounts[4]
		const initialRateWr9R57s = BigInt("843")
		const initialPeriodVHYtrUN = BigInt("78")
		const initialOwnerjdwFXhP = accounts[2]
		const contractWbYa5B = await Reseller.new(USDTAddrRbmg183, FOSTERAddrMbdTwvU, initialRateWr9R57s, initialPeriodVHYtrUN, initialOwnerjdwFXhP, {from: accounts[1]});
		const commentKVWe5zI = "nbmcN7643kVS41rGXvl3G6Ap8I8HRdC7bN8x6K5Bxjuisk"
		const _ref5jd6NI8k = accounts[4]
		const _ref4DiFkY9a = accounts[0]
		const _ref3lSLCPw = accounts[1]
		const _ref2zlYmd7v = accounts[0]
		const _ref1JByYhUi = accounts[0]
		const valueJ9xrbP0 = BigInt("508")
		const _ref5kwnv8kz = accounts[1]
		const _ref4L0BH494 = accounts[0]
		const _ref3Zez0imA = accounts[1]
		const _ref2b6YxGgF = "0x0000000000000000000000000000000000000001"
		const _ref1tbKdv6 = accounts[5]
		const valuerdOi0ol = BigInt("1128")
		const valueH8I6Of = BigInt("1289")
		const recipientrw4Md37 = accounts[3]
		const ERC20Tokenxrak2i7 = accounts[4]
		const accountERDwRli = accounts[0]
		const _ref5OeKjoQ7 = accounts[1]
		const _ref4Zj83Ir = accounts[2]
		const _ref3xnQwGEf = "0x0000000000000000000000000000000000000001"
		const _ref2YsERO9 = accounts[5]
		const _ref1RAMKUj = accounts[2]
		const valueV72VQKR = BigInt("1476")
		const accountGNArxZZ = accounts[1]
		const newRateepFo0Jg = BigInt("1795")
		await contractWbYa5B.purchase.call(valueJ9xrbP0, _ref1JByYhUi, _ref2zlYmd7v, _ref3lSLCPw, _ref4DiFkY9a, _ref5jd6NI8k, commentKVWe5zI, {from: "0x0000000000000000000000000000000000000001"});
		await contractWbYa5B.buy.call(valuerdOi0ol, _ref1tbKdv6, _ref2b6YxGgF, _ref3Zez0imA, _ref4L0BH494, _ref5kwnv8kz, {from: accounts[1]});
		await contractWbYa5B.withdrawERC20.call(ERC20Tokenxrak2i7, recipientrw4Md37, valueH8I6Of, {from: accounts[3]});
		const nullm7JJlch = await contractWbYa5B.allowanceUSDT.call(accountERDwRli, {from: accounts[2]});
		await contractWbYa5B.buy.call(valueV72VQKR, _ref1RAMKUj, _ref2YsERO9, _ref3xnQwGEf, _ref4Zj83Ir, _ref5OeKjoQ7, {from: accounts[1]});
		const nullfgjf5cq = await contractWbYa5B.allowanceUSDT.call(accountGNArxZZ, {from: accounts[3]});
		await contractWbYa5B.setRate.call(newRateepFo0Jg, {from: accounts[4]});

		await expect(contractWbYa5B.purchase.call(valueJ9xrbP0, _ref1JByYhUi, _ref2zlYmd7v, _ref3lSLCPw, _ref4DiFkY9a, _ref5jd6NI8k, commentKVWe5zI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrYPI1Iw9 = accounts[4]
		const FOSTERAddrC3xqDnQ = accounts[4]
		const initialRategX8qIco = BigInt("843")
		const initialPeriodMkWpIUU = BigInt("78")
		const initialOwnerDkRGnZ = accounts[2]
		const contractmKM2ENA = await Reseller.new(USDTAddrYPI1Iw9, FOSTERAddrC3xqDnQ, initialRategX8qIco, initialPeriodMkWpIUU, initialOwnerDkRGnZ, {from: accounts[1]});
		const amounteRC7zBE = BigInt("10")
		const _ref5LcfBiot = accounts[1]
		const _ref4AjmCJaO = accounts[0]
		const _ref3ijbiN1B = accounts[1]
		const _ref2vQNS3Gf = "0x0000000000000000000000000000000000000001"
		const _ref1lPdi3O9 = accounts[5]
		const valuedDYw3KS = BigInt("1128")
		const newMinimumNWkDfe = BigInt("1754")
		const accountABqUZ9K = accounts[0]
		const accounttFr1euj = accounts[0]
		const _ref5VSHMQNE = accounts[1]
		const _ref4Hxa7QH6 = accounts[2]
		const _ref3aXScciJ = "0x0000000000000000000000000000000000000002"
		const _ref2gtbpFsj = accounts[5]
		const _ref1o1lWDiy = accounts[1]
		const valueBCLyMma = BigInt("1476")
		const newRateGsb0DC7 = BigInt("1795")
		const nullgs7tPqi = await contractmKM2ENA.getEstimation.call(amounteRC7zBE, {from: "0x0000000000000000000000000000000000000001"});
		await contractmKM2ENA.buy.call(valuedDYw3KS, _ref1lPdi3O9, _ref2vQNS3Gf, _ref3ijbiN1B, _ref4AjmCJaO, _ref5LcfBiot, {from: accounts[1]});
		await contractmKM2ENA.setMinimum.call(newMinimumNWkDfe, {from: accounts[1]});
		const nullbh0fBPg = await contractmKM2ENA.balanceFOSTER.call(accountABqUZ9K, {from: accounts[0]});
		const nullPCcHDLn = await contractmKM2ENA.allowanceUSDT.call(accounttFr1euj, {from: accounts[2]});
		await contractmKM2ENA.buy.call(valueBCLyMma, _ref1o1lWDiy, _ref2gtbpFsj, _ref3aXScciJ, _ref4Hxa7QH6, _ref5VSHMQNE, {from: accounts[1]});
		await contractmKM2ENA.setRate.call(newRateGsb0DC7, {from: accounts[4]});

		assert.equal(nullgs7tPqi, 8430)
		await expect(contractmKM2ENA.buy.call(valuedDYw3KS, _ref1lPdi3O9, _ref2vQNS3Gf, _ref3ijbiN1B, _ref4AjmCJaO, _ref5LcfBiot, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrpcnYCi = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrd9zHNqH = accounts[2]
		const initialRateihjMghA = BigInt("706")
		const initialPeriodNKXKJrF = BigInt("454")
		const initialOwnerkNC50IJ = accounts[1]
		const contractIIrNt5 = await Reseller.new(USDTAddrpcnYCi, FOSTERAddrd9zHNqH, initialRateihjMghA, initialPeriodNKXKJrF, initialOwnerkNC50IJ, {from: accounts[5]});
		const newBoss1jndH8li = "0x0000000000000000000000000000000000000001"
		const newBoss2pWfesHO = accounts[3]
		const newMinimumAfAZGOo = BigInt("1284")
		const amountKgbdT2 = BigInt("1249")
		await contractIIrNt5.deposeBoss1.call(newBoss1jndH8li, {from: accounts[5]});
		await contractIIrNt5.deposeBoss2.call(newBoss2pWfesHO, {from: accounts[2]});
		await contractIIrNt5.setMinimum.call(newMinimumAfAZGOo, {from: accounts[0]});
		const nullGQsuvk = await contractIIrNt5.getEstimation.call(amountKgbdT2, {from: accounts[3]});

		await expect(contractIIrNt5.deposeBoss1.call(newBoss1jndH8li, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrXfJqQrK = accounts[4]
		const FOSTERAddrOmmqQQY = accounts[4]
		const initialRaterrcRAQT = BigInt("843")
		const initialPeriodutV3L2x = BigInt("78")
		const initialOwnerDyNPtB2 = accounts[2]
		const contractSCIDZmO = await Reseller.new(USDTAddrXfJqQrK, FOSTERAddrOmmqQQY, initialRaterrcRAQT, initialPeriodutV3L2x, initialOwnerDyNPtB2, {from: accounts[1]});
		const newBoss4jkV4Gqf = accounts[3]
		const _ref5nq62XTV = accounts[1]
		const _ref43muoVD = accounts[0]
		const _ref3AruvXl = accounts[1]
		const _ref2UlPaF4g = "0x0000000000000000000000000000000000000001"
		const _ref1W5ElfeF = accounts[5]
		const valueVbMgLjz = BigInt("1128")
		const accountNYzHD86 = accounts[1]
		const _ref5nLvY9vw = accounts[1]
		const _ref4brhW9VQ = accounts[2]
		const _ref3GaTHypk = "0x0000000000000000000000000000000000000001"
		const _ref2qrVvIdw = accounts[5]
		const _ref1ZW1Afqi = accounts[1]
		const valuei3ggIy = BigInt("1476")
		const newRate6KYXbB = BigInt("1795")
		await contractSCIDZmO.deposeBoss4.call(newBoss4jkV4Gqf, {from: accounts[3]});
		await contractSCIDZmO.buy.call(valueVbMgLjz, _ref1W5ElfeF, _ref2UlPaF4g, _ref3AruvXl, _ref43muoVD, _ref5nq62XTV, {from: accounts[1]});
		const nullAhz9H5 = await contractSCIDZmO.allowanceUSDT.call(accountNYzHD86, {from: accounts[2]});
		await contractSCIDZmO.buy.call(valuei3ggIy, _ref1ZW1Afqi, _ref2qrVvIdw, _ref3GaTHypk, _ref4brhW9VQ, _ref5nLvY9vw, {from: accounts[1]});
		await contractSCIDZmO.setRate.call(newRate6KYXbB, {from: accounts[4]});

		await expect(contractSCIDZmO.deposeBoss4.call(newBoss4jkV4Gqf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrkPuCL9C = accounts[4]
		const FOSTERAddrbIzopgP = accounts[5]
		const initialRateWH8ZugM = BigInt("338")
		const initialPeriodwDiFhVC = BigInt("1924")
		const initialOwnerI6YkxUo = accounts[3]
		const contractKLbMbEj = await Reseller.new(USDTAddrkPuCL9C, FOSTERAddrbIzopgP, initialRateWH8ZugM, initialPeriodwDiFhVC, initialOwnerI6YkxUo, {from: accounts[4]});
		const newFeeKGb9wee = BigInt("91")
		const accountOn4jYwW = accounts[3]
		await contractKLbMbEj.setFee.call(newFeeKGb9wee, {from: accounts[0]});
		const nullytyOKBE = await contractKLbMbEj.balanceUSDT.call(accountOn4jYwW, {from: accounts[3]});

		await expect(contractKLbMbEj.setFee.call(newFeeKGb9wee, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr5VZ7DA = accounts[4]
		const FOSTERAddrUTw0auM = accounts[5]
		const initialRateQa1q1j4 = BigInt("338")
		const initialPeriodLZ0D94S = BigInt("1924")
		const initialOwnera9SR77L = accounts[3]
		const contractNt9vAjG = await Reseller.new(USDTAddr5VZ7DA, FOSTERAddrUTw0auM, initialRateQa1q1j4, initialPeriodLZ0D94S, initialOwnera9SR77L, {from: accounts[4]});
		const accountV4Z6mSi = accounts[3]
		await contractNt9vAjG.switchState.call({from: "0x0000000000000000000000000000000000000001"});
		const nullukAcPMF = await contractNt9vAjG.balanceUSDT.call(accountV4Z6mSi, {from: accounts[3]});

		await expect(contractNt9vAjG.switchState.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQ3jlzX = accounts[0]
		const FOSTERAddrIBK1C5L = accounts[4]
		const initialRateTdIX87H = BigInt("441")
		const initialPeriodkaUk98o = BigInt("717")
		const initialOwneriUOhlNW = accounts[3]
		const contractUGcCgHh = await Reseller.new(USDTAddrQ3jlzX, FOSTERAddrIBK1C5L, initialRateTdIX87H, initialPeriodkaUk98o, initialOwneriUOhlNW, {from: accounts[1]});
		const accountZAJqs3V = "0x0000000000000000000000000000000000000001"
		const _ref5LJy02Rd = accounts[2]
		const _ref4RPv9ipc = accounts[5]
		const _ref3SZvfoPm = accounts[2]
		const _ref2MJDpeuz = accounts[2]
		const _ref1H6S2Qto = accounts[0]
		const valueDxMdiPW = BigInt("50")
		const newFeedbnFMBX = BigInt("122")
		const amountosN4Ch7 = BigInt("726")
		const nulld6teyEp = await contractUGcCgHh.allowanceFOSTER.call(accountZAJqs3V, {from: accounts[0]});
		await contractUGcCgHh.buy.call(valueDxMdiPW, _ref1H6S2Qto, _ref2MJDpeuz, _ref3SZvfoPm, _ref4RPv9ipc, _ref5LJy02Rd, {from: accounts[1]});
		await contractUGcCgHh.setFee.call(newFeedbnFMBX, {from: accounts[2]});
		const nullUSqtTd3 = await contractUGcCgHh.getEstimation.call(amountosN4Ch7, {from: accounts[2]});

		await expect(contractUGcCgHh.allowanceFOSTER.call(accountZAJqs3V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddryGaSFku = accounts[4]
		const FOSTERAddraWYXuiL = accounts[4]
		const initialRateuLj5UNU = BigInt("870")
		const initialPeriodSH0yjW = BigInt("1238")
		const initialOwnerAIowz3 = accounts[0]
		const contractVTmAi7g = await Reseller.new(USDTAddryGaSFku, FOSTERAddraWYXuiL, initialRateuLj5UNU, initialPeriodSH0yjW, initialOwnerAIowz3, {from: accounts[3]});
		const valueFJvvvNM = BigInt("1673")
		const recipient05ivph = accounts[4]
		const ERC20TokenEtvt8SN = accounts[1]
		const amountBZl8MQY = BigInt("1247")
		const newPeriodIR3MXXR = BigInt("861")
		const newBoss3SvGycE0 = accounts[4]
		await contractVTmAi7g.withdrawERC20.call(ERC20TokenEtvt8SN, recipient05ivph, valueFJvvvNM, {from: accounts[4]});
		const nullzGQ4Ouv = await contractVTmAi7g.getEstimation.call(amountBZl8MQY, {from: accounts[0]});
		await contractVTmAi7g.switchState.call({from: accounts[0]});
		await contractVTmAi7g.setPeriod.call(newPeriodIR3MXXR, {from: accounts[4]});
		await contractVTmAi7g.deposeBoss3.call(newBoss3SvGycE0, {from: accounts[2]});

		await expect(contractVTmAi7g.withdrawERC20.call(ERC20TokenEtvt8SN, recipient05ivph, valueFJvvvNM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrOrkziLb = accounts[3]
		const FOSTERAddrDCNR8yM = accounts[4]
		const initialRatevhyLx1U = BigInt("1639")
		const initialPeriodIz874i = BigInt("1030")
		const initialOwnerSCdI9ET = accounts[3]
		const contractSUuDdRT = await Reseller.new(USDTAddrOrkziLb, FOSTERAddrDCNR8yM, initialRatevhyLx1U, initialPeriodIz874i, initialOwnerSCdI9ET, {from: accounts[2]});
		const newRateSRupCPU = BigInt("1700")
		const commentRfOkL9c = "5aOx5otzyLm6TPUvIJIegCRNj8rUEB2zkiDsiDVEcpEkaX0egpIaK9S"
		const _ref5Ci71IHQ = accounts[4]
		const _ref4urWBSei = accounts[2]
		const _ref3b8tISBI = accounts[4]
		const _ref2iSBxysN = accounts[0]
		const _ref1oy2B6YQ = accounts[3]
		const valueayyvag = BigInt("1167")
		const accountdpjRqmN = accounts[5]
		const accountLSinoe9 = accounts[0]
		const _periodyTKOzX = BigInt("151")
		const amountjthZ1iv = BigInt("254")
		const recipientvFLmy9 = accounts[2]
		await contractSUuDdRT.setRate.call(newRateSRupCPU, {from: accounts[3]});
		await contractSUuDdRT.purchase.call(valueayyvag, _ref1oy2B6YQ, _ref2iSBxysN, _ref3b8tISBI, _ref4urWBSei, _ref5Ci71IHQ, commentRfOkL9c, {from: accounts[3]});
		const nullQqmsrny = await contractSUuDdRT.allowanceUSDT.call(accountdpjRqmN, {from: accounts[5]});
		const nullekFSjDA = await contractSUuDdRT.balanceFOSTER.call(accountLSinoe9, {from: accounts[0]});
		await contractSUuDdRT.freezeAndTransfer.call(recipientvFLmy9, amountjthZ1iv, _periodyTKOzX, {from: accounts[0]});

		await expect(contractSUuDdRT.setRate.call(newRateSRupCPU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbyaTt4g = accounts[4]
		const FOSTERAddr448YBb = accounts[4]
		const initialRatecK3nM0n = BigInt("843")
		const initialPeriodWe5zLOe = BigInt("78")
		const initialOwnerT81S6Yi = accounts[2]
		const contractLrJt12 = await Reseller.new(USDTAddrbyaTt4g, FOSTERAddr448YBb, initialRatecK3nM0n, initialPeriodWe5zLOe, initialOwnerT81S6Yi, {from: accounts[1]});
		const _ref5n1U1Vq7 = accounts[1]
		const _ref4vM3UBF0 = accounts[0]
		const _ref3CP4z6AV = accounts[1]
		const _ref2Aue78Te = "0x00000000000000000000000000000000000000-1"
		const _ref1Sj8WJSP = accounts[5]
		const valueQNlnrh8 = BigInt("631")
		await contractLrJt12.buy.call(valueQNlnrh8, _ref1Sj8WJSP, _ref2Aue78Te, _ref3CP4z6AV, _ref4vM3UBF0, _ref5n1U1Vq7, {from: accounts[1]});

		await expect(contractLrJt12.buy.call(valueQNlnrh8, _ref1Sj8WJSP, _ref2Aue78Te, _ref3CP4z6AV, _ref4vM3UBF0, _ref5n1U1Vq7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})