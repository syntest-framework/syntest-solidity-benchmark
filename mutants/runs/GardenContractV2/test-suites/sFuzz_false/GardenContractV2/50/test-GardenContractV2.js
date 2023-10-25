const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressslQCLs = accounts[0]
		const addresscEBBxhf = accounts[3]
		const addresswAJx2bZ = accounts[5]
		const GardenContractV2C7qtBei = await GardenContractV2.new(addressslQCLs, addresscEBBxhf, addresswAJx2bZ, {from: accounts[4]});
		const stringhi5F8bw = "qvQFP7pp4hv63O2qR2nO0n82jrK2"
		const uintfJeH5vE = BigInt("109")
		const stringAd9MkXA = "Cg84FFrCr92Ewuo3Vbvim3uKt967epOmfjrfF4M7mUWIbOOzzShSSg"
		const uintDSRPnjM = BigInt("185")
		const uintVduTvW = BigInt("76")
		const stringPFEBK59 = "RvQadDDmpq"
		const addressd6wbRQD = accounts[4]
		const uint256qS7Wn0o = await GardenContractV2C7qtBei.totalTLPDecomposed.call(stringhi5F8bw, {from: accounts[1]});
		const stringy2jgmpe = await GardenContractV2C7qtBei.claimDecompose.call(stringAd9MkXA, uintfJeH5vE, {from: accounts[1]});
		const uint8NMRDJRS = await GardenContractV2C7qtBei.zeroHoldings.call(uintVduTvW, uintDSRPnjM, {from: accounts[1]});
		const uint256Pak9vrF = await GardenContractV2C7qtBei.totalGardenSupply.call(stringPFEBK59, {from: accounts[1]});
		const addresswcy8Da5 = await GardenContractV2C7qtBei.changeOwner.call(addressd6wbRQD, {from: accounts[0]});

		await expect(GardenContractV2C7qtBei.totalTLPDecomposed.call(stringhi5F8bw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressbdhNCJ = "0x0000000000000000000000000000000000000001"
		const addressDVjVM2h = accounts[0]
		const addressWJIdz3E = accounts[0]
		const GardenContractV2JupZfGT = await GardenContractV2.new(addressbdhNCJ, addressDVjVM2h, addressWJIdz3E, {from: accounts[1]});
		const stringyG8VTE6 = "ucVl4VOpYGzFmFhjAqCQlCpuljEaOBpFUcCwJcxtjXjAjthsQrhvfBIFSPBE"
		const uintntSqxRx = BigInt("245")
		const stringzN5W5Kb = "ECCtcgbqmOAJOigwhsafkJi0oyFqAnAznAzuuYnd5hXkEBkMGuG9uaC44F5px"
		const uintqROzp3v = BigInt("31")
		const stringcUebxK = "00McTigk3DRaAVOe4WiHTmI3UbilRZCGDdSxE9msnra5K5fPshhmzMCR3bonLf5uBgPgR"
		const uint256EmSBuAI = await GardenContractV2JupZfGT.totalTLPGrowing.call(stringyG8VTE6, {from: accounts[0]});
		const stringPmTf8Fm = await GardenContractV2JupZfGT.claimDecompose.call(stringzN5W5Kb, uintntSqxRx, {from: accounts[3]});
		await GardenContractV2JupZfGT.totalBedSupply.call(stringcUebxK, uintqROzp3v, {from: accounts[2]});

		await expect(GardenContractV2JupZfGT.totalTLPGrowing.call(stringyG8VTE6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressGZGfn4J = accounts[5]
		const addressRG58Am8 = accounts[3]
		const addressGophfOp = accounts[0]
		const GardenContractV2h0J4zt = await GardenContractV2.new(addressGZGfn4J, addressRG58Am8, addressGophfOp, {from: accounts[4]});
		const uintl85HtE2 = BigInt("201")
		const stringBQUE0X1 = "rjVGbtrce4jM4v1J4r3pLYxyQW2ThRDz59LXPRJxDwDbEkvAdu2KwVnylqfs5u"
		const stringilP1nY = "IOjw1fnWGUiDBxoLHBNsnbKuLmqz0VYhqauqmJwflgyK9ZC5TfmRR28CvmO4UfWkJ"
		const addressvKN3htc = accounts[1]
		const addressXDWR99b = accounts[1]
		const addressDLQdds2 = accounts[4]
		const stringN6sHmEU = "zk1sx6hzgsFxDBk7Uqke5JykmPWITtEmiXUEmjNUFtao8eGlhuBI81JYBz3N3r262e77TfTetSvyghjKSTq1QADK1T9isYIhASS"
		const boolaKcVYPr = false
		const uintIjFtYFW = BigInt("113")
		const stringQQ782wL = "mYpU9eVGRCU4fOaH0ERqRCLNw0UcUJPwM"
		const uintNfm5nrD = BigInt("1622")
		const uinticeKGZW = BigInt("71")
		await GardenContractV2h0J4zt.totalBedSupply.call(stringBQUE0X1, uintl85HtE2, {from: accounts[0]});
		const uint256WNNcAJf = await GardenContractV2h0J4zt.balanceOf.call(addressvKN3htc, stringilP1nY, {from: accounts[1]});
		const addressUD6paB1 = await GardenContractV2h0J4zt.addTokenOwner.call(addressDLQdds2, addressXDWR99b, {from: accounts[0]});
		const stringgYqTAYV = await GardenContractV2h0J4zt.harvestAllBeds.call(stringN6sHmEU, {from: accounts[4]});
		const uint2561nAu0k = await GardenContractV2h0J4zt.plant.call(uintNfm5nrD, stringQQ782wL, uintIjFtYFW, boolaKcVYPr, {from: accounts[4]});
		const uint256Wkk5ioI = await GardenContractV2h0J4zt.getTotalsTLPHarvest.call(uinticeKGZW, {from: accounts[2]});

		await expect(GardenContractV2h0J4zt.totalBedSupply.call(stringBQUE0X1, uintl85HtE2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressVU3uqnc = accounts[2]
		const address0IMhsF = accounts[0]
		const addressnpyX79D = accounts[4]
		const GardenContractV2YKaZJzU = await GardenContractV2.new(addressVU3uqnc, address0IMhsF, addressnpyX79D, {from: accounts[2]});
		const uintLV1ceKE = BigInt("130")
		const stringwkmHBF = "CmEznuCwqfYaej2ipvcBlAaQqvpjGrR31qEpfSZ7VzsGulVH3pluBX7VFYvdIJ4aMJLeaQj5GfMcBNJBfi49"
		const uintTYbOfHA = BigInt("130")
		const stringkPzRT9 = "ewjptbxm7tHKiHOijwsJU8jsPwKShNWrSB12XuEgD8x"
		const uint256tSSwuJX = await GardenContractV2YKaZJzU.timeUntilNextTLP.call(stringwkmHBF, uintLV1ceKE, {from: accounts[2]});
		const uint256PVaSQHa = await GardenContractV2YKaZJzU.timeUntilNextTLP.call(stringkPzRT9, uintTYbOfHA, {from: accounts[0]});

		await expect(GardenContractV2YKaZJzU.timeUntilNextTLP.call(stringwkmHBF, uintLV1ceKE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressnkxou2F = accounts[0]
		const addressbwMTrEy = accounts[1]
		const addressbefBOHO = accounts[4]
		const GardenContractV2rLlA58J = await GardenContractV2.new(addressnkxou2F, addressbwMTrEy, addressbefBOHO, {from: accounts[3]});
		const stringP0dh4xN = "q4dlKxVCQsYEyvQ3ybfN4cR6jGgwbEO1rcABkN2FgetVoIPHuwYdiQjVnqCnobf3Urjmja5k5rePw6t7oDGlsUSIB"
		const uintNaWkO4f = BigInt("255")
		const uintqP1RNh5 = BigInt("223")
		const stringjSjxZrR = await GardenContractV2rLlA58J.harvestAllBeds.call(stringP0dh4xN, {from: accounts[3]});
		const uint8rPZihZ = await GardenContractV2rLlA58J.setTimeStamp.call(uintqP1RNh5, uintNaWkO4f, {from: accounts[0]});

		await expect(GardenContractV2rLlA58J.harvestAllBeds.call(stringP0dh4xN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressigls8ks = accounts[5]
		const addressGe08KUj = accounts[1]
		const addressq5OLP1 = accounts[2]
		const GardenContractV2pOxmUZT = await GardenContractV2.new(addressigls8ks, addressGe08KUj, addressq5OLP1, {from: accounts[1]});
		const stringW7jLQ3 = "lh5iYABrKEH3xmV4R8VjFnHfZymHiqhsXMfZpMp3jMcrgKQYWEu8LWrSyEdBFUhVTMTOqxdNdV2aKLj3D"
		const uintMInVBCH = BigInt("19")
		const uintHvyiUxb = BigInt("47")
		const uint256JumtSPI = await GardenContractV2pOxmUZT.totalTLPGrown.call(stringW7jLQ3, {from: accounts[0]});
		const uint8Rf21uO1 = await GardenContractV2pOxmUZT.setTimeStamp.call(uintHvyiUxb, uintMInVBCH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2pOxmUZT.totalTLPGrown.call(stringW7jLQ3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressdkhmS6S = accounts[3]
		const addressu1BzkmX = "0x0000000000000000000000000000000000000001"
		const addresscq7s1b = accounts[1]
		const GardenContractV2S0zDOKY = await GardenContractV2.new(addressdkhmS6S, addressu1BzkmX, addresscq7s1b, {from: accounts[5]});
		const addressY5Zos11 = accounts[4]
		const addressvua0S8K = accounts[0]
		const addressnZUgRsV = await GardenContractV2S0zDOKY.changeBenefitiary.call(addressY5Zos11, {from: accounts[1]});
		const addressEp9IPwi = await GardenContractV2S0zDOKY.changeBenefitiary.call(addressvua0S8K, {from: accounts[1]});

		await expect(GardenContractV2S0zDOKY.changeBenefitiary.call(addressY5Zos11, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressPAigFU4 = accounts[3]
		const addressRaKXkh = accounts[2]
		const addressxjHNSC = accounts[1]
		const GardenContractV2TFZy7rr = await GardenContractV2.new(addressPAigFU4, addressRaKXkh, addressxjHNSC, {from: accounts[3]});
		const stringxhk3uo1 = "OFsdo6gMhI6Rcc2EF1unPvnahmdepELesEhbWlxoejxdkGHSqHhrTlwi4az4QdgRhpcV44d5B"
		const addressMglVIiY = accounts[3]
		const addressuIsb2NB = accounts[4]
		const stringwBYuWkn = "ds0OKjxthgZquabyfnumGcNjUq3OyJlTolLAmjkGj5PrULMgI7XXTy"
		const uint256hUJBWA = await GardenContractV2TFZy7rr.balanceOf.call(addressMglVIiY, stringxhk3uo1, {from: accounts[4]});
		const addressD5r5Fuk = await GardenContractV2TFZy7rr.changeOwner.call(addressuIsb2NB, {from: accounts[4]});
		const uint256RpCi0V = await GardenContractV2TFZy7rr.totalTLPDecomposed.call(stringwBYuWkn, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2TFZy7rr.balanceOf.call(addressMglVIiY, stringxhk3uo1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressr4o3D09 = accounts[5]
		const addresspxuCx2e = accounts[1]
		const addressPRT4M5D = accounts[2]
		const GardenContractV2pOxmUZT = await GardenContractV2.new(addressr4o3D09, addresspxuCx2e, addressPRT4M5D, {from: accounts[1]});
		const uintB2r3uj = BigInt("147")
		const stringOJFLjN = "Le3HQdEKShsgl9fOj8VI31Tc7MI"
		const uinthN35Tgx = BigInt("201")
		const stringYd16nH0 = "Ssgyiev54CJmHu47werPNXMDNGYv9Z4"
		const uintcViO6mi = BigInt("240")
		const stringmHy6iGr = "TyTOYpJHraX6UU4UD4NcucS4bEuextUX"
		const stringW7jLQ3 = "lh5iYABrKEH3xmV4R8VjFnHfZymHiqhsXMfZpMp3jMcrgKQYWEu8LWrSyEdBFUhVTMTOqxdNdV2aKLj3D"
		const stringcEhLOB6 = await GardenContractV2pOxmUZT.withdraw.call(stringOJFLjN, uintB2r3uj, {from: accounts[2]});
		const stringIC9El6q = await GardenContractV2pOxmUZT.withdraw.call(stringYd16nH0, uinthN35Tgx, {from: accounts[5]});
		await GardenContractV2pOxmUZT.totalBedSupply.call(stringmHy6iGr, uintcViO6mi, {from: accounts[2]});
		const uint256JumtSPI = await GardenContractV2pOxmUZT.totalTLPGrown.call(stringW7jLQ3, {from: accounts[0]});

		await expect(GardenContractV2pOxmUZT.withdraw.call(stringOJFLjN, uintB2r3uj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const address0zHHKp = accounts[1]
		const addressFO3lqwt = accounts[4]
		const addresslcfZ2u = accounts[0]
		const GardenContractV2jcuSeoN = await GardenContractV2.new(address0zHHKp, addressFO3lqwt, addresslcfZ2u, {from: accounts[4]});
		const uintswmdb3O = BigInt("96")
		const stringtH29vf2 = "gI5jlaB0cqUfq6yMDLZd6Eg5rrGVlymRfb759R79ZQpYJJSlZyC9VQkASSnHW64iz8PdNxJWHJ5kIqVlHG"
		const addressBzzt6on = accounts[2]
		const uintfma78F9 = BigInt("42")
		const uint256ryKx06Y = await GardenContractV2jcuSeoN.growthRemaining.call(addressBzzt6on, stringtH29vf2, uintswmdb3O, {from: accounts[2]});
		const uint256Fnfahk4 = await GardenContractV2jcuSeoN.getTotalrTLPHarvest.call(uintfma78F9, {from: accounts[1]});

		await expect(GardenContractV2jcuSeoN.growthRemaining.call(addressBzzt6on, stringtH29vf2, uintswmdb3O, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressMySB3f = accounts[0]
		const addressGWOdD4g = accounts[1]
		const addressO1ATaf = accounts[4]
		const GardenContractV2rLlA58J = await GardenContractV2.new(addressMySB3f, addressGWOdD4g, addressO1ATaf, {from: accounts[3]});
		const uintANuF2q5 = BigInt("255")
		const uintFxmxCSc = BigInt("223")
		const uint8rPZihZ = await GardenContractV2rLlA58J.setTimeStamp.call(uintFxmxCSc, uintANuF2q5, {from: accounts[0]});

		await expect(GardenContractV2rLlA58J.setTimeStamp.call(uintFxmxCSc, uintANuF2q5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresssdBM5iH = accounts[5]
		const addressApP5s1m = accounts[2]
		const addressDfoyiO2 = accounts[4]
		const GardenContractV2QWuW4YR = await GardenContractV2.new(addresssdBM5iH, addressApP5s1m, addressDfoyiO2, {from: accounts[1]});
		const boolNozM1Ko = true
		const uintmOKDZ5P = BigInt("37")
		const stringtDGqLKc = "Oi2wxKz9z6ULSJfyl2AEA61UnQxNbiSF0lzPWJG3PzevhSBQCQxmNcJ30cqtkSleV62aAoVejkrQ2f1r2GzLt8LFe4sRT"
		const uintdJ9Jzz8 = BigInt("673")
		const stringI3x69Pt = "Em39i6hXLDPnj6Qz"
		const addressaxg98oY = accounts[1]
		const uintSkQG7HH = BigInt("22")
		const stringw6bNBD3 = "qhUGBye6NCqjTbxNyCjIuLQIZZaunvAGdV1kxEAkiOFBUrswJST6Ob2d4nUKM9ez0l3iA7Xga6LH3ddtFBLiRTlqnAoZ2SoKf3"
		const boolWUdMw1M = false
		const uintppjNo0B = BigInt("168")
		const stringMcyZni = "GUz8oTke3HPm161DCoNxRGG6aSvVlyX5thQhyIkaE9lmqGlNAXa9hQn1TbTSbEqvJbHvBRcgdITs"
		const uinth5yiclF = BigInt("1325")
		const uintimOF5u6 = BigInt("39")
		const uintD3SGodD = BigInt("64")
		const uint256yEBWE3L = await GardenContractV2QWuW4YR.plant.call(uintdJ9Jzz8, stringtDGqLKc, uintmOKDZ5P, boolNozM1Ko, {from: accounts[1]});
		const uint256u1B4EVd = await GardenContractV2QWuW4YR.balanceOf.call(addressaxg98oY, stringI3x69Pt, {from: accounts[3]});
		const uint256VYmUHVK = await GardenContractV2QWuW4YR.timeUntilNextTLP.call(stringw6bNBD3, uintSkQG7HH, {from: accounts[1]});
		const uint256QBJDvcD = await GardenContractV2QWuW4YR.plant.call(uinth5yiclF, stringMcyZni, uintppjNo0B, boolWUdMw1M, {from: accounts[2]});
		const uint8Gsi9CsF = await GardenContractV2QWuW4YR.zeroHoldings.call(uintD3SGodD, uintimOF5u6, {from: accounts[2]});

		await expect(GardenContractV2QWuW4YR.plant.call(uintdJ9Jzz8, stringtDGqLKc, uintmOKDZ5P, boolNozM1Ko, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressdjP7YRX = accounts[2]
		const addressCirY6KJ = accounts[0]
		const addressQBHEJuu = accounts[4]
		const GardenContractV2YKaZJzU = await GardenContractV2.new(addressdjP7YRX, addressCirY6KJ, addressQBHEJuu, {from: accounts[2]});
		const stringYdtGXh = "kNAQgtRPpA2atuItbdgfdgQojVvFYPeM3QwgBNHr85GPMwakJRljyhLBi69bBVMAWRh6XVejD16KDbUIeyuDAJrj7qpyGeTYxC"
		const uintdnk62Ls = BigInt("153")
		const uinthGl5FjF = BigInt("117")
		const uintFSK48xG = BigInt("140")
		const stringwkmHBF = "CmEznuCwqfYaep2ipvcBlAaQqvpjGrR31qEpfSZ7VzsGulVH3pluBX7VFYvdIJ4aMJLeaQj5GfMcBNJBfi49"
		const uintrd2jRKW = BigInt("60")
		const stringZLXgokA = "2xiKNDK1gW8eJ94hP8Y"
		const uint256GeYR9Ny = await GardenContractV2YKaZJzU.totalGardenSupply.call(stringYdtGXh, {from: accounts[0]});
		const uint8gbbi7Si = await GardenContractV2YKaZJzU.setTimeStamp.call(uinthGl5FjF, uintdnk62Ls, {from: accounts[0]});
		const uint256tSSwuJX = await GardenContractV2YKaZJzU.timeUntilNextTLP.call(stringwkmHBF, uintFSK48xG, {from: accounts[2]});
		const stringqviD4Di = await GardenContractV2YKaZJzU.claimDecompose.call(stringZLXgokA, uintrd2jRKW, {from: accounts[3]});

		await expect(GardenContractV2YKaZJzU.totalGardenSupply.call(stringYdtGXh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresswploIpg = accounts[1]
		const addressXsNk0TC = accounts[1]
		const addressTaFdkBW = accounts[3]
		const GardenContractV2CcXCVqr = await GardenContractV2.new(addresswploIpg, addressXsNk0TC, addressTaFdkBW, {from: accounts[1]});
		const addressKQvAOgt = accounts[2]
		const uintKdvt4kD = BigInt("19")
		const stringFQdpAI = "dfdjikF3IldTCpUxHn2mGlcibs1epaEJqHB3OLW1jxulH5zfxf69Hyk6XnhYKONl2AOFfb5noHVLfM4Ioeyerf5p9vf3"
		const addressXhNtofO = accounts[1]
		const addressiz87I7p = accounts[1]
		const addresskhZU7y6 = await GardenContractV2CcXCVqr.changeBenefitiary.call(addressKQvAOgt, {from: accounts[1]});
		const stringOSpfKv2 = await GardenContractV2CcXCVqr.harvest.call(stringFQdpAI, uintKdvt4kD, {from: accounts[2]});
		const addressSc6ZhFb = await GardenContractV2CcXCVqr.renounceTokenOwner.call(addressXhNtofO, {from: accounts[3]});
		const addressDkF3Hp6 = await GardenContractV2CcXCVqr.changeOwner.call(addressiz87I7p, {from: accounts[4]});

		await expect(GardenContractV2CcXCVqr.harvest.call(stringFQdpAI, uintKdvt4kD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresswqOhNSA = accounts[3]
		const addressub9HRB = accounts[2]
		const addresshP5lTtB = accounts[1]
		const GardenContractV2TFZy7rr = await GardenContractV2.new(addresswqOhNSA, addressub9HRB, addresshP5lTtB, {from: accounts[3]});
		const stringOtyfmlI = "qVfwIH0Ory5hoSG4kyM"
		const stringxhk3uo1 = "OFsdo6gMhI6Rcc2EF1unPvnahmdepELesEhbWlxoejxdkGHSqHhrTlwi4az4QdgRhpcV4Vd5B"
		const addressw8grtfh = accounts[4]
		const uint256ROh2kd = await GardenContractV2TFZy7rr.totalTLPBurnt.call(stringOtyfmlI, {from: accounts[4]});
		const uint256hUJBWA = await GardenContractV2TFZy7rr.balanceOf.call(addressw8grtfh, stringxhk3uo1, {from: accounts[4]});

		await expect(GardenContractV2TFZy7rr.totalTLPBurnt.call(stringOtyfmlI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressxI4U3O0 = accounts[3]
		const addressUJG9au = accounts[2]
		const addresszviKmH = accounts[1]
		const GardenContractV2TFZy7rr = await GardenContractV2.new(addressxI4U3O0, addressUJG9au, addresszviKmH, {from: accounts[3]});
		const uintTw59KAB = BigInt("80")
		const stringt6YCRI6 = "S2hV2fosY1QS6JRTKAWm7NSFOGebGF5xi7YVLxvjqdaLRXvqGzqYPnhJbUtSLOqJbQQm3sC7S"
		const stringxhk3uo1 = "OFsdo6gMhI6Rcc2EF1unPvnahmdepELesEhbWlxoejxdkGHSqHhrTlwi4az4QdgRhpcV44d5B"
		const addresslmO3Qet = accounts[5]
		const uintV1Q6UvE = BigInt("89")
		const stringcgBTH3N = "cqJPjrTEGyNhYPyplns8Ohm93cTmPPs7DlmYPQcLVCSZKaDntq3rhzWwUkLo6hSRNLn9P87"
		const stringYQvazAm = await GardenContractV2TFZy7rr.claimDecompose.call(stringt6YCRI6, uintTw59KAB, {from: accounts[1]});
		const uint256hUJBWA = await GardenContractV2TFZy7rr.balanceOf.call(addresslmO3Qet, stringxhk3uo1, {from: accounts[4]});
		const stringZBAX2sG = await GardenContractV2TFZy7rr.withdraw.call(stringcgBTH3N, uintV1Q6UvE, {from: accounts[3]});

		await expect(GardenContractV2TFZy7rr.claimDecompose.call(stringt6YCRI6, uintTw59KAB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresskJr9Xcj = accounts[3]
		const addressgErbSWV = accounts[2]
		const addresss5W2KQr = accounts[1]
		const GardenContractV2TFZy7rr = await GardenContractV2.new(addresskJr9Xcj, addressgErbSWV, addresss5W2KQr, {from: accounts[3]});
		const uintKaFQRIS = BigInt("137")
		const boolp7kx32v = false
		const uintX8TPbiZ = BigInt("135")
		const stringsNFcqA = "VynQ4quzrO9yzBlILNnnmu3GSEbz90suTNuuNHCv45OlG845VIAijzYXLtnN8kDwsgWnmn2d52CU"
		const uintJKHLy7X = BigInt("1822")
		const stringxhk3uo1 = "OFsdo6gMhI6Rcc2EF1unPvnahmdepELesEhbWlxoejxdkGHSqHhrTlwi4az4QdgRhpcV44d5B"
		const addressBJKeEj7 = accounts[5]
		const uint256U4Q86AN = await GardenContractV2TFZy7rr.getTotalsTLPHarvest.call(uintKaFQRIS, {from: accounts[3]});
		const uint256IQttHRJ = await GardenContractV2TFZy7rr.plant.call(uintJKHLy7X, stringsNFcqA, uintX8TPbiZ, boolp7kx32v, {from: accounts[3]});
		const uint256hUJBWA = await GardenContractV2TFZy7rr.balanceOf.call(addressBJKeEj7, stringxhk3uo1, {from: accounts[4]});

		await expect(GardenContractV2TFZy7rr.getTotalsTLPHarvest.call(uintKaFQRIS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressoOVv5G8 = accounts[0]
		const addressg2mbKmQ = accounts[1]
		const addressBznif3i = accounts[4]
		const GardenContractV2rLlA58J = await GardenContractV2.new(addressoOVv5G8, addressg2mbKmQ, addressBznif3i, {from: accounts[3]});
		const addressk6ymHkw = accounts[3]
		const addressSys8ogH = "0x0000000000000000000000000000000000000001"
		const stringP0dh4xN = "q4dlKxVCQsYEyvQ3ybfN4cR6jGgwbEO1rcABkN2FgetVoIPHuwYdiQjVnqCnobf3Urj8ja5k5rePw6t7oDGlsUSIB"
		const addressdq5fi4w = accounts[2]
		const addressSYbKzn5 = await GardenContractV2rLlA58J.addTokenOwner.call(addressSys8ogH, addressk6ymHkw, {from: accounts[3]});
		const stringjSjxZrR = await GardenContractV2rLlA58J.harvestAllBeds.call(stringP0dh4xN, {from: accounts[3]});
		const addresswRnSBjD = await GardenContractV2rLlA58J.changeBenefitiary.call(addressdq5fi4w, {from: accounts[5]});

		await expect(GardenContractV2rLlA58J.addTokenOwner.call(addressSys8ogH, addressk6ymHkw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressoOxdHkj = accounts[3]
		const addressDAAJTlX = accounts[0]
		const addressVkf0eU3 = accounts[4]
		const GardenContractV2MCJmPbI = await GardenContractV2.new(addressoOxdHkj, addressDAAJTlX, addressVkf0eU3, {from: accounts[0]});
		const uintM9DV1Gv = BigInt("202")
		const stringdwANEvb = "xeNII0VxKgiFCkNxoqI46aouWENx8rsKW6cp38kHdgB0Nt2mOqVrw1dNbw6H8n"
		const addressLw7DLL = "0x0000000000000000000000000000000000000001"
		const addresshk9IXBM = accounts[1]
		const addressZsOUfay = accounts[5]
		const stringXKhIfzo = "HPiJ2w2rLORUtT8SriOMRGvjDJNLRRWyBMKu0YitvXqpBtTrL3RBAgLPAB1t6rfjfGktiBoNl1PHVLHnTE6"
		const uint256dqJqzEA = await GardenContractV2MCJmPbI.getTotalrTLPHarvest.call(uintM9DV1Gv, {from: accounts[2]});
		const uint256LcAGiic = await GardenContractV2MCJmPbI.balanceOf.call(addressLw7DLL, stringdwANEvb, {from: accounts[3]});
		const addressF420Eod = await GardenContractV2MCJmPbI.addTokenOwner.call(addressZsOUfay, addresshk9IXBM, {from: accounts[1]});
		const uint256IzaRVj1 = await GardenContractV2MCJmPbI.totalTLPBurnt.call(stringXKhIfzo, {from: accounts[2]});

		await expect(GardenContractV2MCJmPbI.getTotalrTLPHarvest.call(uintM9DV1Gv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressa0WDaB = accounts[3]
		const addressfMU5Zaq = accounts[5]
		const addressPhohI8Y = accounts[0]
		const GardenContractV2rfkfslr = await GardenContractV2.new(addressa0WDaB, addressfMU5Zaq, addressPhohI8Y, {from: "0x0000000000000000000000000000000000000001"});
		const stringpxa1YwP = "GRfFcWUE2tOec86vBoLcI0U8pTrA6gGDZJmRN7BYY8evk"
		const stringnnpKiZ = "JtUgIOASWWm63TWF4KQIqyFU0gS6NItdvhwrtsER1jF988pE9tcCxV9bCdd02H5FKFUa46T5e7izz5TYiT4h"
		const stringYOw17ZO = "hxmRlTnGAcxOmYOTaGq2mtqiIRJBNJez44KkHEvbqLMnQtEOR51osemUIMDHIkg52N6QGZuC7qackH6mWacSCe8UxU"
		const uintiaQJMCz = BigInt("222")
		const uintlocqThQ = BigInt("90")
		const stringBjtVSFM = "uiYu9NjWw8x4nSUJA2kRwtsbmb32uKvLNsM9Mx2qGd0aYtYVQ32k7pje0jklubXGhwHVoLmOuurICahjg5W3uS476PCb0YNsMT"
		const addressHPHAWo = accounts[1]
		const stringGEZOrF = "rEJRChJFzJzqUcLDrsS1NANK2RlWahLzaaVx7vy8Pe"
		const uint256eAhDxbL = await GardenContractV2rfkfslr.totalTLPDecomposed.call(stringpxa1YwP, {from: "0x0000000000000000000000000000000000000001"});
		const stringtSAV0dz = await GardenContractV2rfkfslr.harvestAllBeds.call(stringnnpKiZ, {from: accounts[4]});
		const uint256DmuxRLM = await GardenContractV2rfkfslr.totalTLPGrowing.call(stringYOw17ZO, {from: "0x0000000000000000000000000000000000000001"});
		const uint256EQCvRSB = await GardenContractV2rfkfslr.getTotalsTLPHarvest.call(uintiaQJMCz, {from: accounts[2]});
		const uint25649t0cf = await GardenContractV2rfkfslr.growthRemaining.call(addressHPHAWo, stringBjtVSFM, uintlocqThQ, {from: accounts[0]});
		const uint256lWzx48Z = await GardenContractV2rfkfslr.totalGardenSupply.call(stringGEZOrF, {from: accounts[1]});
	});

	it('test for GardenContractV2', async () => {
		const addressNnXiwTZ = accounts[0]
		const addressM2wvnuX = accounts[1]
		const addresskN1v5IO = accounts[4]
		const GardenContractV2rLlA58J = await GardenContractV2.new(addressNnXiwTZ, addressM2wvnuX, addresskN1v5IO, {from: accounts[3]});
		const uintQwf2NO3 = BigInt("1984")
		const uintNpzNj2S = BigInt("174")
		const stringt1T4WGC = "XPP3CQBiqfShic1VOtQz2W1TaffNrRd9y1Wzw7YwMA1Noyya"
		const addressWC2Jgc2 = accounts[1]
		const stringEsO3C0j = "gcYEGzvmdNNrAfcHpNypFgydzE3jtOhjKJmU2ayVdtzC6eNCIsEFQNqKz951EmHimlbZUQpPV"
		const stringP0dh4xN = "q4dlKxVCQsYEyvQ3ybfN4cR6jGgwbEO1rcABjN2FgetVoIPHuwYdiQjVnqCnobf3Urjmja5krePw6t7oDGlsUSIB"
		const stringg8c5hfE = await GardenContractV2rLlA58J.decompose.call(stringt1T4WGC, uintNpzNj2S, uintQwf2NO3, {from: "0x0000000000000000000000000000000000000001"});
		const addresssu02YbB = await GardenContractV2rLlA58J.changeOwner.call(addressWC2Jgc2, {from: accounts[1]});
		const uint256EcMynnW = await GardenContractV2rLlA58J.totalTLPDecomposed.call(stringEsO3C0j, {from: accounts[1]});
		const stringjSjxZrR = await GardenContractV2rLlA58J.harvestAllBeds.call(stringP0dh4xN, {from: accounts[3]});

		await expect(GardenContractV2rLlA58J.decompose.call(stringt1T4WGC, uintNpzNj2S, uintQwf2NO3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresstygMil0 = accounts[2]
		const addresssB924hr = accounts[0]
		const addressdEPSsX = accounts[4]
		const GardenContractV2YKaZJzU = await GardenContractV2.new(addresstygMil0, addresssB924hr, addressdEPSsX, {from: accounts[2]});
		const addressIY4MTG0 = accounts[2]
		const uintsLcy3Ei = BigInt("130")
		const stringwkmHBF = "CmEznuCwqfYaep2ipvcBlAaQqvpjGrR31qEpfSZ7VzsGulVH3pluBX7VFYvdIJ4aMpJLeaQj5GfMcBNJBfi49"
		const uintMzJzrr = BigInt("27")
		const stringhLHgLrt = "Jyb3RAipUxxSuOo5IBGQnK47pWSEwPmk3i8Bo0g"
		const addressAgaNRmt = await GardenContractV2YKaZJzU.renounceTokenOwner.call(addressIY4MTG0, {from: accounts[2]});
		const uint256tSSwuJX = await GardenContractV2YKaZJzU.timeUntilNextTLP.call(stringwkmHBF, uintsLcy3Ei, {from: accounts[2]});
		const uint256ywRT91 = await GardenContractV2YKaZJzU.timeUntilNextTLP.call(stringhLHgLrt, uintMzJzrr, {from: accounts[3]});

		await expect(GardenContractV2YKaZJzU.renounceTokenOwner.call(addressIY4MTG0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressrWIU03s = accounts[3]
		const addressBNk36o = accounts[2]
		const addressyKRTQ6s = accounts[1]
		const GardenContractV2TFZy7rr = await GardenContractV2.new(addressrWIU03s, addressBNk36o, addressyKRTQ6s, {from: accounts[3]});
		const addressA9Mmn7j = accounts[5]
		const uintRpxcs5e = BigInt("44")
		const uintjh4TPMD = BigInt("220")
		const stringJEUvsPC = "HbV5tldeQPU2TYT4QJaRRmx4ygahO98fSfKIutIq3hSJdxIQTndbMUA698lf6TCXmXdMG8nbIq3Csi4IcLvySLjtn"
		const addressk72xOy0 = await GardenContractV2TFZy7rr.changeOwner.call(addressA9Mmn7j, {from: accounts[3]});
		const uint256lims4fb = await GardenContractV2TFZy7rr.getTotalrTLPHarvest.call(uintRpxcs5e, {from: accounts[3]});
		const stringpFO0lK3 = await GardenContractV2TFZy7rr.claimDecompose.call(stringJEUvsPC, uintjh4TPMD, {from: accounts[2]});

		await expect(GardenContractV2TFZy7rr.getTotalrTLPHarvest.call(uintRpxcs5e, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresss6kQlS3 = accounts[3]
		const addressDtKLZIF = accounts[2]
		const addresskkwxdH = accounts[1]
		const GardenContractV2TFZy7rr = await GardenContractV2.new(addresss6kQlS3, addressDtKLZIF, addresskkwxdH, {from: accounts[3]});
		const uintxYhGd06 = BigInt("0")
		const addresssLvIXZq = accounts[3]
		const uint256lims4fb = await GardenContractV2TFZy7rr.getTotalrTLPHarvest.call(uintxYhGd06, {from: accounts[3]});
		const addressdvOe0zw = await GardenContractV2TFZy7rr.changeOwner.call(addresssLvIXZq, {from: accounts[2]});

		await expect(GardenContractV2TFZy7rr.getTotalrTLPHarvest.call(uintxYhGd06, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})