const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingovjwUDz = await SLTDStaking.new({from: accounts[4]});
		const uintaFkZnqF = BigInt("72")
		await SLTDStakingovjwUDz.exit.call({from: accounts[4]});
		const uint256RDhaQtW = await SLTDStakingovjwUDz.stake.call(uintaFkZnqF, {from: accounts[4]});

		await expect(SLTDStakingovjwUDz.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingkD8HVGw = await SLTDStaking.new({from: accounts[4]});
		const uinthgV5wlI = BigInt("544")
		const uint256jCLTPPp = await SLTDStakingkD8HVGw.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256eHxmQ1U = await SLTDStakingkD8HVGw.totalSupply.call({from: accounts[0]});
		await SLTDStakingkD8HVGw.renounceOwnership.call({from: accounts[2]});
		const uint256U0YG4rN = await SLTDStakingkD8HVGw.withdraw.call(uinthgV5wlI, {from: accounts[3]});

		assert.equal(uint256eHxmQ1U, BigInt("0"))
		assert.equal(uint256jCLTPPp, BigInt("0"))
		await expect(SLTDStakingkD8HVGw.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingRaGnFtr = await SLTDStaking.new({from: accounts[5]});
		const uintYfYd3H = BigInt("745")
		const uintkycU6hK = BigInt("372")
		const uint256sWoTGs = await SLTDStakingRaGnFtr.lastTimeRewardApplicable.call({from: accounts[3]});
		await SLTDStakingRaGnFtr.onlyOwner.call({from: accounts[4]});
		const uint256CGFDUIz = await SLTDStakingRaGnFtr.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256Ffgy5va = await SLTDStakingRaGnFtr.stake.call(uintYfYd3H, {from: accounts[4]});
		const uint256diBSBDb = await SLTDStakingRaGnFtr.withdraw.call(uintkycU6hK, {from: accounts[3]});

		assert.equal(uint256sWoTGs, BigInt("0"))
		await expect(SLTDStakingRaGnFtr.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingiYdOtxX = await SLTDStaking.new({from: accounts[4]});
		const uint256HH9pYCq = await SLTDStakingiYdOtxX.totalSupply.call({from: accounts[0]});
		await SLTDStakingiYdOtxX.getReward.call({from: accounts[2]});
		await SLTDStakingiYdOtxX.renounceOwnership.call({from: accounts[5]});

		assert.equal(uint256HH9pYCq, BigInt("0"))
		await expect(SLTDStakingiYdOtxX.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingJc8a0lv = await SLTDStaking.new({from: accounts[3]});
		const uintDCijTKV = BigInt("1766")
		const uint256C0weHIZ = await SLTDStakingJc8a0lv.stake.call(uintDCijTKV, {from: accounts[1]});
		await SLTDStakingJc8a0lv.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256jQpUFae = await SLTDStakingJc8a0lv.lastTimeRewardApplicable.call({from: accounts[2]});
		await SLTDStakingJc8a0lv.getReward.call({from: accounts[3]});
		const uint256w9iLkzi = await SLTDStakingJc8a0lv.rewardPerToken.call({from: accounts[1]});

		await expect(SLTDStakingJc8a0lv.stake.call(uintDCijTKV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakinghHjiFAJ = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const addressqONu2jY = accounts[0]
		const addressxrt1ZCA = accounts[4]
		const addressbC3WoTS = "0x0000000000000000000000000000000000000001"
		const uintPmB5NPD = BigInt("498")
		const addressUblkMm = await SLTDStakinghHjiFAJ.transferOwnership.call(addressqONu2jY, {from: accounts[1]});
		const addressD8o7RsF = await SLTDStakinghHjiFAJ.setSLTD.call(addressbC3WoTS, addressxrt1ZCA, {from: accounts[2]});
		const uint256jLdvNwk = await SLTDStakinghHjiFAJ.stake.call(uintPmB5NPD, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingOlFngId = await SLTDStaking.new({from: accounts[2]});
		const uintPwloxta = BigInt("481")
		const uint256rRLvRm = await SLTDStakingOlFngId.notifyRewardAmount.call(uintPwloxta, {from: accounts[2]});
		await SLTDStakingOlFngId.onlyOwner.call({from: accounts[4]});

		await expect(SLTDStakingOlFngId.notifyRewardAmount.call(uintPwloxta, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingiYdOtxX = await SLTDStaking.new({from: accounts[4]});
		const addressFmCKKi1 = accounts[3]
		const uint256HH9pYCq = await SLTDStakingiYdOtxX.totalSupply.call({from: accounts[0]});
		const addresssQnib0v = await SLTDStakingiYdOtxX.transferOwnership.call(addressFmCKKi1, {from: accounts[4]});
		await SLTDStakingiYdOtxX.getReward.call({from: accounts[2]});
		await SLTDStakingiYdOtxX.renounceOwnership.call({from: accounts[5]});

		assert.equal(uint256HH9pYCq, BigInt("0"))
		await expect(SLTDStakingiYdOtxX.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingiYdOtxX = await SLTDStaking.new({from: accounts[4]});
		const uintNW1v18N = BigInt("1619")
		const uint256HH9pYCq = await SLTDStakingiYdOtxX.totalSupply.call({from: accounts[0]});
		const uint256VvVxhJl = await SLTDStakingiYdOtxX.withdraw.call(uintNW1v18N, {from: accounts[5]});
		await SLTDStakingiYdOtxX.getReward.call({from: accounts[2]});
		await SLTDStakingiYdOtxX.renounceOwnership.call({from: accounts[5]});

		assert.equal(uint256HH9pYCq, BigInt("0"))
		await expect(SLTDStakingiYdOtxX.withdraw.call(uintNW1v18N, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingovjwUDz = await SLTDStaking.new({from: accounts[4]});
		const uinthOguAFM = BigInt("798")
		const uintgrsmm1O = BigInt("30")
		const addresswmZmF5F = await SLTDStakingovjwUDz.owner.call({from: accounts[4]});
		const uint256h3gFSdg = await SLTDStakingovjwUDz.stake.call(uinthOguAFM, {from: accounts[1]});
		const uint256RDhaQtW = await SLTDStakingovjwUDz.stake.call(uintgrsmm1O, {from: accounts[4]});

		assert.equal(addresswmZmF5F, 0xA6a8672965cD5C7df923b0a93644973fd8C70DD2)
		await expect(SLTDStakingovjwUDz.stake.call(uinthOguAFM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingiYdOtxX = await SLTDStaking.new({from: accounts[4]});
		await SLTDStakingiYdOtxX.renounceOwnership.call({from: accounts[4]});

		await expect(SLTDStakingiYdOtxX.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingnMNXntt = await SLTDStaking.new({from: accounts[1]});
		const addressqC5hAmZ = accounts[1]
		const uintBY6bKOp = BigInt("1405")
		const uintdTvZJcd = BigInt("1751")
		const addressuDs3tt8 = accounts[3]
		const addressYRBjUwT = await SLTDStakingnMNXntt.setRewardDistribution.call(addressqC5hAmZ, {from: accounts[1]});
		const boolHfXkyhW = await SLTDStakingnMNXntt.isOwner.call({from: accounts[5]});
		const uint256fbh24Zw = await SLTDStakingnMNXntt.withdraw.call(uintBY6bKOp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256AXlfSKn = await SLTDStakingnMNXntt.stake.call(uintdTvZJcd, {from: accounts[2]});
		const uint256LuHQYzv = await SLTDStakingnMNXntt.earned.call(addressuDs3tt8, {from: accounts[3]});

		assert.equal(boolHfXkyhW, false)
		await expect(SLTDStakingnMNXntt.withdraw.call(uintBY6bKOp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingovjwUDz = await SLTDStaking.new({from: accounts[4]});
		const uintUVOKIzI = BigInt("0")
		const uint256RDhaQtW = await SLTDStakingovjwUDz.stake.call(uintUVOKIzI, {from: accounts[4]});

		await expect(SLTDStakingovjwUDz.stake.call(uintUVOKIzI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})