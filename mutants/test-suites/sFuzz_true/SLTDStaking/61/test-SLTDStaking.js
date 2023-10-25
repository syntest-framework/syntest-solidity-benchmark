const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingjT9ek0f = await SLTDStaking.new({from: accounts[0]});
		const addressqasZSRI = accounts[0]
		const uintoHxOdwe = BigInt("1851")
		const uintWRaqwgy = BigInt("1654")
		const uint256Lj7083D = await SLTDStakingjT9ek0f.balanceOf.call(addressqasZSRI, {from: accounts[1]});
//		const uint256TdvnUii = await SLTDStakingjT9ek0f.stake.call(uintoHxOdwe, {from: accounts[1]});
//		await SLTDStakingjT9ek0f.getReward.call({from: accounts[0]});
//		const uint256ex0zFY = await SLTDStakingjT9ek0f.stake.call(uintWRaqwgy, {from: accounts[2]});

		assert.equal(uint256Lj7083D, BigInt("0"))
		await expect(SLTDStakingjT9ek0f.stake.call(uintoHxOdwe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingqNiFIP8 = await SLTDStaking.new({from: accounts[4]});
		const uintGr9Ezi2 = BigInt("529")
//		await SLTDStakingqNiFIP8.renounceOwnership.call({from: accounts[1]});
//		const uint256jdFGsIP = await SLTDStakingqNiFIP8.stake.call(uintGr9Ezi2, {from: accounts[0]});

		await expect(SLTDStakingqNiFIP8.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking7FUEWg = await SLTDStaking.new({from: accounts[1]});
		const addressQ4zaZnl = accounts[0]
		const addressbuZPnD1 = accounts[0]
		const uintWulfCWa = BigInt("494")
		const uint256ZB6b4Kw = await SLTDStaking7FUEWg.earned.call(addressQ4zaZnl, {from: accounts[0]});
		const uint256jKiNPOX = await SLTDStaking7FUEWg.balanceOf.call(addressbuZPnD1, {from: accounts[4]});
//		const uint256ZeR45Jw = await SLTDStaking7FUEWg.withdraw.call(uintWulfCWa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ZB6b4Kw, BigInt("0"))
		assert.equal(uint256jKiNPOX, BigInt("0"))
		await expect(SLTDStaking7FUEWg.withdraw.call(uintWulfCWa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingmorctWd = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressyqIN0fJ = accounts[4]
		const addressp8lVPrH = accounts[0]
		await SLTDStakingmorctWd.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingmorctWd.onlyOwner.call({from: accounts[0]});
		const addressJBow9xo = await SLTDStakingmorctWd.updateReward.call(addressyqIN0fJ, {from: accounts[3]});
		const uint256P1iCcAi = await SLTDStakingmorctWd.totalSupply.call({from: accounts[3]});
		const addressqL5sV18 = await SLTDStakingmorctWd.updateReward.call(addressp8lVPrH, {from: accounts[5]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking5PbqGC = await SLTDStaking.new({from: accounts[2]});
		const uintxv0AScA = BigInt("43")
//		const uint256leNTHX5 = await SLTDStaking5PbqGC.notifyRewardAmount.call(uintxv0AScA, {from: accounts[4]});
//		const uint256f1Uca7I = await SLTDStaking5PbqGC.totalSupply.call({from: accounts[3]});

		await expect(SLTDStaking5PbqGC.notifyRewardAmount.call(uintxv0AScA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingh0fvkx0 = await SLTDStaking.new({from: accounts[3]});
		const uinticMVMBE = BigInt("333")
//		await SLTDStakingh0fvkx0.onlyOwner.call({from: accounts[1]});
//		const uint256SSbKfb = await SLTDStakingh0fvkx0.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256oflmVVA = await SLTDStakingh0fvkx0.stake.call(uinticMVMBE, {from: accounts[3]});
//		const uint256Oi0vkz = await SLTDStakingh0fvkx0.totalSupply.call({from: accounts[0]});

		await expect(SLTDStakingh0fvkx0.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingqNiFIP8 = await SLTDStaking.new({from: accounts[4]});
		const addressK39d4sT = accounts[4]
		const uintP0r9pEY = BigInt("528")
//		await SLTDStakingqNiFIP8.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressxDRMGA2 = await SLTDStakingqNiFIP8.setRewardDistribution.call(addressK39d4sT, {from: accounts[3]});
//		const uint256jdFGsIP = await SLTDStakingqNiFIP8.stake.call(uintP0r9pEY, {from: accounts[0]});

		await expect(SLTDStakingqNiFIP8.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingitftOnL = await SLTDStaking.new({from: accounts[2]});
		const addressCGeAFo5 = accounts[1]
		const addresskO5REEr = accounts[0]
		const uintdswmD2 = BigInt("735")
		const addresspnSKNT = await SLTDStakingitftOnL.transferOwnership.call(addressCGeAFo5, {from: accounts[2]});
		const uint256BxGvEAY = await SLTDStakingitftOnL.lastTimeRewardApplicable.call({from: accounts[2]});
//		const addressDdVKtdj = await SLTDStakingitftOnL.updateReward.call(addresskO5REEr, {from: accounts[4]});
//		const uint256ClMsFOp = await SLTDStakingitftOnL.withdraw.call(uintdswmD2, {from: accounts[2]});
//		await SLTDStakingitftOnL.onlyRewardDistribution.call({from: accounts[3]});

		assert.equal(uint256BxGvEAY, BigInt("0"))
		await expect(SLTDStakingitftOnL.updateReward.call(addresskO5REEr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingqNiFIP8 = await SLTDStaking.new({from: accounts[4]});
		const uintLq0KD5G = BigInt("507")
		const addressmgxLAEO = accounts[3]
//		await SLTDStakingqNiFIP8.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256jdFGsIP = await SLTDStakingqNiFIP8.stake.call(uintLq0KD5G, {from: accounts[0]});
//		const uint256gTmnXVd = await SLTDStakingqNiFIP8.earned.call(addressmgxLAEO, {from: accounts[0]});

		await expect(SLTDStakingqNiFIP8.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingqNiFIP8 = await SLTDStaking.new({from: accounts[4]});
		const uintaIxGYQJ = BigInt("526")
		const addresshuuEMky = await SLTDStakingqNiFIP8.owner.call({from: accounts[2]});
//		const uint256jdFGsIP = await SLTDStakingqNiFIP8.stake.call(uintaIxGYQJ, {from: accounts[0]});

		assert.equal(addresshuuEMky, 0x51f8596BaFF4cC9F3a9A1797F5d3208b60a885F0)
		await expect(SLTDStakingqNiFIP8.stake.call(uintaIxGYQJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingqNiFIP8 = await SLTDStaking.new({from: accounts[4]});
		const addresspXQDbkp = accounts[3]
//		await SLTDStakingqNiFIP8.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressenn7JHs = await SLTDStakingqNiFIP8.setRewardDistribution.call(addresspXQDbkp, {from: accounts[4]});

		await expect(SLTDStakingqNiFIP8.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingqNiFIP8 = await SLTDStaking.new({from: accounts[4]});
//		await SLTDStakingqNiFIP8.renounceOwnership.call({from: accounts[4]});
//		await SLTDStakingqNiFIP8.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingqNiFIP8.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})