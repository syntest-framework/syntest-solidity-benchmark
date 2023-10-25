const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozWJgo2Ma = await Cryptoz.new({from: accounts[0]});
		const uintd7ehNns = BigInt("645")
		await CryptozWJgo2Ma.getBonusBoosters.call({from: accounts[0]});
		const stringFg1ctuC = await CryptozWJgo2Ma.tokenURI.call(uintd7ehNns, {from: accounts[0]});

		await expect(CryptozWJgo2Ma.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozdFtmqP6 = await Cryptoz.new({from: accounts[2]});
		const uintTu8Qzfm = BigInt("350")
		const addressNs6t82C = "0x0000000000000000000000000000000000000001"
		const boolURQ1pgi = await CryptozdFtmqP6.buyBoosterCard.call(uintTu8Qzfm, {from: accounts[2]});
		const uintfIUgWC4 = await CryptozdFtmqP6.getTimeToDailyBonus.call(addressNs6t82C, {from: accounts[0]});
		await CryptozdFtmqP6.withdraw.call({from: accounts[2]});

		await expect(CryptozdFtmqP6.buyBoosterCard.call(uintTu8Qzfm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozJkGOAJA = await Cryptoz.new({from: accounts[0]});
		const uintuh9Iatq = BigInt("1273")
		await CryptozJkGOAJA.getBonusBoosters.call({from: accounts[1]});
		const boolT9HIuM4 = await CryptozJkGOAJA.openBoosterCard.call(uintuh9Iatq, {from: accounts[2]});
		await CryptozJkGOAJA.buyBoosterCardAndOpen.call({from: accounts[0]});
		await CryptozJkGOAJA.buyBoosterCardAndOpen.call({from: accounts[3]});

		await expect(CryptozJkGOAJA.getBonusBoosters.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozNJWAJe = await Cryptoz.new({from: accounts[5]});
		const stringCpxtED = await CryptozNJWAJe.symbol.call({from: accounts[4]});
		await CryptozNJWAJe.buyBoosterCardAndOpen.call({from: accounts[4]});

		assert.equal(stringCpxtED, "Cryptoz")
		await expect(CryptozNJWAJe.buyBoosterCardAndOpen.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozE0aK3tg = await Cryptoz.new({from: accounts[1]});
		const addressxpSQfM = "0x0000000000000000000000000000000000000001"
		const uintbBqqIYC = BigInt("856")
		const uintoyRHH3 = BigInt("720")
		const uintbmpBtdv = BigInt("1226")
		const uintE7NrWb0 = BigInt("1250")
		const uintWwTqoXa = BigInt("46")
		const uint13vxzQ = BigInt("217")
		const uintcwv5hlT = BigInt("181")
		const stringRiK7RRv = "UlPHYlULNTTCpTd"
		const stringCXpKmgz = "KgCto3W9wmF9OLSJ"
		const uintl1CLjbN = BigInt("66")
		const uintyIpinSD = await CryptozE0aK3tg.getTimeToDailyBonus.call(addressxpSQfM, {from: accounts[4]});
		await CryptozE0aK3tg.getOwnedCard.call(uintbBqqIYC, {from: accounts[0]});
		const boolOa4lpQa = await CryptozE0aK3tg.loadNewCardType.call(uintl1CLjbN, stringCXpKmgz, stringRiK7RRv, uintcwv5hlT, uint13vxzQ, uintWwTqoXa, uintE7NrWb0, uintbmpBtdv, uintoyRHH3, {from: accounts[1]});

		assert.equal(uintyIpinSD, BigInt("1630205599"))
		await expect(CryptozE0aK3tg.getOwnedCard.call(uintbBqqIYC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozLoUzDvs = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlFLHDth = BigInt("1494")
		const uintcWLSxkR = BigInt("1461")
		const boolpfIWUEe = await CryptozLoUzDvs.buyBoosterCard.call(uintlFLHDth, {from: accounts[1]});
		const uint256HMlwZNa = await CryptozLoUzDvs.tokenByIndex.call(uintcWLSxkR, {from: accounts[1]});
	});

	it('test for Cryptoz', async () => {
		const CryptozCREx3IN = await Cryptoz.new({from: accounts[3]});
		const uintmQ9FGo2 = BigInt("547")
		const uintCA7cEp = BigInt("104")
		const uintCcQcfF4 = BigInt("1440")
		const uintmpCT5Zp = BigInt("89")
		const uintoZecQWb = BigInt("1761")
		const uintXCgaGyF = BigInt("661")
		await CryptozCREx3IN.withdraw.call({from: accounts[2]});
		const uint32JgXc6U2 = await CryptozCREx3IN.getFreeCard.call(uintmQ9FGo2, {from: "0x0000000000000000000000000000000000000001"});
		const boolY3Uuwv7 = await CryptozCREx3IN.addTocardType.call(uintXCgaGyF, uintoZecQWb, uintmpCT5Zp, uintCcQcfF4, uintCA7cEp, {from: accounts[2]});

		await expect(CryptozCREx3IN.withdraw.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozAQwllN0 = await Cryptoz.new({from: accounts[3]});
		const uintZzYOM7V = BigInt("1850")
		const addressin3yWTA = accounts[1]
		const uintb90WtCo = BigInt("271")
		const uint7WNUuZ = BigInt("1459")
		const uintfC8OjGU = BigInt("999")
		const uintQ9LqQyL = BigInt("244")
		const uintNM3eHBh = BigInt("97")
		const uintGAqarPH = BigInt("135")
		const stringhkmAxnG = "IeegXd2fR9SnTb9X15653xPdaan5YAEUwvT9IP2qycUEaEg8R4PXxJCFtAkLw33p"
		const stringiCBpAQU = "6MyFY1eLSwzrG2HCxJ7KR7wwyepQtPuKE6WgtfnQFOxnAQPqu4cBYViIBfB4sXaBEbfnJF9NopxDGG3Kz6yhMJx6Gu"
		const uintsWshjE = BigInt("1")
		const stringMezk8zu = await CryptozAQwllN0.tokenURI.call(uintZzYOM7V, {from: accounts[3]});
		const uint256YO8lZCG = await CryptozAQwllN0.totalSupply.call({from: accounts[0]});
		const uintkSQjGPs = await CryptozAQwllN0.getTimeToDailyBonus.call(addressin3yWTA, {from: accounts[1]});
		const boolzSdYipN = await CryptozAQwllN0.loadNewCardType.call(uintsWshjE, stringiCBpAQU, stringhkmAxnG, uintGAqarPH, uintNM3eHBh, uintQ9LqQyL, uintfC8OjGU, uint7WNUuZ, uintb90WtCo, {from: accounts[3]});
		const uint256sjfcPxN = await CryptozAQwllN0.totalSupply.call({from: accounts[2]});

		assert.equal(boolzSdYipN, true)
		assert.equal(stringMezk8zu, "https://cryptoz.cards/data/1850")
		assert.equal(uint256YO8lZCG, BigInt("0"))
		assert.equal(uint256sjfcPxN, BigInt("0"))
		assert.equal(uintkSQjGPs, BigInt("1630205592"))
	});

	it('test for Cryptoz', async () => {
		const CryptozcRq1UrX = await Cryptoz.new({from: accounts[5]});
		const addressekJWadm = accounts[0]
		const uintpBM9hFV = BigInt("1472")
		const uintHPflo6q = BigInt("122")
		const address9MyNZh = await CryptozcRq1UrX.linkMySponsor.call(addressekJWadm, {from: "0x0000000000000000000000000000000000000001"});
		const boolDIFaBJE = await CryptozcRq1UrX.openBoosterCard.call(uintpBM9hFV, {from: accounts[3]});
		await CryptozcRq1UrX.getBonusBoosters.call({from: "0x0000000000000000000000000000000000000001"});
		await CryptozcRq1UrX.getOwnedCard.call(uintHPflo6q, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozcRq1UrX.linkMySponsor.call(addressekJWadm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozUZIpt2b = await Cryptoz.new({from: accounts[3]});
		const uintoRkKHd = BigInt("897")
		const addressdVMEAi = accounts[5]
		const uintDcm4Aek = BigInt("2044")
		const uintO2LUsEs = BigInt("257")
		const uint256LZysiiH = await CryptozUZIpt2b.sacrifice.call(uintoRkKHd, {from: accounts[1]});
		const addressGPosCn = await CryptozUZIpt2b.initialize.call(addressdVMEAi, {from: accounts[4]});
		const boolQH9SPgy = await CryptozUZIpt2b.buyCard.call(uintDcm4Aek, {from: accounts[0]});
		const stringbUThVZt = await CryptozUZIpt2b.symbol.call({from: accounts[3]});
		await CryptozUZIpt2b.getTokensByRarity.call({from: accounts[4]});
		const uint256XQjOV6l = await CryptozUZIpt2b.tokenByIndex.call(uintO2LUsEs, {from: accounts[0]});

		await expect(CryptozUZIpt2b.sacrifice.call(uintoRkKHd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozqgI713D = await Cryptoz.new({from: accounts[3]});
		const addressLLR6Q5C = accounts[3]
		const addressTpgo9C = accounts[5]
		const addresslQkoBN6 = accounts[1]
		const addressTQ2zM1h = "0x0000000000000000000000000000000000000001"
		const uintaXByA0s = BigInt("16")
		const uinttgm0mXq = BigInt("38")
		const uintFcagpPr = BigInt("1489")
		const uintSmZS5qG = BigInt("1081")
		const uintJkId7lp = BigInt("1760")
		await CryptozqgI713D.getTokensByRarity.call({from: accounts[1]});
		const uint256arrayarjDFMZ = await CryptozqgI713D.tokensOfOwner.call(addressLLR6Q5C, {from: accounts[3]});
		const addressLaOiIGj = await CryptozqgI713D.linkMySponsor.call(addressTpgo9C, {from: accounts[5]});
		const addressLACl8iX = await CryptozqgI713D.linkMySponsor.call(addresslQkoBN6, {from: accounts[1]});
		const uinte2gUf4D = await CryptozqgI713D.getTimeToDailyBonus.call(addressTQ2zM1h, {from: accounts[2]});
		const boolSUO7PR9 = await CryptozqgI713D.addTocardType.call(uintJkId7lp, uintSmZS5qG, uintFcagpPr, uinttgm0mXq, uintaXByA0s, {from: accounts[2]});

		await expect(CryptozqgI713D.getTokensByRarity.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozAQwllN0 = await Cryptoz.new({from: accounts[3]});
		const uintC8xKdFo = BigInt("1850")
		const uintbcTGaRt = BigInt("659")
		const addressk1y41tG = accounts[1]
		const uintyLkAG6M = BigInt("271")
		const uintrSt25AC = BigInt("1459")
		const uintfEaHLg = BigInt("999")
		const uintxsFIPt2 = BigInt("244")
		const uintXgglS8u = BigInt("97")
		const uintabsheVp = BigInt("135")
		const stringhkmAxnG = "IeegXd2fR9SnTb9X15653xPdaan5YAEUwvT9IP2qycUEaEg8R4PXxJCFtAkLw33p"
		const stringiCBpAQU = "6MyFY1eLSwzrG2HCxJ7KR7wwyepQtPuKE6WgtfnQFOxnAQPqu4cBYViIBfB4sXaBEbfnJF9NopxDGG3Kz6yhMJx6Gu"
		const uintEwIzPCn = BigInt("1")
		const stringMezk8zu = await CryptozAQwllN0.tokenURI.call(uintC8xKdFo, {from: accounts[3]});
		const uint256YO8lZCG = await CryptozAQwllN0.totalSupply.call({from: accounts[0]});
		const uint32SqFUwcu = await CryptozAQwllN0.isValidCard.call(uintbcTGaRt, {from: accounts[2]});
		const uintkSQjGPs = await CryptozAQwllN0.getTimeToDailyBonus.call(addressk1y41tG, {from: accounts[1]});
		const boolzSdYipN = await CryptozAQwllN0.loadNewCardType.call(uintEwIzPCn, stringiCBpAQU, stringhkmAxnG, uintabsheVp, uintXgglS8u, uintxsFIPt2, uintfEaHLg, uintrSt25AC, uintyLkAG6M, {from: accounts[3]});

		assert.equal(stringMezk8zu, "https://cryptoz.cards/data/1850")
		assert.equal(uint256YO8lZCG, BigInt("0"))
		await expect(CryptozAQwllN0.isValidCard.call(uintbcTGaRt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozcRq1UrX = await Cryptoz.new({from: accounts[5]});
		const uinthTeM0BV = BigInt("53")
		const addressrZt9RNs = accounts[1]
		const addressAEoUrIb = accounts[4]
		const uintxFR9l4x = BigInt("1470")
		const addressYCrcn49 = await CryptozcRq1UrX.transferFrom.call(addressAEoUrIb, addressrZt9RNs, uinthTeM0BV, {from: accounts[2]});
		const boolDIFaBJE = await CryptozcRq1UrX.openBoosterCard.call(uintxFR9l4x, {from: accounts[3]});

		await expect(CryptozcRq1UrX.transferFrom.call(addressAEoUrIb, addressrZt9RNs, uinthTeM0BV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozcRq1UrX = await Cryptoz.new({from: accounts[5]});
		const uintAf9HMaM = BigInt("53")
		const addressZIHJGs6 = accounts[1]
		const addressNoQf9hC = accounts[4]
		const uintU1Ry3Xi = BigInt("1470")
		const uintxz2ZUN0 = BigInt("1700")
		const uint256GHgSIO3 = await CryptozcRq1UrX.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await CryptozcRq1UrX.f.call({from: "0x0000000000000000000000000000000000000001"});
		const addressYCrcn49 = await CryptozcRq1UrX.transferFrom.call(addressNoQf9hC, addressZIHJGs6, uintAf9HMaM, {from: accounts[2]});
		const boolDIFaBJE = await CryptozcRq1UrX.openBoosterCard.call(uintU1Ry3Xi, {from: accounts[3]});
		const boolH4CFwZM = await CryptozcRq1UrX.buyBoosterCard.call(uintxz2ZUN0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256GHgSIO3, BigInt("0"))
		await expect(CryptozcRq1UrX.f.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozcRq1UrX = await Cryptoz.new({from: accounts[5]});
		const uinthzWU1Th = BigInt("1602")
		const addressoRYyWmj = accounts[1]
		const uintPhQZL0t = BigInt("1717")
		const addressTXNbMsD = accounts[4]
		const addresss6aco7V = accounts[3]
		const uintR6O8Qh6 = BigInt("53")
		const addressU5qQyzJ = accounts[2]
		const addressijq9Z0R = accounts[5]
		const uintt2vIGAc = BigInt("41")
		const uintkuzd4cH = BigInt("333")
		const uintHBTxHKk = BigInt("1940")
		const uintpFFNByk = BigInt("1140")
		const uintw8evxXc = BigInt("1823")
		const stringaYd8Zu1 = await CryptozcRq1UrX.symbol.call({from: accounts[0]});
		const uint256BLwwExW = await CryptozcRq1UrX.tokenOfOwnerByIndex.call(addressoRYyWmj, uinthzWU1Th, {from: accounts[2]});
		const addressXhjNUkG = await CryptozcRq1UrX.transferFrom.call(addresss6aco7V, addressTXNbMsD, uintPhQZL0t, {from: accounts[4]});
		const addressYCrcn49 = await CryptozcRq1UrX.transferFrom.call(addressijq9Z0R, addressU5qQyzJ, uintR6O8Qh6, {from: accounts[2]});
		const boolycUZYQb = await CryptozcRq1UrX.addTocardType.call(uintw8evxXc, uintpFFNByk, uintHBTxHKk, uintkuzd4cH, uintt2vIGAc, {from: accounts[2]});

		assert.equal(stringaYd8Zu1, "Cryptoz")
		await expect(CryptozcRq1UrX.tokenOfOwnerByIndex.call(addressoRYyWmj, uinthzWU1Th, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozXihQgBi = await Cryptoz.new({from: accounts[2]});
		const uintTp7Yf1 = BigInt("411")
		const addressodW4nsa = accounts[1]
		const stringdS8NOcp = await CryptozXihQgBi.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint32oiIJk2j = await CryptozXihQgBi.getFreeCard.call(uintTp7Yf1, {from: accounts[4]});
		const uintEfthO32 = await CryptozXihQgBi.getTimeToDailyBonus.call(addressodW4nsa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringdS8NOcp, "Cryptoz Cards")
		await expect(CryptozXihQgBi.getFreeCard.call(uintTp7Yf1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozcRq1UrX = await Cryptoz.new({from: accounts[5]});
		const uintppMEUwo = BigInt("1907")
		const uintS8H9siB = BigInt("1100")
		const uintMeYdbbt = BigInt("42")
		const addressmnaBi6 = accounts[2]
		const address3jjA68 = accounts[5]
		const uint256LIXbWpn = await CryptozcRq1UrX.tokenByIndex.call(uintppMEUwo, {from: accounts[0]});
		await CryptozcRq1UrX.getOwnedCard.call(uintS8H9siB, {from: accounts[4]});
		const addressYCrcn49 = await CryptozcRq1UrX.transferFrom.call(address3jjA68, addressmnaBi6, uintMeYdbbt, {from: accounts[2]});

		await expect(CryptozcRq1UrX.tokenByIndex.call(uintppMEUwo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozWJgo2Ma = await Cryptoz.new({from: accounts[0]});
		const uintKOhOKac = BigInt("243")
		const uintORBr8Sc = BigInt("613")
		const uintSxu2gc8 = BigInt("1612")
		const uintkd2O9B = BigInt("1935")
		const uintpI3gI3J = BigInt("1159")
		await CryptozWJgo2Ma.getBonusBoosters.call({from: accounts[0]});
		const boolo6sxG0z = await CryptozWJgo2Ma.addTocardType.call(uintpI3gI3J, uintkd2O9B, uintSxu2gc8, uintORBr8Sc, uintKOhOKac, {from: accounts[0]});
		await CryptozWJgo2Ma.withdraw.call({from: accounts[1]});

		await expect(CryptozWJgo2Ma.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozcRq1UrX = await Cryptoz.new({from: accounts[5]});
		const uinte7f6wm = BigInt("1453")
		const addresseHh4DA5 = "0x0000000000000000000000000000000000000000"
		const uintzjYo99J = BigInt("150")
		const uint256lwdh3v = await CryptozcRq1UrX.tokenOfOwnerByIndex.call(addresseHh4DA5, uinte7f6wm, {from: accounts[0]});
		const uint32cugLkYk = await CryptozcRq1UrX.getFreeCard.call(uintzjYo99J, {from: accounts[1]});
		await CryptozcRq1UrX.buyBoosterCardAndOpen.call({from: accounts[4]});
		await CryptozcRq1UrX.getBonusBoosters.call({from: accounts[3]});

		await expect(CryptozcRq1UrX.tokenOfOwnerByIndex.call(addresseHh4DA5, uinte7f6wm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})