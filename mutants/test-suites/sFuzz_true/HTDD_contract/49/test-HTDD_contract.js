const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractdH4khlT = await HTDD_contract.new({from: accounts[1]});
		const uintwMBARdM = BigInt("1797")
		const addressNJzgvcS = accounts[0]
		const addressHHd37wU = accounts[1]
		const uintXBg6S6 = BigInt("2042")
		const address78tQYh = accounts[3]
		const uintOadmMJ9 = BigInt("1716")
		const addressNaywJJ = accounts[1]
		const addressvUhF7mg = accounts[3]
		const uintNRZZ0X0 = BigInt("914")
		const addressPmydRPT = accounts[2]
		const addressyjShz8 = accounts[3]
		const uintXZX7Rt = BigInt("1977")
		const addressrYvITwZ = accounts[0]
		const addressm1nEpSq = accounts[2]
//		const boolrPoG4pz = await HTDD_contractdH4khlT.transferFrom.call(addressHHd37wU, addressNJzgvcS, uintwMBARdM, {from: accounts[2]});
//		const boolWzT8lYu = await HTDD_contractdH4khlT.approve.call(address78tQYh, uintXBg6S6, {from: "0x0000000000000000000000000000000000000001"});
//		const boolach7f5 = await HTDD_contractdH4khlT.transferFrom.call(addressvUhF7mg, addressNaywJJ, uintOadmMJ9, {from: accounts[3]});
//		const bool0Ej5rw = await HTDD_contractdH4khlT.transferFrom.call(addressyjShz8, addressPmydRPT, uintNRZZ0X0, {from: accounts[2]});
//		const boolJvn7Ddg = await HTDD_contractdH4khlT.transferFrom.call(addressm1nEpSq, addressrYvITwZ, uintXZX7Rt, {from: accounts[0]});

		await expect(HTDD_contractdH4khlT.transferFrom.call(addressHHd37wU, addressNJzgvcS, uintwMBARdM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractOusQxu = await HTDD_contract.new({from: accounts[1]});
		const uintL2M0OF = BigInt("120")
		const addressfrLITsq = accounts[1]
		const uintDp0GfgF = BigInt("481")
		const addressE8NE3HG = "0x0000000000000000000000000000000000000001"
		const uintMaBtRSr = BigInt("463")
		const addressrUKWE3w = accounts[4]
		const addressr0qiP2X = accounts[0]
		const uint06Uz6t = BigInt("1977")
		const addresskK3gLW = accounts[2]
		const addressNKQORf5 = accounts[0]
		const boolkZyWcPY = await HTDD_contractOusQxu.approve.call(addressfrLITsq, uintL2M0OF, {from: accounts[2]});
		const booluilX5UP = await HTDD_contractOusQxu.approve.call(addressE8NE3HG, uintDp0GfgF, {from: accounts[2]});
//		const boolNwjFTSC = await HTDD_contractOusQxu.transferFrom.call(addressr0qiP2X, addressrUKWE3w, uintMaBtRSr, {from: accounts[4]});
//		const boolCMiWgrx = await HTDD_contractOusQxu.transferFrom.call(addressNKQORf5, addresskK3gLW, uint06Uz6t, {from: accounts[1]});

		assert.equal(boolkZyWcPY, true)
		assert.equal(booluilX5UP, true)
		await expect(HTDD_contractOusQxu.transferFrom.call(addressr0qiP2X, addressrUKWE3w, uintMaBtRSr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractNqPVF0E = await HTDD_contract.new({from: accounts[4]});
		const uintBHF6Ozt = BigInt("204")
		const addressgAsY20X = "0x0000000000000000000000000000000000000001"
		const uintIcFnM5 = BigInt("1542")
		const address51zWoP = accounts[0]
		const addressScclf3P = accounts[0]
//		const boolfkJW3g = await HTDD_contractNqPVF0E.transfer.call(addressgAsY20X, uintBHF6Ozt, {from: accounts[0]});
//		const boolMfZg7JZ = await HTDD_contractNqPVF0E.transferFrom.call(addressScclf3P, address51zWoP, uintIcFnM5, {from: accounts[5]});

		await expect(HTDD_contractNqPVF0E.transfer.call(addressgAsY20X, uintBHF6Ozt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractVXQJq2Y = await HTDD_contract.new({from: accounts[2]});
		const addresshkp3PQ = accounts[5]
		const addressHcxyEWw = accounts[0]
		const uinthqy9UaX = BigInt("905")
		const addressYtuOOZX = accounts[2]
		const uintpFXcNO = BigInt("1589")
		const addressbuHIXhQ = accounts[1]
		const uint256VB7Jwcr = await HTDD_contractVXQJq2Y.allowance.call(addressHcxyEWw, addresshkp3PQ, {from: accounts[2]});
//		const boolYmRwijz = await HTDD_contractVXQJq2Y.transfer.call(addressYtuOOZX, uinthqy9UaX, {from: accounts[3]});
//		const boollQVorvr = await HTDD_contractVXQJq2Y.approve.call(addressbuHIXhQ, uintpFXcNO, {from: accounts[3]});

		assert.equal(uint256VB7Jwcr, BigInt("0"))
		await expect(HTDD_contractVXQJq2Y.transfer.call(addressYtuOOZX, uinthqy9UaX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractTPrblm6 = await HTDD_contract.new({from: accounts[2]});
		const addressxGliBn = "0x0000000000000000000000000000000000000001"
		const addressmPLW6t8 = accounts[4]
		const uintP3zLej4 = BigInt("823")
		const addressQ2KCtIe = "0x0000000000000000000000000000000000000001"
		const uintxRIXIR = BigInt("1756")
		const addressvvywGbA = accounts[4]
		const address1bvzf8 = accounts[1]
		const uint256XIs7Jv7 = await HTDD_contractTPrblm6.allowance.call(addressmPLW6t8, addressxGliBn, {from: accounts[0]});
		const booluaOSwIX = await HTDD_contractTPrblm6.transfer.call(addressQ2KCtIe, uintP3zLej4, {from: accounts[2]});
//		const boolTHynwx = await HTDD_contractTPrblm6.transferFrom.call(address1bvzf8, addressvvywGbA, uintxRIXIR, {from: accounts[2]});

		assert.equal(booluaOSwIX, true)
		assert.equal(uint256XIs7Jv7, BigInt("0"))
		await expect(HTDD_contractTPrblm6.transferFrom.call(address1bvzf8, addressvvywGbA, uintxRIXIR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractDX8rhL1 = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uinteEGdLqy = BigInt("2008")
		const addressDBuzL0 = accounts[5]
		const uintOemsrP = BigInt("1600")
		const addressMSVr0q5 = accounts[0]
		const addressl2hp6ni = accounts[0]
		const uintQPUSU0G = BigInt("1700")
		const addressrAKbTA = accounts[4]
		const addressaNS2XzR = accounts[3]
		const addressQrdSBu = accounts[5]
		const uintBohpqJ3 = BigInt("131")
		const addressZLxSQVR = accounts[4]
		const uintWZcoI39 = BigInt("903")
		const addressAnQEPsD = accounts[1]
		const boolWhzBBZ5 = await HTDD_contractDX8rhL1.approve.call(addressDBuzL0, uinteEGdLqy, {from: accounts[1]});
		const booluvR1h3g = await HTDD_contractDX8rhL1.transferFrom.call(addressl2hp6ni, addressMSVr0q5, uintOemsrP, {from: accounts[0]});
		const boolvpQkCrq = await HTDD_contractDX8rhL1.approve.call(addressrAKbTA, uintQPUSU0G, {from: accounts[1]});
		const uint256nJvmq4f = await HTDD_contractDX8rhL1.allowance.call(addressQrdSBu, addressaNS2XzR, {from: accounts[4]});
		const boolyEEOmQS = await HTDD_contractDX8rhL1.transfer.call(addressZLxSQVR, uintBohpqJ3, {from: accounts[5]});
		const boolumPjKg = await HTDD_contractDX8rhL1.approve.call(addressAnQEPsD, uintWZcoI39, {from: accounts[3]});
	});
})