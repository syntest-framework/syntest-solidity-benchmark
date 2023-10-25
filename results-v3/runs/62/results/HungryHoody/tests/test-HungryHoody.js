const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodypkuFYL = await HungryHoody.new({from: accounts[5]});
		const uintKk81gDg = BigInt("1770")
		const uint4ZeciS = BigInt("873")
		const uintx62boS5 = BigInt("1028")
		const uintEOV8lIW = BigInt("1887")
		const addresse9mMoAZ = "0x0000000000000000000000000000000000000001"
		const addressegACenF = accounts[2]
		const addressJmJtxGv = accounts[4]
		const addresslXKUgNX = accounts[0]
		const uintl3fWv3w = await HungryHoodypkuFYL.totalSupply.call({from: accounts[3]});
		const uintwwVUVs3 = await HungryHoodypkuFYL.safeMul.call(uint4ZeciS, uintKk81gDg, {from: "0x0000000000000000000000000000000000000001"});
		const uintuLnHwUL = await HungryHoodypkuFYL.safeSub.call(uintEOV8lIW, uintx62boS5, {from: "0x0000000000000000000000000000000000000001"});
		const uintCEoB3Uj = await HungryHoodypkuFYL.allowance.call(addressegACenF, addresse9mMoAZ, {from: accounts[2]});
		const uintFjdpYAE = await HungryHoodypkuFYL.allowance.call(addresslXKUgNX, addressJmJtxGv, {from: accounts[4]});

		assert.equal(uintCEoB3Uj, BigInt("0"))
		assert.equal(uintFjdpYAE, BigInt("0"))
		assert.equal(uintl3fWv3w, BigInt("25000000000000000000"))
		assert.equal(uintuLnHwUL, BigInt("859"))
		assert.equal(uintwwVUVs3, BigInt("1545210"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyfQQjN5y = await HungryHoody.new({from: accounts[1]});
		const address4PQDyD = accounts[5]
		const addressy6eAGat = accounts[4]
		const uintP86Qmbz = BigInt("205")
		const addressxydrn7W = accounts[4]
		const uintX1uIj6 = await HungryHoodyfQQjN5y.balanceOf.call(address4PQDyD, {from: accounts[0]});
		const uintSgZqcJB = await HungryHoodyfQQjN5y.balanceOf.call(addressy6eAGat, {from: accounts[5]});
		const boolgH7pSYy = await HungryHoodyfQQjN5y.approve.call(addressxydrn7W, uintP86Qmbz, {from: accounts[2]});

		assert.equal(boolgH7pSYy, true)
		assert.equal(uintSgZqcJB, BigInt("0"))
		assert.equal(uintX1uIj6, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyzH4HlWQ = await HungryHoody.new({from: accounts[0]});
		const uintTaPHgEi = BigInt("186")
		const addresslQ3UlTH = accounts[4]
		const addressP9S4ano = accounts[4]
		const addressykmaEiQ = accounts[0]
		const uinthKSDEA = BigInt("1122")
		const uintsyGCrOX = BigInt("185")
		const boolCpam3KQ = await HungryHoodyzH4HlWQ.approve.call(addresslQ3UlTH, uintTaPHgEi, {from: accounts[0]});
		const uintB1UBwwO = await HungryHoodyzH4HlWQ.totalSupply.call({from: accounts[1]});
		const uintyJZ1YGc = await HungryHoodyzH4HlWQ.allowance.call(addressykmaEiQ, addressP9S4ano, {from: accounts[5]});
		const uintln5uZBV = await HungryHoodyzH4HlWQ.safeSub.call(uintsyGCrOX, uinthKSDEA, {from: accounts[1]});

		assert.equal(boolCpam3KQ, true)
		assert.equal(uintB1UBwwO, BigInt("25000000000000000000"))
		assert.equal(uintyJZ1YGc, BigInt("0"))
		await expect(HungryHoodyzH4HlWQ.safeSub.call(uintsyGCrOX, uinthKSDEA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodymRaZ4wW = await HungryHoody.new({from: accounts[2]});
		const uintpqt8pnl = BigInt("636")
		const addresst1xKVew = accounts[4]
		const uintqPm9BSI = BigInt("709")
		const uintAaMSAS2 = BigInt("619")
		const uintledrJcl = BigInt("1702")
		const uintxFjBnvs = BigInt("969")
		const uintgGhestj = BigInt("87")
		const uint6rW7rm = BigInt("610")
		const uintgexBKW3 = BigInt("829")
		const addresszX2Oj6d = accounts[0]
		const bool1RJPV6 = await HungryHoodymRaZ4wW.transfer.call(addresst1xKVew, uintpqt8pnl, {from: accounts[4]});
		const uintdyFxeO2 = await HungryHoodymRaZ4wW.safeSub.call(uintAaMSAS2, uintqPm9BSI, {from: accounts[3]});
		const uintIs7AzwO = await HungryHoodymRaZ4wW.safeDiv.call(uintxFjBnvs, uintledrJcl, {from: accounts[1]});
		const uinthrDdfPC = await HungryHoodymRaZ4wW.safeDiv.call(uint6rW7rm, uintgGhestj, {from: accounts[1]});
		const booluGG7nAC = await HungryHoodymRaZ4wW.approve.call(addresszX2Oj6d, uintgexBKW3, {from: accounts[1]});

		await expect(HungryHoodymRaZ4wW.transfer.call(addresst1xKVew, uintpqt8pnl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyVmEsuvD = await HungryHoody.new({from: accounts[5]});
		const addressYwLqmtL = accounts[2]
		const addressqqeQI4F = accounts[2]
		const addressFv1q5z = "0x0000000000000000000000000000000000000001"
		const uintflHRMaE = BigInt("512")
		const addressKtnTSkI = accounts[0]
		const addressqXUZ3t = accounts[4]
		const uintChjX3RY = BigInt("1781")
		const uintGtm4Cxl = BigInt("918")
		const uintLE4Lmru = BigInt("1727")
		const addressnpVjdc1 = accounts[4]
		const addressL6pntkD = accounts[5]
		const uintkAaW6XG = await HungryHoodyVmEsuvD.allowance.call(addressqqeQI4F, addressYwLqmtL, {from: accounts[4]});
		const uintjXj3NR5 = await HungryHoodyVmEsuvD.balanceOf.call(addressFv1q5z, {from: accounts[3]});
		const boolccHtJez = await HungryHoodyVmEsuvD.transferFrom.call(addressqXUZ3t, addressKtnTSkI, uintflHRMaE, {from: accounts[2]});
		const uintPGk6EaN = await HungryHoodyVmEsuvD.safeAdd.call(uintGtm4Cxl, uintChjX3RY, {from: accounts[3]});
		const booleHeTiU = await HungryHoodyVmEsuvD.transferFrom.call(addressL6pntkD, addressnpVjdc1, uintLE4Lmru, {from: accounts[3]});

		assert.equal(uintjXj3NR5, BigInt("0"))
		assert.equal(uintkAaW6XG, BigInt("0"))
		await expect(HungryHoodyVmEsuvD.transferFrom.call(addressqXUZ3t, addressKtnTSkI, uintflHRMaE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyuGMmKK8 = await HungryHoody.new({from: accounts[2]});
		const uintnFYW7E = BigInt("289")
		const uintZShMhx3 = BigInt("1628")
		const uinthKJL8ow = BigInt("540")
		const uintOUeXbY = BigInt("1097")
		const uint9Uaj2S = await HungryHoodyuGMmKK8.safeAdd.call(uintZShMhx3, uintnFYW7E, {from: accounts[0]});
		const uintgwQN0T8 = await HungryHoodyuGMmKK8.safeMul.call(uintOUeXbY, uinthKJL8ow, {from: accounts[2]});
		const uintbsypyTU = await HungryHoodyuGMmKK8.totalSupply.call({from: accounts[4]});

		assert.equal(uint9Uaj2S, BigInt("1917"))
		assert.equal(uintbsypyTU, BigInt("25000000000000000000"))
		assert.equal(uintgwQN0T8, BigInt("592380"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodykUB6VRj = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const addresswXk0eY2 = "0x0000000000000000000000000000000000000001"
		const addresswiRwfj = accounts[1]
		const uintRhCvp2J = BigInt("1762")
		const uintXGYxp0 = BigInt("1914")
		const uinti7uXzZK = BigInt("979")
		const uintewrXPuR = BigInt("91")
		const uintDqPuyTm = BigInt("548")
		const addressFyw1MNn = accounts[2]
		const addressjGlRcw = accounts[1]
		const uint50NeU3 = BigInt("176")
		const uintgNnPSCZ = BigInt("558")
		const uintJgXNtjQ = await HungryHoodykUB6VRj.allowance.call(addresswiRwfj, addresswXk0eY2, {from: accounts[0]});
		const uinthFu3JS = await HungryHoodykUB6VRj.safeMul.call(uintXGYxp0, uintRhCvp2J, {from: accounts[1]});
		const uintSobsKxe = await HungryHoodykUB6VRj.safeAdd.call(uintewrXPuR, uinti7uXzZK, {from: accounts[5]});
		const boola6uoEhV = await HungryHoodykUB6VRj.transferFrom.call(addressjGlRcw, addressFyw1MNn, uintDqPuyTm, {from: accounts[2]});
		const uintEEnQxd = await HungryHoodykUB6VRj.safeSub.call(uintgNnPSCZ, uint50NeU3, {from: accounts[4]});
		const uint3wEZ6m = await HungryHoodykUB6VRj.totalSupply.call({from: accounts[1]});
	});
})