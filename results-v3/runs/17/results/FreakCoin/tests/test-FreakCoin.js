const FreakCoin = artifacts.require("FreakCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FreakCoin', (accounts) => {
	it('test for FreakCoin', async () => {
		const FreakCoinYmSKv2z = await FreakCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintQalwP5f = BigInt("161")
		const addressdQp4Llg = accounts[1]
		const addressy9WRHFj = await FreakCoinYmSKv2z.uniswapAddress.call({from: accounts[2]});
		const addressXr4Q0NN = await FreakCoinYmSKv2z.uniswapAddress.call({from: accounts[5]});
		const uint256FCIcxf1 = await FreakCoinYmSKv2z.totalSupply.call({from: accounts[4]});
		const boolyUOaje3 = await FreakCoinYmSKv2z.transfer.call(addressdQp4Llg, uintQalwP5f, {from: accounts[2]});
	});

	it('test for FreakCoin', async () => {
		const FreakCoinU5YkTc3 = await FreakCoin.new({from: accounts[3]});
		const address0qpk46 = accounts[2]
		const addressHXFTv7O = accounts[1]
		const uintEp4LEWM = BigInt("172")
		const addressDM4gPLA = accounts[2]
		const uint256tKRcJWK = await FreakCoinU5YkTc3.balanceOf.call(address0qpk46, {from: accounts[3]});
		const addressBYDEmZt = await FreakCoinU5YkTc3.uniswapAddress.call({from: accounts[5]});
		const uint256DyMZqS = await FreakCoinU5YkTc3.allUserBalances.call(addressHXFTv7O, {from: accounts[1]});
		const bool5gkq8i = await FreakCoinU5YkTc3.approve.call(addressDM4gPLA, uintEp4LEWM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressBYDEmZt, 0x0000000000000000000000000000000000000000)
		assert.equal(uint256tKRcJWK, BigInt("0"))
		await expect(FreakCoinU5YkTc3.allUserBalances.call(addressHXFTv7O, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinOmJZQhX = await FreakCoin.new({from: accounts[1]});
		const uintIllgrK5 = BigInt("130")
		const addressX6I6O8 = accounts[1]
		const addressJsqu0X = accounts[1]
		const addressURejnx2 = accounts[1]
		const addressxH4gEuS = await FreakCoinOmJZQhX.uniswapAddress.call({from: accounts[1]});
		const booldWVV87o = await FreakCoinOmJZQhX.transfer.call(addressX6I6O8, uintIllgrK5, {from: accounts[2]});
		const uint256aC7fedl = await FreakCoinOmJZQhX.allowance.call(addressURejnx2, addressJsqu0X, {from: accounts[1]});

		assert.equal(addressxH4gEuS, 0x0000000000000000000000000000000000000000)
		await expect(FreakCoinOmJZQhX.transfer.call(addressX6I6O8, uintIllgrK5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinfPg14Gy = await FreakCoin.new({from: accounts[4]});
		const addressuqaKUHY = accounts[5]
		const addressIBmcJe = accounts[3]
		const addressUqMPOpQ = accounts[3]
		const addressrUtG4JA = await FreakCoinfPg14Gy.setUniswapAddress.call(addressuqaKUHY, {from: accounts[0]});
		const uint256wt9gMLT = await FreakCoinfPg14Gy.allowance.call(addressUqMPOpQ, addressIBmcJe, {from: accounts[4]});
		const addressGVxbq9c = await FreakCoinfPg14Gy.uniswapAddress.call({from: accounts[1]});

		await expect(FreakCoinfPg14Gy.setUniswapAddress.call(addressuqaKUHY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinBarjXZ0 = await FreakCoin.new({from: accounts[3]});
		const uintcJeKvow = BigInt("1439")
		const addressY7eZes4 = accounts[2]
		const addresskZ0imi0 = accounts[1]
		const uintIgYZpiu = BigInt("1405")
		const addressUSgdapO = accounts[1]
		const addresshnJ7C0x = accounts[4]
		const addressbfYBKUd = accounts[5]
		const addressJCj5XUL = accounts[0]
		const addresssevXv7e = accounts[0]
		const addressRsXoqvj = accounts[4]
		const boolgR0Z2Id = await FreakCoinBarjXZ0.approve.call(addressY7eZes4, uintcJeKvow, {from: accounts[5]});
		const uint256TZR7k6F = await FreakCoinBarjXZ0.balanceOf.call(addresskZ0imi0, {from: accounts[4]});
		const boolOV37FVX = await FreakCoinBarjXZ0.transferFrom.call(addresshnJ7C0x, addressUSgdapO, uintIgYZpiu, {from: accounts[2]});
		const uint256wR4xXyL = await FreakCoinBarjXZ0.allUserBalances.call(addressbfYBKUd, {from: accounts[3]});
		const uint256rHG7fzY = await FreakCoinBarjXZ0.allowance.call(addresssevXv7e, addressJCj5XUL, {from: accounts[1]});
		const uint256w6c1c3m = await FreakCoinBarjXZ0.allUserBalances.call(addressRsXoqvj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolgR0Z2Id, true)
		assert.equal(uint256TZR7k6F, BigInt("0"))
		await expect(FreakCoinBarjXZ0.transferFrom.call(addresshnJ7C0x, addressUSgdapO, uintIgYZpiu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoineC0evlx = await FreakCoin.new({from: accounts[4]});
		const addressVfS3Fvw = accounts[5]
		const addressF8mgPvA = "0x0000000000000000000000000000000000000001"
		const addresslmiUMAY = accounts[0]
		const addressD1bS22c = accounts[2]
		const uint256KEfmKu8 = await FreakCoineC0evlx.allowance.call(addressF8mgPvA, addressVfS3Fvw, {from: accounts[2]});
		const uint256nrY3BbN = await FreakCoineC0evlx.allUserBalances.call(addresslmiUMAY, {from: accounts[5]});
		const uint256GrlkZFD = await FreakCoineC0evlx.balanceOf.call(addressD1bS22c, {from: accounts[4]});

		assert.equal(uint256KEfmKu8, BigInt("0"))
		await expect(FreakCoineC0evlx.allUserBalances.call(addresslmiUMAY, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinOmJZQhX = await FreakCoin.new({from: accounts[1]});
		const uintXI22bMM = BigInt("2007")
		const addressu8gZIwt = accounts[0]
		const uintZ56ZdvH = BigInt("130")
		const addressg1t6yuD = accounts[1]
		const boolf6ssJs6 = await FreakCoinOmJZQhX.transfer.call(addressu8gZIwt, uintXI22bMM, {from: accounts[1]});
		const booldWVV87o = await FreakCoinOmJZQhX.transfer.call(addressg1t6yuD, uintZ56ZdvH, {from: accounts[2]});

		assert.equal(boolf6ssJs6, true)
		await expect(FreakCoinOmJZQhX.transfer.call(addressg1t6yuD, uintZ56ZdvH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoinOmJZQhX = await FreakCoin.new({from: accounts[1]});
		const addresslLOwVcz = "0x0000000000000000000000000000000000000001"
		const uintfDRzYVy = BigInt("2007")
		const addressJ6ZRxGE = accounts[1]
		const uintf6k6ZD = BigInt("130")
		const addressh867Cis = accounts[1]
		const uint256r5sIoIV = await FreakCoinOmJZQhX.balanceOf.call(addresslLOwVcz, {from: accounts[3]});
		const boolf6ssJs6 = await FreakCoinOmJZQhX.transfer.call(addressJ6ZRxGE, uintfDRzYVy, {from: accounts[1]});
		const booldWVV87o = await FreakCoinOmJZQhX.transfer.call(addressh867Cis, uintf6k6ZD, {from: accounts[2]});

		assert.equal(boolf6ssJs6, true)
		assert.equal(uint256r5sIoIV, BigInt("0"))
		await expect(FreakCoinOmJZQhX.transfer.call(addressh867Cis, uintf6k6ZD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FreakCoin', async () => {
		const FreakCoineC0evlx = await FreakCoin.new({from: accounts[4]});
		const addresswf0yuT7 = accounts[1]
		const uintMCbEg8X = BigInt("468")
		const addressrlkzlI = accounts[2]
		const addressGBDgAL = accounts[4]
		const addresssMIeAIW = await FreakCoineC0evlx.setUniswapAddress.call(addresswf0yuT7, {from: accounts[4]});
		const bool4gTITO = await FreakCoineC0evlx.transferFrom.call(addressGBDgAL, addressrlkzlI, uintMCbEg8X, {from: accounts[2]});

		await expect(FreakCoineC0evlx.transferFrom.call(addressGBDgAL, addressrlkzlI, uintMCbEg8X, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})