const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeH9LjvlN = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressd3ed9Hd = "0x0000000000000000000000000000000000000001"
		const uint256wB8hgph = await CourtFarming_RoomLPStakeH9LjvlN.getCurrentTime.call({from: accounts[1]});
		const addresshsQgY1s = await CourtFarming_RoomLPStakeH9LjvlN.getBeneficiaryInfo.call(addressd3ed9Hd, {from: accounts[2]});

		assert.equal(uint256wB8hgph, BigInt("1630199762"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakejvQa2HM = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintIqSiWOA = BigInt("671")
		const uintedBeQ8b = BigInt("720")
		const uintoyVBpKn = BigInt("393")
		const uintfLBvKZw = BigInt("878")
		const addresspYwa962 = accounts[1]
		const uint256BLCO3I = await CourtFarming_RoomLPStakejvQa2HM.incvRewardClaim.call({from: accounts[4]});
		const uint256vMEmptA = await CourtFarming_RoomLPStakejvQa2HM.totalStaked.call({from: accounts[3]});
		await CourtFarming_RoomLPStakejvQa2HM.changeStakeParameters.call(uintoyVBpKn, uintedBeQ8b, uintIqSiWOA, {from: accounts[0]});
		const booloV8EZOK = await CourtFarming_RoomLPStakejvQa2HM.stakeIncvRewards.call(uintfLBvKZw, {from: accounts[2]});
		const uint256V2Xeqga = await CourtFarming_RoomLPStakejvQa2HM.getCurrentTime.call({from: accounts[4]});
		const addressHADcczu = await CourtFarming_RoomLPStakejvQa2HM.setCourtStake.call(addresspYwa962, {from: accounts[3]});

		assert.equal(uint256BLCO3I, BigInt("0"))
		assert.equal(uint256vMEmptA, BigInt("0"))
		await expect(CourtFarming_RoomLPStakejvQa2HM.changeStakeParameters.call(uintoyVBpKn, uintedBeQ8b, uintIqSiWOA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakef2t8Sqz = await CourtFarming_RoomLPStake.new({from: accounts[1]});
		const addressmPFHENZ = accounts[2]
		const addressWdc53Pb = accounts[1]
		const addresszdIk13D = await CourtFarming_RoomLPStakef2t8Sqz.updateReward.call(addressmPFHENZ, {from: accounts[2]});
		const uint256ozTUrq = await CourtFarming_RoomLPStakef2t8Sqz.balanceOf.call(addressWdc53Pb, {from: "0x0000000000000000000000000000000000000001"});
		const uint256XASTqQ4 = await CourtFarming_RoomLPStakef2t8Sqz.incvRewardInfo.call({from: accounts[0]});
		const uint256XF6KGgx = await CourtFarming_RoomLPStakef2t8Sqz.getCurrentTime.call({from: accounts[1]});

		assert.equal(uint256XF6KGgx, BigInt("1630199775"))
		assert.equal(uint256ozTUrq, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeYZ11vO3 = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintJU2NYDZ = BigInt("656")
		const addressEk3DQt = accounts[4]
		const addressUMTcWiT = accounts[0]
		const uint256ZlagGwz = await CourtFarming_RoomLPStakeYZ11vO3.incvRewardInfo.call({from: accounts[1]});
		const uint256OcGsCd1 = await CourtFarming_RoomLPStakeYZ11vO3.expectedRewardsToday.call(uintJU2NYDZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kZ9AcBV = await CourtFarming_RoomLPStakeYZ11vO3.incvRewardInfo.call({from: accounts[4]});
		const uint256v1eAvNj = await CourtFarming_RoomLPStakeYZ11vO3.rewards.call(addressEk3DQt, {from: accounts[4]});
		const uint256vc1KKGF = await CourtFarming_RoomLPStakeYZ11vO3.balanceOf.call(addressUMTcWiT, {from: accounts[5]});

		assert.equal(uint256vc1KKGF, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakelZ8oGpf = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressWKuVjpo = accounts[3]
		const uint7htcNB = BigInt("1380")
		const uintqrbGkvV = BigInt("1949")
		const uintLmfFY5G = BigInt("1612")
		const uint256j3eaiuO = await CourtFarming_RoomLPStakelZ8oGpf.balanceOf.call(addressWKuVjpo, {from: accounts[1]});
		await CourtFarming_RoomLPStakelZ8oGpf.changeStakeParameters.call(uintLmfFY5G, uintqrbGkvV, uint7htcNB, {from: accounts[4]});

		assert.equal(uint256j3eaiuO, BigInt("0"))
		await expect(CourtFarming_RoomLPStakelZ8oGpf.changeStakeParameters.call(uintLmfFY5G, uintqrbGkvV, uint7htcNB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakecStr7cr = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const addressbPLNEaA = accounts[4]
		const uintva1QGJ7 = BigInt("109")
		const addressYAtmvVq = accounts[3]
		const uintdT3kvPn = BigInt("173")
		const addressiLGUvrz = await CourtFarming_RoomLPStakecStr7cr.updateReward.call(addressbPLNEaA, {from: accounts[4]});
		const uint256XrEFq7p = await CourtFarming_RoomLPStakecStr7cr.getCurrentTime.call({from: accounts[5]});
		const boolSzRhAWU = await CourtFarming_RoomLPStakecStr7cr.stakeIncvRewards.call(uintva1QGJ7, {from: "0x0000000000000000000000000000000000000001"});
		const addressXAbJOVV = await CourtFarming_RoomLPStakecStr7cr.updateReward.call(addressYAtmvVq, {from: accounts[3]});
		const uint2561LIDaQ = await CourtFarming_RoomLPStakecStr7cr.stake.call(uintdT3kvPn, {from: accounts[2]});

		assert.equal(boolSzRhAWU, false)
		assert.equal(uint256XrEFq7p, BigInt("1630199773"))
		await expect(CourtFarming_RoomLPStakecStr7cr.stake.call(uintdT3kvPn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeH9LjvlN = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const addressE9bxned = "0x0000000000000000000000000000000000000001"
		const uint256wB8hgph = await CourtFarming_RoomLPStakeH9LjvlN.getCurrentTime.call({from: accounts[1]});
		const uint256NqVpNlk = await CourtFarming_RoomLPStakeH9LjvlN.lastUpdateBlock.call({from: accounts[4]});
		const uint256IoWMhIW = await CourtFarming_RoomLPStakeH9LjvlN.incvRewardInfo.call({from: accounts[3]});
		const addresshsQgY1s = await CourtFarming_RoomLPStakeH9LjvlN.getBeneficiaryInfo.call(addressE9bxned, {from: accounts[2]});

		assert.equal(uint256NqVpNlk, BigInt("1264"))
		assert.equal(uint256wB8hgph, BigInt("1630199771"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeCtvbevr = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const boolhxh0B2 = false
		const uintGQsHt3s = BigInt("606")
		const boolHtO8Rp = false
		const uintDmz7JoU = BigInt("1306")
		const uint256lIoaNk2 = await CourtFarming_RoomLPStakeCtvbevr.unstake.call(uintGQsHt3s, boolhxh0B2, {from: accounts[0]});
		const uint256BMAie6z = await CourtFarming_RoomLPStakeCtvbevr.unstake.call(uintDmz7JoU, boolHtO8Rp, {from: accounts[4]});
		const uint256IHaduvk = await CourtFarming_RoomLPStakeCtvbevr.totalStaked.call({from: accounts[0]});

		await expect(CourtFarming_RoomLPStakeCtvbevr.unstake.call(uintGQsHt3s, boolhxh0B2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStake2bQBa7 = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJqGlmU = BigInt("1231")
		const addressxhG675I = accounts[2]
		const boolOkACEse = true
		const uint1Q3C98 = BigInt("457")
		const uint256l09KZUb = await CourtFarming_RoomLPStake2bQBa7.stake.call(uintJqGlmU, {from: "0x0000000000000000000000000000000000000001"});
		const addressZp9Iq1K = await CourtFarming_RoomLPStake2bQBa7.updateReward.call(addressxhG675I, {from: accounts[4]});
		const uint256bEwpDnP = await CourtFarming_RoomLPStake2bQBa7.unstake.call(uint1Q3C98, boolOkACEse, {from: accounts[4]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakefPi1Xte = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addressz7MvyiJ = "0x0000000000000000000000000000000000000001"
		const uintsBpJkuP = BigInt("88")
		const addressMCtjRei = accounts[4]
		const addresswF56FzV = accounts[0]
		const uintocRvUI = BigInt("248")
		const addressBeURVbA = await CourtFarming_RoomLPStakefPi1Xte.setCourtStake.call(addressz7MvyiJ, {from: accounts[2]});
		const uint256mRn3i4m = await CourtFarming_RoomLPStakefPi1Xte.incvRewardClaim.call({from: accounts[5]});
		const boolsTeWjz = await CourtFarming_RoomLPStakefPi1Xte.stakeIncvRewards.call(uintsBpJkuP, {from: accounts[0]});
		const addressrT2Iw2B = await CourtFarming_RoomLPStakefPi1Xte.updateReward.call(addressMCtjRei, {from: accounts[2]});
		const uint256i4TTt0V = await CourtFarming_RoomLPStakefPi1Xte.balanceOf.call(addresswF56FzV, {from: accounts[2]});
		const boolua8q1SI = await CourtFarming_RoomLPStakefPi1Xte.stakeIncvRewards.call(uintocRvUI, {from: accounts[4]});

		await expect(CourtFarming_RoomLPStakefPi1Xte.setCourtStake.call(addressz7MvyiJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakefPi1Xte = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintyMnI6Az = BigInt("0")
		const addressKyB6hgV = accounts[5]
		const uint256RI0LsZN = await CourtFarming_RoomLPStakefPi1Xte.stake.call(uintyMnI6Az, {from: accounts[3]});
		const addressrT2Iw2B = await CourtFarming_RoomLPStakefPi1Xte.updateReward.call(addressKyB6hgV, {from: accounts[2]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeH9LjvlN = await CourtFarming_RoomLPStake.new({from: accounts[4]});
		const boolamENY4Q = true
		const uintFOJAV0P = BigInt("0")
		const uint256AKV77qz = await CourtFarming_RoomLPStakeH9LjvlN.unstake.call(uintFOJAV0P, boolamENY4Q, {from: accounts[0]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakefPi1Xte = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const addresssP9TSg = accounts[0]
		const uintfmi0geA = BigInt("1837")
		const uintyqUTzNW = BigInt("0")
		const uint256GBh7Jp = await CourtFarming_RoomLPStakefPi1Xte.balanceOf.call(addresssP9TSg, {from: accounts[2]});
		const boolC99uzz = await CourtFarming_RoomLPStakefPi1Xte.stakeIncvRewards.call(uintfmi0geA, {from: accounts[1]});
		const booltN7XW7r = await CourtFarming_RoomLPStakefPi1Xte.stakeIncvRewards.call(uintyqUTzNW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolC99uzz, false)
		assert.equal(booltN7XW7r, false)
		assert.equal(uint256GBh7Jp, BigInt("0"))
	});
})