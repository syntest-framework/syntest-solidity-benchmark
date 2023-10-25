const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsqGKscfv = await SSTRewards.new({from: accounts[3]});
		const uintSpZDpcg = BigInt("371")
		const uint256qmfjRNM = await SSTRewardsqGKscfv.lastTimeRewardApplicable.call({from: accounts[1]});
		await SSTRewardsqGKscfv.exit.call({from: accounts[1]});
		const uint256Y4SVPd = await SSTRewardsqGKscfv.stake.call(uintSpZDpcg, {from: accounts[2]});
		const uint256ub7y0q0 = await SSTRewardsqGKscfv.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256qmfjRNM, BigInt("0"))
		await expect(SSTRewardsqGKscfv.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsomITFhK = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressVvqYHj3 = accounts[1]
		const uint256MbGc83H = await SSTRewardsomITFhK.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256ugKBkg7 = await SSTRewardsomITFhK.earned.call(addressVvqYHj3, {from: accounts[1]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsaTg2Qde = await SSTRewards.new({from: accounts[4]});
		const uintf0mD77Z = BigInt("1005")
		await SSTRewardsaTg2Qde.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256pRGMHGD = await SSTRewardsaTg2Qde.withdraw.call(uintf0mD77Z, {from: "0x0000000000000000000000000000000000000001"});
		await SSTRewardsaTg2Qde.exit.call({from: accounts[4]});
		await SSTRewardsaTg2Qde.checkStart.call({from: accounts[1]});

		await expect(SSTRewardsaTg2Qde.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsFnrdhC5 = await SSTRewards.new({from: accounts[2]});
		const uintNdZL6ez = BigInt("28")
		const addressInll0OT = accounts[3]
		const addressmNn8n7P = accounts[1]
		const uint256oKz6D5J = await SSTRewardsFnrdhC5.stake.call(uintNdZL6ez, {from: accounts[3]});
		const uint256Duboonu = await SSTRewardsFnrdhC5.earned.call(addressInll0OT, {from: accounts[0]});
		const uint256UIVWME = await SSTRewardsFnrdhC5.balanceOf.call(addressmNn8n7P, {from: accounts[0]});

		await expect(SSTRewardsFnrdhC5.stake.call(uintNdZL6ez, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsa2HCa41 = await SSTRewards.new({from: accounts[4]});
		const addresssw1ugkw = accounts[5]
		const addressxefWCFq = accounts[2]
		const uint256ZSkFNLK = await SSTRewardsa2HCa41.earned.call(addresssw1ugkw, {from: accounts[0]});
		const addressiFTnB4f = await SSTRewardsa2HCa41.updateReward.call(addressxefWCFq, {from: accounts[0]});

		assert.equal(uint256ZSkFNLK, BigInt("0"))
		await expect(SSTRewardsa2HCa41.updateReward.call(addressxefWCFq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsVwRuXla = await SSTRewards.new({from: accounts[1]});
		const uintZPbajIt = BigInt("1463")
		const uintxeWVa0B = BigInt("1155")
		const uintrx4XtXI = BigInt("1656")
		const uint256sQRSXFl = await SSTRewardsVwRuXla.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256v9ciyXp = await SSTRewardsVwRuXla.notifyRewardAmount.call(uintZPbajIt, {from: accounts[1]});
		const uint256g6cMhNO = await SSTRewardsVwRuXla.rewardPerToken.call({from: accounts[2]});
		const uint256glpHy3 = await SSTRewardsVwRuXla.stake.call(uintxeWVa0B, {from: accounts[1]});
		const uint256KFNO0sv = await SSTRewardsVwRuXla.stake.call(uintrx4XtXI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256sQRSXFl, BigInt("0"))
		await expect(SSTRewardsVwRuXla.notifyRewardAmount.call(uintZPbajIt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})