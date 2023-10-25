const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressP6Po1h = accounts[0]
		const afiControllery7KFwU0 = await afiController.new(addressP6Po1h, {from: accounts[5]});
		const addressNnPmWD3 = accounts[5]
		const addressSzWgJn = "0x0000000000000000000000000000000000000001"
		const addresskqym5oz = accounts[0]
		const addresspVu8GZ = accounts[3]
		const addressx7ZpGum = accounts[5]
		const addressC4yZPzx = accounts[2]
		const addressY6RBL4Z = accounts[2]
		const addressysyDjaB = accounts[0]
		const addressnOBctey = accounts[2]
//		const addressQaHsKab = await afiControllery7KFwU0.withdrawAll.call(addressNnPmWD3, {from: accounts[4]});
//		const addressDuFEuLU = await afiControllery7KFwU0.revokeStrategy.call(addresskqym5oz, addressSzWgJn, {from: accounts[4]});
//		const addressN2qcdAn = await afiControllery7KFwU0.inCaseStrategyTokenGetStuck.call(addressx7ZpGum, addresspVu8GZ, {from: accounts[4]});
//		const addressknin3HE = await afiControllery7KFwU0.setRewards.call(addressC4yZPzx, {from: accounts[3]});
//		const addressd5lkJxN = await afiControllery7KFwU0.setConverter.call(addressnOBctey, addressysyDjaB, addressY6RBL4Z, {from: accounts[4]});

		await expect(afiControllery7KFwU0.withdrawAll.call(addressNnPmWD3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresseYFj71i = "0x0000000000000000000000000000000000000001"
		const afiControllerwwN4jwy = await afiController.new(addresseYFj71i, {from: accounts[4]});
		const addresspTMFttO = accounts[2]
		const addressvBe0bUp = accounts[0]
		const uintFne9owk = BigInt("1262")
		const addressBVPtiq = accounts[0]
		const addressk2rUmQK = accounts[3]
		const addressonOrS1C = accounts[3]
		const addressLFh6BOB = accounts[1]
		const addressbCjHXxk = accounts[5]
		const addresshWA2Qtc = accounts[1]
		const addressLb2FyhR = "0x0000000000000000000000000000000000000001"
		const addressduo77xC = accounts[1]
//		const addressAeGs4zf = await afiControllerwwN4jwy.approveStrategy.call(addressvBe0bUp, addresspTMFttO, {from: accounts[3]});
//		const addressnZ3zR7P = await afiControllerwwN4jwy.inCaseTokensGetStuck.call(addressBVPtiq, uintFne9owk, {from: accounts[2]});
//		const addressG0DA8KD = await afiControllerwwN4jwy.setVault.call(addressonOrS1C, addressk2rUmQK, {from: accounts[1]});
//		const addresscEJQUV7 = await afiControllerwwN4jwy.setStrategy.call(addressbCjHXxk, addressLFh6BOB, {from: accounts[4]});
//		const uintG3RcP7 = await afiControllerwwN4jwy.balanceOf.call(addresshWA2Qtc, {from: accounts[5]});
//		const addresslCPqJKF = await afiControllerwwN4jwy.setStrategy.call(addressduo77xC, addressLb2FyhR, {from: accounts[2]});

		await expect(afiControllerwwN4jwy.approveStrategy.call(addressvBe0bUp, addresspTMFttO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressypiDdP9 = "0x0000000000000000000000000000000000000001"
		const afiControllerJcHcTTv = await afiController.new(addressypiDdP9, {from: accounts[0]});
		const addresswZKESJp = accounts[2]
		const addressCr24PKA = accounts[1]
		const addressyFhr8E1 = accounts[5]
		const addressIm2656h = accounts[2]
		const addressMzxErkn = accounts[1]
		const addressWUULg7J = accounts[4]
		const addressISBg7jt = await afiControllerJcHcTTv.setRewards.call(addresswZKESJp, {from: accounts[0]});
//		const addressXxzCiA6 = await afiControllerJcHcTTv.revokeStrategy.call(addressyFhr8E1, addressCr24PKA, {from: accounts[4]});
//		const addressy2ZmzI2 = await afiControllerJcHcTTv.setGovernance.call(addressIm2656h, {from: accounts[2]});
//		const addressZ54sCS = await afiControllerJcHcTTv.revokeStrategy.call(addressWUULg7J, addressMzxErkn, {from: accounts[4]});

		await expect(afiControllerJcHcTTv.revokeStrategy.call(addressyFhr8E1, addressCr24PKA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressgSslKV0 = accounts[0]
		const afiControllerTURyNos = await afiController.new(addressgSslKV0, {from: accounts[5]});
		const uintwjvI4kv = BigInt("859")
		const uintOY9zIEt = BigInt("1525")
		const addressacy20PU = accounts[1]
		const addressXyrVyV = accounts[0]
//		const uintF3Q76J = await afiControllerTURyNos.setSplit.call(uintwjvI4kv, {from: accounts[3]});
//		const uintzYgzJiB = await afiControllerTURyNos.setSplit.call(uintOY9zIEt, {from: accounts[2]});
//		const addressiA9fO8 = await afiControllerTURyNos.approveStrategy.call(addressXyrVyV, addressacy20PU, {from: accounts[0]});

		await expect(afiControllerTURyNos.setSplit.call(uintwjvI4kv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressjHEpfI9 = accounts[0]
		const afiControllerzXn2D54 = await afiController.new(addressjHEpfI9, {from: accounts[1]});
		const addresskBEMh47 = accounts[5]
		const uintQBsYSM = BigInt("1654")
		const addressIwVmae = accounts[1]
		const addressrWTJBHI = accounts[2]
		const addressJd0q6Qm = accounts[4]
		const addressg9JW738 = accounts[2]
		const addressJzbNWmW = accounts[1]
		const uintY74A5Jc = BigInt("368")
		const address247Nxe = accounts[5]
		const addressLzwmVZ5 = accounts[4]
//		const addressUI7gR4 = await afiControllerzXn2D54.setGovernance.call(addresskBEMh47, {from: accounts[2]});
//		const uinteBZzC1F = await afiControllerzXn2D54.getExpectedReturn.call(addressrWTJBHI, addressIwVmae, uintQBsYSM, {from: accounts[4]});
//		const addressHeCB8AX = await afiControllerzXn2D54.withdrawAll.call(addressJd0q6Qm, {from: accounts[1]});
//		const addresswmVIqI0 = await afiControllerzXn2D54.approveStrategy.call(addressJzbNWmW, addressg9JW738, {from: accounts[3]});
//		const addressfoL0kZ2 = await afiControllerzXn2D54.yearn.call(addressLzwmVZ5, address247Nxe, uintY74A5Jc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerzXn2D54.setGovernance.call(addresskBEMh47, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscD52AlU = accounts[1]
		const afiControllerhcpxU8G = await afiController.new(addresscD52AlU, {from: accounts[1]});
		const uintqYfXtU4 = BigInt("770")
		const addressZXNpNiK = accounts[4]
		const addressvp1p0f = accounts[4]
		const addressrDBOXEh = "0x0000000000000000000000000000000000000001"
		const addressLB64ejS = accounts[4]
		const addresstQVGqYR = accounts[0]
		const addressa486C5Z = accounts[3]
		const addressF7DTu4m = accounts[0]
		const addressc3F0nTK = accounts[1]
		const addressLbN6G0O = accounts[0]
		const addresscnxpCg = accounts[0]
//		const addressV9tzaZe = await afiControllerhcpxU8G.yearn.call(addressvp1p0f, addressZXNpNiK, uintqYfXtU4, {from: accounts[1]});
//		const addressoDgwg2x = await afiControllerhcpxU8G.setOneSplit.call(addressrDBOXEh, {from: accounts[4]});
//		const addressu7IfQLf = await afiControllerhcpxU8G.setConverter.call(addressa486C5Z, addresstQVGqYR, addressLB64ejS, {from: accounts[4]});
//		const addressPPhhPIJ = await afiControllerhcpxU8G.approveStrategy.call(addressc3F0nTK, addressF7DTu4m, {from: accounts[5]});
//		const addressJ5l54V5 = await afiControllerhcpxU8G.approveStrategy.call(addresscnxpCg, addressLbN6G0O, {from: accounts[2]});

		await expect(afiControllerhcpxU8G.yearn.call(addressvp1p0f, addressZXNpNiK, uintqYfXtU4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresshMONdv = "0x0000000000000000000000000000000000000001"
		const afiControllerj31LAb3 = await afiController.new(addresshMONdv, {from: accounts[0]});
		const addressHm96QxV = accounts[0]
		const addressrhPDxzH = accounts[0]
		const addressQn2kDP = accounts[5]
		const uintPxo5GXy = BigInt("1749")
		const address06mnTL = accounts[1]
		const addressDF48FCu = accounts[1]
		const addressZ5PyFOj = accounts[5]
		const addressWogn4tJ = accounts[5]
//		const addresswkmWGIU = await afiControllerj31LAb3.setVault.call(addressrhPDxzH, addressHm96QxV, {from: accounts[5]});
//		const addressSHeYe8g = await afiControllerj31LAb3.withdrawAll.call(addressQn2kDP, {from: accounts[3]});
//		const uinttQ5XxCt = await afiControllerj31LAb3.getExpectedReturn.call(addressDF48FCu, address06mnTL, uintPxo5GXy, {from: accounts[3]});
//		const addressapJ0CS = await afiControllerj31LAb3.approveStrategy.call(addressWogn4tJ, addressZ5PyFOj, {from: accounts[1]});

		await expect(afiControllerj31LAb3.setVault.call(addressrhPDxzH, addressHm96QxV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressho4PcJ = accounts[5]
		const afiControllercKAaogo = await afiController.new(addressho4PcJ, {from: accounts[4]});
		const addressCtDQaX7 = accounts[2]
		const addresshlv2GBC = accounts[4]
		const addresscLcL17T = accounts[4]
		const addresscCTFO58 = accounts[1]
		const addressNpKeQXA = "0x0000000000000000000000000000000000000001"
		const addressNL6oOpd = accounts[1]
		const uintKJvGHz9 = BigInt("448")
		const addressmuCcQEU = accounts[3]
//		const addressmaYFDYC = await afiControllercKAaogo.setStrategy.call(addresshlv2GBC, addressCtDQaX7, {from: accounts[4]});
//		const addressnf3Obv5 = await afiControllercKAaogo.setStrategist.call(addresscLcL17T, {from: accounts[1]});
//		const addressnjrXsJp = await afiControllercKAaogo.setConverter.call(addressNL6oOpd, addressNpKeQXA, addresscCTFO58, {from: accounts[0]});
//		const addresskLmwMtq = await afiControllercKAaogo.withdraw.call(addressmuCcQEU, uintKJvGHz9, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllercKAaogo.setStrategy.call(addresshlv2GBC, addressCtDQaX7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressBorsMIy = accounts[0]
		const afiControllerTURyNos = await afiController.new(addressBorsMIy, {from: accounts[5]});
		const addressOgBECXr = accounts[5]
		const uintmThIgjR = BigInt("859")
		const uintJbkXVu1 = BigInt("1553")
		const addressOaLVbAe = accounts[1]
		const addresslzAarUY = accounts[0]
//		const addressouauWo9 = await afiControllerTURyNos.setStrategist.call(addressOgBECXr, {from: accounts[1]});
//		const uintF3Q76J = await afiControllerTURyNos.setSplit.call(uintmThIgjR, {from: accounts[3]});
//		const uintzYgzJiB = await afiControllerTURyNos.setSplit.call(uintJbkXVu1, {from: accounts[2]});
//		const addressiA9fO8 = await afiControllerTURyNos.approveStrategy.call(addresslzAarUY, addressOaLVbAe, {from: accounts[0]});

		await expect(afiControllerTURyNos.setStrategist.call(addressOgBECXr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressFoEOwt = accounts[4]
		const afiControlleryKjV8op = await afiController.new(addressFoEOwt, {from: accounts[0]});
		const addressVq6ZiaA = "0x0000000000000000000000000000000000000001"
		const uintqvhqmVX = BigInt("652")
		const addressJvL6wNh = accounts[0]
		const addressQzrM0oh = accounts[0]
		const uintEwTPmS = BigInt("240")
		const addressxFvX3d = accounts[0]
		const addressZ2J1uzV = accounts[4]
		const addressNatj54P = accounts[3]
//		const uintvy6F4Bw = await afiControlleryKjV8op.balanceOf.call(addressVq6ZiaA, {from: accounts[4]});
//		const addressytzqgnK = await afiControlleryKjV8op.earn.call(addressJvL6wNh, uintqvhqmVX, {from: accounts[0]});
//		const addressMFWE0yG = await afiControlleryKjV8op.setRewards.call(addressQzrM0oh, {from: accounts[4]});
//		const addressejUimez = await afiControlleryKjV8op.earn.call(addressxFvX3d, uintEwTPmS, {from: accounts[0]});
//		const address9hnxk6 = await afiControlleryKjV8op.withdrawAll.call(addressZ2J1uzV, {from: accounts[3]});
//		const addressIoINsWs = await afiControlleryKjV8op.setGovernance.call(addressNatj54P, {from: accounts[4]});

		await expect(afiControlleryKjV8op.balanceOf.call(addressVq6ZiaA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressuXQR6HF = accounts[4]
		const afiControlleryKjV8op = await afiController.new(addressuXQR6HF, {from: accounts[0]});
		const uintZ694S8b = BigInt("1983")
		const addressMLlDj4 = accounts[1]
		const addressB2wCR3 = accounts[4]
		const uintE0JI5Bg = BigInt("497")
		const addressts3iih9 = accounts[3]
//		const addressk34nq9O = await afiControlleryKjV8op.inCaseTokensGetStuck.call(addressMLlDj4, uintZ694S8b, {from: accounts[1]});
//		const addressMFWE0yG = await afiControlleryKjV8op.setRewards.call(addressB2wCR3, {from: accounts[4]});
//		const addressa11ULjt = await afiControlleryKjV8op.withdraw.call(addressts3iih9, uintE0JI5Bg, {from: accounts[3]});

		await expect(afiControlleryKjV8op.inCaseTokensGetStuck.call(addressMLlDj4, uintZ694S8b, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressMc24MaK = accounts[4]
		const afiControlleryKjV8op = await afiController.new(addressMc24MaK, {from: accounts[0]});
		const uinte248h7r = BigInt("240")
		const addresslYBrYu = accounts[1]
		const addressirUoC2d = accounts[0]
		const addressodAth6 = accounts[0]
//		const addressejUimez = await afiControlleryKjV8op.earn.call(addresslYBrYu, uinte248h7r, {from: accounts[0]});
//		const addressaluXHAL = await afiControlleryKjV8op.revokeStrategy.call(addressodAth6, addressirUoC2d, {from: accounts[2]});

		await expect(afiControlleryKjV8op.earn.call(addresslYBrYu, uinte248h7r, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIaBrBc6 = accounts[4]
		const afiControlleryKjV8op = await afiController.new(addressIaBrBc6, {from: accounts[0]});
		const address03aMrn = accounts[2]
		const addressifjKRa = accounts[0]
		const addressZkT0zYG = accounts[3]
		const addressDwnZUG1 = accounts[4]
		const addressyGWRCBW = accounts[2]
		const uintSB8XFeG = BigInt("240")
		const addressK6P4TL = accounts[5]
//		const addressfWacFGx = await afiControlleryKjV8op.inCaseStrategyTokenGetStuck.call(addressifjKRa, address03aMrn, {from: accounts[0]});
//		const addresso6wYll = await afiControlleryKjV8op.setConverter.call(addressyGWRCBW, addressDwnZUG1, addressZkT0zYG, {from: accounts[2]});
//		const addressejUimez = await afiControlleryKjV8op.earn.call(addressK6P4TL, uintSB8XFeG, {from: accounts[0]});

		await expect(afiControlleryKjV8op.inCaseStrategyTokenGetStuck.call(addressifjKRa, address03aMrn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscuejapv = accounts[4]
		const afiControllerejSiEaB = await afiController.new(addresscuejapv, {from: "0x0000000000000000000000000000000000000001"});
		const addressuPqahwT = accounts[0]
		const addressOA47p0a = "0x0000000000000000000000000000000000000001"
		const uintHwFZgT3 = BigInt("1000")
		const addressIABZC0r = accounts[0]
		const uintCiJZ1N1 = BigInt("1229")
		const addressjEXvE7H = "0x0000000000000000000000000000000000000001"
		const addressueDakBr = accounts[3]
		const addressHeHQIMZ = await afiControllerejSiEaB.approveStrategy.call(addressOA47p0a, addressuPqahwT, {from: accounts[1]});
		const addresszCJWHz = await afiControllerejSiEaB.inCaseTokensGetStuck.call(addressIABZC0r, uintHwFZgT3, {from: accounts[0]});
		const addressJRZhonI = await afiControllerejSiEaB.inCaseTokensGetStuck.call(addressjEXvE7H, uintCiJZ1N1, {from: accounts[1]});
		const addressQz9z2ig = await afiControllerejSiEaB.setGovernance.call(addressueDakBr, {from: accounts[3]});
	});

	it('test for afiController', async () => {
		const addressbYNc1vW = accounts[4]
		const afiControlleryKjV8op = await afiController.new(addressbYNc1vW, {from: accounts[0]});
		const uintKLcjvvd = BigInt("686")
		const addressTG8P6TS = accounts[1]
		const addressp2YuSBO = accounts[2]
		const uintvfk0nSO = BigInt("920")
		const addresspp0nam9 = accounts[2]
		const addressiCgh87s = accounts[0]
//		const uintURvxytI = await afiControlleryKjV8op.getExpectedReturn.call(addressp2YuSBO, addressTG8P6TS, uintKLcjvvd, {from: accounts[4]});
//		const addressts8qFwi = await afiControlleryKjV8op.yearn.call(addressiCgh87s, addresspp0nam9, uintvfk0nSO, {from: accounts[1]});

		await expect(afiControlleryKjV8op.getExpectedReturn.call(addressp2YuSBO, addressTG8P6TS, uintKLcjvvd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxPTGFV0 = accounts[4]
		const afiControlleryKjV8op = await afiController.new(addressxPTGFV0, {from: accounts[0]});
		const uintQxeL3m = BigInt("372")
		const addressQVmuekk = accounts[4]
		const uintPvZaJIc = BigInt("240")
		const addresszv0v0ft = accounts[2]
		const addressyXAKu3v = accounts[4]
//		const addressBsomPph = await afiControlleryKjV8op.withdraw.call(addressQVmuekk, uintQxeL3m, {from: "0x0000000000000000000000000000000000000001"});
//		const addressejUimez = await afiControlleryKjV8op.earn.call(addresszv0v0ft, uintPvZaJIc, {from: accounts[0]});
//		const addressacO1gID = await afiControlleryKjV8op.setStrategist.call(addressyXAKu3v, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControlleryKjV8op.withdraw.call(addressQVmuekk, uintQxeL3m, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressZtVSDGo = accounts[4]
		const afiControlleryKjV8op = await afiController.new(addressZtVSDGo, {from: accounts[0]});
		const addressTVzCbpR = accounts[5]
		const addressdu9Lf3A = accounts[1]
		const uintaf87hmP = BigInt("240")
		const addressXj8KZFU = accounts[1]
//		const addresssOkeN44 = await afiControlleryKjV8op.setOneSplit.call(addressTVzCbpR, {from: accounts[2]});
//		const addressfaUBKD0 = await afiControlleryKjV8op.setStrategist.call(addressdu9Lf3A, {from: accounts[4]});
//		const addressejUimez = await afiControlleryKjV8op.earn.call(addressXj8KZFU, uintaf87hmP, {from: accounts[0]});

		await expect(afiControlleryKjV8op.setOneSplit.call(addressTVzCbpR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressK1wSXGO = accounts[4]
		const afiControlleryKjV8op = await afiController.new(addressK1wSXGO, {from: accounts[0]});
		const addresstxQ7z7k = "0x0000000000000000000000000000000000000001"
		const addressq2IVmvz = accounts[0]
		const addresslXwK6Dz = accounts[1]
		const addressiKWoLuc = accounts[0]
		const addressNrCoxrz = accounts[3]
		const addresszNosNr9 = accounts[2]
		const uintH1FlpfU = BigInt("634")
		const addressYpgSe9u = accounts[0]
		const addressQx4gKWH = "0x0000000000000000000000000000000000000001"
//		const addressJca1mYp = await afiControlleryKjV8op.setConverter.call(addresslXwK6Dz, addressq2IVmvz, addresstxQ7z7k, {from: accounts[3]});
//		const addressfJaIbdx = await afiControlleryKjV8op.setConverter.call(addresszNosNr9, addressNrCoxrz, addressiKWoLuc, {from: accounts[4]});
//		const addressejUimez = await afiControlleryKjV8op.earn.call(addressYpgSe9u, uintH1FlpfU, {from: accounts[0]});
//		const uintfTDRlYS = await afiControlleryKjV8op.balanceOf.call(addressQx4gKWH, {from: accounts[0]});

		await expect(afiControlleryKjV8op.setConverter.call(addresslXwK6Dz, addressq2IVmvz, addresstxQ7z7k, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDM4e2yT = accounts[4]
		const afiControlleryKjV8op = await afiController.new(addressDM4e2yT, {from: accounts[0]});
		const uintxzcPL1E = BigInt("1504")
		const addressIIUQBu = accounts[5]
		const uintlre8ISa = BigInt("240")
		const addressagODiu2 = accounts[5]
		const uintdkmZYgT = BigInt("1523")
		const addressFPOMYLn = accounts[2]
		const addressquPHU1E = accounts[1]
		const addressi3e1JNP = accounts[2]
		const addressQUSZFwA = "0x0000000000000000000000000000000000000001"
//		const addressCLDnwxM = await afiControlleryKjV8op.inCaseTokensGetStuck.call(addressIIUQBu, uintxzcPL1E, {from: accounts[0]});
//		const addressejUimez = await afiControlleryKjV8op.earn.call(addressagODiu2, uintlre8ISa, {from: accounts[0]});
//		const uintik8X3D4 = await afiControlleryKjV8op.getExpectedReturn.call(addressquPHU1E, addressFPOMYLn, uintdkmZYgT, {from: accounts[3]});
//		const addressdJYRfU = await afiControlleryKjV8op.setVault.call(addressQUSZFwA, addressi3e1JNP, {from: accounts[0]});

		await expect(afiControlleryKjV8op.inCaseTokensGetStuck.call(addressIIUQBu, uintxzcPL1E, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})