const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressrZz2f4n = accounts[4]
		const ControllerENqxbEF = await Controller.new(addressrZz2f4n, {from: accounts[4]});
		const addressJBucUv8 = accounts[0]
		const addressEPVdM4U = accounts[5]
		const addressj2TZLJB = accounts[2]
		const addressjcI0Pzb = accounts[1]
		const addressBgyXjSl = accounts[3]
		const addresseqjIKqh = accounts[5]
		const addresseaUbgQF = accounts[2]
		const addressnTzjHyn = await ControllerENqxbEF.setGovernance.call(addressJBucUv8, {from: "0x0000000000000000000000000000000000000001"});
		const uintjoRzfvz = await ControllerENqxbEF.balanceOf.call(addressEPVdM4U, {from: accounts[1]});
		const addressGAo3u34 = await ControllerENqxbEF.revokeStrategy.call(addressjcI0Pzb, addressj2TZLJB, {from: accounts[0]});
		const addresss0R3atB = await ControllerENqxbEF.setVault.call(addresseqjIKqh, addressBgyXjSl, {from: accounts[2]});
		const addressSx8zjgn = await ControllerENqxbEF.withdrawAll.call(addresseaUbgQF, {from: accounts[3]});

		await expect(ControllerENqxbEF.setGovernance.call(addressJBucUv8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressXgMpO3J = "0x0000000000000000000000000000000000000001"
		const ControlleruEQavXg = await Controller.new(addressXgMpO3J, {from: accounts[0]});
		const addresszH2fpdU = accounts[0]
		const addressupPnI51 = accounts[2]
		const uintc9df69N = BigInt("1955")
		const uintiL1jkXF = BigInt("796")
		const addresscX5LMQT = accounts[2]
		const uintcCEy7e1 = BigInt("1459")
		const addressyrHyaSW = accounts[3]
		const addresskUb9ZcC = await ControlleruEQavXg.setStrategy.call(addressupPnI51, addresszH2fpdU, {from: "0x0000000000000000000000000000000000000001"});
		const uintpmXdaxY = await ControlleruEQavXg.setSplit.call(uintc9df69N, {from: accounts[2]});
		const addresszNLvv7o = await ControlleruEQavXg.earn.call(addresscX5LMQT, uintiL1jkXF, {from: accounts[2]});
		const addressM1aK9gp = await ControlleruEQavXg.withdraw.call(addressyrHyaSW, uintcCEy7e1, {from: accounts[4]});

		await expect(ControlleruEQavXg.setStrategy.call(addressupPnI51, addresszH2fpdU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressm6Ymhyb = accounts[4]
		const ControllerwAyIpb = await Controller.new(addressm6Ymhyb, {from: accounts[3]});
		const addressYinq1f8 = accounts[4]
		const addressslQcjX0 = accounts[3]
		const address97PF9T = accounts[1]
		const uint11rMrm = BigInt("1384")
		const addresssL6y2R = accounts[3]
		const addressmPhsGnf = accounts[1]
		const addressQ5shs3 = accounts[1]
		const addressCgg1tjR = accounts[2]
		const addressq5o7JtD = accounts[5]
		const addressP7WrbmL = accounts[1]
		const uintmSI1QlX = BigInt("1631")
		const addressyUFUr9r = accounts[2]
		const addressurEiiLn = await ControllerwAyIpb.setConverter.call(address97PF9T, addressslQcjX0, addressYinq1f8, {from: accounts[1]});
		const uintHfdDbrb = await ControllerwAyIpb.setSplit.call(uint11rMrm, {from: accounts[0]});
		const addressxV2WJKn = await ControllerwAyIpb.inCaseStrategyTokenGetStuck.call(addressmPhsGnf, addresssL6y2R, {from: accounts[0]});
		const uintpJRVfC = await ControllerwAyIpb.balanceOf.call(addressQ5shs3, {from: accounts[4]});
		const addressbYSHwsn = await ControllerwAyIpb.setConverter.call(addressP7WrbmL, addressq5o7JtD, addressCgg1tjR, {from: accounts[1]});
		const addressOQZlEZw = await ControllerwAyIpb.earn.call(addressyUFUr9r, uintmSI1QlX, {from: accounts[4]});

		await expect(ControllerwAyIpb.setConverter.call(address97PF9T, addressslQcjX0, addressYinq1f8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressTxJJOHt = accounts[3]
		const ControllermvgrKdH = await Controller.new(addressTxJJOHt, {from: accounts[2]});
		const addressYYvyKqp = accounts[2]
		const addresstoXWzO7 = accounts[0]
		const addressgvJaa3O = accounts[4]
		const addressv3Ewx6u = accounts[0]
		const addresshFOfANM = accounts[4]
		const uintwlTlPYf = await ControllermvgrKdH.balanceOf.call(addressYYvyKqp, {from: accounts[1]});
		const uintJJWqPJn = await ControllermvgrKdH.balanceOf.call(addresstoXWzO7, {from: accounts[0]});
		const addressvYfepo4 = await ControllermvgrKdH.revokeStrategy.call(addressv3Ewx6u, addressgvJaa3O, {from: accounts[3]});
		const addressBUHif6o = await ControllermvgrKdH.setOneSplit.call(addresshFOfANM, {from: accounts[3]});

		await expect(ControllermvgrKdH.balanceOf.call(addressYYvyKqp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskkqH7JG = accounts[4]
		const ControllerhGKOCWC = await Controller.new(addresskkqH7JG, {from: accounts[4]});
		const addressHIlqfwx = "0x0000000000000000000000000000000000000001"
		const addressbCcQjNM = accounts[0]
		const addressM7DQpdz = accounts[0]
		const addresscdAP7rj = accounts[4]
		const uintBsiOiqd = BigInt("1650")
		const uintvQEOqg0 = BigInt("1121")
		const addressTbaRSA = accounts[4]
		const addressgrfkI4h = accounts[5]
		const uintRsq7Z9a = BigInt("1497")
		const addressgHyjVd1 = accounts[2]
		const addressBZIzLTw = accounts[2]
		const addressQ1664e2 = await ControllerhGKOCWC.approveStrategy.call(addressbCcQjNM, addressHIlqfwx, {from: accounts[3]});
		const addressZGSpTu = await ControllerhGKOCWC.setVault.call(addresscdAP7rj, addressM7DQpdz, {from: accounts[3]});
		const uintRUwJw4E = await ControllerhGKOCWC.setSplit.call(uintBsiOiqd, {from: accounts[2]});
		const uintyLkJfse = await ControllerhGKOCWC.setSplit.call(uintvQEOqg0, {from: accounts[4]});
		const addressnjthltd = await ControllerhGKOCWC.inCaseStrategyTokenGetStuck.call(addressgrfkI4h, addressTbaRSA, {from: accounts[2]});
		const addressd1ttAjB = await ControllerhGKOCWC.yearn.call(addressBZIzLTw, addressgHyjVd1, uintRsq7Z9a, {from: accounts[4]});

		await expect(ControllerhGKOCWC.approveStrategy.call(addressbCcQjNM, addressHIlqfwx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressR0xf1JV = accounts[3]
		const ControllerGiqNssm = await Controller.new(addressR0xf1JV, {from: accounts[2]});
		const addressXsuKcw6 = accounts[4]
		const addressNPN30L1 = accounts[4]
		const addressRBC2nyY = "0x0000000000000000000000000000000000000001"
		const addressYVW6dVW = accounts[5]
		const addressDVgRx4y = accounts[3]
		const addressbl5AEfv = accounts[0]
		const addressheOusSW = accounts[2]
		const addressxzkoRoR = accounts[1]
		const addressBmyqi3a = accounts[1]
		const addressuNVjj5z = accounts[3]
		const addressfn7LJ8m = await ControllerGiqNssm.setStrategist.call(addressXsuKcw6, {from: accounts[0]});
		const addressxn1DRVe = await ControllerGiqNssm.setConverter.call(addressYVW6dVW, addressRBC2nyY, addressNPN30L1, {from: "0x0000000000000000000000000000000000000001"});
		const addresshsoBy0A = await ControllerGiqNssm.setConverter.call(addressheOusSW, addressbl5AEfv, addressDVgRx4y, {from: accounts[3]});
		const addresstO3qg3Q = await ControllerGiqNssm.inCaseStrategyTokenGetStuck.call(addressBmyqi3a, addressxzkoRoR, {from: accounts[3]});
		const addressQhu2Byt = await ControllerGiqNssm.setOneSplit.call(addressuNVjj5z, {from: accounts[4]});

		await expect(ControllerGiqNssm.setStrategist.call(addressXsuKcw6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressndaoaQv = accounts[1]
		const ControllerNuyLv2o = await Controller.new(addressndaoaQv, {from: accounts[5]});
		const addressH5w20By = accounts[0]
		const addresst6Uf3x1 = accounts[2]
		const addressxye9dVZ = accounts[0]
		const addressGDTw4su = accounts[2]
		const addressebX6REW = "0x0000000000000000000000000000000000000001"
		const addressUL7xblx = accounts[2]
		const addressDwp0GyB = "0x0000000000000000000000000000000000000001"
		const addressfyZ2er3 = accounts[5]
		const addressTUfpAbZ = accounts[2]
		const addressyixy98d = accounts[0]
		const addressHPNRaSV = await ControllerNuyLv2o.revokeStrategy.call(addresst6Uf3x1, addressH5w20By, {from: accounts[4]});
		const address3qhbUS = await ControllerNuyLv2o.setGovernance.call(addressxye9dVZ, {from: accounts[0]});
		const addressYYyUcUx = await ControllerNuyLv2o.setConverter.call(addressUL7xblx, addressebX6REW, addressGDTw4su, {from: accounts[4]});
		const addressfJNVxzX = await ControllerNuyLv2o.setVault.call(addressfyZ2er3, addressDwp0GyB, {from: accounts[4]});
		const addressZJ4JOuM = await ControllerNuyLv2o.setStrategy.call(addressyixy98d, addressTUfpAbZ, {from: accounts[3]});

		await expect(ControllerNuyLv2o.revokeStrategy.call(addresst6Uf3x1, addressH5w20By, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressyroUvSf = accounts[1]
		const ControllerzwmIfuB = await Controller.new(addressyroUvSf, {from: accounts[2]});
		const addressl6MbBlt = accounts[5]
		const addressCYAAMJW = accounts[4]
		const addresstglhmbu = accounts[5]
		const addressiy1ELER = "0x0000000000000000000000000000000000000001"
		const addresskIjeV6D = accounts[0]
		const uintjvy6Lnc = BigInt("1651")
		const addressTfH2XC0 = accounts[0]
		const addressTwZLeP = await ControllerzwmIfuB.setRewards.call(addressl6MbBlt, {from: "0x0000000000000000000000000000000000000001"});
		const addressMJNhYL = await ControllerzwmIfuB.setConverter.call(addressiy1ELER, addresstglhmbu, addressCYAAMJW, {from: accounts[1]});
		const uintf9PSfBC = await ControllerzwmIfuB.balanceOf.call(addresskIjeV6D, {from: accounts[5]});
		const addressAuOQjI = await ControllerzwmIfuB.withdraw.call(addressTfH2XC0, uintjvy6Lnc, {from: accounts[4]});

		await expect(ControllerzwmIfuB.setRewards.call(addressl6MbBlt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresss5uqZdn = accounts[1]
		const ControllerXDrKnf = await Controller.new(addresss5uqZdn, {from: accounts[2]});
		const addressnspC50 = accounts[2]
		const addresskTWVQdQ = accounts[4]
		const uintUmcx0yH = BigInt("1731")
		const uintiNv2Xiu = BigInt("1157")
		const addressLVih6MM = accounts[3]
		const uintocp6KWD = BigInt("1366")
		const addressRRHXuVp = accounts[3]
		const addressgnlbIX = accounts[0]
		const addressidWHG0S = accounts[4]
		const addressLZPQPYI = accounts[0]
		const addressH802skj = await ControllerXDrKnf.setVault.call(addresskTWVQdQ, addressnspC50, {from: accounts[1]});
		const uintlx3DeK = await ControllerXDrKnf.setSplit.call(uintUmcx0yH, {from: accounts[4]});
		const addressVUjDwlZ = await ControllerXDrKnf.earn.call(addressLVih6MM, uintiNv2Xiu, {from: accounts[1]});
		const addressWWscMm = await ControllerXDrKnf.earn.call(addressRRHXuVp, uintocp6KWD, {from: accounts[5]});
		const addressuoooK2s = await ControllerXDrKnf.withdrawAll.call(addressgnlbIX, {from: accounts[1]});
		const addressvYSZYbc = await ControllerXDrKnf.approveStrategy.call(addressLZPQPYI, addressidWHG0S, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerXDrKnf.setVault.call(addresskTWVQdQ, addressnspC50, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfrp4gRo = accounts[1]
		const ControllerNuyLv2o = await Controller.new(addressfrp4gRo, {from: accounts[5]});
		const uintSDgoxTi = BigInt("1673")
		const addressAEI3VxF = accounts[3]
		const addresshzwV0oV = accounts[0]
		const addressOtw1gwq = accounts[2]
		const addressn1AJBTK = accounts[0]
		const addresssN5YnEQ = accounts[2]
		const addressoTj9dpV = "0x0000000000000000000000000000000000000001"
		const addressd4ZLHyh = accounts[2]
		const addressSpPNWSX = "0x0000000000000000000000000000000000000001"
		const addressGyIBMQ = accounts[5]
		const addressU2ntmBV = accounts[2]
		const addressPXT1qb1 = accounts[4]
		const addresskUQk4KX = await ControllerNuyLv2o.earn.call(addressAEI3VxF, uintSDgoxTi, {from: accounts[3]});
		const addressHPNRaSV = await ControllerNuyLv2o.revokeStrategy.call(addressOtw1gwq, addresshzwV0oV, {from: accounts[4]});
		const address3qhbUS = await ControllerNuyLv2o.setGovernance.call(addressn1AJBTK, {from: accounts[0]});
		const addressYYyUcUx = await ControllerNuyLv2o.setConverter.call(addressd4ZLHyh, addressoTj9dpV, addresssN5YnEQ, {from: accounts[4]});
		const addressfJNVxzX = await ControllerNuyLv2o.setVault.call(addressGyIBMQ, addressSpPNWSX, {from: accounts[4]});
		const addressZJ4JOuM = await ControllerNuyLv2o.setStrategy.call(addressPXT1qb1, addressU2ntmBV, {from: accounts[3]});

		await expect(ControllerNuyLv2o.earn.call(addressAEI3VxF, uintSDgoxTi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressnbVUMu = accounts[3]
		const ControllerWu8Xyn = await Controller.new(addressnbVUMu, {from: accounts[2]});
		const uintH9tOiMs = BigInt("1473")
		const addressI5SLGAe = accounts[1]
		const uintVMDJkmh = BigInt("1342")
		const addressGKhYjZF = accounts[3]
		const addressakwUYBg = accounts[0]
		const addressdRiav5 = accounts[2]
		const uintWK8LhJ = BigInt("1434")
		const addressLOk2sxf = accounts[1]
		const addressZzMkU6e = await ControllerWu8Xyn.inCaseTokensGetStuck.call(addressI5SLGAe, uintH9tOiMs, {from: accounts[3]});
		const addressQY29WZX = await ControllerWu8Xyn.earn.call(addressGKhYjZF, uintVMDJkmh, {from: accounts[5]});
		const addressqupwNFS = await ControllerWu8Xyn.setStrategy.call(addressdRiav5, addressakwUYBg, {from: accounts[3]});
		const addressD4OgWk9 = await ControllerWu8Xyn.withdraw.call(addressLOk2sxf, uintWK8LhJ, {from: accounts[4]});

		await expect(ControllerWu8Xyn.inCaseTokensGetStuck.call(addressI5SLGAe, uintH9tOiMs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjG3vqAI = accounts[1]
		const ControllerzwmIfuB = await Controller.new(addressjG3vqAI, {from: accounts[2]});
		const uintlIVjYkD = BigInt("116")
		const addressK3UiLRx = accounts[4]
		const addressPdNkhfO = accounts[4]
		const addresswGGtZ9R = accounts[5]
		const addresswnZJkaM = accounts[4]
		const addresstIza4j = accounts[5]
		const addressYPzo7Eb = "0x0000000000000000000000000000000000000003"
		const uintjEdsFAR = BigInt("1651")
		const addressW0KlbaB = accounts[0]
		const uint5nJJVo = await ControllerzwmIfuB.getExpectedReturn.call(addressPdNkhfO, addressK3UiLRx, uintlIVjYkD, {from: accounts[0]});
		const addressTwZLeP = await ControllerzwmIfuB.setRewards.call(addresswGGtZ9R, {from: "0x0000000000000000000000000000000000000001"});
		const addressMJNhYL = await ControllerzwmIfuB.setConverter.call(addressYPzo7Eb, addresstIza4j, addresswnZJkaM, {from: accounts[1]});
		const addressAuOQjI = await ControllerzwmIfuB.withdraw.call(addressW0KlbaB, uintjEdsFAR, {from: accounts[4]});

		await expect(ControllerzwmIfuB.getExpectedReturn.call(addressPdNkhfO, addressK3UiLRx, uintlIVjYkD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressiWb98D = accounts[2]
		const ControllerHak9ZF6 = await Controller.new(addressiWb98D, {from: "0x0000000000000000000000000000000000000001"});
		const uinthHcKQIE = BigInt("1376")
		const addressyJD9Q9N = accounts[2]
		const addressoYhckh5 = "0x0000000000000000000000000000000000000001"
		const uintxZsSlRG = BigInt("1522")
		const addressK4Dhljm = accounts[3]
		const addressoSfleVi = accounts[3]
		const addressl3sHWQ = accounts[2]
		const addressjFfPONs = accounts[0]
		const addresssdq4SNt = accounts[4]
		const addresscpAMXhB = await ControllerHak9ZF6.inCaseTokensGetStuck.call(addressyJD9Q9N, uinthHcKQIE, {from: accounts[1]});
		const addressKHbprFv = await ControllerHak9ZF6.setRewards.call(addressoYhckh5, {from: accounts[3]});
		const addressJLRl01 = await ControllerHak9ZF6.yearn.call(addressoSfleVi, addressK4Dhljm, uintxZsSlRG, {from: accounts[4]});
		const addressglRlVDI = await ControllerHak9ZF6.setConverter.call(addresssdq4SNt, addressjFfPONs, addressl3sHWQ, {from: accounts[3]});
	});

	it('test for Controller', async () => {
		const addressedCjHiU = accounts[3]
		const ControllerGiqNssm = await Controller.new(addressedCjHiU, {from: accounts[2]});
		const uintMD3gDDx = BigInt("790")
		const addressCNpQ3RX = accounts[2]
		const uint02tqW1 = BigInt("1449")
		const addressXs9Yp1Y = accounts[2]
		const addressls8c9v = accounts[4]
		const uintMX7KP0m = await ControllerGiqNssm.setSplit.call(uintMD3gDDx, {from: "0x0000000000000000000000000000000000000001"});
		const addressfn7LJ8m = await ControllerGiqNssm.setStrategist.call(addressCNpQ3RX, {from: accounts[0]});
		const addressCy3xjz3 = await ControllerGiqNssm.inCaseTokensGetStuck.call(addressXs9Yp1Y, uint02tqW1, {from: accounts[5]});
		const addressQhu2Byt = await ControllerGiqNssm.setOneSplit.call(addressls8c9v, {from: accounts[4]});

		await expect(ControllerGiqNssm.setSplit.call(uintMD3gDDx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxd7682O = accounts[1]
		const ControllerzwmIfuB = await Controller.new(addressxd7682O, {from: accounts[2]});
		const uintEwJCQY7 = BigInt("1651")
		const addresssYGOoA0 = accounts[0]
		const addressAuOQjI = await ControllerzwmIfuB.withdraw.call(addresssYGOoA0, uintEwJCQY7, {from: accounts[4]});

		await expect(ControllerzwmIfuB.withdraw.call(addresssYGOoA0, uintEwJCQY7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresslBK9XL4 = accounts[1]
		const ControllerNuyLv2o = await Controller.new(addresslBK9XL4, {from: accounts[5]});
		const uintRWnZvqH = BigInt("1485")
		const addressEuBFEGk = accounts[5]
		const addressp1Sf1DD = accounts[4]
		const addressmJxMwvX = accounts[1]
		const addressac0iejR = accounts[0]
		const addresshezI2Q6 = accounts[2]
		const addresst6QkcU1 = "0x0000000000000000000000000000000000000002"
		const addressimcfPyN = accounts[2]
		const addresszMKFkY = accounts[5]
		const addressiIdB5jb = accounts[3]
		const addressMyFLDGO = await ControllerNuyLv2o.yearn.call(addressp1Sf1DD, addressEuBFEGk, uintRWnZvqH, {from: accounts[4]});
		const addressjzfnksx = await ControllerNuyLv2o.inCaseStrategyTokenGetStuck.call(addressac0iejR, addressmJxMwvX, {from: accounts[2]});
		const addressYYyUcUx = await ControllerNuyLv2o.setConverter.call(addressimcfPyN, addresst6QkcU1, addresshezI2Q6, {from: accounts[4]});
		const addressdF0uw4x = await ControllerNuyLv2o.revokeStrategy.call(addressiIdB5jb, addresszMKFkY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerNuyLv2o.yearn.call(addressp1Sf1DD, addressEuBFEGk, uintRWnZvqH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressT3RNxBd = accounts[2]
		const ControllerSloBMFv = await Controller.new(addressT3RNxBd, {from: accounts[1]});
		const addressn9FLGcL = accounts[1]
		const addressfe1F7Z4 = accounts[3]
		const addresscJsP219 = accounts[3]
		const addressxLyca9v = accounts[1]
		const addressXlRoaCw = await ControllerSloBMFv.withdrawAll.call(addressn9FLGcL, {from: accounts[4]});
		const addressYPCv3hk = await ControllerSloBMFv.setConverter.call(addressxLyca9v, addresscJsP219, addressfe1F7Z4, {from: accounts[2]});

		await expect(ControllerSloBMFv.withdrawAll.call(addressn9FLGcL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressr3EYUx3 = accounts[2]
		const ControllerSloBMFv = await Controller.new(addressr3EYUx3, {from: accounts[1]});
		const addressrCAmoWN = accounts[0]
		const addressf3qFp5X = accounts[1]
		const addressFcy4EC = accounts[0]
		const addressjQAU4Dz = accounts[3]
		const addresswPpe4QG = accounts[3]
		const addressTDJvLMX = accounts[2]
		const addressEoFP7JG = await ControllerSloBMFv.setOneSplit.call(addressrCAmoWN, {from: accounts[1]});
		const addressXlRoaCw = await ControllerSloBMFv.withdrawAll.call(addressf3qFp5X, {from: accounts[4]});
		const addressYJSapJ6 = await ControllerSloBMFv.setStrategist.call(addressFcy4EC, {from: accounts[1]});
		const addressYPCv3hk = await ControllerSloBMFv.setConverter.call(addressTDJvLMX, addresswPpe4QG, addressjQAU4Dz, {from: accounts[2]});

		await expect(ControllerSloBMFv.withdrawAll.call(addressf3qFp5X, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressbCkfDNA = accounts[1]
		const ControllerzwmIfuB = await Controller.new(addressbCkfDNA, {from: accounts[2]});
		const addressEQpFCVG = accounts[4]
		const addresssT2wP65 = accounts[2]
		const addressqiwS5Kq = await ControllerzwmIfuB.inCaseStrategyTokenGetStuck.call(addresssT2wP65, addressEQpFCVG, {from: accounts[5]});

		await expect(ControllerzwmIfuB.inCaseStrategyTokenGetStuck.call(addresssT2wP65, addressEQpFCVG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMsPPE7 = accounts[3]
		const ControllerZnbyXMY = await Controller.new(addressMsPPE7, {from: accounts[2]});
		const addressndd1SQw = accounts[5]
		const addressoqcvxXc = accounts[1]
		const addressYdONlE = accounts[4]
		const addressEcayjvY = accounts[3]
		const addressBIsWWcR = accounts[2]
		const addressFywOmI9 = accounts[3]
		const addresswdf1tTL = await ControllerZnbyXMY.revokeStrategy.call(addressoqcvxXc, addressndd1SQw, {from: accounts[2]});
		const addressrt78wz = await ControllerZnbyXMY.setStrategist.call(addressYdONlE, {from: accounts[3]});
		const uintGLxzCLz = await ControllerZnbyXMY.balanceOf.call(addressEcayjvY, {from: accounts[0]});
		const addressnAPwBpn = await ControllerZnbyXMY.inCaseStrategyTokenGetStuck.call(addressFywOmI9, addressBIsWWcR, {from: accounts[2]});

		await expect(ControllerZnbyXMY.setStrategist.call(addressYdONlE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressOdxurPS = accounts[2]
		const ControllerUiYaG8d = await Controller.new(addressOdxurPS, {from: accounts[0]});
		const uintYPcFgiF = BigInt("1728")
		const addresskywHS7q = "0x0000000000000000000000000000000000000001"
		const addressYlzfGno = accounts[2]
		const addressFYIiLMM = accounts[3]
		const addressJWYHkT = accounts[5]
		const addressMbvtDkI = accounts[5]
		const uintRcRa5KS = BigInt("1154")
		const addresstuuqLgY = accounts[1]
		const addressYtibHyM = accounts[4]
		const uintLQ0wtFu = BigInt("1389")
		const addresslfk9sjg = accounts[5]
		const uintcrKJS16 = BigInt("1529")
		const addressIhDP9cX = await ControllerUiYaG8d.yearn.call(addressYlzfGno, addresskywHS7q, uintYPcFgiF, {from: accounts[0]});
		const addresssytpIyE = await ControllerUiYaG8d.setConverter.call(addressMbvtDkI, addressJWYHkT, addressFYIiLMM, {from: accounts[5]});
		const uintnSf7O35 = await ControllerUiYaG8d.getExpectedReturn.call(addressYtibHyM, addresstuuqLgY, uintRcRa5KS, {from: accounts[0]});
		const addressdZrTyW0 = await ControllerUiYaG8d.earn.call(addresslfk9sjg, uintLQ0wtFu, {from: accounts[2]});
		const uintnKODMa = await ControllerUiYaG8d.setSplit.call(uintcrKJS16, {from: accounts[2]});

		await expect(ControllerUiYaG8d.yearn.call(addressYlzfGno, addresskywHS7q, uintYPcFgiF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressAPyz1VQ = accounts[1]
		const ControllerzwmIfuB = await Controller.new(addressAPyz1VQ, {from: accounts[2]});
		const addressFCwPatT = accounts[0]
		const addresskRnHDPp = "0x0000000000000000000000000000000000000001"
		const addresszb0oefc = accounts[4]
		const addressyqAmlR = accounts[0]
		const uintZibgPEX = BigInt("1651")
		const addressQPRHf3 = accounts[0]
		const addressMLOdYcF = await ControllerzwmIfuB.setVault.call(addresskRnHDPp, addressFCwPatT, {from: accounts[2]});
		const addressB8RFtaG = await ControllerzwmIfuB.inCaseStrategyTokenGetStuck.call(addressyqAmlR, addresszb0oefc, {from: accounts[1]});
		const addressAuOQjI = await ControllerzwmIfuB.withdraw.call(addressQPRHf3, uintZibgPEX, {from: accounts[4]});

		await expect(ControllerzwmIfuB.inCaseStrategyTokenGetStuck.call(addressyqAmlR, addresszb0oefc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressnGgEck7 = accounts[1]
		const ControllerzwmIfuB = await Controller.new(addressnGgEck7, {from: accounts[2]});
		const addressRPVm40d = accounts[0]
		const uintkqZvP9H = BigInt("1651")
		const addressmkIdrfq = accounts[1]
		const addressuPVte6n = await ControllerzwmIfuB.setRewards.call(addressRPVm40d, {from: accounts[2]});
		const addressAuOQjI = await ControllerzwmIfuB.withdraw.call(addressmkIdrfq, uintkqZvP9H, {from: accounts[4]});

		await expect(ControllerzwmIfuB.withdraw.call(addressmkIdrfq, uintkqZvP9H, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresscKzEyLD = accounts[1]
		const ControllerzwmIfuB = await Controller.new(addresscKzEyLD, {from: accounts[2]});
		const uintyFzf2Dx = BigInt("1588")
		const uintbASqR92 = BigInt("1639")
		const addressZ7IPHUo = accounts[0]
		const uintkz3hAfc = await ControllerzwmIfuB.setSplit.call(uintyFzf2Dx, {from: accounts[2]});
		const addressAuOQjI = await ControllerzwmIfuB.withdraw.call(addressZ7IPHUo, uintbASqR92, {from: accounts[4]});

		await expect(ControllerzwmIfuB.withdraw.call(addressZ7IPHUo, uintbASqR92, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressvmCixjw = accounts[1]
		const ControllerzwmIfuB = await Controller.new(addressvmCixjw, {from: accounts[2]});
		const addressKhuJHIV = accounts[1]
		const addressydosXl0 = accounts[3]
		const uintBhZostG = BigInt("1675")
		const addressGO2Ufx0 = accounts[0]
		const addresslSg51tJ = await ControllerzwmIfuB.inCaseStrategyTokenGetStuck.call(addressydosXl0, addressKhuJHIV, {from: accounts[2]});
		const addressAuOQjI = await ControllerzwmIfuB.withdraw.call(addressGO2Ufx0, uintBhZostG, {from: accounts[4]});

		await expect(ControllerzwmIfuB.inCaseStrategyTokenGetStuck.call(addressydosXl0, addressKhuJHIV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressWq4TzDg = accounts[1]
		const ControllerzwmIfuB = await Controller.new(addressWq4TzDg, {from: accounts[2]});
		const addressxS1sHW8 = accounts[3]
		const addresseWFtVhR = accounts[4]
		const addressrjV7Kws = accounts[2]
		const addresskba0tdA = accounts[4]
		const addressj2HM4jo = accounts[4]
		const addresssDCMgcK = await ControllerzwmIfuB.approveStrategy.call(addresseWFtVhR, addressxS1sHW8, {from: accounts[2]});
		const addressuf063uq = await ControllerzwmIfuB.withdrawAll.call(addressrjV7Kws, {from: accounts[0]});
		const addressesB5Dz = await ControllerzwmIfuB.approveStrategy.call(addressj2HM4jo, addresskba0tdA, {from: accounts[4]});

		await expect(ControllerzwmIfuB.withdrawAll.call(addressrjV7Kws, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressrk6J5NJ = accounts[1]
		const ControllerzwmIfuB = await Controller.new(addressrk6J5NJ, {from: accounts[2]});
		const addressPaExyYN = accounts[1]
		const addresst6V9pzT = accounts[1]
		const addressd6PX5kk = accounts[1]
		const addresszPYP3Aw = accounts[5]
		const addressOzKNGpH = accounts[1]
		const addressne0b5kS = await ControllerzwmIfuB.setStrategist.call(addressPaExyYN, {from: accounts[2]});
		const addressIxfSXDR = await ControllerzwmIfuB.setOneSplit.call(addresst6V9pzT, {from: accounts[3]});
		const addressesB5Dz = await ControllerzwmIfuB.approveStrategy.call(addresszPYP3Aw, addressd6PX5kk, {from: accounts[4]});
		const uintNwvMzQx = await ControllerzwmIfuB.balanceOf.call(addressOzKNGpH, {from: accounts[0]});

		await expect(ControllerzwmIfuB.setOneSplit.call(addresst6V9pzT, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressINi6d6A = accounts[3]
		const ControllerGiqNssm = await Controller.new(addressINi6d6A, {from: accounts[2]});
		const addressqy5exE5 = accounts[1]
		const addressAYdtY14 = accounts[0]
		const addresspOFT8xy = accounts[4]
		const addressoM2cyzE = await ControllerGiqNssm.setStrategy.call(addressAYdtY14, addressqy5exE5, {from: accounts[2]});
		const addressSG77NK = await ControllerGiqNssm.setGovernance.call(addresspOFT8xy, {from: accounts[3]});

		await expect(ControllerGiqNssm.setStrategy.call(addressAYdtY14, addressqy5exE5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressQnVWIAg = accounts[1]
		const ControllerzwmIfuB = await Controller.new(addressQnVWIAg, {from: accounts[2]});
		const addressRDx2zxH = accounts[1]
		const addressNw02GfL = accounts[3]
		const addressC513i8H = accounts[5]
		const addresscsUtk07 = accounts[2]
		const addresstiPCMnV = accounts[3]
		const uintqLeayt6 = BigInt("1612")
		const addressZrLNvJo = await ControllerzwmIfuB.withdrawAll.call(addressRDx2zxH, {from: accounts[2]});
		const addressesB5Dz = await ControllerzwmIfuB.approveStrategy.call(addressC513i8H, addressNw02GfL, {from: accounts[4]});
		const addressoV1juZa = await ControllerzwmIfuB.approveStrategy.call(addresstiPCMnV, addresscsUtk07, {from: accounts[5]});
		const uintcXRjoFL = await ControllerzwmIfuB.setSplit.call(uintqLeayt6, {from: accounts[2]});

		await expect(ControllerzwmIfuB.withdrawAll.call(addressRDx2zxH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressnSGc5WD = accounts[1]
		const ControllerzwmIfuB = await Controller.new(addressnSGc5WD, {from: accounts[2]});
		const addressyMjdxaZ = accounts[1]
		const addressVf3MBr = accounts[0]
		const addressKZJRh7u = accounts[3]
		const uintnUJRT0 = BigInt("1651")
		const addressNNfzaSI = accounts[1]
		const addressuHaQbA = await ControllerzwmIfuB.setConverter.call(addressKZJRh7u, addressVf3MBr, addressyMjdxaZ, {from: accounts[2]});
		const addressAuOQjI = await ControllerzwmIfuB.withdraw.call(addressNNfzaSI, uintnUJRT0, {from: accounts[4]});

		await expect(ControllerzwmIfuB.withdraw.call(addressNNfzaSI, uintnUJRT0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressa2IQx81 = accounts[1]
		const ControllerzwmIfuB = await Controller.new(addressa2IQx81, {from: accounts[2]});
		const uintFSDYBJg = BigInt("1170")
		const addresso8TRjxP = accounts[1]
		const uintOAXV96g = BigInt("1005")
		const addressjgyXcqB = accounts[2]
		const addressjSR9Xu0 = accounts[3]
		const addressVchxxjD = accounts[2]
		const addresssUpAJC = await ControllerzwmIfuB.inCaseTokensGetStuck.call(addresso8TRjxP, uintFSDYBJg, {from: accounts[2]});
		const addressngCg3aK = await ControllerzwmIfuB.earn.call(addressjgyXcqB, uintOAXV96g, {from: accounts[4]});
		const addressesB5Dz = await ControllerzwmIfuB.approveStrategy.call(addressVchxxjD, addressjSR9Xu0, {from: accounts[4]});

		await expect(ControllerzwmIfuB.inCaseTokensGetStuck.call(addresso8TRjxP, uintFSDYBJg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressGrRh5N7 = accounts[3]
		const ControllerGiqNssm = await Controller.new(addressGrRh5N7, {from: accounts[2]});
		const addressKezMY67 = accounts[2]
		const addressPdEIQdx = accounts[4]
		const addressE85bbrw = accounts[2]
		const addressCUvdGwh = accounts[4]
		const addressaWJQ2T1 = await ControllerGiqNssm.approveStrategy.call(addressPdEIQdx, addressKezMY67, {from: accounts[2]});
		const addresskcyc9Ok = await ControllerGiqNssm.setGovernance.call(addressE85bbrw, {from: accounts[2]});
		const addressSG77NK = await ControllerGiqNssm.setGovernance.call(addressCUvdGwh, {from: accounts[3]});

		await expect(ControllerGiqNssm.setGovernance.call(addressCUvdGwh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})