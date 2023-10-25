const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinMdWfG30 = await EdenCoin.new({from: accounts[0]});
		const addressCD4SuGt = accounts[5]
		const addressSqD9tQi = "0x0000000000000000000000000000000000000001"
		const uintneYzpzO = BigInt("1016")
		const addressUrtgqcG = accounts[3]
		const addressPz21pct = accounts[4]
		const addressNacQDJW = accounts[0]
		const uintTefgud = BigInt("1989")
		const addressJv9jvI6 = accounts[4]
		const uint256DNLbJPk = await EdenCoinMdWfG30.allowance.call(addressSqD9tQi, addressCD4SuGt, {from: accounts[3]});
		const boolfgT1J7K = await EdenCoinMdWfG30.transferFrom.call(addressPz21pct, addressUrtgqcG, uintneYzpzO, {from: accounts[0]});
		const uint256tLSM5yh = await EdenCoinMdWfG30.balanceOf.call(addressNacQDJW, {from: accounts[3]});
		const bool7IZZ2F = await EdenCoinMdWfG30.transfer.call(addressJv9jvI6, uintTefgud, {from: accounts[2]});

		assert.equal(uint256DNLbJPk, BigInt("0"))
		await expect(EdenCoinMdWfG30.transferFrom.call(addressPz21pct, addressUrtgqcG, uintneYzpzO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinA2Tjx7k = await EdenCoin.new({from: accounts[0]});
		const uintgpYxKJg = BigInt("1743")
		const addressXY64cGK = accounts[5]
		const addressGVqp6E = accounts[0]
		const addressV4DFobf = accounts[4]
		const uinty56Za6F = BigInt("1260")
		const addressM34vvDW = accounts[3]
		const addressvpN4I6m = accounts[0]
		const booletKzouQ = await EdenCoinA2Tjx7k.transfer.call(addressXY64cGK, uintgpYxKJg, {from: accounts[1]});
		const uint256vabIQuR = await EdenCoinA2Tjx7k.allowance.call(addressV4DFobf, addressGVqp6E, {from: accounts[3]});
		const booloqMi20Q = await EdenCoinA2Tjx7k.transferFrom.call(addressvpN4I6m, addressM34vvDW, uinty56Za6F, {from: accounts[0]});

		await expect(EdenCoinA2Tjx7k.transfer.call(addressXY64cGK, uintgpYxKJg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinuPHGAqB = await EdenCoin.new({from: accounts[5]});
		const uintXpoatX7 = BigInt("1514")
		const addressqiIjXbX = accounts[2]
		const addresskBMQW22 = accounts[4]
		const uint1Q6Nhl = BigInt("65")
		const addressBkSrnA = accounts[4]
		const addressXpBT8d = accounts[2]
		const uintUbif3DD = BigInt("364")
		const addressoh4MVF5 = accounts[3]
		const boolj4adA6N = await EdenCoinuPHGAqB.increaseApproval.call(addressqiIjXbX, uintXpoatX7, {from: accounts[5]});
		const uint256JmMJvyC = await EdenCoinuPHGAqB.balanceOf.call(addresskBMQW22, {from: accounts[0]});
		const boolbjQRpP = await EdenCoinuPHGAqB.transferFrom.call(addressXpBT8d, addressBkSrnA, uint1Q6Nhl, {from: accounts[3]});
		const boolP6klF7C = await EdenCoinuPHGAqB.decreaseApproval.call(addressoh4MVF5, uintUbif3DD, {from: accounts[1]});

		assert.equal(boolj4adA6N, true)
		assert.equal(uint256JmMJvyC, BigInt("0"))
		await expect(EdenCoinuPHGAqB.transferFrom.call(addressXpBT8d, addressBkSrnA, uint1Q6Nhl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoindNagop8 = await EdenCoin.new({from: accounts[3]});
		const addressMJ1oQcB = accounts[2]
		const addressQ2jchDF = accounts[2]
		const addresspsJLvC = accounts[3]
		const addressqlXU59P = accounts[0]
		const uintvWQfsw = BigInt("1707")
		const addressbBr67jP = accounts[2]
		const uint256GbVJJSe = await EdenCoindNagop8.allowance.call(addressQ2jchDF, addressMJ1oQcB, {from: accounts[2]});
		const uint256J2w5QjH = await EdenCoindNagop8.allowance.call(addressqlXU59P, addresspsJLvC, {from: accounts[4]});
		const boolMeoh9ID = await EdenCoindNagop8.decreaseApproval.call(addressbBr67jP, uintvWQfsw, {from: accounts[0]});

		assert.equal(boolMeoh9ID, true)
		assert.equal(uint256GbVJJSe, BigInt("0"))
		assert.equal(uint256J2w5QjH, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinhFxaH0M = await EdenCoin.new({from: accounts[0]});
		const uintpYimesX = BigInt("522")
		const addressUnZeZN3 = "0x0000000000000000000000000000000000000001"
		const addresshE0HYV4 = accounts[0]
		const addressNIDICl = "0x0000000000000000000000000000000000000001"
		const uintxrJUhIF = BigInt("1262")
		const addressAm7Y7Dd = accounts[1]
		const uintK1geQUq = BigInt("1535")
		const addressL50lsQ = accounts[4]
		const boolNaXWU2b = await EdenCoinhFxaH0M.increaseApproval.call(addressUnZeZN3, uintpYimesX, {from: accounts[3]});
		const uint256cd339f = await EdenCoinhFxaH0M.allowance.call(addressNIDICl, addresshE0HYV4, {from: accounts[1]});
		const boolGCoPAfr = await EdenCoinhFxaH0M.decreaseApproval.call(addressAm7Y7Dd, uintxrJUhIF, {from: accounts[4]});
		const boolPnOWog = await EdenCoinhFxaH0M.approve.call(addressL50lsQ, uintK1geQUq, {from: accounts[2]});

		assert.equal(boolGCoPAfr, true)
		assert.equal(boolNaXWU2b, true)
		assert.equal(boolPnOWog, true)
		assert.equal(uint256cd339f, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinY8PIQIx = await EdenCoin.new({from: accounts[0]});
		const uintUJqS8V5 = BigInt("402")
		const addressVqTyueq = "0x00000000000000000000000000000000000000-1"
		const boolAgwQz47 = await EdenCoinY8PIQIx.decreaseApproval.call(addressVqTyueq, uintUJqS8V5, {from: accounts[3]});

		await expect(EdenCoinY8PIQIx.decreaseApproval.call(addressVqTyueq, uintUJqS8V5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinY8PIQIx = await EdenCoin.new({from: accounts[0]});
		const uintS1cDFeS = BigInt("2016")
		const addressWTSimJ4 = accounts[1]
		const uintbmHXZl0 = BigInt("0")
		const addressyuJnmBe = accounts[1]
		const uintuW0gRSQ = BigInt("649")
		const addressyiwp9iu = "0x0000000000000000000000000000000000000001"
		const uintGVNKmIY = BigInt("1434")
		const addresspJuUDMp = accounts[4]
		const boolnlgmXe = await EdenCoinY8PIQIx.approve.call(addressWTSimJ4, uintS1cDFeS, {from: accounts[0]});
		const booldxTj1L = await EdenCoinY8PIQIx.decreaseApproval.call(addressyuJnmBe, uintbmHXZl0, {from: accounts[0]});
		const boolN6y44K = await EdenCoinY8PIQIx.approve.call(addressyiwp9iu, uintuW0gRSQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolHLEQ0fa = await EdenCoinY8PIQIx.decreaseApproval.call(addresspJuUDMp, uintGVNKmIY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHLEQ0fa, true)
		assert.equal(boolN6y44K, true)
		assert.equal(booldxTj1L, true)
		assert.equal(boolnlgmXe, true)
	});
})