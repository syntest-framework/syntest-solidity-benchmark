const Cryptoz = artifacts.require("Cryptoz");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Cryptoz', (accounts) => {
	it('test for Cryptoz', async () => {
		const CryptozQUR5Af = await Cryptoz.new({from: accounts[4]});
		const addressvCg9EJ6 = accounts[3]
		const addressSGCJYt3 = accounts[3]
		const addressO7cBQI = accounts[4]
		const uintnwcV6sf = BigInt("77")
		const addressCj09tEV = await CryptozQUR5Af.initialize.call(addressvCg9EJ6, {from: accounts[1]});
		const addressUYIgjH8 = await CryptozQUR5Af.linkMySponsor.call(addressSGCJYt3, {from: accounts[3]});
		const addresskOzOkLX = await CryptozQUR5Af.linkMySponsor.call(addressO7cBQI, {from: accounts[2]});
		const uint32msNdD2c = await CryptozQUR5Af.isValidCard.call(uintnwcV6sf, {from: accounts[1]});
		await CryptozQUR5Af.buyBoosterCardAndOpen.call({from: accounts[4]});
	});

	it('test for Cryptoz', async () => {
		const CryptozqSg38I6 = await Cryptoz.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcqVlmw = BigInt("1977")
		const uintjGCGHWj = BigInt("933")
		const addressC4koDDQ = "0x0000000000000000000000000000000000000001"
		const uint256ftY7ub = await CryptozqSg38I6.sacrifice.call(uintcqVlmw, {from: accounts[5]});
		const uint256FBOsxkT = await CryptozqSg38I6.totalSupply.call({from: accounts[2]});
		const uint32QmeTgkH = await CryptozqSg38I6.getFreeCard.call(uintjGCGHWj, {from: accounts[3]});
		const addressE5p0DZy = await CryptozqSg38I6.initialize.call(addressC4koDDQ, {from: accounts[1]});
		const uint256lW0vMd3 = await CryptozqSg38I6.totalSupply.call({from: accounts[1]});
	});

	it('test for Cryptoz', async () => {
		const Cryptoz6YfV1r = await Cryptoz.new({from: accounts[0]});
		const uintTYQ5xOx = BigInt("1926")
		const uintLBisVhg = BigInt("1721")
		const uintTNSMtr5 = BigInt("1990")
		await Cryptoz6YfV1r.getOwnedCard.call(uintTYQ5xOx, {from: accounts[4]});
		await Cryptoz6YfV1r.getOwnedCard.call(uintLBisVhg, {from: "0x0000000000000000000000000000000000000001"});
		const uint32w8pDeiB = await Cryptoz6YfV1r.getFreeCard.call(uintTNSMtr5, {from: accounts[1]});
		const stringJbTkag1 = await Cryptoz6YfV1r.symbol.call({from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const Cryptoz8g4YQg = await Cryptoz.new({from: accounts[0]});
		const uintQAPAM3T = BigInt("972")
		const addressrz8p065 = accounts[4]
		const uint32U4IQPBC = await Cryptoz8g4YQg.isValidCard.call(uintQAPAM3T, {from: accounts[0]});
		const uintgXZHH8d = await Cryptoz8g4YQg.getTimeToDailyBonus.call(addressrz8p065, {from: accounts[1]});
		await Cryptoz8g4YQg.getTokensByRarity.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cryptoz', async () => {
		const CryptozPfzAq2W = await Cryptoz.new({from: accounts[1]});
		const uintGMUStuD = BigInt("387")
		const addressBaFT56L = accounts[5]
		await CryptozPfzAq2W.buyBoosterCardAndOpen.call({from: accounts[0]});
		const boolhGZU3cF = await CryptozPfzAq2W.buyCard.call(uintGMUStuD, {from: accounts[1]});
		const addressZwpuEF = await CryptozPfzAq2W.initialize.call(addressBaFT56L, {from: accounts[1]});
		await CryptozPfzAq2W.getBonusBoosters.call({from: accounts[5]});
	});

	it('test for Cryptoz', async () => {
		const CryptozjlA3Mle = await Cryptoz.new({from: accounts[2]});
		const addressxVOJ4Gh = accounts[3]
		const uintdHUJJiU = BigInt("1289")
		const uintFk7MqHN = BigInt("333")
		const uintJ2agvoX = BigInt("1133")
		const uintIFAzvCO = BigInt("66")
		const uintkoQuY5E = BigInt("50")
		const uintOPwGNt = BigInt("51")
		const stringIFT2P6X = "OQhGJTDSQ3XLUzi3KTJw3nGevpGCWH"
		const stringbFLfE9V = "4448kmInzdkbmmPef4emj7xAbCc9mfVThIrWyiqFxHeUEdga"
		const uintQavrEia = BigInt("9")
		const uinthCVpw4 = BigInt("755")
		const uint256arrayO6KMPe = await CryptozjlA3Mle.tokensOfOwner.call(addressxVOJ4Gh, {from: accounts[2]});
		const boolwuJKbd2 = await CryptozjlA3Mle.loadNewCardType.call(uintQavrEia, stringbFLfE9V, stringIFT2P6X, uintOPwGNt, uintkoQuY5E, uintIFAzvCO, uintJ2agvoX, uintFk7MqHN, uintdHUJJiU, {from: accounts[0]});
		await CryptozjlA3Mle.getOwnedCard.call(uinthCVpw4, {from: accounts[0]});
		await CryptozjlA3Mle.f.call({from: accounts[4]});
	});

	it('test for Cryptoz', async () => {
		const CryptozZDwcZZt = await Cryptoz.new({from: accounts[5]});
		const uintcuI2uva = BigInt("1272")
		const uintcNKbi7v = BigInt("1093")
		const address6UPQmO = accounts[5]
		const addressRoDkLl4 = accounts[4]
		const stringfmuQsIQ = await CryptozZDwcZZt.tokenURI.call(uintcuI2uva, {from: accounts[0]});
		const addressOmHthE0 = await CryptozZDwcZZt.transferFrom.call(addressRoDkLl4, address6UPQmO, uintcNKbi7v, {from: accounts[1]});
	});

	it('test for Cryptoz', async () => {
		const CryptozOHmvuC = await Cryptoz.new({from: accounts[3]});
		const uintSMF9ByX = BigInt("876")
		const uintqdhXZB5 = BigInt("1724")
		const addressVHWwEAj = accounts[4]
		const uint256AxlKofx = await CryptozOHmvuC.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolC0eO9QW = await CryptozOHmvuC.buyBoosterCard.call(uintSMF9ByX, {from: accounts[5]});
		const uint256pwMwfOJ = await CryptozOHmvuC.tokenOfOwnerByIndex.call(addressVHWwEAj, uintqdhXZB5, {from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const CryptozguMpDJR = await Cryptoz.new({from: accounts[1]});
		const uintO1hk2n = BigInt("1630")
		const uintQOsD4Vd = BigInt("2023")
		const uintrA2g6XW = BigInt("1939")
		const uint256t9EdQ0c = await CryptozguMpDJR.tokenByIndex.call(uintO1hk2n, {from: accounts[3]});
		await CryptozguMpDJR.getOwnedCard.call(uintQOsD4Vd, {from: accounts[1]});
		const uint256tb6SfuA = await CryptozguMpDJR.totalSupply.call({from: accounts[3]});
		await CryptozguMpDJR.getBonusBoosters.call({from: accounts[5]});
		const uint32E0It8TH = await CryptozguMpDJR.isValidCard.call(uintrA2g6XW, {from: accounts[5]});
	});

	it('test for Cryptoz', async () => {
		const CryptozOHmvuC = await Cryptoz.new({from: accounts[3]});
		const uintyzPpR0V = BigInt("1724")
		const addressXvMGudt = accounts[4]
		const uint256AxlKofx = await CryptozOHmvuC.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await CryptozOHmvuC.getBonusBoosters.call({from: accounts[1]});
		const uint256pwMwfOJ = await CryptozOHmvuC.tokenOfOwnerByIndex.call(addressXvMGudt, uintyzPpR0V, {from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const CryptozOHmvuC = await Cryptoz.new({from: accounts[3]});
		const uintJtt4yj1 = BigInt("1982")
		const uintWtbDPj7 = BigInt("1724")
		const addressYoz2NCi = accounts[4]
		const uint256AxlKofx = await CryptozOHmvuC.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await CryptozOHmvuC.getBonusBoosters.call({from: accounts[1]});
		const boole2RJ0T9 = await CryptozOHmvuC.openBoosterCard.call(uintJtt4yj1, {from: accounts[4]});
		const uint256pwMwfOJ = await CryptozOHmvuC.tokenOfOwnerByIndex.call(addressYoz2NCi, uintWtbDPj7, {from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const CryptozOHmvuC = await Cryptoz.new({from: accounts[3]});
		const uintHroqBE6 = BigInt("211")
		const uintT2JujSD = BigInt("517")
		const uintKGw8LYl = BigInt("2010")
		const uintmEYFKKB = BigInt("1452")
		const uintjs7oQ9 = BigInt("1372")
		const uintlvHJQCJ = BigInt("1982")
		const uintTzeGMMz = BigInt("309")
		const uintsVvIhoD = BigInt("1750")
		const addressCcBnuH = accounts[4]
		const uint256AxlKofx = await CryptozOHmvuC.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolZPirNEu = await CryptozOHmvuC.addTocardType.call(uintjs7oQ9, uintmEYFKKB, uintKGw8LYl, uintT2JujSD, uintHroqBE6, {from: accounts[3]});
		await CryptozOHmvuC.getBonusBoosters.call({from: accounts[1]});
		const boole2RJ0T9 = await CryptozOHmvuC.openBoosterCard.call(uintlvHJQCJ, {from: accounts[4]});
		const boolueNtKtf = await CryptozOHmvuC.openBoosterCard.call(uintTzeGMMz, {from: accounts[5]});
		const stringyuG2xvK = await CryptozOHmvuC.name.call({from: accounts[5]});
		const uint256pwMwfOJ = await CryptozOHmvuC.tokenOfOwnerByIndex.call(addressCcBnuH, uintsVvIhoD, {from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const CryptozOHmvuC = await Cryptoz.new({from: accounts[3]});
		const addressBl5O3pn = accounts[3]
		const uintvq6bNd = BigInt("1982")
		const uintebIHCmJ = BigInt("1724")
		const addressA7ntSlt = accounts[4]
		const uint256AxlKofx = await CryptozOHmvuC.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addresssiLKt9O = await CryptozOHmvuC.linkMySponsor.call(addressBl5O3pn, {from: accounts[0]});
		await CryptozOHmvuC.getBonusBoosters.call({from: accounts[1]});
		const boole2RJ0T9 = await CryptozOHmvuC.openBoosterCard.call(uintvq6bNd, {from: accounts[4]});
		const uint256pwMwfOJ = await CryptozOHmvuC.tokenOfOwnerByIndex.call(addressA7ntSlt, uintebIHCmJ, {from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const CryptozNdVP32I = await Cryptoz.new({from: accounts[0]});
		const addressLUvPzwO = accounts[3]
		const addressjHYPr3W = accounts[1]
		await CryptozNdVP32I.getTokensByRarity.call({from: accounts[3]});
		await CryptozNdVP32I.getBonusBoosters.call({from: accounts[4]});
		const addressdVVmbeh = await CryptozNdVP32I.initialize.call(addressLUvPzwO, {from: accounts[3]});
		const stringdyZKES0 = await CryptozNdVP32I.symbol.call({from: accounts[4]});
		const addressHUChQpK = await CryptozNdVP32I.linkMySponsor.call(addressjHYPr3W, {from: accounts[4]});
		await CryptozNdVP32I.buyBoosterCardAndOpen.call({from: accounts[1]});
	});

	it('test for Cryptoz', async () => {
		const CryptozOHmvuC = await Cryptoz.new({from: accounts[3]});
		const uintO0BMAuG = BigInt("1982")
		const uintsO8XDaH = BigInt("1724")
		const addressBo8gmJf = accounts[4]
		const uint256AxlKofx = await CryptozOHmvuC.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const stringw5U8TVp = await CryptozOHmvuC.name.call({from: accounts[0]});
		await CryptozOHmvuC.getTokensByRarity.call({from: accounts[2]});
		const boole2RJ0T9 = await CryptozOHmvuC.openBoosterCard.call(uintO0BMAuG, {from: accounts[4]});
		const uint256pwMwfOJ = await CryptozOHmvuC.tokenOfOwnerByIndex.call(addressBo8gmJf, uintsO8XDaH, {from: accounts[2]});
	});

	it('test for Cryptoz', async () => {
		const CryptozNdVP32I = await Cryptoz.new({from: accounts[0]});
		await CryptozNdVP32I.getBonusBoosters.call({from: accounts[4]});
		await CryptozNdVP32I.f.call({from: accounts[2]});
		await CryptozNdVP32I.buyBoosterCardAndOpen.call({from: accounts[1]});
	});

	it('test for Cryptoz', async () => {
		const CryptozNdVP32I = await Cryptoz.new({from: accounts[0]});
		const uintKSonn1L = BigInt("910")
		await CryptozNdVP32I.getBonusBoosters.call({from: accounts[4]});
		const stringrygXFi = await CryptozNdVP32I.symbol.call({from: accounts[5]});
		const uint32lUNd2uw = await CryptozNdVP32I.isValidCard.call(uintKSonn1L, {from: accounts[2]});
		await CryptozNdVP32I.buyBoosterCardAndOpen.call({from: accounts[1]});
	});

	it('test for Cryptoz', async () => {
		const CryptozNdVP32I = await Cryptoz.new({from: accounts[0]});
		const uintv4Ml6v8 = BigInt("806")
		const addressUVPj12L = accounts[2]
		const uint256EJS4JMS = await CryptozNdVP32I.sacrifice.call(uintv4Ml6v8, {from: accounts[3]});
		await CryptozNdVP32I.getBonusBoosters.call({from: accounts[4]});
		const uintbzTHu2O = await CryptozNdVP32I.getTimeToDailyBonus.call(addressUVPj12L, {from: accounts[1]});
		await CryptozNdVP32I.buyBoosterCardAndOpen.call({from: accounts[1]});
	});

	it('test for Cryptoz', async () => {
		const Cryptoz0uzTOQ = await Cryptoz.new({from: accounts[3]});
		const uintLw3ZN9H = BigInt("207")
		const uintgk3q06 = BigInt("1610")
		const uintvf7LAk9 = BigInt("793")
		const uintNXcpuHw = BigInt("99")
		const uintwiSNVfZ = BigInt("161")
		const uintEG27tGY = BigInt("72")
		const stringmDAwK5 = "2YnAfOgP845a9gQMKF23AvQUmwL251Mu16owLgxeNiX6ieNuEPy1RC2BvLNWrWgiC9GPAGgLsPCHfr7s2JXeh8B755SI2jJhg"
		const stringdKxdrJN = "oP37x2dZPgqBi33iUdcnKpJQLlqXrHjA1glwa4nlQYVynwGnO3Y3XbJPnGvzWK4l"
		const uintoqenkRl = BigInt("217")
		const uintzWmspZg = BigInt("306")
		const uintbLAVRLI = BigInt("33")
		const uintWsF1J5R = BigInt("401")
		const uintT3LA8rq = BigInt("104")
		const uintuzx3cWv = BigInt("1500")
		const uintXr4cFe = BigInt("1028")
		const uintKildzMR = BigInt("219")
		const addressApf2mOY = accounts[2]
		const boolFzc9rl = await Cryptoz0uzTOQ.loadNewCardType.call(uintoqenkRl, stringdKxdrJN, stringmDAwK5, uintEG27tGY, uintwiSNVfZ, uintNXcpuHw, uintvf7LAk9, uintgk3q06, uintLw3ZN9H, {from: accounts[3]});
		const boolIcATTe = await Cryptoz0uzTOQ.buyBoosterCard.call(uintzWmspZg, {from: accounts[4]});
		const boolvusnmeI = await Cryptoz0uzTOQ.addTocardType.call(uintXr4cFe, uintuzx3cWv, uintT3LA8rq, uintWsF1J5R, uintbLAVRLI, {from: accounts[3]});
		const uint256YuPIO4L = await Cryptoz0uzTOQ.tokenByIndex.call(uintKildzMR, {from: accounts[5]});
		const addressltUsdPV = await Cryptoz0uzTOQ.initialize.call(addressApf2mOY, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Cryptoz', async () => {
		const CryptozNdVP32I = await Cryptoz.new({from: accounts[0]});
		const addressBk4XEf = accounts[1]
		const addressqycAjw = await CryptozNdVP32I.initialize.call(addressBk4XEf, {from: accounts[0]});
		await CryptozNdVP32I.getTokensByRarity.call({from: accounts[0]});
		await CryptozNdVP32I.getTokensByRarity.call({from: accounts[4]});
		await CryptozNdVP32I.getBonusBoosters.call({from: accounts[4]});
	});
})