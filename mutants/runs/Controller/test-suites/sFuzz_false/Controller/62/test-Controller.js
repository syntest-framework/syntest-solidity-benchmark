const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addresspaPu0Bf = accounts[3]
		const ControllerMfyNun3 = await Controller.new(addresspaPu0Bf, {from: accounts[0]});
		const address7z8T1C = accounts[4]
		const addressK0NcTHA = accounts[5]
		const uint68hECY = BigInt("1526")
		const addressAK2FNC0 = accounts[5]
		const addressONqOKLd = accounts[3]
		const addressxB1jLiz = accounts[3]
		const addressE1ljHb8 = accounts[4]
		const addressxGiqDY5 = accounts[4]
		const uintvs8Mcfv = BigInt("447")
		const addressgop0QYB = accounts[3]
		const addressd75kFhx = await ControllerMfyNun3.setVault.call(addressK0NcTHA, address7z8T1C, {from: accounts[1]});
		const addressJS92jec = await ControllerMfyNun3.inCaseTokensGetStuck.call(addressAK2FNC0, uint68hECY, {from: accounts[4]});
		const addressTjPOjQT = await ControllerMfyNun3.withdrawAll.call(addressONqOKLd, {from: accounts[0]});
		const addressmpszhGO = await ControllerMfyNun3.setRewards.call(addressxB1jLiz, {from: accounts[1]});
		const addressxq3KuJz = await ControllerMfyNun3.approveStrategy.call(addressxGiqDY5, addressE1ljHb8, {from: accounts[1]});
		const addressYJlvYf9 = await ControllerMfyNun3.inCaseTokensGetStuck.call(addressgop0QYB, uintvs8Mcfv, {from: accounts[3]});

		await expect(ControllerMfyNun3.setVault.call(addressK0NcTHA, address7z8T1C, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjLHVj5i = accounts[3]
		const Controllerm4v0eg = await Controller.new(addressjLHVj5i, {from: accounts[2]});
		const addressP32pw9Y = accounts[1]
		const addressbsS5q36 = "0x0000000000000000000000000000000000000001"
		const addressjswgkN = accounts[0]
		const addressss3OUeL = accounts[0]
		const addressHiUtxZd = accounts[4]
		const addresspYPbm8v = accounts[2]
		const addressqgVG5v6 = await Controllerm4v0eg.withdrawAll.call(addressP32pw9Y, {from: "0x0000000000000000000000000000000000000001"});
		const addressq33Z93r = await Controllerm4v0eg.setStrategy.call(addressjswgkN, addressbsS5q36, {from: accounts[0]});
		const address0Yi2Dh = await Controllerm4v0eg.setVault.call(addressHiUtxZd, addressss3OUeL, {from: accounts[4]});
		const uintJ0IIZO = await Controllerm4v0eg.balanceOf.call(addresspYPbm8v, {from: accounts[4]});

		await expect(Controllerm4v0eg.withdrawAll.call(addressP32pw9Y, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresspnSFa7I = accounts[4]
		const ControllerLSCtYu6 = await Controller.new(addresspnSFa7I, {from: "0x0000000000000000000000000000000000000001"});
		const addressyEvrwTQ = accounts[1]
		const addressZT83LbR = accounts[0]
		const addressRIdKxCv = accounts[2]
		const addressR9HWbxb = accounts[3]
		const uintsOdh4rt = BigInt("605")
		const addressXNBKK3n = accounts[5]
		const addressGoHuRwc = accounts[0]
		const addressZbsGWUe = accounts[3]
		const addressaDN7oz = await ControllerLSCtYu6.inCaseStrategyTokenGetStuck.call(addressZT83LbR, addressyEvrwTQ, {from: accounts[1]});
		const addressvj3F2kV = await ControllerLSCtYu6.setVault.call(addressR9HWbxb, addressRIdKxCv, {from: accounts[1]});
		const uintJszt8CF = await ControllerLSCtYu6.getExpectedReturn.call(addressGoHuRwc, addressXNBKK3n, uintsOdh4rt, {from: accounts[1]});
		const addressBQtA61 = await ControllerLSCtYu6.withdrawAll.call(addressZbsGWUe, {from: accounts[1]});
	});

	it('test for Controller', async () => {
		const addressJ4diVYt = accounts[0]
		const ControllerG8yMIpE = await Controller.new(addressJ4diVYt, {from: accounts[2]});
		const addressqqgFgAa = accounts[4]
		const addressHaC0SOi = accounts[4]
		const addressH009ARH = accounts[2]
		const addressY0PCQGW = accounts[4]
		const addressZBy49RL = accounts[3]
		const addressdnr9AOC = accounts[0]
		const addressEdXlq3n = await ControllerG8yMIpE.setConverter.call(addressH009ARH, addressHaC0SOi, addressqqgFgAa, {from: accounts[4]});
		const addressh9jEq2H = await ControllerG8yMIpE.setRewards.call(addressY0PCQGW, {from: accounts[4]});
		const addressKiZIDHr = await ControllerG8yMIpE.setGovernance.call(addressZBy49RL, {from: accounts[4]});
		const addressTC0nHVC = await ControllerG8yMIpE.withdrawAll.call(addressdnr9AOC, {from: accounts[3]});

		await expect(ControllerG8yMIpE.setConverter.call(addressH009ARH, addressHaC0SOi, addressqqgFgAa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressksQlQrt = accounts[4]
		const ControllerkvXv1VE = await Controller.new(addressksQlQrt, {from: accounts[1]});
		const addressc30bpal = "0x0000000000000000000000000000000000000001"
		const uintrJVg1Ja = BigInt("1222")
		const addressBOnxFwL = accounts[5]
		const addressozlrYYg = accounts[5]
		const addresspuXEefS = accounts[4]
		const uintxjEykXy = BigInt("2004")
		const addressbk9ov7j = "0x0000000000000000000000000000000000000001"
		const addressMyvSqdq = accounts[3]
		const addressm1JPoBx = accounts[3]
		const addressi65BprK = await ControllerkvXv1VE.setStrategist.call(addressc30bpal, {from: accounts[2]});
		const addressYHplt1I = await ControllerkvXv1VE.earn.call(addressBOnxFwL, uintrJVg1Ja, {from: accounts[4]});
		const addressCMnnoTk = await ControllerkvXv1VE.approveStrategy.call(addresspuXEefS, addressozlrYYg, {from: "0x0000000000000000000000000000000000000001"});
		const addresspWR64Gd = await ControllerkvXv1VE.inCaseTokensGetStuck.call(addressbk9ov7j, uintxjEykXy, {from: accounts[2]});
		const addressdouIOPo = await ControllerkvXv1VE.revokeStrategy.call(addressm1JPoBx, addressMyvSqdq, {from: accounts[2]});

		await expect(ControllerkvXv1VE.setStrategist.call(addressc30bpal, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressYdAMhD = accounts[3]
		const ControlleraSCKvF = await Controller.new(addressYdAMhD, {from: accounts[2]});
		const addressO0R1WZj = accounts[2]
		const addressL1HfMbx = accounts[5]
		const uintDjreZ1k = BigInt("234")
		const addresspmvIC0z = await ControlleraSCKvF.approveStrategy.call(addressL1HfMbx, addressO0R1WZj, {from: accounts[2]});
		const uintt1N96dP = await ControlleraSCKvF.setSplit.call(uintDjreZ1k, {from: accounts[3]});

		await expect(ControlleraSCKvF.setSplit.call(uintDjreZ1k, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshVSiio8 = accounts[0]
		const Controllerqobqwm = await Controller.new(addresshVSiio8, {from: accounts[3]});
		const uintJ7p6woi = BigInt("1569")
		const addresslYvGxCW = accounts[4]
		const addressAq1qjul = "0x0000000000000000000000000000000000000001"
		const addresslQ1BY6q = accounts[0]
		const uintGfRivlN = BigInt("17")
		const addressmZWtwpG = accounts[2]
		const addresscTsP1fr = accounts[2]
		const addressKRPCCmo = accounts[4]
		const addressD0ERI6 = await Controllerqobqwm.inCaseTokensGetStuck.call(addresslYvGxCW, uintJ7p6woi, {from: accounts[3]});
		const address0WWOUq = await Controllerqobqwm.approveStrategy.call(addresslQ1BY6q, addressAq1qjul, {from: accounts[2]});
		const uintjHor5fE = await Controllerqobqwm.setSplit.call(uintGfRivlN, {from: accounts[3]});
		const addressossVZpd = await Controllerqobqwm.approveStrategy.call(addresscTsP1fr, addressmZWtwpG, {from: accounts[5]});
		const addressvWU3VyT = await Controllerqobqwm.setStrategist.call(addressKRPCCmo, {from: accounts[1]});

		await expect(Controllerqobqwm.inCaseTokensGetStuck.call(addresslYvGxCW, uintJ7p6woi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressbvgU65j = accounts[3]
		const ControlleraSCKvF = await Controller.new(addressbvgU65j, {from: accounts[2]});
		const addressevLDjSn = accounts[2]
		const addressxisTrH = accounts[5]
		const addressQWyoTl1 = accounts[1]
		const uint2tx0cj = BigInt("264")
		const address6VUHgj = accounts[2]
		const uintzgN6W2z = BigInt("234")
		const addresspmvIC0z = await ControlleraSCKvF.approveStrategy.call(addressxisTrH, addressevLDjSn, {from: accounts[2]});
		const uinta42yQHb = await ControlleraSCKvF.balanceOf.call(addressQWyoTl1, {from: accounts[2]});
		const addressJ1sBod = await ControlleraSCKvF.earn.call(address6VUHgj, uint2tx0cj, {from: accounts[4]});
		const uintt1N96dP = await ControlleraSCKvF.setSplit.call(uintzgN6W2z, {from: accounts[3]});

		await expect(ControlleraSCKvF.balanceOf.call(addressQWyoTl1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJ06W7a0 = accounts[3]
		const ControlleraSCKvF = await Controller.new(addressJ06W7a0, {from: accounts[2]});
		const addressLJF6rTv = accounts[3]
		const addressfsQd25G = accounts[3]
		const addressQLIDtPq = accounts[5]
		const address7sQJ9U = accounts[3]
		const uintORlAgJ = BigInt("234")
		const addresspmvIC0z = await ControlleraSCKvF.approveStrategy.call(addressfsQd25G, addressLJF6rTv, {from: accounts[2]});
		const addressgWB7gpJ = await ControlleraSCKvF.setStrategy.call(address7sQJ9U, addressQLIDtPq, {from: accounts[1]});
		const uintt1N96dP = await ControlleraSCKvF.setSplit.call(uintORlAgJ, {from: accounts[3]});

		await expect(ControlleraSCKvF.setStrategy.call(address7sQJ9U, addressQLIDtPq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshJuyqbm = accounts[3]
		const ControlleraSCKvF = await Controller.new(addresshJuyqbm, {from: accounts[2]});
		const uintLUa9eKA = BigInt("1431")
		const addressnlACk3X = accounts[2]
		const addresszgbl6i = accounts[2]
		const addressV9KHnD = accounts[5]
		const uintG2PE6SE = BigInt("635")
		const addressooTsRWG = await ControlleraSCKvF.earn.call(addressnlACk3X, uintLUa9eKA, {from: accounts[3]});
		const addresspmvIC0z = await ControlleraSCKvF.approveStrategy.call(addressV9KHnD, addresszgbl6i, {from: accounts[2]});
		const uintt1N96dP = await ControlleraSCKvF.setSplit.call(uintG2PE6SE, {from: accounts[3]});

		await expect(ControlleraSCKvF.earn.call(addressnlACk3X, uintLUa9eKA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjFs9c3a = accounts[3]
		const ControlleraSCKvF = await Controller.new(addressjFs9c3a, {from: accounts[2]});
		const addressjsTwa7z = accounts[1]
		const addresspzNfpKR = accounts[4]
		const addressG2Auei = accounts[1]
		const addressCyEpC3k = accounts[1]
		const addressW5Srl9 = accounts[3]
		const addressMnVajhr = accounts[5]
		const uintgxNHDv6 = BigInt("202")
		const addressfaRUV0 = await ControlleraSCKvF.revokeStrategy.call(addresspzNfpKR, addressjsTwa7z, {from: accounts[4]});
		const addressiZO9TWb = await ControlleraSCKvF.setStrategy.call(addressCyEpC3k, addressG2Auei, {from: accounts[0]});
		const addresspmvIC0z = await ControlleraSCKvF.approveStrategy.call(addressMnVajhr, addressW5Srl9, {from: accounts[2]});
		const uintt1N96dP = await ControlleraSCKvF.setSplit.call(uintgxNHDv6, {from: accounts[3]});

		await expect(ControlleraSCKvF.revokeStrategy.call(addresspzNfpKR, addressjsTwa7z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressgY1XwVl = accounts[3]
		const ControlleraSCKvF = await Controller.new(addressgY1XwVl, {from: accounts[2]});
		const uintW7Sw1qv = BigInt("179")
		const addressQgSKmDU = accounts[1]
		const addressE4PKdCj = accounts[2]
		const uintCelKnv9 = BigInt("1431")
		const addressZuAb9r2 = accounts[2]
		const addressw1Ds1jW = accounts[2]
		const addressYPLdVUa = accounts[4]
		const addressm4NOq3 = "0x0000000000000000000000000000000000000001"
		const addressNJBpzLN = accounts[3]
		const addressn6kGBYw = accounts[0]
		const uintIy1FeZb = BigInt("635")
		const addressXT3pfiS = await ControlleraSCKvF.yearn.call(addressE4PKdCj, addressQgSKmDU, uintW7Sw1qv, {from: accounts[0]});
		const addressooTsRWG = await ControlleraSCKvF.earn.call(addressZuAb9r2, uintCelKnv9, {from: accounts[3]});
		const addresspmvIC0z = await ControlleraSCKvF.approveStrategy.call(addressYPLdVUa, addressw1Ds1jW, {from: accounts[2]});
		const addressUJZPQk9 = await ControlleraSCKvF.approveStrategy.call(addressNJBpzLN, addressm4NOq3, {from: accounts[4]});
		const addressjKNjzQ5 = await ControlleraSCKvF.setOneSplit.call(addressn6kGBYw, {from: accounts[4]});
		const uintt1N96dP = await ControlleraSCKvF.setSplit.call(uintIy1FeZb, {from: accounts[3]});

		await expect(ControlleraSCKvF.yearn.call(addressE4PKdCj, addressQgSKmDU, uintW7Sw1qv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressFQz89bI = accounts[3]
		const ControlleraSCKvF = await Controller.new(addressFQz89bI, {from: accounts[2]});
		const addresshXrmuRz = accounts[1]
		const addressiRUAwZ8 = accounts[3]
		const addressB2QFNsB = accounts[5]
		const uintaCOTV5 = BigInt("1051")
		const addressuxz4tI = accounts[4]
		const addressAIyiRD = await ControlleraSCKvF.setGovernance.call(addresshXrmuRz, {from: accounts[3]});
		const addresspmvIC0z = await ControlleraSCKvF.approveStrategy.call(addressB2QFNsB, addressiRUAwZ8, {from: accounts[2]});
		const addressf4uDBZh = await ControlleraSCKvF.withdraw.call(addressuxz4tI, uintaCOTV5, {from: accounts[4]});

		await expect(ControlleraSCKvF.setGovernance.call(addresshXrmuRz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressXt97HfL = accounts[3]
		const ControlleraSCKvF = await Controller.new(addressXt97HfL, {from: accounts[2]});
		const addressoiVzbPm = accounts[2]
		const addressyaODFol = accounts[6]
		const addressRbwDSri = accounts[3]
		const addresspmvIC0z = await ControlleraSCKvF.approveStrategy.call(addressyaODFol, addressoiVzbPm, {from: accounts[2]});
		const addressHNeaOzi = await ControlleraSCKvF.setRewards.call(addressRbwDSri, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControlleraSCKvF.setRewards.call(addressRbwDSri, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresso2aCjrC = accounts[3]
		const ControlleraSCKvF = await Controller.new(addresso2aCjrC, {from: accounts[2]});
		const addresslioEEcN = accounts[3]
		const addressjjBZ6Dz = accounts[3]
		const addressk5hWguB = accounts[4]
		const addresswTKys13 = accounts[4]
		const addresspmvIC0z = await ControlleraSCKvF.approveStrategy.call(addressjjBZ6Dz, addresslioEEcN, {from: accounts[2]});
		const addressFaGbg1 = await ControlleraSCKvF.setStrategy.call(addresswTKys13, addressk5hWguB, {from: accounts[2]});

		await expect(ControlleraSCKvF.setStrategy.call(addresswTKys13, addressk5hWguB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressLpvd8hd = accounts[3]
		const ControlleraSCKvF = await Controller.new(addressLpvd8hd, {from: accounts[2]});
		const addressbQUc9dK = accounts[1]
		const addressqHRRgsX = accounts[0]
		const addressWXKLXKD = accounts[3]
		const addresseNVpkJ8 = accounts[5]
		const addressmpHtGhd = accounts[5]
		const addressrlGVZ7 = accounts[0]
		const addresst6GrZKg = await ControlleraSCKvF.approveStrategy.call(addressqHRRgsX, addressbQUc9dK, {from: accounts[2]});
		const addresspmvIC0z = await ControlleraSCKvF.approveStrategy.call(addresseNVpkJ8, addressWXKLXKD, {from: accounts[2]});
		const addressTGCCfAP = await ControlleraSCKvF.inCaseStrategyTokenGetStuck.call(addressrlGVZ7, addressmpHtGhd, {from: accounts[1]});

		await expect(ControlleraSCKvF.inCaseStrategyTokenGetStuck.call(addressrlGVZ7, addressmpHtGhd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressUHKpB06 = accounts[3]
		const ControlleraSCKvF = await Controller.new(addressUHKpB06, {from: accounts[2]});
		const addresskriWLxb = accounts[3]
		const address2PtzG4 = accounts[3]
		const uintGXdMTfR = BigInt("88")
		const addressFEXugfD = accounts[2]
		const addresscfFSGtV = accounts[0]
		const addressrW5K3IG = accounts[3]
		const addressfTQkqEM = accounts[0]
		const addressrjE1JaJ = accounts[5]
		const addresstS8CM4V = accounts[2]
		const addresspmvIC0z = await ControlleraSCKvF.approveStrategy.call(address2PtzG4, addresskriWLxb, {from: accounts[2]});
		const uintLMigwnL = await ControlleraSCKvF.getExpectedReturn.call(addresscfFSGtV, addressFEXugfD, uintGXdMTfR, {from: accounts[0]});
		const addresswcpEyzc = await ControlleraSCKvF.approveStrategy.call(addressfTQkqEM, addressrW5K3IG, {from: accounts[2]});
		const addressZ4dcPcN = await ControlleraSCKvF.setVault.call(addresstS8CM4V, addressrjE1JaJ, {from: accounts[0]});

		await expect(ControlleraSCKvF.getExpectedReturn.call(addresscfFSGtV, addressFEXugfD, uintGXdMTfR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresscPerlRr = accounts[3]
		const ControlleraSCKvF = await Controller.new(addresscPerlRr, {from: accounts[2]});
		const addresszInGQaf = accounts[2]
		const addressvjzOMnt = accounts[6]
		const addressIK8t8te = accounts[2]
		const addresspmvIC0z = await ControlleraSCKvF.approveStrategy.call(addressvjzOMnt, addresszInGQaf, {from: accounts[2]});
		const addressNSv6fqb = await ControlleraSCKvF.setOneSplit.call(addressIK8t8te, {from: accounts[3]});

		await expect(ControlleraSCKvF.setOneSplit.call(addressIK8t8te, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresssYz8AHG = accounts[3]
		const ControlleraSCKvF = await Controller.new(addresssYz8AHG, {from: accounts[2]});
		const uintjvtyfML = BigInt("1115")
		const addressWUq0fDO = accounts[4]
		const addressrZEGr0 = accounts[0]
		const addressQvuOSlj = accounts[3]
		const addressCQEJOn7 = accounts[3]
		const addressAu55wz8 = await ControlleraSCKvF.withdraw.call(addressWUq0fDO, uintjvtyfML, {from: accounts[0]});
		const uint8edMU3 = await ControlleraSCKvF.balanceOf.call(addressrZEGr0, {from: accounts[1]});
		const addresspmvIC0z = await ControlleraSCKvF.approveStrategy.call(addressCQEJOn7, addressQvuOSlj, {from: accounts[2]});

		await expect(ControlleraSCKvF.withdraw.call(addressWUq0fDO, uintjvtyfML, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})