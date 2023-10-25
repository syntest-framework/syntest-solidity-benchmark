const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeIIW0EcC = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintB8SgUHz = BigInt("1432")
		const uint256fKMY9EQ = await CourtFarming_HTStakeIIW0EcC.lastUpdateBlock.call({from: accounts[3]});
		const uint256csRP05K = await CourtFarming_HTStakeIIW0EcC.lastUpdateBlock.call({from: accounts[0]});
		const uint256wVkZFX9 = await CourtFarming_HTStakeIIW0EcC.expectedRewardsToday.call(uintB8SgUHz, {from: accounts[0]});

		assert.equal(uint256csRP05K, BigInt("1211"))
		assert.equal(uint256fKMY9EQ, BigInt("1211"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeUo1hzQ = await CourtFarming_HTStake.new({from: accounts[3]});
		const uint25641oWgY = await CourtFarming_HTStakeUo1hzQ.lastUpdateBlock.call({from: accounts[0]});
		const uint256NvTdD7F = await CourtFarming_HTStakeUo1hzQ.totalStaked.call({from: accounts[0]});
		const uint256ZBcyRoW = await CourtFarming_HTStakeUo1hzQ.getCurrentTime.call({from: accounts[0]});

		assert.equal(uint25641oWgY, BigInt("1211"))
		assert.equal(uint256NvTdD7F, BigInt("0"))
		assert.equal(uint256ZBcyRoW, BigInt("1630199739"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeWhAWx6V = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressPHHKJAx = accounts[0]
		const boolK2iFS9g = false
		const uintSEtqsG7 = BigInt("1771")
		const addressykedBKu = await CourtFarming_HTStakeWhAWx6V.updateReward.call(addressPHHKJAx, {from: accounts[0]});
//		const uint256gK1xQnD = await CourtFarming_HTStakeWhAWx6V.unstake.call(uintSEtqsG7, boolK2iFS9g, {from: accounts[2]});
//		const uint256oZND9MJ = await CourtFarming_HTStakeWhAWx6V.incvRewardInfo.call({from: accounts[2]});

		await expect(CourtFarming_HTStakeWhAWx6V.unstake.call(uintSEtqsG7, boolK2iFS9g, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeW98f6Tj = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintEJN9cwJ = BigInt("1689")
		const addressgEc7Etk = accounts[0]
		const addressEr0IQ7t = accounts[1]
		const boolBQUl0ZW = await CourtFarming_HTStakeW98f6Tj.stakeIncvRewards.call(uintEJN9cwJ, {from: accounts[2]});
//		const addressQ482LQp = await CourtFarming_HTStakeW98f6Tj.setCourtStake.call(addressgEc7Etk, {from: accounts[3]});
//		const uint256ENNWs4 = await CourtFarming_HTStakeW98f6Tj.totalStaked.call({from: accounts[4]});
//		const addressAv6vbuA = await CourtFarming_HTStakeW98f6Tj.updateReward.call(addressEr0IQ7t, {from: accounts[0]});

		assert.equal(boolBQUl0ZW, false)
		await expect(CourtFarming_HTStakeW98f6Tj.setCourtStake.call(addressgEc7Etk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeggD3XLS = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintyINJ5Kz = BigInt("241")
		const addressfBlFaP9 = accounts[4]
		const addressvBJ9SYF = accounts[2]
		const addressMGZZ78W = accounts[3]
		const uint256plpSR4 = await CourtFarming_HTStakeggD3XLS.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256wMM59Ym = await CourtFarming_HTStakeggD3XLS.totalStaked.call({from: accounts[0]});
		const boolvJ07rJe = await CourtFarming_HTStakeggD3XLS.stakeIncvRewards.call(uintyINJ5Kz, {from: accounts[1]});
		const uint256wJCI3Hc = await CourtFarming_HTStakeggD3XLS.balanceOf.call(addressfBlFaP9, {from: accounts[0]});
//		const addresspDmUJI7 = await CourtFarming_HTStakeggD3XLS.setCourtStake.call(addressvBJ9SYF, {from: accounts[0]});
//		const uint256EyejeyO = await CourtFarming_HTStakeggD3XLS.rewards.call(addressMGZZ78W, {from: accounts[0]});

		assert.equal(boolvJ07rJe, false)
		assert.equal(uint256plpSR4, BigInt("0"))
		assert.equal(uint256wJCI3Hc, BigInt("0"))
		assert.equal(uint256wMM59Ym, BigInt("0"))
		await expect(CourtFarming_HTStakeggD3XLS.setCourtStake.call(addressvBJ9SYF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeG5V50fd = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintbRd3zs7 = BigInt("490")
		const uintCUxOII = BigInt("839")
		const uintYf5eZh0 = BigInt("1179")
		const addressuy2IUVN = accounts[3]
		const uint256LZfN2TY = await CourtFarming_HTStakeG5V50fd.getCurrentTime.call({from: accounts[3]});
//		await CourtFarming_HTStakeG5V50fd.changeStakeParameters.call(uintYf5eZh0, uintCUxOII, uintbRd3zs7, {from: accounts[0]});
//		const uint256TCM6NA2 = await CourtFarming_HTStakeG5V50fd.rewards.call(addressuy2IUVN, {from: accounts[2]});

		assert.equal(uint256LZfN2TY, BigInt("1630199733"))
		await expect(CourtFarming_HTStakeG5V50fd.changeStakeParameters.call(uintYf5eZh0, uintCUxOII, uintbRd3zs7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXdj1m0 = await CourtFarming_HTStake.new({from: accounts[3]});
		const addresshmieWK7 = accounts[0]
		const booliNlzyW7 = false
		const uintycqTQgc = BigInt("549")
		const addresszf5f2qU = await CourtFarming_HTStakeXdj1m0.getBeneficiaryInfo.call(addresshmieWK7, {from: accounts[4]});
//		const uint256dBQ8vj = await CourtFarming_HTStakeXdj1m0.unstake.call(uintycqTQgc, booliNlzyW7, {from: accounts[2]});
//		const uint256WdCTJgU = await CourtFarming_HTStakeXdj1m0.totalStaked.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_HTStakeXdj1m0.unstake.call(uintycqTQgc, booliNlzyW7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedivYxY1 = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintXOWOcdY = BigInt("429")
		const uinthbLfC70 = BigInt("1727")
		const uintOaSiZCB = BigInt("1509")
		const uint256z08KYw = await CourtFarming_HTStakedivYxY1.lastUpdateBlock.call({from: accounts[2]});
//		await CourtFarming_HTStakedivYxY1.changeStakeParameters.call(uintOaSiZCB, uinthbLfC70, uintXOWOcdY, {from: accounts[2]});

		assert.equal(uint256z08KYw, BigInt("1211"))
		await expect(CourtFarming_HTStakedivYxY1.changeStakeParameters.call(uintOaSiZCB, uinthbLfC70, uintXOWOcdY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeVxXQjh4 = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressNsHX2Fx = accounts[0]
		const addressmQNtzRL = accounts[3]
		const uint256Fn3a81K = await CourtFarming_HTStakeVxXQjh4.incvRewardInfo.call({from: accounts[4]});
		const addressXE50wBF = await CourtFarming_HTStakeVxXQjh4.updateReward.call(addressNsHX2Fx, {from: accounts[1]});
		const uint256nQT2tmJ = await CourtFarming_HTStakeVxXQjh4.rewards.call(addressmQNtzRL, {from: accounts[4]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedivYxY1 = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintzm3LUZ = BigInt("800")
		const uintZexFyZ = BigInt("429")
		const uintas7YE6U = BigInt("1727")
		const uintHca4qb6 = BigInt("1522")
		const uint256z08KYw = await CourtFarming_HTStakedivYxY1.lastUpdateBlock.call({from: accounts[2]});
//		const uint256Y7jlzuW = await CourtFarming_HTStakedivYxY1.stake.call(uintzm3LUZ, {from: accounts[0]});
//		await CourtFarming_HTStakedivYxY1.changeStakeParameters.call(uintHca4qb6, uintas7YE6U, uintZexFyZ, {from: accounts[2]});

		assert.equal(uint256z08KYw, BigInt("1211"))
		await expect(CourtFarming_HTStakedivYxY1.stake.call(uintzm3LUZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeG5V50fd = await CourtFarming_HTStake.new({from: accounts[0]});
		const addressFtWIEZ = "0x0000000000000000000000000000000000000001"
		const uintV1dMSR3 = BigInt("1077")
		const uintBuaFf9Y = BigInt("1766")
		const uintLuH5Q4o = BigInt("243")
		const uintGuxj4PH = BigInt("490")
		const uintMBNmFk = BigInt("839")
		const uintX4ge6Kv = BigInt("1179")
		const addressksuiroI = accounts[3]
		const addressDSexN0X = accounts[0]
		const uint256LZfN2TY = await CourtFarming_HTStakeG5V50fd.getCurrentTime.call({from: accounts[3]});
		const uint256ScC5yy1 = await CourtFarming_HTStakeG5V50fd.rewards.call(addressFtWIEZ, {from: accounts[4]});
//		const uint256StjAfOS = await CourtFarming_HTStakeG5V50fd._stakeParametrsCalculation.call(uintLuH5Q4o, uintBuaFf9Y, uintV1dMSR3, {from: accounts[5]});
//		await CourtFarming_HTStakeG5V50fd.changeStakeParameters.call(uintX4ge6Kv, uintMBNmFk, uintGuxj4PH, {from: accounts[0]});
//		const uint256TCM6NA2 = await CourtFarming_HTStakeG5V50fd.rewards.call(addressksuiroI, {from: accounts[2]});
//		const addressXFYAEgi = await CourtFarming_HTStakeG5V50fd.updateReward.call(addressDSexN0X, {from: accounts[3]});

		assert.equal(uint256LZfN2TY, BigInt("1630199735"))
		await expect(CourtFarming_HTStakeG5V50fd._stakeParametrsCalculation.call(uintLuH5Q4o, uintBuaFf9Y, uintV1dMSR3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeTJgM3s = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgNcySpV = BigInt("1120")
		const uintJ554He6 = BigInt("1856")
		const uintxDgGgQ5 = BigInt("534")
		const addressgS8DUEl = accounts[0]
		const uintKoDX3vb = BigInt("54")
		const uintEQ9wJ1b = BigInt("1623")
		const uinthaI7Hm = BigInt("1798")
		const uint256wgQxUl5 = await CourtFarming_HTStakeTJgM3s._stakeParametrsCalculation.call(uintxDgGgQ5, uintJ554He6, uintgNcySpV, {from: accounts[4]});
		const uint256NHnRfc9 = await CourtFarming_HTStakeTJgM3s.balanceOf.call(addressgS8DUEl, {from: accounts[3]});
		const uint256itzifab = await CourtFarming_HTStakeTJgM3s.totalStaked.call({from: accounts[0]});
		const uint256GkD7Wum = await CourtFarming_HTStakeTJgM3s._stakeParametrsCalculation.call(uinthaI7Hm, uintEQ9wJ1b, uintKoDX3vb, {from: accounts[2]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXdj1m0 = await CourtFarming_HTStake.new({from: accounts[3]});
		const boolQrslNJ = false
		const uintxhpdNd = BigInt("0")
		const uint256iX3RIOw = await CourtFarming_HTStakeXdj1m0.unstake.call(uintxhpdNd, boolQrslNJ, {from: accounts[1]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakedivYxY1 = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintFsVsccf = BigInt("0")
		const addressyvhYEgx = accounts[0]
		const uint256pek3wQF = await CourtFarming_HTStakedivYxY1.stake.call(uintFsVsccf, {from: accounts[4]});
		const uint256phNQ57Z = await CourtFarming_HTStakedivYxY1.rewards.call(addressyvhYEgx, {from: accounts[3]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeVxXQjh4 = await CourtFarming_HTStake.new({from: accounts[2]});
		const uintz0WgCRI = BigInt("599")
		const addressfs8nSuy = accounts[7]
		const uintWxZWP0P = BigInt("0")
		const uint256umnUq3 = await CourtFarming_HTStakeVxXQjh4.getCurrentTime.call({from: accounts[1]});
		const boolYpbuMij = await CourtFarming_HTStakeVxXQjh4.stakeIncvRewards.call(uintz0WgCRI, {from: accounts[5]});
		const uint256LcfcDJg = await CourtFarming_HTStakeVxXQjh4.incvRewardInfo.call({from: accounts[5]});
		const uint2568P3LPZ = await CourtFarming_HTStakeVxXQjh4.rewards.call(addressfs8nSuy, {from: accounts[4]});
		const boolro5YklA = await CourtFarming_HTStakeVxXQjh4.stakeIncvRewards.call(uintWxZWP0P, {from: accounts[3]});

		assert.equal(boolYpbuMij, false)
		assert.equal(boolro5YklA, false)
		assert.equal(uint256umnUq3, BigInt("1630199749"))
	});
})