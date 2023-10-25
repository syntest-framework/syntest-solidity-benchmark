const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeF8hIC9 = await Rootkit_finance.new({from: accounts[4]});
		const uintC1Zyqvm = BigInt("1027")
		const addresstIWsbYy = accounts[4]
		const addresswFp9sjs = "0x0000000000000000000000000000000000000001"
		const uintimhCWDp = BigInt("1771")
		const addressZ8qGpth = accounts[1]
		const addresshc7x159 = accounts[2]
		const uintNOfR2MD = BigInt("41")
		const addressSotzgMm = accounts[3]
		const addressyqlvE6Y = accounts[3]
		const address5EUF4I = accounts[4]
		const uintDx4wXsR = BigInt("174")
		const addressSudhASR = "0x0000000000000000000000000000000000000001"
		const addressiO1WGDb = accounts[0]
		const uintGN6cnh0 = BigInt("58")
		const addresscUBfGbb = accounts[0]
		const boolEJ7Bi5K = await Rootkit_financeF8hIC9.transferFrom.call(addresswFp9sjs, addresstIWsbYy, uintC1Zyqvm, {from: accounts[1]});
		const boolw5fMvMR = await Rootkit_financeF8hIC9.transferFrom.call(addresshc7x159, addressZ8qGpth, uintimhCWDp, {from: accounts[1]});
		const booljQjhyBb = await Rootkit_financeF8hIC9.transferFrom.call(addressyqlvE6Y, addressSotzgMm, uintNOfR2MD, {from: accounts[4]});
		const uint256FvMtRap = await Rootkit_financeF8hIC9.balanceOf.call(address5EUF4I, {from: accounts[3]});
		const boolMEpcLld = await Rootkit_financeF8hIC9.transferFrom.call(addressiO1WGDb, addressSudhASR, uintDx4wXsR, {from: accounts[4]});
		const boolwpkKoF = await Rootkit_financeF8hIC9.transfer.call(addresscUBfGbb, uintGN6cnh0, {from: accounts[3]});

		assert.equal(boolEJ7Bi5K, false)
		assert.equal(boolMEpcLld, false)
		assert.equal(booljQjhyBb, false)
		assert.equal(boolw5fMvMR, false)
		assert.equal(boolwpkKoF, false)
		assert.equal(uint256FvMtRap, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeD9U3AGf = await Rootkit_finance.new({from: accounts[0]});
		const uintDn9VZBz = BigInt("423")
		const addresssjx5GEI = "0x0000000000000000000000000000000000000001"
		const addresskqBJHHe = accounts[0]
		const addressAAyHNHJ = accounts[4]
		const uintYkYMOCv = BigInt("1879")
		const addressXwYexAD = accounts[5]
		const addresscV3C1Cs = accounts[1]
		const boolyq4ddpw = await Rootkit_financeD9U3AGf.transfer.call(addresssjx5GEI, uintDn9VZBz, {from: accounts[1]});
		const uint2560LdndW = await Rootkit_financeD9U3AGf.totalSupply.call({from: accounts[3]});
		const uint8exSyC = await Rootkit_financeD9U3AGf.allowance.call(addressAAyHNHJ, addresskqBJHHe, {from: accounts[2]});
		const boolFyLw3fm = await Rootkit_financeD9U3AGf.transferFrom.call(addresscV3C1Cs, addressXwYexAD, uintYkYMOCv, {from: accounts[0]});

		assert.equal(boolFyLw3fm, false)
		assert.equal(boolyq4ddpw, false)
		assert.equal(uint2560LdndW, BigInt("10000000000000000000000"))
		assert.equal(uint8exSyC, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeIUGc0Ni = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const uintymh55B = BigInt("1716")
		const addressGoYe8dW = accounts[2]
		const uintA6kFmI2 = BigInt("832")
		const addressQK5p629 = accounts[3]
		const uintTtuiwnI = BigInt("759")
		const addressTV20biX = accounts[2]
		const addressaEAADq8 = accounts[4]
		const addressGs0fna3 = accounts[2]
		const addressj9a3PN8 = accounts[5]
		const booloMFLRrX = await Rootkit_financeIUGc0Ni.transfer.call(addressGoYe8dW, uintymh55B, {from: accounts[3]});
		const boolkgR1Dou = await Rootkit_financeIUGc0Ni.approve.call(addressQK5p629, uintA6kFmI2, {from: accounts[2]});
		const boolbRMMn7S = await Rootkit_financeIUGc0Ni.transferFrom.call(addressaEAADq8, addressTV20biX, uintTtuiwnI, {from: "0x0000000000000000000000000000000000000001"});
		const uintJkMsd5H = await Rootkit_financeIUGc0Ni.allowance.call(addressj9a3PN8, addressGs0fna3, {from: accounts[0]});
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeVEgb3eu = await Rootkit_finance.new({from: accounts[0]});
		const uintyFdhqSH = BigInt("1638")
		const addressD97WbyH = accounts[4]
		const addressHLhNKXW = accounts[2]
		const addressfso9uQn = accounts[5]
		const addressNklXCvA = "0x0000000000000000000000000000000000000001"
		const uintIyNyXKF = BigInt("264")
		const addressrE2666y = accounts[5]
		const addressnQo0nza = accounts[4]
		const boolAWLfEYL = await Rootkit_financeVEgb3eu.approve.call(addressD97WbyH, uintyFdhqSH, {from: accounts[0]});
		const uint256iINMnP = await Rootkit_financeVEgb3eu.balanceOf.call(addressHLhNKXW, {from: accounts[2]});
		const uint256tWbsfXz = await Rootkit_financeVEgb3eu.balanceOf.call(addressfso9uQn, {from: accounts[4]});
		const uint256LjrkBta = await Rootkit_financeVEgb3eu.balanceOf.call(addressNklXCvA, {from: accounts[1]});
		const uint256g6aEIq = await Rootkit_financeVEgb3eu.totalSupply.call({from: accounts[2]});
		const boolxxYn2AB = await Rootkit_financeVEgb3eu.transferFrom.call(addressnQo0nza, addressrE2666y, uintIyNyXKF, {from: accounts[3]});

		assert.equal(boolAWLfEYL, true)
		assert.equal(boolxxYn2AB, false)
		assert.equal(uint256LjrkBta, BigInt("0"))
		assert.equal(uint256g6aEIq, BigInt("10000000000000000000000"))
		assert.equal(uint256iINMnP, BigInt("0"))
		assert.equal(uint256tWbsfXz, BigInt("0"))
	});
})