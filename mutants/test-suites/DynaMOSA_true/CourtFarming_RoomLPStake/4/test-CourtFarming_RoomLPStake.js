const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeOsvGkR1 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintCCTRyp9 = BigInt("685")
		const boolPN2AfWo = await CourtFarming_RoomLPStakeOsvGkR1.stakeIncvRewards.call(uintCCTRyp9, {from: accounts[2]});
		const uint256CyYqK9D = await CourtFarming_RoomLPStakeOsvGkR1.totalStaked.call({from: accounts[3]});
		const uint256zksmGvx = await CourtFarming_RoomLPStakeOsvGkR1.incvRewardInfo.call({from: accounts[5]});
		const uint256WTEuAFJ = await CourtFarming_RoomLPStakeOsvGkR1.totalStaked.call({from: accounts[4]});

		assert.equal(boolPN2AfWo, false)
		assert.equal(uint256CyYqK9D, BigInt("0"))
		assert.equal(uint256WTEuAFJ, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeFT2rXRo = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addressMgz5E3 = accounts[5]
		const addressNdT0JYB = accounts[4]
		const addressJaFfSAQ = accounts[4]
		const addressy2C2h28 = accounts[0]
//		const addressHyrBfQJ = await CourtFarming_RoomLPStakeFT2rXRo.setCourtStake.call(addressMgz5E3, {from: accounts[2]});
//		const addressiezQF3S = await CourtFarming_RoomLPStakeFT2rXRo.setCourtStake.call(addressNdT0JYB, {from: accounts[3]});
//		const uint256oGGjYCS = await CourtFarming_RoomLPStakeFT2rXRo.rewards.call(addressJaFfSAQ, {from: accounts[2]});
//		const addresseZLlQt = await CourtFarming_RoomLPStakeFT2rXRo.updateReward.call(addressy2C2h28, {from: accounts[3]});

		await expect(CourtFarming_RoomLPStakeFT2rXRo.setCourtStake.call(addressMgz5E3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakepl26TbR = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addresso6vM3Og = accounts[3]
		const uintKeNnOr = BigInt("811")
		const addressbZCCJWg = await CourtFarming_RoomLPStakepl26TbR.updateReward.call(addresso6vM3Og, {from: accounts[3]});
		const uint256PGfQln2 = await CourtFarming_RoomLPStakepl26TbR.expectedRewardsToday.call(uintKeNnOr, {from: accounts[3]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakejCcDnY = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressXMkVHr = accounts[3]
		const uint256g1lJ41M = await CourtFarming_RoomLPStakejCcDnY.incvRewardClaim.call({from: accounts[4]});
		const addressx2r9B7J = await CourtFarming_RoomLPStakejCcDnY.updateReward.call(addressXMkVHr, {from: accounts[2]});
		const uint256m6FYgs = await CourtFarming_RoomLPStakejCcDnY.totalStaked.call({from: accounts[1]});

		assert.equal(uint256g1lJ41M, BigInt("0"))
		assert.equal(uint256m6FYgs, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeAvI5LdW = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressxPNNqBT = "0x0000000000000000000000000000000000000001"
		const addressXPKk1US = "0x0000000000000000000000000000000000000001"
		const uintzC1dURn = BigInt("880")
		const uint256B6mklSu = await CourtFarming_RoomLPStakeAvI5LdW.lastUpdateBlock.call({from: accounts[1]});
		const uint256d6jlm1e = await CourtFarming_RoomLPStakeAvI5LdW.balanceOf.call(addressxPNNqBT, {from: accounts[1]});
		const uint256HOhZ55N = await CourtFarming_RoomLPStakeAvI5LdW.incvRewardInfo.call({from: accounts[4]});
//		const addresstaLTOPz = await CourtFarming_RoomLPStakeAvI5LdW.setCourtStake.call(addressXPKk1US, {from: accounts[2]});
//		const uint256NDhvSdY = await CourtFarming_RoomLPStakeAvI5LdW.expectedRewardsToday.call(uintzC1dURn, {from: accounts[4]});

		assert.equal(uint256B6mklSu, BigInt("1800"))
		assert.equal(uint256d6jlm1e, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeAvI5LdW.setCourtStake.call(addressXPKk1US, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeCDgRDm = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintKyYRPH = BigInt("465")
//		const uint256jAgnLsh = await CourtFarming_RoomLPStakeCDgRDm.stake.call(uintKyYRPH, {from: accounts[5]});
//		const uint256F0CxBeO = await CourtFarming_RoomLPStakeCDgRDm.blockNumber.call({from: accounts[0]});
//		const uint256parshv1 = await CourtFarming_RoomLPStakeCDgRDm.getCurrentTime.call({from: accounts[1]});

		await expect(CourtFarming_RoomLPStakeCDgRDm.stake.call(uintKyYRPH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeDTRnODh = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const bool0xJlTr = true
		const uintqsJ6T8r = BigInt("1007")
		const uintBv7itU9 = BigInt("1741")
		const addressyHKC5rv = accounts[3]
		const addressZM8jktX = accounts[1]
		const uint256XmOaWpS = await CourtFarming_RoomLPStakeDTRnODh.incvRewardClaim.call({from: accounts[2]});
//		const uint256Wp3rAIx = await CourtFarming_RoomLPStakeDTRnODh.unstake.call(uintqsJ6T8r, bool0xJlTr, {from: accounts[4]});
//		const uint256VpFdrg = await CourtFarming_RoomLPStakeDTRnODh.stake.call(uintBv7itU9, {from: "0x0000000000000000000000000000000000000001"});
//		const addressbuGG6dk = await CourtFarming_RoomLPStakeDTRnODh.updateReward.call(addressyHKC5rv, {from: accounts[3]});
//		const addressWPd9XDc = await CourtFarming_RoomLPStakeDTRnODh.updateReward.call(addressZM8jktX, {from: accounts[4]});

		assert.equal(uint256XmOaWpS, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeDTRnODh.unstake.call(uintqsJ6T8r, bool0xJlTr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeAvI5LdW = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintXaAfs7b = BigInt("850")
		const uinthCLLjV9 = BigInt("1291")
		const uintcSIK8Xl = BigInt("91")
		const addressYpmYIGQ = "0x0000000000000000000000000000000000000001"
		const addressYSmvtMh = "0x0000000000000000000000000000000000000001"
		const uintMSDKUDQ = BigInt("1212")
		const uint256B6mklSu = await CourtFarming_RoomLPStakeAvI5LdW.lastUpdateBlock.call({from: accounts[1]});
//		await CourtFarming_RoomLPStakeAvI5LdW.changeStakeParameters.call(uintcSIK8Xl, uinthCLLjV9, uintXaAfs7b, {from: accounts[0]});
//		const uint256d6jlm1e = await CourtFarming_RoomLPStakeAvI5LdW.balanceOf.call(addressYpmYIGQ, {from: accounts[1]});
//		const uint256HOhZ55N = await CourtFarming_RoomLPStakeAvI5LdW.incvRewardInfo.call({from: accounts[4]});
//		const addresstaLTOPz = await CourtFarming_RoomLPStakeAvI5LdW.setCourtStake.call(addressYSmvtMh, {from: accounts[2]});
//		const uint256NDhvSdY = await CourtFarming_RoomLPStakeAvI5LdW.expectedRewardsToday.call(uintMSDKUDQ, {from: accounts[4]});

		assert.equal(uint256B6mklSu, BigInt("1800"))
		await expect(CourtFarming_RoomLPStakeAvI5LdW.changeStakeParameters.call(uintcSIK8Xl, uinthCLLjV9, uintXaAfs7b, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakepl26TbR = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addresswNNSAO8 = accounts[4]
		const addressKFL0R64 = accounts[2]
		const addressBvDanJn = accounts[0]
		const uintCQxHtgp = BigInt("811")
		const addressbZCCJWg = await CourtFarming_RoomLPStakepl26TbR.updateReward.call(addresswNNSAO8, {from: accounts[3]});
		const addressXFemkkD = await CourtFarming_RoomLPStakepl26TbR.getBeneficiaryInfo.call(addressKFL0R64, {from: accounts[4]});
		const uint256tPbs9uJ = await CourtFarming_RoomLPStakepl26TbR.rewards.call(addressBvDanJn, {from: accounts[3]});
		const uint256PGfQln2 = await CourtFarming_RoomLPStakepl26TbR.expectedRewardsToday.call(uintCQxHtgp, {from: accounts[3]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeT1fRy7c = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressEbgiXKJ = accounts[5]
		const addresshQMpf7 = "0x0000000000000000000000000000000000000001"
		const uints1RqmHr = BigInt("1779")
		const uint256p1AzpnU = await CourtFarming_RoomLPStakeT1fRy7c.incvRewardInfo.call({from: accounts[2]});
		const addressXc1eKFB = await CourtFarming_RoomLPStakeT1fRy7c.updateReward.call(addressEbgiXKJ, {from: accounts[0]});
		const addressQTN5fSt = await CourtFarming_RoomLPStakeT1fRy7c.updateReward.call(addresshQMpf7, {from: accounts[2]});
		const uint256YcrLBH1 = await CourtFarming_RoomLPStakeT1fRy7c.totalStaked.call({from: accounts[0]});
		const uint256L8oHXti = await CourtFarming_RoomLPStakeT1fRy7c.blockNumber.call({from: accounts[1]});
		const boolrez8bTN = await CourtFarming_RoomLPStakeT1fRy7c.stakeIncvRewards.call(uints1RqmHr, {from: accounts[2]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeJ6nEaiQ = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressVIkkK8q = accounts[1]
		const addressP2Ow1p = accounts[6]
//		const addressHxISewb = await CourtFarming_RoomLPStakeJ6nEaiQ.setCourtStake.call(addressVIkkK8q, {from: accounts[4]});
//		const addresstv84BxS = await CourtFarming_RoomLPStakeJ6nEaiQ.setCourtStake.call(addressP2Ow1p, {from: accounts[2]});

		await expect(CourtFarming_RoomLPStakeJ6nEaiQ.setCourtStake.call(addressVIkkK8q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeDTRnODh = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintlJE2Ykd = BigInt("0")
		const addressJDzvUWT = accounts[5]
		const addressFTvoEKE = accounts[1]
		const uint256tkuhrOy = await CourtFarming_RoomLPStakeDTRnODh.stake.call(uintlJE2Ykd, {from: accounts[5]});
		const addressbuGG6dk = await CourtFarming_RoomLPStakeDTRnODh.updateReward.call(addressJDzvUWT, {from: accounts[3]});
		const addressWPd9XDc = await CourtFarming_RoomLPStakeDTRnODh.updateReward.call(addressFTvoEKE, {from: accounts[4]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakepl26TbR = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const boolsIwTW40 = false
		const uintIbAsq5A = BigInt("0")
		const uint256b1c81iM = await CourtFarming_RoomLPStakepl26TbR.blockNumber.call({from: accounts[3]});
		const uint256rlbgKZu = await CourtFarming_RoomLPStakepl26TbR.blockNumber.call({from: accounts[2]});
		const uint256tk1fAxT = await CourtFarming_RoomLPStakepl26TbR.unstake.call(uintIbAsq5A, boolsIwTW40, {from: accounts[3]});

		assert.equal(uint256b1c81iM, BigInt("1800"))
		assert.equal(uint256rlbgKZu, BigInt("1800"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakepl26TbR = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintT4Co0cq = BigInt("0")
		const uintDMDNi1R = BigInt("318")
		const uintODnqGLh = BigInt("1318")
		const uintBlUchX0 = BigInt("1239")
		const boolxruVLuv = await CourtFarming_RoomLPStakepl26TbR.stakeIncvRewards.call(uintT4Co0cq, {from: accounts[3]});
		const uint256851N6L = await CourtFarming_RoomLPStakepl26TbR.incvRewardClaim.call({from: accounts[3]});
//		await CourtFarming_RoomLPStakepl26TbR.changeStakeParameters.call(uintBlUchX0, uintODnqGLh, uintDMDNi1R, {from: accounts[0]});

		assert.equal(boolxruVLuv, false)
		assert.equal(uint256851N6L, BigInt("0"))
		await expect(CourtFarming_RoomLPStakepl26TbR.changeStakeParameters.call(uintBlUchX0, uintODnqGLh, uintDMDNi1R, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakepl26TbR = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintuODy170 = BigInt("0")
		const addresszypcJQv = accounts[4]
		const uintRiu3fYM = BigInt("566")
		const uint256qZjF8WU = await CourtFarming_RoomLPStakepl26TbR.blockNumber.call({from: accounts[3]});
		const uint256cweU9Y8 = await CourtFarming_RoomLPStakepl26TbR.totalStaked.call({from: accounts[4]});
		const boolxruVLuv = await CourtFarming_RoomLPStakepl26TbR.stakeIncvRewards.call(uintuODy170, {from: accounts[3]});
		const uint256iRCHHq7 = await CourtFarming_RoomLPStakepl26TbR.rewards.call(addresszypcJQv, {from: accounts[4]});
		const boolWITPPIL = await CourtFarming_RoomLPStakepl26TbR.stakeIncvRewards.call(uintRiu3fYM, {from: accounts[0]});
		const uint256Xt9QNy = await CourtFarming_RoomLPStakepl26TbR.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolWITPPIL, false)
		assert.equal(boolxruVLuv, false)
		assert.equal(uint256cweU9Y8, BigInt("0"))
		assert.equal(uint256qZjF8WU, BigInt("1800"))
	});
})