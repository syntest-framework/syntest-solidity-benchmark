const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStaking8ZhFvh = await SLTDStaking.new({from: accounts[0]});
		const uintuiLvHK3 = BigInt("826")
		const addresss77Gkys = accounts[3]
		const uintWl5rS1o = BigInt("827")
		const uint256OCbzgP = await SLTDStaking8ZhFvh.lastTimeRewardApplicable.call({from: accounts[3]});
		const boolu2KEWmU = await SLTDStaking8ZhFvh.isOwner.call({from: accounts[3]});
//		const uint256QCSFfob = await SLTDStaking8ZhFvh.stake.call(uintuiLvHK3, {from: accounts[3]});
//		const uint256YVrXWx5 = await SLTDStaking8ZhFvh.balanceOf.call(addresss77Gkys, {from: accounts[3]});
//		const uint256FwuoKcd = await SLTDStaking8ZhFvh.withdraw.call(uintWl5rS1o, {from: accounts[1]});

		assert.equal(boolu2KEWmU, false)
		assert.equal(uint256OCbzgP, BigInt("0"))
		await expect(SLTDStaking8ZhFvh.stake.call(uintuiLvHK3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingRb8Cie = await SLTDStaking.new({from: accounts[3]});
		const uint256K9jAs6v = await SLTDStakingRb8Cie.lastTimeRewardApplicable.call({from: accounts[2]});
//		await SLTDStakingRb8Cie.renounceOwnership.call({from: accounts[0]});
//		const boold8ktCSM = await SLTDStakingRb8Cie.isOwner.call({from: accounts[4]});
//		await SLTDStakingRb8Cie.onlyRewardDistribution.call({from: accounts[1]});

		assert.equal(uint256K9jAs6v, BigInt("0"))
		await expect(SLTDStakingRb8Cie.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakinguBTKLEX = await SLTDStaking.new({from: accounts[4]});
		const uintkE8Btsv = BigInt("1889")
		const addressRG4HLxW = accounts[0]
//		const uint256iLGf79C = await SLTDStakinguBTKLEX.withdraw.call(uintkE8Btsv, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256pDexYDu = await SLTDStakinguBTKLEX.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint2563qZgqc = await SLTDStakinguBTKLEX.earned.call(addressRG4HLxW, {from: accounts[4]});
//		await SLTDStakinguBTKLEX.onlyOwner.call({from: accounts[3]});
//		const uint256IymX1aO = await SLTDStakinguBTKLEX.totalSupply.call({from: accounts[1]});

		await expect(SLTDStakinguBTKLEX.withdraw.call(uintkE8Btsv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingICSmm9Y = await SLTDStaking.new({from: accounts[1]});
		const addressuvV5rvr = accounts[1]
		const uintavGjb0O = BigInt("1586")
		const addressl0iKj0x = accounts[3]
		const uintLsiCiDf = BigInt("805")
//		const addresskKqw8gY = await SLTDStakingICSmm9Y.updateReward.call(addressuvV5rvr, {from: accounts[2]});
//		const uint256HBgMvEz = await SLTDStakingICSmm9Y.stake.call(uintavGjb0O, {from: accounts[0]});
//		const addresscREQHF = await SLTDStakingICSmm9Y.setRewardDistribution.call(addressl0iKj0x, {from: accounts[2]});
//		const uint256MIOri0 = await SLTDStakingICSmm9Y.withdraw.call(uintLsiCiDf, {from: accounts[2]});

		await expect(SLTDStakingICSmm9Y.updateReward.call(addressuvV5rvr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingZvf5zu8 = await SLTDStaking.new({from: accounts[3]});
		const uintr8cjKzO = BigInt("26")
		const uintIFNKY1U = BigInt("1793")
//		const uint256xPHc3A = await SLTDStakingZvf5zu8.notifyRewardAmount.call(uintr8cjKzO, {from: accounts[1]});
//		await SLTDStakingZvf5zu8.exit.call({from: accounts[2]});
//		const uint256n7ruKeg = await SLTDStakingZvf5zu8.withdraw.call(uintIFNKY1U, {from: accounts[4]});

		await expect(SLTDStakingZvf5zu8.notifyRewardAmount.call(uintr8cjKzO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingQwbvNk = await SLTDStaking.new({from: accounts[3]});
		const uintUxYjVX = BigInt("1409")
//		await SLTDStakingQwbvNk.exit.call({from: accounts[3]});
//		const uint256MqjLB0P = await SLTDStakingQwbvNk.stake.call(uintUxYjVX, {from: accounts[2]});
//		const addressrWQZwxD = await SLTDStakingQwbvNk.owner.call({from: accounts[1]});
//		await SLTDStakingQwbvNk.exit.call({from: accounts[1]});

		await expect(SLTDStakingQwbvNk.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingj0Psvqc = await SLTDStaking.new({from: accounts[0]});
//		await SLTDStakingj0Psvqc.getReward.call({from: accounts[3]});

		await expect(SLTDStakingj0Psvqc.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingj0Psvqc = await SLTDStaking.new({from: accounts[0]});
//		await SLTDStakingj0Psvqc.getReward.call({from: accounts[3]});
//		await SLTDStakingj0Psvqc.renounceOwnership.call({from: accounts[0]});

		await expect(SLTDStakingj0Psvqc.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingj0Psvqc = await SLTDStaking.new({from: accounts[0]});
		const addresscxpZurv = accounts[0]
		const uintAhIezG7 = BigInt("1561")
		const addresspnMD4XK = await SLTDStakingj0Psvqc.owner.call({from: accounts[1]});
//		await SLTDStakingj0Psvqc.getReward.call({from: accounts[3]});
//		const addressJLpuWgY = await SLTDStakingj0Psvqc.setRewardDistribution.call(addresscxpZurv, {from: accounts[2]});
//		const uint256M1wmyli = await SLTDStakingj0Psvqc.notifyRewardAmount.call(uintAhIezG7, {from: accounts[0]});

		assert.equal(addresspnMD4XK, 0x1EA3193058255B215900b5a6bA25ECFf1AcDeBF3)
		await expect(SLTDStakingj0Psvqc.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingj0Psvqc = await SLTDStaking.new({from: accounts[0]});
		const addressPT8K1Bi = accounts[3]
		const addressZNZIXT = await SLTDStakingj0Psvqc.transferOwnership.call(addressPT8K1Bi, {from: accounts[0]});
//		await SLTDStakingj0Psvqc.getReward.call({from: accounts[3]});

		await expect(SLTDStakingj0Psvqc.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingj0Psvqc = await SLTDStaking.new({from: accounts[0]});
		const addresspEc2P9J = accounts[0]
		const addresszdAwPFd = await SLTDStakingj0Psvqc.setRewardDistribution.call(addresspEc2P9J, {from: accounts[0]});
//		await SLTDStakingj0Psvqc.getReward.call({from: accounts[3]});

		await expect(SLTDStakingj0Psvqc.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnxf5Szl = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkNkphN2 = BigInt("838")
		await SLTDStakingnxf5Szl.renounceOwnership.call({from: accounts[3]});
		await SLTDStakingnxf5Szl.onlyOwner.call({from: accounts[4]});
		await SLTDStakingnxf5Szl.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256R2q0its = await SLTDStakingnxf5Szl.withdraw.call(uintkNkphN2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gsR056Q = await SLTDStakingnxf5Szl.totalSupply.call({from: accounts[2]});
	});
})