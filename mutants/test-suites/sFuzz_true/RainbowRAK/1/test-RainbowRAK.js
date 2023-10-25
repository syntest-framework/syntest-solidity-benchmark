const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKwJmcAcl = await RainbowRAK.new({from: accounts[5]});
		const uintLpMqe7E = BigInt("934")
		const uintBxDWgy2 = BigInt("1595")
		const addressOJIjj1R = accounts[2]
//		const uint256nE4zuU8 = await RainbowRAKwJmcAcl.stake.call(uintLpMqe7E, {from: accounts[0]});
//		const uint256i1jThmz = await RainbowRAKwJmcAcl.rewardPerToken.call({from: accounts[1]});
//		const uint256BNh4L7G = await RainbowRAKwJmcAcl.stake.call(uintBxDWgy2, {from: accounts[1]});
//		const uint256FDG7fgm = await RainbowRAKwJmcAcl.earned.call(addressOJIjj1R, {from: accounts[5]});
//		const uint256g2J7HQ0 = await RainbowRAKwJmcAcl.rewardPerToken.call({from: accounts[3]});

		await expect(RainbowRAKwJmcAcl.stake.call(uintLpMqe7E, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKtRSiXS = await RainbowRAK.new({from: accounts[1]});
		const uintGkZBfqg = BigInt("517")
		const uintg7iSQzF = BigInt("1105")
		const addressarrayl4DN0XZ = await RainbowRAKtRSiXS.getCommunity.call({from: accounts[2]});
		const addressarrayeely7IN = await RainbowRAKtRSiXS.getCommunity.call({from: accounts[0]});
//		const uint256wyPlUjt = await RainbowRAKtRSiXS.unstake.call(uintGkZBfqg, {from: accounts[4]});
//		const addressiwuMKbo = await RainbowRAKtRSiXS.owner.call({from: accounts[5]});
//		const uint256UIj281o = await RainbowRAKtRSiXS.unstake.call(uintg7iSQzF, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256GGeTg8m = await RainbowRAKtRSiXS.getCurrentRewardReserve.call({from: accounts[4]});

		assert.equal(addressarrayeely7IN, )
		assert.equal(addressarrayl4DN0XZ, )
		await expect(RainbowRAKtRSiXS.unstake.call(uintGkZBfqg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKciowSc1 = await RainbowRAK.new({from: accounts[3]});
		const addressxD60ZXM = accounts[3]
//		await RainbowRAKciowSc1.renounceOwnership.call({from: accounts[1]});
//		const addressvdXzrkV = await RainbowRAKciowSc1.updateReward.call(addressxD60ZXM, {from: accounts[4]});
//		const addressarrayztg5tqQ = await RainbowRAKciowSc1.getCommunity.call({from: accounts[3]});
//		const uint256erQAGUm = await RainbowRAKciowSc1.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256d75B5sY = await RainbowRAKciowSc1.rewardPerToken.call({from: accounts[4]});

		await expect(RainbowRAKciowSc1.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKKdaxPBK = await RainbowRAK.new({from: accounts[1]});
		const uint256xVy0vSn = await RainbowRAKKdaxPBK.rewardPerToken.call({from: accounts[3]});
		const addressarrayubbwgQu = await RainbowRAKKdaxPBK.getCommunity.call({from: accounts[4]});
//		await RainbowRAKKdaxPBK.claimRewards.call({from: accounts[2]});
//		const uint256nF7qMmp = await RainbowRAKKdaxPBK.getCurrentRewardReserve.call({from: accounts[2]});
//		await RainbowRAKKdaxPBK.renounceOwnership.call({from: accounts[1]});

		assert.equal(addressarrayubbwgQu, )
		assert.equal(uint256xVy0vSn, BigInt("0"))
		await expect(RainbowRAKKdaxPBK.claimRewards.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKdmMM5fS = await RainbowRAK.new({from: accounts[3]});
		const addressarrayGzbUfhK = await RainbowRAKdmMM5fS.getCommunity.call({from: accounts[1]});
		const uint256UW9ypy4 = await RainbowRAKdmMM5fS.getCurrentRewardReserve.call({from: accounts[3]});
		const boolUsHDUcF = await RainbowRAKdmMM5fS.isOwner.call({from: accounts[2]});
//		await RainbowRAKdmMM5fS.claimRewards.call({from: accounts[3]});
//		const addressarrayzjP7VuX = await RainbowRAKdmMM5fS.getCommunity.call({from: accounts[3]});

		assert.equal(addressarrayGzbUfhK, )
		assert.equal(boolUsHDUcF, false)
		assert.equal(uint256UW9ypy4, BigInt("0"))
		await expect(RainbowRAKdmMM5fS.claimRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKb5PtdUC = await RainbowRAK.new({from: accounts[3]});
		const addressCUdVy5C = accounts[3]
		const uintW2JFQPB = BigInt("617")
		const addressTHkuWiF = accounts[3]
		const addressarrayTI0NJNJ = await RainbowRAKb5PtdUC.getCommunity.call({from: accounts[4]});
		const addressyGqVvLJ = await RainbowRAKb5PtdUC.transferOwnership.call(addressCUdVy5C, {from: accounts[3]});
//		const uint256DRSgQSA = await RainbowRAKb5PtdUC.stake.call(uintW2JFQPB, {from: accounts[1]});
//		const uint256T000qd = await RainbowRAKb5PtdUC.earned.call(addressTHkuWiF, {from: accounts[3]});
//		const uint256MJn2QPX = await RainbowRAKb5PtdUC.lastTimeRewardApplicable.call({from: accounts[2]});
//		await RainbowRAKb5PtdUC.claimRewards.call({from: accounts[3]});

		assert.equal(addressarrayTI0NJNJ, )
		await expect(RainbowRAKb5PtdUC.stake.call(uintW2JFQPB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKIN2hUJx = await RainbowRAK.new({from: accounts[2]});
		const addresspGdvUHI = accounts[1]
		const uintFh7wpD = BigInt("1397")
		const uintjfjkx51 = BigInt("231")
		const uint256IpN8BeL = await RainbowRAKIN2hUJx.rewardPerToken.call({from: accounts[4]});
		const uint256SafzKac = await RainbowRAKIN2hUJx.earned.call(addresspGdvUHI, {from: accounts[4]});
//		await RainbowRAKIN2hUJx.onlyOwner.call({from: accounts[5]});
//		const boolnjIjvg = await RainbowRAKIN2hUJx.isOwner.call({from: accounts[2]});
//		const uint256y0EOOzk = await RainbowRAKIN2hUJx.stake.call(uintFh7wpD, {from: accounts[4]});
//		const uint256mwVVN5x = await RainbowRAKIN2hUJx.stake.call(uintjfjkx51, {from: accounts[4]});

		assert.equal(uint256IpN8BeL, BigInt("0"))
		assert.equal(uint256SafzKac, BigInt("0"))
		await expect(RainbowRAKIN2hUJx.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKiIrEUU7 = await RainbowRAK.new({from: accounts[3]});
		const addressx6eG4jB = accounts[1]
		const uintOLnrs1p = BigInt("618")
		const addressWn8p9Ir = await RainbowRAKiIrEUU7.owner.call({from: accounts[1]});
//		const addressMt3DB8c = await RainbowRAKiIrEUU7.transferOwnership.call(addressx6eG4jB, {from: accounts[4]});
//		const uint256ICMoDEi = await RainbowRAKiIrEUU7.lastTimeRewardApplicable.call({from: accounts[4]});
//		const uint256rWDdSZU = await RainbowRAKiIrEUU7.stake.call(uintOLnrs1p, {from: accounts[2]});
//		const booleC3C1GJ = await RainbowRAKiIrEUU7.isOwner.call({from: accounts[2]});

		assert.equal(addressWn8p9Ir, 0x34FFd19402Ad532b3a0480Ff10e7580b08f5B687)
		await expect(RainbowRAKiIrEUU7.transferOwnership.call(addressx6eG4jB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKQbxeWcg = await RainbowRAK.new({from: accounts[5]});
		const uintxngUwxH = BigInt("1699")
		const addressLZThu90 = accounts[1]
//		await RainbowRAKQbxeWcg.exit.call({from: accounts[2]});
//		const uint2563U7hqi = await RainbowRAKQbxeWcg.unstake.call(uintxngUwxH, {from: accounts[1]});
//		const uint256Zb7klLY = await RainbowRAKQbxeWcg.rewardPerToken.call({from: accounts[3]});
//		const addressqI0OSh9 = await RainbowRAKQbxeWcg.updateReward.call(addressLZThu90, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RainbowRAKQbxeWcg.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKKdaxPBK = await RainbowRAK.new({from: accounts[1]});
		const addressKxZe0vb = await RainbowRAKKdaxPBK.owner.call({from: accounts[3]});
//		await RainbowRAKKdaxPBK.renounceOwnership.call({from: accounts[1]});

		assert.equal(addressKxZe0vb, 0x0834D74fC57E2b307522c400a5d8025Fe064D35E)
		await expect(RainbowRAKKdaxPBK.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKVc7V8Hu = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const addressJffxS6Y = accounts[2]
		const addressgABLKh2 = accounts[0]
		const uint256DAuGZR = await RainbowRAKVc7V8Hu.earned.call(addressJffxS6Y, {from: accounts[3]});
		const addressKF69Hi = await RainbowRAKVc7V8Hu.updateReward.call(addressgABLKh2, {from: accounts[4]});
		await RainbowRAKVc7V8Hu.claimRewards.call({from: accounts[4]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKIN2hUJx = await RainbowRAK.new({from: accounts[2]});
		const uintYKhHAH9 = BigInt("277")
		const uinteXUmEdm = BigInt("39")
//		const uint256yMr5CMW = await RainbowRAKIN2hUJx.notifyRewardAmount.call(uintYKhHAH9, {from: accounts[2]});
//		const uint256mwVVN5x = await RainbowRAKIN2hUJx.stake.call(uinteXUmEdm, {from: accounts[4]});

		await expect(RainbowRAKIN2hUJx.notifyRewardAmount.call(uintYKhHAH9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})