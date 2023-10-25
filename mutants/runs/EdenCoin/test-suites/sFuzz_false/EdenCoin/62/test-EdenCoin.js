const EdenCoin = artifacts.require("EdenCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('EdenCoin', (accounts) => {
	it('test for EdenCoin', async () => {
		const EdenCoinUt0sMp7 = await EdenCoin.new({from: accounts[0]});
		const uintKkoCJII = BigInt("1141")
		const addressjJIyVoZ = accounts[4]
		const uintDEaf8il = BigInt("1639")
		const addresstatGAmz = accounts[4]
		const addressA6jojXU = "0x0000000000000000000000000000000000000001"
		const addressMJ1L4op = accounts[2]
		const addressahDT1o = accounts[1]
		const addressHJleung = accounts[2]
		const booluj1KZy2 = await EdenCoinUt0sMp7.decreaseApproval.call(addressjJIyVoZ, uintKkoCJII, {from: accounts[1]});
		const boole9xSUOf = await EdenCoinUt0sMp7.transferFrom.call(addressA6jojXU, addresstatGAmz, uintDEaf8il, {from: accounts[5]});
		const uint256qOqZOPp = await EdenCoinUt0sMp7.allowance.call(addressahDT1o, addressMJ1L4op, {from: accounts[1]});
		const uint256FW5v5L4 = await EdenCoinUt0sMp7.balanceOf.call(addressHJleung, {from: accounts[3]});

		assert.equal(booluj1KZy2, true)
		await expect(EdenCoinUt0sMp7.transferFrom.call(addressA6jojXU, addresstatGAmz, uintDEaf8il, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinjFj9m6B = await EdenCoin.new({from: accounts[3]});
		const uintI2ORpEB = BigInt("843")
		const addressN3ui42C = accounts[3]
		const addressmPuofH2 = accounts[4]
		const addressblw6enh = accounts[0]
		const addresskL5wnwc = accounts[2]
		const uintxmqpdA3 = BigInt("993")
		const addresszXFMJ9i = accounts[0]
		const uintBrs5zpe = BigInt("205")
		const addressWTA9ybc = accounts[2]
		const uintmgCG8y = BigInt("1667")
		const addressSS70DRf = "0x0000000000000000000000000000000000000001"
		const bool1cmBEa = await EdenCoinjFj9m6B.decreaseApproval.call(addressN3ui42C, uintI2ORpEB, {from: accounts[4]});
		const uint256a5pcf9n = await EdenCoinjFj9m6B.balanceOf.call(addressmPuofH2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hS08TWV = await EdenCoinjFj9m6B.allowance.call(addresskL5wnwc, addressblw6enh, {from: accounts[4]});
		const boolgJDUF8e = await EdenCoinjFj9m6B.transfer.call(addresszXFMJ9i, uintxmqpdA3, {from: accounts[1]});
		const booldij0h82 = await EdenCoinjFj9m6B.transfer.call(addressWTA9ybc, uintBrs5zpe, {from: accounts[1]});
		const boolp34gnvs = await EdenCoinjFj9m6B.transfer.call(addressSS70DRf, uintmgCG8y, {from: accounts[0]});

		assert.equal(bool1cmBEa, true)
		assert.equal(uint256a5pcf9n, BigInt("0"))
		assert.equal(uint256hS08TWV, BigInt("0"))
		await expect(EdenCoinjFj9m6B.transfer.call(addresszXFMJ9i, uintxmqpdA3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for EdenCoin', async () => {
		const EdenCoinPg9tq2t = await EdenCoin.new({from: accounts[5]});
		const addressiioUQ63 = accounts[0]
		const addressF6nTKqM = accounts[2]
		const addressXxD9cmf = accounts[1]
		const uintn8Ctio5 = BigInt("594")
		const addresspZMy9Wh = "0x0000000000000000000000000000000000000001"
		const uintzbFfbQo = BigInt("1539")
		const addressHW0EUJz = accounts[3]
		const addressCKH3ZhI = accounts[4]
		const uintrxBb5kJ = BigInt("393")
		const addressbxNRDs = accounts[0]
		const uint256aKTV2o8 = await EdenCoinPg9tq2t.allowance.call(addressF6nTKqM, addressiioUQ63, {from: accounts[1]});
		const uint256LTaXx25 = await EdenCoinPg9tq2t.balanceOf.call(addressXxD9cmf, {from: accounts[1]});
		const boolOzpmpB = await EdenCoinPg9tq2t.approve.call(addresspZMy9Wh, uintn8Ctio5, {from: "0x0000000000000000000000000000000000000001"});
		const boolgr4IUHV = await EdenCoinPg9tq2t.approve.call(addressHW0EUJz, uintzbFfbQo, {from: accounts[1]});
		const uint256f0x59NE = await EdenCoinPg9tq2t.balanceOf.call(addressCKH3ZhI, {from: accounts[3]});
		const boolS8AuQZ8 = await EdenCoinPg9tq2t.increaseApproval.call(addressbxNRDs, uintrxBb5kJ, {from: accounts[1]});

		assert.equal(boolOzpmpB, true)
		assert.equal(boolS8AuQZ8, true)
		assert.equal(boolgr4IUHV, true)
		assert.equal(uint256LTaXx25, BigInt("0"))
		assert.equal(uint256aKTV2o8, BigInt("0"))
		assert.equal(uint256f0x59NE, BigInt("0"))
	});

	it('test for EdenCoin', async () => {
		const EdenCoinTFGFBk = await EdenCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJo5Fiat = BigInt("1757")
		const addressL0YQY6n = accounts[4]
		const uintSEHl6sW = BigInt("1952")
		const addresso7SfQci = accounts[0]
		const boolBL3osCu = await EdenCoinTFGFBk.approve.call(addressL0YQY6n, uintJo5Fiat, {from: accounts[3]});
		const boolFtZyS1W = await EdenCoinTFGFBk.increaseApproval.call(addresso7SfQci, uintSEHl6sW, {from: accounts[2]});
	});

	it('test for EdenCoin', async () => {
		const EdenCoinP9L4l2r = await EdenCoin.new({from: accounts[4]});
		const uintYf5NqjX = BigInt("66")
		const addressTeNPDE3 = accounts[2]
		const uinteCKmMdr = BigInt("0")
		const addressbCG6Gzi = accounts[4]
		const uintnZ4OpCh = BigInt("1841")
		const addressX7SQ7Dt = accounts[2]
		const boolsIWJzML = await EdenCoinP9L4l2r.decreaseApproval.call(addressTeNPDE3, uintYf5NqjX, {from: accounts[1]});
		const booli7TGRKP = await EdenCoinP9L4l2r.decreaseApproval.call(addressbCG6Gzi, uinteCKmMdr, {from: accounts[2]});
		const boollY27rXy = await EdenCoinP9L4l2r.transfer.call(addressX7SQ7Dt, uintnZ4OpCh, {from: accounts[0]});

		assert.equal(booli7TGRKP, true)
		assert.equal(boolsIWJzML, true)
		await expect(EdenCoinP9L4l2r.transfer.call(addressX7SQ7Dt, uintnZ4OpCh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})