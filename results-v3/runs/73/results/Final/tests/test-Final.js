const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringJgyONQi = "21CFpqWqLHDiyGMDHL6e2HHp6RjADZLqn4qYIDu"
		const stringhYkKAL1 = "VFKgyzoTdTA3Tg3jGm2ttxjn6W6ptmQOJLnokc3HDrEaNfVEc24IMllNCXWpQmaDLDn3NORi95Z9XU7PDNL8uR1ka"
		const uintNLsMAJ = BigInt("64")
		const FinalTKkZY7 = await Final.new(stringJgyONQi, stringhYkKAL1, uintNLsMAJ, {from: accounts[0]});
		const uintzTHu4Su = BigInt("1175")
		const address3yBbgZ = "0x0000000000000000000000000000000000000001"
		const uintDY9Busl = BigInt("800")
		const addressLmqgIUF = accounts[1]
		const addressMc59HYF = accounts[0]
		const stringPne4D1b = await FinalTKkZY7.name.call({from: accounts[3]});
		const boolrMPssAG = await FinalTKkZY7.transfer.call(address3yBbgZ, uintzTHu4Su, {from: "0x0000000000000000000000000000000000000001"});
		const boolC0lXCSS = await FinalTKkZY7.transferFrom.call(addressMc59HYF, addressLmqgIUF, uintDY9Busl, {from: accounts[1]});

		assert.equal(stringPne4D1b, "21CFpqWqLHDiyGMDHL6e2HHp6RjADZLqn4qYIDu")
		await expect(FinalTKkZY7.transfer.call(address3yBbgZ, uintzTHu4Su, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringH8LvHrA = "cQMKMDROqc0xJO95"
		const stringUiJ24GV = "c4lcJStrSHSaPcpNh82om4AEcL87jAmMQj2RAfVJ2pAxne4enJcv2oa9YoNqxCGs3bs9iyYfIk31wwp1QUxG"
		const uintkDL2glK = BigInt("547")
		const FinalXxk0JkL = await Final.new(stringH8LvHrA, stringUiJ24GV, uintkDL2glK, {from: accounts[3]});
		const uintzJrI03 = BigInt("266")
		const addresshU4XG1 = accounts[3]
		const addressjXEwcK = accounts[3]
		const uintNLRDfGf = BigInt("1")
		const addressLcQVzbh = accounts[1]
		const boolSXCTtO7 = await FinalXxk0JkL.decreaseAllowance.call(addresshU4XG1, uintzJrI03, {from: accounts[0]});
		const uint8Hx98oU = await FinalXxk0JkL.decimals.call({from: accounts[1]});
		const stringWkBQhgc = await FinalXxk0JkL.symbol.call({from: accounts[4]});
		const uintlb3wy3Y = await FinalXxk0JkL.balanceOf.call(addressjXEwcK, {from: accounts[0]});
		const boolM2vzm6l = await FinalXxk0JkL.transfer.call(addressLcQVzbh, uintNLRDfGf, {from: accounts[2]});

		await expect(FinalXxk0JkL.decreaseAllowance.call(addresshU4XG1, uintzJrI03, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringSETVUaz = "KYxzzpV"
		const stringevyVzOW = "9iKA8rfvtBTuC9leZxMn6ov7JowWJssxWwrMDbgfVjpqATyBCk2GnnGIk5w56CP6EwGdsDzkqsza99Rod"
		const uintzunyG9r = BigInt("1412")
		const FinalNhA6UjD = await Final.new(stringSETVUaz, stringevyVzOW, uintzunyG9r, {from: accounts[2]});
		const uintAUXnCd0 = BigInt("446")
		const addressXC97cfp = accounts[1]
		const uintnxE5IbT = BigInt("428")
		const addressyhyQhsQ = accounts[2]
		const booldihNPCj = await FinalNhA6UjD.approve.call(addressXC97cfp, uintAUXnCd0, {from: accounts[1]});
		const boolgEz02Fz = await FinalNhA6UjD.increaseAllowance.call(addressyhyQhsQ, uintnxE5IbT, {from: accounts[1]});
		const uint8wH18dxc = await FinalNhA6UjD.decimals.call({from: accounts[3]});

		assert.equal(booldihNPCj, true)
		await expect(FinalNhA6UjD.increaseAllowance.call(addressyhyQhsQ, uintnxE5IbT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringSdoy7M = "KW1x5XfL0LJfqQ4qIRz3PomiShal"
		const stringWfi7Kbn = "JvsbbbEqNwP7LLuEclr0S6Ma16GBliF4dFGL9fQ15kXepELsXw3guzidXQNso6IpiqpUK9ISte7q5L2og5"
		const uintmrMXmVo = BigInt("371")
		const FinalgVg8WQI = await Final.new(stringSdoy7M, stringWfi7Kbn, uintmrMXmVo, {from: accounts[5]});
		const uintDuwtji = BigInt("1891")
		const addressSwmFDl5 = accounts[4]
		const uintzHXWwE0 = BigInt("1100")
		const address5nmYuO = accounts[0]
		const boolcuEurpP = await FinalgVg8WQI.approve.call(addressSwmFDl5, uintDuwtji, {from: accounts[3]});
		const stringHJxikeU = await FinalgVg8WQI.name.call({from: accounts[2]});
		const boolmPC0ffS = await FinalgVg8WQI.approveAndCall.call(address5nmYuO, uintzHXWwE0, {from: accounts[1]});

		assert.equal(boolcuEurpP, true)
		assert.equal(stringHJxikeU, "KW1x5XfL0LJfqQ4qIRz3PomiShal")
		await expect(FinalgVg8WQI.approveAndCall.call(address5nmYuO, uintzHXWwE0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringoyps8g = "gHoxVq007xMbhwOhPPylP5QnkTJSMjVP6US5yFWh2ogQRylzDuxtwrCJs6SoTqTolw"
		const stringp2nwNgz = "ai4RYHWCQjyqFHqrEDHMQS1mekTPLDmLvCLQvFEDEn1IeF4VGSUoEet3dJST2JnJqQk131RB"
		const uintoQUrtla = BigInt("1358")
		const FinalkceWrs8 = await Final.new(stringoyps8g, stringp2nwNgz, uintoQUrtla, {from: accounts[5]});
		const uintzUi9AIv = BigInt("494")
		const addressif4sYRQ = accounts[0]
		const addressdi0bT1R = accounts[3]
		const uintnrORT1t = BigInt("436")
		const addresswaXLE0r = accounts[4]
		const addressSgg3mZf = accounts[3]
		const stringbcSCRMl = await FinalkceWrs8.symbol.call({from: accounts[5]});
		const boolPyoorLw = await FinalkceWrs8.transferFrom.call(addressdi0bT1R, addressif4sYRQ, uintzUi9AIv, {from: accounts[1]});
		const boolHgFLzas = await FinalkceWrs8.transferFrom.call(addressSgg3mZf, addresswaXLE0r, uintnrORT1t, {from: accounts[1]});

		assert.equal(stringbcSCRMl, "ai4RYHWCQjyqFHqrEDHMQS1mekTPLDmLvCLQvFEDEn1IeF4VGSUoEet3dJST2JnJqQk131RB")
		await expect(FinalkceWrs8.transferFrom.call(addressdi0bT1R, addressif4sYRQ, uintzUi9AIv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringeQZtmie = "oRXzTvJuiPARwfi9vIMelQCqBICfUkbPboA34LvdHDX2KyrY8zDiQoJioOeCEOMRigStzBzueB3yzap5CHetN8BMch8k"
		const string00QvwA = "OhAUSyEd3h2UcNUtPRqAjksSAaItT4INzLRvb"
		const uintI14uRfX = BigInt("1460")
		const FinaloXoE5s = await Final.new(stringeQZtmie, string00QvwA, uintI14uRfX, {from: accounts[0]});
		const addressJCkve6C = accounts[0]
		const booldI6mMNY = await FinaloXoE5s.transferownership.call(addressJCkve6C, {from: accounts[4]});
		const stringyntreol = await FinaloXoE5s.symbol.call({from: accounts[0]});

		await expect(FinaloXoE5s.transferownership.call(addressJCkve6C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const strings0Fu4J9 = "pHn60SD1WbGQc0ifzgovgLYHq1lRyM5k4zY6ImLREyIhlujBqJ1kIVNE"
		const stringG6SjKlL = "6V2GbWxqUlJ66MPTWQxneF0dNERawaLCoJo"
		const uintwH96fG = BigInt("236")
		const FinalLUu1D7T = await Final.new(strings0Fu4J9, stringG6SjKlL, uintwH96fG, {from: accounts[0]});
		const uintkXeCX3R = BigInt("154")
		const addressveNXy3d = "0x0000000000000000000000000000000000000001"
		const uintZBvEZuC = BigInt("1426")
		const addressXqmPk6Y = accounts[3]
		const addresslNdrJMZ = accounts[1]
		const addressJJi4WWV = accounts[4]
		const addressSq3KIWg = accounts[2]
		const booluaWguy = await FinalLUu1D7T.transfer.call(addressveNXy3d, uintkXeCX3R, {from: accounts[0]});
		const boolPi6bBqR = await FinalLUu1D7T.transferFrom.call(addresslNdrJMZ, addressXqmPk6Y, uintZBvEZuC, {from: accounts[4]});
		const uintatPtDKt = await FinalLUu1D7T.allowance.call(addressSq3KIWg, addressJJi4WWV, {from: accounts[0]});

		assert.equal(booluaWguy, true)
		await expect(FinalLUu1D7T.transferFrom.call(addresslNdrJMZ, addressXqmPk6Y, uintZBvEZuC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringJEQjrnq = "oX9F4b1lN4me3RKkwWzbFISKM3gICLHKJdG8TycCyNuz0VU8r87cNTRJCR51MIKQholOUMG"
		const stringzfG6Ek = "aH2c"
		const uintAAXJWy = BigInt("899")
		const Finalfjvac8K = await Final.new(stringJEQjrnq, stringzfG6Ek, uintAAXJWy, {from: "0x0000000000000000000000000000000000000001"});
		const uintN7mwWM = BigInt("417")
		const addressYwBrTV4 = accounts[2]
		const addressZrrc1C7 = accounts[2]
		const uintiBfVw3i = BigInt("1887")
		const addressYyhxU3P = "0x0000000000000000000000000000000000000001"
		const uintneI8wdP = BigInt("1892")
		const addressogpSBLI = accounts[2]
		const boolz7qXQvo = await Finalfjvac8K.transferFrom.call(addressZrrc1C7, addressYwBrTV4, uintN7mwWM, {from: accounts[0]});
		const stringqxGd3C = await Finalfjvac8K.name.call({from: accounts[3]});
		const stringxnaDqBo = await Finalfjvac8K.symbol.call({from: accounts[4]});
		const boolhbgV1j = await Finalfjvac8K.approve.call(addressYyhxU3P, uintiBfVw3i, {from: accounts[1]});
		const boolNIp6TNl = await Finalfjvac8K.approve.call(addressogpSBLI, uintneI8wdP, {from: accounts[1]});
	});

	it('test for Final', async () => {
		const stringvHUJ54R = "EErX1aXpj3QC55t8rIcWbxga05g7APR9ZgIPKxHFRUXh27"
		const stringcxP8z7Q = "deTZRTumQx"
		const uintFMwXy6Z = BigInt("88")
		const FinalocD411e = await Final.new(stringvHUJ54R, stringcxP8z7Q, uintFMwXy6Z, {from: accounts[0]});
		const uintYuMhkOW = BigInt("1303")
		const addressa51rVo8 = accounts[4]
		const uintEcB7Ga = BigInt("735")
		const addressGmtqWUi = accounts[0]
		const strings42np9R = await FinalocD411e.symbol.call({from: accounts[3]});
		const boolyRX66r3 = await FinalocD411e.approveAndCall.call(addressa51rVo8, uintYuMhkOW, {from: accounts[0]});
		const boolRF0Z5lj = await FinalocD411e.approveAndCall.call(addressGmtqWUi, uintEcB7Ga, {from: accounts[4]});

		assert.equal(boolyRX66r3, true)
		assert.equal(strings42np9R, "deTZRTumQx")
		await expect(FinalocD411e.approveAndCall.call(addressGmtqWUi, uintEcB7Ga, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringJgyONQi = "21CFpqWqLHDiyGMDHL6e2HHp6RjADZLqn4qYIDu"
		const stringhYkKAL1 = "VFKgyzoTdTA3Tg3jGm2ttxjn6W6ptmQOJLnokc3HDrEaNfVEc24IMllNCXWpQmaDLDn3NORi95Z9XU7PDNL8uR1ka"
		const uintV1CQlf4 = BigInt("64")
		const FinalTKkZY7 = await Final.new(stringJgyONQi, stringhYkKAL1, uintV1CQlf4, {from: accounts[0]});
		const uintn1lm6CC = BigInt("0")
		const addressJpJ7vF = "0x0000000000000000000000000000000000000001"
		const boolrMPssAG = await FinalTKkZY7.transfer.call(addressJpJ7vF, uintn1lm6CC, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolrMPssAG, true)
	});

	it('test for Final', async () => {
		const stringJgyONQi = "21CFpqWqLHDiyGMDHL6e2HHp6RjADZLqn4qYIDu"
		const stringhYkKAL1 = "VFKgyzoTdTA3Tg3jGm2ttxjn6W6ptmQOJLnokc3HDrEaNfVEc24IMllNCXWpQmaDLDn3NORi95Z9XU7PDNL8uR1ka"
		const uintE7eAF4c = BigInt("64")
		const FinalTKkZY7 = await Final.new(stringJgyONQi, stringhYkKAL1, uintE7eAF4c, {from: accounts[0]});
		const addressNgBkUcc = accounts[4]
		const uintcuXdM1r = BigInt("1175")
		const addressNWKK2cG = "0x0000000000000000000000000000000000000002"
		const uintI9O39Xh = BigInt("1695")
		const addressF6l9NE = accounts[2]
		const boolX22JHAh = await FinalTKkZY7.transferownership.call(addressNgBkUcc, {from: accounts[0]});
		const boolrMPssAG = await FinalTKkZY7.transfer.call(addressNWKK2cG, uintcuXdM1r, {from: "0x0000000000000000000000000000000000000001"});
		const boolCV9ymMj = await FinalTKkZY7.transfer.call(addressF6l9NE, uintI9O39Xh, {from: accounts[5]});

		assert.equal(boolX22JHAh, true)
		await expect(FinalTKkZY7.transfer.call(addressNWKK2cG, uintcuXdM1r, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})