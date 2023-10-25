const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingfc4PL6F = await SLTDStaking.new({from: accounts[3]});
		const addresshl9fDmX = await SLTDStakingfc4PL6F.owner.call({from: accounts[3]});
		const uint256ukcg0QH = await SLTDStakingfc4PL6F.lastTimeRewardApplicable.call({from: accounts[3]});
		await SLTDStakingfc4PL6F.onlyRewardDistribution.call({from: accounts[1]});
		const address7zt9f3 = await SLTDStakingfc4PL6F.owner.call({from: accounts[2]});

		assert.equal(addresshl9fDmX, 0xb79A1909925B1956Af5f5689e5EE6E95B185505A)
		assert.equal(uint256ukcg0QH, BigInt("0"))
		await expect(SLTDStakingfc4PL6F.onlyRewardDistribution.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingjmqKM0y = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlj3CDc = BigInt("930")
		const addressPspGth = accounts[4]
		const uintVHD29s3 = BigInt("1353")
		const uintJqXtGiq = BigInt("1534")
		const uint256SsUmLr = await SLTDStakingjmqKM0y.withdraw.call(uintlj3CDc, {from: accounts[2]});
		const addressHU6A6ju = await SLTDStakingjmqKM0y.setRewardDistribution.call(addressPspGth, {from: accounts[3]});
		const uint256Doeet35 = await SLTDStakingjmqKM0y.stake.call(uintVHD29s3, {from: accounts[1]});
		const uint256D9iPQqA = await SLTDStakingjmqKM0y.withdraw.call(uintJqXtGiq, {from: accounts[1]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingBmYpxq = await SLTDStaking.new({from: accounts[1]});
		const addressvlFYxk = "0x0000000000000000000000000000000000000001"
		const addressaejmlNf = accounts[5]
		await SLTDStakingBmYpxq.renounceOwnership.call({from: accounts[4]});
		const uint256Hcycu4l = await SLTDStakingBmYpxq.balanceOf.call(addressvlFYxk, {from: accounts[1]});
		const boolhzh3wdt = await SLTDStakingBmYpxq.isOwner.call({from: accounts[0]});
		const addressymmIrNe = await SLTDStakingBmYpxq.owner.call({from: accounts[2]});
		await SLTDStakingBmYpxq.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
		const addressqiPWNnv = await SLTDStakingBmYpxq.transferOwnership.call(addressaejmlNf, {from: accounts[1]});

		await expect(SLTDStakingBmYpxq.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingZS7s9B7 = await SLTDStaking.new({from: accounts[2]});
		const addressJ1BtH4W = "0x0000000000000000000000000000000000000001"
		await SLTDStakingZS7s9B7.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const addressDqBpwHi = await SLTDStakingZS7s9B7.updateReward.call(addressJ1BtH4W, {from: accounts[1]});
		await SLTDStakingZS7s9B7.renounceOwnership.call({from: accounts[1]});

		await expect(SLTDStakingZS7s9B7.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingTEE4KrG = await SLTDStaking.new({from: accounts[3]});
		const addressQAVo4a1 = accounts[0]
		const addressNCPDrbG = accounts[4]
		const uinttU9Ps9y = BigInt("865")
		const addresstujeCns = await SLTDStakingTEE4KrG.setSLTD.call(addressNCPDrbG, addressQAVo4a1, {from: accounts[2]});
		await SLTDStakingTEE4KrG.exit.call({from: accounts[0]});
		const uint256ftVm4Lc = await SLTDStakingTEE4KrG.withdraw.call(uinttU9Ps9y, {from: accounts[4]});
		await SLTDStakingTEE4KrG.onlyRewardDistribution.call({from: accounts[2]});
		const uint256b5ZEFuH = await SLTDStakingTEE4KrG.rewardPerToken.call({from: accounts[3]});
		await SLTDStakingTEE4KrG.renounceOwnership.call({from: accounts[2]});

		await expect(SLTDStakingTEE4KrG.setSLTD.call(addressNCPDrbG, addressQAVo4a1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingQnJ9ivX = await SLTDStaking.new({from: accounts[2]});
		const uinth9e8ocp = BigInt("1653")
		const uint256hiJLR7h = await SLTDStakingQnJ9ivX.withdraw.call(uinth9e8ocp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256D8HQgs4 = await SLTDStakingQnJ9ivX.totalSupply.call({from: accounts[2]});
		const uint256McIM7Z6 = await SLTDStakingQnJ9ivX.lastTimeRewardApplicable.call({from: accounts[0]});

		await expect(SLTDStakingQnJ9ivX.withdraw.call(uinth9e8ocp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingueIvAQ0 = await SLTDStaking.new({from: accounts[0]});
		const uintkcUCCD = BigInt("1176")
		const uint256y3584ns = await SLTDStakingueIvAQ0.stake.call(uintkcUCCD, {from: accounts[1]});
		await SLTDStakingueIvAQ0.renounceOwnership.call({from: accounts[3]});
		const uint256bNEDhnn = await SLTDStakingueIvAQ0.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256HgojetU = await SLTDStakingueIvAQ0.totalSupply.call({from: accounts[0]});

		await expect(SLTDStakingueIvAQ0.stake.call(uintkcUCCD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingZS7s9B7 = await SLTDStaking.new({from: accounts[2]});
		await SLTDStakingZS7s9B7.getReward.call({from: accounts[1]});
		await SLTDStakingZS7s9B7.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingZS7s9B7.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingbGPPfSg = await SLTDStaking.new({from: accounts[0]});
		const addressHOJyvQN = "0x0000000000000000000000000000000000000001"
		const uintGQ1xx3 = BigInt("59")
		const addressEIp421A = accounts[2]
		const addressrL10DOJ = await SLTDStakingbGPPfSg.setRewardDistribution.call(addressHOJyvQN, {from: accounts[0]});
		const uint256Zt4U4G = await SLTDStakingbGPPfSg.withdraw.call(uintGQ1xx3, {from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingbGPPfSg.onlyOwner.call({from: accounts[2]});
		const addressCVwpNup = await SLTDStakingbGPPfSg.transferOwnership.call(addressEIp421A, {from: accounts[3]});

		await expect(SLTDStakingbGPPfSg.withdraw.call(uintGQ1xx3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingZS7s9B7 = await SLTDStaking.new({from: accounts[2]});
		const addresstKmvpwy = accounts[3]
		const addressT604VyT = await SLTDStakingZS7s9B7.transferOwnership.call(addresstKmvpwy, {from: accounts[2]});
		await SLTDStakingZS7s9B7.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingZS7s9B7.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingZS7s9B7 = await SLTDStaking.new({from: accounts[2]});
		await SLTDStakingZS7s9B7.renounceOwnership.call({from: accounts[2]});
		await SLTDStakingZS7s9B7.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(SLTDStakingZS7s9B7.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})