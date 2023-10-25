const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addresspc86yw9 = "0x0000000000000000000000000000000000000001"
		const addressuV0Gftc = "0x0000000000000000000000000000000000000001"
		const addressIEVPkB = accounts[0]
		const BACMARSLPTOKENPoolt9iArwp = await BACMARSLPTOKENPool.new(addresspc86yw9, addressuV0Gftc, addressIEVPkB, {from: accounts[2]});
		const uintAUaPbSn = BigInt("1645")
		const uintox4ren = BigInt("1369")
//		const uint256Lav66JU = await BACMARSLPTOKENPoolt9iArwp.notifyRewardAmount.call(uintAUaPbSn, {from: accounts[0]});
//		const uint256hQg4BD = await BACMARSLPTOKENPoolt9iArwp.notifyRewardAmount.call(uintox4ren, {from: "0x0000000000000000000000000000000000000001"});
//		await BACMARSLPTOKENPoolt9iArwp.onlyRewardsDistribution.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolt9iArwp.notifyRewardAmount.call(uintAUaPbSn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressl7t8Lrz = accounts[2]
		const addressn0ozLQg = "0x0000000000000000000000000000000000000001"
		const addressR2xI5sw = accounts[0]
		const BACMARSLPTOKENPoolDpk4bZ = await BACMARSLPTOKENPool.new(addressl7t8Lrz, addressn0ozLQg, addressR2xI5sw, {from: accounts[4]});
		const addresshtbTKzO = accounts[5]
		const addressoFvDj0q = accounts[4]
//		const addresstazITmL = await BACMARSLPTOKENPoolDpk4bZ.updateReward.call(addresshtbTKzO, {from: accounts[3]});
//		const addressqVrsKC = await BACMARSLPTOKENPoolDpk4bZ.updateReward.call(addressoFvDj0q, {from: accounts[3]});
//		await BACMARSLPTOKENPoolDpk4bZ.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		await BACMARSLPTOKENPoolDpk4bZ.getReward.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolDpk4bZ.updateReward.call(addresshtbTKzO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressuirwqu1 = "0x0000000000000000000000000000000000000001"
		const addressCQNP22b = accounts[4]
		const addressLQx9mur = accounts[4]
		const BACMARSLPTOKENPoolMb8W36 = await BACMARSLPTOKENPool.new(addressuirwqu1, addressCQNP22b, addressLQx9mur, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolMb8W36.exit.call({from: accounts[5]});
		await BACMARSLPTOKENPoolMb8W36.exit.call({from: accounts[4]});
		const stringJjxU0Th = await BACMARSLPTOKENPoolMb8W36.symbol.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressXMXFDo = accounts[0]
		const addressx3j1bBz = accounts[3]
		const address9NdwKT = accounts[0]
		const BACMARSLPTOKENPoolyNgIf70 = await BACMARSLPTOKENPool.new(addressXMXFDo, addressx3j1bBz, address9NdwKT, {from: accounts[4]});
		const uinthv1Ljm2 = BigInt("262")
		const uintFC2a510 = BigInt("1343")
//		const uint256Vq5EsLW = await BACMARSLPTOKENPoolyNgIf70.stake.call(uinthv1Ljm2, {from: accounts[1]});
//		const uint256NhIpFwY = await BACMARSLPTOKENPoolyNgIf70.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256Nd7cC5 = await BACMARSLPTOKENPoolyNgIf70.stake.call(uintFC2a510, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolyNgIf70.stake.call(uinthv1Ljm2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHKGs067 = "FHC5waqrzvWirmYt4RmVTaDAaL6Bf7e9smE"
		const stringt6Ne42q = "Tz"
		const uintGw2klHY = BigInt("179")
		const BACMARSLPTOKENPooleL7ndW5 = await BACMARSLPTOKENPool.new(stringHKGs067, stringt6Ne42q, uintGw2klHY, {from: accounts[3]});
		const uintdPrrOIX = BigInt("1331")
		const stringjAhvVS = await BACMARSLPTOKENPooleL7ndW5.name.call({from: accounts[4]});
		const uint256nxRY9O3 = await BACMARSLPTOKENPooleL7ndW5.getRewardForDuration.call({from: accounts[4]});
		await BACMARSLPTOKENPooleL7ndW5.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPooleL7ndW5.nonReentrant.call({from: accounts[2]});
		const uint256TFxW6Me = await BACMARSLPTOKENPooleL7ndW5.withdraw.call(uintdPrrOIX, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresskUyihiR = accounts[4]
		const addressg5oqA0 = accounts[2]
		const addresslti3wWx = accounts[1]
		const BACMARSLPTOKENPoolH8RgggQ = await BACMARSLPTOKENPool.new(addresskUyihiR, addressg5oqA0, addresslti3wWx, {from: accounts[0]});
		const bytemIFZR5 = "0x0d0d181808140e03190101190b02180719101e1f110911050a08141d19111f0e"
		const byteTNdZT8M = "0x150a1513040b141601141e0c0d1f10110615031c181d1f070e1c0511150e1904"
		const uintrnhF52 = BigInt("225")
		const uintnKvhA5 = BigInt("411")
		const uintYyhlXUJ = BigInt("1761")
		const addressxVOWNrO = accounts[2]
		const addressgjLKIEn = accounts[2]
//		const uint256ldekU6 = await BACMARSLPTOKENPoolH8RgggQ.stakeWithPermit.call(uintYyhlXUJ, uintnKvhA5, uintrnhF52, byteTNdZT8M, bytemIFZR5, {from: accounts[2]});
//		const uint256VVXN4H8 = await BACMARSLPTOKENPoolH8RgggQ.rewardPerToken.call({from: accounts[1]});
//		const uint256tNjkFsE = await BACMARSLPTOKENPoolH8RgggQ.balanceOf.call(addressxVOWNrO, {from: accounts[1]});
//		const uint256JIhQ0dM = await BACMARSLPTOKENPoolH8RgggQ.balanceOf.call(addressgjLKIEn, {from: accounts[4]});

		await expect(BACMARSLPTOKENPoolH8RgggQ.stakeWithPermit.call(uintYyhlXUJ, uintnKvhA5, uintrnhF52, byteTNdZT8M, bytemIFZR5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtRtsrkF = "2D8kiAmkKB9QTx2RIJ7LDxFW5dkEbv0N6xhv9U5VQOAdvDgQ5OPgiFUmCt8p1T65z9d8pAPxT5ZLJGZtnrixSiEufWBtvJ"
		const stringJRXyQgd = "8zrGEceqyp4gIfqliXrEhuIImOVx5O4X"
		const uintykgUv6z = BigInt("211")
		const BACMARSLPTOKENPoolqjPjagp = await BACMARSLPTOKENPool.new(stringtRtsrkF, stringJRXyQgd, uintykgUv6z, {from: accounts[3]});
		const addressVohulFy = accounts[0]
		const uintSF0AL20 = BigInt("1581")
		const uintuhWWfy = BigInt("336")
		const uintx4P1Rae = BigInt("156")
		const uint256LJ0QI28 = await BACMARSLPTOKENPoolqjPjagp.earned.call(addressVohulFy, {from: accounts[5]});
		const uint256elxknAl = await BACMARSLPTOKENPoolqjPjagp.getRewardForDuration.call({from: accounts[3]});
		const uint256inDuuv1 = await BACMARSLPTOKENPoolqjPjagp.notifyRewardAmount.call(uintSF0AL20, {from: accounts[4]});
		const uint256GVl5Up3 = await BACMARSLPTOKENPoolqjPjagp.stake.call(uintuhWWfy, {from: accounts[5]});
		const uint2567vRn3E = await BACMARSLPTOKENPoolqjPjagp.withdraw.call(uintx4P1Rae, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressWJiHx2H = accounts[4]
		const addressV4DDNif = accounts[0]
		const addresslvqox4h = accounts[2]
		const BACMARSLPTOKENPoolvinXtPc = await BACMARSLPTOKENPool.new(addressWJiHx2H, addressV4DDNif, addresslvqox4h, {from: accounts[4]});
//		await BACMARSLPTOKENPoolvinXtPc.exit.call({from: accounts[2]});
//		const uint25601MJv4 = await BACMARSLPTOKENPoolvinXtPc.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
//		await BACMARSLPTOKENPoolvinXtPc.getReward.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolvinXtPc.nonReentrant.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolvinXtPc.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxedIQ4 = "7PLsKpVgb6EsdCjPKkwX2CXlBaIkeEpGMbyfTBeNDWJxIKqr3evhm"
		const stringsxCdCx4 = "lo"
		const uintomibV9F = BigInt("31")
		const BACMARSLPTOKENPoolGIy1z5 = await BACMARSLPTOKENPool.new(stringxedIQ4, stringsxCdCx4, uintomibV9F, {from: accounts[0]});
		const addressbQZZZKi = accounts[2]
		const uintiO6nPgk = BigInt("1624")
		const uintDATOAv = BigInt("1091")
		await BACMARSLPTOKENPoolGIy1z5.nonReentrant.call({from: accounts[0]});
		const uint256F0U8t3n = await BACMARSLPTOKENPoolGIy1z5.balanceOf.call(addressbQZZZKi, {from: accounts[0]});
		const uint256EVe47RM = await BACMARSLPTOKENPoolGIy1z5.notifyRewardAmount.call(uintiO6nPgk, {from: accounts[2]});
		const uint256YzVFpVn = await BACMARSLPTOKENPoolGIy1z5.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256DelpLwg = await BACMARSLPTOKENPoolGIy1z5.withdraw.call(uintDATOAv, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressDLjogm2 = "0x0000000000000000000000000000000000000001"
		const addressr9fkVom = accounts[3]
		const addressTZ01Rf = accounts[0]
		const BACMARSLPTOKENPoolVOdSunn = await BACMARSLPTOKENPool.new(addressDLjogm2, addressr9fkVom, addressTZ01Rf, {from: accounts[3]});
		const addressJVLgL4f = "0x0000000000000000000000000000000000000001"
//		await BACMARSLPTOKENPoolVOdSunn.getReward.call({from: accounts[3]});
//		const uint256cJ7jred = await BACMARSLPTOKENPoolVOdSunn.earned.call(addressJVLgL4f, {from: accounts[3]});
		await BACMARSLPTOKENPoolVOdSunn.getReward.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolVOdSunn.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressWLDtu5d = accounts[0]
		const addressr8t0vm = accounts[3]
		const addressLQ3ygAP = accounts[0]
		const BACMARSLPTOKENPoolyNgIf70 = await BACMARSLPTOKENPool.new(addressWLDtu5d, addressr8t0vm, addressLQ3ygAP, {from: accounts[4]});
		const uintpG4xQU = BigInt("242")
		const uintmxzwx1y = BigInt("746")
		const uint256VOZItW = await BACMARSLPTOKENPoolyNgIf70.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256Vq5EsLW = await BACMARSLPTOKENPoolyNgIf70.stake.call(uintpG4xQU, {from: accounts[1]});
//		const uint256ZYOVsIa = await BACMARSLPTOKENPoolyNgIf70.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256NhIpFwY = await BACMARSLPTOKENPoolyNgIf70.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256Nd7cC5 = await BACMARSLPTOKENPoolyNgIf70.stake.call(uintmxzwx1y, {from: accounts[1]});
//		await BACMARSLPTOKENPoolyNgIf70.exit.call({from: accounts[1]});

		assert.equal(uint256VOZItW, BigInt("0"))
		await expect(BACMARSLPTOKENPoolyNgIf70.stake.call(uintpG4xQU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresstP8wuYB = accounts[4]
		const addresslPqej45 = accounts[2]
		const addressvmm7mNl = accounts[1]
		const BACMARSLPTOKENPoolH8RgggQ = await BACMARSLPTOKENPool.new(addresstP8wuYB, addresslPqej45, addressvmm7mNl, {from: accounts[0]});
		const byteYdKy7Zb = "0x0d0d181808140e03190101190b02180719101e1f110911050a08141d19111f0e"
		const byteZljGZo1 = "0x150a1513040b141601141e0c0d1f10110615031c181d1f070e1c0511150e1904"
		const uintOi6158v = BigInt("225")
		const uintMKXMNxF = BigInt("411")
		const uintrQ35ASh = BigInt("1761")
		const uintwIOlI3W = BigInt("662")
		const addressFbBifom = accounts[0]
		const addressdDfgqgj = accounts[2]
//		const uint256ldekU6 = await BACMARSLPTOKENPoolH8RgggQ.stakeWithPermit.call(uintrQ35ASh, uintMKXMNxF, uintOi6158v, byteZljGZo1, byteYdKy7Zb, {from: accounts[2]});
//		const uint256VVXN4H8 = await BACMARSLPTOKENPoolH8RgggQ.rewardPerToken.call({from: accounts[1]});
//		const uint256UWFQ9Yd = await BACMARSLPTOKENPoolH8RgggQ.stake.call(uintwIOlI3W, {from: accounts[1]});
//		const uint256tNjkFsE = await BACMARSLPTOKENPoolH8RgggQ.balanceOf.call(addressFbBifom, {from: accounts[1]});
//		const uint256JIhQ0dM = await BACMARSLPTOKENPoolH8RgggQ.balanceOf.call(addressdDfgqgj, {from: accounts[4]});
//		const uint256Xx9W0D = await BACMARSLPTOKENPoolH8RgggQ.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolH8RgggQ.stakeWithPermit.call(uintrQ35ASh, uintMKXMNxF, uintOi6158v, byteZljGZo1, byteYdKy7Zb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressUCQ516b = accounts[0]
		const addressjdihi5d = accounts[2]
		const addressiI6Dn2k = accounts[3]
		const BACMARSLPTOKENPoolC2Rfz7g = await BACMARSLPTOKENPool.new(addressUCQ516b, addressjdihi5d, addressiI6Dn2k, {from: accounts[1]});
		const uintwLOOVRH = BigInt("41")
		const uint256vIq98u = await BACMARSLPTOKENPoolC2Rfz7g.totalSupply.call({from: accounts[2]});
		const uint256LwkyxqA = await BACMARSLPTOKENPoolC2Rfz7g.rewardPerToken.call({from: accounts[3]});
//		const uint256tplWnp = await BACMARSLPTOKENPoolC2Rfz7g.notifyRewardAmount.call(uintwLOOVRH, {from: "0x0000000000000000000000000000000000000001"});
//		const stringuR1gTzr = await BACMARSLPTOKENPoolC2Rfz7g.name.call({from: accounts[3]});

		assert.equal(uint256LwkyxqA, BigInt("0"))
		assert.equal(uint256vIq98u, BigInt("0"))
		await expect(BACMARSLPTOKENPoolC2Rfz7g.notifyRewardAmount.call(uintwLOOVRH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressTcDi9Z = accounts[0]
		const addressoMGwdXz = accounts[3]
		const addressNifJZav = accounts[0]
		const BACMARSLPTOKENPoolyNgIf70 = await BACMARSLPTOKENPool.new(addressTcDi9Z, addressoMGwdXz, addressNifJZav, {from: accounts[4]});
		const uintqKOftE = BigInt("262")
		const uintIoj30r8 = BigInt("1343")
		const uint256jGaX8l2 = await BACMARSLPTOKENPoolyNgIf70.getRewardForDuration.call({from: accounts[4]});
		const uint256uG2TuOG = await BACMARSLPTOKENPoolyNgIf70.getRewardForDuration.call({from: accounts[0]});
//		const uint256Vq5EsLW = await BACMARSLPTOKENPoolyNgIf70.stake.call(uintqKOftE, {from: accounts[1]});
//		const uint256NhIpFwY = await BACMARSLPTOKENPoolyNgIf70.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256Nd7cC5 = await BACMARSLPTOKENPoolyNgIf70.stake.call(uintIoj30r8, {from: accounts[1]});

		assert.equal(uint256jGaX8l2, BigInt("0"))
		assert.equal(uint256uG2TuOG, BigInt("0"))
		await expect(BACMARSLPTOKENPoolyNgIf70.stake.call(uintqKOftE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressJxs63Eq = accounts[2]
		const addresslVUPU7 = accounts[2]
		const addressOA86PCb = accounts[5]
		const BACMARSLPTOKENPoolzAdzcb1 = await BACMARSLPTOKENPool.new(addressJxs63Eq, addresslVUPU7, addressOA86PCb, {from: accounts[4]});
		const uintWKbcgsw = BigInt("409")
		const uintI3gjbG4 = BigInt("935")
//		const uint256H6SpzgW = await BACMARSLPTOKENPoolzAdzcb1.withdraw.call(uintWKbcgsw, {from: accounts[1]});
//		const uint256kNKVxM8 = await BACMARSLPTOKENPoolzAdzcb1.notifyRewardAmount.call(uintI3gjbG4, {from: accounts[1]});
//		const uint256HBG0T2G = await BACMARSLPTOKENPoolzAdzcb1.totalSupply.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolzAdzcb1.exit.call({from: accounts[2]});
//		await BACMARSLPTOKENPoolzAdzcb1.onlyRewardsDistribution.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolzAdzcb1.withdraw.call(uintWKbcgsw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string8iXKDO = "tdYhXWk8UGBr4QzUx38"
		const stringL7euu9M = "jgcgzubORgxKhxS2MbGpkmEXab7BrEuYlA8r9iASXCiX4jgKtjxmJaP4CuoQ3Wi2"
		const uintIz4kAiF = BigInt("127")
		const BACMARSLPTOKENPoolIHTCTrK = await BACMARSLPTOKENPool.new(string8iXKDO, stringL7euu9M, uintIz4kAiF, {from: accounts[1]});
		await BACMARSLPTOKENPoolIHTCTrK.exit.call({from: accounts[4]});
		const uint256D0I0ASR = await BACMARSLPTOKENPoolIHTCTrK.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256SRiGhZI = await BACMARSLPTOKENPoolIHTCTrK.lastTimeRewardApplicable.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTn6DdE = "YaUJUb3Vgs9J12nGJFTxrPibjOOQ2cJeROXokhpvN4at9IRJTwEItYKRGJLg1b"
		const stringBkGiG2j = "u6Jtm12Zrj3BVxwAVcINQkh2K6NnwQJGtdJbv8xohfpMul1myFjNm3d5knpPAMHE22Sv"
		const uintXbEoGMQ = BigInt("120")
		const BACMARSLPTOKENPoolw699gDw = await BACMARSLPTOKENPool.new(stringTn6DdE, stringBkGiG2j, uintXbEoGMQ, {from: accounts[4]});
		const uintWYc1EzX = BigInt("1890")
		const uint256FzfXXZW = await BACMARSLPTOKENPoolw699gDw.stake.call(uintWYc1EzX, {from: accounts[1]});
		const uint8M1NW09w = await BACMARSLPTOKENPoolw699gDw.decimals.call({from: accounts[0]});
		const uint256HmSatBg = await BACMARSLPTOKENPoolw699gDw.lastTimeRewardApplicable.call({from: accounts[3]});
		await BACMARSLPTOKENPoolw699gDw.onlyRewardsDistribution.call({from: accounts[1]});
		const uint8QAfrwWQ = await BACMARSLPTOKENPoolw699gDw.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolw699gDw.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringcPzAZS0 = "lCKHMPOQ7FzdYn2AX2ql9pPgWLDBnY8bR4F5GqDw6DtnLoEwHwxaCfx9mU67i4FLWyAh5LzhYgfBoZON"
		const stringaWxgwn = "RUVwWRF1adNJE3UiLAuTZEfWeYIA7kgvCJg4kMdUdqiJHv5AzeUxFTVxQzLKHpbNM078UeknJdpMSaEpJYSPXSKz"
		const uintoiICutB = BigInt("68")
		const BACMARSLPTOKENPoolGcHFEV2 = await BACMARSLPTOKENPool.new(stringcPzAZS0, stringaWxgwn, uintoiICutB, {from: accounts[5]});
		const addressNN3UVDV = accounts[5]
		const uintGPF6AZ7 = BigInt("848")
		const addressS5BFcZV = accounts[3]
		const uint256zsqHP9f = await BACMARSLPTOKENPoolGcHFEV2.earned.call(addressNN3UVDV, {from: accounts[0]});
		await BACMARSLPTOKENPoolGcHFEV2.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256RafjTS2 = await BACMARSLPTOKENPoolGcHFEV2.notifyRewardAmount.call(uintGPF6AZ7, {from: accounts[4]});
		const uint256EiYl0O = await BACMARSLPTOKENPoolGcHFEV2.earned.call(addressS5BFcZV, {from: accounts[3]});
		const stringvnHadJb = await BACMARSLPTOKENPoolGcHFEV2.symbol.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresszllXwuP = "0x0000000000000000000000000000000000000001"
		const addressLCYsHnE = accounts[3]
		const addressLwwGgd = accounts[0]
		const BACMARSLPTOKENPoolVOdSunn = await BACMARSLPTOKENPool.new(addresszllXwuP, addressLCYsHnE, addressLwwGgd, {from: accounts[3]});
		const addressQVyDnXb = accounts[5]
		const uinthBcSUJb = BigInt("1451")
//		await BACMARSLPTOKENPoolVOdSunn.getReward.call({from: accounts[3]});
//		const uint256X98t2F = await BACMARSLPTOKENPoolVOdSunn.balanceOf.call(addressQVyDnXb, {from: accounts[3]});
//		const uint256LIJXBJ = await BACMARSLPTOKENPoolVOdSunn.stake.call(uinthBcSUJb, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolVOdSunn.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringpEjvFr = "tVGAOfd89PLOnDlEzym7SXzilorCUg4ADsocBHuVnnONcqzAReqdiwu8PXolxs4C7kbRU"
		const stringLibkSgK = "oRvY2PeNwva5eAlfH8GzNFXr9KQ"
		const uintgr4Qizm = BigInt("228")
		const BACMARSLPTOKENPoolbR8tGYU = await BACMARSLPTOKENPool.new(stringpEjvFr, stringLibkSgK, uintgr4Qizm, {from: accounts[0]});
		const addresszsPkgUi = accounts[5]
		const uint256GoDgl3a = await BACMARSLPTOKENPoolbR8tGYU.earned.call(addresszsPkgUi, {from: accounts[3]});
		await BACMARSLPTOKENPoolbR8tGYU.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256GxjtEUV = await BACMARSLPTOKENPoolbR8tGYU.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOtQG0O9 = "44tOtCGnhmTRWzNl9w3SwPcPzbeKQP0n1p45HI171nqiWAmJW3RXapeyfuz92GPCl9JAt8GzfKuhBlTYWOc5rwRlFoE1n"
		const stringzw3Pgro = "LtHeQfkyxK6UOkTFQvoLiBXe6IF0MgxSbvUNPS6K"
		const uintw5asws8 = BigInt("206")
		const BACMARSLPTOKENPoolBoXsPCm = await BACMARSLPTOKENPool.new(stringOtQG0O9, stringzw3Pgro, uintw5asws8, {from: accounts[4]});
		const addressYr73Qm = accounts[4]
		const uintHN7Y6a = BigInt("458")
		const addresspX0IFRd = await BACMARSLPTOKENPoolBoXsPCm.updateReward.call(addressYr73Qm, {from: accounts[1]});
		const uint256TccYj6W = await BACMARSLPTOKENPoolBoXsPCm.notifyRewardAmount.call(uintHN7Y6a, {from: accounts[2]});
		await BACMARSLPTOKENPoolBoXsPCm.getReward.call({from: accounts[0]});
		await BACMARSLPTOKENPoolBoXsPCm.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringigYIce8 = "eHgQLuJ6E6NlEPXkDKeupwWc2lfPp8KYbV7Rl4TRlXoNjn7"
		const stringNaC7oHv = "gQ1VHCY7q2zfmyVvEKqViBXDt"
		const uintfqbwtRQ = BigInt("10")
		const BACMARSLPTOKENPoolERDiDME = await BACMARSLPTOKENPool.new(stringigYIce8, stringNaC7oHv, uintfqbwtRQ, {from: accounts[0]});
		const uintOwYkeq = BigInt("1792")
		const addressL7moBEx = accounts[3]
		const byteyztw18u = "0x1b1c180f021e1c0407151f0f19180f070f1d1b161a021003020b050c1c010917"
		const bytebBVAHt = "0x0b19021a1c10051b04080b13010c1f1119080b011b0a190a01100c1709020f0a"
		const uintE4zjpcj = BigInt("141")
		const uintXLNAjqN = BigInt("1965")
		const uintTB3eszL = BigInt("991")
		const uint256b6NGM16 = await BACMARSLPTOKENPoolERDiDME.withdraw.call(uintOwYkeq, {from: accounts[2]});
		const uint256NRQpgvl = await BACMARSLPTOKENPoolERDiDME.earned.call(addressL7moBEx, {from: accounts[1]});
		const uint8WzecTU = await BACMARSLPTOKENPoolERDiDME.decimals.call({from: accounts[2]});
		await BACMARSLPTOKENPoolERDiDME.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint25689meyH = await BACMARSLPTOKENPoolERDiDME.stakeWithPermit.call(uintTB3eszL, uintXLNAjqN, uintE4zjpcj, bytebBVAHt, byteyztw18u, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringGp4qdx9 = "XyjgxZql1uaaLsx4rQevfkdQCOrEdTiaSb4WIYoD86Ft3AI62m9PIYCjA7rl"
		const stringF6uu9Q4 = "licHC5KH1XC8rDNQv8ioZFNXkKrBSx5piXXnnZ"
		const uintjhKQH0 = BigInt("207")
		const BACMARSLPTOKENPoolqTVtj14 = await BACMARSLPTOKENPool.new(stringGp4qdx9, stringF6uu9Q4, uintjhKQH0, {from: accounts[3]});
		const addressw9qKqMC = accounts[0]
		const uint256G5ROcLw = await BACMARSLPTOKENPoolqTVtj14.earned.call(addressw9qKqMC, {from: accounts[1]});
		await BACMARSLPTOKENPoolqTVtj14.nonReentrant.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhTMcf3Z = "FJS5IEwtWDM1DaLIDXmQoUOkLcUweEcdhgRMVJQWx2iX3eTpPYyAW4pRD92glxViMLvq8sX"
		const stringnmdz518 = "ASR7ufp"
		const uintXVTBgzT = BigInt("87")
		const BACMARSLPTOKENPoolBi0hPzR = await BACMARSLPTOKENPool.new(stringhTMcf3Z, stringnmdz518, uintXVTBgzT, {from: accounts[3]});
		const addressXegQIAp = accounts[5]
		const address5M5NG0 = accounts[1]
		const uint256IGXviCj = await BACMARSLPTOKENPoolBi0hPzR.balanceOf.call(addressXegQIAp, {from: accounts[1]});
		await BACMARSLPTOKENPoolBi0hPzR.getReward.call({from: accounts[4]});
		const uint256XLtjCG = await BACMARSLPTOKENPoolBi0hPzR.earned.call(address5M5NG0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256e5g3L8C = await BACMARSLPTOKENPoolBi0hPzR.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdP8GY6y = "PkgZHXh92YqzPvq2KelD79s3YWySP53b24thXuU68Yj4W9hyrss2fHQvn8zRKIW5fOiU4DK1e73PS"
		const stringg5PkVf7 = "Am84aNegw9SkWb8"
		const uintXNg1pPo = BigInt("208")
		const BACMARSLPTOKENPoolZJPGVYn = await BACMARSLPTOKENPool.new(stringdP8GY6y, stringg5PkVf7, uintXNg1pPo, {from: "0x0000000000000000000000000000000000000001"});
		const addressDRZTg2Q = accounts[0]
		const addressNPZVzHe = accounts[3]
		const addressItT2XWV = accounts[5]
		await BACMARSLPTOKENPoolZJPGVYn.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256ulCKyVp = await BACMARSLPTOKENPoolZJPGVYn.earned.call(addressDRZTg2Q, {from: accounts[0]});
		const uint2567Y29Vl = await BACMARSLPTOKENPoolZJPGVYn.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256NklI0dt = await BACMARSLPTOKENPoolZJPGVYn.balanceOf.call(addressNPZVzHe, {from: accounts[3]});
		const uint256IjtuAj5 = await BACMARSLPTOKENPoolZJPGVYn.balanceOf.call(addressItT2XWV, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringet6pqtb = "6VLREaiofquSqyg5XUHCgVsxWekJLt8gDu8AzAiMrJE"
		const stringcbvkL8 = "xPjr8hk3YtYMOEoXH3Nuh93ColeOU2vrQMEnGukOM3Shtyq1tOSdCpqh5"
		const uintREX5lD = BigInt("135")
		const BACMARSLPTOKENPoolZGbqPxW = await BACMARSLPTOKENPool.new(stringet6pqtb, stringcbvkL8, uintREX5lD, {from: accounts[3]});
		const byteDkAVh06 = "0x15131d13160d01141715061d0d060b0320100b1a080e0d0c1d120b0e20091a1a"
		const byte19SALK = "0x1007070e1a0b011c18171d0806180e071d171d12130d01190b0f0e1b0b091c15"
		const uintpoV1lMl = BigInt("168")
		const uintj3zRh7T = BigInt("1388")
		const uintKllojFS = BigInt("1993")
		const uintNB3k0N5 = BigInt("1359")
		const uintiDX3n6 = BigInt("1844")
		await BACMARSLPTOKENPoolZGbqPxW.getReward.call({from: accounts[3]});
		const uint256ZEIOuS1 = await BACMARSLPTOKENPoolZGbqPxW.stakeWithPermit.call(uintKllojFS, uintj3zRh7T, uintpoV1lMl, byte19SALK, byteDkAVh06, {from: accounts[3]});
		const uint256kycWZqf = await BACMARSLPTOKENPoolZGbqPxW.withdraw.call(uintNB3k0N5, {from: accounts[4]});
		const uint256jyZa6bm = await BACMARSLPTOKENPoolZGbqPxW.notifyRewardAmount.call(uintiDX3n6, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjT1rbiG = "PWxAEdRxXWoaS7iQnb1dapi8vHXWGIYpdBMgET9HwG8c6YNo"
		const stringYZBeuZp = "wkORHT"
		const uintasaWzm = BigInt("30")
		const BACMARSLPTOKENPoolqgBGqA4 = await BACMARSLPTOKENPool.new(stringjT1rbiG, stringYZBeuZp, uintasaWzm, {from: accounts[0]});
		const bytepljVzLn = "0x0f1e021700001f1a18180d061b11080c100e0a0e1617160601030c1d120f1b1c"
		const byteXpWnv49 = "0x020202161d1d06140d0b041c1408051e0616080708050f1b12110611081e071e"
		const uintQChv1gf = BigInt("29")
		const uintke6DeqO = BigInt("1753")
		const uint2VzUlu = BigInt("377")
		const addressCBqJDDa = "0x0000000000000000000000000000000000000001"
		const uintF1hKFeT = BigInt("1478")
		const uintEh8fYr6 = BigInt("2019")
		const uint256dkaA8RG = await BACMARSLPTOKENPoolqgBGqA4.stakeWithPermit.call(uint2VzUlu, uintke6DeqO, uintQChv1gf, byteXpWnv49, bytepljVzLn, {from: accounts[2]});
		const addressIxgow9 = await BACMARSLPTOKENPoolqgBGqA4.updateReward.call(addressCBqJDDa, {from: accounts[5]});
		const uint256SwjEj2b = await BACMARSLPTOKENPoolqgBGqA4.notifyRewardAmount.call(uintF1hKFeT, {from: accounts[2]});
		const uint256x6ghkLh = await BACMARSLPTOKENPoolqgBGqA4.notifyRewardAmount.call(uintEh8fYr6, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnKJGtl = "s63Qx4s2AWd5BzP5wEefkPTCa8U3Kl9v5FYRDJEEPzVOBh9sHrbfsII8w2RMe1pTZMbwbr7Ftd"
		const stringwxMHepg = "UAlVGgnPNuCxcLKg3Od3UfRd8IeA5GifUf3n8ltkzC"
		const uintgQGPLPy = BigInt("166")
		const BACMARSLPTOKENPoolsvdnpJn = await BACMARSLPTOKENPool.new(stringnKJGtl, stringwxMHepg, uintgQGPLPy, {from: accounts[3]});
		const uintxdbnhe2 = BigInt("1576")
		const uintAhuAdd1 = BigInt("484")
		const uintkny0aTk = BigInt("832")
		const uintpNFTCul = BigInt("1599")
		const uint256JiwvJDc = await BACMARSLPTOKENPoolsvdnpJn.withdraw.call(uintxdbnhe2, {from: accounts[4]});
		const uint256vsAHOTz = await BACMARSLPTOKENPoolsvdnpJn.notifyRewardAmount.call(uintAhuAdd1, {from: accounts[3]});
		const uint256GQlnw5z = await BACMARSLPTOKENPoolsvdnpJn.notifyRewardAmount.call(uintkny0aTk, {from: accounts[4]});
		const uint2568mGa6t = await BACMARSLPTOKENPoolsvdnpJn.withdraw.call(uintpNFTCul, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuuQsViv = "H5Jwslh5wpBNFJJ8H38WL872CRrukCKD6lLayc"
		const stringf5ws9AW = "2lgZptJgtBQLqLyUs6dARl"
		const uint4M1Z3H = BigInt("155")
		const BACMARSLPTOKENPoolY0QzAc = await BACMARSLPTOKENPool.new(stringuuQsViv, stringf5ws9AW, uint4M1Z3H, {from: "0x0000000000000000000000000000000000000001"});
		const uintxCEuPd4 = BigInt("1681")
		const uintx6cn2f1 = BigInt("1284")
		const stringew7Ic6g = await BACMARSLPTOKENPoolY0QzAc.name.call({from: accounts[2]});
		const uint256hS5wxbI = await BACMARSLPTOKENPoolY0QzAc.lastTimeRewardApplicable.call({from: accounts[5]});
		await BACMARSLPTOKENPoolY0QzAc.getReward.call({from: accounts[0]});
		const uint256ZZ0Qnsw = await BACMARSLPTOKENPoolY0QzAc.stake.call(uintxCEuPd4, {from: accounts[3]});
		const uint256Z8lpQAg = await BACMARSLPTOKENPoolY0QzAc.notifyRewardAmount.call(uintx6cn2f1, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZOEjkwm = "qo79a4cNywAyaBq0Gus0rrCwzdizMg6A4UygGto1dccmoiTIDnXxh7ywKLq1OsV5SYyfEiebapS7KF2zRWtyvBereCG"
		const stringHuiPHzA = "c1mcykOzJcfW4nNaNTtaKkgq9Vtf8YyvNbUsG6bKEypcm5rgY5kNMLuOtYGD7p2C3cHNfIIMMqcEkwX"
		const uintWb8HhfW = BigInt("47")
		const BACMARSLPTOKENPoolzIx7sj8 = await BACMARSLPTOKENPool.new(stringZOEjkwm, stringHuiPHzA, uintWb8HhfW, {from: accounts[1]});
		const addressAjAG0M = accounts[5]
		const byteaIaGRMf = "0x181b0f021f090a1d1113031510190e0e071a1e0b050e140915081501051b1713"
		const bytejx9ihM6 = "0x1e0a1a0a0e0e15101a080a1702140c08180c07190313081b191104150b1f1f1e"
		const uintQdWzPn = BigInt("174")
		const uint4w7ctZ = BigInt("867")
		const uintRyabSXv = BigInt("1700")
		const uint256yT6bgCf = await BACMARSLPTOKENPoolzIx7sj8.balanceOf.call(addressAjAG0M, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolzIx7sj8.getReward.call({from: accounts[1]});
		const uint256uFCc4XS = await BACMARSLPTOKENPoolzIx7sj8.stakeWithPermit.call(uintRyabSXv, uint4w7ctZ, uintQdWzPn, bytejx9ihM6, byteaIaGRMf, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringu91LxMT = "yh2FQNPq"
		const stringXMTXfCi = "PvQz5VLSi7WxLVicygdHKFVE6Shm1r4I7VQ259yvRfXXgFEPMZeSQ6HBVM4UfliekQ5GKWEXAnjIGZB"
		const uintFOzlU2W = BigInt("98")
		const BACMARSLPTOKENPoolRhtnB9n = await BACMARSLPTOKENPool.new(stringu91LxMT, stringXMTXfCi, uintFOzlU2W, {from: accounts[3]});
		const uintsLpMD7J = BigInt("1567")
		const addressptNxGkK = accounts[4]
		const uint256iPvDKDP = await BACMARSLPTOKENPoolRhtnB9n.withdraw.call(uintsLpMD7J, {from: accounts[2]});
		const uint256nTQzzOw = await BACMARSLPTOKENPoolRhtnB9n.balanceOf.call(addressptNxGkK, {from: accounts[0]});
		const uint256oEiTiBa = await BACMARSLPTOKENPoolRhtnB9n.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCSUf67m = "bs8PgVJmMP1gs849NM"
		const stringu00dFP = "3hVKxrZUlQHbUcBRXkXykX"
		const uintOjOBUwO = BigInt("208")
		const BACMARSLPTOKENPoolSU019K = await BACMARSLPTOKENPool.new(stringCSUf67m, stringu00dFP, uintOjOBUwO, {from: accounts[0]});
		const uint256DZ1uKno = await BACMARSLPTOKENPoolSU019K.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256c5SkzqX = await BACMARSLPTOKENPoolSU019K.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFWza9zf = "ZMQ6dXRqiMaugA"
		const stringbMCgZel = "KfiodZUuI3lP6xlspBXKFX6V1KW2TTlvl"
		const uintqeHE9wH = BigInt("247")
		const BACMARSLPTOKENPoolqH6fT6o = await BACMARSLPTOKENPool.new(stringFWza9zf, stringbMCgZel, uintqeHE9wH, {from: accounts[0]});
		const uintqtGeTO = BigInt("1985")
		const address0dWntX = accounts[4]
		const uint256mac6sk1 = await BACMARSLPTOKENPoolqH6fT6o.stake.call(uintqtGeTO, {from: accounts[5]});
		const uint256Czzutnk = await BACMARSLPTOKENPoolqH6fT6o.earned.call(address0dWntX, {from: accounts[2]});
		const uint256Tcxk59n = await BACMARSLPTOKENPoolqH6fT6o.totalSupply.call({from: accounts[3]});
		const uint256qXJh2ah = await BACMARSLPTOKENPoolqH6fT6o.totalSupply.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhksSZPi = "KcCeIIBFCX3CQf2nWvkRN7bNVnIMRGtHzk9rRFZTri61Uhk4Z274N3XvwPbo7hRr3u9LY5oE0tIXg"
		const stringvwhezvJ = "LyVzU7wtX7ETTifib2zJKlrc9"
		const uintzuIVXbV = BigInt("198")
		const BACMARSLPTOKENPooliCsnAJF = await BACMARSLPTOKENPool.new(stringhksSZPi, stringvwhezvJ, uintzuIVXbV, {from: accounts[2]});
		const uintaMkXPjB = BigInt("1806")
		const byteKwRWii1 = "0x160b130d0118120c1c0a0a0303081705190e1204181f0c0d071113030a14141d"
		const bytedDBXOX = "0x060a02040b071b031a110e1510020f0a0205190f03160a0a150c1f120f191209"
		const uintUzcmu9J = BigInt("15")
		const uintQWzEZwV = BigInt("464")
		const uintYPQf6fJ = BigInt("1791")
		const uint256DlNnBRG = await BACMARSLPTOKENPooliCsnAJF.stake.call(uintaMkXPjB, {from: accounts[3]});
		const uint256IQMp4a0 = await BACMARSLPTOKENPooliCsnAJF.totalSupply.call({from: accounts[3]});
		const uint8nN83pdb = await BACMARSLPTOKENPooliCsnAJF.decimals.call({from: accounts[2]});
		const uint256UXxfJk = await BACMARSLPTOKENPooliCsnAJF.stakeWithPermit.call(uintYPQf6fJ, uintQWzEZwV, uintUzcmu9J, bytedDBXOX, byteKwRWii1, {from: accounts[4]});
		await BACMARSLPTOKENPooliCsnAJF.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgci6n9L = "H3kCpJy1cevius"
		const stringyHpHutr = "iwHElrcP38NKCoGxZlNYwoUcOq6aswmvGvPi1"
		const uintelxBTC = BigInt("231")
		const BACMARSLPTOKENPoolODhssdb = await BACMARSLPTOKENPool.new(stringgci6n9L, stringyHpHutr, uintelxBTC, {from: accounts[5]});
		const uintXQSjUO = BigInt("171")
		await BACMARSLPTOKENPoolODhssdb.getReward.call({from: accounts[3]});
		const uint256sCS1duJ = await BACMARSLPTOKENPoolODhssdb.notifyRewardAmount.call(uintXQSjUO, {from: accounts[1]});
		await BACMARSLPTOKENPoolODhssdb.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnsGFZYt = "MIPA6bjkpESfsIBSIhhXkr4WI4p9cnkNwb2vzgMlZqsFLmQm65FQXP0vUESKFlLRnzGCtCBbmp0iz16QuGjAoHapzza"
		const stringbgvGA2G = "9JOPq7CO89ja8chy1Hi89kf4H8WFe5wkdvXemlu3fd24xw1AopgMTuMK0KQrcxTXtSqaUEzWZ94HN3ET"
		const uintxnziSDa = BigInt("171")
		const BACMARSLPTOKENPoolsvjajTc = await BACMARSLPTOKENPool.new(stringnsGFZYt, stringbgvGA2G, uintxnziSDa, {from: accounts[2]});
		const byteJEWxsgs = "0x1e0a0d181e1a08051907140c1c08101d1e20031c141d0b160e0f121917031f17"
		const byteA1et9lC = "0x1a02061811020b081c1510071200041604151a0e100f1e1b07160a080e1d0b06"
		const uintOVGpGRv = BigInt("244")
		const uintdlgnKFq = BigInt("133")
		const uintRZM966e = BigInt("717")
		const uint256GBPJBwQ = await BACMARSLPTOKENPoolsvjajTc.getRewardForDuration.call({from: accounts[4]});
		const stringuhRN7bL = await BACMARSLPTOKENPoolsvjajTc.symbol.call({from: accounts[1]});
		const uint8ygSEwmi = await BACMARSLPTOKENPoolsvjajTc.decimals.call({from: accounts[3]});
		const stringDKqsVAP = await BACMARSLPTOKENPoolsvjajTc.symbol.call({from: accounts[2]});
		const uint256FX28hwU = await BACMARSLPTOKENPoolsvjajTc.stakeWithPermit.call(uintRZM966e, uintdlgnKFq, uintOVGpGRv, byteA1et9lC, byteJEWxsgs, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringI7mo4fp = "LJUoUFdXG11ca59osm4ZgagsSWwKBd15Im29nyFHrf27t51b2q"
		const stringDmbZGVn = "IfqECADSZXLLmAhyM5ck8FYsqn8VDtfMsqeKtkRRsYXgezT0tgoUYqfnEYt"
		const uintgeh5kFD = BigInt("149")
		const BACMARSLPTOKENPoolYKh8nG = await BACMARSLPTOKENPool.new(stringI7mo4fp, stringDmbZGVn, uintgeh5kFD, {from: accounts[0]});
		const uintJ0vBY7 = BigInt("1665")
		const uintdLYwmsW = BigInt("197")
		const uint256GCKQyL = await BACMARSLPTOKENPoolYKh8nG.totalSupply.call({from: accounts[4]});
		const uint256IuRdhN2 = await BACMARSLPTOKENPoolYKh8nG.stake.call(uintJ0vBY7, {from: accounts[0]});
		const uint256PmT21jc = await BACMARSLPTOKENPoolYKh8nG.stake.call(uintdLYwmsW, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZ7OR2qS = "tpky5V5gMwanUMoKNd7T98sbGF6IHrQiRkg8SOpJwfQjboH6sGqU4J"
		const stringqOTPZbe = "ES8O2C2upLWMmHuRZdr0kG1eGCGzBCsEJDmK6XQdzaXz7bzWTACz7gbJraG1pxvr1AUYqba1AlVsMiSuo7llcbcEh6Mhc"
		const uintnHC6W47 = BigInt("37")
		const BACMARSLPTOKENPoolyNXibCA = await BACMARSLPTOKENPool.new(stringZ7OR2qS, stringqOTPZbe, uintnHC6W47, {from: accounts[4]});
		const addressED5VFm = accounts[2]
		const uintRrXoMJC = BigInt("891")
		const uintREZSAzP = BigInt("217")
		const uint256by1WHyb = await BACMARSLPTOKENPoolyNXibCA.earned.call(addressED5VFm, {from: accounts[3]});
		const uint256jsJcPAo = await BACMARSLPTOKENPoolyNXibCA.notifyRewardAmount.call(uintRrXoMJC, {from: accounts[3]});
		const uint256wnEbHZn = await BACMARSLPTOKENPoolyNXibCA.stake.call(uintREZSAzP, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgZBV9cF = "wAE7MXMW"
		const stringyukeQQ = "SkGmjhJrfBCOmQqNg9rVVnIb1Bc2fGcNeUdKF"
		const uintO9FcZa = BigInt("66")
		const BACMARSLPTOKENPooltm7FyT9 = await BACMARSLPTOKENPool.new(stringgZBV9cF, stringyukeQQ, uintO9FcZa, {from: accounts[1]});
		const uintLg2O5Qp = BigInt("465")
		const uintKT8VL7S = BigInt("582")
		const uint256JqkvQz8 = await BACMARSLPTOKENPooltm7FyT9.withdraw.call(uintLg2O5Qp, {from: accounts[0]});
		await BACMARSLPTOKENPooltm7FyT9.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256YKXLvgx = await BACMARSLPTOKENPooltm7FyT9.notifyRewardAmount.call(uintKT8VL7S, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNn6FPeP = "UIp1AJaK4vQL8U0jJ9O6iSRFwRUsrVlrrTGv8jq2clrKu9lQJUuBAK5HayMPWMwJyixbbJjI4nQxgYpqdMiLvcUJz"
		const stringQC3pynh = "g5NW1Bi6dmmqY67efrPBH8DV4faMFXJ90PmQmhsYpZGpGLrv7mIKpaJwTo361W2YGSFz6LK18nAi7IZVvCcNtBs9WD2IIVEd"
		const uintrTt0Olc = BigInt("171")
		const BACMARSLPTOKENPoolZalIoDZ = await BACMARSLPTOKENPool.new(stringNn6FPeP, stringQC3pynh, uintrTt0Olc, {from: accounts[1]});
		const uintFjiEoej = BigInt("73")
		const addressz8QN1F2 = accounts[4]
		const bytehhQ6vbE = "0x1b130e171b0616130306110f1b171e141c101c18191009060701150e0f060f15"
		const byteXvSA2Ql = "0x041b01001c05160308090c1801050e080e171116090e1a171a0e1106051d051a"
		const uintEViMYjh = BigInt("27")
		const uintVk13rnm = BigInt("2038")
		const uintwxkAo0 = BigInt("659")
		const uint256pyuNPT = await BACMARSLPTOKENPoolZalIoDZ.stake.call(uintFjiEoej, {from: accounts[3]});
		const stringmFKPDB = await BACMARSLPTOKENPoolZalIoDZ.symbol.call({from: accounts[4]});
		const uint256CHbPPBX = await BACMARSLPTOKENPoolZalIoDZ.balanceOf.call(addressz8QN1F2, {from: accounts[0]});
		const uint256tK1o5P7 = await BACMARSLPTOKENPoolZalIoDZ.stakeWithPermit.call(uintwxkAo0, uintVk13rnm, uintEViMYjh, byteXvSA2Ql, bytehhQ6vbE, {from: accounts[0]});
		const uint256WSNFCcO = await BACMARSLPTOKENPoolZalIoDZ.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRXP5OdZ = "6zODuYIiEkE7YLVwiOntcuJvlhb4ydXukrWNreBJMm5SHc"
		const strings5lSVl1 = "KhJVGCIuHKEGQrmx4XK2um5KfSrEFYkZL1TfpKDquWJ2r3zUptqLDI58IOHV9vs2bWcdnttLh5z35wYE2vrEwApJjOGT87"
		const uintYYRafSW = BigInt("3")
		const BACMARSLPTOKENPooleJk6Z9e = await BACMARSLPTOKENPool.new(stringRXP5OdZ, strings5lSVl1, uintYYRafSW, {from: accounts[3]});
		const addressOnwhvwX = accounts[1]
		const uint256F31DSCZ = await BACMARSLPTOKENPooleJk6Z9e.balanceOf.call(addressOnwhvwX, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pDo4K2q = await BACMARSLPTOKENPooleJk6Z9e.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringxGtdFaE = "EpFKwcqGOIit2su9J6W6425dF4GuC0OkADuh2fzOpaeXUf9O"
		const stringVUXyS6 = "as1W7NaaSiFna58RAt8IgSwDg6RVtVhLlJaAeA4tteUxfvhht0Zj"
		const uintQzPtYB1 = BigInt("50")
		const BACMARSLPTOKENPoolGxGMIRd = await BACMARSLPTOKENPool.new(stringxGtdFaE, stringVUXyS6, uintQzPtYB1, {from: accounts[3]});
		const addressw9ZzVVy = accounts[5]
		const uintYgjZ50 = BigInt("1814")
		const uint256UAKmwn = await BACMARSLPTOKENPoolGxGMIRd.totalSupply.call({from: accounts[1]});
		await BACMARSLPTOKENPoolGxGMIRd.exit.call({from: accounts[0]});
		const uint256Dw6r4yP = await BACMARSLPTOKENPoolGxGMIRd.balanceOf.call(addressw9ZzVVy, {from: accounts[4]});
		const uint256swSfKmx = await BACMARSLPTOKENPoolGxGMIRd.notifyRewardAmount.call(uintYgjZ50, {from: accounts[4]});
		await BACMARSLPTOKENPoolGxGMIRd.onlyRewardsDistribution.call({from: accounts[0]});
		await BACMARSLPTOKENPoolGxGMIRd.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLkfNOfp = "Q1F112mYvwHXpTJMtREvLouDimQUyji6pjwSyCq2ww4hT3Pyq5UMga"
		const stringedref7U = "KcbawFJotWuzWbaQNnAUMjcWjy83NJOHL1BVDwUreneWcfm5uT15FlGbPB5aEMMtXYekgjtZjf"
		const uintWemxiAU = BigInt("47")
		const BACMARSLPTOKENPoolchuZg5v = await BACMARSLPTOKENPool.new(stringLkfNOfp, stringedref7U, uintWemxiAU, {from: accounts[3]});
		const addressNZuYDdC = "0x0000000000000000000000000000000000000001"
		const addressuRPauxU = accounts[3]
		const addressEyw19zM = accounts[5]
		await BACMARSLPTOKENPoolchuZg5v.onlyRewardsDistribution.call({from: accounts[0]});
		await BACMARSLPTOKENPoolchuZg5v.nonReentrant.call({from: accounts[4]});
		const uint256ahjixV3 = await BACMARSLPTOKENPoolchuZg5v.balanceOf.call(addressNZuYDdC, {from: accounts[0]});
		const uint2566EtfrV = await BACMARSLPTOKENPoolchuZg5v.earned.call(addressuRPauxU, {from: accounts[0]});
		const uint256mca9bud = await BACMARSLPTOKENPoolchuZg5v.earned.call(addressEyw19zM, {from: accounts[0]});
	});
})