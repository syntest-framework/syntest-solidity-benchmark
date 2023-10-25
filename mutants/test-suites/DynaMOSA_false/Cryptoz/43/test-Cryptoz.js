const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozYX592Zq = await Cryptoz.new({from: accounts[3]});
		const uintnzn2F9U = BigInt("1421")
		const uintLNAdLgf = BigInt("1187")
		const addressO9r2n9y = accounts[1]
//		await CryptozYX592Zq.getOwnedCard.call(uintnzn2F9U, {from: accounts[1]});
//		const boolNjtB3ZP = await CryptozYX592Zq.buyCard.call(uintLNAdLgf, {from: accounts[3]});
//		const uintympZUlK = await CryptozYX592Zq.getTimeToDailyBonus.call(addressO9r2n9y, {from: accounts[0]});

		await expect(CryptozYX592Zq.getOwnedCard.call(uintnzn2F9U, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozZUvWVC7 = await Cryptoz.new({from: accounts[2]});
		const addressINWzOPm = accounts[3]
		const uintr2iNz2 = BigInt("12")
//		const addresstyYvRsl = await CryptozZUvWVC7.initialize.call(addressINWzOPm, {from: accounts[0]});
//		await CryptozZUvWVC7.getBonusBoosters.call({from: accounts[0]});
//		const uint256Vu9LVX = await CryptozZUvWVC7.totalSupply.call({from: accounts[3]});
//		const stringnu6PfW1 = await CryptozZUvWVC7.tokenURI.call(uintr2iNz2, {from: accounts[4]});

		await expect(CryptozZUvWVC7.initialize.call(addressINWzOPm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozpnoQNto = await Cryptoz.new({from: accounts[3]});
		const addressjiCgRbF = accounts[5]
		const stringoMR6sBQ = await CryptozpnoQNto.name.call({from: accounts[3]});
//		const addresssSHJb6l = await CryptozpnoQNto.linkMySponsor.call(addressjiCgRbF, {from: accounts[0]});

		assert.equal(stringoMR6sBQ, "Cryptoz Cards")
		await expect(CryptozpnoQNto.linkMySponsor.call(addressjiCgRbF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozuoN233 = await Cryptoz.new({from: accounts[0]});
		const uintTepLpRI = BigInt("525")
		const uintCwkU8kG = BigInt("257")
		const addressEep3paa = accounts[3]
		const uintGHBMjha = BigInt("162")
		const uintDKOmJOQ = BigInt("535")
		const uintJ1vnnWv = BigInt("788")
		const uintaaznDgR = BigInt("1346")
		const uintb69hOAX = BigInt("1718")
//		const uint256ClMbWnq = await CryptozuoN233.sacrifice.call(uintTepLpRI, {from: accounts[0]});
//		await CryptozuoN233.getBonusBoosters.call({from: accounts[3]});
//		const boolbpQdALi = await CryptozuoN233.openBoosterCard.call(uintCwkU8kG, {from: accounts[1]});
//		const addressm73bw1A = await CryptozuoN233.linkMySponsor.call(addressEep3paa, {from: accounts[3]});
//		const boolny15V8N = await CryptozuoN233.addTocardType.call(uintb69hOAX, uintaaznDgR, uintJ1vnnWv, uintDKOmJOQ, uintGHBMjha, {from: accounts[4]});
//		const uint256IMMk4nG = await CryptozuoN233.totalSupply.call({from: accounts[0]});

		await expect(CryptozuoN233.sacrifice.call(uintTepLpRI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozup85vY9 = await Cryptoz.new({from: accounts[5]});
		const uintRw5co1 = BigInt("1102")
		const addressCIxT83y = accounts[0]
		const uintnpHf1TG = BigInt("745")
		const uintINhsquL = BigInt("1856")
		const addressuJkNlAz = accounts[0]
//		const uint256wUTZWz = await Cryptozup85vY9.tokenOfOwnerByIndex.call(addressCIxT83y, uintRw5co1, {from: accounts[1]});
//		const stringiwT5XOg = await Cryptozup85vY9.name.call({from: accounts[4]});
//		const uint256aLU0MNu = await Cryptozup85vY9.tokenByIndex.call(uintnpHf1TG, {from: accounts[3]});
//		await Cryptozup85vY9.getOwnedCard.call(uintINhsquL, {from: accounts[2]});
//		const uintgrzkrJo = await Cryptozup85vY9.getTimeToDailyBonus.call(addressuJkNlAz, {from: accounts[4]});

		await expect(Cryptozup85vY9.tokenOfOwnerByIndex.call(addressCIxT83y, uintRw5co1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozrrAVKHF = await Cryptoz.new({from: accounts[1]});
		const addressmnqKKoC = accounts[4]
		const uintUoAtCbG = BigInt("1493")
		const uintlKdYe0M = BigInt("483")
		const uintx9z0YiG = BigInt("1863")
		const addressOP72hp = accounts[0]
		const uintncj6oNt = BigInt("370")
		const uint256arrayT8GFYeJ = await CryptozrrAVKHF.tokensOfOwner.call(addressmnqKKoC, {from: accounts[1]});
//		const uint256Q2kQuos = await CryptozrrAVKHF.sacrifice.call(uintUoAtCbG, {from: accounts[0]});
//		const boolqSmRMp4 = await CryptozrrAVKHF.openBoosterCard.call(uintlKdYe0M, {from: accounts[4]});
//		const uint256XV5doag = await CryptozrrAVKHF.tokenOfOwnerByIndex.call(addressOP72hp, uintx9z0YiG, {from: accounts[3]});
//		const uint32tKZZoUp = await CryptozrrAVKHF.getFreeCard.call(uintncj6oNt, {from: accounts[0]});

		assert.equal(uint256arrayT8GFYeJ, BigInt(""))
		await expect(CryptozrrAVKHF.sacrifice.call(uintUoAtCbG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozO6J6hY5 = await Cryptoz.new({from: accounts[2]});
		const uintIhDEBr5 = BigInt("1327")
		const uintX6YBd5W = BigInt("738")
//		const uint32RDE687a = await CryptozO6J6hY5.isValidCard.call(uintIhDEBr5, {from: accounts[1]});
//		const booloN1ryi0 = await CryptozO6J6hY5.openBoosterCard.call(uintX6YBd5W, {from: accounts[1]});
//		await CryptozO6J6hY5.getBonusBoosters.call({from: accounts[4]});

		await expect(CryptozO6J6hY5.isValidCard.call(uintIhDEBr5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozQJDHWhB = await Cryptoz.new({from: accounts[1]});
		const addressmWU8EGe = accounts[4]
		const uintHLFlKcD = BigInt("241")
		const uint256arrayAogHMLe = await CryptozQJDHWhB.tokensOfOwner.call(addressmWU8EGe, {from: accounts[5]});
//		await CryptozQJDHWhB.getTokensByRarity.call({from: accounts[4]});
//		const uint32jafPNAA = await CryptozQJDHWhB.isValidCard.call(uintHLFlKcD, {from: accounts[2]});

		assert.equal(uint256arrayAogHMLe, BigInt(""))
		await expect(CryptozQJDHWhB.getTokensByRarity.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozO6J6hY5 = await Cryptoz.new({from: accounts[2]});
		const uintZx7kXeY = BigInt("1571")
		const uintlsXoHNF = BigInt("1826")
		const addressynt2xbA = accounts[0]
		const addressKKucUth = accounts[3]
		const uintI9csq3 = BigInt("738")
//		await CryptozO6J6hY5.getBonusBoosters.call({from: accounts[3]});
//		const uint32RDE687a = await CryptozO6J6hY5.isValidCard.call(uintZx7kXeY, {from: accounts[1]});
//		const addressRTVqX6u = await CryptozO6J6hY5.transferFrom.call(addressKKucUth, addressynt2xbA, uintlsXoHNF, {from: accounts[5]});
//		const booloN1ryi0 = await CryptozO6J6hY5.openBoosterCard.call(uintI9csq3, {from: accounts[1]});
//		await CryptozO6J6hY5.getBonusBoosters.call({from: accounts[4]});

		await expect(CryptozO6J6hY5.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozrrAVKHF = await Cryptoz.new({from: accounts[1]});
		const addressXY48v4 = accounts[5]
		const uintWQ6nKLB = BigInt("483")
		const uintxvpmDjW = BigInt("1632")
		const uintIgXX4r = BigInt("1863")
		const addresspXlI9jn = accounts[0]
		const uintGsSfUja = BigInt("370")
		const uint256arrayT8GFYeJ = await CryptozrrAVKHF.tokensOfOwner.call(addressXY48v4, {from: accounts[1]});
//		const boolqSmRMp4 = await CryptozrrAVKHF.openBoosterCard.call(uintWQ6nKLB, {from: accounts[4]});
//		const boolx1V2pPF = await CryptozrrAVKHF.buyBoosterCard.call(uintxvpmDjW, {from: accounts[3]});
//		const uint256XV5doag = await CryptozrrAVKHF.tokenOfOwnerByIndex.call(addresspXlI9jn, uintIgXX4r, {from: accounts[3]});
//		const uint32tKZZoUp = await CryptozrrAVKHF.getFreeCard.call(uintGsSfUja, {from: accounts[0]});

		assert.equal(uint256arrayT8GFYeJ, BigInt(""))
		await expect(CryptozrrAVKHF.openBoosterCard.call(uintWQ6nKLB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozrrAVKHF = await Cryptoz.new({from: accounts[1]});
		const addressspmqJ4S = accounts[5]
		const uintvghnqnG = BigInt("483")
		const uintCG3F3bG = BigInt("1609")
		const uintG2P2AS0 = BigInt("1632")
		const uintZsbE9cn = BigInt("1863")
		const addresszRVx6Zr = accounts[0]
		const uintUnKLF8Z = BigInt("370")
		const uint256arrayT8GFYeJ = await CryptozrrAVKHF.tokensOfOwner.call(addressspmqJ4S, {from: accounts[1]});
		const uint256odY8ccT = await CryptozrrAVKHF.totalSupply.call({from: accounts[2]});
//		const boolqSmRMp4 = await CryptozrrAVKHF.openBoosterCard.call(uintvghnqnG, {from: accounts[4]});
//		const uint32WtwhQis = await CryptozrrAVKHF.isValidCard.call(uintCG3F3bG, {from: accounts[0]});
//		const boolx1V2pPF = await CryptozrrAVKHF.buyBoosterCard.call(uintG2P2AS0, {from: accounts[3]});
//		const uint256XV5doag = await CryptozrrAVKHF.tokenOfOwnerByIndex.call(addresszRVx6Zr, uintZsbE9cn, {from: accounts[3]});
//		const uint256gdJgag = await CryptozrrAVKHF.totalSupply.call({from: accounts[0]});
//		const uint32tKZZoUp = await CryptozrrAVKHF.getFreeCard.call(uintUnKLF8Z, {from: accounts[0]});

		assert.equal(uint256arrayT8GFYeJ, BigInt(""))
		assert.equal(uint256odY8ccT, BigInt("0"))
		await expect(CryptozrrAVKHF.openBoosterCard.call(uintvghnqnG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozAtLGb9L = await Cryptoz.new({from: accounts[2]});
		const uintq66w6I = BigInt("1136")
		const addressQInSFN9 = accounts[1]
		const addressT1EWnt = accounts[3]
		const uintdHYmVGZ = BigInt("1872")
		const uintQRHVpn = BigInt("1503")
		const addressDEX5aPL = accounts[2]
		const uintY37bejS = BigInt("705")
		const uinttvN7Onf = BigInt("796")
//		const addressP3Nco6 = await CryptozAtLGb9L.transferFrom.call(addressT1EWnt, addressQInSFN9, uintq66w6I, {from: accounts[1]});
//		const boolg08ZNn3 = await CryptozAtLGb9L.buyBoosterCard.call(uintdHYmVGZ, {from: accounts[2]});
//		const uint256UJYpNsJ = await CryptozAtLGb9L.tokenOfOwnerByIndex.call(addressDEX5aPL, uintQRHVpn, {from: accounts[0]});
//		const uint32y24Iqmn = await CryptozAtLGb9L.getFreeCard.call(uintY37bejS, {from: accounts[5]});
//		const boolMAsRh2z = await CryptozAtLGb9L.buyCard.call(uinttvN7Onf, {from: accounts[4]});

		await expect(CryptozAtLGb9L.transferFrom.call(addressT1EWnt, addressQInSFN9, uintq66w6I, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptozr4IRbrC = await Cryptoz.new({from: accounts[0]});
		const uintlgVsQNr = BigInt("225")
		const uintIexduUu = BigInt("482")
		const uintGuGfMDM = BigInt("1616")
		const addressX1uVMW0 = accounts[4]
		const addressFV9D0IG = accounts[2]
		const stringIiPPhTd = await Cryptozr4IRbrC.tokenURI.call(uintlgVsQNr, {from: accounts[4]});
		const stringIONyHf7 = await Cryptozr4IRbrC.tokenURI.call(uintIexduUu, {from: accounts[4]});
//		const uint256QvGvKjz = await Cryptozr4IRbrC.tokenByIndex.call(uintGuGfMDM, {from: accounts[3]});
//		const uint256arrayO3PAGJ9 = await Cryptozr4IRbrC.tokensOfOwner.call(addressX1uVMW0, {from: accounts[0]});
//		const uintAda774U = await Cryptozr4IRbrC.getTimeToDailyBonus.call(addressFV9D0IG, {from: accounts[2]});
//		await Cryptozr4IRbrC.f.call({from: accounts[4]});

		assert.equal(stringIONyHf7, "https://cryptoz.cards/data/482")
		assert.equal(stringIiPPhTd, "https://cryptoz.cards/data/225")
		await expect(Cryptozr4IRbrC.tokenByIndex.call(uintGuGfMDM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozO6J6hY5 = await Cryptoz.new({from: accounts[2]});
		const uintTVYvUln = BigInt("1282")
		const uintNyoQeaz = BigInt("1571")
		const uintWNTxawf = BigInt("738")
//		const boolLribDUI = await CryptozO6J6hY5.buyBoosterCard.call(uintTVYvUln, {from: accounts[1]});
//		await CryptozO6J6hY5.getBonusBoosters.call({from: accounts[3]});
//		const uint32RDE687a = await CryptozO6J6hY5.isValidCard.call(uintNyoQeaz, {from: accounts[1]});
//		const booloN1ryi0 = await CryptozO6J6hY5.openBoosterCard.call(uintWNTxawf, {from: accounts[1]});
//		await CryptozO6J6hY5.getBonusBoosters.call({from: accounts[4]});

		await expect(CryptozO6J6hY5.buyBoosterCard.call(uintTVYvUln, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz3w2G0T = await Cryptoz.new({from: accounts[2]});
		const uintvlp8ZHv = BigInt("498")
		const uintLvRoXA6 = BigInt("1782")
		const uintgGBtlB4 = BigInt("1211")
		const uintzZ3wtqT = BigInt("107")
		const uintrykbxC = BigInt("146")
		const uintJFzIQqE = BigInt("127")
		const stringSUewAxD = "IyMnczG4XV5p7ykRVFPrekYKt28Y3ZT2mq3Hq61Tjj90Y"
		const stringqOMprb5 = "9NgJJYo7krqnYr2E3Qz46FkErf4DwvBGqwo1j4ZJpaLsqRKpCs4IDdCPILVfYAiK43Zctmvvo3zX91"
		const uintZGM5jhh = BigInt("166")
		const uinthr16Tiy = BigInt("20")
		const uintMPcTeyp = BigInt("1919")
		const uintI1zGOnO = BigInt("463")
		const uintokpdPgA = BigInt("221")
		const uintLGrvgKG = BigInt("1240")
		const uintHMJomyR = BigInt("217")
//		await Cryptoz3w2G0T.f.call({from: accounts[4]});
//		const boolDhpnrNq = await Cryptoz3w2G0T.loadNewCardType.call(uintZGM5jhh, stringqOMprb5, stringSUewAxD, uintJFzIQqE, uintrykbxC, uintzZ3wtqT, uintgGBtlB4, uintLvRoXA6, uintvlp8ZHv, {from: accounts[1]});
//		const booljcCDmop = await Cryptoz3w2G0T.addTocardType.call(uintLGrvgKG, uintokpdPgA, uintI1zGOnO, uintMPcTeyp, uinthr16Tiy, {from: "0x0000000000000000000000000000000000000001"});
//		const stringFjm4klM = await Cryptoz3w2G0T.tokenURI.call(uintHMJomyR, {from: accounts[3]});

		await expect(Cryptoz3w2G0T.f.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozIgPmOWM = await Cryptoz.new({from: accounts[4]});
		const uintElGeCVn = BigInt("1009")
		const uinttCzZZ31 = BigInt("621")
		const uintWxC7PJP = BigInt("1315")
		const uintai5XuPt = BigInt("52")
		const uintvJ17LQR = BigInt("62")
		const uintQad1v8m = BigInt("103")
		const stringKA1UbX = "aNAEufGXv3qBrSmyleFY4e9Ed5PuadHemoi3XQOVblGfqJ5WqnLhinUdLLjboUw0AKQQLI7t8g1f3NbCJJUuLT"
		const stringW0zB0kZ = "M"
		const uintM7vLqDR = BigInt("95")
		const uintl8CZIxD = BigInt("412")
//		await CryptozIgPmOWM.getBonusBoosters.call({from: accounts[1]});
//		await CryptozIgPmOWM.withdraw.call({from: accounts[4]});
//		const boolM8ph33 = await CryptozIgPmOWM.loadNewCardType.call(uintM7vLqDR, stringW0zB0kZ, stringKA1UbX, uintQad1v8m, uintvJ17LQR, uintai5XuPt, uintWxC7PJP, uinttCzZZ31, uintElGeCVn, {from: accounts[0]});
//		await CryptozIgPmOWM.getOwnedCard.call(uintl8CZIxD, {from: accounts[2]});
//		const uint256PQ7Pgcg = await CryptozIgPmOWM.totalSupply.call({from: accounts[0]});
//		await CryptozIgPmOWM.buyBoosterCardAndOpen.call({from: accounts[1]});

		await expect(CryptozIgPmOWM.getBonusBoosters.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozBcaWCzO = await Cryptoz.new({from: accounts[0]});
		const uintk1i0Cbf = BigInt("497")
		const stringEY3zcck = await CryptozBcaWCzO.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256oesMprn = await CryptozBcaWCzO.sacrifice.call(uintk1i0Cbf, {from: accounts[4]});

		assert.equal(stringEY3zcck, "Cryptoz")
		await expect(CryptozBcaWCzO.sacrifice.call(uintk1i0Cbf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozBcaWCzO = await Cryptoz.new({from: accounts[0]});
		const addressJ4fetgC = accounts[3]
		const uint9VukYd = BigInt("492")
		const uintU19oIMq = BigInt("110")
		const uintEiHu5c2 = BigInt("1686")
		const uintG3zHplm = BigInt("1816")
		const uintInJolM8 = BigInt("1570")
		const uintiAv63kd = BigInt("264")
		const addressCd5hYAw = await CryptozBcaWCzO.initialize.call(addressJ4fetgC, {from: accounts[0]});
//		const uint256oesMprn = await CryptozBcaWCzO.sacrifice.call(uint9VukYd, {from: accounts[4]});
//		const boolEbmZMY6 = await CryptozBcaWCzO.addTocardType.call(uintiAv63kd, uintInJolM8, uintG3zHplm, uintEiHu5c2, uintU19oIMq, {from: accounts[3]});

		await expect(CryptozBcaWCzO.sacrifice.call(uint9VukYd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozO6J6hY5 = await Cryptoz.new({from: accounts[2]});
		const uintsGVyD3Z = BigInt("973")
//		await CryptozO6J6hY5.getBonusBoosters.call({from: accounts[3]});
//		await CryptozO6J6hY5.buyBoosterCardAndOpen.call({from: accounts[2]});
//		const boolkn9p4zF = await CryptozO6J6hY5.openBoosterCard.call(uintsGVyD3Z, {from: accounts[1]});
//		await CryptozO6J6hY5.getBonusBoosters.call({from: accounts[4]});

		await expect(CryptozO6J6hY5.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozmRlVnpa = await Cryptoz.new({from: accounts[4]});
		const uinthbQGa3C = BigInt("314")
		const uintd3rk0oM = BigInt("28")
		const uinty2fA0DI = BigInt("1059")
		const uintWdGmkEd = BigInt("144")
		const uintsGDdFDM = BigInt("209")
		const uintywjIrWJ = BigInt("143")
		const stringmdBVOwY = "MhN37ARJfxAekQ6We7cqjzPnhse5RY1C3pqS9YTvo1JCpSgKFPWDDSoWUrKkGvGdYWHOdMwJyEOAtTGM1vqFW"
		const stringCcPhVBV = "S8WWznshIVuo74Y37EnGijq7hCyHYo6OXcGPQdob1iHuwA4U"
		const uinti87XSfE = BigInt("79")
		const uintLAQCBi2 = BigInt("1062")
		const uintcd41GTt = BigInt("1413")
		const booluyIL8XI = await CryptozmRlVnpa.loadNewCardType.call(uinti87XSfE, stringCcPhVBV, stringmdBVOwY, uintywjIrWJ, uintsGDdFDM, uintWdGmkEd, uinty2fA0DI, uintd3rk0oM, uinthbQGa3C, {from: accounts[4]});
		const stringQVQ8Nul = await CryptozmRlVnpa.tokenURI.call(uintLAQCBi2, {from: accounts[2]});
//		await CryptozmRlVnpa.getBonusBoosters.call({from: accounts[1]});
//		await CryptozmRlVnpa.buyBoosterCardAndOpen.call({from: accounts[2]});
//		const uint32UOeERzu = await CryptozmRlVnpa.getFreeCard.call(uintcd41GTt, {from: accounts[2]});

		assert.equal(booluyIL8XI, true)
		assert.equal(stringQVQ8Nul, "https://cryptoz.cards/data/1062")
		await expect(CryptozmRlVnpa.getBonusBoosters.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozO6J6hY5 = await Cryptoz.new({from: accounts[2]});
		const addressf6zDXGL = accounts[1]
		const uintIWgzqB6 = BigInt("160")
		const uintO6bJwnl = BigInt("448")
		const uintCLnOZZE = BigInt("1572")
		const uintWt67WZU = BigInt("441")
		const uintmFH4kpH = BigInt("751")
		const uint256arrayftkjTNC = await CryptozO6J6hY5.tokensOfOwner.call(addressf6zDXGL, {from: accounts[4]});
//		await CryptozO6J6hY5.getBonusBoosters.call({from: accounts[3]});
//		const boolnJWwwQc = await CryptozO6J6hY5.addTocardType.call(uintmFH4kpH, uintWt67WZU, uintCLnOZZE, uintO6bJwnl, uintIWgzqB6, {from: accounts[2]});
//		await CryptozO6J6hY5.buyBoosterCardAndOpen.call({from: accounts[1]});

		assert.equal(uint256arrayftkjTNC, BigInt(""))
		await expect(CryptozO6J6hY5.getBonusBoosters.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})