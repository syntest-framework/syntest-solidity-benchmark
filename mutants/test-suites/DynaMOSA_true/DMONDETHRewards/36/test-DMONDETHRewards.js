const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsfR68vp = await DMONDETHRewards.new({from: accounts[1]});
		const addressySeSF1P = "0x0000000000000000000000000000000000000001"
//		const addressXYGKtfu = await DMONDETHRewardsfR68vp.updateReward.call(addressySeSF1P, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256XEKIXz = await DMONDETHRewardsfR68vp.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(DMONDETHRewardsfR68vp.updateReward.call(addressySeSF1P, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsPMUKRHG = await DMONDETHRewards.new({from: accounts[0]});
		const addressTP46X4F = accounts[4]
		const uintOVqvVs7 = BigInt("1195")
		const addresseHhU9Ka = accounts[1]
		const uint256Y1hlMED = await DMONDETHRewardsPMUKRHG.balanceOf.call(addressTP46X4F, {from: accounts[0]});
//		await DMONDETHRewardsPMUKRHG.checkStart.call({from: accounts[3]});
//		const uint256pU2EAHE = await DMONDETHRewardsPMUKRHG.stake.call(uintOVqvVs7, {from: accounts[2]});
//		await DMONDETHRewardsPMUKRHG.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256P1b3tgT = await DMONDETHRewardsPMUKRHG.balanceOf.call(addresseHhU9Ka, {from: accounts[2]});

		assert.equal(uint256Y1hlMED, BigInt("0"))
		await expect(DMONDETHRewardsPMUKRHG.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsgpNIo2V = await DMONDETHRewards.new({from: accounts[2]});
//		await DMONDETHRewardsgpNIo2V.getReward.call({from: accounts[3]});
//		await DMONDETHRewardsgpNIo2V.exit.call({from: accounts[4]});

		await expect(DMONDETHRewardsgpNIo2V.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsOwFhYCN = await DMONDETHRewards.new({from: accounts[4]});
		const uints6Msqx = BigInt("169")
		const addressxTmxXBD = accounts[1]
		const addresspj6JHid = accounts[4]
		const addresstau92o5 = accounts[3]
		const uintYdgb4IJ = BigInt("1962")
		const uint256oDOrr3M = await DMONDETHRewardsOwFhYCN.notifyRewardAmount.call(uints6Msqx, {from: accounts[4]});
//		const addressRfkV28v = await DMONDETHRewardsOwFhYCN.setStakeAddress.call(addressxTmxXBD, {from: accounts[2]});
//		const uint256i3FUeNt = await DMONDETHRewardsOwFhYCN.balanceOf.call(addresspj6JHid, {from: accounts[3]});
//		const address7iJHTT = await DMONDETHRewardsOwFhYCN.updateReward.call(addresstau92o5, {from: accounts[0]});
//		const uint256IKWwWHq = await DMONDETHRewardsOwFhYCN.setStartTime.call(uintYdgb4IJ, {from: accounts[0]});
//		await DMONDETHRewardsOwFhYCN.getReward.call({from: accounts[0]});

		await expect(DMONDETHRewardsOwFhYCN.setStakeAddress.call(addressxTmxXBD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsuLVy225 = await DMONDETHRewards.new({from: accounts[3]});
		const uintl4Fw5Fe = BigInt("788")
		const addresswaH0Thf = accounts[3]
		const uintSIX3NpO = BigInt("910")
//		const uint256tCJ3X0 = await DMONDETHRewardsuLVy225.withdraw.call(uintl4Fw5Fe, {from: accounts[4]});
//		const addressNNBa2hj = await DMONDETHRewardsuLVy225.updateReward.call(addresswaH0Thf, {from: accounts[4]});
//		const uint256TUFu4Lc = await DMONDETHRewardsuLVy225.withdraw.call(uintSIX3NpO, {from: accounts[3]});

		await expect(DMONDETHRewardsuLVy225.withdraw.call(uintl4Fw5Fe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsfR68vp = await DMONDETHRewards.new({from: accounts[1]});
		const addressQBZiyFs = accounts[5]
		const addressxiqr5sE = await DMONDETHRewardsfR68vp.transferOwnership.call(addressQBZiyFs, {from: accounts[1]});
		const uint256XEKIXz = await DMONDETHRewardsfR68vp.lastTimeRewardApplicable.call({from: accounts[1]});
//		await DMONDETHRewardsfR68vp.exit.call({from: accounts[3]});

		assert.equal(uint256XEKIXz, BigInt("0"))
		await expect(DMONDETHRewardsfR68vp.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsgpNIo2V = await DMONDETHRewards.new({from: accounts[2]});
		const addressWCDbBeo = accounts[0]
		const addressEIywRyG = await DMONDETHRewardsgpNIo2V.owner.call({from: accounts[2]});
//		await DMONDETHRewardsgpNIo2V.getReward.call({from: accounts[3]});
//		const addressOvZgjOz = await DMONDETHRewardsgpNIo2V.updateReward.call(addressWCDbBeo, {from: accounts[4]});
//		await DMONDETHRewardsgpNIo2V.exit.call({from: accounts[4]});

		assert.equal(addressEIywRyG, 0xbe2B5B617d7ae7f3205801dBDcdca0b483d20D8B)
		await expect(DMONDETHRewardsgpNIo2V.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsgpNIo2V = await DMONDETHRewards.new({from: accounts[2]});
		const uintmaf5TOQ = BigInt("37")
		const addressP1agam = accounts[0]
//		await DMONDETHRewardsgpNIo2V.getReward.call({from: accounts[3]});
//		const uint256lZe55MY = await DMONDETHRewardsgpNIo2V.stake.call(uintmaf5TOQ, {from: accounts[3]});
//		const addressUF8VE0i = await DMONDETHRewardsgpNIo2V.updateReward.call(addressP1agam, {from: accounts[2]});
//		await DMONDETHRewardsgpNIo2V.exit.call({from: accounts[4]});

		await expect(DMONDETHRewardsgpNIo2V.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsny3uoO1 = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintD0aQSdJ = BigInt("1494")
		const uintJ5F5Ui3 = BigInt("1592")
		const addressVanAqQu = accounts[1]
		const uint256CnDuE8q = await DMONDETHRewardsny3uoO1.rewardPerToken.call({from: accounts[0]});
		const uint256CE5jQ2B = await DMONDETHRewardsny3uoO1.stake.call(uintD0aQSdJ, {from: accounts[1]});
		const uint256CtHuaC = await DMONDETHRewardsny3uoO1.notifyRewardAmount.call(uintJ5F5Ui3, {from: accounts[3]});
		await DMONDETHRewardsny3uoO1.getReward.call({from: accounts[3]});
		const addresscI46eU = await DMONDETHRewardsny3uoO1.setRewardDistribution.call(addressVanAqQu, {from: accounts[2]});
		await DMONDETHRewardsny3uoO1.onlyOwner.call({from: accounts[0]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsLhjM7UT = await DMONDETHRewards.new({from: accounts[0]});
		const addressPbQzOEt = accounts[1]
		const uintZActLUO = BigInt("462")
		const uintm3YEef = BigInt("311")
//		const uint256tGP9Fhw = await DMONDETHRewardsLhjM7UT.remainingReward.call({from: accounts[0]});
//		const uint256r1mL98 = await DMONDETHRewardsLhjM7UT.totalSupply.call({from: accounts[0]});
//		const addressSETEif0 = await DMONDETHRewardsLhjM7UT.updateReward.call(addressPbQzOEt, {from: accounts[0]});
//		const uint256CxVJW9 = await DMONDETHRewardsLhjM7UT.withdraw.call(uintZActLUO, {from: accounts[1]});
//		const uint256G9tEYdN = await DMONDETHRewardsLhjM7UT.stake.call(uintm3YEef, {from: accounts[0]});

		await expect(DMONDETHRewardsLhjM7UT.remainingReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsgpNIo2V = await DMONDETHRewards.new({from: accounts[2]});
		const uint6tLMiU = BigInt("61")
//		const uint256yayaIOU = await DMONDETHRewardsgpNIo2V.notifyRewardAmount.call(uint6tLMiU, {from: accounts[4]});
//		await DMONDETHRewardsgpNIo2V.exit.call({from: accounts[4]});

		await expect(DMONDETHRewardsgpNIo2V.notifyRewardAmount.call(uint6tLMiU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsOwFhYCN = await DMONDETHRewards.new({from: accounts[4]});
		const addressw4vSFXK = accounts[3]
		const uintdN1ph8f = BigInt("144")
		const addressWxf1U96 = accounts[1]
		const addresssHfhXGf = accounts[1]
		const addressTdxFF1k = accounts[1]
		const uintqL7gwUK = BigInt("1962")
		const uintaQJeMs1 = BigInt("1145")
		const uint256caorg0n = await DMONDETHRewardsOwFhYCN.earned.call(addressw4vSFXK, {from: accounts[0]});
		const uint256oDOrr3M = await DMONDETHRewardsOwFhYCN.notifyRewardAmount.call(uintdN1ph8f, {from: accounts[4]});
		const addressu7R1Kc7 = await DMONDETHRewardsOwFhYCN.setStakeAddress.call(addressWxf1U96, {from: accounts[4]});
//		const addressRfkV28v = await DMONDETHRewardsOwFhYCN.setStakeAddress.call(addresssHfhXGf, {from: accounts[2]});
//		const addressc4kmfPt = await DMONDETHRewardsOwFhYCN.transferOwnership.call(addressTdxFF1k, {from: accounts[2]});
//		await DMONDETHRewardsOwFhYCN.checkStart.call({from: accounts[4]});
//		const uint256IKWwWHq = await DMONDETHRewardsOwFhYCN.setStartTime.call(uintqL7gwUK, {from: accounts[0]});
//		const uint256Mgmrm6J = await DMONDETHRewardsOwFhYCN.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256BVtT1Uf = await DMONDETHRewardsOwFhYCN.remainingReward.call({from: accounts[3]});
//		await DMONDETHRewardsOwFhYCN.getReward.call({from: accounts[0]});
//		const uint256f0IfoPM = await DMONDETHRewardsOwFhYCN.withdraw.call(uintaQJeMs1, {from: accounts[1]});

		assert.equal(uint256caorg0n, BigInt("0"))
		await expect(DMONDETHRewardsOwFhYCN.setStakeAddress.call(addresssHfhXGf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsWJU6xKV = await DMONDETHRewards.new({from: accounts[2]});
		const uintM5uPn4u = BigInt("883")
		const addressXHAy0LA = accounts[1]
//		await DMONDETHRewardsWJU6xKV.renounceOwnership.call({from: accounts[2]});
//		await DMONDETHRewardsWJU6xKV.onlyRewardDistribution.call({from: accounts[1]});
//		const uint256SY4eT5t = await DMONDETHRewardsWJU6xKV.withdraw.call(uintM5uPn4u, {from: accounts[3]});
//		const uint256Z3vEaqM = await DMONDETHRewardsWJU6xKV.earned.call(addressXHAy0LA, {from: accounts[0]});
//		await DMONDETHRewardsWJU6xKV.getReward.call({from: accounts[4]});

		await expect(DMONDETHRewardsWJU6xKV.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsgpNIo2V = await DMONDETHRewards.new({from: accounts[2]});
		const addressmhW552B = accounts[2]
		const uintcwBg8YV = BigInt("444")
		const addressy3SNk1e = accounts[0]
		const addressKJO72LP = accounts[2]
		const uint6vtNc3 = BigInt("1943")
		const uint256SpgDNAt = await DMONDETHRewardsgpNIo2V.balanceOf.call(addressmhW552B, {from: accounts[3]});
		const uint256xXeEsGZ = await DMONDETHRewardsgpNIo2V.setStartTime.call(uintcwBg8YV, {from: accounts[2]});
//		const addressv2jc99G = await DMONDETHRewardsgpNIo2V.updateReward.call(addressy3SNk1e, {from: accounts[3]});
//		const uint256xCgslK0 = await DMONDETHRewardsgpNIo2V.earned.call(addressKJO72LP, {from: accounts[3]});
//		await DMONDETHRewardsgpNIo2V.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint2566xYiR6 = await DMONDETHRewardsgpNIo2V.stake.call(uint6vtNc3, {from: accounts[1]});

		assert.equal(uint256SpgDNAt, BigInt("0"))
		await expect(DMONDETHRewardsgpNIo2V.updateReward.call(addressy3SNk1e, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsgpNIo2V = await DMONDETHRewards.new({from: accounts[2]});
		const addressDunBULO = accounts[3]
//		await DMONDETHRewardsgpNIo2V.getReward.call({from: accounts[3]});
//		const addresssspE6Wp = await DMONDETHRewardsgpNIo2V.setRewardDistribution.call(addressDunBULO, {from: accounts[2]});
//		await DMONDETHRewardsgpNIo2V.onlyRewardDistribution.call({from: accounts[3]});

		await expect(DMONDETHRewardsgpNIo2V.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})