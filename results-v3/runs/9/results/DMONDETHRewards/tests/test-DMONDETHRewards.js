const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsxJvxR41 = await DMONDETHRewards.new({from: accounts[1]});
		const addressIrjbaoZ = "0x0000000000000000000000000000000000000001"
		const uintfs9vHz = BigInt("322")
		const addressz0cQX7 = await DMONDETHRewardsxJvxR41.transferOwnership.call(addressIrjbaoZ, {from: accounts[1]});
		await DMONDETHRewardsxJvxR41.onlyRewardDistribution.call({from: accounts[5]});
		const uint256IBxmRza = await DMONDETHRewardsxJvxR41.stake.call(uintfs9vHz, {from: accounts[2]});

		await expect(DMONDETHRewardsxJvxR41.onlyRewardDistribution.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardslbWIdvd = await DMONDETHRewards.new({from: accounts[0]});
		const addressNXvdsjP = accounts[2]
		const uint256KQUXBXJ = await DMONDETHRewardslbWIdvd.totalSupply.call({from: accounts[4]});
		const addressCuivwaC = await DMONDETHRewardslbWIdvd.transferOwnership.call(addressNXvdsjP, {from: accounts[5]});
		await DMONDETHRewardslbWIdvd.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256KQUXBXJ, BigInt("0"))
		await expect(DMONDETHRewardslbWIdvd.transferOwnership.call(addressNXvdsjP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardspTwbiM = await DMONDETHRewards.new({from: accounts[1]});
		const uint6zlsIH = BigInt("514")
		await DMONDETHRewardspTwbiM.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ERQlTag = await DMONDETHRewardspTwbiM.stake.call(uint6zlsIH, {from: accounts[3]});

		await expect(DMONDETHRewardspTwbiM.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardscygwkvq = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintB82HeZA = BigInt("185")
		const uint256h8bGgkX = await DMONDETHRewardscygwkvq.withdraw.call(uintB82HeZA, {from: accounts[3]});
		await DMONDETHRewardscygwkvq.onlyOwner.call({from: accounts[1]});
		const uint256A4mAIq5 = await DMONDETHRewardscygwkvq.rewardPerToken.call({from: accounts[1]});
		await DMONDETHRewardscygwkvq.onlyOwner.call({from: accounts[2]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardspTwbiM = await DMONDETHRewards.new({from: accounts[1]});
		const uintZalSQDC = BigInt("1109")
		const uint256ddTc6HV = await DMONDETHRewardspTwbiM.withdraw.call(uintZalSQDC, {from: accounts[0]});
		await DMONDETHRewardspTwbiM.onlyRewardDistribution.call({from: accounts[2]});
		await DMONDETHRewardspTwbiM.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardspTwbiM.withdraw.call(uintZalSQDC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardspTwbiM = await DMONDETHRewards.new({from: accounts[1]});
		const uintuBBYG4M = BigInt("514")
		await DMONDETHRewardspTwbiM.exit.call({from: accounts[0]});
		const uint256ERQlTag = await DMONDETHRewardspTwbiM.stake.call(uintuBBYG4M, {from: accounts[3]});

		await expect(DMONDETHRewardspTwbiM.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsyVsQxj3 = await DMONDETHRewards.new({from: accounts[4]});
		const addressv8H4sL = accounts[2]
		const uint256rZ2sJYn = await DMONDETHRewardsyVsQxj3.remainingReward.call({from: accounts[0]});
		await DMONDETHRewardsyVsQxj3.onlyRewardDistribution.call({from: accounts[5]});
		await DMONDETHRewardsyVsQxj3.renounceOwnership.call({from: accounts[2]});
		const uint256y02CMpL = await DMONDETHRewardsyVsQxj3.remainingReward.call({from: accounts[0]});
		const addressu7L0EM = await DMONDETHRewardsyVsQxj3.setStakeAddress.call(addressv8H4sL, {from: accounts[1]});

		await expect(DMONDETHRewardsyVsQxj3.remainingReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsgZvA0D = await DMONDETHRewards.new({from: accounts[2]});
		const uintc3pgxzV = BigInt("1256")
		const uint256An9PpDl = await DMONDETHRewardsgZvA0D.rewardPerToken.call({from: accounts[1]});
		const uint256OpJHxpI = await DMONDETHRewardsgZvA0D.notifyRewardAmount.call(uintc3pgxzV, {from: accounts[3]});
		await DMONDETHRewardsgZvA0D.checkStart.call({from: accounts[3]});

		assert.equal(uint256An9PpDl, BigInt("0"))
		await expect(DMONDETHRewardsgZvA0D.notifyRewardAmount.call(uintc3pgxzV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardspTwbiM = await DMONDETHRewards.new({from: accounts[1]});
		const addressXxCIYTr = accounts[4]
		const uintUU6b19 = BigInt("488")
		await DMONDETHRewardspTwbiM.renounceOwnership.call({from: accounts[1]});
		const addressm8UjuR3 = await DMONDETHRewardspTwbiM.updateReward.call(addressXxCIYTr, {from: accounts[1]});
		const uint256ERQlTag = await DMONDETHRewardspTwbiM.stake.call(uintUU6b19, {from: accounts[3]});

		await expect(DMONDETHRewardspTwbiM.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardspTwbiM = await DMONDETHRewards.new({from: accounts[1]});
		const addressK2pTAV = await DMONDETHRewardspTwbiM.owner.call({from: accounts[5]});
		await DMONDETHRewardspTwbiM.onlyRewardDistribution.call({from: accounts[4]});
		await DMONDETHRewardspTwbiM.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressK2pTAV, 0xb2Ff29a2FCe0137e08B2143aAAff66C1D7cF4Da2)
		await expect(DMONDETHRewardspTwbiM.onlyRewardDistribution.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsUQOgMQ6 = await DMONDETHRewards.new({from: accounts[2]});
		const uintfRNopVp = BigInt("1258")
		await DMONDETHRewardsUQOgMQ6.getReward.call({from: accounts[5]});
		const uint256QeCpnyw = await DMONDETHRewardsUQOgMQ6.notifyRewardAmount.call(uintfRNopVp, {from: accounts[2]});
		await DMONDETHRewardsUQOgMQ6.onlyOwner.call({from: accounts[5]});
		const uint256zRRPZ7 = await DMONDETHRewardsUQOgMQ6.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(DMONDETHRewardsUQOgMQ6.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardspTwbiM = await DMONDETHRewards.new({from: accounts[1]});
		const uintiyTpk2 = BigInt("293")
		const addressCqIFAUI = accounts[2]
		const uint256EmRHco3 = await DMONDETHRewardspTwbiM.setStartTime.call(uintiyTpk2, {from: accounts[1]});
		const addressp9yHWzs = await DMONDETHRewardspTwbiM.updateReward.call(addressCqIFAUI, {from: accounts[3]});
		await DMONDETHRewardspTwbiM.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardspTwbiM.updateReward.call(addressCqIFAUI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardspTwbiM = await DMONDETHRewards.new({from: accounts[1]});
		const addressdbE1GR0 = "0x0000000000000000000000000000000000000001"
		const addressRznJLBF = await DMONDETHRewardspTwbiM.setRewardDistribution.call(addressdbE1GR0, {from: accounts[1]});
		await DMONDETHRewardspTwbiM.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardspTwbiM.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsUQOgMQ6 = await DMONDETHRewards.new({from: accounts[2]});
		const addressJMIiJAa = accounts[1]
		const uintuTWXblu = BigInt("1271")
		await DMONDETHRewardsUQOgMQ6.getReward.call({from: accounts[5]});
		const uint256dugVqER = await DMONDETHRewardsUQOgMQ6.totalSupply.call({from: accounts[5]});
		const addressS4d7Z5h = await DMONDETHRewardsUQOgMQ6.setStakeAddress.call(addressJMIiJAa, {from: accounts[2]});
		const uint256QeCpnyw = await DMONDETHRewardsUQOgMQ6.notifyRewardAmount.call(uintuTWXblu, {from: accounts[2]});

		await expect(DMONDETHRewardsUQOgMQ6.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})