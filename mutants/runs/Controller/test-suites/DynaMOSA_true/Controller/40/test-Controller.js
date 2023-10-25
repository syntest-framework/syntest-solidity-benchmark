const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressegufGY = accounts[2]
		const ControlleruoEm5Kz = await Controller.new(addressegufGY, {from: accounts[4]});
		const uinteiBObm4 = BigInt("1649")
		const uintVw0bIWo = BigInt("2034")
		const addressWvM3bGz = accounts[1]
		const addressqcLnWL = accounts[0]
		const addressdPnGW4X = accounts[2]
		const addressRMJqo9g = accounts[0]
		const uintJBrTFT6 = BigInt("178")
		const addressvhwohDQ = accounts[3]
		const uintZENjeNL = await ControlleruoEm5Kz.setSplit.call(uinteiBObm4, {from: accounts[1]});
		const addressBic89nL = await ControlleruoEm5Kz.earn.call(addressWvM3bGz, uintVw0bIWo, {from: accounts[5]});
		const addressTUktdFJ = await ControlleruoEm5Kz.setConverter.call(addressRMJqo9g, addressdPnGW4X, addressqcLnWL, {from: accounts[1]});
		const addressG3FKM3g = await ControlleruoEm5Kz.withdraw.call(addressvhwohDQ, uintJBrTFT6, {from: accounts[2]});

		await expect(ControlleruoEm5Kz.setSplit.call(uinteiBObm4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressB1obx4q = accounts[2]
		const ControllerTT8GLpG = await Controller.new(addressB1obx4q, {from: accounts[2]});
		const addressj11Xh9J = accounts[5]
		const addressevcJrF6 = accounts[2]
		const addressBiIGx9T = accounts[2]
		const addressM2O5x0Z = accounts[4]
		const uintMagsM8 = BigInt("1022")
		const addressxJf44PJ = accounts[2]
		const addressBAwcB1p = accounts[0]
		const addresswuH4hRF = "0x0000000000000000000000000000000000000001"
		const addressIHOEJ70 = accounts[2]
		const uintvhGy9Qv = BigInt("1508")
		const addressnhPwqW9 = accounts[1]
		const uintLrlfWrA = await ControllerTT8GLpG.balanceOf.call(addressj11Xh9J, {from: accounts[2]});
		const addressYvIeI0b = await ControllerTT8GLpG.setConverter.call(addressM2O5x0Z, addressBiIGx9T, addressevcJrF6, {from: accounts[1]});
		const addressjZ9EoXc = await ControllerTT8GLpG.yearn.call(addressBAwcB1p, addressxJf44PJ, uintMagsM8, {from: accounts[1]});
		const addressD1n3fLk = await ControllerTT8GLpG.setStrategist.call(addresswuH4hRF, {from: "0x0000000000000000000000000000000000000001"});
		const addressgTT74ZG = await ControllerTT8GLpG.setOneSplit.call(addressIHOEJ70, {from: accounts[4]});
		const addressOI2qJCC = await ControllerTT8GLpG.earn.call(addressnhPwqW9, uintvhGy9Qv, {from: accounts[0]});

		await expect(ControllerTT8GLpG.balanceOf.call(addressj11Xh9J, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresssZWGQDL = accounts[3]
		const Controllern8d1Xq3 = await Controller.new(addresssZWGQDL, {from: accounts[0]});
		const addresspau4spS = accounts[2]
		const addressBXv58hn = accounts[0]
		const uintKHVnOrR = BigInt("830")
		const addressrCgMQKI = accounts[0]
		const addressdBe7zkV = accounts[3]
		const addressOo50dRJ = accounts[5]
		const addressc0HGZLs = accounts[2]
		const addressLatOWoK = accounts[1]
		const addressYnHj0r0 = "0x0000000000000000000000000000000000000001"
		const addressrhhEe8R = await Controllern8d1Xq3.setVault.call(addressBXv58hn, addresspau4spS, {from: accounts[3]});
		const addressTmYq9jF = await Controllern8d1Xq3.earn.call(addressrCgMQKI, uintKHVnOrR, {from: accounts[2]});
		const addresshx03JVv = await Controllern8d1Xq3.setStrategist.call(addressdBe7zkV, {from: accounts[4]});
		const addressEY9c2uE = await Controllern8d1Xq3.revokeStrategy.call(addressc0HGZLs, addressOo50dRJ, {from: accounts[5]});
		const addressLx4g18J = await Controllern8d1Xq3.revokeStrategy.call(addressYnHj0r0, addressLatOWoK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllern8d1Xq3.setVault.call(addressBXv58hn, addresspau4spS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressihWKmzN = accounts[5]
		const ControllerMX6D5NE = await Controller.new(addressihWKmzN, {from: accounts[0]});
		const addressMlMzlEJ = accounts[1]
		const addressdnldOW0 = accounts[0]
		const addressOWdnI4s = accounts[1]
		const uintoUEuCx = BigInt("1048")
		const addressUdfooNL = accounts[5]
		const uintRtc1mWy = BigInt("1316")
		const addressjNofxkj = accounts[3]
		const addresseLwD6gx = accounts[2]
		const uintPJPpfYd = BigInt("1968")
		const uintZpzdsXP = BigInt("388")
		const addressMvOtOM = "0x0000000000000000000000000000000000000001"
		const addresssu9DQG = accounts[0]
		const uintZXc4P8Y = BigInt("495")
		const addressHnE3Y3 = accounts[2]
		const addressGEDfjfA = await ControllerMX6D5NE.setConverter.call(addressOWdnI4s, addressdnldOW0, addressMlMzlEJ, {from: accounts[5]});
		const addresspOZIZSg = await ControllerMX6D5NE.inCaseTokensGetStuck.call(addressUdfooNL, uintoUEuCx, {from: accounts[0]});
		const uintZMAwuiT = await ControllerMX6D5NE.getExpectedReturn.call(addresseLwD6gx, addressjNofxkj, uintRtc1mWy, {from: accounts[1]});
		const uintxJ5sQD6 = await ControllerMX6D5NE.setSplit.call(uintPJPpfYd, {from: accounts[4]});
		const uintg8eYoR = await ControllerMX6D5NE.getExpectedReturn.call(addresssu9DQG, addressMvOtOM, uintZpzdsXP, {from: accounts[4]});
		const addressvHveUuC = await ControllerMX6D5NE.earn.call(addressHnE3Y3, uintZXc4P8Y, {from: accounts[4]});

		await expect(ControllerMX6D5NE.setConverter.call(addressOWdnI4s, addressdnldOW0, addressMlMzlEJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresstxgIi2A = accounts[1]
		const Controllerlfn0gj = await Controller.new(addresstxgIi2A, {from: accounts[3]});
		const addressq8qSCk1 = accounts[2]
		const uintATLOUeu = BigInt("1749")
		const addresss1vRcmB = accounts[0]
		const addressrIU1G8u = accounts[2]
		const addressTpW1RTm = accounts[5]
		const addressqClEhuZ = accounts[3]
		const addressFkbCAT = accounts[0]
		const addressm6r1vO6 = accounts[4]
		const uintorarFti = BigInt("1070")
		const addressgDiTwEf = await Controllerlfn0gj.setRewards.call(addressq8qSCk1, {from: accounts[1]});
		const uintXtnz7Sk = await Controllerlfn0gj.getExpectedReturn.call(addressrIU1G8u, addresss1vRcmB, uintATLOUeu, {from: accounts[5]});
		const addressOKaQiMA = await Controllerlfn0gj.revokeStrategy.call(addressqClEhuZ, addressTpW1RTm, {from: accounts[2]});
		const addressoZwKi8x = await Controllerlfn0gj.approveStrategy.call(addressm6r1vO6, addressFkbCAT, {from: accounts[1]});
		const uintDOIC6Io = await Controllerlfn0gj.setSplit.call(uintorarFti, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllerlfn0gj.setRewards.call(addressq8qSCk1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressHxGEW74 = accounts[0]
		const ControllermwrOvp = await Controller.new(addressHxGEW74, {from: accounts[1]});
		const uintQNAo46c = BigInt("106")
		const addresst38cZW1 = "0x0000000000000000000000000000000000000001"
		const addressUgvZu7Y = accounts[5]
		const addressHpDnFvw = accounts[2]
		const addresssQi7R89 = accounts[4]
		const addresspwDPjKn = accounts[3]
		const addresskEpsWu0 = accounts[4]
		const uintI7pVmf = BigInt("555")
		const uintZ6Ep4sy = BigInt("1755")
		const addresscUQuZpw = accounts[2]
		const addressSJp5ywc = accounts[0]
		const uintiqBN4S = await ControllermwrOvp.getExpectedReturn.call(addressUgvZu7Y, addresst38cZW1, uintQNAo46c, {from: accounts[4]});
		const addressRlmr7Pf = await ControllermwrOvp.inCaseStrategyTokenGetStuck.call(addresssQi7R89, addressHpDnFvw, {from: accounts[5]});
		const addressqqU1mxO = await ControllermwrOvp.setVault.call(addresskEpsWu0, addresspwDPjKn, {from: accounts[3]});
		const uintKOv0LGG = await ControllermwrOvp.setSplit.call(uintI7pVmf, {from: accounts[3]});
		const addressqVIZkLQ = await ControllermwrOvp.yearn.call(addressSJp5ywc, addresscUQuZpw, uintZ6Ep4sy, {from: accounts[3]});

		await expect(ControllermwrOvp.getExpectedReturn.call(addressUgvZu7Y, addresst38cZW1, uintQNAo46c, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressepNxro = accounts[5]
		const ControllerYTDmO6E = await Controller.new(addressepNxro, {from: accounts[4]});
		const uintZC3VxLA = BigInt("1837")
		const address4O4IzH = accounts[0]
		const uintFxaGUKF = BigInt("1782")
		const addressD5FhoKL = accounts[1]
		const addresspwskU0p = accounts[2]
		const addresspuBzGhk = accounts[0]
		const addressCL3bOHP = accounts[5]
		const addressIokOAcW = accounts[3]
		const addressFevYURC = accounts[5]
		const addressSFL0WnV = await ControllerYTDmO6E.inCaseTokensGetStuck.call(address4O4IzH, uintZC3VxLA, {from: accounts[3]});
		const addressscEYZ6a = await ControllerYTDmO6E.earn.call(addressD5FhoKL, uintFxaGUKF, {from: accounts[4]});
		const addressskpDHU = await ControllerYTDmO6E.withdrawAll.call(addresspwskU0p, {from: accounts[1]});
		const addressNwqSAue = await ControllerYTDmO6E.inCaseStrategyTokenGetStuck.call(addressCL3bOHP, addresspuBzGhk, {from: accounts[4]});
		const addressgGNBCfW = await ControllerYTDmO6E.approveStrategy.call(addressFevYURC, addressIokOAcW, {from: accounts[2]});

		await expect(ControllerYTDmO6E.inCaseTokensGetStuck.call(address4O4IzH, uintZC3VxLA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxtQHyNI = accounts[1]
		const ControllerJ2JdNmE = await Controller.new(addressxtQHyNI, {from: "0x0000000000000000000000000000000000000001"});
		const uintIRGD1B = BigInt("1701")
		const address7kYyJO = accounts[1]
		const uintVf2dhP = BigInt("1577")
		const addressonMF6yW = accounts[3]
		const addressZ8MmN5H = accounts[5]
		const addressjTMnTs6 = await ControllerJ2JdNmE.earn.call(address7kYyJO, uintIRGD1B, {from: accounts[3]});
		const uintP2DdWu = await ControllerJ2JdNmE.getExpectedReturn.call(addressZ8MmN5H, addressonMF6yW, uintVf2dhP, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Controller', async () => {
		const addressOTGSTam = accounts[2]
		const ControllerTT8GLpG = await Controller.new(addressOTGSTam, {from: accounts[2]});
		const uinteh93wxF = BigInt("1209")
		const addresssWFway2 = accounts[2]
		const addressJwZND5K = accounts[5]
		const addresse0Glk6v = accounts[2]
		const addressb4f9QwJ = accounts[2]
		const addressLjz4q4U = accounts[4]
		const addressrMx81dh = accounts[3]
		const uintkPa3KGp = BigInt("1022")
		const address8TpbJl = accounts[2]
		const addressSy5ypA6 = accounts[3]
		const addresshAz6MEN = "0x0000000000000000000000000000000000000002"
		const addressoU9zaKT = accounts[2]
		const uintXIuIrO2 = BigInt("1508")
		const addresscehRrgT = accounts[1]
		const addressY5PpiV = await ControllerTT8GLpG.withdraw.call(addresssWFway2, uinteh93wxF, {from: accounts[2]});
		const uintLrlfWrA = await ControllerTT8GLpG.balanceOf.call(addressJwZND5K, {from: accounts[2]});
		const addressYvIeI0b = await ControllerTT8GLpG.setConverter.call(addressLjz4q4U, addressb4f9QwJ, addresse0Glk6v, {from: accounts[1]});
		const addressXyPEBpj = await ControllerTT8GLpG.setRewards.call(addressrMx81dh, {from: accounts[0]});
		const addressjZ9EoXc = await ControllerTT8GLpG.yearn.call(addressSy5ypA6, address8TpbJl, uintkPa3KGp, {from: accounts[1]});
		const addressD1n3fLk = await ControllerTT8GLpG.setStrategist.call(addresshAz6MEN, {from: "0x0000000000000000000000000000000000000001"});
		const addressgTT74ZG = await ControllerTT8GLpG.setOneSplit.call(addressoU9zaKT, {from: accounts[4]});
		const addressOI2qJCC = await ControllerTT8GLpG.earn.call(addresscehRrgT, uintXIuIrO2, {from: accounts[0]});

		await expect(ControllerTT8GLpG.withdraw.call(addresssWFway2, uinteh93wxF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressat1rnvH = accounts[5]
		const ControllerMX6D5NE = await Controller.new(addressat1rnvH, {from: accounts[0]});
		const addresst6URgXe = accounts[1]
		const addressZ46YYbp = accounts[1]
		const addressGTQ1ax8 = accounts[1]
		const addressQtB8V81 = accounts[1]
		const uintREuhdow = BigInt("1048")
		const addressHD188Y = accounts[5]
		const uintM3tuoX = BigInt("1316")
		const addresszzBD28V = accounts[3]
		const addressA9aQ9lY = accounts[2]
		const uintckSqM2H = BigInt("1968")
		const uintFtq3zc = BigInt("388")
		const addressSvV9XY1 = "0x0000000000000000000000000000000000000001"
		const addressy5sihkr = accounts[0]
		const addressE3oYDP = accounts[0]
		const addresscalRgV3 = accounts[0]
		const uintJDlGpg = BigInt("495")
		const addressxbAJBRc = accounts[2]
		const addressuaw70D1 = await ControllerMX6D5NE.setOneSplit.call(addresst6URgXe, {from: accounts[5]});
		const addressGEDfjfA = await ControllerMX6D5NE.setConverter.call(addressQtB8V81, addressGTQ1ax8, addressZ46YYbp, {from: accounts[5]});
		const addresspOZIZSg = await ControllerMX6D5NE.inCaseTokensGetStuck.call(addressHD188Y, uintREuhdow, {from: accounts[0]});
		const uintZMAwuiT = await ControllerMX6D5NE.getExpectedReturn.call(addressA9aQ9lY, addresszzBD28V, uintM3tuoX, {from: accounts[1]});
		const uintxJ5sQD6 = await ControllerMX6D5NE.setSplit.call(uintckSqM2H, {from: accounts[4]});
		const uintg8eYoR = await ControllerMX6D5NE.getExpectedReturn.call(addressy5sihkr, addressSvV9XY1, uintFtq3zc, {from: accounts[4]});
		const addressyOMScT = await ControllerMX6D5NE.revokeStrategy.call(addresscalRgV3, addressE3oYDP, {from: accounts[1]});
		const addressvHveUuC = await ControllerMX6D5NE.earn.call(addressxbAJBRc, uintJDlGpg, {from: accounts[4]});

		await expect(ControllerMX6D5NE.setOneSplit.call(addresst6URgXe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressS554ByA = accounts[1]
		const Controllerbj5fO27 = await Controller.new(addressS554ByA, {from: accounts[5]});
		const uintVMaOodk = BigInt("1074")
		const addressXa5qdhr = accounts[2]
		const uintvON3D4e = BigInt("1591")
		const addresspsiJaq9 = accounts[0]
		const addressWcGchyy = await Controllerbj5fO27.earn.call(addressXa5qdhr, uintVMaOodk, {from: "0x0000000000000000000000000000000000000001"});
		const uintcR6N5sS = await Controllerbj5fO27.setSplit.call(uintvON3D4e, {from: accounts[3]});
		const uintwJdviL1 = await Controllerbj5fO27.balanceOf.call(addresspsiJaq9, {from: accounts[0]});

		await expect(Controllerbj5fO27.earn.call(addressXa5qdhr, uintVMaOodk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressA3N6Os = accounts[4]
		const ControllerFVHVxZX = await Controller.new(addressA3N6Os, {from: accounts[4]});
		const uintIMDxaE0 = BigInt("1451")
		const addressTi9I8St = accounts[2]
		const addresss2HVHv0 = accounts[4]
		const addressZVbjKDn = accounts[5]
		const addressnUExN62 = accounts[1]
		const addressI3v63ge = accounts[0]
		const uintGZDhsRI = BigInt("1424")
		const addressxXDopNA = "0x0000000000000000000000000000000000000001"
		const addressEgIDxzx = accounts[3]
		const addressfOYwlkT = "0x0000000000000000000000000000000000000001"
		const addressZfjcmo = await ControllerFVHVxZX.yearn.call(addresss2HVHv0, addressTi9I8St, uintIMDxaE0, {from: accounts[2]});
		const addressZI58LjC = await ControllerFVHVxZX.inCaseStrategyTokenGetStuck.call(addressnUExN62, addressZVbjKDn, {from: accounts[4]});
		const uintDO0HAbw = await ControllerFVHVxZX.balanceOf.call(addressI3v63ge, {from: accounts[4]});
		const addressEQBhKLU = await ControllerFVHVxZX.inCaseTokensGetStuck.call(addressxXDopNA, uintGZDhsRI, {from: accounts[3]});
		const addressI4sOjUI = await ControllerFVHVxZX.inCaseStrategyTokenGetStuck.call(addressfOYwlkT, addressEgIDxzx, {from: accounts[0]});

		await expect(ControllerFVHVxZX.yearn.call(addresss2HVHv0, addressTi9I8St, uintIMDxaE0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfQh8OE = accounts[2]
		const Controller4GXNz4 = await Controller.new(addressfQh8OE, {from: accounts[3]});
		const addressbKGjWUD = "0x0000000000000000000000000000000000000001"
		const addressJ7cFvUY = accounts[0]
		const addresss8BwkxV = accounts[5]
		const addresspwCeoZ = accounts[3]
		const uintVsznBCo = BigInt("39")
		const addressJY0QVT0 = accounts[4]
		const addressMp5UdxF = accounts[3]
		const addressBAGvPnl = "0x0000000000000000000000000000000000000001"
		const addressgM56LK = await Controller4GXNz4.setStrategist.call(addressbKGjWUD, {from: accounts[1]});
		const addressk798IFd = await Controller4GXNz4.setGovernance.call(addressJ7cFvUY, {from: accounts[0]});
		const addressW14NLru = await Controller4GXNz4.withdrawAll.call(addresss8BwkxV, {from: accounts[1]});
		const addressch4q0rK = await Controller4GXNz4.setOneSplit.call(addresspwCeoZ, {from: accounts[4]});
		const addressLgJs0Z8 = await Controller4GXNz4.inCaseTokensGetStuck.call(addressJY0QVT0, uintVsznBCo, {from: accounts[2]});
		const addressOzzsECL = await Controller4GXNz4.revokeStrategy.call(addressBAGvPnl, addressMp5UdxF, {from: accounts[1]});

		await expect(Controller4GXNz4.setStrategist.call(addressbKGjWUD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressgN1W7JN = accounts[2]
		const ControllerE3gvG5B = await Controller.new(addressgN1W7JN, {from: accounts[1]});
		const addressPSJmizr = accounts[0]
		const addressO9wOka = accounts[3]
		const uintYpiTFG = BigInt("1676")
		const addressg82CXiU = accounts[2]
		const addressKJvDIQ = accounts[5]
		const uinta9QNHqK = BigInt("1362")
		const addressOQwYnIx = accounts[0]
		const addressf1tqgAj = accounts[4]
		const addresshcwr1Wh = await ControllerE3gvG5B.withdrawAll.call(addressPSJmizr, {from: accounts[1]});
		const addresssJ4ais3 = await ControllerE3gvG5B.setStrategist.call(addressO9wOka, {from: accounts[5]});
		const uintBu8mfrf = await ControllerE3gvG5B.getExpectedReturn.call(addressKJvDIQ, addressg82CXiU, uintYpiTFG, {from: accounts[0]});
		const addressIpdaXY3 = await ControllerE3gvG5B.yearn.call(addressf1tqgAj, addressOQwYnIx, uinta9QNHqK, {from: accounts[3]});

		await expect(ControllerE3gvG5B.withdrawAll.call(addressPSJmizr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfC5RwDa = accounts[2]
		const Controller4GXNz4 = await Controller.new(addressfC5RwDa, {from: accounts[3]});
		const addressHykkavo = accounts[2]
		const addressXEvJFRg = accounts[0]
		const addresshBk3Xx = "0x0000000000000000000000000000000000000001"
		const addressVSNhfap = accounts[0]
		const address6U2PP6 = accounts[5]
		const addressHCLiV6T = accounts[3]
		const uinteErYkDw = BigInt("39")
		const addressUjbNm1e = accounts[4]
		const addressEXoj1qL = accounts[3]
		const addressr93gMsw = "0x0000000000000000000000000000000000000001"
		const address3LGnmG = await Controller4GXNz4.approveStrategy.call(addressXEvJFRg, addressHykkavo, {from: accounts[3]});
		const addressgM56LK = await Controller4GXNz4.setStrategist.call(addresshBk3Xx, {from: accounts[1]});
		const addressk798IFd = await Controller4GXNz4.setGovernance.call(addressVSNhfap, {from: accounts[0]});
		const addressW14NLru = await Controller4GXNz4.withdrawAll.call(address6U2PP6, {from: accounts[1]});
		const addressch4q0rK = await Controller4GXNz4.setOneSplit.call(addressHCLiV6T, {from: accounts[4]});
		const addressLgJs0Z8 = await Controller4GXNz4.inCaseTokensGetStuck.call(addressUjbNm1e, uinteErYkDw, {from: accounts[2]});
		const addressOzzsECL = await Controller4GXNz4.revokeStrategy.call(addressr93gMsw, addressEXoj1qL, {from: accounts[1]});

		await expect(Controller4GXNz4.setStrategist.call(addresshBk3Xx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjMD1c38 = accounts[0]
		const ControlleraHo8seA = await Controller.new(addressjMD1c38, {from: accounts[1]});
		const addressIz4vvRF = "0x0000000000000000000000000000000000000001"
		const addressHRkBUAQ = accounts[3]
		const addressHQWQYi = await ControlleraHo8seA.setGovernance.call(addressIz4vvRF, {from: accounts[4]});
		const addressIXuznl7 = await ControlleraHo8seA.setGovernance.call(addressHRkBUAQ, {from: accounts[3]});

		await expect(ControlleraHo8seA.setGovernance.call(addressIz4vvRF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxjG0lSG = accounts[5]
		const ControllerMX6D5NE = await Controller.new(addressxjG0lSG, {from: accounts[0]});
		const uintUfXYhtA = BigInt("210")
		const addressBBpdPt6 = accounts[5]
		const uintTLwfOna = BigInt("1316")
		const address1eUGfU = accounts[3]
		const addressLKPO3y = accounts[2]
		const uintEQ9DDtn = BigInt("1968")
		const uintN5w5p8z = BigInt("495")
		const addressfUpwlSY = accounts[2]
		const addresspOZIZSg = await ControllerMX6D5NE.inCaseTokensGetStuck.call(addressBBpdPt6, uintUfXYhtA, {from: accounts[0]});
		const uintZMAwuiT = await ControllerMX6D5NE.getExpectedReturn.call(addressLKPO3y, address1eUGfU, uintTLwfOna, {from: accounts[1]});
		const uintxJ5sQD6 = await ControllerMX6D5NE.setSplit.call(uintEQ9DDtn, {from: accounts[4]});
		const addressvHveUuC = await ControllerMX6D5NE.earn.call(addressfUpwlSY, uintN5w5p8z, {from: accounts[4]});

		await expect(ControllerMX6D5NE.inCaseTokensGetStuck.call(addressBBpdPt6, uintUfXYhtA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressDZHS2AT = accounts[1]
		const ControllerNkELXX1 = await Controller.new(addressDZHS2AT, {from: accounts[3]});
		const addressmnKXFQM = accounts[2]
		const addressmg2DrD1 = accounts[5]
		const addressz425X6L = accounts[2]
		const addresswymqa2O = accounts[3]
		const addresssETHimb = "0x0000000000000000000000000000000000000001"
		const addressfOayK9W = accounts[0]
		const addressyBQcSV = await ControllerNkELXX1.inCaseStrategyTokenGetStuck.call(addressmg2DrD1, addressmnKXFQM, {from: accounts[0]});
		const addressekKYrD1 = await ControllerNkELXX1.setStrategy.call(addresswymqa2O, addressz425X6L, {from: "0x0000000000000000000000000000000000000001"});
		const addressczMkTrq = await ControllerNkELXX1.inCaseStrategyTokenGetStuck.call(addressfOayK9W, addresssETHimb, {from: accounts[2]});

		await expect(ControllerNkELXX1.inCaseStrategyTokenGetStuck.call(addressmg2DrD1, addressmnKXFQM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address0CA5t0 = accounts[3]
		const ControllerYsz9YKX = await Controller.new(address0CA5t0, {from: accounts[2]});
		const addressxIn9SRX = "0x0000000000000000000000000000000000000001"
		const uintk2RiRF = BigInt("598")
		const addressIrpyFp7 = accounts[4]
		const addressB3QrNFC = accounts[3]
		const address3oZTkI = accounts[3]
		const address1EjaxR = await ControllerYsz9YKX.setRewards.call(addressxIn9SRX, {from: accounts[2]});
		const uintwQQXttr = await ControllerYsz9YKX.getExpectedReturn.call(addressB3QrNFC, addressIrpyFp7, uintk2RiRF, {from: accounts[0]});
		const addressqrXQCh1 = await ControllerYsz9YKX.setStrategist.call(address3oZTkI, {from: accounts[4]});

		await expect(ControllerYsz9YKX.getExpectedReturn.call(addressB3QrNFC, addressIrpyFp7, uintk2RiRF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressRnAhgyC = accounts[1]
		const Controllerbj5fO27 = await Controller.new(addressRnAhgyC, {from: accounts[5]});
		const addressf4XgKKN = accounts[2]
		const addresslItbvz0 = accounts[0]
		const addressdXSAgak = accounts[4]
		const addresswF9DqZG = accounts[2]
		const addressf4a5gQ1 = accounts[3]
		const uintqUOGygm = BigInt("1045")
		const addressNLvkSRW = accounts[3]
		const addressK0QIWQx = await Controllerbj5fO27.setStrategy.call(addresslItbvz0, addressf4XgKKN, {from: accounts[3]});
		const addressSYoBsv = await Controllerbj5fO27.setOneSplit.call(addressdXSAgak, {from: accounts[4]});
		const addressiUKTofQ = await Controllerbj5fO27.revokeStrategy.call(addressf4a5gQ1, addresswF9DqZG, {from: accounts[3]});
		const addressWcGchyy = await Controllerbj5fO27.earn.call(addressNLvkSRW, uintqUOGygm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllerbj5fO27.setStrategy.call(addresslItbvz0, addressf4XgKKN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressLBty2l = accounts[4]
		const ControllerFVHVxZX = await Controller.new(addressLBty2l, {from: accounts[4]});
		const address6fENBg = accounts[3]
		const addresslEvC5OF = accounts[0]
		const uintBl6hhzM = BigInt("1451")
		const addressqL1kSrx = accounts[2]
		const addressBsNjlWn = accounts[4]
		const uintkeMOZ1h = BigInt("1417")
		const addressmp099jj = "0x0000000000000000000000000000000000000001"
		const addressQ0IlIg = accounts[1]
		const addresswdu2Kt4 = accounts[3]
		const addressW6WHtU0 = accounts[3]
		const addressICu5Xvh = accounts[2]
		const addressLQ4C6wt = "0x0000000000000000000000000000000000000001"
		const addressIvbKf8v = await ControllerFVHVxZX.revokeStrategy.call(addresslEvC5OF, address6fENBg, {from: accounts[2]});
		const addressZfjcmo = await ControllerFVHVxZX.yearn.call(addressBsNjlWn, addressqL1kSrx, uintBl6hhzM, {from: accounts[2]});
		const addressEQBhKLU = await ControllerFVHVxZX.inCaseTokensGetStuck.call(addressmp099jj, uintkeMOZ1h, {from: accounts[3]});
		const addressL48Q9t = await ControllerFVHVxZX.setConverter.call(addressW6WHtU0, addresswdu2Kt4, addressQ0IlIg, {from: accounts[0]});
		const addressI4sOjUI = await ControllerFVHVxZX.inCaseStrategyTokenGetStuck.call(addressLQ4C6wt, addressICu5Xvh, {from: accounts[0]});

		await expect(ControllerFVHVxZX.revokeStrategy.call(addresslEvC5OF, address6fENBg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressYu3LpKb = accounts[1]
		const Controllerbj5fO27 = await Controller.new(addressYu3LpKb, {from: accounts[5]});
		const address6m67CB = accounts[1]
		const addressJL6NKtj = accounts[4]
		const addressdXCzpCG = accounts[3]
		const addressVEBUhHt = accounts[1]
		const uintNtuCPt5 = BigInt("1074")
		const addressLMkwxXE = accounts[4]
		const addressAoDDlr2 = await Controllerbj5fO27.setConverter.call(addressdXCzpCG, addressJL6NKtj, address6m67CB, {from: accounts[5]});
		const addressO6hSoQc = await Controllerbj5fO27.setGovernance.call(addressVEBUhHt, {from: accounts[4]});
		const addressWcGchyy = await Controllerbj5fO27.earn.call(addressLMkwxXE, uintNtuCPt5, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllerbj5fO27.setGovernance.call(addressVEBUhHt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZSKYFzq = accounts[1]
		const Controllerbj5fO27 = await Controller.new(addressZSKYFzq, {from: accounts[5]});
		const addressYHMju1K = accounts[5]
		const uintSnYGUud = BigInt("1601")
		const addressXdPpccv = accounts[1]
		const uintvEZh47W = BigInt("1074")
		const addressEnjFqgh = accounts[4]
		const addressv0Pm0DA = await Controllerbj5fO27.setGovernance.call(addressYHMju1K, {from: accounts[5]});
		const addresseoqHfJ6 = await Controllerbj5fO27.inCaseTokensGetStuck.call(addressXdPpccv, uintSnYGUud, {from: accounts[0]});
		const addressWcGchyy = await Controllerbj5fO27.earn.call(addressEnjFqgh, uintvEZh47W, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Controllerbj5fO27.inCaseTokensGetStuck.call(addressXdPpccv, uintSnYGUud, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresssrqaoYE = accounts[0]
		const ControllerQGmzDVW = await Controller.new(addresssrqaoYE, {from: accounts[5]});
		const addressnmL44Rj = accounts[1]
		const addresspIHnQX3 = accounts[5]
		const addresslQuRBQ = accounts[1]
		const addressHEhUmfR = accounts[4]
		const addressB8ErMVE = await ControllerQGmzDVW.revokeStrategy.call(addresspIHnQX3, addressnmL44Rj, {from: accounts[5]});
		const addressUiEd9d = await ControllerQGmzDVW.setVault.call(addressHEhUmfR, addresslQuRBQ, {from: accounts[0]});

		await expect(ControllerQGmzDVW.setVault.call(addressHEhUmfR, addresslQuRBQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskNMhHbn = accounts[3]
		const ControlleropHsh0l = await Controller.new(addresskNMhHbn, {from: accounts[4]});
		const addressz86wo4J = accounts[0]
		const addressmqklQJO = accounts[1]
		const addresstiupNj2 = accounts[2]
		const addressA2bER0Q = await ControlleropHsh0l.setStrategist.call(addressz86wo4J, {from: accounts[4]});
		const addressZJ0ky3C = await ControlleropHsh0l.setRewards.call(addressmqklQJO, {from: accounts[1]});
		const addressY2ospz = await ControlleropHsh0l.setStrategist.call(addresstiupNj2, {from: accounts[1]});

		await expect(ControlleropHsh0l.setRewards.call(addressmqklQJO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressKytuy9o = accounts[1]
		const ControllerNkELXX1 = await Controller.new(addressKytuy9o, {from: accounts[3]});
		const addressITEfqkM = accounts[0]
		const addressorOmrWR = accounts[2]
		const addressTHU9mFg = accounts[5]
		const addressVcvJLIY = await ControllerNkELXX1.setOneSplit.call(addressITEfqkM, {from: accounts[3]});
		const addressyBQcSV = await ControllerNkELXX1.inCaseStrategyTokenGetStuck.call(addressTHU9mFg, addressorOmrWR, {from: accounts[0]});

		await expect(ControllerNkELXX1.inCaseStrategyTokenGetStuck.call(addressTHU9mFg, addressorOmrWR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressGXWVSZh = accounts[1]
		const ControllerNkELXX1 = await Controller.new(addressGXWVSZh, {from: accounts[3]});
		const addressxEvcWN = accounts[2]
		const addressJalrzn9 = "0x0000000000000000000000000000000000000001"
		const addressH7by7Zb = accounts[4]
		const addressga3FtOh = accounts[0]
		const addressnwfdDZy = accounts[1]
		const addresspbOs5v = accounts[2]
		const addressK7YyR1Q = accounts[6]
		const addressGt1dWhu = await ControllerNkELXX1.setVault.call(addressJalrzn9, addressxEvcWN, {from: accounts[3]});
		const addresswHQeI1p = await ControllerNkELXX1.setRewards.call(addressH7by7Zb, {from: accounts[0]});
		const addressKk4yyJO = await ControllerNkELXX1.approveStrategy.call(addressnwfdDZy, addressga3FtOh, {from: accounts[3]});
		const addressyBQcSV = await ControllerNkELXX1.inCaseStrategyTokenGetStuck.call(addressK7YyR1Q, addresspbOs5v, {from: accounts[0]});

		await expect(ControllerNkELXX1.setRewards.call(addressH7by7Zb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressDXCtrNL = accounts[1]
		const Controllerbj5fO27 = await Controller.new(addressDXCtrNL, {from: accounts[5]});
		const addressCMdR2w6 = accounts[5]
		const addressSkeRorr = accounts[4]
		const uintjpu0tRa = BigInt("1605")
		const addressiEdmuNb = await Controllerbj5fO27.setStrategy.call(addressSkeRorr, addressCMdR2w6, {from: accounts[5]});
		const uintcR6N5sS = await Controllerbj5fO27.setSplit.call(uintjpu0tRa, {from: accounts[3]});

		await expect(Controllerbj5fO27.setStrategy.call(addressSkeRorr, addressCMdR2w6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressGGL4W9C = accounts[3]
		const ControllerHsOymCu = await Controller.new(addressGGL4W9C, {from: accounts[4]});
		const addressEKelZ1K = accounts[4]
		const addressU4UEHGl = "0x0000000000000000000000000000000000000001"
		const addresscJcW7Ev = accounts[3]
		const addresstNSM7OK = accounts[1]
		const addressWDC83t = accounts[3]
		const addresseFKrsO = accounts[0]
		const addresslaxJGq7 = await ControllerHsOymCu.inCaseStrategyTokenGetStuck.call(addressU4UEHGl, addressEKelZ1K, {from: accounts[4]});
		const addressPAchfza = await ControllerHsOymCu.setStrategist.call(addresscJcW7Ev, {from: accounts[1]});
		const uintBOjZMcX = await ControllerHsOymCu.balanceOf.call(addresstNSM7OK, {from: "0x0000000000000000000000000000000000000001"});
		const addressMebDbl3 = await ControllerHsOymCu.revokeStrategy.call(addresseFKrsO, addressWDC83t, {from: accounts[1]});

		await expect(ControllerHsOymCu.inCaseStrategyTokenGetStuck.call(addressU4UEHGl, addressEKelZ1K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressPf1mDXi = accounts[0]
		const ControllerXHYQMg = await Controller.new(addressPf1mDXi, {from: accounts[4]});
		const uinty1CGKZy = BigInt("1103")
		const addressgFWt47V = accounts[4]
		const addressYiJO3Tj = accounts[4]
		const addressFTYkw4A = accounts[1]
		const addressI4sBPd = accounts[4]
		const uintgN9b5cW = await ControllerXHYQMg.setSplit.call(uinty1CGKZy, {from: accounts[4]});
		const addresscdgOSRp = await ControllerXHYQMg.setConverter.call(addressFTYkw4A, addressYiJO3Tj, addressgFWt47V, {from: accounts[1]});
		const addressGeQAVp = await ControllerXHYQMg.withdrawAll.call(addressI4sBPd, {from: accounts[3]});

		await expect(ControllerXHYQMg.setConverter.call(addressFTYkw4A, addressYiJO3Tj, addressgFWt47V, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressF4vGiom = accounts[2]
		const ControllerE3gvG5B = await Controller.new(addressF4vGiom, {from: accounts[1]});
		const addressGv3J4gw = "0x00000000000000000000000000000000000000-1"
		const addressZUI7Wbl = accounts[3]
		const addressAeVE5C = accounts[2]
		const uintNnpZZxq = BigInt("576")
		const addresslTdd8Yu = accounts[2]
		const addressGdQfeer = accounts[1]
		const addressfQEWvbz = accounts[2]
		const uintECfS7CU = BigInt("1196")
		const addressqdmdo9s = accounts[2]
		const addressOhL9JM1 = await ControllerE3gvG5B.setGovernance.call(addressGv3J4gw, {from: accounts[2]});
		const addressk7qdiq = await ControllerE3gvG5B.revokeStrategy.call(addressAeVE5C, addressZUI7Wbl, {from: accounts[1]});
		const addresskevD6j = await ControllerE3gvG5B.earn.call(addresslTdd8Yu, uintNnpZZxq, {from: accounts[4]});
		const addressdQS2kZu = await ControllerE3gvG5B.setVault.call(addressfQEWvbz, addressGdQfeer, {from: "0x0000000000000000000000000000000000000001"});
		const addressbsF4o4 = await ControllerE3gvG5B.withdraw.call(addressqdmdo9s, uintECfS7CU, {from: accounts[1]});

		await expect(ControllerE3gvG5B.setGovernance.call(addressGv3J4gw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})