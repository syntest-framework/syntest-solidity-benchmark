const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressXjNuO7q = accounts[0]
		const afiControllerAkcEfSv = await afiController.new(addressXjNuO7q, {from: accounts[4]});
		const addressqGzpchr = accounts[1]
		const addressq3MhEo9 = "0x0000000000000000000000000000000000000001"
		const addressJZCdQgw = "0x0000000000000000000000000000000000000001"
		const addressnjzSXq = accounts[0]
		const addressqlMd2ma = await afiControllerAkcEfSv.setGovernance.call(addressqGzpchr, {from: accounts[4]});
//		const uintRXTEpTF = await afiControllerAkcEfSv.balanceOf.call(addressq3MhEo9, {from: accounts[3]});
//		const addressV9DjK2 = await afiControllerAkcEfSv.inCaseStrategyTokenGetStuck.call(addressnjzSXq, addressJZCdQgw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerAkcEfSv.balanceOf.call(addressq3MhEo9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresspNN3GvD = accounts[2]
		const afiControllercR2RfBR = await afiController.new(addresspNN3GvD, {from: accounts[5]});
		const addressw5uXD2c = accounts[3]
		const addressIEcCLp4 = accounts[0]
		const address9cZryw = accounts[4]
		const addressqMwG1vM = accounts[1]
		const addressq87vJR1 = accounts[2]
		const addressPqEWwyL = accounts[2]
		const addressoNc0rzC = accounts[4]
//		const addressvnFZwri = await afiControllercR2RfBR.setRewards.call(addressw5uXD2c, {from: accounts[4]});
//		const addressVTwa7VN = await afiControllercR2RfBR.setVault.call(address9cZryw, addressIEcCLp4, {from: accounts[5]});
//		const addressW0Yx2cW = await afiControllercR2RfBR.withdrawAll.call(addressqMwG1vM, {from: accounts[5]});
//		const addresstX3Q0n = await afiControllercR2RfBR.setConverter.call(addressoNc0rzC, addressPqEWwyL, addressq87vJR1, {from: accounts[0]});

		await expect(afiControllercR2RfBR.setRewards.call(addressw5uXD2c, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressBU7tEmQ = accounts[2]
		const afiControllerSx4jc0 = await afiController.new(addressBU7tEmQ, {from: accounts[0]});
		const addresswotr7LU = accounts[5]
		const addressIYNul4D = accounts[4]
		const addresscMZOFQf = "0x0000000000000000000000000000000000000001"
		const addressAKB1HN0 = accounts[3]
		const addressCert6SW = accounts[2]
//		const addressPcRTvnd = await afiControllerSx4jc0.revokeStrategy.call(addressIYNul4D, addresswotr7LU, {from: "0x0000000000000000000000000000000000000001"});
//		const addresslCngC2s = await afiControllerSx4jc0.revokeStrategy.call(addressAKB1HN0, addresscMZOFQf, {from: accounts[4]});
//		const addresspubk61H = await afiControllerSx4jc0.withdrawAll.call(addressCert6SW, {from: accounts[5]});

		await expect(afiControllerSx4jc0.revokeStrategy.call(addressIYNul4D, addresswotr7LU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressAM2RysC = accounts[2]
		const afiControllerzQ6nMWd = await afiController.new(addressAM2RysC, {from: accounts[3]});
		const addressk1gdG3S = accounts[5]
		const addressOHe7hxd = accounts[1]
		const addressTMByfJz = accounts[2]
		const addressJZPpdQ = accounts[3]
		const uintFd1EkN = BigInt("1987")
		const addresszy5L3U6 = accounts[1]
		const addressQLQv5RF = accounts[5]
		const address3KY9ZJ = accounts[2]
		const addressjh2aopY = accounts[2]
		const addressQUXSJD = accounts[1]
//		const addressGdfo5x = await afiControllerzQ6nMWd.setStrategist.call(addressk1gdG3S, {from: accounts[1]});
//		const addressT7ZiIok = await afiControllerzQ6nMWd.setConverter.call(addressJZPpdQ, addressTMByfJz, addressOHe7hxd, {from: accounts[0]});
//		const uintOrp6Rfw = await afiControllerzQ6nMWd.getExpectedReturn.call(addressQLQv5RF, addresszy5L3U6, uintFd1EkN, {from: accounts[0]});
//		const addresseDnqodj = await afiControllerzQ6nMWd.setConverter.call(addressQUXSJD, addressjh2aopY, address3KY9ZJ, {from: accounts[5]});

		await expect(afiControllerzQ6nMWd.setStrategist.call(addressk1gdG3S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressy0yZiO5 = accounts[5]
		const afiControllertyX52OX = await afiController.new(addressy0yZiO5, {from: "0x0000000000000000000000000000000000000001"});
		const addresstUSFk40 = accounts[0]
		const addresstokgtoE = "0x0000000000000000000000000000000000000001"
		const addresszGp36s = accounts[3]
		const addressBwtCr7f = accounts[5]
		const addressMVzNUv1 = accounts[3]
		const addressySU0UoP = "0x0000000000000000000000000000000000000001"
		const uintsIV0kSs = BigInt("1963")
		const addressBR26HmZ = accounts[3]
		const addressC47hkt7 = await afiControllertyX52OX.revokeStrategy.call(addresstokgtoE, addresstUSFk40, {from: "0x0000000000000000000000000000000000000001"});
		const addressE6Ldsau = await afiControllertyX52OX.setVault.call(addressBwtCr7f, addresszGp36s, {from: accounts[3]});
		const uintW3sjDcI = await afiControllertyX52OX.balanceOf.call(addressMVzNUv1, {from: accounts[1]});
		const addressSlZuRX8 = await afiControllertyX52OX.setStrategist.call(addressySU0UoP, {from: accounts[2]});
		const addresslQwkhf = await afiControllertyX52OX.earn.call(addressBR26HmZ, uintsIV0kSs, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for afiController', async () => {
		const addressizMBa2r = accounts[5]
		const afiControllerdJjPVpE = await afiController.new(addressizMBa2r, {from: accounts[3]});
		const uintbFf9EUf = BigInt("1674")
		const addressDKkMb95 = accounts[1]
		const addressUJdQjWD = accounts[2]
		const addresskDgRazX = accounts[1]
		const addresssX6Uc4 = accounts[3]
		const addressmB2uNsR = accounts[2]
		const addressYKG0pzN = accounts[2]
//		const addresshbrCxyh = await afiControllerdJjPVpE.withdraw.call(addressDKkMb95, uintbFf9EUf, {from: accounts[3]});
//		const addressyaIlgT = await afiControllerdJjPVpE.approveStrategy.call(addresskDgRazX, addressUJdQjWD, {from: accounts[2]});
//		const addressfPQel5V = await afiControllerdJjPVpE.setRewards.call(addresssX6Uc4, {from: accounts[2]});
//		const addressPlppJTK = await afiControllerdJjPVpE.revokeStrategy.call(addressYKG0pzN, addressmB2uNsR, {from: accounts[2]});

		await expect(afiControllerdJjPVpE.withdraw.call(addressDKkMb95, uintbFf9EUf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxD82Qz1 = accounts[1]
		const afiControllercYvF4rP = await afiController.new(addressxD82Qz1, {from: accounts[1]});
		const addressy1PieyA = accounts[5]
		const addressMXL6ClV = accounts[1]
		const addressx8gSsnB = accounts[2]
		const addressl7kyPa9 = accounts[5]
		const addressvxWkrpS = accounts[2]
		const addressm6YPLV = accounts[1]
//		const addressYfAvFBk = await afiControllercYvF4rP.setOneSplit.call(addressy1PieyA, {from: accounts[4]});
//		const addressPtRISh3 = await afiControllercYvF4rP.setConverter.call(addressl7kyPa9, addressx8gSsnB, addressMXL6ClV, {from: accounts[1]});
//		const addressEvuZb8J = await afiControllercYvF4rP.withdrawAll.call(addressvxWkrpS, {from: accounts[2]});
//		const addressD61LUFV = await afiControllercYvF4rP.withdrawAll.call(addressm6YPLV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllercYvF4rP.setOneSplit.call(addressy1PieyA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressixKlL8D = accounts[3]
		const afiControllertOxRMF5 = await afiController.new(addressixKlL8D, {from: accounts[3]});
		const uintZ1zDSVe = BigInt("585")
		const addressuKH13vV = accounts[4]
		const addressMlraf7e = accounts[1]
		const address1Yxvw9 = accounts[0]
		const uintkX4Ktrd = BigInt("794")
		const addressEqbqS8p = accounts[3]
//		const uintNLqoMqC = await afiControllertOxRMF5.setSplit.call(uintZ1zDSVe, {from: accounts[0]});
//		const addressDLxywax = await afiControllertOxRMF5.setStrategist.call(addressuKH13vV, {from: accounts[3]});
//		const uint6xUjPR = await afiControllertOxRMF5.balanceOf.call(addressMlraf7e, {from: accounts[3]});
//		const addressIy60s7T = await afiControllertOxRMF5.setGovernance.call(address1Yxvw9, {from: accounts[0]});
//		const addressRqfF9F = await afiControllertOxRMF5.withdraw.call(addressEqbqS8p, uintkX4Ktrd, {from: accounts[4]});

		await expect(afiControllertOxRMF5.setSplit.call(uintZ1zDSVe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressv9YM18P = accounts[5]
		const afiControllerdJjPVpE = await afiController.new(addressv9YM18P, {from: accounts[3]});
		const uintfscrMeX = BigInt("802")
		const addressWiC2kUA = accounts[2]
		const uintnpU8MxL = BigInt("1674")
		const addressJ9fLfk = accounts[2]
		const addressUF2BfND = accounts[2]
		const addressKyqn1Kx = accounts[1]
		const addressgLQkYb = accounts[3]
		const addressr55D3HR = accounts[2]
		const addressJkwaLt = accounts[2]
//		const addressCJs18XH = await afiControllerdJjPVpE.earn.call(addressWiC2kUA, uintfscrMeX, {from: accounts[2]});
//		const addresshbrCxyh = await afiControllerdJjPVpE.withdraw.call(addressJ9fLfk, uintnpU8MxL, {from: accounts[3]});
//		const addressyaIlgT = await afiControllerdJjPVpE.approveStrategy.call(addressKyqn1Kx, addressUF2BfND, {from: accounts[2]});
//		const addressfPQel5V = await afiControllerdJjPVpE.setRewards.call(addressgLQkYb, {from: accounts[2]});
//		const addressPlppJTK = await afiControllerdJjPVpE.revokeStrategy.call(addressJkwaLt, addressr55D3HR, {from: accounts[2]});

		await expect(afiControllerdJjPVpE.earn.call(addressWiC2kUA, uintfscrMeX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressmadAsmO = accounts[2]
		const afiControllercR2RfBR = await afiController.new(addressmadAsmO, {from: accounts[5]});
		const uintNpCfkkf = BigInt("2039")
		const addresscej5Aeo = accounts[0]
		const addressmWQT2hQ = accounts[1]
		const uintMirRVIY = BigInt("338")
		const addressgzueRRS = accounts[0]
		const addressiEPHPSS = accounts[5]
		const addressDTRkJgH = accounts[3]
		const addressnEZtPej = accounts[0]
		const addressa0Mo8cQ = accounts[5]
		const addressr6lER7R = accounts[1]
		const addressMsD6h2 = accounts[2]
		const addressWdWjg7k = accounts[2]
		const addressTQXrT7 = accounts[4]
//		const addressLaz9LPy = await afiControllercR2RfBR.yearn.call(addressmWQT2hQ, addresscej5Aeo, uintNpCfkkf, {from: "0x0000000000000000000000000000000000000001"});
//		const uintbUm6F4C = await afiControllercR2RfBR.getExpectedReturn.call(addressiEPHPSS, addressgzueRRS, uintMirRVIY, {from: accounts[4]});
//		const addressvnFZwri = await afiControllercR2RfBR.setRewards.call(addressDTRkJgH, {from: accounts[4]});
//		const addressVTwa7VN = await afiControllercR2RfBR.setVault.call(addressa0Mo8cQ, addressnEZtPej, {from: accounts[5]});
//		const addressW0Yx2cW = await afiControllercR2RfBR.withdrawAll.call(addressr6lER7R, {from: accounts[5]});
//		const addresstX3Q0n = await afiControllercR2RfBR.setConverter.call(addressTQXrT7, addressWdWjg7k, addressMsD6h2, {from: accounts[0]});

		await expect(afiControllercR2RfBR.yearn.call(addressmWQT2hQ, addresscej5Aeo, uintNpCfkkf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresspTZxc20 = accounts[3]
		const afiControllerER2dQV3 = await afiController.new(addresspTZxc20, {from: accounts[2]});
		const uintYMaWpXw = BigInt("1904")
		const addressxIiSJCO = accounts[3]
		const addressWzaqkIY = accounts[5]
		const address64g9p4 = accounts[0]
		const addresstkpKWq8 = accounts[4]
		const uintEwiXMY = BigInt("322")
		const addressyxx3PZm = accounts[4]
		const addressVa7KId0 = accounts[0]
//		const addressss2iNsL = await afiControllerER2dQV3.inCaseTokensGetStuck.call(addressxIiSJCO, uintYMaWpXw, {from: "0x0000000000000000000000000000000000000001"});
//		const addressqeiqkSt = await afiControllerER2dQV3.withdrawAll.call(addressWzaqkIY, {from: accounts[4]});
//		const addressXeDF99m = await afiControllerER2dQV3.setGovernance.call(address64g9p4, {from: accounts[4]});
//		const addressRdoWElK = await afiControllerER2dQV3.setOneSplit.call(addresstkpKWq8, {from: "0x0000000000000000000000000000000000000001"});
//		const addressozpiwKj = await afiControllerER2dQV3.yearn.call(addressVa7KId0, addressyxx3PZm, uintEwiXMY, {from: accounts[1]});

		await expect(afiControllerER2dQV3.inCaseTokensGetStuck.call(addressxIiSJCO, uintYMaWpXw, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressV1qmrxs = accounts[1]
		const afiControllercYvF4rP = await afiController.new(addressV1qmrxs, {from: accounts[1]});
		const uintZ4XIN7z = BigInt("978")
		const addressf1chbIg = accounts[0]
		const addressVWxtSg = accounts[0]
		const addressNKBFmGw = accounts[5]
		const addressrMMU2zT = accounts[1]
		const address2nYc5F = accounts[0]
		const addressMqZtnVE = accounts[1]
		const addressatVvMAp = accounts[2]
		const addressoAaNFj1 = accounts[1]
		const addressdT6aGNW = accounts[1]
		const uintHnPKhxa = BigInt("804")
		const addressiBLN9tW = accounts[2]
//		const uintxc028St = await afiControllercYvF4rP.getExpectedReturn.call(addressVWxtSg, addressf1chbIg, uintZ4XIN7z, {from: accounts[1]});
//		const addressYfAvFBk = await afiControllercYvF4rP.setOneSplit.call(addressNKBFmGw, {from: accounts[4]});
//		const addresstyB1EZa = await afiControllercYvF4rP.inCaseStrategyTokenGetStuck.call(address2nYc5F, addressrMMU2zT, {from: accounts[4]});
//		const addressPtRISh3 = await afiControllercYvF4rP.setConverter.call(addressoAaNFj1, addressatVvMAp, addressMqZtnVE, {from: accounts[1]});
//		const addressD61LUFV = await afiControllercYvF4rP.withdrawAll.call(addressdT6aGNW, {from: "0x0000000000000000000000000000000000000001"});
//		const addressa1S903O = await afiControllercYvF4rP.withdraw.call(addressiBLN9tW, uintHnPKhxa, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllercYvF4rP.getExpectedReturn.call(addressVWxtSg, addressf1chbIg, uintZ4XIN7z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvDMumt = accounts[2]
		const afiControllerSx4jc0 = await afiController.new(addressvDMumt, {from: accounts[0]});
		const addressClFpICh = "0x0000000000000000000000000000000000000001"
		const addressAbRr7sZ = accounts[0]
		const uintaPllFaX = BigInt("160")
		const addressgbGmybB = accounts[3]
		const addressaVsDuge = accounts[3]
		const addressbs7WypK = accounts[6]
		const addressZDNPcvG = accounts[5]
//		const addresseEJWNWZ = await afiControllerSx4jc0.setVault.call(addressAbRr7sZ, addressClFpICh, {from: "0x0000000000000000000000000000000000000001"});
//		const addressB5hd3FZ = await afiControllerSx4jc0.withdraw.call(addressgbGmybB, uintaPllFaX, {from: accounts[2]});
//		const addressUnsAWM = await afiControllerSx4jc0.withdrawAll.call(addressaVsDuge, {from: accounts[1]});
//		const addressPcRTvnd = await afiControllerSx4jc0.revokeStrategy.call(addressZDNPcvG, addressbs7WypK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerSx4jc0.setVault.call(addressAbRr7sZ, addressClFpICh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressevt1uka = accounts[2]
		const afiControllerSx4jc0 = await afiController.new(addressevt1uka, {from: accounts[0]});
		const addresstQHWrNY = accounts[5]
		const addressuvmN6Vv = accounts[1]
		const uintIekvmYy = BigInt("160")
		const addressZc1hsPA = accounts[4]
		const addressxQD4njE = accounts[6]
		const addresshChIJl3 = accounts[4]
//		const addresss1VGoxb = await afiControllerSx4jc0.inCaseStrategyTokenGetStuck.call(addressuvmN6Vv, addresstQHWrNY, {from: accounts[3]});
//		const addressB5hd3FZ = await afiControllerSx4jc0.withdraw.call(addressZc1hsPA, uintIekvmYy, {from: accounts[2]});
//		const addressPcRTvnd = await afiControllerSx4jc0.revokeStrategy.call(addresshChIJl3, addressxQD4njE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerSx4jc0.inCaseStrategyTokenGetStuck.call(addressuvmN6Vv, addresstQHWrNY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresswGqqyQs = accounts[1]
		const afiControllerMtY6mVU = await afiController.new(addresswGqqyQs, {from: accounts[2]});
		const addressk746r4c = accounts[1]
		const addressusv1Vpd = accounts[4]
		const uintuH2EO9c = BigInt("970")
		const addressez77im = accounts[1]
		const addressC9bgjxA = "0x0000000000000000000000000000000000000001"
		const addressgKvh42M = accounts[1]
		const addresswA1jFLl = accounts[5]
//		const addressLrNp9cN = await afiControllerMtY6mVU.setStrategy.call(addressusv1Vpd, addressk746r4c, {from: accounts[1]});
//		const addressWKnaM3H = await afiControllerMtY6mVU.withdraw.call(addressez77im, uintuH2EO9c, {from: accounts[5]});
//		const addressfNINbDY = await afiControllerMtY6mVU.revokeStrategy.call(addressgKvh42M, addressC9bgjxA, {from: accounts[2]});
//		const uints83ZeTc = await afiControllerMtY6mVU.balanceOf.call(addresswA1jFLl, {from: accounts[2]});

		await expect(afiControllerMtY6mVU.setStrategy.call(addressusv1Vpd, addressk746r4c, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressKxRbnqP = accounts[4]
		const afiControllerh7cGGfq = await afiController.new(addressKxRbnqP, {from: accounts[4]});
		const addressjl9wKWH = accounts[4]
		const addressCM958mm = accounts[3]
		const addressF7yfT0p = accounts[4]
		const addressT6arOLs = accounts[3]
		const addressPctkmr1 = "0x0000000000000000000000000000000000000001"
		const addressgj8f6Q = accounts[4]
		const addressWWG2Dy6 = accounts[5]
		const uintTT6nHRn = BigInt("1313")
		const addressWqFp8jA = "0x0000000000000000000000000000000000000001"
//		const addressu8Tn1D9 = await afiControllerh7cGGfq.approveStrategy.call(addressCM958mm, addressjl9wKWH, {from: accounts[0]});
//		const addressIyqIAG7 = await afiControllerh7cGGfq.approveStrategy.call(addressT6arOLs, addressF7yfT0p, {from: accounts[4]});
//		const addressJW42IVf = await afiControllerh7cGGfq.setStrategist.call(addressPctkmr1, {from: accounts[3]});
//		const addressiS3WVg = await afiControllerh7cGGfq.setVault.call(addressWWG2Dy6, addressgj8f6Q, {from: accounts[0]});
//		const addresspWWPkRH = await afiControllerh7cGGfq.withdraw.call(addressWqFp8jA, uintTT6nHRn, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerh7cGGfq.approveStrategy.call(addressCM958mm, addressjl9wKWH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresskjeVuzZ = accounts[1]
		const afiControllercYvF4rP = await afiController.new(addresskjeVuzZ, {from: accounts[1]});
		const addressr8C0RIp = accounts[5]
		const addressmiOa1n9 = accounts[5]
		const addressVLWpnU2 = accounts[1]
		const addresslZNVQBZ = accounts[2]
		const addresssA8g8BX = accounts[2]
		const uintaWp92S3 = BigInt("282")
		const addressDT7SO7j = accounts[1]
		const addressmnmal9G = accounts[2]
//		const addressE3xzwlV = await afiControllercYvF4rP.withdrawAll.call(addressr8C0RIp, {from: accounts[3]});
//		const addressYfAvFBk = await afiControllercYvF4rP.setOneSplit.call(addressmiOa1n9, {from: accounts[4]});
//		const addressPtRISh3 = await afiControllercYvF4rP.setConverter.call(addresssA8g8BX, addresslZNVQBZ, addressVLWpnU2, {from: accounts[1]});
//		const addressCWYzRWA = await afiControllercYvF4rP.earn.call(addressDT7SO7j, uintaWp92S3, {from: accounts[0]});
//		const addressD61LUFV = await afiControllercYvF4rP.withdrawAll.call(addressmnmal9G, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllercYvF4rP.withdrawAll.call(addressr8C0RIp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressX192Sgi = accounts[2]
		const afiControllercR2RfBR = await afiController.new(addressX192Sgi, {from: accounts[5]});
		const addressiGUfBE0 = accounts[1]
		const addressJpX0CGr = accounts[4]
		const uintZ9gMvGF = BigInt("69")
		const addresshCdVp8V = accounts[3]
		const addressP5Tvsh1 = accounts[0]
		const addresswrtKctg = accounts[4]
//		const addressvRyZqEK = await afiControllercR2RfBR.withdrawAll.call(addressiGUfBE0, {from: accounts[5]});
//		const addressy4DQRq = await afiControllercR2RfBR.setStrategist.call(addressJpX0CGr, {from: accounts[4]});
//		const uintzMKVtGj = await afiControllercR2RfBR.setSplit.call(uintZ9gMvGF, {from: accounts[3]});
//		const addressvnFZwri = await afiControllercR2RfBR.setRewards.call(addresshCdVp8V, {from: accounts[4]});
//		const addressVTwa7VN = await afiControllercR2RfBR.setVault.call(addresswrtKctg, addressP5Tvsh1, {from: accounts[5]});

		await expect(afiControllercR2RfBR.withdrawAll.call(addressiGUfBE0, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressc9LXtC1 = accounts[4]
		const afiControllerh7cGGfq = await afiController.new(addressc9LXtC1, {from: accounts[4]});
		const uintBuUqvMi = BigInt("1532")
		const addressU6eSVKy = accounts[4]
		const addressgLtlvxX = accounts[3]
		const addresspwN9KTE = "0x0000000000000000000000000000000000000001"
		const addressA3Sfcre = accounts[4]
		const addressuUD4QLV = accounts[3]
		const addressJUzISI1 = accounts[4]
		const addressdGTvwzr = accounts[5]
		const uintnrxe4AE = BigInt("1313")
		const addressV0Q0Lo = "0x0000000000000000000000000000000000000001"
		const uintEBeJo6e = await afiControllerh7cGGfq.setSplit.call(uintBuUqvMi, {from: accounts[4]});
//		const addressu8Tn1D9 = await afiControllerh7cGGfq.approveStrategy.call(addressgLtlvxX, addressU6eSVKy, {from: accounts[0]});
//		const addressJW42IVf = await afiControllerh7cGGfq.setStrategist.call(addresspwN9KTE, {from: accounts[3]});
//		const addressNFRPesU = await afiControllerh7cGGfq.setVault.call(addressuUD4QLV, addressA3Sfcre, {from: accounts[5]});
//		const addressiS3WVg = await afiControllerh7cGGfq.setVault.call(addressdGTvwzr, addressJUzISI1, {from: accounts[0]});
//		const addresspWWPkRH = await afiControllerh7cGGfq.withdraw.call(addressV0Q0Lo, uintnrxe4AE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerh7cGGfq.approveStrategy.call(addressgLtlvxX, addressU6eSVKy, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressFZ6yDWB = accounts[2]
		const afiControllerzQ6nMWd = await afiController.new(addressFZ6yDWB, {from: accounts[3]});
		const addressWZqxNw = accounts[0]
		const addressdCBoQpf = accounts[1]
		const addressrjJKWCL = accounts[7]
		const addresspnM6JFf = await afiControllerzQ6nMWd.approveStrategy.call(addressdCBoQpf, addressWZqxNw, {from: accounts[3]});
//		const addressGdfo5x = await afiControllerzQ6nMWd.setStrategist.call(addressrjJKWCL, {from: accounts[1]});

		await expect(afiControllerzQ6nMWd.setStrategist.call(addressrjJKWCL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresskPh5onk = accounts[2]
		const afiControllerzQ6nMWd = await afiController.new(addresskPh5onk, {from: accounts[3]});
		const addressUCqYaax = accounts[1]
		const addresskFfgxK9 = accounts[4]
		const addressvtpjFhl = accounts[2]
		const addressgsr1u25 = accounts[0]
		const addressKgtCUB = accounts[5]
		const address1ZYPa4 = accounts[6]
//		const addressBepGru = await afiControllerzQ6nMWd.setConverter.call(addressvtpjFhl, addresskFfgxK9, addressUCqYaax, {from: accounts[1]});
//		const addressDy5yxk = await afiControllerzQ6nMWd.inCaseStrategyTokenGetStuck.call(addressKgtCUB, addressgsr1u25, {from: accounts[0]});
//		const addressGdfo5x = await afiControllerzQ6nMWd.setStrategist.call(address1ZYPa4, {from: accounts[1]});

		await expect(afiControllerzQ6nMWd.setConverter.call(addressvtpjFhl, addresskFfgxK9, addressUCqYaax, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressM8o2ZgN = accounts[2]
		const afiControllerzQ6nMWd = await afiController.new(addressM8o2ZgN, {from: accounts[3]});
		const uintHn1Ou0k = BigInt("571")
		const addresskOEtVQl = accounts[0]
		const addressvFv8OMC = accounts[3]
		const addressmsEubCW = accounts[1]
		const addresswbr2OQ0 = accounts[2]
		const addressJbDGI60 = accounts[7]
//		const addressiwiE1O = await afiControllerzQ6nMWd.yearn.call(addressvFv8OMC, addresskOEtVQl, uintHn1Ou0k, {from: accounts[3]});
//		const addressw7MrO9b = await afiControllerzQ6nMWd.inCaseStrategyTokenGetStuck.call(addresswbr2OQ0, addressmsEubCW, {from: accounts[3]});
//		const addressGdfo5x = await afiControllerzQ6nMWd.setStrategist.call(addressJbDGI60, {from: accounts[1]});

		await expect(afiControllerzQ6nMWd.yearn.call(addressvFv8OMC, addresskOEtVQl, uintHn1Ou0k, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressF9o408Z = accounts[2]
		const afiControllerzQ6nMWd = await afiController.new(addressF9o408Z, {from: accounts[3]});
		const addressq41IuYB = accounts[1]
		const addressrP8x0D8 = accounts[2]
		const uintACxaRdJ = BigInt("1790")
		const addressXWHEdx = accounts[3]
		const addresswD1BXpC = accounts[0]
		const addressPBH1yCj = accounts[3]
		const addressGTI18UI = await afiControllerzQ6nMWd.setVault.call(addressrP8x0D8, addressq41IuYB, {from: accounts[3]});
//		const uintCgBemhU = await afiControllerzQ6nMWd.getExpectedReturn.call(addresswD1BXpC, addressXWHEdx, uintACxaRdJ, {from: accounts[5]});
//		const addressGdfo5x = await afiControllerzQ6nMWd.setStrategist.call(addressPBH1yCj, {from: accounts[1]});

		await expect(afiControllerzQ6nMWd.getExpectedReturn.call(addresswD1BXpC, addressXWHEdx, uintACxaRdJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressFNOyI9o = accounts[1]
		const afiControllercYvF4rP = await afiController.new(addressFNOyI9o, {from: accounts[1]});
		const addressqbqdyFW = accounts[4]
		const addressRdakgvP = accounts[0]
		const addressIXoWYCn = accounts[0]
		const addressluQz00h = accounts[2]
		const addresspqoz2mY = await afiControllercYvF4rP.setOneSplit.call(addressqbqdyFW, {from: accounts[1]});
//		const addressrBEFv92 = await afiControllercYvF4rP.setStrategy.call(addressIXoWYCn, addressRdakgvP, {from: accounts[2]});
//		const addressD61LUFV = await afiControllercYvF4rP.withdrawAll.call(addressluQz00h, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllercYvF4rP.setStrategy.call(addressIXoWYCn, addressRdakgvP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressgZuwhpp = accounts[0]
		const afiControllergdI3AX4 = await afiController.new(addressgZuwhpp, {from: accounts[1]});
		const addressXv5Gbr = accounts[3]
		const addresswUsjUDt = accounts[3]
		const addressaz9m3ER = accounts[1]
		const addresshAm1L9E = accounts[3]
		const addressqL6ZsXg = accounts[2]
		const uintFjfq2Y0 = BigInt("1094")
		const addressxLcYDBc = accounts[0]
		const addressTRYCds = accounts[5]
		const addressk2KeXWp = accounts[5]
		const addressBrBM37p = accounts[0]
		const addressxM2vvPy = await afiControllergdI3AX4.setStrategist.call(addressXv5Gbr, {from: accounts[1]});
//		const addresslyEvbi = await afiControllergdI3AX4.setConverter.call(addresshAm1L9E, addressaz9m3ER, addresswUsjUDt, {from: accounts[2]});
//		const addressXxaiwzQ = await afiControllergdI3AX4.setStrategist.call(addressqL6ZsXg, {from: accounts[4]});
//		const uintNMRFXzZ = await afiControllergdI3AX4.getExpectedReturn.call(addressTRYCds, addressxLcYDBc, uintFjfq2Y0, {from: "0x0000000000000000000000000000000000000001"});
//		const addressnUYVCBS = await afiControllergdI3AX4.approveStrategy.call(addressBrBM37p, addressk2KeXWp, {from: accounts[1]});

		await expect(afiControllergdI3AX4.setConverter.call(addresshAm1L9E, addressaz9m3ER, addresswUsjUDt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscApWJGm = accounts[2]
		const afiControllerSx4jc0 = await afiController.new(addresscApWJGm, {from: accounts[0]});
		const addressN4tZnyl = accounts[1]
		const addressvI9Ndha = accounts[4]
		const uintsBzMk5t = BigInt("160")
		const addressd2tujE2 = accounts[3]
		const uintPkX4fED = BigInt("1635")
		const addressSM9PUio = accounts[0]
		const addressf4kmt7H = await afiControllerSx4jc0.revokeStrategy.call(addressvI9Ndha, addressN4tZnyl, {from: accounts[0]});
//		const addressB5hd3FZ = await afiControllerSx4jc0.withdraw.call(addressd2tujE2, uintsBzMk5t, {from: accounts[2]});
//		const addressjL3Zc4P = await afiControllerSx4jc0.inCaseTokensGetStuck.call(addressSM9PUio, uintPkX4fED, {from: accounts[4]});

		await expect(afiControllerSx4jc0.withdraw.call(addressd2tujE2, uintsBzMk5t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresskvMVop7 = accounts[2]
		const afiControllerzQ6nMWd = await afiController.new(addresskvMVop7, {from: accounts[3]});
		const addressNBJATr5 = accounts[5]
		const addressvjuGikz = accounts[0]
		const addressw0abrCI = accounts[5]
		const addressLxjboJg = accounts[8]
		const addressRh8AkOO = accounts[1]
		const addressy4syHGk = await afiControllerzQ6nMWd.setConverter.call(addressw0abrCI, addressvjuGikz, addressNBJATr5, {from: accounts[3]});
//		const addressGdfo5x = await afiControllerzQ6nMWd.setStrategist.call(addressLxjboJg, {from: accounts[1]});
//		const addressxGT79LG = await afiControllerzQ6nMWd.setStrategist.call(addressRh8AkOO, {from: accounts[0]});

		await expect(afiControllerzQ6nMWd.setStrategist.call(addressLxjboJg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressMMJTQ1c = accounts[2]
		const afiControllercR2RfBR = await afiController.new(addressMMJTQ1c, {from: accounts[5]});
		const uintW5GjPrt = BigInt("1148")
		const addresskeXhqxW = accounts[5]
		const addressCSBspM8 = accounts[1]
		const addressaRhQZsR = accounts[3]
		const addressd6o2yK = accounts[2]
		const addressgbq6jYc = accounts[2]
//		const addressRqMALMC = await afiControllercR2RfBR.inCaseTokensGetStuck.call(addresskeXhqxW, uintW5GjPrt, {from: accounts[5]});
//		const uintPERqpVT = await afiControllercR2RfBR.balanceOf.call(addressCSBspM8, {from: accounts[1]});
//		const addressvnFZwri = await afiControllercR2RfBR.setRewards.call(addressaRhQZsR, {from: accounts[4]});
//		const addressVTwa7VN = await afiControllercR2RfBR.setVault.call(addressgbq6jYc, addressd6o2yK, {from: accounts[5]});

		await expect(afiControllercR2RfBR.inCaseTokensGetStuck.call(addresskeXhqxW, uintW5GjPrt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressyUCJK6Y = accounts[0]
		const afiControllerKTS5ypa = await afiController.new(addressyUCJK6Y, {from: accounts[2]});
		const addressA93FHXJ = accounts[1]
		const addressaFVXOvb = accounts[1]
		const uintJ0iimXN = BigInt("202")
		const addressY6zFSC0 = accounts[3]
		const addressq2zHAeV = "0x0000000000000000000000000000000000000001"
		const uintqDwQgDj = BigInt("1022")
//		const addressODe12XP = await afiControllerKTS5ypa.setStrategy.call(addressaFVXOvb, addressA93FHXJ, {from: accounts[2]});
//		const addressGpKVYAt = await afiControllerKTS5ypa.yearn.call(addressq2zHAeV, addressY6zFSC0, uintJ0iimXN, {from: accounts[4]});
//		const uintr4g4yF = await afiControllerKTS5ypa.setSplit.call(uintqDwQgDj, {from: accounts[2]});

		await expect(afiControllerKTS5ypa.setStrategy.call(addressaFVXOvb, addressA93FHXJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressCfix7W = accounts[2]
		const afiControllercR2RfBR = await afiController.new(addressCfix7W, {from: accounts[5]});
		const addresszWvf9yn = accounts[2]
		const addressn3HGBu = "0x0000000000000000000000000000000000000001"
		const uintGsrXuR = BigInt("323")
		const addressdCEwoyp = accounts[4]
		const uintvv75Glx = BigInt("855")
		const addressLqalgLu = accounts[3]
//		const addressgILNxqi = await afiControllercR2RfBR.inCaseStrategyTokenGetStuck.call(addressn3HGBu, addresszWvf9yn, {from: accounts[5]});
//		const addresslAfpf5H = await afiControllercR2RfBR.earn.call(addressdCEwoyp, uintGsrXuR, {from: accounts[2]});
//		const uintAFI3Hn4 = await afiControllercR2RfBR.setSplit.call(uintvv75Glx, {from: accounts[1]});
//		const addressvnFZwri = await afiControllercR2RfBR.setRewards.call(addressLqalgLu, {from: accounts[4]});

		await expect(afiControllercR2RfBR.inCaseStrategyTokenGetStuck.call(addressn3HGBu, addresszWvf9yn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressSoJAw4X = accounts[2]
		const afiControllerSx4jc0 = await afiController.new(addressSoJAw4X, {from: accounts[0]});
		const addressh4bSTlg = accounts[4]
		const addressJtQi6iK = accounts[6]
		const addressuxWPiLk = accounts[2]
		const address42icmV = await afiControllerSx4jc0.setRewards.call(addressh4bSTlg, {from: accounts[0]});
//		const addressPcRTvnd = await afiControllerSx4jc0.revokeStrategy.call(addressuxWPiLk, addressJtQi6iK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerSx4jc0.revokeStrategy.call(addressuxWPiLk, addressJtQi6iK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})