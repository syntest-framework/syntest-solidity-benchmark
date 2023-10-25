const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakefPHKqBP = await CourtFarming_HTStake.new({from: accounts[5]});
		const boolJdlTd4M = true
		const uintNFu1uYZ = BigInt("1881")
		const uint256M4HGiqJ = await CourtFarming_HTStakefPHKqBP.unstake.call(uintNFu1uYZ, boolJdlTd4M, {from: accounts[0]});
		const uint256jFTqlY = await CourtFarming_HTStakefPHKqBP.totalStaked.call({from: accounts[1]});
		const uint256AFGPA00 = await CourtFarming_HTStakefPHKqBP.incvRewardInfo.call({from: accounts[4]});

		await expect(CourtFarming_HTStakefPHKqBP.unstake.call(uintNFu1uYZ, boolJdlTd4M, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeGgJguYv = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintqIgVWlr = BigInt("1201")
		const uinttJVWig7 = BigInt("1667")
		const addressZYfnuo4 = accounts[2]
		const boolVylmd4K = false
		const uintYIBeWi = BigInt("1251")
		const addressd6caLVD = accounts[2]
		const uint256XekN9f = await CourtFarming_HTStakeGgJguYv.expectedRewardsToday.call(uintqIgVWlr, {from: accounts[4]});
		const uint256HESuFwC = await CourtFarming_HTStakeGgJguYv.expectedRewardsToday.call(uinttJVWig7, {from: accounts[2]});
		const uint256ui1WRRA = await CourtFarming_HTStakeGgJguYv.balanceOf.call(addressZYfnuo4, {from: accounts[1]});
		const uint256goauRlW = await CourtFarming_HTStakeGgJguYv.unstake.call(uintYIBeWi, boolVylmd4K, {from: accounts[0]});
		const addressI06lPWW = await CourtFarming_HTStakeGgJguYv.updateReward.call(addressd6caLVD, {from: accounts[0]});

		assert.equal(uint256ui1WRRA, BigInt("0"))
		await expect(CourtFarming_HTStakeGgJguYv.unstake.call(uintYIBeWi, boolVylmd4K, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakejZSdLa = await CourtFarming_HTStake.new({from: accounts[4]});
		const uint256oYb36I7 = await CourtFarming_HTStakejZSdLa.getCurrentTime.call({from: accounts[2]});
		const uint256ZDwf76d = await CourtFarming_HTStakejZSdLa.totalStaked.call({from: accounts[1]});

		assert.equal(uint256ZDwf76d, BigInt("0"))
		assert.equal(uint256oYb36I7, BigInt("1630201050"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStake4rR9BV = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintG3i9Ott = BigInt("49")
		const addressiGls5wp = "0x0000000000000000000000000000000000000001"
		const uint256PfDPT2L = await CourtFarming_HTStake4rR9BV.stake.call(uintG3i9Ott, {from: accounts[4]});
		const addressfMfiVqP = await CourtFarming_HTStake4rR9BV.setCourtStake.call(addressiGls5wp, {from: accounts[1]});

		await expect(CourtFarming_HTStake4rR9BV.stake.call(uintG3i9Ott, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakemCONEA5 = await CourtFarming_HTStake.new({from: accounts[5]});
		const addresszSh7Dts = accounts[1]
		const addresswlZ1CeB = accounts[5]
		const addressnlCmIG3 = accounts[4]
		const uint256YldnIR3 = await CourtFarming_HTStakemCONEA5.incvRewardInfo.call({from: accounts[3]});
		const addressEyEc9J = await CourtFarming_HTStakemCONEA5.updateReward.call(addresszSh7Dts, {from: accounts[0]});
		const uint256GYT7KD2 = await CourtFarming_HTStakemCONEA5.balanceOf.call(addresswlZ1CeB, {from: accounts[0]});
		const uint256KDlbDfQ = await CourtFarming_HTStakemCONEA5.totalStaked.call({from: accounts[1]});
		const addressDk2c1cI = await CourtFarming_HTStakemCONEA5.setCourtStake.call(addressnlCmIG3, {from: accounts[2]});

		assert.equal(uint256GYT7KD2, BigInt("0"))
		assert.equal(uint256KDlbDfQ, BigInt("0"))
		await expect(CourtFarming_HTStakemCONEA5.setCourtStake.call(addressnlCmIG3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakewrNkRRH = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressdToRjHe = accounts[2]
		const uint256E9HWqzn = await CourtFarming_HTStakewrNkRRH.incvRewardInfo.call({from: accounts[3]});
		const uint256eaZvZ6n = await CourtFarming_HTStakewrNkRRH.getCurrentTime.call({from: accounts[4]});
		const uint256W1CXQXb = await CourtFarming_HTStakewrNkRRH.rewards.call(addressdToRjHe, {from: accounts[4]});

		assert.equal(uint256eaZvZ6n, BigInt("1630201046"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeORXxCS5 = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressmHVJV8v = accounts[0]
		const uintenCD1s = BigInt("973")
		const uintBQUWlwO = BigInt("62")
		const uintRsJM3M = BigInt("996")
		const uint256FnyAaUu = await CourtFarming_HTStakeORXxCS5.totalStaked.call({from: accounts[4]});
		const uint256iQb7L2P = await CourtFarming_HTStakeORXxCS5.balanceOf.call(addressmHVJV8v, {from: accounts[5]});
		const uint256qIjx8eT = await CourtFarming_HTStakeORXxCS5.lastUpdateBlock.call({from: accounts[1]});
		const uint256n5Kt1tE = await CourtFarming_HTStakeORXxCS5._stakeParametrsCalculation.call(uintRsJM3M, uintBQUWlwO, uintenCD1s, {from: accounts[5]});

		assert.equal(uint256FnyAaUu, BigInt("0"))
		assert.equal(uint256iQb7L2P, BigInt("0"))
		assert.equal(uint256qIjx8eT, BigInt("1657"))
		await expect(CourtFarming_HTStakeORXxCS5._stakeParametrsCalculation.call(uintRsJM3M, uintBQUWlwO, uintenCD1s, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakejZSdLa = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintIAUtte = BigInt("1903")
		const uintUbb2EuU = BigInt("504")
		const uintpKaktz = BigInt("1734")
		const uintULqSPU = BigInt("1367")
		const uint256oYb36I7 = await CourtFarming_HTStakejZSdLa.getCurrentTime.call({from: accounts[2]});
		const uint256ZDwf76d = await CourtFarming_HTStakejZSdLa.totalStaked.call({from: accounts[1]});
		await CourtFarming_HTStakejZSdLa.changeStakeParameters.call(uintpKaktz, uintUbb2EuU, uintIAUtte, {from: accounts[5]});
		const uint256501JIf = await CourtFarming_HTStakejZSdLa.stake.call(uintULqSPU, {from: accounts[4]});

		assert.equal(uint256ZDwf76d, BigInt("0"))
		assert.equal(uint256oYb36I7, BigInt("1630201045"))
		await expect(CourtFarming_HTStakejZSdLa.changeStakeParameters.call(uintpKaktz, uintUbb2EuU, uintIAUtte, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakejZSdLa = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressxeNbzPM = accounts[2]
		const addressaqep5B4 = await CourtFarming_HTStakejZSdLa.setCourtStake.call(addressxeNbzPM, {from: accounts[4]});
		const uint256oYb36I7 = await CourtFarming_HTStakejZSdLa.getCurrentTime.call({from: accounts[2]});

		await expect(CourtFarming_HTStakejZSdLa.setCourtStake.call(addressxeNbzPM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakesZDKdna = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressNkGo6lL = accounts[5]
		const uintIKGr51q = BigInt("703")
		const uintWRl6uXE = BigInt("1234")
		const uintxsJvJiM = BigInt("1886")
		const uint256omkB33G = await CourtFarming_HTStakesZDKdna.incvRewardClaim.call({from: accounts[0]});
		const uint256xCDqEol = await CourtFarming_HTStakesZDKdna.blockNumber.call({from: accounts[3]});
		const addressisRqbWa = await CourtFarming_HTStakesZDKdna.updateReward.call(addressNkGo6lL, {from: accounts[4]});
		await CourtFarming_HTStakesZDKdna.changeStakeParameters.call(uintxsJvJiM, uintWRl6uXE, uintIKGr51q, {from: accounts[3]});
		const uint256lQ1X5k = await CourtFarming_HTStakesZDKdna.blockNumber.call({from: accounts[2]});
		const uint256TzUBLYU = await CourtFarming_HTStakesZDKdna.getCurrentTime.call({from: accounts[1]});

		assert.equal(uint256omkB33G, BigInt("0"))
		assert.equal(uint256xCDqEol, BigInt("1657"))
		await expect(CourtFarming_HTStakesZDKdna.changeStakeParameters.call(uintxsJvJiM, uintWRl6uXE, uintIKGr51q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakenkbUCQB = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressSaRy6Ic = accounts[0]
		const boolc4BJJXs = true
		const uints5ApoY = BigInt("231")
		const addressEC9OERd = await CourtFarming_HTStakenkbUCQB.getBeneficiaryInfo.call(addressSaRy6Ic, {from: accounts[0]});
		const uint256JShbvkh = await CourtFarming_HTStakenkbUCQB.unstake.call(uints5ApoY, boolc4BJJXs, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakenkbUCQB.unstake.call(uints5ApoY, boolc4BJJXs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeTnzHufS = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintsMYRHsg = BigInt("2036")
		const boolD2ijaz = true
		const uinttr3OiQd = BigInt("1035")
		const uint256STJbxVd = await CourtFarming_HTStakeTnzHufS.expectedRewardsToday.call(uintsMYRHsg, {from: accounts[3]});
		const uint256EP62ON8 = await CourtFarming_HTStakeTnzHufS.incvRewardClaim.call({from: accounts[1]});
		const uint256e7bG0Ih = await CourtFarming_HTStakeTnzHufS.incvRewardInfo.call({from: accounts[2]});
		const uint256b5gV5pD = await CourtFarming_HTStakeTnzHufS.unstake.call(uinttr3OiQd, boolD2ijaz, {from: accounts[4]});
		const uint256zDfqwZ = await CourtFarming_HTStakeTnzHufS.blockNumber.call({from: accounts[1]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakesZDKdna = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintL0Lxt7L = BigInt("1702")
		const addressfgve7X7 = accounts[5]
		const uinto2veqTu = BigInt("703")
		const uintoz0gTch = BigInt("1234")
		const uintIaRaNJo = BigInt("1886")
		const booltYcPra = await CourtFarming_HTStakesZDKdna.stakeIncvRewards.call(uintL0Lxt7L, {from: accounts[3]});
		const uint256omkB33G = await CourtFarming_HTStakesZDKdna.incvRewardClaim.call({from: accounts[0]});
		const uint256xCDqEol = await CourtFarming_HTStakesZDKdna.blockNumber.call({from: accounts[3]});
		const addressisRqbWa = await CourtFarming_HTStakesZDKdna.updateReward.call(addressfgve7X7, {from: accounts[4]});
		await CourtFarming_HTStakesZDKdna.changeStakeParameters.call(uintIaRaNJo, uintoz0gTch, uinto2veqTu, {from: accounts[3]});
		const uint256lQ1X5k = await CourtFarming_HTStakesZDKdna.blockNumber.call({from: accounts[2]});
		const uint256hLo3Hyp = await CourtFarming_HTStakesZDKdna.incvRewardClaim.call({from: accounts[3]});
		const uint256TzUBLYU = await CourtFarming_HTStakesZDKdna.getCurrentTime.call({from: accounts[1]});

		assert.equal(booltYcPra, false)
		assert.equal(uint256omkB33G, BigInt("0"))
		assert.equal(uint256xCDqEol, BigInt("1657"))
		await expect(CourtFarming_HTStakesZDKdna.changeStakeParameters.call(uintIaRaNJo, uintoz0gTch, uinto2veqTu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStake4rR9BV = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintSQE3yTO = BigInt("0")
		const addressF0RSMv5 = accounts[4]
		const uintOQJLysR = BigInt("654")
		const uintzVGxHK = BigInt("301")
		const uintLjSpMfE = BigInt("498")
		const uintqIpBXzf = BigInt("1327")
		const uint256PfDPT2L = await CourtFarming_HTStake4rR9BV.stake.call(uintSQE3yTO, {from: accounts[4]});
		const uint256GaHuV75 = await CourtFarming_HTStake4rR9BV.balanceOf.call(addressF0RSMv5, {from: accounts[5]});
		const uint256pfHLHzW = await CourtFarming_HTStake4rR9BV._stakeParametrsCalculation.call(uintLjSpMfE, uintzVGxHK, uintOQJLysR, {from: accounts[4]});
		const uint256sAEXSlm = await CourtFarming_HTStake4rR9BV.expectedRewardsToday.call(uintqIpBXzf, {from: accounts[4]});

		assert.equal(uint256GaHuV75, BigInt("0"))
		await expect(CourtFarming_HTStake4rR9BV._stakeParametrsCalculation.call(uintLjSpMfE, uintzVGxHK, uintOQJLysR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakewrNkRRH = await CourtFarming_HTStake.new({from: accounts[2]});
		const uinteg6GiQV = BigInt("1339")
		const uintgFZ187 = BigInt("1539")
		const uintSy2Y0x = BigInt("1211")
		const uint3GV2Eo = BigInt("736")
		const uintW1tefEv = BigInt("757")
		const uintX8PtHLL = BigInt("465")
		const uint256E9HWqzn = await CourtFarming_HTStakewrNkRRH.incvRewardInfo.call({from: accounts[3]});
		await CourtFarming_HTStakewrNkRRH.changeStakeParameters.call(uintSy2Y0x, uintgFZ187, uinteg6GiQV, {from: accounts[2]});
		const uint256ewPA7a6 = await CourtFarming_HTStakewrNkRRH._stakeParametrsCalculation.call(uintX8PtHLL, uintW1tefEv, uint3GV2Eo, {from: accounts[2]});
		const uint256cpNgTO = await CourtFarming_HTStakewrNkRRH.incvRewardInfo.call({from: accounts[1]});

		await expect(CourtFarming_HTStakewrNkRRH.changeStakeParameters.call(uintSy2Y0x, uintgFZ187, uinteg6GiQV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXsqqZPP = await CourtFarming_HTStake.new({from: accounts[0]});
		const boolECuC2rP = true
		const uintKeyD4j5 = BigInt("0")
		const uint256USU1eEU = await CourtFarming_HTStakeXsqqZPP.lastUpdateBlock.call({from: accounts[2]});
		const uint256kFZIQSH = await CourtFarming_HTStakeXsqqZPP.unstake.call(uintKeyD4j5, boolECuC2rP, {from: accounts[5]});
		const uint256HTSvJUP = await CourtFarming_HTStakeXsqqZPP.lastUpdateBlock.call({from: accounts[2]});
		const uint256K2Z1k2f = await CourtFarming_HTStakeXsqqZPP.incvRewardClaim.call({from: accounts[0]});
		const uint256Djgd0C = await CourtFarming_HTStakeXsqqZPP.lastUpdateBlock.call({from: accounts[3]});

		assert.equal(uint256Djgd0C, BigInt("1657"))
		assert.equal(uint256HTSvJUP, BigInt("1657"))
		assert.equal(uint256K2Z1k2f, BigInt("0"))
		assert.equal(uint256USU1eEU, BigInt("1657"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeI3kXgNh = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintuDLRbUy = BigInt("0")
		const uintX1mH9CZ = BigInt("1900")
		const uintZ4o3Rgd = BigInt("628")
		const boolTzneoG = await CourtFarming_HTStakeI3kXgNh.stakeIncvRewards.call(uintuDLRbUy, {from: accounts[0]});
		const uint256yy6RGRS = await CourtFarming_HTStakeI3kXgNh.incvRewardClaim.call({from: accounts[1]});
		const uint256qkOBfUu = await CourtFarming_HTStakeI3kXgNh.expectedRewardsToday.call(uintX1mH9CZ, {from: accounts[0]});
		const uint256EOKyIty = await CourtFarming_HTStakeI3kXgNh.incvRewardInfo.call({from: accounts[3]});
		const boolOPKxojr = await CourtFarming_HTStakeI3kXgNh.stakeIncvRewards.call(uintZ4o3Rgd, {from: accounts[3]});

		assert.equal(boolOPKxojr, false)
		assert.equal(boolTzneoG, false)
		assert.equal(uint256yy6RGRS, BigInt("0"))
	});
})