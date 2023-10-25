const Core_Fi_V3 = artifacts.require("Core_Fi_V3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Core_Fi_V3', (accounts) => {
	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3azVzYLH = await Core_Fi_V3.new({from: accounts[4]});
		const uintBeLDFO8 = BigInt("1488")
		const addressFbEUmPV = accounts[4]
		const uintoY7iZiJ = BigInt("1967")
		const addressIhOwpRS = accounts[4]
		const boolt3u3iOR = await Core_Fi_V3azVzYLH.approve.call(addressFbEUmPV, uintBeLDFO8, {from: accounts[2]});
		const boolcXth1l4 = await Core_Fi_V3azVzYLH.approve.call(addressIhOwpRS, uintoY7iZiJ, {from: accounts[3]});

		assert.equal(boolcXth1l4, true)
		assert.equal(boolt3u3iOR, true)
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3ehU9NGf = await Core_Fi_V3.new({from: accounts[5]});
		const addressHJrgCM = accounts[5]
		const addresss0hK9b0 = accounts[0]
		const uintQ8EGy7W = BigInt("1915")
		const addressUKUIU03 = accounts[0]
		const uintqoPsxxl = BigInt("1100")
		const addressjwfF5wO = accounts[5]
		const addressNS2le2 = accounts[2]
		const uint256HX5t2DF = await Core_Fi_V3ehU9NGf.balanceOf.call(addressHJrgCM, {from: accounts[3]});
		const uint256aBN9MSD = await Core_Fi_V3ehU9NGf.balanceOf.call(addresss0hK9b0, {from: accounts[1]});
		const boolmQjxhD = await Core_Fi_V3ehU9NGf.transfer.call(addressUKUIU03, uintQ8EGy7W, {from: accounts[0]});
		const boolY4q94R = await Core_Fi_V3ehU9NGf.transferFrom.call(addressNS2le2, addressjwfF5wO, uintqoPsxxl, {from: accounts[3]});

		assert.equal(boolY4q94R, false)
		assert.equal(boolmQjxhD, false)
		assert.equal(uint256HX5t2DF, BigInt("84000000000000000000000"))
		assert.equal(uint256aBN9MSD, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3qdD0rQ9 = await Core_Fi_V3.new({from: "0x0000000000000000000000000000000000000001"});
		const address2FqaSh = accounts[4]
		const addressa7H36T = accounts[4]
		const uintuLNzs1 = BigInt("1506")
		const addressE5omUQj = accounts[0]
		const address6onWx1 = accounts[1]
		const uint256mV0iIDh = await Core_Fi_V3qdD0rQ9.balanceOf.call(address2FqaSh, {from: accounts[0]});
		const uint256kH8bKTh = await Core_Fi_V3qdD0rQ9.balanceOf.call(addressa7H36T, {from: accounts[2]});
		const boolmgAKsBD = await Core_Fi_V3qdD0rQ9.transferFrom.call(address6onWx1, addressE5omUQj, uintuLNzs1, {from: accounts[0]});
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V30Z9AET = await Core_Fi_V3.new({from: accounts[4]});
		const addressNlZheq = accounts[5]
		const addressLTFXyLk = accounts[5]
		const addressbSiIXmO = accounts[2]
		const uintcIB05c = BigInt("901")
		const addressxwRGeVK = accounts[2]
		const addressSeP23Xx = accounts[4]
		const uintZ43EBat = BigInt("986")
		const addressV2z1M88 = accounts[3]
		const addresslTZ0YA5 = "0x0000000000000000000000000000000000000001"
		const uintMP8zHRc = await Core_Fi_V30Z9AET.allowance.call(addressLTFXyLk, addressNlZheq, {from: accounts[4]});
		const uint256yh9U0U1 = await Core_Fi_V30Z9AET.balanceOf.call(addressbSiIXmO, {from: accounts[2]});
		const bool3PkIAh = await Core_Fi_V30Z9AET.transferFrom.call(addressSeP23Xx, addressxwRGeVK, uintcIB05c, {from: accounts[4]});
		const boolC8Rqbd2 = await Core_Fi_V30Z9AET.transferFrom.call(addresslTZ0YA5, addressV2z1M88, uintZ43EBat, {from: accounts[0]});

		assert.equal(bool3PkIAh, false)
		assert.equal(boolC8Rqbd2, false)
		assert.equal(uint256yh9U0U1, BigInt("0"))
		assert.equal(uintMP8zHRc, BigInt("0"))
	});

	it('test for Core_Fi_V3', async () => {
		const Core_Fi_V3WLmnVG = await Core_Fi_V3.new({from: accounts[2]});
		const addressUHNJLS = accounts[0]
		const addressJuxDzSW = accounts[4]
		const addresss80aMA = accounts[3]
		const uint256Nmbc2fa = await Core_Fi_V3WLmnVG.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256GRgZaEO = await Core_Fi_V3WLmnVG.totalSupply.call({from: accounts[1]});
		const uintooC1Gk = await Core_Fi_V3WLmnVG.allowance.call(addressJuxDzSW, addressUHNJLS, {from: accounts[2]});
		const uint256j2rQIoi = await Core_Fi_V3WLmnVG.balanceOf.call(addresss80aMA, {from: accounts[3]});

		assert.equal(uint256GRgZaEO, BigInt("84000000000000000000000"))
		assert.equal(uint256Nmbc2fa, BigInt("84000000000000000000000"))
		assert.equal(uint256j2rQIoi, BigInt("0"))
		assert.equal(uintooC1Gk, BigInt("0"))
	});
})