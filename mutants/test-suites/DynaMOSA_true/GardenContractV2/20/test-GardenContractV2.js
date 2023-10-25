const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addresstEG2d5q = accounts[2]
		const addressVgZAquG = accounts[4]
		const addressJOfIR2I = "0x0000000000000000000000000000000000000001"
		const GardenContractV2YoqLhBu = await GardenContractV2.new(addresstEG2d5q, addressVgZAquG, addressJOfIR2I, {from: accounts[3]});
		const string1TvEVQ = "gOm5Mt9L87xbpkDzbnGH2qQYGa8FidLAFFvaChwm5EDYA18ztJ8SSbAqjJhuXtF"
		const stringOEO5rgT = "S1WSlmVI2tZWbNjcjuWF9wsEFxkoAj3E4tFtVioFdF2vJXNwitVeLKLpl3WDhhdAU8fXS5ys4NaNHMuM820TTA"
		const uintqUCRQ8a = BigInt("1059")
		const uintDBw6mJm = BigInt("36")
		const stringswb3dm8 = "C2S8iXa0tpmAvtAVOefbzOsLacoihMUzNyQBHMS2O2zDTfqW4t1k6GceazXLHhAE9HUiWnO6KH0GM5rmP4Ig"
		const uintNA2QJqy = BigInt("931")
		const uintL44ln2Q = BigInt("85")
		const stringRbckWGD = "RuHYvLKE6wU3on3B09LC8jPaHQ21EpAd3u9e6ib3kEnRCSDkEn7g1WZzuwSjoPFpwMLAiPvmcyMUE2HKVaGzDeAkKB7"
		const uintFlC53Ua = BigInt("53")
		const stringvkbMuhy = "VAguJbzXrQ8f2tuXePjpCu5GMfprk31QDFAeNtBoANTWLxX4VEqIoHFQn7"
//		const stringqFOOpYS = await GardenContractV2YoqLhBu.harvestAllBeds.call(string1TvEVQ, {from: accounts[1]});
//		const uint256smX1hJ = await GardenContractV2YoqLhBu.totalTLPGrowing.call(stringOEO5rgT, {from: accounts[3]});
//		const stringThQ5KTj = await GardenContractV2YoqLhBu.decompose.call(stringswb3dm8, uintDBw6mJm, uintqUCRQ8a, {from: accounts[2]});
//		const stringSj8Lw5g = await GardenContractV2YoqLhBu.decompose.call(stringRbckWGD, uintL44ln2Q, uintNA2QJqy, {from: accounts[5]});
//		await GardenContractV2YoqLhBu.totalBedSupply.call(stringvkbMuhy, uintFlC53Ua, {from: accounts[1]});

		await expect(GardenContractV2YoqLhBu.harvestAllBeds.call(string1TvEVQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressGvH2cl = accounts[4]
		const addresshndLCGo = accounts[2]
		const addressDsyZLMv = accounts[4]
		const GardenContractV2CDwe44F = await GardenContractV2.new(addressGvH2cl, addresshndLCGo, addressDsyZLMv, {from: accounts[0]});
		const uinte0G6iT = BigInt("130")
		const stringoZTGTdd = "b4xxbxxntjBDrEPkVaPvnpSQ1JOPdDMwHkDVTV8GIS4InmcFIu7CBuBkAr"
		const uintxPP2SM0 = BigInt("248")
		const stringsvAy1xt = "tyCG2WhV8nRvEjMU7f7E9L2vYgywFcAiOXqNrT5hsCVExWl9VRTdyjUcWNlpb2IxSb"
		const addresshXk5ElB = accounts[1]
		const uint82FrUA = BigInt("197")
		const stringI9gzDbi = "NMYT6jUDrRCVq1TyMQibvpHzcryNbCaSK4WIY"
//		const stringSoFWyMf = await GardenContractV2CDwe44F.withdraw.call(stringoZTGTdd, uinte0G6iT, {from: accounts[3]});
//		const uint256TitXzVg = await GardenContractV2CDwe44F.growthRemaining.call(addresshXk5ElB, stringsvAy1xt, uintxPP2SM0, {from: accounts[5]});
//		const stringp2yjBIA = await GardenContractV2CDwe44F.withdraw.call(stringI9gzDbi, uint82FrUA, {from: accounts[0]});

		await expect(GardenContractV2CDwe44F.withdraw.call(stringoZTGTdd, uinte0G6iT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressI9n0w6 = accounts[2]
		const addresssfA3xK5 = accounts[3]
		const addressyhoNQQR = "0x0000000000000000000000000000000000000001"
		const GardenContractV2qMpfrFF = await GardenContractV2.new(addressI9n0w6, addresssfA3xK5, addressyhoNQQR, {from: accounts[1]});
		const uintXOgK7R3 = BigInt("228")
		const uintaz63yts = BigInt("64")
		const uintwm7BgIt = BigInt("1317")
		const uintLKBlxCh = BigInt("111")
		const stringvfxLtDQ = "uHisUizlWsI22aZXQUUrobPvYxmkzLDuObQGqGKOM3P4KU7vyFEmOTY3u81"
		const addressNnzThPz = accounts[1]
		const addressHrDsbOd = accounts[5]
		const addressRca37Tq = accounts[1]
		const uintENiEVF6 = BigInt("237")
		const stringb30KGez = "t559j7Ngxw64kpjH8W1RRqRO4Iyt5WM"
//		const uint8kh5ur1z = await GardenContractV2qMpfrFF.zeroHoldings.call(uintaz63yts, uintXOgK7R3, {from: accounts[3]});
//		const stringNzvijZa = await GardenContractV2qMpfrFF.decompose.call(stringvfxLtDQ, uintLKBlxCh, uintwm7BgIt, {from: accounts[4]});
//		const addressA5Jlmvs = await GardenContractV2qMpfrFF.changeBenefitiary.call(addressNnzThPz, {from: accounts[1]});
//		const addressnEWxZxW = await GardenContractV2qMpfrFF.addTokenOwner.call(addressRca37Tq, addressHrDsbOd, {from: accounts[2]});
//		const uint256OwwbDag = await GardenContractV2qMpfrFF.timeUntilNextTLP.call(stringb30KGez, uintENiEVF6, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2qMpfrFF.zeroHoldings.call(uintaz63yts, uintXOgK7R3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresszxUy7Pb = accounts[2]
		const addressplkRsZ = accounts[4]
		const addressW6ft1wk = accounts[4]
		const GardenContractV2LUCiei4 = await GardenContractV2.new(addresszxUy7Pb, addressplkRsZ, addressW6ft1wk, {from: accounts[3]});
		const uinttZmVFaJ = BigInt("239")
		const uintOREWJyw = BigInt("177")
		const stringXgPkTqd = "ZAWcyLWzSyN2MgLx2VA28OlvjlA1jm7M5gfBhsI94tgxy4p5"
		const stringakf73bE = "nlFAo17bRGPvR6PqO9szbbFJuqlYPAoj5USqyv6C8MhffHqPO25kXCAUkqwWIuLczC4KMsVsMe25k6ZsjodLj"
		const boolTUHzFI3 = true
		const uintL7Y61d5 = BigInt("245")
		const stringOYqAa3E = "tA8aJwfv1AdjiicsDM5lairYhXIxVCZEP1jq1xBWiWn2dsj6cih91WAokMjbeJCg3IdNOj7kEpQQb"
		const uintUe7BoZ = BigInt("1966")
//		const uint256SURkwnH = await GardenContractV2LUCiei4.getTotalsTLPHarvest.call(uinttZmVFaJ, {from: accounts[5]});
//		await GardenContractV2LUCiei4.totalBedSupply.call(stringXgPkTqd, uintOREWJyw, {from: "0x0000000000000000000000000000000000000001"});
//		const stringznvZhJ = await GardenContractV2LUCiei4.harvestAllBeds.call(stringakf73bE, {from: accounts[0]});
//		const uint256Qtvg61o = await GardenContractV2LUCiei4.plant.call(uintUe7BoZ, stringOYqAa3E, uintL7Y61d5, boolTUHzFI3, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2LUCiei4.getTotalsTLPHarvest.call(uinttZmVFaJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresskUZVCsO = accounts[4]
		const addressmAaUEMI = accounts[3]
		const addresszuq7soW = "0x0000000000000000000000000000000000000001"
		const GardenContractV2vzRuQQ = await GardenContractV2.new(addresskUZVCsO, addressmAaUEMI, addresszuq7soW, {from: accounts[4]});
		const stringcBm5WI = "wxUjqX35DkPf"
		const uintkZtyMFX = BigInt("164")
		const stringxxsEFZu = "kTMfM4MdUqybtGp4hmy82qzh7bwSRY6A6APH2xmbVHcitVxH9W0sYHwJiUuzVFBjdyB8THEV9iMHmfrhgMFSbHGaoYkOMq"
//		const uint256ZxOiD51 = await GardenContractV2vzRuQQ.totalTLPGrowing.call(stringcBm5WI, {from: accounts[1]});
//		const stringKKaS3M4 = await GardenContractV2vzRuQQ.harvest.call(stringxxsEFZu, uintkZtyMFX, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2vzRuQQ.totalTLPGrowing.call(stringcBm5WI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressWYEtASS = accounts[1]
		const addressFdwWsfj = accounts[2]
		const addressbdhN4eL = accounts[1]
		const GardenContractV2Ffztym = await GardenContractV2.new(addressWYEtASS, addressFdwWsfj, addressbdhN4eL, {from: accounts[4]});
		const uintI9Fl79r = BigInt("222")
		const stringeYGtWFT = "pkaDT4H3gRkizjlPCoPNpRC572TybckKMJs7OKHNd3AKvXum9LGUNh3X3Af3S"
		const addressFUFd2S1 = accounts[5]
		const stringO8u2FFx = "h989fotyzj"
		const stringxYEIlGx = "yrIKOdLusM9jGdtS6CXa5AwUe2bip9EthyPD2rHkWadG89orBdn"
//		const uint256i8ff4ew = await GardenContractV2Ffztym.growthRemaining.call(addressFUFd2S1, stringeYGtWFT, uintI9Fl79r, {from: accounts[2]});
//		const uint256Q6CcqAI = await GardenContractV2Ffztym.totalTLPGrowing.call(stringO8u2FFx, {from: accounts[1]});
//		const uint2568X3J4j = await GardenContractV2Ffztym.totalTLPGrown.call(stringxYEIlGx, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2Ffztym.growthRemaining.call(addressFUFd2S1, stringeYGtWFT, uintI9Fl79r, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressLEkUlWY = "0x0000000000000000000000000000000000000001"
		const addressK90jKf = accounts[2]
		const addressp5X0l9 = accounts[3]
		const GardenContractV2a2mWusA = await GardenContractV2.new(addressLEkUlWY, addressK90jKf, addressp5X0l9, {from: accounts[0]});
		const addresslGYA21h = accounts[4]
		const stringa6869Hl = "hdseBKRrsm6XrcB1av1oHIj1LJ6D0I8aOxPmdaFPRQyrH5jB8mr3Q"
		const uintysmFgDX = BigInt("122")
//		const addressOqTh2lq = await GardenContractV2a2mWusA.changeBenefitiary.call(addresslGYA21h, {from: accounts[3]});
//		const uint256cynNDbV = await GardenContractV2a2mWusA.totalTLPGrown.call(stringa6869Hl, {from: accounts[3]});
//		const uint256t5rRT7L = await GardenContractV2a2mWusA.getTotalrTLPHarvest.call(uintysmFgDX, {from: accounts[0]});

		await expect(GardenContractV2a2mWusA.changeBenefitiary.call(addresslGYA21h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressAFt99Gn = accounts[1]
		const address6TATVZ = accounts[2]
		const addressXZelgb4 = accounts[3]
		const GardenContractV2VtkEUY5 = await GardenContractV2.new(addressAFt99Gn, address6TATVZ, addressXZelgb4, {from: "0x0000000000000000000000000000000000000001"});
		const uintUEr4GJ = BigInt("10")
		const uintDOUiaeA = BigInt("143")
		const addressZFl1i3k = accounts[2]
		const uint3MCwcW = BigInt("159")
		const uintcCiJlyr = BigInt("206")
		const stringP5gXrM = "nGaxDzLC6Vzx7I9fSHCfLXLxEmduBlm2RpBawu8wh7EtwtbfzoRCOKFJjMQBY"
		const uintVKCMcY = BigInt("241")
		const stringRpOpatY = "JGZAVPgAg4Uhigphm24"
		const uint8vfkgoJv = await GardenContractV2VtkEUY5.zeroHoldings.call(uintDOUiaeA, uintUEr4GJ, {from: accounts[0]});
		const addresssp7FhK = await GardenContractV2VtkEUY5.changeOwner.call(addressZFl1i3k, {from: accounts[0]});
		const uint256uxUMZK = await GardenContractV2VtkEUY5.getTotalrTLPHarvest.call(uint3MCwcW, {from: accounts[2]});
		const stringtXnIZRd = await GardenContractV2VtkEUY5.harvest.call(stringP5gXrM, uintcCiJlyr, {from: accounts[1]});
		await GardenContractV2VtkEUY5.totalBedSupply.call(stringRpOpatY, uintVKCMcY, {from: accounts[4]});
	});

	it('test for GardenContractV2', async () => {
		const addressOu5bwr5 = "0x0000000000000000000000000000000000000001"
		const addressw48DxBZ = accounts[2]
		const addressopa17U = accounts[3]
		const GardenContractV2a2mWusA = await GardenContractV2.new(addressOu5bwr5, addressw48DxBZ, addressopa17U, {from: accounts[0]});
		const stringa6869Hl = "hdseBKRrsm6XrcB1av1oHIj1LJ6D0I8aOxPmdaFPRQyrH5jB8mr3Q"
		const uintffxKMk9 = BigInt("122")
//		const uint256cynNDbV = await GardenContractV2a2mWusA.totalTLPGrown.call(stringa6869Hl, {from: accounts[3]});
//		const uint256t5rRT7L = await GardenContractV2a2mWusA.getTotalrTLPHarvest.call(uintffxKMk9, {from: accounts[0]});

		await expect(GardenContractV2a2mWusA.totalTLPGrown.call(stringa6869Hl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressLgzvDO = "0x0000000000000000000000000000000000000001"
		const addresswV6pUr6 = accounts[2]
		const addresscZsgt09 = accounts[3]
		const GardenContractV2a2mWusA = await GardenContractV2.new(addressLgzvDO, addresswV6pUr6, addresscZsgt09, {from: accounts[0]});
		const uintHEuhkhP = BigInt("122")
//		const uint256t5rRT7L = await GardenContractV2a2mWusA.getTotalrTLPHarvest.call(uintHEuhkhP, {from: accounts[0]});

		await expect(GardenContractV2a2mWusA.getTotalrTLPHarvest.call(uintHEuhkhP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressEH0BDzq = accounts[4]
		const addressc0umCWK = accounts[3]
		const addressgHwFKl = "0x0000000000000000000000000000000000000001"
		const GardenContractV2vzRuQQ = await GardenContractV2.new(addressEH0BDzq, addressc0umCWK, addressgHwFKl, {from: accounts[4]});
		const addresshtmyiZV = accounts[4]
		const stringcBm5WI = "wxUjqX5kPf"
		const addressCIaWQxr = await GardenContractV2vzRuQQ.changeOwner.call(addresshtmyiZV, {from: accounts[4]});
//		const uint256ZxOiD51 = await GardenContractV2vzRuQQ.totalTLPGrowing.call(stringcBm5WI, {from: accounts[1]});

		await expect(GardenContractV2vzRuQQ.totalTLPGrowing.call(stringcBm5WI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressibmNhzW = accounts[4]
		const addressrUEIKVp = accounts[3]
		const addresscjcy1K = "0x0000000000000000000000000000000000000001"
		const GardenContractV2vzRuQQ = await GardenContractV2.new(addressibmNhzW, addressrUEIKVp, addresscjcy1K, {from: accounts[4]});
		const uintUm99HLp = BigInt("164")
		const stringxxsEFZu = "kTMfM4MdUqybtGp4hmy82qzh7bwSRY6A6APH2xmbVHcitVxH9W0sYHwJiUuzVFBjdyB8THEV9iMHmfrhgMFSbHGaoYkOMq"
//		const stringKKaS3M4 = await GardenContractV2vzRuQQ.harvest.call(stringxxsEFZu, uintUm99HLp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2vzRuQQ.harvest.call(stringxxsEFZu, uintUm99HLp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressuX6dsv = accounts[4]
		const addressI8xqzMz = accounts[3]
		const addressNnylARp = "0x0000000000000000000000000000000000000001"
		const GardenContractV2vzRuQQ = await GardenContractV2.new(addressuX6dsv, addressI8xqzMz, addressNnylARp, {from: accounts[4]});
		const uintxgnqKTN = BigInt("211")
		const stringi2gcoei = "9aBfBXy3xZbbJ4B4Ks"
		const stringcBm5WI = "ixUjqX5DkPf"
//		await GardenContractV2vzRuQQ.totalBedSupply.call(stringi2gcoei, uintxgnqKTN, {from: accounts[2]});
//		const uint256ZxOiD51 = await GardenContractV2vzRuQQ.totalTLPGrowing.call(stringcBm5WI, {from: accounts[1]});

		await expect(GardenContractV2vzRuQQ.totalBedSupply.call(stringi2gcoei, uintxgnqKTN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressN20ve6s = accounts[4]
		const addressIzKgju9 = accounts[3]
		const addressZEHBNy5 = "0x0000000000000000000000000000000000000001"
		const GardenContractV2vzRuQQ = await GardenContractV2.new(addressN20ve6s, addressIzKgju9, addressZEHBNy5, {from: accounts[4]});
		const addressEbgMoNk = accounts[0]
		const uintwJ3oVuT = BigInt("8")
		const stringrTwJbjO = "vPBo53Vos0VZFoK"
		const uintouVYOoy = BigInt("149")
		const stringxxsEFZu = "kTMfM4MdUqybtGp4hmy82qzh7bwSRY6A6APH2xmbVHcitVxH9W0sYHwJiUuzVFBjdyB8THEV9iMHmfrhgMFSbHGaoYkOMq"
		const addressj3s3MFj = await GardenContractV2vzRuQQ.changeBenefitiary.call(addressEbgMoNk, {from: accounts[4]});
//		await GardenContractV2vzRuQQ.totalBedSupply.call(stringrTwJbjO, uintwJ3oVuT, {from: accounts[4]});
//		const stringKKaS3M4 = await GardenContractV2vzRuQQ.harvest.call(stringxxsEFZu, uintouVYOoy, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2vzRuQQ.totalBedSupply.call(stringrTwJbjO, uintwJ3oVuT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresscwD05lM = accounts[4]
		const addressfLFIsYs = accounts[2]
		const addressv7kF3f = accounts[4]
		const GardenContractV2CDwe44F = await GardenContractV2.new(addresscwD05lM, addressfLFIsYs, addressv7kF3f, {from: accounts[0]});
		const stringc7FUPfk = "oWRZAjweRDpvGpxmbVVYD3KsuNrPJxV3gXmaQIkFntMiaNNLbcIMBLj8a"
		const uintFTdFtKN = BigInt("129")
		const stringoZTGTdd = "b4xxbxxntjBDrEPkVaPvnpSQ1JOPdDMwHkDVTV8GIS4InmcFIu7CBuBkAr"
		const uintHo4b67 = BigInt("197")
		const stringI9gzDbi = "NMYT6jUDrRCVq1TyMQibvpHzcryNbCaSK4WIY"
//		const uint256AhRXtyJ = await GardenContractV2CDwe44F.totalTLPBurnt.call(stringc7FUPfk, {from: accounts[4]});
//		const stringSoFWyMf = await GardenContractV2CDwe44F.withdraw.call(stringoZTGTdd, uintFTdFtKN, {from: accounts[3]});
//		const stringp2yjBIA = await GardenContractV2CDwe44F.withdraw.call(stringI9gzDbi, uintHo4b67, {from: accounts[0]});

		await expect(GardenContractV2CDwe44F.totalTLPBurnt.call(stringc7FUPfk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const address43XDtg = accounts[4]
		const addressKZlaJ40 = accounts[2]
		const addressiTtIQf2 = accounts[4]
		const GardenContractV2CDwe44F = await GardenContractV2.new(address43XDtg, addressKZlaJ40, addressiTtIQf2, {from: accounts[0]});
		const addressjwoJFpO = accounts[4]
		const uintcLvrJfP = BigInt("130")
		const stringoZTGTdd = "b4xxbxxntjBDrEPkVaPvnpSQ1JOPdDMwHkDVTV8GIS4InmcFIu7CBuBkAr"
//		const addressuSto2ri = await GardenContractV2CDwe44F.renounceTokenOwner.call(addressjwoJFpO, {from: accounts[0]});
//		const stringSoFWyMf = await GardenContractV2CDwe44F.withdraw.call(stringoZTGTdd, uintcLvrJfP, {from: accounts[3]});

		await expect(GardenContractV2CDwe44F.renounceTokenOwner.call(addressjwoJFpO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressfD3RGlM = accounts[4]
		const addressbBpCmqZ = accounts[2]
		const addressQKIsLd6 = accounts[4]
		const GardenContractV2CDwe44F = await GardenContractV2.new(addressfD3RGlM, addressbBpCmqZ, addressQKIsLd6, {from: accounts[0]});
		const stringA5ZePc = "etnd0bEE"
		const addressesb3JqN = accounts[5]
		const uintBdmne0k = BigInt("144")
		const stringoZTGTdd = "b4xxbxxntjBDrEPkVaPvnpSQ1JOPdDMwHkDVTV8GIS4InmcFIu7CBuBkAr"
		const uintRseA6Am = BigInt("197")
		const stringI9gzDbi = "NMYT6jUDrRCVq1TyMQibvpHzcryNbCaSK4WIY"
//		const uint256uVeklA = await GardenContractV2CDwe44F.balanceOf.call(addressesb3JqN, stringA5ZePc, {from: accounts[1]});
//		const stringSoFWyMf = await GardenContractV2CDwe44F.withdraw.call(stringoZTGTdd, uintBdmne0k, {from: accounts[3]});
//		const stringp2yjBIA = await GardenContractV2CDwe44F.withdraw.call(stringI9gzDbi, uintRseA6Am, {from: accounts[0]});

		await expect(GardenContractV2CDwe44F.balanceOf.call(addressesb3JqN, stringA5ZePc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressT5yFw2D = accounts[1]
		const addressGP7YNoA = accounts[2]
		const addressCXiUbYt = accounts[1]
		const GardenContractV2cpJnuIQ = await GardenContractV2.new(addressT5yFw2D, addressGP7YNoA, addressCXiUbYt, {from: accounts[1]});
		const uints640CvW = BigInt("100")
		const stringnhmbOwp = "EyneTYxMjHPvYFW4dP"
		const uintPznUXwo = BigInt("115")
		const uintAaND6Y = BigInt("95")
		const stringosjc9Ss = "EuAhvOrx7vYoHS5mFR5adwUd9oQndz81kbamnil2ildPd8YefhqiyuPTKfP7PzhKadeTc"
		const addressKlAtiTT = "0x0000000000000000000000000000000000000001"
		const stringPNRnSiW = "SGicFQtxJ1QabiC35j6Iw5uFNLdBWBbXQ"
//		const uint256Ho28SHi = await GardenContractV2cpJnuIQ.timeUntilNextTLP.call(stringnhmbOwp, uints640CvW, {from: accounts[1]});
//		const uint8MhJW3YP = await GardenContractV2cpJnuIQ.setTimeStamp.call(uintAaND6Y, uintPznUXwo, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256F3EERY = await GardenContractV2cpJnuIQ.totalTLPBurnt.call(stringosjc9Ss, {from: accounts[4]});
//		const addresse0Mqdtv = await GardenContractV2cpJnuIQ.renounceTokenOwner.call(addressKlAtiTT, {from: accounts[2]});
//		const uint256QL1BGa7 = await GardenContractV2cpJnuIQ.totalTLPBurnt.call(stringPNRnSiW, {from: accounts[3]});

		await expect(GardenContractV2cpJnuIQ.timeUntilNextTLP.call(stringnhmbOwp, uints640CvW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresscCRd5se = accounts[4]
		const addressI9CAgBF = accounts[3]
		const addressBIyBbEL = "0x0000000000000000000000000000000000000001"
		const GardenContractV2vzRuQQ = await GardenContractV2.new(addresscCRd5se, addressI9CAgBF, addressBIyBbEL, {from: accounts[4]});
		const uintob3E6Tt = BigInt("9")
		const uintKmyO5S = BigInt("77")
		const stringBDV15Sd = "lCELT"
		const uintQdqSrhW = BigInt("164")
		const stringxxsEFZu = "kTMfM4MdUqybtGp4hmy82qzh7bwSRY6A6APH2xmbVHcitVxH9W0sYHwJiUuzVFBjdyB8THEV9iMHmfrhgMFSbHGaoYkOMq"
		const uintALgEyps = BigInt("141")
		const stringaGitvd = "jU8c7EYzuNhoW5lQVnMktgobNGcyGt4J8X6BlXOOaOMul2Q4LEifEJBDRJpjGlH"
		const uintFyU82Mf = BigInt("95")
		const stringVwzy09h = "RcSpVWMpugQ2hN5IkEtdKSvMxzYM1hVDReWhqXSxWTBlp35Q4"
		const uintJMOOGyy = BigInt("150")
		const uintiTSkIFW = BigInt("225")
		const stringdJAVmBd = "NbQrE"
//		const uint256wrTxldT = await GardenContractV2vzRuQQ.getTotalrTLPHarvest.call(uintob3E6Tt, {from: accounts[1]});
//		const stringC2aXuyF = await GardenContractV2vzRuQQ.claimDecompose.call(stringBDV15Sd, uintKmyO5S, {from: accounts[1]});
//		const stringKKaS3M4 = await GardenContractV2vzRuQQ.harvest.call(stringxxsEFZu, uintQdqSrhW, {from: "0x0000000000000000000000000000000000000001"});
//		await GardenContractV2vzRuQQ.totalBedSupply.call(stringaGitvd, uintALgEyps, {from: accounts[4]});
//		const stringhoPVS5s = await GardenContractV2vzRuQQ.harvest.call(stringVwzy09h, uintFyU82Mf, {from: accounts[2]});
//		const uint8U6n0jf8 = await GardenContractV2vzRuQQ.setTimeStamp.call(uintiTSkIFW, uintJMOOGyy, {from: accounts[1]});
//		const uint256sbIDQrz = await GardenContractV2vzRuQQ.totalTLPBurnt.call(stringdJAVmBd, {from: accounts[1]});

		await expect(GardenContractV2vzRuQQ.getTotalrTLPHarvest.call(uintob3E6Tt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresshxDJMpO = "0x0000000000000000000000000000000000000001"
		const addressQPeNRl = accounts[2]
		const addresswrXSGGI = accounts[3]
		const GardenContractV2a2mWusA = await GardenContractV2.new(addresshxDJMpO, addressQPeNRl, addresswrXSGGI, {from: accounts[0]});
		const stringSMA0OJw = "qhOP7U0qJzdEVDtngj4akpJ7XGsY7u8gUE2T7YhRoLft6GUYPtcPCJ6CBnApCFMmk5iJ97SbFqFt"
		const uintotpFY84 = BigInt("122")
//		const uint256QA1wI8g = await GardenContractV2a2mWusA.totalTLPDecomposed.call(stringSMA0OJw, {from: accounts[4]});
//		const uint256t5rRT7L = await GardenContractV2a2mWusA.getTotalrTLPHarvest.call(uintotpFY84, {from: accounts[0]});

		await expect(GardenContractV2a2mWusA.totalTLPDecomposed.call(stringSMA0OJw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressNFkBfN = accounts[1]
		const addressNlvTvRw = accounts[1]
		const addressXiMhNB = accounts[4]
		const GardenContractV2l4otcpu = await GardenContractV2.new(addressNFkBfN, addressNlvTvRw, addressXiMhNB, {from: accounts[5]});
		const uintP8bjP3S = BigInt("671")
		const uintQjTPptW = BigInt("29")
		const stringEypIfJj = "tEaL9NptkHx4UXYTuVcWTMtUvDAwXTVMteT9y5oMtXNX6rq4dHWwyCBsjM"
		const uintZGlZ2NP = BigInt("66")
		const stringxEyK7CL = "NduIw9ObMbb436Pjd"
		const stringVoohQMe = "4lIsYtm5pNOSgxXVX4zO3Od5OICuKH9G5zlkm1aeFrezx4ei"
//		const stringwfvfXot = await GardenContractV2l4otcpu.decompose.call(stringEypIfJj, uintQjTPptW, uintP8bjP3S, {from: accounts[3]});
//		const stringjMH2WvI = await GardenContractV2l4otcpu.claimDecompose.call(stringxEyK7CL, uintZGlZ2NP, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256mRcqwRC = await GardenContractV2l4otcpu.totalGardenSupply.call(stringVoohQMe, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2l4otcpu.decompose.call(stringEypIfJj, uintQjTPptW, uintP8bjP3S, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressSnujV30 = accounts[4]
		const addressKO4sFam = accounts[3]
		const addressEsJFBNd = "0x0000000000000000000000000000000000000001"
		const GardenContractV2vzRuQQ = await GardenContractV2.new(addressSnujV30, addressKO4sFam, addressEsJFBNd, {from: accounts[4]});
		const stringdyXg7DC = "zEeEXY2pwebNUBDLE86vfCIlYgna4cfUI9A"
		const addressssYJssN = accounts[2]
		const addresswOBHddE = accounts[5]
		const uintATw1CqE = BigInt("137")
		const stringYalr8Ch = "Kj2nuhcgcjUxPDXIa22BeSWG7RbEuSUxK8rdQxUSKGEXwTl6n3bYMgSbOaD4I7JjFuboWNzU"
//		const uint256qTznP0B = await GardenContractV2vzRuQQ.totalGardenSupply.call(stringdyXg7DC, {from: accounts[2]});
//		const addressB3qtpQQ = await GardenContractV2vzRuQQ.addTokenOwner.call(addresswOBHddE, addressssYJssN, {from: accounts[3]});
//		const uint256MkMbEhc = await GardenContractV2vzRuQQ.timeUntilNextTLP.call(stringYalr8Ch, uintATw1CqE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2vzRuQQ.totalGardenSupply.call(stringdyXg7DC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressx655ULh = "0x0000000000000000000000000000000000000001"
		const addressl2eFoF = accounts[2]
		const addressM6Ms7Wp = accounts[3]
		const GardenContractV2a2mWusA = await GardenContractV2.new(addressx655ULh, addressl2eFoF, addressM6Ms7Wp, {from: accounts[0]});
		const boolBQBOHXW = false
		const uintiEUkKji = BigInt("3")
		const stringAiMLLY = "Nd9TPp2b"
		const uintwM0lAP = BigInt("157")
		const uintNYq96oi = BigInt("122")
		const addressKszDesO = accounts[2]
//		const uint256QuG9RAL = await GardenContractV2a2mWusA.plant.call(uintwM0lAP, stringAiMLLY, uintiEUkKji, boolBQBOHXW, {from: accounts[2]});
//		const uint256t5rRT7L = await GardenContractV2a2mWusA.getTotalrTLPHarvest.call(uintNYq96oi, {from: accounts[0]});
//		const addressK0JJMEG = await GardenContractV2a2mWusA.changeBenefitiary.call(addressKszDesO, {from: accounts[3]});

		await expect(GardenContractV2a2mWusA.plant.call(uintwM0lAP, stringAiMLLY, uintiEUkKji, boolBQBOHXW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressoqeMjIi = accounts[1]
		const addressbysSVtH = accounts[1]
		const addressQmBSBQ = accounts[4]
		const GardenContractV2l4otcpu = await GardenContractV2.new(addressoqeMjIi, addressbysSVtH, addressQmBSBQ, {from: accounts[5]});
		const uintr8Esc8 = BigInt("66")
		const stringxEyK7CL = "NduIw9ObMbb436Pjd"
		const stringVoohQMe = "4lIsYtm5pNOSgxXVX4zO3Od5OICuKH9G5zlkm1aeFrezx4ei"
//		const stringjMH2WvI = await GardenContractV2l4otcpu.claimDecompose.call(stringxEyK7CL, uintr8Esc8, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256mRcqwRC = await GardenContractV2l4otcpu.totalGardenSupply.call(stringVoohQMe, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2l4otcpu.claimDecompose.call(stringxEyK7CL, uintr8Esc8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})