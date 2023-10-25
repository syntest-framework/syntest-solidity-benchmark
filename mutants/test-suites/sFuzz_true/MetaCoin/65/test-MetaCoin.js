const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinLCLNjM0 = await MetaCoin.new({from: accounts[5]});
		const uintk8qo8QD = BigInt("1108")
		const addressgVukKUI = accounts[0]
		const uint9mSZqP = BigInt("1378")
		const addressXs9by8U = accounts[0]
		const uintoOdEOOQ = BigInt("1240")
		const addressxJm2g8M = accounts[5]
		const boolKTr1Dy0 = await MetaCoinLCLNjM0.sendCoin.call(addressgVukKUI, uintk8qo8QD, {from: accounts[0]});
		const boolD8l69sy = await MetaCoinLCLNjM0.sendCoin.call(addressXs9by8U, uint9mSZqP, {from: accounts[3]});
		const boolYm8krN = await MetaCoinLCLNjM0.sendCoin.call(addressxJm2g8M, uintoOdEOOQ, {from: accounts[3]});

		assert.equal(boolD8l69sy, false)
		assert.equal(boolKTr1Dy0, false)
		assert.equal(boolYm8krN, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinR0vHm6s = await MetaCoin.new({from: accounts[3]});
		const uintH8uul8 = BigInt("1061")
		const addressX3eg24S = accounts[2]
		const uinttLyribZ = BigInt("34")
		const addressOuRmsw = "0x0000000000000000000000000000000000000001"
		const uintRIfQ6nL = BigInt("1656")
		const addresseXfp0PO = accounts[0]
		const uintdKBRX4P = BigInt("802")
		const addressYp5pbfE = accounts[4]
		const uintqEY5W9T = BigInt("493")
		const addressNsfjl8P = accounts[4]
		const boolHXWJE9 = await MetaCoinR0vHm6s.sendCoin.call(addressX3eg24S, uintH8uul8, {from: accounts[2]});
		const boolfmvhZ7c = await MetaCoinR0vHm6s.sendCoin.call(addressOuRmsw, uinttLyribZ, {from: accounts[2]});
		const boolbGEFJY0 = await MetaCoinR0vHm6s.sendCoin.call(addresseXfp0PO, uintRIfQ6nL, {from: accounts[0]});
		const bool82SV3l = await MetaCoinR0vHm6s.sendCoin.call(addressYp5pbfE, uintdKBRX4P, {from: accounts[3]});
		const boolCccm2JS = await MetaCoinR0vHm6s.sendCoin.call(addressNsfjl8P, uintqEY5W9T, {from: accounts[4]});

		assert.equal(bool82SV3l, true)
		assert.equal(boolCccm2JS, false)
		assert.equal(boolHXWJE9, false)
		assert.equal(boolbGEFJY0, false)
		assert.equal(boolfmvhZ7c, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinMO1Duk2 = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintv4FQsmJ = BigInt("1773")
		const addressIlcTIwe = accounts[0]
		const uint50KYHn = BigInt("21")
		const addressmsdN1T0 = accounts[3]
		const uintqMI2mSC = BigInt("548")
		const addressq8w8yC5 = accounts[2]
		const uintOy5y7gc = BigInt("596")
		const addresseTXrP0d = accounts[1]
		const uintwm473gW = BigInt("657")
		const addressMABBLnK = accounts[5]
		const uintAubwCao = BigInt("1300")
		const addressTc9Cs8I = accounts[1]
		const boolPRl4OzM = await MetaCoinMO1Duk2.sendCoin.call(addressIlcTIwe, uintv4FQsmJ, {from: accounts[3]});
		const boolJFOkFNJ = await MetaCoinMO1Duk2.sendCoin.call(addressmsdN1T0, uint50KYHn, {from: accounts[1]});
		const boolBhDulTb = await MetaCoinMO1Duk2.sendCoin.call(addressq8w8yC5, uintqMI2mSC, {from: accounts[4]});
		const boolVfHrGEK = await MetaCoinMO1Duk2.sendCoin.call(addresseTXrP0d, uintOy5y7gc, {from: accounts[1]});
		const boolS3ryPNm = await MetaCoinMO1Duk2.sendCoin.call(addressMABBLnK, uintwm473gW, {from: "0x0000000000000000000000000000000000000001"});
		const boolWCFOiCN = await MetaCoinMO1Duk2.sendCoin.call(addressTc9Cs8I, uintAubwCao, {from: accounts[5]});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinNA7pI9w = await MetaCoin.new({from: accounts[4]});
		const uintcxrWCOj = BigInt("1127")
		const addresswIQPjaG = accounts[4]
		const uintEOiE7C = BigInt("0")
		const addressVyMAUvn = accounts[5]
		const uintyLHb6kM = BigInt("1920")
		const addressD2yoyiH = accounts[4]
		const uintYV8CgQr = BigInt("736")
		const addressriLvVSQ = "0x0000000000000000000000000000000000000001"
		const uintDnsP0Sw = BigInt("1204")
		const addressHwY386 = accounts[1]
		const uinthXdrC78 = BigInt("1413")
		const addressxQ772d2 = accounts[1]
		const boolm7gRlI = await MetaCoinNA7pI9w.sendCoin.call(addresswIQPjaG, uintcxrWCOj, {from: accounts[2]});
		const boolfc3SU1Q = await MetaCoinNA7pI9w.sendCoin.call(addressVyMAUvn, uintEOiE7C, {from: accounts[2]});
		const boolScADJJl = await MetaCoinNA7pI9w.sendCoin.call(addressD2yoyiH, uintyLHb6kM, {from: accounts[4]});
		const boolB70fi5z = await MetaCoinNA7pI9w.sendCoin.call(addressriLvVSQ, uintYV8CgQr, {from: accounts[3]});
		const boolvfyFbsb = await MetaCoinNA7pI9w.sendCoin.call(addressHwY386, uintDnsP0Sw, {from: accounts[2]});
		const boolLUKWthJ = await MetaCoinNA7pI9w.sendCoin.call(addressxQ772d2, uinthXdrC78, {from: accounts[5]});

		assert.equal(boolB70fi5z, false)
		assert.equal(boolLUKWthJ, false)
		assert.equal(boolScADJJl, true)
		assert.equal(boolfc3SU1Q, true)
		assert.equal(boolm7gRlI, false)
		assert.equal(boolvfyFbsb, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinNA7pI9w = await MetaCoin.new({from: accounts[4]});
		const uintzUkxrfU = BigInt("296")
		const addressncnvr7y = accounts[0]
		const uinte8peElW = BigInt("3337")
		const addressqqqnZ38 = accounts[10]
		const booloIqmb9y = await MetaCoinNA7pI9w.sendCoin.call(addressncnvr7y, uintzUkxrfU, {from: accounts[4]});
//		const booldtnMQSD = await MetaCoinNA7pI9w.sendCoin.call(addressqqqnZ38, uinte8peElW, {from: accounts[4]});

		assert.equal(booloIqmb9y, true)
		await expect(MetaCoinNA7pI9w.sendCoin.call(addressqqqnZ38, uinte8peElW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})