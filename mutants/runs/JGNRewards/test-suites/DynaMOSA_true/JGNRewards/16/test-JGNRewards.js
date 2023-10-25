const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsyNPTZc5 = await JGNRewards.new({from: accounts[1]});
		const addressXumJ3gQ = accounts[5]
		const uintNGjgkwT = BigInt("1770")
		const addressUMzo96 = accounts[3]
		const uintNeb3mQo = BigInt("1408")
		const uint256pTqIntk = await JGNRewardsyNPTZc5.earned.call(addressXumJ3gQ, {from: accounts[1]});
		const uint256onAt6Av = await JGNRewardsyNPTZc5.stake.call(uintNGjgkwT, {from: accounts[4]});
		const uint256BPRxCQX = await JGNRewardsyNPTZc5.balanceOf.call(addressUMzo96, {from: accounts[1]});
		await JGNRewardsyNPTZc5.exit.call({from: accounts[3]});
		const uint256OwYG8Lq = await JGNRewardsyNPTZc5.stake.call(uintNeb3mQo, {from: accounts[3]});

		assert.equal(uint256pTqIntk, BigInt("0"))
		await expect(JGNRewardsyNPTZc5.stake.call(uintNGjgkwT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsOy4Zfi4 = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintslz6XSu = BigInt("427")
		const uint256e4LzJYd = await JGNRewardsOy4Zfi4.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256a1770AN = await JGNRewardsOy4Zfi4.stake.call(uintslz6XSu, {from: accounts[4]});
		await JGNRewardsOy4Zfi4.getReward.call({from: accounts[3]});
		await JGNRewardsOy4Zfi4.checkStart.call({from: accounts[2]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsAxB3zp1 = await JGNRewards.new({from: accounts[4]});
		const addressMagLorV = accounts[1]
		const uintij48znw = BigInt("1478")
		const uint256TpnG21D = await JGNRewardsAxB3zp1.balanceOf.call(addressMagLorV, {from: accounts[3]});
		await JGNRewardsAxB3zp1.getReward.call({from: accounts[0]});
		const uint256YuyQnj0 = await JGNRewardsAxB3zp1.withdraw.call(uintij48znw, {from: accounts[5]});
		const uint256RvnVo4 = await JGNRewardsAxB3zp1.lastTimeRewardApplicable.call({from: accounts[4]});
		await JGNRewardsAxB3zp1.getReward.call({from: accounts[0]});
		const uint256sQMVJR = await JGNRewardsAxB3zp1.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256TpnG21D, BigInt("0"))
		await expect(JGNRewardsAxB3zp1.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsxfZcsqd = await JGNRewards.new({from: accounts[0]});
		const addressAMYlVF1 = accounts[5]
		const addressFuFt0Uc = accounts[1]
		const uint256R7tCZm2 = await JGNRewardsxfZcsqd.balanceOf.call(addressAMYlVF1, {from: accounts[5]});
		const address6YoSW4 = await JGNRewardsxfZcsqd.updateReward.call(addressFuFt0Uc, {from: accounts[3]});
		await JGNRewardsxfZcsqd.exit.call({from: accounts[5]});
		const uint256z6ZDhiE = await JGNRewardsxfZcsqd.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256Iu0KA9P = await JGNRewardsxfZcsqd.rewardPerToken.call({from: accounts[0]});

		assert.equal(uint256R7tCZm2, BigInt("0"))
		await expect(JGNRewardsxfZcsqd.updateReward.call(addressFuFt0Uc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsPWVNcvD = await JGNRewards.new({from: accounts[4]});
		const addresswYBMLU1 = "0x0000000000000000000000000000000000000001"
		const addressshb6gPy = "0x0000000000000000000000000000000000000001"
		await JGNRewardsPWVNcvD.exit.call({from: accounts[3]});
		await JGNRewardsPWVNcvD.exit.call({from: accounts[1]});
		const uint256KTYTpw2 = await JGNRewardsPWVNcvD.balanceOf.call(addresswYBMLU1, {from: accounts[5]});
		const uint256h0UUTet = await JGNRewardsPWVNcvD.earned.call(addressshb6gPy, {from: accounts[0]});
		await JGNRewardsPWVNcvD.getReward.call({from: accounts[2]});

		await expect(JGNRewardsPWVNcvD.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsFMuseEW = await JGNRewards.new({from: accounts[2]});
		const uintt1dIM70 = BigInt("129")
		const addressSnI4Brf = accounts[3]
		const uint256fAN5fCc = await JGNRewardsFMuseEW.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256XsFWnGF = await JGNRewardsFMuseEW.notifyRewardAmount.call(uintt1dIM70, {from: accounts[1]});
		const uint256Og1FQQj = await JGNRewardsFMuseEW.earned.call(addressSnI4Brf, {from: accounts[4]});
		await JGNRewardsFMuseEW.getReward.call({from: accounts[5]});

		assert.equal(uint256fAN5fCc, BigInt("0"))
		await expect(JGNRewardsFMuseEW.notifyRewardAmount.call(uintt1dIM70, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})