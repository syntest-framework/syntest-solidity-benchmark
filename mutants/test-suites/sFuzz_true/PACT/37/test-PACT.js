const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTtg6uBdN = await PACT.new({from: accounts[3]});
		const uintLnGvKh = BigInt("504")
		const addressXNUmy8U = accounts[3]
		const uintYId06g1 = BigInt("1746")
		const addressFuCvxzL = accounts[4]
		const addressU6diYu1 = accounts[5]
		const addressOHprkxu = "0x0000000000000000000000000000000000000001"
//		const boolhMqlXKh = await PACTtg6uBdN.transfer.call(addressXNUmy8U, uintLnGvKh, {from: accounts[2]});
//		const boolh8RrnCk = await PACTtg6uBdN.transfer.call(addressFuCvxzL, uintYId06g1, {from: accounts[3]});
//		const boolOnTxsj3 = await PACTtg6uBdN.setupBasePool.call(addressU6diYu1, {from: accounts[0]});
//		const boolhRulGL4 = await PACTtg6uBdN.setupRewards.call(addressOHprkxu, {from: accounts[1]});

		await expect(PACTtg6uBdN.transfer.call(addressXNUmy8U, uintLnGvKh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTJ1fSeJf = await PACT.new({from: accounts[4]});
		const addressuWIaS2Q = accounts[0]
		const addressNzIVcj0 = accounts[0]
		const uintfeuNWdo = await PACTJ1fSeJf.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uints4X39Kt = await PACTJ1fSeJf.allowance.call(addressNzIVcj0, addressuWIaS2Q, {from: "0x0000000000000000000000000000000000000001"});
		const stringX6LjOLm = await PACTJ1fSeJf.symbol.call({from: accounts[0]});

		assert.equal(stringX6LjOLm, "PACT")
		assert.equal(uintfeuNWdo, BigInt("1000000000000000000000000000"))
		assert.equal(uints4X39Kt, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTvDZJ3PG = await PACT.new({from: accounts[0]});
		const addressVBhBzWX = "0x0000000000000000000000000000000000000001"
		const uintAx1pKKl = BigInt("419")
		const addressRjLVMVn = accounts[1]
		const addressoy41f8V = accounts[2]
		const addresszEg6pgt = "0x0000000000000000000000000000000000000001"
		const stringIELl18y = await PACTvDZJ3PG.name.call({from: accounts[1]});
//		const boolpdgok46 = await PACTvDZJ3PG.setupRewards.call(addressVBhBzWX, {from: accounts[0]});
//		const boolho4MJje = await PACTvDZJ3PG.transfer.call(addressRjLVMVn, uintAx1pKKl, {from: accounts[0]});
//		const booly2NJJDb = await PACTvDZJ3PG.setupReserve.call(addressoy41f8V, {from: accounts[2]});
//		const uintjAp1eH7 = await PACTvDZJ3PG.balanceOf.call(addresszEg6pgt, {from: accounts[2]});

		assert.equal(stringIELl18y, "P2PB2B community token")
		await expect(PACTvDZJ3PG.setupRewards.call(addressVBhBzWX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTsefAeO = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const addressAfvqUbb = accounts[2]
		const addressfAGlt0w = accounts[2]
		const addressJonOuKc = accounts[4]
		const uintmLx9IZw = BigInt("311")
		const address6F9xZ3 = accounts[2]
		const uint1qImCC = BigInt("373")
		const addresswlkUzkK = accounts[3]
		const addresssBegVr0 = accounts[0]
		const uintpXH47yz = await PACTsefAeO.allowance.call(addressfAGlt0w, addressAfvqUbb, {from: accounts[1]});
		const uintUP9CWhC = await PACTsefAeO.balanceOf.call(addressJonOuKc, {from: accounts[1]});
		const boolyYihe4b = await PACTsefAeO.transfer.call(address6F9xZ3, uintmLx9IZw, {from: accounts[0]});
		const boolaTV8tsv = await PACTsefAeO.transferFrom.call(addresssBegVr0, addresswlkUzkK, uint1qImCC, {from: accounts[2]});
		const uintTLd2yIs = await PACTsefAeO.totalSupply.call({from: accounts[3]});
		const stringRnUthI9 = await PACTsefAeO.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for PACT', async () => {
		const PACTJkHE8hW = await PACT.new({from: accounts[5]});
		const uint8dhGE5 = BigInt("717")
		const addressbxhfX58 = accounts[1]
		const addressxu6c55a = accounts[0]
//		const boolO0UvZDd = await PACTJkHE8hW.burn.call(addressbxhfX58, uint8dhGE5, {from: accounts[5]});
//		const boolwBoUWXk = await PACTJkHE8hW.setupBasePool.call(addressxu6c55a, {from: accounts[0]});

		await expect(PACTJkHE8hW.burn.call(addressbxhfX58, uint8dhGE5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTkTEgiYu = await PACT.new({from: accounts[4]});
		const uintuE8mFn6 = BigInt("2021")
		const addressyMwojEa = accounts[0]
		const addresszU48Ywy = accounts[1]
		const addressm7w3KX = accounts[3]
		const addresszfYQjAO = accounts[1]
		const uintZ5YwT4r = BigInt("1457")
		const addressxFRwW1D = accounts[3]
		const uintwmG9jHa = await PACTkTEgiYu.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolkSwyvQW = await PACTkTEgiYu.transferFrom.call(addresszU48Ywy, addressyMwojEa, uintuE8mFn6, {from: "0x0000000000000000000000000000000000000001"});
//		const boolWdIpwV = await PACTkTEgiYu.setupTeam.call(addressm7w3KX, {from: accounts[3]});
//		const boolwYZH3t0 = await PACTkTEgiYu.setupBasePool.call(addresszfYQjAO, {from: accounts[2]});
//		const boolJndNkPH = await PACTkTEgiYu.transfer.call(addressxFRwW1D, uintZ5YwT4r, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintwmG9jHa, BigInt("1000000000000000000000000000"))
		await expect(PACTkTEgiYu.transferFrom.call(addresszU48Ywy, addressyMwojEa, uintuE8mFn6, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTo5GdKaE = await PACT.new({from: accounts[4]});
		const addressLeSDlTi = accounts[4]
		const uintPSGIwxh = BigInt("1337")
		const addressrCRd4o = accounts[2]
		const addressYvELbcD = accounts[0]
//		const boolukVDj6 = await PACTo5GdKaE.setupReserve.call(addressLeSDlTi, {from: accounts[0]});
//		const stringnM2hJTg = await PACTo5GdKaE.symbol.call({from: accounts[3]});
//		const boolG7cz0i3 = await PACTo5GdKaE.transferFrom.call(addressYvELbcD, addressrCRd4o, uintPSGIwxh, {from: accounts[1]});
//		const stringbETWIRu = await PACTo5GdKaE.name.call({from: accounts[1]});

		await expect(PACTo5GdKaE.setupReserve.call(addressLeSDlTi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACThew4lxB = await PACT.new({from: accounts[1]});
		const addressJIp7Cgp = accounts[3]
		const uintrM7JyTB = BigInt("1325")
		const addresst7t6i9S = accounts[3]
		const uintNj3mXHa = await PACThew4lxB.balanceOf.call(addressJIp7Cgp, {from: accounts[0]});
		const uintfhok2Yt = await PACThew4lxB.totalSupply.call({from: accounts[4]});
//		const boolfJ5TGGD = await PACThew4lxB.burn.call(addresst7t6i9S, uintrM7JyTB, {from: accounts[0]});
//		const stringtN4gqGe = await PACThew4lxB.name.call({from: accounts[1]});

		assert.equal(uintNj3mXHa, BigInt("0"))
		assert.equal(uintfhok2Yt, BigInt("1000000000000000000000000000"))
		await expect(PACThew4lxB.burn.call(addresst7t6i9S, uintrM7JyTB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTJkHE8hW = await PACT.new({from: accounts[5]});
		const addressCHwqm0Y = accounts[1]
//		const boolwBoUWXk = await PACTJkHE8hW.setupBasePool.call(addressCHwqm0Y, {from: accounts[0]});

		await expect(PACTJkHE8hW.setupBasePool.call(addressCHwqm0Y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTvDZJ3PG = await PACT.new({from: accounts[0]});
		const addressCCmqQrb = "0x0000000000000000000000000000000000000001"
		const uintsNiy98 = BigInt("419")
		const addressJLV8eWu = accounts[1]
		const addressDaCBGbB = accounts[2]
		const addresscvReOmT = "0x0000000000000000000000000000000000000001"
		const stringIELl18y = await PACTvDZJ3PG.name.call({from: accounts[1]});
		const uint8oFEysM4 = await PACTvDZJ3PG.decimals.call({from: accounts[2]});
//		const boolpdgok46 = await PACTvDZJ3PG.setupRewards.call(addressCCmqQrb, {from: accounts[0]});
//		const boolho4MJje = await PACTvDZJ3PG.transfer.call(addressJLV8eWu, uintsNiy98, {from: accounts[0]});
//		const booly2NJJDb = await PACTvDZJ3PG.setupReserve.call(addressDaCBGbB, {from: accounts[2]});
//		const uintjAp1eH7 = await PACTvDZJ3PG.balanceOf.call(addresscvReOmT, {from: accounts[2]});

		assert.equal(stringIELl18y, "P2PB2B community token")
		assert.equal(uint8oFEysM4, BigInt("18"))
		await expect(PACTvDZJ3PG.setupRewards.call(addressCCmqQrb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTc6kSLp = await PACT.new({from: accounts[3]});
		const addresstq2zG9 = accounts[2]
		const addressSXMrYOr = accounts[5]
		const addressiYMAXn9 = accounts[3]
		const addressjQlQKke = accounts[5]
		const uintWOM3bZL = BigInt("939")
		const addresshRi2Cn = accounts[5]
		const uintEsKIQI = await PACTc6kSLp.allowance.call(addressSXMrYOr, addresstq2zG9, {from: accounts[0]});
		const stringtwyq0aQ = await PACTc6kSLp.name.call({from: accounts[2]});
		const uintGYY5fO = await PACTc6kSLp.allowance.call(addressjQlQKke, addressiYMAXn9, {from: accounts[1]});
		const boolYqc5eZ = await PACTc6kSLp.approve.call(addresshRi2Cn, uintWOM3bZL, {from: accounts[2]});

		assert.equal(boolYqc5eZ, true)
		assert.equal(stringtwyq0aQ, "P2PB2B community token")
		assert.equal(uintEsKIQI, BigInt("0"))
		assert.equal(uintGYY5fO, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTo5GdKaE = await PACT.new({from: accounts[4]});
		const addressV54HIbm = accounts[1]
		const stringbETWIRu = await PACTo5GdKaE.name.call({from: accounts[1]});
//		const boolbJpcKJg = await PACTo5GdKaE.setupFarming.call(addressV54HIbm, {from: accounts[2]});
//		const uint8iPejKnh = await PACTo5GdKaE.decimals.call({from: accounts[2]});

		assert.equal(stringbETWIRu, "P2PB2B community token")
		await expect(PACTo5GdKaE.setupFarming.call(addressV54HIbm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTo5GdKaE = await PACT.new({from: accounts[4]});
		const addressVbh4IQz = accounts[2]
		const addressfu76U7 = accounts[3]
		const stringbETWIRu = await PACTo5GdKaE.name.call({from: accounts[1]});
		const uintnnY5rQ = await PACTo5GdKaE.balanceOf.call(addressVbh4IQz, {from: accounts[0]});
//		const boolYiRj0MD = await PACTo5GdKaE.setupTeam.call(addressfu76U7, {from: accounts[2]});

		assert.equal(stringbETWIRu, "P2PB2B community token")
		assert.equal(uintnnY5rQ, BigInt("0"))
		await expect(PACTo5GdKaE.setupTeam.call(addressfu76U7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})