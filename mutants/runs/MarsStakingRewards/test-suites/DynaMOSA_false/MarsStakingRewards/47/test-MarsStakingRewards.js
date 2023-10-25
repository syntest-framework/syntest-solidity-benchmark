const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressdyietE = accounts[4]
		const addressVsTDIBF = accounts[2]
		const addressZe2Wovn = accounts[2]
		const MarsStakingRewardsRWOFZm = await MarsStakingRewards.new(addressdyietE, addressVsTDIBF, addressZe2Wovn, {from: accounts[4]});
		const uintXaNMXTv = BigInt("982")
		const addressiT5RxFo = accounts[1]
		const uint256n7pBMbF = await MarsStakingRewardsRWOFZm.withdraw.call(uintXaNMXTv, {from: accounts[1]});
		const uint25635ExhP = await MarsStakingRewardsRWOFZm.getRewardForDuration.call({from: accounts[3]});
		const addresstMTUsML = await MarsStakingRewardsRWOFZm.setRewardsDistribution.call(addressiT5RxFo, {from: accounts[0]});

		await expect(MarsStakingRewardsRWOFZm.withdraw.call(uintXaNMXTv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressaAdmUTq = accounts[4]
		const addressMhv7Xr9 = accounts[5]
		const addressmBVOD40 = accounts[0]
		const MarsStakingRewardsjUFuNvm = await MarsStakingRewards.new(addressaAdmUTq, addressMhv7Xr9, addressmBVOD40, {from: accounts[3]});
		const addresseze9nbz = accounts[4]
		const addresskSPpJws = accounts[1]
		const addressw0upaUz = accounts[3]
		await MarsStakingRewardsjUFuNvm.onlyOwner.call({from: accounts[2]});
		const addresso5Durwb = await MarsStakingRewardsjUFuNvm.updateReward.call(addresseze9nbz, {from: accounts[4]});
		const addressJrtKyeD = await MarsStakingRewardsjUFuNvm.updateReward.call(addresskSPpJws, {from: accounts[5]});
		const uint256dudJ7rk = await MarsStakingRewardsjUFuNvm.rewardPerToken.call({from: accounts[2]});
		const uint2562i7MsZ = await MarsStakingRewardsjUFuNvm.earned.call(addressw0upaUz, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsjUFuNvm.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressBaXSyOZ = accounts[3]
		const addressa9JHlB3 = accounts[0]
		const addressFts6Snh = accounts[1]
		const MarsStakingRewardsCd9yyj2 = await MarsStakingRewards.new(addressBaXSyOZ, addressa9JHlB3, addressFts6Snh, {from: accounts[1]});
		const addressVRNsgKn = accounts[3]
		const uintYWX6tqa = BigInt("1869")
		const uintkzP2LnE = BigInt("1270")
		const uint256eI4lr01 = await MarsStakingRewardsCd9yyj2.earned.call(addressVRNsgKn, {from: accounts[3]});
		const uint256HLHz2Nf = await MarsStakingRewardsCd9yyj2.notifyRewardAmount.call(uintkzP2LnE, uintYWX6tqa, {from: accounts[2]});
		await MarsStakingRewardsCd9yyj2.renounceOwnership.call({from: accounts[1]});
		const uint256pS5Zr6F = await MarsStakingRewardsCd9yyj2.getRewardForDuration.call({from: accounts[0]});

		assert.equal(uint256eI4lr01, BigInt("0"))
		await expect(MarsStakingRewardsCd9yyj2.notifyRewardAmount.call(uintkzP2LnE, uintYWX6tqa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressRfuLpy = accounts[3]
		const addressOPhEp1 = "0x0000000000000000000000000000000000000001"
		const addressx2fCe65 = accounts[0]
		const MarsStakingRewardsvCTAJAz = await MarsStakingRewards.new(addressRfuLpy, addressOPhEp1, addressx2fCe65, {from: accounts[1]});
		const uintBYIvBf8 = BigInt("1942")
		const uintyMkkWLz = BigInt("763")
		await MarsStakingRewardsvCTAJAz.renounceOwnership.call({from: accounts[2]});
		await MarsStakingRewardsvCTAJAz.nonReentrant.call({from: accounts[1]});
		await MarsStakingRewardsvCTAJAz.exit.call({from: accounts[2]});
		const uint256itc4tru = await MarsStakingRewardsvCTAJAz.notifyRewardAmount.call(uintyMkkWLz, uintBYIvBf8, {from: accounts[4]});
		await MarsStakingRewardsvCTAJAz.nonReentrant.call({from: accounts[2]});

		await expect(MarsStakingRewardsvCTAJAz.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressAeTlHp = "0x0000000000000000000000000000000000000001"
		const addressFTTB48Q = accounts[4]
		const addresswOePob = accounts[4]
		const MarsStakingRewardsL7qbV6k = await MarsStakingRewards.new(addressAeTlHp, addressFTTB48Q, addresswOePob, {from: accounts[4]});
		const uintjtqgDYY = BigInt("1466")
		const uint256XMh4NxA = await MarsStakingRewardsL7qbV6k.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256XWPpofG = await MarsStakingRewardsL7qbV6k.withdraw.call(uintjtqgDYY, {from: accounts[3]});
		const uint256auvW3t2 = await MarsStakingRewardsL7qbV6k.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(uint256XMh4NxA, BigInt("0"))
		await expect(MarsStakingRewardsL7qbV6k.withdraw.call(uintjtqgDYY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressTYcfSvg = "0x0000000000000000000000000000000000000001"
		const addressMKF2Pkh = accounts[4]
		const addressBmzldcC = accounts[5]
		const MarsStakingRewardsKtBQ5Go = await MarsStakingRewards.new(addressTYcfSvg, addressMKF2Pkh, addressBmzldcC, {from: accounts[0]});
		const addressE8buRb = accounts[5]
		const addresscbOSXNv = accounts[4]
		const uint256iC6wcit = await MarsStakingRewardsKtBQ5Go.getRewardForDuration.call({from: accounts[3]});
		const addressFryTdCz = await MarsStakingRewardsKtBQ5Go.transferOwnership.call(addressE8buRb, {from: accounts[1]});
		const addressMlaJhBZ = await MarsStakingRewardsKtBQ5Go.setRewardsDistribution.call(addresscbOSXNv, {from: accounts[1]});

		assert.equal(uint256iC6wcit, BigInt("0"))
		await expect(MarsStakingRewardsKtBQ5Go.transferOwnership.call(addressE8buRb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressh6gCthW = "0x0000000000000000000000000000000000000001"
		const address9DYsf2 = accounts[4]
		const addressXSmVMSE = accounts[5]
		const MarsStakingRewardsKtBQ5Go = await MarsStakingRewards.new(addressh6gCthW, address9DYsf2, addressXSmVMSE, {from: accounts[0]});
		const addresswbXKhH = accounts[6]
		const addressFN1fg4 = accounts[5]
		const addressZVK39vl = accounts[4]
		const uint256ZmHSbmp = await MarsStakingRewardsKtBQ5Go.totalSupply.call({from: accounts[4]});
		const uint256iC6wcit = await MarsStakingRewardsKtBQ5Go.getRewardForDuration.call({from: accounts[3]});
		const boolL6OqHus = await MarsStakingRewardsKtBQ5Go.isOwner.call({from: accounts[2]});
		const addressFryTdCz = await MarsStakingRewardsKtBQ5Go.transferOwnership.call(addresswbXKhH, {from: accounts[1]});
		const addressQw0d8HR = await MarsStakingRewardsKtBQ5Go.transferOwnership.call(addressFN1fg4, {from: accounts[3]});
		const addressMlaJhBZ = await MarsStakingRewardsKtBQ5Go.setRewardsDistribution.call(addressZVK39vl, {from: accounts[1]});

		assert.equal(boolL6OqHus, false)
		assert.equal(uint256ZmHSbmp, BigInt("0"))
		assert.equal(uint256iC6wcit, BigInt("0"))
		await expect(MarsStakingRewardsKtBQ5Go.transferOwnership.call(addresswbXKhH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressNf5OLtC = "0x0000000000000000000000000000000000000001"
		const addressEF5N5ys = accounts[5]
		const addressWslTjrm = accounts[3]
		const MarsStakingRewardsn0i4AvF = await MarsStakingRewards.new(addressNf5OLtC, addressEF5N5ys, addressWslTjrm, {from: accounts[0]});
		const addressNebtE2p = accounts[4]
		const addressRa3DdU3 = accounts[4]
		const uintcInYshW = BigInt("1500")
		const uintNyVrb8E = BigInt("30")
		const uint256FjdZZN1 = await MarsStakingRewardsn0i4AvF.earned.call(addressNebtE2p, {from: accounts[3]});
		const uint256BP6mpw3 = await MarsStakingRewardsn0i4AvF.balanceOf.call(addressRa3DdU3, {from: accounts[0]});
		const uint256QxFstau = await MarsStakingRewardsn0i4AvF.notifyRewardAmount.call(uintNyVrb8E, uintcInYshW, {from: accounts[4]});

		assert.equal(uint256BP6mpw3, BigInt("0"))
		assert.equal(uint256FjdZZN1, BigInt("0"))
		await expect(MarsStakingRewardsn0i4AvF.notifyRewardAmount.call(uintNyVrb8E, uintcInYshW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressdOYwz7 = "0x0000000000000000000000000000000000000001"
		const addressI82zpqP = accounts[4]
		const addressJudFPC8 = accounts[5]
		const MarsStakingRewardsKtBQ5Go = await MarsStakingRewards.new(addressdOYwz7, addressI82zpqP, addressJudFPC8, {from: accounts[0]});
		const addressdZUgnUw = accounts[1]
		const uint256NUaJOVF = await MarsStakingRewardsKtBQ5Go.rewardPerToken.call({from: accounts[3]});
		const addressm2XLzc = await MarsStakingRewardsKtBQ5Go.transferOwnership.call(addressdZUgnUw, {from: accounts[0]});
		const uint256iC6wcit = await MarsStakingRewardsKtBQ5Go.getRewardForDuration.call({from: accounts[3]});

		assert.equal(uint256NUaJOVF, BigInt("0"))
		assert.equal(uint256iC6wcit, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressgYojBRl = "0x0000000000000000000000000000000000000001"
		const addresslHNcWMj = accounts[5]
		const addressY7gDwJk = accounts[3]
		const MarsStakingRewardsn0i4AvF = await MarsStakingRewards.new(addressgYojBRl, addresslHNcWMj, addressY7gDwJk, {from: accounts[0]});
		const uintyGZ9bKs = BigInt("1467")
		const uinteMnis4m = BigInt("0")
		const addressWnCfLSV = await MarsStakingRewardsn0i4AvF.owner.call({from: accounts[3]});
		await MarsStakingRewardsn0i4AvF.onlyOwner.call({from: accounts[0]});
		const uint256QxFstau = await MarsStakingRewardsn0i4AvF.notifyRewardAmount.call(uinteMnis4m, uintyGZ9bKs, {from: accounts[4]});

		assert.equal(addressWnCfLSV, 0xcf8b9f2a33f9A393cAB5338fF61769226Ce67885)
		await expect(MarsStakingRewardsn0i4AvF.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressxYMX14 = "0x0000000000000000000000000000000000000001"
		const addresszMGQGj = accounts[5]
		const addressR256trr = accounts[3]
		const MarsStakingRewardsn0i4AvF = await MarsStakingRewards.new(addressxYMX14, addresszMGQGj, addressR256trr, {from: accounts[0]});
		const addressHCSRa03 = accounts[4]
		const byteoMrtio = "0x0d161b0611091e041a0b0811090d03130414161404070c0d1d130c0c1b020309"
		const byteXNqdqnk = "0x150813170a0c1b050e0c0d161819121b0907060d1a1e0a061716100c1e051310"
		const uintIzKY2KM = BigInt("188")
		const uintjQYvFWh = BigInt("1318")
		const uintUhkEe82 = BigInt("1321")
		const addresscImuQL = accounts[1]
		const addressmplEU0H = accounts[5]
		const uintq0ouhHg = BigInt("1500")
		const uintiRFfbL7 = BigInt("30")
		await MarsStakingRewardsn0i4AvF.exit.call({from: accounts[5]});
		const uint256FjdZZN1 = await MarsStakingRewardsn0i4AvF.earned.call(addressHCSRa03, {from: accounts[3]});
		await MarsStakingRewardsn0i4AvF.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardsn0i4AvF.onlyOwner.call({from: accounts[0]});
		const uint256uMzy6wj = await MarsStakingRewardsn0i4AvF.stakeWithPermit.call(uintUhkEe82, uintjQYvFWh, uintIzKY2KM, byteXNqdqnk, byteoMrtio, {from: accounts[2]});
		const uint256BP6mpw3 = await MarsStakingRewardsn0i4AvF.balanceOf.call(addresscImuQL, {from: accounts[0]});
		const uint256rYc5cE1 = await MarsStakingRewardsn0i4AvF.balanceOf.call(addressmplEU0H, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QxFstau = await MarsStakingRewardsn0i4AvF.notifyRewardAmount.call(uintiRFfbL7, uintq0ouhHg, {from: accounts[4]});
		const uint256aJFVVV7 = await MarsStakingRewardsn0i4AvF.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(MarsStakingRewardsn0i4AvF.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressjKbKJDT = accounts[1]
		const addressdpJYChD = accounts[5]
		const addresstXV5CIs = accounts[1]
		const MarsStakingRewardsB5gJYFp = await MarsStakingRewards.new(addressjKbKJDT, addressdpJYChD, addresstXV5CIs, {from: accounts[2]});
		const uintlg90rZm = BigInt("1684")
		const addressSOpkkxJ = accounts[0]
		const addressUusSm8V = await MarsStakingRewardsB5gJYFp.inCaseTokensGetStuck.call(addressSOpkkxJ, uintlg90rZm, {from: accounts[2]});
		await MarsStakingRewardsB5gJYFp.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256fa1Pn7d = await MarsStakingRewardsB5gJYFp.getRewardForDuration.call({from: accounts[2]});

		await expect(MarsStakingRewardsB5gJYFp.inCaseTokensGetStuck.call(addressSOpkkxJ, uintlg90rZm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const address9us405 = accounts[3]
		const addressJwxP5WO = accounts[4]
		const addressVTlL58 = accounts[2]
		const MarsStakingRewardsjhQkLwP = await MarsStakingRewards.new(address9us405, addressJwxP5WO, addressVTlL58, {from: "0x0000000000000000000000000000000000000001"});
		const addressL4WoIhX = accounts[3]
		const uintSiYu6nl = BigInt("655")
		const addressoHcEPoj = await MarsStakingRewardsjhQkLwP.setRewardsDistribution.call(addressL4WoIhX, {from: accounts[3]});
		const uint256E3N8FUx = await MarsStakingRewardsjhQkLwP.stake.call(uintSiYu6nl, {from: accounts[2]});
		await MarsStakingRewardsjhQkLwP.getReward.call({from: accounts[0]});
		await MarsStakingRewardsjhQkLwP.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MarsStakingRewards', async () => {
		const addressQx3sT3E = accounts[3]
		const addressIlT1M9K = accounts[0]
		const addressChksjgO = accounts[1]
		const MarsStakingRewardsCd9yyj2 = await MarsStakingRewards.new(addressQx3sT3E, addressIlT1M9K, addressChksjgO, {from: accounts[1]});
		const addresso9XPYkp = accounts[3]
		const uint256eI4lr01 = await MarsStakingRewardsCd9yyj2.earned.call(addresso9XPYkp, {from: accounts[3]});
		await MarsStakingRewardsCd9yyj2.renounceOwnership.call({from: accounts[1]});
		const uint256fVZq6J1 = await MarsStakingRewardsCd9yyj2.rewardPerToken.call({from: accounts[3]});
		const uint256pS5Zr6F = await MarsStakingRewardsCd9yyj2.getRewardForDuration.call({from: accounts[0]});

		assert.equal(uint256eI4lr01, BigInt("0"))
		await expect(MarsStakingRewardsCd9yyj2.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressGBqubvY = accounts[1]
		const addresscKjSWiO = accounts[5]
		const addressHOBfKGh = accounts[1]
		const MarsStakingRewardsB5gJYFp = await MarsStakingRewards.new(addressGBqubvY, addresscKjSWiO, addressHOBfKGh, {from: accounts[2]});
		const uintFQdjJjy = BigInt("1684")
		const addressdmtQuxM = accounts[1]
		const byteKx7oK61 = "0x1c06140c1e1805060209051d0d090716090203171100091d140903090c060f17"
		const byteEqJQWA9 = "0x15110b03000907060505150d1b0204111004171a071c191314171c0d16161404"
		const uints9DPtMs = BigInt("96")
		const uinta5nNtDa = BigInt("1035")
		const uintJymsie = BigInt("450")
		const addressUusSm8V = await MarsStakingRewardsB5gJYFp.inCaseTokensGetStuck.call(addressdmtQuxM, uintFQdjJjy, {from: accounts[2]});
		await MarsStakingRewardsB5gJYFp.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256fa1Pn7d = await MarsStakingRewardsB5gJYFp.getRewardForDuration.call({from: accounts[2]});
		const uint256JNXHGeg = await MarsStakingRewardsB5gJYFp.stakeWithPermit.call(uintJymsie, uinta5nNtDa, uints9DPtMs, byteEqJQWA9, byteKx7oK61, {from: accounts[5]});

		await expect(MarsStakingRewardsB5gJYFp.inCaseTokensGetStuck.call(addressdmtQuxM, uintFQdjJjy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressADnCgVo = accounts[3]
		const addressM6e2FfK = accounts[5]
		const addressiT1wobl = accounts[0]
		const MarsStakingRewardsyzd9NW = await MarsStakingRewards.new(addressADnCgVo, addressM6e2FfK, addressiT1wobl, {from: accounts[4]});
		const uintbVCOZG = BigInt("457")
		const uintrvl9nIA = BigInt("661")
		const uint256fxJPMm8 = await MarsStakingRewardsyzd9NW.rewardPerToken.call({from: accounts[1]});
		const uint256NXfTgQF = await MarsStakingRewardsyzd9NW.notifyRewardAmount.call(uintrvl9nIA, uintbVCOZG, {from: accounts[3]});
		const boolv9foMf9 = await MarsStakingRewardsyzd9NW.isOwner.call({from: accounts[2]});

		assert.equal(uint256fxJPMm8, BigInt("0"))
		await expect(MarsStakingRewardsyzd9NW.notifyRewardAmount.call(uintrvl9nIA, uintbVCOZG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressvbLzuBW = "0x0000000000000000000000000000000000000001"
		const addresskPTgL2A = accounts[0]
		const addressj2DTZdi = accounts[5]
		const MarsStakingRewardsa1NU4k = await MarsStakingRewards.new(addressvbLzuBW, addresskPTgL2A, addressj2DTZdi, {from: accounts[1]});
		const addressC7sDGMH = accounts[3]
		const addressOWimra2 = await MarsStakingRewardsa1NU4k.setRewardsDistribution.call(addressC7sDGMH, {from: accounts[1]});
		await MarsStakingRewardsa1NU4k.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256QMmKlY7 = await MarsStakingRewardsa1NU4k.getRewardForDuration.call({from: accounts[1]});

		await expect(MarsStakingRewardsa1NU4k.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})