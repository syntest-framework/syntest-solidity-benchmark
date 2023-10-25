const HTDD_contract = artifacts.require("HTDD_contract");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HTDD_contract', (accounts) => {
	it('test for HTDD_contract', async () => {
		const HTDD_contractAHw8I0m = await HTDD_contract.new({from: accounts[2]});
		const uintted71v = BigInt("1563")
		const addressQOjYDph = accounts[2]
		const addressxsjYwFj = accounts[1]
		const addressL58qvsA = accounts[2]
		const addressDS8C9mC = accounts[2]
		const addresswFbizan = accounts[5]
		const uintPZQNMma = BigInt("966")
		const addressYHKX8bd = accounts[3]
		const boolIXvxiLb = await HTDD_contractAHw8I0m.approve.call(addressQOjYDph, uintted71v, {from: accounts[4]});
		const uint256mpDM1w = await HTDD_contractAHw8I0m.allowance.call(addressL58qvsA, addressxsjYwFj, {from: accounts[4]});
		const uint256oz7GTR = await HTDD_contractAHw8I0m.allowance.call(addresswFbizan, addressDS8C9mC, {from: accounts[4]});
		const boolaVbh7SK = await HTDD_contractAHw8I0m.approve.call(addressYHKX8bd, uintPZQNMma, {from: accounts[1]});

		assert.equal(boolIXvxiLb, true)
		assert.equal(boolaVbh7SK, true)
		assert.equal(uint256mpDM1w, BigInt("0"))
		assert.equal(uint256oz7GTR, BigInt("0"))
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractWMJ1LMr = await HTDD_contract.new({from: accounts[2]});
		const uintQ7NnyC9 = BigInt("740")
		const addressTCeBSmQ = accounts[5]
		const addressbULZfDE = accounts[1]
		const addresstqFhSZ7 = accounts[4]
		const uintEqFfbT = BigInt("930")
		const addresscZyKFOc = accounts[0]
		const addressoOcfA1D = accounts[2]
		const uintOvFmdpZ = BigInt("1196")
		const addressKplIdYL = accounts[0]
		const boolp36zd2o = await HTDD_contractWMJ1LMr.approve.call(addressTCeBSmQ, uintQ7NnyC9, {from: accounts[1]});
		const uint256CMVBTd = await HTDD_contractWMJ1LMr.allowance.call(addresstqFhSZ7, addressbULZfDE, {from: accounts[0]});
//		const boolWMwb9rk = await HTDD_contractWMJ1LMr.transferFrom.call(addressoOcfA1D, addresscZyKFOc, uintEqFfbT, {from: accounts[2]});
//		const bool6b1nhx = await HTDD_contractWMJ1LMr.transfer.call(addressKplIdYL, uintOvFmdpZ, {from: accounts[4]});

		assert.equal(boolp36zd2o, true)
		assert.equal(uint256CMVBTd, BigInt("0"))
		await expect(HTDD_contractWMJ1LMr.transferFrom.call(addressoOcfA1D, addresscZyKFOc, uintEqFfbT, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractCs8VAwU = await HTDD_contract.new({from: accounts[1]});
		const uint5NY6mL = BigInt("1098")
		const addressACsRzvo = accounts[4]
		const uintMxrnr00 = BigInt("1415")
		const addresseVL6LTF = "0x0000000000000000000000000000000000000001"
		const addressi1nPqH3 = accounts[2]
		const addresskmrpdAQ = accounts[4]
		const booluYFNvWb = await HTDD_contractCs8VAwU.approve.call(addressACsRzvo, uint5NY6mL, {from: accounts[5]});
//		const boolZFlCL9h = await HTDD_contractCs8VAwU.transfer.call(addresseVL6LTF, uintMxrnr00, {from: accounts[2]});
//		const uint256IRZTQsZ = await HTDD_contractCs8VAwU.allowance.call(addresskmrpdAQ, addressi1nPqH3, {from: accounts[3]});

		assert.equal(booluYFNvWb, true)
		await expect(HTDD_contractCs8VAwU.transfer.call(addresseVL6LTF, uintMxrnr00, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HTDD_contract', async () => {
		const HTDD_contractVDn3exQ = await HTDD_contract.new({from: "0x0000000000000000000000000000000000000001"});
		const uintXgNwqHP = BigInt("1950")
		const addresskMcihaN = accounts[2]
		const addressJETmoor = accounts[5]
		const addressOtnXIo = accounts[4]
		const addressM7nP9wG = accounts[2]
		const uintOcfhb8J = BigInt("399")
		const addressbI2zTwx = accounts[0]
		const uinty1xEbgq = BigInt("178")
		const addressMVwxDF = accounts[4]
		const uintNfQGbkK = BigInt("158")
		const addressa3Ysq6Q = accounts[2]
		const addressTWkjuWq = accounts[2]
		const boolgbZ13Tp = await HTDD_contractVDn3exQ.transferFrom.call(addressJETmoor, addresskMcihaN, uintXgNwqHP, {from: accounts[1]});
		const uint256dITLaY = await HTDD_contractVDn3exQ.allowance.call(addressM7nP9wG, addressOtnXIo, {from: accounts[0]});
		const booloyMYxA = await HTDD_contractVDn3exQ.transfer.call(addressbI2zTwx, uintOcfhb8J, {from: "0x0000000000000000000000000000000000000001"});
		const boolLjgbWj7 = await HTDD_contractVDn3exQ.approve.call(addressMVwxDF, uinty1xEbgq, {from: "0x0000000000000000000000000000000000000001"});
		const boolmkRaGw = await HTDD_contractVDn3exQ.transferFrom.call(addressTWkjuWq, addressa3Ysq6Q, uintNfQGbkK, {from: accounts[0]});
	});
})