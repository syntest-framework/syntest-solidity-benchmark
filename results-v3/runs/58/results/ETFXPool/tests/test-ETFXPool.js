const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolDQXaZ2y = await ETFXPool.new({from: accounts[0]});
		const uintudc7yXf = BigInt("610")
		const addressc5brvmJ = accounts[5]
		const uinteKEPRNE = BigInt("1310")
		const addressRvAYqGk = accounts[5]
		const boolyQWb34 = await ETFXPoolDQXaZ2y.increaseAllowance.call(addressc5brvmJ, uintudc7yXf, {from: accounts[4]});
		const boolcVHyqWo = await ETFXPoolDQXaZ2y.decreaseAllowance.call(addressRvAYqGk, uinteKEPRNE, {from: accounts[5]});

		assert.equal(boolyQWb34, true)
		await expect(ETFXPoolDQXaZ2y.decreaseAllowance.call(addressRvAYqGk, uinteKEPRNE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolPaYIJOg = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDm1j5nF = BigInt("180")
		const addressqb2iOu1 = accounts[4]
		const addressLstkNQe = accounts[2]
		const uintnykqmVq = BigInt("633")
		const addressL8xHTeN = accounts[0]
		const addressXYttL3 = accounts[5]
		const addressW6d2s4 = accounts[3]
		const boolROZs5Lh = await ETFXPoolPaYIJOg.transferFrom.call(addressLstkNQe, addressqb2iOu1, uintDm1j5nF, {from: accounts[3]});
		const uint256cpgBx0 = await ETFXPoolPaYIJOg.stake.call(uintnykqmVq, {from: accounts[3]});
		const uint256rlj7RCA = await ETFXPoolPaYIJOg.allowance.call(addressXYttL3, addressL8xHTeN, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BjU9oz0 = await ETFXPoolPaYIJOg.balanceOf.call(addressW6d2s4, {from: accounts[1]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolN8AOEy0 = await ETFXPool.new({from: accounts[1]});
		const stringNAJIE1Q = await ETFXPoolN8AOEy0.symbol.call({from: accounts[4]});
		const addressMkcqRI = await ETFXPoolN8AOEy0.owner.call({from: accounts[0]});
		await ETFXPoolN8AOEy0.nonReentrant.call({from: accounts[3]});
		await ETFXPoolN8AOEy0.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressMkcqRI, 0xe696B1738D3fa1c99CADD982e3080731d3739391)
		assert.equal(stringNAJIE1Q, "FETFX")
		await expect(ETFXPoolN8AOEy0.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPools2ja7nz = await ETFXPool.new({from: accounts[2]});
		const addresseqyqG35 = accounts[0]
		const addressYY26OwM = accounts[2]
		const uint256VWGJp68 = await ETFXPools2ja7nz.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256eocGoZ = await ETFXPools2ja7nz.earned.call(addresseqyqG35, {from: accounts[5]});
		const uint256t8tfT4 = await ETFXPools2ja7nz.earned.call(addressYY26OwM, {from: accounts[0]});
		await ETFXPools2ja7nz.exit.call({from: accounts[5]});
		await ETFXPools2ja7nz.exit.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256VWGJp68, BigInt("0"))
		await expect(ETFXPools2ja7nz.earned.call(addresseqyqG35, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolpW50y7Y = await ETFXPool.new({from: accounts[3]});
		const uintb2BDOu = BigInt("1422")
		const addressWCqq8aX = accounts[2]
		const uintqVT0eaU = BigInt("943")
		const addressdM7m5Jo = "0x0000000000000000000000000000000000000001"
		const uintIremEbn = BigInt("615")
		const boolYOeRZJs = await ETFXPoolpW50y7Y.approve.call(addressWCqq8aX, uintb2BDOu, {from: accounts[3]});
		const bool9Yk9ki = await ETFXPoolpW50y7Y.decreaseAllowance.call(addressdM7m5Jo, uintqVT0eaU, {from: accounts[2]});
		const uint256XTxyzTX = await ETFXPoolpW50y7Y.withdraw.call(uintIremEbn, {from: accounts[4]});

		assert.equal(boolYOeRZJs, true)
		await expect(ETFXPoolpW50y7Y.decreaseAllowance.call(addressdM7m5Jo, uintqVT0eaU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolLvk2tAD = await ETFXPool.new({from: accounts[4]});
		const stringMJ0p8l7 = await ETFXPoolLvk2tAD.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await ETFXPoolLvk2tAD.renounceOwnership.call({from: accounts[2]});

		assert.equal(stringMJ0p8l7, "FETFX")
		await expect(ETFXPoolLvk2tAD.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolqL8vOr = await ETFXPool.new({from: accounts[2]});
		const uintr3hiRxf = BigInt("315")
		const addresswRQx7gx = accounts[5]
		const uintaokvuNq = BigInt("254")
		const addressrtjymiB = "0x0000000000000000000000000000000000000001"
		const addressq4j0xSh = accounts[3]
		const stringR5K2eA5 = await ETFXPoolqL8vOr.symbol.call({from: accounts[3]});
		await ETFXPoolqL8vOr.exit.call({from: accounts[2]});
		const stringseHrsf = await ETFXPoolqL8vOr.symbol.call({from: accounts[0]});
		const boolqgyZg8Q = await ETFXPoolqL8vOr.approve.call(addresswRQx7gx, uintr3hiRxf, {from: accounts[1]});
		const boolB6yDT68 = await ETFXPoolqL8vOr.decreaseAllowance.call(addressrtjymiB, uintaokvuNq, {from: accounts[0]});
		const addressgiX4JM = await ETFXPoolqL8vOr.transferOwnership.call(addressq4j0xSh, {from: accounts[2]});

		assert.equal(stringR5K2eA5, "FETFX")
		await expect(ETFXPoolqL8vOr.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolDQXaZ2y = await ETFXPool.new({from: accounts[0]});
		const uintVcW6ut9 = BigInt("95")
		const addressgOLnon9 = accounts[5]
		const uintQ4w83Vh = BigInt("610")
		const addressNUPDz9Q = accounts[5]
		const boolQRpV2fR = await ETFXPoolDQXaZ2y.transfer.call(addressgOLnon9, uintVcW6ut9, {from: accounts[4]});
		const boolyQWb34 = await ETFXPoolDQXaZ2y.increaseAllowance.call(addressNUPDz9Q, uintQ4w83Vh, {from: accounts[4]});
		const uint256y99VVdn = await ETFXPoolDQXaZ2y.totalSupply.call({from: accounts[1]});

		await expect(ETFXPoolDQXaZ2y.transfer.call(addressgOLnon9, uintVcW6ut9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolDQXaZ2y = await ETFXPool.new({from: accounts[0]});
		const uintfkDWn20 = BigInt("74")
		const addressfCUtWpk = accounts[2]
		const addressYQhRo1d = accounts[2]
		const uintuYtCiug = BigInt("1924")
		const addressvslRMKg = accounts[3]
		const boolf8zUTNK = await ETFXPoolDQXaZ2y.transferFrom.call(addressYQhRo1d, addressfCUtWpk, uintfkDWn20, {from: "0x0000000000000000000000000000000000000001"});
		const boolsxGY6Bo = await ETFXPoolDQXaZ2y.increaseAllowance.call(addressvslRMKg, uintuYtCiug, {from: accounts[1]});

		await expect(ETFXPoolDQXaZ2y.transferFrom.call(addressYQhRo1d, addressfCUtWpk, uintfkDWn20, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolDQXaZ2y = await ETFXPool.new({from: accounts[0]});
		const uintOxaTIb9 = BigInt("1047")
		const uint6Tva7S = BigInt("610")
		const addressA8Gnb99 = accounts[5]
		const uint256A2X1c5Y = await ETFXPoolDQXaZ2y.stake.call(uintOxaTIb9, {from: accounts[5]});
		const boolyQWb34 = await ETFXPoolDQXaZ2y.increaseAllowance.call(addressA8Gnb99, uint6Tva7S, {from: accounts[4]});

		await expect(ETFXPoolDQXaZ2y.stake.call(uintOxaTIb9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringpvSfN6q = "swF"
		const stringbFl17MQ = "rBfcXA2sfbcYabDsoGWI6gmzMu4Uh4gtnliiRa7XJDi4Vh2sjmER8hkkU"
		const uintxp3aBz = BigInt("111")
		const ETFXPoolLoHRlZB = await ETFXPool.new(stringpvSfN6q, stringbFl17MQ, uintxp3aBz, {from: accounts[1]});
		const uintoHCEuRR = BigInt("328")
		const addressYz5tsY7 = accounts[2]
		const boolAH24BMC = await ETFXPoolLoHRlZB.approve.call(addressYz5tsY7, uintoHCEuRR, {from: accounts[2]});
		await ETFXPoolLoHRlZB.renounceOwnership.call({from: accounts[2]});
		const uint8l9V78g = await ETFXPoolLoHRlZB.decimals.call({from: accounts[3]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolDQXaZ2y = await ETFXPool.new({from: accounts[0]});
		const uintzSVWmLi = BigInt("1946")
		const uint6wi3oD = BigInt("602")
		const addressx6aiPDc = accounts[5]
		const uint256s3Xa3ij = await ETFXPoolDQXaZ2y.withdraw.call(uintzSVWmLi, {from: "0x0000000000000000000000000000000000000001"});
		const boolyQWb34 = await ETFXPoolDQXaZ2y.increaseAllowance.call(addressx6aiPDc, uint6wi3oD, {from: accounts[4]});

		await expect(ETFXPoolDQXaZ2y.withdraw.call(uintzSVWmLi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolDQXaZ2y = await ETFXPool.new({from: accounts[0]});
		const uintwlTUOZn = BigInt("585")
		const addressFRdRj89 = accounts[5]
		const boolyQWb34 = await ETFXPoolDQXaZ2y.increaseAllowance.call(addressFRdRj89, uintwlTUOZn, {from: accounts[4]});
		const uint8Asymuvb = await ETFXPoolDQXaZ2y.decimals.call({from: accounts[5]});
		const stringKJ2we6D = await ETFXPoolDQXaZ2y.symbol.call({from: accounts[4]});

		assert.equal(boolyQWb34, true)
		assert.equal(stringKJ2we6D, "FETFX")
		assert.equal(uint8Asymuvb, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolDgfeUFa = await ETFXPool.new({from: accounts[2]});
		const uintgiPKMKH = BigInt("1708")
		const address5UUfJ5 = accounts[2]
		const stringuB6BlCh = await ETFXPoolDgfeUFa.name.call({from: accounts[3]});
		const uint8Ae41Lz = await ETFXPoolDgfeUFa.decimals.call({from: accounts[5]});
		const booluviru0p = await ETFXPoolDgfeUFa.transfer.call(address5UUfJ5, uintgiPKMKH, {from: accounts[2]});

		assert.equal(stringuB6BlCh, "ETFX-FARM")
		assert.equal(uint8Ae41Lz, BigInt("8"))
		await expect(ETFXPoolDgfeUFa.transfer.call(address5UUfJ5, uintgiPKMKH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolI3QMPJZ = await ETFXPool.new({from: accounts[2]});
		const addressOlpnm2n = accounts[2]
		const uintmWj13F = BigInt("817")
		const addresserhX0dC = await ETFXPoolI3QMPJZ.transferOwnership.call(addressOlpnm2n, {from: accounts[2]});
		await ETFXPoolI3QMPJZ.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256W1P4hC2 = await ETFXPoolI3QMPJZ.stake.call(uintmWj13F, {from: accounts[1]});
		await ETFXPoolI3QMPJZ.renounceOwnership.call({from: accounts[0]});
		await ETFXPoolI3QMPJZ.getReward.call({from: accounts[2]});

		await expect(ETFXPoolI3QMPJZ.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolDQXaZ2y = await ETFXPool.new({from: accounts[0]});
		const uintw8dUXQ0 = BigInt("610")
		const addressI0q9xKm = accounts[5]
		const uint256odRlFFx = await ETFXPoolDQXaZ2y.rewardPerToken.call({from: accounts[3]});
		const boolyQWb34 = await ETFXPoolDQXaZ2y.increaseAllowance.call(addressI0q9xKm, uintw8dUXQ0, {from: accounts[4]});
		await ETFXPoolDQXaZ2y.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolyQWb34, true)
		assert.equal(uint256odRlFFx, BigInt("0"))
		await expect(ETFXPoolDQXaZ2y.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolDQXaZ2y = await ETFXPool.new({from: accounts[0]});
		const uintgtZnoIo = BigInt("1929")
		const addresswWjfYsp = accounts[5]
		const addressdxEa6r0 = accounts[1]
		const addressdR1S2Aq = accounts[5]
		const boolyQWb34 = await ETFXPoolDQXaZ2y.increaseAllowance.call(addresswWjfYsp, uintgtZnoIo, {from: accounts[4]});
		const uint256qxQ3HD = await ETFXPoolDQXaZ2y.allowance.call(addressdR1S2Aq, addressdxEa6r0, {from: accounts[2]});

		assert.equal(boolyQWb34, true)
		assert.equal(uint256qxQ3HD, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolDQXaZ2y = await ETFXPool.new({from: accounts[0]});
		const addressiAHJ1u = accounts[4]
		const addressSdZWiA1 = accounts[0]
		await ETFXPoolDQXaZ2y.renounceOwnership.call({from: accounts[0]});
		const uint256odRlFFx = await ETFXPoolDQXaZ2y.rewardPerToken.call({from: accounts[3]});
		const uint256FMqH4QV = await ETFXPoolDQXaZ2y.allowance.call(addressSdZWiA1, addressiAHJ1u, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPoolDQXaZ2y.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})