const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsE2Gem5u = await SSTRewards.new({from: accounts[4]});
		const uintCT4QlIP = BigInt("1524")
		const addressg6npr8x = accounts[3]
//		const uint256PCY6lvq = await SSTRewardsE2Gem5u.stake.call(uintCT4QlIP, {from: accounts[4]});
//		const uint256Id4hOy6 = await SSTRewardsE2Gem5u.balanceOf.call(addressg6npr8x, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SSTRewardsE2Gem5u.stake.call(uintCT4QlIP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsSCsN4bI = await SSTRewards.new({from: accounts[4]});
		const uintX5AJtpg = BigInt("23")
//		const uint256n821FTi = await SSTRewardsSCsN4bI.withdraw.call(uintX5AJtpg, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256CjaYiMs = await SSTRewardsSCsN4bI.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(SSTRewardsSCsN4bI.withdraw.call(uintX5AJtpg, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsZb7GQYU = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintuDiJcX = BigInt("1569")
		const uintMIrH14w = BigInt("309")
		const uintlNbZgaX = BigInt("92")
		const addressBbLw9a8 = accounts[1]
		const addressK58mWaX = accounts[1]
		const uint2561uCrXm = await SSTRewardsZb7GQYU.stake.call(uintuDiJcX, {from: accounts[1]});
		const uint256kuDR3kX = await SSTRewardsZb7GQYU.withdraw.call(uintMIrH14w, {from: accounts[4]});
		const uint256vrKZkkm = await SSTRewardsZb7GQYU.notifyRewardAmount.call(uintlNbZgaX, {from: accounts[1]});
		const uint256TZ4HwDT = await SSTRewardsZb7GQYU.earned.call(addressBbLw9a8, {from: accounts[2]});
		await SSTRewardsZb7GQYU.exit.call({from: accounts[3]});
		const uint256DKNxRmM = await SSTRewardsZb7GQYU.earned.call(addressK58mWaX, {from: accounts[3]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardscbLKzMS = await SSTRewards.new({from: accounts[1]});
		const uintPtO1fP9 = BigInt("33")
		const uintKUKikE = BigInt("1094")
//		await SSTRewardscbLKzMS.checkStart.call({from: accounts[5]});
//		const uint256PdA0wLT = await SSTRewardscbLKzMS.stake.call(uintPtO1fP9, {from: accounts[4]});
//		const uint256FYVPltw = await SSTRewardscbLKzMS.notifyRewardAmount.call(uintKUKikE, {from: accounts[2]});

		await expect(SSTRewardscbLKzMS.checkStart.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardswsyeVBd = await SSTRewards.new({from: accounts[0]});
		const addresst3BcyiN = accounts[0]
		const uintpmUnUHL = BigInt("467")
		const uint256kmTRtZ = await SSTRewardswsyeVBd.earned.call(addresst3BcyiN, {from: "0x0000000000000000000000000000000000000001"});
//		await SSTRewardswsyeVBd.getReward.call({from: accounts[2]});
//		const uint256h2tiV06 = await SSTRewardswsyeVBd.withdraw.call(uintpmUnUHL, {from: accounts[1]});

		assert.equal(uint256kmTRtZ, BigInt("0"))
		await expect(SSTRewardswsyeVBd.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardswsyeVBd = await SSTRewards.new({from: accounts[0]});
		const addressRHuEMn0 = accounts[0]
		const uintuELFRew = BigInt("467")
		const uint256kmTRtZ = await SSTRewardswsyeVBd.earned.call(addressRHuEMn0, {from: "0x0000000000000000000000000000000000000001"});
//		await SSTRewardswsyeVBd.getReward.call({from: accounts[2]});
//		await SSTRewardswsyeVBd.exit.call({from: accounts[3]});
//		const uint256h2tiV06 = await SSTRewardswsyeVBd.withdraw.call(uintuELFRew, {from: accounts[1]});

		assert.equal(uint256kmTRtZ, BigInt("0"))
		await expect(SSTRewardswsyeVBd.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardswsyeVBd = await SSTRewards.new({from: accounts[0]});
		const uintg4Bcvtl = BigInt("1604")
//		await SSTRewardswsyeVBd.getReward.call({from: accounts[2]});
//		const uint256PgPRuLJ = await SSTRewardswsyeVBd.notifyRewardAmount.call(uintg4Bcvtl, {from: accounts[3]});

		await expect(SSTRewardswsyeVBd.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})