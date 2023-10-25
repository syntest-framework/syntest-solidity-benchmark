const DmmControllerV2 = artifacts.require("DmmControllerV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DmmControllerV2', (accounts) => {
	it('test for DmmControllerV2', async () => {
		const addressjV3JEnO = accounts[3]
		const addressRn68e5b = accounts[3]
		const addressnlRGalG = accounts[2]
		const addressZkaLPR = accounts[1]
		const addressvLMDZXC = accounts[4]
		const addressQ945SbZ = accounts[3]
		const addressddL3U2C = accounts[5]
		const addressgal1gh5 = accounts[0]
		const addressh9bqHy = accounts[4]
		const uintle6fftU = BigInt("1680")
		const uintwvDlvIr = BigInt("45")
		const addressW5lATOl = accounts[0]
		const DmmControllerV2GxhxJmo = await DmmControllerV2.new(addressjV3JEnO, addressRn68e5b, addressnlRGalG, addressZkaLPR, addressvLMDZXC, addressQ945SbZ, addressddL3U2C, addressgal1gh5, addressh9bqHy, uintle6fftU, uintwvDlvIr, addressW5lATOl, {from: accounts[3]});
		const addressE1dqANI = accounts[3]
		const uintwlGkqca = BigInt("2002")
		const uint5YbYCj = BigInt("686")
		const address52wxNM = accounts[2]
		const addressy7peM92 = accounts[0]
		const addressEaVr60b = await DmmControllerV2GxhxJmo.setDmmTokenFactory.call(addressE1dqANI, {from: accounts[1]});
		const uintotJktjE = await DmmControllerV2GxhxJmo.requireIsNftOwner.call(uintwlGkqca, {from: accounts[4]});
		const boolDaujgAv = await DmmControllerV2GxhxJmo.isMarketEnabledByDmmTokenId.call(uint5YbYCj, {from: accounts[0]});
		const booljtequu6 = await DmmControllerV2GxhxJmo.isBlacklisted.call(address52wxNM, {from: accounts[2]});
		const addressB9BCZWV = await DmmControllerV2GxhxJmo.notBlacklisted.call(addressy7peM92, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const DmmControllerV2atr36KM = await DmmControllerV2.new({from: accounts[4]});
		const addressXVxzHx4 = accounts[3]
		const uinthFJfBtP = BigInt("1020")
		const uintjy6Xp7i = BigInt("388")
		const addressDbRModc = accounts[1]
		const addressjWhcfte = await DmmControllerV2atr36KM.setUnderlyingTokenValuator.call(addressXVxzHx4, {from: accounts[0]});
		const 
LEaskLn = await DmmControllerV2atr36KM.adminDepositFunds.call(uintjy6Xp7i, uinthFJfBtP, {from: accounts[1]});
		const booljgEmnqm = await DmmControllerV2atr36KM.isBlacklisted.call(addressDbRModc, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressNa8pmXV = "0x0000000000000000000000000000000000000001"
		const addressV6Nos8g = accounts[1]
		const addressFzlxn8 = accounts[3]
		const addressUHGvg46 = accounts[1]
		const addresskB1MYyh = accounts[4]
		const addressBOR1r1q = accounts[4]
		const addressDJrcgc = "0x0000000000000000000000000000000000000001"
		const addressNjHBjHi = accounts[4]
		const addressAbooUy = accounts[3]
		const uintlHDYLjP = BigInt("25")
		const uintCeKc7zB = BigInt("1652")
		const addresslwCUy4W = accounts[1]
		const DmmControllerV2pnNVu0 = await DmmControllerV2.new(addressNa8pmXV, addressV6Nos8g, addressFzlxn8, addressUHGvg46, addresskB1MYyh, addressBOR1r1q, addressDJrcgc, addressNjHBjHi, addressAbooUy, uintlHDYLjP, uintCeKc7zB, addresslwCUy4W, {from: accounts[2]});
		const addressd8Ma4a3 = "0x0000000000000000000000000000000000000001"
		const uinte4OG9fN = BigInt("1146")
		const uintclg7ree = BigInt("1581")
		const uintZWGG0J4 = BigInt("319")
		const boolJaFV8VD = await DmmControllerV2pnNVu0.isBlacklisted.call(addressd8Ma4a3, {from: accounts[1]});
		await DmmControllerV2pnNVu0.nonReentrant.call({from: accounts[0]});
		const 
ft1kFxO = await DmmControllerV2pnNVu0.adminWithdrawFunds.call(uintclg7ree, uinte4OG9fN, {from: accounts[0]});
		const boolsegy1ZD = await DmmControllerV2pnNVu0.isMarketEnabledByDmmTokenId.call(uintZWGG0J4, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressunA6Bl = accounts[2]
		const addresss0O2C9D = "0x0000000000000000000000000000000000000001"
		const addressOsyLRKg = accounts[4]
		const addresszHUjFS6 = accounts[3]
		const addresst23hw9b = accounts[0]
		const addressIPakMSK = accounts[2]
		const addresssSxF1cy = accounts[3]
		const addressY5RmrAj = accounts[3]
		const addressgz3TWCy = accounts[4]
		const uintW1GoRSo = BigInt("887")
		const uintAyHkVxU = BigInt("37")
		const addressA403JW3 = "0x0000000000000000000000000000000000000001"
		const DmmControllerV2O54SLRE = await DmmControllerV2.new(addressunA6Bl, addresss0O2C9D, addressOsyLRKg, addresszHUjFS6, addresst23hw9b, addressIPakMSK, addresssSxF1cy, addressY5RmrAj, addressgz3TWCy, uintW1GoRSo, uintAyHkVxU, addressA403JW3, {from: "0x0000000000000000000000000000000000000001"});
		const addressAyYEq9A = accounts[4]
		const addressMEycTUC = accounts[1]
		const addressKhfnsKE = accounts[3]
		const uintZMWUZDS = BigInt("750")
		const 
bYxsLps = await DmmControllerV2O54SLRE.addMarketFromExistingDmmToken.call(addressMEycTUC, addressAyYEq9A, {from: accounts[3]});
		const addressjLw1Lnj = await DmmControllerV2O54SLRE.addPauser.call(addressKhfnsKE, {from: accounts[3]});
		const uintxvBkKq = await DmmControllerV2O54SLRE.requireIsValidNft.call(uintZMWUZDS, {from: "0x0000000000000000000000000000000000000001"});
		const uintcNz0UZF = await DmmControllerV2O54SLRE.getActiveCollateralization.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DmmControllerV2', async () => {
		const addresswy84QN8 = accounts[0]
		const addresse3LgwK2 = accounts[1]
		const addressAAv04Cz = accounts[1]
		const addressNFhYhFT = accounts[1]
		const addressAzrtr2 = accounts[4]
		const addresswWb3x3B = accounts[3]
		const addresstzEjr4c = accounts[5]
		const addressFHzQgo = accounts[3]
		const addressXJtxFtT = accounts[3]
		const uintfUkINJn = BigInt("695")
		const uintD4H3Beb = BigInt("1933")
		const addresskgvT6fj = accounts[0]
		const DmmControllerV2L5bYnNo = await DmmControllerV2.new(addresswy84QN8, addresse3LgwK2, addressAAv04Cz, addressNFhYhFT, addressAzrtr2, addresswWb3x3B, addresstzEjr4c, addressFHzQgo, addressXJtxFtT, uintfUkINJn, uintD4H3Beb, addresskgvT6fj, {from: accounts[1]});
		const addressWZhTDrj = accounts[0]
		const addressJYBUoEI = accounts[5]
		const uintcHTlgYQ = BigInt("1967")
		const addressafsyVHZ = accounts[4]
		const booldVQpuvq = await DmmControllerV2L5bYnNo.paused.call({from: accounts[2]});
		const addresslqRlzr = await DmmControllerV2L5bYnNo.transferOwnership.call(addressWZhTDrj, {from: accounts[1]});
		const addressXrOtq1V = await DmmControllerV2L5bYnNo.unBlacklist.call(addressJYBUoEI, {from: accounts[3]});
		await DmmControllerV2L5bYnNo.whenPaused.call({from: accounts[3]});
		const boolw1BByC2 = await DmmControllerV2L5bYnNo.isMarketEnabledByDmmTokenId.call(uintcHTlgYQ, {from: accounts[2]});
		const addressufw7lx = await DmmControllerV2L5bYnNo.transferOwnership.call(addressafsyVHZ, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addresss0tghpz = accounts[3]
		const addressZjqmc7J = accounts[3]
		const addressRbv4LNl = accounts[2]
		const addresslGppES5 = accounts[1]
		const addressXfkdpb3 = accounts[4]
		const addresse4GWTAI = accounts[3]
		const addressWWL4HY1 = accounts[5]
		const addressbic2AHv = accounts[0]
		const addressgKsm7By = accounts[4]
		const uintxpsrVh = BigInt("1680")
		const uintEhZsXxp = BigInt("45")
		const addressshngVfB = accounts[0]
		const DmmControllerV2GxhxJmo = await DmmControllerV2.new(addresss0tghpz, addressZjqmc7J, addressRbv4LNl, addresslGppES5, addressXfkdpb3, addresse4GWTAI, addressWWL4HY1, addressbic2AHv, addressgKsm7By, uintxpsrVh, uintEhZsXxp, addressshngVfB, {from: accounts[3]});
		const addressK4i8XQa = accounts[4]
		const addressMFKAeLe = accounts[3]
		const uintBxwfixR = BigInt("2002")
		const uintREPXSOp = BigInt("686")
		const addressNPyNjQZ = accounts[2]
		const addressIYLdJni = accounts[0]
		const uinto8EWXEk = await DmmControllerV2GxhxJmo.getTokenIdFromDmmTokenAddress.call(addressK4i8XQa, {from: accounts[5]});
		const addressEaVr60b = await DmmControllerV2GxhxJmo.setDmmTokenFactory.call(addressMFKAeLe, {from: accounts[1]});
		const uintotJktjE = await DmmControllerV2GxhxJmo.requireIsNftOwner.call(uintBxwfixR, {from: accounts[4]});
		const boolDaujgAv = await DmmControllerV2GxhxJmo.isMarketEnabledByDmmTokenId.call(uintREPXSOp, {from: accounts[0]});
		const booljtequu6 = await DmmControllerV2GxhxJmo.isBlacklisted.call(addressNPyNjQZ, {from: accounts[2]});
		const addressB9BCZWV = await DmmControllerV2GxhxJmo.notBlacklisted.call(addressIYLdJni, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressqodYQfv = "0x0000000000000000000000000000000000000001"
		const addressvxGBFpC = accounts[1]
		const addressX89cerQ = accounts[3]
		const addressOHO2EoE = accounts[1]
		const addressV7WCyiW = accounts[4]
		const addressXMFHQd = accounts[4]
		const addresssjpvfcm = "0x0000000000000000000000000000000000000001"
		const addressDsCasJM = accounts[4]
		const addresspf4vNAZ = accounts[3]
		const uintkVtwmG = BigInt("25")
		const uinto6ykZFj = BigInt("1652")
		const addressQnkzUr6 = accounts[1]
		const DmmControllerV2pnNVu0 = await DmmControllerV2.new(addressqodYQfv, addressvxGBFpC, addressX89cerQ, addressOHO2EoE, addressV7WCyiW, addressXMFHQd, addresssjpvfcm, addressDsCasJM, addresspf4vNAZ, uintkVtwmG, uinto6ykZFj, addressQnkzUr6, {from: accounts[2]});
		const addressRNVXsYJ = accounts[3]
		const addressls1UlGY = accounts[3]
		const uintKoLkeZl = BigInt("1146")
		const uintVnzmtgb = BigInt("1581")
		const uintzbdXfRP = BigInt("319")
		const boolWDFeSvD = await DmmControllerV2pnNVu0.isMarketEnabledByDmmTokenAddress.call(addressRNVXsYJ, {from: "0x0000000000000000000000000000000000000001"});
		const addressYT8K34P = await DmmControllerV2pnNVu0.setOffChainAssetValuator.call(addressls1UlGY, {from: accounts[1]});
		const 
ft1kFxO = await DmmControllerV2pnNVu0.adminWithdrawFunds.call(uintVnzmtgb, uintKoLkeZl, {from: accounts[0]});
		const boolsegy1ZD = await DmmControllerV2pnNVu0.isMarketEnabledByDmmTokenId.call(uintzbdXfRP, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressccenEyf = "0x0000000000000000000000000000000000000001"
		const addressHZkfKxJ = accounts[1]
		const addressRtvI1wC = accounts[3]
		const addressYPM9vn = accounts[1]
		const addressFWaEotF = accounts[4]
		const addresswMSCjTV = accounts[4]
		const addresstGhwZWy = "0x0000000000000000000000000000000000000001"
		const addressYMS4cer = accounts[4]
		const addresstXr5dq2 = accounts[3]
		const uintlBbxoUm = BigInt("25")
		const uintgaMdCTd = BigInt("1652")
		const addressFMZpUHH = accounts[1]
		const DmmControllerV2pnNVu0 = await DmmControllerV2.new(addressccenEyf, addressHZkfKxJ, addressRtvI1wC, addressYPM9vn, addressFWaEotF, addresswMSCjTV, addresstGhwZWy, addressYMS4cer, addresstXr5dq2, uintlBbxoUm, uintgaMdCTd, addressFMZpUHH, {from: accounts[2]});
		const addressA7ck43r = "0x0000000000000000000000000000000000000001"
		const uintbXPP46G = BigInt("441")
		const addressqYLuPR = accounts[3]
		const addressreAqc26 = accounts[3]
		const uintbnd9Uf = BigInt("1146")
		const uintu6z8Xlb = BigInt("1599")
		const uintHYtKY8 = BigInt("319")
		const boolO7wdBfS = await DmmControllerV2pnNVu0.isPauser.call(addressA7ck43r, {from: accounts[1]});
		const boolBFqCKE6 = await DmmControllerV2pnNVu0.isMarketEnabledByDmmTokenId.call(uintbXPP46G, {from: accounts[4]});
		const boolWDFeSvD = await DmmControllerV2pnNVu0.isMarketEnabledByDmmTokenAddress.call(addressqYLuPR, {from: "0x0000000000000000000000000000000000000001"});
		const addressYT8K34P = await DmmControllerV2pnNVu0.setOffChainAssetValuator.call(addressreAqc26, {from: accounts[1]});
		const 
ft1kFxO = await DmmControllerV2pnNVu0.adminWithdrawFunds.call(uintu6z8Xlb, uintbnd9Uf, {from: accounts[0]});
		const boolsegy1ZD = await DmmControllerV2pnNVu0.isMarketEnabledByDmmTokenId.call(uintHYtKY8, {from: accounts[2]});
	});

	it('test for DmmControllerV2', async () => {
		const addressIQG3Ble = accounts[3]
		const addresscRVKvn0 = accounts[3]
		const addressTmmLsRs = accounts[2]
		const addressCJHISzW = accounts[1]
		const addressn8skC7V = accounts[4]
		const addressO6PV3J2 = accounts[3]
		const address3Gkqpi = accounts[5]
		const addressW62i2DW = accounts[0]
		const addressUAyyXhe = accounts[4]
		const uintO1AmOb4 = BigInt("1680")
		const uintvc9Zk08 = BigInt("45")
		const addressnOWwfaM = accounts[0]
		const DmmControllerV2GxhxJmo = await DmmControllerV2.new(addressIQG3Ble, addresscRVKvn0, addressTmmLsRs, addressCJHISzW, addressn8skC7V, addressO6PV3J2, address3Gkqpi, addressW62i2DW, addressUAyyXhe, uintO1AmOb4, uintvc9Zk08, addressnOWwfaM, {from: accounts[3]});
		const uintUmuN0tO = BigInt("726")
		const addressSYVqdbs = accounts[5]
		const addressS1orKv4 = accounts[2]
		const addressGZKv52v = accounts[3]
		const uintSywdEv8 = BigInt("2002")
		const uintfSxm7aT = BigInt("462")
		const uintTYuvpx = BigInt("686")
		const addresstxws6E3 = accounts[3]
		const addressE5RdFm = accounts[0]
		await DmmControllerV2GxhxJmo.pause.call({from: accounts[5]});
		const uintmndMc90 = await DmmControllerV2GxhxJmo.getInterestRateByDmmTokenId.call(uintUmuN0tO, {from: accounts[4]});
		const uinto8EWXEk = await DmmControllerV2GxhxJmo.getTokenIdFromDmmTokenAddress.call(addressSYVqdbs, {from: accounts[5]});
		const addressz1nq1IO = await DmmControllerV2GxhxJmo.setDmmEtherFactory.call(addressS1orKv4, {from: accounts[4]});
		const addressEaVr60b = await DmmControllerV2GxhxJmo.setDmmTokenFactory.call(addressGZKv52v, {from: accounts[1]});
		const uintotJktjE = await DmmControllerV2GxhxJmo.requireIsNftOwner.call(uintSywdEv8, {from: accounts[4]});
		const uintfFfcul3 = await DmmControllerV2GxhxJmo.requireCanWithdrawFunds.call(uintfSxm7aT, {from: accounts[1]});
		const boolDaujgAv = await DmmControllerV2GxhxJmo.isMarketEnabledByDmmTokenId.call(uintTYuvpx, {from: accounts[0]});
		const booljtequu6 = await DmmControllerV2GxhxJmo.isBlacklisted.call(addresstxws6E3, {from: accounts[2]});
		const addressB9BCZWV = await DmmControllerV2GxhxJmo.notBlacklisted.call(addressE5RdFm, {from: accounts[3]});
	});

	it('test for DmmControllerV2', async () => {
		const addressGXYHio = "0x0000000000000000000000000000000000000001"
		const addressn45IM4H = accounts[2]
		const addressyNWcFQ = accounts[2]
		const addressuBVzzIF = accounts[2]
		const addressezPI2BV = accounts[2]
		const addressFgMrxxm = accounts[3]
		const addressnIpAjKG = "0x0000000000000000000000000000000000000001"
		const addressXkF6x8 = accounts[4]
		const addressmpMB9n = accounts[2]
		const uintMOkb8M = BigInt("980")
		const uintCOonBKl = BigInt("1662")
		const addressFKToU0 = accounts[4]
		const DmmControllerV2Ju3zY9B = await DmmControllerV2.new(addressGXYHio, addressn45IM4H, addressyNWcFQ, addressuBVzzIF, addressezPI2BV, addressFgMrxxm, addressnIpAjKG, addressXkF6x8, addressmpMB9n, uintMOkb8M, uintCOonBKl, addressFKToU0, {from: accounts[2]});
		const addressiGM1zi = accounts[2]
		const addressVcJSuyE = accounts[0]
		const uintAMEQ0uD = await DmmControllerV2Ju3zY9B.getInterestRateByUnderlyingTokenAddress.call(addressiGM1zi, {from: accounts[2]});
		const 
DHZcLtk = await DmmControllerV2Ju3zY9B.transferOwnershipToNewController.call(addressVcJSuyE, {from: accounts[4]});
	});
})