const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringAfgFiVr = "mUKrBsCMr6IRyKDdCjDnkuipyneSHDTUGIvL7ZcJvMGlYY6hGdM88EIr4irhQ39F3sAQNHDcfaU6qQdhhjWUxevb"
		const stringETye89b = "gbeafmnRfATryZic4vqlXsa4X62LULSq7R8A5RrOIqKNhTC"
		const uintCd8iRoB = BigInt("233")
		const WolfStakingRewardsS7zt9Fe = await WolfStakingRewards.new(stringAfgFiVr, stringETye89b, uintCd8iRoB, {from: accounts[0]});
		const uintRoXQQJz = BigInt("375")
		const addressJcAeELs = accounts[3]
		const uintCKe3gyZ = BigInt("1086")
		const addressdolw3e2 = accounts[3]
		const uintmw9wKdE = BigInt("610")
		const uint256l8ZYS9 = await WolfStakingRewardsS7zt9Fe.balanceOfPerPool.call(addressJcAeELs, uintRoXQQJz, {from: accounts[3]});
		const addressnWICyzk = await WolfStakingRewardsS7zt9Fe.updateReward.call(addressdolw3e2, uintCKe3gyZ, {from: accounts[2]});
		const uint256arrayrexDBbD = await WolfStakingRewardsS7zt9Fe.updateNotifyRewardAmount.call(uintmw9wKdE, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringaAxka3G = "RrdS2LAak"
		const stringaABtJr6 = "sn9FubFDY"
		const uintPD9zXpM = BigInt("111")
		const WolfStakingRewardsuwIQuC = await WolfStakingRewards.new(stringaAxka3G, stringaABtJr6, uintPD9zXpM, {from: accounts[2]});
		const uinttUUiMqX = BigInt("437")
		const uintugIZMnA = BigInt("1551")
		const uintTWPWtqc = BigInt("1967")
		const uintv5g80wU = BigInt("541")
		const uintN8tonOZ = BigInt("808")
		const uint256arraymPk3ud = await WolfStakingRewardsuwIQuC.updateNotifyRewardAmount.call(uinttUUiMqX, {from: accounts[3]});
		const uint256yQWljtk = await WolfStakingRewardsuwIQuC.lastTimeRewardApplicable.call(uintugIZMnA, {from: accounts[4]});
		const uint256sg0GxmS = await WolfStakingRewardsuwIQuC.stake.call(uintv5g80wU, uintTWPWtqc, {from: accounts[2]});
		const uint8ckllpeC = await WolfStakingRewardsuwIQuC.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256UDjr5Xp = await WolfStakingRewardsuwIQuC.rewardPerToken.call(uintN8tonOZ, {from: accounts[4]});
		const stringwn2UnQF = await WolfStakingRewardsuwIQuC.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPP39Vjf = "ah3WYF2f1lThD2RCyyWD2b"
		const stringu857DYu = "37QmESWqtbHUgAwkvsrAyNic68JGIJDXlajskQzcQQDGTrFM2QnEy6LjzLtuJ5LDsBcxVRv2hSBgAgTpuOK7i7SB5zk"
		const uintIXEZkY4 = BigInt("123")
		const WolfStakingRewardsf5QuzYT = await WolfStakingRewards.new(stringPP39Vjf, stringu857DYu, uintIXEZkY4, {from: accounts[3]});
		const uintaNeDthW = BigInt("1517")
		const uintURuSbKK = BigInt("26")
		const uintCwoHDp = BigInt("1744")
		const uintZ8pngis = BigInt("1792")
		const uint256Jqu94Rq = await WolfStakingRewardsf5QuzYT.lastTimeRewardApplicable.call(uintaNeDthW, {from: accounts[1]});
		await WolfStakingRewardsf5QuzYT.onlyOwner.call({from: accounts[0]});
		const uint256sSxHExL = await WolfStakingRewardsf5QuzYT.totalSupplyPerPool.call(uintURuSbKK, {from: accounts[4]});
		const uint256qlTqeMI = await WolfStakingRewardsf5QuzYT.lastTimeRewardApplicable.call(uintCwoHDp, {from: accounts[1]});
		const uint256zNFZVLC = await WolfStakingRewardsf5QuzYT.exit.call(uintZ8pngis, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrvAiTTM = "lqDUvDLGPkGV4Dpy6kDNTJUZtw9YayhEwyX8XsT9V8qIo699cRAoUj6RE6I4CC1jcrE3H4j4RulxaxJiSVN8"
		const stringzQVDh1U = "FYG4tDMtaDdVYNu7kXodtyXR94deDre0B9ojyW0voC0DjX5oY"
		const uintGwTQ2Dc = BigInt("221")
		const WolfStakingRewardsoQcd9W = await WolfStakingRewards.new(stringrvAiTTM, stringzQVDh1U, uintGwTQ2Dc, {from: accounts[0]});
		const uintDvE3wjX = BigInt("790")
		const uintZ7RERCf = BigInt("890")
		const uintdfra4UC = BigInt("1950")
		const uintWb7alRj = BigInt("785")
		const uintInZiuY = await WolfStakingRewardsoQcd9W.getReward.call(uintDvE3wjX, {from: accounts[1]});
		const uint256arraypUFKcgP = await WolfStakingRewardsoQcd9W.updateNotifyRewardAmount.call(uintZ7RERCf, {from: accounts[3]});
		const uint256S4tpOUW = await WolfStakingRewardsoQcd9W.stake.call(uintWb7alRj, uintdfra4UC, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressKHCgIDx = accounts[5]
		const addressFqiQkq1 = accounts[0]
		const addressbeqe1Y = accounts[4]
		const WolfStakingRewardse4CY09s = await WolfStakingRewards.new(addressKHCgIDx, addressFqiQkq1, addressbeqe1Y, {from: accounts[2]});
		const uintI0QcaA = BigInt("1629")
		const addressytxLlbJ = accounts[1]
		await WolfStakingRewardse4CY09s.onlyRewardsDistribution.call({from: accounts[5]});
		const addressrAdEa9S = await WolfStakingRewardse4CY09s.updateReward.call(addressytxLlbJ, uintI0QcaA, {from: accounts[1]});
		const stringQm0a48 = await WolfStakingRewardse4CY09s.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardse4CY09s.nonReentrant.call({from: accounts[2]});

		await expect(WolfStakingRewardse4CY09s.onlyRewardsDistribution.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressptnblOY = accounts[1]
		const addresstMUD7wo = "0x0000000000000000000000000000000000000001"
		const addressEpixE5 = accounts[3]
		const WolfStakingRewardsnYler7a = await WolfStakingRewards.new(addressptnblOY, addresstMUD7wo, addressEpixE5, {from: accounts[2]});
		const uintHK0TZCG = BigInt("720")
		const uintZsYWeJ = BigInt("1587")
		const uinta5Vzv5l = BigInt("1958")
		const uintB8hwtPi = await WolfStakingRewardsnYler7a.getReward.call(uintHK0TZCG, {from: accounts[1]});
		await WolfStakingRewardsnYler7a.nonReentrant.call({from: accounts[0]});
		const uint256VpzSrwq = await WolfStakingRewardsnYler7a.lastTimeRewardApplicable.call(uintZsYWeJ, {from: accounts[2]});
		await WolfStakingRewardsnYler7a.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256Fa2hjUM = await WolfStakingRewardsnYler7a.exit.call(uinta5Vzv5l, {from: accounts[1]});

		await expect(WolfStakingRewardsnYler7a.nonReentrant.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringFRBqoI4 = "3HQLy2uzX7o7MaRGOYNsCp4UsV45PTPx8EuknD1myKFTKGURt8mSAqEqCckYHkAC8HC9V4LNJD9iL"
		const stringuvSEwG6 = "4NdpnHPSjk4FqKH1lgOxY5gCl26THXJfCIomgfzv2MNhHVRxBIWqtQojpq7s9JljWF1kWCLSHXUWJ6p"
		const uintQxqQriJ = BigInt("68")
		const WolfStakingRewardsIGHwvn4 = await WolfStakingRewards.new(stringFRBqoI4, stringuvSEwG6, uintQxqQriJ, {from: accounts[4]});
		const uintjQenVXb = BigInt("1411")
		const uintXpbwzvr = BigInt("1355")
		const uintDOqZ6h3 = BigInt("1862")
		const uint256arrayG5Vj7R = await WolfStakingRewardsIGHwvn4.updateNotifyRewardAmount.call(uintjQenVXb, {from: accounts[3]});
		const uint256PMSwUBK = await WolfStakingRewardsIGHwvn4.rewardPerToken.call(uintXpbwzvr, {from: accounts[3]});
		const uint256arrayk8DAL5 = await WolfStakingRewardsIGHwvn4.updateNotifyRewardAmount.call(uintDOqZ6h3, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressyt8cAwO = accounts[0]
		const addressvUnFzG6 = accounts[2]
		const addressP6LIsJd = accounts[0]
		const WolfStakingRewardsV321FI4 = await WolfStakingRewards.new(addressyt8cAwO, addressvUnFzG6, addressP6LIsJd, {from: accounts[4]});
		const uintqWVxtfr = BigInt("46")
		const uintIhDNayY = BigInt("351")
		const uintEZaJ6HM = BigInt("1523")
		const uintT8zxNX9 = BigInt("988")
		const uintRi3mZ6l = BigInt("815")
		const uintIqTk8m2 = BigInt("1827")
		const uintMRyGTdV = BigInt("1184")
		const uinta9ZqhOQ = BigInt("449")
		const uinti7fxzkR = BigInt("134")
		const uint256Nx1g6Ur = await WolfStakingRewardsV321FI4.withdraw.call(uintIhDNayY, uintqWVxtfr, {from: accounts[1]});
		const uint256RbZjiTp = await WolfStakingRewardsV321FI4.withdraw.call(uintT8zxNX9, uintEZaJ6HM, {from: accounts[1]});
		const uint256FnOTgjB = await WolfStakingRewardsV321FI4.totalSupplyPerPool.call(uintRi3mZ6l, {from: accounts[4]});
		const uint256eGAJsNS = await WolfStakingRewardsV321FI4.withdraw.call(uintMRyGTdV, uintIqTk8m2, {from: accounts[3]});
		const uint256EphnhZF = await WolfStakingRewardsV321FI4.withdraw.call(uinti7fxzkR, uinta9ZqhOQ, {from: accounts[1]});

		await expect(WolfStakingRewardsV321FI4.withdraw.call(uintIhDNayY, uintqWVxtfr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringVEHbs16 = "vMumhXxGVXMhMoG2XUcYPnNkkcX1kT608NnvfSUlRIXYGBfYnPsCkj8obSQtmh58T85agGsdAPUyF6GsvHVc"
		const stringVyazyN = "cQW9q81WllNuVvTFNy4"
		const uintc5pHQ6c = BigInt("170")
		const WolfStakingRewardsnmVs1M2 = await WolfStakingRewards.new(stringVEHbs16, stringVyazyN, uintc5pHQ6c, {from: accounts[4]});
		const uintxdWzikY = BigInt("1421")
		const uinttKsJzAd = BigInt("1689")
		const uintXSPPyra = BigInt("382")
		const uint256JwKGhD = await WolfStakingRewardsnmVs1M2.getRewardForDuration.call(uintxdWzikY, {from: accounts[0]});
		const uint256I35g6Vz = await WolfStakingRewardsnmVs1M2.getRewardForDuration.call(uinttKsJzAd, {from: accounts[3]});
		const uint256x8mpch = await WolfStakingRewardsnmVs1M2.rewardPerToken.call(uintXSPPyra, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressAJxxkO5 = accounts[1]
		const addressBwEwdwb = "0x0000000000000000000000000000000000000001"
		const addresss6hLrO = accounts[3]
		const WolfStakingRewardsnYler7a = await WolfStakingRewards.new(addressAJxxkO5, addressBwEwdwb, addresss6hLrO, {from: accounts[2]});
		const uintuU3y4Zd = BigInt("720")
		const uintbeJ2VgS = BigInt("1767")
		const uintMGmttbw = BigInt("381")
		const uintJiJkXPl = BigInt("1585")
		const uintD07zl9v = BigInt("581")
		const uintB8hwtPi = await WolfStakingRewardsnYler7a.getReward.call(uintuU3y4Zd, {from: accounts[1]});
		const uint256eOtXZkW = await WolfStakingRewardsnYler7a.withdrawRemainingBalance.call(uintMGmttbw, uintbeJ2VgS, {from: accounts[1]});
		const uint256VpzSrwq = await WolfStakingRewardsnYler7a.lastTimeRewardApplicable.call(uintJiJkXPl, {from: accounts[2]});
		await WolfStakingRewardsnYler7a.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256Fa2hjUM = await WolfStakingRewardsnYler7a.exit.call(uintD07zl9v, {from: accounts[1]});

		await expect(WolfStakingRewardsnYler7a.withdrawRemainingBalance.call(uintMGmttbw, uintbeJ2VgS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringriHFlYR = "HALgXc32"
		const stringJpr4WXw = "Rs7PftjVIewL0W198fN4lHcuMxosBibayCvTYgtHDYAW5yVAhvUpIwABuiQngMRILZVHkArs3pwde3HeBW6V"
		const uintgCsvsn8 = BigInt("234")
		const WolfStakingRewardsLXUzgMB = await WolfStakingRewards.new(stringriHFlYR, stringJpr4WXw, uintgCsvsn8, {from: accounts[5]});
		const uintIriWjL3 = BigInt("848")
		const uintIu07Ueq = BigInt("561")
		const uint256qtldKIu = await WolfStakingRewardsLXUzgMB.withdraw.call(uintIu07Ueq, uintIriWjL3, {from: accounts[1]});
		await WolfStakingRewardsLXUzgMB.nonReentrant.call({from: accounts[0]});
		await WolfStakingRewardsLXUzgMB.onlyOwner.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringof7sElT = "I4tPHqonZyNik3Uh4bgY"
		const stringA9YCA7n = "TpBRavN2YL82t9teOUNT8A1iFqp29f7Cniig1BQDvDmbFzxiTU"
		const uintKXwoWhA = BigInt("25")
		const WolfStakingRewardsPKiXXEo = await WolfStakingRewards.new(stringof7sElT, stringA9YCA7n, uintKXwoWhA, {from: accounts[0]});
		const uintIfXsCWj = BigInt("1288")
		const addressF3HPvG = accounts[3]
		const uintBAA0AHI = BigInt("223")
		await WolfStakingRewardsPKiXXEo.onlyOwner.call({from: accounts[1]});
		const stringvjh9Tj4 = await WolfStakingRewardsPKiXXEo.symbol.call({from: accounts[1]});
		const uint8MLLnL0 = await WolfStakingRewardsPKiXXEo.decimals.call({from: accounts[2]});
		const addressKIgDgKW = await WolfStakingRewardsPKiXXEo.updateReward.call(addressF3HPvG, uintIfXsCWj, {from: accounts[2]});
		await WolfStakingRewardsPKiXXEo.onlyRewardsDistribution.call({from: accounts[0]});
		const uintPAkQR9A = await WolfStakingRewardsPKiXXEo.getReward.call(uintBAA0AHI, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringlXhd0B9 = "T15AywXnGKOBmcSmKqneh14rbjsbifPVzcgzz2"
		const string7IsQir = "7lsd3NdkNQOxZBmeuh7nkVA9dpjhd1L4w02umgy9i9sQmujRyyUSTMNGxiPsu3f6GUteM4JJaaoyXODr0AfxjE6"
		const uintUcXbX6j = BigInt("223")
		const WolfStakingRewardsfq04jcr = await WolfStakingRewards.new(stringlXhd0B9, string7IsQir, uintUcXbX6j, {from: accounts[3]});
		const uintdNx1YEn = BigInt("1909")
		const addressXKbyD76 = "0x0000000000000000000000000000000000000001"
		const uintqvAjxHr = BigInt("1853")
		const uintkjEynu9 = BigInt("981")
		const uintZtRRV8z = BigInt("875")
		const uint256bDbMw6G = await WolfStakingRewardsfq04jcr.balanceOfPerPool.call(addressXKbyD76, uintdNx1YEn, {from: accounts[4]});
		const uint256DsU1gN5 = await WolfStakingRewardsfq04jcr.lastTimeRewardApplicable.call(uintqvAjxHr, {from: accounts[2]});
		const stringIilnf4 = await WolfStakingRewardsfq04jcr.symbol.call({from: accounts[4]});
		const uint256TvHULaN = await WolfStakingRewardsfq04jcr.withdrawRemainingBalance.call(uintZtRRV8z, uintkjEynu9, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressAcTNNGi = accounts[1]
		const addressg0lu8w5 = "0x0000000000000000000000000000000000000001"
		const addressvBEoD1 = accounts[3]
		const WolfStakingRewardsnYler7a = await WolfStakingRewards.new(addressAcTNNGi, addressg0lu8w5, addressvBEoD1, {from: accounts[2]});
		const uintvZ41uA4 = BigInt("720")
		const uintPvVzV5 = BigInt("1563")
		const uintmDq0EqQ = BigInt("1958")
		const uintB8hwtPi = await WolfStakingRewardsnYler7a.getReward.call(uintvZ41uA4, {from: accounts[1]});
		const uint256VpzSrwq = await WolfStakingRewardsnYler7a.lastTimeRewardApplicable.call(uintPvVzV5, {from: accounts[2]});
		const uint256Fa2hjUM = await WolfStakingRewardsnYler7a.exit.call(uintmDq0EqQ, {from: accounts[1]});

		assert.equal(uint256VpzSrwq, BigInt("0"))
		await expect(WolfStakingRewardsnYler7a.exit.call(uintmDq0EqQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressUpHi91a = accounts[0]
		const addressqsWnbT7 = accounts[4]
		const addresst5TgqDK = accounts[4]
		const WolfStakingRewardsxTqrilo = await WolfStakingRewards.new(addressUpHi91a, addressqsWnbT7, addresst5TgqDK, {from: "0x0000000000000000000000000000000000000001"});
		const uintO2S8oTb = BigInt("1094")
		const addresswi9Pz9y = accounts[1]
		const uintusKunC4 = BigInt("855")
		const addressDLwXUbY = accounts[3]
		const addressgEKHGQF = await WolfStakingRewardsxTqrilo.updateReward.call(addresswi9Pz9y, uintO2S8oTb, {from: accounts[1]});
		const uint256l99O9GW = await WolfStakingRewardsxTqrilo.balanceOfPerPool.call(addressDLwXUbY, uintusKunC4, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressDogek4Z = accounts[1]
		const addressSHPY2G = "0x0000000000000000000000000000000000000001"
		const addressl86Ctnl = accounts[3]
		const WolfStakingRewardsnYler7a = await WolfStakingRewards.new(addressDogek4Z, addressSHPY2G, addressl86Ctnl, {from: accounts[2]});
		const uintEQMiQOX = BigInt("1336")
		const uintNo1d4UU = BigInt("720")
		const uintYtHYBwX = BigInt("187")
		const addressnA92wmn = accounts[5]
		const uintff0ICqm = BigInt("1530")
		const addressUt7jGu0 = accounts[2]
		const uintwn28By8 = BigInt("1978")
		const uint256dqGIOBM = await WolfStakingRewardsnYler7a.getRewardForDuration.call(uintEQMiQOX, {from: accounts[1]});
		const uintB8hwtPi = await WolfStakingRewardsnYler7a.getReward.call(uintNo1d4UU, {from: accounts[1]});
		const uint256vH6D0Et = await WolfStakingRewardsnYler7a.earned.call(addressnA92wmn, uintYtHYBwX, {from: accounts[2]});
		await WolfStakingRewardsnYler7a.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256QFg920Q = await WolfStakingRewardsnYler7a.earned.call(addressUt7jGu0, uintff0ICqm, {from: accounts[2]});
		const uint256Fa2hjUM = await WolfStakingRewardsnYler7a.exit.call(uintwn28By8, {from: accounts[1]});

		await expect(WolfStakingRewardsnYler7a.getRewardForDuration.call(uintEQMiQOX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringo9IzYxs = "VIUwMyb7ccYzHabW4aly75PV4wU5b4BDxNW6gngpXVGAxIQlIEn2hT"
		const stringo7fyYf = "Eoz2wtDFS1mW5V4SF3BDAzhwvNNrD2ijkO8VdomiMMciNNL2Eiu7MjLi0bAcva9QBU61ae9b6LUkMahb3y26fGs7Y"
		const uintPuYGgP1 = BigInt("237")
		const WolfStakingRewardsbSHSnqK = await WolfStakingRewards.new(stringo9IzYxs, stringo7fyYf, uintPuYGgP1, {from: accounts[5]});
		const uinteNxMsad = BigInt("1015")
		const addressQt4CWR0 = accounts[2]
		const uintr2CvnWm = BigInt("1304")
		await WolfStakingRewardsbSHSnqK.nonReentrant.call({from: accounts[2]});
		const uint256oyeOKZl = await WolfStakingRewardsbSHSnqK.earned.call(addressQt4CWR0, uinteNxMsad, {from: accounts[2]});
		const uint256UdR3xdM = await WolfStakingRewardsbSHSnqK.exit.call(uintr2CvnWm, {from: "0x0000000000000000000000000000000000000001"});
		const uint8BVFYR2O = await WolfStakingRewardsbSHSnqK.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const strings1L0NDy = "Rsa1BM"
		const stringv8XdIkI = "ON8f1XdjJedsqSsb0lhPfodiarE9VN3velanLJPaIXQL"
		const uintXLqA0mj = BigInt("60")
		const WolfStakingRewardsw7hxlsq = await WolfStakingRewards.new(strings1L0NDy, stringv8XdIkI, uintXLqA0mj, {from: accounts[2]});
		const uintKL5KLYC = BigInt("1500")
		const addressdAM0zb = accounts[4]
		const uintmRtsqAV = BigInt("84")
		const uintVcH8Dw = BigInt("730")
		const uintHcdTkyo = BigInt("1664")
		const uintdQGu6n = BigInt("513")
		const addressXrleIXx = await WolfStakingRewardsw7hxlsq.updateReward.call(addressdAM0zb, uintKL5KLYC, {from: accounts[5]});
		const uint256PhLQlFT = await WolfStakingRewardsw7hxlsq.withdraw.call(uintVcH8Dw, uintmRtsqAV, {from: accounts[4]});
		const stringASPHm8B = await WolfStakingRewardsw7hxlsq.symbol.call({from: accounts[2]});
		const uintAxdAuoG = await WolfStakingRewardsw7hxlsq.getReward.call(uintHcdTkyo, {from: accounts[1]});
		const uint256U9Wp1T = await WolfStakingRewardsw7hxlsq.totalSupplyPerPool.call(uintdQGu6n, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressa0COoGZ = accounts[1]
		const addressgWH0Kaq = "0x0000000000000000000000000000000000000001"
		const addressDUNRpS = accounts[3]
		const WolfStakingRewardsnYler7a = await WolfStakingRewards.new(addressa0COoGZ, addressgWH0Kaq, addressDUNRpS, {from: accounts[2]});
		const uintdJfbOcF = BigInt("724")
		const uintLcz5dC = BigInt("1533")
		const uintay5o5Y = BigInt("991")
		const uintB8hwtPi = await WolfStakingRewardsnYler7a.getReward.call(uintdJfbOcF, {from: accounts[1]});
		const uint256MGxaoQK = await WolfStakingRewardsnYler7a.stake.call(uintay5o5Y, uintLcz5dC, {from: accounts[5]});

		await expect(WolfStakingRewardsnYler7a.stake.call(uintay5o5Y, uintLcz5dC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresszI9D5VN = accounts[1]
		const addressfEqKFTA = "0x0000000000000000000000000000000000000001"
		const addressTTr36j8 = accounts[3]
		const WolfStakingRewardsnYler7a = await WolfStakingRewards.new(addresszI9D5VN, addressfEqKFTA, addressTTr36j8, {from: accounts[2]});
		const uintNfIUWdu = BigInt("685")
		const uintGbGxuI7 = BigInt("59")
		const uintB8hwtPi = await WolfStakingRewardsnYler7a.getReward.call(uintNfIUWdu, {from: accounts[1]});
		const uint256Um9R8nP = await WolfStakingRewardsnYler7a.totalSupplyPerPool.call(uintGbGxuI7, {from: accounts[2]});
		await WolfStakingRewardsnYler7a.onlyRewardsDistribution.call({from: accounts[2]});

		assert.equal(uint256Um9R8nP, BigInt("0"))
		await expect(WolfStakingRewardsnYler7a.onlyRewardsDistribution.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringjxbgIBC = "KpvzIc3BhpPfvemyb4bB2r8hD5fD8yiyr6pOysL2M"
		const stringHicVvy = "9Tf1DhVTXqMQMrgLRrk6ZsCMIKj7EGhyMvkSzm5FUfp2XKIsp9ntdsZvxb6eho86HNz6LBHM4az8wVp"
		const uintW2qHCw = BigInt("247")
		const WolfStakingRewardsZeE6GAm = await WolfStakingRewards.new(stringjxbgIBC, stringHicVvy, uintW2qHCw, {from: accounts[2]});
		const uintsDdNEtX = BigInt("361")
		const uintXh8SuB = BigInt("886")
		const uintd6dRjSU = BigInt("138")
		const uintISndGQa = BigInt("1918")
		const uintFh1VVoz = BigInt("454")
		const addressUz2iqHD = accounts[5]
		const uint256LgZbffP = await WolfStakingRewardsZeE6GAm.withdraw.call(uintXh8SuB, uintsDdNEtX, {from: accounts[4]});
		const uint256BdMBtZe = await WolfStakingRewardsZeE6GAm.exit.call(uintd6dRjSU, {from: accounts[0]});
		const uint256UnmSm4 = await WolfStakingRewardsZeE6GAm.getRewardForDuration.call(uintISndGQa, {from: accounts[4]});
		const uint256j5ng4CG = await WolfStakingRewardsZeE6GAm.earned.call(addressUz2iqHD, uintFh1VVoz, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringylbv65Z = "h9wwfLjSgVDT0pUSmy2zGteLytaTreBn9mCfIb3bVlk9MVraCx3pA2F1CyaN0nzquPo9tscaxz9CHINa057jszw"
		const stringUkS2Ky1 = "giZIx1hmd2eTHVe0Bacd13vaN5nySwkN"
		const uintDSN3602 = BigInt("2")
		const WolfStakingRewardsvQtUIlA = await WolfStakingRewards.new(stringylbv65Z, stringUkS2Ky1, uintDSN3602, {from: accounts[1]});
		const uintqzgY2aj = BigInt("1533")
		await WolfStakingRewardsvQtUIlA.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256XUmGlBF = await WolfStakingRewardsvQtUIlA.getRewardForDuration.call(uintqzgY2aj, {from: accounts[4]});
		await WolfStakingRewardsvQtUIlA.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTvWpAKx = "hcrj5JQFeljPxxXHBi35V8DBTxzh8wmJAd1nsBpRnDsnElVNt5sGdGcnOLLwYrMjRPcDEdK4yt6"
		const stringvS7oEep = "vJBqR7jZSEODMqYcASF8u3H1g8vR5Qmqae"
		const uintxX9qNEP = BigInt("81")
		const WolfStakingRewardsVV3Vn6I = await WolfStakingRewards.new(stringTvWpAKx, stringvS7oEep, uintxX9qNEP, {from: accounts[3]});
		const uintp4R1rqq = BigInt("1087")
		const addressc6R6SJ = accounts[3]
		const uint6BYEpR = BigInt("1055")
		const uintIZDHKVw = BigInt("1149")
		const uintEtLxbI = BigInt("485")
		const uintfYSUhy = BigInt("1982")
		const uintT61ypX = BigInt("4")
		const uintW80ESxI = BigInt("1669")
		const uint256OR2IBgZ = await WolfStakingRewardsVV3Vn6I.earned.call(addressc6R6SJ, uintp4R1rqq, {from: accounts[0]});
		const uint256Rj16Eal = await WolfStakingRewardsVV3Vn6I.totalSupplyPerPool.call(uint6BYEpR, {from: accounts[4]});
		const uint256UNHi7sV = await WolfStakingRewardsVV3Vn6I.withdraw.call(uintEtLxbI, uintIZDHKVw, {from: accounts[1]});
		const uint256irlzSzj = await WolfStakingRewardsVV3Vn6I.stake.call(uintT61ypX, uintfYSUhy, {from: accounts[2]});
		const uint256arrayB6THZbH = await WolfStakingRewardsVV3Vn6I.updateNotifyRewardAmount.call(uintW80ESxI, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressELpIq8c = accounts[1]
		const addressy3DT9PC = "0x0000000000000000000000000000000000000001"
		const addressErBrDsH = accounts[3]
		const WolfStakingRewardsnYler7a = await WolfStakingRewards.new(addressELpIq8c, addressy3DT9PC, addressErBrDsH, {from: accounts[2]});
		const uintdqw7y8g = BigInt("1665")
		const uintORKtBY = BigInt("720")
		const uint256arrayW3zOsJJ = await WolfStakingRewardsnYler7a.updateNotifyRewardAmount.call(uintdqw7y8g, {from: accounts[2]});
		const uint8XHgY4PZ = await WolfStakingRewardsnYler7a.decimals.call({from: accounts[2]});
		const uintB8hwtPi = await WolfStakingRewardsnYler7a.getReward.call(uintORKtBY, {from: accounts[1]});

		await expect(WolfStakingRewardsnYler7a.updateNotifyRewardAmount.call(uintdqw7y8g, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringuEJZT30 = "uGkyNhsswwsvw1TfqhTPaPygHTGV4SJn1w8MVtXz3bA1HvbdykIXAqLi5TgBVa61kEBPzklijDvs64fajY9iSWpTwE"
		const stringgiw8rIq = "adkkz4ePGMEFXFPNlfxumJWU6WOt18pzOm2hxg8u7JMGfSmECLRC36heOFFtx6hmKHdQcPbydwssnhg1hR3iuAqs"
		const uinto3BeSR2 = BigInt("151")
		const WolfStakingRewardseeLNzs9 = await WolfStakingRewards.new(stringuEJZT30, stringgiw8rIq, uinto3BeSR2, {from: accounts[0]});
		const uintaV0WoGh = BigInt("1897")
		const uintOyjikn = BigInt("1243")
		const uintOyBsKYY = BigInt("672")
		const uint256NCP5Vlr = await WolfStakingRewardseeLNzs9.withdrawRemainingBalance.call(uintOyjikn, uintaV0WoGh, {from: accounts[1]});
		await WolfStakingRewardseeLNzs9.nonReentrant.call({from: accounts[3]});
		const uinta9GaAIc = await WolfStakingRewardseeLNzs9.getReward.call(uintOyBsKYY, {from: accounts[0]});
		await WolfStakingRewardseeLNzs9.onlyRewardsDistribution.call({from: accounts[0]});
		const stringOi5YCo = await WolfStakingRewardseeLNzs9.symbol.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressE55iOlL = accounts[1]
		const addressBA8urhI = "0x0000000000000000000000000000000000000001"
		const addresspVNCfEy = accounts[3]
		const WolfStakingRewardsnYler7a = await WolfStakingRewards.new(addressE55iOlL, addressBA8urhI, addresspVNCfEy, {from: accounts[2]});
		const uinttT9W6hh = BigInt("686")
		const uintI7WxczR = BigInt("1120")
		const addressmUkVmXs = accounts[4]
		const uintJ7pWWdm = BigInt("74")
		const uint2FWn9k = BigInt("221")
		const uintB8hwtPi = await WolfStakingRewardsnYler7a.getReward.call(uinttT9W6hh, {from: accounts[1]});
		const uint256grH1aaK = await WolfStakingRewardsnYler7a.balanceOfPerPool.call(addressmUkVmXs, uintI7WxczR, {from: accounts[0]});
		const uint256NzTuDh7 = await WolfStakingRewardsnYler7a.withdrawRemainingBalance.call(uint2FWn9k, uintJ7pWWdm, {from: accounts[1]});

		assert.equal(uint256grH1aaK, BigInt("0"))
		await expect(WolfStakingRewardsnYler7a.withdrawRemainingBalance.call(uint2FWn9k, uintJ7pWWdm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringvJcnRj6 = "JBKNbtoiszo8kSCfLHW7ClaUXj7Xmppri7m7I"
		const stringYwtYxmz = "5HO2S2qaUyiNWaFCz6kyPWreaosdMSkzYbhd2Oll2HvGWLTC6NZ2pUFBj76Mg7LHYXuehzdGazDMT7ZwhkvyUd6i1"
		const uinttsgisJo = BigInt("149")
		const WolfStakingRewardsci0B9V = await WolfStakingRewards.new(stringvJcnRj6, stringYwtYxmz, uinttsgisJo, {from: accounts[2]});
		const uintxoEPl8c = BigInt("462")
		const uintRHWdo9i = BigInt("345")
		const uintYUbX0K = BigInt("375")
		const addressflUsQtQ = accounts[3]
		const uint256hRTNUff = await WolfStakingRewardsci0B9V.withdrawRemainingBalance.call(uintRHWdo9i, uintxoEPl8c, {from: accounts[2]});
		const uint8ToO8GMF = await WolfStakingRewardsci0B9V.decimals.call({from: accounts[4]});
		await WolfStakingRewardsci0B9V.onlyOwner.call({from: accounts[3]});
		const uint256RPnW5ms = await WolfStakingRewardsci0B9V.earned.call(addressflUsQtQ, uintYUbX0K, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwxye9pz = "9gmCSX2MF2YUipBSZUwV"
		const stringZeWIATD = "GXzFz3y6acgvZDNthO39qkcu733sAAdkxS8itvbF3XE4dCx0V9o8rR1HcZXn4IblHoWYvKD1uqiPlL9dnNwUiE5cJrQ0"
		const uintYUBLK5X = BigInt("189")
		const WolfStakingRewardsd5IjOW5 = await WolfStakingRewards.new(stringwxye9pz, stringZeWIATD, uintYUBLK5X, {from: accounts[0]});
		const uintwxodiy = BigInt("789")
		const uintKsGMpaM = BigInt("1137")
		const uintVBptIZe = BigInt("250")
		const uintYkZI9uD = BigInt("137")
		const uintJoH8eL0 = BigInt("148")
		const uintdIlEaJJ = BigInt("931")
		const uintH3AuKpJ = BigInt("1559")
		const uint256MHecqSF = await WolfStakingRewardsd5IjOW5.exit.call(uintwxodiy, {from: accounts[4]});
		const uint256vdz68Q2 = await WolfStakingRewardsd5IjOW5.withdrawRemainingBalance.call(uintVBptIZe, uintKsGMpaM, {from: accounts[3]});
		const uint256g5m29f = await WolfStakingRewardsd5IjOW5.rewardPerToken.call(uintYkZI9uD, {from: accounts[5]});
		const uint256qBqMKhw = await WolfStakingRewardsd5IjOW5.stake.call(uintdIlEaJJ, uintJoH8eL0, {from: accounts[2]});
		const uint256L0VBbr4 = await WolfStakingRewardsd5IjOW5.rewardPerToken.call(uintH3AuKpJ, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPsftTtz = "8UEHCUwaLaex5YmuwQK1EBsJC5xwWxiMggP2jtLObeMCmPxfc3aWLPx8Cwy5IYk7PzDH53F1M3IBJv0WQQfwqCJ10"
		const stringBLbIwql = "zlMgkwz7aciVClub5kGr65UCkqcTmbtzhnCpjW4L601UChxi7UoUV"
		const uintwUiU04r = BigInt("193")
		const WolfStakingRewardssFXnqXz = await WolfStakingRewards.new(stringPsftTtz, stringBLbIwql, uintwUiU04r, {from: accounts[2]});
		const uintecDMhEo = BigInt("1232")
		const uintEyB08a = BigInt("1620")
		const uintlI5N9H3 = BigInt("1705")
		const uintrlvc7V = BigInt("1490")
		const uinthy8SkeZ = BigInt("32")
		const uintq7UzuVT = await WolfStakingRewardssFXnqXz.getReward.call(uintecDMhEo, {from: accounts[5]});
		const uint256SEjnIX2 = await WolfStakingRewardssFXnqXz.withdraw.call(uintlI5N9H3, uintEyB08a, {from: accounts[3]});
		await WolfStakingRewardssFXnqXz.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256KMoyCiV = await WolfStakingRewardssFXnqXz.getRewardForDuration.call(uintrlvc7V, {from: accounts[4]});
		const uintosSFQzt = await WolfStakingRewardssFXnqXz.getReward.call(uinthy8SkeZ, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringAKOArw0 = "F5ZJrM8dEKzwzgGQNuqkeXMuYfzIW974GxXKRnU"
		const stringJOVHX1E = "LucnyZFCypdK94vdEF"
		const uintl69xO46 = BigInt("128")
		const WolfStakingRewardsnaFWpQS = await WolfStakingRewards.new(stringAKOArw0, stringJOVHX1E, uintl69xO46, {from: accounts[4]});
		const uintvqVpX5 = BigInt("1155")
		const addressFXrQHD9 = accounts[2]
		const uinty4oJmxv = BigInt("1641")
		const uintCs6HMQp = BigInt("1779")
		const addressTspvqMf = accounts[4]
		const uintuaLzqxl = BigInt("1819")
		const uintoWtRXZi = BigInt("906")
		const uint256fWbp84M = await WolfStakingRewardsnaFWpQS.balanceOfPerPool.call(addressFXrQHD9, uintvqVpX5, {from: accounts[2]});
		const uint256arraynezEpFH = await WolfStakingRewardsnaFWpQS.updateNotifyRewardAmount.call(uinty4oJmxv, {from: accounts[0]});
		const uint256reqOxzx = await WolfStakingRewardsnaFWpQS.earned.call(addressTspvqMf, uintCs6HMQp, {from: accounts[3]});
		await WolfStakingRewardsnaFWpQS.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256v9KidEL = await WolfStakingRewardsnaFWpQS.lastTimeRewardApplicable.call(uintuaLzqxl, {from: accounts[0]});
		const uintaihAEIa = await WolfStakingRewardsnaFWpQS.getReward.call(uintoWtRXZi, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringn24K9C0 = "avjo6thPrU2aajHgHUsNwRPF9biTsMan3jtjWOVrV3ODHJhVq116"
		const stringmUR4R1 = "qoU4CHoG6ezNuYcnfzJBg5HoW7Fm4KKArnXQK6e4Kak5zg16t"
		const uintKz2zVB = BigInt("165")
		const WolfStakingRewardshkvFY74 = await WolfStakingRewards.new(stringn24K9C0, stringmUR4R1, uintKz2zVB, {from: accounts[5]});
		const uintPwC5cMb = BigInt("1924")
		const uintj8uuFxJ = BigInt("771")
		const uintXCNwt3h = BigInt("322")
		const uintA9Rkqok = BigInt("1995")
		const uintMnJtHWH = BigInt("30")
		const uintCAVKy2y = BigInt("811")
		const uint256arrayk6g77D = await WolfStakingRewardshkvFY74.updateNotifyRewardAmount.call(uintPwC5cMb, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardshkvFY74.onlyOwner.call({from: accounts[2]});
		const uint256arrayqsriWrU = await WolfStakingRewardshkvFY74.updateNotifyRewardAmount.call(uintj8uuFxJ, {from: accounts[0]});
		const uint256TOIXlC6 = await WolfStakingRewardshkvFY74.withdraw.call(uintA9Rkqok, uintXCNwt3h, {from: accounts[3]});
		const uint256DcCFrb6 = await WolfStakingRewardshkvFY74.withdrawRemainingBalance.call(uintCAVKy2y, uintMnJtHWH, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKBmTwy5 = "R6LokOta2Pd8RL1VCzJ33zMTrKJdsVcSjUqupvDahQALwkTQ9FHGlJ5q8LHmcHSY08jyDMLnPHL5qKdHBvW2"
		const stringqofeAEV = "Ay8gBvTWxotA76RzoXYde8BmwmjE8uR5aCfnn0447VpEt1y4PrDvYCUl7hPByHgMEB7"
		const uintaDfwDED = BigInt("166")
		const WolfStakingRewardsPHhQw4q = await WolfStakingRewards.new(stringKBmTwy5, stringqofeAEV, uintaDfwDED, {from: accounts[5]});
		const uintuE1Xu2 = BigInt("1460")
		const uint256b1BFzmD = await WolfStakingRewardsPHhQw4q.exit.call(uintuE1Xu2, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsPHhQw4q.onlyRewardsDistribution.call({from: accounts[5]});
		await WolfStakingRewardsPHhQw4q.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addresssikfxnA = accounts[1]
		const addressGYcaTNm = "0x0000000000000000000000000000000000000001"
		const addressxCAppOT = accounts[3]
		const WolfStakingRewardsnYler7a = await WolfStakingRewards.new(addresssikfxnA, addressGYcaTNm, addressxCAppOT, {from: accounts[2]});
		const uintdT7iuxg = BigInt("716")
		const uintL8RhExZ = BigInt("0")
		const uintSnusLCH = BigInt("1045")
		const uintHBtJ9W = BigInt("535")
		const addressSumikNu = accounts[1]
		const uintB8hwtPi = await WolfStakingRewardsnYler7a.getReward.call(uintdT7iuxg, {from: accounts[1]});
		const uint256IykJMO = await WolfStakingRewardsnYler7a.withdraw.call(uintSnusLCH, uintL8RhExZ, {from: accounts[5]});
		const uint256L41mVK4 = await WolfStakingRewardsnYler7a.balanceOfPerPool.call(addressSumikNu, uintHBtJ9W, {from: accounts[1]});

		await expect(WolfStakingRewardsnYler7a.withdraw.call(uintSnusLCH, uintL8RhExZ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringl414Pk = "nrVZExFgOFStlg582CHw1RBZbViOquiEwe3i1ZNoPVWLOiDom54gcYGb9rNihyxOVFIIvolmsIxcCDP1W7EAfUMaC6"
		const stringVzkwyWA = "lWzwxjahxYOrxRSc5OCT1xWaTJWn5NOQ2lNBxRL4SPl7hoQgLjDxdWumNhtNYUGe4f5j7Z"
		const uint0jjetw = BigInt("70")
		const WolfStakingRewardsqktTG1o = await WolfStakingRewards.new(stringl414Pk, stringVzkwyWA, uint0jjetw, {from: accounts[0]});
		const uint8eJ5RI = BigInt("1367")
		const uintWbVMBzH = BigInt("1127")
		const uintpP6nog5 = BigInt("1480")
		const uintUkJZtX = BigInt("251")
		const uintLBYV2B5 = BigInt("103")
		const uintrsxeYM = BigInt("1154")
		const uint256uKVRLXc = await WolfStakingRewardsqktTG1o.withdraw.call(uintWbVMBzH, uint8eJ5RI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256JFvNd9s = await WolfStakingRewardsqktTG1o.withdrawRemainingBalance.call(uintUkJZtX, uintpP6nog5, {from: accounts[2]});
		const uint256VFCoqKD = await WolfStakingRewardsqktTG1o.stake.call(uintrsxeYM, uintLBYV2B5, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpyOZTjG = "CWLPkrxWIzURAET9HcBDvT3XKGjyQQ9tavt8fjlQkwSAs4wdEBm7FxP2ypr8jjgaj5qU3lkBNPHQLaU0mOyGeOBJTPFnPCX"
		const stringo62KsBT = "ihllv6QmtWxUNW96iPVhL9zmHyGzyEyEh9zb6OKQViPCXvcoweKrY9q4NzR9l3jIkSj9hsZr5JUZ55oU1VLSwDB3mnOIuSJtfk"
		const uintrX3iCE3 = BigInt("101")
		const WolfStakingRewardsF2XN3h5 = await WolfStakingRewards.new(stringpyOZTjG, stringo62KsBT, uintrX3iCE3, {from: accounts[0]});
		const uintcwp6CKO = BigInt("1389")
		const uintF3F9AqS = BigInt("1610")
		const uintIEFxvsW = BigInt("1133")
		const uintC1vUrdV = BigInt("1270")
		const addressSFoDfnf = accounts[2]
		const uint256OolfWSD = await WolfStakingRewardsF2XN3h5.totalSupplyPerPool.call(uintcwp6CKO, {from: accounts[2]});
		const uint256qUOPnH2 = await WolfStakingRewardsF2XN3h5.getRewardForDuration.call(uintF3F9AqS, {from: accounts[2]});
		await WolfStakingRewardsF2XN3h5.onlyRewardsDistribution.call({from: accounts[2]});
		const uintXcBRCKs = await WolfStakingRewardsF2XN3h5.getReward.call(uintIEFxvsW, {from: accounts[1]});
		const addressIjUVQxw = await WolfStakingRewardsF2XN3h5.updateReward.call(addressSFoDfnf, uintC1vUrdV, {from: accounts[3]});
		const uint8bdmzMtD = await WolfStakingRewardsF2XN3h5.decimals.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcmTZ6hV = "CtsKo7S9DeCyWCakfeWSGS0dsEInFxzdeb4iqRm51VTjORA1Zgh7ACCOLRlYyVYAxrRVfiP9mHAgPEnlvmKC2"
		const stringlIGKAgE = "lQmq5EFnrPV2p9Wdi4JMPOfgkCbCFFExkKxMah6eo"
		const uintJzYQhpc = BigInt("33")
		const WolfStakingRewardsbuRZuTc = await WolfStakingRewards.new(stringcmTZ6hV, stringlIGKAgE, uintJzYQhpc, {from: accounts[1]});
		const uintf7bAQc3 = BigInt("1417")
		const addressZgw2jfY = accounts[5]
		await WolfStakingRewardsbuRZuTc.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256FOHst8R = await WolfStakingRewardsbuRZuTc.balanceOfPerPool.call(addressZgw2jfY, uintf7bAQc3, {from: accounts[2]});
		const stringaayj1eU = await WolfStakingRewardsbuRZuTc.symbol.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmAQsPV = "qnpdMjYXIbrNHvgwbPYC"
		const string8UFJzl = "U132vUBAaJUxMc002dbam5QP7JVdwIZVoPWo93gSDH7ze4a121jbPdfJPK3DMKbIJvsXnynw6fErfwZCal28aA3c2UEM"
		const uintKcNTBCs = BigInt("125")
		const WolfStakingRewardsRJNa3R2 = await WolfStakingRewards.new(stringmAQsPV, string8UFJzl, uintKcNTBCs, {from: accounts[1]});
		const uintRuE2CKL = BigInt("387")
		const uint256S9qsgN6 = await WolfStakingRewardsRJNa3R2.getRewardForDuration.call(uintRuE2CKL, {from: accounts[1]});
		await WolfStakingRewardsRJNa3R2.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringchugAod = "Dwz3UGiziUsJfBPGzVHpnuCrAq1pK40lHkaerCArludy8z48kqygOJz75S"
		const stringxKE4GUZ = "XfMza4avavY4BOxx833nm91XYx2B"
		const uintJodpzjQ = BigInt("124")
		const WolfStakingRewardsbusVurB = await WolfStakingRewards.new(stringchugAod, stringxKE4GUZ, uintJodpzjQ, {from: accounts[3]});
		const uintkDihuap = BigInt("876")
		const uintkcuPkLH = await WolfStakingRewardsbusVurB.getReward.call(uintkDihuap, {from: accounts[1]});
		const stringbydRuyB = await WolfStakingRewardsbusVurB.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCh7ZYkY = "6GffNUPKXGECdFZSTIcO8yKRpzRmvOb3FrKbJJmHhgxjLkZujGMWps6X"
		const stringMGsL5tT = "BSILrvXDJBtEFaOa58572oIfFcziVU8kSTdPUzIXa1BSJdGfgq4H8JfHXlCrSdHZPo95fna7UtEPNUqxfXEQmLsQpE5YKqlP5"
		const uintXlvEBYe = BigInt("12")
		const WolfStakingRewardsNnQJgjj = await WolfStakingRewards.new(stringCh7ZYkY, stringMGsL5tT, uintXlvEBYe, {from: accounts[0]});
		const uinth8fQXy = BigInt("1520")
		const uintHgD6PNY = BigInt("116")
		const uinteSX7JEq = BigInt("1999")
		const uint256KjeKYlD = await WolfStakingRewardsNnQJgjj.rewardPerToken.call(uinth8fQXy, {from: accounts[4]});
		const uint256AfkJyl0 = await WolfStakingRewardsNnQJgjj.totalSupplyPerPool.call(uintHgD6PNY, {from: accounts[5]});
		const uint256CruTN1c = await WolfStakingRewardsNnQJgjj.lastTimeRewardApplicable.call(uinteSX7JEq, {from: accounts[5]});
		await WolfStakingRewardsNnQJgjj.nonReentrant.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUwC7H3O = "gthSqaK4kcLC"
		const stringDmAezbG = "6L1O8i7nAXFMhFPa5cBG5RfcL9oVK2WYM6SKWW9nExmBl6sBCVb"
		const uintW9hJeLR = BigInt("70")
		const WolfStakingRewardsfBj2RKh = await WolfStakingRewards.new(stringUwC7H3O, stringDmAezbG, uintW9hJeLR, {from: accounts[3]});
		const uinta5Jy2x = BigInt("1158")
		const addresscVLsqRh = accounts[0]
		const uintckwRpUj = BigInt("1630")
		const addressn0t9I9e = accounts[1]
		const uintEnp33dC = BigInt("139")
		const uintRAOSO73 = BigInt("694")
		const uintf6Yu2Z4 = BigInt("547")
		const uintAqvySFE = BigInt("1800")
		const uint256lbkRksc = await WolfStakingRewardsfBj2RKh.earned.call(addresscVLsqRh, uinta5Jy2x, {from: accounts[1]});
		const addressKn36fNf = await WolfStakingRewardsfBj2RKh.updateReward.call(addressn0t9I9e, uintckwRpUj, {from: accounts[0]});
		const uint256yXGT7WH = await WolfStakingRewardsfBj2RKh.lastTimeRewardApplicable.call(uintEnp33dC, {from: accounts[0]});
		const uint256ubI8C6H = await WolfStakingRewardsfBj2RKh.exit.call(uintRAOSO73, {from: accounts[0]});
		const uint256ZoNSRdU = await WolfStakingRewardsfBj2RKh.withdraw.call(uintAqvySFE, uintf6Yu2Z4, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsD0iTUK = "ZwO6kecp62PcGY6cy73HGKWhidRQeMscFjcL1TxJBpw9V4ajYRFzviLlzB5N"
		const stringLw4HEa = "idlYBJDFP5"
		const uintLbVNFR = BigInt("167")
		const WolfStakingRewardsjVvoAr = await WolfStakingRewards.new(stringsD0iTUK, stringLw4HEa, uintLbVNFR, {from: accounts[0]});
		const uintBBnxXEc = BigInt("279")
		const addressToVxMu4 = accounts[5]
		const uintKWY394 = BigInt("1103")
		const uintOqiH4Jc = BigInt("918")
		const uintOYmk9c = BigInt("982")
		const uintXpnGWyY = BigInt("1044")
		const addressdiM8SSv = accounts[0]
		const uint8WomG82z = await WolfStakingRewardsjVvoAr.decimals.call({from: accounts[2]});
		const uint256yBvaaq = await WolfStakingRewardsjVvoAr.balanceOfPerPool.call(addressToVxMu4, uintBBnxXEc, {from: accounts[5]});
		const uint256arraya1eW14Y = await WolfStakingRewardsjVvoAr.updateNotifyRewardAmount.call(uintKWY394, {from: accounts[4]});
		const uint256h74szOq = await WolfStakingRewardsjVvoAr.withdraw.call(uintOYmk9c, uintOqiH4Jc, {from: accounts[2]});
		await WolfStakingRewardsjVvoAr.onlyRewardsDistribution.call({from: accounts[2]});
		const addresscItEVQ4 = await WolfStakingRewardsjVvoAr.updateReward.call(addressdiM8SSv, uintXpnGWyY, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressakCeDd1 = accounts[0]
		const addressiBVXUiZ = accounts[1]
		const addressfwNoJXX = accounts[0]
		const WolfStakingRewardsLheBBd = await WolfStakingRewards.new(addressakCeDd1, addressiBVXUiZ, addressfwNoJXX, {from: accounts[2]});
		const uintcKr87Gj = BigInt("404")
		const uintmFQeyVN = BigInt("1324")
		const uintfJqdb3X = BigInt("1164")
		const uint256Lm6lbEU = await WolfStakingRewardsLheBBd.withdrawRemainingBalance.call(uintmFQeyVN, uintcKr87Gj, {from: accounts[2]});
		await WolfStakingRewardsLheBBd.onlyRewardsDistribution.call({from: accounts[4]});
		const stringNJA92g7 = await WolfStakingRewardsLheBBd.name.call({from: accounts[3]});
		const uintsUDCccU = await WolfStakingRewardsLheBBd.getReward.call(uintfJqdb3X, {from: accounts[4]});

		await expect(WolfStakingRewardsLheBBd.withdrawRemainingBalance.call(uintmFQeyVN, uintcKr87Gj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringvlu0QU = "zMcxonXUvl1yEQmnNFWMIaNmFWIsLCRPxN"
		const string4a1B6c = "5oF1LW6eGMhUs9he342EmpOvl07SJiuiv7KxoddCrB41"
		const uintx4FqguS = BigInt("99")
		const WolfStakingRewardseSQVPkx = await WolfStakingRewards.new(stringvlu0QU, string4a1B6c, uintx4FqguS, {from: accounts[3]});
		const uintu85T3F = BigInt("1003")
		const uintdyLO8K = BigInt("1599")
		const addressAs8hrS6 = accounts[4]
		const uintP7uyldF = BigInt("1399")
		const uintgX61PzZ = await WolfStakingRewardseSQVPkx.getReward.call(uintu85T3F, {from: accounts[4]});
		const uint256eJLmsTb = await WolfStakingRewardseSQVPkx.balanceOfPerPool.call(addressAs8hrS6, uintdyLO8K, {from: accounts[1]});
		const uint256m8OyL3E = await WolfStakingRewardseSQVPkx.exit.call(uintP7uyldF, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringduew2JS = "PIUc1jvca1d0wyxv119wNoYTyzdqigTUbfLC5jhUmvmfnrks1qQ4"
		const stringeHTVPZf = "CDrCdhUskPgSRrKOL9S"
		const uintVQ90PrA = BigInt("246")
		const WolfStakingRewardsxyvAVkL = await WolfStakingRewards.new(stringduew2JS, stringeHTVPZf, uintVQ90PrA, {from: accounts[5]});
		const uintDfeB6Qb = BigInt("1762")
		const uintkc9XUxu = BigInt("1151")
		const uintJ7JyphN = BigInt("253")
		const uintBDuLqH2 = BigInt("1620")
		const uint256PqIqXTF = await WolfStakingRewardsxyvAVkL.withdraw.call(uintkc9XUxu, uintDfeB6Qb, {from: accounts[3]});
		const uint256Bhfvxp = await WolfStakingRewardsxyvAVkL.stake.call(uintBDuLqH2, uintJ7JyphN, {from: accounts[1]});
		const uint8ZASQtGI = await WolfStakingRewardsxyvAVkL.decimals.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMwNX8i = "i3LDFTlPCN38N3GlRlcw4rUfsnlepmSLtxzxnO5h4xyrIi4cky"
		const stringS2Vii2D = "oKVu3eZPiz4bIDECaUon9NFmQYCKoNlWU"
		const uintK1oqWHz = BigInt("188")
		const WolfStakingRewardsaoFJ8Hz = await WolfStakingRewards.new(stringMwNX8i, stringS2Vii2D, uintK1oqWHz, {from: accounts[1]});
		const uintIzv6Bvb = BigInt("237")
		const uintr1ULqHk = BigInt("1565")
		const uintz7R3SaP = BigInt("805")
		const uintPcaiB8d = BigInt("1138")
		const uintysYtuIt = BigInt("201")
		const addressiefsueC = accounts[5]
		const uintGHt3lx = BigInt("1093")
		const uintTQcoVx = BigInt("5")
		const uint256gm41GH = await WolfStakingRewardsaoFJ8Hz.stake.call(uintr1ULqHk, uintIzv6Bvb, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gI7UuF6 = await WolfStakingRewardsaoFJ8Hz.stake.call(uintPcaiB8d, uintz7R3SaP, {from: accounts[4]});
		const addressLVHyv8D = await WolfStakingRewardsaoFJ8Hz.updateReward.call(addressiefsueC, uintysYtuIt, {from: accounts[2]});
		const uint256dKYkepT = await WolfStakingRewardsaoFJ8Hz.stake.call(uintTQcoVx, uintGHt3lx, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringL45hg94 = "AlatFes3IEXkWtUKLL8ar2PncuvXijVspflMyraU24J9BLfoxtpFQ7377w6GnR4bN3"
		const stringFZVo2WY = "99WINN8xBPUF1fQfNoDBLUXg1nwMmZK"
		const uintpRryjLG = BigInt("66")
		const WolfStakingRewardsGoynDDf = await WolfStakingRewards.new(stringL45hg94, stringFZVo2WY, uintpRryjLG, {from: "0x0000000000000000000000000000000000000001"});
		const uintvXNswgh = BigInt("1223")
		const string2o3DB8 = await WolfStakingRewardsGoynDDf.symbol.call({from: accounts[0]});
		await WolfStakingRewardsGoynDDf.onlyOwner.call({from: accounts[3]});
		const uint256BkTCBsq = await WolfStakingRewardsGoynDDf.rewardPerToken.call(uintvXNswgh, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringEDQAXgP = "NYR68dBQRHyAxStjzXRiLCBj964kYfAOEEPlDAz6Xq5"
		const stringUx3PDYx = "FaVWLKtGFqhwXtAiedE1xp26p4Gs2xQWIj0pDkL4iA6pQkwG5u9bUB"
		const uintGDMYlKD = BigInt("44")
		const WolfStakingRewardsuXC8Zq = await WolfStakingRewards.new(stringEDQAXgP, stringUx3PDYx, uintGDMYlKD, {from: accounts[5]});
		const uintyXKTM9j = BigInt("66")
		const addressn5zNf1 = accounts[5]
		const uint256e8UfFH7 = await WolfStakingRewardsuXC8Zq.balanceOfPerPool.call(addressn5zNf1, uintyXKTM9j, {from: accounts[3]});
		await WolfStakingRewardsuXC8Zq.onlyRewardsDistribution.call({from: accounts[0]});
		const stringA4M64H = await WolfStakingRewardsuXC8Zq.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringb9kIfgC = "3fH5"
		const stringDfDUQIx = "dnwx8CkydHhcgoT4LKQw9EIZb1xGlklzdL1gqreQCMKP96KgweBTkgGo3"
		const uintgdJCPLG = BigInt("87")
		const WolfStakingRewardsc6faNGZ = await WolfStakingRewards.new(stringb9kIfgC, stringDfDUQIx, uintgdJCPLG, {from: accounts[2]});
		const uintTiRZpjl = BigInt("1104")
		const addressvE63PrO = "0x0000000000000000000000000000000000000001"
		const uintcjpb0Rp = BigInt("1035")
		const uintRJ8HoTi = BigInt("1200")
		const uintVr5tHvC = BigInt("843")
		await WolfStakingRewardsc6faNGZ.nonReentrant.call({from: accounts[0]});
		await WolfStakingRewardsc6faNGZ.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256L3DQLX = await WolfStakingRewardsc6faNGZ.earned.call(addressvE63PrO, uintTiRZpjl, {from: accounts[5]});
		const uint256kGbe42u = await WolfStakingRewardsc6faNGZ.withdraw.call(uintRJ8HoTi, uintcjpb0Rp, {from: accounts[1]});
		const uint256arrayBW7Lp5 = await WolfStakingRewardsc6faNGZ.updateNotifyRewardAmount.call(uintVr5tHvC, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFsVolb = "HJKKfUTTzB6wjo9p1gReiM3cKMEFhhSdrEtasdGdr3efJisUkPhRHLPRr"
		const stringsfb7HxB = "JWxmYu68tlfPTKJQFKiukvsWsRIoIf8LhOdZdgdmcx7oEOVD57oI3Ms39ic8m2sdYp9ysUpPyps4ci9nO6inJu7XC9XKXHLXpoP"
		const uintpupC6ms = BigInt("199")
		const WolfStakingRewardsI0rbzn = await WolfStakingRewards.new(stringFsVolb, stringsfb7HxB, uintpupC6ms, {from: accounts[1]});
		const uinteBFQE0f = BigInt("1003")
		const uintU1DSKdv = BigInt("1765")
		const uintGYoMjhW = BigInt("1103")
		const uintOdVwzA8 = BigInt("1944")
		const addressZ1DqtTH = accounts[0]
		const uint256HS191ur = await WolfStakingRewardsI0rbzn.exit.call(uinteBFQE0f, {from: accounts[2]});
		const uint256zck6R1 = await WolfStakingRewardsI0rbzn.getRewardForDuration.call(uintU1DSKdv, {from: accounts[3]});
		const uint256Kle4OE3 = await WolfStakingRewardsI0rbzn.lastTimeRewardApplicable.call(uintGYoMjhW, {from: accounts[3]});
		const uint256sHjk0um = await WolfStakingRewardsI0rbzn.earned.call(addressZ1DqtTH, uintOdVwzA8, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsHozhIZ = "R9DULX23H1h66WqVPdGzE2gfoGPdeV19batWvKy5COqGx8broLSQjMSCVOi46kNc4YtAoiao4Owa3HfVb5ljQqXiTfgV"
		const stringLi6Ojh7 = "DGAUaTFBp3kVOYbNUYkrcRHTqrCWObYWJM4gbHtQpT83KVqFV4E8XFNuzpGAcRR"
		const uintNjodHcR = BigInt("249")
		const WolfStakingRewardspPanJBK = await WolfStakingRewards.new(stringsHozhIZ, stringLi6Ojh7, uintNjodHcR, {from: accounts[2]});
		const uintslCK2Xi = BigInt("881")
		const uintr4R6XPy = BigInt("456")
		const uintt2qqDpJ = BigInt("1461")
		const uintTfTkw3A = BigInt("2011")
		const uint256mBtAxzn = await WolfStakingRewardspPanJBK.exit.call(uintslCK2Xi, {from: accounts[0]});
		const uint256Li5thPt = await WolfStakingRewardspPanJBK.stake.call(uintt2qqDpJ, uintr4R6XPy, {from: accounts[3]});
		const uint256T6KhAvX = await WolfStakingRewardspPanJBK.totalSupplyPerPool.call(uintTfTkw3A, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnm3pSqV = "dTpBi49JFQ3Nu9fMWYoS3IqxtU5XiRn6aw84wT8rl15lDN1ASNVTIi8rPQqHbrgoTHWBWULXfaxChSXS9wYiqkVylP0F"
		const stringoA1xjb = "MqosY6agheHaFNJsAF5oFJW4uA4h3iA5p6USYn0iKy"
		const uintEQ64GTs = BigInt("80")
		const WolfStakingRewardsneznkSE = await WolfStakingRewards.new(stringnm3pSqV, stringoA1xjb, uintEQ64GTs, {from: accounts[1]});
		const uintzBPaIOm = BigInt("922")
		const uintExVgiLv = BigInt("2001")
		const addresskHQj3Qs = accounts[3]
		const uintC3dIkLh = BigInt("504")
		const uintkcGaphZ = BigInt("1119")
		const uinth0CIDTI = BigInt("1710")
		const uint256ub2Lu6m = await WolfStakingRewardsneznkSE.getRewardForDuration.call(uintzBPaIOm, {from: accounts[1]});
		const addressuGwTEpL = await WolfStakingRewardsneznkSE.updateReward.call(addresskHQj3Qs, uintExVgiLv, {from: accounts[1]});
		const uint256unBIN4 = await WolfStakingRewardsneznkSE.withdrawRemainingBalance.call(uintkcGaphZ, uintC3dIkLh, {from: accounts[4]});
		const uint256R1zJRTx = await WolfStakingRewardsneznkSE.rewardPerToken.call(uinth0CIDTI, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMzjbfU5 = "jJo3dB2SpqtDdwiKd83dnHLz9D19DuHqyqK9F5u4CmqKdIzatKmfm"
		const stringjfh6BjX = "y2z5kCXlU"
		const uintVmIIP9L = BigInt("244")
		const WolfStakingRewardsl2N6Seh = await WolfStakingRewards.new(stringMzjbfU5, stringjfh6BjX, uintVmIIP9L, {from: accounts[3]});
		const uint0ZvVvK = BigInt("333")
		const addressTgo2q2s = accounts[5]
		const uintQ47aLPO = BigInt("1137")
		const uintv93VQEU = BigInt("3")
		const uintacLPzH9 = BigInt("1252")
		const addressruxJbFq = await WolfStakingRewardsl2N6Seh.updateReward.call(addressTgo2q2s, uint0ZvVvK, {from: accounts[0]});
		await WolfStakingRewardsl2N6Seh.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256QefvcX = await WolfStakingRewardsl2N6Seh.getRewardForDuration.call(uintQ47aLPO, {from: "0x0000000000000000000000000000000000000001"});
		const uint2568J8Bwb = await WolfStakingRewardsl2N6Seh.lastTimeRewardApplicable.call(uintv93VQEU, {from: accounts[1]});
		await WolfStakingRewardsl2N6Seh.nonReentrant.call({from: accounts[3]});
		const uint256KkOI00b = await WolfStakingRewardsl2N6Seh.totalSupplyPerPool.call(uintacLPzH9, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCniS9XB = "7NuJ6a4AZET4TAXXkRyH7QuhHp6TVl5xohr9inlLiWnt283kvQuTbfHz1QXIShtOMXSnFrWLBAWNdVEVgMvEEkQ"
		const stringI4VaAOQ = "1ncVBI0qmE4LYK0fRxNlgixpsHUS5XzTvOK7om1n4QsGt02c99G0gGKEzkZOdedSOha"
		const uintEwPrW4q = BigInt("156")
		const WolfStakingRewardsyJENZtD = await WolfStakingRewards.new(stringCniS9XB, stringI4VaAOQ, uintEwPrW4q, {from: accounts[5]});
		const uintyhppX1v = BigInt("824")
		const addressoCTaK2 = accounts[3]
		const uintEyB5nCw = BigInt("632")
		const uint256If6GtFZ = await WolfStakingRewardsyJENZtD.balanceOfPerPool.call(addressoCTaK2, uintyhppX1v, {from: accounts[2]});
		const stringpuv1nLX = await WolfStakingRewardsyJENZtD.symbol.call({from: accounts[1]});
		const uint256rlobMKj = await WolfStakingRewardsyJENZtD.exit.call(uintEyB5nCw, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhUonMCW = "7fmsyLwXyb7qLWiY788OSeWGljgqF3h5UETuDgEfgw1ArFWK4wu2tiy5iG"
		const stringP0aSy6j = "7IG8WCB2tEGTKVbdecCVFIgZueI3JzmfExhUZyDQRuEyG1iO1Ev2X5ncQEFMCArT12ijHqbWCL35Gxoc"
		const uintUtC0qLl = BigInt("101")
		const WolfStakingRewardsbOkPWrX = await WolfStakingRewards.new(stringhUonMCW, stringP0aSy6j, uintUtC0qLl, {from: accounts[3]});
		const uintoMendBg = BigInt("1787")
		const stringa9jiHrZ = await WolfStakingRewardsbOkPWrX.name.call({from: accounts[0]});
		const uint256dZhsElr = await WolfStakingRewardsbOkPWrX.getRewardForDuration.call(uintoMendBg, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPOLOs5f = "omOBbJzb3gWAnO0voWzJBHZUPPEMxnKA7hDgH84Dp7c3RbsRNoS5cL6WHaaTwQQ9jjgH7uFpd7lEmBJmi"
		const stringuxBtGkt = "htcUbv7"
		const uintuNniUxY = BigInt("244")
		const WolfStakingRewardsN47AwFP = await WolfStakingRewards.new(stringPOLOs5f, stringuxBtGkt, uintuNniUxY, {from: accounts[0]});
		const uintmdRH4jR = BigInt("1503")
		const addressop6YKJW = accounts[4]
		const uintlFjae7g = BigInt("222")
		const addressPkFcqHr = accounts[0]
		const uintV5xHRWx = BigInt("837")
		const addressRDm9OY = accounts[1]
		const uintyZdNJxh = BigInt("1255")
		const addressRikyW0T = accounts[2]
		const uint256ZGIgF5X = await WolfStakingRewardsN47AwFP.earned.call(addressop6YKJW, uintmdRH4jR, {from: accounts[1]});
		await WolfStakingRewardsN47AwFP.nonReentrant.call({from: accounts[2]});
		const uint256ppRIZvM = await WolfStakingRewardsN47AwFP.balanceOfPerPool.call(addressPkFcqHr, uintlFjae7g, {from: accounts[2]});
		const addressAXj4NtQ = await WolfStakingRewardsN47AwFP.updateReward.call(addressRDm9OY, uintV5xHRWx, {from: "0x0000000000000000000000000000000000000001"});
		const uint8SagnrkV = await WolfStakingRewardsN47AwFP.decimals.call({from: accounts[0]});
		const uint256oZv0MOF = await WolfStakingRewardsN47AwFP.balanceOfPerPool.call(addressRikyW0T, uintyZdNJxh, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWQYzO3M = "8tCfuf8HoSvkoR1v"
		const stringIGVPxia = "acoNBH7fozvtNSALyPD6l9hwAGggGEp1CpaUjU1mBtqMPi"
		const uintvfqulMW = BigInt("83")
		const WolfStakingRewardsQYdvPY6 = await WolfStakingRewards.new(stringWQYzO3M, stringIGVPxia, uintvfqulMW, {from: accounts[5]});
		const uintGaWPh18 = BigInt("1135")
		const uint24iSkN = BigInt("1586")
		const uintCgSiYg5 = BigInt("196")
		const uintWB1zlEF = BigInt("1055")
		const uintYDKbSUp = BigInt("1100")
		const uint256LhG7noj = await WolfStakingRewardsQYdvPY6.rewardPerToken.call(uintGaWPh18, {from: accounts[0]});
		const uint256PLh5DX2 = await WolfStakingRewardsQYdvPY6.lastTimeRewardApplicable.call(uint24iSkN, {from: accounts[2]});
		const uintenSpCYN = await WolfStakingRewardsQYdvPY6.getReward.call(uintCgSiYg5, {from: accounts[3]});
		const uint256cioOpTu = await WolfStakingRewardsQYdvPY6.withdraw.call(uintYDKbSUp, uintWB1zlEF, {from: accounts[1]});
		await WolfStakingRewardsQYdvPY6.onlyOwner.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUgctH0V = "okB7CqWuxHGbwp8BZAocYuz7QwSoJMqdK9CKztqJGwHiCs2JdvjilEAz7fPdVWGQEKM1RgvcgwILYKIHDoldhf2wb"
		const stringlaWczxn = "q807V7BclJ3sjeHG1"
		const uintZnVhjoW = BigInt("31")
		const WolfStakingRewardsE3zdJns = await WolfStakingRewards.new(stringUgctH0V, stringlaWczxn, uintZnVhjoW, {from: accounts[3]});
		const uintj9oVNG = BigInt("523")
		const uintjkY3K8g = BigInt("825")
		const uintzd6yrk8 = BigInt("57")
		const uint256jkK3JIH = await WolfStakingRewardsE3zdJns.exit.call(uintj9oVNG, {from: accounts[3]});
		const uint256rjNwBI6 = await WolfStakingRewardsE3zdJns.rewardPerToken.call(uintjkY3K8g, {from: accounts[5]});
		const uint256cLRScMb = await WolfStakingRewardsE3zdJns.lastTimeRewardApplicable.call(uintzd6yrk8, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMccyTr5 = "viiBDWe9JhPsq5aGKdCxe9bRBJKrYngCW6bbfhRFcb"
		const stringvkDDeFr = "zHhEfYPVDYN23upCqxePSgKMixpR"
		const uintHkfya8s = BigInt("38")
		const WolfStakingRewardsDp2zkHH = await WolfStakingRewards.new(stringMccyTr5, stringvkDDeFr, uintHkfya8s, {from: accounts[0]});
		const uintf9V4o1W = BigInt("1014")
		const uintdvlm2Q = BigInt("1728")
		const uintgMe1S9l = BigInt("12")
		const uintmGKUYM = BigInt("124")
		const uinttLY0sZH = BigInt("1650")
		const uintY6EFYvD = BigInt("785")
		const addresssPJEdPG = accounts[3]
		const uint256QvLTd9w = await WolfStakingRewardsDp2zkHH.exit.call(uintf9V4o1W, {from: accounts[4]});
		const uint256eKuYXno = await WolfStakingRewardsDp2zkHH.withdraw.call(uintgMe1S9l, uintdvlm2Q, {from: accounts[2]});
		const uintzwaueA1 = await WolfStakingRewardsDp2zkHH.getReward.call(uintmGKUYM, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Z5D39kU = await WolfStakingRewardsDp2zkHH.rewardPerToken.call(uinttLY0sZH, {from: accounts[1]});
		const string2RrSs6 = await WolfStakingRewardsDp2zkHH.name.call({from: accounts[0]});
		const addressdEBLGQM = await WolfStakingRewardsDp2zkHH.updateReward.call(addresssPJEdPG, uintY6EFYvD, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfURCHM = "CJbcuOfDAAOAnj3OEsArKdRFWq"
		const stringdxSxYRa = "MErsHeb75aKvf82pKj82PaFivieJKvuwssAfW2qm5qBUOyBv88Gi0yJVOL8j6Dxl5R6jEu2J5kPKa6porEKl"
		const uintVuofEoW = BigInt("32")
		const WolfStakingRewardss0Gwg1Z = await WolfStakingRewards.new(stringfURCHM, stringdxSxYRa, uintVuofEoW, {from: accounts[5]});
		const uint2H9G2B = BigInt("1221")
		const addresss3mqAVW = accounts[0]
		const uintDWL7Ya8 = BigInt("900")
		const uintWn8Cy9x = BigInt("1677")
		const uint256M6gG0eq = await WolfStakingRewardss0Gwg1Z.earned.call(addresss3mqAVW, uint2H9G2B, {from: accounts[2]});
		const uint256KSQx1aq = await WolfStakingRewardss0Gwg1Z.stake.call(uintWn8Cy9x, uintDWL7Ya8, {from: accounts[1]});
		await WolfStakingRewardss0Gwg1Z.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJ3VIkQA = "I213xTU5xfas1WawVcyi1m"
		const stringn5wgoA = "zl2xQGwqGdjK4wq1Y09YgK7Bmh7Cw5"
		const uintQpYP5u2 = BigInt("218")
		const WolfStakingRewardsjsPAwrs = await WolfStakingRewards.new(stringJ3VIkQA, stringn5wgoA, uintQpYP5u2, {from: accounts[4]});
		const uintcfEG7PQ = BigInt("433")
		const uintQSkZib4 = BigInt("1158")
		const uintm4sT0x = BigInt("1690")
		const uintwGrlMxU = BigInt("438")
		const uintFYYZD3S = BigInt("775")
		const uint256l4soYd6 = await WolfStakingRewardsjsPAwrs.stake.call(uintQSkZib4, uintcfEG7PQ, {from: accounts[2]});
		const uint256nIJtsg5 = await WolfStakingRewardsjsPAwrs.lastTimeRewardApplicable.call(uintm4sT0x, {from: accounts[4]});
		await WolfStakingRewardsjsPAwrs.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256LwCudDA = await WolfStakingRewardsjsPAwrs.stake.call(uintFYYZD3S, uintwGrlMxU, {from: accounts[0]});
	});
})