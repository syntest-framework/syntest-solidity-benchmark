const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolzlGd72 = await ETFXPool.new({from: accounts[3]});
		const addressO1u82F7 = accounts[4]
		const addressNAklFmw = accounts[4]
		const uint256NwyPXnF = await ETFXPoolzlGd72.earned.call(addressO1u82F7, {from: accounts[4]});
		const addressyHmnEqp = await ETFXPoolzlGd72.transferOwnership.call(addressNAklFmw, {from: accounts[4]});
		await ETFXPoolzlGd72.getReward.call({from: accounts[3]});

		await expect(ETFXPoolzlGd72.earned.call(addressO1u82F7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTW0no83 = await ETFXPool.new({from: accounts[1]});
		const addressUKAJFy = accounts[0]
		const uint8N6WhHWH = await ETFXPoolTW0no83.decimals.call({from: accounts[3]});
		const uint2565ipbNM = await ETFXPoolTW0no83.rewardPerToken.call({from: accounts[4]});
		const uint256VWLxa2r = await ETFXPoolTW0no83.balanceOf.call(addressUKAJFy, {from: accounts[1]});

		assert.equal(uint2565ipbNM, BigInt("0"))
		assert.equal(uint256VWLxa2r, BigInt("0"))
		assert.equal(uint8N6WhHWH, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const stringtlSv5h = "E"
		const stringenW6Swu = "98ncX8vLRvDunHMlWyrMV6RROqn3YOOfcyCay26pFQrqpEtPFQ3AFFTSIfFZp5yAhNUeK"
		const uint2GCmed = BigInt("200")
		const ETFXPoolYBBMXgH = await ETFXPool.new(stringtlSv5h, stringenW6Swu, uint2GCmed, {from: accounts[1]});
		const uintKlKTfTc = BigInt("214")
		const uintN2VwX21 = BigInt("1998")
		const uint256kMOmYQp = await ETFXPoolYBBMXgH.stake.call(uintKlKTfTc, {from: accounts[2]});
		await ETFXPoolYBBMXgH.onlyOwner.call({from: accounts[1]});
		const addresslZKEvfJ = await ETFXPoolYBBMXgH.owner.call({from: accounts[1]});
		const uint256KSZX3q = await ETFXPoolYBBMXgH.withdraw.call(uintN2VwX21, {from: accounts[1]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolrShA8Wc = await ETFXPool.new({from: accounts[2]});
		const addressGEiMzC = "0x0000000000000000000000000000000000000001"
		const addressP9odKH = accounts[1]
		const addressT4DIFE = accounts[4]
		const addressGGoyhxH = accounts[2]
		const addressJHt4UT = accounts[5]
		await ETFXPoolrShA8Wc.nonReentrant.call({from: accounts[5]});
		const uint256S88Nfu2 = await ETFXPoolrShA8Wc.earned.call(addressGEiMzC, {from: accounts[4]});
		const uint256yGBASt = await ETFXPoolrShA8Wc.balanceOf.call(addressP9odKH, {from: accounts[1]});
		const uint256ABUUCx9 = await ETFXPoolrShA8Wc.earned.call(addressT4DIFE, {from: accounts[2]});
		const uint256GxWePzx = await ETFXPoolrShA8Wc.allowance.call(addressJHt4UT, addressGGoyhxH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPoolrShA8Wc.nonReentrant.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPool3qRjFU = await ETFXPool.new({from: accounts[5]});
		const uintOQPl7L9 = BigInt("805")
		const addressH6iOnHo = accounts[5]
		const stringtaXlFIT = await ETFXPool3qRjFU.symbol.call({from: accounts[2]});
		const addressXtWggkY = await ETFXPool3qRjFU.owner.call({from: accounts[1]});
		await ETFXPool3qRjFU.getReward.call({from: accounts[1]});
		await ETFXPool3qRjFU.onlyOwner.call({from: accounts[3]});
		const boolMv4Ddhf = await ETFXPool3qRjFU.increaseAllowance.call(addressH6iOnHo, uintOQPl7L9, {from: accounts[4]});

		assert.equal(addressXtWggkY, 0xE28B863152b7dfC7426D0e93A87C2f5eC8e35664)
		assert.equal(stringtaXlFIT, "FETFX")
		await expect(ETFXPool3qRjFU.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolu8PqSoV = await ETFXPool.new({from: accounts[0]});
		const uintG5zizG2 = BigInt("1188")
		const addressI7TgiYk = accounts[4]
		const uintLG0M5w0 = BigInt("960")
		const addressx4K6IZ7 = accounts[3]
		const addressg9vJj3a = accounts[0]
		const addressVoQGSu = accounts[2]
		const uint8nip39dN = await ETFXPoolu8PqSoV.decimals.call({from: accounts[4]});
		const boolzFVeonB = await ETFXPoolu8PqSoV.increaseAllowance.call(addressI7TgiYk, uintG5zizG2, {from: "0x0000000000000000000000000000000000000001"});
		await ETFXPoolu8PqSoV.renounceOwnership.call({from: accounts[3]});
		const boolAGPE67 = await ETFXPoolu8PqSoV.increaseAllowance.call(addressx4K6IZ7, uintLG0M5w0, {from: accounts[3]});
		const stringLvX4B9l = await ETFXPoolu8PqSoV.name.call({from: accounts[3]});
		const uint256wxyz7dy = await ETFXPoolu8PqSoV.allowance.call(addressVoQGSu, addressg9vJj3a, {from: accounts[0]});

		assert.equal(boolzFVeonB, true)
		assert.equal(uint8nip39dN, BigInt("8"))
		await expect(ETFXPoolu8PqSoV.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolP4jRjvd = await ETFXPool.new({from: accounts[0]});
		const uintN7CRFzT = BigInt("1532")
		const addressGAA9j6c = "0x0000000000000000000000000000000000000001"
		const addressyRLaW9F = accounts[4]
		const addressLObHrW = accounts[4]
		const uintk0kO5iI = BigInt("1017")
		const addressI3bIvHC = accounts[4]
		await ETFXPoolP4jRjvd.exit.call({from: accounts[3]});
		const booljpGXJ6T = await ETFXPoolP4jRjvd.increaseAllowance.call(addressGAA9j6c, uintN7CRFzT, {from: accounts[2]});
		const uint256n0dF3NF = await ETFXPoolP4jRjvd.allowance.call(addressLObHrW, addressyRLaW9F, {from: accounts[3]});
		const boolOpKCdJy = await ETFXPoolP4jRjvd.approve.call(addressI3bIvHC, uintk0kO5iI, {from: accounts[3]});

		await expect(ETFXPoolP4jRjvd.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolL5uLDQf = await ETFXPool.new({from: accounts[0]});
		const addressrbNhcQo = accounts[4]
		const addresszx1vjtv = accounts[3]
		const uintbi9z4xv = BigInt("1279")
		const addressmvOfnwl = accounts[1]
		const addressaNDY2TY = accounts[0]
		const uint256Ls40zhD = await ETFXPoolL5uLDQf.allowance.call(addresszx1vjtv, addressrbNhcQo, {from: accounts[0]});
		await ETFXPoolL5uLDQf.exit.call({from: accounts[3]});
		const uint8K8TSOkB = await ETFXPoolL5uLDQf.decimals.call({from: accounts[3]});
		const boolIIei4fN = await ETFXPoolL5uLDQf.approve.call(addressmvOfnwl, uintbi9z4xv, {from: accounts[1]});
		const addressGezdQi7 = await ETFXPoolL5uLDQf.transferOwnership.call(addressaNDY2TY, {from: accounts[0]});

		assert.equal(uint256Ls40zhD, BigInt("0"))
		await expect(ETFXPoolL5uLDQf.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolAL9MTot = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUJI3siz = BigInt("1834")
		const addresspPYHVJR = accounts[1]
		const uintfMh41VQ = BigInt("1053")
		const uintw1aVkby = BigInt("569")
		const addressSOFhqb = await ETFXPoolAL9MTot.owner.call({from: accounts[5]});
		const boolO5qPanZ = await ETFXPoolAL9MTot.increaseAllowance.call(addresspPYHVJR, uintUJI3siz, {from: accounts[5]});
		const uint256kFN0GLz = await ETFXPoolAL9MTot.withdraw.call(uintfMh41VQ, {from: accounts[0]});
		const uint256uepfC4 = await ETFXPoolAL9MTot.withdraw.call(uintw1aVkby, {from: accounts[0]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTW0no83 = await ETFXPool.new({from: accounts[1]});
		const uintSTR5Klz = BigInt("1619")
		const addressOmJIgy = accounts[3]
		const addressYEMeI0 = accounts[2]
		const uintyH0JPFF = BigInt("1661")
		const addressKqO1SwL = accounts[5]
		const addressdCfwVD0 = accounts[0]
		const uint8N6WhHWH = await ETFXPoolTW0no83.decimals.call({from: accounts[3]});
		const boolVCtnkAZ = await ETFXPoolTW0no83.decreaseAllowance.call(addressOmJIgy, uintSTR5Klz, {from: accounts[0]});
		const uint256u5TITLb = await ETFXPoolTW0no83.earned.call(addressYEMeI0, {from: accounts[1]});
		const uint2565ipbNM = await ETFXPoolTW0no83.rewardPerToken.call({from: accounts[4]});
		const boolhJCQ96q = await ETFXPoolTW0no83.increaseAllowance.call(addressKqO1SwL, uintyH0JPFF, {from: accounts[3]});
		const uint256VWLxa2r = await ETFXPoolTW0no83.balanceOf.call(addressdCfwVD0, {from: accounts[1]});

		assert.equal(uint8N6WhHWH, BigInt("8"))
		await expect(ETFXPoolTW0no83.decreaseAllowance.call(addressOmJIgy, uintSTR5Klz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolSCGxwjb = await ETFXPool.new({from: accounts[1]});
		const uintqXOVsf = BigInt("1954")
		const addressqDvU0Ye = accounts[0]
		const boolQQRvpZT = await ETFXPoolSCGxwjb.transfer.call(addressqDvU0Ye, uintqXOVsf, {from: accounts[4]});
		await ETFXPoolSCGxwjb.renounceOwnership.call({from: accounts[1]});
		const uint256t3t8AxH = await ETFXPoolSCGxwjb.totalSupply.call({from: accounts[0]});
		await ETFXPoolSCGxwjb.getReward.call({from: accounts[1]});

		await expect(ETFXPoolSCGxwjb.transfer.call(addressqDvU0Ye, uintqXOVsf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolzVQen28 = await ETFXPool.new({from: accounts[1]});
		const uintEkdS9o9 = BigInt("376")
		const uintiGntfl = BigInt("363")
		const addressWA4YfaA = accounts[4]
		const addressyPN57vd = accounts[2]
		const uintfH4GZ7F = BigInt("729")
		const addressxF83Xcm = accounts[4]
		const uint256ayimPia = await ETFXPoolzVQen28.withdraw.call(uintEkdS9o9, {from: accounts[2]});
		const boolV6dHtB6 = await ETFXPoolzVQen28.transferFrom.call(addressyPN57vd, addressWA4YfaA, uintiGntfl, {from: accounts[0]});
		const boolwIBpvlG = await ETFXPoolzVQen28.decreaseAllowance.call(addressxF83Xcm, uintfH4GZ7F, {from: accounts[4]});
		await ETFXPoolzVQen28.getReward.call({from: accounts[5]});
		const uint2561Ado7x = await ETFXPoolzVQen28.rewardPerToken.call({from: accounts[0]});
		await ETFXPoolzVQen28.onlyOwner.call({from: accounts[3]});

		await expect(ETFXPoolzVQen28.withdraw.call(uintEkdS9o9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTW0no83 = await ETFXPool.new({from: accounts[1]});
		const uintSiyjGMY = BigInt("1232")
		const stringX20Kn3D = await ETFXPoolTW0no83.name.call({from: accounts[3]});
		const uint256avZCFYm = await ETFXPoolTW0no83.stake.call(uintSiyjGMY, {from: accounts[2]});
		const uint8N6WhHWH = await ETFXPoolTW0no83.decimals.call({from: accounts[3]});

		assert.equal(stringX20Kn3D, "ETFX-FARM")
		await expect(ETFXPoolTW0no83.stake.call(uintSiyjGMY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTW0no83 = await ETFXPool.new({from: accounts[1]});
		const uintufldk8x = BigInt("11")
		const addressrgxgld1 = accounts[5]
		const addressS56c8KQ = "0x0000000000000000000000000000000000000001"
		const addressvRo7swV = accounts[2]
		const uint2565ipbNM = await ETFXPoolTW0no83.rewardPerToken.call({from: accounts[4]});
		const boolgYKgsY = await ETFXPoolTW0no83.transferFrom.call(addressS56c8KQ, addressrgxgld1, uintufldk8x, {from: accounts[2]});
		const stringMSA5WlC = await ETFXPoolTW0no83.symbol.call({from: accounts[1]});
		const uint256VWLxa2r = await ETFXPoolTW0no83.balanceOf.call(addressvRo7swV, {from: accounts[1]});

		assert.equal(uint2565ipbNM, BigInt("0"))
		await expect(ETFXPoolTW0no83.transferFrom.call(addressS56c8KQ, addressrgxgld1, uintufldk8x, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTW0no83 = await ETFXPool.new({from: accounts[1]});
		const addressRzcR6Iv = accounts[1]
		const uint8N6WhHWH = await ETFXPoolTW0no83.decimals.call({from: accounts[3]});
		const addressiu6Bcgq = await ETFXPoolTW0no83.transferOwnership.call(addressRzcR6Iv, {from: accounts[1]});

		assert.equal(uint8N6WhHWH, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTW0no83 = await ETFXPool.new({from: accounts[1]});
		const addressURJqlvO = accounts[4]
		const addressewR3zDg = accounts[2]
		const uint256HVzxRzQ = await ETFXPoolTW0no83.allowance.call(addressewR3zDg, addressURJqlvO, {from: accounts[1]});
		await ETFXPoolTW0no83.renounceOwnership.call({from: accounts[1]});
		const uint2565ipbNM = await ETFXPoolTW0no83.rewardPerToken.call({from: accounts[4]});

		assert.equal(uint256HVzxRzQ, BigInt("0"))
		await expect(ETFXPoolTW0no83.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTW0no83 = await ETFXPool.new({from: accounts[1]});
		const uintWdZtTk = BigInt("1236")
		const addressUgaelxN = "0x0000000000000000000000000000000000000001"
		const boolcNmFxY = await ETFXPoolTW0no83.approve.call(addressUgaelxN, uintWdZtTk, {from: accounts[3]});
		const uint8N6WhHWH = await ETFXPoolTW0no83.decimals.call({from: accounts[3]});

		assert.equal(boolcNmFxY, true)
		assert.equal(uint8N6WhHWH, BigInt("8"))
	});
})