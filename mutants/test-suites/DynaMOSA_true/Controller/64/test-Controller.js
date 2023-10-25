const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addresstroUe5z = accounts[5]
		const ControllerDwvfbRH = await Controller.new(addresstroUe5z, {from: accounts[2]});
		const addressZiBjiGY = accounts[0]
		const addressQro7SMO = accounts[0]
		const addresslBC7lOo = accounts[0]
		const uintawSMYRN = BigInt("903")
		const uintaJHGrxf = BigInt("305")
		const addressZw2BV8 = accounts[1]
		const addressRvlvL6a = accounts[0]
		const addressFhNkizF = "0x0000000000000000000000000000000000000001"
		const addressbsqQmrs = accounts[3]
		const uintMizvajw = BigInt("1997")
		const addressCNjwRgm = accounts[1]
		const addressIGzSmk = accounts[4]
//		const addressCoxd5LA = await ControllerDwvfbRH.setStrategist.call(addressZiBjiGY, {from: accounts[3]});
//		const addressj7IpvZk = await ControllerDwvfbRH.setVault.call(addresslBC7lOo, addressQro7SMO, {from: accounts[4]});
//		const uintYwzrh5P = await ControllerDwvfbRH.setSplit.call(uintawSMYRN, {from: accounts[2]});
//		const uintX74BE2 = await ControllerDwvfbRH.getExpectedReturn.call(addressRvlvL6a, addressZw2BV8, uintaJHGrxf, {from: accounts[0]});
//		const addressqCOqvik = await ControllerDwvfbRH.approveStrategy.call(addressbsqQmrs, addressFhNkizF, {from: accounts[2]});
//		const uintugyaIUD = await ControllerDwvfbRH.getExpectedReturn.call(addressIGzSmk, addressCNjwRgm, uintMizvajw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerDwvfbRH.setStrategist.call(addressZiBjiGY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressOli0UMI = accounts[1]
		const ControllerDAh0ikn = await Controller.new(addressOli0UMI, {from: "0x0000000000000000000000000000000000000001"});
		const addressfAmtgFR = accounts[4]
		const addressRHD4qCS = "0x0000000000000000000000000000000000000001"
		const addressap0XwSX = accounts[2]
		const addresslaeNPgu = accounts[3]
		const addressEtkjZjB = "0x0000000000000000000000000000000000000001"
		const addressWHR1k2c = accounts[2]
		const addressDLm6i3Q = await ControllerDAh0ikn.inCaseStrategyTokenGetStuck.call(addressRHD4qCS, addressfAmtgFR, {from: accounts[1]});
		const addresstIH4vj = await ControllerDAh0ikn.setVault.call(addresslaeNPgu, addressap0XwSX, {from: "0x0000000000000000000000000000000000000001"});
		const addressD6WTmiw = await ControllerDAh0ikn.inCaseStrategyTokenGetStuck.call(addressWHR1k2c, addressEtkjZjB, {from: accounts[1]});
	});

	it('test for Controller', async () => {
		const addressn643yc = "0x0000000000000000000000000000000000000001"
		const ControllerWhm64OT = await Controller.new(addressn643yc, {from: accounts[1]});
		const addresss1ajyeJ = accounts[2]
		const addresshBoaFIv = accounts[5]
		const uintELBIYaL = BigInt("138")
		const addressjamhBeR = accounts[0]
		const uintDjWA3hk = BigInt("1195")
		const addresszmjeccd = accounts[3]
//		const addressabzqpLq = await ControllerWhm64OT.withdrawAll.call(addresss1ajyeJ, {from: accounts[4]});
//		const addressjtTpIlh = await ControllerWhm64OT.withdrawAll.call(addresshBoaFIv, {from: accounts[0]});
//		const addressxBhA6KF = await ControllerWhm64OT.withdraw.call(addressjamhBeR, uintELBIYaL, {from: accounts[1]});
//		const addressmc1ULs6 = await ControllerWhm64OT.withdraw.call(addresszmjeccd, uintDjWA3hk, {from: accounts[2]});

		await expect(ControllerWhm64OT.withdrawAll.call(addresss1ajyeJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressEH5DD5o = accounts[2]
		const ControllerJKPapJz = await Controller.new(addressEH5DD5o, {from: accounts[5]});
		const addressIcCiDMN = accounts[0]
		const addressLOcrxYw = accounts[1]
		const uintCeEr0T = BigInt("1792")
		const addressNL3PRoR = accounts[3]
		const uinta2bSrSo = BigInt("124")
		const addressEzopfrN = "0x0000000000000000000000000000000000000001"
		const addressBuAGIhm = accounts[3]
		const uintDcRXXD = BigInt("1852")
		const addressRI2F5ws = accounts[2]
		const addressryVNY98 = accounts[4]
		const addressmlL6Zn5 = accounts[3]
//		const addressuAIUHUn = await ControllerJKPapJz.setStrategy.call(addressLOcrxYw, addressIcCiDMN, {from: accounts[1]});
//		const addresssYYxS0g = await ControllerJKPapJz.withdraw.call(addressNL3PRoR, uintCeEr0T, {from: accounts[2]});
//		const addressv6tYgDl = await ControllerJKPapJz.yearn.call(addressBuAGIhm, addressEzopfrN, uinta2bSrSo, {from: accounts[2]});
//		const addressqDdtuVH = await ControllerJKPapJz.inCaseTokensGetStuck.call(addressRI2F5ws, uintDcRXXD, {from: accounts[3]});
//		const addressDptxowT = await ControllerJKPapJz.setStrategy.call(addressmlL6Zn5, addressryVNY98, {from: accounts[3]});

		await expect(ControllerJKPapJz.setStrategy.call(addressLOcrxYw, addressIcCiDMN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressP1H694N = accounts[1]
		const ControllerKwgqsi7 = await Controller.new(addressP1H694N, {from: accounts[3]});
		const addressehFLviL = accounts[4]
		const addressX6dXC2H = accounts[0]
		const uintgLLaDyv = BigInt("1278")
		const addressOypEpvC = "0x0000000000000000000000000000000000000001"
		const addressZRggkbO = accounts[2]
		const addressxo5wS3 = accounts[4]
		const addressYEKIC98 = accounts[3]
		const uint3ecby3 = BigInt("1939")
		const addressCgBZaoK = accounts[3]
//		const addressroBmYz = await ControllerKwgqsi7.setRewards.call(addressehFLviL, {from: "0x0000000000000000000000000000000000000001"});
//		const addressSDoDhvM = await ControllerKwgqsi7.setStrategist.call(addressX6dXC2H, {from: "0x0000000000000000000000000000000000000001"});
//		const uintmnJ9Jk2 = await ControllerKwgqsi7.getExpectedReturn.call(addressZRggkbO, addressOypEpvC, uintgLLaDyv, {from: accounts[2]});
//		const addressMZ9DuTh = await ControllerKwgqsi7.revokeStrategy.call(addressYEKIC98, addressxo5wS3, {from: accounts[0]});
//		const addressBlfO8zz = await ControllerKwgqsi7.withdraw.call(addressCgBZaoK, uint3ecby3, {from: accounts[4]});

		await expect(ControllerKwgqsi7.setRewards.call(addressehFLviL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresscyGfE86 = accounts[1]
		const ControllerxXYFQzI = await Controller.new(addresscyGfE86, {from: accounts[0]});
		const uintS8EvY41 = BigInt("1798")
		const addressOkskmio = accounts[4]
		const addressQyAYBu = accounts[2]
		const addressdqbyoao = accounts[0]
		const addressDQNv3it = accounts[4]
		const addressjqv08Y = accounts[4]
		const addressnKdzAiC = accounts[3]
		const addressBkyzixN = accounts[4]
		const uintfPaf5Gl = BigInt("1821")
		const addressjQVuQp6 = accounts[3]
		const addressYcS8jgM = accounts[3]
		const uintxfJm4wq = await ControllerxXYFQzI.setSplit.call(uintS8EvY41, {from: accounts[0]});
//		const addressgTQ1u6l = await ControllerxXYFQzI.setStrategy.call(addressQyAYBu, addressOkskmio, {from: accounts[3]});
//		const addressIBP1cF = await ControllerxXYFQzI.setGovernance.call(addressdqbyoao, {from: accounts[3]});
//		const addresskxBJtIa = await ControllerxXYFQzI.setVault.call(addressjqv08Y, addressDQNv3it, {from: accounts[2]});
//		const addressNY4GxNl = await ControllerxXYFQzI.revokeStrategy.call(addressBkyzixN, addressnKdzAiC, {from: accounts[0]});
//		const addressCQzGEle = await ControllerxXYFQzI.yearn.call(addressYcS8jgM, addressjQVuQp6, uintfPaf5Gl, {from: accounts[3]});

		await expect(ControllerxXYFQzI.setStrategy.call(addressQyAYBu, addressOkskmio, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressLwK0iVd = accounts[0]
		const ControllerZjz8M91 = await Controller.new(addressLwK0iVd, {from: accounts[5]});
		const uintv0QIm0F = BigInt("417")
		const addressDMk3CV = accounts[3]
		const addresslSxtgxV = accounts[3]
		const addresseUXXEXr = accounts[0]
		const addressIk57ZDY = accounts[0]
		const addressXlI5r5 = "0x0000000000000000000000000000000000000001"
		const addressMZS6dGX = accounts[5]
		const addressswwhIPJ = accounts[2]
		const addressLBy35pM = "0x0000000000000000000000000000000000000001"
		const addressbwxJ1cZ = accounts[2]
//		const addresshxGd0Tc = await ControllerZjz8M91.inCaseTokensGetStuck.call(addressDMk3CV, uintv0QIm0F, {from: accounts[2]});
//		const addresskmOcE75 = await ControllerZjz8M91.setGovernance.call(addresslSxtgxV, {from: accounts[1]});
//		const addresstt68BiI = await ControllerZjz8M91.setConverter.call(addressXlI5r5, addressIk57ZDY, addresseUXXEXr, {from: accounts[0]});
//		const addresswzwyg5 = await ControllerZjz8M91.setStrategist.call(addressMZS6dGX, {from: accounts[0]});
//		const addresspvMapMC = await ControllerZjz8M91.setStrategy.call(addressLBy35pM, addressswwhIPJ, {from: accounts[0]});
//		const addressgzXCgWp = await ControllerZjz8M91.setStrategist.call(addressbwxJ1cZ, {from: accounts[5]});

		await expect(ControllerZjz8M91.inCaseTokensGetStuck.call(addressDMk3CV, uintv0QIm0F, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressgZcItml = accounts[4]
		const ControllerFra4JNM = await Controller.new(addressgZcItml, {from: accounts[2]});
		const addressZgSerul = accounts[2]
		const addressdkic6eb = accounts[2]
		const addressrbdIKni = accounts[4]
		const addressHnt1Du = accounts[4]
//		const addressqj4xyDS = await ControllerFra4JNM.setOneSplit.call(addressZgSerul, {from: accounts[1]});
//		const uintEnJ4cvE = await ControllerFra4JNM.balanceOf.call(addressdkic6eb, {from: accounts[2]});
//		const uintdJixaH = await ControllerFra4JNM.balanceOf.call(addressrbdIKni, {from: accounts[1]});
//		const addressfjkTwCc = await ControllerFra4JNM.setOneSplit.call(addressHnt1Du, {from: accounts[1]});

		await expect(ControllerFra4JNM.setOneSplit.call(addressZgSerul, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxtMPkxV = accounts[1]
		const ControllerxXYFQzI = await Controller.new(addressxtMPkxV, {from: accounts[0]});
		const uintBGVk7s8 = BigInt("1798")
		const addresszx9ML8o = accounts[2]
		const addresspAETqJ = accounts[1]
		const addressZmChkmw = accounts[4]
		const addressTGSaNnt = accounts[2]
		const addresspN23olb = accounts[0]
		const addresstKPxrw7 = accounts[4]
		const addressK11bAzr = accounts[4]
		const addressHnag7E = accounts[3]
		const addressm6RBTpT = accounts[4]
		const uintmhDZ0Ju = BigInt("1821")
		const addressVUovCHL = accounts[3]
		const addressvqAfxHr = accounts[3]
		const uintxfJm4wq = await ControllerxXYFQzI.setSplit.call(uintBGVk7s8, {from: accounts[0]});
//		const addressbytN82k = await ControllerxXYFQzI.inCaseStrategyTokenGetStuck.call(addresspAETqJ, addresszx9ML8o, {from: accounts[1]});
//		const addressgTQ1u6l = await ControllerxXYFQzI.setStrategy.call(addressTGSaNnt, addressZmChkmw, {from: accounts[3]});
//		const addressIBP1cF = await ControllerxXYFQzI.setGovernance.call(addresspN23olb, {from: accounts[3]});
//		const addresskxBJtIa = await ControllerxXYFQzI.setVault.call(addressK11bAzr, addresstKPxrw7, {from: accounts[2]});
//		const addressNY4GxNl = await ControllerxXYFQzI.revokeStrategy.call(addressm6RBTpT, addressHnag7E, {from: accounts[0]});
//		const addressCQzGEle = await ControllerxXYFQzI.yearn.call(addressvqAfxHr, addressVUovCHL, uintmhDZ0Ju, {from: accounts[3]});

		await expect(ControllerxXYFQzI.inCaseStrategyTokenGetStuck.call(addresspAETqJ, addresszx9ML8o, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressu1WVb11 = "0x0000000000000000000000000000000000000001"
		const ControllerWhm64OT = await Controller.new(addressu1WVb11, {from: accounts[1]});
		const uintmF3c1CH = BigInt("165")
		const addressKQN2XJS = accounts[2]
		const addresslDtkrQT = accounts[4]
		const address7FBaVa = accounts[2]
		const addressPWpwwKQ = accounts[6]
		const uintMAgePb0 = BigInt("1195")
		const addressNZ1ygzi = accounts[3]
//		const uinttDJXVpf = await ControllerWhm64OT.getExpectedReturn.call(addresslDtkrQT, addressKQN2XJS, uintmF3c1CH, {from: accounts[5]});
//		const addressabzqpLq = await ControllerWhm64OT.withdrawAll.call(address7FBaVa, {from: accounts[4]});
//		const addressjtTpIlh = await ControllerWhm64OT.withdrawAll.call(addressPWpwwKQ, {from: accounts[0]});
//		const addressmc1ULs6 = await ControllerWhm64OT.withdraw.call(addressNZ1ygzi, uintMAgePb0, {from: accounts[2]});

		await expect(ControllerWhm64OT.getExpectedReturn.call(addresslDtkrQT, addressKQN2XJS, uintmF3c1CH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressprJ9ebY = accounts[3]
		const ControllerQp1Yqt = await Controller.new(addressprJ9ebY, {from: accounts[0]});
		const uintATQDoud = BigInt("1807")
		const addressbmQ8url = accounts[5]
		const addresszM1ItEw = accounts[4]
		const addressU7WA5qV = accounts[4]
		const addressy15FXhH = accounts[4]
		const addresseYUsXGg = accounts[4]
//		const addressD3Wr3By = await ControllerQp1Yqt.inCaseTokensGetStuck.call(addressbmQ8url, uintATQDoud, {from: accounts[0]});
//		const addressT5fTRL8 = await ControllerQp1Yqt.setOneSplit.call(addresszM1ItEw, {from: accounts[3]});
//		const addressEiXuwEm = await ControllerQp1Yqt.approveStrategy.call(addressy15FXhH, addressU7WA5qV, {from: accounts[3]});
//		const uint396TTD = await ControllerQp1Yqt.balanceOf.call(addresseYUsXGg, {from: accounts[4]});

		await expect(ControllerQp1Yqt.inCaseTokensGetStuck.call(addressbmQ8url, uintATQDoud, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressWqm6AHu = accounts[1]
		const ControllerKwgqsi7 = await Controller.new(addressWqm6AHu, {from: accounts[3]});
		const addressU4aHN01 = accounts[4]
		const addressoDvTXHm = accounts[4]
		const addressKI41x0n = accounts[4]
		const addresseDll4ne = accounts[0]
		const uintyVXHO2O = BigInt("1278")
		const addressVJkfVG1 = accounts[2]
		const addressIhFFPxx = accounts[2]
		const uintbwQC9AJ = BigInt("1939")
		const addressFpJq4Pv = accounts[3]
//		const addresscZc67C8 = await ControllerKwgqsi7.revokeStrategy.call(addressoDvTXHm, addressU4aHN01, {from: accounts[1]});
//		const addressroBmYz = await ControllerKwgqsi7.setRewards.call(addressKI41x0n, {from: "0x0000000000000000000000000000000000000001"});
//		const addressSDoDhvM = await ControllerKwgqsi7.setStrategist.call(addresseDll4ne, {from: "0x0000000000000000000000000000000000000001"});
//		const uintmnJ9Jk2 = await ControllerKwgqsi7.getExpectedReturn.call(addressIhFFPxx, addressVJkfVG1, uintyVXHO2O, {from: accounts[2]});
//		const addressBlfO8zz = await ControllerKwgqsi7.withdraw.call(addressFpJq4Pv, uintbwQC9AJ, {from: accounts[4]});

		await expect(ControllerKwgqsi7.revokeStrategy.call(addressoDvTXHm, addressU4aHN01, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressawcYhjJ = accounts[2]
		const ControllerJKPapJz = await Controller.new(addressawcYhjJ, {from: accounts[5]});
		const addressnrIMSTH = accounts[5]
		const addresshhWDLIt = accounts[4]
		const addresscQMtTVM = accounts[1]
		const addressUUQewCy = accounts[1]
		const addresskgEU051 = accounts[0]
		const addressixiAWhu = accounts[1]
		const uintfC5wJOM = BigInt("124")
		const addressCBkC78s = "0x0000000000000000000000000000000000000001"
		const addresskuxyJ1L = accounts[3]
		const addressHoWSDmE = accounts[1]
		const uintJvW9wua = BigInt("1852")
		const addressnszXpB = accounts[2]
		const addresstnJnHbs = accounts[1]
		const addressXVxxQ8I = accounts[4]
//		const addressP9bwAAH = await ControllerJKPapJz.setConverter.call(addresscQMtTVM, addresshhWDLIt, addressnrIMSTH, {from: accounts[0]});
//		const addresskHFPDnr = await ControllerJKPapJz.setOneSplit.call(addressUUQewCy, {from: accounts[2]});
//		const addressuAIUHUn = await ControllerJKPapJz.setStrategy.call(addressixiAWhu, addresskgEU051, {from: accounts[1]});
//		const addressv6tYgDl = await ControllerJKPapJz.yearn.call(addresskuxyJ1L, addressCBkC78s, uintfC5wJOM, {from: accounts[2]});
//		const addressz76Bi5 = await ControllerJKPapJz.withdrawAll.call(addressHoWSDmE, {from: accounts[1]});
//		const addressqDdtuVH = await ControllerJKPapJz.inCaseTokensGetStuck.call(addressnszXpB, uintJvW9wua, {from: accounts[3]});
//		const addressDptxowT = await ControllerJKPapJz.setStrategy.call(addressXVxxQ8I, addresstnJnHbs, {from: accounts[3]});

		await expect(ControllerJKPapJz.setConverter.call(addresscQMtTVM, addresshhWDLIt, addressnrIMSTH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresszYiRZy2 = accounts[1]
		const ControllerAONoaZd = await Controller.new(addresszYiRZy2, {from: accounts[0]});
		const addressgy8egCx = accounts[0]
		const uintp4cUcyD = BigInt("1511")
		const addressxUKWzOy = accounts[0]
		const addresszO6SbNi = accounts[1]
		const addressH3mbhU8 = accounts[4]
//		const addressiSb365z = await ControllerAONoaZd.setGovernance.call(addressgy8egCx, {from: "0x0000000000000000000000000000000000000001"});
//		const addressTLd8M3J = await ControllerAONoaZd.earn.call(addressxUKWzOy, uintp4cUcyD, {from: accounts[0]});
//		const addressyP5e7z1 = await ControllerAONoaZd.approveStrategy.call(addressH3mbhU8, addresszO6SbNi, {from: accounts[3]});

		await expect(ControllerAONoaZd.setGovernance.call(addressgy8egCx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressqE4KjFq = accounts[1]
		const ControllerS0dQnlE = await Controller.new(addressqE4KjFq, {from: accounts[2]});
		const addresslGbKQ61 = accounts[2]
		const addresskRI1dOb = accounts[4]
		const addressjAxszLm = accounts[4]
		const addressqCkCNAa = accounts[3]
		const addressjDXOPc1 = await ControllerS0dQnlE.approveStrategy.call(addresskRI1dOb, addresslGbKQ61, {from: accounts[2]});
//		const addresso5T8LpE = await ControllerS0dQnlE.setStrategist.call(addressjAxszLm, {from: "0x0000000000000000000000000000000000000001"});
//		const addressAnZ9vE = await ControllerS0dQnlE.withdrawAll.call(addressqCkCNAa, {from: accounts[2]});

		await expect(ControllerS0dQnlE.setStrategist.call(addressjAxszLm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressYXEPmu8 = accounts[1]
		const ControllerS0dQnlE = await Controller.new(addressYXEPmu8, {from: accounts[2]});
		const addressGS0kBAV = accounts[2]
		const addressAV1j3IC = accounts[4]
		const addresstZEQ35q = accounts[3]
		const addressjDXOPc1 = await ControllerS0dQnlE.approveStrategy.call(addressAV1j3IC, addressGS0kBAV, {from: accounts[2]});
//		const addressAnZ9vE = await ControllerS0dQnlE.withdrawAll.call(addresstZEQ35q, {from: accounts[2]});

		await expect(ControllerS0dQnlE.withdrawAll.call(addresstZEQ35q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressnskyB9U = accounts[1]
		const ControllerAONoaZd = await Controller.new(addressnskyB9U, {from: accounts[0]});
		const addressSjZK6Jb = accounts[2]
		const uintRYTZLN5 = BigInt("1511")
		const addressE9sOlzu = accounts[0]
		const addressCqVutWw = accounts[1]
		const addressv0YQcWP = accounts[4]
//		const uintHHvSIz1 = await ControllerAONoaZd.balanceOf.call(addressSjZK6Jb, {from: accounts[0]});
//		const addressTLd8M3J = await ControllerAONoaZd.earn.call(addressE9sOlzu, uintRYTZLN5, {from: accounts[0]});
//		const addressyP5e7z1 = await ControllerAONoaZd.approveStrategy.call(addressv0YQcWP, addressCqVutWw, {from: accounts[3]});

		await expect(ControllerAONoaZd.balanceOf.call(addressSjZK6Jb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressdET4mNL = accounts[1]
		const ControllerAONoaZd = await Controller.new(addressdET4mNL, {from: accounts[0]});
		const uintJNc6m2 = BigInt("1511")
		const addressF4nUA7Z = accounts[0]
		const addressmn0yqIw = accounts[1]
		const addresswdGakF = accounts[4]
//		const addressTLd8M3J = await ControllerAONoaZd.earn.call(addressF4nUA7Z, uintJNc6m2, {from: accounts[0]});
//		const addressyP5e7z1 = await ControllerAONoaZd.approveStrategy.call(addresswdGakF, addressmn0yqIw, {from: accounts[3]});

		await expect(ControllerAONoaZd.earn.call(addressF4nUA7Z, uintJNc6m2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressDnt5MbH = accounts[3]
		const ControllerQeczU4m = await Controller.new(addressDnt5MbH, {from: accounts[1]});
		const addressvS4XRs = accounts[2]
		const addressjI3yXPt = accounts[0]
		const uintsP1aLoE = BigInt("867")
		const addressWHreEzr = accounts[1]
		const addresslVgU6yU = "0x0000000000000000000000000000000000000001"
		const addressh4tCji4 = accounts[3]
		const addressIauRUdW = accounts[0]
//		const addressIoSoztl = await ControllerQeczU4m.inCaseStrategyTokenGetStuck.call(addressjI3yXPt, addressvS4XRs, {from: accounts[1]});
//		const uintJIf5MIx = await ControllerQeczU4m.setSplit.call(uintsP1aLoE, {from: accounts[1]});
//		const addressjXSMh1e = await ControllerQeczU4m.revokeStrategy.call(addresslVgU6yU, addressWHreEzr, {from: accounts[5]});
//		const addressKCx0QrZ = await ControllerQeczU4m.revokeStrategy.call(addressIauRUdW, addressh4tCji4, {from: accounts[2]});

		await expect(ControllerQeczU4m.inCaseStrategyTokenGetStuck.call(addressjI3yXPt, addressvS4XRs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressi5dNLxS = accounts[2]
		const ControllerJKPapJz = await Controller.new(addressi5dNLxS, {from: accounts[5]});
		const uintlpXPR1l = BigInt("566")
		const addressnrMK1oB = accounts[2]
		const addressUdeLJd = "0x0000000000000000000000000000000000000001"
		const addresstg0pKzm = accounts[0]
		const addressd0wTsFc = accounts[1]
		const addressjRlIJa8 = accounts[0]
//		const addressPuJbE7 = await ControllerJKPapJz.yearn.call(addressUdeLJd, addressnrMK1oB, uintlpXPR1l, {from: accounts[1]});
//		const addressuAIUHUn = await ControllerJKPapJz.setStrategy.call(addressd0wTsFc, addresstg0pKzm, {from: accounts[1]});
//		const addressA75dL1c = await ControllerJKPapJz.setOneSplit.call(addressjRlIJa8, {from: accounts[4]});

		await expect(ControllerJKPapJz.yearn.call(addressUdeLJd, addressnrMK1oB, uintlpXPR1l, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressEuEWOp = accounts[1]
		const ControllerAONoaZd = await Controller.new(addressEuEWOp, {from: accounts[0]});
		const addressp7Gtg0U = accounts[1]
		const addressDS4dSs4 = accounts[0]
		const uintXbvAtl6 = BigInt("1511")
		const addressbJ5ymNF = accounts[0]
		const addressKBZcN3j = await ControllerAONoaZd.revokeStrategy.call(addressDS4dSs4, addressp7Gtg0U, {from: accounts[0]});
//		const addressTLd8M3J = await ControllerAONoaZd.earn.call(addressbJ5ymNF, uintXbvAtl6, {from: accounts[0]});

		await expect(ControllerAONoaZd.earn.call(addressbJ5ymNF, uintXbvAtl6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressqihaOtg = accounts[1]
		const ControllerAONoaZd = await Controller.new(addressqihaOtg, {from: accounts[0]});
		const uintgepJmK2 = BigInt("163")
		const addressgWY5U2W = accounts[3]
		const uintKOkemGs = BigInt("1511")
		const addressPYef7pf = accounts[1]
//		const addressgca7bo = await ControllerAONoaZd.withdraw.call(addressgWY5U2W, uintgepJmK2, {from: accounts[4]});
//		const addressTLd8M3J = await ControllerAONoaZd.earn.call(addressPYef7pf, uintKOkemGs, {from: accounts[0]});

		await expect(ControllerAONoaZd.withdraw.call(addressgWY5U2W, uintgepJmK2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressO1fs1IC = accounts[0]
		const Controller55IZin = await Controller.new(addressO1fs1IC, {from: accounts[2]});
		const addressvl9rKh = accounts[3]
		const uintY7rQS0h = BigInt("1561")
		const addressCtCZgm4 = accounts[2]
		const addresssuB9EWv = accounts[1]
		const addressMjCUt3w = accounts[0]
		const uintLM8bBgA = BigInt("957")
		const addresserU8Uu = accounts[0]
		const uintwdNGsJ = BigInt("768")
		const addresss8fuZOQ = accounts[4]
		const addressBciGZW = accounts[3]
		const addressklAdEG0 = accounts[4]
		const addressXnWv02f = await Controller55IZin.setGovernance.call(addressvl9rKh, {from: accounts[2]});
//		const addressbm42qn = await Controller55IZin.inCaseTokensGetStuck.call(addressCtCZgm4, uintY7rQS0h, {from: accounts[3]});
//		const addressNaJRTkT = await Controller55IZin.inCaseStrategyTokenGetStuck.call(addressMjCUt3w, addresssuB9EWv, {from: accounts[3]});
//		const addressjpN7Kr3 = await Controller55IZin.earn.call(addresserU8Uu, uintLM8bBgA, {from: accounts[2]});
//		const addressSNXUEC = await Controller55IZin.inCaseTokensGetStuck.call(addresss8fuZOQ, uintwdNGsJ, {from: accounts[3]});
//		const addressz3iUf5n = await Controller55IZin.setStrategy.call(addressklAdEG0, addressBciGZW, {from: accounts[1]});

		await expect(Controller55IZin.inCaseTokensGetStuck.call(addressCtCZgm4, uintY7rQS0h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressFSPR3dW = accounts[1]
		const ControllerAONoaZd = await Controller.new(addressFSPR3dW, {from: accounts[0]});
		const addresspZKnuPX = accounts[1]
		const addressdKBPMtq = accounts[5]
		const addressnrF4BTM = accounts[1]
		const addressdX76M6K = accounts[2]
		const uintCXbttCW = BigInt("163")
		const addressMVtFeIh = accounts[3]
		const uintdHUFkwK = BigInt("1511")
		const addressKcaXROs = accounts[1]
//		const addresslAzmW3n = await ControllerAONoaZd.setVault.call(addressdKBPMtq, addresspZKnuPX, {from: accounts[2]});
//		const addresszExQshZ = await ControllerAONoaZd.setStrategy.call(addressdX76M6K, addressnrF4BTM, {from: accounts[2]});
//		const addressgca7bo = await ControllerAONoaZd.withdraw.call(addressMVtFeIh, uintCXbttCW, {from: accounts[4]});
//		const addressTLd8M3J = await ControllerAONoaZd.earn.call(addressKcaXROs, uintdHUFkwK, {from: accounts[0]});

		await expect(ControllerAONoaZd.setVault.call(addressdKBPMtq, addresspZKnuPX, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressKfTwkch = accounts[1]
		const ControllerS0dQnlE = await Controller.new(addressKfTwkch, {from: accounts[2]});
		const addressjxuiStn = accounts[4]
		const addressik7sDX = accounts[2]
		const address3jM9Ry = await ControllerS0dQnlE.setOneSplit.call(addressjxuiStn, {from: accounts[2]});
//		const addresso5T8LpE = await ControllerS0dQnlE.setStrategist.call(addressik7sDX, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerS0dQnlE.setStrategist.call(addressik7sDX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressthARqas = accounts[1]
		const ControllerS0dQnlE = await Controller.new(addressthARqas, {from: accounts[2]});
		const addresswPK3tGU = accounts[1]
		const addressvms92OX = accounts[5]
		const addressyAhf9vO = accounts[4]
//		const addressiwY6b7q = await ControllerS0dQnlE.setStrategy.call(addressvms92OX, addresswPK3tGU, {from: accounts[2]});
//		const addresso5T8LpE = await ControllerS0dQnlE.setStrategist.call(addressyAhf9vO, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerS0dQnlE.setStrategy.call(addressvms92OX, addresswPK3tGU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresstctQ4UU = accounts[1]
		const ControllerAONoaZd = await Controller.new(addresstctQ4UU, {from: accounts[0]});
		const addressvILrux1 = accounts[5]
		const addressBpDBCcM = accounts[2]
		const addressPLTLSff = accounts[0]
		const uintgxMEJwr = BigInt("1511")
		const addressKPjP1b5 = accounts[1]
		const addressls1Jge0 = await ControllerAONoaZd.setConverter.call(addressPLTLSff, addressBpDBCcM, addressvILrux1, {from: accounts[0]});
//		const addressTLd8M3J = await ControllerAONoaZd.earn.call(addressKPjP1b5, uintgxMEJwr, {from: accounts[0]});

		await expect(ControllerAONoaZd.earn.call(addressKPjP1b5, uintgxMEJwr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressBiAKqOw = accounts[1]
		const ControllerKwgqsi7 = await Controller.new(addressBiAKqOw, {from: accounts[3]});
		const uintMTSVs9 = BigInt("117")
		const addressXtl57o4 = accounts[4]
		const addressc7h9zGG = accounts[1]
		const addresscZrI2R8 = accounts[0]
		const addressbhDlFJc = accounts[4]
		const addresspM3mG3p = accounts[5]
//		const addressExvXxZq = await ControllerKwgqsi7.yearn.call(addressc7h9zGG, addressXtl57o4, uintMTSVs9, {from: accounts[3]});
//		const addressRBSwUW = await ControllerKwgqsi7.approveStrategy.call(addressbhDlFJc, addresscZrI2R8, {from: accounts[2]});
//		const addressroBmYz = await ControllerKwgqsi7.setRewards.call(addresspM3mG3p, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerKwgqsi7.yearn.call(addressc7h9zGG, addressXtl57o4, uintMTSVs9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVWGjRAe = accounts[1]
		const ControllerS0dQnlE = await Controller.new(addressVWGjRAe, {from: accounts[2]});
		const addressuzqAtzU = accounts[4]
		const addresscGMdVWV = accounts[1]
		const addressTeVa1J6 = accounts[5]
		const addressZFIPojd = await ControllerS0dQnlE.setVault.call(addresscGMdVWV, addressuzqAtzU, {from: accounts[2]});
//		const addresso5T8LpE = await ControllerS0dQnlE.setStrategist.call(addressTeVa1J6, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerS0dQnlE.setStrategist.call(addressTeVa1J6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressBBItNv8 = accounts[3]
		const ControllerzbaGiW = await Controller.new(addressBBItNv8, {from: accounts[0]});
		const addressaGcNKYN = accounts[0]
		const uintoLDxMDf = BigInt("1788")
		const addressfhzjcgX = accounts[1]
		const uinthOoVTor = BigInt("1193")
		const addressnDJyo0P = accounts[4]
		const addressd0wv5o = accounts[3]
		const addressSKU0U8j = accounts[4]
		const addressOX5tZaP = await ControllerzbaGiW.setRewards.call(addressaGcNKYN, {from: accounts[0]});
//		const addressKluGTAw = await ControllerzbaGiW.inCaseTokensGetStuck.call(addressfhzjcgX, uintoLDxMDf, {from: accounts[2]});
//		const addresswUpItJ2 = await ControllerzbaGiW.earn.call(addressnDJyo0P, uinthOoVTor, {from: accounts[0]});
//		const addressxTS9pcm = await ControllerzbaGiW.setVault.call(addressSKU0U8j, addressd0wv5o, {from: accounts[1]});

		await expect(ControllerzbaGiW.inCaseTokensGetStuck.call(addressfhzjcgX, uintoLDxMDf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshzKA5Pn = accounts[1]
		const ControllerKwgqsi7 = await Controller.new(addresshzKA5Pn, {from: accounts[3]});
		const addressH66MuDX = accounts[0]
		const uintnJUCAsv = BigInt("117")
		const addressAnKVFCM = accounts[7]
		const addressVvgIUSI = accounts[1]
		const uintWhFWtKV = BigInt("1602")
		const addressv34ppsx = accounts[2]
		const addressVnwVuFI = "0x0000000000000000000000000000000000000001"
		const addressjo6Ibhu = await ControllerKwgqsi7.setStrategist.call(addressH66MuDX, {from: accounts[3]});
//		const addressExvXxZq = await ControllerKwgqsi7.yearn.call(addressVvgIUSI, addressAnKVFCM, uintnJUCAsv, {from: accounts[3]});
//		const addressG5NnSoa = await ControllerKwgqsi7.yearn.call(addressVnwVuFI, addressv34ppsx, uintWhFWtKV, {from: accounts[2]});

		await expect(ControllerKwgqsi7.yearn.call(addressVvgIUSI, addressAnKVFCM, uintnJUCAsv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressPMByaoD = accounts[1]
		const ControllerKwgqsi7 = await Controller.new(addressPMByaoD, {from: accounts[3]});
		const uintGxTnr4R = BigInt("117")
		const addresswrYDauL = accounts[10]
		const addressv2cpfWi = accounts[1]
		const uintOUnxKUw = BigInt("525")
		const addressSxNqCUZ = accounts[1]
		const addressv74cOAo = accounts[3]
		const addressXAgI54r = accounts[1]
		const addressIMoutI = accounts[3]
		const addressZJfYVr0 = accounts[1]
		const addressRgSFbh7 = accounts[1]
		const addressGD8EoWG = accounts[5]
		const addressR1aGEEO = accounts[1]
		const addressVbTHfA = "0x0000000000000000000000000000000000000001"
		const address5Xcwe9 = accounts[4]
//		const addressExvXxZq = await ControllerKwgqsi7.yearn.call(addressv2cpfWi, addresswrYDauL, uintGxTnr4R, {from: accounts[3]});
//		const addressllZDnwW = await ControllerKwgqsi7.yearn.call(addressv74cOAo, addressSxNqCUZ, uintOUnxKUw, {from: accounts[1]});
//		const addressAL383WT = await ControllerKwgqsi7.setGovernance.call(addressXAgI54r, {from: accounts[1]});
//		const addressrpjgLvL = await ControllerKwgqsi7.inCaseStrategyTokenGetStuck.call(addressZJfYVr0, addressIMoutI, {from: accounts[0]});
//		const addresslrK6TH = await ControllerKwgqsi7.setStrategy.call(addressGD8EoWG, addressRgSFbh7, {from: accounts[1]});
//		const addresspHAKzke = await ControllerKwgqsi7.setOneSplit.call(addressR1aGEEO, {from: accounts[5]});
//		const addressaPUqubf = await ControllerKwgqsi7.setVault.call(address5Xcwe9, addressVbTHfA, {from: accounts[2]});

		await expect(ControllerKwgqsi7.yearn.call(addressv2cpfWi, addresswrYDauL, uintGxTnr4R, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})