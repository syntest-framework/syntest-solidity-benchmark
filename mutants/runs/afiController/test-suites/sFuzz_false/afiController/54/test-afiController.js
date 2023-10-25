const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressNxMKXVG = accounts[1]
		const afiControllerjjqHblI = await afiController.new(addressNxMKXVG, {from: accounts[2]});
		const addressBSdSZvC = accounts[2]
		const addressBowaA9r = accounts[3]
		const addressjfIlxMs = accounts[5]
		const addressPzoOb7A = accounts[4]
		const addressr1E1Gk1 = accounts[3]
		const addressAAvbbEz = accounts[3]
		const addressu6eIRKa = await afiControllerjjqHblI.setVault.call(addressBowaA9r, addressBSdSZvC, {from: accounts[5]});
		const addressKqs6s4k = await afiControllerjjqHblI.setRewards.call(addressjfIlxMs, {from: accounts[3]});
		const addressu22wvhd = await afiControllerjjqHblI.setGovernance.call(addressPzoOb7A, {from: accounts[0]});
		const addresscuogDqZ = await afiControllerjjqHblI.inCaseStrategyTokenGetStuck.call(addressAAvbbEz, addressr1E1Gk1, {from: accounts[3]});

		await expect(afiControllerjjqHblI.setVault.call(addressBowaA9r, addressBSdSZvC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressJxyorzH = accounts[3]
		const afiControllerGkldUAy = await afiController.new(addressJxyorzH, {from: accounts[1]});
		const addressuptJyXM = accounts[0]
		const addressvXE2hRx = "0x0000000000000000000000000000000000000001"
		const addressLW6KlIW = accounts[1]
		const addressQgAj5Pg = accounts[1]
		const uintqUyI5E6 = BigInt("868")
		const addressoa7u82A = accounts[5]
		const uintkb2CFIX = BigInt("888")
		const addressFqPGV13 = "0x0000000000000000000000000000000000000001"
		const uinto7uTSVy = BigInt("545")
		const addresscHUQbbU = accounts[2]
		const addressbc12uMt = await afiControllerGkldUAy.revokeStrategy.call(addressvXE2hRx, addressuptJyXM, {from: accounts[2]});
		const addressLwNDlCy = await afiControllerGkldUAy.inCaseStrategyTokenGetStuck.call(addressQgAj5Pg, addressLW6KlIW, {from: accounts[0]});
		const addressO3x7W0I = await afiControllerGkldUAy.inCaseTokensGetStuck.call(addressoa7u82A, uintqUyI5E6, {from: accounts[4]});
		const addressx601W6k = await afiControllerGkldUAy.inCaseTokensGetStuck.call(addressFqPGV13, uintkb2CFIX, {from: "0x0000000000000000000000000000000000000001"});
		const addressbvVZYmy = await afiControllerGkldUAy.earn.call(addresscHUQbbU, uinto7uTSVy, {from: accounts[4]});

		await expect(afiControllerGkldUAy.revokeStrategy.call(addressvXE2hRx, addressuptJyXM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbTBThE = accounts[0]
		const afiControllerG38un49 = await afiController.new(addressbTBThE, {from: accounts[4]});
		const addressBy0Rmux = "0x0000000000000000000000000000000000000001"
		const addressddxV39Z = accounts[0]
		const addresslxjZzq5 = accounts[1]
		const addressv5XkzPH = accounts[0]
		const addressqTFoPDZ = await afiControllerG38un49.setConverter.call(addresslxjZzq5, addressddxV39Z, addressBy0Rmux, {from: accounts[1]});
		const uintWa6SyI = await afiControllerG38un49.balanceOf.call(addressv5XkzPH, {from: accounts[2]});

		await expect(afiControllerG38un49.setConverter.call(addresslxjZzq5, addressddxV39Z, addressBy0Rmux, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressPVlo1NR = accounts[4]
		const afiControllerVZdMhbm = await afiController.new(addressPVlo1NR, {from: accounts[3]});
		const addressPY9ruTZ = accounts[3]
		const uintJrpj3UM = BigInt("1894")
		const addressPTrJ2A6 = accounts[1]
		const uintSxXP6xv = BigInt("265")
		const addressy2cEiHD = accounts[2]
		const addressELkODpI = accounts[4]
		const addresseatvBPx = accounts[0]
		const addressxqIlTXw = accounts[2]
		const addressZnFMXik = await afiControllerVZdMhbm.setRewards.call(addressPY9ruTZ, {from: accounts[3]});
		const addressGxs9OC = await afiControllerVZdMhbm.inCaseTokensGetStuck.call(addressPTrJ2A6, uintJrpj3UM, {from: accounts[4]});
		const addresspn0GmwI = await afiControllerVZdMhbm.inCaseTokensGetStuck.call(addressy2cEiHD, uintSxXP6xv, {from: "0x0000000000000000000000000000000000000001"});
		const addressAH68Ma = await afiControllerVZdMhbm.setRewards.call(addressELkODpI, {from: accounts[0]});
		const addressMs6St7D = await afiControllerVZdMhbm.setStrategy.call(addressxqIlTXw, addresseatvBPx, {from: accounts[5]});

		await expect(afiControllerVZdMhbm.inCaseTokensGetStuck.call(addressPTrJ2A6, uintJrpj3UM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressBIXSRYI = accounts[1]
		const afiControllerrIrAFt7 = await afiController.new(addressBIXSRYI, {from: accounts[2]});
		const addresspledoT9 = accounts[2]
		const addressQPG3JKA = accounts[1]
		const uintPMld4TY = BigInt("569")
		const addressNyG7XZw = accounts[1]
		const addressroDbaYf = await afiControllerrIrAFt7.approveStrategy.call(addressQPG3JKA, addresspledoT9, {from: accounts[1]});
		const uintH1Kf1cX = await afiControllerrIrAFt7.setSplit.call(uintPMld4TY, {from: "0x0000000000000000000000000000000000000001"});
		const addressTzIhzbM = await afiControllerrIrAFt7.setStrategist.call(addressNyG7XZw, {from: accounts[5]});

		await expect(afiControllerrIrAFt7.approveStrategy.call(addressQPG3JKA, addresspledoT9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressMpBp10S = accounts[5]
		const afiControllerFASDh2A = await afiController.new(addressMpBp10S, {from: accounts[5]});
		const addressQqMwz52 = "0x0000000000000000000000000000000000000001"
		const address9eGUnL = accounts[3]
		const addresskqEaRaO = "0x0000000000000000000000000000000000000001"
		const uintOLvcRkL = BigInt("403")
		const addressLKLJZeu = accounts[3]
		const uintJyyqioy = BigInt("2019")
		const addressKkuTNd1 = accounts[0]
		const addressMOdFdnc = await afiControllerFASDh2A.setGovernance.call(addressQqMwz52, {from: accounts[1]});
		const addresseO6ScQk = await afiControllerFASDh2A.setStrategy.call(addresskqEaRaO, address9eGUnL, {from: "0x0000000000000000000000000000000000000001"});
		const addressaxYw8TJ = await afiControllerFASDh2A.withdraw.call(addressLKLJZeu, uintOLvcRkL, {from: accounts[2]});
		const addressqqPQY8P = await afiControllerFASDh2A.earn.call(addressKkuTNd1, uintJyyqioy, {from: accounts[1]});

		await expect(afiControllerFASDh2A.setGovernance.call(addressQqMwz52, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressISQgx2m = "0x0000000000000000000000000000000000000001"
		const afiControllerqio4EY7 = await afiController.new(addressISQgx2m, {from: accounts[2]});
		const addressyIKFrxK = accounts[3]
		const uintn3mJvYg = BigInt("985")
		const address8dMyLm = accounts[0]
		const addresslUrdc3p = accounts[0]
		const addressHm8Erj = accounts[5]
		const addressGUAfgyP = await afiControllerqio4EY7.setStrategist.call(addressyIKFrxK, {from: accounts[5]});
		const uintmSe4Xy = await afiControllerqio4EY7.setSplit.call(uintn3mJvYg, {from: accounts[3]});
		const addressyCY0q9 = await afiControllerqio4EY7.approveStrategy.call(addresslUrdc3p, address8dMyLm, {from: accounts[3]});
		const addressjFyOjbh = await afiControllerqio4EY7.setRewards.call(addressHm8Erj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerqio4EY7.setStrategist.call(addressyIKFrxK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressdMRHlyH = accounts[1]
		const afiControllerbiCRMmA = await afiController.new(addressdMRHlyH, {from: accounts[2]});
		const addressVuSZ0c = accounts[3]
		const addressppiZQJ5 = accounts[2]
		const addressPj9vs9R = accounts[2]
		const addressc0K5fft = accounts[1]
		const uintb5LdLTG = BigInt("572")
		const addressqTWhXoH = accounts[1]
		const uintODKkioE = BigInt("1542")
		const addressCVR6oL4 = "0x0000000000000000000000000000000000000001"
		const addressRPo0YyX = accounts[0]
		const addresskx3JvBi = accounts[4]
		const addressWqOG3hE = accounts[3]
		const addresshN8FS07 = await afiControllerbiCRMmA.withdrawAll.call(addressVuSZ0c, {from: accounts[4]});
		const addressUo7tHW = await afiControllerbiCRMmA.inCaseStrategyTokenGetStuck.call(addressPj9vs9R, addressppiZQJ5, {from: "0x0000000000000000000000000000000000000001"});
		const addresseAjdQww = await afiControllerbiCRMmA.setRewards.call(addressc0K5fft, {from: accounts[0]});
		const addressPkUGRc = await afiControllerbiCRMmA.withdraw.call(addressqTWhXoH, uintb5LdLTG, {from: accounts[0]});
		const addressdmipu6C = await afiControllerbiCRMmA.yearn.call(addressRPo0YyX, addressCVR6oL4, uintODKkioE, {from: accounts[5]});
		const addressHeoID7L = await afiControllerbiCRMmA.setStrategy.call(addressWqOG3hE, addresskx3JvBi, {from: accounts[2]});

		await expect(afiControllerbiCRMmA.withdrawAll.call(addressVuSZ0c, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressL65ROaq = accounts[0]
		const afiControllerG38un49 = await afiController.new(addressL65ROaq, {from: accounts[4]});
		const addresscv0sMnj = accounts[4]
		const addressZP093wQ = accounts[2]
		const addressjf0KAlM = accounts[5]
		const addressVqaZheO = "0x0000000000000000000000000000000000000001"
		const addresslFFWfX = accounts[0]
		const addressMuoKRTu = accounts[1]
		const addresscA2b8my = accounts[0]
		const addressO4f3cP = accounts[5]
		const addressKROen2q = "0x0000000000000000000000000000000000000001"
		const addresspf6ciGk = await afiControllerG38un49.inCaseStrategyTokenGetStuck.call(addressZP093wQ, addresscv0sMnj, {from: accounts[3]});
		const uintpUUobgf = await afiControllerG38un49.balanceOf.call(addressjf0KAlM, {from: accounts[3]});
		const addressqTFoPDZ = await afiControllerG38un49.setConverter.call(addressMuoKRTu, addresslFFWfX, addressVqaZheO, {from: accounts[1]});
		const addresshNkxijr = await afiControllerG38un49.setConverter.call(addressKROen2q, addressO4f3cP, addresscA2b8my, {from: accounts[2]});

		await expect(afiControllerG38un49.inCaseStrategyTokenGetStuck.call(addressZP093wQ, addresscv0sMnj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressRNFdJyL = accounts[0]
		const afiControllerG38un49 = await afiController.new(addressRNFdJyL, {from: accounts[4]});
		const addressDOg1CeM = accounts[1]
		const addresswK7AGgg = accounts[0]
		const uintjBQO1tt = await afiControllerG38un49.balanceOf.call(addressDOg1CeM, {from: "0x0000000000000000000000000000000000000001"});
		const uintWa6SyI = await afiControllerG38un49.balanceOf.call(addresswK7AGgg, {from: accounts[2]});

		await expect(afiControllerG38un49.balanceOf.call(addressDOg1CeM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address2WPdNq = accounts[0]
		const afiControllerG38un49 = await afiController.new(address2WPdNq, {from: accounts[4]});
		const addresspyBXaSR = accounts[4]
		const addressrM3wiD4 = accounts[1]
		const addressOL3ZDv = accounts[0]
		const addressbEmyaT5 = await afiControllerG38un49.setOneSplit.call(addresspyBXaSR, {from: accounts[4]});
		const addressWGfm37 = await afiControllerG38un49.withdrawAll.call(addressrM3wiD4, {from: accounts[2]});
		const uintWa6SyI = await afiControllerG38un49.balanceOf.call(addressOL3ZDv, {from: accounts[2]});

		await expect(afiControllerG38un49.withdrawAll.call(addressrM3wiD4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressKCQt6GL = accounts[0]
		const afiControllerG38un49 = await afiController.new(addressKCQt6GL, {from: accounts[4]});
		const uintiXNqRO3 = BigInt("256")
		const addressGuDhIHo = accounts[1]
		const uintenlDjLA = await afiControllerG38un49.setSplit.call(uintiXNqRO3, {from: accounts[5]});
		const uintWa6SyI = await afiControllerG38un49.balanceOf.call(addressGuDhIHo, {from: accounts[2]});

		await expect(afiControllerG38un49.setSplit.call(uintiXNqRO3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressT2Sm5d = accounts[0]
		const afiControllerG38un49 = await afiController.new(addressT2Sm5d, {from: accounts[4]});
		const uintfgN2gQP = BigInt("764")
		const addressanczKwz = accounts[1]
		const addressy058VUb = accounts[4]
		const addressXjX9C8 = accounts[1]
		const uintbnbu762 = await afiControllerG38un49.getExpectedReturn.call(addressy058VUb, addressanczKwz, uintfgN2gQP, {from: accounts[4]});
		const uintWa6SyI = await afiControllerG38un49.balanceOf.call(addressXjX9C8, {from: accounts[2]});

		await expect(afiControllerG38un49.getExpectedReturn.call(addressy058VUb, addressanczKwz, uintfgN2gQP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressEuz8WAP = "0x0000000000000000000000000000000000000001"
		const afiControllerWX4Ufzp = await afiController.new(addressEuz8WAP, {from: "0x0000000000000000000000000000000000000001"});
		const addressotSGULS = "0x0000000000000000000000000000000000000001"
		const addressI8670Pu = accounts[5]
		const addresskW1nwxX = accounts[2]
		const addressoIf4yd0 = accounts[0]
		const addresswhULVoh = accounts[1]
		const addressmJK6TSm = accounts[1]
		const addresswF7FUpD = accounts[3]
		const addressSiov9Nf = await afiControllerWX4Ufzp.inCaseStrategyTokenGetStuck.call(addressI8670Pu, addressotSGULS, {from: accounts[1]});
		const addressJeosxHp = await afiControllerWX4Ufzp.setGovernance.call(addresskW1nwxX, {from: accounts[5]});
		const addressVGfDyhY = await afiControllerWX4Ufzp.setGovernance.call(addressoIf4yd0, {from: accounts[4]});
		const uintyl1YE9V = await afiControllerWX4Ufzp.balanceOf.call(addresswhULVoh, {from: accounts[3]});
		const uintWLs6htI = await afiControllerWX4Ufzp.balanceOf.call(addressmJK6TSm, {from: accounts[2]});
		const addressrU0YC4a = await afiControllerWX4Ufzp.setOneSplit.call(addresswF7FUpD, {from: accounts[3]});
	});

	it('test for afiController', async () => {
		const addressf2IziT = accounts[0]
		const afiControllerG38un49 = await afiController.new(addressf2IziT, {from: accounts[4]});
		const addressQo69r2d = accounts[2]
		const addressVTxFdIQ = accounts[0]
		const addressDb0vMU7 = accounts[1]
		const addressT2c02x1 = accounts[0]
		const addressifkqx5C = accounts[3]
		const addressBTpFQs = accounts[1]
		const addresstlHQogk = await afiControllerG38un49.setStrategy.call(addressVTxFdIQ, addressQo69r2d, {from: accounts[4]});
		const addressm64YwdU = await afiControllerG38un49.setConverter.call(addressifkqx5C, addressT2c02x1, addressDb0vMU7, {from: accounts[2]});
		const uintWa6SyI = await afiControllerG38un49.balanceOf.call(addressBTpFQs, {from: accounts[2]});

		await expect(afiControllerG38un49.setStrategy.call(addressVTxFdIQ, addressQo69r2d, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressPi5D7rH = accounts[0]
		const afiControllerG38un49 = await afiController.new(addressPi5D7rH, {from: accounts[4]});
		const uintaks6juz = BigInt("267")
		const addressUA2528y = accounts[3]
		const addressTHQIga = accounts[1]
		const addresswwFnyBP = accounts[4]
		const addressZ97WZ3J = await afiControllerG38un49.earn.call(addressUA2528y, uintaks6juz, {from: accounts[5]});
		const uintWa6SyI = await afiControllerG38un49.balanceOf.call(addressTHQIga, {from: accounts[2]});
		const addresspOs0BQ = await afiControllerG38un49.withdrawAll.call(addresswwFnyBP, {from: accounts[1]});

		await expect(afiControllerG38un49.earn.call(addressUA2528y, uintaks6juz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressaeJmiAv = accounts[0]
		const afiControllerG38un49 = await afiController.new(addressaeJmiAv, {from: accounts[4]});
		const addressP9XEll = accounts[5]
		const addressFXKZpaP = accounts[0]
		const addressrmmQrJm = accounts[0]
		const uintkEpex5U = BigInt("438")
		const addressDtxvFfF = accounts[0]
		const addressy1jvEwP = accounts[0]
		const addressOVQTUX6 = accounts[1]
		const addressJDyWQsK = accounts[0]
		const addressQvxs7TF = await afiControllerG38un49.setConverter.call(addressrmmQrJm, addressFXKZpaP, addressP9XEll, {from: accounts[4]});
		const addressEjd9j5d = await afiControllerG38un49.yearn.call(addressy1jvEwP, addressDtxvFfF, uintkEpex5U, {from: accounts[4]});
		const uintWa6SyI = await afiControllerG38un49.balanceOf.call(addressOVQTUX6, {from: accounts[2]});
		const addressGwo7CdH = await afiControllerG38un49.withdrawAll.call(addressJDyWQsK, {from: accounts[0]});

		await expect(afiControllerG38un49.yearn.call(addressy1jvEwP, addressDtxvFfF, uintkEpex5U, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressLi264B = accounts[0]
		const afiControllerG38un49 = await afiController.new(addressLi264B, {from: accounts[4]});
		const uintdqbWXP = BigInt("1680")
		const addressFm2GAIN = accounts[0]
		const addressCuhnpe = accounts[0]
		const addressewwmOKF = accounts[4]
		const addressihqa0eA = "0x0000000000000000000000000000000000000001"
		const addressPYwIpw3 = accounts[2]
		const addressWvcoQ6V = await afiControllerG38un49.inCaseTokensGetStuck.call(addressFm2GAIN, uintdqbWXP, {from: accounts[4]});
		const addressshiV04 = await afiControllerG38un49.setVault.call(addressewwmOKF, addressCuhnpe, {from: accounts[1]});
		const addresspWAq46 = await afiControllerG38un49.withdrawAll.call(addressihqa0eA, {from: accounts[3]});
		const uintWa6SyI = await afiControllerG38un49.balanceOf.call(addressPYwIpw3, {from: accounts[2]});

		await expect(afiControllerG38un49.inCaseTokensGetStuck.call(addressFm2GAIN, uintdqbWXP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressnBoiRHG = accounts[5]
		const afiControllerr8tAAP = await afiController.new(addressnBoiRHG, {from: accounts[1]});
		const uintfyob4t1 = BigInt("1061")
		const addressJTf0n3l = accounts[4]
		const addressvx85wVe = accounts[3]
		const addressvgrLrvx = accounts[0]
		const addressOjSpSgW = accounts[0]
		const addressqdPYlt = await afiControllerr8tAAP.withdraw.call(addressJTf0n3l, uintfyob4t1, {from: accounts[1]});
		const addressgp6iVh1 = await afiControllerr8tAAP.setStrategist.call(addressvx85wVe, {from: accounts[1]});
		const addressoXZsge5 = await afiControllerr8tAAP.setStrategy.call(addressOjSpSgW, addressvgrLrvx, {from: accounts[0]});

		await expect(afiControllerr8tAAP.withdraw.call(addressJTf0n3l, uintfyob4t1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})