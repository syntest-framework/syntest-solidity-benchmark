const Controller = artifacts.require("Controller");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Controller', (accounts) => {
	it('test for Controller', async () => {
		const addressgkTCx7l = accounts[3]
		const ControllerFoS7DDS = await Controller.new(addressgkTCx7l, {from: accounts[4]});
		const addressRG0zzNH = accounts[2]
		const addressubySPn = accounts[3]
		const uinttRrVzgy = BigInt("1214")
		const addressDWPSWF = accounts[2]
		const addressTNHTked = accounts[3]
		const addressxH3hUxo = accounts[2]
		const addressPLmBHmA = accounts[4]
		const uintZWxVnjG = BigInt("1567")
		const addresswr1K9Tj = accounts[5]
		const uintoG8Kkl3 = BigInt("1415")
		const addressuprPnK = "0x0000000000000000000000000000000000000001"
		const addresseJR5reJ = await ControllerFoS7DDS.setStrategy.call(addressubySPn, addressRG0zzNH, {from: accounts[3]});
		const uintcuNCS7N = await ControllerFoS7DDS.setSplit.call(uinttRrVzgy, {from: accounts[1]});
		const addressl3MEcZU = await ControllerFoS7DDS.setRewards.call(addressDWPSWF, {from: accounts[1]});
		const addressb7ejEPM = await ControllerFoS7DDS.setConverter.call(addressPLmBHmA, addressxH3hUxo, addressTNHTked, {from: accounts[2]});
		const addressbJqrdML = await ControllerFoS7DDS.earn.call(addresswr1K9Tj, uintZWxVnjG, {from: accounts[3]});
		const addressBaGajU = await ControllerFoS7DDS.inCaseTokensGetStuck.call(addressuprPnK, uintoG8Kkl3, {from: accounts[1]});

		await expect(ControllerFoS7DDS.setStrategy.call(addressubySPn, addressRG0zzNH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressgEsecpJ = accounts[3]
		const ControllergV6jAFj = await Controller.new(addressgEsecpJ, {from: accounts[5]});
		const addressiZQbRgz = accounts[4]
		const addressAjwfure = accounts[5]
		const addressuCI2nQz = accounts[0]
		const addressmtQ2IzD = accounts[2]
		const addresswuMEc0 = await ControllergV6jAFj.withdrawAll.call(addressiZQbRgz, {from: accounts[3]});
		const addressVPTN96y = await ControllergV6jAFj.approveStrategy.call(addressuCI2nQz, addressAjwfure, {from: accounts[4]});
		const addressA3LmdxA = await ControllergV6jAFj.setRewards.call(addressmtQ2IzD, {from: accounts[0]});

		await expect(ControllergV6jAFj.withdrawAll.call(addressiZQbRgz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const address24vggL = accounts[3]
		const ControllerBhFhrm3 = await Controller.new(address24vggL, {from: accounts[3]});
		const addressprQQrNd = accounts[1]
		const addressiHAButT = accounts[4]
		const addresszPVCrRy = accounts[2]
		const addressYplA197 = accounts[2]
		const addresswXg77i = accounts[3]
		const addressQLanSJh = accounts[4]
		const addresssjqLq1k = await ControllerBhFhrm3.setOneSplit.call(addressprQQrNd, {from: "0x0000000000000000000000000000000000000001"});
		const address1OHg24 = await ControllerBhFhrm3.setGovernance.call(addressiHAButT, {from: accounts[2]});
		const addressiIt63tI = await ControllerBhFhrm3.setGovernance.call(addresszPVCrRy, {from: accounts[4]});
		const addresst62JDFL = await ControllerBhFhrm3.setStrategist.call(addressYplA197, {from: accounts[5]});
		const addressnxua4Xd = await ControllerBhFhrm3.approveStrategy.call(addressQLanSJh, addresswXg77i, {from: accounts[2]});

		await expect(ControllerBhFhrm3.setOneSplit.call(addressprQQrNd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressxKGWuXC = accounts[0]
		const Controllerc06GK6m = await Controller.new(addressxKGWuXC, {from: accounts[4]});
		const addresskKAQJDN = "0x0000000000000000000000000000000000000001"
		const addressYJMafLE = accounts[2]
		const addressRHpQxLO = accounts[3]
		const uintAoglvlQ = BigInt("1258")
		const addressrcxmKIh = accounts[1]
		const addressTn0zIsO = accounts[3]
		const addressK5fNz0m = "0x0000000000000000000000000000000000000001"
		const addressHwU2R4B = accounts[4]
		const addressMfY4riA = accounts[2]
		const uintULsEVgh = BigInt("24")
		const addressc8uXoOY = accounts[0]
		const addressf07bagP = accounts[4]
		const address1LzmRC = await Controllerc06GK6m.setConverter.call(addressRHpQxLO, addressYJMafLE, addresskKAQJDN, {from: accounts[1]});
		const addressVwP5nLP = await Controllerc06GK6m.yearn.call(addressTn0zIsO, addressrcxmKIh, uintAoglvlQ, {from: accounts[2]});
		const addressmqpUenZ = await Controllerc06GK6m.setGovernance.call(addressK5fNz0m, {from: accounts[0]});
		const addressx3zI1y = await Controllerc06GK6m.setVault.call(addressMfY4riA, addressHwU2R4B, {from: accounts[2]});
		const addressDbh9bbI = await Controllerc06GK6m.yearn.call(addressf07bagP, addressc8uXoOY, uintULsEVgh, {from: accounts[2]});

		await expect(Controllerc06GK6m.setConverter.call(addressRHpQxLO, addressYJMafLE, addresskKAQJDN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresswZV4LIn = accounts[0]
		const ControllerdBVOVFx = await Controller.new(addresswZV4LIn, {from: accounts[0]});
		const uintMWQMNds = BigInt("1740")
		const addressG9mCxAn = accounts[4]
		const addressaSJFU5z = accounts[3]
		const uintUxLkPi = BigInt("1303")
		const addressgVa7dJH = accounts[1]
		const addressODQX2HD = accounts[2]
		const uintftoeZvw = BigInt("2006")
		const addresstpbfhfq = accounts[0]
		const uinttyxfPkE = await ControllerdBVOVFx.getExpectedReturn.call(addressaSJFU5z, addressG9mCxAn, uintMWQMNds, {from: accounts[0]});
		const uintN0KPHvq = await ControllerdBVOVFx.getExpectedReturn.call(addressODQX2HD, addressgVa7dJH, uintUxLkPi, {from: accounts[5]});
		const addressLyxnoQH = await ControllerdBVOVFx.inCaseTokensGetStuck.call(addresstpbfhfq, uintftoeZvw, {from: accounts[0]});

		await expect(ControllerdBVOVFx.getExpectedReturn.call(addressaSJFU5z, addressG9mCxAn, uintMWQMNds, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressGuEs4PK = accounts[3]
		const ControllerMMU6HSZ = await Controller.new(addressGuEs4PK, {from: accounts[4]});
		const uintKspdrRa = BigInt("518")
		const addressNnd2fQ4 = accounts[4]
		const uintcGGcfi = BigInt("1762")
		const addressPkf2MIe = "0x0000000000000000000000000000000000000001"
		const uintXnMCSmi = BigInt("1446")
		const addressYcpJmNB = accounts[0]
		const addressPAmYZS = accounts[1]
		const addresshVi1PK4 = accounts[0]
		const addresslZ7AZpA = accounts[4]
		const addressnxutot1 = "0x0000000000000000000000000000000000000001"
		const addresswIksy43 = accounts[1]
		const addresshhyKoqx = await ControllerMMU6HSZ.withdraw.call(addressNnd2fQ4, uintKspdrRa, {from: accounts[3]});
		const addressPWI308i = await ControllerMMU6HSZ.inCaseTokensGetStuck.call(addressPkf2MIe, uintcGGcfi, {from: accounts[4]});
		const addresstLtv6Fj = await ControllerMMU6HSZ.inCaseTokensGetStuck.call(addressYcpJmNB, uintXnMCSmi, {from: accounts[2]});
		const addressFHoCw8s = await ControllerMMU6HSZ.setOneSplit.call(addressPAmYZS, {from: accounts[2]});
		const addresswOZDvO5 = await ControllerMMU6HSZ.inCaseStrategyTokenGetStuck.call(addresslZ7AZpA, addresshVi1PK4, {from: accounts[2]});
		const addressZJJ5Ild = await ControllerMMU6HSZ.inCaseStrategyTokenGetStuck.call(addresswIksy43, addressnxutot1, {from: accounts[1]});

		await expect(ControllerMMU6HSZ.withdraw.call(addressNnd2fQ4, uintKspdrRa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressKjXbMQ5 = accounts[4]
		const ControllerZtME1nY = await Controller.new(addressKjXbMQ5, {from: accounts[1]});
		const addressdFA6hJ = accounts[3]
		const addressOE74DHk = accounts[1]
		const uintHrgkTZi = BigInt("666")
		const addressK4xJI6Q = accounts[0]
		const addressanTjshg = accounts[1]
		const addressEzm3M9K = accounts[5]
		const addressvlofK0B = accounts[2]
		const addressclH3R1F = await ControllerZtME1nY.inCaseStrategyTokenGetStuck.call(addressOE74DHk, addressdFA6hJ, {from: accounts[3]});
		const addressfYate8 = await ControllerZtME1nY.earn.call(addressK4xJI6Q, uintHrgkTZi, {from: accounts[1]});
		const addressTeTBXj = await ControllerZtME1nY.setConverter.call(addressvlofK0B, addressEzm3M9K, addressanTjshg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllerZtME1nY.inCaseStrategyTokenGetStuck.call(addressOE74DHk, addressdFA6hJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressr8HH17u = accounts[4]
		const ControllervXHY7ok = await Controller.new(addressr8HH17u, {from: "0x0000000000000000000000000000000000000001"});
		const addresstZVSKft = accounts[0]
		const addressneOM0Ka = accounts[0]
		const addressBZ4NvVt = "0x0000000000000000000000000000000000000001"
		const addressiuI1l11 = accounts[0]
		const addresssY1LQot = accounts[0]
		const addressbtjzLDW = await ControllervXHY7ok.setGovernance.call(addresstZVSKft, {from: accounts[1]});
		const addressKs24bPy = await ControllervXHY7ok.setRewards.call(addressneOM0Ka, {from: accounts[1]});
		const addressWH0hE7J = await ControllervXHY7ok.revokeStrategy.call(addressiuI1l11, addressBZ4NvVt, {from: accounts[2]});
		const addressVciwu7o = await ControllervXHY7ok.setRewards.call(addresssY1LQot, {from: accounts[2]});
	});

	it('test for Controller', async () => {
		const addressLqc5aXz = accounts[0]
		const ControllerxAFdure = await Controller.new(addressLqc5aXz, {from: accounts[0]});
		const addressRsaUQai = accounts[4]
		const addressIMmnd7Z = accounts[1]
		const addressd7tvQh9 = accounts[0]
		const addressbuqsLLT = accounts[4]
		const uint75CvNS = BigInt("975")
		const addressNK5TRgM = accounts[0]
		const addressrKL6AWS = accounts[1]
		const uintGA8JkWa = BigInt("1804")
		const addresseS76Ks = "0x0000000000000000000000000000000000000001"
		const addressGSQJ34b = accounts[3]
		const addressyh5ly3y = await ControllerxAFdure.setVault.call(addressIMmnd7Z, addressRsaUQai, {from: accounts[2]});
		const addresshmkOXvp = await ControllerxAFdure.setStrategy.call(addressbuqsLLT, addressd7tvQh9, {from: accounts[5]});
		const addresspu6E18L = await ControllerxAFdure.yearn.call(addressrKL6AWS, addressNK5TRgM, uint75CvNS, {from: accounts[1]});
		const addressPBd7wMk = await ControllerxAFdure.yearn.call(addressGSQJ34b, addresseS76Ks, uintGA8JkWa, {from: accounts[3]});

		await expect(ControllerxAFdure.setVault.call(addressIMmnd7Z, addressRsaUQai, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressg3OpLkx = "0x0000000000000000000000000000000000000001"
		const ControllervB3nSiC = await Controller.new(addressg3OpLkx, {from: accounts[5]});
		const uintjtOfRAQ = BigInt("1959")
		const addresstatABWM = accounts[2]
		const uinta2SwWgl = BigInt("1870")
		const addressorzHHTY = accounts[2]
		const uintvc2VlXo = BigInt("1249")
		const addressQ0tfyjH = accounts[2]
		const addressf5JTX3V = accounts[2]
		const addressRtO7q0Y = accounts[2]
		const addressC1Hf1wT = accounts[2]
		const addressY4rQulR = await ControllervB3nSiC.inCaseTokensGetStuck.call(addresstatABWM, uintjtOfRAQ, {from: accounts[5]});
		const address8cRhrW = await ControllervB3nSiC.earn.call(addressorzHHTY, uinta2SwWgl, {from: accounts[3]});
		const addresskD1W9Ow = await ControllervB3nSiC.earn.call(addressQ0tfyjH, uintvc2VlXo, {from: accounts[2]});
		const uintsf0NSq9 = await ControllervB3nSiC.balanceOf.call(addressf5JTX3V, {from: accounts[0]});
		const uintdwvROVK = await ControllervB3nSiC.balanceOf.call(addressRtO7q0Y, {from: accounts[3]});
		const uintsb4Hw2k = await ControllervB3nSiC.balanceOf.call(addressC1Hf1wT, {from: accounts[4]});

		await expect(ControllervB3nSiC.inCaseTokensGetStuck.call(addresstatABWM, uintjtOfRAQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressPPX15ej = accounts[3]
		const ControllergV6jAFj = await Controller.new(addressPPX15ej, {from: accounts[5]});
		const uintvIkveN = BigInt("963")
		const addresskiOcLsc = accounts[1]
		const addressIaOvxt4 = accounts[4]
		const addressdoKNypv = accounts[3]
		const uintkrA4u6m = BigInt("998")
		const uintR634GEf = BigInt("1731")
		const addressKhTTqt0 = accounts[5]
		const addresscd9yBKD = accounts[4]
		const addresslhD6err = accounts[3]
		const addressVZscUA = accounts[1]
		const addressqli9wTK = accounts[4]
		const addressMvfMgen = accounts[2]
		const addresskZh5krn = accounts[5]
		const addressarGlYVX = accounts[2]
		const addressgv6CX1F = await ControllergV6jAFj.earn.call(addresskiOcLsc, uintvIkveN, {from: accounts[0]});
		const addressbFCRbZY = await ControllergV6jAFj.setStrategy.call(addressdoKNypv, addressIaOvxt4, {from: accounts[0]});
		const uintdekXAyu = await ControllergV6jAFj.setSplit.call(uintkrA4u6m, {from: accounts[2]});
		const addressy0tWahO = await ControllergV6jAFj.earn.call(addressKhTTqt0, uintR634GEf, {from: "0x0000000000000000000000000000000000000001"});
		const addressWZAKWUh = await ControllergV6jAFj.setOneSplit.call(addresscd9yBKD, {from: accounts[0]});
		const addressp9sxD2J = await ControllergV6jAFj.setOneSplit.call(addresslhD6err, {from: accounts[0]});
		const addressXYed5q = await ControllergV6jAFj.setStrategist.call(addressVZscUA, {from: accounts[2]});
		const addresswuMEc0 = await ControllergV6jAFj.withdrawAll.call(addressqli9wTK, {from: accounts[3]});
		const addressrf3Cgai = await ControllergV6jAFj.setStrategy.call(addresskZh5krn, addressMvfMgen, {from: accounts[2]});
		const addressA3LmdxA = await ControllergV6jAFj.setRewards.call(addressarGlYVX, {from: accounts[0]});

		await expect(ControllergV6jAFj.earn.call(addresskiOcLsc, uintvIkveN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVmhtRCd = accounts[0]
		const ControllerX2ijXNG = await Controller.new(addressVmhtRCd, {from: accounts[4]});
		const addressaqT9RBP = accounts[4]
		const uint1V2HQA = BigInt("573")
		const addressZOf4R7j = accounts[0]
		const addressHWe0vBv = accounts[5]
		const addressmlwltzP = accounts[4]
		const addressC2zJFj = accounts[5]
		const addressK1CCom4 = accounts[1]
		const uintBftWONF = BigInt("1338")
		const addressW3GMp8S = accounts[3]
		const uintGa2UanD = await ControllerX2ijXNG.balanceOf.call(addressaqT9RBP, {from: accounts[5]});
		const uint9FnEck = await ControllerX2ijXNG.getExpectedReturn.call(addressHWe0vBv, addressZOf4R7j, uint1V2HQA, {from: accounts[3]});
		const addressrNS1HDb = await ControllerX2ijXNG.setConverter.call(addressK1CCom4, addressC2zJFj, addressmlwltzP, {from: accounts[4]});
		const addressmA5dZ7t = await ControllerX2ijXNG.withdraw.call(addressW3GMp8S, uintBftWONF, {from: accounts[1]});

		await expect(ControllerX2ijXNG.balanceOf.call(addressaqT9RBP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresszLcBWL4 = accounts[3]
		const ControllerFoS7DDS = await Controller.new(addresszLcBWL4, {from: accounts[4]});
		const addressZ9nobtz = accounts[1]
		const addressjShcHCM = accounts[4]
		const addressaS1Io71 = accounts[2]
		const addressYk1iZs = accounts[3]
		const addressrJ0EP9m = accounts[3]
		const addressVvKYyWF = accounts[2]
		const addressjpQuTYV = accounts[4]
		const uintLY9qFfV = BigInt("1567")
		const addressDysMyJ3 = accounts[5]
		const addressFUi4yGk = accounts[2]
		const uinthP45GhK = BigInt("1415")
		const addresshmPDqec = "0x0000000000000000000000000000000000000001"
		const addresss3nVVJZ = await ControllerFoS7DDS.setGovernance.call(addressZ9nobtz, {from: accounts[1]});
		const addresskyCWESQ = await ControllerFoS7DDS.setStrategist.call(addressjShcHCM, {from: accounts[0]});
		const addresseJR5reJ = await ControllerFoS7DDS.setStrategy.call(addressYk1iZs, addressaS1Io71, {from: accounts[3]});
		const addressb7ejEPM = await ControllerFoS7DDS.setConverter.call(addressjpQuTYV, addressVvKYyWF, addressrJ0EP9m, {from: accounts[2]});
		const addressbJqrdML = await ControllerFoS7DDS.earn.call(addressDysMyJ3, uintLY9qFfV, {from: accounts[3]});
		const addressye17xYe = await ControllerFoS7DDS.setOneSplit.call(addressFUi4yGk, {from: accounts[2]});
		const addressBaGajU = await ControllerFoS7DDS.inCaseTokensGetStuck.call(addresshmPDqec, uinthP45GhK, {from: accounts[1]});

		await expect(ControllerFoS7DDS.setGovernance.call(addressZ9nobtz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressMDKEuJu = accounts[3]
		const ControllergV6jAFj = await Controller.new(addressMDKEuJu, {from: accounts[5]});
		const addressbIHVVcb = accounts[2]
		const addressA3LmdxA = await ControllergV6jAFj.setRewards.call(addressbIHVVcb, {from: accounts[0]});

		await expect(ControllergV6jAFj.setRewards.call(addressbIHVVcb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressPW1hU0y = accounts[2]
		const ControllerWRP8QaU = await Controller.new(addressPW1hU0y, {from: accounts[1]});
		const uintjhn0OJV = BigInt("350")
		const addressr0gMXhS = accounts[1]
		const addressNQb85uk = accounts[2]
		const address5B0srk = accounts[5]
		const addressgfXOEH = "0x0000000000000000000000000000000000000001"
		const addresshMCn4bl = accounts[1]
		const uintjuXGo7Z = await ControllerWRP8QaU.setSplit.call(uintjhn0OJV, {from: accounts[3]});
		const addressUEjuOMG = await ControllerWRP8QaU.setStrategy.call(addressNQb85uk, addressr0gMXhS, {from: accounts[1]});
		const address3gx8Xy = await ControllerWRP8QaU.setGovernance.call(address5B0srk, {from: "0x0000000000000000000000000000000000000001"});
		const addressN5ASB7F = await ControllerWRP8QaU.revokeStrategy.call(addresshMCn4bl, addressgfXOEH, {from: accounts[1]});

		await expect(ControllerWRP8QaU.setSplit.call(uintjhn0OJV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressGLCJma5 = accounts[3]
		const ControllergV6jAFj = await Controller.new(addressGLCJma5, {from: accounts[5]});
		const addressKEkYRx2 = accounts[0]
		const addressjjJ0Blj = accounts[3]
		const addressPFYnsIk = await ControllergV6jAFj.setStrategist.call(addressKEkYRx2, {from: accounts[5]});
		const addressA3LmdxA = await ControllergV6jAFj.setRewards.call(addressjjJ0Blj, {from: accounts[0]});

		await expect(ControllergV6jAFj.setRewards.call(addressjjJ0Blj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZ2cBf3 = accounts[3]
		const ControllergV6jAFj = await Controller.new(addressZ2cBf3, {from: accounts[5]});
		const addressOQFqAcU = accounts[2]
		const addressz2NGQ2m = accounts[2]
		const uintIHQfRzM = BigInt("963")
		const addressfV24qmd = accounts[1]
		const uintp0xrSLY = BigInt("950")
		const addressSYFWMn1 = accounts[2]
		const addressFh2MoTl = accounts[4]
		const addressoBtCd5c = accounts[3]
		const uintMxb5F0X = BigInt("998")
		const uintHSG4n2M = BigInt("1731")
		const addresskf3rfoL = accounts[6]
		const addressYyG0lX = accounts[4]
		const addressgsIoUEo = accounts[3]
		const addressxmPUpgk = accounts[3]
		const addressZIwWpm0 = accounts[1]
		const addressPUS7fa = accounts[2]
		const addressXbW9wCP = accounts[5]
		const uintwVpyd9 = BigInt("1819")
		const addressFcZvhSM = accounts[1]
		const addressf8Dua1n = accounts[2]
		const uintpl68Nyc = BigInt("1298")
		const addressXCnIJTX = accounts[2]
		const addressrMkCpQw = await ControllergV6jAFj.approveStrategy.call(addressz2NGQ2m, addressOQFqAcU, {from: accounts[0]});
		const addressgv6CX1F = await ControllergV6jAFj.earn.call(addressfV24qmd, uintIHQfRzM, {from: accounts[0]});
		const addressDSKiiAD = await ControllergV6jAFj.earn.call(addressSYFWMn1, uintp0xrSLY, {from: accounts[4]});
		const addressbFCRbZY = await ControllergV6jAFj.setStrategy.call(addressoBtCd5c, addressFh2MoTl, {from: accounts[0]});
		const uintdekXAyu = await ControllergV6jAFj.setSplit.call(uintMxb5F0X, {from: accounts[2]});
		const addressy0tWahO = await ControllergV6jAFj.earn.call(addresskf3rfoL, uintHSG4n2M, {from: "0x0000000000000000000000000000000000000001"});
		const addressWZAKWUh = await ControllergV6jAFj.setOneSplit.call(addressYyG0lX, {from: accounts[0]});
		const uintxlImEvE = await ControllergV6jAFj.balanceOf.call(addressgsIoUEo, {from: "0x0000000000000000000000000000000000000001"});
		const addressp9sxD2J = await ControllergV6jAFj.setOneSplit.call(addressxmPUpgk, {from: accounts[0]});
		const addressXYed5q = await ControllergV6jAFj.setStrategist.call(addressZIwWpm0, {from: accounts[2]});
		const addressrf3Cgai = await ControllergV6jAFj.setStrategy.call(addressXbW9wCP, addressPUS7fa, {from: accounts[2]});
		const addresserKuZ8a = await ControllergV6jAFj.yearn.call(addressf8Dua1n, addressFcZvhSM, uintwVpyd9, {from: accounts[5]});
		const uintWkeV1jI = await ControllergV6jAFj.setSplit.call(uintpl68Nyc, {from: accounts[5]});
		const addressA3LmdxA = await ControllergV6jAFj.setRewards.call(addressXCnIJTX, {from: accounts[0]});

		await expect(ControllergV6jAFj.approveStrategy.call(addressz2NGQ2m, addressOQFqAcU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshocIp4 = accounts[4]
		const ControllerEVdKCc1 = await Controller.new(addresshocIp4, {from: accounts[1]});
		const uintY344atX = BigInt("1890")
		const addresstzpjylC = accounts[4]
		const addresspUhpzZG = accounts[0]
		const uintOmnAoNT = BigInt("788")
		const addressU5XxL1G = accounts[3]
		const addressHF3D6a = accounts[3]
		const addressTrhtC2 = accounts[4]
		const uintFcEZY9l = BigInt("473")
		const addressVeMniTW = "0x0000000000000000000000000000000000000001"
		const addressxo45Yek = accounts[4]
		const uintul5T34 = BigInt("272")
		const addressflQUakr = accounts[4]
		const addressxHEFqTR = accounts[0]
		const addresstXn2n1n = await ControllerEVdKCc1.yearn.call(addresspUhpzZG, addresstzpjylC, uintY344atX, {from: accounts[1]});
		const addresso66c4KZ = await ControllerEVdKCc1.earn.call(addressU5XxL1G, uintOmnAoNT, {from: accounts[0]});
		const addressTXABRXD = await ControllerEVdKCc1.inCaseStrategyTokenGetStuck.call(addressTrhtC2, addressHF3D6a, {from: accounts[4]});
		const uintuOS79ef = await ControllerEVdKCc1.getExpectedReturn.call(addressxo45Yek, addressVeMniTW, uintFcEZY9l, {from: accounts[3]});
		const addressy4kqg4G = await ControllerEVdKCc1.yearn.call(addressxHEFqTR, addressflQUakr, uintul5T34, {from: accounts[3]});

		await expect(ControllerEVdKCc1.yearn.call(addresspUhpzZG, addresstzpjylC, uintY344atX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressgODoefC = accounts[3]
		const ControllergV6jAFj = await Controller.new(addressgODoefC, {from: accounts[5]});
		const addressjF3fgI = accounts[2]
		const addressmtxIBJQ = accounts[1]
		const addressqObYyYj = accounts[5]
		const addresstAVRBCF = await ControllergV6jAFj.revokeStrategy.call(addressmtxIBJQ, addressjF3fgI, {from: accounts[0]});
		const addressA3LmdxA = await ControllergV6jAFj.setRewards.call(addressqObYyYj, {from: accounts[0]});

		await expect(ControllergV6jAFj.revokeStrategy.call(addressmtxIBJQ, addressjF3fgI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressdL4jKzD = accounts[1]
		const ControllerGj4TulG = await Controller.new(addressdL4jKzD, {from: accounts[0]});
		const addresso5HcZRw = accounts[1]
		const addressRL3t3b7 = accounts[1]
		const addressw4B5fNv = accounts[0]
		const addressg6yODKQ = "0x0000000000000000000000000000000000000001"
		const addressnELVr8x = accounts[0]
		const addressPiTRWSk = accounts[2]
		const uintxhDIN6 = BigInt("1367")
		const addresskHQxfyi = accounts[5]
		const addressDsOR6wa = accounts[2]
		const addressuzid9W8 = accounts[1]
		const addresswxGvA2e = await ControllerGj4TulG.approveStrategy.call(addressRL3t3b7, addresso5HcZRw, {from: accounts[0]});
		const addressxIbw6m = await ControllerGj4TulG.setStrategy.call(addressg6yODKQ, addressw4B5fNv, {from: accounts[0]});
		const addressTttUk5R = await ControllerGj4TulG.setVault.call(addressPiTRWSk, addressnELVr8x, {from: accounts[0]});
		const uintv3mBPGV = await ControllerGj4TulG.getExpectedReturn.call(addressDsOR6wa, addresskHQxfyi, uintxhDIN6, {from: "0x0000000000000000000000000000000000000001"});
		const uintUq2L9A = await ControllerGj4TulG.balanceOf.call(addressuzid9W8, {from: accounts[4]});

		await expect(ControllerGj4TulG.setStrategy.call(addressg6yODKQ, addressw4B5fNv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})