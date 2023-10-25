const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrGdoByH = accounts[4]
		const FOSTERAddrnSd4hOy = "0x0000000000000000000000000000000000000001"
		const initialRateolMT4Ql = BigInt("1177")
		const initialPeriodlqu8qQW = BigInt("1242")
		const initialOwnerv6YGblc = accounts[5]
		const contractAGXMjaY = await Reseller.new(USDTAddrGdoByH, FOSTERAddrnSd4hOy, initialRateolMT4Ql, initialPeriodlqu8qQW, initialOwnerv6YGblc, {from: accounts[4]});
		const level5uHwDTew = BigInt("104")
		const level4YT62hSL = BigInt("225")
		const level3J3vtb5X = BigInt("35")
		const level2MaXNKNx = BigInt("159")
		const level1889VY6 = BigInt("83")
		const _periodqToaDFQ = BigInt("274")
		const amountu6okuBS = BigInt("1767")
		const recipientrXRK6h7 = accounts[4]
		const value94A1k1 = BigInt("432")
		const newRatenph5AJt = BigInt("1639")
		await contractAGXMjaY.setRefBonus.call(level1889VY6, level2MaXNKNx, level3J3vtb5X, level4YT62hSL, level5uHwDTew, {from: accounts[4]});
		await contractAGXMjaY.freezeAndTransfer.call(recipientrXRK6h7, amountu6okuBS, _periodqToaDFQ, {from: accounts[0]});
		await contractAGXMjaY.withdraw.call(value94A1k1, {from: accounts[1]});
		await contractAGXMjaY.setRate.call(newRatenph5AJt, {from: accounts[0]});

		await expect(contractAGXMjaY.setRefBonus.call(level1889VY6, level2MaXNKNx, level3J3vtb5X, level4YT62hSL, level5uHwDTew, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrT8TUlCj = accounts[4]
		const FOSTERAddrV12OUar = "0x0000000000000000000000000000000000000001"
		const initialRateH4OzV9k = BigInt("253")
		const initialPeriodLOUSGfd = BigInt("707")
		const initialOwnerHpw4rT = accounts[2]
		const contractmh6IQ0i = await Reseller.new(USDTAddrT8TUlCj, FOSTERAddrV12OUar, initialRateH4OzV9k, initialPeriodLOUSGfd, initialOwnerHpw4rT, {from: accounts[0]});
		const newRatepQ9GKUK = BigInt("1416")
		const newPeriodiYmSS6z = BigInt("1165")
		const newBoss3vaZr3aw = accounts[0]
		await contractmh6IQ0i.setRate.call(newRatepQ9GKUK, {from: accounts[1]});
		await contractmh6IQ0i.setPeriod.call(newPeriodiYmSS6z, {from: accounts[4]});
		await contractmh6IQ0i.deposeBoss3.call(newBoss3vaZr3aw, {from: accounts[1]});

		await expect(contractmh6IQ0i.setRate.call(newRatepQ9GKUK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddryeK8kIH = accounts[5]
		const FOSTERAddrvkqTmYp = accounts[1]
		const initialRateekdRTN0 = BigInt("1672")
		const initialPeriodKEJrPHw = BigInt("819")
		const initialOwnerQ4KZrRH = accounts[3]
		const contracthUmn2wS = await Reseller.new(USDTAddryeK8kIH, FOSTERAddrvkqTmYp, initialRateekdRTN0, initialPeriodKEJrPHw, initialOwnerQ4KZrRH, {from: "0x0000000000000000000000000000000000000001"});
		const accounteQSn7bT = accounts[0]
		const _periodevCOqeU = BigInt("2030")
		const amountG2t2WT4 = BigInt("560")
		const recipientqebbRYv = accounts[2]
		const newBoss1WsE5hu5 = accounts[4]
		const valueW1xo5rR = BigInt("343")
		const recipientNzfbP6 = accounts[3]
		const ERC20TokenAth1Bbz = accounts[3]
		const newBoss4S7mLPhE = accounts[4]
		const newBoss4tdDHQVs = accounts[4]
		const nullqPJObc4 = await contracthUmn2wS.balanceUSDT.call(accounteQSn7bT, {from: "0x0000000000000000000000000000000000000001"});
		await contracthUmn2wS.freezeAndTransfer.call(recipientqebbRYv, amountG2t2WT4, _periodevCOqeU, {from: accounts[0]});
		await contracthUmn2wS.deposeBoss1.call(newBoss1WsE5hu5, {from: accounts[3]});
		await contracthUmn2wS.withdrawERC20.call(ERC20TokenAth1Bbz, recipientNzfbP6, valueW1xo5rR, {from: accounts[1]});
		await contracthUmn2wS.deposeBoss4.call(newBoss4S7mLPhE, {from: accounts[4]});
		await contracthUmn2wS.deposeBoss4.call(newBoss4tdDHQVs, {from: accounts[0]});
	});

	it('test for Reseller', async () => {
		const USDTAddroo4oGZQ = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrgHX1QgK = accounts[4]
		const initialRatejRGHnnv = BigInt("1464")
		const initialPeriodFkTDbQY = BigInt("642")
		const initialOwnerGbHPz1R = accounts[4]
		const contractpigoi88 = await Reseller.new(USDTAddroo4oGZQ, FOSTERAddrgHX1QgK, initialRatejRGHnnv, initialPeriodFkTDbQY, initialOwnerGbHPz1R, {from: accounts[3]});
		const accountGy6SVab = accounts[3]
		const newBoss3Zo8leFg = accounts[2]
		const nullwQdlfwg = await contractpigoi88.allowanceFOSTER.call(accountGy6SVab, {from: accounts[4]});
		await contractpigoi88.deposeBoss3.call(newBoss3Zo8leFg, {from: accounts[0]});

		await expect(contractpigoi88.allowanceFOSTER.call(accountGy6SVab, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCMIMyZH = accounts[3]
		const FOSTERAddrbxmewlx = accounts[4]
		const initialRateyNTYUtv = BigInt("1782")
		const initialPeriodY34fUUu = BigInt("855")
		const initialOwnerPWDijR1 = accounts[3]
		const contractMIBi8jm = await Reseller.new(USDTAddrCMIMyZH, FOSTERAddrbxmewlx, initialRateyNTYUtv, initialPeriodY34fUUu, initialOwnerPWDijR1, {from: accounts[3]});
		const valuesErE54u = BigInt("105")
		const newMinimumB0zWmD8 = BigInt("932")
		const level5oyditI3 = BigInt("112")
		const level4QcRuo7e = BigInt("145")
		const level3DX9TUVm = BigInt("201")
		const level2TkMvtj5 = BigInt("126")
		const level1uXxnfPf = BigInt("114")
		const newBoss4dFJJNq = accounts[4]
		await contractMIBi8jm.withdraw.call(valuesErE54u, {from: accounts[1]});
		await contractMIBi8jm.setMinimum.call(newMinimumB0zWmD8, {from: accounts[4]});
		await contractMIBi8jm.setRefBonus.call(level1uXxnfPf, level2TkMvtj5, level3DX9TUVm, level4QcRuo7e, level5oyditI3, {from: accounts[4]});
		await contractMIBi8jm.deposeBoss4.call(newBoss4dFJJNq, {from: accounts[3]});

		await expect(contractMIBi8jm.withdraw.call(valuesErE54u, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrXuKSctN = accounts[3]
		const FOSTERAddr2OBspp = accounts[4]
		const initialRatekM9w04u = BigInt("188")
		const initialPeriodtev0ZnR = BigInt("477")
		const initialOwnerEw2ockn = accounts[3]
		const contractC8Cgix = await Reseller.new(USDTAddrXuKSctN, FOSTERAddr2OBspp, initialRatekM9w04u, initialPeriodtev0ZnR, initialOwnerEw2ockn, {from: accounts[1]});
		const newBoss4GI1TD6B = accounts[3]
		const valueAMgpBL = BigInt("318")
		const level5EtkRZmq = BigInt("246")
		const level4QvcZwLo = BigInt("125")
		const level3hEzolrD = BigInt("205")
		const level2jF7l7Sa = BigInt("27")
		const level1PTV5L2o = BigInt("218")
		const newRateg15yC9i = BigInt("187")
		await contractC8Cgix.deposeBoss4.call(newBoss4GI1TD6B, {from: accounts[1]});
		await contractC8Cgix.withdraw.call(valueAMgpBL, {from: accounts[4]});
		await contractC8Cgix.setRefBonus.call(level1PTV5L2o, level2jF7l7Sa, level3hEzolrD, level4QvcZwLo, level5EtkRZmq, {from: accounts[1]});
		await contractC8Cgix.setRate.call(newRateg15yC9i, {from: accounts[4]});

		await expect(contractC8Cgix.deposeBoss4.call(newBoss4GI1TD6B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrXuG2CUT = "0x0000000000000000000000000000000000000001"
		const FOSTERAddr3KDPzt = accounts[4]
		const initialRaterWN3MNm = BigInt("1464")
		const initialPeriodo6WlQY = BigInt("642")
		const initialOwneriLN8aKm = accounts[4]
		const contractYEfibUl = await Reseller.new(USDTAddrXuG2CUT, FOSTERAddr3KDPzt, initialRaterWN3MNm, initialPeriodo6WlQY, initialOwneriLN8aKm, {from: accounts[3]});
		const newBoss1gQFD17c = accounts[2]
		const newMinimumEciqNm = BigInt("219")
		const accountgRmzxIX = accounts[3]
		await contractYEfibUl.deposeBoss1.call(newBoss1gQFD17c, {from: accounts[1]});
		await contractYEfibUl.setMinimum.call(newMinimumEciqNm, {from: accounts[2]});
		const nullYOxe5pS = await contractYEfibUl.allowanceFOSTER.call(accountgRmzxIX, {from: accounts[4]});

		await expect(contractYEfibUl.deposeBoss1.call(newBoss1gQFD17c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrcqfrC0l = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrsJWc0be = accounts[4]
		const initialRateYXSpyAK = BigInt("1464")
		const initialPeriodD307mk5 = BigInt("642")
		const initialOwnerpFmt1e = accounts[4]
		const contractfQwKv2F = await Reseller.new(USDTAddrcqfrC0l, FOSTERAddrsJWc0be, initialRateYXSpyAK, initialPeriodD307mk5, initialOwnerpFmt1e, {from: accounts[3]});
		const newBoss3DLkKbjO = accounts[2]
		await contractfQwKv2F.deposeBoss3.call(newBoss3DLkKbjO, {from: accounts[0]});

		await expect(contractfQwKv2F.deposeBoss3.call(newBoss3DLkKbjO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrQyVtRYn = accounts[0]
		const FOSTERAddrG1by0PI = accounts[2]
		const initialRateeENuK3A = BigInt("1882")
		const initialPeriodhV8VEG = BigInt("967")
		const initialOwnerSHw1dI5 = accounts[2]
		const contractsKOKKV = await Reseller.new(USDTAddrQyVtRYn, FOSTERAddrG1by0PI, initialRateeENuK3A, initialPeriodhV8VEG, initialOwnerSHw1dI5, {from: accounts[1]});
		const newRateMCUH0wk = BigInt("1353")
		const newPeriod8YX4PF = BigInt("1797")
		const newPeriodH2yAq0i = BigInt("1574")
		await contractsKOKKV.setRate.call(newRateMCUH0wk, {from: accounts[2]});
		await contractsKOKKV.setPeriod.call(newPeriod8YX4PF, {from: accounts[4]});
		await contractsKOKKV.setPeriod.call(newPeriodH2yAq0i, {from: accounts[0]});

		await expect(contractsKOKKV.setRate.call(newRateMCUH0wk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrOjkZSbP = accounts[0]
		const FOSTERAddrN1Os4V0 = accounts[2]
		const initialRaterey3ViL = BigInt("1882")
		const initialPeriodUVkJVov = BigInt("967")
		const initialOwnerVoOo9QJ = accounts[2]
		const contractLs9UpP = await Reseller.new(USDTAddrOjkZSbP, FOSTERAddrN1Os4V0, initialRaterey3ViL, initialPeriodUVkJVov, initialOwnerVoOo9QJ, {from: accounts[1]});
		const newRateQYEA2ZD = BigInt("1353")
		const newMinimumg2b2Z4B = BigInt("1664")
		const level5aAhu2M2 = BigInt("214")
		const level4epV7m1C = BigInt("189")
		const level3TO3wAf = BigInt("13")
		const level2EeVWhtT = BigInt("97")
		const level1L6FunGO = BigInt("186")
		const newPeriodF6muqV0 = BigInt("1797")
		const newPeriodW1TQH5q = BigInt("1576")
		await contractLs9UpP.setRate.call(newRateQYEA2ZD, {from: accounts[2]});
		await contractLs9UpP.setMinimum.call(newMinimumg2b2Z4B, {from: accounts[0]});
		await contractLs9UpP.setRefBonus.call(level1L6FunGO, level2EeVWhtT, level3TO3wAf, level4epV7m1C, level5aAhu2M2, {from: accounts[0]});
		await contractLs9UpP.setPeriod.call(newPeriodF6muqV0, {from: accounts[4]});
		await contractLs9UpP.setPeriod.call(newPeriodW1TQH5q, {from: accounts[0]});

		await expect(contractLs9UpP.setRate.call(newRateQYEA2ZD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrZmcerxE = accounts[0]
		const FOSTERAddr3m9ILR = accounts[2]
		const initialRateHT8l5wf = BigInt("1882")
		const initialPeriodSPLE3Qh = BigInt("967")
		const initialOwnerJIAqJTG = accounts[2]
		const contractMM7vgz9 = await Reseller.new(USDTAddrZmcerxE, FOSTERAddr3m9ILR, initialRateHT8l5wf, initialPeriodSPLE3Qh, initialOwnerJIAqJTG, {from: accounts[1]});
		const newRatesaHyxJl = BigInt("1350")
		const accountClo2Ydk = accounts[3]
		const newPeriodi2BWp64 = BigInt("1574")
		const valuesyg3ABF = BigInt("1574")
		const newBoss1fAqFPdc = accounts[4]
		await contractMM7vgz9.setRate.call(newRatesaHyxJl, {from: accounts[2]});
		const nullmMERWhG = await contractMM7vgz9.balanceFOSTER.call(accountClo2Ydk, {from: accounts[3]});
		await contractMM7vgz9.setPeriod.call(newPeriodi2BWp64, {from: accounts[0]});
		await contractMM7vgz9.withdraw.call(valuesyg3ABF, {from: accounts[0]});
		await contractMM7vgz9.deposeBoss1.call(newBoss1fAqFPdc, {from: accounts[0]});

		await expect(contractMM7vgz9.setRate.call(newRatesaHyxJl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCEDYuLQ = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrRHXiN0d = accounts[4]
		const initialRateprwu84Z = BigInt("1464")
		const initialPeriodVZpNa1 = BigInt("642")
		const initialOwnerQ5EoyUt = accounts[4]
		const contractk4O9vj = await Reseller.new(USDTAddrCEDYuLQ, FOSTERAddrRHXiN0d, initialRateprwu84Z, initialPeriodVZpNa1, initialOwnerQ5EoyUt, {from: accounts[3]});
		const newBoss4jf0lxHc = accounts[2]
		const newBoss3wQBzII9 = accounts[3]
		await contractk4O9vj.deposeBoss4.call(newBoss4jf0lxHc, {from: accounts[4]});
		await contractk4O9vj.deposeBoss3.call(newBoss3wQBzII9, {from: accounts[0]});

		await expect(contractk4O9vj.deposeBoss4.call(newBoss4jf0lxHc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr6gnCkg = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrlmUm3p5 = accounts[4]
		const initialRateYtsWXIS = BigInt("1464")
		const initialPeriodWM2XtEA = BigInt("642")
		const initialOwnerajjokP = accounts[4]
		const contractbgiYEGI = await Reseller.new(USDTAddr6gnCkg, FOSTERAddrlmUm3p5, initialRateYtsWXIS, initialPeriodWM2XtEA, initialOwnerajjokP, {from: accounts[3]});
		const level5toEYdxT = BigInt("251")
		const level4CsvILwE = BigInt("203")
		const level3n7iDeWt = BigInt("76")
		const level2kdaaYqz = BigInt("238")
		const level1zJi02Wl = BigInt("154")
		const newBoss3jFVAKy = accounts[2]
		await contractbgiYEGI.setRefBonus.call(level1zJi02Wl, level2kdaaYqz, level3n7iDeWt, level4CsvILwE, level5toEYdxT, {from: accounts[4]});
		await contractbgiYEGI.deposeBoss3.call(newBoss3jFVAKy, {from: accounts[0]});

		await expect(contractbgiYEGI.setRefBonus.call(level1zJi02Wl, level2kdaaYqz, level3n7iDeWt, level4CsvILwE, level5toEYdxT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrpLWvLse = accounts[3]
		const FOSTERAddrbLfOiUE = accounts[4]
		const initialRateyuRW65B = BigInt("1782")
		const initialPeriodKs4bQqB = BigInt("855")
		const initialOwnerTSXma4o = accounts[3]
		const contractSNjRUVY = await Reseller.new(USDTAddrpLWvLse, FOSTERAddrbLfOiUE, initialRateyuRW65B, initialPeriodKs4bQqB, initialOwnerTSXma4o, {from: accounts[3]});
		const accountw8X1EUW = accounts[1]
		const valueJKx68wq = BigInt("105")
		const level5CtKHUl7 = BigInt("112")
		const level4dFF2yqY = BigInt("139")
		const level3aBiMQVb = BigInt("201")
		const level22owpne = BigInt("126")
		const level1QNbM4Kx = BigInt("114")
		const newBoss4Nsj4fZ = accounts[4]
		const nullbnZOtFp = await contractSNjRUVY.allowanceUSDT.call(accountw8X1EUW, {from: accounts[0]});
		await contractSNjRUVY.withdraw.call(valueJKx68wq, {from: accounts[1]});
		await contractSNjRUVY.setRefBonus.call(level1QNbM4Kx, level22owpne, level3aBiMQVb, level4dFF2yqY, level5CtKHUl7, {from: accounts[4]});
		await contractSNjRUVY.deposeBoss4.call(newBoss4Nsj4fZ, {from: accounts[3]});

		await expect(contractSNjRUVY.allowanceUSDT.call(accountw8X1EUW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrx9ac20b = accounts[3]
		const FOSTERAddrOJqhQOV = accounts[2]
		const initialRateyYKFPuw = BigInt("1060")
		const initialPerioddUPDXYC = BigInt("1738")
		const initialOwner6up7VZ = accounts[0]
		const contractWD569Ri = await Reseller.new(USDTAddrx9ac20b, FOSTERAddrOJqhQOV, initialRateyYKFPuw, initialPerioddUPDXYC, initialOwner6up7VZ, {from: accounts[0]});
		const newBoss2BPM50dp = accounts[1]
		const amountKdReHy = BigInt("1799")
		const newBoss49Loqhk = accounts[3]
		const amounty2GD37A = BigInt("32")
		const commentsXGl5Ln = "uxnz8r6"
		const _ref5heMmgrY = accounts[4]
		const _ref4OLibxfo = "0x0000000000000000000000000000000000000001"
		const _ref3UXSZt9 = accounts[0]
		const _ref2fwfUYKX = accounts[2]
		const _ref1sbVrGIA = accounts[0]
		const valueQfcnmet = BigInt("1715")
		await contractWD569Ri.deposeBoss2.call(newBoss2BPM50dp, {from: "0x0000000000000000000000000000000000000001"});
		const nullxPjn27s = await contractWD569Ri.getEstimation.call(amountKdReHy, {from: accounts[0]});
		await contractWD569Ri.deposeBoss4.call(newBoss49Loqhk, {from: "0x0000000000000000000000000000000000000001"});
		const nullaTPZ0aw = await contractWD569Ri.getEstimation.call(amounty2GD37A, {from: accounts[1]});
		await contractWD569Ri.purchase.call(valueQfcnmet, _ref1sbVrGIA, _ref2fwfUYKX, _ref3UXSZt9, _ref4OLibxfo, _ref5heMmgrY, commentsXGl5Ln, {from: accounts[4]});

		await expect(contractWD569Ri.deposeBoss2.call(newBoss2BPM50dp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCi5xC42 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrjOIdxIk = accounts[4]
		const initialRateBxF3ch9 = BigInt("1464")
		const initialPeriodRzEJ8d4 = BigInt("642")
		const initialOwneruGejoPa = accounts[4]
		const contractAOal83x = await Reseller.new(USDTAddrCi5xC42, FOSTERAddrjOIdxIk, initialRateBxF3ch9, initialPeriodRzEJ8d4, initialOwneruGejoPa, {from: accounts[3]});
		const valueH0M8sIU = BigInt("601")
		const recipientRCX2tT9 = accounts[2]
		const ERC20TokeneqleVpp = accounts[2]
		const _periodwB9TVwk = BigInt("666")
		const amountUlnAhMl = BigInt("1476")
		const recipientXh7XDaJ = accounts[2]
		const newBoss3i8AVO7 = accounts[4]
		await contractAOal83x.withdrawERC20.call(ERC20TokeneqleVpp, recipientRCX2tT9, valueH0M8sIU, {from: accounts[3]});
		await contractAOal83x.freezeAndTransfer.call(recipientXh7XDaJ, amountUlnAhMl, _periodwB9TVwk, {from: accounts[4]});
		await contractAOal83x.deposeBoss3.call(newBoss3i8AVO7, {from: accounts[0]});

		await expect(contractAOal83x.withdrawERC20.call(ERC20TokeneqleVpp, recipientRCX2tT9, valueH0M8sIU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCmx710 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrcbizUel = accounts[4]
		const initialRatexX2PwHT = BigInt("1464")
		const initialPeriodk1hoaXx = BigInt("642")
		const initialOwnerk5DieJ4 = accounts[4]
		const contractOzr3qWO = await Reseller.new(USDTAddrCmx710, FOSTERAddrcbizUel, initialRatexX2PwHT, initialPeriodk1hoaXx, initialOwnerk5DieJ4, {from: accounts[3]});
		const newFeeGGrU5QP = BigInt("135")
		const newRatezt8hVd = BigInt("1883")
		const newBoss3fJCIrJY = accounts[3]
		await contractOzr3qWO.setFee.call(newFeeGGrU5QP, {from: accounts[0]});
		await contractOzr3qWO.setRate.call(newRatezt8hVd, {from: accounts[0]});
		await contractOzr3qWO.deposeBoss3.call(newBoss3fJCIrJY, {from: accounts[0]});

		await expect(contractOzr3qWO.setFee.call(newFeeGGrU5QP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrXpXYmRj = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrpwIEANP = accounts[4]
		const initialRatePbrAXGn = BigInt("1464")
		const initialPeriodvV6DCGL = BigInt("642")
		const initialOwnerFRF5gcz = accounts[4]
		const contractoVF4GDK = await Reseller.new(USDTAddrXpXYmRj, FOSTERAddrpwIEANP, initialRatePbrAXGn, initialPeriodvV6DCGL, initialOwnerFRF5gcz, {from: accounts[3]});
		const commentGsX3TC5 = "tIbOz"
		const _ref506mpmp = accounts[0]
		const _ref4Bf72yR1 = accounts[5]
		const _ref3NdBOsuq = accounts[2]
		const _ref28EO63R = accounts[4]
		const _ref1eEPlaxJ = accounts[3]
		const valueg8qpS4P = BigInt("1771")
		await contractoVF4GDK.purchase.call(valueg8qpS4P, _ref1eEPlaxJ, _ref28EO63R, _ref3NdBOsuq, _ref4Bf72yR1, _ref506mpmp, commentGsX3TC5, {from: accounts[0]});

		await expect(contractoVF4GDK.purchase.call(valueg8qpS4P, _ref1eEPlaxJ, _ref28EO63R, _ref3NdBOsuq, _ref4Bf72yR1, _ref506mpmp, commentGsX3TC5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDzT4qHE = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrRdggqqE = accounts[4]
		const initialRateoavze9Q = BigInt("1464")
		const initialPeriodOJbvP1b = BigInt("642")
		const initialOwnerbDWwvfm = accounts[4]
		const contractPm5xGMj = await Reseller.new(USDTAddrDzT4qHE, FOSTERAddrRdggqqE, initialRateoavze9Q, initialPeriodOJbvP1b, initialOwnerbDWwvfm, {from: accounts[3]});
		const accountEJyDXfb = accounts[3]
		const newBoss3qGOaeEf = accounts[5]
		const nullBRNCFB = await contractPm5xGMj.balanceUSDT.call(accountEJyDXfb, {from: accounts[1]});
		await contractPm5xGMj.deposeBoss3.call(newBoss3qGOaeEf, {from: accounts[0]});

		await expect(contractPm5xGMj.balanceUSDT.call(accountEJyDXfb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrH9tseTU = accounts[4]
		const FOSTERAddrfzRJ9vN = accounts[5]
		const initialRateXcgD4ea = BigInt("1391")
		const initialPeriods6IqaI = BigInt("236")
		const initialOwnerrUF0nX = accounts[0]
		const contractghgd8Hl = await Reseller.new(USDTAddrH9tseTU, FOSTERAddrfzRJ9vN, initialRateXcgD4ea, initialPeriods6IqaI, initialOwnerrUF0nX, {from: accounts[3]});
		const _periodwmWCmiE = BigInt("1081")
		const amountfml9TEY = BigInt("508")
		const recipientuqQILMg = accounts[5]
		const valueAcdn9Fi = BigInt("1520")
		const recipientRs4kyTp = accounts[5]
		const ERC20TokenmeJbdfu = accounts[0]
		const newBoss4mGi7Jg = accounts[3]
		await contractghgd8Hl.freezeAndTransfer.call(recipientuqQILMg, amountfml9TEY, _periodwmWCmiE, {from: accounts[2]});
		await contractghgd8Hl.switchState.call({from: accounts[1]});
		await contractghgd8Hl.withdrawERC20.call(ERC20TokenmeJbdfu, recipientRs4kyTp, valueAcdn9Fi, {from: accounts[4]});
		await contractghgd8Hl.deposeBoss4.call(newBoss4mGi7Jg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractghgd8Hl.freezeAndTransfer.call(recipientuqQILMg, amountfml9TEY, _periodwmWCmiE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrpZ1x3EC = accounts[3]
		const FOSTERAddrNyWimt0 = accounts[4]
		const initialRateqmoej5 = BigInt("1782")
		const initialPeriodztg0Thc = BigInt("855")
		const initialOwnerORUOov9 = accounts[3]
		const contractBcAmaUU = await Reseller.new(USDTAddrpZ1x3EC, FOSTERAddrNyWimt0, initialRateqmoej5, initialPeriodztg0Thc, initialOwnerORUOov9, {from: accounts[3]});
		const _ref5bMbhfka = accounts[2]
		const _ref4QMQHn3 = "0x0000000000000000000000000000000000000001"
		const _ref3uX2WCBR = accounts[3]
		const _ref2GWUzc6O = accounts[2]
		const _ref1mUgL6be = accounts[4]
		const valueDlHbdio = BigInt("1372")
		const level51eMEX3 = BigInt("112")
		const level42XaFJb = BigInt("145")
		const level3R8iXHxr = BigInt("201")
		const level2ZBzHTBP = BigInt("107")
		const level1Y7Cr5Xn = BigInt("114")
		await contractBcAmaUU.buy.call(valueDlHbdio, _ref1mUgL6be, _ref2GWUzc6O, _ref3uX2WCBR, _ref4QMQHn3, _ref5bMbhfka, {from: accounts[2]});
		await contractBcAmaUU.setRefBonus.call(level1Y7Cr5Xn, level2ZBzHTBP, level3R8iXHxr, level42XaFJb, level51eMEX3, {from: accounts[4]});

		await expect(contractBcAmaUU.buy.call(valueDlHbdio, _ref1mUgL6be, _ref2GWUzc6O, _ref3uX2WCBR, _ref4QMQHn3, _ref5bMbhfka, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrswZTbJs = accounts[1]
		const FOSTERAddrPa0QGMF = "0x0000000000000000000000000000000000000001"
		const initialRateRTMcNoU = BigInt("1478")
		const initialPeriodBSv0XeF = BigInt("1706")
		const initialOwnerKewGCx = accounts[4]
		const contractcZzxRtc = await Reseller.new(USDTAddrswZTbJs, FOSTERAddrPa0QGMF, initialRateRTMcNoU, initialPeriodBSv0XeF, initialOwnerKewGCx, {from: accounts[5]});
		const _periodShCe1XM = BigInt("676")
		const amountV9MoS2N = BigInt("378")
		const recipientxpVf39 = "0x0000000000000000000000000000000000000001"
		const newFeeQirr14A = BigInt("144")
		const newFeePHT1JR8 = BigInt("81")
		await contractcZzxRtc.freezeAndTransfer.call(recipientxpVf39, amountV9MoS2N, _periodShCe1XM, {from: accounts[4]});
		await contractcZzxRtc.setFee.call(newFeeQirr14A, {from: accounts[0]});
		await contractcZzxRtc.setFee.call(newFeePHT1JR8, {from: accounts[0]});

		await expect(contractcZzxRtc.freezeAndTransfer.call(recipientxpVf39, amountV9MoS2N, _periodShCe1XM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrxzAwt89 = accounts[3]
		const FOSTERAddrtqfjSPZ = accounts[4]
		const initialRateNpMhxtz = BigInt("1782")
		const initialPeriodIjGOHDb = BigInt("855")
		const initialOwnerKr4J7hZ = accounts[3]
		const contractD8YvLeD = await Reseller.new(USDTAddrxzAwt89, FOSTERAddrtqfjSPZ, initialRateNpMhxtz, initialPeriodIjGOHDb, initialOwnerKr4J7hZ, {from: accounts[3]});
		const level5QfQIcwe = BigInt("112")
		const level4MaDtPkz = BigInt("127")
		const level3ukeWbg3 = BigInt("201")
		const level2hQDxRzi = BigInt("126")
		const level1FNMbZ7Z = BigInt("114")
		await contractD8YvLeD.switchState.call({from: accounts[0]});
		await contractD8YvLeD.setRefBonus.call(level1FNMbZ7Z, level2hQDxRzi, level3ukeWbg3, level4MaDtPkz, level5QfQIcwe, {from: accounts[4]});

		await expect(contractD8YvLeD.switchState.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr3hDQoD = accounts[3]
		const FOSTERAddrKRXeh6x = accounts[4]
		const initialRategVtqRh6 = BigInt("1782")
		const initialPeriodpwJGMKO = BigInt("855")
		const initialOwnerM3MN87 = accounts[3]
		const contractPthX2M7 = await Reseller.new(USDTAddr3hDQoD, FOSTERAddrKRXeh6x, initialRategVtqRh6, initialPeriodpwJGMKO, initialOwnerM3MN87, {from: accounts[3]});
		const newPeriodSUWkpb = BigInt("1980")
		const level5oG5Dx5B = BigInt("112")
		const level4LqzLeyW = BigInt("135")
		const level3d3PgQ6K = BigInt("211")
		const level2ziBn1u = BigInt("126")
		const level1oKi0DDq = BigInt("114")
		const newBoss4IrDLK4h = accounts[1]
		await contractPthX2M7.setPeriod.call(newPeriodSUWkpb, {from: accounts[3]});
		await contractPthX2M7.setRefBonus.call(level1oKi0DDq, level2ziBn1u, level3d3PgQ6K, level4LqzLeyW, level5oG5Dx5B, {from: accounts[4]});
		await contractPthX2M7.deposeBoss4.call(newBoss4IrDLK4h, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractPthX2M7.setPeriod.call(newPeriodSUWkpb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVofeykj = accounts[3]
		const FOSTERAddrCPq8N83 = accounts[4]
		const initialRateNifKj75 = BigInt("1782")
		const initialPeriodrMaYGPs = BigInt("855")
		const initialOwnerdJekuG0 = accounts[3]
		const contractF35OBmt = await Reseller.new(USDTAddrVofeykj, FOSTERAddrCPq8N83, initialRateNifKj75, initialPeriodrMaYGPs, initialOwnerdJekuG0, {from: accounts[3]});
		const newFeeLH4fhNi = BigInt("25")
		const newFeewnYfHvH = BigInt("176")
		const valuemBXydBx = BigInt("105")
		await contractF35OBmt.setFee.call(newFeeLH4fhNi, {from: accounts[3]});
		await contractF35OBmt.setFee.call(newFeewnYfHvH, {from: accounts[3]});
		await contractF35OBmt.withdraw.call(valuemBXydBx, {from: accounts[1]});

		await expect(contractF35OBmt.setFee.call(newFeeLH4fhNi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCtot5gX = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrDkDuTvD = accounts[4]
		const initialRateuY8lWiT = BigInt("1464")
		const initialPeriodhlFoTas = BigInt("642")
		const initialOwnery48AewH = accounts[4]
		const contractYczNNHQ = await Reseller.new(USDTAddrCtot5gX, FOSTERAddrDkDuTvD, initialRateuY8lWiT, initialPeriodhlFoTas, initialOwnery48AewH, {from: accounts[3]});
		const newMinimumCgnou9 = BigInt("1829")
		const newBoss2XKcDqm4 = accounts[4]
		const newBoss3gO0KAVf = accounts[3]
		await contractYczNNHQ.setMinimum.call(newMinimumCgnou9, {from: accounts[4]});
		await contractYczNNHQ.deposeBoss2.call(newBoss2XKcDqm4, {from: accounts[2]});
		await contractYczNNHQ.deposeBoss3.call(newBoss3gO0KAVf, {from: accounts[0]});

		await expect(contractYczNNHQ.setMinimum.call(newMinimumCgnou9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrZ4TbA4j = accounts[2]
		const FOSTERAddrxAMxaNW = accounts[1]
		const initialRatedzeWEu5 = BigInt("1748")
		const initialPeriodJysbjOf = BigInt("1866")
		const initialOwnerftMloqf = accounts[2]
		const contractD9jQy11 = await Reseller.new(USDTAddrZ4TbA4j, FOSTERAddrxAMxaNW, initialRatedzeWEu5, initialPeriodJysbjOf, initialOwnerftMloqf, {from: accounts[3]});
		const amountJTC6oFB = BigInt("196")
		const newMinimumIROeOgw = BigInt("1336")
		const nullQGOfD5B = await contractD9jQy11.getEstimation.call(amountJTC6oFB, {from: accounts[1]});
		await contractD9jQy11.setMinimum.call(newMinimumIROeOgw, {from: accounts[2]});

		assert.equal(nullQGOfD5B, 342608)
	});

	it('test for Reseller', async () => {
		const USDTAddrcFA0fh = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrvjPfcdK = accounts[4]
		const initialRateMuLMQ6Q = BigInt("1464")
		const initialPeriodo5YySiE = BigInt("642")
		const initialOwnerS002Xzk = accounts[4]
		const contractkUrvQX7 = await Reseller.new(USDTAddrcFA0fh, FOSTERAddrvjPfcdK, initialRateMuLMQ6Q, initialPeriodo5YySiE, initialOwnerS002Xzk, {from: accounts[3]});
		const commentE3kDguP = "jQLKoqAD5CHA1fIBNQgdqoBe5s3hbWWXI7vOHDyu"
		const _ref5lqDN3iY = accounts[0]
		const _ref4ruhKGFL = accounts[3]
		const _ref3KxOoMr1 = accounts[5]
		const _ref2K55IV2 = accounts[1]
		const _ref1qvZcBpR = accounts[0]
		const valueEnNtPdq = BigInt("725")
		const newBoss3JAhQp8T = accounts[3]
		const newBoss1pBtXiMN = accounts[0]
		await contractkUrvQX7.purchase.call(valueEnNtPdq, _ref1qvZcBpR, _ref2K55IV2, _ref3KxOoMr1, _ref4ruhKGFL, _ref5lqDN3iY, commentE3kDguP, {from: accounts[4]});
		await contractkUrvQX7.deposeBoss3.call(newBoss3JAhQp8T, {from: accounts[0]});
		await contractkUrvQX7.deposeBoss1.call(newBoss1pBtXiMN, {from: accounts[1]});

		await expect(contractkUrvQX7.purchase.call(valueEnNtPdq, _ref1qvZcBpR, _ref2K55IV2, _ref3KxOoMr1, _ref4ruhKGFL, _ref5lqDN3iY, commentE3kDguP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrN7Ka3SX = accounts[3]
		const FOSTERAddrIUeOUph = accounts[4]
		const initialRatepWo0tij = BigInt("1782")
		const initialPeriodgQrPGrZ = BigInt("855")
		const initialOwnerDMApeid = accounts[3]
		const contractKStvDF7 = await Reseller.new(USDTAddrN7Ka3SX, FOSTERAddrIUeOUph, initialRatepWo0tij, initialPeriodgQrPGrZ, initialOwnerDMApeid, {from: accounts[3]});
		const newBoss31WKClz = accounts[2]
		const valueIqyEpjL = BigInt("1298")
		await contractKStvDF7.deposeBoss3.call(newBoss31WKClz, {from: accounts[3]});
		await contractKStvDF7.withdraw.call(valueIqyEpjL, {from: accounts[1]});

		await expect(contractKStvDF7.deposeBoss3.call(newBoss31WKClz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrg87qPKV = accounts[0]
		const FOSTERAddrQqmtr2i = accounts[1]
		const initialRatefmqzp2 = BigInt("2002")
		const initialPeriodzlZCjHG = BigInt("1724")
		const initialOwnerN2YHELi = accounts[0]
		const contractluFoqiP = await Reseller.new(USDTAddrg87qPKV, FOSTERAddrQqmtr2i, initialRatefmqzp2, initialPeriodzlZCjHG, initialOwnerN2YHELi, {from: accounts[3]});
		const amountgtTiDrk = BigInt("1179")
		const newMinimumjSyIKlM = BigInt("426")
		const valuedhCEWQa = BigInt("1875")
		const nullpYGeLT = await contractluFoqiP.getEstimation.call(amountgtTiDrk, {from: accounts[2]});
		await contractluFoqiP.switchState.call({from: accounts[0]});
		await contractluFoqiP.setMinimum.call(newMinimumjSyIKlM, {from: accounts[1]});
		await contractluFoqiP.withdraw.call(valuedhCEWQa, {from: accounts[1]});

		assert.equal(nullpYGeLT, 2360358)
		await expect(contractluFoqiP.switchState.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})