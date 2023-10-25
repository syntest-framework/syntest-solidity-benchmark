const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardspLlC1pU = await DMONDETHRewards.new({from: accounts[5]});
		const addresshiKVySy = accounts[5]
		const uintmNV4ya5 = BigInt("1631")
		const addressj7S3606 = "0x0000000000000000000000000000000000000001"
		const addressNvkQDJR = "0x0000000000000000000000000000000000000001"
		const addressuYHuUX0 = await DMONDETHRewardspLlC1pU.setRewardDistribution.call(addresshiKVySy, {from: accounts[1]});
		const uint256mWw0Jeh = await DMONDETHRewardspLlC1pU.stake.call(uintmNV4ya5, {from: accounts[5]});
		const uint256lOsN8Po = await DMONDETHRewardspLlC1pU.earned.call(addressj7S3606, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wAjgyi = await DMONDETHRewardspLlC1pU.balanceOf.call(addressNvkQDJR, {from: accounts[3]});
		await DMONDETHRewardspLlC1pU.getReward.call({from: accounts[3]});
		await DMONDETHRewardspLlC1pU.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardspLlC1pU.setRewardDistribution.call(addresshiKVySy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsduEC4fF = await DMONDETHRewards.new({from: accounts[0]});
		const uintMQdl7zf = BigInt("2019")
		const addressub855Ae = accounts[1]
		const uintZs7mdCm = BigInt("1440")
		await DMONDETHRewardsduEC4fF.getReward.call({from: accounts[1]});
		const uint256L2hVfk = await DMONDETHRewardsduEC4fF.stake.call(uintMQdl7zf, {from: accounts[3]});
		await DMONDETHRewardsduEC4fF.renounceOwnership.call({from: accounts[2]});
		const addressqUCpFQd = await DMONDETHRewardsduEC4fF.updateReward.call(addressub855Ae, {from: accounts[4]});
		const uint256T4B6Epf = await DMONDETHRewardsduEC4fF.stake.call(uintZs7mdCm, {from: accounts[4]});

		await expect(DMONDETHRewardsduEC4fF.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsKsNN76 = await DMONDETHRewards.new({from: accounts[2]});
		const addressEEIDzTJ = accounts[1]
		const addressm40UFm5 = accounts[2]
		const uint256kk5AUt = await DMONDETHRewardsKsNN76.balanceOf.call(addressEEIDzTJ, {from: accounts[0]});
		await DMONDETHRewardsKsNN76.checkStart.call({from: accounts[5]});
		const boolVi3eyLL = await DMONDETHRewardsKsNN76.isOwner.call({from: accounts[3]});
		const addressCzUyuaq = await DMONDETHRewardsKsNN76.setRewardDistribution.call(addressm40UFm5, {from: accounts[2]});
		const uint256WPN7Qet = await DMONDETHRewardsKsNN76.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256kk5AUt, BigInt("0"))
		await expect(DMONDETHRewardsKsNN76.checkStart.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsdlBGVIG = await DMONDETHRewards.new({from: accounts[2]});
		const address4rJieO = "0x0000000000000000000000000000000000000001"
		const uintsKWyIPm = BigInt("1721")
		const addressYRNOOCC = accounts[2]
		await DMONDETHRewardsdlBGVIG.exit.call({from: accounts[2]});
		const addressCRVfxN = await DMONDETHRewardsdlBGVIG.transferOwnership.call(address4rJieO, {from: accounts[1]});
		const uint256MdAgPQo = await DMONDETHRewardsdlBGVIG.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256lj7jqz3 = await DMONDETHRewardsdlBGVIG.withdraw.call(uintsKWyIPm, {from: accounts[1]});
		const uint256O9x6ZcT = await DMONDETHRewardsdlBGVIG.lastTimeRewardApplicable.call({from: accounts[5]});
		const addresskRhHqY7 = await DMONDETHRewardsdlBGVIG.transferOwnership.call(addressYRNOOCC, {from: accounts[3]});

		await expect(DMONDETHRewardsdlBGVIG.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsqkNokRZ = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressUjRKyKC = accounts[2]
		const addressbE2Svsl = accounts[0]
		const uint256dgrujs = await DMONDETHRewardsqkNokRZ.earned.call(addressUjRKyKC, {from: accounts[4]});
		const addresszzELFXs = await DMONDETHRewardsqkNokRZ.transferOwnership.call(addressbE2Svsl, {from: accounts[1]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsyrWlGhL = await DMONDETHRewards.new({from: accounts[4]});
		const uintz5Pdmj = BigInt("476")
		const addressQMoHA3 = accounts[3]
		await DMONDETHRewardsyrWlGhL.getReward.call({from: accounts[2]});
		const uint256ktjxpPd = await DMONDETHRewardsyrWlGhL.rewardPerToken.call({from: accounts[0]});
		const booloGIaNP = await DMONDETHRewardsyrWlGhL.isOwner.call({from: accounts[2]});
		const uint256Igk2ugd = await DMONDETHRewardsyrWlGhL.withdraw.call(uintz5Pdmj, {from: accounts[4]});
		const addressq6gBX1t = await DMONDETHRewardsyrWlGhL.updateReward.call(addressQMoHA3, {from: accounts[1]});

		await expect(DMONDETHRewardsyrWlGhL.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXB3gDhB = await DMONDETHRewards.new({from: accounts[0]});
		const uintkLwwkCC = BigInt("1913")
		const uint256xNPixTd = await DMONDETHRewardsXB3gDhB.notifyRewardAmount.call(uintkLwwkCC, {from: accounts[2]});
		await DMONDETHRewardsXB3gDhB.exit.call({from: accounts[2]});
		const uint256HJ2soGC = await DMONDETHRewardsXB3gDhB.totalSupply.call({from: accounts[5]});
		const boolspZQPg = await DMONDETHRewardsXB3gDhB.isOwner.call({from: accounts[2]});
		const uint256Z9bIJa7 = await DMONDETHRewardsXB3gDhB.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(DMONDETHRewardsXB3gDhB.notifyRewardAmount.call(uintkLwwkCC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsduEC4fF = await DMONDETHRewards.new({from: accounts[0]});
		const addressc0dMXuU = accounts[1]
		const uintUK1sxjB = BigInt("2019")
		const addressdR08BpP = accounts[1]
		const uintCIOcjlw = BigInt("1440")
		const addressqafX0T = await DMONDETHRewardsduEC4fF.setRewardDistribution.call(addressc0dMXuU, {from: accounts[0]});
		await DMONDETHRewardsduEC4fF.getReward.call({from: accounts[1]});
		const uint256L2hVfk = await DMONDETHRewardsduEC4fF.stake.call(uintUK1sxjB, {from: accounts[3]});
		await DMONDETHRewardsduEC4fF.renounceOwnership.call({from: accounts[2]});
		const addressqUCpFQd = await DMONDETHRewardsduEC4fF.updateReward.call(addressdR08BpP, {from: accounts[4]});
		const uint256T4B6Epf = await DMONDETHRewardsduEC4fF.stake.call(uintCIOcjlw, {from: accounts[4]});

		await expect(DMONDETHRewardsduEC4fF.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsduEC4fF = await DMONDETHRewards.new({from: accounts[0]});
		const uintikfsvTK = BigInt("2047")
		const uinth7GYzmX = BigInt("1440")
		await DMONDETHRewardsduEC4fF.renounceOwnership.call({from: accounts[0]});
		const uint256L2hVfk = await DMONDETHRewardsduEC4fF.stake.call(uintikfsvTK, {from: accounts[3]});
		await DMONDETHRewardsduEC4fF.renounceOwnership.call({from: accounts[2]});
		const uint256T4B6Epf = await DMONDETHRewardsduEC4fF.stake.call(uinth7GYzmX, {from: accounts[4]});

		await expect(DMONDETHRewardsduEC4fF.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsX7q4Wdc = await DMONDETHRewards.new({from: accounts[1]});
		const uint25686xXAw = await DMONDETHRewardsX7q4Wdc.remainingReward.call({from: accounts[0]});
		const uint256nXMDnWA = await DMONDETHRewardsX7q4Wdc.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(DMONDETHRewardsX7q4Wdc.remainingReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsduEC4fF = await DMONDETHRewards.new({from: accounts[0]});
		const uintm8Be7ej = BigInt("2047")
		const addressiZsV6m6 = accounts[0]
		const uints4KbbHH = BigInt("925")
		const uintzODNsR = BigInt("1440")
		await DMONDETHRewardsduEC4fF.getReward.call({from: accounts[1]});
		const addresst5qwmFY = await DMONDETHRewardsduEC4fF.owner.call({from: accounts[3]});
		const uint256L2hVfk = await DMONDETHRewardsduEC4fF.stake.call(uintm8Be7ej, {from: accounts[3]});
		await DMONDETHRewardsduEC4fF.renounceOwnership.call({from: accounts[2]});
		const uint256r0WL2BR = await DMONDETHRewardsduEC4fF.earned.call(addressiZsV6m6, {from: accounts[1]});
		const uint256e6aDhjX = await DMONDETHRewardsduEC4fF.setStartTime.call(uints4KbbHH, {from: accounts[2]});
		const uint256T4B6Epf = await DMONDETHRewardsduEC4fF.stake.call(uintzODNsR, {from: accounts[4]});

		await expect(DMONDETHRewardsduEC4fF.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsZ8kaiPw = await DMONDETHRewards.new({from: accounts[0]});
		const addressNrWkhGD = accounts[3]
		const uint256gKIZeZ = await DMONDETHRewardsZ8kaiPw.rewardPerToken.call({from: accounts[4]});
		const addressncWdxj = await DMONDETHRewardsZ8kaiPw.setStakeAddress.call(addressNrWkhGD, {from: accounts[0]});

		assert.equal(uint256gKIZeZ, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsduEC4fF = await DMONDETHRewards.new({from: accounts[0]});
		const addressVsX0HMM = accounts[5]
		const addresstAoaxzi = accounts[2]
		await DMONDETHRewardsduEC4fF.getReward.call({from: accounts[1]});
		const addressyfsjoIw = await DMONDETHRewardsduEC4fF.transferOwnership.call(addressVsX0HMM, {from: accounts[0]});
		const uint25675pq77 = await DMONDETHRewardsduEC4fF.balanceOf.call(addresstAoaxzi, {from: accounts[5]});

		await expect(DMONDETHRewardsduEC4fF.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsduEC4fF = await DMONDETHRewards.new({from: accounts[0]});
		const uintgY1PcCx = BigInt("1259")
		const addressTr3rBpK = await DMONDETHRewardsduEC4fF.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsduEC4fF.getReward.call({from: accounts[1]});
		const uint256IAJJJ0X = await DMONDETHRewardsduEC4fF.setStartTime.call(uintgY1PcCx, {from: accounts[0]});

		assert.equal(addressTr3rBpK, 0x91e44e70dB52fBC3A6ACF6EEB65e79027D09384D)
		await expect(DMONDETHRewardsduEC4fF.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsduEC4fF = await DMONDETHRewards.new({from: accounts[0]});
		const uintQPegE2g = BigInt("889")
		const uint256N4CYoc6 = await DMONDETHRewardsduEC4fF.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256vdf52Bh = await DMONDETHRewardsduEC4fF.notifyRewardAmount.call(uintQPegE2g, {from: accounts[0]});
		await DMONDETHRewardsduEC4fF.getReward.call({from: accounts[1]});

		assert.equal(uint256N4CYoc6, BigInt("0"))
		await expect(DMONDETHRewardsduEC4fF.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})