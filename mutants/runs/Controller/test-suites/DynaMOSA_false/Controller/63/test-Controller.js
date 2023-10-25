const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressPb6JEPf = accounts[2]
		const ControlleruewuOCP = await Controller.new(addressPb6JEPf, {from: "0x0000000000000000000000000000000000000001"});
		const address0gaSic = accounts[1]
		const addressQjLYgdo = accounts[4]
		const addressLyVtczS = accounts[1]
		const addressQfXlVUn = accounts[2]
		const addressBNWuPVO = await ControlleruewuOCP.revokeStrategy.call(addressQjLYgdo, address0gaSic, {from: accounts[5]});
		const addressDLJzwk = await ControlleruewuOCP.withdrawAll.call(addressLyVtczS, {from: accounts[0]});
		const addressII59SjH = await ControlleruewuOCP.setStrategist.call(addressQfXlVUn, {from: accounts[3]});
	});

	it('test for Controller', async () => {
		const addressRstR7zH = accounts[4]
		const ControllercG9mbiU = await Controller.new(addressRstR7zH, {from: accounts[2]});
		const uinta7mtRK2 = BigInt("1995")
		const addressv2euCxQ = accounts[3]
		const uintUlbMizQ = BigInt("1953")
		const addressDDbFrEY = accounts[0]
		const uintAMNOAO = BigInt("32")
		const addresscQF81HA = accounts[0]
		const uintVudnpvG = await ControllercG9mbiU.setSplit.call(uinta7mtRK2, {from: accounts[4]});
		const addressjhbdnmC = await ControllercG9mbiU.setOneSplit.call(addressv2euCxQ, {from: accounts[2]});
		const addressRzgC00z = await ControllercG9mbiU.inCaseTokensGetStuck.call(addressDDbFrEY, uintUlbMizQ, {from: accounts[0]});
		const addressjnapFb9 = await ControllercG9mbiU.inCaseTokensGetStuck.call(addresscQF81HA, uintAMNOAO, {from: accounts[4]});

		await expect(ControllercG9mbiU.setSplit.call(uinta7mtRK2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressgBSydA3 = accounts[1]
		const Controllerl1fv5kG = await Controller.new(addressgBSydA3, {from: accounts[3]});
		const uintTFE1Vvx = BigInt("1521")
		const addressCTF8s8D = accounts[2]
		const addressBBXeTTI = accounts[2]
		const addressiyxv44t = accounts[1]
		const uintZu7jwvc = BigInt("775")
		const addressJYRC3VT = accounts[4]
		const uintp0avEwt = BigInt("1220")
		const addressouwBVUN = accounts[1]
		const addressMql8MOk = accounts[0]
		const addressTM8Sbni = await Controllerl1fv5kG.earn.call(addressCTF8s8D, uintTFE1Vvx, {from: accounts[2]});
		const addressmOpEqbU = await Controllerl1fv5kG.setVault.call(addressiyxv44t, addressBBXeTTI, {from: "0x0000000000000000000000000000000000000001"});
		const uintMnipwNe = await Controllerl1fv5kG.setSplit.call(uintZu7jwvc, {from: accounts[4]});
		const addresscqoa60R = await Controllerl1fv5kG.withdrawAll.call(addressJYRC3VT, {from: accounts[4]});
		const uintQt2QrRJ = await Controllerl1fv5kG.getExpectedReturn.call(addressMql8MOk, addressouwBVUN, uintp0avEwt, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllerl1fv5kG.earn.call(addressCTF8s8D, uintTFE1Vvx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressyr4PZ3y = accounts[0]
		const ControllerJPg7B0W = await Controller.new(addressyr4PZ3y, {from: accounts[0]});
		const uintBG5caY = BigInt("1946")
		const addresscDu4XON = accounts[3]
		const addresswJwkOl = accounts[1]
		const addressKHuwOw9 = accounts[2]
		const addresshOjNP7h = await ControllerJPg7B0W.yearn.call(addresswJwkOl, addresscDu4XON, uintBG5caY, {from: accounts[1]});
		const addressmJSFFsV = await ControllerJPg7B0W.setStrategist.call(addressKHuwOw9, {from: accounts[2]});

		await expect(ControllerJPg7B0W.yearn.call(addresswJwkOl, addresscDu4XON, uintBG5caY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressTPmJJ3v = accounts[0]
		const ControllerlHeKYOs = await Controller.new(addressTPmJJ3v, {from: accounts[2]});
		const addressOxKLwSB = accounts[2]
		const addressizCshlP = accounts[3]
		const addressnc62x5A = accounts[2]
		const addressUWchCYR = accounts[2]
		const addressKBA6A54 = accounts[3]
		const uintD5uEAEL = BigInt("1735")
		const addressFvCjMxD = accounts[2]
		const addressyCuBdsW = accounts[2]
		const addressZNWIun = await ControllerlHeKYOs.setVault.call(addressizCshlP, addressOxKLwSB, {from: accounts[4]});
		const addresskgvgQGS = await ControllerlHeKYOs.inCaseStrategyTokenGetStuck.call(addressUWchCYR, addressnc62x5A, {from: accounts[0]});
		const uintffQZMg1 = await ControllerlHeKYOs.balanceOf.call(addressKBA6A54, {from: accounts[2]});
		const addressTmoHjAQ = await ControllerlHeKYOs.yearn.call(addressyCuBdsW, addressFvCjMxD, uintD5uEAEL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerlHeKYOs.setVault.call(addressizCshlP, addressOxKLwSB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressawrRapP = accounts[3]
		const ControllerwWGvxbc = await Controller.new(addressawrRapP, {from: accounts[5]});
		const addressHYJZlea = accounts[4]
		const addressqfqFvYq = accounts[4]
		const addressK2Oj4sU = accounts[2]
		const addresseY6rAK2 = accounts[3]
		const addressSZGkvmD = accounts[3]
		const addressXqDFSZW = accounts[4]
		const addressqylKIQp = accounts[3]
		const addressEDGJIrc = accounts[5]
		const addressGwrJJra = await ControllerwWGvxbc.setStrategist.call(addressHYJZlea, {from: accounts[2]});
		const addressJkNwlzE = await ControllerwWGvxbc.withdrawAll.call(addressqfqFvYq, {from: accounts[3]});
		const addressCzxFNLD = await ControllerwWGvxbc.approveStrategy.call(addresseY6rAK2, addressK2Oj4sU, {from: "0x0000000000000000000000000000000000000001"});
		const addressMC03gFS = await ControllerwWGvxbc.setStrategy.call(addressXqDFSZW, addressSZGkvmD, {from: accounts[4]});
		const addressMqJ4IVy = await ControllerwWGvxbc.inCaseStrategyTokenGetStuck.call(addressEDGJIrc, addressqylKIQp, {from: accounts[2]});

		await expect(ControllerwWGvxbc.setStrategist.call(addressHYJZlea, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressx9I01ok = accounts[2]
		const ControlleruJZkg8f = await Controller.new(addressx9I01ok, {from: accounts[4]});
		const addressHxbs1oX = accounts[0]
		const address9JH9el = accounts[4]
		const addressVqYN9yh = accounts[4]
		const addressS0wEglp = accounts[1]
		const addressmIZSjhA = await ControlleruJZkg8f.setGovernance.call(addressHxbs1oX, {from: accounts[5]});
		const addressuEkTBwT = await ControlleruJZkg8f.approveStrategy.call(addressVqYN9yh, address9JH9el, {from: accounts[3]});
		const addressd3HjJRZ = await ControlleruJZkg8f.setGovernance.call(addressS0wEglp, {from: accounts[3]});

		await expect(ControlleruJZkg8f.setGovernance.call(addressHxbs1oX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressu5882MQ = accounts[0]
		const ControllerlHeKYOs = await Controller.new(addressu5882MQ, {from: accounts[2]});
		const addressRBTm2un = accounts[2]
		const addresskSBealR = accounts[2]
		const addresscYE3f7S = accounts[3]
		const uintmu7gpln = BigInt("1735")
		const addressICtYxr6 = accounts[2]
		const addressiXB0CPP = accounts[2]
		const addresskgvgQGS = await ControllerlHeKYOs.inCaseStrategyTokenGetStuck.call(addresskSBealR, addressRBTm2un, {from: accounts[0]});
		const uintffQZMg1 = await ControllerlHeKYOs.balanceOf.call(addresscYE3f7S, {from: accounts[2]});
		const addressTmoHjAQ = await ControllerlHeKYOs.yearn.call(addressiXB0CPP, addressICtYxr6, uintmu7gpln, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerlHeKYOs.inCaseStrategyTokenGetStuck.call(addresskSBealR, addressRBTm2un, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressH7wI1LP = accounts[0]
		const ControllerJPg7B0W = await Controller.new(addressH7wI1LP, {from: accounts[0]});
		const addressLFS4eoB = accounts[2]
		const addressqEI0csa = "0x0000000000000000000000000000000000000001"
		const uintnwUeyJ = BigInt("1946")
		const addressl9BMBHF = accounts[3]
		const addressxgey8sX = accounts[1]
		const addressNbKMzbp = accounts[5]
		const addressMvYxMml = accounts[1]
		const addressMpnpj26 = await ControllerJPg7B0W.setStrategy.call(addressqEI0csa, addressLFS4eoB, {from: accounts[0]});
		const addresshOjNP7h = await ControllerJPg7B0W.yearn.call(addressxgey8sX, addressl9BMBHF, uintnwUeyJ, {from: accounts[1]});
		const addressYHtb4Ug = await ControllerJPg7B0W.setGovernance.call(addressNbKMzbp, {from: accounts[3]});
		const addressmJSFFsV = await ControllerJPg7B0W.setStrategist.call(addressMvYxMml, {from: accounts[2]});

		await expect(ControllerJPg7B0W.setStrategy.call(addressqEI0csa, addressLFS4eoB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressrU3whUG = accounts[1]
		const Controllerl1fv5kG = await Controller.new(addressrU3whUG, {from: accounts[3]});
		const addressXR6Ucsv = accounts[1]
		const addressJkECOMH = accounts[4]
		const addressXJJzxje = accounts[2]
		const uintrwvmeoE = BigInt("1521")
		const addressYlyz3vh = accounts[2]
		const addressf3WXAxG = accounts[3]
		const addressjwv2hv = accounts[0]
		const uintWYXAvtY = BigInt("775")
		const addressvZAoN1J = accounts[2]
		const addressaZ16yrq = accounts[2]
		const addressRJvEO74 = accounts[4]
		const uintBM326s3 = BigInt("1220")
		const addressepomOAv = accounts[1]
		const addressY510PCs = accounts[0]
		const addresszaO0NjR = await Controllerl1fv5kG.setConverter.call(addressXJJzxje, addressJkECOMH, addressXR6Ucsv, {from: "0x0000000000000000000000000000000000000001"});
		const addressTM8Sbni = await Controllerl1fv5kG.earn.call(addressYlyz3vh, uintrwvmeoE, {from: accounts[2]});
		const addressmOpEqbU = await Controllerl1fv5kG.setVault.call(addressjwv2hv, addressf3WXAxG, {from: "0x0000000000000000000000000000000000000001"});
		const uintMnipwNe = await Controllerl1fv5kG.setSplit.call(uintWYXAvtY, {from: accounts[4]});
		const addressXrP9RwD = await Controllerl1fv5kG.setStrategy.call(addressaZ16yrq, addressvZAoN1J, {from: accounts[3]});
		const addresscqoa60R = await Controllerl1fv5kG.withdrawAll.call(addressRJvEO74, {from: accounts[4]});
		const uintQt2QrRJ = await Controllerl1fv5kG.getExpectedReturn.call(addressY510PCs, addressepomOAv, uintBM326s3, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllerl1fv5kG.setConverter.call(addressXJJzxje, addressJkECOMH, addressXR6Ucsv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressI02F25R = accounts[0]
		const ControllerJPg7B0W = await Controller.new(addressI02F25R, {from: accounts[0]});
		const addressStTcDF9 = accounts[2]
		const addresszoqnq5p = accounts[3]
		const uintk5jtKE7 = BigInt("1946")
		const addressWiYVbD1 = accounts[3]
		const addressGOmt57o = accounts[1]
		const addressjiVWrHP = accounts[3]
		const addresspjpV8qH = await ControllerJPg7B0W.approveStrategy.call(addresszoqnq5p, addressStTcDF9, {from: accounts[1]});
		const addresshOjNP7h = await ControllerJPg7B0W.yearn.call(addressGOmt57o, addressWiYVbD1, uintk5jtKE7, {from: accounts[1]});
		const addressmJSFFsV = await ControllerJPg7B0W.setStrategist.call(addressjiVWrHP, {from: accounts[2]});

		await expect(ControllerJPg7B0W.approveStrategy.call(addresszoqnq5p, addressStTcDF9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskwo3fRa = accounts[5]
		const ControllerbJcXqBv = await Controller.new(addresskwo3fRa, {from: accounts[1]});
		const addressqms1qOu = accounts[2]
		const addressiCUcewn = accounts[2]
		const addressayTub7 = accounts[2]
		const addresshzVglaJ = accounts[3]
		const addressRZHjG8 = accounts[3]
		const addressERLnRGx = accounts[3]
		const uintgJlfeHk = BigInt("259")
		const addressMwyutjd = accounts[3]
		const addressDHh0JVX = accounts[3]
		const addressmjlzeF = await ControllerbJcXqBv.revokeStrategy.call(addressiCUcewn, addressqms1qOu, {from: accounts[3]});
		const addressaF2m1V7 = await ControllerbJcXqBv.setStrategy.call(addresshzVglaJ, addressayTub7, {from: accounts[5]});
		const addressCcWG17L = await ControllerbJcXqBv.revokeStrategy.call(addressERLnRGx, addressRZHjG8, {from: accounts[0]});
		const addressoZOetn = await ControllerbJcXqBv.yearn.call(addressDHh0JVX, addressMwyutjd, uintgJlfeHk, {from: accounts[0]});

		await expect(ControllerbJcXqBv.revokeStrategy.call(addressiCUcewn, addressqms1qOu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressrSYrFPv = accounts[0]
		const ControllerJPg7B0W = await Controller.new(addressrSYrFPv, {from: accounts[0]});
		const addressiN3DAJu = accounts[3]
		const addressBlef1Cs = accounts[2]
		const addresspgHCySZ = accounts[1]
		const addressHsuHIz3 = accounts[0]
		const addressk80BqMr = accounts[2]
		const addressMXH9ycb = await ControllerJPg7B0W.setOneSplit.call(addressiN3DAJu, {from: accounts[1]});
		const addressaM1dd97 = await ControllerJPg7B0W.setConverter.call(addressHsuHIz3, addresspgHCySZ, addressBlef1Cs, {from: accounts[3]});
		const addressmJSFFsV = await ControllerJPg7B0W.setStrategist.call(addressk80BqMr, {from: accounts[2]});

		await expect(ControllerJPg7B0W.setOneSplit.call(addressiN3DAJu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressDab5ISp = accounts[3]
		const Controllerz3Gikav = await Controller.new(addressDab5ISp, {from: accounts[4]});
		const uintk5fmGeX = BigInt("991")
		const addressAdGbhXQ = accounts[0]
		const addressmJCxWcJ = accounts[4]
		const addressaOlFgUt = accounts[0]
		const uintCMbsjFd = await Controllerz3Gikav.getExpectedReturn.call(addressmJCxWcJ, addressAdGbhXQ, uintk5fmGeX, {from: accounts[3]});
		const addressdyGZjJk = await Controllerz3Gikav.setGovernance.call(addressaOlFgUt, {from: accounts[3]});

		await expect(Controllerz3Gikav.getExpectedReturn.call(addressmJCxWcJ, addressAdGbhXQ, uintk5fmGeX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressqQr0TVj = accounts[0]
		const ControllervccV2Pd = await Controller.new(addressqQr0TVj, {from: accounts[1]});
		const addressFesOFHT = accounts[3]
		const addressrRv5qIN = accounts[1]
		const addressUu4N7Vu = "0x0000000000000000000000000000000000000001"
		const addresssKcHf5d = accounts[0]
		const uintLxyX9kg = BigInt("477")
		const uintQ0OYdy9 = BigInt("1568")
		const addressMdXuWwo = "0x0000000000000000000000000000000000000001"
		const addresseMS9ixm = accounts[3]
		const addressQfbmSUA = accounts[4]
		const addressfWfPxCF = await ControllervccV2Pd.withdrawAll.call(addressFesOFHT, {from: accounts[0]});
		const addressQnV258D = await ControllervccV2Pd.revokeStrategy.call(addressUu4N7Vu, addressrRv5qIN, {from: accounts[0]});
		const addressf12LqmD = await ControllervccV2Pd.setStrategist.call(addresssKcHf5d, {from: accounts[4]});
		const uintJCZL9Ma = await ControllervccV2Pd.setSplit.call(uintLxyX9kg, {from: accounts[3]});
		const addressH6tLX8T = await ControllervccV2Pd.withdraw.call(addressMdXuWwo, uintQ0OYdy9, {from: accounts[4]});
		const addressf61iQwW = await ControllervccV2Pd.inCaseStrategyTokenGetStuck.call(addressQfbmSUA, addresseMS9ixm, {from: accounts[0]});

		await expect(ControllervccV2Pd.withdrawAll.call(addressFesOFHT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressXAcfLLw = accounts[0]
		const ControllerJPg7B0W = await Controller.new(addressXAcfLLw, {from: accounts[0]});
		const addresswYK5mgA = accounts[2]
		const addressmBXKNLy = accounts[1]
		const uintb2nVCaE = await ControllerJPg7B0W.balanceOf.call(addresswYK5mgA, {from: accounts[2]});
		const addressmJSFFsV = await ControllerJPg7B0W.setStrategist.call(addressmBXKNLy, {from: accounts[2]});

		await expect(ControllerJPg7B0W.balanceOf.call(addresswYK5mgA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressIwRDREQ = accounts[1]
		const ControllerkFSxMC = await Controller.new(addressIwRDREQ, {from: accounts[1]});
		const uintU1ueKeX = BigInt("1293")
		const addresskU0PtOT = accounts[3]
		const addressShFTHGW = accounts[3]
		const addressQdDjWfh = accounts[0]
		const addressbIRvHQT = accounts[1]
		const addressudwDmsh = await ControllerkFSxMC.inCaseTokensGetStuck.call(addresskU0PtOT, uintU1ueKeX, {from: accounts[0]});
		const uintMJfrBZo = await ControllerkFSxMC.balanceOf.call(addressShFTHGW, {from: accounts[4]});
		const addressUwqpihq = await ControllerkFSxMC.approveStrategy.call(addressbIRvHQT, addressQdDjWfh, {from: accounts[3]});

		await expect(ControllerkFSxMC.inCaseTokensGetStuck.call(addresskU0PtOT, uintU1ueKeX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressFsHw9OH = accounts[0]
		const ControllerJPg7B0W = await Controller.new(addressFsHw9OH, {from: accounts[0]});
		const uintKOln5i = BigInt("1170")
		const addressYrz3IJG = accounts[0]
		const uintXKPOzOg = BigInt("1946")
		const address2te9IA = accounts[3]
		const addressl1DIC22 = accounts[1]
		const addressQ3WiAg = "0x0000000000000000000000000000000000000001"
		const addressQWOiGNw = accounts[1]
		const address2CFj3z = await ControllerJPg7B0W.withdraw.call(addressYrz3IJG, uintKOln5i, {from: accounts[1]});
		const addresshOjNP7h = await ControllerJPg7B0W.yearn.call(addressl1DIC22, address2te9IA, uintXKPOzOg, {from: accounts[1]});
		const addresszeudwD = await ControllerJPg7B0W.setOneSplit.call(addressQ3WiAg, {from: "0x0000000000000000000000000000000000000001"});
		const addressmJSFFsV = await ControllerJPg7B0W.setStrategist.call(addressQWOiGNw, {from: accounts[2]});

		await expect(ControllerJPg7B0W.withdraw.call(addressYrz3IJG, uintKOln5i, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressIv6YtG5 = accounts[2]
		const Controllern7rphfe = await Controller.new(addressIv6YtG5, {from: accounts[3]});
		const addressjJ1cfH0 = accounts[2]
		const uintfP5gZzf = BigInt("415")
		const addressDJUhhvL = accounts[3]
		const addresshDUbcJS = accounts[1]
		const uintsV8lbde = BigInt("721")
		const addressnIEGRT1 = "0x0000000000000000000000000000000000000001"
		const addresshuSUIOB = accounts[4]
		const addressudlIs9V = accounts[0]
		const addressnmBQqQt = accounts[3]
		const addressvpQJK2U = await Controllern7rphfe.setRewards.call(addressjJ1cfH0, {from: accounts[3]});
		const addressDd526GP = await Controllern7rphfe.yearn.call(addresshDUbcJS, addressDJUhhvL, uintfP5gZzf, {from: accounts[0]});
		const uintZXsWDf7 = await Controllern7rphfe.getExpectedReturn.call(addresshuSUIOB, addressnIEGRT1, uintsV8lbde, {from: "0x0000000000000000000000000000000000000001"});
		const uintOU3n457 = await Controllern7rphfe.balanceOf.call(addressudlIs9V, {from: accounts[1]});
		const uintF7jsv0a = await Controllern7rphfe.balanceOf.call(addressnmBQqQt, {from: accounts[2]});

		await expect(Controllern7rphfe.yearn.call(addresshDUbcJS, addressDJUhhvL, uintfP5gZzf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressbpP6KZY = accounts[0]
		const ControllerJPg7B0W = await Controller.new(addressbpP6KZY, {from: accounts[0]});
		const uintrjYTxZ7 = BigInt("911")
		const addresseYRLmgk = accounts[2]
		const uintmeU2AlG = BigInt("955")
		const addressu2UFNtb = accounts[3]
		const addressQra2plF = await ControllerJPg7B0W.inCaseTokensGetStuck.call(addresseYRLmgk, uintrjYTxZ7, {from: accounts[0]});
		const addresstKogsvj = await ControllerJPg7B0W.earn.call(addressu2UFNtb, uintmeU2AlG, {from: accounts[0]});

		await expect(ControllerJPg7B0W.inCaseTokensGetStuck.call(addresseYRLmgk, uintrjYTxZ7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})