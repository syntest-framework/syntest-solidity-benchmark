const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakejqML9ve = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintzSEZ2Dw = BigInt("1511")
		const addresszgdgPlI = accounts[0]
		const uint256qbPe3Z = await CourtFarming_RoomLPStakejqML9ve.stake.call(uintzSEZ2Dw, {from: accounts[4]});
		const uint256bdrLciG = await CourtFarming_RoomLPStakejqML9ve.blockNumber.call({from: accounts[4]});
		const uint256flKWCHu = await CourtFarming_RoomLPStakejqML9ve.blockNumber.call({from: accounts[3]});
		const uint256iUz55J4 = await CourtFarming_RoomLPStakejqML9ve.balanceOf.call(addresszgdgPlI, {from: accounts[3]});
		const uint256a7un9uZ = await CourtFarming_RoomLPStakejqML9ve.lastUpdateBlock.call({from: accounts[4]});

		await expect(CourtFarming_RoomLPStakejqML9ve.stake.call(uintzSEZ2Dw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeFjho1bg = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uint256eyWk9KP = await CourtFarming_RoomLPStakeFjho1bg.totalStaked.call({from: accounts[1]});
		const uint256pxCWbkU = await CourtFarming_RoomLPStakeFjho1bg.incvRewardClaim.call({from: accounts[5]});
		const uint256ppPo7Rg = await CourtFarming_RoomLPStakeFjho1bg.incvRewardClaim.call({from: accounts[3]});

		assert.equal(uint256eyWk9KP, BigInt("0"))
		assert.equal(uint256ppPo7Rg, BigInt("0"))
		assert.equal(uint256pxCWbkU, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeF75xMR2 = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintPbrPKI1 = BigInt("259")
		const uintTvEypNy = BigInt("1584")
		const addresse8siPOo = accounts[0]
		const addressHopx1r6 = accounts[1]
		const uintAMhRGvO = BigInt("1961")
		const boolSWy6sPw = await CourtFarming_RoomLPStakeF75xMR2.stakeIncvRewards.call(uintPbrPKI1, {from: accounts[3]});
		const uint256cLqkxI = await CourtFarming_RoomLPStakeF75xMR2.stake.call(uintTvEypNy, {from: accounts[2]});
		const addressbhcdNE5 = await CourtFarming_RoomLPStakeF75xMR2.setCourtStake.call(addresse8siPOo, {from: accounts[4]});
		const addressxLgHend = await CourtFarming_RoomLPStakeF75xMR2.getBeneficiaryInfo.call(addressHopx1r6, {from: accounts[1]});
		const uint256q40JOXN = await CourtFarming_RoomLPStakeF75xMR2.stake.call(uintAMhRGvO, {from: accounts[3]});

		assert.equal(boolSWy6sPw, false)
		await expect(CourtFarming_RoomLPStakeF75xMR2.stake.call(uintTvEypNy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeIRL0mG2 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const boolEzYQPvh = false
		const uintOSovH8S = BigInt("971")
		const addresslllin0V = accounts[4]
		const addressjG6hXU7 = accounts[4]
		const uint2560WHdZh = await CourtFarming_RoomLPStakeIRL0mG2.unstake.call(uintOSovH8S, boolEzYQPvh, {from: accounts[1]});
		const uint256MejNHpr = await CourtFarming_RoomLPStakeIRL0mG2.balanceOf.call(addresslllin0V, {from: "0x0000000000000000000000000000000000000001"});
		const uint256EYlpxTZ = await CourtFarming_RoomLPStakeIRL0mG2.incvRewardClaim.call({from: accounts[2]});
		const addressrsogyAI = await CourtFarming_RoomLPStakeIRL0mG2.setCourtStake.call(addressjG6hXU7, {from: accounts[4]});

		await expect(CourtFarming_RoomLPStakeIRL0mG2.unstake.call(uintOSovH8S, boolEzYQPvh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeVGEK3rF = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintfGBKbEr = BigInt("1837")
		const addressbAKWWD5 = accounts[4]
		const uint256jq4un4J = await CourtFarming_RoomLPStakeVGEK3rF.expectedRewardsToday.call(uintfGBKbEr, {from: accounts[5]});
		const uint256aIN7Fa3 = await CourtFarming_RoomLPStakeVGEK3rF.incvRewardInfo.call({from: accounts[0]});
		const addresslAjdpIy = await CourtFarming_RoomLPStakeVGEK3rF.getBeneficiaryInfo.call(addressbAKWWD5, {from: accounts[3]});
		const uint256e03vrr9 = await CourtFarming_RoomLPStakeVGEK3rF.incvRewardInfo.call({from: accounts[0]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeLriX4D9 = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressKQi7S9 = accounts[5]
		const uintX8lsagg = BigInt("379")
		const boolj7JJT8q = true
		const uintYQaNAWP = BigInt("425")
		const uint256BybJo3G = await CourtFarming_RoomLPStakeLriX4D9.blockNumber.call({from: accounts[0]});
		const uint256B1w3mGD = await CourtFarming_RoomLPStakeLriX4D9.balanceOf.call(addressKQi7S9, {from: accounts[3]});
		const uint256O2tqsKR = await CourtFarming_RoomLPStakeLriX4D9.expectedRewardsToday.call(uintX8lsagg, {from: accounts[4]});
		const uint256xxnbqGv = await CourtFarming_RoomLPStakeLriX4D9.lastUpdateBlock.call({from: accounts[2]});
		const uint256do9GHl = await CourtFarming_RoomLPStakeLriX4D9.unstake.call(uintYQaNAWP, boolj7JJT8q, {from: accounts[0]});

		assert.equal(uint256B1w3mGD, BigInt("0"))
		assert.equal(uint256BybJo3G, BigInt("1787"))
		assert.equal(uint256xxnbqGv, BigInt("1787"))
		await expect(CourtFarming_RoomLPStakeLriX4D9.unstake.call(uintYQaNAWP, boolj7JJT8q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeXQddBSx = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressutTWr7 = accounts[4]
		const addressQ7AqBQm = accounts[5]
		const addressmWftzxO = accounts[4]
		const uint256VdSS4QO = await CourtFarming_RoomLPStakeXQddBSx.incvRewardInfo.call({from: accounts[1]});
		const addressDjbIqya = await CourtFarming_RoomLPStakeXQddBSx.updateReward.call(addressutTWr7, {from: accounts[0]});
		const addressO4vUyXh = await CourtFarming_RoomLPStakeXQddBSx.setCourtStake.call(addressQ7AqBQm, {from: accounts[2]});
		const uint256zCeExjb = await CourtFarming_RoomLPStakeXQddBSx.rewards.call(addressmWftzxO, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ucHVRvX = await CourtFarming_RoomLPStakeXQddBSx.blockNumber.call({from: accounts[0]});

		await expect(CourtFarming_RoomLPStakeXQddBSx.setCourtStake.call(addressQ7AqBQm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeFjho1bg = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const uintr9EzdyR = BigInt("286")
		const uintPmoMzvl = BigInt("1336")
		const uintumasFBr = BigInt("588")
		const uint256eyWk9KP = await CourtFarming_RoomLPStakeFjho1bg.totalStaked.call({from: accounts[1]});
		await CourtFarming_RoomLPStakeFjho1bg.changeStakeParameters.call(uintumasFBr, uintPmoMzvl, uintr9EzdyR, {from: accounts[2]});
		const uint256ppPo7Rg = await CourtFarming_RoomLPStakeFjho1bg.incvRewardClaim.call({from: accounts[3]});

		assert.equal(uint256eyWk9KP, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeFjho1bg.changeStakeParameters.call(uintumasFBr, uintPmoMzvl, uintr9EzdyR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeUqWV5VD = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressnrcqQd = accounts[5]
		const addressxm3HGMp = accounts[5]
		const uintzYIoNNz = BigInt("390")
		const uint256bxnsumr = await CourtFarming_RoomLPStakeUqWV5VD.totalStaked.call({from: accounts[3]});
		const addressMczOR3J = await CourtFarming_RoomLPStakeUqWV5VD.setCourtStake.call(addressnrcqQd, {from: accounts[1]});
		const uint256xzWpXan = await CourtFarming_RoomLPStakeUqWV5VD.lastUpdateBlock.call({from: accounts[1]});
		const uint256hmgnS3F = await CourtFarming_RoomLPStakeUqWV5VD.balanceOf.call(addressxm3HGMp, {from: accounts[3]});
		const boolfTg5eXj = await CourtFarming_RoomLPStakeUqWV5VD.stakeIncvRewards.call(uintzYIoNNz, {from: accounts[2]});

		assert.equal(uint256bxnsumr, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeUqWV5VD.setCourtStake.call(addressnrcqQd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeNLoMmhj = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintQdGfGzc = BigInt("0")
		const uintz7xZTAG = BigInt("1700")
		const uintAiIdVXY = BigInt("87")
		const uint256NeebHnh = await CourtFarming_RoomLPStakeNLoMmhj.stake.call(uintQdGfGzc, {from: accounts[5]});
		const uint256L1ByhRl = await CourtFarming_RoomLPStakeNLoMmhj.stake.call(uintz7xZTAG, {from: accounts[3]});
		const uint256C0bRYcF = await CourtFarming_RoomLPStakeNLoMmhj.totalStaked.call({from: accounts[4]});
		const boolkDqoQDa = await CourtFarming_RoomLPStakeNLoMmhj.stakeIncvRewards.call(uintAiIdVXY, {from: accounts[1]});
		const uint256liPAxV6 = await CourtFarming_RoomLPStakeNLoMmhj.lastUpdateBlock.call({from: accounts[4]});

		await expect(CourtFarming_RoomLPStakeNLoMmhj.stake.call(uintz7xZTAG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeFcUTsGe = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addressiCBFcQ3 = accounts[0]
		const uintjjkcEdO = BigInt("475")
		const uint256OkDdZx = await CourtFarming_RoomLPStakeFcUTsGe.balanceOf.call(addressiCBFcQ3, {from: accounts[3]});
		const boolsrHUsL0 = await CourtFarming_RoomLPStakeFcUTsGe.stakeIncvRewards.call(uintjjkcEdO, {from: accounts[3]});
		const uint256vq1kVAG = await CourtFarming_RoomLPStakeFcUTsGe.incvRewardInfo.call({from: accounts[2]});
		const uint256wuMXWNI = await CourtFarming_RoomLPStakeFcUTsGe.getCurrentTime.call({from: accounts[0]});
		const uint256VVkDRxM = await CourtFarming_RoomLPStakeFcUTsGe.totalStaked.call({from: accounts[1]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeVGEK3rF = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintfvTaEcK = BigInt("0")
		const uintuZjnXqW = BigInt("62")
		const uintMKVSZMv = BigInt("1837")
		const uintX9aDLH = BigInt("1580")
		const boolK7CqVIb = await CourtFarming_RoomLPStakeVGEK3rF.stakeIncvRewards.call(uintfvTaEcK, {from: accounts[5]});
		const boolEyneGmG = await CourtFarming_RoomLPStakeVGEK3rF.stakeIncvRewards.call(uintuZjnXqW, {from: accounts[3]});
		const uint256jq4un4J = await CourtFarming_RoomLPStakeVGEK3rF.expectedRewardsToday.call(uintMKVSZMv, {from: accounts[5]});
		const uint256e03vrr9 = await CourtFarming_RoomLPStakeVGEK3rF.incvRewardInfo.call({from: accounts[0]});
		const uint256jr3fPFC = await CourtFarming_RoomLPStakeVGEK3rF.stake.call(uintX9aDLH, {from: accounts[0]});

		assert.equal(boolEyneGmG, false)
		assert.equal(boolK7CqVIb, false)
		await expect(CourtFarming_RoomLPStakeVGEK3rF.stake.call(uintX9aDLH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeP7dWwKQ = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintqwtKtU3 = BigInt("964")
		const boolEExDAFa = true
		const uintgj7GNI5 = BigInt("0")
		const boolu2UamVy = await CourtFarming_RoomLPStakeP7dWwKQ.stakeIncvRewards.call(uintqwtKtU3, {from: accounts[4]});
		const uint256VidvKQh = await CourtFarming_RoomLPStakeP7dWwKQ.unstake.call(uintgj7GNI5, boolEExDAFa, {from: accounts[5]});

		assert.equal(boolu2UamVy, false)
	});
})