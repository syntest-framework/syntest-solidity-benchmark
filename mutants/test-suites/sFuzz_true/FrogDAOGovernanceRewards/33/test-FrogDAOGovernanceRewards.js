const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressDHiZBIf = accounts[5]
		const FrogDAOGovernanceRewardshPksLzf = await FrogDAOGovernanceRewards.new(addressDHiZBIf, {from: accounts[0]});
//		await FrogDAOGovernanceRewardshPksLzf.checkStart.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardshPksLzf.renounceDevAddr.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardshPksLzf.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressPChgVl6 = accounts[0]
		const FrogDAOGovernanceRewardsplJlAtz = await FrogDAOGovernanceRewards.new(addressPChgVl6, {from: "0x0000000000000000000000000000000000000001"});
		const addresst4F5On3 = accounts[0]
		await FrogDAOGovernanceRewardsplJlAtz.exit.call({from: accounts[4]});
		const uint256d2qKjYI = await FrogDAOGovernanceRewardsplJlAtz.devFundAvailable.call({from: accounts[1]});
		const addressnKUAeuI = await FrogDAOGovernanceRewardsplJlAtz.updateReward.call(addresst4F5On3, {from: accounts[5]});
		await FrogDAOGovernanceRewardsplJlAtz.checkhalve.call({from: accounts[0]});
		await FrogDAOGovernanceRewardsplJlAtz.checkStart.call({from: accounts[3]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressU8uKBGB = accounts[2]
		const FrogDAOGovernanceRewardsOuMUwqg = await FrogDAOGovernanceRewards.new(addressU8uKBGB, {from: accounts[5]});
		const uintm4WZpG2 = BigInt("789")
		const uint256HxyYwov = await FrogDAOGovernanceRewardsOuMUwqg.devFundAvailable.call({from: accounts[0]});
//		const uint256ACGgXsl = await FrogDAOGovernanceRewardsOuMUwqg.withdraw.call(uintm4WZpG2, {from: accounts[3]});
//		const uint256wzb3Z5V = await FrogDAOGovernanceRewardsOuMUwqg.devFundAvailable.call({from: accounts[4]});

		assert.equal(uint256HxyYwov, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsOuMUwqg.withdraw.call(uintm4WZpG2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresszRcFbRF = accounts[2]
		const FrogDAOGovernanceRewardsqQ7JcO = await FrogDAOGovernanceRewards.new(addresszRcFbRF, {from: accounts[0]});
		const addressi6rtKik = accounts[1]
		const uintggOh6IH = BigInt("966")
//		await FrogDAOGovernanceRewardsqQ7JcO.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressnJIIX0L = await FrogDAOGovernanceRewardsqQ7JcO.updateReward.call(addressi6rtKik, {from: accounts[2]});
//		const uint256jPZkzLA = await FrogDAOGovernanceRewardsqQ7JcO.notifyRewardAmount.call(uintggOh6IH, {from: accounts[5]});

		await expect(FrogDAOGovernanceRewardsqQ7JcO.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressTKdAZKM = accounts[1]
		const FrogDAOGovernanceRewardsYYVDoWw = await FrogDAOGovernanceRewards.new(addressTKdAZKM, {from: accounts[0]});
		const addresslYtSOtT = accounts[4]
		const addressGYxAYYA = "0x0000000000000000000000000000000000000001"
//		const addressjjjhtCl = await FrogDAOGovernanceRewardsYYVDoWw.transferDevAddr.call(addresslYtSOtT, {from: accounts[4]});
//		const uint256GJz4oWg = await FrogDAOGovernanceRewardsYYVDoWw.rewardPerToken.call({from: accounts[2]});
//		const uint256tkuNUSx = await FrogDAOGovernanceRewardsYYVDoWw.earned.call(addressGYxAYYA, {from: accounts[1]});
//		await FrogDAOGovernanceRewardsYYVDoWw.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardsYYVDoWw.transferDevAddr.call(addresslYtSOtT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressC56nU2t = accounts[3]
		const FrogDAOGovernanceRewardsSi30vs6 = await FrogDAOGovernanceRewards.new(addressC56nU2t, {from: accounts[4]});
//		await FrogDAOGovernanceRewardsSi30vs6.getReward.call({from: accounts[2]});
//		const uint256tnoWIZQ = await FrogDAOGovernanceRewardsSi30vs6.devFundAvailable.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256vfX1hUX = await FrogDAOGovernanceRewardsSi30vs6.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsSi30vs6.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressklgR30Y = accounts[5]
		const FrogDAOGovernanceRewardshPksLzf = await FrogDAOGovernanceRewards.new(addressklgR30Y, {from: accounts[0]});
//		await FrogDAOGovernanceRewardshPksLzf.renounceDevAddr.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardshPksLzf.renounceDevAddr.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressTYdOzl6 = accounts[2]
		const FrogDAOGovernanceRewardsOuMUwqg = await FrogDAOGovernanceRewards.new(addressTYdOzl6, {from: accounts[5]});
		const uintnmPCIQT = BigInt("76")
		const uintqLodVjG = BigInt("789")
//		const uint256tR6ZXYQ = await FrogDAOGovernanceRewardsOuMUwqg.notifyRewardAmount.call(uintnmPCIQT, {from: accounts[1]});
//		const uint256HxyYwov = await FrogDAOGovernanceRewardsOuMUwqg.devFundAvailable.call({from: accounts[0]});
//		const uint256ACGgXsl = await FrogDAOGovernanceRewardsOuMUwqg.withdraw.call(uintqLodVjG, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsOuMUwqg.renounceDevAddr.call({from: accounts[4]});
//		const uint256wzb3Z5V = await FrogDAOGovernanceRewardsOuMUwqg.devFundAvailable.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsOuMUwqg.notifyRewardAmount.call(uintnmPCIQT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressNGFVjTb = accounts[5]
		const FrogDAOGovernanceRewardshPksLzf = await FrogDAOGovernanceRewards.new(addressNGFVjTb, {from: accounts[0]});
		const uintiXuOhYF = BigInt("517")
//		const uint256yENiTwu = await FrogDAOGovernanceRewardshPksLzf.withdrawDevFund.call(uintiXuOhYF, {from: accounts[1]});
//		await FrogDAOGovernanceRewardshPksLzf.renounceDevAddr.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardshPksLzf.withdrawDevFund.call(uintiXuOhYF, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressKyXHLWL = accounts[1]
		const FrogDAOGovernanceRewardsYYVDoWw = await FrogDAOGovernanceRewards.new(addressKyXHLWL, {from: accounts[0]});
		const uintPMyeHkW = BigInt("1674")
		const addressdsg8MhJ = accounts[5]
//		const uint256dtSJ0IC = await FrogDAOGovernanceRewardsYYVDoWw.notifyRewardAmount.call(uintPMyeHkW, {from: accounts[0]});
//		const uint256xqtdLy1 = await FrogDAOGovernanceRewardsYYVDoWw.rewardPerToken.call({from: accounts[5]});
//		const addressjjjhtCl = await FrogDAOGovernanceRewardsYYVDoWw.transferDevAddr.call(addressdsg8MhJ, {from: accounts[4]});
//		await FrogDAOGovernanceRewardsYYVDoWw.exit.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsYYVDoWw.notifyRewardAmount.call(uintPMyeHkW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressnsrib6P = accounts[5]
		const FrogDAOGovernanceRewardshPksLzf = await FrogDAOGovernanceRewards.new(addressnsrib6P, {from: accounts[0]});
		const addressr5AWV0T = accounts[1]
		const uintpMvZpZ = BigInt("509")
		const addressFbE93wA = await FrogDAOGovernanceRewardshPksLzf.transferDevAddr.call(addressr5AWV0T, {from: accounts[5]});
//		const uint256yENiTwu = await FrogDAOGovernanceRewardshPksLzf.withdrawDevFund.call(uintpMvZpZ, {from: accounts[1]});

		await expect(FrogDAOGovernanceRewardshPksLzf.withdrawDevFund.call(uintpMvZpZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressebqnTUn = accounts[0]
		const FrogDAOGovernanceRewardscgxWUJD = await FrogDAOGovernanceRewards.new(addressebqnTUn, {from: accounts[2]});
		const uinthDO3MyF = BigInt("802")
		const addresseKTRcf3 = accounts[2]
		const addressSNoBxaf = accounts[5]
//		const uint256fcdYjkb = await FrogDAOGovernanceRewardscgxWUJD.withdrawDevFund.call(uinthDO3MyF, {from: accounts[0]});
//		const addressqHJ239y = await FrogDAOGovernanceRewardscgxWUJD.updateReward.call(addresseKTRcf3, {from: accounts[2]});
//		const uint256szwQYu9 = await FrogDAOGovernanceRewardscgxWUJD.earned.call(addressSNoBxaf, {from: accounts[1]});

		await expect(FrogDAOGovernanceRewardscgxWUJD.withdrawDevFund.call(uinthDO3MyF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})