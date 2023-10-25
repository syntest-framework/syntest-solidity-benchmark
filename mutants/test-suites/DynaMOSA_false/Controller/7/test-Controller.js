const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressv8McilE = accounts[1]
		const Controllerm5eW9x = await Controller.new(addressv8McilE, {from: accounts[2]});
		const uintv5KZUsl = BigInt("1874")
		const addressJlsSW9 = accounts[1]
		const addressEq2DTgv = accounts[5]
		const addressGClD6VI = accounts[1]
		const addressClwdbaJ = accounts[0]
		const addressb71JBUW = accounts[4]
		const addressuTlpk2 = accounts[3]
		const addresslr3CDoD = accounts[4]
		const addressVIHoQKq = accounts[3]
//		const uint7uY50M = await Controllerm5eW9x.getExpectedReturn.call(addressEq2DTgv, addressJlsSW9, uintv5KZUsl, {from: accounts[5]});
//		const addressmCQDsmi = await Controllerm5eW9x.setVault.call(addressClwdbaJ, addressGClD6VI, {from: accounts[5]});
//		const addressdH5KMH = await Controllerm5eW9x.setConverter.call(addresslr3CDoD, addressuTlpk2, addressb71JBUW, {from: accounts[4]});
//		const uintouhGDJ2 = await Controllerm5eW9x.balanceOf.call(addressVIHoQKq, {from: accounts[4]});

		await expect(Controllerm5eW9x.getExpectedReturn.call(addressEq2DTgv, addressJlsSW9, uintv5KZUsl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressE2lrZwf = accounts[2]
		const ControllerDlblSIb = await Controller.new(addressE2lrZwf, {from: accounts[4]});
		const addressyRJB88 = accounts[1]
		const uintgcluKNE = BigInt("4")
		const addressfx09ouW = accounts[5]
		const addressrclYaGD = accounts[1]
		const addresse1LzA4K = accounts[4]
		const addressR094NfZ = accounts[4]
		const addresswHTnNhU = accounts[4]
//		const addressOx7x1pc = await ControllerDlblSIb.setOneSplit.call(addressyRJB88, {from: accounts[3]});
//		const addressQ6umW6D = await ControllerDlblSIb.inCaseTokensGetStuck.call(addressfx09ouW, uintgcluKNE, {from: accounts[3]});
//		const addressIjMzIe = await ControllerDlblSIb.setStrategy.call(addresse1LzA4K, addressrclYaGD, {from: accounts[2]});
//		const addresskM7GeQF = await ControllerDlblSIb.setStrategy.call(addresswHTnNhU, addressR094NfZ, {from: accounts[2]});

		await expect(ControllerDlblSIb.setOneSplit.call(addressyRJB88, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressLQ9sNmt = accounts[0]
		const ControllerDtQtDr0 = await Controller.new(addressLQ9sNmt, {from: accounts[3]});
		const uintPNRKNVe = BigInt("1266")
		const addressavmu4NQ = "0x0000000000000000000000000000000000000001"
		const addressgyPMXLg = accounts[4]
		const addressnse7qg = accounts[2]
		const uintUUZ1n86 = BigInt("23")
		const addressWQa2Nol = accounts[3]
		const addressMjJ1EpV = accounts[1]
		const uintuSgRmd7 = BigInt("814")
		const addressZH40Mqb = accounts[1]
		const addressr60tzI = accounts[1]
		const addressJNKlOJO = accounts[5]
		const addressZenvd5C = accounts[3]
//		const addressIu8uPXH = await ControllerDtQtDr0.earn.call(addressavmu4NQ, uintPNRKNVe, {from: accounts[1]});
//		const addressq9LXrYV = await ControllerDtQtDr0.revokeStrategy.call(addressnse7qg, addressgyPMXLg, {from: accounts[0]});
//		const uintoPL8sYW = await ControllerDtQtDr0.getExpectedReturn.call(addressMjJ1EpV, addressWQa2Nol, uintUUZ1n86, {from: accounts[1]});
//		const addressFZ8SZOM = await ControllerDtQtDr0.yearn.call(addressr60tzI, addressZH40Mqb, uintuSgRmd7, {from: accounts[5]});
//		const addressLudUXlu = await ControllerDtQtDr0.approveStrategy.call(addressZenvd5C, addressJNKlOJO, {from: accounts[1]});

		await expect(ControllerDtQtDr0.earn.call(addressavmu4NQ, uintPNRKNVe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressN2Vs5C = "0x0000000000000000000000000000000000000001"
		const ControllerKzTmsz4 = await Controller.new(addressN2Vs5C, {from: accounts[2]});
		const addressxQTH2Ap = accounts[4]
		const addressVP4HSKg = accounts[2]
		const addressRsGMeKm = accounts[0]
		const addressA0nihTK = accounts[1]
		const addressn4rsunI = accounts[0]
		const addresseUNAr0u = accounts[1]
		const addressk7pbO8P = accounts[4]
//		const addressWd3TgQ = await ControllerKzTmsz4.setVault.call(addressVP4HSKg, addressxQTH2Ap, {from: accounts[4]});
//		const addressqEXsTbO = await ControllerKzTmsz4.setConverter.call(addressn4rsunI, addressA0nihTK, addressRsGMeKm, {from: accounts[0]});
//		const addressCBoojs1 = await ControllerKzTmsz4.setStrategist.call(addresseUNAr0u, {from: accounts[0]});
//		const addresszgW8xtW = await ControllerKzTmsz4.withdrawAll.call(addressk7pbO8P, {from: accounts[1]});

		await expect(ControllerKzTmsz4.setVault.call(addressVP4HSKg, addressxQTH2Ap, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressmA3BUs = accounts[3]
		const Controllert5vwWzV = await Controller.new(addressmA3BUs, {from: accounts[2]});
		const addressdyVUJf = accounts[3]
		const uintnVVjMlU = BigInt("207")
		const addressRhoeYUY = accounts[4]
//		const addressrqtFoN1 = await Controllert5vwWzV.withdrawAll.call(addressdyVUJf, {from: accounts[0]});
//		const addressnVvQgrL = await Controllert5vwWzV.earn.call(addressRhoeYUY, uintnVVjMlU, {from: accounts[4]});

		await expect(Controllert5vwWzV.withdrawAll.call(addressdyVUJf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressbWGgQWE = accounts[2]
		const ControllerBYUz0uu = await Controller.new(addressbWGgQWE, {from: "0x0000000000000000000000000000000000000001"});
		const addressifuTYfw = accounts[5]
		const addressaorQsYM = accounts[2]
		const uintF614dqb = BigInt("3")
		const addressjlzNVOi = accounts[5]
		const addressbuUYQgL = accounts[4]
		const addressD6ZXMoy = accounts[0]
		const addressPqP38d = accounts[3]
		const addressFWgTrZ = await ControllerBYUz0uu.setGovernance.call(addressifuTYfw, {from: accounts[4]});
		const uintW9ok3M = await ControllerBYUz0uu.balanceOf.call(addressaorQsYM, {from: accounts[0]});
		const addressseXQVFZ = await ControllerBYUz0uu.withdraw.call(addressjlzNVOi, uintF614dqb, {from: accounts[0]});
		const addresscVzUbfv = await ControllerBYUz0uu.setConverter.call(addressPqP38d, addressD6ZXMoy, addressbuUYQgL, {from: accounts[0]});
	});

	it('test for Controller', async () => {
		const addressENiHuwX = accounts[2]
		const ControllerDlblSIb = await Controller.new(addressENiHuwX, {from: accounts[4]});
		const addressOcVjoxB = accounts[4]
		const addressX8cL1t = accounts[1]
		const addressYcNTfzA = accounts[2]
		const uintKP3LrTL = BigInt("0")
		const addressY9Br6vB = accounts[5]
		const addressHFL3GY = accounts[1]
		const addressffpSLXA = accounts[4]
		const addressmFj8p1G = accounts[4]
		const addressr2MUeRj = accounts[4]
//		const addressDWK97qZ = await ControllerDlblSIb.setRewards.call(addressOcVjoxB, {from: accounts[0]});
//		const addressOx7x1pc = await ControllerDlblSIb.setOneSplit.call(addressX8cL1t, {from: accounts[3]});
//		const addressDNAY3EC = await ControllerDlblSIb.setGovernance.call(addressYcNTfzA, {from: accounts[2]});
//		const addressQ6umW6D = await ControllerDlblSIb.inCaseTokensGetStuck.call(addressY9Br6vB, uintKP3LrTL, {from: accounts[3]});
//		const addressIjMzIe = await ControllerDlblSIb.setStrategy.call(addressffpSLXA, addressHFL3GY, {from: accounts[2]});
//		const addresskM7GeQF = await ControllerDlblSIb.setStrategy.call(addressr2MUeRj, addressmFj8p1G, {from: accounts[2]});

		await expect(ControllerDlblSIb.setRewards.call(addressOcVjoxB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressK0sWlW7 = accounts[4]
		const ControllerHusm3G0 = await Controller.new(addressK0sWlW7, {from: accounts[0]});
		const addressZh3UCjh = accounts[2]
		const addressklYsqwD = accounts[1]
		const addressHbFvwqF = accounts[1]
		const addressvW7vVYJ = accounts[4]
		const addressWEg8UI6 = accounts[1]
		const uintORj7P4B = BigInt("730")
		const addressiGNPlmt = accounts[3]
		const addressCfVl3A3 = accounts[3]
		const addresstnmUsvq = accounts[5]
		const addressQyBLoQg = "0x0000000000000000000000000000000000000001"
//		const uintzNZFd0Q = await ControllerHusm3G0.balanceOf.call(addressZh3UCjh, {from: accounts[0]});
//		const addressqciTyVF = await ControllerHusm3G0.setStrategy.call(addressHbFvwqF, addressklYsqwD, {from: accounts[3]});
//		const addressL01gOFX = await ControllerHusm3G0.approveStrategy.call(addressWEg8UI6, addressvW7vVYJ, {from: accounts[3]});
//		const uintDukiWNl = await ControllerHusm3G0.getExpectedReturn.call(addressCfVl3A3, addressiGNPlmt, uintORj7P4B, {from: accounts[3]});
//		const addressoYcSob2 = await ControllerHusm3G0.setVault.call(addressQyBLoQg, addresstnmUsvq, {from: accounts[4]});

		await expect(ControllerHusm3G0.balanceOf.call(addressZh3UCjh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressc1ZwCfc = accounts[3]
		const Controllert5vwWzV = await Controller.new(addressc1ZwCfc, {from: accounts[2]});
		const addresstJq3VhH = accounts[4]
		const addressxrdSzOj = accounts[2]
		const addressHRZWdge = accounts[1]
		const addressTHxeWMA = "0x0000000000000000000000000000000000000001"
		const addressBf22koy = accounts[3]
		const uintMwaQiuB = BigInt("207")
		const addressi7NB13i = accounts[4]
		const addressWTClRUo = accounts[1]
		const addressluopquP = "0x0000000000000000000000000000000000000001"
		const addressDOoDDQw = accounts[1]
		const addresskbGFIPr = accounts[1]
//		const addressXLaEbAM = await Controllert5vwWzV.inCaseStrategyTokenGetStuck.call(addressxrdSzOj, addresstJq3VhH, {from: accounts[0]});
//		const addressSPHQqJW = await Controllert5vwWzV.setConverter.call(addressBf22koy, addressTHxeWMA, addressHRZWdge, {from: accounts[0]});
//		const addressnVvQgrL = await Controllert5vwWzV.earn.call(addressi7NB13i, uintMwaQiuB, {from: accounts[4]});
//		const addressJVujDDO = await Controllert5vwWzV.withdrawAll.call(addressWTClRUo, {from: accounts[3]});
//		const uintdHqgGRm = await Controllert5vwWzV.balanceOf.call(addressluopquP, {from: accounts[1]});
//		const addressnO92wZe = await Controllert5vwWzV.inCaseStrategyTokenGetStuck.call(addresskbGFIPr, addressDOoDDQw, {from: accounts[3]});

		await expect(Controllert5vwWzV.inCaseStrategyTokenGetStuck.call(addressxrdSzOj, addresstJq3VhH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressRB9XS93 = accounts[3]
		const Controllert5vwWzV = await Controller.new(addressRB9XS93, {from: accounts[2]});
		const addressn6XMJYs = accounts[3]
		const addressFkAnBd = accounts[3]
		const addressXsZ7OgE = accounts[3]
//		const addressbIv4mgq = await Controllert5vwWzV.revokeStrategy.call(addressFkAnBd, addressn6XMJYs, {from: accounts[4]});
//		const addressrqtFoN1 = await Controllert5vwWzV.withdrawAll.call(addressXsZ7OgE, {from: accounts[0]});

		await expect(Controllert5vwWzV.revokeStrategy.call(addressFkAnBd, addressn6XMJYs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressrsHIek2 = accounts[0]
		const ControllerDtQtDr0 = await Controller.new(addressrsHIek2, {from: accounts[3]});
		const uintqkT1N5S = BigInt("1259")
		const uintwLpxReD = BigInt("1266")
		const addresscONrv2m = "0x0000000000000000000000000000000000000001"
		const addressGCuScLB = accounts[5]
		const addressyBGWSy = accounts[2]
		const addressr2hoNnB = accounts[5]
		const uintZQDQV3X = BigInt("814")
		const addressPdxtEEI = accounts[1]
		const addressplLrVp = accounts[2]
		const addressbWPVwZS = accounts[0]
//		const uintOVWm9Ke = await ControllerDtQtDr0.setSplit.call(uintqkT1N5S, {from: accounts[2]});
//		const addressIu8uPXH = await ControllerDtQtDr0.earn.call(addresscONrv2m, uintwLpxReD, {from: accounts[1]});
//		const addressq9LXrYV = await ControllerDtQtDr0.revokeStrategy.call(addressyBGWSy, addressGCuScLB, {from: accounts[0]});
//		const uintsK0iKue = await ControllerDtQtDr0.balanceOf.call(addressr2hoNnB, {from: accounts[2]});
//		const addressFZ8SZOM = await ControllerDtQtDr0.yearn.call(addressplLrVp, addressPdxtEEI, uintZQDQV3X, {from: accounts[5]});
//		const addressIhPURLr = await ControllerDtQtDr0.withdrawAll.call(addressbWPVwZS, {from: accounts[2]});

		await expect(ControllerDtQtDr0.setSplit.call(uintqkT1N5S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxPPUkCw = accounts[5]
		const ControllerH7pCY3n = await Controller.new(addressxPPUkCw, {from: accounts[4]});
		const uintKQr8va7 = BigInt("819")
		const addressV6dakj = accounts[3]
		const addresspGMVEla = accounts[3]
		const uintJigB1u = BigInt("596")
		const addressE0w2X8Q = accounts[3]
		const addressvql1bgy = accounts[4]
		const addressHg0GRgW = accounts[0]
		const addressUvvfeJC = accounts[2]
		const addressxCRc9GA = accounts[2]
//		const addressIAkpYXq = await ControllerH7pCY3n.yearn.call(addresspGMVEla, addressV6dakj, uintKQr8va7, {from: accounts[3]});
//		const addressTa0o8Sg = await ControllerH7pCY3n.withdraw.call(addressE0w2X8Q, uintJigB1u, {from: accounts[5]});
//		const addresslc1vmt = await ControllerH7pCY3n.setVault.call(addressHg0GRgW, addressvql1bgy, {from: accounts[3]});
//		const addressIOhX57 = await ControllerH7pCY3n.revokeStrategy.call(addressxCRc9GA, addressUvvfeJC, {from: accounts[1]});

		await expect(ControllerH7pCY3n.yearn.call(addresspGMVEla, addressV6dakj, uintKQr8va7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressIdMYaqb = accounts[3]
		const Controllert5vwWzV = await Controller.new(addressIdMYaqb, {from: accounts[2]});
		const uintmU94gF = BigInt("1617")
		const addressDXQNCOg = accounts[0]
		const uintDngSird = BigInt("207")
		const addressHhAUhAY = accounts[4]
		const addressYaM2RW = accounts[1]
		const addressU6IAgMX = accounts[3]
		const addressRKjY2Bw = accounts[1]
		const addressO5pHdVE = accounts[1]
//		const addressxOatpMa = await Controllert5vwWzV.inCaseTokensGetStuck.call(addressDXQNCOg, uintmU94gF, {from: accounts[4]});
//		const addressnVvQgrL = await Controllert5vwWzV.earn.call(addressHhAUhAY, uintDngSird, {from: accounts[4]});
//		const addressguYhyQ3 = await Controllert5vwWzV.setStrategy.call(addressU6IAgMX, addressYaM2RW, {from: accounts[3]});
//		const addressnO92wZe = await Controllert5vwWzV.inCaseStrategyTokenGetStuck.call(addressO5pHdVE, addressRKjY2Bw, {from: accounts[3]});

		await expect(Controllert5vwWzV.inCaseTokensGetStuck.call(addressDXQNCOg, uintmU94gF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZDIEsW8 = accounts[2]
		const ControllerWqBTuTv = await Controller.new(addressZDIEsW8, {from: accounts[0]});
		const addressrz1YyUJ = accounts[2]
		const addresssnqY5sg = accounts[1]
		const addressbZQ9TU2 = accounts[3]
		const uintxxPr50d = BigInt("749")
		const addresst71kfwS = accounts[2]
		const addressoYN2YAD = "0x0000000000000000000000000000000000000001"
//		const addressmpB4Q2y = await ControllerWqBTuTv.approveStrategy.call(addresssnqY5sg, addressrz1YyUJ, {from: accounts[5]});
//		const addressbVYRrMH = await ControllerWqBTuTv.setStrategist.call(addressbZQ9TU2, {from: accounts[3]});
//		const uintDOMhWZZ = await ControllerWqBTuTv.setSplit.call(uintxxPr50d, {from: accounts[4]});
//		const addressrXjBSi = await ControllerWqBTuTv.setRewards.call(addresst71kfwS, {from: accounts[1]});
//		const addressOiwJuoZ = await ControllerWqBTuTv.setRewards.call(addressoYN2YAD, {from: accounts[1]});

		await expect(ControllerWqBTuTv.approveStrategy.call(addresssnqY5sg, addressrz1YyUJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressY0MZHtT = accounts[1]
		const ControllerQZVcinM = await Controller.new(addressY0MZHtT, {from: accounts[4]});
		const addressz9mDR3a = accounts[5]
		const addresstTQ6XFx = "0x0000000000000000000000000000000000000001"
		const addressabpO3o = accounts[5]
		const addressalTXQYo = accounts[3]
		const addressktRMl6 = accounts[1]
		const uintr3ttfIx = BigInt("440")
		const addresshuu3CMB = accounts[3]
		const addressXwTaeq6 = accounts[4]
		const uintYVjucPX = BigInt("580")
		const uintyHw3W9x = BigInt("1492")
		const addresskCOpYqm = accounts[3]
//		const addressgltG9S0 = await ControllerQZVcinM.setConverter.call(addressabpO3o, addresstTQ6XFx, addressz9mDR3a, {from: accounts[5]});
//		const addressW7tEcS = await ControllerQZVcinM.setStrategy.call(addressktRMl6, addressalTXQYo, {from: accounts[2]});
//		const addressKi8gj4f = await ControllerQZVcinM.withdraw.call(addresshuu3CMB, uintr3ttfIx, {from: accounts[4]});
//		const addresszeCUgL1 = await ControllerQZVcinM.setOneSplit.call(addressXwTaeq6, {from: accounts[1]});
//		const uintpcDKQ3 = await ControllerQZVcinM.setSplit.call(uintYVjucPX, {from: accounts[4]});
//		const addressFTZwPTF = await ControllerQZVcinM.inCaseTokensGetStuck.call(addresskCOpYqm, uintyHw3W9x, {from: accounts[4]});

		await expect(ControllerQZVcinM.setConverter.call(addressabpO3o, addresstTQ6XFx, addressz9mDR3a, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressk8ALCzX = accounts[0]
		const Controller6MF6tX = await Controller.new(addressk8ALCzX, {from: accounts[0]});
		const uintGuFBne = BigInt("118")
		const addressnBzB0hf = accounts[0]
		const addressTMGch4c = accounts[4]
		const uintJBFD7fJ = BigInt("253")
		const addresscgmB0GX = accounts[4]
		const addressi6janyN = accounts[1]
		const addressGhEjkVh = accounts[5]
		const addressHfltZrc = accounts[1]
//		const addresssVrMGPT = await Controller6MF6tX.withdraw.call(addressnBzB0hf, uintGuFBne, {from: accounts[1]});
//		const addressUGitfNP = await Controller6MF6tX.withdrawAll.call(addressTMGch4c, {from: accounts[1]});
//		const uintlPTiFn2 = await Controller6MF6tX.getExpectedReturn.call(addressi6janyN, addresscgmB0GX, uintJBFD7fJ, {from: accounts[0]});
//		const addressftBzvNM = await Controller6MF6tX.setVault.call(addressHfltZrc, addressGhEjkVh, {from: accounts[5]});

		await expect(Controller6MF6tX.withdraw.call(addressnBzB0hf, uintGuFBne, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressvZ60GA7 = accounts[1]
		const ControllerrPtH8HS = await Controller.new(addressvZ60GA7, {from: accounts[0]});
		const addresshK5PcoT = accounts[4]
		const addresslQMRWoH = accounts[4]
		const addresspOGrPkP = accounts[4]
		const uintV9Y6gsX = BigInt("1558")
//		const addresspMPCE45 = await ControllerrPtH8HS.setStrategist.call(addresshK5PcoT, {from: accounts[2]});
//		const addressS3Tru5 = await ControllerrPtH8HS.inCaseStrategyTokenGetStuck.call(addresspOGrPkP, addresslQMRWoH, {from: accounts[0]});
//		const uinty5U9NPd = await ControllerrPtH8HS.setSplit.call(uintV9Y6gsX, {from: accounts[1]});

		await expect(ControllerrPtH8HS.setStrategist.call(addresshK5PcoT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressg7Mapud = accounts[0]
		const Controller6MF6tX = await Controller.new(addressg7Mapud, {from: accounts[0]});
		const addressylj73K0 = accounts[2]
		const addresszzRaqhU = accounts[2]
		const addressAdVsbWL = accounts[0]
		const addressQiUNON = accounts[0]
		const uintvYqPeaE = BigInt("32")
		const addressCpuOtFM = accounts[1]
		const addressNXS3f8w = accounts[4]
		const uintpiNPD9Z = BigInt("444")
		const addressLeAjyg4 = accounts[5]
		const addressmg2BLDd = accounts[1]
		const addressgLXiHJS = accounts[3]
//		const addresshPfsKh = await Controller6MF6tX.setStrategy.call(addresszzRaqhU, addressylj73K0, {from: accounts[3]});
//		const address42zvsm = await Controller6MF6tX.setVault.call(addressQiUNON, addressAdVsbWL, {from: accounts[3]});
//		const addressv4mn5wr = await Controller6MF6tX.yearn.call(addressNXS3f8w, addressCpuOtFM, uintvYqPeaE, {from: accounts[2]});
//		const addressIH8fM79 = await Controller6MF6tX.yearn.call(addressmg2BLDd, addressLeAjyg4, uintpiNPD9Z, {from: "0x0000000000000000000000000000000000000001"});
//		const addressUGitfNP = await Controller6MF6tX.withdrawAll.call(addressgLXiHJS, {from: accounts[1]});

		await expect(Controller6MF6tX.setStrategy.call(addresszzRaqhU, addressylj73K0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressj74GmPW = accounts[3]
		const Controllert5vwWzV = await Controller.new(addressj74GmPW, {from: accounts[2]});
		const addressHhYXvbM = accounts[4]
		const uintU4HRBq4 = BigInt("368")
		const addressbxVJCqB = accounts[3]
		const addresscZa4aOi = accounts[0]
		const addressNzVO15 = "0x0000000000000000000000000000000000000001"
//		const addressoa7wp8 = await Controllert5vwWzV.setGovernance.call(addressHhYXvbM, {from: accounts[5]});
//		const addressvALcBq = await Controllert5vwWzV.yearn.call(addresscZa4aOi, addressbxVJCqB, uintU4HRBq4, {from: accounts[0]});
//		const uint74KKm7 = await Controllert5vwWzV.balanceOf.call(addressNzVO15, {from: accounts[1]});

		await expect(Controllert5vwWzV.setGovernance.call(addressHhYXvbM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresswruK9vE = accounts[0]
		const Controller6MF6tX = await Controller.new(addresswruK9vE, {from: accounts[0]});
		const addresskYuqDZR = accounts[4]
		const addressKjT6eOV = accounts[4]
		const uintWGEnBv1 = BigInt("33")
		const addressJukx3so = accounts[1]
		const addressxH3I0XB = accounts[0]
//		const addressQEqFWCw = await Controller6MF6tX.setStrategy.call(addressKjT6eOV, addresskYuqDZR, {from: accounts[0]});
//		const addressv4mn5wr = await Controller6MF6tX.yearn.call(addressxH3I0XB, addressJukx3so, uintWGEnBv1, {from: accounts[2]});

		await expect(Controller6MF6tX.setStrategy.call(addressKjT6eOV, addresskYuqDZR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressUKvWmaW = accounts[3]
		const Controllert5vwWzV = await Controller.new(addressUKvWmaW, {from: accounts[2]});
		const uintG045Roo = BigInt("1647")
		const addressBTWgzWj = accounts[4]
		const uintxRechlr = BigInt("209")
		const addressTeASu3B = accounts[0]
		const address9trtYX = "0x0000000000000000000000000000000000000001"
		const addressZhIZFv0 = accounts[3]
		const addressGIldczQ = accounts[3]
		const uintbrzFdK8 = BigInt("207")
		const addressrlsG5oV = accounts[5]
		const addresseJjSdOU = accounts[3]
//		const addressUVRNcuf = await Controllert5vwWzV.inCaseTokensGetStuck.call(addressBTWgzWj, uintG045Roo, {from: accounts[2]});
//		const addressz7ikmyT = await Controllert5vwWzV.yearn.call(address9trtYX, addressTeASu3B, uintxRechlr, {from: accounts[1]});
//		const addressawzPgA = await Controllert5vwWzV.setVault.call(addressGIldczQ, addressZhIZFv0, {from: accounts[3]});
//		const addressnVvQgrL = await Controllert5vwWzV.earn.call(addressrlsG5oV, uintbrzFdK8, {from: accounts[4]});
//		const uint74KKm7 = await Controllert5vwWzV.balanceOf.call(addresseJjSdOU, {from: accounts[1]});

		await expect(Controllert5vwWzV.inCaseTokensGetStuck.call(addressBTWgzWj, uintG045Roo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})