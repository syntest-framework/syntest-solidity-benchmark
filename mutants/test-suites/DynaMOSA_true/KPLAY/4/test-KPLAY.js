const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYt6oT5KD = await KPLAY.new({from: accounts[4]});
		const addressLOIz3Au = accounts[2]
		const uintlSe7eW = BigInt("984")
		const addressLKj5OjM = accounts[1]
		const uintQnn6MQG = BigInt("1443")
		const addressF7GZmiR = accounts[4]
		const uintcLZ9CEY = BigInt("467")
		const addressqyluK56 = accounts[1]
		const addressfUdvaDB = accounts[1]
		const uint256KRGR4jK = await KPLAYt6oT5KD.balanceOf.call(addressLOIz3Au, {from: accounts[3]});
		const uint256Hb7k3k = await KPLAYt6oT5KD.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressFn3F3Z3 = await KPLAYt6oT5KD.burn.call(addressLKj5OjM, uintlSe7eW, {from: accounts[3]});
//		const addressJ8IZmti = await KPLAYt6oT5KD.unlock.call(addressF7GZmiR, uintQnn6MQG, {from: accounts[2]});
//		const boolf6XESPj = await KPLAYt6oT5KD.decreaseAllowance.call(addressqyluK56, uintcLZ9CEY, {from: accounts[1]});
//		const uint256qSuk1T9 = await KPLAYt6oT5KD.balanceOf.call(addressfUdvaDB, {from: accounts[5]});

		assert.equal(uint256Hb7k3k, BigInt("1630229697"))
		assert.equal(uint256KRGR4jK, BigInt("0"))
		await expect(KPLAYt6oT5KD.burn.call(addressLKj5OjM, uintlSe7eW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYfNJEnxS = await KPLAY.new({from: accounts[4]});
		const uintbID1qz1 = BigInt("1948")
		const addressyLYaSI = accounts[0]
		const addressESIe6Bw = "0x0000000000000000000000000000000000000001"
		const uintP04dsWX = BigInt("980")
		const uintBvVJHAC = BigInt("442")
		const addressaDRkCHW = accounts[0]
		const addressZsapLnf = accounts[0]
		const uintH3cDkWM = BigInt("1456")
		const addressArYPKBB = accounts[3]
//		await KPLAYfNJEnxS.lockState.call(addressyLYaSI, uintbID1qz1, {from: accounts[4]});
//		const addressjdHEAEG = await KPLAYfNJEnxS.freeze.call(addressESIe6Bw, {from: accounts[0]});
//		const addressHv2sLYQ = await KPLAYfNJEnxS.lock.call(addressaDRkCHW, uintBvVJHAC, uintP04dsWX, {from: accounts[1]});
//		const uint256A8asaoF = await KPLAYfNJEnxS.balanceOf.call(addressZsapLnf, {from: accounts[3]});
//		const boolIVXMnMF = await KPLAYfNJEnxS.increaseAllowance.call(addressArYPKBB, uintH3cDkWM, {from: accounts[0]});

		await expect(KPLAYfNJEnxS.lockState.call(addressyLYaSI, uintbID1qz1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYPlRzb3c = await KPLAY.new({from: accounts[0]});
		const uintFIpKgDp = BigInt("1055")
		const addressrAvlaK = accounts[3]
		const uintS8bcwjG = BigInt("113")
		const uintmnRhMl6 = BigInt("502")
		const addresscFvfNlZ = accounts[0]
		const addressA8v7p9 = accounts[3]
		const boolk17onyU = await KPLAYPlRzb3c.increaseAllowance.call(addressrAvlaK, uintFIpKgDp, {from: accounts[4]});
//		const addresseonn7qB = await KPLAYPlRzb3c.lockAfter.call(addresscFvfNlZ, uintmnRhMl6, uintS8bcwjG, {from: accounts[4]});
//		await KPLAYPlRzb3c.whenNotFrozen.call({from: accounts[3]});
//		const addressRiLiOYg = await KPLAYPlRzb3c.transferOwnership.call(addressA8v7p9, {from: accounts[0]});

		assert.equal(boolk17onyU, true)
		await expect(KPLAYPlRzb3c.lockAfter.call(addresscFvfNlZ, uintmnRhMl6, uintS8bcwjG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYNkaWld = await KPLAY.new({from: accounts[4]});
		const uintdeLqdT3 = BigInt("1477")
		const addressnJtFAr = accounts[3]
		const addressz8MiQa = accounts[1]
//		await KPLAYNkaWld.whenPaused.call({from: accounts[0]});
//		const boolHgnyN7k = await KPLAYNkaWld.transferFrom.call(addressz8MiQa, addressnJtFAr, uintdeLqdT3, {from: accounts[0]});
//		await KPLAYNkaWld.whenNotFrozen.call({from: accounts[1]});

		await expect(KPLAYNkaWld.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwm6eugz = await KPLAY.new({from: accounts[1]});
		const uintOc1ph2 = BigInt("982")
		const addresssqg3Ksa = accounts[0]
		const uintvk2ZvvZ = BigInt("916")
		const addresswePLgV = accounts[4]
		const addressItyjLf = accounts[0]
//		const booldNGREU1 = await KPLAYwm6eugz.transfer.call(addresssqg3Ksa, uintOc1ph2, {from: accounts[5]});
//		const boolgYTai2Y = await KPLAYwm6eugz.transferFrom.call(addressItyjLf, addresswePLgV, uintvk2ZvvZ, {from: accounts[4]});

		await expect(KPLAYwm6eugz.transfer.call(addresssqg3Ksa, uintOc1ph2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYgz0AMUQ = await KPLAY.new({from: accounts[3]});
		const uintwq9eXQ = BigInt("1627")
		const addressT77WLuE = accounts[1]
		const uintHtIrl4U = BigInt("648")
		const uintY2qcMf1 = BigInt("579")
		const addressKRbzydJ = accounts[5]
		const addressUY9qPCZ = accounts[2]
		const uint256AL0fqcB = await KPLAYgz0AMUQ.totalSupply.call({from: accounts[2]});
//		const addressxDb7ZNH = await KPLAYgz0AMUQ.unlock.call(addressT77WLuE, uintwq9eXQ, {from: accounts[2]});
//		const boolxflcTxk = await KPLAYgz0AMUQ.transferWithLockAfter.call(addressKRbzydJ, uintY2qcMf1, uintHtIrl4U, {from: accounts[2]});
//		const uint256VczdqWs = await KPLAYgz0AMUQ.balanceOf.call(addressUY9qPCZ, {from: accounts[3]});
//		await KPLAYgz0AMUQ.whenNotFrozen.call({from: accounts[2]});

		assert.equal(uint256AL0fqcB, BigInt("10000000000000000"))
		await expect(KPLAYgz0AMUQ.unlock.call(addressT77WLuE, uintwq9eXQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYWcw5CxQ = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintU0qvae = BigInt("1712")
		const addressB5Vk8Y1 = accounts[0]
		const addressrGB7SN0 = accounts[1]
		const uint256py1u8kF = await KPLAYWcw5CxQ.currentTime.call({from: accounts[1]});
		const booldHpRbMv = await KPLAYWcw5CxQ.increaseAllowance.call(addressB5Vk8Y1, uintU0qvae, {from: accounts[1]});
		const addressELAetgN = await KPLAYWcw5CxQ.unfreeze.call(addressrGB7SN0, {from: accounts[0]});
	});

	it('test for KPLAY', async () => {
		const KPLAYt6oT5KD = await KPLAY.new({from: accounts[4]});
		const addressGiswscZ = accounts[2]
		const uintxDDoZ8F = BigInt("984")
		const addressiUhlNnd = accounts[1]
		const uinti1iguLL = BigInt("1443")
		const addressUjt3cxv = accounts[4]
		const uintSb61Gl7 = BigInt("467")
		const addressYuXJPe = accounts[1]
		const addressJ0vaYRG = accounts[4]
		const addressA2oAWDx = accounts[0]
		const addressOOUdi3L = accounts[1]
		const uint256Hb7k3k = await KPLAYt6oT5KD.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256BXPniA = await KPLAYt6oT5KD.lockCount.call(addressGiswscZ, {from: "0x0000000000000000000000000000000000000001"});
//		const addressFn3F3Z3 = await KPLAYt6oT5KD.burn.call(addressiUhlNnd, uintxDDoZ8F, {from: accounts[3]});
//		const addressJ8IZmti = await KPLAYt6oT5KD.unlock.call(addressUjt3cxv, uinti1iguLL, {from: accounts[2]});
//		const boolf6XESPj = await KPLAYt6oT5KD.decreaseAllowance.call(addressYuXJPe, uintSb61Gl7, {from: accounts[1]});
//		const uint256tHS2UqP = await KPLAYt6oT5KD.allowance.call(addressA2oAWDx, addressJ0vaYRG, {from: accounts[4]});
//		const uint256qSuk1T9 = await KPLAYt6oT5KD.balanceOf.call(addressOOUdi3L, {from: accounts[5]});

		assert.equal(uint256BXPniA, BigInt("0"))
		assert.equal(uint256Hb7k3k, BigInt("1630229699"))
		await expect(KPLAYt6oT5KD.burn.call(addressiUhlNnd, uintxDDoZ8F, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwm6eugz = await KPLAY.new({from: accounts[1]});
		const uintW8JmJ2s = BigInt("982")
		const addressyTWOErJ = accounts[1]
		const uint8fj2ch = BigInt("1104")
		const uintdpXWEmw = BigInt("891")
		const addressp9xuN1R = "0x0000000000000000000000000000000000000001"
		const addressUHChJYX = accounts[4]
		const uintBtW4k1 = BigInt("916")
		const addressQL5hwuy = accounts[4]
		const addressOigEwOZ = accounts[0]
//		await KPLAYwm6eugz.unpause.call({from: accounts[1]});
//		const booldNGREU1 = await KPLAYwm6eugz.transfer.call(addressyTWOErJ, uintW8JmJ2s, {from: accounts[5]});
//		const uint256ppZQSNc = await KPLAYwm6eugz.currentTime.call({from: accounts[1]});
//		const boolGx6bPr = await KPLAYwm6eugz.transferWithLock.call(addressp9xuN1R, uintdpXWEmw, uint8fj2ch, {from: accounts[0]});
//		const uint256OHy1tYl = await KPLAYwm6eugz.balanceOf.call(addressUHChJYX, {from: accounts[3]});
//		const boolgYTai2Y = await KPLAYwm6eugz.transferFrom.call(addressOigEwOZ, addressQL5hwuy, uintBtW4k1, {from: accounts[4]});

		await expect(KPLAYwm6eugz.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYt6oT5KD = await KPLAY.new({from: accounts[4]});
		const addressS1uu1hY = accounts[2]
		const uintEZ2AHU = BigInt("1165")
		const addressiMmxcnd = accounts[1]
		const uintFd2uMZ = BigInt("984")
		const addresswZmZgej = accounts[2]
		const uint13IRZk = BigInt("1443")
		const addressJnl8DF6 = accounts[4]
		const uintKrbsD2B = BigInt("467")
		const addresspZiWi6o = accounts[1]
		const address0TGnX5 = accounts[1]
		const uintaVZtbkR = BigInt("1094")
		const addressjmINzj = accounts[0]
		const addressKFpXwR = accounts[4]
		const uint256KRGR4jK = await KPLAYt6oT5KD.balanceOf.call(addressS1uu1hY, {from: accounts[3]});
		const booly5V1qeD = await KPLAYt6oT5KD.approve.call(addressiMmxcnd, uintEZ2AHU, {from: accounts[4]});
		const uint256Hb7k3k = await KPLAYt6oT5KD.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressFn3F3Z3 = await KPLAYt6oT5KD.burn.call(addresswZmZgej, uintFd2uMZ, {from: accounts[3]});
//		const addressJ8IZmti = await KPLAYt6oT5KD.unlock.call(addressJnl8DF6, uint13IRZk, {from: accounts[2]});
//		const boolf6XESPj = await KPLAYt6oT5KD.decreaseAllowance.call(addresspZiWi6o, uintKrbsD2B, {from: accounts[1]});
//		const uint256qSuk1T9 = await KPLAYt6oT5KD.balanceOf.call(address0TGnX5, {from: accounts[5]});
//		const boolanRPbQH = await KPLAYt6oT5KD.transferFrom.call(addressKFpXwR, addressjmINzj, uintaVZtbkR, {from: accounts[5]});

		assert.equal(booly5V1qeD, true)
		assert.equal(uint256Hb7k3k, BigInt("1630229704"))
		assert.equal(uint256KRGR4jK, BigInt("0"))
		await expect(KPLAYt6oT5KD.burn.call(addresswZmZgej, uintFd2uMZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwm6eugz = await KPLAY.new({from: accounts[1]});
		const uint1VeJqb = BigInt("916")
		const addressO37rLjM = accounts[5]
		const addressmr6uLs0 = accounts[0]
//		const boolgYTai2Y = await KPLAYwm6eugz.transferFrom.call(addressmr6uLs0, addressO37rLjM, uint1VeJqb, {from: accounts[4]});

		await expect(KPLAYwm6eugz.transferFrom.call(addressmr6uLs0, addressO37rLjM, uint1VeJqb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwm6eugz = await KPLAY.new({from: accounts[1]});
		const uintFZTSO3D = BigInt("585")
		const addressddXNCNj = "0x0000000000000000000000000000000000000001"
		const uintDBDCzko = BigInt("916")
		const addressknUcO08 = accounts[6]
		const addressiclYwiO = accounts[0]
//		const boolgbiNuaH = await KPLAYwm6eugz.decreaseAllowance.call(addressddXNCNj, uintFZTSO3D, {from: accounts[1]});
//		const boolgYTai2Y = await KPLAYwm6eugz.transferFrom.call(addressiclYwiO, addressknUcO08, uintDBDCzko, {from: accounts[4]});

		await expect(KPLAYwm6eugz.decreaseAllowance.call(addressddXNCNj, uintFZTSO3D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwm6eugz = await KPLAY.new({from: accounts[1]});
		const uintjYhcskn = BigInt("599")
		const addressDUtLgkL = "0x0000000000000000000000000000000000000001"
//		await KPLAYwm6eugz.renounceOwnership.call({from: accounts[1]});
//		const boolgbiNuaH = await KPLAYwm6eugz.decreaseAllowance.call(addressDUtLgkL, uintjYhcskn, {from: accounts[1]});

		await expect(KPLAYwm6eugz.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwm6eugz = await KPLAY.new({from: accounts[1]});
		const uintlyF2pjI = BigInt("958")
		const addressG5r8DPm = accounts[3]
		const uintCxHh7YA = BigInt("916")
		const addressYiSWEo9 = accounts[5]
		const addressda8EWd2 = accounts[0]
		const uintgj1EsfF = BigInt("1245")
		const addressqVPMZCt = accounts[1]
//		const addressQjV614M = await KPLAYwm6eugz.unlock.call(addressG5r8DPm, uintlyF2pjI, {from: accounts[1]});
//		const boolgYTai2Y = await KPLAYwm6eugz.transferFrom.call(addressda8EWd2, addressYiSWEo9, uintCxHh7YA, {from: accounts[4]});
//		const boolG9jXHek = await KPLAYwm6eugz.mint.call(addressqVPMZCt, uintgj1EsfF, {from: accounts[3]});
//		await KPLAYwm6eugz.whenNotFrozen.call({from: accounts[1]});

		await expect(KPLAYwm6eugz.unlock.call(addressG5r8DPm, uintlyF2pjI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwm6eugz = await KPLAY.new({from: accounts[1]});
		const uintnowbsP = BigInt("916")
		const addressv2izooO = accounts[5]
		const addressiqbWT36 = accounts[1]
//		const boolgYTai2Y = await KPLAYwm6eugz.transferFrom.call(addressiqbWT36, addressv2izooO, uintnowbsP, {from: accounts[4]});

		await expect(KPLAYwm6eugz.transferFrom.call(addressiqbWT36, addressv2izooO, uintnowbsP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYIn4ZHhL = await KPLAY.new({from: accounts[3]});
		const addressBXId4G7 = "0x0000000000000000000000000000000000000001"
		const addressx6gALxS = accounts[2]
		const uintFz9Idil = BigInt("52")
		const uintWyaq1l = BigInt("807")
		const addresstMc412I = accounts[5]
		const uint256B1F3ScB = await KPLAYIn4ZHhL.allowance.call(addressx6gALxS, addressBXId4G7, {from: accounts[1]});
//		const addressN4iPmHj = await KPLAYIn4ZHhL.lockAfter.call(addresstMc412I, uintWyaq1l, uintFz9Idil, {from: accounts[1]});

		assert.equal(uint256B1F3ScB, BigInt("0"))
		await expect(KPLAYIn4ZHhL.lockAfter.call(addresstMc412I, uintWyaq1l, uintFz9Idil, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYt6oT5KD = await KPLAY.new({from: accounts[4]});
		const addressnyrDo2T = accounts[2]
		const uintrEmBDqM = BigInt("308")
		const addressLhh8eH = accounts[1]
		const uint9MMcMq = BigInt("1864")
		const uintaV8UBhZ = BigInt("2035")
		const addressNluhMnV = accounts[2]
		const addressrnEvfgr = accounts[1]
		const uint256KRGR4jK = await KPLAYt6oT5KD.balanceOf.call(addressnyrDo2T, {from: accounts[3]});
		const boolOkYBMM6 = await KPLAYt6oT5KD.approve.call(addressLhh8eH, uintrEmBDqM, {from: accounts[4]});
		const boolgHzUPqC = await KPLAYt6oT5KD.transferWithLock.call(addressNluhMnV, uintaV8UBhZ, uint9MMcMq, {from: accounts[4]});
		const uint256qSuk1T9 = await KPLAYt6oT5KD.balanceOf.call(addressrnEvfgr, {from: accounts[5]});

		assert.equal(boolOkYBMM6, true)
		assert.equal(boolgHzUPqC, true)
		assert.equal(uint256KRGR4jK, BigInt("0"))
		assert.equal(uint256qSuk1T9, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYt6oT5KD = await KPLAY.new({from: accounts[4]});
		const uintQmxarmW = BigInt("1994")
		const uintYo6UlmP = BigInt("1287")
		const addressbSII5x9 = accounts[0]
		const addressCcqGknp = accounts[2]
		const uintPstThxt = BigInt("998")
		const addressFf2YGBY = accounts[2]
		const uintogoJquV = BigInt("1443")
		const addressMQonAUa = accounts[6]
		const uinthBHCiuf = BigInt("1071")
		const addressuWdQsTt = accounts[4]
		const addressnX1983 = accounts[1]
		const boolXn74mh3 = await KPLAYt6oT5KD.transferWithLockAfter.call(addressbSII5x9, uintYo6UlmP, uintQmxarmW, {from: accounts[4]});
		const uint256KRGR4jK = await KPLAYt6oT5KD.balanceOf.call(addressCcqGknp, {from: accounts[3]});
		const uint256fCWaWL = await KPLAYt6oT5KD.currentTime.call({from: accounts[0]});
		const uint256pmcnTjX = await KPLAYt6oT5KD.currentTime.call({from: accounts[4]});
		const uint256Hb7k3k = await KPLAYt6oT5KD.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressFn3F3Z3 = await KPLAYt6oT5KD.burn.call(addressFf2YGBY, uintPstThxt, {from: accounts[3]});
//		const addressJ8IZmti = await KPLAYt6oT5KD.unlock.call(addressMQonAUa, uintogoJquV, {from: accounts[2]});
//		const boolqo741P = await KPLAYt6oT5KD.approve.call(addressuWdQsTt, uinthBHCiuf, {from: accounts[0]});
//		const uint256qSuk1T9 = await KPLAYt6oT5KD.balanceOf.call(addressnX1983, {from: accounts[5]});

		assert.equal(boolXn74mh3, true)
		assert.equal(uint256Hb7k3k, BigInt("1630229716"))
		assert.equal(uint256KRGR4jK, BigInt("0"))
		assert.equal(uint256fCWaWL, BigInt("1630229716"))
		assert.equal(uint256pmcnTjX, BigInt("1630229716"))
		await expect(KPLAYt6oT5KD.burn.call(addressFf2YGBY, uintPstThxt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwm6eugz = await KPLAY.new({from: accounts[1]});
		const addressDxjs1E = accounts[2]
		const uintN5kkMhT = BigInt("916")
		const addressblGTaKl = accounts[5]
		const addressT5gONTo = accounts[0]
		const boolWDLAOyo = await KPLAYwm6eugz.isFrozen.call(addressDxjs1E, {from: accounts[4]});
//		const boolgYTai2Y = await KPLAYwm6eugz.transferFrom.call(addressT5gONTo, addressblGTaKl, uintN5kkMhT, {from: accounts[4]});

		assert.equal(boolWDLAOyo, false)
		await expect(KPLAYwm6eugz.transferFrom.call(addressT5gONTo, addressblGTaKl, uintN5kkMhT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYmHnN26W = await KPLAY.new({from: accounts[1]});
		const uintk3Rodna = BigInt("326")
		const addressrXjyfiz = accounts[2]
		const uint256KxfzOD = await KPLAYmHnN26W.currentTime.call({from: accounts[3]});
		const booljQDc7ut = await KPLAYmHnN26W.mint.call(addressrXjyfiz, uintk3Rodna, {from: accounts[1]});
//		await KPLAYmHnN26W.whenNotFrozen.call({from: accounts[3]});
//		await KPLAYmHnN26W.whenPaused.call({from: accounts[4]});
//		await KPLAYmHnN26W.whenNotPaused.call({from: accounts[3]});

		assert.equal(booljQDc7ut, true)
		assert.equal(uint256KxfzOD, BigInt("1630229712"))
		await expect(KPLAYmHnN26W.whenNotFrozen.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwm6eugz = await KPLAY.new({from: accounts[1]});
		const uintn9mfmKD = BigInt("853")
		const uintR1kuTUl = BigInt("945")
		const addressMgwFBRf = accounts[5]
		const addressmMbPpIM = accounts[0]
		const uint256b0Q7GZX = await KPLAYwm6eugz.afterTime.call(uintn9mfmKD, {from: accounts[1]});
//		const boolgYTai2Y = await KPLAYwm6eugz.transferFrom.call(addressmMbPpIM, addressMgwFBRf, uintR1kuTUl, {from: accounts[4]});

		assert.equal(uint256b0Q7GZX, BigInt("1630230574"))
		await expect(KPLAYwm6eugz.transferFrom.call(addressmMbPpIM, addressMgwFBRf, uintR1kuTUl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYt6oT5KD = await KPLAY.new({from: accounts[4]});
		const addressLbthmhw = accounts[2]
		const uinthhU4zdC = BigInt("1961")
		const addressjPv3RCM = "0x0000000000000000000000000000000000000000"
		const addresspcQ7Fie = accounts[1]
		const uint256KRGR4jK = await KPLAYt6oT5KD.balanceOf.call(addressLbthmhw, {from: accounts[3]});
//		const boolXO4aa5f = await KPLAYt6oT5KD.increaseAllowance.call(addressjPv3RCM, uinthhU4zdC, {from: accounts[4]});
//		const uint256qSuk1T9 = await KPLAYt6oT5KD.balanceOf.call(addresspcQ7Fie, {from: accounts[5]});

		assert.equal(uint256KRGR4jK, BigInt("0"))
		await expect(KPLAYt6oT5KD.increaseAllowance.call(addressjPv3RCM, uinthhU4zdC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYt6oT5KD = await KPLAY.new({from: accounts[4]});
		const addressW9vNaf8 = accounts[3]
		const uintvgjOVD = BigInt("1279")
		const addressslLf7h = accounts[2]
		const addressLBL3sco = await KPLAYt6oT5KD.transferOwnership.call(addressW9vNaf8, {from: accounts[4]});
		const uint256GDTfOIK = await KPLAYt6oT5KD.afterTime.call(uintvgjOVD, {from: accounts[2]});
		const uint256qSuk1T9 = await KPLAYt6oT5KD.balanceOf.call(addressslLf7h, {from: accounts[5]});

		assert.equal(uint256GDTfOIK, BigInt("1630230980"))
		assert.equal(uint256qSuk1T9, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYhQJ3nhM = await KPLAY.new({from: accounts[5]});
		const addressW1qvny3 = accounts[4]
		const uinthhEWL6d = BigInt("1089")
		const addressEF3FGI2 = accounts[1]
		const addressu7yefFS = await KPLAYhQJ3nhM.freeze.call(addressW1qvny3, {from: accounts[5]});
//		const boolluoOjIZ = await KPLAYhQJ3nhM.transfer.call(addressEF3FGI2, uinthhEWL6d, {from: accounts[1]});
//		await KPLAYhQJ3nhM.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAYhQJ3nhM.transfer.call(addressEF3FGI2, uinthhEWL6d, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwm6eugz = await KPLAY.new({from: accounts[1]});
		const uintXgZaLqe = BigInt("216")
		const uintja6o8qe = BigInt("1279")
		const addressYT2pE8o = accounts[3]
		const uintq4FEjs2 = BigInt("565")
		const uintXpaKXi = BigInt("1135")
		const addressF3yqmVb = accounts[1]
		const uintmidcv1Q = BigInt("941")
		const address2Gip6l = accounts[5]
		const addressKSISEyX = accounts[0]
//		const addressiOQVyP9 = await KPLAYwm6eugz.lock.call(addressYT2pE8o, uintja6o8qe, uintXgZaLqe, {from: accounts[1]});
//		await KPLAYwm6eugz.renounceOwnership.call({from: accounts[3]});
//		await KPLAYwm6eugz.onlyOwner.call({from: accounts[2]});
//		const addressMl1XPQZ = await KPLAYwm6eugz.lockAfter.call(addressF3yqmVb, uintXpaKXi, uintq4FEjs2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgYTai2Y = await KPLAYwm6eugz.transferFrom.call(addressKSISEyX, address2Gip6l, uintmidcv1Q, {from: accounts[4]});

		await expect(KPLAYwm6eugz.lock.call(addressYT2pE8o, uintja6o8qe, uintXgZaLqe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYwm6eugz = await KPLAY.new({from: accounts[1]});
		const uintwGfi1k8 = BigInt("1100")
		const addresslkf0Exq = "0x0000000000000000000000000000000000000001"
		const uintrlg20IR = BigInt("1102")
		const addressWQ1oThA = accounts[2]
		const uint5aj2IF = BigInt("958")
		const addressV8ioLy8 = accounts[4]
		const boolE6xsZzn = await KPLAYwm6eugz.increaseAllowance.call(addresslkf0Exq, uintwGfi1k8, {from: accounts[4]});
//		const address74p5Rd = await KPLAYwm6eugz.burn.call(addressWQ1oThA, uintrlg20IR, {from: accounts[1]});
//		const addressQjV614M = await KPLAYwm6eugz.unlock.call(addressV8ioLy8, uint5aj2IF, {from: accounts[1]});

		assert.equal(boolE6xsZzn, true)
		await expect(KPLAYwm6eugz.burn.call(addressWQ1oThA, uintrlg20IR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})