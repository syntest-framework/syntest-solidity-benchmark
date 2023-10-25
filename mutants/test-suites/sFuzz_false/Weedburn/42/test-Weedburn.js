const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringVScbvls = "sm5bWSOxOlMoICP4wJ5naBn2UsDh39GQ7ofRukDSj38Vgl7HEstDlKEUbVVd"
		const stringVnKOFfe = "i6aec8cF8TJ3wDRSO"
		const uintTTmkZAD = BigInt("39")
		const WeedburntgYW0Ea = await Weedburn.new(stringVScbvls, stringVnKOFfe, uintTTmkZAD, {from: accounts[3]});
		const uintXlfT6VW = BigInt("1710")
		const addresstTWRCOn = accounts[3]
		await WeedburntgYW0Ea.disableLimitMode.call({from: accounts[2]});
		const stringYWXI8xT = await WeedburntgYW0Ea.symbol.call({from: accounts[1]});
		await WeedburntgYW0Ea.disableLimitMode.call({from: accounts[0]});
		const booluabW1En = await WeedburntgYW0Ea.approve.call(addresstTWRCOn, uintXlfT6VW, {from: accounts[2]});
	});

	it('test for Weedburn', async () => {
		const WeedburnQbdNBK = await Weedburn.new({from: accounts[2]});
		const uint9RvYQQ = BigInt("87")
		const addresshyZxUWz = accounts[3]
//		const booldSMfIZ7 = await WeedburnQbdNBK.transfer.call(addresshyZxUWz, uint9RvYQQ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256OByTR9f = await WeedburnQbdNBK.totalSupply.call({from: accounts[4]});

		await expect(WeedburnQbdNBK.transfer.call(addresshyZxUWz, uint9RvYQQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnm2YGy4f = await Weedburn.new({from: accounts[4]});
		const uintmIsaeZ = BigInt("227")
		const uintRVlkpI2 = BigInt("163")
		const addressQ7QF5iw = accounts[1]
//		const uint256zNbq9I = await Weedburnm2YGy4f.burn.call(uintmIsaeZ, {from: "0x0000000000000000000000000000000000000001"});
//		const stringvyVow36 = await Weedburnm2YGy4f.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressIcvnnOp = await Weedburnm2YGy4f.burnFrom.call(addressQ7QF5iw, uintRVlkpI2, {from: accounts[4]});

		await expect(Weedburnm2YGy4f.burn.call(uintmIsaeZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnTR36eXW = await Weedburn.new({from: accounts[5]});
		const uintVfk30Cy = BigInt("1632")
		const addressUUm0LQZ = accounts[4]
		const uintjahc2Rz = BigInt("1654")
		const addressNl1a0yF = accounts[0]
		const uintFerZ7mU = BigInt("1454")
		const addressi8OzEC9 = "0x0000000000000000000000000000000000000001"
		const uintyD9jhhw = BigInt("182")
//		await WeedburnTR36eXW.enableDevMode.call({from: accounts[4]});
//		const boolVzMewSW = await WeedburnTR36eXW.increaseAllowance.call(addressUUm0LQZ, uintVfk30Cy, {from: accounts[2]});
//		const boolStT9ozX = await WeedburnTR36eXW.approve.call(addressNl1a0yF, uintjahc2Rz, {from: accounts[0]});
//		const booliiNU9S3 = await WeedburnTR36eXW.approve.call(addressi8OzEC9, uintFerZ7mU, {from: accounts[0]});
//		const uint256P0Tuydz = await WeedburnTR36eXW.burn.call(uintyD9jhhw, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnTR36eXW.enableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQbdNBK = await Weedburn.new({from: accounts[2]});
		const uint256OByTR9f = await WeedburnQbdNBK.totalSupply.call({from: accounts[4]});

		assert.equal(uint256OByTR9f, BigInt("100000000000000000000000"))
	});

	it('test for Weedburn', async () => {
		const WeedburnQbdNBK = await Weedburn.new({from: accounts[2]});
		const uintehkGWnh = BigInt("1422")
		const addressCMFptdU = accounts[1]
		const uintBSDDcDL = BigInt("255")
		const booltE330nj = await WeedburnQbdNBK.approve.call(addressCMFptdU, uintehkGWnh, {from: accounts[0]});
		const uint8zrk0U8N = await WeedburnQbdNBK.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256rtVAOTL = await WeedburnQbdNBK.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256OByTR9f = await WeedburnQbdNBK.totalSupply.call({from: accounts[4]});
//		const uint256ocudFe1 = await WeedburnQbdNBK.burn.call(uintBSDDcDL, {from: accounts[5]});

		assert.equal(booltE330nj, true)
		assert.equal(uint256OByTR9f, BigInt("100000000000000000000000"))
		assert.equal(uint256rtVAOTL, BigInt("100000000000000000000000"))
		assert.equal(uint8zrk0U8N, BigInt("18"))
		await expect(WeedburnQbdNBK.burn.call(uintBSDDcDL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQbdNBK = await Weedburn.new({from: accounts[2]});
//		await WeedburnQbdNBK.enableLimitMode.call({from: accounts[5]});
//		const uint256OByTR9f = await WeedburnQbdNBK.totalSupply.call({from: accounts[4]});

		await expect(WeedburnQbdNBK.enableLimitMode.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQbdNBK = await Weedburn.new({from: accounts[2]});
		const stringcS5MIjx = await WeedburnQbdNBK.symbol.call({from: accounts[3]});
		const uint256OByTR9f = await WeedburnQbdNBK.totalSupply.call({from: accounts[4]});

		assert.equal(stringcS5MIjx, "Weedburn")
		assert.equal(uint256OByTR9f, BigInt("100000000000000000000000"))
	});

	it('test for Weedburn', async () => {
		const WeedburnQbdNBK = await Weedburn.new({from: accounts[2]});
		const uintm0DeLvv = BigInt("1865")
		const addressXE5NisZ = "0x0000000000000000000000000000000000000001"
		const boolGmAGurF = await WeedburnQbdNBK.increaseAllowance.call(addressXE5NisZ, uintm0DeLvv, {from: accounts[2]});
		const uint256OByTR9f = await WeedburnQbdNBK.totalSupply.call({from: accounts[4]});

		assert.equal(boolGmAGurF, true)
		assert.equal(uint256OByTR9f, BigInt("100000000000000000000000"))
	});

	it('test for Weedburn', async () => {
		const WeedburnQbdNBK = await Weedburn.new({from: accounts[2]});
		const stringECIH2t = await WeedburnQbdNBK.name.call({from: accounts[0]});
		const uint256OByTR9f = await WeedburnQbdNBK.totalSupply.call({from: accounts[4]});

		assert.equal(stringECIH2t, "t.me/burnweed1")
		assert.equal(uint256OByTR9f, BigInt("100000000000000000000000"))
	});

	it('test for Weedburn', async () => {
		const WeedburnQbdNBK = await Weedburn.new({from: accounts[2]});
		const uintnOrHKP1 = BigInt("351")
		const addressaky6mEl = accounts[2]
//		await WeedburnQbdNBK.disableDevMode.call({from: accounts[1]});
//		const uint256OByTR9f = await WeedburnQbdNBK.totalSupply.call({from: accounts[4]});
//		const boolX2bxfGS = await WeedburnQbdNBK.increaseAllowance.call(addressaky6mEl, uintnOrHKP1, {from: accounts[1]});

		await expect(WeedburnQbdNBK.disableDevMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnz0qifr = await Weedburn.new({from: accounts[3]});
		const uintOnFWvAU = BigInt("1857")
		const addressuWDF46k = accounts[0]
		const uintXZbURqO = BigInt("2039")
		const addressoBtN021 = accounts[5]
		const uintXVpxJmK = BigInt("1924")
		const addresske15poH = accounts[2]
		const booldT5klPH = await Weedburnz0qifr.increaseAllowance.call(addressuWDF46k, uintOnFWvAU, {from: accounts[5]});
//		const boola7zxP52 = await Weedburnz0qifr.decreaseAllowance.call(addressoBtN021, uintXZbURqO, {from: accounts[5]});
//		const booltIJ6Bf = await Weedburnz0qifr.approve.call(addresske15poH, uintXVpxJmK, {from: accounts[0]});

		assert.equal(booldT5klPH, true)
		await expect(Weedburnz0qifr.decreaseAllowance.call(addressoBtN021, uintXZbURqO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQbdNBK = await Weedburn.new({from: accounts[2]});
		const addressQXJ9wTO = accounts[2]
		const uint256OByTR9f = await WeedburnQbdNBK.totalSupply.call({from: accounts[4]});
		const uint256OkujFd6 = await WeedburnQbdNBK.balanceOf.call(addressQXJ9wTO, {from: accounts[4]});

		assert.equal(uint256OByTR9f, BigInt("100000000000000000000000"))
		assert.equal(uint256OkujFd6, BigInt("100000000000000000000000"))
	});

	it('test for Weedburn', async () => {
		const WeedburnQbdNBK = await Weedburn.new({from: accounts[2]});
		const uint256OByTR9f = await WeedburnQbdNBK.totalSupply.call({from: accounts[4]});
//		await WeedburnQbdNBK.disableLimitMode.call({from: accounts[1]});

		assert.equal(uint256OByTR9f, BigInt("100000000000000000000000"))
		await expect(WeedburnQbdNBK.disableLimitMode.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQbdNBK = await Weedburn.new({from: accounts[2]});
		const uinthItdibj = BigInt("1296")
		const addressNzNOYn7 = accounts[2]
		const addressZI4NB1g = "0x0000000000000000000000000000000000000001"
		const uintRB6WTwE = BigInt("1181")
		const addressyiiMO5Q = accounts[4]
		const uint256OByTR9f = await WeedburnQbdNBK.totalSupply.call({from: accounts[4]});
//		const boolGT1NwEI = await WeedburnQbdNBK.transferFrom.call(addressZI4NB1g, addressNzNOYn7, uinthItdibj, {from: accounts[2]});
//		const boolcWlez9l = await WeedburnQbdNBK.transfer.call(addressyiiMO5Q, uintRB6WTwE, {from: accounts[1]});

		assert.equal(uint256OByTR9f, BigInt("100000000000000000000000"))
		await expect(WeedburnQbdNBK.transferFrom.call(addressZI4NB1g, addressNzNOYn7, uinthItdibj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQbdNBK = await Weedburn.new({from: accounts[2]});
		const addressB3lRSSs = accounts[0]
		const addressEVZd9D7 = accounts[3]
		const addressXKY3E09 = accounts[4]
		const addressF7D8LXZ = accounts[0]
		const stringGaiwqV = await WeedburnQbdNBK.name.call({from: accounts[4]});
		const uint256OByTR9f = await WeedburnQbdNBK.totalSupply.call({from: accounts[4]});
		const uint256knXTqmQ = await WeedburnQbdNBK.allowance.call(addressEVZd9D7, addressB3lRSSs, {from: accounts[4]});
		const uint256udjwHQr = await WeedburnQbdNBK.allowance.call(addressF7D8LXZ, addressXKY3E09, {from: accounts[1]});

		assert.equal(stringGaiwqV, "t.me/burnweed1")
		assert.equal(uint256OByTR9f, BigInt("100000000000000000000000"))
		assert.equal(uint256knXTqmQ, BigInt("0"))
		assert.equal(uint256udjwHQr, BigInt("0"))
	});

	it('test for Weedburn', async () => {
		const WeedburnQbdNBK = await Weedburn.new({from: accounts[2]});
		const uintINDhiaW = BigInt("1732")
		const addresskz39Tkd = accounts[2]
		const uintdoSBCNp = BigInt("593")
		const addressFJ7YsdV = accounts[2]
		const uint256OByTR9f = await WeedburnQbdNBK.totalSupply.call({from: accounts[4]});
		const bool5aTJEY = await WeedburnQbdNBK.increaseAllowance.call(addresskz39Tkd, uintINDhiaW, {from: accounts[4]});
//		const addressHK7Iip7 = await WeedburnQbdNBK.burnFrom.call(addressFJ7YsdV, uintdoSBCNp, {from: "0x0000000000000000000000000000000000000001"});
//		const stringpotQzMa = await WeedburnQbdNBK.name.call({from: accounts[5]});

		assert.equal(bool5aTJEY, true)
		assert.equal(uint256OByTR9f, BigInt("100000000000000000000000"))
		await expect(WeedburnQbdNBK.burnFrom.call(addressFJ7YsdV, uintdoSBCNp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnQKMD7X = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcE4xEwz = BigInt("771")
		const addressUtpVPI3 = accounts[3]
		const boolnamIepU = await WeedburnQKMD7X.decreaseAllowance.call(addressUtpVPI3, uintcE4xEwz, {from: accounts[1]});
		await WeedburnQKMD7X.disableLimitMode.call({from: accounts[3]});
		const stringKIiXWyI = await WeedburnQKMD7X.name.call({from: accounts[2]});
	});

	it('test for Weedburn', async () => {
		const WeedburnQbdNBK = await Weedburn.new({from: accounts[2]});
		const uintYc7rGM = BigInt("412")
		const addressisXOO3R = accounts[3]
		const boolY7GRG5o = await WeedburnQbdNBK.transfer.call(addressisXOO3R, uintYc7rGM, {from: accounts[2]});
		const uint256OByTR9f = await WeedburnQbdNBK.totalSupply.call({from: accounts[4]});

		assert.equal(boolY7GRG5o, true)
		assert.equal(uint256OByTR9f, BigInt("100000000000000000000000"))
	});
})