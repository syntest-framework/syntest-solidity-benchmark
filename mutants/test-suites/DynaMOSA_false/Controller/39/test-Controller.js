const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressuetL3W = accounts[2]
		const Controlleru7oTZ46 = await Controller.new(addressuetL3W, {from: accounts[3]});
		const uintgfyZIu8 = BigInt("168")
		const address4CUMvi = accounts[3]
		const uintsq4Q8Y = BigInt("1120")
		const addressnhSTA8L = accounts[3]
		const addresssWBYTPx = "0x0000000000000000000000000000000000000001"
		const addresshTGg4aS = accounts[1]
		const addressifIL0s2 = accounts[4]
		const uintELgylsL = BigInt("1180")
		const addressE5txDCN = "0x0000000000000000000000000000000000000001"
		const uintzoT5hfp = BigInt("1360")
		const addressOO7tzS8 = accounts[4]
//		const addressouPobK5 = await Controlleru7oTZ46.withdraw.call(address4CUMvi, uintgfyZIu8, {from: accounts[2]});
//		const uintOlRDee0 = await Controlleru7oTZ46.getExpectedReturn.call(addresssWBYTPx, addressnhSTA8L, uintsq4Q8Y, {from: accounts[1]});
//		const addressKZPUtBS = await Controlleru7oTZ46.inCaseStrategyTokenGetStuck.call(addressifIL0s2, addresshTGg4aS, {from: accounts[4]});
//		const addressGeOWNx = await Controlleru7oTZ46.inCaseTokensGetStuck.call(addressE5txDCN, uintELgylsL, {from: accounts[4]});
//		const addresscHxDg11 = await Controlleru7oTZ46.withdraw.call(addressOO7tzS8, uintzoT5hfp, {from: accounts[2]});

		await expect(Controlleru7oTZ46.withdraw.call(address4CUMvi, uintgfyZIu8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressaL6BLv = accounts[2]
		const ControllerzjgbIq = await Controller.new(addressaL6BLv, {from: accounts[3]});
		const uintp07CrM0 = BigInt("1880")
		const address6yQRJJ = "0x0000000000000000000000000000000000000001"
		const addressWvrJank = accounts[1]
		const uintp1oPYOo = BigInt("759")
		const addressI9HchCw = accounts[4]
		const addressDLOA4u = accounts[4]
		const addressh5YrM1h = accounts[1]
		const addressZHzhEr = accounts[4]
		const uintnit2ni = BigInt("1394")
		const addressnvr7WU = accounts[1]
//		const addresstoZBUic = await ControllerzjgbIq.yearn.call(addressWvrJank, address6yQRJJ, uintp07CrM0, {from: accounts[2]});
//		const addresshkOFczH = await ControllerzjgbIq.withdraw.call(addressI9HchCw, uintp1oPYOo, {from: accounts[3]});
//		const addressX3qwyrx = await ControllerzjgbIq.setGovernance.call(addressDLOA4u, {from: accounts[5]});
//		const addressvwv0fj1 = await ControllerzjgbIq.revokeStrategy.call(addressZHzhEr, addressh5YrM1h, {from: accounts[2]});
//		const addressvZRZ4VF = await ControllerzjgbIq.earn.call(addressnvr7WU, uintnit2ni, {from: accounts[0]});

		await expect(ControllerzjgbIq.yearn.call(addressWvrJank, address6yQRJJ, uintp07CrM0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfqeTfoy = accounts[1]
		const ControllerPgweEFE = await Controller.new(addressfqeTfoy, {from: accounts[3]});
		const addressjvlfTJ7 = accounts[3]
		const addressN0XpLuO = accounts[2]
		const addressrJ3Ky1j = accounts[1]
		const addressa6rWKWn = accounts[4]
		const addressU8Bp3mM = "0x0000000000000000000000000000000000000001"
		const addresspK7QlPW = "0x0000000000000000000000000000000000000001"
		const addresstxfzQsD = await ControllerPgweEFE.setConverter.call(addressrJ3Ky1j, addressN0XpLuO, addressjvlfTJ7, {from: accounts[3]});
//		const address0BEB1t = await ControllerPgweEFE.setVault.call(addressU8Bp3mM, addressa6rWKWn, {from: accounts[2]});
//		const uintZ6XkcUp = await ControllerPgweEFE.balanceOf.call(addresspK7QlPW, {from: accounts[1]});

		await expect(ControllerPgweEFE.setVault.call(addressU8Bp3mM, addressa6rWKWn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressf0sgagR = accounts[5]
		const ControllerHcfQhWl = await Controller.new(addressf0sgagR, {from: "0x0000000000000000000000000000000000000001"});
		const addressagkiTgg = accounts[1]
		const uintdx5HpK = BigInt("893")
		const addressbbksGGT = "0x0000000000000000000000000000000000000001"
		const addressdsSVVGQ = accounts[5]
		const addressMtGijIU = await ControllerHcfQhWl.withdrawAll.call(addressagkiTgg, {from: accounts[3]});
		const uintRUkVROC = await ControllerHcfQhWl.getExpectedReturn.call(addressdsSVVGQ, addressbbksGGT, uintdx5HpK, {from: accounts[0]});
	});

	it('test for Controller', async () => {
		const addresskl4yLB = accounts[4]
		const ControllerLjNqXo7 = await Controller.new(addresskl4yLB, {from: accounts[0]});
		const addresswSaJkBE = accounts[1]
		const addressDEs2z4L = accounts[4]
		const uinthKFtERX = BigInt("477")
		const addressBHv0hY4 = accounts[1]
		const uintHWgdoMW = BigInt("1983")
		const addressvtaChw = accounts[3]
		const addressHa9FwU = accounts[2]
//		const addressEuYYCFh = await ControllerLjNqXo7.revokeStrategy.call(addressDEs2z4L, addresswSaJkBE, {from: accounts[3]});
//		const addresskVLzjUO = await ControllerLjNqXo7.inCaseTokensGetStuck.call(addressBHv0hY4, uinthKFtERX, {from: accounts[1]});
//		const addressPY1waQv = await ControllerLjNqXo7.inCaseTokensGetStuck.call(addressvtaChw, uintHWgdoMW, {from: accounts[1]});
//		const addressMURNlk2 = await ControllerLjNqXo7.setGovernance.call(addressHa9FwU, {from: accounts[1]});

		await expect(ControllerLjNqXo7.revokeStrategy.call(addressDEs2z4L, addresswSaJkBE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressXmmUPi = accounts[1]
		const ControllereFI5Cr6 = await Controller.new(addressXmmUPi, {from: accounts[4]});
		const addressaYoWoKV = accounts[5]
		const addresshRFer0J = accounts[5]
		const addressCTCfRH9 = accounts[2]
		const addresswj5Qihn = accounts[4]
		const addressFWiHwdq = accounts[1]
		const addressuaCPIr1 = accounts[0]
		const addressy0kmUfa = accounts[1]
//		const addresswZDaJEP = await ControllereFI5Cr6.setOneSplit.call(addressaYoWoKV, {from: accounts[1]});
//		const addressv4cIElU = await ControllereFI5Cr6.setRewards.call(addresshRFer0J, {from: accounts[1]});
//		const addressVfp7ci6 = await ControllereFI5Cr6.inCaseStrategyTokenGetStuck.call(addresswj5Qihn, addressCTCfRH9, {from: accounts[0]});
//		const uintVtvFaFZ = await ControllereFI5Cr6.balanceOf.call(addressFWiHwdq, {from: accounts[3]});
//		const addressBrA049n = await ControllereFI5Cr6.setVault.call(addressy0kmUfa, addressuaCPIr1, {from: accounts[1]});

		await expect(ControllereFI5Cr6.setOneSplit.call(addressaYoWoKV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressQl1mIuy = "0x0000000000000000000000000000000000000001"
		const ControllercD0gn0 = await Controller.new(addressQl1mIuy, {from: accounts[2]});
		const uintXjAJH7U = BigInt("153")
		const addressgFkxu8O = accounts[4]
		const address963UVF = accounts[4]
		const addressGuaGGmY = accounts[2]
		const addressHYNQydg = accounts[2]
//		const uintmeAJ9GD = await ControllercD0gn0.setSplit.call(uintXjAJH7U, {from: accounts[0]});
//		const addressUXnbmAt = await ControllercD0gn0.setStrategy.call(address963UVF, addressgFkxu8O, {from: accounts[1]});
//		const addresslIju2j8 = await ControllercD0gn0.setVault.call(addressHYNQydg, addressGuaGGmY, {from: accounts[4]});

		await expect(ControllercD0gn0.setSplit.call(uintXjAJH7U, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressmbpa5RK = accounts[4]
		const ControllerSukojyc = await Controller.new(addressmbpa5RK, {from: accounts[1]});
		const addressaiqidnG = accounts[0]
		const addressEHTtswL = accounts[4]
		const uintdO98UQe = BigInt("907")
		const addressr0gFOts = accounts[4]
		const addressm0iJ9ZH = accounts[3]
		const uintA8IyKEa = BigInt("655")
		const addressji6rQJQ = accounts[0]
		const addressOKgwwAG = accounts[5]
//		const addressGG2WZOR = await ControllerSukojyc.setStrategy.call(addressEHTtswL, addressaiqidnG, {from: accounts[4]});
//		const uintrI14hZ = await ControllerSukojyc.getExpectedReturn.call(addressm0iJ9ZH, addressr0gFOts, uintdO98UQe, {from: accounts[4]});
//		const addresswa5ieMj = await ControllerSukojyc.inCaseTokensGetStuck.call(addressji6rQJQ, uintA8IyKEa, {from: accounts[2]});
//		const addressq163Hvl = await ControllerSukojyc.setGovernance.call(addressOKgwwAG, {from: accounts[3]});

		await expect(ControllerSukojyc.setStrategy.call(addressEHTtswL, addressaiqidnG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressgf6bQL9 = accounts[0]
		const Controllera4Gj4n4 = await Controller.new(addressgf6bQL9, {from: accounts[3]});
		const addressl72XKS4 = accounts[5]
		const addressSVejIB5 = accounts[0]
		const addressf86SxC = accounts[5]
		const addressRcVEGaE = accounts[3]
		const addressSpAvki9 = accounts[2]
		const uintIKoHK16 = BigInt("829")
		const addressBvqvhP4 = accounts[3]
		const addresswF5Vwwi = accounts[2]
//		const addressagjpCoe = await Controllera4Gj4n4.inCaseStrategyTokenGetStuck.call(addressSVejIB5, addressl72XKS4, {from: accounts[4]});
//		const addressttmX3JJ = await Controllera4Gj4n4.setVault.call(addressRcVEGaE, addressf86SxC, {from: accounts[0]});
//		const uintht8k2h0 = await Controllera4Gj4n4.balanceOf.call(addressSpAvki9, {from: accounts[2]});
//		const uintycYEevo = await Controllera4Gj4n4.setSplit.call(uintIKoHK16, {from: accounts[3]});
//		const addressCnbyhDP = await Controllera4Gj4n4.inCaseStrategyTokenGetStuck.call(addresswF5Vwwi, addressBvqvhP4, {from: accounts[4]});

		await expect(Controllera4Gj4n4.inCaseStrategyTokenGetStuck.call(addressSVejIB5, addressl72XKS4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressm4uInEv = accounts[1]
		const ControllerN1O4OTp = await Controller.new(addressm4uInEv, {from: accounts[4]});
		const uintOG96mED = BigInt("1696")
		const addressqY4KLEQ = accounts[1]
		const addressweQOT7 = accounts[4]
		const uintMGXDlA = BigInt("1522")
		const addressFu5q8gB = accounts[4]
		const addressuajcia = accounts[4]
		const address4tw7AW = accounts[1]
//		const uint9K7g3T = await ControllerN1O4OTp.getExpectedReturn.call(addressweQOT7, addressqY4KLEQ, uintOG96mED, {from: accounts[2]});
//		const uintbUEmSZf = await ControllerN1O4OTp.setSplit.call(uintMGXDlA, {from: accounts[2]});
//		const addresslmcPQ1q = await ControllerN1O4OTp.setConverter.call(address4tw7AW, addressuajcia, addressFu5q8gB, {from: accounts[2]});

		await expect(ControllerN1O4OTp.getExpectedReturn.call(addressweQOT7, addressqY4KLEQ, uintOG96mED, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressaOtGLt = accounts[2]
		const Controllerf59GQZR = await Controller.new(addressaOtGLt, {from: accounts[2]});
		const uintz3aAF2x = BigInt("1081")
		const addresss41VjYd = accounts[0]
		const addressmvksJu = accounts[0]
		const addressSRXHfOX = accounts[5]
		const addressTmWqj3Q = accounts[3]
//		const addressIzhSGCE = await Controllerf59GQZR.earn.call(addresss41VjYd, uintz3aAF2x, {from: accounts[1]});
//		const addresszeV3Wrr = await Controllerf59GQZR.setGovernance.call(addressmvksJu, {from: accounts[0]});
//		const address6FAzc5 = await Controllerf59GQZR.revokeStrategy.call(addressTmWqj3Q, addressSRXHfOX, {from: accounts[2]});

		await expect(Controllerf59GQZR.earn.call(addresss41VjYd, uintz3aAF2x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxw65B41 = accounts[2]
		const ControllerzjgbIq = await Controller.new(addressxw65B41, {from: accounts[3]});
		const uintnNQWsH = BigInt("1579")
		const addressLIIGanO = accounts[2]
		const uintbvpwFat = BigInt("1880")
		const addresscHWksXk = "0x0000000000000000000000000000000000000001"
		const addressmYWcjES = accounts[1]
		const uintyjhnFXb = BigInt("759")
		const addresswolrlJJ = accounts[5]
		const addresszYYsrF = accounts[4]
		const addresswj6tKo = accounts[1]
		const addresswpiDIuW = accounts[4]
		const uintI02IEMR = BigInt("1394")
		const addressMYg5YfR = accounts[2]
//		const addressAOtA8gC = await ControllerzjgbIq.inCaseTokensGetStuck.call(addressLIIGanO, uintnNQWsH, {from: accounts[1]});
//		const addresstoZBUic = await ControllerzjgbIq.yearn.call(addressmYWcjES, addresscHWksXk, uintbvpwFat, {from: accounts[2]});
//		const addresshkOFczH = await ControllerzjgbIq.withdraw.call(addresswolrlJJ, uintyjhnFXb, {from: accounts[3]});
//		const addressekwLCAl = await ControllerzjgbIq.setOneSplit.call(addresszYYsrF, {from: accounts[5]});
//		const addressvwv0fj1 = await ControllerzjgbIq.revokeStrategy.call(addresswpiDIuW, addresswj6tKo, {from: accounts[2]});
//		const addressvZRZ4VF = await ControllerzjgbIq.earn.call(addressMYg5YfR, uintI02IEMR, {from: accounts[0]});

		await expect(ControllerzjgbIq.inCaseTokensGetStuck.call(addressLIIGanO, uintnNQWsH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressX9QIM50 = accounts[1]
		const ControllerAmMu1xf = await Controller.new(addressX9QIM50, {from: accounts[1]});
		const addressmuFKSj6 = accounts[1]
		const addressDg9SHdU = accounts[4]
		const address9AWi3F = accounts[1]
		const addressLbvUMID = accounts[4]
		const addressRjEBAcw = accounts[5]
		const uintyLPwYDW = BigInt("1465")
		const addressvEVQQXn = accounts[3]
		const uintGwoCMu6 = BigInt("887")
		const addresscxVwMvX = accounts[3]
		const uintiAXLwkD = BigInt("1977")
		const addresssBVKUK = await ControllerAmMu1xf.setGovernance.call(addressmuFKSj6, {from: accounts[1]});
//		const addressCvqbvJ0 = await ControllerAmMu1xf.setStrategy.call(address9AWi3F, addressDg9SHdU, {from: accounts[3]});
//		const addressGfg1z0N = await ControllerAmMu1xf.inCaseStrategyTokenGetStuck.call(addressRjEBAcw, addressLbvUMID, {from: accounts[3]});
//		const uintjBwvPu8 = await ControllerAmMu1xf.setSplit.call(uintyLPwYDW, {from: accounts[3]});
//		const addressWYFQku = await ControllerAmMu1xf.setOneSplit.call(addressvEVQQXn, {from: accounts[1]});
//		const addressDYwn8p2 = await ControllerAmMu1xf.inCaseTokensGetStuck.call(addresscxVwMvX, uintGwoCMu6, {from: accounts[1]});
//		const uintqd6fH4 = await ControllerAmMu1xf.setSplit.call(uintiAXLwkD, {from: accounts[2]});

		await expect(ControllerAmMu1xf.setStrategy.call(address9AWi3F, addressDg9SHdU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxJ8fer2 = accounts[4]
		const ControlleriEGCIX0 = await Controller.new(addressxJ8fer2, {from: accounts[0]});
		const addressf7XVfCk = accounts[0]
		const addresszUOT4SM = accounts[2]
		const addressaijm5q = accounts[0]
		const addressVZPzG8w = accounts[2]
		const addresskPKaPVy = accounts[2]
		const addressljYJTJ6 = accounts[1]
		const addresslgy2U0u = accounts[2]
//		const addressVjtohoU = await ControlleriEGCIX0.withdrawAll.call(addressf7XVfCk, {from: accounts[3]});
//		const addressoQ3sEzY = await ControlleriEGCIX0.revokeStrategy.call(addressaijm5q, addresszUOT4SM, {from: accounts[4]});
//		const addressbvlmI73 = await ControlleriEGCIX0.setOneSplit.call(addressVZPzG8w, {from: accounts[2]});
//		const addressCTqkbT = await ControlleriEGCIX0.revokeStrategy.call(addressljYJTJ6, addresskPKaPVy, {from: accounts[5]});
//		const addressWA2AAi = await ControlleriEGCIX0.withdrawAll.call(addresslgy2U0u, {from: accounts[1]});

		await expect(ControlleriEGCIX0.withdrawAll.call(addressf7XVfCk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressUOztZtc = accounts[2]
		const ControllerzjgbIq = await Controller.new(addressUOztZtc, {from: accounts[3]});
		const addressW9OXOq = accounts[0]
		const uint0SuU8h = BigInt("211")
		const addressfPQ2bZa = accounts[1]
		const addressOU8sf2 = accounts[5]
		const uintB0lKLES = BigInt("1880")
		const addressUBufoj2 = accounts[4]
		const addressthfgMPX = accounts[1]
		const addressGD0pkkQ = accounts[3]
		const addresstaK7a2h = accounts[1]
		const addressN523o15 = accounts[1]
		const addressJUZH23 = accounts[2]
		const addressZQ6OC8 = accounts[0]
		const addresstG9lvLq = accounts[3]
		const addressXUsm6Is = accounts[4]
		const addressgb5lSPc = accounts[4]
//		const addresspWYRmdQ = await ControllerzjgbIq.setStrategist.call(addressW9OXOq, {from: accounts[2]});
//		const addresspvGhtBf = await ControllerzjgbIq.yearn.call(addressOU8sf2, addressfPQ2bZa, uint0SuU8h, {from: accounts[3]});
//		const addresstoZBUic = await ControllerzjgbIq.yearn.call(addressthfgMPX, addressUBufoj2, uintB0lKLES, {from: accounts[2]});
//		const addressVDhX0ok = await ControllerzjgbIq.approveStrategy.call(addresstaK7a2h, addressGD0pkkQ, {from: accounts[1]});
//		const uintb36psz2 = await ControllerzjgbIq.balanceOf.call(addressN523o15, {from: accounts[1]});
//		const addressYYNaUF = await ControllerzjgbIq.setVault.call(addressZQ6OC8, addressJUZH23, {from: accounts[0]});
//		const addressvwv0fj1 = await ControllerzjgbIq.revokeStrategy.call(addressXUsm6Is, addresstG9lvLq, {from: accounts[2]});
//		const addressQ7ikp6a = await ControllerzjgbIq.setStrategist.call(addressgb5lSPc, {from: accounts[3]});

		await expect(ControllerzjgbIq.setStrategist.call(addressW9OXOq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMKdb0v6 = accounts[3]
		const ControllerjKh03wo = await Controller.new(addressMKdb0v6, {from: accounts[4]});
		const addressUebiQR = accounts[0]
		const addressDFsDAg = accounts[0]
		const addressr9pXLa7 = accounts[4]
		const uint4OTm0h = BigInt("2016")
//		const uintjlNMEqd = await ControllerjKh03wo.balanceOf.call(addressUebiQR, {from: accounts[2]});
//		const addressT5f68lH = await ControllerjKh03wo.inCaseStrategyTokenGetStuck.call(addressr9pXLa7, addressDFsDAg, {from: accounts[1]});
//		const uintQWXIvl7 = await ControllerjKh03wo.setSplit.call(uint4OTm0h, {from: accounts[3]});

		await expect(ControllerjKh03wo.balanceOf.call(addressUebiQR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJTxlzU = accounts[2]
		const Controllerf59GQZR = await Controller.new(addressJTxlzU, {from: accounts[2]});
		const addresssHMcZIW = accounts[4]
		const addresshilgs5U = accounts[4]
		const addressNmX4yg4 = accounts[5]
		const addressAREUi9t = "0x0000000000000000000000000000000000000001"
		const addressbBMgJf1 = accounts[1]
		const uintzKtOKu6 = BigInt("1073")
		const addressS9aL3rG = accounts[1]
		const addressdU2Z3WP = await Controllerf59GQZR.approveStrategy.call(addresshilgs5U, addresssHMcZIW, {from: accounts[2]});
//		const addressVFGnaY = await Controllerf59GQZR.approveStrategy.call(addressAREUi9t, addressNmX4yg4, {from: accounts[5]});
//		const addressYwLWFq1 = await Controllerf59GQZR.setStrategist.call(addressbBMgJf1, {from: accounts[2]});
//		const addressIzhSGCE = await Controllerf59GQZR.earn.call(addressS9aL3rG, uintzKtOKu6, {from: accounts[1]});

		await expect(Controllerf59GQZR.approveStrategy.call(addressAREUi9t, addressNmX4yg4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshFqByW6 = accounts[4]
		const ControllerA5uOAVm = await Controller.new(addresshFqByW6, {from: accounts[2]});
		const uintd6bvql3 = BigInt("1359")
		const addressfLFUPs = accounts[3]
		const uintW2NsSXN = BigInt("1654")
		const addressjCHAtf = "0x0000000000000000000000000000000000000001"
		const addressJpPG0zK = accounts[0]
		const addressepuVMEL = accounts[0]
		const uintt12yUk9 = await ControllerA5uOAVm.setSplit.call(uintd6bvql3, {from: accounts[2]});
		const addressNFYVDh = await ControllerA5uOAVm.setOneSplit.call(addressfLFUPs, {from: accounts[2]});
//		const addressl7qqKcu = await ControllerA5uOAVm.inCaseTokensGetStuck.call(addressjCHAtf, uintW2NsSXN, {from: accounts[2]});
//		const addressBQa3eNu = await ControllerA5uOAVm.setStrategist.call(addressJpPG0zK, {from: accounts[0]});
//		const addressabFtbUV = await ControllerA5uOAVm.setRewards.call(addressepuVMEL, {from: accounts[3]});

		await expect(ControllerA5uOAVm.inCaseTokensGetStuck.call(addressjCHAtf, uintW2NsSXN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressno8JSfU = accounts[2]
		const ControllerzjgbIq = await Controller.new(addressno8JSfU, {from: accounts[3]});
		const address5lNuPP = accounts[3]
		const uintFghXPXD = BigInt("211")
		const addressnp5dvuw = accounts[4]
		const addressaO438pV = accounts[5]
		const addressjwDHoNR = accounts[5]
		const addressCnTP9k = accounts[2]
		const addressyIoWp7n = accounts[2]
		const addressh36mCl0 = accounts[4]
		const addressrGPbDvw = accounts[2]
		const addressT1YLs5u = accounts[1]
//		const addressbEGEa4W = await ControllerzjgbIq.setRewards.call(address5lNuPP, {from: accounts[0]});
//		const addresspvGhtBf = await ControllerzjgbIq.yearn.call(addressaO438pV, addressnp5dvuw, uintFghXPXD, {from: accounts[3]});
//		const addressnbqJ2WN = await ControllerzjgbIq.inCaseStrategyTokenGetStuck.call(addressCnTP9k, addressjwDHoNR, {from: accounts[1]});
//		const addressvwv0fj1 = await ControllerzjgbIq.revokeStrategy.call(addressh36mCl0, addressyIoWp7n, {from: accounts[2]});
//		const addresskPC5d3e = await ControllerzjgbIq.inCaseStrategyTokenGetStuck.call(addressT1YLs5u, addressrGPbDvw, {from: accounts[1]});

		await expect(ControllerzjgbIq.setRewards.call(address5lNuPP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressYXi5uqE = accounts[4]
		const ControllerSukojyc = await Controller.new(addressYXi5uqE, {from: accounts[1]});
		const addressu5a9w4x = "0x0000000000000000000000000000000000000001"
		const addresspqGyzcI = accounts[4]
		const addressl0DI6MI = accounts[0]
		const addressI0ACLo6 = accounts[1]
		const addresspCmjd3U = accounts[6]
//		const addressbzuRIpE = await ControllerSukojyc.setStrategy.call(addresspqGyzcI, addressu5a9w4x, {from: accounts[1]});
//		const addressGtcnZu = await ControllerSukojyc.approveStrategy.call(addressI0ACLo6, addressl0DI6MI, {from: accounts[4]});
//		const addressq163Hvl = await ControllerSukojyc.setGovernance.call(addresspCmjd3U, {from: accounts[3]});

		await expect(ControllerSukojyc.setStrategy.call(addresspqGyzcI, addressu5a9w4x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})