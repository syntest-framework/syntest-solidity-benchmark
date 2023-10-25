const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financexUF3dr8 = await Rootkit_finance.new({from: accounts[4]});
		const addresscF3ZVW1 = accounts[3]
		const uintgEOV8Q = BigInt("447")
		const addressgk2kgaq = accounts[3]
		const addressDrsHrIv = accounts[1]
		const addressG0HvS2 = accounts[1]
		const uintkRKNH7o = BigInt("835")
		const addressNkBZjVP = accounts[1]
		const addressA0oX61V = accounts[2]
		const uint256t3gdke8 = await Rootkit_financexUF3dr8.balanceOf.call(addresscF3ZVW1, {from: accounts[3]});
		const boolfJObT6u = await Rootkit_financexUF3dr8.approve.call(addressgk2kgaq, uintgEOV8Q, {from: accounts[5]});
		const uintKy6SEt7 = await Rootkit_financexUF3dr8.allowance.call(addressG0HvS2, addressDrsHrIv, {from: accounts[3]});
		const boolQ3SybFL = await Rootkit_financexUF3dr8.transferFrom.call(addressA0oX61V, addressNkBZjVP, uintkRKNH7o, {from: accounts[1]});

		assert.equal(boolQ3SybFL, false)
		assert.equal(boolfJObT6u, true)
		assert.equal(uint256t3gdke8, BigInt("0"))
		assert.equal(uintKy6SEt7, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeudGH4dY = await Rootkit_finance.new({from: accounts[4]});
		const addressuGMKvJ = accounts[0]
		const uintA8GojYG = BigInt("709")
		const addressKUd7rV6 = accounts[5]
		const uintBI7ENc = BigInt("1658")
		const addressHIgzyBo = accounts[0]
		const uint256a7WtcAp = await Rootkit_financeudGH4dY.balanceOf.call(addressuGMKvJ, {from: accounts[4]});
		const booliemgF9q = await Rootkit_financeudGH4dY.transfer.call(addressKUd7rV6, uintA8GojYG, {from: accounts[3]});
		const boolz7VzJ5E = await Rootkit_financeudGH4dY.transfer.call(addressHIgzyBo, uintBI7ENc, {from: accounts[3]});

		assert.equal(booliemgF9q, false)
		assert.equal(boolz7VzJ5E, false)
		assert.equal(uint256a7WtcAp, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeonNRrTr = await Rootkit_finance.new({from: accounts[1]});
		const addresstD2cBAK = accounts[4]
		const uintdfjFoFd = BigInt("437")
		const addressZ9nPmEN = accounts[0]
		const addressfjL1KX = accounts[0]
		const uintWgVAAJT = BigInt("1458")
		const addressj45ENrL = accounts[0]
		const uint256WWZ6CFx = await Rootkit_financeonNRrTr.balanceOf.call(addresstD2cBAK, {from: accounts[2]});
		const boolGEHYDhR = await Rootkit_financeonNRrTr.transferFrom.call(addressfjL1KX, addressZ9nPmEN, uintdfjFoFd, {from: accounts[0]});
		const boolJjpkCcv = await Rootkit_financeonNRrTr.approve.call(addressj45ENrL, uintWgVAAJT, {from: accounts[1]});
		const uint256qx7yJnP = await Rootkit_financeonNRrTr.totalSupply.call({from: accounts[0]});

		assert.equal(boolGEHYDhR, false)
		assert.equal(boolJjpkCcv, true)
		assert.equal(uint256WWZ6CFx, BigInt("0"))
		assert.equal(uint256qx7yJnP, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeJtqmGku = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrHPuurx = BigInt("1033")
		const addressbL5yI1t = accounts[5]
		const addressEze6th8 = accounts[4]
		const addressXEcdPOt = accounts[0]
		const addressR6InvTA = accounts[0]
		const addressTEFzIpz = "0x0000000000000000000000000000000000000001"
		const addressD5W4Vb = accounts[5]
		const boolFLNLCaB = await Rootkit_financeJtqmGku.transferFrom.call(addressEze6th8, addressbL5yI1t, uintrHPuurx, {from: accounts[5]});
		const uintdrJwjz6 = await Rootkit_financeJtqmGku.allowance.call(addressR6InvTA, addressXEcdPOt, {from: accounts[1]});
		const uintqItQm42 = await Rootkit_financeJtqmGku.allowance.call(addressD5W4Vb, addressTEFzIpz, {from: accounts[4]});
	});
})