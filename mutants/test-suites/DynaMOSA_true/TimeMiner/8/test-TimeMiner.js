const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinernHorAfu = await TimeMiner.new({from: accounts[3]});
		const addressMHVp3Uj = accounts[1]
		const addressF9OGEg = "0x0000000000000000000000000000000000000001"
		const uintBuJB5cM = BigInt("929")
		const addressEORKgqZ = accounts[3]
		const boolAgvfEBk = false
		const addressTXG1Jhr = "0x0000000000000000000000000000000000000001"
		const uint256nUYD0lH = await TimeMinernHorAfu.balanceOf.call(addressMHVp3Uj, {from: accounts[1]});
//		const uint256FuEIWl0 = await TimeMinernHorAfu.allInfoFor.call(addressF9OGEg, {from: accounts[0]});
//		const boolMwYMcei = await TimeMinernHorAfu.transfer.call(addressEORKgqZ, uintBuJB5cM, {from: accounts[0]});
//		const addressusNT63p = await TimeMinernHorAfu.whitelist.call(addressTXG1Jhr, boolAgvfEBk, {from: accounts[0]});

		assert.equal(uint256nUYD0lH, BigInt("0"))
		await expect(TimeMinernHorAfu.allInfoFor.call(addressF9OGEg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiners8cQhP3 = await TimeMiner.new({from: accounts[5]});
		const addresshqve2ji = accounts[0]
		const uintHQKBAbr = BigInt("1227")
//		await TimeMiners8cQhP3.preSaleFinished.call({from: accounts[3]});
//		const booliLktqQx = await TimeMiners8cQhP3.isWhitelisted.call(addresshqve2ji, {from: "0x0000000000000000000000000000000000000001"});
//		const uintdXEPTV5 = await TimeMiners8cQhP3.preSale.call(uintHQKBAbr, {from: accounts[0]});

		await expect(TimeMiners8cQhP3.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerQTPF7fK = await TimeMiner.new({from: accounts[3]});
		const addressf29bFnZ = accounts[0]
		const boolsndMXxK = true
		const addressCQqerd = "0x0000000000000000000000000000000000000001"
		const addressGYVWuaQ = accounts[2]
		const uintLKCt2F = BigInt("1552")
		const uintUe9dmMq = BigInt("1974")
		const addressFlVvExR = accounts[3]
		const uintugh59x = BigInt("194")
		const uint256Vt4HgL = await TimeMinerQTPF7fK.balanceOfTokenCirculation.call(addressf29bFnZ, {from: accounts[4]});
		const addressr33zs3e = await TimeMinerQTPF7fK.whitelist.call(addressCQqerd, boolsndMXxK, {from: accounts[3]});
//		const uint256ubIoAn = await TimeMinerQTPF7fK.tokensToClaim.call(addressGYVWuaQ, {from: accounts[0]});
//		const uint256MAi2Gh = await TimeMinerQTPF7fK.setPrizeFromNewAddress.call(uintUe9dmMq, uintLKCt2F, {from: accounts[4]});
//		const uint256T12Frb9 = await TimeMinerQTPF7fK.balanceOfTokenCirculation.call(addressFlVvExR, {from: accounts[1]});
//		const uintGv0ZqFj = await TimeMinerQTPF7fK.preSale.call(uintugh59x, {from: accounts[0]});

		assert.equal(uint256Vt4HgL, BigInt("0"))
		await expect(TimeMinerQTPF7fK.tokensToClaim.call(addressGYVWuaQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerEaitzsZ = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const boolelVGocc = false
		const addressY5Avpl = "0x0000000000000000000000000000000000000001"
		const uintPiet7TI = BigInt("621")
		const uintOe6WpK2 = BigInt("901")
		const boolxL0vzUe = false
		const addressstBUVfw = accounts[5]
		const uintwJSvKsZ = BigInt("228")
		const addressMWaNd7L = accounts[1]
		const addressUn72H8 = accounts[0]
		const addressbfVMBGK = await TimeMinerEaitzsZ.whitelist.call(addressY5Avpl, boolelVGocc, {from: accounts[0]});
		const uint256KMxPi3F = await TimeMinerEaitzsZ.setPrizeFromNewAddress.call(uintOe6WpK2, uintPiet7TI, {from: accounts[1]});
		const addresswD75IW = await TimeMinerEaitzsZ.whitelist.call(addressstBUVfw, boolxL0vzUe, {from: accounts[0]});
		const boolwdcGTu = await TimeMinerEaitzsZ.infoStableSystem.call({from: accounts[3]});
		const boolvtmlj81 = await TimeMinerEaitzsZ.transferFrom.call(addressUn72H8, addressMWaNd7L, uintwJSvKsZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolsLewxAq = await TimeMinerEaitzsZ.infoStableSystem.call({from: accounts[4]});
	});

	it('test for TimeMiner', async () => {
		const TimeMineridJTrNl = await TimeMiner.new({from: accounts[3]});
		const uintzzVLZLc = BigInt("371")
		const address2n75Ko = accounts[0]
		const addressqMipATY = accounts[3]
		const boolMHQxzW = true
		const addressebotbu4 = accounts[0]
		const addressqIYK9fx = accounts[4]
//		const boolDZenYu0 = await TimeMineridJTrNl.transferFrom.call(addressqMipATY, address2n75Ko, uintzzVLZLc, {from: accounts[4]});
//		const boolzZRgyYb = await TimeMineridJTrNl.infoStableSystem.call({from: accounts[4]});
//		const addressL41WjK5 = await TimeMineridJTrNl.whitelist.call(addressebotbu4, boolMHQxzW, {from: accounts[0]});
//		const boolxUXNneb = await TimeMineridJTrNl.isWhitelisted.call(addressqIYK9fx, {from: accounts[1]});

		await expect(TimeMineridJTrNl.transferFrom.call(addressqMipATY, address2n75Ko, uintzzVLZLc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerik8Y6AH = await TimeMiner.new({from: accounts[2]});
		const addressyqvKBP8 = accounts[2]
		const addressFrXBnNn = "0x0000000000000000000000000000000000000001"
		const boolMNP7dMM = false
		const addressUygnInQ = accounts[5]
		const uintJmCA82d = BigInt("1715")
		const addressZtw9Vs = accounts[5]
		const uint256Ed13cVl = await TimeMinerik8Y6AH.tokensToClaim.call(addressyqvKBP8, {from: accounts[2]});
		const uint256mYNYKHp = await TimeMinerik8Y6AH.balanceOfTokenCirculation.call(addressFrXBnNn, {from: accounts[1]});
		const addressZu8aq93 = await TimeMinerik8Y6AH.whitelist.call(addressUygnInQ, boolMNP7dMM, {from: accounts[2]});
		const uint256cEu9LuU = await TimeMinerik8Y6AH.changePreSalePriceIfToHigh.call(uintJmCA82d, {from: accounts[2]});
		const uint256WpujM5W = await TimeMinerik8Y6AH.balanceOf.call(addressZtw9Vs, {from: accounts[0]});

		assert.equal(uint256Ed13cVl, BigInt("12000000"))
		assert.equal(uint256WpujM5W, BigInt("0"))
		assert.equal(uint256mYNYKHp, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerDUbTySa = await TimeMiner.new({from: accounts[3]});
		const addressjyacKKH = accounts[3]
		const uintOQiypj1 = BigInt("516")
		const addressszldK7 = accounts[1]
		const uint256gVQbagG = await TimeMinerDUbTySa.balanceOfTokenCirculation.call(addressjyacKKH, {from: accounts[5]});
//		const uintvtUWIS0 = await TimeMinerDUbTySa.preSale.call(uintOQiypj1, {from: accounts[1]});
//		const boolJDnYAph = await TimeMinerDUbTySa.infoStableSystem.call({from: accounts[2]});
//		const booldlXmzqR = await TimeMinerDUbTySa.isWhitelisted.call(addressszldK7, {from: accounts[3]});

		assert.equal(uint256gVQbagG, BigInt("24000000"))
		await expect(TimeMinerDUbTySa.preSale.call(uintOQiypj1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerXDn2VLq = await TimeMiner.new({from: accounts[4]});
		const uintaOHp0UX = BigInt("1470")
		const addressdBOX7Ev = accounts[4]
		const addressZ1cAonN = accounts[2]
		const addressKfm0CvQ = accounts[2]
		const addressubw4w8l = accounts[4]
		const addressZ7G9wEP = accounts[0]
		const addressreRoxh1 = accounts[1]
		const addresszXvWhP7 = "0x0000000000000000000000000000000000000001"
//		const boolVcFsdUh = await TimeMinerXDn2VLq.transfer.call(addressdBOX7Ev, uintaOHp0UX, {from: accounts[1]});
//		const uint256CCCdLU = await TimeMinerXDn2VLq.allInfoFor.call(addressZ1cAonN, {from: accounts[4]});
//		const uint256Ym4v76u = await TimeMinerXDn2VLq.allowance.call(addressubw4w8l, addressKfm0CvQ, {from: accounts[1]});
//		const uint256hi8WLN5 = await TimeMinerXDn2VLq.allowance.call(addressreRoxh1, addressZ7G9wEP, {from: accounts[4]});
//		const uint256guR4mWE = await TimeMinerXDn2VLq.tokensToClaim.call(addresszXvWhP7, {from: accounts[4]});

		await expect(TimeMinerXDn2VLq.transfer.call(addressdBOX7Ev, uintaOHp0UX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiners8cQhP3 = await TimeMiner.new({from: accounts[5]});
		const uintcjqzJB7 = BigInt("1863")
		const addresswDQx5kZ = "0x0000000000000000000000000000000000000001"
		const addressevrGQs8 = accounts[0]
		const uintQqJGG5f = BigInt("1965")
		const addressWbNw2b6 = accounts[4]
		const uintTPZj3YW = BigInt("1227")
		const boolD1N5jux = await TimeMiners8cQhP3.approve.call(addresswDQx5kZ, uintcjqzJB7, {from: accounts[3]});
//		await TimeMiners8cQhP3.preSaleFinished.call({from: accounts[3]});
//		const booliLktqQx = await TimeMiners8cQhP3.isWhitelisted.call(addressevrGQs8, {from: "0x0000000000000000000000000000000000000001"});
//		const boolldY7Vt5 = await TimeMiners8cQhP3.transfer.call(addressWbNw2b6, uintQqJGG5f, {from: accounts[1]});
//		const uintdXEPTV5 = await TimeMiners8cQhP3.preSale.call(uintTPZj3YW, {from: accounts[0]});

		assert.equal(boolD1N5jux, true)
		await expect(TimeMiners8cQhP3.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineridJTrNl = await TimeMiner.new({from: accounts[3]});
		const boolMHQxzW = true
		const addressxtg0an = accounts[0]
		const addressYBq7Emt = accounts[4]
		const boolzZRgyYb = await TimeMineridJTrNl.infoStableSystem.call({from: accounts[4]});
//		const addressL41WjK5 = await TimeMineridJTrNl.whitelist.call(addressxtg0an, boolMHQxzW, {from: accounts[0]});
//		const boolxUXNneb = await TimeMineridJTrNl.isWhitelisted.call(addressYBq7Emt, {from: accounts[1]});

		await expect(TimeMineridJTrNl.whitelist.call(addressxtg0an, boolMHQxzW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerDUbTySa = await TimeMiner.new({from: accounts[3]});
		const addressrmnsGgS = accounts[3]
		const addresslEQVDhm = accounts[0]
		const addressNlbWcGD = accounts[3]
		const addresscCY1HnM = accounts[5]
		const uintNgKEAxC = BigInt("1413")
		const addressKj2yIi9 = accounts[1]
		const uintN2FXmgo = BigInt("516")
		const addressviwVocl = accounts[1]
		const uint256gVQbagG = await TimeMinerDUbTySa.balanceOfTokenCirculation.call(addressrmnsGgS, {from: accounts[5]});
		const boolDD6NIhv = await TimeMinerDUbTySa.isWhitelisted.call(addresslEQVDhm, {from: accounts[0]});
		const uint256pEeyGZI = await TimeMinerDUbTySa.allowance.call(addresscCY1HnM, addressNlbWcGD, {from: accounts[4]});
//		const boolHN4x4nr = await TimeMinerDUbTySa.transfer.call(addressKj2yIi9, uintNgKEAxC, {from: accounts[0]});
//		const uintvtUWIS0 = await TimeMinerDUbTySa.preSale.call(uintN2FXmgo, {from: accounts[1]});
//		const boolJDnYAph = await TimeMinerDUbTySa.infoStableSystem.call({from: accounts[2]});
//		const booldlXmzqR = await TimeMinerDUbTySa.isWhitelisted.call(addressviwVocl, {from: accounts[3]});

		assert.equal(boolDD6NIhv, false)
		assert.equal(uint256gVQbagG, BigInt("24000000"))
		assert.equal(uint256pEeyGZI, BigInt("0"))
		await expect(TimeMinerDUbTySa.transfer.call(addressKj2yIi9, uintNgKEAxC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerWs0Mekg = await TimeMiner.new({from: accounts[2]});
		const uintoMkxrCr = BigInt("583")
		const uintnqsGGZn = BigInt("772")
		const addressJp2BP1M = accounts[3]
		const boolHOuf7lf = true
		const uinttDr504r = BigInt("1282")
//		const uint256l6eoqpy = await TimeMinerWs0Mekg.setPrizeFromNewAddress.call(uintnqsGGZn, uintoMkxrCr, {from: accounts[0]});
//		const uint256c4UZL5Y = await TimeMinerWs0Mekg.tokensToClaim.call(addressJp2BP1M, {from: accounts[2]});
//		const boolQ0F5flb = await TimeMinerWs0Mekg.setStableCoinSystem.call(boolHOuf7lf, {from: accounts[1]});
//		const uintqxvTRjK = await TimeMinerWs0Mekg.preSale.call(uinttDr504r, {from: accounts[1]});
//		await TimeMinerWs0Mekg.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerWs0Mekg.setPrizeFromNewAddress.call(uintnqsGGZn, uintoMkxrCr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiners8cQhP3 = await TimeMiner.new({from: accounts[5]});
		const addressPnA6xDe = accounts[0]
		const boolyUoWMPW = false
		const addressVzCBLHD = accounts[1]
		const boolIScmcOx = await TimeMiners8cQhP3.isWhitelisted.call(addressPnA6xDe, {from: accounts[1]});
//		const boolXKxtdXW = await TimeMiners8cQhP3.setStableCoinSystem.call(boolyUoWMPW, {from: accounts[0]});
//		await TimeMiners8cQhP3.preSaleFinished.call({from: accounts[3]});
//		const booliLktqQx = await TimeMiners8cQhP3.isWhitelisted.call(addressVzCBLHD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolIScmcOx, false)
		await expect(TimeMiners8cQhP3.setStableCoinSystem.call(boolyUoWMPW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerDUbTySa = await TimeMiner.new({from: accounts[3]});
		const addressADMvP4k = accounts[3]
		const addressGYDdiIm = accounts[1]
		const bool5C4sXP = true
		const uintsZmdtY8 = BigInt("1413")
		const addressCXSilyT = accounts[1]
		const uint256gVQbagG = await TimeMinerDUbTySa.balanceOfTokenCirculation.call(addressADMvP4k, {from: accounts[5]});
		const boolDD6NIhv = await TimeMinerDUbTySa.isWhitelisted.call(addressGYDdiIm, {from: accounts[0]});
		const booleSDkryf = await TimeMinerDUbTySa.setStableCoinSystem.call(bool5C4sXP, {from: accounts[3]});
//		const boolHN4x4nr = await TimeMinerDUbTySa.transfer.call(addressCXSilyT, uintsZmdtY8, {from: accounts[0]});
//		const boolJDnYAph = await TimeMinerDUbTySa.infoStableSystem.call({from: accounts[2]});

		assert.equal(boolDD6NIhv, false)
		assert.equal(uint256gVQbagG, BigInt("24000000"))
		await expect(TimeMinerDUbTySa.transfer.call(addressCXSilyT, uintsZmdtY8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerWs0Mekg = await TimeMiner.new({from: accounts[2]});
		const uintBn3T9AP = BigInt("1063")
		const uintqve3wIq = BigInt("511")
		const uintVD3ZLPR = BigInt("587")
		const uintr4w55DJ = BigInt("772")
		const uintFzpfzxR = BigInt("1282")
		const uint256MUiL4Fy = await TimeMinerWs0Mekg.setPrizeFromNewAddress.call(uintqve3wIq, uintBn3T9AP, {from: accounts[2]});
//		const uint256l6eoqpy = await TimeMinerWs0Mekg.setPrizeFromNewAddress.call(uintr4w55DJ, uintVD3ZLPR, {from: accounts[0]});
//		const uintqxvTRjK = await TimeMinerWs0Mekg.preSale.call(uintFzpfzxR, {from: accounts[1]});
//		await TimeMinerWs0Mekg.preSaleFinished.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerWs0Mekg.setPrizeFromNewAddress.call(uintr4w55DJ, uintVD3ZLPR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerDUbTySa = await TimeMiner.new({from: accounts[3]});
		const addressL5gjPPc = accounts[4]
		const uintIiQbf63 = BigInt("1359")
		const addressLoWDLEH = accounts[3]
		const uintF210Nj7 = BigInt("117")
		const addressotxB4o0 = accounts[3]
		const uintFmItav6 = BigInt("516")
		const uint256gVQbagG = await TimeMinerDUbTySa.balanceOfTokenCirculation.call(addressL5gjPPc, {from: accounts[5]});
		const boolfq7lXGK = await TimeMinerDUbTySa.approve.call(addressLoWDLEH, uintIiQbf63, {from: accounts[0]});
		const boolYpckYEt = await TimeMinerDUbTySa.transfer.call(addressotxB4o0, uintF210Nj7, {from: accounts[3]});
//		const uintvtUWIS0 = await TimeMinerDUbTySa.preSale.call(uintFmItav6, {from: accounts[1]});

		assert.equal(boolYpckYEt, true)
		assert.equal(boolfq7lXGK, true)
		assert.equal(uint256gVQbagG, BigInt("0"))
		await expect(TimeMinerDUbTySa.preSale.call(uintFmItav6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineridJTrNl = await TimeMiner.new({from: accounts[3]});
		const uintwvRkWQG = BigInt("1946")
		const addresstpnAbxU = accounts[5]
		const uintry7KW9R = BigInt("242")
		const uintPy9tVV6 = BigInt("1552")
		const addressftQ2Bv7 = accounts[1]
		const boolDSZYRaa = await TimeMineridJTrNl.transfer.call(addresstpnAbxU, uintwvRkWQG, {from: accounts[3]});
//		const uintXyJV0L = await TimeMineridJTrNl.preSale.call(uintry7KW9R, {from: accounts[0]});
//		const boolQhauR54 = await TimeMineridJTrNl.approve.call(addressftQ2Bv7, uintPy9tVV6, {from: accounts[4]});
//		await TimeMineridJTrNl.preSaleFinished.call({from: accounts[4]});

		assert.equal(boolDSZYRaa, true)
		await expect(TimeMineridJTrNl.preSale.call(uintry7KW9R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})