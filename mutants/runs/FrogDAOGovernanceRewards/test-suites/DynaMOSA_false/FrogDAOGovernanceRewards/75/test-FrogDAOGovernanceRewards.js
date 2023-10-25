const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressu2MoWOk = accounts[4]
		const FrogDAOGovernanceRewardsDKcPWZn = await FrogDAOGovernanceRewards.new(addressu2MoWOk, {from: accounts[5]});
		await FrogDAOGovernanceRewardsDKcPWZn.checkhalve.call({from: accounts[0]});
		await FrogDAOGovernanceRewardsDKcPWZn.checkStart.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsDKcPWZn.checkhalve.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressubMOABn = accounts[1]
		const FrogDAOGovernanceRewardsxumuhQ5 = await FrogDAOGovernanceRewards.new(addressubMOABn, {from: accounts[1]});
		const uint256MzQ1Hzs = await FrogDAOGovernanceRewardsxumuhQ5.rewardPerToken.call({from: accounts[1]});
		const uint256pmneytI = await FrogDAOGovernanceRewardsxumuhQ5.rewardPerToken.call({from: accounts[1]});
		await FrogDAOGovernanceRewardsxumuhQ5.checkhalve.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256MzQ1Hzs, BigInt("0"))
		assert.equal(uint256pmneytI, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsxumuhQ5.checkhalve.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressiAB3XDZ = accounts[2]
		const FrogDAOGovernanceRewardsKhsL3Jq = await FrogDAOGovernanceRewards.new(addressiAB3XDZ, {from: accounts[3]});
		const uintRasjm80 = BigInt("66")
		const uintu0ij4Vr = BigInt("1910")
		const uinthWcvZH9 = BigInt("310")
		await FrogDAOGovernanceRewardsKhsL3Jq.renounceDevAddr.call({from: accounts[3]});
		const uint256CaAvAEw = await FrogDAOGovernanceRewardsKhsL3Jq.notifyRewardAmount.call(uintRasjm80, {from: accounts[2]});
		const uint256rst4b0Q = await FrogDAOGovernanceRewardsKhsL3Jq.notifyRewardAmount.call(uintu0ij4Vr, {from: accounts[0]});
		const uint256dck3L4r = await FrogDAOGovernanceRewardsKhsL3Jq.withdraw.call(uinthWcvZH9, {from: accounts[4]});
		const uint256FZYSW7M = await FrogDAOGovernanceRewardsKhsL3Jq.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsKhsL3Jq.renounceDevAddr.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresssUhz5t6 = accounts[0]
		const FrogDAOGovernanceRewardsWsTDP7 = await FrogDAOGovernanceRewards.new(addresssUhz5t6, {from: accounts[4]});
		const uintiQa3p1i = BigInt("452")
		const uint256XKxzLfN = await FrogDAOGovernanceRewardsWsTDP7.stake.call(uintiQa3p1i, {from: accounts[2]});
		await FrogDAOGovernanceRewardsWsTDP7.renounceDevAddr.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsWsTDP7.checkhalve.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsWsTDP7.renounceDevAddr.call({from: accounts[4]});
		const uint256eCScOzJ = await FrogDAOGovernanceRewardsWsTDP7.devFundAvailable.call({from: accounts[5]});

		await expect(FrogDAOGovernanceRewardsWsTDP7.stake.call(uintiQa3p1i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressSTVrmUM = accounts[2]
		const FrogDAOGovernanceRewardsWrWgJMd = await FrogDAOGovernanceRewards.new(addressSTVrmUM, {from: accounts[0]});
		const uintOlBmGSY = BigInt("1025")
		const addresse5JTEX2 = accounts[4]
		const addressffq2dLn = accounts[3]
		const uint256PLWTzDF = await FrogDAOGovernanceRewardsWrWgJMd.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256hSWGfnX = await FrogDAOGovernanceRewardsWrWgJMd.withdraw.call(uintOlBmGSY, {from: accounts[4]});
		const uint256pjG5le = await FrogDAOGovernanceRewardsWrWgJMd.earned.call(addresse5JTEX2, {from: accounts[4]});
		const addressJtss7cH = await FrogDAOGovernanceRewardsWrWgJMd.updateReward.call(addressffq2dLn, {from: accounts[2]});

		assert.equal(uint256PLWTzDF, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsWrWgJMd.withdraw.call(uintOlBmGSY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressmJxDjSl = accounts[1]
		const FrogDAOGovernanceRewardsPwJRBsp = await FrogDAOGovernanceRewards.new(addressmJxDjSl, {from: "0x0000000000000000000000000000000000000001"});
		const addressky4YyFR = accounts[1]
		await FrogDAOGovernanceRewardsPwJRBsp.renounceDevAddr.call({from: accounts[3]});
		const addressFH6AbEU = await FrogDAOGovernanceRewardsPwJRBsp.updateReward.call(addressky4YyFR, {from: accounts[0]});
		await FrogDAOGovernanceRewardsPwJRBsp.checkStart.call({from: accounts[2]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressigsD1DJ = accounts[2]
		const FrogDAOGovernanceRewardsh9lcuq0 = await FrogDAOGovernanceRewards.new(addressigsD1DJ, {from: accounts[5]});
		await FrogDAOGovernanceRewardsh9lcuq0.exit.call({from: accounts[1]});
		await FrogDAOGovernanceRewardsh9lcuq0.renounceDevAddr.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsh9lcuq0.renounceDevAddr.call({from: accounts[1]});
		await FrogDAOGovernanceRewardsh9lcuq0.checkhalve.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsh9lcuq0.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressv5gG1Qw = accounts[1]
		const FrogDAOGovernanceRewardsjKrYedr = await FrogDAOGovernanceRewards.new(addressv5gG1Qw, {from: accounts[2]});
		const uintTHf08P7 = BigInt("1593")
		const addressTeBaDwb = accounts[0]
		const uinttJTLLwF = BigInt("1588")
		const uint256RsVKJK9 = await FrogDAOGovernanceRewardsjKrYedr.notifyRewardAmount.call(uintTHf08P7, {from: accounts[2]});
		await FrogDAOGovernanceRewardsjKrYedr.getReward.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsjKrYedr.getReward.call({from: accounts[5]});
		const uint256A1RpF5 = await FrogDAOGovernanceRewardsjKrYedr.earned.call(addressTeBaDwb, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UtpfAbB = await FrogDAOGovernanceRewardsjKrYedr.stake.call(uinttJTLLwF, {from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsjKrYedr.notifyRewardAmount.call(uintTHf08P7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressbnvnshR = accounts[4]
		const FrogDAOGovernanceRewardsDKcPWZn = await FrogDAOGovernanceRewards.new(addressbnvnshR, {from: accounts[5]});
		const uintkIx4J8b = BigInt("68")
		const uint2568RlkFO = await FrogDAOGovernanceRewardsDKcPWZn.notifyRewardAmount.call(uintkIx4J8b, {from: accounts[3]});
		await FrogDAOGovernanceRewardsDKcPWZn.checkhalve.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsDKcPWZn.notifyRewardAmount.call(uintkIx4J8b, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressNQQ0rXl = accounts[2]
		const FrogDAOGovernanceRewardsWrWgJMd = await FrogDAOGovernanceRewards.new(addressNQQ0rXl, {from: accounts[0]});
		const addressny32cqq = accounts[3]
		const uintbEsaylX = BigInt("1025")
		const addresshXCvH5A = accounts[5]
		const addressiuzW0k = accounts[3]
		const addressNhJiphb = await FrogDAOGovernanceRewardsWrWgJMd.transferDevAddr.call(addressny32cqq, {from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardsWrWgJMd.renounceDevAddr.call({from: accounts[3]});
		const uint256PLWTzDF = await FrogDAOGovernanceRewardsWrWgJMd.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256hSWGfnX = await FrogDAOGovernanceRewardsWrWgJMd.withdraw.call(uintbEsaylX, {from: accounts[4]});
		await FrogDAOGovernanceRewardsWrWgJMd.renounceDevAddr.call({from: accounts[4]});
		const uint256pjG5le = await FrogDAOGovernanceRewardsWrWgJMd.earned.call(addresshXCvH5A, {from: accounts[4]});
		const addressJtss7cH = await FrogDAOGovernanceRewardsWrWgJMd.updateReward.call(addressiuzW0k, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsWrWgJMd.transferDevAddr.call(addressny32cqq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresswpWyV2g = accounts[3]
		const FrogDAOGovernanceRewardseDoBxUs = await FrogDAOGovernanceRewards.new(addresswpWyV2g, {from: accounts[1]});
		const addressuKadNL = accounts[1]
		const addressf5mVEy1 = await FrogDAOGovernanceRewardseDoBxUs.transferDevAddr.call(addressuKadNL, {from: accounts[3]});
		const uint256hc1qQiN = await FrogDAOGovernanceRewardseDoBxUs.devFundAvailable.call({from: accounts[4]});
		await FrogDAOGovernanceRewardseDoBxUs.exit.call({from: accounts[0]});

		assert.equal(uint256hc1qQiN, BigInt("0"))
		await expect(FrogDAOGovernanceRewardseDoBxUs.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressCcqKluC = accounts[2]
		const FrogDAOGovernanceRewardsWrWgJMd = await FrogDAOGovernanceRewards.new(addressCcqKluC, {from: accounts[0]});
		const uintsoIVuU2 = BigInt("697")
		const addressuSWjDqR = accounts[4]
		const addressP8OA81X = accounts[3]
		const uint256PLWTzDF = await FrogDAOGovernanceRewardsWrWgJMd.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256vLizBfj = await FrogDAOGovernanceRewardsWrWgJMd.withdrawDevFund.call(uintsoIVuU2, {from: accounts[5]});
		const uint256pjG5le = await FrogDAOGovernanceRewardsWrWgJMd.earned.call(addressuSWjDqR, {from: accounts[4]});
		const addressJtss7cH = await FrogDAOGovernanceRewardsWrWgJMd.updateReward.call(addressP8OA81X, {from: accounts[2]});
		await FrogDAOGovernanceRewardsWrWgJMd.renounceDevAddr.call({from: accounts[1]});

		assert.equal(uint256PLWTzDF, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsWrWgJMd.withdrawDevFund.call(uintsoIVuU2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressQ70diMs = accounts[1]
		const FrogDAOGovernanceRewardsxumuhQ5 = await FrogDAOGovernanceRewards.new(addressQ70diMs, {from: accounts[1]});
		const uintMiAc5C = BigInt("423")
		const uint256MzQ1Hzs = await FrogDAOGovernanceRewardsxumuhQ5.rewardPerToken.call({from: accounts[1]});
		const uint256mVLB5s = await FrogDAOGovernanceRewardsxumuhQ5.withdrawDevFund.call(uintMiAc5C, {from: accounts[1]});
		await FrogDAOGovernanceRewardsxumuhQ5.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardsxumuhQ5.checkhalve.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256MzQ1Hzs, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsxumuhQ5.withdrawDevFund.call(uintMiAc5C, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})