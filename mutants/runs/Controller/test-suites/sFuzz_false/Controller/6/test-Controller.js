const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressyfNftpd = "0x0000000000000000000000000000000000000001"
		const ControllerSxVDW6x = await Controller.new(addressyfNftpd, {from: accounts[0]});
		const addressVD53gLf = accounts[0]
		const uintxss8Fso = BigInt("885")
		const address80bSU7 = accounts[4]
		const addressYhqch1e = accounts[5]
		const uintkdEGOjg = BigInt("337")
		const addressJizJTAM = accounts[2]
		const addressTLWjr3J = accounts[0]
		const uintktgMyZp = await ControllerSxVDW6x.balanceOf.call(addressVD53gLf, {from: accounts[0]});
		const uintTYvU07n = await ControllerSxVDW6x.getExpectedReturn.call(addressYhqch1e, address80bSU7, uintxss8Fso, {from: "0x0000000000000000000000000000000000000001"});
		const addresswiQZHa = await ControllerSxVDW6x.inCaseTokensGetStuck.call(addressJizJTAM, uintkdEGOjg, {from: accounts[2]});
		const addressSYkna3c = await ControllerSxVDW6x.setStrategist.call(addressTLWjr3J, {from: accounts[4]});

		await expect(ControllerSxVDW6x.balanceOf.call(addressVD53gLf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address4sXZTs = accounts[5]
		const ControllerWs1nFF7 = await Controller.new(address4sXZTs, {from: accounts[2]});
		const uintUSzEs5k = BigInt("1661")
		const addressQwNsjxx = accounts[2]
		const addressNGm4mZ = accounts[1]
		const uintTA23EQp = BigInt("1196")
		const addressgNP1Aqo = accounts[0]
		const uinttaCEteq = await ControllerWs1nFF7.setSplit.call(uintUSzEs5k, {from: accounts[2]});
		const addressrnnbHfW = await ControllerWs1nFF7.setVault.call(addressNGm4mZ, addressQwNsjxx, {from: accounts[1]});
		const addressNGpIj61 = await ControllerWs1nFF7.inCaseTokensGetStuck.call(addressgNP1Aqo, uintTA23EQp, {from: accounts[3]});

		await expect(ControllerWs1nFF7.setVault.call(addressNGm4mZ, addressQwNsjxx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressE9ubqxV = accounts[2]
		const ControllerElrwlAM = await Controller.new(addressE9ubqxV, {from: accounts[3]});
		const addressjrcaoa8 = accounts[0]
		const addressPJ8Wd1e = accounts[2]
		const addressJKMLyui = accounts[0]
		const uintqAidGXR = BigInt("1050")
		const addressmIecDpV = accounts[3]
		const addressOGXoOk = await ControllerElrwlAM.setGovernance.call(addressjrcaoa8, {from: accounts[0]});
		const addressrcNtUq = await ControllerElrwlAM.approveStrategy.call(addressJKMLyui, addressPJ8Wd1e, {from: accounts[1]});
		const addressLyMVz7o = await ControllerElrwlAM.inCaseTokensGetStuck.call(addressmIecDpV, uintqAidGXR, {from: accounts[4]});

		await expect(ControllerElrwlAM.setGovernance.call(addressjrcaoa8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshuLdX8d = accounts[1]
		const Controller3FXmuv = await Controller.new(addresshuLdX8d, {from: accounts[0]});
		const uintkKQBU4J = BigInt("585")
		const addressZu7cvGf = "0x0000000000000000000000000000000000000001"
		const address5JvGXX = accounts[2]
		const addresseXWN0D = accounts[3]
		const addressAu0hpO8 = accounts[4]
		const addressVeTrAf8 = accounts[0]
		const addressks2vHtH = accounts[5]
		const addressKqUiyYQ = await Controller3FXmuv.withdraw.call(addressZu7cvGf, uintkKQBU4J, {from: accounts[3]});
		const addressOU6y40J = await Controller3FXmuv.setStrategy.call(addresseXWN0D, address5JvGXX, {from: accounts[2]});
		const uintC3SaKxA = await Controller3FXmuv.balanceOf.call(addressAu0hpO8, {from: accounts[2]});
		const addressNnU13J2 = await Controller3FXmuv.approveStrategy.call(addressks2vHtH, addressVeTrAf8, {from: accounts[3]});

		await expect(Controller3FXmuv.withdraw.call(addressZu7cvGf, uintkKQBU4J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJBKLEtG = accounts[1]
		const Controllervc8jXS2 = await Controller.new(addressJBKLEtG, {from: accounts[4]});
		const addressU1eZoxP = accounts[1]
		const addressuNsIEp = accounts[2]
		const addressWjCy2ZC = accounts[0]
		const addressTjfgKBY = accounts[4]
		const addressELdpjET = await Controllervc8jXS2.inCaseStrategyTokenGetStuck.call(addressuNsIEp, addressU1eZoxP, {from: accounts[0]});
		const addressSokVu5l = await Controllervc8jXS2.withdrawAll.call(addressWjCy2ZC, {from: accounts[1]});
		const addressTc7zfts = await Controllervc8jXS2.withdrawAll.call(addressTjfgKBY, {from: accounts[3]});

		await expect(Controllervc8jXS2.inCaseStrategyTokenGetStuck.call(addressuNsIEp, addressU1eZoxP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressTpTv3MF = accounts[0]
		const ControllerIhBwxGi = await Controller.new(addressTpTv3MF, {from: accounts[3]});
		const addressu0e9D7o = accounts[0]
		const addresswdAsUpK = accounts[5]
		const uint0BqcFV = BigInt("1172")
		const addressqPNl3B7 = accounts[1]
		const addressfvNgNdZ = accounts[4]
		const addressfi79X0T = await ControllerIhBwxGi.revokeStrategy.call(addresswdAsUpK, addressu0e9D7o, {from: accounts[2]});
		const uintUDK6OsA = await ControllerIhBwxGi.getExpectedReturn.call(addressfvNgNdZ, addressqPNl3B7, uint0BqcFV, {from: accounts[0]});

		await expect(ControllerIhBwxGi.revokeStrategy.call(addresswdAsUpK, addressu0e9D7o, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresswSAIAYK = accounts[1]
		const ControllerwUEY1fW = await Controller.new(addresswSAIAYK, {from: "0x0000000000000000000000000000000000000001"});
		const addresstLBqeY = accounts[3]
		const addresstIXxK62 = accounts[3]
		const uintFML0V8A = BigInt("4")
		const addressL199fII = accounts[2]
		const uinteBXmpnr = BigInt("113")
		const addressQedUYK = "0x0000000000000000000000000000000000000001"
		const addresspsRYb3W = accounts[1]
		const uintiVccUHx = BigInt("28")
		const addressGBzgTaZ = accounts[4]
		const addressmlPpWmD = accounts[1]
		const address9GKCZA = await ControllerwUEY1fW.approveStrategy.call(addresstIXxK62, addresstLBqeY, {from: accounts[2]});
		const addressOia58iZ = await ControllerwUEY1fW.inCaseTokensGetStuck.call(addressL199fII, uintFML0V8A, {from: "0x0000000000000000000000000000000000000001"});
		const uintL15G4Ae = await ControllerwUEY1fW.getExpectedReturn.call(addresspsRYb3W, addressQedUYK, uinteBXmpnr, {from: accounts[3]});
		const addresslP7IuNU = await ControllerwUEY1fW.yearn.call(addressmlPpWmD, addressGBzgTaZ, uintiVccUHx, {from: accounts[1]});
	});

	it('test for Controller', async () => {
		const addressZdkltIx = accounts[0]
		const ControllerIhBwxGi = await Controller.new(addressZdkltIx, {from: accounts[3]});
		const uintYbUwLWP = BigInt("1726")
		const addressNycgixw = "0x0000000000000000000000000000000000000001"
		const addressv3s0DwT = accounts[2]
		const addressK4lTd6r = accounts[1]
		const addresspuzVd5 = accounts[5]
		const uintJEobodr = BigInt("1172")
		const addressgpageaD = accounts[1]
		const addressSRewDqw = accounts[4]
		const uintgYNxB1O = await ControllerIhBwxGi.getExpectedReturn.call(addressv3s0DwT, addressNycgixw, uintYbUwLWP, {from: accounts[0]});
		const addressfi79X0T = await ControllerIhBwxGi.revokeStrategy.call(addresspuzVd5, addressK4lTd6r, {from: accounts[2]});
		const uintUDK6OsA = await ControllerIhBwxGi.getExpectedReturn.call(addressSRewDqw, addressgpageaD, uintJEobodr, {from: accounts[0]});

		await expect(ControllerIhBwxGi.getExpectedReturn.call(addressv3s0DwT, addressNycgixw, uintYbUwLWP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address9BYkNK = accounts[0]
		const ControllerIhBwxGi = await Controller.new(address9BYkNK, {from: accounts[3]});
		const addressiEMMD2 = "0x0000000000000000000000000000000000000001"
		const addressgE31f4d = accounts[0]
		const addressS1ZIQEp = accounts[5]
		const uinth0xjqio = BigInt("1172")
		const address1JFppa = accounts[2]
		const addressddpbGM3 = accounts[4]
		const addressIblIsbd = await ControllerIhBwxGi.setStrategist.call(addressiEMMD2, {from: accounts[4]});
		const addressfi79X0T = await ControllerIhBwxGi.revokeStrategy.call(addressS1ZIQEp, addressgE31f4d, {from: accounts[2]});
		const uintUDK6OsA = await ControllerIhBwxGi.getExpectedReturn.call(addressddpbGM3, address1JFppa, uinth0xjqio, {from: accounts[0]});

		await expect(ControllerIhBwxGi.setStrategist.call(addressiEMMD2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressvGTKuNC = accounts[0]
		const ControllerQOofOBn = await Controller.new(addressvGTKuNC, {from: accounts[0]});
		const addressNugO7E = accounts[0]
		const addressQBriWrb = accounts[0]
		const uintmo3waO8 = BigInt("1298")
		const addressqEVgYrG = accounts[0]
		const addressly6Jk7 = accounts[1]
		const addressiF47d8c = "0x0000000000000000000000000000000000000001"
		const uintQS0bak = BigInt("905")
		const uintzVg0Boz = BigInt("923")
		const addressjqYcv2K = accounts[3]
		const addressxMkAHF5 = accounts[0]
		const addressLGSsfrS = await ControllerQOofOBn.setStrategy.call(addressQBriWrb, addressNugO7E, {from: accounts[2]});
		const uintMLXyc0 = await ControllerQOofOBn.getExpectedReturn.call(addressly6Jk7, addressqEVgYrG, uintmo3waO8, {from: accounts[1]});
		const uintINwtsq = await ControllerQOofOBn.balanceOf.call(addressiF47d8c, {from: accounts[3]});
		const uintf6fpfb0 = await ControllerQOofOBn.setSplit.call(uintQS0bak, {from: accounts[0]});
		const addressjueT8fN = await ControllerQOofOBn.yearn.call(addressxMkAHF5, addressjqYcv2K, uintzVg0Boz, {from: accounts[2]});

		await expect(ControllerQOofOBn.setStrategy.call(addressQBriWrb, addressNugO7E, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressd9r9Vvi = accounts[2]
		const ControllerfJCFMRk = await Controller.new(addressd9r9Vvi, {from: accounts[3]});
		const addressIFFqAFB = accounts[1]
		const addressSChFCaA = accounts[0]
		const addressv9slfoL = accounts[4]
		const addressgpo7Dhd = accounts[1]
		const addresscO9Vn07 = accounts[2]
		const addresswg7icN = "0x0000000000000000000000000000000000000001"
		const addressUakxJsd = accounts[3]
		const addresscNbzH7Y = accounts[4]
		const addressqia3Jof = accounts[4]
		const addressp1q0Yuu = accounts[2]
		const addressuVqWmoA = await ControllerfJCFMRk.setConverter.call(addressv9slfoL, addressSChFCaA, addressIFFqAFB, {from: accounts[2]});
		const addressGsWmYfq = await ControllerfJCFMRk.setConverter.call(addresswg7icN, addresscO9Vn07, addressgpo7Dhd, {from: accounts[1]});
		const addressWByiwdg = await ControllerfJCFMRk.approveStrategy.call(addresscNbzH7Y, addressUakxJsd, {from: accounts[3]});
		const addressAFlwBc6 = await ControllerfJCFMRk.withdrawAll.call(addressqia3Jof, {from: accounts[2]});
		const addressNprnqmC = await ControllerfJCFMRk.setRewards.call(addressp1q0Yuu, {from: accounts[5]});

		await expect(ControllerfJCFMRk.setConverter.call(addressv9slfoL, addressSChFCaA, addressIFFqAFB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshf1CLIf = accounts[0]
		const ControllerIhBwxGi = await Controller.new(addresshf1CLIf, {from: accounts[3]});
		const uintQduvbnu = BigInt("556")
		const addressmyY2J1Y = accounts[3]
		const addressL1ISZrZ = accounts[1]
		const addressKpdl93 = accounts[6]
		const uintckVM13d = BigInt("1075")
		const addressxC2YU0h = accounts[3]
		const addressPAXsDrC = await ControllerIhBwxGi.earn.call(addressmyY2J1Y, uintQduvbnu, {from: accounts[2]});
		const addressfi79X0T = await ControllerIhBwxGi.revokeStrategy.call(addressKpdl93, addressL1ISZrZ, {from: accounts[2]});
		const addressqB203QQ = await ControllerIhBwxGi.inCaseTokensGetStuck.call(addressxC2YU0h, uintckVM13d, {from: accounts[3]});

		await expect(ControllerIhBwxGi.earn.call(addressmyY2J1Y, uintQduvbnu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressPQUendL = accounts[0]
		const ControllerIhBwxGi = await Controller.new(addressPQUendL, {from: accounts[3]});
		const addressMEl0sjM = accounts[0]
		const addressQPgGlB = accounts[1]
		const addressGy6eExB = accounts[6]
		const addressrbT2qqG = await ControllerIhBwxGi.setOneSplit.call(addressMEl0sjM, {from: accounts[4]});
		const addressfi79X0T = await ControllerIhBwxGi.revokeStrategy.call(addressGy6eExB, addressQPgGlB, {from: accounts[2]});

		await expect(ControllerIhBwxGi.setOneSplit.call(addressMEl0sjM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address1j6Lwu = accounts[0]
		const ControllerIhBwxGi = await Controller.new(address1j6Lwu, {from: accounts[3]});
		const addressTpI2uUb = accounts[1]
		const addressj30wZ2a = accounts[0]
		const addressN9OrTjy = accounts[6]
		const addressiHxrALc = await ControllerIhBwxGi.withdrawAll.call(addressTpI2uUb, {from: accounts[3]});
		const addressfi79X0T = await ControllerIhBwxGi.revokeStrategy.call(addressN9OrTjy, addressj30wZ2a, {from: accounts[2]});

		await expect(ControllerIhBwxGi.withdrawAll.call(addressTpI2uUb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressg2XnACR = accounts[0]
		const ControllerIhBwxGi = await Controller.new(addressg2XnACR, {from: accounts[3]});
		const addresshw2Sh8H = accounts[0]
		const addresstSrpVdd = accounts[3]
		const addressAFf9pih = accounts[2]
		const addressCguTGPf = accounts[1]
		const uintBXZnpz = BigInt("450")
		const addresspGgvRpr = accounts[1]
		const addressMhuGvIC = accounts[0]
		const addressyxowiX5 = await ControllerIhBwxGi.approveStrategy.call(addresstSrpVdd, addresshw2Sh8H, {from: accounts[4]});
		const addressfi79X0T = await ControllerIhBwxGi.revokeStrategy.call(addressCguTGPf, addressAFf9pih, {from: accounts[2]});
		const uint4aYKUs = await ControllerIhBwxGi.getExpectedReturn.call(addressMhuGvIC, addresspGgvRpr, uintBXZnpz, {from: accounts[4]});

		await expect(ControllerIhBwxGi.approveStrategy.call(addresstSrpVdd, addresshw2Sh8H, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressL6Eoxuv = accounts[0]
		const ControllerIhBwxGi = await Controller.new(addressL6Eoxuv, {from: accounts[3]});
		const uintGrsNdQu = BigInt("689")
		const addressj3Hk5Ec = accounts[0]
		const addressig0aUSL = accounts[5]
		const addressVY45K9k = accounts[1]
		const addressynI01zy = accounts[3]
		const addressAog6HF = accounts[0]
		const addressD4UdhUO = accounts[2]
		const addressB1Sb9D6 = accounts[2]
		const addressn1yYFQv = await ControllerIhBwxGi.yearn.call(addressig0aUSL, addressj3Hk5Ec, uintGrsNdQu, {from: accounts[1]});
		const addressVrx630c = await ControllerIhBwxGi.inCaseStrategyTokenGetStuck.call(addressynI01zy, addressVY45K9k, {from: accounts[3]});
		const addressfi79X0T = await ControllerIhBwxGi.revokeStrategy.call(addressD4UdhUO, addressAog6HF, {from: accounts[2]});
		const addressQ2EMQbo = await ControllerIhBwxGi.setStrategist.call(addressB1Sb9D6, {from: accounts[2]});

		await expect(ControllerIhBwxGi.yearn.call(addressig0aUSL, addressj3Hk5Ec, uintGrsNdQu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressSZ6sds = accounts[0]
		const ControllerIhBwxGi = await Controller.new(addressSZ6sds, {from: accounts[3]});
		const uintjYptgI = BigInt("404")
		const addresscprBZ4q = accounts[0]
		const addressa4ndz6 = accounts[2]
		const addressMJ99535 = accounts[2]
		const addressljBolsa = await ControllerIhBwxGi.inCaseTokensGetStuck.call(addresscprBZ4q, uintjYptgI, {from: accounts[2]});
		const addressfi79X0T = await ControllerIhBwxGi.revokeStrategy.call(addressMJ99535, addressa4ndz6, {from: accounts[2]});

		await expect(ControllerIhBwxGi.inCaseTokensGetStuck.call(addresscprBZ4q, uintjYptgI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskqs7If4 = accounts[0]
		const ControllerIhBwxGi = await Controller.new(addresskqs7If4, {from: accounts[3]});
		const addressTXXfess = accounts[0]
		const addressfyAKnfD = accounts[0]
		const addressRUpOhpF = accounts[1]
		const addresspj4XGyV = await ControllerIhBwxGi.setRewards.call(addressTXXfess, {from: accounts[5]});
		const addressfi79X0T = await ControllerIhBwxGi.revokeStrategy.call(addressRUpOhpF, addressfyAKnfD, {from: accounts[2]});

		await expect(ControllerIhBwxGi.setRewards.call(addressTXXfess, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxSNN0Ts = accounts[0]
		const ControllerIhBwxGi = await Controller.new(addressxSNN0Ts, {from: accounts[3]});
		const addressiYu2gk = accounts[4]
		const addressjTVdxto = accounts[1]
		const uintTFciZbI = BigInt("1109")
		const addressWH0yA1G = accounts[0]
		const addressbcpP60i = accounts[2]
		const addressl6h99iA = accounts[0]
		const addressWWkyYE3 = await ControllerIhBwxGi.setStrategy.call(addressjTVdxto, addressiYu2gk, {from: accounts[3]});
		const addressJPlnulE = await ControllerIhBwxGi.inCaseTokensGetStuck.call(addressWH0yA1G, uintTFciZbI, {from: accounts[1]});
		const addressfi79X0T = await ControllerIhBwxGi.revokeStrategy.call(addressl6h99iA, addressbcpP60i, {from: accounts[2]});

		await expect(ControllerIhBwxGi.setStrategy.call(addressjTVdxto, addressiYu2gk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressHYKOtS3 = accounts[4]
		const ControllerXHIl4j4 = await Controller.new(addressHYKOtS3, {from: accounts[2]});
		const uintDdmyLdY = BigInt("1977")
		const addressOnN6ttO = accounts[1]
		const addresslv1E4Hl = accounts[3]
		const uintNLVt7p9 = BigInt("1045")
		const addressVxQLa8S = accounts[2]
		const addressZ8TWy8G = accounts[4]
		const addressv0UDqf = await ControllerXHIl4j4.inCaseTokensGetStuck.call(addressOnN6ttO, uintDdmyLdY, {from: accounts[2]});
		const addressxkfWItt = await ControllerXHIl4j4.setOneSplit.call(addresslv1E4Hl, {from: accounts[1]});
		const addressBYDW1iZ = await ControllerXHIl4j4.earn.call(addressVxQLa8S, uintNLVt7p9, {from: accounts[2]});
		const addressJPiSZGN = await ControllerXHIl4j4.setGovernance.call(addressZ8TWy8G, {from: accounts[0]});

		await expect(ControllerXHIl4j4.inCaseTokensGetStuck.call(addressOnN6ttO, uintDdmyLdY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})