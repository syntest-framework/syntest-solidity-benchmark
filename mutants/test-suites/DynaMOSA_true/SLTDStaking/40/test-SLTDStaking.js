const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingSJwl38R = await SLTDStaking.new({from: accounts[2]});
		const addressnUHtXsV = accounts[3]
		const addressZIyEbat = accounts[0]
		const addressFtIPiqO = accounts[4]
//		const addressbISlS9A = await SLTDStakingSJwl38R.setRewardDistribution.call(addressnUHtXsV, {from: accounts[0]});
//		const addressX44sxp4 = await SLTDStakingSJwl38R.updateReward.call(addressZIyEbat, {from: accounts[1]});
//		const uint256ktXfDw = await SLTDStakingSJwl38R.balanceOf.call(addressFtIPiqO, {from: accounts[3]});
//		await SLTDStakingSJwl38R.getReward.call({from: accounts[2]});

		await expect(SLTDStakingSJwl38R.setRewardDistribution.call(addressnUHtXsV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingolZbEQ = await SLTDStaking.new({from: accounts[3]});
		const addressnifItA = accounts[2]
		const uint256GrQuXW5 = await SLTDStakingolZbEQ.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Ks0WBgo = await SLTDStakingolZbEQ.balanceOf.call(addressnifItA, {from: accounts[5]});
		const boolutE2jkF = await SLTDStakingolZbEQ.isOwner.call({from: accounts[1]});

		assert.equal(boolutE2jkF, false)
		assert.equal(uint256GrQuXW5, BigInt("0"))
		assert.equal(uint256Ks0WBgo, BigInt("0"))
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingOm5HCr2 = await SLTDStaking.new({from: accounts[1]});
		const addressxKbLDwG = accounts[3]
		const addressy4CGDgo = accounts[3]
		const uintxVW4cf9 = BigInt("1295")
//		await SLTDStakingOm5HCr2.onlyRewardDistribution.call({from: accounts[0]});
//		const uint256rLKmOx = await SLTDStakingOm5HCr2.earned.call(addressxKbLDwG, {from: accounts[0]});
//		const uint256oiYBGI0 = await SLTDStakingOm5HCr2.earned.call(addressy4CGDgo, {from: accounts[2]});
//		const uint256xRdXgS = await SLTDStakingOm5HCr2.stake.call(uintxVW4cf9, {from: accounts[2]});

		await expect(SLTDStakingOm5HCr2.onlyRewardDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingl3Di7nP = await SLTDStaking.new({from: accounts[0]});
		const uintT1q50e = BigInt("1410")
		const addressmgzafNl = accounts[4]
		const addresslTzCLYb = accounts[3]
		const addresseu168A = accounts[1]
//		const uint256IPHvUkp = await SLTDStakingl3Di7nP.stake.call(uintT1q50e, {from: accounts[2]});
//		await SLTDStakingl3Di7nP.exit.call({from: accounts[3]});
//		const address0o0F0W = await SLTDStakingl3Di7nP.setSLTD.call(addresslTzCLYb, addressmgzafNl, {from: accounts[3]});
//		const addressubF1i78 = await SLTDStakingl3Di7nP.transferOwnership.call(addresseu168A, {from: accounts[0]});

		await expect(SLTDStakingl3Di7nP.stake.call(uintT1q50e, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingZyxlyC5 = await SLTDStaking.new({from: accounts[4]});
		const addressYSV2UOO = accounts[0]
		const addressx5KsX98 = accounts[4]
		const addressV4KsTgB = accounts[1]
		const uintcedGhfK = BigInt("2012")
		const uintpd6nQRi = BigInt("744")
//		const addressqw2ehPp = await SLTDStakingZyxlyC5.setSLTD.call(addressx5KsX98, addressYSV2UOO, {from: accounts[5]});
//		const uint256Ld5K7zd = await SLTDStakingZyxlyC5.balanceOf.call(addressV4KsTgB, {from: accounts[4]});
//		const uint256Gf9eqD = await SLTDStakingZyxlyC5.stake.call(uintcedGhfK, {from: accounts[1]});
//		const uint256fpMmZIa = await SLTDStakingZyxlyC5.stake.call(uintpd6nQRi, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingZyxlyC5.setSLTD.call(addressx5KsX98, addressYSV2UOO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingkWWT4ad = await SLTDStaking.new({from: accounts[4]});
//		await SLTDStakingkWWT4ad.exit.call({from: accounts[3]});
//		await SLTDStakingkWWT4ad.onlyOwner.call({from: accounts[0]});
//		const boolFgzfsKs = await SLTDStakingkWWT4ad.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingkWWT4ad.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingSxRW08f = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressPZelocv = accounts[1]
		const addressGtDtePn = accounts[4]
		const addressCMdCrL5 = accounts[5]
		const addressef1xTV2 = accounts[2]
		const uint256zteWeyZ = await SLTDStakingSxRW08f.balanceOf.call(addressPZelocv, {from: accounts[4]});
		const addressc0r5CjQ = await SLTDStakingSxRW08f.setRewardDistribution.call(addressGtDtePn, {from: accounts[2]});
		const uint256v2W28ZY = await SLTDStakingSxRW08f.earned.call(addressCMdCrL5, {from: accounts[2]});
		const addressIHzOOOl = await SLTDStakingSxRW08f.setRewardDistribution.call(addressef1xTV2, {from: accounts[1]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingwmfwSRk = await SLTDStaking.new({from: accounts[1]});
		const addresswxNJWdl = accounts[5]
		const uintgecQlQr = BigInt("420")
		const addressOlQXCd = accounts[0]
		const addressxvCizrL = await SLTDStakingwmfwSRk.setRewardDistribution.call(addresswxNJWdl, {from: accounts[1]});
		const uint256v2kIvyN = await SLTDStakingwmfwSRk.rewardPerToken.call({from: accounts[3]});
//		const uint256DPmPif = await SLTDStakingwmfwSRk.withdraw.call(uintgecQlQr, {from: accounts[2]});
//		const addressSOzTWCW = await SLTDStakingwmfwSRk.transferOwnership.call(addressOlQXCd, {from: accounts[1]});

		assert.equal(uint256v2kIvyN, BigInt("0"))
		await expect(SLTDStakingwmfwSRk.withdraw.call(uintgecQlQr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingolZbEQ = await SLTDStaking.new({from: accounts[3]});
		const addressnhXU8HW = accounts[2]
		const uintQfWf3eY = BigInt("267")
		const uint256GrQuXW5 = await SLTDStakingolZbEQ.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		await SLTDStakingolZbEQ.getReward.call({from: accounts[2]});
//		const uint256Ks0WBgo = await SLTDStakingolZbEQ.balanceOf.call(addressnhXU8HW, {from: accounts[5]});
//		const uint256pt27EN = await SLTDStakingolZbEQ.stake.call(uintQfWf3eY, {from: accounts[0]});
//		const boolutE2jkF = await SLTDStakingolZbEQ.isOwner.call({from: accounts[1]});

		assert.equal(uint256GrQuXW5, BigInt("0"))
		await expect(SLTDStakingolZbEQ.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingolZbEQ = await SLTDStaking.new({from: accounts[3]});
		const addressKEgHiD = accounts[0]
		const boolqOmheEA = await SLTDStakingolZbEQ.isOwner.call({from: accounts[1]});
//		await SLTDStakingolZbEQ.getReward.call({from: accounts[2]});
//		const boolutE2jkF = await SLTDStakingolZbEQ.isOwner.call({from: accounts[1]});
//		const addressBXxeeVn = await SLTDStakingolZbEQ.transferOwnership.call(addressKEgHiD, {from: accounts[3]});

		assert.equal(boolqOmheEA, false)
		await expect(SLTDStakingolZbEQ.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingolZbEQ = await SLTDStaking.new({from: accounts[3]});
		const boolqOmheEA = await SLTDStakingolZbEQ.isOwner.call({from: accounts[1]});
//		await SLTDStakingolZbEQ.renounceOwnership.call({from: accounts[3]});
//		await SLTDStakingolZbEQ.getReward.call({from: accounts[2]});

		assert.equal(boolqOmheEA, false)
		await expect(SLTDStakingolZbEQ.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingolZbEQ = await SLTDStaking.new({from: accounts[3]});
		const addresswqsShLJ = await SLTDStakingolZbEQ.owner.call({from: accounts[4]});
//		await SLTDStakingolZbEQ.getReward.call({from: accounts[2]});

		assert.equal(addresswqsShLJ, 0x0Cc92B01B5Fa2e5f61B5e24cf29414F306fA6b29)
		await expect(SLTDStakingolZbEQ.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})