const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsZbaKIQm = await DMONDETHRewards.new({from: accounts[2]});
		const uintM4ey8iB = BigInt("839")
		const uintz7HLdsz = BigInt("17")
		const uintYZ4nf9a = BigInt("1425")
//		const uint256xHdcXqw = await DMONDETHRewardsZbaKIQm.withdraw.call(uintM4ey8iB, {from: accounts[4]});
//		const uint256AkW7tB2 = await DMONDETHRewardsZbaKIQm.withdraw.call(uintz7HLdsz, {from: accounts[0]});
//		const uint256e8Ks5Ym = await DMONDETHRewardsZbaKIQm.remainingReward.call({from: accounts[2]});
//		const uint256f1rVFTd = await DMONDETHRewardsZbaKIQm.notifyRewardAmount.call(uintYZ4nf9a, {from: accounts[1]});
//		const addressiy8txhm = await DMONDETHRewardsZbaKIQm.owner.call({from: accounts[2]});

		await expect(DMONDETHRewardsZbaKIQm.withdraw.call(uintM4ey8iB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsctUorv8 = await DMONDETHRewards.new({from: accounts[4]});
		const addressYKsjNHM = accounts[0]
		const boolGbHjaFo = await DMONDETHRewardsctUorv8.isOwner.call({from: accounts[1]});
//		await DMONDETHRewardsctUorv8.renounceOwnership.call({from: accounts[0]});
//		await DMONDETHRewardsctUorv8.renounceOwnership.call({from: accounts[3]});
//		const addresspuynMQR = await DMONDETHRewardsctUorv8.transferOwnership.call(addressYKsjNHM, {from: accounts[1]});

		assert.equal(boolGbHjaFo, false)
		await expect(DMONDETHRewardsctUorv8.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsjWmRr8C = await DMONDETHRewards.new({from: accounts[3]});
		const uintWIPMOO = BigInt("469")
//		await DMONDETHRewardsjWmRr8C.checkStart.call({from: accounts[3]});
//		const uint2563ZVjdX = await DMONDETHRewardsjWmRr8C.withdraw.call(uintWIPMOO, {from: accounts[0]});

		await expect(DMONDETHRewardsjWmRr8C.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsCD7QTu8 = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressb9wR4Xc = accounts[2]
		await DMONDETHRewardsCD7QTu8.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addressLtNM598 = await DMONDETHRewardsCD7QTu8.setStakeAddress.call(addressb9wR4Xc, {from: accounts[0]});
		await DMONDETHRewardsCD7QTu8.renounceOwnership.call({from: accounts[1]});
		const addressB4SJVG9 = await DMONDETHRewardsCD7QTu8.owner.call({from: accounts[4]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsVCUqLKp = await DMONDETHRewards.new({from: accounts[0]});
		const address8JLeDr = accounts[2]
		const uintZbnl3Ql = BigInt("194")
		const uintV41m0tc = BigInt("646")
		const addressFSz8IOj = accounts[0]
		const uint256orY3eT = await DMONDETHRewardsVCUqLKp.earned.call(address8JLeDr, {from: accounts[0]});
//		const uint256Le0vU9G = await DMONDETHRewardsVCUqLKp.stake.call(uintZbnl3Ql, {from: accounts[0]});
//		const uint256fYnikil = await DMONDETHRewardsVCUqLKp.notifyRewardAmount.call(uintV41m0tc, {from: accounts[3]});
//		await DMONDETHRewardsVCUqLKp.checkStart.call({from: accounts[1]});
//		const uint256L7sZdx = await DMONDETHRewardsVCUqLKp.balanceOf.call(addressFSz8IOj, {from: accounts[2]});

		assert.equal(uint256orY3eT, BigInt("0"))
		await expect(DMONDETHRewardsVCUqLKp.stake.call(uintZbnl3Ql, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsVCUqLKp = await DMONDETHRewards.new({from: accounts[0]});
		const addressw6czPD = accounts[2]
		const uintAC1Pynh = BigInt("646")
		const addresslDAEMmv = accounts[1]
		const uint256orY3eT = await DMONDETHRewardsVCUqLKp.earned.call(addressw6czPD, {from: accounts[0]});
//		const uint256fYnikil = await DMONDETHRewardsVCUqLKp.notifyRewardAmount.call(uintAC1Pynh, {from: accounts[3]});
//		await DMONDETHRewardsVCUqLKp.checkStart.call({from: accounts[1]});
//		const uint256L7sZdx = await DMONDETHRewardsVCUqLKp.balanceOf.call(addresslDAEMmv, {from: accounts[2]});

		assert.equal(uint256orY3eT, BigInt("0"))
		await expect(DMONDETHRewardsVCUqLKp.notifyRewardAmount.call(uintAC1Pynh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsVCUqLKp = await DMONDETHRewards.new({from: accounts[0]});
		const addressleJOABT = accounts[3]
		const uintb8BYJSH = BigInt("176")
		const uintm3jGXk9 = BigInt("646")
		const addressTR8dAwU = accounts[0]
		const uint256orY3eT = await DMONDETHRewardsVCUqLKp.earned.call(addressleJOABT, {from: accounts[0]});
//		await DMONDETHRewardsVCUqLKp.exit.call({from: accounts[2]});
//		const uint256Le0vU9G = await DMONDETHRewardsVCUqLKp.stake.call(uintb8BYJSH, {from: accounts[0]});
//		const uint256fYnikil = await DMONDETHRewardsVCUqLKp.notifyRewardAmount.call(uintm3jGXk9, {from: accounts[3]});
//		await DMONDETHRewardsVCUqLKp.checkStart.call({from: accounts[1]});
//		await DMONDETHRewardsVCUqLKp.onlyOwner.call({from: accounts[4]});
//		const uint256L7sZdx = await DMONDETHRewardsVCUqLKp.balanceOf.call(addressTR8dAwU, {from: accounts[2]});

		assert.equal(uint256orY3eT, BigInt("0"))
		await expect(DMONDETHRewardsVCUqLKp.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsbThmNLj = await DMONDETHRewards.new({from: accounts[2]});
		const uint256cz8jUz = await DMONDETHRewardsbThmNLj.rewardPerToken.call({from: accounts[4]});
		const addressR2wU2VT = await DMONDETHRewardsbThmNLj.owner.call({from: accounts[4]});
//		await DMONDETHRewardsbThmNLj.exit.call({from: accounts[5]});

		assert.equal(addressR2wU2VT, 0xC9b5C5E13e81c05ce1F1d91bA1818Fb0f27eEB92)
		assert.equal(uint256cz8jUz, BigInt("0"))
		await expect(DMONDETHRewardsbThmNLj.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsbThmNLj = await DMONDETHRewards.new({from: accounts[2]});
		const addressgU6T6ST = accounts[3]
		const addressQAzvOlx = await DMONDETHRewardsbThmNLj.setStakeAddress.call(addressgU6T6ST, {from: accounts[2]});
		const uint256cz8jUz = await DMONDETHRewardsbThmNLj.rewardPerToken.call({from: accounts[4]});
//		await DMONDETHRewardsbThmNLj.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await DMONDETHRewardsbThmNLj.exit.call({from: accounts[5]});

		assert.equal(uint256cz8jUz, BigInt("0"))
		await expect(DMONDETHRewardsbThmNLj.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsbThmNLj = await DMONDETHRewards.new({from: accounts[2]});
		const addresswaSZPdu = accounts[1]
		const addressiNk0nKT = await DMONDETHRewardsbThmNLj.setRewardDistribution.call(addresswaSZPdu, {from: accounts[2]});
		const addressR2wU2VT = await DMONDETHRewardsbThmNLj.owner.call({from: accounts[4]});
//		await DMONDETHRewardsbThmNLj.exit.call({from: accounts[5]});

		assert.equal(addressR2wU2VT, 0xC9b5C5E13e81c05ce1F1d91bA1818Fb0f27eEB92)
		await expect(DMONDETHRewardsbThmNLj.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsVCUqLKp = await DMONDETHRewards.new({from: accounts[0]});
		const uintCzqM996 = BigInt("194")
		const addressAH5rO5g = accounts[3]
		const addressbW4vDGZ = accounts[0]
//		const uint256NUesvOw = await DMONDETHRewardsVCUqLKp.remainingReward.call({from: accounts[0]});
//		const uint256Le0vU9G = await DMONDETHRewardsVCUqLKp.stake.call(uintCzqM996, {from: accounts[0]});
//		const addresszwsGUhG = await DMONDETHRewardsVCUqLKp.setStakeAddress.call(addressAH5rO5g, {from: accounts[5]});
//		await DMONDETHRewardsVCUqLKp.checkStart.call({from: accounts[1]});
//		const uint256L7sZdx = await DMONDETHRewardsVCUqLKp.balanceOf.call(addressbW4vDGZ, {from: accounts[2]});

		await expect(DMONDETHRewardsVCUqLKp.remainingReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsVCUqLKp = await DMONDETHRewards.new({from: accounts[0]});
		const addressHhM47in = accounts[1]
		const uintUGJMBS = BigInt("38")
//		await DMONDETHRewardsVCUqLKp.getReward.call({from: accounts[3]});
//		const addressdHmUaQN = await DMONDETHRewardsVCUqLKp.setRewardDistribution.call(addressHhM47in, {from: accounts[2]});
//		const uint256Le0vU9G = await DMONDETHRewardsVCUqLKp.stake.call(uintUGJMBS, {from: accounts[0]});

		await expect(DMONDETHRewardsVCUqLKp.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsluOMzOX = await DMONDETHRewards.new({from: accounts[3]});
		const uintTcPenht = BigInt("1276")
		const uintfNSVOmE = BigInt("1251")
		const addresss89cmhi = await DMONDETHRewardsluOMzOX.owner.call({from: accounts[0]});
		const uint256G97K9K = await DMONDETHRewardsluOMzOX.rewardPerToken.call({from: accounts[2]});
//		await DMONDETHRewardsluOMzOX.renounceOwnership.call({from: accounts[3]});
//		const uint256RinY4yc = await DMONDETHRewardsluOMzOX.withdraw.call(uintTcPenht, {from: accounts[1]});
//		const uint256P0hYuuZ = await DMONDETHRewardsluOMzOX.stake.call(uintfNSVOmE, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresss89cmhi, 0x7d0DD89639D127177218F6F277316856F7eD5283)
		assert.equal(uint256G97K9K, BigInt("0"))
		await expect(DMONDETHRewardsluOMzOX.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsVCUqLKp = await DMONDETHRewards.new({from: accounts[0]});
		const uintw54tM8Q = BigInt("973")
		const uinttOENE4A = BigInt("192")
//		await DMONDETHRewardsVCUqLKp.getReward.call({from: accounts[0]});
//		const uint256RWymVwC = await DMONDETHRewardsVCUqLKp.notifyRewardAmount.call(uintw54tM8Q, {from: accounts[0]});
//		const uint256Le0vU9G = await DMONDETHRewardsVCUqLKp.stake.call(uinttOENE4A, {from: accounts[0]});
//		await DMONDETHRewardsVCUqLKp.checkStart.call({from: accounts[4]});
//		await DMONDETHRewardsVCUqLKp.getReward.call({from: accounts[5]});

		await expect(DMONDETHRewardsVCUqLKp.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsntouxca = await DMONDETHRewards.new({from: accounts[2]});
		const addressmPELaWU = accounts[4]
		const addressBc1Berw = await DMONDETHRewardsntouxca.transferOwnership.call(addressmPELaWU, {from: accounts[2]});
//		await DMONDETHRewardsntouxca.exit.call({from: accounts[1]});

		await expect(DMONDETHRewardsntouxca.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardspMkbmeJ = await DMONDETHRewards.new({from: accounts[4]});
		const uintB02iG14 = BigInt("382")
		const addressk6gLgi = accounts[2]
		const addressxz2Bl08 = accounts[4]
		const uint256cxYXcfp = await DMONDETHRewardspMkbmeJ.setStartTime.call(uintB02iG14, {from: accounts[4]});
		const uint256fSRT0kR = await DMONDETHRewardspMkbmeJ.rewardPerToken.call({from: accounts[2]});
//		await DMONDETHRewardspMkbmeJ.checkStart.call({from: accounts[3]});
//		const addressxrucc4 = await DMONDETHRewardspMkbmeJ.updateReward.call(addressk6gLgi, {from: accounts[0]});
//		const uint256DVnCWTO = await DMONDETHRewardspMkbmeJ.earned.call(addressxz2Bl08, {from: accounts[2]});

		assert.equal(uint256fSRT0kR, BigInt("0"))
		await expect(DMONDETHRewardspMkbmeJ.checkStart.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})