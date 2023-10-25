const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsR8tWyzn = await DMONDETHRewards.new({from: accounts[4]});
		const uintRnxHejM = BigInt("858")
		const uintcd1maos = BigInt("1668")
		const uint256WLchBpT = await DMONDETHRewardsR8tWyzn.stake.call(uintRnxHejM, {from: accounts[5]});
		await DMONDETHRewardsR8tWyzn.getReward.call({from: accounts[4]});
		await DMONDETHRewardsR8tWyzn.onlyOwner.call({from: accounts[3]});
		const uint256CtoHhv3 = await DMONDETHRewardsR8tWyzn.stake.call(uintcd1maos, {from: accounts[0]});

		await expect(DMONDETHRewardsR8tWyzn.stake.call(uintRnxHejM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsr4VORvg = await DMONDETHRewards.new({from: accounts[2]});
		const uintdb9xpT7 = BigInt("169")
		const uintsJXOiEG = BigInt("1460")
		await DMONDETHRewardsr4VORvg.checkStart.call({from: accounts[1]});
		const uint256noaGgou = await DMONDETHRewardsr4VORvg.withdraw.call(uintdb9xpT7, {from: accounts[0]});
		const uint256pMZ5cVt = await DMONDETHRewardsr4VORvg.totalSupply.call({from: accounts[1]});
		const uint256zDbW4Es = await DMONDETHRewardsr4VORvg.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256RmKINr8 = await DMONDETHRewardsr4VORvg.withdraw.call(uintsJXOiEG, {from: accounts[0]});

		await expect(DMONDETHRewardsr4VORvg.checkStart.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsYAy0WLa = await DMONDETHRewards.new({from: accounts[0]});
		const uintj43Ppd = BigInt("286")
		const addressZVI1K8T = accounts[2]
		const addressEbjOKS = "0x0000000000000000000000000000000000000001"
		const addressP4eiiKF = accounts[3]
		const uint256UaYW8pA = await DMONDETHRewardsYAy0WLa.withdraw.call(uintj43Ppd, {from: accounts[1]});
		const uint256rTcfTS4 = await DMONDETHRewardsYAy0WLa.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressJwwYat = await DMONDETHRewardsYAy0WLa.setRewardDistribution.call(addressZVI1K8T, {from: accounts[2]});
		const uint256KRyPB4r = await DMONDETHRewardsYAy0WLa.totalSupply.call({from: accounts[5]});
		const addressY0snY8n = await DMONDETHRewardsYAy0WLa.setStakeAddress.call(addressEbjOKS, {from: accounts[5]});
		const addressMETqY8i = await DMONDETHRewardsYAy0WLa.setRewardDistribution.call(addressP4eiiKF, {from: accounts[0]});

		await expect(DMONDETHRewardsYAy0WLa.withdraw.call(uintj43Ppd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardswLaHnx = await DMONDETHRewards.new({from: accounts[3]});
		await DMONDETHRewardswLaHnx.getReward.call({from: accounts[3]});
		const addresswzLdm53 = await DMONDETHRewardswLaHnx.owner.call({from: accounts[3]});

		await expect(DMONDETHRewardswLaHnx.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsmRLzdj4 = await DMONDETHRewards.new({from: accounts[3]});
		const uintx1SNUov = BigInt("521")
		const uintz5Ijtn = BigInt("1490")
		const addressedHXDKf = accounts[5]
		const uint256kqzNyaV = await DMONDETHRewardsmRLzdj4.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256J7rlAb = await DMONDETHRewardsmRLzdj4.setStartTime.call(uintx1SNUov, {from: accounts[1]});
		const uint256mNzs1iO = await DMONDETHRewardsmRLzdj4.notifyRewardAmount.call(uintz5Ijtn, {from: accounts[2]});
		const addressCaRQa2Z = await DMONDETHRewardsmRLzdj4.transferOwnership.call(addressedHXDKf, {from: accounts[1]});

		assert.equal(uint256kqzNyaV, BigInt("0"))
		await expect(DMONDETHRewardsmRLzdj4.setStartTime.call(uintx1SNUov, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsxEefdoN = await DMONDETHRewards.new({from: accounts[4]});
		const uinteKXm3bU = BigInt("737")
		const uint256waj3KeC = await DMONDETHRewardsxEefdoN.remainingReward.call({from: accounts[0]});
		const uint256vsi7cJS = await DMONDETHRewardsxEefdoN.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gmFvOiE = await DMONDETHRewardsxEefdoN.rewardPerToken.call({from: accounts[4]});
		await DMONDETHRewardsxEefdoN.onlyRewardDistribution.call({from: accounts[3]});
		const uint256qWQG9kL = await DMONDETHRewardsxEefdoN.withdraw.call(uinteKXm3bU, {from: accounts[4]});
		await DMONDETHRewardsxEefdoN.onlyRewardDistribution.call({from: accounts[2]});

		await expect(DMONDETHRewardsxEefdoN.remainingReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsGk1F4tR = await DMONDETHRewards.new({from: accounts[0]});
		const addressec6677J = accounts[2]
		const uint256P9wCAN1 = await DMONDETHRewardsGk1F4tR.rewardPerToken.call({from: accounts[4]});
		const addressx9QI6YF = await DMONDETHRewardsGk1F4tR.transferOwnership.call(addressec6677J, {from: accounts[0]});

		assert.equal(uint256P9wCAN1, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardswLaHnx = await DMONDETHRewards.new({from: accounts[3]});
		const uinteRfgz0M = BigInt("234")
		const addresswzLdm53 = await DMONDETHRewardswLaHnx.owner.call({from: accounts[3]});
		await DMONDETHRewardswLaHnx.exit.call({from: accounts[1]});
		const uint256MB51JYd = await DMONDETHRewardswLaHnx.withdraw.call(uinteRfgz0M, {from: accounts[3]});

		assert.equal(addresswzLdm53, 0x4E74a5ED59E386b9D5DBa07D7FDCc750bB625276)
		await expect(DMONDETHRewardswLaHnx.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardswLaHnx = await DMONDETHRewards.new({from: accounts[3]});
		const uintzmeHX0 = BigInt("1838")
		const addressYe7rktC = accounts[1]
		const addressxSl5szk = "0x0000000000000000000000000000000000000001"
		const uint256HwHCTsW = await DMONDETHRewardswLaHnx.notifyRewardAmount.call(uintzmeHX0, {from: accounts[3]});
		await DMONDETHRewardswLaHnx.onlyOwner.call({from: accounts[4]});
		const addresszLHQvZd = await DMONDETHRewardswLaHnx.setRewardDistribution.call(addressYe7rktC, {from: accounts[4]});
		const addressoVkzBw = await DMONDETHRewardswLaHnx.transferOwnership.call(addressxSl5szk, {from: accounts[4]});

		await expect(DMONDETHRewardswLaHnx.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardswLaHnx = await DMONDETHRewards.new({from: accounts[3]});
		const uintuNW9sga = BigInt("691")
		const uint256QyRPhha = await DMONDETHRewardswLaHnx.rewardPerToken.call({from: accounts[1]});
		const uint256Lvrz7Vl = await DMONDETHRewardswLaHnx.notifyRewardAmount.call(uintuNW9sga, {from: accounts[1]});
		await DMONDETHRewardswLaHnx.getReward.call({from: accounts[3]});

		assert.equal(uint256QyRPhha, BigInt("0"))
		await expect(DMONDETHRewardswLaHnx.notifyRewardAmount.call(uintuNW9sga, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardshaH32lJ = await DMONDETHRewards.new({from: accounts[5]});
		const addresskAmV9Ft = accounts[2]
		const uintZtd0UPI = BigInt("799")
		await DMONDETHRewardshaH32lJ.renounceOwnership.call({from: accounts[5]});
		const uint256gM6IiS8 = await DMONDETHRewardshaH32lJ.earned.call(addresskAmV9Ft, {from: accounts[2]});
		const uint256xpXoen = await DMONDETHRewardshaH32lJ.stake.call(uintZtd0UPI, {from: accounts[4]});
		await DMONDETHRewardshaH32lJ.exit.call({from: accounts[3]});
		await DMONDETHRewardshaH32lJ.checkStart.call({from: accounts[0]});
		const uint256XhJniTg = await DMONDETHRewardshaH32lJ.lastTimeRewardApplicable.call({from: accounts[2]});

		await expect(DMONDETHRewardshaH32lJ.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardswLaHnx = await DMONDETHRewards.new({from: accounts[3]});
		const uintqmkqxef = BigInt("1084")
		const uintiaWxzG0 = BigInt("176")
		const uint256NqFmAz0 = await DMONDETHRewardswLaHnx.setStartTime.call(uintqmkqxef, {from: accounts[3]});
		const addresswzLdm53 = await DMONDETHRewardswLaHnx.owner.call({from: accounts[3]});
		const uint256tzH7ZSP = await DMONDETHRewardswLaHnx.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256gikDf2L = await DMONDETHRewardswLaHnx.stake.call(uintiaWxzG0, {from: accounts[0]});

		assert.equal(addresswzLdm53, 0x4E74a5ED59E386b9D5DBa07D7FDCc750bB625276)
		assert.equal(uint256tzH7ZSP, BigInt("0"))
		await expect(DMONDETHRewardswLaHnx.stake.call(uintiaWxzG0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardswLaHnx = await DMONDETHRewards.new({from: accounts[3]});
		const addresswcRYDou = "0x0000000000000000000000000000000000000001"
		const addressQCCQQkD = await DMONDETHRewardswLaHnx.setStakeAddress.call(addresswcRYDou, {from: accounts[3]});
		await DMONDETHRewardswLaHnx.getReward.call({from: accounts[3]});

		await expect(DMONDETHRewardswLaHnx.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardswLaHnx = await DMONDETHRewards.new({from: accounts[3]});
		const addresslSndZY3 = accounts[3]
		const addresskJFO3GH = await DMONDETHRewardswLaHnx.setRewardDistribution.call(addresslSndZY3, {from: accounts[3]});
		await DMONDETHRewardswLaHnx.getReward.call({from: accounts[3]});
		const uint256uD0SFH = await DMONDETHRewardswLaHnx.totalSupply.call({from: accounts[3]});

		await expect(DMONDETHRewardswLaHnx.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewards2k0Cbz = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressPi8Ee5V = accounts[3]
		const uintqqztFDZ = BigInt("1151")
		const addressZexhGXC = await DMONDETHRewards2k0Cbz.setRewardDistribution.call(addressPi8Ee5V, {from: accounts[3]});
		const uint256I6eiipt = await DMONDETHRewards2k0Cbz.withdraw.call(uintqqztFDZ, {from: accounts[0]});
		const boolcxZypy1 = await DMONDETHRewards2k0Cbz.isOwner.call({from: accounts[4]});
	});
})