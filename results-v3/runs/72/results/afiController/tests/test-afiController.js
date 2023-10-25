const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addressHWIuia9 = accounts[2]
		const afiControllerCm2y1n3 = await afiController.new(addressHWIuia9, {from: accounts[3]});
		const uintLAL9wh = BigInt("512")
		const addressuORKHiY = accounts[3]
		const uintsrhvXc5 = BigInt("73")
		const addressLLyEIvm = accounts[4]
		const addressJYEmZ1H = accounts[3]
		const addressTAs2ND = await afiControllerCm2y1n3.inCaseTokensGetStuck.call(addressuORKHiY, uintLAL9wh, {from: accounts[4]});
		const uintyC3QCKm = await afiControllerCm2y1n3.setSplit.call(uintsrhvXc5, {from: accounts[2]});
		const addresstTxPlyq = await afiControllerCm2y1n3.setVault.call(addressJYEmZ1H, addressLLyEIvm, {from: accounts[0]});

		await expect(afiControllerCm2y1n3.inCaseTokensGetStuck.call(addressuORKHiY, uintLAL9wh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressITDURLV = accounts[1]
		const afiControllere10xHJ4 = await afiController.new(addressITDURLV, {from: "0x0000000000000000000000000000000000000001"});
		const uintsbyqgaR = BigInt("135")
		const addressAilBJGH = accounts[0]
		const addressQcqghnu = accounts[3]
		const addressct74pad = accounts[4]
		const addressBNKF9dm = accounts[3]
		const addressWMRUfCH = await afiControllere10xHJ4.yearn.call(addressQcqghnu, addressAilBJGH, uintsbyqgaR, {from: accounts[3]});
		const addressaDCPC9M = await afiControllere10xHJ4.revokeStrategy.call(addressBNKF9dm, addressct74pad, {from: accounts[4]});
	});

	it('test for afiController', async () => {
		const addressP2dyk2p = accounts[0]
		const afiControllerKLhmhHt = await afiController.new(addressP2dyk2p, {from: accounts[3]});
		const addressafHlz5I = accounts[0]
		const addressbXiT3Nf = accounts[2]
		const addressZ3CeJJp = accounts[2]
		const addresspyoxVUy = accounts[1]
		const addressoHS6me8 = accounts[0]
		const addressRg5Suqf = await afiControllerKLhmhHt.setVault.call(addressbXiT3Nf, addressafHlz5I, {from: accounts[2]});
		const uintu1Kfal = await afiControllerKLhmhHt.balanceOf.call(addressZ3CeJJp, {from: accounts[2]});
		const addressML2UhC = await afiControllerKLhmhHt.setStrategy.call(addressoHS6me8, addresspyoxVUy, {from: accounts[4]});

		await expect(afiControllerKLhmhHt.setVault.call(addressbXiT3Nf, addressafHlz5I, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressptApGrX = accounts[1]
		const afiControllerPxbtRQS = await afiController.new(addressptApGrX, {from: accounts[0]});
		const addresserLaC8y = accounts[4]
		const uintMAdcS1W = BigInt("691")
		const address2b6qkT = accounts[1]
		const addresshG1ixdl = accounts[0]
		const addressGhaxiav = accounts[3]
		const addressFMLDUyl = accounts[0]
		const addresssyajymJ = accounts[3]
		const addressre2hkP = accounts[3]
		const addressKfmf6bS = accounts[4]
		const addressEovnO7T = await afiControllerPxbtRQS.setOneSplit.call(addresserLaC8y, {from: accounts[0]});
		const uintXhwRCBy = await afiControllerPxbtRQS.getExpectedReturn.call(addresshG1ixdl, address2b6qkT, uintMAdcS1W, {from: "0x0000000000000000000000000000000000000001"});
		const addressphUmnts = await afiControllerPxbtRQS.setStrategy.call(addressFMLDUyl, addressGhaxiav, {from: accounts[2]});
		const uintXiLy0YF = await afiControllerPxbtRQS.balanceOf.call(addresssyajymJ, {from: accounts[3]});
		const addressqUElGCS = await afiControllerPxbtRQS.setVault.call(addressKfmf6bS, addressre2hkP, {from: accounts[5]});

		await expect(afiControllerPxbtRQS.getExpectedReturn.call(addresshG1ixdl, address2b6qkT, uintMAdcS1W, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxvD082i = accounts[2]
		const afiControlleriofSudV = await afiController.new(addressxvD082i, {from: accounts[0]});
		const addressoaxfRwk = accounts[3]
		const addressV76NLH8 = accounts[5]
		const addressYLyCiD3 = accounts[3]
		const addressTQ36g2h = await afiControlleriofSudV.approveStrategy.call(addressV76NLH8, addressoaxfRwk, {from: accounts[0]});
		const addressK7D2Y81 = await afiControlleriofSudV.withdrawAll.call(addressYLyCiD3, {from: accounts[4]});

		await expect(afiControlleriofSudV.withdrawAll.call(addressYLyCiD3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressqe5yvl1 = accounts[2]
		const afiControllerWSdLfXu = await afiController.new(addressqe5yvl1, {from: accounts[5]});
		const addressKPA4GDF = accounts[3]
		const uintFBCg89l = BigInt("1301")
		const addressZtmC744 = accounts[4]
		const addressA6g0qFe = await afiControllerWSdLfXu.setGovernance.call(addressKPA4GDF, {from: accounts[0]});
		const addressrRsSG05 = await afiControllerWSdLfXu.earn.call(addressZtmC744, uintFBCg89l, {from: accounts[1]});

		await expect(afiControllerWSdLfXu.setGovernance.call(addressKPA4GDF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressPCmtec3 = accounts[4]
		const afiControllerxu9YU6F = await afiController.new(addressPCmtec3, {from: accounts[3]});
		const uintcosSAzJ = BigInt("1968")
		const addressZGEltl0 = accounts[2]
		const addressEjmAFqW = accounts[3]
		const addresseyr8tnI = accounts[3]
		const addressQfM4yTd = accounts[0]
		const addressMlZ0kEk = accounts[3]
		const addressHSsfJPB = await afiControllerxu9YU6F.earn.call(addressZGEltl0, uintcosSAzJ, {from: accounts[4]});
		const addressDgl9Dov = await afiControllerxu9YU6F.setOneSplit.call(addressEjmAFqW, {from: "0x0000000000000000000000000000000000000001"});
		const addressQpVVXjI = await afiControllerxu9YU6F.setStrategist.call(addresseyr8tnI, {from: accounts[1]});
		const addressMo1Q8ov = await afiControllerxu9YU6F.inCaseStrategyTokenGetStuck.call(addressMlZ0kEk, addressQfM4yTd, {from: accounts[1]});

		await expect(afiControllerxu9YU6F.earn.call(addressZGEltl0, uintcosSAzJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressz2M0WmC = accounts[4]
		const afiControllerxu9YU6F = await afiController.new(addressz2M0WmC, {from: accounts[3]});
		const addresssHnv94Y = accounts[3]
		const addresseyvvBgx = accounts[1]
		const addresslns5na8 = accounts[4]
		const uintJvXwELE = BigInt("1968")
		const addressADpyKfO = accounts[2]
		const addressFdDtR88 = accounts[3]
		const addressZ1AFqPm = accounts[3]
		const addressAqIxB0B = accounts[4]
		const addressl4Ptrhq = accounts[0]
		const addressAn9cV8N = accounts[3]
		const addresseKkdiI7 = await afiControllerxu9YU6F.setConverter.call(addresslns5na8, addresseyvvBgx, addresssHnv94Y, {from: accounts[3]});
		const addressHSsfJPB = await afiControllerxu9YU6F.earn.call(addressADpyKfO, uintJvXwELE, {from: accounts[4]});
		const addressp3D7Kf4 = await afiControllerxu9YU6F.withdrawAll.call(addressFdDtR88, {from: accounts[2]});
		const addressDgl9Dov = await afiControllerxu9YU6F.setOneSplit.call(addressZ1AFqPm, {from: "0x0000000000000000000000000000000000000001"});
		const addressQpVVXjI = await afiControllerxu9YU6F.setStrategist.call(addressAqIxB0B, {from: accounts[1]});
		const addressMo1Q8ov = await afiControllerxu9YU6F.inCaseStrategyTokenGetStuck.call(addressAn9cV8N, addressl4Ptrhq, {from: accounts[1]});

		await expect(afiControllerxu9YU6F.earn.call(addressADpyKfO, uintJvXwELE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresslsDfItC = accounts[0]
		const afiControlleraQExgUL = await afiController.new(addresslsDfItC, {from: accounts[0]});
		const addressKSekeC1 = accounts[1]
		const addressdlEl4Zb = accounts[5]
		const addressbDoPnTJ = accounts[0]
		const addressxq7O3Q = accounts[1]
		const addressdOuCFU4 = accounts[1]
		const addressSq854c6 = accounts[0]
		const addressxtPbjz = accounts[5]
		const addressS73jCJ2 = accounts[5]
		const addressWcBfrOj = accounts[4]
		const addressTpRABnb = await afiControlleraQExgUL.setRewards.call(addressKSekeC1, {from: accounts[2]});
		const addressIrajLeQ = await afiControlleraQExgUL.setVault.call(addressbDoPnTJ, addressdlEl4Zb, {from: accounts[4]});
		const addressGN1H9yf = await afiControlleraQExgUL.setConverter.call(addressSq854c6, addressdOuCFU4, addressxq7O3Q, {from: accounts[3]});
		const addresshWSNHn = await afiControlleraQExgUL.setStrategy.call(addressS73jCJ2, addressxtPbjz, {from: accounts[2]});
		const addressIbhagtO = await afiControlleraQExgUL.setStrategist.call(addressWcBfrOj, {from: accounts[3]});

		await expect(afiControlleraQExgUL.setRewards.call(addressKSekeC1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressBU0t9Aj = accounts[3]
		const afiControllerrv4zYX8 = await afiController.new(addressBU0t9Aj, {from: accounts[2]});
		const addressJz5ARUk = accounts[0]
		const uintOIYECO = BigInt("1706")
		const addressuHuaYGC = accounts[2]
		const uintIFeBVL3 = BigInt("567")
		const addressGeyDLE1 = accounts[6]
		const uintxijF7qE = await afiControllerrv4zYX8.balanceOf.call(addressJz5ARUk, {from: "0x0000000000000000000000000000000000000001"});
		const addressopYopM2 = await afiControllerrv4zYX8.withdraw.call(addressuHuaYGC, uintOIYECO, {from: accounts[0]});
		const addressilJlC0D = await afiControllerrv4zYX8.inCaseTokensGetStuck.call(addressGeyDLE1, uintIFeBVL3, {from: accounts[1]});

		await expect(afiControllerrv4zYX8.balanceOf.call(addressJz5ARUk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresslsnw22r = accounts[2]
		const afiControlleriofSudV = await afiController.new(addresslsnw22r, {from: accounts[0]});
		const uintH76kyG = BigInt("1275")
		const addressUclNwpt = accounts[0]
		const addressbVN37r9 = accounts[1]
		const addressH0Q94Bx = accounts[4]
		const addressomNkZBQ = await afiControlleriofSudV.yearn.call(addressbVN37r9, addressUclNwpt, uintH76kyG, {from: accounts[1]});
		const addressK7D2Y81 = await afiControlleriofSudV.withdrawAll.call(addressH0Q94Bx, {from: accounts[4]});

		await expect(afiControlleriofSudV.yearn.call(addressbVN37r9, addressUclNwpt, uintH76kyG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresskwGSXNp = accounts[3]
		const afiControllerrv4zYX8 = await afiController.new(addresskwGSXNp, {from: accounts[2]});
		const addressK80hpCV = accounts[3]
		const addressh8lwAp7 = accounts[1]
		const uintNMMfuHY = BigInt("568")
		const addressmt837tm = accounts[5]
		const addressjdWE5ZZ = await afiControllerrv4zYX8.revokeStrategy.call(addressh8lwAp7, addressK80hpCV, {from: accounts[4]});
		const addressilJlC0D = await afiControllerrv4zYX8.inCaseTokensGetStuck.call(addressmt837tm, uintNMMfuHY, {from: accounts[1]});

		await expect(afiControllerrv4zYX8.revokeStrategy.call(addressh8lwAp7, addressK80hpCV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressIWsM9AS = accounts[2]
		const afiControlleriofSudV = await afiController.new(addressIWsM9AS, {from: accounts[0]});
		const addressYSo4TUa = accounts[3]
		const addresszQTgNJ7 = accounts[3]
		const addressDjoyUNo = accounts[4]
		const addressme9sYP5 = accounts[4]
		const addressMyZpU2f = await afiControlleriofSudV.setStrategy.call(addresszQTgNJ7, addressYSo4TUa, {from: accounts[3]});
		const addressG22ssoe = await afiControlleriofSudV.setStrategist.call(addressDjoyUNo, {from: accounts[2]});
		const addressK7D2Y81 = await afiControlleriofSudV.withdrawAll.call(addressme9sYP5, {from: accounts[4]});

		await expect(afiControlleriofSudV.setStrategy.call(addresszQTgNJ7, addressYSo4TUa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresslooHJXu = accounts[2]
		const afiControllerWSdLfXu = await afiController.new(addresslooHJXu, {from: accounts[5]});
		const addressl01gcpZ = accounts[4]
		const uintma4wHt = BigInt("1301")
		const addressXmOUgRf = accounts[5]
		const addressYE5CERI = await afiControllerWSdLfXu.setGovernance.call(addressl01gcpZ, {from: accounts[5]});
		const addressrRsSG05 = await afiControllerWSdLfXu.earn.call(addressXmOUgRf, uintma4wHt, {from: accounts[1]});

		await expect(afiControllerWSdLfXu.earn.call(addressXmOUgRf, uintma4wHt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDI7ZHcZ = accounts[2]
		const afiControlleriofSudV = await afiController.new(addressDI7ZHcZ, {from: accounts[0]});
		const addressgEcwCFJ = accounts[4]
		const uintEe5Jlb9 = BigInt("1751")
		const addressXYohPje = accounts[4]
		const addressf64DpI9 = await afiControlleriofSudV.setStrategist.call(addressgEcwCFJ, {from: accounts[0]});
		const uintdsOzRDZ = await afiControlleriofSudV.setSplit.call(uintEe5Jlb9, {from: accounts[5]});
		const addressK7D2Y81 = await afiControlleriofSudV.withdrawAll.call(addressXYohPje, {from: accounts[4]});

		await expect(afiControlleriofSudV.setSplit.call(uintEe5Jlb9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresswx59LRr = accounts[2]
		const afiControlleriofSudV = await afiController.new(addresswx59LRr, {from: accounts[0]});
		const uintFOKLbTj = BigInt("1303")
		const addressx7iHicf = accounts[4]
		const addressK6wGAdZ = accounts[4]
		const uintVV4PlNc = await afiControlleriofSudV.setSplit.call(uintFOKLbTj, {from: accounts[0]});
		const addressf64DpI9 = await afiControlleriofSudV.setStrategist.call(addressx7iHicf, {from: accounts[0]});
		const addressK7D2Y81 = await afiControlleriofSudV.withdrawAll.call(addressK6wGAdZ, {from: accounts[4]});

		await expect(afiControlleriofSudV.withdrawAll.call(addressK6wGAdZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressh7MKDH1 = accounts[1]
		const afiController9HJFet = await afiController.new(addressh7MKDH1, {from: accounts[0]});
		const addressws5wL9w = accounts[5]
		const addressmbpYH7T = accounts[2]
		const addressD2sjvQS = accounts[5]
		const addressINhwtKO = accounts[3]
		const addresscnQYkCd = accounts[4]
		const addressv9fggZd = await afiController9HJFet.inCaseStrategyTokenGetStuck.call(addressmbpYH7T, addressws5wL9w, {from: accounts[3]});
		const addressu8eeYWk = await afiController9HJFet.withdrawAll.call(addressD2sjvQS, {from: accounts[0]});
		const addressVMMSgk = await afiController9HJFet.revokeStrategy.call(addresscnQYkCd, addressINhwtKO, {from: accounts[5]});

		await expect(afiController9HJFet.inCaseStrategyTokenGetStuck.call(addressmbpYH7T, addressws5wL9w, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbfX3kcK = accounts[2]
		const afiControllerWSdLfXu = await afiController.new(addressbfX3kcK, {from: accounts[5]});
		const uintQv2Zvns = BigInt("127")
		const addressDgGEn0g = accounts[1]
		const addressNj0UH90 = accounts[1]
		const uintsuEZI9j = BigInt("1301")
		const addressTvVmMwh = accounts[5]
		const addresskR88F18 = await afiControllerWSdLfXu.withdraw.call(addressDgGEn0g, uintQv2Zvns, {from: accounts[4]});
		const addresswxxG6S0 = await afiControllerWSdLfXu.setOneSplit.call(addressNj0UH90, {from: accounts[2]});
		const addressrRsSG05 = await afiControllerWSdLfXu.earn.call(addressTvVmMwh, uintsuEZI9j, {from: accounts[1]});

		await expect(afiControllerWSdLfXu.withdraw.call(addressDgGEn0g, uintQv2Zvns, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressrsrcp8D = accounts[1]
		const afiControlleryHeWKFo = await afiController.new(addressrsrcp8D, {from: accounts[3]});
		const addressHq4c74u = accounts[2]
		const addressMzFniNJ = accounts[1]
		const uintTII8q37 = BigInt("1819")
		const addressY7vmAk3 = accounts[3]
		const addressXKijut = "0x0000000000000000000000000000000000000001"
		const addressU4gBzf3 = "0x0000000000000000000000000000000000000001"
		const addresssNk8Gx2 = accounts[2]
		const addressGh8ioQ = "0x0000000000000000000000000000000000000001"
		const addressYoHZGj9 = accounts[4]
		const addressmwbOazA = accounts[2]
		const uintcaEyj3G = BigInt("40")
		const addressljGFjKh = accounts[4]
		const addresscukBu8s = accounts[3]
		const addressDISinW = await afiControlleryHeWKFo.setStrategy.call(addressMzFniNJ, addressHq4c74u, {from: accounts[3]});
		const addressi9INDEF = await afiControlleryHeWKFo.inCaseTokensGetStuck.call(addressY7vmAk3, uintTII8q37, {from: accounts[5]});
		const addressFtWxrFq = await afiControlleryHeWKFo.setGovernance.call(addressXKijut, {from: accounts[3]});
		const addressj8t90w7 = await afiControlleryHeWKFo.setConverter.call(addressGh8ioQ, addresssNk8Gx2, addressU4gBzf3, {from: accounts[3]});
		const addressNWZwDkz = await afiControlleryHeWKFo.approveStrategy.call(addressmwbOazA, addressYoHZGj9, {from: accounts[4]});
		const addressqnCNa74 = await afiControlleryHeWKFo.yearn.call(addresscukBu8s, addressljGFjKh, uintcaEyj3G, {from: accounts[1]});

		await expect(afiControlleryHeWKFo.setStrategy.call(addressMzFniNJ, addressHq4c74u, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressDnHcqm = accounts[2]
		const afiControllerWSdLfXu = await afiController.new(addressDnHcqm, {from: accounts[5]});
		const uintAqxjXFy = BigInt("492")
		const addressaFWUdo = accounts[2]
		const addressD6TTm59 = accounts[5]
		const uintZKAbD9 = BigInt("1292")
		const addressXDtt4o1 = accounts[4]
		const addressLmzeHh3 = await afiControllerWSdLfXu.yearn.call(addressD6TTm59, addressaFWUdo, uintAqxjXFy, {from: accounts[5]});
		const addressrRsSG05 = await afiControllerWSdLfXu.earn.call(addressXDtt4o1, uintZKAbD9, {from: accounts[1]});

		await expect(afiControllerWSdLfXu.yearn.call(addressD6TTm59, addressaFWUdo, uintAqxjXFy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressofCO984 = accounts[1]
		const afiController9HJFet = await afiController.new(addressofCO984, {from: accounts[0]});
		const addressMT2NqCX = accounts[0]
		const addressA12QoA = accounts[5]
		const addresshZL87A9 = "0x0000000000000000000000000000000000000001"
		const addresszvWEO1k = accounts[3]
		const addressNmCIrBG = accounts[4]
		const addresshyvxwUV = accounts[4]
		const addressdS5bQbE = await afiController9HJFet.setOneSplit.call(addressMT2NqCX, {from: accounts[0]});
		const addressu8eeYWk = await afiController9HJFet.withdrawAll.call(addressA12QoA, {from: accounts[0]});
		const addresslbbpYb = await afiController9HJFet.setVault.call(addresszvWEO1k, addresshZL87A9, {from: "0x0000000000000000000000000000000000000001"});
		const addressVMMSgk = await afiController9HJFet.revokeStrategy.call(addresshyvxwUV, addressNmCIrBG, {from: accounts[5]});

		await expect(afiController9HJFet.withdrawAll.call(addressA12QoA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const address44cFVK = accounts[0]
		const afiControllerAd814zd = await afiController.new(address44cFVK, {from: accounts[3]});
		const addressjJpFYJc = accounts[2]
		const addressPXcCp8x = accounts[2]
		const uintFtwAsGa = BigInt("234")
		const addressEJkivXp = "0x0000000000000000000000000000000000000001"
		const addressFOBloJS = accounts[3]
		const addressXTsDHQX = await afiControllerAd814zd.setVault.call(addressPXcCp8x, addressjJpFYJc, {from: accounts[3]});
		const addressuXN3Ezg = await afiControllerAd814zd.earn.call(addressEJkivXp, uintFtwAsGa, {from: accounts[1]});
		const addressKcgnA0S = await afiControllerAd814zd.setGovernance.call(addressFOBloJS, {from: accounts[4]});

		await expect(afiControllerAd814zd.earn.call(addressEJkivXp, uintFtwAsGa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresskV1TmCF = accounts[3]
		const afiControllerrv4zYX8 = await afiController.new(addresskV1TmCF, {from: accounts[2]});
		const addressQNmSdkP = accounts[0]
		const addressvYzaZ74 = accounts[1]
		const uintbBXLcse = BigInt("1934")
		const addressM1dhbac = accounts[4]
		const addressHeiJqaB = await afiControllerrv4zYX8.revokeStrategy.call(addressvYzaZ74, addressQNmSdkP, {from: accounts[2]});
		const addresshA8D24N = await afiControllerrv4zYX8.withdraw.call(addressM1dhbac, uintbBXLcse, {from: accounts[4]});

		await expect(afiControllerrv4zYX8.withdraw.call(addressM1dhbac, uintbBXLcse, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressTo8y4V = accounts[1]
		const afiController9HJFet = await afiController.new(addressTo8y4V, {from: accounts[0]});
		const uinttVNNocK = BigInt("225")
		const address4FR3E2 = "0x0000000000000000000000000000000000000001"
		const addressBRWC0GB = accounts[6]
		const addressW1hrEcC = accounts[3]
		const addressL7puUEA = await afiController9HJFet.inCaseTokensGetStuck.call(address4FR3E2, uinttVNNocK, {from: accounts[0]});
		const addressv9fggZd = await afiController9HJFet.inCaseStrategyTokenGetStuck.call(addressW1hrEcC, addressBRWC0GB, {from: accounts[3]});

		await expect(afiController9HJFet.inCaseTokensGetStuck.call(address4FR3E2, uinttVNNocK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressoSRQJE = accounts[2]
		const afiControllerWSdLfXu = await afiController.new(addressoSRQJE, {from: accounts[5]});
		const addresskgqCbbd = accounts[1]
		const addresszPI2Ozt = accounts[4]
		const uintefyYcjI = BigInt("1301")
		const addressSDI9UPx = accounts[5]
		const addressDNCuG74 = await afiControllerWSdLfXu.inCaseStrategyTokenGetStuck.call(addresszPI2Ozt, addresskgqCbbd, {from: accounts[5]});
		const addressrRsSG05 = await afiControllerWSdLfXu.earn.call(addressSDI9UPx, uintefyYcjI, {from: accounts[1]});

		await expect(afiControllerWSdLfXu.inCaseStrategyTokenGetStuck.call(addresszPI2Ozt, addresskgqCbbd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressZa1ZDKe = accounts[2]
		const afiControllerWSdLfXu = await afiController.new(addressZa1ZDKe, {from: accounts[5]});
		const addressv4qDAyA = accounts[3]
		const uintKlkN7iH = BigInt("1301")
		const addressNmutSZN = accounts[5]
		const addressnnFDKZ = accounts[5]
		const addressCSghyXq = accounts[4]
		const addressVkJQer5 = await afiControllerWSdLfXu.setRewards.call(addressv4qDAyA, {from: accounts[5]});
		const addressrRsSG05 = await afiControllerWSdLfXu.earn.call(addressNmutSZN, uintKlkN7iH, {from: accounts[1]});
		const addressWYJBIWy = await afiControllerWSdLfXu.setStrategy.call(addressCSghyXq, addressnnFDKZ, {from: accounts[3]});

		await expect(afiControllerWSdLfXu.earn.call(addressNmutSZN, uintKlkN7iH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})