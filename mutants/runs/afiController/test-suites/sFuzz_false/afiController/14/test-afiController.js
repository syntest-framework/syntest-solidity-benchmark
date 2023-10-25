const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressLHaNObs = "0x0000000000000000000000000000000000000001"
		const afiControlleroBjek4M = await afiController.new(addressLHaNObs, {from: accounts[3]});
		const addresswyHglvj = accounts[0]
		const addressQuVH8T = accounts[3]
		const addressjQ6BBsR = accounts[2]
		const addressLF4mJo7 = accounts[3]
		const addressSpZP1rG = accounts[4]
		const addressCiMzDz8 = accounts[2]
		const uintz15zIU = BigInt("1439")
		const addressgZCJn08 = await afiControlleroBjek4M.inCaseStrategyTokenGetStuck.call(addressQuVH8T, addresswyHglvj, {from: accounts[3]});
		const addressu6t2KeC = await afiControlleroBjek4M.setConverter.call(addressSpZP1rG, addressLF4mJo7, addressjQ6BBsR, {from: accounts[4]});
		const addressm9VxLZb = await afiControlleroBjek4M.setStrategist.call(addressCiMzDz8, {from: accounts[3]});
		const uintGDMEa98 = await afiControlleroBjek4M.setSplit.call(uintz15zIU, {from: accounts[0]});

		await expect(afiControlleroBjek4M.inCaseStrategyTokenGetStuck.call(addressQuVH8T, addresswyHglvj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressv3ffCea = accounts[1]
		const afiControllerRRKOQIg = await afiController.new(addressv3ffCea, {from: accounts[0]});
		const addresshXUmoUj = accounts[4]
		const addresskG3bZNc = "0x0000000000000000000000000000000000000001"
		const addressOu40xBl = accounts[2]
		const addresszgwpt2f = accounts[1]
		const addressWMTABC8 = accounts[2]
		const addressQR4YSoy = "0x0000000000000000000000000000000000000001"
		const addressBETKhbg = accounts[1]
		const addressTnwIpmN = accounts[1]
		const uintlFrfaI0 = await afiControllerRRKOQIg.balanceOf.call(addresshXUmoUj, {from: accounts[4]});
		const addressjYPDNBr = await afiControllerRRKOQIg.setConverter.call(addresszgwpt2f, addressOu40xBl, addresskG3bZNc, {from: accounts[5]});
		const addressEF45AfH = await afiControllerRRKOQIg.setRewards.call(addressWMTABC8, {from: accounts[2]});
		const addressIUOrZaA = await afiControllerRRKOQIg.inCaseStrategyTokenGetStuck.call(addressBETKhbg, addressQR4YSoy, {from: accounts[5]});
		const uintB42VwSr = await afiControllerRRKOQIg.balanceOf.call(addressTnwIpmN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerRRKOQIg.balanceOf.call(addresshXUmoUj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressuL8fP7A = accounts[4]
		const afiControllerk23bxeM = await afiController.new(addressuL8fP7A, {from: accounts[1]});
		const addressuXkf5G9 = accounts[4]
		const addressoYJUJa = accounts[4]
		const addressQI4dncQ = "0x0000000000000000000000000000000000000001"
		const addresslKAghBe = accounts[2]
		const addressVpAG3a = accounts[1]
		const addressP6Vxm0 = accounts[4]
		const addressPo3RDad = accounts[0]
		const uinttNf9SeW = BigInt("1696")
		const addressrUcCmqB = accounts[0]
		const addresszm7f98Z = await afiControllerk23bxeM.revokeStrategy.call(addressoYJUJa, addressuXkf5G9, {from: accounts[4]});
		const addressWv99vLP = await afiControllerk23bxeM.inCaseStrategyTokenGetStuck.call(addresslKAghBe, addressQI4dncQ, {from: accounts[4]});
		const addresspweZY7 = await afiControllerk23bxeM.setStrategy.call(addressP6Vxm0, addressVpAG3a, {from: accounts[1]});
		const uintHkRBSTo = await afiControllerk23bxeM.balanceOf.call(addressPo3RDad, {from: accounts[4]});
		const addressoCtd9QF = await afiControllerk23bxeM.earn.call(addressrUcCmqB, uinttNf9SeW, {from: accounts[2]});

		await expect(afiControllerk23bxeM.revokeStrategy.call(addressoYJUJa, addressuXkf5G9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressw8Mqx3T = accounts[2]
		const afiControllerW7BSqbG = await afiController.new(addressw8Mqx3T, {from: accounts[2]});
		const uintVOOnLcf = BigInt("146")
		const addressbC5OiW = accounts[0]
		const addresskJyLPEa = accounts[1]
		const addressGMMcGPo = await afiControllerW7BSqbG.withdraw.call(addressbC5OiW, uintVOOnLcf, {from: accounts[4]});
		const addresschQoG1g = await afiControllerW7BSqbG.withdrawAll.call(addresskJyLPEa, {from: accounts[2]});

		await expect(afiControllerW7BSqbG.withdraw.call(addressbC5OiW, uintVOOnLcf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressQqTbH4B = accounts[2]
		const afiControllerH29QW4z = await afiController.new(addressQqTbH4B, {from: accounts[2]});
		const uinthKQIsPJ = BigInt("1205")
		const addressR8a08cU = accounts[0]
		const addressG35qLQ = accounts[5]
		const addressce8SLPS = accounts[1]
		const addressf9jipgn = accounts[2]
		const addressLY8g8If = accounts[3]
		const address06QNtV = accounts[4]
		const uintlIOXYv = await afiControllerH29QW4z.getExpectedReturn.call(addressG35qLQ, addressR8a08cU, uinthKQIsPJ, {from: accounts[5]});
		const addressT3IdD6R = await afiControllerH29QW4z.setRewards.call(addressce8SLPS, {from: accounts[2]});
		const addressVbYZjzB = await afiControllerH29QW4z.setConverter.call(address06QNtV, addressLY8g8If, addressf9jipgn, {from: accounts[2]});

		await expect(afiControllerH29QW4z.getExpectedReturn.call(addressG35qLQ, addressR8a08cU, uinthKQIsPJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLi16EyB = accounts[1]
		const afiControllerGZehw1n = await afiController.new(addressLi16EyB, {from: accounts[0]});
		const addressQRS8Y4r = accounts[1]
		const addressthmpA5Y = accounts[1]
		const addressBxqzP7e = accounts[0]
		const addresslO1z24l = accounts[2]
		const addressGaIc2sg = accounts[4]
		const uintzL4oDAR = BigInt("1951")
		const uintnPJ9Vn0 = BigInt("1018")
		const addressZ936aNx = accounts[2]
		const addressj4bjH9 = accounts[3]
		const addressyUlCH3A = accounts[4]
		const addresskDIEqex = await afiControllerGZehw1n.approveStrategy.call(addressthmpA5Y, addressQRS8Y4r, {from: accounts[0]});
		const addressDRbo7Cg = await afiControllerGZehw1n.setConverter.call(addressGaIc2sg, addresslO1z24l, addressBxqzP7e, {from: accounts[3]});
		const uintZ6Z1gpD = await afiControllerGZehw1n.setSplit.call(uintzL4oDAR, {from: accounts[5]});
		const addresshSbQuJ = await afiControllerGZehw1n.inCaseTokensGetStuck.call(addressZ936aNx, uintnPJ9Vn0, {from: "0x0000000000000000000000000000000000000001"});
		const addressT11pHcv = await afiControllerGZehw1n.setStrategy.call(addressyUlCH3A, addressj4bjH9, {from: accounts[1]});

		await expect(afiControllerGZehw1n.setConverter.call(addressGaIc2sg, addresslO1z24l, addressBxqzP7e, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressumetmmB = accounts[0]
		const afiControllersSukVaZ = await afiController.new(addressumetmmB, {from: accounts[4]});
		const addressvckFjv = accounts[0]
		const addressgGRJMG4 = accounts[4]
		const addressnx3ihQp = accounts[2]
		const addressLZcwDu6 = accounts[4]
		const addressxqGH8Ur = accounts[4]
		const addressasKAMju = accounts[1]
		const uintZ1iRmo = BigInt("1475")
		const addressxxP66xt = accounts[3]
		const addressuCinEud = accounts[5]
		const addressVzZ92pi = accounts[4]
		const addressFwC4vD = await afiControllersSukVaZ.setVault.call(addressgGRJMG4, addressvckFjv, {from: accounts[3]});
		const addresssz47Va = await afiControllersSukVaZ.setConverter.call(addressxqGH8Ur, addressLZcwDu6, addressnx3ihQp, {from: "0x0000000000000000000000000000000000000001"});
		const addressMNl3P5t = await afiControllersSukVaZ.setStrategist.call(addressasKAMju, {from: "0x0000000000000000000000000000000000000001"});
		const addressNtsRPTM = await afiControllersSukVaZ.inCaseTokensGetStuck.call(addressxxP66xt, uintZ1iRmo, {from: accounts[2]});
		const addressifhC0Yu = await afiControllersSukVaZ.setGovernance.call(addressuCinEud, {from: accounts[4]});
		const addressBiIl3yH = await afiControllersSukVaZ.setStrategist.call(addressVzZ92pi, {from: accounts[2]});

		await expect(afiControllersSukVaZ.setVault.call(addressgGRJMG4, addressvckFjv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressReA2zR1 = accounts[2]
		const afiControlleruUWhDs3 = await afiController.new(addressReA2zR1, {from: accounts[3]});
		const addressdTJuV5x = accounts[1]
		const addressnIXoAe = accounts[3]
		const addressjoLBy2M = accounts[1]
		const addressQoZWS6e = accounts[1]
		const addressB2kpCRY = accounts[3]
		const addressIZohe7T = await afiControlleruUWhDs3.setRewards.call(addressdTJuV5x, {from: accounts[4]});
		const address1juStd = await afiControlleruUWhDs3.revokeStrategy.call(addressjoLBy2M, addressnIXoAe, {from: accounts[0]});
		const addressigEu6F = await afiControlleruUWhDs3.inCaseStrategyTokenGetStuck.call(addressB2kpCRY, addressQoZWS6e, {from: accounts[0]});

		await expect(afiControlleruUWhDs3.setRewards.call(addressdTJuV5x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressr7OxZmu = accounts[2]
		const afiControllerW7BSqbG = await afiController.new(addressr7OxZmu, {from: accounts[2]});
		const addressILLEPY8 = accounts[2]
		const addressvXVQtIF = accounts[4]
		const addressk9w5IfG = accounts[5]
		const addressKE2ygF0 = accounts[3]
		const addressy1klZei = accounts[4]
		const addresschQoG1g = await afiControllerW7BSqbG.withdrawAll.call(addressILLEPY8, {from: accounts[2]});
		const addressQqCkiFR = await afiControllerW7BSqbG.inCaseStrategyTokenGetStuck.call(addressk9w5IfG, addressvXVQtIF, {from: accounts[4]});
		const addressxOWizT = await afiControllerW7BSqbG.approveStrategy.call(addressy1klZei, addressKE2ygF0, {from: accounts[0]});

		await expect(afiControllerW7BSqbG.withdrawAll.call(addressILLEPY8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIi6HxhV = accounts[1]
		const afiControllertc94MS8 = await afiController.new(addressIi6HxhV, {from: accounts[3]});
		const uintX4GcCB = BigInt("523")
		const addresszDUI6q5 = accounts[3]
		const uintelyXjvA = BigInt("1453")
		const addresshaS2Io = accounts[5]
		const uintJ1aNYFq = BigInt("1266")
		const addressuqrYPUq = accounts[3]
		const addressRLF8Nd1 = accounts[5]
		const addressiqHbXZK = accounts[4]
		const addressUVI4wd = accounts[2]
		const addressUpbKKyg = await afiControllertc94MS8.inCaseTokensGetStuck.call(addresszDUI6q5, uintX4GcCB, {from: "0x0000000000000000000000000000000000000001"});
		const uintN4dI8T4 = await afiControllertc94MS8.setSplit.call(uintelyXjvA, {from: accounts[0]});
		const addresszjjGQE8 = await afiControllertc94MS8.setRewards.call(addresshaS2Io, {from: "0x0000000000000000000000000000000000000001"});
		const addresse1f8lC0 = await afiControllertc94MS8.inCaseTokensGetStuck.call(addressuqrYPUq, uintJ1aNYFq, {from: accounts[1]});
		const addressRDaopEm = await afiControllertc94MS8.setConverter.call(addressUVI4wd, addressiqHbXZK, addressRLF8Nd1, {from: accounts[2]});

		await expect(afiControllertc94MS8.inCaseTokensGetStuck.call(addresszDUI6q5, uintX4GcCB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressAcyjq8 = accounts[3]
		const afiControllerJtLjxf = await afiController.new(addressAcyjq8, {from: "0x0000000000000000000000000000000000000001"});
		const addressBnrmacq = accounts[3]
		const addresso14W3RW = accounts[2]
		const uintW48FYjA = BigInt("703")
		const addressYaxbXTc = accounts[4]
		const uintvqGE8iy = BigInt("2027")
		const addressOavRi5 = "0x0000000000000000000000000000000000000001"
		const addressBEn5vRB = accounts[2]
		const addressgvGMBuq = accounts[1]
		const addressCSttEEV = await afiControllerJtLjxf.setVault.call(addresso14W3RW, addressBnrmacq, {from: accounts[3]});
		const addressBvFGdVk = await afiControllerJtLjxf.earn.call(addressYaxbXTc, uintW48FYjA, {from: accounts[5]});
		const addressGkD31Gp = await afiControllerJtLjxf.withdraw.call(addressOavRi5, uintvqGE8iy, {from: accounts[3]});
		const addressOBchkxK = await afiControllerJtLjxf.revokeStrategy.call(addressgvGMBuq, addressBEn5vRB, {from: accounts[0]});
	});

	it('test for afiController', async () => {
		const addresslk52QHF = accounts[2]
		const afiControllerW7BSqbG = await afiController.new(addresslk52QHF, {from: accounts[2]});
		const addressStRXd7j = accounts[4]
		const addressYk9UTjt = accounts[3]
		const addressfbbfRYu = await afiControllerW7BSqbG.setOneSplit.call(addressStRXd7j, {from: accounts[2]});
		const addresschQoG1g = await afiControllerW7BSqbG.withdrawAll.call(addressYk9UTjt, {from: accounts[2]});

		await expect(afiControllerW7BSqbG.withdrawAll.call(addressYk9UTjt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressBkMpmCJ = accounts[2]
		const afiControllerW7BSqbG = await afiController.new(addressBkMpmCJ, {from: accounts[2]});
		const addresswoEQQnq = accounts[1]
		const addressPb8kxeb = accounts[4]
		const addressROarTE1 = accounts[3]
		const addressR5LNsE = accounts[1]
		const uint1IEj6A = BigInt("1626")
		const addressW5u87iU = accounts[0]
		const addressbm3APv4 = accounts[1]
		const uintAU1t1l = BigInt("1906")
		const addresss1Lzts1 = accounts[0]
		const addressI7foAnt = accounts[2]
		const addressLg1APWj = await afiControllerW7BSqbG.setStrategist.call(addresswoEQQnq, {from: accounts[0]});
		const addresshrSzLv = await afiControllerW7BSqbG.setConverter.call(addressR5LNsE, addressROarTE1, addressPb8kxeb, {from: accounts[0]});
		const addressz77SObP = await afiControllerW7BSqbG.yearn.call(addressbm3APv4, addressW5u87iU, uint1IEj6A, {from: accounts[3]});
		const addressvHj7Z43 = await afiControllerW7BSqbG.earn.call(addresss1Lzts1, uintAU1t1l, {from: accounts[1]});
		const addresschQoG1g = await afiControllerW7BSqbG.withdrawAll.call(addressI7foAnt, {from: accounts[2]});

		await expect(afiControllerW7BSqbG.setStrategist.call(addresswoEQQnq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLozohVI = accounts[2]
		const afiControllerW7BSqbG = await afiController.new(addressLozohVI, {from: accounts[2]});
		const uintic0Grek = BigInt("1184")
		const addressFPUm4s = accounts[3]
		const uintxH4S1C8 = await afiControllerW7BSqbG.setSplit.call(uintic0Grek, {from: accounts[2]});
		const addresschQoG1g = await afiControllerW7BSqbG.withdrawAll.call(addressFPUm4s, {from: accounts[2]});

		await expect(afiControllerW7BSqbG.withdrawAll.call(addressFPUm4s, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressuBdwF1 = accounts[2]
		const afiControllerW7BSqbG = await afiController.new(addressuBdwF1, {from: accounts[2]});
		const addressADIRQjW = accounts[4]
		const addressKiTyLZJ = accounts[3]
		const addressZZRyyOC = accounts[3]
		const addressGFAwx2 = await afiControllerW7BSqbG.setStrategy.call(addressKiTyLZJ, addressADIRQjW, {from: accounts[1]});
		const addresschQoG1g = await afiControllerW7BSqbG.withdrawAll.call(addressZZRyyOC, {from: accounts[2]});

		await expect(afiControllerW7BSqbG.setStrategy.call(addressKiTyLZJ, addressADIRQjW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresswG0vsg9 = accounts[2]
		const afiController8vPClL = await afiController.new(addresswG0vsg9, {from: accounts[0]});
		const addresslrDKEgE = accounts[3]
		const addressgYtTxa1 = accounts[2]
		const addressPhG5pNw = accounts[1]
		const addressfGesYFe = accounts[0]
		const addressS6hjSN = "0x0000000000000000000000000000000000000001"
		const addressW2pHCoc = await afiController8vPClL.setStrategy.call(addressgYtTxa1, addresslrDKEgE, {from: accounts[0]});
		const addressaNfF44j = await afiController8vPClL.setStrategist.call(addressPhG5pNw, {from: accounts[1]});
		const addressi4a00iV = await afiController8vPClL.approveStrategy.call(addressS6hjSN, addressfGesYFe, {from: accounts[0]});

		await expect(afiController8vPClL.setStrategy.call(addressgYtTxa1, addresslrDKEgE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressuJgErKb = accounts[2]
		const afiControllerW7BSqbG = await afiController.new(addressuJgErKb, {from: accounts[2]});
		const uintXAZUXOA = BigInt("1349")
		const addressFdDQKFJ = accounts[2]
		const addressylh4Wlz = accounts[4]
		const addressT6o8OAZ = accounts[2]
		const uinttpdAkHD = BigInt("1784")
		const addressXdCThNw = accounts[1]
		const addressYkByKWt = accounts[1]
		const addressf6g0qgM = await afiControllerW7BSqbG.yearn.call(addressylh4Wlz, addressFdDQKFJ, uintXAZUXOA, {from: accounts[1]});
		const addresschQoG1g = await afiControllerW7BSqbG.withdrawAll.call(addressT6o8OAZ, {from: accounts[2]});
		const uinto6BzHwx = await afiControllerW7BSqbG.getExpectedReturn.call(addressYkByKWt, addressXdCThNw, uinttpdAkHD, {from: accounts[1]});

		await expect(afiControllerW7BSqbG.yearn.call(addressylh4Wlz, addressFdDQKFJ, uintXAZUXOA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressoO2DuP = accounts[2]
		const afiControllerW7BSqbG = await afiController.new(addressoO2DuP, {from: accounts[2]});
		const uintscY4ivj = BigInt("1226")
		const addressm0EIW6d = accounts[3]
		const addressAXw3mFB = accounts[3]
		const addressCr0ffPj = await afiControllerW7BSqbG.earn.call(addressm0EIW6d, uintscY4ivj, {from: "0x0000000000000000000000000000000000000001"});
		const addresschQoG1g = await afiControllerW7BSqbG.withdrawAll.call(addressAXw3mFB, {from: accounts[2]});

		await expect(afiControllerW7BSqbG.earn.call(addressm0EIW6d, uintscY4ivj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressyj1gSFF = accounts[1]
		const afiControllerCASHxBt = await afiController.new(addressyj1gSFF, {from: accounts[2]});
		const addresszpAKVLi = accounts[4]
		const uintILz72y = BigInt("26")
		const addressfaEUdYI = accounts[1]
		const addressAhBJCXB = "0x0000000000000000000000000000000000000001"
		const addressNghWA8X = accounts[0]
		const address5T26JU = accounts[0]
		const uintfUg92Gl = BigInt("199")
		const addressFzOHkug = accounts[1]
		const addressFJMp7k1 = accounts[4]
		const addressl1ULxxW = accounts[1]
		const addressxJY2G1 = await afiControllerCASHxBt.setGovernance.call(addresszpAKVLi, {from: accounts[4]});
		const addressvmKqrN = await afiControllerCASHxBt.yearn.call(addressAhBJCXB, addressfaEUdYI, uintILz72y, {from: accounts[4]});
		const addresscrRZVtL = await afiControllerCASHxBt.setStrategy.call(address5T26JU, addressNghWA8X, {from: accounts[0]});
		const uinttKqtVDI = await afiControllerCASHxBt.getExpectedReturn.call(addressFJMp7k1, addressFzOHkug, uintfUg92Gl, {from: accounts[5]});
		const addressKTV050U = await afiControllerCASHxBt.setGovernance.call(addressl1ULxxW, {from: accounts[1]});

		await expect(afiControllerCASHxBt.setGovernance.call(addresszpAKVLi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressrfAjwAi = accounts[2]
		const afiControllerW7BSqbG = await afiController.new(addressrfAjwAi, {from: accounts[2]});
		const uintbRbsa3S = BigInt("816")
		const addressGGwrenz = accounts[2]
		const addressuN2WWhR = accounts[4]
		const addressgAn6pH8 = await afiControllerW7BSqbG.inCaseTokensGetStuck.call(addressGGwrenz, uintbRbsa3S, {from: accounts[2]});
		const addresschQoG1g = await afiControllerW7BSqbG.withdrawAll.call(addressuN2WWhR, {from: accounts[2]});

		await expect(afiControllerW7BSqbG.inCaseTokensGetStuck.call(addressGGwrenz, uintbRbsa3S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})