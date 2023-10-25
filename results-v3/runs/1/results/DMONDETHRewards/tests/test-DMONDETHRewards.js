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

		assert.equal(addressI6Ktzu0, 0x0365e5b1779E97193DeaE90f9376D1ef43e2BE99)
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
		const DMONDETHRewardsTUdrN4X = await DMONDETHRewards.new({from: accounts[0]});
		await DMONDETHRewardsTUdrN4X.getReward.call({from: accounts[3]});

		await expect(DMONDETHRewardsTUdrN4X.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUdrN4X = await DMONDETHRewards.new({from: accounts[0]});
		const addresstierwpb = accounts[4]
		const uintpcpDZl = BigInt("255")
		const addressObejbL7 = await DMONDETHRewardsTUdrN4X.transferOwnership.call(addresstierwpb, {from: accounts[4]});
		await DMONDETHRewardsTUdrN4X.onlyRewardDistribution.call({from: accounts[5]});
		const uint256z5ROMZ = await DMONDETHRewardsTUdrN4X.stake.call(uintpcpDZl, {from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsTUdrN4X.getReward.call({from: accounts[3]});

		await expect(DMONDETHRewardsTUdrN4X.transferOwnership.call(addresstierwpb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUdrN4X = await DMONDETHRewards.new({from: accounts[0]});
		const addressEZIMept = accounts[2]
		const uintQccRMPM = BigInt("856")
		await DMONDETHRewardsTUdrN4X.getReward.call({from: accounts[3]});
		const addressq1wWROl = await DMONDETHRewardsTUdrN4X.setRewardDistribution.call(addressEZIMept, {from: accounts[0]});
		const uint256uAA0pLC = await DMONDETHRewardsTUdrN4X.setStartTime.call(uintQccRMPM, {from: accounts[1]});
		await DMONDETHRewardsTUdrN4X.onlyRewardDistribution.call({from: accounts[0]});

		await expect(DMONDETHRewardsTUdrN4X.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUdrN4X = await DMONDETHRewards.new({from: accounts[0]});
		const uint256c0muHal = await DMONDETHRewardsTUdrN4X.remainingReward.call({from: accounts[3]});
		await DMONDETHRewardsTUdrN4X.getReward.call({from: accounts[3]});

		await expect(DMONDETHRewardsTUdrN4X.remainingReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUdrN4X = await DMONDETHRewards.new({from: accounts[0]});
		const addressKhrbGAr = accounts[0]
		const addressuiPrbcx = await DMONDETHRewardsTUdrN4X.setStakeAddress.call(addressKhrbGAr, {from: accounts[0]});
		await DMONDETHRewardsTUdrN4X.getReward.call({from: accounts[3]});

		await expect(DMONDETHRewardsTUdrN4X.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUdrN4X = await DMONDETHRewards.new({from: accounts[0]});
		const addressp9vd3Hr = accounts[2]
		await DMONDETHRewardsTUdrN4X.getReward.call({from: accounts[3]});
		const addressV5WEVD5 = await DMONDETHRewardsTUdrN4X.transferOwnership.call(addressp9vd3Hr, {from: accounts[0]});
		const uint256aLwhBbH = await DMONDETHRewardsTUdrN4X.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardsTUdrN4X.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUdrN4X = await DMONDETHRewards.new({from: accounts[0]});
		const uintOaqf6J4 = BigInt("921")
		const uintMOG1B97 = BigInt("278")
		const uint256OTCKfOd = await DMONDETHRewardsTUdrN4X.notifyRewardAmount.call(uintOaqf6J4, {from: accounts[0]});
		const uint256z5ROMZ = await DMONDETHRewardsTUdrN4X.stake.call(uintMOG1B97, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardsTUdrN4X.stake.call(uintMOG1B97, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUdrN4X = await DMONDETHRewards.new({from: accounts[0]});
		const uintW2o0DM = BigInt("415")
		const uintdgZKRHz = BigInt("285")
		const addressip5M8cE = accounts[4]
		const uint256EhyIf5e = await DMONDETHRewardsTUdrN4X.setStartTime.call(uintW2o0DM, {from: accounts[0]});
		const uint256RzzQjS9 = await DMONDETHRewardsTUdrN4X.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256z5ROMZ = await DMONDETHRewardsTUdrN4X.stake.call(uintdgZKRHz, {from: "0x0000000000000000000000000000000000000001"});
		const addressJ7ZAier = await DMONDETHRewardsTUdrN4X.setStakeAddress.call(addressip5M8cE, {from: accounts[4]});

		assert.equal(uint256RzzQjS9, BigInt("0"))
		await expect(DMONDETHRewardsTUdrN4X.stake.call(uintdgZKRHz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsTUdrN4X = await DMONDETHRewards.new({from: accounts[0]});
		const uintu0ZMzLQ = BigInt("278")
		const uintRsgIotZ = BigInt("1672")
		await DMONDETHRewardsTUdrN4X.renounceOwnership.call({from: accounts[0]});
		const addressh9YW4po = await DMONDETHRewardsTUdrN4X.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256z5ROMZ = await DMONDETHRewardsTUdrN4X.stake.call(uintu0ZMzLQ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gQEDU8F = await DMONDETHRewardsTUdrN4X.setStartTime.call(uintRsgIotZ, {from: accounts[1]});

		await expect(DMONDETHRewardsTUdrN4X.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})