const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsvTBJHao = await DMONDETHRewards.new({from: accounts[2]});
		const uintxXLUCE1 = BigInt("792")
		const uintGTKPWJp = BigInt("1227")
		const uint256N0GgZ3r = await DMONDETHRewardsvTBJHao.withdraw.call(uintxXLUCE1, {from: accounts[1]});
		const uint256V0pSt3v = await DMONDETHRewardsvTBJHao.withdraw.call(uintGTKPWJp, {from: accounts[4]});
		await DMONDETHRewardsvTBJHao.checkStart.call({from: accounts[2]});
		await DMONDETHRewardsvTBJHao.exit.call({from: accounts[3]});
		await DMONDETHRewardsvTBJHao.checkStart.call({from: accounts[1]});

		await expect(DMONDETHRewardsvTBJHao.withdraw.call(uintxXLUCE1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsPhSU4j5 = await DMONDETHRewards.new({from: accounts[3]});
		const addressThm9Z9 = accounts[3]
		const addresscFRaUFE = accounts[5]
		const addressHqZWfnj = accounts[3]
		const addressTJ0KRfy = await DMONDETHRewardsPhSU4j5.transferOwnership.call(addressThm9Z9, {from: accounts[0]});
		const uint256Y6tLKNO = await DMONDETHRewardsPhSU4j5.balanceOf.call(addresscFRaUFE, {from: accounts[1]});
		const addressOifoUB6 = await DMONDETHRewardsPhSU4j5.setRewardDistribution.call(addressHqZWfnj, {from: accounts[0]});
		await DMONDETHRewardsPhSU4j5.onlyRewardDistribution.call({from: accounts[4]});
		const boolUlYHJJC = await DMONDETHRewardsPhSU4j5.isOwner.call({from: accounts[1]});

		await expect(DMONDETHRewardsPhSU4j5.transferOwnership.call(addressThm9Z9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsPHsgKqD = await DMONDETHRewards.new({from: accounts[5]});
		const uintx4M7Wik = BigInt("1638")
		const uintwkyz0Wl = BigInt("929")
		await DMONDETHRewardsPHsgKqD.getReward.call({from: accounts[2]});
		await DMONDETHRewardsPHsgKqD.getReward.call({from: accounts[2]});
		const uint256RMoRx9O = await DMONDETHRewardsPHsgKqD.setStartTime.call(uintx4M7Wik, {from: accounts[4]});
		await DMONDETHRewardsPHsgKqD.getReward.call({from: accounts[2]});
		const uint256WcO4aAM = await DMONDETHRewardsPHsgKqD.withdraw.call(uintwkyz0Wl, {from: accounts[1]});

		await expect(DMONDETHRewardsPHsgKqD.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsWkbd9U = await DMONDETHRewards.new({from: accounts[5]});
		const uintaIsQte = BigInt("1560")
		const uint256oaqaN52 = await DMONDETHRewardsWkbd9U.stake.call(uintaIsQte, {from: accounts[2]});
		await DMONDETHRewardsWkbd9U.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256htKebIj = await DMONDETHRewardsWkbd9U.lastTimeRewardApplicable.call({from: accounts[1]});
		await DMONDETHRewardsWkbd9U.getReward.call({from: accounts[3]});

		await expect(DMONDETHRewardsWkbd9U.stake.call(uintaIsQte, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardso2T6t1l = await DMONDETHRewards.new({from: accounts[0]});
		const uintmLxc0Bg = BigInt("1209")
		await DMONDETHRewardso2T6t1l.exit.call({from: accounts[3]});
		const uint256tzz3T3u = await DMONDETHRewardso2T6t1l.notifyRewardAmount.call(uintmLxc0Bg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardso2T6t1l.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsD41iGOm = await DMONDETHRewards.new({from: accounts[2]});
		const uintyZzAdwJ = BigInt("1733")
		await DMONDETHRewardsD41iGOm.checkStart.call({from: accounts[4]});
		const uint256VOHijh4 = await DMONDETHRewardsD41iGOm.notifyRewardAmount.call(uintyZzAdwJ, {from: accounts[0]});

		await expect(DMONDETHRewardsD41iGOm.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsnOKoRKX = await DMONDETHRewards.new({from: accounts[4]});
		const addressyIPOfAt = accounts[2]
		const uintIZLGkci = BigInt("872")
		const addresscn7BEHQ = accounts[3]
		const uintQKmAZhC = BigInt("980")
		const uintPLSbL2H = BigInt("895")
		const addressLAXC3pE = await DMONDETHRewardsnOKoRKX.setRewardDistribution.call(addressyIPOfAt, {from: accounts[4]});
		const uint256ZgShHsz = await DMONDETHRewardsnOKoRKX.stake.call(uintIZLGkci, {from: accounts[4]});
		const addressEzTgKup = await DMONDETHRewardsnOKoRKX.updateReward.call(addresscn7BEHQ, {from: accounts[4]});
		const uint256uxu9ta7 = await DMONDETHRewardsnOKoRKX.notifyRewardAmount.call(uintQKmAZhC, {from: accounts[3]});
		const uint256HMllkyw = await DMONDETHRewardsnOKoRKX.stake.call(uintPLSbL2H, {from: accounts[0]});

		await expect(DMONDETHRewardsnOKoRKX.stake.call(uintIZLGkci, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardso2T6t1l = await DMONDETHRewards.new({from: accounts[0]});
		const uintQH7TJI0 = BigInt("1209")
		const uint256tzz3T3u = await DMONDETHRewardso2T6t1l.notifyRewardAmount.call(uintQH7TJI0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardso2T6t1l.notifyRewardAmount.call(uintQH7TJI0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsMbV3OvO = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressnecSZWf = accounts[3]
		const uintldVorhK = BigInt("281")
		const uint256Hx5a13Q = await DMONDETHRewardsMbV3OvO.balanceOf.call(addressnecSZWf, {from: accounts[3]});
		const uint256mneBJUN = await DMONDETHRewardsMbV3OvO.notifyRewardAmount.call(uintldVorhK, {from: accounts[0]});
		const boolJ0DG4wy = await DMONDETHRewardsMbV3OvO.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsMbV3OvO.getReward.call({from: accounts[4]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardso2T6t1l = await DMONDETHRewards.new({from: accounts[0]});
		const addressdnwQY7 = await DMONDETHRewardso2T6t1l.owner.call({from: accounts[3]});
		await DMONDETHRewardso2T6t1l.exit.call({from: accounts[3]});

		assert.equal(addressdnwQY7, 0x6393Cd807257023540E5c750a290c48083885c46)
		await expect(DMONDETHRewardso2T6t1l.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsVfkT4l = await DMONDETHRewards.new({from: accounts[4]});
		const uint256Feb9RQL = await DMONDETHRewardsVfkT4l.remainingReward.call({from: accounts[1]});
		await DMONDETHRewardsVfkT4l.getReward.call({from: accounts[0]});

		await expect(DMONDETHRewardsVfkT4l.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardscGouYue = await DMONDETHRewards.new({from: accounts[1]});
		const addressq9R00Xa = accounts[2]
		const addressI9U9j0 = accounts[2]
		const uintJlWCIwq = BigInt("1693")
		const uintSR5sNdw = BigInt("501")
		const addresshWScVCR = accounts[3]
		const uinthUPDV99 = BigInt("1010")
		const uintxNlatB = BigInt("27")
		const uintui3aMrh = BigInt("138")
		const addressffWKLLl = await DMONDETHRewardscGouYue.setStakeAddress.call(addressq9R00Xa, {from: accounts[1]});
		await DMONDETHRewardscGouYue.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const addressXGc1us = await DMONDETHRewardscGouYue.setRewardDistribution.call(addressI9U9j0, {from: accounts[1]});
		const uint256DtVtjaZ = await DMONDETHRewardscGouYue.stake.call(uintJlWCIwq, {from: accounts[2]});
		const uint256N4wGwx = await DMONDETHRewardscGouYue.stake.call(uintSR5sNdw, {from: "0x0000000000000000000000000000000000000001"});
		const addressQkWMbo = await DMONDETHRewardscGouYue.transferOwnership.call(addresshWScVCR, {from: accounts[4]});
		const uint256JTmgwVB = await DMONDETHRewardscGouYue.notifyRewardAmount.call(uinthUPDV99, {from: accounts[5]});
		const uint256aH2Xl6w = await DMONDETHRewardscGouYue.stake.call(uintxNlatB, {from: accounts[4]});
		const uint256pRp8bOh = await DMONDETHRewardscGouYue.stake.call(uintui3aMrh, {from: accounts[0]});

		await expect(DMONDETHRewardscGouYue.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardscGouYue = await DMONDETHRewards.new({from: accounts[1]});
		const uintw8Wr9MC = BigInt("1780")
		const uintDyO1lOi = BigInt("521")
		const uintt70G4Hz = BigInt("1997")
		const uintJVRHf6T = BigInt("1010")
		const uintvQ4fz0e = BigInt("27")
		await DMONDETHRewardscGouYue.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256B6n5NO0 = await DMONDETHRewardscGouYue.notifyRewardAmount.call(uintw8Wr9MC, {from: accounts[1]});
		const uint256N4wGwx = await DMONDETHRewardscGouYue.stake.call(uintDyO1lOi, {from: "0x0000000000000000000000000000000000000001"});
		const uint256usuoPhR = await DMONDETHRewardscGouYue.setStartTime.call(uintt70G4Hz, {from: accounts[3]});
		const uint256JTmgwVB = await DMONDETHRewardscGouYue.notifyRewardAmount.call(uintJVRHf6T, {from: accounts[5]});
		const uint256aH2Xl6w = await DMONDETHRewardscGouYue.stake.call(uintvQ4fz0e, {from: accounts[4]});

		await expect(DMONDETHRewardscGouYue.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardscGouYue = await DMONDETHRewards.new({from: accounts[1]});
		const uintiqBnpMJ = BigInt("1780")
		const addresshFgNeGN = accounts[3]
		const uintUw6RmJj = BigInt("521")
		const uintqTHA8JR = BigInt("1997")
		const uintaP0PZxJ = BigInt("1010")
		const uintWcLuWJk = BigInt("27")
		await DMONDETHRewardscGouYue.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256B6n5NO0 = await DMONDETHRewardscGouYue.notifyRewardAmount.call(uintiqBnpMJ, {from: accounts[1]});
		const addresss1LDFU = await DMONDETHRewardscGouYue.transferOwnership.call(addresshFgNeGN, {from: accounts[1]});
		const uint256N4wGwx = await DMONDETHRewardscGouYue.stake.call(uintUw6RmJj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256usuoPhR = await DMONDETHRewardscGouYue.setStartTime.call(uintqTHA8JR, {from: accounts[3]});
		const uint256JTmgwVB = await DMONDETHRewardscGouYue.notifyRewardAmount.call(uintaP0PZxJ, {from: accounts[5]});
		const uint256aH2Xl6w = await DMONDETHRewardscGouYue.stake.call(uintWcLuWJk, {from: accounts[4]});

		await expect(DMONDETHRewardscGouYue.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardscGouYue = await DMONDETHRewards.new({from: accounts[1]});
		const uints3JO7NX = BigInt("93")
		const uintDf7z8nk = BigInt("521")
		const uintgEE0iyt = BigInt("326")
		const addressPhdtNHJ = accounts[1]
		const addressl4RfvGJ = "0x0000000000000000000000000000000000000001"
		const uintj4DmOwI = BigInt("27")
		await DMONDETHRewardscGouYue.renounceOwnership.call({from: accounts[1]});
		await DMONDETHRewardscGouYue.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256F9rsfhl = await DMONDETHRewardscGouYue.notifyRewardAmount.call(uints3JO7NX, {from: accounts[1]});
		const uint256N4wGwx = await DMONDETHRewardscGouYue.stake.call(uintDf7z8nk, {from: "0x0000000000000000000000000000000000000001"});
		const boolQwBPr7B = await DMONDETHRewardscGouYue.isOwner.call({from: accounts[0]});
		const uint256oZ9ZIlR = await DMONDETHRewardscGouYue.setStartTime.call(uintgEE0iyt, {from: accounts[2]});
		const addresslEkyB2V = await DMONDETHRewardscGouYue.setRewardDistribution.call(addressPhdtNHJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256D5Ui520 = await DMONDETHRewardscGouYue.earned.call(addressl4RfvGJ, {from: accounts[0]});
		const uint256aH2Xl6w = await DMONDETHRewardscGouYue.stake.call(uintj4DmOwI, {from: accounts[4]});

		await expect(DMONDETHRewardscGouYue.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})