const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinK9bsHhR = await MetaCoin.new({from: accounts[1]});
		const uintfbO24P7 = BigInt("133")
		const addressXK2aHuq = accounts[3]
		const uinthXtyPk = BigInt("837")
		const addressPe1aTTV = accounts[5]
		const uintmvdRih5 = BigInt("1005")
		const addresstLHYLe4 = accounts[2]
		const uintuvqlwsJ = BigInt("545")
		const addressCswJ2wo = accounts[4]
		const uintjZ0OHD5 = BigInt("1531")
		const addressuGu76NC = accounts[4]
		const boolFa6wMgl = await MetaCoinK9bsHhR.sendCoin.call(addressXK2aHuq, uintfbO24P7, {from: accounts[5]});
		const boolkMMqcGg = await MetaCoinK9bsHhR.sendCoin.call(addressPe1aTTV, uinthXtyPk, {from: accounts[2]});
		const boolaKEHNuI = await MetaCoinK9bsHhR.sendCoin.call(addresstLHYLe4, uintmvdRih5, {from: accounts[3]});
		const boolZH4NpGi = await MetaCoinK9bsHhR.sendCoin.call(addressCswJ2wo, uintuvqlwsJ, {from: accounts[3]});
		const boolMBeY2uL = await MetaCoinK9bsHhR.sendCoin.call(addressuGu76NC, uintjZ0OHD5, {from: accounts[1]});

		assert.equal(boolFa6wMgl, false)
		assert.equal(boolMBeY2uL, true)
		assert.equal(boolZH4NpGi, false)
		assert.equal(boolaKEHNuI, false)
		assert.equal(boolkMMqcGg, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinT6W0GEj = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintjnA5vFE = BigInt("1500")
		const addressF3Rttcc = accounts[1]
		const uintHco3Xf = BigInt("438")
		const addressyHRxAC = accounts[5]
		const uintfBxzmj = BigInt("385")
		const addressRYGZInZ = accounts[4]
		const uintlgrfgUE = BigInt("1378")
		const addressJS3fN8a = accounts[5]
		const boolitdL3qv = await MetaCoinT6W0GEj.sendCoin.call(addressF3Rttcc, uintjnA5vFE, {from: accounts[3]});
		const boolChgddn = await MetaCoinT6W0GEj.sendCoin.call(addressyHRxAC, uintHco3Xf, {from: accounts[4]});
		const boolWJcLB46 = await MetaCoinT6W0GEj.sendCoin.call(addressRYGZInZ, uintfBxzmj, {from: accounts[0]});
		const boolYA0BDBM = await MetaCoinT6W0GEj.sendCoin.call(addressJS3fN8a, uintlgrfgUE, {from: accounts[1]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinCCWx93 = await MetaCoin.new({from: accounts[2]});
		const uint4ngPcG = BigInt("26")
		const addressl4ZhR1x = accounts[2]
		const uinttepKXo8 = BigInt("0")
		const addressXGgkIpn = accounts[5]
		const uintnOns2JT = BigInt("1418")
		const addressC10Stkv = accounts[3]
		const uintk8uoqc5 = BigInt("1421")
		const addressjlUjoFw = accounts[2]
		const uintqW7VaX6 = BigInt("2009")
		const addresscEvB6X2 = accounts[1]
		const uintVkmxKzi = BigInt("2027")
		const addressQLtA7i = accounts[1]
		const uintTrQdoWc = BigInt("2012")
		const addressuHjd3ji = "0x0000000000000000000000000000000000000001"
		const bool63jidO = await MetaCoinCCWx93.sendCoin.call(addressl4ZhR1x, uint4ngPcG, {from: accounts[2]});
		const boolGybGkfN = await MetaCoinCCWx93.sendCoin.call(addressXGgkIpn, uinttepKXo8, {from: accounts[1]});
		const boolPWsPAW2 = await MetaCoinCCWx93.sendCoin.call(addressC10Stkv, uintnOns2JT, {from: accounts[0]});
		const boolWTQz2vs = await MetaCoinCCWx93.sendCoin.call(addressjlUjoFw, uintk8uoqc5, {from: accounts[3]});
		const boolgmVlu2a = await MetaCoinCCWx93.sendCoin.call(addresscEvB6X2, uintqW7VaX6, {from: accounts[3]});
		const boolzXwYV1B = await MetaCoinCCWx93.sendCoin.call(addressQLtA7i, uintVkmxKzi, {from: accounts[0]});
		const boolNgwgfgb = await MetaCoinCCWx93.sendCoin.call(addressuHjd3ji, uintTrQdoWc, {from: accounts[2]});

		assert.equal(bool63jidO, true)
		assert.equal(boolGybGkfN, true)
		assert.equal(boolNgwgfgb, true)
		assert.equal(boolPWsPAW2, false)
		assert.equal(boolWTQz2vs, false)
		assert.equal(boolgmVlu2a, false)
		assert.equal(boolzXwYV1B, false)
	});
})