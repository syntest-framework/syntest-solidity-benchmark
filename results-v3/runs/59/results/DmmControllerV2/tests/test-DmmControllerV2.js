const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const addressNeWkOno = accounts[2]
		const addressWFDCz72 = "0x0000000000000000000000000000000000000001"
		const addressUbdG0uk = "0x0000000000000000000000000000000000000001"
		const addressNWJuZHH = accounts[3]
		const addresslAFoGEo = accounts[1]
		const addressnOFOy9X = accounts[3]
		const addressJXkwC6Y = accounts[5]
		const addressASe6a0m = accounts[1]
		const addressAsk3DAk = accounts[1]
		const uintSp0fYAG = BigInt("1752")
		const uintJFYV80j = BigInt("429")
		const addressWt5zvF7 = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2JnbKW2D = await DmmControllerV2.new(addressNeWkOno, addressWFDCz72, addressUbdG0uk, addressNWJuZHH, addresslAFoGEo, addressnOFOy9X, addressJXkwC6Y, addressASe6a0m, addressAsk3DAk, uintSp0fYAG, uintJFYV80j, addressWt5zvF7, {from: accounts[4]});
		const addressHRixhi0 = accounts[5]
		const addressfTecXwD = accounts[3]
		const booljTt4u95 = await DmmControllerV2JnbKW2D.isBlacklisted.call(addressHRixhi0, {from: accounts[4]});
		const addressJv52Q46 = await DmmControllerV2JnbKW2D.setDmmEtherFactory.call(addressfTecXwD, {from: accounts[1]});
		await DmmControllerV2JnbKW2D.pause.call({from: accounts[2]});
		await DmmControllerV2JnbKW2D.onlyOwnerOrGuardian.call({from: accounts[1]});
		await DmmControllerV2JnbKW2D.whenNotPaused.call({from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const DmmControllerV2yf7uWFw = await DmmControllerV2.new({from: accounts[1]});
		await DmmControllerV2yf7uWFw.onlyOwnerOrGuardian.call({from: accounts[0]});
		await DmmControllerV2yf7uWFw.renounceOwnership.call({from: accounts[4]});
		await DmmControllerV2yf7uWFw.requireIsFromAssetIntroducer.call({from: accounts[0]});
	});

	it('test for DmmControllerV2', async () => {
		const addresswBnpn14 = accounts[0]
		const addressZXP6400 = "0x0000000000000000000000000000000000000001"
		const addressgTDd4Sq = accounts[2]
		const addresscBg276x = accounts[5]
		const addressP7ByQZm = accounts[4]
		const addressP4sxho6 = accounts[2]
		const addressX2lnrZl = accounts[4]
		const addresscHcUreN = accounts[1]
		const addressmVC0fcA = "0x0000000000000000000000000000000000000001"
		const uintuQsQfvs = BigInt("1453")
		const uintpXSqxC = BigInt("818")
		const addressp4l5cSM = accounts[1]
		const DmmControllerV2rCtkdV = await DmmControllerV2.new(addresswBnpn14, addressZXP6400, addressgTDd4Sq, addresscBg276x, addressP7ByQZm, addressP4sxho6, addressX2lnrZl, addresscHcUreN, addressmVC0fcA, uintuQsQfvs, uintpXSqxC, addressp4l5cSM, {from: accounts[1]});
		const addressebuwWXo = accounts[1]
		const uintJeUm3Yt = BigInt("286")
		const addressLOGVWKW = accounts[0]
		const 
kFUtuuN = await DmmControllerV2rCtkdV.transferOwnershipToNewController.call(addressebuwWXo, {from: accounts[2]});
		await DmmControllerV2rCtkdV.renounceOwnership.call({from: accounts[2]});
		const uintDEK297N = await DmmControllerV2rCtkdV.disableMarket.call(uintJeUm3Yt, {from: accounts[3]});
		await DmmControllerV2rCtkdV.renounceOwnership.call({from: accounts[2]});
		const addressWedpEE = await DmmControllerV2rCtkdV.setOffChainAssetValuator.call(addressLOGVWKW, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addressrIItHNM = accounts[4]
		const addressREsOEVP = accounts[0]
		const addressnoSXUP3 = accounts[0]
		const addressQI2R1gh = accounts[5]
		const addressJFIfgzF = accounts[1]
		const addressgY6eHpV = accounts[1]
		const addressrXcIb5n = accounts[0]
		const addressWwhunj0 = accounts[4]
		const addressBfIPLHg = accounts[2]
		const uintJ2XP5ct = BigInt("1870")
		const uintGBMRW05 = BigInt("141")
		const addressyejdAc = accounts[4]
		const DmmControllerV2Q3MBvxt = await DmmControllerV2.new(addressrIItHNM, addressREsOEVP, addressnoSXUP3, addressQI2R1gh, addressJFIfgzF, addressgY6eHpV, addressrXcIb5n, addressWwhunj0, addressBfIPLHg, uintJ2XP5ct, uintGBMRW05, addressyejdAc, {from: accounts[1]});
		const addressLr0Y5ds = accounts[5]
		const uintaOTiiiK = BigInt("188")
		const addressCJR5ieH = accounts[3]
		const addresscxfk04p = accounts[3]
		const uintYSMZ9xT = await DmmControllerV2Q3MBvxt.getExchangeRateByUnderlying.call(addressLr0Y5ds, {from: accounts[4]});
		const boollXYilyR = await DmmControllerV2Q3MBvxt.isMarketEnabledByDmmTokenId.call(uintaOTiiiK, {from: accounts[3]});
		await DmmControllerV2Q3MBvxt.pause.call({from: accounts[2]});
		const 
rnhTEdn = await DmmControllerV2Q3MBvxt.addMarketFromExistingDmmToken.call(addresscxfk04p, addressCJR5ieH, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressukiWt6l = accounts[4]
		const addressvcd6iRN = accounts[0]
		const addressr1fiaHc = accounts[0]
		const addressi0kBKCU = accounts[5]
		const addressMZ4QTzT = accounts[1]
		const addressd9VRDus = accounts[1]
		const addressgqzNlG2 = accounts[0]
		const addressEl5mfil = accounts[4]
		const addressJxU4Ag5 = accounts[2]
		const uintaM6SC4c = BigInt("1870")
		const uintMiJHr0A = BigInt("141")
		const addresseYD7nS = accounts[4]
		const DmmControllerV2Q3MBvxt = await DmmControllerV2.new(addressukiWt6l, addressvcd6iRN, addressr1fiaHc, addressi0kBKCU, addressMZ4QTzT, addressd9VRDus, addressgqzNlG2, addressEl5mfil, addressJxU4Ag5, uintaM6SC4c, uintMiJHr0A, addresseYD7nS, {from: accounts[1]});
		const addressHNYKrlA = accounts[5]
		const uintMBqkWp = BigInt("188")
		const addresszyr2Gh0 = accounts[2]
		const addresstAivPz = accounts[3]
		const addressY37WFe9 = accounts[1]
		await DmmControllerV2Q3MBvxt.unpause.call({from: "0x0000000000000000000000000000000000000001"});
		const uintYSMZ9xT = await DmmControllerV2Q3MBvxt.getExchangeRateByUnderlying.call(addressHNYKrlA, {from: accounts[4]});
		const boollXYilyR = await DmmControllerV2Q3MBvxt.isMarketEnabledByDmmTokenId.call(uintMBqkWp, {from: accounts[3]});
		const addressB5iRXWT = await DmmControllerV2Q3MBvxt.transferOwnership.call(addresszyr2Gh0, {from: accounts[4]});
		await DmmControllerV2Q3MBvxt.initializer.call({from: accounts[4]});
		await DmmControllerV2Q3MBvxt.pause.call({from: accounts[2]});
		const 
rnhTEdn = await DmmControllerV2Q3MBvxt.addMarketFromExistingDmmToken.call(addressY37WFe9, addresstAivPz, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressyDCHg5W = accounts[4]
		const addressWjr5RU7 = "0x0000000000000000000000000000000000000001"
		const addressWM52bNp = accounts[4]
		const addressXoMwveT = accounts[1]
		const address2Drt2p = accounts[5]
		const addressb5IvMrK = accounts[3]
		const addressFirEtS = accounts[2]
		const addressnCg08KX = accounts[4]
		const addressL1pX2mV = accounts[4]
		const uintkLhgEo = BigInt("1911")
		const uintJFHmQ2H = BigInt("703")
		const addressp1TYR2y = accounts[2]
		const DmmControllerV2FsZTaZs = await DmmControllerV2.new(addressyDCHg5W, addressWjr5RU7, addressWM52bNp, addressXoMwveT, address2Drt2p, addressb5IvMrK, addressFirEtS, addressnCg08KX, addressL1pX2mV, uintkLhgEo, uintJFHmQ2H, addressp1TYR2y, {from: "0x0000000000000000000000000000000000000001"});
		const addressWhlw77z = accounts[5]
		const addressSFtgzWh = accounts[5]
		const addressDVwm1Ep = accounts[1]
		const addressE4Y82pD = accounts[1]
		const addressvQlbyDE = await DmmControllerV2FsZTaZs.setDmmTokenFactory.call(addressWhlw77z, {from: accounts[4]});
		const boolIiczLI4 = await DmmControllerV2FsZTaZs.isBlacklisted.call(addressSFtgzWh, {from: accounts[4]});
		const addressZZ5kf9S = await DmmControllerV2FsZTaZs.owner.call({from: accounts[5]});
		const addresswFSdGVL = await DmmControllerV2FsZTaZs.getDmmTokenForUnderlying.call(addressDVwm1Ep, {from: accounts[1]});
		const 
y6JZ36t = await DmmControllerV2FsZTaZs.setGuardian.call(addressE4Y82pD, {from: accounts[4]});
	});

	it('test for DmmControllerV2', async () => {
		const addressSAxXqiR = accounts[4]
		const addresshWOGw6k = accounts[0]
		const addressvglyJp1 = accounts[0]
		const addressO3382O2 = accounts[5]
		const addressdu7hMfp = accounts[1]
		const addressSD0XzCT = accounts[1]
		const addressW2a7ymC = accounts[0]
		const addressQxxYiUL = accounts[4]
		const addressnhqULCZ = accounts[2]
		const uintWntZxw = BigInt("1870")
		const uintquX1aQZ = BigInt("141")
		const addresssHs5Dyo = accounts[4]
		const DmmControllerV2Q3MBvxt = await DmmControllerV2.new(addressSAxXqiR, addresshWOGw6k, addressvglyJp1, addressO3382O2, addressdu7hMfp, addressSD0XzCT, addressW2a7ymC, addressQxxYiUL, addressnhqULCZ, uintWntZxw, uintquX1aQZ, addresssHs5Dyo, {from: accounts[1]});
		const addressu1QmncE = accounts[2]
		const addressKrLlhyS = accounts[5]
		const uintryZ2fbH = BigInt("188")
		const addresstBIRZXl = accounts[3]
		const addressdRJkvJM = accounts[3]
		const addressfhxjhWb = await DmmControllerV2Q3MBvxt.setDmmTokenFactory.call(addressu1QmncE, {from: accounts[5]});
		const uintYSMZ9xT = await DmmControllerV2Q3MBvxt.getExchangeRateByUnderlying.call(addressKrLlhyS, {from: accounts[4]});
		await DmmControllerV2Q3MBvxt.onlyOwnerOrGuardian.call({from: accounts[3]});
		const boollXYilyR = await DmmControllerV2Q3MBvxt.isMarketEnabledByDmmTokenId.call(uintryZ2fbH, {from: accounts[3]});
		await DmmControllerV2Q3MBvxt.pause.call({from: accounts[2]});
		const 
rnhTEdn = await DmmControllerV2Q3MBvxt.addMarketFromExistingDmmToken.call(addressdRJkvJM, addresstBIRZXl, {from: accounts[1]});
	});

	it('test for DmmControllerV2', async () => {
		const addressvgEj9rS = "0x0000000000000000000000000000000000000001"
		const addressyVX9wNB = accounts[3]
		const addressj6YOAUt = accounts[4]
		const addressfhDKeyW = accounts[3]
		const addressiUjTnwu = accounts[2]
		const addressGkUzSZd = accounts[1]
		const addressZxIli12 = accounts[1]
		const addressiA1I2H = accounts[2]
		const addresstPkqWT9 = accounts[0]
		const uintMnA9sDs = BigInt("727")
		const uintTOa43D4 = BigInt("43")
		const addresshIwbl0F = accounts[4]
		const DmmControllerV2UdCZT4K = await DmmControllerV2.new(addressvgEj9rS, addressyVX9wNB, addressj6YOAUt, addressfhDKeyW, addressiUjTnwu, addressGkUzSZd, addressZxIli12, addressiA1I2H, addresstPkqWT9, uintMnA9sDs, uintTOa43D4, addresshIwbl0F, {from: accounts[2]});
		const addressK0zGHc = accounts[4]
		const addressx8RjMV3 = accounts[1]
		await DmmControllerV2UdCZT4K.renouncePauser.call({from: accounts[1]});
		const 
GFt7LO = await DmmControllerV2UdCZT4K.initialize.call(addressx8RjMV3, addressK0zGHc, {from: accounts[5]});
	});
})