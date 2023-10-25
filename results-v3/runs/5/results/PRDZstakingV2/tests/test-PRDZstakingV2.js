const PRDZstakingV2 = artifacts.require("PRDZstakingV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PRDZstakingV2', (accounts) => {
	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2pq8Iso3 = await PRDZstakingV2.new({from: accounts[0]});
		const addressWAMRHV1 = accounts[0]
		const addressMCt4csh = "0x0000000000000000000000000000000000000001"
		const uintenGc9PK = await PRDZstakingV2pq8Iso3.getTotalFeeCollected.call({from: accounts[3]});
		const uintevgQc4C = await PRDZstakingV2pq8Iso3.getPendingReward.call(addressWAMRHV1, {from: accounts[0]});
		const addressCevrorb = await PRDZstakingV2pq8Iso3.transferOwnership.call(addressMCt4csh, {from: accounts[0]});

		assert.equal(uintenGc9PK, BigInt("0"))
		assert.equal(uintevgQc4C, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2TnVzmT1 = await PRDZstakingV2.new({from: accounts[0]});
		const addressxj9wmAl = accounts[1]
		const addressOV2kwJd = accounts[3]
		const uintjN1LrB8 = await PRDZstakingV2TnVzmT1.getScoreEth.call(addressxj9wmAl, {from: accounts[1]});
		const addressmci9Qco = await PRDZstakingV2TnVzmT1.transferOwnership.call(addressOV2kwJd, {from: accounts[2]});

		assert.equal(uintjN1LrB8, BigInt("0"))
		await expect(PRDZstakingV2TnVzmT1.transferOwnership.call(addressOV2kwJd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2dt0wcoi = await PRDZstakingV2.new({from: accounts[4]});
		const addressERtMKRs = accounts[1]
		const uintm4bftrz = await PRDZstakingV2dt0wcoi.getTotalUnStaked.call({from: accounts[2]});
		const uintj7oT28N = await PRDZstakingV2dt0wcoi.getTotalFeeCollected.call({from: accounts[3]});
		const uintD6exo6Q = await PRDZstakingV2dt0wcoi.getTotalClaimed.call({from: accounts[0]});
		const uintUP7CFV2 = await PRDZstakingV2dt0wcoi.getNumberOfHolders.call({from: accounts[5]});
		const uintXAaKDwm = await PRDZstakingV2dt0wcoi.getScoreEth.call(addressERtMKRs, {from: accounts[3]});

		assert.equal(uintD6exo6Q, BigInt("0"))
		assert.equal(uintUP7CFV2, BigInt("0"))
		assert.equal(uintXAaKDwm, BigInt("0"))
		assert.equal(uintj7oT28N, BigInt("0"))
		assert.equal(uintm4bftrz, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2FN74IZ = await PRDZstakingV2.new({from: "0x0000000000000000000000000000000000000001"});
		await PRDZstakingV2FN74IZ.claimScoreEth.call({from: accounts[5]});
		const uinttaTCZ9h = await PRDZstakingV2FN74IZ.getTotalClaimed.call({from: accounts[4]});
		const uintqYaZwt = await PRDZstakingV2FN74IZ.getTotalFeeCollected.call({from: accounts[0]});
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2UKJaOSf = await PRDZstakingV2.new({from: accounts[0]});
		const uintPdhlTvR = BigInt("314")
		const uintbbJurWy = await PRDZstakingV2UKJaOSf.getNumberOfHolders.call({from: accounts[3]});
		await PRDZstakingV2UKJaOSf.claimReward.call({from: accounts[4]});
		const uintkaPhNih = await PRDZstakingV2UKJaOSf.unstake.call(uintPdhlTvR, {from: accounts[2]});
		const uintCHERMRI = await PRDZstakingV2UKJaOSf.getTotalFeeCollected.call({from: accounts[1]});
		const uintqhmrwb = await PRDZstakingV2UKJaOSf.getNumberOfHolders.call({from: accounts[4]});

		assert.equal(uintbbJurWy, BigInt("0"))
		await expect(PRDZstakingV2UKJaOSf.claimReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2YXI82f9 = await PRDZstakingV2.new({from: accounts[4]});
		const uintHyFU1v0 = BigInt("1029")
		await PRDZstakingV2YXI82f9.deposit.call({from: accounts[4]});
		await PRDZstakingV2YXI82f9.claimReward.call({from: accounts[4]});
		const uint0ZiV5m = await PRDZstakingV2YXI82f9.getTotalFeeCollected.call({from: accounts[1]});
		await PRDZstakingV2YXI82f9.claimScoreEth.call({from: accounts[0]});
		const uintnHDYAwN = await PRDZstakingV2YXI82f9.getTotalClaimed.call({from: accounts[4]});
		const uintAToe4Uh = await PRDZstakingV2YXI82f9.stake.call(uintHyFU1v0, {from: accounts[4]});

		await expect(PRDZstakingV2YXI82f9.deposit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2o0Dg1m = await PRDZstakingV2.new({from: accounts[4]});
		const addressz06bE8s = accounts[5]
		const uintImn7IXA = BigInt("904")
		const uintw6kIgzm = await PRDZstakingV2o0Dg1m.getStakingScore.call(addressz06bE8s, {from: accounts[0]});
		await PRDZstakingV2o0Dg1m.onlyOwner.call({from: accounts[3]});
		const uintlWSY32f = await PRDZstakingV2o0Dg1m.unstake.call(uintImn7IXA, {from: accounts[2]});

		assert.equal(uintw6kIgzm, BigInt("0"))
		await expect(PRDZstakingV2o0Dg1m.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2ipy4VIS = await PRDZstakingV2.new({from: accounts[1]});
		const addresslqU41C = accounts[2]
		const uintumJJ5PW = await PRDZstakingV2ipy4VIS.getTotalUnStaked.call({from: accounts[2]});
		const uintjLldIoX = await PRDZstakingV2ipy4VIS.getPendingReward.call(addresslqU41C, {from: accounts[5]});
		const uintUuxd9zU = await PRDZstakingV2ipy4VIS.getTotalUnStaked.call({from: accounts[3]});
		const uintPHSqT8z = await PRDZstakingV2ipy4VIS.getTotalStaked.call({from: accounts[1]});

		assert.equal(uintPHSqT8z, BigInt("0"))
		assert.equal(uintUuxd9zU, BigInt("0"))
		assert.equal(uintjLldIoX, BigInt("0"))
		assert.equal(uintumJJ5PW, BigInt("0"))
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2TnVzmT1 = await PRDZstakingV2.new({from: accounts[0]});
		const uintyaHQeyl = BigInt("692")
		const addressUIvFSbq = accounts[2]
		await PRDZstakingV2TnVzmT1.claimReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uintkPcfPPy = await PRDZstakingV2TnVzmT1.updateScoreEth.call(uintyaHQeyl, {from: accounts[0]});
		const uintkQuMClq = await PRDZstakingV2TnVzmT1.getTotalClaimed.call({from: accounts[4]});
		const uintjN1LrB8 = await PRDZstakingV2TnVzmT1.getScoreEth.call(addressUIvFSbq, {from: accounts[1]});

		await expect(PRDZstakingV2TnVzmT1.claimReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PRDZstakingV2', async () => {
		const PRDZstakingV2TnVzmT1 = await PRDZstakingV2.new({from: accounts[0]});
		const uintMmFyOAf = BigInt("95")
		const uintUlJgaQb = BigInt("1021")
		const addresshtXybMj = accounts[4]
		const uintXq8pgBK = BigInt("724")
		const uinttrtFw2i = await PRDZstakingV2TnVzmT1.updateOffer.call(uintUlJgaQb, uintMmFyOAf, {from: accounts[0]});
		const addressmci9Qco = await PRDZstakingV2TnVzmT1.transferOwnership.call(addresshtXybMj, {from: accounts[2]});
		const uintPbmBfU8 = await PRDZstakingV2TnVzmT1.updateScoreEth.call(uintXq8pgBK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(PRDZstakingV2TnVzmT1.transferOwnership.call(addresshtXybMj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})