const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsv1QX8pt = await JGNRewards.new({from: accounts[2]});
//		await JGNRewardsv1QX8pt.exit.call({from: accounts[2]});
//		await JGNRewardsv1QX8pt.exit.call({from: accounts[4]});

		await expect(JGNRewardsv1QX8pt.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsaKZfz7f = await JGNRewards.new({from: accounts[1]});
		const uintaOKcoy = BigInt("44")
		const uintbWfUC7R = BigInt("1129")
		const uint256sEAFeaI = await JGNRewardsaKZfz7f.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256qdmzLqN = await JGNRewardsaKZfz7f.withdraw.call(uintaOKcoy, {from: accounts[1]});
//		const uint256SyVHFsa = await JGNRewardsaKZfz7f.withdraw.call(uintbWfUC7R, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256TjW25OT = await JGNRewardsaKZfz7f.lastTimeRewardApplicable.call({from: accounts[5]});
//		await JGNRewardsaKZfz7f.getReward.call({from: accounts[1]});

		assert.equal(uint256sEAFeaI, BigInt("0"))
		await expect(JGNRewardsaKZfz7f.withdraw.call(uintaOKcoy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardswXzgAFC = await JGNRewards.new({from: accounts[1]});
		const uintKTL4Biu = BigInt("1614")
		const uintooxHvvM = BigInt("330")
		const uintbqERrRw = BigInt("1848")
//		const uint256mguhmz = await JGNRewardswXzgAFC.notifyRewardAmount.call(uintKTL4Biu, {from: accounts[1]});
//		const uint256vBzMw20 = await JGNRewardswXzgAFC.stake.call(uintooxHvvM, {from: accounts[4]});
//		const uint256Ds3QqFB = await JGNRewardswXzgAFC.withdraw.call(uintbqERrRw, {from: accounts[0]});

		await expect(JGNRewardswXzgAFC.notifyRewardAmount.call(uintKTL4Biu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsx3AdDwG = await JGNRewards.new({from: accounts[0]});
		const uintbzwAZqd = BigInt("658")
		const addressq1FsqQd = accounts[0]
		const addressNlcTPi = accounts[5]
//		await JGNRewardsx3AdDwG.getReward.call({from: accounts[0]});
//		const uint256VfbI945 = await JGNRewardsx3AdDwG.stake.call(uintbzwAZqd, {from: "0x0000000000000000000000000000000000000001"});
//		await JGNRewardsx3AdDwG.checkStart.call({from: accounts[3]});
//		const addressJ0xSHDk = await JGNRewardsx3AdDwG.updateReward.call(addressq1FsqQd, {from: accounts[3]});
//		const addressaW3nU4K = await JGNRewardsx3AdDwG.updateReward.call(addressNlcTPi, {from: accounts[4]});

		await expect(JGNRewardsx3AdDwG.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsRAvE9p3 = await JGNRewards.new({from: accounts[4]});
		const addressV1jUFKE = accounts[2]
		const uintZHGlSfm = BigInt("1542")
		const uintazbru1D = BigInt("2041")
		const uintthEiqt0 = BigInt("185")
		const uint256A3Psbtj = await JGNRewardsRAvE9p3.earned.call(addressV1jUFKE, {from: accounts[1]});
//		await JGNRewardsRAvE9p3.checkStart.call({from: accounts[0]});
//		const uint256DPeh5E = await JGNRewardsRAvE9p3.rewardPerToken.call({from: accounts[2]});
//		const uint256KuO9tC4 = await JGNRewardsRAvE9p3.withdraw.call(uintZHGlSfm, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256wP1bdC9 = await JGNRewardsRAvE9p3.stake.call(uintazbru1D, {from: accounts[3]});
//		const uint256FCJUbEe = await JGNRewardsRAvE9p3.stake.call(uintthEiqt0, {from: "0x0000000000000000000000000000000000000001"});
//		await JGNRewardsRAvE9p3.exit.call({from: accounts[1]});

		assert.equal(uint256A3Psbtj, BigInt("0"))
		await expect(JGNRewardsRAvE9p3.checkStart.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardswWu0Ynr = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintugmIHOL = BigInt("1590")
		const uintt5peLpt = BigInt("821")
		const uintQvLiox = BigInt("1644")
		const uinte8qERF8 = BigInt("1063")
		const uint256oBT8Rle = await JGNRewardswWu0Ynr.withdraw.call(uintugmIHOL, {from: accounts[4]});
		const uint256MnmMBeK = await JGNRewardswWu0Ynr.stake.call(uintt5peLpt, {from: accounts[0]});
		const uint256xAc7n6 = await JGNRewardswWu0Ynr.rewardPerToken.call({from: accounts[2]});
		const uint256M8fZmbN = await JGNRewardswWu0Ynr.stake.call(uintQvLiox, {from: accounts[3]});
		const uint256rF4S0fl = await JGNRewardswWu0Ynr.withdraw.call(uinte8qERF8, {from: accounts[1]});
	});
})