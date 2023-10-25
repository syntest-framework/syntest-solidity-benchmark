const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsQRfwNP5 = await DMONDETHRewards.new({from: accounts[4]});
		const addressiUwsxP = accounts[4]
		const addressTOdB5G = accounts[4]
		const uint256YBFJmjv = await DMONDETHRewardsQRfwNP5.totalSupply.call({from: accounts[4]});
		const uint256FdFD6fj = await DMONDETHRewardsQRfwNP5.balanceOf.call(addressiUwsxP, {from: accounts[4]});
		const uint256LHdGb5c = await DMONDETHRewardsQRfwNP5.earned.call(addressTOdB5G, {from: accounts[4]});

		assert.equal(uint256FdFD6fj, BigInt("0"))
		assert.equal(uint256LHdGb5c, BigInt("0"))
		assert.equal(uint256YBFJmjv, BigInt("0"))
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsPg5UZzq = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressr7opa8u = accounts[2]
		const uint256oQ0O3z4 = await DMONDETHRewardsPg5UZzq.lastTimeRewardApplicable.call({from: accounts[1]});
		await DMONDETHRewardsPg5UZzq.getReward.call({from: accounts[2]});
		const addressle9Zug = await DMONDETHRewardsPg5UZzq.setRewardDistribution.call(addressr7opa8u, {from: accounts[3]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUdrN4X = await DMONDETHRewards.new({from: accounts[0]});
		const uinted5NhV = BigInt("255")
		const uint256z5ROMZ = await DMONDETHRewardsTUdrN4X.stake.call(uinted5NhV, {from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsTUdrN4X.getReward.call({from: accounts[3]});

		await expect(DMONDETHRewardsTUdrN4X.stake.call(uinted5NhV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTLte5v = await DMONDETHRewards.new({from: accounts[0]});
		const addressCY6kDN = accounts[4]
		const uint256D2KWGPj = await DMONDETHRewardsTLte5v.balanceOf.call(addressCY6kDN, {from: accounts[0]});
		await DMONDETHRewardsTLte5v.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zUIilGK = await DMONDETHRewardsTLte5v.totalSupply.call({from: accounts[2]});

		assert.equal(uint256D2KWGPj, BigInt("0"))
		await expect(DMONDETHRewardsTLte5v.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsfFAOaov = await DMONDETHRewards.new({from: accounts[1]});
		const uintTQwwwOZ = BigInt("334")
		await DMONDETHRewardsfFAOaov.exit.call({from: accounts[5]});
		const uint256NBeyNZL = await DMONDETHRewardsfFAOaov.stake.call(uintTQwwwOZ, {from: accounts[4]});
		await DMONDETHRewardsfFAOaov.getReward.call({from: accounts[3]});

		await expect(DMONDETHRewardsfFAOaov.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsahj8nC = await DMONDETHRewards.new({from: accounts[5]});
		const uintMSthUp9 = BigInt("1603")
		const addressniUtiW = accounts[5]
		const uintcSvyguH = BigInt("2014")
		const addressI6Ktzu0 = await DMONDETHRewardsahj8nC.owner.call({from: accounts[1]});
		const uint256sD3Qltp = await DMONDETHRewardsahj8nC.withdraw.call(uintMSthUp9, {from: accounts[0]});
		const addressoqUfGw = await DMONDETHRewardsahj8nC.setRewardDistribution.call(addressniUtiW, {from: accounts[0]});
		const uint256MKKKcEv = await DMONDETHRewardsahj8nC.stake.call(uintcSvyguH, {from: accounts[1]});

		assert.equal(addressI6Ktzu0, 0x528dD33EF91e954889Ac759133651Cc7A14fE0Ed)
		await expect(DMONDETHRewardsahj8nC.withdraw.call(uintMSthUp9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsdpIgfVe = await DMONDETHRewards.new({from: accounts[5]});
		const uintWmbn955 = BigInt("25")
		const addressgJ3KmIp = accounts[3]
		const uint256xvhb3cu = await DMONDETHRewardsdpIgfVe.notifyRewardAmount.call(uintWmbn955, {from: accounts[3]});
		const uint256gymXsiP = await DMONDETHRewardsdpIgfVe.balanceOf.call(addressgJ3KmIp, {from: accounts[4]});
		const uint256d9Bcmm8 = await DMONDETHRewardsdpIgfVe.totalSupply.call({from: accounts[2]});
		const boolOuoA2ei = await DMONDETHRewardsdpIgfVe.isOwner.call({from: accounts[1]});

		await expect(DMONDETHRewardsdpIgfVe.notifyRewardAmount.call(uintWmbn955, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsahj8nC = await DMONDETHRewards.new({from: accounts[5]});
		const addressNu8w8LQ = "0x0000000000000000000000000000000000000001"
		const uintq8ux8HN = BigInt("1581")
		const addressRLs0IVG = accounts[5]
		const uintxH1fvAo = BigInt("2014")
		const boolk5Ptjkl = await DMONDETHRewardsahj8nC.isOwner.call({from: accounts[5]});
		const addressI6Ktzu0 = await DMONDETHRewardsahj8nC.owner.call({from: accounts[1]});
		const uint256M3y4Af2 = await DMONDETHRewardsahj8nC.earned.call(addressNu8w8LQ, {from: accounts[3]});
		const uint256sD3Qltp = await DMONDETHRewardsahj8nC.withdraw.call(uintq8ux8HN, {from: accounts[0]});
		const addressoqUfGw = await DMONDETHRewardsahj8nC.setRewardDistribution.call(addressRLs0IVG, {from: accounts[0]});
		const uint256MKKKcEv = await DMONDETHRewardsahj8nC.stake.call(uintxH1fvAo, {from: accounts[1]});

		assert.equal(addressI6Ktzu0, 0x528dD33EF91e954889Ac759133651Cc7A14fE0Ed)
		assert.equal(boolk5Ptjkl, true)
		assert.equal(uint256M3y4Af2, BigInt("0"))
		await expect(DMONDETHRewardsahj8nC.withdraw.call(uintq8ux8HN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsahj8nC = await DMONDETHRewards.new({from: accounts[5]});
		const addresszygCPYc = accounts[3]
		const addressbzjykNu = accounts[1]
		const addressP9HrVY = accounts[5]
		const uintszQR86v = BigInt("2014")
		const addressI6Ktzu0 = await DMONDETHRewardsahj8nC.owner.call({from: accounts[1]});
		const addresspntIQDG = await DMONDETHRewardsahj8nC.setStakeAddress.call(addresszygCPYc, {from: accounts[4]});
		const uint256k77WRD5 = await DMONDETHRewardsahj8nC.balanceOf.call(addressbzjykNu, {from: accounts[4]});
		const addressoqUfGw = await DMONDETHRewardsahj8nC.setRewardDistribution.call(addressP9HrVY, {from: accounts[0]});
		const uint256MKKKcEv = await DMONDETHRewardsahj8nC.stake.call(uintszQR86v, {from: accounts[1]});

		assert.equal(addressI6Ktzu0, 0x528dD33EF91e954889Ac759133651Cc7A14fE0Ed)
		await expect(DMONDETHRewardsahj8nC.setStakeAddress.call(addresszygCPYc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsfFAOaov = await DMONDETHRewards.new({from: accounts[1]});
		const uintOooruFy = BigInt("334")
		const uint256LFizYel = await DMONDETHRewardsfFAOaov.remainingReward.call({from: accounts[1]});
		await DMONDETHRewardsfFAOaov.exit.call({from: accounts[5]});
		const uint256NBeyNZL = await DMONDETHRewardsfFAOaov.stake.call(uintOooruFy, {from: accounts[4]});
		await DMONDETHRewardsfFAOaov.getReward.call({from: accounts[3]});

		await expect(DMONDETHRewardsfFAOaov.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsCOe82J6 = await DMONDETHRewards.new({from: accounts[3]});
		const addressqOwZMpZ = accounts[4]
		const uint256CJ7j73 = await DMONDETHRewardsCOe82J6.balanceOf.call(addressqOwZMpZ, {from: accounts[3]});
		const booluF3V4gk = await DMONDETHRewardsCOe82J6.isOwner.call({from: accounts[1]});
		await DMONDETHRewardsCOe82J6.getReward.call({from: accounts[2]});
		const uint256X6aPSQZ = await DMONDETHRewardsCOe82J6.remainingReward.call({from: accounts[0]});
		const addressUpT5FXM = await DMONDETHRewardsCOe82J6.owner.call({from: accounts[4]});

		assert.equal(booluF3V4gk, false)
		assert.equal(uint256CJ7j73, BigInt("0"))
		await expect(DMONDETHRewardsCOe82J6.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsCOe82J6 = await DMONDETHRewards.new({from: accounts[3]});
		const addressr2nvRYv = accounts[2]
		const addressI35H6yB = accounts[4]
		const booluF3V4gk = await DMONDETHRewardsCOe82J6.isOwner.call({from: accounts[1]});
		await DMONDETHRewardsCOe82J6.getReward.call({from: accounts[2]});
		const addressd5pvcmU = await DMONDETHRewardsCOe82J6.setStakeAddress.call(addressr2nvRYv, {from: accounts[3]});
		const addressgDB6YSR = await DMONDETHRewardsCOe82J6.updateReward.call(addressI35H6yB, {from: accounts[0]});
		const addressUpT5FXM = await DMONDETHRewardsCOe82J6.owner.call({from: accounts[4]});

		assert.equal(booluF3V4gk, false)
		await expect(DMONDETHRewardsCOe82J6.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsCOe82J6 = await DMONDETHRewards.new({from: accounts[3]});
		const addressgx5lCkU = accounts[5]
		const addressW97UXUK = await DMONDETHRewardsCOe82J6.setRewardDistribution.call(addressgx5lCkU, {from: accounts[3]});
		const booluF3V4gk = await DMONDETHRewardsCOe82J6.isOwner.call({from: accounts[1]});
		await DMONDETHRewardsCOe82J6.getReward.call({from: accounts[2]});
		const addressUpT5FXM = await DMONDETHRewardsCOe82J6.owner.call({from: accounts[4]});

		assert.equal(booluF3V4gk, false)
		await expect(DMONDETHRewardsCOe82J6.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsCOfxHr = await DMONDETHRewards.new({from: accounts[3]});
		const addresstMCoASb = accounts[0]
		const uintYGE2a1m = BigInt("1643")
		const addresswKmyal = accounts[3]
		const uintkB8Cf7 = BigInt("1257")
		const uint256aaOl1vM = await DMONDETHRewardsCOfxHr.balanceOf.call(addresstMCoASb, {from: accounts[1]});
		const uint256NDqaEU4 = await DMONDETHRewardsCOfxHr.notifyRewardAmount.call(uintYGE2a1m, {from: accounts[3]});
		const addresshzcwVUS = await DMONDETHRewardsCOfxHr.setRewardDistribution.call(addresswKmyal, {from: accounts[1]});
		await DMONDETHRewardsCOfxHr.renounceOwnership.call({from: accounts[1]});
		const uint256mtESRf = await DMONDETHRewardsCOfxHr.setStartTime.call(uintkB8Cf7, {from: accounts[5]});

		assert.equal(uint256aaOl1vM, BigInt("0"))
		await expect(DMONDETHRewardsCOfxHr.setRewardDistribution.call(addresswKmyal, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsCOe82J6 = await DMONDETHRewards.new({from: accounts[3]});
		const addressICEUTan = accounts[0]
		await DMONDETHRewardsCOe82J6.getReward.call({from: accounts[2]});
		const addressEpvMDzj = await DMONDETHRewardsCOe82J6.transferOwnership.call(addressICEUTan, {from: accounts[3]});

		await expect(DMONDETHRewardsCOe82J6.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsCOe82J6 = await DMONDETHRewards.new({from: accounts[3]});
		await DMONDETHRewardsCOe82J6.getReward.call({from: accounts[2]});
		await DMONDETHRewardsCOe82J6.renounceOwnership.call({from: accounts[3]});
		const uint256Weit56 = await DMONDETHRewardsCOe82J6.totalSupply.call({from: accounts[1]});

		await expect(DMONDETHRewardsCOe82J6.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsCOfxHr = await DMONDETHRewards.new({from: accounts[3]});
		const uintvxK1JzT = BigInt("1855")
		const addressKg84Aq7 = accounts[1]
		const addressVATTONj = accounts[2]
		const uintHrrDGA = BigInt("1643")
		const addressguH2Aj2 = accounts[3]
		const uintSwQEQmf = BigInt("1257")
		const uint256VGPwSYv = await DMONDETHRewardsCOfxHr.setStartTime.call(uintvxK1JzT, {from: accounts[3]});
		const uint256aaOl1vM = await DMONDETHRewardsCOfxHr.balanceOf.call(addressKg84Aq7, {from: accounts[1]});
		const uint256ol0EXSC = await DMONDETHRewardsCOfxHr.totalSupply.call({from: accounts[2]});
		const addresseEuPyDd = await DMONDETHRewardsCOfxHr.updateReward.call(addressVATTONj, {from: accounts[5]});
		const uint256NDqaEU4 = await DMONDETHRewardsCOfxHr.notifyRewardAmount.call(uintHrrDGA, {from: accounts[3]});
		const addresshzcwVUS = await DMONDETHRewardsCOfxHr.setRewardDistribution.call(addressguH2Aj2, {from: accounts[1]});
		await DMONDETHRewardsCOfxHr.renounceOwnership.call({from: accounts[1]});
		const uint256mtESRf = await DMONDETHRewardsCOfxHr.setStartTime.call(uintSwQEQmf, {from: accounts[5]});

		assert.equal(uint256aaOl1vM, BigInt("0"))
		assert.equal(uint256ol0EXSC, BigInt("0"))
		await expect(DMONDETHRewardsCOfxHr.updateReward.call(addressVATTONj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})