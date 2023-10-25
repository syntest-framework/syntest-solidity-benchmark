const Rootkit_finance = artifacts.require("Rootkit_finance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rootkit_finance', (accounts) => {
	it('test for Rootkit_finance', async () => {
		const Rootkit_financeIIW0EcC = await Rootkit_finance.new({from: accounts[3]});
		const uintiBX3AUo = BigInt("1762")
		const addressgrgthzZ = accounts[1]
		const addressJ9U2PsJ = accounts[4]
		const addressy3pw46m = accounts[3]
		const uintwVkZFX9 = BigInt("272")
		const addressySgUHzr = accounts[0]
		const boolXzQtk2T = await Rootkit_financeIIW0EcC.transferFrom.call(addressJ9U2PsJ, addressgrgthzZ, uintiBX3AUo, {from: accounts[0]});
		const uint256fKMY9EQ = await Rootkit_financeIIW0EcC.balanceOf.call(addressy3pw46m, {from: accounts[3]});
		const boolvIBynsm = await Rootkit_financeIIW0EcC.transfer.call(addressySgUHzr, uintwVkZFX9, {from: accounts[3]});

		assert.equal(boolXzQtk2T, false)
		assert.equal(boolvIBynsm, true)
		assert.equal(uint256fKMY9EQ, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeFuNHnE1 = await Rootkit_finance.new({from: accounts[0]});
		const uintnQnDfod = BigInt("1327")
		const addressI9ggqK1 = accounts[0]
		const uintn6VUqIr = BigInt("1022")
		const addressTYCghAW = accounts[0]
		const addressQfSRQWE = accounts[3]
		const boolx4cAGHZ = await Rootkit_financeFuNHnE1.transfer.call(addressI9ggqK1, uintnQnDfod, {from: accounts[0]});
		const uint256JR2RPcE = await Rootkit_financeFuNHnE1.totalSupply.call({from: accounts[3]});
		const boolH8sMdyZ = await Rootkit_financeFuNHnE1.approve.call(addressTYCghAW, uintn6VUqIr, {from: accounts[0]});
		const uint256HOmmhw0 = await Rootkit_financeFuNHnE1.balanceOf.call(addressQfSRQWE, {from: accounts[1]});

		assert.equal(boolH8sMdyZ, true)
		assert.equal(boolx4cAGHZ, true)
		assert.equal(uint256HOmmhw0, BigInt("0"))
		assert.equal(uint256JR2RPcE, BigInt("10000000000000000000000"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeKwwVMs = await Rootkit_finance.new({from: accounts[1]});
		const uintEJ4j7tM = BigInt("1163")
		const addressMOyejey = accounts[5]
		const uintGqgD3XL = BigInt("604")
		const addressPPA1qaF = accounts[3]
		const addresssIVyvqv = accounts[4]
		const addressSwJzLQU = accounts[5]
		const addresssOmUOJN = accounts[3]
		const addressdaXuJEN = accounts[0]
		const uintUXMjISO = BigInt("1422")
		const addressJjqNsNt = accounts[5]
		const booloYc5BJ9 = await Rootkit_financeKwwVMs.approve.call(addressMOyejey, uintEJ4j7tM, {from: accounts[1]});
		const boolQzebfTg = await Rootkit_financeKwwVMs.transferFrom.call(addresssIVyvqv, addressPPA1qaF, uintGqgD3XL, {from: accounts[1]});
		const uintb0ZWdEn = await Rootkit_financeKwwVMs.allowance.call(addresssOmUOJN, addressSwJzLQU, {from: accounts[4]});
		const uint256S7Etka4 = await Rootkit_financeKwwVMs.totalSupply.call({from: accounts[5]});
		const uint256DWs4zxO = await Rootkit_financeKwwVMs.balanceOf.call(addressdaXuJEN, {from: accounts[4]});
		const boolqIQ7tKv = await Rootkit_financeKwwVMs.transfer.call(addressJjqNsNt, uintUXMjISO, {from: accounts[5]});

		assert.equal(boolQzebfTg, false)
		assert.equal(booloYc5BJ9, true)
		assert.equal(boolqIQ7tKv, false)
		assert.equal(uint256DWs4zxO, BigInt("0"))
		assert.equal(uint256S7Etka4, BigInt("10000000000000000000000"))
		assert.equal(uintb0ZWdEn, BigInt("0"))
	});

	it('test for Rootkit_finance', async () => {
		const Rootkit_financeyUz3vlW = await Rootkit_finance.new({from: "0x0000000000000000000000000000000000000001"});
		const addressl61BslK = accounts[1]
		const uintSumc6WE = BigInt("617")
		const addresspd1a9yA = accounts[1]
		const addressfrl2wbz = accounts[5]
		const uintKxFimCW = BigInt("2")
		const addressXA3feCd = accounts[0]
		const uint256yCWoOSP = await Rootkit_financeyUz3vlW.balanceOf.call(addressl61BslK, {from: accounts[1]});
		const boolm4egfJU = await Rootkit_financeyUz3vlW.transferFrom.call(addressfrl2wbz, addresspd1a9yA, uintSumc6WE, {from: accounts[1]});
		const boolF9U8jKm = await Rootkit_financeyUz3vlW.transfer.call(addressXA3feCd, uintKxFimCW, {from: accounts[1]});
		const uint256MG9fbvC = await Rootkit_financeyUz3vlW.totalSupply.call({from: accounts[4]});
	});
})