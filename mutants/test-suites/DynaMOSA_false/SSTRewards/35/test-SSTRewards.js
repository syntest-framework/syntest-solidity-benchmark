const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewards4YofEv = await SSTRewards.new({from: accounts[5]});
		const uintBruu537 = BigInt("56")
		const address5qJEeN = accounts[1]
		const addressIDdQzqa = accounts[4]
//		const uint256d8mBTg4 = await SSTRewards4YofEv.stake.call(uintBruu537, {from: accounts[1]});
//		const uint256JnGeRJS = await SSTRewards4YofEv.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256bkj0hpL = await SSTRewards4YofEv.earned.call(address5qJEeN, {from: accounts[2]});
//		const addressw5CKpuY = await SSTRewards4YofEv.updateReward.call(addressIDdQzqa, {from: accounts[0]});

		await expect(SSTRewards4YofEv.stake.call(uintBruu537, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsntvMiQ8 = await SSTRewards.new({from: accounts[1]});
		const addressw2L1F5e = accounts[5]
		const uintHqC6OBV = BigInt("503")
		const addressJqp8Yw0 = accounts[4]
		const uint256AsAiZNs = await SSTRewardsntvMiQ8.earned.call(addressw2L1F5e, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256zuplRip = await SSTRewardsntvMiQ8.withdraw.call(uintHqC6OBV, {from: accounts[2]});
//		const addressRgVnDAL = await SSTRewardsntvMiQ8.updateReward.call(addressJqp8Yw0, {from: accounts[2]});

		assert.equal(uint256AsAiZNs, BigInt("0"))
		await expect(SSTRewardsntvMiQ8.withdraw.call(uintHqC6OBV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardspw2aGi5 = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIth0ZUq = BigInt("1781")
		const addressnStOWLo = accounts[2]
		const uint256IOuuQiP = await SSTRewardspw2aGi5.withdraw.call(uintIth0ZUq, {from: accounts[1]});
		await SSTRewardspw2aGi5.checkStart.call({from: accounts[1]});
		const uint256mdrUIak = await SSTRewardspw2aGi5.balanceOf.call(addressnStOWLo, {from: accounts[4]});
		const uint256bwgeizo = await SSTRewardspw2aGi5.rewardPerToken.call({from: accounts[5]});
		await SSTRewardspw2aGi5.exit.call({from: accounts[4]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsEXY6MEm = await SSTRewards.new({from: accounts[3]});
		const addressw2VKOjh = accounts[4]
		const uintp5l83vb = BigInt("1302")
		const uintYky4p5a = BigInt("639")
//		const addresslZK0le0 = await SSTRewardsEXY6MEm.updateReward.call(addressw2VKOjh, {from: accounts[3]});
//		await SSTRewardsEXY6MEm.exit.call({from: accounts[4]});
//		const uint256FEQd4tb = await SSTRewardsEXY6MEm.notifyRewardAmount.call(uintp5l83vb, {from: accounts[0]});
//		const uint256SxKPdM2 = await SSTRewardsEXY6MEm.withdraw.call(uintYky4p5a, {from: accounts[3]});

		await expect(SSTRewardsEXY6MEm.updateReward.call(addressw2VKOjh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsh2CgevA = await SSTRewards.new({from: accounts[3]});
		const addresscR68Mha = accounts[2]
//		await SSTRewardsh2CgevA.exit.call({from: accounts[2]});
//		const addressgTWHMly = await SSTRewardsh2CgevA.updateReward.call(addresscR68Mha, {from: accounts[2]});

		await expect(SSTRewardsh2CgevA.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsGZIX44 = await SSTRewards.new({from: accounts[3]});
		const uintBcDKJz = BigInt("1575")
		const uintLgMuvX = BigInt("1126")
//		await SSTRewardsGZIX44.getReward.call({from: accounts[5]});
//		const uint256M5Y3sxs = await SSTRewardsGZIX44.withdraw.call(uintBcDKJz, {from: accounts[5]});
//		const uint256zgHtiFx = await SSTRewardsGZIX44.withdraw.call(uintLgMuvX, {from: accounts[3]});
//		const uint256DHFeR1N = await SSTRewardsGZIX44.totalSupply.call({from: accounts[1]});
//		const uint256tmMiS9 = await SSTRewardsGZIX44.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(SSTRewardsGZIX44.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsntvMiQ8 = await SSTRewards.new({from: accounts[1]});
		const addressoY0N20h = accounts[5]
		const uintHX1gJv = BigInt("756")
		const uintaG1AjTq = BigInt("503")
		const addresswYKSPXu = accounts[2]
		const addressQXQiFG1 = accounts[4]
		const uinttXIWWX7 = BigInt("156")
		const uint256WPmsHdB = await SSTRewardsntvMiQ8.lastTimeRewardApplicable.call({from: accounts[4]});
//		await SSTRewardsntvMiQ8.getReward.call({from: accounts[4]});
//		const uint256AsAiZNs = await SSTRewardsntvMiQ8.earned.call(addressoY0N20h, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256YMLBIJ = await SSTRewardsntvMiQ8.notifyRewardAmount.call(uintHX1gJv, {from: accounts[5]});
//		const uint256zuplRip = await SSTRewardsntvMiQ8.withdraw.call(uintaG1AjTq, {from: accounts[2]});
//		const uint256vieRc6C = await SSTRewardsntvMiQ8.earned.call(addresswYKSPXu, {from: accounts[2]});
//		const addressRgVnDAL = await SSTRewardsntvMiQ8.updateReward.call(addressQXQiFG1, {from: accounts[2]});
//		const uint256SQNrNKS = await SSTRewardsntvMiQ8.withdraw.call(uinttXIWWX7, {from: accounts[0]});

		assert.equal(uint256WPmsHdB, BigInt("0"))
		await expect(SSTRewardsntvMiQ8.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})