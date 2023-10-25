const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddraiCyKwC = accounts[3]
		const FOSTERAddrpskybZ = accounts[3]
		const initialRateqjfEOWP = BigInt("1275")
		const initialPeriodprd0KKs = BigInt("632")
		const initialOwnercu2aTWs = accounts[1]
		const contracttRYfrfo = await Reseller.new(USDTAddraiCyKwC, FOSTERAddrpskybZ, initialRateqjfEOWP, initialPeriodprd0KKs, initialOwnercu2aTWs, {from: accounts[3]});
		const newFeex6NhDBe = BigInt("67")
		const amountDHOY63U = BigInt("1790")
		const _periodYleFePm = BigInt("1945")
		const amountPFuPeGY = BigInt("385")
		const recipientWOuqMb = accounts[0]
		await contracttRYfrfo.setFee.call(newFeex6NhDBe, {from: "0x0000000000000000000000000000000000000001"});
		const nullhPsm7E = await contracttRYfrfo.getEstimation.call(amountDHOY63U, {from: accounts[0]});
		await contracttRYfrfo.freezeAndTransfer.call(recipientWOuqMb, amountPFuPeGY, _periodYleFePm, {from: accounts[5]});

		await expect(contracttRYfrfo.setFee.call(newFeex6NhDBe, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrSONdi0 = accounts[3]
		const FOSTERAddr2BQqZF = accounts[4]
		const initialRateYBzkZLr = BigInt("395")
		const initialPeriodA0kiyPl = BigInt("519")
		const initialOwnerupQ9FOS = accounts[1]
		const contractojSuwY = await Reseller.new(USDTAddrSONdi0, FOSTERAddr2BQqZF, initialRateYBzkZLr, initialPeriodA0kiyPl, initialOwnerupQ9FOS, {from: accounts[4]});
		const valuestA8x0J = BigInt("1290")
		const newBoss4KAac7as = accounts[1]
		const newBoss4eUUboqj = accounts[1]
		await contractojSuwY.withdraw.call(valuestA8x0J, {from: accounts[5]});
		await contractojSuwY.deposeBoss4.call(newBoss4KAac7as, {from: accounts[1]});
		await contractojSuwY.deposeBoss4.call(newBoss4eUUboqj, {from: accounts[4]});

		await expect(contractojSuwY.withdraw.call(valuestA8x0J, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrPQo9HR1 = accounts[1]
		const FOSTERAddrO37Ifcu = accounts[0]
		const initialRateNb9HvOZ = BigInt("20")
		const initialPeriodmTVito = BigInt("1199")
		const initialOwnerVPGAuk = "0x0000000000000000000000000000000000000001"
		const contractBmcGTwY = await Reseller.new(USDTAddrPQo9HR1, FOSTERAddrO37Ifcu, initialRateNb9HvOZ, initialPeriodmTVito, initialOwnerVPGAuk, {from: accounts[5]});
		const newBoss3cLGJOo = accounts[2]
		const newRatedCdEdN = BigInt("86")
		const accountWjp8VQ5 = accounts[3]
		const newBoss2lFfBHr = "0x0000000000000000000000000000000000000001"
		const _ref5p6Pgjw = accounts[2]
		const _ref4D9V3TX = accounts[3]
		const _ref3OAUMiep = accounts[4]
		const _ref2m37QQPW = "0x0000000000000000000000000000000000000001"
		const _ref1T46dfRR = accounts[2]
		const valueaA5qIGT = BigInt("57")
		await contractBmcGTwY.deposeBoss3.call(newBoss3cLGJOo, {from: accounts[1]});
		await contractBmcGTwY.setRate.call(newRatedCdEdN, {from: "0x0000000000000000000000000000000000000001"});
		const nullJxKakKS = await contractBmcGTwY.allowanceFOSTER.call(accountWjp8VQ5, {from: "0x0000000000000000000000000000000000000001"});
		await contractBmcGTwY.deposeBoss2.call(newBoss2lFfBHr, {from: accounts[5]});
		await contractBmcGTwY.buy.call(valueaA5qIGT, _ref1T46dfRR, _ref2m37QQPW, _ref3OAUMiep, _ref4D9V3TX, _ref5p6Pgjw, {from: accounts[0]});

		await expect(contractBmcGTwY.deposeBoss3.call(newBoss3cLGJOo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCwMshsY = accounts[3]
		const FOSTERAddryJXpS2X = accounts[4]
		const initialRateFo9WFy = BigInt("1266")
		const initialPeriodhMFETYu = BigInt("892")
		const initialOwnerTxuALaQ = accounts[0]
		const contractfNLNUL = await Reseller.new(USDTAddrCwMshsY, FOSTERAddryJXpS2X, initialRateFo9WFy, initialPeriodhMFETYu, initialOwnerTxuALaQ, {from: accounts[2]});
		const newPeriodcN4deC = BigInt("1910")
		const newBoss2XlaVRPz = accounts[4]
		const level5IosR6uS = BigInt("159")
		const level4V99tV7m = BigInt("161")
		const level3C6Rk4dz = BigInt("27")
		const level2XvdsAaN = BigInt("89")
		const level1gAyPYQh = BigInt("75")
		const newBoss1kFFgGCZ = accounts[2]
		await contractfNLNUL.setPeriod.call(newPeriodcN4deC, {from: "0x0000000000000000000000000000000000000001"});
		await contractfNLNUL.deposeBoss2.call(newBoss2XlaVRPz, {from: "0x0000000000000000000000000000000000000001"});
		await contractfNLNUL.setRefBonus.call(level1gAyPYQh, level2XvdsAaN, level3C6Rk4dz, level4V99tV7m, level5IosR6uS, {from: accounts[0]});
		await contractfNLNUL.deposeBoss1.call(newBoss1kFFgGCZ, {from: accounts[3]});

		await expect(contractfNLNUL.setPeriod.call(newPeriodcN4deC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrszVhugg = accounts[2]
		const FOSTERAddrnPLTLTk = accounts[4]
		const initialRaterKfalNG = BigInt("279")
		const initialPeriodcoV6Huf = BigInt("783")
		const initialOwnerNGwwN9 = accounts[4]
		const contractoMXYngE = await Reseller.new(USDTAddrszVhugg, FOSTERAddrnPLTLTk, initialRaterKfalNG, initialPeriodcoV6Huf, initialOwnerNGwwN9, {from: accounts[1]});
		const accountLFUpDW6 = accounts[0]
		const level5TbsuN4 = BigInt("32")
		const level4bauAKaT = BigInt("31")
		const level3YC9sRrV = BigInt("217")
		const level2iCEGYX7 = BigInt("24")
		const level1Zqkm76W = BigInt("105")
		const valuedqiZClR = BigInt("29")
		const nullzDQdEfM = await contractoMXYngE.allowanceUSDT.call(accountLFUpDW6, {from: accounts[4]});
		await contractoMXYngE.setRefBonus.call(level1Zqkm76W, level2iCEGYX7, level3YC9sRrV, level4bauAKaT, level5TbsuN4, {from: accounts[1]});
		await contractoMXYngE.withdraw.call(valuedqiZClR, {from: accounts[0]});

		await expect(contractoMXYngE.allowanceUSDT.call(accountLFUpDW6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrNbfqwbJ = accounts[1]
		const FOSTERAddrXQ23Zu = accounts[2]
		const initialRateTs7sfa5 = BigInt("969")
		const initialPeriodL534crp = BigInt("905")
		const initialOwnerw24yfZS = accounts[1]
		const contractkxyfPca = await Reseller.new(USDTAddrNbfqwbJ, FOSTERAddrXQ23Zu, initialRateTs7sfa5, initialPeriodL534crp, initialOwnerw24yfZS, {from: accounts[4]});
		const accountOSlqSL8 = accounts[4]
		const valuegdmtNLS = BigInt("1235")
		const newBoss4jGNxWMB = "0x0000000000000000000000000000000000000001"
		const newBoss3XUiP3EK = accounts[3]
		const newRatepmWT56G = BigInt("386")
		const accountUlMziNH = accounts[0]
		const nullldD9MPg = await contractkxyfPca.balanceFOSTER.call(accountOSlqSL8, {from: accounts[0]});
		await contractkxyfPca.withdraw.call(valuegdmtNLS, {from: accounts[4]});
		await contractkxyfPca.deposeBoss4.call(newBoss4jGNxWMB, {from: "0x0000000000000000000000000000000000000001"});
		await contractkxyfPca.deposeBoss3.call(newBoss3XUiP3EK, {from: accounts[1]});
		await contractkxyfPca.setRate.call(newRatepmWT56G, {from: accounts[0]});
		const nulluQgvPE = await contractkxyfPca.allowanceUSDT.call(accountUlMziNH, {from: accounts[4]});

		await expect(contractkxyfPca.balanceFOSTER.call(accountOSlqSL8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrlh47U9D = accounts[0]
		const FOSTERAddrbuxB0EU = accounts[1]
		const initialRateWREkvDM = BigInt("2005")
		const initialPeriodeh47tog = BigInt("1857")
		const initialOwnerL8qRc2Q = accounts[3]
		const contractlmcDQX = await Reseller.new(USDTAddrlh47U9D, FOSTERAddrbuxB0EU, initialRateWREkvDM, initialPeriodeh47tog, initialOwnerL8qRc2Q, {from: accounts[4]});
		const newBoss1iv2ULEV = accounts[5]
		const amountZXIHtJ = BigInt("737")
		const newPeriodz03U8hc = BigInt("1341")
		await contractlmcDQX.deposeBoss1.call(newBoss1iv2ULEV, {from: accounts[4]});
		const nulls3Mu529 = await contractlmcDQX.getEstimation.call(amountZXIHtJ, {from: accounts[1]});
		await contractlmcDQX.setPeriod.call(newPeriodz03U8hc, {from: accounts[1]});
		await contractlmcDQX.switchState.call({from: accounts[3]});

		await expect(contractlmcDQX.deposeBoss1.call(newBoss1iv2ULEV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdjCiWW7 = accounts[4]
		const FOSTERAddryieLiiU = accounts[3]
		const initialRateGaRQ1w7 = BigInt("387")
		const initialPeriodTwGDD9l = BigInt("1127")
		const initialOwnertqAGJs = accounts[0]
		const contractIbJGm7T = await Reseller.new(USDTAddrdjCiWW7, FOSTERAddryieLiiU, initialRateGaRQ1w7, initialPeriodTwGDD9l, initialOwnertqAGJs, {from: accounts[0]});
		const level5DSAwqOV = BigInt("181")
		const level4cyPNpYc = BigInt("252")
		const level3EOh0Xt5 = BigInt("76")
		const level2xk70Mq = BigInt("171")
		const level1umRI6v7 = BigInt("236")
		const newMinimumdCaVFZr = BigInt("833")
		const newMinimumS3EMHWW = BigInt("703")
		const newBoss3yWuAYnM = accounts[0]
		await contractIbJGm7T.setRefBonus.call(level1umRI6v7, level2xk70Mq, level3EOh0Xt5, level4cyPNpYc, level5DSAwqOV, {from: accounts[4]});
		await contractIbJGm7T.setMinimum.call(newMinimumdCaVFZr, {from: accounts[3]});
		await contractIbJGm7T.setMinimum.call(newMinimumS3EMHWW, {from: accounts[4]});
		await contractIbJGm7T.deposeBoss3.call(newBoss3yWuAYnM, {from: accounts[5]});

		await expect(contractIbJGm7T.setRefBonus.call(level1umRI6v7, level2xk70Mq, level3EOh0Xt5, level4cyPNpYc, level5DSAwqOV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrV4MOXFJ = accounts[3]
		const FOSTERAddrs7dEtz = accounts[3]
		const initialRateXhircgF = BigInt("1275")
		const initialPerioduxzQ4ou = BigInt("632")
		const initialOwnerplTfChQ = accounts[1]
		const contractoOpllso = await Reseller.new(USDTAddrV4MOXFJ, FOSTERAddrs7dEtz, initialRateXhircgF, initialPerioduxzQ4ou, initialOwnerplTfChQ, {from: accounts[3]});
		const newRateMgp7si3 = BigInt("1292")
		const newFeeslNG2GF = BigInt("67")
		const newRateybqqIE = BigInt("283")
		const amountP8J8hXR = BigInt("1790")
		const _periodqnbHXkB = BigInt("1945")
		const amountbMHozME = BigInt("385")
		const recipientBNUrqjk = accounts[1]
		await contractoOpllso.setRate.call(newRateMgp7si3, {from: accounts[3]});
		await contractoOpllso.setFee.call(newFeeslNG2GF, {from: "0x0000000000000000000000000000000000000001"});
		await contractoOpllso.setRate.call(newRateybqqIE, {from: accounts[3]});
		const nullgaB2YnB = await contractoOpllso.getEstimation.call(amountP8J8hXR, {from: accounts[0]});
		await contractoOpllso.freezeAndTransfer.call(recipientBNUrqjk, amountbMHozME, _periodqnbHXkB, {from: accounts[5]});

		await expect(contractoOpllso.setRate.call(newRateMgp7si3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrs0Z7lm = accounts[1]
		const FOSTERAddrFOKJY0Y = accounts[0]
		const initialRateMfX476 = BigInt("20")
		const initialPeriodKOCn0n = BigInt("1199")
		const initialOwneroMfiJPW = "0x0000000000000000000000000000000000000001"
		const contractwZvEHKG = await Reseller.new(USDTAddrs0Z7lm, FOSTERAddrFOKJY0Y, initialRateMfX476, initialPeriodKOCn0n, initialOwneroMfiJPW, {from: accounts[5]});
		const _ref5VkDdwAj = accounts[4]
		const _ref4h5Zdyo8 = accounts[2]
		const _ref3EsrSdCr = accounts[5]
		const _ref2qJTN3JQ = accounts[4]
		const _ref1MROc1NP = accounts[2]
		const valuegwyFVw = BigInt("2041")
		const newBoss301VaZD = accounts[2]
		const amountNeAAG6Y = BigInt("1161")
		const newRateaJ28CgD = BigInt("86")
		const accountm7oF0ch = accounts[4]
		const newBoss2DrTE0jo = "0x0000000000000000000000000000000000000001"
		const _ref5xANa88h = accounts[2]
		const _ref4J3rPE7g = accounts[3]
		const _ref3KlGCdq3 = accounts[4]
		const _ref2iJ521AK = "0x0000000000000000000000000000000000000001"
		const _ref1qrpIPQ = accounts[2]
		const valuey9z4eIG = BigInt("57")
		await contractwZvEHKG.buy.call(valuegwyFVw, _ref1MROc1NP, _ref2qJTN3JQ, _ref3EsrSdCr, _ref4h5Zdyo8, _ref5VkDdwAj, {from: accounts[2]});
		await contractwZvEHKG.deposeBoss3.call(newBoss301VaZD, {from: accounts[1]});
		const nullwzAitxf = await contractwZvEHKG.getEstimation.call(amountNeAAG6Y, {from: accounts[4]});
		await contractwZvEHKG.setRate.call(newRateaJ28CgD, {from: "0x0000000000000000000000000000000000000001"});
		const nullGjvSxfA = await contractwZvEHKG.allowanceFOSTER.call(accountm7oF0ch, {from: "0x0000000000000000000000000000000000000001"});
		await contractwZvEHKG.deposeBoss2.call(newBoss2DrTE0jo, {from: accounts[5]});
		await contractwZvEHKG.buy.call(valuey9z4eIG, _ref1qrpIPQ, _ref2iJ521AK, _ref3KlGCdq3, _ref4J3rPE7g, _ref5xANa88h, {from: accounts[0]});

		await expect(contractwZvEHKG.buy.call(valuegwyFVw, _ref1MROc1NP, _ref2qJTN3JQ, _ref3EsrSdCr, _ref4h5Zdyo8, _ref5VkDdwAj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrIKI4gef = accounts[4]
		const FOSTERAddr6yMt9W = accounts[2]
		const initialRatel2KV2vx = BigInt("692")
		const initialPeriodvgGW547 = BigInt("1399")
		const initialOwnerHHXXnqm = accounts[1]
		const contractz1AJcAK = await Reseller.new(USDTAddrIKI4gef, FOSTERAddr6yMt9W, initialRatel2KV2vx, initialPeriodvgGW547, initialOwnerHHXXnqm, {from: accounts[1]});
		const accountvUzQfaf = accounts[2]
		const newMinimumJezvqta = BigInt("762")
		const accountmQZZx9m = accounts[4]
		const amounteSwkmjR = BigInt("912")
		const nullwOPHK8r = await contractz1AJcAK.allowanceFOSTER.call(accountvUzQfaf, {from: accounts[5]});
		await contractz1AJcAK.setMinimum.call(newMinimumJezvqta, {from: accounts[4]});
		const nullN5ly5Qp = await contractz1AJcAK.balanceUSDT.call(accountmQZZx9m, {from: accounts[5]});
		const nullbaOJNAW = await contractz1AJcAK.getEstimation.call(amounteSwkmjR, {from: accounts[4]});

		await expect(contractz1AJcAK.allowanceFOSTER.call(accountvUzQfaf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddruz23Ys = accounts[1]
		const FOSTERAddrKHL3TRr = accounts[0]
		const initialRateLKMKjSw = BigInt("20")
		const initialPeriodqvZrOx5 = BigInt("1199")
		const initialOwnerXddewle = "0x0000000000000000000000000000000000000001"
		const contractKaulsBd = await Reseller.new(USDTAddruz23Ys, FOSTERAddrKHL3TRr, initialRateLKMKjSw, initialPeriodqvZrOx5, initialOwnerXddewle, {from: accounts[5]});
		const newRateEnXActO = BigInt("86")
		const accountBkD6thg = accounts[3]
		const newBoss2ZAPZidU = "0x0000000000000000000000000000000000000001"
		const _ref5NlZ2wKb = accounts[2]
		const _ref4VRbg3wJ = accounts[3]
		const _ref3KCI1gl0 = accounts[4]
		const _ref2aPUzyGt = "0x0000000000000000000000000000000000000001"
		const _ref1tTSg11B = accounts[2]
		const valuemnL1vkG = BigInt("57")
		await contractKaulsBd.setRate.call(newRateEnXActO, {from: "0x0000000000000000000000000000000000000001"});
		const nullV3Z5ZW = await contractKaulsBd.allowanceFOSTER.call(accountBkD6thg, {from: "0x0000000000000000000000000000000000000001"});
		await contractKaulsBd.deposeBoss2.call(newBoss2ZAPZidU, {from: accounts[5]});
		await contractKaulsBd.buy.call(valuemnL1vkG, _ref1tTSg11B, _ref2aPUzyGt, _ref3KCI1gl0, _ref4VRbg3wJ, _ref5NlZ2wKb, {from: accounts[0]});

		await expect(contractKaulsBd.setRate.call(newRateEnXActO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrZ3ogZtH = accounts[3]
		const FOSTERAddrZegUDPQ = accounts[3]
		const initialRatey0eCjMC = BigInt("1275")
		const initialPeriodAu26Wie = BigInt("632")
		const initialOwnerp0kG7kW = accounts[1]
		const contractRS32KI0 = await Reseller.new(USDTAddrZ3ogZtH, FOSTERAddrZegUDPQ, initialRatey0eCjMC, initialPeriodAu26Wie, initialOwnerp0kG7kW, {from: accounts[3]});
		const accountEvk2Ev3 = accounts[3]
		const newFeeENW5x7X = BigInt("67")
		const amountCx47aRj = BigInt("1784")
		const nulltdvcL1O = await contractRS32KI0.balanceUSDT.call(accountEvk2Ev3, {from: accounts[0]});
		await contractRS32KI0.setFee.call(newFeeENW5x7X, {from: "0x0000000000000000000000000000000000000001"});
		const nullfGP8D6E = await contractRS32KI0.getEstimation.call(amountCx47aRj, {from: accounts[0]});

		await expect(contractRS32KI0.balanceUSDT.call(accountEvk2Ev3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddres4oWaf = accounts[1]
		const FOSTERAddrUh5oxQK = "0x0000000000000000000000000000000000000001"
		const initialRatef9oLGFa = BigInt("854")
		const initialPeriodoEkn2KC = BigInt("1945")
		const initialOwnerryuWbtk = accounts[0]
		const contractyyvJTRu = await Reseller.new(USDTAddres4oWaf, FOSTERAddrUh5oxQK, initialRatef9oLGFa, initialPeriodoEkn2KC, initialOwnerryuWbtk, {from: accounts[3]});
		const commentDcDZbjw = "z12ItML53RQ"
		const _ref5iIv7L7 = accounts[3]
		const _ref4ubOxga2 = accounts[3]
		const _ref37gnEhG = accounts[4]
		const _ref2s0kpLDH = accounts[1]
		const _ref1e7m6TsN = accounts[5]
		const valuef1BOlEW = BigInt("546")
		const commentcnm8X02 = "H9PXt0fxv4YYNPDa1f2RbCBr4Rk4xeRn6I9XnuDo73rUmxzigebwNMpUelTDz2PY1w"
		const _ref5KwgEe02 = accounts[4]
		const _ref4DEctCuS = accounts[2]
		const _ref3wwGP3E = "0x0000000000000000000000000000000000000001"
		const _ref2BZEEn7V = accounts[3]
		const _ref1ADC52xx = accounts[3]
		const valueYnPypfT = BigInt("1977")
		const valuehHNjoeU = BigInt("1766")
		const recipienttPOHhYd = accounts[1]
		const ERC20TokenHe59XQj = accounts[1]
		const value1mcjvs = BigInt("1546")
		await contractyyvJTRu.purchase.call(valuef1BOlEW, _ref1e7m6TsN, _ref2s0kpLDH, _ref37gnEhG, _ref4ubOxga2, _ref5iIv7L7, commentDcDZbjw, {from: accounts[3]});
		await contractyyvJTRu.purchase.call(valueYnPypfT, _ref1ADC52xx, _ref2BZEEn7V, _ref3wwGP3E, _ref4DEctCuS, _ref5KwgEe02, commentcnm8X02, {from: accounts[1]});
		await contractyyvJTRu.withdrawERC20.call(ERC20TokenHe59XQj, recipienttPOHhYd, valuehHNjoeU, {from: accounts[0]});
		await contractyyvJTRu.withdraw.call(value1mcjvs, {from: accounts[3]});
		await contractyyvJTRu.switchState.call({from: accounts[1]});

		await expect(contractyyvJTRu.purchase.call(valuef1BOlEW, _ref1e7m6TsN, _ref2s0kpLDH, _ref37gnEhG, _ref4ubOxga2, _ref5iIv7L7, commentDcDZbjw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrdDmFmH0 = accounts[3]
		const FOSTERAddraX33iWf = accounts[3]
		const initialRateitiWvg = BigInt("1275")
		const initialPeriodQR9Opf0 = BigInt("632")
		const initialOwnerP24LMee = accounts[1]
		const contractnQ1CT8 = await Reseller.new(USDTAddrdDmFmH0, FOSTERAddraX33iWf, initialRateitiWvg, initialPeriodQR9Opf0, initialOwnerP24LMee, {from: accounts[3]});
		const valueN1km0ax = BigInt("747")
		const recipientWa0LGuE = accounts[2]
		const ERC20TokenirTe8we = accounts[1]
		const newFeeiHfGVuy = BigInt("198")
		const newRateVooxEBl = BigInt("1370")
		await contractnQ1CT8.withdrawERC20.call(ERC20TokenirTe8we, recipientWa0LGuE, valueN1km0ax, {from: accounts[0]});
		await contractnQ1CT8.setFee.call(newFeeiHfGVuy, {from: "0x0000000000000000000000000000000000000001"});
		await contractnQ1CT8.setRate.call(newRateVooxEBl, {from: accounts[1]});

		await expect(contractnQ1CT8.withdrawERC20.call(ERC20TokenirTe8we, recipientWa0LGuE, valueN1km0ax, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrYrRIq4f = accounts[3]
		const FOSTERAddrAn5rYTn = accounts[3]
		const initialRated0M16c = BigInt("1275")
		const initialPeriodteMHtVe = BigInt("632")
		const initialOwnerBOSrft4 = accounts[1]
		const contractOnmG1df = await Reseller.new(USDTAddrYrRIq4f, FOSTERAddrAn5rYTn, initialRated0M16c, initialPeriodteMHtVe, initialOwnerBOSrft4, {from: accounts[3]});
		const amountwpkJa9L = BigInt("1818")
		const accountoI6KqH5 = accounts[5]
		const level5g9Nx7uD = BigInt("206")
		const level4N5Hbe0 = BigInt("230")
		const level3LNowVhv = BigInt("8")
		const level2PEsQ2nP = BigInt("78")
		const level1sKkrOD1 = BigInt("169")
		const nullK5cizI7 = await contractOnmG1df.getEstimation.call(amountwpkJa9L, {from: accounts[0]});
		const nullodIVDK = await contractOnmG1df.allowanceFOSTER.call(accountoI6KqH5, {from: accounts[1]});
		await contractOnmG1df.setRefBonus.call(level1sKkrOD1, level2PEsQ2nP, level3LNowVhv, level4N5Hbe0, level5g9Nx7uD, {from: accounts[4]});

		assert.equal(nullK5cizI7, 2317950)
		await expect(contractOnmG1df.allowanceFOSTER.call(accountoI6KqH5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddryPJ0X4h = accounts[3]
		const FOSTERAddrFffZ45 = accounts[3]
		const initialRateOooXHmh = BigInt("1275")
		const initialPeriodFG3A55P = BigInt("632")
		const initialOwnerkjsbQvH = accounts[1]
		const contractgPrXwzz = await Reseller.new(USDTAddryPJ0X4h, FOSTERAddrFffZ45, initialRateOooXHmh, initialPeriodFG3A55P, initialOwnerkjsbQvH, {from: accounts[3]});
		const _periodi8rI1SG = BigInt("1766")
		const amountKm2qRzl = BigInt("551")
		const recipientZHhksrQ = accounts[2]
		const newFeewm2hhEo = BigInt("55")
		await contractgPrXwzz.freezeAndTransfer.call(recipientZHhksrQ, amountKm2qRzl, _periodi8rI1SG, {from: accounts[4]});
		await contractgPrXwzz.setFee.call(newFeewm2hhEo, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractgPrXwzz.freezeAndTransfer.call(recipientZHhksrQ, amountKm2qRzl, _periodi8rI1SG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrBYNZW9t = accounts[4]
		const FOSTERAddrunGDYyM = accounts[0]
		const initialRatedE3pZnL = BigInt("1069")
		const initialPeriodiAfBRa1 = BigInt("510")
		const initialOwnerO2S3mRD = accounts[2]
		const contractCRTCW93 = await Reseller.new(USDTAddrBYNZW9t, FOSTERAddrunGDYyM, initialRatedE3pZnL, initialPeriodiAfBRa1, initialOwnerO2S3mRD, {from: accounts[2]});
		const newFeeJOSdI0x = BigInt("33")
		const level5tu2tCt8 = BigInt("156")
		const level4UnK7G9 = BigInt("170")
		const level3xpHCA8r = BigInt("91")
		const level2zm04CWy = BigInt("15")
		const level1WXdM369 = BigInt("179")
		const commentgsAMhGJ = "8JhqRysI8rva1xi9HfUou7fyid3qODXRimJgAUSU1oxFzx3t2v6z3WA6uRjkwdKalUIYCBTERzjUWQ2c5RHs9hakn2fV"
		const _ref5m0hIwxN = accounts[1]
		const _ref4aJnDfvZ = accounts[0]
		const _ref3EDxyJK = accounts[1]
		const _ref2iS5latg = accounts[0]
		const _ref1zs6Wgvp = accounts[2]
		const valueESLrBdB = BigInt("637")
		const amountW22slg7 = BigInt("1626")
		await contractCRTCW93.setFee.call(newFeeJOSdI0x, {from: accounts[2]});
		await contractCRTCW93.switchState.call({from: accounts[1]});
		await contractCRTCW93.setRefBonus.call(level1WXdM369, level2zm04CWy, level3xpHCA8r, level4UnK7G9, level5tu2tCt8, {from: accounts[5]});
		await contractCRTCW93.purchase.call(valueESLrBdB, _ref1zs6Wgvp, _ref2iS5latg, _ref3EDxyJK, _ref4aJnDfvZ, _ref5m0hIwxN, commentgsAMhGJ, {from: accounts[3]});
		const nullg3d7spM = await contractCRTCW93.getEstimation.call(amountW22slg7, {from: accounts[0]});

		await expect(contractCRTCW93.setFee.call(newFeeJOSdI0x, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrMdCNOi = accounts[2]
		const FOSTERAddrvKrdE6X = accounts[5]
		const initialRateZesIIZ1 = BigInt("1226")
		const initialPeriodjVGsiOL = BigInt("1445")
		const initialOwnerusgGOg = accounts[3]
		const contractuaefyEV = await Reseller.new(USDTAddrMdCNOi, FOSTERAddrvKrdE6X, initialRateZesIIZ1, initialPeriodjVGsiOL, initialOwnerusgGOg, {from: accounts[4]});
		const newBoss4HC0BcKK = accounts[4]
		const valueEboNdTE = BigInt("1619")
		const recipientZx3k4G9 = accounts[5]
		const ERC20TokenpZB9Uv = accounts[1]
		const valueXC18UiN = BigInt("1637")
		const recipientB6BXKjR = "0x0000000000000000000000000000000000000001"
		const ERC20Tokenf3w0xKZ = accounts[4]
		const newBoss2EO4JV3f = accounts[1]
		const amounthKhyckL = BigInt("1517")
		await contractuaefyEV.deposeBoss4.call(newBoss4HC0BcKK, {from: accounts[3]});
		await contractuaefyEV.withdrawERC20.call(ERC20TokenpZB9Uv, recipientZx3k4G9, valueEboNdTE, {from: "0x0000000000000000000000000000000000000001"});
		await contractuaefyEV.withdrawERC20.call(ERC20Tokenf3w0xKZ, recipientB6BXKjR, valueXC18UiN, {from: accounts[1]});
		await contractuaefyEV.deposeBoss2.call(newBoss2EO4JV3f, {from: accounts[4]});
		const nullIDcIuG = await contractuaefyEV.getEstimation.call(amounthKhyckL, {from: accounts[2]});

		await expect(contractuaefyEV.deposeBoss4.call(newBoss4HC0BcKK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrFIPTslH = accounts[0]
		const FOSTERAddrFqk8Aa1 = "0x0000000000000000000000000000000000000001"
		const initialRateClOSsn = BigInt("779")
		const initialPeriodqU9jYP9 = BigInt("250")
		const initialOwneruzaNr9e = accounts[2]
		const contractKCCw45 = await Reseller.new(USDTAddrFIPTslH, FOSTERAddrFqk8Aa1, initialRateClOSsn, initialPeriodqU9jYP9, initialOwneruzaNr9e, {from: "0x0000000000000000000000000000000000000001"});
		const valuefIUihit = BigInt("1588")
		const recipientMwhac8u = accounts[2]
		const ERC20TokenG5r5xIV = accounts[1]
		const amountUn3RylD = BigInt("1930")
		const valueq8iJET = BigInt("428")
		const recipientzVIR4Nj = accounts[5]
		const ERC20TokenKx7WGPQ = accounts[3]
		await contractKCCw45.switchState.call({from: accounts[3]});
		await contractKCCw45.withdrawERC20.call(ERC20TokenG5r5xIV, recipientMwhac8u, valuefIUihit, {from: accounts[3]});
		const nullVVoM3t = await contractKCCw45.getEstimation.call(amountUn3RylD, {from: accounts[3]});
		await contractKCCw45.withdrawERC20.call(ERC20TokenKx7WGPQ, recipientzVIR4Nj, valueq8iJET, {from: accounts[0]});
	});

	it('test for Reseller', async () => {
		const USDTAddr36Z9mc = accounts[3]
		const FOSTERAddrxtRRVQr = accounts[4]
		const initialRateniOCijn = BigInt("1266")
		const initialPeriodXWyAajD = BigInt("892")
		const initialOwnerTmqJ4Ul = accounts[0]
		const contractdiUdRSF = await Reseller.new(USDTAddr36Z9mc, FOSTERAddrxtRRVQr, initialRateniOCijn, initialPeriodXWyAajD, initialOwnerTmqJ4Ul, {from: accounts[2]});
		const newBoss2zuBTPjf = accounts[4]
		const newBoss1XD4MsmH = accounts[2]
		const newFeeGsv90zd = BigInt("76")
		await contractdiUdRSF.deposeBoss2.call(newBoss2zuBTPjf, {from: "0x0000000000000000000000000000000000000001"});
		await contractdiUdRSF.deposeBoss1.call(newBoss1XD4MsmH, {from: accounts[3]});
		await contractdiUdRSF.setFee.call(newFeeGsv90zd, {from: accounts[0]});

		await expect(contractdiUdRSF.deposeBoss2.call(newBoss2zuBTPjf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrunEmmd8 = accounts[3]
		const FOSTERAddraEhCTRz = accounts[3]
		const initialRateGVRVBb2 = BigInt("1275")
		const initialPeriodb1GENCA = BigInt("632")
		const initialOwnerdG2LCHs = accounts[1]
		const contractNqRxm2D = await Reseller.new(USDTAddrunEmmd8, FOSTERAddraEhCTRz, initialRateGVRVBb2, initialPeriodb1GENCA, initialOwnerdG2LCHs, {from: accounts[3]});
		const _periodvnCRFcD = BigInt("104")
		const amountkqjjF2R = BigInt("1952")
		const recipienty6KP3iS = accounts[0]
		const _period9mweX5 = BigInt("1766")
		const amountyCWJffP = BigInt("522")
		const recipienttIJ6eQQ = accounts[2]
		const newFeeR80KXQ = BigInt("55")
		await contractNqRxm2D.freezeAndTransfer.call(recipienty6KP3iS, amountkqjjF2R, _periodvnCRFcD, {from: accounts[1]});
		await contractNqRxm2D.freezeAndTransfer.call(recipienttIJ6eQQ, amountyCWJffP, _period9mweX5, {from: accounts[4]});
		await contractNqRxm2D.setFee.call(newFeeR80KXQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractNqRxm2D.freezeAndTransfer.call(recipienty6KP3iS, amountkqjjF2R, _periodvnCRFcD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddruC7HDIS = accounts[1]
		const FOSTERAddrAMwjZpz = accounts[3]
		const initialRatemP1hRj7 = BigInt("1314")
		const initialPeriodubiZ22T = BigInt("191")
		const initialOwnerOcScQis = accounts[0]
		const contractl25RUgt = await Reseller.new(USDTAddruC7HDIS, FOSTERAddrAMwjZpz, initialRatemP1hRj7, initialPeriodubiZ22T, initialOwnerOcScQis, {from: accounts[0]});
		const level5oLNIizL = BigInt("235")
		const level4kUuGOm9 = BigInt("160")
		const level3qwjonsQ = BigInt("187")
		const level2M3mW4Vq = BigInt("198")
		const level1fbL6kQA = BigInt("133")
		const newMinimumuhNrPeZ = BigInt("1910")
		const valueoylKRzK = BigInt("424")
		const recipientDxEonO5 = accounts[4]
		const ERC20TokenenQKTZu = accounts[2]
		await contractl25RUgt.setRefBonus.call(level1fbL6kQA, level2M3mW4Vq, level3qwjonsQ, level4kUuGOm9, level5oLNIizL, {from: accounts[0]});
		await contractl25RUgt.setMinimum.call(newMinimumuhNrPeZ, {from: accounts[0]});
		await contractl25RUgt.withdrawERC20.call(ERC20TokenenQKTZu, recipientDxEonO5, valueoylKRzK, {from: accounts[0]});

		await expect(contractl25RUgt.setRefBonus.call(level1fbL6kQA, level2M3mW4Vq, level3qwjonsQ, level4kUuGOm9, level5oLNIizL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddry0y7CbD = accounts[2]
		const FOSTERAddrXlJnNDL = accounts[2]
		const initialRateVH5orQ7 = BigInt("613")
		const initialPerioduhjfvQC = BigInt("792")
		const initialOwnerYGVYWV8 = accounts[4]
		const contractHgbBdgB = await Reseller.new(USDTAddry0y7CbD, FOSTERAddrXlJnNDL, initialRateVH5orQ7, initialPerioduhjfvQC, initialOwnerYGVYWV8, {from: accounts[4]});
		const accountlsn4kiT = accounts[2]
		const newBoss1A8di4RL = accounts[5]
		await contractHgbBdgB.switchState.call({from: accounts[4]});
		const nullMY1z0sI = await contractHgbBdgB.allowanceUSDT.call(accountlsn4kiT, {from: accounts[4]});
		await contractHgbBdgB.deposeBoss1.call(newBoss1A8di4RL, {from: accounts[4]});

		await expect(contractHgbBdgB.switchState.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDGAASq = accounts[3]
		const FOSTERAddrekVXkBc = accounts[4]
		const initialRateNIWvrRg = BigInt("394")
		const initialPeriodcatSxxx = BigInt("2010")
		const initialOwnerMuOCAvM = accounts[3]
		const contractFc1QOEB = await Reseller.new(USDTAddrDGAASq, FOSTERAddrekVXkBc, initialRateNIWvrRg, initialPeriodcatSxxx, initialOwnerMuOCAvM, {from: accounts[1]});
		const newBoss3Pp6uWvO = "0x0000000000000000000000000000000000000001"
		const newMinimumrbnUmL = BigInt("667")
		const newBoss1rhxp75L = accounts[1]
		const accountzYDZMah = accounts[3]
		const commentYojHeU = "x"
		const _ref5Jez0xkW = accounts[1]
		const _ref4L7iUdz5 = accounts[0]
		const _ref3d5JY1dp = accounts[0]
		const _ref2rfJhb39 = accounts[2]
		const _ref1mLhlzdZ = accounts[0]
		const valueKam1JHh = BigInt("450")
		await contractFc1QOEB.deposeBoss3.call(newBoss3Pp6uWvO, {from: accounts[3]});
		await contractFc1QOEB.setMinimum.call(newMinimumrbnUmL, {from: accounts[1]});
		await contractFc1QOEB.switchState.call({from: accounts[0]});
		await contractFc1QOEB.deposeBoss1.call(newBoss1rhxp75L, {from: "0x0000000000000000000000000000000000000001"});
		const nullUy7VyQi = await contractFc1QOEB.balanceFOSTER.call(accountzYDZMah, {from: accounts[0]});
		await contractFc1QOEB.purchase.call(valueKam1JHh, _ref1mLhlzdZ, _ref2rfJhb39, _ref3d5JY1dp, _ref4L7iUdz5, _ref5Jez0xkW, commentYojHeU, {from: accounts[1]});

		await expect(contractFc1QOEB.deposeBoss3.call(newBoss3Pp6uWvO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDjg4WaI = accounts[2]
		const FOSTERAddrAVX2ubS = accounts[2]
		const initialRateREPSOkk = BigInt("613")
		const initialPeriodrqYKb3 = BigInt("792")
		const initialOwnerAwWroHg = accounts[4]
		const contractN46doyW = await Reseller.new(USDTAddrDjg4WaI, FOSTERAddrAVX2ubS, initialRateREPSOkk, initialPeriodrqYKb3, initialOwnerAwWroHg, {from: accounts[4]});
		const newPeriodwR6bWdg = BigInt("1901")
		const newBoss1SrYWInZ = accounts[4]
		await contractN46doyW.setPeriod.call(newPeriodwR6bWdg, {from: accounts[4]});
		await contractN46doyW.deposeBoss1.call(newBoss1SrYWInZ, {from: accounts[4]});

		await expect(contractN46doyW.setPeriod.call(newPeriodwR6bWdg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr8bUK4R = accounts[2]
		const FOSTERAddrZiDWwO = accounts[2]
		const initialRateV65RwIp = BigInt("613")
		const initialPeriody4GdIu0 = BigInt("792")
		const initialOwnernuejPA9 = accounts[4]
		const contractSqC3g1 = await Reseller.new(USDTAddr8bUK4R, FOSTERAddrZiDWwO, initialRateV65RwIp, initialPeriody4GdIu0, initialOwnernuejPA9, {from: accounts[4]});
		const newPeriodohV9Db = BigInt("1901")
		const amountgHOXx80 = BigInt("583")
		const commentY3ot2bm = "SnTrgxDP0vcD2uNLah2NHbgEm2uVhjmQBVBfc99jKbiDL3NUsnJuDCeaEm41vjWGDzq5VlIpDLCG6QTqzLVRYgCNU30w"
		const _ref5cSv8BcP = accounts[2]
		const _ref4zfBx1G = accounts[4]
		const _ref3C20T5t1 = accounts[2]
		const _ref2EJtNOvp = accounts[3]
		const _ref1SNaJSH = accounts[0]
		const valueMi3DfFZ = BigInt("932")
		const newBoss1KYaOhnr = accounts[1]
		const newBoss1MwNemD = accounts[4]
		await contractSqC3g1.setPeriod.call(newPeriodohV9Db, {from: accounts[4]});
		const nullUdGZmDc = await contractSqC3g1.getEstimation.call(amountgHOXx80, {from: "0x0000000000000000000000000000000000000001"});
		await contractSqC3g1.purchase.call(valueMi3DfFZ, _ref1SNaJSH, _ref2EJtNOvp, _ref3C20T5t1, _ref4zfBx1G, _ref5cSv8BcP, commentY3ot2bm, {from: accounts[4]});
		await contractSqC3g1.deposeBoss1.call(newBoss1KYaOhnr, {from: accounts[3]});
		await contractSqC3g1.deposeBoss1.call(newBoss1MwNemD, {from: accounts[4]});

		assert.equal(nullUdGZmDc, 357379)
		await expect(contractSqC3g1.getEstimation.call(amountgHOXx80, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})