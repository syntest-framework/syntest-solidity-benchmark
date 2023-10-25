const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressUwRcJfb = accounts[4]
		const Controllerphfz1S7 = await Controller.new(addressUwRcJfb, {from: accounts[0]});
		const uintD2LBYmb = BigInt("2009")
		const addressqURITnw = accounts[4]
		const addressQr5VyL2 = accounts[4]
		const uintXfyqFgu = BigInt("1902")
		const addressZePeqDg = accounts[1]
//		const addressoWwTGeY = await Controllerphfz1S7.inCaseTokensGetStuck.call(addressqURITnw, uintD2LBYmb, {from: accounts[2]});
//		const addressJDE8nN5 = await Controllerphfz1S7.setGovernance.call(addressQr5VyL2, {from: accounts[4]});
//		const addressR4DRPFr = await Controllerphfz1S7.inCaseTokensGetStuck.call(addressZePeqDg, uintXfyqFgu, {from: accounts[0]});

		await expect(Controllerphfz1S7.inCaseTokensGetStuck.call(addressqURITnw, uintD2LBYmb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresspzdlYTW = accounts[0]
		const ControllerxECxYK3 = await Controller.new(addresspzdlYTW, {from: accounts[3]});
		const addressdC0au15 = accounts[1]
		const addresscoTdNFJ = accounts[5]
		const addressd7uaCPH = accounts[4]
		const uintjHgfgl0 = BigInt("1003")
		const addressRfEllQN = accounts[3]
		const addresssk8rFPh = accounts[5]
		const addressYO2CtrA = accounts[4]
		const addressLelarIb = accounts[3]
		const addressbkGCiut = accounts[2]
//		const addressek7Dkbm = await ControllerxECxYK3.setStrategist.call(addressdC0au15, {from: accounts[1]});
//		const address4dz9NR = await ControllerxECxYK3.approveStrategy.call(addressd7uaCPH, addresscoTdNFJ, {from: accounts[4]});
//		const addressQZg4rwS = await ControllerxECxYK3.earn.call(addressRfEllQN, uintjHgfgl0, {from: accounts[4]});
//		const addressFI9lcrz = await ControllerxECxYK3.inCaseStrategyTokenGetStuck.call(addressYO2CtrA, addresssk8rFPh, {from: accounts[5]});
//		const addressDUZNK2E = await ControllerxECxYK3.inCaseStrategyTokenGetStuck.call(addressbkGCiut, addressLelarIb, {from: accounts[2]});

		await expect(ControllerxECxYK3.setStrategist.call(addressdC0au15, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressRZ8tet5 = accounts[2]
		const Controllerb6Diyj7 = await Controller.new(addressRZ8tet5, {from: accounts[5]});
		const addressJGr0WVw = accounts[0]
		const addressOW3cas8 = accounts[2]
		const uintoLLpKs4 = BigInt("1407")
		const addressigWX5rc = accounts[4]
		const uintCyTiCs8 = BigInt("417")
		const addressJteLQmr = accounts[4]
		const addressBUEqR4 = accounts[3]
		const addresseBjTOfa = accounts[3]
//		const uintj3imApl = await Controllerb6Diyj7.balanceOf.call(addressJGr0WVw, {from: accounts[0]});
//		const addressnQVmMm = await Controllerb6Diyj7.setStrategist.call(addressOW3cas8, {from: accounts[0]});
//		const addressOdT99Dk = await Controllerb6Diyj7.earn.call(addressigWX5rc, uintoLLpKs4, {from: accounts[5]});
//		const addressnt50x69 = await Controllerb6Diyj7.withdraw.call(addressJteLQmr, uintCyTiCs8, {from: accounts[1]});
//		const addressOjLOpJU = await Controllerb6Diyj7.setStrategist.call(addressBUEqR4, {from: accounts[2]});
//		const addresslzc0ufy = await Controllerb6Diyj7.setOneSplit.call(addresseBjTOfa, {from: accounts[0]});

		await expect(Controllerb6Diyj7.balanceOf.call(addressJGr0WVw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfBnB5rL = accounts[3]
		const ControlleryUlY4uK = await Controller.new(addressfBnB5rL, {from: accounts[3]});
		const addresshEc2klV = accounts[2]
		const addressOr2BufL = "0x0000000000000000000000000000000000000001"
		const address3MYaXA = accounts[4]
		const addressrLQ1Wu5 = "0x0000000000000000000000000000000000000001"
		const addresskIAyVcr = accounts[1]
		const addressfD57Yks = accounts[4]
		const addresscfNA5NN = accounts[2]
//		const addressRhnbMDA = await ControlleryUlY4uK.setStrategy.call(addressOr2BufL, addresshEc2klV, {from: "0x0000000000000000000000000000000000000001"});
//		const uintuOv9pI6 = await ControlleryUlY4uK.balanceOf.call(address3MYaXA, {from: accounts[1]});
//		const addressMpxHwsf = await ControlleryUlY4uK.inCaseStrategyTokenGetStuck.call(addresskIAyVcr, addressrLQ1Wu5, {from: accounts[0]});
//		const addressWSUFlmX = await ControlleryUlY4uK.revokeStrategy.call(addresscfNA5NN, addressfD57Yks, {from: accounts[3]});

		await expect(ControlleryUlY4uK.setStrategy.call(addressOr2BufL, addresshEc2klV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressIh5Yarc = accounts[4]
		const ControllerLBBkmgP = await Controller.new(addressIh5Yarc, {from: accounts[3]});
		const addressH9UZljw = accounts[4]
		const addressxAcVvEh = accounts[5]
		const addressdSk8Uaj = accounts[4]
		const uinta6EBbn5 = BigInt("1237")
		const addressrh9z4h = accounts[1]
		const addressykCt9Zh = accounts[3]
		const uintR8zj1eC = BigInt("1478")
		const addressRDQuegm = accounts[0]
		const addressTaS4H2Z = accounts[3]
		const uintWTMCUA = BigInt("857")
		const addressHEhJTE9 = "0x0000000000000000000000000000000000000001"
		const addressct6naqC = accounts[2]
//		const addressm85myWW = await ControllerLBBkmgP.setOneSplit.call(addressH9UZljw, {from: accounts[1]});
//		const addressSVTnY6P = await ControllerLBBkmgP.revokeStrategy.call(addressdSk8Uaj, addressxAcVvEh, {from: accounts[2]});
//		const addressb4p6Phc = await ControllerLBBkmgP.yearn.call(addressykCt9Zh, addressrh9z4h, uinta6EBbn5, {from: "0x0000000000000000000000000000000000000001"});
//		const uintrnEk9mD = await ControllerLBBkmgP.getExpectedReturn.call(addressTaS4H2Z, addressRDQuegm, uintR8zj1eC, {from: accounts[5]});
//		const addressvhJissT = await ControllerLBBkmgP.yearn.call(addressct6naqC, addressHEhJTE9, uintWTMCUA, {from: accounts[2]});

		await expect(ControllerLBBkmgP.setOneSplit.call(addressH9UZljw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresssPVL9C = "0x0000000000000000000000000000000000000001"
		const ControllerRBb7PDO = await Controller.new(addresssPVL9C, {from: accounts[4]});
		const uintY2NvSq = BigInt("1641")
		const addressHMyxPjK = accounts[5]
		const uintHWSzhjZ = BigInt("710")
		const address5hIJw0 = accounts[2]
		const uinthbzt09u = BigInt("916")
		const addressX0A1wN = accounts[1]
		const addresshGFxmbW = accounts[4]
		const uintjWoNWFW = BigInt("604")
		const addressgZIKxX = accounts[5]
//		const uintc5HR3vE = await ControllerRBb7PDO.setSplit.call(uintY2NvSq, {from: accounts[1]});
//		const addressEaQ1y2j = await ControllerRBb7PDO.setStrategist.call(addressHMyxPjK, {from: accounts[0]});
//		const addresslZ3CeTR = await ControllerRBb7PDO.withdraw.call(address5hIJw0, uintHWSzhjZ, {from: accounts[2]});
//		const addressb4akXyY = await ControllerRBb7PDO.earn.call(addressX0A1wN, uinthbzt09u, {from: accounts[5]});
//		const addressjThpAM9 = await ControllerRBb7PDO.setStrategist.call(addresshGFxmbW, {from: accounts[2]});
//		const addressw4LDa1t = await ControllerRBb7PDO.inCaseTokensGetStuck.call(addressgZIKxX, uintjWoNWFW, {from: accounts[1]});

		await expect(ControllerRBb7PDO.setSplit.call(uintY2NvSq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressqOpyGJY = accounts[2]
		const ControllersZVCPgs = await Controller.new(addressqOpyGJY, {from: "0x0000000000000000000000000000000000000001"});
		const uintBgn3oxD = BigInt("128")
		const addressVy3jUDj = accounts[2]
		const addressSBzAYWs = accounts[2]
		const addressegwnO6 = accounts[4]
		const addressRSlvYH = accounts[3]
		const uintPr4NOV = BigInt("959")
		const addressxL94QYw = accounts[5]
		const uintCTfsPFX = BigInt("1003")
		const addressuKTyBu3 = accounts[0]
		const addressH9OKMqP = accounts[5]
		const addresskNn9fZL = await ControllersZVCPgs.inCaseTokensGetStuck.call(addressVy3jUDj, uintBgn3oxD, {from: accounts[3]});
		const addressv6rzkWj = await ControllersZVCPgs.setConverter.call(addressRSlvYH, addressegwnO6, addressSBzAYWs, {from: accounts[3]});
		const addressDfhA5Fi = await ControllersZVCPgs.inCaseTokensGetStuck.call(addressxL94QYw, uintPr4NOV, {from: accounts[0]});
		const addressRrZJN7Q = await ControllersZVCPgs.yearn.call(addressH9OKMqP, addressuKTyBu3, uintCTfsPFX, {from: accounts[1]});
	});

	it('test for Controller', async () => {
		const addressN2WHmg4 = accounts[0]
		const ControllerzGUcuQY = await Controller.new(addressN2WHmg4, {from: accounts[4]});
		const addressFEXyMX0 = accounts[1]
		const uinthdb1V94 = BigInt("964")
		const addressZ84Z0Vr = accounts[2]
		const addresslFhYLYx = accounts[1]
		const addressKvUKfai = accounts[0]
		const addressWar9hN = accounts[3]
		const addressco0QnoW = accounts[2]
		const addressWd34ABp = accounts[2]
		const uintccTSVVo = BigInt("1274")
		const addressIx8Bxmq = accounts[2]
		const addressA13Sayr = await ControllerzGUcuQY.setGovernance.call(addressFEXyMX0, {from: accounts[4]});
//		const addressD0hOMwJ = await ControllerzGUcuQY.earn.call(addressZ84Z0Vr, uinthdb1V94, {from: accounts[3]});
//		const addressvKjOsTi = await ControllerzGUcuQY.setConverter.call(addressWar9hN, addressKvUKfai, addresslFhYLYx, {from: accounts[3]});
//		const addressHctH7JE = await ControllerzGUcuQY.approveStrategy.call(addressWd34ABp, addressco0QnoW, {from: accounts[5]});
//		const addressZHyEcNB = await ControllerzGUcuQY.withdraw.call(addressIx8Bxmq, uintccTSVVo, {from: accounts[1]});

		await expect(ControllerzGUcuQY.earn.call(addressZ84Z0Vr, uinthdb1V94, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresssHbhfJ4 = accounts[4]
		const Controllerphfz1S7 = await Controller.new(addresssHbhfJ4, {from: accounts[0]});
		const uintjEEgAt = BigInt("1953")
		const addressahTT3c0 = accounts[1]
//		const addressR4DRPFr = await Controllerphfz1S7.inCaseTokensGetStuck.call(addressahTT3c0, uintjEEgAt, {from: accounts[0]});

		await expect(Controllerphfz1S7.inCaseTokensGetStuck.call(addressahTT3c0, uintjEEgAt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressvMqpwap = accounts[4]
		const ControllerLBBkmgP = await Controller.new(addressvMqpwap, {from: accounts[3]});
		const uinto3D03nd = BigInt("1237")
		const addressj6ElHjn = accounts[1]
		const addressd1v3SHv = accounts[3]
		const addressdwpI392 = accounts[4]
		const addressjbWfxaC = accounts[4]
		const addressKI1oQZ = accounts[3]
		const uintRSzrVTe = BigInt("1478")
		const addressz1Q7UOS = accounts[1]
		const addresspGMRvKV = accounts[3]
		const uintYDAcJ9 = BigInt("857")
		const addressAxE4QAf = "0x0000000000000000000000000000000000000001"
		const address5GbpNs = accounts[2]
//		const addressb4p6Phc = await ControllerLBBkmgP.yearn.call(addressd1v3SHv, addressj6ElHjn, uinto3D03nd, {from: "0x0000000000000000000000000000000000000001"});
//		const addressn54mWe5 = await ControllerLBBkmgP.setConverter.call(addressKI1oQZ, addressjbWfxaC, addressdwpI392, {from: accounts[5]});
//		const uintrnEk9mD = await ControllerLBBkmgP.getExpectedReturn.call(addresspGMRvKV, addressz1Q7UOS, uintRSzrVTe, {from: accounts[5]});
//		const addressvhJissT = await ControllerLBBkmgP.yearn.call(address5GbpNs, addressAxE4QAf, uintYDAcJ9, {from: accounts[2]});

		await expect(ControllerLBBkmgP.yearn.call(addressd1v3SHv, addressj6ElHjn, uinto3D03nd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressArIgBiV = accounts[0]
		const ControllerxECxYK3 = await Controller.new(addressArIgBiV, {from: accounts[3]});
		const addressoZCEMRR = accounts[5]
		const addresslHlAI4k = accounts[4]
		const uintUNR1W17 = BigInt("1003")
		const addressN8UpN6A = accounts[3]
		const uintE3uuEni = BigInt("1608")
		const addressAxF3xUB = accounts[4]
		const addressZ3ZWOWT = accounts[5]
		const addressYopzR4d = accounts[4]
		const addresszyWtkj = accounts[3]
		const addressI1XaXRV = accounts[2]
//		const address4dz9NR = await ControllerxECxYK3.approveStrategy.call(addresslHlAI4k, addressoZCEMRR, {from: accounts[4]});
//		const addressQZg4rwS = await ControllerxECxYK3.earn.call(addressN8UpN6A, uintUNR1W17, {from: accounts[4]});
//		const addressD519NT1 = await ControllerxECxYK3.earn.call(addressAxF3xUB, uintE3uuEni, {from: accounts[2]});
//		const addressFI9lcrz = await ControllerxECxYK3.inCaseStrategyTokenGetStuck.call(addressYopzR4d, addressZ3ZWOWT, {from: accounts[5]});
//		const addressDUZNK2E = await ControllerxECxYK3.inCaseStrategyTokenGetStuck.call(addressI1XaXRV, addresszyWtkj, {from: accounts[2]});

		await expect(ControllerxECxYK3.approveStrategy.call(addresslHlAI4k, addressoZCEMRR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressa5kPW4K = accounts[2]
		const ControllerA6hBBvk = await Controller.new(addressa5kPW4K, {from: accounts[1]});
		const addressEQzypUL = accounts[4]
		const addressWuvVNmu = accounts[4]
		const addresshG0MHEN = accounts[5]
		const addressWsJBaHZ = accounts[3]
		const uintcbPfsT = BigInt("1825")
		const addressoBXoHFE = accounts[1]
//		const addressokAk2Uj = await ControllerA6hBBvk.setVault.call(addressWuvVNmu, addressEQzypUL, {from: accounts[0]});
//		const addresssEJuu8I = await ControllerA6hBBvk.setOneSplit.call(addresshG0MHEN, {from: accounts[2]});
//		const addressY3ldUQd = await ControllerA6hBBvk.withdrawAll.call(addressWsJBaHZ, {from: accounts[1]});
//		const addressY9FsNJ4 = await ControllerA6hBBvk.earn.call(addressoBXoHFE, uintcbPfsT, {from: accounts[4]});

		await expect(ControllerA6hBBvk.setVault.call(addressWuvVNmu, addressEQzypUL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskEGo429 = accounts[0]
		const ControllerxECxYK3 = await Controller.new(addresskEGo429, {from: accounts[3]});
		const addressUDx4TS = accounts[2]
		const addresstxkVVwr = accounts[1]
		const addresstm5TIl7 = accounts[5]
		const addressBdrTzIB = accounts[4]
		const uintV3Wy7t4 = BigInt("1003")
		const addressILdk6qD = accounts[3]
		const addressSmzj3UJ = accounts[5]
		const addressH2hRSHq = accounts[4]
		const addressbRywiVn = accounts[3]
		const addressMiXIL33 = accounts[2]
		const addressyNowDgZ = await ControllerxECxYK3.setStrategist.call(addressUDx4TS, {from: accounts[3]});
//		const addressek7Dkbm = await ControllerxECxYK3.setStrategist.call(addresstxkVVwr, {from: accounts[1]});
//		const address4dz9NR = await ControllerxECxYK3.approveStrategy.call(addressBdrTzIB, addresstm5TIl7, {from: accounts[4]});
//		const addressQZg4rwS = await ControllerxECxYK3.earn.call(addressILdk6qD, uintV3Wy7t4, {from: accounts[4]});
//		const addressFI9lcrz = await ControllerxECxYK3.inCaseStrategyTokenGetStuck.call(addressH2hRSHq, addressSmzj3UJ, {from: accounts[5]});
//		const addressDUZNK2E = await ControllerxECxYK3.inCaseStrategyTokenGetStuck.call(addressMiXIL33, addressbRywiVn, {from: accounts[2]});

		await expect(ControllerxECxYK3.setStrategist.call(addresstxkVVwr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresscmYg2J = accounts[4]
		const ControllerLBBkmgP = await Controller.new(addresscmYg2J, {from: accounts[3]});
		const addressrpd7UH = accounts[1]
		const addressTezgrx = accounts[5]
		const addressJSupruu = accounts[2]
		const addresshxCG8c = accounts[0]
		const addressCXfefwE = accounts[4]
		const uintEYhTNh = BigInt("857")
		const addressjj35QuI = "0x0000000000000000000000000000000000000001"
		const addressjqlB3mI = accounts[2]
//		const addressvtrK8YT = await ControllerLBBkmgP.setConverter.call(addressJSupruu, addressTezgrx, addressrpd7UH, {from: accounts[0]});
//		const uinto60gCWq = await ControllerLBBkmgP.balanceOf.call(addresshxCG8c, {from: "0x0000000000000000000000000000000000000001"});
//		const addressm85myWW = await ControllerLBBkmgP.setOneSplit.call(addressCXfefwE, {from: accounts[1]});
//		const addressvhJissT = await ControllerLBBkmgP.yearn.call(addressjqlB3mI, addressjj35QuI, uintEYhTNh, {from: accounts[2]});

		await expect(ControllerLBBkmgP.setConverter.call(addressJSupruu, addressTezgrx, addressrpd7UH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresseKShRmq = accounts[4]
		const Controllerphfz1S7 = await Controller.new(addresseKShRmq, {from: accounts[0]});
		const uintcAVNuWe = BigInt("709")
		const addresssypbZhq = accounts[2]
		const addressmTzqkp = accounts[1]
		const uintq3HOtw5 = BigInt("2039")
		const addressLTQ3RwD = accounts[4]
		const uintXnnA51D = BigInt("1958")
		const addressuirjcs = accounts[1]
		const addresso1DEbeh = accounts[4]
		const addressEH7YkmS = accounts[5]
		const addressa8mRE56 = accounts[1]
		const addressrQEVQxf = accounts[4]
//		const uintEAiBqtQ = await Controllerphfz1S7.getExpectedReturn.call(addressmTzqkp, addresssypbZhq, uintcAVNuWe, {from: accounts[3]});
//		const addressBrByKyF = await Controllerphfz1S7.inCaseTokensGetStuck.call(addressLTQ3RwD, uintq3HOtw5, {from: accounts[5]});
//		const addressR4DRPFr = await Controllerphfz1S7.inCaseTokensGetStuck.call(addressuirjcs, uintXnnA51D, {from: accounts[0]});
//		const addresshUOk4e7 = await Controllerphfz1S7.setStrategy.call(addressEH7YkmS, addresso1DEbeh, {from: accounts[4]});
//		const addressQnklMfg = await Controllerphfz1S7.revokeStrategy.call(addressrQEVQxf, addressa8mRE56, {from: accounts[3]});

		await expect(Controllerphfz1S7.getExpectedReturn.call(addressmTzqkp, addresssypbZhq, uintcAVNuWe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressvcS6hK5 = accounts[0]
		const Controllersny0Bxm = await Controller.new(addressvcS6hK5, {from: accounts[3]});
		const addresse5n85iG = accounts[4]
		const addressfpABFwF = accounts[0]
		const addressN8cJ403 = accounts[0]
		const addressgaOoDnw = accounts[3]
		const addressFfYd5TT = "0x0000000000000000000000000000000000000001"
		const uintvtVxHZ4 = BigInt("554")
		const addressJHymW5n = accounts[0]
		const addressnIwEeWA = "0x0000000000000000000000000000000000000001"
//		const addressEQP5az7 = await Controllersny0Bxm.revokeStrategy.call(addressfpABFwF, addresse5n85iG, {from: accounts[2]});
//		const addressQv1vnLp = await Controllersny0Bxm.setStrategy.call(addressgaOoDnw, addressN8cJ403, {from: accounts[0]});
//		const addressIsuPYKO = await Controllersny0Bxm.setStrategist.call(addressFfYd5TT, {from: accounts[0]});
//		const uintuNuivwo = await Controllersny0Bxm.setSplit.call(uintvtVxHZ4, {from: "0x0000000000000000000000000000000000000001"});
//		const addresseYYOXeN = await Controllersny0Bxm.setStrategy.call(addressnIwEeWA, addressJHymW5n, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllersny0Bxm.revokeStrategy.call(addressfpABFwF, addresse5n85iG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressLBAzfOf = accounts[4]
		const ControllerLBBkmgP = await Controller.new(addressLBAzfOf, {from: accounts[3]});
		const address32t3De = "0x0000000000000000000000000000000000000001"
		const address7RwwK0 = accounts[1]
		const addressqpOcKl = accounts[4]
		const addressL49tt1 = accounts[5]
		const addressQHW1y4v = accounts[5]
//		const addressR4OC9Mc = await ControllerLBBkmgP.inCaseStrategyTokenGetStuck.call(address7RwwK0, address32t3De, {from: accounts[0]});
//		const addressWurjo1k = await ControllerLBBkmgP.revokeStrategy.call(addressL49tt1, addressqpOcKl, {from: accounts[2]});
//		const addressm85myWW = await ControllerLBBkmgP.setOneSplit.call(addressQHW1y4v, {from: accounts[1]});

		await expect(ControllerLBBkmgP.inCaseStrategyTokenGetStuck.call(address7RwwK0, address32t3De, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresswEhKu8s = accounts[4]
		const Controllerphfz1S7 = await Controller.new(addresswEhKu8s, {from: accounts[0]});
		const uintv4luP3Z = BigInt("687")
		const addresshfVY0nF = accounts[1]
		const uintONCAV4Y = BigInt("1953")
		const addressTqcoLjZ = accounts[1]
		const uintRLORNX = await Controllerphfz1S7.setSplit.call(uintv4luP3Z, {from: accounts[0]});
//		const addressXPicoeR = await Controllerphfz1S7.setStrategist.call(addresshfVY0nF, {from: accounts[4]});
//		const addressR4DRPFr = await Controllerphfz1S7.inCaseTokensGetStuck.call(addressTqcoLjZ, uintONCAV4Y, {from: accounts[0]});

		await expect(Controllerphfz1S7.setStrategist.call(addresshfVY0nF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjpSB7X = accounts[4]
		const ControllerMRRPfSn = await Controller.new(addressjpSB7X, {from: accounts[2]});
		const addressZfbMqu = accounts[5]
		const addressoa3wmue = accounts[0]
		const addressPeymE7J = accounts[2]
		const addressh58CVqx = accounts[3]
		const addressylEwqkr = accounts[4]
		const addressPfE9ses = accounts[2]
		const addresspoXRYq7 = accounts[3]
//		const addressRe2Uzx2 = await ControllerMRRPfSn.withdrawAll.call(addressZfbMqu, {from: accounts[3]});
//		const addressxqewZRy = await ControllerMRRPfSn.inCaseStrategyTokenGetStuck.call(addressPeymE7J, addressoa3wmue, {from: accounts[4]});
//		const addressjhJzYIc = await ControllerMRRPfSn.inCaseStrategyTokenGetStuck.call(addressylEwqkr, addressh58CVqx, {from: "0x0000000000000000000000000000000000000001"});
//		const addressX80V0X7 = await ControllerMRRPfSn.revokeStrategy.call(addresspoXRYq7, addressPfE9ses, {from: accounts[4]});

		await expect(ControllerMRRPfSn.withdrawAll.call(addressZfbMqu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressj97sIwa = accounts[3]
		const ControllerYEQuk6 = await Controller.new(addressj97sIwa, {from: accounts[4]});
		const addressM3mY59S = accounts[2]
		const addressOU0DIBl = accounts[3]
		const uintVjzF5iS = BigInt("366")
		const addressBF3QPL = accounts[4]
		const addressbw7dNiG = accounts[1]
		const uintWiLX83 = BigInt("1676")
		const addressR74pmar = accounts[2]
		const addressOy785TF = accounts[4]
		const addressJQW4E9x = accounts[1]
		const addressV9Pbmr8 = await ControllerYEQuk6.revokeStrategy.call(addressOU0DIBl, addressM3mY59S, {from: accounts[4]});
//		const addressZmlSZVV = await ControllerYEQuk6.yearn.call(addressbw7dNiG, addressBF3QPL, uintVjzF5iS, {from: accounts[1]});
//		const addressR1wt4CV = await ControllerYEQuk6.yearn.call(addressOy785TF, addressR74pmar, uintWiLX83, {from: accounts[1]});
//		const addressvioIja = await ControllerYEQuk6.setStrategist.call(addressJQW4E9x, {from: accounts[1]});

		await expect(ControllerYEQuk6.yearn.call(addressbw7dNiG, addressBF3QPL, uintVjzF5iS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressGOeBkWm = accounts[4]
		const Controllerphfz1S7 = await Controller.new(addressGOeBkWm, {from: accounts[0]});
		const addressOB8mih = accounts[2]
		const addressNV37mJv = accounts[1]
		const uint2S7NDg = BigInt("1970")
		const addressOQvhPN = accounts[1]
//		const addressBJ0qEEo = await Controllerphfz1S7.setRewards.call(addressOB8mih, {from: accounts[4]});
//		const addresswtTtN7z = await Controllerphfz1S7.setOneSplit.call(addressNV37mJv, {from: accounts[1]});
//		const addressR4DRPFr = await Controllerphfz1S7.inCaseTokensGetStuck.call(addressOQvhPN, uint2S7NDg, {from: accounts[0]});

		await expect(Controllerphfz1S7.setRewards.call(addressOB8mih, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressCwISE50 = accounts[4]
		const ControllerLBBkmgP = await Controller.new(addressCwISE50, {from: accounts[3]});
		const uintiWFG1W = BigInt("388")
		const addressow7bwMY = accounts[2]
		const addresswBJ9auu = accounts[5]
		const addressoQLtBIY = accounts[3]
//		const addressdTkSc33 = await ControllerLBBkmgP.withdraw.call(addressow7bwMY, uintiWFG1W, {from: accounts[3]});
//		const addressm85myWW = await ControllerLBBkmgP.setOneSplit.call(addresswBJ9auu, {from: accounts[1]});
//		const addressFLpHBp2 = await ControllerLBBkmgP.setOneSplit.call(addressoQLtBIY, {from: accounts[1]});

		await expect(ControllerLBBkmgP.withdraw.call(addressow7bwMY, uintiWFG1W, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressTvCBP30 = accounts[4]
		const ControllerLBBkmgP = await Controller.new(addressTvCBP30, {from: accounts[3]});
		const addressaKmxWNt = accounts[3]
		const addressTqrvtip = accounts[0]
		const addresslz5stWi = accounts[5]
		const addresswkLvKxH = accounts[4]
		const uintM5UXyXA = BigInt("861")
		const addressXwXTCUJ = accounts[4]
		const addresstC0YmV3 = await ControllerLBBkmgP.approveStrategy.call(addressTqrvtip, addressaKmxWNt, {from: accounts[3]});
//		const addressm85myWW = await ControllerLBBkmgP.setOneSplit.call(addresslz5stWi, {from: accounts[1]});
//		const addressLBKUqRj = await ControllerLBBkmgP.setStrategist.call(addresswkLvKxH, {from: accounts[3]});
//		const addresskz71OOA = await ControllerLBBkmgP.earn.call(addressXwXTCUJ, uintM5UXyXA, {from: accounts[4]});

		await expect(ControllerLBBkmgP.setOneSplit.call(addresslz5stWi, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressH38hVpF = accounts[4]
		const ControllerLBBkmgP = await Controller.new(addressH38hVpF, {from: accounts[3]});
		const addressjqSoxOA = accounts[4]
		const addressZ2fW4lb = accounts[4]
		const uintsrxddw9 = BigInt("388")
		const addresspPM1nWo = accounts[3]
		const addressbtkKOev = accounts[5]
		const addresspg0AV57 = accounts[3]
//		const addressOAD0ago = await ControllerLBBkmgP.setStrategy.call(addressZ2fW4lb, addressjqSoxOA, {from: accounts[3]});
//		const addressdTkSc33 = await ControllerLBBkmgP.withdraw.call(addresspPM1nWo, uintsrxddw9, {from: accounts[3]});
//		const addressm85myWW = await ControllerLBBkmgP.setOneSplit.call(addressbtkKOev, {from: accounts[1]});
//		const addressFLpHBp2 = await ControllerLBBkmgP.setOneSplit.call(addresspg0AV57, {from: accounts[1]});

		await expect(ControllerLBBkmgP.setStrategy.call(addressZ2fW4lb, addressjqSoxOA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressU7p5zcG = accounts[4]
		const Controllerphfz1S7 = await Controller.new(addressU7p5zcG, {from: accounts[0]});
		const addressoOBKJO0 = accounts[0]
		const uinticDBbuZ = BigInt("1009")
		const addresspbm58nT = accounts[4]
		const addressTDwkg3Y = accounts[4]
		const uintYtKCPLH = BigInt("1651")
//		const addressqtBcLuz = await Controllerphfz1S7.withdrawAll.call(addressoOBKJO0, {from: accounts[0]});
//		const addressVHvZS1G = await Controllerphfz1S7.inCaseTokensGetStuck.call(addresspbm58nT, uinticDBbuZ, {from: accounts[2]});
//		const addressBJ0qEEo = await Controllerphfz1S7.setRewards.call(addressTDwkg3Y, {from: accounts[4]});
//		const uintilvCqO4 = await Controllerphfz1S7.setSplit.call(uintYtKCPLH, {from: accounts[1]});

		await expect(Controllerphfz1S7.withdrawAll.call(addressoOBKJO0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMrZXNgZ = accounts[4]
		const Controllerphfz1S7 = await Controller.new(addressMrZXNgZ, {from: accounts[0]});
		const addressErsg68Y = accounts[4]
		const addressb4pNpv = accounts[4]
		const addressVdZzmj8 = accounts[2]
		const addressuK7tyXT = await Controllerphfz1S7.setVault.call(addressb4pNpv, addressErsg68Y, {from: accounts[0]});
//		const addressBJ0qEEo = await Controllerphfz1S7.setRewards.call(addressVdZzmj8, {from: accounts[4]});

		await expect(Controllerphfz1S7.setRewards.call(addressVdZzmj8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressTEZiUCL = accounts[4]
		const Controllerphfz1S7 = await Controller.new(addressTEZiUCL, {from: accounts[0]});
		const addressMOPgl2 = accounts[3]
		const addressRORDEjG = accounts[2]
		const addressv4v4OA = accounts[4]
		const addressOsVGdUO = accounts[3]
		const addressrZ0m32v = await Controllerphfz1S7.setConverter.call(addressv4v4OA, addressRORDEjG, addressMOPgl2, {from: accounts[0]});
//		const addressBJ0qEEo = await Controllerphfz1S7.setRewards.call(addressOsVGdUO, {from: accounts[4]});

		await expect(Controllerphfz1S7.setRewards.call(addressOsVGdUO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address4TszUn = accounts[4]
		const Controllerphfz1S7 = await Controller.new(address4TszUn, {from: accounts[0]});
		const addresswYsP16x = accounts[5]
		const addressxNJwrwo = "0x0000000000000000000000000000000000000001"
		const addressyoMQzQp = accounts[4]
		const addressALultBA = accounts[4]
		const addressfpexyW5 = await Controllerphfz1S7.setOneSplit.call(addresswYsP16x, {from: accounts[0]});
//		const addressg7PEgt = await Controllerphfz1S7.approveStrategy.call(addressyoMQzQp, addressxNJwrwo, {from: accounts[1]});
//		const uintSCOYcvg = await Controllerphfz1S7.balanceOf.call(addressALultBA, {from: accounts[5]});

		await expect(Controllerphfz1S7.approveStrategy.call(addressyoMQzQp, addressxNJwrwo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressOpWEkp6 = accounts[4]
		const Controllerphfz1S7 = await Controller.new(addressOpWEkp6, {from: accounts[0]});
		const addressV8ifPiK = accounts[2]
		const addressiIJng4I = "0x0000000000000000000000000000000000000001"
		const addressFxJytMg = accounts[4]
		const addressqvjzGRX = await Controllerphfz1S7.setRewards.call(addressV8ifPiK, {from: accounts[0]});
//		const addressg7PEgt = await Controllerphfz1S7.approveStrategy.call(addressFxJytMg, addressiIJng4I, {from: accounts[1]});

		await expect(Controllerphfz1S7.approveStrategy.call(addressFxJytMg, addressiIJng4I, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressoBzQTHv = accounts[4]
		const ControllerLdLEOnf = await Controller.new(addressoBzQTHv, {from: accounts[5]});
		const uintOVBqnao = BigInt("908")
		const addressPxN1ZIN = accounts[3]
		const addressxuBbR3Z = accounts[3]
		const addressXw6w3U7 = accounts[3]
//		const addresslZvK8mF = await ControllerLdLEOnf.yearn.call(addressxuBbR3Z, addressPxN1ZIN, uintOVBqnao, {from: accounts[5]});
//		const addressncy4yHk = await ControllerLdLEOnf.setOneSplit.call(addressXw6w3U7, {from: accounts[4]});

		await expect(ControllerLdLEOnf.yearn.call(addressxuBbR3Z, addressPxN1ZIN, uintOVBqnao, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressS0U1cH = accounts[4]
		const Controllerphfz1S7 = await Controller.new(addressS0U1cH, {from: accounts[0]});
		const addressF5nsZqw = accounts[1]
		const addresscu8sHV = accounts[0]
		const addresslm56qCn = "0x0000000000000000000000000000000000000001"
		const addresshU0gzVh = accounts[4]
//		const addresstfTDF0 = await Controllerphfz1S7.inCaseStrategyTokenGetStuck.call(addresscu8sHV, addressF5nsZqw, {from: accounts[0]});
//		const addressg7PEgt = await Controllerphfz1S7.approveStrategy.call(addresshU0gzVh, addresslm56qCn, {from: accounts[1]});

		await expect(Controllerphfz1S7.inCaseStrategyTokenGetStuck.call(addresscu8sHV, addressF5nsZqw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})