const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinRs76Y8F = await MetaCoin.new({from: accounts[0]});
		const uintl0NI8A3 = BigInt("393")
		const addresspXKkYHg = accounts[3]
		const uintIJJBMM = BigInt("965")
		const addressS28qqzb = accounts[0]
		const uintvBWhXh4 = BigInt("1885")
		const addressdh8iXvF = accounts[1]
		const boolCbh9xmr = await MetaCoinRs76Y8F.sendCoin.call(addresspXKkYHg, uintl0NI8A3, {from: accounts[2]});
		const boolmkmKgS = await MetaCoinRs76Y8F.sendCoin.call(addressS28qqzb, uintIJJBMM, {from: accounts[1]});
		const boolmhRWqn5 = await MetaCoinRs76Y8F.sendCoin.call(addressdh8iXvF, uintvBWhXh4, {from: accounts[5]});

		assert.equal(boolCbh9xmr, false)
		assert.equal(boolmhRWqn5, false)
		assert.equal(boolmkmKgS, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinu6MWO2 = await MetaCoin.new({from: accounts[2]});
		const uintthLWCeu = BigInt("160")
		const addresstmnJMaQ = accounts[5]
		const uintQCvQzb4 = BigInt("293")
		const addressWV8o1Gh = accounts[2]
		const uintQr8CBOl = BigInt("2015")
		const addressQCjsE2y = "0x0000000000000000000000000000000000000001"
		const uintTYAUVQ6 = BigInt("1521")
		const addressLgHlqD = accounts[5]
		const uintHqNX63 = BigInt("554")
		const addressTtJLRxX = accounts[4]
		const uintX9PmLMb = BigInt("962")
		const addressk9BL0xI = accounts[2]
		const boolIhijdQT = await MetaCoinu6MWO2.sendCoin.call(addresstmnJMaQ, uintthLWCeu, {from: accounts[1]});
		const boolDPmmrPW = await MetaCoinu6MWO2.sendCoin.call(addressWV8o1Gh, uintQCvQzb4, {from: accounts[3]});
		const booltThSrhg = await MetaCoinu6MWO2.sendCoin.call(addressQCjsE2y, uintQr8CBOl, {from: accounts[4]});
		const booljTNA4Mx = await MetaCoinu6MWO2.sendCoin.call(addressLgHlqD, uintTYAUVQ6, {from: accounts[4]});
		const boolE9iOPl1 = await MetaCoinu6MWO2.sendCoin.call(addressTtJLRxX, uintHqNX63, {from: accounts[2]});
		const boolSWVjvUi = await MetaCoinu6MWO2.sendCoin.call(addressk9BL0xI, uintX9PmLMb, {from: accounts[3]});

		assert.equal(boolDPmmrPW, false)
		assert.equal(boolE9iOPl1, true)
		assert.equal(boolIhijdQT, false)
		assert.equal(boolSWVjvUi, false)
		assert.equal(booljTNA4Mx, false)
		assert.equal(booltThSrhg, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinfmy8Wm = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQSDELM5 = BigInt("98")
		const addressB41FMRK = accounts[4]
		const uintl7yMfQF = BigInt("1709")
		const addressxUpOX26 = "0x0000000000000000000000000000000000000001"
		const uintt9MibgY = BigInt("1765")
		const addressllwIPCP = accounts[0]
		const uintweJo1h = BigInt("982")
		const addresstyMafVD = accounts[3]
		const boolM1hi0kh = await MetaCoinfmy8Wm.sendCoin.call(addressB41FMRK, uintQSDELM5, {from: accounts[1]});
		const boolOVzZK4L = await MetaCoinfmy8Wm.sendCoin.call(addressxUpOX26, uintl7yMfQF, {from: accounts[0]});
		const boolMoEf7Cn = await MetaCoinfmy8Wm.sendCoin.call(addressllwIPCP, uintt9MibgY, {from: accounts[0]});
		const boolYXu2gOD = await MetaCoinfmy8Wm.sendCoin.call(addresstyMafVD, uintweJo1h, {from: accounts[4]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinA3fSpEv = await MetaCoin.new({from: accounts[4]});
		const uintRkaFw7U = BigInt("1585")
		const addressagVppw = "0x0000000000000000000000000000000000000001"
		const uintEAPxFUW = BigInt("590")
		const addressC1JYJ4B = "0x00000000000000000000000000000000000000-1"
		const uintt8iS3t = BigInt("1378")
		const addressZuRUS7N = accounts[3]
		const uintu8cJBOy = BigInt("713")
		const addressxqFfGq = accounts[4]
		const uintZrmsUTf = BigInt("1874")
		const addressWEx16wE = accounts[2]
		const boolxHs51zj = await MetaCoinA3fSpEv.sendCoin.call(addressagVppw, uintRkaFw7U, {from: accounts[4]});
		const boolOi7QaUV = await MetaCoinA3fSpEv.sendCoin.call(addressC1JYJ4B, uintEAPxFUW, {from: accounts[1]});
		const boolD0z38SS = await MetaCoinA3fSpEv.sendCoin.call(addressZuRUS7N, uintt8iS3t, {from: accounts[3]});
		const boolvtoxxbA = await MetaCoinA3fSpEv.sendCoin.call(addressxqFfGq, uintu8cJBOy, {from: accounts[2]});
		const boolyZzB2KY = await MetaCoinA3fSpEv.sendCoin.call(addressWEx16wE, uintZrmsUTf, {from: accounts[0]});

		assert.equal(boolxHs51zj, true)
		await expect(MetaCoinA3fSpEv.sendCoin.call(addressC1JYJ4B, uintEAPxFUW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MetaCoin', async () => {
		const MetaCoinA3fSpEv = await MetaCoin.new({from: accounts[4]});
		const uintOVvnM0 = BigInt("1585")
		const addressIDlCyg8 = "0x0000000000000000000000000000000000000001"
		const uintI3yeJRT = BigInt("590")
		const addressRx4IBlR = "0x0000000000000000000000000000000000000000"
		const uintHmNs0AQ = BigInt("2")
		const addressOKaMLW = accounts[4]
		const boolxHs51zj = await MetaCoinA3fSpEv.sendCoin.call(addressIDlCyg8, uintOVvnM0, {from: accounts[4]});
		const boolOi7QaUV = await MetaCoinA3fSpEv.sendCoin.call(addressRx4IBlR, uintI3yeJRT, {from: accounts[1]});
		const boolR8sE9pz = await MetaCoinA3fSpEv.sendCoin.call(addressOKaMLW, uintHmNs0AQ, {from: accounts[4]});

		assert.equal(boolOi7QaUV, false)
		assert.equal(boolR8sE9pz, true)
		assert.equal(boolxHs51zj, true)
	});
})