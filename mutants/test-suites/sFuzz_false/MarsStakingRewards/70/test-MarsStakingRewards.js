const MarsStakingRewards = artifacts.require("MarsStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MarsStakingRewards', (accounts) => {
	it('test for MarsStakingRewards', async () => {
		const addressRUExgIT = accounts[5]
		const addressH942Y2i = accounts[4]
		const addressHOgOQE = accounts[1]
		const MarsStakingRewardsslmsQ6 = await MarsStakingRewards.new(addressRUExgIT, addressH942Y2i, addressHOgOQE, {from: accounts[0]});
		const uint256xQfRnwA = await MarsStakingRewardsslmsQ6.totalSupply.call({from: accounts[1]});
		const uint256JOzSK2M = await MarsStakingRewardsslmsQ6.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256JOzSK2M, BigInt("0"))
		assert.equal(uint256xQfRnwA, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressq93ZCM1 = "0x0000000000000000000000000000000000000001"
		const addresselJGjdP = accounts[0]
		const addresso7kid95 = accounts[1]
		const MarsStakingRewardstRdQ7QJ = await MarsStakingRewards.new(addressq93ZCM1, addresselJGjdP, addresso7kid95, {from: accounts[0]});
		const uintwO3vR6V = BigInt("681")
		const addressU9zQxw0 = accounts[1]
		const uintPvnBvlf = BigInt("222")
		const address4kUzyt = accounts[2]
//		const addressK6HDvS = await MarsStakingRewardstRdQ7QJ.inCaseTokensGetStuck.call(addressU9zQxw0, uintwO3vR6V, {from: accounts[4]});
//		const addressoGg7SqK = await MarsStakingRewardstRdQ7QJ.inCaseTokensGetStuck.call(address4kUzyt, uintPvnBvlf, {from: accounts[4]});
//		await MarsStakingRewardstRdQ7QJ.nonReentrant.call({from: accounts[4]});

		await expect(MarsStakingRewardstRdQ7QJ.inCaseTokensGetStuck.call(addressU9zQxw0, uintwO3vR6V, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressAdkd8Is = accounts[1]
		const addressY8CmIJs = accounts[1]
		const addressClwnEdU = accounts[0]
		const MarsStakingRewardsbjcrHwq = await MarsStakingRewards.new(addressAdkd8Is, addressY8CmIJs, addressClwnEdU, {from: accounts[1]});
		const addressxuS2G8G = accounts[4]
		const addresshvgtrs = accounts[4]
		const uint256k3fPaZ = await MarsStakingRewardsbjcrHwq.rewardPerToken.call({from: accounts[0]});
		const uint256vfT1jNA = await MarsStakingRewardsbjcrHwq.balanceOf.call(addressxuS2G8G, {from: accounts[1]});
//		const addressXtynDO = await MarsStakingRewardsbjcrHwq.updateReward.call(addresshvgtrs, {from: accounts[2]});
//		const uint256JgdNNA7 = await MarsStakingRewardsbjcrHwq.lastTimeRewardApplicable.call({from: accounts[3]});
//		await MarsStakingRewardsbjcrHwq.nonReentrant.call({from: accounts[3]});

		assert.equal(uint256k3fPaZ, BigInt("0"))
		assert.equal(uint256vfT1jNA, BigInt("0"))
		await expect(MarsStakingRewardsbjcrHwq.updateReward.call(addresshvgtrs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressqZwRrl2 = accounts[4]
		const addressDPVeyZV = accounts[0]
		const addressclGCNtm = accounts[3]
		const MarsStakingRewardsa0Ub8jF = await MarsStakingRewards.new(addressqZwRrl2, addressDPVeyZV, addressclGCNtm, {from: accounts[4]});
		const addressHJWDBDu = accounts[4]
		const uint256NdTXxgz = await MarsStakingRewardsa0Ub8jF.rewardPerToken.call({from: accounts[2]});
		const uint256I7oyAAK = await MarsStakingRewardsa0Ub8jF.earned.call(addressHJWDBDu, {from: accounts[0]});
//		await MarsStakingRewardsa0Ub8jF.onlyRewardsDistribution.call({from: accounts[2]});

		assert.equal(uint256I7oyAAK, BigInt("0"))
		assert.equal(uint256NdTXxgz, BigInt("0"))
		await expect(MarsStakingRewardsa0Ub8jF.onlyRewardsDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressVKsLD2l = accounts[3]
		const addressXYBrALO = accounts[3]
		const addressh7Q6AaB = accounts[3]
		const MarsStakingRewardsH1c4NnW = await MarsStakingRewards.new(addressVKsLD2l, addressXYBrALO, addressh7Q6AaB, {from: accounts[2]});
		const addressnSWRW5k = accounts[4]
		const uintzNL7NPx = BigInt("148")
		const addressZYifOza = accounts[0]
		const uint256yUlVb50 = await MarsStakingRewardsH1c4NnW.balanceOf.call(addressnSWRW5k, {from: accounts[1]});
//		const uint256yb05Xub = await MarsStakingRewardsH1c4NnW.withdraw.call(uintzNL7NPx, {from: accounts[4]});
//		const uint256O0jYQGB = await MarsStakingRewardsH1c4NnW.totalSupply.call({from: accounts[3]});
//		const addressrWIPTPt = await MarsStakingRewardsH1c4NnW.owner.call({from: accounts[1]});
//		const addresspFPjvzt = await MarsStakingRewardsH1c4NnW.updateReward.call(addressZYifOza, {from: accounts[1]});

		assert.equal(uint256yUlVb50, BigInt("0"))
		await expect(MarsStakingRewardsH1c4NnW.withdraw.call(uintzNL7NPx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressh45t4CM = accounts[4]
		const address7vxcTG = accounts[4]
		const addressbNKgH1 = accounts[2]
		const MarsStakingRewardsZIBqNRx = await MarsStakingRewards.new(addressh45t4CM, address7vxcTG, addressbNKgH1, {from: "0x0000000000000000000000000000000000000001"});
		const addressrpX2Xi = accounts[4]
		const uinthDAkj0p = BigInt("920")
		const uint256ztGycP1 = await MarsStakingRewardsZIBqNRx.balanceOf.call(addressrpX2Xi, {from: accounts[2]});
		const uint256wihLjt0 = await MarsStakingRewardsZIBqNRx.withdraw.call(uinthDAkj0p, {from: accounts[3]});
		const uint256V0NGsoD = await MarsStakingRewardsZIBqNRx.getRewardForDuration.call({from: accounts[0]});
		const boolr8S3gGo = await MarsStakingRewardsZIBqNRx.isOwner.call({from: accounts[1]});
		await MarsStakingRewardsZIBqNRx.getReward.call({from: accounts[4]});
	});

	it('test for MarsStakingRewards', async () => {
		const addressHXWhg82 = accounts[5]
		const addressxPrnDpM = accounts[3]
		const addressmdxJ0Vp = accounts[3]
		const MarsStakingRewardsRwkImfb = await MarsStakingRewards.new(addressHXWhg82, addressxPrnDpM, addressmdxJ0Vp, {from: accounts[0]});
		const uintjFMNAp2 = BigInt("202")
		const addressra1hnnj = accounts[4]
//		await MarsStakingRewardsRwkImfb.exit.call({from: accounts[0]});
//		const addressN1nFOAM = await MarsStakingRewardsRwkImfb.inCaseTokensGetStuck.call(addressra1hnnj, uintjFMNAp2, {from: accounts[5]});

		await expect(MarsStakingRewardsRwkImfb.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressfxgNO7V = accounts[5]
		const addresspC7BOUi = accounts[4]
		const addressavWml8W = accounts[1]
		const MarsStakingRewardsslmsQ6 = await MarsStakingRewards.new(addressfxgNO7V, addresspC7BOUi, addressavWml8W, {from: accounts[0]});
		const uintih6xoG9 = BigInt("611")
		const uintE4QKxGn = BigInt("1653")
//		const uint256ZZvozTe = await MarsStakingRewardsslmsQ6.notifyRewardAmount.call(uintE4QKxGn, uintih6xoG9, {from: accounts[4]});
//		const uint256xQfRnwA = await MarsStakingRewardsslmsQ6.totalSupply.call({from: accounts[1]});
//		const uint256JOzSK2M = await MarsStakingRewardsslmsQ6.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(MarsStakingRewardsslmsQ6.notifyRewardAmount.call(uintE4QKxGn, uintih6xoG9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressVEJxl37 = accounts[4]
		const addresshoQV1N5 = accounts[0]
		const addressBoEAjRU = accounts[3]
		const MarsStakingRewardsa0Ub8jF = await MarsStakingRewards.new(addressVEJxl37, addresshoQV1N5, addressBoEAjRU, {from: accounts[4]});
		const uintIw6ve2x = BigInt("1226")
		const addressfjCLcvw = "0x0000000000000000000000000000000000000001"
		const addressxR5zf8i = accounts[5]
		const addressijf7B4C = "0x0000000000000000000000000000000000000001"
		const uint256NdTXxgz = await MarsStakingRewardsa0Ub8jF.rewardPerToken.call({from: accounts[2]});
//		const addressB0wAF0b = await MarsStakingRewardsa0Ub8jF.inCaseTokensGetStuck.call(addressfjCLcvw, uintIw6ve2x, {from: accounts[4]});
//		const uint256I7oyAAK = await MarsStakingRewardsa0Ub8jF.earned.call(addressxR5zf8i, {from: accounts[0]});
//		const uint256KJW80v = await MarsStakingRewardsa0Ub8jF.balanceOf.call(addressijf7B4C, {from: accounts[4]});
//		await MarsStakingRewardsa0Ub8jF.onlyRewardsDistribution.call({from: accounts[2]});

		assert.equal(uint256NdTXxgz, BigInt("0"))
		await expect(MarsStakingRewardsa0Ub8jF.inCaseTokensGetStuck.call(addressfjCLcvw, uintIw6ve2x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressOfWCkR4 = accounts[5]
		const addressH5XsHFh = accounts[2]
		const addressPWjzHyG = accounts[1]
		const MarsStakingRewardsNqSxvat = await MarsStakingRewards.new(addressOfWCkR4, addressH5XsHFh, addressPWjzHyG, {from: accounts[4]});
		const addressSddzYpn = "0x0000000000000000000000000000000000000001"
		const byteen07YX1 = "0x110c0d09111c000c040a1d091405200500180407161f02170e1a1a0705031b16"
		const byteD22MdZN = "0x140e1b0c191b0b0f16141e141c16191015150402151f0f1b110102170810101f"
		const uintNzCYfX = BigInt("50")
		const uintiZL5fIn = BigInt("333")
		const uintg4Hgaaj = BigInt("307")
		const addresswc1Sb0X = accounts[0]
		const uint256tcj2vVA = await MarsStakingRewardsNqSxvat.getRewardForDuration.call({from: accounts[4]});
		const uint256AqnrWrF = await MarsStakingRewardsNqSxvat.getRewardForDuration.call({from: accounts[4]});
		const uint256qGeF9A = await MarsStakingRewardsNqSxvat.balanceOf.call(addressSddzYpn, {from: accounts[2]});
//		const uint256YqJS9A8 = await MarsStakingRewardsNqSxvat.stakeWithPermit.call(uintg4Hgaaj, uintiZL5fIn, uintNzCYfX, byteD22MdZN, byteen07YX1, {from: accounts[1]});
//		const uint256MBbrZGc = await MarsStakingRewardsNqSxvat.totalSupply.call({from: accounts[0]});
//		const uint256RuGEHRR = await MarsStakingRewardsNqSxvat.earned.call(addresswc1Sb0X, {from: accounts[3]});

		assert.equal(uint256AqnrWrF, BigInt("0"))
		assert.equal(uint256qGeF9A, BigInt("0"))
		assert.equal(uint256tcj2vVA, BigInt("0"))
		await expect(MarsStakingRewardsNqSxvat.stakeWithPermit.call(uintg4Hgaaj, uintiZL5fIn, uintNzCYfX, byteD22MdZN, byteen07YX1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressUMwunhy = accounts[5]
		const addressV0HZVwq = accounts[4]
		const addressVKA72N0 = accounts[1]
		const MarsStakingRewardsslmsQ6 = await MarsStakingRewards.new(addressUMwunhy, addressV0HZVwq, addressVKA72N0, {from: accounts[0]});
//		await MarsStakingRewardsslmsQ6.renounceOwnership.call({from: accounts[0]});
//		const uint256xQfRnwA = await MarsStakingRewardsslmsQ6.totalSupply.call({from: accounts[1]});

		await expect(MarsStakingRewardsslmsQ6.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressJzHJ2Tj = accounts[5]
		const addresszSTmE62 = accounts[4]
		const addressEJpUYZL = accounts[1]
		const MarsStakingRewardsslmsQ6 = await MarsStakingRewards.new(addressJzHJ2Tj, addresszSTmE62, addressEJpUYZL, {from: accounts[0]});
		const uintmPix09W = BigInt("347")
		const uint256xQfRnwA = await MarsStakingRewardsslmsQ6.totalSupply.call({from: accounts[1]});
		const uint256tezAq5D = await MarsStakingRewardsslmsQ6.lastTimeRewardApplicable.call({from: accounts[1]});
//		const uint256Nz8fbGp = await MarsStakingRewardsslmsQ6.stake.call(uintmPix09W, {from: accounts[0]});

		assert.equal(uint256tezAq5D, BigInt("0"))
		assert.equal(uint256xQfRnwA, BigInt("0"))
		await expect(MarsStakingRewardsslmsQ6.stake.call(uintmPix09W, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressNx4QVYj = accounts[5]
		const addressJucDrg = accounts[4]
		const addressZoKPe7x = accounts[1]
		const MarsStakingRewardsslmsQ6 = await MarsStakingRewards.new(addressNx4QVYj, addressJucDrg, addressZoKPe7x, {from: accounts[0]});
		const addressuf7J3Ud = accounts[3]
		const uint256dSVJ5jS = await MarsStakingRewardsslmsQ6.getRewardForDuration.call({from: accounts[4]});
		const addresseJRA79O = await MarsStakingRewardsslmsQ6.transferOwnership.call(addressuf7J3Ud, {from: accounts[0]});
		const uint256JOzSK2M = await MarsStakingRewardsslmsQ6.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256JOzSK2M, BigInt("0"))
		assert.equal(uint256dSVJ5jS, BigInt("0"))
	});

	it('test for MarsStakingRewards', async () => {
		const addressNOuFtLt = accounts[5]
		const addresseRRAuzS = accounts[4]
		const addresslCS5DB8 = accounts[1]
		const MarsStakingRewardsslmsQ6 = await MarsStakingRewards.new(addressNOuFtLt, addresseRRAuzS, addresslCS5DB8, {from: accounts[0]});
		const uintw5sBCCe = BigInt("1169")
		const uintsstnema = BigInt("57")
//		const uint25651ERca = await MarsStakingRewardsslmsQ6.notifyRewardAmount.call(uintsstnema, uintw5sBCCe, {from: accounts[5]});
//		const uint256xQfRnwA = await MarsStakingRewardsslmsQ6.totalSupply.call({from: accounts[1]});
//		await MarsStakingRewardsslmsQ6.onlyOwner.call({from: accounts[2]});

		await expect(MarsStakingRewardsslmsQ6.notifyRewardAmount.call(uintsstnema, uintw5sBCCe, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MarsStakingRewards', async () => {
		const addressKT23FQn = accounts[5]
		const addressrxF44JE = accounts[4]
		const addressKf0NjSN = accounts[1]
		const MarsStakingRewardsslmsQ6 = await MarsStakingRewards.new(addressKT23FQn, addressrxF44JE, addressKf0NjSN, {from: accounts[0]});
		const addressyegTnJd = accounts[5]
		const addressdtVShVL = await MarsStakingRewardsslmsQ6.setRewardsDistribution.call(addressyegTnJd, {from: accounts[0]});
		const uint256BFAlFM = await MarsStakingRewardsslmsQ6.totalSupply.call({from: accounts[3]});
		const uint256JOzSK2M = await MarsStakingRewardsslmsQ6.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256BFAlFM, BigInt("0"))
		assert.equal(uint256JOzSK2M, BigInt("0"))
	});
})