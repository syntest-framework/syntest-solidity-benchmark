const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressKRyhxC = accounts[4]
		const Controllerkmkqksb = await Controller.new(addressKRyhxC, {from: accounts[4]});
		const addressll6mDjD = accounts[5]
		const uintfpzBaak = BigInt("251")
		const addressD8eEYd = "0x0000000000000000000000000000000000000001"
		const addressZTwMlw8 = "0x0000000000000000000000000000000000000001"
		const uintsr3v244 = BigInt("1148")
		const addressjAT5oN = accounts[1]
		const addressCyRN5Pn = "0x0000000000000000000000000000000000000001"
		const uintobK0l6h = BigInt("1231")
		const addressJVnuxlC = accounts[2]
//		const addressCxls7Ot = await Controllerkmkqksb.setStrategist.call(addressll6mDjD, {from: accounts[2]});
//		const uintumLT4Jq = await Controllerkmkqksb.setSplit.call(uintfpzBaak, {from: accounts[2]});
//		const addressV5WliNp = await Controllerkmkqksb.inCaseStrategyTokenGetStuck.call(addressZTwMlw8, addressD8eEYd, {from: accounts[2]});
//		const uintEu4J3dV = await Controllerkmkqksb.setSplit.call(uintsr3v244, {from: accounts[0]});
//		const addressJlcsv50 = await Controllerkmkqksb.setStrategy.call(addressCyRN5Pn, addressjAT5oN, {from: accounts[3]});
//		const addresseGhh5kF = await Controllerkmkqksb.earn.call(addressJVnuxlC, uintobK0l6h, {from: accounts[0]});

		await expect(Controllerkmkqksb.setStrategist.call(addressll6mDjD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressCauAjnJ = accounts[3]
		const ControlleraIYW7P4 = await Controller.new(addressCauAjnJ, {from: accounts[3]});
		const addressb3rOKpW = accounts[2]
		const addressVco7puo = accounts[4]
		const addressr1WUg5Y = accounts[1]
		const uintLv7OrZM = BigInt("1731")
		const addressB5BzeHV = accounts[2]
		const addressyEdPylA = accounts[5]
//		const uintaYyGHKS = await ControlleraIYW7P4.balanceOf.call(addressb3rOKpW, {from: accounts[1]});
//		const addressGp9MnHg = await ControlleraIYW7P4.revokeStrategy.call(addressr1WUg5Y, addressVco7puo, {from: accounts[3]});
//		const uintJcL8mSv = await ControlleraIYW7P4.getExpectedReturn.call(addressyEdPylA, addressB5BzeHV, uintLv7OrZM, {from: accounts[0]});

		await expect(ControlleraIYW7P4.balanceOf.call(addressb3rOKpW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressyHbBct1 = accounts[1]
		const ControllercdMR6Bn = await Controller.new(addressyHbBct1, {from: accounts[0]});
		const addresstSiaXxE = accounts[3]
		const uintC8cRNfM = BigInt("391")
		const addressSQNaQPp = accounts[0]
		const addressx4ZbCoD = accounts[4]
		const addresswW2HghV = accounts[4]
		const addressZTgS6Gj = accounts[4]
		const addressuwViuTu = accounts[5]
		const addressGCkp2N = accounts[0]
//		const addressce8kuOn = await ControllercdMR6Bn.setRewards.call(addresstSiaXxE, {from: "0x0000000000000000000000000000000000000001"});
//		const uintyg9Diue = await ControllercdMR6Bn.setSplit.call(uintC8cRNfM, {from: accounts[5]});
//		const addresspchbkRL = await ControllercdMR6Bn.setConverter.call(addresswW2HghV, addressx4ZbCoD, addressSQNaQPp, {from: accounts[0]});
//		const addresskXFxfoO = await ControllercdMR6Bn.setGovernance.call(addressZTgS6Gj, {from: accounts[1]});
//		const addressrujML6x = await ControllercdMR6Bn.setStrategy.call(addressGCkp2N, addressuwViuTu, {from: accounts[1]});

		await expect(ControllercdMR6Bn.setRewards.call(addresstSiaXxE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressigbrKcC = accounts[3]
		const ControllergsiaVpv = await Controller.new(addressigbrKcC, {from: accounts[2]});
		const addressFNF0cOH = accounts[1]
		const addressiEQSSn = accounts[3]
		const addresskXU8qpZ = "0x0000000000000000000000000000000000000001"
		const addressvrGIvug = accounts[2]
		const addressJNbBGj = accounts[0]
		const addressSY7Lkj7 = accounts[3]
		const addressvqMxf7 = accounts[1]
		const addressS5CCq1M = accounts[1]
		const addressSipM2n = accounts[4]
//		const addressa4FIy9M = await ControllergsiaVpv.setConverter.call(addresskXU8qpZ, addressiEQSSn, addressFNF0cOH, {from: accounts[5]});
//		const addressAe5H6kF = await ControllergsiaVpv.inCaseStrategyTokenGetStuck.call(addressJNbBGj, addressvrGIvug, {from: accounts[4]});
//		const addressdgB5kNR = await ControllergsiaVpv.inCaseStrategyTokenGetStuck.call(addressvqMxf7, addressSY7Lkj7, {from: accounts[1]});
//		const addressBErjB8 = await ControllergsiaVpv.inCaseStrategyTokenGetStuck.call(addressSipM2n, addressS5CCq1M, {from: accounts[4]});

		await expect(ControllergsiaVpv.setConverter.call(addresskXU8qpZ, addressiEQSSn, addressFNF0cOH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresse23UbZS = accounts[5]
		const ControllerUDSTLyL = await Controller.new(addresse23UbZS, {from: accounts[4]});
		const addressSyA2ZXq = accounts[4]
		const addressz3EQD8y = accounts[4]
		const uinty1Gs893 = BigInt("747")
		const addressxobgeUV = accounts[0]
		const addresskN2YluE = accounts[4]
		const addressVSmBJsD = accounts[5]
		const addressfpJuK6l = accounts[4]
		const addressY8f0hDw = accounts[2]
//		const addresss14JRs = await ControllerUDSTLyL.setVault.call(addressz3EQD8y, addressSyA2ZXq, {from: accounts[0]});
//		const addressAqJiM8q = await ControllerUDSTLyL.yearn.call(addresskN2YluE, addressxobgeUV, uinty1Gs893, {from: accounts[4]});
//		const addressYYtnmNP = await ControllerUDSTLyL.inCaseStrategyTokenGetStuck.call(addressfpJuK6l, addressVSmBJsD, {from: accounts[5]});
//		const addressVuEZlCO = await ControllerUDSTLyL.setGovernance.call(addressY8f0hDw, {from: accounts[1]});

		await expect(ControllerUDSTLyL.setVault.call(addressz3EQD8y, addressSyA2ZXq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMo3Mokc = accounts[3]
		const Controllerve9Rsyq = await Controller.new(addressMo3Mokc, {from: accounts[2]});
		const addressJAbBVep = "0x0000000000000000000000000000000000000001"
		const uintzvJIB5g = BigInt("1765")
		const addressXHiMYgV = "0x0000000000000000000000000000000000000001"
		const uintFh149Uu = BigInt("480")
		const addressKGDsgmK = accounts[0]
		const addressigBFxvv = await Controllerve9Rsyq.setGovernance.call(addressJAbBVep, {from: accounts[2]});
		const uintky3WkkQ = await Controllerve9Rsyq.setSplit.call(uintzvJIB5g, {from: accounts[2]});
//		const uintKOK8Hr6 = await Controllerve9Rsyq.balanceOf.call(addressXHiMYgV, {from: accounts[3]});
//		const addressxiTvRBp = await Controllerve9Rsyq.inCaseTokensGetStuck.call(addressKGDsgmK, uintFh149Uu, {from: accounts[1]});

		await expect(Controllerve9Rsyq.balanceOf.call(addressXHiMYgV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressetVNnJ1 = accounts[2]
		const ControllerV7xKn2 = await Controller.new(addressetVNnJ1, {from: accounts[4]});
		const uintgLFeXKG = BigInt("1376")
		const addresspafNoP4 = accounts[4]
		const addressKMKZx5M = accounts[0]
		const addressZ5CB43C = accounts[1]
		const addresswfUPMyH = accounts[2]
		const addressQhc4nW = accounts[3]
		const addresshRSDq5r = accounts[0]
		const uintqDehMUC = BigInt("669")
		const addressIBbnUCd = "0x0000000000000000000000000000000000000001"
//		const addressE75QCC = await ControllerV7xKn2.inCaseTokensGetStuck.call(addresspafNoP4, uintgLFeXKG, {from: accounts[3]});
//		const addressA76OIL = await ControllerV7xKn2.setVault.call(addressZ5CB43C, addressKMKZx5M, {from: accounts[4]});
//		const uintWZxsbHq = await ControllerV7xKn2.balanceOf.call(addresswfUPMyH, {from: accounts[2]});
//		const addresskR132p5 = await ControllerV7xKn2.setVault.call(addresshRSDq5r, addressQhc4nW, {from: accounts[0]});
//		const addressONsISX = await ControllerV7xKn2.inCaseTokensGetStuck.call(addressIBbnUCd, uintqDehMUC, {from: accounts[0]});

		await expect(ControllerV7xKn2.inCaseTokensGetStuck.call(addresspafNoP4, uintgLFeXKG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address7BAh3L = accounts[2]
		const Controllerdz1gAuD = await Controller.new(address7BAh3L, {from: accounts[0]});
		const uintZ8MjXc4 = BigInt("1217")
		const addressJVtyaGv = accounts[2]
		const uintTs4ugM8 = BigInt("1302")
		const addressZFZci3l = accounts[3]
		const uintxsraLdH = BigInt("1749")
		const addressQ1YKt3u = accounts[0]
		const addresseZDdIoT = accounts[5]
//		const addressKHnpeCu = await Controllerdz1gAuD.withdraw.call(addressJVtyaGv, uintZ8MjXc4, {from: accounts[0]});
//		const uintBKHkfVt = await Controllerdz1gAuD.setSplit.call(uintTs4ugM8, {from: accounts[1]});
//		const addressq8oLSfB = await Controllerdz1gAuD.setOneSplit.call(addressZFZci3l, {from: accounts[3]});
//		const addressBcFo5sA = await Controllerdz1gAuD.yearn.call(addresseZDdIoT, addressQ1YKt3u, uintxsraLdH, {from: accounts[4]});

		await expect(Controllerdz1gAuD.withdraw.call(addressJVtyaGv, uintZ8MjXc4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressWT6tx3J = accounts[4]
		const ControllermHnkRYv = await Controller.new(addressWT6tx3J, {from: accounts[3]});
		const addressJy2sQF = accounts[1]
		const addressN3alxR = accounts[5]
		const uintDG9HsU4 = BigInt("193")
		const addressotpuD29 = accounts[3]
		const addresskyFB8wE = accounts[4]
		const addressPuO9lgR = accounts[5]
		const addressVeiqufj = accounts[1]
		const addresshsoiJma = accounts[4]
//		const addressB8KmGzu = await ControllermHnkRYv.revokeStrategy.call(addressN3alxR, addressJy2sQF, {from: accounts[1]});
//		const uintzBDMNK6 = await ControllermHnkRYv.getExpectedReturn.call(addresskyFB8wE, addressotpuD29, uintDG9HsU4, {from: accounts[1]});
//		const addressSczhVm6 = await ControllermHnkRYv.setConverter.call(addresshsoiJma, addressVeiqufj, addressPuO9lgR, {from: accounts[5]});

		await expect(ControllermHnkRYv.revokeStrategy.call(addressN3alxR, addressJy2sQF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjmn8rn7 = accounts[5]
		const ControllerfbOo0Wf = await Controller.new(addressjmn8rn7, {from: accounts[0]});
		const uintk7JksLG = BigInt("428")
		const addressadnyCUn = accounts[4]
		const addressY0eg9iH = accounts[0]
		const addressMk5SipO = accounts[0]
		const addressoeOke5P = accounts[2]
		const addressPQesQ11 = accounts[4]
		const addressCZIi8Um = accounts[1]
		const uintHJ3QHyS = BigInt("1933")
		const addressu2LPSrY = "0x0000000000000000000000000000000000000001"
		const addressGWpZWQA = accounts[5]
//		const uintZfjXPTi = await ControllerfbOo0Wf.getExpectedReturn.call(addressY0eg9iH, addressadnyCUn, uintk7JksLG, {from: accounts[4]});
//		const addressgzDm2Mv = await ControllerfbOo0Wf.inCaseStrategyTokenGetStuck.call(addressoeOke5P, addressMk5SipO, {from: accounts[0]});
//		const addressSSXTrlv = await ControllerfbOo0Wf.approveStrategy.call(addressCZIi8Um, addressPQesQ11, {from: accounts[1]});
//		const uintZ525z2L = await ControllerfbOo0Wf.getExpectedReturn.call(addressGWpZWQA, addressu2LPSrY, uintHJ3QHyS, {from: accounts[0]});

		await expect(ControllerfbOo0Wf.getExpectedReturn.call(addressY0eg9iH, addressadnyCUn, uintk7JksLG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressf9qiDbO = accounts[3]
		const ControllergsiaVpv = await Controller.new(addressf9qiDbO, {from: accounts[2]});
		const addresscZesJv = "0x0000000000000000000000000000000000000001"
		const addressCwF519M = accounts[1]
		const uinteGCcw42 = BigInt("961")
		const addressyweuv4o = accounts[1]
		const addresshPvWx6z = accounts[3]
		const addressYaPgpLm = "0x0000000000000000000000000000000000000001"
		const addressxbfUUti = accounts[2]
		const addressMuR0nLr = accounts[0]
		const addressTxHIBFG = accounts[4]
		const addressJ0GnRh6 = accounts[1]
		const addressPF9siMm = "0x0000000000000000000000000000000000000001"
		const addressltzM2sx = accounts[1]
		const addressjkdNBN = accounts[4]
//		const addressWibRB5Y = await ControllergsiaVpv.inCaseStrategyTokenGetStuck.call(addressCwF519M, addresscZesJv, {from: accounts[4]});
//		const uintrgpgCUK = await ControllergsiaVpv.setSplit.call(uinteGCcw42, {from: accounts[3]});
//		const addressa4FIy9M = await ControllergsiaVpv.setConverter.call(addressYaPgpLm, addresshPvWx6z, addressyweuv4o, {from: accounts[5]});
//		const addressAe5H6kF = await ControllergsiaVpv.inCaseStrategyTokenGetStuck.call(addressMuR0nLr, addressxbfUUti, {from: accounts[4]});
//		const addressdgB5kNR = await ControllergsiaVpv.inCaseStrategyTokenGetStuck.call(addressJ0GnRh6, addressTxHIBFG, {from: accounts[1]});
//		const addresskGt3LcS = await ControllergsiaVpv.withdrawAll.call(addressPF9siMm, {from: accounts[5]});
//		const addressBErjB8 = await ControllergsiaVpv.inCaseStrategyTokenGetStuck.call(addressjkdNBN, addressltzM2sx, {from: accounts[4]});

		await expect(ControllergsiaVpv.inCaseStrategyTokenGetStuck.call(addressCwF519M, addresscZesJv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressvyG3oEl = accounts[4]
		const ControllermHnkRYv = await Controller.new(addressvyG3oEl, {from: accounts[3]});
		const addressFnqotLH = accounts[0]
		const addresseD52dRO = accounts[2]
		const uint2DtNAg = BigInt("193")
		const addressPRt3O4j = accounts[4]
		const addresso7TaW1J = accounts[4]
		const addressLPwEtXP = accounts[5]
		const addressPYDhOxy = accounts[1]
		const addressvug37QJ = accounts[4]
//		const addressXvAC8ai = await ControllermHnkRYv.approveStrategy.call(addresseD52dRO, addressFnqotLH, {from: accounts[2]});
//		const uintzBDMNK6 = await ControllermHnkRYv.getExpectedReturn.call(addresso7TaW1J, addressPRt3O4j, uint2DtNAg, {from: accounts[1]});
//		const addressSczhVm6 = await ControllermHnkRYv.setConverter.call(addressvug37QJ, addressPYDhOxy, addressLPwEtXP, {from: accounts[5]});

		await expect(ControllermHnkRYv.approveStrategy.call(addresseD52dRO, addressFnqotLH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressbNGnlN9 = accounts[2]
		const ControllerV7xKn2 = await Controller.new(addressbNGnlN9, {from: accounts[4]});
		const addressLwC3Rsg = accounts[3]
		const addressAJL5ZpU = accounts[3]
		const addressRi6m452 = accounts[2]
		const uintTTDgsz6 = BigInt("1376")
		const addressbAg0VZD = accounts[4]
		const addresspdZ9VBG = accounts[0]
		const addressSnB7nDm = accounts[2]
		const addresslYTaPXz = accounts[2]
		const uintDL9CPZD = BigInt("622")
		const addressUDF0tHz = accounts[3]
		const addresslZIHIpR = accounts[0]
		const addressnQDAhjg = accounts[3]
		const addressVviP0Gv = accounts[0]
		const uintG57HBEH = BigInt("669")
		const addressK9KwWaH = "0x0000000000000000000000000000000000000001"
		const addressa6SxlaY = await ControllerV7xKn2.setConverter.call(addressRi6m452, addressAJL5ZpU, addressLwC3Rsg, {from: accounts[4]});
//		const addressE75QCC = await ControllerV7xKn2.inCaseTokensGetStuck.call(addressbAg0VZD, uintTTDgsz6, {from: accounts[3]});
//		const addressA76OIL = await ControllerV7xKn2.setVault.call(addressSnB7nDm, addresspdZ9VBG, {from: accounts[4]});
//		const uintWZxsbHq = await ControllerV7xKn2.balanceOf.call(addresslYTaPXz, {from: accounts[2]});
//		const uintTTxcZYw = await ControllerV7xKn2.getExpectedReturn.call(addresslZIHIpR, addressUDF0tHz, uintDL9CPZD, {from: accounts[3]});
//		const addresskR132p5 = await ControllerV7xKn2.setVault.call(addressVviP0Gv, addressnQDAhjg, {from: accounts[0]});
//		const addressONsISX = await ControllerV7xKn2.inCaseTokensGetStuck.call(addressK9KwWaH, uintG57HBEH, {from: accounts[0]});

		await expect(ControllerV7xKn2.inCaseTokensGetStuck.call(addressbAg0VZD, uintTTDgsz6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressshVhilV = accounts[4]
		const ControllerZlIJpK = await Controller.new(addressshVhilV, {from: accounts[0]});
		const addressOzYfkf5 = accounts[5]
		const addressaUGx3C3 = accounts[3]
		const addressxrdlAJD = accounts[3]
		const uintlo59tPR = BigInt("803")
		const uintUkLl0L = BigInt("707")
		const addresspHYWt9t = accounts[0]
		const addresszJuBkoK = await ControllerZlIJpK.revokeStrategy.call(addressaUGx3C3, addressOzYfkf5, {from: accounts[0]});
//		const addressMpe1Kk = await ControllerZlIJpK.withdrawAll.call(addressxrdlAJD, {from: accounts[0]});
//		const uintQmJ5wom = await ControllerZlIJpK.setSplit.call(uintlo59tPR, {from: accounts[4]});
//		const addressucOpic9 = await ControllerZlIJpK.withdraw.call(addresspHYWt9t, uintUkLl0L, {from: accounts[3]});

		await expect(ControllerZlIJpK.withdrawAll.call(addressxrdlAJD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address4ceQcj = accounts[4]
		const ControllermHnkRYv = await Controller.new(address4ceQcj, {from: accounts[3]});
		const uintEpAhugr = BigInt("590")
		const addressPY9bpEy = accounts[0]
		const uintdlHfVda = BigInt("1154")
		const addressUciGTEN = accounts[2]
		const addressaKcgWKh = accounts[0]
		const addressgAVrwYU = accounts[2]
		const uintYFFXLSC = BigInt("193")
		const addressQzdKcPB = accounts[5]
		const addressTFa6zUT = accounts[4]
		const addressHB27prC = accounts[5]
		const addressNkmZnqf = accounts[1]
		const addresshhsU36 = accounts[4]
//		const addressXKdaVjN = await ControllermHnkRYv.earn.call(addressPY9bpEy, uintEpAhugr, {from: accounts[4]});
//		const addressesefU8h = await ControllermHnkRYv.inCaseTokensGetStuck.call(addressUciGTEN, uintdlHfVda, {from: accounts[3]});
//		const addressXvAC8ai = await ControllermHnkRYv.approveStrategy.call(addressgAVrwYU, addressaKcgWKh, {from: accounts[2]});
//		const uintzBDMNK6 = await ControllermHnkRYv.getExpectedReturn.call(addressTFa6zUT, addressQzdKcPB, uintYFFXLSC, {from: accounts[1]});
//		const addressSczhVm6 = await ControllermHnkRYv.setConverter.call(addresshhsU36, addressNkmZnqf, addressHB27prC, {from: accounts[5]});

		await expect(ControllermHnkRYv.earn.call(addressPY9bpEy, uintEpAhugr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressf7dhtnc = accounts[1]
		const Controllerq3IIyLK = await Controller.new(addressf7dhtnc, {from: "0x0000000000000000000000000000000000000001"});
		const uintPyFdwA = BigInt("954")
		const addressmH9Wf0 = accounts[3]
		const addressfKb3v0d = accounts[0]
		const uintjdEcrfy = BigInt("1131")
		const addressPEua65b = accounts[4]
		const addresspdIptS = accounts[5]
		const addressO3H9Z4B = accounts[4]
		const addresszA9XBKy = "0x0000000000000000000000000000000000000001"
		const address0ggLjU = accounts[4]
		const addressely0maY = accounts[0]
		const addressjePNhhz = accounts[3]
		const addressy2Mccku = await Controllerq3IIyLK.inCaseTokensGetStuck.call(addressmH9Wf0, uintPyFdwA, {from: accounts[5]});
		const addressIHrDMuY = await Controllerq3IIyLK.setStrategist.call(addressfKb3v0d, {from: accounts[2]});
		const uintIFzyd8Q = await Controllerq3IIyLK.getExpectedReturn.call(addresspdIptS, addressPEua65b, uintjdEcrfy, {from: accounts[4]});
		const addressgchZiBW = await Controllerq3IIyLK.approveStrategy.call(addresszA9XBKy, addressO3H9Z4B, {from: accounts[1]});
		const addressy3Xn7q3 = await Controllerq3IIyLK.setOneSplit.call(address0ggLjU, {from: accounts[0]});
		const addressfEZ0s1 = await Controllerq3IIyLK.approveStrategy.call(addressjePNhhz, addressely0maY, {from: accounts[2]});
	});

	it('test for Controller', async () => {
		const addresst305IOS = accounts[5]
		const ControllerUDSTLyL = await Controller.new(addresst305IOS, {from: accounts[4]});
		const addressV3aCx4L = accounts[3]
		const addressHJv4zRN = accounts[5]
		const addressfLw1siX = accounts[4]
		const addressXspUBH = accounts[5]
		const addressmIJrd2 = accounts[5]
//		const addresso6C8zma = await ControllerUDSTLyL.setOneSplit.call(addressV3aCx4L, {from: accounts[5]});
//		const addresss14JRs = await ControllerUDSTLyL.setVault.call(addressfLw1siX, addressHJv4zRN, {from: accounts[0]});
//		const addressYYtnmNP = await ControllerUDSTLyL.inCaseStrategyTokenGetStuck.call(addressmIJrd2, addressXspUBH, {from: accounts[5]});

		await expect(ControllerUDSTLyL.setOneSplit.call(addressV3aCx4L, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjD2wERY = accounts[5]
		const Controllerbd57iOb = await Controller.new(addressjD2wERY, {from: accounts[5]});
		const addressdlWq4XK = accounts[4]
		const addressaMmJX7b = accounts[1]
		const addressMr6Hjdx = accounts[0]
		const uintXeU8DIo = BigInt("1498")
		const addressxLysWjK = "0x0000000000000000000000000000000000000001"
		const addressnvy9TrP = accounts[1]
		const addressPJYMGj9 = accounts[4]
		const addressuFtbk3T = accounts[0]
		const uintmqSKqda = BigInt("131")
		const addressPHBmcot = accounts[0]
		const addressqeZr2RV = accounts[0]
//		const addressy6Q9BzE = await Controllerbd57iOb.setStrategy.call(addressaMmJX7b, addressdlWq4XK, {from: accounts[3]});
//		const uintWJYxBbH = await Controllerbd57iOb.balanceOf.call(addressMr6Hjdx, {from: accounts[4]});
//		const addressbIWf0D = await Controllerbd57iOb.yearn.call(addressnvy9TrP, addressxLysWjK, uintXeU8DIo, {from: accounts[0]});
//		const addressMBFojkV = await Controllerbd57iOb.approveStrategy.call(addressuFtbk3T, addressPJYMGj9, {from: accounts[1]});
//		const addressxJ7k7I = await Controllerbd57iOb.yearn.call(addressqeZr2RV, addressPHBmcot, uintmqSKqda, {from: accounts[2]});

		await expect(Controllerbd57iOb.setStrategy.call(addressaMmJX7b, addressdlWq4XK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressy2H0PsP = accounts[5]
		const ControllerUDSTLyL = await Controller.new(addressy2H0PsP, {from: accounts[4]});
		const addressFTkHTL9 = accounts[0]
		const addresswNTkDuz = accounts[2]
		const addressIXUopVM = accounts[4]
		const addressnEvwEL = accounts[5]
		const addressMLaypQ0 = accounts[5]
		const addressas9pp7T = accounts[0]
		const addressvp2PY0j = await ControllerUDSTLyL.setOneSplit.call(addressFTkHTL9, {from: accounts[4]});
//		const addressvbpUCRN = await ControllerUDSTLyL.setStrategy.call(addressIXUopVM, addresswNTkDuz, {from: "0x0000000000000000000000000000000000000001"});
//		const addresss14JRs = await ControllerUDSTLyL.setVault.call(addressMLaypQ0, addressnEvwEL, {from: accounts[0]});
//		const addressUa5qmvr = await ControllerUDSTLyL.setRewards.call(addressas9pp7T, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerUDSTLyL.setStrategy.call(addressIXUopVM, addresswNTkDuz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressv8CTGTz = accounts[5]
		const ControllerUDSTLyL = await Controller.new(addressv8CTGTz, {from: accounts[4]});
		const uintXN91yvP = BigInt("795")
		const addressZJb5AFX = accounts[3]
		const addressqPR05fC = accounts[0]
		const addresspFyM8Wd = accounts[3]
		const addressQlTwzTU = accounts[5]
		const addressbEYYrDt = accounts[5]
		const addresscMZfwZg = accounts[5]
		const addressnbsbIud = accounts[2]
		const addresssCSzd2 = accounts[6]
		const addressAqdNtIp = accounts[4]
//		const addresseRHM4rD = await ControllerUDSTLyL.yearn.call(addressqPR05fC, addressZJb5AFX, uintXN91yvP, {from: accounts[5]});
//		const addressPj4any3 = await ControllerUDSTLyL.setStrategy.call(addressQlTwzTU, addresspFyM8Wd, {from: accounts[5]});
//		const addresss14JRs = await ControllerUDSTLyL.setVault.call(addresscMZfwZg, addressbEYYrDt, {from: accounts[0]});
//		const addressuWsvwVL = await ControllerUDSTLyL.setStrategist.call(addressnbsbIud, {from: accounts[0]});
//		const addressVxjcM9v = await ControllerUDSTLyL.inCaseStrategyTokenGetStuck.call(addressAqdNtIp, addresssCSzd2, {from: accounts[2]});

		await expect(ControllerUDSTLyL.yearn.call(addressqPR05fC, addressZJb5AFX, uintXN91yvP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressSz87TOj = accounts[4]
		const ControllermHnkRYv = await Controller.new(addressSz87TOj, {from: accounts[3]});
		const addressWazAURR = accounts[3]
		const addressy9b8V7D = accounts[4]
		const addresspooZfi = accounts[2]
		const uintZlfbd0 = BigInt("588")
		const addressrGuwCB = accounts[1]
		const addressaEUrwPB = accounts[0]
		const addressllAXIMt = accounts[2]
		const addressJfRPChL = await ControllermHnkRYv.setGovernance.call(addressWazAURR, {from: accounts[3]});
		const addressjOEcjhK = await ControllermHnkRYv.approveStrategy.call(addresspooZfi, addressy9b8V7D, {from: accounts[3]});
//		const addressXKdaVjN = await ControllermHnkRYv.earn.call(addressrGuwCB, uintZlfbd0, {from: accounts[4]});
//		const addressIXXKzR2 = await ControllermHnkRYv.setVault.call(addressllAXIMt, addressaEUrwPB, {from: accounts[2]});

		await expect(ControllermHnkRYv.earn.call(addressrGuwCB, uintZlfbd0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressUxF0Ua = accounts[2]
		const ControllerV7xKn2 = await Controller.new(addressUxF0Ua, {from: accounts[4]});
		const uintL3KYQKa = BigInt("751")
		const addressbPeKJzQ = "0x0000000000000000000000000000000000000001"
		const addresso5XLhvM = accounts[2]
		const uintYo6QM6T = BigInt("1379")
		const addressinq2aoW = accounts[3]
//		const addressSnRVdVq = await ControllerV7xKn2.yearn.call(addresso5XLhvM, addressbPeKJzQ, uintL3KYQKa, {from: accounts[4]});
//		const addressE75QCC = await ControllerV7xKn2.inCaseTokensGetStuck.call(addressinq2aoW, uintYo6QM6T, {from: accounts[3]});

		await expect(ControllerV7xKn2.yearn.call(addresso5XLhvM, addressbPeKJzQ, uintL3KYQKa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressNalgSoG = accounts[4]
		const Controllerkmkqksb = await Controller.new(addressNalgSoG, {from: accounts[4]});
		const uintaG1wIb8 = BigInt("695")
		const addressjucLg7 = accounts[2]
		const addressidDXW00 = accounts[1]
		const addressDqLaKLO = accounts[6]
//		const addressihbhlzG = await Controllerkmkqksb.inCaseTokensGetStuck.call(addressjucLg7, uintaG1wIb8, {from: accounts[4]});
//		const addressN7Cfq5 = await Controllerkmkqksb.setOneSplit.call(addressidDXW00, {from: accounts[0]});
//		const addressCxls7Ot = await Controllerkmkqksb.setStrategist.call(addressDqLaKLO, {from: accounts[2]});

		await expect(Controllerkmkqksb.inCaseTokensGetStuck.call(addressjucLg7, uintaG1wIb8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMAQECe8 = accounts[4]
		const ControllermHnkRYv = await Controller.new(addressMAQECe8, {from: accounts[3]});
		const addresstkqwwZC = accounts[2]
		const addressuzDnNh6 = "0x0000000000000000000000000000000000000001"
		const addressgMp75ld = accounts[1]
		const addressiFk6Mfg = accounts[2]
		const addressNpLXdJl = accounts[1]
		const addresseB2x8Un = await ControllermHnkRYv.setVault.call(addressuzDnNh6, addresstkqwwZC, {from: accounts[3]});
//		const addressO90ViNJ = await ControllermHnkRYv.setStrategy.call(addressiFk6Mfg, addressgMp75ld, {from: accounts[4]});
//		const addressX3JZHTh = await ControllermHnkRYv.setGovernance.call(addressNpLXdJl, {from: accounts[4]});

		await expect(ControllermHnkRYv.setStrategy.call(addressiFk6Mfg, addressgMp75ld, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressj2SZqhy = accounts[4]
		const Controllerujge8WK = await Controller.new(addressj2SZqhy, {from: accounts[0]});
		const addresshkIuxXL = accounts[1]
		const addressvX1Phnp = accounts[3]
		const addressuvT7B5M = accounts[3]
//		const addressNkhmHET = await Controllerujge8WK.setStrategy.call(addressvX1Phnp, addresshkIuxXL, {from: accounts[0]});
//		const addresswjvFJZK = await Controllerujge8WK.setGovernance.call(addressuvT7B5M, {from: accounts[0]});

		await expect(Controllerujge8WK.setStrategy.call(addressvX1Phnp, addresshkIuxXL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJqieLb2 = accounts[4]
		const Controllerujge8WK = await Controller.new(addressJqieLb2, {from: accounts[0]});
		const addressmFJJsyB = accounts[2]
		const addressyDnZpm = accounts[2]
		const addressaW2Xc08 = accounts[2]
		const addressBie9lQ2 = accounts[4]
//		const addressow1tpnv = await Controllerujge8WK.inCaseStrategyTokenGetStuck.call(addressyDnZpm, addressmFJJsyB, {from: accounts[0]});
//		const addressNkhmHET = await Controllerujge8WK.setStrategy.call(addressBie9lQ2, addressaW2Xc08, {from: accounts[0]});

		await expect(Controllerujge8WK.inCaseStrategyTokenGetStuck.call(addressyDnZpm, addressmFJJsyB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressEwi7Kd = accounts[4]
		const ControllerghI8aPg = await Controller.new(addressEwi7Kd, {from: accounts[1]});
		const addressQFWSbDv = accounts[1]
		const uintuo8eLGE = BigInt("212")
		const addressrKKxuI = accounts[3]
		const addressFFIZOTB = accounts[3]
		const uintqUCwXhi = BigInt("948")
		const addressjPER44d = "0x0000000000000000000000000000000000000001"
		const addressvm0gvTy = accounts[3]
		const addressMRssjbJ = accounts[3]
		const addressDjXNotj = accounts[4]
		const addressz2x4JRE = accounts[1]
		const addressd6CULeP = await ControllerghI8aPg.setRewards.call(addressQFWSbDv, {from: accounts[1]});
//		const addressWOX5FLB = await ControllerghI8aPg.yearn.call(addressFFIZOTB, addressrKKxuI, uintuo8eLGE, {from: accounts[2]});
//		const addressU1seDE = await ControllerghI8aPg.inCaseTokensGetStuck.call(addressjPER44d, uintqUCwXhi, {from: accounts[1]});
//		const addresspR7CnjI = await ControllerghI8aPg.setVault.call(addressMRssjbJ, addressvm0gvTy, {from: accounts[1]});
//		const addressAubqS9 = await ControllerghI8aPg.approveStrategy.call(addressz2x4JRE, addressDjXNotj, {from: accounts[3]});

		await expect(ControllerghI8aPg.yearn.call(addressFFIZOTB, addressrKKxuI, uintuo8eLGE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressftVI0J4 = accounts[4]
		const Controllerkmkqksb = await Controller.new(addressftVI0J4, {from: accounts[4]});
		const addressMsaJqmq = accounts[2]
		const addressCxCq0Jy = accounts[7]
		const addressS5vrtDS = await Controllerkmkqksb.setStrategist.call(addressMsaJqmq, {from: accounts[4]});
//		const addressCxls7Ot = await Controllerkmkqksb.setStrategist.call(addressCxCq0Jy, {from: accounts[2]});

		await expect(Controllerkmkqksb.setStrategist.call(addressCxCq0Jy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZ2BIdyT = accounts[2]
		const ControllerV7xKn2 = await Controller.new(addressZ2BIdyT, {from: accounts[4]});
		const uintBzHvo4e = BigInt("751")
		const addressKk5l2E5 = "0x00000000000000000000000000000000000000-1"
		const addressN88wue = accounts[2]
		const addressqLY8aEb = accounts[5]
		const uintHqQd38Q = BigInt("883")
		const addressEBbVfjC = accounts[1]
		const uintxtnaseE = BigInt("415")
		const addressgeYqhLz = accounts[2]
		const uintPLABHrp = BigInt("322")
		const addressXedcALc = "0x0000000000000000000000000000000000000001"
		const uintUdhPtF = BigInt("850")
		const addressg43EdO2 = accounts[4]
		const addressWGQbWuj = accounts[0]
		const addressDsSfMi9 = accounts[3]
//		const addressSnRVdVq = await ControllerV7xKn2.yearn.call(addressN88wue, addressKk5l2E5, uintBzHvo4e, {from: accounts[4]});
//		const addressqc366R = await ControllerV7xKn2.withdrawAll.call(addressqLY8aEb, {from: accounts[1]});
//		const addressuHpTF6 = await ControllerV7xKn2.earn.call(addressEBbVfjC, uintHqQd38Q, {from: accounts[2]});
//		const uintdad61tY = await ControllerV7xKn2.setSplit.call(uintxtnaseE, {from: accounts[2]});
//		const addressZ2IKJSo = await ControllerV7xKn2.setOneSplit.call(addressgeYqhLz, {from: "0x0000000000000000000000000000000000000001"});
//		const addressKBvwLVZ = await ControllerV7xKn2.withdraw.call(addressXedcALc, uintPLABHrp, {from: accounts[2]});
//		const addressRnC1IBh = await ControllerV7xKn2.yearn.call(addressWGQbWuj, addressg43EdO2, uintUdhPtF, {from: accounts[4]});
//		const addresshVmVeWe = await ControllerV7xKn2.withdrawAll.call(addressDsSfMi9, {from: accounts[4]});

		await expect(ControllerV7xKn2.yearn.call(addressN88wue, addressKk5l2E5, uintBzHvo4e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})