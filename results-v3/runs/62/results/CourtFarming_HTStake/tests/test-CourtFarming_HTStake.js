const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakesQR44q8 = await CourtFarming_HTStake.new({from: accounts[1]});
		const uint256HePMVne = await CourtFarming_HTStakesQR44q8.incvRewardInfo.call({from: accounts[3]});
		const uint256gKQXVIn = await CourtFarming_HTStakesQR44q8.incvRewardInfo.call({from: accounts[3]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakebj5EoL = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintsgJeOJM = BigInt("1361")
		const uint256zC71uXt = await CourtFarming_HTStakebj5EoL.lastUpdateBlock.call({from: accounts[0]});
		const uint256wQOLHlZ = await CourtFarming_HTStakebj5EoL.expectedRewardsToday.call(uintsgJeOJM, {from: accounts[1]});
		const uint256BcinWCc = await CourtFarming_HTStakebj5EoL.totalStaked.call({from: accounts[1]});

		assert.equal(uint256BcinWCc, BigInt("0"))
		assert.equal(uint256zC71uXt, BigInt("1771"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeemsxb4I = await CourtFarming_HTStake.new({from: accounts[4]});
		const boolgIoFlU = false
		const uintFb4yIXm = BigInt("1202")
		const uint256Ox18Bvq = await CourtFarming_HTStakeemsxb4I.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ffMTzbi = await CourtFarming_HTStakeemsxb4I.lastUpdateBlock.call({from: accounts[1]});
		const uint256gKceDXr = await CourtFarming_HTStakeemsxb4I.unstake.call(uintFb4yIXm, boolgIoFlU, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Ox18Bvq, BigInt("1771"))
		assert.equal(uint256ffMTzbi, BigInt("1771"))
		await expect(CourtFarming_HTStakeemsxb4I.unstake.call(uintFb4yIXm, boolgIoFlU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakelQ38Om2 = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressg3GP48d = accounts[1]
		const addressMJL6kWn = accounts[3]
		const uintxXL7i3t = BigInt("420")
		const uint256SOiPysR = await CourtFarming_HTStakelQ38Om2.getCurrentTime.call({from: accounts[4]});
		const uint256rndOdN = await CourtFarming_HTStakelQ38Om2.lastUpdateBlock.call({from: accounts[3]});
		const uint256FRFf9f = await CourtFarming_HTStakelQ38Om2.blockNumber.call({from: accounts[2]});
		const uint256yRnEAys = await CourtFarming_HTStakelQ38Om2.rewards.call(addressg3GP48d, {from: accounts[3]});
		const addresslEliibk = await CourtFarming_HTStakelQ38Om2.setCourtStake.call(addressMJL6kWn, {from: accounts[3]});
		const uint256Ov0QAuO = await CourtFarming_HTStakelQ38Om2.stake.call(uintxXL7i3t, {from: accounts[0]});

		assert.equal(uint256FRFf9f, BigInt("1771"))
		assert.equal(uint256SOiPysR, BigInt("1630201495"))
		assert.equal(uint256rndOdN, BigInt("1771"))
		await expect(CourtFarming_HTStakelQ38Om2.setCourtStake.call(addressMJL6kWn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeyMsUrQC = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressgl6ews = accounts[0]
		const uintaXOaMDE = BigInt("1970")
		const uintXLQpk6 = BigInt("486")
		const uintHw8YBQQ = BigInt("1803")
		const uintcYaIKrT = BigInt("88")
		const uint256GMSUbQ5 = await CourtFarming_HTStakeyMsUrQC.lastUpdateBlock.call({from: accounts[4]});
		const uint256SKiZMPF = await CourtFarming_HTStakeyMsUrQC.balanceOf.call(addressgl6ews, {from: accounts[1]});
		await CourtFarming_HTStakeyMsUrQC.changeStakeParameters.call(uintHw8YBQQ, uintXLQpk6, uintaXOaMDE, {from: accounts[2]});
		const uint256bVZoUsU = await CourtFarming_HTStakeyMsUrQC.stake.call(uintcYaIKrT, {from: accounts[3]});

		assert.equal(uint256GMSUbQ5, BigInt("1771"))
		assert.equal(uint256SKiZMPF, BigInt("0"))
		await expect(CourtFarming_HTStakeyMsUrQC.changeStakeParameters.call(uintHw8YBQQ, uintXLQpk6, uintaXOaMDE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeSIKT3cM = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressUG71lIz = accounts[3]
		const addressL659DdO = accounts[4]
		const uintZ95aGoj = BigInt("1426")
		const addressj4ihYDR = await CourtFarming_HTStakeSIKT3cM.updateReward.call(addressUG71lIz, {from: accounts[3]});
		const addressrNzYd6k = await CourtFarming_HTStakeSIKT3cM.setCourtStake.call(addressL659DdO, {from: accounts[0]});
		const uint256PIFleyC = await CourtFarming_HTStakeSIKT3cM.expectedRewardsToday.call(uintZ95aGoj, {from: accounts[0]});
		const uint256wRb2kXS = await CourtFarming_HTStakeSIKT3cM.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakeSIKT3cM.setCourtStake.call(addressL659DdO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakecN8iTT5 = await CourtFarming_HTStake.new({from: accounts[0]});
		const addresswcenfEn = accounts[1]
		const uintqpvh6ha = BigInt("1019")
		const uintD6tzhLd = BigInt("861")
		const uintKoOMfYE = BigInt("901")
		const uint256HJC2puR = await CourtFarming_HTStakecN8iTT5.balanceOf.call(addresswcenfEn, {from: accounts[0]});
		const uint256Yh8S621 = await CourtFarming_HTStakecN8iTT5._stakeParametrsCalculation.call(uintKoOMfYE, uintD6tzhLd, uintqpvh6ha, {from: accounts[2]});
		const uint256FT6UetN = await CourtFarming_HTStakecN8iTT5.incvRewardClaim.call({from: accounts[2]});

		assert.equal(uint256HJC2puR, BigInt("0"))
		await expect(CourtFarming_HTStakecN8iTT5._stakeParametrsCalculation.call(uintKoOMfYE, uintD6tzhLd, uintqpvh6ha, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeqmf63px = await CourtFarming_HTStake.new({from: accounts[3]});
		const addresspEpFXrY = accounts[2]
		const uintcQKJkAL = BigInt("650")
		const uint256cOHKWY = await CourtFarming_HTStakeqmf63px.incvRewardClaim.call({from: accounts[4]});
		const uint256uUWway = await CourtFarming_HTStakeqmf63px.rewards.call(addresspEpFXrY, {from: accounts[1]});
		const uint256xXTTfA = await CourtFarming_HTStakeqmf63px.expectedRewardsToday.call(uintcQKJkAL, {from: accounts[4]});

		assert.equal(uint256cOHKWY, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakebIhtTW1 = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintd4jPnhk = BigInt("679")
		const uintSPDLsuq = BigInt("773")
		const uint256JCAB8Ee = await CourtFarming_HTStakebIhtTW1.incvRewardInfo.call({from: accounts[4]});
		const uint256OAuoPx7 = await CourtFarming_HTStakebIhtTW1.stake.call(uintd4jPnhk, {from: accounts[0]});
		const uint256AO6PopZ = await CourtFarming_HTStakebIhtTW1.blockNumber.call({from: accounts[3]});
		const uint256qeWDtWD = await CourtFarming_HTStakebIhtTW1.stake.call(uintSPDLsuq, {from: accounts[3]});

		await expect(CourtFarming_HTStakebIhtTW1.stake.call(uintd4jPnhk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeqmf63px = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressywgDJeH = accounts[4]
		const uintgQFfjC = BigInt("1338")
		const uint256cOHKWY = await CourtFarming_HTStakeqmf63px.incvRewardClaim.call({from: accounts[4]});
		const uint256Fq32T61 = await CourtFarming_HTStakeqmf63px.lastUpdateBlock.call({from: accounts[1]});
		const uint256uUWway = await CourtFarming_HTStakeqmf63px.rewards.call(addressywgDJeH, {from: accounts[1]});
		const booltUP6KHh = await CourtFarming_HTStakeqmf63px.stakeIncvRewards.call(uintgQFfjC, {from: accounts[4]});

		assert.equal(booltUP6KHh, false)
		assert.equal(uint256Fq32T61, BigInt("1771"))
		assert.equal(uint256cOHKWY, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeqmf63px = await CourtFarming_HTStake.new({from: accounts[3]});
		const addresssuNAo8 = accounts[2]
		const addressoCsqstH = accounts[4]
		const uintYxxOV1V = BigInt("650")
		const uint256cOHKWY = await CourtFarming_HTStakeqmf63px.incvRewardClaim.call({from: accounts[4]});
		const uint256uUWway = await CourtFarming_HTStakeqmf63px.rewards.call(addresssuNAo8, {from: accounts[1]});
		const addressupV4KVg = await CourtFarming_HTStakeqmf63px.getBeneficiaryInfo.call(addressoCsqstH, {from: accounts[3]});
		const uint256xXTTfA = await CourtFarming_HTStakeqmf63px.expectedRewardsToday.call(uintYxxOV1V, {from: accounts[4]});

		assert.equal(uint256cOHKWY, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakewJzldE8 = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const boolCYG45Gj = true
		const uintw8RzS3O = BigInt("763")
		const uintbLfq1ay = BigInt("1567")
		const uint256nFVfphY = await CourtFarming_HTStakewJzldE8.totalStaked.call({from: accounts[1]});
		const uint256jsc0s5R = await CourtFarming_HTStakewJzldE8.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256WVwOlyW = await CourtFarming_HTStakewJzldE8.unstake.call(uintw8RzS3O, boolCYG45Gj, {from: accounts[2]});
		const uint256rdyDitz = await CourtFarming_HTStakewJzldE8.expectedRewardsToday.call(uintbLfq1ay, {from: "0x0000000000000000000000000000000000000001"});
		const uint256hPJwdhj = await CourtFarming_HTStakewJzldE8.incvRewardClaim.call({from: accounts[0]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeqmf63px = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintNWIWMKk = BigInt("0")
		const uintn1JXHIF = BigInt("1361")
		const uint256ckXUaSG = await CourtFarming_HTStakeqmf63px.stake.call(uintNWIWMKk, {from: accounts[2]});
		const uint256yHlajyY = await CourtFarming_HTStakeqmf63px.expectedRewardsToday.call(uintn1JXHIF, {from: accounts[1]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeqmf63px = await CourtFarming_HTStake.new({from: accounts[3]});
		const boolfb9jhgc = true
		const uinttpGpaR7 = BigInt("0")
		const uint256iCJk9NY = await CourtFarming_HTStakeqmf63px.unstake.call(uinttpGpaR7, boolfb9jhgc, {from: accounts[5]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeqmf63px = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintNEi59is = BigInt("0")
		const uintFx5Txra = BigInt("795")
		const uint72fDwI = BigInt("1521")
		const uintshJk9jH = BigInt("354")
		const uinteZdz0Q1 = BigInt("729")
		const boollCmgPtu = await CourtFarming_HTStakeqmf63px.stakeIncvRewards.call(uintNEi59is, {from: accounts[2]});
		const boolvMIT3r6 = await CourtFarming_HTStakeqmf63px.stakeIncvRewards.call(uintFx5Txra, {from: accounts[1]});
		await CourtFarming_HTStakeqmf63px.changeStakeParameters.call(uinteZdz0Q1, uintshJk9jH, uint72fDwI, {from: accounts[3]});

		assert.equal(boollCmgPtu, false)
		assert.equal(boolvMIT3r6, false)
		await expect(CourtFarming_HTStakeqmf63px.changeStakeParameters.call(uinteZdz0Q1, uintshJk9jH, uint72fDwI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})