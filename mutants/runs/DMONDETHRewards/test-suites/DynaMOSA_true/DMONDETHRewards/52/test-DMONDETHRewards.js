const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsglXZMRn = await DMONDETHRewards.new({from: accounts[5]});
		const addressZLLlAMz = accounts[5]
		const addressVhq9QO = await DMONDETHRewardsglXZMRn.updateReward.call(addressZLLlAMz, {from: accounts[3]});
		const uint256jfvTr2U = await DMONDETHRewardsglXZMRn.lastTimeRewardApplicable.call({from: accounts[0]});
		const boolEOJpxuP = await DMONDETHRewardsglXZMRn.isOwner.call({from: accounts[3]});
		await DMONDETHRewardsglXZMRn.onlyOwner.call({from: accounts[0]});
		await DMONDETHRewardsglXZMRn.onlyRewardDistribution.call({from: accounts[1]});

		await expect(DMONDETHRewardsglXZMRn.updateReward.call(addressZLLlAMz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsOXJ7oN9 = await DMONDETHRewards.new({from: accounts[2]});
		const addressenFfnkr = accounts[4]
		const addressylCRkp = "0x0000000000000000000000000000000000000001"
		const uintqYyLavC = BigInt("316")
		const uintERRYoZe = BigInt("632")
		const addressfVwEuNz = await DMONDETHRewardsOXJ7oN9.transferOwnership.call(addressenFfnkr, {from: accounts[3]});
		const addressERppSPW = await DMONDETHRewardsOXJ7oN9.setRewardDistribution.call(addressylCRkp, {from: accounts[0]});
		await DMONDETHRewardsOXJ7oN9.exit.call({from: accounts[4]});
		const uint256QpmkhWp = await DMONDETHRewardsOXJ7oN9.stake.call(uintqYyLavC, {from: accounts[1]});
		const uint256BecYmCE = await DMONDETHRewardsOXJ7oN9.notifyRewardAmount.call(uintERRYoZe, {from: accounts[2]});

		await expect(DMONDETHRewardsOXJ7oN9.transferOwnership.call(addressenFfnkr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsHwMPr46 = await DMONDETHRewards.new({from: accounts[2]});
		const uintavosOHx = BigInt("9")
		const booldsBzE5r = await DMONDETHRewardsHwMPr46.isOwner.call({from: accounts[4]});
		const uint256PF986WI = await DMONDETHRewardsHwMPr46.remainingReward.call({from: accounts[3]});
		const uint256GVc5tiV = await DMONDETHRewardsHwMPr46.remainingReward.call({from: accounts[5]});
		const boolttgvfs9 = await DMONDETHRewardsHwMPr46.isOwner.call({from: accounts[0]});
		const uint256MZvs5d7 = await DMONDETHRewardsHwMPr46.stake.call(uintavosOHx, {from: accounts[4]});

		assert.equal(booldsBzE5r, false)
		await expect(DMONDETHRewardsHwMPr46.remainingReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjZE9T3S = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxlc80t2 = accounts[2]
		const addressRcYEnb9 = accounts[2]
		const uintqZnodH = BigInt("346")
		const uint256nKvPedR = await DMONDETHRewardsjZE9T3S.earned.call(addressxlc80t2, {from: accounts[4]});
		const addressvYOhGQi = await DMONDETHRewardsjZE9T3S.updateReward.call(addressRcYEnb9, {from: accounts[2]});
		const uint256Sc0hxet = await DMONDETHRewardsjZE9T3S.remainingReward.call({from: "0x0000000000000000000000000000000000000001"});
		const addressUX9V881 = await DMONDETHRewardsjZE9T3S.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256dsCckEO = await DMONDETHRewardsjZE9T3S.withdraw.call(uintqZnodH, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsC2vljs = await DMONDETHRewards.new({from: accounts[1]});
		const addresslLcD7T = "0x0000000000000000000000000000000000000001"
		const uintjEizxHe = BigInt("562")
		const addresswIEOiql = accounts[4]
		const uint256UlQjJhF = await DMONDETHRewardsC2vljs.totalSupply.call({from: accounts[1]});
		await DMONDETHRewardsC2vljs.renounceOwnership.call({from: accounts[3]});
		const addresspA8YyvD = await DMONDETHRewardsC2vljs.setStakeAddress.call(addresslLcD7T, {from: accounts[3]});
		const uint256y3FxwLT = await DMONDETHRewardsC2vljs.withdraw.call(uintjEizxHe, {from: accounts[3]});
		const addressaGyPl7n = await DMONDETHRewardsC2vljs.transferOwnership.call(addresswIEOiql, {from: accounts[3]});

		assert.equal(uint256UlQjJhF, BigInt("0"))
		await expect(DMONDETHRewardsC2vljs.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsR0RquqT = await DMONDETHRewards.new({from: accounts[4]});
		const addresss0a7rLg = accounts[4]
		const addressxbgiHdY = accounts[2]
		const addressHHh9yT = await DMONDETHRewardsR0RquqT.setRewardDistribution.call(addresss0a7rLg, {from: accounts[4]});
		const uint256GYgdrNp = await DMONDETHRewardsR0RquqT.earned.call(addressxbgiHdY, {from: accounts[0]});
		const uint256LWFUFnK = await DMONDETHRewardsR0RquqT.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressDJXmiek = await DMONDETHRewardsR0RquqT.owner.call({from: accounts[2]});
		const addressVKcYMZR = await DMONDETHRewardsR0RquqT.owner.call({from: accounts[4]});
		const uint256cap3K1 = await DMONDETHRewardsR0RquqT.totalSupply.call({from: accounts[3]});

		assert.equal(addressDJXmiek, 0xe590cFa788f8Fc2Be52B3eb46b8EE0f315647Edd)
		assert.equal(addressVKcYMZR, 0xe590cFa788f8Fc2Be52B3eb46b8EE0f315647Edd)
		assert.equal(uint256GYgdrNp, BigInt("0"))
		assert.equal(uint256LWFUFnK, BigInt("0"))
		assert.equal(uint256cap3K1, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsR0RquqT = await DMONDETHRewards.new({from: accounts[4]});
		const addressArW5KcY = accounts[4]
		const addresslHfWMJS = accounts[2]
		const uintK08tVes = BigInt("301")
		const addressHHh9yT = await DMONDETHRewardsR0RquqT.setRewardDistribution.call(addressArW5KcY, {from: accounts[4]});
		const uint256GYgdrNp = await DMONDETHRewardsR0RquqT.earned.call(addresslHfWMJS, {from: accounts[0]});
		const uint256LWFUFnK = await DMONDETHRewardsR0RquqT.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressDJXmiek = await DMONDETHRewardsR0RquqT.owner.call({from: accounts[2]});
		const uint256a09gOt9 = await DMONDETHRewardsR0RquqT.setStartTime.call(uintK08tVes, {from: accounts[4]});
		const addressVKcYMZR = await DMONDETHRewardsR0RquqT.owner.call({from: accounts[4]});
		const uint256cap3K1 = await DMONDETHRewardsR0RquqT.totalSupply.call({from: accounts[3]});

		assert.equal(addressDJXmiek, 0xe590cFa788f8Fc2Be52B3eb46b8EE0f315647Edd)
		assert.equal(addressVKcYMZR, 0xe590cFa788f8Fc2Be52B3eb46b8EE0f315647Edd)
		assert.equal(uint256GYgdrNp, BigInt("0"))
		assert.equal(uint256LWFUFnK, BigInt("0"))
		assert.equal(uint256cap3K1, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsC2vljs = await DMONDETHRewards.new({from: accounts[1]});
		const addressH6MDLN = "0x0000000000000000000000000000000000000002"
		const uintkjOm0kW = BigInt("562")
		const addressF1XM7ec = accounts[4]
		const uint256UlQjJhF = await DMONDETHRewardsC2vljs.totalSupply.call({from: accounts[1]});
		await DMONDETHRewardsC2vljs.getReward.call({from: accounts[2]});
		await DMONDETHRewardsC2vljs.renounceOwnership.call({from: accounts[3]});
		const addresspA8YyvD = await DMONDETHRewardsC2vljs.setStakeAddress.call(addressH6MDLN, {from: accounts[3]});
		const uint256y3FxwLT = await DMONDETHRewardsC2vljs.withdraw.call(uintkjOm0kW, {from: accounts[3]});
		const uint256dn9cRcX = await DMONDETHRewardsC2vljs.rewardPerToken.call({from: accounts[1]});
		const addressaGyPl7n = await DMONDETHRewardsC2vljs.transferOwnership.call(addressF1XM7ec, {from: accounts[3]});

		assert.equal(uint256UlQjJhF, BigInt("0"))
		await expect(DMONDETHRewardsC2vljs.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsR0RquqT = await DMONDETHRewards.new({from: accounts[4]});
		const addressZYhd8pb = accounts[4]
		const uinty5z69xz = BigInt("1175")
		const addressX9uYQi = accounts[2]
		const addressHHh9yT = await DMONDETHRewardsR0RquqT.setRewardDistribution.call(addressZYhd8pb, {from: accounts[4]});
		const uint256EkL0Mkr = await DMONDETHRewardsR0RquqT.withdraw.call(uinty5z69xz, {from: accounts[1]});
		const uint256GYgdrNp = await DMONDETHRewardsR0RquqT.earned.call(addressX9uYQi, {from: accounts[0]});
		const uint256LWFUFnK = await DMONDETHRewardsR0RquqT.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressDJXmiek = await DMONDETHRewardsR0RquqT.owner.call({from: accounts[2]});
		const addressVKcYMZR = await DMONDETHRewardsR0RquqT.owner.call({from: accounts[4]});
		const uint256cap3K1 = await DMONDETHRewardsR0RquqT.totalSupply.call({from: accounts[3]});

		await expect(DMONDETHRewardsR0RquqT.withdraw.call(uinty5z69xz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsR0RquqT = await DMONDETHRewards.new({from: accounts[4]});
		const addressIi8CQOo = accounts[4]
		const uint1TRPwv = BigInt("240")
		const addressuth9mDx = accounts[2]
		await DMONDETHRewardsR0RquqT.exit.call({from: accounts[2]});
		const addressHHh9yT = await DMONDETHRewardsR0RquqT.setRewardDistribution.call(addressIi8CQOo, {from: accounts[4]});
		const uint256jEGh9iL = await DMONDETHRewardsR0RquqT.notifyRewardAmount.call(uint1TRPwv, {from: accounts[1]});
		const uint256GYgdrNp = await DMONDETHRewardsR0RquqT.earned.call(addressuth9mDx, {from: accounts[0]});
		const uint256LWFUFnK = await DMONDETHRewardsR0RquqT.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressDJXmiek = await DMONDETHRewardsR0RquqT.owner.call({from: accounts[2]});
		const addressVKcYMZR = await DMONDETHRewardsR0RquqT.owner.call({from: accounts[4]});

		await expect(DMONDETHRewardsR0RquqT.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardskIpEkbR = await DMONDETHRewards.new({from: accounts[2]});
		const addressKJIpyu4 = accounts[0]
		const uintMWCntQZ = BigInt("764")
		const uint256AJ8NjtF = await DMONDETHRewardskIpEkbR.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256Jn5ooTV = await DMONDETHRewardskIpEkbR.lastTimeRewardApplicable.call({from: accounts[2]});
		const addressIF6ViPl = await DMONDETHRewardskIpEkbR.transferOwnership.call(addressKJIpyu4, {from: accounts[2]});
		const uint256FjnTWdv = await DMONDETHRewardskIpEkbR.stake.call(uintMWCntQZ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256AJ8NjtF, BigInt("0"))
		assert.equal(uint256Jn5ooTV, BigInt("0"))
		await expect(DMONDETHRewardskIpEkbR.stake.call(uintMWCntQZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardskIpEkbR = await DMONDETHRewards.new({from: accounts[2]});
		const address1pjXzD = accounts[0]
		const uintuPSLGdb = BigInt("764")
		const uint256AJ8NjtF = await DMONDETHRewardskIpEkbR.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256qzNl8d6 = await DMONDETHRewardskIpEkbR.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256Jn5ooTV = await DMONDETHRewardskIpEkbR.lastTimeRewardApplicable.call({from: accounts[2]});
		await DMONDETHRewardskIpEkbR.renounceOwnership.call({from: accounts[2]});
		const addressIF6ViPl = await DMONDETHRewardskIpEkbR.transferOwnership.call(address1pjXzD, {from: accounts[2]});
		const uint256FjnTWdv = await DMONDETHRewardskIpEkbR.stake.call(uintuPSLGdb, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mpAmnvk = await DMONDETHRewardskIpEkbR.lastTimeRewardApplicable.call({from: accounts[4]});

		assert.equal(uint256AJ8NjtF, BigInt("0"))
		assert.equal(uint256Jn5ooTV, BigInt("0"))
		assert.equal(uint256qzNl8d6, BigInt("0"))
		await expect(DMONDETHRewardskIpEkbR.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsD08DqEQ = await DMONDETHRewards.new({from: accounts[5]});
		const uintk9MRH2 = BigInt("618")
		const addressavvTTS1 = accounts[1]
		const addressQZoUMOL = accounts[2]
		const uintdquNwEZ = BigInt("1373")
		const uint256NA7Z9oS = await DMONDETHRewardsD08DqEQ.notifyRewardAmount.call(uintk9MRH2, {from: accounts[1]});
		const uint256bYLpMAQ = await DMONDETHRewardsD08DqEQ.earned.call(addressavvTTS1, {from: accounts[1]});
		await DMONDETHRewardsD08DqEQ.onlyOwner.call({from: accounts[2]});
		const addressvpGKMIu = await DMONDETHRewardsD08DqEQ.transferOwnership.call(addressQZoUMOL, {from: "0x0000000000000000000000000000000000000001"});
		const uint256T6THygi = await DMONDETHRewardsD08DqEQ.notifyRewardAmount.call(uintdquNwEZ, {from: accounts[4]});

		await expect(DMONDETHRewardsD08DqEQ.notifyRewardAmount.call(uintk9MRH2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardslXyh4Kk = await DMONDETHRewards.new({from: accounts[3]});
		const addressxBwa75O = accounts[2]
		const uintLpwlPJU = BigInt("1850")
		const uintb0OhUL1 = BigInt("231")
		const addressrJIYETu = await DMONDETHRewardslXyh4Kk.setStakeAddress.call(addressxBwa75O, {from: accounts[3]});
		const uint256Vz8qexb = await DMONDETHRewardslXyh4Kk.stake.call(uintLpwlPJU, {from: accounts[3]});
		const uint256fY5U7Ei = await DMONDETHRewardslXyh4Kk.setStartTime.call(uintb0OhUL1, {from: accounts[4]});

		await expect(DMONDETHRewardslXyh4Kk.stake.call(uintLpwlPJU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardskIpEkbR = await DMONDETHRewards.new({from: accounts[2]});
		const uintjJkYgHz = BigInt("401")
		const uintJ93woko = BigInt("776")
		await DMONDETHRewardskIpEkbR.getReward.call({from: accounts[4]});
		const uint256WU8Fo96 = await DMONDETHRewardskIpEkbR.notifyRewardAmount.call(uintjJkYgHz, {from: accounts[2]});
		const uint256FjnTWdv = await DMONDETHRewardskIpEkbR.stake.call(uintJ93woko, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardskIpEkbR.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})