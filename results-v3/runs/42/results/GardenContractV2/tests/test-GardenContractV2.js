const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressk9ImmDH = accounts[5]
		const addresslkJ3j2n = accounts[3]
		const addressDMNAZ1q = accounts[0]
		const GardenContractV2wkMKhoY = await GardenContractV2.new(addressk9ImmDH, addresslkJ3j2n, addressDMNAZ1q, {from: accounts[0]});
		const uintxD0eFgY = BigInt("200")
		const uintljyJ6Mv = BigInt("215")
		const uintfYvvuO2 = BigInt("209")
		const stringSyUTbD = "9FRPbTc9FcmFSNur6tpiQXksa1LYimenExfSYiLSVxAyTss0over"
		const uint8NVHVpix = await GardenContractV2wkMKhoY.zeroHoldings.call(uintljyJ6Mv, uintxD0eFgY, {from: accounts[3]});
		const uint256r9bwF5y = await GardenContractV2wkMKhoY.timeUntilNextTLP.call(stringSyUTbD, uintfYvvuO2, {from: accounts[4]});

		await expect(GardenContractV2wkMKhoY.zeroHoldings.call(uintljyJ6Mv, uintxD0eFgY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressVYuiYhm = accounts[3]
		const addressdo1c9LK = accounts[1]
		const addressN6sI8ia = accounts[2]
		const GardenContractV2Oqw4aW = await GardenContractV2.new(addressVYuiYhm, addressdo1c9LK, addressN6sI8ia, {from: accounts[4]});
		const uintMRmIX2y = BigInt("120")
		const uintppGRKHk = BigInt("149")
		const stringklPI64h = "hxbU"
		const addresskWiPhFx = accounts[4]
		const uintwUgVfYz = BigInt("152")
		const stringeJSM5G = "RfLqxAKqpSz6rqKNJ9HWk35OHKYdHHVKXqTUSCsRyN22"
		const uint9DdVMx = BigInt("12")
		const stringMSKlX2T = "PsyQ7h4MXKlsXc4fFcAlfjFm6xhe6bzVMMXEV6Xk4L16rC5hATtYPbYM1dQD8jxaVbrgtyAy5TXIDFoTNfM0Hj0JxwqMyuTd"
		const address0CUNfP = "0x0000000000000000000000000000000000000001"
		const uintA3VtGlb = BigInt("106")
		const stringD4leB8A = "BfaO6akL5jT35P4789RmRq2OAGimEnc0wrkOPEtFoUfVi9IB2nBrRtUWM1vuidaFGw2k"
		const uint256zUNNP30 = await GardenContractV2Oqw4aW.getTotalsTLPHarvest.call(uintMRmIX2y, {from: "0x0000000000000000000000000000000000000001"});
		const uint256X52Wez6 = await GardenContractV2Oqw4aW.growthRemaining.call(addresskWiPhFx, stringklPI64h, uintppGRKHk, {from: accounts[0]});
		await GardenContractV2Oqw4aW.totalBedSupply.call(stringeJSM5G, uintwUgVfYz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VnkhVNh = await GardenContractV2Oqw4aW.growthRemaining.call(address0CUNfP, stringMSKlX2T, uint9DdVMx, {from: accounts[0]});
		const uint256x3iTl1W = await GardenContractV2Oqw4aW.getTotalsTLPHarvest.call(uintA3VtGlb, {from: accounts[3]});
		const uint256kzbymyW = await GardenContractV2Oqw4aW.totalTLPGrowing.call(stringD4leB8A, {from: accounts[1]});

		await expect(GardenContractV2Oqw4aW.getTotalsTLPHarvest.call(uintMRmIX2y, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const address04QHxH = accounts[0]
		const addressmBX5gy0 = accounts[2]
		const addresszWCwTXo = accounts[2]
		const GardenContractV2bZscx0w = await GardenContractV2.new(address04QHxH, addressmBX5gy0, addresszWCwTXo, {from: "0x0000000000000000000000000000000000000001"});
		const uintRJQ9NAL = BigInt("124")
		const uintUHmLivy = BigInt("25")
		const stringfz1GcL6 = "gtxibpVQRBhyrIdc3xACN5RzwLx0GEYjFXjfRIFaU6tMzKpaDmsGM"
		const uint2566O0QX5 = await GardenContractV2bZscx0w.getTotalrTLPHarvest.call(uintRJQ9NAL, {from: accounts[0]});
		const stringDsPDSfc = await GardenContractV2bZscx0w.claimDecompose.call(stringfz1GcL6, uintUHmLivy, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GardenContractV2', async () => {
		const addressKNKS4do = accounts[2]
		const addresscKHEjUi = "0x0000000000000000000000000000000000000001"
		const addressanIMzTD = accounts[3]
		const GardenContractV2v9ynJzP = await GardenContractV2.new(addressKNKS4do, addresscKHEjUi, addressanIMzTD, {from: accounts[2]});
		const uintNNMn4N = BigInt("156")
		const stringbIz0yWY = "eWAVwUdPA6RYPjBkr1sKFQ8gGrnhWHDq5eN2EC0044K8TrPvDfVndGOk8iuv7Pv6x"
		const addressKooaOCL = accounts[0]
		const addressWj9WSaM = accounts[5]
		const stringY0fUBXB = await GardenContractV2v9ynJzP.claimDecompose.call(stringbIz0yWY, uintNNMn4N, {from: accounts[0]});
		const addressk0pdgPK = await GardenContractV2v9ynJzP.renounceTokenOwner.call(addressKooaOCL, {from: accounts[1]});
		const addressHaUwrPu = await GardenContractV2v9ynJzP.changeOwner.call(addressWj9WSaM, {from: accounts[3]});

		await expect(GardenContractV2v9ynJzP.claimDecompose.call(stringbIz0yWY, uintNNMn4N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressSHmUpbR = accounts[1]
		const addressyvyBm0m = accounts[4]
		const addressNRG6y9t = accounts[0]
		const GardenContractV2r3zqvCK = await GardenContractV2.new(addressSHmUpbR, addressyvyBm0m, addressNRG6y9t, {from: accounts[1]});
		const boolod9QuOl = false
		const uintz6jrXTm = BigInt("200")
		const stringYdhbii = "iZyioKI"
		const uintFQuTUYp = BigInt("123")
		const uintqZaJB38 = BigInt("13")
		const uintQPPeDOJ = BigInt("207")
		const stringzCPwEQW = "SV"
		const uintgajgmkM = BigInt("210")
		const uintiyxygdy = BigInt("250")
		const uint256CIpMLi8 = await GardenContractV2r3zqvCK.plant.call(uintFQuTUYp, stringYdhbii, uintz6jrXTm, boolod9QuOl, {from: accounts[5]});
		const uint256L8OltKh = await GardenContractV2r3zqvCK.getTotalrTLPHarvest.call(uintqZaJB38, {from: accounts[2]});
		const string7A5mN3 = await GardenContractV2r3zqvCK.claimDecompose.call(stringzCPwEQW, uintQPPeDOJ, {from: accounts[3]});
		const uint8AE6mI2 = await GardenContractV2r3zqvCK.setTimeStamp.call(uintiyxygdy, uintgajgmkM, {from: accounts[1]});

		await expect(GardenContractV2r3zqvCK.plant.call(uintFQuTUYp, stringYdhbii, uintz6jrXTm, boolod9QuOl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressYHJ0efc = "0x0000000000000000000000000000000000000001"
		const addresstXO0hQU = accounts[1]
		const addressLgC5NFY = accounts[2]
		const GardenContractV2zOdmF0T = await GardenContractV2.new(addressYHJ0efc, addresstXO0hQU, addressLgC5NFY, {from: accounts[1]});
		const stringMTV8pbQ = "BgBeyc1WlONvd2EIBMia2B62qjnw8SLNAWXMpXropOMg"
		const uintKDNUNL = BigInt("214")
		const stringN8bqfAO = "Ht5AJmtvm3jbj6SIyRXKlALWUKgLa4gMUBDhrD9oQd8BXSOhspwi83DE8poRQDV2P5OwOL9zvCMMec1IJMllQCT"
		const uintGpKIKif = BigInt("1980")
		const uintghctxps = BigInt("126")
		const string8GE1mV = "1T7W0IyYtb3zzLLKzR2LuPaKHR394t"
		const uint256mSsVWrZ = await GardenContractV2zOdmF0T.totalTLPBurnt.call(stringMTV8pbQ, {from: accounts[0]});
		const stringeTw7UAO = await GardenContractV2zOdmF0T.withdraw.call(stringN8bqfAO, uintKDNUNL, {from: accounts[2]});
		const stringKpMR1B = await GardenContractV2zOdmF0T.decompose.call(string8GE1mV, uintghctxps, uintGpKIKif, {from: accounts[1]});

		await expect(GardenContractV2zOdmF0T.totalTLPBurnt.call(stringMTV8pbQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressfO8iKk = accounts[0]
		const addressBVm3qSY = accounts[1]
		const addresssFWGUmd = "0x0000000000000000000000000000000000000001"
		const GardenContractV2fzzdmTs = await GardenContractV2.new(addressfO8iKk, addressBVm3qSY, addresssFWGUmd, {from: accounts[1]});
		const address71o5jv = accounts[1]
		const uintzAxbHRf = BigInt("135")
		const stringtfz7Cmp = "N20EkivskrgQWcwlc2RKD6p7qeE"
		const addressztSC8u = await GardenContractV2fzzdmTs.changeOwner.call(address71o5jv, {from: accounts[0]});
		const uint256Iz9G3w = await GardenContractV2fzzdmTs.getTotalsTLPHarvest.call(uintzAxbHRf, {from: accounts[1]});
		const uint256GcJLEl = await GardenContractV2fzzdmTs.totalTLPGrowing.call(stringtfz7Cmp, {from: accounts[3]});

		await expect(GardenContractV2fzzdmTs.changeOwner.call(address71o5jv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressdUVTrPP = accounts[3]
		const addressm4oIP0D = accounts[3]
		const addressrdcwdqG = "0x0000000000000000000000000000000000000001"
		const GardenContractV2eL4qgOf = await GardenContractV2.new(addressdUVTrPP, addressm4oIP0D, addressrdcwdqG, {from: accounts[3]});
		const stringJtveCm = "FNwYmgpTATeG"
		const stringt3gWYvu = "4UcYDTAgJt5iCf92iBCVEPujSVbReuxgEG4gEypfc3fcuRBlr83dfxR4hvWNrt17Ph1tWvk1LMka"
		const uint256sCtbAk3 = await GardenContractV2eL4qgOf.totalTLPGrowing.call(stringJtveCm, {from: accounts[3]});
		const stringrKmRDgi = await GardenContractV2eL4qgOf.harvestAllBeds.call(stringt3gWYvu, {from: accounts[4]});

		await expect(GardenContractV2eL4qgOf.totalTLPGrowing.call(stringJtveCm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresss6GZih = accounts[3]
		const addressY08ZH4q = accounts[3]
		const addressj0V6Vol = "0x0000000000000000000000000000000000000001"
		const GardenContractV2eL4qgOf = await GardenContractV2.new(addresss6GZih, addressY08ZH4q, addressj0V6Vol, {from: accounts[3]});
		const stringt3gWYvu = "4UcYDTAgJt5iCf92iBCVEPujSVVbReuxgEG4gEypfc3fcuRBlr83dfxR4hvWNrt17Ph1tWvk1LMka"
		const stringrKmRDgi = await GardenContractV2eL4qgOf.harvestAllBeds.call(stringt3gWYvu, {from: accounts[4]});

		await expect(GardenContractV2eL4qgOf.harvestAllBeds.call(stringt3gWYvu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressCU53u6J = accounts[4]
		const addressd1NTMDt = accounts[5]
		const addressXCn5qJ = accounts[2]
		const GardenContractV2uSeYgdm = await GardenContractV2.new(addressCU53u6J, addressd1NTMDt, addressXCn5qJ, {from: accounts[0]});
		const uintg4eYXay = BigInt("123")
		const stringWNznj7G = "o"
		const uintqmyNUo8 = BigInt("25")
		const stringHsALiM7 = "stKRIuLeTciyQQ1AXNA77BGKSG6uUlwkm1Kax3Y2Rf8"
		const stringTxkxL0F = await GardenContractV2uSeYgdm.withdraw.call(stringWNznj7G, uintg4eYXay, {from: accounts[2]});
		const uint256BRrDkzd = await GardenContractV2uSeYgdm.timeUntilNextTLP.call(stringHsALiM7, uintqmyNUo8, {from: accounts[2]});

		await expect(GardenContractV2uSeYgdm.withdraw.call(stringWNznj7G, uintg4eYXay, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressJhFBWc1 = accounts[3]
		const addressXJPMkfY = accounts[3]
		const addressi8FZi6C = "0x0000000000000000000000000000000000000001"
		const GardenContractV2eL4qgOf = await GardenContractV2.new(addressJhFBWc1, addressXJPMkfY, addressi8FZi6C, {from: accounts[3]});
		const uintzKzCwBy = BigInt("12")
		const stringt4wsedr = "aV96TmIedPGz6LBpEdmEXEiVNIAedBxLF2Xcvo8aq4yGzri47vaQocOKWy3zxNNHbVLwexliQ8aB2GrM7yFEphWvJ3ulPJ0"
		const addresscnPd2hT = accounts[0]
		const stringt3gWYvu = "4UcYDTAgJt5iCf92iBCVEPujSVVbReuxgEG4gEypfc3fcuRBlr83dfxR4hvWNrt17Ph1tWvk1Mka"
		const uintybnAax3 = BigInt("104")
		const stringEaZhNBa = "gIIR6K8n43eeU9O4OCeMlLwNF3i"
		const uint256H1M7VK4 = await GardenContractV2eL4qgOf.growthRemaining.call(addresscnPd2hT, stringt4wsedr, uintzKzCwBy, {from: accounts[4]});
		const stringrKmRDgi = await GardenContractV2eL4qgOf.harvestAllBeds.call(stringt3gWYvu, {from: accounts[4]});
		const stringl2FXQh8 = await GardenContractV2eL4qgOf.claimDecompose.call(stringEaZhNBa, uintybnAax3, {from: accounts[4]});

		await expect(GardenContractV2eL4qgOf.growthRemaining.call(addresscnPd2hT, stringt4wsedr, uintzKzCwBy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressf2qYblQ = accounts[5]
		const addressxVEsJvp = accounts[3]
		const addressJYasWU8 = accounts[0]
		const GardenContractV2wkMKhoY = await GardenContractV2.new(addressf2qYblQ, addressxVEsJvp, addressJYasWU8, {from: accounts[0]});
		const uintgGNyqJh = BigInt("109")
		const stringeAlHgz = "t3uMxjoW1iHVp4w733lR4ALGTm4ElqwOxHUvqun"
		const uintfld5FW0 = BigInt("200")
		const uintHsNQvz8 = BigInt("4")
		const boolHGNsqG = true
		const uintacEU2zU = BigInt("77")
		const stringFCjeMm2 = "EybkqB582CkDnt5F2ZVDByJfWs8sykFzxOK8VF9gNmQlAgwzmggCfqH9sEhjwoLCEblRzd7Vyj8OJKn97SwPwQxSxn5SjLw"
		const uintRBQlK4o = BigInt("1548")
		await GardenContractV2wkMKhoY.totalBedSupply.call(stringeAlHgz, uintgGNyqJh, {from: accounts[2]});
		const uint8NVHVpix = await GardenContractV2wkMKhoY.zeroHoldings.call(uintHsNQvz8, uintfld5FW0, {from: accounts[3]});
		const uint256yrPTMan = await GardenContractV2wkMKhoY.plant.call(uintRBQlK4o, stringFCjeMm2, uintacEU2zU, boolHGNsqG, {from: accounts[3]});

		await expect(GardenContractV2wkMKhoY.totalBedSupply.call(stringeAlHgz, uintgGNyqJh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressEpGEff5 = accounts[5]
		const addressyDXZ9P4 = accounts[3]
		const addressI7z1WiD = accounts[0]
		const GardenContractV2wkMKhoY = await GardenContractV2.new(addressEpGEff5, addressyDXZ9P4, addressI7z1WiD, {from: accounts[0]});
		const stringx3PYqhz = "SKbGyetkrPxTIf4E5SwfVCekUeNtOaeRJjLjucu5GIX5BFdyAJtEKfJtPhHJhAkLVlPCO"
		const stringQRVkfcW = "c4NpjaJd2R5etcvMss2UlVg1NgAdtXW6L6M3o35AXBUD6VT3rQ4iggSPGAavSl"
		const addressiyUoX8 = accounts[4]
		const addressSkPfm1 = accounts[3]
		const uintiBrMi5 = BigInt("200")
		const uintQayRH7z = BigInt("43")
		const uint256J2Pyej = await GardenContractV2wkMKhoY.totalTLPDecomposed.call(stringx3PYqhz, {from: accounts[1]});
		const uint256bTP7mYb = await GardenContractV2wkMKhoY.totalTLPBurnt.call(stringQRVkfcW, {from: accounts[5]});
		const addressMcbTd3s = await GardenContractV2wkMKhoY.addTokenOwner.call(addressSkPfm1, addressiyUoX8, {from: accounts[3]});
		const uint8NVHVpix = await GardenContractV2wkMKhoY.zeroHoldings.call(uintQayRH7z, uintiBrMi5, {from: accounts[3]});

		await expect(GardenContractV2wkMKhoY.totalTLPDecomposed.call(stringx3PYqhz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressQi5E7k = accounts[3]
		const addressZ5q08G1 = accounts[3]
		const addressbnYlJBn = "0x0000000000000000000000000000000000000001"
		const GardenContractV2eL4qgOf = await GardenContractV2.new(addressQi5E7k, addressZ5q08G1, addressbnYlJBn, {from: accounts[3]});
		const uintdd30rZs = BigInt("1697")
		const uintnrpozB9 = BigInt("3")
		const stringLPJhDG = "t7uW6u7xsI6GGeU9mJARlrdfyfUsMSLh3LvIlgjIblTRx"
		const addressYF3UK6q = "0x0000000000000000000000000000000000000001"
		const stringt3gWYvu = "4UcYDTAgJt5iCf92xiBCVEPujSVVbReuxgEG4gEypfc3fcuRBlr83dfxR4hvWNrt17Ph1tWvk1LMka"
		const stringNIkb1rv = await GardenContractV2eL4qgOf.decompose.call(stringLPJhDG, uintnrpozB9, uintdd30rZs, {from: accounts[1]});
		const addressIktCNJe = await GardenContractV2eL4qgOf.renounceTokenOwner.call(addressYF3UK6q, {from: "0x0000000000000000000000000000000000000001"});
		const stringrKmRDgi = await GardenContractV2eL4qgOf.harvestAllBeds.call(stringt3gWYvu, {from: accounts[4]});

		await expect(GardenContractV2eL4qgOf.decompose.call(stringLPJhDG, uintnrpozB9, uintdd30rZs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressylE1xB = accounts[5]
		const addresstJvpLGy = accounts[3]
		const addresswASovX4 = accounts[0]
		const GardenContractV2wkMKhoY = await GardenContractV2.new(addressylE1xB, addresstJvpLGy, addresswASovX4, {from: accounts[0]});
		const uintFGwzgjV = BigInt("146")
		const stringNnA0GKN = "O4BWQPnSRA3nUdJhjcQNPQReuzQOJqyQ8InXIY7mCqouo5O1mGVsg2DgU"
		const uintM7vpyLG = BigInt("110")
		const stringdCiO3Ge = "laebULEtPwDA2m4cZPE2AkZyylJyS8zjDfVK92O9nsoAbd63MBJ9YvEYVpruzkEGsMk6UYMBVojqauSYN"
		const uintlBZcmwK = BigInt("200")
		const uint6uxypG = BigInt("216")
		const stringLWDRr5F = await GardenContractV2wkMKhoY.harvest.call(stringNnA0GKN, uintFGwzgjV, {from: accounts[3]});
		await GardenContractV2wkMKhoY.totalBedSupply.call(stringdCiO3Ge, uintM7vpyLG, {from: accounts[0]});
		const uint8NVHVpix = await GardenContractV2wkMKhoY.zeroHoldings.call(uint6uxypG, uintlBZcmwK, {from: accounts[3]});

		await expect(GardenContractV2wkMKhoY.harvest.call(stringNnA0GKN, uintFGwzgjV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressSpLmCeu = accounts[5]
		const addressOi69S6p = accounts[3]
		const addressX91VlyX = accounts[0]
		const GardenContractV2wkMKhoY = await GardenContractV2.new(addressSpLmCeu, addressOi69S6p, addressX91VlyX, {from: accounts[0]});
		const uintMhA8lAw = BigInt("119")
		const uintsc3kPs = BigInt("196")
		const uintVbEPQd5 = BigInt("222")
		const uint256gganRSW = await GardenContractV2wkMKhoY.getTotalrTLPHarvest.call(uintMhA8lAw, {from: accounts[3]});
		const uint8NVHVpix = await GardenContractV2wkMKhoY.zeroHoldings.call(uintVbEPQd5, uintsc3kPs, {from: accounts[3]});

		await expect(GardenContractV2wkMKhoY.getTotalrTLPHarvest.call(uintMhA8lAw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresstVh7hst = accounts[3]
		const addressI23aOnV = accounts[3]
		const addressg4YQWsJ = "0x0000000000000000000000000000000000000001"
		const GardenContractV2eL4qgOf = await GardenContractV2.new(addresstVh7hst, addressI23aOnV, addressg4YQWsJ, {from: accounts[3]});
		const addressbWhz1O = accounts[0]
		const stringt3gWYvu = "4UcYDTAgJt5iCf92iBCVEPujSVVbReuxgEG4gEypfc3fcuRBlr83dfxR4hvWNrt17Ph1tWvk1LMka"
		const uintVL1e2Tb = BigInt("89")
		const stringPNsBvl3 = "Ni6JETMvTXzurxEyK7NA2Aj5KSgrpKK0V77JrQkC7B9DcIRgFnNrRLy8lZfug0gNa1b11e3Gyf"
		const addresskR8B2NU = accounts[2]
		const addressJlgRme4 = await GardenContractV2eL4qgOf.changeBenefitiary.call(addressbWhz1O, {from: accounts[3]});
		const stringrKmRDgi = await GardenContractV2eL4qgOf.harvestAllBeds.call(stringt3gWYvu, {from: accounts[4]});
		const uint256J0fx40Z = await GardenContractV2eL4qgOf.growthRemaining.call(addresskR8B2NU, stringPNsBvl3, uintVL1e2Tb, {from: accounts[5]});

		await expect(GardenContractV2eL4qgOf.harvestAllBeds.call(stringt3gWYvu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressOXdypIV = accounts[3]
		const addressvviMBvy = accounts[3]
		const addressZVPC8uc = "0x0000000000000000000000000000000000000001"
		const GardenContractV2eL4qgOf = await GardenContractV2.new(addressOXdypIV, addressvviMBvy, addressZVPC8uc, {from: accounts[3]});
		const addressWXT6D6N = accounts[5]
		const stringt3gWYvu = "4UcYDTAgJt5iCf92iBCVEPujSVVbReuxgEG4gEypfc3fcuRBlr83dfxRhvWNrt17Ph1tWvk1LMka"
		const addressyrtuNlE = await GardenContractV2eL4qgOf.changeOwner.call(addressWXT6D6N, {from: accounts[3]});
		const stringrKmRDgi = await GardenContractV2eL4qgOf.harvestAllBeds.call(stringt3gWYvu, {from: accounts[4]});

		await expect(GardenContractV2eL4qgOf.harvestAllBeds.call(stringt3gWYvu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressw0c1gtC = accounts[5]
		const addressgufvaO = accounts[3]
		const addressFtMvk4 = accounts[0]
		const GardenContractV2wkMKhoY = await GardenContractV2.new(addressw0c1gtC, addressgufvaO, addressFtMvk4, {from: accounts[0]});
		const stringdLabwAk = "iubKQgmlJ8PnmcTihrUr1EahdluVwWvspIiSCm3OjHAMBp6wwzfpdVYjitUr4V9EmqTe4DGmxmWmS4JGsC19qhzKNL1xNezD"
		const uintpvyWMVQ = BigInt("181")
		const uintgRO7bCr = BigInt("33")
		const uintADzcrSJ = BigInt("240")
		const uintwX2QIeZ = BigInt("222")
		const uint256AThK9Gl = await GardenContractV2wkMKhoY.totalTLPGrown.call(stringdLabwAk, {from: accounts[2]});
		const uint8VH8DFz3 = await GardenContractV2wkMKhoY.zeroHoldings.call(uintgRO7bCr, uintpvyWMVQ, {from: "0x0000000000000000000000000000000000000001"});
		const uint8NVHVpix = await GardenContractV2wkMKhoY.zeroHoldings.call(uintwX2QIeZ, uintADzcrSJ, {from: accounts[3]});

		await expect(GardenContractV2wkMKhoY.totalTLPGrown.call(stringdLabwAk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressqB0IIf2 = accounts[5]
		const addressaXVYamV = accounts[3]
		const addressTAArUR = accounts[0]
		const GardenContractV2wkMKhoY = await GardenContractV2.new(addressqB0IIf2, addressaXVYamV, addressTAArUR, {from: accounts[0]});
		const uintcGok1Y2 = BigInt("3")
		const uintJebLKSH = BigInt("78")
		const stringNyY9uQK = "aMJF1rHkI1gRypvIFesv6AqhDaO3rddxMrSonGCA2KEpXmYlyONGahYCNo"
		const uintlyHGnj9 = BigInt("48")
		const uint256EZknh0a = await GardenContractV2wkMKhoY.getTotalrTLPHarvest.call(uintcGok1Y2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256a5i73rP = await GardenContractV2wkMKhoY.timeUntilNextTLP.call(stringNyY9uQK, uintJebLKSH, {from: accounts[4]});
		const uint256gganRSW = await GardenContractV2wkMKhoY.getTotalrTLPHarvest.call(uintlyHGnj9, {from: accounts[3]});

		await expect(GardenContractV2wkMKhoY.getTotalrTLPHarvest.call(uintcGok1Y2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressulYo79N = accounts[3]
		const addresszkLsYhh = accounts[3]
		const addresscxjJHxL = "0x0000000000000000000000000000000000000001"
		const GardenContractV2eL4qgOf = await GardenContractV2.new(addressulYo79N, addresszkLsYhh, addresscxjJHxL, {from: accounts[3]});
		const stringVyE2zjT = "I4JA5ARcNjYiarIAkj6p3OQu5B1gCl5Cn0sP7YKzuaWoWBLN2NrSGPePYQ6WyxDuL7SYAvusmq"
		const addressJVOfykZ = accounts[2]
		const stringt3gWYvu = "4UcYDTAgJt5iCf92iBCVEPujSVVbReuxgEG4gEypfc3fcuRBlr83dfxR4hvWNrt17Ph1tWvk1LMka"
		const uintsl6UsXK = BigInt("22")
		const stringaJczhnc = "iIxVCUUAtuChBagXiEpKlrYAwJ3kyIkmLVFHPnUFsG50y"
		const uint256pv6zcvp = await GardenContractV2eL4qgOf.balanceOf.call(addressJVOfykZ, stringVyE2zjT, {from: accounts[5]});
		const stringrKmRDgi = await GardenContractV2eL4qgOf.harvestAllBeds.call(stringt3gWYvu, {from: accounts[4]});
		const stringiwKZVr1 = await GardenContractV2eL4qgOf.claimDecompose.call(stringaJczhnc, uintsl6UsXK, {from: accounts[2]});

		await expect(GardenContractV2eL4qgOf.balanceOf.call(addressJVOfykZ, stringVyE2zjT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressEKan5kC = accounts[5]
		const addressrZQ4GS = accounts[3]
		const addressW94Jfuq = accounts[0]
		const GardenContractV2wkMKhoY = await GardenContractV2.new(addressEKan5kC, addressrZQ4GS, addressW94Jfuq, {from: accounts[0]});
		const uintGIylnk4 = BigInt("189")
		const stringctCKmx2 = "tpWa0QfBWuqV6nIxjvCvax1i979MluUiM"
		const uintKDE0VMN = BigInt("41")
		const uint256vd5xY6 = await GardenContractV2wkMKhoY.timeUntilNextTLP.call(stringctCKmx2, uintGIylnk4, {from: accounts[5]});
		const uint256gganRSW = await GardenContractV2wkMKhoY.getTotalrTLPHarvest.call(uintKDE0VMN, {from: accounts[3]});

		await expect(GardenContractV2wkMKhoY.timeUntilNextTLP.call(stringctCKmx2, uintGIylnk4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressyezfkt9 = accounts[1]
		const addressCJqU6nP = accounts[3]
		const addresst2jQohD = accounts[3]
		const GardenContractV2RiDpHLT = await GardenContractV2.new(addressyezfkt9, addressCJqU6nP, addresst2jQohD, {from: accounts[3]});
		const stringvK6zz8X = "FvjpO7wvSIrN4USO9cQyK6M"
		const uintf7v2ypd = BigInt("29")
		const string4YeLoD = "g4UpLRCtbalty4g4MiNC3SXmdd79uA4"
		const stringRfeTLcE = "a9Q3sORrrNMDhELsnI6LX2iPRdK9ZX9xQdvje2Vhi8XGVqqWyyu0QaDSX8GuyNs6Qjq5MiNOg8X"
		const addressJHEtpo = accounts[0]
		const stringeXi3K1K = "orXw7z5nEi2jSu2FyIycgf3F5Gjmv0b0ywbI99DOz44dtu8LHZbJqAko"
		const uint256x921zYL = await GardenContractV2RiDpHLT.totalGardenSupply.call(stringvK6zz8X, {from: accounts[2]});
		await GardenContractV2RiDpHLT.totalBedSupply.call(string4YeLoD, uintf7v2ypd, {from: accounts[3]});
		const uint256zzknsKD = await GardenContractV2RiDpHLT.balanceOf.call(addressJHEtpo, stringRfeTLcE, {from: accounts[2]});
		const uint256nzfF7Zk = await GardenContractV2RiDpHLT.totalTLPGrowing.call(stringeXi3K1K, {from: accounts[3]});

		await expect(GardenContractV2RiDpHLT.totalGardenSupply.call(stringvK6zz8X, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresscsGZrDQ = accounts[5]
		const addressT9Te7v0 = accounts[3]
		const addressFsvDmm = accounts[0]
		const GardenContractV2wkMKhoY = await GardenContractV2.new(addresscsGZrDQ, addressT9Te7v0, addressFsvDmm, {from: accounts[0]});
		const addressxEUdfal = accounts[0]
		const uintsxCRjeB = BigInt("200")
		const uintKsrDziw = BigInt("222")
		const uint5AqiHi = BigInt("137")
		const uintld2Dklq = BigInt("44")
		const addressJp1pJB = await GardenContractV2wkMKhoY.renounceTokenOwner.call(addressxEUdfal, {from: accounts[0]});
		const uint8NVHVpix = await GardenContractV2wkMKhoY.zeroHoldings.call(uintKsrDziw, uintsxCRjeB, {from: accounts[3]});
		const uint8JtBBq2 = await GardenContractV2wkMKhoY.zeroHoldings.call(uintld2Dklq, uint5AqiHi, {from: accounts[2]});

		await expect(GardenContractV2wkMKhoY.renounceTokenOwner.call(addressxEUdfal, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressvH4WMak = accounts[5]
		const addressoi9KQeu = accounts[3]
		const addressT6eSBfL = accounts[0]
		const GardenContractV2wkMKhoY = await GardenContractV2.new(addressvH4WMak, addressoi9KQeu, addressT6eSBfL, {from: accounts[0]});
		const addresswldc6yO = accounts[0]
		const addressEAKDpTb = accounts[2]
		const uintlyzsBP = BigInt("248")
		const uintNpAmzFR = BigInt("178")
		const stringdBdEs41 = "FGfboNM2Z6HhJdHo1BQeWl"
		const uintkpQXDmw = BigInt("215")
		const stringzM6aQzg = "VHdGMbTAvjdG1O7UM37iKH4ehQF4qlVmLlKzObn1xlPzSGwXZEJluZD8yRuVYXkXt"
		const addresstg7g2Zj = accounts[1]
		const uintIJPmzVA = BigInt("200")
		const uintSVu0JPE = BigInt("222")
		const address7do0GI = await GardenContractV2wkMKhoY.addTokenOwner.call(addressEAKDpTb, addresswldc6yO, {from: accounts[0]});
		const stringQOgUZKd = await GardenContractV2wkMKhoY.decompose.call(stringdBdEs41, uintNpAmzFR, uintlyzsBP, {from: accounts[3]});
		const uint256DPyIqpy = await GardenContractV2wkMKhoY.growthRemaining.call(addresstg7g2Zj, stringzM6aQzg, uintkpQXDmw, {from: accounts[2]});
		const uint8NVHVpix = await GardenContractV2wkMKhoY.zeroHoldings.call(uintSVu0JPE, uintIJPmzVA, {from: accounts[3]});

		await expect(GardenContractV2wkMKhoY.addTokenOwner.call(addressEAKDpTb, addresswldc6yO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})