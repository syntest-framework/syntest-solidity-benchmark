const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const stringmbTaDs = "vfQP3ma5IvsHtudzfyWIVvmweu1TXXkm3w52kYJwwZ3tvA3qgz"
		const stringNOqDMRu = "n3DL2M9UDFycUhHbLqYmEuMxyN1WrjSXt"
		const uintzzOnFQ6 = BigInt("117")
		const NasiLiquidityPoolFactoryUfMDLvc = await NasiLiquidityPoolFactory.new(stringmbTaDs, stringNOqDMRu, uintzzOnFQ6, {from: accounts[4]});
		const boolhPBGYfH = false
		const addressdyPTIJ = accounts[3]
		const uintzBj6UgL = BigInt("38")
		const uintnzrLl2 = BigInt("1802")
		const uintxZJNUzi = BigInt("806")
		const addressbzrKmkl = accounts[1]
		const uint256JY21JUN = await NasiLiquidityPoolFactoryUfMDLvc.addLpToken.call(uintzBj6UgL, addressdyPTIJ, boolhPBGYfH, {from: accounts[4]});
		const uint256ChXYgik = await NasiLiquidityPoolFactoryUfMDLvc.getBonusMultiplier.call(uintxZJNUzi, uintnzrLl2, {from: accounts[1]});
		const addressKY30tRR = await NasiLiquidityPoolFactoryUfMDLvc.delegates.call(addressbzrKmkl, {from: accounts[3]});
		await NasiLiquidityPoolFactoryUfMDLvc.massUpdatePools.call({from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressARdgawS = accounts[2]
		const addressTPYvzo = accounts[1]
		const uintyBwp6F = BigInt("568")
		const uintxLBwVt = BigInt("1754")
		const NasiLiquidityPoolFactoryipcGNxV = await NasiLiquidityPoolFactory.new(addressARdgawS, addressTPYvzo, uintyBwp6F, uintxLBwVt, {from: accounts[2]});
		const uinto8tb7oE = BigInt("421")
		const addressJOC3XRp = accounts[1]
		const uintmDaFRDV = BigInt("242")
		const addressYDuuU8K = accounts[4]
		const bool3gYVxf = await NasiLiquidityPoolFactoryipcGNxV.mint.call(addressJOC3XRp, uinto8tb7oE, {from: accounts[4]});
		const uint256sXRRFrW = await NasiLiquidityPoolFactoryipcGNxV.emergencyWithdraw.call(uintmDaFRDV, {from: accounts[2]});
		const addressCxzZ5Cd = await NasiLiquidityPoolFactoryipcGNxV.addPauser.call(addressYDuuU8K, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const string665nHJ = "8IxEVjRNwDDmHRKa3SRYGrqUvKCfSBPnEqxLtPF511HyTbguI5tnOQ9gyXRpvgqSEaPnAdB4ORfIhdSJXgGlOid6BgiDIUkQJ"
		const stringAnVdwPH = "fKDjTTb2nB5g9IT6N1EhqkDXs84Kj7SndUkQv4vkjDmRAlyqILdDNREViePMRUStwaqVrejxpM"
		const uintdeAJSTv = BigInt("18")
		const NasiLiquidityPoolFactorytVau1Oi = await NasiLiquidityPoolFactory.new(string665nHJ, stringAnVdwPH, uintdeAJSTv, {from: accounts[1]});
		const uintpCNJjC = BigInt("1726")
		const uintQ8NqrTB = BigInt("10")
		const boolFY5heh = true
		const uinti7oVQ8C = BigInt("747")
		const uinttz4qWd5 = BigInt("1361")
		const uint256P5WMrMc = await NasiLiquidityPoolFactorytVau1Oi.enterStaking.call(uintpCNJjC, {from: accounts[0]});
		const uint256uogdjR = await NasiLiquidityPoolFactorytVau1Oi.leaveStaking.call(uintQ8NqrTB, {from: accounts[4]});
		const uint256g9XD2u = await NasiLiquidityPoolFactorytVau1Oi.setAllocationPoint.call(uinttz4qWd5, uinti7oVQ8C, boolFY5heh, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressB34BlfP = accounts[3]
		const addresseq7NxHc = accounts[0]
		const uintiRkD4qw = BigInt("1318")
		const uintDTKHWOr = BigInt("157")
		const NasiLiquidityPoolFactorybJAVrXr = await NasiLiquidityPoolFactory.new(addressB34BlfP, addresseq7NxHc, uintiRkD4qw, uintDTKHWOr, {from: accounts[2]});
		const boolddtnRS = true
		const uintoy5OTFm = BigInt("1562")
		const uintQnNPEhO = BigInt("599")
		const addresswcTvGcg = accounts[3]
		const uintO87HNoW = BigInt("1769")
		const addressLeGtoFl = accounts[5]
		const addressvq4epWT = "0x0000000000000000000000000000000000000001"
		const addressZwDfv4D = accounts[0]
		const uint256fIhxjtD = await NasiLiquidityPoolFactorybJAVrXr.setAllocationPoint.call(uintQnNPEhO, uintoy5OTFm, boolddtnRS, {from: accounts[2]});
		const addressrD7zx0y = await NasiLiquidityPoolFactorybJAVrXr.setMigrator.call(addresswcTvGcg, {from: accounts[0]});
		const addresswmUdxhS = await NasiLiquidityPoolFactorybJAVrXr.burnFrom.call(addressLeGtoFl, uintO87HNoW, {from: accounts[2]});
		const addressiAjtop = await NasiLiquidityPoolFactorybJAVrXr.delegate.call(addressvq4epWT, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vQm7q8D = await NasiLiquidityPoolFactorybJAVrXr.balanceOf.call(addressZwDfv4D, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringQ2rWre = "bLRRIzzStrFuF9HznsKXx3PBJZsKBLvstfsFxqUMPIULogbB7motAcY1B5N2CJH9DMSHVOsOOFo3itF6KIkAiVMeidocux"
		const stringro9VyOd = "PdqPbjWMrcEXtKvZhfBYpL2tpmuNLdS366OhXse4Kchuams2Yy8loENWQyE3YLw3OF7DAa3LqgRCs"
		const uinti74NYvY = BigInt("220")
		const NasiLiquidityPoolFactoryJ7rBCUh = await NasiLiquidityPoolFactory.new(stringQ2rWre, stringro9VyOd, uinti74NYvY, {from: accounts[2]});
		const addressAHjEKFu = accounts[2]
		const uintjAcvy5c = BigInt("1212")
		const uintbULw7tk = BigInt("1385")
		const uintiZK2RGf = BigInt("225")
		const addressUU4Af3c = accounts[3]
		const uint5LEAS2 = BigInt("128")
		const uintpzwlYjo = BigInt("101")
		const uint256DHc2EjM = await NasiLiquidityPoolFactoryJ7rBCUh.getCurrentVotes.call(addressAHjEKFu, {from: accounts[0]});
		const 
ABMUOx1 = await NasiLiquidityPoolFactoryJ7rBCUh._writeCheckpoint.call(addressUU4Af3c, uintiZK2RGf, uintbULw7tk, uintjAcvy5c, {from: "0x0000000000000000000000000000000000000001"});
		const boolEHQOK7f = await NasiLiquidityPoolFactoryJ7rBCUh.paused.call({from: accounts[3]});
		const uint256LV3wsmp = await NasiLiquidityPoolFactoryJ7rBCUh.getBonusMultiplier.call(uintpzwlYjo, uint5LEAS2, {from: accounts[4]});
		await NasiLiquidityPoolFactoryJ7rBCUh.pause.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressEG37v9r = "0x0000000000000000000000000000000000000001"
		const addressqw1M3Z = accounts[2]
		const uintqk4p6M = BigInt("1762")
		const uintQHFa0oN = BigInt("1836")
		const NasiLiquidityPoolFactoryL6rD53N = await NasiLiquidityPoolFactory.new(addressEG37v9r, addressqw1M3Z, uintqk4p6M, uintQHFa0oN, {from: accounts[3]});
		const addressfqXt1EK = accounts[4]
		const uintZIiBuG = BigInt("703")
		const uintukGD7Gj = BigInt("1281")
		const addressP5dmne = accounts[3]
		const addressqpeYxEl = await NasiLiquidityPoolFactoryL6rD53N.setMigrator.call(addressfqXt1EK, {from: accounts[1]});
		const uint256ISpWR6R = await NasiLiquidityPoolFactoryL6rD53N.enterStaking.call(uintZIiBuG, {from: accounts[1]});
		const uint256PaLMJo = await NasiLiquidityPoolFactoryL6rD53N.getPriorVotes.call(addressP5dmne, uintukGD7Gj, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringTzHFVfR = "RAg7sfvjx7AdEt0qF3Afgd8GRHrjX7XTiLi3jA5T36QtqoBULzaHVWrt4IJuQHCirsF1VbkzA6sYscYZsFbuUSn1"
		const string74W5UE = "s4VkEUZHYUSYlew5OVBDPl7UrLXAv9LANThHN29bwrp2emKpHpQL5d4jF16Uj8DHslRJY6dPJLftq7kC5qE3Nfp0qF3DWiA"
		const uintvtb4RMx = BigInt("150")
		const NasiLiquidityPoolFactoryMDYC6iG = await NasiLiquidityPoolFactory.new(stringTzHFVfR, string74W5UE, uintvtb4RMx, {from: accounts[0]});
		const address6KXe4L = accounts[4]
		const uintY9KWeHS = BigInt("126")
		const addresshREQ1no = accounts[4]
		const uintEg3v752 = BigInt("892")
		const addressTAm21A = accounts[4]
		const boolaS39Ip = await NasiLiquidityPoolFactoryMDYC6iG.isPauser.call(address6KXe4L, {from: accounts[4]});
		const uint256KsbG5QN = await NasiLiquidityPoolFactoryMDYC6iG.leaveStaking.call(uintY9KWeHS, {from: accounts[0]});
		const addressFOKHXDu = await NasiLiquidityPoolFactoryMDYC6iG.delegates.call(addresshREQ1no, {from: accounts[5]});
		const addressgw9Hdof = await NasiLiquidityPoolFactoryMDYC6iG.burnFrom.call(addressTAm21A, uintEg3v752, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringSg1U9EY = "a7JSp1F"
		const stringRguROwh = "ic2OqKyTp7w74y66LT8qkfxi2cIRr2fiv6jB5obMKe2YwmpICpzOYm0AkSR7k8bdTfNhUQ4B"
		const uintNsN2Rd = BigInt("192")
		const NasiLiquidityPoolFactoryZikO4e = await NasiLiquidityPoolFactory.new(stringSg1U9EY, stringRguROwh, uintNsN2Rd, {from: accounts[4]});
		const uintnfucbj7 = BigInt("90")
		const addressFzHm4IH = accounts[0]
		await NasiLiquidityPoolFactoryZikO4e.whenNotPaused.call({from: accounts[2]});
		const uint256A2Dp4GG = await NasiLiquidityPoolFactoryZikO4e.leaveStaking.call(uintnfucbj7, {from: accounts[0]});
		const addressGPRuJa1 = await NasiLiquidityPoolFactoryZikO4e.transferOwnership.call(addressFzHm4IH, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringJkyHR6k = "8USR2DzDMSLzhGjgKz63vev6so4gdZQ9BL4BRIJvodXMSJvPryjJuRhxwM1sucezZvHIUA1vzpoUcNUC"
		const stringTAPsvi6 = "i3XkHlH3XwFifZA8VGJlACgPvnoDCJDgKm62EKD3jfAAbGPVYttuqippXSdn3cJTd"
		const uintxFapMUB = BigInt("76")
		const NasiLiquidityPoolFactoryUraI89b = await NasiLiquidityPoolFactory.new(stringJkyHR6k, stringTAPsvi6, uintxFapMUB, {from: accounts[1]});
		const uintCVpUugG = BigInt("122")
		const uintlm82nB = BigInt("287")
		const addressgrX3pz = accounts[4]
		const uintCLHHXPV = BigInt("1916")
		const addressFGOCjj = accounts[1]
		const boolbUMROGZ = await NasiLiquidityPoolFactoryUraI89b.isOwner.call({from: accounts[2]});
		await NasiLiquidityPoolFactoryUraI89b.massUpdatePools.call({from: accounts[1]});
		const uint256StYBdd1 = await NasiLiquidityPoolFactoryUraI89b.deposit.call(uintlm82nB, uintCVpUugG, {from: accounts[2]});
		const addressXZvjJiO = await NasiLiquidityPoolFactoryUraI89b.addPauser.call(addressgrX3pz, {from: accounts[0]});
		const boolFZUDnR2 = await NasiLiquidityPoolFactoryUraI89b.transfer.call(addressFGOCjj, uintCLHHXPV, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringpBAjbZP = "g6CVLfVe6ETaUdrPywt2NoCjZcpVP6gbgPSsb11hnvarI7Y8DgY02b5IV5vTjPyQVIdiVT57"
		const stringfcZIzOy = "gdlEo2LMNTr2ga3rrLNHqXNbYsV3hjrl1eBCMAcr34sVct5WWUvKMIp8tN6UOk"
		const uintvtUDPwC = BigInt("57")
		const NasiLiquidityPoolFactoryV4t1bfT = await NasiLiquidityPoolFactory.new(stringpBAjbZP, stringfcZIzOy, uintvtUDPwC, {from: "0x0000000000000000000000000000000000000001"});
		const addresstJdVkte = accounts[2]
		const uintkp98uQX = BigInt("1601")
		const addresstuK3Hgx = accounts[1]
		const uintRE1oQ2B = BigInt("1488")
		const addressOxSNkE = accounts[1]
		const boolKHQWTRt = await NasiLiquidityPoolFactoryV4t1bfT.isMinter.call(addresstJdVkte, {from: accounts[4]});
		const boolJQNyQ42 = await NasiLiquidityPoolFactoryV4t1bfT.approve.call(addresstuK3Hgx, uintkp98uQX, {from: accounts[1]});
		const boolfUOv3jv = await NasiLiquidityPoolFactoryV4t1bfT.transfer.call(addressOxSNkE, uintRE1oQ2B, {from: accounts[4]});
		const uint8IVzTWnx = await NasiLiquidityPoolFactoryV4t1bfT.decimals.call({from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressy2QioEx = "0x0000000000000000000000000000000000000001"
		const addressjRsudoK = accounts[2]
		const uintAFYurfZ = BigInt("1762")
		const uintxqOghSs = BigInt("1836")
		const NasiLiquidityPoolFactoryL6rD53N = await NasiLiquidityPoolFactory.new(addressy2QioEx, addressjRsudoK, uintAFYurfZ, uintxqOghSs, {from: accounts[3]});
		const uintEoxmF7E = BigInt("1992")
		const uintfNZvGVQ = BigInt("1281")
		const addressaLab1H1 = accounts[3]
		const uint256xiZrC1D = await NasiLiquidityPoolFactoryL6rD53N.emergencyWithdraw.call(uintEoxmF7E, {from: accounts[1]});
		const uint256PaLMJo = await NasiLiquidityPoolFactoryL6rD53N.getPriorVotes.call(addressaLab1H1, uintfNZvGVQ, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringqQM3ANq = "fO3CpYTFFDH8mi6zjHJJkNWCvur2Rl1KXdB2fYFqLYQJ1LhgYM9DRxJQQvyW4Qs1ihbtIvLFg8mOdFIkLqTAeD"
		const stringBVtADWI = "t1ZNv2HP2xsn7pVom1kM6SDRE7zq5W"
		const uintGiW5dIc = BigInt("175")
		const NasiLiquidityPoolFactoryY9UnlpZ = await NasiLiquidityPoolFactory.new(stringqQM3ANq, stringBVtADWI, uintGiW5dIc, {from: accounts[0]});
		const uinthldrZWW = BigInt("1921")
		const addressGpOREhJ = accounts[3]
		const uintI2XSM2W = BigInt("855")
		const addressnQGO55m = accounts[4]
		const boolAVYF9DU = await NasiLiquidityPoolFactoryY9UnlpZ.paused.call({from: accounts[3]});
		const uint256lt2OyyJ = await NasiLiquidityPoolFactoryY9UnlpZ.getPriorVotes.call(addressGpOREhJ, uinthldrZWW, {from: accounts[4]});
		const booljeFQi7 = await NasiLiquidityPoolFactoryY9UnlpZ.transfer.call(addressnQGO55m, uintI2XSM2W, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressw8jbxX6 = "0x0000000000000000000000000000000000000001"
		const addressowLHkt = accounts[3]
		const uintOiG1DeX = BigInt("1138")
		const uintxi0QwRQ = BigInt("1458")
		const NasiLiquidityPoolFactoryVl1iDt4 = await NasiLiquidityPoolFactory.new(addressw8jbxX6, addressowLHkt, uintOiG1DeX, uintxi0QwRQ, {from: accounts[4]});
		const uintOh941KE = BigInt("341")
		const uintRpkk7OF = BigInt("899")
		const uintIvATGYv = BigInt("297")
		const addressWKvYSKF = accounts[4]
		const addressxGWUap8 = accounts[1]
		const addressRLa19y4 = accounts[0]
		const addressoBiAdTw = accounts[4]
		const uintUDEvNy5 = BigInt("327")
		const addressbw0o7L1 = accounts[3]
		const uint256Oylti2W = await NasiLiquidityPoolFactoryVl1iDt4.getBonusMultiplier.call(uintRpkk7OF, uintOh941KE, {from: accounts[2]});
		const boolhktfmT4 = await NasiLiquidityPoolFactoryVl1iDt4.transferFrom.call(addressxGWUap8, addressWKvYSKF, uintIvATGYv, {from: accounts[5]});
		const uint256GiPGBks = await NasiLiquidityPoolFactoryVl1iDt4.allowance.call(addressoBiAdTw, addressRLa19y4, {from: accounts[0]});
		const boolKkbPvIt = await NasiLiquidityPoolFactoryVl1iDt4.mint.call(addressbw0o7L1, uintUDEvNy5, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressqkSV1Q2 = "0x0000000000000000000000000000000000000001"
		const addressrVCUv3Z = accounts[2]
		const uintuW3JggK = BigInt("1762")
		const uintIx2rC4a = BigInt("1836")
		const NasiLiquidityPoolFactoryL6rD53N = await NasiLiquidityPoolFactory.new(addressqkSV1Q2, addressrVCUv3Z, uintuW3JggK, uintIx2rC4a, {from: accounts[3]});
		const uintsePWYY0 = BigInt("1926")
		const uintTESdpL6 = BigInt("493")
		const uintHr1e69t = BigInt("951")
		const addressurd5OfS = accounts[5]
		const boolOgrFUMP = false
		const addresscEUDyvI = accounts[1]
		const uinthqG4j0k = BigInt("706")
		const addressnISoaCp = accounts[4]
		const uint256nHxCCA = await NasiLiquidityPoolFactoryL6rD53N.withdraw.call(uintTESdpL6, uintsePWYY0, {from: accounts[3]});
		const boolxobMEFS = await NasiLiquidityPoolFactoryL6rD53N.decreaseAllowance.call(addressurd5OfS, uintHr1e69t, {from: accounts[2]});
		const uint256Kd40ES = await NasiLiquidityPoolFactoryL6rD53N.addLpToken.call(uinthqG4j0k, addresscEUDyvI, boolOgrFUMP, {from: accounts[2]});
		const addressqpeYxEl = await NasiLiquidityPoolFactoryL6rD53N.setMigrator.call(addressnISoaCp, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressZf1WW6M = accounts[5]
		const addressSRt22N = accounts[4]
		const uintBtzNq5X = BigInt("1416")
		const uintPRemWNu = BigInt("1291")
		const NasiLiquidityPoolFactoryjLcrFxC = await NasiLiquidityPoolFactory.new(addressZf1WW6M, addressSRt22N, uintBtzNq5X, uintPRemWNu, {from: "0x0000000000000000000000000000000000000001"});
		const bool6yOTWf = false
		const addressaJWlJ3v = accounts[2]
		const uintxbtxtbM = BigInt("1608")
		const uintAhnYwsq = BigInt("761")
		const addressIjrPmZz = accounts[2]
		const addresssLMV2hq = accounts[1]
		const uintbTLauJm = BigInt("2008")
		const uint256bSyQZ5h = await NasiLiquidityPoolFactoryjLcrFxC.addLpToken.call(uintxbtxtbM, addressaJWlJ3v, bool6yOTWf, {from: accounts[0]});
		const boolwcaRWHA = await NasiLiquidityPoolFactoryjLcrFxC.mint.call(addressIjrPmZz, uintAhnYwsq, {from: accounts[1]});
		const addressMvZ9jv = await NasiLiquidityPoolFactoryjLcrFxC.delegate.call(addresssLMV2hq, {from: accounts[5]});
		await NasiLiquidityPoolFactoryjLcrFxC.onlyPauser.call({from: accounts[1]});
		const uint256aEW3US4 = await NasiLiquidityPoolFactoryjLcrFxC.leaveStaking.call(uintbTLauJm, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressbgat7Kd = "0x0000000000000000000000000000000000000001"
		const addressH7rfa0 = accounts[2]
		const uintluYl2g4 = BigInt("1762")
		const uintxuECUIo = BigInt("1836")
		const NasiLiquidityPoolFactoryL6rD53N = await NasiLiquidityPoolFactory.new(addressbgat7Kd, addressH7rfa0, uintluYl2g4, uintxuECUIo, {from: accounts[3]});
		const addressAwkqxB6 = "0x0000000000000000000000000000000000000001"
		const uintpezr4Qr = BigInt("1926")
		const uintpAqjAv6 = BigInt("493")
		const uintUltS3NA = BigInt("951")
		const addresspiOvYPL = accounts[5]
		const boolOgrFUMP = false
		const addressFYKxKIq = accounts[1]
		const uintlzAlZIs = BigInt("706")
		const addressS4Ottka = await NasiLiquidityPoolFactoryL6rD53N.setMigrator.call(addressAwkqxB6, {from: accounts[3]});
		const uint256nHxCCA = await NasiLiquidityPoolFactoryL6rD53N.withdraw.call(uintpAqjAv6, uintpezr4Qr, {from: accounts[3]});
		const boolxobMEFS = await NasiLiquidityPoolFactoryL6rD53N.decreaseAllowance.call(addresspiOvYPL, uintUltS3NA, {from: accounts[2]});
		const uint256Kd40ES = await NasiLiquidityPoolFactoryL6rD53N.addLpToken.call(uintlzAlZIs, addressFYKxKIq, boolOgrFUMP, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringrciJty = "eTKXLU3NcW8hmp8KBR8BJ8tX9xsld3erJhs6d42oktmuaGbXGjT03pMlCJscBsJD19xnIu0Pe5gFVwagOGPort6M"
		const stringWuXveWq = "1TBnKaN7p7bB9hPRd9l7Uf85ihnuRE56rgdzxDdDzSzcY0k5cGv"
		const uintfUtv3N1 = BigInt("39")
		const NasiLiquidityPoolFactoryCmY7B7M = await NasiLiquidityPoolFactory.new(stringrciJty, stringWuXveWq, uintfUtv3N1, {from: accounts[3]});
		const addressiQKjbQE = accounts[1]
		const uintW8HPKJS = BigInt("433")
		const addresstlU8N4 = accounts[1]
		const uintNxAHNS3 = BigInt("1028")
		const addressOIHvYx2 = accounts[5]
		await NasiLiquidityPoolFactoryCmY7B7M.renounceMinter.call({from: accounts[5]});
		const boolyzsZkxl = await NasiLiquidityPoolFactoryCmY7B7M.isMinter.call(addressiQKjbQE, {from: accounts[0]});
		const boolCjlpMA = await NasiLiquidityPoolFactoryCmY7B7M.approve.call(addresstlU8N4, uintW8HPKJS, {from: "0x0000000000000000000000000000000000000001"});
		const addressZpPplu = await NasiLiquidityPoolFactoryCmY7B7M.burnFrom.call(addressOIHvYx2, uintNxAHNS3, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringqwiscHD = "LQoEKwXVGf8Y2hZInSS5HjcwwbMNCDN"
		const stringQKzjNN0 = "VnICmZMbOVSVYF"
		const uintAH3j5tg = BigInt("154")
		const NasiLiquidityPoolFactoryejI8vZe = await NasiLiquidityPoolFactory.new(stringqwiscHD, stringQKzjNN0, uintAH3j5tg, {from: "0x0000000000000000000000000000000000000001"});
		const byteuyWAtKo = "0x060d1e191c0f01060b071e20131c0e130c061616001f060a11121a02071b121e"
		const bytejfOiZfB = "0x1a0e031d100d1d180e1a031d14100f19150b160d081a080412071c0d1c1f1717"
		const uintObzUekh = BigInt("160")
		const uintzLT0Tbv = BigInt("1354")
		const uintZ0WGs21 = BigInt("237")
		const addresslJNpEyO = "0x0000000000000000000000000000000000000001"
		const addressfrLc7uh = accounts[3]
		await NasiLiquidityPoolFactoryejI8vZe.renounceMinter.call({from: accounts[5]});
		const 
BhEvD7v = await NasiLiquidityPoolFactoryejI8vZe.delegateBySig.call(addresslJNpEyO, uintZ0WGs21, uintzLT0Tbv, uintObzUekh, bytejfOiZfB, byteuyWAtKo, {from: accounts[4]});
		await NasiLiquidityPoolFactoryejI8vZe.unpause.call({from: accounts[3]});
		await NasiLiquidityPoolFactoryejI8vZe.onlyOwner.call({from: accounts[0]});
		const addressk6fnM39 = await NasiLiquidityPoolFactoryejI8vZe.delegates.call(addressfrLc7uh, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressSCBKiy3 = accounts[3]
		const addressrvCBW1i = "0x0000000000000000000000000000000000000001"
		const uintk13ReHB = BigInt("1895")
		const uintljZkn8c = BigInt("180")
		const NasiLiquidityPoolFactoryofuvKCs = await NasiLiquidityPoolFactory.new(addressSCBKiy3, addressrvCBW1i, uintk13ReHB, uintljZkn8c, {from: accounts[0]});
		const uintK6UPkm = BigInt("1596")
		const uintXIm1QF = BigInt("1221")
		const uintVfioHFL = BigInt("453")
		const uintwYNjkKE = BigInt("2023")
		const addressIwbA2d6 = accounts[4]
		const uint256UUdoLt = await NasiLiquidityPoolFactoryofuvKCs.enterStaking.call(uintK6UPkm, {from: accounts[4]});
		const uint256fUifHzE = await NasiLiquidityPoolFactoryofuvKCs.withdraw.call(uintVfioHFL, uintXIm1QF, {from: accounts[1]});
		await NasiLiquidityPoolFactoryofuvKCs.onlyMinter.call({from: accounts[2]});
		const boolAszYoD = await NasiLiquidityPoolFactoryofuvKCs.transfer.call(addressIwbA2d6, uintwYNjkKE, {from: accounts[4]});
		const uint8J9t7nPE = await NasiLiquidityPoolFactoryofuvKCs.decimals.call({from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addresso1KDIds = accounts[3]
		const addressza1jK5t = accounts[0]
		const uintxZ9edZn = BigInt("1318")
		const uintEdfgTh5 = BigInt("157")
		const NasiLiquidityPoolFactorybJAVrXr = await NasiLiquidityPoolFactory.new(addresso1KDIds, addressza1jK5t, uintxZ9edZn, uintEdfgTh5, {from: accounts[2]});
		const uintmnlMLSl = BigInt("1225")
		const uintQbK3YW3 = BigInt("821")
		const boolddtnRS = false
		const uintH993Qz2 = BigInt("1562")
		const uintcdlvqJk = BigInt("599")
		const addressOH9AGg = accounts[4]
		const addressHVTt3Y = "0x0000000000000000000000000000000000000001"
		const addressmNu0EF = accounts[0]
		const uint256Jia8PG8 = await NasiLiquidityPoolFactorybJAVrXr.deposit.call(uintQbK3YW3, uintmnlMLSl, {from: accounts[1]});
		const uint256fIhxjtD = await NasiLiquidityPoolFactorybJAVrXr.setAllocationPoint.call(uintcdlvqJk, uintH993Qz2, boolddtnRS, {from: accounts[2]});
		const addressj4j1gZd = await NasiLiquidityPoolFactorybJAVrXr.delegate.call(addressOH9AGg, {from: accounts[2]});
		const addressiAjtop = await NasiLiquidityPoolFactorybJAVrXr.delegate.call(addressHVTt3Y, {from: "0x0000000000000000000000000000000000000001"});
		const uint256vQm7q8D = await NasiLiquidityPoolFactorybJAVrXr.balanceOf.call(addressmNu0EF, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressUmJ4uxb = "0x0000000000000000000000000000000000000001"
		const address6CRQy6 = accounts[2]
		const uinty66EEy = BigInt("1762")
		const uintqwXXdNZ = BigInt("1836")
		const NasiLiquidityPoolFactoryL6rD53N = await NasiLiquidityPoolFactory.new(addressUmJ4uxb, address6CRQy6, uinty66EEy, uintqwXXdNZ, {from: accounts[3]});
		const addressP2xlZgg = "0x0000000000000000000000000000000000000000"
		const uinttsGc2E = BigInt("312")
		const addressXr4mrBt = accounts[3]
		const uintm4UKLF = BigInt("1926")
		const uintUErKKWo = BigInt("493")
		const uintpYJrwT = BigInt("938")
		const uintPP1ryUo = BigInt("951")
		const addressRFxOgo7 = accounts[5]
		const boolOgrFUMP = false
		const addresse1YBpMM = accounts[1]
		const uintm6m3dwp = BigInt("706")
		const addressS4Ottka = await NasiLiquidityPoolFactoryL6rD53N.setMigrator.call(addressP2xlZgg, {from: accounts[3]});
		const boolPY7t0Xo = await NasiLiquidityPoolFactoryL6rD53N.mint.call(addressXr4mrBt, uinttsGc2E, {from: accounts[3]});
		const uint256nHxCCA = await NasiLiquidityPoolFactoryL6rD53N.withdraw.call(uintUErKKWo, uintm4UKLF, {from: accounts[3]});
		const uint256hwAeMvk = await NasiLiquidityPoolFactoryL6rD53N.updatePool.call(uintpYJrwT, {from: accounts[4]});
		const boolxobMEFS = await NasiLiquidityPoolFactoryL6rD53N.decreaseAllowance.call(addressRFxOgo7, uintPP1ryUo, {from: accounts[2]});
		const uint256Kd40ES = await NasiLiquidityPoolFactoryL6rD53N.addLpToken.call(uintm6m3dwp, addresse1YBpMM, boolOgrFUMP, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringXrJq1wD = "v7GX5"
		const stringqm8TcN5 = "s6PbiotFnonXpXbIebce2Q"
		const uintUiXSjEf = BigInt("120")
		const NasiLiquidityPoolFactoryzYgHf1A = await NasiLiquidityPoolFactory.new(stringXrJq1wD, stringqm8TcN5, uintUiXSjEf, {from: accounts[2]});
		const uintOS36mlu = BigInt("1942")
		const addressq1kCLT9 = accounts[2]
		const addressb4Vy7yv = accounts[3]
		const uinty9JPJno = BigInt("1216")
		const addressMXjaYR4 = accounts[4]
		const uintcG50o8t = BigInt("89")
		const addressSY92mCi = "0x0000000000000000000000000000000000000001"
		await NasiLiquidityPoolFactoryzYgHf1A.renounceOwnership.call({from: accounts[2]});
		const addressUM9KVF1 = await NasiLiquidityPoolFactoryzYgHf1A.burnFrom.call(addressq1kCLT9, uintOS36mlu, {from: accounts[1]});
		const uint256LGP7Mh = await NasiLiquidityPoolFactoryzYgHf1A.balanceOf.call(addressb4Vy7yv, {from: accounts[1]});
		await NasiLiquidityPoolFactoryzYgHf1A.renounceMinter.call({from: accounts[3]});
		const boolx8uZp8a = await NasiLiquidityPoolFactoryzYgHf1A.increaseAllowance.call(addressMXjaYR4, uinty9JPJno, {from: "0x0000000000000000000000000000000000000001"});
		const boolL1bVw8J = await NasiLiquidityPoolFactoryzYgHf1A.approve.call(addressSY92mCi, uintcG50o8t, {from: accounts[4]});
	});
})