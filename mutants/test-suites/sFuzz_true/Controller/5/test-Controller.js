const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressTmO1ihq = "0x0000000000000000000000000000000000000001"
		const ControllerJsAFrBV = await Controller.new(addressTmO1ihq, {from: accounts[2]});
		const addressPf91wXB = accounts[3]
		const addressaSoxxOH = accounts[3]
		const addresssyTJhQs = accounts[4]
		const address4gJGQ6 = accounts[1]
		const addressxqznc1d = accounts[4]
		const addressDFwkUw7 = "0x0000000000000000000000000000000000000001"
//		const addressvTownWd = await ControllerJsAFrBV.setOneSplit.call(addressPf91wXB, {from: accounts[3]});
//		const addressTuNd5lY = await ControllerJsAFrBV.approveStrategy.call(addresssyTJhQs, addressaSoxxOH, {from: accounts[3]});
//		const addresslvGo9Ys = await ControllerJsAFrBV.setVault.call(addressxqznc1d, address4gJGQ6, {from: accounts[2]});
//		const addressNLwSghy = await ControllerJsAFrBV.withdrawAll.call(addressDFwkUw7, {from: accounts[2]});

		await expect(ControllerJsAFrBV.setOneSplit.call(addressPf91wXB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressYYKMjRY = "0x0000000000000000000000000000000000000001"
		const ControllerOflls9H = await Controller.new(addressYYKMjRY, {from: accounts[4]});
		const uintfE1xgiv = BigInt("1084")
		const addressjAg4Izz = accounts[1]
		const addressMfkffms = accounts[0]
		const address1Fjhq8 = accounts[4]
		const addressnXfpx3C = accounts[0]
		const addressnZswoxB = accounts[0]
//		const addressp5yHuF = await ControllerOflls9H.yearn.call(addressMfkffms, addressjAg4Izz, uintfE1xgiv, {from: accounts[1]});
//		const addresseTEXmwb = await ControllerOflls9H.setGovernance.call(address1Fjhq8, {from: accounts[2]});
//		const addressEUrLFwP = await ControllerOflls9H.setStrategy.call(addressnZswoxB, addressnXfpx3C, {from: accounts[5]});

		await expect(ControllerOflls9H.yearn.call(addressMfkffms, addressjAg4Izz, uintfE1xgiv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressdUWBL7a = accounts[2]
		const ControllerRIHy7U = await Controller.new(addressdUWBL7a, {from: accounts[3]});
		const addressunVkUK1 = accounts[2]
		const uintG5P08IG = BigInt("1906")
		const addresscDwxSs6 = accounts[5]
		const addressoecyNwv = "0x0000000000000000000000000000000000000001"
		const addressRgbq59Z = accounts[0]
		const addressslz1kp3 = accounts[0]
//		const addressFOka8pv = await ControllerRIHy7U.withdrawAll.call(addressunVkUK1, {from: "0x0000000000000000000000000000000000000001"});
//		const addressxojj6kD = await ControllerRIHy7U.withdraw.call(addresscDwxSs6, uintG5P08IG, {from: accounts[0]});
//		const addressuVWGfSr = await ControllerRIHy7U.setGovernance.call(addressoecyNwv, {from: accounts[2]});
//		const addressVqE0ciQ = await ControllerRIHy7U.setStrategist.call(addressRgbq59Z, {from: accounts[3]});
//		const addressioJBe6 = await ControllerRIHy7U.withdrawAll.call(addressslz1kp3, {from: accounts[3]});

		await expect(ControllerRIHy7U.withdrawAll.call(addressunVkUK1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresspnKcyt = accounts[5]
		const ControllerY4Rm5OD = await Controller.new(addresspnKcyt, {from: accounts[5]});
		const addressd64PAph = accounts[4]
		const uintLZWXyhO = BigInt("150")
		const addressCSB48TH = accounts[3]
		const uintDCBj7D = BigInt("10")
		const addressj1NkOan = accounts[4]
		const addressxcd6Xui = accounts[0]
		const uintzxECLZ6 = BigInt("70")
		const uintJGz3Mjb = BigInt("635")
		const addressBORBO0K = accounts[1]
		const addressGis1dOY = accounts[3]
//		const uintrDeOvU5 = await ControllerY4Rm5OD.balanceOf.call(addressd64PAph, {from: accounts[3]});
//		const addressAzFErHT = await ControllerY4Rm5OD.withdraw.call(addressCSB48TH, uintLZWXyhO, {from: accounts[5]});
//		const addressWyfAONP = await ControllerY4Rm5OD.earn.call(addressj1NkOan, uintDCBj7D, {from: accounts[1]});
//		const addressdg2yWFn = await ControllerY4Rm5OD.withdrawAll.call(addressxcd6Xui, {from: accounts[0]});
//		const uintJLeI278 = await ControllerY4Rm5OD.setSplit.call(uintzxECLZ6, {from: "0x0000000000000000000000000000000000000001"});
//		const uintuJFGuL = await ControllerY4Rm5OD.getExpectedReturn.call(addressGis1dOY, addressBORBO0K, uintJGz3Mjb, {from: accounts[2]});

		await expect(ControllerY4Rm5OD.balanceOf.call(addressd64PAph, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZCmoNmj = accounts[3]
		const Controllerjo7H6qm = await Controller.new(addressZCmoNmj, {from: accounts[1]});
		const uinttmLaRis = BigInt("423")
		const addresspCZKGW = accounts[1]
		const addressRZ0HrYP = accounts[3]
		const addressB4NKKW6 = accounts[3]
		const addressPNbW5Sy = accounts[0]
		const addressCJykrGN = accounts[1]
		const addressheaQ5RC = "0x0000000000000000000000000000000000000001"
		const addressUURZ3zt = "0x0000000000000000000000000000000000000001"
//		const addresshMSvoSd = await Controllerjo7H6qm.earn.call(addresspCZKGW, uinttmLaRis, {from: accounts[1]});
//		const addresscEhTxri = await Controllerjo7H6qm.setVault.call(addressB4NKKW6, addressRZ0HrYP, {from: accounts[4]});
//		const addressp7sSWBj = await Controllerjo7H6qm.setRewards.call(addressPNbW5Sy, {from: accounts[2]});
//		const addressf7I2jfl = await Controllerjo7H6qm.setGovernance.call(addressCJykrGN, {from: accounts[0]});
//		const addresskAzxAvS = await Controllerjo7H6qm.setStrategy.call(addressUURZ3zt, addressheaQ5RC, {from: accounts[0]});

		await expect(Controllerjo7H6qm.earn.call(addresspCZKGW, uinttmLaRis, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresst69OSl = accounts[5]
		const ControllerolwSOfh = await Controller.new(addresst69OSl, {from: accounts[0]});
		const addressJSo9heF = accounts[4]
		const addressoYhHOq = accounts[5]
		const addresskWHadtf = accounts[0]
		const addressaJFraj = accounts[0]
		const addressUfZoCMo = accounts[4]
		const addressRQZvma = accounts[2]
		const addressrLTXqV = accounts[1]
		const addressLBjI6Av = accounts[0]
		const addressVMOiEmC = accounts[4]
		const addressJGlLxrc = accounts[3]
//		const address2wthZZ = await ControllerolwSOfh.inCaseStrategyTokenGetStuck.call(addressoYhHOq, addressJSo9heF, {from: accounts[3]});
//		const addressX4kkJKW = await ControllerolwSOfh.approveStrategy.call(addressaJFraj, addresskWHadtf, {from: accounts[0]});
//		const address5DaPEC = await ControllerolwSOfh.setConverter.call(addressrLTXqV, addressRQZvma, addressUfZoCMo, {from: accounts[3]});
//		const addressbNieTrn = await ControllerolwSOfh.approveStrategy.call(addressVMOiEmC, addressLBjI6Av, {from: accounts[2]});
//		const addressEPWPspJ = await ControllerolwSOfh.setOneSplit.call(addressJGlLxrc, {from: accounts[0]});

		await expect(ControllerolwSOfh.inCaseStrategyTokenGetStuck.call(addressoYhHOq, addressJSo9heF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressvTchMXP = accounts[4]
		const Controller34GZg2 = await Controller.new(addressvTchMXP, {from: accounts[1]});
		const addressT6xVQ2m = accounts[1]
		const addressyar9L5h = accounts[0]
		const addressPrUetJx = accounts[2]
		const addressxODPrlC = accounts[5]
//		const addressZX2U0fu = await Controller34GZg2.approveStrategy.call(addressyar9L5h, addressT6xVQ2m, {from: accounts[0]});
//		const addresshirKWIv = await Controller34GZg2.setStrategy.call(addressxODPrlC, addressPrUetJx, {from: accounts[2]});

		await expect(Controller34GZg2.approveStrategy.call(addressyar9L5h, addressT6xVQ2m, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressogKbEGE = accounts[3]
		const ControllerWFPzuq = await Controller.new(addressogKbEGE, {from: accounts[2]});
		const addressG4vru2o = "0x0000000000000000000000000000000000000001"
		const addresswTkBllh = accounts[0]
		const addressRVKv4R9 = accounts[3]
		const uintShhUufs = BigInt("842")
		const addressUteNBQ4 = accounts[1]
		const addressZeVONuJ = "0x0000000000000000000000000000000000000001"
		const addresszl2Ja05 = "0x0000000000000000000000000000000000000001"
		const addressUdWk4t8 = accounts[4]
		const addressjvs7ELx = accounts[2]
		const addressGgHF07m = accounts[2]
//		const addresseZEI6Xr = await ControllerWFPzuq.revokeStrategy.call(addresswTkBllh, addressG4vru2o, {from: accounts[0]});
//		const addressb4pfnM7 = await ControllerWFPzuq.setGovernance.call(addressRVKv4R9, {from: accounts[4]});
//		const uintorTiJJ = await ControllerWFPzuq.setSplit.call(uintShhUufs, {from: accounts[1]});
//		const addressvOozkb1 = await ControllerWFPzuq.setConverter.call(addresszl2Ja05, addressZeVONuJ, addressUteNBQ4, {from: accounts[2]});
//		const addressZ0HEvcI = await ControllerWFPzuq.revokeStrategy.call(addressjvs7ELx, addressUdWk4t8, {from: accounts[2]});
//		const addressNpGn0JE = await ControllerWFPzuq.withdrawAll.call(addressGgHF07m, {from: accounts[1]});

		await expect(ControllerWFPzuq.revokeStrategy.call(addresswTkBllh, addressG4vru2o, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressDBs6hgz = accounts[4]
		const Controller34GZg2 = await Controller.new(addressDBs6hgz, {from: accounts[1]});
		const uintXBkvrA6 = BigInt("1106")
		const addressQGHrlRQ = accounts[3]
		const addressmQVVh59 = accounts[1]
		const addressjLBk1G3 = accounts[0]
		const addressNirkZoL = "0x0000000000000000000000000000000000000001"
		const addressflVP4Vd = accounts[1]
		const addressT4D9fb5 = accounts[2]
		const addressPOCW25z = accounts[6]
		const addressjuTOguG = "0x0000000000000000000000000000000000000001"
		const addressN1Mm2UG = accounts[0]
//		const addresswgMJAgy = await Controller34GZg2.inCaseTokensGetStuck.call(addressQGHrlRQ, uintXBkvrA6, {from: accounts[0]});
//		const addressZX2U0fu = await Controller34GZg2.approveStrategy.call(addressjLBk1G3, addressmQVVh59, {from: accounts[0]});
//		const addressIDpqYoJ = await Controller34GZg2.setVault.call(addressflVP4Vd, addressNirkZoL, {from: accounts[0]});
//		const addresshirKWIv = await Controller34GZg2.setStrategy.call(addressPOCW25z, addressT4D9fb5, {from: accounts[2]});
//		const addresscqrTuVg = await Controller34GZg2.setStrategy.call(addressN1Mm2UG, addressjuTOguG, {from: accounts[5]});

		await expect(Controller34GZg2.inCaseTokensGetStuck.call(addressQGHrlRQ, uintXBkvrA6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresseogpRC = accounts[3]
		const ControllerWFPzuq = await Controller.new(addresseogpRC, {from: accounts[2]});
		const uintOnukwUA = BigInt("81")
		const addressDqGw3dN = "0x0000000000000000000000000000000000000001"
		const addresseI3Yc0z = accounts[0]
		const address3438MZ = accounts[3]
		const uintYnHDYUf = BigInt("842")
		const addresskUSiU4 = accounts[1]
		const addressF1NdGrX = "0x0000000000000000000000000000000000000001"
		const addressY42s6jE = "0x0000000000000000000000000000000000000001"
		const addressgbYE9n5 = accounts[4]
		const addressa74uwHU = accounts[2]
		const addressX38zHDp = accounts[2]
		const addressMSf13Wg = accounts[2]
		const addressZIhRqtr = accounts[2]
//		const uinti53RkAZ = await ControllerWFPzuq.setSplit.call(uintOnukwUA, {from: accounts[4]});
//		const addresseZEI6Xr = await ControllerWFPzuq.revokeStrategy.call(addresseI3Yc0z, addressDqGw3dN, {from: accounts[0]});
//		const addressb4pfnM7 = await ControllerWFPzuq.setGovernance.call(address3438MZ, {from: accounts[4]});
//		const uintorTiJJ = await ControllerWFPzuq.setSplit.call(uintYnHDYUf, {from: accounts[1]});
//		const addressvOozkb1 = await ControllerWFPzuq.setConverter.call(addressY42s6jE, addressF1NdGrX, addresskUSiU4, {from: accounts[2]});
//		const addressZ0HEvcI = await ControllerWFPzuq.revokeStrategy.call(addressa74uwHU, addressgbYE9n5, {from: accounts[2]});
//		const addressOXpyPo1 = await ControllerWFPzuq.inCaseStrategyTokenGetStuck.call(addressMSf13Wg, addressX38zHDp, {from: accounts[3]});
//		const addressNpGn0JE = await ControllerWFPzuq.withdrawAll.call(addressZIhRqtr, {from: accounts[1]});

		await expect(ControllerWFPzuq.setSplit.call(uintOnukwUA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressrzWY7BI = accounts[4]
		const Controller34GZg2 = await Controller.new(addressrzWY7BI, {from: accounts[1]});
		const addressN9dYuZS = accounts[2]
		const addressqlRjmf1 = accounts[3]
		const addressapWoyE = accounts[1]
		const addressaJE1iM = accounts[2]
		const addressqimtHAl = accounts[0]
		const addressislLQ57 = accounts[2]
		const addressxkaFyO8 = accounts[5]
//		const addressx8UBmbi = await Controller34GZg2.setConverter.call(addressapWoyE, addressqlRjmf1, addressN9dYuZS, {from: accounts[3]});
//		const addressZX2U0fu = await Controller34GZg2.approveStrategy.call(addressqimtHAl, addressaJE1iM, {from: accounts[0]});
//		const addresshirKWIv = await Controller34GZg2.setStrategy.call(addressxkaFyO8, addressislLQ57, {from: accounts[2]});

		await expect(Controller34GZg2.setConverter.call(addressapWoyE, addressqlRjmf1, addressN9dYuZS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskCWGBaq = accounts[1]
		const ControllerI5OX1CK = await Controller.new(addresskCWGBaq, {from: accounts[1]});
		const addressrMjFGYy = accounts[2]
//		const addressQArKqTT = await ControllerI5OX1CK.setStrategist.call(addressrMjFGYy, {from: accounts[3]});

		await expect(ControllerI5OX1CK.setStrategist.call(addressrMjFGYy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressdLyLPSH = accounts[4]
		const Controller34GZg2 = await Controller.new(addressdLyLPSH, {from: accounts[1]});
		const addressTejtcOW = accounts[2]
		const addressTnAiqpm = accounts[5]
		const addressE4ktjZ = accounts[0]
//		const addresshirKWIv = await Controller34GZg2.setStrategy.call(addressTnAiqpm, addressTejtcOW, {from: accounts[2]});
//		const uintYeRodRZ = await Controller34GZg2.balanceOf.call(addressE4ktjZ, {from: accounts[0]});

		await expect(Controller34GZg2.setStrategy.call(addressTnAiqpm, addressTejtcOW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressPyvGO4f = accounts[1]
		const ControllerI5OX1CK = await Controller.new(addressPyvGO4f, {from: accounts[1]});
		const uintGMnxoYC = BigInt("834")
		const addressbkJcfei = accounts[0]
		const addressjD76Mv8 = "0x0000000000000000000000000000000000000001"
		const address2LxW3o = accounts[0]
		const addressGXL9XzR = accounts[4]
//		const addresskD8NiIS = await ControllerI5OX1CK.withdraw.call(addressbkJcfei, uintGMnxoYC, {from: accounts[3]});
//		const addresswFYRTvX = await ControllerI5OX1CK.inCaseStrategyTokenGetStuck.call(address2LxW3o, addressjD76Mv8, {from: accounts[3]});
//		const addressQArKqTT = await ControllerI5OX1CK.setStrategist.call(addressGXL9XzR, {from: accounts[3]});

		await expect(ControllerI5OX1CK.withdraw.call(addressbkJcfei, uintGMnxoYC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfWKs5GQ = accounts[3]
		const ControllerHDKzKI = await Controller.new(addressfWKs5GQ, {from: accounts[2]});
		const addressYacfSoc = accounts[2]
		const addressB6XDouo = accounts[4]
		const uintEe7fQpt = BigInt("262")
		const addressTUlSzPn = accounts[4]
		const addressexRntVC = accounts[2]
		const addressKnsqiHz = "0x0000000000000000000000000000000000000001"
		const uintdqDfT9 = BigInt("961")
		const addresscFOr3x = accounts[3]
		const addresshvn3Pz = await ControllerHDKzKI.revokeStrategy.call(addressB6XDouo, addressYacfSoc, {from: accounts[2]});
//		const uintvCryQtq = await ControllerHDKzKI.getExpectedReturn.call(addressexRntVC, addressTUlSzPn, uintEe7fQpt, {from: accounts[2]});
//		const addresseKazqY5 = await ControllerHDKzKI.setRewards.call(addressKnsqiHz, {from: accounts[3]});
//		const uintrxyu88B = await ControllerHDKzKI.setSplit.call(uintdqDfT9, {from: accounts[5]});
//		const uintfFZue6O = await ControllerHDKzKI.balanceOf.call(addresscFOr3x, {from: accounts[3]});

		await expect(ControllerHDKzKI.getExpectedReturn.call(addressexRntVC, addressTUlSzPn, uintEe7fQpt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressIqjvb0C = accounts[4]
		const Controller34GZg2 = await Controller.new(addressIqjvb0C, {from: accounts[1]});
		const addressfkiwEQq = accounts[0]
		const addressHEQr27l = accounts[1]
		const addressDgIe6ZO = "0x0000000000000000000000000000000000000000"
//		const addressRFK5tHN = await Controller34GZg2.withdrawAll.call(addressfkiwEQq, {from: accounts[1]});
//		const addressZX2U0fu = await Controller34GZg2.approveStrategy.call(addressDgIe6ZO, addressHEQr27l, {from: accounts[0]});

		await expect(Controller34GZg2.withdrawAll.call(addressfkiwEQq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressaCz2cho = accounts[4]
		const Controller34GZg2 = await Controller.new(addressaCz2cho, {from: accounts[1]});
		const addressIldcKI = accounts[1]
		const addressuoqGMOl = accounts[1]
		const addressdBIsxFl = accounts[4]
		const addresscUeP7Sf = await Controller34GZg2.setOneSplit.call(addressIldcKI, {from: accounts[1]});
//		const addressZX2U0fu = await Controller34GZg2.approveStrategy.call(addressdBIsxFl, addressuoqGMOl, {from: accounts[0]});

		await expect(Controller34GZg2.approveStrategy.call(addressdBIsxFl, addressuoqGMOl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressaW47Z46 = accounts[1]
		const ControllerI5OX1CK = await Controller.new(addressaW47Z46, {from: accounts[1]});
		const addressGVC85f8 = accounts[1]
		const addressCihCnkD = accounts[1]
		const addressd12ZJ64 = accounts[0]
		const uintMxJwYLz = BigInt("834")
		const addressKAQ5HX7 = accounts[0]
		const addressNToZOTK = "0x0000000000000000000000000000000000000000"
		const addressFlDtJCP = accounts[0]
		const addressHMJsoho = accounts[4]
//		const addressYTlgvx = await ControllerI5OX1CK.inCaseStrategyTokenGetStuck.call(addressCihCnkD, addressGVC85f8, {from: accounts[1]});
//		const addressOypr0VH = await ControllerI5OX1CK.setGovernance.call(addressd12ZJ64, {from: accounts[3]});
//		const addresskD8NiIS = await ControllerI5OX1CK.withdraw.call(addressKAQ5HX7, uintMxJwYLz, {from: accounts[3]});
//		const addresswFYRTvX = await ControllerI5OX1CK.inCaseStrategyTokenGetStuck.call(addressFlDtJCP, addressNToZOTK, {from: accounts[3]});
//		const addressQArKqTT = await ControllerI5OX1CK.setStrategist.call(addressHMJsoho, {from: accounts[3]});

		await expect(ControllerI5OX1CK.inCaseStrategyTokenGetStuck.call(addressCihCnkD, addressGVC85f8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVzPKEol = accounts[0]
		const ControllerCrNPjC4 = await Controller.new(addressVzPKEol, {from: accounts[0]});
		const addressmNVC3SW = "0x0000000000000000000000000000000000000001"
		const uintf0BPFPk = BigInt("967")
		const addressWtPHQ9g = accounts[0]
//		const addressDN1g5T9 = await ControllerCrNPjC4.setGovernance.call(addressmNVC3SW, {from: accounts[2]});
//		const uintQ63oSru = await ControllerCrNPjC4.setSplit.call(uintf0BPFPk, {from: "0x0000000000000000000000000000000000000001"});
//		const uintoUIdzLV = await ControllerCrNPjC4.balanceOf.call(addressWtPHQ9g, {from: accounts[5]});

		await expect(ControllerCrNPjC4.setGovernance.call(addressmNVC3SW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressFcp4ILU = accounts[1]
		const Controllerpbu9vNB = await Controller.new(addressFcp4ILU, {from: accounts[3]});
		const addressl5V9WMw = accounts[2]
		const addressofX4kp6 = accounts[3]
		const addressbGQQdRg = accounts[0]
		const addressNed6KjS = accounts[4]
		const addressArwZxOb = accounts[5]
		const addressuRFAa6B = accounts[0]
		const addressCvtXUlv = accounts[2]
		const addresswjuJttH = accounts[5]
		const addressXfUTItc = accounts[3]
		const addressmO0NtC8 = "0x0000000000000000000000000000000000000001"
		const addressS2UGLB = accounts[3]
		const addressnK3kSor = await Controllerpbu9vNB.setVault.call(addressofX4kp6, addressl5V9WMw, {from: accounts[3]});
//		const addressI0MDtFq = await Controllerpbu9vNB.inCaseStrategyTokenGetStuck.call(addressNed6KjS, addressbGQQdRg, {from: accounts[0]});
//		const addresscnXFZzT = await Controllerpbu9vNB.approveStrategy.call(addressuRFAa6B, addressArwZxOb, {from: accounts[1]});
//		const addresskb9LIQA = await Controllerpbu9vNB.setStrategist.call(addressCvtXUlv, {from: accounts[0]});
//		const addressT2Rlq1 = await Controllerpbu9vNB.setStrategy.call(addressXfUTItc, addresswjuJttH, {from: accounts[0]});
//		const addressryqKnJH = await Controllerpbu9vNB.setVault.call(addressS2UGLB, addressmO0NtC8, {from: accounts[3]});

		await expect(Controllerpbu9vNB.inCaseStrategyTokenGetStuck.call(addressNed6KjS, addressbGQQdRg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressnYrpM1k = accounts[0]
		const ControllerCrNPjC4 = await Controller.new(addressnYrpM1k, {from: accounts[0]});
		const addressfkjy5U = accounts[3]
		const addressOKHxTJg = accounts[4]
		const addresskrmi6W = "0x0000000000000000000000000000000000000000"
		const addressMDJjD1 = accounts[4]
		const addressxcx328N = accounts[0]
//		const addressE8tzQD = await ControllerCrNPjC4.setStrategy.call(addressOKHxTJg, addressfkjy5U, {from: accounts[0]});
//		const addressDN1g5T9 = await ControllerCrNPjC4.setGovernance.call(addresskrmi6W, {from: accounts[2]});
//		const uintbzoHIME = await ControllerCrNPjC4.balanceOf.call(addressMDJjD1, {from: accounts[0]});
//		const uintoUIdzLV = await ControllerCrNPjC4.balanceOf.call(addressxcx328N, {from: accounts[5]});

		await expect(ControllerCrNPjC4.setStrategy.call(addressOKHxTJg, addressfkjy5U, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresszUXCg3A = accounts[3]
		const ControllerHDKzKI = await Controller.new(addresszUXCg3A, {from: accounts[2]});
		const addressvexMjMx = "0x0000000000000000000000000000000000000001"
		const addressJjktz9e = accounts[2]
		const uintZFPjgpB = BigInt("1015")
		const addressr3FPl1f = await ControllerHDKzKI.approveStrategy.call(addressJjktz9e, addressvexMjMx, {from: accounts[2]});
//		const uintrxyu88B = await ControllerHDKzKI.setSplit.call(uintZFPjgpB, {from: accounts[5]});

		await expect(ControllerHDKzKI.setSplit.call(uintZFPjgpB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressbtnFcHr = accounts[2]
		const ControllerVAwkkqn = await Controller.new(addressbtnFcHr, {from: accounts[2]});
		const addressex3ix7q = accounts[1]
		const addressnTqcRMD = accounts[0]
		const addresspeq4qcA = accounts[5]
		const addressCKqRHig = accounts[1]
//		const addresssEb9wTz = await ControllerVAwkkqn.setRewards.call(addressex3ix7q, {from: accounts[0]});
//		const addresszTsxsoU = await ControllerVAwkkqn.setStrategy.call(addresspeq4qcA, addressnTqcRMD, {from: accounts[1]});
//		const addressT98exoA = await ControllerVAwkkqn.withdrawAll.call(addressCKqRHig, {from: accounts[3]});

		await expect(ControllerVAwkkqn.setRewards.call(addressex3ix7q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresseK9oGx = accounts[1]
		const ControllerI5OX1CK = await Controller.new(addresseK9oGx, {from: accounts[1]});
		const uintzqSuUkK = BigInt("187")
		const uintplF2hum = BigInt("861")
		const addressQB3oa6 = accounts[0]
		const uinttFwM27 = await ControllerI5OX1CK.setSplit.call(uintzqSuUkK, {from: accounts[1]});
//		const addresskD8NiIS = await ControllerI5OX1CK.withdraw.call(addressQB3oa6, uintplF2hum, {from: accounts[3]});

		await expect(ControllerI5OX1CK.withdraw.call(addressQB3oa6, uintplF2hum, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressAsGm9OW = accounts[1]
		const ControllerI5OX1CK = await Controller.new(addressAsGm9OW, {from: accounts[1]});
		const addressVBVucN = accounts[1]
		const uints3TcXNH = BigInt("1407")
		const uintiMCqnE = BigInt("834")
		const addressuaYyjxq = accounts[0]
		const addressk72OEDg = await ControllerI5OX1CK.setGovernance.call(addressVBVucN, {from: accounts[1]});
//		const uintfZjdbim = await ControllerI5OX1CK.setSplit.call(uints3TcXNH, {from: accounts[2]});
//		const addresskD8NiIS = await ControllerI5OX1CK.withdraw.call(addressuaYyjxq, uintiMCqnE, {from: accounts[3]});

		await expect(ControllerI5OX1CK.setSplit.call(uints3TcXNH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZ0MGjdc = accounts[1]
		const ControllerI5OX1CK = await Controller.new(addressZ0MGjdc, {from: accounts[1]});
		const uintpKUB8YR = BigInt("638")
		const uintWPf2I0 = BigInt("261")
		const addresszegm7CB = accounts[0]
		const addressid9OyMl = accounts[4]
		const addresst1sYZqV = accounts[0]
		const uintVYO40Wr = BigInt("834")
		const addresslq7v2E4 = accounts[0]
		const uint0l5ENT = await ControllerI5OX1CK.setSplit.call(uintpKUB8YR, {from: accounts[1]});
//		const addressKukyp6R = await ControllerI5OX1CK.yearn.call(addressid9OyMl, addresszegm7CB, uintWPf2I0, {from: accounts[1]});
//		const uintqjtMRTH = await ControllerI5OX1CK.balanceOf.call(addresst1sYZqV, {from: accounts[3]});
//		const addresskD8NiIS = await ControllerI5OX1CK.withdraw.call(addresslq7v2E4, uintVYO40Wr, {from: accounts[3]});

		await expect(ControllerI5OX1CK.yearn.call(addressid9OyMl, addresszegm7CB, uintWPf2I0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressplz09w = accounts[4]
		const ControllerbqdKfIW = await Controller.new(addressplz09w, {from: accounts[4]});
		const addressxMPmoNj = accounts[4]
		const addressjMr4PC8 = accounts[4]
		const addressQFOJRs7 = accounts[1]
		const addresstWWErZv = accounts[3]
		const addressH8l0o7z = accounts[3]
		const addressAQnbbgM = await ControllerbqdKfIW.setConverter.call(addressQFOJRs7, addressjMr4PC8, addressxMPmoNj, {from: accounts[4]});
//		const addressq6zYpR = await ControllerbqdKfIW.setStrategist.call(addresstWWErZv, {from: accounts[1]});
//		const addressUHKnZRO = await ControllerbqdKfIW.setGovernance.call(addressH8l0o7z, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerbqdKfIW.setStrategist.call(addresstWWErZv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressveQ2egX = accounts[0]
		const ControllerCrNPjC4 = await Controller.new(addressveQ2egX, {from: accounts[0]});
		const uintQLjJUH4 = BigInt("1462")
		const addressy1pBUGF = "0x0000000000000000000000000000000000000001"
		const addresscXuiwqc = "0x0000000000000000000000000000000000000002"
//		const addressKsooUJK = await ControllerCrNPjC4.inCaseTokensGetStuck.call(addressy1pBUGF, uintQLjJUH4, {from: accounts[0]});
//		const addresse5Cf0Y = await ControllerCrNPjC4.setRewards.call(addresscXuiwqc, {from: accounts[1]});

		await expect(ControllerCrNPjC4.inCaseTokensGetStuck.call(addressy1pBUGF, uintQLjJUH4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressNCZPf6S = accounts[0]
		const ControllerI0UhjFO = await Controller.new(addressNCZPf6S, {from: "0x0000000000000000000000000000000000000001"});
		const uintUQFGUaP = BigInt("892")
		const addressmzFpHHM = accounts[3]
		const addressyHheQRY = accounts[1]
		const uintpWtTN5j = BigInt("617")
		const addressCwzouIi = accounts[5]
		const addressNWhamcc = accounts[1]
		const uintulNy2j = await ControllerI0UhjFO.getExpectedReturn.call(addressyHheQRY, addressmzFpHHM, uintUQFGUaP, {from: accounts[5]});
		const uintsYUz9nP = await ControllerI0UhjFO.getExpectedReturn.call(addressNWhamcc, addressCwzouIi, uintpWtTN5j, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Controller', async () => {
		const addressa4QQKU = accounts[1]
		const ControllerI5OX1CK = await Controller.new(addressa4QQKU, {from: accounts[1]});
		const addressDnC6Cjr = accounts[1]
		const addressb0i5R1Z = accounts[3]
		const addressRSI7API = await ControllerI5OX1CK.setStrategist.call(addressDnC6Cjr, {from: accounts[1]});
//		const addressQArKqTT = await ControllerI5OX1CK.setStrategist.call(addressb0i5R1Z, {from: accounts[3]});

		await expect(ControllerI5OX1CK.setStrategist.call(addressb0i5R1Z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressagIlpG2 = accounts[1]
		const ControllerI5OX1CK = await Controller.new(addressagIlpG2, {from: accounts[1]});
		const addressElJ9b9S = accounts[1]
		const uint9bXjJa = BigInt("834")
		const addressHuC53jc = accounts[1]
		const addresskrWk0nh = await ControllerI5OX1CK.setRewards.call(addressElJ9b9S, {from: accounts[1]});
//		const addresskD8NiIS = await ControllerI5OX1CK.withdraw.call(addressHuC53jc, uint9bXjJa, {from: accounts[3]});

		await expect(ControllerI5OX1CK.withdraw.call(addressHuC53jc, uint9bXjJa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})