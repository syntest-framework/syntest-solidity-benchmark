const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardswXhr5s = await DMONDETHRewards.new({from: accounts[2]});
		const uintw74INbN = BigInt("394")
		const addresst3ER6k9 = accounts[1]
		const addressjxa1E5I = accounts[3]
		const uintdrNQh5 = BigInt("1986")
		const uint256PlIcvtk = await DMONDETHRewardswXhr5s.notifyRewardAmount.call(uintw74INbN, {from: accounts[3]});
		const uint256oZmVjZu = await DMONDETHRewardswXhr5s.earned.call(addresst3ER6k9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VNq6rse = await DMONDETHRewardswXhr5s.earned.call(addressjxa1E5I, {from: "0x0000000000000000000000000000000000000001"});
		const addressyMC7Nkm = await DMONDETHRewardswXhr5s.owner.call({from: accounts[0]});
		const uint256KDM2oZ7 = await DMONDETHRewardswXhr5s.stake.call(uintdrNQh5, {from: accounts[5]});

		await expect(DMONDETHRewardswXhr5s.notifyRewardAmount.call(uintw74INbN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsAEGXBBS = await DMONDETHRewards.new({from: accounts[4]});
		const addressfFIwDBd = accounts[3]
		const uintXkjPxUW = BigInt("226")
		const uintjmLFl3y = BigInt("1937")
		await DMONDETHRewardsAEGXBBS.renounceOwnership.call({from: accounts[3]});
		const addressn2vWW5 = await DMONDETHRewardsAEGXBBS.transferOwnership.call(addressfFIwDBd, {from: accounts[3]});
		const uint256O0nbFHd = await DMONDETHRewardsAEGXBBS.withdraw.call(uintXkjPxUW, {from: accounts[2]});
		const uint256OhPrMIV = await DMONDETHRewardsAEGXBBS.notifyRewardAmount.call(uintjmLFl3y, {from: "0x0000000000000000000000000000000000000001"});
		const addressT58Fo8a = await DMONDETHRewardsAEGXBBS.owner.call({from: accounts[3]});

		await expect(DMONDETHRewardsAEGXBBS.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardswZ1Eogh = await DMONDETHRewards.new({from: accounts[3]});
		const uintPMrDoag = BigInt("1882")
		const uintH83TQ5y = BigInt("1385")
		const uint256EqVDXS = await DMONDETHRewardswZ1Eogh.rewardPerToken.call({from: accounts[1]});
		const uint256X7mFd9k = await DMONDETHRewardswZ1Eogh.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256KPCDxlw = await DMONDETHRewardswZ1Eogh.notifyRewardAmount.call(uintPMrDoag, {from: accounts[5]});
		const uint256m6k7tx2 = await DMONDETHRewardswZ1Eogh.stake.call(uintH83TQ5y, {from: accounts[2]});

		assert.equal(uint256EqVDXS, BigInt("0"))
		assert.equal(uint256X7mFd9k, BigInt("0"))
		await expect(DMONDETHRewardswZ1Eogh.notifyRewardAmount.call(uintPMrDoag, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsOwwFOeJ = await DMONDETHRewards.new({from: accounts[5]});
		const uintLwPlAcL = BigInt("408")
		const addressGrpayQR = accounts[5]
		await DMONDETHRewardsOwwFOeJ.checkStart.call({from: accounts[4]});
		await DMONDETHRewardsOwwFOeJ.checkStart.call({from: accounts[3]});
		const uint256NkaiRn4 = await DMONDETHRewardsOwwFOeJ.stake.call(uintLwPlAcL, {from: accounts[1]});
		const uint256zrpnxya = await DMONDETHRewardsOwwFOeJ.remainingReward.call({from: accounts[4]});
		const uint256NbWEFEc = await DMONDETHRewardsOwwFOeJ.earned.call(addressGrpayQR, {from: accounts[3]});
		const uint256BBIW9Vz = await DMONDETHRewardsOwwFOeJ.rewardPerToken.call({from: accounts[2]});

		await expect(DMONDETHRewardsOwwFOeJ.checkStart.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsrDTt1OO = await DMONDETHRewards.new({from: accounts[0]});
		const addresstSxqRRK = accounts[1]
		const uintPSc2hTE = BigInt("1114")
		const uintYlAhafG = BigInt("1146")
		const uint256xDuzGP3 = await DMONDETHRewardsrDTt1OO.balanceOf.call(addresstSxqRRK, {from: accounts[5]});
		await DMONDETHRewardsrDTt1OO.getReward.call({from: accounts[3]});
		const uint256fLgBSPG = await DMONDETHRewardsrDTt1OO.withdraw.call(uintPSc2hTE, {from: accounts[2]});
		const uint256kw8GOwu = await DMONDETHRewardsrDTt1OO.notifyRewardAmount.call(uintYlAhafG, {from: accounts[4]});

		assert.equal(uint256xDuzGP3, BigInt("0"))
		await expect(DMONDETHRewardsrDTt1OO.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsrDTt1OO = await DMONDETHRewards.new({from: accounts[0]});
		const addressqzruRP3 = accounts[3]
		const uintDiUDsfW = BigInt("1146")
		await DMONDETHRewardsrDTt1OO.exit.call({from: accounts[3]});
		const uint256xDuzGP3 = await DMONDETHRewardsrDTt1OO.balanceOf.call(addressqzruRP3, {from: accounts[5]});
		await DMONDETHRewardsrDTt1OO.getReward.call({from: accounts[3]});
		const uint256kw8GOwu = await DMONDETHRewardsrDTt1OO.notifyRewardAmount.call(uintDiUDsfW, {from: accounts[4]});
		const uint256sgQrCxl = await DMONDETHRewardsrDTt1OO.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(DMONDETHRewardsrDTt1OO.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardskzVahpZ = await DMONDETHRewards.new({from: accounts[0]});
		const uintOp6Xtm9 = BigInt("1573")
		const uintoymYRQ8 = BigInt("1425")
		const uint256o1gqnlu = await DMONDETHRewardskzVahpZ.stake.call(uintOp6Xtm9, {from: accounts[0]});
		const uint256oRHBDD6 = await DMONDETHRewardskzVahpZ.withdraw.call(uintoymYRQ8, {from: accounts[1]});
		await DMONDETHRewardskzVahpZ.renounceOwnership.call({from: accounts[4]});

		await expect(DMONDETHRewardskzVahpZ.stake.call(uintOp6Xtm9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsGk3H67Q = await DMONDETHRewards.new({from: accounts[2]});
		const uintgJOrFD = BigInt("394")
		const uint256uveUF09 = await DMONDETHRewardsGk3H67Q.remainingReward.call({from: accounts[0]});
		const uint256xWXeqk = await DMONDETHRewardsGk3H67Q.rewardPerToken.call({from: accounts[4]});
		const uint256Sp1gajD = await DMONDETHRewardsGk3H67Q.notifyRewardAmount.call(uintgJOrFD, {from: accounts[4]});

		await expect(DMONDETHRewardsGk3H67Q.remainingReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsrDTt1OO = await DMONDETHRewards.new({from: accounts[0]});
		const addressrxfqN1A = accounts[2]
		const uintL4fmtdo = BigInt("1146")
		const uint256xDuzGP3 = await DMONDETHRewardsrDTt1OO.balanceOf.call(addressrxfqN1A, {from: accounts[5]});
		await DMONDETHRewardsrDTt1OO.getReward.call({from: accounts[3]});
		await DMONDETHRewardsrDTt1OO.renounceOwnership.call({from: accounts[0]});
		const uint256kw8GOwu = await DMONDETHRewardsrDTt1OO.notifyRewardAmount.call(uintL4fmtdo, {from: accounts[4]});

		assert.equal(uint256xDuzGP3, BigInt("0"))
		await expect(DMONDETHRewardsrDTt1OO.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsDIbgTlE = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintppIBTY = BigInt("1756")
		const addressKHO4eq2 = accounts[3]
		const uintZw2y1Fy = BigInt("754")
		const uint256myYCXIS = await DMONDETHRewardsDIbgTlE.notifyRewardAmount.call(uintppIBTY, {from: "0x0000000000000000000000000000000000000001"});
		const addressWuxKTD = await DMONDETHRewardsDIbgTlE.setRewardDistribution.call(addressKHO4eq2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256xzCo1aV = await DMONDETHRewardsDIbgTlE.withdraw.call(uintZw2y1Fy, {from: accounts[1]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsrDTt1OO = await DMONDETHRewards.new({from: accounts[0]});
		const addresszQEJFKx = await DMONDETHRewardsrDTt1OO.owner.call({from: accounts[2]});
		await DMONDETHRewardsrDTt1OO.getReward.call({from: accounts[3]});
		await DMONDETHRewardsrDTt1OO.getReward.call({from: accounts[3]});

		assert.equal(addresszQEJFKx, 0x8E66DD2D59B1f4732C94352F7Bd6e0Fa6eDF8083)
		await expect(DMONDETHRewardsrDTt1OO.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardskzVahpZ = await DMONDETHRewards.new({from: accounts[0]});
		const uintBKtxZP8 = BigInt("1864")
		const uint256tQJkOXh = await DMONDETHRewardskzVahpZ.notifyRewardAmount.call(uintBKtxZP8, {from: accounts[0]});
		await DMONDETHRewardskzVahpZ.renounceOwnership.call({from: accounts[4]});

		await expect(DMONDETHRewardskzVahpZ.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsrDTt1OO = await DMONDETHRewards.new({from: accounts[0]});
		const addressKxBYfuP = accounts[4]
		await DMONDETHRewardsrDTt1OO.getReward.call({from: accounts[3]});
		const boolUn05DB = await DMONDETHRewardsrDTt1OO.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressVSRdahc = await DMONDETHRewardsrDTt1OO.setStakeAddress.call(addressKxBYfuP, {from: accounts[0]});

		await expect(DMONDETHRewardsrDTt1OO.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsrDTt1OO = await DMONDETHRewards.new({from: accounts[0]});
		const addressHLB8SuL = accounts[4]
		await DMONDETHRewardsrDTt1OO.getReward.call({from: accounts[3]});
		const addressNxyHraF = await DMONDETHRewardsrDTt1OO.transferOwnership.call(addressHLB8SuL, {from: accounts[0]});

		await expect(DMONDETHRewardsrDTt1OO.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardskzVahpZ = await DMONDETHRewards.new({from: accounts[0]});
		const addressx4vlkC = "0x0000000000000000000000000000000000000001"
		const addressIm4RjMy = await DMONDETHRewardskzVahpZ.setRewardDistribution.call(addressx4vlkC, {from: accounts[0]});
		await DMONDETHRewardskzVahpZ.renounceOwnership.call({from: accounts[4]});

		await expect(DMONDETHRewardskzVahpZ.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardskzVahpZ = await DMONDETHRewards.new({from: accounts[0]});
		const uintr5gBXQ = BigInt("1864")
		const uintfla906c = BigInt("1209")
		const uint256tQJkOXh = await DMONDETHRewardskzVahpZ.notifyRewardAmount.call(uintr5gBXQ, {from: accounts[0]});
		const uint256QQlfTb = await DMONDETHRewardskzVahpZ.setStartTime.call(uintfla906c, {from: accounts[0]});
	});
})