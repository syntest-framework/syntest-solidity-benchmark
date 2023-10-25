const GUMARewards = artifacts.require("GUMARewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GUMARewards', (accounts) => {
	it('test for GUMARewards', async () => {
		const GUMARewardsuFkfmOF = await GUMARewards.new({from: accounts[3]});
		const uintbIVOAel = BigInt("1169")
		const uintXesSxPg = BigInt("1647")
		const addressaijUvvk = accounts[2]
		const addressf8OIs5 = accounts[3]
		const addressA7O15O = accounts[1]
		const addresse8ZlET1 = await GUMARewardsuFkfmOF.owner.call({from: accounts[4]});
		const uint256nAUY6jQ = await GUMARewardsuFkfmOF.stake.call(uintbIVOAel, {from: "0x0000000000000000000000000000000000000001"});
		const uint256C1wJ48m = await GUMARewardsuFkfmOF.stake.call(uintXesSxPg, {from: accounts[2]});
		const addressHYikVJQ = await GUMARewardsuFkfmOF.setGUMA.call(addressf8OIs5, addressaijUvvk, {from: accounts[0]});
		const addressOtGEIiG = await GUMARewardsuFkfmOF.updateReward.call(addressA7O15O, {from: "0x0000000000000000000000000000000000000001"});
		await GUMARewardsuFkfmOF.renounceOwnership.call({from: accounts[2]});

		assert.equal(addresse8ZlET1, 0x14fBB23E14836710Bdc9d2A92FC981B80136337d)
		await expect(GUMARewardsuFkfmOF.stake.call(uintbIVOAel, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsj4Ep3Ta = await GUMARewards.new({from: accounts[2]});
		const addressqSmTmqQ = accounts[1]
		const address1b6FL1 = accounts[3]
		const addressbO3V4sW = accounts[0]
		const address1W8nsK = accounts[1]
		const addressmTYEL8w = accounts[0]
		const addressjv3cLsv = await GUMARewardsj4Ep3Ta.updateReward.call(addressqSmTmqQ, {from: accounts[1]});
		const uint256akXTPKk = await GUMARewardsj4Ep3Ta.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const addressAIhLd8P = await GUMARewardsj4Ep3Ta.setGUMA.call(addressbO3V4sW, address1b6FL1, {from: accounts[3]});
		const addressp8w2UYK = await GUMARewardsj4Ep3Ta.transferOwnership.call(address1W8nsK, {from: accounts[4]});
		const addressdouex2M = await GUMARewardsj4Ep3Ta.updateReward.call(addressmTYEL8w, {from: accounts[1]});

		await expect(GUMARewardsj4Ep3Ta.updateReward.call(addressqSmTmqQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardstVzr5Zf = await GUMARewards.new({from: accounts[3]});
		const addressmyqgBMu = accounts[0]
		const addressWyCWchq = accounts[3]
		const addressafUdWaQ = accounts[4]
		const addressHSxOXx0 = accounts[2]
		const addressGOzr4QE = await GUMARewardstVzr5Zf.transferOwnership.call(addressmyqgBMu, {from: accounts[5]});
		const uint256ObtSF7y = await GUMARewardstVzr5Zf.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressODhhqBP = await GUMARewardstVzr5Zf.setGUMA.call(addressafUdWaQ, addressWyCWchq, {from: accounts[0]});
		const uint256iVAY9ly = await GUMARewardstVzr5Zf.balanceOf.call(addressHSxOXx0, {from: accounts[0]});
		await GUMARewardstVzr5Zf.renounceOwnership.call({from: accounts[1]});

		await expect(GUMARewardstVzr5Zf.transferOwnership.call(addressmyqgBMu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsdU8jy94 = await GUMARewards.new({from: accounts[5]});
		const addressuke4TvU = accounts[5]
		const addresswknPS2G = accounts[3]
		const addressuaCYCs = "0x0000000000000000000000000000000000000001"
		const uintqOBiv7I = BigInt("490")
		const addressNdofp1x = await GUMARewardsdU8jy94.setGUMA.call(addresswknPS2G, addressuke4TvU, {from: accounts[1]});
		const uint256RXX1xqT = await GUMARewardsdU8jy94.balanceOf.call(addressuaCYCs, {from: accounts[3]});
		const uint256kY41kaL = await GUMARewardsdU8jy94.stake.call(uintqOBiv7I, {from: accounts[0]});
		const uint256tsRaGGT = await GUMARewardsdU8jy94.rewardPerToken.call({from: accounts[0]});

		await expect(GUMARewardsdU8jy94.setGUMA.call(addresswknPS2G, addressuke4TvU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsJipNESR = await GUMARewards.new({from: accounts[0]});
		const addressP1DcFdy = accounts[1]
		const uint256I19NMaM = await GUMARewardsJipNESR.rewardPerToken.call({from: accounts[2]});
		await GUMARewardsJipNESR.getReward.call({from: accounts[3]});
		const uint256sYw2LY2 = await GUMARewardsJipNESR.balanceOf.call(addressP1DcFdy, {from: accounts[1]});

		assert.equal(uint256I19NMaM, BigInt("0"))
		await expect(GUMARewardsJipNESR.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsdU8jy94 = await GUMARewards.new({from: accounts[5]});
		const addressrEv527G = "0x0000000000000000000000000000000000000001"
		const addressI0Q9K9k = accounts[4]
		const addressJsRv4x = accounts[1]
		const uint256RXX1xqT = await GUMARewardsdU8jy94.balanceOf.call(addressrEv527G, {from: accounts[3]});
		const addressBnPbLwk = await GUMARewardsdU8jy94.setRewardDistribution.call(addressI0Q9K9k, {from: accounts[5]});
		const uint256wEoRhiT = await GUMARewardsdU8jy94.earned.call(addressJsRv4x, {from: accounts[2]});

		assert.equal(uint256RXX1xqT, BigInt("0"))
		assert.equal(uint256wEoRhiT, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardswoIRck3 = await GUMARewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshtmwcWm = accounts[4]
		const addressRSQfOtL = accounts[1]
		const uintotaYOpM = BigInt("1559")
		const addresswKkH9on = accounts[5]
		const addressDLHZg0 = await GUMARewardswoIRck3.updateReward.call(addresshtmwcWm, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Mae1eG2 = await GUMARewardswoIRck3.earned.call(addressRSQfOtL, {from: accounts[4]});
		await GUMARewardswoIRck3.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256PxEgid = await GUMARewardswoIRck3.stake.call(uintotaYOpM, {from: accounts[4]});
		const uint256rdDAMeF = await GUMARewardswoIRck3.balanceOf.call(addresswKkH9on, {from: accounts[1]});
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsdU8jy94 = await GUMARewards.new({from: accounts[5]});
		const addressacAr3DA = "0x0000000000000000000000000000000000000000"
		const addressw3S8maS = accounts[0]
		const uint256RXX1xqT = await GUMARewardsdU8jy94.balanceOf.call(addressacAr3DA, {from: accounts[3]});
		const addressTwYMWgs = await GUMARewardsdU8jy94.transferOwnership.call(addressw3S8maS, {from: accounts[5]});

		assert.equal(uint256RXX1xqT, BigInt("0"))
	});

	it('test for GUMARewards', async () => {
		const GUMARewardsJipNESR = await GUMARewards.new({from: accounts[0]});
		await GUMARewardsJipNESR.renounceOwnership.call({from: accounts[0]});
		await GUMARewardsJipNESR.getReward.call({from: accounts[3]});

		await expect(GUMARewardsJipNESR.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})