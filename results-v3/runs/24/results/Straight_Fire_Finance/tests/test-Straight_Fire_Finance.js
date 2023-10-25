const Straight_Fire_Finance = artifacts.require("Straight_Fire_Finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Straight_Fire_Finance', (accounts) => {
	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinancepPnhdwj = await Straight_Fire_Finance.new({from: accounts[0]});
		const addressAJfkmYM = accounts[0]
		const uintFJlALz3 = BigInt("805")
		const addressp8HgSn = "0x0000000000000000000000000000000000000001"
		const addressj4QC80 = accounts[4]
		const uint256v0NqIY = await Straight_Fire_FinancepPnhdwj.balanceOf.call(addressAJfkmYM, {from: accounts[1]});
		const booloXlyY4k = await Straight_Fire_FinancepPnhdwj.transferFrom.call(addressj4QC80, addressp8HgSn, uintFJlALz3, {from: accounts[2]});

		assert.equal(booloXlyY4k, false)
		assert.equal(uint256v0NqIY, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceC4IdiZn = await Straight_Fire_Finance.new({from: accounts[2]});
		const uintcEyFKn6 = BigInt("1571")
		const addressFQvjRvh = accounts[1]
		const uintxaX9bGT = BigInt("124")
		const addressHvc5oGd = "0x0000000000000000000000000000000000000001"
		const addressHDW2HnI = accounts[2]
		const uintUUdAXOI = BigInt("1077")
		const addressRtmlKoJ = accounts[3]
		const addressP546bkH = accounts[5]
		const booluQ4azCp = await Straight_Fire_FinanceC4IdiZn.transfer.call(addressFQvjRvh, uintcEyFKn6, {from: accounts[0]});
		const boolWb4N9gi = await Straight_Fire_FinanceC4IdiZn.transferFrom.call(addressHDW2HnI, addressHvc5oGd, uintxaX9bGT, {from: "0x0000000000000000000000000000000000000001"});
		const boolcOq2eFa = await Straight_Fire_FinanceC4IdiZn.transferFrom.call(addressP546bkH, addressRtmlKoJ, uintUUdAXOI, {from: accounts[4]});
		const uint256fqy6FKL = await Straight_Fire_FinanceC4IdiZn.totalSupply.call({from: accounts[0]});

		assert.equal(boolWb4N9gi, false)
		assert.equal(boolcOq2eFa, false)
		assert.equal(booluQ4azCp, false)
		assert.equal(uint256fqy6FKL, BigInt("80000000000000000000000"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceiHgXto = await Straight_Fire_Finance.new({from: accounts[2]});
		const uintO944UUJ = BigInt("1376")
		const addressgFNP4wg = accounts[3]
		const uintRhqFGlg = BigInt("204")
		const addressXb3YN9P = accounts[2]
		const addressu4c22UN = "0x0000000000000000000000000000000000000001"
		const addressIgutAFs = accounts[2]
		const uintOfdmTOp = BigInt("2013")
		const addressTcG9a68 = "0x0000000000000000000000000000000000000001"
		const addressX3LeSGP = accounts[5]
		const addressZW4UZXn = accounts[3]
		const address8biYDe = accounts[4]
		const boolsukojY = await Straight_Fire_FinanceiHgXto.approve.call(addressgFNP4wg, uintO944UUJ, {from: accounts[2]});
		const boolEhgqmKH = await Straight_Fire_FinanceiHgXto.transfer.call(addressXb3YN9P, uintRhqFGlg, {from: accounts[0]});
		const uintBaLDpcV = await Straight_Fire_FinanceiHgXto.allowance.call(addressIgutAFs, addressu4c22UN, {from: accounts[1]});
		const uint256iHR29Nu = await Straight_Fire_FinanceiHgXto.totalSupply.call({from: accounts[5]});
		const boolSHsQExE = await Straight_Fire_FinanceiHgXto.transferFrom.call(addressX3LeSGP, addressTcG9a68, uintOfdmTOp, {from: accounts[1]});
		const uinthRgETtJ = await Straight_Fire_FinanceiHgXto.allowance.call(address8biYDe, addressZW4UZXn, {from: accounts[3]});

		assert.equal(boolEhgqmKH, false)
		assert.equal(boolSHsQExE, false)
		assert.equal(boolsukojY, true)
		assert.equal(uint256iHR29Nu, BigInt("80000000000000000000000"))
		assert.equal(uintBaLDpcV, BigInt("0"))
		assert.equal(uinthRgETtJ, BigInt("0"))
	});

	it('test for Straight_Fire_Finance', async () => {
		const Straight_Fire_FinanceN5m0pk = await Straight_Fire_Finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintHwpSN5B = BigInt("1237")
		const addressO1taoeL = accounts[4]
		const addressC7cXxqh = accounts[3]
		const uint7Brl8L = BigInt("1827")
		const addressCh7K87 = accounts[2]
		const addressAi2gjKm = accounts[4]
		const addressfUaMY7 = accounts[0]
		const boolUN3vQq = await Straight_Fire_FinanceN5m0pk.transferFrom.call(addressC7cXxqh, addressO1taoeL, uintHwpSN5B, {from: accounts[4]});
		const boolR9g8Gw = await Straight_Fire_FinanceN5m0pk.transferFrom.call(addressAi2gjKm, addressCh7K87, uint7Brl8L, {from: accounts[4]});
		const uint256wohH3z = await Straight_Fire_FinanceN5m0pk.balanceOf.call(addressfUaMY7, {from: accounts[4]});
		const uint256PFIDs7c = await Straight_Fire_FinanceN5m0pk.totalSupply.call({from: accounts[2]});
	});
})