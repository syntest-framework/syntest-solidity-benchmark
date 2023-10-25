const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrz0AM5lp = accounts[1]
		const FOSTERAddrGZ4taqN = accounts[0]
		const initialRatePsFC0qX = BigInt("888")
		const initialPeriod5ksa5q = BigInt("757")
		const initialOwnerkuJFqeo = accounts[4]
		const contracthQcxvE9 = await Reseller.new(USDTAddrz0AM5lp, FOSTERAddrGZ4taqN, initialRatePsFC0qX, initialPeriod5ksa5q, initialOwnerkuJFqeo, {from: "0x0000000000000000000000000000000000000001"});
		const _periodNOtvqK = BigInt("762")
		const amounteeiL6GN = BigInt("890")
		const recipientq1xDlhi = accounts[4]
		const level5oEoCINV = BigInt("56")
		const level4hO1Q44 = BigInt("166")
		const level3lro0Bty = BigInt("171")
		const level2fGfkec6 = BigInt("121")
		const level1Ctpellx = BigInt("118")
		const amountO3NfCVx = BigInt("1408")
		await contracthQcxvE9.freezeAndTransfer.call(recipientq1xDlhi, amounteeiL6GN, _periodNOtvqK, {from: "0x0000000000000000000000000000000000000001"});
		await contracthQcxvE9.setRefBonus.call(level1Ctpellx, level2fGfkec6, level3lro0Bty, level4hO1Q44, level5oEoCINV, {from: accounts[5]});
		const nullEFsbUcb = await contracthQcxvE9.getEstimation.call(amountO3NfCVx, {from: accounts[0]});
	});

	it('test for Reseller', async () => {
		const USDTAddrzv8y0Vn = accounts[3]
		const FOSTERAddrVcNruyv = accounts[3]
		const initialRatesrUkTwY = BigInt("89")
		const initialPeriodiawjhnR = BigInt("1835")
		const initialOwnereP4mGeO = accounts[1]
		const contractj9xPnl2 = await Reseller.new(USDTAddrzv8y0Vn, FOSTERAddrVcNruyv, initialRatesrUkTwY, initialPeriodiawjhnR, initialOwnereP4mGeO, {from: accounts[2]});
		const newBoss3tHxLUFb = accounts[0]
		const newBoss2v3ZC1W1 = accounts[3]
		const accountYm58kxD = accounts[1]
		const amountSQUQ5Ks = BigInt("838")
		await contractj9xPnl2.deposeBoss3.call(newBoss3tHxLUFb, {from: accounts[3]});
		await contractj9xPnl2.deposeBoss2.call(newBoss2v3ZC1W1, {from: accounts[3]});
		const nullmQr6MA = await contractj9xPnl2.allowanceFOSTER.call(accountYm58kxD, {from: "0x0000000000000000000000000000000000000001"});
		const nullDxhDSTd = await contractj9xPnl2.getEstimation.call(amountSQUQ5Ks, {from: accounts[4]});

		await expect(contractj9xPnl2.deposeBoss3.call(newBoss3tHxLUFb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrnHV5iZf = accounts[3]
		const FOSTERAddribB5S9s = accounts[0]
		const initialRateBbTSpYZ = BigInt("96")
		const initialPeriodAkCEyX = BigInt("1042")
		const initialOwnercrsyAHL = accounts[1]
		const contractqxuhiHm = await Reseller.new(USDTAddrnHV5iZf, FOSTERAddribB5S9s, initialRateBbTSpYZ, initialPeriodAkCEyX, initialOwnercrsyAHL, {from: accounts[5]});
		const accountCNtsOiz = accounts[4]
		const newFeeFiGaI8 = BigInt("167")
		const newRateo4tiEXn = BigInt("974")
		const newBoss4ITA62UJ = accounts[2]
		const nullvF6N6kH = await contractqxuhiHm.balanceUSDT.call(accountCNtsOiz, {from: accounts[3]});
		await contractqxuhiHm.setFee.call(newFeeFiGaI8, {from: accounts[4]});
		await contractqxuhiHm.setRate.call(newRateo4tiEXn, {from: accounts[4]});
		await contractqxuhiHm.switchState.call({from: accounts[1]});
		await contractqxuhiHm.deposeBoss4.call(newBoss4ITA62UJ, {from: accounts[1]});

		await expect(contractqxuhiHm.balanceUSDT.call(accountCNtsOiz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrB5LCeW6 = accounts[1]
		const FOSTERAddr5df9Eg = "0x0000000000000000000000000000000000000001"
		const initialRateJp49YHT = BigInt("372")
		const initialPeriodE43EQGG = BigInt("467")
		const initialOwner8wzFrd = accounts[0]
		const contractdBd3cYL = await Reseller.new(USDTAddrB5LCeW6, FOSTERAddr5df9Eg, initialRateJp49YHT, initialPeriodE43EQGG, initialOwner8wzFrd, {from: accounts[2]});
		const accountNtpiTTo = accounts[4]
		const newPeriodXf9faOj = BigInt("1183")
		const comment5C97KN = "scSUBcMrMMrSCHqSd5IErjqIgYx8tWpdS2nszGpp2pMsqwtDAHHuvAQ8iq2QWM6s"
		const _ref5IDQqM3p = accounts[2]
		const _ref4SXRzGL7 = accounts[2]
		const _ref3WEIbNGX = accounts[2]
		const _ref2wfrD3Li = accounts[0]
		const _ref1ViTeN9 = accounts[4]
		const valueeC6xrmg = BigInt("428")
		await contractdBd3cYL.switchState.call({from: accounts[4]});
		const nulllPt24fU = await contractdBd3cYL.allowanceFOSTER.call(accountNtpiTTo, {from: accounts[1]});
		await contractdBd3cYL.setPeriod.call(newPeriodXf9faOj, {from: accounts[3]});
		await contractdBd3cYL.purchase.call(valueeC6xrmg, _ref1ViTeN9, _ref2wfrD3Li, _ref3WEIbNGX, _ref4SXRzGL7, _ref5IDQqM3p, comment5C97KN, {from: accounts[1]});

		await expect(contractdBd3cYL.switchState.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrfPpUgR4 = accounts[0]
		const FOSTERAddrzDOL4s = accounts[1]
		const initialRateSMpA5V6 = BigInt("1458")
		const initialPeriodvmWcjET = BigInt("700")
		const initialOwnerFSRNaI = accounts[3]
		const contractZHdzvg5 = await Reseller.new(USDTAddrfPpUgR4, FOSTERAddrzDOL4s, initialRateSMpA5V6, initialPeriodvmWcjET, initialOwnerFSRNaI, {from: accounts[1]});
		const commentjHp2ejR = "Lwoz9rGZbqoNWbJgjKKX7vkH7vqTWSqgSjQy2yfNkKh2RfCPF"
		const _ref5ejt7dNz = accounts[3]
		const _ref4CaWfwIY = accounts[2]
		const _ref3J2msgIK = accounts[1]
		const _ref2FdGsTU5 = accounts[0]
		const _ref1D5hPbM0 = accounts[3]
		const valueA6v4fql = BigInt("840")
		const accountHUuV6TX = accounts[5]
		const newRate3myxlQ = BigInt("1501")
		const newBoss3XyrDEO = accounts[0]
		await contractZHdzvg5.purchase.call(valueA6v4fql, _ref1D5hPbM0, _ref2FdGsTU5, _ref3J2msgIK, _ref4CaWfwIY, _ref5ejt7dNz, commentjHp2ejR, {from: accounts[0]});
		const nullkGKBg3L = await contractZHdzvg5.allowanceFOSTER.call(accountHUuV6TX, {from: accounts[0]});
		await contractZHdzvg5.setRate.call(newRate3myxlQ, {from: accounts[3]});
		await contractZHdzvg5.deposeBoss3.call(newBoss3XyrDEO, {from: accounts[1]});

		await expect(contractZHdzvg5.purchase.call(valueA6v4fql, _ref1D5hPbM0, _ref2FdGsTU5, _ref3J2msgIK, _ref4CaWfwIY, _ref5ejt7dNz, commentjHp2ejR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrvC2fdAG = accounts[2]
		const FOSTERAddrolTFEWD = accounts[1]
		const initialRateC6AzJRC = BigInt("900")
		const initialPeriodlaqEqKV = BigInt("1644")
		const initialOwnerjHfrcxU = accounts[0]
		const contractYDxsvFX = await Reseller.new(USDTAddrvC2fdAG, FOSTERAddrolTFEWD, initialRateC6AzJRC, initialPeriodlaqEqKV, initialOwnerjHfrcxU, {from: accounts[4]});
		const newBoss1c1HhB7T = accounts[0]
		const account2kej5r = accounts[3]
		const valueIosj5vD = BigInt("166")
		const recipientmvE3fow = accounts[4]
		const ERC20TokencIKEB0H = accounts[3]
		const newBoss2g0756Q9 = accounts[1]
		await contractYDxsvFX.deposeBoss1.call(newBoss1c1HhB7T, {from: accounts[1]});
		const nullrtd0y5t = await contractYDxsvFX.balanceFOSTER.call(account2kej5r, {from: accounts[2]});
		await contractYDxsvFX.withdrawERC20.call(ERC20TokencIKEB0H, recipientmvE3fow, valueIosj5vD, {from: accounts[1]});
		await contractYDxsvFX.deposeBoss2.call(newBoss2g0756Q9, {from: accounts[4]});
		await contractYDxsvFX.switchState.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(contractYDxsvFX.deposeBoss1.call(newBoss1c1HhB7T, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrypdtDS4 = accounts[4]
		const FOSTERAddrECf7ZJP = accounts[5]
		const initialRatelMalO7q = BigInt("1652")
		const initialPeriodM7r2MVp = BigInt("969")
		const initialOwnerEIoVLcb = accounts[1]
		const contractPLObRLI = await Reseller.new(USDTAddrypdtDS4, FOSTERAddrECf7ZJP, initialRatelMalO7q, initialPeriodM7r2MVp, initialOwnerEIoVLcb, {from: accounts[4]});
		const amountQjWXwh = BigInt("18")
		const newPeriodVTKnXXh = BigInt("1600")
		const newBoss3XFY380Q = accounts[0]
		const newBoss1Yy3uscY = accounts[4]
		const newBoss1g2JBUH0 = accounts[0]
		const nullIYKR1rg = await contractPLObRLI.getEstimation.call(amountQjWXwh, {from: accounts[0]});
		await contractPLObRLI.setPeriod.call(newPeriodVTKnXXh, {from: accounts[1]});
		await contractPLObRLI.deposeBoss3.call(newBoss3XFY380Q, {from: accounts[0]});
		await contractPLObRLI.switchState.call({from: accounts[4]});
		await contractPLObRLI.deposeBoss1.call(newBoss1Yy3uscY, {from: accounts[2]});
		await contractPLObRLI.deposeBoss1.call(newBoss1g2JBUH0, {from: accounts[3]});

		assert.equal(nullIYKR1rg, 29736)
		await expect(contractPLObRLI.setPeriod.call(newPeriodVTKnXXh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrpeByGrs = accounts[0]
		const FOSTERAddrOOtL3qV = accounts[2]
		const initialRatezeAjB6K = BigInt("781")
		const initialPeriodCrWf22Z = BigInt("1955")
		const initialOwnerBqqypSA = accounts[0]
		const contractgoMVQCl = await Reseller.new(USDTAddrpeByGrs, FOSTERAddrOOtL3qV, initialRatezeAjB6K, initialPeriodCrWf22Z, initialOwnerBqqypSA, {from: accounts[0]});
		const accountpC4EXQz = accounts[2]
		const _periodGt5Llu = BigInt("1496")
		const amountgVB1Bna = BigInt("1364")
		const recipientKBBpKpu = accounts[1]
		const nullaop3ccn = await contractgoMVQCl.allowanceFOSTER.call(accountpC4EXQz, {from: accounts[0]});
		await contractgoMVQCl.freezeAndTransfer.call(recipientKBBpKpu, amountgVB1Bna, _periodGt5Llu, {from: accounts[3]});

		await expect(contractgoMVQCl.allowanceFOSTER.call(accountpC4EXQz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddry0Zw9bJ = accounts[3]
		const FOSTERAddrZkgud0Z = accounts[0]
		const initialRateNnaugvu = BigInt("111")
		const initialPeriodaVRazyq = BigInt("1068")
		const initialOwnerEkmtSRv = accounts[1]
		const contractsHPU8d = await Reseller.new(USDTAddry0Zw9bJ, FOSTERAddrZkgud0Z, initialRateNnaugvu, initialPeriodaVRazyq, initialOwnerEkmtSRv, {from: accounts[3]});
		const newRatekGBbn9w = BigInt("1397")
		const newRateARduGy = BigInt("348")
		const newBoss3Rg0ntWj = accounts[4]
		const newBoss2dhFq7W5 = accounts[3]
		const account7HUGni = accounts[3]
		await contractsHPU8d.setRate.call(newRatekGBbn9w, {from: accounts[0]});
		await contractsHPU8d.setRate.call(newRateARduGy, {from: accounts[4]});
		await contractsHPU8d.deposeBoss3.call(newBoss3Rg0ntWj, {from: accounts[2]});
		await contractsHPU8d.deposeBoss2.call(newBoss2dhFq7W5, {from: accounts[2]});
		const nullrOLwQZI = await contractsHPU8d.balanceFOSTER.call(account7HUGni, {from: accounts[5]});

		await expect(contractsHPU8d.setRate.call(newRatekGBbn9w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbCD0Lrt = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrrDC0Hmg = accounts[2]
		const initialRateWQrA5hS = BigInt("1164")
		const initialPeriodkcaH83T = BigInt("1058")
		const initialOwnerfvcg9eR = accounts[2]
		const contractVxDiBAr = await Reseller.new(USDTAddrbCD0Lrt, FOSTERAddrrDC0Hmg, initialRateWQrA5hS, initialPeriodkcaH83T, initialOwnerfvcg9eR, {from: accounts[0]});
		const valueHPQZP78 = BigInt("1004")
		const commentXaS1IfC = "ZPyF5g20kj"
		const _ref5xcHJJR = accounts[3]
		const _ref4DU1JuQ2 = accounts[0]
		const _ref3af5dND7 = accounts[3]
		const _ref2TgBMk3S = accounts[2]
		const _ref1ratpfW9 = accounts[0]
		const valuevZloEqb = BigInt("186")
		const newBoss3l13kjum = accounts[3]
		const newRatevskAQ77 = BigInt("1890")
		const newBoss147oFUE = accounts[0]
		const newBoss4ZB9rkbM = accounts[4]
		await contractVxDiBAr.withdraw.call(valueHPQZP78, {from: accounts[5]});
		await contractVxDiBAr.purchase.call(valuevZloEqb, _ref1ratpfW9, _ref2TgBMk3S, _ref3af5dND7, _ref4DU1JuQ2, _ref5xcHJJR, commentXaS1IfC, {from: accounts[2]});
		await contractVxDiBAr.deposeBoss3.call(newBoss3l13kjum, {from: accounts[0]});
		await contractVxDiBAr.setRate.call(newRatevskAQ77, {from: accounts[1]});
		await contractVxDiBAr.deposeBoss1.call(newBoss147oFUE, {from: accounts[5]});
		await contractVxDiBAr.deposeBoss4.call(newBoss4ZB9rkbM, {from: accounts[1]});

		await expect(contractVxDiBAr.withdraw.call(valueHPQZP78, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrlTUpV6 = accounts[4]
		const FOSTERAddrhv3nXP7 = accounts[5]
		const initialRatenF82ZZV = BigInt("1254")
		const initialPeriodTnWJcNI = BigInt("483")
		const initialOwnerPud13N = accounts[5]
		const contractUzauCGe = await Reseller.new(USDTAddrlTUpV6, FOSTERAddrhv3nXP7, initialRatenF82ZZV, initialPeriodTnWJcNI, initialOwnerPud13N, {from: accounts[1]});
		const newFeeMLQuyco = BigInt("206")
		const newRateCGr0R8 = BigInt("1126")
		const newMinimumnIMmYrm = BigInt("1373")
		const valueFGr942J = BigInt("1743")
		const newBoss3KmRNwIS = "0x0000000000000000000000000000000000000001"
		const level5yHdEnD0 = BigInt("12")
		const level4dg0lhV2 = BigInt("79")
		const level3AstCUBZ = BigInt("83")
		const level2D8Sh71X = BigInt("245")
		const level1mznm7lR = BigInt("230")
		await contractUzauCGe.setFee.call(newFeeMLQuyco, {from: "0x0000000000000000000000000000000000000001"});
		await contractUzauCGe.setRate.call(newRateCGr0R8, {from: accounts[5]});
		await contractUzauCGe.setMinimum.call(newMinimumnIMmYrm, {from: accounts[2]});
		await contractUzauCGe.withdraw.call(valueFGr942J, {from: accounts[4]});
		await contractUzauCGe.deposeBoss3.call(newBoss3KmRNwIS, {from: "0x0000000000000000000000000000000000000001"});
		await contractUzauCGe.setRefBonus.call(level1mznm7lR, level2D8Sh71X, level3AstCUBZ, level4dg0lhV2, level5yHdEnD0, {from: accounts[2]});

		await expect(contractUzauCGe.setFee.call(newFeeMLQuyco, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrmDhzaDm = accounts[3]
		const FOSTERAddrrEUpHbt = accounts[0]
		const initialRatehIBDIDA = BigInt("25")
		const initialPeriodwNcoDJ4 = BigInt("207")
		const initialOwnerGVrvQIj = accounts[1]
		const contractyMMkP1j = await Reseller.new(USDTAddrmDhzaDm, FOSTERAddrrEUpHbt, initialRatehIBDIDA, initialPeriodwNcoDJ4, initialOwnerGVrvQIj, {from: accounts[4]});
		const accountavqWFoK = accounts[3]
		const valueb2KNIfz = BigInt("1643")
		const newMinimumEEP3DGk = BigInt("1141")
		const nullSqlu3ZC = await contractyMMkP1j.allowanceUSDT.call(accountavqWFoK, {from: accounts[0]});
		await contractyMMkP1j.withdraw.call(valueb2KNIfz, {from: accounts[0]});
		await contractyMMkP1j.setMinimum.call(newMinimumEEP3DGk, {from: accounts[2]});

		await expect(contractyMMkP1j.allowanceUSDT.call(accountavqWFoK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrMjSnS8z = accounts[3]
		const FOSTERAddrwQ3zTt5 = accounts[0]
		const initialRatekJ1HGLX = BigInt("25")
		const initialPeriodoYRS0OV = BigInt("207")
		const initialOwnerDEFp3p3 = accounts[1]
		const contractCVLZX9g = await Reseller.new(USDTAddrMjSnS8z, FOSTERAddrwQ3zTt5, initialRatekJ1HGLX, initialPeriodoYRS0OV, initialOwnerDEFp3p3, {from: accounts[4]});
		const accountIQ3sxTL = "0x0000000000000000000000000000000000000001"
		const valueJCHZj0e = BigInt("1643")
		const valuekmwoKR = BigInt("1627")
		const recipientYiV6vT7 = "0x0000000000000000000000000000000000000001"
		const ERC20TokenlCWVaIv = accounts[1]
		const newMinimumdnKYBSA = BigInt("1141")
		const nullgjrmQbd = await contractCVLZX9g.balanceFOSTER.call(accountIQ3sxTL, {from: accounts[3]});
		await contractCVLZX9g.withdraw.call(valueJCHZj0e, {from: accounts[0]});
		await contractCVLZX9g.withdrawERC20.call(ERC20TokenlCWVaIv, recipientYiV6vT7, valuekmwoKR, {from: accounts[3]});
		await contractCVLZX9g.setMinimum.call(newMinimumdnKYBSA, {from: accounts[2]});

		await expect(contractCVLZX9g.balanceFOSTER.call(accountIQ3sxTL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVxnfwP = accounts[3]
		const FOSTERAddr8ryOLx = accounts[0]
		const initialRateaZYfZ2o = BigInt("25")
		const initialPeriodwHuxPNk = BigInt("207")
		const initialOwnerNUXyY0h = accounts[1]
		const contractiVnhUpv = await Reseller.new(USDTAddrVxnfwP, FOSTERAddr8ryOLx, initialRateaZYfZ2o, initialPeriodwHuxPNk, initialOwnerNUXyY0h, {from: accounts[4]});
		const newBoss4hHDxxnI = accounts[1]
		const valuelBj4lsH = BigInt("1656")
		const newBoss3feoHZ0t = accounts[3]
		await contractiVnhUpv.deposeBoss4.call(newBoss4hHDxxnI, {from: accounts[2]});
		await contractiVnhUpv.switchState.call({from: accounts[4]});
		await contractiVnhUpv.withdraw.call(valuelBj4lsH, {from: accounts[0]});
		await contractiVnhUpv.deposeBoss3.call(newBoss3feoHZ0t, {from: accounts[0]});

		await expect(contractiVnhUpv.deposeBoss4.call(newBoss4hHDxxnI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddro72FZHb = accounts[4]
		const FOSTERAddrwLhaCoJ = accounts[4]
		const initialRateJriQkMX = BigInt("1625")
		const initialPeriodTLc9V2W = BigInt("93")
		const initialOwnersqWlcre = accounts[1]
		const contractodIlhN = await Reseller.new(USDTAddro72FZHb, FOSTERAddrwLhaCoJ, initialRateJriQkMX, initialPeriodTLc9V2W, initialOwnersqWlcre, {from: accounts[2]});
		const newBoss2QnNPDtj = accounts[1]
		const newBoss3r6oczVo = accounts[1]
		const _periodeD4HV2D = BigInt("591")
		const amountjtjJ4ot = BigInt("93")
		const recipientECA3TsZ = accounts[0]
		await contractodIlhN.deposeBoss2.call(newBoss2QnNPDtj, {from: accounts[4]});
		await contractodIlhN.deposeBoss3.call(newBoss3r6oczVo, {from: accounts[2]});
		await contractodIlhN.freezeAndTransfer.call(recipientECA3TsZ, amountjtjJ4ot, _periodeD4HV2D, {from: accounts[3]});

		await expect(contractodIlhN.deposeBoss2.call(newBoss2QnNPDtj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrUkrp1Ss = accounts[4]
		const FOSTERAddraoHHEr3 = accounts[1]
		const initialRategeHYCzD = BigInt("332")
		const initialPeriodvbwSMMj = BigInt("1445")
		const initialOwnerBI4XqY = accounts[2]
		const contractq6RL3Ht = await Reseller.new(USDTAddrUkrp1Ss, FOSTERAddraoHHEr3, initialRategeHYCzD, initialPeriodvbwSMMj, initialOwnerBI4XqY, {from: accounts[2]});
		const newMinimumsOzACH9 = BigInt("23")
		const accountuM3WTVf = "0x0000000000000000000000000000000000000001"
		const newRateYP6M18w = BigInt("1616")
		const amount6UouX8 = BigInt("1748")
		await contractq6RL3Ht.setMinimum.call(newMinimumsOzACH9, {from: accounts[1]});
		const nullvDKcSu = await contractq6RL3Ht.balanceUSDT.call(accountuM3WTVf, {from: accounts[5]});
		await contractq6RL3Ht.setRate.call(newRateYP6M18w, {from: accounts[0]});
		const nullo4hUQdP = await contractq6RL3Ht.getEstimation.call(amount6UouX8, {from: accounts[1]});

		await expect(contractq6RL3Ht.setMinimum.call(newMinimumsOzACH9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrFx94e0C = accounts[3]
		const FOSTERAddrIlPxImn = accounts[0]
		const initialRateYIgdufw = BigInt("25")
		const initialPeriodOgXKhSR = BigInt("207")
		const initialOwnerFPUhWJc = accounts[1]
		const contractMEjGSc5 = await Reseller.new(USDTAddrFx94e0C, FOSTERAddrIlPxImn, initialRateYIgdufw, initialPeriodOgXKhSR, initialOwnerFPUhWJc, {from: accounts[4]});
		const newBoss4lrX4AaG = accounts[4]
		const valueN5GVPDX = BigInt("1655")
		await contractMEjGSc5.deposeBoss4.call(newBoss4lrX4AaG, {from: accounts[1]});
		await contractMEjGSc5.withdraw.call(valueN5GVPDX, {from: accounts[0]});

		await expect(contractMEjGSc5.deposeBoss4.call(newBoss4lrX4AaG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrJdqEt6 = accounts[3]
		const FOSTERAddrCy5STpS = accounts[4]
		const initialRate03rSgY = BigInt("1133")
		const initialPeriodzCewOa = BigInt("1382")
		const initialOwnersWdYR5D = accounts[2]
		const contractyXieTSx = await Reseller.new(USDTAddrJdqEt6, FOSTERAddrCy5STpS, initialRate03rSgY, initialPeriodzCewOa, initialOwnersWdYR5D, {from: accounts[2]});
		const newFeeLrTwVgn = BigInt("130")
		const _periodgHREZs5 = BigInt("667")
		const amount3R27Xd = BigInt("814")
		const recipientkTWxl0c = accounts[5]
		const valuegvcqPdx = BigInt("146")
		await contractyXieTSx.setFee.call(newFeeLrTwVgn, {from: accounts[2]});
		await contractyXieTSx.freezeAndTransfer.call(recipientkTWxl0c, amount3R27Xd, _periodgHREZs5, {from: accounts[4]});
		await contractyXieTSx.withdraw.call(valuegvcqPdx, {from: accounts[1]});

		await expect(contractyXieTSx.setFee.call(newFeeLrTwVgn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrPaqYWg = accounts[3]
		const FOSTERAddrORfTW0P = accounts[0]
		const initialRateRQMpfH = BigInt("25")
		const initialPeriodom2rx5Y = BigInt("207")
		const initialOwneroYDKMJd = accounts[1]
		const contractv8v7geB = await Reseller.new(USDTAddrPaqYWg, FOSTERAddrORfTW0P, initialRateRQMpfH, initialPeriodom2rx5Y, initialOwneroYDKMJd, {from: accounts[4]});
		const valuej6ScAb7 = BigInt("863")
		const recipienteg4VSF = accounts[1]
		const ERC20TokenBWzW0DZ = accounts[0]
		const valuemayRya2 = BigInt("1655")
		await contractv8v7geB.withdrawERC20.call(ERC20TokenBWzW0DZ, recipienteg4VSF, valuej6ScAb7, {from: accounts[5]});
		await contractv8v7geB.withdraw.call(valuemayRya2, {from: accounts[0]});

		await expect(contractv8v7geB.withdrawERC20.call(ERC20TokenBWzW0DZ, recipienteg4VSF, valuej6ScAb7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdhrSW5j = accounts[3]
		const FOSTERAddrJT4Xn0F = accounts[0]
		const initialRateeLS7NOx = BigInt("25")
		const initialPeriodSObeyKs = BigInt("207")
		const initialOwnerCjZr4lk = accounts[1]
		const contractoSm4ln9 = await Reseller.new(USDTAddrdhrSW5j, FOSTERAddrJT4Xn0F, initialRateeLS7NOx, initialPeriodSObeyKs, initialOwnerCjZr4lk, {from: accounts[4]});
		const valuefEP2JuI = BigInt("1670")
		await contractoSm4ln9.switchState.call({from: accounts[1]});
		await contractoSm4ln9.withdraw.call(valuefEP2JuI, {from: accounts[0]});

		await expect(contractoSm4ln9.switchState.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrWmrHB6 = accounts[0]
		const FOSTERAddrAQP8tRy = accounts[2]
		const initialRatePs0WPY9 = BigInt("115")
		const initialPeriodGFEI3A9 = BigInt("1112")
		const initialOwnernyGSpDS = accounts[3]
		const contractrV611QV = await Reseller.new(USDTAddrWmrHB6, FOSTERAddrAQP8tRy, initialRatePs0WPY9, initialPeriodGFEI3A9, initialOwnernyGSpDS, {from: accounts[4]});
		const newBoss3So0XoN = accounts[2]
		const newBoss1nvQxnMg = accounts[2]
		await contractrV611QV.deposeBoss3.call(newBoss3So0XoN, {from: accounts[3]});
		await contractrV611QV.deposeBoss1.call(newBoss1nvQxnMg, {from: accounts[4]});

		await expect(contractrV611QV.deposeBoss3.call(newBoss3So0XoN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrSLKJsYM = accounts[3]
		const FOSTERAddrxLCxQoi = accounts[0]
		const initialRateH81Ytlk = BigInt("25")
		const initialPeriodpr6EHRy = BigInt("207")
		const initialOwnerC0C36tK = accounts[1]
		const contractWq3CcoV = await Reseller.new(USDTAddrSLKJsYM, FOSTERAddrxLCxQoi, initialRateH81Ytlk, initialPeriodpr6EHRy, initialOwnerC0C36tK, {from: accounts[4]});
		const _ref5hiHsj4H = accounts[0]
		const _ref4nwZVR5Z = accounts[1]
		const _ref3LqKVXe3 = accounts[3]
		const _ref2I3F3Ctz = accounts[1]
		const _ref1oNFVm1l = "0x0000000000000000000000000000000000000001"
		const valueiLEaVE = BigInt("198")
		const accountGlo80XT = accounts[3]
		const valueoyjFxj = BigInt("1658")
		await contractWq3CcoV.buy.call(valueiLEaVE, _ref1oNFVm1l, _ref2I3F3Ctz, _ref3LqKVXe3, _ref4nwZVR5Z, _ref5hiHsj4H, {from: accounts[0]});
		const nullBRcREi0 = await contractWq3CcoV.balanceFOSTER.call(accountGlo80XT, {from: accounts[4]});
		await contractWq3CcoV.withdraw.call(valueoyjFxj, {from: accounts[0]});

		await expect(contractWq3CcoV.buy.call(valueiLEaVE, _ref1oNFVm1l, _ref2I3F3Ctz, _ref3LqKVXe3, _ref4nwZVR5Z, _ref5hiHsj4H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrIPdd2qa = accounts[3]
		const FOSTERAddriUN7s7x = accounts[0]
		const initialRateij6Xdrn = BigInt("25")
		const initialPeriodlFxzWV5 = BigInt("207")
		const initialOwnerFBcU7Px = accounts[1]
		const contractWTr4KVK = await Reseller.new(USDTAddrIPdd2qa, FOSTERAddriUN7s7x, initialRateij6Xdrn, initialPeriodlFxzWV5, initialOwnerFBcU7Px, {from: accounts[4]});
		const level5HSJx4O = BigInt("55")
		const level4UN8MDea = BigInt("131")
		const level3OJYkuNQ = BigInt("176")
		const level2WRzVpvx = BigInt("180")
		const level1rKEUETc = BigInt("202")
		const valueJGU46E1 = BigInt("1643")
		await contractWTr4KVK.setRefBonus.call(level1rKEUETc, level2WRzVpvx, level3OJYkuNQ, level4UN8MDea, level5HSJx4O, {from: accounts[2]});
		await contractWTr4KVK.withdraw.call(valueJGU46E1, {from: accounts[0]});

		await expect(contractWTr4KVK.setRefBonus.call(level1rKEUETc, level2WRzVpvx, level3OJYkuNQ, level4UN8MDea, level5HSJx4O, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrlIYpbwv = accounts[3]
		const FOSTERAddrV5RHnmU = accounts[0]
		const initialRateaRc7l6t = BigInt("25")
		const initialPeriodtxGelgb = BigInt("207")
		const initialOwnermZPYJVX = accounts[1]
		const contractKkMJcUy = await Reseller.new(USDTAddrlIYpbwv, FOSTERAddrV5RHnmU, initialRateaRc7l6t, initialPeriodtxGelgb, initialOwnermZPYJVX, {from: accounts[4]});
		const commentZdbsBkD = "DooCSPMTnFfmy9DxzR"
		const _ref5AvL3Jic = accounts[2]
		const _ref4LjSLJqo = accounts[4]
		const _ref3VaCMjYC = "0x0000000000000000000000000000000000000001"
		const _ref2h0zEZJd = accounts[1]
		const _ref1mMyuLAr = accounts[4]
		const valuejJCitnV = BigInt("163")
		const value3ZlXUE = BigInt("1839")
		const newBoss2izZXJNm = accounts[4]
		await contractKkMJcUy.purchase.call(valuejJCitnV, _ref1mMyuLAr, _ref2h0zEZJd, _ref3VaCMjYC, _ref4LjSLJqo, _ref5AvL3Jic, commentZdbsBkD, {from: accounts[1]});
		await contractKkMJcUy.withdraw.call(value3ZlXUE, {from: accounts[0]});
		await contractKkMJcUy.deposeBoss2.call(newBoss2izZXJNm, {from: accounts[0]});

		await expect(contractKkMJcUy.purchase.call(valuejJCitnV, _ref1mMyuLAr, _ref2h0zEZJd, _ref3VaCMjYC, _ref4LjSLJqo, _ref5AvL3Jic, commentZdbsBkD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrEGnMMZp = accounts[3]
		const FOSTERAddrSbhupLa = accounts[0]
		const initialRatebTSfRv8 = BigInt("25")
		const initialPeriodGRCEb2R = BigInt("207")
		const initialOwnerI3lxBdP = accounts[1]
		const contractMrBwP2 = await Reseller.new(USDTAddrEGnMMZp, FOSTERAddrSbhupLa, initialRatebTSfRv8, initialPeriodGRCEb2R, initialOwnerI3lxBdP, {from: accounts[4]});
		const newMinimumvHJUrt4 = BigInt("463")
		const newBoss48mRcsR = accounts[4]
		const valuesnirww = BigInt("280")
		await contractMrBwP2.setMinimum.call(newMinimumvHJUrt4, {from: accounts[1]});
		await contractMrBwP2.deposeBoss4.call(newBoss48mRcsR, {from: accounts[3]});
		await contractMrBwP2.withdraw.call(valuesnirww, {from: accounts[0]});

		await expect(contractMrBwP2.setMinimum.call(newMinimumvHJUrt4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrrYqOXR = accounts[3]
		const FOSTERAddro0v5obD = accounts[0]
		const initialRatehlhIPHV = BigInt("25")
		const initialPerioddLYiojv = BigInt("207")
		const initialOwnergs8Hdas = accounts[1]
		const contractbQr3EiU = await Reseller.new(USDTAddrrYqOXR, FOSTERAddro0v5obD, initialRatehlhIPHV, initialPerioddLYiojv, initialOwnergs8Hdas, {from: accounts[4]});
		const newRatedc49bwO = BigInt("419")
		const valuelVVwjbH = BigInt("1624")
		await contractbQr3EiU.setRate.call(newRatedc49bwO, {from: accounts[1]});
		await contractbQr3EiU.withdraw.call(valuelVVwjbH, {from: accounts[0]});

		await expect(contractbQr3EiU.setRate.call(newRatedc49bwO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})