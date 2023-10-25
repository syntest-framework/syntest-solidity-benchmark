const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressfDcgaeN = accounts[5]
		const addressWYbUlQO = accounts[1]
		const addressWj70ptw = accounts[1]
		const WolfStakingRewardsyGqOKOw = await WolfStakingRewards.new(addressfDcgaeN, addressWYbUlQO, addressWj70ptw, {from: accounts[2]});
		const uintdkiTwFg = BigInt("880")
		const uintcEBJWrk = BigInt("735")
		const addressNa1jAgW = accounts[3]
//		const uint256arrayPTHj71 = await WolfStakingRewardsyGqOKOw.updateNotifyRewardAmount.call(uintdkiTwFg, {from: accounts[2]});
//		await WolfStakingRewardsyGqOKOw.onlyRewardsDistribution.call({from: accounts[2]});
//		const uint256G7YK0xk = await WolfStakingRewardsyGqOKOw.balanceOfPerPool.call(addressNa1jAgW, uintcEBJWrk, {from: accounts[4]});

		await expect(WolfStakingRewardsyGqOKOw.updateNotifyRewardAmount.call(uintdkiTwFg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringXMGnXB3 = "YX4rty74qc2DVwA"
		const stringRy7QMKy = "QhSMls2wTBdZP94DoJs8lnZPttvA1uSRO2yjpEP7rBgLMLdvoRqelWILaodidVlfMLq8oqUmalWdaqOpm6zMKwC6fzqh"
		const uintDfO8dtR = BigInt("13")
		const WolfStakingRewardsfBZhuF = await WolfStakingRewards.new(stringXMGnXB3, stringRy7QMKy, uintDfO8dtR, {from: accounts[4]});
		const uintGLS0NBY = BigInt("1164")
		const uintuC3Ch66 = BigInt("1355")
		const stringkM09R8m = await WolfStakingRewardsfBZhuF.name.call({from: accounts[2]});
		const uint256n8jg1Ug = await WolfStakingRewardsfBZhuF.stake.call(uintuC3Ch66, uintGLS0NBY, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSgcHa4M = "Q9oqBWkKDOfv6aKVOWyIQTe3fVjK3x6o2bCuvXp1NpGQRDf24pmsvpoJ5FEITI3esrFs5cNBuSeCS1ChpIAham"
		const stringaxFEILL = "M6Y4yI8Tijft9zUBZDIz5mdk4QAo87NDi10ph73N"
		const uintzWH6tsB = BigInt("162")
		const WolfStakingRewardsf9URIL = await WolfStakingRewards.new(stringSgcHa4M, stringaxFEILL, uintzWH6tsB, {from: accounts[4]});
		const uintuVgE8RB = BigInt("165")
		const addressa4rMAPP = accounts[0]
		const uintVgv4evp = BigInt("1917")
		await WolfStakingRewardsf9URIL.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256tKKF4X = await WolfStakingRewardsf9URIL.earned.call(addressa4rMAPP, uintuVgE8RB, {from: accounts[5]});
		const uint256K6B54XT = await WolfStakingRewardsf9URIL.rewardPerToken.call(uintVgv4evp, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressnUVT1u = accounts[2]
		const addressD1RgTSx = accounts[2]
		const addressA4azoqQ = accounts[3]
		const WolfStakingRewardsZ049ZVT = await WolfStakingRewards.new(addressnUVT1u, addressD1RgTSx, addressA4azoqQ, {from: accounts[1]});
//		await WolfStakingRewardsZ049ZVT.onlyRewardsDistribution.call({from: accounts[0]});
//		await WolfStakingRewardsZ049ZVT.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
//		await WolfStakingRewardsZ049ZVT.onlyOwner.call({from: accounts[1]});

		await expect(WolfStakingRewardsZ049ZVT.onlyRewardsDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringPeegBi = "62yPOz5DrmwH9c4bJbvOX8YZwtWrMxmGlPbR43wJuXXrtKk9LrFEBF6WoaOwI6uL0cLd"
		const stringzHXmO8V = "Ekf23Sd1Ju2W3ZTWfAgG"
		const uintjIMR3kD = BigInt("56")
		const WolfStakingRewardsWqALFYL = await WolfStakingRewards.new(stringPeegBi, stringzHXmO8V, uintjIMR3kD, {from: accounts[3]});
		const uintETetXQk = BigInt("1515")
		const uinttlbfMOW = BigInt("1344")
		const uintf5feAkX = BigInt("792")
		const addressxdPqScL = accounts[0]
		const uint256GBtcUt3 = await WolfStakingRewardsWqALFYL.withdraw.call(uinttlbfMOW, uintETetXQk, {from: accounts[1]});
		const stringI077ax = await WolfStakingRewardsWqALFYL.symbol.call({from: accounts[2]});
		const stringxTIx3sQ = await WolfStakingRewardsWqALFYL.symbol.call({from: accounts[3]});
		const uint256qiXVU0N = await WolfStakingRewardsWqALFYL.balanceOfPerPool.call(addressxdPqScL, uintf5feAkX, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressGJZNGlK = accounts[5]
		const addressCPquHLj = accounts[4]
		const addressi3ZfES = accounts[2]
		const WolfStakingRewardsqpN5gLE = await WolfStakingRewards.new(addressGJZNGlK, addressCPquHLj, addressi3ZfES, {from: accounts[0]});
		const uintxJjDr5L = BigInt("1899")
		const addressee41iaA = accounts[4]
		const uintvyGtgHI = BigInt("859")
		const uinthKk2mvm = BigInt("1522")
		const uintwbEJVRU = BigInt("743")
		const addressICOcCd6 = accounts[2]
		const uint256hVEHyx = await WolfStakingRewardsqpN5gLE.balanceOfPerPool.call(addressee41iaA, uintxJjDr5L, {from: accounts[0]});
//		const uint8UFSGi6 = await WolfStakingRewardsqpN5gLE.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256T2Rdrux = await WolfStakingRewardsqpN5gLE.stake.call(uinthKk2mvm, uintvyGtgHI, {from: accounts[1]});
//		const uint256SJ5RsqC = await WolfStakingRewardsqpN5gLE.earned.call(addressICOcCd6, uintwbEJVRU, {from: accounts[1]});

		assert.equal(uint256hVEHyx, BigInt("0"))
		await expect(WolfStakingRewardsqpN5gLE.decimals.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringG4UdF2K = "SGFKhGRRVrNLbqTsgpSuwb6G9MK7jkpp2nYNdUo3UhGbph"
		const stringR3FIL8i = "7ATVZKxZqCjUAOmVT9q7hR32epgn5p6sXm5yGlSoUIMdBLHUNLjJxEp4hr4YARdAehnjOg9t5nSmxFl"
		const uintgz2QEQj = BigInt("27")
		const WolfStakingRewardsHmvfiwH = await WolfStakingRewards.new(stringG4UdF2K, stringR3FIL8i, uintgz2QEQj, {from: accounts[2]});
		const uintUZlv8U2 = BigInt("271")
		const addresst3uAus = accounts[5]
		const uintId8rcmB = BigInt("284")
		const uintiB1KL8y = BigInt("1723")
		await WolfStakingRewardsHmvfiwH.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256XJhsTZL = await WolfStakingRewardsHmvfiwH.balanceOfPerPool.call(addresst3uAus, uintUZlv8U2, {from: accounts[4]});
		const uint256arrayxLXXhTf = await WolfStakingRewardsHmvfiwH.updateNotifyRewardAmount.call(uintId8rcmB, {from: accounts[1]});
		const uintYwEZSVq = await WolfStakingRewardsHmvfiwH.getReward.call(uintiB1KL8y, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressszDdBiQ = accounts[3]
		const addresspT2Uc80 = accounts[1]
		const addressnUWmg5q = accounts[4]
		const WolfStakingRewardsY4IIE5e = await WolfStakingRewards.new(addressszDdBiQ, addresspT2Uc80, addressnUWmg5q, {from: accounts[4]});
		const uintki2qnc6 = BigInt("1207")
		const uintIkPnq3X = BigInt("176")
//		const uint256fT3NdOn = await WolfStakingRewardsY4IIE5e.withdrawRemainingBalance.call(uintIkPnq3X, uintki2qnc6, {from: accounts[1]});
//		await WolfStakingRewardsY4IIE5e.onlyOwner.call({from: accounts[4]});

		await expect(WolfStakingRewardsY4IIE5e.withdrawRemainingBalance.call(uintIkPnq3X, uintki2qnc6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressbS6T9Sw = accounts[1]
		const addressbnY6OtV = accounts[5]
		const addresszC0OMsY = accounts[2]
		const WolfStakingRewardsEHiYsR = await WolfStakingRewards.new(addressbS6T9Sw, addressbnY6OtV, addresszC0OMsY, {from: "0x0000000000000000000000000000000000000001"});
		const uintR4e0h1s = BigInt("837")
		const uintOa6DupK = BigInt("1647")
		const uinttdp5nLP = BigInt("2037")
		const uintkjhIFqs = BigInt("1130")
		const uintiG6QG5Y = await WolfStakingRewardsEHiYsR.getReward.call(uintR4e0h1s, {from: accounts[2]});
		const uint256R4fZoGq = await WolfStakingRewardsEHiYsR.totalSupplyPerPool.call(uintOa6DupK, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qrSfno = await WolfStakingRewardsEHiYsR.stake.call(uintkjhIFqs, uinttdp5nLP, {from: accounts[3]});
		await WolfStakingRewardsEHiYsR.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwNxBV1S = "KdeXqIMwh3LKta2dkahxLIxw1dNhEb"
		const stringE5kT0S8 = "fSEldLF5trLM21HVNP6YonIoR3yWRBSVyoLMuGx0PXLo4HydiZKODhcPkyKBrlTIWOUoVpPBAGfViaMLdry8pOC6cZuLEP"
		const uintXLNU93N = BigInt("1")
		const WolfStakingRewardsPQshHXA = await WolfStakingRewards.new(stringwNxBV1S, stringE5kT0S8, uintXLNU93N, {from: accounts[2]});
		const uintjUKoSrJ = BigInt("834")
		const uintJHSWf4L = BigInt("1634")
		const uint8vVOKfkJ = await WolfStakingRewardsPQshHXA.decimals.call({from: accounts[1]});
		const uint256arrayz3IgJuB = await WolfStakingRewardsPQshHXA.updateNotifyRewardAmount.call(uintjUKoSrJ, {from: accounts[0]});
		await WolfStakingRewardsPQshHXA.onlyRewardsDistribution.call({from: accounts[3]});
		await WolfStakingRewardsPQshHXA.onlyOwner.call({from: accounts[1]});
		const uint256mLcCEtB = await WolfStakingRewardsPQshHXA.totalSupplyPerPool.call(uintJHSWf4L, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnwZWQS2 = "UDBUTKkBqUViOvxE"
		const stringYS9swT = "AAiRO3NrTJZiDfCVUjsw2c2sY9NKUo"
		const uintDLMgtI5 = BigInt("26")
		const WolfStakingRewardsJFTjjxm = await WolfStakingRewards.new(stringnwZWQS2, stringYS9swT, uintDLMgtI5, {from: "0x0000000000000000000000000000000000000001"});
		const uintmrMHK9W = BigInt("142")
		const uintl0avxqd = BigInt("1865")
		const uintIc4yHHY = BigInt("2")
		const uintu0tUKu7 = BigInt("1636")
		const uintAmSk5rP = BigInt("1036")
		const uint256Yah3U5C = await WolfStakingRewardsJFTjjxm.stake.call(uintl0avxqd, uintmrMHK9W, {from: accounts[4]});
		const stringv6eSqTO = await WolfStakingRewardsJFTjjxm.symbol.call({from: accounts[3]});
		const uint256tVT4eNh = await WolfStakingRewardsJFTjjxm.lastTimeRewardApplicable.call(uintIc4yHHY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pJq3D13 = await WolfStakingRewardsJFTjjxm.totalSupplyPerPool.call(uintu0tUKu7, {from: accounts[1]});
		const uint256YT12VV0 = await WolfStakingRewardsJFTjjxm.exit.call(uintAmSk5rP, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressT7QRhec = accounts[4]
		const addressetMKDMG = accounts[3]
		const addressDZox3SD = accounts[3]
		const WolfStakingRewardsfnryIy2 = await WolfStakingRewards.new(addressT7QRhec, addressetMKDMG, addressDZox3SD, {from: accounts[0]});
		const uintLnF6dAf = BigInt("719")
		const uintn0rzlVt = BigInt("1524")
		const uintF98SH9O = BigInt("1144")
		const uintZ3pgnc0 = BigInt("409")
		const addresssMjOPXo = accounts[2]
		const uintVfuuibq = BigInt("718")
		const uintj7xWY71 = BigInt("1599")
//		const uint256Vs80Yob = await WolfStakingRewardsfnryIy2.exit.call(uintLnF6dAf, {from: accounts[2]});
//		const uint256UOQhd5W = await WolfStakingRewardsfnryIy2.stake.call(uintF98SH9O, uintn0rzlVt, {from: accounts[1]});
//		await WolfStakingRewardsfnryIy2.onlyOwner.call({from: accounts[4]});
//		const uint2565Y2eAb = await WolfStakingRewardsfnryIy2.balanceOfPerPool.call(addresssMjOPXo, uintZ3pgnc0, {from: accounts[4]});
//		const uint256mpz6SBI = await WolfStakingRewardsfnryIy2.withdrawRemainingBalance.call(uintj7xWY71, uintVfuuibq, {from: accounts[0]});

		await expect(WolfStakingRewardsfnryIy2.exit.call(uintLnF6dAf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressjSCbc4 = accounts[5]
		const addressm33SnMD = accounts[0]
		const addressyylootO = accounts[1]
		const WolfStakingRewardsJ13kyCk = await WolfStakingRewards.new(addressjSCbc4, addressm33SnMD, addressyylootO, {from: accounts[0]});
		const uintwYA10Ju = BigInt("577")
		const addressh9v8CUZ = accounts[0]
		const uint256CBMg8eK = await WolfStakingRewardsJ13kyCk.earned.call(addressh9v8CUZ, uintwYA10Ju, {from: accounts[5]});
//		const stringkd6EA3N = await WolfStakingRewardsJ13kyCk.symbol.call({from: accounts[4]});
//		await WolfStakingRewardsJ13kyCk.onlyRewardsDistribution.call({from: accounts[0]});
//		const uint8t9pfKw2 = await WolfStakingRewardsJ13kyCk.decimals.call({from: accounts[1]});
//		const uint8usao0S = await WolfStakingRewardsJ13kyCk.decimals.call({from: accounts[4]});

		assert.equal(uint256CBMg8eK, BigInt("0"))
		await expect(WolfStakingRewardsJ13kyCk.symbol.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringlbjRb6 = "a3KRuzEleG3lI8P6dY7nKzBS0mUpVNczXTiem2CAWsh6ZmU9eQ55RE1OaRe2JQXLPYsKI6JdjxrtiGI1oruebQd3a4Sm"
		const stringrRux2EQ = "25Hgd6f6dB5kNXKzexiZctnsHDr5xh18Rc6eGetJftBDxcuJXDOtSO"
		const uintDy2Kt4Z = BigInt("131")
		const WolfStakingRewardsJXqfdGP = await WolfStakingRewards.new(stringlbjRb6, stringrRux2EQ, uintDy2Kt4Z, {from: accounts[0]});
		const uintku3hF0J = BigInt("1522")
		const uintnwKQtLG = BigInt("596")
		const uintCUCBevq = BigInt("1354")
		const uint256qI7v0iU = await WolfStakingRewardsJXqfdGP.stake.call(uintnwKQtLG, uintku3hF0J, {from: accounts[0]});
		const uint256kZjWb87 = await WolfStakingRewardsJXqfdGP.rewardPerToken.call(uintCUCBevq, {from: accounts[3]});
		const uint8VcnfzS = await WolfStakingRewardsJXqfdGP.decimals.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjJ9Hbwm = "EFTpmFNnvPzq5J73RENa6Li8rV8aEBn1blg48RLovGHa4GUh8wfwmJOvCeYcQrroFMkGG2tdbBZDWxao48hQ"
		const stringC00HhK9 = "gP6fwd9l3sJkek5WMydPbFzrAy9rq642ClC"
		const uintiIJGF1F = BigInt("122")
		const WolfStakingRewardsr8BoItw = await WolfStakingRewards.new(stringjJ9Hbwm, stringC00HhK9, uintiIJGF1F, {from: accounts[0]});
		const uintSF0mGwG = BigInt("270")
		const uintqm0uRML = BigInt("1609")
		const addresszAKwh4d = accounts[1]
		const uintqCsZJPA = BigInt("1561")
		const uintIJhZF0N = BigInt("305")
		const uintcsRyYJ = BigInt("1176")
		const uintK4Kx57q = BigInt("1771")
		const uintG63FvHI = BigInt("1847")
		const uintM1tWyaN = await WolfStakingRewardsr8BoItw.getReward.call(uintSF0mGwG, {from: accounts[4]});
		const uint256jPXWn9P = await WolfStakingRewardsr8BoItw.balanceOfPerPool.call(addresszAKwh4d, uintqm0uRML, {from: accounts[1]});
		const uint256arx25h = await WolfStakingRewardsr8BoItw.rewardPerToken.call(uintqCsZJPA, {from: accounts[3]});
		const uint256B2q2eAn = await WolfStakingRewardsr8BoItw.withdrawRemainingBalance.call(uintcsRyYJ, uintIJhZF0N, {from: accounts[0]});
		const uint256nm04uKQ = await WolfStakingRewardsr8BoItw.stake.call(uintG63FvHI, uintK4Kx57q, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressWpTR66m = accounts[5]
		const address97YzoD = accounts[0]
		const addressM0W0x8m = accounts[1]
		const WolfStakingRewardsJ13kyCk = await WolfStakingRewards.new(addressWpTR66m, address97YzoD, addressM0W0x8m, {from: accounts[0]});
		const uintGMhSGl5 = BigInt("577")
		const addressMW2GQod = accounts[0]
		const uintdnachV9 = BigInt("525")
		const uint256CBMg8eK = await WolfStakingRewardsJ13kyCk.earned.call(addressMW2GQod, uintGMhSGl5, {from: accounts[5]});
		const uint256xi5hAJe = await WolfStakingRewardsJ13kyCk.lastTimeRewardApplicable.call(uintdnachV9, {from: accounts[0]});
//		await WolfStakingRewardsJ13kyCk.onlyRewardsDistribution.call({from: accounts[0]});
//		const uint8t9pfKw2 = await WolfStakingRewardsJ13kyCk.decimals.call({from: accounts[1]});
//		const uint8usao0S = await WolfStakingRewardsJ13kyCk.decimals.call({from: accounts[4]});

		assert.equal(uint256CBMg8eK, BigInt("0"))
		assert.equal(uint256xi5hAJe, BigInt("0"))
		await expect(WolfStakingRewardsJ13kyCk.onlyRewardsDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringbzeBU1A = "HB6EbcLuaFysze4wuxgXaxBCoEgrNpRjjgBwVtbYp"
		const stringoxJzfz = "4qJ6t"
		const uintQdHMtit = BigInt("18")
		const WolfStakingRewardskYRoACa = await WolfStakingRewards.new(stringbzeBU1A, stringoxJzfz, uintQdHMtit, {from: accounts[1]});
		const uinthK6LsnD = BigInt("897")
		const uintirhA1jZ = BigInt("420")
		const uintoTeJhA = BigInt("1013")
		const uintzC9PM4O = BigInt("727")
		const uintFDlp0HE = BigInt("1579")
		const uint256tNjcygW = await WolfStakingRewardskYRoACa.lastTimeRewardApplicable.call(uinthK6LsnD, {from: accounts[1]});
		const uint256arraycuT75oO = await WolfStakingRewardskYRoACa.updateNotifyRewardAmount.call(uintirhA1jZ, {from: accounts[1]});
		const uint256m4R86aO = await WolfStakingRewardskYRoACa.lastTimeRewardApplicable.call(uintoTeJhA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256I5RRux2 = await WolfStakingRewardskYRoACa.withdraw.call(uintFDlp0HE, uintzC9PM4O, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrFTYUoQ = "ZJWN8AteOpe9eyyAiaaAqV88S4XL7nVnmhkqtSK2EHPopKAtj6g1FCqppqKbbuWE5HLlhRxobBMvdNO2lPNV9qf"
		const stringlHXzzsc = "1c4zGjE"
		const uintVYJ2SqC = BigInt("23")
		const WolfStakingRewardsL9yhs1C = await WolfStakingRewards.new(stringrFTYUoQ, stringlHXzzsc, uintVYJ2SqC, {from: accounts[0]});
		const uintb2MNxYT = BigInt("1833")
		const uinthDFUtKC = BigInt("645")
		const uintFY1oT5 = BigInt("95")
		const uintu8qOMGc = BigInt("1610")
		const uintXVIDCM = await WolfStakingRewardsL9yhs1C.getReward.call(uintb2MNxYT, {from: accounts[3]});
		await WolfStakingRewardsL9yhs1C.onlyRewardsDistribution.call({from: accounts[1]});
		await WolfStakingRewardsL9yhs1C.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256mOyBYJd = await WolfStakingRewardsL9yhs1C.withdrawRemainingBalance.call(uintFY1oT5, uinthDFUtKC, {from: accounts[0]});
		const uint256fvNAiXV = await WolfStakingRewardsL9yhs1C.totalSupplyPerPool.call(uintu8qOMGc, {from: accounts[1]});
		const uint8kFmgBj1 = await WolfStakingRewardsL9yhs1C.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringOXy6Mrb = "JVnwyhoico93tyHFatvI9O1rHSwTva"
		const stringecNjgY = "WwMmNMNKzdzXR9vOYoz7CVN3FNwkhQfPwz8b3B92"
		const uintv6aZSCd = BigInt("173")
		const WolfStakingRewardsQcDAWXO = await WolfStakingRewards.new(stringOXy6Mrb, stringecNjgY, uintv6aZSCd, {from: accounts[3]});
		const uintKG3Q3i8 = BigInt("144")
		const uintwEmHwRo = BigInt("1537")
		const uint256Ek3PFit = await WolfStakingRewardsQcDAWXO.getRewardForDuration.call(uintKG3Q3i8, {from: accounts[2]});
		const uint8Vx5WJPo = await WolfStakingRewardsQcDAWXO.decimals.call({from: accounts[3]});
		await WolfStakingRewardsQcDAWXO.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256Fn61Ssv = await WolfStakingRewardsQcDAWXO.getRewardForDuration.call(uintwEmHwRo, {from: accounts[3]});
		const stringENcEr4k = await WolfStakingRewardsQcDAWXO.name.call({from: accounts[5]});
		const stringzRU2Pc = await WolfStakingRewardsQcDAWXO.symbol.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLHmIznC = "6iclV3FiMzh4bx8iJMYnLWMaBtYLSlL9YTmtLYmLGa7z9OJw"
		const stringLqp4qWM = "vL1C0UyB"
		const uintXcTAE9T = BigInt("237")
		const WolfStakingRewardsMlUbcW = await WolfStakingRewards.new(stringLHmIznC, stringLqp4qWM, uintXcTAE9T, {from: accounts[1]});
		const uintVeWwfD = BigInt("19")
		const addressmq1qYzv = accounts[1]
		const uinthMUTapf = BigInt("635")
		const addresshHGQYe = accounts[1]
		const uintS2T4DXE = BigInt("449")
		const uint256uoGOdQy = await WolfStakingRewardsMlUbcW.balanceOfPerPool.call(addressmq1qYzv, uintVeWwfD, {from: accounts[2]});
		await WolfStakingRewardsMlUbcW.nonReentrant.call({from: accounts[3]});
		await WolfStakingRewardsMlUbcW.nonReentrant.call({from: accounts[2]});
		const uint256zsVHSuC = await WolfStakingRewardsMlUbcW.earned.call(addresshHGQYe, uinthMUTapf, {from: accounts[5]});
		const uint256ktwe0Vj = await WolfStakingRewardsMlUbcW.rewardPerToken.call(uintS2T4DXE, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressLfPPOqC = accounts[5]
		const addressDNHgF3 = accounts[0]
		const addressGCIbLiF = accounts[1]
		const WolfStakingRewardsJ13kyCk = await WolfStakingRewards.new(addressLfPPOqC, addressDNHgF3, addressGCIbLiF, {from: accounts[0]});
		const uintCL2bE6G = BigInt("589")
		const addressIqdWKqn = accounts[1]
		const uinttGKh4ua = BigInt("1231")
		const uintn6wOpkm = BigInt("1332")
		const uint256CBMg8eK = await WolfStakingRewardsJ13kyCk.earned.call(addressIqdWKqn, uintCL2bE6G, {from: accounts[5]});
//		const uint256OoX7Z7k = await WolfStakingRewardsJ13kyCk.withdrawRemainingBalance.call(uintn6wOpkm, uinttGKh4ua, {from: accounts[0]});
//		await WolfStakingRewardsJ13kyCk.onlyRewardsDistribution.call({from: accounts[0]});
//		const uint8usao0S = await WolfStakingRewardsJ13kyCk.decimals.call({from: accounts[4]});

		assert.equal(uint256CBMg8eK, BigInt("0"))
		await expect(WolfStakingRewardsJ13kyCk.withdrawRemainingBalance.call(uintn6wOpkm, uinttGKh4ua, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringkpM3ZVf = "nz1Gyq2sHiAyvsU4Q87JHfdYFpHDUjKwjs4bV3dhNhibS3xKawKTovxdzBpE"
		const stringyoeEFI0 = "FOk579lV8L7CdQXLyMplgPpozwdHMgeMe8tj8IXdehAp8rBzbfyIOLE2IQ2nUnkllCDISY2vbPq2otk7DT8qHF8rF14cw"
		const uintR08ChlF = BigInt("198")
		const WolfStakingRewards65jZ3m = await WolfStakingRewards.new(stringkpM3ZVf, stringyoeEFI0, uintR08ChlF, {from: accounts[1]});
		const uintG5Ha2mn = BigInt("38")
		const uintrJ2KfRg = BigInt("872")
		const uintFbJapvg = BigInt("1147")
		const uint5IKKdV = BigInt("1206")
		const uintqLscEl9 = BigInt("277")
		const uintRf6CGCn = BigInt("473")
		const uint256TVBq8ue = await WolfStakingRewards65jZ3m.exit.call(uintG5Ha2mn, {from: accounts[4]});
		const stringp4mB5Bd = await WolfStakingRewards65jZ3m.symbol.call({from: accounts[0]});
		const uint256WH2J0QV = await WolfStakingRewards65jZ3m.getRewardForDuration.call(uintrJ2KfRg, {from: accounts[3]});
		const uint256qREkeG4 = await WolfStakingRewards65jZ3m.withdrawRemainingBalance.call(uint5IKKdV, uintFbJapvg, {from: accounts[5]});
		const uint256RXShwfi = await WolfStakingRewards65jZ3m.withdrawRemainingBalance.call(uintRf6CGCn, uintqLscEl9, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressJVq8S0M = accounts[4]
		const addressIaoKDbf = accounts[3]
		const addressjQJCuv9 = accounts[1]
		const WolfStakingRewardsP61KY54 = await WolfStakingRewards.new(addressJVq8S0M, addressIaoKDbf, addressjQJCuv9, {from: accounts[0]});
		const uintQEwVVwh = BigInt("678")
		const uintH2RM5gB = BigInt("1425")
		const uintyI8Anf0 = BigInt("85")
		const uint256B72TUBN = await WolfStakingRewardsP61KY54.lastTimeRewardApplicable.call(uintQEwVVwh, {from: accounts[3]});
		const uintAFP6aiA = await WolfStakingRewardsP61KY54.getReward.call(uintH2RM5gB, {from: accounts[0]});
//		await WolfStakingRewardsP61KY54.onlyRewardsDistribution.call({from: accounts[0]});
//		const uint256ILtQcEQ = await WolfStakingRewardsP61KY54.totalSupplyPerPool.call(uintyI8Anf0, {from: accounts[5]});

		assert.equal(uint256B72TUBN, BigInt("0"))
		await expect(WolfStakingRewardsP61KY54.onlyRewardsDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringfqFh19F = "lnQha9106NwdRoiYkTrrPOuAn2z9pIzNOioSSXpP9mLQOsn7izkEAawCl"
		const stringdMXMtLw = "OMrs4yPYgnOaOCEi8yn8p9uCPW5RFxtT4LnAztRc6Nndnargvcd3FIc"
		const uintJ1Pqgfu = BigInt("15")
		const WolfStakingRewardsrqnVOx = await WolfStakingRewards.new(stringfqFh19F, stringdMXMtLw, uintJ1Pqgfu, {from: accounts[0]});
		const uintiwxs0jy = BigInt("101")
		const uintPt9HCsJ = BigInt("1316")
		const uintZmer4n4 = BigInt("1171")
		const uintifAsoih = BigInt("80")
		const uint256WUAgePV = await WolfStakingRewardsrqnVOx.withdraw.call(uintPt9HCsJ, uintiwxs0jy, {from: accounts[1]});
		await WolfStakingRewardsrqnVOx.nonReentrant.call({from: accounts[2]});
		const uint256NOXk7hR = await WolfStakingRewardsrqnVOx.withdraw.call(uintifAsoih, uintZmer4n4, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressDDfpx5W = accounts[2]
		const addressZnTNqXR = accounts[2]
		const addressekFjLCA = accounts[1]
		const WolfStakingRewardsVwIOZX4 = await WolfStakingRewards.new(addressDDfpx5W, addressZnTNqXR, addressekFjLCA, {from: accounts[1]});
		const uintuTMpJaq = BigInt("1374")
		const uintJjcbD2a = BigInt("522")
		const uintptnmkL1 = BigInt("372")
		const uintVZyntC3 = BigInt("779")
		const uintg4vSxZM = BigInt("1908")
//		const uint256fZ37JUL = await WolfStakingRewardsVwIOZX4.getRewardForDuration.call(uintuTMpJaq, {from: accounts[1]});
//		const stringUb87QIt = await WolfStakingRewardsVwIOZX4.name.call({from: accounts[2]});
//		const uintdvDCJ9L = await WolfStakingRewardsVwIOZX4.getReward.call(uintJjcbD2a, {from: accounts[2]});
//		const uint256eRqf23 = await WolfStakingRewardsVwIOZX4.withdraw.call(uintVZyntC3, uintptnmkL1, {from: accounts[4]});
//		const uintA0dCoBI = await WolfStakingRewardsVwIOZX4.getReward.call(uintg4vSxZM, {from: accounts[0]});
//		const stringhxB1Tn5 = await WolfStakingRewardsVwIOZX4.symbol.call({from: accounts[3]});

		await expect(WolfStakingRewardsVwIOZX4.getRewardForDuration.call(uintuTMpJaq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringplRJ4G = "3xv16QPCfxfRP1zuedpl593Sk9HdRTGRYfX4YzH6xXyHxQ2voooseB2w8NT2uuZ022Z9n4FSlzc4U3qNbnZOpCdGqlUzHbDPt38"
		const stringonC2i4 = "WVH"
		const uintXsAPwxH = BigInt("60")
		const WolfStakingRewardstibtTNr = await WolfStakingRewards.new(stringplRJ4G, stringonC2i4, uintXsAPwxH, {from: "0x0000000000000000000000000000000000000001"});
		const uintwzQ8ID = BigInt("229")
		const uintC0NRdBR = BigInt("910")
		const uintuJYIWUf = BigInt("943")
		const uint256dh8QEA3 = await WolfStakingRewardstibtTNr.exit.call(uintwzQ8ID, {from: accounts[3]});
		const uint256xLd3vWS = await WolfStakingRewardstibtTNr.stake.call(uintuJYIWUf, uintC0NRdBR, {from: accounts[1]});
		const stringAMoLCb6 = await WolfStakingRewardstibtTNr.symbol.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const address3x7spV = accounts[5]
		const addressv9w0gR9 = accounts[0]
		const addressFehuUp0 = accounts[1]
		const WolfStakingRewardsJ13kyCk = await WolfStakingRewards.new(address3x7spV, addressv9w0gR9, addressFehuUp0, {from: accounts[0]});
		const uintnxwNhOb = BigInt("577")
		const addressNQ5neSk = accounts[0]
		const uinta0cVE2x = BigInt("1252")
		const addressm4ItiT8 = accounts[0]
		const uintUUlUSrq = BigInt("1204")
		const uinteuJqVM = BigInt("1753")
		const uintWc24XJB = BigInt("1561")
		const uint69b1kG = BigInt("1838")
		const uint256CBMg8eK = await WolfStakingRewardsJ13kyCk.earned.call(addressNQ5neSk, uintnxwNhOb, {from: accounts[5]});
		const uint256Om9q2ze = await WolfStakingRewardsJ13kyCk.balanceOfPerPool.call(addressm4ItiT8, uinta0cVE2x, {from: accounts[5]});
//		const uint256uDz0qcH = await WolfStakingRewardsJ13kyCk.stake.call(uinteuJqVM, uintUUlUSrq, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8usao0S = await WolfStakingRewardsJ13kyCk.decimals.call({from: accounts[4]});
//		const uint256kzEd5HM = await WolfStakingRewardsJ13kyCk.stake.call(uint69b1kG, uintWc24XJB, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256CBMg8eK, BigInt("0"))
		assert.equal(uint256Om9q2ze, BigInt("0"))
		await expect(WolfStakingRewardsJ13kyCk.stake.call(uinteuJqVM, uintUUlUSrq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringhzkZoa8 = "zHAbMI"
		const stringLyPj7IW = "gKRY3HmIUvlpuDdP23mQ0ezobIdetwj1uQF98xhckyQgRRE"
		const uintXFkbQoQ = BigInt("163")
		const WolfStakingRewardsKL50FYq = await WolfStakingRewards.new(stringhzkZoa8, stringLyPj7IW, uintXFkbQoQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintG2HgD0 = BigInt("1199")
		const uintqCxxE6 = BigInt("1731")
		const uintxjs7Saa = BigInt("2003")
		const uintejJYMvP = BigInt("1729")
		const addresseKBEpn8 = accounts[4]
		const uint8kzf0XH4 = await WolfStakingRewardsKL50FYq.decimals.call({from: accounts[3]});
		const uint256CEQIY4 = await WolfStakingRewardsKL50FYq.lastTimeRewardApplicable.call(uintG2HgD0, {from: accounts[5]});
		const uint256bL9DtnU = await WolfStakingRewardsKL50FYq.withdraw.call(uintxjs7Saa, uintqCxxE6, {from: accounts[0]});
		const uint256nxAlZmL = await WolfStakingRewardsKL50FYq.earned.call(addresseKBEpn8, uintejJYMvP, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressPwJWqvr = accounts[5]
		const addressuZRwGXc = accounts[0]
		const addressZ8Cbjz = accounts[1]
		const WolfStakingRewardsJ13kyCk = await WolfStakingRewards.new(addressPwJWqvr, addressuZRwGXc, addressZ8Cbjz, {from: accounts[0]});
		const uintKHWChOS = BigInt("141")
		const uintnGMqA7 = BigInt("547")
		const addressDV1fXp0 = accounts[3]
		const uintqqP6IM2 = BigInt("209")
		const uint256kye4u7C = await WolfStakingRewardsJ13kyCk.lastTimeRewardApplicable.call(uintKHWChOS, {from: accounts[4]});
		const uint256CBMg8eK = await WolfStakingRewardsJ13kyCk.earned.call(addressDV1fXp0, uintnGMqA7, {from: accounts[5]});
		const uint256OSlGLaP = await WolfStakingRewardsJ13kyCk.totalSupplyPerPool.call(uintqqP6IM2, {from: accounts[1]});
//		const uint8usao0S = await WolfStakingRewardsJ13kyCk.decimals.call({from: accounts[4]});

		assert.equal(uint256CBMg8eK, BigInt("0"))
		assert.equal(uint256OSlGLaP, BigInt("0"))
		assert.equal(uint256kye4u7C, BigInt("0"))
		await expect(WolfStakingRewardsJ13kyCk.decimals.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressZxYpOdm = accounts[5]
		const addressldy2Q1 = accounts[0]
		const addresshtgGIG8 = accounts[1]
		const WolfStakingRewardsJ13kyCk = await WolfStakingRewards.new(addressZxYpOdm, addressldy2Q1, addresshtgGIG8, {from: accounts[0]});
		const uintyMUain6 = BigInt("1190")
		const uintYJUDHp6 = BigInt("1206")
		const uintkuOdqMo = BigInt("786")
		const uintrzvEDpv = BigInt("577")
		const addressJaITvLC = accounts[0]
		const uintW9pZOty = BigInt("1252")
		const addressbXF62NV = accounts[5]
		const uintqgRShHR = BigInt("1204")
		const uintoelaO3P = BigInt("1753")
		const uintUj3CMkC = BigInt("1561")
		const uintRSpBx7o = BigInt("1838")
		const uintLiSIjkM = await WolfStakingRewardsJ13kyCk.getReward.call(uintyMUain6, {from: accounts[1]});
//		const uint256Lvlx0ni = await WolfStakingRewardsJ13kyCk.exit.call(uintYJUDHp6, {from: accounts[3]});
//		const uint256AXAr6Fw = await WolfStakingRewardsJ13kyCk.getRewardForDuration.call(uintkuOdqMo, {from: accounts[4]});
//		const uint256CBMg8eK = await WolfStakingRewardsJ13kyCk.earned.call(addressJaITvLC, uintrzvEDpv, {from: accounts[5]});
//		const uint256Om9q2ze = await WolfStakingRewardsJ13kyCk.balanceOfPerPool.call(addressbXF62NV, uintW9pZOty, {from: accounts[5]});
//		const uint256uDz0qcH = await WolfStakingRewardsJ13kyCk.stake.call(uintoelaO3P, uintqgRShHR, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8usao0S = await WolfStakingRewardsJ13kyCk.decimals.call({from: accounts[4]});
//		const uint256kzEd5HM = await WolfStakingRewardsJ13kyCk.stake.call(uintRSpBx7o, uintUj3CMkC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WolfStakingRewardsJ13kyCk.exit.call(uintYJUDHp6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringcmM8gAO = "Fm"
		const stringRjJgAf = "jpIPxJa9U"
		const uinttLvAyJL = BigInt("42")
		const WolfStakingRewardswZTVSn9 = await WolfStakingRewards.new(stringcmM8gAO, stringRjJgAf, uinttLvAyJL, {from: accounts[1]});
		const uintWeNTgOf = BigInt("1351")
		const uintBxm1DAB = BigInt("488")
		const uintG9iTX7c = BigInt("1311")
		const uintBs1BXPQ = BigInt("743")
		const uintpQVYHm = BigInt("2019")
		const uint256PYa0Xmv = await WolfStakingRewardswZTVSn9.withdraw.call(uintBxm1DAB, uintWeNTgOf, {from: accounts[1]});
		const uint256o9XXYkV = await WolfStakingRewardswZTVSn9.withdrawRemainingBalance.call(uintBs1BXPQ, uintG9iTX7c, {from: accounts[2]});
		const uint256atvnZYu = await WolfStakingRewardswZTVSn9.totalSupplyPerPool.call(uintpQVYHm, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressk9x9Du = accounts[5]
		const addressq3VgVNR = accounts[0]
		const addressERIMvh = accounts[1]
		const WolfStakingRewardsJ13kyCk = await WolfStakingRewards.new(addressk9x9Du, addressq3VgVNR, addressERIMvh, {from: accounts[0]});
		const uintPXmkR1K = BigInt("1322")
		const uintTeG4dIc = BigInt("1234")
		const uintxZAQsxj = BigInt("1448")
		const uint9pKErt = BigInt("577")
		const addressbIIv16W = accounts[0]
		const uint256jThOqvX = await WolfStakingRewardsJ13kyCk.totalSupplyPerPool.call(uintPXmkR1K, {from: accounts[1]});
//		const uint256kFZUkvs = await WolfStakingRewardsJ13kyCk.withdraw.call(uintxZAQsxj, uintTeG4dIc, {from: accounts[3]});
//		const uint256CBMg8eK = await WolfStakingRewardsJ13kyCk.earned.call(addressbIIv16W, uint9pKErt, {from: accounts[5]});
//		const uint8usao0S = await WolfStakingRewardsJ13kyCk.decimals.call({from: accounts[4]});

		assert.equal(uint256jThOqvX, BigInt("0"))
		await expect(WolfStakingRewardsJ13kyCk.withdraw.call(uintxZAQsxj, uintTeG4dIc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressA65HSpT = accounts[3]
		const addressRfdRkaL = accounts[5]
		const addressLvsFCXJ = accounts[0]
		const WolfStakingRewardslFznt2O = await WolfStakingRewards.new(addressA65HSpT, addressRfdRkaL, addressLvsFCXJ, {from: accounts[3]});
		const uinteg079P2 = BigInt("670")
		const uintbWFzVd3 = BigInt("1308")
		const uinthL2eAcE = BigInt("1517")
		const addresssERexS3 = accounts[0]
		const uintLKK59Sm = BigInt("1055")
		const addresswVawVhv = accounts[6]
		const uintBuabvhJ = await WolfStakingRewardslFznt2O.getReward.call(uinteg079P2, {from: accounts[2]});
//		const uint256ZkmWI6W = await WolfStakingRewardslFznt2O.getRewardForDuration.call(uintbWFzVd3, {from: accounts[1]});
//		await WolfStakingRewardslFznt2O.onlyOwner.call({from: accounts[4]});
//		const uint256ejAhr1c = await WolfStakingRewardslFznt2O.balanceOfPerPool.call(addresssERexS3, uinthL2eAcE, {from: accounts[4]});
//		const uint256GLQ37UM = await WolfStakingRewardslFznt2O.balanceOfPerPool.call(addresswVawVhv, uintLKK59Sm, {from: accounts[5]});

		await expect(WolfStakingRewardslFznt2O.getRewardForDuration.call(uintbWFzVd3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressdDnaVPI = accounts[5]
		const addressPs3nMWi = accounts[0]
		const addressZptzhsW = accounts[1]
		const WolfStakingRewardsJ13kyCk = await WolfStakingRewards.new(addressdDnaVPI, addressPs3nMWi, addressZptzhsW, {from: accounts[0]});
		const uintdcvHQy2 = BigInt("577")
		const addressuHksrkC = accounts[0]
		const uinthwv0Dec = BigInt("1252")
		const addressJ7y0F1b = accounts[0]
		const uintcnj5f0A = BigInt("1946")
		const uintOtHA7TV = BigInt("1334")
		const uintwZMiQ04 = BigInt("1753")
		const uintbVO99Y0 = BigInt("713")
		const uintv8ay2GP = BigInt("1248")
		const uint4fPn9b = BigInt("1561")
		const uintgbPuVq3 = BigInt("1838")
		const uintayj59wG = BigInt("791")
		const uint256CBMg8eK = await WolfStakingRewardsJ13kyCk.earned.call(addressuHksrkC, uintdcvHQy2, {from: accounts[5]});
		const uint256Om9q2ze = await WolfStakingRewardsJ13kyCk.balanceOfPerPool.call(addressJ7y0F1b, uinthwv0Dec, {from: accounts[5]});
		const uintrtIyEi8 = await WolfStakingRewardsJ13kyCk.getReward.call(uintcnj5f0A, {from: accounts[2]});
//		const uint256uDz0qcH = await WolfStakingRewardsJ13kyCk.stake.call(uintwZMiQ04, uintOtHA7TV, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256mcCYQFl = await WolfStakingRewardsJ13kyCk.withdrawRemainingBalance.call(uintv8ay2GP, uintbVO99Y0, {from: accounts[1]});
//		const uint8usao0S = await WolfStakingRewardsJ13kyCk.decimals.call({from: accounts[4]});
//		const uint256kzEd5HM = await WolfStakingRewardsJ13kyCk.stake.call(uintgbPuVq3, uint4fPn9b, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256VS8Cl8d = await WolfStakingRewardsJ13kyCk.lastTimeRewardApplicable.call(uintayj59wG, {from: accounts[0]});

		assert.equal(uint256CBMg8eK, BigInt("0"))
		assert.equal(uint256Om9q2ze, BigInt("0"))
		await expect(WolfStakingRewardsJ13kyCk.stake.call(uintwZMiQ04, uintOtHA7TV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringiGHrtIX = "YQwrW8H3Odzrp6"
		const stringMmRgWb7 = "JQy2hfcX9JK7y5vNJBhIiWlMWzJTRMsiL6EaG1f8nkCgQXpRnNtWWuhgRSJsaCUygTx4JUg"
		const uintH6pT2oT = BigInt("120")
		const WolfStakingRewardsJte8kF = await WolfStakingRewards.new(stringiGHrtIX, stringMmRgWb7, uintH6pT2oT, {from: accounts[0]});
		const uintLbng62m = BigInt("1701")
		const uintHl1kbsc = BigInt("1183")
		const uintEjB5MYb = BigInt("561")
		const uintPNXA9lG = BigInt("994")
		const addressLD62GL2 = "0x0000000000000000000000000000000000000001"
		const uint256fTMNKy2 = await WolfStakingRewardsJte8kF.totalSupplyPerPool.call(uintLbng62m, {from: accounts[4]});
		const uint256B08Zar3 = await WolfStakingRewardsJte8kF.stake.call(uintEjB5MYb, uintHl1kbsc, {from: accounts[5]});
		const uint256mPuK48U = await WolfStakingRewardsJte8kF.earned.call(addressLD62GL2, uintPNXA9lG, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressqrFeBlJ = accounts[3]
		const addresskDaSlhd = accounts[5]
		const addressTUBH7P = accounts[0]
		const WolfStakingRewardslFznt2O = await WolfStakingRewards.new(addressqrFeBlJ, addresskDaSlhd, addressTUBH7P, {from: accounts[3]});
		const uintgVgUSIj = BigInt("1042")
		const uintfcJmAo2 = BigInt("103")
		const uintX8TZ0ho = BigInt("2016")
		const uintBuabvhJ = await WolfStakingRewardslFznt2O.getReward.call(uintgVgUSIj, {from: accounts[2]});
//		const uint256Vh6oQk6 = await WolfStakingRewardslFznt2O.withdraw.call(uintX8TZ0ho, uintfcJmAo2, {from: accounts[2]});

		await expect(WolfStakingRewardslFznt2O.withdraw.call(uintX8TZ0ho, uintfcJmAo2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringHZV2gqR = "Ow3SNXkb5OzbBoYpkabMGU5T7m9h3XVqaoR53yJH8lELQ57cryUGUumMxafQQxUqgMX7TN8l"
		const stringb56RUdP = "ah437x6wCb"
		const uintVNmd7SP = BigInt("106")
		const WolfStakingRewardsCOT6IcF = await WolfStakingRewards.new(stringHZV2gqR, stringb56RUdP, uintVNmd7SP, {from: accounts[0]});
		const uintgjrTmSK = BigInt("1260")
		const addressdeMqIaV = accounts[0]
		const uinthqwUftp = BigInt("1729")
		const uintKpyCTXk = BigInt("1396")
		const uintYuhojFA = BigInt("1575")
		const uintmmbYTRt = BigInt("206")
		await WolfStakingRewardsCOT6IcF.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8lDXGquT = await WolfStakingRewardsCOT6IcF.decimals.call({from: accounts[5]});
		const uint256lD8dxPB = await WolfStakingRewardsCOT6IcF.earned.call(addressdeMqIaV, uintgjrTmSK, {from: accounts[0]});
		const uint256arrayTL4OWNl = await WolfStakingRewardsCOT6IcF.updateNotifyRewardAmount.call(uinthqwUftp, {from: accounts[0]});
		const uint256gtLlk9V = await WolfStakingRewardsCOT6IcF.lastTimeRewardApplicable.call(uintKpyCTXk, {from: accounts[4]});
		const uint256sSF7NLT = await WolfStakingRewardsCOT6IcF.withdrawRemainingBalance.call(uintmmbYTRt, uintYuhojFA, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringf6nRZFF = "NjwsacWFsUS5lhCXmGyxGXmvsUo1uSuEmKDO77NBCf6vOXiXgNroVgNU285mGLkS5bmDLJ8J9O"
		const stringdiMhpnX = "maO3MlJcZeKnpdni8g"
		const uintRGEiN1q = BigInt("43")
		const WolfStakingRewardsAW0vRgT = await WolfStakingRewards.new(stringf6nRZFF, stringdiMhpnX, uintRGEiN1q, {from: accounts[5]});
		const uintosMcE6k = BigInt("615")
		const uintPZoG7km = BigInt("1779")
		const uintD8CTECt = BigInt("877")
		const uintFTeHrUv = BigInt("1034")
		const uint256FX7P9G = await WolfStakingRewardsAW0vRgT.exit.call(uintosMcE6k, {from: accounts[1]});
		const uintviJ09Ms = await WolfStakingRewardsAW0vRgT.getReward.call(uintPZoG7km, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GIQE7Ya = await WolfStakingRewardsAW0vRgT.rewardPerToken.call(uintD8CTECt, {from: accounts[1]});
		const uint256bJrUrgG = await WolfStakingRewardsAW0vRgT.lastTimeRewardApplicable.call(uintFTeHrUv, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsDaA4v8 = "LAZIuQ3cH1OBhjGu1VAeIj2oXHuPN2ohrVp8XaphdLlLEw1F"
		const stringBAJu02j = "O"
		const uintJ4VnCr = BigInt("89")
		const WolfStakingRewardsNQ1cWid = await WolfStakingRewards.new(stringsDaA4v8, stringBAJu02j, uintJ4VnCr, {from: accounts[3]});
		const uintrXjogwG = BigInt("1271")
		const addressayKWvi = accounts[4]
		const uintVP5hBqX = BigInt("1254")
		const uintanxIvPM = BigInt("1822")
		const uintfKcMtX5 = BigInt("210")
		const addresskjqDLTV = accounts[5]
		const uintMeJ8Z5e = BigInt("1520")
		const uint2372Cf = BigInt("342")
		const uintGSq6Yc = BigInt("1601")
		const addressS6ZsV3i = accounts[4]
		const uintmLam87P = BigInt("962")
		const uint256SnEoJHL = await WolfStakingRewardsNQ1cWid.balanceOfPerPool.call(addressayKWvi, uintrXjogwG, {from: accounts[4]});
		const uint256RfGxVEn = await WolfStakingRewardsNQ1cWid.stake.call(uintanxIvPM, uintVP5hBqX, {from: accounts[2]});
		const addressJ6TbNew = await WolfStakingRewardsNQ1cWid.updateReward.call(addresskjqDLTV, uintfKcMtX5, {from: accounts[5]});
		const uint256TnS4Xs = await WolfStakingRewardsNQ1cWid.withdraw.call(uint2372Cf, uintMeJ8Z5e, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GFfpHuI = await WolfStakingRewardsNQ1cWid.earned.call(addressS6ZsV3i, uintGSq6Yc, {from: accounts[5]});
		const uint256arrayqK08fFb = await WolfStakingRewardsNQ1cWid.updateNotifyRewardAmount.call(uintmLam87P, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSk9dur7 = "LQp7w"
		const stringXQzmoG = "r6x1GP64REemKeRHMCIwTOJbrBSUyEALu"
		const uintbP2H1Yj = BigInt("228")
		const WolfStakingRewardsd8xFa4 = await WolfStakingRewards.new(stringSk9dur7, stringXQzmoG, uintbP2H1Yj, {from: accounts[4]});
		const uinthyDmHQZ = BigInt("221")
		const uintDUGxLU2 = BigInt("824")
		const addressv0EzY2G = "0x0000000000000000000000000000000000000001"
		const stringgvwJNf = await WolfStakingRewardsd8xFa4.symbol.call({from: accounts[3]});
		const uint256Vpi2cMX = await WolfStakingRewardsd8xFa4.lastTimeRewardApplicable.call(uinthyDmHQZ, {from: accounts[5]});
		const uint256mRR70jq = await WolfStakingRewardsd8xFa4.earned.call(addressv0EzY2G, uintDUGxLU2, {from: "0x0000000000000000000000000000000000000001"});
		const uint8O6kr5x = await WolfStakingRewardsd8xFa4.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringNCCNM9Q = "lO0ivz6TweABa6IpVHxjeN7NiFoONjHQbmr1"
		const stringeebljpv = "dPGJoLxG9Tz26"
		const uintSK9HAdA = BigInt("209")
		const WolfStakingRewardsz8q1aUM = await WolfStakingRewards.new(stringNCCNM9Q, stringeebljpv, uintSK9HAdA, {from: accounts[3]});
		const uintWL0Rw3x = BigInt("695")
		const uintQYzYxGS = BigInt("1685")
		const uintmSm7H9O = BigInt("428")
		const uintPlLEByl = BigInt("1316")
		const uintkxwmgW5 = BigInt("726")
		const uintdsYwvRx = BigInt("331")
		const uint256k9GfO3 = await WolfStakingRewardsz8q1aUM.rewardPerToken.call(uintWL0Rw3x, {from: accounts[3]});
		const uint256JFnVcsc = await WolfStakingRewardsz8q1aUM.withdrawRemainingBalance.call(uintmSm7H9O, uintQYzYxGS, {from: accounts[3]});
		const uint256daXJ15 = await WolfStakingRewardsz8q1aUM.exit.call(uintPlLEByl, {from: accounts[4]});
		const uint8osk9d8 = await WolfStakingRewardsz8q1aUM.decimals.call({from: accounts[1]});
		const uint256EKD1bL = await WolfStakingRewardsz8q1aUM.withdrawRemainingBalance.call(uintdsYwvRx, uintkxwmgW5, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHtrRgw = "qsf13YhDiMlVpusnoJf3krEY4hTcUQMGMXT58TBmOHI5zNeKlgMWcnucfkosmogo"
		const stringsuE7d83 = "lg3KzkDTvRHY3"
		const uintcaiBFFJ = BigInt("52")
		const WolfStakingRewardsTJrDd2k = await WolfStakingRewards.new(stringHtrRgw, stringsuE7d83, uintcaiBFFJ, {from: accounts[5]});
		const uintMj54rwn = BigInt("1496")
		await WolfStakingRewardsTJrDd2k.onlyOwner.call({from: accounts[2]});
		const uint256arrayLYd5Qtk = await WolfStakingRewardsTJrDd2k.updateNotifyRewardAmount.call(uintMj54rwn, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresstNll9Xr = accounts[3]
		const addressFjjxaJ8 = accounts[5]
		const addressQaQq8vy = accounts[0]
		const WolfStakingRewardslFznt2O = await WolfStakingRewards.new(addresstNll9Xr, addressFjjxaJ8, addressQaQq8vy, {from: accounts[3]});
		const uintetqbSKS = BigInt("1012")
		const uintrKvLxR = BigInt("1")
		const uintBuabvhJ = await WolfStakingRewardslFznt2O.getReward.call(uintetqbSKS, {from: accounts[2]});
//		const uint256xpQ2WtW = await WolfStakingRewardslFznt2O.exit.call(uintrKvLxR, {from: accounts[2]});

		await expect(WolfStakingRewardslFznt2O.exit.call(uintrKvLxR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringkhikwxG = "1m4Sl8KP8PiS2HVZsra1uMstXW"
		const stringNB9eyA7 = "IOnejRN9UwOtP77Wfv"
		const uintAbZgd7A = BigInt("203")
		const WolfStakingRewardsVp09y1 = await WolfStakingRewards.new(stringkhikwxG, stringNB9eyA7, uintAbZgd7A, {from: "0x0000000000000000000000000000000000000001"});
		const uintFKhZJQB = BigInt("962")
		const uintINtZuZg = BigInt("1952")
		const uint256NN6tbaq = await WolfStakingRewardsVp09y1.rewardPerToken.call(uintFKhZJQB, {from: accounts[4]});
		const uint256DboYOs9 = await WolfStakingRewardsVp09y1.getRewardForDuration.call(uintINtZuZg, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjRy2ycI = "tNYoRJ5nKp1A1DiD3FyZ4OsUtqpuOU8vpU8xk8iMmqb6tU9Na526mUj0EY5YBEUolxK8x8tvRyRmdip9aGktDqMJ69FTU"
		const stringH0XFhS1 = "lg4PJdkFgGQsNts7FqeXBWsiLOHQoASThp9utd8z9o6NCDUcK9N1cJKyDi6QfMjiz7l1GQtx"
		const uintiOApeKB = BigInt("157")
		const WolfStakingRewardsWt9ftlR = await WolfStakingRewards.new(stringjRy2ycI, stringH0XFhS1, uintiOApeKB, {from: accounts[3]});
		const uintBzWXD3 = BigInt("1767")
		const uintaB7huN = BigInt("409")
		const uintBmY2l7v = BigInt("1870")
		const uintH5qM1RS = BigInt("1815")
		const stringYcNoT7w = await WolfStakingRewardsWt9ftlR.name.call({from: accounts[4]});
		const uint256wA8ZEbx = await WolfStakingRewardsWt9ftlR.withdraw.call(uintaB7huN, uintBzWXD3, {from: accounts[2]});
		const uint256rXappLJ = await WolfStakingRewardsWt9ftlR.exit.call(uintBmY2l7v, {from: "0x0000000000000000000000000000000000000001"});
		const uintC1A0S7l = await WolfStakingRewardsWt9ftlR.getReward.call(uintH5qM1RS, {from: accounts[0]});
		await WolfStakingRewardsWt9ftlR.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringEtSi99q = "I9JqW54zALcDXHxUS6ct2EulJhZNnNCdq7Y8QT1FJrIAxEqnxRp95R3PwaU0JaQKiVNKdGEJV5P1VJ3dduAG6m6Cwwudu"
		const stringRBLx7kr = "3kB5gHAHqAwJxAISkNf8enLakWnemKQGGi3ry9MRwxwxqdeBHe4eEvR9Dct7s34jEidHUK8X1YHWr"
		const uintcYqIZUF = BigInt("216")
		const WolfStakingRewardsdRN3EpI = await WolfStakingRewards.new(stringEtSi99q, stringRBLx7kr, uintcYqIZUF, {from: accounts[5]});
		const uintX19ySAT = BigInt("1497")
		const uintTeYE6UP = BigInt("1839")
		const uintQHijrng = BigInt("73")
		const uintBxVHhz = BigInt("1996")
		await WolfStakingRewardsdRN3EpI.nonReentrant.call({from: accounts[0]});
		const uint256K62KhWH = await WolfStakingRewardsdRN3EpI.withdrawRemainingBalance.call(uintTeYE6UP, uintX19ySAT, {from: accounts[1]});
		await WolfStakingRewardsdRN3EpI.onlyOwner.call({from: accounts[3]});
		const uint2562n60wS = await WolfStakingRewardsdRN3EpI.withdrawRemainingBalance.call(uintBxVHhz, uintQHijrng, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrslpKOw = "ItW5TR1OqC0QHb8UHs5cFkzvbkHA8vABgEDaa71S1RqtEYv"
		const stringgqFMzY = "2fqgxdYK8Vp3ngY9rQtOSGwtFwScHApE8O28hDygtWi4G68Fupm9FdemfY61wGcK801TXt"
		const uintQ86puMD = BigInt("161")
		const WolfStakingRewardsw9QI2FV = await WolfStakingRewards.new(stringrslpKOw, stringgqFMzY, uintQ86puMD, {from: accounts[2]});
		const uintX0OZZLw = BigInt("927")
		const uintKdtQA2 = BigInt("662")
		const uintKkaSJ4U = BigInt("319")
		const uintEi8ugYS = BigInt("338")
		const uintJVtjNWX = BigInt("1552")
		const uintb6NQJ7F = BigInt("1935")
		const uint256GZ4q14G = await WolfStakingRewardsw9QI2FV.totalSupplyPerPool.call(uintX0OZZLw, {from: accounts[2]});
		await WolfStakingRewardsw9QI2FV.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256jpyaYTY = await WolfStakingRewardsw9QI2FV.totalSupplyPerPool.call(uintKdtQA2, {from: accounts[4]});
		const uint256oViyGPf = await WolfStakingRewardsw9QI2FV.rewardPerToken.call(uintKkaSJ4U, {from: accounts[2]});
		const uint256VzBpQr = await WolfStakingRewardsw9QI2FV.exit.call(uintEi8ugYS, {from: accounts[2]});
		const uint256jGXYV1 = await WolfStakingRewardsw9QI2FV.withdrawRemainingBalance.call(uintb6NQJ7F, uintJVtjNWX, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringufe7SO4 = "ekruFRxAdf"
		const stringwJ7QCu5 = "1eNqrRUr4BnaBKiqU88eKNWtgiXqspKWde4GDPrm0m8nrJvUt7PgAaBLqI1IIEn4RpU0wZXDvi4T"
		const uintLLRjU3b = BigInt("204")
		const WolfStakingRewardsOAArlA5 = await WolfStakingRewards.new(stringufe7SO4, stringwJ7QCu5, uintLLRjU3b, {from: accounts[4]});
		const uintDScy9VB = BigInt("82")
		const stringC8w0lK = await WolfStakingRewardsOAArlA5.symbol.call({from: accounts[4]});
		const uint256c3fG9p8 = await WolfStakingRewardsOAArlA5.totalSupplyPerPool.call(uintDScy9VB, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringm2bGKhQ = "mXUJamaMp9HDGIH7RKhI31EdNvqAOM7TUi88wiVbqysYkFNjuIphO76YssjcgaJgFCI1MPqs0amybiyyAm5ua1JSjpcU2lh"
		const stringrVpCNiG = "rYijMvrKkUQFxUEcxRmG3Fyk3iMOk2VaGIRvXPjUASyY8VxIkkY8otw96AfK"
		const uintRDDapDo = BigInt("208")
		const WolfStakingRewardsQVqVxLk = await WolfStakingRewards.new(stringm2bGKhQ, stringrVpCNiG, uintRDDapDo, {from: accounts[4]});
		const uintQiScPGq = BigInt("291")
		const uintbHgSrpy = BigInt("834")
		const uintuigKHjL = BigInt("1828")
		const uintoJWh2Fm = BigInt("255")
		const addresskzgop9Q = accounts[3]
		const uintDWf7WTW = BigInt("1563")
		const uinteSBNzCQ = BigInt("978")
		const uint256s05ZR5U = await WolfStakingRewardsQVqVxLk.getRewardForDuration.call(uintQiScPGq, {from: accounts[2]});
		const uint256sKETFhK = await WolfStakingRewardsQVqVxLk.withdraw.call(uintuigKHjL, uintbHgSrpy, {from: accounts[3]});
		const uint256s7c0cVo = await WolfStakingRewardsQVqVxLk.earned.call(addresskzgop9Q, uintoJWh2Fm, {from: accounts[3]});
		const uint8cTsARhN = await WolfStakingRewardsQVqVxLk.decimals.call({from: accounts[5]});
		const uint256arrayYm6FME9 = await WolfStakingRewardsQVqVxLk.updateNotifyRewardAmount.call(uintDWf7WTW, {from: accounts[4]});
		const uintBrd3DnD = await WolfStakingRewardsQVqVxLk.getReward.call(uinteSBNzCQ, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUaataW6 = "JjVZJPGR8zlYoA"
		const stringznI5ERP = "WQahskLClBqEJFpQiG6FcZ04lARTAYh2RfLr9YnfOTTL2hPMm"
		const uintBMjldtA = BigInt("200")
		const WolfStakingRewardsWPXBnvF = await WolfStakingRewards.new(stringUaataW6, stringznI5ERP, uintBMjldtA, {from: accounts[3]});
		const uintNNln7q4 = BigInt("333")
		const uintz2k9f6k = BigInt("1003")
		const uintZmNqhUO = BigInt("877")
		const uintyFT4BFD = BigInt("1331")
		const uintrUXOcP8 = BigInt("774")
		const uint256aognHD3 = await WolfStakingRewardsWPXBnvF.totalSupplyPerPool.call(uintNNln7q4, {from: accounts[1]});
		const uint256PqnQHh9 = await WolfStakingRewardsWPXBnvF.exit.call(uintz2k9f6k, {from: "0x0000000000000000000000000000000000000001"});
		const uintFonTTIR = await WolfStakingRewardsWPXBnvF.getReward.call(uintZmNqhUO, {from: accounts[0]});
		const uint256JVVjqO = await WolfStakingRewardsWPXBnvF.withdrawRemainingBalance.call(uintrUXOcP8, uintyFT4BFD, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDnL7ol4 = "cWblRkWAj2Wk8CHPqskYGZ3g"
		const stringoGmLAxz = "ku6mvAQOmgyCfllVYyHK0SaC7xM"
		const uintHON01IQ = BigInt("161")
		const WolfStakingRewardsXt3qBAe = await WolfStakingRewards.new(stringDnL7ol4, stringoGmLAxz, uintHON01IQ, {from: accounts[3]});
		const uintThVVxj6 = BigInt("434")
		const uintennZjFC = BigInt("1824")
		const uintmvppQkf = BigInt("927")
		const uintt659Qfb = BigInt("216")
		const uintKrqFRb1 = BigInt("956")
		const uintrHmiZce = BigInt("1000")
		const addresseWdWRdh = accounts[2]
		const uint256DN5s85O = await WolfStakingRewardsXt3qBAe.lastTimeRewardApplicable.call(uintThVVxj6, {from: accounts[1]});
		const uint256Pv4W25l = await WolfStakingRewardsXt3qBAe.exit.call(uintennZjFC, {from: accounts[3]});
		const uint256RsMfnm = await WolfStakingRewardsXt3qBAe.withdraw.call(uintt659Qfb, uintmvppQkf, {from: accounts[1]});
		const uint256v6QVrYK = await WolfStakingRewardsXt3qBAe.rewardPerToken.call(uintKrqFRb1, {from: accounts[2]});
		const addressyM7zB6B = await WolfStakingRewardsXt3qBAe.updateReward.call(addresseWdWRdh, uintrHmiZce, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwtlHwGr = "6RKkyOsMX9j0qBfMAhBZrOhc5NcGwCDY7Zu5p7uLm5NkSDta3w6seVee0iqktMnFGkkI1ui5ZJlUWHBHTbdWnnF"
		const stringscuz6t = "s88jenrM8eVBNNnW89NiRl2ssc3Bryq74kgVrAhYJja2LHxf1n1Cixhv"
		const uintlVpDWSf = BigInt("13")
		const WolfStakingRewardsiY97fJP = await WolfStakingRewards.new(stringwtlHwGr, stringscuz6t, uintlVpDWSf, {from: accounts[4]});
		await WolfStakingRewardsiY97fJP.nonReentrant.call({from: accounts[3]});
		await WolfStakingRewardsiY97fJP.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKyBjT9d = "SGIjcoK9riMDHhulCqLXvj7uuDThVFpwPlrh0XOEN54uDDPeWYcfl3ikixvtmj54WD5SZiJWXu37uFK2Cgm50JiRwU0dmQ"
		const stringQObxHcj = "aEErJBN3A5iKPcoLUhVlspzEVfJUONYBvevNca2JaB7F5eyt"
		const uintvABfksC = BigInt("152")
		const WolfStakingRewardsXmtHvS = await WolfStakingRewards.new(stringKyBjT9d, stringQObxHcj, uintvABfksC, {from: accounts[0]});
		const uinthjE182z = BigInt("1883")
		const uintxo19I50 = BigInt("603")
		const uintLH3iNjK = BigInt("1276")
		const uintCijsFzk = BigInt("1115")
		const uinths4J4hi = BigInt("161")
		const uintenwtxaN = BigInt("91")
		const addressbN3EmKq = accounts[1]
		const uint2568k6lR9 = await WolfStakingRewardsXmtHvS.lastTimeRewardApplicable.call(uinthjE182z, {from: accounts[3]});
		const uint256lv1PPno = await WolfStakingRewardsXmtHvS.withdrawRemainingBalance.call(uintLH3iNjK, uintxo19I50, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OuyvIvt = await WolfStakingRewardsXmtHvS.stake.call(uinths4J4hi, uintCijsFzk, {from: accounts[3]});
		const uint256a2BHIM = await WolfStakingRewardsXmtHvS.earned.call(addressbN3EmKq, uintenwtxaN, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringAnAydOs = "2A6Yp7Wb4gib"
		const stringKlXOLj3 = "G5qQyObFIcSxHE86ENpp7WyeEi3VjGhQq96BfvAyIleBCTmCYO1j4gfv9xsCkjXG"
		const uintoDPw1aX = BigInt("236")
		const WolfStakingRewardsXxu9dp = await WolfStakingRewards.new(stringAnAydOs, stringKlXOLj3, uintoDPw1aX, {from: accounts[1]});
		const uintX8XVIHv = BigInt("1623")
		const uintvtZwRIJ = BigInt("203")
		const uintK3wCvch = BigInt("1322")
		const uintlnJdh3c = BigInt("141")
		await WolfStakingRewardsXxu9dp.nonReentrant.call({from: accounts[1]});
		const uint256WmnJdcL = await WolfStakingRewardsXxu9dp.stake.call(uintvtZwRIJ, uintX8XVIHv, {from: accounts[0]});
		const uint256bKTC6QY = await WolfStakingRewardsXxu9dp.withdrawRemainingBalance.call(uintlnJdh3c, uintK3wCvch, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsm1wiYk = "IbRHLhuSouJBhOjJa2k0gvbxc4Ye1X15KHCT8eiIPdRlaGg7rzFT437htdXniQTOQaDx2K8bjar5l5FH"
		const stringKcCOgmZ = "755utdrWNM"
		const uintic8KP58 = BigInt("226")
		const WolfStakingRewardsFwWaRrK = await WolfStakingRewards.new(stringsm1wiYk, stringKcCOgmZ, uintic8KP58, {from: accounts[3]});
		const uintWboy7pG = BigInt("839")
		const uintFuLCong = BigInt("368")
		const uintP5qUHV6 = BigInt("1455")
		const uintLBdAZdq = BigInt("602")
		const uintDANHINT = BigInt("1344")
		const uintbbncbYM = BigInt("864")
		const uinty2jkXwP = BigInt("1678")
		const uint256CgDWRXc = await WolfStakingRewardsFwWaRrK.exit.call(uintWboy7pG, {from: accounts[2]});
		const uint256yqUo8jK = await WolfStakingRewardsFwWaRrK.withdraw.call(uintP5qUHV6, uintFuLCong, {from: accounts[1]});
		const uint256XjpE1qu = await WolfStakingRewardsFwWaRrK.withdraw.call(uintDANHINT, uintLBdAZdq, {from: accounts[1]});
		const uint256T5zMrm9 = await WolfStakingRewardsFwWaRrK.withdrawRemainingBalance.call(uinty2jkXwP, uintbbncbYM, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbSQIDSb = "cNG8Cbsofy6tphFtHs9LfhCcn3HI4A9m"
		const stringgEqQBbd = "EsUuEOd7zeHRE6VY"
		const uinthfgGwwx = BigInt("67")
		const WolfStakingRewardsF8MAfE7 = await WolfStakingRewards.new(stringbSQIDSb, stringgEqQBbd, uinthfgGwwx, {from: accounts[2]});
		const uint8Y1b6z = BigInt("1200")
		const uintzyIh3OF = BigInt("75")
		const uintzbKKtKY = BigInt("896")
		await WolfStakingRewardsF8MAfE7.nonReentrant.call({from: accounts[5]});
		const uint256cnyW7n = await WolfStakingRewardsF8MAfE7.totalSupplyPerPool.call(uint8Y1b6z, {from: accounts[4]});
		const uint256qnJtQkW = await WolfStakingRewardsF8MAfE7.stake.call(uintzbKKtKY, uintzyIh3OF, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQ0KgvSH = "BlVlfr5hq4"
		const stringiGdDfh = "EJ9kxrfmbcOXnifXouq"
		const uintavKPaKc = BigInt("135")
		const WolfStakingRewardsWc4w4o6 = await WolfStakingRewards.new(stringQ0KgvSH, stringiGdDfh, uintavKPaKc, {from: accounts[1]});
		const uintdafeIPo = BigInt("1015")
		const uintfaKDf1T = BigInt("527")
		const uint256pOfT2wu = await WolfStakingRewardsWc4w4o6.stake.call(uintfaKDf1T, uintdafeIPo, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsWc4w4o6.nonReentrant.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPLLZnCg = "8ywmdOgF4bCnLBSSfxzmIWMnMT1VOttX3qsPw6zFEc50Q3GTmo2I9t7YvEeffFjwWho2o33y62s5Vh8gbxv2ANL"
		const stringE6W7oBl = "5JcT8ANSteX3CxKm4YbRjNlNrfPKObUjkjHJBKsOgFxJIPp8XStWBbE6lrH3Mpb8q1i24n8lIr"
		const uinttemWl8l = BigInt("141")
		const WolfStakingRewardsMxS294d = await WolfStakingRewards.new(stringPLLZnCg, stringE6W7oBl, uinttemWl8l, {from: accounts[1]});
		const uintdcQaiLx = BigInt("1010")
		const uintcOqvjTP = BigInt("1818")
		const addressgqx7mEI = accounts[5]
		const uintWlGnjg0 = BigInt("814")
		const uintsQlwNpE = BigInt("103")
		const uintIFUr8rW = BigInt("1951")
		const addressg9PfKST = accounts[2]
		const uintriO1Xm = BigInt("1587")
		const uint256sZmCDUd = await WolfStakingRewardsMxS294d.totalSupplyPerPool.call(uintdcQaiLx, {from: accounts[5]});
		const uint256u6YE5Ut = await WolfStakingRewardsMxS294d.earned.call(addressgqx7mEI, uintcOqvjTP, {from: accounts[3]});
		const uint256yTtSBnw = await WolfStakingRewardsMxS294d.withdraw.call(uintsQlwNpE, uintWlGnjg0, {from: accounts[3]});
		const addressHiptn3h = await WolfStakingRewardsMxS294d.updateReward.call(addressg9PfKST, uintIFUr8rW, {from: accounts[2]});
		const uint256arrayyl6fgbR = await WolfStakingRewardsMxS294d.updateNotifyRewardAmount.call(uintriO1Xm, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfGj4wyB = "ChLwhJyn7WJTSVeLYblB1wRxrc1jvotXdn3msLrKKtRSGwlqbdfS84OMiDiudxfusv69tOcRjOuOckcsZnv"
		const stringCUBuMO = "rbfUAajiUVWeQzs18nTR1J5Su32n6P3uFsTTE6f6zvKa23GSq4qGmXCAzvx3saojl7G0kxURzwoCzIJX3Bq7ozLuKCx4AQgk"
		const uintj9qrt2Q = BigInt("239")
		const WolfStakingRewardsuLwVL1O = await WolfStakingRewards.new(stringfGj4wyB, stringCUBuMO, uintj9qrt2Q, {from: accounts[5]});
		const uintQ3Iak4I = BigInt("1269")
		const uint256cROEU6n = await WolfStakingRewardsuLwVL1O.getRewardForDuration.call(uintQ3Iak4I, {from: accounts[4]});
		await WolfStakingRewardsuLwVL1O.onlyRewardsDistribution.call({from: accounts[2]});
		await WolfStakingRewardsuLwVL1O.nonReentrant.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQjp319E = "rwuRyh0YiHCYtbcZEEhHbvIzfbqouDKaLcofSuIhK4mO5ILhqxImR9BONo4RVmPlUKgTVJiuWgq"
		const stringbrKBonh = "Nhsf"
		const uintYDdwfBH = BigInt("12")
		const WolfStakingRewardsIuOStn = await WolfStakingRewards.new(stringQjp319E, stringbrKBonh, uintYDdwfBH, {from: accounts[5]});
		const uint65B9UA = BigInt("611")
		const uintHdWYwNr = BigInt("1090")
		const addresscdAKT1F = accounts[1]
		const uintSdSZ77E = BigInt("251")
		const uintXwooZBm = BigInt("865")
		const uintqNWWTiz = await WolfStakingRewardsIuOStn.getReward.call(uint65B9UA, {from: accounts[2]});
		const addresszBPd2ab = await WolfStakingRewardsIuOStn.updateReward.call(addresscdAKT1F, uintHdWYwNr, {from: accounts[2]});
		const uint256L1BbFoo = await WolfStakingRewardsIuOStn.withdrawRemainingBalance.call(uintXwooZBm, uintSdSZ77E, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringe2TcBnM = "Yfl7C0NxLB4Opftj8VfPPjbc"
		const stringbCn93Ha = "PD2CerCv5WRgCGwXeKXWqRkiLoLnYbf8bZXPAbRZVhVbnyAa2Ib8hCjdG65rGbbYaBJi5XHo5EvYKb6v"
		const uintbRtAwRP = BigInt("183")
		const WolfStakingRewardsZxdTMd8 = await WolfStakingRewards.new(stringe2TcBnM, stringbCn93Ha, uintbRtAwRP, {from: accounts[2]});
		const uintUWqjtOt = BigInt("1145")
		const uintlEPlPHn = BigInt("173")
		const uintbsINFBk = BigInt("373")
		const uintxjpXQG = BigInt("28")
		const uintkmhVpOJ = BigInt("201")
		const uintKMzOUMq = BigInt("852")
		const uintOSeTwYB = BigInt("1317")
		const uintQgUWXW3 = BigInt("1924")
		const uint256PoZnZLS = await WolfStakingRewardsZxdTMd8.withdraw.call(uintlEPlPHn, uintUWqjtOt, {from: accounts[3]});
		const uint256JicTvVZ = await WolfStakingRewardsZxdTMd8.withdrawRemainingBalance.call(uintxjpXQG, uintbsINFBk, {from: accounts[0]});
		const uint256jCq8hig = await WolfStakingRewardsZxdTMd8.withdraw.call(uintKMzOUMq, uintkmhVpOJ, {from: accounts[1]});
		const uint256PAJX4Ls = await WolfStakingRewardsZxdTMd8.stake.call(uintQgUWXW3, uintOSeTwYB, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHyCBerJ = "LVYaRkNjDYHkYN7x9OY6ktmzCSAbbpHPkxvoTz5HsklJ9vn0ih2k9F4bYmHI6QhimhAxLe6Ct"
		const stringXG7K3ot = "ji6baJskoNkgNY97IDpu6aHCmcmXa763tO"
		const uintscAsWtM = BigInt("64")
		const WolfStakingRewardsVPZGHxl = await WolfStakingRewards.new(stringHyCBerJ, stringXG7K3ot, uintscAsWtM, {from: accounts[5]});
		const uintTGcbv7I = BigInt("463")
		const uintR9c4VVv = BigInt("182")
		const uint256arrayJI0dcQ5 = await WolfStakingRewardsVPZGHxl.updateNotifyRewardAmount.call(uintTGcbv7I, {from: accounts[4]});
		const uint256VvmWrBE = await WolfStakingRewardsVPZGHxl.rewardPerToken.call(uintR9c4VVv, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMuVloj2 = "I77HkTx1UhXeJ6rJ27FMx8tIctGREausqAFtz2laMbuXdFUewoSxW"
		const stringvjlzxP4 = "s9kSfjAoDxdVoxH65splUkFuDQXySlwnHDJzudOfEfpnROKPSMN8bDQWAb4vQRKQbnWUwHa8XPNsrWOcR"
		const uintePVthyz = BigInt("5")
		const WolfStakingRewardsw6Tzhv = await WolfStakingRewards.new(stringMuVloj2, stringvjlzxP4, uintePVthyz, {from: accounts[1]});
		const uintt0PDBXj = BigInt("1752")
		const addressTcsSC1O = accounts[2]
		const uintdV01CT4 = BigInt("792")
		const addressZbnAmQj = accounts[2]
		await WolfStakingRewardsw6Tzhv.nonReentrant.call({from: accounts[4]});
		const uint256PDsrRD5 = await WolfStakingRewardsw6Tzhv.balanceOfPerPool.call(addressTcsSC1O, uintt0PDBXj, {from: accounts[2]});
		const uint2566KMeUW = await WolfStakingRewardsw6Tzhv.balanceOfPerPool.call(addressZbnAmQj, uintdV01CT4, {from: accounts[5]});
		const uint8G33Bkp = await WolfStakingRewardsw6Tzhv.decimals.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHHK5ZPJ = "xxBVWE5gV"
		const stringBaNTYz1 = "f7CMUJNeBx6m7oNbMexo7OcxxLtyBULIhuC4z2a"
		const uintf0kdDN9 = BigInt("159")
		const WolfStakingRewardsdAyDJ2x = await WolfStakingRewards.new(stringHHK5ZPJ, stringBaNTYz1, uintf0kdDN9, {from: accounts[0]});
		const uintx5JwVD = BigInt("1750")
		const addresscirnT4q = accounts[0]
		const uintMS8wGeo = BigInt("273")
		const addressVjb3UTT = accounts[5]
		const uintew7NihM = BigInt("788")
		const uintp1ScD7y = BigInt("1427")
		const addressxOZjtZ = accounts[5]
		const uint256DxfOIsD = await WolfStakingRewardsdAyDJ2x.earned.call(addresscirnT4q, uintx5JwVD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256TlYYkzE = await WolfStakingRewardsdAyDJ2x.earned.call(addressVjb3UTT, uintMS8wGeo, {from: accounts[1]});
		const uint256L6Wd2lW = await WolfStakingRewardsdAyDJ2x.rewardPerToken.call(uintew7NihM, {from: accounts[5]});
		const uint256p7HZtIB = await WolfStakingRewardsdAyDJ2x.earned.call(addressxOZjtZ, uintp1ScD7y, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwCvjVu5 = "2jH"
		const stringX9pYZzx = "2L3Kw06hRgFn6pyFZXRhsDjfbNhSWjtmdUbcD4CycAbcLqdqy4jMCOiVOlTeV8OQPm"
		const uintpJK5qm = BigInt("218")
		const WolfStakingRewardsA6aARe4 = await WolfStakingRewards.new(stringwCvjVu5, stringX9pYZzx, uintpJK5qm, {from: accounts[3]});
		const uintJEuHFqo = BigInt("1156")
		const uintTHcvDwz = BigInt("565")
		const uintP0qAwuC = BigInt("609")
		const uintk7dJLMM = BigInt("722")
		const uintZOgTdDT = BigInt("1984")
		const uintJ1F7D5k = BigInt("455")
		const uintqBLrTq7 = BigInt("125")
		const uintznC8mQo = BigInt("1079")
		const uint256UdCjZ7Z = await WolfStakingRewardsA6aARe4.withdraw.call(uintTHcvDwz, uintJEuHFqo, {from: accounts[5]});
		const uint256xj5Sc9p = await WolfStakingRewardsA6aARe4.stake.call(uintk7dJLMM, uintP0qAwuC, {from: accounts[1]});
		const uint256k9dM569 = await WolfStakingRewardsA6aARe4.totalSupplyPerPool.call(uintZOgTdDT, {from: accounts[4]});
		const uint256KKnub7k = await WolfStakingRewardsA6aARe4.getRewardForDuration.call(uintJ1F7D5k, {from: accounts[4]});
		await WolfStakingRewardsA6aARe4.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256x71q3yp = await WolfStakingRewardsA6aARe4.withdraw.call(uintznC8mQo, uintqBLrTq7, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringN99aEwq = "MbPNOjcBooGRT0DujUxQsK5nDRGbSTqQoOoMY5BxlHiDHFbD2OZyE"
		const stringWXLBmL = "DzPlZFfwUG7jZif5Ta9NTd4mcVMY3JNCUy1y7W1jVIlxqXklgVJecdtAro8Nd6EYSDlzxDj8"
		const uintoTRu7Xx = BigInt("33")
		const WolfStakingRewardsNCmsXpA = await WolfStakingRewards.new(stringN99aEwq, stringWXLBmL, uintoTRu7Xx, {from: accounts[2]});
		const uintaxiwpq2 = BigInt("516")
		const uintyDVEalr = BigInt("1612")
		const addressc5OkqSa = accounts[3]
		await WolfStakingRewardsNCmsXpA.nonReentrant.call({from: accounts[2]});
		const uint256Dt2RRCn = await WolfStakingRewardsNCmsXpA.exit.call(uintaxiwpq2, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsNCmsXpA.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zAWZ5Ep = await WolfStakingRewardsNCmsXpA.balanceOfPerPool.call(addressc5OkqSa, uintyDVEalr, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringK6fsHkQ = "sEvuNg19"
		const stringkZmjVTY = "lzDFbyxjqD"
		const uintdQSEqh = BigInt("136")
		const WolfStakingRewardslnIQiv9 = await WolfStakingRewards.new(stringK6fsHkQ, stringkZmjVTY, uintdQSEqh, {from: accounts[0]});
		const uintBPSof7 = BigInt("449")
		const uintNTeUXSn = BigInt("1430")
		await WolfStakingRewardslnIQiv9.onlyOwner.call({from: accounts[4]});
		const uint256TJCHFxR = await WolfStakingRewardslnIQiv9.getRewardForDuration.call(uintBPSof7, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Bn8YLIT = await WolfStakingRewardslnIQiv9.exit.call(uintNTeUXSn, {from: accounts[1]});
	});
})