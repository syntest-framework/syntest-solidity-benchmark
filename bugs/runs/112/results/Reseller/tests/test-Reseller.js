const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrTk6oGZ = accounts[1]
		const FOSTERAddreIbZz8u = accounts[4]
		const initialRateXtMPYa = BigInt("646")
		const initialPeriodj3IQO0F = BigInt("1411")
		const initialOwnerWA8l4Zx = accounts[3]
		const contractZ5Bevq0 = await Reseller.new(USDTAddrTk6oGZ, FOSTERAddreIbZz8u, initialRateXtMPYa, initialPeriodj3IQO0F, initialOwnerWA8l4Zx, {from: accounts[1]});
		const amountqFmIad6 = BigInt("112")
		const newFeeanKUWPK = BigInt("1")
		const _ref5JGQkEQk = accounts[4]
		const _ref4ZXVie3d = accounts[1]
		const _ref3LWcPMFe = accounts[1]
		const _ref2Av6oDnB = accounts[4]
		const _ref1lEDMjPS = accounts[3]
		const valueMHdxo2e = BigInt("1047")
		const nullWc53OO9 = await contractZ5Bevq0.getEstimation.call(amountqFmIad6, {from: accounts[0]});
		await contractZ5Bevq0.setFee.call(newFeeanKUWPK, {from: accounts[3]});
		await contractZ5Bevq0.buy.call(valueMHdxo2e, _ref1lEDMjPS, _ref2Av6oDnB, _ref3LWcPMFe, _ref4ZXVie3d, _ref5JGQkEQk, {from: accounts[2]});

		assert.equal(nullWc53OO9, 72352)
		await expect(contractZ5Bevq0.setFee.call(newFeeanKUWPK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrEp9sUE4 = accounts[3]
		const FOSTERAddrbfZD6ko = accounts[1]
		const initialRateKPgkf9r = BigInt("1018")
		const initialPeriodbYvUYML = BigInt("1936")
		const initialOwnerm4rI9oy = accounts[5]
		const contractdkfOLI6 = await Reseller.new(USDTAddrEp9sUE4, FOSTERAddrbfZD6ko, initialRateKPgkf9r, initialPeriodbYvUYML, initialOwnerm4rI9oy, {from: accounts[3]});
		const _periodz5kaXAv = BigInt("955")
		const amountiCiKSB8 = BigInt("1486")
		const recipientGHN67ee = accounts[3]
		const accountaCPTvkV = accounts[0]
		const accountlcXSU33 = accounts[0]
		await contractdkfOLI6.freezeAndTransfer.call(recipientGHN67ee, amountiCiKSB8, _periodz5kaXAv, {from: accounts[1]});
		const nullpQBv0bM = await contractdkfOLI6.balanceUSDT.call(accountaCPTvkV, {from: accounts[3]});
		const nulldh03tP7 = await contractdkfOLI6.allowanceFOSTER.call(accountlcXSU33, {from: accounts[0]});

		await expect(contractdkfOLI6.freezeAndTransfer.call(recipientGHN67ee, amountiCiKSB8, _periodz5kaXAv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddra7dNQOg = accounts[0]
		const FOSTERAddrcD26Ooi = accounts[0]
		const initialRateYnojCz3 = BigInt("241")
		const initialPeriodGI9n46i = BigInt("134")
		const initialOwnerBUCz8V0 = accounts[3]
		const contractcm2y1nm = await Reseller.new(USDTAddra7dNQOg, FOSTERAddrcD26Ooi, initialRateYnojCz3, initialPeriodGI9n46i, initialOwnerBUCz8V0, {from: accounts[0]});
		const valueL5QdZ8M = BigInt("1649")
		const newBoss3OLDu7M = "0x0000000000000000000000000000000000000001"
		const commentYe4Q77S = "YNQApE7R1MErcG9x9VrhFj6l5jPcd6bCPNXGSKSKW"
		const _ref5xDkhIIQ = accounts[3]
		const _ref4o0NfiJ = accounts[1]
		const _ref3KC5j7Jm = accounts[3]
		const _ref2Ox3uxEB = accounts[3]
		const _ref1QEx29kC = accounts[3]
		const valuerfysiou = BigInt("1013")
		const valueaLjvOmL = BigInt("591")
		await contractcm2y1nm.withdraw.call(valueL5QdZ8M, {from: accounts[0]});
		await contractcm2y1nm.deposeBoss3.call(newBoss3OLDu7M, {from: accounts[4]});
		await contractcm2y1nm.purchase.call(valuerfysiou, _ref1QEx29kC, _ref2Ox3uxEB, _ref3KC5j7Jm, _ref4o0NfiJ, _ref5xDkhIIQ, commentYe4Q77S, {from: accounts[4]});
		await contractcm2y1nm.withdraw.call(valueaLjvOmL, {from: accounts[4]});

		await expect(contractcm2y1nm.withdraw.call(valueL5QdZ8M, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrNGoCXV = accounts[0]
		const FOSTERAddrsIvgqF = accounts[3]
		const initialRatedgaHPeO = BigInt("657")
		const initialPeriodJS69xF1 = BigInt("1122")
		const initialOwnerG6gtHKu = accounts[2]
		const contractGQaeYXl = await Reseller.new(USDTAddrNGoCXV, FOSTERAddrsIvgqF, initialRatedgaHPeO, initialPeriodJS69xF1, initialOwnerG6gtHKu, {from: "0x0000000000000000000000000000000000000001"});
		const newBoss3lA3m60e = accounts[3]
		const amountsKQ3xik = BigInt("547")
		const valueXifO9qK = BigInt("9")
		const recipientvzuPVM = accounts[0]
		const ERC20TokenrzgHyPh = accounts[3]
		const newBoss3lo8AbpT = accounts[5]
		await contractGQaeYXl.deposeBoss3.call(newBoss3lA3m60e, {from: accounts[3]});
		const nullLQwVtsV = await contractGQaeYXl.getEstimation.call(amountsKQ3xik, {from: accounts[2]});
		await contractGQaeYXl.withdrawERC20.call(ERC20TokenrzgHyPh, recipientvzuPVM, valueXifO9qK, {from: accounts[4]});
		await contractGQaeYXl.deposeBoss3.call(newBoss3lo8AbpT, {from: accounts[2]});
	});

	it('test for Reseller', async () => {
		const USDTAddrJxCOyQR = accounts[5]
		const FOSTERAddrOXyzFbj = accounts[1]
		const initialRatejoMtZK = BigInt("802")
		const initialPeriodO8ThTQr = BigInt("677")
		const initialOwnerM6888mr = accounts[0]
		const contractqbi2hdc = await Reseller.new(USDTAddrJxCOyQR, FOSTERAddrOXyzFbj, initialRatejoMtZK, initialPeriodO8ThTQr, initialOwnerM6888mr, {from: accounts[0]});
		const accountBMXOSzO = accounts[1]
		const _ref5MMLruev = accounts[4]
		const _ref4zxxgqQi = accounts[1]
		const _ref3tBd2q9 = accounts[3]
		const _ref2exAlHIN = "0x0000000000000000000000000000000000000001"
		const _ref1uySnpsy = accounts[0]
		const valuezNirQYi = BigInt("1677")
		const amountW6TekPE = BigInt("1952")
		const nullvJnrNmK = await contractqbi2hdc.allowanceFOSTER.call(accountBMXOSzO, {from: "0x0000000000000000000000000000000000000001"});
		await contractqbi2hdc.buy.call(valuezNirQYi, _ref1uySnpsy, _ref2exAlHIN, _ref3tBd2q9, _ref4zxxgqQi, _ref5MMLruev, {from: accounts[3]});
		const nulltfeJ6O = await contractqbi2hdc.getEstimation.call(amountW6TekPE, {from: accounts[5]});

		await expect(contractqbi2hdc.allowanceFOSTER.call(accountBMXOSzO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrL5cZeSt = accounts[2]
		const FOSTERAddrUqkthCl = accounts[3]
		const initialRateYyPb5OO = BigInt("1472")
		const initialPeriodDKRlfV = BigInt("1085")
		const initialOwnerWnVv0Z2 = accounts[4]
		const contractuG9iolj = await Reseller.new(USDTAddrL5cZeSt, FOSTERAddrUqkthCl, initialRateYyPb5OO, initialPeriodDKRlfV, initialOwnerWnVv0Z2, {from: accounts[4]});
		const newPeriodI93rJa = BigInt("1805")
		const amountSbmPFmF = BigInt("227")
		const newRategBWft04 = BigInt("642")
		await contractuG9iolj.setPeriod.call(newPeriodI93rJa, {from: accounts[4]});
		const nullng4CGBC = await contractuG9iolj.getEstimation.call(amountSbmPFmF, {from: "0x0000000000000000000000000000000000000001"});
		await contractuG9iolj.setRate.call(newRategBWft04, {from: accounts[0]});

		assert.equal(nullng4CGBC, 334144)
		await expect(contractuG9iolj.getEstimation.call(amountSbmPFmF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQmoHbpG = accounts[2]
		const FOSTERAddrFaMSJeW = accounts[2]
		const initialRateyONd5BN = BigInt("1")
		const initialPeriodjEdfFc1 = BigInt("1037")
		const initialOwnereDhWJOb = accounts[1]
		const contractkLtYXmA = await Reseller.new(USDTAddrQmoHbpG, FOSTERAddrFaMSJeW, initialRateyONd5BN, initialPeriodjEdfFc1, initialOwnereDhWJOb, {from: accounts[1]});
		const newRateJuRs7KB = BigInt("56")
		const newBoss4uksMYSJ = accounts[1]
		await contractkLtYXmA.switchState.call({from: accounts[2]});
		await contractkLtYXmA.setRate.call(newRateJuRs7KB, {from: accounts[2]});
		await contractkLtYXmA.deposeBoss4.call(newBoss4uksMYSJ, {from: accounts[1]});

		await expect(contractkLtYXmA.switchState.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrvsC0om2 = accounts[2]
		const FOSTERAddrELZpkq2 = accounts[3]
		const initialRatePecmnXn = BigInt("1543")
		const initialPeriodwUJh8hV = BigInt("1770")
		const initialOwnerULQF9MV = accounts[1]
		const contractvbSKSvi = await Reseller.new(USDTAddrvsC0om2, FOSTERAddrELZpkq2, initialRatePecmnXn, initialPeriodwUJh8hV, initialOwnerULQF9MV, {from: accounts[2]});
		const accountaRfG6He = accounts[5]
		const _ref5caMaGn = accounts[4]
		const _ref4vOecjZk = accounts[2]
		const _ref3XcC89Ev = accounts[3]
		const _ref2ZAuf7j = accounts[2]
		const _ref1PdO7AH8 = accounts[0]
		const valueXyxI5Hq = BigInt("445")
		const _ref5nqciDeq = accounts[1]
		const _ref4hZRaSKy = accounts[4]
		const _ref3nneQAAU = accounts[3]
		const _ref2HwHETU9 = accounts[1]
		const _ref1M7YJWT = accounts[3]
		const valueCC2gnQv = BigInt("894")
		const nullqeGoce = await contractvbSKSvi.balanceFOSTER.call(accountaRfG6He, {from: accounts[0]});
		await contractvbSKSvi.buy.call(valueXyxI5Hq, _ref1PdO7AH8, _ref2ZAuf7j, _ref3XcC89Ev, _ref4vOecjZk, _ref5caMaGn, {from: accounts[2]});
		await contractvbSKSvi.buy.call(valueCC2gnQv, _ref1M7YJWT, _ref2HwHETU9, _ref3nneQAAU, _ref4hZRaSKy, _ref5nqciDeq, {from: accounts[4]});

		await expect(contractvbSKSvi.balanceFOSTER.call(accountaRfG6He, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrfGsqz3v = accounts[1]
		const FOSTERAddrKIECjQD = accounts[4]
		const initialRatedQSlPcr = BigInt("646")
		const initialPeriodQ1QNqJo = BigInt("1411")
		const initialOwnerNwde1Sw = accounts[3]
		const contractkbyz60a = await Reseller.new(USDTAddrfGsqz3v, FOSTERAddrKIECjQD, initialRatedQSlPcr, initialPeriodQ1QNqJo, initialOwnerNwde1Sw, {from: accounts[1]});
		const amountKOL6C5 = BigInt("112")
		const newFeep2Go8rn = BigInt("1")
		const level5BIg2xN = BigInt("66")
		const level44dFhPa = BigInt("14")
		const level3t2UUQMG = BigInt("35")
		const level2LwsEsW = BigInt("183")
		const level1Byt4i75 = BigInt("3")
		const _ref5rEHKslw = accounts[4]
		const _ref4dt7Fdt2 = accounts[1]
		const _ref3s7zB22R = accounts[1]
		const _ref2zVh00xK = accounts[4]
		const _ref1rAmzQFs = accounts[3]
		const valueOqnba9c = BigInt("1047")
		const nullNN0WssF = await contractkbyz60a.getEstimation.call(amountKOL6C5, {from: accounts[0]});
		await contractkbyz60a.setFee.call(newFeep2Go8rn, {from: accounts[3]});
		await contractkbyz60a.setRefBonus.call(level1Byt4i75, level2LwsEsW, level3t2UUQMG, level44dFhPa, level5BIg2xN, {from: accounts[3]});
		await contractkbyz60a.buy.call(valueOqnba9c, _ref1rAmzQFs, _ref2zVh00xK, _ref3s7zB22R, _ref4dt7Fdt2, _ref5rEHKslw, {from: accounts[2]});

		assert.equal(nullNN0WssF, 72352)
		await expect(contractkbyz60a.setFee.call(newFeep2Go8rn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrMpluKno = accounts[2]
		const FOSTERAddrjuVyzC = accounts[3]
		const initialRatebD3QOl = BigInt("1472")
		const initialPeriodicHvdw3 = BigInt("1085")
		const initialOwnerH1bdehQ = accounts[4]
		const contractknoU89h = await Reseller.new(USDTAddrMpluKno, FOSTERAddrjuVyzC, initialRatebD3QOl, initialPeriodicHvdw3, initialOwnerH1bdehQ, {from: accounts[4]});
		const newPeriodZYQcfId = BigInt("1805")
		const amountlPew5uU = BigInt("227")
		const newBoss2kx2t0Mz = accounts[3]
		const newRateOyuNU3V = BigInt("642")
		await contractknoU89h.setPeriod.call(newPeriodZYQcfId, {from: accounts[4]});
		const nullTV6QqbA = await contractknoU89h.getEstimation.call(amountlPew5uU, {from: "0x0000000000000000000000000000000000000001"});
		await contractknoU89h.deposeBoss2.call(newBoss2kx2t0Mz, {from: accounts[5]});
		await contractknoU89h.setRate.call(newRateOyuNU3V, {from: accounts[0]});

		assert.equal(nullTV6QqbA, 334144)
		await expect(contractknoU89h.getEstimation.call(amountlPew5uU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrG7Nd7Cr = accounts[2]
		const FOSTERAddraerARAp = accounts[3]
		const initialRatens7COyS = BigInt("1472")
		const initialPeriodYqZ2NQo = BigInt("1085")
		const initialOwnerImCr8aw = accounts[4]
		const contractgKxCH2E = await Reseller.new(USDTAddrG7Nd7Cr, FOSTERAddraerARAp, initialRatens7COyS, initialPeriodYqZ2NQo, initialOwnerImCr8aw, {from: accounts[4]});
		const newPeriodAwSKvCi = BigInt("1805")
		const newBoss4JCcdJOM = accounts[0]
		const amountyoiC7ja = BigInt("227")
		const newRateLDdcMjt = BigInt("650")
		await contractgKxCH2E.setPeriod.call(newPeriodAwSKvCi, {from: accounts[4]});
		await contractgKxCH2E.deposeBoss4.call(newBoss4JCcdJOM, {from: accounts[5]});
		const nullv373cG = await contractgKxCH2E.getEstimation.call(amountyoiC7ja, {from: "0x0000000000000000000000000000000000000001"});
		await contractgKxCH2E.setRate.call(newRateLDdcMjt, {from: accounts[0]});

		await expect(contractgKxCH2E.setPeriod.call(newPeriodAwSKvCi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrMDoyaw = accounts[2]
		const FOSTERAddrFjSnSwu = accounts[2]
		const initialRatejmIckdd = BigInt("1")
		const initialPeriodXWxmEt9 = BigInt("1037")
		const initialOwnerCQOOYvf = accounts[1]
		const contractVfaK8C = await Reseller.new(USDTAddrMDoyaw, FOSTERAddrFjSnSwu, initialRatejmIckdd, initialPeriodXWxmEt9, initialOwnerCQOOYvf, {from: accounts[1]});
		const newBoss3ZL2QWWp = accounts[4]
		const newFeeCHpc5w = BigInt("60")
		const newBoss1QnsBE2M = accounts[0]
		const newBoss4IxNTZb1 = accounts[1]
		const accountmVMKynb = accounts[1]
		const valueHG83gp = BigInt("1880")
		const recipientAc6I70k = accounts[1]
		const ERC20TokengN7Wo5 = accounts[3]
		await contractVfaK8C.deposeBoss3.call(newBoss3ZL2QWWp, {from: accounts[4]});
		await contractVfaK8C.setFee.call(newFeeCHpc5w, {from: accounts[1]});
		await contractVfaK8C.switchState.call({from: accounts[2]});
		await contractVfaK8C.deposeBoss1.call(newBoss1QnsBE2M, {from: accounts[0]});
		await contractVfaK8C.deposeBoss4.call(newBoss4IxNTZb1, {from: accounts[1]});
		const nullaQ9pB3w = await contractVfaK8C.balanceUSDT.call(accountmVMKynb, {from: accounts[1]});
		await contractVfaK8C.withdrawERC20.call(ERC20TokengN7Wo5, recipientAc6I70k, valueHG83gp, {from: accounts[2]});

		await expect(contractVfaK8C.deposeBoss3.call(newBoss3ZL2QWWp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddru1AvnjA = accounts[3]
		const FOSTERAddrFpK7iGF = accounts[1]
		const initialRatex5uThrC = BigInt("1018")
		const initialPeriodLY3k2W = BigInt("1936")
		const initialOwnerFsWuKRl = accounts[5]
		const contractti7gqqi = await Reseller.new(USDTAddru1AvnjA, FOSTERAddrFpK7iGF, initialRatex5uThrC, initialPeriodLY3k2W, initialOwnerFsWuKRl, {from: accounts[3]});
		const accountOmEF9Wb = accounts[4]
		const _periodLKUgnwj = BigInt("955")
		const amountrLDsEo7 = BigInt("1486")
		const recipientoXP05Q3 = accounts[3]
		const accountLCOoZT = accounts[1]
		const account70xz9K = accounts[0]
		const newRateYQW5DhJ = BigInt("278")
		const nullge2cHjU = await contractti7gqqi.allowanceUSDT.call(accountOmEF9Wb, {from: accounts[4]});
		await contractti7gqqi.freezeAndTransfer.call(recipientoXP05Q3, amountrLDsEo7, _periodLKUgnwj, {from: accounts[1]});
		const nullZBri7L = await contractti7gqqi.balanceUSDT.call(accountLCOoZT, {from: accounts[3]});
		const nullouxgIPX = await contractti7gqqi.allowanceFOSTER.call(account70xz9K, {from: accounts[0]});
		await contractti7gqqi.setRate.call(newRateYQW5DhJ, {from: accounts[0]});

		await expect(contractti7gqqi.allowanceUSDT.call(accountOmEF9Wb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQkWQtIw = accounts[2]
		const FOSTERAddrD44nllO = accounts[2]
		const initialRateIIqcTHN = BigInt("1")
		const initialPeriodGuxijl6 = BigInt("1037")
		const initialOwnerJGYe6Z3 = accounts[1]
		const contractStrRbQX = await Reseller.new(USDTAddrQkWQtIw, FOSTERAddrD44nllO, initialRateIIqcTHN, initialPeriodGuxijl6, initialOwnerJGYe6Z3, {from: accounts[1]});
		const newFeeBC9OOqM = BigInt("60")
		const newBoss3W0e9qe3 = accounts[0]
		const newBoss4mxRTugv = accounts[2]
		const accountUBAdsOi = accounts[1]
		const valuekgZLV1b = BigInt("1880")
		const recipientvsMhBpn = accounts[1]
		const ERC20Tokenxrsw0V = accounts[3]
		await contractStrRbQX.setFee.call(newFeeBC9OOqM, {from: accounts[1]});
		await contractStrRbQX.deposeBoss3.call(newBoss3W0e9qe3, {from: accounts[1]});
		await contractStrRbQX.switchState.call({from: accounts[2]});
		await contractStrRbQX.deposeBoss4.call(newBoss4mxRTugv, {from: accounts[1]});
		const nullrDqkK9B = await contractStrRbQX.balanceUSDT.call(accountUBAdsOi, {from: accounts[1]});
		await contractStrRbQX.withdrawERC20.call(ERC20Tokenxrsw0V, recipientvsMhBpn, valuekgZLV1b, {from: accounts[2]});

		await expect(contractStrRbQX.setFee.call(newFeeBC9OOqM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrROL0oJo = accounts[1]
		const FOSTERAddrm567fXP = accounts[4]
		const initialRateJWbSkRs = BigInt("646")
		const initialPeriodXMNNbZu = BigInt("1411")
		const initialOwnerAX6Ank3 = accounts[3]
		const contractsdGSGQ8 = await Reseller.new(USDTAddrROL0oJo, FOSTERAddrm567fXP, initialRateJWbSkRs, initialPeriodXMNNbZu, initialOwnerAX6Ank3, {from: accounts[1]});
		const accountBMTY5Yv = accounts[0]
		const amountwlwSMtF = BigInt("112")
		const _ref5wLgLr6 = accounts[4]
		const _ref4maV9SrC = accounts[1]
		const _ref3DIfeOaN = accounts[2]
		const _ref2Ydxj1ox = accounts[4]
		const _ref1gzIa684 = accounts[4]
		const valuePMY5Fde = BigInt("1047")
		const nullHBtKCEG = await contractsdGSGQ8.balanceUSDT.call(accountBMTY5Yv, {from: accounts[2]});
		const nulliHUoNVR = await contractsdGSGQ8.getEstimation.call(amountwlwSMtF, {from: accounts[0]});
		await contractsdGSGQ8.buy.call(valuePMY5Fde, _ref1gzIa684, _ref2Ydxj1ox, _ref3DIfeOaN, _ref4maV9SrC, _ref5wLgLr6, {from: accounts[2]});

		await expect(contractsdGSGQ8.balanceUSDT.call(accountBMTY5Yv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr9DW5hO = accounts[3]
		const FOSTERAddri6p5Glz = accounts[0]
		const initialRatep3BRQ8x = BigInt("1812")
		const initialPeriodfpXHqLg = BigInt("1150")
		const initialOwnerfgZPse = "0x0000000000000000000000000000000000000001"
		const contractdU2XROo = await Reseller.new(USDTAddr9DW5hO, FOSTERAddri6p5Glz, initialRatep3BRQ8x, initialPeriodfpXHqLg, initialOwnerfgZPse, {from: accounts[4]});
		const valueyPtsMD5 = BigInt("1918")
		const recipientmrKp0R7 = accounts[3]
		const ERC20TokenL4SsF37 = accounts[0]
		const newMinimumei5iQXY = BigInt("904")
		const newPeriodzpf5X6t = BigInt("2002")
		await contractdU2XROo.withdrawERC20.call(ERC20TokenL4SsF37, recipientmrKp0R7, valueyPtsMD5, {from: accounts[4]});
		await contractdU2XROo.switchState.call({from: accounts[3]});
		await contractdU2XROo.setMinimum.call(newMinimumei5iQXY, {from: accounts[0]});
		await contractdU2XROo.setPeriod.call(newPeriodzpf5X6t, {from: accounts[4]});

		await expect(contractdU2XROo.withdrawERC20.call(ERC20TokenL4SsF37, recipientmrKp0R7, valueyPtsMD5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrihFVWzP = accounts[1]
		const FOSTERAddrVokWqlZ = accounts[4]
		const initialRatey0i0ozb = BigInt("646")
		const initialPeriodxclFiDP = BigInt("1411")
		const initialOwnert9mXaqK = accounts[3]
		const contractVjqc3iJ = await Reseller.new(USDTAddrihFVWzP, FOSTERAddrVokWqlZ, initialRatey0i0ozb, initialPeriodxclFiDP, initialOwnert9mXaqK, {from: accounts[1]});
		const _perioduLImjtE = BigInt("1045")
		const amountOICNYT = BigInt("1146")
		const recipientfKjtS2f = accounts[2]
		const newBoss3vyOlWcv = accounts[1]
		const amountWCdyg28 = BigInt("147")
		await contractVjqc3iJ.freezeAndTransfer.call(recipientfKjtS2f, amountOICNYT, _perioduLImjtE, {from: accounts[3]});
		await contractVjqc3iJ.switchState.call({from: accounts[0]});
		await contractVjqc3iJ.deposeBoss3.call(newBoss3vyOlWcv, {from: accounts[0]});
		const nullhgoprL6 = await contractVjqc3iJ.getEstimation.call(amountWCdyg28, {from: accounts[0]});

		await expect(contractVjqc3iJ.freezeAndTransfer.call(recipientfKjtS2f, amountOICNYT, _perioduLImjtE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCsx0k0o = accounts[2]
		const FOSTERAddrqEwun2R = accounts[3]
		const initialRateWvx3TI4 = BigInt("1472")
		const initialPeriodmDQI9Do = BigInt("1085")
		const initialOwnerLyvRLl = accounts[4]
		const contractq4CRtz = await Reseller.new(USDTAddrCsx0k0o, FOSTERAddrqEwun2R, initialRateWvx3TI4, initialPeriodmDQI9Do, initialOwnerLyvRLl, {from: accounts[4]});
		const newPeriodF6UTF0H = BigInt("1805")
		const commentEhu3oXm = "oUYR4EDystbupX2Wsb"
		const _ref5iCfzha6 = accounts[1]
		const _ref4y06vj4F = accounts[2]
		const _ref3Vbl6pS3 = accounts[5]
		const _ref2vHwkDBx = accounts[2]
		const _ref1o0erNQM = accounts[4]
		const valuegwTLSNo = BigInt("1586")
		const amountKIuwZiR = BigInt("249")
		const newBoss2qBSI8SP = accounts[3]
		await contractq4CRtz.setPeriod.call(newPeriodF6UTF0H, {from: accounts[4]});
		await contractq4CRtz.purchase.call(valuegwTLSNo, _ref1o0erNQM, _ref2vHwkDBx, _ref3Vbl6pS3, _ref4y06vj4F, _ref5iCfzha6, commentEhu3oXm, {from: "0x0000000000000000000000000000000000000001"});
		const nullsmbKxSx = await contractq4CRtz.getEstimation.call(amountKIuwZiR, {from: "0x0000000000000000000000000000000000000001"});
		await contractq4CRtz.deposeBoss2.call(newBoss2qBSI8SP, {from: accounts[5]});

		await expect(contractq4CRtz.setPeriod.call(newPeriodF6UTF0H, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrsYgTyGk = accounts[2]
		const FOSTERAddrOog0GO = accounts[3]
		const initialRateXoaoVE = BigInt("1472")
		const initialPeriodMgzi3vy = BigInt("1085")
		const initialOwnermyfiGjH = accounts[4]
		const contractUn4QqPB = await Reseller.new(USDTAddrsYgTyGk, FOSTERAddrOog0GO, initialRateXoaoVE, initialPeriodMgzi3vy, initialOwnermyfiGjH, {from: accounts[4]});
		const newPeriodJYTguCA = BigInt("1805")
		const newBoss1hetXADc = accounts[4]
		const newBoss4IArrkKt = accounts[0]
		const amounthd014b = BigInt("218")
		const newRateeF8j2DJ = BigInt("650")
		await contractUn4QqPB.setPeriod.call(newPeriodJYTguCA, {from: accounts[4]});
		await contractUn4QqPB.deposeBoss1.call(newBoss1hetXADc, {from: accounts[4]});
		await contractUn4QqPB.deposeBoss4.call(newBoss4IArrkKt, {from: accounts[5]});
		const nullHnSXQhR = await contractUn4QqPB.getEstimation.call(amounthd014b, {from: "0x0000000000000000000000000000000000000001"});
		await contractUn4QqPB.setRate.call(newRateeF8j2DJ, {from: accounts[0]});

		await expect(contractUn4QqPB.setPeriod.call(newPeriodJYTguCA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrLNCSTvJ = accounts[1]
		const FOSTERAddrxGkdVI6 = accounts[4]
		const initialRateLqESHvc = BigInt("646")
		const initialPeriodb0Qxp97 = BigInt("1411")
		const initialOwnerhm8fOC = accounts[3]
		const contractEtsCXnW = await Reseller.new(USDTAddrLNCSTvJ, FOSTERAddrxGkdVI6, initialRateLqESHvc, initialPeriodb0Qxp97, initialOwnerhm8fOC, {from: accounts[1]});
		const amountvZoRf30 = BigInt("112")
		const newMinimumuNsAgP1 = BigInt("982")
		const _ref5tRu8UpI = accounts[4]
		const _ref4njliy71 = accounts[1]
		const _ref3keTxbVC = accounts[2]
		const _ref2H2DQ3S3 = accounts[4]
		const _ref1ttJ2rJi = accounts[4]
		const valueKg5ZJys = BigInt("1047")
		const nulluy4PlD = await contractEtsCXnW.getEstimation.call(amountvZoRf30, {from: accounts[0]});
		await contractEtsCXnW.setMinimum.call(newMinimumuNsAgP1, {from: accounts[1]});
		await contractEtsCXnW.buy.call(valueKg5ZJys, _ref1ttJ2rJi, _ref2H2DQ3S3, _ref3keTxbVC, _ref4njliy71, _ref5tRu8UpI, {from: accounts[2]});

		assert.equal(nulluy4PlD, 72352)
		await expect(contractEtsCXnW.setMinimum.call(newMinimumuNsAgP1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrYKBBZzE = accounts[1]
		const FOSTERAddrOaYDIOZ = accounts[4]
		const initialRate21KwJA = BigInt("646")
		const initialPeriodz9ShAVV = BigInt("1411")
		const initialOwnerb5IgCCy = accounts[3]
		const contracterlVBRK = await Reseller.new(USDTAddrYKBBZzE, FOSTERAddrOaYDIOZ, initialRate21KwJA, initialPeriodz9ShAVV, initialOwnerb5IgCCy, {from: accounts[1]});
		const amountBXN7PSq = BigInt("112")
		const newRateIjc98ZY = BigInt("470")
		const _ref5yiYYHEf = accounts[4]
		const _ref4RpCfPxi = accounts[1]
		const _ref3xSDRxAL = accounts[3]
		const _ref2ejdnGxf = accounts[4]
		const _ref1MKn2eNg = accounts[3]
		const valueQJXku7P = BigInt("1069")
		const newBoss2kdCM7rf = accounts[2]
		const newBoss3VKuypt = accounts[3]
		const nullfnjFazJ = await contracterlVBRK.getEstimation.call(amountBXN7PSq, {from: accounts[0]});
		await contracterlVBRK.setRate.call(newRateIjc98ZY, {from: accounts[3]});
		await contracterlVBRK.buy.call(valueQJXku7P, _ref1MKn2eNg, _ref2ejdnGxf, _ref3xSDRxAL, _ref4RpCfPxi, _ref5yiYYHEf, {from: accounts[2]});
		await contracterlVBRK.deposeBoss2.call(newBoss2kdCM7rf, {from: accounts[2]});
		await contracterlVBRK.deposeBoss3.call(newBoss3VKuypt, {from: accounts[1]});

		assert.equal(nullfnjFazJ, 72352)
		await expect(contracterlVBRK.setRate.call(newRateIjc98ZY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrv7MoApK = accounts[1]
		const FOSTERAddrATSkGiQ = accounts[4]
		const initialRatemdYR2JJ = BigInt("646")
		const initialPeriodda1TCkg = BigInt("1411")
		const initialOwnerkCUDwZB = accounts[3]
		const contractVJUpTH9 = await Reseller.new(USDTAddrv7MoApK, FOSTERAddrATSkGiQ, initialRatemdYR2JJ, initialPeriodda1TCkg, initialOwnerkCUDwZB, {from: accounts[1]});
		const newBoss4mFlUpmx = accounts[1]
		const _ref5iHiXaoK = accounts[5]
		const _ref4OFOrbgz = accounts[2]
		const _ref3vfQwd18 = accounts[2]
		const _ref2KBX2QI4 = accounts[4]
		const _ref1Er0Dxn8 = accounts[3]
		const valuedY0dxa = BigInt("1047")
		await contractVJUpTH9.deposeBoss4.call(newBoss4mFlUpmx, {from: accounts[3]});
		await contractVJUpTH9.buy.call(valuedY0dxa, _ref1Er0Dxn8, _ref2KBX2QI4, _ref3vfQwd18, _ref4OFOrbgz, _ref5iHiXaoK, {from: accounts[2]});
		await contractVJUpTH9.switchState.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(contractVJUpTH9.deposeBoss4.call(newBoss4mFlUpmx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrioQ3PR = accounts[1]
		const FOSTERAddrpykxwmu = accounts[4]
		const initialRatekKjXwn5 = BigInt("646")
		const initialPeriodHfzXsuF = BigInt("1411")
		const initialOwnerYc6UgH = accounts[3]
		const contractuIQd13w = await Reseller.new(USDTAddrioQ3PR, FOSTERAddrpykxwmu, initialRatekKjXwn5, initialPeriodHfzXsuF, initialOwnerYc6UgH, {from: accounts[1]});
		const amountWXlMvvh = BigInt("112")
		const commentq4lGe81 = "93qoPjf5pIeqAgrI11DdUmQRd4Pd9VsNXcCHli3yaT9yNAs4C8Dw"
		const _ref5dGLTA2D = accounts[3]
		const _ref4czKSpxt = accounts[0]
		const _ref31F52PL = accounts[4]
		const _ref2KiiSkst = accounts[0]
		const _ref1Fj7fe7s = accounts[3]
		const valueNmEGaOe = BigInt("1331")
		const _periodwaIHAZ6 = BigInt("233")
		const amountts9YGPW = BigInt("203")
		const recipientZR2LFUo = accounts[2]
		const _ref5egIMcPh = accounts[4]
		const _ref4k4gYmw3 = accounts[1]
		const _ref3wc1CDo = accounts[3]
		const _ref2I4LttQn = accounts[4]
		const _ref1SoWj0Jl = accounts[3]
		const value0K4DPo = BigInt("1047")
		const nullOmBotWL = await contractuIQd13w.getEstimation.call(amountWXlMvvh, {from: accounts[0]});
		await contractuIQd13w.purchase.call(valueNmEGaOe, _ref1Fj7fe7s, _ref2KiiSkst, _ref31F52PL, _ref4czKSpxt, _ref5dGLTA2D, commentq4lGe81, {from: accounts[3]});
		await contractuIQd13w.freezeAndTransfer.call(recipientZR2LFUo, amountts9YGPW, _periodwaIHAZ6, {from: "0x0000000000000000000000000000000000000001"});
		await contractuIQd13w.buy.call(value0K4DPo, _ref1SoWj0Jl, _ref2I4LttQn, _ref3wc1CDo, _ref4k4gYmw3, _ref5egIMcPh, {from: accounts[2]});

		assert.equal(nullOmBotWL, 72352)
		await expect(contractuIQd13w.purchase.call(valueNmEGaOe, _ref1Fj7fe7s, _ref2KiiSkst, _ref31F52PL, _ref4czKSpxt, _ref5dGLTA2D, commentq4lGe81, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdvhsv3p = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrvKdR4RG = accounts[1]
		const initialRategYzqhMM = BigInt("717")
		const initialPeriodcqmy4r9 = BigInt("1534")
		const initialOwnerP1Xg0d3 = accounts[4]
		const contractxbJs4I1 = await Reseller.new(USDTAddrdvhsv3p, FOSTERAddrvKdR4RG, initialRategYzqhMM, initialPeriodcqmy4r9, initialOwnerP1Xg0d3, {from: accounts[4]});
		const newMinimumTv4vVN7 = BigInt("125")
		const newBoss4okC56jZ = accounts[2]
		const accountS8Sxh1H = accounts[2]
		await contractxbJs4I1.setMinimum.call(newMinimumTv4vVN7, {from: accounts[4]});
		await contractxbJs4I1.deposeBoss4.call(newBoss4okC56jZ, {from: accounts[4]});
		const nulloQMnPYa = await contractxbJs4I1.balanceUSDT.call(accountS8Sxh1H, {from: accounts[0]});

		await expect(contractxbJs4I1.setMinimum.call(newMinimumTv4vVN7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrW7Sn0Wb = accounts[2]
		const FOSTERAddrJEQprwK = accounts[2]
		const initialRategcne5HD = BigInt("1")
		const initialPeriodby759Ox = BigInt("1037")
		const initialOwnerGIB7UQV = accounts[1]
		const contracthhxf4eC = await Reseller.new(USDTAddrW7Sn0Wb, FOSTERAddrJEQprwK, initialRategcne5HD, initialPeriodby759Ox, initialOwnerGIB7UQV, {from: accounts[1]});
		await contracthhxf4eC.switchState.call({from: accounts[1]});
		await contracthhxf4eC.switchState.call({from: accounts[2]});

		await expect(contracthhxf4eC.switchState.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})