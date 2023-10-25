const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressZjEvjsh = accounts[3]
		const afiControllerql4rbL1 = await afiController.new(addressZjEvjsh, {from: accounts[3]});
		const addressUu700v9 = accounts[1]
		const addressIsF8EwM = "0x0000000000000000000000000000000000000001"
		const addresspy2eBnH = accounts[0]
		const addressv247vkL = accounts[4]
		const addressaxq2gkM = accounts[5]
		const addresssrj8PBg = accounts[4]
//		const addressPhNHEMS = await afiControllerql4rbL1.setOneSplit.call(addressUu700v9, {from: accounts[4]});
//		const addressg4jqQel = await afiControllerql4rbL1.inCaseStrategyTokenGetStuck.call(addresspy2eBnH, addressIsF8EwM, {from: accounts[3]});
//		const addressQX2Wf3 = await afiControllerql4rbL1.setConverter.call(addresssrj8PBg, addressaxq2gkM, addressv247vkL, {from: accounts[5]});

		await expect(afiControllerql4rbL1.setOneSplit.call(addressUu700v9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressNG4hBhs = accounts[2]
		const afiControllerF9iChBn = await afiController.new(addressNG4hBhs, {from: "0x0000000000000000000000000000000000000001"});
		const uintW6a8sa = BigInt("1859")
		const addressNANOD6w = accounts[3]
		const addressaO25ikB = accounts[4]
		const addressa1BmbQ = "0x0000000000000000000000000000000000000001"
		const addressSX9HHL6 = accounts[5]
		const addressliRlrl = accounts[2]
		const addressKbZHtwM = accounts[1]
		const addressmiWZ1Yx = accounts[0]
		const uintOxCurQX = await afiControllerF9iChBn.getExpectedReturn.call(addressaO25ikB, addressNANOD6w, uintW6a8sa, {from: accounts[1]});
		const addressVY2FuoC = await afiControllerF9iChBn.setVault.call(addressSX9HHL6, addressa1BmbQ, {from: accounts[0]});
		const address5i5O7I = await afiControllerF9iChBn.inCaseStrategyTokenGetStuck.call(addressKbZHtwM, addressliRlrl, {from: accounts[0]});
		const addressYxSwLT = await afiControllerF9iChBn.setStrategist.call(addressmiWZ1Yx, {from: accounts[0]});
	});

	it('test for afiController', async () => {
		const addressdTunlSc = accounts[3]
		const afiControllerbSPvnZr = await afiController.new(addressdTunlSc, {from: accounts[3]});
		const uintS3Frrgd = BigInt("1978")
		const addressWDIx8zr = accounts[3]
		const addressiGxBn3 = accounts[3]
		const addresshS9afz = accounts[2]
		const addressSA89HY = accounts[1]
		const addressopalPnJ = accounts[0]
		const addressbM8HsZ7 = accounts[2]
		const addressxbtbptj = accounts[4]
//		const uintB0hQrb4 = await afiControllerbSPvnZr.getExpectedReturn.call(addressiGxBn3, addressWDIx8zr, uintS3Frrgd, {from: accounts[3]});
//		const addressHFLnLpW = await afiControllerbSPvnZr.approveStrategy.call(addressSA89HY, addresshS9afz, {from: accounts[1]});
//		const address3vEARv = await afiControllerbSPvnZr.setVault.call(addressbM8HsZ7, addressopalPnJ, {from: accounts[2]});
//		const addressQd5oTf2 = await afiControllerbSPvnZr.withdrawAll.call(addressxbtbptj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerbSPvnZr.getExpectedReturn.call(addressiGxBn3, addressWDIx8zr, uintS3Frrgd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressU6BBFEs = accounts[5]
		const afiControllerSVQyEZr = await afiController.new(addressU6BBFEs, {from: accounts[4]});
		const uinttzGybWV = BigInt("1470")
		const addressi86esl5 = accounts[0]
		const addressm8c9107 = accounts[2]
		const addressTTK8eOp = accounts[0]
		const uintqKpl5H6 = BigInt("763")
		const addresswSlcZoP = "0x0000000000000000000000000000000000000001"
		const addressyCYdqhz = accounts[1]
		const uintNRvbfRk = BigInt("240")
		const addresswUSfqLc = accounts[3]
		const addressaCV5N53 = accounts[1]
		const addresseD5xQjW = accounts[2]
//		const addresssio9QcV = await afiControllerSVQyEZr.earn.call(addressi86esl5, uinttzGybWV, {from: "0x0000000000000000000000000000000000000001"});
//		const addressYcd4YzB = await afiControllerSVQyEZr.setStrategy.call(addressTTK8eOp, addressm8c9107, {from: accounts[2]});
//		const addressokxDfym = await afiControllerSVQyEZr.earn.call(addresswSlcZoP, uintqKpl5H6, {from: "0x0000000000000000000000000000000000000001"});
//		const addressYgArSjp = await afiControllerSVQyEZr.setOneSplit.call(addressyCYdqhz, {from: accounts[0]});
//		const addressmbBxzVQ = await afiControllerSVQyEZr.earn.call(addresswUSfqLc, uintNRvbfRk, {from: accounts[5]});
//		const addressU3aKSx5 = await afiControllerSVQyEZr.approveStrategy.call(addresseD5xQjW, addressaCV5N53, {from: accounts[5]});

		await expect(afiControllerSVQyEZr.earn.call(addressi86esl5, uinttzGybWV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressB9Bh0CH = accounts[3]
		const afiControllerywd7gwr = await afiController.new(addressB9Bh0CH, {from: accounts[0]});
		const addresspPex1QB = accounts[0]
		const addressoL2OGu9 = accounts[3]
		const addresswpEhzuY = accounts[0]
		const addressLoSiQbd = accounts[3]
		const addressgXoUvoQ = accounts[3]
		const uintEBxnAs6 = BigInt("1720")
		const addressgvHRRlQ = accounts[5]
		const addressQAEodiY = "0x0000000000000000000000000000000000000001"
//		const addressJehUyDm = await afiControllerywd7gwr.inCaseStrategyTokenGetStuck.call(addressoL2OGu9, addresspPex1QB, {from: accounts[3]});
//		const uintbkwXYrJ = await afiControllerywd7gwr.balanceOf.call(addresswpEhzuY, {from: "0x0000000000000000000000000000000000000001"});
//		const addressipzSjT6 = await afiControllerywd7gwr.setVault.call(addressgXoUvoQ, addressLoSiQbd, {from: "0x0000000000000000000000000000000000000001"});
//		const addresskYxKUec = await afiControllerywd7gwr.inCaseTokensGetStuck.call(addressgvHRRlQ, uintEBxnAs6, {from: accounts[5]});
//		const addressxfDo5L = await afiControllerywd7gwr.setGovernance.call(addressQAEodiY, {from: accounts[3]});

		await expect(afiControllerywd7gwr.inCaseStrategyTokenGetStuck.call(addressoL2OGu9, addresspPex1QB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressOTw4he = "0x0000000000000000000000000000000000000001"
		const afiControllerwGq1P7K = await afiController.new(addressOTw4he, {from: accounts[3]});
		const addressoBnPqhu = accounts[5]
		const addressNUX9Yyc = accounts[4]
		const addressQMCClP3 = accounts[0]
//		const addressWVBaLiv = await afiControllerwGq1P7K.setStrategy.call(addressNUX9Yyc, addressoBnPqhu, {from: accounts[4]});
//		const uintcKk7mfK = await afiControllerwGq1P7K.balanceOf.call(addressQMCClP3, {from: accounts[4]});

		await expect(afiControllerwGq1P7K.setStrategy.call(addressNUX9Yyc, addressoBnPqhu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressKXskHWU = accounts[3]
		const afiControllerql4rbL1 = await afiController.new(addressKXskHWU, {from: accounts[3]});
		const addresszF7lOwv = "0x0000000000000000000000000000000000000001"
		const addresssJ6r3yA = accounts[0]
		const addressFtwQ5gj = accounts[4]
		const addressXQwmxk = accounts[6]
		const addressBOXKEBz = accounts[4]
//		const addressg4jqQel = await afiControllerql4rbL1.inCaseStrategyTokenGetStuck.call(addresssJ6r3yA, addresszF7lOwv, {from: accounts[3]});
//		const addressQX2Wf3 = await afiControllerql4rbL1.setConverter.call(addressBOXKEBz, addressXQwmxk, addressFtwQ5gj, {from: accounts[5]});

		await expect(afiControllerql4rbL1.inCaseStrategyTokenGetStuck.call(addresssJ6r3yA, addresszF7lOwv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresszILnTF8 = "0x0000000000000000000000000000000000000001"
		const afiControllerwGq1P7K = await afiController.new(addresszILnTF8, {from: accounts[3]});
		const addressfzAS8dO = accounts[0]
		const addressQFJlqZu = accounts[4]
		const addressyvvjqbF = accounts[5]
		const addressGIW0cYa = accounts[4]
		const uintVfoIrGY = BigInt("697")
		const addressEvhbT16 = accounts[1]
//		const addresscHv1vGm = await afiControllerwGq1P7K.setVault.call(addressQFJlqZu, addressfzAS8dO, {from: accounts[1]});
//		const addressWVBaLiv = await afiControllerwGq1P7K.setStrategy.call(addressGIW0cYa, addressyvvjqbF, {from: accounts[4]});
//		const uintBANkLLi = await afiControllerwGq1P7K.setSplit.call(uintVfoIrGY, {from: accounts[5]});
//		const uintcKk7mfK = await afiControllerwGq1P7K.balanceOf.call(addressEvhbT16, {from: accounts[4]});

		await expect(afiControllerwGq1P7K.setVault.call(addressQFJlqZu, addressfzAS8dO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLWer6iY = "0x0000000000000000000000000000000000000001"
		const afiControllerwGq1P7K = await afiController.new(addressLWer6iY, {from: accounts[3]});
		const addressSaPy9e4 = accounts[1]
		const addressQaoKX1u = accounts[5]
		const addresspmvGOXj = accounts[4]
		const addresslR9RuQE = accounts[0]
		const addressnhLWFAD = accounts[4]
		const addressN3AkB4b = accounts[0]
//		const uintppB2uGN = await afiControllerwGq1P7K.balanceOf.call(addressSaPy9e4, {from: accounts[4]});
//		const addressWVBaLiv = await afiControllerwGq1P7K.setStrategy.call(addresspmvGOXj, addressQaoKX1u, {from: accounts[4]});
//		const addressxOItYBB = await afiControllerwGq1P7K.revokeStrategy.call(addressnhLWFAD, addresslR9RuQE, {from: accounts[2]});
//		const uintcKk7mfK = await afiControllerwGq1P7K.balanceOf.call(addressN3AkB4b, {from: accounts[4]});

		await expect(afiControllerwGq1P7K.balanceOf.call(addressSaPy9e4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressPMSsSfg = "0x0000000000000000000000000000000000000001"
		const afiControllerwGq1P7K = await afiController.new(addressPMSsSfg, {from: accounts[3]});
		const uintK2AMF9E = BigInt("540")
		const addressL9Sops5 = accounts[3]
		const addressmYxO5nL = "0x0000000000000000000000000000000000000001"
		const addressHTcBOh6 = accounts[0]
		const addressFgK9rK6 = accounts[0]
//		const addressCkT0zwj = await afiControllerwGq1P7K.inCaseTokensGetStuck.call(addressL9Sops5, uintK2AMF9E, {from: accounts[1]});
//		const addressK7E6i5 = await afiControllerwGq1P7K.setStrategy.call(addressHTcBOh6, addressmYxO5nL, {from: accounts[1]});
//		const uintcKk7mfK = await afiControllerwGq1P7K.balanceOf.call(addressFgK9rK6, {from: accounts[4]});

		await expect(afiControllerwGq1P7K.inCaseTokensGetStuck.call(addressL9Sops5, uintK2AMF9E, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressibynjz = accounts[4]
		const afiControlleralm6HSu = await afiController.new(addressibynjz, {from: accounts[2]});
		const addressLIaYxqv = accounts[1]
		const addressJOYrGvD = accounts[1]
		const addressYDZQCuF = accounts[0]
		const addresslO5OMjt = accounts[3]
		const address3rGAU1 = accounts[3]
		const addressg52hATE = accounts[3]
//		const addressPL9tiCX = await afiControlleralm6HSu.setStrategist.call(addressLIaYxqv, {from: accounts[4]});
//		const addressrlJ8Xw = await afiControlleralm6HSu.inCaseStrategyTokenGetStuck.call(addressYDZQCuF, addressJOYrGvD, {from: accounts[5]});
//		const addressW0pKHd = await afiControlleralm6HSu.approveStrategy.call(address3rGAU1, addresslO5OMjt, {from: accounts[0]});
//		const addressV06Tjkg = await afiControlleralm6HSu.setOneSplit.call(addressg52hATE, {from: accounts[0]});

		await expect(afiControlleralm6HSu.setStrategist.call(addressLIaYxqv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbxJvKHp = accounts[1]
		const afiControllerFFplDgg = await afiController.new(addressbxJvKHp, {from: accounts[5]});
		const addresswdZQac = accounts[4]
		const addressK2dUBEV = accounts[5]
		const address71dq4h = accounts[0]
		const uintQK1YTgn = BigInt("22")
		const uintgdAZlAV = BigInt("1615")
		const addresse50YduB = accounts[5]
//		const addressQVVhhc = await afiControllerFFplDgg.setConverter.call(address71dq4h, addressK2dUBEV, addresswdZQac, {from: accounts[4]});
//		const uint7v0T0S = await afiControllerFFplDgg.setSplit.call(uintQK1YTgn, {from: accounts[3]});
//		const addressj2zglQi = await afiControllerFFplDgg.inCaseTokensGetStuck.call(addresse50YduB, uintgdAZlAV, {from: accounts[4]});

		await expect(afiControllerFFplDgg.setConverter.call(address71dq4h, addressK2dUBEV, addresswdZQac, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresslrEvoB9 = "0x0000000000000000000000000000000000000001"
		const afiControllerwGq1P7K = await afiController.new(addresslrEvoB9, {from: accounts[3]});
		const uintq2MxBGl = BigInt("2045")
		const addressFF1WdNN = accounts[1]
		const addressrOkbYFV = "0x0000000000000000000000000000000000000001"
		const uintZi8U98 = BigInt("186")
		const addressIBvwX5V = accounts[5]
		const uintWSausTd = BigInt("737")
		const addressOb90BOJ = accounts[3]
		const addresshUTPc8X = accounts[0]
		const addressaqKyYVu = accounts[1]
		const addressuTcz3k2 = accounts[5]
		const addressx5JvZuJ = accounts[3]
		const addressYZrN4hn = accounts[3]
		const addressQ6QSG5W = accounts[5]
//		const addressILmxlGt = await afiControllerwGq1P7K.yearn.call(addressrOkbYFV, addressFF1WdNN, uintq2MxBGl, {from: accounts[4]});
//		const addressDIalyfN = await afiControllerwGq1P7K.inCaseTokensGetStuck.call(addressIBvwX5V, uintZi8U98, {from: accounts[2]});
//		const addresshQA3h7X = await afiControllerwGq1P7K.earn.call(addressOb90BOJ, uintWSausTd, {from: accounts[1]});
//		const addressRomlHHu = await afiControllerwGq1P7K.setVault.call(addressaqKyYVu, addresshUTPc8X, {from: accounts[4]});
//		const uintcKk7mfK = await afiControllerwGq1P7K.balanceOf.call(addressuTcz3k2, {from: accounts[4]});
//		const addressPbRtU04 = await afiControllerwGq1P7K.setConverter.call(addressQ6QSG5W, addressYZrN4hn, addressx5JvZuJ, {from: accounts[3]});

		await expect(afiControllerwGq1P7K.yearn.call(addressrOkbYFV, addressFF1WdNN, uintq2MxBGl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvDLTxqF = accounts[4]
		const afiControlleralm6HSu = await afiController.new(addressvDLTxqF, {from: accounts[2]});
		const uintDhq2Gmv = BigInt("1595")
		const addressFKU960U = accounts[1]
		const addressRI1ujE = accounts[3]
		const addressiYSHjWT = accounts[3]
		const addressKiGgIKA = accounts[1]
		const addressKzMV3eU = accounts[0]
		const addressdH4Aunb = accounts[3]
		const addressAT72Al = accounts[3]
		const addressh52Dgdw = accounts[3]
//		const uintHmxga0n = await afiControlleralm6HSu.setSplit.call(uintDhq2Gmv, {from: "0x0000000000000000000000000000000000000001"});
//		const addressPL9tiCX = await afiControlleralm6HSu.setStrategist.call(addressFKU960U, {from: accounts[4]});
//		const addressmMMEuyr = await afiControlleralm6HSu.approveStrategy.call(addressiYSHjWT, addressRI1ujE, {from: accounts[3]});
//		const addressrlJ8Xw = await afiControlleralm6HSu.inCaseStrategyTokenGetStuck.call(addressKzMV3eU, addressKiGgIKA, {from: accounts[5]});
//		const addressW0pKHd = await afiControlleralm6HSu.approveStrategy.call(addressAT72Al, addressdH4Aunb, {from: accounts[0]});
//		const addressV06Tjkg = await afiControlleralm6HSu.setOneSplit.call(addressh52Dgdw, {from: accounts[0]});

		await expect(afiControlleralm6HSu.setSplit.call(uintDhq2Gmv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressE8hk0v4 = accounts[0]
		const afiControllergoFl3TV = await afiController.new(addressE8hk0v4, {from: accounts[3]});
		const addressnhgPoGN = accounts[1]
		const addressFN3ID9H = accounts[1]
		const addressXk1ubV = "0x0000000000000000000000000000000000000001"
		const addressmEuGKOE = accounts[5]
		const addresszUnaqC = accounts[0]
		const addressRZGcpm = accounts[3]
		const uintbXHyP7s = BigInt("1760")
		const addressjXFTdB9 = accounts[1]
		const addressCsedbdJ = accounts[1]
//		const addressyH89lUl = await afiControllergoFl3TV.withdrawAll.call(addressnhgPoGN, {from: accounts[2]});
//		const addressXdiQuSg = await afiControllergoFl3TV.setConverter.call(addressmEuGKOE, addressXk1ubV, addressFN3ID9H, {from: accounts[5]});
//		const addressnkguKmV = await afiControllergoFl3TV.approveStrategy.call(addressRZGcpm, addresszUnaqC, {from: accounts[1]});
//		const addressh5rgaRb = await afiControllergoFl3TV.yearn.call(addressCsedbdJ, addressjXFTdB9, uintbXHyP7s, {from: accounts[3]});

		await expect(afiControllergoFl3TV.withdrawAll.call(addressnhgPoGN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressUDqG3cn = accounts[3]
		const afiControlleroi7td0x = await afiController.new(addressUDqG3cn, {from: accounts[2]});
		const uintkknbQN = BigInt("1088")
		const addresspmx0Ctc = accounts[5]
//		const addressTiMTQbz = await afiControlleroi7td0x.withdraw.call(addresspmx0Ctc, uintkknbQN, {from: accounts[2]});

		await expect(afiControlleroi7td0x.withdraw.call(addresspmx0Ctc, uintkknbQN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressnYEDyRj = "0x0000000000000000000000000000000000000001"
		const afiControllerwGq1P7K = await afiController.new(addressnYEDyRj, {from: accounts[3]});
		const addressMvylP4G = accounts[1]
		const uintwYLL3J = BigInt("154")
		const addressoSL9LUD = accounts[5]
		const addressOfwmEo5 = accounts[1]
		const addressJkZf4V3 = "0x0000000000000000000000000000000000000001"
//		const addresseqJLw5T = await afiControllerwGq1P7K.setGovernance.call(addressMvylP4G, {from: accounts[4]});
//		const addressDIalyfN = await afiControllerwGq1P7K.inCaseTokensGetStuck.call(addressoSL9LUD, uintwYLL3J, {from: accounts[2]});
//		const addressJNqoLEG = await afiControllerwGq1P7K.inCaseStrategyTokenGetStuck.call(addressJkZf4V3, addressOfwmEo5, {from: accounts[4]});

		await expect(afiControllerwGq1P7K.setGovernance.call(addressMvylP4G, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressXTruuGA = accounts[3]
		const afiControllers0i3SYR = await afiController.new(addressXTruuGA, {from: accounts[0]});
		const addressKJNTJUC = accounts[0]
		const addresslgP7ND = accounts[3]
		const addresswezuASw = accounts[4]
		const uintzCPPcCn = BigInt("1613")
		const addressm5xL6AU = "0x0000000000000000000000000000000000000001"
		const addressdJuUIg = accounts[4]
		const addresspub8g8A = accounts[4]
		const uintA99MTz = BigInt("1970")
		const addresspprku6J = "0x0000000000000000000000000000000000000001"
		const addressVV3ZZmB = accounts[1]
		const address7R5gcg = await afiControllers0i3SYR.setConverter.call(addresswezuASw, addresslgP7ND, addressKJNTJUC, {from: accounts[0]});
//		const addressBhqwb5s = await afiControllers0i3SYR.yearn.call(addressdJuUIg, addressm5xL6AU, uintzCPPcCn, {from: accounts[1]});
//		const addressCCl3KFR = await afiControllers0i3SYR.setGovernance.call(addresspub8g8A, {from: accounts[4]});
//		const addressBVrhSH1 = await afiControllers0i3SYR.yearn.call(addressVV3ZZmB, addresspprku6J, uintA99MTz, {from: accounts[4]});

		await expect(afiControllers0i3SYR.yearn.call(addressdJuUIg, addressm5xL6AU, uintzCPPcCn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressatgMz7r = accounts[3]
		const afiControllerql4rbL1 = await afiController.new(addressatgMz7r, {from: accounts[3]});
		const addressrbvAOZf = accounts[3]
		const addressuuOqtB = accounts[1]
		const addresspPykS6X = accounts[3]
		const uintN37F1ty = BigInt("181")
		const addressCULUuh2 = accounts[5]
		const addresswsIpqAi = accounts[5]
		const addressdLZGRvH = await afiControllerql4rbL1.approveStrategy.call(addressuuOqtB, addressrbvAOZf, {from: accounts[3]});
//		const addressPhNHEMS = await afiControllerql4rbL1.setOneSplit.call(addresspPykS6X, {from: accounts[4]});
//		const addressnYuDz5M = await afiControllerql4rbL1.yearn.call(addresswsIpqAi, addressCULUuh2, uintN37F1ty, {from: accounts[3]});

		await expect(afiControllerql4rbL1.setOneSplit.call(addresspPykS6X, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressZQHkV5T = "0x0000000000000000000000000000000000000001"
		const afiControllerf6EhL1B = await afiController.new(addressZQHkV5T, {from: accounts[1]});
		const uinta96Ge8k = BigInt("1230")
		const addressy9XbsAY = accounts[0]
		const uintl959bYj = BigInt("1867")
		const addressnYebU7j = accounts[1]
		const addressGOwVPIv = accounts[1]
		const addressaSb2Vqe = "0x0000000000000000000000000000000000000001"
		const addressx8aRQgN = accounts[5]
		const addressDN9VWfn = accounts[4]
		const addressLOljUgP = accounts[2]
//		const addressnazusoD = await afiControllerf6EhL1B.inCaseTokensGetStuck.call(addressy9XbsAY, uinta96Ge8k, {from: accounts[1]});
//		const uintGfNbVw8 = await afiControllerf6EhL1B.getExpectedReturn.call(addressGOwVPIv, addressnYebU7j, uintl959bYj, {from: accounts[2]});
//		const addressolDvR4 = await afiControllerf6EhL1B.revokeStrategy.call(addressx8aRQgN, addressaSb2Vqe, {from: accounts[3]});
//		const addressYGk6IRJ = await afiControllerf6EhL1B.inCaseStrategyTokenGetStuck.call(addressLOljUgP, addressDN9VWfn, {from: accounts[0]});

		await expect(afiControllerf6EhL1B.inCaseTokensGetStuck.call(addressy9XbsAY, uinta96Ge8k, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressyZOTI8P = accounts[3]
		const afiControlleroi7td0x = await afiController.new(addressyZOTI8P, {from: accounts[2]});
		const addressOu8LqAS = accounts[2]
		const uintLwiO6nR = BigInt("1644")
//		const addressd8ACC3E = await afiControlleroi7td0x.setRewards.call(addressOu8LqAS, {from: accounts[3]});
//		const uintgMc43FB = await afiControlleroi7td0x.setSplit.call(uintLwiO6nR, {from: accounts[0]});

		await expect(afiControlleroi7td0x.setRewards.call(addressOu8LqAS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscP21t8B = accounts[3]
		const afiControlleroi7td0x = await afiController.new(addresscP21t8B, {from: accounts[2]});
		const addressU4oOPq3 = accounts[3]
		const addressN4lE3aH = accounts[2]
		const addressr6ehouR = accounts[4]
		const addressF9DSIPB = accounts[1]
		const addressRbRCdGR = accounts[2]
		const uintspA3T8j = BigInt("1624")
//		const addressQOWx5eg = await afiControlleroi7td0x.revokeStrategy.call(addressN4lE3aH, addressU4oOPq3, {from: accounts[5]});
//		const addressfLYgLg = await afiControlleroi7td0x.setVault.call(addressF9DSIPB, addressr6ehouR, {from: accounts[0]});
//		const addressd8ACC3E = await afiControlleroi7td0x.setRewards.call(addressRbRCdGR, {from: accounts[3]});
//		const uintgMc43FB = await afiControlleroi7td0x.setSplit.call(uintspA3T8j, {from: accounts[0]});

		await expect(afiControlleroi7td0x.revokeStrategy.call(addressN4lE3aH, addressU4oOPq3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdmdM0x3 = accounts[3]
		const afiControlleroi7td0x = await afiController.new(addressdmdM0x3, {from: accounts[2]});
		const addresszQZ5ONs = accounts[0]
		const addresszLVluzQ = "0x0000000000000000000000000000000000000001"
		const uintWzlc4W = BigInt("1088")
		const addresshNLQSYo = accounts[3]
		const addresskz7CLse = await afiControlleroi7td0x.setGovernance.call(addresszQZ5ONs, {from: accounts[2]});
//		const addressuQmzwB3 = await afiControlleroi7td0x.setGovernance.call(addresszLVluzQ, {from: accounts[1]});
//		const addressTiMTQbz = await afiControlleroi7td0x.withdraw.call(addresshNLQSYo, uintWzlc4W, {from: accounts[2]});

		await expect(afiControlleroi7td0x.setGovernance.call(addresszLVluzQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressR1KrMux = "0x0000000000000000000000000000000000000001"
		const afiControllerwGq1P7K = await afiController.new(addressR1KrMux, {from: accounts[3]});
		const addressgxwV0d4 = accounts[4]
		const addressIoxx4KY = accounts[1]
		const addressL4XLex = "0x0000000000000000000000000000000000000001"
		const uintU0nDnn = BigInt("728")
		const addressLAsTBc = accounts[1]
//		const addressJbNgpa9 = await afiControllerwGq1P7K.withdrawAll.call(addressgxwV0d4, {from: accounts[3]});
//		const uintcKk7mfK = await afiControllerwGq1P7K.balanceOf.call(addressIoxx4KY, {from: accounts[4]});
//		const addressZMS4meA = await afiControllerwGq1P7K.setStrategist.call(addressL4XLex, {from: accounts[2]});
//		const addresseWWCF8S = await afiControllerwGq1P7K.earn.call(addressLAsTBc, uintU0nDnn, {from: accounts[3]});

		await expect(afiControllerwGq1P7K.withdrawAll.call(addressgxwV0d4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressWlVVvKk = accounts[0]
		const afiControllerRcVNWsJ = await afiController.new(addressWlVVvKk, {from: accounts[5]});
		const addressXRlJpOw = accounts[2]
		const addressT5v5WN6 = accounts[4]
		const addressjlwVk1O = accounts[4]
		const uintFDETyTj = BigInt("315")
		const addressSb1gijv = accounts[2]
		const addressOy9CJM = await afiControllerRcVNWsJ.setStrategist.call(addressXRlJpOw, {from: accounts[5]});
//		const addressoPDOwbU = await afiControllerRcVNWsJ.inCaseStrategyTokenGetStuck.call(addressjlwVk1O, addressT5v5WN6, {from: accounts[1]});
//		const addressJQS9LRc = await afiControllerRcVNWsJ.inCaseTokensGetStuck.call(addressSb1gijv, uintFDETyTj, {from: accounts[5]});

		await expect(afiControllerRcVNWsJ.inCaseStrategyTokenGetStuck.call(addressjlwVk1O, addressT5v5WN6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressFGq89Ic = accounts[3]
		const afiControllerql4rbL1 = await afiController.new(addressFGq89Ic, {from: accounts[3]});
		const addressQ7vWv0y = accounts[2]
		const addressjF3JGOW = accounts[3]
		const addresskIlJlr6 = await afiControllerql4rbL1.setOneSplit.call(addressQ7vWv0y, {from: accounts[3]});
//		const addressPhNHEMS = await afiControllerql4rbL1.setOneSplit.call(addressjF3JGOW, {from: accounts[4]});

		await expect(afiControllerql4rbL1.setOneSplit.call(addressjF3JGOW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresspNQZpo7 = accounts[3]
		const afiControlleroi7td0x = await afiController.new(addresspNQZpo7, {from: accounts[2]});
		const addressl8lLlFF = accounts[2]
		const addresskycvrkK = accounts[1]
		const uintCdOw87o = BigInt("1088")
		const addressmciZFQ0 = accounts[5]
//		const addressA9V03xN = await afiControlleroi7td0x.setStrategy.call(addresskycvrkK, addressl8lLlFF, {from: accounts[2]});
//		const addressTiMTQbz = await afiControlleroi7td0x.withdraw.call(addressmciZFQ0, uintCdOw87o, {from: accounts[2]});

		await expect(afiControlleroi7td0x.setStrategy.call(addresskycvrkK, addressl8lLlFF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqVMFYyQ = accounts[3]
		const afiControlleroi7td0x = await afiController.new(addressqVMFYyQ, {from: accounts[2]});
		const uintbRMu1Jd = BigInt("315")
		const addressV3ikUy8 = accounts[3]
		const addressd0vLD0N = accounts[1]
		const uintpxHL6xx = await afiControlleroi7td0x.setSplit.call(uintbRMu1Jd, {from: accounts[2]});
//		const addressd8ACC3E = await afiControlleroi7td0x.setRewards.call(addressV3ikUy8, {from: accounts[3]});
//		const addressaiALWgQ = await afiControlleroi7td0x.setGovernance.call(addressd0vLD0N, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControlleroi7td0x.setRewards.call(addressV3ikUy8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressrq2nz4C = accounts[3]
		const afiControlleroi7td0x = await afiController.new(addressrq2nz4C, {from: accounts[2]});
		const addresshaw2UBW = "0x0000000000000000000000000000000000000001"
		const addressjFOW593 = accounts[1]
		const addressvS33O5Q = "0x0000000000000000000000000000000000000001"
		const addressiL4F0l = accounts[4]
		const addressXScJwxT = await afiControlleroi7td0x.revokeStrategy.call(addressjFOW593, addresshaw2UBW, {from: accounts[2]});
//		const addressK498YRB = await afiControlleroi7td0x.revokeStrategy.call(addressiL4F0l, addressvS33O5Q, {from: accounts[3]});

		await expect(afiControlleroi7td0x.revokeStrategy.call(addressiL4F0l, addressvS33O5Q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressODSnzxq = accounts[3]
		const afiControlleroi7td0x = await afiController.new(addressODSnzxq, {from: accounts[2]});
		const addressAwnOJUd = accounts[3]
		const addressuhqRPmG = accounts[2]
		const uinteVh6I9l = BigInt("1063")
		const addressZXujgW1 = accounts[5]
		const addressx8Ko0W = accounts[2]
		const addressgjyfqPH = accounts[4]
		const addressJe6Aly = await afiControlleroi7td0x.setVault.call(addressuhqRPmG, addressAwnOJUd, {from: accounts[2]});
//		const addressTiMTQbz = await afiControlleroi7td0x.withdraw.call(addressZXujgW1, uinteVh6I9l, {from: accounts[2]});
//		const addressc94Qde = await afiControlleroi7td0x.revokeStrategy.call(addressgjyfqPH, addressx8Ko0W, {from: accounts[2]});

		await expect(afiControlleroi7td0x.withdraw.call(addressZXujgW1, uinteVh6I9l, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvUIjPpH = accounts[3]
		const afiControlleroi7td0x = await afiController.new(addressvUIjPpH, {from: accounts[2]});
		const uintKA4fwh = BigInt("257")
		const addressNp0eKq7 = accounts[1]
		const address12nBIC = accounts[4]
		const uintQNhUgcW = BigInt("1809")
		const addressHSDUrwa = accounts[3]
		const addressUmdNQNH = accounts[3]
//		const addressbVNy9o = await afiControlleroi7td0x.yearn.call(address12nBIC, addressNp0eKq7, uintKA4fwh, {from: accounts[2]});
//		const addressrUwyf06 = await afiControlleroi7td0x.yearn.call(addressUmdNQNH, addressHSDUrwa, uintQNhUgcW, {from: accounts[3]});

		await expect(afiControlleroi7td0x.yearn.call(address12nBIC, addressNp0eKq7, uintKA4fwh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvoJSSwG = accounts[3]
		const afiControlleroi7td0x = await afiController.new(addressvoJSSwG, {from: accounts[2]});
		const addresse7Rd0qR = accounts[3]
		const addresswzz0zJt = accounts[1]
		const addressrMg19cF = accounts[1]
		const addressyUlVaOr = accounts[2]
		const uintPTvWG5 = BigInt("1809")
		const addressR2bFwjN = accounts[2]
		const addresscW3hjr = accounts[4]
		const addresscpNWW7 = await afiControlleroi7td0x.setRewards.call(addresse7Rd0qR, {from: accounts[2]});
//		const addresszX17svL = await afiControlleroi7td0x.setConverter.call(addressyUlVaOr, addressrMg19cF, addresswzz0zJt, {from: accounts[0]});
//		const addressrUwyf06 = await afiControlleroi7td0x.yearn.call(addresscW3hjr, addressR2bFwjN, uintPTvWG5, {from: accounts[3]});

		await expect(afiControlleroi7td0x.setConverter.call(addressyUlVaOr, addressrMg19cF, addresswzz0zJt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})