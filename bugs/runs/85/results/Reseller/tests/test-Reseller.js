const Reseller = artifacts.require("Reseller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Reseller', (accounts) => {
	it('test for Reseller', async () => {
		const USDTAddrEfYdYjU = accounts[1]
		const FOSTERAddrtWc8Q4I = accounts[4]
		const initialRateoC7zT44 = BigInt("1361")
		const initialPeriodhWmLevr = BigInt("781")
		const initialOwner0Yp7v9 = accounts[5]
		const contracth2uyG7v = await Reseller.new(USDTAddrEfYdYjU, FOSTERAddrtWc8Q4I, initialRateoC7zT44, initialPeriodhWmLevr, initialOwner0Yp7v9, {from: accounts[3]});
		const newPeriodGG9Ydoh = BigInt("1937")
		const valueG2ErsCd = BigInt("1914")
		const recipientHgFIo9 = accounts[2]
		const ERC20TokenQ9N7A8r = accounts[0]
		const valueiKqAgZJ = BigInt("17")
		const recipientiJo0LtB = accounts[4]
		const ERC20TokenvPcdBa7 = accounts[0]
		await contracth2uyG7v.setPeriod.call(newPeriodGG9Ydoh, {from: accounts[2]});
		await contracth2uyG7v.withdrawERC20.call(ERC20TokenQ9N7A8r, recipientHgFIo9, valueG2ErsCd, {from: accounts[0]});
		await contracth2uyG7v.withdrawERC20.call(ERC20TokenvPcdBa7, recipientiJo0LtB, valueiKqAgZJ, {from: accounts[3]});

		await expect(contracth2uyG7v.setPeriod.call(newPeriodGG9Ydoh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrbqhZka3 = accounts[4]
		const FOSTERAddrLdbiNGx = accounts[1]
		const initialRateWO3uTqs = BigInt("1338")
		const initialPerioddLcOIHt = BigInt("1688")
		const initialOwnerAa4SBR5 = accounts[4]
		const contractg5d4m8S = await Reseller.new(USDTAddrbqhZka3, FOSTERAddrLdbiNGx, initialRateWO3uTqs, initialPerioddLcOIHt, initialOwnerAa4SBR5, {from: accounts[0]});
		const accountADdjKIv = accounts[2]
		const newPeriodcxKcddX = BigInt("1403")
		const amountVcj1IWe = BigInt("2021")
		const nullMmUFGor = await contractg5d4m8S.allowanceFOSTER.call(accountADdjKIv, {from: accounts[0]});
		await contractg5d4m8S.setPeriod.call(newPeriodcxKcddX, {from: accounts[3]});
		const nullj84Qc7S = await contractg5d4m8S.getEstimation.call(amountVcj1IWe, {from: accounts[1]});

		await expect(contractg5d4m8S.allowanceFOSTER.call(accountADdjKIv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddryJVKaBq = accounts[0]
		const FOSTERAddrYBCDPag = accounts[4]
		const initialRateeeQ8OkJ = BigInt("1753")
		const initialPeriodDhFnFa = BigInt("1572")
		const initialOwnerQQtxPe = accounts[5]
		const contractBrW7ApJ = await Reseller.new(USDTAddryJVKaBq, FOSTERAddrYBCDPag, initialRateeeQ8OkJ, initialPeriodDhFnFa, initialOwnerQQtxPe, {from: "0x0000000000000000000000000000000000000001"});
		const valueufJ5r0U = BigInt("343")
		const commentJaEwHIq = "A7HN1rGFu2Pc1sCbEQvYw3qgR884w9AMC26JCQduDs9St7v"
		const _ref5bTxBVES = accounts[0]
		const _ref4KU2pye = accounts[3]
		const _ref3x18WuT = accounts[2]
		const _ref2ioNFG1L = accounts[2]
		const _ref1RvK7sdR = "0x0000000000000000000000000000000000000001"
		const valueLRPugbt = BigInt("1647")
		const newRateDE6FWEE = BigInt("341")
		const _ref5DywSUs1 = accounts[2]
		const _ref4g4a91Zd = accounts[0]
		const _ref3OrQQg7G = accounts[0]
		const _ref2kan9lRj = accounts[3]
		const _ref1vhI42oV = accounts[4]
		const valueXHezZkH = BigInt("1842")
		const amountk3yZqxF = BigInt("1343")
		const accountLwB7y4P = accounts[0]
		await contractBrW7ApJ.withdraw.call(valueufJ5r0U, {from: accounts[4]});
		await contractBrW7ApJ.purchase.call(valueLRPugbt, _ref1RvK7sdR, _ref2ioNFG1L, _ref3x18WuT, _ref4KU2pye, _ref5bTxBVES, commentJaEwHIq, {from: accounts[5]});
		await contractBrW7ApJ.setRate.call(newRateDE6FWEE, {from: accounts[0]});
		await contractBrW7ApJ.buy.call(valueXHezZkH, _ref1vhI42oV, _ref2kan9lRj, _ref3OrQQg7G, _ref4g4a91Zd, _ref5DywSUs1, {from: accounts[0]});
		const nullm4tNXIF = await contractBrW7ApJ.getEstimation.call(amountk3yZqxF, {from: accounts[5]});
		const nullivFlL0G = await contractBrW7ApJ.allowanceFOSTER.call(accountLwB7y4P, {from: accounts[0]});
	});

	it('test for Reseller', async () => {
		const USDTAddrxgYBYC4 = accounts[3]
		const FOSTERAddrGn50wp = accounts[2]
		const initialRateJ6uC0C = BigInt("834")
		const initialPeriodHQUanKJ = BigInt("685")
		const initialOwnerj4g22s = accounts[5]
		const contractPasg3En = await Reseller.new(USDTAddrxgYBYC4, FOSTERAddrGn50wp, initialRateJ6uC0C, initialPeriodHQUanKJ, initialOwnerj4g22s, {from: accounts[3]});
		const valuewvdz1nL = BigInt("1204")
		const recipientqsSja6 = accounts[4]
		const ERC20TokenVXLW956 = accounts[1]
		const newMinimumLGX0ptH = BigInt("1220")
		const valueT9DzXtK = BigInt("688")
		await contractPasg3En.withdrawERC20.call(ERC20TokenVXLW956, recipientqsSja6, valuewvdz1nL, {from: accounts[3]});
		await contractPasg3En.setMinimum.call(newMinimumLGX0ptH, {from: accounts[2]});
		await contractPasg3En.withdraw.call(valueT9DzXtK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractPasg3En.withdrawERC20.call(ERC20TokenVXLW956, recipientqsSja6, valuewvdz1nL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrq3PFMVj = accounts[0]
		const FOSTERAddrXIjzREv = accounts[5]
		const initialRatee28aIz = BigInt("1426")
		const initialPeriodO6kcw6A = BigInt("1640")
		const initialOwnerc0pehU = accounts[3]
		const contracttn1em1Z = await Reseller.new(USDTAddrq3PFMVj, FOSTERAddrXIjzREv, initialRatee28aIz, initialPeriodO6kcw6A, initialOwnerc0pehU, {from: accounts[0]});
		const newBoss3LeWGcQI = "0x0000000000000000000000000000000000000001"
		const _periodOGOFmiE = BigInt("635")
		const amountixlHQJ4 = BigInt("1291")
		const recipientmsZn3Lx = "0x0000000000000000000000000000000000000001"
		const newRatecpujArC = BigInt("1687")
		const commentRlAGAkm = "C4u45CjynLOQ45xKKxfyVeIXN"
		const _ref5QyXhvgl = accounts[3]
		const _ref4feT2SDG = accounts[4]
		const _ref3c4vYFFf = accounts[0]
		const _ref2lxoFxNK = accounts[4]
		const _ref1nVZwXZq = accounts[3]
		const valuepYY9gqH = BigInt("330")
		await contracttn1em1Z.deposeBoss3.call(newBoss3LeWGcQI, {from: accounts[3]});
		await contracttn1em1Z.freezeAndTransfer.call(recipientmsZn3Lx, amountixlHQJ4, _periodOGOFmiE, {from: accounts[3]});
		await contracttn1em1Z.setRate.call(newRatecpujArC, {from: accounts[3]});
		await contracttn1em1Z.purchase.call(valuepYY9gqH, _ref1nVZwXZq, _ref2lxoFxNK, _ref3c4vYFFf, _ref4feT2SDG, _ref5QyXhvgl, commentRlAGAkm, {from: accounts[4]});

		await expect(contracttn1em1Z.deposeBoss3.call(newBoss3LeWGcQI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrH7T4e6 = accounts[1]
		const FOSTERAddrcCaLhB = accounts[2]
		const initialRatetey1h6 = BigInt("1334")
		const initialPeriodGVgqWqz = BigInt("670")
		const initialOwnerwyeUuqE = accounts[5]
		const contractWZHudex = await Reseller.new(USDTAddrH7T4e6, FOSTERAddrcCaLhB, initialRatetey1h6, initialPeriodGVgqWqz, initialOwnerwyeUuqE, {from: accounts[0]});
		const accountaCGgIpD = accounts[3]
		const amountBekDYpB = BigInt("1720")
		const newBoss2t5hiYWx = accounts[3]
		const accountdxcttAe = "0x0000000000000000000000000000000000000001"
		const newBoss3jeJGtZ0 = accounts[5]
		const nullt4FZxdV = await contractWZHudex.allowanceUSDT.call(accountaCGgIpD, {from: accounts[1]});
		const nullT7DGtVo = await contractWZHudex.getEstimation.call(amountBekDYpB, {from: accounts[3]});
		await contractWZHudex.deposeBoss2.call(newBoss2t5hiYWx, {from: accounts[3]});
		const null12W4tZ = await contractWZHudex.balanceUSDT.call(accountdxcttAe, {from: accounts[3]});
		await contractWZHudex.switchState.call({from: "0x0000000000000000000000000000000000000001"});
		await contractWZHudex.deposeBoss3.call(newBoss3jeJGtZ0, {from: accounts[1]});

		await expect(contractWZHudex.allowanceUSDT.call(accountaCGgIpD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrpq94pUC = accounts[3]
		const FOSTERAddrfOTMidS = accounts[1]
		const initialRatefBG8Qm3 = BigInt("368")
		const initialPeriodtgkGraO = BigInt("1393")
		const initialOwnerMsP8qU = accounts[4]
		const contractVzHOsT = await Reseller.new(USDTAddrpq94pUC, FOSTERAddrfOTMidS, initialRatefBG8Qm3, initialPeriodtgkGraO, initialOwnerMsP8qU, {from: accounts[1]});
		const amountHFORijq = BigInt("1289")
		const _periodQk93AW = BigInt("1675")
		const amountaJjEZ5r = BigInt("1208")
		const recipientUckb9kp = accounts[3]
		const _ref5bRB8iCu = accounts[4]
		const _ref4pobUJnj = accounts[1]
		const _ref3nLOwppm = accounts[4]
		const _ref2nYB6aSM = accounts[5]
		const _ref1If1unmX = accounts[0]
		const valueozlHynn = BigInt("974")
		const nullcZiUVtp = await contractVzHOsT.getEstimation.call(amountHFORijq, {from: accounts[3]});
		await contractVzHOsT.freezeAndTransfer.call(recipientUckb9kp, amountaJjEZ5r, _periodQk93AW, {from: accounts[3]});
		await contractVzHOsT.buy.call(valueozlHynn, _ref1If1unmX, _ref2nYB6aSM, _ref3nLOwppm, _ref4pobUJnj, _ref5bRB8iCu, {from: accounts[5]});

		assert.equal(nullcZiUVtp, 474352)
		await expect(contractVzHOsT.freezeAndTransfer.call(recipientUckb9kp, amountaJjEZ5r, _periodQk93AW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrRZeDirq = accounts[4]
		const FOSTERAddrfIR8Taa = accounts[3]
		const initialRateP68Fb9a = BigInt("719")
		const initialPeriodfvfkMQK = BigInt("1318")
		const initialOwnerDG2mVRw = accounts[2]
		const contractvbBwXT = await Reseller.new(USDTAddrRZeDirq, FOSTERAddrfIR8Taa, initialRateP68Fb9a, initialPeriodfvfkMQK, initialOwnerDG2mVRw, {from: accounts[4]});
		const valueknXFJ2 = BigInt("392")
		const level5qxambW1 = BigInt("5")
		const level4PfZWxZ6 = BigInt("3")
		const level3bf1DxRN = BigInt("199")
		const level2MMC6vbB = BigInt("238")
		const level1KRJ6O5E = BigInt("172")
		const accountiTyApyo = accounts[2]
		await contractvbBwXT.withdraw.call(valueknXFJ2, {from: accounts[2]});
		await contractvbBwXT.setRefBonus.call(level1KRJ6O5E, level2MMC6vbB, level3bf1DxRN, level4PfZWxZ6, level5qxambW1, {from: accounts[4]});
		await contractvbBwXT.switchState.call({from: accounts[3]});
		const nullEIsR52Q = await contractvbBwXT.allowanceFOSTER.call(accountiTyApyo, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractvbBwXT.withdraw.call(valueknXFJ2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrmYVUmpL = accounts[4]
		const FOSTERAddrjBxV9A7 = "0x0000000000000000000000000000000000000001"
		const initialRateDZbj5t4 = BigInt("536")
		const initialPeriodGmjv8wA = BigInt("351")
		const initialOwnerY2RmNHM = accounts[2]
		const contractZlobvkY = await Reseller.new(USDTAddrmYVUmpL, FOSTERAddrjBxV9A7, initialRateDZbj5t4, initialPeriodGmjv8wA, initialOwnerY2RmNHM, {from: accounts[4]});
		const newMinimumYmSTMiV = BigInt("1132")
		const _periodmYMf4jn = BigInt("785")
		const amountW3WkihS = BigInt("267")
		const recipientnsBnj9Q = accounts[4]
		const newRateb6fIgRM = BigInt("1298")
		const newBoss1cW4RVbu = accounts[1]
		const newBoss4M2iM6LH = accounts[1]
		await contractZlobvkY.setMinimum.call(newMinimumYmSTMiV, {from: accounts[2]});
		await contractZlobvkY.freezeAndTransfer.call(recipientnsBnj9Q, amountW3WkihS, _periodmYMf4jn, {from: accounts[4]});
		await contractZlobvkY.setRate.call(newRateb6fIgRM, {from: accounts[5]});
		await contractZlobvkY.deposeBoss1.call(newBoss1cW4RVbu, {from: accounts[3]});
		await contractZlobvkY.deposeBoss4.call(newBoss4M2iM6LH, {from: accounts[0]});

		await expect(contractZlobvkY.setMinimum.call(newMinimumYmSTMiV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrf6lvjZw = accounts[1]
		const FOSTERAddrD7axZWp = accounts[4]
		const initialRateh7KG9VG = BigInt("1361")
		const initialPeriodFyrOf7l = BigInt("781")
		const initialOwnerKlsTRiJ = accounts[5]
		const contracteY30wED = await Reseller.new(USDTAddrf6lvjZw, FOSTERAddrD7axZWp, initialRateh7KG9VG, initialPeriodFyrOf7l, initialOwnerKlsTRiJ, {from: accounts[3]});
		const newBoss2iw7Tz5 = accounts[1]
		const newPeriodNHp3vI4 = BigInt("1942")
		const valuelyrSbJt = BigInt("1914")
		const recipientPxFWhA4 = accounts[2]
		const ERC20TokenM3yPfvx = accounts[0]
		const valueIs52f5 = BigInt("17")
		const recipientpNgC04g = accounts[4]
		const ERC20TokenJIDDWw = accounts[0]
		await contracteY30wED.deposeBoss2.call(newBoss2iw7Tz5, {from: accounts[3]});
		await contracteY30wED.setPeriod.call(newPeriodNHp3vI4, {from: accounts[2]});
		await contracteY30wED.withdrawERC20.call(ERC20TokenM3yPfvx, recipientPxFWhA4, valuelyrSbJt, {from: accounts[0]});
		await contracteY30wED.withdrawERC20.call(ERC20TokenJIDDWw, recipientpNgC04g, valueIs52f5, {from: accounts[3]});

		await expect(contracteY30wED.deposeBoss2.call(newBoss2iw7Tz5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrAHNLH6v = accounts[0]
		const FOSTERAddrvjlZgZc = accounts[4]
		const initialRateazrDOCB = BigInt("1006")
		const initialPeriodRCndF7v = BigInt("49")
		const initialOwnerNZc9es2 = accounts[1]
		const contractiPmunUe = await Reseller.new(USDTAddrAHNLH6v, FOSTERAddrvjlZgZc, initialRateazrDOCB, initialPeriodRCndF7v, initialOwnerNZc9es2, {from: accounts[4]});
		const newFeeIekpaa5 = BigInt("192")
		const _periodEWKKHZr = BigInt("1545")
		const amountPpdndQ3 = BigInt("250")
		const recipientsKfs3u = accounts[3]
		const accountmZGxME2 = accounts[2]
		const newBoss4NSobCo = accounts[1]
		const accountJh2aaN = accounts[1]
		const amountPV5pFM = BigInt("1582")
		await contractiPmunUe.setFee.call(newFeeIekpaa5, {from: accounts[4]});
		await contractiPmunUe.freezeAndTransfer.call(recipientsKfs3u, amountPpdndQ3, _periodEWKKHZr, {from: accounts[0]});
		const nullfefzDRp = await contractiPmunUe.balanceUSDT.call(accountmZGxME2, {from: accounts[1]});
		await contractiPmunUe.deposeBoss4.call(newBoss4NSobCo, {from: accounts[4]});
		const nullSUx1Ej = await contractiPmunUe.balanceFOSTER.call(accountJh2aaN, {from: accounts[3]});
		const nullabUoLvU = await contractiPmunUe.getEstimation.call(amountPV5pFM, {from: accounts[1]});

		await expect(contractiPmunUe.setFee.call(newFeeIekpaa5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCChNivG = accounts[3]
		const FOSTERAddrwvdkNif = accounts[2]
		const initialRateRWMK4eO = BigInt("834")
		const initialPeriodGCh08HS = BigInt("685")
		const initialOwnerEmTNAK6 = accounts[5]
		const contractoIBvRV = await Reseller.new(USDTAddrCChNivG, FOSTERAddrwvdkNif, initialRateRWMK4eO, initialPeriodGCh08HS, initialOwnerEmTNAK6, {from: accounts[3]});
		const newBoss17M5HlE = accounts[1]
		const valueH0mlGu = BigInt("1204")
		const recipientVyWfCek = accounts[4]
		const ERC20Tokenyj2dm8P = accounts[1]
		const valuejrYOlL0 = BigInt("688")
		await contractoIBvRV.deposeBoss1.call(newBoss17M5HlE, {from: accounts[2]});
		await contractoIBvRV.withdrawERC20.call(ERC20Tokenyj2dm8P, recipientVyWfCek, valueH0mlGu, {from: accounts[3]});
		await contractoIBvRV.withdraw.call(valuejrYOlL0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractoIBvRV.deposeBoss1.call(newBoss17M5HlE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddritLpXYp = accounts[3]
		const FOSTERAddrDqoeYTt = accounts[2]
		const initialRatePreVBt5 = BigInt("834")
		const initialPeriodrwQ0fs1 = BigInt("685")
		const initialOwnerDuGjf8 = accounts[5]
		const contractVWzNjkS = await Reseller.new(USDTAddritLpXYp, FOSTERAddrDqoeYTt, initialRatePreVBt5, initialPeriodrwQ0fs1, initialOwnerDuGjf8, {from: accounts[3]});
		const newRateZS9i0W = BigInt("1477")
		const valueCnAGdcE = BigInt("672")
		await contractVWzNjkS.setRate.call(newRateZS9i0W, {from: accounts[0]});
		await contractVWzNjkS.withdraw.call(valueCnAGdcE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractVWzNjkS.setRate.call(newRateZS9i0W, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrJxjkSud = accounts[3]
		const FOSTERAddrqEK1Yx6 = accounts[2]
		const initialRatea3fwWSU = BigInt("834")
		const initialPeriodiO2HcXZ = BigInt("685")
		const initialOwnerPt1Q9F6 = accounts[5]
		const contractiXzlZEc = await Reseller.new(USDTAddrJxjkSud, FOSTERAddrqEK1Yx6, initialRatea3fwWSU, initialPeriodiO2HcXZ, initialOwnerPt1Q9F6, {from: accounts[3]});
		const valueJ5C7Gv1 = BigInt("666")
		await contractiXzlZEc.switchState.call({from: accounts[1]});
		await contractiXzlZEc.withdraw.call(valueJ5C7Gv1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractiXzlZEc.switchState.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrcedApIG = accounts[3]
		const FOSTERAddrc0ofuc = accounts[2]
		const initialRateVhEbUhT = BigInt("834")
		const initialPeriodtyO4rKk = BigInt("685")
		const initialOwnerZfR5rXh = accounts[5]
		const contractYevUcDC = await Reseller.new(USDTAddrcedApIG, FOSTERAddrc0ofuc, initialRateVhEbUhT, initialPeriodtyO4rKk, initialOwnerZfR5rXh, {from: accounts[3]});
		const newBoss4PpYdPo = "0x0000000000000000000000000000000000000001"
		const accountw3WIYLx = accounts[5]
		const accountJqytyGi = accounts[4]
		const valuelczK5ml = BigInt("688")
		await contractYevUcDC.deposeBoss4.call(newBoss4PpYdPo, {from: accounts[3]});
		const nullGShoGwF = await contractYevUcDC.balanceFOSTER.call(accountw3WIYLx, {from: accounts[1]});
		const nulln4fx42J = await contractYevUcDC.allowanceFOSTER.call(accountJqytyGi, {from: accounts[1]});
		await contractYevUcDC.withdraw.call(valuelczK5ml, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractYevUcDC.deposeBoss4.call(newBoss4PpYdPo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddru7BuRsO = accounts[3]
		const FOSTERAddrQKZ2pwM = accounts[2]
		const initialRateNR08uwZ = BigInt("834")
		const initialPeriodGQHaCl = BigInt("685")
		const initialOwnerwCrtUt = accounts[5]
		const contractID8fRYq = await Reseller.new(USDTAddru7BuRsO, FOSTERAddrQKZ2pwM, initialRateNR08uwZ, initialPeriodGQHaCl, initialOwnerwCrtUt, {from: accounts[3]});
		const _ref5TxX4KrW = accounts[0]
		const _ref4SnhLII = accounts[3]
		const _ref3HZqO9Ri = accounts[3]
		const _ref2yGpLatf = accounts[3]
		const _ref1E1Z0AMy = "0x0000000000000000000000000000000000000001"
		const valuepSw6vDv = BigInt("1477")
		const valueovOMTRp = BigInt("665")
		const _ref5g1hhRCR = accounts[0]
		const _ref4rNdLRWl = accounts[2]
		const _ref3fT6irNh = accounts[4]
		const _ref2unMOTNr = accounts[4]
		const _ref1PZhZxFi = accounts[1]
		const valueyEnivne = BigInt("1592")
		await contractID8fRYq.buy.call(valuepSw6vDv, _ref1E1Z0AMy, _ref2yGpLatf, _ref3HZqO9Ri, _ref4SnhLII, _ref5TxX4KrW, {from: accounts[0]});
		await contractID8fRYq.withdraw.call(valueovOMTRp, {from: "0x0000000000000000000000000000000000000001"});
		await contractID8fRYq.buy.call(valueyEnivne, _ref1PZhZxFi, _ref2unMOTNr, _ref3fT6irNh, _ref4rNdLRWl, _ref5g1hhRCR, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractID8fRYq.buy.call(valuepSw6vDv, _ref1E1Z0AMy, _ref2yGpLatf, _ref3HZqO9Ri, _ref4SnhLII, _ref5TxX4KrW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrkNUhRAM = accounts[4]
		const FOSTERAddrZYDVsPT = accounts[1]
		const initialRatefu7QHOd = BigInt("886")
		const initialPeriod7NEQO4 = BigInt("1039")
		const initialOwner5ZjYfY = accounts[4]
		const contractAN7RTq6 = await Reseller.new(USDTAddrkNUhRAM, FOSTERAddrZYDVsPT, initialRatefu7QHOd, initialPeriod7NEQO4, initialOwner5ZjYfY, {from: accounts[5]});
		const account6ITwKx = accounts[5]
		const accountKemFoX = accounts[3]
		const newBoss2oGOjLr = accounts[1]
		const newBoss2TXK8Y06 = accounts[5]
		const newBoss2hNgX5En = accounts[4]
		const nullJw3SJop = await contractAN7RTq6.balanceFOSTER.call(account6ITwKx, {from: accounts[1]});
		const nullwymGLEI = await contractAN7RTq6.allowanceFOSTER.call(accountKemFoX, {from: accounts[4]});
		await contractAN7RTq6.deposeBoss2.call(newBoss2oGOjLr, {from: accounts[4]});
		await contractAN7RTq6.deposeBoss2.call(newBoss2TXK8Y06, {from: accounts[0]});
		await contractAN7RTq6.deposeBoss2.call(newBoss2hNgX5En, {from: accounts[1]});

		await expect(contractAN7RTq6.balanceFOSTER.call(account6ITwKx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrCZ2A8JW = accounts[3]
		const FOSTERAddrFPURdZO = accounts[2]
		const initialRateF2O8cZ = BigInt("834")
		const initialPeriodg2oCjD6 = BigInt("685")
		const initialOwnerdMrlrk = accounts[5]
		const contractf5bDsta = await Reseller.new(USDTAddrCZ2A8JW, FOSTERAddrFPURdZO, initialRateF2O8cZ, initialPeriodg2oCjD6, initialOwnerdMrlrk, {from: accounts[3]});
		const level5CJx94Aw = BigInt("242")
		const level4UjEsN0q = BigInt("127")
		const level3wjvtp6 = BigInt("51")
		const level2KbHLeZQ = BigInt("99")
		const level1sw5QV5Y = BigInt("161")
		const _ref5ViV80t = accounts[0]
		const _ref4XlCj7Sp = accounts[3]
		const _ref3j2BUbzM = accounts[3]
		const _ref2nMeDIwN = accounts[3]
		const _ref1bbYsDC7 = "0x0000000000000000000000000000000000000001"
		const valueMhVwkDr = BigInt("1477")
		const valueEp6Sz0f = BigInt("1371")
		const _ref5Cp02g1m = accounts[0]
		const _ref4nqmLm8f = accounts[2]
		const _ref3mlz7fmx = accounts[4]
		const _ref2K5JH3TE = accounts[4]
		const _ref1WpX6FPJ = accounts[1]
		const valueGQtE0To = BigInt("1592")
		await contractf5bDsta.setRefBonus.call(level1sw5QV5Y, level2KbHLeZQ, level3wjvtp6, level4UjEsN0q, level5CJx94Aw, {from: accounts[2]});
		await contractf5bDsta.buy.call(valueMhVwkDr, _ref1bbYsDC7, _ref2nMeDIwN, _ref3j2BUbzM, _ref4XlCj7Sp, _ref5ViV80t, {from: accounts[0]});
		await contractf5bDsta.withdraw.call(valueEp6Sz0f, {from: "0x0000000000000000000000000000000000000001"});
		await contractf5bDsta.buy.call(valueGQtE0To, _ref1WpX6FPJ, _ref2K5JH3TE, _ref3mlz7fmx, _ref4nqmLm8f, _ref5Cp02g1m, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractf5bDsta.setRefBonus.call(level1sw5QV5Y, level2KbHLeZQ, level3wjvtp6, level4UjEsN0q, level5CJx94Aw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrAgcxwW8 = accounts[3]
		const FOSTERAddrEgztLVX = accounts[2]
		const initialRateZXvTE1K = BigInt("834")
		const initialPeriodEpSc2zD = BigInt("685")
		const initialOwnergloC0nB = accounts[5]
		const contractSAKYRi1 = await Reseller.new(USDTAddrAgcxwW8, FOSTERAddrEgztLVX, initialRateZXvTE1K, initialPeriodEpSc2zD, initialOwnergloC0nB, {from: accounts[3]});
		const commentPrGao22 = "lfqX9cm5zHXndWQYaGD1RSD4XB7gyB8frvhmSJAfdCqQS17lXvKJpVhgA1gjM6OEDU"
		const _ref5rEcrl2Z = accounts[1]
		const _ref4HXcNQeJ = accounts[1]
		const _ref3YJVldR1 = accounts[2]
		const _ref2kAg93m1 = accounts[5]
		const _ref1VR4wrX8 = accounts[1]
		const valueGUrbKKs = BigInt("643")
		const valueSjscpF1 = BigInt("661")
		await contractSAKYRi1.purchase.call(valueGUrbKKs, _ref1VR4wrX8, _ref2kAg93m1, _ref3YJVldR1, _ref4HXcNQeJ, _ref5rEcrl2Z, commentPrGao22, {from: "0x0000000000000000000000000000000000000001"});
		await contractSAKYRi1.withdraw.call(valueSjscpF1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(contractSAKYRi1.purchase.call(valueGUrbKKs, _ref1VR4wrX8, _ref2kAg93m1, _ref3YJVldR1, _ref4HXcNQeJ, _ref5rEcrl2Z, commentPrGao22, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Reseller', async () => {
		const USDTAddrz51rAOb = accounts[4]
		const FOSTERAddrvNwHihm = accounts[2]
		const initialRateqCJIAA = BigInt("551")
		const initialPeriodEg9wONy = BigInt("533")
		const initialOwnerrSLryzl = accounts[2]
		const contractK7ZSqGX = await Reseller.new(USDTAddrz51rAOb, FOSTERAddrvNwHihm, initialRateqCJIAA, initialPeriodEg9wONy, initialOwnerrSLryzl, {from: accounts[4]});
		const accountKb6MdXo = "0x0000000000000000000000000000000000000001"
		const accountSba6Rwv = accounts[0]
		const newBoss2sdOgpV = "0x0000000000000000000000000000000000000001"
		const level5JRn3F46 = BigInt("87")
		const level4G2KPsuB = BigInt("170")
		const level3Nc8tgdq = BigInt("251")
		const level2mDB3w99 = BigInt("163")
		const level1lceg170 = BigInt("197")
		const newBoss2wKK8LT2 = accounts[3]
		const nullmSLbSBw = await contractK7ZSqGX.balanceUSDT.call(accountKb6MdXo, {from: accounts[0]});
		const nullpb6Spwq = await contractK7ZSqGX.balanceUSDT.call(accountSba6Rwv, {from: accounts[2]});
		await contractK7ZSqGX.deposeBoss2.call(newBoss2sdOgpV, {from: accounts[2]});
		await contractK7ZSqGX.setRefBonus.call(level1lceg170, level2mDB3w99, level3Nc8tgdq, level4G2KPsuB, level5JRn3F46, {from: accounts[5]});
		await contractK7ZSqGX.deposeBoss2.call(newBoss2wKK8LT2, {from: accounts[3]});

		await expect(contractK7ZSqGX.balanceUSDT.call(accountKb6MdXo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})