const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinWF1lpv = await MetaCoin.new({from: accounts[4]});
		const uintMH9meSw = BigInt("970")
		const addressbmmP5sZ = accounts[1]
		const uintI9TuSPK = BigInt("1636")
		const addresspLVa4Yw = accounts[2]
		const uintBlMWNvQ = BigInt("91")
		const addressSAS1N8 = accounts[3]
		const uintUUXDqWy = BigInt("1011")
		const addressC29i0IE = accounts[0]
		const uintt7HHVu = BigInt("69")
		const addresspD9YFY8 = accounts[0]
		const boolJAIukw3 = await MetaCoinWF1lpv.sendCoin.call(addressbmmP5sZ, uintMH9meSw, {from: "0x0000000000000000000000000000000000000001"});
		const boolwteC6de = await MetaCoinWF1lpv.sendCoin.call(addresspLVa4Yw, uintI9TuSPK, {from: accounts[0]});
		const boolwnzcYMB = await MetaCoinWF1lpv.sendCoin.call(addressSAS1N8, uintBlMWNvQ, {from: accounts[4]});
		const boolLiIXgl = await MetaCoinWF1lpv.sendCoin.call(addressC29i0IE, uintUUXDqWy, {from: accounts[0]});
		const boolUlkGZlF = await MetaCoinWF1lpv.sendCoin.call(addresspD9YFY8, uintt7HHVu, {from: accounts[2]});

		assert.equal(boolJAIukw3, false)
		assert.equal(boolLiIXgl, false)
		assert.equal(boolUlkGZlF, false)
		assert.equal(boolwnzcYMB, true)
		assert.equal(boolwteC6de, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinWNq95Gl = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFzQY1p8 = BigInt("643")
		const addressVuyAXDj = accounts[2]
		const uintkXmgPSJ = BigInt("134")
		const addressECWjzOi = accounts[2]
		const uints3XR3t = BigInt("1029")
		const addressd6OqgFq = accounts[5]
		const uintLgKaYdM = BigInt("627")
		const addressdwLPZrQ = accounts[5]
		const uintJHOXnHX = BigInt("445")
		const addressgGz30KZ = accounts[3]
		const boolGmQEN3Y = await MetaCoinWNq95Gl.sendCoin.call(addressVuyAXDj, uintFzQY1p8, {from: accounts[4]});
		const bool5ZpakC = await MetaCoinWNq95Gl.sendCoin.call(addressECWjzOi, uintkXmgPSJ, {from: accounts[1]});
		const boolyiWGXyN = await MetaCoinWNq95Gl.sendCoin.call(addressd6OqgFq, uints3XR3t, {from: accounts[3]});
		const booluq6jdJh = await MetaCoinWNq95Gl.sendCoin.call(addressdwLPZrQ, uintLgKaYdM, {from: accounts[0]});
		const boolSKIgDV = await MetaCoinWNq95Gl.sendCoin.call(addressgGz30KZ, uintJHOXnHX, {from: accounts[2]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinTDFoxwy = await MetaCoin.new({from: accounts[2]});
		const uintG8dF45e = BigInt("1390")
		const addressHA7cZaL = accounts[5]
		const uintR5rydyh = BigInt("1971")
		const addressf3VE8Ox = accounts[0]
		const uintwWzKxgA = BigInt("4")
		const addressc6j7G0w = accounts[4]
		const uintroQBCzm = BigInt("1231")
		const addressfozuG6b = accounts[2]
		const uintEvDGuip = BigInt("166")
		const addressGDXgJrH = accounts[4]
		const uintoCo07LI = BigInt("5")
		const addressJVSpBBD = accounts[0]
		const uintBjjYTvo = BigInt("658")
		const addresslaBDriP = accounts[5]
		const boolLx9KJtW = await MetaCoinTDFoxwy.sendCoin.call(addressHA7cZaL, uintG8dF45e, {from: accounts[1]});
		const booljCD1cac = await MetaCoinTDFoxwy.sendCoin.call(addressf3VE8Ox, uintR5rydyh, {from: accounts[4]});
		const boolWTwc5PJ = await MetaCoinTDFoxwy.sendCoin.call(addressc6j7G0w, uintwWzKxgA, {from: accounts[2]});
		const boolyTE1VEr = await MetaCoinTDFoxwy.sendCoin.call(addressfozuG6b, uintroQBCzm, {from: accounts[1]});
		const boolrKyp1hX = await MetaCoinTDFoxwy.sendCoin.call(addressGDXgJrH, uintEvDGuip, {from: accounts[4]});
		const boolzFKWE7d = await MetaCoinTDFoxwy.sendCoin.call(addressJVSpBBD, uintoCo07LI, {from: accounts[2]});
		const boolnJpgVEf = await MetaCoinTDFoxwy.sendCoin.call(addresslaBDriP, uintBjjYTvo, {from: accounts[4]});

		assert.equal(boolLx9KJtW, false)
		assert.equal(boolWTwc5PJ, true)
		assert.equal(booljCD1cac, false)
		assert.equal(boolnJpgVEf, false)
		assert.equal(boolrKyp1hX, false)
		assert.equal(boolyTE1VEr, false)
		assert.equal(boolzFKWE7d, true)
	});
})