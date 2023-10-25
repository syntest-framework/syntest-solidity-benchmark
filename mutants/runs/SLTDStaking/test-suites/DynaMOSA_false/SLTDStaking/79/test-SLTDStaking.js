const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingk2xek9j = await SLTDStaking.new({from: accounts[2]});
		const addressRIa4Vpj = accounts[3]
		const addressr0aa1K = accounts[4]
		const uint256DAir5EK = await SLTDStakingk2xek9j.earned.call(addressRIa4Vpj, {from: accounts[3]});
		const addresstKkgqU = await SLTDStakingk2xek9j.setRewardDistribution.call(addressr0aa1K, {from: accounts[1]});
		await SLTDStakingk2xek9j.renounceOwnership.call({from: accounts[1]});

		assert.equal(uint256DAir5EK, BigInt("0"))
		await expect(SLTDStakingk2xek9j.setRewardDistribution.call(addressr0aa1K, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingqthZ5N = await SLTDStaking.new({from: accounts[1]});
		const addressAY5ufrY = accounts[4]
		const uint256ADskbw = await SLTDStakingqthZ5N.balanceOf.call(addressAY5ufrY, {from: accounts[0]});
		await SLTDStakingqthZ5N.onlyOwner.call({from: accounts[4]});
		await SLTDStakingqthZ5N.getReward.call({from: accounts[1]});
		const uint256WiOpuvd = await SLTDStakingqthZ5N.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256lYOv8LP = await SLTDStakingqthZ5N.totalSupply.call({from: accounts[2]});

		assert.equal(uint256ADskbw, BigInt("0"))
		await expect(SLTDStakingqthZ5N.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingFhoe8e2 = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uintIQGw5iq = BigInt("772")
		const uint256rvNLZgE = await SLTDStakingFhoe8e2.rewardPerToken.call({from: accounts[2]});
		const uint256alBwMDc = await SLTDStakingFhoe8e2.totalSupply.call({from: accounts[1]});
		const uint256lVIGeM = await SLTDStakingFhoe8e2.withdraw.call(uintIQGw5iq, {from: accounts[3]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakinghkHqV1G = await SLTDStaking.new({from: accounts[1]});
		const addresskS7t7o = accounts[0]
		const addressFaSGMcm = accounts[4]
		const addressoifiNnW = accounts[3]
		const addresszcUK2f2 = await SLTDStakinghkHqV1G.setSLTD.call(addressFaSGMcm, addresskS7t7o, {from: accounts[1]});
		const booln6OcAQL = await SLTDStakinghkHqV1G.isOwner.call({from: accounts[3]});
		await SLTDStakinghkHqV1G.onlyOwner.call({from: accounts[2]});
		const addressCNOe8kP = await SLTDStakinghkHqV1G.transferOwnership.call(addressoifiNnW, {from: accounts[1]});

		await expect(SLTDStakinghkHqV1G.setSLTD.call(addressFaSGMcm, addresskS7t7o, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingtCJwEhM = await SLTDStaking.new({from: accounts[3]});
		const addressgqaAYDD = accounts[3]
		const addressmsVUKiy = accounts[1]
		const addressDxs4Zw = accounts[3]
		await SLTDStakingtCJwEhM.exit.call({from: accounts[1]});
		const addressKXE1boH = await SLTDStakingtCJwEhM.setSLTD.call(addressmsVUKiy, addressgqaAYDD, {from: accounts[2]});
		const boolzzRXLXH = await SLTDStakingtCJwEhM.isOwner.call({from: accounts[0]});
		const addressRCe1YU8 = await SLTDStakingtCJwEhM.updateReward.call(addressDxs4Zw, {from: accounts[2]});

		await expect(SLTDStakingtCJwEhM.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStaking68C5nR = await SLTDStaking.new({from: accounts[2]});
		const uintj9vJgJu = BigInt("1653")
		const addressueARxm = accounts[3]
		const addressQgKGvq = accounts[2]
		const addressxkHBkg = accounts[1]
		const addresse3p776F = accounts[0]
		const uint256nVwvSmO = await SLTDStaking68C5nR.stake.call(uintj9vJgJu, {from: accounts[3]});
		const addressGqXUJBn = await SLTDStaking68C5nR.transferOwnership.call(addressueARxm, {from: accounts[3]});
		const addressA08D3cy = await SLTDStaking68C5nR.setSLTD.call(addressxkHBkg, addressQgKGvq, {from: accounts[0]});
		await SLTDStaking68C5nR.onlyRewardDistribution.call({from: accounts[1]});
		const addressPPmWRZ5 = await SLTDStaking68C5nR.setRewardDistribution.call(addresse3p776F, {from: accounts[3]});

		await expect(SLTDStaking68C5nR.stake.call(uintj9vJgJu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingATwhN2 = await SLTDStaking.new({from: accounts[2]});
		const addressiiL1b5u = accounts[0]
		const uintgA1WEXC = BigInt("1073")
		const addressPmJs48E = accounts[3]
		const uintYB5Ndkk = BigInt("287")
		const uint256GlrW3DP = await SLTDStakingATwhN2.balanceOf.call(addressiiL1b5u, {from: accounts[5]});
		const uint256aO40qeN = await SLTDStakingATwhN2.totalSupply.call({from: accounts[1]});
		const uint256oEmIQxS = await SLTDStakingATwhN2.withdraw.call(uintgA1WEXC, {from: accounts[0]});
		const addressTvi8CKT = await SLTDStakingATwhN2.setRewardDistribution.call(addressPmJs48E, {from: accounts[2]});
		const uint256AmcT7xM = await SLTDStakingATwhN2.withdraw.call(uintYB5Ndkk, {from: accounts[2]});

		assert.equal(uint256GlrW3DP, BigInt("0"))
		assert.equal(uint256aO40qeN, BigInt("0"))
		await expect(SLTDStakingATwhN2.withdraw.call(uintgA1WEXC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingATwhN2 = await SLTDStaking.new({from: accounts[2]});
		const addresshzljmnh = accounts[1]
		const addressRcRu7li = accounts[3]
		const uintdh2nncD = BigInt("287")
		const uint256GlrW3DP = await SLTDStakingATwhN2.balanceOf.call(addresshzljmnh, {from: accounts[5]});
		const addressTvi8CKT = await SLTDStakingATwhN2.setRewardDistribution.call(addressRcRu7li, {from: accounts[2]});
		const uint256AmcT7xM = await SLTDStakingATwhN2.withdraw.call(uintdh2nncD, {from: accounts[2]});

		assert.equal(uint256GlrW3DP, BigInt("0"))
		await expect(SLTDStakingATwhN2.withdraw.call(uintdh2nncD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingdIR7zc = await SLTDStaking.new({from: accounts[1]});
		await SLTDStakingdIR7zc.getReward.call({from: accounts[3]});
		const addressvh6QE5H = await SLTDStakingdIR7zc.owner.call({from: accounts[3]});
		await SLTDStakingdIR7zc.getReward.call({from: accounts[1]});

		await expect(SLTDStakingdIR7zc.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingdIR7zc = await SLTDStaking.new({from: accounts[1]});
		const uintB1Q8HbA = BigInt("336")
		await SLTDStakingdIR7zc.renounceOwnership.call({from: accounts[1]});
		const uint256sAHZLi2 = await SLTDStakingdIR7zc.notifyRewardAmount.call(uintB1Q8HbA, {from: accounts[0]});
		await SLTDStakingdIR7zc.getReward.call({from: accounts[3]});
		await SLTDStakingdIR7zc.getReward.call({from: accounts[1]});

		await expect(SLTDStakingdIR7zc.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingdIR7zc = await SLTDStaking.new({from: accounts[1]});
		const addressWiBRRGJ = "0x0000000000000000000000000000000000000001"
		await SLTDStakingdIR7zc.getReward.call({from: accounts[3]});
		const addresspKVVgwR = await SLTDStakingdIR7zc.transferOwnership.call(addressWiBRRGJ, {from: accounts[1]});
		await SLTDStakingdIR7zc.getReward.call({from: accounts[1]});

		await expect(SLTDStakingdIR7zc.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})