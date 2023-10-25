const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTXeWkOn = await DMONDETHRewards.new({from: accounts[3]});
		const uintJXkwC6Y = BigInt("599")
//		await DMONDETHRewardsTXeWkOn.onlyOwner.call({from: accounts[1]});
//		await DMONDETHRewardsTXeWkOn.checkStart.call({from: accounts[1]});
//		const uint256ASe6a0m = await DMONDETHRewardsTXeWkOn.setStartTime.call(uintJXkwC6Y, {from: accounts[1]});
//		const uint256lAFoGEo = await DMONDETHRewardsTXeWkOn.totalSupply.call({from: accounts[3]});
//		const addressUbdG0uk = await DMONDETHRewardsTXeWkOn.owner.call({from: accounts[3]});

		await expect(DMONDETHRewardsTXeWkOn.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsBt9iz6 = await DMONDETHRewards.new({from: accounts[4]});
		const uintAcHzyCB = BigInt("686")
//		await DMONDETHRewardsBt9iz6.renounceOwnership.call({from: accounts[4]});
//		const uint256hUJWaII = await DMONDETHRewardsBt9iz6.setStartTime.call(uintAcHzyCB, {from: accounts[1]});
//		const boolmSbLDac = await DMONDETHRewardsBt9iz6.isOwner.call({from: accounts[1]});
//		await DMONDETHRewardsBt9iz6.checkStart.call({from: accounts[3]});

		await expect(DMONDETHRewardsBt9iz6.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsu00jqTD = await DMONDETHRewards.new({from: accounts[2]});
		const addressAWBWedp = accounts[1]
		const uintisJpXSq = BigInt("1641")
		const addressbZmHcUr = accounts[1]
		const addressn0Z7ByQ = accounts[5]
//		await DMONDETHRewardsu00jqTD.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256EA5hxW = await DMONDETHRewardsu00jqTD.balanceOf.call(addressAWBWedp, {from: accounts[5]});
//		await DMONDETHRewardsu00jqTD.checkStart.call({from: accounts[3]});
//		const uint256YUz4l5 = await DMONDETHRewardsu00jqTD.withdraw.call(uintisJpXSq, {from: accounts[2]});
//		const uint256UNEwVC0 = await DMONDETHRewardsu00jqTD.earned.call(addressbZmHcUr, {from: accounts[2]});
//		const addressPmgZ4sx = await DMONDETHRewardsu00jqTD.setStakeAddress.call(addressn0Z7ByQ, {from: accounts[2]});

		await expect(DMONDETHRewardsu00jqTD.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsfIbSq2b = await DMONDETHRewards.new({from: accounts[0]});
//		const uint256cAd7RO1 = await DMONDETHRewardsfIbSq2b.remainingReward.call({from: accounts[1]});
//		await DMONDETHRewardsfIbSq2b.onlyOwner.call({from: accounts[4]});
//		const uint256RuwWXou = await DMONDETHRewardsfIbSq2b.rewardPerToken.call({from: accounts[0]});

		await expect(DMONDETHRewardsfIbSq2b.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsb4KY7ih = await DMONDETHRewards.new({from: accounts[4]});
		const uintye2Joqf = BigInt("1024")
//		const uint256zArSpqQ = await DMONDETHRewardsb4KY7ih.stake.call(uintye2Joqf, {from: accounts[4]});
//		await DMONDETHRewardsb4KY7ih.onlyRewardDistribution.call({from: accounts[1]});

		await expect(DMONDETHRewardsb4KY7ih.stake.call(uintye2Joqf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsUgAwOIy = await DMONDETHRewards.new({from: accounts[5]});
		const uintymCAPMQ = BigInt("745")
		const uint256S9k0e5R = await DMONDETHRewardsUgAwOIy.rewardPerToken.call({from: accounts[0]});
//		const uint256p0c62fN = await DMONDETHRewardsUgAwOIy.withdraw.call(uintymCAPMQ, {from: accounts[0]});
//		await DMONDETHRewardsUgAwOIy.checkStart.call({from: accounts[3]});
//		await DMONDETHRewardsUgAwOIy.renounceOwnership.call({from: accounts[1]});

		assert.equal(uint256S9k0e5R, BigInt("0"))
		await expect(DMONDETHRewardsUgAwOIy.withdraw.call(uintymCAPMQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsb4KY7ih = await DMONDETHRewards.new({from: accounts[4]});
		const uintGFIHeif = BigInt("62")
		const addressOPn7VYA = accounts[5]
		const uintXBbmps = BigInt("1372")
		const uintEBeBlmA = BigInt("989")
//		await DMONDETHRewardsb4KY7ih.getReward.call({from: accounts[3]});
//		const uint256vgDtOh6 = await DMONDETHRewardsb4KY7ih.stake.call(uintGFIHeif, {from: accounts[4]});
//		const uint256BIQAqY = await DMONDETHRewardsb4KY7ih.balanceOf.call(addressOPn7VYA, {from: accounts[1]});
//		const uint256bw22Qy9 = await DMONDETHRewardsb4KY7ih.withdraw.call(uintXBbmps, {from: accounts[2]});
//		const uint256zArSpqQ = await DMONDETHRewardsb4KY7ih.stake.call(uintEBeBlmA, {from: accounts[4]});

		await expect(DMONDETHRewardsb4KY7ih.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsb4KY7ih = await DMONDETHRewards.new({from: accounts[4]});
		const uintaf9S9NC = BigInt("672")
		const uintH2yPsZT = BigInt("62")
		const addressvTFHmQ2 = accounts[5]
		const addressVTRKs5G = accounts[3]
		const uintL1pX2mV = BigInt("1372")
		const uintYrEtS4x = BigInt("989")
//		const uint256zLtc7c = await DMONDETHRewardsb4KY7ih.notifyRewardAmount.call(uintaf9S9NC, {from: accounts[0]});
//		await DMONDETHRewardsb4KY7ih.getReward.call({from: accounts[3]});
//		const uint256vgDtOh6 = await DMONDETHRewardsb4KY7ih.stake.call(uintH2yPsZT, {from: accounts[4]});
//		const uint256BIQAqY = await DMONDETHRewardsb4KY7ih.balanceOf.call(addressvTFHmQ2, {from: accounts[1]});
//		const addressQPLf7IV = await DMONDETHRewardsb4KY7ih.setRewardDistribution.call(addressVTRKs5G, {from: accounts[4]});
//		const uint256bw22Qy9 = await DMONDETHRewardsb4KY7ih.withdraw.call(uintL1pX2mV, {from: accounts[2]});
//		const uint256zArSpqQ = await DMONDETHRewardsb4KY7ih.stake.call(uintYrEtS4x, {from: accounts[4]});

		await expect(DMONDETHRewardsb4KY7ih.notifyRewardAmount.call(uintaf9S9NC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsEVOSQg2 = await DMONDETHRewards.new({from: accounts[3]});
		const addressMkzpWop = accounts[5]
		const uintJaL2rRp = BigInt("1672")
		const uint256gIsgifa = await DMONDETHRewardsEVOSQg2.balanceOf.call(addressMkzpWop, {from: accounts[3]});
		const uint256YVCfVsi = await DMONDETHRewardsEVOSQg2.notifyRewardAmount.call(uintJaL2rRp, {from: accounts[3]});

		assert.equal(uint256gIsgifa, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsEVOSQg2 = await DMONDETHRewards.new({from: accounts[3]});
		const addressagIoAC = accounts[0]
		const uintcz4VqfU = BigInt("69")
		const uintlaDH86 = BigInt("1665")
		const addressld4i8L = await DMONDETHRewardsEVOSQg2.setStakeAddress.call(addressagIoAC, {from: accounts[3]});
//		const uint256aANLDWg = await DMONDETHRewardsEVOSQg2.stake.call(uintcz4VqfU, {from: accounts[3]});
//		const uint256YVCfVsi = await DMONDETHRewardsEVOSQg2.notifyRewardAmount.call(uintlaDH86, {from: accounts[3]});

		await expect(DMONDETHRewardsEVOSQg2.stake.call(uintcz4VqfU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsb4KY7ih = await DMONDETHRewards.new({from: accounts[4]});
		const addressBAzKrJN = await DMONDETHRewardsb4KY7ih.owner.call({from: accounts[0]});
//		await DMONDETHRewardsb4KY7ih.getReward.call({from: accounts[3]});

		assert.equal(addressBAzKrJN, 0x8E20c2c441CAd73F88e734f2Aa25364302bD95A9)
		await expect(DMONDETHRewardsb4KY7ih.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsQu3tRYR = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressQ97cbAz = accounts[1]
		const uintKvZnMmx = BigInt("1911")
		const uint256WOLFMPh = await DMONDETHRewardsQu3tRYR.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256SMDqV0 = await DMONDETHRewardsQu3tRYR.remainingReward.call({from: accounts[0]});
		await DMONDETHRewardsQu3tRYR.onlyOwner.call({from: accounts[1]});
		const addressRYfO4Ms = await DMONDETHRewardsQu3tRYR.transferOwnership.call(addressQ97cbAz, {from: accounts[1]});
		const uint2569Gl6Rf = await DMONDETHRewardsQu3tRYR.notifyRewardAmount.call(uintKvZnMmx, {from: accounts[2]});
		const addressgb09rSB = await DMONDETHRewardsQu3tRYR.owner.call({from: accounts[3]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsEVOSQg2 = await DMONDETHRewards.new({from: accounts[3]});
		const addresstx4oEiy = accounts[4]
		const uintNCvUb8P = BigInt("1662")
		const addressWC026yy = await DMONDETHRewardsEVOSQg2.setRewardDistribution.call(addresstx4oEiy, {from: accounts[3]});
		const uint256YVCfVsi = await DMONDETHRewardsEVOSQg2.notifyRewardAmount.call(uintNCvUb8P, {from: accounts[3]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsb4KY7ih = await DMONDETHRewards.new({from: accounts[4]});
		const addressMJFgZN = accounts[4]
		const uintyQSqoy7 = BigInt("71")
//		await DMONDETHRewardsb4KY7ih.getReward.call({from: accounts[3]});
//		const uint256omCRO8G = await DMONDETHRewardsb4KY7ih.earned.call(addressMJFgZN, {from: accounts[0]});
//		const uint256XPGHgoD = await DMONDETHRewardsb4KY7ih.setStartTime.call(uintyQSqoy7, {from: accounts[4]});

		await expect(DMONDETHRewardsb4KY7ih.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsb4KY7ih = await DMONDETHRewards.new({from: accounts[4]});
		const uintWmlE9r = BigInt("902")
		const addressbjMLzNz = accounts[2]
		const addressW2KOOmu = accounts[2]
//		await DMONDETHRewardsb4KY7ih.getReward.call({from: accounts[3]});
//		const uint256QJlnPIu = await DMONDETHRewardsb4KY7ih.notifyRewardAmount.call(uintWmlE9r, {from: accounts[4]});
//		const uint256ic0QBqR = await DMONDETHRewardsb4KY7ih.earned.call(addressbjMLzNz, {from: accounts[2]});
//		const addresszZqaiBx = await DMONDETHRewardsb4KY7ih.transferOwnership.call(addressW2KOOmu, {from: accounts[4]});

		await expect(DMONDETHRewardsb4KY7ih.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})