const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressXjNuO7q = accounts[0]
		const ControllerAkcEfSv = await Controller.new(addressXjNuO7q, {from: accounts[4]});
		const addressqGzpchr = accounts[1]
		const addressq3MhEo9 = "0x0000000000000000000000000000000000000001"
		const addressJZCdQgw = "0x0000000000000000000000000000000000000001"
		const addressnjzSXq = accounts[0]
		const addressqlMd2ma = await ControllerAkcEfSv.setGovernance.call(addressqGzpchr, {from: accounts[4]});
		const uintRXTEpTF = await ControllerAkcEfSv.balanceOf.call(addressq3MhEo9, {from: accounts[3]});
		const addressV9DjK2 = await ControllerAkcEfSv.inCaseStrategyTokenGetStuck.call(addressnjzSXq, addressJZCdQgw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerAkcEfSv.balanceOf.call(addressq3MhEo9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresspNN3GvD = accounts[2]
		const ControllercR2RfBR = await Controller.new(addresspNN3GvD, {from: accounts[5]});
		const addressw5uXD2c = accounts[3]
		const addressIEcCLp4 = accounts[0]
		const address9cZryw = accounts[4]
		const addressqMwG1vM = accounts[1]
		const addressq87vJR1 = accounts[2]
		const addressPqEWwyL = accounts[2]
		const addressoNc0rzC = accounts[4]
		const addressvnFZwri = await ControllercR2RfBR.setRewards.call(addressw5uXD2c, {from: accounts[4]});
		const addressVTwa7VN = await ControllercR2RfBR.setVault.call(address9cZryw, addressIEcCLp4, {from: accounts[5]});
		const addressW0Yx2cW = await ControllercR2RfBR.withdrawAll.call(addressqMwG1vM, {from: accounts[5]});
		const addresstX3Q0n = await ControllercR2RfBR.setConverter.call(addressoNc0rzC, addressPqEWwyL, addressq87vJR1, {from: accounts[0]});

		await expect(ControllercR2RfBR.setRewards.call(addressw5uXD2c, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressBU7tEmQ = accounts[2]
		const ControllerSx4jc0 = await Controller.new(addressBU7tEmQ, {from: accounts[0]});
		const addresswotr7LU = accounts[5]
		const addressIYNul4D = accounts[4]
		const addresscMZOFQf = "0x0000000000000000000000000000000000000001"
		const addressAKB1HN0 = accounts[3]
		const addressCert6SW = accounts[2]
		const addressPcRTvnd = await ControllerSx4jc0.revokeStrategy.call(addressIYNul4D, addresswotr7LU, {from: "0x0000000000000000000000000000000000000001"});
		const addresslCngC2s = await ControllerSx4jc0.revokeStrategy.call(addressAKB1HN0, addresscMZOFQf, {from: accounts[4]});
		const addresspubk61H = await ControllerSx4jc0.withdrawAll.call(addressCert6SW, {from: accounts[5]});

		await expect(ControllerSx4jc0.revokeStrategy.call(addressIYNul4D, addresswotr7LU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressAM2RysC = accounts[2]
		const ControllerzQ6nMWd = await Controller.new(addressAM2RysC, {from: accounts[3]});
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
		const addressGdfo5x = await ControllerzQ6nMWd.setStrategist.call(addressk1gdG3S, {from: accounts[1]});
		const addressT7ZiIok = await ControllerzQ6nMWd.setConverter.call(addressJZPpdQ, addressTMByfJz, addressOHe7hxd, {from: accounts[0]});
		const uintOrp6Rfw = await ControllerzQ6nMWd.getExpectedReturn.call(addressQLQv5RF, addresszy5L3U6, uintFd1EkN, {from: accounts[0]});
		const addresseDnqodj = await ControllerzQ6nMWd.setConverter.call(addressQUXSJD, addressjh2aopY, address3KY9ZJ, {from: accounts[5]});

		await expect(ControllerzQ6nMWd.setStrategist.call(addressk1gdG3S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressy0yZiO5 = accounts[5]
		const ControllertyX52OX = await Controller.new(addressy0yZiO5, {from: "0x0000000000000000000000000000000000000001"});
		const addresstUSFk40 = accounts[0]
		const addresstokgtoE = "0x0000000000000000000000000000000000000001"
		const addresszGp36s = accounts[3]
		const addressBwtCr7f = accounts[5]
		const addressMVzNUv1 = accounts[3]
		const addressySU0UoP = "0x0000000000000000000000000000000000000001"
		const uintsIV0kSs = BigInt("1963")
		const addressBR26HmZ = accounts[3]
		const addressC47hkt7 = await ControllertyX52OX.revokeStrategy.call(addresstokgtoE, addresstUSFk40, {from: "0x0000000000000000000000000000000000000001"});
		const addressE6Ldsau = await ControllertyX52OX.setVault.call(addressBwtCr7f, addresszGp36s, {from: accounts[3]});
		const uintW3sjDcI = await ControllertyX52OX.balanceOf.call(addressMVzNUv1, {from: accounts[1]});
		const addressSlZuRX8 = await ControllertyX52OX.setStrategist.call(addressySU0UoP, {from: accounts[2]});
		const addresslQwkhf = await ControllertyX52OX.earn.call(addressBR26HmZ, uintsIV0kSs, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Controller', async () => {
		const addressizMBa2r = accounts[5]
		const ControllerdJjPVpE = await Controller.new(addressizMBa2r, {from: accounts[3]});
		const uintbFf9EUf = BigInt("1674")
		const addressDKkMb95 = accounts[1]
		const addressUJdQjWD = accounts[2]
		const addresskDgRazX = accounts[1]
		const addresssX6Uc4 = accounts[3]
		const addressmB2uNsR = accounts[2]
		const addressYKG0pzN = accounts[2]
		const addresshbrCxyh = await ControllerdJjPVpE.withdraw.call(addressDKkMb95, uintbFf9EUf, {from: accounts[3]});
		const addressyaIlgT = await ControllerdJjPVpE.approveStrategy.call(addresskDgRazX, addressUJdQjWD, {from: accounts[2]});
		const addressfPQel5V = await ControllerdJjPVpE.setRewards.call(addresssX6Uc4, {from: accounts[2]});
		const addressPlppJTK = await ControllerdJjPVpE.revokeStrategy.call(addressYKG0pzN, addressmB2uNsR, {from: accounts[2]});

		await expect(ControllerdJjPVpE.withdraw.call(addressDKkMb95, uintbFf9EUf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxD82Qz1 = accounts[1]
		const ControllercYvF4rP = await Controller.new(addressxD82Qz1, {from: accounts[1]});
		const addressy1PieyA = accounts[5]
		const addressMXL6ClV = accounts[1]
		const addressx8gSsnB = accounts[2]
		const addressl7kyPa9 = accounts[5]
		const addressvxWkrpS = accounts[2]
		const addressm6YPLV = accounts[1]
		const addressYfAvFBk = await ControllercYvF4rP.setOneSplit.call(addressy1PieyA, {from: accounts[4]});
		const addressPtRISh3 = await ControllercYvF4rP.setConverter.call(addressl7kyPa9, addressx8gSsnB, addressMXL6ClV, {from: accounts[1]});
		const addressEvuZb8J = await ControllercYvF4rP.withdrawAll.call(addressvxWkrpS, {from: accounts[2]});
		const addressD61LUFV = await ControllercYvF4rP.withdrawAll.call(addressm6YPLV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllercYvF4rP.setOneSplit.call(addressy1PieyA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressixKlL8D = accounts[3]
		const ControllertOxRMF5 = await Controller.new(addressixKlL8D, {from: accounts[3]});
		const uintZ1zDSVe = BigInt("585")
		const addressuKH13vV = accounts[4]
		const addressMlraf7e = accounts[1]
		const address1Yxvw9 = accounts[0]
		const uintkX4Ktrd = BigInt("794")
		const addressEqbqS8p = accounts[3]
		const uintNLqoMqC = await ControllertOxRMF5.setSplit.call(uintZ1zDSVe, {from: accounts[0]});
		const addressDLxywax = await ControllertOxRMF5.setStrategist.call(addressuKH13vV, {from: accounts[3]});
		const uint6xUjPR = await ControllertOxRMF5.balanceOf.call(addressMlraf7e, {from: accounts[3]});
		const addressIy60s7T = await ControllertOxRMF5.setGovernance.call(address1Yxvw9, {from: accounts[0]});
		const addressRqfF9F = await ControllertOxRMF5.withdraw.call(addressEqbqS8p, uintkX4Ktrd, {from: accounts[4]});

		await expect(ControllertOxRMF5.setSplit.call(uintZ1zDSVe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresstZuGi26 = accounts[0]
		const ControllerAkcEfSv = await Controller.new(addresstZuGi26, {from: accounts[4]});
		const addressb85Gilx = accounts[1]
		const address9Jzteu = "0x0000000000000000000000000000000000000001"
		const addressqzOGzqf = accounts[0]
		const addressqlMd2ma = await ControllerAkcEfSv.setGovernance.call(addressb85Gilx, {from: accounts[4]});
		const addressV9DjK2 = await ControllerAkcEfSv.inCaseStrategyTokenGetStuck.call(addressqzOGzqf, address9Jzteu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerAkcEfSv.inCaseStrategyTokenGetStuck.call(addressqzOGzqf, address9Jzteu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressehqiS3 = accounts[0]
		const ControllerAkcEfSv = await Controller.new(addressehqiS3, {from: accounts[4]});
		const addressPzVe0AH = accounts[1]
		const addressJiUHcNN = accounts[3]
		const addressqNDfic = accounts[4]
		const addressFEu8Zxn = accounts[4]
		const addressu7urmOb = "0x0000000000000000000000000000000000000002"
		const addressNmjTgrG = "0x0000000000000000000000000000000000000001"
		const addresst0A1Tgf = accounts[0]
		const addressqlMd2ma = await ControllerAkcEfSv.setGovernance.call(addressPzVe0AH, {from: accounts[4]});
		const addressirm18dy = await ControllerAkcEfSv.approveStrategy.call(addressqNDfic, addressJiUHcNN, {from: accounts[1]});
		const addresserVCv2z = await ControllerAkcEfSv.setStrategist.call(addressFEu8Zxn, {from: accounts[0]});
		const uintRXTEpTF = await ControllerAkcEfSv.balanceOf.call(addressu7urmOb, {from: accounts[3]});
		const addressV9DjK2 = await ControllerAkcEfSv.inCaseStrategyTokenGetStuck.call(addresst0A1Tgf, addressNmjTgrG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerAkcEfSv.approveStrategy.call(addressqNDfic, addressJiUHcNN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskOXxV8x = accounts[0]
		const ControllerAkcEfSv = await Controller.new(addresskOXxV8x, {from: accounts[4]});
		const addressfsXkAs3 = accounts[1]
		const uintNrvXJMj = BigInt("2004")
		const addressXecKcQq = "0x0000000000000000000000000000000000000001"
		const addressYobsG3s = accounts[4]
		const addressGV3dYjW = accounts[2]
		const addressnc20OR2 = accounts[1]
		const addressMj2fEN8 = "0x0000000000000000000000000000000000000001"
		const addressEoI1n2I = "0x0000000000000000000000000000000000000001"
		const addressT0yIpRU = accounts[0]
		const addressqlMd2ma = await ControllerAkcEfSv.setGovernance.call(addressfsXkAs3, {from: accounts[4]});
		const addresspD8Njc = await ControllerAkcEfSv.earn.call(addressXecKcQq, uintNrvXJMj, {from: accounts[3]});
		const addressnxlq2z0 = await ControllerAkcEfSv.withdrawAll.call(addressYobsG3s, {from: accounts[2]});
		const addressLZcTz6O = await ControllerAkcEfSv.setVault.call(addressnc20OR2, addressGV3dYjW, {from: accounts[2]});
		const uintRXTEpTF = await ControllerAkcEfSv.balanceOf.call(addressMj2fEN8, {from: accounts[3]});
		const addressV9DjK2 = await ControllerAkcEfSv.inCaseStrategyTokenGetStuck.call(addressT0yIpRU, addressEoI1n2I, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerAkcEfSv.earn.call(addressXecKcQq, uintNrvXJMj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressBwKwrc = accounts[3]
		const ControllerYleaivD = await Controller.new(addressBwKwrc, {from: accounts[1]});
		const addressSDKVKA = accounts[4]
		const addresslIX8FMx = "0x0000000000000000000000000000000000000001"
		const uintzDMVpCS = BigInt("62")
		const addressgTAYi5F = accounts[4]
		const addressCU0B0sn = accounts[3]
		const uintEcbK8jG = BigInt("2022")
		const addressJ9y9RsM = accounts[4]
		const addressk3zHvF3 = accounts[0]
		const addresswzGUZ5 = accounts[3]
		const addressNUN0bks = accounts[0]
		const addressZLTnPoT = accounts[3]
		const addresshTbSP3g = await ControllerYleaivD.setVault.call(addresslIX8FMx, addressSDKVKA, {from: accounts[2]});
		const addressYBXDGSV = await ControllerYleaivD.yearn.call(addressCU0B0sn, addressgTAYi5F, uintzDMVpCS, {from: accounts[0]});
		const addressVpz7Qek = await ControllerYleaivD.inCaseTokensGetStuck.call(addressJ9y9RsM, uintEcbK8jG, {from: accounts[0]});
		const addressSSPJ4LV = await ControllerYleaivD.setStrategy.call(addresswzGUZ5, addressk3zHvF3, {from: accounts[1]});
		const addressR9XMwB = await ControllerYleaivD.inCaseStrategyTokenGetStuck.call(addressZLTnPoT, addressNUN0bks, {from: accounts[0]});

		await expect(ControllerYleaivD.setVault.call(addresslIX8FMx, addressSDKVKA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresspA5ST9H = accounts[3]
		const ControllerYleaivD = await Controller.new(addresspA5ST9H, {from: accounts[1]});
		const uintnPw8OqK = BigInt("935")
		const addressuMDCmfo = accounts[0]
		const addressHfa8vo = accounts[4]
		const addressuZzeULG = "0x0000000000000000000000000000000000000001"
		const uinta1S903O = BigInt("62")
		const addressdPKhxaY = accounts[4]
		const addressLN9tWR = accounts[3]
		const addresshc38QJD = accounts[0]
		const addressUQY5Kd9 = accounts[3]
		const addressPR5GhBf = "0x0000000000000000000000000000000000000001"
		const addressKgsSaD4 = accounts[1]
		const addressRG0bH54 = accounts[4]
		const addressFPp1o7M = accounts[0]
		const addressjV6fBGY = accounts[3]
		const addressztK8rLr = await ControllerYleaivD.inCaseTokensGetStuck.call(addressuMDCmfo, uintnPw8OqK, {from: accounts[0]});
		const addresshTbSP3g = await ControllerYleaivD.setVault.call(addressuZzeULG, addressHfa8vo, {from: accounts[2]});
		const addressYBXDGSV = await ControllerYleaivD.yearn.call(addressLN9tWR, addressdPKhxaY, uinta1S903O, {from: accounts[0]});
		const addressSSPJ4LV = await ControllerYleaivD.setStrategy.call(addressUQY5Kd9, addresshc38QJD, {from: accounts[1]});
		const address7FnULW = await ControllerYleaivD.setConverter.call(addressRG0bH54, addressKgsSaD4, addressPR5GhBf, {from: accounts[5]});
		const addressR9XMwB = await ControllerYleaivD.inCaseStrategyTokenGetStuck.call(addressjV6fBGY, addressFPp1o7M, {from: accounts[0]});

		await expect(ControllerYleaivD.inCaseTokensGetStuck.call(addressuMDCmfo, uintnPw8OqK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressHGbYauK = accounts[0]
		const Controlleru8tUrTe = await Controller.new(addressHGbYauK, {from: accounts[5]});
		const uintE6DZKRn = BigInt("1283")
		const addressk5LwWtk = accounts[2]
		const addressXmnNrkw = accounts[1]
		const addressaatJgYW = accounts[2]
		const addressOOQDBKZ = "0x0000000000000000000000000000000000000001"
		const addressvT5eE7 = accounts[1]
		const addressdaUVis = accounts[5]
		const addressw9a28as = accounts[4]
		const uintOtVnhDR = await Controlleru8tUrTe.getExpectedReturn.call(addressXmnNrkw, addressk5LwWtk, uintE6DZKRn, {from: accounts[3]});
		const addressQKdR2oe = await Controlleru8tUrTe.setGovernance.call(addressaatJgYW, {from: accounts[4]});
		const addressEilkrS2 = await Controlleru8tUrTe.setStrategy.call(addressvT5eE7, addressOOQDBKZ, {from: accounts[3]});
		const addressLDuP1ip = await Controlleru8tUrTe.setOneSplit.call(addressdaUVis, {from: accounts[3]});
		const uintBpKhhoX = await Controlleru8tUrTe.balanceOf.call(addressw9a28as, {from: accounts[0]});

		await expect(Controlleru8tUrTe.getExpectedReturn.call(addressXmnNrkw, addressk5LwWtk, uintE6DZKRn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjf77e1h = accounts[0]
		const ControllerAkcEfSv = await Controller.new(addressjf77e1h, {from: accounts[4]});
		const addressXkMfcrz = accounts[2]
		const addressc4slINJ = accounts[3]
		const address5NaTAU = accounts[4]
		const uintym2UaKn = BigInt("337")
		const addressEiWjIGp = "0x0000000000000000000000000000000000000002"
		const addressdC1bswN = accounts[1]
		const addressEPuIL0o = await ControllerAkcEfSv.setConverter.call(address5NaTAU, addressc4slINJ, addressXkMfcrz, {from: "0x0000000000000000000000000000000000000001"});
		const uintoDU1wXe = await ControllerAkcEfSv.setSplit.call(uintym2UaKn, {from: accounts[1]});
		const addressV9DjK2 = await ControllerAkcEfSv.inCaseStrategyTokenGetStuck.call(addressdC1bswN, addressEiWjIGp, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerAkcEfSv.setConverter.call(address5NaTAU, addressc4slINJ, addressXkMfcrz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressjJIV5q = accounts[0]
		const ControllerAkcEfSv = await Controller.new(addressjJIV5q, {from: accounts[4]});
		const uintodMXxc6 = BigInt("422")
		const addressL5KvNmm = "0x0000000000000000000000000000000000000001"
		const addressSRvuPa = accounts[2]
		const addressKNxW1Ou = "0x0000000000000000000000000000000000000000"
		const addresslPWKQnz = accounts[1]
		const addressf8HWG1x = await ControllerAkcEfSv.yearn.call(addressSRvuPa, addressL5KvNmm, uintodMXxc6, {from: accounts[0]});
		const addressV9DjK2 = await ControllerAkcEfSv.inCaseStrategyTokenGetStuck.call(addresslPWKQnz, addressKNxW1Ou, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerAkcEfSv.yearn.call(addressSRvuPa, addressL5KvNmm, uintodMXxc6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresszrvlLyA = accounts[1]
		const Controllerz1zRnpw = await Controller.new(addresszrvlLyA, {from: accounts[0]});
		const addressXGITSn6 = accounts[3]
		const addressdcu04US = accounts[1]
		const addressfgrTu0m = accounts[5]
		const address32GkAb = accounts[4]
		const addressXtkgtql = accounts[3]
		const addressHneIfqT = accounts[0]
		const uintviDc71p = BigInt("679")
		const addressf48jTM9 = accounts[5]
		const addresshIQcswR = await Controllerz1zRnpw.withdrawAll.call(addressXGITSn6, {from: accounts[0]});
		const addressnYqzyXk = await Controllerz1zRnpw.setStrategy.call(addressfgrTu0m, addressdcu04US, {from: accounts[5]});
		const addressCdZium3 = await Controllerz1zRnpw.revokeStrategy.call(addressXtkgtql, address32GkAb, {from: accounts[3]});
		const addressG8UyxpO = await Controllerz1zRnpw.withdrawAll.call(addressHneIfqT, {from: accounts[4]});
		const addressbH4nl6D = await Controllerz1zRnpw.earn.call(addressf48jTM9, uintviDc71p, {from: accounts[2]});

		await expect(Controllerz1zRnpw.withdrawAll.call(addressXGITSn6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressHiOJc6g = accounts[0]
		const ControllerAkcEfSv = await Controller.new(addressHiOJc6g, {from: accounts[4]});
		const uintJMAHDXp = BigInt("1139")
		const addressh3LCN95 = accounts[4]
		const addressNZethV = accounts[3]
		const addresszTG5IqJ = accounts[0]
		const addressP8n9iCA = accounts[1]
		const addresszB8MGPQ = accounts[4]
		const addressDe8Ozkf = accounts[3]
		const addressC8QLKYy = await ControllerAkcEfSv.inCaseTokensGetStuck.call(addressh3LCN95, uintJMAHDXp, {from: accounts[4]});
		const addressiunj36m = await ControllerAkcEfSv.setOneSplit.call(addressNZethV, {from: accounts[3]});
		const addressV9DjK2 = await ControllerAkcEfSv.inCaseStrategyTokenGetStuck.call(addressP8n9iCA, addresszTG5IqJ, {from: "0x0000000000000000000000000000000000000001"});
		const addresspuIFPNq = await ControllerAkcEfSv.setStrategy.call(addressDe8Ozkf, addresszB8MGPQ, {from: accounts[1]});

		await expect(ControllerAkcEfSv.inCaseTokensGetStuck.call(addressh3LCN95, uintJMAHDXp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressB6SiySt = accounts[0]
		const ControllerAkcEfSv = await Controller.new(addressB6SiySt, {from: accounts[4]});
		const addressG9QUaWk = accounts[3]
		const addressYjYBruw = "0x0000000000000000000000000000000000000001"
		const uintAFuDp6q = BigInt("422")
		const addressGWcnxHs = "0x0000000000000000000000000000000000000001"
		const addressGUVUDLj = accounts[2]
		const addressvQ22gtD = await ControllerAkcEfSv.setStrategy.call(addressYjYBruw, addressG9QUaWk, {from: accounts[5]});
		const addressf8HWG1x = await ControllerAkcEfSv.yearn.call(addressGUVUDLj, addressGWcnxHs, uintAFuDp6q, {from: accounts[0]});

		await expect(ControllerAkcEfSv.setStrategy.call(addressYjYBruw, addressG9QUaWk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressc8Aj66v = accounts[0]
		const ControllerAkcEfSv = await Controller.new(addressc8Aj66v, {from: accounts[4]});
		const addressebXkWWN = accounts[5]
		const addressTtU6W5o = accounts[5]
		const uintI4zN7Iz = BigInt("48")
		const addressjyrbWz = accounts[3]
		const uintJr38d3 = BigInt("422")
		const addressVO843zC = "0x0000000000000000000000000000000000000002"
		const addressuvK87TI = accounts[2]
		const addressqJhiYKD = await ControllerAkcEfSv.setStrategy.call(addressTtU6W5o, addressebXkWWN, {from: accounts[4]});
		const addressSBHmxIv = await ControllerAkcEfSv.inCaseTokensGetStuck.call(addressjyrbWz, uintI4zN7Iz, {from: accounts[3]});
		const addressf8HWG1x = await ControllerAkcEfSv.yearn.call(addressuvK87TI, addressVO843zC, uintJr38d3, {from: accounts[0]});

		await expect(ControllerAkcEfSv.setStrategy.call(addressTtU6W5o, addressebXkWWN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})