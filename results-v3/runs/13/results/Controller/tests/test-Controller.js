const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressF4J4gK = accounts[2]
		const ControlleridM77U = await Controller.new(addressF4J4gK, {from: accounts[0]});
		const uintKjuiBFj = BigInt("383")
		const addressWmUGRwm = accounts[4]
		const addressiuYdDH = accounts[0]
		const addressaJaoM9H = accounts[1]
		const addressZsYbPoC = accounts[2]
		const uintnFk4xij = await ControlleridM77U.getExpectedReturn.call(addressiuYdDH, addressWmUGRwm, uintKjuiBFj, {from: accounts[5]});
		const addressIJ4M8P3 = await ControlleridM77U.setStrategy.call(addressZsYbPoC, addressaJaoM9H, {from: accounts[4]});

		await expect(ControlleridM77U.getExpectedReturn.call(addressiuYdDH, addressWmUGRwm, uintKjuiBFj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressEZRvd95 = accounts[5]
		const ControllerUCLEDJF = await Controller.new(addressEZRvd95, {from: accounts[3]});
		const addresssFIchFT = accounts[1]
		const addressTRjPwf = accounts[0]
		const addressoUgdcfB = accounts[0]
		const addresskT8XhDK = accounts[2]
		const addressfGw9F8V = accounts[3]
		const addressIt6sMMG = accounts[2]
		const uintVhTJg2 = BigInt("1166")
		const addressFNGEmFG = "0x0000000000000000000000000000000000000001"
		const addresslXKqDIN = await ControllerUCLEDJF.setStrategist.call(addresssFIchFT, {from: accounts[1]});
		const addressILV3W4u = await ControllerUCLEDJF.setVault.call(addressoUgdcfB, addressTRjPwf, {from: "0x0000000000000000000000000000000000000001"});
		const addressMWokl3 = await ControllerUCLEDJF.setStrategist.call(addresskT8XhDK, {from: accounts[1]});
		const addresshobQD9n = await ControllerUCLEDJF.setVault.call(addressIt6sMMG, addressfGw9F8V, {from: accounts[1]});
		const addressXcmIECE = await ControllerUCLEDJF.earn.call(addressFNGEmFG, uintVhTJg2, {from: accounts[4]});

		await expect(ControllerUCLEDJF.setStrategist.call(addresssFIchFT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxrJeKzk = accounts[4]
		const ControllerTEfbTl4 = await Controller.new(addressxrJeKzk, {from: accounts[3]});
		const uintjnX0fbx = BigInt("271")
		const addressxmIHIzv = accounts[3]
		const addressSNkcbCp = accounts[0]
		const addressKiZJ9cb = accounts[2]
		const uintiw7Pewm = BigInt("209")
		const addressdo4Ml4t = accounts[5]
		const addresskWVvSCv = accounts[0]
		const addressx0jymtv = accounts[2]
		const addresszUA3A8 = "0x0000000000000000000000000000000000000001"
		const addressZETmtL4 = accounts[5]
		const addresskRgIuaU = await ControllerTEfbTl4.inCaseTokensGetStuck.call(addressxmIHIzv, uintjnX0fbx, {from: accounts[2]});
		const addressdtP4QxC = await ControllerTEfbTl4.revokeStrategy.call(addressKiZJ9cb, addressSNkcbCp, {from: accounts[2]});
		const addressBRtpxqe = await ControllerTEfbTl4.earn.call(addressdo4Ml4t, uintiw7Pewm, {from: accounts[1]});
		const addressbI17FUn = await ControllerTEfbTl4.setRewards.call(addresskWVvSCv, {from: accounts[1]});
		const addressqO03AAg = await ControllerTEfbTl4.setConverter.call(addressZETmtL4, addresszUA3A8, addressx0jymtv, {from: accounts[0]});

		await expect(ControllerTEfbTl4.inCaseTokensGetStuck.call(addressxmIHIzv, uintjnX0fbx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressSsdKZQV = accounts[3]
		const ControllerZpAlthu = await Controller.new(addressSsdKZQV, {from: "0x0000000000000000000000000000000000000001"});
		const addressMKx0dki = accounts[2]
		const addressdgT8SMa = accounts[2]
		const addressUfLkQiO = accounts[1]
		const addressaUantVR = accounts[5]
		const uintyVSdAef = BigInt("1576")
		const addressC2csrcp = accounts[4]
		const addresscmjsAn6 = accounts[1]
		const uintBxyXA7S = BigInt("1740")
		const addressrnqba2S = accounts[0]
		const addressYwCyqje = accounts[0]
		const addressAj2ohb1 = accounts[4]
		const addressPtt1cGI = await ControllerZpAlthu.inCaseStrategyTokenGetStuck.call(addressdgT8SMa, addressMKx0dki, {from: accounts[0]});
		const uintODHGMax = await ControllerZpAlthu.balanceOf.call(addressUfLkQiO, {from: accounts[0]});
		const addressw1U8Q3t = await ControllerZpAlthu.setStrategist.call(addressaUantVR, {from: accounts[0]});
		const addressjbU3nkq = await ControllerZpAlthu.yearn.call(addresscmjsAn6, addressC2csrcp, uintyVSdAef, {from: accounts[4]});
		const addressV4dtenY = await ControllerZpAlthu.yearn.call(addressYwCyqje, addressrnqba2S, uintBxyXA7S, {from: accounts[0]});
		const addresspxw3KaH = await ControllerZpAlthu.setGovernance.call(addressAj2ohb1, {from: accounts[3]});
	});

	it('test for Controller', async () => {
		const addressbCKpr4v = "0x0000000000000000000000000000000000000001"
		const ControllerkagsvjG = await Controller.new(addressbCKpr4v, {from: accounts[3]});
		const uintZowE9DG = BigInt("798")
		const addressNLTzSI4 = accounts[3]
		const addressNZPMz3u = accounts[1]
		const uintcbZUGLE = BigInt("1858")
		const addressybr70y = accounts[5]
		const addressodBef4E = accounts[1]
		const addresso3RxrCg = accounts[4]
		const addressovGPxiB = accounts[3]
		const addresssUtr5gN = accounts[0]
		const addressjOjKhij = await ControllerkagsvjG.yearn.call(addressNZPMz3u, addressNLTzSI4, uintZowE9DG, {from: accounts[4]});
		const addresssHhSFik = await ControllerkagsvjG.yearn.call(addressodBef4E, addressybr70y, uintcbZUGLE, {from: accounts[2]});
		const addresskWBAQBC = await ControllerkagsvjG.setOneSplit.call(addresso3RxrCg, {from: accounts[4]});
		const addresskUJ69RA = await ControllerkagsvjG.revokeStrategy.call(addresssUtr5gN, addressovGPxiB, {from: accounts[0]});

		await expect(ControllerkagsvjG.yearn.call(addressNZPMz3u, addressNLTzSI4, uintZowE9DG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressNw3omkN = "0x0000000000000000000000000000000000000001"
		const ControllerQyS2DBN = await Controller.new(addressNw3omkN, {from: accounts[3]});
		const addressKAXN3sM = accounts[5]
		const addressF9zLWW8 = accounts[3]
		const addressPobvFtO = accounts[3]
		const addresszqwEYXb = accounts[1]
		const addressJaZCcG = accounts[5]
		const addressEOp4PfO = accounts[2]
		const addressAjgVhEl = accounts[3]
		const addresssK4tmP = await ControllerQyS2DBN.setVault.call(addressF9zLWW8, addressKAXN3sM, {from: accounts[3]});
		const addressl4nZdes = await ControllerQyS2DBN.setGovernance.call(addressPobvFtO, {from: accounts[4]});
		const addresswVSKrSX = await ControllerQyS2DBN.withdrawAll.call(addresszqwEYXb, {from: accounts[2]});
		const addressEEXpvr = await ControllerQyS2DBN.revokeStrategy.call(addressEOp4PfO, addressJaZCcG, {from: accounts[4]});
		const addressVGLWXhF = await ControllerQyS2DBN.setStrategist.call(addressAjgVhEl, {from: accounts[2]});

		await expect(ControllerQyS2DBN.setGovernance.call(addressPobvFtO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressO58hMmP = accounts[1]
		const ControllerrkpTT6h = await Controller.new(addressO58hMmP, {from: accounts[0]});
		const addresszp8MnHq = accounts[1]
		const addressd2EvkYe = accounts[3]
		const addressfJAgGaC = accounts[1]
		const addressqLgLeES = accounts[1]
		const addressqJNx6rc = accounts[2]
		const uintrORt8Ni = BigInt("1281")
		const addressURs2yTA = accounts[5]
		const addresstEiSUsp = accounts[3]
		const uintyJWquDf = await ControllerrkpTT6h.balanceOf.call(addresszp8MnHq, {from: accounts[4]});
		const addressogTu42E = await ControllerrkpTT6h.setConverter.call(addressqLgLeES, addressfJAgGaC, addressd2EvkYe, {from: accounts[3]});
		const addressGIvXxTJ = await ControllerrkpTT6h.setStrategist.call(addressqJNx6rc, {from: accounts[4]});
		const uintXsQgVRD = await ControllerrkpTT6h.getExpectedReturn.call(addresstEiSUsp, addressURs2yTA, uintrORt8Ni, {from: accounts[2]});

		await expect(ControllerrkpTT6h.balanceOf.call(addresszp8MnHq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressvheNoAh = accounts[3]
		const ControllerscV9nlx = await Controller.new(addressvheNoAh, {from: accounts[2]});
		const addresshhDmWxM = accounts[1]
		const addressUGwY9SR = "0x0000000000000000000000000000000000000001"
		const uintj050hjM = BigInt("772")
		const addressvDhHbzw = accounts[4]
		const addressx0Vg1U = accounts[3]
		const addresslVu2NLt = accounts[5]
		const addressOvRu69 = accounts[3]
		const addresssIJiKJ9 = accounts[2]
		const addressud85sbZ = await ControllerscV9nlx.setStrategy.call(addressUGwY9SR, addresshhDmWxM, {from: accounts[1]});
		const uintjBOXlOz = await ControllerscV9nlx.setSplit.call(uintj050hjM, {from: "0x0000000000000000000000000000000000000001"});
		const addressHnwkd96 = await ControllerscV9nlx.inCaseStrategyTokenGetStuck.call(addressx0Vg1U, addressvDhHbzw, {from: accounts[4]});
		const addressbBU1rLv = await ControllerscV9nlx.setVault.call(addressOvRu69, addresslVu2NLt, {from: accounts[4]});
		const addressgOUx8vl = await ControllerscV9nlx.withdrawAll.call(addresssIJiKJ9, {from: accounts[0]});

		await expect(ControllerscV9nlx.setStrategy.call(addressUGwY9SR, addresshhDmWxM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressGeNqkLz = accounts[2]
		const ControlleridM77U = await Controller.new(addressGeNqkLz, {from: accounts[0]});
		const uintDOQDPND = BigInt("128")
		const addressUO99Ejn = accounts[2]
		const addresscMgYiuR = accounts[5]
		const uintVb2HjLq = BigInt("1970")
		const addressL6860JC = accounts[1]
		const addresskkHTuqd = "0x0000000000000000000000000000000000000001"
		const addressSSQvgQ = accounts[4]
		const uintZc2WlT0 = await ControlleridM77U.setSplit.call(uintDOQDPND, {from: accounts[4]});
		const addressIJ4M8P3 = await ControlleridM77U.setStrategy.call(addresscMgYiuR, addressUO99Ejn, {from: accounts[4]});
		const addressR32MJY8 = await ControlleridM77U.withdraw.call(addressL6860JC, uintVb2HjLq, {from: "0x0000000000000000000000000000000000000001"});
		const addressnciSC4 = await ControlleridM77U.setStrategy.call(addressSSQvgQ, addresskkHTuqd, {from: accounts[2]});

		await expect(ControlleridM77U.setSplit.call(uintDOQDPND, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresstFghKe = "0x0000000000000000000000000000000000000001"
		const ControllerQKiXch5 = await Controller.new(addresstFghKe, {from: accounts[2]});
		const uintTh2YkqU = BigInt("1740")
		const addressdStgUBM = "0x0000000000000000000000000000000000000001"
		const addressKiyXzUR = accounts[4]
		const addressXkywuJN = accounts[3]
		const addresso3x81V = accounts[3]
		const addresstGaNjyq = await ControllerQKiXch5.inCaseTokensGetStuck.call(addressdStgUBM, uintTh2YkqU, {from: accounts[2]});
		const uintXslGhTc = await ControllerQKiXch5.balanceOf.call(addressKiyXzUR, {from: accounts[1]});
		const addressb5kdfLl = await ControllerQKiXch5.setVault.call(addresso3x81V, addressXkywuJN, {from: accounts[5]});

		await expect(ControllerQKiXch5.inCaseTokensGetStuck.call(addressdStgUBM, uintTh2YkqU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresskyne20O = accounts[5]
		const ControllerUCLEDJF = await Controller.new(addresskyne20O, {from: accounts[3]});
		const uintz4oHHl6 = BigInt("806")
		const addressrgccMQY = accounts[1]
		const addressxYXITp0 = accounts[0]
		const addressBv9nSrs = accounts[0]
		const addresshNkujRR = accounts[3]
		const addressUo0GR0u = accounts[3]
		const addresscMd4taA = accounts[1]
		const addressH4kxk21 = accounts[1]
		const addressfi4hHQl = accounts[0]
		const addressvvkDYZR = accounts[0]
		const uintB41LF6q = BigInt("1166")
		const addressx6e42N = "0x0000000000000000000000000000000000000001"
		const uintiFDSfB = await ControllerUCLEDJF.setSplit.call(uintz4oHHl6, {from: accounts[3]});
		const addresslXKqDIN = await ControllerUCLEDJF.setStrategist.call(addressrgccMQY, {from: accounts[1]});
		const addressILV3W4u = await ControllerUCLEDJF.setVault.call(addressBv9nSrs, addressxYXITp0, {from: "0x0000000000000000000000000000000000000001"});
		const addresshobQD9n = await ControllerUCLEDJF.setVault.call(addressUo0GR0u, addresshNkujRR, {from: accounts[1]});
		const addresscXraS5 = await ControllerUCLEDJF.setStrategy.call(addressH4kxk21, addresscMd4taA, {from: accounts[1]});
		const addressclN1OS = await ControllerUCLEDJF.revokeStrategy.call(addressvvkDYZR, addressfi4hHQl, {from: accounts[4]});
		const addressXcmIECE = await ControllerUCLEDJF.earn.call(addressx6e42N, uintB41LF6q, {from: accounts[4]});

		await expect(ControllerUCLEDJF.setStrategist.call(addressrgccMQY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressO9CloUu = accounts[2]
		const ControlleridM77U = await Controller.new(addressO9CloUu, {from: accounts[0]});
		const addressMQ9EqOf = accounts[3]
		const addressMFXzjpX = accounts[0]
		const addressXlKc4MF = accounts[2]
		const addressBGV16DC = accounts[2]
		const uintN1s8LYa = BigInt("624")
		const addressUNBN2kd = "0x0000000000000000000000000000000000000001"
		const addressp71lgP1 = await ControlleridM77U.revokeStrategy.call(addressMFXzjpX, addressMQ9EqOf, {from: "0x0000000000000000000000000000000000000001"});
		const addressIJ4M8P3 = await ControlleridM77U.setStrategy.call(addressBGV16DC, addressXlKc4MF, {from: accounts[4]});
		const addressUXtPbJ2 = await ControlleridM77U.earn.call(addressUNBN2kd, uintN1s8LYa, {from: accounts[3]});

		await expect(ControlleridM77U.revokeStrategy.call(addressMFXzjpX, addressMQ9EqOf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressK8x5WoO = accounts[0]
		const ControllerbbxWzxH = await Controller.new(addressK8x5WoO, {from: accounts[4]});
		const uintbJppuHA = BigInt("1396")
		const addressLwkpvzz = accounts[0]
		const addressZnGLu9e = "0x0000000000000000000000000000000000000001"
		const uintHcr4oY8 = BigInt("1112")
		const addressnN921U = accounts[1]
		const addressx1SU31B = accounts[3]
		const addressDm8hQb3 = accounts[3]
		const addressYyxqGbQ = accounts[2]
		const addressR8YWrtL = accounts[2]
		const addressSnZPS5B = accounts[2]
		const addressTEvyT4Y = accounts[0]
		const addressHASRbMM = "0x0000000000000000000000000000000000000001"
		const addressg9ssCnt = await ControllerbbxWzxH.earn.call(addressLwkpvzz, uintbJppuHA, {from: accounts[5]});
		const addressKC3uVkR = await ControllerbbxWzxH.setOneSplit.call(addressZnGLu9e, {from: accounts[4]});
		const addressfF9O69O = await ControllerbbxWzxH.yearn.call(addressx1SU31B, addressnN921U, uintHcr4oY8, {from: accounts[3]});
		const addressjs7kCWx = await ControllerbbxWzxH.setConverter.call(addressR8YWrtL, addressYyxqGbQ, addressDm8hQb3, {from: accounts[4]});
		const addressoks3ps = await ControllerbbxWzxH.revokeStrategy.call(addressTEvyT4Y, addressSnZPS5B, {from: accounts[0]});
		const addressahyF0LB = await ControllerbbxWzxH.setOneSplit.call(addressHASRbMM, {from: accounts[0]});

		await expect(ControllerbbxWzxH.earn.call(addressLwkpvzz, uintbJppuHA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresszHY0ikB = accounts[3]
		const ControlleraBnitB = await Controller.new(addresszHY0ikB, {from: accounts[3]});
		const addressvgwZdwQ = accounts[1]
		const address10KqPR = accounts[2]
		const addressneW6UDm = accounts[3]
		const addressswAwHcl = accounts[3]
		const addressve6uklx = accounts[3]
		const address99NxE8 = accounts[2]
		const address21qrnx = accounts[0]
		const addressp0DpJBo = await ControlleraBnitB.setGovernance.call(addressvgwZdwQ, {from: accounts[3]});
		const addressgjrmIk = await ControlleraBnitB.setConverter.call(addressswAwHcl, addressneW6UDm, address10KqPR, {from: accounts[5]});
		const addressy9RsvoW = await ControlleraBnitB.withdrawAll.call(addressve6uklx, {from: accounts[5]});
		const addressPCIdVIb = await ControlleraBnitB.withdrawAll.call(address99NxE8, {from: accounts[0]});
		const addressGQ8FceN = await ControlleraBnitB.setGovernance.call(address21qrnx, {from: accounts[2]});

		await expect(ControlleraBnitB.setConverter.call(addressswAwHcl, addressneW6UDm, address10KqPR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressnPReRN = accounts[2]
		const ControlleridM77U = await Controller.new(addressnPReRN, {from: accounts[0]});
		const addressEy9r27O = accounts[5]
		const addressWgg5bJw = accounts[0]
		const uintukIy63g = BigInt("1206")
		const addresss0bqFCj = accounts[5]
		const addressEFPYZtz = accounts[2]
		const uintLOSSRhl = BigInt("1264")
		const addressIK2kYfJ = accounts[2]
		const addressgaQoopi = accounts[3]
		const addresskTBh2y9 = await ControlleridM77U.approveStrategy.call(addressWgg5bJw, addressEy9r27O, {from: accounts[1]});
		const uintzKqM8Ed = await ControlleridM77U.getExpectedReturn.call(addressEFPYZtz, addresss0bqFCj, uintukIy63g, {from: accounts[2]});
		const uint8zgWVh = await ControlleridM77U.setSplit.call(uintLOSSRhl, {from: accounts[5]});
		const addressIJ4M8P3 = await ControlleridM77U.setStrategy.call(addressgaQoopi, addressIK2kYfJ, {from: accounts[4]});

		await expect(ControlleridM77U.approveStrategy.call(addressWgg5bJw, addressEy9r27O, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressdMgIN8o = accounts[5]
		const ControllerUCLEDJF = await Controller.new(addressdMgIN8o, {from: accounts[3]});
		const addressuzFGQkF = accounts[4]
		const addressSbe2eo2 = accounts[1]
		const addressBCtzlD = accounts[1]
		const addressF3KlNih = accounts[5]
		const addressU23NCwk = accounts[2]
		const uintRqOYMhk = BigInt("1166")
		const addressq9AanMq = "0x0000000000000000000000000000000000000001"
		const addressjiIstTR = await ControllerUCLEDJF.approveStrategy.call(addressSbe2eo2, addressuzFGQkF, {from: accounts[3]});
		const addresslXKqDIN = await ControllerUCLEDJF.setStrategist.call(addressBCtzlD, {from: accounts[1]});
		const addresshobQD9n = await ControllerUCLEDJF.setVault.call(addressU23NCwk, addressF3KlNih, {from: accounts[1]});
		const addressXcmIECE = await ControllerUCLEDJF.earn.call(addressq9AanMq, uintRqOYMhk, {from: accounts[4]});

		await expect(ControllerUCLEDJF.setStrategist.call(addressBCtzlD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMugiaGx = accounts[2]
		const ControlleridM77U = await Controller.new(addressMugiaGx, {from: accounts[0]});
		const uintqCN0Fe = BigInt("943")
		const addressGbTooRD = accounts[4]
		const addressGPqNtH = accounts[5]
		const addressO9GMZS = accounts[7]
		const addressB7hlb4j = await ControlleridM77U.withdraw.call(addressGbTooRD, uintqCN0Fe, {from: accounts[3]});
		const addressIJ4M8P3 = await ControlleridM77U.setStrategy.call(addressO9GMZS, addressGPqNtH, {from: accounts[4]});

		await expect(ControlleridM77U.withdraw.call(addressGbTooRD, uintqCN0Fe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZSOUNjL = accounts[2]
		const ControlleridM77U = await Controller.new(addressZSOUNjL, {from: accounts[0]});
		const addressXGtQIlt = accounts[2]
		const addressmpZJeH = accounts[2]
		const addressssAMDG8 = "0x0000000000000000000000000000000000000001"
		const addressXjca7IH = accounts[2]
		const addressODnm0v6 = accounts[2]
		const addressJjN0BRl = accounts[3]
		const addresszAgsq8c = await ControlleridM77U.inCaseStrategyTokenGetStuck.call(addressmpZJeH, addressXGtQIlt, {from: accounts[3]});
		const addresskAPdwRO = await ControlleridM77U.setStrategy.call(addressXjca7IH, addressssAMDG8, {from: accounts[5]});
		const addressIJ4M8P3 = await ControlleridM77U.setStrategy.call(addressJjN0BRl, addressODnm0v6, {from: accounts[4]});

		await expect(ControlleridM77U.inCaseStrategyTokenGetStuck.call(addressmpZJeH, addressXGtQIlt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressg0uTUce = accounts[5]
		const ControllerUCLEDJF = await Controller.new(addressg0uTUce, {from: accounts[3]});
		const addressAWTxiCj = accounts[2]
		const addresscOSI2t3 = accounts[1]
		const addressnYyBC80 = accounts[4]
		const addressnAlfZPE = accounts[2]
		const uintVwOihUL = BigInt("1166")
		const addressDgmfeh = "0x0000000000000000000000000000000000000002"
		const addressuAwgNXD = accounts[1]
		const addressaCGYEpJ = await ControllerUCLEDJF.setRewards.call(addressAWTxiCj, {from: accounts[5]});
		const addresslXKqDIN = await ControllerUCLEDJF.setStrategist.call(addresscOSI2t3, {from: accounts[1]});
		const addresshobQD9n = await ControllerUCLEDJF.setVault.call(addressnAlfZPE, addressnYyBC80, {from: accounts[1]});
		const addressXcmIECE = await ControllerUCLEDJF.earn.call(addressDgmfeh, uintVwOihUL, {from: accounts[4]});
		const uintpfTkpwZ = await ControllerUCLEDJF.balanceOf.call(addressuAwgNXD, {from: accounts[4]});

		await expect(ControllerUCLEDJF.setRewards.call(addressAWTxiCj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxTIodGY = accounts[2]
		const ControllermKAf7Wg = await Controller.new(addressxTIodGY, {from: accounts[4]});
		const addressyCCDgvT = accounts[1]
		const addressWINooRg = accounts[1]
		const addressn0tJrR = accounts[4]
		const addressZWVtlQR = accounts[2]
		const addresslBrBcVF = accounts[5]
		const addressxEYxhmn = await ControllermKAf7Wg.withdrawAll.call(addressyCCDgvT, {from: accounts[2]});
		const addressEv68yez = await ControllermKAf7Wg.setStrategy.call(addressn0tJrR, addressWINooRg, {from: accounts[4]});
		const addressD793mlB = await ControllermKAf7Wg.setStrategy.call(addresslBrBcVF, addressZWVtlQR, {from: accounts[4]});

		await expect(ControllermKAf7Wg.withdrawAll.call(addressyCCDgvT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressv3R0YSG = accounts[2]
		const ControlleridM77U = await Controller.new(addressv3R0YSG, {from: accounts[0]});
		const addressBNEFTYY = accounts[3]
		const addresszZrpbh = accounts[2]
		const addressmaDAcm0 = accounts[4]
		const addressE8loO8y = accounts[1]
		const addressZ4Udf9i = accounts[7]
		const addressuH49fZ = await ControlleridM77U.setOneSplit.call(addressBNEFTYY, {from: accounts[5]});
		const addressmmxGxCS = await ControlleridM77U.approveStrategy.call(addressmaDAcm0, addresszZrpbh, {from: accounts[2]});
		const addressIJ4M8P3 = await ControlleridM77U.setStrategy.call(addressZ4Udf9i, addressE8loO8y, {from: accounts[4]});

		await expect(ControlleridM77U.setOneSplit.call(addressBNEFTYY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshdtHmgu = accounts[5]
		const ControllerUCLEDJF = await Controller.new(addresshdtHmgu, {from: accounts[3]});
		const addressTexzI1e = accounts[1]
		const addressNux8Jd7 = accounts[1]
		const addressWXugYks = accounts[4]
		const addressezti6ew = accounts[2]
		const uintMSoaSKu = BigInt("1166")
		const addressH443s2 = "0x0000000000000000000000000000000000000001"
		const addressLTRYnUe = await ControllerUCLEDJF.withdrawAll.call(addressTexzI1e, {from: accounts[3]});
		const addresslXKqDIN = await ControllerUCLEDJF.setStrategist.call(addressNux8Jd7, {from: accounts[1]});
		const addresshobQD9n = await ControllerUCLEDJF.setVault.call(addressezti6ew, addressWXugYks, {from: accounts[1]});
		const addressXcmIECE = await ControllerUCLEDJF.earn.call(addressH443s2, uintMSoaSKu, {from: accounts[4]});

		await expect(ControllerUCLEDJF.withdrawAll.call(addressTexzI1e, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressXtE4k1i = accounts[2]
		const ControlleridM77U = await Controller.new(addressXtE4k1i, {from: accounts[0]});
		const addressXZfKZSQ = accounts[0]
		const addressRmIouzs = accounts[2]
		const addressJSQtjtr = accounts[2]
		const addresscJPh75S = await ControlleridM77U.setStrategist.call(addressXZfKZSQ, {from: accounts[0]});
		const addressIJ4M8P3 = await ControlleridM77U.setStrategy.call(addressJSQtjtr, addressRmIouzs, {from: accounts[4]});

		await expect(ControlleridM77U.setStrategy.call(addressJSQtjtr, addressRmIouzs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresszBG20QK = accounts[5]
		const ControllerUCLEDJF = await Controller.new(addresszBG20QK, {from: accounts[3]});
		const addressRg1qSRp = accounts[1]
		const addressOeQdHq2 = accounts[5]
		const addressgYm0kmd = "0x0000000000000000000000000000000000000001"
		const uintgVjITK7 = BigInt("1217")
		const addressYImvs3S = accounts[2]
		const addressXnzQmq4 = accounts[1]
		const uint0xoelJ = BigInt("1166")
		const addressbgvT05K = accounts[3]
		const addressDqEiJbg = accounts[2]
		const uinthXdXCoq = BigInt("1358")
		const addressaRH5iwp = accounts[5]
		const address4TY4XC = accounts[2]
		const addressNsGX3TS = await ControllerUCLEDJF.inCaseStrategyTokenGetStuck.call(addressOeQdHq2, addressRg1qSRp, {from: accounts[3]});
		const addressaCGYEpJ = await ControllerUCLEDJF.setRewards.call(addressgYm0kmd, {from: accounts[5]});
		const uintT1EomLR = await ControllerUCLEDJF.getExpectedReturn.call(addressXnzQmq4, addressYImvs3S, uintgVjITK7, {from: accounts[2]});
		const addressXcmIECE = await ControllerUCLEDJF.earn.call(addressbgvT05K, uint0xoelJ, {from: accounts[4]});
		const uintpfTkpwZ = await ControllerUCLEDJF.balanceOf.call(addressDqEiJbg, {from: accounts[4]});
		const uintsAGfnss = await ControllerUCLEDJF.getExpectedReturn.call(address4TY4XC, addressaRH5iwp, uinthXdXCoq, {from: accounts[5]});

		await expect(ControllerUCLEDJF.inCaseStrategyTokenGetStuck.call(addressOeQdHq2, addressRg1qSRp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressJONESPf = accounts[2]
		const ControlleridM77U = await Controller.new(addressJONESPf, {from: accounts[0]});
		const addressGPTJMyA = "0x0000000000000000000000000000000000000001"
		const addressjKeQUwx = accounts[1]
		const addresskGzS5Sz = accounts[4]
		const addressucu36kf = accounts[1]
		const addressrUU4cCs = accounts[3]
		const addressSvH9iqe = await ControlleridM77U.revokeStrategy.call(addressjKeQUwx, addressGPTJMyA, {from: accounts[0]});
		const address32OJtS = await ControlleridM77U.setGovernance.call(addresskGzS5Sz, {from: accounts[1]});
		const addressIJ4M8P3 = await ControlleridM77U.setStrategy.call(addressrUU4cCs, addressucu36kf, {from: accounts[4]});

		await expect(ControlleridM77U.setGovernance.call(addresskGzS5Sz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxeoMjt = accounts[5]
		const ControllerUCLEDJF = await Controller.new(addressxeoMjt, {from: accounts[3]});
		const addressL27Islw = accounts[2]
		const addressc6WkZb = accounts[0]
		const addressfGmuCz = accounts[1]
		const addressHdoABzj = accounts[0]
		const addressVFqa189 = accounts[3]
		const addressuCtzPJ = accounts[4]
		const addressVX9AvJr = await ControllerUCLEDJF.setStrategy.call(addressc6WkZb, addressL27Islw, {from: accounts[3]});
		const addresszrM9hnL = await ControllerUCLEDJF.revokeStrategy.call(addressHdoABzj, addressfGmuCz, {from: accounts[0]});
		const addressPUUMVA0 = await ControllerUCLEDJF.setOneSplit.call(addressVFqa189, {from: accounts[4]});
		const addressaCGYEpJ = await ControllerUCLEDJF.setRewards.call(addressuCtzPJ, {from: accounts[5]});

		await expect(ControllerUCLEDJF.setStrategy.call(addressc6WkZb, addressL27Islw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressUzM093P = accounts[2]
		const ControlleridM77U = await Controller.new(addressUzM093P, {from: accounts[0]});
		const addresskuZViSl = accounts[3]
		const uintdNQq2q = BigInt("945")
		const addressMcT2rhb = accounts[4]
		const addressW2MW3g9 = await ControlleridM77U.setRewards.call(addresskuZViSl, {from: accounts[0]});
		const addressB7hlb4j = await ControlleridM77U.withdraw.call(addressMcT2rhb, uintdNQq2q, {from: accounts[3]});

		await expect(ControlleridM77U.withdraw.call(addressMcT2rhb, uintdNQq2q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressUu66CY6 = accounts[2]
		const ControlleridM77U = await Controller.new(addressUu66CY6, {from: accounts[0]});
		const addressdbZydx = accounts[1]
		const addressKa6JLKH = accounts[3]
		const addressUfAPUsR = accounts[3]
		const addressK7ERAZ1 = await ControlleridM77U.setOneSplit.call(addressdbZydx, {from: accounts[0]});
		const addressp71lgP1 = await ControlleridM77U.revokeStrategy.call(addressUfAPUsR, addressKa6JLKH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControlleridM77U.revokeStrategy.call(addressUfAPUsR, addressKa6JLKH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressAlMfqx = accounts[2]
		const ControlleridM77U = await Controller.new(addressAlMfqx, {from: accounts[0]});
		const addresshiIGnIp = accounts[2]
		const addressrGv6Qj8 = accounts[1]
		const addressrQAB1nK = accounts[5]
		const uintVYszOwd = BigInt("269")
		const addressqsU565 = accounts[3]
		const addressetYNtZc = accounts[0]
		const uintcH4ehX2 = BigInt("945")
		const addressJnIqrcn = accounts[4]
		const addressNLJDHnT = await ControlleridM77U.setConverter.call(addressrQAB1nK, addressrGv6Qj8, addresshiIGnIp, {from: accounts[0]});
		const addresssqtox8F = await ControlleridM77U.earn.call(addressqsU565, uintVYszOwd, {from: accounts[4]});
		const addressKtZhBWi = await ControlleridM77U.setOneSplit.call(addressetYNtZc, {from: accounts[0]});
		const addressB7hlb4j = await ControlleridM77U.withdraw.call(addressJnIqrcn, uintcH4ehX2, {from: accounts[3]});

		await expect(ControlleridM77U.earn.call(addressqsU565, uintVYszOwd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresssIq8rYF = accounts[2]
		const ControlleridM77U = await Controller.new(addresssIq8rYF, {from: accounts[0]});
		const uintjbBXPvX = BigInt("1890")
		const addressbBA3SgX = accounts[5]
		const addresssstGWt = accounts[0]
		const addresslhAd7oB = accounts[3]
		const addressGMkLw8i = accounts[0]
		const addressmCWt7Vr = accounts[2]
		const addressO4G4il0 = accounts[2]
		const addressr829WWV = await ControlleridM77U.yearn.call(addresssstGWt, addressbBA3SgX, uintjbBXPvX, {from: accounts[0]});
		const addressKGwm92X = await ControlleridM77U.approveStrategy.call(addressGMkLw8i, addresslhAd7oB, {from: accounts[3]});
		const addressIJ4M8P3 = await ControlleridM77U.setStrategy.call(addressO4G4il0, addressmCWt7Vr, {from: accounts[4]});

		await expect(ControlleridM77U.yearn.call(addresssstGWt, addressbBA3SgX, uintjbBXPvX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})