const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPooltsJ5Pk8 = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const addressyDj3QI = accounts[2]
		await ETFXPooltsJ5Pk8.onlyOwner.call({from: accounts[3]});
		const uint256Xm8HUjJ = await ETFXPooltsJ5Pk8.totalSupply.call({from: accounts[4]});
		const uint256x27Ccbg = await ETFXPooltsJ5Pk8.earned.call(addressyDj3QI, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ETFXPool', async () => {
		const ETFXPooltpDJF2j = await ETFXPool.new({from: accounts[1]});
		const uintglXED4R = BigInt("55")
		const addressekPTNqI = accounts[4]
		const uintBo0jHtW = BigInt("217")
		const addressHcreP2h = accounts[0]
		const boolmCGMhRe = await ETFXPooltpDJF2j.increaseAllowance.call(addressekPTNqI, uintglXED4R, {from: accounts[0]});
		const stringVaHdsZ = await ETFXPooltpDJF2j.name.call({from: accounts[4]});
//		const boolGpubEkq = await ETFXPooltpDJF2j.decreaseAllowance.call(addressHcreP2h, uintBo0jHtW, {from: accounts[2]});

		assert.equal(boolmCGMhRe, true)
		assert.equal(stringVaHdsZ, "ETFX-FARM")
		await expect(ETFXPooltpDJF2j.decreaseAllowance.call(addressHcreP2h, uintBo0jHtW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringnCneyg8 = "YcFmUSfDEejYhTo1GGnRTAdOQZiUcSP1dVk3P5YrUQbKLi09XWdLFifk8LwvjX9FsYkG62m0xEWOC793QQUFfP9QTRQbSDiF325"
		const stringWgNjOVe = "l287zgneZFUWGc5OOAAPw4EujOPJAP2rFvAsi3TDYv7SQT3lg1b"
		const uintFa6ppey = BigInt("127")
		const ETFXPoolpnG8Gq2 = await ETFXPool.new(stringnCneyg8, stringWgNjOVe, uintFa6ppey, {from: accounts[1]});
		const uintilPy68 = BigInt("225")
		const addressAPem62a = accounts[3]
		const stringKOk9zEh = await ETFXPoolpnG8Gq2.symbol.call({from: accounts[0]});
		const uint256hkQcRBw = await ETFXPoolpnG8Gq2.stake.call(uintilPy68, {from: accounts[3]});
		const uint256ufu78k2 = await ETFXPoolpnG8Gq2.earned.call(addressAPem62a, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolH9Qf5KR = await ETFXPool.new({from: accounts[1]});
//		await ETFXPoolH9Qf5KR.onlyOwner.call({from: accounts[0]});
//		const addressoq5WFQQ = await ETFXPoolH9Qf5KR.owner.call({from: accounts[2]});

		await expect(ETFXPoolH9Qf5KR.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolbevtiij = await ETFXPool.new({from: accounts[2]});
//		await ETFXPoolbevtiij.renounceOwnership.call({from: accounts[2]});
//		await ETFXPoolbevtiij.renounceOwnership.call({from: accounts[5]});
//		await ETFXPoolbevtiij.getReward.call({from: accounts[5]});
//		await ETFXPoolbevtiij.renounceOwnership.call({from: accounts[5]});

		await expect(ETFXPoolbevtiij.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolR55yFb4 = await ETFXPool.new({from: accounts[0]});
		const uintyp1ZJUD = BigInt("2034")
		const uintKw3NUsF = BigInt("573")
		const uintoEsqN4M = BigInt("356")
		const uintcECuDpR = BigInt("1867")
		const addressariYaS2 = accounts[4]
		const uintHWdsyXA = BigInt("235")
//		const uint256l1LmE6k = await ETFXPoolR55yFb4.withdraw.call(uintyp1ZJUD, {from: accounts[4]});
//		const uint256eqzrCf = await ETFXPoolR55yFb4.withdraw.call(uintKw3NUsF, {from: accounts[4]});
//		const uint256Ci9Lp50 = await ETFXPoolR55yFb4.withdraw.call(uintoEsqN4M, {from: accounts[4]});
//		const boolYGmFpJk = await ETFXPoolR55yFb4.transfer.call(addressariYaS2, uintcECuDpR, {from: accounts[1]});
//		const uint256PJDNWt = await ETFXPoolR55yFb4.withdraw.call(uintHWdsyXA, {from: accounts[4]});
//		const uint256kYMOos = await ETFXPoolR55yFb4.totalSupply.call({from: accounts[1]});

		await expect(ETFXPoolR55yFb4.withdraw.call(uintyp1ZJUD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolz48NVh = await ETFXPool.new({from: accounts[0]});
		const addresseDiDDo = accounts[0]
		const uint16A7bE = BigInt("490")
		const addressfv8ChNb = accounts[4]
		const addressiZ4zSSq = await ETFXPoolz48NVh.transferOwnership.call(addresseDiDDo, {from: accounts[0]});
		const stringtHTHLL = await ETFXPoolz48NVh.symbol.call({from: accounts[5]});
		const boolejeuV4T = await ETFXPoolz48NVh.increaseAllowance.call(addressfv8ChNb, uint16A7bE, {from: accounts[4]});

		assert.equal(boolejeuV4T, true)
		assert.equal(stringtHTHLL, "FETFX")
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolr7bPfTm = await ETFXPool.new({from: accounts[5]});
		const uintFXR0pj1 = BigInt("1603")
		const addressLxvFDPP = accounts[4]
		const addressd8Bazh5 = accounts[0]
		const addresszn9ASu = accounts[1]
		const uintgUduElq = BigInt("157")
		const addressrIeilb = accounts[0]
//		await ETFXPoolr7bPfTm.exit.call({from: accounts[4]});
//		const boolOKngR2K = await ETFXPoolr7bPfTm.decreaseAllowance.call(addressLxvFDPP, uintFXR0pj1, {from: accounts[2]});
//		const uint256z4I2UwZ = await ETFXPoolr7bPfTm.allowance.call(addresszn9ASu, addressd8Bazh5, {from: accounts[3]});
//		await ETFXPoolr7bPfTm.getReward.call({from: accounts[1]});
//		const addressxP1BWwv = await ETFXPoolr7bPfTm.owner.call({from: accounts[4]});
//		const uint256IAScYO8 = await ETFXPoolr7bPfTm.stake.call(uintgUduElq, {from: accounts[5]});
//		const addressXYhJPX4 = await ETFXPoolr7bPfTm.transferOwnership.call(addressrIeilb, {from: accounts[0]});
//		await ETFXPoolr7bPfTm.exit.call({from: accounts[2]});

		await expect(ETFXPoolr7bPfTm.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooltpDJF2j = await ETFXPool.new({from: accounts[1]});
		const uintNhrDObr = BigInt("55")
		const addressHsLP7l = accounts[4]
		const uintKfwUDpc = BigInt("540")
		const uintKLAJBJd = BigInt("187")
		const addressD95KmRr = accounts[0]
		const boolmCGMhRe = await ETFXPooltpDJF2j.increaseAllowance.call(addressHsLP7l, uintNhrDObr, {from: accounts[0]});
		const stringVaHdsZ = await ETFXPooltpDJF2j.name.call({from: accounts[4]});
//		const uint256r1tXP5j = await ETFXPooltpDJF2j.stake.call(uintKfwUDpc, {from: accounts[3]});
//		const uint8OXDxXQx = await ETFXPooltpDJF2j.decimals.call({from: accounts[0]});
//		const boolGpubEkq = await ETFXPooltpDJF2j.decreaseAllowance.call(addressD95KmRr, uintKLAJBJd, {from: accounts[2]});

		assert.equal(boolmCGMhRe, true)
		assert.equal(stringVaHdsZ, "ETFX-FARM")
		await expect(ETFXPooltpDJF2j.stake.call(uintKfwUDpc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolBT4SkSl = await ETFXPool.new({from: accounts[0]});
		const uintwrE1674 = BigInt("631")
		const addressJ9HouFB = accounts[2]
//		await ETFXPoolBT4SkSl.getReward.call({from: accounts[1]});
//		const boolpzNNOjS = await ETFXPoolBT4SkSl.increaseAllowance.call(addressJ9HouFB, uintwrE1674, {from: accounts[1]});

		await expect(ETFXPoolBT4SkSl.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolBT4SkSl = await ETFXPool.new({from: accounts[0]});
		const uintUyni31i = BigInt("461")
		const uintCIq4ah9 = BigInt("631")
		const addressvhpkGdP = accounts[2]
		const addressO6izCuR = await ETFXPoolBT4SkSl.owner.call({from: accounts[2]});
//		const uint256hZ7QOf = await ETFXPoolBT4SkSl.withdraw.call(uintUyni31i, {from: accounts[1]});
//		await ETFXPoolBT4SkSl.getReward.call({from: accounts[1]});
//		const boolpzNNOjS = await ETFXPoolBT4SkSl.increaseAllowance.call(addressvhpkGdP, uintCIq4ah9, {from: accounts[1]});

		assert.equal(addressO6izCuR, 0xf4A0A96D6C23f10817dA5f976FC46C43e30280B9)
		await expect(ETFXPoolBT4SkSl.withdraw.call(uintUyni31i, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolrPEi3ho = await ETFXPool.new({from: accounts[3]});
		const addressPtzFcD2 = accounts[0]
		const addressXfiyuw9 = accounts[0]
		const uint256M2jmoB = await ETFXPoolrPEi3ho.allowance.call(addressXfiyuw9, addressPtzFcD2, {from: accounts[3]});
		const stringUMQ6rUO = await ETFXPoolrPEi3ho.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const stringjOclrsM = await ETFXPoolrPEi3ho.name.call({from: accounts[1]});

		assert.equal(stringUMQ6rUO, "FETFX")
		assert.equal(stringjOclrsM, "ETFX-FARM")
		assert.equal(uint256M2jmoB, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolBT4SkSl = await ETFXPool.new({from: accounts[0]});
		const uintKrDd5O = BigInt("1021")
		const addressccQKqRh = accounts[2]
		const addressZEeBq8 = "0x0000000000000000000000000000000000000001"
//		const boolO5HgJ1 = await ETFXPoolBT4SkSl.transferFrom.call(addressZEeBq8, addressccQKqRh, uintKrDd5O, {from: accounts[2]});
//		await ETFXPoolBT4SkSl.getReward.call({from: accounts[1]});

		await expect(ETFXPoolBT4SkSl.transferFrom.call(addressZEeBq8, addressccQKqRh, uintKrDd5O, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolBT4SkSl = await ETFXPool.new({from: accounts[0]});
		const uintxzj5Itj = BigInt("452")
		const uint8HB2tQx5 = await ETFXPoolBT4SkSl.decimals.call({from: accounts[5]});
		const addressCzPNfmx = await ETFXPoolBT4SkSl.owner.call({from: accounts[2]});
//		const uint256hZ7QOf = await ETFXPoolBT4SkSl.withdraw.call(uintxzj5Itj, {from: accounts[1]});

		assert.equal(addressCzPNfmx, 0xf4A0A96D6C23f10817dA5f976FC46C43e30280B9)
		assert.equal(uint8HB2tQx5, BigInt("8"))
		await expect(ETFXPoolBT4SkSl.withdraw.call(uintxzj5Itj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolBT4SkSl = await ETFXPool.new({from: accounts[0]});
		const uintVRoZdG = BigInt("1539")
		const addressBEXQP7 = accounts[3]
//		const boolNiBC0L1 = await ETFXPoolBT4SkSl.transfer.call(addressBEXQP7, uintVRoZdG, {from: accounts[2]});

		await expect(ETFXPoolBT4SkSl.transfer.call(addressBEXQP7, uintVRoZdG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolBT4SkSl = await ETFXPool.new({from: accounts[0]});
		const uintiV9Vtmq = BigInt("1812")
		const addressHuLGBlC = accounts[3]
		const uintlPwyNU3 = BigInt("461")
		const boolBJtoM9l = await ETFXPoolBT4SkSl.approve.call(addressHuLGBlC, uintiV9Vtmq, {from: accounts[5]});
//		const uint256hZ7QOf = await ETFXPoolBT4SkSl.withdraw.call(uintlPwyNU3, {from: accounts[1]});

		assert.equal(boolBJtoM9l, true)
		await expect(ETFXPoolBT4SkSl.withdraw.call(uintlPwyNU3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolBT4SkSl = await ETFXPool.new({from: accounts[0]});
		const uintw6sBB5 = BigInt("1375")
		const uint8ra5tQtT = await ETFXPoolBT4SkSl.decimals.call({from: accounts[4]});
		const uint256Fn3S4pW = await ETFXPoolBT4SkSl.rewardPerToken.call({from: accounts[5]});
//		const uint256hZ7QOf = await ETFXPoolBT4SkSl.withdraw.call(uintw6sBB5, {from: accounts[1]});

		assert.equal(uint256Fn3S4pW, BigInt("0"))
		assert.equal(uint8ra5tQtT, BigInt("8"))
		await expect(ETFXPoolBT4SkSl.withdraw.call(uintw6sBB5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})