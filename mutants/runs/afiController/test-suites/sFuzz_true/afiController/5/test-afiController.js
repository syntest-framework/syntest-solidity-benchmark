const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressxf4n4F = accounts[4]
		const afiControllerRT0npf9 = await afiController.new(addressxf4n4F, {from: accounts[0]});
		const addresschzXZFr = accounts[5]
		const uintkA1ul7a = BigInt("1419")
		const addressB0HNhV = accounts[0]
		const addressCRGEyQv = accounts[3]
		const uintMyswS71 = BigInt("416")
		const addressGuxVfMF = accounts[0]
		const addresskPeID8O = await afiControllerRT0npf9.withdrawAll.call(addresschzXZFr, {from: accounts[4]});
		const addressEBbQAuB = await afiControllerRT0npf9.earn.call(addressB0HNhV, uintkA1ul7a, {from: accounts[1]});
		const uintFmL1KjU = await afiControllerRT0npf9.balanceOf.call(addressCRGEyQv, {from: accounts[2]});
		const addressjrML1Gk = await afiControllerRT0npf9.earn.call(addressGuxVfMF, uintMyswS71, {from: accounts[3]});

		await expect(afiControllerRT0npf9.withdrawAll.call(addresschzXZFr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqmTy4bj = accounts[1]
		const afiControllertX9pe2E = await afiController.new(addressqmTy4bj, {from: accounts[2]});
		const addressuhC2YPV = accounts[5]
		const addressD5Oko3s = accounts[0]
		const addressCduFDId = accounts[4]
		const uintXozejAe = BigInt("1347")
		const addressVxLtwfA = accounts[0]
		const addresshkErbC1 = await afiControllertX9pe2E.setGovernance.call(addressuhC2YPV, {from: accounts[2]});
		const addressq74nnaW = await afiControllertX9pe2E.approveStrategy.call(addressCduFDId, addressD5Oko3s, {from: accounts[2]});
		const addresshOXclmV = await afiControllertX9pe2E.earn.call(addressVxLtwfA, uintXozejAe, {from: accounts[4]});

		await expect(afiControllertX9pe2E.earn.call(addressVxLtwfA, uintXozejAe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressTI88y3M = accounts[3]
		const afiControllerwH0xzK4 = await afiController.new(addressTI88y3M, {from: accounts[3]});
		const uintzojfW8T = BigInt("1256")
		const addresskNrXFaK = accounts[2]
		const addressoX8a1qT = accounts[0]
		const addressY4AEwHj = accounts[3]
		const addressJTDspgF = accounts[3]
		const addressTq4g3kP = accounts[1]
		const addressLwfAzxa = accounts[0]
		const addressInr6FJb = "0x0000000000000000000000000000000000000001"
		const addressvbdPkjO = await afiControllerwH0xzK4.inCaseTokensGetStuck.call(addresskNrXFaK, uintzojfW8T, {from: accounts[3]});
		const addressHhsTUSv = await afiControllerwH0xzK4.revokeStrategy.call(addressY4AEwHj, addressoX8a1qT, {from: accounts[0]});
		const addressuw3A9yg = await afiControllerwH0xzK4.approveStrategy.call(addressTq4g3kP, addressJTDspgF, {from: accounts[3]});
		const addresscokAp4 = await afiControllerwH0xzK4.approveStrategy.call(addressInr6FJb, addressLwfAzxa, {from: accounts[5]});

		await expect(afiControllerwH0xzK4.inCaseTokensGetStuck.call(addresskNrXFaK, uintzojfW8T, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressBzRmsmv = accounts[3]
		const afiControllerqYQ8wzo = await afiController.new(addressBzRmsmv, {from: accounts[1]});
		const addressiyIZZa = accounts[0]
		const addressVkRDCFc = accounts[2]
		const uintfLk8ieL = BigInt("744")
		const addressaqcmmB2 = accounts[1]
		const addresseYDw0Dz = accounts[2]
		const address0y8trO = accounts[3]
		const addresskgW3fO0 = accounts[2]
		const addressB7jAda2 = accounts[4]
		const addressxcQsjHv = accounts[4]
		const addresswnjju5B = accounts[4]
		const addressDilOOoM = await afiControllerqYQ8wzo.approveStrategy.call(addressVkRDCFc, addressiyIZZa, {from: accounts[4]});
		const addressB7iP0a6 = await afiControllerqYQ8wzo.earn.call(addressaqcmmB2, uintfLk8ieL, {from: accounts[3]});
		const addresspaw79pV = await afiControllerqYQ8wzo.withdrawAll.call(addresseYDw0Dz, {from: accounts[4]});
		const uintUocpz4r = await afiControllerqYQ8wzo.balanceOf.call(address0y8trO, {from: accounts[3]});
		const addressge2uOC = await afiControllerqYQ8wzo.setConverter.call(addressxcQsjHv, addressB7jAda2, addresskgW3fO0, {from: accounts[1]});
		const addressEyZCRl3 = await afiControllerqYQ8wzo.setOneSplit.call(addresswnjju5B, {from: accounts[3]});

		await expect(afiControllerqYQ8wzo.approveStrategy.call(addressVkRDCFc, addressiyIZZa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressFXzIVf = accounts[4]
		const afiControllerHuORLHC = await afiController.new(addressFXzIVf, {from: accounts[2]});
		const addresscO9nWhn = accounts[1]
		const uintOPmJPsD = BigInt("856")
		const uintPUSEto = BigInt("495")
		const addressy3xZd6 = accounts[3]
		const addresswylLlBm = accounts[5]
		const addressXGYXmPR = accounts[2]
		const uintPX6KHYJ = await afiControllerHuORLHC.balanceOf.call(addresscO9nWhn, {from: accounts[2]});
		const uintCn81zhf = await afiControllerHuORLHC.setSplit.call(uintOPmJPsD, {from: accounts[2]});
		const uintFTTZlap = await afiControllerHuORLHC.setSplit.call(uintPUSEto, {from: accounts[0]});
		const address2Dleyb = await afiControllerHuORLHC.setConverter.call(addressXGYXmPR, addresswylLlBm, addressy3xZd6, {from: accounts[2]});

		await expect(afiControllerHuORLHC.balanceOf.call(addresscO9nWhn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressPkQDWwr = accounts[1]
		const afiControllerMo5VMuj = await afiController.new(addressPkQDWwr, {from: accounts[4]});
		const uints8nR4k = BigInt("1455")
		const addressEPfcnnZ = accounts[4]
		const addressBFk1PGH = accounts[4]
		const addressRjfFi86 = "0x0000000000000000000000000000000000000001"
		const addresspDUtV0k = accounts[5]
		const addressuIEhjTo = accounts[0]
		const uintDM550tV = BigInt("1608")
		const addressJSCE2LT = accounts[4]
		const addressxLN7p38 = await afiControllerMo5VMuj.yearn.call(addressBFk1PGH, addressEPfcnnZ, uints8nR4k, {from: accounts[2]});
		const addressFa3NvCa = await afiControllerMo5VMuj.setStrategy.call(addresspDUtV0k, addressRjfFi86, {from: accounts[3]});
		const addressza20y7G = await afiControllerMo5VMuj.setGovernance.call(addressuIEhjTo, {from: accounts[5]});
		const addressW5yGLmZ = await afiControllerMo5VMuj.inCaseTokensGetStuck.call(addressJSCE2LT, uintDM550tV, {from: accounts[0]});

		await expect(afiControllerMo5VMuj.yearn.call(addressBFk1PGH, addressEPfcnnZ, uints8nR4k, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSdI1k2S = accounts[2]
		const afiControllervkvZi0g = await afiController.new(addressSdI1k2S, {from: accounts[4]});
		const addressUsJGM2Q = "0x0000000000000000000000000000000000000001"
		const addressNSuCl0O = accounts[0]
		const addressKLwajIn = accounts[4]
		const addressi9uJqE = accounts[1]
		const addressAy6WhG = accounts[4]
		const addressKsMsOw2 = await afiControllervkvZi0g.revokeStrategy.call(addressNSuCl0O, addressUsJGM2Q, {from: accounts[4]});
		const addresshIYWjJd = await afiControllervkvZi0g.setVault.call(addressi9uJqE, addressKLwajIn, {from: accounts[0]});
		const addressMoaalyN = await afiControllervkvZi0g.withdrawAll.call(addressAy6WhG, {from: accounts[0]});

		await expect(afiControllervkvZi0g.setVault.call(addressi9uJqE, addressKLwajIn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressksXl2cG = accounts[2]
		const afiControllervkvZi0g = await afiController.new(addressksXl2cG, {from: accounts[4]});
		const uintVjMnB5 = BigInt("1441")
		const addressWK4fBRV = accounts[2]
		const addresscsNsjIF = accounts[2]
		const addressEejSEn4 = accounts[4]
		const uintvYgtVxZ = await afiControllervkvZi0g.setSplit.call(uintVjMnB5, {from: accounts[4]});
		const addressGTk0hJ0 = await afiControllervkvZi0g.revokeStrategy.call(addresscsNsjIF, addressWK4fBRV, {from: accounts[0]});
		const addressMoaalyN = await afiControllervkvZi0g.withdrawAll.call(addressEejSEn4, {from: accounts[0]});

		await expect(afiControllervkvZi0g.revokeStrategy.call(addresscsNsjIF, addressWK4fBRV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressmS9Mqtc = accounts[2]
		const afiControllervkvZi0g = await afiController.new(addressmS9Mqtc, {from: accounts[4]});
		const addressQICRTzl = accounts[3]
		const addressGebbzJT = accounts[3]
		const addressp3B44A6 = accounts[4]
		const addressqaQ0hhk = accounts[4]
		const addressf3T1927 = await afiControllervkvZi0g.inCaseStrategyTokenGetStuck.call(addressGebbzJT, addressQICRTzl, {from: accounts[2]});
		const uint5fk5I5 = await afiControllervkvZi0g.balanceOf.call(addressp3B44A6, {from: "0x0000000000000000000000000000000000000001"});
		const addressMoaalyN = await afiControllervkvZi0g.withdrawAll.call(addressqaQ0hhk, {from: accounts[0]});

		await expect(afiControllervkvZi0g.inCaseStrategyTokenGetStuck.call(addressGebbzJT, addressQICRTzl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressRA3JQb = accounts[2]
		const afiControllervkvZi0g = await afiController.new(addressRA3JQb, {from: accounts[4]});
		const uintcND3QNI = BigInt("300")
		const addressVFzHQQL = accounts[4]
		const addressmAAXd5P = accounts[0]
		const addresstVbnI6R = accounts[3]
		const uintjfNlCuV = await afiControllervkvZi0g.getExpectedReturn.call(addressmAAXd5P, addressVFzHQQL, uintcND3QNI, {from: "0x0000000000000000000000000000000000000001"});
		const addressMoaalyN = await afiControllervkvZi0g.withdrawAll.call(addresstVbnI6R, {from: accounts[0]});

		await expect(afiControllervkvZi0g.getExpectedReturn.call(addressmAAXd5P, addressVFzHQQL, uintcND3QNI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressFwknKQN = accounts[2]
		const afiControllervkvZi0g = await afiController.new(addressFwknKQN, {from: accounts[4]});
		const addressMXlRKPE = accounts[3]
		const addressYdN8UZN = accounts[3]
		const addressUJIHTlo = accounts[4]
		const uintus896nN = BigInt("273")
		const addressPaDGwWk = accounts[1]
		const addressWC6Vuxt = await afiControllervkvZi0g.setStrategy.call(addressYdN8UZN, addressMXlRKPE, {from: accounts[4]});
		const addressMoaalyN = await afiControllervkvZi0g.withdrawAll.call(addressUJIHTlo, {from: accounts[0]});
		const addressGlg7Np4 = await afiControllervkvZi0g.inCaseTokensGetStuck.call(addressPaDGwWk, uintus896nN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllervkvZi0g.setStrategy.call(addressYdN8UZN, addressMXlRKPE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLsMNuEl = accounts[2]
		const afiControllervkvZi0g = await afiController.new(addressLsMNuEl, {from: accounts[4]});
		const uintaFg4H7x = BigInt("81")
		const addresspvQJ3XK = accounts[1]
		const addressHRbU9YG = accounts[5]
		const uintb4E8JSA = BigInt("1900")
		const addressuKQJqKV = accounts[0]
		const addressoQbIlwC = accounts[1]
		const addressERmeWoT = accounts[3]
		const addressLfKr9CR = await afiControllervkvZi0g.yearn.call(addressHRbU9YG, addresspvQJ3XK, uintaFg4H7x, {from: accounts[4]});
		const uintfLoHoVH = await afiControllervkvZi0g.getExpectedReturn.call(addressoQbIlwC, addressuKQJqKV, uintb4E8JSA, {from: accounts[1]});
		const addressMoaalyN = await afiControllervkvZi0g.withdrawAll.call(addressERmeWoT, {from: accounts[0]});

		await expect(afiControllervkvZi0g.yearn.call(addressHRbU9YG, addresspvQJ3XK, uintaFg4H7x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSKSsz1 = accounts[1]
		const afiControllerSoqlpX8 = await afiController.new(addressSKSsz1, {from: accounts[3]});
		const addressIaWzpv = accounts[0]
		const addressrdshSsw = accounts[1]
		const addressOWnkezO = accounts[1]
		const addressXmCzNXw = accounts[2]
		const addressd0uarh7 = await afiControllerSoqlpX8.setConverter.call(addressOWnkezO, addressrdshSsw, addressIaWzpv, {from: accounts[0]});
		const addressz7eHjnm = await afiControllerSoqlpX8.setStrategist.call(addressXmCzNXw, {from: accounts[1]});

		await expect(afiControllerSoqlpX8.setConverter.call(addressOWnkezO, addressrdshSsw, addressIaWzpv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address3QR2Wq = accounts[2]
		const afiControllervkvZi0g = await afiController.new(address3QR2Wq, {from: accounts[4]});
		const addresserWRgy = accounts[3]
		const addressltYrjhx = accounts[0]
		const addressbTNBrtc = "0x0000000000000000000000000000000000000001"
		const addressStXNsH9 = accounts[3]
		const addressi0E9vJR = accounts[2]
		const addresstXRvq93 = accounts[3]
		const addressxOSFC2V = accounts[2]
		const addressnrPOWl = accounts[2]
		const address18k1Y2 = await afiControllervkvZi0g.setStrategist.call(addresserWRgy, {from: "0x0000000000000000000000000000000000000001"});
		const addressvrpMxLV = await afiControllervkvZi0g.inCaseStrategyTokenGetStuck.call(addressbTNBrtc, addressltYrjhx, {from: accounts[1]});
		const addresswVgPf6z = await afiControllervkvZi0g.setVault.call(addressi0E9vJR, addressStXNsH9, {from: accounts[1]});
		const addressMoaalyN = await afiControllervkvZi0g.withdrawAll.call(addresstXRvq93, {from: accounts[0]});
		const addressGrLPSs8 = await afiControllervkvZi0g.approveStrategy.call(addressnrPOWl, addressxOSFC2V, {from: accounts[1]});

		await expect(afiControllervkvZi0g.setStrategist.call(addresserWRgy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresst0Fd5P2 = accounts[2]
		const afiControllervkvZi0g = await afiController.new(addresst0Fd5P2, {from: accounts[4]});
		const uintLsPa1vq = BigInt("792")
		const addressg53O0PI = accounts[5]
		const uintObxznuH = BigInt("849")
		const addressvEEKKAa = accounts[2]
		const addressYXoIReX = accounts[1]
		const addressSf5Rtj = accounts[1]
		const addressWK8bUX = accounts[3]
		const addressoelStSF = await afiControllervkvZi0g.withdraw.call(addressg53O0PI, uintLsPa1vq, {from: accounts[5]});
		const addressvtIYWP1 = await afiControllervkvZi0g.inCaseTokensGetStuck.call(addressvEEKKAa, uintObxznuH, {from: accounts[1]});
		const addressPDeT5Jg = await afiControllervkvZi0g.approveStrategy.call(addressSf5Rtj, addressYXoIReX, {from: accounts[1]});
		const addressMoaalyN = await afiControllervkvZi0g.withdrawAll.call(addressWK8bUX, {from: accounts[0]});

		await expect(afiControllervkvZi0g.withdraw.call(addressg53O0PI, uintLsPa1vq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressnSfybL1 = accounts[4]
		const afiControllerPyzIsc = await afiController.new(addressnSfybL1, {from: accounts[3]});
		const addressjL0U09K = accounts[3]
		const addressCziMTq6 = accounts[4]
		const uintYMfTOGO = BigInt("817")
		const addresssjSv5v = accounts[2]
		const addressCbfFgu = accounts[0]
		const addressS0OxrUK = "0x0000000000000000000000000000000000000001"
		const addressWyhrmMR = accounts[2]
		const addressHp6uO64 = accounts[0]
		const addressqm6h0Rn = accounts[1]
		const addressKK0DMT = accounts[4]
		const addressADN7zRi = await afiControllerPyzIsc.setVault.call(addressCziMTq6, addressjL0U09K, {from: accounts[3]});
		const addresscLoPg7m = await afiControllerPyzIsc.earn.call(addresssjSv5v, uintYMfTOGO, {from: accounts[0]});
		const addressEfgpBWI = await afiControllerPyzIsc.withdrawAll.call(addressCbfFgu, {from: accounts[4]});
		const addressVbCHwr = await afiControllerPyzIsc.setGovernance.call(addressS0OxrUK, {from: accounts[5]});
		const addressVMghAQg = await afiControllerPyzIsc.setConverter.call(addressqm6h0Rn, addressHp6uO64, addressWyhrmMR, {from: accounts[0]});
		const addressFtLx7EV = await afiControllerPyzIsc.setStrategist.call(addressKK0DMT, {from: accounts[0]});

		await expect(afiControllerPyzIsc.earn.call(addresssjSv5v, uintYMfTOGO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresseocxhl4 = accounts[2]
		const afiControllervkvZi0g = await afiController.new(addresseocxhl4, {from: accounts[4]});
		const address3klTYD = accounts[3]
		const uintUca5MSc = BigInt("1760")
		const addressx6EQcWr = accounts[3]
		const addressvaP3v2m = accounts[2]
		const addressPIqG8HN = accounts[4]
		const addressZQYZb96 = accounts[4]
		const addressk38y56L = await afiControllervkvZi0g.setStrategist.call(address3klTYD, {from: accounts[4]});
		const addressNYOcL7A = await afiControllervkvZi0g.yearn.call(addressvaP3v2m, addressx6EQcWr, uintUca5MSc, {from: accounts[4]});
		const addressAJXplpH = await afiControllervkvZi0g.setStrategist.call(addressPIqG8HN, {from: accounts[5]});
		const addressMoaalyN = await afiControllervkvZi0g.withdrawAll.call(addressZQYZb96, {from: accounts[0]});

		await expect(afiControllervkvZi0g.yearn.call(addressvaP3v2m, addressx6EQcWr, uintUca5MSc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressm77HV20 = accounts[2]
		const afiControllervkvZi0g = await afiController.new(addressm77HV20, {from: accounts[4]});
		const addressZu3Bnkx = accounts[3]
		const addressFbShKBL = accounts[1]
		const addressd6cQrdK = accounts[5]
		const addressrC9vxxC = accounts[4]
		const addressQUYrnOM = await afiControllervkvZi0g.setConverter.call(addressd6cQrdK, addressFbShKBL, addressZu3Bnkx, {from: accounts[4]});
		const addressMoaalyN = await afiControllervkvZi0g.withdrawAll.call(addressrC9vxxC, {from: accounts[0]});

		await expect(afiControllervkvZi0g.withdrawAll.call(addressrC9vxxC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressBL4q53b = accounts[4]
		const afiControlleriVrU6M7 = await afiController.new(addressBL4q53b, {from: "0x0000000000000000000000000000000000000001"});
		const addressiWXxnBz = accounts[4]
		const addressZiT3rN1 = accounts[0]
		const addressM3abdMy = accounts[4]
		const uintsudqX82 = BigInt("599")
		const addressNUVeRUb = accounts[1]
		const addresspj6L3fQ = accounts[3]
		const addressplGJtuh = accounts[1]
		const uintLP1FIxg = await afiControlleriVrU6M7.balanceOf.call(addressiWXxnBz, {from: accounts[0]});
		const addressjp1AyMu = await afiControlleriVrU6M7.setStrategy.call(addressM3abdMy, addressZiT3rN1, {from: accounts[4]});
		const uintXNcKFd = await afiControlleriVrU6M7.getExpectedReturn.call(addresspj6L3fQ, addressNUVeRUb, uintsudqX82, {from: accounts[2]});
		const addressu7S6nb = await afiControlleriVrU6M7.setRewards.call(addressplGJtuh, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for afiController', async () => {
		const addresshbnltPu = accounts[2]
		const afiControllervkvZi0g = await afiController.new(addresshbnltPu, {from: accounts[4]});
		const addresslU8xB5d = accounts[0]
		const addresskNRq2o = accounts[5]
		const addressSrSM3qr = accounts[3]
		const addressGzMLxVS = await afiControllervkvZi0g.inCaseStrategyTokenGetStuck.call(addresskNRq2o, addresslU8xB5d, {from: accounts[4]});
		const addressMoaalyN = await afiControllervkvZi0g.withdrawAll.call(addressSrSM3qr, {from: accounts[0]});

		await expect(afiControllervkvZi0g.inCaseStrategyTokenGetStuck.call(addresskNRq2o, addresslU8xB5d, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressaUI3Rpq = accounts[2]
		const afiControllervkvZi0g = await afiController.new(addressaUI3Rpq, {from: accounts[4]});
		const addresshA60Abc = accounts[0]
		const addressiLfM8lI = accounts[3]
		const addressIShkHfx = await afiControllervkvZi0g.withdrawAll.call(addresshA60Abc, {from: accounts[4]});
		const addressMoaalyN = await afiControllervkvZi0g.withdrawAll.call(addressiLfM8lI, {from: accounts[0]});

		await expect(afiControllervkvZi0g.withdrawAll.call(addresshA60Abc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressVrEw0Aw = accounts[2]
		const afiControllervkvZi0g = await afiController.new(addressVrEw0Aw, {from: accounts[4]});
		const addressiWa1XiJ = accounts[3]
		const uintJr2YjzP = BigInt("1557")
		const addressi16vonw = accounts[3]
		const addressdYIXG04 = accounts[4]
		const addressVqoyjtw = accounts[4]
		const addressTkNTsW6 = await afiControllervkvZi0g.setOneSplit.call(addressiWa1XiJ, {from: accounts[3]});
		const addressGOneziS = await afiControllervkvZi0g.yearn.call(addressdYIXG04, addressi16vonw, uintJr2YjzP, {from: accounts[2]});
		const addressMoaalyN = await afiControllervkvZi0g.withdrawAll.call(addressVqoyjtw, {from: accounts[0]});

		await expect(afiControllervkvZi0g.setOneSplit.call(addressiWa1XiJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresslFsJt4I = accounts[2]
		const afiControllervkvZi0g = await afiController.new(addresslFsJt4I, {from: accounts[4]});
		const addresskgrWMiy = accounts[3]
		const uintl8J5xxF = BigInt("804")
		const address7EbHZo = accounts[5]
		const addressWjKmoqr = accounts[2]
		const addressdbKDxG3 = accounts[3]
		const addressXp8Nq63 = await afiControllervkvZi0g.setRewards.call(addresskgrWMiy, {from: accounts[4]});
		const addressoelStSF = await afiControllervkvZi0g.withdraw.call(address7EbHZo, uintl8J5xxF, {from: accounts[5]});
		const addresskUZqFCT = await afiControllervkvZi0g.revokeStrategy.call(addressdbKDxG3, addressWjKmoqr, {from: accounts[3]});

		await expect(afiControllervkvZi0g.withdraw.call(address7EbHZo, uintl8J5xxF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressc3RrVYl = accounts[2]
		const afiControllervkvZi0g = await afiController.new(addressc3RrVYl, {from: accounts[4]});
		const addressdMZWtPj = accounts[2]
		const addressNpi7ZbD = accounts[5]
		const addresswQ3xifW = accounts[4]
		const addressjTVWyrl = await afiControllervkvZi0g.setOneSplit.call(addressdMZWtPj, {from: accounts[4]});
		const addressC0WWDQQ = await afiControllervkvZi0g.withdrawAll.call(addressNpi7ZbD, {from: accounts[4]});
		const addressMoaalyN = await afiControllervkvZi0g.withdrawAll.call(addresswQ3xifW, {from: accounts[0]});

		await expect(afiControllervkvZi0g.withdrawAll.call(addressNpi7ZbD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})