const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardskumOu4r = await JGNRewards.new({from: accounts[3]});
		const uintxJtm5jx = BigInt("351")
		const addressDbIaJWP = accounts[1]
//		const uint256XGhGEFV = await JGNRewardskumOu4r.stake.call(uintxJtm5jx, {from: accounts[1]});
//		const uint256giqYwfv = await JGNRewardskumOu4r.balanceOf.call(addressDbIaJWP, {from: accounts[5]});

		await expect(JGNRewardskumOu4r.stake.call(uintxJtm5jx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsk40lCEn = await JGNRewards.new({from: accounts[4]});
		const addresseh5yfc3 = accounts[4]
//		await JGNRewardsk40lCEn.getReward.call({from: accounts[2]});
//		const addressT51zuld = await JGNRewardsk40lCEn.updateReward.call(addresseh5yfc3, {from: accounts[4]});
//		const uint256yhp3Ca9 = await JGNRewardsk40lCEn.rewardPerToken.call({from: accounts[5]});

		await expect(JGNRewardsk40lCEn.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsC6r3p88 = await JGNRewards.new({from: accounts[3]});
		const uintU9WaG3a = BigInt("163")
		const uintWlLTz4 = BigInt("763")
		const addressxN8349j = accounts[3]
		const uintC5pYo4F = BigInt("1932")
		const addressPQg7p1j = "0x0000000000000000000000000000000000000001"
//		const uint256PPhhAqd = await JGNRewardsC6r3p88.withdraw.call(uintU9WaG3a, {from: accounts[0]});
//		const uint256nMehsPG = await JGNRewardsC6r3p88.stake.call(uintWlLTz4, {from: accounts[2]});
//		const uint256bfVT7Bb = await JGNRewardsC6r3p88.earned.call(addressxN8349j, {from: accounts[3]});
//		const uint256BCQsCtR = await JGNRewardsC6r3p88.stake.call(uintC5pYo4F, {from: accounts[2]});
//		const uint256qUjcRqo = await JGNRewardsC6r3p88.totalSupply.call({from: accounts[1]});
//		const uint256xxHbumb = await JGNRewardsC6r3p88.earned.call(addressPQg7p1j, {from: accounts[2]});

		await expect(JGNRewardsC6r3p88.withdraw.call(uintU9WaG3a, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsMkAsKAj = await JGNRewards.new({from: accounts[1]});
		const addressZUk0iho = accounts[4]
		const addressdlsylC2 = accounts[3]
		const addressLlXNgJg = accounts[0]
		const uint256uVFBoME = await JGNRewardsMkAsKAj.balanceOf.call(addressZUk0iho, {from: accounts[2]});
		const uint256MfZR93e = await JGNRewardsMkAsKAj.lastTimeRewardApplicable.call({from: accounts[1]});
//		await JGNRewardsMkAsKAj.exit.call({from: accounts[3]});
//		await JGNRewardsMkAsKAj.getReward.call({from: accounts[2]});
//		const addresseOZzA1g = await JGNRewardsMkAsKAj.updateReward.call(addressdlsylC2, {from: accounts[0]});
//		const addressxxnYB9Y = await JGNRewardsMkAsKAj.updateReward.call(addressLlXNgJg, {from: accounts[2]});

		assert.equal(uint256MfZR93e, BigInt("0"))
		assert.equal(uint256uVFBoME, BigInt("0"))
		await expect(JGNRewardsMkAsKAj.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardskumOu4r = await JGNRewards.new({from: accounts[3]});
		const uintUZH2iQ0 = BigInt("743")
		const uintb5bEIyz = BigInt("331")
		const addresss0A0a9 = accounts[3]
//		const uint256sw6xWAd = await JGNRewardskumOu4r.notifyRewardAmount.call(uintUZH2iQ0, {from: accounts[0]});
//		const uint256x7D5YAM = await JGNRewardskumOu4r.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256XGhGEFV = await JGNRewardskumOu4r.stake.call(uintb5bEIyz, {from: accounts[1]});
//		const addressRyQT2SS = await JGNRewardskumOu4r.updateReward.call(addresss0A0a9, {from: accounts[1]});

		await expect(JGNRewardskumOu4r.notifyRewardAmount.call(uintUZH2iQ0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardshg3MtAL = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintXGI12qb = BigInt("1914")
		const addressd2guela = "0x0000000000000000000000000000000000000001"
		const uintiWaAA00 = BigInt("1562")
		const addresskHoL9QT = accounts[5]
		const uint2SxU8s = BigInt("723")
		const uint256XwrYIF6 = await JGNRewardshg3MtAL.stake.call(uintXGI12qb, {from: accounts[5]});
		const uint256HdSfki0 = await JGNRewardshg3MtAL.balanceOf.call(addressd2guela, {from: accounts[3]});
		const uint256fWlXJpA = await JGNRewardshg3MtAL.withdraw.call(uintiWaAA00, {from: accounts[4]});
		const addressRiNPyJ5 = await JGNRewardshg3MtAL.updateReward.call(addresskHoL9QT, {from: accounts[2]});
		const uint256ZYMuoVj = await JGNRewardshg3MtAL.withdraw.call(uint2SxU8s, {from: accounts[0]});
	});
})