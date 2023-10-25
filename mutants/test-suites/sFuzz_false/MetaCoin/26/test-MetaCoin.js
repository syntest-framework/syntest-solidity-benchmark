const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinJ9ek0fF = await MetaCoin.new({from: accounts[2]});
		const uintpCaLpaU = BigInt("574")
		const addressGm6Wqec = accounts[4]
		const uintZ7083DU = BigInt("695")
		const addressQsZSRIV = accounts[4]
		const uintxOdwe4 = BigInt("980")
		const addressNo4F3xy = accounts[1]
		const uintUx0zFYh = BigInt("1637")
		const addressQqwgyyI = accounts[1]
		const boole6d1y6l = await MetaCoinJ9ek0fF.sendCoin.call(addressGm6Wqec, uintpCaLpaU, {from: accounts[4]});
		const boolZ1xRh2P = await MetaCoinJ9ek0fF.sendCoin.call(addressQsZSRIV, uintZ7083DU, {from: accounts[0]});
		const boolTvnUiiY = await MetaCoinJ9ek0fF.sendCoin.call(addressNo4F3xy, uintxOdwe4, {from: accounts[2]});
		const booljURnbX5 = await MetaCoinJ9ek0fF.sendCoin.call(addressQqwgyyI, uintUx0zFYh, {from: accounts[2]});

		assert.equal(boolTvnUiiY, true)
		assert.equal(boolZ1xRh2P, false)
		assert.equal(boole6d1y6l, false)
		assert.equal(booljURnbX5, true)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinDoByIlM = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjwpe4ca = BigInt("1871")
		const addressRkKl0Hb = "0x0000000000000000000000000000000000000001"
		const uintfDsO2n3 = BigInt("661")
		const addressKQpxygg = accounts[3]
		const uintHKHNYr = BigInt("1217")
		const addresswXRd4Pl = accounts[1]
		const boolEpQdoY = await MetaCoinDoByIlM.sendCoin.call(addressRkKl0Hb, uintjwpe4ca, {from: "0x0000000000000000000000000000000000000001"});
		const boolIUyvSx3 = await MetaCoinDoByIlM.sendCoin.call(addressKQpxygg, uintfDsO2n3, {from: accounts[1]});
		const boolWfL34vm = await MetaCoinDoByIlM.sendCoin.call(addresswXRd4Pl, uintHKHNYr, {from: accounts[2]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinCYfWCiS = await MetaCoin.new({from: accounts[3]});
		const uintS9WKFa2 = BigInt("1114")
		const addressLP4yk8E = accounts[1]
		const uintzubD4lJ = BigInt("933")
		const addresssZEbOYD = accounts[5]
		const uintZm4iL7x = BigInt("14")
		const addressVVpnvb7 = "0x00000000000000000000000000000000000000-1"
		const boolmgY4mdF = await MetaCoinCYfWCiS.sendCoin.call(addressLP4yk8E, uintS9WKFa2, {from: accounts[1]});
		const boolKVs7EvG = await MetaCoinCYfWCiS.sendCoin.call(addresssZEbOYD, uintzubD4lJ, {from: accounts[2]});
//		const boolHDVe0w1 = await MetaCoinCYfWCiS.sendCoin.call(addressVVpnvb7, uintZm4iL7x, {from: accounts[3]});

		assert.equal(boolKVs7EvG, false)
		assert.equal(boolmgY4mdF, false)
		await expect(MetaCoinCYfWCiS.sendCoin.call(addressVVpnvb7, uintZm4iL7x, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MetaCoin', async () => {
		const MetaCoinCYfWCiS = await MetaCoin.new({from: accounts[3]});
		const uintbwMJAHh = BigInt("717")
		const addressMJgkkO = accounts[4]
		const uintf1mmC9J = BigInt("1952")
		const addressohRTS8Y = accounts[2]
		const uintg1beXv = BigInt("780")
		const addressPoxFQHG = accounts[1]
		const uintTad8GPi = BigInt("1516")
		const addressWBM5slY = "0x0000000000000000000000000000000000000001"
		const uintBSpYn1q = BigInt("0")
		const addressjqP5aRa = "0x0000000000000000000000000000000000000000"
		const boolGJXvNP7 = await MetaCoinCYfWCiS.sendCoin.call(addressMJgkkO, uintbwMJAHh, {from: accounts[1]});
		const boolBJjFdg7 = await MetaCoinCYfWCiS.sendCoin.call(addressohRTS8Y, uintf1mmC9J, {from: accounts[3]});
		const boolxFGlt4 = await MetaCoinCYfWCiS.sendCoin.call(addressPoxFQHG, uintg1beXv, {from: accounts[4]});
		const boolg5UkZw = await MetaCoinCYfWCiS.sendCoin.call(addressWBM5slY, uintTad8GPi, {from: accounts[3]});
		const boolHDVe0w1 = await MetaCoinCYfWCiS.sendCoin.call(addressjqP5aRa, uintBSpYn1q, {from: accounts[3]});

		assert.equal(boolBJjFdg7, true)
		assert.equal(boolGJXvNP7, false)
		assert.equal(boolHDVe0w1, true)
		assert.equal(boolg5UkZw, true)
		assert.equal(boolxFGlt4, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinezAdHC = await MetaCoin.new({from: accounts[0]});
		const uintDyJ9cz8 = BigInt("78")
		const addressVgQ5xoP = accounts[3]
		const uintjtuZsJU = BigInt("2970")
		const addressVnipaK3 = accounts[10]
		const uintvD2mNDC = BigInt("1941")
		const addressomwCsY = accounts[0]
		const boolxE61mLE = await MetaCoinezAdHC.sendCoin.call(addressVgQ5xoP, uintDyJ9cz8, {from: accounts[3]});
//		const boolkyVoeP = await MetaCoinezAdHC.sendCoin.call(addressVnipaK3, uintjtuZsJU, {from: accounts[0]});
//		const booltY6D6bC = await MetaCoinezAdHC.sendCoin.call(addressomwCsY, uintvD2mNDC, {from: accounts[4]});

		assert.equal(boolxE61mLE, false)
		await expect(MetaCoinezAdHC.sendCoin.call(addressVnipaK3, uintjtuZsJU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})