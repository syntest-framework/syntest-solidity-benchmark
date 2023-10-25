const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsWtfTRWm = await DMONDETHRewards.new({from: accounts[3]});
		const uintH4aQZDF = BigInt("448")
//		const uint256SfQe9nb = await DMONDETHRewardsWtfTRWm.setStartTime.call(uintH4aQZDF, {from: accounts[0]});
//		await DMONDETHRewardsWtfTRWm.renounceOwnership.call({from: accounts[1]});

		await expect(DMONDETHRewardsWtfTRWm.setStartTime.call(uintH4aQZDF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsB2Uve3r = await DMONDETHRewards.new({from: accounts[2]});
		const uintuyTMYgI = BigInt("1831")
		const addressIP5xkMq = accounts[5]
//		const uint256oBokdGG = await DMONDETHRewardsB2Uve3r.stake.call(uintuyTMYgI, {from: accounts[1]});
//		const uint256aqQUCaD = await DMONDETHRewardsB2Uve3r.balanceOf.call(addressIP5xkMq, {from: accounts[5]});

		await expect(DMONDETHRewardsB2Uve3r.stake.call(uintuyTMYgI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsip8nw25 = await DMONDETHRewards.new({from: accounts[0]});
//		await DMONDETHRewardsip8nw25.getReward.call({from: accounts[0]});
//		await DMONDETHRewardsip8nw25.checkStart.call({from: accounts[3]});

		await expect(DMONDETHRewardsip8nw25.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsLtkXdhe = await DMONDETHRewards.new({from: accounts[4]});
		const addresschzO6PS = accounts[2]
		const addressbxAxdo = accounts[3]
		const uint256LJQEWgg = await DMONDETHRewardsLtkXdhe.totalSupply.call({from: accounts[4]});
		const uint256ajEgrfS = await DMONDETHRewardsLtkXdhe.earned.call(addresschzO6PS, {from: accounts[5]});
		const address6E0QWN = await DMONDETHRewardsLtkXdhe.owner.call({from: accounts[3]});
//		const addressg6xB2cD = await DMONDETHRewardsLtkXdhe.updateReward.call(addressbxAxdo, {from: accounts[3]});
//		const uint256ckh4UN = await DMONDETHRewardsLtkXdhe.rewardPerToken.call({from: accounts[4]});

		assert.equal(address6E0QWN, 0x5410D5fc4978C6209862A4F5e4c3F00b4F28C135)
		assert.equal(uint256LJQEWgg, BigInt("0"))
		assert.equal(uint256ajEgrfS, BigInt("0"))
		await expect(DMONDETHRewardsLtkXdhe.updateReward.call(addressbxAxdo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsIHwE37R = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintuEu6Rj = BigInt("270")
		const uintrZPy0HU = BigInt("259")
		const uint256shJQ9Jr = await DMONDETHRewardsIHwE37R.withdraw.call(uintuEu6Rj, {from: accounts[3]});
		const uint256FJHMlng = await DMONDETHRewardsIHwE37R.notifyRewardAmount.call(uintrZPy0HU, {from: accounts[1]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsSovGbNj = await DMONDETHRewards.new({from: accounts[1]});
		const uintNeEiKhG = BigInt("1437")
		const uintoGivBBF = BigInt("188")
		const addresss0J3iDe = accounts[4]
		const uint256tlNT2Ai = await DMONDETHRewardsSovGbNj.rewardPerToken.call({from: accounts[1]});
//		const uint256qbqJPSD = await DMONDETHRewardsSovGbNj.notifyRewardAmount.call(uintNeEiKhG, {from: accounts[2]});
//		const uint256LJMF8wG = await DMONDETHRewardsSovGbNj.stake.call(uintoGivBBF, {from: accounts[2]});
//		const addressIokpI4H = await DMONDETHRewardsSovGbNj.transferOwnership.call(addresss0J3iDe, {from: accounts[2]});
//		await DMONDETHRewardsSovGbNj.onlyRewardDistribution.call({from: accounts[4]});

		assert.equal(uint256tlNT2Ai, BigInt("0"))
		await expect(DMONDETHRewardsSovGbNj.notifyRewardAmount.call(uintNeEiKhG, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsB2Uve3r = await DMONDETHRewards.new({from: accounts[2]});
		const uintcIdFVi5 = BigInt("1011")
		const addressSgTWBP = accounts[5]
//		const uint256gnEcT84 = await DMONDETHRewardsB2Uve3r.remainingReward.call({from: accounts[2]});
//		const uint256wR6dyGT = await DMONDETHRewardsB2Uve3r.withdraw.call(uintcIdFVi5, {from: accounts[1]});
//		const uint256aqQUCaD = await DMONDETHRewardsB2Uve3r.balanceOf.call(addressSgTWBP, {from: accounts[5]});

		await expect(DMONDETHRewardsB2Uve3r.remainingReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsip8nw25 = await DMONDETHRewards.new({from: accounts[0]});
		const uintY9tqRuU = BigInt("1992")
//		await DMONDETHRewardsip8nw25.getReward.call({from: accounts[0]});
//		await DMONDETHRewardsip8nw25.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		await DMONDETHRewardsip8nw25.checkStart.call({from: accounts[3]});
//		const uint256DvR8n27 = await DMONDETHRewardsip8nw25.stake.call(uintY9tqRuU, {from: accounts[5]});

		await expect(DMONDETHRewardsip8nw25.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsB2Uve3r = await DMONDETHRewards.new({from: accounts[2]});
		const uintNtZecWs = BigInt("660")
		const uintpDEC9j3 = BigInt("1822")
		const addressdyqHt5w = accounts[6]
		const addressFbn966E = accounts[5]
//		const uint256sHjDLI = await DMONDETHRewardsB2Uve3r.withdraw.call(uintNtZecWs, {from: accounts[1]});
//		await DMONDETHRewardsB2Uve3r.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256oBokdGG = await DMONDETHRewardsB2Uve3r.stake.call(uintpDEC9j3, {from: accounts[1]});
//		const uint256aqQUCaD = await DMONDETHRewardsB2Uve3r.balanceOf.call(addressdyqHt5w, {from: accounts[5]});
//		const uint256UoH7lcC = await DMONDETHRewardsB2Uve3r.balanceOf.call(addressFbn966E, {from: accounts[4]});

		await expect(DMONDETHRewardsB2Uve3r.withdraw.call(uintNtZecWs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsip8nw25 = await DMONDETHRewards.new({from: accounts[0]});
		const addressa0CXMPn = accounts[1]
		const addressLtr4OU = "0x0000000000000000000000000000000000000001"
		const addressiFhcJM = await DMONDETHRewardsip8nw25.setRewardDistribution.call(addressa0CXMPn, {from: accounts[0]});
//		const addresskWp34X5 = await DMONDETHRewardsip8nw25.updateReward.call(addressLtr4OU, {from: accounts[2]});
//		await DMONDETHRewardsip8nw25.getReward.call({from: accounts[0]});
//		await DMONDETHRewardsip8nw25.checkStart.call({from: accounts[3]});

		await expect(DMONDETHRewardsip8nw25.updateReward.call(addressLtr4OU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsip8nw25 = await DMONDETHRewards.new({from: accounts[0]});
		const uintcxRQLzy = BigInt("1734")
		const uint256BvxTa5U = await DMONDETHRewardsip8nw25.setStartTime.call(uintcxRQLzy, {from: accounts[0]});
//		await DMONDETHRewardsip8nw25.getReward.call({from: accounts[0]});
//		const uint256jN9XJ3o = await DMONDETHRewardsip8nw25.totalSupply.call({from: accounts[1]});
//		await DMONDETHRewardsip8nw25.checkStart.call({from: accounts[3]});

		await expect(DMONDETHRewardsip8nw25.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsip8nw25 = await DMONDETHRewards.new({from: accounts[0]});
		const uinteKq7udZ = BigInt("750")
		const uint256QGvMjYP = await DMONDETHRewardsip8nw25.totalSupply.call({from: accounts[1]});
		const uint256yZ3Udxb = await DMONDETHRewardsip8nw25.notifyRewardAmount.call(uinteKq7udZ, {from: accounts[0]});
//		await DMONDETHRewardsip8nw25.getReward.call({from: accounts[0]});

		assert.equal(uint256QGvMjYP, BigInt("0"))
		await expect(DMONDETHRewardsip8nw25.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsPW8lwDk = await DMONDETHRewards.new({from: accounts[1]});
		const uintWuQU3u1 = BigInt("591")
//		await DMONDETHRewardsPW8lwDk.renounceOwnership.call({from: accounts[1]});
//		const uint256fCIPXWN = await DMONDETHRewardsPW8lwDk.remainingReward.call({from: accounts[2]});
//		const uint256MbTdDry = await DMONDETHRewardsPW8lwDk.notifyRewardAmount.call(uintWuQU3u1, {from: accounts[3]});
//		const uint256H8t0J0v = await DMONDETHRewardsPW8lwDk.totalSupply.call({from: accounts[2]});

		await expect(DMONDETHRewardsPW8lwDk.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsip8nw25 = await DMONDETHRewards.new({from: accounts[0]});
		const addresszxH5Mjd = accounts[0]
		const uintHUogR0P = BigInt("750")
		const uint256QGvMjYP = await DMONDETHRewardsip8nw25.totalSupply.call({from: accounts[1]});
		const uint256eEOF48B = await DMONDETHRewardsip8nw25.totalSupply.call({from: accounts[3]});
		const addressDV48coc = await DMONDETHRewardsip8nw25.setStakeAddress.call(addresszxH5Mjd, {from: accounts[0]});
		const uint256yZ3Udxb = await DMONDETHRewardsip8nw25.notifyRewardAmount.call(uintHUogR0P, {from: accounts[0]});
//		await DMONDETHRewardsip8nw25.getReward.call({from: accounts[0]});

		assert.equal(uint256QGvMjYP, BigInt("0"))
		assert.equal(uint256eEOF48B, BigInt("0"))
		await expect(DMONDETHRewardsip8nw25.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsip8nw25 = await DMONDETHRewards.new({from: accounts[0]});
		const addressLe9pwZc = accounts[1]
		const addressl9AFuSH = accounts[1]
		const addressdWNwVP1 = await DMONDETHRewardsip8nw25.transferOwnership.call(addressLe9pwZc, {from: accounts[0]});
		const uint256QGvMjYP = await DMONDETHRewardsip8nw25.totalSupply.call({from: accounts[1]});
//		await DMONDETHRewardsip8nw25.getReward.call({from: accounts[0]});
//		const uint25613lATn = await DMONDETHRewardsip8nw25.balanceOf.call(addressl9AFuSH, {from: accounts[3]});
//		const uint256q7zpl6I = await DMONDETHRewardsip8nw25.totalSupply.call({from: accounts[4]});
		await DMONDETHRewardsip8nw25.getReward.call({from: accounts[0]});

		assert.equal(uint256QGvMjYP, BigInt("0"))
		await expect(DMONDETHRewardsip8nw25.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})