const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financepfOZqgI = await Rootkit_finance.new({from: accounts[5]});
		const uintTZIXxP4 = BigInt("1419")
		const addressTfNIS13 = accounts[2]
		const addressrCCIhW = "0x0000000000000000000000000000000000000001"
		const uintVjexQTd = BigInt("846")
		const addressxSebvT4 = accounts[1]
		const addressFq8nnmw = accounts[2]
		const addresshSoUiRW = accounts[4]
		const addressHQD3djl = accounts[3]
		const boolnI1291 = await Rootkit_financepfOZqgI.transferFrom.call(addressrCCIhW, addressTfNIS13, uintTZIXxP4, {from: accounts[1]});
		const boolaeJMD7A = await Rootkit_financepfOZqgI.transferFrom.call(addressFq8nnmw, addressxSebvT4, uintVjexQTd, {from: accounts[3]});
		const uint5y2K6N = await Rootkit_financepfOZqgI.allowance.call(addressHQD3djl, addresshSoUiRW, {from: accounts[0]});

		assert.equal(boolaeJMD7A, false)
		assert.equal(boolnI1291, false)
		assert.equal(uint5y2K6N, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financekAkb3s = await Rootkit_finance.new({from: accounts[0]});
		const uintIlGbo37 = BigInt("673")
		const addressOkQ54Sv = accounts[5]
		const uintz17CJl = BigInt("1703")
		const addressfMxJJQJ = accounts[4]
		const addressRDQjf0K = accounts[2]
		const uintlcoFOG = BigInt("1261")
		const addressZzqyfhC = "0x0000000000000000000000000000000000000001"
		const boolqTcVvk = await Rootkit_financekAkb3s.transfer.call(addressOkQ54Sv, uintIlGbo37, {from: accounts[3]});
		const uint256sVUhsP = await Rootkit_financekAkb3s.totalSupply.call({from: accounts[0]});
		const boolTqqbpNL = await Rootkit_financekAkb3s.transferFrom.call(addressRDQjf0K, addressfMxJJQJ, uintz17CJl, {from: accounts[1]});
		const boolFQ2Vp8y = await Rootkit_financekAkb3s.approve.call(addressZzqyfhC, uintlcoFOG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFQ2Vp8y, true)
		assert.equal(boolTqqbpNL, false)
		assert.equal(boolqTcVvk, false)
		assert.equal(uint256sVUhsP, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeBlmB8Hp = await Rootkit_finance.new({from: accounts[3]});
		const addressJ5Cd8bw = accounts[4]
		const addressBrRSZka = "0x0000000000000000000000000000000000000001"
		const addressEoo1bXk = accounts[0]
		const uintIP7O6e = BigInt("767")
		const addressYV3F9Uh = accounts[4]
		const uint256Ol6sivQ = await Rootkit_financeBlmB8Hp.balanceOf.call(addressJ5Cd8bw, {from: accounts[2]});
		const uint256hkwrbWL = await Rootkit_financeBlmB8Hp.balanceOf.call(addressBrRSZka, {from: accounts[5]});
		const uint256lwTNajA = await Rootkit_financeBlmB8Hp.balanceOf.call(addressEoo1bXk, {from: accounts[4]});
		const boolyD8PksU = await Rootkit_financeBlmB8Hp.approve.call(addressYV3F9Uh, uintIP7O6e, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolyD8PksU, true)
		assert.equal(uint256Ol6sivQ, BigInt("0"))
		assert.equal(uint256hkwrbWL, BigInt("0"))
		assert.equal(uint256lwTNajA, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financegnJ8ATe = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressoJZXwYy = "0x0000000000000000000000000000000000000001"
		const addressN0PNhxm = accounts[1]
		const addressFbyWuqK = accounts[1]
		const uintKlGlRDC = await Rootkit_financegnJ8ATe.allowance.call(addressN0PNhxm, addressoJZXwYy, {from: accounts[1]});
		const uint256bfrougI = await Rootkit_financegnJ8ATe.balanceOf.call(addressFbyWuqK, {from: accounts[4]});
	});
})