const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsP3wftkd = await DMONDETHRewards.new({from: accounts[3]});
		const addressXMOU45F = accounts[1]
//		await DMONDETHRewardsP3wftkd.onlyOwner.call({from: accounts[2]});
//		const uint256tcXR8a = await DMONDETHRewardsP3wftkd.rewardPerToken.call({from: accounts[0]});
//		const address0wvW87 = await DMONDETHRewardsP3wftkd.transferOwnership.call(addressXMOU45F, {from: accounts[0]});

		await expect(DMONDETHRewardsP3wftkd.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardskRCcKIQ = await DMONDETHRewards.new({from: accounts[0]});
		const addressxX0Vgpa = accounts[4]
		const addressmBAfrdO = accounts[5]
//		const addressGmXrm1 = await DMONDETHRewardskRCcKIQ.setStakeAddress.call(addressxX0Vgpa, {from: accounts[3]});
//		const uint256hzsiy8 = await DMONDETHRewardskRCcKIQ.rewardPerToken.call({from: accounts[3]});
//		const uint256ItxQdqg = await DMONDETHRewardskRCcKIQ.totalSupply.call({from: accounts[2]});
//		const addresskaWbCng = await DMONDETHRewardskRCcKIQ.setStakeAddress.call(addressmBAfrdO, {from: accounts[1]});

		await expect(DMONDETHRewardskRCcKIQ.setStakeAddress.call(addressxX0Vgpa, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsPrX7Rbf = await DMONDETHRewards.new({from: accounts[3]});
		const uintlMV62Cx = BigInt("1278")
//		await DMONDETHRewardsPrX7Rbf.exit.call({from: accounts[5]});
//		const addressSltFFC = await DMONDETHRewardsPrX7Rbf.owner.call({from: accounts[0]});
//		const uint256QQOWN4 = await DMONDETHRewardsPrX7Rbf.rewardPerToken.call({from: accounts[1]});
//		await DMONDETHRewardsPrX7Rbf.renounceOwnership.call({from: accounts[4]});
//		const uint256TIoBqUN = await DMONDETHRewardsPrX7Rbf.setStartTime.call(uintlMV62Cx, {from: accounts[0]});

		await expect(DMONDETHRewardsPrX7Rbf.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsMTnfuYP = await DMONDETHRewards.new({from: accounts[1]});
		const addressNPUFP5h = accounts[0]
		const addresszZIvZRV = accounts[2]
//		await DMONDETHRewardsMTnfuYP.getReward.call({from: accounts[3]});
//		const uint256RfvxaQ8 = await DMONDETHRewardsMTnfuYP.earned.call(addressNPUFP5h, {from: accounts[1]});
//		await DMONDETHRewardsMTnfuYP.onlyRewardDistribution.call({from: accounts[1]});
//		const uint256E90TWE = await DMONDETHRewardsMTnfuYP.rewardPerToken.call({from: accounts[3]});
//		const addressn0Q28K3 = await DMONDETHRewardsMTnfuYP.setStakeAddress.call(addresszZIvZRV, {from: accounts[4]});

		await expect(DMONDETHRewardsMTnfuYP.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsPMn8ffG = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressvYH2gsf = accounts[1]
		const uint256GXLYe3v = await DMONDETHRewardsPMn8ffG.balanceOf.call(addressvYH2gsf, {from: accounts[0]});
		const uint256chlPZy = await DMONDETHRewardsPMn8ffG.rewardPerToken.call({from: accounts[0]});
		await DMONDETHRewardsPMn8ffG.checkStart.call({from: accounts[4]});
		await DMONDETHRewardsPMn8ffG.getReward.call({from: accounts[4]});
		const uint256GFOxNyr = await DMONDETHRewardsPMn8ffG.totalSupply.call({from: accounts[5]});
		await DMONDETHRewardsPMn8ffG.onlyRewardDistribution.call({from: accounts[1]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsMTnfuYP = await DMONDETHRewards.new({from: accounts[1]});
		const uintvLzC5Kg = BigInt("1938")
		const addressjHfXB8x = accounts[0]
		const addressH4LVUk = accounts[2]
		const addressykBUuv2 = await DMONDETHRewardsMTnfuYP.owner.call({from: accounts[2]});
//		const uint256Udztb3B = await DMONDETHRewardsMTnfuYP.stake.call(uintvLzC5Kg, {from: accounts[0]});
//		await DMONDETHRewardsMTnfuYP.getReward.call({from: accounts[3]});
//		const uint256RfvxaQ8 = await DMONDETHRewardsMTnfuYP.earned.call(addressjHfXB8x, {from: accounts[1]});
//		await DMONDETHRewardsMTnfuYP.onlyRewardDistribution.call({from: accounts[1]});
//		const uint256E90TWE = await DMONDETHRewardsMTnfuYP.rewardPerToken.call({from: accounts[3]});
//		const addressn0Q28K3 = await DMONDETHRewardsMTnfuYP.setStakeAddress.call(addressH4LVUk, {from: accounts[4]});

		assert.equal(addressykBUuv2, 0xf2F58Ee24dA7b812e8Eb81e5F574D917E13cA6b8)
		await expect(DMONDETHRewardsMTnfuYP.stake.call(uintvLzC5Kg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsFPPxzRE = await DMONDETHRewards.new({from: accounts[2]});
		const uintblLg7PL = BigInt("137")
//		const uint256KDtSXO9 = await DMONDETHRewardsFPPxzRE.withdraw.call(uintblLg7PL, {from: accounts[5]});
//		await DMONDETHRewardsFPPxzRE.onlyOwner.call({from: accounts[5]});
//		const bool6XSttD = await DMONDETHRewardsFPPxzRE.isOwner.call({from: accounts[0]});

		await expect(DMONDETHRewardsFPPxzRE.withdraw.call(uintblLg7PL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsbb4Aq02 = await DMONDETHRewards.new({from: accounts[3]});
		const addressb0aqEgU = accounts[1]
		const uintlggv5m = BigInt("375")
		const uint256cJow0Vu = await DMONDETHRewardsbb4Aq02.earned.call(addressb0aqEgU, {from: accounts[1]});
//		const uint256niFSv90 = await DMONDETHRewardsbb4Aq02.notifyRewardAmount.call(uintlggv5m, {from: accounts[2]});

		assert.equal(uint256cJow0Vu, BigInt("0"))
		await expect(DMONDETHRewardsbb4Aq02.notifyRewardAmount.call(uintlggv5m, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsbb4Aq02 = await DMONDETHRewards.new({from: accounts[3]});
		const addressf298SXP = accounts[1]
		const addressTUfxFZY = accounts[0]
//		const uint256Zb2u3uJ = await DMONDETHRewardsbb4Aq02.remainingReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256cJow0Vu = await DMONDETHRewardsbb4Aq02.earned.call(addressf298SXP, {from: accounts[1]});
//		const addressS16kOqN = await DMONDETHRewardsbb4Aq02.updateReward.call(addressTUfxFZY, {from: accounts[0]});

		await expect(DMONDETHRewardsbb4Aq02.remainingReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsJkddLtE = await DMONDETHRewards.new({from: accounts[4]});
		const addressWhpJfzf = accounts[4]
		const addressxytEBbm = accounts[3]
		const addressgpHx7bV = await DMONDETHRewardsJkddLtE.setRewardDistribution.call(addressWhpJfzf, {from: accounts[4]});
		const uint256Osja2p0 = await DMONDETHRewardsJkddLtE.earned.call(addressxytEBbm, {from: accounts[4]});
		const uint256v1anneH = await DMONDETHRewardsJkddLtE.rewardPerToken.call({from: accounts[0]});
//		await DMONDETHRewardsJkddLtE.exit.call({from: accounts[4]});

		assert.equal(uint256Osja2p0, BigInt("0"))
		assert.equal(uint256v1anneH, BigInt("0"))
		await expect(DMONDETHRewardsJkddLtE.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsbb4Aq02 = await DMONDETHRewards.new({from: accounts[3]});
		const addressRHcoQBz = accounts[2]
		const addressUTswx2N = accounts[4]
		const uint256cJow0Vu = await DMONDETHRewardsbb4Aq02.earned.call(addressRHcoQBz, {from: accounts[1]});
		const addressjC8VkpU = await DMONDETHRewardsbb4Aq02.transferOwnership.call(addressUTswx2N, {from: accounts[3]});

		assert.equal(uint256cJow0Vu, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsbb4Aq02 = await DMONDETHRewards.new({from: accounts[3]});
		const addressBqqEGOV = accounts[4]
		const addressXHa1XTc = accounts[2]
		const addressxV9yxPO = await DMONDETHRewardsbb4Aq02.setStakeAddress.call(addressBqqEGOV, {from: accounts[3]});
		const uint256cJow0Vu = await DMONDETHRewardsbb4Aq02.earned.call(addressXHa1XTc, {from: accounts[1]});

		assert.equal(uint256cJow0Vu, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsbb4Aq02 = await DMONDETHRewards.new({from: accounts[3]});
		const uintcFTo4y4 = BigInt("1658")
		const addressoTt7Son = accounts[1]
		const uint256bbywy8h = await DMONDETHRewardsbb4Aq02.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256Swn7ze = await DMONDETHRewardsbb4Aq02.notifyRewardAmount.call(uintcFTo4y4, {from: accounts[3]});
		const uint256cJow0Vu = await DMONDETHRewardsbb4Aq02.earned.call(addressoTt7Son, {from: accounts[1]});

		assert.equal(uint256bbywy8h, BigInt("0"))
		assert.equal(uint256cJow0Vu, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsMTnfuYP = await DMONDETHRewards.new({from: accounts[1]});
//		await DMONDETHRewardsMTnfuYP.renounceOwnership.call({from: accounts[1]});
//		await DMONDETHRewardsMTnfuYP.getReward.call({from: accounts[3]});

		await expect(DMONDETHRewardsMTnfuYP.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsbb4Aq02 = await DMONDETHRewards.new({from: accounts[3]});
		const uintV73WsrD = BigInt("1000")
		const uintyeLR1NR = BigInt("1658")
		const addressjlOfyne = accounts[1]
		const uint256szqCklR = await DMONDETHRewardsbb4Aq02.setStartTime.call(uintV73WsrD, {from: accounts[3]});
		const uint256bbywy8h = await DMONDETHRewardsbb4Aq02.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256Swn7ze = await DMONDETHRewardsbb4Aq02.notifyRewardAmount.call(uintyeLR1NR, {from: accounts[3]});
		const uint256cJow0Vu = await DMONDETHRewardsbb4Aq02.earned.call(addressjlOfyne, {from: accounts[1]});

		assert.equal(uint256bbywy8h, BigInt("0"))
		assert.equal(uint256cJow0Vu, BigInt("0"))
	});
})