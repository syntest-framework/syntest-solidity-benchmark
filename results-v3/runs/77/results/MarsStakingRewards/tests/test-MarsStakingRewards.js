const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressD9p1l2 = accounts[5]
		const addressAtqbhPT = accounts[5]
		const addressTHjYkVH = accounts[5]
		const MarsStakingRewardsyORN4N = await MarsStakingRewards.new(addressD9p1l2, addressAtqbhPT, addressTHjYkVH, {from: "0x0000000000000000000000000000000000000001"});
		const addressmSkJYcr = "0x0000000000000000000000000000000000000001"
		const uintiPOmb5E = BigInt("1846")
		const uinto54qnDa = BigInt("1634")
		const uintCDB48LT = BigInt("318")
		const uintfwxpcof = BigInt("705")
		const addressogkdbR = await MarsStakingRewardsyORN4N.updateReward.call(addressmSkJYcr, {from: accounts[2]});
		const uint256W4bearz = await MarsStakingRewardsyORN4N.withdraw.call(uintiPOmb5E, {from: accounts[2]});
		const addresshgimvYi = await MarsStakingRewardsyORN4N.owner.call({from: accounts[5]});
		await MarsStakingRewardsyORN4N.renounceOwnership.call({from: accounts[2]});
		const uint256VKnxPA = await MarsStakingRewardsyORN4N.notifyRewardAmount.call(uintCDB48LT, uinto54qnDa, {from: accounts[3]});
		const uint256ZJ1bcV3 = await MarsStakingRewardsyORN4N.withdraw.call(uintfwxpcof, {from: accounts[1]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressyiU1iYW = accounts[2]
		const addressg6mjNU8 = accounts[5]
		const addressejrx5E3 = accounts[4]
		const MarsStakingRewardsApCPLaY = await MarsStakingRewards.new(addressyiU1iYW, addressg6mjNU8, addressejrx5E3, {from: accounts[1]});
		const bytedft15OH = "0x101305030c1115050a1d080a1018191e0e1e081210060f120114050f031e1b19"
		const byteBqJsNzt = "0x1a1c1412101b1d11171d1406080c1f1013050a081a0e150e001e0e101f061c00"
		const uintJ98LrFB = BigInt("188")
		const uintWme3Poe = BigInt("1555")
		const uintKiURbf = BigInt("1509")
		const uintQZ4g2Q9 = BigInt("1114")
		const addressFTtjfQ7 = accounts[2]
		const uint256rBKjLLN = await MarsStakingRewardsApCPLaY.stakeWithPermit.call(uintKiURbf, uintWme3Poe, uintJ98LrFB, byteBqJsNzt, bytedft15OH, {from: "0x0000000000000000000000000000000000000001"});
		const addressMKi39oi = await MarsStakingRewardsApCPLaY.inCaseTokensGetStuck.call(addressFTtjfQ7, uintQZ4g2Q9, {from: accounts[4]});

		await expect(MarsStakingRewardsApCPLaY.stakeWithPermit.call(uintKiURbf, uintWme3Poe, uintJ98LrFB, byteBqJsNzt, bytedft15OH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressjFangol = accounts[4]
		const addressloqbpJB = accounts[0]
		const addresswmerMB = accounts[0]
		const MarsStakingRewardst0bAQ8 = await MarsStakingRewards.new(addressjFangol, addressloqbpJB, addresswmerMB, {from: accounts[1]});
		const addressfcfwLBG = accounts[5]
		const addresspwujar0 = accounts[4]
		const boolGSgcNL7 = await MarsStakingRewardst0bAQ8.isOwner.call({from: accounts[5]});
		const addressRtfWVYw = await MarsStakingRewardst0bAQ8.setRewardsDistribution.call(addressfcfwLBG, {from: accounts[4]});
		const addressN3Xrua3 = await MarsStakingRewardst0bAQ8.setRewardsDistribution.call(addresspwujar0, {from: accounts[1]});
		const uint256xWNvzfR = await MarsStakingRewardst0bAQ8.rewardPerToken.call({from: accounts[3]});

		assert.equal(boolGSgcNL7, false)
		await expect(MarsStakingRewardst0bAQ8.setRewardsDistribution.call(addressfcfwLBG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresswEQvn6a = accounts[4]
		const addressZSSNabL = accounts[1]
		const addresslpzA8ZA = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsGVI2r0k = await MarsStakingRewards.new(addresswEQvn6a, addressZSSNabL, addresslpzA8ZA, {from: accounts[1]});
		const bytebOTvi5 = "0x1d1e011a0b0f060413171e1b18040e180917121e0c080c1803171c1b04071015"
		const bytegS9vWPA = "0x01160919060c1511190b020603050a0c0c15081d101d111c0d18011f0f071d1e"
		const uintypDEyQp = BigInt("77")
		const uintwpzhIMW = BigInt("1749")
		const uintuDd5QsZ = BigInt("1361")
		const uint256aTOq87B = await MarsStakingRewardsGVI2r0k.getRewardForDuration.call({from: accounts[0]});
		const uint256uB3xsRG = await MarsStakingRewardsGVI2r0k.stakeWithPermit.call(uintuDd5QsZ, uintwpzhIMW, uintypDEyQp, bytegS9vWPA, bytebOTvi5, {from: accounts[1]});
		const uint256uZhfpsT = await MarsStakingRewardsGVI2r0k.getRewardForDuration.call({from: accounts[2]});
		const uint256GnhLjf9 = await MarsStakingRewardsGVI2r0k.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256osVYR8T = await MarsStakingRewardsGVI2r0k.totalSupply.call({from: accounts[3]});

		assert.equal(uint256aTOq87B, BigInt("0"))
		await expect(MarsStakingRewardsGVI2r0k.stakeWithPermit.call(uintuDd5QsZ, uintwpzhIMW, uintypDEyQp, bytegS9vWPA, bytebOTvi5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressmSeH0Sb = accounts[4]
		const addressdTr8h5 = accounts[3]
		const addressIM4uzE8 = accounts[1]
		const MarsStakingRewardsztuG6OU = await MarsStakingRewards.new(addressmSeH0Sb, addressdTr8h5, addressIM4uzE8, {from: accounts[4]});
		const addresskyszkW2 = "0x0000000000000000000000000000000000000001"
		const uint256OVxKI1L = await MarsStakingRewardsztuG6OU.totalSupply.call({from: accounts[4]});
		await MarsStakingRewardsztuG6OU.getReward.call({from: accounts[3]});
		const address6gkzzi = await MarsStakingRewardsztuG6OU.updateReward.call(addresskyszkW2, {from: accounts[3]});
		const uint256jG3E1E = await MarsStakingRewardsztuG6OU.lastTimeRewardApplicable.call({from: accounts[0]});
		const boolYrSfvYa = await MarsStakingRewardsztuG6OU.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256OVxKI1L, BigInt("0"))
		await expect(MarsStakingRewardsztuG6OU.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressgfS2Dhu = accounts[4]
		const addressMCZTdDO = accounts[1]
		const addressszcMbU = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsGVI2r0k = await MarsStakingRewards.new(addressgfS2Dhu, addressMCZTdDO, addressszcMbU, {from: accounts[1]});
		const byteo9hGFo = "0x06070719051b0e01041d180a121d1a151220201b09020917021315161e061809"
		const byteYmi0MgU = "0x0c0b091f18030a0411040e17131c1c06051508061b1306031c170c071d04071e"
		const uintF2w0UCI = BigInt("47")
		const uintrrTNsnG = BigInt("1276")
		const uintqMWaSkz = BigInt("1127")
		const uintrxMAHPh = BigInt("1271")
		const byteTfmAOpf = "0x1d1e011a0b0f060413171e1b18040e180917121e0c080c1803171c1b04071015"
		const byteJ6IyA0o = "0x01160919060c1511190b020603050a0c0c15081d101d111c0d18011f0f071d1e"
		const uintLRCuec5 = BigInt("77")
		const uintt9PLJn5 = BigInt("1749")
		const uintAjxCK0Q = BigInt("1361")
		const uint256aTOq87B = await MarsStakingRewardsGVI2r0k.getRewardForDuration.call({from: accounts[0]});
		const uint2564lrMP4 = await MarsStakingRewardsGVI2r0k.rewardPerToken.call({from: accounts[2]});
		const uint256kwJEuOX = await MarsStakingRewardsGVI2r0k.stakeWithPermit.call(uintqMWaSkz, uintrrTNsnG, uintF2w0UCI, byteYmi0MgU, byteo9hGFo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256V8j8jKW = await MarsStakingRewardsGVI2r0k.stake.call(uintrxMAHPh, {from: accounts[1]});
		const uint256uB3xsRG = await MarsStakingRewardsGVI2r0k.stakeWithPermit.call(uintAjxCK0Q, uintt9PLJn5, uintLRCuec5, byteJ6IyA0o, byteTfmAOpf, {from: accounts[1]});
		const uint256uZhfpsT = await MarsStakingRewardsGVI2r0k.getRewardForDuration.call({from: accounts[2]});
		const uint256pS4zgM2 = await MarsStakingRewardsGVI2r0k.rewardPerToken.call({from: accounts[5]});
		const uint256GnhLjf9 = await MarsStakingRewardsGVI2r0k.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256osVYR8T = await MarsStakingRewardsGVI2r0k.totalSupply.call({from: accounts[3]});

		assert.equal(uint2564lrMP4, BigInt("0"))
		assert.equal(uint256aTOq87B, BigInt("0"))
		await expect(MarsStakingRewardsGVI2r0k.stakeWithPermit.call(uintqMWaSkz, uintrrTNsnG, uintF2w0UCI, byteYmi0MgU, byteo9hGFo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresskDGzi4m = accounts[3]
		const addressHqhDkK = accounts[5]
		const addressyFk3n2d = accounts[2]
		const MarsStakingRewardsSa37umW = await MarsStakingRewards.new(addresskDGzi4m, addressHqhDkK, addressyFk3n2d, {from: accounts[3]});
		const addresscuOWuh = accounts[2]
		await MarsStakingRewardsSa37umW.nonReentrant.call({from: accounts[2]});
		const uint256wjk6qiT = await MarsStakingRewardsSa37umW.earned.call(addresscuOWuh, {from: accounts[3]});
		await MarsStakingRewardsSa37umW.renounceOwnership.call({from: accounts[3]});
		await MarsStakingRewardsSa37umW.renounceOwnership.call({from: accounts[2]});

		await expect(MarsStakingRewardsSa37umW.nonReentrant.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressvKD6HQg = accounts[2]
		const addresslP9xBXe = accounts[1]
		const addressFrXE6QI = accounts[5]
		const MarsStakingRewards5iuokL = await MarsStakingRewards.new(addressvKD6HQg, addresslP9xBXe, addressFrXE6QI, {from: accounts[0]});
		const uintoO1FZxi = BigInt("1575")
		const uintAdQsUal = BigInt("1979")
		const addresszMmdTLL = accounts[2]
		const uint256yoh76dN = await MarsStakingRewards5iuokL.notifyRewardAmount.call(uintAdQsUal, uintoO1FZxi, {from: accounts[0]});
		const uint256cRu7vX9 = await MarsStakingRewards5iuokL.lastTimeRewardApplicable.call({from: accounts[2]});
		const addressb3L2tZr = await MarsStakingRewards5iuokL.transferOwnership.call(addresszMmdTLL, {from: accounts[1]});
		const uint256hKb2AYO = await MarsStakingRewards5iuokL.rewardPerToken.call({from: accounts[1]});

		await expect(MarsStakingRewards5iuokL.notifyRewardAmount.call(uintAdQsUal, uintoO1FZxi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressDSOgnN = accounts[4]
		const addresshhwbcsQ = accounts[1]
		const addressv6WM963 = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsGVI2r0k = await MarsStakingRewards.new(addressDSOgnN, addresshhwbcsQ, addressv6WM963, {from: accounts[1]});
		const uint256aTOq87B = await MarsStakingRewardsGVI2r0k.getRewardForDuration.call({from: accounts[0]});
		const uint256GnhLjf9 = await MarsStakingRewardsGVI2r0k.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256osVYR8T = await MarsStakingRewardsGVI2r0k.totalSupply.call({from: accounts[3]});

		assert.equal(uint256GnhLjf9, BigInt("0"))
		assert.equal(uint256aTOq87B, BigInt("0"))
		assert.equal(uint256osVYR8T, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressvOX3GTw = accounts[0]
		const addressPnQNgc = accounts[1]
		const addressSNeZzFV = accounts[4]
		const MarsStakingRewardsQjpb2kL = await MarsStakingRewards.new(addressvOX3GTw, addressPnQNgc, addressSNeZzFV, {from: accounts[5]});
		const addressi053yC5 = accounts[0]
		const uint256zbRRjqe = await MarsStakingRewardsQjpb2kL.balanceOf.call(addressi053yC5, {from: accounts[5]});
		await MarsStakingRewardsQjpb2kL.exit.call({from: accounts[5]});
		const boolkCCFwLW = await MarsStakingRewardsQjpb2kL.isOwner.call({from: accounts[0]});
		const uint256Hh0KxfS = await MarsStakingRewardsQjpb2kL.rewardPerToken.call({from: accounts[1]});

		assert.equal(uint256zbRRjqe, BigInt("0"))
		await expect(MarsStakingRewardsQjpb2kL.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressJ5qkzRb = accounts[4]
		const addressacIiXGb = accounts[1]
		const addressz9sxwWb = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsGVI2r0k = await MarsStakingRewards.new(addressJ5qkzRb, addressacIiXGb, addressz9sxwWb, {from: accounts[1]});
		const addressX9hz7D = accounts[2]
		const byteZTjWp7B = "0x06070719051b0e01041d180a121d1a151220201b09020917021315161e061809"
		const byteRbT9G2a = "0x0c0b091f18030a0411040e17131c1c06051508061b1306031c170c071d04071e"
		const uintc3EOlEc = BigInt("47")
		const uintFBMHbT6 = BigInt("1276")
		const uintCAdmFEs = BigInt("1127")
		const bytesr9srB2 = "0x1d1e011a0b0f060413171e1b18040e180917121e0c080c1803171c1b04071015"
		const byteZOL92g = "0x01160919060c1511190b020603050a0c0c15081d101d111c0d18011f0f071d1e"
		const uintfMtuC3p = BigInt("73")
		const uinttaOKhU2 = BigInt("1749")
		const uintnJGI7e7 = BigInt("1361")
		const addressaT56hR = accounts[1]
		const uint256aTOq87B = await MarsStakingRewardsGVI2r0k.getRewardForDuration.call({from: accounts[0]});
		const uint256QI16PF8 = await MarsStakingRewardsGVI2r0k.earned.call(addressX9hz7D, {from: accounts[1]});
		const uint2564lrMP4 = await MarsStakingRewardsGVI2r0k.rewardPerToken.call({from: accounts[2]});
		const uint256kwJEuOX = await MarsStakingRewardsGVI2r0k.stakeWithPermit.call(uintCAdmFEs, uintFBMHbT6, uintc3EOlEc, byteRbT9G2a, byteZTjWp7B, {from: "0x0000000000000000000000000000000000000001"});
		const uint256uB3xsRG = await MarsStakingRewardsGVI2r0k.stakeWithPermit.call(uintnJGI7e7, uinttaOKhU2, uintfMtuC3p, byteZOL92g, bytesr9srB2, {from: accounts[1]});
		const uint256uZhfpsT = await MarsStakingRewardsGVI2r0k.getRewardForDuration.call({from: accounts[2]});
		const uint256pS4zgM2 = await MarsStakingRewardsGVI2r0k.rewardPerToken.call({from: accounts[5]});
		const uint256JYThsHM = await MarsStakingRewardsGVI2r0k.earned.call(addressaT56hR, {from: accounts[4]});
		const uint256osVYR8T = await MarsStakingRewardsGVI2r0k.totalSupply.call({from: accounts[3]});

		assert.equal(uint2564lrMP4, BigInt("0"))
		assert.equal(uint256QI16PF8, BigInt("0"))
		assert.equal(uint256aTOq87B, BigInt("0"))
		await expect(MarsStakingRewardsGVI2r0k.stakeWithPermit.call(uintCAdmFEs, uintFBMHbT6, uintc3EOlEc, byteRbT9G2a, byteZTjWp7B, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const address4jHKMj = accounts[2]
		const addressv6BZ25 = accounts[5]
		const addressJWBYjT = accounts[4]
		const MarsStakingRewardsApCPLaY = await MarsStakingRewards.new(address4jHKMj, addressv6BZ25, addressJWBYjT, {from: accounts[1]});
		const addressO7lfAf5 = accounts[3]
		const addressNLK8WbF = accounts[1]
		const uintgYozAbk = BigInt("1789")
		const addressI01bSyn = accounts[5]
		const uint256FPXiNxI = await MarsStakingRewardsApCPLaY.earned.call(addressO7lfAf5, {from: accounts[1]});
		const addressfLTIvAr = await MarsStakingRewardsApCPLaY.transferOwnership.call(addressNLK8WbF, {from: accounts[1]});
		const uint256JJ5wk8e = await MarsStakingRewardsApCPLaY.withdraw.call(uintgYozAbk, {from: accounts[5]});
		const addressIA64CqK = await MarsStakingRewardsApCPLaY.updateReward.call(addressI01bSyn, {from: accounts[3]});

		assert.equal(uint256FPXiNxI, BigInt("0"))
		await expect(MarsStakingRewardsApCPLaY.withdraw.call(uintgYozAbk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressUUeYVel = accounts[2]
		const addressIKPDs2n = accounts[5]
		const addressx6YTQjm = accounts[4]
		const MarsStakingRewardsApCPLaY = await MarsStakingRewards.new(addressUUeYVel, addressIKPDs2n, addressx6YTQjm, {from: accounts[1]});
		const addresshxpKpdb = accounts[6]
		const addressw3RzABj = accounts[5]
		const addressHwRbMyK = "0x0000000000000000000000000000000000000001"
		const uint256FPXiNxI = await MarsStakingRewardsApCPLaY.earned.call(addresshxpKpdb, {from: accounts[1]});
		const addressWHUEWr = await MarsStakingRewardsApCPLaY.setRewardsDistribution.call(addressw3RzABj, {from: accounts[1]});
		const addresstNEI2p = await MarsStakingRewardsApCPLaY.transferOwnership.call(addressHwRbMyK, {from: accounts[2]});

		assert.equal(uint256FPXiNxI, BigInt("0"))
		await expect(MarsStakingRewardsApCPLaY.transferOwnership.call(addressHwRbMyK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressWmk5Csz = accounts[4]
		const addressFttjEiJ = accounts[1]
		const addresshJsGtD = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsGVI2r0k = await MarsStakingRewards.new(addressWmk5Csz, addressFttjEiJ, addresshJsGtD, {from: accounts[1]});
		const uint256aTOq87B = await MarsStakingRewardsGVI2r0k.getRewardForDuration.call({from: accounts[0]});
		const addressUOvu10w = await MarsStakingRewardsGVI2r0k.owner.call({from: accounts[2]});

		assert.equal(addressUOvu10w, 0x0108255BAAA22dfbaBAf04844b121C3CeD3902D3)
		assert.equal(uint256aTOq87B, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressoiVx6xq = accounts[2]
		const addressOLGaCFV = accounts[5]
		const addresspsfXcy4 = accounts[4]
		const MarsStakingRewardsApCPLaY = await MarsStakingRewards.new(addressoiVx6xq, addressOLGaCFV, addresspsfXcy4, {from: accounts[1]});
		const uintEd0j1tc = BigInt("890")
		const addressCHGE6QH = accounts[4]
		const addressNH7wpC = accounts[4]
		const addresshUYauw9 = await MarsStakingRewardsApCPLaY.inCaseTokensGetStuck.call(addressCHGE6QH, uintEd0j1tc, {from: accounts[1]});
		const uint256FPXiNxI = await MarsStakingRewardsApCPLaY.earned.call(addressNH7wpC, {from: accounts[1]});

		await expect(MarsStakingRewardsApCPLaY.inCaseTokensGetStuck.call(addressCHGE6QH, uintEd0j1tc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressplCFNTh = accounts[2]
		const addressoZXKCSP = accounts[5]
		const addressBDnoojG = accounts[4]
		const MarsStakingRewardsApCPLaY = await MarsStakingRewards.new(addressplCFNTh, addressoZXKCSP, addressBDnoojG, {from: accounts[1]});
		const addresswSHbmwL = accounts[2]
		const uintSLtjqJn = BigInt("1881")
		const uintK6THZx3 = BigInt("671")
		const addressDpR61eE = accounts[0]
		const uint256FPXiNxI = await MarsStakingRewardsApCPLaY.earned.call(addresswSHbmwL, {from: accounts[1]});
		const uint256ymNzlrZ = await MarsStakingRewardsApCPLaY.notifyRewardAmount.call(uintK6THZx3, uintSLtjqJn, {from: accounts[2]});
		await MarsStakingRewardsApCPLaY.onlyOwner.call({from: accounts[4]});
		const addressRFFUHUw = await MarsStakingRewardsApCPLaY.setRewardsDistribution.call(addressDpR61eE, {from: accounts[2]});

		assert.equal(uint256FPXiNxI, BigInt("0"))
		await expect(MarsStakingRewardsApCPLaY.notifyRewardAmount.call(uintK6THZx3, uintSLtjqJn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressX6yNVpY = accounts[2]
		const addressbgPYBne = accounts[5]
		const addressSxijSol = accounts[4]
		const MarsStakingRewardsApCPLaY = await MarsStakingRewards.new(addressX6yNVpY, addressbgPYBne, addressSxijSol, {from: accounts[1]});
		const bytefLuhTb = "0x1d15041a191b04010417121600060f080d15030d120a160e0914070c1502070a"
		const byte4jhjTS = "0x0c0b15071a0b0507072009181b1b0c0a1b1e0c061e090c0f141e051a01121115"
		const uintSsQpXdX = BigInt("163")
		const uintzMO6bdB = BigInt("399")
		const uintp8nYjRL = BigInt("444")
		const uintIGxCI8Q = BigInt("1098")
		const addressXKnXI6o = accounts[5]
		const boolAoVfMsJ = await MarsStakingRewardsApCPLaY.isOwner.call({from: accounts[2]});
		await MarsStakingRewardsApCPLaY.renounceOwnership.call({from: accounts[1]});
		const uint256AIqkaLd = await MarsStakingRewardsApCPLaY.stakeWithPermit.call(uintp8nYjRL, uintzMO6bdB, uintSsQpXdX, byte4jhjTS, bytefLuhTb, {from: accounts[0]});
		const addressMKi39oi = await MarsStakingRewardsApCPLaY.inCaseTokensGetStuck.call(addressXKnXI6o, uintIGxCI8Q, {from: accounts[4]});

		assert.equal(boolAoVfMsJ, false)
		await expect(MarsStakingRewardsApCPLaY.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressmpO2Fpl = accounts[4]
		const addresstDUxtXu = accounts[1]
		const addresskEOBpU8 = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsGVI2r0k = await MarsStakingRewards.new(addressmpO2Fpl, addresstDUxtXu, addresskEOBpU8, {from: accounts[1]});
		const uintwyFzyOX = BigInt("205")
		const addressbcRnEQH = accounts[5]
		const addressr9ezuX7 = await MarsStakingRewardsGVI2r0k.inCaseTokensGetStuck.call(addressbcRnEQH, uintwyFzyOX, {from: accounts[1]});
		const uint256aTOq87B = await MarsStakingRewardsGVI2r0k.getRewardForDuration.call({from: accounts[0]});

		await expect(MarsStakingRewardsGVI2r0k.inCaseTokensGetStuck.call(addressbcRnEQH, uintwyFzyOX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})