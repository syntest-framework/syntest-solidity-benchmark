const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressVe6k4m1 = accounts[0]
		const afiControllery7F7SHf = await afiController.new(addressVe6k4m1, {from: accounts[4]});
		const uintZ4u8DJ4 = BigInt("366")
		const addresslPmSJCI = accounts[4]
		const addressKWfXdfK = accounts[2]
		const addressPacKeOb = accounts[4]
		const address4RfYTK = accounts[0]
		const addressqhPu6y = accounts[0]
		const addressz7haPCv = accounts[3]
		const uintzlDUpQz = BigInt("383")
//		const addressRYHyXWQ = await afiControllery7F7SHf.yearn.call(addressKWfXdfK, addresslPmSJCI, uintZ4u8DJ4, {from: accounts[2]});
//		const addressNA5vPNG = await afiControllery7F7SHf.revokeStrategy.call(address4RfYTK, addressPacKeOb, {from: "0x0000000000000000000000000000000000000001"});
//		const addressk0vo9PD = await afiControllery7F7SHf.approveStrategy.call(addressz7haPCv, addressqhPu6y, {from: accounts[0]});
//		const uintnCFZqEp = await afiControllery7F7SHf.setSplit.call(uintzlDUpQz, {from: accounts[4]});

		await expect(afiControllery7F7SHf.yearn.call(addressKWfXdfK, addresslPmSJCI, uintZ4u8DJ4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxNip8f8 = accounts[4]
		const afiControllersWPpnP = await afiController.new(addressxNip8f8, {from: accounts[0]});
		const addressMTa0gJ8 = "0x0000000000000000000000000000000000000001"
		const addressnCnGdWB = "0x0000000000000000000000000000000000000001"
		const addressLnhgq3n = accounts[3]
		const addressczHmFSB = accounts[5]
		const address3gqhRt = accounts[2]
//		const addressKSBDPGc = await afiControllersWPpnP.inCaseStrategyTokenGetStuck.call(addressnCnGdWB, addressMTa0gJ8, {from: accounts[5]});
//		const addressM0Kmj9 = await afiControllersWPpnP.revokeStrategy.call(addressczHmFSB, addressLnhgq3n, {from: accounts[4]});
//		const addressWjaj1I8 = await afiControllersWPpnP.setOneSplit.call(address3gqhRt, {from: accounts[1]});

		await expect(afiControllersWPpnP.inCaseStrategyTokenGetStuck.call(addressnCnGdWB, addressMTa0gJ8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressGuQn80L = accounts[4]
		const afiControllerWrgOSdh = await afiController.new(addressGuQn80L, {from: accounts[3]});
		const uintwiEGRHg = BigInt("637")
		const addressOxP0Nyr = accounts[3]
		const uintPZk3rHd = BigInt("1294")
		const addressm3bMrPJ = "0x0000000000000000000000000000000000000001"
		const uintSeouL7q = BigInt("208")
		const addressEyOwzt0 = accounts[0]
		const addressiTkrzZt = accounts[3]
		const addressCc8Vhn3 = accounts[3]
		const address5zzees = accounts[4]
		const addressodldUv = accounts[1]
//		const addresstWn9B2R = await afiControllerWrgOSdh.earn.call(addressOxP0Nyr, uintwiEGRHg, {from: accounts[3]});
//		const addresseehZmSv = await afiControllerWrgOSdh.inCaseTokensGetStuck.call(addressm3bMrPJ, uintPZk3rHd, {from: accounts[3]});
//		const uintmprrGjE = await afiControllerWrgOSdh.getExpectedReturn.call(addressiTkrzZt, addressEyOwzt0, uintSeouL7q, {from: accounts[3]});
//		const addresstdptzyg = await afiControllerWrgOSdh.approveStrategy.call(address5zzees, addressCc8Vhn3, {from: accounts[4]});
//		const addressoqozFa4 = await afiControllerWrgOSdh.withdrawAll.call(addressodldUv, {from: accounts[2]});

		await expect(afiControllerWrgOSdh.earn.call(addressOxP0Nyr, uintwiEGRHg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressooc5qiD = accounts[2]
		const afiControllercFY4PWR = await afiController.new(addressooc5qiD, {from: accounts[3]});
		const addressHoXsTdY = "0x0000000000000000000000000000000000000001"
		const addresswM1JzwZ = accounts[2]
		const addressKw7lWRj = accounts[4]
		const uintZYX9Vhd = BigInt("536")
//		const addressXGOLGBI = await afiControllercFY4PWR.setConverter.call(addressKw7lWRj, addresswM1JzwZ, addressHoXsTdY, {from: accounts[0]});
//		const uintxLcvHJ = await afiControllercFY4PWR.setSplit.call(uintZYX9Vhd, {from: accounts[2]});

		await expect(afiControllercFY4PWR.setConverter.call(addressKw7lWRj, addresswM1JzwZ, addressHoXsTdY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresstpgukQL = accounts[3]
		const afiControllerDvpIT2P = await afiController.new(addresstpgukQL, {from: "0x0000000000000000000000000000000000000001"});
		const uintZdzF074 = BigInt("1006")
		const addresskks3Kon = accounts[3]
		const uintKGJSUms = await afiControllerDvpIT2P.setSplit.call(uintZdzF074, {from: accounts[4]});
		const addressmGQ3pfl = await afiControllerDvpIT2P.setRewards.call(addresskks3Kon, {from: accounts[1]});
	});

	it('test for afiController', async () => {
		const addressGeqvjCx = accounts[1]
		const afiController9M0B1a = await afiController.new(addressGeqvjCx, {from: accounts[1]});
		const addressQDsbQhs = accounts[1]
		const addressCh8zoql = accounts[0]
		const uintvDrL3yh = BigInt("1737")
		const addressrUGypWj = accounts[5]
		const addressP5PKVcp = accounts[1]
		const addressEbT1JUd = accounts[1]
		const addressjLv9VRn = accounts[5]
		const addressdFBKMKE = await afiController9M0B1a.revokeStrategy.call(addressCh8zoql, addressQDsbQhs, {from: accounts[1]});
//		const addressOhT6Fm4 = await afiController9M0B1a.withdraw.call(addressrUGypWj, uintvDrL3yh, {from: accounts[4]});
//		const addressrCk7rFB = await afiController9M0B1a.setStrategist.call(addressP5PKVcp, {from: accounts[2]});
//		const address3GR29V = await afiController9M0B1a.inCaseStrategyTokenGetStuck.call(addressjLv9VRn, addressEbT1JUd, {from: accounts[2]});

		await expect(afiController9M0B1a.withdraw.call(addressrUGypWj, uintvDrL3yh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressjUp2k0y = accounts[2]
		const afiControllercFY4PWR = await afiController.new(addressjUp2k0y, {from: accounts[3]});
		const uintDYtPO4d = BigInt("536")
//		const uintxLcvHJ = await afiControllercFY4PWR.setSplit.call(uintDYtPO4d, {from: accounts[2]});

		await expect(afiControllercFY4PWR.setSplit.call(uintDYtPO4d, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressByNHyNI = accounts[0]
		const afiControllerfa4KXXM = await afiController.new(addressByNHyNI, {from: accounts[3]});
		const uintp1E8MCO = BigInt("69")
		const addressOR4JVn7 = accounts[3]
		const uintlLmVTZx = BigInt("1571")
		const addressnB6t1H9 = accounts[1]
		const addressExMplT = accounts[2]
//		const addressXAX4ftA = await afiControllerfa4KXXM.inCaseTokensGetStuck.call(addressOR4JVn7, uintp1E8MCO, {from: accounts[5]});
//		const addressICTtMoZ = await afiControllerfa4KXXM.yearn.call(addressExMplT, addressnB6t1H9, uintlLmVTZx, {from: accounts[5]});

		await expect(afiControllerfa4KXXM.inCaseTokensGetStuck.call(addressOR4JVn7, uintp1E8MCO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressKRELOsK = accounts[1]
		const afiController9M0B1a = await afiController.new(addressKRELOsK, {from: accounts[1]});
		const addressVK346Tv = accounts[2]
		const addressnDsoIEg = accounts[0]
		const addressostAm2 = accounts[2]
		const uintYcmBYR6 = BigInt("1737")
		const addressvYW0oMl = accounts[5]
		const uintVUdS1t = BigInt("298")
		const addressTvVWxuZ = accounts[2]
		const addressE7sKb46 = accounts[2]
		const addressdFBKMKE = await afiController9M0B1a.revokeStrategy.call(addressnDsoIEg, addressVK346Tv, {from: accounts[1]});
//		const addresswKjzfsj = await afiController9M0B1a.withdrawAll.call(addressostAm2, {from: accounts[4]});
//		const addressOhT6Fm4 = await afiController9M0B1a.withdraw.call(addressvYW0oMl, uintYcmBYR6, {from: accounts[4]});
//		const addressBkG5S5Y = await afiController9M0B1a.inCaseTokensGetStuck.call(addressTvVWxuZ, uintVUdS1t, {from: accounts[3]});
//		const addressrCk7rFB = await afiController9M0B1a.setStrategist.call(addressE7sKb46, {from: accounts[2]});

		await expect(afiController9M0B1a.withdrawAll.call(addressostAm2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDfT1Wde = accounts[0]
		const afiControllerfa4KXXM = await afiController.new(addressDfT1Wde, {from: accounts[3]});
		const addresseBJJmEe = "0x0000000000000000000000000000000000000001"
		const uintJdUbsVl = BigInt("69")
		const addressdgOZgl = accounts[3]
		const addressCesIjms = accounts[4]
		const uintOTeli4d = BigInt("1571")
		const addressQxQYcCL = accounts[2]
		const addresss92e4A = accounts[2]
//		const address66NjHC = await afiControllerfa4KXXM.setStrategist.call(addresseBJJmEe, {from: accounts[5]});
//		const addressXAX4ftA = await afiControllerfa4KXXM.inCaseTokensGetStuck.call(addressdgOZgl, uintJdUbsVl, {from: accounts[5]});
//		const addressFWBF9Jq = await afiControllerfa4KXXM.setGovernance.call(addressCesIjms, {from: accounts[0]});
//		const addressICTtMoZ = await afiControllerfa4KXXM.yearn.call(addresss92e4A, addressQxQYcCL, uintOTeli4d, {from: accounts[5]});

		await expect(afiControllerfa4KXXM.setStrategist.call(addresseBJJmEe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresseTaWPJG = accounts[1]
		const afiController9M0B1a = await afiController.new(addresseTaWPJG, {from: accounts[1]});
		const addressl2UHW1l = accounts[0]
		const addressAP6PyXb = accounts[2]
		const addressNrRpbq4 = accounts[0]
		const uintuTRiGX5 = BigInt("1737")
		const addressdIYzZF7 = accounts[6]
		const addressz6308N0 = accounts[3]
//		const addressXNzdrHl = await afiController9M0B1a.setGovernance.call(addressl2UHW1l, {from: accounts[5]});
//		const addressdFBKMKE = await afiController9M0B1a.revokeStrategy.call(addressNrRpbq4, addressAP6PyXb, {from: accounts[1]});
//		const addressOhT6Fm4 = await afiController9M0B1a.withdraw.call(addressdIYzZF7, uintuTRiGX5, {from: accounts[4]});
//		const addressBbDE2cn = await afiController9M0B1a.setStrategist.call(addressz6308N0, {from: accounts[5]});

		await expect(afiController9M0B1a.setGovernance.call(addressl2UHW1l, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressuHQr6dJ = accounts[1]
		const afiController9M0B1a = await afiController.new(addressuHQr6dJ, {from: accounts[1]});
		const addressK83RvMS = accounts[2]
		const addresstvzUUED = accounts[0]
		const addressfOWMcvF = accounts[1]
		const addressWh71BpO = accounts[3]
		const addressRSqGn8q = accounts[4]
		const addressXfkgLf9 = accounts[0]
		const addressPO5Haj = "0x0000000000000000000000000000000000000001"
		const uintm9YzKrB = BigInt("1737")
		const addressFeGneus = accounts[5]
		const addressdFBKMKE = await afiController9M0B1a.revokeStrategy.call(addresstvzUUED, addressK83RvMS, {from: accounts[1]});
//		const addressTekMHUc = await afiController9M0B1a.approveStrategy.call(addressWh71BpO, addressfOWMcvF, {from: accounts[4]});
//		const uintDYGmath = await afiController9M0B1a.balanceOf.call(addressRSqGn8q, {from: accounts[2]});
//		const addressUsirVYC = await afiController9M0B1a.setStrategy.call(addressPO5Haj, addressXfkgLf9, {from: accounts[5]});
//		const addressOhT6Fm4 = await afiController9M0B1a.withdraw.call(addressFeGneus, uintm9YzKrB, {from: accounts[4]});

		await expect(afiController9M0B1a.approveStrategy.call(addressWh71BpO, addressfOWMcvF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxIpbO9 = accounts[2]
		const afiControllercFY4PWR = await afiController.new(addressxIpbO9, {from: accounts[3]});
		const addressVkNOoPQ = accounts[2]
		const addressau1gp7a = accounts[3]
		const uintdbfw5fD = BigInt("2020")
//		const uintrheUN8 = await afiControllercFY4PWR.balanceOf.call(addressVkNOoPQ, {from: accounts[1]});
//		const addressxqN4S9o = await afiControllercFY4PWR.withdrawAll.call(addressau1gp7a, {from: accounts[2]});
//		const uintxLcvHJ = await afiControllercFY4PWR.setSplit.call(uintdbfw5fD, {from: accounts[2]});

		await expect(afiControllercFY4PWR.balanceOf.call(addressVkNOoPQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscoHVaP7 = accounts[0]
		const afiControllerq8veCPl = await afiController.new(addresscoHVaP7, {from: accounts[4]});
		const addressE6QFfMR = accounts[5]
		const addressedv5eaP = accounts[4]
		const addressj9otUK = accounts[3]
		const addressUQ36FwG = accounts[0]
		const addressqjBsBH8 = accounts[2]
		const addresse4niISJ = accounts[0]
		const uintaenDpH6 = BigInt("300")
		const addressdvnGkBQ = accounts[0]
		const addressyIonXGV = accounts[5]
		const addressFeyFmH9 = accounts[2]
//		const addressilClMKD = await afiControllerq8veCPl.setVault.call(addressedv5eaP, addressE6QFfMR, {from: accounts[3]});
//		const addresstaD07F4 = await afiControllerq8veCPl.revokeStrategy.call(addressUQ36FwG, addressj9otUK, {from: accounts[3]});
//		const addresssLcozpq = await afiControllerq8veCPl.setGovernance.call(addressqjBsBH8, {from: "0x0000000000000000000000000000000000000001"});
//		const addressE11TDUb = await afiControllerq8veCPl.withdrawAll.call(addresse4niISJ, {from: accounts[1]});
//		const addressMk3Fw0 = await afiControllerq8veCPl.yearn.call(addressyIonXGV, addressdvnGkBQ, uintaenDpH6, {from: accounts[1]});
//		const addressHVOE6f5 = await afiControllerq8veCPl.withdrawAll.call(addressFeyFmH9, {from: accounts[2]});

		await expect(afiControllerq8veCPl.setVault.call(addressedv5eaP, addressE6QFfMR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqsIKvEh = accounts[1]
		const afiController9M0B1a = await afiController.new(addressqsIKvEh, {from: accounts[1]});
		const addressOya12I3 = accounts[2]
		const addresswa7dWcn = accounts[1]
		const addressEFjJqlP = "0x0000000000000000000000000000000000000001"
		const addressAxDMT5Y = accounts[1]
		const addresswQKKkcI = accounts[3]
		const addressKhun0e9 = accounts[4]
		const addressgVEBVQS = accounts[0]
		const addresseNSJqgM = "0x0000000000000000000000000000000000000001"
		const uintST7904C = BigInt("1737")
		const addressPN49rqB = accounts[1]
		const addressdFBKMKE = await afiController9M0B1a.revokeStrategy.call(addresswa7dWcn, addressOya12I3, {from: accounts[1]});
//		const addressXIWLnkH = await afiController9M0B1a.withdrawAll.call(addressEFjJqlP, {from: accounts[1]});
//		const addressTekMHUc = await afiController9M0B1a.approveStrategy.call(addresswQKKkcI, addressAxDMT5Y, {from: accounts[4]});
//		const uintDYGmath = await afiController9M0B1a.balanceOf.call(addressKhun0e9, {from: accounts[2]});
//		const addressUsirVYC = await afiController9M0B1a.setStrategy.call(addresseNSJqgM, addressgVEBVQS, {from: accounts[5]});
//		const addressOhT6Fm4 = await afiController9M0B1a.withdraw.call(addressPN49rqB, uintST7904C, {from: accounts[4]});

		await expect(afiController9M0B1a.withdrawAll.call(addressEFjJqlP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressT7OtISB = accounts[1]
		const afiController9M0B1a = await afiController.new(addressT7OtISB, {from: accounts[1]});
		const addressuWJbiQL = accounts[5]
		const addressKk60e6 = "0x0000000000000000000000000000000000000001"
		const uintGS69Bmp = BigInt("1097")
		const addressbNu5EOZ = accounts[6]
//		const addressOuaaytJ = await afiController9M0B1a.inCaseStrategyTokenGetStuck.call(addressKk60e6, addressuWJbiQL, {from: accounts[1]});
//		const addressOhT6Fm4 = await afiController9M0B1a.withdraw.call(addressbNu5EOZ, uintGS69Bmp, {from: accounts[4]});

		await expect(afiController9M0B1a.inCaseStrategyTokenGetStuck.call(addressKk60e6, addressuWJbiQL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressq7mTOFf = accounts[2]
		const afiControllercFY4PWR = await afiController.new(addressq7mTOFf, {from: accounts[3]});
		const addressHtMQV0G = accounts[1]
		const addressjt9xUyU = accounts[0]
		const uintdlli4p = BigInt("552")
//		const addressXrf0uz8 = await afiControllercFY4PWR.setStrategy.call(addressjt9xUyU, addressHtMQV0G, {from: "0x0000000000000000000000000000000000000001"});
//		const uintxLcvHJ = await afiControllercFY4PWR.setSplit.call(uintdlli4p, {from: accounts[2]});

		await expect(afiControllercFY4PWR.setStrategy.call(addressjt9xUyU, addressHtMQV0G, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscOJU2nA = accounts[2]
		const afiControllercFY4PWR = await afiController.new(addresscOJU2nA, {from: accounts[3]});
		const addresswTZM1EV = accounts[0]
		const address8B6OUl = "0x0000000000000000000000000000000000000001"
		const addressDBD06TR = accounts[4]
		const addressBbPr8BM = accounts[1]
		const uintoy0gxEq = BigInt("536")
//		const addressH3rpMry = await afiControllercFY4PWR.setOneSplit.call(addresswTZM1EV, {from: "0x0000000000000000000000000000000000000001"});
//		const addressFx0ctG = await afiControllercFY4PWR.setConverter.call(addressBbPr8BM, addressDBD06TR, address8B6OUl, {from: accounts[2]});
//		const uintxLcvHJ = await afiControllercFY4PWR.setSplit.call(uintoy0gxEq, {from: accounts[2]});

		await expect(afiControllercFY4PWR.setOneSplit.call(addresswTZM1EV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLXl4Mbv = accounts[2]
		const afiControllercFY4PWR = await afiController.new(addressLXl4Mbv, {from: accounts[3]});
		const uintO3alTGK = BigInt("1459")
		const addressJSx4ubG = accounts[3]
		const uintp0LDFEz = BigInt("512")
		const uintsofQRR0 = BigInt("507")
		const addresscKDMON = accounts[2]
		const addressZt9GtQu = accounts[3]
//		const addressLSrtW2L = await afiControllercFY4PWR.inCaseTokensGetStuck.call(addressJSx4ubG, uintO3alTGK, {from: accounts[3]});
//		const uintxLcvHJ = await afiControllercFY4PWR.setSplit.call(uintp0LDFEz, {from: accounts[2]});
//		const uintRilqOaK = await afiControllercFY4PWR.getExpectedReturn.call(addressZt9GtQu, addresscKDMON, uintsofQRR0, {from: accounts[5]});

		await expect(afiControllercFY4PWR.inCaseTokensGetStuck.call(addressJSx4ubG, uintO3alTGK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresstj8k6Zi = accounts[0]
		const afiControllerJsJ3D2H = await afiController.new(addresstj8k6Zi, {from: accounts[4]});
		const addresskeV5UnR = accounts[4]
		const addresshniZtjN = accounts[2]
		const addressRrm8cWW = accounts[3]
		const uinteiABEo = BigInt("1295")
		const uintGWIkLYp = BigInt("457")
		const addressmlgUrMz = accounts[4]
		const addressLnvzDxO = await afiControllerJsJ3D2H.setConverter.call(addressRrm8cWW, addresshniZtjN, addresskeV5UnR, {from: accounts[4]});
//		const uintSxC75ra = await afiControllerJsJ3D2H.setSplit.call(uinteiABEo, {from: accounts[1]});
//		const addressYFRY48S = await afiControllerJsJ3D2H.earn.call(addressmlgUrMz, uintGWIkLYp, {from: accounts[4]});

		await expect(afiControllerJsJ3D2H.setSplit.call(uinteiABEo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLtcRFOu = accounts[0]
		const afiControllerfa4KXXM = await afiController.new(addressLtcRFOu, {from: accounts[3]});
		const uintmIZaix8 = BigInt("697")
		const addresseojOT3n = accounts[2]
		const addressByEk882 = accounts[4]
		const addressuwpSvKw = "0x0000000000000000000000000000000000000001"
		const uintVtuTHF2 = BigInt("1571")
		const addressjfTHQkB = accounts[3]
		const addressoLuIBqZ = accounts[2]
//		const uintA5tqPaH = await afiControllerfa4KXXM.getExpectedReturn.call(addressByEk882, addresseojOT3n, uintmIZaix8, {from: accounts[4]});
//		const address66NjHC = await afiControllerfa4KXXM.setStrategist.call(addressuwpSvKw, {from: accounts[5]});
//		const addressICTtMoZ = await afiControllerfa4KXXM.yearn.call(addressoLuIBqZ, addressjfTHQkB, uintVtuTHF2, {from: accounts[5]});

		await expect(afiControllerfa4KXXM.getExpectedReturn.call(addressByEk882, addresseojOT3n, uintmIZaix8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address0LRnpq = accounts[2]
		const afiControllercFY4PWR = await afiController.new(address0LRnpq, {from: accounts[3]});
		const addressCuiGTya = accounts[5]
		const addressFfqi2L7 = "0x0000000000000000000000000000000000000001"
		const addressSLUw8Bh = accounts[2]
		const addressxOooVeU = accounts[5]
		const addressk9r48nr = accounts[1]
		const addressjt2JdXs = accounts[4]
		const addressZT7zFyi = accounts[0]
//		const addressANqjje = await afiControllercFY4PWR.setRewards.call(addressCuiGTya, {from: accounts[4]});
//		const addressXGOLGBI = await afiControllercFY4PWR.setConverter.call(addressxOooVeU, addressSLUw8Bh, addressFfqi2L7, {from: accounts[0]});
//		const addresssdGiwBl = await afiControllercFY4PWR.setConverter.call(addressZT7zFyi, addressjt2JdXs, addressk9r48nr, {from: accounts[4]});

		await expect(afiControllercFY4PWR.setRewards.call(addressCuiGTya, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressHO3kjT0 = accounts[2]
		const afiControllercFY4PWR = await afiController.new(addressHO3kjT0, {from: accounts[3]});
		const uintPkI30XO = BigInt("253")
		const addressP39Cyh3 = accounts[4]
		const addressBHwusUp = accounts[4]
		const addressQRIKrhX = accounts[3]
//		const addressipeqUhS = await afiControllercFY4PWR.yearn.call(addressBHwusUp, addressP39Cyh3, uintPkI30XO, {from: accounts[3]});
//		const addressH3rpMry = await afiControllercFY4PWR.setOneSplit.call(addressQRIKrhX, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllercFY4PWR.yearn.call(addressBHwusUp, addressP39Cyh3, uintPkI30XO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressnETDVUm = accounts[3]
		const afiControllerWjgLvw = await afiController.new(addressnETDVUm, {from: accounts[2]});
		const addressQCoTg2j = accounts[4]
		const addressVSZX5ZB = accounts[0]
		const addressBzY1Y3w = accounts[0]
		const addressJh8Kvj0 = accounts[3]
		const addressrAQPnTk = accounts[3]
		const addressOWj5l6o = accounts[3]
		const addressk7Wjk76 = accounts[1]
		const uintqT7Z8CR = BigInt("1645")
		const addressRV00Tw0 = accounts[5]
		const addressRs7HvKR = accounts[3]
//		const addressF0MfrA = await afiControllerWjgLvw.setStrategy.call(addressVSZX5ZB, addressQCoTg2j, {from: accounts[2]});
//		const address4aob6f = await afiControllerWjgLvw.setOneSplit.call(addressBzY1Y3w, {from: accounts[0]});
//		const addresskSFPemT = await afiControllerWjgLvw.setConverter.call(addressOWj5l6o, addressrAQPnTk, addressJh8Kvj0, {from: accounts[4]});
//		const uintbrN5PId = await afiControllerWjgLvw.balanceOf.call(addressk7Wjk76, {from: accounts[4]});
//		const uintWRaAVbr = await afiControllerWjgLvw.getExpectedReturn.call(addressRs7HvKR, addressRV00Tw0, uintqT7Z8CR, {from: accounts[4]});

		await expect(afiControllerWjgLvw.setStrategy.call(addressVSZX5ZB, addressQCoTg2j, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvJfsUv6 = accounts[4]
		const afiControllerRjmbtH0 = await afiController.new(addressvJfsUv6, {from: accounts[2]});
		const uint66C4yc = BigInt("778")
		const uintvLcrGXE = BigInt("60")
		const uintcwctR6b = BigInt("2042")
		const addressMLhboE4 = accounts[4]
		const addresswaid5Be = accounts[2]
		const uintGSPzInx = BigInt("1180")
		const addressEHKoiN = "0x0000000000000000000000000000000000000001"
		const uintLM8CWuL = await afiControllerRjmbtH0.setSplit.call(uint66C4yc, {from: accounts[2]});
//		const uint9ONjTZ = await afiControllerRjmbtH0.setSplit.call(uintvLcrGXE, {from: accounts[3]});
//		const addressV0v39LZ = await afiControllerRjmbtH0.yearn.call(addresswaid5Be, addressMLhboE4, uintcwctR6b, {from: accounts[2]});
//		const addressQmilH8a = await afiControllerRjmbtH0.inCaseTokensGetStuck.call(addressEHKoiN, uintGSPzInx, {from: accounts[0]});

		await expect(afiControllerRjmbtH0.setSplit.call(uintvLcrGXE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscm6FxPj = accounts[1]
		const afiController9M0B1a = await afiController.new(addresscm6FxPj, {from: accounts[1]});
		const addressn6RM5CG = accounts[0]
		const addressI3zKzlV = accounts[3]
		const addressYX1d6VB = accounts[1]
		const addressB9p9rPR = await afiController9M0B1a.setOneSplit.call(addressn6RM5CG, {from: accounts[1]});
//		const addressH5zGsHB = await afiController9M0B1a.approveStrategy.call(addressYX1d6VB, addressI3zKzlV, {from: accounts[2]});

		await expect(afiController9M0B1a.approveStrategy.call(addressYX1d6VB, addressI3zKzlV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressUdDeE8d = accounts[0]
		const afiControllerfa4KXXM = await afiController.new(addressUdDeE8d, {from: accounts[3]});
		const addressk8SKZLh = accounts[0]
		const addressfJDN8U = accounts[3]
		const addresso25oxbu = accounts[1]
		const addressQ5w0VyB = await afiControllerfa4KXXM.approveStrategy.call(addressfJDN8U, addressk8SKZLh, {from: accounts[3]});
//		const address66NjHC = await afiControllerfa4KXXM.setStrategist.call(addresso25oxbu, {from: accounts[5]});

		await expect(afiControllerfa4KXXM.setStrategist.call(addresso25oxbu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressq0cbyJD = accounts[2]
		const afiControllercFY4PWR = await afiController.new(addressq0cbyJD, {from: accounts[3]});
		const addressF7IqrCp = accounts[2]
		const addresswNsp7J3 = accounts[3]
		const addresslaQjGI = await afiControllercFY4PWR.setGovernance.call(addressF7IqrCp, {from: accounts[3]});
//		const addressJgusa3X = await afiControllercFY4PWR.setGovernance.call(addresswNsp7J3, {from: accounts[0]});

		await expect(afiControllercFY4PWR.setGovernance.call(addresswNsp7J3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressWLZe5jK = accounts[2]
		const afiControllerUqvoPE2 = await afiController.new(addressWLZe5jK, {from: accounts[1]});
		const addressl962D0h = accounts[1]
		const addressGaDdt0N = accounts[0]
		const addressFkJj5gC = accounts[3]
		const uintKJDuEgN = BigInt("1328")
		const addressrr9bx1 = accounts[2]
		const addressR391eYq = await afiControllerUqvoPE2.setVault.call(addressGaDdt0N, addressl962D0h, {from: accounts[1]});
//		const addressRn0oPB3 = await afiControllerUqvoPE2.setGovernance.call(addressFkJj5gC, {from: accounts[0]});
//		const addressKzzVnrY = await afiControllerUqvoPE2.earn.call(addressrr9bx1, uintKJDuEgN, {from: accounts[3]});

		await expect(afiControllerUqvoPE2.setGovernance.call(addressFkJj5gC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresswW2wwse = accounts[3]
		const afiControllerNX5FrcL = await afiController.new(addresswW2wwse, {from: accounts[4]});
		const address8PiR64 = "0x0000000000000000000000000000000000000001"
		const addresslMFVQah = accounts[3]
		const addressOHzk3vy = "0x0000000000000000000000000000000000000001"
		const uintRgCVRF5 = BigInt("758")
		const addressUTBrerU = accounts[3]
		const uintqvT0Zdy = BigInt("762")
		const addressCrCJckX = "0x0000000000000000000000000000000000000001"
		const addresscvNzHPI = accounts[2]
		const uintZ4ypV34 = BigInt("1620")
		const addressZeUhoPX = accounts[0]
		const addressgVWxf2A = accounts[0]
		const addressGt4HmzC = await afiControllerNX5FrcL.setRewards.call(address8PiR64, {from: accounts[4]});
//		const addressJlpEL4 = await afiControllerNX5FrcL.revokeStrategy.call(addressOHzk3vy, addresslMFVQah, {from: accounts[1]});
//		const uintooImNJy = await afiControllerNX5FrcL.setSplit.call(uintRgCVRF5, {from: accounts[0]});
//		const addressq1DgcGe = await afiControllerNX5FrcL.setStrategist.call(addressUTBrerU, {from: accounts[4]});
//		const addressoc3TqMi = await afiControllerNX5FrcL.yearn.call(addresscvNzHPI, addressCrCJckX, uintqvT0Zdy, {from: accounts[2]});
//		const addresslUi70py = await afiControllerNX5FrcL.yearn.call(addressgVWxf2A, addressZeUhoPX, uintZ4ypV34, {from: accounts[2]});

		await expect(afiControllerNX5FrcL.revokeStrategy.call(addressOHzk3vy, addresslMFVQah, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})