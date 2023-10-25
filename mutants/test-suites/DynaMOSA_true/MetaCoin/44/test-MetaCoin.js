const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinxOooB93 = await MetaCoin.new({from: accounts[2]});
		const uintl6tXI6G = BigInt("1995")
		const addressNNZEfFh = "0x0000000000000000000000000000000000000001"
		const uintDRlCYRW = BigInt("996")
		const addresscMwz6tR = accounts[1]
		const uintMUgNOfI = BigInt("1351")
		const addressQ4lcmyY = accounts[0]
		const uint7DvifL = BigInt("511")
		const addressLja5w2 = accounts[3]
		const boolkSEN7j = await MetaCoinxOooB93.sendCoin.call(addressNNZEfFh, uintl6tXI6G, {from: accounts[1]});
		const boolXlFyifC = await MetaCoinxOooB93.sendCoin.call(addresscMwz6tR, uintDRlCYRW, {from: accounts[0]});
		const boolM2HBxJ3 = await MetaCoinxOooB93.sendCoin.call(addressQ4lcmyY, uintMUgNOfI, {from: accounts[5]});
		const boolqd3NSq = await MetaCoinxOooB93.sendCoin.call(addressLja5w2, uint7DvifL, {from: accounts[0]});

		assert.equal(boolM2HBxJ3, false)
		assert.equal(boolXlFyifC, false)
		assert.equal(boolkSEN7j, false)
		assert.equal(boolqd3NSq, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinqixtXKg = await MetaCoin.new({from: accounts[1]});
		const uintgxlRW2g = BigInt("1338")
		const addressU90uLQA = accounts[2]
		const uintnlsQyXG = BigInt("373")
		const addressQbZZTup = accounts[2]
		const uintawytobe = BigInt("198")
		const addresspaTwHaT = accounts[0]
		const uinto1w9is8 = BigInt("1134")
		const addressyuxU9HJ = accounts[3]
		const bool7sYhvi = await MetaCoinqixtXKg.sendCoin.call(addressU90uLQA, uintgxlRW2g, {from: accounts[4]});
		const boolwa7aEZ = await MetaCoinqixtXKg.sendCoin.call(addressQbZZTup, uintnlsQyXG, {from: accounts[3]});
		const booleD8WaQR = await MetaCoinqixtXKg.sendCoin.call(addresspaTwHaT, uintawytobe, {from: accounts[1]});
		const booldsnIJqb = await MetaCoinqixtXKg.sendCoin.call(addressyuxU9HJ, uinto1w9is8, {from: accounts[1]});

		assert.equal(bool7sYhvi, false)
		assert.equal(booldsnIJqb, true)
		assert.equal(booleD8WaQR, true)
		assert.equal(boolwa7aEZ, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinJTACsys = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVtN3gM = BigInt("926")
		const addressb21dwnl = accounts[4]
		const uintTqzm4mE = BigInt("1270")
		const addressVHrGJE = accounts[2]
		const uintKDd0Thc = BigInt("976")
		const addresszDY2wEM = accounts[5]
		const uintJtrPlc7 = BigInt("1560")
		const addressWjHxIug = accounts[3]
		const uintZnEy5YA = BigInt("896")
		const addressG3OGdhS = "0x0000000000000000000000000000000000000001"
		const uintlvJLdrq = BigInt("1439")
		const addressatJCGgW = accounts[2]
		const boolH0DR1p8 = await MetaCoinJTACsys.sendCoin.call(addressb21dwnl, uintVtN3gM, {from: accounts[4]});
		const boolFu8isN8 = await MetaCoinJTACsys.sendCoin.call(addressVHrGJE, uintTqzm4mE, {from: accounts[1]});
		const boolTdMdLmG = await MetaCoinJTACsys.sendCoin.call(addresszDY2wEM, uintKDd0Thc, {from: accounts[4]});
		const boolP1UAw3S = await MetaCoinJTACsys.sendCoin.call(addressWjHxIug, uintJtrPlc7, {from: accounts[4]});
		const boolej1OJOq = await MetaCoinJTACsys.sendCoin.call(addressG3OGdhS, uintZnEy5YA, {from: accounts[0]});
		const boolINfrQ6C = await MetaCoinJTACsys.sendCoin.call(addressatJCGgW, uintlvJLdrq, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinXnfEBq2 = await MetaCoin.new({from: accounts[1]});
		const uintevCZdD0 = BigInt("0")
		const addresswwOpvnC = accounts[3]
		const uintcW4BoM8 = BigInt("1973")
		const addressOkjnoeN = accounts[2]
		const uintFmShbD = BigInt("1432")
		const addressNwLFwTP = accounts[0]
		const uintVuAiOrS = BigInt("691")
		const addressQeqRbs6 = "0x0000000000000000000000000000000000000001"
		const uintV6uHOK2 = BigInt("1127")
		const addressgCDnDVJ = accounts[2]
		const uintafFgKvV = BigInt("1527")
		const addressGeCWucF = accounts[0]
		const uintyGzcOiC = BigInt("952")
		const addressVgmlDe = accounts[2]
		const boolbXchar = await MetaCoinXnfEBq2.sendCoin.call(addresswwOpvnC, uintevCZdD0, {from: accounts[5]});
		const boolbOVF4D9 = await MetaCoinXnfEBq2.sendCoin.call(addressOkjnoeN, uintcW4BoM8, {from: accounts[3]});
		const boolqQdXglw = await MetaCoinXnfEBq2.sendCoin.call(addressNwLFwTP, uintFmShbD, {from: "0x0000000000000000000000000000000000000001"});
		const boologYxgNq = await MetaCoinXnfEBq2.sendCoin.call(addressQeqRbs6, uintVuAiOrS, {from: accounts[3]});
		const booljBxECw9 = await MetaCoinXnfEBq2.sendCoin.call(addressgCDnDVJ, uintV6uHOK2, {from: accounts[1]});
		const boolzn4V8qC = await MetaCoinXnfEBq2.sendCoin.call(addressGeCWucF, uintafFgKvV, {from: accounts[3]});
		const boolQyCUL7B = await MetaCoinXnfEBq2.sendCoin.call(addressVgmlDe, uintyGzcOiC, {from: accounts[3]});

		assert.equal(boolQyCUL7B, false)
		assert.equal(boolbOVF4D9, false)
		assert.equal(boolbXchar, true)
		assert.equal(booljBxECw9, true)
		assert.equal(boologYxgNq, false)
		assert.equal(boolqQdXglw, false)
		assert.equal(boolzn4V8qC, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinGZQioRo = await MetaCoin.new({from: accounts[1]});
		const uintRbQjTpe = BigInt("187")
		const addressXBASoeS = accounts[4]
		const uintlK8grzn = BigInt("1467")
		const addressdGR1hfW = accounts[0]
		const uintCKsaVCb = BigInt("418")
		const addresseQ7gKA2 = accounts[4]
		const uintGQoSmf = BigInt("1823")
		const addresstwgYLpg = accounts[5]
		const uintX7Miiyo = BigInt("1883")
		const addressPngggVd = "0x00000000000000000000000000000000000000-1"
		const uintSyddnih = BigInt("522")
		const addresshNS8snP = accounts[0]
		const uintreipvQh = BigInt("1504")
		const addressXIj9LpO = "0x0000000000000000000000000000000000000001"
		const uintSXspY3 = BigInt("1104")
		const addressZXW5D3t = accounts[2]
		const uintwPkt8kV = BigInt("1716")
		const addressQ6l1Aug = "0x0000000000000000000000000000000000000001"
		const uintcF0ItP = BigInt("1464")
		const addressFM0dBmq = accounts[4]
		const bool6NimDJ = await MetaCoinGZQioRo.sendCoin.call(addressXBASoeS, uintRbQjTpe, {from: accounts[2]});
		const boolq6L3Z1H = await MetaCoinGZQioRo.sendCoin.call(addressdGR1hfW, uintlK8grzn, {from: "0x0000000000000000000000000000000000000001"});
		const booloutbpSf = await MetaCoinGZQioRo.sendCoin.call(addresseQ7gKA2, uintCKsaVCb, {from: accounts[3]});
		const boolMvY2r6 = await MetaCoinGZQioRo.sendCoin.call(addresstwgYLpg, uintGQoSmf, {from: accounts[4]});
//		const boolh8YrZ0y = await MetaCoinGZQioRo.sendCoin.call(addressPngggVd, uintX7Miiyo, {from: accounts[1]});
//		const boolLAS4kD = await MetaCoinGZQioRo.sendCoin.call(addresshNS8snP, uintSyddnih, {from: accounts[3]});
//		const boolwxbjQyP = await MetaCoinGZQioRo.sendCoin.call(addressXIj9LpO, uintreipvQh, {from: accounts[4]});
//		const boolqcTBk41 = await MetaCoinGZQioRo.sendCoin.call(addressZXW5D3t, uintSXspY3, {from: accounts[1]});
//		const boolvXnkE7P = await MetaCoinGZQioRo.sendCoin.call(addressQ6l1Aug, uintwPkt8kV, {from: "0x0000000000000000000000000000000000000001"});
//		const boolstSYoIc = await MetaCoinGZQioRo.sendCoin.call(addressFM0dBmq, uintcF0ItP, {from: accounts[1]});

		assert.equal(bool6NimDJ, false)
		assert.equal(boolMvY2r6, false)
		assert.equal(booloutbpSf, false)
		assert.equal(boolq6L3Z1H, false)
		await expect(MetaCoinGZQioRo.sendCoin.call(addressPngggVd, uintX7Miiyo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})