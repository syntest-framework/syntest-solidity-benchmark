const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsy3sJ5Pk = await JGNRewards.new({from: accounts[5]});
		const addressXm8HUjJ = accounts[0]
		const uintsbFyDj3 = BigInt("561")
		const uint256Pu20HJt = await JGNRewardsy3sJ5Pk.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256hnEEkX2 = await JGNRewardsy3sJ5Pk.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256p0w8Vqa = await JGNRewardsy3sJ5Pk.balanceOf.call(addressXm8HUjJ, {from: accounts[0]});
//		const uint256727Ccb = await JGNRewardsy3sJ5Pk.stake.call(uintsbFyDj3, {from: accounts[2]});

		assert.equal(uint256Pu20HJt, BigInt("0"))
		assert.equal(uint256hnEEkX2, BigInt("0"))
		assert.equal(uint256p0w8Vqa, BigInt("0"))
		await expect(JGNRewardsy3sJ5Pk.stake.call(uintsbFyDj3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsF2hLo0j = await JGNRewards.new({from: accounts[0]});
		const uintgcrBUWT = BigInt("1954")
//		await JGNRewardsF2hLo0j.exit.call({from: accounts[0]});
//		const uint256VBDVaHd = await JGNRewardsF2hLo0j.stake.call(uintgcrBUWT, {from: accounts[3]});

		await expect(JGNRewardsF2hLo0j.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsP6nwERz = await JGNRewards.new({from: accounts[2]});
		const addressO17bPfT = accounts[2]
//		await JGNRewardsP6nwERz.getReward.call({from: accounts[3]});
//		const uint256c96JHP6 = await JGNRewardsP6nwERz.earned.call(addressO17bPfT, {from: accounts[2]});

		await expect(JGNRewardsP6nwERz.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsEfzVfwh = await JGNRewards.new({from: accounts[4]});
		const addresspF98MpW = accounts[2]
		const addressfMCZwY = accounts[2]
//		await JGNRewardsEfzVfwh.getReward.call({from: accounts[4]});
//		const uint256v2PooOT = await JGNRewardsEfzVfwh.balanceOf.call(addresspF98MpW, {from: accounts[5]});
//		const uint256y92loZA = await JGNRewardsEfzVfwh.totalSupply.call({from: accounts[2]});
//		const addressAngR2Kb = await JGNRewardsEfzVfwh.updateReward.call(addressfMCZwY, {from: accounts[2]});
//		await JGNRewardsEfzVfwh.exit.call({from: accounts[4]});

		await expect(JGNRewardsEfzVfwh.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsh9cmjJd = await JGNRewards.new({from: accounts[5]});
		const uinttoKZwY8 = BigInt("1789")
		const addressyFFCHHi = accounts[3]
		const uintiahslZj = BigInt("1339")
//		const uint256qABOhh7 = await JGNRewardsh9cmjJd.withdraw.call(uinttoKZwY8, {from: accounts[1]});
//		const uint256fPKF2st = await JGNRewardsh9cmjJd.balanceOf.call(addressyFFCHHi, {from: accounts[3]});
//		await JGNRewardsh9cmjJd.exit.call({from: accounts[0]});
//		await JGNRewardsh9cmjJd.exit.call({from: accounts[3]});
//		const uint256T5nMAac = await JGNRewardsh9cmjJd.stake.call(uintiahslZj, {from: accounts[1]});

		await expect(JGNRewardsh9cmjJd.withdraw.call(uinttoKZwY8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsF2hLo0j = await JGNRewards.new({from: accounts[0]});
		const uintrPg4xSP = BigInt("1140")
		const uintwWRgsH2 = BigInt("1875")
		const uintIYIkXLs = BigInt("803")
		const uintEOXBoCq = BigInt("1932")
//		const uint256moCDWMz = await JGNRewardsF2hLo0j.notifyRewardAmount.call(uintrPg4xSP, {from: accounts[0]});
//		const uint256AyEa6tv = await JGNRewardsF2hLo0j.stake.call(uintwWRgsH2, {from: accounts[1]});
//		await JGNRewardsF2hLo0j.getReward.call({from: accounts[5]});
//		const uint256Q7RffjD = await JGNRewardsF2hLo0j.stake.call(uintIYIkXLs, {from: accounts[2]});
//		const uint256VBDVaHd = await JGNRewardsF2hLo0j.stake.call(uintEOXBoCq, {from: accounts[3]});

		await expect(JGNRewardsF2hLo0j.notifyRewardAmount.call(uintrPg4xSP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsL282vDr = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressgTxcug = accounts[2]
		const uintlMVXu7N = BigInt("244")
		const addressOWn2IF7 = accounts[3]
		const uintA0IA1m = BigInt("1166")
		const addressWDrLDlW = await JGNRewardsL282vDr.updateReward.call(addressgTxcug, {from: accounts[2]});
		const uint256j9D0NzF = await JGNRewardsL282vDr.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256n7Vvq8K = await JGNRewardsL282vDr.withdraw.call(uintlMVXu7N, {from: accounts[2]});
		const addressqCOVk7G = await JGNRewardsL282vDr.updateReward.call(addressOWn2IF7, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dLhXX2r = await JGNRewardsL282vDr.stake.call(uintA0IA1m, {from: accounts[4]});
	});
})