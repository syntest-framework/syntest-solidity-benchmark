const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeIHcaC75 = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintMWVoqQ2 = BigInt("240")
		const uintoneH88 = BigInt("631")
		const uintrF5N0T = BigInt("1535")
		const uinthBCSrs = BigInt("1650")
		const uinth6rCPkq = BigInt("863")
		const uintwayml7q = BigInt("32")
		const booliexRLqb = false
		const uintlM6usAK = BigInt("1172")
		const addressqiPSqJQ = accounts[3]
		const uint256NsRNZ8p = await CourtFarming_HTStakeIHcaC75.incvRewardInfo.call({from: accounts[3]});
//		const uint256EUPXKeo = await CourtFarming_HTStakeIHcaC75._stakeParametrsCalculation.call(uintrF5N0T, uintoneH88, uintMWVoqQ2, {from: accounts[4]});
//		const uint256SDuh9qB = await CourtFarming_HTStakeIHcaC75.lastUpdateBlock.call({from: accounts[1]});
//		const uint256bQZ5dY7 = await CourtFarming_HTStakeIHcaC75._stakeParametrsCalculation.call(uintwayml7q, uinth6rCPkq, uinthBCSrs, {from: accounts[2]});
//		const uint256cGg60i = await CourtFarming_HTStakeIHcaC75.unstake.call(uintlM6usAK, booliexRLqb, {from: accounts[2]});
//		const uint256KJxs6dY = await CourtFarming_HTStakeIHcaC75.rewards.call(addressqiPSqJQ, {from: accounts[0]});

		await expect(CourtFarming_HTStakeIHcaC75._stakeParametrsCalculation.call(uintrF5N0T, uintoneH88, uintMWVoqQ2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeanmaBPm = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintMFx44Nu = BigInt("1130")
		const uintjw2upH0 = BigInt("1336")
		const uintv8ObuO = BigInt("1417")
		const uintVwkg7Fa = BigInt("1954")
		const uintlBcMKRN = BigInt("1529")
		const uintVyD3SRB = BigInt("85")
//		await CourtFarming_HTStakeanmaBPm.changeStakeParameters.call(uintv8ObuO, uintjw2upH0, uintMFx44Nu, {from: accounts[1]});
//		await CourtFarming_HTStakeanmaBPm.changeStakeParameters.call(uintVyD3SRB, uintlBcMKRN, uintVwkg7Fa, {from: accounts[3]});
//		const uint256OQFDPmj = await CourtFarming_HTStakeanmaBPm.totalStaked.call({from: accounts[1]});

		await expect(CourtFarming_HTStakeanmaBPm.changeStakeParameters.call(uintv8ObuO, uintjw2upH0, uintMFx44Nu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeI0ziyY7 = await CourtFarming_HTStake.new({from: accounts[4]});
		const addressDEV4XP = accounts[1]
		const boolZgp2J0q = false
		const uintq1FDfw6 = BigInt("927")
		const addresshy11H2B = accounts[1]
		const address3WDqdv = await CourtFarming_HTStakeI0ziyY7.getBeneficiaryInfo.call(addressDEV4XP, {from: accounts[4]});
//		const uint256PpqerYZ = await CourtFarming_HTStakeI0ziyY7.unstake.call(uintq1FDfw6, boolZgp2J0q, {from: accounts[4]});
//		const uint256SZJtWWd = await CourtFarming_HTStakeI0ziyY7.balanceOf.call(addresshy11H2B, {from: accounts[3]});

		await expect(CourtFarming_HTStakeI0ziyY7.unstake.call(uintq1FDfw6, boolZgp2J0q, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakecOpuQr0 = await CourtFarming_HTStake.new({from: accounts[1]});
		const uintEqErXg = BigInt("1573")
		const uintLNH64R = BigInt("18")
		const uintgQNyGo = BigInt("206")
		const uinte4HUiCg = BigInt("960")
		const uintNhk7T8G = BigInt("113")
//		const uint256KMOCJp9 = await CourtFarming_HTStakecOpuQr0.stake.call(uintEqErXg, {from: accounts[1]});
//		const uint256xnfBj7l = await CourtFarming_HTStakecOpuQr0.stake.call(uintLNH64R, {from: accounts[4]});
//		const uint256eYaN4T9 = await CourtFarming_HTStakecOpuQr0.incvRewardInfo.call({from: accounts[4]});
//		const uint256bqkPHev = await CourtFarming_HTStakecOpuQr0._stakeParametrsCalculation.call(uintNhk7T8G, uinte4HUiCg, uintgQNyGo, {from: accounts[4]});

		await expect(CourtFarming_HTStakecOpuQr0.stake.call(uintEqErXg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakektWXRq2 = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressW6s3UhA = accounts[0]
		const uintlrX3Ka = BigInt("773")
		const addressJddi1xX = await CourtFarming_HTStakektWXRq2.updateReward.call(addressW6s3UhA, {from: accounts[0]});
		const uint256AKLrdiY = await CourtFarming_HTStakektWXRq2.expectedRewardsToday.call(uintlrX3Ka, {from: "0x0000000000000000000000000000000000000001"});
		const uint256zYsLZM = await CourtFarming_HTStakektWXRq2.incvRewardClaim.call({from: accounts[1]});

		assert.equal(uint256zYsLZM, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeKMQqP1T = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressa6sArMA = accounts[1]
		const addressUZZxQ4R = accounts[0]
		const boolUrrChRI = false
		const uintgiR1VKl = BigInt("55")
//		const addressasnC8hx = await CourtFarming_HTStakeKMQqP1T.setCourtStake.call(addressa6sArMA, {from: accounts[1]});
//		const addresscAQcYpq = await CourtFarming_HTStakeKMQqP1T.getBeneficiaryInfo.call(addressUZZxQ4R, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256muRoNei = await CourtFarming_HTStakeKMQqP1T.unstake.call(uintgiR1VKl, boolUrrChRI, {from: accounts[1]});
//		const uint256ZNa8ezh = await CourtFarming_HTStakeKMQqP1T.getCurrentTime.call({from: accounts[4]});
//		const uint256pfTgRiY = await CourtFarming_HTStakeKMQqP1T.incvRewardInfo.call({from: accounts[4]});

		await expect(CourtFarming_HTStakeKMQqP1T.setCourtStake.call(addressa6sArMA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStake2JTvHJ = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressfQCdIqK = "0x0000000000000000000000000000000000000001"
		const uintmX4tF2 = BigInt("1202")
		const uintGkgMoFf = BigInt("63")
		const addressQIwkmI = await CourtFarming_HTStake2JTvHJ.updateReward.call(addressfQCdIqK, {from: accounts[4]});
		const boolgtXmYfx = await CourtFarming_HTStake2JTvHJ.stakeIncvRewards.call(uintmX4tF2, {from: accounts[5]});
		const uint256mgvdpaM = await CourtFarming_HTStake2JTvHJ.blockNumber.call({from: accounts[0]});
//		const uint256PwwU16O = await CourtFarming_HTStake2JTvHJ.stake.call(uintGkgMoFf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolgtXmYfx, false)
		assert.equal(uint256mgvdpaM, BigInt("1756"))
		await expect(CourtFarming_HTStake2JTvHJ.stake.call(uintGkgMoFf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeZdf3kV7 = await CourtFarming_HTStake.new({from: accounts[2]});
		const boolJ3P2aYK = true
		const uintx0Rhfky = BigInt("1902")
		const uint256N9SBqpg = await CourtFarming_HTStakeZdf3kV7.getCurrentTime.call({from: accounts[3]});
		const uint256eCsq4V = await CourtFarming_HTStakeZdf3kV7.getCurrentTime.call({from: accounts[4]});
		const uint256bWjZjtq = await CourtFarming_HTStakeZdf3kV7.getCurrentTime.call({from: accounts[4]});
		const uint256nCYvIU = await CourtFarming_HTStakeZdf3kV7.lastUpdateBlock.call({from: accounts[0]});
//		const uint256KC70cXj = await CourtFarming_HTStakeZdf3kV7.unstake.call(uintx0Rhfky, boolJ3P2aYK, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256N9SBqpg, BigInt("1630201336"))
		assert.equal(uint256bWjZjtq, BigInt("1630201336"))
		assert.equal(uint256eCsq4V, BigInt("1630201336"))
		assert.equal(uint256nCYvIU, BigInt("1756"))
		await expect(CourtFarming_HTStakeZdf3kV7.unstake.call(uintx0Rhfky, boolJ3P2aYK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakec7TL5Yz = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressJPnBquF = accounts[4]
		const uint256pRF8XKR = await CourtFarming_HTStakec7TL5Yz.balanceOf.call(addressJPnBquF, {from: accounts[1]});
		const uint256ljujqMA = await CourtFarming_HTStakec7TL5Yz.totalStaked.call({from: accounts[4]});
		const uint256GJyh4eO = await CourtFarming_HTStakec7TL5Yz.blockNumber.call({from: accounts[4]});

		assert.equal(uint256GJyh4eO, BigInt("1756"))
		assert.equal(uint256ljujqMA, BigInt("0"))
		assert.equal(uint256pRF8XKR, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakev3cqmwe = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintn23xpD2 = BigInt("90")
		const uint256iEPEYWx = await CourtFarming_HTStakev3cqmwe.expectedRewardsToday.call(uintn23xpD2, {from: accounts[4]});
		const uint256xE8z60U = await CourtFarming_HTStakev3cqmwe.blockNumber.call({from: accounts[2]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakektWXRq2 = await CourtFarming_HTStake.new({from: accounts[3]});
		const addressqe5BDNB = accounts[1]
		const addressTdI2ZDu = accounts[3]
		const uintHjY0lHl = BigInt("772")
		const uintysQqQJh = BigInt("894")
		const uintmbF5mQl = BigInt("777")
		const uintsJVvTAG = BigInt("662")
		const addresscIWzPkk = accounts[0]
		const addressJmTr90F = accounts[1]
		const boolxr2eMro = false
		const uintImd9zw4 = BigInt("416")
		const addressJddi1xX = await CourtFarming_HTStakektWXRq2.updateReward.call(addressqe5BDNB, {from: accounts[0]});
//		const addressXILB5jF = await CourtFarming_HTStakektWXRq2.setCourtStake.call(addressTdI2ZDu, {from: accounts[3]});
//		const uint256AKLrdiY = await CourtFarming_HTStakektWXRq2.expectedRewardsToday.call(uintHjY0lHl, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256oDvIBe = await CourtFarming_HTStakektWXRq2._stakeParametrsCalculation.call(uintsJVvTAG, uintmbF5mQl, uintysQqQJh, {from: accounts[0]});
//		const uint256lEQNLFC = await CourtFarming_HTStakektWXRq2.rewards.call(addresscIWzPkk, {from: accounts[4]});
//		const uint256CpzfEGJ = await CourtFarming_HTStakektWXRq2.lastUpdateBlock.call({from: accounts[1]});
//		const uint256NB7jLOk = await CourtFarming_HTStakektWXRq2.totalStaked.call({from: accounts[1]});
//		const uint256dxe6FIo = await CourtFarming_HTStakektWXRq2.rewards.call(addressJmTr90F, {from: accounts[3]});
//		const uint256uK7Bx4 = await CourtFarming_HTStakektWXRq2.unstake.call(uintImd9zw4, boolxr2eMro, {from: accounts[1]});

		await expect(CourtFarming_HTStakektWXRq2.setCourtStake.call(addressTdI2ZDu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeI0ziyY7 = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintn14XjA = BigInt("0")
		const uintCB5DC7W = BigInt("1136")
		const uint256uyHPmUD = await CourtFarming_HTStakeI0ziyY7.incvRewardClaim.call({from: accounts[1]});
		const boolSyMO8nM = await CourtFarming_HTStakeI0ziyY7.stakeIncvRewards.call(uintn14XjA, {from: accounts[1]});
		const boollR83Une = await CourtFarming_HTStakeI0ziyY7.stakeIncvRewards.call(uintCB5DC7W, {from: accounts[0]});

		assert.equal(boolSyMO8nM, false)
		assert.equal(boollR83Une, false)
		assert.equal(uint256uyHPmUD, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedaZPFSs = await CourtFarming_HTStake.new({from: accounts[0]});
		const bool51vju4 = true
		const uintvbi0f1K = BigInt("0")
		const uintt5zgkq3 = BigInt("82")
		const uint256DRcAIYv = await CourtFarming_HTStakedaZPFSs.unstake.call(uintvbi0f1K, bool51vju4, {from: accounts[3]});
//		const uint256UpvwWOK = await CourtFarming_HTStakedaZPFSs.stake.call(uintt5zgkq3, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakedaZPFSs.stake.call(uintt5zgkq3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})