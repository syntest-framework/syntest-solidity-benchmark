const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressmU8Nd0k = accounts[4]
		const addressf24wYvk = accounts[4]
		const addressUQyjEbT = accounts[4]
		const GardenContractV2C7NMlbP = await GardenContractV2.new(addressmU8Nd0k, addressf24wYvk, addressUQyjEbT, {from: accounts[4]});
		const uintA2RBV6n = BigInt("59")
		const stringOYrU3Ye = "VQ48MAM5zePhRVpwkGWsgGTV6Lv2yqZ"
		const addressPJPsik8 = accounts[2]
		const stringfCQ18hL = "6FwKTFjSmMhd912gshQa"
		const uintO3p8dk0 = BigInt("1445")
		const uintAkruVCu = BigInt("67")
		const stringiILVsF9 = "c31dWSdomjBxNzXInWncmPK8hh7ndCTDRpq5tteyzUgy2qmo6BCRrT3E3HOi"
		const stringzcCHBdC = "9wu2eMqZw1VwhcAuqCIbqrMuqiu2yXEVDRSsBe8eUMRXclRxvOrKaQ6jmQDO9V"
		const uint256ikUO7l = await GardenContractV2C7NMlbP.growthRemaining.call(addressPJPsik8, stringOYrU3Ye, uintA2RBV6n, {from: accounts[5]});
		const uint256zwuMlQL = await GardenContractV2C7NMlbP.totalTLPGrown.call(stringfCQ18hL, {from: accounts[1]});
		const stringQHv9WJu = await GardenContractV2C7NMlbP.decompose.call(stringiILVsF9, uintAkruVCu, uintO3p8dk0, {from: accounts[2]});
		const uint256yvt8m6e = await GardenContractV2C7NMlbP.totalTLPGrown.call(stringzcCHBdC, {from: accounts[1]});

		await expect(GardenContractV2C7NMlbP.growthRemaining.call(addressPJPsik8, stringOYrU3Ye, uintA2RBV6n, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressxpu9DXD = accounts[1]
		const addressb9FOpu2 = accounts[5]
		const addressTul5Jfd = accounts[5]
		const GardenContractV2lPOM6Ut = await GardenContractV2.new(addressxpu9DXD, addressb9FOpu2, addressTul5Jfd, {from: accounts[3]});
		const uintgquUUqW = BigInt("191")
		const addressXgJt72r = accounts[3]
		const addressSEJLCdH = "0x0000000000000000000000000000000000000001"
		const uint256uJYtSU = await GardenContractV2lPOM6Ut.getTotalrTLPHarvest.call(uintgquUUqW, {from: "0x0000000000000000000000000000000000000001"});
		const addressyfqa89i = await GardenContractV2lPOM6Ut.addTokenOwner.call(addressSEJLCdH, addressXgJt72r, {from: accounts[5]});

		await expect(GardenContractV2lPOM6Ut.getTotalrTLPHarvest.call(uintgquUUqW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressC1hP3Cs = accounts[3]
		const addressFG9FXCb = accounts[0]
		const addressdz7bBHY = accounts[4]
		const GardenContractV2CJL7pJn = await GardenContractV2.new(addressC1hP3Cs, addressFG9FXCb, addressdz7bBHY, {from: accounts[1]});
		const uintsJWYGFO = BigInt("143")
		const stringF0XaS62 = "iVLmI5b5d5qEpGgNuMwZzU7TLpLrYFgjdcxJ0ls9Do3jI5WHuyB3c286EmVjtnhpH89rAfnyVhUS8gqNoylxAgAbV8"
		const uintJpMSC0B = BigInt("79")
		const stringMQWnldF = await GardenContractV2CJL7pJn.withdraw.call(stringF0XaS62, uintsJWYGFO, {from: accounts[5]});
		const uint256YEsjDS8 = await GardenContractV2CJL7pJn.getTotalsTLPHarvest.call(uintJpMSC0B, {from: accounts[2]});

		await expect(GardenContractV2CJL7pJn.withdraw.call(stringF0XaS62, uintsJWYGFO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressIMK0kBj = accounts[5]
		const addressxZs7o9K = accounts[2]
		const addressMfmA0oI = accounts[2]
		const GardenContractV28RFQ2X = await GardenContractV2.new(addressIMK0kBj, addressxZs7o9K, addressMfmA0oI, {from: accounts[0]});
		const uintBPmCNIN = BigInt("191")
		const stringx4w0nA0 = "JLWAhCX1MOiiRJi6WvUghR7qFb2CvNf2cISi3i7BGlgSizuaPQ6B"
		const stringTcKSMm2 = "9AI5y6e8"
		const uintWM00gN = BigInt("25")
		const stringhGilmg7 = "9yYyMmHmMfDP8G2VOBN96ArrN1u4ufh6neBKM6MEq6PqzvDoBsNA1BPNs6R7fhGlrOURmRkiVWcskBsPoYK9PI"
		const stringxzNN52l = await GardenContractV28RFQ2X.claimDecompose.call(stringx4w0nA0, uintBPmCNIN, {from: accounts[1]});
		const uint256Ma7K4hi = await GardenContractV28RFQ2X.totalTLPGrowing.call(stringTcKSMm2, {from: accounts[2]});
		const stringij4JAz = await GardenContractV28RFQ2X.withdraw.call(stringhGilmg7, uintWM00gN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV28RFQ2X.claimDecompose.call(stringx4w0nA0, uintBPmCNIN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressQf0tkRv = accounts[1]
		const address2DVjt0 = accounts[2]
		const addressxK4MfAM = accounts[1]
		const GardenContractV2C9dl9CS = await GardenContractV2.new(addressQf0tkRv, address2DVjt0, addressxK4MfAM, {from: accounts[4]});
		const stringLc3XJRy = "gphlpydajW0s9s8CFMRTxxLZi8hLkYuRsKny5eV"
		const stringSiMxf9T = "AD6MAvSuGYxG3nwJtyNPx5i3jBfY7UfBmXToYJRwVBVAD5ooeQLztaBnU2XeVMKYs3kwr"
		const uintLMmrOQ3 = BigInt("219")
		const stringDA1Z6UE = "ZIaG9jdyJqpVt25xh9mtEzeF7p2NerFMYL"
		const stringbQBGt9 = "JwGK0DHKgzLHULgvzLxIk2E3CIqxQX0vuH"
		const uint256qeDTII = await GardenContractV2C9dl9CS.totalTLPGrown.call(stringLc3XJRy, {from: accounts[1]});
		const stringdZmbsPI = await GardenContractV2C9dl9CS.harvestAllBeds.call(stringSiMxf9T, {from: "0x0000000000000000000000000000000000000001"});
		const uint256cKCjw5X = await GardenContractV2C9dl9CS.timeUntilNextTLP.call(stringDA1Z6UE, uintLMmrOQ3, {from: accounts[2]});
		const uint256L61khLA = await GardenContractV2C9dl9CS.totalTLPGrown.call(stringbQBGt9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2C9dl9CS.totalTLPGrown.call(stringLc3XJRy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressrDidZN = accounts[4]
		const addressPiH45o = accounts[3]
		const addressxV1u0Pb = accounts[4]
		const GardenContractV2WKpZ90f = await GardenContractV2.new(addressrDidZN, addressPiH45o, addressxV1u0Pb, {from: accounts[2]});
		const uintah9RKm = BigInt("174")
		const stringKVb5kK = "Yih1kzQNUB6qtHzrrYLLTqRu4eJCqWKt4AWC1HaSjSLlNKVrEwVU2p5zwHbd2GONFzko9N2Un7ze2m"
		const uint9iiBsN = BigInt("155")
		const stringHCfawQY = "2JSPixttQScNqQ9AsiAgs0BeuAmGE9UDHX1oS1sx8PhkR3zFVN9"
		const boolvuewP5S = true
		const uintJ69cULo = BigInt("71")
		const stringpUgwG6y = "6SOlbsXdeGnRRRYFKPSLoKVDSDS7S8Ltd6ikPibrLnfCEWxyuiJ"
		const uintBrlAGYG = BigInt("640")
		const boolmTycwWg = false
		const uintS9hkVU6 = BigInt("59")
		const stringUtStdGr = "bstiFTaALqFUQaAaXCzvMF1yy1i2cv9C3F1jLKAIWL24dl2ySVD5ZEC3UXNhjJ2wyc8duAbp"
		const uintXgV2cCa = BigInt("12")
		const uintihGnH70 = BigInt("49")
		await GardenContractV2WKpZ90f.totalBedSupply.call(stringKVb5kK, uintah9RKm, {from: accounts[2]});
		const stringqoH4AdZ = await GardenContractV2WKpZ90f.claimDecompose.call(stringHCfawQY, uint9iiBsN, {from: accounts[1]});
		const uint256CMDy66u = await GardenContractV2WKpZ90f.plant.call(uintBrlAGYG, stringpUgwG6y, uintJ69cULo, boolvuewP5S, {from: accounts[2]});
		const uint256NlAYfvV = await GardenContractV2WKpZ90f.plant.call(uintXgV2cCa, stringUtStdGr, uintS9hkVU6, boolmTycwWg, {from: accounts[1]});
		const uint256Bh2ruA = await GardenContractV2WKpZ90f.getTotalsTLPHarvest.call(uintihGnH70, {from: accounts[2]});

		await expect(GardenContractV2WKpZ90f.totalBedSupply.call(stringKVb5kK, uintah9RKm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJLvpnpH = accounts[3]
		const addressg9lrLH = accounts[0]
		const addressw7vjtuU = accounts[1]
		const GardenContractV2o42oaMG = await GardenContractV2.new(addressJLvpnpH, addressg9lrLH, addressw7vjtuU, {from: accounts[2]});
		const addressHdb4frD = accounts[1]
		const addressQ53LADc = accounts[4]
		const boolmos9GhU = false
		const uintkTVlJHP = BigInt("174")
		const stringePEP2xb = "kqYsY"
		const uintnfAbRCj = BigInt("1092")
		const addressDeSmX8I = await GardenContractV2o42oaMG.changeOwner.call(addressHdb4frD, {from: accounts[4]});
		const addressuiykIlp = await GardenContractV2o42oaMG.renounceTokenOwner.call(addressQ53LADc, {from: accounts[1]});
		const uint2569C3m9V = await GardenContractV2o42oaMG.plant.call(uintnfAbRCj, stringePEP2xb, uintkTVlJHP, boolmos9GhU, {from: accounts[3]});

		await expect(GardenContractV2o42oaMG.changeOwner.call(addressHdb4frD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressO29dGjy = accounts[3]
		const addressEV1mn6a = accounts[0]
		const addressldSbaVE = accounts[4]
		const GardenContractV2CJL7pJn = await GardenContractV2.new(addressO29dGjy, addressEV1mn6a, addressldSbaVE, {from: accounts[1]});
		const uintFq8B3W0 = BigInt("79")
		const uint256YEsjDS8 = await GardenContractV2CJL7pJn.getTotalsTLPHarvest.call(uintFq8B3W0, {from: accounts[2]});

		await expect(GardenContractV2CJL7pJn.getTotalsTLPHarvest.call(uintFq8B3W0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressAvhKHEm = accounts[1]
		const addressehMUoD0 = accounts[0]
		const addressy1wyTo = accounts[3]
		const GardenContractV2W0w1rn = await GardenContractV2.new(addressAvhKHEm, addressehMUoD0, addressy1wyTo, {from: accounts[2]});
		const uintiCXFu7q = BigInt("35")
		const uinttZfuiku = BigInt("105")
		const uintWbvsv4 = BigInt("194")
		const uintEV1IRN5 = BigInt("200")
		const uintmv1DHpU = BigInt("241")
		const uintSQJhCvc = BigInt("131")
		const addressiz2b1RG = "0x0000000000000000000000000000000000000001"
		const uint8nvm5VXu = await GardenContractV2W0w1rn.setTimeStamp.call(uinttZfuiku, uintiCXFu7q, {from: "0x0000000000000000000000000000000000000001"});
		const uint8jijanuA = await GardenContractV2W0w1rn.zeroHoldings.call(uintEV1IRN5, uintWbvsv4, {from: accounts[3]});
		const uint256RujO43b = await GardenContractV2W0w1rn.getTotalsTLPHarvest.call(uintmv1DHpU, {from: accounts[5]});
		const uint256yQBDH26 = await GardenContractV2W0w1rn.getTotalrTLPHarvest.call(uintSQJhCvc, {from: accounts[5]});
		const addressNtLlE8r = await GardenContractV2W0w1rn.changeBenefitiary.call(addressiz2b1RG, {from: accounts[5]});

		await expect(GardenContractV2W0w1rn.setTimeStamp.call(uinttZfuiku, uintiCXFu7q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressjmlerZh = accounts[1]
		const addresslcTFyiu = accounts[5]
		const addressZk2yRNZ = accounts[5]
		const GardenContractV2lPOM6Ut = await GardenContractV2.new(addressjmlerZh, addresslcTFyiu, addressZk2yRNZ, {from: accounts[3]});
		const stringF4ccEwQ = "iwxWuxk9IaXRwVgwYv5A3vf3"
		const uintZb3NvI4 = BigInt("86")
		const stringIQR0qWH = "RUwwSra3Lc43y5yuUzaybUtBVJ4oSzJGYlWhUcHW417QVkxfsa7fYx"
		const uintPavnpb = BigInt("191")
		const stringl3lPiKM = "HWKmWvml4lkJklRe2jNq4Uo172MRywuDG54tvUjT6VnAsXWHyIMKD2"
		const addressh1dvqzC = accounts[3]
		const addressi1Adj3d = "0x0000000000000000000000000000000000000001"
		const stringVccBoTl = await GardenContractV2lPOM6Ut.harvestAllBeds.call(stringF4ccEwQ, {from: accounts[5]});
		const uint256ECdgF0v = await GardenContractV2lPOM6Ut.timeUntilNextTLP.call(stringIQR0qWH, uintZb3NvI4, {from: accounts[3]});
		const uint256uJYtSU = await GardenContractV2lPOM6Ut.getTotalrTLPHarvest.call(uintPavnpb, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xulIOQ0 = await GardenContractV2lPOM6Ut.totalGardenSupply.call(stringl3lPiKM, {from: accounts[0]});
		const addressyfqa89i = await GardenContractV2lPOM6Ut.addTokenOwner.call(addressi1Adj3d, addressh1dvqzC, {from: accounts[5]});

		await expect(GardenContractV2lPOM6Ut.harvestAllBeds.call(stringF4ccEwQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const address4nZyTK = accounts[4]
		const addressKv4g599 = accounts[3]
		const addressQGDTqWq = accounts[1]
		const GardenContractV2Up8jBDB = await GardenContractV2.new(address4nZyTK, addressKv4g599, addressQGDTqWq, {from: accounts[3]});
		const uintjS0iHKN = BigInt("199")
		const stringfbqvb39 = "4LkVjpEmxjT7R5irQav6MeTcAc5cCw0"
		const uintbmGfyXm = BigInt("225")
		const stringAzkD5z8 = "GRX99pXVKkYFrYr5N5l5sCFOsNdpqDmGZzOP5djzDOqcDd7LWMjP78R5bCQEtlJyYZ1jolUjx9hdw8itOhQST6zBvjLeOLQy9RW"
		const stringJXZ72B = await GardenContractV2Up8jBDB.harvest.call(stringfbqvb39, uintjS0iHKN, {from: accounts[1]});
		const uint256p43BbBe = await GardenContractV2Up8jBDB.getTotalrTLPHarvest.call(uintbmGfyXm, {from: accounts[4]});
		const uint256BPwSTq4 = await GardenContractV2Up8jBDB.totalTLPGrowing.call(stringAzkD5z8, {from: accounts[2]});

		await expect(GardenContractV2Up8jBDB.harvest.call(stringfbqvb39, uintjS0iHKN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressiQYEbo4 = accounts[5]
		const addressr3nRdpO = accounts[5]
		const addressT0gVSb = accounts[2]
		const GardenContractV2Nzijwhl = await GardenContractV2.new(addressiQYEbo4, addressr3nRdpO, addressT0gVSb, {from: accounts[0]});
		const stringtWwUjyk = "o4MwHsE7cO4mzO9YSjP"
		const addressbC7FlYV = accounts[0]
		const uintj6BRHxj = BigInt("29")
		const stringHmci6Pe = "DbTIeNGYBAIjnlMo4TlDrN"
		const uint2561HSHuu = await GardenContractV2Nzijwhl.balanceOf.call(addressbC7FlYV, stringtWwUjyk, {from: accounts[2]});
		const uint256E4B3NDA = await GardenContractV2Nzijwhl.timeUntilNextTLP.call(stringHmci6Pe, uintj6BRHxj, {from: accounts[1]});

		await expect(GardenContractV2Nzijwhl.balanceOf.call(addressbC7FlYV, stringtWwUjyk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressjQmsNka = accounts[5]
		const addressdvJPjg = accounts[5]
		const addressPt5xSfW = accounts[2]
		const GardenContractV2Nzijwhl = await GardenContractV2.new(addressjQmsNka, addressdvJPjg, addressPt5xSfW, {from: accounts[0]});
		const uintIFbuoWj = BigInt("29")
		const stringHmci6Pe = "DEbTIeNGYBAIjnlMo4TlDrN"
		const uint256E4B3NDA = await GardenContractV2Nzijwhl.timeUntilNextTLP.call(stringHmci6Pe, uintIFbuoWj, {from: accounts[1]});

		await expect(GardenContractV2Nzijwhl.timeUntilNextTLP.call(stringHmci6Pe, uintIFbuoWj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressVldXqtP = accounts[5]
		const addressWFip95t = accounts[5]
		const addressZjObNsg = accounts[2]
		const GardenContractV2Nzijwhl = await GardenContractV2.new(addressVldXqtP, addressWFip95t, addressZjObNsg, {from: accounts[0]});
		const bool2f3m2R = true
		const uintiUR0ccg = BigInt("82")
		const stringCFCYewv = "mlukxDU75Kc4fJQmEymcyfQ3ASBpeKHoFVaB3y8MtqLyV9AKZbPOo9eodQo5yB"
		const uintRF3JHiV = BigInt("2025")
		const uintGs8U5P = BigInt("57")
		const stringtWwUjyk = "o4MwHsE7cO4mzO9YSjP"
		const addresszu2qls2 = accounts[0]
		const uinth1ttqRe = BigInt("29")
		const stringHmci6Pe = "DbTIeNGJBAIjnlMo4TlDrN"
		const uintgQDCFNA = BigInt("2")
		const uint256Ju7e8xd = await GardenContractV2Nzijwhl.plant.call(uintRF3JHiV, stringCFCYewv, uintiUR0ccg, bool2f3m2R, {from: accounts[1]});
		const uint256X4sXvG = await GardenContractV2Nzijwhl.getTotalrTLPHarvest.call(uintGs8U5P, {from: accounts[1]});
		const uint2561HSHuu = await GardenContractV2Nzijwhl.balanceOf.call(addresszu2qls2, stringtWwUjyk, {from: accounts[2]});
		const uint256E4B3NDA = await GardenContractV2Nzijwhl.timeUntilNextTLP.call(stringHmci6Pe, uinth1ttqRe, {from: accounts[1]});
		const uint256NlMBzs0 = await GardenContractV2Nzijwhl.getTotalsTLPHarvest.call(uintgQDCFNA, {from: accounts[5]});

		await expect(GardenContractV2Nzijwhl.plant.call(uintRF3JHiV, stringCFCYewv, uintiUR0ccg, bool2f3m2R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressjPCmJC = accounts[1]
		const addressbLG4MPI = accounts[5]
		const addresso8lINAD = accounts[5]
		const GardenContractV2lPOM6Ut = await GardenContractV2.new(addressjPCmJC, addressbLG4MPI, addresso8lINAD, {from: accounts[3]});
		const stringn5uVQ4Y = "MF7JHxSkk7XoinEP1nHS7"
		const stringHZja0px = "AwLscSCFrkR2p695NKHR4u3nphy9kkVSEyWYaNMJL8CwIxFHWd219RClmsXeSvwlC3WNMYrv"
		const addressEr6ERgM = accounts[3]
		const addresskyUEr0s = accounts[5]
		const uint256p43GwUd = await GardenContractV2lPOM6Ut.totalTLPGrowing.call(stringn5uVQ4Y, {from: accounts[0]});
		const uint256meuAuI7 = await GardenContractV2lPOM6Ut.totalTLPDecomposed.call(stringHZja0px, {from: accounts[2]});
		const addressyfqa89i = await GardenContractV2lPOM6Ut.addTokenOwner.call(addresskyUEr0s, addressEr6ERgM, {from: accounts[5]});

		await expect(GardenContractV2lPOM6Ut.totalTLPGrowing.call(stringn5uVQ4Y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressPetAdmA = accounts[5]
		const addresscfe2j2Z = accounts[5]
		const addressXMCdOM4 = accounts[2]
		const GardenContractV2Nzijwhl = await GardenContractV2.new(addressPetAdmA, addresscfe2j2Z, addressXMCdOM4, {from: accounts[0]});
		const uintut7VvQ8 = BigInt("2009")
		const uintDfx4Lqo = BigInt("248")
		const stringnHP1Rzf = "TrMEyUqozse45zQOsj1KwCdvRw5nMxIfbMyUUhXIherKj8ctBPXM2NQBL4AU8YFQg7NFIEKaC35Qg7tJRy9EtSiDqeflu9"
		const uintW4iNcV7 = BigInt("19")
		const stringHmci6Pe = "DEbTIeNGYBAIjnlMo4TlDrN"
		const stringSmnL9S = await GardenContractV2Nzijwhl.decompose.call(stringnHP1Rzf, uintDfx4Lqo, uintut7VvQ8, {from: accounts[5]});
		const uint256E4B3NDA = await GardenContractV2Nzijwhl.timeUntilNextTLP.call(stringHmci6Pe, uintW4iNcV7, {from: accounts[1]});

		await expect(GardenContractV2Nzijwhl.decompose.call(stringnHP1Rzf, uintDfx4Lqo, uintut7VvQ8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresssGFXlw2 = accounts[0]
		const addressA6GL6MR = accounts[1]
		const addressHCUToH1 = accounts[3]
		const GardenContractV2wPM6v8 = await GardenContractV2.new(addresssGFXlw2, addressA6GL6MR, addressHCUToH1, {from: "0x0000000000000000000000000000000000000001"});
		const uintjB5YlAb = BigInt("5")
		const stringSvhg07D = "5yDzS2bajAk4KpywFPy66ydfqOKW1bJKtld08AVTieqyyrRcedpt56wm5puFKKEfckaTl8E8Q2n2uNx"
		const addresswDuIdLs = accounts[1]
		const uintZi0u2xU = BigInt("68")
		const stringHFjatI = "IpYlpCTuu65fMVarcm2tJ1SGGZIA4uTAJXyelJtEqJgw"
		const uint256i8lhOiV = await GardenContractV2wPM6v8.growthRemaining.call(addresswDuIdLs, stringSvhg07D, uintjB5YlAb, {from: accounts[3]});
		const uint256ncttXaj = await GardenContractV2wPM6v8.timeUntilNextTLP.call(stringHFjatI, uintZi0u2xU, {from: accounts[2]});
	});

	it('test for GardenContractV2', async () => {
		const addressLpq5ZGJ = accounts[1]
		const addressMlgQKgE = accounts[5]
		const addressttmn4c = accounts[5]
		const GardenContractV2lPOM6Ut = await GardenContractV2.new(addressLpq5ZGJ, addressMlgQKgE, addressttmn4c, {from: accounts[3]});
		const addressLao1f0K = accounts[3]
		const uintZYOCop2 = BigInt("72")
		const addressL4qqyb = await GardenContractV2lPOM6Ut.changeBenefitiary.call(addressLao1f0K, {from: accounts[3]});
		const uint256uJYtSU = await GardenContractV2lPOM6Ut.getTotalrTLPHarvest.call(uintZYOCop2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2lPOM6Ut.getTotalrTLPHarvest.call(uintZYOCop2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressoU04yx = accounts[1]
		const addressrGPC95c = accounts[5]
		const addressWy0G5Ud = accounts[5]
		const GardenContractV2lPOM6Ut = await GardenContractV2.new(addressoU04yx, addressrGPC95c, addressWy0G5Ud, {from: accounts[3]});
		const stringPhSJlQc = "KYmdQWpr89UeO"
		const uint256Lrp0Lx9 = await GardenContractV2lPOM6Ut.totalTLPBurnt.call(stringPhSJlQc, {from: accounts[0]});

		await expect(GardenContractV2lPOM6Ut.totalTLPBurnt.call(stringPhSJlQc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressXkCVrDS = accounts[1]
		const addressvmyNcuA = accounts[5]
		const addresssZmW0nm = accounts[5]
		const GardenContractV2lPOM6Ut = await GardenContractV2.new(addressXkCVrDS, addressvmyNcuA, addresssZmW0nm, {from: accounts[3]});
		const uintKGgYiCK = BigInt("0")
		const addresskIE6UXh = accounts[3]
		const uint256uJYtSU = await GardenContractV2lPOM6Ut.getTotalrTLPHarvest.call(uintKGgYiCK, {from: "0x0000000000000000000000000000000000000001"});
		const addressMTj6wcU = await GardenContractV2lPOM6Ut.renounceTokenOwner.call(addresskIE6UXh, {from: accounts[0]});

		await expect(GardenContractV2lPOM6Ut.getTotalrTLPHarvest.call(uintKGgYiCK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressPeyUb2S = accounts[5]
		const addressxFownKe = accounts[5]
		const addressD5JtpB = accounts[2]
		const GardenContractV2Nzijwhl = await GardenContractV2.new(addressPeyUb2S, addressxFownKe, addressD5JtpB, {from: accounts[0]});
		const addressgDCEcRE = accounts[3]
		const addressGdm4pXE = accounts[4]
		const boolxJsnal = true
		const uintLdFJXkm = BigInt("113")
		const stringwQXlq5J = "zsRWOYLX8IgojuXVVUPtBmTr35DyGMr5vW7Xc9pnqUKuBoTVABJEUFZuSmKgfpvKbHIYh7lmIUq6qOCvPDjUMQC"
		const uintZkkIYwf = BigInt("500")
		const uintVCiIvoQ = BigInt("20")
		const uintFfORhUs = BigInt("3")
		const stringbCaVn9 = "gB6i7p46CVuCfxLUl4a8DXn5kTxIJ"
		const addresslYW3BXh = await GardenContractV2Nzijwhl.addTokenOwner.call(addressGdm4pXE, addressgDCEcRE, {from: accounts[0]});
		const uint256UDYOxm2 = await GardenContractV2Nzijwhl.plant.call(uintZkkIYwf, stringwQXlq5J, uintLdFJXkm, boolxJsnal, {from: accounts[3]});
		const uint8GrcagyD = await GardenContractV2Nzijwhl.zeroHoldings.call(uintFfORhUs, uintVCiIvoQ, {from: accounts[2]});
		const stringavGbIcH = await GardenContractV2Nzijwhl.harvestAllBeds.call(stringbCaVn9, {from: accounts[4]});

		await expect(GardenContractV2Nzijwhl.addTokenOwner.call(addressGdm4pXE, addressgDCEcRE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressnn46Yk5 = accounts[5]
		const addressVbrGWV7 = accounts[5]
		const addressTy7Udw1 = accounts[2]
		const GardenContractV2Nzijwhl = await GardenContractV2.new(addressnn46Yk5, addressVbrGWV7, addressTy7Udw1, {from: accounts[0]});
		const stringJlyngCc = "K4cwKQQyCVVmXVjrsZ7HWgeniENmK7KfGMhEkWDpU"
		const stringbCaVn9 = "gB6i7p46CVuCfxLUl4a8DXn5kTxIJ"
		const uint256u0s4p8C = await GardenContractV2Nzijwhl.totalTLPDecomposed.call(stringJlyngCc, {from: accounts[1]});
		const stringavGbIcH = await GardenContractV2Nzijwhl.harvestAllBeds.call(stringbCaVn9, {from: accounts[4]});

		await expect(GardenContractV2Nzijwhl.totalTLPDecomposed.call(stringJlyngCc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressUP9sgu3 = accounts[5]
		const addressGddWjVH = accounts[5]
		const addressYJ63C3T = accounts[2]
		const GardenContractV2Nzijwhl = await GardenContractV2.new(addressUP9sgu3, addressGddWjVH, addressYJ63C3T, {from: accounts[0]});
		const addressWeOCHuw = "0x0000000000000000000000000000000000000001"
		const stringbCaVn9 = "gB6iqk7p46CVuCfxLUl4a8DXn5kTxIJ"
		const addressScRK8J = await GardenContractV2Nzijwhl.changeOwner.call(addressWeOCHuw, {from: accounts[0]});
		const stringavGbIcH = await GardenContractV2Nzijwhl.harvestAllBeds.call(stringbCaVn9, {from: accounts[4]});

		await expect(GardenContractV2Nzijwhl.harvestAllBeds.call(stringbCaVn9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressv7EcZxD = accounts[3]
		const addresschaxl4X = accounts[0]
		const addressWRV6Yg = accounts[4]
		const GardenContractV2CJL7pJn = await GardenContractV2.new(addressv7EcZxD, addresschaxl4X, addressWRV6Yg, {from: accounts[1]});
		const stringTIxg1dG = "zPqC525F9uGI7P"
		const uintTxxuYGM = BigInt("17")
		const stringCir5Jpj = "DqJnAjJXkMEvCaRX1EmYleAGta8x1TvBNXtIziUdf3SQyiXK7qpLAkNZNTnWv8d1gAO8Iw"
		const addressgtTTGB2 = accounts[3]
		const uintrOHzHZM = BigInt("116")
		const uint256PIxrx12 = await GardenContractV2CJL7pJn.totalGardenSupply.call(stringTIxg1dG, {from: accounts[5]});
		const uint256WVnkNnH = await GardenContractV2CJL7pJn.growthRemaining.call(addressgtTTGB2, stringCir5Jpj, uintTxxuYGM, {from: accounts[3]});
		const uint256YEsjDS8 = await GardenContractV2CJL7pJn.getTotalsTLPHarvest.call(uintrOHzHZM, {from: accounts[2]});

		await expect(GardenContractV2CJL7pJn.totalGardenSupply.call(stringTIxg1dG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressMMD0C8x = accounts[1]
		const addresszsXjqht = accounts[5]
		const addressExUSHiG = accounts[5]
		const GardenContractV2lPOM6Ut = await GardenContractV2.new(addressMMD0C8x, addresszsXjqht, addressExUSHiG, {from: accounts[3]});
		const addressS5uCp2 = accounts[1]
		const uintDAuSIVz = BigInt("78")
		const addressKpaaOoA = await GardenContractV2lPOM6Ut.renounceTokenOwner.call(addressS5uCp2, {from: accounts[3]});
		const uint256uJYtSU = await GardenContractV2lPOM6Ut.getTotalrTLPHarvest.call(uintDAuSIVz, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2lPOM6Ut.renounceTokenOwner.call(addressS5uCp2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})