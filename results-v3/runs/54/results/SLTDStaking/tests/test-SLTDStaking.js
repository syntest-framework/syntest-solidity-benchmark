const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingbkzVzYL = await SLTDStaking.new({from: accounts[0]});
		const uintj33u3iO = BigInt("579")
		await SLTDStakingbkzVzYL.onlyRewardDistribution.call({from: accounts[3]});
		const uint256SAsh3Xc = await SLTDStakingbkzVzYL.notifyRewardAmount.call(uintj33u3iO, {from: accounts[0]});
		const uint256wuPbEUm = await SLTDStakingbkzVzYL.rewardPerToken.call({from: accounts[0]});
		await SLTDStakingbkzVzYL.renounceOwnership.call({from: accounts[4]});
		const boolywShOwp = await SLTDStakingbkzVzYL.isOwner.call({from: accounts[1]});

		await expect(SLTDStakingbkzVzYL.onlyRewardDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingG9EGXsM = await SLTDStaking.new({from: accounts[4]});
		const addressnO4G2Fq = accounts[3]
		const uinti1twgAK = BigInt("1485")
		await SLTDStakingG9EGXsM.getReward.call({from: accounts[5]});
		const addressQShwV0i = await SLTDStakingG9EGXsM.setRewardDistribution.call(addressnO4G2Fq, {from: accounts[0]});
		const boolt6TuH8b = await SLTDStakingG9EGXsM.isOwner.call({from: accounts[0]});
		const uint256DMFNWB = await SLTDStakingG9EGXsM.withdraw.call(uinti1twgAK, {from: accounts[3]});
		const uint256Mx1KO5o = await SLTDStakingG9EGXsM.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(SLTDStakingG9EGXsM.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingvXtdF0 = await SLTDStaking.new({from: accounts[2]});
		const addressRd2GcHn = accounts[3]
		const addressTF7by3c = await SLTDStakingvXtdF0.setRewardDistribution.call(addressRd2GcHn, {from: accounts[2]});
		await SLTDStakingvXtdF0.exit.call({from: accounts[4]});
		const booloSiXwBv = await SLTDStakingvXtdF0.isOwner.call({from: accounts[1]});

		await expect(SLTDStakingvXtdF0.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingpSWODUH = await SLTDStaking.new({from: accounts[0]});
		const uintHYIAVdH = BigInt("319")
		const uintUeZ8oa = BigInt("1749")
		const uintQDbaYc5 = BigInt("1830")
		const uint256Yd5AG8z = await SLTDStakingpSWODUH.withdraw.call(uintHYIAVdH, {from: accounts[0]});
		const uint256P4GBvKT = await SLTDStakingpSWODUH.withdraw.call(uintUeZ8oa, {from: accounts[2]});
		const uint256GMghidP = await SLTDStakingpSWODUH.withdraw.call(uintQDbaYc5, {from: accounts[5]});
		await SLTDStakingpSWODUH.onlyOwner.call({from: accounts[2]});
		const boolacWPv0X = await SLTDStakingpSWODUH.isOwner.call({from: accounts[1]});

		await expect(SLTDStakingpSWODUH.withdraw.call(uintHYIAVdH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingP0ztdpm = await SLTDStaking.new({from: accounts[4]});
		const uintAjcNW44 = BigInt("801")
		const uintqIRFmb = BigInt("149")
		const addressZu5EDAY = accounts[0]
		const uint256PbkMlh = await SLTDStakingP0ztdpm.stake.call(uintAjcNW44, {from: accounts[2]});
		const uint256kRn3uCS = await SLTDStakingP0ztdpm.notifyRewardAmount.call(uintqIRFmb, {from: accounts[4]});
		const uint256kGf0uU7 = await SLTDStakingP0ztdpm.totalSupply.call({from: accounts[4]});
		const addressjtVixEx = await SLTDStakingP0ztdpm.setRewardDistribution.call(addressZu5EDAY, {from: accounts[2]});

		await expect(SLTDStakingP0ztdpm.stake.call(uintAjcNW44, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingvXtdF0 = await SLTDStaking.new({from: accounts[2]});
		const addressytz7dA2 = accounts[3]
		const uintk9yWoCj = BigInt("1279")
		const addressTF7by3c = await SLTDStakingvXtdF0.setRewardDistribution.call(addressytz7dA2, {from: accounts[2]});
		await SLTDStakingvXtdF0.renounceOwnership.call({from: accounts[2]});
		const uint256nBhhHd1 = await SLTDStakingvXtdF0.notifyRewardAmount.call(uintk9yWoCj, {from: accounts[4]});
		await SLTDStakingvXtdF0.exit.call({from: accounts[4]});
		await SLTDStakingvXtdF0.exit.call({from: accounts[3]});
		const booloSiXwBv = await SLTDStakingvXtdF0.isOwner.call({from: accounts[1]});

		await expect(SLTDStakingvXtdF0.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingeVNQBHV = await SLTDStaking.new({from: accounts[4]});
		const addressmp1Kxq = accounts[0]
		const addressrdssO0U = "0x0000000000000000000000000000000000000001"
		const uintuTeZPBg = BigInt("1720")
		const addressqS1e3sE = await SLTDStakingeVNQBHV.owner.call({from: accounts[2]});
		const addressYUmz5R = await SLTDStakingeVNQBHV.transferOwnership.call(addressmp1Kxq, {from: accounts[0]});
		const uint256YbJIaqh = await SLTDStakingeVNQBHV.lastTimeRewardApplicable.call({from: accounts[1]});
		const addressYUr5cA = await SLTDStakingeVNQBHV.transferOwnership.call(addressrdssO0U, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kDofa7J = await SLTDStakingeVNQBHV.withdraw.call(uintuTeZPBg, {from: accounts[2]});
		await SLTDStakingeVNQBHV.onlyRewardDistribution.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressqS1e3sE, 0x8a29aFEb0012530360aC5559a7742465257267f6)
		await expect(SLTDStakingeVNQBHV.transferOwnership.call(addressmp1Kxq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingG9EGXsM = await SLTDStaking.new({from: accounts[4]});
		const addressVG6gLA7 = accounts[0]
		await SLTDStakingG9EGXsM.getReward.call({from: accounts[5]});
		const uint256Mx1KO5o = await SLTDStakingG9EGXsM.lastTimeRewardApplicable.call({from: accounts[3]});
		const addressAf5Ygha = await SLTDStakingG9EGXsM.transferOwnership.call(addressVG6gLA7, {from: accounts[4]});

		await expect(SLTDStakingG9EGXsM.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingTNdmqbb = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintyJ7k7Bp = BigInt("896")
		const uint2566owxjI = await SLTDStakingTNdmqbb.withdraw.call(uintyJ7k7Bp, {from: accounts[2]});
		await SLTDStakingTNdmqbb.getReward.call({from: accounts[4]});
		await SLTDStakingTNdmqbb.onlyRewardDistribution.call({from: accounts[4]});
		await SLTDStakingTNdmqbb.getReward.call({from: accounts[3]});
		await SLTDStakingTNdmqbb.onlyRewardDistribution.call({from: accounts[4]});
	});
})