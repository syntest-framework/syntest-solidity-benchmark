const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancebCqQgDG = await Straight_Fire_Finance.new({from: accounts[3]});
		const addressMoLQbe1 = accounts[2]
		const uintLQqYFQE = BigInt("95")
		const addressubpGZxQ = accounts[1]
		const uint256RKDmqdn = await Straight_Fire_FinancebCqQgDG.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256FXklBdR = await Straight_Fire_FinancebCqQgDG.balanceOf.call(addressMoLQbe1, {from: accounts[1]});
		const boolCxNjXSi = await Straight_Fire_FinancebCqQgDG.transfer.call(addressubpGZxQ, uintLQqYFQE, {from: accounts[0]});

		assert.equal(boolCxNjXSi, false)
		assert.equal(uint256FXklBdR, BigInt("0"))
		assert.equal(uint256RKDmqdn, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceBYjopm5 = await Straight_Fire_Finance.new({from: accounts[4]});
		const uintxSJrZwZ = BigInt("560")
		const address2KlxaC = accounts[5]
		const uintbcx2c3g = BigInt("728")
		const addressjv2QZ4K = accounts[0]
		const addresslnp4OvT = accounts[4]
		const uintaoyPZrU = BigInt("1948")
		const addressvVVG5Hy = accounts[4]
		const uinte8t9ZF = BigInt("607")
		const address93YBMv = accounts[3]
		const addressC7gMLw = accounts[4]
		const boolk8gJNW1 = await Straight_Fire_FinanceBYjopm5.approve.call(address2KlxaC, uintxSJrZwZ, {from: accounts[1]});
		const boolZHZZKXX = await Straight_Fire_FinanceBYjopm5.transferFrom.call(addresslnp4OvT, addressjv2QZ4K, uintbcx2c3g, {from: accounts[1]});
		const boolDwdymle = await Straight_Fire_FinanceBYjopm5.transfer.call(addressvVVG5Hy, uintaoyPZrU, {from: accounts[1]});
		const boolQUhi8Zv = await Straight_Fire_FinanceBYjopm5.transfer.call(address93YBMv, uinte8t9ZF, {from: accounts[1]});
		const uint256rUC8Ftc = await Straight_Fire_FinanceBYjopm5.balanceOf.call(addressC7gMLw, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolDwdymle, false)
		assert.equal(boolQUhi8Zv, false)
		assert.equal(boolZHZZKXX, false)
		assert.equal(boolk8gJNW1, true)
		assert.equal(uint256rUC8Ftc, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceQ9mYqww = await Straight_Fire_Finance.new({from: accounts[0]});
		const uintdrkYKfd = BigInt("246")
		const addressutsKgkb = accounts[0]
		const addressPrAS59f = accounts[2]
		const uintJ7lGMYK = BigInt("564")
		const addressg5oM41X = accounts[3]
		const addressB4S6G3 = "0x0000000000000000000000000000000000000001"
		const uintraeKXOO = BigInt("555")
		const addressO157yk = accounts[1]
		const uintXEIAyEr = BigInt("353")
		const addressTYsTObm = accounts[4]
		const addressmvANkR = accounts[0]
		const addressF08Mv6P = accounts[1]
		const boolJbuMk86 = await Straight_Fire_FinanceQ9mYqww.transferFrom.call(addressPrAS59f, addressutsKgkb, uintdrkYKfd, {from: accounts[3]});
		const boolcb5iOU = await Straight_Fire_FinanceQ9mYqww.transferFrom.call(addressB4S6G3, addressg5oM41X, uintJ7lGMYK, {from: accounts[2]});
		const uint256HasEAX1 = await Straight_Fire_FinanceQ9mYqww.totalSupply.call({from: accounts[4]});
		const boolrL4F0Md = await Straight_Fire_FinanceQ9mYqww.transfer.call(addressO157yk, uintraeKXOO, {from: accounts[0]});
		const boolL2Pqd0s = await Straight_Fire_FinanceQ9mYqww.transfer.call(addressTYsTObm, uintXEIAyEr, {from: accounts[3]});
		const uintPZ7ANgM = await Straight_Fire_FinanceQ9mYqww.allowance.call(addressF08Mv6P, addressmvANkR, {from: accounts[5]});

		assert.equal(boolJbuMk86, false)
		assert.equal(boolL2Pqd0s, false)
		assert.equal(boolcb5iOU, false)
		assert.equal(boolrL4F0Md, true)
		assert.equal(uint256HasEAX1, BigInt("80000000000000000000000"))
		assert.equal(uintPZ7ANgM, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceziocGXW = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintl1WCfBC = BigInt("1924")
		const addressvwY05bo = accounts[5]
		const addressP7aWX3A = accounts[3]
		const uintIcqhggb = BigInt("2038")
		const addressZl7ufmb = accounts[3]
		const addressxtxOcq6 = accounts[1]
		const uintVcxOoiB = BigInt("1713")
		const addressRTj0Ssj = accounts[1]
		const addressxNzeSMZ = "0x0000000000000000000000000000000000000001"
		const boolyauUG7V = await Straight_Fire_FinanceziocGXW.transferFrom.call(addressP7aWX3A, addressvwY05bo, uintl1WCfBC, {from: accounts[0]});
		const boolO042aqI = await Straight_Fire_FinanceziocGXW.transferFrom.call(addressxtxOcq6, addressZl7ufmb, uintIcqhggb, {from: accounts[4]});
		const boolAvd8DGv = await Straight_Fire_FinanceziocGXW.transferFrom.call(addressxNzeSMZ, addressRTj0Ssj, uintVcxOoiB, {from: accounts[1]});
	});
})