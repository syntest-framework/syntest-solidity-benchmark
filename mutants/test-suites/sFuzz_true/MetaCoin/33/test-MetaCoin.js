const MetaCoin = artifacts.require("MetaCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MetaCoin', (accounts) => {
	it('test for MetaCoin', async () => {
		const MetaCoinSFftL55 = await MetaCoin.new({from: accounts[3]});
		const uintbddAxOJ = BigInt("914")
		const addressfTSp3R = accounts[0]
		const uintRZQSADt = BigInt("1663")
		const addressZOMBVHj = accounts[0]
		const boolTRFgNF = await MetaCoinSFftL55.sendCoin.call(addressfTSp3R, uintbddAxOJ, {from: accounts[0]});
		const boolmHcFImP = await MetaCoinSFftL55.sendCoin.call(addressZOMBVHj, uintRZQSADt, {from: accounts[5]});

		assert.equal(boolTRFgNF, false)
		assert.equal(boolmHcFImP, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinFkmZmrK = await MetaCoin.new({from: accounts[4]});
		const uintxe6b0rD = BigInt("974")
		const addressUodOflT = accounts[3]
		const uintp1Nk34O = BigInt("27")
		const addressDFEbFfg = accounts[4]
		const uints6iNDAj = BigInt("1588")
		const addressEKYkCzk = accounts[3]
		const uinte4H5rEq = BigInt("1746")
		const addresstgLCiRK = accounts[2]
		const uintBxjdd7D = BigInt("1036")
		const addressLiO7YFG = accounts[3]
		const boole6mxNo = await MetaCoinFkmZmrK.sendCoin.call(addressUodOflT, uintxe6b0rD, {from: "0x0000000000000000000000000000000000000001"});
		const boolHgUyqXH = await MetaCoinFkmZmrK.sendCoin.call(addressDFEbFfg, uintp1Nk34O, {from: accounts[5]});
		const boolfY0Q8K = await MetaCoinFkmZmrK.sendCoin.call(addressEKYkCzk, uints6iNDAj, {from: "0x0000000000000000000000000000000000000001"});
		const boolKkCDhm = await MetaCoinFkmZmrK.sendCoin.call(addresstgLCiRK, uinte4H5rEq, {from: accounts[4]});
		const boolXD1xMjy = await MetaCoinFkmZmrK.sendCoin.call(addressLiO7YFG, uintBxjdd7D, {from: accounts[2]});

		assert.equal(boolHgUyqXH, false)
		assert.equal(boolKkCDhm, true)
		assert.equal(boolXD1xMjy, false)
		assert.equal(boole6mxNo, false)
		assert.equal(boolfY0Q8K, false)
	});

	it('test for MetaCoin', async () => {
		const MetaCoinG7avX8p = await MetaCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPm5vRyj = BigInt("1619")
		const addressLMzRZCf = accounts[1]
		const uinttSnBZwT = BigInt("83")
		const addressuXyDHcY = accounts[3]
		const boolaoHoQJ3 = await MetaCoinG7avX8p.sendCoin.call(addressLMzRZCf, uintPm5vRyj, {from: accounts[0]});
		const boolzdNx0am = await MetaCoinG7avX8p.sendCoin.call(addressuXyDHcY, uinttSnBZwT, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MetaCoin', async () => {
		const MetaCoinFkmZmrK = await MetaCoin.new({from: accounts[4]});
		const uints4Tp7Dc = BigInt("3")
		const addressC7H4C8y = accounts[6]
		const uintKG6Iztm = BigInt("265")
		const addressXHwEP7O = accounts[2]
		const uintsuKBKHP = BigInt("1268")
		const addresskfL1kZG = accounts[4]
		const booljznHYj3 = await MetaCoinFkmZmrK.sendCoin.call(addressC7H4C8y, uints4Tp7Dc, {from: accounts[4]});
		const boolvSUHhFm = await MetaCoinFkmZmrK.sendCoin.call(addressXHwEP7O, uintKG6Iztm, {from: accounts[0]});
		const boolTRzZdWo = await MetaCoinFkmZmrK.sendCoin.call(addresskfL1kZG, uintsuKBKHP, {from: accounts[2]});

		assert.equal(boolTRzZdWo, false)
		assert.equal(booljznHYj3, true)
		assert.equal(boolvSUHhFm, false)
	});
})