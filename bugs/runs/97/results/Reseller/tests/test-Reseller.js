const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrS94Gac3 = accounts[2]
		const FOSTERAddrSnWG93T = accounts[2]
		const initialRateXER1rp = BigInt("1817")
		const initialPeriodS1P5sdH = BigInt("560")
		const initialOwnery3v7SMF = accounts[0]
		const contractKLcwrga = await Reseller.new(USDTAddrS94Gac3, FOSTERAddrSnWG93T, initialRateXER1rp, initialPeriodS1P5sdH, initialOwnery3v7SMF, {from: accounts[0]});
		const _periodEe9j34U = BigInt("1085")
		const amountfaLfOhN = BigInt("1861")
		const recipientpnbr9G = accounts[2]
		const commentAnodKiB = "brH4jlXP2EbV68RBN4j7f1rPAjbbDz6M18YXKLkt"
		const _ref56Nj0td = accounts[0]
		const _ref4SNcQHBO = accounts[3]
		const _ref3wqVAPPz = accounts[2]
		const _ref2M2UBrOW = accounts[0]
		const _ref1Fm9907f = "0x0000000000000000000000000000000000000001"
		const valueoEOXXSK = BigInt("1055")
		const valuexkIixq = BigInt("1469")
		const recipientxlqUTfW = accounts[0]
		const ERC20TokenvvcufbT = accounts[5]
		const newPeriodJq84w8K = BigInt("1622")
		await contractKLcwrga.freezeAndTransfer.call(recipientpnbr9G, amountfaLfOhN, _periodEe9j34U, {from: accounts[0]});
		await contractKLcwrga.purchase.call(valueoEOXXSK, _ref1Fm9907f, _ref2M2UBrOW, _ref3wqVAPPz, _ref4SNcQHBO, _ref56Nj0td, commentAnodKiB, {from: accounts[0]});
		await contractKLcwrga.withdrawERC20.call(ERC20TokenvvcufbT, recipientxlqUTfW, valuexkIixq, {from: accounts[2]});
		await contractKLcwrga.setPeriod.call(newPeriodJq84w8K, {from: accounts[5]});

		await expect(contractKLcwrga.freezeAndTransfer.call(recipientpnbr9G, amountfaLfOhN, _periodEe9j34U, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrlzrU4v4 = accounts[1]
		const FOSTERAddrZ0ZyzvJ = accounts[0]
		const initialRatebhdOjJc = BigInt("1408")
		const initialPeriodpqoHqwH = BigInt("519")
		const initialOwnerHKlcu3h = accounts[2]
		const contractzCxebIb = await Reseller.new(USDTAddrlzrU4v4, FOSTERAddrZ0ZyzvJ, initialRatebhdOjJc, initialPeriodpqoHqwH, initialOwnerHKlcu3h, {from: accounts[0]});
		const newBoss2ZLN0tU0 = accounts[4]
		const accountlhpucpu = accounts[4]
		const newFeegr3JjIG = BigInt("211")
		const newFeeTIoG2uQ = BigInt("250")
		const newRateYFRlSNI = BigInt("182")
		await contractzCxebIb.deposeBoss2.call(newBoss2ZLN0tU0, {from: accounts[2]});
		const nullRwLaae = await contractzCxebIb.allowanceUSDT.call(accountlhpucpu, {from: "0x0000000000000000000000000000000000000001"});
		await contractzCxebIb.setFee.call(newFeegr3JjIG, {from: accounts[1]});
		await contractzCxebIb.setFee.call(newFeeTIoG2uQ, {from: accounts[2]});
		await contractzCxebIb.setRate.call(newRateYFRlSNI, {from: accounts[3]});

		await expect(contractzCxebIb.deposeBoss2.call(newBoss2ZLN0tU0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrHqNTfqf = accounts[1]
		const FOSTERAddrVJnYtx5 = accounts[0]
		const initialRateImZI9mi = BigInt("320")
		const initialPeriodT128XtB = BigInt("1630")
		const initialOwnerT6FeU6G = accounts[1]
		const contractrP7UNGm = await Reseller.new(USDTAddrHqNTfqf, FOSTERAddrVJnYtx5, initialRateImZI9mi, initialPeriodT128XtB, initialOwnerT6FeU6G, {from: "0x0000000000000000000000000000000000000001"});
		const comment8XK7Rh = "b4XhnrTiPFYbWuNm89lAJM4RNkVjAFmfYUf09BD3f4XkQmh3x6rs0i5stEimWBsalgtpf0mf4rq"
		const _ref5EfDS2x1 = "0x0000000000000000000000000000000000000001"
		const _ref45XP4ux = accounts[2]
		const _ref3JpQ0W0P = accounts[2]
		const _ref2XUUkrvx = accounts[3]
		const _ref1GW79pkO = accounts[0]
		const valuehMFQirz = BigInt("256")
		const newRateOwzSPw = BigInt("1323")
		const valuemzBMUBu = BigInt("1514")
		const level5URZm0wx = BigInt("112")
		const level4jpucA56 = BigInt("100")
		const level3WW5NjL = BigInt("130")
		const level2xbLbkFl = BigInt("131")
		const level1GuFqeEO = BigInt("243")
		const _ref5BSzTGHv = accounts[1]
		const _ref4DgILegh = accounts[2]
		const _ref3mC5d5FL = accounts[3]
		const _ref2kPkbbpw = accounts[2]
		const _ref1gfcEkLF = "0x0000000000000000000000000000000000000001"
		const valueX7mDewJ = BigInt("967")
		await contractrP7UNGm.purchase.call(valuehMFQirz, _ref1GW79pkO, _ref2XUUkrvx, _ref3JpQ0W0P, _ref45XP4ux, _ref5EfDS2x1, comment8XK7Rh, {from: accounts[2]});
		await contractrP7UNGm.setRate.call(newRateOwzSPw, {from: accounts[3]});
		await contractrP7UNGm.withdraw.call(valuemzBMUBu, {from: accounts[1]});
		await contractrP7UNGm.setRefBonus.call(level1GuFqeEO, level2xbLbkFl, level3WW5NjL, level4jpucA56, level5URZm0wx, {from: accounts[0]});
		await contractrP7UNGm.buy.call(valueX7mDewJ, _ref1gfcEkLF, _ref2kPkbbpw, _ref3mC5d5FL, _ref4DgILegh, _ref5BSzTGHv, {from: accounts[4]});
	});

	it('test for Reseller', async () => {
		const USDTAddraeZFKik = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrI4nuQZJ = accounts[0]
		const initialRateqjAvsDA = BigInt("1387")
		const initialPeriodCE00viK = BigInt("133")
		const initialOwneruSPzhjV = accounts[1]
		const contractuHTQ0p = await Reseller.new(USDTAddraeZFKik, FOSTERAddrI4nuQZJ, initialRateqjAvsDA, initialPeriodCE00viK, initialOwneruSPzhjV, {from: accounts[4]});
		const newBoss4XbckX2 = accounts[1]
		const newPeriodc9Ablox = BigInt("372")
		await contractuHTQ0p.deposeBoss4.call(newBoss4XbckX2, {from: "0x0000000000000000000000000000000000000001"});
		await contractuHTQ0p.switchState.call({from: accounts[4]});
		await contractuHTQ0p.setPeriod.call(newPeriodc9Ablox, {from: accounts[1]});

		await expect(contractuHTQ0p.deposeBoss4.call(newBoss4XbckX2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddresBdIWI = accounts[4]
		const FOSTERAddrpfcE0p8 = accounts[5]
		const initialRateaDc23nl = BigInt("337")
		const initialPerioda3T7PCp = BigInt("174")
		const initialOwnerxz2LYh = accounts[4]
		const contractPjfVchd = await Reseller.new(USDTAddresBdIWI, FOSTERAddrpfcE0p8, initialRateaDc23nl, initialPerioda3T7PCp, initialOwnerxz2LYh, {from: accounts[4]});
		const accounttdcfbwZ = accounts[5]
		const amountcyroF6E = BigInt("1651")
		const nullnyEHynK = await contractPjfVchd.allowanceFOSTER.call(accounttdcfbwZ, {from: accounts[1]});
		await contractPjfVchd.switchState.call({from: accounts[4]});
		const nullwqxNeL3 = await contractPjfVchd.getEstimation.call(amountcyroF6E, {from: accounts[2]});

		await expect(contractPjfVchd.allowanceFOSTER.call(accounttdcfbwZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrtfh6Oyf = accounts[3]
		const FOSTERAddrDG6t5Q2 = accounts[0]
		const initialRateVISDPB0 = BigInt("1426")
		const initialPeriodZOcXt3U = BigInt("1011")
		const initialOwnerL98YO6C = accounts[2]
		const contractR56PyfB = await Reseller.new(USDTAddrtfh6Oyf, FOSTERAddrDG6t5Q2, initialRateVISDPB0, initialPeriodZOcXt3U, initialOwnerL98YO6C, {from: accounts[3]});
		const newPeriodBc4RyKl = BigInt("1421")
		const newRaterZPFhvU = BigInt("1419")
		await contractR56PyfB.setPeriod.call(newPeriodBc4RyKl, {from: accounts[4]});
		await contractR56PyfB.setRate.call(newRaterZPFhvU, {from: accounts[2]});

		await expect(contractR56PyfB.setPeriod.call(newPeriodBc4RyKl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrJP6ihX2 = accounts[2]
		const FOSTERAddru94jEle = accounts[4]
		const initialRateftBTC8c = BigInt("1576")
		const initialPeriodtoHJBL8 = BigInt("1185")
		const initialOwnerQbxkrZF = accounts[0]
		const contractBFYXKUZ = await Reseller.new(USDTAddrJP6ihX2, FOSTERAddru94jEle, initialRateftBTC8c, initialPeriodtoHJBL8, initialOwnerQbxkrZF, {from: accounts[3]});
		const valuetjZepLb = BigInt("1621")
		const recipientjKTfJhi = accounts[0]
		const ERC20TokenLZJUVhK = accounts[0]
		const newMinimummWobKnn = BigInt("1127")
		const level5ZiQI1Du = BigInt("233")
		const level4cnnfG2S = BigInt("144")
		const level3oiNbPWP = BigInt("14")
		const level2ZTVya49 = BigInt("23")
		const level1iCgbjUF = BigInt("164")
		const accountc5LP7L5 = accounts[2]
		await contractBFYXKUZ.withdrawERC20.call(ERC20TokenLZJUVhK, recipientjKTfJhi, valuetjZepLb, {from: accounts[4]});
		await contractBFYXKUZ.setMinimum.call(newMinimummWobKnn, {from: accounts[2]});
		await contractBFYXKUZ.setRefBonus.call(level1iCgbjUF, level2ZTVya49, level3oiNbPWP, level4cnnfG2S, level5ZiQI1Du, {from: accounts[2]});
		const nullSaMImx = await contractBFYXKUZ.balanceFOSTER.call(accountc5LP7L5, {from: accounts[2]});

		await expect(contractBFYXKUZ.withdrawERC20.call(ERC20TokenLZJUVhK, recipientjKTfJhi, valuetjZepLb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrRiUOiQe = accounts[3]
		const FOSTERAddre9CfzI3 = accounts[0]
		const initialRateIf2XoAy = BigInt("1426")
		const initialPeriodFz5ekPO = BigInt("1011")
		const initialOwnerRjenxHF = accounts[2]
		const contractxcQqypa = await Reseller.new(USDTAddrRiUOiQe, FOSTERAddre9CfzI3, initialRateIf2XoAy, initialPeriodFz5ekPO, initialOwnerRjenxHF, {from: accounts[3]});
		const newRateOoyY2IC = BigInt("1420")
		const _periodtM0qC0b = BigInt("1595")
		const amountg1qyZS7 = BigInt("1684")
		const recipientWcgN44A = accounts[2]
		await contractxcQqypa.setRate.call(newRateOoyY2IC, {from: accounts[2]});
		await contractxcQqypa.freezeAndTransfer.call(recipientWcgN44A, amountg1qyZS7, _periodtM0qC0b, {from: accounts[4]});

		await expect(contractxcQqypa.setRate.call(newRateOoyY2IC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrF0wDTji = accounts[3]
		const FOSTERAddrVIzrYiE = accounts[0]
		const initialRateMSHmhwi = BigInt("1426")
		const initialPeriodLAtegTB = BigInt("1011")
		const initialOwnerhRrzqz2 = accounts[2]
		const contractbwovREX = await Reseller.new(USDTAddrF0wDTji, FOSTERAddrVIzrYiE, initialRateMSHmhwi, initialPeriodLAtegTB, initialOwnerhRrzqz2, {from: accounts[3]});
		const accountfeFokz = accounts[2]
		const newPeriodnfYamp7 = BigInt("1430")
		const nullLbvHAzJ = await contractbwovREX.balanceUSDT.call(accountfeFokz, {from: accounts[1]});
		await contractbwovREX.setPeriod.call(newPeriodnfYamp7, {from: accounts[4]});

		await expect(contractbwovREX.balanceUSDT.call(accountfeFokz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrixkaZAb = accounts[3]
		const FOSTERAddrxkcdWlo = accounts[0]
		const initialRateWVvKaI1 = BigInt("1426")
		const initialPeriodpp8y70I = BigInt("1011")
		const initialOwnerhMJoCdL = accounts[2]
		const contractrRZH6x9 = await Reseller.new(USDTAddrixkaZAb, FOSTERAddrxkcdWlo, initialRateWVvKaI1, initialPeriodpp8y70I, initialOwnerhMJoCdL, {from: accounts[3]});
		const commentaUTBDh = "oRJ2e4RnYQjsrw5x0Zdbg1DmHoRHEPcCBWLc0G85P7f5j"
		const _ref5Qq7MrWk = accounts[0]
		const _ref4I8Vb2Rb = "0x0000000000000000000000000000000000000001"
		const _ref3iKufi3A = accounts[5]
		const _ref2sOqWOrf = accounts[4]
		const _ref1JunvWT = accounts[4]
		const valuekKCWIZo = BigInt("992")
		const newPeriodeLD3hKq = BigInt("1421")
		const newMinimumKkOcm7A = BigInt("1650")
		await contractrRZH6x9.purchase.call(valuekKCWIZo, _ref1JunvWT, _ref2sOqWOrf, _ref3iKufi3A, _ref4I8Vb2Rb, _ref5Qq7MrWk, commentaUTBDh, {from: accounts[0]});
		await contractrRZH6x9.setPeriod.call(newPeriodeLD3hKq, {from: accounts[4]});
		await contractrRZH6x9.setMinimum.call(newMinimumKkOcm7A, {from: accounts[0]});

		await expect(contractrRZH6x9.purchase.call(valuekKCWIZo, _ref1JunvWT, _ref2sOqWOrf, _ref3iKufi3A, _ref4I8Vb2Rb, _ref5Qq7MrWk, commentaUTBDh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrz9IvrW = accounts[3]
		const FOSTERAddraYwj2BD = accounts[0]
		const initialRatemesWvtF = BigInt("1426")
		const initialPeriodxrLLQs9 = BigInt("1011")
		const initialOwnerFPaOS1 = accounts[2]
		const contractbnVl11H = await Reseller.new(USDTAddrz9IvrW, FOSTERAddraYwj2BD, initialRatemesWvtF, initialPeriodxrLLQs9, initialOwnerFPaOS1, {from: accounts[3]});
		const newRatePOTGic = BigInt("1103")
		const _periodxE06Pwn = BigInt("84")
		const amountpYoV93G = BigInt("1070")
		const recipientFNLfcvd = accounts[0]
		const newPeriodzIiv0gC = BigInt("1418")
		await contractbnVl11H.switchState.call({from: accounts[4]});
		await contractbnVl11H.setRate.call(newRatePOTGic, {from: "0x0000000000000000000000000000000000000001"});
		await contractbnVl11H.freezeAndTransfer.call(recipientFNLfcvd, amountpYoV93G, _periodxE06Pwn, {from: accounts[0]});
		await contractbnVl11H.setPeriod.call(newPeriodzIiv0gC, {from: accounts[4]});

		await expect(contractbnVl11H.switchState.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrzvIOpV3 = accounts[3]
		const FOSTERAddrTj4IFH = accounts[0]
		const initialRateK0Ur801 = BigInt("1426")
		const initialPeriodNGvt69G = BigInt("1011")
		const initialOwneroNrotFU = accounts[2]
		const contractkH3ewqO = await Reseller.new(USDTAddrzvIOpV3, FOSTERAddrTj4IFH, initialRateK0Ur801, initialPeriodNGvt69G, initialOwneroNrotFU, {from: accounts[3]});
		const level5syJ1QQZ = BigInt("68")
		const level4wGgNmcz = BigInt("39")
		const level3MhmoLcX = BigInt("126")
		const level2HEYdfSe = BigInt("30")
		const level1qpCe1IF = BigInt("83")
		const newBoss3KUORDws = accounts[0]
		const newPeriodMIlNKD2 = BigInt("94")
		const newFeeeHPt4kq = BigInt("196")
		await contractkH3ewqO.setRefBonus.call(level1qpCe1IF, level2HEYdfSe, level3MhmoLcX, level4wGgNmcz, level5syJ1QQZ, {from: accounts[4]});
		await contractkH3ewqO.deposeBoss3.call(newBoss3KUORDws, {from: accounts[1]});
		await contractkH3ewqO.setPeriod.call(newPeriodMIlNKD2, {from: accounts[4]});
		await contractkH3ewqO.setFee.call(newFeeeHPt4kq, {from: accounts[1]});

		await expect(contractkH3ewqO.setRefBonus.call(level1qpCe1IF, level2HEYdfSe, level3MhmoLcX, level4wGgNmcz, level5syJ1QQZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrzJFqiMQ = accounts[3]
		const FOSTERAddrzjGEsbw = accounts[0]
		const initialRateOLlBAH = BigInt("1426")
		const initialPeriodVm1wA0 = BigInt("1011")
		const initialOwnerObPFrOo = accounts[2]
		const contractnEHopFi = await Reseller.new(USDTAddrzJFqiMQ, FOSTERAddrzjGEsbw, initialRateOLlBAH, initialPeriodVm1wA0, initialOwnerObPFrOo, {from: accounts[3]});
		const newFeewG2jt2Q = BigInt("44")
		const newPeriodVPZ0EEh = BigInt("62")
		const newBoss3YoajZoB = "0x0000000000000000000000000000000000000001"
		const newBoss4ejfj0I = accounts[3]
		await contractnEHopFi.setFee.call(newFeewG2jt2Q, {from: accounts[0]});
		await contractnEHopFi.setPeriod.call(newPeriodVPZ0EEh, {from: accounts[4]});
		await contractnEHopFi.deposeBoss3.call(newBoss3YoajZoB, {from: "0x0000000000000000000000000000000000000001"});
		await contractnEHopFi.deposeBoss4.call(newBoss4ejfj0I, {from: accounts[2]});

		await expect(contractnEHopFi.setFee.call(newFeewG2jt2Q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrw1CzVPX = accounts[3]
		const FOSTERAddrBLaQSba = accounts[0]
		const initialRateAaaR9XH = BigInt("1426")
		const initialPeriodM9qqRcg = BigInt("1011")
		const initialOwnerYAvD8Cf = accounts[2]
		const contractFCg9Tfc = await Reseller.new(USDTAddrw1CzVPX, FOSTERAddrBLaQSba, initialRateAaaR9XH, initialPeriodM9qqRcg, initialOwnerYAvD8Cf, {from: accounts[3]});
		const amountkSHVka1 = BigInt("462")
		const newBoss4BBONUQ = accounts[4]
		const commentCEbcMoG = "5ERlvhsYb1YobuSszKVWpsi9eS3QFfKFyrKsjirQCuB2Xz6nz"
		const _ref5dzorOS5 = accounts[0]
		const _ref4OsMYHLy = accounts[0]
		const _ref3mZH8Dic = accounts[3]
		const _ref2lSteYF = accounts[0]
		const _ref1Ic7PAg = accounts[1]
		const valueAIZcQeg = BigInt("743")
		const newPeriodcEN0VT0 = BigInt("71")
		const nullvC3AESf = await contractFCg9Tfc.getEstimation.call(amountkSHVka1, {from: accounts[0]});
		await contractFCg9Tfc.deposeBoss4.call(newBoss4BBONUQ, {from: accounts[0]});
		await contractFCg9Tfc.purchase.call(valueAIZcQeg, _ref1Ic7PAg, _ref2lSteYF, _ref3mZH8Dic, _ref4OsMYHLy, _ref5dzorOS5, commentCEbcMoG, {from: accounts[2]});
		await contractFCg9Tfc.setPeriod.call(newPeriodcEN0VT0, {from: accounts[4]});

		assert.equal(nullvC3AESf, 658812)
		await expect(contractFCg9Tfc.deposeBoss4.call(newBoss4BBONUQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddreclvOM = accounts[3]
		const FOSTERAddrij270Sh = accounts[0]
		const initialRatexkD1Tcy = BigInt("1426")
		const initialPeriodjFk9mFB = BigInt("1011")
		const initialOwneru7MuQeZ = accounts[2]
		const contractOVXrObT = await Reseller.new(USDTAddreclvOM, FOSTERAddrij270Sh, initialRatexkD1Tcy, initialPeriodjFk9mFB, initialOwneru7MuQeZ, {from: accounts[3]});
		const newBoss3HQwAUen = accounts[2]
		const newPeriodtch9QQ6 = BigInt("855")
		const valueR6l9c4w = BigInt("1879")
		const recipientogORHXF = accounts[2]
		const ERC20TokenDpb2oG = accounts[1]
		await contractOVXrObT.deposeBoss3.call(newBoss3HQwAUen, {from: accounts[0]});
		await contractOVXrObT.setPeriod.call(newPeriodtch9QQ6, {from: accounts[4]});
		await contractOVXrObT.withdrawERC20.call(ERC20TokenDpb2oG, recipientogORHXF, valueR6l9c4w, {from: accounts[1]});

		await expect(contractOVXrObT.deposeBoss3.call(newBoss3HQwAUen, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddreNcKczT = accounts[3]
		const FOSTERAddr4HZf0x = accounts[0]
		const initialRateapc66In = BigInt("1426")
		const initialPeriodo8vPCq6 = BigInt("1011")
		const initialOwnerfNKdxx5 = accounts[2]
		const contractbyncltp = await Reseller.new(USDTAddreNcKczT, FOSTERAddr4HZf0x, initialRateapc66In, initialPeriodo8vPCq6, initialOwnerfNKdxx5, {from: accounts[3]});
		const newBoss1wQrHaSl = "0x0000000000000000000000000000000000000001"
		const newPeriodCXEWGuY = BigInt("1437")
		const newPeriodPTfVDMi = BigInt("2016")
		await contractbyncltp.deposeBoss1.call(newBoss1wQrHaSl, {from: accounts[2]});
		await contractbyncltp.setPeriod.call(newPeriodCXEWGuY, {from: accounts[4]});
		await contractbyncltp.setPeriod.call(newPeriodPTfVDMi, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractbyncltp.deposeBoss1.call(newBoss1wQrHaSl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrUccdJH3 = accounts[3]
		const FOSTERAddrX9flX9a = accounts[0]
		const initialRaterkkq8KG = BigInt("1426")
		const initialPeriodPEhxEvQ = BigInt("1011")
		const initialOwnerk4qwUTM = accounts[2]
		const contracteHspWq = await Reseller.new(USDTAddrUccdJH3, FOSTERAddrX9flX9a, initialRaterkkq8KG, initialPeriodPEhxEvQ, initialOwnerk4qwUTM, {from: accounts[3]});
		const _ref5JHJ703h = accounts[2]
		const _ref4MUZYft2 = accounts[2]
		const _ref3zNxgUA1 = accounts[0]
		const _ref2ugTDcRv = accounts[0]
		const _ref1xkbsJ6 = accounts[3]
		const valuejw9hyLi = BigInt("1340")
		const newPeriodDAlg9hh = BigInt("1769")
		await contracteHspWq.buy.call(valuejw9hyLi, _ref1xkbsJ6, _ref2ugTDcRv, _ref3zNxgUA1, _ref4MUZYft2, _ref5JHJ703h, {from: accounts[3]});
		await contracteHspWq.setPeriod.call(newPeriodDAlg9hh, {from: accounts[4]});

		await expect(contracteHspWq.buy.call(valuejw9hyLi, _ref1xkbsJ6, _ref2ugTDcRv, _ref3zNxgUA1, _ref4MUZYft2, _ref5JHJ703h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrXtrknaU = accounts[3]
		const FOSTERAddrHE76ifL = accounts[0]
		const initialRatemEj7bX = BigInt("1426")
		const initialPeriodHVwIVEp = BigInt("1011")
		const initialOwnerqTz5fvh = accounts[2]
		const contracteDkgEVx = await Reseller.new(USDTAddrXtrknaU, FOSTERAddrHE76ifL, initialRatemEj7bX, initialPeriodHVwIVEp, initialOwnerqTz5fvh, {from: accounts[3]});
		const newMinimumbrYXfLm = BigInt("1942")
		const newPeriodnIMX7fU = BigInt("1421")
		await contracteDkgEVx.setMinimum.call(newMinimumbrYXfLm, {from: accounts[4]});
		await contracteDkgEVx.setPeriod.call(newPeriodnIMX7fU, {from: accounts[4]});

		await expect(contracteDkgEVx.setMinimum.call(newMinimumbrYXfLm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjOGjtzW = accounts[3]
		const FOSTERAddrVKGhn0L = accounts[0]
		const initialRateNh75u0g = BigInt("1426")
		const initialPeriodyT34yWO = BigInt("1011")
		const initialOwnereAjGLmA = accounts[2]
		const contractgwoA9J4 = await Reseller.new(USDTAddrjOGjtzW, FOSTERAddrVKGhn0L, initialRateNh75u0g, initialPeriodyT34yWO, initialOwnereAjGLmA, {from: accounts[3]});
		const accountijy3neM = accounts[1]
		const _ref5JR438wi = accounts[5]
		const _ref4xdecLO = "0x0000000000000000000000000000000000000001"
		const _ref3YmA3sQf = accounts[3]
		const _ref2NcEG4lh = accounts[3]
		const _ref1PJhNAj3 = "0x0000000000000000000000000000000000000001"
		const valuemX6oQ4p = BigInt("1835")
		const newPeriodmfycZKO = BigInt("71")
		const nulltxwlLG8 = await contractgwoA9J4.allowanceUSDT.call(accountijy3neM, {from: accounts[1]});
		await contractgwoA9J4.buy.call(valuemX6oQ4p, _ref1PJhNAj3, _ref2NcEG4lh, _ref3YmA3sQf, _ref4xdecLO, _ref5JR438wi, {from: accounts[1]});
		await contractgwoA9J4.setPeriod.call(newPeriodmfycZKO, {from: accounts[4]});

		await expect(contractgwoA9J4.allowanceUSDT.call(accountijy3neM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQFtQpku = accounts[1]
		const FOSTERAddrafwMLL3 = accounts[1]
		const initialRateaM5ypBa = BigInt("525")
		const initialPeriodBOR4sZ = BigInt("1043")
		const initialOwnermUzXkSR = accounts[2]
		const contractBU24KI = await Reseller.new(USDTAddrQFtQpku, FOSTERAddrafwMLL3, initialRateaM5ypBa, initialPeriodBOR4sZ, initialOwnermUzXkSR, {from: accounts[0]});
		const accountltRyYAj = accounts[2]
		const valuenSRM6g7 = BigInt("747")
		const recipientmEnGRlo = accounts[5]
		const ERC20Tokenw0ufqm0 = accounts[4]
		const _ref5HBqMPhf = accounts[3]
		const _ref4RqEzALg = accounts[4]
		const _ref3OXeahBY = accounts[0]
		const _ref2vqeeBpX = "0x0000000000000000000000000000000000000001"
		const _ref1oDr3hR = accounts[3]
		const valueK2eIBl = BigInt("47")
		const nullOJbkduN = await contractBU24KI.balanceFOSTER.call(accountltRyYAj, {from: accounts[2]});
		await contractBU24KI.withdrawERC20.call(ERC20Tokenw0ufqm0, recipientmEnGRlo, valuenSRM6g7, {from: accounts[1]});
		await contractBU24KI.buy.call(valueK2eIBl, _ref1oDr3hR, _ref2vqeeBpX, _ref3OXeahBY, _ref4RqEzALg, _ref5HBqMPhf, {from: accounts[0]});

		await expect(contractBU24KI.balanceFOSTER.call(accountltRyYAj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrsLk4eb = accounts[4]
		const FOSTERAddrc4UrkrH = accounts[2]
		const initialRateWj6XK8T = BigInt("1008")
		const initialPeriodn5iaLGu = BigInt("448")
		const initialOwnerMXdyDu8 = accounts[2]
		const contractLdxPyX5 = await Reseller.new(USDTAddrsLk4eb, FOSTERAddrc4UrkrH, initialRateWj6XK8T, initialPeriodn5iaLGu, initialOwnerMXdyDu8, {from: accounts[2]});
		const valueTWdQe0 = BigInt("1371")
		const _periodUwJa7je = BigInt("1238")
		const amountNpDerLt = BigInt("432")
		const recipientVglhyUw = accounts[5]
		const valueGi8M76i = BigInt("1513")
		const recipientJkjj8O = accounts[0]
		const ERC20TokenZXzPlwO = accounts[1]
		await contractLdxPyX5.withdraw.call(valueTWdQe0, {from: accounts[4]});
		await contractLdxPyX5.freezeAndTransfer.call(recipientVglhyUw, amountNpDerLt, _periodUwJa7je, {from: accounts[0]});
		await contractLdxPyX5.withdrawERC20.call(ERC20TokenZXzPlwO, recipientJkjj8O, valueGi8M76i, {from: accounts[2]});

		await expect(contractLdxPyX5.withdraw.call(valueTWdQe0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})