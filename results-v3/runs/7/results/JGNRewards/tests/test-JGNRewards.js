const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsCTNK9fk = await JGNRewards.new({from: accounts[5]});
		const uintegQFntQ = BigInt("1933")
		const uintwKqLpNh = BigInt("1393")
		const uintDKLCCVx = BigInt("411")
		const uint256ZdYRWOx = await JGNRewardsCTNK9fk.stake.call(uintegQFntQ, {from: accounts[2]});
		const uint256LI1x2W = await JGNRewardsCTNK9fk.withdraw.call(uintwKqLpNh, {from: accounts[2]});
		const uint256btPkJLS = await JGNRewardsCTNK9fk.withdraw.call(uintDKLCCVx, {from: accounts[2]});

		await expect(JGNRewardsCTNK9fk.stake.call(uintegQFntQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsmQMUGqU = await JGNRewards.new({from: accounts[0]});
		const uintmYO7RHt = BigInt("102")
		const addressRCfP9mm = accounts[3]
		const uint256DBcMsw1 = await JGNRewardsmQMUGqU.withdraw.call(uintmYO7RHt, {from: accounts[5]});
		const addressjmPGgp3 = await JGNRewardsmQMUGqU.updateReward.call(addressRCfP9mm, {from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardsmQMUGqU.withdraw.call(uintmYO7RHt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsqmftfPf = await JGNRewards.new({from: accounts[1]});
		const addressZ6mC9h = "0x0000000000000000000000000000000000000001"
		const uintMa3HCUp = BigInt("406")
		const addressElDftT = await JGNRewardsqmftfPf.updateReward.call(addressZ6mC9h, {from: accounts[4]});
		const uint2562tGiSS = await JGNRewardsqmftfPf.rewardPerToken.call({from: accounts[0]});
		const uint256fpENgkR = await JGNRewardsqmftfPf.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256WRWjnlJ = await JGNRewardsqmftfPf.rewardPerToken.call({from: accounts[1]});
		const uint256a7Kol9A = await JGNRewardsqmftfPf.withdraw.call(uintMa3HCUp, {from: accounts[4]});

		await expect(JGNRewardsqmftfPf.updateReward.call(addressZ6mC9h, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsOoKzrB9 = await JGNRewards.new({from: accounts[2]});
		const uintrywTMkf = BigInt("1499")
		const addresscziMLxm = accounts[5]
		const addressOmFQgEq = accounts[1]
		const uint256a4xJeyS = await JGNRewardsOoKzrB9.notifyRewardAmount.call(uintrywTMkf, {from: accounts[3]});
		const addressA1D6N25 = await JGNRewardsOoKzrB9.updateReward.call(addresscziMLxm, {from: accounts[0]});
		const uint256D0DHmmc = await JGNRewardsOoKzrB9.earned.call(addressOmFQgEq, {from: accounts[0]});
		const uint2562jOBrr = await JGNRewardsOoKzrB9.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint2569Bym6W = await JGNRewardsOoKzrB9.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(JGNRewardsOoKzrB9.notifyRewardAmount.call(uintrywTMkf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsB5Hih5o = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressdLJ0c0C = accounts[0]
		const addressG9WbGnD = accounts[3]
		const addressqmP8Wt = accounts[2]
		const uintAvvVn24 = BigInt("624")
		const uintRYuqtkU = BigInt("575")
		const uint256c2Bc6EU = await JGNRewardsB5Hih5o.earned.call(addressdLJ0c0C, {from: accounts[2]});
		const uint256EDa219q = await JGNRewardsB5Hih5o.balanceOf.call(addressG9WbGnD, {from: accounts[0]});
		const uint256sv37aFG = await JGNRewardsB5Hih5o.balanceOf.call(addressqmP8Wt, {from: accounts[5]});
		const uint256QzHyJ8x = await JGNRewardsB5Hih5o.withdraw.call(uintAvvVn24, {from: accounts[0]});
		const uint256IDlXupn = await JGNRewardsB5Hih5o.stake.call(uintRYuqtkU, {from: accounts[3]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsmQMUGqU = await JGNRewards.new({from: accounts[0]});
		const uinthaVSjHM = BigInt("102")
		await JGNRewardsmQMUGqU.exit.call({from: accounts[2]});
		const uint256DBcMsw1 = await JGNRewardsmQMUGqU.withdraw.call(uinthaVSjHM, {from: accounts[5]});
		await JGNRewardsmQMUGqU.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ckZsNSL = await JGNRewardsmQMUGqU.rewardPerToken.call({from: accounts[4]});

		await expect(JGNRewardsmQMUGqU.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsfFGnsS8 = await JGNRewards.new({from: accounts[4]});
		const addressiSLyLbx = "0x0000000000000000000000000000000000000001"
		const uint256cgJRhHZ = await JGNRewardsfFGnsS8.rewardPerToken.call({from: accounts[3]});
		await JGNRewardsfFGnsS8.getReward.call({from: accounts[5]});
		await JGNRewardsfFGnsS8.exit.call({from: accounts[1]});
		const addressgHILtUz = await JGNRewardsfFGnsS8.updateReward.call(addressiSLyLbx, {from: accounts[0]});

		assert.equal(uint256cgJRhHZ, BigInt("0"))
		await expect(JGNRewardsfFGnsS8.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})