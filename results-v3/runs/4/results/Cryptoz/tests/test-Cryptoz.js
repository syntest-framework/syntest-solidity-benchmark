const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozDGeh55 = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintOFfFAz = BigInt("772")
		await CryptozDGeh55.getBonusBoosters.call({from: accounts[0]});
		const uint32CK3VyN2 = await CryptozDGeh55.getFreeCard.call(uintOFfFAz, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cryptoz', async () => {
		const Cryptozxubh0D = await Cryptoz.new({from: accounts[0]});
		const uintSCZPEBu = BigInt("798")
		const addresswEPfkBc = accounts[2]
		const uintIyUB44 = BigInt("1641")
		const uintiUHcjkD = BigInt("820")
		const uintPpwgR0t = BigInt("693")
		const uintO4goXs9 = BigInt("238")
		const uinthMsFcH = BigInt("100")
		const uintJBw4chC = BigInt("44")
		const stringh7KW3Gl = "A7sJBKPu5NP9lA1A33BI6GSNJARWknrDRxC1biw7jGloFXZcBeiJAyN9LkD11HMTon8APt"
		const stringB5kPqyH = "jmLaViwEm5Ve9H6j4uXGcwP483u0riVU3wiHq8oixeRySvnqxVdJ17nFkg3muqcZtaSAP7D42V5VNDiitD"
		const uintp9G4yqy = BigInt("82")
		const boolWqlj4ml = await Cryptozxubh0D.buyCard.call(uintSCZPEBu, {from: "0x0000000000000000000000000000000000000001"});
		const stringiX8Y9AI = await Cryptozxubh0D.symbol.call({from: accounts[0]});
		const uintlfSWPGa = await Cryptozxubh0D.getTimeToDailyBonus.call(addresswEPfkBc, {from: accounts[1]});
		const stringhOi5nwM = await Cryptozxubh0D.symbol.call({from: accounts[1]});
		const boolMIm3kyX = await Cryptozxubh0D.loadNewCardType.call(uintp9G4yqy, stringB5kPqyH, stringh7KW3Gl, uintJBw4chC, uinthMsFcH, uintO4goXs9, uintPpwgR0t, uintiUHcjkD, uintIyUB44, {from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const CryptozFSBPmb = await Cryptoz.new({from: accounts[3]});
		const uintvIjj4s3 = BigInt("33")
		const uintG3q76kb = BigInt("1969")
		const uintvsgk3u7 = BigInt("1031")
		const uintByVC51 = BigInt("1380")
		const uintNDGy7VF = BigInt("244")
		const uintMPyCRp = BigInt("811")
		const stringRtJK5nK = await CryptozFSBPmb.name.call({from: accounts[0]});
		const stringikR27tO = await CryptozFSBPmb.symbol.call({from: accounts[0]});
		const boolq6OGyWy = await CryptozFSBPmb.addTocardType.call(uintNDGy7VF, uintByVC51, uintvsgk3u7, uintG3q76kb, uintvIjj4s3, {from: accounts[3]});
		const uint256RSaRFtN = await CryptozFSBPmb.sacrifice.call(uintMPyCRp, {from: accounts[2]});
		await CryptozFSBPmb.buyBoosterCardAndOpen.call({from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const CryptozTr160jW = await Cryptoz.new({from: accounts[2]});
		const uintA8Z2shH = BigInt("1937")
		const addressneboL7H = "0x0000000000000000000000000000000000000001"
		const uintD7nH7rq = BigInt("44")
		const uintFe5jEgn = BigInt("367")
		const uinte3qqutA = BigInt("465")
		const uint7CSNM0 = BigInt("200")
		const uintYZm9ztz = BigInt("604")
		const uintzSASwSx = BigInt("499")
		const uintknFEk0z = BigInt("1594")
		const uintHTcyXD9 = BigInt("1658")
		const uintxHxk3M7 = BigInt("9")
		const uintKRCgl2C = BigInt("58")
		const uintAW5LApi = BigInt("225")
		const stringSKX1hX = "1IhvcUCezl2mKolIRn4ljmr1pC5yRUPlDjUzLEP3VOdHPeAmahQbQGAfqwF37DUnG676I63IAwIayGsvyrXm"
		const stringDeKx0Ly = "gAccuwHrdfaHyXG4Solgq5h1GJ28GWnjlozJ69PfPJm5lpBjnIPOF22c7EYni7JhoUhV4cwb9aDgzE2HuooJnHzFe9MpMx1"
		const uintf6Z0rue = BigInt("40")
		const addressuE4voNC = accounts[1]
		const uint256ZDJ9Fh = await CryptozTr160jW.tokenByIndex.call(uintA8Z2shH, {from: accounts[5]});
		const uintB1jKph = await CryptozTr160jW.getTimeToDailyBonus.call(addressneboL7H, {from: accounts[3]});
		const boolgDADBfM = await CryptozTr160jW.addTocardType.call(uintYZm9ztz, uint7CSNM0, uinte3qqutA, uintFe5jEgn, uintD7nH7rq, {from: accounts[1]});
		const booltX75rJQ = await CryptozTr160jW.loadNewCardType.call(uintf6Z0rue, stringDeKx0Ly, stringSKX1hX, uintAW5LApi, uintKRCgl2C, uintxHxk3M7, uintHTcyXD9, uintknFEk0z, uintzSASwSx, {from: accounts[4]});
		const addressLIXDdS8 = await CryptozTr160jW.linkMySponsor.call(addressuE4voNC, {from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const CryptozwsNTCke = await Cryptoz.new({from: accounts[4]});
		const uintdC1PFFW = BigInt("925")
		const uintT4ufWA9 = BigInt("1619")
		const uint256nxPJGWe = await CryptozwsNTCke.sacrifice.call(uintdC1PFFW, {from: accounts[3]});
		const boolGcE70S4 = await CryptozwsNTCke.buyCard.call(uintT4ufWA9, {from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const CryptozTCbpVOc = await Cryptoz.new({from: accounts[4]});
		const uintObChACY = BigInt("40")
		const uintM7NJSYj = BigInt("1046")
		const uintxf6FmYP = BigInt("1192")
		const uintqkBe6qa = BigInt("1735")
		const uintrzuRmwW = BigInt("1431")
		const addresszaLunU4 = accounts[0]
		const boolewRWD8S = await CryptozTCbpVOc.addTocardType.call(uintrzuRmwW, uintqkBe6qa, uintxf6FmYP, uintM7NJSYj, uintObChACY, {from: accounts[0]});
		const addressAvTaa3W = await CryptozTCbpVOc.initialize.call(addresszaLunU4, {from: accounts[4]});
		await CryptozTCbpVOc.buyBoosterCardAndOpen.call({from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const Cryptozf0MiXy2 = await Cryptoz.new({from: accounts[2]});
		const addressKvUk40e = accounts[3]
		const uintItZtAhM = BigInt("1963")
		const addressQ6JlcIE = accounts[1]
		const addressKW2GWad = accounts[3]
		const stringKez1vAF = await Cryptozf0MiXy2.symbol.call({from: accounts[3]});
		await Cryptozf0MiXy2.buyBoosterCardAndOpen.call({from: "0x0000000000000000000000000000000000000001"});
		await Cryptozf0MiXy2.buyBoosterCardAndOpen.call({from: accounts[1]});
		const uintEdMbkkM = await Cryptozf0MiXy2.getTimeToDailyBonus.call(addressKvUk40e, {from: accounts[2]});
		await Cryptozf0MiXy2.f.call({from: accounts[5]});
		const addresspNty0WY = await Cryptozf0MiXy2.transferFrom.call(addressKW2GWad, addressQ6JlcIE, uintItZtAhM, {from: accounts[5]});
	});

	it('test for Cryptoz', async () => {
		const CryptozTr160jW = await Cryptoz.new({from: accounts[2]});
		const addressbTeeZOF = "0x0000000000000000000000000000000000000001"
		const uintcgadhG8 = BigInt("44")
		const uintA4U8fbr = BigInt("367")
		const uintb0mTVw2 = BigInt("465")
		const uintKZuAEg9 = BigInt("200")
		const uintS9GQnrY = BigInt("619")
		const uintEEdifF8 = BigInt("499")
		const uintFlbnt14 = BigInt("1594")
		const uintnRGooAe = BigInt("1658")
		const uintkXJVXUj = BigInt("9")
		const uint91LcGA = BigInt("58")
		const uintYF1wP58 = BigInt("225")
		const stringSKX1hX = "1IhvcUCezl2mKolIRn4ljmr1pC5yRUPlDjUzLEP3VOdHPeAmahQbQGAfqwF37DUnG676I63IAwIayGsvyrXm"
		const stringDeKx0Ly = "gAccuwHrdfaHyXG4Solgq5h1GJ28GWnjlozJ69PfPJm5lpBjnIPOF22c7EYni7JhoUhV4cwb9aDgzE2HuooJnHzFe9MpMx1"
		const uintblzzPw5 = BigInt("40")
		const addressI7CtAPs = accounts[1]
		const uintB1jKph = await CryptozTr160jW.getTimeToDailyBonus.call(addressbTeeZOF, {from: accounts[3]});
		const boolgDADBfM = await CryptozTr160jW.addTocardType.call(uintS9GQnrY, uintKZuAEg9, uintb0mTVw2, uintA4U8fbr, uintcgadhG8, {from: accounts[1]});
		const booltX75rJQ = await CryptozTr160jW.loadNewCardType.call(uintblzzPw5, stringDeKx0Ly, stringSKX1hX, uintYF1wP58, uint91LcGA, uintkXJVXUj, uintnRGooAe, uintFlbnt14, uintEEdifF8, {from: accounts[4]});
		const addressLIXDdS8 = await CryptozTr160jW.linkMySponsor.call(addressI7CtAPs, {from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const CryptozTr160jW = await Cryptoz.new({from: accounts[2]});
		const uintfQR7UQz = BigInt("1998")
		const uintOBsSakw = BigInt("1937")
		const addressaXvQNCy = "0x0000000000000000000000000000000000000001"
		const uintKfQfRm = BigInt("44")
		const uintKChxFKD = BigInt("367")
		const uintVqaNuBu = BigInt("465")
		const uintT6SVaLg = BigInt("200")
		const uintuu0TMiY = BigInt("604")
		const uintizv61nV = BigInt("499")
		const uintAmYdv78 = BigInt("1594")
		const uinteGyvMXC = BigInt("1658")
		const uintA6jQJc0 = BigInt("9")
		const uintDph2hlr = BigInt("58")
		const uintyspVtt = BigInt("225")
		const stringSKX1hX = "1IhvcUCezl2mKolIRn4ljmr1pC5yRUPlDjUzLEP3VOdHPeAmahQbQGAfqwF37DUnG676I63IAwIayGsvyrXm"
		const stringDeKx0Ly = "gAccuwHrdfaHyXG4Solgq5h1GJ28GWnjlozJ69PfPJm5lpBjnIPOF22c7EYni7JhoUhV4cwb9aDgzE2HuooJnHzFe9MpMx1"
		const uintGmAGFoD = BigInt("40")
		const addressSdWBdLz = accounts[1]
		const boolwAxqnct = await CryptozTr160jW.buyBoosterCard.call(uintfQR7UQz, {from: accounts[1]});
		await CryptozTr160jW.getBonusBoosters.call({from: accounts[0]});
		const uint256ZDJ9Fh = await CryptozTr160jW.tokenByIndex.call(uintOBsSakw, {from: accounts[5]});
		const uintB1jKph = await CryptozTr160jW.getTimeToDailyBonus.call(addressaXvQNCy, {from: accounts[3]});
		const boolgDADBfM = await CryptozTr160jW.addTocardType.call(uintuu0TMiY, uintT6SVaLg, uintVqaNuBu, uintKChxFKD, uintKfQfRm, {from: accounts[1]});
		const booltX75rJQ = await CryptozTr160jW.loadNewCardType.call(uintGmAGFoD, stringDeKx0Ly, stringSKX1hX, uintyspVtt, uintDph2hlr, uintA6jQJc0, uinteGyvMXC, uintAmYdv78, uintizv61nV, {from: accounts[4]});
		const addressLIXDdS8 = await CryptozTr160jW.linkMySponsor.call(addressSdWBdLz, {from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const CryptozwsNTCke = await Cryptoz.new({from: accounts[4]});
		const uintCwgMbX = BigInt("1082")
		const uintTFcBz4i = BigInt("1619")
		const addressWQsjRXc = accounts[1]
		await CryptozwsNTCke.getBonusBoosters.call({from: accounts[5]});
		const uint256nxPJGWe = await CryptozwsNTCke.sacrifice.call(uintCwgMbX, {from: accounts[3]});
		const boolGcE70S4 = await CryptozwsNTCke.buyCard.call(uintTFcBz4i, {from: accounts[3]});
		const uintJDYpHOI = await CryptozwsNTCke.getTimeToDailyBonus.call(addressWQsjRXc, {from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const CryptozRnl5s6F = await Cryptoz.new({from: accounts[1]});
		const uinteH9s0rp = BigInt("1769")
		const stringnWT0FB2 = await CryptozRnl5s6F.symbol.call({from: accounts[3]});
		await CryptozRnl5s6F.getBonusBoosters.call({from: accounts[1]});
		const stringmaPgpOX = await CryptozRnl5s6F.tokenURI.call(uinteH9s0rp, {from: accounts[1]});
	});

	it('test for Cryptoz', async () => {
		const CryptozpMSRsmA = await Cryptoz.new({from: accounts[3]});
		const uintBUYMfp = BigInt("877")
		await CryptozpMSRsmA.getTokensByRarity.call({from: accounts[2]});
		const uint256TkqhNrD = await CryptozpMSRsmA.sacrifice.call(uintBUYMfp, {from: accounts[4]});
	});

	it('test for Cryptoz', async () => {
		const CryptozW2fQX5 = await Cryptoz.new({from: accounts[0]});
		const uintvYfFOf = BigInt("1678")
		const addressGHESn1w = accounts[1]
		const uintVilyJR = BigInt("35")
		const addressTDrjMDx = accounts[1]
		const uint256xH9qdwn = await CryptozW2fQX5.tokenOfOwnerByIndex.call(addressGHESn1w, uintvYfFOf, {from: accounts[3]});
		await CryptozW2fQX5.f.call({from: accounts[2]});
		await CryptozW2fQX5.getBonusBoosters.call({from: accounts[1]});
		const uint256oQTM3t8 = await CryptozW2fQX5.tokenByIndex.call(uintVilyJR, {from: accounts[5]});
		const uint256arrayiD8YcbG = await CryptozW2fQX5.tokensOfOwner.call(addressTDrjMDx, {from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const CryptozTr160jW = await Cryptoz.new({from: accounts[2]});
		const uintezCphIf = BigInt("117")
		const addressf98E9J0 = accounts[1]
		const addressFu0KPu6 = accounts[2]
		const uintvYyD1AH = BigInt("1937")
		const addresscx6L9HP = "0x0000000000000000000000000000000000000001"
		const uintfRJ0xS = BigInt("410")
		const uintYVEAYV4 = BigInt("44")
		const uintNXIWTCR = BigInt("367")
		const uintww0OlBl = BigInt("465")
		const uintaHKACma = BigInt("160")
		const uintDc6UbrV = BigInt("604")
		const uintWJpKa2 = BigInt("1222")
		const uintTSg280A = BigInt("1582")
		const uintUFEXe7 = BigInt("581")
		const addressaapcfT = accounts[1]
		const addressFp0wzII = await CryptozTr160jW.transferFrom.call(addressFu0KPu6, addressf98E9J0, uintezCphIf, {from: accounts[1]});
		const uint256ZDJ9Fh = await CryptozTr160jW.tokenByIndex.call(uintvYyD1AH, {from: accounts[5]});
		const uintB1jKph = await CryptozTr160jW.getTimeToDailyBonus.call(addresscx6L9HP, {from: accounts[3]});
		const boolGmfo3NW = await CryptozTr160jW.openBoosterCard.call(uintfRJ0xS, {from: "0x0000000000000000000000000000000000000001"});
		const boolgDADBfM = await CryptozTr160jW.addTocardType.call(uintDc6UbrV, uintaHKACma, uintww0OlBl, uintNXIWTCR, uintYVEAYV4, {from: accounts[1]});
		const uint256Fd6V3im = await CryptozTr160jW.tokenByIndex.call(uintWJpKa2, {from: accounts[2]});
		const uint256ygBv6sS = await CryptozTr160jW.sacrifice.call(uintTSg280A, {from: "0x0000000000000000000000000000000000000001"});
		const uint32x1euA02 = await CryptozTr160jW.getFreeCard.call(uintUFEXe7, {from: accounts[2]});
		const addressLIXDdS8 = await CryptozTr160jW.linkMySponsor.call(addressaapcfT, {from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const CryptozTr160jW = await Cryptoz.new({from: accounts[2]});
		const uintVfYnejf = BigInt("1737")
		const uintHzws4DN = BigInt("1937")
		const addressilZIw3w = "0x0000000000000000000000000000000000000001"
		const uintWtr6yI = BigInt("1584")
		const uintSNpknpU = BigInt("44")
		const uintIxgLk5k = BigInt("367")
		const uintI9MDkwv = BigInt("465")
		const uintvKY3MP = BigInt("200")
		const uintUccJ9Qi = BigInt("604")
		const uintuQlxT6g = BigInt("499")
		const uintXtrV6Dz = BigInt("1594")
		const uintXTvkb5E = BigInt("1658")
		const uintlpAidA = BigInt("9")
		const uintfkLjUM7 = BigInt("58")
		const uintd3VebYO = BigInt("225")
		const stringSKX1hX = "1IhvcUCezl2mKolIRn4ljmr1pC5yRUPlDjUzLEP3VOdHPeAmahQbQGAfqwF37DUnG676I63IAwIayGsvyrXm"
		const stringDeKx0Ly = "gAccuwHrdfaHyXG4Solgq5h1GJ28GWnjlozJ69PfPJm5lpBjnIPOF22c7EYni7JhoUhV4cwb9aDgzE2HuooJnHzFe9MpMx1"
		const uintTzLOQB = BigInt("40")
		const addressZC592L = accounts[2]
		await CryptozTr160jW.getBonusBoosters.call({from: accounts[4]});
		const boolWnaYYZF = await CryptozTr160jW.openBoosterCard.call(uintVfYnejf, {from: accounts[4]});
		const uint256ZDJ9Fh = await CryptozTr160jW.tokenByIndex.call(uintHzws4DN, {from: accounts[5]});
		const uintB1jKph = await CryptozTr160jW.getTimeToDailyBonus.call(addressilZIw3w, {from: accounts[3]});
		const boolHk3zDqr = await CryptozTr160jW.buyBoosterCard.call(uintWtr6yI, {from: accounts[3]});
		const boolgDADBfM = await CryptozTr160jW.addTocardType.call(uintUccJ9Qi, uintvKY3MP, uintI9MDkwv, uintIxgLk5k, uintSNpknpU, {from: accounts[1]});
		const booltX75rJQ = await CryptozTr160jW.loadNewCardType.call(uintTzLOQB, stringDeKx0Ly, stringSKX1hX, uintd3VebYO, uintfkLjUM7, uintlpAidA, uintXTvkb5E, uintXtrV6Dz, uintuQlxT6g, {from: accounts[4]});
		await CryptozTr160jW.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
		const addressLIXDdS8 = await CryptozTr160jW.linkMySponsor.call(addressZC592L, {from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const CryptozzBiWQU = await Cryptoz.new({from: accounts[4]});
		const address6hLKui = accounts[1]
		const uintMHBPhFI = BigInt("1109")
		const uintMl9iSd2 = BigInt("310")
		const uintFRl8hAa = BigInt("2010")
		const uintIIo1Qnm = BigInt("98")
		const uintrsbRXdC = BigInt("104")
		const uintZEsq2b7 = BigInt("214")
		const stringpmId0i2 = "rYMo2mG"
		const string3e5smt = "atkgn76F8tKQ"
		const uintTqfQYY0 = BigInt("118")
		const addressNTAfGGa = await CryptozzBiWQU.linkMySponsor.call(address6hLKui, {from: "0x0000000000000000000000000000000000000001"});
		const stringP7qdkj8 = await CryptozzBiWQU.symbol.call({from: accounts[2]});
		await CryptozzBiWQU.buyBoosterCardAndOpen.call({from: accounts[1]});
		const boolFClTeOL = await CryptozzBiWQU.loadNewCardType.call(uintTqfQYY0, string3e5smt, stringpmId0i2, uintZEsq2b7, uintrsbRXdC, uintIIo1Qnm, uintFRl8hAa, uintMl9iSd2, uintMHBPhFI, {from: accounts[4]});
		const stringgNkU1js = await CryptozzBiWQU.symbol.call({from: accounts[4]});
		const uint256WXmnsbr = await CryptozzBiWQU.totalSupply.call({from: accounts[4]});
	});

	it('test for Cryptoz', async () => {
		const CryptozpMSRsmA = await Cryptoz.new({from: accounts[3]});
		const uintbYKB5sE = BigInt("56")
		const uintcS99pc5 = BigInt("721")
		const uint32V3OrBjh = await CryptozpMSRsmA.isValidCard.call(uintbYKB5sE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256TkqhNrD = await CryptozpMSRsmA.sacrifice.call(uintcS99pc5, {from: accounts[4]});
	});

	it('test for Cryptoz', async () => {
		const CryptozTr160jW = await Cryptoz.new({from: accounts[2]});
		const addresspQU3nd = "0x0000000000000000000000000000000000000001"
		const addressmMr3zmG = accounts[4]
		const uintZVJijhJ = BigInt("44")
		const uintoOzTXc1 = BigInt("367")
		const uintNEpk836 = BigInt("465")
		const uintqqielgd = BigInt("200")
		const uintpnMRRTS = BigInt("604")
		const addressAvBEtN9 = accounts[1]
		const uintB1jKph = await CryptozTr160jW.getTimeToDailyBonus.call(addresspQU3nd, {from: accounts[3]});
		const uint256arrayCT3UuKp = await CryptozTr160jW.tokensOfOwner.call(addressmMr3zmG, {from: accounts[4]});
		const boolgDADBfM = await CryptozTr160jW.addTocardType.call(uintpnMRRTS, uintqqielgd, uintNEpk836, uintoOzTXc1, uintZVJijhJ, {from: accounts[1]});
		const addressLIXDdS8 = await CryptozTr160jW.linkMySponsor.call(addressAvBEtN9, {from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const CryptozW2fQX5 = await Cryptoz.new({from: accounts[0]});
		const addressPiJQ80 = accounts[1]
		const uintVMBXHId = BigInt("226")
		const uintxunONkQ = BigInt("1678")
		const addressZ6sJ9y = accounts[1]
		const uintPDlJgbS = BigInt("314")
		const uintLBT01Xy = BigInt("15")
		const addressl5xHHxU = accounts[1]
		const uintrAsLRCG = BigInt("695")
		const addressV2ugjz = await CryptozW2fQX5.initialize.call(addressPiJQ80, {from: accounts[0]});
		const boolab5wXME = await CryptozW2fQX5.openBoosterCard.call(uintVMBXHId, {from: accounts[4]});
		const uint256xH9qdwn = await CryptozW2fQX5.tokenOfOwnerByIndex.call(addressZ6sJ9y, uintxunONkQ, {from: accounts[3]});
		const stringLFBpJkz = await CryptozW2fQX5.symbol.call({from: accounts[3]});
		await CryptozW2fQX5.f.call({from: accounts[2]});
		const uint256D3VKY3I = await CryptozW2fQX5.sacrifice.call(uintPDlJgbS, {from: accounts[1]});
		await CryptozW2fQX5.getBonusBoosters.call({from: accounts[1]});
		const uint256oQTM3t8 = await CryptozW2fQX5.tokenByIndex.call(uintLBT01Xy, {from: accounts[5]});
		const uint256arrayiD8YcbG = await CryptozW2fQX5.tokensOfOwner.call(addressl5xHHxU, {from: accounts[3]});
		const uint32DsooHX8 = await CryptozW2fQX5.getFreeCard.call(uintrAsLRCG, {from: accounts[0]});
	});

	it('test for Cryptoz', async () => {
		const Cryptozl4VDXyp = await Cryptoz.new({from: accounts[0]});
		const uintQ3P9eC = BigInt("1124")
		await Cryptozl4VDXyp.f.call({from: accounts[0]});
		const boolX3ucq94 = await Cryptozl4VDXyp.buyBoosterCard.call(uintQ3P9eC, {from: accounts[0]});
		await Cryptozl4VDXyp.f.call({from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const CryptozTr160jW = await Cryptoz.new({from: accounts[2]});
		const uintAXUYamY = BigInt("257")
		const uint8dtUkh = BigInt("1328")
		const uinteY9Fr2l = BigInt("1693")
		const uintiK8LCYW = BigInt("38")
		const uintcurG0f3 = BigInt("5")
		const uintrlvEjm = BigInt("101")
		const stringOks4bnv = "g6JY9ZLRMtN1zfRYzJJbhyWoX3vDMpJ1o"
		const stringoYUvK8g = "AmBTuNFz1Tit7PDX9eVGS8UUCwe3VeyAu3fTlJPtjCay7AVBeeSfYrX20Ixhm2LLfh"
		const uinthpYr3nn = BigInt("2")
		const uintIsqq9TG = BigInt("1937")
		const addressLKh8aB3 = accounts[2]
		const boolR8zcNei = await CryptozTr160jW.loadNewCardType.call(uinthpYr3nn, stringoYUvK8g, stringOks4bnv, uintrlvEjm, uintcurG0f3, uintiK8LCYW, uinteY9Fr2l, uint8dtUkh, uintAXUYamY, {from: accounts[2]});
		const uint256ZDJ9Fh = await CryptozTr160jW.tokenByIndex.call(uintIsqq9TG, {from: accounts[5]});
		const addressLIXDdS8 = await CryptozTr160jW.linkMySponsor.call(addressLKh8aB3, {from: accounts[3]});
	});

	it('test for Cryptoz', async () => {
		const CryptozRz4c14N = await Cryptoz.new({from: accounts[2]});
		const uintNiVOo8 = BigInt("790")
		const addressNC7U2y4 = "0x0000000000000000000000000000000000000001"
		await CryptozRz4c14N.getOwnedCard.call(uintNiVOo8, {from: accounts[3]});
		const uint256arrayQw2XMPi = await CryptozRz4c14N.tokensOfOwner.call(addressNC7U2y4, {from: accounts[4]});
	});

	it('test for Cryptoz', async () => {
		const CryptozTr160jW = await Cryptoz.new({from: accounts[2]});
		const uintJvlBOa = BigInt("399")
		const addressG3KWHSH = "0x00000000000000000000000000000000000000-1"
		const addressC63iEQW = accounts[3]
		const uintgcO8Rq = BigInt("1448")
		const addressrqO13x9 = await CryptozTr160jW.transferFrom.call(addressC63iEQW, addressG3KWHSH, uintJvlBOa, {from: accounts[0]});
		await CryptozTr160jW.getTokensByRarity.call({from: accounts[3]});
		const boolj6fGUox = await CryptozTr160jW.buyCard.call(uintgcO8Rq, {from: accounts[1]});
	});
})