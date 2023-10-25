const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressJ1Z3REz = accounts[4]
		const Controller5M87xG = await Controller.new(addressJ1Z3REz, {from: "0x0000000000000000000000000000000000000001"});
		const addressJDgTua6 = accounts[4]
		const addressGkqbqAQ = accounts[0]
		const addressddlmSZa = accounts[0]
		const addressPMahhNW = accounts[2]
		const addressJ5CD98i = await Controller5M87xG.withdrawAll.call(addressJDgTua6, {from: accounts[2]});
		const addressWM5E0Du = await Controller5M87xG.setOneSplit.call(addressGkqbqAQ, {from: accounts[2]});
		const uinttQUWIS = await Controller5M87xG.balanceOf.call(addressddlmSZa, {from: accounts[1]});
		const addressOtB76LD = await Controller5M87xG.withdrawAll.call(addressPMahhNW, {from: accounts[3]});
	});

	it('test for Controller', async () => {
		const addressDKejWhz = accounts[3]
		const ControllerjEDWu9j = await Controller.new(addressDKejWhz, {from: accounts[2]});
		const uintCFJ3Nup = BigInt("1850")
		const addresskGpPZKI = accounts[0]
		const uintgOgAjX8 = BigInt("1178")
		const addressMv88cia = accounts[1]
//		const addressIOzgIBy = await ControllerjEDWu9j.inCaseTokensGetStuck.call(addresskGpPZKI, uintCFJ3Nup, {from: accounts[0]});
//		const addresspRFvm0 = await ControllerjEDWu9j.inCaseTokensGetStuck.call(addressMv88cia, uintgOgAjX8, {from: accounts[2]});

		await expect(ControllerjEDWu9j.inCaseTokensGetStuck.call(addresskGpPZKI, uintCFJ3Nup, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressznketke = accounts[1]
		const ControllerLMQJTyw = await Controller.new(addressznketke, {from: accounts[0]});
		const addresszwePZl1 = accounts[1]
		const addresssn8lzU2 = accounts[5]
		const uintPLncURS = BigInt("592")
		const addressEKeNTYQ = accounts[0]
		const addressxtN2O32 = await ControllerLMQJTyw.revokeStrategy.call(addresssn8lzU2, addresszwePZl1, {from: accounts[0]});
//		const uintgvpBlS1 = await ControllerLMQJTyw.setSplit.call(uintPLncURS, {from: accounts[4]});
//		const addressleDbOm4 = await ControllerLMQJTyw.setGovernance.call(addressEKeNTYQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerLMQJTyw.setSplit.call(uintPLncURS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressKC3ltk = accounts[3]
		const ControllerWpKUdkO = await Controller.new(addressKC3ltk, {from: accounts[3]});
		const addressMqbfXpc = accounts[1]
		const addresslNiy2Zc = "0x0000000000000000000000000000000000000001"
		const addressa7Rq8Df = accounts[3]
		const uintop7snPo = BigInt("833")
		const addressUZucJ6P = accounts[1]
		const addressNTBMgwu = accounts[3]
		const addressZ4fKtIY = accounts[2]
		const addressH8DlWNC = accounts[2]
//		const addressLIbGFt = await ControllerWpKUdkO.setOneSplit.call(addressMqbfXpc, {from: accounts[4]});
//		const addressXna08TP = await ControllerWpKUdkO.approveStrategy.call(addressa7Rq8Df, addresslNiy2Zc, {from: accounts[0]});
//		const uintZSsknbO = await ControllerWpKUdkO.getExpectedReturn.call(addressNTBMgwu, addressUZucJ6P, uintop7snPo, {from: accounts[5]});
//		const addressvle17VZ = await ControllerWpKUdkO.setVault.call(addressH8DlWNC, addressZ4fKtIY, {from: accounts[3]});

		await expect(ControllerWpKUdkO.setOneSplit.call(addressMqbfXpc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfWPSFv5 = accounts[1]
		const ControllerAXaqSyh = await Controller.new(addressfWPSFv5, {from: accounts[0]});
		const addressnEZv9N = "0x0000000000000000000000000000000000000001"
		const addressXcZljzk = accounts[5]
		const addressooNU3Mr = accounts[1]
		const uintFqchHxF = BigInt("1243")
		const addressFHzwgIn = "0x0000000000000000000000000000000000000001"
		const uintQNTC7G1 = BigInt("1521")
		const addressiP0scNq = "0x0000000000000000000000000000000000000001"
		const addressvR4SKFY = accounts[3]
		const addressC3LE8QZ = accounts[0]
//		const addressfhPC0yC = await ControllerAXaqSyh.setVault.call(addressXcZljzk, addressnEZv9N, {from: accounts[4]});
//		const addressP6SX1gq = await ControllerAXaqSyh.setStrategist.call(addressooNU3Mr, {from: accounts[3]});
//		const addresspYLsjIm = await ControllerAXaqSyh.earn.call(addressFHzwgIn, uintFqchHxF, {from: accounts[2]});
//		const addressZpvwhYH = await ControllerAXaqSyh.withdraw.call(addressiP0scNq, uintQNTC7G1, {from: accounts[2]});
//		const addresszMMUpiS = await ControllerAXaqSyh.setStrategy.call(addressC3LE8QZ, addressvR4SKFY, {from: accounts[2]});

		await expect(ControllerAXaqSyh.setVault.call(addressXcZljzk, addressnEZv9N, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMQuefG4 = accounts[1]
		const ControllerDXtUGY = await Controller.new(addressMQuefG4, {from: accounts[1]});
		const addressnY5J2ez = accounts[2]
		const addressXgtPve = accounts[1]
		const addresswm0AvRX = accounts[2]
		const addressgpL1s0G = "0x0000000000000000000000000000000000000001"
		const addressORd7J0H = accounts[3]
		const addressoXDxIrG = accounts[2]
		const addresspxE4KzC = accounts[2]
//		const addressxJr6YCw = await ControllerDXtUGY.setStrategist.call(addressnY5J2ez, {from: accounts[3]});
//		const addressA3xd2Kk = await ControllerDXtUGY.approveStrategy.call(addresswm0AvRX, addressXgtPve, {from: accounts[3]});
//		const addressxnBhYk = await ControllerDXtUGY.approveStrategy.call(addressORd7J0H, addressgpL1s0G, {from: accounts[3]});
//		const addressrnyaa0q = await ControllerDXtUGY.revokeStrategy.call(addresspxE4KzC, addressoXDxIrG, {from: accounts[3]});

		await expect(ControllerDXtUGY.setStrategist.call(addressnY5J2ez, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressyud7yLz = accounts[0]
		const ControllerUx9d22q = await Controller.new(addressyud7yLz, {from: accounts[1]});
		const addressrs4pzIM = "0x0000000000000000000000000000000000000001"
		const uintppei1pI = BigInt("1224")
		const addressPUki6I = accounts[3]
		const addressKsQrOE = accounts[4]
		const addressWl4xoel = accounts[3]
		const addresswjRxIC = accounts[0]
		const addresssRDHZOt = accounts[1]
		const addressomLnYGD = accounts[0]
//		const uintTZ2HNhc = await ControllerUx9d22q.balanceOf.call(addressrs4pzIM, {from: accounts[1]});
//		const addressyl3eGIu = await ControllerUx9d22q.yearn.call(addressKsQrOE, addressPUki6I, uintppei1pI, {from: accounts[0]});
//		const addressbopZJm3 = await ControllerUx9d22q.setStrategist.call(addressWl4xoel, {from: accounts[3]});
//		const uintGO1GDZ = await ControllerUx9d22q.balanceOf.call(addresswjRxIC, {from: accounts[0]});
//		const addressrpqqI8y = await ControllerUx9d22q.setStrategy.call(addressomLnYGD, addresssRDHZOt, {from: accounts[3]});

		await expect(ControllerUx9d22q.balanceOf.call(addressrs4pzIM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressRd4EVEl = "0x0000000000000000000000000000000000000001"
		const ControllerGVB0zLO = await Controller.new(addressRd4EVEl, {from: accounts[1]});
		const addressxFZmdsX = accounts[1]
		const addressFjOxpzn = accounts[2]
		const addressPyOgRsH = accounts[3]
		const address6LLVDT = accounts[3]
		const addresshJOpsY = accounts[3]
		const addressBi51zjh = accounts[2]
		const addressTDUz0L = accounts[0]
		const addressqXP8u8t = accounts[2]
//		const addressA5yTuFL = await ControllerGVB0zLO.inCaseStrategyTokenGetStuck.call(addressFjOxpzn, addressxFZmdsX, {from: accounts[0]});
//		const addressnLJzK0t = await ControllerGVB0zLO.inCaseStrategyTokenGetStuck.call(address6LLVDT, addressPyOgRsH, {from: accounts[1]});
//		const addressUyYhSjC = await ControllerGVB0zLO.setStrategist.call(addresshJOpsY, {from: accounts[4]});
//		const addressL3cIzxl = await ControllerGVB0zLO.inCaseStrategyTokenGetStuck.call(addressTDUz0L, addressBi51zjh, {from: accounts[0]});
//		const addresselVgg5c = await ControllerGVB0zLO.setOneSplit.call(addressqXP8u8t, {from: accounts[2]});

		await expect(ControllerGVB0zLO.inCaseStrategyTokenGetStuck.call(addressFjOxpzn, addressxFZmdsX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressovRslO6 = accounts[3]
		const ControllerjEDWu9j = await Controller.new(addressovRslO6, {from: accounts[2]});
		const uintqylmdq4 = BigInt("1191")
		const addressKYd4DjN = accounts[1]
//		const addresspRFvm0 = await ControllerjEDWu9j.inCaseTokensGetStuck.call(addressKYd4DjN, uintqylmdq4, {from: accounts[2]});

		await expect(ControllerjEDWu9j.inCaseTokensGetStuck.call(addressKYd4DjN, uintqylmdq4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressP3XO8t6 = accounts[1]
		const ControllerLMQJTyw = await Controller.new(addressP3XO8t6, {from: accounts[0]});
		const addresspRN84lv = accounts[1]
		const addresspidZJoj = accounts[5]
		const uintUL3YaCL = BigInt("1884")
		const addressHf93Pmr = accounts[5]
		const uintt1J8FDY = BigInt("592")
		const addresscQRCkg9 = accounts[3]
		const addressDU71ei0 = accounts[0]
		const addressxtN2O32 = await ControllerLMQJTyw.revokeStrategy.call(addresspidZJoj, addresspRN84lv, {from: accounts[0]});
//		const addressKEwGDC = await ControllerLMQJTyw.earn.call(addressHf93Pmr, uintUL3YaCL, {from: accounts[1]});
//		const uintgvpBlS1 = await ControllerLMQJTyw.setSplit.call(uintt1J8FDY, {from: accounts[4]});
//		const addressDqOIniO = await ControllerLMQJTyw.setOneSplit.call(addresscQRCkg9, {from: accounts[0]});
//		const addressleDbOm4 = await ControllerLMQJTyw.setGovernance.call(addressDU71ei0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerLMQJTyw.earn.call(addressHf93Pmr, uintUL3YaCL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressnU1EX4T = accounts[0]
		const ControllerGCvAgjJ = await Controller.new(addressnU1EX4T, {from: accounts[0]});
		const uintQNDG5Mm = BigInt("556")
		const addressW3LK6v = accounts[2]
		const addressyx5gS2 = accounts[4]
		const addressNonn2I = accounts[2]
		const addressjuQjJK7 = accounts[2]
		const addressf7SqCKR = accounts[5]
		const addressDqVghwL = accounts[4]
		const addressVOp9YFY = accounts[3]
		const addressI5Zfuq = accounts[5]
		const addressTBNaLhY = accounts[1]
//		const addressxyYD6QX = await ControllerGCvAgjJ.withdraw.call(addressW3LK6v, uintQNDG5Mm, {from: accounts[4]});
//		const addressyQya9G = await ControllerGCvAgjJ.setOneSplit.call(addressyx5gS2, {from: accounts[1]});
//		const addressOgO0RV = await ControllerGCvAgjJ.approveStrategy.call(addressjuQjJK7, addressNonn2I, {from: accounts[3]});
//		const addressTH5c83Y = await ControllerGCvAgjJ.approveStrategy.call(addressDqVghwL, addressf7SqCKR, {from: accounts[0]});
//		const addressqDlNJ5D = await ControllerGCvAgjJ.setConverter.call(addressTBNaLhY, addressI5Zfuq, addressVOp9YFY, {from: accounts[3]});

		await expect(ControllerGCvAgjJ.withdraw.call(addressW3LK6v, uintQNDG5Mm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressRadnWmH = accounts[0]
		const ControllerGCvAgjJ = await Controller.new(addressRadnWmH, {from: accounts[0]});
		const addressBI0bUG9 = accounts[4]
		const addressWdtLpIA = accounts[5]
		const addressQwMEIkI = accounts[1]
		const addressxMRpyHP = accounts[4]
		const addressjYY6L3 = accounts[4]
		const addressBnZkEwF = await ControllerGCvAgjJ.setGovernance.call(addressBI0bUG9, {from: accounts[0]});
//		const addressyQya9G = await ControllerGCvAgjJ.setOneSplit.call(addressWdtLpIA, {from: accounts[1]});
//		const addressqDlNJ5D = await ControllerGCvAgjJ.setConverter.call(addressjYY6L3, addressxMRpyHP, addressQwMEIkI, {from: accounts[3]});

		await expect(ControllerGCvAgjJ.setOneSplit.call(addressWdtLpIA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresscFlrLnT = accounts[1]
		const ControllerLMQJTyw = await Controller.new(addresscFlrLnT, {from: accounts[0]});
		const addressq3fr8sg = accounts[1]
		const addressQO495VM = accounts[5]
		const uintXNBLzyv = BigInt("221")
		const addressQsFX6qF = accounts[3]
		const addressDoCHos9 = accounts[3]
		const uintyFwAw4 = BigInt("592")
		const addressWdOOhBL = accounts[1]
		const addressxtN2O32 = await ControllerLMQJTyw.revokeStrategy.call(addressQO495VM, addressq3fr8sg, {from: accounts[0]});
//		const addressn817XM = await ControllerLMQJTyw.yearn.call(addressDoCHos9, addressQsFX6qF, uintXNBLzyv, {from: accounts[2]});
//		const uintgvpBlS1 = await ControllerLMQJTyw.setSplit.call(uintyFwAw4, {from: accounts[4]});
//		const addressleDbOm4 = await ControllerLMQJTyw.setGovernance.call(addressWdOOhBL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerLMQJTyw.yearn.call(addressDoCHos9, addressQsFX6qF, uintXNBLzyv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresspCNLMUp = accounts[0]
		const ControllerGCvAgjJ = await Controller.new(addresspCNLMUp, {from: accounts[0]});
		const addressUOs4B3 = accounts[3]
		const addressk0LvSms = accounts[4]
		const addressLZSaDP = accounts[4]
		const addressBZ5oTt = accounts[3]
		const addressI2x6HJd = accounts[1]
		const addresscFcyNB = accounts[3]
		const addressMCPeOG9 = accounts[2]
		const addressRWFJobV = accounts[4]
		const addresskX34fzb = accounts[4]
//		const addressqDlNJ5D = await ControllerGCvAgjJ.setConverter.call(addressLZSaDP, addressk0LvSms, addressUOs4B3, {from: accounts[3]});
//		const addressjU4ZVJ8 = await ControllerGCvAgjJ.inCaseStrategyTokenGetStuck.call(addressI2x6HJd, addressBZ5oTt, {from: accounts[2]});
//		const addressCYYNkfR = await ControllerGCvAgjJ.approveStrategy.call(addressMCPeOG9, addresscFcyNB, {from: accounts[2]});
//		const addressa3f4BdF = await ControllerGCvAgjJ.setStrategy.call(addresskX34fzb, addressRWFJobV, {from: accounts[5]});

		await expect(ControllerGCvAgjJ.setConverter.call(addressLZSaDP, addressk0LvSms, addressUOs4B3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskvBkDl = accounts[0]
		const ControllerGCvAgjJ = await Controller.new(addresskvBkDl, {from: accounts[0]});
		const addressdH8ovXh = accounts[1]
		const uintk0CEi7u = BigInt("556")
		const addressDEpj7KN = accounts[2]
		const addressj0ULgw = accounts[4]
		const addressTnM1fxT = accounts[4]
		const addresswOp4wcb = accounts[4]
		const addressf0Kq7OE = accounts[2]
		const addressbEJ5M9E = accounts[2]
		const addressBs3f8Nz = accounts[5]
		const addressiYOF3dH = accounts[4]
		const addressAfF7iKw = accounts[3]
		const addresslQj4mS = accounts[5]
		const addressqmTBH0u = accounts[1]
		const addressZCKkYPK = await ControllerGCvAgjJ.setRewards.call(addressdH8ovXh, {from: accounts[0]});
//		const addressxyYD6QX = await ControllerGCvAgjJ.withdraw.call(addressDEpj7KN, uintk0CEi7u, {from: accounts[4]});
//		const addressyQya9G = await ControllerGCvAgjJ.setOneSplit.call(addressj0ULgw, {from: accounts[1]});
//		const addressTBQzgNk = await ControllerGCvAgjJ.revokeStrategy.call(addresswOp4wcb, addressTnM1fxT, {from: accounts[0]});
//		const addressOgO0RV = await ControllerGCvAgjJ.approveStrategy.call(addressbEJ5M9E, addressf0Kq7OE, {from: accounts[3]});
//		const addressTH5c83Y = await ControllerGCvAgjJ.approveStrategy.call(addressiYOF3dH, addressBs3f8Nz, {from: accounts[0]});
//		const addressqDlNJ5D = await ControllerGCvAgjJ.setConverter.call(addressqmTBH0u, addresslQj4mS, addressAfF7iKw, {from: accounts[3]});

		await expect(ControllerGCvAgjJ.withdraw.call(addressDEpj7KN, uintk0CEi7u, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressIcfpljP = accounts[3]
		const ControllerjEDWu9j = await Controller.new(addressIcfpljP, {from: accounts[2]});
		const addresskRR2R0K = accounts[0]
		const uintMYmS7q = BigInt("592")
		const addresshCzIZOZ = accounts[0]
		const uintIYb7Up1 = BigInt("1162")
		const addresspfDiXGu = accounts[1]
//		const addressuqrtCQ1 = await ControllerjEDWu9j.withdrawAll.call(addresskRR2R0K, {from: accounts[0]});
//		const uintsDAnffp = await ControllerjEDWu9j.setSplit.call(uintMYmS7q, {from: accounts[3]});
//		const addresseGdgBF = await ControllerjEDWu9j.setGovernance.call(addresshCzIZOZ, {from: accounts[0]});
//		const addresspRFvm0 = await ControllerjEDWu9j.inCaseTokensGetStuck.call(addresspfDiXGu, uintIYb7Up1, {from: accounts[2]});

		await expect(ControllerjEDWu9j.withdrawAll.call(addresskRR2R0K, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressWT0ve7I = accounts[1]
		const ControllerLMQJTyw = await Controller.new(addressWT0ve7I, {from: accounts[0]});
		const uintH38OyrX = BigInt("1694")
		const addressTrT1rc8 = accounts[2]
		const addressp2ztgy9 = accounts[1]
		const uintUWQEBG = BigInt("592")
		const addressVFoZZeC = accounts[4]
		const addresscmun36O = accounts[4]
//		const uintKgY4Vww = await ControllerLMQJTyw.getExpectedReturn.call(addressp2ztgy9, addressTrT1rc8, uintH38OyrX, {from: accounts[2]});
//		const uintgvpBlS1 = await ControllerLMQJTyw.setSplit.call(uintUWQEBG, {from: accounts[4]});
//		const addressVAkxs1z = await ControllerLMQJTyw.approveStrategy.call(addresscmun36O, addressVFoZZeC, {from: accounts[3]});

		await expect(ControllerLMQJTyw.getExpectedReturn.call(addressp2ztgy9, addressTrT1rc8, uintH38OyrX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressU32ZVbc = accounts[0]
		const ControllerGCvAgjJ = await Controller.new(addressU32ZVbc, {from: accounts[0]});
		const addressc9iJMgl = accounts[0]
		const addresstMuOFaN = accounts[0]
		const addresssRyx5aj = "0x0000000000000000000000000000000000000001"
		const addressJSgBHd = accounts[1]
		const addressV9xVpyB = accounts[3]
		const addresscZ2HH1f = accounts[6]
//		const addressU3uZHl = await ControllerGCvAgjJ.setStrategy.call(addresstMuOFaN, addressc9iJMgl, {from: accounts[2]});
//		const addressnaMgDK0 = await ControllerGCvAgjJ.setConverter.call(addressV9xVpyB, addressJSgBHd, addresssRyx5aj, {from: accounts[1]});
//		const addressyQya9G = await ControllerGCvAgjJ.setOneSplit.call(addresscZ2HH1f, {from: accounts[1]});

		await expect(ControllerGCvAgjJ.setStrategy.call(addresstMuOFaN, addressc9iJMgl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresswHrXUY4 = accounts[0]
		const ControllerGCvAgjJ = await Controller.new(addresswHrXUY4, {from: accounts[0]});
		const addressKzxKfdF = accounts[4]
		const addressFXC0nyt = accounts[2]
		const addresslNU6Bv = accounts[1]
		const addressIBLiOS = accounts[0]
//		const addressFq0q22Q = await ControllerGCvAgjJ.setStrategy.call(addressFXC0nyt, addressKzxKfdF, {from: accounts[0]});
//		const addressBg0HkkL = await ControllerGCvAgjJ.setOneSplit.call(addresslNU6Bv, {from: "0x0000000000000000000000000000000000000001"});
//		const addressyQya9G = await ControllerGCvAgjJ.setOneSplit.call(addressIBLiOS, {from: accounts[1]});

		await expect(ControllerGCvAgjJ.setStrategy.call(addressFXC0nyt, addressKzxKfdF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressyZiiesf = accounts[0]
		const ControllerGCvAgjJ = await Controller.new(addressyZiiesf, {from: accounts[0]});
		const addressZbacjhI = accounts[2]
		const addressLAR1TVP = accounts[1]
		const uintDI4wyf3 = BigInt("556")
		const addressQWYthc = accounts[2]
		const addressMT0I9OL = accounts[4]
//		const addressHpzoY6h = await ControllerGCvAgjJ.approveStrategy.call(addressLAR1TVP, addressZbacjhI, {from: accounts[1]});
//		const addressxyYD6QX = await ControllerGCvAgjJ.withdraw.call(addressQWYthc, uintDI4wyf3, {from: accounts[4]});
//		const addressyQya9G = await ControllerGCvAgjJ.setOneSplit.call(addressMT0I9OL, {from: accounts[1]});

		await expect(ControllerGCvAgjJ.approveStrategy.call(addressLAR1TVP, addressZbacjhI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJdWMNEl = accounts[1]
		const ControllerLMQJTyw = await Controller.new(addressJdWMNEl, {from: accounts[0]});
		const uintHHq6l4P = BigInt("103")
		const addressKAfgkgd = accounts[1]
		const addressPNVdT5F = accounts[2]
		const uinthFHl0jY = BigInt("1758")
		const addressIKs0nZT = accounts[1]
		const addressjHu4TbI = accounts[2]
		const addressj6MZrcj = accounts[3]
		const uintyHcL0Ji = BigInt("592")
//		const addressxzsMOKU = await ControllerLMQJTyw.yearn.call(addressPNVdT5F, addressKAfgkgd, uintHHq6l4P, {from: accounts[0]});
//		const addressahYuAJN = await ControllerLMQJTyw.earn.call(addressIKs0nZT, uinthFHl0jY, {from: accounts[0]});
//		const addressSGhRxoe = await ControllerLMQJTyw.setVault.call(addressj6MZrcj, addressjHu4TbI, {from: accounts[3]});
//		const uintgvpBlS1 = await ControllerLMQJTyw.setSplit.call(uintyHcL0Ji, {from: accounts[4]});

		await expect(ControllerLMQJTyw.yearn.call(addressPNVdT5F, addressKAfgkgd, uintHHq6l4P, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressh9mbio = accounts[0]
		const ControllerGCvAgjJ = await Controller.new(addressh9mbio, {from: accounts[0]});
		const addressbJKaB7w = accounts[1]
		const uintoZywvgY = BigInt("556")
		const addresskJHnNIy = accounts[3]
		const addressFkvafU = await ControllerGCvAgjJ.setStrategist.call(addressbJKaB7w, {from: accounts[0]});
//		const addressxyYD6QX = await ControllerGCvAgjJ.withdraw.call(addresskJHnNIy, uintoZywvgY, {from: accounts[4]});

		await expect(ControllerGCvAgjJ.withdraw.call(addresskJHnNIy, uintoZywvgY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresszDrO0Lp = accounts[0]
		const ControllerGCvAgjJ = await Controller.new(addresszDrO0Lp, {from: accounts[0]});
		const addressKAWZ23 = accounts[4]
		const addressvKXzKyt = accounts[1]
		const uintemNLTJD = BigInt("547")
		const addressH4kbQYO = accounts[3]
		const addressJiBUaaw = await ControllerGCvAgjJ.setOneSplit.call(addressKAWZ23, {from: accounts[0]});
//		const addressMgBON1q = await ControllerGCvAgjJ.setGovernance.call(addressvKXzKyt, {from: accounts[2]});
//		const addressxyYD6QX = await ControllerGCvAgjJ.withdraw.call(addressH4kbQYO, uintemNLTJD, {from: accounts[4]});

		await expect(ControllerGCvAgjJ.setGovernance.call(addressvKXzKyt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressPq1WIPW = accounts[0]
		const ControllerGCvAgjJ = await Controller.new(addressPq1WIPW, {from: accounts[0]});
		const addressGis7549 = accounts[1]
		const uintCx9QfXj = BigInt("1159")
		const addressXlvN45 = accounts[3]
		const addressGL3a0mj = accounts[2]
		const addresshXC9OcG = accounts[2]
		const addressOGx0Df8 = accounts[5]
		const addressbGUrS7R = await ControllerGCvAgjJ.setRewards.call(addressGis7549, {from: accounts[0]});
		const uintB8EW9am = await ControllerGCvAgjJ.setSplit.call(uintCx9QfXj, {from: accounts[0]});
//		const addressCSwhxME = await ControllerGCvAgjJ.setStrategist.call(addressXlvN45, {from: accounts[3]});
//		const addressHpzoY6h = await ControllerGCvAgjJ.approveStrategy.call(addresshXC9OcG, addressGL3a0mj, {from: accounts[1]});
//		const addressa7efBs = await ControllerGCvAgjJ.setStrategist.call(addressOGx0Df8, {from: accounts[3]});

		await expect(ControllerGCvAgjJ.setStrategist.call(addressXlvN45, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMYglI1V = accounts[0]
		const ControllerGCvAgjJ = await Controller.new(addressMYglI1V, {from: accounts[0]});
		const addressFPFdMK = accounts[3]
		const addressm1fV9wu = accounts[2]
		const addressN3SeN6F = accounts[3]
		const addressHs84pKX = accounts[2]
		const addressTQpDitd = accounts[3]
		const uintNtqX0z5 = BigInt("545")
		const addressm9tgjg9 = accounts[3]
		const addressHcvQ40L = await ControllerGCvAgjJ.setConverter.call(addressN3SeN6F, addressm1fV9wu, addressFPFdMK, {from: accounts[0]});
//		const address6S4PO6 = await ControllerGCvAgjJ.setStrategy.call(addressTQpDitd, addressHs84pKX, {from: accounts[0]});
//		const addressxyYD6QX = await ControllerGCvAgjJ.withdraw.call(addressm9tgjg9, uintNtqX0z5, {from: accounts[4]});

		await expect(ControllerGCvAgjJ.setStrategy.call(addressTQpDitd, addressHs84pKX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address5qkNeO = accounts[0]
		const ControllerGCvAgjJ = await Controller.new(address5qkNeO, {from: accounts[0]});
		const addressvFA8pAd = accounts[4]
		const addressRmKx4i8 = accounts[1]
		const uintpscjJyc = BigInt("556")
		const addressPXZKHhl = accounts[4]
//		const addressPRKWXSO = await ControllerGCvAgjJ.inCaseStrategyTokenGetStuck.call(addressRmKx4i8, addressvFA8pAd, {from: accounts[0]});
//		const addressxyYD6QX = await ControllerGCvAgjJ.withdraw.call(addressPXZKHhl, uintpscjJyc, {from: accounts[4]});

		await expect(ControllerGCvAgjJ.inCaseStrategyTokenGetStuck.call(addressRmKx4i8, addressvFA8pAd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressphwBhtd = accounts[1]
		const ControllerLMQJTyw = await Controller.new(addressphwBhtd, {from: accounts[0]});
		const addresszKGxezN = accounts[4]
		const addresswx1nM8d = "0x0000000000000000000000000000000000000001"
		const uintDpV772m = BigInt("598")
		const uintv9bAcE = BigInt("639")
		const addressModYsd5 = accounts[1]
		const uintniLEbni = BigInt("266")
		const addressLqon2jd = accounts[1]
		const addressRivTd0g = await ControllerLMQJTyw.setVault.call(addresswx1nM8d, addresszKGxezN, {from: accounts[0]});
//		const uintgvpBlS1 = await ControllerLMQJTyw.setSplit.call(uintDpV772m, {from: accounts[4]});
//		const addressC13B6OG = await ControllerLMQJTyw.inCaseTokensGetStuck.call(addressModYsd5, uintv9bAcE, {from: accounts[0]});
//		const addressitSH4LH = await ControllerLMQJTyw.earn.call(addressLqon2jd, uintniLEbni, {from: accounts[2]});

		await expect(ControllerLMQJTyw.setSplit.call(uintDpV772m, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresspdL8zZy = accounts[0]
		const ControllerGCvAgjJ = await Controller.new(addresspdL8zZy, {from: accounts[0]});
		const addresskaAehZM = accounts[5]
		const uinty3zNZxD = BigInt("1781")
		const addressZthJd3c = accounts[1]
		const addressjWLPdh = accounts[2]
		const addressEfXDgAo = accounts[2]
//		const addresseh37eNV = await ControllerGCvAgjJ.withdrawAll.call(addresskaAehZM, {from: accounts[0]});
//		const addressiObp30D = await ControllerGCvAgjJ.earn.call(addressZthJd3c, uinty3zNZxD, {from: "0x0000000000000000000000000000000000000001"});
//		const addressHpzoY6h = await ControllerGCvAgjJ.approveStrategy.call(addressEfXDgAo, addressjWLPdh, {from: accounts[1]});

		await expect(ControllerGCvAgjJ.withdrawAll.call(addresskaAehZM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressdCQzvAY = accounts[0]
		const ControllerGCvAgjJ = await Controller.new(addressdCQzvAY, {from: accounts[0]});
		const addressWbUhAi = accounts[0]
		const addressUWcZdYT = accounts[5]
		const addressqDvm94p = accounts[2]
		const addressFZ5wU0a = accounts[1]
		const addressSyjakK = await ControllerGCvAgjJ.approveStrategy.call(addressUWcZdYT, addressWbUhAi, {from: accounts[0]});
//		const addressHpzoY6h = await ControllerGCvAgjJ.approveStrategy.call(addressFZ5wU0a, addressqDvm94p, {from: accounts[1]});

		await expect(ControllerGCvAgjJ.approveStrategy.call(addressFZ5wU0a, addressqDvm94p, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})