const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressxPmAA0Q = accounts[1]
		const ControllerAeDPyea = await Controller.new(addressxPmAA0Q, {from: accounts[4]});
		const addressNLJnZXN = accounts[0]
		const addressvD7NI5m = accounts[1]
		const uintbUWNEw = BigInt("572")
		const addressVAM94w = await ControllerAeDPyea.setStrategy.call(addressvD7NI5m, addressNLJnZXN, {from: accounts[1]});
		const uintNomvQm = await ControllerAeDPyea.setSplit.call(uintbUWNEw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerAeDPyea.setStrategy.call(addressvD7NI5m, addressNLJnZXN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressT8b5pxT = accounts[5]
		const Controllerb98Fgcp = await Controller.new(addressT8b5pxT, {from: accounts[5]});
		const uintFU6pfC1 = BigInt("1358")
		const addressrWA6bww = accounts[3]
		const addressXs7pJK = accounts[0]
		const addressNb7VJ2T = accounts[4]
		const addressgcxyosA = accounts[0]
		const addressO0z7a5b = await Controllerb98Fgcp.inCaseTokensGetStuck.call(addressrWA6bww, uintFU6pfC1, {from: accounts[3]});
		const addressIPFnGBu = await Controllerb98Fgcp.setConverter.call(addressgcxyosA, addressNb7VJ2T, addressXs7pJK, {from: accounts[3]});

		await expect(Controllerb98Fgcp.inCaseTokensGetStuck.call(addressrWA6bww, uintFU6pfC1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVGDBAe = accounts[5]
		const Controller4ofXe4 = await Controller.new(addressVGDBAe, {from: accounts[4]});
		const addressykGEckY = accounts[2]
		const address1edkMo = accounts[2]
		const addresshkIEjpO = accounts[0]
		const addresssmCMg49 = accounts[4]
		const addressL10HnGt = await Controller4ofXe4.withdrawAll.call(addressykGEckY, {from: accounts[0]});
		const addressqaPAhwx = await Controller4ofXe4.setConverter.call(addresssmCMg49, addresshkIEjpO, address1edkMo, {from: accounts[3]});

		await expect(Controller4ofXe4.withdrawAll.call(addressykGEckY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressnvaFdln = accounts[3]
		const ControllertwqNsKp = await Controller.new(addressnvaFdln, {from: accounts[0]});
		const uintUTJTdek = BigInt("369")
		const addressLOYze6P = accounts[0]
		const addressNlbU9xz = accounts[1]
		const address422jHZ = accounts[4]
		const addressYCkhwBL = accounts[0]
		const addressyy0gA6C = accounts[3]
		const addressxCLZAQo = accounts[0]
		const uintsymQAQS = BigInt("580")
		const addressj84py9 = accounts[0]
		const addressM21o6bm = accounts[1]
		const uintkIvDaeE = BigInt("180")
		const addressZ0OSrRN = accounts[0]
		const addressh0y2HOq = await ControllertwqNsKp.yearn.call(addressNlbU9xz, addressLOYze6P, uintUTJTdek, {from: accounts[3]});
		const addressUOxPfyp = await ControllertwqNsKp.approveStrategy.call(addressYCkhwBL, address422jHZ, {from: accounts[4]});
		const addressTWm9yII = await ControllertwqNsKp.setVault.call(addressxCLZAQo, addressyy0gA6C, {from: accounts[5]});
		const uintAEawk2P = await ControllertwqNsKp.getExpectedReturn.call(addressM21o6bm, addressj84py9, uintsymQAQS, {from: accounts[4]});
		const addressEGl3BTj = await ControllertwqNsKp.earn.call(addressZ0OSrRN, uintkIvDaeE, {from: accounts[3]});

		await expect(ControllertwqNsKp.yearn.call(addressNlbU9xz, addressLOYze6P, uintUTJTdek, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressDkneXd8 = accounts[0]
		const ControllerzRNO5V = await Controller.new(addressDkneXd8, {from: accounts[1]});
		const uintf42H2nn = BigInt("1563")
		const uintvtlJP79 = BigInt("931")
		const addressP9F28lG = accounts[4]
		const addressFcOpj6P = accounts[2]
		const addressmfBlE6E = accounts[4]
		const uintobIfEdF = BigInt("80")
		const address81xS7P = accounts[4]
		const addressbcEsF1Q = accounts[3]
		const uinted45FP = await ControllerzRNO5V.setSplit.call(uintf42H2nn, {from: accounts[1]});
		const addressCADDq1m = await ControllerzRNO5V.inCaseTokensGetStuck.call(addressP9F28lG, uintvtlJP79, {from: accounts[4]});
		const addresssxH9x4g = await ControllerzRNO5V.approveStrategy.call(addressmfBlE6E, addressFcOpj6P, {from: accounts[2]});
		const uintEcfkC3O = await ControllerzRNO5V.setSplit.call(uintobIfEdF, {from: accounts[1]});
		const addressFqfJrwf = await ControllerzRNO5V.revokeStrategy.call(addressbcEsF1Q, address81xS7P, {from: accounts[4]});

		await expect(ControllerzRNO5V.inCaseTokensGetStuck.call(addressP9F28lG, uintvtlJP79, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxnzKHlH = accounts[2]
		const ControllerGCxF6V6 = await Controller.new(addressxnzKHlH, {from: accounts[4]});
		const addressEiVcul7 = accounts[4]
		const addressZzJs6Z = "0x0000000000000000000000000000000000000001"
		const uinta9P1f2 = BigInt("1113")
		const addressUNIcZW = accounts[0]
		const addresstKa7zN4 = accounts[3]
		const addressLmi4v2t = accounts[0]
		const addresszW3r43n = accounts[4]
		const addressYM8s3eo = accounts[4]
		const addressgY0ECI = await ControllerGCxF6V6.setOneSplit.call(addressEiVcul7, {from: accounts[3]});
		const addressaIhBSBJ = await ControllerGCxF6V6.setRewards.call(addressZzJs6Z, {from: accounts[3]});
		const addressj0VhmIB = await ControllerGCxF6V6.withdraw.call(addressUNIcZW, uinta9P1f2, {from: accounts[1]});
		const uintWHQ5wFa = await ControllerGCxF6V6.balanceOf.call(addresstKa7zN4, {from: accounts[5]});
		const addressiwgH6lp = await ControllerGCxF6V6.setOneSplit.call(addressLmi4v2t, {from: accounts[4]});
		const addressmWjHzmR = await ControllerGCxF6V6.approveStrategy.call(addressYM8s3eo, addresszW3r43n, {from: accounts[4]});

		await expect(ControllerGCxF6V6.setOneSplit.call(addressEiVcul7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjLsGjsF = accounts[4]
		const ControllerhCFazW = await Controller.new(addressjLsGjsF, {from: accounts[2]});
		const addressk6bM3bI = accounts[0]
		const addresskgHI7ra = accounts[3]
		const addressiZ8Zn3m = accounts[1]
		const addressXkiP8N4 = accounts[0]
		const addresskbVP3n = accounts[5]
		const uintvueQUtr = BigInt("1347")
		const addressI0jYjo4 = accounts[1]
		const addressl8bD2Rm = accounts[0]
		const uintaH9tpb6 = BigInt("317")
		const addresscD3g8L1 = "0x0000000000000000000000000000000000000001"
		const addressmjFE3bQ = accounts[2]
		const addressGRoNch2 = await ControllerhCFazW.setConverter.call(addressiZ8Zn3m, addresskgHI7ra, addressk6bM3bI, {from: accounts[2]});
		const addresseoJCrTZ = await ControllerhCFazW.setOneSplit.call(addressXkiP8N4, {from: accounts[0]});
		const addressZA3F1Wd = await ControllerhCFazW.setRewards.call(addresskbVP3n, {from: "0x0000000000000000000000000000000000000001"});
		const addressMvQnMA = await ControllerhCFazW.yearn.call(addressl8bD2Rm, addressI0jYjo4, uintvueQUtr, {from: accounts[1]});
		const uintcdCN2O9 = await ControllerhCFazW.getExpectedReturn.call(addressmjFE3bQ, addresscD3g8L1, uintaH9tpb6, {from: accounts[5]});

		await expect(ControllerhCFazW.setOneSplit.call(addressXkiP8N4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressP4Wjj69 = accounts[1]
		const ControllerDnB63P = await Controller.new(addressP4Wjj69, {from: "0x0000000000000000000000000000000000000001"});
		const addressPV9S0QT = accounts[3]
		const addressW7NwfCp = accounts[1]
		const addressakaRqu = accounts[0]
		const uintVt68sZL = BigInt("2025")
		const addressBuzEisv = accounts[1]
		const addressJIcGw1L = await ControllerDnB63P.setConverter.call(addressakaRqu, addressW7NwfCp, addressPV9S0QT, {from: accounts[2]});
		const uintvk4igy4 = await ControllerDnB63P.setSplit.call(uintVt68sZL, {from: accounts[2]});
		const addressPCAexwP = await ControllerDnB63P.setGovernance.call(addressBuzEisv, {from: accounts[5]});
	});

	it('test for Controller', async () => {
		const addressyG6uFr3 = accounts[1]
		const ControllerNteJ1kV = await Controller.new(addressyG6uFr3, {from: accounts[0]});
		const addressJfKFFyZ = accounts[4]
		const addressYKJS38o = accounts[4]
		const addressKfNRY8C = accounts[1]
		const addressvUp8cq = accounts[1]
		const addressDU1O3I7 = "0x0000000000000000000000000000000000000001"
		const addresszqOVV5M = accounts[4]
		const addressrBG14Uf = accounts[1]
		const addressrHS8Xsw = accounts[0]
		const addresshWNT5Jv = accounts[1]
		const addressDx05JUw = await ControllerNteJ1kV.setVault.call(addressYKJS38o, addressJfKFFyZ, {from: accounts[0]});
		const addressLx5Vc2 = await ControllerNteJ1kV.withdrawAll.call(addressKfNRY8C, {from: accounts[3]});
		const addressJx3XThY = await ControllerNteJ1kV.setConverter.call(addresszqOVV5M, addressDU1O3I7, addressvUp8cq, {from: accounts[0]});
		const addressitMWQIc = await ControllerNteJ1kV.setVault.call(addressrHS8Xsw, addressrBG14Uf, {from: accounts[3]});
		const uintNtmNdjQ = await ControllerNteJ1kV.balanceOf.call(addresshWNT5Jv, {from: accounts[5]});

		await expect(ControllerNteJ1kV.withdrawAll.call(addressKfNRY8C, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshYv1ces = accounts[1]
		const ControllerNteJ1kV = await Controller.new(addresshYv1ces, {from: accounts[0]});
		const address8l4XCm = accounts[4]
		const addressIEE3KOD = accounts[4]
		const addressDCbRRUT = accounts[1]
		const addressgb4Qj5c = accounts[1]
		const addressV9dh5l = accounts[1]
		const addressGAefE3b = accounts[4]
		const addressi4uLhF3 = accounts[1]
		const addressyul2oXJ = "0x0000000000000000000000000000000000000001"
		const addressGX7QAyY = accounts[4]
		const addressbS1PEHF = accounts[2]
		const addresscyYbde = accounts[0]
		const addressTeUDQf = accounts[4]
		const addressVBCsT90 = accounts[4]
		const addressp3byvdc = accounts[4]
		const addressdPALYjG = accounts[1]
		const addressDx05JUw = await ControllerNteJ1kV.setVault.call(addressIEE3KOD, address8l4XCm, {from: accounts[0]});
		const addressGTYsLLa = await ControllerNteJ1kV.setRewards.call(addressDCbRRUT, {from: accounts[1]});
		const addressLx5Vc2 = await ControllerNteJ1kV.withdrawAll.call(addressgb4Qj5c, {from: accounts[3]});
		const addressIDrbe3L = await ControllerNteJ1kV.setStrategy.call(addressGAefE3b, addressV9dh5l, {from: accounts[5]});
		const addressJx3XThY = await ControllerNteJ1kV.setConverter.call(addressGX7QAyY, addressyul2oXJ, addressi4uLhF3, {from: accounts[0]});
		const addressitMWQIc = await ControllerNteJ1kV.setVault.call(addresscyYbde, addressbS1PEHF, {from: accounts[3]});
		const addressNxOVkMu = await ControllerNteJ1kV.setConverter.call(addressp3byvdc, addressVBCsT90, addressTeUDQf, {from: accounts[2]});
		const uintNtmNdjQ = await ControllerNteJ1kV.balanceOf.call(addressdPALYjG, {from: accounts[5]});

		await expect(ControllerNteJ1kV.setRewards.call(addressDCbRRUT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address0AqPUo = accounts[1]
		const ControllerAeDPyea = await Controller.new(address0AqPUo, {from: accounts[4]});
		const addressxTMYrCW = "0x0000000000000000000000000000000000000001"
		const uinti1Hbrv = BigInt("2036")
		const uintiMszCHZ = BigInt("976")
		const addressJLmHAJp = await ControllerAeDPyea.setGovernance.call(addressxTMYrCW, {from: accounts[4]});
		const uintstsGTH = await ControllerAeDPyea.setSplit.call(uinti1Hbrv, {from: "0x0000000000000000000000000000000000000001"});
		const uintNomvQm = await ControllerAeDPyea.setSplit.call(uintiMszCHZ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerAeDPyea.setSplit.call(uinti1Hbrv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressb50riIg = accounts[5]
		const Controller4ofXe4 = await Controller.new(addressb50riIg, {from: accounts[4]});
		const addressR7aqy63 = accounts[2]
		const addressLJDslo8 = accounts[4]
		const addressfcUnF3v = accounts[2]
		const addresshKDiUUT = accounts[2]
		const addressG950Q3U = accounts[2]
		const addressKhZjqjP = accounts[1]
		const addresslCSfVaI = accounts[4]
		const addressX5I2u5I = accounts[4]
		const addressQECKPet = accounts[1]
		const addresskbrVzvf = accounts[1]
		const addressGlD2qsD = await Controller4ofXe4.approveStrategy.call(addressLJDslo8, addressR7aqy63, {from: accounts[5]});
		const addressL10HnGt = await Controller4ofXe4.withdrawAll.call(addressfcUnF3v, {from: accounts[0]});
		const addresseamuo83 = await Controller4ofXe4.setGovernance.call(addresshKDiUUT, {from: accounts[0]});
		const addressqaPAhwx = await Controller4ofXe4.setConverter.call(addresslCSfVaI, addressKhZjqjP, addressG950Q3U, {from: accounts[3]});
		const addressqw1RDQ = await Controller4ofXe4.setConverter.call(addresskbrVzvf, addressQECKPet, addressX5I2u5I, {from: accounts[0]});

		await expect(Controller4ofXe4.approveStrategy.call(addressLJDslo8, addressR7aqy63, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresspd9WX11 = accounts[1]
		const ControllerNteJ1kV = await Controller.new(addresspd9WX11, {from: accounts[0]});
		const addressXgyikkM = accounts[2]
		const addresshii0fiQ = accounts[4]
		const addresskHpM53c = accounts[4]
		const addressPZOlvnR = accounts[1]
		const address7Z1nSP = accounts[1]
		const addressPxedtNv = accounts[2]
		const addressiZPGc6L = accounts[4]
		const addressFQ2oG0L = accounts[1]
		const addressEQ6WCdc = "0x0000000000000000000000000000000000000001"
		const addresseOeVCFD = accounts[4]
		const addressx65seKA = accounts[2]
		const addressAQQHkRv = accounts[0]
		const uintpwrzORB = BigInt("1891")
		const addressTCcQ1Ua = accounts[4]
		const addressElOHHvb = accounts[4]
		const addressb90PhS = accounts[4]
		const addresseUCeu42 = accounts[1]
		const addresswsdlLGm = await ControllerNteJ1kV.setStrategist.call(addressXgyikkM, {from: "0x0000000000000000000000000000000000000001"});
		const addressDx05JUw = await ControllerNteJ1kV.setVault.call(addresskHpM53c, addresshii0fiQ, {from: accounts[0]});
		const addressGTYsLLa = await ControllerNteJ1kV.setRewards.call(addressPZOlvnR, {from: accounts[1]});
		const addressLx5Vc2 = await ControllerNteJ1kV.withdrawAll.call(address7Z1nSP, {from: accounts[3]});
		const addressIDrbe3L = await ControllerNteJ1kV.setStrategy.call(addressiZPGc6L, addressPxedtNv, {from: accounts[5]});
		const addressJx3XThY = await ControllerNteJ1kV.setConverter.call(addresseOeVCFD, addressEQ6WCdc, addressFQ2oG0L, {from: accounts[0]});
		const addressitMWQIc = await ControllerNteJ1kV.setVault.call(addressAQQHkRv, addressx65seKA, {from: accounts[3]});
		const uintZzdwC52 = await ControllerNteJ1kV.setSplit.call(uintpwrzORB, {from: accounts[3]});
		const addressNxOVkMu = await ControllerNteJ1kV.setConverter.call(addressb90PhS, addressElOHHvb, addressTCcQ1Ua, {from: accounts[2]});
		const uintNtmNdjQ = await ControllerNteJ1kV.balanceOf.call(addresseUCeu42, {from: accounts[5]});

		await expect(ControllerNteJ1kV.setStrategist.call(addressXgyikkM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressyqLVdog = "0x0000000000000000000000000000000000000001"
		const ControlleraRpYvGY = await Controller.new(addressyqLVdog, {from: accounts[1]});
		const addressdnM8CQc = accounts[0]
		const addressPbcVKS1 = "0x0000000000000000000000000000000000000001"
		const addresscCPSD1 = accounts[3]
		const addressR2R18o = accounts[0]
		const addressj9rjCYQ = accounts[2]
		const addressCJrH4a = await ControlleraRpYvGY.inCaseStrategyTokenGetStuck.call(addressPbcVKS1, addressdnM8CQc, {from: accounts[2]});
		const addressh6uIanR = await ControlleraRpYvGY.setStrategist.call(addresscCPSD1, {from: accounts[1]});
		const addressnZMURQ1 = await ControlleraRpYvGY.revokeStrategy.call(addressj9rjCYQ, addressR2R18o, {from: accounts[0]});

		await expect(ControlleraRpYvGY.inCaseStrategyTokenGetStuck.call(addressPbcVKS1, addressdnM8CQc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressqJUh0iP = "0x0000000000000000000000000000000000000001"
		const ControlleraRpYvGY = await Controller.new(addressqJUh0iP, {from: accounts[1]});
		const addressaruWILD = accounts[3]
		const addressgXWxAO9 = accounts[0]
		const addressrA5jntf = accounts[2]
		const addresscwVVZW4 = accounts[1]
		const address7UwRLp = accounts[4]
		const addressh6uIanR = await ControlleraRpYvGY.setStrategist.call(addressaruWILD, {from: accounts[1]});
		const addressnZMURQ1 = await ControlleraRpYvGY.revokeStrategy.call(addressrA5jntf, addressgXWxAO9, {from: accounts[0]});
		const addressmi984lG = await ControlleraRpYvGY.setStrategy.call(address7UwRLp, addresscwVVZW4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControlleraRpYvGY.revokeStrategy.call(addressrA5jntf, addressgXWxAO9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressE4aVkeE = accounts[5]
		const Controller4ofXe4 = await Controller.new(addressE4aVkeE, {from: accounts[4]});
		const uintLAE3jLf = BigInt("1367")
		const addresshp5O6a = accounts[1]
		const addressos0iYnE = accounts[3]
		const addresscrpKNoi = accounts[2]
		const addressgFU9qls = accounts[4]
		const addressWaYkFoE = accounts[1]
		const addressjcTktDJ = accounts[2]
		const addressslZWUae = accounts[4]
		const addressgmGEFe3 = accounts[1]
		const addressIa8nmix = accounts[1]
		const uintmFBWrlv = await Controller4ofXe4.getExpectedReturn.call(addressos0iYnE, addresshp5O6a, uintLAE3jLf, {from: accounts[1]});
		const addressGlD2qsD = await Controller4ofXe4.approveStrategy.call(addressgFU9qls, addresscrpKNoi, {from: accounts[5]});
		const addressL10HnGt = await Controller4ofXe4.withdrawAll.call(addressWaYkFoE, {from: accounts[0]});
		const addresseamuo83 = await Controller4ofXe4.setGovernance.call(addressjcTktDJ, {from: accounts[0]});
		const addressqw1RDQ = await Controller4ofXe4.setConverter.call(addressIa8nmix, addressgmGEFe3, addressslZWUae, {from: accounts[0]});

		await expect(Controller4ofXe4.getExpectedReturn.call(addressos0iYnE, addresshp5O6a, uintLAE3jLf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressY5SlQl6 = accounts[1]
		const ControllerNteJ1kV = await Controller.new(addressY5SlQl6, {from: accounts[0]});
		const addressD1oDVWH = accounts[4]
		const addressS0dOuJ = accounts[4]
		const uintZHSVPP0 = BigInt("1431")
		const address3Vs6yW = accounts[5]
		const addressQz9cVJ = accounts[2]
		const addressevTkQ2M = accounts[4]
		const addressNUhYxQb = accounts[2]
		const addressWOtBghp = accounts[1]
		const addressB6sRDmg = accounts[1]
		const addresshhsefKZ = accounts[4]
		const addresshcyfeV = accounts[1]
		const addressl5wtsXd = accounts[5]
		const addressgXsEzSM = accounts[4]
		const addresst6TqrrJ = accounts[2]
		const addressCwl5Kmf = accounts[0]
		const addressH3e8nve = accounts[4]
		const addressIyjkWhr = accounts[4]
		const addressGNFWCDd = accounts[4]
		const addressnxEzSB3 = accounts[1]
		const addressDx05JUw = await ControllerNteJ1kV.setVault.call(addressS0dOuJ, addressD1oDVWH, {from: accounts[0]});
		const addressGKV4mIR = await ControllerNteJ1kV.earn.call(address3Vs6yW, uintZHSVPP0, {from: "0x0000000000000000000000000000000000000001"});
		const addressGTYsLLa = await ControllerNteJ1kV.setRewards.call(addressQz9cVJ, {from: accounts[1]});
		const addressZefv4xy = await ControllerNteJ1kV.revokeStrategy.call(addressNUhYxQb, addressevTkQ2M, {from: accounts[0]});
		const addressLx5Vc2 = await ControllerNteJ1kV.withdrawAll.call(addressWOtBghp, {from: accounts[3]});
		const addressIDrbe3L = await ControllerNteJ1kV.setStrategy.call(addresshhsefKZ, addressB6sRDmg, {from: accounts[5]});
		const addressJx3XThY = await ControllerNteJ1kV.setConverter.call(addressgXsEzSM, addressl5wtsXd, addresshcyfeV, {from: accounts[0]});
		const addressitMWQIc = await ControllerNteJ1kV.setVault.call(addressCwl5Kmf, addresst6TqrrJ, {from: accounts[3]});
		const addressNxOVkMu = await ControllerNteJ1kV.setConverter.call(addressGNFWCDd, addressIyjkWhr, addressH3e8nve, {from: accounts[2]});
		const uintNtmNdjQ = await ControllerNteJ1kV.balanceOf.call(addressnxEzSB3, {from: accounts[5]});

		await expect(ControllerNteJ1kV.earn.call(address3Vs6yW, uintZHSVPP0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressQtIS2b3 = accounts[4]
		const ControlleruMVVTZY = await Controller.new(addressQtIS2b3, {from: accounts[5]});
		const addressvDEvn6r = accounts[4]
		const addressPfvJwjK = accounts[1]
		const addressbkowQBx = "0x0000000000000000000000000000000000000001"
		const addresslpbVhrn = accounts[3]
		const uintUwakGru = BigInt("2043")
		const addressJqaRJwl = await ControlleruMVVTZY.revokeStrategy.call(addressPfvJwjK, addressvDEvn6r, {from: accounts[5]});
		const addressQldJYLG = await ControlleruMVVTZY.setStrategist.call(addressbkowQBx, {from: accounts[0]});
		const uintj3Fwq1n = await ControlleruMVVTZY.balanceOf.call(addresslpbVhrn, {from: accounts[0]});
		const uintn5s43sH = await ControlleruMVVTZY.setSplit.call(uintUwakGru, {from: accounts[2]});

		await expect(ControlleruMVVTZY.setStrategist.call(addressbkowQBx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressiWXus2c = accounts[1]
		const ControllerAeDPyea = await Controller.new(addressiWXus2c, {from: accounts[4]});
		const uintKXSyaE = BigInt("1015")
		const addressgWK89cN = accounts[1]
		const address8zVHLr = accounts[0]
		const addressrGSwjR3 = accounts[3]
		const addressyasmV1z = accounts[0]
		const addressQWf5k0E = await ControllerAeDPyea.withdraw.call(addressgWK89cN, uintKXSyaE, {from: accounts[2]});
		const addressVAM94w = await ControllerAeDPyea.setStrategy.call(addressrGSwjR3, address8zVHLr, {from: accounts[1]});
		const addressGl1F0e7 = await ControllerAeDPyea.withdrawAll.call(addressyasmV1z, {from: accounts[0]});

		await expect(ControllerAeDPyea.withdraw.call(addressgWK89cN, uintKXSyaE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJatist = accounts[1]
		const ControllerNteJ1kV = await Controller.new(addressJatist, {from: accounts[0]});
		const addressYCPQ9QI = accounts[4]
		const addressMeLsBY6 = accounts[4]
		const addressMlRlVfJ = accounts[5]
		const addressVZXR19X = accounts[3]
		const addressogPXQDy = accounts[1]
		const addressBGYCOGU = accounts[1]
		const addressdna27T4 = accounts[4]
		const addressJ2lH0i6 = accounts[1]
		const addressUIvwdC2 = "0x0000000000000000000000000000000000000001"
		const addressTL9oBD = accounts[4]
		const addresszV4zXm2 = accounts[2]
		const addressEZmoErt = accounts[0]
		const addressiwlhDV = accounts[4]
		const addressf211Wd8 = accounts[4]
		const addresso5nhOnd = accounts[4]
		const addressm8S9aS = accounts[1]
		const addressDx05JUw = await ControllerNteJ1kV.setVault.call(addressMeLsBY6, addressYCPQ9QI, {from: accounts[0]});
		const addresshsrIjV = await ControllerNteJ1kV.setStrategy.call(addressVZXR19X, addressMlRlVfJ, {from: accounts[0]});
		const addressLx5Vc2 = await ControllerNteJ1kV.withdrawAll.call(addressogPXQDy, {from: accounts[3]});
		const addressIDrbe3L = await ControllerNteJ1kV.setStrategy.call(addressdna27T4, addressBGYCOGU, {from: accounts[5]});
		const addressJx3XThY = await ControllerNteJ1kV.setConverter.call(addressTL9oBD, addressUIvwdC2, addressJ2lH0i6, {from: accounts[0]});
		const addressitMWQIc = await ControllerNteJ1kV.setVault.call(addressEZmoErt, addresszV4zXm2, {from: accounts[3]});
		const addressNxOVkMu = await ControllerNteJ1kV.setConverter.call(addresso5nhOnd, addressf211Wd8, addressiwlhDV, {from: accounts[2]});
		const uintNtmNdjQ = await ControllerNteJ1kV.balanceOf.call(addressm8S9aS, {from: accounts[5]});

		await expect(ControllerNteJ1kV.setStrategy.call(addressVZXR19X, addressMlRlVfJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressevxlzRp = accounts[1]
		const ControllerAeDPyea = await Controller.new(addressevxlzRp, {from: accounts[4]});
		const addressL0hpGa = accounts[1]
		const addressSAY7EYP = accounts[2]
		const addressB9hZ7RQ = accounts[1]
		const addressj1k78ub = accounts[3]
		const addresslxkRbJg = await ControllerAeDPyea.inCaseStrategyTokenGetStuck.call(addressSAY7EYP, addressL0hpGa, {from: accounts[4]});
		const addressVAM94w = await ControllerAeDPyea.setStrategy.call(addressj1k78ub, addressB9hZ7RQ, {from: accounts[1]});

		await expect(ControllerAeDPyea.inCaseStrategyTokenGetStuck.call(addressSAY7EYP, addressL0hpGa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressWn2EV3g = accounts[1]
		const ControllerC0ltt3k = await Controller.new(addressWn2EV3g, {from: accounts[0]});
		const addressphaHf2H = accounts[1]
		const addressZGaQtIE = accounts[0]
		const addressi6jfJ8w = accounts[3]
		const uintceZaiug = BigInt("683")
		const addresstZ3AySx = accounts[5]
		const uintF8cMfw9 = await ControllerC0ltt3k.balanceOf.call(addressphaHf2H, {from: accounts[0]});
		const address19kKGx = await ControllerC0ltt3k.revokeStrategy.call(addressi6jfJ8w, addressZGaQtIE, {from: accounts[1]});
		const addresszE4sJa5 = await ControllerC0ltt3k.earn.call(addresstZ3AySx, uintceZaiug, {from: accounts[2]});

		await expect(ControllerC0ltt3k.balanceOf.call(addressphaHf2H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressn1jP7np = accounts[0]
		const ControllercY4ZesH = await Controller.new(addressn1jP7np, {from: accounts[4]});
		const addressLvTjJBn = accounts[4]
		const addressAHFxZj = accounts[5]
		const addressKQJw2Nl = accounts[3]
		const uintt4TVuJl = BigInt("1611")
		const addressuHi6Xoc = "0x0000000000000000000000000000000000000001"
		const addresswM6S1b3 = await ControllercY4ZesH.setOneSplit.call(addressLvTjJBn, {from: accounts[4]});
		const addressc2d9OOo = await ControllercY4ZesH.setStrategy.call(addressKQJw2Nl, addressAHFxZj, {from: "0x0000000000000000000000000000000000000001"});
		const addressXyW8w1e = await ControllercY4ZesH.inCaseTokensGetStuck.call(addressuHi6Xoc, uintt4TVuJl, {from: accounts[1]});

		await expect(ControllercY4ZesH.setStrategy.call(addressKQJw2Nl, addressAHFxZj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressE5ZTRkt = accounts[2]
		const ControllerkzdrIi4 = await Controller.new(addressE5ZTRkt, {from: accounts[3]});
		const uintV3ayInr = BigInt("1194")
		const addressqBcGd83 = accounts[4]
		const addressJLKYrQz = accounts[4]
		const addressI5abaU2 = accounts[5]
		const addressFaLyakv = accounts[0]
		const addressEwUkImb = accounts[2]
		const addressAxbz4g = await ControllerkzdrIi4.inCaseTokensGetStuck.call(addressqBcGd83, uintV3ayInr, {from: accounts[3]});
		const addressp4ctOUi = await ControllerkzdrIi4.setStrategy.call(addressI5abaU2, addressJLKYrQz, {from: accounts[3]});
		const addressTLLeTW = await ControllerkzdrIi4.setVault.call(addressEwUkImb, addressFaLyakv, {from: accounts[3]});

		await expect(ControllerkzdrIi4.inCaseTokensGetStuck.call(addressqBcGd83, uintV3ayInr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressiraFsW1 = accounts[1]
		const ControllerC0ltt3k = await Controller.new(addressiraFsW1, {from: accounts[0]});
		const addressYcyTk1R = accounts[0]
		const addressPOlLaDm = accounts[0]
		const addressdJ9Pw8p = accounts[5]
		const uintdC96SxO = BigInt("683")
		const addressbKhJJLr = accounts[6]
		const addressoPaNcG3 = await ControllerC0ltt3k.approveStrategy.call(addressPOlLaDm, addressYcyTk1R, {from: accounts[0]});
		const uinte1Tk1o3 = await ControllerC0ltt3k.balanceOf.call(addressdJ9Pw8p, {from: accounts[2]});
		const addresszE4sJa5 = await ControllerC0ltt3k.earn.call(addressbKhJJLr, uintdC96SxO, {from: accounts[2]});

		await expect(ControllerC0ltt3k.balanceOf.call(addressdJ9Pw8p, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address2CSDbE = accounts[1]
		const ControllerAeDPyea = await Controller.new(address2CSDbE, {from: accounts[4]});
		const addressiVpX13T = accounts[0]
		const addressJNYJkpl = accounts[0]
		const addressAybQOz4 = accounts[0]
		const uintTKW5Cfv = BigInt("718")
		const addressYmV7KC1 = accounts[1]
		const addressreyksPv = await ControllerAeDPyea.withdrawAll.call(addressiVpX13T, {from: accounts[4]});
		const addressTNtTroi = await ControllerAeDPyea.withdrawAll.call(addressJNYJkpl, {from: accounts[3]});
		const addresscTD711K = await ControllerAeDPyea.withdrawAll.call(addressAybQOz4, {from: accounts[1]});
		const addressQWf5k0E = await ControllerAeDPyea.withdraw.call(addressYmV7KC1, uintTKW5Cfv, {from: accounts[2]});

		await expect(ControllerAeDPyea.withdrawAll.call(addressiVpX13T, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressD7QVpFq = accounts[1]
		const ControllerAeDPyea = await Controller.new(addressD7QVpFq, {from: accounts[4]});
		const addressJ3s10D8 = "0x0000000000000000000000000000000000000001"
		const uintwf2NS0G = BigInt("1888")
		const addressEhIZ286 = accounts[4]
		const addresssRbMmd = accounts[2]
		const addressciPtx3X = accounts[3]
		const uintGya981U = BigInt("1012")
		const addressNmEQGQ5 = accounts[1]
		const addressUBHQ1mB = await ControllerAeDPyea.setRewards.call(addressJ3s10D8, {from: accounts[4]});
		const addressm7aN7v = await ControllerAeDPyea.yearn.call(addresssRbMmd, addressEhIZ286, uintwf2NS0G, {from: "0x0000000000000000000000000000000000000001"});
		const addresssumdwKC = await ControllerAeDPyea.setStrategist.call(addressciPtx3X, {from: accounts[3]});
		const addressQWf5k0E = await ControllerAeDPyea.withdraw.call(addressNmEQGQ5, uintGya981U, {from: accounts[2]});

		await expect(ControllerAeDPyea.yearn.call(addresssRbMmd, addressEhIZ286, uintwf2NS0G, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjyxDAF = accounts[1]
		const ControllerC0ltt3k = await Controller.new(addressjyxDAF, {from: accounts[0]});
		const uintpZjbx8L = BigInt("409")
		const addressI3nSg1W = accounts[0]
		const addressGExA13K = accounts[0]
		const uintLKNTS7x = BigInt("1335")
		const addressIeRByGC = accounts[0]
		const addresstyaqvRP = accounts[3]
		const uintkRo2ofW = BigInt("678")
		const addressgrXyqOC = accounts[5]
		const addressMbo7uqh = "0x0000000000000000000000000000000000000001"
		const addressV6B8zWu = accounts[3]
		const addresssAe3Zab = await ControllerC0ltt3k.yearn.call(addressGExA13K, addressI3nSg1W, uintpZjbx8L, {from: accounts[0]});
		const uintzAIplwS = await ControllerC0ltt3k.getExpectedReturn.call(addresstyaqvRP, addressIeRByGC, uintLKNTS7x, {from: accounts[4]});
		const addresszE4sJa5 = await ControllerC0ltt3k.earn.call(addressgrXyqOC, uintkRo2ofW, {from: accounts[2]});
		const addressBwZKnjq = await ControllerC0ltt3k.inCaseStrategyTokenGetStuck.call(addressV6B8zWu, addressMbo7uqh, {from: accounts[0]});

		await expect(ControllerC0ltt3k.yearn.call(addressGExA13K, addressI3nSg1W, uintpZjbx8L, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})