const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeFBnfqPo = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintEamN70 = BigInt("2034")
		const uintQDehxcV = BigInt("1898")
		const boolcP1diS = await CourtFarming_RoomLPStakeFBnfqPo.stakeIncvRewards.call(uintEamN70, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NmBhtYv = await CourtFarming_RoomLPStakeFBnfqPo.expectedRewardsToday.call(uintQDehxcV, {from: accounts[2]});

		assert.equal(boolcP1diS, false)
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeNpACo2P = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintVb5dC0L = BigInt("1852")
		const addressYYF3VBz = accounts[4]
		const uint256oFFTF4R = await CourtFarming_RoomLPStakeNpACo2P.stake.call(uintVb5dC0L, {from: accounts[1]});
		const uint256GZGFQiw = await CourtFarming_RoomLPStakeNpACo2P.incvRewardClaim.call({from: accounts[4]});
		const uint256G9fZzn = await CourtFarming_RoomLPStakeNpACo2P.totalStaked.call({from: accounts[1]});
		const uint256FTZXQj = await CourtFarming_RoomLPStakeNpACo2P.rewards.call(addressYYF3VBz, {from: accounts[4]});

		await expect(CourtFarming_RoomLPStakeNpACo2P.stake.call(uintVb5dC0L, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakej1uVhPt = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintiii3eAy = BigInt("1899")
		const boolG9g0EiG = true
		const uintX55ywnJ = BigInt("312")
		const addressj3HaAeT = accounts[3]
		const addressecf9Ydy = accounts[1]
		const uint256f4OPxHF = await CourtFarming_RoomLPStakej1uVhPt.expectedRewardsToday.call(uintiii3eAy, {from: accounts[1]});
		const uint256VP4mg7 = await CourtFarming_RoomLPStakej1uVhPt.unstake.call(uintX55ywnJ, boolG9g0EiG, {from: accounts[5]});
		const uint256Rrp3EGK = await CourtFarming_RoomLPStakej1uVhPt.blockNumber.call({from: "0x0000000000000000000000000000000000000001"});
		const addressLw37ylB = await CourtFarming_RoomLPStakej1uVhPt.updateReward.call(addressj3HaAeT, {from: accounts[0]});
		const addressdFBpdib = await CourtFarming_RoomLPStakej1uVhPt.setCourtStake.call(addressecf9Ydy, {from: accounts[5]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakerbRJK8P = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintF8xfRwG = BigInt("713")
		const uintSWCM5dW = BigInt("207")
		const boolQewLWBV = true
		const uintwzXY4cm = BigInt("1111")
		const uint256RWa3ehK = await CourtFarming_RoomLPStakerbRJK8P.expectedRewardsToday.call(uintF8xfRwG, {from: accounts[2]});
		const booljmnAXX7 = await CourtFarming_RoomLPStakerbRJK8P.stakeIncvRewards.call(uintSWCM5dW, {from: accounts[4]});
		const uint256i31OLvn = await CourtFarming_RoomLPStakerbRJK8P.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256GVrzcFj = await CourtFarming_RoomLPStakerbRJK8P.unstake.call(uintwzXY4cm, boolQewLWBV, {from: accounts[5]});

		assert.equal(booljmnAXX7, false)
		assert.equal(uint256i31OLvn, BigInt("0"))
		await expect(CourtFarming_RoomLPStakerbRJK8P.unstake.call(uintwzXY4cm, boolQewLWBV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeNugvMCa = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintlPPYqIk = BigInt("1153")
		const uintMuaXL46 = BigInt("754")
		const address6nsjdX = accounts[2]
		const uint256SQn343p = await CourtFarming_RoomLPStakeNugvMCa.incvRewardInfo.call({from: accounts[1]});
		const uint256GoxqvcJ = await CourtFarming_RoomLPStakeNugvMCa.expectedRewardsToday.call(uintlPPYqIk, {from: accounts[4]});
		const uint256mYTBxVz = await CourtFarming_RoomLPStakeNugvMCa.stake.call(uintMuaXL46, {from: accounts[4]});
		const addressD7Gw0ym = await CourtFarming_RoomLPStakeNugvMCa.updateReward.call(address6nsjdX, {from: accounts[0]});

		await expect(CourtFarming_RoomLPStakeNugvMCa.stake.call(uintMuaXL46, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakecoXh9b5 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uint256mSCg78f = await CourtFarming_RoomLPStakecoXh9b5.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256G0PrtPB = await CourtFarming_RoomLPStakecoXh9b5.totalStaked.call({from: accounts[4]});
		const uint256vSkrgCS = await CourtFarming_RoomLPStakecoXh9b5.incvRewardClaim.call({from: accounts[2]});

		assert.equal(uint256G0PrtPB, BigInt("0"))
		assert.equal(uint256mSCg78f, BigInt("0"))
		assert.equal(uint256vSkrgCS, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeY9ZnyBS = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addresspn9IDE = accounts[5]
		const addresspRlbus = accounts[0]
		const uintbFWkKB9 = BigInt("878")
		const addressxMZu78W = await CourtFarming_RoomLPStakeY9ZnyBS.updateReward.call(addresspn9IDE, {from: accounts[1]});
		const uint256zNACo82 = await CourtFarming_RoomLPStakeY9ZnyBS.lastUpdateBlock.call({from: accounts[1]});
		const uint256fBeBw2 = await CourtFarming_RoomLPStakeY9ZnyBS.rewards.call(addresspRlbus, {from: accounts[2]});
		const uint2566V6Stg = await CourtFarming_RoomLPStakeY9ZnyBS.incvRewardInfo.call({from: accounts[0]});
		const uint256aFMfGBX = await CourtFarming_RoomLPStakeY9ZnyBS.expectedRewardsToday.call(uintbFWkKB9, {from: accounts[3]});

		assert.equal(uint256zNACo82, BigInt("1172"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeFBnfqPo = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressathZE0s = accounts[4]
		const uintImXSoU = BigInt("2064")
		const addressU96g0xA = accounts[5]
		const bool4w9xyi = false
		const uintQFh1Kui = BigInt("2033")
		const uint256HL3008 = await CourtFarming_RoomLPStakeFBnfqPo.balanceOf.call(addressathZE0s, {from: accounts[4]});
		const boolcP1diS = await CourtFarming_RoomLPStakeFBnfqPo.stakeIncvRewards.call(uintImXSoU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256EA09E7H = await CourtFarming_RoomLPStakeFBnfqPo.balanceOf.call(addressU96g0xA, {from: accounts[2]});
		const uint256E5HVFV9 = await CourtFarming_RoomLPStakeFBnfqPo.unstake.call(uintQFh1Kui, bool4w9xyi, {from: accounts[0]});

		assert.equal(boolcP1diS, false)
		assert.equal(uint256EA09E7H, BigInt("0"))
		assert.equal(uint256HL3008, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeFBnfqPo.unstake.call(uintQFh1Kui, bool4w9xyi, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakecoXh9b5 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressOIOHP36 = accounts[0]
		const uint256mSCg78f = await CourtFarming_RoomLPStakecoXh9b5.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const addressq1BXGCn = await CourtFarming_RoomLPStakecoXh9b5.setCourtStake.call(addressOIOHP36, {from: accounts[5]});
		const uint256G0PrtPB = await CourtFarming_RoomLPStakecoXh9b5.totalStaked.call({from: accounts[4]});

		assert.equal(uint256mSCg78f, BigInt("0"))
		await expect(CourtFarming_RoomLPStakecoXh9b5.setCourtStake.call(addressOIOHP36, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeY9ZnyBS = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressvkMcwr3 = accounts[5]
		const uintkYCCLwW = BigInt("1044")
		const uintvRpT7WG = BigInt("612")
		const uintLr8kyYc = BigInt("1330")
		const addressKGQa01S = accounts[1]
		const uint256OiL0T5R = await CourtFarming_RoomLPStakeY9ZnyBS.incvRewardClaim.call({from: accounts[2]});
		const addressxMZu78W = await CourtFarming_RoomLPStakeY9ZnyBS.updateReward.call(addressvkMcwr3, {from: accounts[1]});
		const uint256zNACo82 = await CourtFarming_RoomLPStakeY9ZnyBS.lastUpdateBlock.call({from: accounts[1]});
		await CourtFarming_RoomLPStakeY9ZnyBS.changeStakeParameters.call(uintLr8kyYc, uintvRpT7WG, uintkYCCLwW, {from: accounts[2]});
		const uint256fBeBw2 = await CourtFarming_RoomLPStakeY9ZnyBS.rewards.call(addressKGQa01S, {from: accounts[2]});
		const uint2566V6Stg = await CourtFarming_RoomLPStakeY9ZnyBS.incvRewardInfo.call({from: accounts[0]});

		assert.equal(uint256OiL0T5R, BigInt("0"))
		assert.equal(uint256zNACo82, BigInt("1172"))
		await expect(CourtFarming_RoomLPStakeY9ZnyBS.changeStakeParameters.call(uintLr8kyYc, uintvRpT7WG, uintkYCCLwW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakerbRJK8P = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintBnJFtem = BigInt("713")
		const uintvv2qCg5 = BigInt("207")
		const addresswEWf2j1 = accounts[2]
		const boolQewLWBV = true
		const uintcXyAJLR = BigInt("1111")
		const uint256RWa3ehK = await CourtFarming_RoomLPStakerbRJK8P.expectedRewardsToday.call(uintBnJFtem, {from: accounts[2]});
		const booljmnAXX7 = await CourtFarming_RoomLPStakerbRJK8P.stakeIncvRewards.call(uintvv2qCg5, {from: accounts[4]});
		const addresscbtySWt = await CourtFarming_RoomLPStakerbRJK8P.getBeneficiaryInfo.call(addresswEWf2j1, {from: accounts[5]});
		const uint256i31OLvn = await CourtFarming_RoomLPStakerbRJK8P.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256OGExzxj = await CourtFarming_RoomLPStakerbRJK8P.totalStaked.call({from: accounts[2]});
		const uint256GVrzcFj = await CourtFarming_RoomLPStakerbRJK8P.unstake.call(uintcXyAJLR, boolQewLWBV, {from: accounts[5]});

		assert.equal(booljmnAXX7, false)
		assert.equal(uint256OGExzxj, BigInt("0"))
		assert.equal(uint256i31OLvn, BigInt("0"))
		await expect(CourtFarming_RoomLPStakerbRJK8P.unstake.call(uintcXyAJLR, boolQewLWBV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeoEnzTO2 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addresseh43M73 = accounts[4]
		const bool3TwPnW = true
		const uintmM7ZvVV = BigInt("1269")
		const addresskhA9Nyk = await CourtFarming_RoomLPStakeoEnzTO2.setCourtStake.call(addresseh43M73, {from: accounts[3]});
		const uint256V5s3360 = await CourtFarming_RoomLPStakeoEnzTO2.lastUpdateBlock.call({from: accounts[1]});
		const uint256okQTuRO = await CourtFarming_RoomLPStakeoEnzTO2.unstake.call(uintmM7ZvVV, bool3TwPnW, {from: accounts[3]});

		await expect(CourtFarming_RoomLPStakeoEnzTO2.setCourtStake.call(addresseh43M73, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeuaO8RKt = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintBtRxZMr = BigInt("563")
		const uintO3OOYv = BigInt("399")
		const uintBVkQ4P = BigInt("1138")
		const addressgxoQU6K = accounts[1]
		const addresseFhhyTA = accounts[0]
		await CourtFarming_RoomLPStakeuaO8RKt.changeStakeParameters.call(uintBVkQ4P, uintO3OOYv, uintBtRxZMr, {from: accounts[2]});
		const addresstvOVVFc = await CourtFarming_RoomLPStakeuaO8RKt.setCourtStake.call(addressgxoQU6K, {from: accounts[5]});
		const addressV1a2aCC = await CourtFarming_RoomLPStakeuaO8RKt.setCourtStake.call(addresseFhhyTA, {from: accounts[2]});

		await expect(CourtFarming_RoomLPStakeuaO8RKt.changeStakeParameters.call(uintBVkQ4P, uintO3OOYv, uintBtRxZMr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeY9ZnyBS = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintgO9ckUg = BigInt("0")
		const uintTPLVV2x = BigInt("51")
		const uintAcbf64t = BigInt("1005")
		const uintLVgwD1 = BigInt("1053")
		const uintNrgRCOL = BigInt("21")
		const addressswJVOze = accounts[1]
		const boolnHVmrr = await CourtFarming_RoomLPStakeY9ZnyBS.stakeIncvRewards.call(uintgO9ckUg, {from: accounts[4]});
		const uint256kLOvR9 = await CourtFarming_RoomLPStakeY9ZnyBS.totalStaked.call({from: accounts[3]});
		const boolIo3MVr9 = await CourtFarming_RoomLPStakeY9ZnyBS.stakeIncvRewards.call(uintTPLVV2x, {from: "0x0000000000000000000000000000000000000001"});
		await CourtFarming_RoomLPStakeY9ZnyBS.changeStakeParameters.call(uintNrgRCOL, uintLVgwD1, uintAcbf64t, {from: accounts[4]});
		const uint256fBeBw2 = await CourtFarming_RoomLPStakeY9ZnyBS.rewards.call(addressswJVOze, {from: accounts[2]});
		const uint256RWyY2G1 = await CourtFarming_RoomLPStakeY9ZnyBS.getCurrentTime.call({from: accounts[4]});

		assert.equal(boolIo3MVr9, false)
		assert.equal(boolnHVmrr, false)
		assert.equal(uint256kLOvR9, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeY9ZnyBS.changeStakeParameters.call(uintNrgRCOL, uintLVgwD1, uintAcbf64t, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeFBnfqPo = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintLgppZs = BigInt("811")
		const booliMC7sHA = false
		const uintGL3VT9 = BigInt("0")
		const uint256sEi5o1P = await CourtFarming_RoomLPStakeFBnfqPo.lastUpdateBlock.call({from: accounts[1]});
		const uint256E1vQGMR = await CourtFarming_RoomLPStakeFBnfqPo.incvRewardInfo.call({from: accounts[0]});
		const boolM7Ym2NG = await CourtFarming_RoomLPStakeFBnfqPo.stakeIncvRewards.call(uintLgppZs, {from: accounts[0]});
		const uint256TTzRBhs = await CourtFarming_RoomLPStakeFBnfqPo.unstake.call(uintGL3VT9, booliMC7sHA, {from: accounts[3]});

		assert.equal(boolM7Ym2NG, false)
		assert.equal(uint256sEi5o1P, BigInt("1172"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeY9ZnyBS = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintxZSQpWT = BigInt("0")
		const uint256RCNDu9A = await CourtFarming_RoomLPStakeY9ZnyBS.stake.call(uintxZSQpWT, {from: accounts[1]});
	});
})