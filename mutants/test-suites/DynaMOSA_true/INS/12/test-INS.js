const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintwRyaE1 = BigInt("402")
		const stringNDHBaK3 = "8FT1"
		const stringTvOgwhr = "CV96JfJFsGrtD6yJD2i0AkRYiP5iJCkpGckgNNU"
		const INSidsrQxH = await INS.new(uintwRyaE1, stringNDHBaK3, stringTvOgwhr, {from: accounts[2]});
		const uintwXODkVA = BigInt("1221")
		const addressKLJmHlc = "0x0000000000000000000000000000000000000001"
		const addressgQ6jsCE = accounts[0]
		const uintB54SOIY = BigInt("1036")
		const addressBPUtiZA = accounts[2]
		const addressmvuS3Q8 = accounts[0]
		const uintpLgEznN = BigInt("1045")
		const byteKugkbh4 = "0x0d0a03010a0d170f0118001b1d19111b1617120a060a1d0d141116050b1419"
		const uintM9W7HBJ = BigInt("141")
		const addressvMUExmK = accounts[0]
//		const boolceQitup = await INSidsrQxH.transferFrom.call(addressgQ6jsCE, addressKLJmHlc, uintwXODkVA, {from: accounts[2]});
//		const boolgqr33yQ = await INSidsrQxH.transferFrom.call(addressmvuS3Q8, addressBPUtiZA, uintB54SOIY, {from: accounts[3]});
//		const boolyClHERS = await INSidsrQxH.burn.call(uintpLgEznN, {from: accounts[4]});
//		const boolIMkEgUz = await INSidsrQxH.approveAndCall.call(addressvMUExmK, uintM9W7HBJ, byteKugkbh4, {from: accounts[0]});

		await expect(INSidsrQxH.transferFrom.call(addressgQ6jsCE, addressKLJmHlc, uintwXODkVA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintQaDuhhh = BigInt("955")
		const stringhnLAB5P = "awph8t05fVOhg8vbUotqRDkbnb664APy4t0vcc5SLH5RFkQuy"
		const stringuYLTaGw = "QE8"
		const INSbMkvjLG = await INS.new(uintQaDuhhh, stringhnLAB5P, stringuYLTaGw, {from: accounts[2]});
		const uintJBFds5k = BigInt("1794")
		const uintNY4jK5w = BigInt("1231")
		const byteOZs9G9M = "0x110a1f06171c0d0f09180e1909100f080105020f0715"
		const uintoQpIwpG = BigInt("1881")
		const addressg5rcgdT = accounts[0]
		const booluZLiT2K = await INSbMkvjLG.burn.call(uintJBFds5k, {from: accounts[2]});
		const boolmWlEo8I = await INSbMkvjLG.burn.call(uintNY4jK5w, {from: accounts[2]});
//		const boolSRGniGh = await INSbMkvjLG.approveAndCall.call(addressg5rcgdT, uintoQpIwpG, byteOZs9G9M, {from: accounts[2]});

		assert.equal(boolmWlEo8I, true)
		assert.equal(booluZLiT2K, true)
		await expect(INSbMkvjLG.approveAndCall.call(addressg5rcgdT, uintoQpIwpG, byteOZs9G9M, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uinteMia0h = BigInt("1515")
		const stringfMSRVx = "iTF85f7Ista2Sm3KaWJrl4d16iy4ApnK6r9PspOAW9R"
		const stringToXcJb = "JIArc4CWsdRhIrnV7nAdOKyOttIJoccxC2bbT7PIwGRk6bukXdzhAiuz7lGmZ5jVcqYTgnPcQ02NSufolqnTETVvbM"
		const INScfK2bWQ = await INS.new(uinteMia0h, stringfMSRVx, stringToXcJb, {from: "0x0000000000000000000000000000000000000001"});
		const uintW7s77nN = BigInt("2024")
		const addresstulWD42 = accounts[3]
		const uintHXdwe1 = BigInt("2002")
		const addressyBfhTON = accounts[2]
		const uintWYNxCYn = BigInt("1419")
		const addressL4ceqMF = "0x0000000000000000000000000000000000000001"
		const addresskL0O7u6 = accounts[4]
		const byteqbUdIFZ = "0x1506200214050506031a01060a0d181e"
		const uinthfWBI38 = BigInt("472")
		const addressRFZO9fy = "0x0000000000000000000000000000000000000001"
		const boolz7Lw5aJ = await INScfK2bWQ.burnFrom.call(addresstulWD42, uintW7s77nN, {from: accounts[1]});
		const boolXhx48R = await INScfK2bWQ.approve.call(addressyBfhTON, uintHXdwe1, {from: accounts[5]});
		const boola2deLNM = await INScfK2bWQ.transferFrom.call(addresskL0O7u6, addressL4ceqMF, uintWYNxCYn, {from: accounts[1]});
		const booljBsqGKB = await INScfK2bWQ.approveAndCall.call(addressRFZO9fy, uinthfWBI38, byteqbUdIFZ, {from: accounts[0]});
	});

	it('test for INS', async () => {
		const uintgmcb4ju = BigInt("1459")
		const stringxE2ebh5 = "ZTs99elfm7zjb"
		const stringXA6hAfQ = "nmmsdLB1TyqPcuFaXM64ngSNLG9WsrOJyvawpJEhO1DQcCkpfAnSh5gbGlPVew9dZ"
		const INSOjNrgDH = await INS.new(uintgmcb4ju, stringxE2ebh5, stringXA6hAfQ, {from: accounts[3]});
		const uinth6nM5vz = BigInt("1464")
		const addressb2CwJUG = accounts[0]
		const uintad6i2SJ = BigInt("1900")
		const addressPkyFttk = accounts[3]
		const uintSC1FlWx = BigInt("59")
		const addressOq3yEN = accounts[4]
		const uinty04SuNc = BigInt("1100")
		const addressbByWrbp = accounts[1]
//		const boolcgnx8hA = await INSOjNrgDH.burnFrom.call(addressb2CwJUG, uinth6nM5vz, {from: accounts[1]});
//		const boolkhylEKH = await INSOjNrgDH.burnFrom.call(addressPkyFttk, uintad6i2SJ, {from: accounts[1]});
//		const boolignmlu = await INSOjNrgDH.approve.call(addressOq3yEN, uintSC1FlWx, {from: accounts[3]});
//		const boolA2HjKel = await INSOjNrgDH.burnFrom.call(addressbByWrbp, uinty04SuNc, {from: accounts[1]});

		await expect(INSOjNrgDH.burnFrom.call(addressb2CwJUG, uinth6nM5vz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintA5bfKyC = BigInt("1653")
		const stringZ8s86wq = "CJs"
		const string3DgefM = "v2nUn7IuK"
		const INSD1Beq65 = await INS.new(uintA5bfKyC, stringZ8s86wq, string3DgefM, {from: accounts[2]});
		const uintn7RRBW9 = BigInt("1701")
		const addressQXsQ0kh = accounts[3]
		const uinthfg5XMx = BigInt("1613")
		const addressEBJFAy7 = accounts[0]
		const addressGAoeEc7 = accounts[0]
		const bytep2J4Nza = "0x1b020c0a00060c1d0a141f0d1918120e0617201712100120051e1b1d"
		const uintrF49i0V = BigInt("1278")
		const addressi4rhLcZ = accounts[2]
//		const boolC95nlpU = await INSD1Beq65.transfer.call(addressQXsQ0kh, uintn7RRBW9, {from: accounts[4]});
//		const boolqlOzfR = await INSD1Beq65.transferFrom.call(addressGAoeEc7, addressEBJFAy7, uinthfg5XMx, {from: "0x0000000000000000000000000000000000000001"});
//		const boolVbI0AGl = await INSD1Beq65.approveAndCall.call(addressi4rhLcZ, uintrF49i0V, bytep2J4Nza, {from: accounts[4]});

		await expect(INSD1Beq65.transfer.call(addressQXsQ0kh, uintn7RRBW9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintDLLFFpJ = BigInt("1459")
		const stringxE2ebh5 = "ZTs99elfm7zjb"
		const stringXA6hAfQ = "nmmsdLB1TyqPcuFaXM64ngSNLG9WsrOJyvawpJEhO1DQcCkpfAnSh5gbGlPVew9dZ"
		const INSOjNrgDH = await INS.new(uintDLLFFpJ, stringxE2ebh5, stringXA6hAfQ, {from: accounts[3]});
		const uintkzIRz64 = BigInt("546")
		const addressNwJGEht = accounts[3]
		const uintYDlmGje = BigInt("1464")
		const addressVcDMxfx = accounts[0]
		const uintnzGryG1 = BigInt("1900")
		const addressqrOzp5S = accounts[4]
		const uintZhtk5m8 = BigInt("59")
		const addressFdW628n = accounts[4]
		const uinttDkFDK6 = BigInt("1510")
		const addressmOEdril = accounts[0]
//		const booll1I5Aou = await INSOjNrgDH.burnFrom.call(addressNwJGEht, uintkzIRz64, {from: accounts[0]});
//		const boolcgnx8hA = await INSOjNrgDH.burnFrom.call(addressVcDMxfx, uintYDlmGje, {from: accounts[1]});
//		const boolkhylEKH = await INSOjNrgDH.burnFrom.call(addressqrOzp5S, uintnzGryG1, {from: accounts[1]});
//		const boolignmlu = await INSOjNrgDH.approve.call(addressFdW628n, uintZhtk5m8, {from: accounts[3]});
//		const bool8NZWcG = await INSOjNrgDH.approve.call(addressmOEdril, uinttDkFDK6, {from: accounts[5]});

		await expect(INSOjNrgDH.burnFrom.call(addressNwJGEht, uintkzIRz64, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintlkhRZRQ = BigInt("1653")
		const stringZ8s86wq = "CJs"
		const string3DgefM = "v2nUn7IuK"
		const INSD1Beq65 = await INS.new(uintlkhRZRQ, stringZ8s86wq, string3DgefM, {from: accounts[2]});
		const uintw1xtLNB = BigInt("795")
		const addressUQA4wAu = accounts[0]
		const uintGGEsvp = BigInt("583")
		const addresszGn1Rj6 = accounts[4]
		const addressFTVm1Uw = accounts[1]
		const byteMtY1bv5 = "0x1b020c0a00060c1d0a141f0d1918120e0617201712100120051e1b1d"
		const uinttvo10aW = BigInt("1251")
		const addressji4Wkyl = accounts[2]
		const boolCzS2jvF = await INSD1Beq65.transfer.call(addressUQA4wAu, uintw1xtLNB, {from: accounts[2]});
//		const boolaMgqujJ = await INSD1Beq65.transferFrom.call(addressFTVm1Uw, addresszGn1Rj6, uintGGEsvp, {from: accounts[0]});
//		const boolVbI0AGl = await INSD1Beq65.approveAndCall.call(addressji4Wkyl, uinttvo10aW, byteMtY1bv5, {from: accounts[4]});

		assert.equal(boolCzS2jvF, true)
		await expect(INSD1Beq65.transferFrom.call(addressFTVm1Uw, addresszGn1Rj6, uintGGEsvp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})