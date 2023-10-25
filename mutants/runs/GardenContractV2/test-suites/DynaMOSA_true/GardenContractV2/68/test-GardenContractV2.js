const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressLhhmWvi = accounts[3]
		const addressz8tDjiX = accounts[3]
		const addressqvj7moK = accounts[0]
		const GardenContractV2jybHlZN = await GardenContractV2.new(addressLhhmWvi, addressz8tDjiX, addressqvj7moK, {from: accounts[1]});
		const stringEkKzcc7 = "uFDXxTxbGNb2d6QJnVuxlaTrQADkbHdNUMpZBBTpyFNogjnMShL5sODrrdICPrCDuIhLQM3kTQA1jrknMiirwQ"
		const addressAvpE118 = "0x0000000000000000000000000000000000000001"
		const uintUAySSfh = BigInt("723")
		const uintdrNDKeq = BigInt("53")
		const stringQLIdlWX = "bHoEim6mI7NAxgA5flC3wsmGHzdrzebay35OpuNfSKPLUi"
		const uint256yGdhS2 = await GardenContractV2jybHlZN.balanceOf.call(addressAvpE118, stringEkKzcc7, {from: accounts[3]});
		const stringsb9Kgjs = await GardenContractV2jybHlZN.decompose.call(stringQLIdlWX, uintdrNDKeq, uintUAySSfh, {from: accounts[3]});

		await expect(GardenContractV2jybHlZN.balanceOf.call(addressAvpE118, stringEkKzcc7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressQOry8I8 = accounts[0]
		const addressL2o95IJ = accounts[3]
		const addressz5KMOb = accounts[5]
		const GardenContractV2O9atIGP = await GardenContractV2.new(addressQOry8I8, addressL2o95IJ, addressz5KMOb, {from: accounts[5]});
		const stringIRDvL3s = "AyUuiwww2"
		const uintsp6NErs = BigInt("21")
		const stringZoNmo5 = "8mBfL8p0zxV2fIIRkXd3KuaFSMLPKPpY9dk4XRNHyYNnxEoY1YDAuBBVpgqU1oOcltGWno2yUsIkTjWdrpwjOwtRs"
		const uintHMmhY5 = BigInt("1644")
		const uintVNcAkNG = BigInt("248")
		const uintk6ONYjx = BigInt("145")
		const addressouwtTHN = accounts[2]
		const address0isIPo = accounts[3]
		const uint256DjZUaZc = await GardenContractV2O9atIGP.totalTLPGrown.call(stringIRDvL3s, {from: "0x0000000000000000000000000000000000000001"});
		const stringlXI25nd = await GardenContractV2O9atIGP.withdraw.call(stringZoNmo5, uintsp6NErs, {from: accounts[3]});
		const uint8BvzyNih = await GardenContractV2O9atIGP.operationBurnMint.call(uintk6ONYjx, uintVNcAkNG, uintHMmhY5, {from: accounts[3]});
		const addressdgeLggs = await GardenContractV2O9atIGP.addTokenOwner.call(address0isIPo, addressouwtTHN, {from: accounts[0]});

		await expect(GardenContractV2O9atIGP.totalTLPGrown.call(stringIRDvL3s, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresslB8JZr1 = accounts[5]
		const addressX5Cg7Sc = accounts[3]
		const addressVda926z = accounts[3]
		const GardenContractV2qOPnhf5 = await GardenContractV2.new(addresslB8JZr1, addressX5Cg7Sc, addressVda926z, {from: accounts[4]});
		const uintJgfxbZx = BigInt("81")
		const stringmWslLwp = "koMJKgpbl4iETnHcrQJB4lH4b6Bbu0p0g2GbgNhMQGH2zLOIsKuj2yURUF4mERw3X7nqlZBM6OTj"
		const stringodK9RoV = "mJo71M249vo6TouRljahhtIhItpiP4lG2XSSv"
		const uintWa313Oq = BigInt("140")
		const uintqCJJf1 = BigInt("7")
		const uintYzfbpbv = BigInt("220")
		const string9vWz8c = "4ACeAEcEJKcP9GHVv4"
		const stringKXOh3nm = "TML9GuyACeunKiqZpDf1qaVm8"
		const uintzWrHaGR = BigInt("294")
		const uintjYKL92B = BigInt("74")
		const uintMyv2gDP = BigInt("134")
		const stringUbZrG6G = await GardenContractV2qOPnhf5.claimDecompose.call(stringmWslLwp, uintJgfxbZx, {from: accounts[0]});
		const stringWbtGJE2 = await GardenContractV2qOPnhf5.harvestAllBeds.call(stringodK9RoV, {from: accounts[2]});
		const uint8D4s5u9P = await GardenContractV2qOPnhf5.zeroHoldings.call(uintqCJJf1, uintWa313Oq, {from: accounts[1]});
		const stringL4zJFOR = await GardenContractV2qOPnhf5.withdraw.call(string9vWz8c, uintYzfbpbv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bL9XoXg = await GardenContractV2qOPnhf5.totalTLPDecomposed.call(stringKXOh3nm, {from: accounts[4]});
		const uint8DLExjqc = await GardenContractV2qOPnhf5.operationBurnMint.call(uintMyv2gDP, uintjYKL92B, uintzWrHaGR, {from: accounts[0]});

		await expect(GardenContractV2qOPnhf5.claimDecompose.call(stringmWslLwp, uintJgfxbZx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresscu527Aq = accounts[3]
		const addressbkchlZ8 = accounts[1]
		const addressFgXPyp = accounts[5]
		const GardenContractV2z9Vua5 = await GardenContractV2.new(addresscu527Aq, addressbkchlZ8, addressFgXPyp, {from: accounts[4]});
		const stringdPUraX2 = "13G9NawcRrwi6QSXEKPizsnjo785sBNve8yV7DT4p9GYchPzs7rg3uQL5ypdtFVvK46ECXtCvz5IueTRS9itmgIhWH"
		const uintLJTaRuC = BigInt("248")
		const uintdkAi8DR = BigInt("200")
		const stringIedrBfD = "prAA4NSsTrdojDOpQTSlWnUm0JcUR7bN6YTo7S06rOvYPg22bfBXNmQv109VyvxYmTcn3FxauvOxqdouCU638HD"
		const stringCU4mT5O = ""
		const addressCTdF7C = accounts[0]
		const uint256sqmfup7 = await GardenContractV2z9Vua5.totalTLPBurnt.call(stringdPUraX2, {from: accounts[1]});
		const uint256ZOcZWVG = await GardenContractV2z9Vua5.getTotalrTLPHarvest.call(uintLJTaRuC, {from: accounts[2]});
		const stringVzWeb4x = await GardenContractV2z9Vua5.claimDecompose.call(stringIedrBfD, uintdkAi8DR, {from: accounts[3]});
		const uint256Fm8GaxN = await GardenContractV2z9Vua5.totalTLPGrown.call(stringCU4mT5O, {from: "0x0000000000000000000000000000000000000001"});
		const addressLLx2uGU = await GardenContractV2z9Vua5.renounceTokenOwner.call(addressCTdF7C, {from: accounts[4]});

		await expect(GardenContractV2z9Vua5.totalTLPBurnt.call(stringdPUraX2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressTD3eDPE = accounts[2]
		const addressAhhG1Iu = accounts[1]
		const addressBzNgdde = accounts[2]
		const GardenContractV2nseqWW5 = await GardenContractV2.new(addressTD3eDPE, addressAhhG1Iu, addressBzNgdde, {from: accounts[2]});
		const addressrfq1q3L = accounts[4]
		const addressJGybXzk = accounts[1]
		const uintSSCKbVP = BigInt("3")
		const stringe0nGywl = "yAcQskUzKk6l7dBmhdiAC2acqzKel3MCecd9xSXNb5jibBoft79uHshCNK0LDRJSgVm2E4mzsbXkEv8tuw9ScneqR7mL9L45l"
		const stringzSEuEpY = "6yaXfdkbDpX1aTDQ6TzLsqOxPqv1FWBT"
		const uintEVyg8E = BigInt("40")
		const stringJnFUw5u = "y0BNGPKYahLKYtQtkHVBBeQyOQKN213tUnXh1H3utGxkPAfptGnxXWwigMdI"
		const uintpIaWPPM = BigInt("224")
		const stringIJcHkEm = "0bo32fIi5te"
		const addressDpvHAF = await GardenContractV2nseqWW5.addTokenOwner.call(addressJGybXzk, addressrfq1q3L, {from: accounts[3]});
		const stringoynqzQ9 = await GardenContractV2nseqWW5.claimDecompose.call(stringe0nGywl, uintSSCKbVP, {from: accounts[1]});
		const uint256SPwagwF = await GardenContractV2nseqWW5.totalTLPDecomposed.call(stringzSEuEpY, {from: accounts[2]});
		const stringQNgUVem = await GardenContractV2nseqWW5.harvest.call(stringJnFUw5u, uintEVyg8E, {from: accounts[1]});
		const uint256E5mr9YW = await GardenContractV2nseqWW5.timeUntilNextTLP.call(stringIJcHkEm, uintpIaWPPM, {from: accounts[4]});

		await expect(GardenContractV2nseqWW5.addTokenOwner.call(addressJGybXzk, addressrfq1q3L, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressLO59jeQ = accounts[1]
		const addresspunORsC = accounts[0]
		const addressTJOOQgY = accounts[0]
		const GardenContractV2bVIdkCo = await GardenContractV2.new(addressLO59jeQ, addresspunORsC, addressTJOOQgY, {from: accounts[3]});
		const stringSvrr54 = "hFBzzrLsZOrEVeVTNcMNezRSrnUMWhukwiujYhQZtl38JWC"
		const boolCtuQgmj = true
		const uintHTn1foT = BigInt("23")
		const stringprHmdyI = "XwdLRzM9OZPQsppaBEPsqhRMpDHKpA3AeekLhxJcsXgbgw1b3545zIvgEFbpu7s9PJVpHkuHo3FFPaNSL"
		const uintAE3r0SG = BigInt("419")
		const stringft1lkj = "aotRKhlVK07f5uQfU15CAXBBwqaq1dFw1PDt"
		const stringR1QkB4v = "iQRuZd85z37vqUKNsCJjXxLWEW5kuaJqClg"
		const uint256dR7zZZO = await GardenContractV2bVIdkCo.totalTLPGrowing.call(stringSvrr54, {from: accounts[3]});
		const uint256XCg7Eu = await GardenContractV2bVIdkCo.plant.call(uintAE3r0SG, stringprHmdyI, uintHTn1foT, boolCtuQgmj, {from: accounts[3]});
		const string32eh5K = await GardenContractV2bVIdkCo.harvestAllBeds.call(stringft1lkj, {from: accounts[1]});
		const uint256i0nSU0j = await GardenContractV2bVIdkCo.totalTLPBurnt.call(stringR1QkB4v, {from: accounts[2]});

		await expect(GardenContractV2bVIdkCo.totalTLPGrowing.call(stringSvrr54, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressE1RI3w3 = accounts[4]
		const addressgEAuWVj = accounts[0]
		const addressmNKLddr = accounts[3]
		const GardenContractV2kM5hX8 = await GardenContractV2.new(addressE1RI3w3, addressgEAuWVj, addressmNKLddr, {from: "0x0000000000000000000000000000000000000001"});
		const uintq87UOii = BigInt("155")
		const stringHO5L47Q = "WeQNeqY4JuR2Ly3gweAfzdjhgJCWoqbDy1vNufXtvmvc"
		const uintQvqKd1G = BigInt("242")
		const uintf9XXI2S = BigInt("1")
		const uintfNa4d8W = BigInt("133")
		const stringhCMrRpX = "yFzgNU6eQEUlrpu7PzB"
		const uintmJBtlrp = BigInt("227")
		const uintEExMGG = BigInt("81")
		const stringq8iQqjZ = "LFc16dzAIMbSFfUr3XuND42BOsJFGA7W6fXosXSqMY1yCve"
		const addressxdyKXLh = accounts[3]
		const uintFqf75yp = BigInt("60")
		const stringLQ8uimI = await GardenContractV2kM5hX8.withdraw.call(stringHO5L47Q, uintq87UOii, {from: accounts[1]});
		const uint256ZbbDLjn = await GardenContractV2kM5hX8.getTotalrTLPHarvest.call(uintQvqKd1G, {from: "0x0000000000000000000000000000000000000001"});
		const string14Na3S = await GardenContractV2kM5hX8.decompose.call(stringhCMrRpX, uintfNa4d8W, uintf9XXI2S, {from: accounts[0]});
		const uint256ebgjPTD = await GardenContractV2kM5hX8.getTotalsTLPHarvest.call(uintmJBtlrp, {from: accounts[3]});
		const uint256AsAjlEz = await GardenContractV2kM5hX8.growthRemaining.call(addressxdyKXLh, stringq8iQqjZ, uintEExMGG, {from: accounts[1]});
		const uint256wzvvxjQ = await GardenContractV2kM5hX8.getTotalrTLPHarvest.call(uintFqf75yp, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addressBgxFaa = "0x0000000000000000000000000000000000000001"
		const addressHt3CExH = accounts[0]
		const addressKCGjS0P = accounts[0]
		const GardenContractV2vVd3QQ3 = await GardenContractV2.new(addressBgxFaa, addressHt3CExH, addressKCGjS0P, {from: accounts[3]});
		const uintM5WGuwF = BigInt("1021")
		const uintqDegVSk = BigInt("117")
		const uintzXNoFMV = BigInt("153")
		const stringANQTMA8 = "SseIujyfz5gGEJrcl9IXq36gVG81e95bEzwcupUSBHKcchNJyw7"
		const addressQcogzRh = accounts[0]
		const addressBSFvmtl = accounts[4]
		const uint8aYdpkS = await GardenContractV2vVd3QQ3.operationBurnMint.call(uintzXNoFMV, uintqDegVSk, uintM5WGuwF, {from: accounts[1]});
		const uint256luFjag = await GardenContractV2vVd3QQ3.balanceOf.call(addressQcogzRh, stringANQTMA8, {from: accounts[5]});
		const addressAzVPvy = await GardenContractV2vVd3QQ3.changeBenefitiary.call(addressBSFvmtl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2vVd3QQ3.operationBurnMint.call(uintzXNoFMV, uintqDegVSk, uintM5WGuwF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressLaPJXkh = accounts[3]
		const addressX4Mhjj = accounts[1]
		const addressvIKWfx = accounts[5]
		const GardenContractV2z9Vua5 = await GardenContractV2.new(addressLaPJXkh, addressX4Mhjj, addressvIKWfx, {from: accounts[4]});
		const uintBn8h5XI = BigInt("248")
		const addressdEGlOLF = accounts[3]
		const stringCU4mT5O = ""
		const boolWyz16b = true
		const uintwfx4bvU = BigInt("114")
		const stringEeJgazP = "QoRXiqYK4fs7tSDa9bMm"
		const uintoVXIBM1 = BigInt("606")
		const addressQzfyQ1 = accounts[5]
		const uint256ZOcZWVG = await GardenContractV2z9Vua5.getTotalrTLPHarvest.call(uintBn8h5XI, {from: accounts[2]});
		const addresstKn3TKu = await GardenContractV2z9Vua5.changeOwner.call(addressdEGlOLF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Fm8GaxN = await GardenContractV2z9Vua5.totalTLPGrown.call(stringCU4mT5O, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xWid8vc = await GardenContractV2z9Vua5.plant.call(uintoVXIBM1, stringEeJgazP, uintwfx4bvU, boolWyz16b, {from: accounts[5]});
		const addressLLx2uGU = await GardenContractV2z9Vua5.renounceTokenOwner.call(addressQzfyQ1, {from: accounts[4]});

		await expect(GardenContractV2z9Vua5.getTotalrTLPHarvest.call(uintBn8h5XI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressLCphPvG = accounts[5]
		const addressnEjnLbu = accounts[3]
		const addressjXp0e3o = accounts[3]
		const GardenContractV2qOPnhf5 = await GardenContractV2.new(addressLCphPvG, addressnEjnLbu, addressjXp0e3o, {from: accounts[4]});
		const stringTIE73i2 = "9KFzq8CJk946bgaE4Vg6nF89rlyuNIUP4137WG6Dkm3Mp7"
		const uinttxgOqbi = BigInt("81")
		const stringmWslLwp = "koMJKgpbl4iETnHcrQJB4lH4b6Bbu0p0g2GbgNhMQGH2zLOIsKuj2yURUF4mERw3X7nqlZBM6OTj"
		const uint7i09OX = BigInt("755")
		const uintREojd8h = BigInt("84")
		const uinttrG3Cqq = BigInt("3")
		const stringodK9RoV = "mJo71M249vo6TouRljahhtIhItpiP4lG2HXSSv"
		const stringMiCc5gD = "Mik2hDT81SGtMI4esxohnuu3ZzjSU7yzBCeRJRV"
		const stringKXOh3nm = "TML9GuyACeunKiqZpDf1qaVm8"
		const uintk5lh3Zb = BigInt("294")
		const uintOnhToZL = BigInt("74")
		const uintnjheZBT = BigInt("134")
		const uint256Rws510 = await GardenContractV2qOPnhf5.totalGardenSupply.call(stringTIE73i2, {from: accounts[4]});
		const stringUbZrG6G = await GardenContractV2qOPnhf5.claimDecompose.call(stringmWslLwp, uinttxgOqbi, {from: accounts[0]});
		const uint8Y4pwE7s = await GardenContractV2qOPnhf5.operationBurnMint.call(uinttrG3Cqq, uintREojd8h, uint7i09OX, {from: accounts[0]});
		const stringWbtGJE2 = await GardenContractV2qOPnhf5.harvestAllBeds.call(stringodK9RoV, {from: accounts[2]});
		const uint2561eeeTh = await GardenContractV2qOPnhf5.totalTLPGrown.call(stringMiCc5gD, {from: accounts[0]});
		const uint256bL9XoXg = await GardenContractV2qOPnhf5.totalTLPDecomposed.call(stringKXOh3nm, {from: accounts[4]});
		const uint8DLExjqc = await GardenContractV2qOPnhf5.operationBurnMint.call(uintnjheZBT, uintOnhToZL, uintk5lh3Zb, {from: accounts[0]});

		await expect(GardenContractV2qOPnhf5.totalGardenSupply.call(stringTIE73i2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressy0qdctb = accounts[0]
		const addressa9EEXH = accounts[0]
		const addressAHGw5to = accounts[0]
		const GardenContractV2W21yvQf = await GardenContractV2.new(addressy0qdctb, addressa9EEXH, addressAHGw5to, {from: accounts[2]});
		const uintfuPlPYc = BigInt("122")
		const stringQ7ZZem8 = "9MtRmGjrrDeJUfkbcXqXwstaGeegCAhsaluCF129DdKM2"
		const uintO3epSvt = BigInt("219")
		const uintanhg3K5 = BigInt("15")
		const stringcgmK4La = "JUaTjS09lFqVbU1ubS7qeoaJC"
		const stringOhp6Szs = "ASLd6nixCamV3iNLA6bMf"
		const addresswz5XPc9 = accounts[4]
		await GardenContractV2W21yvQf.totalBedSupply.call(stringQ7ZZem8, uintfuPlPYc, {from: accounts[0]});
		const uint256PtOLjbf = await GardenContractV2W21yvQf.getTotalrTLPHarvest.call(uintO3epSvt, {from: accounts[2]});
		const uint256jiokkg1 = await GardenContractV2W21yvQf.getTotalrTLPHarvest.call(uintanhg3K5, {from: accounts[1]});
		const stringVjZTtQd = await GardenContractV2W21yvQf.harvestAllBeds.call(stringcgmK4La, {from: accounts[3]});
		const uint256u5Jf2wD = await GardenContractV2W21yvQf.balanceOf.call(addresswz5XPc9, stringOhp6Szs, {from: accounts[4]});

		await expect(GardenContractV2W21yvQf.totalBedSupply.call(stringQ7ZZem8, uintfuPlPYc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressYPgJSvZ = accounts[3]
		const addressOIrj91l = accounts[3]
		const addressJykKlvL = accounts[0]
		const GardenContractV2jybHlZN = await GardenContractV2.new(addressYPgJSvZ, addressOIrj91l, addressJykKlvL, {from: accounts[1]});
		const uintdvqG3KK = BigInt("723")
		const uintFn7rRHn = BigInt("56")
		const stringQLIdlWX = "bHoEim6mI7NAxgA5flC3wsmGHzdrzebay35OpuNfSKPLUi"
		const stringsb9Kgjs = await GardenContractV2jybHlZN.decompose.call(stringQLIdlWX, uintFn7rRHn, uintdvqG3KK, {from: accounts[3]});

		await expect(GardenContractV2jybHlZN.decompose.call(stringQLIdlWX, uintFn7rRHn, uintdvqG3KK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressl55l2hM = accounts[3]
		const addressldq7k2L = accounts[3]
		const addressXyEyWD = accounts[0]
		const GardenContractV2jybHlZN = await GardenContractV2.new(addressl55l2hM, addressldq7k2L, addressXyEyWD, {from: accounts[1]});
		const uintRpZTBmE = BigInt("144")
		const stringEhtuFy0 = ""
		const stringEkKzcc7 = "uFDXxTxbGNb2d6QJnVuxlaTrQADkbHdNUMpZBBTpyFNogjnMShL5sODrrdICPrCDuIhLQM3kTQA1jrknMiirwQ"
		const addressgzcxgTu = "0x0000000000000000000000000000000000000001"
		const uintRQEdGcl = BigInt("1905")
		const uintAVMrLTu = BigInt("231")
		const stringh9OKG95 = "WD1mBrPLlasi8HVPu82SsODPNOs"
		const stringcYWlRTZ = await GardenContractV2jybHlZN.withdraw.call(stringEhtuFy0, uintRpZTBmE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yGdhS2 = await GardenContractV2jybHlZN.balanceOf.call(addressgzcxgTu, stringEkKzcc7, {from: accounts[3]});
		const stringDx7J1cg = await GardenContractV2jybHlZN.decompose.call(stringh9OKG95, uintAVMrLTu, uintRQEdGcl, {from: accounts[3]});

		await expect(GardenContractV2jybHlZN.withdraw.call(stringEhtuFy0, uintRpZTBmE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressCkbPPkV = accounts[4]
		const addressLG3h4Pu = "0x0000000000000000000000000000000000000001"
		const addressnatEU3a = accounts[3]
		const GardenContractV2JB8Qq9z = await GardenContractV2.new(addressCkbPPkV, addressLG3h4Pu, addressnatEU3a, {from: accounts[4]});
		const uintSXK5y61 = BigInt("188")
		const stringX7abBPV = "LFGpdcIDah"
		const addressyE3YBpW = accounts[4]
		const uintEjSMyO = BigInt("140")
		const uintD52UR8e = BigInt("80")
		const uintu82omWl = BigInt("233")
		const stringMA3raf = "lYGAwi921In6WGD35cxqyzRBl"
		const bool6jg7J2 = false
		const uintHVHFv3c = BigInt("247")
		const stringexJeRkh = "RfHg31"
		const uintl1Puwt = BigInt("1470")
		const uint256jVGjWrO = await GardenContractV2JB8Qq9z.growthRemaining.call(addressyE3YBpW, stringX7abBPV, uintSXK5y61, {from: "0x0000000000000000000000000000000000000001"});
		const uint8HgMg15o = await GardenContractV2JB8Qq9z.setTimeStamp.call(uintD52UR8e, uintEjSMyO, {from: accounts[0]});
		const stringNk5Nx9n = await GardenContractV2JB8Qq9z.claimDecompose.call(stringMA3raf, uintu82omWl, {from: "0x0000000000000000000000000000000000000001"});
		const uint256zUwQKlm = await GardenContractV2JB8Qq9z.plant.call(uintl1Puwt, stringexJeRkh, uintHVHFv3c, bool6jg7J2, {from: accounts[3]});

		await expect(GardenContractV2JB8Qq9z.growthRemaining.call(addressyE3YBpW, stringX7abBPV, uintSXK5y61, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressSDu0z0a = accounts[5]
		const addressv5xSmrG = accounts[5]
		const addresszAlKcM4 = accounts[3]
		const GardenContractV2YkpjQVM = await GardenContractV2.new(addressSDu0z0a, addressv5xSmrG, addresszAlKcM4, {from: accounts[1]});
		const boolfemQpBe = false
		const uintxp2bik1 = BigInt("196")
		const stringH5lCnPY = "ulQIMwSW2tZBhzIWjYeLsdFu4XYXcMQ7ITooEYLlz0Vy"
		const uintbUuHDLz = BigInt("1888")
		const uintfM5f9G5 = BigInt("245")
		const uintIYcA3U6 = BigInt("130")
		const uintVsdbkFN = BigInt("283")
		const uintWZKIII = BigInt("245")
		const stringlCv9VVg = "wyNduB80ZidiU0sWXVzH"
		const addressUP2phNN = accounts[3]
		const addresscQaCSWh = accounts[0]
		const uintoaCnkK7 = BigInt("223")
		const stringtJlG6sx = "t8MBtvCUOZTbRzUejmRa9nnbg103P21w1YIJc4jk1RRwJTeAguaJ4TGuB85sVp9L5k935RCqBBpPjhqB3PlSFXMfs7sLEN1n"
		const uintKxwjXQI = BigInt("966")
		const uintqqOrAFg = BigInt("90")
		const uintKPyQbOw = BigInt("244")
		const uint256BXZgJVm = await GardenContractV2YkpjQVM.plant.call(uintbUuHDLz, stringH5lCnPY, uintxp2bik1, boolfemQpBe, {from: accounts[2]});
		const uint8uUPFyL5 = await GardenContractV2YkpjQVM.zeroHoldings.call(uintIYcA3U6, uintfM5f9G5, {from: accounts[4]});
		const stringwisZnMx = await GardenContractV2YkpjQVM.decompose.call(stringlCv9VVg, uintWZKIII, uintVsdbkFN, {from: accounts[4]});
		const address4WZ3zT = await GardenContractV2YkpjQVM.addTokenOwner.call(addresscQaCSWh, addressUP2phNN, {from: accounts[5]});
		const stringPIPLFR = await GardenContractV2YkpjQVM.withdraw.call(stringtJlG6sx, uintoaCnkK7, {from: accounts[3]});
		const uint8WOLLGCw = await GardenContractV2YkpjQVM.operationBurnMint.call(uintKPyQbOw, uintqqOrAFg, uintKxwjXQI, {from: accounts[0]});

		await expect(GardenContractV2YkpjQVM.plant.call(uintbUuHDLz, stringH5lCnPY, uintxp2bik1, boolfemQpBe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressPWiJp6t = accounts[3]
		const addressSw5VifO = accounts[3]
		const addressJOWuu9u = accounts[0]
		const GardenContractV2jybHlZN = await GardenContractV2.new(addressPWiJp6t, addressSw5VifO, addressJOWuu9u, {from: accounts[1]});
		const uintr2hSyQW = BigInt("165")
		const stringE410kZ = "CvHAqUnb9w9FqNuar1LbmL0jP602ElbCLvq62Bdddha665vSdS27NjElsrHNjEY7XpDl12aCxk"
		const uintg2ZJn3N = BigInt("4")
		const stringHLvvTBE = "KrHyUAAfGSyCaEn08vK"
		const stringEkKzcc7 = "uFDXxTxbGNb2d6QJnVuxlaTrQADkbHdNUMpZBBTpyFNogjnMShL5sODrdICPrCDuIgLQM3kTQA1jrknMiirwQ"
		const addressK7ZCB2G = "0x0000000000000000000000000000000000000002"
		const stringEHT6ZQf = "P1IoczeO2wYeXEiUgEij7w8wqNaFUVPqoGC9cFwrm"
		const uint256uQydM0 = await GardenContractV2jybHlZN.timeUntilNextTLP.call(stringE410kZ, uintr2hSyQW, {from: accounts[4]});
		const stringzygQBR = await GardenContractV2jybHlZN.claimDecompose.call(stringHLvvTBE, uintg2ZJn3N, {from: accounts[2]});
		const uint256yGdhS2 = await GardenContractV2jybHlZN.balanceOf.call(addressK7ZCB2G, stringEkKzcc7, {from: accounts[3]});
		const uint256hp3j5x5 = await GardenContractV2jybHlZN.totalTLPBurnt.call(stringEHT6ZQf, {from: accounts[0]});

		await expect(GardenContractV2jybHlZN.timeUntilNextTLP.call(stringE410kZ, uintr2hSyQW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresssBUx4FF = accounts[3]
		const addresspj1cFhX = accounts[3]
		const addresszNxVAY7 = accounts[0]
		const GardenContractV2jybHlZN = await GardenContractV2.new(addresssBUx4FF, addresspj1cFhX, addresszNxVAY7, {from: accounts[1]});
		const stringBehSmXV = "SEf3MOsvoYXECYOGKlMehmi"
		const stringEkKzcc7 = "uFDXxTxbGNb2d6QJnVuxlaTrQADkbHdNUMpZBBTpyFNogjnMShL5sODrdICPrCDuIgLQM3kTQA1jrknMiirwQ"
		const addressHl3EhOi = accounts[4]
		const stringK9oO2lk = await GardenContractV2jybHlZN.harvestAllBeds.call(stringBehSmXV, {from: accounts[4]});
		const uint256yGdhS2 = await GardenContractV2jybHlZN.balanceOf.call(addressHl3EhOi, stringEkKzcc7, {from: accounts[3]});

		await expect(GardenContractV2jybHlZN.harvestAllBeds.call(stringBehSmXV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressAyFESzW = accounts[3]
		const addressU5GQUt = accounts[3]
		const addresstNr0MH = accounts[0]
		const GardenContractV2jybHlZN = await GardenContractV2.new(addressAyFESzW, addressU5GQUt, addresstNr0MH, {from: accounts[1]});
		const uintK5Vayaz = BigInt("79")
		const uintnpfdfrC = BigInt("155")
		const uintOE7vRKo = BigInt("51")
		const uintoOE6FnT = BigInt("171")
		const stringE410kZ = "CvHAqUnb9w9FqNuar1LbmL0jP602ElbCLvq62Bdddha665vSdS27NjElsrHNjEY7XpDl12aCxk"
		const stringEHT6ZQf = "P1IoczeN2wYeXEiUgEij7w8wqNaFUVPqoGC9cFwrm"
		const uint256p1TWXMe = await GardenContractV2jybHlZN.getTotalsTLPHarvest.call(uintK5Vayaz, {from: "0x0000000000000000000000000000000000000001"});
		const uint8hDs5Woh = await GardenContractV2jybHlZN.zeroHoldings.call(uintOE7vRKo, uintnpfdfrC, {from: accounts[1]});
		const uint256uQydM0 = await GardenContractV2jybHlZN.timeUntilNextTLP.call(stringE410kZ, uintoOE6FnT, {from: accounts[4]});
		const uint256hp3j5x5 = await GardenContractV2jybHlZN.totalTLPBurnt.call(stringEHT6ZQf, {from: accounts[0]});

		await expect(GardenContractV2jybHlZN.getTotalsTLPHarvest.call(uintK5Vayaz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresszTiBOzx = accounts[5]
		const addressH4mJdVY = accounts[3]
		const addressfl8dSCp = accounts[3]
		const GardenContractV2qOPnhf5 = await GardenContractV2.new(addresszTiBOzx, addressH4mJdVY, addressfl8dSCp, {from: accounts[4]});
		const uintIAcpO4V = BigInt("238")
		const stringwrhqzTr = "gQzGTlrqH"
		const uintQwa9Pr6 = BigInt("118")
		const stringmWslLwp = "koMKgpbl4iETnHcrQJB4lH4b6Bbu0p0g2GbgNhMQGH2zLOIsKuj2yURUF4mERw3X7nqlZBM6OTj"
		const stringnoqzMB1 = await GardenContractV2qOPnhf5.harvest.call(stringwrhqzTr, uintIAcpO4V, {from: accounts[4]});
		const stringUbZrG6G = await GardenContractV2qOPnhf5.claimDecompose.call(stringmWslLwp, uintQwa9Pr6, {from: accounts[0]});

		await expect(GardenContractV2qOPnhf5.harvest.call(stringwrhqzTr, uintIAcpO4V, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressv7uhSbJ = accounts[3]
		const addressJZBfRfX = accounts[5]
		const addressMYym3wO = accounts[1]
		const GardenContractV2zhI8gjM = await GardenContractV2.new(addressv7uhSbJ, addressJZBfRfX, addressMYym3wO, {from: accounts[4]});
		const stringEdUkIYb = "d5FjqWBNuErPHCVr13vhuzhEGNH9rHrIl9CTUUmwK4btONuv9GjBocqDdcPGS8"
		const stringxeGC09m = "hTVAUF2p"
		const addresslwVByB = accounts[3]
		const addressWJKrG4T = accounts[4]
		const stringVowME8H = "RcZbXSzmIhOZ7DaR0VvbSqyliSRpCdz36s6qIj3XeEL"
		const uint256EH0m73t = await GardenContractV2zhI8gjM.totalTLPDecomposed.call(stringEdUkIYb, {from: accounts[0]});
		const uint256BdWIi9v = await GardenContractV2zhI8gjM.balanceOf.call(addresslwVByB, stringxeGC09m, {from: accounts[0]});
		const addresspR60mJF = await GardenContractV2zhI8gjM.changeBenefitiary.call(addressWJKrG4T, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tPdwyhD = await GardenContractV2zhI8gjM.totalTLPGrown.call(stringVowME8H, {from: accounts[2]});

		await expect(GardenContractV2zhI8gjM.totalTLPDecomposed.call(stringEdUkIYb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresstZAkucd = "0x0000000000000000000000000000000000000001"
		const addressWHwGOsj = accounts[4]
		const addressg1zcDD1 = accounts[5]
		const GardenContractV2Ksg6feE = await GardenContractV2.new(addresstZAkucd, addressWHwGOsj, addressg1zcDD1, {from: accounts[1]});
		const addressSPNovl = accounts[2]
		const uintj41cTp = BigInt("183")
		const stringHrIzOan = "KGgzRIDLV3zz1TKsEbkQIGwctNenlLTJU8pbQ0i27ZVwdHGhlg8fEtgbeJuiufYG70EI6ioE"
		const addresskjJI31a = accounts[3]
		const addressUzpUubk = await GardenContractV2Ksg6feE.renounceTokenOwner.call(addressSPNovl, {from: accounts[1]});
		const string0dyCXc = await GardenContractV2Ksg6feE.withdraw.call(stringHrIzOan, uintj41cTp, {from: accounts[0]});
		const addressr8LfbBw = await GardenContractV2Ksg6feE.renounceTokenOwner.call(addresskjJI31a, {from: accounts[5]});

		await expect(GardenContractV2Ksg6feE.renounceTokenOwner.call(addressSPNovl, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJaapzKH = accounts[4]
		const addresswBvvjG = "0x0000000000000000000000000000000000000001"
		const addresstJkYKUJ = accounts[3]
		const GardenContractV2JB8Qq9z = await GardenContractV2.new(addressJaapzKH, addresswBvvjG, addresstJkYKUJ, {from: accounts[4]});
		const addressOu2wluu = "0x0000000000000000000000000000000000000001"
		const uintgrpIizT = BigInt("113")
		const addressZfl4L5 = await GardenContractV2JB8Qq9z.changeBenefitiary.call(addressOu2wluu, {from: accounts[4]});
		const uint256j1iDDu = await GardenContractV2JB8Qq9z.getTotalrTLPHarvest.call(uintgrpIizT, {from: accounts[4]});

		await expect(GardenContractV2JB8Qq9z.getTotalrTLPHarvest.call(uintgrpIizT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressKzjfe0M = accounts[3]
		const addressnH0CvxM = accounts[3]
		const addressdrWp2L9 = accounts[0]
		const GardenContractV2jybHlZN = await GardenContractV2.new(addressKzjfe0M, addressnH0CvxM, addressdrWp2L9, {from: accounts[1]});
		const addressO4jj2gY = accounts[2]
		const uintVh0lmbS = BigInt("213")
		const stringEhtuFy0 = ""
		const addressk97LUWj = await GardenContractV2jybHlZN.changeOwner.call(addressO4jj2gY, {from: accounts[1]});
		const stringcYWlRTZ = await GardenContractV2jybHlZN.withdraw.call(stringEhtuFy0, uintVh0lmbS, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2jybHlZN.withdraw.call(stringEhtuFy0, uintVh0lmbS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressQ8eAwa0 = accounts[4]
		const addressXLZuM4W = "0x0000000000000000000000000000000000000001"
		const addressKe9bcW5 = accounts[3]
		const GardenContractV2JB8Qq9z = await GardenContractV2.new(addressQ8eAwa0, addressXLZuM4W, addressKe9bcW5, {from: accounts[4]});
		const uintxGGyTUd = BigInt("9")
		const uintmlwyT0z = BigInt("130")
		const uintwQBmyoH = BigInt("134")
		const stringlUEOYyu = "SPf8hCoLkZH5VlJWFHvsqAAq1pk5eOgDe8n7keuMiJ9X8HtwSSNZwkyT3PWGPG1ieJr2Ve2wDoOu4lSKpC42uPdy"
		const uint256LnsoxI = await GardenContractV2JB8Qq9z.getTotalrTLPHarvest.call(uintxGGyTUd, {from: accounts[2]});
		const uint256qHSjZHT = await GardenContractV2JB8Qq9z.getTotalsTLPHarvest.call(uintmlwyT0z, {from: accounts[3]});
		const stringuG2lxPf = await GardenContractV2JB8Qq9z.withdraw.call(stringlUEOYyu, uintwQBmyoH, {from: accounts[5]});

		await expect(GardenContractV2JB8Qq9z.getTotalrTLPHarvest.call(uintxGGyTUd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressvbvVPO = accounts[3]
		const addressTfaCcLv = accounts[3]
		const addressZq3pius = accounts[0]
		const GardenContractV2jybHlZN = await GardenContractV2.new(addressvbvVPO, addressTfaCcLv, addressZq3pius, {from: accounts[1]});
		const addressPwkAqc7 = accounts[3]
		const addresszeaz49E = accounts[0]
		const uinthlgvSKw = BigInt("7")
		const uintG0Veajs = BigInt("138")
		const uintBys4Z3K = BigInt("179")
		const stringEhtuFy0 = ""
		const addressSYnbtFa = await GardenContractV2jybHlZN.addTokenOwner.call(addresszeaz49E, addressPwkAqc7, {from: accounts[1]});
		const uint8YRbnzp = await GardenContractV2jybHlZN.zeroHoldings.call(uintG0Veajs, uinthlgvSKw, {from: accounts[1]});
		const stringcYWlRTZ = await GardenContractV2jybHlZN.withdraw.call(stringEhtuFy0, uintBys4Z3K, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2jybHlZN.addTokenOwner.call(addresszeaz49E, addressPwkAqc7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})