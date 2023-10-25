const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerFro864j = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressBNoDln8 = accounts[4]
		const addressTuhZdDU = accounts[3]
		const uintA7tevgF = BigInt("480")
		const addressBgmfXUx = accounts[5]
		const uintFq6nLa9 = BigInt("1028")
		const addressWuwEW0V = accounts[3]
		const booljZu3uxR = await TimeMinerFro864j.infoStableSystem.call({from: accounts[1]});
		const uint256fYvMMPB = await TimeMinerFro864j.balanceOf.call(addressBNoDln8, {from: accounts[4]});
		const uint256pv8tuTq = await TimeMinerFro864j.allInfoFor.call(addressTuhZdDU, {from: accounts[3]});
		const boolrtfvz9H = await TimeMinerFro864j.transfer.call(addressBgmfXUx, uintA7tevgF, {from: accounts[0]});
		const boolGSwglL1 = await TimeMinerFro864j.transfer.call(addressWuwEW0V, uintFq6nLa9, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerrALbHAH = await TimeMiner.new({from: accounts[4]});
		const uintbDalZKE = BigInt("1866")
		const uintjBppkzj = BigInt("1406")
		const uintFpd0UB9 = BigInt("789")
		const addressRZjdPWf = accounts[2]
		const uintSJunIT5 = BigInt("424")
		const addressvzxlWcV = accounts[3]
		const addressBWHWviX = accounts[0]
		const addressWaYMxnq = accounts[5]
		const addressgGTg1hb = accounts[3]
		const uintU9EZU7l = BigInt("1822")
//		const uint256Oq5p278 = await TimeMinerrALbHAH.setPrizeFromNewAddress.call(uintjBppkzj, uintbDalZKE, {from: accounts[3]});
//		const boolcaqMiAe = await TimeMinerrALbHAH.approve.call(addressRZjdPWf, uintFpd0UB9, {from: accounts[4]});
//		const boolWZ6gbmz = await TimeMinerrALbHAH.transferFrom.call(addressBWHWviX, addressvzxlWcV, uintSJunIT5, {from: accounts[0]});
//		const uint256WvG1v4S = await TimeMinerrALbHAH.allowance.call(addressgGTg1hb, addressWaYMxnq, {from: accounts[2]});
//		const uintHbArjF0 = await TimeMinerrALbHAH.preSale.call(uintU9EZU7l, {from: accounts[4]});

		await expect(TimeMinerrALbHAH.setPrizeFromNewAddress.call(uintjBppkzj, uintbDalZKE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiner8YFCQI = await TimeMiner.new({from: accounts[0]});
		const addressl7KTnOC = "0x0000000000000000000000000000000000000001"
		const uintrXrmB7 = BigInt("1194")
		const addressZPriSPQ = accounts[4]
		const addressr5m3AJj = accounts[1]
		const addressMSrTClN = accounts[5]
		const addressyxiOUKw = accounts[3]
		const uintGLhM5LU = BigInt("929")
		const addressZMlyR8E = accounts[4]
		const uint256Km8p3cY = await TimeMiner8YFCQI.balanceOf.call(addressl7KTnOC, {from: accounts[2]});
//		const boolA6KSpNs = await TimeMiner8YFCQI.transfer.call(addressZPriSPQ, uintrXrmB7, {from: accounts[5]});
//		const uint256cov6aTG = await TimeMiner8YFCQI.allowance.call(addressMSrTClN, addressr5m3AJj, {from: accounts[1]});
//		const uint256KbUDwMr = await TimeMiner8YFCQI.tokensToClaim.call(addressyxiOUKw, {from: accounts[2]});
//		const uint256E27iDyA = await TimeMiner8YFCQI.changePreSalePriceIfToHigh.call(uintGLhM5LU, {from: accounts[3]});
//		const boolfhVlb46 = await TimeMiner8YFCQI.isWhitelisted.call(addressZMlyR8E, {from: accounts[4]});

		assert.equal(uint256Km8p3cY, BigInt("0"))
		await expect(TimeMiner8YFCQI.transfer.call(addressZPriSPQ, uintrXrmB7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerk5tDQu = await TimeMiner.new({from: accounts[0]});
		const addressnn7GtO = accounts[1]
		const boolLn9LTnZ = false
		const addresszROShJy = accounts[0]
		const uintcuU82zc = BigInt("1427")
		const addressbQ9rB2A = accounts[4]
		const addressWWYqWU = accounts[0]
		const uint256RWa10Hh = await TimeMinerk5tDQu.balanceOfTokenCirculation.call(addressnn7GtO, {from: accounts[2]});
//		const addressAP5dpYZ = await TimeMinerk5tDQu.whitelist.call(addresszROShJy, boolLn9LTnZ, {from: accounts[5]});
//		const uintAoYT5j = await TimeMinerk5tDQu.preSale.call(uintcuU82zc, {from: accounts[3]});
//		const boolcr6SRrS = await TimeMinerk5tDQu.isWhitelisted.call(addressbQ9rB2A, {from: accounts[0]});
//		const uint256fhIwnlQ = await TimeMinerk5tDQu.balanceOf.call(addressWWYqWU, {from: accounts[4]});

		assert.equal(uint256RWa10Hh, BigInt("0"))
		await expect(TimeMinerk5tDQu.whitelist.call(addresszROShJy, boolLn9LTnZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerAonFXW9 = await TimeMiner.new({from: accounts[4]});
		const addressNSvnhzs = accounts[1]
		const addressfXVdE7A = accounts[3]
//		await TimeMinerAonFXW9.preSaleFinished.call({from: accounts[3]});
//		const uint256AjVQQYy = await TimeMinerAonFXW9.balanceOfTokenCirculation.call(addressNSvnhzs, {from: accounts[0]});
//		const uint256U0DnMWF = await TimeMinerAonFXW9.tokensToClaim.call(addressfXVdE7A, {from: accounts[2]});

		await expect(TimeMinerAonFXW9.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerduH9nyq = await TimeMiner.new({from: accounts[3]});
		const uintYn9TNGg = BigInt("692")
		const uintBaD1kU2 = BigInt("386")
		const addressJOqPBu9 = accounts[1]
		const addressZV8Xqvd = accounts[1]
//		const uint2567JLHi9 = await TimeMinerduH9nyq.changePreSalePriceIfToHigh.call(uintYn9TNGg, {from: accounts[1]});
//		const uint256GijRDMN = await TimeMinerduH9nyq.totalSupply.call({from: accounts[2]});
//		const boolJQ8QaoH = await TimeMinerduH9nyq.approve.call(addressJOqPBu9, uintBaD1kU2, {from: accounts[3]});
//		const uint256IKrX47Y = await TimeMinerduH9nyq.balanceOf.call(addressZV8Xqvd, {from: accounts[2]});
//		const boolKFnpK0Q = await TimeMinerduH9nyq.infoStableSystem.call({from: accounts[0]});

		await expect(TimeMinerduH9nyq.changePreSalePriceIfToHigh.call(uintYn9TNGg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerbdvWErE = await TimeMiner.new({from: accounts[5]});
		const uintRarB4D2 = BigInt("1536")
		const addressFhGFPqa = accounts[4]
		const uintxYoAaYs = BigInt("1607")
		const uintfEOob0H = BigInt("1189")
		const boolnE55M7r = await TimeMinerbdvWErE.approve.call(addressFhGFPqa, uintRarB4D2, {from: accounts[3]});
		const uint256grxnKnJ = await TimeMinerbdvWErE.setPrizeFromNewAddress.call(uintfEOob0H, uintxYoAaYs, {from: accounts[5]});
		const uint256IhIjE3q = await TimeMinerbdvWErE.totalSupply.call({from: accounts[4]});

		assert.equal(boolnE55M7r, true)
		assert.equal(uint256IhIjE3q, BigInt("24000000"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerrfPlQKn = await TimeMiner.new({from: accounts[1]});
		const address1WqyJ6 = accounts[0]
		const booljEnKL6 = await TimeMinerrfPlQKn.infoStableSystem.call({from: accounts[0]});
//		const uint256PbFA8gO = await TimeMinerrfPlQKn.tokensToClaim.call(address1WqyJ6, {from: accounts[2]});

		await expect(TimeMinerrfPlQKn.tokensToClaim.call(address1WqyJ6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerrfPlQKn = await TimeMiner.new({from: accounts[1]});
		const addresss9nELjl = accounts[3]
		const addressK9usHXN = accounts[3]
		const addressPPCwbhJ = accounts[0]
		const boolH33DTr = await TimeMinerrfPlQKn.infoStableSystem.call({from: accounts[4]});
		const uint256mjdNDZI = await TimeMinerrfPlQKn.allowance.call(addressK9usHXN, addresss9nELjl, {from: accounts[4]});
		const booljEnKL6 = await TimeMinerrfPlQKn.infoStableSystem.call({from: accounts[0]});
//		const uint256PbFA8gO = await TimeMinerrfPlQKn.tokensToClaim.call(addressPPCwbhJ, {from: accounts[2]});

		assert.equal(uint256mjdNDZI, BigInt("0"))
		await expect(TimeMinerrfPlQKn.tokensToClaim.call(addressPPCwbhJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerk5tDQu = await TimeMiner.new({from: accounts[0]});
		const addressc6hitA6 = accounts[1]
		const uintUewQYgt = BigInt("1427")
		const addressQRqxtQ1 = accounts[4]
		const addressscqXE3H = accounts[0]
		const uint256RWa10Hh = await TimeMinerk5tDQu.balanceOfTokenCirculation.call(addressc6hitA6, {from: accounts[2]});
//		const uintAoYT5j = await TimeMinerk5tDQu.preSale.call(uintUewQYgt, {from: accounts[3]});
//		const boolcr6SRrS = await TimeMinerk5tDQu.isWhitelisted.call(addressQRqxtQ1, {from: accounts[0]});
//		const uint256fhIwnlQ = await TimeMinerk5tDQu.balanceOf.call(addressscqXE3H, {from: accounts[4]});

		assert.equal(uint256RWa10Hh, BigInt("0"))
		await expect(TimeMinerk5tDQu.preSale.call(uintUewQYgt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerk5tDQu = await TimeMiner.new({from: accounts[0]});
		const addressNFWhR9 = accounts[1]
		const boolLn9LTnZ = false
		const addressugaDYzH = accounts[0]
		const uintqTESg5K = BigInt("1427")
		const uintkfAXQVq = BigInt("1852")
		const addressBn56Qlk = accounts[1]
		const addressbR9bd8Q = accounts[4]
		const addressLJ4kWU = accounts[0]
		const uint256RWa10Hh = await TimeMinerk5tDQu.balanceOfTokenCirculation.call(addressNFWhR9, {from: accounts[2]});
//		await TimeMinerk5tDQu.preSaleFinished.call({from: accounts[0]});
//		const addressAP5dpYZ = await TimeMinerk5tDQu.whitelist.call(addressugaDYzH, boolLn9LTnZ, {from: accounts[5]});
//		const uintAoYT5j = await TimeMinerk5tDQu.preSale.call(uintqTESg5K, {from: accounts[3]});
//		const boolUxyXJyO = await TimeMinerk5tDQu.transfer.call(addressBn56Qlk, uintkfAXQVq, {from: accounts[2]});
//		const boolcr6SRrS = await TimeMinerk5tDQu.isWhitelisted.call(addressbR9bd8Q, {from: accounts[0]});
//		const uint256fhIwnlQ = await TimeMinerk5tDQu.balanceOf.call(addressLJ4kWU, {from: accounts[4]});

		assert.equal(uint256RWa10Hh, BigInt("0"))
		await expect(TimeMinerk5tDQu.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerk5tDQu = await TimeMiner.new({from: accounts[0]});
		const addressVyiud0 = accounts[1]
		const addressFJIMWBC = accounts[4]
		const uint256RWa10Hh = await TimeMinerk5tDQu.balanceOfTokenCirculation.call(addressVyiud0, {from: accounts[2]});
		const boolcr6SRrS = await TimeMinerk5tDQu.isWhitelisted.call(addressFJIMWBC, {from: accounts[0]});

		assert.equal(boolcr6SRrS, false)
		assert.equal(uint256RWa10Hh, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerk5tDQu = await TimeMiner.new({from: accounts[0]});
		const addressjIF2OSR = accounts[2]
		const addressc34c1M = accounts[1]
		const uintpnRtpt8 = BigInt("1413")
		const addressbk4PVTo = accounts[4]
//		const uint256lFCBu12 = await TimeMinerk5tDQu.allInfoFor.call(addressjIF2OSR, {from: accounts[2]});
//		const uint256RWa10Hh = await TimeMinerk5tDQu.balanceOfTokenCirculation.call(addressc34c1M, {from: accounts[2]});
//		const uintAoYT5j = await TimeMinerk5tDQu.preSale.call(uintpnRtpt8, {from: accounts[3]});
//		const boolcr6SRrS = await TimeMinerk5tDQu.isWhitelisted.call(addressbk4PVTo, {from: accounts[0]});

		await expect(TimeMinerk5tDQu.allInfoFor.call(addressjIF2OSR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerk5tDQu = await TimeMiner.new({from: accounts[0]});
		const uintKcIDhs5 = BigInt("259")
		const addressGZl02H3 = accounts[1]
		const uintstZdpYy = BigInt("1427")
		const boolFyEx4RL = false
		const booltvj90g5 = await TimeMinerk5tDQu.transfer.call(addressGZl02H3, uintKcIDhs5, {from: accounts[0]});
//		const uintAoYT5j = await TimeMinerk5tDQu.preSale.call(uintstZdpYy, {from: accounts[3]});
//		const boolAz4FvCZ = await TimeMinerk5tDQu.setStableCoinSystem.call(boolFyEx4RL, {from: accounts[2]});

		assert.equal(booltvj90g5, true)
		await expect(TimeMinerk5tDQu.preSale.call(uintstZdpYy, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerrfPlQKn = await TimeMiner.new({from: accounts[1]});
		const addressDqLKdks = accounts[2]
		const uintIdgNi4h = BigInt("988")
		const addressiDfwMLM = accounts[3]
		const addressN5scqZw = accounts[1]
		const booljEnKL6 = await TimeMinerrfPlQKn.infoStableSystem.call({from: accounts[0]});
		const uint256uTKFgIj = await TimeMinerrfPlQKn.balanceOfTokenCirculation.call(addressDqLKdks, {from: accounts[2]});
//		const boolmvb3j5h = await TimeMinerrfPlQKn.transferFrom.call(addressN5scqZw, addressiDfwMLM, uintIdgNi4h, {from: accounts[2]});

		assert.equal(uint256uTKFgIj, BigInt("0"))
		await expect(TimeMinerrfPlQKn.transferFrom.call(addressN5scqZw, addressiDfwMLM, uintIdgNi4h, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerxsQvNkW = await TimeMiner.new({from: accounts[4]});
		const boolKcIXEnn = true
		const uintDfiWdy2 = BigInt("839")
		const uint256ULtIrmq = await TimeMinerxsQvNkW.totalSupply.call({from: accounts[3]});
//		const bool32FZTD = await TimeMinerxsQvNkW.setStableCoinSystem.call(boolKcIXEnn, {from: accounts[3]});
//		const uint256gwaK9NJ = await TimeMinerxsQvNkW.changePreSalePriceIfToHigh.call(uintDfiWdy2, {from: accounts[3]});

		assert.equal(uint256ULtIrmq, BigInt("24000000"))
		await expect(TimeMinerxsQvNkW.setStableCoinSystem.call(boolKcIXEnn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerrfPlQKn = await TimeMiner.new({from: accounts[1]});
		const boolH1iH6We = false
		const boolSxNQwG = await TimeMinerrfPlQKn.setStableCoinSystem.call(boolH1iH6We, {from: accounts[1]});
		const booljEnKL6 = await TimeMinerrfPlQKn.infoStableSystem.call({from: accounts[0]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerk5tDQu = await TimeMiner.new({from: accounts[0]});
		const uintJLnuI9 = BigInt("1917")
		const uintqjEbmvy = BigInt("259")
		const addresspPnNIFa = accounts[1]
		const uintYPvfLv1 = BigInt("1442")
		const boolFyEx4RL = false
		const addressnbp5jP7 = accounts[4]
		const uint256Y0rDRbD = await TimeMinerk5tDQu.changePreSalePriceIfToHigh.call(uintJLnuI9, {from: accounts[0]});
		const booltvj90g5 = await TimeMinerk5tDQu.transfer.call(addresspPnNIFa, uintqjEbmvy, {from: accounts[0]});
//		const uintAoYT5j = await TimeMinerk5tDQu.preSale.call(uintYPvfLv1, {from: accounts[3]});
//		const boolAz4FvCZ = await TimeMinerk5tDQu.setStableCoinSystem.call(boolFyEx4RL, {from: accounts[2]});
//		const boolbCrdocU = await TimeMinerk5tDQu.isWhitelisted.call(addressnbp5jP7, {from: accounts[0]});

		assert.equal(booltvj90g5, true)
		await expect(TimeMinerk5tDQu.preSale.call(uintYPvfLv1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerJLIuB50 = await TimeMiner.new({from: accounts[3]});
		const addressB2n4BBq = accounts[3]
		const boolmSABGS2 = false
		const addressuywe3hI = accounts[4]
		const uintMjxP80B = BigInt("356")
		const addresspe73n41 = accounts[3]
		const addressJ404rt = accounts[0]
		const addressbX79ewz = accounts[2]
		const uint256AYeZiot = await TimeMinerJLIuB50.tokensToClaim.call(addressB2n4BBq, {from: accounts[3]});
		const addressao8IH64 = await TimeMinerJLIuB50.whitelist.call(addressuywe3hI, boolmSABGS2, {from: accounts[3]});
//		const boolUadQ6fh = await TimeMinerJLIuB50.transfer.call(addresspe73n41, uintMjxP80B, {from: "0x0000000000000000000000000000000000000001"});
//		const booljcMDN8s = await TimeMinerJLIuB50.infoStableSystem.call({from: accounts[4]});
//		const uint256TMaKAdo = await TimeMinerJLIuB50.allowance.call(addressbX79ewz, addressJ404rt, {from: accounts[5]});

		assert.equal(uint256AYeZiot, BigInt("12000000"))
		await expect(TimeMinerJLIuB50.transfer.call(addresspe73n41, uintMjxP80B, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})