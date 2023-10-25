const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressOeLD5Lq = accounts[0]
		const ControllerwhTU46l = await Controller.new(addressOeLD5Lq, {from: accounts[2]});
		const uintcUL8qEo = BigInt("1525")
		const addressNkBUybK = "0x0000000000000000000000000000000000000001"
		const addressqvnp3KU = "0x0000000000000000000000000000000000000001"
		const addressDaqCAn4 = accounts[4]
		const addresslt3UO5X = accounts[0]
		const addressG0dL6OP = accounts[3]
		const addressFqtB33Z = accounts[3]
		const uintoR4V2O = await ControllerwhTU46l.getExpectedReturn.call(addressqvnp3KU, addressNkBUybK, uintcUL8qEo, {from: accounts[5]});
		const uintvPXENpF = await ControllerwhTU46l.balanceOf.call(addressDaqCAn4, {from: "0x0000000000000000000000000000000000000001"});
		const addresspEbGehN = await ControllerwhTU46l.withdrawAll.call(addresslt3UO5X, {from: accounts[4]});
		const addresshuLRsfj = await ControllerwhTU46l.approveStrategy.call(addressFqtB33Z, addressG0dL6OP, {from: accounts[0]});

		await expect(ControllerwhTU46l.getExpectedReturn.call(addressqvnp3KU, addressNkBUybK, uintcUL8qEo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressicA4jyJ = accounts[4]
		const ControllereajKAR8 = await Controller.new(addressicA4jyJ, {from: "0x0000000000000000000000000000000000000001"});
		const addressXLlAhF9 = accounts[4]
		const addressNkJEyk = accounts[1]
		const uintvElXvKh = BigInt("1825")
		const addressS8T45Wx = "0x0000000000000000000000000000000000000001"
		const address1QCv4J = "0x0000000000000000000000000000000000000001"
		const addressa35QwEF = accounts[3]
		const addresseZVczfZ = accounts[4]
		const addressg2qgrx = accounts[0]
		const addressN1HaRwu = accounts[1]
		const addressBKTUpTn = accounts[2]
		const addressROFCgpY = await ControllereajKAR8.revokeStrategy.call(addressNkJEyk, addressXLlAhF9, {from: accounts[1]});
		const addressGiykzc9 = await ControllereajKAR8.inCaseTokensGetStuck.call(addressS8T45Wx, uintvElXvKh, {from: accounts[3]});
		const addressCq6eFRy = await ControllereajKAR8.setVault.call(addressa35QwEF, address1QCv4J, {from: accounts[0]});
		const addressgRaIpbh = await ControllereajKAR8.approveStrategy.call(addressg2qgrx, addresseZVczfZ, {from: accounts[0]});
		const addresstYZI4xB = await ControllereajKAR8.revokeStrategy.call(addressBKTUpTn, addressN1HaRwu, {from: accounts[0]});
	});

	it('test for Controller', async () => {
		const addressVa8EFlq = accounts[5]
		const ControllerEckuyeX = await Controller.new(addressVa8EFlq, {from: accounts[2]});
		const addresssyUCome = accounts[0]
		const addressF7Z8P0Q = accounts[3]
		const addressy8FBJBF = accounts[2]
		const uintHq1Z877 = await ControllerEckuyeX.balanceOf.call(addresssyUCome, {from: accounts[2]});
		const addressLcGVRew = await ControllerEckuyeX.setRewards.call(addressF7Z8P0Q, {from: "0x0000000000000000000000000000000000000001"});
		const uintQqYhM9T = await ControllerEckuyeX.balanceOf.call(addressy8FBJBF, {from: accounts[3]});

		await expect(ControllerEckuyeX.balanceOf.call(addresssyUCome, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressNUaPTJJ = accounts[5]
		const ControllerLRNIMvn = await Controller.new(addressNUaPTJJ, {from: accounts[2]});
		const addressuc1OPX3 = accounts[1]
		const addressRjk2b1C = accounts[2]
		const addressdwW3Yrq = accounts[1]
		const addressgIDOSmD = accounts[4]
		const addressfAmAkb = accounts[0]
		const addressPtarP6e = accounts[0]
		const addressXMYqEJi = await ControllerLRNIMvn.setStrategy.call(addressRjk2b1C, addressuc1OPX3, {from: "0x0000000000000000000000000000000000000001"});
		const address1lkfzz = await ControllerLRNIMvn.setStrategist.call(addressdwW3Yrq, {from: accounts[1]});
		const addressvkSbPqN = await ControllerLRNIMvn.withdrawAll.call(addressgIDOSmD, {from: accounts[4]});
		const addressoZKPrDR = await ControllerLRNIMvn.inCaseStrategyTokenGetStuck.call(addressPtarP6e, addressfAmAkb, {from: accounts[4]});

		await expect(ControllerLRNIMvn.setStrategy.call(addressRjk2b1C, addressuc1OPX3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresswU87Q34 = accounts[2]
		const ControllerFKINCHz = await Controller.new(addresswU87Q34, {from: accounts[1]});
		const addressMeV8RV = accounts[1]
		const addressIj0VN4v = accounts[4]
		const addresspl86lYP = accounts[0]
		const addressLPf2gCv = accounts[4]
		const addresstKzRMx3 = accounts[3]
		const addressrn20KTP = accounts[3]
		const addressEt27MPI = accounts[2]
		const uintmScXKJN = BigInt("167")
		const addresshnYnYZr = await ControllerFKINCHz.revokeStrategy.call(addressIj0VN4v, addressMeV8RV, {from: accounts[1]});
		const addresstgXjOzO = await ControllerFKINCHz.approveStrategy.call(addressLPf2gCv, addresspl86lYP, {from: accounts[4]});
		const addressBQP32Fl = await ControllerFKINCHz.setConverter.call(addressEt27MPI, addressrn20KTP, addresstKzRMx3, {from: accounts[2]});
		const uintfnoelg = await ControllerFKINCHz.setSplit.call(uintmScXKJN, {from: accounts[4]});

		await expect(ControllerFKINCHz.approveStrategy.call(addressLPf2gCv, addresspl86lYP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressewtJ5AQ = accounts[4]
		const ControllerLuDov3H = await Controller.new(addressewtJ5AQ, {from: accounts[1]});
		const uintpTeTgaw = BigInt("366")
		const addresst9pY8o = "0x0000000000000000000000000000000000000001"
		const addressk1TvV3q = accounts[3]
		const uintZ0c2CSb = BigInt("1725")
		const addresscSTToZZ = "0x0000000000000000000000000000000000000001"
		const addressGwOlOFZ = "0x0000000000000000000000000000000000000001"
		const addressDpPbwiw = await ControllerLuDov3H.inCaseTokensGetStuck.call(addresst9pY8o, uintpTeTgaw, {from: accounts[3]});
		const addressSn97Kpn = await ControllerLuDov3H.setGovernance.call(addressk1TvV3q, {from: accounts[4]});
		const addressyICGcAA = await ControllerLuDov3H.inCaseTokensGetStuck.call(addresscSTToZZ, uintZ0c2CSb, {from: accounts[4]});
		const addressENWkbie = await ControllerLuDov3H.setStrategist.call(addressGwOlOFZ, {from: accounts[2]});

		await expect(ControllerLuDov3H.inCaseTokensGetStuck.call(addresst9pY8o, uintpTeTgaw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressBb1dC1j = accounts[2]
		const ControllerQDVZHxr = await Controller.new(addressBb1dC1j, {from: accounts[3]});
		const uintrV9kV1 = BigInt("1975")
		const uintKujnfe8 = BigInt("1457")
		const addressAYRnH4G = accounts[0]
		const uintbY9C8oY = BigInt("1084")
		const addressjGrCbPm = accounts[1]
		const addressY0bZN7 = accounts[2]
		const addressgjPjK5f = accounts[0]
		const addressQqyfD6z = accounts[4]
		const uinty4Cq9ou = await ControllerQDVZHxr.setSplit.call(uintrV9kV1, {from: accounts[5]});
		const addressVBqguWi = await ControllerQDVZHxr.inCaseTokensGetStuck.call(addressAYRnH4G, uintKujnfe8, {from: "0x0000000000000000000000000000000000000001"});
		const uintYwa3K0N = await ControllerQDVZHxr.setSplit.call(uintbY9C8oY, {from: accounts[3]});
		const addressZMfQbL = await ControllerQDVZHxr.withdrawAll.call(addressjGrCbPm, {from: accounts[3]});
		const addressQMoLKR5 = await ControllerQDVZHxr.setOneSplit.call(addressY0bZN7, {from: accounts[2]});
		const addressZfEkaJ = await ControllerQDVZHxr.setVault.call(addressQqyfD6z, addressgjPjK5f, {from: accounts[1]});

		await expect(ControllerQDVZHxr.setSplit.call(uintrV9kV1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjKvCDs9 = "0x0000000000000000000000000000000000000001"
		const ControlleryaqzU1e = await Controller.new(addressjKvCDs9, {from: accounts[5]});
		const addressc4bOjUp = "0x0000000000000000000000000000000000000001"
		const addressbUTUGYs = accounts[3]
		const addressAu400nm = accounts[1]
		const uintwozrdq3 = BigInt("574")
		const addressz29ZGJ = accounts[0]
		const addressMfDLlg = accounts[4]
		const uinteC8d2KV = BigInt("288")
		const addressz44pPSF = accounts[4]
		const addressGeg0THl = await ControlleryaqzU1e.setRewards.call(addressc4bOjUp, {from: accounts[2]});
		const addresstGBbXQd = await ControlleryaqzU1e.approveStrategy.call(addressAu400nm, addressbUTUGYs, {from: accounts[1]});
		const addressEShvYn = await ControlleryaqzU1e.yearn.call(addressMfDLlg, addressz29ZGJ, uintwozrdq3, {from: "0x0000000000000000000000000000000000000001"});
		const addresstu9ajt = await ControlleryaqzU1e.earn.call(addressz44pPSF, uinteC8d2KV, {from: accounts[1]});

		await expect(ControlleryaqzU1e.setRewards.call(addressc4bOjUp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresss9zEd6K = accounts[5]
		const ControllerEckuyeX = await Controller.new(addresss9zEd6K, {from: accounts[2]});
		const addressSPIpIr = accounts[0]
		const addressfpPE6oQ = accounts[0]
		const addressLGjaUr = accounts[4]
		const addressTZuYSGU = accounts[2]
		const addressLzcv0O = accounts[3]
		const addresszwMeZf = accounts[3]
		const addressIOC3vmo = await ControllerEckuyeX.withdrawAll.call(addressSPIpIr, {from: accounts[1]});
		const uintHq1Z877 = await ControllerEckuyeX.balanceOf.call(addressfpPE6oQ, {from: accounts[2]});
		const addressb9i7Mpg = await ControllerEckuyeX.setVault.call(addressTZuYSGU, addressLGjaUr, {from: accounts[4]});
		const addressLcGVRew = await ControllerEckuyeX.setRewards.call(addressLzcv0O, {from: "0x0000000000000000000000000000000000000001"});
		const uintQqYhM9T = await ControllerEckuyeX.balanceOf.call(addresszwMeZf, {from: accounts[3]});

		await expect(ControllerEckuyeX.withdrawAll.call(addressSPIpIr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressEpB3kx = accounts[4]
		const ControlleruoGJES = await Controller.new(addressEpB3kx, {from: accounts[0]});
		const uintLeRNfPp = BigInt("1067")
		const addressQM1RtJK = accounts[3]
		const addressQBZ9Lz = accounts[3]
		const uintcKhh2IV = BigInt("117")
		const addressdEXBrt = accounts[4]
		const addressVLkyG3p = accounts[5]
		const uintTt0oTWT = BigInt("932")
		const addressjDE7JQt = accounts[0]
		const addressfU3o41N = accounts[5]
		const addressnt9yyxE = accounts[4]
		const addressEAupIpz = await ControlleruoGJES.yearn.call(addressQBZ9Lz, addressQM1RtJK, uintLeRNfPp, {from: accounts[0]});
		const uintenvVasK = await ControlleruoGJES.getExpectedReturn.call(addressVLkyG3p, addressdEXBrt, uintcKhh2IV, {from: accounts[4]});
		const uintFXqKEnY = await ControlleruoGJES.getExpectedReturn.call(addressfU3o41N, addressjDE7JQt, uintTt0oTWT, {from: accounts[4]});
		const addressKT5zGWP = await ControlleruoGJES.withdrawAll.call(addressnt9yyxE, {from: accounts[3]});

		await expect(ControlleruoGJES.yearn.call(addressQBZ9Lz, addressQM1RtJK, uintLeRNfPp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressAKr3Mzh = accounts[4]
		const ControlleruoGJES = await Controller.new(addressAKr3Mzh, {from: accounts[0]});
		const uintXnpy6h0 = BigInt("536")
		const address45QKCW = accounts[4]
		const uintDLE4kVW = BigInt("1067")
		const addressht6bme0 = accounts[3]
		const addressdOM5mqh = accounts[3]
		const uintQBuFJuD = BigInt("125")
		const addressA3LxKmT = accounts[4]
		const addressE9ghFJW = accounts[5]
		const uintuGeiQX = BigInt("330")
		const addresss2DyWfV = accounts[2]
		const addressp6Qbo6e = accounts[2]
		const uintw1s64gp = BigInt("932")
		const addressTdIqSJX = accounts[0]
		const addressoR1hxUB = accounts[5]
		const addressu0R3EYt = accounts[3]
		const addressA6BsJIk = "0x0000000000000000000000000000000000000001"
		const addressS4mbDN = accounts[4]
		const addressCkZcCtI = await ControlleruoGJES.earn.call(address45QKCW, uintXnpy6h0, {from: accounts[0]});
		const addressEAupIpz = await ControlleruoGJES.yearn.call(addressdOM5mqh, addressht6bme0, uintDLE4kVW, {from: accounts[0]});
		const uintenvVasK = await ControlleruoGJES.getExpectedReturn.call(addressE9ghFJW, addressA3LxKmT, uintQBuFJuD, {from: accounts[4]});
		const uintMWrH02U = await ControlleruoGJES.getExpectedReturn.call(addressp6Qbo6e, addresss2DyWfV, uintuGeiQX, {from: accounts[0]});
		const uintFXqKEnY = await ControlleruoGJES.getExpectedReturn.call(addressoR1hxUB, addressTdIqSJX, uintw1s64gp, {from: accounts[4]});
		const addressJFmLA45 = await ControlleruoGJES.approveStrategy.call(addressA6BsJIk, addressu0R3EYt, {from: accounts[0]});
		const addressKT5zGWP = await ControlleruoGJES.withdrawAll.call(addressS4mbDN, {from: accounts[3]});

		await expect(ControlleruoGJES.earn.call(address45QKCW, uintXnpy6h0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresszV7w6Pn = accounts[4]
		const ControlleruoGJES = await Controller.new(addresszV7w6Pn, {from: accounts[0]});
		const addressLi1ouEn = accounts[5]
		const uintoyk27nV = BigInt("117")
		const addressuow8hvP = accounts[4]
		const addresspE3QCbk = accounts[5]
		const addressZIvxC0i = accounts[4]
		const addressI1GIySc = await ControlleruoGJES.setGovernance.call(addressLi1ouEn, {from: accounts[1]});
		const uintenvVasK = await ControlleruoGJES.getExpectedReturn.call(addresspE3QCbk, addressuow8hvP, uintoyk27nV, {from: accounts[4]});
		const addressKT5zGWP = await ControlleruoGJES.withdrawAll.call(addressZIvxC0i, {from: accounts[3]});

		await expect(ControlleruoGJES.setGovernance.call(addressLi1ouEn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressi73qZNV = accounts[1]
		const ControllerYHCbzZM = await Controller.new(addressi73qZNV, {from: accounts[1]});
		const addresspM64N2P = accounts[0]
		const addressCRiK46y = accounts[1]
		const addressfXAfJO = accounts[4]
		const addressYzhVXGu = await ControllerYHCbzZM.setStrategist.call(addresspM64N2P, {from: accounts[1]});
		const addressVdkVHeh = await ControllerYHCbzZM.approveStrategy.call(addressfXAfJO, addressCRiK46y, {from: accounts[3]});

		await expect(ControllerYHCbzZM.approveStrategy.call(addressfXAfJO, addressCRiK46y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressWXqt9Kn = accounts[4]
		const ControlleruoGJES = await Controller.new(addressWXqt9Kn, {from: accounts[0]});
		const addressVWEhkz = accounts[3]
		const addressZ4ZwAwx = accounts[0]
		const addressZjJrq4r = accounts[5]
		const addressQoMiZ1T = accounts[2]
		const addressDMNtkRh = accounts[3]
		const addressI499ByG = await ControlleruoGJES.setOneSplit.call(addressVWEhkz, {from: accounts[4]});
		const addressF07yJqn = await ControlleruoGJES.setOneSplit.call(addressZ4ZwAwx, {from: accounts[5]});
		const addressKT5zGWP = await ControlleruoGJES.withdrawAll.call(addressZjJrq4r, {from: accounts[3]});
		const addressYq42EfF = await ControlleruoGJES.setVault.call(addressDMNtkRh, addressQoMiZ1T, {from: accounts[0]});

		await expect(ControlleruoGJES.setOneSplit.call(addressVWEhkz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address2pNucT = accounts[4]
		const ControlleruoGJES = await Controller.new(address2pNucT, {from: accounts[0]});
		const addressxmrFdDB = accounts[5]
		const addressMU2ejxj = accounts[2]
		const addressesGrAuR = accounts[3]
		const addressD2BQLa2 = accounts[1]
		const addressqyOYoTt = accounts[4]
		const addresspga46s4 = await ControlleruoGJES.inCaseStrategyTokenGetStuck.call(addressMU2ejxj, addressxmrFdDB, {from: accounts[3]});
		const addressxKGKHjO = await ControlleruoGJES.setVault.call(addressD2BQLa2, addressesGrAuR, {from: accounts[2]});
		const addressKT5zGWP = await ControlleruoGJES.withdrawAll.call(addressqyOYoTt, {from: accounts[3]});

		await expect(ControlleruoGJES.inCaseStrategyTokenGetStuck.call(addressMU2ejxj, addressxmrFdDB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressHzTmW3l = accounts[4]
		const ControlleruoGJES = await Controller.new(addressHzTmW3l, {from: accounts[0]});
		const uintKJSnXwN = BigInt("1159")
		const addressKH6VMXc = "0x0000000000000000000000000000000000000001"
		const addressWCAnVaD = accounts[5]
		const addressrR4DQ7q = accounts[3]
		const addressqESYtZA = accounts[3]
		const addresslsIZU2y = await ControlleruoGJES.inCaseTokensGetStuck.call(addressKH6VMXc, uintKJSnXwN, {from: accounts[0]});
		const addressKT5zGWP = await ControlleruoGJES.withdrawAll.call(addressWCAnVaD, {from: accounts[3]});
		const addressjYvTLuA = await ControlleruoGJES.withdrawAll.call(addressrR4DQ7q, {from: accounts[5]});
		const addresskon2Lf = await ControlleruoGJES.setStrategist.call(addressqESYtZA, {from: accounts[3]});

		await expect(ControlleruoGJES.inCaseTokensGetStuck.call(addressKH6VMXc, uintKJSnXwN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressXGqAibS = accounts[4]
		const ControlleruoGJES = await Controller.new(addressXGqAibS, {from: accounts[0]});
		const addressECFGe2t = accounts[4]
		const addressvjQAP9E = "0x0000000000000000000000000000000000000001"
		const addressDT1p8Jr = accounts[5]
		const addressI3LWAyN = await ControlleruoGJES.setVault.call(addressvjQAP9E, addressECFGe2t, {from: accounts[1]});
		const addressKT5zGWP = await ControlleruoGJES.withdrawAll.call(addressDT1p8Jr, {from: accounts[3]});

		await expect(ControlleruoGJES.setVault.call(addressvjQAP9E, addressECFGe2t, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVt6oytX = accounts[4]
		const ControlleruoGJES = await Controller.new(addressVt6oytX, {from: accounts[0]});
		const uintGzVW2SK = BigInt("1807")
		const addressRRfvcT9 = accounts[0]
		const addressgXnbOm = accounts[0]
		const addressxfCsEGF = accounts[5]
		const uintoQFdf0L = BigInt("1715")
		const addressZxTPi7a = accounts[0]
		const addresscZIVGie = await ControlleruoGJES.withdraw.call(addressRRfvcT9, uintGzVW2SK, {from: accounts[2]});
		const addressVrUNIDa = await ControlleruoGJES.setStrategist.call(addressgXnbOm, {from: accounts[3]});
		const addressKT5zGWP = await ControlleruoGJES.withdrawAll.call(addressxfCsEGF, {from: accounts[3]});
		const addressNRirWp4 = await ControlleruoGJES.earn.call(addressZxTPi7a, uintoQFdf0L, {from: accounts[3]});

		await expect(ControlleruoGJES.withdraw.call(addressRRfvcT9, uintGzVW2SK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJBd9JLr = accounts[4]
		const ControlleruoGJES = await Controller.new(addressJBd9JLr, {from: accounts[0]});
		const addresskjqqUnB = accounts[0]
		const addressYUvZd6 = accounts[5]
		const addressGofD5uO = accounts[3]
		const uinttU7pjk = BigInt("945")
		const addressVAYjt2F = accounts[2]
		const addressuQFPrqC = accounts[3]
		const addresshrStDqA = accounts[4]
		const addressE7Tr78V = accounts[2]
		const addressFG1HsRM = accounts[4]
		const addressWtpPEJg = await ControlleruoGJES.setConverter.call(addressGofD5uO, addressYUvZd6, addresskjqqUnB, {from: accounts[4]});
		const addressSOEJdl = await ControlleruoGJES.yearn.call(addressuQFPrqC, addressVAYjt2F, uinttU7pjk, {from: accounts[4]});
		const addressKvCvidp = await ControlleruoGJES.setVault.call(addressE7Tr78V, addresshrStDqA, {from: "0x0000000000000000000000000000000000000001"});
		const addressKT5zGWP = await ControlleruoGJES.withdrawAll.call(addressFG1HsRM, {from: accounts[3]});

		await expect(ControlleruoGJES.setConverter.call(addressGofD5uO, addressYUvZd6, addresskjqqUnB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressQytNj8F = accounts[4]
		const ControlleruoGJES = await Controller.new(addressQytNj8F, {from: accounts[0]});
		const addressEYm2Eml = accounts[4]
		const addressADB3kU = accounts[2]
		const addressnZ4YDPK = accounts[4]
		const addressV7m0AS = await ControlleruoGJES.setStrategy.call(addressADB3kU, addressEYm2Eml, {from: accounts[0]});
		const addressKT5zGWP = await ControlleruoGJES.withdrawAll.call(addressnZ4YDPK, {from: accounts[3]});

		await expect(ControlleruoGJES.setStrategy.call(addressADB3kU, addressEYm2Eml, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})