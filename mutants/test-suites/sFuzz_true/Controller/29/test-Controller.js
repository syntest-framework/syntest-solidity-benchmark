const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressz4X1G2m = accounts[0]
		const Controllerx5vDXx = await Controller.new(addressz4X1G2m, {from: accounts[0]});
		const addressLlBOBQT = accounts[1]
		const addressycpsOkL = accounts[4]
		const addressYLp2913 = accounts[0]
		const addressnbf4VX = accounts[2]
		const addressEyMktGw = accounts[1]
		const uintwZKH70 = BigInt("750")
		const addressHROXdAc = accounts[4]
		const addressK0boqB = accounts[1]
		const addressRSxI3JE = accounts[4]
//		const addressrI5soey = await Controllerx5vDXx.setStrategy.call(addressycpsOkL, addressLlBOBQT, {from: accounts[4]});
//		const uintc31A5GT = await Controllerx5vDXx.balanceOf.call(addressYLp2913, {from: accounts[4]});
//		const addressZX24H2f = await Controllerx5vDXx.revokeStrategy.call(addressEyMktGw, addressnbf4VX, {from: accounts[2]});
//		const uintQ69WEdm = await Controllerx5vDXx.setSplit.call(uintwZKH70, {from: accounts[3]});
//		const addresshyXLVCY = await Controllerx5vDXx.setConverter.call(addressRSxI3JE, addressK0boqB, addressHROXdAc, {from: accounts[1]});

		await expect(Controllerx5vDXx.setStrategy.call(addressycpsOkL, addressLlBOBQT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressPFKgxfa = accounts[1]
		const ControllerJxvHW9 = await Controller.new(addressPFKgxfa, {from: "0x0000000000000000000000000000000000000001"});
		const addressO5hS3k = accounts[4]
		const addressp3ryCdn = accounts[3]
		const uintfaGe315 = BigInt("1150")
		const addressP0ncXt = accounts[1]
		const addressPvCzW1 = accounts[5]
		const addressjxKm4FA = accounts[0]
		const addressakHI7PS = accounts[3]
		const addressjPyCf0a = accounts[5]
		const addressrlDSjVi = accounts[5]
		const addressnlJv56J = accounts[3]
		const addressdt82hi8 = accounts[4]
		const addressFbsTMdN = await ControllerJxvHW9.revokeStrategy.call(addressp3ryCdn, addressO5hS3k, {from: accounts[2]});
		const uintWabNc3h = await ControllerJxvHW9.getExpectedReturn.call(addressPvCzW1, addressP0ncXt, uintfaGe315, {from: accounts[5]});
		const addressqbJscGh = await ControllerJxvHW9.approveStrategy.call(addressakHI7PS, addressjxKm4FA, {from: accounts[4]});
		const addressgMtQyan = await ControllerJxvHW9.setConverter.call(addressnlJv56J, addressrlDSjVi, addressjPyCf0a, {from: accounts[1]});
		const uintaqDHBC6 = await ControllerJxvHW9.balanceOf.call(addressdt82hi8, {from: accounts[0]});
	});

	it('test for Controller', async () => {
		const addresstbcomrF = accounts[0]
		const Controllerw3HjdqX = await Controller.new(addresstbcomrF, {from: accounts[0]});
		const uintdP60pTk = BigInt("1703")
		const addressEq5U4xD = accounts[1]
		const uintoFO05ep = BigInt("737")
		const addressej8xmY = accounts[4]
		const addressQemKQPF = accounts[3]
		const addressvgLwV3m = accounts[3]
//		const uintLASucTs = await Controllerw3HjdqX.setSplit.call(uintdP60pTk, {from: accounts[1]});
//		const addressOQMIxUQ = await Controllerw3HjdqX.setGovernance.call(addressEq5U4xD, {from: accounts[3]});
//		const uintDKUIRRi = await Controllerw3HjdqX.setSplit.call(uintoFO05ep, {from: accounts[5]});
//		const addressEvknLMr = await Controllerw3HjdqX.setVault.call(addressQemKQPF, addressej8xmY, {from: accounts[5]});
//		const addressAtU1kf = await Controllerw3HjdqX.setRewards.call(addressvgLwV3m, {from: accounts[4]});

		await expect(Controllerw3HjdqX.setSplit.call(uintdP60pTk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresslEydhtj = accounts[0]
		const Controllerw7EPo7 = await Controller.new(addresslEydhtj, {from: accounts[1]});
		const addressZinxhcb = accounts[1]
		const addressv5VUkyg = accounts[4]
		const addressUOaUNXT = accounts[2]
		const addressmxHthMv = accounts[1]
//		const uintfCgV7i5 = await Controllerw7EPo7.balanceOf.call(addressZinxhcb, {from: accounts[2]});
//		const addressl4RiHUr = await Controllerw7EPo7.revokeStrategy.call(addressUOaUNXT, addressv5VUkyg, {from: accounts[3]});
//		const uintqVdStDr = await Controllerw7EPo7.balanceOf.call(addressmxHthMv, {from: accounts[3]});

		await expect(Controllerw7EPo7.balanceOf.call(addressZinxhcb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresspiSHm17 = accounts[4]
		const ControllersznqwmH = await Controller.new(addresspiSHm17, {from: accounts[2]});
		const addressx4NtUIB = accounts[4]
		const addressmMGSp4z = accounts[0]
		const addressUUWSFCw = accounts[0]
		const addressJVWCNgN = accounts[2]
		const addressfyT8IUT = accounts[3]
		const uintjR43MSO = BigInt("1742")
		const addressiD4uiLE = accounts[5]
		const addressmSZ4LSP = await ControllersznqwmH.setConverter.call(addressUUWSFCw, addressmMGSp4z, addressx4NtUIB, {from: accounts[2]});
//		const addressQeJyOa = await ControllersznqwmH.approveStrategy.call(addressfyT8IUT, addressJVWCNgN, {from: accounts[4]});
//		const addressVGLKbc = await ControllersznqwmH.earn.call(addressiD4uiLE, uintjR43MSO, {from: accounts[3]});

		await expect(ControllersznqwmH.approveStrategy.call(addressfyT8IUT, addressJVWCNgN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresssWBJOrQ = accounts[1]
		const ControllerghoM0V6 = await Controller.new(addresssWBJOrQ, {from: accounts[3]});
		const uintrAjQKMx = BigInt("1971")
		const addressHca4aNu = accounts[3]
		const addressRHcICtx = accounts[5]
		const uintPoWwFyq = BigInt("1356")
		const addressmonUrjU = accounts[2]
		const addressfhCci7i = accounts[0]
//		const uint2EpA7O = await ControllerghoM0V6.getExpectedReturn.call(addressRHcICtx, addressHca4aNu, uintrAjQKMx, {from: accounts[1]});
//		const addressI0mJ1SR = await ControllerghoM0V6.inCaseTokensGetStuck.call(addressmonUrjU, uintPoWwFyq, {from: accounts[3]});
//		const addressKrN2QyO = await ControllerghoM0V6.setOneSplit.call(addressfhCci7i, {from: accounts[3]});

		await expect(ControllerghoM0V6.getExpectedReturn.call(addressRHcICtx, addressHca4aNu, uintrAjQKMx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressBHPTo4s = accounts[0]
		const Controllerw7EPo7 = await Controller.new(addressBHPTo4s, {from: accounts[1]});
		const addressOvZIci7 = accounts[4]
		const addressjOpAkL4 = accounts[1]
		const addressW47I4SK = accounts[2]
		const addresss729YxE = accounts[4]
		const addressbrIFaJ3 = accounts[2]
		const addressOzU4Nda = accounts[2]
		const addressqBNfliT = accounts[1]
//		const addressQaVqyWz = await Controllerw7EPo7.setRewards.call(addressOvZIci7, {from: accounts[0]});
//		const uintfCgV7i5 = await Controllerw7EPo7.balanceOf.call(addressjOpAkL4, {from: accounts[2]});
//		const address3n1RL6 = await Controllerw7EPo7.withdrawAll.call(addressW47I4SK, {from: accounts[0]});
//		const addressl4RiHUr = await Controllerw7EPo7.revokeStrategy.call(addressbrIFaJ3, addresss729YxE, {from: accounts[3]});
//		const addresskKKpSap = await Controllerw7EPo7.withdrawAll.call(addressOzU4Nda, {from: accounts[0]});
//		const uintqVdStDr = await Controllerw7EPo7.balanceOf.call(addressqBNfliT, {from: accounts[3]});

		await expect(Controllerw7EPo7.setRewards.call(addressOvZIci7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressiIFGIuv = accounts[4]
		const ControllersznqwmH = await Controller.new(addressiIFGIuv, {from: accounts[2]});
		const addressBfL0vIp = accounts[2]
		const addressn42OpiD = accounts[4]
		const addressL9QFm5q = accounts[0]
		const addresswgrmEe = accounts[0]
		const addressj5gsOxE = accounts[2]
		const addresseZoCj0d = accounts[4]
		const uintjoZ0zNv = BigInt("1742")
		const addresstE6Fxf = accounts[5]
		const addressbpEsF0E = accounts[0]
//		const addressZ5L3lp = await ControllersznqwmH.setStrategist.call(addressBfL0vIp, {from: accounts[0]});
//		const addressmSZ4LSP = await ControllersznqwmH.setConverter.call(addresswgrmEe, addressL9QFm5q, addressn42OpiD, {from: accounts[2]});
//		const addressQeJyOa = await ControllersznqwmH.approveStrategy.call(addresseZoCj0d, addressj5gsOxE, {from: accounts[4]});
//		const addressVGLKbc = await ControllersznqwmH.earn.call(addresstE6Fxf, uintjoZ0zNv, {from: accounts[3]});
//		const addressprJ2Mfi = await ControllersznqwmH.setStrategist.call(addressbpEsF0E, {from: accounts[1]});

		await expect(ControllersznqwmH.setStrategist.call(addressBfL0vIp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressbx2gue = accounts[4]
		const ControllersznqwmH = await Controller.new(addressbx2gue, {from: accounts[2]});
		const addresswMsQFw6 = accounts[4]
		const addressN7zpSm = accounts[0]
		const addressRslM7bL = accounts[0]
		const uintmuADOe = BigInt("1981")
		const addressOMyQQmR = accounts[5]
		const addressmSZ4LSP = await ControllersznqwmH.setConverter.call(addressRslM7bL, addressN7zpSm, addresswMsQFw6, {from: accounts[2]});
//		const addressVGLKbc = await ControllersznqwmH.earn.call(addressOMyQQmR, uintmuADOe, {from: accounts[3]});

		await expect(ControllersznqwmH.earn.call(addressOMyQQmR, uintmuADOe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressEf2Q7LU = accounts[0]
		const Controllerw3HjdqX = await Controller.new(addressEf2Q7LU, {from: accounts[0]});
		const addressLesoFrs = accounts[0]
		const addressV5hedm0 = accounts[3]
		const addressMK52aM = accounts[3]
//		const addressEvknLMr = await Controllerw3HjdqX.setVault.call(addressV5hedm0, addressLesoFrs, {from: accounts[5]});
//		const addressAtU1kf = await Controllerw3HjdqX.setRewards.call(addressMK52aM, {from: accounts[4]});

		await expect(Controllerw3HjdqX.setVault.call(addressV5hedm0, addressLesoFrs, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressglRvNh = accounts[0]
		const Controllerw7EPo7 = await Controller.new(addressglRvNh, {from: accounts[1]});
		const addressFHi4Nkc = accounts[5]
		const addressTmaJrz = accounts[4]
		const addressUytIZ4d = accounts[2]
		const addressYfchF5 = accounts[4]
		const addressgkh8MAa = accounts[3]
		const addressdjVP48I = accounts[2]
		const uintsDXegE6 = BigInt("886")
		const addressdzoGgnc = "0x0000000000000000000000000000000000000001"
		const addresspLiGU3W = accounts[1]
		const addressDybZKKS = accounts[1]
//		const addressCLCrRGb = await Controllerw7EPo7.setGovernance.call(addressFHi4Nkc, {from: "0x0000000000000000000000000000000000000001"});
//		const addressQaVqyWz = await Controllerw7EPo7.setRewards.call(addressTmaJrz, {from: accounts[0]});
//		const uintfCgV7i5 = await Controllerw7EPo7.balanceOf.call(addressUytIZ4d, {from: accounts[2]});
//		const addressl4RiHUr = await Controllerw7EPo7.revokeStrategy.call(addressgkh8MAa, addressYfchF5, {from: accounts[3]});
//		const addresskKKpSap = await Controllerw7EPo7.withdrawAll.call(addressdjVP48I, {from: accounts[0]});
//		const addressiEOcOvS = await Controllerw7EPo7.yearn.call(addresspLiGU3W, addressdzoGgnc, uintsDXegE6, {from: accounts[2]});
//		const uintqVdStDr = await Controllerw7EPo7.balanceOf.call(addressDybZKKS, {from: accounts[3]});

		await expect(Controllerw7EPo7.setGovernance.call(addressFHi4Nkc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressbqghnTc = accounts[0]
		const Controllerw7EPo7 = await Controller.new(addressbqghnTc, {from: accounts[1]});
		const addressoSW676 = accounts[4]
		const addressqx7J47 = accounts[4]
		const addressF8XvNdh = accounts[2]
		const addresscZlvBQO = "0x0000000000000000000000000000000000000001"
		const addressw7BEAhL = accounts[0]
		const addressflHFj6 = accounts[4]
		const addressycWFjyl = accounts[3]
		const addressuLMd5pi = accounts[2]
		const address99QzT4 = accounts[1]
//		const addressF6N9S3W = await Controllerw7EPo7.inCaseStrategyTokenGetStuck.call(addressqx7J47, addressoSW676, {from: accounts[4]});
//		const addressGFIRd1W = await Controllerw7EPo7.setGovernance.call(addressF8XvNdh, {from: accounts[4]});
//		const addressZmxIZcV = await Controllerw7EPo7.setVault.call(addressw7BEAhL, addresscZlvBQO, {from: accounts[3]});
//		const addressl4RiHUr = await Controllerw7EPo7.revokeStrategy.call(addressycWFjyl, addressflHFj6, {from: accounts[3]});
//		const addresskKKpSap = await Controllerw7EPo7.withdrawAll.call(addressuLMd5pi, {from: accounts[0]});
//		const uintqVdStDr = await Controllerw7EPo7.balanceOf.call(address99QzT4, {from: accounts[3]});

		await expect(Controllerw7EPo7.inCaseStrategyTokenGetStuck.call(addressqx7J47, addressoSW676, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressqmVx4Yv = accounts[4]
		const Controllerpo5S8m = await Controller.new(addressqmVx4Yv, {from: accounts[0]});
		const uintW5RMnTT = BigInt("106")
		const addressorSl5j2 = accounts[1]
		const uintW9eD2U2 = BigInt("1445")
		const addressISrbTc = accounts[1]
//		const addressbGLHHtT = await Controllerpo5S8m.inCaseTokensGetStuck.call(addressorSl5j2, uintW5RMnTT, {from: accounts[2]});
//		const addresswZFhm7Y = await Controllerpo5S8m.earn.call(addressISrbTc, uintW9eD2U2, {from: accounts[1]});

		await expect(Controllerpo5S8m.inCaseTokensGetStuck.call(addressorSl5j2, uintW5RMnTT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresseCifOj = accounts[0]
		const ControllerRFhIwI7 = await Controller.new(addresseCifOj, {from: accounts[3]});
		const addressEqCUMM2 = accounts[3]
		const uint8QMc61 = BigInt("1340")
		const addressDNWhEZY = accounts[1]
//		const addressHVpxN0p = await ControllerRFhIwI7.withdrawAll.call(addressEqCUMM2, {from: accounts[5]});
//		const uintQV2a3qb = await ControllerRFhIwI7.setSplit.call(uint8QMc61, {from: accounts[2]});
//		const uintmG690yN = await ControllerRFhIwI7.balanceOf.call(addressDNWhEZY, {from: accounts[0]});

		await expect(ControllerRFhIwI7.withdrawAll.call(addressEqCUMM2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZrl1pr = accounts[4]
		const Controllerpo5S8m = await Controller.new(addressZrl1pr, {from: accounts[0]});
		const addressC6rya9E = accounts[0]
		const addresszsFrxbk = accounts[3]
		const uintk82yzd = BigInt("106")
		const addresslLOWbL = accounts[1]
		const addressG5zXIAO = accounts[4]
//		const addresst4InKb = await Controllerpo5S8m.revokeStrategy.call(addresszsFrxbk, addressC6rya9E, {from: accounts[1]});
//		const addressbGLHHtT = await Controllerpo5S8m.inCaseTokensGetStuck.call(addresslLOWbL, uintk82yzd, {from: accounts[2]});
//		const addressVWCKr5 = await Controllerpo5S8m.setOneSplit.call(addressG5zXIAO, {from: accounts[5]});

		await expect(Controllerpo5S8m.revokeStrategy.call(addresszsFrxbk, addressC6rya9E, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressTzYssG = accounts[0]
		const Controllerw3HjdqX = await Controller.new(addressTzYssG, {from: accounts[0]});
		const addressOjME0PN = accounts[1]
		const addressNMxGRc = accounts[2]
		const addressgd2Urq = accounts[4]
		const addressfDOtdQi = await Controllerw3HjdqX.setGovernance.call(addressOjME0PN, {from: accounts[0]});
//		const addressEvknLMr = await Controllerw3HjdqX.setVault.call(addressgd2Urq, addressNMxGRc, {from: accounts[5]});

		await expect(Controllerw3HjdqX.setVault.call(addressgd2Urq, addressNMxGRc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressXuFvS6t = accounts[3]
		const ControllerXrXpss = await Controller.new(addressXuFvS6t, {from: accounts[3]});
		const uintZIe1Yb = BigInt("617")
		const addressdSRMMvV = accounts[2]
		const addressHHwGVcm = accounts[4]
		const addressioZPuCo = accounts[2]
		const addressls3Ifl = accounts[4]
//		const addressehEpj1o = await ControllerXrXpss.withdraw.call(addressdSRMMvV, uintZIe1Yb, {from: accounts[3]});
//		const addressGFu7YI = await ControllerXrXpss.withdrawAll.call(addressHHwGVcm, {from: accounts[4]});
//		const uintOm77rw = await ControllerXrXpss.balanceOf.call(addressioZPuCo, {from: accounts[4]});
//		const addresswBqgMVU = await ControllerXrXpss.setRewards.call(addressls3Ifl, {from: accounts[0]});

		await expect(ControllerXrXpss.withdraw.call(addressdSRMMvV, uintZIe1Yb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressyFW4P7 = accounts[4]
		const ControllersznqwmH = await Controller.new(addressyFW4P7, {from: accounts[2]});
		const addressTGeqtsF = accounts[0]
		const uintnjQoKUq = BigInt("651")
		const addressuPoPqYx = accounts[2]
		const addressuXf1yL3 = accounts[2]
		const addressG3xlBnv = accounts[3]
//		const addressUiYypRA = await ControllersznqwmH.withdrawAll.call(addressTGeqtsF, {from: accounts[2]});
//		const addressTicOdEK = await ControllersznqwmH.earn.call(addressuPoPqYx, uintnjQoKUq, {from: accounts[1]});
//		const addressQeJyOa = await ControllersznqwmH.approveStrategy.call(addressG3xlBnv, addressuXf1yL3, {from: accounts[4]});

		await expect(ControllersznqwmH.withdrawAll.call(addressTGeqtsF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressbebUfle = accounts[4]
		const Controllerpo5S8m = await Controller.new(addressbebUfle, {from: accounts[0]});
		const addressoPlXLve = accounts[3]
		const addresslsTNmVS = accounts[4]
		const uintWZaokv = BigInt("108")
		const addressqStggBe = accounts[1]
		const addressM9ALyY4 = accounts[4]
		const addressj2tEQnP = accounts[3]
//		const addressYPDcNf5 = await Controllerpo5S8m.setStrategy.call(addresslsTNmVS, addressoPlXLve, {from: accounts[0]});
//		const addressbGLHHtT = await Controllerpo5S8m.inCaseTokensGetStuck.call(addressqStggBe, uintWZaokv, {from: accounts[2]});
//		const addressrUZk1z = await Controllerpo5S8m.inCaseStrategyTokenGetStuck.call(addressj2tEQnP, addressM9ALyY4, {from: accounts[1]});

		await expect(Controllerpo5S8m.setStrategy.call(addresslsTNmVS, addressoPlXLve, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressHbKPA1f = accounts[4]
		const Controllerpo5S8m = await Controller.new(addressHbKPA1f, {from: accounts[0]});
		const addressybW93Re = accounts[1]
		const uintHkS9c2d = BigInt("65")
		const addressNJqCKFw = accounts[1]
		const addressKdKe6uO = accounts[1]
		const addressRa7cHvi = accounts[3]
		const addresszIAY741 = await Controllerpo5S8m.setStrategist.call(addressybW93Re, {from: accounts[0]});
//		const addressbGLHHtT = await Controllerpo5S8m.inCaseTokensGetStuck.call(addressNJqCKFw, uintHkS9c2d, {from: accounts[2]});
//		const addressfVMvxq = await Controllerpo5S8m.setGovernance.call(addressKdKe6uO, {from: accounts[3]});
//		const addresseRByhE7 = await Controllerpo5S8m.setStrategist.call(addressRa7cHvi, {from: accounts[1]});

		await expect(Controllerpo5S8m.inCaseTokensGetStuck.call(addressNJqCKFw, uintHkS9c2d, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressRldzcH = accounts[4]
		const Controllerpo5S8m = await Controller.new(addressRldzcH, {from: accounts[0]});
		const addressSY32x4 = accounts[1]
		const uintxwZ9SSI = BigInt("106")
		const addressFFB45Gb = accounts[1]
//		const addressBnhtRAF = await Controllerpo5S8m.setOneSplit.call(addressSY32x4, {from: accounts[1]});
//		const addressbGLHHtT = await Controllerpo5S8m.inCaseTokensGetStuck.call(addressFFB45Gb, uintxwZ9SSI, {from: accounts[2]});

		await expect(Controllerpo5S8m.setOneSplit.call(addressSY32x4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressO45ER9H = accounts[4]
		const Controllerpo5S8m = await Controller.new(addressO45ER9H, {from: accounts[0]});
		const addressHAF3lVu = accounts[3]
		const addressjoTJso = accounts[5]
		const addressw84vuHr = "0x0000000000000000000000000000000000000001"
		const addressVRyP9y = accounts[2]
		const uintzl5LkB3 = BigInt("106")
		const addressdzTYus = accounts[1]
		const addresss1FULD = await Controllerpo5S8m.setOneSplit.call(addressHAF3lVu, {from: accounts[0]});
		const addressS9lQGBK = await Controllerpo5S8m.revokeStrategy.call(addressw84vuHr, addressjoTJso, {from: accounts[0]});
//		const addressBnhtRAF = await Controllerpo5S8m.setOneSplit.call(addressVRyP9y, {from: accounts[1]});
//		const addressbGLHHtT = await Controllerpo5S8m.inCaseTokensGetStuck.call(addressdzTYus, uintzl5LkB3, {from: accounts[2]});

		await expect(Controllerpo5S8m.setOneSplit.call(addressVRyP9y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressU6QKX2U = accounts[0]
		const Controllerw3HjdqX = await Controller.new(addressU6QKX2U, {from: accounts[0]});
		const uintlNFMbkU = BigInt("865")
		const uintxGoIBeM = BigInt("737")
		const addressC1cr7B = accounts[4]
		const addressRuNRN5n = accounts[3]
		const uintPPNOiub = await Controllerw3HjdqX.setSplit.call(uintlNFMbkU, {from: accounts[0]});
//		const uintDKUIRRi = await Controllerw3HjdqX.setSplit.call(uintxGoIBeM, {from: accounts[5]});
//		const addressciLayOj = await Controllerw3HjdqX.inCaseStrategyTokenGetStuck.call(addressRuNRN5n, addressC1cr7B, {from: accounts[4]});

		await expect(Controllerw3HjdqX.setSplit.call(uintxGoIBeM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfOPQXXy = accounts[2]
		const ControllerdgbCemH = await Controller.new(addressfOPQXXy, {from: accounts[5]});
		const uintoKuIVC8 = BigInt("1463")
		const addressg7rPBP = accounts[1]
		const addressKRXyXVK = "0x0000000000000000000000000000000000000001"
		const addressvHdJ78B = accounts[5]
		const addressjwSUlY = accounts[1]
		const addressoFoVWvQ = accounts[2]
		const addressdOdnxgZ = accounts[1]
		const addressTgiSAzI = accounts[3]
//		const addressb7hqsh = await ControllerdgbCemH.yearn.call(addressKRXyXVK, addressg7rPBP, uintoKuIVC8, {from: accounts[3]});
//		const addressZknp2J = await ControllerdgbCemH.setVault.call(addressjwSUlY, addressvHdJ78B, {from: accounts[4]});
//		const addressa41biEG = await ControllerdgbCemH.withdrawAll.call(addressoFoVWvQ, {from: accounts[4]});
//		const addressO2pXACC = await ControllerdgbCemH.setStrategist.call(addressdOdnxgZ, {from: accounts[1]});
//		const addressCmFUlkO = await ControllerdgbCemH.setOneSplit.call(addressTgiSAzI, {from: accounts[2]});

		await expect(ControllerdgbCemH.yearn.call(addressKRXyXVK, addressg7rPBP, uintoKuIVC8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressli9aP0 = accounts[0]
		const Controllerw3HjdqX = await Controller.new(addressli9aP0, {from: accounts[0]});
		const addressy9Yp9O7 = accounts[3]
		const addressGOwfpTI = accounts[3]
		const addressgJtLZA = accounts[1]
//		const addressKsQaGJS = await Controllerw3HjdqX.inCaseStrategyTokenGetStuck.call(addressGOwfpTI, addressy9Yp9O7, {from: accounts[0]});
//		const addresszAABnq = await Controllerw3HjdqX.setRewards.call(addressgJtLZA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllerw3HjdqX.inCaseStrategyTokenGetStuck.call(addressGOwfpTI, addressy9Yp9O7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressKxAxOeA = accounts[3]
		const ControllerXrXpss = await Controller.new(addressKxAxOeA, {from: accounts[3]});
		const addressxsQly6T = accounts[4]
		const addresso8Fo2c1 = accounts[4]
		const uintbaFKB21 = BigInt("687")
		const addressIXlRdct = accounts[2]
		const addressNsxpN2z = await ControllerXrXpss.setVault.call(addresso8Fo2c1, addressxsQly6T, {from: accounts[3]});
//		const addressehEpj1o = await ControllerXrXpss.withdraw.call(addressIXlRdct, uintbaFKB21, {from: accounts[3]});

		await expect(ControllerXrXpss.withdraw.call(addressIXlRdct, uintbaFKB21, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressa53mgy8 = accounts[3]
		const ControllerXrXpss = await Controller.new(addressa53mgy8, {from: accounts[3]});
		const uintriFqBth = BigInt("1602")
		const addressLX9FscQ = accounts[5]
		const addressvh1JT6h = accounts[3]
		const addresslm1wf8 = accounts[4]
		const addressibvAVyF = accounts[4]
		const addressLalz4tw = accounts[0]
		const addressWeDFpzI = accounts[4]
		const uintHQVOKng = BigInt("617")
		const addressDn6QpU1 = accounts[3]
//		const addressHXnImBb = await ControllerXrXpss.yearn.call(addressvh1JT6h, addressLX9FscQ, uintriFqBth, {from: accounts[3]});
//		const addressJSu0dM6 = await ControllerXrXpss.setGovernance.call(addresslm1wf8, {from: accounts[2]});
//		const addressGxKVfoN = await ControllerXrXpss.inCaseStrategyTokenGetStuck.call(addressLalz4tw, addressibvAVyF, {from: "0x0000000000000000000000000000000000000001"});
//		const addresstpWO6IV = await ControllerXrXpss.withdrawAll.call(addressWeDFpzI, {from: accounts[0]});
//		const addressehEpj1o = await ControllerXrXpss.withdraw.call(addressDn6QpU1, uintHQVOKng, {from: accounts[3]});

		await expect(ControllerXrXpss.yearn.call(addressvh1JT6h, addressLX9FscQ, uintriFqBth, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressoG5umd2 = accounts[0]
		const Controllerw3HjdqX = await Controller.new(addressoG5umd2, {from: accounts[0]});
		const uintwJ0rrOr = BigInt("475")
		const addressS2SmRTL = accounts[5]
		const addressgsRUcZa = accounts[0]
		const addressIypUYYs = accounts[1]
		const uintTaviLyw = BigInt("724")
		const addresswdU3eCV = accounts[4]
//		const addressa3j9RXl = await Controllerw3HjdqX.inCaseTokensGetStuck.call(addressS2SmRTL, uintwJ0rrOr, {from: accounts[0]});
//		const addressNUPHPT9 = await Controllerw3HjdqX.setOneSplit.call(addressgsRUcZa, {from: accounts[2]});
//		const addresszAABnq = await Controllerw3HjdqX.setRewards.call(addressIypUYYs, {from: "0x0000000000000000000000000000000000000001"});
//		const addressriSbrTk = await Controllerw3HjdqX.withdraw.call(addresswdU3eCV, uintTaviLyw, {from: accounts[3]});

		await expect(Controllerw3HjdqX.inCaseTokensGetStuck.call(addressS2SmRTL, uintwJ0rrOr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressoup7TVm = accounts[0]
		const Controllerw3HjdqX = await Controller.new(addressoup7TVm, {from: accounts[0]});
		const addressps2LrMc = accounts[2]
		const addressHMWFWsP = accounts[1]
		const addressp7KaITy = accounts[1]
		const addressD4ztcVt = accounts[0]
		const addressgjLlfSb = accounts[4]
		const addressYfUO0dG = accounts[0]
		const addressExSXcjQ = accounts[5]
		const addressY8tFRpQ = await Controllerw3HjdqX.approveStrategy.call(addressHMWFWsP, addressps2LrMc, {from: accounts[0]});
//		const addresszAABnq = await Controllerw3HjdqX.setRewards.call(addressp7KaITy, {from: "0x0000000000000000000000000000000000000001"});
//		const addresslggEttB = await Controllerw3HjdqX.setStrategy.call(addressgjLlfSb, addressD4ztcVt, {from: accounts[1]});
//		const addressixD1wOf = await Controllerw3HjdqX.approveStrategy.call(addressExSXcjQ, addressYfUO0dG, {from: accounts[0]});

		await expect(Controllerw3HjdqX.setRewards.call(addressp7KaITy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressNgULlh = accounts[0]
		const Controllerw3HjdqX = await Controller.new(addressNgULlh, {from: accounts[0]});
		const addressFTsTKQ1 = accounts[2]
		const addressAxBIMBa = accounts[1]
		const addressOOGlAUC = await Controllerw3HjdqX.setRewards.call(addressFTsTKQ1, {from: accounts[0]});
//		const addresszAABnq = await Controllerw3HjdqX.setRewards.call(addressAxBIMBa, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllerw3HjdqX.setRewards.call(addressAxBIMBa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})