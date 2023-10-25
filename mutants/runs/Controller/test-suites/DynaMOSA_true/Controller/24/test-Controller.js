const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressiHKL2eC = accounts[3]
		const ControllerzH4MH3 = await Controller.new(addressiHKL2eC, {from: accounts[4]});
		const addressBLS5S4Q = accounts[2]
		const addressLXOqZJG = accounts[4]
		const addressZDqR7ax = "0x0000000000000000000000000000000000000001"
		const address601m3f = await ControllerzH4MH3.setStrategist.call(addressBLS5S4Q, {from: accounts[2]});
		const addresszgq9mf4 = await ControllerzH4MH3.setVault.call(addressZDqR7ax, addressLXOqZJG, {from: accounts[3]});

		await expect(ControllerzH4MH3.setStrategist.call(addressBLS5S4Q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressrrARcCl = accounts[2]
		const ControllerulKqaww = await Controller.new(addressrrARcCl, {from: accounts[1]});
		const addressjP2AWLc = accounts[0]
		const uintwQyIOC3 = BigInt("1720")
		const addressLDBZXF = accounts[3]
		const addressrZkSW5i = accounts[0]
		const uintWipZLAW = BigInt("1673")
		const addresscfqfjLd = accounts[4]
		const addressRZvRCJw = accounts[4]
		const addressvJrDPBr = accounts[2]
		const address8ZIbDf = accounts[2]
		const addresszT1kJ79 = await ControllerulKqaww.setGovernance.call(addressjP2AWLc, {from: accounts[0]});
		const addressuO5EH8c = await ControllerulKqaww.yearn.call(addressrZkSW5i, addressLDBZXF, uintwQyIOC3, {from: accounts[1]});
		const uintmpOWsfB = await ControllerulKqaww.setSplit.call(uintWipZLAW, {from: accounts[2]});
		const addressplCZi4X = await ControllerulKqaww.setOneSplit.call(addresscfqfjLd, {from: accounts[1]});
		const addressrKWOgD = await ControllerulKqaww.setConverter.call(address8ZIbDf, addressvJrDPBr, addressRZvRCJw, {from: accounts[0]});

		await expect(ControllerulKqaww.setGovernance.call(addressjP2AWLc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressf43ZaWk = "0x0000000000000000000000000000000000000001"
		const ControllerflfgZsV = await Controller.new(addressf43ZaWk, {from: accounts[3]});
		const uintBWFgkxl = BigInt("434")
		const addressCcqrbXD = accounts[3]
		const addressp5Ea1x = accounts[3]
		const uintlDNLEvu = BigInt("478")
		const addressEbB1IM8 = accounts[2]
		const addressHbH32rQ = accounts[0]
		const addressCrPsSQ1 = accounts[0]
		const uintLYbtuA = BigInt("723")
		const uintDTALxQ = await ControllerflfgZsV.getExpectedReturn.call(addressp5Ea1x, addressCcqrbXD, uintBWFgkxl, {from: accounts[2]});
		const addressfMbFRio = await ControllerflfgZsV.yearn.call(addressHbH32rQ, addressEbB1IM8, uintlDNLEvu, {from: accounts[2]});
		const addressJBOtniS = await ControllerflfgZsV.setOneSplit.call(addressCrPsSQ1, {from: accounts[3]});
		const uintwy1lNg4 = await ControllerflfgZsV.setSplit.call(uintLYbtuA, {from: accounts[1]});

		await expect(ControllerflfgZsV.getExpectedReturn.call(addressp5Ea1x, addressCcqrbXD, uintBWFgkxl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresstrSmfn = "0x0000000000000000000000000000000000000001"
		const Controllerbti3d1m = await Controller.new(addresstrSmfn, {from: "0x0000000000000000000000000000000000000001"});
		const addresskRDOH8B = accounts[2]
		const addressMEHkkwj = accounts[3]
		const uintKalhu1t = BigInt("103")
		const addressgFs4DuI = accounts[2]
		const addresscjPud8t = accounts[3]
		const addressLAd5WsZ = accounts[2]
		const addressYOExJgu = await Controllerbti3d1m.setGovernance.call(addresskRDOH8B, {from: accounts[2]});
		const addressEo25UOK = await Controllerbti3d1m.withdrawAll.call(addressMEHkkwj, {from: "0x0000000000000000000000000000000000000001"});
		const addressI0KC5BY = await Controllerbti3d1m.withdraw.call(addressgFs4DuI, uintKalhu1t, {from: accounts[4]});
		const addressFFgj7cI = await Controllerbti3d1m.revokeStrategy.call(addressLAd5WsZ, addresscjPud8t, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Controller', async () => {
		const addressMULb42W = accounts[1]
		const Controllerie2I6fA = await Controller.new(addressMULb42W, {from: accounts[5]});
		const addressg6wtyY = accounts[0]
		const uintAAta1E3 = BigInt("252")
		const uintoJ9gRHU = BigInt("99")
		const addressKIWT7Dq = accounts[3]
		const addressx306l30 = accounts[5]
		const addressLKYMfiV = accounts[4]
		const uintC13K0P = await Controllerie2I6fA.balanceOf.call(addressg6wtyY, {from: accounts[5]});
		const uintJDkMFCj = await Controllerie2I6fA.setSplit.call(uintAAta1E3, {from: accounts[3]});
		const uintrXf3WUL = await Controllerie2I6fA.getExpectedReturn.call(addressx306l30, addressKIWT7Dq, uintoJ9gRHU, {from: accounts[0]});
		const address9JD4Jw = await Controllerie2I6fA.withdrawAll.call(addressLKYMfiV, {from: accounts[3]});

		await expect(Controllerie2I6fA.balanceOf.call(addressg6wtyY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressaNle9zW = accounts[1]
		const ControllerPzVwZTI = await Controller.new(addressaNle9zW, {from: accounts[4]});
		const uintwbnYtdL = BigInt("1844")
		const addresswWPQKxy = accounts[0]
		const addressCuXDdW = accounts[1]
		const addressRDLV8nc = accounts[3]
		const addressmrY7HEB = accounts[2]
		const addressJfxdMG = accounts[0]
		const addressLtLAsro = accounts[4]
		const addressB6GlXTb = accounts[3]
		const addressTBpfJ5E = accounts[4]
		const addresssre08R5 = accounts[5]
		const addressUSUpHlF = await ControllerPzVwZTI.yearn.call(addressCuXDdW, addresswWPQKxy, uintwbnYtdL, {from: accounts[2]});
		const addresspAIzpLG = await ControllerPzVwZTI.approveStrategy.call(addressmrY7HEB, addressRDLV8nc, {from: accounts[4]});
		const addressYC9WXni = await ControllerPzVwZTI.withdrawAll.call(addressJfxdMG, {from: accounts[2]});
		const addressb3azW7 = await ControllerPzVwZTI.setStrategist.call(addressLtLAsro, {from: accounts[5]});
		const addressGEcxNQF = await ControllerPzVwZTI.setStrategist.call(addressB6GlXTb, {from: accounts[3]});
		const addressvf7cqcJ = await ControllerPzVwZTI.setStrategy.call(addresssre08R5, addressTBpfJ5E, {from: accounts[0]});

		await expect(ControllerPzVwZTI.yearn.call(addressCuXDdW, addresswWPQKxy, uintwbnYtdL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresspp2uC7q = accounts[3]
		const ControllerIjm2eef = await Controller.new(addresspp2uC7q, {from: accounts[3]});
		const addresslSzPYSa = accounts[1]
		const addressSqNQV81 = accounts[2]
		const uintnY1wY7 = BigInt("1454")
		const addressFaBLRvi = accounts[0]
		const addressycvQUCl = accounts[2]
		const addressGLME6p = await ControllerIjm2eef.approveStrategy.call(addressSqNQV81, addresslSzPYSa, {from: accounts[2]});
		const uintDMaf2J = await ControllerIjm2eef.getExpectedReturn.call(addressycvQUCl, addressFaBLRvi, uintnY1wY7, {from: accounts[5]});

		await expect(ControllerIjm2eef.approveStrategy.call(addressSqNQV81, addresslSzPYSa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZcJEhIb = accounts[5]
		const ControllerKgpzFCU = await Controller.new(addressZcJEhIb, {from: accounts[2]});
		const addresszNeRYkU = accounts[1]
		const addressdZYdpc = accounts[4]
		const addressLbGFPW = accounts[3]
		const addressFEeMsnK = accounts[1]
		const addressyTNrmL = accounts[5]
		const addressmqk1Ash = accounts[3]
		const addressvHelXzP = await ControllerKgpzFCU.setOneSplit.call(addresszNeRYkU, {from: accounts[5]});
		const addressFlgptWU = await ControllerKgpzFCU.setStrategy.call(addressLbGFPW, addressdZYdpc, {from: accounts[2]});
		const addressZxg0a94 = await ControllerKgpzFCU.setStrategy.call(addressyTNrmL, addressFEeMsnK, {from: accounts[1]});
		const addressfjyGic9 = await ControllerKgpzFCU.setGovernance.call(addressmqk1Ash, {from: accounts[1]});

		await expect(ControllerKgpzFCU.setOneSplit.call(addresszNeRYkU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressh94u3vA = accounts[4]
		const ControllervKGpa61 = await Controller.new(addressh94u3vA, {from: accounts[4]});
		const uintCFriwO = BigInt("36")
		const addressyr8UffO = accounts[2]
		const addressDdpKUqp = accounts[5]
		const uintvay73sG = await ControllervKGpa61.setSplit.call(uintCFriwO, {from: accounts[3]});
		const addressNdY7tu3 = await ControllervKGpa61.withdrawAll.call(addressyr8UffO, {from: accounts[3]});
		const addressn2TVXiU = await ControllervKGpa61.setGovernance.call(addressDdpKUqp, {from: accounts[2]});

		await expect(ControllervKGpa61.setSplit.call(uintCFriwO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfu823uB = accounts[5]
		const ControllerKgpzFCU = await Controller.new(addressfu823uB, {from: accounts[2]});
		const addressxVRs2T = accounts[1]
		const addressxbFUVEP = accounts[0]
		const addressa4ADzvl = accounts[2]
		const addressltnqFBb = accounts[4]
		const addressIO1tmDI = accounts[3]
		const addressMwLvd14 = accounts[1]
		const addressOOzZ9dn = accounts[5]
		const addressaUanx30 = accounts[3]
		const addresstXDfYJ3 = accounts[3]
		const addressqpoc1fk = await ControllerKgpzFCU.revokeStrategy.call(addressxbFUVEP, addressxVRs2T, {from: accounts[2]});
		const addressvHelXzP = await ControllerKgpzFCU.setOneSplit.call(addressa4ADzvl, {from: accounts[5]});
		const addressFlgptWU = await ControllerKgpzFCU.setStrategy.call(addressIO1tmDI, addressltnqFBb, {from: accounts[2]});
		const addressZxg0a94 = await ControllerKgpzFCU.setStrategy.call(addressOOzZ9dn, addressMwLvd14, {from: accounts[1]});
		const addresslxNUSBb = await ControllerKgpzFCU.setOneSplit.call(addressaUanx30, {from: accounts[0]});
		const addressfjyGic9 = await ControllerKgpzFCU.setGovernance.call(addresstXDfYJ3, {from: accounts[1]});

		await expect(ControllerKgpzFCU.setOneSplit.call(addressa4ADzvl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressmoQwX3 = accounts[2]
		const Controller5PCg3z = await Controller.new(addressmoQwX3, {from: accounts[4]});
		const addressonf7Uuo = accounts[3]
		const addressTABxoBf = accounts[0]
		const addressjYShEUY = accounts[0]
		const uintldXO99z = BigInt("710")
		const addressOpIlKUr = accounts[2]
		const uintQWG4cYa = BigInt("1804")
		const addresstMY60op = accounts[0]
		const addressG6Jbemt = await Controller5PCg3z.inCaseStrategyTokenGetStuck.call(addressTABxoBf, addressonf7Uuo, {from: accounts[0]});
		const addressH1xG2n5 = await Controller5PCg3z.setStrategist.call(addressjYShEUY, {from: accounts[3]});
		const addressIFdWZyA = await Controller5PCg3z.earn.call(addressOpIlKUr, uintldXO99z, {from: accounts[1]});
		const addressnry4e5V = await Controller5PCg3z.inCaseTokensGetStuck.call(addresstMY60op, uintQWG4cYa, {from: accounts[0]});

		await expect(Controller5PCg3z.inCaseStrategyTokenGetStuck.call(addressTABxoBf, addressonf7Uuo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshg44lxU = accounts[3]
		const ControllerIjm2eef = await Controller.new(addresshg44lxU, {from: accounts[3]});
		const addressgLknv5N = "0x0000000000000000000000000000000000000001"
		const addressFy3Xaur = accounts[3]
		const addressr79QG46 = accounts[0]
		const uintW97Q9T = BigInt("1323")
		const addressBngL8i2 = accounts[4]
		const addressxjmw3T = accounts[2]
		const uintQBEbNE = BigInt("1450")
		const address48qc3u = accounts[0]
		const addressq6WgXk9 = accounts[2]
		const addressxVUSE1w = await ControllerIjm2eef.setConverter.call(addressr79QG46, addressFy3Xaur, addressgLknv5N, {from: accounts[2]});
		const addresscCzsSmZ = await ControllerIjm2eef.yearn.call(addressxjmw3T, addressBngL8i2, uintW97Q9T, {from: accounts[0]});
		const uintDMaf2J = await ControllerIjm2eef.getExpectedReturn.call(addressq6WgXk9, address48qc3u, uintQBEbNE, {from: accounts[5]});

		await expect(ControllerIjm2eef.setConverter.call(addressr79QG46, addressFy3Xaur, addressgLknv5N, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressqSHn1d = accounts[2]
		const Controller5PCg3z = await Controller.new(addressqSHn1d, {from: accounts[4]});
		const uintu9PX66i = BigInt("1369")
		const addressEEskkBx = accounts[3]
		const addresso9QVXyV = accounts[3]
		const addressGdz8xTg = accounts[1]
		const addressYMSU4Ds = accounts[0]
		const uintvVIt47x = BigInt("710")
		const addressRvnAH6 = accounts[2]
		const uintBhxtOHd = BigInt("1804")
		const addresskeEl1tq = accounts[0]
		const addressUtwBmCV = await Controller5PCg3z.inCaseTokensGetStuck.call(addressEEskkBx, uintu9PX66i, {from: accounts[4]});
		const addressG6Jbemt = await Controller5PCg3z.inCaseStrategyTokenGetStuck.call(addressGdz8xTg, addresso9QVXyV, {from: accounts[0]});
		const addressH1xG2n5 = await Controller5PCg3z.setStrategist.call(addressYMSU4Ds, {from: accounts[3]});
		const addressIFdWZyA = await Controller5PCg3z.earn.call(addressRvnAH6, uintvVIt47x, {from: accounts[1]});
		const addressnry4e5V = await Controller5PCg3z.inCaseTokensGetStuck.call(addresskeEl1tq, uintBhxtOHd, {from: accounts[0]});

		await expect(Controller5PCg3z.inCaseTokensGetStuck.call(addressEEskkBx, uintu9PX66i, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressu1HBNjN = accounts[5]
		const ControllerKgpzFCU = await Controller.new(addressu1HBNjN, {from: accounts[2]});
		const addressZErnkGQ = accounts[1]
		const addressGUsfhF = accounts[5]
		const addressffcYT6W = accounts[3]
		const addresskBCZ0sQ = accounts[6]
		const addressEOWuMDj = await ControllerKgpzFCU.setConverter.call(addressffcYT6W, addressGUsfhF, addressZErnkGQ, {from: accounts[2]});
		const addressvHelXzP = await ControllerKgpzFCU.setOneSplit.call(addresskBCZ0sQ, {from: accounts[5]});

		await expect(ControllerKgpzFCU.setOneSplit.call(addresskBCZ0sQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressGDWonIw = accounts[5]
		const ControllerKgpzFCU = await Controller.new(addressGDWonIw, {from: accounts[2]});
		const addressDwsHnfH = accounts[1]
		const uintmCd274a = BigInt("1582")
		const addressjjF7NLX = accounts[0]
		const addressntlSRB = accounts[6]
		const addresshV5Z6Ve = await ControllerKgpzFCU.setStrategist.call(addressDwsHnfH, {from: accounts[2]});
		const addressHkIYWl5 = await ControllerKgpzFCU.earn.call(addressjjF7NLX, uintmCd274a, {from: accounts[2]});
		const addressvHelXzP = await ControllerKgpzFCU.setOneSplit.call(addressntlSRB, {from: accounts[5]});

		await expect(ControllerKgpzFCU.earn.call(addressjjF7NLX, uintmCd274a, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresseEE3rMl = accounts[5]
		const ControllerKgpzFCU = await Controller.new(addresseEE3rMl, {from: accounts[2]});
		const addressVSCkTlh = accounts[1]
		const addressXzaxwgG = accounts[4]
		const addressaiJJZ0Y = accounts[4]
		const addressYDFIGP3 = accounts[2]
		const address0zutxj = accounts[2]
		const uintmUF8UGf = BigInt("1582")
		const addressKrnqrLD = accounts[0]
		const addresspzppUD3 = accounts[6]
		const addressGPumV5w = await ControllerKgpzFCU.inCaseStrategyTokenGetStuck.call(addressXzaxwgG, addressVSCkTlh, {from: accounts[2]});
		const addresssYioQv0 = await ControllerKgpzFCU.setStrategy.call(addressYDFIGP3, addressaiJJZ0Y, {from: accounts[4]});
		const addresshV5Z6Ve = await ControllerKgpzFCU.setStrategist.call(address0zutxj, {from: accounts[2]});
		const addressHkIYWl5 = await ControllerKgpzFCU.earn.call(addressKrnqrLD, uintmUF8UGf, {from: accounts[2]});
		const addressvHelXzP = await ControllerKgpzFCU.setOneSplit.call(addresspzppUD3, {from: accounts[5]});

		await expect(ControllerKgpzFCU.inCaseStrategyTokenGetStuck.call(addressXzaxwgG, addressVSCkTlh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZuVueFk = accounts[2]
		const ControllerzMu7iQa = await Controller.new(addressZuVueFk, {from: accounts[5]});
		const addressEY9mP7b = accounts[4]
		const addressdtaoN0r = accounts[5]
		const uintsVCOuzQ = BigInt("1599")
		const addressJyrysDd = accounts[6]
		const addressUQTnAQ = accounts[2]
		const addressJa6r0l = accounts[5]
		const addressSocwvDn = accounts[4]
		const addressroQNHuN = accounts[4]
		const addressPPm1HJL = await ControllerzMu7iQa.setStrategy.call(addressdtaoN0r, addressEY9mP7b, {from: accounts[3]});
		const uintMMK50uP = await ControllerzMu7iQa.setSplit.call(uintsVCOuzQ, {from: accounts[2]});
		const addressfL8HxaU = await ControllerzMu7iQa.setOneSplit.call(addressJyrysDd, {from: accounts[3]});
		const addressQMd5sYd = await ControllerzMu7iQa.setVault.call(addressJa6r0l, addressUQTnAQ, {from: accounts[5]});
		const uintl7xxaIn = await ControllerzMu7iQa.balanceOf.call(addressSocwvDn, {from: accounts[4]});
		const addressGqSD9uT = await ControllerzMu7iQa.setGovernance.call(addressroQNHuN, {from: accounts[1]});

		await expect(ControllerzMu7iQa.setStrategy.call(addressdtaoN0r, addressEY9mP7b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressplIQP1w = accounts[3]
		const ControllerIjm2eef = await Controller.new(addressplIQP1w, {from: accounts[3]});
		const uintAZcKoe = BigInt("1563")
		const addresseewLWWb = accounts[2]
		const uintjr8oQ5o = BigInt("1330")
		const addresszgGrLHF = accounts[4]
		const addresstO8MHus = accounts[1]
		const addressCFSls9 = accounts[2]
		const uint2wtpvT = BigInt("1873")
		const addressJibdLS = accounts[0]
		const uintRaBnM0m = BigInt("1454")
		const addressxCSbBHM = accounts[3]
		const addressP6Dt4vP = accounts[2]
		const addressZAtx4Nu = await ControllerIjm2eef.withdraw.call(addresseewLWWb, uintAZcKoe, {from: accounts[1]});
		const addressueRm67y = await ControllerIjm2eef.inCaseTokensGetStuck.call(addresszgGrLHF, uintjr8oQ5o, {from: accounts[2]});
		const addressGLME6p = await ControllerIjm2eef.approveStrategy.call(addressCFSls9, addresstO8MHus, {from: accounts[2]});
		const addressPuykPzz = await ControllerIjm2eef.inCaseTokensGetStuck.call(addressJibdLS, uint2wtpvT, {from: accounts[5]});
		const uintDMaf2J = await ControllerIjm2eef.getExpectedReturn.call(addressP6Dt4vP, addressxCSbBHM, uintRaBnM0m, {from: accounts[5]});

		await expect(ControllerIjm2eef.withdraw.call(addresseewLWWb, uintAZcKoe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressEzLuuB = accounts[4]
		const ControllervKGpa61 = await Controller.new(addressEzLuuB, {from: accounts[4]});
		const addressPfj3C8G = accounts[1]
		const addressgcJ37Og = accounts[2]
		const uintY5cjOAB = BigInt("36")
		const addressORoqd5H = await ControllervKGpa61.setVault.call(addressgcJ37Og, addressPfj3C8G, {from: accounts[1]});
		const uintvay73sG = await ControllervKGpa61.setSplit.call(uintY5cjOAB, {from: accounts[3]});

		await expect(ControllervKGpa61.setVault.call(addressgcJ37Og, addressPfj3C8G, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresseoX9sKq = accounts[3]
		const ControllermuYw7s = await Controller.new(addresseoX9sKq, {from: accounts[4]});
		const addressTuoFG1H = accounts[3]
		const addressGhbsGEb = accounts[4]
		const addressL4bEUpc = accounts[4]
		const addresseDgSkf = accounts[3]
		const addressqfl6eT = await ControllermuYw7s.setVault.call(addressGhbsGEb, addressTuoFG1H, {from: accounts[4]});
		const addressIS4Hyc4 = await ControllermuYw7s.setRewards.call(addressL4bEUpc, {from: accounts[4]});
		const addressrE6Livv = await ControllermuYw7s.setGovernance.call(addresseDgSkf, {from: accounts[1]});

		await expect(ControllermuYw7s.setGovernance.call(addresseDgSkf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresso1nrvUR = accounts[3]
		const ControllermuYw7s = await Controller.new(addresso1nrvUR, {from: accounts[4]});
		const addresszmgMqh = accounts[0]
		const addressBeupW67 = accounts[4]
		const addressgnYeE8n = await ControllermuYw7s.withdrawAll.call(addresszmgMqh, {from: "0x0000000000000000000000000000000000000001"});
		const addressrE6Livv = await ControllermuYw7s.setGovernance.call(addressBeupW67, {from: accounts[1]});

		await expect(ControllermuYw7s.withdrawAll.call(addresszmgMqh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresseeIGBWl = accounts[5]
		const ControllerKgpzFCU = await Controller.new(addresseeIGBWl, {from: accounts[2]});
		const addresse5SrNEx = accounts[1]
		const addressuBpJTGW = accounts[6]
		const uintGfZm2nT = BigInt("322")
		const addressztU3Kx0 = accounts[0]
		const address5jedIk = await ControllerKgpzFCU.setOneSplit.call(addresse5SrNEx, {from: accounts[2]});
		const addressvHelXzP = await ControllerKgpzFCU.setOneSplit.call(addressuBpJTGW, {from: accounts[5]});
		const uintCVy8inJ = await ControllerKgpzFCU.setSplit.call(uintGfZm2nT, {from: accounts[1]});
		const addressMDmZPP1 = await ControllerKgpzFCU.setOneSplit.call(addressztU3Kx0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerKgpzFCU.setOneSplit.call(addressuBpJTGW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressUkPbxnr = accounts[3]
		const ControllermuYw7s = await Controller.new(addressUkPbxnr, {from: accounts[4]});
		const uintkzukvVm = BigInt("686")
		const addresseCrUoHC = accounts[4]
		const addressHYJ4Kyd = accounts[3]
		const addressT8B79EP = "0x0000000000000000000000000000000000000000"
		const addressdgeKqWA = await ControllermuYw7s.yearn.call(addressHYJ4Kyd, addresseCrUoHC, uintkzukvVm, {from: accounts[4]});
		const addressrE6Livv = await ControllermuYw7s.setGovernance.call(addressT8B79EP, {from: accounts[1]});

		await expect(ControllermuYw7s.yearn.call(addressHYJ4Kyd, addresseCrUoHC, uintkzukvVm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressGEcSao6 = accounts[3]
		const ControllermuYw7s = await Controller.new(addressGEcSao6, {from: accounts[4]});
		const addressJjCKAYE = accounts[0]
		const addresstzeYAi = accounts[4]
		const uintziHQwDU = BigInt("420")
		const addressrrxmyNC = "0x0000000000000000000000000000000000000001"
		const addressr5ARmKP = accounts[4]
		const addressvV62WV = await ControllermuYw7s.setStrategy.call(addresstzeYAi, addressJjCKAYE, {from: accounts[4]});
		const addressuwkBuE5 = await ControllermuYw7s.inCaseTokensGetStuck.call(addressrrxmyNC, uintziHQwDU, {from: accounts[3]});
		const addressrE6Livv = await ControllermuYw7s.setGovernance.call(addressr5ARmKP, {from: accounts[1]});

		await expect(ControllermuYw7s.setStrategy.call(addresstzeYAi, addressJjCKAYE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressGyagQ2 = accounts[3]
		const ControllermuYw7s = await Controller.new(addressGyagQ2, {from: accounts[4]});
		const addresskr9jxWE = accounts[3]
		const addressPggbk1l = "0x0000000000000000000000000000000000000001"
		const uintDWcIBcM = BigInt("686")
		const addressomEP454 = accounts[4]
		const addressgoL4n43 = accounts[3]
		const addressJa4so2F = await ControllermuYw7s.approveStrategy.call(addressPggbk1l, addresskr9jxWE, {from: accounts[4]});
		const addressdgeKqWA = await ControllermuYw7s.yearn.call(addressgoL4n43, addressomEP454, uintDWcIBcM, {from: accounts[4]});

		await expect(ControllermuYw7s.yearn.call(addressgoL4n43, addressomEP454, uintDWcIBcM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresscze5XEd = accounts[3]
		const ControllermuYw7s = await Controller.new(addresscze5XEd, {from: accounts[4]});
		const uintRqcU6j4 = BigInt("1314")
		const addressPbwBIQl = accounts[4]
		const addressFAl43R = accounts[3]
		const uintMcWhPTH = await ControllermuYw7s.setSplit.call(uintRqcU6j4, {from: accounts[4]});
		const addressXiI3tKP = await ControllermuYw7s.withdrawAll.call(addressPbwBIQl, {from: accounts[0]});
		const addressrE6Livv = await ControllermuYw7s.setGovernance.call(addressFAl43R, {from: accounts[1]});

		await expect(ControllermuYw7s.withdrawAll.call(addressPbwBIQl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressTJfiJ6e = accounts[3]
		const ControllermuYw7s = await Controller.new(addressTJfiJ6e, {from: accounts[4]});
		const addresshIDHFY = accounts[0]
		const uintDYm5P45 = BigInt("686")
		const addressezLdnq7 = accounts[5]
		const addressklvbUUn = accounts[3]
		const uinttrR5S1g = BigInt("60")
		const addressHlOdhEW = accounts[2]
		const addressHEsvmbP = accounts[4]
		const addressn3zi4dh = await ControllermuYw7s.setGovernance.call(addresshIDHFY, {from: accounts[4]});
		const addressdgeKqWA = await ControllermuYw7s.yearn.call(addressklvbUUn, addressezLdnq7, uintDYm5P45, {from: accounts[4]});
		const addressbzbvYSg = await ControllermuYw7s.yearn.call(addressHEsvmbP, addressHlOdhEW, uinttrR5S1g, {from: accounts[2]});

		await expect(ControllermuYw7s.yearn.call(addressklvbUUn, addressezLdnq7, uintDYm5P45, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskmSAS3 = accounts[1]
		const ControllerKkAwIK3 = await Controller.new(addresskmSAS3, {from: accounts[0]});
		const addressvst3y9 = accounts[1]
		const uintTqpC9fS = BigInt("3")
		const addressjXnvHlu = accounts[3]
		const addressVBuN2us = await ControllerKkAwIK3.withdrawAll.call(addressvst3y9, {from: accounts[0]});
		const addressDnNLrOw = await ControllerKkAwIK3.inCaseTokensGetStuck.call(addressjXnvHlu, uintTqpC9fS, {from: accounts[5]});

		await expect(ControllerKkAwIK3.withdrawAll.call(addressvst3y9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})