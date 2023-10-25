const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressgzxKiwT = accounts[0]
		const addressSQ70Y3V = accounts[3]
		const addressUK0wdiU = accounts[3]
		const GardenContractV2Rkp2WiR = await GardenContractV2.new(addressgzxKiwT, addressSQ70Y3V, addressUK0wdiU, {from: "0x0000000000000000000000000000000000000001"});
		const stringaQZFBY3 = "XptuPaQ9YyjIUkBBEttruuZMd7huJzsilfw4L"
		const stringP63VU2O = "2H7Js4jdiYuffjkQRDcW8FnpmrOlqc"
		const uint256JvLKRyO = await GardenContractV2Rkp2WiR.totalTLPDecomposed.call(stringaQZFBY3, {from: accounts[2]});
		const uint256ekvs51O = await GardenContractV2Rkp2WiR.totalGardenSupply.call(stringP63VU2O, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GardenContractV2', async () => {
		const addressgry6ukc = accounts[3]
		const addressnYwpLRe = accounts[2]
		const addressRO3MF4A = accounts[4]
		const GardenContractV2R0Xot7 = await GardenContractV2.new(addressgry6ukc, addressnYwpLRe, addressRO3MF4A, {from: accounts[0]});
		const stringq9McYyw = "XSnsWXpxsoUapoInxTRgwoKBu984MmX1AspRpMynI6n7CootwObhtxsUvxv"
		const stringGD7jGtZ = "Vlb5fGcQSXDKm61655QyWybnLvshJMyHrvFOYX8ckasT"
		const addressmUvfK9 = accounts[3]
		const addressIo5UgA = accounts[2]
		const uintv7SLH8z = BigInt("152")
		const stringV3EHK2P = "7ArMgYKAwwbrHU"
//		const uint256GTUWMel = await GardenContractV2R0Xot7.totalTLPGrown.call(stringq9McYyw, {from: accounts[4]});
//		const uint256aJd26fp = await GardenContractV2R0Xot7.totalTLPDecomposed.call(stringGD7jGtZ, {from: accounts[0]});
//		const addressVhCmQxh = await GardenContractV2R0Xot7.addTokenOwner.call(addressIo5UgA, addressmUvfK9, {from: accounts[2]});
//		const stringuMPGs2 = await GardenContractV2R0Xot7.claimDecompose.call(stringV3EHK2P, uintv7SLH8z, {from: accounts[2]});

		await expect(GardenContractV2R0Xot7.totalTLPGrown.call(stringq9McYyw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresslpO1UNm = "0x0000000000000000000000000000000000000001"
		const address5rvHSy = accounts[3]
		const addressauOexTz = accounts[1]
		const GardenContractV2aXoIr2d = await GardenContractV2.new(addresslpO1UNm, address5rvHSy, addressauOexTz, {from: accounts[0]});
		const uintXCz44tz = BigInt("55")
		const uintjB0aBT1 = BigInt("51")
		const stringBZY4ttj = "5GMYsTH3itpFW7wVs2XQqXad88wXrGLD7APIfpkwWuzXOl9IoFQpYpLsXDQ1QKb92FViHaDptv4qgbePHN0EuJDtLc26oDLUr"
		const boolfBB9nkr = true
		const uintgapOcZo = BigInt("249")
		const stringdhFX3DN = "8Tpp3MnlzalqbI3nHTbMVAgsVimKWsedsYD7SKxQoF5gfqgaAHiymwgCv87g5sVkYaCUauPyLCV"
		const uintGgYsutu = BigInt("361")
		const uintRceHYN = BigInt("635")
		const uintENoxTLI = BigInt("41")
		const stringZPqO1qq = "De4IT4psKv9B0U3NTntQNkhb3slh9xPR"
		const uinttrgiA6U = BigInt("144")
		const stringaL1DK6W = "4H34DWwL8rqrD1y4PLuGGj"
//		const uint256U2qupL = await GardenContractV2aXoIr2d.getTotalsTLPHarvest.call(uintXCz44tz, {from: "0x0000000000000000000000000000000000000001"});
//		const stringIY23ZyZ = await GardenContractV2aXoIr2d.harvest.call(stringBZY4ttj, uintjB0aBT1, {from: accounts[0]});
//		const uint256EyFmT0G = await GardenContractV2aXoIr2d.plant.call(uintGgYsutu, stringdhFX3DN, uintgapOcZo, boolfBB9nkr, {from: accounts[5]});
//		const stringqxdyDOi = await GardenContractV2aXoIr2d.decompose.call(stringZPqO1qq, uintENoxTLI, uintRceHYN, {from: accounts[2]});
//		const stringh71E796 = await GardenContractV2aXoIr2d.withdraw.call(stringaL1DK6W, uinttrgiA6U, {from: accounts[0]});

		await expect(GardenContractV2aXoIr2d.getTotalsTLPHarvest.call(uintXCz44tz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressZLab3Hj = "0x0000000000000000000000000000000000000001"
		const addressTh5x7xS = accounts[1]
		const addresscBae2ur = accounts[0]
		const GardenContractV2VjZnzdu = await GardenContractV2.new(addressZLab3Hj, addressTh5x7xS, addresscBae2ur, {from: accounts[3]});
		const addressrnnDl9S = "0x0000000000000000000000000000000000000001"
		const uintfBqnAAJ = BigInt("11")
		const stringhUagy7 = "Nf9XOQxwlFxH70Tcg94ET870DMpUCX9HC1XJTkvWTM0m2SF66ydV9gSeNjp1c8JeVbDYG3KnFdxtz7fhE9DwH"
		const uintbHNZhF5 = BigInt("155")
		const uintsftg0Qm = BigInt("246")
		const uintSz6KLQr = BigInt("5")
		const stringFb6PyS = "SffAKurXpW4pfxVfJqJXT7qumGpjYto7VoBtrCC9NB3roNclOFoYUrbe9KeBJCTYuxYhxgdleiz58vTm9E78qTsdcjXX"
		const addressH6rsfp6 = accounts[4]
		const addressOrzfiv4 = await GardenContractV2VjZnzdu.changeBenefitiary.call(addressrnnDl9S, {from: accounts[3]});
//		const stringUYwW8JU = await GardenContractV2VjZnzdu.withdraw.call(stringhUagy7, uintfBqnAAJ, {from: accounts[2]});
//		const uint8c7vbI46 = await GardenContractV2VjZnzdu.zeroHoldings.call(uintsftg0Qm, uintbHNZhF5, {from: accounts[3]});
//		const stringszkP5yV = await GardenContractV2VjZnzdu.claimDecompose.call(stringFb6PyS, uintSz6KLQr, {from: accounts[3]});
//		const addressiGckTFA = await GardenContractV2VjZnzdu.changeBenefitiary.call(addressH6rsfp6, {from: accounts[1]});

		await expect(GardenContractV2VjZnzdu.withdraw.call(stringhUagy7, uintfBqnAAJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressVd8Bqpp = accounts[2]
		const addressJDrYSdp = accounts[5]
		const addressKlMuG1K = accounts[1]
		const GardenContractV2GsrvN73 = await GardenContractV2.new(addressVd8Bqpp, addressJDrYSdp, addressKlMuG1K, {from: accounts[3]});
		const stringZos4pZq = "loitjRXuK7dyjj0JJsmp1EqlNZYcbNzHeLOvaPrYbQdJaV9rx7hRQQNOSYnwW70d0qkTLmkAwv5UJoU2cpSR"
		const uintdG4QaqD = BigInt("119")
		const stringRfCji2T = "lNhlu"
		const stringYS3Z3V0 = "r4AKCgceYLoZblhaLUqvEzGGRY17eavohlbzUdHwa202mGK2MYqNKEsCLNBgeNdE6i0SiCEOaH6d6qQ"
		const addresssvBuUNe = accounts[0]
//		const stringAlUh7WD = await GardenContractV2GsrvN73.harvestAllBeds.call(stringZos4pZq, {from: accounts[2]});
//		const uint2566WHU4j = await GardenContractV2GsrvN73.timeUntilNextTLP.call(stringRfCji2T, uintdG4QaqD, {from: accounts[0]});
//		const uint256YC1BJk = await GardenContractV2GsrvN73.balanceOf.call(addresssvBuUNe, stringYS3Z3V0, {from: accounts[5]});

		await expect(GardenContractV2GsrvN73.harvestAllBeds.call(stringZos4pZq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresswr5dh01 = "0x0000000000000000000000000000000000000001"
		const addressXPrFHOH = accounts[3]
		const addressVJXUDOQ = accounts[0]
		const GardenContractV2VX7GJxv = await GardenContractV2.new(addresswr5dh01, addressXPrFHOH, addressVJXUDOQ, {from: accounts[4]});
		const addressxDHhkBA = accounts[0]
		const uintLM0NPEw = BigInt("224")
		const uinthDq7lc = BigInt("21")
		const uintTpERaO = BigInt("237")
		const uintpPTfoT = BigInt("2004")
		const uintF34WvUo = BigInt("15")
		const uintzxHuovK = BigInt("59")
		const stringrmwfGEm = "Etzb8NMEZidkCzcj3RP8oBIOaboMM9jKEIF36ed0z2MtKX5h8HwNN35BaleAzRLPEEuwMOdfKLse1HCfSbuP2loL"
//		const addressWbG5iC = await GardenContractV2VX7GJxv.renounceTokenOwner.call(addressxDHhkBA, {from: accounts[1]});
//		const uint256pQYtABa = await GardenContractV2VX7GJxv.getTotalrTLPHarvest.call(uintLM0NPEw, {from: accounts[4]});
//		const uint8fbemQC8 = await GardenContractV2VX7GJxv.zeroHoldings.call(uintTpERaO, uinthDq7lc, {from: accounts[4]});
//		const uint8hRN4si7 = await GardenContractV2VX7GJxv.operationBurnMint.call(uintzxHuovK, uintF34WvUo, uintpPTfoT, {from: accounts[3]});
//		const uint256S047Ds0 = await GardenContractV2VX7GJxv.totalGardenSupply.call(stringrmwfGEm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2VX7GJxv.renounceTokenOwner.call(addressxDHhkBA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresseYV7odX = "0x0000000000000000000000000000000000000001"
		const addressmddLNNH = accounts[1]
		const addressYO5f39T = accounts[0]
		const GardenContractV2VjZnzdu = await GardenContractV2.new(addresseYV7odX, addressmddLNNH, addressYO5f39T, {from: accounts[3]});
		const addressn7fCTvt = "0x0000000000000000000000000000000000000001"
		const stringkORoOt = "WxUBQ5Tck4taj0BXcr5qbFmPqolRCTXarXi4e5Ci7TJx5wyi2C6SjXRD623sLtMfepnSCz5TjsKe8gqGcXKDkW"
		const uintHN174Xw = BigInt("11")
		const stringhUagy7 = "Nf9XOQxwlFxH70Tcg94ET870DMpUCX9HC1XJTkvWTM0m2SF66ydV9gSeNjp1c8JeVbDYG3KnFdxtz7fhE9DwH"
		const uintJzkT5FK = BigInt("155")
		const uintm9dtPKZ = BigInt("246")
		const addressMcmcOZl = accounts[1]
		const addressbF4M43N = accounts[0]
		const uintIScmJmN = BigInt("5")
		const stringFb6PyS = "SffAKurXpW4pfxVfJqJXT7qumGpjYto7VoBtrCC9NB3roNclOFoYUrbe9KeBJCTYuxYhxgdleiz58vTm9E78qTsdcjXX"
		const addressOrzfiv4 = await GardenContractV2VjZnzdu.changeBenefitiary.call(addressn7fCTvt, {from: accounts[3]});
//		const uint256Y4IqZfd = await GardenContractV2VjZnzdu.totalTLPGrowing.call(stringkORoOt, {from: accounts[0]});
//		const stringUYwW8JU = await GardenContractV2VjZnzdu.withdraw.call(stringhUagy7, uintHN174Xw, {from: accounts[2]});
//		const uint8c7vbI46 = await GardenContractV2VjZnzdu.zeroHoldings.call(uintm9dtPKZ, uintJzkT5FK, {from: accounts[3]});
//		const addresszuc7txZ = await GardenContractV2VjZnzdu.addTokenOwner.call(addressbF4M43N, addressMcmcOZl, {from: accounts[5]});
//		const stringszkP5yV = await GardenContractV2VjZnzdu.claimDecompose.call(stringFb6PyS, uintIScmJmN, {from: accounts[3]});

		await expect(GardenContractV2VjZnzdu.totalTLPGrowing.call(stringkORoOt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressZP0h63m = accounts[3]
		const addressXsgdwPK = accounts[2]
		const addressKibu4kO = accounts[4]
		const GardenContractV2R0Xot7 = await GardenContractV2.new(addressZP0h63m, addressXsgdwPK, addressKibu4kO, {from: accounts[0]});
		const stringGD7jGtZ = "Vlb5fGcQSXDKm61655QyWybnLvshJMyHrvFOYX8ckasT"
		const addressD3LYXyL = accounts[3]
		const addressOWt9ho3 = accounts[2]
		const uintEfJWUKd = BigInt("152")
		const stringV3EHK2P = "7ArMgYKAwwbrHU"
//		const uint256aJd26fp = await GardenContractV2R0Xot7.totalTLPDecomposed.call(stringGD7jGtZ, {from: accounts[0]});
//		const addressVhCmQxh = await GardenContractV2R0Xot7.addTokenOwner.call(addressOWt9ho3, addressD3LYXyL, {from: accounts[2]});
//		const stringuMPGs2 = await GardenContractV2R0Xot7.claimDecompose.call(stringV3EHK2P, uintEfJWUKd, {from: accounts[2]});

		await expect(GardenContractV2R0Xot7.totalTLPDecomposed.call(stringGD7jGtZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJ56YXJM = "0x0000000000000000000000000000000000000001"
		const addressXrm98Km = accounts[1]
		const addressJYkqhII = accounts[0]
		const GardenContractV2VjZnzdu = await GardenContractV2.new(addressJ56YXJM, addressXrm98Km, addressJYkqhII, {from: accounts[3]});
		const addressUkT0mN = "0x0000000000000000000000000000000000000001"
		const uintUr82SCd = BigInt("5")
		const stringFb6PyS = "SffAKurXpW4pfxVfJqJXT7qumGpjYto7VoBtrCC9NB3roNclOFoYrbe9KeBJCTYuxYhxgdleiz58vTm9E78qTsdcjXX"
		const addressN5EHG4t = accounts[2]
		const addressOrzfiv4 = await GardenContractV2VjZnzdu.changeBenefitiary.call(addressUkT0mN, {from: accounts[3]});
//		const stringszkP5yV = await GardenContractV2VjZnzdu.claimDecompose.call(stringFb6PyS, uintUr82SCd, {from: accounts[3]});
//		const addressiGckTFA = await GardenContractV2VjZnzdu.changeBenefitiary.call(addressN5EHG4t, {from: accounts[1]});

		await expect(GardenContractV2VjZnzdu.claimDecompose.call(stringFb6PyS, uintUr82SCd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressuIVQidU = "0x0000000000000000000000000000000000000001"
		const addressbhpvT7 = accounts[1]
		const addressJFCitho = accounts[0]
		const GardenContractV2VjZnzdu = await GardenContractV2.new(addressuIVQidU, addressbhpvT7, addressJFCitho, {from: accounts[3]});
		const addressW3fRWEe = "0x0000000000000000000000000000000000000001"
		const stringBm8Fve0 = "grbWDFyTaC64IecyJmJwHhqUwVwFrSJhHrKHfLqBz51a0l9VNjQT7HxzQBFG3rtmXWrMCmhnlnnR1b7m1oFncRWH"
		const uintJ6BPqe = BigInt("11")
		const stringhUagy7 = "Nf9XOQxwlFxH70Tcg94ET870DMpUCX9HC0XJTkvWTM0m2SF66ydV9gSeNjp1c8JeVbDYG3KnFdxtz7fhE9DwH"
		const stringjTnpbKM = "jkaDrROWzV4yeYEYQ2UJaL14ZY7yb3ty"
		const uintB8DjJ7V = BigInt("5")
		const stringFb6PyS = "SffAKurXpW4pfxVfJqJXT7qumGpjYto7VoBtrCC9NB3roNclOFoYrbe9KeBJCTYuxYhxgdleiz58vTm9E78qTsdcjXX"
		const addressOrzfiv4 = await GardenContractV2VjZnzdu.changeBenefitiary.call(addressW3fRWEe, {from: accounts[3]});
//		const uint256Y9wD6II = await GardenContractV2VjZnzdu.totalTLPBurnt.call(stringBm8Fve0, {from: accounts[4]});
//		const stringUYwW8JU = await GardenContractV2VjZnzdu.withdraw.call(stringhUagy7, uintJ6BPqe, {from: accounts[2]});
//		const stringGt7xZe5 = await GardenContractV2VjZnzdu.harvestAllBeds.call(stringjTnpbKM, {from: accounts[4]});
//		const stringszkP5yV = await GardenContractV2VjZnzdu.claimDecompose.call(stringFb6PyS, uintB8DjJ7V, {from: accounts[3]});

		await expect(GardenContractV2VjZnzdu.totalTLPBurnt.call(stringBm8Fve0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressZILXySA = accounts[4]
		const addressd6oJLqA = "0x0000000000000000000000000000000000000001"
		const addresstNIHv1L = accounts[2]
		const GardenContractV2B423EQX = await GardenContractV2.new(addressZILXySA, addressd6oJLqA, addresstNIHv1L, {from: accounts[4]});
		const uintYgA876R = BigInt("43")
		const uintAEFmNba = BigInt("232")
		const uintJ3llz6q = BigInt("220")
		const stringLgi9mc1 = "HZBjU"
		const boolej2s0Bn = true
		const uintSmSrqAc = BigInt("66")
		const stringANBdHTG = "ah8NffWv7XxDVtl4GuzsEEAppGnlwlupTSuRK8YLJBuh2IgZ4iqfIrbPNGSShGGvqtQT4g6kfC3biRwBoHh2kJmWIS4DYn"
		const uintR0LCNrl = BigInt("1093")
//		const uint8aWaVqIK = await GardenContractV2B423EQX.setTimeStamp.call(uintAEFmNba, uintYgA876R, {from: accounts[0]});
//		const uint256nVwNNl6 = await GardenContractV2B423EQX.timeUntilNextTLP.call(stringLgi9mc1, uintJ3llz6q, {from: accounts[3]});
//		const uint256M9Feia = await GardenContractV2B423EQX.plant.call(uintR0LCNrl, stringANBdHTG, uintSmSrqAc, boolej2s0Bn, {from: accounts[0]});

		await expect(GardenContractV2B423EQX.setTimeStamp.call(uintAEFmNba, uintYgA876R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresseGZKvf = accounts[2]
		const addressa9oERZF = accounts[5]
		const addressehVBiAA = accounts[1]
		const GardenContractV2GsrvN73 = await GardenContractV2.new(addresseGZKvf, addressa9oERZF, addressehVBiAA, {from: accounts[3]});
		const uintZTxrY3a = BigInt("159")
		const stringQ7yGsU9 = "7eDeNymKWTmjY3QKhSaVjiwVBtPKTGLbGD0tkde1CBycpseC4ToEKOaJ"
		const stringZos4pZq = "loitjRXuK7dyjj0JJsmp1EqlNZYcbNzHeLOvaPrYbQdJaV9rx7hRQQNOSYnwW70d0qkTLmkAwv5UJoU2cpSR"
		const uintTpo03rS = BigInt("119")
		const stringRfCji2T = "lNhfu"
		const stringYS3Z3V0 = "r4AKCgceYLoZblhaLUqvEzGGRY17eavohlbzUdHwa202mGK2MYqNKEsCLNBgeNdE6i0SiCEOaH6d6qQ"
		const addressCFwnwhK = accounts[0]
//		await GardenContractV2GsrvN73.totalBedSupply.call(stringQ7yGsU9, uintZTxrY3a, {from: accounts[2]});
//		const stringAlUh7WD = await GardenContractV2GsrvN73.harvestAllBeds.call(stringZos4pZq, {from: accounts[2]});
//		const uint2566WHU4j = await GardenContractV2GsrvN73.timeUntilNextTLP.call(stringRfCji2T, uintTpo03rS, {from: accounts[0]});
//		const uint256YC1BJk = await GardenContractV2GsrvN73.balanceOf.call(addressCFwnwhK, stringYS3Z3V0, {from: accounts[5]});

		await expect(GardenContractV2GsrvN73.totalBedSupply.call(stringQ7yGsU9, uintZTxrY3a, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresszGWo9i3 = "0x0000000000000000000000000000000000000001"
		const addresss2b7yKB = accounts[1]
		const addressPEhd54W = accounts[0]
		const GardenContractV2VjZnzdu = await GardenContractV2.new(addresszGWo9i3, addresss2b7yKB, addressPEhd54W, {from: accounts[3]});
		const addressgmre7yr = "0x0000000000000000000000000000000000000001"
		const uintTrH2zmq = BigInt("152")
		const stringT248640 = "LpKRGiYcQLMiWHcedbpsw7QzOz7gQDI7Qx7TD1UeTREa8WG2umw67BAz0FGnVlP6WTbAKPvjuoJOST57i"
		const address851QtZ = accounts[4]
		const uintnMMwBZr = BigInt("11")
		const stringhUagy7 = "Nf9XOQxwlFxH70Tcg94ET870DMpUCX9HC1XJTkvWTM0m2SF66ydV9gSeNjp1c8JeVbDYG3KnFdxtz7fhE9DwH"
		const uintvwAYkm = BigInt("150")
		const uintqJkpzs = BigInt("246")
		const uinthMDE3FM = BigInt("5")
		const stringFb6PyS = "SffAKurXpW4pfxVfJqJXT7qumGpjYto7VoBtrCC9NB3roNclOFoYUrbe9KeBJCTYuxYhxgdleiz58vTm9E78qTsdcjXX"
		const addresseAjm56 = accounts[4]
		const addressOrzfiv4 = await GardenContractV2VjZnzdu.changeBenefitiary.call(addressgmre7yr, {from: accounts[3]});
//		const uint256gfR5kJ5 = await GardenContractV2VjZnzdu.growthRemaining.call(address851QtZ, stringT248640, uintTrH2zmq, {from: accounts[1]});
//		const stringUYwW8JU = await GardenContractV2VjZnzdu.withdraw.call(stringhUagy7, uintnMMwBZr, {from: accounts[2]});
//		const uint8c7vbI46 = await GardenContractV2VjZnzdu.zeroHoldings.call(uintqJkpzs, uintvwAYkm, {from: accounts[3]});
//		const stringszkP5yV = await GardenContractV2VjZnzdu.claimDecompose.call(stringFb6PyS, uinthMDE3FM, {from: accounts[3]});
//		const addressiGckTFA = await GardenContractV2VjZnzdu.changeBenefitiary.call(addresseAjm56, {from: accounts[1]});

		await expect(GardenContractV2VjZnzdu.growthRemaining.call(address851QtZ, stringT248640, uintTrH2zmq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressWSbWhkz = "0x0000000000000000000000000000000000000001"
		const addressEmmoFTC = accounts[1]
		const addressrcFg1UD = accounts[0]
		const GardenContractV2VjZnzdu = await GardenContractV2.new(addressWSbWhkz, addressEmmoFTC, addressrcFg1UD, {from: accounts[3]});
		const uintYA8nure = BigInt("1263")
		const uinthBhTBFI = BigInt("71")
		const stringQnu6ISe = "SxKxUh4CA5Ced4HKtbh1Tcyvr3VOC0dNgqnqjHtclwb6zchYeDcRcUTTvo"
		const addresstcO4ebE = "0x0000000000000000000000000000000000000002"
		const uintBq4N83 = BigInt("5")
		const stringFb6PyS = "SffAKurXpW4pfxVfJqJXT7qumGpjYto7VoBtrCC9NB3roNclOFoYrbe9KeBJCTYuxYhxgdleiz58vTm9E78qTsdcjXX"
		const addressBAiOZyp = accounts[2]
//		const stringcAXClte = await GardenContractV2VjZnzdu.decompose.call(stringQnu6ISe, uinthBhTBFI, uintYA8nure, {from: accounts[1]});
//		const addressOrzfiv4 = await GardenContractV2VjZnzdu.changeBenefitiary.call(addresstcO4ebE, {from: accounts[3]});
//		const stringszkP5yV = await GardenContractV2VjZnzdu.claimDecompose.call(stringFb6PyS, uintBq4N83, {from: accounts[3]});
//		const addressiGckTFA = await GardenContractV2VjZnzdu.changeBenefitiary.call(addressBAiOZyp, {from: accounts[1]});

		await expect(GardenContractV2VjZnzdu.decompose.call(stringQnu6ISe, uinthBhTBFI, uintYA8nure, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressme2bP4h = accounts[2]
		const addressPLAojyE = accounts[0]
		const addressup4Ge2 = accounts[3]
		const GardenContractV2jtY3e36 = await GardenContractV2.new(addressme2bP4h, addressPLAojyE, addressup4Ge2, {from: accounts[3]});
		const uintcxHprkD = BigInt("1")
		const addressPX4NyA = accounts[0]
		const stringEqN8KGD = "LCDx7Y5a3MOkXPgHR7TcyJrOcHyc1vetHYtMoFPG4RyCY"
		const addresshfM2wbk = accounts[0]
		const uintLZViMc = BigInt("130")
//		const uint256vYDrQe2 = await GardenContractV2jtY3e36.getTotalrTLPHarvest.call(uintcxHprkD, {from: accounts[4]});
//		const addressxa2HPe = await GardenContractV2jtY3e36.changeOwner.call(addressPX4NyA, {from: accounts[1]});
//		const uint25627fLOj = await GardenContractV2jtY3e36.balanceOf.call(addresshfM2wbk, stringEqN8KGD, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256mHUkqiw = await GardenContractV2jtY3e36.getTotalsTLPHarvest.call(uintLZViMc, {from: accounts[3]});

		await expect(GardenContractV2jtY3e36.getTotalrTLPHarvest.call(uintcxHprkD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresshoKmrMG = accounts[5]
		const addressGQoOJcz = accounts[3]
		const addressSm0aCX8 = "0x0000000000000000000000000000000000000001"
		const GardenContractV2OHJUAZX = await GardenContractV2.new(addresshoKmrMG, addressGQoOJcz, addressSm0aCX8, {from: accounts[0]});
		const stringF9loc0A = "Aj8uB4MwujFkF77iq47hKboJi86eyAKV61OhcA4gWMMJL8jsSW8O4MSMfSZRHTJj6KucuWpcIhYJuhKTFvj7nPDG3bP1l"
		const stringkLRAzRS = "MgpGtmcvuPk2apqCXO91JlpsjOAoY7L5LSLvg9AivKKH2BgfZJn9vQXBYaec8GPzWbJxua5tO"
		const uintMfWc9o4 = BigInt("63")
//		const uint256HrdSq0e = await GardenContractV2OHJUAZX.totalGardenSupply.call(stringF9loc0A, {from: accounts[3]});
//		const stringiD4v4J4 = await GardenContractV2OHJUAZX.harvestAllBeds.call(stringkLRAzRS, {from: accounts[2]});
//		const uint256wbP6fNW = await GardenContractV2OHJUAZX.getTotalsTLPHarvest.call(uintMfWc9o4, {from: accounts[4]});

		await expect(GardenContractV2OHJUAZX.totalGardenSupply.call(stringF9loc0A, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresswz4aDPf = "0x0000000000000000000000000000000000000001"
		const addressdZjReS0 = accounts[1]
		const addresspPMRJXN = accounts[0]
		const GardenContractV2VjZnzdu = await GardenContractV2.new(addresswz4aDPf, addressdZjReS0, addresspPMRJXN, {from: accounts[3]});
		const uintE0MBtRY = BigInt("155")
		const stringhTowjB1 = "RxSx"
		const addresssLK0BWr = "0x0000000000000000000000000000000000000000"
		const uintMPhCWyY = BigInt("11")
		const stringhUagy7 = "Nf9XOQxwlFxH70Tcg94ET870DMpUCX9HC1XJTkvWTM0m2SF66ydV9gSeNjp1c8JeVbDYG3KnFdxtz7fhE9DwH"
		const addressfrT53a = accounts[2]
//		const stringyfhwbY9 = await GardenContractV2VjZnzdu.harvest.call(stringhTowjB1, uintE0MBtRY, {from: accounts[2]});
//		const addressOrzfiv4 = await GardenContractV2VjZnzdu.changeBenefitiary.call(addresssLK0BWr, {from: accounts[3]});
//		const stringUYwW8JU = await GardenContractV2VjZnzdu.withdraw.call(stringhUagy7, uintMPhCWyY, {from: accounts[2]});
//		const addressiGckTFA = await GardenContractV2VjZnzdu.changeBenefitiary.call(addressfrT53a, {from: accounts[1]});

		await expect(GardenContractV2VjZnzdu.harvest.call(stringhTowjB1, uintE0MBtRY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressYJ01EUG = "0x0000000000000000000000000000000000000001"
		const addressx4JdFxv = accounts[1]
		const addressZEPmRcJ = accounts[0]
		const GardenContractV2VjZnzdu = await GardenContractV2.new(addressYJ01EUG, addressx4JdFxv, addressZEPmRcJ, {from: accounts[3]});
		const boolmWtwJgb = true
		const uintGVVVaDo = BigInt("129")
		const stringP7nkLK = "7w0FWDXpNP11KVHgSKy1PRnohQNMgIPRlc4NnzEdygdVy2jSY7"
		const uintL8lAugA = BigInt("638")
		const uintGVFacZT = BigInt("155")
		const stringhTowjB1 = "RxSx"
		const uintcvVmqoc = BigInt("115")
		const stringoV5CbAC = "HC2vgkpGbGV77xPumhsWn52LHKXe9OwM3QqfFMjRHKNCVWgAQhDrd"
		const uintpqrJCHK = BigInt("11")
		const stringhUagy7 = "Nf9XOQxwlFxH70Tcg94ET870DMpUCX9HC1XJTkvWzM0m2SF66ydV9gSeNjp1c8JeVbDYG3KnFdxtz7fhE9DwH"
		const addressFKNyJo = accounts[3]
//		const uint256R6WR3yQ = await GardenContractV2VjZnzdu.plant.call(uintL8lAugA, stringP7nkLK, uintGVVVaDo, boolmWtwJgb, {from: accounts[4]});
//		const stringyfhwbY9 = await GardenContractV2VjZnzdu.harvest.call(stringhTowjB1, uintGVFacZT, {from: accounts[2]});
//		await GardenContractV2VjZnzdu.totalBedSupply.call(stringoV5CbAC, uintcvVmqoc, {from: accounts[4]});
//		const stringUYwW8JU = await GardenContractV2VjZnzdu.withdraw.call(stringhUagy7, uintpqrJCHK, {from: accounts[2]});
//		const addressiGckTFA = await GardenContractV2VjZnzdu.changeBenefitiary.call(addressFKNyJo, {from: accounts[1]});

		await expect(GardenContractV2VjZnzdu.plant.call(uintL8lAugA, stringP7nkLK, uintGVVVaDo, boolmWtwJgb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressWQHHyqM = accounts[2]
		const addressIXBVFky = accounts[0]
		const addressuLrg36r = accounts[3]
		const GardenContractV2jtY3e36 = await GardenContractV2.new(addressWQHHyqM, addressIXBVFky, addressuLrg36r, {from: accounts[3]});
		const uintl5SRxEi = BigInt("20")
		const uintie7QFY7 = BigInt("361")
		const uintsCQCH4 = BigInt("138")
		const stringTOZ6Ov5 = "B"
		const uintW4Xn7yQ = BigInt("17")
		const uinta7UJTfK = BigInt("118")
		const stringhIdsMK6 = "ch45VgOwsYvugnQb18tBapDkkFppDrSt12LK7etJDkUCX4h3HRSLOXt3MBPPm9dj9T8aRQSicCCEkUJf"
		const addressfUiGhvb = accounts[1]
		const stringEqN8KGD = "LCDx7Y5a3MOkXPgHR7TcyJrOcHyc1vetHYtMoFPG4RyCY"
		const addressiXEm4w = accounts[0]
//		const uint256gHYnZTH = await GardenContractV2jtY3e36.getTotalrTLPHarvest.call(uintl5SRxEi, {from: accounts[5]});
//		const stringLoe30nf = await GardenContractV2jtY3e36.decompose.call(stringTOZ6Ov5, uintsCQCH4, uintie7QFY7, {from: accounts[0]});
//		const uint256vYDrQe2 = await GardenContractV2jtY3e36.getTotalrTLPHarvest.call(uintW4Xn7yQ, {from: accounts[4]});
//		const stringCIMEes4 = await GardenContractV2jtY3e36.harvest.call(stringhIdsMK6, uinta7UJTfK, {from: accounts[0]});
//		const addressxa2HPe = await GardenContractV2jtY3e36.changeOwner.call(addressfUiGhvb, {from: accounts[1]});
//		const uint25627fLOj = await GardenContractV2jtY3e36.balanceOf.call(addressiXEm4w, stringEqN8KGD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2jtY3e36.getTotalrTLPHarvest.call(uintl5SRxEi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresscfx9Zdz = "0x0000000000000000000000000000000000000001"
		const addressN5LcyE9 = accounts[1]
		const addresso0mmVN = accounts[0]
		const GardenContractV2VjZnzdu = await GardenContractV2.new(addresscfx9Zdz, addressN5LcyE9, addresso0mmVN, {from: accounts[3]});
		const uintvEby5Ry = BigInt("50")
		const string26dHCD = "ztX8GHIIZSXOA575LOSgClU4bDPnVxjAUzbmH9CUEE"
		const uintiEw7LKU = BigInt("140")
		const stringA4FjxLp = "joMnTKmi9PZsXYiDeh"
		const addressx2xTW0f = accounts[0]
		const uintUam6oxx = BigInt("5")
		const stringFb6PyS = "SffAKurXpW4pfxVfJqJXT7qumGpjYto7VoBtrCC9NB3roNclOFmYrbe9KeBJCTYuxYhxgdleiz58vTm9E78qTsdcjXX"
//		const uint256p5U70J = await GardenContractV2VjZnzdu.timeUntilNextTLP.call(string26dHCD, uintvEby5Ry, {from: accounts[0]});
//		const uint256acD3VRI = await GardenContractV2VjZnzdu.growthRemaining.call(addressx2xTW0f, stringA4FjxLp, uintiEw7LKU, {from: accounts[1]});
//		const stringszkP5yV = await GardenContractV2VjZnzdu.claimDecompose.call(stringFb6PyS, uintUam6oxx, {from: accounts[3]});

		await expect(GardenContractV2VjZnzdu.timeUntilNextTLP.call(string26dHCD, uintvEby5Ry, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresslW3BeX8 = accounts[2]
		const addresswDCerZA = accounts[5]
		const addressHq123Vq = accounts[1]
		const GardenContractV2GsrvN73 = await GardenContractV2.new(addresslW3BeX8, addresswDCerZA, addressHq123Vq, {from: accounts[3]});
		const stringdCAqJ8G = "4ZNIRghRSXjgd9XghsvJ6UVCrRrID465Pae"
		const addressB3hHq3F = accounts[2]
		const stringYS3Z3V0 = "r4AKCgceYLoZblhaLUqvEzGGRY17eavohlbzUdHwa202mGK2MYqNKEsCLNBgeNdE6i0SiCEOaH6d6qQ"
		const addressipwwpip = accounts[0]
//		const uint256JqPRggE = await GardenContractV2GsrvN73.balanceOf.call(addressB3hHq3F, stringdCAqJ8G, {from: accounts[4]});
//		const uint256YC1BJk = await GardenContractV2GsrvN73.balanceOf.call(addressipwwpip, stringYS3Z3V0, {from: accounts[5]});

		await expect(GardenContractV2GsrvN73.balanceOf.call(addressB3hHq3F, stringdCAqJ8G, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressp4gCi8 = accounts[2]
		const addressPQAA1R = accounts[0]
		const addressd1sQXEq = accounts[3]
		const GardenContractV2jtY3e36 = await GardenContractV2.new(addressp4gCi8, addressPQAA1R, addressd1sQXEq, {from: accounts[3]});
		const addressiJrAhg = accounts[2]
		const uintAGqTtl = BigInt("228")
		const uintYqbqcS = BigInt("112")
		const uinti3zkZcA = BigInt("62")
//		const addressXIt2v2q = await GardenContractV2jtY3e36.renounceTokenOwner.call(addressiJrAhg, {from: accounts[3]});
//		const uint8zdzpMRZ = await GardenContractV2jtY3e36.setTimeStamp.call(uintYqbqcS, uintAGqTtl, {from: accounts[5]});
//		const uint256vYDrQe2 = await GardenContractV2jtY3e36.getTotalrTLPHarvest.call(uinti3zkZcA, {from: accounts[4]});

		await expect(GardenContractV2jtY3e36.renounceTokenOwner.call(addressiJrAhg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressuFd04Qt = accounts[2]
		const addressvJZOp1R = accounts[5]
		const addresspcscBs6 = accounts[1]
		const GardenContractV2GsrvN73 = await GardenContractV2.new(addressuFd04Qt, addressvJZOp1R, addresspcscBs6, {from: accounts[3]});
		const addressWyWgxxa = accounts[2]
		const addressI4fzDYk = accounts[3]
		const stringZos4pZq = "loitjRXuK7dyjj0JJsmp1EqlNZYcbNzHeLOvaPrYbQdJaV9rx7hRQQEiSYnwW70d0qkTLmkAwv5UJoU2cpSR"
//		const addressMIG7vN3 = await GardenContractV2GsrvN73.addTokenOwner.call(addressI4fzDYk, addressWyWgxxa, {from: accounts[3]});
//		const stringAlUh7WD = await GardenContractV2GsrvN73.harvestAllBeds.call(stringZos4pZq, {from: accounts[2]});

		await expect(GardenContractV2GsrvN73.addTokenOwner.call(addressI4fzDYk, addressWyWgxxa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})