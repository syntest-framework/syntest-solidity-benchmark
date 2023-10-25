const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsr8kGHb = await DMONDETHRewards.new({from: accounts[5]});
		const uintGssZOaY = BigInt("406")
		await DMONDETHRewardsr8kGHb.renounceOwnership.call({from: accounts[4]});
		const uint256sv9ECvC = await DMONDETHRewardsr8kGHb.totalSupply.call({from: accounts[2]});
		const boolR5cr5w5 = await DMONDETHRewardsr8kGHb.isOwner.call({from: accounts[4]});
		const uint256MyWTYNi = await DMONDETHRewardsr8kGHb.stake.call(uintGssZOaY, {from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsr8kGHb.exit.call({from: accounts[3]});

		await expect(DMONDETHRewardsr8kGHb.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsHmZtbcc = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintihUgEH = BigInt("682")
		const addressJM0FfOg = await DMONDETHRewardsHmZtbcc.owner.call({from: accounts[1]});
		const uint256YLdcAzX = await DMONDETHRewardsHmZtbcc.stake.call(uintihUgEH, {from: accounts[1]});
		const uint2560ajP9R = await DMONDETHRewardsHmZtbcc.remainingReward.call({from: accounts[1]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXFhHIGA = await DMONDETHRewards.new({from: accounts[4]});
		const uintee1IfD9 = BigInt("1574")
		const addressYvqw8Ce = accounts[4]
		const addressvATiZYY = accounts[5]
		const uint256dLTAaz = await DMONDETHRewardsXFhHIGA.stake.call(uintee1IfD9, {from: accounts[3]});
		const address4Bfdao = await DMONDETHRewardsXFhHIGA.setRewardDistribution.call(addressYvqw8Ce, {from: accounts[2]});
		const uint256L2jjT0P = await DMONDETHRewardsXFhHIGA.earned.call(addressvATiZYY, {from: accounts[3]});
		const uint2569TovOZ = await DMONDETHRewardsXFhHIGA.remainingReward.call({from: accounts[2]});

		await expect(DMONDETHRewardsXFhHIGA.stake.call(uintee1IfD9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewards6a3gid = await DMONDETHRewards.new({from: accounts[1]});
		const uintX9PMD5Z = BigInt("1400")
		const booli1TobT8 = await DMONDETHRewards6a3gid.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Q5wloPA = await DMONDETHRewards6a3gid.totalSupply.call({from: accounts[0]});
		const uint256dMWRWBu = await DMONDETHRewards6a3gid.withdraw.call(uintX9PMD5Z, {from: accounts[3]});

		assert.equal(booli1TobT8, false)
		assert.equal(uint256Q5wloPA, BigInt("0"))
		await expect(DMONDETHRewards6a3gid.withdraw.call(uintX9PMD5Z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardss24XVHa = await DMONDETHRewards.new({from: accounts[5]});
		const uintimBrFee = BigInt("1058")
		const uint256hhaaXdR = await DMONDETHRewardss24XVHa.remainingReward.call({from: accounts[1]});
		const uint256LK9A6KQ = await DMONDETHRewardss24XVHa.totalSupply.call({from: accounts[4]});
		await DMONDETHRewardss24XVHa.exit.call({from: accounts[4]});
		const uint256H1fukpg = await DMONDETHRewardss24XVHa.notifyRewardAmount.call(uintimBrFee, {from: accounts[2]});

		await expect(DMONDETHRewardss24XVHa.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewards0aPR9K = await DMONDETHRewards.new({from: accounts[0]});
		const addressvpgLMtW = accounts[5]
		await DMONDETHRewards0aPR9K.onlyOwner.call({from: accounts[2]});
		const addressJMHh5dJ = await DMONDETHRewards0aPR9K.setStakeAddress.call(addressvpgLMtW, {from: accounts[2]});
		const uint256KB8ODr = await DMONDETHRewards0aPR9K.rewardPerToken.call({from: accounts[3]});
		await DMONDETHRewards0aPR9K.getReward.call({from: accounts[4]});

		await expect(DMONDETHRewards0aPR9K.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsvzZJTlS = await DMONDETHRewards.new({from: accounts[4]});
		const addressYeknto9 = accounts[5]
		const uintGKBTFWN = BigInt("654")
		await DMONDETHRewardsvzZJTlS.getReward.call({from: accounts[2]});
		const uint256TBVyvwW = await DMONDETHRewardsvzZJTlS.balanceOf.call(addressYeknto9, {from: accounts[5]});
		const uint256kiO5IM = await DMONDETHRewardsvzZJTlS.withdraw.call(uintGKBTFWN, {from: accounts[4]});

		await expect(DMONDETHRewardsvzZJTlS.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewards6a3gid = await DMONDETHRewards.new({from: accounts[1]});
		const addressMUhA3Ww = accounts[3]
		const uintdgYfhMS = BigInt("1400")
		const addressCa4Vkuc = await DMONDETHRewards6a3gid.setStakeAddress.call(addressMUhA3Ww, {from: accounts[1]});
		const booli1TobT8 = await DMONDETHRewards6a3gid.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256dMWRWBu = await DMONDETHRewards6a3gid.withdraw.call(uintdgYfhMS, {from: accounts[3]});
		await DMONDETHRewards6a3gid.renounceOwnership.call({from: accounts[4]});
		await DMONDETHRewards6a3gid.getReward.call({from: accounts[5]});

		assert.equal(booli1TobT8, false)
		await expect(DMONDETHRewards6a3gid.withdraw.call(uintdgYfhMS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewards6a3gid = await DMONDETHRewards.new({from: accounts[1]});
		const uintSErSg99 = BigInt("1400")
		await DMONDETHRewards6a3gid.exit.call({from: accounts[4]});
		const booli1TobT8 = await DMONDETHRewards6a3gid.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256dMWRWBu = await DMONDETHRewards6a3gid.withdraw.call(uintSErSg99, {from: accounts[3]});
		const bool01ULGk = await DMONDETHRewards6a3gid.isOwner.call({from: accounts[1]});

		await expect(DMONDETHRewards6a3gid.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsvzZJTlS = await DMONDETHRewards.new({from: accounts[4]});
		const uintYmCiQaG = BigInt("1073")
		await DMONDETHRewardsvzZJTlS.getReward.call({from: accounts[2]});
		const uint256TAogFiB = await DMONDETHRewardsvzZJTlS.notifyRewardAmount.call(uintYmCiQaG, {from: accounts[2]});

		await expect(DMONDETHRewardsvzZJTlS.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsvzZJTlS = await DMONDETHRewards.new({from: accounts[4]});
		await DMONDETHRewardsvzZJTlS.renounceOwnership.call({from: accounts[4]});
		await DMONDETHRewardsvzZJTlS.getReward.call({from: accounts[2]});

		await expect(DMONDETHRewardsvzZJTlS.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsvzZJTlS = await DMONDETHRewards.new({from: accounts[4]});
		const addresssrHviSN = accounts[2]
		const uintDy9AAQe = BigInt("1811")
		const addressBwq0hhL = await DMONDETHRewardsvzZJTlS.transferOwnership.call(addresssrHviSN, {from: accounts[4]});
		const uint256z1R0qr = await DMONDETHRewardsvzZJTlS.stake.call(uintDy9AAQe, {from: accounts[3]});
		await DMONDETHRewardsvzZJTlS.getReward.call({from: accounts[2]});

		await expect(DMONDETHRewardsvzZJTlS.stake.call(uintDy9AAQe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsvzZJTlS = await DMONDETHRewards.new({from: accounts[4]});
		await DMONDETHRewardsvzZJTlS.getReward.call({from: accounts[2]});
		const addressAGhTaVE = await DMONDETHRewardsvzZJTlS.owner.call({from: accounts[5]});
		await DMONDETHRewardsvzZJTlS.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardsvzZJTlS.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsvzZJTlS = await DMONDETHRewards.new({from: accounts[4]});
		const uinta44Stu2 = BigInt("654")
		await DMONDETHRewardsvzZJTlS.getReward.call({from: accounts[2]});
		const uint256pE2qGq3 = await DMONDETHRewardsvzZJTlS.setStartTime.call(uinta44Stu2, {from: accounts[4]});

		await expect(DMONDETHRewardsvzZJTlS.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewards6a3gid = await DMONDETHRewards.new({from: accounts[1]});
		const addressRncGJAr = accounts[3]
		const uintmMAriPH = BigInt("1008")
		const addressQplrAnq = await DMONDETHRewards6a3gid.setRewardDistribution.call(addressRncGJAr, {from: accounts[1]});
		const uint256dMWRWBu = await DMONDETHRewards6a3gid.withdraw.call(uintmMAriPH, {from: accounts[3]});
		const uint256J2Ln0A6 = await DMONDETHRewards6a3gid.rewardPerToken.call({from: accounts[0]});

		await expect(DMONDETHRewards6a3gid.withdraw.call(uintmMAriPH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsvzZJTlS = await DMONDETHRewards.new({from: accounts[4]});
		const uintom8SRkO = BigInt("1184")
		const addressx7EVZQv = await DMONDETHRewardsvzZJTlS.owner.call({from: accounts[2]});
		const uint256OGCyeCQ = await DMONDETHRewardsvzZJTlS.notifyRewardAmount.call(uintom8SRkO, {from: accounts[4]});
		await DMONDETHRewardsvzZJTlS.getReward.call({from: accounts[2]});

		assert.equal(addressx7EVZQv, 0xe1975284efB3E7Fc758BE564a0d68dFE944ECC0B)
		await expect(DMONDETHRewardsvzZJTlS.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})