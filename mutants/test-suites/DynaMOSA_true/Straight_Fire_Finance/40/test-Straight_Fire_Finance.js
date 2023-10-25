const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceK6yvS9z = await Straight_Fire_Finance.new({from: accounts[0]});
		const addressTZwDqgE = accounts[2]
		const uintSFhJt2i = BigInt("2027")
		const addresslShHOV0 = accounts[1]
		const addressMAeuNtb = accounts[3]
		const addressWix5Zy = accounts[5]
		const addressP5nvcXq = accounts[0]
		const addressHguY2Xh = accounts[2]
		const addresssNTT1i = accounts[1]
		const uint256x3y0XEA = await Straight_Fire_FinanceK6yvS9z.balanceOf.call(addressTZwDqgE, {from: "0x0000000000000000000000000000000000000001"});
		const boolcGOi8f = await Straight_Fire_FinanceK6yvS9z.transferFrom.call(addressMAeuNtb, addresslShHOV0, uintSFhJt2i, {from: accounts[2]});
		const uint256kZfROqw = await Straight_Fire_FinanceK6yvS9z.balanceOf.call(addressWix5Zy, {from: accounts[2]});
		const uint256uyvm0Cu = await Straight_Fire_FinanceK6yvS9z.balanceOf.call(addressP5nvcXq, {from: accounts[4]});
		const uintUciyrMG = await Straight_Fire_FinanceK6yvS9z.allowance.call(addresssNTT1i, addressHguY2Xh, {from: accounts[4]});

		assert.equal(boolcGOi8f, false)
		assert.equal(uint256kZfROqw, BigInt("0"))
		assert.equal(uint256uyvm0Cu, BigInt("80000000000000000000000"))
		assert.equal(uint256x3y0XEA, BigInt("0"))
		assert.equal(uintUciyrMG, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceRleMizY = await Straight_Fire_Finance.new({from: accounts[0]});
		const uintgq0x2O = BigInt("421")
		const addressJN6aBR = accounts[4]
		const addressCsPgZyd = accounts[1]
		const uintPdiNoYR = BigInt("1635")
		const addressMICQeC = accounts[1]
		const uintV4fID3f = BigInt("229")
		const addressYK2LYe = accounts[0]
		const addressPLXftVH = accounts[3]
		const addresstRo2hr = accounts[0]
		const boolDbWfR7l = await Straight_Fire_FinanceRleMizY.transferFrom.call(addressCsPgZyd, addressJN6aBR, uintgq0x2O, {from: accounts[4]});
		const boolS1b4b60 = await Straight_Fire_FinanceRleMizY.transfer.call(addressMICQeC, uintPdiNoYR, {from: accounts[2]});
		const booln9Qa98U = await Straight_Fire_FinanceRleMizY.transfer.call(addressYK2LYe, uintV4fID3f, {from: accounts[0]});
		const uintBiXaTvk = await Straight_Fire_FinanceRleMizY.allowance.call(addresstRo2hr, addressPLXftVH, {from: accounts[1]});

		assert.equal(boolDbWfR7l, false)
		assert.equal(boolS1b4b60, false)
		assert.equal(booln9Qa98U, true)
		assert.equal(uintBiXaTvk, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancebNS46rr = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintKFh18lU = BigInt("1644")
		const addressFMwjSnK = "0x0000000000000000000000000000000000000001"
		const addressjRhrxYJ = accounts[4]
		const addressntLafF4 = accounts[4]
		const addressEwwMsOj = accounts[1]
		const addressB6qE7QK = accounts[4]
		const uintpQcNUQX = BigInt("242")
		const addressXeu39lW = accounts[0]
		const addresslGHxKuZ = accounts[1]
		const boolEYsxEJx = await Straight_Fire_FinancebNS46rr.transferFrom.call(addressjRhrxYJ, addressFMwjSnK, uintKFh18lU, {from: accounts[5]});
		const uintAFzy9wu = await Straight_Fire_FinancebNS46rr.allowance.call(addressEwwMsOj, addressntLafF4, {from: accounts[1]});
		const uint256Wv0otvR = await Straight_Fire_FinancebNS46rr.balanceOf.call(addressB6qE7QK, {from: accounts[1]});
		const boolU8cz1gb = await Straight_Fire_FinancebNS46rr.transferFrom.call(addresslGHxKuZ, addressXeu39lW, uintpQcNUQX, {from: accounts[4]});
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancewgA66av = await Straight_Fire_Finance.new({from: accounts[2]});
		const uintfSX68HU = BigInt("1307")
		const address7bzwh2 = accounts[4]
		const addressr0fhzx = accounts[2]
		const uintFshf5GT = BigInt("1329")
		const addressTjNIAWT = accounts[4]
		const addressdT5EJOF = accounts[1]
		const boolEYqzVyt = await Straight_Fire_FinancewgA66av.transferFrom.call(addressr0fhzx, address7bzwh2, uintfSX68HU, {from: accounts[2]});
		const uint256sc15jMt = await Straight_Fire_FinancewgA66av.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolhwXHjU = await Straight_Fire_FinancewgA66av.transferFrom.call(addressdT5EJOF, addressTjNIAWT, uintFshf5GT, {from: accounts[3]});
		const uint256U4kkAWm = await Straight_Fire_FinancewgA66av.totalSupply.call({from: accounts[2]});

		assert.equal(boolEYqzVyt, false)
		assert.equal(boolhwXHjU, false)
		assert.equal(uint256U4kkAWm, BigInt("80000000000000000000000"))
		assert.equal(uint256sc15jMt, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceBAu4a1m = await Straight_Fire_Finance.new({from: accounts[0]});
		const addressvuGRdsx = accounts[1]
		const uintgfeRk6U = BigInt("643")
		const addressLNv79Vn = accounts[2]
		const uint256T3g9ThH = await Straight_Fire_FinanceBAu4a1m.balanceOf.call(addressvuGRdsx, {from: accounts[3]});
		const uint256bAbgwfd = await Straight_Fire_FinanceBAu4a1m.totalSupply.call({from: accounts[4]});
		const boolt3ordS6 = await Straight_Fire_FinanceBAu4a1m.approve.call(addressLNv79Vn, uintgfeRk6U, {from: accounts[4]});

		assert.equal(boolt3ordS6, true)
		assert.equal(uint256T3g9ThH, BigInt("0"))
		assert.equal(uint256bAbgwfd, BigInt("80000000000000000000000"))
	});
})