const SLTDETHlpReward = artifacts.require("SLTDETHlpReward");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDETHlpReward', (accounts) => {
	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardlxeH2r = await SLTDETHlpReward.new({from: accounts[0]});
		const addressXEpvgcy = accounts[1]
		const addressNg4SOw9 = accounts[4]
		const uintPmhb1f7 = BigInt("1911")
//		const addressFqmZtdg = await SLTDETHlpRewardlxeH2r.transferOwnership.call(addressXEpvgcy, {from: accounts[2]});
//		const addressu5Fwk2t = await SLTDETHlpRewardlxeH2r.setStakeAddress.call(addressNg4SOw9, {from: accounts[2]});
//		const uint256qdWwKws = await SLTDETHlpRewardlxeH2r.rewardPerToken.call({from: accounts[2]});
//		const uint256B02RFM8 = await SLTDETHlpRewardlxeH2r.notifyRewardAmount.call(uintPmhb1f7, {from: accounts[2]});

		await expect(SLTDETHlpRewardlxeH2r.transferOwnership.call(addressXEpvgcy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardfRjrAH0 = await SLTDETHlpReward.new({from: accounts[5]});
		const addressQJwKDQ = accounts[1]
		const uintIO0yOvZ = BigInt("1246")
		const uint256iFrzTzx = await SLTDETHlpRewardfRjrAH0.earned.call(addressQJwKDQ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256l2FEeUi = await SLTDETHlpRewardfRjrAH0.stake.call(uintIO0yOvZ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256iFrzTzx, BigInt("0"))
		await expect(SLTDETHlpRewardfRjrAH0.stake.call(uintIO0yOvZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardupxtBIU = await SLTDETHlpReward.new({from: accounts[3]});
		const uintxwUKRq3 = BigInt("183")
		const uintfareY7p = BigInt("121")
		const addressP2OLLO7 = accounts[0]
//		const uint256a7oGL8O = await SLTDETHlpRewardupxtBIU.withdraw.call(uintxwUKRq3, {from: accounts[2]});
//		await SLTDETHlpRewardupxtBIU.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256BDA0Ko9 = await SLTDETHlpRewardupxtBIU.totalSupply.call({from: accounts[1]});
//		const uint256dMI2bcS = await SLTDETHlpRewardupxtBIU.stake.call(uintfareY7p, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256N83iIgJ = await SLTDETHlpRewardupxtBIU.earned.call(addressP2OLLO7, {from: accounts[3]});

		await expect(SLTDETHlpRewardupxtBIU.withdraw.call(uintxwUKRq3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardqk2R1kz = await SLTDETHlpReward.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFUNuJPw = accounts[2]
		const addressYsUTVOd = accounts[3]
		const addressOzCDooE = accounts[2]
		const uintllIpJ9Y = BigInt("566")
		const addressMNsSIgn = await SLTDETHlpRewardqk2R1kz.transferOwnership.call(addressFUNuJPw, {from: accounts[0]});
		const uint256ZmOw20C = await SLTDETHlpRewardqk2R1kz.earned.call(addressYsUTVOd, {from: accounts[2]});
		const uint256Fcoisc8 = await SLTDETHlpRewardqk2R1kz.lastTimeRewardApplicable.call({from: accounts[1]});
		const addresswEyHE21 = await SLTDETHlpRewardqk2R1kz.setRewardDistribution.call(addressOzCDooE, {from: accounts[1]});
		const uint256Lf5nsRU = await SLTDETHlpRewardqk2R1kz.withdraw.call(uintllIpJ9Y, {from: accounts[0]});
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardFANq40R = await SLTDETHlpReward.new({from: accounts[2]});
//		await SLTDETHlpRewardFANq40R.onlyRewardDistribution.call({from: accounts[3]});
//		await SLTDETHlpRewardFANq40R.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardFANq40R.exit.call({from: accounts[3]});

		await expect(SLTDETHlpRewardFANq40R.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardmisDREY = await SLTDETHlpReward.new({from: accounts[2]});
		const address2F0eww = accounts[5]
		const addressDJaYKKm = accounts[4]
		const addressvkaMf8I = accounts[0]
		const uint256NrscnpW = await SLTDETHlpRewardmisDREY.earned.call(address2F0eww, {from: accounts[5]});
		const uint256t13TZx = await SLTDETHlpRewardmisDREY.totalSupply.call({from: accounts[0]});
//		await SLTDETHlpRewardmisDREY.exit.call({from: accounts[2]});
//		const uint256QLdnosm = await SLTDETHlpRewardmisDREY.balanceOf.call(addressDJaYKKm, {from: accounts[1]});
//		const uint256l4upm6J = await SLTDETHlpRewardmisDREY.earned.call(addressvkaMf8I, {from: accounts[0]});

		assert.equal(uint256NrscnpW, BigInt("0"))
		assert.equal(uint256t13TZx, BigInt("0"))
		await expect(SLTDETHlpRewardmisDREY.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardfRjrAH0 = await SLTDETHlpReward.new({from: accounts[5]});
		const addresssCyjk7 = accounts[1]
		const uintspaQzS = BigInt("1246")
		const addressytLjf4 = await SLTDETHlpRewardfRjrAH0.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256iFrzTzx = await SLTDETHlpRewardfRjrAH0.earned.call(addresssCyjk7, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256l2FEeUi = await SLTDETHlpRewardfRjrAH0.stake.call(uintspaQzS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressytLjf4, 0xD63a61a3aDF8C01253C6fb74f59e72fE7cC0D187)
		assert.equal(uint256iFrzTzx, BigInt("0"))
		await expect(SLTDETHlpRewardfRjrAH0.stake.call(uintspaQzS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardfRjrAH0 = await SLTDETHlpReward.new({from: accounts[5]});
		const uintoRWca14 = BigInt("1748")
		const addressLIK3mvk = accounts[2]
//		const uint256zcN1OAl = await SLTDETHlpRewardfRjrAH0.notifyRewardAmount.call(uintoRWca14, {from: accounts[4]});
//		const uint256iFrzTzx = await SLTDETHlpRewardfRjrAH0.earned.call(addressLIK3mvk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardfRjrAH0.notifyRewardAmount.call(uintoRWca14, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardwl9DGno = await SLTDETHlpReward.new({from: accounts[2]});
		const addresshSY3xem = accounts[3]
		const addressA7dYvMI = accounts[3]
		const addressZgcGjp = "0x0000000000000000000000000000000000000001"
		const addressldI4HUD = await SLTDETHlpRewardwl9DGno.setStakeAddress.call(addresshSY3xem, {from: accounts[2]});
//		await SLTDETHlpRewardwl9DGno.exit.call({from: accounts[0]});
//		const boolt88MJky = await SLTDETHlpRewardwl9DGno.isOwner.call({from: accounts[0]});
//		const uint256tbHvDC = await SLTDETHlpRewardwl9DGno.earned.call(addressA7dYvMI, {from: accounts[4]});
//		const addressHFL2s0c = await SLTDETHlpRewardwl9DGno.setRewardDistribution.call(addressZgcGjp, {from: accounts[1]});

		await expect(SLTDETHlpRewardwl9DGno.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardfRjrAH0 = await SLTDETHlpReward.new({from: accounts[5]});
		const addressNBYW2k = accounts[2]
		const addressN6Fk7Gn = accounts[3]
		const uint256iFrzTzx = await SLTDETHlpRewardfRjrAH0.earned.call(addressNBYW2k, {from: "0x0000000000000000000000000000000000000001"});
//		await SLTDETHlpRewardfRjrAH0.getReward.call({from: accounts[0]});
//		const addressOdmeERA = await SLTDETHlpRewardfRjrAH0.setStakeAddress.call(addressN6Fk7Gn, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256iFrzTzx, BigInt("0"))
		await expect(SLTDETHlpRewardfRjrAH0.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardfRjrAH0 = await SLTDETHlpReward.new({from: accounts[5]});
		const addressQDeg91O = accounts[4]
		const addresspNFm1bG = accounts[2]
		const addressVNIOo4e = await SLTDETHlpRewardfRjrAH0.transferOwnership.call(addressQDeg91O, {from: accounts[5]});
		const uint256iFrzTzx = await SLTDETHlpRewardfRjrAH0.earned.call(addresspNFm1bG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256iFrzTzx, BigInt("0"))
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardfRjrAH0 = await SLTDETHlpReward.new({from: accounts[5]});
		const addressYAXGNvn = accounts[2]
		const uintCv2JriF = BigInt("1238")
//		const uint256oHKIwbd = await SLTDETHlpRewardfRjrAH0.remainingReward.call({from: accounts[0]});
//		const uint256iFrzTzx = await SLTDETHlpRewardfRjrAH0.earned.call(addressYAXGNvn, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256cPITeT4 = await SLTDETHlpRewardfRjrAH0.notifyRewardAmount.call(uintCv2JriF, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256iSZyAP = await SLTDETHlpRewardfRjrAH0.remainingReward.call({from: accounts[5]});

		await expect(SLTDETHlpRewardfRjrAH0.remainingReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardfRjrAH0 = await SLTDETHlpReward.new({from: accounts[5]});
		const addressS47hnNH = accounts[2]
//		await SLTDETHlpRewardfRjrAH0.renounceOwnership.call({from: accounts[5]});
//		const uint256IrkAECA = await SLTDETHlpRewardfRjrAH0.remainingReward.call({from: accounts[2]});
//		const uint256iFrzTzx = await SLTDETHlpRewardfRjrAH0.earned.call(addressS47hnNH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDETHlpRewardfRjrAH0.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardjZ5PTmW = await SLTDETHlpReward.new({from: accounts[4]});
		const uintYSt0GY6 = BigInt("1802")
		const addressYAEdcy6 = "0x0000000000000000000000000000000000000001"
		const addressSNcPUZR = "0x0000000000000000000000000000000000000001"
		const uintQTfM4PR = BigInt("102")
		const uint256BqoPGSh = await SLTDETHlpRewardjZ5PTmW.totalSupply.call({from: accounts[3]});
		const uint256tdXL34I = await SLTDETHlpRewardjZ5PTmW.notifyRewardAmount.call(uintYSt0GY6, {from: accounts[4]});
		const uint256rqWr63h = await SLTDETHlpRewardjZ5PTmW.balanceOf.call(addressYAEdcy6, {from: accounts[2]});
//		const addresslc7Vi4r = await SLTDETHlpRewardjZ5PTmW.transferOwnership.call(addressSNcPUZR, {from: accounts[1]});
//		const uint256Pm07fv7 = await SLTDETHlpRewardjZ5PTmW.withdraw.call(uintQTfM4PR, {from: accounts[0]});

		assert.equal(uint256BqoPGSh, BigInt("0"))
		assert.equal(uint256rqWr63h, BigInt("0"))
		await expect(SLTDETHlpRewardjZ5PTmW.transferOwnership.call(addressSNcPUZR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDETHlpReward', async () => {
		const SLTDETHlpRewardfRjrAH0 = await SLTDETHlpReward.new({from: accounts[5]});
		const addressxa28u6B = accounts[4]
		const addresstyNVLxH = await SLTDETHlpRewardfRjrAH0.setRewardDistribution.call(addressxa28u6B, {from: accounts[5]});
//		await SLTDETHlpRewardfRjrAH0.getReward.call({from: accounts[0]});
//		await SLTDETHlpRewardfRjrAH0.getReward.call({from: accounts[4]});

		await expect(SLTDETHlpRewardfRjrAH0.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})