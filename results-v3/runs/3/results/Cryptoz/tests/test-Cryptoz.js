const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozDYvtsgI = await Cryptoz.new({from: accounts[2]});
		const uint3JY0bv = BigInt("549")
		const uintFB0LPfO = BigInt("673")
		const uintRmqBo10 = BigInt("560")
		const uintQ18hmZ = BigInt("320")
		const uintxYC5tJ4 = BigInt("38")
		const uintC8ex69r = BigInt("38")
		const uintbM4KDHy = BigInt("158")
		const stringFK2FEn7 = "BBXaD"
		const stringFGNMb1p = "9MbRRBEqghn14eceGTibqzBBBE8v9qo2ECWxL4zQadY4LHhFjdXHQbjVFXtlJqajexgMXpCANJBvvcdIzCkIPw0fp"
		const uintOtpFWZC = BigInt("200")
		const addressxjyifSq = accounts[2]
		const uint4PMNtk = BigInt("1564")
		const boolgCZDZoK = await CryptozDYvtsgI.openBoosterCard.call(uint3JY0bv, {from: accounts[0]});
		const booljZgeNDQ = await CryptozDYvtsgI.loadNewCardType.call(uintOtpFWZC, stringFGNMb1p, stringFK2FEn7, uintbM4KDHy, uintC8ex69r, uintxYC5tJ4, uintQ18hmZ, uintRmqBo10, uintFB0LPfO, {from: accounts[5]});
		const addressW5Zefvn = await CryptozDYvtsgI.linkMySponsor.call(addressxjyifSq, {from: accounts[0]});
		await CryptozDYvtsgI.getBonusBoosters.call({from: accounts[3]});
		const uint256GQo7BcE = await CryptozDYvtsgI.tokenByIndex.call(uint4PMNtk, {from: accounts[3]});

		await expect(CryptozDYvtsgI.openBoosterCard.call(uint3JY0bv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozeLhZySC = await Cryptoz.new({from: accounts[1]});
		const addressSSflufi = accounts[5]
		const addressRABflLg = accounts[3]
		await CryptozeLhZySC.f.call({from: accounts[0]});
		const address9ODqmF = await CryptozeLhZySC.initialize.call(addressSSflufi, {from: "0x0000000000000000000000000000000000000001"});
		const uintwrCAubJ = await CryptozeLhZySC.getTimeToDailyBonus.call(addressRABflLg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozeLhZySC.f.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozPjtEmNq = await Cryptoz.new({from: accounts[4]});
		const addressymd8zkA = accounts[2]
		const uintyLU0rwi = BigInt("1802")
		const uintyIVTrcA = BigInt("277")
		const addressUDmEaLr = accounts[1]
		const uintFuB44YB = BigInt("412")
		const uintygcJY4R = await CryptozPjtEmNq.getTimeToDailyBonus.call(addressymd8zkA, {from: accounts[3]});
		await CryptozPjtEmNq.f.call({from: accounts[3]});
		const boolqtQqyEj = await CryptozPjtEmNq.buyBoosterCard.call(uintyLU0rwi, {from: accounts[1]});
		const uint256F5y0FLk = await CryptozPjtEmNq.tokenOfOwnerByIndex.call(addressUDmEaLr, uintyIVTrcA, {from: accounts[0]});
		const boolZz49gYf = await CryptozPjtEmNq.openBoosterCard.call(uintFuB44YB, {from: accounts[4]});

		assert.equal(uintygcJY4R, BigInt("1630205432"))
		await expect(CryptozPjtEmNq.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozTr1RhT2 = await Cryptoz.new({from: accounts[0]});
		const uintO41QyWY = BigInt("1482")
		const uintYuyYXze = BigInt("1492")
		const addresshtR30X4 = accounts[2]
		const boolzgIJts0 = await CryptozTr1RhT2.buyBoosterCard.call(uintO41QyWY, {from: accounts[2]});
		await CryptozTr1RhT2.f.call({from: accounts[2]});
		const boolST1LoT = await CryptozTr1RhT2.buyBoosterCard.call(uintYuyYXze, {from: accounts[1]});
		const addressM6vr7DP = await CryptozTr1RhT2.linkMySponsor.call(addresshtR30X4, {from: accounts[2]});
		await CryptozTr1RhT2.buyBoosterCardAndOpen.call({from: accounts[4]});

		await expect(CryptozTr1RhT2.buyBoosterCard.call(uintO41QyWY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozfZhsIXD = await Cryptoz.new({from: accounts[2]});
		const uintjMvqcWM = BigInt("1448")
		const uintSJSYbtK = BigInt("744")
		const uintXwdFP50 = BigInt("1165")
		const uintwLZJK3N = BigInt("1871")
		const uintoRH9Yji = BigInt("173")
		const uint0NcH05 = BigInt("212")
		const uintKJUYGfk = BigInt("39")
		const stringpEKDgKE = "ccgXixfHEN15nUDrmA7svZnfO8j4vzi4lnQSv"
		const stringpWONykl = "p4zk41zMnejtRg7BoO4wy9SNdouw1dduPH8A9aRjwe4pqiA"
		const uintRIrES8 = BigInt("11")
		const uintjr6BSa7 = BigInt("458")
		const stringr8hzsDz = await CryptozfZhsIXD.symbol.call({from: accounts[0]});
		await CryptozfZhsIXD.getBonusBoosters.call({from: accounts[0]});
		const uint256LKIAARP = await CryptozfZhsIXD.sacrifice.call(uintjMvqcWM, {from: accounts[1]});
		const boolqwCDc3E = await CryptozfZhsIXD.loadNewCardType.call(uintRIrES8, stringpWONykl, stringpEKDgKE, uintKJUYGfk, uint0NcH05, uintoRH9Yji, uintwLZJK3N, uintXwdFP50, uintSJSYbtK, {from: accounts[4]});
		const boolgPkGeEU = await CryptozfZhsIXD.openBoosterCard.call(uintjr6BSa7, {from: accounts[2]});

		assert.equal(stringr8hzsDz, "Cryptoz")
		await expect(CryptozfZhsIXD.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const Cryptoz3XVrla = await Cryptoz.new({from: accounts[4]});
		const addressNgxIXrM = "0x0000000000000000000000000000000000000001"
		const uint256arrayBvM8L5e = await Cryptoz3XVrla.tokensOfOwner.call(addressNgxIXrM, {from: accounts[3]});
		const uint256mnF9Nwh = await Cryptoz3XVrla.totalSupply.call({from: accounts[0]});
		await Cryptoz3XVrla.getTokensByRarity.call({from: accounts[1]});

		assert.equal(uint256arrayBvM8L5e, BigInt(""))
		assert.equal(uint256mnF9Nwh, BigInt("0"))
		await expect(Cryptoz3XVrla.getTokensByRarity.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozVXfCW2l = await Cryptoz.new({from: accounts[1]});
		const addressVfQ50DG = accounts[3]
		const addressFvT8zg5 = accounts[4]
		const uintB2STlJ = BigInt("1176")
		const uintkqtjdoq = BigInt("1085")
		const addressWp9YRJv = accounts[1]
		const uintvl1fAS5 = BigInt("1714")
		const addressNbWXHR8 = accounts[2]
		const addressAW36O7O = await CryptozVXfCW2l.linkMySponsor.call(addressVfQ50DG, {from: accounts[4]});
		const uint256arrayOiDhbTN = await CryptozVXfCW2l.tokensOfOwner.call(addressFvT8zg5, {from: accounts[0]});
		const uint32RHziaRt = await CryptozVXfCW2l.isValidCard.call(uintB2STlJ, {from: accounts[4]});
		const uint256UQqGFFR = await CryptozVXfCW2l.tokenOfOwnerByIndex.call(addressWp9YRJv, uintkqtjdoq, {from: accounts[0]});
		const uint256EzJSlRV = await CryptozVXfCW2l.tokenOfOwnerByIndex.call(addressNbWXHR8, uintvl1fAS5, {from: accounts[4]});

		await expect(CryptozVXfCW2l.linkMySponsor.call(addressVfQ50DG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozhZiNp9K = await Cryptoz.new({from: accounts[0]});
		const uintYfTkqvA = BigInt("1723")
		const uintoXcISkp = BigInt("1270")
		const addressXhHSvJh = accounts[3]
		const addressF4VEgTX = accounts[1]
		const uintIfFX7vW = BigInt("1100")
		const uint32e2jOUTN = await CryptozhZiNp9K.isValidCard.call(uintYfTkqvA, {from: accounts[1]});
		const addressMHJXaq = await CryptozhZiNp9K.transferFrom.call(addressF4VEgTX, addressXhHSvJh, uintoXcISkp, {from: accounts[2]});
		const boolbfW9MWS = await CryptozhZiNp9K.buyCard.call(uintIfFX7vW, {from: accounts[0]});

		await expect(CryptozhZiNp9K.isValidCard.call(uintYfTkqvA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozeLhZySC = await Cryptoz.new({from: accounts[1]});
		const addresseRql4Lq = accounts[5]
		const addressmjlJcu = accounts[4]
		const address9ODqmF = await CryptozeLhZySC.initialize.call(addresseRql4Lq, {from: "0x0000000000000000000000000000000000000001"});
		const uintwrCAubJ = await CryptozeLhZySC.getTimeToDailyBonus.call(addressmjlJcu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CryptozeLhZySC.initialize.call(addresseRql4Lq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozfZhsIXD = await Cryptoz.new({from: accounts[2]});
		const uintl3CZqT3 = BigInt("1066")
		const uintR0NYfDY = BigInt("1469")
		const uint8UxZ85 = BigInt("744")
		const uintfnARDT0 = BigInt("1165")
		const uintTK7c9oc = BigInt("1871")
		const uintX20sCkF = BigInt("173")
		const uintRDqnf3L = BigInt("212")
		const uintopHyUUp = BigInt("39")
		const stringpEKDgKE = "ccgXixfHEN15nUDrmA7svZnfO8j4vzi4lnQSv"
		const stringpWONykl = "p4zk41zMnejtRg7BoO4wy9SNdouw1dduPH8A9aRjwe4pqiA"
		const uintAvnnJTI = BigInt("11")
		const uintZX4ClSc = BigInt("802")
		const uintSKVXnuM = BigInt("458")
		const uintARjFeRb = BigInt("68")
		const uintjYopZXD = BigInt("878")
		const uinteYInEhQ = BigInt("1973")
		const uintPevbuAE = BigInt("1705")
		const uintHFo4o1W = BigInt("714")
		await CryptozfZhsIXD.getOwnedCard.call(uintl3CZqT3, {from: accounts[2]});
		const stringr8hzsDz = await CryptozfZhsIXD.symbol.call({from: accounts[0]});
		await CryptozfZhsIXD.getBonusBoosters.call({from: accounts[0]});
		const uint256LKIAARP = await CryptozfZhsIXD.sacrifice.call(uintR0NYfDY, {from: accounts[1]});
		const boolqwCDc3E = await CryptozfZhsIXD.loadNewCardType.call(uintAvnnJTI, stringpWONykl, stringpEKDgKE, uintopHyUUp, uintRDqnf3L, uintX20sCkF, uintTK7c9oc, uintfnARDT0, uint8UxZ85, {from: accounts[4]});
		const uint32lMMsEqP = await CryptozfZhsIXD.getFreeCard.call(uintZX4ClSc, {from: accounts[0]});
		const boolgPkGeEU = await CryptozfZhsIXD.openBoosterCard.call(uintSKVXnuM, {from: accounts[2]});
		const booliHsYwXV = await CryptozfZhsIXD.addTocardType.call(uintHFo4o1W, uintPevbuAE, uinteYInEhQ, uintjYopZXD, uintARjFeRb, {from: accounts[0]});

		await expect(CryptozfZhsIXD.getOwnedCard.call(uintl3CZqT3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozfZhsIXD = await Cryptoz.new({from: accounts[2]});
		const uintbm6dMUq = BigInt("79")
		const uint1t4y9M = BigInt("1873")
		const uintIiyjAcI = BigInt("1370")
		const uintEJopyWh = BigInt("210")
		const uintJYNPvje = BigInt("1978")
		const uint28r5ds = BigInt("1702")
		const uintPwNexUf = BigInt("744")
		const uintdcIOILY = BigInt("1165")
		const uintmUqcacG = BigInt("1871")
		const uintyHVzRhT = BigInt("173")
		const uintiO4dC3C = BigInt("212")
		const uintlsjXgM = BigInt("39")
		const stringpEKDgKE = "ccgXixfHEN15nUDrmA7svZnfO8j4vzi4lnQSv"
		const stringpWONykl = "p4zk41zMnejtRg7BoO4wy9SNdouw1dduPH8A9aRjwe4pqiA"
		const uintWpxEpvj = BigInt("11")
		const uintkSDF8F = BigInt("578")
		const stringr8hzsDz = await CryptozfZhsIXD.symbol.call({from: accounts[0]});
		await CryptozfZhsIXD.getBonusBoosters.call({from: accounts[0]});
		const boolC2cFeU = await CryptozfZhsIXD.addTocardType.call(uintJYNPvje, uintEJopyWh, uintIiyjAcI, uint1t4y9M, uintbm6dMUq, {from: accounts[2]});
		const uint256LKIAARP = await CryptozfZhsIXD.sacrifice.call(uint28r5ds, {from: accounts[1]});
		const boolqwCDc3E = await CryptozfZhsIXD.loadNewCardType.call(uintWpxEpvj, stringpWONykl, stringpEKDgKE, uintlsjXgM, uintiO4dC3C, uintyHVzRhT, uintmUqcacG, uintdcIOILY, uintPwNexUf, {from: accounts[4]});
		const uint32TqVBer2 = await CryptozfZhsIXD.isValidCard.call(uintkSDF8F, {from: accounts[0]});

		assert.equal(stringr8hzsDz, "Cryptoz")
		await expect(CryptozfZhsIXD.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozMb5yq0X = await Cryptoz.new({from: accounts[3]});
		const uintpNTlFP4 = BigInt("1066")
		const addressr4OHY5g = accounts[1]
		const uintqT2Mp8O = BigInt("500")
		const uintONitk3n = BigInt("2032")
		const uint256XNMvMo9 = await CryptozMb5yq0X.tokenOfOwnerByIndex.call(addressr4OHY5g, uintpNTlFP4, {from: accounts[5]});
		await CryptozMb5yq0X.getOwnedCard.call(uintqT2Mp8O, {from: accounts[0]});
		const bool2ZdJgE = await CryptozMb5yq0X.buyBoosterCard.call(uintONitk3n, {from: accounts[2]});

		await expect(CryptozMb5yq0X.tokenOfOwnerByIndex.call(addressr4OHY5g, uintpNTlFP4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozKpKilAK = await Cryptoz.new({from: accounts[0]});
		const uint1LXykp = BigInt("287")
		const addressA9eEj3o = accounts[2]
		await CryptozKpKilAK.buyBoosterCardAndOpen.call({from: accounts[3]});
		const uint2562VNvwp = await CryptozKpKilAK.sacrifice.call(uint1LXykp, {from: accounts[4]});
		const addressabru2K3 = await CryptozKpKilAK.initialize.call(addressA9eEj3o, {from: accounts[3]});

		await expect(CryptozKpKilAK.buyBoosterCardAndOpen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozfZhsIXD = await Cryptoz.new({from: accounts[2]});
		const uintNWIV77L = BigInt("1448")
		const stringr8hzsDz = await CryptozfZhsIXD.symbol.call({from: accounts[0]});
		const stringWgIivHL = await CryptozfZhsIXD.name.call({from: accounts[1]});
		await CryptozfZhsIXD.getBonusBoosters.call({from: accounts[0]});
		const uint256LKIAARP = await CryptozfZhsIXD.sacrifice.call(uintNWIV77L, {from: accounts[1]});

		assert.equal(stringWgIivHL, "Cryptoz Cards")
		assert.equal(stringr8hzsDz, "Cryptoz")
		await expect(CryptozfZhsIXD.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozNlCBHcK = await Cryptoz.new({from: accounts[2]});
		const uinttQXXDUk = BigInt("264")
		const addressKaw6N2K = accounts[2]
		const addressQFRfhmW = accounts[5]
		const uintYDtXJpx = BigInt("1247")
		const uintYobaidm = BigInt("1224")
		const uintqNM6w8E = BigInt("1509")
		const addressMWSqIKK = await CryptozNlCBHcK.transferFrom.call(addressQFRfhmW, addressKaw6N2K, uinttQXXDUk, {from: accounts[0]});
		const uint256oESazSt = await CryptozNlCBHcK.sacrifice.call(uintYDtXJpx, {from: accounts[0]});
		const uint256a5prG1u = await CryptozNlCBHcK.tokenByIndex.call(uintYobaidm, {from: accounts[5]});
		const uint32naXVzrm = await CryptozNlCBHcK.getFreeCard.call(uintqNM6w8E, {from: accounts[3]});

		await expect(CryptozNlCBHcK.transferFrom.call(addressQFRfhmW, addressKaw6N2K, uinttQXXDUk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozfZhsIXD = await Cryptoz.new({from: accounts[2]});
		const addressJsCbBvt = accounts[0]
		const uint0pAAbG = BigInt("1448")
		const uintMz4n3k7 = BigInt("744")
		const uintJD4I81h = BigInt("1165")
		const uintQ4XCiI = BigInt("1871")
		const uintanEGy9c = BigInt("173")
		const uintPbADiXs = BigInt("212")
		const uintXypEq1d = BigInt("39")
		const stringpEKDgKE = "ccgXixfHEN15nUDrmA7svZnfO8j4vzi4lnQSv"
		const stringpWONykl = "p4zk41zMnejtRg7BoO4wy9SNdouw1dduPH8A9aRjwe4pqiA"
		const uinthWQmI7 = BigInt("11")
		const stringr8hzsDz = await CryptozfZhsIXD.symbol.call({from: accounts[0]});
		const addressNBDs4zw = await CryptozfZhsIXD.initialize.call(addressJsCbBvt, {from: accounts[2]});
		await CryptozfZhsIXD.getBonusBoosters.call({from: accounts[0]});
		const uint256LKIAARP = await CryptozfZhsIXD.sacrifice.call(uint0pAAbG, {from: accounts[1]});
		const boolqwCDc3E = await CryptozfZhsIXD.loadNewCardType.call(uinthWQmI7, stringpWONykl, stringpEKDgKE, uintXypEq1d, uintPbADiXs, uintanEGy9c, uintQ4XCiI, uintJD4I81h, uintMz4n3k7, {from: accounts[4]});

		assert.equal(stringr8hzsDz, "Cryptoz")
		await expect(CryptozfZhsIXD.getBonusBoosters.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozmYsVlhS = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstq9GLb = accounts[2]
		const uintw6aPh0G = BigInt("2021")
		const addressvtNI0AY = accounts[3]
		const addressm30GIyL = await CryptozmYsVlhS.initialize.call(addresstq9GLb, {from: accounts[2]});
		await CryptozmYsVlhS.getBonusBoosters.call({from: accounts[0]});
		const boolw569dB3 = await CryptozmYsVlhS.buyBoosterCard.call(uintw6aPh0G, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayXUW5JBo = await CryptozmYsVlhS.tokensOfOwner.call(addressvtNI0AY, {from: accounts[4]});
	});

	it('test for Cryptoz', async () => {
		const CryptozfZhsIXD = await Cryptoz.new({from: accounts[2]});
		const uintezhgqVs = BigInt("789")
		const uintdFqq5UL = BigInt("798")
		const uintRsWplo = BigInt("458")
		const stringr8hzsDz = await CryptozfZhsIXD.symbol.call({from: accounts[0]});
		const uint256x8vfcU = await CryptozfZhsIXD.tokenByIndex.call(uintezhgqVs, {from: accounts[0]});
		await CryptozfZhsIXD.buyBoosterCardAndOpen.call({from: accounts[2]});
		const uint256LKIAARP = await CryptozfZhsIXD.sacrifice.call(uintdFqq5UL, {from: accounts[1]});
		const boolgPkGeEU = await CryptozfZhsIXD.openBoosterCard.call(uintRsWplo, {from: accounts[2]});

		assert.equal(stringr8hzsDz, "Cryptoz")
		await expect(CryptozfZhsIXD.tokenByIndex.call(uintezhgqVs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozMb5yq0X = await Cryptoz.new({from: accounts[3]});
		const uintvFZlkSe = BigInt("1444")
		const uinthi3SbGx = BigInt("2031")
		const uintV2IWF6d = BigInt("746")
		const uintWuBfMJv = BigInt("2")
		const uintG0WOAvh = BigInt("227")
		const uintUxG1Anx = BigInt("110")
		const stringUy103HN = "1aQCxX5CW3EgbyVsJO0bsaxXu9ASNCu5CbfF9fy4v7xRKITrWJsi8YKbMkIgz2dyksUDbOnpA2LdQuiGo"
		const stringIVPSvl = "UCDPf3YfZ4rEJKElU5mn4I1mioNiIYyUniLY8fXjq"
		const uintXTsec8h = BigInt("171")
		const uintyjUSfVw = BigInt("1250")
		const uintHEHR4rH = BigInt("245")
		const uinteljz0uk = BigInt("278")
		const uintHLwnIlu = BigInt("70")
		const uintgwq8GiF = BigInt("587")
		const uintglK6rx8 = BigInt("935")
		const booldJ63GgN = await CryptozMb5yq0X.loadNewCardType.call(uintXTsec8h, stringIVPSvl, stringUy103HN, uintUxG1Anx, uintG0WOAvh, uintWuBfMJv, uintV2IWF6d, uinthi3SbGx, uintvFZlkSe, {from: accounts[3]});
		const uint256SqzgeAK = await CryptozMb5yq0X.tokenByIndex.call(uintyjUSfVw, {from: accounts[5]});
		await CryptozMb5yq0X.getBonusBoosters.call({from: accounts[0]});
		const boolhGb3IF6 = await CryptozMb5yq0X.addTocardType.call(uintglK6rx8, uintgwq8GiF, uintHLwnIlu, uinteljz0uk, uintHEHR4rH, {from: accounts[5]});

		assert.equal(booldJ63GgN, true)
		await expect(CryptozMb5yq0X.tokenByIndex.call(uintyjUSfVw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Cryptoz', async () => {
		const CryptozJo4nKjS = await Cryptoz.new({from: accounts[5]});
		const uintg6gqwv = BigInt("94")
		await CryptozJo4nKjS.getTokensByRarity.call({from: accounts[2]});
		const stringNjFg1Lf = await CryptozJo4nKjS.tokenURI.call(uintg6gqwv, {from: accounts[2]});

		await expect(CryptozJo4nKjS.getTokensByRarity.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})