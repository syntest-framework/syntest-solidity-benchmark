const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressJrxNHMK = accounts[5]
		const addressp9fk03T = accounts[1]
		const SpiritCoinfRYfCvD = await SpiritCoin.new(addressJrxNHMK, addressp9fk03T, {from: accounts[2]});
		const addresshjUUVm5 = accounts[4]
		const uinthhxrosT = BigInt("1084")
		const addressCoFQAOY = accounts[3]
		const addressUpb0e7a = accounts[0]
		const uintiMOnlx8 = BigInt("582")
		const addressthHPa57 = accounts[5]
		const addressBsvdY3q = accounts[2]
		const uintgzAfnP = await SpiritCoinfRYfCvD.balanceOf.call(addresshjUUVm5, {from: accounts[1]});
		const boolQZfhtL = await SpiritCoinfRYfCvD.transfer.call(addressCoFQAOY, uinthhxrosT, {from: accounts[4]});
		const uintZFk3g9K = await SpiritCoinfRYfCvD.balanceOf.call(addressUpb0e7a, {from: accounts[4]});
		const boolGAE5ZI = await SpiritCoinfRYfCvD.transfer.call(addressthHPa57, uintiMOnlx8, {from: accounts[1]});
		const uinttPzOOuF = await SpiritCoinfRYfCvD.balanceOf.call(addressBsvdY3q, {from: accounts[0]});

		assert.equal(uintgzAfnP, BigInt("0"))
		await expect(SpiritCoinfRYfCvD.transfer.call(addressCoFQAOY, uinthhxrosT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressfJ5J0h = accounts[2]
		const addressg1a5s9e = accounts[0]
		const SpiritCoinYM6u7Xb = await SpiritCoin.new(addressfJ5J0h, addressg1a5s9e, {from: accounts[2]});
		const uintzWHuD2 = BigInt("1986")
		const addressZvTr1Aq = accounts[5]
		const addresshs2h6a8 = accounts[3]
		const addresscH8G5vY = accounts[1]
		const addressTT3uQh7 = accounts[1]
		const addressEsoaBZy = accounts[2]
		const addressMuajWft = accounts[3]
		const addressVsTzn8F = await SpiritCoinYM6u7Xb.mint.call(addressZvTr1Aq, uintzWHuD2, {from: accounts[5]});
		const uintEMevsc4 = await SpiritCoinYM6u7Xb.allowance.call(addresscH8G5vY, addresshs2h6a8, {from: accounts[2]});
		const addressnxvtKeC = await SpiritCoinYM6u7Xb.setMinter.call(addressTT3uQh7, {from: accounts[0]});
		const uintMu1jM0l = await SpiritCoinYM6u7Xb.balanceOf.call(addressEsoaBZy, {from: accounts[4]});
		const addresskcGK72y = await SpiritCoinYM6u7Xb.setMinter.call(addressMuajWft, {from: accounts[1]});

		await expect(SpiritCoinYM6u7Xb.mint.call(addressZvTr1Aq, uintzWHuD2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresstKliZCB = accounts[2]
		const addressSo0YNs = accounts[5]
		const SpiritCoinsTfhOCa = await SpiritCoin.new(addresstKliZCB, addressSo0YNs, {from: accounts[0]});
		const uintJjKqcZb = BigInt("1479")
		const addressWYsa71e = accounts[5]
		const uintn9yCNdN = BigInt("1636")
		const addressvmLdWl = accounts[3]
		const uintbOXQKYc = BigInt("1851")
		const addressuDl6c7X = "0x0000000000000000000000000000000000000001"
		const uintMALSoOF = BigInt("240")
		const addresswfZw8e = accounts[2]
		const addressxeAvFg9 = accounts[2]
		const addressDRZBuaU = accounts[2]
		const bool9jDrKx = await SpiritCoinsTfhOCa.transfer.call(addressWYsa71e, uintJjKqcZb, {from: accounts[2]});
		const boolFYn9T5 = await SpiritCoinsTfhOCa.transfer.call(addressvmLdWl, uintn9yCNdN, {from: "0x0000000000000000000000000000000000000001"});
		const addressXH9JsAq = await SpiritCoinsTfhOCa.mint.call(addressuDl6c7X, uintbOXQKYc, {from: accounts[4]});
		const addressBTrjzXy = await SpiritCoinsTfhOCa.mint.call(addresswfZw8e, uintMALSoOF, {from: accounts[0]});
		const uintjLQAq9L = await SpiritCoinsTfhOCa.allowance.call(addressDRZBuaU, addressxeAvFg9, {from: accounts[3]});

		assert.equal(bool9jDrKx, true)
		await expect(SpiritCoinsTfhOCa.transfer.call(addressvmLdWl, uintn9yCNdN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresssEvusv = accounts[0]
		const addressDGee0nu = accounts[5]
		const SpiritCoinF8RPg9I = await SpiritCoin.new(addresssEvusv, addressDGee0nu, {from: "0x0000000000000000000000000000000000000001"});
		const uintXZeEmj = BigInt("815")
		const addresss83vhnl = accounts[2]
		const addressTjdR4G = accounts[3]
		const uintmZ9Kb2S = BigInt("167")
		const address0BCwaA = accounts[2]
		const uintyxQTRec = BigInt("928")
		const addressh1QLN5B = accounts[0]
		const addressbBdfQ4H = await SpiritCoinF8RPg9I.mint.call(addresss83vhnl, uintXZeEmj, {from: accounts[4]});
		const addressulwDTKo = await SpiritCoinF8RPg9I.setMinter.call(addressTjdR4G, {from: accounts[3]});
		const addressZeDq26n = await SpiritCoinF8RPg9I.mint.call(address0BCwaA, uintmZ9Kb2S, {from: accounts[4]});
		const boolmL9qONb = await SpiritCoinF8RPg9I.approve.call(addressh1QLN5B, uintyxQTRec, {from: accounts[0]});
	});

	it('test for SpiritCoin', async () => {
		const addressH9XCLo = accounts[1]
		const addressrwZPcMx = "0x0000000000000000000000000000000000000001"
		const SpiritCoinnqIVgMW = await SpiritCoin.new(addressH9XCLo, addressrwZPcMx, {from: accounts[4]});
		const uintcr69zVZ = BigInt("1165")
		const addressm5cM7nP = accounts[0]
		const uintPL5dftz = BigInt("662")
		const addressKd36Pj8 = "0x0000000000000000000000000000000000000001"
		const uintdif1mch = BigInt("1485")
		const addressazkLNdN = accounts[3]
		const addressiy0nnnl = accounts[2]
		const addressvXlpAE = accounts[5]
		const boolfD0UPj7 = await SpiritCoinnqIVgMW.approve.call(addressm5cM7nP, uintcr69zVZ, {from: accounts[2]});
		const boolcmPVqDa = await SpiritCoinnqIVgMW.approve.call(addressKd36Pj8, uintPL5dftz, {from: accounts[4]});
		const addressRcFqVVc = await SpiritCoinnqIVgMW.mint.call(addressazkLNdN, uintdif1mch, {from: accounts[1]});
		const uintdRVueuO = await SpiritCoinnqIVgMW.allowance.call(addressvXlpAE, addressiy0nnnl, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolcmPVqDa, true)
		assert.equal(boolfD0UPj7, true)
		await expect(SpiritCoinnqIVgMW.mint.call(addressazkLNdN, uintdif1mch, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresseXNdage = accounts[1]
		const addressTvT5RUi = accounts[0]
		const SpiritCointdplIVL = await SpiritCoin.new(addresseXNdage, addressTvT5RUi, {from: accounts[3]});
		const addressiR5M3SO = accounts[0]
		const addressxxLRQ9I = accounts[2]
		const addressJyAE07 = accounts[3]
		const addressElkowyy = accounts[3]
		const addressaQ9WZRf = accounts[1]
		const addressdolN74C = "0x0000000000000000000000000000000000000001"
		const addressZWsHpgk = accounts[4]
		const uintoiuITsF = BigInt("377")
		const addresstzuGQdq = accounts[1]
		const addressVZ9oJ4y = await SpiritCointdplIVL.setMinter.call(addressiR5M3SO, {from: accounts[0]});
		const uintAjQGdkp = await SpiritCointdplIVL.balanceOf.call(addressxxLRQ9I, {from: accounts[3]});
		const uintrnLAZFx = await SpiritCointdplIVL.allowance.call(addressElkowyy, addressJyAE07, {from: accounts[2]});
		const uintx7I1u8O = await SpiritCointdplIVL.balanceOf.call(addressaQ9WZRf, {from: accounts[5]});
		const uintWfeWaON = await SpiritCointdplIVL.allowance.call(addressZWsHpgk, addressdolN74C, {from: accounts[2]});
		const boolSV9pD96 = await SpiritCointdplIVL.transfer.call(addresstzuGQdq, uintoiuITsF, {from: accounts[2]});

		assert.equal(uintAjQGdkp, BigInt("0"))
		assert.equal(uintWfeWaON, BigInt("0"))
		assert.equal(uintrnLAZFx, BigInt("0"))
		assert.equal(uintx7I1u8O, BigInt("10000000000000000000000000"))
		await expect(SpiritCointdplIVL.transfer.call(addresstzuGQdq, uintoiuITsF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressHNFov5e = accounts[1]
		const addressu3kZJpH = "0x0000000000000000000000000000000000000001"
		const SpiritCoinnqIVgMW = await SpiritCoin.new(addressHNFov5e, addressu3kZJpH, {from: accounts[4]});
		const uintlCgrVYN = BigInt("1165")
		const addressoz53lh0 = accounts[0]
		const uintAegMcSM = BigInt("662")
		const addresswQrdh3R = "0x0000000000000000000000000000000000000001"
		const uintVjBF4J7 = BigInt("607")
		const addressIP7qjj = accounts[2]
		const addressKlPCH8i = accounts[3]
		const uintWt9Wtp5 = BigInt("471")
		const addressvoTKZcd = accounts[3]
		const address4kcvHs = accounts[2]
		const addressrItyR7s = accounts[5]
		const boolfD0UPj7 = await SpiritCoinnqIVgMW.approve.call(addressoz53lh0, uintlCgrVYN, {from: accounts[2]});
		const boolcmPVqDa = await SpiritCoinnqIVgMW.approve.call(addresswQrdh3R, uintAegMcSM, {from: accounts[4]});
		const boolMcl3XX = await SpiritCoinnqIVgMW.transferFrom.call(addressKlPCH8i, addressIP7qjj, uintVjBF4J7, {from: accounts[1]});
		const addressRcFqVVc = await SpiritCoinnqIVgMW.mint.call(addressvoTKZcd, uintWt9Wtp5, {from: accounts[1]});
		const uintdRVueuO = await SpiritCoinnqIVgMW.allowance.call(addressrItyR7s, address4kcvHs, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolcmPVqDa, true)
		assert.equal(boolfD0UPj7, true)
		await expect(SpiritCoinnqIVgMW.transferFrom.call(addressKlPCH8i, addressIP7qjj, uintVjBF4J7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressCJ5cn7G = accounts[5]
		const addressutP3Ey = accounts[2]
		const SpiritCointt4pwjU = await SpiritCoin.new(addressCJ5cn7G, addressutP3Ey, {from: accounts[5]});
		const addressewJJq4A = accounts[2]
		const addresskL44J89 = accounts[4]
		const uintLDMU6W = BigInt("997")
		const addressKuI7BA9 = accounts[2]
		const addressSqPvVcR = accounts[4]
		const uintksIo8Jm = await SpiritCointt4pwjU.allowance.call(addresskL44J89, addressewJJq4A, {from: accounts[0]});
		const boolmvEtk9U = await SpiritCointt4pwjU.approve.call(addressKuI7BA9, uintLDMU6W, {from: accounts[5]});
		const addressC8tiZxf = await SpiritCointt4pwjU.setMinter.call(addressSqPvVcR, {from: accounts[0]});

		assert.equal(boolmvEtk9U, true)
		assert.equal(uintksIo8Jm, BigInt("0"))
		await expect(SpiritCointt4pwjU.setMinter.call(addressSqPvVcR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressSicwqAa = accounts[1]
		const addresscwvQLwx = "0x0000000000000000000000000000000000000001"
		const SpiritCoinnqIVgMW = await SpiritCoin.new(addressSicwqAa, addresscwvQLwx, {from: accounts[4]});
		const uintXJ2fgf9 = BigInt("1165")
		const addressRbLrwSj = accounts[0]
		const uintWoCHwO3 = BigInt("662")
		const addressYVFku86 = "0x0000000000000000000000000000000000000001"
		const uintB9BJxk2 = BigInt("1066")
		const addressdSE9533 = accounts[5]
		const uintTUyqe31 = BigInt("798")
		const addressCBbeoVo = accounts[0]
		const uintEVesqao = BigInt("86")
		const addresstVkHwZv = accounts[3]
		const uintWgtKmCf = BigInt("1485")
		const addressDcKmXBd = accounts[4]
		const boolfD0UPj7 = await SpiritCoinnqIVgMW.approve.call(addressRbLrwSj, uintXJ2fgf9, {from: accounts[2]});
		const boolcmPVqDa = await SpiritCoinnqIVgMW.approve.call(addressYVFku86, uintWoCHwO3, {from: accounts[4]});
		const addressMI9yLs0 = await SpiritCoinnqIVgMW.mint.call(addressdSE9533, uintB9BJxk2, {from: "0x0000000000000000000000000000000000000001"});
		const boolImVDkEv = await SpiritCoinnqIVgMW.transfer.call(addressCBbeoVo, uintTUyqe31, {from: accounts[1]});
		const boolfF0F76h = await SpiritCoinnqIVgMW.approve.call(addresstVkHwZv, uintEVesqao, {from: accounts[2]});
		const addressRcFqVVc = await SpiritCoinnqIVgMW.mint.call(addressDcKmXBd, uintWgtKmCf, {from: accounts[1]});

		assert.equal(boolImVDkEv, true)
		assert.equal(boolcmPVqDa, true)
		assert.equal(boolfD0UPj7, true)
		assert.equal(boolfF0F76h, true)
		await expect(SpiritCoinnqIVgMW.mint.call(addressDcKmXBd, uintWgtKmCf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})