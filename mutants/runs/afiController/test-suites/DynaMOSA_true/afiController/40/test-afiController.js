const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const address3Xauep = accounts[4]
		const afiControllerB2En4SO = await afiController.new(address3Xauep, {from: accounts[3]});
		const addressSaf8Pdg = accounts[2]
		const uintlQo4rxd = BigInt("1892")
		const addressrEgVS1N = accounts[1]
		const addressjwq3Wvg = accounts[5]
		const addressLaxH8Q6 = accounts[0]
		const uintEK6EqDE = BigInt("1783")
		const addressHFLmIK = accounts[0]
		const addresswcLVi0 = accounts[0]
		const addressuB1OHV1 = accounts[1]
		const addressMU7zv44 = await afiControllerB2En4SO.setGovernance.call(addressSaf8Pdg, {from: accounts[5]});
		const addressODTx5DY = await afiControllerB2En4SO.yearn.call(addressjwq3Wvg, addressrEgVS1N, uintlQo4rxd, {from: accounts[3]});
		const addresszgMT9iA = await afiControllerB2En4SO.setStrategist.call(addressLaxH8Q6, {from: accounts[1]});
		const addressEKceeRe = await afiControllerB2En4SO.earn.call(addressHFLmIK, uintEK6EqDE, {from: accounts[3]});
		const addresszHCekHu = await afiControllerB2En4SO.setVault.call(addressuB1OHV1, addresswcLVi0, {from: accounts[0]});

		await expect(afiControllerB2En4SO.setGovernance.call(addressSaf8Pdg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIpcAyDH = accounts[0]
		const afiControllerpadqHQ2 = await afiController.new(addressIpcAyDH, {from: accounts[4]});
		const uintWI8kMzA = BigInt("696")
		const addressYf87R4A = "0x0000000000000000000000000000000000000001"
		const addressGDygJ27 = accounts[1]
		const addresskcbG5Pz = accounts[5]
		const addresslvM9TOv = await afiControllerpadqHQ2.yearn.call(addressGDygJ27, addressYf87R4A, uintWI8kMzA, {from: accounts[0]});
		const addressX4VfRJJ = await afiControllerpadqHQ2.setStrategist.call(addresskcbG5Pz, {from: accounts[3]});

		await expect(afiControllerpadqHQ2.yearn.call(addressGDygJ27, addressYf87R4A, uintWI8kMzA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxT88fny = accounts[3]
		const afiControllerEWP5Bhv = await afiController.new(addressxT88fny, {from: accounts[3]});
		const addressdaxe48l = accounts[5]
		const addressgpuSBL7 = accounts[2]
		const addressJeUR9oL = accounts[1]
		const uintyCG58wB = BigInt("680")
		const addressrph17kV = accounts[3]
		const addressTHvS9qQ = accounts[1]
		const addressLIkOKDI = accounts[1]
		const addressXE0SV3 = accounts[2]
		const addressRh4WMkB = await afiControllerEWP5Bhv.setVault.call(addressgpuSBL7, addressdaxe48l, {from: accounts[0]});
		const addressQE15Xmo = await afiControllerEWP5Bhv.setOneSplit.call(addressJeUR9oL, {from: accounts[5]});
		const uintRoTX0qp = await afiControllerEWP5Bhv.setSplit.call(uintyCG58wB, {from: accounts[0]});
		const addressLFxYAc = await afiControllerEWP5Bhv.setStrategy.call(addressTHvS9qQ, addressrph17kV, {from: accounts[0]});
		const addressq4cBJ4Q = await afiControllerEWP5Bhv.setVault.call(addressXE0SV3, addressLIkOKDI, {from: accounts[1]});

		await expect(afiControllerEWP5Bhv.setVault.call(addressgpuSBL7, addressdaxe48l, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressA2m3FPU = accounts[0]
		const afiControllerFPbCyzz = await afiController.new(addressA2m3FPU, {from: accounts[2]});
		const addressuGEbSNS = accounts[1]
		const addressFoIkhTY = accounts[3]
		const addressWlPdNiM = accounts[0]
		const addressSJTgaQp = accounts[3]
		const addressCIcnl4R = accounts[2]
		const addressZ4Jkm4z = accounts[2]
		const addressuhnIakD = accounts[1]
		const addressEnp3OqT = accounts[4]
		const address28CYHT = accounts[0]
		const uintsv3uze = BigInt("1377")
		const addressNtEnh5 = accounts[4]
		const addressRmttsnt = await afiControllerFPbCyzz.revokeStrategy.call(addressFoIkhTY, addressuGEbSNS, {from: accounts[5]});
		const addressmubkkz = await afiControllerFPbCyzz.setStrategist.call(addressWlPdNiM, {from: accounts[1]});
		const addresscR85tYy = await afiControllerFPbCyzz.setStrategist.call(addressSJTgaQp, {from: accounts[1]});
		const addressADGsgGr = await afiControllerFPbCyzz.setConverter.call(addressuhnIakD, addressZ4Jkm4z, addressCIcnl4R, {from: accounts[0]});
		const addressqh8V5Om = await afiControllerFPbCyzz.inCaseStrategyTokenGetStuck.call(address28CYHT, addressEnp3OqT, {from: accounts[1]});
		const addressp1BrMCh = await afiControllerFPbCyzz.withdraw.call(addressNtEnh5, uintsv3uze, {from: accounts[2]});

		await expect(afiControllerFPbCyzz.revokeStrategy.call(addressFoIkhTY, addressuGEbSNS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressY5aUys = accounts[0]
		const afiControllerhOrd53s = await afiController.new(addressY5aUys, {from: "0x0000000000000000000000000000000000000001"});
		const addressW5CbcM = accounts[1]
		const addressu9gPeOO = accounts[4]
		const addressCBd2StS = accounts[1]
		const uintcMHLdvN = BigInt("1379")
		const addressbq1ZT1L = accounts[5]
		const uintuTGlkLh = BigInt("569")
		const addressnTD6SV6 = accounts[4]
		const addressoTd92d = await afiControllerhOrd53s.withdrawAll.call(addressW5CbcM, {from: accounts[3]});
		const addressklJr7i2 = await afiControllerhOrd53s.approveStrategy.call(addressCBd2StS, addressu9gPeOO, {from: "0x0000000000000000000000000000000000000001"});
		const addressUo3p72K = await afiControllerhOrd53s.earn.call(addressbq1ZT1L, uintcMHLdvN, {from: "0x0000000000000000000000000000000000000001"});
		const addressC0eioSB = await afiControllerhOrd53s.inCaseTokensGetStuck.call(addressnTD6SV6, uintuTGlkLh, {from: accounts[0]});
	});

	it('test for afiController', async () => {
		const addressVI94WKX = accounts[4]
		const afiControllerH3fNslL = await afiController.new(addressVI94WKX, {from: accounts[3]});
		const addressOX7uVIe = "0x0000000000000000000000000000000000000001"
		const addressyneURy = accounts[1]
		const addressbkSRvyN = accounts[3]
		const addressnsNouTw = accounts[4]
		const addressgTWBJ3 = accounts[3]
		const addressDzEgVv2 = await afiControllerH3fNslL.setStrategist.call(addressOX7uVIe, {from: accounts[1]});
		const addressRusvZoe = await afiControllerH3fNslL.setConverter.call(addressnsNouTw, addressbkSRvyN, addressyneURy, {from: accounts[5]});
		const addressI98zV1 = await afiControllerH3fNslL.setStrategist.call(addressgTWBJ3, {from: accounts[5]});

		await expect(afiControllerH3fNslL.setStrategist.call(addressOX7uVIe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address2au2vf = accounts[4]
		const afiControlleruD42QqU = await afiController.new(address2au2vf, {from: accounts[4]});
		const addressv5fPTNx = accounts[3]
		const addressCkLvxEV = accounts[3]
		const addressso8QKD2 = accounts[3]
		const addressXdvSl7E = accounts[5]
		const addressfMDu5KN = accounts[3]
		const addressQjdnB6c = accounts[3]
		const addressih7Ff6f = accounts[2]
		const addressvdQbMB0 = accounts[0]
		const uintFNLWHiO = await afiControlleruD42QqU.balanceOf.call(addressv5fPTNx, {from: accounts[0]});
		const addressjgk9Hx0 = await afiControlleruD42QqU.withdrawAll.call(addressCkLvxEV, {from: accounts[0]});
		const addressWwtMwpb = await afiControlleruD42QqU.withdrawAll.call(addressso8QKD2, {from: accounts[2]});
		const uintwHYva3 = await afiControlleruD42QqU.balanceOf.call(addressXdvSl7E, {from: accounts[2]});
		const addressilaNsx = await afiControlleruD42QqU.inCaseStrategyTokenGetStuck.call(addressQjdnB6c, addressfMDu5KN, {from: accounts[5]});
		const addressdkgl8nR = await afiControlleruD42QqU.approveStrategy.call(addressvdQbMB0, addressih7Ff6f, {from: accounts[1]});

		await expect(afiControlleruD42QqU.balanceOf.call(addressv5fPTNx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressjlPdB5 = accounts[0]
		const afiControllerDMEGA1R = await afiController.new(addressjlPdB5, {from: accounts[4]});
		const addressiBiFniz = accounts[4]
		const addressyx0Cx3G = "0x0000000000000000000000000000000000000001"
		const addressSWCdrY4 = accounts[2]
		const uintSHslV1n = BigInt("1487")
		const addresszn78tb = accounts[4]
		const addresseWDCUB1 = accounts[1]
		const addresslC0vOFs = accounts[5]
		const addresstefn4vc = accounts[0]
		const addressvPHkCD = await afiControllerDMEGA1R.setStrategy.call(addressyx0Cx3G, addressiBiFniz, {from: accounts[1]});
		const addressdknnQPk = await afiControllerDMEGA1R.setOneSplit.call(addressSWCdrY4, {from: accounts[2]});
		const addresswG3exZs = await afiControllerDMEGA1R.yearn.call(addresseWDCUB1, addresszn78tb, uintSHslV1n, {from: accounts[0]});
		const addresseNFNH29 = await afiControllerDMEGA1R.setGovernance.call(addresslC0vOFs, {from: accounts[2]});
		const addressd792xZ = await afiControllerDMEGA1R.setOneSplit.call(addresstefn4vc, {from: accounts[3]});

		await expect(afiControllerDMEGA1R.setStrategy.call(addressyx0Cx3G, addressiBiFniz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresszptaXN2 = accounts[4]
		const afiControllerB2En4SO = await afiController.new(addresszptaXN2, {from: accounts[3]});
		const addressUFCopI = accounts[3]
		const addressPEHXEpS = accounts[3]
		const address91ymf8 = "0x0000000000000000000000000000000000000001"
		const addressnpGpf6g = accounts[2]
		const uintRHdSIa = BigInt("1892")
		const addressp6jIDtt = accounts[1]
		const addressIbkyK6P = accounts[5]
		const addressEzTnTwD = accounts[1]
		const uintQ7Alz0 = BigInt("1783")
		const addresse4XpHJF = accounts[0]
		const addressOq56J07 = await afiControllerB2En4SO.setConverter.call(address91ymf8, addressPEHXEpS, addressUFCopI, {from: "0x0000000000000000000000000000000000000001"});
		const addressMU7zv44 = await afiControllerB2En4SO.setGovernance.call(addressnpGpf6g, {from: accounts[5]});
		const addressODTx5DY = await afiControllerB2En4SO.yearn.call(addressIbkyK6P, addressp6jIDtt, uintRHdSIa, {from: accounts[3]});
		const addresszgMT9iA = await afiControllerB2En4SO.setStrategist.call(addressEzTnTwD, {from: accounts[1]});
		const addressEKceeRe = await afiControllerB2En4SO.earn.call(addresse4XpHJF, uintQ7Alz0, {from: accounts[3]});

		await expect(afiControllerB2En4SO.setConverter.call(address91ymf8, addressPEHXEpS, addressUFCopI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressTQjJwCD = accounts[4]
		const afiControllerH3fNslL = await afiController.new(addressTQjJwCD, {from: accounts[3]});
		const addressE8QbyXL = "0x0000000000000000000000000000000000000001"
		const addressbjcFTn6 = accounts[1]
		const addressPkCnpIp = accounts[1]
		const addressmHCwbsV = "0x0000000000000000000000000000000000000001"
		const addressdKqfM3U = accounts[3]
		const addressC3qP77k = await afiControllerH3fNslL.approveStrategy.call(addressbjcFTn6, addressE8QbyXL, {from: "0x0000000000000000000000000000000000000001"});
		const addressSChKJ62 = await afiControllerH3fNslL.setGovernance.call(addressPkCnpIp, {from: "0x0000000000000000000000000000000000000001"});
		const addressDzEgVv2 = await afiControllerH3fNslL.setStrategist.call(addressmHCwbsV, {from: accounts[1]});
		const addressI98zV1 = await afiControllerH3fNslL.setStrategist.call(addressdKqfM3U, {from: accounts[5]});

		await expect(afiControllerH3fNslL.approveStrategy.call(addressbjcFTn6, addressE8QbyXL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressAB9HR8i = accounts[1]
		const afiControllerGF83Wsz = await afiController.new(addressAB9HR8i, {from: accounts[3]});
		const uintH0cz692 = BigInt("852")
		const addressIWdSRem = accounts[4]
		const addressbgvQjj = accounts[4]
		const addressodOHNeU = accounts[0]
		const addressXiD7H6J = await afiControllerGF83Wsz.inCaseTokensGetStuck.call(addressIWdSRem, uintH0cz692, {from: accounts[4]});
		const addresshd5XKYt = await afiControllerGF83Wsz.setOneSplit.call(addressbgvQjj, {from: accounts[0]});
		const addressuhnFZK = await afiControllerGF83Wsz.setOneSplit.call(addressodOHNeU, {from: accounts[1]});

		await expect(afiControllerGF83Wsz.inCaseTokensGetStuck.call(addressIWdSRem, uintH0cz692, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address4EIwhc = accounts[4]
		const afiControllerH3fNslL = await afiController.new(address4EIwhc, {from: accounts[3]});
		const addresszkdJOM = accounts[2]
		const addressdwZTCHW = accounts[1]
		const addressCVtd8vo = "0x0000000000000000000000000000000000000001"
		const addressOmSUmcf = accounts[1]
		const addressjLO6LOu = accounts[1]
		const addressuve8tD6 = "0x0000000000000000000000000000000000000000"
		const addresswqwiJAY = accounts[3]
		const addressahiL0DM = await afiControllerH3fNslL.inCaseStrategyTokenGetStuck.call(addressdwZTCHW, addresszkdJOM, {from: "0x0000000000000000000000000000000000000001"});
		const addressC3qP77k = await afiControllerH3fNslL.approveStrategy.call(addressOmSUmcf, addressCVtd8vo, {from: "0x0000000000000000000000000000000000000001"});
		const addressSChKJ62 = await afiControllerH3fNslL.setGovernance.call(addressjLO6LOu, {from: "0x0000000000000000000000000000000000000001"});
		const addressDzEgVv2 = await afiControllerH3fNslL.setStrategist.call(addressuve8tD6, {from: accounts[1]});
		const addressI98zV1 = await afiControllerH3fNslL.setStrategist.call(addresswqwiJAY, {from: accounts[5]});

		await expect(afiControllerH3fNslL.inCaseStrategyTokenGetStuck.call(addressdwZTCHW, addresszkdJOM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressMp9hvG = accounts[5]
		const afiControllerRgYiYV = await afiController.new(addressMp9hvG, {from: accounts[2]});
		const uintjCAnCzx = BigInt("32")
		const addressfgW36h4 = accounts[1]
		const addressCLS908W = accounts[0]
		const uintW5y9lkt = BigInt("1235")
		const addressrBILBuf = "0x0000000000000000000000000000000000000001"
		const addressCoyRZn6 = accounts[0]
		const addressNfzcPkj = accounts[1]
		const uintoYH9a9 = await afiControllerRgYiYV.getExpectedReturn.call(addressCLS908W, addressfgW36h4, uintjCAnCzx, {from: accounts[3]});
		const uintCgngSP = await afiControllerRgYiYV.getExpectedReturn.call(addressCoyRZn6, addressrBILBuf, uintW5y9lkt, {from: "0x0000000000000000000000000000000000000001"});
		const addressk8GDcHd = await afiControllerRgYiYV.setOneSplit.call(addressNfzcPkj, {from: accounts[0]});

		await expect(afiControllerRgYiYV.getExpectedReturn.call(addressCLS908W, addressfgW36h4, uintjCAnCzx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressQSfdu5M = accounts[4]
		const afiControlleriaGrBzj = await afiController.new(addressQSfdu5M, {from: accounts[2]});
		const addressuR6eBZn = accounts[2]
		const uintFZTp5eb = BigInt("1323")
		const addressBKUuNA = accounts[2]
		const addressqUM0ook = accounts[0]
		const addressvWomSdn = accounts[2]
		const addressf4P8Cx0 = accounts[1]
		const addressnd1BKW = accounts[1]
		const addressEIbWrv = await afiControlleriaGrBzj.withdrawAll.call(addressuR6eBZn, {from: accounts[0]});
		const addressuCEL0di = await afiControlleriaGrBzj.yearn.call(addressqUM0ook, addressBKUuNA, uintFZTp5eb, {from: accounts[4]});
		const addressnaP0uKb = await afiControlleriaGrBzj.revokeStrategy.call(addressf4P8Cx0, addressvWomSdn, {from: "0x0000000000000000000000000000000000000001"});
		const uintYdIE6Uc = await afiControlleriaGrBzj.balanceOf.call(addressnd1BKW, {from: accounts[1]});

		await expect(afiControlleriaGrBzj.withdrawAll.call(addressuR6eBZn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address9Xy8LY = accounts[3]
		const afiControllerE75mat = await afiController.new(address9Xy8LY, {from: accounts[1]});
		const uintWNhv9kA = BigInt("954")
		const addressE5cJ09F = accounts[2]
		const addresscbEca6X = accounts[2]
		const addresslYqHaVy = accounts[4]
		const addressIpy1vVn = accounts[2]
		const addressqYtugG7 = accounts[1]
		const addressTHttMFr = await afiControllerE75mat.earn.call(addressE5cJ09F, uintWNhv9kA, {from: accounts[3]});
		const addressiM1MBqT = await afiControllerE75mat.setVault.call(addresslYqHaVy, addresscbEca6X, {from: accounts[2]});
		const addressYXZO6Lu = await afiControllerE75mat.revokeStrategy.call(addressqYtugG7, addressIpy1vVn, {from: accounts[1]});

		await expect(afiControllerE75mat.earn.call(addressE5cJ09F, uintWNhv9kA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressfPARymU = accounts[4]
		const afiControlleriaGrBzj = await afiController.new(addressfPARymU, {from: accounts[2]});
		const addressh3CfUu6 = accounts[2]
		const addressjPvmIR7 = accounts[4]
		const addresssLbuTX = accounts[3]
		const addressDqavNiR = accounts[2]
		const addressAGInrAp = accounts[1]
		const addresstLsdNIF = await afiControlleriaGrBzj.setOneSplit.call(addressh3CfUu6, {from: "0x0000000000000000000000000000000000000001"});
		const addressh3NUW98 = await afiControlleriaGrBzj.withdrawAll.call(addressjPvmIR7, {from: accounts[3]});
		const addressnaP0uKb = await afiControlleriaGrBzj.revokeStrategy.call(addressDqavNiR, addresssLbuTX, {from: "0x0000000000000000000000000000000000000001"});
		const uintYdIE6Uc = await afiControlleriaGrBzj.balanceOf.call(addressAGInrAp, {from: accounts[1]});

		await expect(afiControlleriaGrBzj.setOneSplit.call(addressh3CfUu6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSTaPTOB = accounts[0]
		const afiControllerpadqHQ2 = await afiController.new(addressSTaPTOB, {from: accounts[4]});
		const uintBftmmRJ = BigInt("1808")
		const addressPB10BSz = accounts[1]
		const addressALzPJbh = accounts[1]
		const addressMxjU05o = accounts[0]
		const uintBePOfQu = BigInt("824")
		const addressFmqrqL = accounts[4]
		const addressEcK9VPo = accounts[1]
		const addressYiKxqV7 = await afiControllerpadqHQ2.yearn.call(addressALzPJbh, addressPB10BSz, uintBftmmRJ, {from: accounts[4]});
		const addressI78I52I = await afiControllerpadqHQ2.setStrategist.call(addressMxjU05o, {from: accounts[3]});
		const addressRLG6JJX = await afiControllerpadqHQ2.inCaseTokensGetStuck.call(addressFmqrqL, uintBePOfQu, {from: accounts[1]});
		const addressX4VfRJJ = await afiControllerpadqHQ2.setStrategist.call(addressEcK9VPo, {from: accounts[3]});

		await expect(afiControllerpadqHQ2.yearn.call(addressALzPJbh, addressPB10BSz, uintBftmmRJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdPD7Bzc = accounts[4]
		const afiControlleriaGrBzj = await afiController.new(addressdPD7Bzc, {from: accounts[2]});
		const uintyyA576p = BigInt("1906")
		const addressmG2vRq = accounts[2]
		const addressCmTLgLP = accounts[4]
		const uintk6hRwNr = await afiControlleriaGrBzj.setSplit.call(uintyyA576p, {from: accounts[5]});
		const addressnaP0uKb = await afiControlleriaGrBzj.revokeStrategy.call(addressCmTLgLP, addressmG2vRq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControlleriaGrBzj.setSplit.call(uintyyA576p, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressUDaUw1 = accounts[4]
		const afiControllerH3fNslL = await afiController.new(addressUDaUw1, {from: accounts[3]});
		const uintuZ0gS8v = BigInt("1916")
		const addressf7h7H8N = accounts[3]
		const addressh4NUVGE = accounts[3]
		const addressuK9tLNl = accounts[4]
		const addresslF51jlM = accounts[1]
		const addressbJBL8YD = accounts[2]
		const uintA5i95Gy = await afiControllerH3fNslL.setSplit.call(uintuZ0gS8v, {from: accounts[3]});
		const addressjYYCd4u = await afiControllerH3fNslL.withdrawAll.call(addressf7h7H8N, {from: accounts[3]});
		const uintGmaISB5 = await afiControllerH3fNslL.balanceOf.call(addressh4NUVGE, {from: accounts[2]});
		const addressI98zV1 = await afiControllerH3fNslL.setStrategist.call(addressuK9tLNl, {from: accounts[5]});
		const addressDm2l0Tg = await afiControllerH3fNslL.inCaseStrategyTokenGetStuck.call(addressbJBL8YD, addresslF51jlM, {from: accounts[1]});

		await expect(afiControllerH3fNslL.withdrawAll.call(addressf7h7H8N, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressUgLrXbi = accounts[4]
		const afiControllerH3fNslL = await afiController.new(addressUgLrXbi, {from: accounts[3]});
		const uintyUKQXB = BigInt("1153")
		const addressTU2svW = accounts[3]
		const addressYQfIXPf = accounts[1]
		const addressiVQwBp = "0x0000000000000000000000000000000000000001"
		const addresshjjMmR = accounts[4]
		const addressm9uo75N = await afiControllerH3fNslL.inCaseTokensGetStuck.call(addressTU2svW, uintyUKQXB, {from: accounts[3]});
		const addressATPcDfx = await afiControllerH3fNslL.revokeStrategy.call(addressiVQwBp, addressYQfIXPf, {from: accounts[1]});
		const addressI98zV1 = await afiControllerH3fNslL.setStrategist.call(addresshjjMmR, {from: accounts[5]});

		await expect(afiControllerH3fNslL.inCaseTokensGetStuck.call(addressTU2svW, uintyUKQXB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresswa9ZowH = accounts[0]
		const afiControllerYLEDxjZ = await afiController.new(addresswa9ZowH, {from: accounts[1]});
		const addressMMbpnW6 = accounts[0]
		const addresshacudr7 = "0x0000000000000000000000000000000000000001"
		const addressLzSAQqQ = accounts[1]
		const uintlKXOTTz = BigInt("1203")
		const addressiD7oNCA = accounts[0]
		const addressVIq3Fhp = accounts[0]
		const addressjH1WQ0n = accounts[3]
		const addressXYfgx7W = "0x0000000000000000000000000000000000000001"
		const addressCnYSQT = accounts[4]
		const addressnBKEpQO = await afiControllerYLEDxjZ.setConverter.call(addressLzSAQqQ, addresshacudr7, addressMMbpnW6, {from: accounts[1]});
		const addressVYyRDG = await afiControllerYLEDxjZ.inCaseTokensGetStuck.call(addressiD7oNCA, uintlKXOTTz, {from: accounts[3]});
		const addressYzCL6Ao = await afiControllerYLEDxjZ.setStrategist.call(addressVIq3Fhp, {from: accounts[4]});
		const addressLZM58kU = await afiControllerYLEDxjZ.approveStrategy.call(addressXYfgx7W, addressjH1WQ0n, {from: accounts[0]});
		const uintzRFi226 = await afiControllerYLEDxjZ.balanceOf.call(addressCnYSQT, {from: accounts[1]});

		await expect(afiControllerYLEDxjZ.inCaseTokensGetStuck.call(addressiD7oNCA, uintlKXOTTz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressBCbXbOx = accounts[1]
		const afiControllerl9336wG = await afiController.new(addressBCbXbOx, {from: accounts[2]});
		const addressbCSviIb = accounts[4]
		const addressF55Z0wJ = accounts[1]
		const addressQWH3zCw = "0x0000000000000000000000000000000000000001"
		const uintj6MsK5T = BigInt("1610")
		const addressBHBDFFI = accounts[1]
		const address0v6biG = accounts[5]
		const addressLGD2UGD = await afiControllerl9336wG.setGovernance.call(addressbCSviIb, {from: accounts[2]});
		const addresscy9NI6G = await afiControllerl9336wG.setOneSplit.call(addressF55Z0wJ, {from: accounts[1]});
		const addresszw2oc0j = await afiControllerl9336wG.setGovernance.call(addressQWH3zCw, {from: "0x0000000000000000000000000000000000000001"});
		const uintgZnlRTO = await afiControllerl9336wG.getExpectedReturn.call(address0v6biG, addressBHBDFFI, uintj6MsK5T, {from: accounts[3]});

		await expect(afiControllerl9336wG.setOneSplit.call(addressF55Z0wJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshwoYWF = accounts[4]
		const afiControlleriaGrBzj = await afiController.new(addresshwoYWF, {from: accounts[2]});
		const addressXzxf9PO = accounts[3]
		const uintXZE6Rrr = BigInt("915")
		const addressswRW4Et = accounts[0]
		const addressK9FIkw = accounts[3]
		const addressOyNwSOy = accounts[3]
		const addresszBtcyA2 = accounts[0]
		const addressk7OXHV6 = await afiControlleriaGrBzj.setRewards.call(addressXzxf9PO, {from: accounts[2]});
		const addressEcGCwjX = await afiControlleriaGrBzj.yearn.call(addressK9FIkw, addressswRW4Et, uintXZE6Rrr, {from: accounts[2]});
		const addressd4Po50S = await afiControlleriaGrBzj.inCaseStrategyTokenGetStuck.call(addresszBtcyA2, addressOyNwSOy, {from: accounts[0]});

		await expect(afiControlleriaGrBzj.yearn.call(addressK9FIkw, addressswRW4Et, uintXZE6Rrr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressiiz5PoG = accounts[4]
		const afiControllerH3fNslL = await afiController.new(addressiiz5PoG, {from: accounts[3]});
		const addressUyZJalK = accounts[0]
		const addressJnOxlzR = accounts[4]
		const addressvJ4r0Iw = accounts[4]
		const addressv7JZFC7 = await afiControllerH3fNslL.setOneSplit.call(addressUyZJalK, {from: accounts[3]});
		const addressI98zV1 = await afiControllerH3fNslL.setStrategist.call(addressJnOxlzR, {from: accounts[5]});
		const uinte00OhAz = await afiControllerH3fNslL.balanceOf.call(addressvJ4r0Iw, {from: accounts[3]});

		await expect(afiControllerH3fNslL.setStrategist.call(addressJnOxlzR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressFrEiQA5 = accounts[4]
		const afiControlleriaGrBzj = await afiController.new(addressFrEiQA5, {from: accounts[2]});
		const uint82gD6P = BigInt("1773")
		const addresst6uJGRd = accounts[0]
		const addressVAUgQEk = accounts[1]
		const address4VoF7X = accounts[2]
		const address7wrIT7 = accounts[4]
		const addressCznf0II = accounts[1]
		const addresswy6JjBP = await afiControlleriaGrBzj.withdraw.call(addresst6uJGRd, uint82gD6P, {from: accounts[0]});
		const addressYzmokKs = await afiControlleriaGrBzj.approveStrategy.call(address4VoF7X, addressVAUgQEk, {from: "0x0000000000000000000000000000000000000001"});
		const addressd4Po50S = await afiControlleriaGrBzj.inCaseStrategyTokenGetStuck.call(addressCznf0II, address7wrIT7, {from: accounts[0]});

		await expect(afiControlleriaGrBzj.withdraw.call(addresst6uJGRd, uint82gD6P, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSJG4gy8 = accounts[2]
		const afiControllereufPbpl = await afiController.new(addressSJG4gy8, {from: accounts[2]});
		const address6MBNwx = accounts[3]
		const addresssJHxYII = accounts[3]
		const addressb7hVJQW = accounts[5]
		const addressLDN6lJm = accounts[3]
		const addressWXBdn3a = await afiControllereufPbpl.inCaseStrategyTokenGetStuck.call(addresssJHxYII, address6MBNwx, {from: accounts[2]});
		const addressbTj2oDi = await afiControllereufPbpl.approveStrategy.call(addressLDN6lJm, addressb7hVJQW, {from: accounts[3]});

		await expect(afiControllereufPbpl.inCaseStrategyTokenGetStuck.call(addresssJHxYII, address6MBNwx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressMLb3Pvd = accounts[4]
		const afiControllerH3fNslL = await afiController.new(addressMLb3Pvd, {from: accounts[3]});
		const addressP5AgTj = accounts[0]
		const addresscrTh6yo = accounts[2]
		const addressVe1Hca5 = accounts[3]
		const addresspYaB5Aw = await afiControllerH3fNslL.setStrategy.call(addresscrTh6yo, addressP5AgTj, {from: accounts[3]});
		const addressI98zV1 = await afiControllerH3fNslL.setStrategist.call(addressVe1Hca5, {from: accounts[5]});

		await expect(afiControllerH3fNslL.setStrategy.call(addresscrTh6yo, addressP5AgTj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address3IdHrL = accounts[2]
		const afiControllereufPbpl = await afiController.new(address3IdHrL, {from: accounts[2]});
		const addresslhZMk3H = accounts[1]
		const addressXimZfd1 = accounts[5]
		const addressLXVXEqs = accounts[3]
		const addressWCadp8r = await afiControllereufPbpl.setStrategist.call(addresslhZMk3H, {from: accounts[2]});
		const addressbTj2oDi = await afiControllereufPbpl.approveStrategy.call(addressLXVXEqs, addressXimZfd1, {from: accounts[3]});

		await expect(afiControllereufPbpl.approveStrategy.call(addressLXVXEqs, addressXimZfd1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressoIsSqZe = accounts[2]
		const afiControllereufPbpl = await afiController.new(addressoIsSqZe, {from: accounts[2]});
		const addressNohc6M = "0x0000000000000000000000000000000000000001"
		const addressCdxD3Ao = accounts[2]
		const uintxpwKT5 = BigInt("1357")
		const addressC6P9vYI = accounts[5]
		const addresszKglUKi = await afiControllereufPbpl.revokeStrategy.call(addressCdxD3Ao, addressNohc6M, {from: accounts[2]});
		const addressqYieEC = await afiControllereufPbpl.earn.call(addressC6P9vYI, uintxpwKT5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllereufPbpl.earn.call(addressC6P9vYI, uintxpwKT5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresswkJVxvL = accounts[2]
		const afiControllereufPbpl = await afiController.new(addresswkJVxvL, {from: accounts[2]});
		const addressyIYJ6hD = accounts[3]
		const addressx9WBLIW = accounts[2]
		const uintFdu7LK = BigInt("616")
		const addressmraDK3 = accounts[1]
		const uintYnD1Dfe = BigInt("640")
		const addressnVHcIKo = accounts[5]
		const addressHpIlRPF = "0x0000000000000000000000000000000000000001"
		const addressRxrz77P = accounts[5]
		const addresscs9rBGx = await afiControllereufPbpl.approveStrategy.call(addressx9WBLIW, addressyIYJ6hD, {from: accounts[2]});
		const addressOSzjNT9 = await afiControllereufPbpl.inCaseTokensGetStuck.call(addressmraDK3, uintFdu7LK, {from: accounts[2]});
		const addressDOlTPQ9 = await afiControllereufPbpl.earn.call(addressnVHcIKo, uintYnD1Dfe, {from: accounts[1]});
		const addressNSdXhYP = await afiControllereufPbpl.setVault.call(addressRxrz77P, addressHpIlRPF, {from: accounts[2]});

		await expect(afiControllereufPbpl.inCaseTokensGetStuck.call(addressmraDK3, uintFdu7LK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressviwnbbC = accounts[2]
		const afiControllereufPbpl = await afiController.new(addressviwnbbC, {from: accounts[2]});
		const addresstlHoK4X = accounts[0]
		const address4vKqjh = accounts[4]
		const uintuiR25QN = BigInt("614")
		const addressc07gEBy = accounts[2]
		const addressWuq82bR = accounts[5]
		const addressEmxm06X = "0x0000000000000000000000000000000000000001"
		const addressa3a8sqc = await afiControllereufPbpl.setVault.call(address4vKqjh, addresstlHoK4X, {from: accounts[2]});
		const addressOSzjNT9 = await afiControllereufPbpl.inCaseTokensGetStuck.call(addressc07gEBy, uintuiR25QN, {from: accounts[2]});
		const addressWGBEdtN = await afiControllereufPbpl.approveStrategy.call(addressEmxm06X, addressWuq82bR, {from: accounts[0]});

		await expect(afiControllereufPbpl.inCaseTokensGetStuck.call(addressc07gEBy, uintuiR25QN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})