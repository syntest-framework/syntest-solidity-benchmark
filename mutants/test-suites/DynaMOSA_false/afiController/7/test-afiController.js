const afiController = artifacts.require("afiController");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('afiController', (accounts) => {
	it('test for afiController', async () => {
		const addresslId6JhA = accounts[3]
		const afiControllerKZYHO4q = await afiController.new(addresslId6JhA, {from: accounts[3]});
		const uintjBpmUBW = BigInt("296")
		const addresseRVSRK = accounts[3]
		const addressPFwP5hf = accounts[4]
		const addressW8aiD39 = accounts[3]
		const addressAtT6cgw = accounts[5]
		const addressIVP9vKR = accounts[4]
		const addressn4g9hnd = "0x0000000000000000000000000000000000000001"
		const addresspFSiEsh = accounts[4]
		const addressYXeagDB = accounts[2]
		const addressUwZlvi = accounts[4]
		const addressnsONUCa = "0x0000000000000000000000000000000000000001"
		const addressRiD23b5 = accounts[4]
		const addressTalg8We = accounts[3]
//		const addressXwTVr7c = await afiControllerKZYHO4q.inCaseTokensGetStuck.call(addresseRVSRK, uintjBpmUBW, {from: "0x0000000000000000000000000000000000000001"});
//		const addressGIxlse4 = await afiControllerKZYHO4q.revokeStrategy.call(addressW8aiD39, addressPFwP5hf, {from: accounts[0]});
//		const addressIIL9MiL = await afiControllerKZYHO4q.setRewards.call(addressAtT6cgw, {from: accounts[0]});
//		const addresso4O04KZ = await afiControllerKZYHO4q.setConverter.call(addresspFSiEsh, addressn4g9hnd, addressIVP9vKR, {from: accounts[2]});
//		const addressxb8QP3E = await afiControllerKZYHO4q.setVault.call(addressUwZlvi, addressYXeagDB, {from: accounts[4]});
//		const addressQaq4xWX = await afiControllerKZYHO4q.setConverter.call(addressTalg8We, addressRiD23b5, addressnsONUCa, {from: accounts[4]});

		await expect(afiControllerKZYHO4q.inCaseTokensGetStuck.call(addresseRVSRK, uintjBpmUBW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressvE5wpvs = accounts[5]
		const afiControllerXtCb1Q3 = await afiController.new(addressvE5wpvs, {from: accounts[3]});
		const addressOdbGY2P = accounts[4]
		const addressqXTakdG = accounts[3]
		const addressHFTrM2g = accounts[4]
		const address5olq3O = accounts[2]
//		const addresshSur5BV = await afiControllerXtCb1Q3.setStrategist.call(addressOdbGY2P, {from: accounts[1]});
//		const addressQhTFNeZ = await afiControllerXtCb1Q3.setOneSplit.call(addressqXTakdG, {from: accounts[1]});
//		const addressKvai0mv = await afiControllerXtCb1Q3.setVault.call(address5olq3O, addressHFTrM2g, {from: accounts[3]});

		await expect(afiControllerXtCb1Q3.setStrategist.call(addressOdbGY2P, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbpDiSVM = "0x0000000000000000000000000000000000000001"
		const afiControllerLZwWHl = await afiController.new(addressbpDiSVM, {from: accounts[0]});
		const addressPGyf3MS = accounts[5]
		const addressHj7jXH7 = accounts[4]
		const addressS1rZhz0 = "0x0000000000000000000000000000000000000001"
		const addressIJcjGg1 = accounts[3]
		const address4t6HqT = accounts[4]
		const addressMRZU4gF = accounts[0]
		const uintRklgwnO = BigInt("176")
		const addressq6nu5Ch = accounts[4]
		const addressrUlMNz2 = "0x0000000000000000000000000000000000000001"
//		const addressrK6RXr = await afiControllerLZwWHl.withdrawAll.call(addressPGyf3MS, {from: accounts[1]});
//		const addressNaooZ0x = await afiControllerLZwWHl.setConverter.call(addressIJcjGg1, addressS1rZhz0, addressHj7jXH7, {from: accounts[3]});
//		const addressaQjvd0A = await afiControllerLZwWHl.inCaseStrategyTokenGetStuck.call(addressMRZU4gF, address4t6HqT, {from: accounts[5]});
//		const uintNZwQY0Y = await afiControllerLZwWHl.getExpectedReturn.call(addressrUlMNz2, addressq6nu5Ch, uintRklgwnO, {from: accounts[3]});

		await expect(afiControllerLZwWHl.withdrawAll.call(addressPGyf3MS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresszuSuzy9 = accounts[4]
		const afiControllerd6gW98x = await afiController.new(addresszuSuzy9, {from: accounts[4]});
		const addressvYhDzNq = accounts[1]
		const addresscqqo5nl = accounts[3]
		const addressamaxJSJ = "0x0000000000000000000000000000000000000001"
		const addressVdkbq0P = accounts[2]
		const uintOBdVjqy = BigInt("1158")
		const addressBlZzKgd = accounts[0]
		const addressOinTYJy = accounts[1]
		const addressRbNjonK = "0x0000000000000000000000000000000000000001"
		const addressPUczqMH = accounts[5]
		const addressmd78DVn = accounts[2]
//		const addressJotgr52 = await afiControllerd6gW98x.approveStrategy.call(addresscqqo5nl, addressvYhDzNq, {from: accounts[1]});
//		const address0Lt8OQ = await afiControllerd6gW98x.approveStrategy.call(addressVdkbq0P, addressamaxJSJ, {from: accounts[4]});
//		const uintOPKHT92 = await afiControllerd6gW98x.getExpectedReturn.call(addressOinTYJy, addressBlZzKgd, uintOBdVjqy, {from: "0x0000000000000000000000000000000000000001"});
//		const uintl5Y4uFg = await afiControllerd6gW98x.balanceOf.call(addressRbNjonK, {from: accounts[1]});
//		const addressxxRIz1 = await afiControllerd6gW98x.inCaseStrategyTokenGetStuck.call(addressmd78DVn, addressPUczqMH, {from: accounts[0]});

		await expect(afiControllerd6gW98x.approveStrategy.call(addresscqqo5nl, addressvYhDzNq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressU63gG8b = accounts[2]
		const afiControllerVnHiQG0 = await afiController.new(addressU63gG8b, {from: accounts[1]});
		const addressXlMQuzZ = "0x0000000000000000000000000000000000000001"
		const addressEajxfrl = accounts[4]
		const addresswYZg9U = accounts[0]
		const uintWMfhA5 = BigInt("1371")
		const addressCINjlw = accounts[1]
		const address9Rl9gk = accounts[3]
		const addressEfwpdF1 = accounts[0]
//		const addressaVNSOK9 = await afiControllerVnHiQG0.setConverter.call(addresswYZg9U, addressEajxfrl, addressXlMQuzZ, {from: accounts[4]});
//		const addressTTAf6Vp = await afiControllerVnHiQG0.inCaseTokensGetStuck.call(addressCINjlw, uintWMfhA5, {from: accounts[2]});
//		const addressKn9FQxu = await afiControllerVnHiQG0.approveStrategy.call(addressEfwpdF1, address9Rl9gk, {from: accounts[4]});

		await expect(afiControllerVnHiQG0.setConverter.call(addresswYZg9U, addressEajxfrl, addressXlMQuzZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressxvRaJ5r = accounts[0]
		const afiControllerE5mhS9S = await afiController.new(addressxvRaJ5r, {from: accounts[4]});
		const addressKbMl7El = "0x0000000000000000000000000000000000000001"
		const addressyOs5Z73 = accounts[5]
		const addresssnH3wEK = accounts[3]
		const addresstoZa47V = accounts[0]
//		const uintAz07vWP = await afiControllerE5mhS9S.balanceOf.call(addressKbMl7El, {from: accounts[1]});
//		const addressvtb46GZ = await afiControllerE5mhS9S.inCaseStrategyTokenGetStuck.call(addresssnH3wEK, addressyOs5Z73, {from: accounts[0]});
//		const addresspI9KM3e = await afiControllerE5mhS9S.setOneSplit.call(addresstoZa47V, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerE5mhS9S.balanceOf.call(addressKbMl7El, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressQYFBs4G = accounts[0]
		const afiControllerqBLLT9s = await afiController.new(addressQYFBs4G, {from: accounts[1]});
		const addressRhEawE = accounts[3]
		const addresscq7xLQk = accounts[2]
		const addressrwvJwvh = accounts[4]
		const addressuq1uUBs = accounts[2]
		const addresskqNlw6N = accounts[2]
		const addressEQZKryY = accounts[1]
		const addressai9QnlV = accounts[4]
		const addressOJaemF = accounts[4]
		const addressisDiHPw = "0x0000000000000000000000000000000000000001"
		const addressHa99DWf = accounts[5]
		const uintxKQdnnE = BigInt("1237")
		const addressj1BPf3n = accounts[3]
//		const addresspXulpzf = await afiControllerqBLLT9s.setGovernance.call(addressRhEawE, {from: "0x0000000000000000000000000000000000000001"});
//		const addressV1RcSwP = await afiControllerqBLLT9s.setConverter.call(addressuq1uUBs, addressrwvJwvh, addresscq7xLQk, {from: accounts[2]});
//		const addressY5VL9mP = await afiControllerqBLLT9s.setStrategy.call(addressEQZKryY, addresskqNlw6N, {from: accounts[1]});
//		const addressxdcuhAe = await afiControllerqBLLT9s.setConverter.call(addressisDiHPw, addressOJaemF, addressai9QnlV, {from: accounts[4]});
//		const addressDNXJKvw = await afiControllerqBLLT9s.withdrawAll.call(addressHa99DWf, {from: accounts[4]});
//		const addressboGovZs = await afiControllerqBLLT9s.earn.call(addressj1BPf3n, uintxKQdnnE, {from: accounts[2]});

		await expect(afiControllerqBLLT9s.setGovernance.call(addressRhEawE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressiKq4gMo = accounts[0]
		const afiControllerUkqxXiK = await afiController.new(addressiKq4gMo, {from: accounts[2]});
		const uintKS7ennn = BigInt("974")
		const addressho8OSYJ = accounts[0]
		const addressY18ukE = accounts[5]
		const addresspCBpF8U = accounts[0]
		const addresstxbk8c = accounts[4]
		const addresst0uZJOP = accounts[1]
		const addressCKj96xF = accounts[1]
//		const uintNGef0D5 = await afiControllerUkqxXiK.getExpectedReturn.call(addressY18ukE, addressho8OSYJ, uintKS7ennn, {from: "0x0000000000000000000000000000000000000001"});
//		const addressm2Tr5r = await afiControllerUkqxXiK.setStrategy.call(addresstxbk8c, addresspCBpF8U, {from: accounts[1]});
//		const addressqNwF09g = await afiControllerUkqxXiK.approveStrategy.call(addressCKj96xF, addresst0uZJOP, {from: accounts[2]});

		await expect(afiControllerUkqxXiK.getExpectedReturn.call(addressY18ukE, addressho8OSYJ, uintKS7ennn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressbc9fHKY = accounts[2]
		const afiControllerZmLAYl2 = await afiController.new(addressbc9fHKY, {from: accounts[2]});
		const uintVfTsmgy = BigInt("1706")
		const addressTkkmdX1 = accounts[2]
		const uintEnLLOZD = BigInt("204")
		const addressRstzNjT = accounts[1]
//		const addressVn5PqXu = await afiControllerZmLAYl2.withdraw.call(addressTkkmdX1, uintVfTsmgy, {from: accounts[1]});
//		const addressMpFTVof = await afiControllerZmLAYl2.withdraw.call(addressRstzNjT, uintEnLLOZD, {from: accounts[3]});

		await expect(afiControllerZmLAYl2.withdraw.call(addressTkkmdX1, uintVfTsmgy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresspWhrNTg = accounts[5]
		const afiControllerS6DmInF = await afiController.new(addresspWhrNTg, {from: accounts[3]});
		const uintxxZT2a = BigInt("2005")
		const addressRwhXJ7F = accounts[4]
		const addressehWdyxE = accounts[0]
		const addressoPehyb6 = accounts[4]
//		const addressc06tpeM = await afiControllerS6DmInF.yearn.call(addressehWdyxE, addressRwhXJ7F, uintxxZT2a, {from: accounts[0]});
//		const addressjdnNet = await afiControllerS6DmInF.setRewards.call(addressoPehyb6, {from: accounts[2]});

		await expect(afiControllerS6DmInF.yearn.call(addressehWdyxE, addressRwhXJ7F, uintxxZT2a, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressVvOzi9Q = accounts[4]
		const afiControllerd6gW98x = await afiController.new(addressVvOzi9Q, {from: accounts[4]});
		const addressVCvwmH9 = "0x0000000000000000000000000000000000000001"
		const addressKiHe1ou = accounts[2]
		const addresspBREpVG = accounts[2]
		const addressYcQAUds = accounts[5]
		const uintDhasVOp = BigInt("1158")
		const addressqqtdiDF = accounts[0]
		const addressnk8jN0z = accounts[1]
		const addressjLGbNJS = "0x0000000000000000000000000000000000000001"
		const addressPzfIwvG = accounts[5]
		const addressg9bgjdl = accounts[2]
		const address0Lt8OQ = await afiControllerd6gW98x.approveStrategy.call(addressKiHe1ou, addressVCvwmH9, {from: accounts[4]});
//		const addresso7Iz2s = await afiControllerd6gW98x.inCaseStrategyTokenGetStuck.call(addressYcQAUds, addresspBREpVG, {from: "0x0000000000000000000000000000000000000001"});
//		const uintOPKHT92 = await afiControllerd6gW98x.getExpectedReturn.call(addressnk8jN0z, addressqqtdiDF, uintDhasVOp, {from: "0x0000000000000000000000000000000000000001"});
//		const uintl5Y4uFg = await afiControllerd6gW98x.balanceOf.call(addressjLGbNJS, {from: accounts[1]});
//		const addressxxRIz1 = await afiControllerd6gW98x.inCaseStrategyTokenGetStuck.call(addressg9bgjdl, addressPzfIwvG, {from: accounts[0]});

		await expect(afiControllerd6gW98x.inCaseStrategyTokenGetStuck.call(addressYcQAUds, addresspBREpVG, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresscQ3qdA2 = accounts[0]
		const afiControllerTl3xuQ3 = await afiController.new(addresscQ3qdA2, {from: accounts[1]});
		const addressPAv3lYD = accounts[4]
		const addresspppC67M = accounts[3]
		const addresswL4SaS9 = accounts[3]
		const addressSHBMBaX = accounts[4]
//		const addressPcOQkM = await afiControllerTl3xuQ3.setStrategy.call(addresspppC67M, addressPAv3lYD, {from: accounts[4]});
//		const addressODqSqWu = await afiControllerTl3xuQ3.inCaseStrategyTokenGetStuck.call(addressSHBMBaX, addresswL4SaS9, {from: accounts[0]});

		await expect(afiControllerTl3xuQ3.setStrategy.call(addresspppC67M, addressPAv3lYD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresswEIBmio = accounts[5]
		const afiControllerS6DmInF = await afiController.new(addresswEIBmio, {from: accounts[3]});
		const addressfic3SY1 = accounts[2]
		const uintGVrMxkm = BigInt("2005")
		const addressaHDqGJ = accounts[4]
		const addressQWyM1Qo = accounts[0]
		const addressjciNGuE = accounts[5]
		const addressBirW1qt = await afiControllerS6DmInF.setRewards.call(addressfic3SY1, {from: accounts[3]});
//		const addressc06tpeM = await afiControllerS6DmInF.yearn.call(addressQWyM1Qo, addressaHDqGJ, uintGVrMxkm, {from: accounts[0]});
//		const addressjdnNet = await afiControllerS6DmInF.setRewards.call(addressjciNGuE, {from: accounts[2]});

		await expect(afiControllerS6DmInF.yearn.call(addressQWyM1Qo, addressaHDqGJ, uintGVrMxkm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressceROIZ1 = accounts[5]
		const afiControllerS6DmInF = await afiController.new(addressceROIZ1, {from: accounts[3]});
		const addressjEY8nHO = accounts[4]
		const addressKVZWvwv = accounts[3]
		const uintnrJbXl2 = BigInt("2005")
		const addressk6CsOh0 = accounts[5]
		const addressl74dEng = accounts[0]
		const addressZGl0Zs = "0x0000000000000000000000000000000000000001"
		const addressb3EwDg0 = accounts[0]
		const addressGC1nDPm = accounts[4]
		const addresseCGD96C = accounts[3]
//		const addressqNnHNWA = await afiControllerS6DmInF.revokeStrategy.call(addressKVZWvwv, addressjEY8nHO, {from: accounts[5]});
//		const addressc06tpeM = await afiControllerS6DmInF.yearn.call(addressl74dEng, addressk6CsOh0, uintnrJbXl2, {from: accounts[0]});
//		const addressB9QZGjW = await afiControllerS6DmInF.setVault.call(addressb3EwDg0, addressZGl0Zs, {from: accounts[0]});
//		const addressjdnNet = await afiControllerS6DmInF.setRewards.call(addressGC1nDPm, {from: accounts[2]});
//		const addressr6A8bFV = await afiControllerS6DmInF.setOneSplit.call(addresseCGD96C, {from: "0x0000000000000000000000000000000000000001"});

		await expect(afiControllerS6DmInF.revokeStrategy.call(addressKVZWvwv, addressjEY8nHO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresssjG85qi = accounts[5]
		const afiControllerS6DmInF = await afiController.new(addresssjG85qi, {from: accounts[3]});
		const addresspf33BtQ = accounts[3]
		const uintr9eX8UK = BigInt("1946")
		const addressoHgkldy = accounts[1]
		const addressYLJGYf5 = accounts[5]
		const addressBirW1qt = await afiControllerS6DmInF.setRewards.call(addresspf33BtQ, {from: accounts[3]});
//		const addressK7yBRr = await afiControllerS6DmInF.earn.call(addressoHgkldy, uintr9eX8UK, {from: accounts[0]});
//		const addressjdnNet = await afiControllerS6DmInF.setRewards.call(addressYLJGYf5, {from: accounts[2]});

		await expect(afiControllerS6DmInF.earn.call(addressoHgkldy, uintr9eX8UK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addresslUhFAxq = accounts[5]
		const afiControllerS6DmInF = await afiController.new(addresslUhFAxq, {from: accounts[3]});
		const uintDF1whT2 = BigInt("1001")
		const uintfsIkKfa = BigInt("2005")
		const addressOJ2xbd = accounts[5]
		const addresshDRtGPh = accounts[0]
		const addresstx6BGcc = accounts[4]
		const uintgRAxqN = BigInt("1109")
		const addressiRLtCy = accounts[0]
		const addressZ3G3kXe = accounts[1]
		const uintQL3igLe = await afiControllerS6DmInF.setSplit.call(uintDF1whT2, {from: accounts[3]});
//		const addressc06tpeM = await afiControllerS6DmInF.yearn.call(addresshDRtGPh, addressOJ2xbd, uintfsIkKfa, {from: accounts[0]});
//		const addressjdnNet = await afiControllerS6DmInF.setRewards.call(addresstx6BGcc, {from: accounts[2]});
//		const addressaUJvhFf = await afiControllerS6DmInF.yearn.call(addressZ3G3kXe, addressiRLtCy, uintgRAxqN, {from: accounts[4]});

		await expect(afiControllerS6DmInF.yearn.call(addresshDRtGPh, addressOJ2xbd, uintfsIkKfa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressrO7Zis5 = accounts[5]
		const afiControllerS6DmInF = await afiController.new(addressrO7Zis5, {from: accounts[3]});
		const addressvsiCs5 = accounts[0]
		const addressitCitP = accounts[1]
		const uintlnIcC1 = BigInt("2005")
		const addresse8eeDP = accounts[4]
		const addresse3uiizp = accounts[0]
		const addressxgDhxW = accounts[5]
//		const addresspSX8g1Z = await afiControllerS6DmInF.setStrategy.call(addressitCitP, addressvsiCs5, {from: accounts[3]});
//		const addressc06tpeM = await afiControllerS6DmInF.yearn.call(addresse3uiizp, addresse8eeDP, uintlnIcC1, {from: accounts[0]});
//		const addressjdnNet = await afiControllerS6DmInF.setRewards.call(addressxgDhxW, {from: accounts[2]});

		await expect(afiControllerS6DmInF.setStrategy.call(addressitCitP, addressvsiCs5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressmmbelSi = accounts[4]
		const afiControllerYZKr6Pf = await afiController.new(addressmmbelSi, {from: accounts[3]});
		const addressVRbDfHe = accounts[0]
		const addressrDAgVdJ = accounts[4]
		const addressuSyHmYO = "0x0000000000000000000000000000000000000001"
//		const addressonV9F2f = await afiControllerYZKr6Pf.setOneSplit.call(addressVRbDfHe, {from: accounts[0]});
//		const addressNEDKW95 = await afiControllerYZKr6Pf.withdrawAll.call(addressrDAgVdJ, {from: "0x0000000000000000000000000000000000000001"});
//		const addressu3qXEky = await afiControllerYZKr6Pf.withdrawAll.call(addressuSyHmYO, {from: accounts[1]});

		await expect(afiControllerYZKr6Pf.setOneSplit.call(addressVRbDfHe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressp7pfIJ2 = accounts[1]
		const afiControllerNWErXye = await afiController.new(addressp7pfIJ2, {from: accounts[2]});
		const addressnOgYrJ2 = accounts[1]
		const addresswrMUoab = accounts[4]
		const uintpCgOxNe = BigInt("1460")
		const addressgi1pqU5 = accounts[3]
//		const addressFgWfOHO = await afiControllerNWErXye.setVault.call(addresswrMUoab, addressnOgYrJ2, {from: accounts[0]});
//		const addresswLh2tGX = await afiControllerNWErXye.earn.call(addressgi1pqU5, uintpCgOxNe, {from: accounts[0]});

		await expect(afiControllerNWErXye.setVault.call(addresswrMUoab, addressnOgYrJ2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for afiController', async () => {
		const addressD6GQsI8 = accounts[3]
		const afiControllerQUM8SoP = await afiController.new(addressD6GQsI8, {from: "0x0000000000000000000000000000000000000001"});
		const addressSxYGIxB = accounts[5]
		const addressSYVCk4 = accounts[0]
		const addressGLXPwVI = accounts[4]
		const addressST1NySu = accounts[4]
		const uintwycnMZ1 = BigInt("1138")
		const addressATauPn6 = accounts[0]
		const addressP0uxZ8X = await afiControllerQUM8SoP.setStrategy.call(addressSYVCk4, addressSxYGIxB, {from: accounts[3]});
		const addressPCLAhGJ = await afiControllerQUM8SoP.withdrawAll.call(addressGLXPwVI, {from: accounts[4]});
		const uintPWHAGyf = await afiControllerQUM8SoP.balanceOf.call(addressST1NySu, {from: accounts[0]});
		const addressMvDMTiY = await afiControllerQUM8SoP.earn.call(addressATauPn6, uintwycnMZ1, {from: accounts[0]});
	});

	it('test for afiController', async () => {
		const addressAXERAD = accounts[5]
		const afiControllerS6DmInF = await afiController.new(addressAXERAD, {from: accounts[3]});
		const uintPmb1Ec = BigInt("1296")
		const addressQkCZbWH = accounts[4]
//		const addressHmjOjDB = await afiControllerS6DmInF.inCaseTokensGetStuck.call(addressQkCZbWH, uintPmb1Ec, {from: accounts[3]});

		await expect(afiControllerS6DmInF.inCaseTokensGetStuck.call(addressQkCZbWH, uintPmb1Ec, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})