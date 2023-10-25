const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolAyJOmpx = await ETFXPool.new({from: accounts[0]});
		const uintl5b8qpX = BigInt("1776")
		const addressjMnk5i7 = accounts[2]
		const uintqxSLWl6 = BigInt("260")
		const addresstELTldc = accounts[0]
		await ETFXPoolAyJOmpx.exit.call({from: accounts[2]});
		const stringwmpOOhv = await ETFXPoolAyJOmpx.symbol.call({from: accounts[4]});
		const boolFGEDqWZ = await ETFXPoolAyJOmpx.transfer.call(addressjMnk5i7, uintl5b8qpX, {from: accounts[4]});
		const boolN9RIfJQ = await ETFXPoolAyJOmpx.transfer.call(addresstELTldc, uintqxSLWl6, {from: accounts[2]});
		await ETFXPoolAyJOmpx.nonReentrant.call({from: accounts[1]});

		await expect(ETFXPoolAyJOmpx.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolFo8LZqN = await ETFXPool.new({from: accounts[3]});
		const address1sK3Fh = accounts[3]
		const uintFoKuBg3 = BigInt("207")
		const addressCX0yxnH = "0x0000000000000000000000000000000000000001"
		const addressTqVZZnb = accounts[3]
		const stringqYPlX0 = await ETFXPoolFo8LZqN.symbol.call({from: accounts[5]});
		const uint256JszDaC7 = await ETFXPoolFo8LZqN.earned.call(address1sK3Fh, {from: accounts[3]});
		await ETFXPoolFo8LZqN.exit.call({from: accounts[4]});
		await ETFXPoolFo8LZqN.onlyOwner.call({from: accounts[2]});
		const boolQVInPen = await ETFXPoolFo8LZqN.transferFrom.call(addressTqVZZnb, addressCX0yxnH, uintFoKuBg3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringqYPlX0, "FETFX")
		await expect(ETFXPoolFo8LZqN.earned.call(address1sK3Fh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolBaZIP9v = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const uintinMLKSZ = BigInt("1426")
		const stringn8ujzil = await ETFXPoolBaZIP9v.symbol.call({from: accounts[5]});
		const uint256USvpf88 = await ETFXPoolBaZIP9v.stake.call(uintinMLKSZ, {from: accounts[0]});
		await ETFXPoolBaZIP9v.exit.call({from: accounts[0]});
		const addressrqmCKUb = await ETFXPoolBaZIP9v.owner.call({from: accounts[1]});
	});

	it('test for ETFXPool', async () => {
		const stringzHszdss = "bMtb9OkIRtYnqLCguQKuqyKR9a1hhy1PLaOabaNaPKqxhHrnLTsrXvN6G1Hq3qQa8S3M"
		const stringOXoUjMc = "L0dLH2wWUdLr2z4MvCSnj8QsgPrjaw5A09rEevcAI"
		const uintbYWDcQC = BigInt("169")
		const ETFXPoolgIeaBCe = await ETFXPool.new(stringzHszdss, stringOXoUjMc, uintbYWDcQC, {from: accounts[3]});
		const addressKQFHrQT = accounts[5]
		const addressPJvhjE = accounts[0]
		const uint256fqs3Gly = await ETFXPoolgIeaBCe.allowance.call(addressPJvhjE, addressKQFHrQT, {from: accounts[0]});
		await ETFXPoolgIeaBCe.renounceOwnership.call({from: accounts[0]});
		const uint8EgBwyTZ = await ETFXPoolgIeaBCe.decimals.call({from: accounts[1]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolefsx6wF = await ETFXPool.new({from: accounts[3]});
		const addressP2EQchA = accounts[5]
		const addressXowFW01 = accounts[1]
		const addressbqlUWxS = accounts[0]
		const uinthatLvmu = BigInt("266")
		const addressjMor99 = accounts[2]
		const addressR43kQzY = accounts[0]
		const uint256xhijPmq = await ETFXPoolefsx6wF.balanceOf.call(addressP2EQchA, {from: "0x0000000000000000000000000000000000000001"});
		const stringJ7x6QEg = await ETFXPoolefsx6wF.name.call({from: accounts[1]});
		await ETFXPoolefsx6wF.exit.call({from: accounts[4]});
		const uint256dFNLTm4 = await ETFXPoolefsx6wF.allowance.call(addressbqlUWxS, addressXowFW01, {from: accounts[1]});
		const boola3cefw0 = await ETFXPoolefsx6wF.transferFrom.call(addressR43kQzY, addressjMor99, uinthatLvmu, {from: accounts[2]});

		assert.equal(stringJ7x6QEg, "ETFX-FARM")
		assert.equal(uint256xhijPmq, BigInt("0"))
		await expect(ETFXPoolefsx6wF.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPool0JVuTv = await ETFXPool.new({from: accounts[3]});
		const addressZxOhVfc = "0x0000000000000000000000000000000000000001"
		const uintQlFbZ3k = BigInt("1019")
		const addresspvVpEap = accounts[0]
		const addressErrC2bH = accounts[2]
		const uintFgHZayz = BigInt("719")
		const addressDi7L7x8 = accounts[2]
		const addressMwlGFke = accounts[5]
		const uint256LbesIsY = await ETFXPool0JVuTv.balanceOf.call(addressZxOhVfc, {from: accounts[4]});
		const bool7t3tKw = await ETFXPool0JVuTv.transferFrom.call(addressErrC2bH, addresspvVpEap, uintQlFbZ3k, {from: accounts[0]});
		await ETFXPool0JVuTv.renounceOwnership.call({from: accounts[1]});
		const boolgzQruph = await ETFXPool0JVuTv.transferFrom.call(addressMwlGFke, addressDi7L7x8, uintFgHZayz, {from: accounts[5]});
		const stringzfDmt2g = await ETFXPool0JVuTv.symbol.call({from: accounts[5]});

		assert.equal(uint256LbesIsY, BigInt("0"))
		await expect(ETFXPool0JVuTv.transferFrom.call(addressErrC2bH, addresspvVpEap, uintQlFbZ3k, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolefsx6wF = await ETFXPool.new({from: accounts[3]});
		const addressGiKkvOh = accounts[6]
		const addressCmQJtP7 = accounts[1]
		const addressnyWLKRd = accounts[1]
		const addresseaMfQ9U = accounts[0]
		const uintLKo5pMM = BigInt("610")
		const addressQ1kzdj3 = accounts[2]
		const uintT60kBQk = BigInt("266")
		const addressXkhEa3s = accounts[2]
		const addresscqwuQ5D = accounts[0]
		const uint256xhijPmq = await ETFXPoolefsx6wF.balanceOf.call(addressGiKkvOh, {from: "0x0000000000000000000000000000000000000001"});
		const addresslgW474H = await ETFXPoolefsx6wF.transferOwnership.call(addressCmQJtP7, {from: accounts[4]});
		const stringJ7x6QEg = await ETFXPoolefsx6wF.name.call({from: accounts[1]});
		await ETFXPoolefsx6wF.exit.call({from: accounts[4]});
		const uint256dFNLTm4 = await ETFXPoolefsx6wF.allowance.call(addresseaMfQ9U, addressnyWLKRd, {from: accounts[1]});
		const boolRHahr78 = await ETFXPoolefsx6wF.approve.call(addressQ1kzdj3, uintLKo5pMM, {from: accounts[3]});
		const boola3cefw0 = await ETFXPoolefsx6wF.transferFrom.call(addresscqwuQ5D, addressXkhEa3s, uintT60kBQk, {from: accounts[2]});

		assert.equal(uint256xhijPmq, BigInt("0"))
		await expect(ETFXPoolefsx6wF.transferOwnership.call(addressCmQJtP7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolAyJOmpx = await ETFXPool.new({from: accounts[0]});
		const uintsTm8Tkl = BigInt("1776")
		const addressFxteJ1l = accounts[2]
		const uintecYt2pu = BigInt("260")
		const addresswsTiREt = accounts[0]
		const stringwmpOOhv = await ETFXPoolAyJOmpx.symbol.call({from: accounts[4]});
		const boolFGEDqWZ = await ETFXPoolAyJOmpx.transfer.call(addressFxteJ1l, uintsTm8Tkl, {from: accounts[4]});
		const boolN9RIfJQ = await ETFXPoolAyJOmpx.transfer.call(addresswsTiREt, uintecYt2pu, {from: accounts[2]});
		await ETFXPoolAyJOmpx.nonReentrant.call({from: accounts[1]});

		assert.equal(stringwmpOOhv, "FETFX")
		await expect(ETFXPoolAyJOmpx.transfer.call(addressFxteJ1l, uintsTm8Tkl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolFo8LZqN = await ETFXPool.new({from: accounts[3]});
		const uintOTHiqbQ = BigInt("1911")
		const uinto17rjg = BigInt("1712")
		const addressKTFB3Mf = "0x0000000000000000000000000000000000000001"
		const uintZDBdixE = BigInt("207")
		const address4uvJKg = "0x0000000000000000000000000000000000000001"
		const addressvW7IKBJ = accounts[3]
		const uint256j3s99P = await ETFXPoolFo8LZqN.stake.call(uintOTHiqbQ, {from: accounts[1]});
		const stringqYPlX0 = await ETFXPoolFo8LZqN.symbol.call({from: accounts[5]});
		await ETFXPoolFo8LZqN.exit.call({from: accounts[4]});
		await ETFXPoolFo8LZqN.onlyOwner.call({from: accounts[2]});
		const boolj460ch2 = await ETFXPoolFo8LZqN.decreaseAllowance.call(addressKTFB3Mf, uinto17rjg, {from: accounts[3]});
		await ETFXPoolFo8LZqN.getReward.call({from: accounts[4]});
		const boolQVInPen = await ETFXPoolFo8LZqN.transferFrom.call(addressvW7IKBJ, address4uvJKg, uintZDBdixE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPoolFo8LZqN.stake.call(uintOTHiqbQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolFo8LZqN = await ETFXPool.new({from: accounts[3]});
		const addressDLhRVn7 = accounts[3]
		const uintOywxK30 = BigInt("543")
		const addressy0bXnl = accounts[4]
		const uintzK5achK = BigInt("207")
		const addressuQ5hJw = "0x0000000000000000000000000000000000000001"
		const addressXKTqUqY = accounts[3]
		const stringqYPlX0 = await ETFXPoolFo8LZqN.symbol.call({from: accounts[5]});
		const uint256uXjXPe = await ETFXPoolFo8LZqN.totalSupply.call({from: accounts[1]});
		const uint8ZJXbHM2 = await ETFXPoolFo8LZqN.decimals.call({from: accounts[3]});
		const uint256JszDaC7 = await ETFXPoolFo8LZqN.earned.call(addressDLhRVn7, {from: accounts[3]});
		const boolFTxHLs1 = await ETFXPoolFo8LZqN.approve.call(addressy0bXnl, uintOywxK30, {from: accounts[1]});
		await ETFXPoolFo8LZqN.exit.call({from: accounts[4]});
		await ETFXPoolFo8LZqN.onlyOwner.call({from: accounts[2]});
		const boolQVInPen = await ETFXPoolFo8LZqN.transferFrom.call(addressXKTqUqY, addressuQ5hJw, uintzK5achK, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringqYPlX0, "FETFX")
		assert.equal(uint256uXjXPe, BigInt("0"))
		assert.equal(uint8ZJXbHM2, BigInt("8"))
		await expect(ETFXPoolFo8LZqN.earned.call(addressDLhRVn7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolefsx6wF = await ETFXPool.new({from: accounts[3]});
		const uintngr31cS = BigInt("1508")
		const addressOmvRtZh = accounts[6]
		const uintBMM3vCt = BigInt("70")
		const addressv8618O2 = accounts[0]
		const uintd0gYXr = BigInt("1872")
		const address9NA0Y3 = accounts[1]
		const address7NNm4j = accounts[0]
		const uintU0vA288 = BigInt("266")
		const address7tUOh8 = accounts[2]
		const addressAefgpUD = accounts[0]
		const uint256eMtDHLq = await ETFXPoolefsx6wF.withdraw.call(uintngr31cS, {from: accounts[5]});
		const uint256xhijPmq = await ETFXPoolefsx6wF.balanceOf.call(addressOmvRtZh, {from: "0x0000000000000000000000000000000000000001"});
		const booluyKAGs = await ETFXPoolefsx6wF.transfer.call(addressv8618O2, uintBMM3vCt, {from: accounts[2]});
		const uint256VVNhQCa = await ETFXPoolefsx6wF.withdraw.call(uintd0gYXr, {from: accounts[0]});
		const stringJ7x6QEg = await ETFXPoolefsx6wF.name.call({from: accounts[1]});
		await ETFXPoolefsx6wF.exit.call({from: accounts[4]});
		const uint256dFNLTm4 = await ETFXPoolefsx6wF.allowance.call(address7NNm4j, address9NA0Y3, {from: accounts[1]});
		const boola3cefw0 = await ETFXPoolefsx6wF.transferFrom.call(addressAefgpUD, address7tUOh8, uintU0vA288, {from: accounts[2]});

		await expect(ETFXPoolefsx6wF.withdraw.call(uintngr31cS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPool0JVuTv = await ETFXPool.new({from: accounts[3]});
		const uintGczRbUU = BigInt("694")
		const addresspbyyrvX = accounts[2]
		const addressj02qVI3 = accounts[0]
		const addressQZUnMnh = "0x0000000000000000000000000000000000000001"
		const uintmTIv2Eg = BigInt("1019")
		const addressUFwKPo = accounts[0]
		const addressAjHzpeb = accounts[2]
		const boolytdLZYn = await ETFXPool0JVuTv.approve.call(addresspbyyrvX, uintGczRbUU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256brsCWiS = await ETFXPool0JVuTv.earned.call(addressj02qVI3, {from: accounts[3]});
		const uint256LbesIsY = await ETFXPool0JVuTv.balanceOf.call(addressQZUnMnh, {from: accounts[4]});
		const bool7t3tKw = await ETFXPool0JVuTv.transferFrom.call(addressAjHzpeb, addressUFwKPo, uintmTIv2Eg, {from: accounts[0]});
		await ETFXPool0JVuTv.renounceOwnership.call({from: accounts[1]});
		const stringzfDmt2g = await ETFXPool0JVuTv.symbol.call({from: accounts[5]});

		assert.equal(boolytdLZYn, true)
		await expect(ETFXPool0JVuTv.earned.call(addressj02qVI3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolFo8LZqN = await ETFXPool.new({from: accounts[3]});
		const addressZufgM1A = accounts[3]
		const uintWan0DBH = BigInt("207")
		const addressaaHTzfi = "0x0000000000000000000000000000000000000001"
		const addressufBkdPW = accounts[3]
		const uintWHUzHoS = BigInt("453")
		const addressWkz2Ueq = accounts[1]
		const stringqYPlX0 = await ETFXPoolFo8LZqN.symbol.call({from: accounts[5]});
		await ETFXPoolFo8LZqN.getReward.call({from: accounts[2]});
		const uint256JszDaC7 = await ETFXPoolFo8LZqN.earned.call(addressZufgM1A, {from: accounts[3]});
		await ETFXPoolFo8LZqN.exit.call({from: accounts[4]});
		await ETFXPoolFo8LZqN.onlyOwner.call({from: accounts[2]});
		const boolQVInPen = await ETFXPoolFo8LZqN.transferFrom.call(addressufBkdPW, addressaaHTzfi, uintWan0DBH, {from: "0x0000000000000000000000000000000000000001"});
		const boolP3aZTdW = await ETFXPoolFo8LZqN.decreaseAllowance.call(addressWkz2Ueq, uintWHUzHoS, {from: accounts[1]});

		assert.equal(stringqYPlX0, "FETFX")
		await expect(ETFXPoolFo8LZqN.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolFo8LZqN = await ETFXPool.new({from: accounts[3]});
		const uintrlyMcqU = BigInt("1839")
		const addressSR823e0 = accounts[2]
		const addressckO1zb8 = accounts[3]
		const uintFuQdjVq = BigInt("207")
		const addressWX5SXA = "0x0000000000000000000000000000000000000001"
		const addressPvgUiZj = accounts[3]
		const stringqYPlX0 = await ETFXPoolFo8LZqN.symbol.call({from: accounts[5]});
		const boolx8R8oNG = await ETFXPoolFo8LZqN.increaseAllowance.call(addressSR823e0, uintrlyMcqU, {from: accounts[5]});
		await ETFXPoolFo8LZqN.getReward.call({from: accounts[2]});
		const uint256KuzUFxX = await ETFXPoolFo8LZqN.totalSupply.call({from: accounts[2]});
		const uint256XnSJBb = await ETFXPoolFo8LZqN.totalSupply.call({from: accounts[4]});
		const uint256JszDaC7 = await ETFXPoolFo8LZqN.earned.call(addressckO1zb8, {from: accounts[3]});
		await ETFXPoolFo8LZqN.exit.call({from: accounts[4]});
		await ETFXPoolFo8LZqN.onlyOwner.call({from: accounts[2]});
		const boolQVInPen = await ETFXPoolFo8LZqN.transferFrom.call(addressPvgUiZj, addressWX5SXA, uintFuQdjVq, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolx8R8oNG, true)
		assert.equal(stringqYPlX0, "FETFX")
		await expect(ETFXPoolFo8LZqN.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolFo8LZqN = await ETFXPool.new({from: accounts[3]});
		const addressEiZ8b3 = accounts[3]
		const uintDN0ukQb = BigInt("207")
		const addressmZ6gDfY = "0x0000000000000000000000000000000000000001"
		const addressO4tkGnq = accounts[3]
		const stringqYPlX0 = await ETFXPoolFo8LZqN.symbol.call({from: accounts[5]});
		const addressqHFl1N = await ETFXPoolFo8LZqN.owner.call({from: accounts[5]});
		const addresshbYMxt3 = await ETFXPoolFo8LZqN.owner.call({from: accounts[4]});
		await ETFXPoolFo8LZqN.getReward.call({from: accounts[2]});
		const uint256XnSJBb = await ETFXPoolFo8LZqN.totalSupply.call({from: accounts[4]});
		const uint256JszDaC7 = await ETFXPoolFo8LZqN.earned.call(addressEiZ8b3, {from: accounts[3]});
		await ETFXPoolFo8LZqN.onlyOwner.call({from: accounts[2]});
		const boolQVInPen = await ETFXPoolFo8LZqN.transferFrom.call(addressO4tkGnq, addressmZ6gDfY, uintDN0ukQb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresshbYMxt3, 0x13e6cb802D98a5163468740C3986c59139d10d95)
		assert.equal(addressqHFl1N, 0x13e6cb802D98a5163468740C3986c59139d10d95)
		assert.equal(stringqYPlX0, "FETFX")
		await expect(ETFXPoolFo8LZqN.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolFo8LZqN = await ETFXPool.new({from: accounts[3]});
		const uint5BalaD = BigInt("1014")
		const addressuBy9fVi = accounts[0]
		const uintjOYPgBz = BigInt("1738")
		const addressncHikvp = "0x0000000000000000000000000000000000000001"
		const addressb5D3mZ0 = accounts[3]
		const uintCnxnYuv = BigInt("1490")
		const addressu7wsuva = "0x0000000000000000000000000000000000000001"
		const uintjNifZVe = BigInt("207")
		const addresslS3Gqen = "0x0000000000000000000000000000000000000001"
		const addressxxpalmp = accounts[3]
		const uintB6gSppS = BigInt("453")
		const addressgxfvb21 = accounts[1]
		const stringqYPlX0 = await ETFXPoolFo8LZqN.symbol.call({from: accounts[5]});
		await ETFXPoolFo8LZqN.onlyOwner.call({from: accounts[4]});
		const booldv5F7v3 = await ETFXPoolFo8LZqN.decreaseAllowance.call(addressuBy9fVi, uint5BalaD, {from: accounts[4]});
		const booljO2PwST = await ETFXPoolFo8LZqN.transfer.call(addressncHikvp, uintjOYPgBz, {from: accounts[0]});
		await ETFXPoolFo8LZqN.getReward.call({from: accounts[2]});
		const uint256JszDaC7 = await ETFXPoolFo8LZqN.earned.call(addressb5D3mZ0, {from: accounts[3]});
		const boolvyJLnpq = await ETFXPoolFo8LZqN.increaseAllowance.call(addressu7wsuva, uintCnxnYuv, {from: accounts[1]});
		await ETFXPoolFo8LZqN.exit.call({from: accounts[4]});
		const boolQVInPen = await ETFXPoolFo8LZqN.transferFrom.call(addressxxpalmp, addresslS3Gqen, uintjNifZVe, {from: "0x0000000000000000000000000000000000000001"});
		const boolP3aZTdW = await ETFXPoolFo8LZqN.decreaseAllowance.call(addressgxfvb21, uintB6gSppS, {from: accounts[1]});

		assert.equal(stringqYPlX0, "FETFX")
		await expect(ETFXPoolFo8LZqN.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolFo8LZqN = await ETFXPool.new({from: accounts[3]});
		const address3KJ7dd = accounts[3]
		const addressaHiwDs0 = accounts[1]
		const addressT5KS2G = accounts[4]
		const uintaXvpw8k = BigInt("207")
		const addressWIDKZ5 = "0x0000000000000000000000000000000000000001"
		const addresspcyjkck = accounts[3]
		const stringqYPlX0 = await ETFXPoolFo8LZqN.symbol.call({from: accounts[5]});
		const uint256yKP9B8 = await ETFXPoolFo8LZqN.allowance.call(addressaHiwDs0, address3KJ7dd, {from: accounts[4]});
		await ETFXPoolFo8LZqN.getReward.call({from: accounts[2]});
		const uint256XnSJBb = await ETFXPoolFo8LZqN.totalSupply.call({from: accounts[4]});
		const uint256JszDaC7 = await ETFXPoolFo8LZqN.earned.call(addressT5KS2G, {from: accounts[3]});
		await ETFXPoolFo8LZqN.exit.call({from: accounts[4]});
		await ETFXPoolFo8LZqN.onlyOwner.call({from: accounts[2]});
		const boolQVInPen = await ETFXPoolFo8LZqN.transferFrom.call(addresspcyjkck, addressWIDKZ5, uintaXvpw8k, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringqYPlX0, "FETFX")
		assert.equal(uint256yKP9B8, BigInt("0"))
		await expect(ETFXPoolFo8LZqN.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolFo8LZqN = await ETFXPool.new({from: accounts[3]});
		const uintaYLNUS6 = BigInt("1978")
		const addressV7yZzVj = accounts[3]
		const addressSdwSKeO = accounts[3]
		const uintsOh2n8 = BigInt("207")
		const addressHHZvody = "0x0000000000000000000000000000000000000001"
		const addressKVMxFpC = accounts[3]
		const uinteVc8niV = BigInt("453")
		const addressjFpEyZo = accounts[1]
		const stringqYPlX0 = await ETFXPoolFo8LZqN.symbol.call({from: accounts[5]});
		const booldfE4vD = await ETFXPoolFo8LZqN.decreaseAllowance.call(addressV7yZzVj, uintaYLNUS6, {from: accounts[5]});
		await ETFXPoolFo8LZqN.getReward.call({from: accounts[2]});
		await ETFXPoolFo8LZqN.onlyOwner.call({from: accounts[0]});
		const uint256JszDaC7 = await ETFXPoolFo8LZqN.earned.call(addressSdwSKeO, {from: accounts[3]});
		await ETFXPoolFo8LZqN.exit.call({from: accounts[4]});
		const boolQVInPen = await ETFXPoolFo8LZqN.transferFrom.call(addressKVMxFpC, addressHHZvody, uintsOh2n8, {from: "0x0000000000000000000000000000000000000001"});
		const boolP3aZTdW = await ETFXPoolFo8LZqN.decreaseAllowance.call(addressjFpEyZo, uinteVc8niV, {from: accounts[1]});

		assert.equal(stringqYPlX0, "FETFX")
		await expect(ETFXPoolFo8LZqN.decreaseAllowance.call(addressV7yZzVj, uintaYLNUS6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolefsx6wF = await ETFXPool.new({from: accounts[3]});
		const uintrZgjZbM = BigInt("1528")
		const addressQPrRfQi = accounts[0]
		const uint256Yqa8wzd = await ETFXPoolefsx6wF.rewardPerToken.call({from: accounts[1]});
		const stringJ7x6QEg = await ETFXPoolefsx6wF.name.call({from: accounts[1]});
		const booli8auJK = await ETFXPoolefsx6wF.transfer.call(addressQPrRfQi, uintrZgjZbM, {from: accounts[5]});

		assert.equal(stringJ7x6QEg, "ETFX-FARM")
		assert.equal(uint256Yqa8wzd, BigInt("0"))
		await expect(ETFXPoolefsx6wF.transfer.call(addressQPrRfQi, uintrZgjZbM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooleKD1gnK = await ETFXPool.new({from: accounts[3]});
		await ETFXPooleKD1gnK.renounceOwnership.call({from: accounts[3]});
		const uint256I18vtKp = await ETFXPooleKD1gnK.rewardPerToken.call({from: accounts[4]});

		await expect(ETFXPooleKD1gnK.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooleKD1gnK = await ETFXPool.new({from: accounts[3]});
		const addressBnlMwK = accounts[2]
		const uinthgSuhp2 = BigInt("461")
		const uint256I18vtKp = await ETFXPooleKD1gnK.rewardPerToken.call({from: accounts[4]});
		const addressZYaDmkM = await ETFXPooleKD1gnK.transferOwnership.call(addressBnlMwK, {from: accounts[3]});
		const uint256rlborsQ = await ETFXPooleKD1gnK.stake.call(uinthgSuhp2, {from: accounts[4]});

		assert.equal(uint256I18vtKp, BigInt("0"))
		await expect(ETFXPooleKD1gnK.stake.call(uinthgSuhp2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})