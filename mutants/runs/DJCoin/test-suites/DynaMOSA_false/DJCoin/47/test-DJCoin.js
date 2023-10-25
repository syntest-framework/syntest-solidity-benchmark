const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinpXCjLVr = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressXtU29v9 = accounts[4]
		const addressn2fcbbK = accounts[2]
		const addressx4UubXx = accounts[0]
		const uintBMA2Rro = BigInt("1567")
		const addresst34VoXY = accounts[5]
		const addressN3VZxiB = accounts[1]
		const uint256GMyYs7S = await DJCoinpXCjLVr.totalSupply.call({from: accounts[3]});
		const uint256AMbeLV1 = await DJCoinpXCjLVr.allowance.call(addressn2fcbbK, addressXtU29v9, {from: accounts[0]});
		const addressbCDzgC6 = await DJCoinpXCjLVr.validRecipient.call(addressx4UubXx, {from: accounts[0]});
		const boolCj3hfMV = await DJCoinpXCjLVr.transferFrom.call(addressN3VZxiB, addresst34VoXY, uintBMA2Rro, {from: accounts[3]});
	});

	it('test for DJCoin', async () => {
		const DJCoinUUisX2h = await DJCoin.new({from: accounts[3]});
		const addressh3i7Fwn = "0x0000000000000000000000000000000000000001"
		const uintnlHxnUB = BigInt("25")
		const addressS6kA1gN = accounts[4]
		const addresspBC7Jx0 = accounts[0]
		const addressRKiWaIT = accounts[0]
		const uintidFJD8H = BigInt("73")
		const uintHJ4tmaL = BigInt("602")
		const uint256Gsrje5q = await DJCoinUUisX2h.balanceOf.call(addressh3i7Fwn, {from: accounts[4]});
		await DJCoinUUisX2h.renounceOwnership.call({from: accounts[0]});
		const boolN8vxmg4 = await DJCoinUUisX2h.decreaseAllowance.call(addressS6kA1gN, uintnlHxnUB, {from: accounts[1]});
		const uint256E5Tv012 = await DJCoinUUisX2h.allowance.call(addressRKiWaIT, addresspBC7Jx0, {from: accounts[1]});
		await DJCoinUUisX2h.onlyOwner.call({from: accounts[0]});
		const uint256fxp14Yj = await DJCoinUUisX2h.burn.call(uintHJ4tmaL, uintidFJD8H, {from: accounts[3]});

		assert.equal(uint256Gsrje5q, BigInt("0"))
		await expect(DJCoinUUisX2h.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinz4JOYGT = await DJCoin.new({from: accounts[2]});
		const uinthmhUr4t = BigInt("803")
		const uintehMfvFT = BigInt("1467")
		const uintSlNJrZd = BigInt("688")
		const addressLyQ0UcH = accounts[1]
		const uint256P3uYPtV = await DJCoinz4JOYGT.burn.call(uintehMfvFT, uinthmhUr4t, {from: accounts[2]});
		const boolojPMOVX = await DJCoinz4JOYGT.decreaseAllowance.call(addressLyQ0UcH, uintSlNJrZd, {from: accounts[0]});

		assert.equal(boolojPMOVX, true)
		assert.equal(uint256P3uYPtV, BigInt("1931370000000"))
	});

	it('test for DJCoin', async () => {
		const DJCoinFONIF9n = await DJCoin.new({from: accounts[1]});
		const uintzdyUP0n = BigInt("1787")
		const address4bpmAY = accounts[1]
		const uintfLL0euH = BigInt("1863")
		const addressMLg82tX = accounts[3]
		const addressYIl7E4F = accounts[1]
		const uint256vrTRwwb = await DJCoinFONIF9n.totalSupply.call({from: accounts[4]});
		const boolliJ7qbV = await DJCoinFONIF9n.decreaseAllowance.call(address4bpmAY, uintzdyUP0n, {from: accounts[1]});
		await DJCoinFONIF9n.onlyOwner.call({from: accounts[3]});
		const boolIbsIoRH = await DJCoinFONIF9n.decreaseAllowance.call(addressMLg82tX, uintfLL0euH, {from: accounts[3]});
		const addressLuam0Ib = await DJCoinFONIF9n.validRecipient.call(addressYIl7E4F, {from: accounts[1]});
		const uint256hmC6VZw = await DJCoinFONIF9n.totalSupply.call({from: accounts[0]});

		assert.equal(boolliJ7qbV, true)
		assert.equal(uint256vrTRwwb, BigInt("2100000000000"))
		await expect(DJCoinFONIF9n.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinhogYU9o = await DJCoin.new({from: accounts[3]});
		const uintZnZFWX5 = BigInt("1374")
		const addressKrjkD1y = accounts[4]
		const uintxeLY3Ba = BigInt("1146")
		const uintapQIWzn = BigInt("472")
		const addressljiOqcp = accounts[2]
		const uintq8hYNhp = BigInt("1691")
		const addressA7N8qp7 = accounts[1]
		const boold9SIMaZ = await DJCoinhogYU9o.increaseAllowance.call(addressKrjkD1y, uintZnZFWX5, {from: accounts[4]});
		const boolzafdJrB = await DJCoinhogYU9o.changetokensPerBlock.call(uintxeLY3Ba, {from: accounts[3]});
		const boolisSWaVm = await DJCoinhogYU9o.transfer.call(addressljiOqcp, uintapQIWzn, {from: accounts[4]});
		const boolbGybSxZ = await DJCoinhogYU9o.approve.call(addressA7N8qp7, uintq8hYNhp, {from: accounts[2]});

		assert.equal(boold9SIMaZ, true)
		assert.equal(boolzafdJrB, true)
		await expect(DJCoinhogYU9o.transfer.call(addressljiOqcp, uintapQIWzn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinxzOZjeI = await DJCoin.new({from: accounts[1]});
		const uintoqdQOhp = BigInt("1533")
		const addressVY1oMiY = accounts[2]
		const addresszn73kkj = accounts[2]
		const uintfRmYkmb = BigInt("818")
		const addressf5D35p0 = accounts[3]
		const addressAGMemW2 = accounts[5]
		const boolcvPVIaU = await DJCoinxzOZjeI.transferFrom.call(addresszn73kkj, addressVY1oMiY, uintoqdQOhp, {from: "0x0000000000000000000000000000000000000001"});
		const boolj43YHdI = await DJCoinxzOZjeI.increaseAllowance.call(addressf5D35p0, uintfRmYkmb, {from: accounts[1]});
		const addressHNHCUhH = await DJCoinxzOZjeI.validRecipient.call(addressAGMemW2, {from: accounts[4]});
		const uint256A8AxxyT = await DJCoinxzOZjeI.totalSupply.call({from: accounts[3]});

		await expect(DJCoinxzOZjeI.transferFrom.call(addresszn73kkj, addressVY1oMiY, uintoqdQOhp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinpICkOXH = await DJCoin.new({from: accounts[3]});
		const addresskrOzQHA = "0x0000000000000000000000000000000000000001"
		const addressV5nJqBP = accounts[3]
		const uintUmVBaeR = BigInt("544")
		const uintfLQvAMx = BigInt("469")
		const uintIO50BiN = BigInt("1578")
		const addressDZpFl2L = accounts[1]
		const uint256OpxYNMg = await DJCoinpICkOXH.allowance.call(addressV5nJqBP, addresskrOzQHA, {from: accounts[2]});
		const uint256XBCBeGO = await DJCoinpICkOXH.burn.call(uintfLQvAMx, uintUmVBaeR, {from: accounts[3]});
		const boolT7svhyt = await DJCoinpICkOXH.transfer.call(addressDZpFl2L, uintIO50BiN, {from: accounts[2]});

		assert.equal(uint256OpxYNMg, BigInt("0"))
		assert.equal(uint256XBCBeGO, BigInt("1985760000000"))
		await expect(DJCoinpICkOXH.transfer.call(addressDZpFl2L, uintIO50BiN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinhogYU9o = await DJCoin.new({from: accounts[3]});
		const uintygutkmK = BigInt("1374")
		const addressz4p0Qxo = accounts[4]
		const uintwmbzJUl = BigInt("1146")
		const uintoDZTQPZ = BigInt("1711")
		const addressd41Xcdd = accounts[1]
		const boold9SIMaZ = await DJCoinhogYU9o.increaseAllowance.call(addressz4p0Qxo, uintygutkmK, {from: accounts[4]});
		const boolzafdJrB = await DJCoinhogYU9o.changetokensPerBlock.call(uintwmbzJUl, {from: accounts[3]});
		const boolbGybSxZ = await DJCoinhogYU9o.approve.call(addressd41Xcdd, uintoDZTQPZ, {from: accounts[2]});

		assert.equal(boolbGybSxZ, true)
		assert.equal(boold9SIMaZ, true)
		assert.equal(boolzafdJrB, true)
	});

	it('test for DJCoin', async () => {
		const DJCoinhogYU9o = await DJCoin.new({from: accounts[3]});
		const addressDgHwPCj = accounts[4]
		const uintvDFQXfi = BigInt("1374")
		const addressTvv7Xk1 = accounts[4]
		const uintodKaCj = BigInt("335")
		const uintCrOOmOk = BigInt("472")
		const addressSy2fv5d = accounts[2]
		const uintOAsjUvf = BigInt("1691")
		const addressEhTje8B = accounts[1]
		const addressx2lTVhI = await DJCoinhogYU9o.transferOwnership.call(addressDgHwPCj, {from: accounts[3]});
		const boold9SIMaZ = await DJCoinhogYU9o.increaseAllowance.call(addressTvv7Xk1, uintvDFQXfi, {from: accounts[4]});
		const boolzafdJrB = await DJCoinhogYU9o.changetokensPerBlock.call(uintodKaCj, {from: accounts[3]});
		const boolisSWaVm = await DJCoinhogYU9o.transfer.call(addressSy2fv5d, uintCrOOmOk, {from: accounts[4]});
		const boolbGybSxZ = await DJCoinhogYU9o.approve.call(addressEhTje8B, uintOAsjUvf, {from: accounts[2]});

		assert.equal(boold9SIMaZ, true)
		assert.equal(boolzafdJrB, true)
		await expect(DJCoinhogYU9o.transfer.call(addressSy2fv5d, uintCrOOmOk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinz4JOYGT = await DJCoin.new({from: accounts[2]});
		const uintghKYdDM = BigInt("413")
		const addressTefZ1K = accounts[4]
		const addressKqhEmyW = accounts[4]
		const uintGcyVYfT = BigInt("771")
		const uintuBZQIyN = BigInt("1467")
		const addressA1mZs2a = await DJCoinz4JOYGT.owner.call({from: accounts[0]});
		const boolpjQMLKp = await DJCoinz4JOYGT.transferFrom.call(addressKqhEmyW, addressTefZ1K, uintghKYdDM, {from: accounts[1]});
		const uint256P3uYPtV = await DJCoinz4JOYGT.burn.call(uintuBZQIyN, uintGcyVYfT, {from: accounts[2]});

		assert.equal(addressA1mZs2a, 0xFfAa3A65B61Cdb5DFaD96Cb41c77eC6965697D0E)
		await expect(DJCoinz4JOYGT.transferFrom.call(addressKqhEmyW, addressTefZ1K, uintghKYdDM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinO2Toiv = await DJCoin.new({from: accounts[4]});
		const addressFecxiXX = "0x0000000000000000000000000000000000000001"
		const addresskHhNUI = accounts[4]
		const uintB7q8Ftp = BigInt("117")
		const addressPR1zHT7 = accounts[1]
		const addressf9HsUKH = accounts[3]
		const addresszaxTvrp = accounts[2]
		const uintED3Aum7 = BigInt("1874")
		const addressjYZCMSu = accounts[0]
		const uint256mC6kP3X = await DJCoinO2Toiv.allowance.call(addresskHhNUI, addressFecxiXX, {from: accounts[5]});
		await DJCoinO2Toiv.renounceOwnership.call({from: accounts[4]});
		const booltyDcr3Y = await DJCoinO2Toiv.transfer.call(addressPR1zHT7, uintB7q8Ftp, {from: accounts[0]});
		const uint256lUCw146 = await DJCoinO2Toiv.allowance.call(addresszaxTvrp, addressf9HsUKH, {from: accounts[5]});
		const boolCEZbOg3 = await DJCoinO2Toiv.transfer.call(addressjYZCMSu, uintED3Aum7, {from: accounts[3]});

		assert.equal(uint256mC6kP3X, BigInt("0"))
		await expect(DJCoinO2Toiv.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinO2Toiv = await DJCoin.new({from: accounts[4]});
		const uinthZdK4lU = BigInt("0")
		const addressqPnNqiK = accounts[1]
		const addressnPDEfDS = accounts[4]
		const uintxkS4i59 = BigInt("117")
		const addressYZlydR4 = accounts[2]
		const boolvbIbnY8 = await DJCoinO2Toiv.transfer.call(addressqPnNqiK, uinthZdK4lU, {from: accounts[2]});
		const addressHQbgX5j = await DJCoinO2Toiv.transferOwnership.call(addressnPDEfDS, {from: accounts[0]});
		const booltyDcr3Y = await DJCoinO2Toiv.transfer.call(addressYZlydR4, uintxkS4i59, {from: accounts[0]});

		assert.equal(boolvbIbnY8, true)
		await expect(DJCoinO2Toiv.transferOwnership.call(addressnPDEfDS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})