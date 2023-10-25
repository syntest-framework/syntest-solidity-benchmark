const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressHWkrV5V = "0x0000000000000000000000000000000000000001"
		const ControllerWh4lCY8 = await Controller.new(addressHWkrV5V, {from: accounts[3]});
		const uintV92oPQv = BigInt("1827")
		const addressgBxgQ2f = accounts[2]
		const addressE9RYZ4C = "0x0000000000000000000000000000000000000001"
		const addressyywF2Wq = accounts[4]
		const addresspZnepg = "0x0000000000000000000000000000000000000001"
		const addressNwDSZAo = accounts[0]
		const addressHKkKl6h = accounts[0]
		const addressRazznx = accounts[0]
		const addressKI2r8WY = accounts[0]
		const addressPZYwozF = await ControllerWh4lCY8.earn.call(addressgBxgQ2f, uintV92oPQv, {from: accounts[0]});
		const addressJFM3bLg = await ControllerWh4lCY8.setConverter.call(addresspZnepg, addressyywF2Wq, addressE9RYZ4C, {from: accounts[0]});
		const addressaDkFiQj = await ControllerWh4lCY8.setOneSplit.call(addressNwDSZAo, {from: accounts[2]});
		const addressBrV2Acy = await ControllerWh4lCY8.setOneSplit.call(addressHKkKl6h, {from: "0x0000000000000000000000000000000000000001"});
		const addresssNntysm = await ControllerWh4lCY8.setOneSplit.call(addressRazznx, {from: accounts[2]});
		const address9xZCO0 = await ControllerWh4lCY8.setRewards.call(addressKI2r8WY, {from: accounts[3]});

		await expect(ControllerWh4lCY8.earn.call(addressgBxgQ2f, uintV92oPQv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresspWdctjP = accounts[3]
		const ControllerfT4PeXH = await Controller.new(addresspWdctjP, {from: accounts[3]});
		const addressdipzbC4 = accounts[1]
		const addressYvMYx0r = accounts[2]
		const addressofg3DQ = accounts[4]
		const uintIwFcAX6 = BigInt("912")
		const addressWmngtrr = accounts[3]
		const addressYI4IbTK = accounts[2]
		const addressS0jaDPD = accounts[0]
		const addressg0iKWYQ = accounts[4]
		const addressUE8Bnkd = await ControllerfT4PeXH.setVault.call(addressYvMYx0r, addressdipzbC4, {from: accounts[2]});
		const addressMCiFPtu = await ControllerfT4PeXH.setOneSplit.call(addressofg3DQ, {from: accounts[4]});
		const uintxhvZgyQ = await ControllerfT4PeXH.setSplit.call(uintIwFcAX6, {from: accounts[1]});
		const address8ir5RE = await ControllerfT4PeXH.setStrategy.call(addressYI4IbTK, addressWmngtrr, {from: accounts[2]});
		const addressMjtJaC = await ControllerfT4PeXH.approveStrategy.call(addressg0iKWYQ, addressS0jaDPD, {from: accounts[0]});

		await expect(ControllerfT4PeXH.setVault.call(addressYvMYx0r, addressdipzbC4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressT08hPi4 = accounts[4]
		const ControllerY0ubXQt = await Controller.new(addressT08hPi4, {from: accounts[4]});
		const uintevJoKSW = BigInt("1294")
		const addressrw6WlzD = accounts[4]
		const addressNT9Fx3m = accounts[2]
		const addressFfDjR0F = accounts[0]
		const uintloyyKs2 = BigInt("862")
		const addressRUTCry8 = accounts[2]
		const uintSyovN2C = BigInt("376")
		const addressP2HkX2Y = accounts[0]
		const addressctJtSR = accounts[1]
		const uintPsEZnUN = BigInt("1945")
		const addressvLfInji = accounts[4]
		const addressQ9dYoig = accounts[2]
		const addressKCJe0JO = await ControllerY0ubXQt.yearn.call(addressNT9Fx3m, addressrw6WlzD, uintevJoKSW, {from: accounts[3]});
		const addressQa2j2R5 = await ControllerY0ubXQt.setGovernance.call(addressFfDjR0F, {from: accounts[2]});
		const addresswJRui6 = await ControllerY0ubXQt.earn.call(addressRUTCry8, uintloyyKs2, {from: accounts[3]});
		const uintaM6Xqfa = await ControllerY0ubXQt.getExpectedReturn.call(addressctJtSR, addressP2HkX2Y, uintSyovN2C, {from: accounts[1]});
		const uintZ4nZzdO = await ControllerY0ubXQt.getExpectedReturn.call(addressQ9dYoig, addressvLfInji, uintPsEZnUN, {from: accounts[4]});

		await expect(ControllerY0ubXQt.yearn.call(addressNT9Fx3m, addressrw6WlzD, uintevJoKSW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressSn2VTcU = accounts[3]
		const ControllereJ8JVBS = await Controller.new(addressSn2VTcU, {from: accounts[2]});
		const addressd6rKRlB = accounts[4]
		const addresspuNRKSF = accounts[0]
		const uinti0JMmmb = BigInt("814")
		const addresslRbP363 = accounts[0]
		const addresszbDiEIG = await ControllereJ8JVBS.setVault.call(addresspuNRKSF, addressd6rKRlB, {from: accounts[2]});
		const uintntn3nK4 = await ControllereJ8JVBS.setSplit.call(uinti0JMmmb, {from: accounts[3]});
		const addressEYuqFnD = await ControllereJ8JVBS.withdrawAll.call(addresslRbP363, {from: accounts[4]});

		await expect(ControllereJ8JVBS.setSplit.call(uinti0JMmmb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresstiFHbl = accounts[3]
		const ControllerFHlcLLq = await Controller.new(addresstiFHbl, {from: accounts[3]});
		const addressAvJtFb1 = "0x0000000000000000000000000000000000000001"
		const addressh9U3Fto = accounts[2]
		const addressmkoWgwm = accounts[1]
		const addressSVjEmby = accounts[1]
		const addressXCfneHz = accounts[5]
		const uintN6JxmLj = BigInt("1449")
		const addressSwTnMkm = accounts[2]
		const addressGhiSLUt = await ControllerFHlcLLq.setConverter.call(addressmkoWgwm, addressh9U3Fto, addressAvJtFb1, {from: accounts[0]});
		const addressD3PzGma = await ControllerFHlcLLq.approveStrategy.call(addressXCfneHz, addressSVjEmby, {from: accounts[5]});
		const uintUdS5vDf = await ControllerFHlcLLq.setSplit.call(uintN6JxmLj, {from: accounts[2]});
		const addressNYnuZ2i = await ControllerFHlcLLq.withdrawAll.call(addressSwTnMkm, {from: accounts[0]});

		await expect(ControllerFHlcLLq.setConverter.call(addressmkoWgwm, addressh9U3Fto, addressAvJtFb1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressB1ns8PL = accounts[4]
		const ControllerVL3RK1L = await Controller.new(addressB1ns8PL, {from: accounts[0]});
		const addressO2Fx3sx = accounts[3]
		const uintW7pjuA = BigInt("1399")
		const addressjHnkL82 = accounts[1]
		const addressMII3qq3 = accounts[5]
		const addressjOoaKr0 = accounts[3]
		const uintyHk9f8M = BigInt("1096")
		const addressEzdhop = accounts[1]
		const uintuzuz7w1 = BigInt("114")
		const address3wSbqa = await ControllerVL3RK1L.setOneSplit.call(addressO2Fx3sx, {from: accounts[2]});
		const addresscytwEg0 = await ControllerVL3RK1L.withdraw.call(addressjHnkL82, uintW7pjuA, {from: accounts[0]});
		const addressMggRJKp = await ControllerVL3RK1L.approveStrategy.call(addressjOoaKr0, addressMII3qq3, {from: accounts[3]});
		const addressB1Pxmz3 = await ControllerVL3RK1L.withdraw.call(addressEzdhop, uintyHk9f8M, {from: accounts[5]});
		const uintx1BVj0X = await ControllerVL3RK1L.setSplit.call(uintuzuz7w1, {from: accounts[4]});

		await expect(ControllerVL3RK1L.setOneSplit.call(addressO2Fx3sx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressTdCPTwM = accounts[2]
		const ControllerFTKZsWU = await Controller.new(addressTdCPTwM, {from: accounts[3]});
		const addressbcO2ayA = accounts[0]
		const addresso6T5C1 = accounts[0]
		const addressPKAzIMt = accounts[4]
		const addressKutpwu3 = accounts[0]
		const addressfRJeRWT = accounts[2]
		const address3er3e3 = accounts[5]
		const addressbU5Qdr = accounts[5]
		const addressvCLy7gu = accounts[5]
		const addressgu3fTOp = accounts[3]
		const addressBy1Cf0C = accounts[0]
		const uintzQBvUWV = await ControllerFTKZsWU.balanceOf.call(addressbcO2ayA, {from: accounts[3]});
		const addressBNnzcS = await ControllerFTKZsWU.inCaseStrategyTokenGetStuck.call(addressPKAzIMt, addresso6T5C1, {from: accounts[0]});
		const addressvt9i0SF = await ControllerFTKZsWU.setVault.call(addressfRJeRWT, addressKutpwu3, {from: accounts[1]});
		const addressP1dHM1s = await ControllerFTKZsWU.approveStrategy.call(addressbU5Qdr, address3er3e3, {from: accounts[3]});
		const addressRvXw556 = await ControllerFTKZsWU.setConverter.call(addressBy1Cf0C, addressgu3fTOp, addressvCLy7gu, {from: accounts[4]});

		await expect(ControllerFTKZsWU.balanceOf.call(addressbcO2ayA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshiWlSIK = accounts[0]
		const ControllerMjz80hH = await Controller.new(addresshiWlSIK, {from: accounts[1]});
		const addressP4w08Ne = accounts[0]
		const addressSQr8XE8 = accounts[1]
		const addressr3buc8f = await ControllerMjz80hH.revokeStrategy.call(addressSQr8XE8, addressP4w08Ne, {from: accounts[0]});

		await expect(ControllerMjz80hH.revokeStrategy.call(addressSQr8XE8, addressP4w08Ne, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressXT117cu = accounts[4]
		const ControllerXzKbsaf = await Controller.new(addressXT117cu, {from: accounts[4]});
		const addressUjreNwG = accounts[2]
		const uintjLtxcJu = BigInt("122")
		const addressR3WKndZ = accounts[1]
		const addressbrupwpP = await ControllerXzKbsaf.setGovernance.call(addressUjreNwG, {from: accounts[0]});
		const uintuAbej3M = await ControllerXzKbsaf.setSplit.call(uintjLtxcJu, {from: accounts[1]});
		const addresst5CY2PG = await ControllerXzKbsaf.setGovernance.call(addressR3WKndZ, {from: accounts[0]});

		await expect(ControllerXzKbsaf.setGovernance.call(addressUjreNwG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressklnZXNf = accounts[0]
		const ControllerMjz80hH = await Controller.new(addressklnZXNf, {from: accounts[1]});
		const addressQNr5vOp = accounts[1]
		const addressoT9QgOc = accounts[0]
		const addresslNf77Mv = accounts[2]
		const addressdJgDRtK = await ControllerMjz80hH.setRewards.call(addressQNr5vOp, {from: accounts[4]});
		const addressr3buc8f = await ControllerMjz80hH.revokeStrategy.call(addresslNf77Mv, addressoT9QgOc, {from: accounts[0]});

		await expect(ControllerMjz80hH.setRewards.call(addressQNr5vOp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressYfymFD4 = accounts[0]
		const ControllerMjz80hH = await Controller.new(addressYfymFD4, {from: accounts[1]});
		const addressaVaDTgX = accounts[2]
		const uintElccuEg = BigInt("224")
		const addressOorGBml = accounts[3]
		const addresstRDN3K6 = accounts[0]
		const addressOywDtTk = accounts[0]
		const addressJ62MeC2 = accounts[5]
		const addressklAsSin = await ControllerMjz80hH.setStrategist.call(addressaVaDTgX, {from: accounts[2]});
		const addressgF2aG0v = await ControllerMjz80hH.earn.call(addressOorGBml, uintElccuEg, {from: accounts[2]});
		const addressr3buc8f = await ControllerMjz80hH.revokeStrategy.call(addressOywDtTk, addresstRDN3K6, {from: accounts[0]});
		const uintFf2JFVY = await ControllerMjz80hH.balanceOf.call(addressJ62MeC2, {from: accounts[3]});

		await expect(ControllerMjz80hH.setStrategist.call(addressaVaDTgX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressDsY8JJM = accounts[0]
		const ControllerMjz80hH = await Controller.new(addressDsY8JJM, {from: accounts[1]});
		const addressPSJlJHX = accounts[0]
		const addressnlwdbqA = accounts[2]
		const addressVnYLjRi = accounts[0]
		const addressHBJcv7U = accounts[0]
		const addressOw9lG0b = accounts[5]
		const addresstvl4gi7 = accounts[3]
		const addressgpHX6fS = await ControllerMjz80hH.setStrategy.call(addressnlwdbqA, addressPSJlJHX, {from: accounts[4]});
		const addressr3buc8f = await ControllerMjz80hH.revokeStrategy.call(addressHBJcv7U, addressVnYLjRi, {from: accounts[0]});
		const addressS2K5jiw = await ControllerMjz80hH.revokeStrategy.call(addresstvl4gi7, addressOw9lG0b, {from: accounts[4]});

		await expect(ControllerMjz80hH.setStrategy.call(addressnlwdbqA, addressPSJlJHX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressOH8X0Bw = accounts[0]
		const ControllerMjz80hH = await Controller.new(addressOH8X0Bw, {from: accounts[1]});
		const uintgcbWrJb = BigInt("2025")
		const addressXjMNlBl = accounts[2]
		const addressXHwqbI5 = accounts[0]
		const addressSDyy45k = accounts[1]
		const addressbh0SvVR = await ControllerMjz80hH.withdraw.call(addressXjMNlBl, uintgcbWrJb, {from: "0x0000000000000000000000000000000000000001"});
		const addressr3buc8f = await ControllerMjz80hH.revokeStrategy.call(addressSDyy45k, addressXHwqbI5, {from: accounts[0]});

		await expect(ControllerMjz80hH.withdraw.call(addressXjMNlBl, uintgcbWrJb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresslXjP4vb = accounts[0]
		const ControllerMjz80hH = await Controller.new(addresslXjP4vb, {from: accounts[1]});
		const uintm6jTRDR = BigInt("1552")
		const addressoRbHZJP = accounts[0]
		const addressFj7MaH9 = accounts[1]
		const addressYdiShx = accounts[2]
		const addressmpFgoqa = accounts[5]
		const addressVSnh4x9 = accounts[1]
		const addresslvO3ijI = accounts[2]
		const uintqwJGcs = await ControllerMjz80hH.getExpectedReturn.call(addressFj7MaH9, addressoRbHZJP, uintm6jTRDR, {from: accounts[4]});
		const addressP20ADY7 = await ControllerMjz80hH.inCaseStrategyTokenGetStuck.call(addressmpFgoqa, addressYdiShx, {from: accounts[2]});
		const addressr3buc8f = await ControllerMjz80hH.revokeStrategy.call(addresslvO3ijI, addressVSnh4x9, {from: accounts[0]});

		await expect(ControllerMjz80hH.getExpectedReturn.call(addressFj7MaH9, addressoRbHZJP, uintm6jTRDR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressI7WwnYw = accounts[1]
		const ControllerzAmcxbC = await Controller.new(addressI7WwnYw, {from: accounts[3]});
		const addressvcmJlYH = accounts[4]
		const addressEC76Uo8 = accounts[4]
		const addressn8ZTxWw = accounts[0]
		const addressQnyff34 = accounts[0]
		const addressyOrMhn = await ControllerzAmcxbC.withdrawAll.call(addressvcmJlYH, {from: accounts[0]});
		const addressdhmYxNl = await ControllerzAmcxbC.setGovernance.call(addressEC76Uo8, {from: accounts[0]});
		const addressHOhq8M = await ControllerzAmcxbC.inCaseStrategyTokenGetStuck.call(addressQnyff34, addressn8ZTxWw, {from: accounts[4]});

		await expect(ControllerzAmcxbC.withdrawAll.call(addressvcmJlYH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressr6lpEZ6 = accounts[0]
		const ControllerMjz80hH = await Controller.new(addressr6lpEZ6, {from: accounts[1]});
		const addressSNyNyAZ = accounts[5]
		const addressdRUR8RC = accounts[2]
		const addressoWbmhcH = accounts[2]
		const addressDqA4jHq = accounts[0]
		const addressNqqovo = accounts[0]
		const addressvG6Gy5J = "0x0000000000000000000000000000000000000001"
		const addressL8lXhbt = await ControllerMjz80hH.approveStrategy.call(addressdRUR8RC, addressSNyNyAZ, {from: accounts[3]});
		const addressr3buc8f = await ControllerMjz80hH.revokeStrategy.call(addressDqA4jHq, addressoWbmhcH, {from: accounts[0]});
		const addressGJfL2BP = await ControllerMjz80hH.setStrategy.call(addressvG6Gy5J, addressNqqovo, {from: accounts[1]});

		await expect(ControllerMjz80hH.approveStrategy.call(addressdRUR8RC, addressSNyNyAZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMiynlM = accounts[4]
		const ControllerUdp8YsS = await Controller.new(addressMiynlM, {from: "0x0000000000000000000000000000000000000001"});
		const addressS5oJGce = accounts[4]
		const addressvhDL6tY = accounts[0]
		const uintUeGHqs5 = BigInt("666")
		const addressQty0BXZ = accounts[1]
		const addresszkYP2e6 = accounts[5]
		const uintSpscSXf = BigInt("806")
		const uintdMIoBu4 = BigInt("1623")
		const addressmqyIUke = await ControllerUdp8YsS.inCaseStrategyTokenGetStuck.call(addressvhDL6tY, addressS5oJGce, {from: accounts[4]});
		const uintsasYS7K = await ControllerUdp8YsS.getExpectedReturn.call(addresszkYP2e6, addressQty0BXZ, uintUeGHqs5, {from: accounts[3]});
		const uintJg2xcCQ = await ControllerUdp8YsS.setSplit.call(uintSpscSXf, {from: accounts[0]});
		const uintA9aB1W9 = await ControllerUdp8YsS.setSplit.call(uintdMIoBu4, {from: accounts[4]});
	});

	it('test for Controller', async () => {
		const addressRDPb9Oq = accounts[0]
		const ControllerMjz80hH = await Controller.new(addressRDPb9Oq, {from: accounts[1]});
		const addressEFNKGzV = accounts[5]
		const address47MoKd = accounts[0]
		const addressGFBJIeX = "0x0000000000000000000000000000000000000001"
		const addressyxSjddQ = accounts[0]
		const addressnfYPqi4 = accounts[2]
		const addressGUz1XeP = await ControllerMjz80hH.setGovernance.call(addressEFNKGzV, {from: accounts[1]});
		const addressriJOnpK = await ControllerMjz80hH.inCaseStrategyTokenGetStuck.call(addressGFBJIeX, address47MoKd, {from: "0x0000000000000000000000000000000000000001"});
		const addressr3buc8f = await ControllerMjz80hH.revokeStrategy.call(addressnfYPqi4, addressyxSjddQ, {from: accounts[0]});

		await expect(ControllerMjz80hH.inCaseStrategyTokenGetStuck.call(addressGFBJIeX, address47MoKd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressj5Ezrs = accounts[4]
		const ControllerATddJJf = await Controller.new(addressj5Ezrs, {from: accounts[5]});
		const addressY3OE9rs = accounts[0]
		const addressszEv6gm = accounts[4]
		const addressFhcyBx = accounts[3]
		const addresse3ZnCXQ = accounts[3]
		const uintvWC3Uo = BigInt("696")
		const addressugwPo2T = accounts[5]
		const addressjS9Rpsp = accounts[3]
		const addressuxI37Ov = accounts[1]
		const addressGaZSX5Z = accounts[4]
		const addressbdNbuVb = await ControllerATddJJf.setStrategy.call(addressszEv6gm, addressY3OE9rs, {from: accounts[5]});
		const addressZQPnANv = await ControllerATddJJf.setVault.call(addresse3ZnCXQ, addressFhcyBx, {from: accounts[0]});
		const uintcxewbcX = await ControllerATddJJf.getExpectedReturn.call(addressjS9Rpsp, addressugwPo2T, uintvWC3Uo, {from: accounts[3]});
		const addressIxULdYD = await ControllerATddJJf.setVault.call(addressGaZSX5Z, addressuxI37Ov, {from: accounts[0]});

		await expect(ControllerATddJJf.setStrategy.call(addressszEv6gm, addressY3OE9rs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressCvJdacY = accounts[0]
		const ControllerMjz80hH = await Controller.new(addressCvJdacY, {from: accounts[1]});
		const uintiB3XLbp = BigInt("806")
		const addresspGMHN6p = accounts[3]
		const addressr24uUk6 = accounts[1]
		const addressRbfEu3q = accounts[2]
		const addressE0qRDd5 = await ControllerMjz80hH.inCaseTokensGetStuck.call(addresspGMHN6p, uintiB3XLbp, {from: accounts[0]});
		const addressr3buc8f = await ControllerMjz80hH.revokeStrategy.call(addressRbfEu3q, addressr24uUk6, {from: accounts[0]});

		await expect(ControllerMjz80hH.inCaseTokensGetStuck.call(addresspGMHN6p, uintiB3XLbp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressrU7iKDW = accounts[0]
		const ControllerMjz80hH = await Controller.new(addressrU7iKDW, {from: accounts[1]});
		const uintHJThIJO = BigInt("503")
		const addressGpHCLW = accounts[1]
		const addressRpCnO8A = await ControllerMjz80hH.inCaseTokensGetStuck.call(addressGpHCLW, uintHJThIJO, {from: accounts[1]});

		await expect(ControllerMjz80hH.inCaseTokensGetStuck.call(addressGpHCLW, uintHJThIJO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})