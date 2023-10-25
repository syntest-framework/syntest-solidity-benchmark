const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addresswyvS9zG = accounts[1]
		const addressJTAoQOv = accounts[3]
		const addressOEsNTT1 = accounts[1]
		const GardenContractV2YbRguY2 = await GardenContractV2.new(addresswyvS9zG, addressJTAoQOv, addressOEsNTT1, {from: accounts[1]});
		const addressbj3rQsO = accounts[4]
		const addressskAzp4H = accounts[0]
		const addresswAWix5Z = await GardenContractV2YbRguY2.renounceTokenOwner.call(addressbj3rQsO, {from: accounts[4]});
		const addressZ5nvcX = await GardenContractV2YbRguY2.changeOwner.call(addressskAzp4H, {from: accounts[3]});

		await expect(GardenContractV2YbRguY2.renounceTokenOwner.call(addressbj3rQsO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressEV0cFhJ = accounts[0]
		const addresssi9IcGO = accounts[3]
		const addressyfcl9Xc = accounts[2]
		const GardenContractV2jlQRbdZ = await GardenContractV2.new(addressEV0cFhJ, addresssi9IcGO, addressyfcl9Xc, {from: accounts[4]});
		const uintp1gbwAS = BigInt("95")
		const stringKQXHe8c = "crAGrI9hANKI5zBdiUWGH5bbkugPSxIkL68NbKp7xuKTZBmPgse"
		const uintsOMNbWf = BigInt("72")
		const uintQBRJgq0 = BigInt("204")
		const uintw0eeuLT = BigInt("32")
		const boolBFnTCMI = true
		const uintyUK2YUg = BigInt("129")
		const stringVGx9Qa9 = "udyPoap5rpdBfuka1JhESxHDpbnvJl7byoqjLAg7cAGTqfAa4obRbouvUv94T"
		const uintaFPpshP = BigInt("904")
		const uintAE9tPJ = BigInt("233")
		await GardenContractV2jlQRbdZ.totalBedSupply.call(stringKQXHe8c, uintp1gbwAS, {from: accounts[5]});
		const uint8xlvnqlO = await GardenContractV2jlQRbdZ.zeroHoldings.call(uintQBRJgq0, uintsOMNbWf, {from: accounts[2]});
		const uint25612ZMsP = await GardenContractV2jlQRbdZ.getTotalsTLPHarvest.call(uintw0eeuLT, {from: accounts[2]});
		const uint256GeCZdiN = await GardenContractV2jlQRbdZ.plant.call(uintaFPpshP, stringVGx9Qa9, uintyUK2YUg, boolBFnTCMI, {from: accounts[3]});
		const uint256dvSnq6 = await GardenContractV2jlQRbdZ.getTotalrTLPHarvest.call(uintAE9tPJ, {from: accounts[0]});

		await expect(GardenContractV2jlQRbdZ.totalBedSupply.call(stringKQXHe8c, uintp1gbwAS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressnxtLafF = accounts[2]
		const addressAFzy9wu = accounts[4]
		const addressUbVdcJA = accounts[1]
		const GardenContractV2n2tRhrx = await GardenContractV2.new(addressnxtLafF, addressAFzy9wu, addressUbVdcJA, {from: accounts[1]});
		const uintjz0Cvk = BigInt("87")
		const stringkoYcrUh = "XahC1m"
		const addressMxAg41A = accounts[3]
		const stringITxLx7x = "AikcMxlF6QG7fPGjeMoRzPf5wY7Q86wYJSw01d1VmPKiq58G"
		const uintuky3wku = BigInt("88")
		const uintWuKwwgx = BigInt("58")
		const stringc9bgdSE = "5xRXBkNeoIM59MXPp5hScVatAzpIqNOuJ"
		const stringyJgDvt9 = await GardenContractV2n2tRhrx.claimDecompose.call(stringkoYcrUh, uintjz0Cvk, {from: accounts[1]});
		const addressluhjU7L = await GardenContractV2n2tRhrx.renounceTokenOwner.call(addressMxAg41A, {from: accounts[0]});
		const uint256pTK995E = await GardenContractV2n2tRhrx.totalTLPGrown.call(stringITxLx7x, {from: accounts[0]});
		const uint8TGTdCyL = await GardenContractV2n2tRhrx.setTimeStamp.call(uintWuKwwgx, uintuky3wku, {from: accounts[2]});
		const uint256fK37A00 = await GardenContractV2n2tRhrx.totalTLPGrown.call(stringc9bgdSE, {from: accounts[3]});

		await expect(GardenContractV2n2tRhrx.claimDecompose.call(stringkoYcrUh, uintjz0Cvk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressksHHxwC = accounts[1]
		const addressSkyIdEf = accounts[0]
		const addressDk6gA66 = accounts[2]
		const GardenContractV2QveqG6f = await GardenContractV2.new(addressksHHxwC, addressSkyIdEf, addressDk6gA66, {from: accounts[2]});
		const uintekMHUaP = BigInt("248")
		const uintN3vAo3 = BigInt("916")
		const uintP1mQc0v = BigInt("7")
		const stringYMYEDjW = "nWY7kDeoGOlOIzvO44cNMJNGrb79LT"
		const uintfsLBFHw = BigInt("121")
		const stringmXHjUqg = "Ctws8qKyLIgDjU49e5Rtzd80mjfIxvU6kE5x"
		const uint256dh6LHbU = await GardenContractV2QveqG6f.getTotalsTLPHarvest.call(uintekMHUaP, {from: accounts[0]});
		const stringOd3CMy5 = await GardenContractV2QveqG6f.decompose.call(stringYMYEDjW, uintP1mQc0v, uintN3vAo3, {from: accounts[1]});
		const uint256r0fhzx = await GardenContractV2QveqG6f.getTotalrTLPHarvest.call(uintfsLBFHw, {from: accounts[4]});
		const uint256dRaGP9C = await GardenContractV2QveqG6f.totalGardenSupply.call(stringmXHjUqg, {from: accounts[4]});

		await expect(GardenContractV2QveqG6f.getTotalsTLPHarvest.call(uintekMHUaP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressNIKAtzS = accounts[3]
		const addressl27BuS = accounts[3]
		const addressBeyLUES = accounts[1]
		const GardenContractV2kGCrEa = await GardenContractV2.new(addressNIKAtzS, addressl27BuS, addressBeyLUES, {from: accounts[4]});
		const stringSUBF7xY = "XUqEFqA7C167gzdLNeQ43cEmRpeh7YMZNeFuUcOEKruF2u9iVq9fpWouhPa4EokmfKdrumuNnR6Kuw6p0WpBkGh5jW64CvXWdW3"
		const addresszqTMPt = accounts[4]
		const addressq4YgMeQ = accounts[5]
		const boolV0Oz6lw = true
		const uintawym81j = BigInt("221")
		const stringwJKKP4h = "Zg4SUWH0"
		const uintsYRq6T7 = BigInt("1630")
		const stringDqDAJV = "s3Txp14thYkwawNlMkhk5Er8WoREhbJUZnERfCrtNglsvqmHnDmBRzSynIrpJTf3jTaMvbhyBJgTMW57Mx7m8r8cX6Q"
		const uint256k9biwId = await GardenContractV2kGCrEa.totalTLPBurnt.call(stringSUBF7xY, {from: accounts[2]});
		const addressetcTE6 = await GardenContractV2kGCrEa.addTokenOwner.call(addressq4YgMeQ, addresszqTMPt, {from: accounts[3]});
		const uint256VndwJQN = await GardenContractV2kGCrEa.plant.call(uintsYRq6T7, stringwJKKP4h, uintawym81j, boolV0Oz6lw, {from: accounts[5]});
		const stringcb1hyCl = await GardenContractV2kGCrEa.harvestAllBeds.call(stringDqDAJV, {from: accounts[1]});

		await expect(GardenContractV2kGCrEa.totalTLPBurnt.call(stringSUBF7xY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const address5zMhxx = accounts[4]
		const addresseYXjYTQ = accounts[1]
		const addressctBE3Dm = accounts[5]
		const GardenContractV2yL9xLE0 = await GardenContractV2.new(address5zMhxx, addresseYXjYTQ, addressctBE3Dm, {from: "0x0000000000000000000000000000000000000001"});
		const addressDx0z5I9 = accounts[2]
		const addressC5vMTC = accounts[3]
		const addressE2iPELx = accounts[3]
		const uintsjm52OT = BigInt("205")
		const addressqittwZX = await GardenContractV2yL9xLE0.addTokenOwner.call(addressC5vMTC, addressDx0z5I9, {from: accounts[5]});
		const addresseDmhIie = await GardenContractV2yL9xLE0.changeBenefitiary.call(addressE2iPELx, {from: accounts[5]});
		const uint256yujOvum = await GardenContractV2yL9xLE0.getTotalrTLPHarvest.call(uintsjm52OT, {from: accounts[2]});
	});

	it('test for GardenContractV2', async () => {
		const addressVvV9nW = accounts[1]
		const addressPwn2yX7 = accounts[3]
		const addressgJi2xH5 = accounts[1]
		const GardenContractV2YbRguY2 = await GardenContractV2.new(addressVvV9nW, addressPwn2yX7, addressgJi2xH5, {from: accounts[1]});
		const stringxabSsJk = "FodmkgajErH6245gwkwnh67JfaZwdo8wUvnAZwEbqMVovT4jGrmG4kPYKwqattRh86a3EK8"
		const uintTJfCYMU = BigInt("238")
		const stringVBEnaay = "2vpQyJRd26q3k29JgTUmqpUlbqjcpuEVbTDJ42TfyEKDTYsRsMjsUG6cWiAS4ld9Zx"
		const addressrvilNQT = accounts[5]
		const addressuHkhxHP = accounts[0]
		const stringlJwNt9c = await GardenContractV2YbRguY2.harvestAllBeds.call(stringxabSsJk, {from: "0x0000000000000000000000000000000000000001"});
		await GardenContractV2YbRguY2.totalBedSupply.call(stringVBEnaay, uintTJfCYMU, {from: accounts[3]});
		const addresswAWix5Z = await GardenContractV2YbRguY2.renounceTokenOwner.call(addressrvilNQT, {from: accounts[4]});
		const addressZ5nvcX = await GardenContractV2YbRguY2.changeOwner.call(addressuHkhxHP, {from: accounts[3]});

		await expect(GardenContractV2YbRguY2.harvestAllBeds.call(stringxabSsJk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressiwUbUQK = accounts[4]
		const addressK1g9i0 = accounts[1]
		const addresslbnfbrw = "0x0000000000000000000000000000000000000001"
		const GardenContractV2GvMG4Lk = await GardenContractV2.new(addressiwUbUQK, addressK1g9i0, addresslbnfbrw, {from: accounts[0]});
		const uintEaZIZXU = BigInt("855")
		const uintUvqorkl = BigInt("61")
		const uintPGIF5qu = BigInt("77")
		const stringqxbNyYq = "u4EPlewBlT14KybTuwMINz1i7SF3x32zwoz1m5e1PYS83MUPcQlyoHyDXB1S"
		const uintNRhlUBd = BigInt("10")
		const stringwTKvUXK = "TlpiqlewUC6Nct76HlevHM7eojw2Kto4hezZoUc9Dc3rcPc8jRQtpQnAP"
		const stringnZdnqiE = "lWWjfiltuLeC8E4BmK0zBSF8U70mqb1z4Cqff7klrrkZ7By20Rc2zfeEf7zlzqcq19B7XKEUINHzACl8RaRKJC2"
		const uintapbIaTZ = BigInt("180")
		const stringeaG8Vzu = "d0LvrxO1zdFD2lI2pHAtP8OpXxXrYd3B1PfJmpCmy9GmocpvybZn8iSflJLUnAFTnpxaqHIO1b3fA3naS4GSxLTMTIdLViq"
		const uint8KO5Cuwg = await GardenContractV2GvMG4Lk.operationBurnMint.call(uintPGIF5qu, uintUvqorkl, uintEaZIZXU, {from: accounts[4]});
		const uint256SMQs4Fg = await GardenContractV2GvMG4Lk.totalTLPBurnt.call(stringqxbNyYq, {from: accounts[4]});
		await GardenContractV2GvMG4Lk.totalBedSupply.call(stringwTKvUXK, uintNRhlUBd, {from: "0x0000000000000000000000000000000000000001"});
		const stringSfbmeEN = await GardenContractV2GvMG4Lk.harvestAllBeds.call(stringnZdnqiE, {from: accounts[3]});
		await GardenContractV2GvMG4Lk.totalBedSupply.call(stringeaG8Vzu, uintapbIaTZ, {from: accounts[4]});

		await expect(GardenContractV2GvMG4Lk.operationBurnMint.call(uintPGIF5qu, uintUvqorkl, uintEaZIZXU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresspPR0lel = accounts[1]
		const addressKAERDJE = accounts[3]
		const addressayc6cjH = accounts[1]
		const GardenContractV2YbRguY2 = await GardenContractV2.new(addresspPR0lel, addressKAERDJE, addressayc6cjH, {from: accounts[1]});
		const stringRQBuwnO = "AvSe3MsKt7U7tdSEeZlqDmkOUYmKc7CL2xSuaAod"
		const uint256EIGWaXL = await GardenContractV2YbRguY2.totalTLPGrowing.call(stringRQBuwnO, {from: accounts[2]});

		await expect(GardenContractV2YbRguY2.totalTLPGrowing.call(stringRQBuwnO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressaykVUu5 = accounts[4]
		const addressM91QAXB = "0x0000000000000000000000000000000000000001"
		const addressmQrj6AZ = accounts[1]
		const GardenContractV2UjZRqJr = await GardenContractV2.new(addressaykVUu5, addressM91QAXB, addressmQrj6AZ, {from: accounts[5]});
		const uintReGSqy2 = BigInt("198")
		const stringcz7bVnc = "bSldpsg4IUzZVuu9zI8ljyctE77ingnEIl2kswKAFakpDb1rfoh6lZUSGFOiGlnVZAaDUlkEbstedTK"
		const stringEI6DeW7 = "NQmNLo"
		const string8WH7Ke = await GardenContractV2UjZRqJr.harvest.call(stringcz7bVnc, uintReGSqy2, {from: accounts[0]});
		const stringEsFtrCD = await GardenContractV2UjZRqJr.harvestAllBeds.call(stringEI6DeW7, {from: accounts[3]});

		await expect(GardenContractV2UjZRqJr.harvest.call(stringcz7bVnc, uintReGSqy2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresscMrcU0B = accounts[1]
		const addressAvKT6eM = accounts[3]
		const addressoqaJHNj = accounts[1]
		const GardenContractV2YbRguY2 = await GardenContractV2.new(addresscMrcU0B, addressAvKT6eM, addressoqaJHNj, {from: accounts[1]});
		const uinttkhpAEd = BigInt("165")
		const stringxabSsJk = "FodmkgajErH6245gwkwnh67JfaZwdo8wUvnAZwEbqMVovT4jGrmG4kPYKwqattRh86a3EK8"
		const uinthTjxg3 = BigInt("38")
		const stringMGaL288 = "mqMakkTaRfmg7GVUFBUQrFHl0NONmdHTbtqLd5yEpQdV4vDvAQGNwN9PJU1bTDegSRKR2QQTHLpA8mv0hSMHTzynu"
		const addresssUPhDWL = accounts[1]
		const addressbJKMIGd = accounts[4]
		const addressb8Q82S = accounts[0]
		const uint256wlqJ2Ax = await GardenContractV2YbRguY2.getTotalrTLPHarvest.call(uinttkhpAEd, {from: "0x0000000000000000000000000000000000000001"});
		const stringlJwNt9c = await GardenContractV2YbRguY2.harvestAllBeds.call(stringxabSsJk, {from: "0x0000000000000000000000000000000000000001"});
		await GardenContractV2YbRguY2.totalBedSupply.call(stringMGaL288, uinthTjxg3, {from: accounts[2]});
		const addressCqRcjiP = await GardenContractV2YbRguY2.addTokenOwner.call(addressbJKMIGd, addresssUPhDWL, {from: accounts[0]});
		const addressZ5nvcX = await GardenContractV2YbRguY2.changeOwner.call(addressb8Q82S, {from: accounts[3]});

		await expect(GardenContractV2YbRguY2.getTotalrTLPHarvest.call(uinttkhpAEd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressXt5EO9t = accounts[4]
		const addresskelboJM = "0x0000000000000000000000000000000000000001"
		const addresszBOIAi6 = accounts[1]
		const GardenContractV2UjZRqJr = await GardenContractV2.new(addressXt5EO9t, addresskelboJM, addresszBOIAi6, {from: accounts[5]});
		const boolcb50I6 = false
		const uinty2d5Gsr = BigInt("100")
		const stringxosHQXl = "t1"
		const uintklbsfEB = BigInt("1903")
		const stringEI6DeW7 = "NQmqLo"
		const uint256rZzRVzc = await GardenContractV2UjZRqJr.plant.call(uintklbsfEB, stringxosHQXl, uinty2d5Gsr, boolcb50I6, {from: "0x0000000000000000000000000000000000000001"});
		const stringEsFtrCD = await GardenContractV2UjZRqJr.harvestAllBeds.call(stringEI6DeW7, {from: accounts[3]});

		await expect(GardenContractV2UjZRqJr.plant.call(uintklbsfEB, stringxosHQXl, uinty2d5Gsr, boolcb50I6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressEOGPMIy = accounts[2]
		const addressIZGkrJb = "0x0000000000000000000000000000000000000001"
		const addressJIHMcdq = accounts[0]
		const GardenContractV2F22hz2L = await GardenContractV2.new(addressEOGPMIy, addressIZGkrJb, addressJIHMcdq, {from: accounts[4]});
		const uintgRDBtSH = BigInt("10")
		const stringOM799lI = "rwsShULGa1NRqS69ioRvALjGDhyBbjlJkGmSBl"
		const uintpjMpHog = BigInt("117")
		const uintJRyUVb = BigInt("8")
		const stringGaBDspA = "wRzuZCP3vKA7bA8M3EDtMc9yEKjKM4SSezYpTJUp"
		const addressDDHnXZr = accounts[0]
		const addressd4svGOX = accounts[3]
		const uintr1zUoHH = BigInt("163")
		const stringGMYVI1Y = "WKjQUILtBHiAKsdr"
		const stringIEDwXWX = await GardenContractV2F22hz2L.withdraw.call(stringOM799lI, uintgRDBtSH, {from: "0x0000000000000000000000000000000000000001"});
		const uint8JlQSMyz = await GardenContractV2F22hz2L.zeroHoldings.call(uintJRyUVb, uintpjMpHog, {from: accounts[1]});
		const uint256TGvI5O = await GardenContractV2F22hz2L.totalTLPGrown.call(stringGaBDspA, {from: accounts[4]});
		const addressST1JBT1 = await GardenContractV2F22hz2L.addTokenOwner.call(addressd4svGOX, addressDDHnXZr, {from: accounts[3]});
		await GardenContractV2F22hz2L.totalBedSupply.call(stringGMYVI1Y, uintr1zUoHH, {from: accounts[5]});

		await expect(GardenContractV2F22hz2L.withdraw.call(stringOM799lI, uintgRDBtSH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressgXqnWd0 = accounts[1]
		const addressgTmcuR6 = accounts[3]
		const addressfNgMRuv = accounts[1]
		const GardenContractV2YbRguY2 = await GardenContractV2.new(addressgXqnWd0, addressgTmcuR6, addressfNgMRuv, {from: accounts[1]});
		const string67QeKP = "TBJmAAK6nZ3JRgDw9OlEQ7"
		const stringRQBuwnO = "AvSe3MsKt7U7tdSEeZlqDmkOUYmKc7CL2xSuMAod"
		const uint256bQBKevu = await GardenContractV2YbRguY2.totalTLPGrown.call(string67QeKP, {from: accounts[3]});
		const uint256EIGWaXL = await GardenContractV2YbRguY2.totalTLPGrowing.call(stringRQBuwnO, {from: accounts[2]});

		await expect(GardenContractV2YbRguY2.totalTLPGrown.call(string67QeKP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressbGdk4b3 = accounts[4]
		const addressxDSh0Z = "0x0000000000000000000000000000000000000001"
		const addressku7BfV1 = accounts[1]
		const GardenContractV2UjZRqJr = await GardenContractV2.new(addressbGdk4b3, addressxDSh0Z, addressku7BfV1, {from: accounts[5]});
		const uintwZWVVip = BigInt("1510")
		const uinteOr30sR = BigInt("56")
		const stringhwNvssG = "5EEe5PXaW"
		const uintwpagyd = BigInt("41")
		const stringkWnVcTL = "3XmELj4r7Y"
		const addressvz5lzid = accounts[1]
		const stringEI6DeW7 = "NQqo"
		const stringeMnGhp = await GardenContractV2UjZRqJr.decompose.call(stringhwNvssG, uinteOr30sR, uintwZWVVip, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xjvYOg = await GardenContractV2UjZRqJr.growthRemaining.call(addressvz5lzid, stringkWnVcTL, uintwpagyd, {from: accounts[5]});
		const stringEsFtrCD = await GardenContractV2UjZRqJr.harvestAllBeds.call(stringEI6DeW7, {from: accounts[3]});

		await expect(GardenContractV2UjZRqJr.decompose.call(stringhwNvssG, uinteOr30sR, uintwZWVVip, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressEKCoheh = accounts[4]
		const addressHyeGcNx = "0x0000000000000000000000000000000000000001"
		const addressX5sipRx = accounts[1]
		const GardenContractV2UjZRqJr = await GardenContractV2.new(addressEKCoheh, addressHyeGcNx, addressX5sipRx, {from: accounts[5]});
		const uintI4i1GZ = BigInt("41")
		const stringkWnVcTL = "3XmELj4r7Y"
		const addressxW6LsiM = accounts[1]
		const stringiEJGpY2 = "kTZv9jNPD3i7lzEbd4HFo9YCgX9tazEONpLehKQwhfmkfHNR1x4YeuirsGJ6V1B"
		const uintOh4Db8N = BigInt("1")
		const stringBCHPgrz = "YoNrKDDpUqvkDCQof"
		const stringEI6DeW7 = "NQqo"
		const uint256xjvYOg = await GardenContractV2UjZRqJr.growthRemaining.call(addressxW6LsiM, stringkWnVcTL, uintI4i1GZ, {from: accounts[5]});
		const uint256pVdhkA = await GardenContractV2UjZRqJr.totalTLPGrowing.call(stringiEJGpY2, {from: accounts[1]});
		await GardenContractV2UjZRqJr.totalBedSupply.call(stringBCHPgrz, uintOh4Db8N, {from: accounts[1]});
		const stringEsFtrCD = await GardenContractV2UjZRqJr.harvestAllBeds.call(stringEI6DeW7, {from: accounts[3]});

		await expect(GardenContractV2UjZRqJr.growthRemaining.call(addressxW6LsiM, stringkWnVcTL, uintI4i1GZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressld60jMU = accounts[1]
		const address4ehcMp = accounts[3]
		const addressRzMUclU = accounts[1]
		const GardenContractV2YbRguY2 = await GardenContractV2.new(addressld60jMU, address4ehcMp, addressRzMUclU, {from: accounts[1]});
		const stringkflDwK6 = "7cSO8Q45p81fJICe3s2IFyHI5EorN"
		const addressNHZQZ9v = accounts[4]
		const stringRQBuwnO = "AvSe3MsKt7U7tdSEeZlqDmkOUYmKc7CL2xSuaAod"
		const boolPsEao4D = false
		const uintWLT2Pdu = BigInt("33")
		const stringY6tljAu = "gDB05wxtk"
		const uintKpCAmI2 = BigInt("742")
		const stringo85sqqA = "rEpudLfcNijhdhuzEMT9RwveYwJHvTFMBvDqOkrBPGGh5dlLvdeztci8Hujh5GGlBwM2KL4fAwnU6ERYoUDJZYB3G8"
		const uint256ZwVuurU = await GardenContractV2YbRguY2.balanceOf.call(addressNHZQZ9v, stringkflDwK6, {from: accounts[0]});
		const uint256EIGWaXL = await GardenContractV2YbRguY2.totalTLPGrowing.call(stringRQBuwnO, {from: accounts[2]});
		const uint256fPvn2Bn = await GardenContractV2YbRguY2.plant.call(uintKpCAmI2, stringY6tljAu, uintWLT2Pdu, boolPsEao4D, {from: accounts[0]});
		const uint256hp4IZgC = await GardenContractV2YbRguY2.totalTLPBurnt.call(stringo85sqqA, {from: accounts[5]});

		await expect(GardenContractV2YbRguY2.balanceOf.call(addressNHZQZ9v, stringkflDwK6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressA9tdc0r = accounts[4]
		const addressY0Maigc = "0x0000000000000000000000000000000000000001"
		const addressE6fnZff = accounts[1]
		const GardenContractV2UjZRqJr = await GardenContractV2.new(addressA9tdc0r, addressY0Maigc, addressE6fnZff, {from: accounts[5]});
		const uintGWv8zCx = BigInt("140")
		const stringI5BftRz = "jWs1lSYCgtvDiAKjEPCiRCbVPXcZAur9WedQOy3ehWcTJJsFxv7GR6t9rdJVXYyt1b2orZvh1VGSgFyB6It3BWH"
		const stringEI6DeW7 = "LQqLo"
		const uint256hLawaB = await GardenContractV2UjZRqJr.timeUntilNextTLP.call(stringI5BftRz, uintGWv8zCx, {from: accounts[3]});
		const stringEsFtrCD = await GardenContractV2UjZRqJr.harvestAllBeds.call(stringEI6DeW7, {from: accounts[3]});

		await expect(GardenContractV2UjZRqJr.timeUntilNextTLP.call(stringI5BftRz, uintGWv8zCx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressQs7g2GM = accounts[1]
		const addressJbUo78o = accounts[3]
		const addresswDl76sw = accounts[1]
		const GardenContractV2YbRguY2 = await GardenContractV2.new(addressQs7g2GM, addressJbUo78o, addresswDl76sw, {from: accounts[1]});
		const stringVg0Gq4 = "9DrzhiR65MWBFjTMiKYbRaLbiP1nsgaEiga2K5MRwRnKOTGSdvuj8JG"
		const addressRF9O4Q = accounts[3]
		const addressEovfAb7 = accounts[3]
		const stringkflDwK6 = "7cSO8Q45p81fJICe3s2IFyHI5EorN"
		const addressAaObLo4 = accounts[4]
		const stringtRAAYP = "Br4F85vOIRoIlalcMPRoatUHuqUIjQi7xos76S"
		const uint256OktYCPI = await GardenContractV2YbRguY2.totalTLPDecomposed.call(stringVg0Gq4, {from: accounts[3]});
		const addresshdcGzHr = await GardenContractV2YbRguY2.addTokenOwner.call(addressEovfAb7, addressRF9O4Q, {from: accounts[0]});
		const uint256ZwVuurU = await GardenContractV2YbRguY2.balanceOf.call(addressAaObLo4, stringkflDwK6, {from: accounts[0]});
		const uint256EIGWaXL = await GardenContractV2YbRguY2.totalTLPGrowing.call(stringtRAAYP, {from: accounts[2]});

		await expect(GardenContractV2YbRguY2.totalTLPDecomposed.call(stringVg0Gq4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressnJnmKP = accounts[1]
		const addressU35vAEu = accounts[3]
		const addressBMipgKe = accounts[1]
		const GardenContractV2YbRguY2 = await GardenContractV2.new(addressnJnmKP, addressU35vAEu, addressBMipgKe, {from: accounts[1]});
		const uintuAj0H3U = BigInt("0")
		const stringqNYPg8 = "ZqlrQcyXnEqWA61rKDdAvGu88rBEpI9SdIlYma4uAOHXv726Lu1zackY4wQBX"
		const uintPNbzCEn = BigInt("197")
		const uintGL4INBB = BigInt("104")
		const stringsrNfeM8 = "JWiF3RLdnPonm0lhpkX4wz3zJWrWx34"
		const addressJvtcDL = accounts[1]
		const stringRQBuwnO = "AvSe3MsKt7U7tdSEeZlqzmkOUYmKc7CL2xSuMAod"
		const uint256wEJ3ARK = await GardenContractV2YbRguY2.getTotalrTLPHarvest.call(uintuAj0H3U, {from: accounts[0]});
		const stringCpbk1V9 = await GardenContractV2YbRguY2.harvestAllBeds.call(stringqNYPg8, {from: accounts[3]});
		const uint256SQNmtkO = await GardenContractV2YbRguY2.getTotalrTLPHarvest.call(uintPNbzCEn, {from: accounts[3]});
		const uint256zfBgBJF = await GardenContractV2YbRguY2.growthRemaining.call(addressJvtcDL, stringsrNfeM8, uintGL4INBB, {from: accounts[0]});
		const uint256EIGWaXL = await GardenContractV2YbRguY2.totalTLPGrowing.call(stringRQBuwnO, {from: accounts[2]});

		await expect(GardenContractV2YbRguY2.getTotalrTLPHarvest.call(uintuAj0H3U, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressF8aymIH = accounts[2]
		const addressBFEnwPb = accounts[5]
		const addressYfKd8Er = accounts[0]
		const GardenContractV2ZN0hc4 = await GardenContractV2.new(addressF8aymIH, addressBFEnwPb, addressYfKd8Er, {from: accounts[3]});
		const addressrBoieNe = "0x0000000000000000000000000000000000000001"
		const stringWIVCja = "JBYweDrUetbni7byIGFQBsCH0gKgELY82Ci4XJpEVDNPFsoXjZKGSLuY"
		const uinttcUeJiI = BigInt("151")
		const uintm4NFBO9 = BigInt("175")
		const booliiV4WhV = true
		const uintGUun3HD = BigInt("224")
		const stringolQCsV = "32RA9WmPDeOxGNZFXdE2vJA5v6zqD4cBaEIAGWeJK"
		const uintGWPdzmZ = BigInt("349")
		const addressvmN6Htu = await GardenContractV2ZN0hc4.renounceTokenOwner.call(addressrBoieNe, {from: accounts[3]});
		const uint256sCXdJua = await GardenContractV2ZN0hc4.totalTLPDecomposed.call(stringWIVCja, {from: accounts[3]});
		const uint8JYwDBy = await GardenContractV2ZN0hc4.zeroHoldings.call(uintm4NFBO9, uinttcUeJiI, {from: accounts[0]});
		const uint256hv5bAaJ = await GardenContractV2ZN0hc4.plant.call(uintGWPdzmZ, stringolQCsV, uintGUun3HD, booliiV4WhV, {from: accounts[3]});

		await expect(GardenContractV2ZN0hc4.renounceTokenOwner.call(addressrBoieNe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressWp3x71W = accounts[1]
		const addressOmlvUw7 = accounts[3]
		const addresswO0qcJn = accounts[1]
		const GardenContractV2YbRguY2 = await GardenContractV2.new(addressWp3x71W, addressOmlvUw7, addresswO0qcJn, {from: accounts[1]});
		const address3DDnkQ = accounts[2]
		const addressQO0MDtM = accounts[1]
		const uintURNDhcT = BigInt("32")
		const stringzuf7RPL = "dOEhcMup8gYrPgt432w156VdV67HifqIoi8HOugPmOpIZRTFAvaysYhGCFcF"
		const stringkflDwK6 = "7cSO8Q45p81fJICe3s2cIFyHI5EorN"
		const addressR7dqJst = "0x0000000000000000000000000000000000000001"
		const addressHY8TLaH = await GardenContractV2YbRguY2.addTokenOwner.call(addressQO0MDtM, address3DDnkQ, {from: accounts[1]});
		const stringXOgGwaX = await GardenContractV2YbRguY2.claimDecompose.call(stringzuf7RPL, uintURNDhcT, {from: accounts[2]});
		const uint256ZwVuurU = await GardenContractV2YbRguY2.balanceOf.call(addressR7dqJst, stringkflDwK6, {from: accounts[0]});

		await expect(GardenContractV2YbRguY2.addTokenOwner.call(addressQO0MDtM, address3DDnkQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressDuBjnox = accounts[1]
		const addressufkCf7n = accounts[3]
		const addressyETcmz7 = accounts[1]
		const GardenContractV2YbRguY2 = await GardenContractV2.new(addressDuBjnox, addressufkCf7n, addressyETcmz7, {from: accounts[1]});
		const addresszn0dj8R = accounts[4]
		const stringRQBuwnO = "AvSe3MsKt7U7tdSEeZlqDmkOUYmKc7CL2xQuaAod"
		const addressbvfMbEu = await GardenContractV2YbRguY2.changeOwner.call(addresszn0dj8R, {from: accounts[1]});
		const uint256EIGWaXL = await GardenContractV2YbRguY2.totalTLPGrowing.call(stringRQBuwnO, {from: accounts[2]});

		await expect(GardenContractV2YbRguY2.totalTLPGrowing.call(stringRQBuwnO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresss1tp3qt = accounts[4]
		const addressMyuwtxt = "0x0000000000000000000000000000000000000001"
		const addressPkNyqcS = accounts[1]
		const GardenContractV2UjZRqJr = await GardenContractV2.new(addresss1tp3qt, addressMyuwtxt, addressPkNyqcS, {from: accounts[5]});
		const stringujPA4Du = "kIpONNvaOPWchdkZVhQlLRqqKEs4HpslXaJ3LVAt0mBHiE9V5TV7GMWCUR6mSeT3SEqZJ9"
		const stringEI6DeW7 = "NQqLo"
		const uint256DUyrF38 = await GardenContractV2UjZRqJr.totalGardenSupply.call(stringujPA4Du, {from: accounts[0]});
		const stringEsFtrCD = await GardenContractV2UjZRqJr.harvestAllBeds.call(stringEI6DeW7, {from: accounts[3]});

		await expect(GardenContractV2UjZRqJr.totalGardenSupply.call(stringujPA4Du, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresslNwIso = accounts[2]
		const addressSVhdNRN = accounts[0]
		const addresskgEk27n = accounts[4]
		const GardenContractV2Uk1nevY = await GardenContractV2.new(addresslNwIso, addressSVhdNRN, addresskgEk27n, {from: accounts[0]});
		const addressrC91YH9 = "0x0000000000000000000000000000000000000001"
		const stringYqI5IM5 = "coFClqTjcXU96"
		const addressr24d4ZC = await GardenContractV2Uk1nevY.changeBenefitiary.call(addressrC91YH9, {from: accounts[0]});
		const uint256fi9keiL = await GardenContractV2Uk1nevY.totalTLPGrowing.call(stringYqI5IM5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2Uk1nevY.totalTLPGrowing.call(stringYqI5IM5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})