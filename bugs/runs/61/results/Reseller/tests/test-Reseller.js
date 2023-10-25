const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrhaRaMxz = accounts[3]
		const FOSTERAddrOuxn78B = accounts[4]
		const initialRatewd90tkE = BigInt("270")
		const initialPeriodpnQRgUw = BigInt("1515")
		const initialOwnerqxptnz1 = accounts[1]
		const contractbpdlTwR = await Reseller.new(USDTAddrhaRaMxz, FOSTERAddrOuxn78B, initialRatewd90tkE, initialPeriodpnQRgUw, initialOwnerqxptnz1, {from: accounts[2]});
		const newMinimumivDegcC = BigInt("1112")
		const newBoss1QqkUPLB = accounts[1]
		const level5vTOb9RP = BigInt("151")
		const level4bW2g74m = BigInt("212")
		const level3jBgSe9W = BigInt("148")
		const level2QcYshtT = BigInt("2")
		const level1vg39Y40 = BigInt("19")
		await contractbpdlTwR.setMinimum.call(newMinimumivDegcC, {from: accounts[1]});
		await contractbpdlTwR.deposeBoss1.call(newBoss1QqkUPLB, {from: accounts[4]});
		await contractbpdlTwR.setRefBonus.call(level1vg39Y40, level2QcYshtT, level3jBgSe9W, level4bW2g74m, level5vTOb9RP, {from: accounts[3]});

		await expect(contractbpdlTwR.setMinimum.call(newMinimumivDegcC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrhefZ1tG = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrFDugyLq = accounts[0]
		const initialRatePd2Lquq = BigInt("972")
		const initialPeriodBwHbVx = BigInt("1575")
		const initialOwnerxSqGT3F = accounts[3]
		const contractCeJ0b4P = await Reseller.new(USDTAddrhefZ1tG, FOSTERAddrFDugyLq, initialRatePd2Lquq, initialPeriodBwHbVx, initialOwnerxSqGT3F, {from: accounts[5]});
		const newBoss3WWX2L1L = accounts[4]
		const amountH5vZa65 = BigInt("1591")
		const newBoss3utpKqlj = accounts[0]
		const newRateTgdq2TV = BigInt("1685")
		await contractCeJ0b4P.deposeBoss3.call(newBoss3WWX2L1L, {from: accounts[3]});
		const nulla63AVfK = await contractCeJ0b4P.getEstimation.call(amountH5vZa65, {from: accounts[4]});
		await contractCeJ0b4P.deposeBoss3.call(newBoss3utpKqlj, {from: accounts[1]});
		await contractCeJ0b4P.setRate.call(newRateTgdq2TV, {from: accounts[3]});

		assert.equal(nulla63AVfK, 1546452)
		await expect(contractCeJ0b4P.getEstimation.call(amountH5vZa65, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrVQLmCsX = accounts[1]
		const FOSTERAddrrnckq6t = accounts[2]
		const initialRateOim7Gta = BigInt("599")
		const initialPeriodkpXZ65r = BigInt("817")
		const initialOwnerV5Ey90e = accounts[4]
		const contractjJjTqWG = await Reseller.new(USDTAddrVQLmCsX, FOSTERAddrrnckq6t, initialRateOim7Gta, initialPeriodkpXZ65r, initialOwnerV5Ey90e, {from: accounts[0]});
		const valueLwNI6p6 = BigInt("590")
		const valueFsaycUI = BigInt("1628")
		const newBoss1AMs9Pc = accounts[2]
		const accountwvP6GUS = accounts[1]
		await contractjJjTqWG.withdraw.call(valueLwNI6p6, {from: accounts[5]});
		await contractjJjTqWG.withdraw.call(valueFsaycUI, {from: accounts[5]});
		await contractjJjTqWG.deposeBoss1.call(newBoss1AMs9Pc, {from: "0x0000000000000000000000000000000000000001"});
		const nullIpVtJ90 = await contractjJjTqWG.balanceUSDT.call(accountwvP6GUS, {from: accounts[2]});

		await expect(contractjJjTqWG.withdraw.call(valueLwNI6p6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrx7TjKfi = accounts[5]
		const FOSTERAddrc1BMyIk = accounts[3]
		const initialRateQzgyzua = BigInt("314")
		const initialPeriodPhneQ1E = BigInt("1192")
		const initialOwneryiHRdJ = accounts[2]
		const contractU4HnkuH = await Reseller.new(USDTAddrx7TjKfi, FOSTERAddrc1BMyIk, initialRateQzgyzua, initialPeriodPhneQ1E, initialOwneryiHRdJ, {from: "0x0000000000000000000000000000000000000001"});
		const newBoss3MyIING0 = "0x0000000000000000000000000000000000000001"
		const level5BOVnzt7 = BigInt("132")
		const level4TYmtVH = BigInt("202")
		const level3Eu6kxuJ = BigInt("203")
		const level2n0BtAU = BigInt("163")
		const level1k7YJatb = BigInt("93")
		const accounti4uXGrl = accounts[5]
		const amountFdeMn3a = BigInt("657")
		const _periodaTm51ZO = BigInt("72")
		const amountQtI5cZz = BigInt("393")
		const recipientTVFbOpB = "0x0000000000000000000000000000000000000001"
		await contractU4HnkuH.deposeBoss3.call(newBoss3MyIING0, {from: accounts[4]});
		await contractU4HnkuH.setRefBonus.call(level1k7YJatb, level2n0BtAU, level3Eu6kxuJ, level4TYmtVH, level5BOVnzt7, {from: "0x0000000000000000000000000000000000000001"});
		const nullWMUCzsj = await contractU4HnkuH.balanceUSDT.call(accounti4uXGrl, {from: accounts[1]});
		const nullnO0lQac = await contractU4HnkuH.getEstimation.call(amountFdeMn3a, {from: accounts[2]});
		await contractU4HnkuH.freezeAndTransfer.call(recipientTVFbOpB, amountQtI5cZz, _periodaTm51ZO, {from: accounts[5]});
	});

	it('test for Reseller', async () => {
		const USDTAddrb3r0ZkA = accounts[0]
		const FOSTERAddrxZlEnLl = accounts[4]
		const initialRateTXCY0FX = BigInt("805")
		const initialPeriodefMRHsm = BigInt("479")
		const initialOwnerYWU5jHP = accounts[4]
		const contractKQ9G94k = await Reseller.new(USDTAddrb3r0ZkA, FOSTERAddrxZlEnLl, initialRateTXCY0FX, initialPeriodefMRHsm, initialOwnerYWU5jHP, {from: accounts[4]});
		const newRatedoq9W5 = BigInt("212")
		const amountvEUYeQC = BigInt("1494")
		const valuezT9d26c = BigInt("263")
		const level5DaL320 = BigInt("238")
		const level4dB5ju8P = BigInt("159")
		const level3rda6blT = BigInt("239")
		const level2CFWAX1 = BigInt("130")
		const level1uC8JveX = BigInt("131")
		const newFeeSPAEwdk = BigInt("234")
		const accountjatJC0Y = accounts[4]
		await contractKQ9G94k.setRate.call(newRatedoq9W5, {from: accounts[3]});
		const nullC08bX0G = await contractKQ9G94k.getEstimation.call(amountvEUYeQC, {from: "0x0000000000000000000000000000000000000001"});
		await contractKQ9G94k.withdraw.call(valuezT9d26c, {from: "0x0000000000000000000000000000000000000001"});
		await contractKQ9G94k.setRefBonus.call(level1uC8JveX, level2CFWAX1, level3rda6blT, level4dB5ju8P, level5DaL320, {from: accounts[3]});
		await contractKQ9G94k.setFee.call(newFeeSPAEwdk, {from: accounts[2]});
		const nullZN4tvR = await contractKQ9G94k.balanceUSDT.call(accountjatJC0Y, {from: accounts[3]});

		await expect(contractKQ9G94k.setRate.call(newRatedoq9W5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrKXXpD8 = accounts[1]
		const FOSTERAddraagFOKZ = accounts[0]
		const initialRateztP4ob = BigInt("76")
		const initialPerioduy0z1JO = BigInt("1634")
		const initialOwner3S1VQQ = accounts[3]
		const contractcfBBBo9 = await Reseller.new(USDTAddrKXXpD8, FOSTERAddraagFOKZ, initialRateztP4ob, initialPerioduy0z1JO, initialOwner3S1VQQ, {from: accounts[1]});
		const newPeriodKN0OuXe = BigInt("1780")
		const accountEmnNX5c = accounts[2]
		const accountxBxxfYl = "0x0000000000000000000000000000000000000001"
		const newBoss4gYnwoVx = accounts[0]
		const newBoss2msLoQHl = accounts[0]
		await contractcfBBBo9.setPeriod.call(newPeriodKN0OuXe, {from: accounts[1]});
		const nullf5Dsm0Z = await contractcfBBBo9.balanceUSDT.call(accountEmnNX5c, {from: accounts[1]});
		const nullhbwynF2 = await contractcfBBBo9.allowanceUSDT.call(accountxBxxfYl, {from: accounts[3]});
		await contractcfBBBo9.deposeBoss4.call(newBoss4gYnwoVx, {from: "0x0000000000000000000000000000000000000001"});
		await contractcfBBBo9.deposeBoss2.call(newBoss2msLoQHl, {from: accounts[2]});
		await contractcfBBBo9.switchState.call({from: accounts[2]});

		await expect(contractcfBBBo9.setPeriod.call(newPeriodKN0OuXe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrtHSsb9k = "0x0000000000000000000000000000000000000001"
		const FOSTERAddrhkI5z8x = accounts[1]
		const initialRateRiZTRPk = BigInt("570")
		const initialPeriodxUG3U4P = BigInt("1461")
		const initialOwnerVe8pn2I = accounts[5]
		const contractm1tztj2 = await Reseller.new(USDTAddrtHSsb9k, FOSTERAddrhkI5z8x, initialRateRiZTRPk, initialPeriodxUG3U4P, initialOwnerVe8pn2I, {from: accounts[3]});
		const accountDuTMgia = accounts[4]
		const accountrVS9gY7 = accounts[4]
		const newBoss1AeSAUcI = accounts[4]
		const nulledf3bCD = await contractm1tztj2.allowanceFOSTER.call(accountDuTMgia, {from: accounts[1]});
		const nullPZYjOOa = await contractm1tztj2.allowanceUSDT.call(accountrVS9gY7, {from: accounts[0]});
		await contractm1tztj2.deposeBoss1.call(newBoss1AeSAUcI, {from: accounts[0]});
		await contractm1tztj2.switchState.call({from: accounts[5]});

		await expect(contractm1tztj2.allowanceFOSTER.call(accountDuTMgia, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrkDiNTi = accounts[3]
		const FOSTERAddro1Rht7W = accounts[4]
		const initialRatexuX1pXM = BigInt("270")
		const initialPeriodYxLfkVa = BigInt("1515")
		const initialOwneraxhRRtd = accounts[1]
		const contractyUgtd1g = await Reseller.new(USDTAddrkDiNTi, FOSTERAddro1Rht7W, initialRatexuX1pXM, initialPeriodYxLfkVa, initialOwneraxhRRtd, {from: accounts[2]});
		const newMinimumzqGv6H9 = BigInt("1112")
		const level5Vu2SHUz = BigInt("151")
		const level4nNayZxV = BigInt("227")
		const level3I707dBf = BigInt("148")
		const level2alcIemQ = BigInt("2")
		const level1rRXavmp = BigInt("19")
		await contractyUgtd1g.setMinimum.call(newMinimumzqGv6H9, {from: accounts[1]});
		await contractyUgtd1g.setRefBonus.call(level1rRXavmp, level2alcIemQ, level3I707dBf, level4nNayZxV, level5Vu2SHUz, {from: accounts[3]});

		await expect(contractyUgtd1g.setMinimum.call(newMinimumzqGv6H9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrlHLHiP = accounts[3]
		const FOSTERAddro4pE5O0 = accounts[4]
		const initialRategAf4LGe = BigInt("270")
		const initialPeriodE7RnzZ = BigInt("1515")
		const initialOwnerrrJ0uUT = accounts[1]
		const contractiH0VPHa = await Reseller.new(USDTAddrlHLHiP, FOSTERAddro4pE5O0, initialRategAf4LGe, initialPeriodE7RnzZ, initialOwnerrrJ0uUT, {from: accounts[2]});
		const _ref5Bba55Fx = accounts[2]
		const _ref4EsUbsA8 = accounts[2]
		const _ref33zHGDj = accounts[2]
		const _ref2QoVMES = accounts[3]
		const _ref1VKaYCLP = accounts[1]
		const valuea6Da5gG = BigInt("768")
		const newBoss1Bj7HCFT = accounts[1]
		const level5M3CEU4x = BigInt("151")
		const level4lbhjnO = BigInt("212")
		const level3DRA10qH = BigInt("148")
		const level2kqFNty7 = BigInt("2")
		const level1gH3lOtk = BigInt("19")
		await contractiH0VPHa.buy.call(valuea6Da5gG, _ref1VKaYCLP, _ref2QoVMES, _ref33zHGDj, _ref4EsUbsA8, _ref5Bba55Fx, {from: accounts[1]});
		await contractiH0VPHa.deposeBoss1.call(newBoss1Bj7HCFT, {from: accounts[4]});
		await contractiH0VPHa.setRefBonus.call(level1gH3lOtk, level2kqFNty7, level3DRA10qH, level4lbhjnO, level5M3CEU4x, {from: accounts[3]});

		await expect(contractiH0VPHa.buy.call(valuea6Da5gG, _ref1VKaYCLP, _ref2QoVMES, _ref33zHGDj, _ref4EsUbsA8, _ref5Bba55Fx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrO0fcbKc = accounts[3]
		const FOSTERAddrMtGUDLj = accounts[4]
		const initialRatekbGt0Uj = BigInt("270")
		const initialPeriodidFtKVP = BigInt("1515")
		const initialOwnerp3RxjMM = accounts[1]
		const contractNlVpiLU = await Reseller.new(USDTAddrO0fcbKc, FOSTERAddrMtGUDLj, initialRatekbGt0Uj, initialPeriodidFtKVP, initialOwnerp3RxjMM, {from: accounts[2]});
		const newMinimumkYdjqPl = BigInt("1126")
		const newFeesWd6l2B = BigInt("28")
		const level5VQkey8J = BigInt("151")
		const level4g7VuCcV = BigInt("227")
		const level3W3sF7NK = BigInt("148")
		const level2YjZKect = BigInt("2")
		const level1xocowuN = BigInt("19")
		const _periodsYEgUUF = BigInt("1508")
		const amountqXTYjM = BigInt("526")
		const recipientjqs3kCp = accounts[3]
		await contractNlVpiLU.setMinimum.call(newMinimumkYdjqPl, {from: accounts[1]});
		await contractNlVpiLU.setFee.call(newFeesWd6l2B, {from: accounts[2]});
		await contractNlVpiLU.setRefBonus.call(level1xocowuN, level2YjZKect, level3W3sF7NK, level4g7VuCcV, level5VQkey8J, {from: accounts[3]});
		await contractNlVpiLU.freezeAndTransfer.call(recipientjqs3kCp, amountqXTYjM, _periodsYEgUUF, {from: accounts[3]});

		await expect(contractNlVpiLU.setMinimum.call(newMinimumkYdjqPl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrcn29AJc = accounts[3]
		const FOSTERAddrsB7F2gL = accounts[4]
		const initialRateSOshlc5 = BigInt("270")
		const initialPeriodbJTlnzX = BigInt("1515")
		const initialOwnerT4qDhf = accounts[1]
		const contractQBOV7dW = await Reseller.new(USDTAddrcn29AJc, FOSTERAddrsB7F2gL, initialRateSOshlc5, initialPeriodbJTlnzX, initialOwnerT4qDhf, {from: accounts[2]});
		const newBoss4W77JGdj = accounts[4]
		const newMinimumpK3GblH = BigInt("839")
		const newMinimumZuEXNB9 = BigInt("1112")
		const level5Xk4nLzv = BigInt("151")
		const level4zXX1po = BigInt("236")
		const level3SpXTU9W = BigInt("148")
		const level2NCF36TH = BigInt("2")
		const level1CjbzDiM = BigInt("19")
		await contractQBOV7dW.deposeBoss4.call(newBoss4W77JGdj, {from: accounts[5]});
		await contractQBOV7dW.setMinimum.call(newMinimumpK3GblH, {from: accounts[0]});
		await contractQBOV7dW.setMinimum.call(newMinimumZuEXNB9, {from: accounts[1]});
		await contractQBOV7dW.setRefBonus.call(level1CjbzDiM, level2NCF36TH, level3SpXTU9W, level4zXX1po, level5Xk4nLzv, {from: accounts[3]});

		await expect(contractQBOV7dW.deposeBoss4.call(newBoss4W77JGdj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddra7oCSdE = accounts[3]
		const FOSTERAddr1AssHU = accounts[4]
		const initialRatewEmuzf9 = BigInt("270")
		const initialPeriodRLHKrRK = BigInt("1515")
		const initialOwnerKLTJUMh = accounts[1]
		const contractA5Ifv5d = await Reseller.new(USDTAddra7oCSdE, FOSTERAddr1AssHU, initialRatewEmuzf9, initialPeriodRLHKrRK, initialOwnerKLTJUMh, {from: accounts[2]});
		const valueHk8Ultz = BigInt("1374")
		const recipientKHAXQp3 = accounts[4]
		const ERC20TokenLYt3dZN = accounts[2]
		const newMinimumCEQ2PF = BigInt("1112")
		const level5Pz2joGC = BigInt("151")
		const level4y6VOiCv = BigInt("232")
		const level3pijRTVl = BigInt("148")
		const level2UAWRYz = BigInt("2")
		const level1U0bz80X = BigInt("19")
		const accountEs5pVLb = accounts[1]
		await contractA5Ifv5d.withdrawERC20.call(ERC20TokenLYt3dZN, recipientKHAXQp3, valueHk8Ultz, {from: "0x0000000000000000000000000000000000000001"});
		await contractA5Ifv5d.setMinimum.call(newMinimumCEQ2PF, {from: accounts[1]});
		await contractA5Ifv5d.setRefBonus.call(level1U0bz80X, level2UAWRYz, level3pijRTVl, level4y6VOiCv, level5Pz2joGC, {from: accounts[3]});
		const nullfo96h3f = await contractA5Ifv5d.allowanceUSDT.call(accountEs5pVLb, {from: accounts[0]});

		await expect(contractA5Ifv5d.withdrawERC20.call(ERC20TokenLYt3dZN, recipientKHAXQp3, valueHk8Ultz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrqHIbTf = accounts[3]
		const FOSTERAddrXveaWA4 = accounts[4]
		const initialRateM9utcUn = BigInt("270")
		const initialPeriodKRxc8KM = BigInt("1515")
		const initialOwnerZCUfhI7 = accounts[1]
		const contractrblYRBY = await Reseller.new(USDTAddrqHIbTf, FOSTERAddrXveaWA4, initialRateM9utcUn, initialPeriodKRxc8KM, initialOwnerZCUfhI7, {from: accounts[2]});
		const accountc8XSOdr = accounts[5]
		const level5BBxrOwN = BigInt("151")
		const level4ZZCT7C = BigInt("227")
		const level3iOzztYK = BigInt("148")
		const level2C3tuzQC = BigInt("2")
		const level1uJVQvAK = BigInt("37")
		const newFeeL3VLoqx = BigInt("187")
		const nullaDCfcF = await contractrblYRBY.allowanceUSDT.call(accountc8XSOdr, {from: accounts[1]});
		await contractrblYRBY.setRefBonus.call(level1uJVQvAK, level2C3tuzQC, level3iOzztYK, level4ZZCT7C, level5BBxrOwN, {from: accounts[3]});
		await contractrblYRBY.setFee.call(newFeeL3VLoqx, {from: accounts[0]});

		await expect(contractrblYRBY.allowanceUSDT.call(accountc8XSOdr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrekUwbp6 = accounts[3]
		const FOSTERAddrpYErXjq = accounts[4]
		const initialRateO822FJY = BigInt("270")
		const initialPeriodoulFURd = BigInt("1515")
		const initialOwnerkCwnVzW = accounts[1]
		const contractbZ8vNHe = await Reseller.new(USDTAddrekUwbp6, FOSTERAddrpYErXjq, initialRateO822FJY, initialPeriodoulFURd, initialOwnerkCwnVzW, {from: accounts[2]});
		const newBoss2GjjTYw = "0x0000000000000000000000000000000000000001"
		const level5vvq5PDm = BigInt("151")
		const level4gXlXWg8 = BigInt("227")
		const level3OmdUJTc = BigInt("148")
		const level2ZDrpztj = BigInt("42")
		const level1LJuGl1p = BigInt("19")
		await contractbZ8vNHe.deposeBoss2.call(newBoss2GjjTYw, {from: accounts[1]});
		await contractbZ8vNHe.setRefBonus.call(level1LJuGl1p, level2ZDrpztj, level3OmdUJTc, level4gXlXWg8, level5vvq5PDm, {from: accounts[3]});

		await expect(contractbZ8vNHe.deposeBoss2.call(newBoss2GjjTYw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrSmE3ABw = accounts[3]
		const FOSTERAddrHQR9DYD = accounts[4]
		const initialRaten5Pu4Zf = BigInt("270")
		const initialPeriod9NxxO1 = BigInt("1515")
		const initialOwnerOWJAtua = accounts[1]
		const contractli52MH1 = await Reseller.new(USDTAddrSmE3ABw, FOSTERAddrHQR9DYD, initialRaten5Pu4Zf, initialPeriod9NxxO1, initialOwnerOWJAtua, {from: accounts[2]});
		const accountIdrRouE = accounts[0]
		const level5DuhPY7 = BigInt("151")
		const level4cTDtgi0 = BigInt("215")
		const level3IW9Gj1L = BigInt("173")
		const level2mQNTvxd = BigInt("2")
		const level1GeRgD23 = BigInt("19")
		const newRateMaDsWNy = BigInt("1782")
		const nullhn6Dvzg = await contractli52MH1.balanceUSDT.call(accountIdrRouE, {from: accounts[2]});
		await contractli52MH1.setRefBonus.call(level1GeRgD23, level2mQNTvxd, level3IW9Gj1L, level4cTDtgi0, level5DuhPY7, {from: accounts[3]});
		await contractli52MH1.setRate.call(newRateMaDsWNy, {from: accounts[1]});

		await expect(contractli52MH1.balanceUSDT.call(accountIdrRouE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrwMX2HrW = accounts[3]
		const FOSTERAddrSkSMjwy = accounts[4]
		const initialRateDrDVlW2 = BigInt("270")
		const initialPeriodGmwXuwx = BigInt("1515")
		const initialOwnerGRO0GJh = accounts[1]
		const contractQA0pBfa = await Reseller.new(USDTAddrwMX2HrW, FOSTERAddrSkSMjwy, initialRateDrDVlW2, initialPeriodGmwXuwx, initialOwnerGRO0GJh, {from: accounts[2]});
		const _periodbwI9elc = BigInt("622")
		const amountrmXqTd2 = BigInt("1746")
		const recipientAMDt0AQ = accounts[3]
		const level5JvryEM8 = BigInt("151")
		const level4sGUilDd = BigInt("215")
		const level3pNLuqbW = BigInt("148")
		const level2mESbtlf = BigInt("47")
		const level1vNAMJQw = BigInt("19")
		await contractQA0pBfa.freezeAndTransfer.call(recipientAMDt0AQ, amountrmXqTd2, _periodbwI9elc, {from: accounts[1]});
		await contractQA0pBfa.setRefBonus.call(level1vNAMJQw, level2mESbtlf, level3pNLuqbW, level4sGUilDd, level5JvryEM8, {from: accounts[3]});

		await expect(contractQA0pBfa.freezeAndTransfer.call(recipientAMDt0AQ, amountrmXqTd2, _periodbwI9elc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrie361Es = accounts[3]
		const FOSTERAddrDufG0AK = accounts[4]
		const initialRaterFl8YpT = BigInt("270")
		const initialPeriodrwKR4DZ = BigInt("1515")
		const initialOwnererRpDaf = accounts[1]
		const contracteLJVKOq = await Reseller.new(USDTAddrie361Es, FOSTERAddrDufG0AK, initialRaterFl8YpT, initialPeriodrwKR4DZ, initialOwnererRpDaf, {from: accounts[2]});
		const commentEYKbLr = "k4FF9kuRvdpIGEX4Efb1BeNDx6qJhdfAkwz6U0oga44MF1GQPK1E6F8wrGrWpjSUvxzoM2ijN3cBbyA3PvTO12EJ6PU"
		const _ref5X7a9GCW = accounts[3]
		const _ref40K1eUR = accounts[0]
		const _ref3YTXAnVr = accounts[0]
		const _ref2P7EGs7X = accounts[3]
		const _ref1FIUUVfA = accounts[1]
		const valueAMT2c96 = BigInt("1943")
		const level5tqVODMu = BigInt("151")
		const level4quNg598 = BigInt("227")
		const level3LQXZ98Q = BigInt("128")
		const level2b7A0Vc9 = BigInt("2")
		const level1GssmBPZ = BigInt("19")
		await contracteLJVKOq.purchase.call(valueAMT2c96, _ref1FIUUVfA, _ref2P7EGs7X, _ref3YTXAnVr, _ref40K1eUR, _ref5X7a9GCW, commentEYKbLr, {from: accounts[0]});
		await contracteLJVKOq.setRefBonus.call(level1GssmBPZ, level2b7A0Vc9, level3LQXZ98Q, level4quNg598, level5tqVODMu, {from: accounts[3]});

		await expect(contracteLJVKOq.purchase.call(valueAMT2c96, _ref1FIUUVfA, _ref2P7EGs7X, _ref3YTXAnVr, _ref40K1eUR, _ref5X7a9GCW, commentEYKbLr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrSAgnf9c = accounts[3]
		const FOSTERAddrRnN5wm = accounts[3]
		const initialRateLSlwhCj = BigInt("1101")
		const initialPeriodO0VB5vE = BigInt("1155")
		const initialOwnerYj24KS = accounts[1]
		const contractbB2u8i2 = await Reseller.new(USDTAddrSAgnf9c, FOSTERAddrRnN5wm, initialRateLSlwhCj, initialPeriodO0VB5vE, initialOwnerYj24KS, {from: accounts[0]});
		const newFeeoI2Ul1o = BigInt("209")
		const valuegm25wV = BigInt("253")
		const newRateAgJS6mc = BigInt("1953")
		const accountfzKh5Dq = accounts[2]
		const accountHHYDyz6 = "0x0000000000000000000000000000000000000001"
		await contractbB2u8i2.switchState.call({from: accounts[3]});
		await contractbB2u8i2.setFee.call(newFeeoI2Ul1o, {from: accounts[4]});
		await contractbB2u8i2.withdraw.call(valuegm25wV, {from: accounts[3]});
		await contractbB2u8i2.setRate.call(newRateAgJS6mc, {from: accounts[1]});
		const nullLH8otrb = await contractbB2u8i2.allowanceFOSTER.call(accountfzKh5Dq, {from: accounts[1]});
		const nullamACiol = await contractbB2u8i2.allowanceFOSTER.call(accountHHYDyz6, {from: accounts[4]});

		await expect(contractbB2u8i2.switchState.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddruKAbtIT = accounts[3]
		const FOSTERAddrlZtPyDJ = accounts[4]
		const initialRateAUDad0B = BigInt("270")
		const initialPeriodECYfVku = BigInt("1515")
		const initialOwnerkdKU7PW = accounts[1]
		const contractYlEcBwS = await Reseller.new(USDTAddruKAbtIT, FOSTERAddrlZtPyDJ, initialRateAUDad0B, initialPeriodECYfVku, initialOwnerkdKU7PW, {from: accounts[2]});
		const accountm0EISK = accounts[1]
		const valuer4tme3D = BigInt("1288")
		const level5ounhyIJ = BigInt("151")
		const level41PMNf3 = BigInt("227")
		const level3YdYUrwR = BigInt("148")
		const level2Nnazl3k = BigInt("2")
		const level1FRNGlkq = BigInt("13")
		const nullv4STfup = await contractYlEcBwS.balanceFOSTER.call(accountm0EISK, {from: accounts[4]});
		await contractYlEcBwS.withdraw.call(valuer4tme3D, {from: "0x0000000000000000000000000000000000000001"});
		await contractYlEcBwS.setRefBonus.call(level1FRNGlkq, level2Nnazl3k, level3YdYUrwR, level41PMNf3, level5ounhyIJ, {from: accounts[3]});

		await expect(contractYlEcBwS.balanceFOSTER.call(accountm0EISK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})