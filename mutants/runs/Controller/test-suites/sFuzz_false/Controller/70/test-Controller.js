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
		const addresshU1rVJb = accounts[3]
		const ControllergV6jAFj = await Controller.new(addresshU1rVJb, {from: accounts[5]});
		const uintMemhRo3 = BigInt("1255")
		const addressyOVfBZY = accounts[3]
		const addressCXDH9TR = accounts[4]
		const addressK5dzloA = accounts[5]
		const addresstnuG94U = accounts[0]
		const addressUGba9mF = accounts[2]
		const addressB0mNLFA = accounts[3]
		const uintBozAtrJ = BigInt("590")
		const addressJhSEfc = accounts[3]
		const addressKdnIF6j = await ControllergV6jAFj.earn.call(addressyOVfBZY, uintMemhRo3, {from: accounts[0]});
		const addresswuMEc0 = await ControllergV6jAFj.withdrawAll.call(addressCXDH9TR, {from: accounts[3]});
		const addressVPTN96y = await ControllergV6jAFj.approveStrategy.call(addresstnuG94U, addressK5dzloA, {from: accounts[4]});
		const addressYzROjR = await ControllergV6jAFj.setVault.call(addressB0mNLFA, addressUGba9mF, {from: accounts[5]});
		const uintCKM6qVy = await ControllergV6jAFj.setSplit.call(uintBozAtrJ, {from: accounts[3]});
		const addressA3LmdxA = await ControllergV6jAFj.setRewards.call(addressJhSEfc, {from: accounts[0]});

		await expect(ControllergV6jAFj.earn.call(addressyOVfBZY, uintMemhRo3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressTKKtUzW = accounts[3]
		const ControllergV6jAFj = await Controller.new(addressTKKtUzW, {from: accounts[5]});
		const addressL2K3Pb8 = accounts[2]
		const addressCvTGFdw = accounts[4]
		const addressU4Fuytr = accounts[6]
		const addressYtJai75 = accounts[0]
		const addressOzbn64A = accounts[2]
		const uintmzvZixk = await ControllergV6jAFj.balanceOf.call(addressL2K3Pb8, {from: accounts[2]});
		const addresswuMEc0 = await ControllergV6jAFj.withdrawAll.call(addressCvTGFdw, {from: accounts[3]});
		const addressVPTN96y = await ControllergV6jAFj.approveStrategy.call(addressYtJai75, addressU4Fuytr, {from: accounts[4]});
		const addressA3LmdxA = await ControllergV6jAFj.setRewards.call(addressOzbn64A, {from: accounts[0]});

		await expect(ControllergV6jAFj.balanceOf.call(addressL2K3Pb8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressPJUmXXi = accounts[2]
		const ControllerUKz07l4 = await Controller.new(addressPJUmXXi, {from: accounts[5]});
		const addressTV8LQz9 = accounts[2]
		const addressbvzaxwW = accounts[5]
		const addressGFMRPqa = accounts[2]
		const uintBrQveB4 = BigInt("1471")
		const addresskXXOlg = accounts[1]
		const addressF3Ad08b = await ControllerUKz07l4.setGovernance.call(addressTV8LQz9, {from: accounts[0]});
		const addressAw7y4Z8 = await ControllerUKz07l4.approveStrategy.call(addressGFMRPqa, addressbvzaxwW, {from: accounts[4]});
		const addressUqrrWTl = await ControllerUKz07l4.earn.call(addresskXXOlg, uintBrQveB4, {from: accounts[0]});

		await expect(ControllerUKz07l4.setGovernance.call(addressTV8LQz9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressEZ2ezy = accounts[3]
		const ControllergV6jAFj = await Controller.new(addressEZ2ezy, {from: accounts[5]});
		const addressI5LoN3 = accounts[2]
		const addressA3LmdxA = await ControllergV6jAFj.setRewards.call(addressI5LoN3, {from: accounts[0]});

		await expect(ControllergV6jAFj.setRewards.call(addressI5LoN3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressfFSTf88 = accounts[3]
		const ControllergV6jAFj = await Controller.new(addressfFSTf88, {from: accounts[5]});
		const uintKjrnvbw = BigInt("1113")
		const addressYSe5RjQ = accounts[3]
		const uintaYpBMd = await ControllergV6jAFj.setSplit.call(uintKjrnvbw, {from: accounts[4]});
		const addressA3LmdxA = await ControllergV6jAFj.setRewards.call(addressYSe5RjQ, {from: accounts[0]});

		await expect(ControllergV6jAFj.setSplit.call(uintKjrnvbw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressaYq8SiG = accounts[3]
		const Controllerz6LVBw8 = await Controller.new(addressaYq8SiG, {from: accounts[2]});
		const addressk3qOG7V = accounts[1]
		const addressgJkyL9b = accounts[2]
		const uintUt4zYL3 = BigInt("57")
		const uintx2befQY = BigInt("1867")
		const addressv6wiYTd = accounts[5]
		const addressVK8hydb = "0x0000000000000000000000000000000000000001"
		const addressk1NjWG9 = await Controllerz6LVBw8.setVault.call(addressgJkyL9b, addressk3qOG7V, {from: accounts[4]});
		const uintgoUANd0 = await Controllerz6LVBw8.setSplit.call(uintUt4zYL3, {from: "0x0000000000000000000000000000000000000001"});
		const addresskIuwuJ5 = await Controllerz6LVBw8.earn.call(addressv6wiYTd, uintx2befQY, {from: accounts[3]});
		const uintFTuAlw = await Controllerz6LVBw8.balanceOf.call(addressVK8hydb, {from: accounts[0]});

		await expect(Controllerz6LVBw8.setVault.call(addressgJkyL9b, addressk3qOG7V, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressAzX9Du = accounts[3]
		const ControllergV6jAFj = await Controller.new(addressAzX9Du, {from: accounts[5]});
		const uintC9S9P1S = BigInt("1540")
		const addressBU1MIUS = accounts[4]
		const addressavZQ5Bt = "0x0000000000000000000000000000000000000001"
		const addresssJPlpKl = accounts[3]
		const addresse5DIU7F = accounts[0]
		const uintARraJ3v = BigInt("1846")
		const addressrrLYSiI = accounts[5]
		const addresswMVSUrr = await ControllergV6jAFj.yearn.call(addressavZQ5Bt, addressBU1MIUS, uintC9S9P1S, {from: accounts[3]});
		const addressA3LmdxA = await ControllergV6jAFj.setRewards.call(addresssJPlpKl, {from: accounts[0]});
		const addressMmMwNdA = await ControllergV6jAFj.setOneSplit.call(addresse5DIU7F, {from: accounts[3]});
		const addressJu2u9lt = await ControllergV6jAFj.withdraw.call(addressrrLYSiI, uintARraJ3v, {from: accounts[0]});

		await expect(ControllergV6jAFj.yearn.call(addressavZQ5Bt, addressBU1MIUS, uintC9S9P1S, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresshGzK6e2 = accounts[3]
		const ControllergV6jAFj = await Controller.new(addresshGzK6e2, {from: accounts[5]});
		const addressCgRxhZb = "0x0000000000000000000000000000000000000001"
		const addressnBvfSXW = accounts[0]
		const addressHKPVXDk = accounts[0]
		const addressVLTccgj = accounts[3]
		const addressMasP0wu = await ControllergV6jAFj.setStrategist.call(addressCgRxhZb, {from: accounts[0]});
		const addressbFsQDNc = await ControllergV6jAFj.setVault.call(addressHKPVXDk, addressnBvfSXW, {from: accounts[2]});
		const addressA3LmdxA = await ControllergV6jAFj.setRewards.call(addressVLTccgj, {from: accounts[0]});

		await expect(ControllergV6jAFj.setStrategist.call(addressCgRxhZb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressWjmigXr = accounts[3]
		const ControllergV6jAFj = await Controller.new(addressWjmigXr, {from: accounts[5]});
		const uintEtvoFGF = BigInt("954")
		const addressna8XMhn = accounts[3]
		const addressFgExcF0 = accounts[3]
		const addressa4AI7e = await ControllergV6jAFj.inCaseTokensGetStuck.call(addressna8XMhn, uintEtvoFGF, {from: accounts[1]});
		const addressA3LmdxA = await ControllergV6jAFj.setRewards.call(addressFgExcF0, {from: accounts[0]});

		await expect(ControllergV6jAFj.inCaseTokensGetStuck.call(addressna8XMhn, uintEtvoFGF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressZQp2my4 = "0x0000000000000000000000000000000000000001"
		const ControllerazdCY3g = await Controller.new(addressZQp2my4, {from: accounts[2]});
		const addressarcEAsB = accounts[2]
		const addressO2BXBJq = accounts[3]
		const addressdrXJ2Pk = accounts[3]
		const uintMEZozAH = BigInt("320")
		const address7kKyWA = accounts[5]
		const addressVaV4NUA = accounts[0]
		const addressBGa7ilr = accounts[2]
		const addressiCqYSnh = await ControllerazdCY3g.revokeStrategy.call(addressO2BXBJq, addressarcEAsB, {from: accounts[2]});
		const addresslmHvUCR = await ControllerazdCY3g.setOneSplit.call(addressdrXJ2Pk, {from: "0x0000000000000000000000000000000000000001"});
		const uinty1VlvO7 = await ControllerazdCY3g.getExpectedReturn.call(addressVaV4NUA, address7kKyWA, uintMEZozAH, {from: accounts[0]});
		const addressCwUvoo7 = await ControllerazdCY3g.setStrategist.call(addressBGa7ilr, {from: accounts[2]});

		await expect(ControllerazdCY3g.setOneSplit.call(addressdrXJ2Pk, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVinYJK = accounts[3]
		const ControllergV6jAFj = await Controller.new(addressVinYJK, {from: accounts[5]});
		const addressz9bkzh = accounts[0]
		const addressZwmfHqR = accounts[4]
		const addressGDwM6Ic = accounts[4]
		const uintK1XWJV8 = BigInt("409")
		const addresshfAFKXh = accounts[2]
		const addressiGUdeo = accounts[3]
		const addresspvj6Mu8 = await ControllergV6jAFj.setStrategy.call(addressZwmfHqR, addressz9bkzh, {from: accounts[5]});
		const addressA3LmdxA = await ControllergV6jAFj.setRewards.call(addressGDwM6Ic, {from: accounts[0]});
		const uintHbdBBiH = await ControllergV6jAFj.getExpectedReturn.call(addressiGUdeo, addresshfAFKXh, uintK1XWJV8, {from: accounts[1]});

		await expect(ControllergV6jAFj.setStrategy.call(addressZwmfHqR, addressz9bkzh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addresslyexyL1 = accounts[3]
		const ControllergV6jAFj = await Controller.new(addresslyexyL1, {from: accounts[5]});
		const addressmqAe3rm = accounts[4]
		const addressAr2L3Cb = accounts[4]
		const uintqP7scp = BigInt("794")
		const addressu0hBtgg = accounts[0]
		const addressZUZj8cN = accounts[3]
		const uintx3PpKH = BigInt("1156")
		const addressaBmzzUh = accounts[1]
		const addressrLJdTAT = await ControllergV6jAFj.approveStrategy.call(addressAr2L3Cb, addressmqAe3rm, {from: accounts[4]});
		const addressWdovbPK = await ControllergV6jAFj.inCaseTokensGetStuck.call(addressu0hBtgg, uintqP7scp, {from: accounts[3]});
		const addressA3LmdxA = await ControllergV6jAFj.setRewards.call(addressZUZj8cN, {from: accounts[0]});
		const addressZ6hFUtW = await ControllergV6jAFj.inCaseTokensGetStuck.call(addressaBmzzUh, uintx3PpKH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ControllergV6jAFj.approveStrategy.call(addressAr2L3Cb, addressmqAe3rm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Controller', async () => {
		const addressVabXmRQ = accounts[3]
		const ControllergV6jAFj = await Controller.new(addressVabXmRQ, {from: accounts[5]});
		const uintrELkEvb = BigInt("1538")
		const addressL0pMpz5 = accounts[2]
		const addressRW4rom = accounts[1]
		const addressHTspCh3 = accounts[0]
		const addresspZ3qELJ = accounts[3]
		const addresseBYkcTz = await ControllergV6jAFj.inCaseTokensGetStuck.call(addressL0pMpz5, uintrELkEvb, {from: accounts[5]});
		const addressdzKZjjD = await ControllergV6jAFj.revokeStrategy.call(addressHTspCh3, addressRW4rom, {from: "0x0000000000000000000000000000000000000001"});
		const addressA3LmdxA = await ControllergV6jAFj.setRewards.call(addresspZ3qELJ, {from: accounts[0]});

		await expect(ControllergV6jAFj.inCaseTokensGetStuck.call(addressL0pMpz5, uintrELkEvb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})