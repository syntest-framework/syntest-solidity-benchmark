const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsFDwRyaE = await SSTRewards.new({from: accounts[4]});
		const addressaT19S0E = "0x0000000000000000000000000000000000000001"
		const addressQK3Ym5J = "0x0000000000000000000000000000000000000001"
		const addressItmUZqM = await SSTRewardsFDwRyaE.updateReward.call(addressaT19S0E, {from: accounts[1]});
		const uint256tPtpcr = await SSTRewardsFDwRyaE.balanceOf.call(addressQK3Ym5J, {from: accounts[2]});

		await expect(SSTRewardsFDwRyaE.updateReward.call(addressaT19S0E, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsI3Q8bLP = await SSTRewards.new({from: accounts[1]});
		const addressEAULJm = accounts[3]
		const uintYfqqr3 = BigInt("1829")
		await SSTRewardsI3Q8bLP.exit.call({from: accounts[0]});
		const uint256lc6XOD = await SSTRewardsI3Q8bLP.earned.call(addressEAULJm, {from: accounts[3]});
		const uint256oQns68E = await SSTRewardsI3Q8bLP.withdraw.call(uintYfqqr3, {from: accounts[2]});

		await expect(SSTRewardsI3Q8bLP.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsZwp5Bfv = await SSTRewards.new({from: accounts[5]});
		const uinthUt53BY = BigInt("183")
		const addressbRVgK1l = accounts[0]
		const uint256rBzTn0a = await SSTRewardsZwp5Bfv.stake.call(uinthUt53BY, {from: accounts[2]});
		const addressVvM48W2 = await SSTRewardsZwp5Bfv.updateReward.call(addressbRVgK1l, {from: accounts[4]});
		await SSTRewardsZwp5Bfv.getReward.call({from: accounts[1]});

		await expect(SSTRewardsZwp5Bfv.stake.call(uinthUt53BY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsNUUyMdy = await SSTRewards.new({from: accounts[0]});
		const uintAcMGSNM = BigInt("132")
		const uintXIvlz0i = BigInt("929")
		const uint256wSdIUAd = await SSTRewardsNUUyMdy.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256sPUdk3U = await SSTRewardsNUUyMdy.withdraw.call(uintAcMGSNM, {from: accounts[1]});
		await SSTRewardsNUUyMdy.getReward.call({from: accounts[0]});
		const uint256cgTNK15 = await SSTRewardsNUUyMdy.totalSupply.call({from: accounts[2]});
		const uint256nWxncYG = await SSTRewardsNUUyMdy.withdraw.call(uintXIvlz0i, {from: accounts[5]});
		await SSTRewardsNUUyMdy.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256wSdIUAd, BigInt("0"))
		await expect(SSTRewardsNUUyMdy.withdraw.call(uintAcMGSNM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsf2CzStV = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqIaoOX6 = accounts[3]
		const uint256f5m2nAU = await SSTRewardsf2CzStV.earned.call(addressqIaoOX6, {from: accounts[5]});
		await SSTRewardsf2CzStV.getReward.call({from: accounts[3]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsI3Q8bLP = await SSTRewards.new({from: accounts[1]});
		const uinthLqFjYt = BigInt("481")
		const uintPhaFs9o = BigInt("1016")
		const addresscRlHrqe = accounts[3]
		const uintCaxl1vr = BigInt("1830")
		const uint256ydgT1iS = await SSTRewardsI3Q8bLP.notifyRewardAmount.call(uinthLqFjYt, {from: accounts[0]});
		const uint256h1C7QXX = await SSTRewardsI3Q8bLP.stake.call(uintPhaFs9o, {from: accounts[3]});
		const uint256lc6XOD = await SSTRewardsI3Q8bLP.earned.call(addresscRlHrqe, {from: accounts[3]});
		const uint256oQns68E = await SSTRewardsI3Q8bLP.withdraw.call(uintCaxl1vr, {from: accounts[2]});

		await expect(SSTRewardsI3Q8bLP.notifyRewardAmount.call(uinthLqFjYt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsNUUyMdy = await SSTRewards.new({from: accounts[0]});
		const uintozcHH4h = BigInt("132")
		const uintWiAyGLd = BigInt("929")
		const addresstHUoQUM = accounts[2]
		const uint256wSdIUAd = await SSTRewardsNUUyMdy.lastTimeRewardApplicable.call({from: accounts[2]});
		await SSTRewardsNUUyMdy.getReward.call({from: accounts[1]});
		const uint256sPUdk3U = await SSTRewardsNUUyMdy.withdraw.call(uintozcHH4h, {from: accounts[1]});
		await SSTRewardsNUUyMdy.getReward.call({from: accounts[0]});
		const uint256cgTNK15 = await SSTRewardsNUUyMdy.totalSupply.call({from: accounts[2]});
		const uint256nWxncYG = await SSTRewardsNUUyMdy.withdraw.call(uintWiAyGLd, {from: accounts[5]});
		await SSTRewardsNUUyMdy.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const addressaFfYfG = await SSTRewardsNUUyMdy.updateReward.call(addresstHUoQUM, {from: accounts[3]});

		assert.equal(uint256wSdIUAd, BigInt("0"))
		await expect(SSTRewardsNUUyMdy.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})