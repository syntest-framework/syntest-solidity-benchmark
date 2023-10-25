const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITLCLNjM0 = await RIT.new({from: accounts[5]});
		const uintqVukKU = BigInt("291")
		const addressvw34euR = accounts[1]
		const uintFhs9by8 = BigInt("677")
		const addresspRpWZt3 = accounts[2]
		const addressxJm2g8M = accounts[5]
		const boolk8qo8QD = await RITLCLNjM0.approve.call(addressvw34euR, uintqVukKU, {from: accounts[2]});
		const bool9mSZqP = await RITLCLNjM0.approve.call(addresspRpWZt3, uintFhs9by8, {from: accounts[3]});
		const uint256oOdEOOQ = await RITLCLNjM0.balanceOf.call(addressxJm2g8M, {from: accounts[3]});

		assert.equal(bool9mSZqP, true)
		assert.equal(boolk8qo8QD, true)
		assert.equal(uint256oOdEOOQ, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITda7PXOp = await RIT.new({from: accounts[0]});
		const uintoXfp0P = BigInt("486")
		const addresseJ72xr = accounts[1]
		const uintoip5pbf = BigInt("157")
		const addressec8TZNj = accounts[5]
		const addressNsfjl8P = accounts[4]
		const addresscrc3m0R = accounts[2]
		const uint8iLiYr0l = await RITda7PXOp.decimals.call({from: accounts[3]});
		const boolRIfQ6nL = await RITda7PXOp.approve.call(addresseJ72xr, uintoXfp0P, {from: accounts[4]});
//		const booldKBRX4P = await RITda7PXOp.decreaseAllowance.call(addressec8TZNj, uintoip5pbf, {from: accounts[1]});
//		const uint256qEY5W9T = await RITda7PXOp.allowance.call(addresscrc3m0R, addressNsfjl8P, {from: accounts[0]});

		assert.equal(boolRIfQ6nL, true)
		assert.equal(uint8iLiYr0l, BigInt("18"))
		await expect(RITda7PXOp.decreaseAllowance.call(addressec8TZNj, uintoip5pbf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITxp77eh3 = await RIT.new({from: accounts[2]});
		const addresstryPNmD = accounts[2]
		const uint8FyImY = BigInt("1160")
		const addressrDuk2DT = accounts[0]
		const uintwmUwDLu = BigInt("1309")
		const addresszey7pOq = "0x0000000000000000000000000000000000000001"
		const addressygIHXWJ = accounts[3]
		const uint256HDLJ55m = await RITxp77eh3.balanceOf.call(addresstryPNmD, {from: accounts[1]});
//		const uint256xWABBLn = await RITxp77eh3._burn.call(uint8FyImY, {from: accounts[0]});
//		const stringAubwCao = await RITxp77eh3.symbol.call({from: accounts[3]});
//		const uint256lsFvp3 = await RITxp77eh3.balanceOf.call(addressrDuk2DT, {from: accounts[3]});
//		const boolodQ41sC = await RITxp77eh3.transferFrom.call(addressygIHXWJ, addresszey7pOq, uintwmUwDLu, {from: accounts[0]});

		assert.equal(uint256HDLJ55m, BigInt("0"))
		await expect(RITxp77eh3._burn.call(uint8FyImY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITDFhte08 = await RIT.new({from: accounts[4]});
		const uintVZQZnK5 = BigInt("1878")
		const addressulfC1E = accounts[1]
		const addressdATFOkF = accounts[0]
		const uintJbwsbp7 = BigInt("1020")
		const addressQLhDul = accounts[1]
		const boolVqcDLsr = await RITDFhte08.approve.call(addressulfC1E, uintVZQZnK5, {from: accounts[0]});
		const stringfWhAuK9 = await RITDFhte08.name.call({from: accounts[2]});
		const uint256pMrIGf5 = await RITDFhte08.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256we54FQ = await RITDFhte08.totalSupply.call({from: accounts[3]});
		const uint256DJZtrrt = await RITDFhte08.balanceOf.call(addressdATFOkF, {from: accounts[0]});
		const boolcPHmwsd = await RITDFhte08.approve.call(addressQLhDul, uintJbwsbp7, {from: accounts[0]});

		assert.equal(boolVqcDLsr, true)
		assert.equal(boolcPHmwsd, true)
		assert.equal(stringfWhAuK9, "Real Estate Investment Token")
		assert.equal(uint256DJZtrrt, BigInt("0"))
		assert.equal(uint256pMrIGf5, BigInt("500000000000000000000000000"))
		assert.equal(uint256we54FQ, BigInt("500000000000000000000000000"))
	});

	it('test for RIT', async () => {
		const RITiwjl95r = await RIT.new({from: accounts[2]});
		const uintjtTm2OF = BigInt("874")
		const addressoO14G7d = accounts[4]
		const uintO37iL1j = BigInt("814")
		const addressLHF4pu3 = accounts[1]
		const boolIxJL1Om = await RITiwjl95r.approve.call(addressoO14G7d, uintjtTm2OF, {from: accounts[2]});
//		const boolVMF9MD = await RITiwjl95r.transfer.call(addressLHF4pu3, uintO37iL1j, {from: accounts[2]});

		assert.equal(boolIxJL1Om, true)
		await expect(RITiwjl95r.transfer.call(addressLHF4pu3, uintO37iL1j, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITsEQKvI5 = await RIT.new({from: accounts[0]});
		const addressdczX19i = "0x0000000000000000000000000000000000000001"
		const addressdZbcOlP = "0x0000000000000000000000000000000000000001"
		const uint256iEUTVKj = await RITsEQKvI5.totalSupply.call({from: accounts[5]});
		const uint256Ud637GM = await RITsEQKvI5.allowance.call(addressdZbcOlP, addressdczX19i, {from: accounts[3]});
		const uint2564XKxgW = await RITsEQKvI5.totalSupply.call({from: accounts[1]});

		assert.equal(uint2564XKxgW, BigInt("500000000000000000000000000"))
		assert.equal(uint256Ud637GM, BigInt("0"))
		assert.equal(uint256iEUTVKj, BigInt("500000000000000000000000000"))
	});

	it('test for RIT', async () => {
		const RITDkoE5BI = await RIT.new({from: accounts[3]});
		const uintNQ0sBEE = BigInt("1664")
		const addressWhZ5JKj = accounts[3]
		const addressBaPfG93 = accounts[1]
		const stringGhY40SH = await RITDkoE5BI.symbol.call({from: accounts[1]});
		const uint256gV10GMI = await RITDkoE5BI.totalSupply.call({from: accounts[2]});
		const stringfuVKrD = await RITDkoE5BI.name.call({from: accounts[1]});
//		const boolHk0j9N8 = await RITDkoE5BI.transferFrom.call(addressBaPfG93, addressWhZ5JKj, uintNQ0sBEE, {from: accounts[0]});
//		const uint8VMF6YA6 = await RITDkoE5BI.decimals.call({from: accounts[0]});

		assert.equal(stringGhY40SH, "RIT 2.0")
		assert.equal(stringfuVKrD, "Real Estate Investment Token")
		assert.equal(uint256gV10GMI, BigInt("500000000000000000000000000"))
		await expect(RITDkoE5BI.transferFrom.call(addressBaPfG93, addressWhZ5JKj, uintNQ0sBEE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITX770il0 = await RIT.new({from: accounts[3]});
		const uintotRyLqA = BigInt("26")
		const addressJLEL6eE = accounts[5]
		const uintzMHbrWO = BigInt("441")
		const addressJANqwPQ = accounts[2]
		const uintXR9ghUf = BigInt("619")
		const addressUgrnp3j = accounts[4]
		const boolSh4HCEM = await RITX770il0.increaseAllowance.call(addressJLEL6eE, uintotRyLqA, {from: accounts[0]});
		const boolEjDdKi = await RITX770il0.approve.call(addressJANqwPQ, uintzMHbrWO, {from: accounts[1]});
		const uint256eEuDXfs = await RITX770il0.totalSupply.call({from: accounts[5]});
		const uint8CD0nU6 = await RITX770il0.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolk0zTW8w = await RITX770il0.approve.call(addressUgrnp3j, uintXR9ghUf, {from: accounts[2]});

		assert.equal(boolEjDdKi, true)
		assert.equal(boolSh4HCEM, true)
		assert.equal(boolk0zTW8w, true)
		assert.equal(uint256eEuDXfs, BigInt("500000000000000000000000000"))
		assert.equal(uint8CD0nU6, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITDsxi7AL = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCIwcIzN = BigInt("1811")
		const addressQQJnCB1 = accounts[2]
		const uintP7fKDYo = BigInt("483")
		const uintaSra2i = BigInt("753")
		const addressaRmxVw7 = accounts[1]
		const booloJItMZ = await RITDsxi7AL.approve.call(addressQQJnCB1, uintCIwcIzN, {from: accounts[0]});
		const uint256wopbJEx = await RITDsxi7AL.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256CCyhFaQ = await RITDsxi7AL._burn.call(uintP7fKDYo, {from: accounts[1]});
		const boolRMoiIrC = await RITDsxi7AL.approve.call(addressaRmxVw7, uintaSra2i, {from: accounts[1]});
	});
})