const GAZ_ERC20 = artifacts.require("GAZ_ERC20");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GAZ_ERC20', (accounts) => {
	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20RdocBzS = await GAZ_ERC20.new({from: accounts[3]});
		const uintgp3iLp = BigInt("837")
		const addressiPV8XbW = accounts[5]
		const addressgJm7BpC = accounts[0]
		const uintk1ljh3e = BigInt("1407")
		const addressTV8jiCA = accounts[3]
		const uintX6MIOmj = BigInt("982")
		const addressze5N0yb = accounts[5]
//		const booldnqLt19 = await GAZ_ERC20RdocBzS.transferFrom.call(addressgJm7BpC, addressiPV8XbW, uintgp3iLp, {from: accounts[1]});
//		const boolAqkFA87 = await GAZ_ERC20RdocBzS.approve.call(addressTV8jiCA, uintk1ljh3e, {from: accounts[0]});
//		const boolTeyexAV = await GAZ_ERC20RdocBzS.approve.call(addressze5N0yb, uintX6MIOmj, {from: accounts[2]});

		await expect(GAZ_ERC20RdocBzS.transferFrom.call(addressgJm7BpC, addressiPV8XbW, uintgp3iLp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20A0PurUD = await GAZ_ERC20.new({from: accounts[2]});
		const uintsItIJcl = BigInt("985")
		const addressi5g8a1I = accounts[2]
		const uintJTPVRIT = BigInt("1229")
		const addressnciNxFT = accounts[1]
		const addressKI5itt7 = accounts[3]
		const uintOluxUS6 = BigInt("223")
		const addresszhhwK1c = accounts[1]
		const addressQjlZ3hA = accounts[1]
		const uintbozNuR3 = BigInt("149")
		const addressAvre3SO = accounts[5]
		const uintY35MikK = BigInt("1765")
		const addresstSjWC4v = accounts[1]
//		const boolPbo2Jp3 = await GAZ_ERC20A0PurUD.transfer.call(addressi5g8a1I, uintsItIJcl, {from: accounts[0]});
//		const boolbvqIm0f = await GAZ_ERC20A0PurUD.transferFrom.call(addressKI5itt7, addressnciNxFT, uintJTPVRIT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHEEF8Y = await GAZ_ERC20A0PurUD.transferFrom.call(addressQjlZ3hA, addresszhhwK1c, uintOluxUS6, {from: accounts[0]});
//		const boolNflgxwJ = await GAZ_ERC20A0PurUD.approve.call(addressAvre3SO, uintbozNuR3, {from: accounts[5]});
//		const booll5QS0O = await GAZ_ERC20A0PurUD.approve.call(addresstSjWC4v, uintY35MikK, {from: accounts[3]});

		await expect(GAZ_ERC20A0PurUD.transfer.call(addressi5g8a1I, uintsItIJcl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20LsmRJVY = await GAZ_ERC20.new({from: accounts[4]});
		const uintgawr2a3 = BigInt("716")
		const addressrXsPmTl = accounts[2]
		const uint71PjOM = BigInt("1780")
		const addressYoDUNUU = accounts[0]
		const uintlqoBZb2 = BigInt("429")
		const addressBj5XeEN = accounts[4]
		const boolf3iR83a = await GAZ_ERC20LsmRJVY.approve.call(addressrXsPmTl, uintgawr2a3, {from: "0x0000000000000000000000000000000000000001"});
		const boolEpvVpoN = await GAZ_ERC20LsmRJVY.transfer.call(addressYoDUNUU, uint71PjOM, {from: accounts[4]});
		const booli3qxMa = await GAZ_ERC20LsmRJVY.approve.call(addressBj5XeEN, uintlqoBZb2, {from: accounts[1]});

		assert.equal(boolEpvVpoN, true)
		assert.equal(boolf3iR83a, true)
		assert.equal(booli3qxMa, true)
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20unbXXL = await GAZ_ERC20.new({from: accounts[3]});
		const addressILN7N8I = accounts[2]
		const uintyvqAe6 = BigInt("886")
		const addressozpORzh = accounts[2]
		const uintqtePyNZ = BigInt("1919")
		const addressPl4zTxN = "0x0000000000000000000000000000000000000001"
		const uintMNVxiM6 = BigInt("423")
		const addressq090qoe = accounts[4]
		const uintVuEuNrh = BigInt("569")
		const addressHdTLPwS = accounts[3]
//		const bool0c30D6 = await GAZ_ERC20unbXXL.approve.call(addressILN7N8I, {from: accounts[0]});
//		const boolmdYk2tM = await GAZ_ERC20unbXXL.approve.call(addressozpORzh, uintyvqAe6, {from: accounts[0]});
//		const boolqr8tYef = await GAZ_ERC20unbXXL.transfer.call(addressPl4zTxN, uintqtePyNZ, {from: "0x0000000000000000000000000000000000000001"});
//		const booltkDX4j = await GAZ_ERC20unbXXL.transfer.call(addressq090qoe, uintMNVxiM6, {from: accounts[3]});
//		const boolUoo2w09 = await GAZ_ERC20unbXXL.transfer.call(addressHdTLPwS, uintVuEuNrh, {from: accounts[3]});

		await expect(GAZ_ERC20unbXXL.approve.call(addressILN7N8I, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20rmyHVjD = await GAZ_ERC20.new({from: accounts[4]});
		const uintF4b9sXu = BigInt("1509")
		const addressfA7qfmT = accounts[0]
		const uintDUEta1 = BigInt("1513")
		const addressQ6JB8Bf = accounts[5]
		const uintIc7afRu = BigInt("1715")
		const addressSYEBjFX = accounts[0]
		const addressZASOyEE = accounts[2]
		const boolTwWKYZ = await GAZ_ERC20rmyHVjD.approve.call(addressfA7qfmT, uintF4b9sXu, {from: accounts[4]});
		const boolPySNkcJ = await GAZ_ERC20rmyHVjD.approve.call(addressQ6JB8Bf, uintDUEta1, {from: accounts[3]});
		const boolVwmAaGw = await GAZ_ERC20rmyHVjD.approve.call(addressSYEBjFX, uintIc7afRu, {from: accounts[0]});
//		const boolYAxdhT7 = await GAZ_ERC20rmyHVjD.approve.call(addressZASOyEE, {from: accounts[5]});

		assert.equal(boolPySNkcJ, true)
		assert.equal(boolTwWKYZ, true)
		assert.equal(boolVwmAaGw, true)
		await expect(GAZ_ERC20rmyHVjD.approve.call(addressZASOyEE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20aYPiEq = await GAZ_ERC20.new({from: accounts[2]});
		const addressWbmARO = accounts[0]
		const uintBMKJaFu = BigInt("1078")
		const addressUY12v9S = accounts[3]
		const uintEkpLzTv = BigInt("1650")
		const address8nAo8y = accounts[0]
		const uintOJeHtN7 = BigInt("748")
		const addressuCy6EJZ = accounts[2]
//		const booll9T9bQl = await GAZ_ERC20aYPiEq.approve.call(addressWbmARO, {from: accounts[2]});
//		const boolNpzNcmV = await GAZ_ERC20aYPiEq.approve.call(addressUY12v9S, uintBMKJaFu, {from: accounts[1]});
//		const boolM1fqIfY = await GAZ_ERC20aYPiEq.transfer.call(address8nAo8y, uintEkpLzTv, {from: accounts[2]});
//		const boolhVEAbKi = await GAZ_ERC20aYPiEq.transfer.call(addressuCy6EJZ, uintOJeHtN7, {from: accounts[5]});

		await expect(GAZ_ERC20aYPiEq.approve.call(addressWbmARO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20rmyHVjD = await GAZ_ERC20.new({from: accounts[4]});
		const addresshVPkQ4H = accounts[4]
		const uintitLPr7I = BigInt("719")
		const addressFDNzKOR = accounts[0]
		const uintc2V7GzW = BigInt("1509")
		const addressqS52AC6 = accounts[0]
		const uintMQgjxH = BigInt("1513")
		const addressIQrexK8 = accounts[5]
		const addressAWGVXIK = accounts[2]
//		const boolvH0Gogd = await GAZ_ERC20rmyHVjD.approve.call(addresshVPkQ4H, {from: accounts[4]});
//		const bool06zlH9 = await GAZ_ERC20rmyHVjD.transfer.call(addressFDNzKOR, uintitLPr7I, {from: accounts[4]});
//		const boolTwWKYZ = await GAZ_ERC20rmyHVjD.approve.call(addressqS52AC6, uintc2V7GzW, {from: accounts[4]});
//		const boolPySNkcJ = await GAZ_ERC20rmyHVjD.approve.call(addressIQrexK8, uintMQgjxH, {from: accounts[3]});
//		const boolYAxdhT7 = await GAZ_ERC20rmyHVjD.approve.call(addressAWGVXIK, {from: accounts[5]});

		await expect(GAZ_ERC20rmyHVjD.approve.call(addresshVPkQ4H, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20poDSab3 = await GAZ_ERC20.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFQwHcvJ = BigInt("934")
		const addressRJQNqFK = accounts[2]
		const uintjnI1Bp2 = BigInt("1379")
		const addressNQjXiLw = accounts[0]
		const addressRiUGrmV = accounts[1]
		const uintX4FXpJq = BigInt("414")
		const addressurxdfzC = accounts[1]
		const uintfNP11Hj = BigInt("1830")
		const addressuDzqxpY = accounts[5]
		const uintjgi5Jsz = BigInt("1010")
		const addressAHqjapM = accounts[1]
		const addressYdlivCL = accounts[5]
		const uintv308EGZ = BigInt("1136")
		const addresstk6Q8l5 = accounts[3]
		const boolbGLpGUx = await GAZ_ERC20poDSab3.transfer.call(addressRJQNqFK, uintFQwHcvJ, {from: accounts[1]});
		const boolkbMqYn = await GAZ_ERC20poDSab3.transferFrom.call(addressRiUGrmV, addressNQjXiLw, uintjnI1Bp2, {from: accounts[4]});
		const boolOK1tbAo = await GAZ_ERC20poDSab3.transfer.call(addressurxdfzC, uintX4FXpJq, {from: accounts[3]});
		const boolDgIQ25K = await GAZ_ERC20poDSab3.approve.call(addressuDzqxpY, uintfNP11Hj, {from: accounts[5]});
		const boolIA4GqgK = await GAZ_ERC20poDSab3.transferFrom.call(addressYdlivCL, addressAHqjapM, uintjgi5Jsz, {from: accounts[4]});
		const boolyXUI8k0 = await GAZ_ERC20poDSab3.approve.call(addresstk6Q8l5, uintv308EGZ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20LsmRJVY = await GAZ_ERC20.new({from: accounts[4]});
		const uintWj8eYOu = BigInt("716")
		const addressb2LYa2Q = accounts[2]
		const uintNfXPjrG = BigInt("1780")
		const address5Pnyue = accounts[0]
		const addressXUOXq2L = accounts[1]
		const uintPNRvicu = BigInt("1848")
		const addressFbzRma4 = accounts[1]
		const uinth5Vbhua = BigInt("429")
		const addressFPkAWKI = accounts[5]
		const boolf3iR83a = await GAZ_ERC20LsmRJVY.approve.call(addressb2LYa2Q, uintWj8eYOu, {from: "0x0000000000000000000000000000000000000001"});
		const boolEpvVpoN = await GAZ_ERC20LsmRJVY.transfer.call(address5Pnyue, uintNfXPjrG, {from: accounts[4]});
//		const boolXozQai = await GAZ_ERC20LsmRJVY.approve.call(addressXUOXq2L, {from: accounts[1]});
//		const boolB8x9omQ = await GAZ_ERC20LsmRJVY.transfer.call(addressFbzRma4, uintPNRvicu, {from: accounts[0]});
//		const booli3qxMa = await GAZ_ERC20LsmRJVY.approve.call(addressFPkAWKI, uinth5Vbhua, {from: accounts[1]});

		assert.equal(boolEpvVpoN, true)
		assert.equal(boolf3iR83a, true)
		await expect(GAZ_ERC20LsmRJVY.approve.call(addressXUOXq2L, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20BJ0sWHB = await GAZ_ERC20.new({from: accounts[0]});
		const uintxA9kSRB = BigInt("1310")
		const addressLi5yNXd = accounts[0]
		const uintpIfBAdl = BigInt("1461")
		const addressRaVeZBk = accounts[4]
		const uintwwvqznV = BigInt("843")
		const addresstYWMJHi = accounts[4]
		const uintJxL1HFU = BigInt("1549")
		const addressXhbA40G = accounts[2]
		const address0nCIE6 = accounts[5]
		const uintHDWBDF = BigInt("506")
		const addressUzhxqUb = accounts[4]
		const uintek5WE6 = BigInt("962")
		const addressfe1fdYo = accounts[2]
		const boolTaGnH0u = await GAZ_ERC20BJ0sWHB.approve.call(addressLi5yNXd, uintxA9kSRB, {from: accounts[1]});
		const boolGb0EZ01 = await GAZ_ERC20BJ0sWHB.approve.call(addressRaVeZBk, uintpIfBAdl, {from: accounts[1]});
		const boolU11xY43 = await GAZ_ERC20BJ0sWHB.approve.call(addresstYWMJHi, uintwwvqznV, {from: accounts[0]});
		const boolq8ukr7V = await GAZ_ERC20BJ0sWHB.approve.call(addressXhbA40G, uintJxL1HFU, {from: accounts[1]});
//		const boolPssd3PH = await GAZ_ERC20BJ0sWHB.approve.call(address0nCIE6, {from: accounts[3]});
//		const boolOakEkbx = await GAZ_ERC20BJ0sWHB.approve.call(addressUzhxqUb, uintHDWBDF, {from: accounts[1]});
//		const boolt2OpbaH = await GAZ_ERC20BJ0sWHB.approve.call(addressfe1fdYo, uintek5WE6, {from: accounts[1]});

		assert.equal(boolGb0EZ01, true)
		assert.equal(boolTaGnH0u, true)
		assert.equal(boolU11xY43, true)
		assert.equal(boolq8ukr7V, true)
		await expect(GAZ_ERC20BJ0sWHB.approve.call(address0nCIE6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GAZ_ERC20', async () => {
		const GAZ_ERC20RdocBzS = await GAZ_ERC20.new({from: accounts[3]});
		const addressDVtbW6V = accounts[1]
		const uintXqzaini = BigInt("837")
		const addresspH7hBxB = accounts[5]
		const addressvjO6V78 = accounts[0]
		const uintV0yboxN = BigInt("1390")
		const addressNSI0Wc8 = accounts[3]
		const uintjyOU3AZ = BigInt("982")
		const addressydXe3Dm = accounts[5]
//		const boolOtDyP6w = await GAZ_ERC20RdocBzS.approve.call(addressDVtbW6V, {from: "0x0000000000000000000000000000000000000001"});
//		const booldnqLt19 = await GAZ_ERC20RdocBzS.transferFrom.call(addressvjO6V78, addresspH7hBxB, uintXqzaini, {from: accounts[1]});
//		const boolAqkFA87 = await GAZ_ERC20RdocBzS.approve.call(addressNSI0Wc8, uintV0yboxN, {from: accounts[0]});
//		const boolTeyexAV = await GAZ_ERC20RdocBzS.approve.call(addressydXe3Dm, uintjyOU3AZ, {from: accounts[2]});

		await expect(GAZ_ERC20RdocBzS.approve.call(addressDVtbW6V, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})