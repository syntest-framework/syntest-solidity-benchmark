const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressqb0IlTB = accounts[0]
		const afiControllerUUJsf0t = await afiController.new(addressqb0IlTB, {from: accounts[4]});
		const addressAdz8w3K = accounts[3]
		const addressavxkDwe = accounts[5]
		const addresssm901Rb = accounts[4]
//		const addressxkMNgmt = await afiControllerUUJsf0t.withdrawAll.call(addressAdz8w3K, {from: accounts[2]});
//		const addressIxg5hXe = await afiControllerUUJsf0t.approveStrategy.call(addresssm901Rb, addressavxkDwe, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerUUJsf0t.withdrawAll.call(addressAdz8w3K, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressWcqmpoV = accounts[0]
		const afiControllerI37onEZ = await afiController.new(addressWcqmpoV, {from: accounts[3]});
		const addressQ5yCuvP = accounts[3]
		const addressOnPiort = accounts[1]
		const uintglocypt = BigInt("1736")
		const addressY61neCG = accounts[3]
		const addressyGXmVCr = accounts[3]
		const addressAhAApxi = accounts[3]
		const addressSUG05rl = accounts[2]
		const addresspO4YCK0 = accounts[2]
//		const addressJcMjRth = await afiControllerI37onEZ.inCaseStrategyTokenGetStuck.call(addressOnPiort, addressQ5yCuvP, {from: accounts[5]});
//		const addressGVypaC = await afiControllerI37onEZ.earn.call(addressY61neCG, uintglocypt, {from: accounts[4]});
//		const addressfH76tik = await afiControllerI37onEZ.setVault.call(addressAhAApxi, addressyGXmVCr, {from: accounts[3]});
//		const address0LF6Qb = await afiControllerI37onEZ.setStrategy.call(addresspO4YCK0, addressSUG05rl, {from: accounts[4]});

		await expect(afiControllerI37onEZ.inCaseStrategyTokenGetStuck.call(addressOnPiort, addressQ5yCuvP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressmJ1I6m = accounts[0]
		const afiControllerYnNWVgE = await afiController.new(addressmJ1I6m, {from: accounts[0]});
		const addressoGxsxdx = accounts[3]
		const addressDhvdwWU = accounts[4]
		const addressJk8qzV = accounts[4]
		const addressT1qmill = accounts[1]
		const addressHo4RPhQ = accounts[4]
		const addressJO3eIz2 = accounts[0]
//		const uintKF2Tta5 = await afiControllerYnNWVgE.balanceOf.call(addressoGxsxdx, {from: accounts[0]});
//		const addressuPVjGE9 = await afiControllerYnNWVgE.setOneSplit.call(addressDhvdwWU, {from: accounts[2]});
//		const addressoIUzht = await afiControllerYnNWVgE.setVault.call(addressT1qmill, addressJk8qzV, {from: accounts[2]});
//		const addresssXttZe3 = await afiControllerYnNWVgE.withdrawAll.call(addressHo4RPhQ, {from: accounts[3]});
//		const uinth1w6VJ0 = await afiControllerYnNWVgE.balanceOf.call(addressJO3eIz2, {from: accounts[3]});

		await expect(afiControllerYnNWVgE.balanceOf.call(addressoGxsxdx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressceBOyUF = accounts[1]
		const afiControllerYSyAoz3 = await afiController.new(addressceBOyUF, {from: "0x0000000000000000000000000000000000000001"});
		const uintJx0uHfR = BigInt("1615")
		const addressMi7SYZF = accounts[3]
		const uintQYuF8ZK = BigInt("954")
		const addressCsq9DcR = accounts[4]
		const addressy9uDiV9 = accounts[2]
		const addressOdbVro = accounts[3]
		const uintYdTpSwF = await afiControllerYSyAoz3.setSplit.call(uintJx0uHfR, {from: accounts[1]});
		const uintzLMwtj = await afiControllerYSyAoz3.balanceOf.call(addressMi7SYZF, {from: accounts[0]});
		const addressYkb2xyv = await afiControllerYSyAoz3.yearn.call(addressy9uDiV9, addressCsq9DcR, uintQYuF8ZK, {from: accounts[2]});
		const addressnN8c4KX = await afiControllerYSyAoz3.setGovernance.call(addressOdbVro, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for afiController', async () => {
		const addressptwWCwy = accounts[4]
		const afiControllervPnGpgq = await afiController.new(addressptwWCwy, {from: accounts[3]});
		const uintDtbXgQ = BigInt("490")
		const addressBG92RV6 = "0x0000000000000000000000000000000000000001"
		const addressGCHxnM9 = accounts[1]
		const uintfTvc1x = BigInt("131")
		const addressEYzpKjA = accounts[3]
		const uintc5wRfbc = BigInt("1823")
		const addressaGSag8p = accounts[3]
		const addressHSBL9W9 = accounts[2]
		const addressARhmUdU = accounts[3]
		const addressR1ft8aV = accounts[5]
		const addresshFS9fdp = accounts[0]
		const addresszvhfaxG = accounts[4]
//		const uintu70nwb9 = await afiControllervPnGpgq.getExpectedReturn.call(addressGCHxnM9, addressBG92RV6, uintDtbXgQ, {from: accounts[2]});
//		const addressIXrKPgp = await afiControllervPnGpgq.earn.call(addressEYzpKjA, uintfTvc1x, {from: accounts[2]});
//		const uintB0hCZgu = await afiControllervPnGpgq.setSplit.call(uintc5wRfbc, {from: accounts[0]});
//		const addressqLPg4qy = await afiControllervPnGpgq.setVault.call(addressHSBL9W9, addressaGSag8p, {from: accounts[2]});
//		const addressYtTMeD1 = await afiControllervPnGpgq.setConverter.call(addresshFS9fdp, addressR1ft8aV, addressARhmUdU, {from: accounts[2]});
//		const uintuJrgP10 = await afiControllervPnGpgq.balanceOf.call(addresszvhfaxG, {from: accounts[0]});

		await expect(afiControllervPnGpgq.getExpectedReturn.call(addressGCHxnM9, addressBG92RV6, uintDtbXgQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresslkmqFsf = accounts[1]
		const afiControlleruM4R83k = await afiController.new(addresslkmqFsf, {from: accounts[0]});
		const uintcBIKxxR = BigInt("1243")
		const addressA8Dkd5i = accounts[3]
		const addresshNhR936 = "0x0000000000000000000000000000000000000001"
		const addressOLxeD6i = accounts[4]
		const addresssUjUStv = "0x0000000000000000000000000000000000000001"
//		const addressjoC9mbF = await afiControlleruM4R83k.inCaseTokensGetStuck.call(addressA8Dkd5i, uintcBIKxxR, {from: accounts[3]});
//		const addresspg4V2OX = await afiControlleruM4R83k.withdrawAll.call(addresshNhR936, {from: accounts[5]});
//		const addressfZttqfn = await afiControlleruM4R83k.setGovernance.call(addressOLxeD6i, {from: accounts[2]});
//		const addressdo5AMIX = await afiControlleruM4R83k.setGovernance.call(addresssUjUStv, {from: accounts[1]});

		await expect(afiControlleruM4R83k.inCaseTokensGetStuck.call(addressA8Dkd5i, uintcBIKxxR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqdGnbRJ = accounts[3]
		const afiControllerYRZqiH4 = await afiController.new(addressqdGnbRJ, {from: accounts[2]});
		const uintdYwZN7k = BigInt("849")
		const addressigZdPV6 = accounts[3]
		const addresslnzD5FR = accounts[5]
		const addressJTYQMdA = accounts[0]
		const addressE7xvIW6 = accounts[1]
		const addresstbkZgRI = accounts[3]
		const uintvyFuWZO = BigInt("328")
		const addressPhaegfY = accounts[4]
		const addressuzCoYeg = accounts[2]
		const uintehVwrec = BigInt("155")
//		const address2swDi0 = await afiControllerYRZqiH4.yearn.call(addresslnzD5FR, addressigZdPV6, uintdYwZN7k, {from: accounts[2]});
//		const addressIOF8ssd = await afiControllerYRZqiH4.setConverter.call(addresstbkZgRI, addressE7xvIW6, addressJTYQMdA, {from: accounts[5]});
//		const addressqOjXsSl = await afiControllerYRZqiH4.earn.call(addressPhaegfY, uintvyFuWZO, {from: accounts[5]});
//		const uintMGQqkfa = await afiControllerYRZqiH4.balanceOf.call(addressuzCoYeg, {from: accounts[4]});
//		const uintOaUgtWh = await afiControllerYRZqiH4.setSplit.call(uintehVwrec, {from: accounts[2]});

		await expect(afiControllerYRZqiH4.yearn.call(addresslnzD5FR, addressigZdPV6, uintdYwZN7k, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressZN9KVI = accounts[2]
		const afiControllerkQdIo6 = await afiController.new(addressZN9KVI, {from: accounts[5]});
		const addressCkFn53 = accounts[1]
		const uintwBQwWwQ = BigInt("686")
		const addressmH3Ku77 = accounts[4]
		const addressqi3WAn = accounts[5]
//		const addressjtsFkRX = await afiControllerkQdIo6.setGovernance.call(addressCkFn53, {from: accounts[4]});
//		const addressDxv8P3 = await afiControllerkQdIo6.inCaseTokensGetStuck.call(addressmH3Ku77, uintwBQwWwQ, {from: accounts[3]});
//		const addresseBopmDc = await afiControllerkQdIo6.setStrategist.call(addressqi3WAn, {from: accounts[2]});

		await expect(afiControllerkQdIo6.setGovernance.call(addressCkFn53, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresseluOse3 = accounts[2]
		const afiControlleraxNiht6 = await afiController.new(addresseluOse3, {from: accounts[4]});
		const addressAsRzg9O = accounts[3]
		const addressitEg4N = accounts[1]
		const uintD5qcTO = BigInt("968")
		const addressnZuUlQ = accounts[1]
		const addressMsvjWO = accounts[2]
//		const addressleCkGjD = await afiControlleraxNiht6.setVault.call(addressitEg4N, addressAsRzg9O, {from: accounts[0]});
//		const uintNqGl3Wc = await afiControlleraxNiht6.getExpectedReturn.call(addressMsvjWO, addressnZuUlQ, uintD5qcTO, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControlleraxNiht6.setVault.call(addressitEg4N, addressAsRzg9O, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshQJhYoo = accounts[3]
		const afiControllerwLifJED = await afiController.new(addresshQJhYoo, {from: accounts[2]});
		const addressoFJ6dx1 = accounts[2]
		const addressUAmSTk4 = accounts[0]
		const addressBuCT567 = accounts[1]
		const uintdgnawnw = BigInt("107")
		const addressEJxCZg = accounts[3]
		const addressPxNLM4l = accounts[4]
//		const addressdSUsM6O = await afiControllerwLifJED.setStrategy.call(addressUAmSTk4, addressoFJ6dx1, {from: accounts[1]});
//		const addresshFnSrr = await afiControllerwLifJED.setGovernance.call(addressBuCT567, {from: accounts[4]});
//		const addresszQRQV5 = await afiControllerwLifJED.inCaseTokensGetStuck.call(addressEJxCZg, uintdgnawnw, {from: accounts[1]});
//		const addressXiubSuE = await afiControllerwLifJED.setStrategist.call(addressPxNLM4l, {from: accounts[1]});

		await expect(afiControllerwLifJED.setStrategy.call(addressUAmSTk4, addressoFJ6dx1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressfSXJh9V = accounts[0]
		const afiControllerI37onEZ = await afiController.new(addressfSXJh9V, {from: accounts[3]});
		const addressRvVA6xn = accounts[2]
		const addressSmhFBE = accounts[5]
		const addressI8uvxM = accounts[3]
		const addressmJ7QXvX = accounts[1]
		const uintMVSCch = BigInt("1736")
		const addresslIaR81O = accounts[3]
		const addresshOB3jv = accounts[3]
		const addressrXz84lB = accounts[3]
//		const addressC5pz8QA = await afiControllerI37onEZ.approveStrategy.call(addressSmhFBE, addressRvVA6xn, {from: accounts[0]});
//		const addressJcMjRth = await afiControllerI37onEZ.inCaseStrategyTokenGetStuck.call(addressmJ7QXvX, addressI8uvxM, {from: accounts[5]});
//		const addressGVypaC = await afiControllerI37onEZ.earn.call(addresslIaR81O, uintMVSCch, {from: accounts[4]});
//		const addressfH76tik = await afiControllerI37onEZ.setVault.call(addressrXz84lB, addresshOB3jv, {from: accounts[3]});

		await expect(afiControllerI37onEZ.approveStrategy.call(addressSmhFBE, addressRvVA6xn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressAfPeGlt = accounts[5]
		const afiControllergrxlStW = await afiController.new(addressAfPeGlt, {from: accounts[5]});
		const addressB223xBs = accounts[3]
		const addressuxwTZMi = accounts[5]
		const addressUJnFs0z = accounts[0]
		const addressHXJUKat = accounts[2]
		const uintBNJM2Sp = BigInt("906")
		const addressnSIEzHH = accounts[3]
		const addresshfQlROX = accounts[4]
		const addressmMpLJI = accounts[4]
		const addressOigeya2 = accounts[0]
		const uintZs560zp = BigInt("1445")
		const addressALt2XcZ = accounts[1]
		const addressoYq0h55 = accounts[1]
		const uintenVLDSQ = BigInt("1989")
		const addressliOl6U = accounts[4]
		const addressOojzyK = await afiControllergrxlStW.setGovernance.call(addressB223xBs, {from: accounts[5]});
//		const addressWZ0x93r = await afiControllergrxlStW.setConverter.call(addressHXJUKat, addressUJnFs0z, addressuxwTZMi, {from: "0x0000000000000000000000000000000000000001"});
//		const addressnAtUykP = await afiControllergrxlStW.yearn.call(addresshfQlROX, addressnSIEzHH, uintBNJM2Sp, {from: accounts[3]});
//		const address7M2Vg7 = await afiControllergrxlStW.setStrategy.call(addressOigeya2, addressmMpLJI, {from: accounts[0]});
//		const uint1SmpyC = await afiControllergrxlStW.getExpectedReturn.call(addressoYq0h55, addressALt2XcZ, uintZs560zp, {from: accounts[3]});
//		const addresskSkwJmu = await afiControllergrxlStW.inCaseTokensGetStuck.call(addressliOl6U, uintenVLDSQ, {from: accounts[0]});

		await expect(afiControllergrxlStW.setConverter.call(addressHXJUKat, addressUJnFs0z, addressuxwTZMi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressui3khHc = accounts[0]
		const afiControllerUUJsf0t = await afiController.new(addressui3khHc, {from: accounts[4]});
		const addresswT39ajc = accounts[0]
		const addressd9lMXkh = accounts[3]
		const addressIYFKiiD = accounts[3]
		const addressQGOWaIB = accounts[4]
//		const address5tdmL1 = await afiControllerUUJsf0t.setStrategist.call(addresswT39ajc, {from: accounts[2]});
//		const addressxkMNgmt = await afiControllerUUJsf0t.withdrawAll.call(addressd9lMXkh, {from: accounts[2]});
//		const addressIxg5hXe = await afiControllerUUJsf0t.approveStrategy.call(addressQGOWaIB, addressIYFKiiD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerUUJsf0t.setStrategist.call(addresswT39ajc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressQPgFNC = accounts[3]
		const afiControllerNexRl6R = await afiController.new(addressQPgFNC, {from: accounts[1]});
		const uintLMb054N = BigInt("1909")
		const addressdoz99kk = accounts[1]
		const addressTnVAH7w = accounts[3]
		const addressBxEEk9M = accounts[0]
		const addresseXflgCB = accounts[5]
		const addressX4NB3PQ = accounts[0]
		const addresse0KjLp = "0x0000000000000000000000000000000000000001"
		const uintSVSWF7 = BigInt("753")
//		const addressZeCzz1J = await afiControllerNexRl6R.withdraw.call(addressdoz99kk, uintLMb054N, {from: accounts[4]});
//		const addressuwZj6j0 = await afiControllerNexRl6R.setConverter.call(addresseXflgCB, addressBxEEk9M, addressTnVAH7w, {from: accounts[1]});
//		const uintDj1Tk6c = await afiControllerNexRl6R.balanceOf.call(addressX4NB3PQ, {from: accounts[0]});
//		const addressk754e8b = await afiControllerNexRl6R.withdrawAll.call(addresse0KjLp, {from: accounts[1]});
//		const uintFvR3Kc = await afiControllerNexRl6R.setSplit.call(uintSVSWF7, {from: accounts[1]});

		await expect(afiControllerNexRl6R.withdraw.call(addressdoz99kk, uintLMb054N, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIVRyJTw = accounts[3]
		const afiControllerYRZqiH4 = await afiController.new(addressIVRyJTw, {from: accounts[2]});
		const addressJnFPeZV = accounts[2]
		const uintJpRYu1q = BigInt("849")
		const addressgjlGGob = accounts[3]
		const addressmcoHssB = accounts[5]
		const addressXwiXLt = accounts[0]
		const addressVf0Wktq = accounts[1]
		const addressjcPCofl = accounts[3]
		const uintAbqxzN = BigInt("328")
		const addressZNx1vFj = accounts[4]
		const addressdxOVKqo = accounts[0]
//		const address6plQCy = await afiControllerYRZqiH4.setRewards.call(addressJnFPeZV, {from: accounts[4]});
//		const address2swDi0 = await afiControllerYRZqiH4.yearn.call(addressmcoHssB, addressgjlGGob, uintJpRYu1q, {from: accounts[2]});
//		const addressIOF8ssd = await afiControllerYRZqiH4.setConverter.call(addressjcPCofl, addressVf0Wktq, addressXwiXLt, {from: accounts[5]});
//		const addressqOjXsSl = await afiControllerYRZqiH4.earn.call(addressZNx1vFj, uintAbqxzN, {from: accounts[5]});
//		const uintMGQqkfa = await afiControllerYRZqiH4.balanceOf.call(addressdxOVKqo, {from: accounts[4]});

		await expect(afiControllerYRZqiH4.setRewards.call(addressJnFPeZV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressAQcscvj = accounts[0]
		const afiControllerTaZFMd = await afiController.new(addressAQcscvj, {from: accounts[0]});
		const uinthOpKqaM = BigInt("737")
		const addressjRrAxJE = accounts[3]
		const addressYspo1Js = accounts[2]
		const addressLwhDMI = accounts[3]
//		const addressN42tbFq = await afiControllerTaZFMd.earn.call(addressjRrAxJE, uinthOpKqaM, {from: accounts[2]});
//		const addressEYsp35K = await afiControllerTaZFMd.setStrategy.call(addressLwhDMI, addressYspo1Js, {from: accounts[4]});

		await expect(afiControllerTaZFMd.earn.call(addressjRrAxJE, uinthOpKqaM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressgzaDJUk = accounts[4]
		const afiControllerHSX1gel = await afiController.new(addressgzaDJUk, {from: accounts[2]});
		const address7TpY5J = accounts[4]
		const addressJka2Ptr = accounts[3]
//		const addressqoBO9c = await afiControllerHSX1gel.setOneSplit.call(address7TpY5J, {from: accounts[3]});
//		const addressko5U5rd = await afiControllerHSX1gel.setOneSplit.call(addressJka2Ptr, {from: accounts[2]});

		await expect(afiControllerHSX1gel.setOneSplit.call(address7TpY5J, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressiePBSgf = accounts[3]
		const afiControllerYRZqiH4 = await afiController.new(addressiePBSgf, {from: accounts[2]});
		const addressHCBI9mZ = accounts[2]
		const addressvqhrn2T = accounts[2]
		const uintW6wHQF = BigInt("849")
		const addressEtFo16h = accounts[3]
		const addressssLgc1S = accounts[5]
		const addressbgluJBQ = accounts[0]
		const addressF0CstCg = accounts[1]
		const addressWDyjPM = accounts[3]
		const addresselgyq80 = "0x0000000000000000000000000000000000000001"
		const addressCi3S12R = accounts[4]
		const addressoPnCZCR = "0x0000000000000000000000000000000000000001"
		const uintb3qTAE9 = BigInt("328")
		const addressbeDPHjL = accounts[0]
		const addressGp4drY = accounts[0]
		const addressXUgzssK = accounts[2]
		const uinto0YOYNC = BigInt("155")
//		const addressS8VXhOp = await afiControllerYRZqiH4.revokeStrategy.call(addressvqhrn2T, addressHCBI9mZ, {from: accounts[3]});
//		const address2swDi0 = await afiControllerYRZqiH4.yearn.call(addressssLgc1S, addressEtFo16h, uintW6wHQF, {from: accounts[2]});
//		const addressIOF8ssd = await afiControllerYRZqiH4.setConverter.call(addressWDyjPM, addressF0CstCg, addressbgluJBQ, {from: accounts[5]});
//		const addressBP65AyL = await afiControllerYRZqiH4.setConverter.call(addressoPnCZCR, addressCi3S12R, addresselgyq80, {from: accounts[3]});
//		const addressqOjXsSl = await afiControllerYRZqiH4.earn.call(addressbeDPHjL, uintb3qTAE9, {from: accounts[5]});
//		const addresseccK9Un = await afiControllerYRZqiH4.setRewards.call(addressGp4drY, {from: accounts[1]});
//		const uintMGQqkfa = await afiControllerYRZqiH4.balanceOf.call(addressXUgzssK, {from: accounts[4]});
//		const uintOaUgtWh = await afiControllerYRZqiH4.setSplit.call(uinto0YOYNC, {from: accounts[2]});

		await expect(afiControllerYRZqiH4.revokeStrategy.call(addressvqhrn2T, addressHCBI9mZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbewbvfC = accounts[0]
		const afiControllerTaZFMd = await afiController.new(addressbewbvfC, {from: accounts[0]});
		const uinteTT14XV = BigInt("117")
		const uintEBTLEFu = BigInt("714")
		const addressAPkBYXA = accounts[3]
		const addressMfKFe9 = accounts[2]
		const addressOCYcjEm = accounts[3]
//		const uintEXyuxu6 = await afiControllerTaZFMd.setSplit.call(uinteTT14XV, {from: "0x0000000000000000000000000000000000000001"});
//		const addressN42tbFq = await afiControllerTaZFMd.earn.call(addressAPkBYXA, uintEBTLEFu, {from: accounts[2]});
//		const addressEYsp35K = await afiControllerTaZFMd.setStrategy.call(addressOCYcjEm, addressMfKFe9, {from: accounts[4]});

		await expect(afiControllerTaZFMd.setSplit.call(uinteTT14XV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressTpqVoxo = accounts[3]
		const afiControllerYRZqiH4 = await afiController.new(addressTpqVoxo, {from: accounts[2]});
		const addressS9rwJyZ = accounts[3]
		const addressAnpBInF = "0x0000000000000000000000000000000000000001"
		const addressa2gF0yf = accounts[1]
		const uintsy25Or5 = BigInt("849")
		const addressw5QugO = accounts[3]
		const addressMvJ38N2 = accounts[6]
		const addressElS9aXo = accounts[5]
//		const addressCsVG3GT = await afiControllerYRZqiH4.setStrategy.call(addressAnpBInF, addressS9rwJyZ, {from: accounts[2]});
//		const addresskv2cWDH = await afiControllerYRZqiH4.setRewards.call(addressa2gF0yf, {from: accounts[4]});
//		const address2swDi0 = await afiControllerYRZqiH4.yearn.call(addressMvJ38N2, addressw5QugO, uintsy25Or5, {from: accounts[2]});
//		const uintOcbjk7u = await afiControllerYRZqiH4.balanceOf.call(addressElS9aXo, {from: accounts[4]});

		await expect(afiControllerYRZqiH4.setStrategy.call(addressAnpBInF, addressS9rwJyZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressr66gwKa = accounts[0]
		const afiControllerTaZFMd = await afiController.new(addressr66gwKa, {from: accounts[0]});
		const uintyQwlzRd = BigInt("1080")
		const addressB0VWFzf = accounts[0]
		const uintQTePZXd = BigInt("737")
		const addressANOWx8j = accounts[4]
		const addressALLgr0l = accounts[0]
//		const addressoqh2pVo = await afiControllerTaZFMd.inCaseTokensGetStuck.call(addressB0VWFzf, uintyQwlzRd, {from: accounts[0]});
//		const addressN42tbFq = await afiControllerTaZFMd.earn.call(addressANOWx8j, uintQTePZXd, {from: accounts[2]});
//		const addresssxpu0T = await afiControllerTaZFMd.setStrategist.call(addressALLgr0l, {from: accounts[3]});

		await expect(afiControllerTaZFMd.inCaseTokensGetStuck.call(addressB0VWFzf, uintyQwlzRd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})