const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinernjjhebj = await TimeMiner.new({from: accounts[5]});
		const addressSLzOyXh = accounts[2]
		const addressi8Jyl2H = accounts[1]
		const addressHqt99dY = accounts[3]
		const uint256ridfkXM = await TimeMinernjjhebj.totalSupply.call({from: accounts[4]});
		const uint256vkxhP1q = await TimeMinernjjhebj.balanceOfTokenCirculation.call(addressSLzOyXh, {from: accounts[3]});
		const uint256SJvYS4a = await TimeMinernjjhebj.balanceOfTokenCirculation.call(addressi8Jyl2H, {from: accounts[3]});
		const uint256lEmfGMb = await TimeMinernjjhebj.totalSupply.call({from: accounts[0]});
		const booloBT347Y = await TimeMinernjjhebj.isWhitelisted.call(addressHqt99dY, {from: accounts[4]});

		assert.equal(booloBT347Y, false)
		assert.equal(uint256SJvYS4a, BigInt("0"))
		assert.equal(uint256lEmfGMb, BigInt("24000000"))
		assert.equal(uint256ridfkXM, BigInt("24000000"))
		assert.equal(uint256vkxhP1q, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerbU6R9Ra = await TimeMiner.new({from: accounts[0]});
		const addressgctndWi = accounts[2]
		const uintCST3M20 = BigInt("208")
		const addressI7i9lqD = accounts[1]
		const boolY9MAaMm = await TimeMinerbU6R9Ra.isWhitelisted.call(addressgctndWi, {from: "0x0000000000000000000000000000000000000001"});
		const boolpcGZnoO = await TimeMinerbU6R9Ra.transfer.call(addressI7i9lqD, uintCST3M20, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolY9MAaMm, false)
		await expect(TimeMinerbU6R9Ra.transfer.call(addressI7i9lqD, uintCST3M20, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinernlJN0BT = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressDRKKhpo = "0x0000000000000000000000000000000000000001"
		const uintfeLij5 = BigInt("1005")
		const uint256SuEV1V = await TimeMinernlJN0BT.allInfoFor.call(addressDRKKhpo, {from: "0x0000000000000000000000000000000000000001"});
		const uintTMwpoqp = await TimeMinernlJN0BT.preSale.call(uintfeLij5, {from: accounts[1]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerITXhMCH = await TimeMiner.new({from: accounts[2]});
		const uintorgIHX6 = BigInt("1909")
		const addressfYGifm = accounts[1]
		const uintU0bNwIs = BigInt("1862")
		const addressBo0Rgc6 = accounts[3]
		const addressHa7a3wy = accounts[2]
		const addresspK2D7A = accounts[1]
		const addressogpwLpQ = accounts[3]
		const booltUWjysR = await TimeMinerITXhMCH.infoStableSystem.call({from: accounts[3]});
		const boolxdLoHWo = await TimeMinerITXhMCH.transfer.call(addressfYGifm, uintorgIHX6, {from: accounts[1]});
		const boolNOi6wl8 = await TimeMinerITXhMCH.transferFrom.call(addressHa7a3wy, addressBo0Rgc6, uintU0bNwIs, {from: accounts[0]});
		const uint256osX9i4K = await TimeMinerITXhMCH.allInfoFor.call(addresspK2D7A, {from: accounts[0]});
		const uint256XRpF9Cx = await TimeMinerITXhMCH.balanceOf.call(addressogpwLpQ, {from: accounts[3]});

		await expect(TimeMinerITXhMCH.transfer.call(addressfYGifm, uintorgIHX6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerr6AOo9T = await TimeMiner.new({from: accounts[1]});
		const addressGtQ6fdu = accounts[4]
		const addressXuYTwft = accounts[1]
		const addressAbAvmb = accounts[1]
		const addressWvF845K = accounts[2]
		const addressrtd84wx = accounts[1]
		const uint256M7x9Lq4 = await TimeMinerr6AOo9T.allInfoFor.call(addressGtQ6fdu, {from: "0x0000000000000000000000000000000000000001"});
		const uint256EpU8Nlg = await TimeMinerr6AOo9T.allowance.call(addressAbAvmb, addressXuYTwft, {from: accounts[3]});
		const uint256BzQjfgI = await TimeMinerr6AOo9T.balanceOfTokenCirculation.call(addressWvF845K, {from: accounts[5]});
		await TimeMinerr6AOo9T.preSaleFinished.call({from: accounts[0]});
		const uint256PI9unOI = await TimeMinerr6AOo9T.balanceOfTokenCirculation.call(addressrtd84wx, {from: accounts[2]});

		await expect(TimeMinerr6AOo9T.allInfoFor.call(addressGtQ6fdu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineriurO7Co = await TimeMiner.new({from: accounts[2]});
		const uintsAETRmv = BigInt("1664")
		const uintR8nQ0wr = BigInt("1846")
		const addressmm7iUb2 = accounts[2]
		const addresskMadNgn = accounts[4]
		const addressumFr53 = accounts[0]
		const addressc0pNF2s = accounts[5]
		const uint256uhfIz1h = await TimeMineriurO7Co.setPrizeFromNewAddress.call(uintR8nQ0wr, uintsAETRmv, {from: accounts[0]});
		const uint256NboVHzh = await TimeMineriurO7Co.allowance.call(addresskMadNgn, addressmm7iUb2, {from: accounts[0]});
		const uint256kjfoqVF = await TimeMineriurO7Co.allInfoFor.call(addressumFr53, {from: accounts[1]});
		const uint256yvxnTCc = await TimeMineriurO7Co.allInfoFor.call(addressc0pNF2s, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMineriurO7Co.setPrizeFromNewAddress.call(uintR8nQ0wr, uintsAETRmv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerDOvxsuc = await TimeMiner.new({from: accounts[2]});
		const uintlVIxYg5 = BigInt("759")
		const uintAz4znNs = BigInt("805")
		const addressvQX0TdB = accounts[1]
		await TimeMinerDOvxsuc.preSaleFinished.call({from: accounts[3]});
		const uint256cJFCoG = await TimeMinerDOvxsuc.changePreSalePriceIfToHigh.call(uintlVIxYg5, {from: accounts[5]});
		const boolEjH7LEf = await TimeMinerDOvxsuc.infoStableSystem.call({from: accounts[3]});
		const boolZ0pe8cr = await TimeMinerDOvxsuc.approve.call(addressvQX0TdB, uintAz4znNs, {from: accounts[2]});

		await expect(TimeMinerDOvxsuc.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerOpTML2U = await TimeMiner.new({from: accounts[5]});
		const addressXF9wYfh = accounts[2]
		const uint804Ctj = BigInt("1516")
		const address3JIQjM = accounts[4]
		const addresslmclGQE = accounts[1]
		const uintOrWxnY = BigInt("504")
		const addressHzsIqDZ = accounts[3]
		const addressslN7Ia = accounts[3]
		const addressKh0IQHb = accounts[3]
		const boollrClvoY = await TimeMinerOpTML2U.isWhitelisted.call(addressXF9wYfh, {from: accounts[1]});
		const boolnx5nJS = await TimeMinerOpTML2U.transferFrom.call(addresslmclGQE, address3JIQjM, uint804Ctj, {from: accounts[5]});
		const uint256mM2QT6n = await TimeMinerOpTML2U.changePreSalePriceIfToHigh.call(uintOrWxnY, {from: accounts[1]});
		const uint256j2KZ0vo = await TimeMinerOpTML2U.allowance.call(addressslN7Ia, addressHzsIqDZ, {from: accounts[4]});
		const uint256tGc4v8V = await TimeMinerOpTML2U.totalSupply.call({from: accounts[4]});
		const uint256yTJUwOy = await TimeMinerOpTML2U.allInfoFor.call(addressKh0IQHb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boollrClvoY, false)
		await expect(TimeMinerOpTML2U.transferFrom.call(addresslmclGQE, address3JIQjM, uint804Ctj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineriurO7Co = await TimeMiner.new({from: accounts[2]});
		const boolDtMKlim = true
		const uintBLsLoG9 = BigInt("1664")
		const uintBhOVimy = BigInt("1846")
		const addressoahkvFW = accounts[2]
		const addressoxS30tL = accounts[4]
		const addressGlwJVX = accounts[2]
		const addresslOSIEhv = accounts[1]
		const addressgerKjMf = accounts[5]
		const boolvfg96Ic = await TimeMineriurO7Co.setStableCoinSystem.call(boolDtMKlim, {from: accounts[1]});
		const uint256uhfIz1h = await TimeMineriurO7Co.setPrizeFromNewAddress.call(uintBhOVimy, uintBLsLoG9, {from: accounts[0]});
		const uint256NboVHzh = await TimeMineriurO7Co.allowance.call(addressoxS30tL, addressoahkvFW, {from: accounts[0]});
		const uint256IpGd6fz = await TimeMineriurO7Co.tokensToClaim.call(addressGlwJVX, {from: accounts[1]});
		const uint256kjfoqVF = await TimeMineriurO7Co.allInfoFor.call(addresslOSIEhv, {from: accounts[1]});
		const uint256yvxnTCc = await TimeMineriurO7Co.allInfoFor.call(addressgerKjMf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMineriurO7Co.setStableCoinSystem.call(boolDtMKlim, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineris8lXG6 = await TimeMiner.new({from: accounts[2]});
		const addressk7kBInk = accounts[1]
		const uintzJNH07b = BigInt("1167")
		const uintz9psj3O = BigInt("1601")
		const addressJFYHTRc = accounts[3]
		const uint256haYKtJJ = await TimeMineris8lXG6.balanceOf.call(addressk7kBInk, {from: accounts[5]});
		const uint256rLH98yh = await TimeMineris8lXG6.changePreSalePriceIfToHigh.call(uintzJNH07b, {from: "0x0000000000000000000000000000000000000001"});
		const boolSva8u70 = await TimeMineris8lXG6.approve.call(addressJFYHTRc, uintz9psj3O, {from: accounts[2]});

		assert.equal(uint256haYKtJJ, BigInt("0"))
		await expect(TimeMineris8lXG6.changePreSalePriceIfToHigh.call(uintzJNH07b, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerOpTML2U = await TimeMiner.new({from: accounts[5]});
		const addressxc0774G = accounts[3]
		const uintiLF4yIe = BigInt("1468")
		const addressX498LsH = accounts[5]
		const uintpiT87Xt = BigInt("1516")
		const addressEGZISyt = accounts[4]
		const addresswOkYR9n = accounts[1]
		const uintBzIpQVw = BigInt("504")
		const addressUx6mmGh = accounts[3]
		const addressHH4Jekg = accounts[3]
		const boollrClvoY = await TimeMinerOpTML2U.isWhitelisted.call(addressxc0774G, {from: accounts[1]});
		const boolraHARK0 = await TimeMinerOpTML2U.approve.call(addressX498LsH, uintiLF4yIe, {from: accounts[4]});
		const boolXkOT7gH = await TimeMinerOpTML2U.infoStableSystem.call({from: accounts[5]});
		const boolnx5nJS = await TimeMinerOpTML2U.transferFrom.call(addresswOkYR9n, addressEGZISyt, uintpiT87Xt, {from: accounts[5]});
		const uint256mM2QT6n = await TimeMinerOpTML2U.changePreSalePriceIfToHigh.call(uintBzIpQVw, {from: accounts[1]});
		const uint256j2KZ0vo = await TimeMinerOpTML2U.allowance.call(addressHH4Jekg, addressUx6mmGh, {from: accounts[4]});
		await TimeMinerOpTML2U.preSaleFinished.call({from: accounts[1]});
		const uint256tGc4v8V = await TimeMinerOpTML2U.totalSupply.call({from: accounts[4]});

		assert.equal(boollrClvoY, false)
		assert.equal(boolraHARK0, true)
		await expect(TimeMinerOpTML2U.transferFrom.call(addresswOkYR9n, addressEGZISyt, uintpiT87Xt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerbU6R9Ra = await TimeMiner.new({from: accounts[0]});
		const boolyo0pM7E = false
		const address8QD7SB = accounts[4]
		const uintn1n1yJ8 = BigInt("208")
		const addressy3H4Bv = accounts[3]
		const addressb27HwBK = await TimeMinerbU6R9Ra.whitelist.call(address8QD7SB, boolyo0pM7E, {from: accounts[0]});
		const boolpcGZnoO = await TimeMinerbU6R9Ra.transfer.call(addressy3H4Bv, uintn1n1yJ8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerbU6R9Ra.transfer.call(addressy3H4Bv, uintn1n1yJ8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineris8lXG6 = await TimeMiner.new({from: accounts[2]});
		const addressKv94kts = accounts[1]
		const uintoZXtlkJ = BigInt("395")
		const uintYVJWWhw = BigInt("1689")
		const uintDNEqxmZ = BigInt("1196")
		const uint256haYKtJJ = await TimeMineris8lXG6.balanceOf.call(addressKv94kts, {from: accounts[5]});
		const uintZf2sSht = await TimeMineris8lXG6.preSale.call(uintoZXtlkJ, {from: accounts[1]});
		const uintEYoLanV = await TimeMineris8lXG6.preSale.call(uintYVJWWhw, {from: accounts[3]});
		const uint256rLH98yh = await TimeMineris8lXG6.changePreSalePriceIfToHigh.call(uintDNEqxmZ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256haYKtJJ, BigInt("0"))
		await expect(TimeMineris8lXG6.preSale.call(uintoZXtlkJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineris8lXG6 = await TimeMiner.new({from: accounts[2]});
		const addressBN8jtxX = accounts[2]
		const addresswKcMXcu = accounts[1]
		const addressCMwuoMi = accounts[4]
		const uintHkjxBk1 = BigInt("1482")
		const uintrcMgREG = BigInt("674")
		const uintSdS2z8 = BigInt("1167")
		const uint256haYKtJJ = await TimeMineris8lXG6.balanceOf.call(addressBN8jtxX, {from: accounts[5]});
		const uint256Go6PUIM = await TimeMineris8lXG6.allowance.call(addressCMwuoMi, addresswKcMXcu, {from: "0x0000000000000000000000000000000000000001"});
		const uint256K2UefUl = await TimeMineris8lXG6.setPrizeFromNewAddress.call(uintrcMgREG, uintHkjxBk1, {from: accounts[0]});
		const uint256rLH98yh = await TimeMineris8lXG6.changePreSalePriceIfToHigh.call(uintSdS2z8, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Go6PUIM, BigInt("0"))
		assert.equal(uint256haYKtJJ, BigInt("12000000"))
		await expect(TimeMineris8lXG6.setPrizeFromNewAddress.call(uintrcMgREG, uintHkjxBk1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineriurO7Co = await TimeMiner.new({from: accounts[2]});
		const uintkuINXbf = BigInt("1664")
		const uintWb4BNZW = BigInt("531")
		const addressXffIVR3 = accounts[0]
		const boolN8x2R7P = await TimeMineriurO7Co.infoStableSystem.call({from: accounts[2]});
		await TimeMineriurO7Co.preSaleFinished.call({from: accounts[2]});
		const uint256uhfIz1h = await TimeMineriurO7Co.setPrizeFromNewAddress.call(uintWb4BNZW, uintkuINXbf, {from: accounts[0]});
		const uint256pKFhJkL = await TimeMineriurO7Co.balanceOfTokenCirculation.call(addressXffIVR3, {from: accounts[5]});

		await expect(TimeMineriurO7Co.preSaleFinished.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineriurO7Co = await TimeMiner.new({from: accounts[2]});
		const uintYAPzlnt = BigInt("261")
		const addressbKTxbOh = accounts[0]
		const boolDtMKlim = true
		const boolnpS7UW1 = await TimeMineriurO7Co.transfer.call(addressbKTxbOh, uintYAPzlnt, {from: accounts[2]});
		const boolvfg96Ic = await TimeMineriurO7Co.setStableCoinSystem.call(boolDtMKlim, {from: accounts[1]});

		assert.equal(boolnpS7UW1, true)
		await expect(TimeMineriurO7Co.setStableCoinSystem.call(boolDtMKlim, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineris8lXG6 = await TimeMiner.new({from: accounts[2]});
		const uintOeFaIRx = BigInt("317")
		const uintoXqMfCE = BigInt("1616")
		const boolIhAWVZZ = true
		const uintSjOmHts = BigInt("383")
		const uint256W7LtKCd = await TimeMineris8lXG6.setPrizeFromNewAddress.call(uintoXqMfCE, uintOeFaIRx, {from: accounts[2]});
		const boolJklHxKl = await TimeMineris8lXG6.setStableCoinSystem.call(boolIhAWVZZ, {from: accounts[3]});
		const uintZf2sSht = await TimeMineris8lXG6.preSale.call(uintSjOmHts, {from: accounts[1]});

		await expect(TimeMineris8lXG6.setStableCoinSystem.call(boolIhAWVZZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineris8lXG6 = await TimeMiner.new({from: accounts[2]});
		const boolv4GUiDJ = true
		const uintM2ZljYQ = BigInt("1195")
		const boolDWfWzCi = await TimeMineris8lXG6.setStableCoinSystem.call(boolv4GUiDJ, {from: accounts[2]});
		const boolYHEphg7 = await TimeMineris8lXG6.infoStableSystem.call({from: accounts[4]});
		const uint256rLH98yh = await TimeMineris8lXG6.changePreSalePriceIfToHigh.call(uintM2ZljYQ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMineris8lXG6.changePreSalePriceIfToHigh.call(uintM2ZljYQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineris8lXG6 = await TimeMiner.new({from: accounts[2]});
		const uintABesM8z = BigInt("805")
		const uintU2ji276 = BigInt("1859")
		const uint256rHJvi6Y = await TimeMineris8lXG6.changePreSalePriceIfToHigh.call(uintABesM8z, {from: accounts[2]});
		const uintZf2sSht = await TimeMineris8lXG6.preSale.call(uintU2ji276, {from: accounts[1]});

		await expect(TimeMineris8lXG6.preSale.call(uintU2ji276, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})