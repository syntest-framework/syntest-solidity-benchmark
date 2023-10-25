const MisesLegacyPool = artifacts.require("MisesLegacyPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MisesLegacyPool', (accounts) => {
	it('test for MisesLegacyPool', async () => {
		const addressKQig18m = "0x0000000000000000000000000000000000000001"
		const addressgiht1CO = accounts[0]
		const uintvci7Gzs = BigInt("480")
		const uintHsUPT8F = BigInt("1536")
		const MisesLegacyPoolAIJkkUm = await MisesLegacyPool.new(addressKQig18m, addressgiht1CO, uintvci7Gzs, uintHsUPT8F, {from: accounts[3]});
		const uintaNSENtD = BigInt("1596")
		const addresslY7nWm = accounts[1]
		const addressjZ8ZO1O = "0x0000000000000000000000000000000000000001"
		const uintBGXLIpM = BigInt("1224")
//		const uint256w4uLxC = await MisesLegacyPoolAIJkkUm.notifyRewardAmount.call(uintaNSENtD, {from: accounts[0]});
//		const addressLmqSAiD = await MisesLegacyPoolAIJkkUm.updateReward.call(addresslY7nWm, {from: accounts[4]});
//		const uint256XAs1y0 = await MisesLegacyPoolAIJkkUm.earned.call(addressjZ8ZO1O, {from: accounts[4]});
//		await MisesLegacyPoolAIJkkUm.exit.call({from: accounts[2]});
//		const uint256FQbIW0W = await MisesLegacyPoolAIJkkUm.stake.call(uintBGXLIpM, {from: accounts[2]});

		await expect(MisesLegacyPoolAIJkkUm.notifyRewardAmount.call(uintaNSENtD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressiNdRKLF = accounts[4]
		const addressMHoMVPL = accounts[2]
		const uintyCaTqX = BigInt("1219")
		const uintitGdKG1 = BigInt("1198")
		const MisesLegacyPoolUvwSzDb = await MisesLegacyPool.new(addressiNdRKLF, addressMHoMVPL, uintyCaTqX, uintitGdKG1, {from: accounts[2]});
		const addresswDTc0cF = accounts[4]
		const uintVe06VNJ = BigInt("1020")
//		await MisesLegacyPoolUvwSzDb.exit.call({from: accounts[0]});
//		const addressC9o32wy = await MisesLegacyPoolUvwSzDb.updateReward.call(addresswDTc0cF, {from: accounts[3]});
//		const uint256md0ViTm = await MisesLegacyPoolUvwSzDb.stake.call(uintVe06VNJ, {from: accounts[5]});

		await expect(MisesLegacyPoolUvwSzDb.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresslSat0eN = accounts[3]
		const addresshB6C35N = accounts[1]
		const uintRRCR6jl = BigInt("798")
		const uintxeEZa8R = BigInt("703")
		const MisesLegacyPoolnIkRWd9 = await MisesLegacyPool.new(addresslSat0eN, addresshB6C35N, uintRRCR6jl, uintxeEZa8R, {from: accounts[5]});
		const uintTEOAc7B = BigInt("1828")
		const uintVOBMZ7u = BigInt("1434")
		const uint256Vp9gqZ = await MisesLegacyPoolnIkRWd9.rewardPerToken.call({from: accounts[5]});
//		const uint256nYc16Qm = await MisesLegacyPoolnIkRWd9.withdraw.call(uintTEOAc7B, {from: accounts[5]});
//		const uint256kBd1z1n = await MisesLegacyPoolnIkRWd9.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256hJsqJjA = await MisesLegacyPoolnIkRWd9.stake.call(uintVOBMZ7u, {from: accounts[5]});
//		await MisesLegacyPoolnIkRWd9.exit.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Vp9gqZ, BigInt("0"))
		await expect(MisesLegacyPoolnIkRWd9.withdraw.call(uintTEOAc7B, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressMynYdzR = accounts[3]
		const addressjBJecUB = accounts[4]
		const uintPaCY6CO = BigInt("162")
		const uintgIp9fQh = BigInt("460")
		const MisesLegacyPoolSI2eL5F = await MisesLegacyPool.new(addressMynYdzR, addressjBJecUB, uintPaCY6CO, uintgIp9fQh, {from: accounts[3]});
		const addressyDfePya = accounts[1]
		const addressKmpxk0 = accounts[5]
//		const addressyehxfx2 = await MisesLegacyPoolSI2eL5F.updateReward.call(addressyDfePya, {from: accounts[0]});
//		const uint256tHCoY5h = await MisesLegacyPoolSI2eL5F.rewardPerToken.call({from: accounts[3]});
//		const uint256J5MzTNA = await MisesLegacyPoolSI2eL5F.earned.call(addressKmpxk0, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256sVdEMCj = await MisesLegacyPoolSI2eL5F.rewardPerToken.call({from: accounts[2]});
//		await MisesLegacyPoolSI2eL5F.getReward.call({from: accounts[1]});

		await expect(MisesLegacyPoolSI2eL5F.updateReward.call(addressyDfePya, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addresskEpLrpR = accounts[4]
		const addressNNaCcE = accounts[0]
		const uintBO3Qy9n = BigInt("1194")
		const uintcpfoj5 = BigInt("1782")
		const MisesLegacyPoolZRILXP4 = await MisesLegacyPool.new(addresskEpLrpR, addressNNaCcE, uintBO3Qy9n, uintcpfoj5, {from: "0x0000000000000000000000000000000000000001"});
		const uintkqo9ycu = BigInt("968")
		const uintCcjUPqF = BigInt("657")
		const uint256fx8QTi = await MisesLegacyPoolZRILXP4.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256jmc9Ldf = await MisesLegacyPoolZRILXP4.withdraw.call(uintkqo9ycu, {from: "0x0000000000000000000000000000000000000001"});
		const uint256iALlGqj = await MisesLegacyPoolZRILXP4.withdraw.call(uintCcjUPqF, {from: accounts[0]});
		const uint256ZCnFSzd = await MisesLegacyPoolZRILXP4.lastTimeRewardApplicable.call({from: accounts[5]});
	});

	it('test for MisesLegacyPool', async () => {
		const addressMOEBVbG = accounts[4]
		const addressOa7Wc48 = accounts[2]
		const uintYxgcJyD = BigInt("1219")
		const uintUWhvxJd = BigInt("1198")
		const MisesLegacyPoolUvwSzDb = await MisesLegacyPool.new(addressMOEBVbG, addressOa7Wc48, uintYxgcJyD, uintUWhvxJd, {from: accounts[2]});
		const uinto2ZFQ5v = BigInt("1231")
		const addressOWLhHxV = accounts[1]
		const addressQ86iDeY = accounts[5]
		const uintgoXNpcK = BigInt("1020")
//		const uint256e0ukVdT = await MisesLegacyPoolUvwSzDb.stake.call(uinto2ZFQ5v, {from: accounts[3]});
//		await MisesLegacyPoolUvwSzDb.exit.call({from: accounts[0]});
//		await MisesLegacyPoolUvwSzDb.exit.call({from: accounts[3]});
//		const uint256UNEUNY = await MisesLegacyPoolUvwSzDb.rewardPerToken.call({from: accounts[0]});
//		const addressS3mN7J8 = await MisesLegacyPoolUvwSzDb.updateReward.call(addressOWLhHxV, {from: accounts[3]});
//		const addressC9o32wy = await MisesLegacyPoolUvwSzDb.updateReward.call(addressQ86iDeY, {from: accounts[3]});
//		const uint256md0ViTm = await MisesLegacyPoolUvwSzDb.stake.call(uintgoXNpcK, {from: accounts[5]});

		await expect(MisesLegacyPoolUvwSzDb.stake.call(uinto2ZFQ5v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MisesLegacyPool', async () => {
		const addressmO0FnGT = accounts[3]
		const addressfzLHaKB = accounts[0]
		const uintSzwvRhm = BigInt("2018")
		const uintfb0nPK2 = BigInt("35")
		const MisesLegacyPoolM5kjD0s = await MisesLegacyPool.new(addressmO0FnGT, addressfzLHaKB, uintSzwvRhm, uintfb0nPK2, {from: accounts[0]});
		const uintM4dPtGF = BigInt("595")
//		await MisesLegacyPoolM5kjD0s.getReward.call({from: accounts[5]});
//		await MisesLegacyPoolM5kjD0s.exit.call({from: accounts[1]});
//		const uint256UEUZQeu = await MisesLegacyPoolM5kjD0s.notifyRewardAmount.call(uintM4dPtGF, {from: accounts[0]});

		await expect(MisesLegacyPoolM5kjD0s.getReward.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});
})