const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCointSZgJqT = await MetaCoin.new({from: accounts[2]});
		const uintoJuWl7A = BigInt("872")
		const addressbDhc54 = accounts[3]
		const uintkxnk1J = BigInt("1536")
		const addressEviri6 = accounts[0]
		const uint1DnFsG = BigInt("1867")
		const addressJKHjC1Z = accounts[1]
		const uintjuXat5i = BigInt("1218")
		const addresstQw1s2 = accounts[3]
		const boolgWaymPH = await MetaCointSZgJqT.sendCoin.call(addressbDhc54, uintoJuWl7A, {from: accounts[1]});
		const boolvkQiufg = await MetaCointSZgJqT.sendCoin.call(addressEviri6, uintkxnk1J, {from: accounts[3]});
		const boolyFknXc4 = await MetaCointSZgJqT.sendCoin.call(addressJKHjC1Z, uint1DnFsG, {from: accounts[1]});
		const bool2dpblL = await MetaCointSZgJqT.sendCoin.call(addresstQw1s2, uintjuXat5i, {from: accounts[1]});

		assert.equal(bool2dpblL, false)
		assert.equal(boolgWaymPH, false)
		assert.equal(boolvkQiufg, false)
		assert.equal(boolyFknXc4, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinCcWA5Cf = await MetaCoin.new({from: accounts[0]});
		const uinttaNibXd = BigInt("1140")
		const addressdHoNl1u = accounts[5]
		const uintO74T5Z9 = BigInt("1772")
		const addressSl2JNtb = "0x0000000000000000000000000000000000000001"
		const uintTKON6hJ = BigInt("1240")
		const addressd0qnraL = accounts[4]
		const boolylsX9jR = await MetaCoinCcWA5Cf.sendCoin.call(addressdHoNl1u, uinttaNibXd, {from: accounts[5]});
		const boolFRaPRPE = await MetaCoinCcWA5Cf.sendCoin.call(addressSl2JNtb, uintO74T5Z9, {from: accounts[2]});
		const bool3Hul2V = await MetaCoinCcWA5Cf.sendCoin.call(addressd0qnraL, uintTKON6hJ, {from: accounts[0]});

		assert.equal(bool3Hul2V, true)
		assert.equal(boolFRaPRPE, false)
		assert.equal(boolylsX9jR, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinIIWZZl = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQ5HdGot = BigInt("1100")
		const addressB53U6vN = accounts[5]
		const uintVa6hk28 = BigInt("841")
		const addresstJEgszA = accounts[1]
		const uintSDvqh4G = BigInt("1766")
		const addressUDh3ZC9 = accounts[0]
		const uintY8tsZH7 = BigInt("397")
		const addressCIKFhVL = accounts[4]
		const uintL8q3KIg = BigInt("1109")
		const addressRqNUspx = accounts[4]
		const boolP2xqfs = await MetaCoinIIWZZl.sendCoin.call(addressB53U6vN, uintQ5HdGot, {from: accounts[0]});
		const boolOw3lw2A = await MetaCoinIIWZZl.sendCoin.call(addresstJEgszA, uintVa6hk28, {from: accounts[0]});
		const boolxnkylLD = await MetaCoinIIWZZl.sendCoin.call(addressUDh3ZC9, uintSDvqh4G, {from: accounts[2]});
		const boolC22bAAY = await MetaCoinIIWZZl.sendCoin.call(addressCIKFhVL, uintY8tsZH7, {from: accounts[1]});
		const boolfMUlXuY = await MetaCoinIIWZZl.sendCoin.call(addressRqNUspx, uintL8q3KIg, {from: accounts[1]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinb6JMi5 = await MetaCoin.new({from: accounts[0]});
		const uintRUMkbSO = BigInt("1685")
		const addressdMD7eiU = accounts[4]
		const uintNBqZocb = BigInt("830")
		const addressp8Q5n6W = accounts[4]
		const uintlUomZpo = BigInt("297")
		const addresse84IxfG = accounts[3]
		const uintYSLY8mL = BigInt("821")
		const addressLyIhRw3 = accounts[4]
		const uintqQwMFhA = BigInt("479")
		const addressvTGQVp = accounts[0]
		const uintwZVc3b1 = BigInt("58")
		const addressHfKvlj5 = accounts[1]
		const uintVfyLR36 = BigInt("790")
		const addresshhKTLTg = accounts[2]
		const uintFjzYUmX = BigInt("0")
		const addressB1mwrEz = accounts[0]
		const uintKgRqRdu = BigInt("70")
		const addressmPlELkQ = accounts[0]
		const boolbZMsz72 = await MetaCoinb6JMi5.sendCoin.call(addressdMD7eiU, uintRUMkbSO, {from: accounts[1]});
		const booloBYqW39 = await MetaCoinb6JMi5.sendCoin.call(addressp8Q5n6W, uintNBqZocb, {from: accounts[1]});
		const boolFkbWHmy = await MetaCoinb6JMi5.sendCoin.call(addresse84IxfG, uintlUomZpo, {from: accounts[0]});
		const boolrrYwGMF = await MetaCoinb6JMi5.sendCoin.call(addressLyIhRw3, uintYSLY8mL, {from: accounts[4]});
		const boolafaManE = await MetaCoinb6JMi5.sendCoin.call(addressvTGQVp, uintqQwMFhA, {from: accounts[2]});
		const boolNkZDQeP = await MetaCoinb6JMi5.sendCoin.call(addressHfKvlj5, uintwZVc3b1, {from: accounts[0]});
		const boolj28uLmS = await MetaCoinb6JMi5.sendCoin.call(addresshhKTLTg, uintVfyLR36, {from: accounts[0]});
		const boolLORW6if = await MetaCoinb6JMi5.sendCoin.call(addressB1mwrEz, uintFjzYUmX, {from: accounts[0]});
		const boolzPL5Lz6 = await MetaCoinb6JMi5.sendCoin.call(addressmPlELkQ, uintKgRqRdu, {from: accounts[0]});

		assert.equal(boolFkbWHmy, true)
		assert.equal(boolLORW6if, true)
		assert.equal(boolNkZDQeP, true)
		assert.equal(boolafaManE, false)
		assert.equal(boolbZMsz72, false)
		assert.equal(boolj28uLmS, true)
		assert.equal(booloBYqW39, false)
		assert.equal(boolrrYwGMF, false)
		assert.equal(boolzPL5Lz6, true)
	});
})