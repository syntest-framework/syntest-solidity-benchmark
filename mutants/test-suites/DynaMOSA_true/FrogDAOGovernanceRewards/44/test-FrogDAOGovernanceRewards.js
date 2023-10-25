const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressMymDeEv = accounts[0]
		const FrogDAOGovernanceRewardsYxmXH5 = await FrogDAOGovernanceRewards.new(addressMymDeEv, {from: accounts[1]});
		const uintQWPTamy = BigInt("171")
//		const uint256qKcsTp = await FrogDAOGovernanceRewardsYxmXH5.withdrawDevFund.call(uintQWPTamy, {from: accounts[5]});
//		await FrogDAOGovernanceRewardsYxmXH5.checkhalve.call({from: accounts[4]});
//		await FrogDAOGovernanceRewardsYxmXH5.renounceDevAddr.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsYxmXH5.withdrawDevFund.call(uintQWPTamy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressIwXvN8Q = accounts[2]
		const FrogDAOGovernanceRewardsWkbxa5 = await FrogDAOGovernanceRewards.new(addressIwXvN8Q, {from: accounts[4]});
		const addressgsfYTh = accounts[3]
		const uint256hpm06q = await FrogDAOGovernanceRewardsWkbxa5.devFundAvailable.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressiw0ceOh = await FrogDAOGovernanceRewardsWkbxa5.transferDevAddr.call(addressgsfYTh, {from: accounts[4]});
//		const uint256embcHUi = await FrogDAOGovernanceRewardsWkbxa5.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256hpm06q, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsWkbxa5.transferDevAddr.call(addressgsfYTh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressLBbz1E9 = accounts[0]
		const FrogDAOGovernanceRewardsMoXxfO0 = await FrogDAOGovernanceRewards.new(addressLBbz1E9, {from: accounts[2]});
		const addressqDR3TrW = accounts[1]
		const uint3178cI = BigInt("1417")
		const uintZCYjji6 = BigInt("971")
		const uint256yUU0OJf = await FrogDAOGovernanceRewardsMoXxfO0.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256cAVqKYD = await FrogDAOGovernanceRewardsMoXxfO0.earned.call(addressqDR3TrW, {from: accounts[3]});
//		const uint256W1N48W8 = await FrogDAOGovernanceRewardsMoXxfO0.stake.call(uint3178cI, {from: accounts[2]});
//		const uint256MXttdOP = await FrogDAOGovernanceRewardsMoXxfO0.notifyRewardAmount.call(uintZCYjji6, {from: accounts[3]});

		assert.equal(uint256cAVqKYD, BigInt("0"))
		assert.equal(uint256yUU0OJf, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsMoXxfO0.stake.call(uint3178cI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressX9QZw4j = accounts[2]
		const FrogDAOGovernanceRewardsBg2w70C = await FrogDAOGovernanceRewards.new(addressX9QZw4j, {from: accounts[1]});
		const uintoQIA1pj = BigInt("1359")
		const addressE3E2qbN = accounts[3]
//		const uint256hI5ReO9 = await FrogDAOGovernanceRewardsBg2w70C.withdraw.call(uintoQIA1pj, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsBg2w70C.checkStart.call({from: accounts[4]});
//		const uint256feXsviC = await FrogDAOGovernanceRewardsBg2w70C.earned.call(addressE3E2qbN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardsBg2w70C.withdraw.call(uintoQIA1pj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressxFyB4x = accounts[0]
		const FrogDAOGovernanceRewards7fQRvy = await FrogDAOGovernanceRewards.new(addressxFyB4x, {from: accounts[1]});
		const addressMGKSsW5 = accounts[0]
		const addresslUOJ7fB = await FrogDAOGovernanceRewards7fQRvy.transferDevAddr.call(addressMGKSsW5, {from: accounts[0]});
//		await FrogDAOGovernanceRewards7fQRvy.renounceDevAddr.call({from: accounts[4]});
//		const uint256brHD623 = await FrogDAOGovernanceRewards7fQRvy.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewards7fQRvy.renounceDevAddr.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressdIKpHYX = accounts[0]
		const FrogDAOGovernanceRewardsaMe8yWX = await FrogDAOGovernanceRewards.new(addressdIKpHYX, {from: accounts[1]});
		const addressPYtYfs2 = accounts[4]
		const addressQ5XQILl = accounts[0]
		const uint256kytWbWB = await FrogDAOGovernanceRewardsaMe8yWX.lastTimeRewardApplicable.call({from: accounts[3]});
//		await FrogDAOGovernanceRewardsaMe8yWX.exit.call({from: accounts[3]});
//		const addressJ0Xe7oJ = await FrogDAOGovernanceRewardsaMe8yWX.updateReward.call(addressPYtYfs2, {from: accounts[1]});
//		const addressNgPfyU = await FrogDAOGovernanceRewardsaMe8yWX.transferDevAddr.call(addressQ5XQILl, {from: accounts[5]});
//		const uint256C7xvRqy = await FrogDAOGovernanceRewardsaMe8yWX.devFundAvailable.call({from: accounts[3]});

		assert.equal(uint256kytWbWB, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsaMe8yWX.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresskLORh43 = accounts[0]
		const FrogDAOGovernanceRewardsrOmwby = await FrogDAOGovernanceRewards.new(addresskLORh43, {from: accounts[3]});
		const addressvq33AW = accounts[2]
		const addressItcaEMO = accounts[1]
		const uint256UGCXxtX = await FrogDAOGovernanceRewardsrOmwby.earned.call(addressvq33AW, {from: "0x0000000000000000000000000000000000000001"});
//		await FrogDAOGovernanceRewardsrOmwby.checkhalve.call({from: accounts[3]});
//		const uint256KAkjtYT = await FrogDAOGovernanceRewardsrOmwby.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256nVBaS4Y = await FrogDAOGovernanceRewardsrOmwby.earned.call(addressItcaEMO, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsrOmwby.checkStart.call({from: accounts[3]});

		assert.equal(uint256UGCXxtX, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsrOmwby.checkhalve.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresshSDZ1yF = accounts[0]
		const FrogDAOGovernanceRewardsrOmwby = await FrogDAOGovernanceRewards.new(addresshSDZ1yF, {from: accounts[3]});
		const addressnsfXlgO = accounts[2]
		const uintKvVc2JU = BigInt("912")
		const addressaxwfIhX = accounts[1]
		const uint256UGCXxtX = await FrogDAOGovernanceRewardsrOmwby.earned.call(addressnsfXlgO, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256OOndQtq = await FrogDAOGovernanceRewardsrOmwby.notifyRewardAmount.call(uintKvVc2JU, {from: accounts[3]});
//		const uint256Vuiz3KI = await FrogDAOGovernanceRewardsrOmwby.devFundAvailable.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardsrOmwby.checkhalve.call({from: accounts[3]});
//		const uint256KAkjtYT = await FrogDAOGovernanceRewardsrOmwby.lastTimeRewardApplicable.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardsrOmwby.exit.call({from: accounts[2]});
//		const uint256nVBaS4Y = await FrogDAOGovernanceRewardsrOmwby.earned.call(addressaxwfIhX, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsrOmwby.checkStart.call({from: accounts[3]});

		assert.equal(uint256UGCXxtX, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsrOmwby.notifyRewardAmount.call(uintKvVc2JU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressb4QkzYP = accounts[0]
		const FrogDAOGovernanceRewardsMoXxfO0 = await FrogDAOGovernanceRewards.new(addressb4QkzYP, {from: accounts[2]});
		const addressbNmgNt4 = accounts[2]
		const uintl0D4VFK = BigInt("971")
		const uint256yUU0OJf = await FrogDAOGovernanceRewardsMoXxfO0.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256cAVqKYD = await FrogDAOGovernanceRewardsMoXxfO0.earned.call(addressbNmgNt4, {from: accounts[3]});
//		const uint256MXttdOP = await FrogDAOGovernanceRewardsMoXxfO0.notifyRewardAmount.call(uintl0D4VFK, {from: accounts[3]});

		assert.equal(uint256cAVqKYD, BigInt("0"))
		assert.equal(uint256yUU0OJf, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsMoXxfO0.notifyRewardAmount.call(uintl0D4VFK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressWxYU4cG = accounts[2]
		const FrogDAOGovernanceRewardsT9qs7Vx = await FrogDAOGovernanceRewards.new(addressWxYU4cG, {from: "0x0000000000000000000000000000000000000001"});
		const uintAdKc1ki = BigInt("1134")
		const uint2562hwtvn = await FrogDAOGovernanceRewardsT9qs7Vx.rewardPerToken.call({from: accounts[3]});
		const uint256lJIHzu6 = await FrogDAOGovernanceRewardsT9qs7Vx.withdrawDevFund.call(uintAdKc1ki, {from: accounts[2]});
		const uint2563mKqAx = await FrogDAOGovernanceRewardsT9qs7Vx.rewardPerToken.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsT9qs7Vx.checkhalve.call({from: accounts[1]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressyUdYclJ = accounts[2]
		const FrogDAOGovernanceRewardsqQ50Srj = await FrogDAOGovernanceRewards.new(addressyUdYclJ, {from: accounts[3]});
		const uintBZ1dYP8 = BigInt("1712")
		const addressVAoHV1P = accounts[3]
//		const uint256O3hFVxG = await FrogDAOGovernanceRewardsqQ50Srj.withdrawDevFund.call(uintBZ1dYP8, {from: accounts[2]});
//		const addressThi1pGh = await FrogDAOGovernanceRewardsqQ50Srj.updateReward.call(addressVAoHV1P, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsqQ50Srj.checkStart.call({from: accounts[1]});
//		const uint256h942Yji = await FrogDAOGovernanceRewardsqQ50Srj.rewardPerToken.call({from: accounts[0]});
//		await FrogDAOGovernanceRewardsqQ50Srj.getReward.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsqQ50Srj.withdrawDevFund.call(uintBZ1dYP8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})