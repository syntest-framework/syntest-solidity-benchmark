const CourtFarming_HTStake = artifacts.require("CourtFarming_HTStake");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('CourtFarming_HTStake', (accounts) => {
	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeBkQ62ep = await CourtFarming_HTStake.new({from: accounts[0]});
		const uintjKGGg6A = BigInt("236")
		const addressgtRlUmI = accounts[1]
		const addressTBilIr = accounts[0]
		const uint256kFL8mRv = await CourtFarming_HTStakeBkQ62ep.expectedRewardsToday.call(uintjKGGg6A, {from: accounts[4]});
		const uint256NPIjXhq = await CourtFarming_HTStakeBkQ62ep.totalStaked.call({from: accounts[4]});
//		const addresscg57i0Z = await CourtFarming_HTStakeBkQ62ep.setCourtStake.call(addressgtRlUmI, {from: accounts[4]});
//		const uint256NRkcuef = await CourtFarming_HTStakeBkQ62ep.balanceOf.call(addressTBilIr, {from: accounts[4]});

		assert.equal(uint256NPIjXhq, BigInt("0"))
		await expect(CourtFarming_HTStakeBkQ62ep.setCourtStake.call(addressgtRlUmI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeLkZ1IE = await CourtFarming_HTStake.new({from: accounts[4]});
		const uintjpJkwBe = BigInt("1605")
		const addressbi7woZa = accounts[1]
		const uintFr5PjjL = BigInt("242")
		const addressdTijThV = accounts[3]
		const uintq0gMWSc = BigInt("559")
		const uint256IP8ObmP = await CourtFarming_HTStakeLkZ1IE.expectedRewardsToday.call(uintjpJkwBe, {from: accounts[3]});
		const uint256LRje05 = await CourtFarming_HTStakeLkZ1IE.balanceOf.call(addressbi7woZa, {from: accounts[2]});
		const uint256ajVmErb = await CourtFarming_HTStakeLkZ1IE.expectedRewardsToday.call(uintFr5PjjL, {from: accounts[3]});
		const uint256gexIJ60 = await CourtFarming_HTStakeLkZ1IE.rewards.call(addressdTijThV, {from: accounts[1]});
		const uint256Ux5WgDK = await CourtFarming_HTStakeLkZ1IE.expectedRewardsToday.call(uintq0gMWSc, {from: accounts[0]});

		assert.equal(uint256LRje05, BigInt("0"))
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeFpc14u7 = await CourtFarming_HTStake.new({from: accounts[3]});
		const boolQmg8fYA = true
		const uintGu5oNJc = BigInt("1874")
		const addressQd8r2DU = accounts[3]
		const addresswiTVcC = accounts[2]
//		const uint2566QxmNS = await CourtFarming_HTStakeFpc14u7.unstake.call(uintGu5oNJc, boolQmg8fYA, {from: accounts[3]});
//		const uint256tJuVuyY = await CourtFarming_HTStakeFpc14u7.incvRewardClaim.call({from: accounts[0]});
//		const uint256HSpMx2h = await CourtFarming_HTStakeFpc14u7.balanceOf.call(addressQd8r2DU, {from: accounts[1]});
//		const addressPoLAEb = await CourtFarming_HTStakeFpc14u7.setCourtStake.call(addresswiTVcC, {from: accounts[5]});

		await expect(CourtFarming_HTStakeFpc14u7.unstake.call(uintGu5oNJc, boolQmg8fYA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXmV4qTl = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintvGKA7hC = BigInt("1857")
		const addressdWjp6Pe = accounts[4]
		const uintdJsZ0ZI = BigInt("1209")
		const uintx8WHJ0j = BigInt("1960")
		const uintiWibsR = BigInt("189")
		const boolQ16tw5a = await CourtFarming_HTStakeXmV4qTl.stakeIncvRewards.call(uintvGKA7hC, {from: accounts[2]});
		const addressj72Mmc5 = await CourtFarming_HTStakeXmV4qTl.updateReward.call(addressdWjp6Pe, {from: accounts[2]});
		const uint256d8hUtz9 = await CourtFarming_HTStakeXmV4qTl.lastUpdateBlock.call({from: accounts[1]});
//		await CourtFarming_HTStakeXmV4qTl.changeStakeParameters.call(uintiWibsR, uintx8WHJ0j, uintdJsZ0ZI, {from: accounts[4]});

		assert.equal(boolQ16tw5a, false)
		assert.equal(uint256d8hUtz9, BigInt("1793"))
		await expect(CourtFarming_HTStakeXmV4qTl.changeStakeParameters.call(uintiWibsR, uintx8WHJ0j, uintdJsZ0ZI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeymH6nQ7 = await CourtFarming_HTStake.new({from: accounts[2]});
		const addressKqC5cGj = accounts[2]
		const addressBHuXeHN = accounts[3]
		const uintHrPHwwI = BigInt("2020")
		const uintShEUjje = BigInt("431")
		const uintno8fo7X = BigInt("1254")
		const boolPFuGcSW = false
		const uintQSSRH39 = BigInt("894")
		const addressZEY7OT = await CourtFarming_HTStakeymH6nQ7.updateReward.call(addressKqC5cGj, {from: accounts[3]});
		const addressmxfuwlt = await CourtFarming_HTStakeymH6nQ7.updateReward.call(addressBHuXeHN, {from: accounts[2]});
		const uint256rYrLRjt = await CourtFarming_HTStakeymH6nQ7.incvRewardClaim.call({from: accounts[2]});
//		const uint256OFsujO4 = await CourtFarming_HTStakeymH6nQ7._stakeParametrsCalculation.call(uintno8fo7X, uintShEUjje, uintHrPHwwI, {from: accounts[2]});
//		const uint256vnVZ6Zt = await CourtFarming_HTStakeymH6nQ7.unstake.call(uintQSSRH39, boolPFuGcSW, {from: accounts[4]});

		assert.equal(uint256rYrLRjt, BigInt("0"))
		await expect(CourtFarming_HTStakeymH6nQ7._stakeParametrsCalculation.call(uintno8fo7X, uintShEUjje, uintHrPHwwI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeWZIIc08 = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintJJAaH3N = BigInt("274")
		const uintIduzyGg = BigInt("1028")
		const uintRMLZBIC = BigInt("1580")
		const uintLNxQ46g = BigInt("73")
		const addressdBWNjtA = accounts[1]
		const uint256GZQC53I = await CourtFarming_HTStakeWZIIc08.incvRewardInfo.call({from: accounts[0]});
//		const uint256bMYVjuB = await CourtFarming_HTStakeWZIIc08._stakeParametrsCalculation.call(uintRMLZBIC, uintIduzyGg, uintJJAaH3N, {from: accounts[4]});
//		const uint256u5eYNRW = await CourtFarming_HTStakeWZIIc08.stake.call(uintLNxQ46g, {from: accounts[0]});
//		const uint256IJItLg = await CourtFarming_HTStakeWZIIc08.balanceOf.call(addressdBWNjtA, {from: accounts[0]});

		await expect(CourtFarming_HTStakeWZIIc08._stakeParametrsCalculation.call(uintRMLZBIC, uintIduzyGg, uintJJAaH3N, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeXmV4qTl = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintKoMVrlB = BigInt("1857")
		const addressk2QnyTw = accounts[4]
		const addresshP0NSmK = accounts[1]
		const addresstOZxWzu = accounts[0]
		const uints7HNh5i = BigInt("1209")
		const uintN4EFDp2 = BigInt("1960")
		const uintHAcstc7 = BigInt("189")
		const boolQ16tw5a = await CourtFarming_HTStakeXmV4qTl.stakeIncvRewards.call(uintKoMVrlB, {from: accounts[2]});
		const addressj72Mmc5 = await CourtFarming_HTStakeXmV4qTl.updateReward.call(addressk2QnyTw, {from: accounts[2]});
		const uint256d8hUtz9 = await CourtFarming_HTStakeXmV4qTl.lastUpdateBlock.call({from: accounts[1]});
		const addressy3xEYpZ = await CourtFarming_HTStakeXmV4qTl.updateReward.call(addresshP0NSmK, {from: accounts[4]});
//		const addressSw4sT9T = await CourtFarming_HTStakeXmV4qTl.setCourtStake.call(addresstOZxWzu, {from: accounts[5]});
//		await CourtFarming_HTStakeXmV4qTl.changeStakeParameters.call(uintHAcstc7, uintN4EFDp2, uints7HNh5i, {from: accounts[4]});

		assert.equal(boolQ16tw5a, false)
		assert.equal(uint256d8hUtz9, BigInt("1793"))
		await expect(CourtFarming_HTStakeXmV4qTl.setCourtStake.call(addresstOZxWzu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeWZIIc08 = await CourtFarming_HTStake.new({from: accounts[5]});
		const uintUirB5aC = BigInt("73")
		const addressFelO0fP = accounts[1]
		const uint256GZQC53I = await CourtFarming_HTStakeWZIIc08.incvRewardInfo.call({from: accounts[0]});
//		const uint256u5eYNRW = await CourtFarming_HTStakeWZIIc08.stake.call(uintUirB5aC, {from: accounts[0]});
//		const uint256IJItLg = await CourtFarming_HTStakeWZIIc08.balanceOf.call(addressFelO0fP, {from: accounts[0]});

		await expect(CourtFarming_HTStakeWZIIc08.stake.call(uintUirB5aC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakegcO9SSM = await CourtFarming_HTStake.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxnkwO1b = BigInt("1881")
		const addressb7KVnbE = accounts[2]
		const uint256IfanOHx = await CourtFarming_HTStakegcO9SSM.expectedRewardsToday.call(uintxnkwO1b, {from: accounts[3]});
		const addresslMOiIVy = await CourtFarming_HTStakegcO9SSM.updateReward.call(addressb7KVnbE, {from: accounts[3]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakekhkKJaH = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressZeIuTWV = accounts[5]
		const uintlSi2BQL = BigInt("2007")
		const addressLbaXm7w = accounts[4]
		const boolI4jCmZ = true
		const uintfARmKB = BigInt("11")
		const addresspy5kXzP = await CourtFarming_HTStakekhkKJaH.getBeneficiaryInfo.call(addressZeIuTWV, {from: accounts[3]});
		const uint256ImR4FO3 = await CourtFarming_HTStakekhkKJaH.expectedRewardsToday.call(uintlSi2BQL, {from: accounts[1]});
		const addressIx1KHvf = await CourtFarming_HTStakekhkKJaH.updateReward.call(addressLbaXm7w, {from: accounts[4]});
		const uint256lEmah53 = await CourtFarming_HTStakekhkKJaH.totalStaked.call({from: accounts[3]});
//		const uint256qj1JVot = await CourtFarming_HTStakekhkKJaH.unstake.call(uintfARmKB, boolI4jCmZ, {from: accounts[0]});

		assert.equal(uint256lEmah53, BigInt("0"))
		await expect(CourtFarming_HTStakekhkKJaH.unstake.call(uintfARmKB, boolI4jCmZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeFpc14u7 = await CourtFarming_HTStake.new({from: accounts[3]});
		const uintJFiunWW = BigInt("0")
		const uintCe6da4m = BigInt("1444")
		const uintnIwLOCd = BigInt("1556")
		const uinte8ovQE = BigInt("537")
		const uint256tJuVuyY = await CourtFarming_HTStakeFpc14u7.incvRewardClaim.call({from: accounts[0]});
		const uint256eV5dd2H = await CourtFarming_HTStakeFpc14u7.stake.call(uintJFiunWW, {from: accounts[1]});
		const uint256zkcIAAj = await CourtFarming_HTStakeFpc14u7.incvRewardInfo.call({from: accounts[0]});
		const uint256rqgFMyy = await CourtFarming_HTStakeFpc14u7.incvRewardClaim.call({from: accounts[1]});
//		const uint256KiahCe7 = await CourtFarming_HTStakeFpc14u7.stake.call(uintCe6da4m, {from: accounts[2]});
//		const uint256BujnL2X = await CourtFarming_HTStakeFpc14u7.stake.call(uintnIwLOCd, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256F3mqTn = await CourtFarming_HTStakeFpc14u7.getCurrentTime.call({from: accounts[0]});
//		const uint256T65PK6d = await CourtFarming_HTStakeFpc14u7.expectedRewardsToday.call(uinte8ovQE, {from: accounts[1]});

		assert.equal(uint256rqgFMyy, BigInt("0"))
		assert.equal(uint256tJuVuyY, BigInt("0"))
		await expect(CourtFarming_HTStakeFpc14u7.stake.call(uintCe6da4m, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakekhkKJaH = await CourtFarming_HTStake.new({from: accounts[1]});
		const boolI4jCmZ = true
		const uintJJP4kwH = BigInt("0")
		const uint256qj1JVot = await CourtFarming_HTStakekhkKJaH.unstake.call(uintJJP4kwH, boolI4jCmZ, {from: accounts[0]});
		const uint256Dm8EBzw = await CourtFarming_HTStakekhkKJaH.incvRewardInfo.call({from: accounts[5]});
	});

	it('test for CourtFarming_HTStake', async () => {
		const CourtFarming_HTStakeaixPSYc = await CourtFarming_HTStake.new({from: accounts[1]});
		const addressY6IIvyQ = accounts[3]
		const uintCjNlsNS = BigInt("367")
		const uintAiXRg3W = BigInt("1271")
		const uintevixDD = BigInt("542")
		const uintVa4HBJA = BigInt("1429")
		const uintss2qZVJ = BigInt("1956")
		const uintSlQUat = BigInt("0")
		const addressYgaCu43 = await CourtFarming_HTStakeaixPSYc.updateReward.call(addressY6IIvyQ, {from: "0x0000000000000000000000000000000000000001"});
//		await CourtFarming_HTStakeaixPSYc.changeStakeParameters.call(uintevixDD, uintAiXRg3W, uintCjNlsNS, {from: accounts[1]});
//		const uint256Ow9Cgu = await CourtFarming_HTStakeaixPSYc.expectedRewardsToday.call(uintVa4HBJA, {from: accounts[4]});
//		const boolqBjWv6e = await CourtFarming_HTStakeaixPSYc.stakeIncvRewards.call(uintss2qZVJ, {from: accounts[3]});
//		const boolJZj7tjc = await CourtFarming_HTStakeaixPSYc.stakeIncvRewards.call(uintSlQUat, {from: accounts[2]});

		await expect(CourtFarming_HTStakeaixPSYc.changeStakeParameters.call(uintevixDD, uintAiXRg3W, uintCjNlsNS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})