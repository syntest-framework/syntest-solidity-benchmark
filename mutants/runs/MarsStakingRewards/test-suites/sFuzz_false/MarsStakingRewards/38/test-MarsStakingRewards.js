const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressorAfuq = accounts[4]
		const address2ihpXa = accounts[3]
		const addressdXG1Jh = accounts[3]
		const MarsStakingRewardshKgvfEB = await MarsStakingRewards.new(addressorAfuq, address2ihpXa, addressdXG1Jh, {from: accounts[3]});
		const addresskEIWl0N = accounts[0]
		const uint256nUYD0lH = await MarsStakingRewardshKgvfEB.getRewardForDuration.call({from: accounts[1]});
		const uint256KWBT8G4 = await MarsStakingRewardshKgvfEB.earned.call(addresskEIWl0N, {from: accounts[1]});
		await MarsStakingRewardshKgvfEB.renounceOwnership.call({from: accounts[1]});
		const uint256BuJB5cM = await MarsStakingRewardshKgvfEB.lastTimeRewardApplicable.call({from: accounts[2]});
		const boolVMEaRxP = await MarsStakingRewardshKgvfEB.isOwner.call({from: accounts[5]});

		assert.equal(uint256KWBT8G4, BigInt("0"))
		assert.equal(uint256nUYD0lH, BigInt("0"))
		await expect(MarsStakingRewardshKgvfEB.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressycQhP36 = accounts[4]
		const addressewdodTL = accounts[3]
		const addressHQKBAbr = "0x0000000000000000000000000000000000000001"
		const MarsStakingRewardsbnXEPTV = await MarsStakingRewards.new(addressycQhP36, addressewdodTL, addressHQKBAbr, {from: accounts[5]});
		const byteCrzxat = "0x1d121d080716131d16100f0b20151b1218140e031d091d01071016151d1e1c1e"
		const byterb0ix7h = "0x1f04021205190b191a0d201e0a0a0f0d10010b081a1e141c0815141c06041d1c"
		const uintSDKCEJd = BigInt("109")
		const uintNDDm0SS = BigInt("337")
		const uintn6HAmV6 = BigInt("746")
		const uintiLktqQx = BigInt("139")
		const addresshqve2ji = accounts[0]
		await MarsStakingRewardsbnXEPTV.getReward.call({from: accounts[3]});
		const uint256CoRmZIV = await MarsStakingRewardsbnXEPTV.stakeWithPermit.call(uintn6HAmV6, uintNDDm0SS, uintSDKCEJd, byterb0ix7h, byteCrzxat, {from: accounts[2]});
		const addressYXXV93f = await MarsStakingRewardsbnXEPTV.inCaseTokensGetStuck.call(addresshqve2ji, uintiLktqQx, {from: accounts[0]});

		await expect(MarsStakingRewardsbnXEPTV.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressPG5tmlj = accounts[3]
		const addressrD0NQtD = accounts[5]
		const addresstGwdcG = accounts[5]
		const MarsStakingRewardsJuuNiHB = await MarsStakingRewards.new(addressPG5tmlj, addressrD0NQtD, addresstGwdcG, {from: "0x0000000000000000000000000000000000000001"});
		await MarsStakingRewardsJuuNiHB.renounceOwnership.call({from: accounts[1]});
		await MarsStakingRewardsJuuNiHB.renounceOwnership.call({from: accounts[3]});
		const uint256Vw7L0vz = await MarsStakingRewardsJuuNiHB.totalSupply.call({from: accounts[1]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressoccflf = accounts[1]
		const addressCBGKJHs = accounts[1]
		const addressuf7xWiq = accounts[1]
		const MarsStakingRewardsv9h9GsY = await MarsStakingRewards.new(addressoccflf, addressCBGKJHs, addressuf7xWiq, {from: accounts[3]});
		await MarsStakingRewardsv9h9GsY.onlyOwner.call({from: accounts[5]});
		const boolsdJTrN = await MarsStakingRewardsv9h9GsY.isOwner.call({from: accounts[3]});

		await expect(MarsStakingRewardsv9h9GsY.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresszLuUf6Q = accounts[4]
		const addresskCJCl8e = accounts[4]
		const addressWnInQWN = accounts[4]
		const MarsStakingRewardsF7dMMoj = await MarsStakingRewards.new(addresszLuUf6Q, addresskCJCl8e, addressWnInQWN, {from: accounts[4]});
		const uintnNpeYrw = BigInt("1704")
		const uintDQfepzz = BigInt("746")
		const uintlKBP8Od = BigInt("1758")
		const uint256oNUbTyS = await MarsStakingRewardsF7dMMoj.notifyRewardAmount.call(uintDQfepzz, uintnNpeYrw, {from: accounts[2]});
		const uint256tcVlj7f = await MarsStakingRewardsF7dMMoj.stake.call(uintlKBP8Od, {from: accounts[4]});
		await MarsStakingRewardsF7dMMoj.nonReentrant.call({from: accounts[4]});
		const uint256FCyQBP = await MarsStakingRewardsF7dMMoj.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(MarsStakingRewardsF7dMMoj.notifyRewardAmount.call(uintDQfepzz, uintnNpeYrw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresstFDqdE9 = accounts[4]
		const addresslWhP7qu = accounts[1]
		const addressumWE4Br = accounts[1]
		const MarsStakingRewardsQ30ADVW = await MarsStakingRewards.new(addresstFDqdE9, addresslWhP7qu, addressumWE4Br, {from: accounts[4]});
		const uintdj9yccj = BigInt("1781")
		const uintl76uXPE = BigInt("355")
		const addresszwEPri8 = accounts[0]
		const uint256bnl47zn = await MarsStakingRewardsQ30ADVW.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256SAonNAC = await MarsStakingRewardsQ30ADVW.notifyRewardAmount.call(uintl76uXPE, uintdj9yccj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256m4w8ljU = await MarsStakingRewardsQ30ADVW.lastTimeRewardApplicable.call({from: accounts[2]});
		const addressMLN5y2E = await MarsStakingRewardsQ30ADVW.updateReward.call(addresszwEPri8, {from: accounts[2]});

		assert.equal(uint256bnl47zn, BigInt("0"))
		await expect(MarsStakingRewardsQ30ADVW.notifyRewardAmount.call(uintl76uXPE, uintdj9yccj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressuXl0jyK = accounts[4]
		const addressuQ0EI7F = accounts[3]
		const addressl1VK4Ih = accounts[3]
		const MarsStakingRewardshKgvfEB = await MarsStakingRewards.new(addressuXl0jyK, addressuQ0EI7F, addressl1VK4Ih, {from: accounts[3]});
		const addressFUQKvRk = accounts[0]
		const uint256cjqzJB7 = await MarsStakingRewardshKgvfEB.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256nUYD0lH = await MarsStakingRewardshKgvfEB.getRewardForDuration.call({from: accounts[1]});
		const uint256KWBT8G4 = await MarsStakingRewardshKgvfEB.earned.call(addressFUQKvRk, {from: accounts[1]});
		const boolwNGNws = await MarsStakingRewardshKgvfEB.isOwner.call({from: accounts[1]});
		await MarsStakingRewardshKgvfEB.renounceOwnership.call({from: accounts[1]});
		const uint256BuJB5cM = await MarsStakingRewardshKgvfEB.lastTimeRewardApplicable.call({from: accounts[2]});
		const boolVMEaRxP = await MarsStakingRewardshKgvfEB.isOwner.call({from: accounts[5]});

		assert.equal(boolwNGNws, false)
		assert.equal(uint256KWBT8G4, BigInt("0"))
		assert.equal(uint256cjqzJB7, BigInt("0"))
		assert.equal(uint256nUYD0lH, BigInt("0"))
		await expect(MarsStakingRewardshKgvfEB.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addresslTD2M0D = accounts[4]
		const addressZBIosdX = accounts[3]
		const addressq3zOdpF = accounts[3]
		const MarsStakingRewardshKgvfEB = await MarsStakingRewards.new(addresslTD2M0D, addressZBIosdX, addressq3zOdpF, {from: accounts[3]});
		const addressgR4v0Sz = "0x0000000000000000000000000000000000000001"
		const addressekntqYz = accounts[0]
		const uint256nUYD0lH = await MarsStakingRewardshKgvfEB.getRewardForDuration.call({from: accounts[1]});
		const uint256bfzcpLa = await MarsStakingRewardshKgvfEB.balanceOf.call(addressgR4v0Sz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KWBT8G4 = await MarsStakingRewardshKgvfEB.earned.call(addressekntqYz, {from: accounts[1]});
		await MarsStakingRewardshKgvfEB.renounceOwnership.call({from: accounts[1]});
		const uint256TldEJpa = await MarsStakingRewardshKgvfEB.getRewardForDuration.call({from: accounts[0]});
		const uint256BuJB5cM = await MarsStakingRewardshKgvfEB.lastTimeRewardApplicable.call({from: accounts[2]});
		const boolVMEaRxP = await MarsStakingRewardshKgvfEB.isOwner.call({from: accounts[5]});

		assert.equal(uint256KWBT8G4, BigInt("0"))
		assert.equal(uint256bfzcpLa, BigInt("0"))
		assert.equal(uint256nUYD0lH, BigInt("0"))
		await expect(MarsStakingRewardshKgvfEB.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressDsTZSu = accounts[4]
		const addressb502GTG = accounts[3]
		const addresshuwCwwZ = accounts[3]
		const MarsStakingRewardshKgvfEB = await MarsStakingRewards.new(addressDsTZSu, addressb502GTG, addresshuwCwwZ, {from: accounts[3]});
		const addressQQhk7VB = accounts[1]
		const uint256nUYD0lH = await MarsStakingRewardshKgvfEB.getRewardForDuration.call({from: accounts[1]});
		const addressX89df6f = await MarsStakingRewardshKgvfEB.owner.call({from: accounts[5]});
		const uint256KWBT8G4 = await MarsStakingRewardshKgvfEB.earned.call(addressQQhk7VB, {from: accounts[1]});
		const uint256BuJB5cM = await MarsStakingRewardshKgvfEB.lastTimeRewardApplicable.call({from: accounts[2]});
		const boolVMEaRxP = await MarsStakingRewardshKgvfEB.isOwner.call({from: accounts[5]});

		assert.equal(addressX89df6f, 0x72CA3bF52FB9519A818D00Fbb865dec11B16C2e6)
		assert.equal(boolVMEaRxP, false)
		assert.equal(uint256BuJB5cM, BigInt("0"))
		assert.equal(uint256KWBT8G4, BigInt("0"))
		assert.equal(uint256nUYD0lH, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressMmKnNIH = accounts[4]
		const addressbNAvZhG = accounts[3]
		const addressr6NBtnN = accounts[3]
		const MarsStakingRewardshKgvfEB = await MarsStakingRewards.new(addressMmKnNIH, addressbNAvZhG, addressr6NBtnN, {from: accounts[3]});
		const addressKpZ4kum = accounts[0]
		const uint256KWBT8G4 = await MarsStakingRewardshKgvfEB.earned.call(addressKpZ4kum, {from: accounts[1]});
		await MarsStakingRewardshKgvfEB.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256BuJB5cM = await MarsStakingRewardshKgvfEB.lastTimeRewardApplicable.call({from: accounts[2]});
		const boolVMEaRxP = await MarsStakingRewardshKgvfEB.isOwner.call({from: accounts[5]});

		assert.equal(uint256KWBT8G4, BigInt("0"))
		await expect(MarsStakingRewardshKgvfEB.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressK6Uu2K = accounts[3]
		const addressnPqX0d = accounts[1]
		const addresspQlgf4U = accounts[5]
		const MarsStakingRewardsXYTRowe = await MarsStakingRewards.new(addressK6Uu2K, addressnPqX0d, addresspQlgf4U, {from: accounts[0]});
		const uintk5403jw = BigInt("1614")
		const uintxBqjSU = BigInt("233")
		const byteiAzAr0 = "0x1f0e1c0219111104080a1f190702130f05080205090a0a181c010106030e0d05"
		const bytePknRic5 = "0x17001509051317190d060204131718161a0e080817091018121d0a030709111e"
		const uintwrm0RZg = BigInt("171")
		const uinththzcoD = BigInt("583")
		const uintNLyIypt = BigInt("448")
		const addressb2jC8TL = "0x0000000000000000000000000000000000000001"
		const uint256lP2XRvo = await MarsStakingRewardsXYTRowe.notifyRewardAmount.call(uintxBqjSU, uintk5403jw, {from: accounts[3]});
		const uint256tejXlhO = await MarsStakingRewardsXYTRowe.stakeWithPermit.call(uintNLyIypt, uinththzcoD, uintwrm0RZg, bytePknRic5, byteiAzAr0, {from: accounts[4]});
		await MarsStakingRewardsXYTRowe.renounceOwnership.call({from: accounts[2]});
		const uint256xYK5S8a = await MarsStakingRewardsXYTRowe.balanceOf.call(addressb2jC8TL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsXYTRowe.notifyRewardAmount.call(uintxBqjSU, uintk5403jw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressrXVx0xr = accounts[4]
		const addressmZktHZr = accounts[3]
		const addressK2Wgm0J = accounts[3]
		const MarsStakingRewardshKgvfEB = await MarsStakingRewards.new(addressrXVx0xr, addressmZktHZr, addressK2Wgm0J, {from: accounts[3]});
		const addressdDvKJ5q = accounts[0]
		const addressmXG3nlk = accounts[3]
		const uintJag7CZT = BigInt("1338")
		const addressAEvhUBU = await MarsStakingRewardshKgvfEB.setRewardsDistribution.call(addressdDvKJ5q, {from: accounts[3]});
		const uint256KWBT8G4 = await MarsStakingRewardshKgvfEB.earned.call(addressmXG3nlk, {from: accounts[1]});
		const uint256cr6zrJm = await MarsStakingRewardshKgvfEB.stake.call(uintJag7CZT, {from: accounts[1]});

		assert.equal(uint256KWBT8G4, BigInt("0"))
		await expect(MarsStakingRewardshKgvfEB.stake.call(uintJag7CZT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressjD1D0w5 = accounts[4]
		const addressR3pGQdO = accounts[1]
		const addressLAkfOZ = accounts[2]
		const MarsStakingRewardsXu4zk99 = await MarsStakingRewards.new(addressjD1D0w5, addressR3pGQdO, addressLAkfOZ, {from: accounts[2]});
		await MarsStakingRewardsXu4zk99.renounceOwnership.call({from: accounts[2]});
		await MarsStakingRewardsXu4zk99.onlyOwner.call({from: accounts[4]});
		const boolTFdo36l = await MarsStakingRewardsXu4zk99.isOwner.call({from: accounts[3]});

		await expect(MarsStakingRewardsXu4zk99.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressBA9GCZx = accounts[2]
		const addressfvwb29Z = "0x0000000000000000000000000000000000000001"
		const addresshYU48UO = accounts[3]
		const MarsStakingRewardsIfZHHKl = await MarsStakingRewards.new(addressBA9GCZx, addressfvwb29Z, addresshYU48UO, {from: accounts[2]});
		const addressQiXKVe = accounts[2]
		const uintvirApNE = BigInt("108")
		const addressKwkRxnI = accounts[3]
		await MarsStakingRewardsIfZHHKl.renounceOwnership.call({from: accounts[2]});
		const addressKNTkCBm = await MarsStakingRewardsIfZHHKl.transferOwnership.call(addressQiXKVe, {from: accounts[2]});
		const uint256NaH8lTq = await MarsStakingRewardsIfZHHKl.getRewardForDuration.call({from: accounts[1]});
		const addresss7UJuLm = await MarsStakingRewardsIfZHHKl.inCaseTokensGetStuck.call(addressKwkRxnI, uintvirApNE, {from: accounts[2]});
		await MarsStakingRewardsIfZHHKl.getReward.call({from: accounts[3]});
		await MarsStakingRewardsIfZHHKl.getReward.call({from: accounts[3]});

		await expect(MarsStakingRewardsIfZHHKl.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const address1rzEXo = accounts[1]
		const addressHfB0t14 = accounts[1]
		const addresszBmlIQv = accounts[1]
		const MarsStakingRewardsv9h9GsY = await MarsStakingRewards.new(address1rzEXo, addressHfB0t14, addresszBmlIQv, {from: accounts[3]});
		const uintc80w1ZX = BigInt("1738")
		const addressk1tcZbp = accounts[0]
		const addressCoxKmkO = accounts[3]
		const addressZwmwvJK = await MarsStakingRewardsv9h9GsY.inCaseTokensGetStuck.call(addressk1tcZbp, uintc80w1ZX, {from: accounts[3]});
		await MarsStakingRewardsv9h9GsY.exit.call({from: accounts[5]});
		await MarsStakingRewardsv9h9GsY.onlyOwner.call({from: accounts[5]});
		const uint256CTPCysu = await MarsStakingRewardsv9h9GsY.balanceOf.call(addressCoxKmkO, {from: accounts[3]});

		await expect(MarsStakingRewardsv9h9GsY.inCaseTokensGetStuck.call(addressk1tcZbp, uintc80w1ZX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})