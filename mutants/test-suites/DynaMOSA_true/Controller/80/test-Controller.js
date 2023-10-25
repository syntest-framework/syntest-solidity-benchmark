const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressrGKHwm = accounts[2]
		const ControllerwxSeVYL = await Controller.new(addressrGKHwm, {from: accounts[1]});
		const uintWJLx5S = BigInt("737")
		const addressMrZOBqv = accounts[2]
		const addressZuiXiU3 = accounts[1]
		const addressPD9jMqr = accounts[1]
		const addressfQUwMlS = accounts[5]
		const addressMG1O7ez = accounts[2]
		const addressVC9MMpK = accounts[2]
		const uintMmesUPl = BigInt("1778")
		const addressP4Bl2In = "0x0000000000000000000000000000000000000001"
//		const addresscgkf2O0 = await ControllerwxSeVYL.withdraw.call(addressMrZOBqv, uintWJLx5S, {from: accounts[2]});
//		const addressEvYG4gJ = await ControllerwxSeVYL.inCaseStrategyTokenGetStuck.call(addressPD9jMqr, addressZuiXiU3, {from: accounts[3]});
//		const uintWYWuA6 = await ControllerwxSeVYL.balanceOf.call(addressfQUwMlS, {from: accounts[0]});
//		const addressZTE4SZq = await ControllerwxSeVYL.setVault.call(addressVC9MMpK, addressMG1O7ez, {from: accounts[5]});
//		const address7U866F = await ControllerwxSeVYL.earn.call(addressP4Bl2In, uintMmesUPl, {from: accounts[3]});

		await expect(ControllerwxSeVYL.withdraw.call(addressMrZOBqv, uintWJLx5S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressTkZFXIC = accounts[0]
		const ControllerwuqEUB = await Controller.new(addressTkZFXIC, {from: accounts[3]});
		const uintc4JtMzc = BigInt("1806")
		const addresssW9moJw = accounts[1]
		const addressYvJc3P6 = accounts[1]
		const uintpu28qfR = BigInt("1254")
		const addresslqvWKQL = accounts[3]
		const addressi84nyfn = accounts[4]
		const uintX6Nh2G = BigInt("1352")
		const addresszCSSjw = accounts[3]
		const addresszgWjZ7e = accounts[4]
		const addressv61v5sV = "0x0000000000000000000000000000000000000001"
		const addressUnBG9Ua = accounts[0]
		const addressokji5Wp = accounts[2]
//		const uinthZEa7NB = await ControllerwuqEUB.getExpectedReturn.call(addressYvJc3P6, addresssW9moJw, uintc4JtMzc, {from: accounts[0]});
//		const addressoJ7nvsG = await ControllerwuqEUB.yearn.call(addressi84nyfn, addresslqvWKQL, uintpu28qfR, {from: accounts[0]});
//		const address6f9v4A = await ControllerwuqEUB.withdraw.call(addresszCSSjw, uintX6Nh2G, {from: accounts[1]});
//		const addressbil9eC8 = await ControllerwuqEUB.revokeStrategy.call(addressv61v5sV, addresszgWjZ7e, {from: accounts[1]});
//		const addressNaxmOxO = await ControllerwuqEUB.revokeStrategy.call(addressokji5Wp, addressUnBG9Ua, {from: accounts[3]});

		await expect(ControllerwuqEUB.getExpectedReturn.call(addressYvJc3P6, addresssW9moJw, uintc4JtMzc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressi5BVo6R = "0x0000000000000000000000000000000000000001"
		const ControllerAs9850i = await Controller.new(addressi5BVo6R, {from: accounts[2]});
		const addressI1CJ9TP = accounts[2]
		const addresspX8jUn3 = accounts[2]
		const addressPaoIdu5 = accounts[4]
		const uintYW4j5UD = BigInt("531")
		const addresso44J8wj = "0x0000000000000000000000000000000000000001"
//		const addressQsdMad2 = await ControllerAs9850i.inCaseStrategyTokenGetStuck.call(addresspX8jUn3, addressI1CJ9TP, {from: accounts[4]});
//		const addressIji4hx = await ControllerAs9850i.setGovernance.call(addressPaoIdu5, {from: accounts[2]});
//		const addressQ7tPNiy = await ControllerAs9850i.inCaseTokensGetStuck.call(addresso44J8wj, uintYW4j5UD, {from: accounts[2]});

		await expect(ControllerAs9850i.inCaseStrategyTokenGetStuck.call(addresspX8jUn3, addressI1CJ9TP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressKMtnZXR = accounts[1]
		const ControllerEAWeVjQ = await Controller.new(addressKMtnZXR, {from: accounts[5]});
		const addressblqeTwv = accounts[0]
		const addressfmf0slc = accounts[3]
		const uintcU8BsdQ = BigInt("1195")
		const addresssDjpb0G = accounts[1]
		const addressXirttL = accounts[3]
		const addresss6QKXqZ = accounts[3]
		const addressPe3O8wd = accounts[1]
		const uintOAMENlH = BigInt("1094")
//		const addressXAy4u30 = await ControllerEAWeVjQ.revokeStrategy.call(addressfmf0slc, addressblqeTwv, {from: accounts[1]});
//		const uintxKKRQf2 = await ControllerEAWeVjQ.getExpectedReturn.call(addressXirttL, addresssDjpb0G, uintcU8BsdQ, {from: accounts[0]});
//		const addressE1wt6IM = await ControllerEAWeVjQ.revokeStrategy.call(addressPe3O8wd, addresss6QKXqZ, {from: accounts[5]});
//		const uinttzs2Q60 = await ControllerEAWeVjQ.setSplit.call(uintOAMENlH, {from: accounts[0]});

		await expect(ControllerEAWeVjQ.revokeStrategy.call(addressfmf0slc, addressblqeTwv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVMJh9zI = accounts[0]
		const Controllers5q6PZG = await Controller.new(addressVMJh9zI, {from: accounts[4]});
		const uintdbfWpv = BigInt("779")
		const addressMNc7yJU = accounts[0]
		const addressaJafN9u = accounts[1]
		const addressTE6iYQf = accounts[3]
		const addressag2iWMu = accounts[4]
		const addressEXYC2AL = accounts[1]
		const uintTYpAISl = BigInt("557")
		const addresscah1led = accounts[3]
		const addressMkYRfl6 = accounts[3]
//		const addressNNBAgbf = await Controllers5q6PZG.earn.call(addressMNc7yJU, uintdbfWpv, {from: "0x0000000000000000000000000000000000000001"});
//		const addressD7pRpI = await Controllers5q6PZG.approveStrategy.call(addressTE6iYQf, addressaJafN9u, {from: accounts[0]});
//		const addressiFTpYCW = await Controllers5q6PZG.approveStrategy.call(addressEXYC2AL, addressag2iWMu, {from: accounts[4]});
//		const addresskiX6aol = await Controllers5q6PZG.yearn.call(addressMkYRfl6, addresscah1led, uintTYpAISl, {from: accounts[1]});

		await expect(Controllers5q6PZG.earn.call(addressMNc7yJU, uintdbfWpv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressqiVdLYF = accounts[2]
		const Controlleru9RTTRT = await Controller.new(addressqiVdLYF, {from: accounts[0]});
		const addressFuJfJc = accounts[4]
		const addressHYYiWcJ = "0x0000000000000000000000000000000000000001"
		const addressvRPKoQD = accounts[2]
		const addressKOLRMP = accounts[3]
		const addressNlYlpzN = accounts[1]
//		const addressUrDOhuR = await Controlleru9RTTRT.setStrategist.call(addressFuJfJc, {from: accounts[4]});
//		const addressDnedgO = await Controlleru9RTTRT.revokeStrategy.call(addressvRPKoQD, addressHYYiWcJ, {from: accounts[5]});
//		const addressxrHuQgJ = await Controlleru9RTTRT.setGovernance.call(addressKOLRMP, {from: accounts[0]});
//		const addressOcDbFdg = await Controlleru9RTTRT.withdrawAll.call(addressNlYlpzN, {from: accounts[3]});

		await expect(Controlleru9RTTRT.setStrategist.call(addressFuJfJc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressUNLSxVG = accounts[4]
		const ControllermwfFQ8a = await Controller.new(addressUNLSxVG, {from: accounts[2]});
		const uintNBeXpiV = BigInt("250")
		const addressQPml5AM = "0x0000000000000000000000000000000000000001"
		const addresslwX2w3f = accounts[5]
		const addressEmYTPEh = accounts[0]
		const uintCwnNWET = BigInt("257")
		const addressEmrmYuX = accounts[0]
		const uintxbjWWEs = BigInt("1807")
		const address2VqO88 = accounts[4]
		const addressCRGKmVM = accounts[1]
//		const addressGey22ka = await ControllermwfFQ8a.inCaseTokensGetStuck.call(addressQPml5AM, uintNBeXpiV, {from: accounts[3]});
//		const addressK2KSjI = await ControllermwfFQ8a.setRewards.call(addresslwX2w3f, {from: "0x0000000000000000000000000000000000000001"});
//		const uintTUMsZF = await ControllermwfFQ8a.balanceOf.call(addressEmYTPEh, {from: accounts[2]});
//		const addressopSOX4 = await ControllermwfFQ8a.earn.call(addressEmrmYuX, uintCwnNWET, {from: accounts[3]});
//		const uintEWk0HSr = await ControllermwfFQ8a.getExpectedReturn.call(addressCRGKmVM, address2VqO88, uintxbjWWEs, {from: accounts[0]});

		await expect(ControllermwfFQ8a.inCaseTokensGetStuck.call(addressQPml5AM, uintNBeXpiV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressEPjVAq = accounts[4]
		const ControllerXPxqpYN = await Controller.new(addressEPjVAq, {from: accounts[3]});
		const uintXmGbHNT = BigInt("424")
		const addressQU25Yu = accounts[3]
		const addressE0YrgDv = accounts[2]
		const uintZYfkZMh = BigInt("1519")
		const uintNRqoNTr = BigInt("2031")
		const addressTQ03ZIy = accounts[0]
		const addressj8tDhKt = accounts[2]
		const addresslC6YIb = accounts[1]
//		const addressdsSlZIA = await ControllerXPxqpYN.yearn.call(addressE0YrgDv, addressQU25Yu, uintXmGbHNT, {from: accounts[4]});
//		const uintXZgylMW = await ControllerXPxqpYN.setSplit.call(uintZYfkZMh, {from: accounts[1]});
//		const addressa25KU4X = await ControllerXPxqpYN.inCaseTokensGetStuck.call(addressTQ03ZIy, uintNRqoNTr, {from: accounts[4]});
//		const addresslnTIX5r = await ControllerXPxqpYN.setStrategy.call(addresslC6YIb, addressj8tDhKt, {from: accounts[1]});

		await expect(ControllerXPxqpYN.yearn.call(addressE0YrgDv, addressQU25Yu, uintXmGbHNT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressuRcJzdw = accounts[4]
		const ControllerXPxqpYN = await Controller.new(addressuRcJzdw, {from: accounts[3]});
		const addresskzxdzTF = accounts[0]
		const addressv0bUSgz = accounts[0]
		const addressbMm2ESd = accounts[3]
		const uintzg82n1Z = BigInt("424")
		const addressOaul6vf = accounts[3]
		const addressRVGJgdv = accounts[2]
		const addressEoSvYTr = accounts[1]
		const addressBkyRgbJ = accounts[2]
		const uintAyIn99y = BigInt("1516")
		const uintR8wdAxc = BigInt("2031")
		const address8p1Hux = accounts[0]
		const addressXVw7C5k = accounts[0]
		const addressJ39sw7L = accounts[2]
		const addressxCU5ck8 = accounts[1]
//		const uintTFvEDLE = await ControllerXPxqpYN.balanceOf.call(addresskzxdzTF, {from: accounts[4]});
//		const addressufZZHLg = await ControllerXPxqpYN.approveStrategy.call(addressbMm2ESd, addressv0bUSgz, {from: accounts[5]});
//		const addressdsSlZIA = await ControllerXPxqpYN.yearn.call(addressRVGJgdv, addressOaul6vf, uintzg82n1Z, {from: accounts[4]});
//		const addressKNcZeig = await ControllerXPxqpYN.setStrategy.call(addressBkyRgbJ, addressEoSvYTr, {from: accounts[0]});
//		const uintXZgylMW = await ControllerXPxqpYN.setSplit.call(uintAyIn99y, {from: accounts[1]});
//		const addressa25KU4X = await ControllerXPxqpYN.inCaseTokensGetStuck.call(address8p1Hux, uintR8wdAxc, {from: accounts[4]});
//		const addressfPoOajy = await ControllerXPxqpYN.setOneSplit.call(addressXVw7C5k, {from: accounts[4]});
//		const addresslnTIX5r = await ControllerXPxqpYN.setStrategy.call(addressxCU5ck8, addressJ39sw7L, {from: accounts[1]});

		await expect(ControllerXPxqpYN.balanceOf.call(addresskzxdzTF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressWeJDylj = accounts[4]
		const ControllerfAgjOgK = await Controller.new(addressWeJDylj, {from: accounts[3]});
		const uinthUQvu9D = BigInt("170")
		const addressbotLuBA = accounts[4]
		const addressmVMIeRz = accounts[0]
		const addressaxiZLTW = accounts[1]
		const addressHU6pTR5 = accounts[2]
		const addressycIyOLv = accounts[4]
		const addresso59xNbE = "0x0000000000000000000000000000000000000001"
		const uintIfXEFsQ = BigInt("1199")
		const addressRvSVO8F = accounts[5]
//		const addressOzjDuRQ = await ControllerfAgjOgK.yearn.call(addressmVMIeRz, addressbotLuBA, uinthUQvu9D, {from: accounts[3]});
//		const addressjojRcb = await ControllerfAgjOgK.setConverter.call(addressycIyOLv, addressHU6pTR5, addressaxiZLTW, {from: "0x0000000000000000000000000000000000000001"});
//		const uintoan1zGb = await ControllerfAgjOgK.balanceOf.call(addresso59xNbE, {from: "0x0000000000000000000000000000000000000001"});
//		const uintg7dfbQM = await ControllerfAgjOgK.setSplit.call(uintIfXEFsQ, {from: accounts[4]});
//		const addresssxDRsh4 = await ControllerfAgjOgK.withdrawAll.call(addressRvSVO8F, {from: accounts[3]});

		await expect(ControllerfAgjOgK.yearn.call(addressmVMIeRz, addressbotLuBA, uinthUQvu9D, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressixl1bUv = "0x0000000000000000000000000000000000000001"
		const ControllerAs9850i = await Controller.new(addressixl1bUv, {from: accounts[2]});
		const addressKz0rKPT = accounts[2]
		const addressYLKzJlJ = accounts[0]
		const addressZJay31K = accounts[2]
		const addressN7MErBu = accounts[2]
		const addressxtZfHKY = accounts[4]
//		const addressmvDTrQk = await ControllerAs9850i.setVault.call(addressYLKzJlJ, addressKz0rKPT, {from: accounts[0]});
//		const addressQsdMad2 = await ControllerAs9850i.inCaseStrategyTokenGetStuck.call(addressN7MErBu, addressZJay31K, {from: accounts[4]});
//		const addressIji4hx = await ControllerAs9850i.setGovernance.call(addressxtZfHKY, {from: accounts[2]});

		await expect(ControllerAs9850i.setVault.call(addressYLKzJlJ, addressKz0rKPT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressYxsBGGg = accounts[0]
		const Controllers5q6PZG = await Controller.new(addressYxsBGGg, {from: accounts[4]});
		const addressHUy6EV = accounts[4]
		const addresseGlVz49 = accounts[1]
		const uintND0vM4y = BigInt("557")
		const addressIbmqGDu = accounts[0]
		const addressHDYQN8 = accounts[3]
		const addressiFTpYCW = await Controllers5q6PZG.approveStrategy.call(addresseGlVz49, addressHUy6EV, {from: accounts[4]});
//		const addresskiX6aol = await Controllers5q6PZG.yearn.call(addressHDYQN8, addressIbmqGDu, uintND0vM4y, {from: accounts[1]});

		await expect(Controllers5q6PZG.yearn.call(addressHDYQN8, addressIbmqGDu, uintND0vM4y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressQE5vjbr = accounts[1]
		const ControllerEAWeVjQ = await Controller.new(addressQE5vjbr, {from: accounts[5]});
		const uintBAuxRMq = BigInt("631")
		const addressyOWMTOd = accounts[0]
		const addresswiELRBX = "0x0000000000000000000000000000000000000001"
		const addressPsOrcs = accounts[4]
		const addressWvhQPYk = accounts[3]
		const addressDykVL7E = accounts[4]
		const addressrCwsBz6 = accounts[1]
		const uintjEhtRUZ = BigInt("1094")
//		const addressmG9BcV9 = await ControllerEAWeVjQ.inCaseTokensGetStuck.call(addressyOWMTOd, uintBAuxRMq, {from: accounts[5]});
//		const addressw9OzxXn = await ControllerEAWeVjQ.setStrategist.call(addresswiELRBX, {from: accounts[3]});
//		const addressXAy4u30 = await ControllerEAWeVjQ.revokeStrategy.call(addressWvhQPYk, addressPsOrcs, {from: accounts[1]});
//		const addressE1wt6IM = await ControllerEAWeVjQ.revokeStrategy.call(addressrCwsBz6, addressDykVL7E, {from: accounts[5]});
//		const uinttzs2Q60 = await ControllerEAWeVjQ.setSplit.call(uintjEhtRUZ, {from: accounts[0]});

		await expect(ControllerEAWeVjQ.inCaseTokensGetStuck.call(addressyOWMTOd, uintBAuxRMq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressPrttEBE = accounts[4]
		const ControllerusYOj6b = await Controller.new(addressPrttEBE, {from: accounts[2]});
		const uintjZMzdQi = BigInt("604")
		const uintKZhy3Zr = BigInt("1548")
		const addressmuXXJSC = accounts[5]
		const addressjKzS3wl = "0x0000000000000000000000000000000000000001"
		const addressKqPDt7 = accounts[5]
		const addressri3WZA = "0x0000000000000000000000000000000000000001"
		const addressKO1M4N0 = accounts[2]
//		const uintvRMuPEU = await ControllerusYOj6b.setSplit.call(uintjZMzdQi, {from: "0x0000000000000000000000000000000000000001"});
//		const addressl8I6Y5a = await ControllerusYOj6b.withdraw.call(addressmuXXJSC, uintKZhy3Zr, {from: accounts[0]});
//		const addressVZckvh1 = await ControllerusYOj6b.setConverter.call(addressri3WZA, addressKqPDt7, addressjKzS3wl, {from: "0x0000000000000000000000000000000000000001"});
//		const addressEZaVMRd = await ControllerusYOj6b.setOneSplit.call(addressKO1M4N0, {from: accounts[4]});

		await expect(ControllerusYOj6b.setSplit.call(uintjZMzdQi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMfEYLq = accounts[5]
		const ControllershlSdr = await Controller.new(addressMfEYLq, {from: accounts[1]});
		const addressHvsFWD = accounts[2]
		const addressC2mmK8 = accounts[4]
		const addressoIFZL7S = accounts[5]
		const addressXifSeAu = accounts[2]
		const addressl8vx1nR = accounts[0]
		const addressN1tLmgw = accounts[2]
		const addressFVA1lYH = accounts[3]
//		const addressagcbu2 = await ControllershlSdr.withdrawAll.call(addressHvsFWD, {from: "0x0000000000000000000000000000000000000001"});
//		const addressZlZAX3m = await ControllershlSdr.inCaseStrategyTokenGetStuck.call(addressoIFZL7S, addressC2mmK8, {from: accounts[3]});
//		const addressm5bQVxt = await ControllershlSdr.revokeStrategy.call(addressl8vx1nR, addressXifSeAu, {from: accounts[2]});
//		const addressEqaCueR = await ControllershlSdr.setVault.call(addressFVA1lYH, addressN1tLmgw, {from: accounts[1]});

		await expect(ControllershlSdr.withdrawAll.call(addressHvsFWD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressiVBhRn5 = accounts[4]
		const ControllerYfMKIUI = await Controller.new(addressiVBhRn5, {from: accounts[0]});
		const addressoZFoYQN = accounts[1]
		const addresssMo0oZl = accounts[1]
		const uintZugsKt = BigInt("531")
		const addressQiwm3iQ = accounts[0]
		const uintQytDYHm = BigInt("752")
		const addressDlZ0PY = accounts[0]
//		const addressYZJ9cdr = await ControllerYfMKIUI.setGovernance.call(addressoZFoYQN, {from: accounts[3]});
//		const addresshOy3Rj9 = await ControllerYfMKIUI.setStrategist.call(addresssMo0oZl, {from: accounts[4]});
//		const addressRuwMKgr = await ControllerYfMKIUI.earn.call(addressQiwm3iQ, uintZugsKt, {from: accounts[2]});
//		const addressVL8BHpp = await ControllerYfMKIUI.inCaseTokensGetStuck.call(addressDlZ0PY, uintQytDYHm, {from: accounts[1]});

		await expect(ControllerYfMKIUI.setGovernance.call(addressoZFoYQN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressPHrWq1p = accounts[4]
		const ControllerusYOj6b = await Controller.new(addressPHrWq1p, {from: accounts[2]});
		const addressihhRQ0z = accounts[1]
		const addressWkqlXRM = accounts[4]
		const addresseXNgx4G = "0x0000000000000000000000000000000000000001"
		const addresswusm3AZ = accounts[4]
		const addressy9qLlBE = accounts[4]
//		const addressVZckvh1 = await ControllerusYOj6b.setConverter.call(addresseXNgx4G, addressWkqlXRM, addressihhRQ0z, {from: "0x0000000000000000000000000000000000000001"});
//		const addressx4wnsRw = await ControllerusYOj6b.approveStrategy.call(addressy9qLlBE, addresswusm3AZ, {from: accounts[4]});

		await expect(ControllerusYOj6b.setConverter.call(addresseXNgx4G, addressWkqlXRM, addressihhRQ0z, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxSxo9Q = accounts[4]
		const ControllerYfMKIUI = await Controller.new(addressxSxo9Q, {from: accounts[0]});
		const addressBgLYCKu = accounts[0]
		const addressUQkYZS3 = accounts[2]
		const addressNCoXrOv = accounts[1]
		const uintgCIruK3 = BigInt("1393")
		const address4VXFS8 = accounts[4]
		const uintLyyMtD = BigInt("752")
		const addressq34AfS = accounts[5]
		const addressoMvr7Ve = accounts[3]
		const addressLLJ9zd = accounts[2]
//		const addressC2AfDlV = await ControllerYfMKIUI.setOneSplit.call(addressBgLYCKu, {from: accounts[1]});
//		const addressv9NHMnK = await ControllerYfMKIUI.setVault.call(addressNCoXrOv, addressUQkYZS3, {from: accounts[5]});
//		const addressaRDtwOJ = await ControllerYfMKIUI.inCaseTokensGetStuck.call(address4VXFS8, uintgCIruK3, {from: "0x0000000000000000000000000000000000000001"});
//		const addressVL8BHpp = await ControllerYfMKIUI.inCaseTokensGetStuck.call(addressq34AfS, uintLyyMtD, {from: accounts[1]});
//		const addressqXCdeyp = await ControllerYfMKIUI.setStrategist.call(addressoMvr7Ve, {from: accounts[1]});
//		const addresszU2gfIz = await ControllerYfMKIUI.withdrawAll.call(addressLLJ9zd, {from: accounts[2]});

		await expect(ControllerYfMKIUI.setOneSplit.call(addressBgLYCKu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressOSPw7bp = accounts[3]
		const ControllerAmwz5Ub = await Controller.new(addressOSPw7bp, {from: accounts[0]});
		const addressNYvC4xu = accounts[2]
		const addresszEY356v = accounts[5]
		const addressX9In9DV = accounts[3]
		const addressyrytmdi = accounts[3]
		const addressRnt18uK = accounts[5]
		const addressqiu47k2 = accounts[2]
		const addresssrtVUZS = await ControllerAmwz5Ub.revokeStrategy.call(addresszEY356v, addressNYvC4xu, {from: accounts[0]});
//		const addressxK3g3Ul = await ControllerAmwz5Ub.setConverter.call(addressRnt18uK, addressyrytmdi, addressX9In9DV, {from: "0x0000000000000000000000000000000000000001"});
//		const addressppEe86z = await ControllerAmwz5Ub.setGovernance.call(addressqiu47k2, {from: accounts[3]});

		await expect(ControllerAmwz5Ub.setConverter.call(addressRnt18uK, addressyrytmdi, addressX9In9DV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJzX1ao = accounts[4]
		const ControllerusYOj6b = await Controller.new(addressJzX1ao, {from: accounts[2]});
		const addresskvJqrFd = accounts[3]
		const addressNYZxrTv = accounts[4]
		const addressWgz4OiL = accounts[1]
		const addressDUqPNAW = accounts[4]
		const addressBKpqksh = accounts[5]
		const addressdtyswKx = accounts[4]
		const addressSl5a5zc = await ControllerusYOj6b.setConverter.call(addressWgz4OiL, addressNYZxrTv, addresskvJqrFd, {from: accounts[2]});
//		const addressVZckvh1 = await ControllerusYOj6b.setConverter.call(addressdtyswKx, addressBKpqksh, addressDUqPNAW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerusYOj6b.setConverter.call(addressdtyswKx, addressBKpqksh, addressDUqPNAW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresslRlDUMe = accounts[4]
		const ControllerusYOj6b = await Controller.new(addresslRlDUMe, {from: accounts[2]});
		const addresstLKseFr = accounts[3]
		const addressJ4v6jza = accounts[3]
		const uintFVnoauY = BigInt("1696")
		const addressOgmksa = accounts[2]
		const addresstEBO8T0 = accounts[4]
		const addressfnox5B = accounts[4]
		const addressUbGX5Lr = "0x0000000000000000000000000000000000000001"
//		const addressnutaFv1 = await ControllerusYOj6b.setStrategy.call(addressJ4v6jza, addresstLKseFr, {from: accounts[4]});
//		const addressK735OtW = await ControllerusYOj6b.earn.call(addressOgmksa, uintFVnoauY, {from: accounts[1]});
//		const addressVZckvh1 = await ControllerusYOj6b.setConverter.call(addressUbGX5Lr, addressfnox5B, addresstEBO8T0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerusYOj6b.setStrategy.call(addressJ4v6jza, addresstLKseFr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresschroBNq = accounts[4]
		const ControllerusYOj6b = await Controller.new(addresschroBNq, {from: accounts[2]});
		const addressuk4zNPL = accounts[3]
		const addressgtInCjW = accounts[3]
		const addressFga5hh3 = accounts[3]
		const uintYAzXstU = BigInt("1696")
		const addresskABNzQW = accounts[2]
		const addressEQcXzyd = accounts[4]
		const addressHloIzef = accounts[4]
		const addressFjZq9AS = accounts[0]
//		const addressVg7EcUn = await ControllerusYOj6b.setRewards.call(addressuk4zNPL, {from: accounts[1]});
//		const addressnutaFv1 = await ControllerusYOj6b.setStrategy.call(addressFga5hh3, addressgtInCjW, {from: accounts[4]});
//		const addressK735OtW = await ControllerusYOj6b.earn.call(addresskABNzQW, uintYAzXstU, {from: accounts[1]});
//		const addressVZckvh1 = await ControllerusYOj6b.setConverter.call(addressFjZq9AS, addressHloIzef, addressEQcXzyd, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerusYOj6b.setRewards.call(addressuk4zNPL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjQB4m1g = accounts[4]
		const ControllerSdnQ9YN = await Controller.new(addressjQB4m1g, {from: accounts[4]});
		const addressj2XMk2b = accounts[4]
		const addressDZvjr4F = accounts[0]
		const addressoQVyHr7 = accounts[0]
		const addressn4Lf3zq = accounts[0]
		const addresscerr83r = accounts[4]
		const addressTdeZYMU = accounts[3]
		const addressplKlp52 = await ControllerSdnQ9YN.setRewards.call(addressj2XMk2b, {from: accounts[4]});
//		const addressnjC9f31 = await ControllerSdnQ9YN.setConverter.call(addressn4Lf3zq, addressoQVyHr7, addressDZvjr4F, {from: accounts[3]});
//		const addresslXBces8 = await ControllerSdnQ9YN.setGovernance.call(addresscerr83r, {from: accounts[5]});
//		const addresstZGXYkr = await ControllerSdnQ9YN.withdrawAll.call(addressTdeZYMU, {from: accounts[1]});

		await expect(ControllerSdnQ9YN.setConverter.call(addressn4Lf3zq, addressoQVyHr7, addressDZvjr4F, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresstozxVRP = "0x0000000000000000000000000000000000000001"
		const ControllerAs9850i = await Controller.new(addresstozxVRP, {from: accounts[2]});
		const addressnX98WCB = accounts[4]
		const uintcpE3YbW = BigInt("531")
		const addressyC2E4d0 = "0x0000000000000000000000000000000000000001"
		const addressIji4hx = await ControllerAs9850i.setGovernance.call(addressnX98WCB, {from: accounts[2]});
//		const addressQ7tPNiy = await ControllerAs9850i.inCaseTokensGetStuck.call(addressyC2E4d0, uintcpE3YbW, {from: accounts[2]});

		await expect(ControllerAs9850i.inCaseTokensGetStuck.call(addressyC2E4d0, uintcpE3YbW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressQ0gwMrD = accounts[5]
		const ControllershlSdr = await Controller.new(addressQ0gwMrD, {from: accounts[1]});
		const uintkj7hhPY = BigInt("923")
		const addressP4eAMo = accounts[2]
		const addressqcEw7S = accounts[4]
		const addresslI5atzZ = accounts[5]
		const addressWZ2x2fw = accounts[2]
		const addressP5EJwk5 = accounts[3]
		const uintS74c4zE = await ControllershlSdr.setSplit.call(uintkj7hhPY, {from: accounts[1]});
//		const addressagcbu2 = await ControllershlSdr.withdrawAll.call(addressP4eAMo, {from: "0x0000000000000000000000000000000000000001"});
//		const addressZlZAX3m = await ControllershlSdr.inCaseStrategyTokenGetStuck.call(addresslI5atzZ, addressqcEw7S, {from: accounts[3]});
//		const addressEqaCueR = await ControllershlSdr.setVault.call(addressP5EJwk5, addressWZ2x2fw, {from: accounts[1]});

		await expect(ControllershlSdr.withdrawAll.call(addressP4eAMo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressDiCVvdu = "0x0000000000000000000000000000000000000001"
		const ControllerAs9850i = await Controller.new(addressDiCVvdu, {from: accounts[2]});
		const addressRwbe8OD = accounts[5]
		const addressz3GCty7 = accounts[0]
		const addressAnghwNt = accounts[2]
		const addressWsIpslP = accounts[2]
		const addressmPfoKoh = accounts[1]
		const addressmxpmBPh = accounts[6]
//		const addresskMTzQMm = await ControllerAs9850i.inCaseStrategyTokenGetStuck.call(addressz3GCty7, addressRwbe8OD, {from: accounts[2]});
//		const addressQsdMad2 = await ControllerAs9850i.inCaseStrategyTokenGetStuck.call(addressWsIpslP, addressAnghwNt, {from: accounts[4]});
//		const addressVDfR2Ri = await ControllerAs9850i.setOneSplit.call(addressmPfoKoh, {from: accounts[0]});
//		const addressIji4hx = await ControllerAs9850i.setGovernance.call(addressmxpmBPh, {from: accounts[2]});

		await expect(ControllerAs9850i.inCaseStrategyTokenGetStuck.call(addressz3GCty7, addressRwbe8OD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfDmn95 = accounts[0]
		const Controllers5q6PZG = await Controller.new(addressfDmn95, {from: accounts[4]});
		const addresspUqUWsB = "0x0000000000000000000000000000000000000001"
		const addressLW6ziCt = accounts[3]
		const uintb0x9Hbd = BigInt("779")
		const addressjIhJcjy = accounts[1]
		const address86BHY1 = await Controllers5q6PZG.setVault.call(addressLW6ziCt, addresspUqUWsB, {from: accounts[4]});
//		const addressNNBAgbf = await Controllers5q6PZG.earn.call(addressjIhJcjy, uintb0x9Hbd, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllers5q6PZG.earn.call(addressjIhJcjy, uintb0x9Hbd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressvP3gLzY = accounts[1]
		const ControllerudLvfwE = await Controller.new(addressvP3gLzY, {from: "0x0000000000000000000000000000000000000001"});
		const addressR1OeYg3 = accounts[1]
		const addresszhp9PIU = accounts[0]
		const uintqi5mqQ7 = BigInt("587")
		const addressoMShsX = accounts[5]
		const uintRy5KrKA = BigInt("127")
		const addressYvLrh7C = "0x0000000000000000000000000000000000000001"
		const addressCanSSA = accounts[1]
		const uintRY7fQl7 = await ControllerudLvfwE.balanceOf.call(addressR1OeYg3, {from: "0x0000000000000000000000000000000000000001"});
		const addressCKXWnHa = await ControllerudLvfwE.setStrategist.call(addresszhp9PIU, {from: accounts[4]});
		const uint3SoOlG = await ControllerudLvfwE.setSplit.call(uintqi5mqQ7, {from: accounts[4]});
		const addressOdByLp2 = await ControllerudLvfwE.withdrawAll.call(addressoMShsX, {from: accounts[1]});
		const addressDptfUbe = await ControllerudLvfwE.inCaseTokensGetStuck.call(addressYvLrh7C, uintRy5KrKA, {from: accounts[5]});
		const uintFZQRGUV = await ControllerudLvfwE.balanceOf.call(addressCanSSA, {from: accounts[3]});
	});

	it('test for Controller', async () => {
		const addressM3YdMX9 = accounts[4]
		const ControllerusYOj6b = await Controller.new(addressM3YdMX9, {from: accounts[2]});
		const addressBXqY0Bw = accounts[3]
		const addressq03lzOp = accounts[1]
		const addresswfMrtly = "0x0000000000000000000000000000000000000001"
		const addressMTraCl0 = accounts[1]
		const uintSoEqhYD = BigInt("1548")
		const addressS5OKYcY = accounts[6]
		const addressMs0pqGU = await ControllerusYOj6b.setStrategist.call(addressBXqY0Bw, {from: accounts[2]});
//		const addressLOTgwv = await ControllerusYOj6b.inCaseStrategyTokenGetStuck.call(addresswfMrtly, addressq03lzOp, {from: accounts[1]});
//		const addresssKGE9yF = await ControllerusYOj6b.setGovernance.call(addressMTraCl0, {from: accounts[1]});
//		const addressl8I6Y5a = await ControllerusYOj6b.withdraw.call(addressS5OKYcY, uintSoEqhYD, {from: accounts[0]});

		await expect(ControllerusYOj6b.inCaseStrategyTokenGetStuck.call(addresswfMrtly, addressq03lzOp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressrfPCiFR = accounts[4]
		const ControllerfAgjOgK = await Controller.new(addressrfPCiFR, {from: accounts[3]});
		const addressKo9oGI4 = accounts[0]
		const uintcmWB7Pi = BigInt("171")
		const addressnXhieJE = accounts[4]
		const addressWLI6laX = accounts[0]
		const addresskoXJfNP = accounts[5]
//		const addressb8GMG3J = await ControllerfAgjOgK.withdrawAll.call(addressKo9oGI4, {from: accounts[3]});
//		const addressOzjDuRQ = await ControllerfAgjOgK.yearn.call(addressWLI6laX, addressnXhieJE, uintcmWB7Pi, {from: accounts[3]});
//		const uintUAsHkI = await ControllerfAgjOgK.balanceOf.call(addresskoXJfNP, {from: accounts[0]});

		await expect(ControllerfAgjOgK.withdrawAll.call(addressKo9oGI4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressF1d0tBK = accounts[0]
		const Controllers5q6PZG = await Controller.new(addressF1d0tBK, {from: accounts[4]});
		const addressSb84G2i = accounts[3]
		const addressCTUCDV3 = accounts[4]
		const uintCmwJSP2 = BigInt("84")
		const addressxQJ5iC = accounts[0]
		const addressu5BuS0U = accounts[4]
		const uintw1sh8RN = BigInt("779")
		const addresssg3lLoe = accounts[0]
//		const addressoYt7dSL = await Controllers5q6PZG.setStrategy.call(addressCTUCDV3, addressSb84G2i, {from: accounts[4]});
//		const addressJPZMraV = await Controllers5q6PZG.yearn.call(addressu5BuS0U, addressxQJ5iC, uintCmwJSP2, {from: accounts[5]});
//		const addressNNBAgbf = await Controllers5q6PZG.earn.call(addresssg3lLoe, uintw1sh8RN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllers5q6PZG.setStrategy.call(addressCTUCDV3, addressSb84G2i, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressULUlShW = accounts[0]
		const Controllers5q6PZG = await Controller.new(addressULUlShW, {from: accounts[4]});
		const addressQhVwFr6 = accounts[4]
		const uintmz0SLun = BigInt("779")
		const addressv1Ayewi = accounts[4]
		const addresscmJ3cak = accounts[4]
		const addressiXUdsfd = accounts[2]
		const addressZZXJiKh = accounts[0]
		const addresskFHLAOF = accounts[0]
		const addressWgymhG = await Controllers5q6PZG.setOneSplit.call(addressQhVwFr6, {from: accounts[4]});
//		const addressNNBAgbf = await Controllers5q6PZG.earn.call(addressv1Ayewi, uintmz0SLun, {from: "0x0000000000000000000000000000000000000001"});
//		const addressUxpHxq7 = await Controllers5q6PZG.setVault.call(addressiXUdsfd, addresscmJ3cak, {from: accounts[1]});
//		const addressSqU1Myb = await Controllers5q6PZG.revokeStrategy.call(addresskFHLAOF, addressZZXJiKh, {from: accounts[4]});

		await expect(Controllers5q6PZG.earn.call(addressv1Ayewi, uintmz0SLun, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})