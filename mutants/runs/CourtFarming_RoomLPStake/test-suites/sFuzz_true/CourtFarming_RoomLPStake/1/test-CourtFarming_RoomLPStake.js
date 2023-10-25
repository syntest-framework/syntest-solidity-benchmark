const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStaketMXA1un = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintXrchgWK = BigInt("266")
		const addresseMJmKXs = accounts[3]
		const boolYMPnK9l = await CourtFarming_RoomLPStaketMXA1un.stakeIncvRewards.call(uintXrchgWK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gJynguA = await CourtFarming_RoomLPStaketMXA1un.getCurrentTime.call({from: accounts[4]});
		const uint256knRfQjg = await CourtFarming_RoomLPStaketMXA1un.rewards.call(addresseMJmKXs, {from: accounts[0]});
		const uint256dVrOQmW = await CourtFarming_RoomLPStaketMXA1un.incvRewardInfo.call({from: accounts[1]});

		assert.equal(boolYMPnK9l, false)
		assert.equal(uint256gJynguA, BigInt("1630199874"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeWzX4kf5 = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uinteEAW2Td = BigInt("50")
		const addressNFxbYJM = accounts[1]
		const addressGNToEUx = accounts[3]
		const uint256TSi2tJ = await CourtFarming_RoomLPStakeWzX4kf5.expectedRewardsToday.call(uinteEAW2Td, {from: accounts[0]});
		const addresspPgOyP = await CourtFarming_RoomLPStakeWzX4kf5.setCourtStake.call(addressNFxbYJM, {from: accounts[5]});
		const uint256nG2iZzA = await CourtFarming_RoomLPStakeWzX4kf5.rewards.call(addressGNToEUx, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_RoomLPStakeWzX4kf5.setCourtStake.call(addressNFxbYJM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeek934Po = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintqxA0DlH = BigInt("1918")
		const boolnw9Sk1W = true
		const uintV49bSyP = BigInt("1222")
		const boolFPLoJze = await CourtFarming_RoomLPStakeek934Po.stakeIncvRewards.call(uintqxA0DlH, {from: accounts[2]});
		const uint256wAVkNYr = await CourtFarming_RoomLPStakeek934Po.unstake.call(uintV49bSyP, boolnw9Sk1W, {from: "0x0000000000000000000000000000000000000001"});
		const uint256afJtiPg = await CourtFarming_RoomLPStakeek934Po.blockNumber.call({from: accounts[2]});
		const uint256tV5T4VF = await CourtFarming_RoomLPStakeek934Po.blockNumber.call({from: accounts[1]});

		assert.equal(boolFPLoJze, false)
		await expect(CourtFarming_RoomLPStakeek934Po.unstake.call(uintV49bSyP, boolnw9Sk1W, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStake9pVEh3 = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressdrRQvrw = accounts[1]
		const addressvjCq0EF = accounts[5]
		const uint256FWOPrbo = await CourtFarming_RoomLPStake9pVEh3.getCurrentTime.call({from: accounts[1]});
		const addressy0ZQdLj = await CourtFarming_RoomLPStake9pVEh3.setCourtStake.call(addressdrRQvrw, {from: accounts[5]});
		const uint256CW42ld = await CourtFarming_RoomLPStake9pVEh3.rewards.call(addressvjCq0EF, {from: accounts[5]});

		assert.equal(uint256FWOPrbo, BigInt("1630199876"))
		await expect(CourtFarming_RoomLPStake9pVEh3.setCourtStake.call(addressdrRQvrw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakefJUx9M4 = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const uintyp2ijEc = BigInt("630")
		const uintJtcYjK9 = BigInt("1631")
		const uintxd14alZ = BigInt("1188")
		const addressjvbnzYR = accounts[0]
		await CourtFarming_RoomLPStakefJUx9M4.changeStakeParameters.call(uintxd14alZ, uintJtcYjK9, uintyp2ijEc, {from: accounts[1]});
		const uint256MzumcYG = await CourtFarming_RoomLPStakefJUx9M4.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256PH2KVGa = await CourtFarming_RoomLPStakefJUx9M4.getCurrentTime.call({from: accounts[2]});
		const addressmE4IXfW = await CourtFarming_RoomLPStakefJUx9M4.updateReward.call(addressjvbnzYR, {from: accounts[0]});

		await expect(CourtFarming_RoomLPStakefJUx9M4.changeStakeParameters.call(uintxd14alZ, uintJtcYjK9, uintyp2ijEc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeiGGBv6 = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uint256XGA7dBl = await CourtFarming_RoomLPStakeiGGBv6.incvRewardInfo.call({from: accounts[3]});
		const uint256bIOD3p8 = await CourtFarming_RoomLPStakeiGGBv6.incvRewardClaim.call({from: accounts[2]});

		assert.equal(uint256bIOD3p8, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeLh4eUW = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressLzCcykp = accounts[1]
		const addressbXFpsC8 = accounts[2]
		const addressaGFmEeZ = accounts[1]
		const uint256i8NRi68 = await CourtFarming_RoomLPStakeLh4eUW.rewards.call(addressLzCcykp, {from: accounts[2]});
		const addressH2jOhTi = await CourtFarming_RoomLPStakeLh4eUW.getBeneficiaryInfo.call(addressbXFpsC8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Vfbvbc0 = await CourtFarming_RoomLPStakeLh4eUW.incvRewardClaim.call({from: accounts[1]});
		const uint256ndY00TO = await CourtFarming_RoomLPStakeLh4eUW.incvRewardClaim.call({from: accounts[4]});
		const uint256UNEfPP = await CourtFarming_RoomLPStakeLh4eUW.balanceOf.call(addressaGFmEeZ, {from: accounts[5]});
		const uint256KARFda = await CourtFarming_RoomLPStakeLh4eUW.lastUpdateBlock.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256KARFda, BigInt("1249"))
		assert.equal(uint256UNEfPP, BigInt("0"))
		assert.equal(uint256Vfbvbc0, BigInt("0"))
		assert.equal(uint256ndY00TO, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeek934Po = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const uintLVx87F6 = BigInt("1918")
		const boolnw9Sk1W = true
		const uintToFdbQy = BigInt("1222")
		const addressZIY1wYv = accounts[1]
		const uint256D2YZXH = await CourtFarming_RoomLPStakeek934Po.totalStaked.call({from: accounts[4]});
		const boolFPLoJze = await CourtFarming_RoomLPStakeek934Po.stakeIncvRewards.call(uintLVx87F6, {from: accounts[2]});
		const uint256wAVkNYr = await CourtFarming_RoomLPStakeek934Po.unstake.call(uintToFdbQy, boolnw9Sk1W, {from: "0x0000000000000000000000000000000000000001"});
		const uint256byO6NmE = await CourtFarming_RoomLPStakeek934Po.balanceOf.call(addressZIY1wYv, {from: accounts[3]});
		const uint256afJtiPg = await CourtFarming_RoomLPStakeek934Po.blockNumber.call({from: accounts[2]});
		const uint256tV5T4VF = await CourtFarming_RoomLPStakeek934Po.blockNumber.call({from: accounts[1]});

		assert.equal(boolFPLoJze, false)
		assert.equal(uint256D2YZXH, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeek934Po.unstake.call(uintToFdbQy, boolnw9Sk1W, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeiGGBv6 = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressPZXyrrg = accounts[2]
		const uintaenT0SD = BigInt("558")
		const uint256XGA7dBl = await CourtFarming_RoomLPStakeiGGBv6.incvRewardInfo.call({from: accounts[3]});
		const addressHpiJWqI = await CourtFarming_RoomLPStakeiGGBv6.updateReward.call(addressPZXyrrg, {from: accounts[0]});
		const uint256bIOD3p8 = await CourtFarming_RoomLPStakeiGGBv6.incvRewardClaim.call({from: accounts[2]});
		const uint256ODdYSx = await CourtFarming_RoomLPStakeiGGBv6.stake.call(uintaenT0SD, {from: accounts[3]});

		assert.equal(uint256bIOD3p8, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeiGGBv6.stake.call(uintaenT0SD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStaketMXA1un = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const address5noeuR = accounts[2]
		const uintlOeyna2 = BigInt("212")
		const uintSQ5qGQs = BigInt("777")
		const uintrU5DQf = BigInt("1132")
		const uintkiNlH6Z = BigInt("1046")
		const addresservsUqI = accounts[0]
		const addressfGtJDca = accounts[3]
		const uint256lXTwAWA = await CourtFarming_RoomLPStaketMXA1un.balanceOf.call(address5noeuR, {from: accounts[0]});
		const boolYMPnK9l = await CourtFarming_RoomLPStaketMXA1un.stakeIncvRewards.call(uintlOeyna2, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bfgiXFZ = await CourtFarming_RoomLPStaketMXA1un.lastUpdateBlock.call({from: accounts[0]});
		await CourtFarming_RoomLPStaketMXA1un.changeStakeParameters.call(uintkiNlH6Z, uintrU5DQf, uintSQ5qGQs, {from: accounts[0]});
		const uint256tUh1lVO = await CourtFarming_RoomLPStaketMXA1un.balanceOf.call(addresservsUqI, {from: accounts[4]});
		const uint256knRfQjg = await CourtFarming_RoomLPStaketMXA1un.rewards.call(addressfGtJDca, {from: accounts[0]});

		assert.equal(boolYMPnK9l, false)
		assert.equal(uint256bfgiXFZ, BigInt("1249"))
		assert.equal(uint256lXTwAWA, BigInt("0"))
		await expect(CourtFarming_RoomLPStaketMXA1un.changeStakeParameters.call(uintkiNlH6Z, uintrU5DQf, uintSQ5qGQs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeaZwHwR = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const booluXZ31gT = false
		const uintzQ5pRWa = BigInt("648")
		const uintaPXr4T = BigInt("443")
		const uinteHYFLv = BigInt("1502")
		const uintGKkEUC3 = BigInt("750")
		const boolrtRwJBW = true
		const uintUKpQdCu = BigInt("1373")
		const addressQqkZcf3 = accounts[2]
		const uint256fVoTNfQ = await CourtFarming_RoomLPStakeaZwHwR.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256lTFSG7s = await CourtFarming_RoomLPStakeaZwHwR.unstake.call(uintzQ5pRWa, booluXZ31gT, {from: accounts[2]});
		await CourtFarming_RoomLPStakeaZwHwR.changeStakeParameters.call(uintGKkEUC3, uinteHYFLv, uintaPXr4T, {from: accounts[2]});
		const uint256xOxXoDw = await CourtFarming_RoomLPStakeaZwHwR.unstake.call(uintUKpQdCu, boolrtRwJBW, {from: accounts[3]});
		const addresshY0Tiid = await CourtFarming_RoomLPStakeaZwHwR.getBeneficiaryInfo.call(addressQqkZcf3, {from: accounts[3]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStaketMXA1un = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintcxjFua = BigInt("0")
		const uintIVI7rQ9 = BigInt("1238")
		const uint256ijPc9O5 = await CourtFarming_RoomLPStaketMXA1un.totalStaked.call({from: accounts[1]});
		const boolYMPnK9l = await CourtFarming_RoomLPStaketMXA1un.stakeIncvRewards.call(uintcxjFua, {from: "0x0000000000000000000000000000000000000001"});
		const boolZpvN9my = await CourtFarming_RoomLPStaketMXA1un.stakeIncvRewards.call(uintIVI7rQ9, {from: accounts[3]});

		assert.equal(boolYMPnK9l, false)
		assert.equal(boolZpvN9my, false)
		assert.equal(uint256ijPc9O5, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStaketMXA1un = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const boolFeI8KQg = true
		const uintGgE7KIw = BigInt("0")
		const uint256B11dE6T = await CourtFarming_RoomLPStaketMXA1un.unstake.call(uintGgE7KIw, boolFeI8KQg, {from: accounts[3]});
	});
})