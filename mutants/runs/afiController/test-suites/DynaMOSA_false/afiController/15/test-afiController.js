const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressKrZQzW = accounts[5]
		const afiControllerrEEmCH9 = await afiController.new(addressKrZQzW, {from: accounts[1]});
		const addressWywCzxg = accounts[3]
		const address3zcfRW = accounts[3]
		const addressPQ5JbHx = accounts[0]
		const addressJmKXBxN = "0x0000000000000000000000000000000000000001"
		const addresszMWNryz = accounts[0]
		const addressfGQzrFh = accounts[0]
		const uintHbI8SbB = BigInt("162")
		const addresslQ2ZEqU = accounts[3]
		const addressMFb5o2r = await afiControllerrEEmCH9.setVault.call(address3zcfRW, addressWywCzxg, {from: accounts[3]});
		const addressfccLpeI = await afiControllerrEEmCH9.revokeStrategy.call(addressJmKXBxN, addressPQ5JbHx, {from: accounts[2]});
		const addressGkvkqCH = await afiControllerrEEmCH9.revokeStrategy.call(addressfGQzrFh, addresszMWNryz, {from: accounts[0]});
		const addresslPLTczd = await afiControllerrEEmCH9.inCaseTokensGetStuck.call(addresslQ2ZEqU, uintHbI8SbB, {from: accounts[4]});

		await expect(afiControllerrEEmCH9.setVault.call(address3zcfRW, addressWywCzxg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresstncKew0 = accounts[1]
		const afiControllerGmA4AYv = await afiController.new(addresstncKew0, {from: accounts[0]});
		const addressWMFhUeW = accounts[0]
		const uintI5xzJWA = BigInt("829")
		const addressYEnNGda = accounts[2]
		const addressrNkBQ6E = await afiControllerGmA4AYv.setGovernance.call(addressWMFhUeW, {from: accounts[0]});
		const addressbYASQ1j = await afiControllerGmA4AYv.withdraw.call(addressYEnNGda, uintI5xzJWA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerGmA4AYv.withdraw.call(addressYEnNGda, uintI5xzJWA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresss3nXClW = accounts[2]
		const afiControllerdM804cF = await afiController.new(addresss3nXClW, {from: accounts[3]});
		const addressBRoqScB = accounts[4]
		const addresspmW17iP = accounts[2]
		const addressjtlP4Gt = "0x0000000000000000000000000000000000000001"
		const addressOTqTQjx = "0x0000000000000000000000000000000000000001"
		const addressYToU2tR = accounts[1]
		const addressVnaG3c1 = accounts[4]
		const addressViUbTm2 = accounts[4]
		const uintmp7XY3 = BigInt("305")
		const addressQu2Mgv = accounts[5]
		const addressHtfUWCh = accounts[1]
		const addressoFHNrUX = accounts[2]
		const addressmUHOyER = await afiControllerdM804cF.setStrategy.call(addresspmW17iP, addressBRoqScB, {from: accounts[2]});
		const addressSvWeFw1 = await afiControllerdM804cF.revokeStrategy.call(addressOTqTQjx, addressjtlP4Gt, {from: accounts[2]});
		const addressojvtxtb = await afiControllerdM804cF.withdrawAll.call(addressYToU2tR, {from: accounts[4]});
		const addressZHDWMpA = await afiControllerdM804cF.approveStrategy.call(addressViUbTm2, addressVnaG3c1, {from: accounts[2]});
		const uintjGGTAT = await afiControllerdM804cF.setSplit.call(uintmp7XY3, {from: accounts[2]});
		const addressCjnVFhm = await afiControllerdM804cF.setConverter.call(addressoFHNrUX, addressHtfUWCh, addressQu2Mgv, {from: accounts[3]});

		await expect(afiControllerdM804cF.setStrategy.call(addresspmW17iP, addressBRoqScB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressfdjcAHr = accounts[5]
		const afiControllerAE7ttSr = await afiController.new(addressfdjcAHr, {from: accounts[2]});
		const addressY463kH6 = accounts[3]
		const uint1e9Itj = BigInt("1826")
		const uintdCyCA5u = BigInt("356")
		const addresslzdwJwx = accounts[0]
		const addressVpHAwXa = accounts[3]
		const uintwdARVY = BigInt("10")
		const addressXlBi3mz = accounts[1]
		const addressvQGFhOg = accounts[1]
		const address0XaF3p = accounts[4]
		const addressu3J3CnB = accounts[3]
		const addressmTlZiDE = await afiControllerAE7ttSr.setGovernance.call(addressY463kH6, {from: accounts[1]});
		const uintogcXZf4 = await afiControllerAE7ttSr.setSplit.call(uint1e9Itj, {from: accounts[3]});
		const addressFhO6Y7x = await afiControllerAE7ttSr.yearn.call(addressVpHAwXa, addresslzdwJwx, uintdCyCA5u, {from: accounts[4]});
		const addressyypgYsF = await afiControllerAE7ttSr.yearn.call(addressvQGFhOg, addressXlBi3mz, uintwdARVY, {from: accounts[0]});
		const addressUzQLF7t = await afiControllerAE7ttSr.approveStrategy.call(addressu3J3CnB, address0XaF3p, {from: accounts[0]});

		await expect(afiControllerAE7ttSr.setGovernance.call(addressY463kH6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressCSfATyC = accounts[0]
		const afiControllerQ0uM3d7 = await afiController.new(addressCSfATyC, {from: accounts[5]});
		const uintiysLdnS = BigInt("461")
		const addressMkQm2SV = accounts[0]
		const uintopnm1G = BigInt("1811")
		const addresspxmNXf8 = accounts[0]
		const addressyrPsWj = accounts[3]
		const addressduWJYDg = accounts[3]
		const addressSGYaFjm = accounts[3]
		const addressBE5DET4 = accounts[0]
		const addressYqPpb70 = await afiControllerQ0uM3d7.inCaseTokensGetStuck.call(addressMkQm2SV, uintiysLdnS, {from: accounts[4]});
		const addressdgWokbP = await afiControllerQ0uM3d7.yearn.call(addressyrPsWj, addresspxmNXf8, uintopnm1G, {from: accounts[5]});
		const uintwfjAeek = await afiControllerQ0uM3d7.balanceOf.call(addressduWJYDg, {from: accounts[2]});
		const addressVRa6esM = await afiControllerQ0uM3d7.setStrategy.call(addressBE5DET4, addressSGYaFjm, {from: accounts[0]});

		await expect(afiControllerQ0uM3d7.inCaseTokensGetStuck.call(addressMkQm2SV, uintiysLdnS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressKJ963pk = accounts[0]
		const afiControllergxzB5ML = await afiController.new(addressKJ963pk, {from: accounts[2]});
		const addressuV6T6k5 = accounts[3]
		const addressXRPPqH = accounts[4]
		const addressCVFTuC = accounts[0]
		const uint1D7eCp = BigInt("1635")
		const uintjMHnalx = BigInt("1130")
		const addressDcTX5u3 = accounts[2]
		const addressmCRaIZl = accounts[3]
		const address10UnJT = accounts[0]
		const addressdaLE37 = accounts[0]
		const addressH6SGKkY = accounts[5]
		const uintIlouKKV = BigInt("462")
		const addressDnkNeN1 = accounts[3]
		const addressUNfcno0 = await afiControllergxzB5ML.setConverter.call(addressCVFTuC, addressXRPPqH, addressuV6T6k5, {from: "0x0000000000000000000000000000000000000001"});
		const uintX7httLq = await afiControllergxzB5ML.setSplit.call(uint1D7eCp, {from: "0x0000000000000000000000000000000000000001"});
		const uintU4mMxsG = await afiControllergxzB5ML.getExpectedReturn.call(addressmCRaIZl, addressDcTX5u3, uintjMHnalx, {from: accounts[1]});
		const addressEZhj62U = await afiControllergxzB5ML.setVault.call(addressdaLE37, address10UnJT, {from: accounts[2]});
		const addressbP0mny5 = await afiControllergxzB5ML.setOneSplit.call(addressH6SGKkY, {from: accounts[4]});
		const addressk36wVIh = await afiControllergxzB5ML.earn.call(addressDnkNeN1, uintIlouKKV, {from: accounts[0]});

		await expect(afiControllergxzB5ML.setConverter.call(addressCVFTuC, addressXRPPqH, addressuV6T6k5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressUphXrW = accounts[0]
		const afiControllerzgTh2TZ = await afiController.new(addressUphXrW, {from: accounts[3]});
		const addressky6jER = accounts[3]
		const uintw4AZlql = BigInt("1588")
		const addressoyWKyJ = accounts[4]
		const addresssktcmKF = await afiControllerzgTh2TZ.withdrawAll.call(addressky6jER, {from: accounts[5]});
		const uintFMXvbA = await afiControllerzgTh2TZ.setSplit.call(uintw4AZlql, {from: accounts[1]});
		const addressrz1iPcF = await afiControllerzgTh2TZ.withdrawAll.call(addressoyWKyJ, {from: accounts[0]});

		await expect(afiControllerzgTh2TZ.withdrawAll.call(addressky6jER, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqfn0AFt = accounts[1]
		const afiControllerf6t79c6 = await afiController.new(addressqfn0AFt, {from: accounts[5]});
		const addressDlC0RE7 = "0x0000000000000000000000000000000000000001"
		const addressrNkyoJp = accounts[3]
		const addresstN29AVT = accounts[4]
		const uintpe7UOBz = BigInt("1531")
		const address0ITscV = accounts[0]
		const addressEx1l4lK = accounts[0]
		const addressYBKjurn = accounts[3]
		const addressa3B42z6 = accounts[3]
		const addressr8gb0CK = accounts[0]
		const addressks3O5xU = "0x0000000000000000000000000000000000000001"
		const addressFD2cuCg = await afiControllerf6t79c6.inCaseStrategyTokenGetStuck.call(addressrNkyoJp, addressDlC0RE7, {from: accounts[3]});
		const addressMFHZMX0 = await afiControllerf6t79c6.withdrawAll.call(addresstN29AVT, {from: accounts[2]});
		const uintkixF0fa = await afiControllerf6t79c6.getExpectedReturn.call(addressEx1l4lK, address0ITscV, uintpe7UOBz, {from: accounts[1]});
		const addressN1UGf9R = await afiControllerf6t79c6.revokeStrategy.call(addressa3B42z6, addressYBKjurn, {from: accounts[1]});
		const addressaMYXHjP = await afiControllerf6t79c6.inCaseStrategyTokenGetStuck.call(addressks3O5xU, addressr8gb0CK, {from: accounts[2]});

		await expect(afiControllerf6t79c6.inCaseStrategyTokenGetStuck.call(addressrNkyoJp, addressDlC0RE7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressXzmnNTY = accounts[0]
		const afiControllerzgTh2TZ = await afiController.new(addressXzmnNTY, {from: accounts[3]});
		const uintooMcM5h = BigInt("1588")
		const addressD2I9Fcq = accounts[4]
		const uintFMXvbA = await afiControllerzgTh2TZ.setSplit.call(uintooMcM5h, {from: accounts[1]});
		const addressrz1iPcF = await afiControllerzgTh2TZ.withdrawAll.call(addressD2I9Fcq, {from: accounts[0]});

		await expect(afiControllerzgTh2TZ.setSplit.call(uintooMcM5h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqQsVSBF = accounts[5]
		const afiControllerhW4Gj7u = await afiController.new(addressqQsVSBF, {from: accounts[3]});
		const addresspmWooLf = accounts[4]
		const addressWgOjcQX = accounts[1]
		const addresswkyfj41 = await afiControllerhW4Gj7u.revokeStrategy.call(addressWgOjcQX, addresspmWooLf, {from: accounts[0]});

		await expect(afiControllerhW4Gj7u.revokeStrategy.call(addressWgOjcQX, addresspmWooLf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressn4yFzWI = accounts[5]
		const afiControllerhW4Gj7u = await afiController.new(addressn4yFzWI, {from: accounts[3]});
		const uintWThGp8U = BigInt("113")
		const addressfzKEq2z = accounts[2]
		const addressfXOxQvB = accounts[5]
		const addressLGEHW3 = "0x0000000000000000000000000000000000000001"
		const addressr6OqJVw = accounts[1]
		const addressZNnVGlZ = accounts[5]
		const addressjhZg9Lv = accounts[1]
		const addressRzjqnn7 = await afiControllerhW4Gj7u.earn.call(addressfzKEq2z, uintWThGp8U, {from: accounts[3]});
		const addressIj3sTjQ = await afiControllerhW4Gj7u.setConverter.call(addressr6OqJVw, addressLGEHW3, addressfXOxQvB, {from: accounts[4]});
		const addresswkyfj41 = await afiControllerhW4Gj7u.revokeStrategy.call(addressjhZg9Lv, addressZNnVGlZ, {from: accounts[0]});

		await expect(afiControllerhW4Gj7u.earn.call(addressfzKEq2z, uintWThGp8U, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresspFAf1eE = accounts[3]
		const afiControllerila6shb = await afiController.new(addresspFAf1eE, {from: accounts[3]});
		const addressl4qujK = accounts[0]
		const uintBepioV4 = BigInt("1321")
		const addressh6bubQz = accounts[2]
		const uintdgd1Spw = BigInt("350")
		const addressx5rJJt1 = accounts[2]
		const addressvKe5TF = accounts[1]
		const addresso2CdLPP = accounts[5]
		const addressa1xO0bz = await afiControllerila6shb.setStrategist.call(addressl4qujK, {from: accounts[2]});
		const addressami1edj = await afiControllerila6shb.inCaseTokensGetStuck.call(addressh6bubQz, uintBepioV4, {from: accounts[4]});
		const uinthNqkFR8 = await afiControllerila6shb.setSplit.call(uintdgd1Spw, {from: accounts[0]});
		const addressJ9NB0Wr = await afiControllerila6shb.setRewards.call(addressx5rJJt1, {from: accounts[3]});
		const addressK499M79 = await afiControllerila6shb.setVault.call(addresso2CdLPP, addressvKe5TF, {from: accounts[1]});

		await expect(afiControllerila6shb.setStrategist.call(addressl4qujK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressZYSLXO = accounts[0]
		const afiControllerQ0uM3d7 = await afiController.new(addressZYSLXO, {from: accounts[5]});
		const addressPSdbobr = accounts[4]
		const uintML40O9h = BigInt("461")
		const addresswxjgY5U = accounts[0]
		const addressMg2HU0l = accounts[1]
		const uintmAQdm3s = BigInt("1811")
		const addressb66rQ04 = accounts[0]
		const addressmox4w17 = accounts[3]
		const uint6u75rn = BigInt("1760")
		const addressGSzKwSl = accounts[2]
		const addressgKlNKKu = accounts[5]
		const addresskQr7ahz = accounts[3]
		const addressxMVQVZ8 = accounts[0]
		const addressgAJnY1u = await afiControllerQ0uM3d7.setOneSplit.call(addressPSdbobr, {from: "0x0000000000000000000000000000000000000001"});
		const addressYqPpb70 = await afiControllerQ0uM3d7.inCaseTokensGetStuck.call(addresswxjgY5U, uintML40O9h, {from: accounts[4]});
		const uintlYTxa2Q = await afiControllerQ0uM3d7.balanceOf.call(addressMg2HU0l, {from: accounts[3]});
		const addressdgWokbP = await afiControllerQ0uM3d7.yearn.call(addressmox4w17, addressb66rQ04, uintmAQdm3s, {from: accounts[5]});
		const uintEFgazEe = await afiControllerQ0uM3d7.getExpectedReturn.call(addressgKlNKKu, addressGSzKwSl, uint6u75rn, {from: accounts[3]});
		const addressVRa6esM = await afiControllerQ0uM3d7.setStrategy.call(addressxMVQVZ8, addresskQr7ahz, {from: accounts[0]});

		await expect(afiControllerQ0uM3d7.setOneSplit.call(addressPSdbobr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressrwQWKmB = accounts[5]
		const afiControllerhW4Gj7u = await afiController.new(addressrwQWKmB, {from: accounts[3]});
		const uintW2VzoFF = BigInt("1647")
		const addresstJByGLd = accounts[0]
		const addressbF0DPF = accounts[2]
		const addressG6frQ03 = accounts[3]
		const uintng9zOLD = BigInt("113")
		const addressC2ChSyS = accounts[2]
		const addressdNs3Tcj = accounts[5]
		const addresshkMzI9z = "0x0000000000000000000000000000000000000001"
		const addressl2i75Wk = accounts[1]
		const addressQ0athbe = accounts[5]
		const addresseIXero = accounts[1]
		const addressA1EgcI = await afiControllerhW4Gj7u.yearn.call(addressbF0DPF, addresstJByGLd, uintW2VzoFF, {from: accounts[3]});
		const addressSnkc2Ac = await afiControllerhW4Gj7u.setOneSplit.call(addressG6frQ03, {from: accounts[1]});
		const addressRzjqnn7 = await afiControllerhW4Gj7u.earn.call(addressC2ChSyS, uintng9zOLD, {from: accounts[3]});
		const addressIj3sTjQ = await afiControllerhW4Gj7u.setConverter.call(addressl2i75Wk, addresshkMzI9z, addressdNs3Tcj, {from: accounts[4]});
		const addresswkyfj41 = await afiControllerhW4Gj7u.revokeStrategy.call(addresseIXero, addressQ0athbe, {from: accounts[0]});

		await expect(afiControllerhW4Gj7u.yearn.call(addressbF0DPF, addresstJByGLd, uintW2VzoFF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresstQzUKtE = accounts[5]
		const afiControllerhW4Gj7u = await afiController.new(addresstQzUKtE, {from: accounts[3]});
		const addressPUQkor = accounts[0]
		const addressnl1rTJ1 = accounts[0]
		const uintvOmb8bH = BigInt("113")
		const addresslyKWAKR = accounts[2]
		const addressspd4KDc = accounts[6]
		const addresslpZCL1S = accounts[1]
		const addressCrMI7gU = await afiControllerhW4Gj7u.setStrategy.call(addressnl1rTJ1, addressPUQkor, {from: accounts[3]});
		const addressRzjqnn7 = await afiControllerhW4Gj7u.earn.call(addresslyKWAKR, uintvOmb8bH, {from: accounts[3]});
		const addresswkyfj41 = await afiControllerhW4Gj7u.revokeStrategy.call(addresslpZCL1S, addressspd4KDc, {from: accounts[0]});

		await expect(afiControllerhW4Gj7u.setStrategy.call(addressnl1rTJ1, addressPUQkor, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresstfN968M = accounts[5]
		const afiControllerhW4Gj7u = await afiController.new(addresstfN968M, {from: accounts[3]});
		const addressC2sD18E = accounts[3]
		const addressKaVy8yh = accounts[1]
		const addressgAZ6ygg = accounts[5]
		const addressbrom8WS = accounts[4]
		const addressZq0m0k = accounts[1]
		const uint0LWNdi = await afiControllerhW4Gj7u.balanceOf.call(addressC2sD18E, {from: accounts[3]});
		const addressato5Pe3 = await afiControllerhW4Gj7u.inCaseStrategyTokenGetStuck.call(addressgAZ6ygg, addressKaVy8yh, {from: "0x0000000000000000000000000000000000000001"});
		const addresswkyfj41 = await afiControllerhW4Gj7u.revokeStrategy.call(addressZq0m0k, addressbrom8WS, {from: accounts[0]});

		await expect(afiControllerhW4Gj7u.balanceOf.call(addressC2sD18E, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address0ZfyQ3 = accounts[5]
		const afiControllerhW4Gj7u = await afiController.new(address0ZfyQ3, {from: accounts[3]});
		const addressUpotSO5 = accounts[3]
		const addresssBDxT7N = "0x0000000000000000000000000000000000000001"
		const uintnJdCGtu = BigInt("113")
		const addressKig4if7 = accounts[2]
		const addressjRfo91W = await afiControllerhW4Gj7u.approveStrategy.call(addresssBDxT7N, addressUpotSO5, {from: "0x0000000000000000000000000000000000000001"});
		const addressRzjqnn7 = await afiControllerhW4Gj7u.earn.call(addressKig4if7, uintnJdCGtu, {from: accounts[3]});

		await expect(afiControllerhW4Gj7u.approveStrategy.call(addresssBDxT7N, addressUpotSO5, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressa9NiYfa = accounts[5]
		const afiControllervUjGWvA = await afiController.new(addressa9NiYfa, {from: accounts[2]});
		const uintcjvUTSr = BigInt("635")
		const addressKPUzdBp = accounts[4]
		const uintYE9wGDv = BigInt("104")
		const addressI1PGvwj = accounts[2]
		const addressnLKo0Fs = accounts[5]
		const uintzkyG8b = BigInt("258")
		const addressoMU0T4c = accounts[0]
		const uintVRz41v5 = BigInt("1842")
		const addressDGiDnPu = accounts[1]
		const addressmOldcbp = accounts[1]
		const addressAJyPbAl = accounts[6]
		const addressSVbp3Ei = await afiControllervUjGWvA.inCaseTokensGetStuck.call(addressKPUzdBp, uintcjvUTSr, {from: accounts[2]});
		const addresspv2l7PN = await afiControllervUjGWvA.yearn.call(addressnLKo0Fs, addressI1PGvwj, uintYE9wGDv, {from: accounts[2]});
		const addressJX2qQ4F = await afiControllervUjGWvA.withdraw.call(addressoMU0T4c, uintzkyG8b, {from: accounts[4]});
		const addressCmTtAWf = await afiControllervUjGWvA.inCaseTokensGetStuck.call(addressDGiDnPu, uintVRz41v5, {from: "0x0000000000000000000000000000000000000001"});
		const addressVaN10xn = await afiControllervUjGWvA.setRewards.call(addressmOldcbp, {from: accounts[1]});
		const addressIXFCdfH = await afiControllervUjGWvA.withdrawAll.call(addressAJyPbAl, {from: accounts[2]});

		await expect(afiControllervUjGWvA.inCaseTokensGetStuck.call(addressKPUzdBp, uintcjvUTSr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressivMmZL0 = accounts[5]
		const afiControllerhW4Gj7u = await afiController.new(addressivMmZL0, {from: accounts[3]});
		const uintPMCPGYa = BigInt("1019")
		const addressz9AkxK = accounts[1]
		const addressP8R0l0I = accounts[5]
		const uintwrf3Mz = BigInt("113")
		const addressdAYfsea = accounts[5]
		const addresssUUYWtP = accounts[3]
		const addressK22mgGK = accounts[2]
		const addressQWNO4Sv = accounts[1]
		const uintYOQzm3K = await afiControllerhW4Gj7u.getExpectedReturn.call(addressP8R0l0I, addressz9AkxK, uintPMCPGYa, {from: accounts[1]});
		const addressRzjqnn7 = await afiControllerhW4Gj7u.earn.call(addressdAYfsea, uintwrf3Mz, {from: accounts[3]});
		const addressAqPnycz = await afiControllerhW4Gj7u.setConverter.call(addressQWNO4Sv, addressK22mgGK, addresssUUYWtP, {from: accounts[2]});

		await expect(afiControllerhW4Gj7u.getExpectedReturn.call(addressP8R0l0I, addressz9AkxK, uintPMCPGYa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressh7cZ7wu = accounts[5]
		const afiControllerhW4Gj7u = await afiController.new(addressh7cZ7wu, {from: accounts[3]});
		const addressvDGoUlp = accounts[2]
		const addressaWoSlD4 = accounts[3]
		const addressGykstC3 = accounts[1]
		const addressNPZquN4 = accounts[0]
		const addressdFwaRaH = await afiControllerhW4Gj7u.setRewards.call(addressvDGoUlp, {from: "0x0000000000000000000000000000000000000001"});
		const uintSbjt3p = await afiControllerhW4Gj7u.balanceOf.call(addressaWoSlD4, {from: accounts[2]});
		const addressPH8SKWM = await afiControllerhW4Gj7u.approveStrategy.call(addressNPZquN4, addressGykstC3, {from: accounts[2]});

		await expect(afiControllerhW4Gj7u.setRewards.call(addressvDGoUlp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressPoDossj = accounts[0]
		const afiControllerrTK3dq8 = await afiController.new(addressPoDossj, {from: "0x0000000000000000000000000000000000000001"});
		const addressGC2Dz8E = accounts[3]
		const addressxAEOFZ = accounts[4]
		const addressEFpoQGz = "0x0000000000000000000000000000000000000001"
		const addresslCzcOMq = accounts[4]
		const addressUWMSiNf = "0x0000000000000000000000000000000000000001"
		const addressXz2dm2t = accounts[4]
		const addressANGwoqk = accounts[5]
		const addressn3jEQyI = accounts[4]
		const addressnDYMgAz = accounts[3]
		const addressQzRzF5K = accounts[2]
		const addressIoCpitw = accounts[3]
		const addressMjTOuUa = accounts[5]
		const addressnKueWag = await afiControllerrTK3dq8.setVault.call(addressxAEOFZ, addressGC2Dz8E, {from: "0x0000000000000000000000000000000000000001"});
		const addressNq8iod = await afiControllerrTK3dq8.revokeStrategy.call(addresslCzcOMq, addressEFpoQGz, {from: accounts[3]});
		const addresskl7MyBz = await afiControllerrTK3dq8.setRewards.call(addressUWMSiNf, {from: accounts[3]});
		const addressPsfmlxT = await afiControllerrTK3dq8.setConverter.call(addressn3jEQyI, addressANGwoqk, addressXz2dm2t, {from: "0x0000000000000000000000000000000000000001"});
		const addressCOh3ve3 = await afiControllerrTK3dq8.setStrategy.call(addressQzRzF5K, addressnDYMgAz, {from: accounts[3]});
		const addressOxFfRxS = await afiControllerrTK3dq8.setVault.call(addressMjTOuUa, addressIoCpitw, {from: "0x0000000000000000000000000000000000000001"});
	});
})