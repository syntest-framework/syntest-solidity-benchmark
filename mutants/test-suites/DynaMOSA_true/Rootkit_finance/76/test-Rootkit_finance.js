const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeSaSLvI8 = await Rootkit_finance.new({from: accounts[5]});
		const uintefE9WP = BigInt("1307")
		const addressYjkbbg = accounts[4]
		const addressv6Ubsh5 = accounts[0]
		const uintzpaztWN = BigInt("1782")
		const addresscqWkJO8 = accounts[2]
		const boolrJibt4z = await Rootkit_financeSaSLvI8.transferFrom.call(addressv6Ubsh5, addressYjkbbg, uintefE9WP, {from: "0x0000000000000000000000000000000000000001"});
		const bool5vUY1y = await Rootkit_financeSaSLvI8.transfer.call(addresscqWkJO8, uintzpaztWN, {from: accounts[1]});

		assert.equal(bool5vUY1y, false)
		assert.equal(boolrJibt4z, false)
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeXdYUDKg = await Rootkit_finance.new({from: accounts[2]});
		const addressQLMPSf7 = accounts[0]
		const addressUD2sAjL = accounts[0]
		const addressMeIYcu5 = accounts[4]
		const uint256uD7JXun = await Rootkit_financeXdYUDKg.balanceOf.call(addressQLMPSf7, {from: accounts[2]});
		const uintQquFLlL = await Rootkit_financeXdYUDKg.allowance.call(addressMeIYcu5, addressUD2sAjL, {from: accounts[2]});
		const uint256prnVC3y = await Rootkit_financeXdYUDKg.totalSupply.call({from: accounts[0]});

		assert.equal(uint256prnVC3y, BigInt("10000000000000000000000"))
		assert.equal(uint256uD7JXun, BigInt("0"))
		assert.equal(uintQquFLlL, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeLtCHB5a = await Rootkit_finance.new({from: accounts[3]});
		const uint37HGed = BigInt("587")
		const addressg6cca2X = "0x0000000000000000000000000000000000000001"
		const addressUfnqaGD = accounts[0]
		const uintZo2rbhu = BigInt("1419")
		const addressc7ur84 = accounts[1]
		const uintNtZzoEp = BigInt("736")
		const addressDOux9ZJ = accounts[4]
		const addressQhYKs3Z = accounts[3]
		const uintgG5OuoL = BigInt("1785")
		const addressXj9y4qN = accounts[4]
		const boollPnH5qt = await Rootkit_financeLtCHB5a.transferFrom.call(addressUfnqaGD, addressg6cca2X, uint37HGed, {from: accounts[1]});
		const boolGODURFv = await Rootkit_financeLtCHB5a.approve.call(addressc7ur84, uintZo2rbhu, {from: accounts[1]});
		const booljVUGq1B = await Rootkit_financeLtCHB5a.transferFrom.call(addressQhYKs3Z, addressDOux9ZJ, uintNtZzoEp, {from: accounts[4]});
		const boolmZq4bVp = await Rootkit_financeLtCHB5a.transfer.call(addressXj9y4qN, uintgG5OuoL, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolGODURFv, true)
		assert.equal(booljVUGq1B, false)
		assert.equal(boollPnH5qt, false)
		assert.equal(boolmZq4bVp, false)
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financexEPbGj = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVaho0gb = BigInt("160")
		const addressi0mTogK = accounts[2]
		const addressy45Fe38 = accounts[1]
		const addressB6cpYTG = accounts[3]
		const uintkeTj2cj = BigInt("492")
		const addressEpnGUg0 = accounts[4]
		const addressGcO6Vre = accounts[3]
		const boolxJOLzB0 = await Rootkit_financexEPbGj.transfer.call(addressi0mTogK, uintVaho0gb, {from: accounts[3]});
		const uinteqRlMs = await Rootkit_financexEPbGj.allowance.call(addressB6cpYTG, addressy45Fe38, {from: accounts[4]});
		const uint256CoaRbBU = await Rootkit_financexEPbGj.totalSupply.call({from: accounts[5]});
		const boolSBCFIlQ = await Rootkit_financexEPbGj.transferFrom.call(addressGcO6Vre, addressEpnGUg0, uintkeTj2cj, {from: accounts[3]});
	});
})