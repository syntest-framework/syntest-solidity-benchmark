const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardslw8G8Ai = await JGNRewards.new({from: accounts[4]});
		const addressfgLAdWj = accounts[0]
		const uintcHbijz1 = BigInt("872")
//		const addresss8kxqe = await JGNRewardslw8G8Ai.updateReward.call(addressfgLAdWj, {from: accounts[1]});
//		const uint256ftBusL7 = await JGNRewardslw8G8Ai.withdraw.call(uintcHbijz1, {from: accounts[0]});
//		const uint256x21CoCF = await JGNRewardslw8G8Ai.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(JGNRewardslw8G8Ai.updateReward.call(addressfgLAdWj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsCXrYFSL = await JGNRewards.new({from: accounts[4]});
		const uint0zf27N = BigInt("1050")
		const uintGIevwCN = BigInt("1391")
		const addressyPc4L5 = accounts[4]
		const addresspHtpbpX = accounts[3]
//		const uint256tOhAG2m = await JGNRewardsCXrYFSL.withdraw.call(uint0zf27N, {from: accounts[0]});
//		const uint256C41yVLz = await JGNRewardsCXrYFSL.stake.call(uintGIevwCN, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256BHE2diD = await JGNRewardsCXrYFSL.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256A6NAX8 = await JGNRewardsCXrYFSL.balanceOf.call(addressyPc4L5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256W66iyXc = await JGNRewardsCXrYFSL.balanceOf.call(addresspHtpbpX, {from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardsCXrYFSL.withdraw.call(uint0zf27N, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsSpzjpyU = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintFznqUh5 = BigInt("977")
		const uintxdGZnsi = BigInt("1358")
		const addresskfiVipd = accounts[4]
		const uint256LsoON1t = await JGNRewardsSpzjpyU.rewardPerToken.call({from: accounts[0]});
		const uint256Sa3YLaS = await JGNRewardsSpzjpyU.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256DBBRX9G = await JGNRewardsSpzjpyU.stake.call(uintFznqUh5, {from: accounts[2]});
		const uint256Y0T0m9 = await JGNRewardsSpzjpyU.stake.call(uintxdGZnsi, {from: accounts[2]});
		await JGNRewardsSpzjpyU.checkStart.call({from: accounts[3]});
		const addressNfiRk1H = await JGNRewardsSpzjpyU.updateReward.call(addresskfiVipd, {from: accounts[4]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsDq341sU = await JGNRewards.new({from: accounts[4]});
		const uintPE9qP9 = BigInt("457")
		const addressB2WhfM4 = accounts[5]
		const uint256Lp5RsT = await JGNRewardsDq341sU.rewardPerToken.call({from: accounts[5]});
		const uint256Ujs2pbZ = await JGNRewardsDq341sU.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256UzNNSWr = await JGNRewardsDq341sU.stake.call(uintPE9qP9, {from: accounts[3]});
//		const uint256prMY6YB = await JGNRewardsDq341sU.earned.call(addressB2WhfM4, {from: accounts[4]});

		assert.equal(uint256Lp5RsT, BigInt("0"))
		assert.equal(uint256Ujs2pbZ, BigInt("0"))
		await expect(JGNRewardsDq341sU.stake.call(uintPE9qP9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsehrR2tB = await JGNRewards.new({from: accounts[0]});
		const uintUsS1ONe = BigInt("130")
		const uintIMR7Ee = BigInt("255")
		const addressNlEMai3 = accounts[5]
//		const uint256q3PwUr = await JGNRewardsehrR2tB.notifyRewardAmount.call(uintUsS1ONe, {from: accounts[3]});
//		const uint256d00Xehx = await JGNRewardsehrR2tB.stake.call(uintIMR7Ee, {from: accounts[3]});
//		const uint256VNiLhUK = await JGNRewardsehrR2tB.earned.call(addressNlEMai3, {from: accounts[4]});
//		await JGNRewardsehrR2tB.getReward.call({from: accounts[1]});

		await expect(JGNRewardsehrR2tB.notifyRewardAmount.call(uintUsS1ONe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsRWL9sr6 = await JGNRewards.new({from: accounts[5]});
//		await JGNRewardsRWL9sr6.getReward.call({from: accounts[0]});
//		await JGNRewardsRWL9sr6.checkStart.call({from: accounts[0]});
//		await JGNRewardsRWL9sr6.exit.call({from: accounts[0]});
//		const uint256Ncnkh8q = await JGNRewardsRWL9sr6.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		await JGNRewardsRWL9sr6.checkStart.call({from: accounts[2]});

		await expect(JGNRewardsRWL9sr6.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsBM3o76A = await JGNRewards.new({from: accounts[2]});
		const addressr2ZF4eA = accounts[4]
		const uint256THiICPI = await JGNRewardsBM3o76A.balanceOf.call(addressr2ZF4eA, {from: accounts[0]});
//		await JGNRewardsBM3o76A.exit.call({from: accounts[1]});
//		const uint256ePu3ubp = await JGNRewardsBM3o76A.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		await JGNRewardsBM3o76A.checkStart.call({from: accounts[3]});

		assert.equal(uint256THiICPI, BigInt("0"))
		await expect(JGNRewardsBM3o76A.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})