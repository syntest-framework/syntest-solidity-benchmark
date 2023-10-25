const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrPJAnMQH = accounts[4]
		const FOSTERAddrnqg782C = accounts[1]
		const initialRatech4Q5eX = BigInt("1502")
		const initialPeriod4eUlHT = BigInt("22")
		const initialOwnerxG0QfyB = accounts[4]
		const contractL9lni3k = await Reseller.new(USDTAddrPJAnMQH, FOSTERAddrnqg782C, initialRatech4Q5eX, initialPeriod4eUlHT, initialOwnerxG0QfyB, {from: accounts[1]});
		const level5BfCOFcs = BigInt("26")
		const level4Tqe8Pr3 = BigInt("188")
		const level3jRZPo6M = BigInt("78")
		const level2cH7jxO = BigInt("135")
		const level1FrbAGcM = BigInt("23")
		const newBoss4p20TVXJ = accounts[0]
		const newMinimumhCrhdG = BigInt("516")
		await contractL9lni3k.setRefBonus.call(level1FrbAGcM, level2cH7jxO, level3jRZPo6M, level4Tqe8Pr3, level5BfCOFcs, {from: accounts[1]});
		await contractL9lni3k.deposeBoss4.call(newBoss4p20TVXJ, {from: accounts[3]});
		await contractL9lni3k.setMinimum.call(newMinimumhCrhdG, {from: accounts[5]});

		await expect(contractL9lni3k.setRefBonus.call(level1FrbAGcM, level2cH7jxO, level3jRZPo6M, level4Tqe8Pr3, level5BfCOFcs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrn1Blvq = accounts[4]
		const FOSTERAddrarQlExa = accounts[1]
		const initialRateBhDLW1c = BigInt("687")
		const initialPeriodCopsZta = BigInt("1148")
		const initialOwnertwZWxdA = accounts[4]
		const contractS6q6FoC = await Reseller.new(USDTAddrn1Blvq, FOSTERAddrarQlExa, initialRateBhDLW1c, initialPeriodCopsZta, initialOwnertwZWxdA, {from: "0x0000000000000000000000000000000000000001"});
		const accountjOP8ex7 = accounts[1]
		const valuepA79b73 = BigInt("706")
		const newBoss3yaVpD9g = accounts[4]
		const commentfKDXv7Q = "4lqcWrfC"
		const _ref5Q5j1A65 = accounts[2]
		const _ref42qt02c = accounts[2]
		const _ref3MU9kyTY = accounts[2]
		const _ref24NpSd2 = accounts[2]
		const _ref1BpME6dU = accounts[1]
		const valueGBBhvf = BigInt("444")
		const newBoss4Y3qWhfJ = accounts[1]
		const nullk2VJo0j = await contractS6q6FoC.allowanceUSDT.call(accountjOP8ex7, {from: accounts[4]});
		await contractS6q6FoC.withdraw.call(valuepA79b73, {from: accounts[4]});
		await contractS6q6FoC.deposeBoss3.call(newBoss3yaVpD9g, {from: accounts[0]});
		await contractS6q6FoC.purchase.call(valueGBBhvf, _ref1BpME6dU, _ref24NpSd2, _ref3MU9kyTY, _ref42qt02c, _ref5Q5j1A65, commentfKDXv7Q, {from: accounts[5]});
		await contractS6q6FoC.deposeBoss4.call(newBoss4Y3qWhfJ, {from: accounts[0]});
	});

	it('test for Reseller', async () => {
		const USDTAddrv573HKw = accounts[1]
		const FOSTERAddrEWxE3HT = accounts[2]
		const initialRateZUlriMD = BigInt("1154")
		const initialPeriodA2jhfBZ = BigInt("1861")
		const initialOwnerzvpNJRa = accounts[5]
		const contractvaOhk6 = await Reseller.new(USDTAddrv573HKw, FOSTERAddrEWxE3HT, initialRateZUlriMD, initialPeriodA2jhfBZ, initialOwnerzvpNJRa, {from: accounts[4]});
		const accounthzTAUC6 = accounts[2]
		const accountHmrsIX = accounts[3]
		const amountT9RSix = BigInt("1059")
		const valuePyIKOr = BigInt("1831")
		const nullF4ILWUn = await contractvaOhk6.allowanceUSDT.call(accounthzTAUC6, {from: accounts[2]});
		const nullZa0MmE = await contractvaOhk6.allowanceUSDT.call(accountHmrsIX, {from: accounts[0]});
		const nullDeeoCfO = await contractvaOhk6.getEstimation.call(amountT9RSix, {from: accounts[0]});
		await contractvaOhk6.withdraw.call(valuePyIKOr, {from: accounts[1]});

		await expect(contractvaOhk6.allowanceUSDT.call(accounthzTAUC6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddr4w9BhI = accounts[1]
		const FOSTERAddrgjijMIn = accounts[5]
		const initialRatejxajSFa = BigInt("475")
		const initialPeriodkqPEIu = BigInt("1943")
		const initialOwnerjyRHEXf = accounts[1]
		const contractdoRz9Ju = await Reseller.new(USDTAddr4w9BhI, FOSTERAddrgjijMIn, initialRatejxajSFa, initialPeriodkqPEIu, initialOwnerjyRHEXf, {from: accounts[3]});
		const valueq1qsZXA = BigInt("328")
		const _periodnbn27tV = BigInt("1328")
		const amountP1oCE9d = BigInt("1371")
		const recipientyM3Af1g = accounts[3]
		await contractdoRz9Ju.withdraw.call(valueq1qsZXA, {from: accounts[2]});
		await contractdoRz9Ju.freezeAndTransfer.call(recipientyM3Af1g, amountP1oCE9d, _periodnbn27tV, {from: accounts[3]});

		await expect(contractdoRz9Ju.withdraw.call(valueq1qsZXA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddra9n0vhE = accounts[0]
		const FOSTERAddriOz4mt1 = accounts[0]
		const initialRateSc8hQc5 = BigInt("284")
		const initialPeriodarG1gZB = BigInt("420")
		const initialOwnerjTGMvFo = accounts[0]
		const contractPoetAKH = await Reseller.new(USDTAddra9n0vhE, FOSTERAddriOz4mt1, initialRateSc8hQc5, initialPeriodarG1gZB, initialOwnerjTGMvFo, {from: accounts[4]});
		const newFeeNO17hZ = BigInt("241")
		const accountPfKHW3z = accounts[0]
		const valueXx9IqHW = BigInt("1019")
		const _periodEZ3Pi2v = BigInt("274")
		const amountFvMsx8H = BigInt("94")
		const recipientDb2wKfi = accounts[3]
		const newBoss4LHcNIdE = accounts[3]
		const account3C1IkZ = accounts[2]
		await contractPoetAKH.setFee.call(newFeeNO17hZ, {from: accounts[5]});
		const nulliqGnzJg = await contractPoetAKH.allowanceFOSTER.call(accountPfKHW3z, {from: accounts[4]});
		await contractPoetAKH.withdraw.call(valueXx9IqHW, {from: accounts[3]});
		await contractPoetAKH.freezeAndTransfer.call(recipientDb2wKfi, amountFvMsx8H, _periodEZ3Pi2v, {from: "0x0000000000000000000000000000000000000001"});
		await contractPoetAKH.deposeBoss4.call(newBoss4LHcNIdE, {from: accounts[0]});
		const nullgsBmeRP = await contractPoetAKH.balanceFOSTER.call(account3C1IkZ, {from: accounts[2]});

		await expect(contractPoetAKH.setFee.call(newFeeNO17hZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrfPTJQk = accounts[3]
		const FOSTERAddrJNkGYmB = accounts[2]
		const initialRateVdXClwa = BigInt("229")
		const initialPeriodIyoGVrv = BigInt("1828")
		const initialOwnerkDEQ6t9 = accounts[1]
		const contractO7PIA2O = await Reseller.new(USDTAddrfPTJQk, FOSTERAddrJNkGYmB, initialRateVdXClwa, initialPeriodIyoGVrv, initialOwnerkDEQ6t9, {from: accounts[0]});
		const newPeriodfzXh8wN = BigInt("485")
		const level5YBKnpB = BigInt("255")
		const level4eEgHYI8 = BigInt("187")
		const level3n3TR5K9 = BigInt("164")
		const level2m6ChzcZ = BigInt("161")
		const level1SVnJwsx = BigInt("70")
		const newBoss3IOI7BPW = accounts[1]
		const accountNd9Kc9T = accounts[4]
		await contractO7PIA2O.setPeriod.call(newPeriodfzXh8wN, {from: "0x0000000000000000000000000000000000000001"});
		await contractO7PIA2O.setRefBonus.call(level1SVnJwsx, level2m6ChzcZ, level3n3TR5K9, level4eEgHYI8, level5YBKnpB, {from: accounts[2]});
		await contractO7PIA2O.deposeBoss3.call(newBoss3IOI7BPW, {from: accounts[3]});
		await contractO7PIA2O.switchState.call({from: accounts[3]});
		const nullHaPFVfD = await contractO7PIA2O.allowanceUSDT.call(accountNd9Kc9T, {from: accounts[1]});

		await expect(contractO7PIA2O.setPeriod.call(newPeriodfzXh8wN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrIav2BKU = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrhdkGCDU = accounts[3]
		const initialRateB0C0oUo = BigInt("215")
		const initialPeriodlHe34ae = BigInt("1384")
		const initialOwnervYD8VxM = accounts[3]
		const contractarH5KIT = await Reseller.new(USDTAddrIav2BKU, FOSTERAddrhdkGCDU, initialRateB0C0oUo, initialPeriodlHe34ae, initialOwnervYD8VxM, {from: accounts[5]});
		const newMinimummGX4WWf = BigInt("1716")
		const newMinimumJB9dOLL = BigInt("1912")
		const amounterw7Vjf = BigInt("1309")
		const level5dqE4UD = BigInt("21")
		const level4Pm4ebki = BigInt("225")
		const level39fU143 = BigInt("165")
		const level2YoJ9oDS = BigInt("67")
		const level1atMFQ9N = BigInt("229")
		await contractarH5KIT.setMinimum.call(newMinimummGX4WWf, {from: accounts[4]});
		await contractarH5KIT.setMinimum.call(newMinimumJB9dOLL, {from: accounts[5]});
		const null5JAPZt = await contractarH5KIT.getEstimation.call(amounterw7Vjf, {from: accounts[1]});
		await contractarH5KIT.setRefBonus.call(level1atMFQ9N, level2YoJ9oDS, level39fU143, level4Pm4ebki, level5dqE4UD, {from: accounts[1]});

		await expect(contractarH5KIT.setMinimum.call(newMinimummGX4WWf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrJripMl1 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrwhtF5Lj = accounts[5]
		const initialRateDjbAOhP = BigInt("55")
		const initialPerioddJAEJ5j = BigInt("232")
		const initialOwnerkszQ1pg = accounts[0]
		const contractVNBY1X = await Reseller.new(USDTAddrJripMl1, FOSTERAddrwhtF5Lj, initialRateDjbAOhP, initialPerioddJAEJ5j, initialOwnerkszQ1pg, {from: accounts[5]});
		const newBoss3k3aR5t2 = accounts[0]
		const newFeeJ4JoU3C = BigInt("47")
		const newRateVq8N6XT = BigInt("649")
		await contractVNBY1X.deposeBoss3.call(newBoss3k3aR5t2, {from: accounts[5]});
		await contractVNBY1X.setFee.call(newFeeJ4JoU3C, {from: accounts[5]});
		await contractVNBY1X.setRate.call(newRateVq8N6XT, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractVNBY1X.deposeBoss3.call(newBoss3k3aR5t2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCFMNRlK = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrZSgMnIY = accounts[5]
		const initialRatemI61lb5 = BigInt("55")
		const initialPeriodK2w7y34 = BigInt("232")
		const initialOwnerfjvga1G = accounts[0]
		const contractQ60n82Y = await Reseller.new(USDTAddrCFMNRlK, FOSTERAddrZSgMnIY, initialRatemI61lb5, initialPeriodK2w7y34, initialOwnerfjvga1G, {from: accounts[5]});
		const newRaterZsZPeH = BigInt("635")
		await contractQ60n82Y.setRate.call(newRaterZsZPeH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractQ60n82Y.setRate.call(newRaterZsZPeH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrGQal5k7 = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrYhBxHVk = accounts[3]
		const initialRatek4SkaEB = BigInt("215")
		const initialPeriodyiqLp2M = BigInt("1384")
		const initialOwneriGP4cOa = accounts[3]
		const contractPpdiyHW = await Reseller.new(USDTAddrGQal5k7, FOSTERAddrYhBxHVk, initialRatek4SkaEB, initialPeriodyiqLp2M, initialOwneriGP4cOa, {from: accounts[5]});
		const newBoss4W9wYHym = accounts[3]
		const newMinimumCnOttqc = BigInt("1716")
		const newMinimumfgVgX2d = BigInt("1912")
		const amountYhjM1Db = BigInt("416")
		const level56sbBiD = BigInt("21")
		const level4JEHKcb = BigInt("225")
		const level3NfDkGb5 = BigInt("165")
		const level2eBBUCyr = BigInt("67")
		const level1wObwjzi = BigInt("229")
		const newBoss4iUfYS5O = accounts[2]
		await contractPpdiyHW.deposeBoss4.call(newBoss4W9wYHym, {from: "0x0000000000000000000000000000000000000001"});
		await contractPpdiyHW.setMinimum.call(newMinimumCnOttqc, {from: accounts[4]});
		await contractPpdiyHW.setMinimum.call(newMinimumfgVgX2d, {from: accounts[5]});
		const nullnjoVjyH = await contractPpdiyHW.getEstimation.call(amountYhjM1Db, {from: accounts[1]});
		await contractPpdiyHW.setRefBonus.call(level1wObwjzi, level2eBBUCyr, level3NfDkGb5, level4JEHKcb, level56sbBiD, {from: accounts[1]});
		await contractPpdiyHW.deposeBoss4.call(newBoss4iUfYS5O, {from: accounts[3]});

		await expect(contractPpdiyHW.deposeBoss4.call(newBoss4W9wYHym, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrKbewE55 = accounts[3]
		const FOSTERAddraKOkEUY = accounts[2]
		const initialRateZUuwWvv = BigInt("699")
		const initialPeriodsp1D5iO = BigInt("419")
		const initialOwnerwFqag3X = accounts[0]
		const contractsrldlwr = await Reseller.new(USDTAddrKbewE55, FOSTERAddraKOkEUY, initialRateZUuwWvv, initialPeriodsp1D5iO, initialOwnerwFqag3X, {from: accounts[2]});
		const accountEJc0PuT = accounts[1]
		const _periodTKKumEc = BigInt("1577")
		const amountGRMUtBC = BigInt("956")
		const recipientlK8wGx5 = accounts[2]
		const accountLK1p7cB = accounts[4]
		const nullcmpUSpw = await contractsrldlwr.balanceUSDT.call(accountEJc0PuT, {from: accounts[2]});
		await contractsrldlwr.freezeAndTransfer.call(recipientlK8wGx5, amountGRMUtBC, _periodTKKumEc, {from: accounts[4]});
		const nullkRqHbUa = await contractsrldlwr.balanceUSDT.call(accountLK1p7cB, {from: accounts[2]});

		await expect(contractsrldlwr.balanceUSDT.call(accountEJc0PuT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrmbveCz = accounts[1]
		const FOSTERAddriR3K5lR = accounts[5]
		const initialRatexvd4dOK = BigInt("475")
		const initialPeriod6AWGgO = BigInt("1943")
		const initialOwneriudq1q8 = accounts[1]
		const contractBtrKX3 = await Reseller.new(USDTAddrmbveCz, FOSTERAddriR3K5lR, initialRatexvd4dOK, initialPeriod6AWGgO, initialOwneriudq1q8, {from: accounts[3]});
		const amountJui0Y7F = BigInt("1178")
		const accountMyd0DRf = accounts[2]
		const valueCvAwCl = BigInt("314")
		const newFeeutaxn95 = BigInt("226")
		await contractBtrKX3.switchState.call({from: accounts[0]});
		const nullJYy69KR = await contractBtrKX3.getEstimation.call(amountJui0Y7F, {from: accounts[3]});
		const nulliemsSTz = await contractBtrKX3.balanceFOSTER.call(accountMyd0DRf, {from: accounts[2]});
		await contractBtrKX3.withdraw.call(valueCvAwCl, {from: accounts[2]});
		await contractBtrKX3.setFee.call(newFeeutaxn95, {from: accounts[2]});

		await expect(contractBtrKX3.switchState.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrUTS9kEu = accounts[1]
		const FOSTERAddrKqskyK1 = accounts[5]
		const initialRatehp01gK4 = BigInt("475")
		const initialPeriodvTY0POV = BigInt("1943")
		const initialOwnerNKUgPLB = accounts[1]
		const contractW28UP4A = await Reseller.new(USDTAddrUTS9kEu, FOSTERAddrKqskyK1, initialRatehp01gK4, initialPeriodvTY0POV, initialOwnerNKUgPLB, {from: accounts[3]});
		const valueRA6cRN = BigInt("103")
		const recipientHqlm7s2 = accounts[5]
		const ERC20TokenbiX6Mif = accounts[3]
		const _ref5hezBym = accounts[0]
		const _ref4PUbrpNj = accounts[1]
		const _ref3sgYqGVL = accounts[0]
		const _ref2fie3kqP = accounts[3]
		const _ref1iQrtqIZ = "0x0000000000000000000000000000000000000001"
		const valuesmV0rwF = BigInt("268")
		const newFeed3S8ZKb = BigInt("141")
		const valueePe7Vw = BigInt("1320")
		await contractW28UP4A.withdrawERC20.call(ERC20TokenbiX6Mif, recipientHqlm7s2, valueRA6cRN, {from: accounts[1]});
		await contractW28UP4A.buy.call(valuesmV0rwF, _ref1iQrtqIZ, _ref2fie3kqP, _ref3sgYqGVL, _ref4PUbrpNj, _ref5hezBym, {from: accounts[5]});
		await contractW28UP4A.setFee.call(newFeed3S8ZKb, {from: accounts[4]});
		await contractW28UP4A.withdraw.call(valueePe7Vw, {from: accounts[2]});

		await expect(contractW28UP4A.withdrawERC20.call(ERC20TokenbiX6Mif, recipientHqlm7s2, valueRA6cRN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrMY7Jg5Z = accounts[0]
		const FOSTERAddroy4VqF = accounts[1]
		const initialRateKDDvKTS = BigInt("563")
		const initialPeriodNf4zYTO = BigInt("1328")
		const initialOwnerjGahQNq = accounts[0]
		const contractmJ6luz3 = await Reseller.new(USDTAddrMY7Jg5Z, FOSTERAddroy4VqF, initialRateKDDvKTS, initialPeriodNf4zYTO, initialOwnerjGahQNq, {from: accounts[0]});
		const _periodCpc586s = BigInt("1795")
		const amountIn7NhO = BigInt("1648")
		const recipientWq9mFz = accounts[0]
		const valuejlqBjuh = BigInt("568")
		const recipientz7mFklp = "0x0000000000000000000000000000000000000001"
		const ERC20TokenhHnzAlA = accounts[2]
		const commentDtrtue6 = "JdrUeNX6U7kooG6zjG3wMU2xplvrvfUfPRDStaz45ISwLBRoPRGd0g1lFy"
		const _ref5tsVBg4 = accounts[0]
		const _ref4O9hjS5O = accounts[3]
		const _ref3zsF5xoP = accounts[3]
		const _ref2u2dS05D = accounts[0]
		const _ref1fX0RvB0 = accounts[1]
		const valueiqDfgel = BigInt("347")
		const newMinimumairJvVB = BigInt("1128")
		const newRater7nUQHK = BigInt("431")
		const newBoss2OKAaQC = "0x0000000000000000000000000000000000000001"
		await contractmJ6luz3.freezeAndTransfer.call(recipientWq9mFz, amountIn7NhO, _periodCpc586s, {from: accounts[4]});
		await contractmJ6luz3.withdrawERC20.call(ERC20TokenhHnzAlA, recipientz7mFklp, valuejlqBjuh, {from: accounts[3]});
		await contractmJ6luz3.purchase.call(valueiqDfgel, _ref1fX0RvB0, _ref2u2dS05D, _ref3zsF5xoP, _ref4O9hjS5O, _ref5tsVBg4, commentDtrtue6, {from: accounts[2]});
		await contractmJ6luz3.setMinimum.call(newMinimumairJvVB, {from: accounts[3]});
		await contractmJ6luz3.setRate.call(newRater7nUQHK, {from: accounts[2]});
		await contractmJ6luz3.deposeBoss2.call(newBoss2OKAaQC, {from: accounts[4]});

		await expect(contractmJ6luz3.freezeAndTransfer.call(recipientWq9mFz, amountIn7NhO, _periodCpc586s, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrISND9aW = accounts[5]
		const FOSTERAddrWcxuktc = accounts[5]
		const initialRateiMJvqEH = BigInt("1561")
		const initialPeriodFj7tnKL = BigInt("1248")
		const initialOwnerZgepXvS = accounts[0]
		const contractfXd3Zqa = await Reseller.new(USDTAddrISND9aW, FOSTERAddrWcxuktc, initialRateiMJvqEH, initialPeriodFj7tnKL, initialOwnerZgepXvS, {from: accounts[4]});
		const newBoss2SDnAcKc = accounts[1]
		const accounteWJ0pCk = accounts[1]
		const newRateRg1OsIq = BigInt("619")
		const _ref5wFqb8R = accounts[4]
		const _ref4SbtadEe = accounts[3]
		const _ref3LxvkoBc = accounts[3]
		const _ref2MEYPJf = accounts[2]
		const _ref1DEFlNY = accounts[0]
		const valueB3csAE = BigInt("806")
		const accountmw0xSwB = accounts[0]
		const newMinimumA7ISdGP = BigInt("1534")
		await contractfXd3Zqa.deposeBoss2.call(newBoss2SDnAcKc, {from: accounts[4]});
		const nullTVLJaPo = await contractfXd3Zqa.balanceUSDT.call(accounteWJ0pCk, {from: accounts[3]});
		await contractfXd3Zqa.setRate.call(newRateRg1OsIq, {from: accounts[4]});
		await contractfXd3Zqa.buy.call(valueB3csAE, _ref1DEFlNY, _ref2MEYPJf, _ref3LxvkoBc, _ref4SbtadEe, _ref5wFqb8R, {from: accounts[0]});
		const nullFsGsBng = await contractfXd3Zqa.balanceUSDT.call(accountmw0xSwB, {from: accounts[5]});
		await contractfXd3Zqa.setMinimum.call(newMinimumA7ISdGP, {from: accounts[1]});

		await expect(contractfXd3Zqa.deposeBoss2.call(newBoss2SDnAcKc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrjyXRIhi = accounts[1]
		const FOSTERAddrp8XBhx3 = accounts[5]
		const initialRateDnoad6 = BigInt("475")
		const initialPeriodqLTvLAg = BigInt("1943")
		const initialOwneravCleAu = accounts[1]
		const contractNCa8Y1Q = await Reseller.new(USDTAddrjyXRIhi, FOSTERAddrp8XBhx3, initialRateDnoad6, initialPeriodqLTvLAg, initialOwneravCleAu, {from: accounts[3]});
		const commentQGZRwkJ = "FX1KUyT6dNr95rpQZu3U5"
		const _ref5ntnCrb3 = accounts[2]
		const _ref4dV8zGBk = accounts[0]
		const _ref3J6TDRBd = accounts[4]
		const _ref2PGokjZ = accounts[0]
		const _ref1o7GS8e2 = accounts[4]
		const valueJKXMxu1 = BigInt("1391")
		const valueCLKXylP = BigInt("316")
		await contractNCa8Y1Q.purchase.call(valueJKXMxu1, _ref1o7GS8e2, _ref2PGokjZ, _ref3J6TDRBd, _ref4dV8zGBk, _ref5ntnCrb3, commentQGZRwkJ, {from: accounts[4]});
		await contractNCa8Y1Q.withdraw.call(valueCLKXylP, {from: accounts[2]});

		await expect(contractNCa8Y1Q.purchase.call(valueJKXMxu1, _ref1o7GS8e2, _ref2PGokjZ, _ref3J6TDRBd, _ref4dV8zGBk, _ref5ntnCrb3, commentQGZRwkJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrpodwQQe = accounts[0]
		const FOSTERAddr2Wqk8x = accounts[0]
		const initialRateVkkHWRh = BigInt("1928")
		const initialPeriodKujFK34 = BigInt("1300")
		const initialOwnerHKs4rj5 = accounts[2]
		const contractIEJKUIA = await Reseller.new(USDTAddrpodwQQe, FOSTERAddr2Wqk8x, initialRateVkkHWRh, initialPeriodKujFK34, initialOwnerHKs4rj5, {from: accounts[0]});
		const amountfuIxmaq = BigInt("1787")
		const accountcd6KW4 = "0x0000000000000000000000000000000000000001"
		const amountAmDhaew = BigInt("1788")
		const newBoss2f0qgLaC = accounts[2]
		const newPeriodyVSzfDO = BigInt("783")
		const valueaAQlGZH = BigInt("809")
		const nulleYYLwHK = await contractIEJKUIA.getEstimation.call(amountfuIxmaq, {from: accounts[5]});
		const nullgZVdrDD = await contractIEJKUIA.balanceUSDT.call(accountcd6KW4, {from: accounts[1]});
		const nulloihA6Y = await contractIEJKUIA.getEstimation.call(amountAmDhaew, {from: accounts[3]});
		await contractIEJKUIA.deposeBoss2.call(newBoss2f0qgLaC, {from: accounts[3]});
		await contractIEJKUIA.setPeriod.call(newPeriodyVSzfDO, {from: accounts[5]});
		await contractIEJKUIA.withdraw.call(valueaAQlGZH, {from: accounts[1]});

		assert.equal(nulleYYLwHK, 3445336)
		await expect(contractIEJKUIA.balanceUSDT.call(accountcd6KW4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrBPyp8AY = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrM13UCb = accounts[3]
		const initialRatetHnGKyM = BigInt("725")
		const initialPeriodiFlPeVd = BigInt("44")
		const initialOwnerDRlZSL4 = accounts[3]
		const contracttPWeLK3 = await Reseller.new(USDTAddrBPyp8AY, FOSTERAddrM13UCb, initialRatetHnGKyM, initialPeriodiFlPeVd, initialOwnerDRlZSL4, {from: accounts[3]});
		const newBoss1J62rVs7 = accounts[4]
		const newBoss2chKV7W2 = accounts[2]
		await contracttPWeLK3.deposeBoss1.call(newBoss1J62rVs7, {from: "0x0000000000000000000000000000000000000001"});
		await contracttPWeLK3.deposeBoss2.call(newBoss2chKV7W2, {from: accounts[4]});

		await expect(contracttPWeLK3.deposeBoss1.call(newBoss1J62rVs7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrRZRxkw = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrJSOwzia = accounts[3]
		const initialRateprjv3XU = BigInt("725")
		const initialPeriodFPxJzD = BigInt("44")
		const initialOwnerG66VTfK = accounts[3]
		const contracth9Nxrdj = await Reseller.new(USDTAddrRZRxkw, FOSTERAddrJSOwzia, initialRateprjv3XU, initialPeriodFPxJzD, initialOwnerG66VTfK, {from: accounts[3]});
		const accountTYtfEsN = accounts[3]
		const newBoss17yZzgx = accounts[4]
		const newBoss3TUIwUsP = accounts[5]
		const newBoss2gPfleq = accounts[3]
		const nullFaJMCZt = await contracth9Nxrdj.balanceFOSTER.call(accountTYtfEsN, {from: accounts[3]});
		await contracth9Nxrdj.deposeBoss1.call(newBoss17yZzgx, {from: "0x0000000000000000000000000000000000000001"});
		await contracth9Nxrdj.deposeBoss3.call(newBoss3TUIwUsP, {from: "0x0000000000000000000000000000000000000001"});
		await contracth9Nxrdj.deposeBoss2.call(newBoss2gPfleq, {from: accounts[4]});

		await expect(contracth9Nxrdj.balanceFOSTER.call(accountTYtfEsN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrsZezQtx = accounts[1]
		const FOSTERAddrWcZDW1D = accounts[5]
		const initialRateuKxPvnL = BigInt("475")
		const initialPeriodTKmfu6o = BigInt("1943")
		const initialOwnerOBcNI0E = accounts[1]
		const contractxpenJtq = await Reseller.new(USDTAddrsZezQtx, FOSTERAddrWcZDW1D, initialRateuKxPvnL, initialPeriodTKmfu6o, initialOwnerOBcNI0E, {from: accounts[3]});
		const newPeriodC40Cee0 = BigInt("442")
		const valuemeOQhh = BigInt("352")
		await contractxpenJtq.setPeriod.call(newPeriodC40Cee0, {from: accounts[1]});
		await contractxpenJtq.withdraw.call(valuemeOQhh, {from: accounts[2]});

		await expect(contractxpenJtq.setPeriod.call(newPeriodC40Cee0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrHLP6T1P = accounts[1]
		const FOSTERAddrad2mfMG = accounts[5]
		const initialRateDT95n6T = BigInt("475")
		const initialPeriodvtIk0bE = BigInt("1943")
		const initialOwnerQFTRWk6 = accounts[1]
		const contractuxFWU3L = await Reseller.new(USDTAddrHLP6T1P, FOSTERAddrad2mfMG, initialRateDT95n6T, initialPeriodvtIk0bE, initialOwnerQFTRWk6, {from: accounts[3]});
		const accountjArK7Nt = accounts[0]
		const newFee8UTLON = BigInt("63")
		const _ref5kmJD5FK = accounts[3]
		const _ref4FZ95wZ9 = accounts[5]
		const _ref3js16e5N = accounts[3]
		const _ref2C8wIrUA = accounts[5]
		const _ref1xgxdHDT = "0x0000000000000000000000000000000000000001"
		const valueDDjRnoX = BigInt("1270")
		const value1tAJuN = BigInt("327")
		const nullpJGf00 = await contractuxFWU3L.allowanceFOSTER.call(accountjArK7Nt, {from: accounts[1]});
		await contractuxFWU3L.setFee.call(newFee8UTLON, {from: accounts[2]});
		await contractuxFWU3L.buy.call(valueDDjRnoX, _ref1xgxdHDT, _ref2C8wIrUA, _ref3js16e5N, _ref4FZ95wZ9, _ref5kmJD5FK, {from: accounts[4]});
		await contractuxFWU3L.withdraw.call(value1tAJuN, {from: accounts[2]});

		await expect(contractuxFWU3L.allowanceFOSTER.call(accountjArK7Nt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrj8ea0e = accounts[1]
		const FOSTERAddr2OVPYV = accounts[5]
		const initialRatexBz9T4S = BigInt("475")
		const initialPeriodj35vldA = BigInt("1943")
		const initialOwnerOXvQMWv = accounts[1]
		const contractPjJOFsP = await Reseller.new(USDTAddrj8ea0e, FOSTERAddr2OVPYV, initialRatexBz9T4S, initialPeriodj35vldA, initialOwnerOXvQMWv, {from: accounts[3]});
		const _periodHWz6mT = BigInt("1913")
		const amountZKjr55e = BigInt("421")
		const recipientR8oq7yT = accounts[2]
		const valueP3BrwSF = BigInt("1993")
		await contractPjJOFsP.freezeAndTransfer.call(recipientR8oq7yT, amountZKjr55e, _periodHWz6mT, {from: accounts[1]});
		await contractPjJOFsP.withdraw.call(valueP3BrwSF, {from: accounts[2]});

		await expect(contractPjJOFsP.freezeAndTransfer.call(recipientR8oq7yT, amountZKjr55e, _periodHWz6mT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddryBQhZbA = accounts[1]
		const FOSTERAddrvcdgBsl = accounts[5]
		const initialRateRsmMVFK = BigInt("475")
		const initialPeriodGYxYq0 = BigInt("1943")
		const initialOwnerJkulNDU = accounts[1]
		const contractdULIPv = await Reseller.new(USDTAddryBQhZbA, FOSTERAddrvcdgBsl, initialRateRsmMVFK, initialPeriodGYxYq0, initialOwnerJkulNDU, {from: accounts[3]});
		const _ref5nALj1j8 = accounts[0]
		const _ref4wVpcnsQ = accounts[3]
		const _ref3hxzabN9 = accounts[1]
		const _ref2myM3bmK = accounts[4]
		const _ref1a3gy92 = accounts[3]
		const valueUFhOeDr = BigInt("177")
		const valueKJijNRK = BigInt("328")
		await contractdULIPv.buy.call(valueUFhOeDr, _ref1a3gy92, _ref2myM3bmK, _ref3hxzabN9, _ref4wVpcnsQ, _ref5nALj1j8, {from: accounts[4]});
		await contractdULIPv.withdraw.call(valueKJijNRK, {from: accounts[2]});

		await expect(contractdULIPv.buy.call(valueUFhOeDr, _ref1a3gy92, _ref2myM3bmK, _ref3hxzabN9, _ref4wVpcnsQ, _ref5nALj1j8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbSwG3IU = accounts[1]
		const FOSTERAddrAg9VKoD = accounts[5]
		const initialRatew5nrQj = BigInt("475")
		const initialPeriodwPdGm8D = BigInt("1943")
		const initialOwnerwe54MLl = accounts[1]
		const contractYNNlxlO = await Reseller.new(USDTAddrbSwG3IU, FOSTERAddrAg9VKoD, initialRatew5nrQj, initialPeriodwPdGm8D, initialOwnerwe54MLl, {from: accounts[3]});
		const newRateqfMVCJ = BigInt("1838")
		const amounteECOWkC = BigInt("1841")
		const newBoss4ybwPuTr = accounts[0]
		const valueupV4C67 = BigInt("275")
		await contractYNNlxlO.setRate.call(newRateqfMVCJ, {from: accounts[1]});
		const nulltXjigCw = await contractYNNlxlO.getEstimation.call(amounteECOWkC, {from: "0x0000000000000000000000000000000000000001"});
		await contractYNNlxlO.deposeBoss4.call(newBoss4ybwPuTr, {from: accounts[4]});
		await contractYNNlxlO.withdraw.call(valueupV4C67, {from: accounts[2]});

		assert.equal(nulltXjigCw, 874475)
		await expect(contractYNNlxlO.getEstimation.call(amounteECOWkC, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddruxXgSg3 = accounts[1]
		const FOSTERAddrHiyVV2e = accounts[5]
		const initialRateCdZUMaQ = BigInt("475")
		const initialPeriodLMC31ng = BigInt("1943")
		const initialOwnerbQeItbd = accounts[1]
		const contractvydYLWl = await Reseller.new(USDTAddruxXgSg3, FOSTERAddrHiyVV2e, initialRateCdZUMaQ, initialPeriodLMC31ng, initialOwnerbQeItbd, {from: accounts[3]});
		const newBoss4yRbIS7r = "0x0000000000000000000000000000000000000001"
		const valuetPFW9Pi = BigInt("363")
		await contractvydYLWl.deposeBoss4.call(newBoss4yRbIS7r, {from: accounts[1]});
		await contractvydYLWl.withdraw.call(valuetPFW9Pi, {from: accounts[2]});

		await expect(contractvydYLWl.deposeBoss4.call(newBoss4yRbIS7r, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrfhpyF07 = accounts[1]
		const FOSTERAddrJ7fTOzn = accounts[5]
		const initialRateqFuD34y = BigInt("475")
		const initialPeriodTIO2kpN = BigInt("1943")
		const initialOwnerhLnC9zj = accounts[1]
		const contractZovqdWr = await Reseller.new(USDTAddrfhpyF07, FOSTERAddrJ7fTOzn, initialRateqFuD34y, initialPeriodTIO2kpN, initialOwnerhLnC9zj, {from: accounts[3]});
		const newBoss3ZMt39VK = accounts[2]
		const valueLaEK7U = BigInt("352")
		await contractZovqdWr.deposeBoss3.call(newBoss3ZMt39VK, {from: accounts[1]});
		await contractZovqdWr.withdraw.call(valueLaEK7U, {from: accounts[2]});

		await expect(contractZovqdWr.deposeBoss3.call(newBoss3ZMt39VK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrEeqDtwo = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrqKcYgK0 = accounts[5]
		const initialRateil75aA = BigInt("55")
		const initialPeriodD0mURhM = BigInt("232")
		const initialOwneroMWSW9f = accounts[0]
		const contractCzcD0vR = await Reseller.new(USDTAddrEeqDtwo, FOSTERAddrqKcYgK0, initialRateil75aA, initialPeriodD0mURhM, initialOwneroMWSW9f, {from: accounts[5]});
		const newRateQY8UQ9 = BigInt("607")
		await contractCzcD0vR.switchState.call({from: accounts[0]});
		await contractCzcD0vR.setRate.call(newRateQY8UQ9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractCzcD0vR.switchState.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrSU9qkMB = accounts[1]
		const FOSTERAddrGSBd27 = accounts[1]
		const initialRateFTupvYO = BigInt("1524")
		const initialPeriodE7GcBJX = BigInt("740")
		const initialOwnerYP8gm54 = accounts[4]
		const contractyUsV2LR = await Reseller.new(USDTAddrSU9qkMB, FOSTERAddrGSBd27, initialRateFTupvYO, initialPeriodE7GcBJX, initialOwnerYP8gm54, {from: accounts[0]});
		const level5YJmRU3P = BigInt("133")
		const level4qEwBkmd = BigInt("74")
		const level3V3bEJli = BigInt("25")
		const level2eFzswML = BigInt("168")
		const level1j6pYB7Q = BigInt("27")
		const newBoss1qAn5mwT = "0x0000000000000000000000000000000000000001"
		const newBoss4ZBpKHU = accounts[1]
		const _periodOETtxVZ = BigInt("795")
		const amountwL2yZaj = BigInt("1604")
		const recipientlwl2prh = accounts[4]
		const amountmSRnZz4 = BigInt("1354")
		await contractyUsV2LR.setRefBonus.call(level1j6pYB7Q, level2eFzswML, level3V3bEJli, level4qEwBkmd, level5YJmRU3P, {from: accounts[4]});
		await contractyUsV2LR.deposeBoss1.call(newBoss1qAn5mwT, {from: accounts[4]});
		await contractyUsV2LR.deposeBoss4.call(newBoss4ZBpKHU, {from: accounts[2]});
		await contractyUsV2LR.freezeAndTransfer.call(recipientlwl2prh, amountwL2yZaj, _periodOETtxVZ, {from: accounts[4]});
		await contractyUsV2LR.switchState.call({from: accounts[0]});
		const nullXuwm9RW = await contractyUsV2LR.getEstimation.call(amountmSRnZz4, {from: accounts[3]});

		await expect(contractyUsV2LR.setRefBonus.call(level1j6pYB7Q, level2eFzswML, level3V3bEJli, level4qEwBkmd, level5YJmRU3P, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrDbWhnu = accounts[1]
		const FOSTERAddrRRSk2x = accounts[5]
		const initialRateb26a8y = BigInt("475")
		const initialPeriodI9NT7Pc = BigInt("1943")
		const initialOwnerl2IT3qF = accounts[1]
		const contractKOtz754 = await Reseller.new(USDTAddrDbWhnu, FOSTERAddrRRSk2x, initialRateb26a8y, initialPeriodI9NT7Pc, initialOwnerl2IT3qF, {from: accounts[3]});
		const newMinimumNhWLnop = BigInt("1423")
		const valueit1MtcK = BigInt("352")
		const level5IBX04U = BigInt("182")
		const level4NsgFgPQ = BigInt("190")
		const level3eEbP9vk = BigInt("12")
		const level2x3wlmdB = BigInt("138")
		const level1xI7tj4p = BigInt("159")
		await contractKOtz754.setMinimum.call(newMinimumNhWLnop, {from: accounts[1]});
		await contractKOtz754.withdraw.call(valueit1MtcK, {from: accounts[2]});
		await contractKOtz754.setRefBonus.call(level1xI7tj4p, level2x3wlmdB, level3eEbP9vk, level4NsgFgPQ, level5IBX04U, {from: accounts[0]});

		await expect(contractKOtz754.setMinimum.call(newMinimumNhWLnop, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrWcvOAHB = accounts[1]
		const FOSTERAddrm9tz5Cf = accounts[5]
		const initialRatenwkH7Sj = BigInt("475")
		const initialPeriodPK46oEj = BigInt("1943")
		const initialOwnerYQzCUIc = accounts[1]
		const contractS8ZBjS = await Reseller.new(USDTAddrWcvOAHB, FOSTERAddrm9tz5Cf, initialRatenwkH7Sj, initialPeriodPK46oEj, initialOwnerYQzCUIc, {from: accounts[3]});
		const newFeeZlYAYSD = BigInt("116")
		const valueiA8MDBD = BigInt("344")
		await contractS8ZBjS.setFee.call(newFeeZlYAYSD, {from: accounts[1]});
		await contractS8ZBjS.withdraw.call(valueiA8MDBD, {from: accounts[2]});

		await expect(contractS8ZBjS.setFee.call(newFeeZlYAYSD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrUJ3zMro = accounts[1]
		const FOSTERAddrnMlTrdh = accounts[5]
		const initialRateAyCKwlS = BigInt("475")
		const initialPeriodNjP4uY8 = BigInt("1943")
		const initialOwnerzHAxiBb = accounts[1]
		const contractCPwVDfb = await Reseller.new(USDTAddrUJ3zMro, FOSTERAddrnMlTrdh, initialRateAyCKwlS, initialPeriodNjP4uY8, initialOwnerzHAxiBb, {from: accounts[3]});
		const commentrXmDPD = "nlUpmeBFhacRrOOJ3BPPK3EMDDaz3mpUhgYJ932J90ex9HMYGCv2pm8v5omRNXTfLXBZYEIfgHhB6PrSzfeXzCmh"
		const _ref5H4iy6zH = accounts[3]
		const _ref4cJLFhA5 = accounts[1]
		const _ref3I0LIfk = accounts[3]
		const _ref2NRjTtCG = accounts[3]
		const _ref1dbbO1T5 = accounts[0]
		const valueTyNWWvY = BigInt("1822")
		const valuegk4wS4W = BigInt("371")
		const level5UYXgS7D = BigInt("61")
		const level4MKkOgiV = BigInt("237")
		const level3ZLyV4YN = BigInt("69")
		const level2g0jcOt = BigInt("98")
		const level1srMOOep = BigInt("109")
		await contractCPwVDfb.purchase.call(valueTyNWWvY, _ref1dbbO1T5, _ref2NRjTtCG, _ref3I0LIfk, _ref4cJLFhA5, _ref5H4iy6zH, commentrXmDPD, {from: accounts[1]});
		await contractCPwVDfb.withdraw.call(valuegk4wS4W, {from: accounts[2]});
		await contractCPwVDfb.setRefBonus.call(level1srMOOep, level2g0jcOt, level3ZLyV4YN, level4MKkOgiV, level5UYXgS7D, {from: accounts[4]});

		await expect(contractCPwVDfb.purchase.call(valueTyNWWvY, _ref1dbbO1T5, _ref2NRjTtCG, _ref3I0LIfk, _ref4cJLFhA5, _ref5H4iy6zH, commentrXmDPD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})