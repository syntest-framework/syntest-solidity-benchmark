const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressiZkM2C = accounts[4]
		const ControllerQwjY5cP = await Controller.new(addressiZkM2C, {from: accounts[2]});
		const addressWZZEN1t = accounts[3]
		const addressnbXpMlu = accounts[3]
		const addressaP3oak = accounts[0]
		const addressO7hyoW = accounts[1]
		const addressmu15Dux = accounts[5]
		const addressURJYws1 = "0x0000000000000000000000000000000000000001"
		const address6rPf4K = accounts[1]
		const addressORgPQxZ = await ControllerQwjY5cP.revokeStrategy.call(addressnbXpMlu, addressWZZEN1t, {from: accounts[4]});
		const addressA0yMuFM = await ControllerQwjY5cP.setVault.call(addressO7hyoW, addressaP3oak, {from: "0x0000000000000000000000000000000000000001"});
		const addresse2Do9do = await ControllerQwjY5cP.setStrategist.call(addressmu15Dux, {from: accounts[2]});
		const addressQjM62Fu = await ControllerQwjY5cP.setOneSplit.call(addressURJYws1, {from: accounts[4]});
		const uintUiXSI9w = await ControllerQwjY5cP.balanceOf.call(address6rPf4K, {from: accounts[0]});

		await expect(ControllerQwjY5cP.revokeStrategy.call(addressnbXpMlu, addressWZZEN1t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressyqcW455 = accounts[3]
		const ControllerX9V37j = await Controller.new(addressyqcW455, {from: accounts[4]});
		const uintlihlcM1 = BigInt("295")
		const uintRPPineK = BigInt("43")
		const addressRpzgfNm = accounts[2]
		const addressX067C6T = accounts[2]
		const addressIFK1Hx = accounts[2]
		const addressYby8RF = accounts[1]
		const addressnMusBOU = accounts[1]
		const uintFP2vmYP = await ControllerX9V37j.setSplit.call(uintlihlcM1, {from: accounts[4]});
		const addressKoiy3dT = await ControllerX9V37j.yearn.call(addressX067C6T, addressRpzgfNm, uintRPPineK, {from: accounts[3]});
		const addressx6biokL = await ControllerX9V37j.revokeStrategy.call(addressYby8RF, addressIFK1Hx, {from: accounts[3]});
		const addresskkZZF1 = await ControllerX9V37j.setRewards.call(addressnMusBOU, {from: accounts[1]});

		await expect(ControllerX9V37j.yearn.call(addressX067C6T, addressRpzgfNm, uintRPPineK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressqr6UTLe = accounts[1]
		const ControllerC1fiARS = await Controller.new(addressqr6UTLe, {from: accounts[1]});
		const addresse99cPyf = accounts[2]
		const uintVPTgLV1 = BigInt("680")
		const addressxqiuOKw = accounts[2]
		const addressXILY8L3 = "0x0000000000000000000000000000000000000001"
		const addresss1TcQ98 = accounts[3]
		const addressdhG90vt = accounts[5]
		const addressWNVdlJM = accounts[1]
		const addressy33VAoM = accounts[1]
		const addressMOQ5i5 = accounts[0]
		const addressUxVaikK = await ControllerC1fiARS.setOneSplit.call(addresse99cPyf, {from: accounts[1]});
		const addressszbhhwD = await ControllerC1fiARS.inCaseTokensGetStuck.call(addressxqiuOKw, uintVPTgLV1, {from: accounts[2]});
		const addressMOJMQxr = await ControllerC1fiARS.setGovernance.call(addressXILY8L3, {from: accounts[3]});
		const addressoUoB0Pe = await ControllerC1fiARS.inCaseStrategyTokenGetStuck.call(addressdhG90vt, addresss1TcQ98, {from: accounts[1]});
		const addressRjwlNXc = await ControllerC1fiARS.setConverter.call(addressMOQ5i5, addressy33VAoM, addressWNVdlJM, {from: accounts[2]});

		await expect(ControllerC1fiARS.inCaseTokensGetStuck.call(addressxqiuOKw, uintVPTgLV1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressDKRJTZ8 = "0x0000000000000000000000000000000000000001"
		const ControllerHUiPL4b = await Controller.new(addressDKRJTZ8, {from: accounts[3]});
		const addressvEVvPF4 = "0x0000000000000000000000000000000000000001"
		const uintwl8LGPH = BigInt("1573")
		const addressScm0PJN = accounts[2]
		const addressWPdhPf = accounts[0]
		const addressv3Aqy7 = accounts[2]
		const addressWqsq8Ay = accounts[4]
		const addressMekRMx7 = "0x0000000000000000000000000000000000000001"
		const addressskbwb7T = await ControllerHUiPL4b.setStrategist.call(addressvEVvPF4, {from: accounts[3]});
		const addressorKmV1b = await ControllerHUiPL4b.yearn.call(addressWPdhPf, addressScm0PJN, uintwl8LGPH, {from: accounts[2]});
		const addressuXssOif = await ControllerHUiPL4b.inCaseStrategyTokenGetStuck.call(addressWqsq8Ay, addressv3Aqy7, {from: accounts[2]});
		const uintz6Pvppb = await ControllerHUiPL4b.balanceOf.call(addressMekRMx7, {from: accounts[0]});

		await expect(ControllerHUiPL4b.yearn.call(addressWPdhPf, addressScm0PJN, uintwl8LGPH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZfMWJ4g = "0x0000000000000000000000000000000000000001"
		const ControllerluvHfzR = await Controller.new(addressZfMWJ4g, {from: "0x0000000000000000000000000000000000000001"});
		const addressxNZU8m2 = accounts[3]
		const addressovc35lJ = accounts[5]
		const uintmOA9glM = BigInt("891")
		const addresszgHHyix = accounts[5]
		const addressaPhpj65 = accounts[4]
		const addressXKWdqx0 = accounts[0]
		const addressewvTZMw = accounts[1]
		const addressRp1FaFO = accounts[2]
		const addressAZvIhUU = await ControllerluvHfzR.setVault.call(addressovc35lJ, addressxNZU8m2, {from: "0x0000000000000000000000000000000000000001"});
		const addresssCfSzVr = await ControllerluvHfzR.yearn.call(addressaPhpj65, addresszgHHyix, uintmOA9glM, {from: accounts[1]});
		const addressUWKq0h = await ControllerluvHfzR.inCaseStrategyTokenGetStuck.call(addressewvTZMw, addressXKWdqx0, {from: accounts[3]});
		const addresszkfE6pV = await ControllerluvHfzR.setStrategist.call(addressRp1FaFO, {from: accounts[1]});
	});

	it('test for Controller', async () => {
		const addressNzXtH7Z = accounts[0]
		const Controllerpqe8SD4 = await Controller.new(addressNzXtH7Z, {from: accounts[2]});
		const addresswjjgrXW = accounts[2]
		const addresszOV5QtS = accounts[5]
		const uintRoZFyP = BigInt("1790")
		const addressff07UCH = accounts[5]
		const uintqtEk0FE = BigInt("618")
		const addressGLgybsT = accounts[4]
		const addressZecBskJ = accounts[1]
		const addressmrFaDT9 = accounts[1]
		const addresspr6Co90 = accounts[1]
		const addressWmeVm04 = await Controllerpqe8SD4.setGovernance.call(addresswjjgrXW, {from: accounts[0]});
		const addressYqOdzkP = await Controllerpqe8SD4.setGovernance.call(addresszOV5QtS, {from: accounts[4]});
		const addressAITazKK = await Controllerpqe8SD4.earn.call(addressff07UCH, uintRoZFyP, {from: accounts[3]});
		const addressrbTth6w = await Controllerpqe8SD4.yearn.call(addressZecBskJ, addressGLgybsT, uintqtEk0FE, {from: accounts[2]});
		const addressmTtmwHT = await Controllerpqe8SD4.approveStrategy.call(addresspr6Co90, addressmrFaDT9, {from: accounts[0]});

		await expect(Controllerpqe8SD4.setGovernance.call(addresswjjgrXW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJKjhff6 = accounts[3]
		const ControllerX9V37j = await Controller.new(addressJKjhff6, {from: accounts[4]});
		const addressvOAyiGg = accounts[1]
		const addressvCnJcwX = accounts[0]
		const addressup7KOpP = "0x0000000000000000000000000000000000000001"
		const uintVbtw92 = BigInt("295")
		const uintknsF4Ar = BigInt("43")
		const addressqahMLVE = accounts[3]
		const addresshwcUTGF = accounts[2]
		const addressBm8wgtg = accounts[2]
		const addresspxqphlB = accounts[1]
		const addressR99pbyN = accounts[1]
		const addressYjnjcNI = await ControllerX9V37j.setConverter.call(addressup7KOpP, addressvCnJcwX, addressvOAyiGg, {from: accounts[0]});
		const uintFP2vmYP = await ControllerX9V37j.setSplit.call(uintVbtw92, {from: accounts[4]});
		const addressKoiy3dT = await ControllerX9V37j.yearn.call(addresshwcUTGF, addressqahMLVE, uintknsF4Ar, {from: accounts[3]});
		const addressx6biokL = await ControllerX9V37j.revokeStrategy.call(addresspxqphlB, addressBm8wgtg, {from: accounts[3]});
		const addresskkZZF1 = await ControllerX9V37j.setRewards.call(addressR99pbyN, {from: accounts[1]});

		await expect(ControllerX9V37j.setConverter.call(addressup7KOpP, addressvCnJcwX, addressvOAyiGg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressBsYHOIn = "0x0000000000000000000000000000000000000001"
		const ControllerHUiPL4b = await Controller.new(addressBsYHOIn, {from: accounts[3]});
		const addressU7roSKj = "0x0000000000000000000000000000000000000001"
		const addresskQeCnql = accounts[4]
		const addressskbwb7T = await ControllerHUiPL4b.setStrategist.call(addressU7roSKj, {from: accounts[3]});
		const uintz6Pvppb = await ControllerHUiPL4b.balanceOf.call(addresskQeCnql, {from: accounts[0]});

		await expect(ControllerHUiPL4b.balanceOf.call(addresskQeCnql, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressgRLBLGP = accounts[4]
		const ControlleriLiyWN = await Controller.new(addressgRLBLGP, {from: accounts[2]});
		const uintWT0TGsC = BigInt("97")
		const addressmdlczDX = accounts[0]
		const uinthUsEGeB = BigInt("1612")
		const addressjqcpdFh = accounts[4]
		const addressLimngEy = await ControlleriLiyWN.earn.call(addressmdlczDX, uintWT0TGsC, {from: accounts[1]});
		const addressE33RKxJ = await ControlleriLiyWN.earn.call(addressjqcpdFh, uinthUsEGeB, {from: accounts[4]});

		await expect(ControlleriLiyWN.earn.call(addressmdlczDX, uintWT0TGsC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressoexi5D = "0x0000000000000000000000000000000000000001"
		const ControllerHUiPL4b = await Controller.new(addressoexi5D, {from: accounts[3]});
		const addressUCG7CMv = accounts[4]
		const addressNmQQhXo = accounts[2]
		const addresswzVCpIi = accounts[4]
		const addressfOmvhbQ = "0x0000000000000000000000000000000000000001"
		const addressskbwb7T = await ControllerHUiPL4b.setStrategist.call(addressUCG7CMv, {from: accounts[3]});
		const addressuXssOif = await ControllerHUiPL4b.inCaseStrategyTokenGetStuck.call(addresswzVCpIi, addressNmQQhXo, {from: accounts[2]});
		const uintz6Pvppb = await ControllerHUiPL4b.balanceOf.call(addressfOmvhbQ, {from: accounts[0]});

		await expect(ControllerHUiPL4b.inCaseStrategyTokenGetStuck.call(addresswzVCpIi, addressNmQQhXo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressbKcBh2n = accounts[4]
		const ControllerIDk91Qz = await Controller.new(addressbKcBh2n, {from: accounts[2]});
		const addressSGJzONq = "0x0000000000000000000000000000000000000001"
		const addressDX5QTJF = accounts[2]
		const addressxzw8aS = await ControllerIDk91Qz.approveStrategy.call(addressDX5QTJF, addressSGJzONq, {from: accounts[1]});

		await expect(ControllerIDk91Qz.approveStrategy.call(addressDX5QTJF, addressSGJzONq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresseNRDkjf = accounts[1]
		const Controllerv7lFFLD = await Controller.new(addresseNRDkjf, {from: accounts[4]});
		const addressfX151QN = accounts[4]
		const addressfPkcC1v = accounts[5]
		const addressqGxFzG2 = accounts[4]
		const addresssYm0Rq7 = "0x0000000000000000000000000000000000000001"
		const addressZxfMecT = accounts[1]
		const addressSCNCfNB = await Controllerv7lFFLD.setVault.call(addressfPkcC1v, addressfX151QN, {from: accounts[0]});
		const addressd3tiAT = await Controllerv7lFFLD.setStrategist.call(addressqGxFzG2, {from: accounts[3]});
		const addresssNZc26M = await Controllerv7lFFLD.withdrawAll.call(addresssYm0Rq7, {from: accounts[1]});
		const addressMMhlm6X = await Controllerv7lFFLD.withdrawAll.call(addressZxfMecT, {from: accounts[0]});

		await expect(Controllerv7lFFLD.setVault.call(addressfPkcC1v, addressfX151QN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMshNDz6 = accounts[1]
		const ControllerDFrrSUy = await Controller.new(addressMshNDz6, {from: accounts[2]});
		const uintSsGUtgO = BigInt("112")
		const addressioZmGqC = accounts[1]
		const addressVTrFZDL = accounts[0]
		const addressTAM2hJb = accounts[1]
		const addressFdUyxAd = accounts[4]
		const addressi9DxyWn = accounts[0]
		const addressKbNN9ng = accounts[2]
		const uintGuNuLCl = await ControllerDFrrSUy.getExpectedReturn.call(addressVTrFZDL, addressioZmGqC, uintSsGUtgO, {from: accounts[5]});
		const addressVYoxyAY = await ControllerDFrrSUy.withdrawAll.call(addressTAM2hJb, {from: accounts[3]});
		const addressD1LRp3N = await ControllerDFrrSUy.inCaseStrategyTokenGetStuck.call(addressi9DxyWn, addressFdUyxAd, {from: accounts[5]});
		const addressty29TH3 = await ControllerDFrrSUy.setOneSplit.call(addressKbNN9ng, {from: accounts[0]});

		await expect(ControllerDFrrSUy.getExpectedReturn.call(addressVTrFZDL, addressioZmGqC, uintSsGUtgO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjTCIaN = accounts[0]
		const ControlleryAIkCB = await Controller.new(addressjTCIaN, {from: accounts[4]});
		const addresskKejmoS = accounts[0]
		const addressfjlPqJB = accounts[4]
		const addresszAm4E2 = accounts[3]
		const addressgkUKPk8 = accounts[0]
		const uintfntyATx = BigInt("1511")
		const addressOnVyoOv = accounts[0]
		const addressgVu0YMM = await ControlleryAIkCB.setStrategy.call(addressfjlPqJB, addresskKejmoS, {from: accounts[0]});
		const address4hqrPD = await ControlleryAIkCB.approveStrategy.call(addressgkUKPk8, addresszAm4E2, {from: accounts[2]});
		const addresszjrnX0O = await ControlleryAIkCB.inCaseTokensGetStuck.call(addressOnVyoOv, uintfntyATx, {from: accounts[0]});

		await expect(ControlleryAIkCB.setStrategy.call(addressfjlPqJB, addresskKejmoS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressisTnWt = accounts[4]
		const ControllerIDk91Qz = await Controller.new(addressisTnWt, {from: accounts[2]});
		const addressuakipfD = accounts[4]
		const addressebSlhug = accounts[1]
		const addressDtd55gI = accounts[4]
		const addresslAsG7EN = accounts[3]
		const uintJTw4udP = BigInt("1957")
		const addressmAX48po = accounts[5]
		const addressEWT3Gy = accounts[4]
		const addresspkDGJrr = await ControllerIDk91Qz.setStrategy.call(addressebSlhug, addressuakipfD, {from: accounts[2]});
		const addressQNmwO8 = await ControllerIDk91Qz.setVault.call(addresslAsG7EN, addressDtd55gI, {from: accounts[5]});
		const addressDywvcex = await ControllerIDk91Qz.yearn.call(addressEWT3Gy, addressmAX48po, uintJTw4udP, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerIDk91Qz.setStrategy.call(addressebSlhug, addressuakipfD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressql4KVgT = accounts[4]
		const ControllerIDk91Qz = await Controller.new(addressql4KVgT, {from: accounts[2]});
		const addressLLzSBy = accounts[4]
		const addressqxpOm4K = accounts[4]
		const addresscLkkz6G = accounts[1]
		const addressFiVEzm8 = accounts[5]
		const addressda688ZH = accounts[3]
		const addressFKmPiY = accounts[5]
		const addressvBnv7Oo = accounts[4]
		const addressJ3pzBUw = accounts[2]
		const uintx1lVFiI = BigInt("1957")
		const addressO2qBMZy = accounts[5]
		const addressy7Rm1hZ = accounts[4]
		const addressO4tm2Ky = await ControllerIDk91Qz.withdrawAll.call(addressLLzSBy, {from: accounts[3]});
		const addresspkDGJrr = await ControllerIDk91Qz.setStrategy.call(addresscLkkz6G, addressqxpOm4K, {from: accounts[2]});
		const addressQNmwO8 = await ControllerIDk91Qz.setVault.call(addressda688ZH, addressFiVEzm8, {from: accounts[5]});
		const addressQZgBV8q = await ControllerIDk91Qz.setConverter.call(addressJ3pzBUw, addressvBnv7Oo, addressFKmPiY, {from: accounts[0]});
		const addressDywvcex = await ControllerIDk91Qz.yearn.call(addressy7Rm1hZ, addressO2qBMZy, uintx1lVFiI, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerIDk91Qz.withdrawAll.call(addressLLzSBy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressCrA5fNw = accounts[4]
		const ControllerIDk91Qz = await Controller.new(addressCrA5fNw, {from: accounts[2]});
		const uintmGwQQyU = BigInt("1705")
		const addressYSW1I6 = accounts[0]
		const uintRDWRZef = BigInt("1957")
		const addressQTB1a6 = accounts[7]
		const addressTXvJ24B = accounts[4]
		const addressJukChoS = await ControllerIDk91Qz.withdraw.call(addressYSW1I6, uintmGwQQyU, {from: accounts[1]});
		const addressDywvcex = await ControllerIDk91Qz.yearn.call(addressTXvJ24B, addressQTB1a6, uintRDWRZef, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerIDk91Qz.withdraw.call(addressYSW1I6, uintmGwQQyU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressPv6dRBv = accounts[4]
		const ControlleriLiyWN = await Controller.new(addressPv6dRBv, {from: accounts[2]});
		const addressgX7jHRH = accounts[2]
		const uintPuLw5Tp = BigInt("1377")
		const address4VCAC6 = accounts[1]
		const addressgOzCnBc = accounts[2]
		const uintH1EWOLK = BigInt("1612")
		const addressC7eblKN = accounts[6]
		const addressSZwE1Gx = await ControlleriLiyWN.setRewards.call(addressgX7jHRH, {from: accounts[3]});
		const addressrRT2MM4 = await ControlleriLiyWN.yearn.call(addressgOzCnBc, address4VCAC6, uintPuLw5Tp, {from: "0x0000000000000000000000000000000000000001"});
		const addressE33RKxJ = await ControlleriLiyWN.earn.call(addressC7eblKN, uintH1EWOLK, {from: accounts[4]});

		await expect(ControlleriLiyWN.setRewards.call(addressgX7jHRH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressUipEYct = accounts[4]
		const ControlleriLiyWN = await Controller.new(addressUipEYct, {from: accounts[2]});
		const uintRQQURFz = BigInt("1770")
		const addressTKU2LPP = accounts[1]
		const uintqcvKB15 = BigInt("1612")
		const addressMYNl1BX = accounts[6]
		const addresshdhurpA = await ControlleriLiyWN.inCaseTokensGetStuck.call(addressTKU2LPP, uintRQQURFz, {from: accounts[2]});
		const addressE33RKxJ = await ControlleriLiyWN.earn.call(addressMYNl1BX, uintqcvKB15, {from: accounts[4]});

		await expect(ControlleriLiyWN.inCaseTokensGetStuck.call(addressTKU2LPP, uintRQQURFz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})