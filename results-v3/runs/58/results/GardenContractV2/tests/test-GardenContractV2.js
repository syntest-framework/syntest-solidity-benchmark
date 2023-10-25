const GardenContractV2 = artifacts.require("GardenContractV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GardenContractV2', (accounts) => {
	it('test for GardenContractV2', async () => {
		const addressAfhaj9L = accounts[2]
		const addressM6OHRxQ = accounts[4]
		const addressnMpoiZo = accounts[0]
		const GardenContractV2VFoTtQ = await GardenContractV2.new(addressAfhaj9L, addressM6OHRxQ, addressnMpoiZo, {from: accounts[1]});
		const uintUvuPRxf = BigInt("52")
		const stringKgqGX6f = "EpJdjfL3aqxccbOeKV9fjnPQRla4hlOdWdOD1KK21HWlqSeMdMMotI2ra1JunvV1t0iqxfItAlnup9H2f1IIdfMpXLTbij"
		const uint256jMuQTv4 = await GardenContractV2VFoTtQ.getTotalsTLPHarvest.call(uintUvuPRxf, {from: accounts[4]});
		const uint256LHL6lW = await GardenContractV2VFoTtQ.totalTLPDecomposed.call(stringKgqGX6f, {from: accounts[5]});

		await expect(GardenContractV2VFoTtQ.getTotalsTLPHarvest.call(uintUvuPRxf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressQQ0Pxac = accounts[5]
		const addressd4Lc2Xw = accounts[2]
		const addressiU7IgC6 = "0x0000000000000000000000000000000000000001"
		const GardenContractV2ViNPOqj = await GardenContractV2.new(addressQQ0Pxac, addressd4Lc2Xw, addressiU7IgC6, {from: accounts[1]});
		const boolEm8n2tI = false
		const uintcjqJqn4 = BigInt("97")
		const stringdliXd4K = "nTDyon5wR18SYPncWWDxwpktxsgiqlRP8gnwsOnde3BcGVqyewVO5C3LBznCvjc"
		const uintnBaP6gN = BigInt("2040")
		const uintyG62JXW = BigInt("157")
		const uinttnSNpa7 = BigInt("48")
		const uintZQy9WMT = BigInt("39")
		const stringaFYXhz = "TiAK2WY9TWBDnFa9JdxIiKdq81eGJAZ7aIeowNLrvoh3GGblDLi2ffnVlkW5d4tabYMvkR5mcmj8U"
		const stringjVTHKkb = "jaYCv4ulT9YfYPav4mUYdjP2isB7rN80dOFzKzYYuPrbvE8VEC4xU8Mfg"
		const stringUmKWFBm = "wsANV3qgo7wilxOh7BbAG4Xbr8Orr1FTyT9TwdMP0yASKX9kxtJTIbJ7PfIJWqOLHPP"
		const uint256XGIsvd4 = await GardenContractV2ViNPOqj.plant.call(uintnBaP6gN, stringdliXd4K, uintcjqJqn4, boolEm8n2tI, {from: accounts[2]});
		const uint256RqS0qDB = await GardenContractV2ViNPOqj.getTotalsTLPHarvest.call(uintyG62JXW, {from: accounts[1]});
		const uint8B4dBkJ = await GardenContractV2ViNPOqj.zeroHoldings.call(uintZQy9WMT, uinttnSNpa7, {from: accounts[4]});
		const uint256q6msZY = await GardenContractV2ViNPOqj.totalTLPGrowing.call(stringaFYXhz, {from: accounts[4]});
		const uint256xajGc7r = await GardenContractV2ViNPOqj.totalTLPGrowing.call(stringjVTHKkb, {from: accounts[4]});
		const uint256pBYEoDH = await GardenContractV2ViNPOqj.totalTLPDecomposed.call(stringUmKWFBm, {from: accounts[4]});

		await expect(GardenContractV2ViNPOqj.plant.call(uintnBaP6gN, stringdliXd4K, uintcjqJqn4, boolEm8n2tI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressnd3Mc9h = accounts[0]
		const addressH49I3RB = accounts[2]
		const addressRXWpkiP = accounts[0]
		const GardenContractV2bMoKcpU = await GardenContractV2.new(addressnd3Mc9h, addressH49I3RB, addressRXWpkiP, {from: accounts[2]});
		const uintGyFPQqW = BigInt("144")
		const stringXuUowme = "7VqopmGXVCaIXK1HC5CqubPIdWWUphU"
		const stringYqPqenb = "ZHOXI2qPPBDk6J1S"
		const addressH2cvN4r = accounts[1]
		const stringN9WqMNt = "SYbPPF9wMCgAw2jQrbX3Aq4RoIeQaNf"
		const uintZZdFcFw = BigInt("244")
		const stringk77vICd = "XADOxDhkymPEDeCcKnAf54mckoiq9yGxq8VxVclUeragw3FxX67M5aJI8UDXRXAEqwzyqT0qxxnxKUutNb4"
		const stringwQYmDq5 = await GardenContractV2bMoKcpU.withdraw.call(stringXuUowme, uintGyFPQqW, {from: accounts[2]});
		const uint256cm3iYLC = await GardenContractV2bMoKcpU.balanceOf.call(addressH2cvN4r, stringYqPqenb, {from: accounts[0]});
		const uint2564Oy0rQ = await GardenContractV2bMoKcpU.totalTLPGrown.call(stringN9WqMNt, {from: accounts[4]});
		const stringyUlKjl4 = await GardenContractV2bMoKcpU.withdraw.call(stringk77vICd, uintZZdFcFw, {from: accounts[5]});

		await expect(GardenContractV2bMoKcpU.withdraw.call(stringXuUowme, uintGyFPQqW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressqI6IEWe = accounts[1]
		const addresskzJNcAZ = accounts[1]
		const addressvyKbREX = accounts[1]
		const GardenContractV2R0rayIR = await GardenContractV2.new(addressqI6IEWe, addresskzJNcAZ, addressvyKbREX, {from: accounts[4]});
		const uintcTSrML1 = BigInt("723")
		const uintbiA76UE = BigInt("132")
		const stringTcvOo31 = "PaihR1UQ"
		const boolAbrsx56 = false
		const uintussgXxA = BigInt("194")
		const stringTJSFMMI = "QndTszNniNIhtGKLay72h5cMLuHE3WBPZKIhrrD5DbTJyzmJFx7aCuVuHvtE3ms7szzQm"
		const uintHo8uPAw = BigInt("220")
		const stringoyG3tse = "Q7JMlhM4XsK7eSIDKUHPTajVad3wpljIFmi83YI0QUCmdqsYrjHR4GDf1MXCPEC4wIxqaGhtmMHNH1LKzpPfKsrao6tBzlLMGdO"
		const stringkVmvju0 = await GardenContractV2R0rayIR.decompose.call(stringTcvOo31, uintbiA76UE, uintcTSrML1, {from: accounts[1]});
		const uint256zF7hPWf = await GardenContractV2R0rayIR.plant.call(uintHo8uPAw, stringTJSFMMI, uintussgXxA, boolAbrsx56, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PozUyFi = await GardenContractV2R0rayIR.totalTLPDecomposed.call(stringoyG3tse, {from: accounts[3]});

		await expect(GardenContractV2R0rayIR.decompose.call(stringTcvOo31, uintbiA76UE, uintcTSrML1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressWXfvNoY = accounts[0]
		const addressjrAUncq = "0x0000000000000000000000000000000000000001"
		const addressrKdhLb = accounts[3]
		const GardenContractV2v8bF6Bs = await GardenContractV2.new(addressWXfvNoY, addressjrAUncq, addressrKdhLb, {from: accounts[3]});
		const addressfrB48gv = accounts[1]
		const uintnsb9tF = BigInt("243")
		const addressDjC3ur7 = await GardenContractV2v8bF6Bs.changeBenefitiary.call(addressfrB48gv, {from: accounts[5]});
		const uint256tI8Yoh = await GardenContractV2v8bF6Bs.getTotalsTLPHarvest.call(uintnsb9tF, {from: accounts[0]});

		await expect(GardenContractV2v8bF6Bs.changeBenefitiary.call(addressfrB48gv, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressSZFgVU = accounts[0]
		const addressnnUyYIn = "0x0000000000000000000000000000000000000001"
		const addressgeAseOM = accounts[5]
		const GardenContractV2s6wfWSw = await GardenContractV2.new(addressSZFgVU, addressnnUyYIn, addressgeAseOM, {from: "0x0000000000000000000000000000000000000001"});
		const uintp8kMOl = BigInt("86")
		const stringVMgwkoH = "pwcZcaB7Y34tNbwN9FhjDQO"
		const stringwVJbEv0 = "U2ohCuMpwD9H1wRtczkVIsjSWGLC3tJ3lPArZAorCmX7lFjDbCezjT"
		const uintYEXrhxj = BigInt("467")
		const uintjBBAIiR = BigInt("170")
		const stringJbAq7wZ = "DNjqATKN27y"
		const stringE9hBc9 = "1ms4iDapTPMBOgaT2UpG3wYAzgl9N7zqy7wY11JxUr7B"
		const stringO6RHTNm = await GardenContractV2s6wfWSw.harvest.call(stringVMgwkoH, uintp8kMOl, {from: accounts[3]});
		const stringrmdKxZ8 = await GardenContractV2s6wfWSw.harvestAllBeds.call(stringwVJbEv0, {from: accounts[3]});
		const stringO4jsTP3 = await GardenContractV2s6wfWSw.decompose.call(stringJbAq7wZ, uintjBBAIiR, uintYEXrhxj, {from: accounts[1]});
		const uint256SEwuIMu = await GardenContractV2s6wfWSw.totalTLPGrown.call(stringE9hBc9, {from: accounts[1]});
	});

	it('test for GardenContractV2', async () => {
		const addressqLz3bJ = accounts[3]
		const addressgSVQwvE = accounts[1]
		const addressD0ritt9 = accounts[2]
		const GardenContractV2ZgDu2Vb = await GardenContractV2.new(addressqLz3bJ, addressgSVQwvE, addressD0ritt9, {from: accounts[3]});
		const stringFYkj8MM = "K2IQhnbRB2hFcdlspKXgqkTWCdC4Pnk6FRLtnU"
		const uintF5feQ8l = BigInt("208")
		const uintX4rrTei = BigInt("219")
		const stringgXUB3AD = "krC6Vs5Mk6pvzSARPh1ymfqnSNZ"
		const addressKOuOtK = accounts[4]
		const addressnomcOR7 = "0x0000000000000000000000000000000000000001"
		const uintRTSl0Jr = BigInt("123")
		const stringl7oKwfa = "EKqbhYRTY3SUgaP68qDCMoYn8XwoW87NMWhQNHa46JQax89UAyk3kQBl1UoGSpR5SCi32QDetLB"
		const addressz7UurdW = accounts[2]
		const uint256Sn1KCqV = await GardenContractV2ZgDu2Vb.totalGardenSupply.call(stringFYkj8MM, {from: accounts[5]});
		const stringouGEGjx = await GardenContractV2ZgDu2Vb.decompose.call(stringgXUB3AD, uintX4rrTei, uintF5feQ8l, {from: accounts[4]});
		const addressWLpwJbk = await GardenContractV2ZgDu2Vb.addTokenOwner.call(addressnomcOR7, addressKOuOtK, {from: accounts[0]});
		const uint256Q1WjSJK = await GardenContractV2ZgDu2Vb.growthRemaining.call(addressz7UurdW, stringl7oKwfa, uintRTSl0Jr, {from: accounts[0]});

		await expect(GardenContractV2ZgDu2Vb.totalGardenSupply.call(stringFYkj8MM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresspELycw3 = accounts[0]
		const addressbCaisFs = "0x0000000000000000000000000000000000000001"
		const addresspMrQNLj = accounts[3]
		const GardenContractV2v8bF6Bs = await GardenContractV2.new(addresspELycw3, addressbCaisFs, addresspMrQNLj, {from: accounts[3]});
		const stringQTwFLii = "OdisGq5Hyww7u7"
		const stringvRRyCas = "k5yRCcfZ44cr5ypF6c8oyj2Cc6ME1IVVRBOdgNIBAmjCSdnZcX8Fncjr756RQLriy5rvFntEiI"
		const addressI3Rlo6X = "0x0000000000000000000000000000000000000001"
		const addressQe0JJl5 = "0x0000000000000000000000000000000000000001"
		const uintdG4uXZF = BigInt("255")
		const uint256KhzNR7Y = await GardenContractV2v8bF6Bs.totalTLPGrown.call(stringQTwFLii, {from: accounts[5]});
		const uint256dHdrRi3 = await GardenContractV2v8bF6Bs.balanceOf.call(addressI3Rlo6X, stringvRRyCas, {from: accounts[1]});
		const addressDjC3ur7 = await GardenContractV2v8bF6Bs.changeBenefitiary.call(addressQe0JJl5, {from: accounts[5]});
		const uint256tI8Yoh = await GardenContractV2v8bF6Bs.getTotalsTLPHarvest.call(uintdG4uXZF, {from: accounts[0]});

		await expect(GardenContractV2v8bF6Bs.totalTLPGrown.call(stringQTwFLii, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresssdoAiTs = "0x0000000000000000000000000000000000000001"
		const addressoPJH05G = accounts[4]
		const addressjKeyTQj = accounts[2]
		const GardenContractV2DZjEyWg = await GardenContractV2.new(addresssdoAiTs, addressoPJH05G, addressjKeyTQj, {from: accounts[0]});
		const uintfseAxAf = BigInt("189")
		const stringjG4uLUj = "7miRDWiBxKHNlCIAMj8luLNQ7DSTfD8Tab91YRvzwFZMfV"
		const addresslnsGObL = accounts[0]
		const uintHaVvMRb = BigInt("70")
		const stringZKNFNc = "9cb4B28EMK11dwDOYNwaglURSsbICU8krWVYMmzxRGzufGgX5cp"
		const uintq5oHHt = BigInt("242")
		const stringyqOuXvl = "6ZPkGHgwNucSakp59zSiyACpif65WqnFaP4HJcmr5hQcgR7SQgFQsFX"
		const addressg946Lr3 = accounts[1]
		const uint256ZjsLEP = await GardenContractV2DZjEyWg.growthRemaining.call(addresslnsGObL, stringjG4uLUj, uintfseAxAf, {from: accounts[3]});
		const stringjrnem75 = await GardenContractV2DZjEyWg.withdraw.call(stringZKNFNc, uintHaVvMRb, {from: accounts[2]});
		const uint256YZ8f1wv = await GardenContractV2DZjEyWg.getTotalrTLPHarvest.call(uintq5oHHt, {from: accounts[3]});
		const uint256owTpMc2 = await GardenContractV2DZjEyWg.balanceOf.call(addressg946Lr3, stringyqOuXvl, {from: accounts[4]});

		await expect(GardenContractV2DZjEyWg.growthRemaining.call(addresslnsGObL, stringjG4uLUj, uintfseAxAf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressj66Fmg0 = accounts[2]
		const addressEBN04Vs = accounts[4]
		const addressfoH5vF = accounts[0]
		const GardenContractV2VFoTtQ = await GardenContractV2.new(addressj66Fmg0, addressEBN04Vs, addressfoH5vF, {from: accounts[1]});
		const stringKgqGX6f = "EpJdjfL3aqxccbOeKV9fjnPQRla4hlOdWdOD1KK21HWlqSeKdMMotI2ra1JunvV1t0iqxfItAlnup9H2f1IIdfMpXLTbij"
		const uint256LHL6lW = await GardenContractV2VFoTtQ.totalTLPDecomposed.call(stringKgqGX6f, {from: accounts[5]});

		await expect(GardenContractV2VFoTtQ.totalTLPDecomposed.call(stringKgqGX6f, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressvJkqNcn = accounts[0]
		const addressoSkR5eO = "0x0000000000000000000000000000000000000001"
		const addressXj2bse5 = accounts[3]
		const GardenContractV2v8bF6Bs = await GardenContractV2.new(addressvJkqNcn, addressoSkR5eO, addressXj2bse5, {from: accounts[3]});
		const uinta7oafYE = BigInt("234")
		const stringNhwIt4m = "gY0aswWSy8QlkU24EFs6DC"
		const stringeaZFKUf = "Kx9Dlmrago4nUTwy6VgNkWRwnfMJmzbuRBSlE41Np1j5LRj88xTfttFjIpO9xYnfPbjRjr2ojq4yKYiHWtRWIDBDA"
		const uintqy84t6 = BigInt("243")
		await GardenContractV2v8bF6Bs.totalBedSupply.call(stringNhwIt4m, uinta7oafYE, {from: accounts[4]});
		const uint256qv1rNaH = await GardenContractV2v8bF6Bs.totalTLPBurnt.call(stringeaZFKUf, {from: accounts[1]});
		const uint256tI8Yoh = await GardenContractV2v8bF6Bs.getTotalsTLPHarvest.call(uintqy84t6, {from: accounts[0]});

		await expect(GardenContractV2v8bF6Bs.totalBedSupply.call(stringNhwIt4m, uinta7oafYE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressOzdLGo = accounts[2]
		const addressOAkUUBD = accounts[4]
		const addressYyhx02n = accounts[0]
		const GardenContractV2VFoTtQ = await GardenContractV2.new(addressOzdLGo, addressOAkUUBD, addressYyhx02n, {from: accounts[1]});
		const uintixzAw8B = BigInt("158")
		const stringBMn79ZL = "ThDlf6F1mEzptkS73bgNBK0fL9p2qu9sSSXQYcUIj46lLo3Tms9Jcven5MFS4wkRAGxSAls2Vj"
		const stringKgqGX6f = "EpJdjfL3aqxccbOeKV8fjnPQRla4hlOdWdOD1KK21HWlqSeKdMMotI2ra1JunvV1t0iqxfItAlnup9H2f1IIdfMpXLTbij"
		const stringcs7G3H = await GardenContractV2VFoTtQ.harvest.call(stringBMn79ZL, uintixzAw8B, {from: accounts[5]});
		const uint256LHL6lW = await GardenContractV2VFoTtQ.totalTLPDecomposed.call(stringKgqGX6f, {from: accounts[5]});

		await expect(GardenContractV2VFoTtQ.harvest.call(stringBMn79ZL, uintixzAw8B, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressO9K55r1 = accounts[2]
		const addressuQwpg6j = accounts[4]
		const addressQkpq548 = accounts[0]
		const GardenContractV2VFoTtQ = await GardenContractV2.new(addressO9K55r1, addressuQwpg6j, addressQkpq548, {from: accounts[1]});
		const stringprZ4hQ3 = "YQ09jxw6UcuYqKSekTPeZI7YZea"
		const stringKgqGX6f = "EpJdjfL3aqxccbOeKV9fjnPQRla4hlOdWdOD1KK21HWlqSeKdMMotI2ra1JunvV1t0iqxfItAlnup9H2f1IIdfMpXLTbij"
		const uint256RqAKhSD = await GardenContractV2VFoTtQ.totalTLPGrowing.call(stringprZ4hQ3, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LHL6lW = await GardenContractV2VFoTtQ.totalTLPDecomposed.call(stringKgqGX6f, {from: accounts[5]});

		await expect(GardenContractV2VFoTtQ.totalTLPGrowing.call(stringprZ4hQ3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressZ14xSUH = accounts[2]
		const addressMVUTXCL = accounts[4]
		const addressSncNLIS = accounts[0]
		const GardenContractV2VFoTtQ = await GardenContractV2.new(addressZ14xSUH, addressMVUTXCL, addressSncNLIS, {from: accounts[1]});
		const uintg22vx6 = BigInt("245")
		const stringrByN50o = "rYJ2nMUBiunAMp59jsDVdfzDw"
		const addressHTEMOmk = accounts[0]
		const stringKgqGX6f = "EpJdjfL3aqxccbOeKV9fjnPQRla4hlOdWdOD1KK21HWlqSeKdMMotI2ra1JunvV1t0iqxfItAlnup9H2f1IIdfMpXLTbij"
		const stringyXtVTAO = await GardenContractV2VFoTtQ.claimDecompose.call(stringrByN50o, uintg22vx6, {from: accounts[0]});
		const addressdSdlLj = await GardenContractV2VFoTtQ.changeOwner.call(addressHTEMOmk, {from: accounts[0]});
		const uint256LHL6lW = await GardenContractV2VFoTtQ.totalTLPDecomposed.call(stringKgqGX6f, {from: accounts[5]});

		await expect(GardenContractV2VFoTtQ.claimDecompose.call(stringrByN50o, uintg22vx6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresscPTbcpu = accounts[2]
		const addressqhEB0lU = accounts[4]
		const addressT13LXBu = accounts[0]
		const GardenContractV2VFoTtQ = await GardenContractV2.new(addresscPTbcpu, addressqhEB0lU, addressT13LXBu, {from: accounts[1]});
		const uintIjfhhNS = BigInt("204")
		const uintlYHSslB = BigInt("215")
		const stringKgqGX6f = "EpJdhfL3aqxccbOeKV9fjnPQRla4hlOdWdOD1KK21HWlqSeKdMMotITra1JunvV1t0iqxfItAlnup9H2f1IIdfMpXLTbij"
		const addresseBeiRvP = accounts[4]
		const booltpIgnEm = true
		const uintZM7X2GU = BigInt("36")
		const stringqvlOoXo = "i2gMKmeIV62TfXrEGm"
		const uintE3O4bgf = BigInt("1466")
		const uint8rAM85Cq = await GardenContractV2VFoTtQ.zeroHoldings.call(uintlYHSslB, uintIjfhhNS, {from: accounts[1]});
		const uint256LHL6lW = await GardenContractV2VFoTtQ.totalTLPDecomposed.call(stringKgqGX6f, {from: accounts[5]});
		const addresszSMrpZG = await GardenContractV2VFoTtQ.changeOwner.call(addresseBeiRvP, {from: "0x0000000000000000000000000000000000000001"});
		const uint256aPpAKHd = await GardenContractV2VFoTtQ.plant.call(uintE3O4bgf, stringqvlOoXo, uintZM7X2GU, booltpIgnEm, {from: accounts[2]});

		await expect(GardenContractV2VFoTtQ.zeroHoldings.call(uintlYHSslB, uintIjfhhNS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressNXGeAbD = accounts[0]
		const addressaixBzHo = accounts[5]
		const addressOrxV23k = accounts[5]
		const GardenContractV2EbQVHVT = await GardenContractV2.new(addressNXGeAbD, addressaixBzHo, addressOrxV23k, {from: accounts[2]});
		const uintmpkQhck = BigInt("43")
		const stringKpmNwNC = "GySPxQFKGZET1b2DPl7yRCUuMJXNs7YT6DgktuH"
		const stringuUnmfU2 = "Nc4JxsoxW6e2nSJYfSy84X8jjMOJTUvWap7yvW0RzcXuDKlAOjUMvdNNgO8TxrAqu"
		const stringh8W550m = "mRGlO"
		const addresswQkr53t = accounts[3]
		const addressgt7g5Ds = accounts[3]
		const addressG0LGRMc = accounts[1]
		const uintYBNFcCP = BigInt("1849")
		const uintadgGhwN = BigInt("235")
		const uintRK3vrl7 = BigInt("245")
		const stringZTtfn1Z = "c3Dw9ADOyXWrsqhHN6Aa2iRKSHXRrd7rwALcqG3PUYq"
		const uint256UqIOU73 = await GardenContractV2EbQVHVT.timeUntilNextTLP.call(stringKpmNwNC, uintmpkQhck, {from: accounts[2]});
		const uint256O3BtD2Q = await GardenContractV2EbQVHVT.totalTLPGrown.call(stringuUnmfU2, {from: accounts[4]});
		const uint256Sthj030 = await GardenContractV2EbQVHVT.balanceOf.call(addresswQkr53t, stringh8W550m, {from: accounts[3]});
		const addresstex5sOa = await GardenContractV2EbQVHVT.addTokenOwner.call(addressG0LGRMc, addressgt7g5Ds, {from: accounts[0]});
		const uint8o3oaM18 = await GardenContractV2EbQVHVT.operationBurnMint.call(uintRK3vrl7, uintadgGhwN, uintYBNFcCP, {from: accounts[0]});
		const uint256Hz1LsPo = await GardenContractV2EbQVHVT.totalTLPDecomposed.call(stringZTtfn1Z, {from: accounts[0]});

		await expect(GardenContractV2EbQVHVT.timeUntilNextTLP.call(stringKpmNwNC, uintmpkQhck, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressTF2JUs = accounts[2]
		const addressMvm7h0p = accounts[4]
		const addressCnoymBw = accounts[0]
		const GardenContractV2VFoTtQ = await GardenContractV2.new(addressTF2JUs, addressMvm7h0p, addressCnoymBw, {from: accounts[1]});
		const uintF6JKTM = BigInt("200")
		const stringKgqGX6f = "EpJdhfL3aqxccbOeKV9fjnPQRla4hlOdWdOD1KK21HWlqSeKdMMotI2ra1JunvV1t0iqxfItAlnup9H2f1IIdfMpXLTbij"
		const uint256DXUafWC = await GardenContractV2VFoTtQ.getTotalrTLPHarvest.call(uintF6JKTM, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LHL6lW = await GardenContractV2VFoTtQ.totalTLPDecomposed.call(stringKgqGX6f, {from: accounts[5]});

		await expect(GardenContractV2VFoTtQ.getTotalrTLPHarvest.call(uintF6JKTM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresskuD1P9 = accounts[1]
		const addressyBhCGyB = accounts[0]
		const addressY9idVzT = accounts[3]
		const GardenContractV2cRoRgLI = await GardenContractV2.new(addresskuD1P9, addressyBhCGyB, addressY9idVzT, {from: accounts[4]});
		const stringn124oXj = "gqbca11WDaWkqfURH5HxmDypxgAMhlsceCXGutCD9sQIMk6LX43p24oGorEqyD8ETq6ZVgNZIBMNnnVpstXFQp3kaDtAEuCk"
		const uintW3t80e3 = BigInt("1466")
		const uintQVuStqk = BigInt("171")
		const uintiCqH3mE = BigInt("253")
		const stringRQD3Jk2 = await GardenContractV2cRoRgLI.harvestAllBeds.call(stringn124oXj, {from: accounts[3]});
		const uint8GigjG9 = await GardenContractV2cRoRgLI.operationBurnMint.call(uintiCqH3mE, uintQVuStqk, uintW3t80e3, {from: accounts[0]});

		await expect(GardenContractV2cRoRgLI.harvestAllBeds.call(stringn124oXj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressitRrGf2 = accounts[4]
		const addressJScSYVc = accounts[1]
		const addressIeriDT8 = accounts[5]
		const GardenContractV2gU2Hir6 = await GardenContractV2.new(addressitRrGf2, addressJScSYVc, addressIeriDT8, {from: accounts[0]});
		const addressKk8fFo0 = accounts[2]
		const addressrqxB6R = accounts[3]
		const uintwE47eM = BigInt("1677")
		const uintVszClk = BigInt("91")
		const stringQuzfzz6 = "az38wDAT6dQuEQY3qURzG"
		const uintwxFS09 = BigInt("137")
		const stringyQFHIr = "AP6P6nd6nuJ1N7BFK8mYxEUF864Dkxne7fum5gNzXJrcAsTKOTznoYny2YQmnUsPfkeoShSL0F9iHjooAl"
		const addresszXgHLiO = await GardenContractV2gU2Hir6.renounceTokenOwner.call(addressKk8fFo0, {from: accounts[0]});
		const addressS9fAn6u = await GardenContractV2gU2Hir6.renounceTokenOwner.call(addressrqxB6R, {from: "0x0000000000000000000000000000000000000001"});
		const stringsZclWyQ = await GardenContractV2gU2Hir6.decompose.call(stringQuzfzz6, uintVszClk, uintwE47eM, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kNZbTi = await GardenContractV2gU2Hir6.timeUntilNextTLP.call(stringyQFHIr, uintwxFS09, {from: accounts[1]});

		await expect(GardenContractV2gU2Hir6.renounceTokenOwner.call(addressKk8fFo0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresss7wmO8S = accounts[2]
		const addressOieZPaa = accounts[4]
		const addressjRHCShu = accounts[0]
		const GardenContractV2VFoTtQ = await GardenContractV2.new(addresss7wmO8S, addressOieZPaa, addressjRHCShu, {from: accounts[1]});
		const stringxvtFjk = "7yv1nKNEwtrjf6T2z4jm9lAwjg5kpmZZ8"
		const stringKgqGX6f = "EpJdjfL3aqxccbOeKV9fjnPQRla4hlOdWdOD1KK21HWlqSeKdMMotI2ra1JunvV1t0iqxfItAlnup9H2f1IIdfMpXLTbij"
		const uint2560FiNDK = await GardenContractV2VFoTtQ.totalTLPBurnt.call(stringxvtFjk, {from: accounts[2]});
		const uint256LHL6lW = await GardenContractV2VFoTtQ.totalTLPDecomposed.call(stringKgqGX6f, {from: accounts[5]});

		await expect(GardenContractV2VFoTtQ.totalTLPBurnt.call(stringxvtFjk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressV82dTp1 = accounts[3]
		const address9l2Jt4 = accounts[0]
		const address3s8kXv = accounts[0]
		const GardenContractV2Hwn1jAF = await GardenContractV2.new(addressV82dTp1, address9l2Jt4, address3s8kXv, {from: accounts[3]});
		const stringHATnClc = "KzYfiWu7hOeQmrW3NQ5mmd1f3JGFax3qNJvByvHEFKrcC9jB852t2Ikn3vVrIzlKgUvOduBNPa3QpSeqXsFj"
		const addressEiVzkv3 = accounts[2]
		const uintJ9Wxeyi = BigInt("247")
		const uint256ueFHlxn = await GardenContractV2Hwn1jAF.balanceOf.call(addressEiVzkv3, stringHATnClc, {from: accounts[0]});
		const uint256k8eYdJp = await GardenContractV2Hwn1jAF.getTotalrTLPHarvest.call(uintJ9Wxeyi, {from: accounts[1]});

		await expect(GardenContractV2Hwn1jAF.balanceOf.call(addressEiVzkv3, stringHATnClc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addresswqzCYZs = accounts[3]
		const addressXAU0fi = accounts[0]
		const addressOYaD0Lb = accounts[0]
		const GardenContractV2Hwn1jAF = await GardenContractV2.new(addresswqzCYZs, addressXAU0fi, addressOYaD0Lb, {from: accounts[3]});
		const uintuo8HKfP = BigInt("8")
		const addressUDRneWD = accounts[2]
		const boolxywniGw = false
		const uintKkkytDr = BigInt("90")
		const stringuR4D69t = "wdHba5eRYLM0QH0Yl6o9"
		const uintwBtjB27 = BigInt("1716")
		const uintyTpotGY = BigInt("197")
		const stringTswPp13 = "PK3fLjMukRNU7NGbYnAviO7xDN7IMB48oZxFqiSLutmq2AHX67Yba6sMhDEaCUXrl7M2FJtQFpJ8c"
		const uint256k8eYdJp = await GardenContractV2Hwn1jAF.getTotalrTLPHarvest.call(uintuo8HKfP, {from: accounts[1]});
		const addressWeP1jXZ = await GardenContractV2Hwn1jAF.changeBenefitiary.call(addressUDRneWD, {from: accounts[3]});
		const uint256OpREuYC = await GardenContractV2Hwn1jAF.plant.call(uintwBtjB27, stringuR4D69t, uintKkkytDr, boolxywniGw, {from: accounts[5]});
		const stringykN3Ema = await GardenContractV2Hwn1jAF.claimDecompose.call(stringTswPp13, uintyTpotGY, {from: accounts[1]});

		await expect(GardenContractV2Hwn1jAF.getTotalrTLPHarvest.call(uintuo8HKfP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const address5BBtxr = accounts[5]
		const addressXGh7j9W = accounts[1]
		const addressoL9sTw8 = accounts[4]
		const GardenContractV2uhzZvmg = await GardenContractV2.new(address5BBtxr, addressXGh7j9W, addressoL9sTw8, {from: accounts[2]});
		const addressAxYCNhB = accounts[3]
		const uintBbck6vi = BigInt("99")
		const stringY8m23hp = "t1mfexRi3X7IPFV7OXuqMJQ6dIRMq5JgtKxkfhTIybG9deTDtddVGaRxfUYOMCRV2oJmx1j5lhoN3YwvnBAV5f0eup1Hzl32Bl"
		const uintKnzQbgZ = BigInt("1614")
		const uinthyj5YTK = BigInt("105")
		const stringBCP8He = "8tRaDjqf"
		const stringUeMUG0 = "Fig9xe7JFbJ1A2hcW6M8kR9Ik9bHKu3txVnu86tjVCofoC2f9PXlvpCo5NVux8v6csiuUQpEt4Eb9mXql5vhdCrnMplvtHY"
		const uintIZGlI0g = BigInt("110")
		const stringmoc8TTS = "Vmr6OrlvGiGVymSisZjBInfekAob33x7CW4GKDPUkWvM"
		const addressrgD4E7h = await GardenContractV2uhzZvmg.changeOwner.call(addressAxYCNhB, {from: accounts[2]});
		const stringiJIk5Tj = await GardenContractV2uhzZvmg.claimDecompose.call(stringY8m23hp, uintBbck6vi, {from: accounts[2]});
		const stringJ7iEf7w = await GardenContractV2uhzZvmg.decompose.call(stringBCP8He, uinthyj5YTK, uintKnzQbgZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Hy1aRl = await GardenContractV2uhzZvmg.totalTLPGrowing.call(stringUeMUG0, {from: accounts[0]});
		const stringBVRu5b = await GardenContractV2uhzZvmg.harvest.call(stringmoc8TTS, uintIZGlI0g, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GardenContractV2uhzZvmg.claimDecompose.call(stringY8m23hp, uintBbck6vi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressQiPU24Z = accounts[2]
		const addresscb3JdSy = accounts[4]
		const addressl2go0dv = accounts[0]
		const GardenContractV2VFoTtQ = await GardenContractV2.new(addressQiPU24Z, addresscb3JdSy, addressl2go0dv, {from: accounts[1]});
		const addresstRCzrc = accounts[2]
		const addressMqpXCnr = accounts[3]
		const boolNR5zoJ0 = true
		const uintCzDF1mI = BigInt("127")
		const stringINUomCW = "jy2N8iSR3TlxYSUc8svcpgJ"
		const uintvvMyutF = BigInt("1721")
		const stringKgqGX6f = "EpJdhfL3aqxccbOeKV9fjnPQRla4hlOddOD1KK21HWlqSeKdMMotI2ra1JunvV1t0iqxfItAlnup9H2f1IIdfMpXLTbij"
		const uintJ9BGyK4 = BigInt("232")
		const uintCUbys6B = BigInt("95")
		const addressN2yn4wr = await GardenContractV2VFoTtQ.addTokenOwner.call(addressMqpXCnr, addresstRCzrc, {from: accounts[1]});
		const uint256GG4g9Cy = await GardenContractV2VFoTtQ.plant.call(uintvvMyutF, stringINUomCW, uintCzDF1mI, boolNR5zoJ0, {from: accounts[3]});
		const uint256LHL6lW = await GardenContractV2VFoTtQ.totalTLPDecomposed.call(stringKgqGX6f, {from: accounts[5]});
		const uint8sxuUNX = await GardenContractV2VFoTtQ.zeroHoldings.call(uintCUbys6B, uintJ9BGyK4, {from: accounts[4]});

		await expect(GardenContractV2VFoTtQ.addTokenOwner.call(addressMqpXCnr, addresstRCzrc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GardenContractV2', async () => {
		const addressa81EVf7 = accounts[2]
		const addressUmOafXv = accounts[4]
		const addressT6DW2TO = accounts[0]
		const GardenContractV2VFoTtQ = await GardenContractV2.new(addressa81EVf7, addressUmOafXv, addressT6DW2TO, {from: accounts[1]});
		const addressi9EKTTL = accounts[4]
		const stringKgqGX6f = "EpJdhfL3aqxccbOeKk9fjnPQRla4hlOdWdOD1KK21HWlqSeKdMMotI2ra1JunvV1t0iqxfItAlnup9H2f1IIdfMpXLTbij"
		const uinttwYpud = BigInt("120")
		const uintMgdZpQP = BigInt("132")
		const uintG9ce5yM = BigInt("36")
		const stringNRwHXaZ = "Ht"
		const address6psLaw = await GardenContractV2VFoTtQ.changeBenefitiary.call(addressi9EKTTL, {from: accounts[1]});
		const uint256LHL6lW = await GardenContractV2VFoTtQ.totalTLPDecomposed.call(stringKgqGX6f, {from: accounts[5]});
		const uint8JFyTAz7 = await GardenContractV2VFoTtQ.zeroHoldings.call(uintMgdZpQP, uinttwYpud, {from: accounts[4]});
		const stringUDogYDW = await GardenContractV2VFoTtQ.withdraw.call(stringNRwHXaZ, uintG9ce5yM, {from: accounts[2]});

		await expect(GardenContractV2VFoTtQ.totalTLPDecomposed.call(stringKgqGX6f, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})