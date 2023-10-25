const CourtFarming_RoomLPStake = artifacts.require("CourtFarming_RoomLPStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_RoomLPStake', (accounts) => {
	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakezfPSc9q = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addresskUsDXzX = accounts[1]
		const addresspcHwxdh = accounts[1]
		const addressajLBi6J = accounts[1]
		const uint256PKLKqy4 = await CourtFarming_RoomLPStakezfPSc9q.rewards.call(addresskUsDXzX, {from: accounts[5]});
		const addressi4QUfhI = await CourtFarming_RoomLPStakezfPSc9q.setCourtStake.call(addresspcHwxdh, {from: accounts[2]});
		const addressL6rLY8j = await CourtFarming_RoomLPStakezfPSc9q.setCourtStake.call(addressajLBi6J, {from: accounts[3]});
		const uint256KYDLcQl = await CourtFarming_RoomLPStakezfPSc9q.incvRewardClaim.call({from: accounts[4]});

		await expect(CourtFarming_RoomLPStakezfPSc9q.setCourtStake.call(addresspcHwxdh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeSmL2ch9 = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintsJvwr9q = BigInt("1659")
		const addresstivOJXy = accounts[3]
		const addressfXhb7P = "0x0000000000000000000000000000000000000001"
		const uint256k9CMcwu = await CourtFarming_RoomLPStakeSmL2ch9.stake.call(uintsJvwr9q, {from: accounts[3]});
		const addressvZ0nptS = await CourtFarming_RoomLPStakeSmL2ch9.updateReward.call(addresstivOJXy, {from: accounts[0]});
		const uint256zR15dh2 = await CourtFarming_RoomLPStakeSmL2ch9.rewards.call(addressfXhb7P, {from: accounts[4]});
		const uint256CLn7eSA = await CourtFarming_RoomLPStakeSmL2ch9.blockNumber.call({from: accounts[0]});

		await expect(CourtFarming_RoomLPStakeSmL2ch9.stake.call(uintsJvwr9q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeO3wHNER = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uintqirubvJ = BigInt("1161")
		const uintG5z81Kd = BigInt("639")
		const addressu1pPLGL = accounts[3]
		const uint256SebIrd = await CourtFarming_RoomLPStakeO3wHNER.totalStaked.call({from: accounts[0]});
		const uint256jJRiCX1 = await CourtFarming_RoomLPStakeO3wHNER.totalStaked.call({from: accounts[1]});
		const uint256Vp8twH = await CourtFarming_RoomLPStakeO3wHNER.expectedRewardsToday.call(uintqirubvJ, {from: accounts[1]});
		const boolm0Qfvx = await CourtFarming_RoomLPStakeO3wHNER.stakeIncvRewards.call(uintG5z81Kd, {from: accounts[2]});
		const addressLKLSDg7 = await CourtFarming_RoomLPStakeO3wHNER.setCourtStake.call(addressu1pPLGL, {from: accounts[5]});

		assert.equal(boolm0Qfvx, false)
		assert.equal(uint256SebIrd, BigInt("0"))
		assert.equal(uint256jJRiCX1, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeO3wHNER.setCourtStake.call(addressu1pPLGL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakekERV0U4 = await CourtFarming_RoomLPStake.new({from: accounts[5]});
		const addresscC5RLJL = accounts[2]
		const uint256r57PPB = await CourtFarming_RoomLPStakekERV0U4.incvRewardInfo.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256mjWWVhC = await CourtFarming_RoomLPStakekERV0U4.blockNumber.call({from: accounts[4]});
		const uint256qwLj6Ck = await CourtFarming_RoomLPStakekERV0U4.balanceOf.call(addresscC5RLJL, {from: accounts[1]});

		assert.equal(uint256mjWWVhC, BigInt("1165"))
		assert.equal(uint256qwLj6Ck, BigInt("0"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeIFJUhxL = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressRL09ztc = accounts[2]
		const addressKshZ93m = accounts[1]
		const uint256ZHtAUPf = await CourtFarming_RoomLPStakeIFJUhxL.rewards.call(addressRL09ztc, {from: accounts[0]});
		const uint256npHgzq5 = await CourtFarming_RoomLPStakeIFJUhxL.rewards.call(addressKshZ93m, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pnHHqcX = await CourtFarming_RoomLPStakeIFJUhxL.getCurrentTime.call({from: accounts[0]});
		const uint256Cv6HRQM = await CourtFarming_RoomLPStakeIFJUhxL.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256dQA8yjy = await CourtFarming_RoomLPStakeIFJUhxL.totalStaked.call({from: accounts[4]});

		assert.equal(uint256Cv6HRQM, BigInt("0"))
		assert.equal(uint256dQA8yjy, BigInt("0"))
		assert.equal(uint256pnHHqcX, BigInt("1630199817"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakenZjEZJ1 = await CourtFarming_RoomLPStake.new({from: "0x0000000000000000000000000000000000000001"});
		const addresskWpRsy = accounts[1]
		const boolDhf20v9 = false
		const uintjJdW1Y = BigInt("481")
		const addressm1QePA = accounts[4]
		const addressmKvrHie = accounts[0]
		const uint256orWi95V = await CourtFarming_RoomLPStakenZjEZJ1.getCurrentTime.call({from: accounts[0]});
		const addresswaYtJU = await CourtFarming_RoomLPStakenZjEZJ1.setCourtStake.call(addresskWpRsy, {from: accounts[2]});
		const uint256VNKesmD = await CourtFarming_RoomLPStakenZjEZJ1.unstake.call(uintjJdW1Y, boolDhf20v9, {from: accounts[3]});
		const addressFy1mOgX = await CourtFarming_RoomLPStakenZjEZJ1.updateReward.call(addressm1QePA, {from: accounts[5]});
		const addressLyTMD9n = await CourtFarming_RoomLPStakenZjEZJ1.updateReward.call(addressmKvrHie, {from: accounts[3]});
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeRMAUlVM = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintVH3XKQI = BigInt("854")
		const uint256CPWpkv = await CourtFarming_RoomLPStakeRMAUlVM.lastUpdateBlock.call({from: accounts[1]});
		const uint256yF0RDCw = await CourtFarming_RoomLPStakeRMAUlVM.incvRewardInfo.call({from: accounts[4]});
		const uint256HhwbnMQ = await CourtFarming_RoomLPStakeRMAUlVM.stake.call(uintVH3XKQI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256CPWpkv, BigInt("1165"))
		await expect(CourtFarming_RoomLPStakeRMAUlVM.stake.call(uintVH3XKQI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeRMAUlVM = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const boolzytICyy = true
		const uintYxbh0F = BigInt("1162")
		const uintVUfgljD = BigInt("854")
		const uint256HnAVX81 = await CourtFarming_RoomLPStakeRMAUlVM.unstake.call(uintYxbh0F, boolzytICyy, {from: accounts[1]});
		const uint256CPWpkv = await CourtFarming_RoomLPStakeRMAUlVM.lastUpdateBlock.call({from: accounts[1]});
		const uint256yF0RDCw = await CourtFarming_RoomLPStakeRMAUlVM.incvRewardInfo.call({from: accounts[4]});
		const uint256HhwbnMQ = await CourtFarming_RoomLPStakeRMAUlVM.stake.call(uintVUfgljD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_RoomLPStakeRMAUlVM.unstake.call(uintYxbh0F, boolzytICyy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeRMAUlVM = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addressCpChe1u = accounts[1]
		const addressDSqfKrb = accounts[5]
		const addressrpFaSk = accounts[0]
		const uintOSykloN = BigInt("854")
		const uint256CPWpkv = await CourtFarming_RoomLPStakeRMAUlVM.lastUpdateBlock.call({from: accounts[1]});
		const addressgPzWe4S = await CourtFarming_RoomLPStakeRMAUlVM.getBeneficiaryInfo.call(addressCpChe1u, {from: accounts[3]});
		const uint256aXaoLyD = await CourtFarming_RoomLPStakeRMAUlVM.rewards.call(addressDSqfKrb, {from: accounts[5]});
		const uint256kst3heC = await CourtFarming_RoomLPStakeRMAUlVM.balanceOf.call(addressrpFaSk, {from: accounts[1]});
		const uint256yF0RDCw = await CourtFarming_RoomLPStakeRMAUlVM.incvRewardInfo.call({from: accounts[4]});
		const uint256HhwbnMQ = await CourtFarming_RoomLPStakeRMAUlVM.stake.call(uintOSykloN, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256CPWpkv, BigInt("1165"))
		assert.equal(uint256kst3heC, BigInt("0"))
		await expect(CourtFarming_RoomLPStakeRMAUlVM.stake.call(uintOSykloN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeIFJUhxL = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintf5Hk5wG = BigInt("1705")
		const uintgiPFxU8 = BigInt("1218")
		const uintUTimJqa = BigInt("1860")
		const uint256pnHHqcX = await CourtFarming_RoomLPStakeIFJUhxL.getCurrentTime.call({from: accounts[0]});
		const uint256Cv6HRQM = await CourtFarming_RoomLPStakeIFJUhxL.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		await CourtFarming_RoomLPStakeIFJUhxL.changeStakeParameters.call(uintUTimJqa, uintgiPFxU8, uintf5Hk5wG, {from: accounts[0]});
		const uint256dQA8yjy = await CourtFarming_RoomLPStakeIFJUhxL.totalStaked.call({from: accounts[4]});

		assert.equal(uint256Cv6HRQM, BigInt("0"))
		assert.equal(uint256pnHHqcX, BigInt("1630199822"))
		await expect(CourtFarming_RoomLPStakeIFJUhxL.changeStakeParameters.call(uintUTimJqa, uintgiPFxU8, uintf5Hk5wG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeIFJUhxL = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const addresst0JRh6V = accounts[3]
		const addressIsnLJqb = accounts[1]
		const addresseBUku9 = accounts[1]
		const uintt1y3b6a = BigInt("351")
		const uint256ZHtAUPf = await CourtFarming_RoomLPStakeIFJUhxL.rewards.call(addresst0JRh6V, {from: accounts[0]});
		const addressxqVJ6M0 = await CourtFarming_RoomLPStakeIFJUhxL.setCourtStake.call(addressIsnLJqb, {from: accounts[0]});
		const uint256npHgzq5 = await CourtFarming_RoomLPStakeIFJUhxL.rewards.call(addresseBUku9, {from: "0x0000000000000000000000000000000000000001"});
		const boolYzhzEg = await CourtFarming_RoomLPStakeIFJUhxL.stakeIncvRewards.call(uintt1y3b6a, {from: accounts[3]});
		const uint256pnHHqcX = await CourtFarming_RoomLPStakeIFJUhxL.getCurrentTime.call({from: accounts[0]});
		const uint256Cv6HRQM = await CourtFarming_RoomLPStakeIFJUhxL.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256dQA8yjy = await CourtFarming_RoomLPStakeIFJUhxL.totalStaked.call({from: accounts[4]});

		await expect(CourtFarming_RoomLPStakeIFJUhxL.setCourtStake.call(addressIsnLJqb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeIFJUhxL = await CourtFarming_RoomLPStake.new({from: accounts[0]});
		const uintZbueihC = BigInt("1933")
		const uintxam7z6h = BigInt("189")
		const uinttTf5Arq = BigInt("354")
		await CourtFarming_RoomLPStakeIFJUhxL.changeStakeParameters.call(uinttTf5Arq, uintxam7z6h, uintZbueihC, {from: accounts[4]});
		const uint256jJQ0gi = await CourtFarming_RoomLPStakeIFJUhxL.blockNumber.call({from: accounts[2]});
		const uint256Cv6HRQM = await CourtFarming_RoomLPStakeIFJUhxL.incvRewardClaim.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(CourtFarming_RoomLPStakeIFJUhxL.changeStakeParameters.call(uinttTf5Arq, uintxam7z6h, uintZbueihC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakeP3YMBaL = await CourtFarming_RoomLPStake.new({from: accounts[3]});
		const uinteZDhinz = BigInt("669")
		const uintn9TXKgX = BigInt("0")
		const uint256PmkkvY5 = await CourtFarming_RoomLPStakeP3YMBaL.getCurrentTime.call({from: accounts[2]});
		const uint256kA4jQ62 = await CourtFarming_RoomLPStakeP3YMBaL.expectedRewardsToday.call(uinteZDhinz, {from: accounts[1]});
		const uint256s5271kw = await CourtFarming_RoomLPStakeP3YMBaL.stake.call(uintn9TXKgX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256PmkkvY5, BigInt("1630199818"))
	});

	it('test for CourtFarming_RoomLPStake', async () => {
		const CourtFarming_RoomLPStakev8Df5Ng = await CourtFarming_RoomLPStake.new({from: accounts[2]});
		const uintqVvjoj = BigInt("0")
		const uintjXbUoa3 = BigInt("535")
		const addressvovOWv = accounts[1]
		const addressgVLfEub = accounts[1]
		const boolAwzQDVV = await CourtFarming_RoomLPStakev8Df5Ng.stakeIncvRewards.call(uintqVvjoj, {from: accounts[4]});
		const uint256Bqe3W9i = await CourtFarming_RoomLPStakev8Df5Ng.lastUpdateBlock.call({from: accounts[5]});
		const uint256NsJDITj = await CourtFarming_RoomLPStakev8Df5Ng.getCurrentTime.call({from: accounts[1]});
		const boolIYFS6PQ = await CourtFarming_RoomLPStakev8Df5Ng.stakeIncvRewards.call(uintjXbUoa3, {from: accounts[0]});
		const uint256kPysU5L = await CourtFarming_RoomLPStakev8Df5Ng.balanceOf.call(addressvovOWv, {from: accounts[1]});
		const addressUB6At5M = await CourtFarming_RoomLPStakev8Df5Ng.updateReward.call(addressgVLfEub, {from: accounts[3]});

		assert.equal(boolAwzQDVV, false)
		assert.equal(boolIYFS6PQ, false)
		assert.equal(uint256Bqe3W9i, BigInt("1165"))
		assert.equal(uint256NsJDITj, BigInt("1630199820"))
		assert.equal(uint256kPysU5L, BigInt("0"))
	});
})