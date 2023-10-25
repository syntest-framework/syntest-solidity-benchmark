const SLTDStaking = artifacts.require("SLTDStaking");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SLTDStaking', (accounts) => {
	it('test for SLTDStaking', async () => {
		const SLTDStakingyieics = await SLTDStaking.new({from: accounts[1]});
		const addresseEQqZr = accounts[3]
		const addressUArZSP9 = accounts[0]
		const uintGl7gIx1 = BigInt("1869")
		const addressloUeqCc = "0x0000000000000000000000000000000000000001"
		const addressRfnQVlh = await SLTDStakingyieics.updateReward.call(addresseEQqZr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256du0yLX = await SLTDStakingyieics.balanceOf.call(addressUArZSP9, {from: accounts[0]});
		const uint256qFdElC6 = await SLTDStakingyieics.notifyRewardAmount.call(uintGl7gIx1, {from: accounts[2]});
		const address5B0vmd = await SLTDStakingyieics.setRewardDistribution.call(addressloUeqCc, {from: accounts[0]});

		await expect(SLTDStakingyieics.updateReward.call(addresseEQqZr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingLW6Hjj3 = await SLTDStaking.new({from: accounts[3]});
		const uint5nRa01 = BigInt("648")
		const uintzlDJTFR = BigInt("120")
		const uint256rJt9e5 = await SLTDStakingLW6Hjj3.withdraw.call(uint5nRa01, {from: accounts[3]});
		const uint256ulLU2VQ = await SLTDStakingLW6Hjj3.stake.call(uintzlDJTFR, {from: accounts[3]});

		await expect(SLTDStakingLW6Hjj3.withdraw.call(uint5nRa01, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingLmzSDoM = await SLTDStaking.new({from: accounts[2]});
		const addressomBqeFl = accounts[0]
		const address6VafCN = accounts[0]
		const uintgOslpTB = BigInt("1135")
		const boolOsQS0T7 = await SLTDStakingLmzSDoM.isOwner.call({from: accounts[3]});
		const addressDLS6S61 = await SLTDStakingLmzSDoM.setSLTD.call(address6VafCN, addressomBqeFl, {from: accounts[5]});
		const uint256apMvuUv = await SLTDStakingLmzSDoM.withdraw.call(uintgOslpTB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256L4XZ21l = await SLTDStakingLmzSDoM.totalSupply.call({from: accounts[3]});

		assert.equal(boolOsQS0T7, false)
		await expect(SLTDStakingLmzSDoM.setSLTD.call(address6VafCN, addressomBqeFl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingoLbA4Da = await SLTDStaking.new({from: accounts[2]});
		const addressJNNK31 = accounts[4]
		const addressLZ5LGH5 = accounts[5]
		const uintlAUm04 = BigInt("2034")
		const addressKfkjk1j = accounts[1]
		const addressCq2y42K = accounts[4]
		const addressIzsGGR = await SLTDStakingoLbA4Da.transferOwnership.call(addressJNNK31, {from: accounts[3]});
		const addressJmnRpQi = await SLTDStakingoLbA4Da.updateReward.call(addressLZ5LGH5, {from: accounts[0]});
		const uint256PZ3wKS9 = await SLTDStakingoLbA4Da.stake.call(uintlAUm04, {from: accounts[2]});
		const addressw11pbbv = await SLTDStakingoLbA4Da.setSLTD.call(addressCq2y42K, addressKfkjk1j, {from: accounts[0]});
		await SLTDStakingoLbA4Da.onlyRewardDistribution.call({from: accounts[4]});
		await SLTDStakingoLbA4Da.onlyRewardDistribution.call({from: accounts[3]});

		await expect(SLTDStakingoLbA4Da.transferOwnership.call(addressJNNK31, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingxBpAtyZ = await SLTDStaking.new({from: accounts[0]});
		const uintepUaNSz = BigInt("893")
		const uintPwBTHgg = BigInt("1092")
		const addressl1UBlYf = accounts[3]
		const uint256yfTAuNc = await SLTDStakingxBpAtyZ.stake.call(uintepUaNSz, {from: accounts[4]});
		const uint256B9ATsrn = await SLTDStakingxBpAtyZ.totalSupply.call({from: accounts[0]});
		const uint256Hkfz2ws = await SLTDStakingxBpAtyZ.stake.call(uintPwBTHgg, {from: accounts[0]});
		const addressICpeUeO = await SLTDStakingxBpAtyZ.setRewardDistribution.call(addressl1UBlYf, {from: accounts[5]});
		await SLTDStakingxBpAtyZ.getReward.call({from: accounts[5]});

		await expect(SLTDStakingxBpAtyZ.stake.call(uintepUaNSz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingCx7LTpt = await SLTDStaking.new({from: accounts[3]});
		const addressgcDwTT = accounts[1]
		const addressZixnzPh = accounts[0]
		const addressnO9qgFq = accounts[1]
		const addresstvHBISf = accounts[5]
		const uint256hKDRj47 = await SLTDStakingCx7LTpt.earned.call(addressgcDwTT, {from: accounts[3]});
		const uint256h2YN7H = await SLTDStakingCx7LTpt.rewardPerToken.call({from: accounts[2]});
		await SLTDStakingCx7LTpt.exit.call({from: accounts[2]});
		const uint256vl1tZH = await SLTDStakingCx7LTpt.totalSupply.call({from: accounts[2]});
		await SLTDStakingCx7LTpt.renounceOwnership.call({from: accounts[0]});
		await SLTDStakingCx7LTpt.renounceOwnership.call({from: accounts[3]});
		const addressTg6DRnE = await SLTDStakingCx7LTpt.setSLTD.call(addressnO9qgFq, addressZixnzPh, {from: accounts[0]});
		await SLTDStakingCx7LTpt.onlyRewardDistribution.call({from: accounts[1]});
		const uint256MZlu1IX = await SLTDStakingCx7LTpt.rewardPerToken.call({from: accounts[2]});
		const addressMJGxkwF = await SLTDStakingCx7LTpt.owner.call({from: accounts[0]});
		const addresssRpL4sj = await SLTDStakingCx7LTpt.setRewardDistribution.call(addresstvHBISf, {from: accounts[2]});

		assert.equal(uint256h2YN7H, BigInt("0"))
		assert.equal(uint256hKDRj47, BigInt("0"))
		await expect(SLTDStakingCx7LTpt.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingLW6Hjj3 = await SLTDStaking.new({from: accounts[3]});
		const uintXVv6Dae = BigInt("648")
		const uintqj3qJWV = BigInt("91")
		await SLTDStakingLW6Hjj3.renounceOwnership.call({from: accounts[3]});
		await SLTDStakingLW6Hjj3.renounceOwnership.call({from: accounts[1]});
		const uint256rJt9e5 = await SLTDStakingLW6Hjj3.withdraw.call(uintXVv6Dae, {from: accounts[3]});
		const uint256ulLU2VQ = await SLTDStakingLW6Hjj3.stake.call(uintqj3qJWV, {from: accounts[3]});

		await expect(SLTDStakingLW6Hjj3.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingCx7LTpt = await SLTDStaking.new({from: accounts[3]});
		const addressiZuq6bU = accounts[1]
		const addressqNymW2N = accounts[4]
		const uint256hKDRj47 = await SLTDStakingCx7LTpt.earned.call(addressiZuq6bU, {from: accounts[3]});
		const uint256MZlu1IX = await SLTDStakingCx7LTpt.rewardPerToken.call({from: accounts[2]});
		const addressMJGxkwF = await SLTDStakingCx7LTpt.owner.call({from: accounts[0]});
		const uint256vpYyH6X = await SLTDStakingCx7LTpt.lastTimeRewardApplicable.call({from: accounts[1]});
		const addresssRpL4sj = await SLTDStakingCx7LTpt.setRewardDistribution.call(addressqNymW2N, {from: accounts[2]});

		assert.equal(addressMJGxkwF, 0xAfa35808166dec3CCC45de7eDd96f29552e92f9b)
		assert.equal(uint256MZlu1IX, BigInt("0"))
		assert.equal(uint256hKDRj47, BigInt("0"))
		assert.equal(uint256vpYyH6X, BigInt("0"))
		await expect(SLTDStakingCx7LTpt.setRewardDistribution.call(addressqNymW2N, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingLW6Hjj3 = await SLTDStaking.new({from: accounts[3]});
		const uintoy1q5Kd = BigInt("120")
		await SLTDStakingLW6Hjj3.getReward.call({from: accounts[1]});
		const uint256ulLU2VQ = await SLTDStakingLW6Hjj3.stake.call(uintoy1q5Kd, {from: accounts[3]});

		await expect(SLTDStakingLW6Hjj3.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingLW6Hjj3 = await SLTDStaking.new({from: accounts[3]});
		const addressxuK6So = accounts[2]
		const uintKLkm8zX = BigInt("120")
		await SLTDStakingLW6Hjj3.getReward.call({from: accounts[1]});
		const addressqCGiMMD = await SLTDStakingLW6Hjj3.transferOwnership.call(addressxuK6So, {from: accounts[3]});
		const uint256ulLU2VQ = await SLTDStakingLW6Hjj3.stake.call(uintKLkm8zX, {from: accounts[3]});

		await expect(SLTDStakingLW6Hjj3.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingKiYfLsy = await SLTDStaking.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256kSaJbLX = await SLTDStakingKiYfLsy.lastTimeRewardApplicable.call({from: accounts[0]});
		await SLTDStakingKiYfLsy.onlyRewardDistribution.call({from: accounts[4]});
	});

	it('test for SLTDStaking', async () => {
		const SLTDStakingLW6Hjj3 = await SLTDStaking.new({from: accounts[3]});
		const addressY8cxtrb = accounts[2]
		const addressixH2iM = await SLTDStakingLW6Hjj3.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await SLTDStakingLW6Hjj3.getReward.call({from: accounts[1]});
		const uint256RC1ICD = await SLTDStakingLW6Hjj3.totalSupply.call({from: accounts[0]});
		const addressUHyq7ZJ = await SLTDStakingLW6Hjj3.setRewardDistribution.call(addressY8cxtrb, {from: accounts[3]});

		assert.equal(addressixH2iM, 0xAfa35808166dec3CCC45de7eDd96f29552e92f9b)
		await expect(SLTDStakingLW6Hjj3.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})