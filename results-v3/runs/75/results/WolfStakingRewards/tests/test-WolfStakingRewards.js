const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressrgaQ0Ld = accounts[2]
		const addressrD1uDCC = accounts[1]
		const addresscV4IfNo = accounts[3]
		const WolfStakingRewardsMSTydC = await WolfStakingRewards.new(addressrgaQ0Ld, addressrD1uDCC, addresscV4IfNo, {from: accounts[3]});
		const uintdFROwLA = BigInt("1362")
		const uintCbPtCP5 = BigInt("2003")
		const uintjYGwQoX = BigInt("88")
		const uintJLKF6H9 = BigInt("428")
		const addressB4xYTdb = accounts[3]
		const uint256uw95QJk = await WolfStakingRewardsMSTydC.withdraw.call(uintCbPtCP5, uintdFROwLA, {from: accounts[2]});
		const uint256nJYTjsg = await WolfStakingRewardsMSTydC.getRewardForDuration.call(uintjYGwQoX, {from: accounts[2]});
		const addressFyto2c = await WolfStakingRewardsMSTydC.updateReward.call(addressB4xYTdb, uintJLKF6H9, {from: accounts[4]});

		await expect(WolfStakingRewardsMSTydC.withdraw.call(uintCbPtCP5, uintdFROwLA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresssUca884 = accounts[1]
		const addressQY7Jmuv = accounts[0]
		const addressOLTRGfm = accounts[4]
		const WolfStakingRewardskwVhx59 = await WolfStakingRewards.new(addresssUca884, addressQY7Jmuv, addressOLTRGfm, {from: accounts[2]});
		const uintWq5iKJZ = BigInt("1658")
		const uintljgZ3KB = BigInt("546")
		const uintQmfuHOj = BigInt("767")
		const uintaZQ9pMo = BigInt("44")
		const addressmbx60IR = accounts[2]
		const uint256UQapEhv = await WolfStakingRewardskwVhx59.exit.call(uintWq5iKJZ, {from: accounts[3]});
		const uint256ou2wrO4 = await WolfStakingRewardskwVhx59.rewardPerToken.call(uintljgZ3KB, {from: accounts[0]});
		const uint256pzMf55 = await WolfStakingRewardskwVhx59.lastTimeRewardApplicable.call(uintQmfuHOj, {from: accounts[3]});
		const uint256VlPxBSv = await WolfStakingRewardskwVhx59.balanceOfPerPool.call(addressmbx60IR, uintaZQ9pMo, {from: accounts[2]});

		await expect(WolfStakingRewardskwVhx59.exit.call(uintWq5iKJZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressScDSDmo = accounts[1]
		const addressVeRc5oY = accounts[2]
		const addressaYv9piM = accounts[3]
		const WolfStakingRewardscQeW3uB = await WolfStakingRewards.new(addressScDSDmo, addressVeRc5oY, addressaYv9piM, {from: accounts[3]});
		const uintWLIf06T = BigInt("1537")
		const uintlaSYJvW = BigInt("134")
		const uintFeS5Lb9 = BigInt("1903")
		await WolfStakingRewardscQeW3uB.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256njIWikQ = await WolfStakingRewardscQeW3uB.rewardPerToken.call(uintWLIf06T, {from: accounts[1]});
		const uint256GjEccxV = await WolfStakingRewardscQeW3uB.rewardPerToken.call(uintlaSYJvW, {from: accounts[4]});
		const uint256yCb1Jm1 = await WolfStakingRewardscQeW3uB.lastTimeRewardApplicable.call(uintFeS5Lb9, {from: accounts[4]});
		await WolfStakingRewardscQeW3uB.nonReentrant.call({from: accounts[1]});
		await WolfStakingRewardscQeW3uB.nonReentrant.call({from: accounts[4]});

		await expect(WolfStakingRewardscQeW3uB.onlyRewardsDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressf9qJpO5 = accounts[5]
		const addressQsVKWl = accounts[1]
		const addressINjGwOv = accounts[1]
		const WolfStakingRewardsDbVsIj9 = await WolfStakingRewards.new(addressf9qJpO5, addressQsVKWl, addressINjGwOv, {from: accounts[3]});
		const uintZjttukl = BigInt("120")
		const uintXIs3Lm4 = BigInt("1491")
		const uintO5VO45W = BigInt("835")
		const uintLl3zBx6 = BigInt("1554")
		const addresslh9yTKV = accounts[5]
		const uintiksjAuA = await WolfStakingRewardsDbVsIj9.getReward.call(uintZjttukl, {from: accounts[5]});
		const uint256wjVAu96 = await WolfStakingRewardsDbVsIj9.withdrawRemainingBalance.call(uintO5VO45W, uintXIs3Lm4, {from: accounts[1]});
		const stringlSahhke = await WolfStakingRewardsDbVsIj9.name.call({from: accounts[4]});
		const uint256MzTSGY2 = await WolfStakingRewardsDbVsIj9.balanceOfPerPool.call(addresslh9yTKV, uintLl3zBx6, {from: accounts[3]});

		await expect(WolfStakingRewardsDbVsIj9.withdrawRemainingBalance.call(uintO5VO45W, uintXIs3Lm4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringO1DWliM = "4ROMHlyXUGQZWcgtEOmBltNOh5ld66z4yPWpO8VhmN8MaG1S0wkF2zY"
		const stringda1DoKi = "xlKi8cPYBBGtDGly7EXLWBKVhySF3MTDo8f7XfMQI94tDaFPlP1LWOIr4oRzJrdXMaz65LmdFJykacMZNtIELZYchz2u"
		const uintALGaRMf = BigInt("137")
		const WolfStakingRewardsh5imhb3 = await WolfStakingRewards.new(stringO1DWliM, stringda1DoKi, uintALGaRMf, {from: accounts[4]});
		const uintiBEJ8ro = BigInt("1245")
		const uintZi5PllS = BigInt("128")
		const uinth65IXO = BigInt("602")
		const uintNakCahL = BigInt("417")
		const uintrflOiGL = BigInt("1137")
		const uintkf0l9Jg = BigInt("2020")
		const uintqJ68sV1 = BigInt("983")
		const uint256BitFnR3 = await WolfStakingRewardsh5imhb3.exit.call(uintiBEJ8ro, {from: accounts[0]});
		const uint256hnOugHj = await WolfStakingRewardsh5imhb3.stake.call(uinth65IXO, uintZi5PllS, {from: accounts[3]});
		const uint256N3SVZIb = await WolfStakingRewardsh5imhb3.lastTimeRewardApplicable.call(uintNakCahL, {from: accounts[1]});
		const uintcJHn9bP = await WolfStakingRewardsh5imhb3.getReward.call(uintrflOiGL, {from: accounts[2]});
		const uint8Qa1dZ6 = await WolfStakingRewardsh5imhb3.decimals.call({from: accounts[4]});
		const uint256NzjJIRp = await WolfStakingRewardsh5imhb3.withdrawRemainingBalance.call(uintqJ68sV1, uintkf0l9Jg, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdL1p6y = "p7Xtpx118gImjucGmwY"
		const stringX73NEWj = "KVrv4MPeMeaYpCnvYds4v59UfTaVdcjoAK1NFxLI2HeB3CE"
		const uintz6lnulQ = BigInt("13")
		const WolfStakingRewardsm0nKmaE = await WolfStakingRewards.new(stringdL1p6y, stringX73NEWj, uintz6lnulQ, {from: accounts[0]});
		const uintZBRtwGn = BigInt("1247")
		const uintRmupdly = BigInt("425")
		const uintEjAoYhM = BigInt("1430")
		await WolfStakingRewardsm0nKmaE.onlyOwner.call({from: accounts[5]});
		const uintCUtCIba = await WolfStakingRewardsm0nKmaE.getReward.call(uintZBRtwGn, {from: accounts[4]});
		const uint256UNPUQuo = await WolfStakingRewardsm0nKmaE.withdrawRemainingBalance.call(uintEjAoYhM, uintRmupdly, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressNVsmHig = accounts[3]
		const addresscYagz8s = accounts[1]
		const addressguKpFhX = accounts[4]
		const WolfStakingRewardsmCw7nB = await WolfStakingRewards.new(addressNVsmHig, addresscYagz8s, addressguKpFhX, {from: "0x0000000000000000000000000000000000000001"});
		const uintnKcXboE = BigInt("132")
		const addressKTKGgh = accounts[2]
		const uintQVCLjG = BigInt("23")
		const addressV1nD3S8 = accounts[4]
		const uintXVTekmD = BigInt("409")
		const uintPRHkFma = BigInt("523")
		await WolfStakingRewardsmCw7nB.onlyOwner.call({from: accounts[3]});
		const addressLH9KN4w = await WolfStakingRewardsmCw7nB.updateReward.call(addressKTKGgh, uintnKcXboE, {from: accounts[3]});
		const uint256aiZVZy = await WolfStakingRewardsmCw7nB.balanceOfPerPool.call(addressV1nD3S8, uintQVCLjG, {from: accounts[4]});
		const uint256c84RRxH = await WolfStakingRewardsmCw7nB.stake.call(uintPRHkFma, uintXVTekmD, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringyVP25hq = "GtMYyshbHG0SBIdLTLQXFZz"
		const stringNl4D7iP = "D5CzY3tfCyWDDpNk6S7XjUTfLIlQBOb8QIh5P1YrChkgTqOybGLTWa7i16vfzq4AU3sM6vFua4oVjl"
		const uintZUdvzzZ = BigInt("218")
		const WolfStakingRewardskgRWo7O = await WolfStakingRewards.new(stringyVP25hq, stringNl4D7iP, uintZUdvzzZ, {from: accounts[3]});
		const uintpe1BDny = BigInt("1579")
		const uintMhIGRFC = BigInt("333")
		const uintE683Boe = BigInt("729")
		const uintGFMxfrl = BigInt("1379")
		const uintuNgeWgu = BigInt("574")
		const addressERjCtC = "0x0000000000000000000000000000000000000001"
		const uintLzcyTQT = BigInt("939")
		const uint256aX1AfUT = await WolfStakingRewardskgRWo7O.lastTimeRewardApplicable.call(uintpe1BDny, {from: accounts[3]});
		const uint256QZzo1QG = await WolfStakingRewardskgRWo7O.stake.call(uintE683Boe, uintMhIGRFC, {from: accounts[1]});
		await WolfStakingRewardskgRWo7O.nonReentrant.call({from: accounts[1]});
		const uint256jdpG8j = await WolfStakingRewardskgRWo7O.getRewardForDuration.call(uintGFMxfrl, {from: accounts[5]});
		const addressZq2LjqI = await WolfStakingRewardskgRWo7O.updateReward.call(addressERjCtC, uintuNgeWgu, {from: accounts[1]});
		const uint256arrayWQnnU9A = await WolfStakingRewardskgRWo7O.updateNotifyRewardAmount.call(uintLzcyTQT, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressxqeovD = accounts[5]
		const addressA4LpTz4 = accounts[1]
		const address21rkwx = accounts[1]
		const WolfStakingRewardsDbVsIj9 = await WolfStakingRewards.new(addressxqeovD, addressA4LpTz4, address21rkwx, {from: accounts[3]});
		const uintzHPvG9b = BigInt("120")
		const uintBaSrWKp = BigInt("1554")
		const addressZCFtCVu = accounts[5]
		const uintiksjAuA = await WolfStakingRewardsDbVsIj9.getReward.call(uintzHPvG9b, {from: accounts[5]});
		const uint256MzTSGY2 = await WolfStakingRewardsDbVsIj9.balanceOfPerPool.call(addressZCFtCVu, uintBaSrWKp, {from: accounts[3]});

		assert.equal(uint256MzTSGY2, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const addressAU89S6e = accounts[5]
		const addressq84u0Ti = accounts[1]
		const addressbsvZmHP = accounts[1]
		const WolfStakingRewardsDbVsIj9 = await WolfStakingRewards.new(addressAU89S6e, addressq84u0Ti, addressbsvZmHP, {from: accounts[3]});
		const uintI7gdz7k = BigInt("120")
		const uintlzR2Ce = BigInt("1407")
		const uintg8pG21B = BigInt("1491")
		const uintbnX48M = BigInt("835")
		const uintJozI39S = BigInt("1554")
		const addressb2Qn56C = accounts[5]
		const uintiksjAuA = await WolfStakingRewardsDbVsIj9.getReward.call(uintI7gdz7k, {from: accounts[5]});
		const uint256t2GhqmV = await WolfStakingRewardsDbVsIj9.getRewardForDuration.call(uintlzR2Ce, {from: accounts[1]});
		const uint256wjVAu96 = await WolfStakingRewardsDbVsIj9.withdrawRemainingBalance.call(uintbnX48M, uintg8pG21B, {from: accounts[1]});
		const stringlSahhke = await WolfStakingRewardsDbVsIj9.name.call({from: accounts[4]});
		const uint256MzTSGY2 = await WolfStakingRewardsDbVsIj9.balanceOfPerPool.call(addressb2Qn56C, uintJozI39S, {from: accounts[3]});

		await expect(WolfStakingRewardsDbVsIj9.getRewardForDuration.call(uintlzR2Ce, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringEKRnW5d = "O41VgEYwqyPWgalfBRuu9eRT78pVk"
		const stringSriqbH = "yZ5wi3k8Jq8Oouw47QlF6vnt1n8CnI0q2qOBejabJfRB0ttCJatmbYwfEJRPKRE7I8n"
		const uintg76an9d = BigInt("56")
		const WolfStakingRewardsfA2RrF6 = await WolfStakingRewards.new(stringEKRnW5d, stringSriqbH, uintg76an9d, {from: accounts[1]});
		const uintAZnaWR = BigInt("1225")
		const uintpMGidCl = BigInt("552")
		const addressG9uOfAI = accounts[0]
		const uintqawCtRb = BigInt("1084")
		const uintCqUbbol = BigInt("227")
		const uint256FHJkni = await WolfStakingRewardsfA2RrF6.lastTimeRewardApplicable.call(uintAZnaWR, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pJpMt4x = await WolfStakingRewardsfA2RrF6.earned.call(addressG9uOfAI, uintpMGidCl, {from: accounts[3]});
		const stringAfNVxG = await WolfStakingRewardsfA2RrF6.name.call({from: accounts[4]});
		const uint256hcOkIGc = await WolfStakingRewardsfA2RrF6.withdraw.call(uintCqUbbol, uintqawCtRb, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressxlXyib4 = accounts[5]
		const addressQG2E7AK = accounts[1]
		const addressszn82bz = accounts[1]
		const WolfStakingRewardsDbVsIj9 = await WolfStakingRewards.new(addressxlXyib4, addressQG2E7AK, addressszn82bz, {from: accounts[3]});
		const uintOmqIYvy = BigInt("120")
		const uintAOex5Rg = BigInt("2035")
		const uintpkyCBZT = BigInt("156")
		const uintbjrYXW = BigInt("1407")
		const uintyHUGUyC = BigInt("1491")
		const uintBz4gor8 = BigInt("835")
		const uintxXEzNNU = BigInt("1554")
		const addressK7mQLnY = accounts[5]
		const uintiksjAuA = await WolfStakingRewardsDbVsIj9.getReward.call(uintOmqIYvy, {from: accounts[5]});
		const uint256vluNEmv = await WolfStakingRewardsDbVsIj9.stake.call(uintpkyCBZT, uintAOex5Rg, {from: accounts[0]});
		const uint256t2GhqmV = await WolfStakingRewardsDbVsIj9.getRewardForDuration.call(uintbjrYXW, {from: accounts[1]});
		const uint256wjVAu96 = await WolfStakingRewardsDbVsIj9.withdrawRemainingBalance.call(uintBz4gor8, uintyHUGUyC, {from: accounts[1]});
		const stringlSahhke = await WolfStakingRewardsDbVsIj9.name.call({from: accounts[4]});
		const uint256MzTSGY2 = await WolfStakingRewardsDbVsIj9.balanceOfPerPool.call(addressK7mQLnY, uintxXEzNNU, {from: accounts[3]});

		await expect(WolfStakingRewardsDbVsIj9.stake.call(uintpkyCBZT, uintAOex5Rg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressOsHm3W9 = accounts[5]
		const addressC3atbG = accounts[1]
		const addressoLVZ3UL = accounts[1]
		const WolfStakingRewardsDbVsIj9 = await WolfStakingRewards.new(addressOsHm3W9, addressC3atbG, addressoLVZ3UL, {from: accounts[3]});
		const uintmBFthvV = BigInt("729")
		const uintCyKDjgr = BigInt("120")
		const uintPdYgaxx = BigInt("1565")
		const addressrUoj1an = accounts[5]
		const uint256LjAqIym = await WolfStakingRewardsDbVsIj9.totalSupplyPerPool.call(uintmBFthvV, {from: accounts[2]});
		const uintiksjAuA = await WolfStakingRewardsDbVsIj9.getReward.call(uintCyKDjgr, {from: accounts[5]});
		const uint256MzTSGY2 = await WolfStakingRewardsDbVsIj9.balanceOfPerPool.call(addressrUoj1an, uintPdYgaxx, {from: accounts[3]});

		assert.equal(uint256LjAqIym, BigInt("0"))
		assert.equal(uint256MzTSGY2, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const stringeMmKhAI = "Wff6z42WEdf6dAXkAcj8tMIz3GuqleFsDESveYDP2bW9bwwF4YTABo6wdeRc1210Omb12GTChIGzJ2i1zJdSaDdDvEcAdUchM"
		const stringB7HM0GP = "pHoz38zpbKZeoXpxDg1"
		const uintm2MAgba = BigInt("182")
		const WolfStakingRewardsR3T0oq = await WolfStakingRewards.new(stringeMmKhAI, stringB7HM0GP, uintm2MAgba, {from: accounts[1]});
		const uintS2zlNOk = BigInt("831")
		const uintVygiOfq = BigInt("484")
		const uint7CmxPE = BigInt("903")
		const addressHPJKcT8 = accounts[0]
		const uint256arrayGEylgTh = await WolfStakingRewardsR3T0oq.updateNotifyRewardAmount.call(uintS2zlNOk, {from: accounts[3]});
		const uint256qG61eEm = await WolfStakingRewardsR3T0oq.lastTimeRewardApplicable.call(uintVygiOfq, {from: accounts[4]});
		const uint256xwTF0hB = await WolfStakingRewardsR3T0oq.earned.call(addressHPJKcT8, uint7CmxPE, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSxp0ON = "bwL"
		const stringhiAqUOO = "QEKg"
		const uintYZ6cGE9 = BigInt("107")
		const WolfStakingRewardsyIZcl7e = await WolfStakingRewards.new(stringSxp0ON, stringhiAqUOO, uintYZ6cGE9, {from: accounts[0]});
		const uintObEil8Z = BigInt("1308")
		const uinte6H0CP1 = BigInt("669")
		const addressYpd2Cj4 = accounts[1]
		const uint256txyzVtQ = await WolfStakingRewardsyIZcl7e.exit.call(uintObEil8Z, {from: accounts[0]});
		const stringI2MaJLz = await WolfStakingRewardsyIZcl7e.symbol.call({from: accounts[0]});
		const uint8pBRr4Ty = await WolfStakingRewardsyIZcl7e.decimals.call({from: accounts[1]});
		const uint256osIEGB = await WolfStakingRewardsyIZcl7e.earned.call(addressYpd2Cj4, uinte6H0CP1, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringgBjCEu6 = "peTfWXuDSryDpxEV7udXBWKlJaA50FIpnvqVZHkezUmJ5OPYE1L73S86nLygwHAjEesDwlzuMvgRldU6A3MMtwhtr4AqOuqPQGU"
		const stringVG7CIIa = "Mpsgp2EdMYmqcm3PDk3qGADDUaJEuPQYkGxSako83VRB1upnEqkbpB9TsRcdi9F9CxC4r93H"
		const uintZB0iXJK = BigInt("137")
		const WolfStakingRewardsmLZ4R7v = await WolfStakingRewards.new(stringgBjCEu6, stringVG7CIIa, uintZB0iXJK, {from: accounts[3]});
		const uintjESp9Sc = BigInt("571")
		const addressQKESuSx = accounts[3]
		const uintyFitlca = BigInt("1108")
		const uintpZbs16A = BigInt("1001")
		await WolfStakingRewardsmLZ4R7v.onlyOwner.call({from: accounts[1]});
		const uint256nHwvpu = await WolfStakingRewardsmLZ4R7v.earned.call(addressQKESuSx, uintjESp9Sc, {from: accounts[3]});
		const uint256eB1tERm = await WolfStakingRewardsmLZ4R7v.totalSupplyPerPool.call(uintyFitlca, {from: accounts[4]});
		const uint256TKPMLqC = await WolfStakingRewardsmLZ4R7v.totalSupplyPerPool.call(uintpZbs16A, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringfA5sn2I = "KJzHqeE4hr7myqVy4MEETVwx7yqI6WD5ciHO6mXMRSJDPb87uV0buvUdil"
		const stringNn5Wmhe = "vqDEtqeTMB24LRx9c8X9MtBqWxb5EngwXHElcFUmxxer2FhCEDs5PmF5KczM1r2lXjOYkseY6"
		const uintVeUjXof = BigInt("72")
		const WolfStakingRewardsrGMOGiz = await WolfStakingRewards.new(stringfA5sn2I, stringNn5Wmhe, uintVeUjXof, {from: accounts[5]});
		const uintQFLfSjr = BigInt("1475")
		const uintcGpLszp = BigInt("9")
		const uintr7YLXP1 = BigInt("92")
		const uint256e11eWfk = await WolfStakingRewardsrGMOGiz.lastTimeRewardApplicable.call(uintQFLfSjr, {from: accounts[0]});
		const uint256vgISZQH = await WolfStakingRewardsrGMOGiz.withdrawRemainingBalance.call(uintr7YLXP1, uintcGpLszp, {from: accounts[2]});
		const uint8oD51C3 = await WolfStakingRewardsrGMOGiz.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresscXBbjWj = accounts[5]
		const addresslYixXmV = accounts[1]
		const addressfxT2fq = accounts[1]
		const WolfStakingRewardsDbVsIj9 = await WolfStakingRewards.new(addresscXBbjWj, addresslYixXmV, addressfxT2fq, {from: accounts[3]});
		const uintkBLb2GU = BigInt("688")
		const uintlFXUNF8 = BigInt("1224")
		const uintjX61WZz = BigInt("120")
		const uintl73wgTN = BigInt("2035")
		const uinti1OleL = BigInt("156")
		const uintPtcJDwK = BigInt("1407")
		const uintkGMOVeq = BigInt("1121")
		const uintQQbwkHP = BigInt("1491")
		const uintfyBzRC6 = BigInt("835")
		const uintEka7Mj = BigInt("1132")
		const uintkJ8egaj = BigInt("1554")
		const addresstZG38Cu = accounts[1]
		const uintIfdk8vx = BigInt("1448")
		const uintb9Hbh5C = BigInt("1468")
		const uint2566ldxMj = await WolfStakingRewardsDbVsIj9.withdrawRemainingBalance.call(uintlFXUNF8, uintkBLb2GU, {from: accounts[3]});
		const uintiksjAuA = await WolfStakingRewardsDbVsIj9.getReward.call(uintjX61WZz, {from: accounts[5]});
		const uint256vluNEmv = await WolfStakingRewardsDbVsIj9.stake.call(uinti1OleL, uintl73wgTN, {from: accounts[0]});
		const uint256t2GhqmV = await WolfStakingRewardsDbVsIj9.getRewardForDuration.call(uintPtcJDwK, {from: accounts[1]});
		const uint256VYHLIdP = await WolfStakingRewardsDbVsIj9.totalSupplyPerPool.call(uintkGMOVeq, {from: accounts[5]});
		const uint256wjVAu96 = await WolfStakingRewardsDbVsIj9.withdrawRemainingBalance.call(uintfyBzRC6, uintQQbwkHP, {from: accounts[1]});
		const uintAfPWl7J = await WolfStakingRewardsDbVsIj9.getReward.call(uintEka7Mj, {from: accounts[1]});
		const stringlSahhke = await WolfStakingRewardsDbVsIj9.name.call({from: accounts[4]});
		const uint256MzTSGY2 = await WolfStakingRewardsDbVsIj9.balanceOfPerPool.call(addresstZG38Cu, uintkJ8egaj, {from: accounts[3]});
		const uint256UHL9eVV = await WolfStakingRewardsDbVsIj9.stake.call(uintb9Hbh5C, uintIfdk8vx, {from: accounts[4]});

		await expect(WolfStakingRewardsDbVsIj9.withdrawRemainingBalance.call(uintlFXUNF8, uintkBLb2GU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringV0YLwUp = "1JhZyDBWxvYKjpSNingHdO3OOmB7t7LezOvyIGdSkO"
		const stringl5Xm7nw = "KG"
		const uintbcNPQUj = BigInt("230")
		const WolfStakingRewardsgCHP1qV = await WolfStakingRewards.new(stringV0YLwUp, stringl5Xm7nw, uintbcNPQUj, {from: accounts[4]});
		const uintlfAB9Er = BigInt("1679")
		const uintBLLGKjl = BigInt("478")
		const uintvWJXp9X = BigInt("1960")
		const uintW1D9pSr = BigInt("643")
		const uintXdPShYv = BigInt("843")
		const uintxAbRgto = BigInt("662")
		const uintiN7UJCb = BigInt("876")
		const addressJyLWhi = accounts[0]
		const uint256Ntwetp5 = await WolfStakingRewardsgCHP1qV.stake.call(uintBLLGKjl, uintlfAB9Er, {from: accounts[0]});
		const uint256xXE2ECn = await WolfStakingRewardsgCHP1qV.totalSupplyPerPool.call(uintvWJXp9X, {from: "0x0000000000000000000000000000000000000001"});
		const uint2562e35OK = await WolfStakingRewardsgCHP1qV.withdrawRemainingBalance.call(uintXdPShYv, uintW1D9pSr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZdCJl5f = await WolfStakingRewardsgCHP1qV.totalSupplyPerPool.call(uintxAbRgto, {from: accounts[1]});
		const address7TFuSf = await WolfStakingRewardsgCHP1qV.updateReward.call(addressJyLWhi, uintiN7UJCb, {from: accounts[0]});
		const uint8HeHlQjc = await WolfStakingRewardsgCHP1qV.decimals.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringy4vh9cG = "4jHyyi9X463ywa4MWENIIxfNmwSvszbYmuxEstsHVRaSkSEDsccw7kyNt9gvC3kaoXVvk1xkZ3kmThikv"
		const stringRWVSFaD = "ib8MX01b"
		const uintPqRs0Eg = BigInt("91")
		const WolfStakingRewardsl4SM9c0 = await WolfStakingRewards.new(stringy4vh9cG, stringRWVSFaD, uintPqRs0Eg, {from: accounts[1]});
		const uintMFgVENz = BigInt("1153")
		const uint256QlQ6fVA = await WolfStakingRewardsl4SM9c0.totalSupplyPerPool.call(uintMFgVENz, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsl4SM9c0.onlyRewardsDistribution.call({from: accounts[4]});
		const uint8dgFIoT6 = await WolfStakingRewardsl4SM9c0.decimals.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSXB1GiT = "2NaD3GUn311Ph8j8nLFA7aOXOYV2gImLpVlN1oPQYtenLWcw2aJ4mY3hqAUpVyHbCVB3hC8rUGn2e7vBJrni0INpKQwP"
		const stringORU4QcF = "X6FWboeKg6FDVzWxSq2yOXflfE64zdmypbWqhlogiLFeHYpRx7I23hN1"
		const uintDks31gI = BigInt("53")
		const WolfStakingRewardsdHq3nmt = await WolfStakingRewards.new(stringSXB1GiT, stringORU4QcF, uintDks31gI, {from: accounts[5]});
		const uintYfflfpL = BigInt("977")
		const uint8CwzS22m = await WolfStakingRewardsdHq3nmt.decimals.call({from: accounts[2]});
		const uint256arraykzrBVgQ = await WolfStakingRewardsdHq3nmt.updateNotifyRewardAmount.call(uintYfflfpL, {from: accounts[3]});
		await WolfStakingRewardsdHq3nmt.onlyOwner.call({from: accounts[5]});
		await WolfStakingRewardsdHq3nmt.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressW6OTC7N = accounts[5]
		const addressq8avHMA = accounts[1]
		const addressxfrhAw = accounts[1]
		const WolfStakingRewardsDbVsIj9 = await WolfStakingRewards.new(addressW6OTC7N, addressq8avHMA, addressxfrhAw, {from: accounts[3]});
		const uintFrKf7A = BigInt("1245")
		const uintSotqsqu = BigInt("21")
		const uintk7alJDO = BigInt("450")
		const uintiksjAuA = await WolfStakingRewardsDbVsIj9.getReward.call(uintFrKf7A, {from: accounts[5]});
		const uint256arrayurhqeIL = await WolfStakingRewardsDbVsIj9.updateNotifyRewardAmount.call(uintSotqsqu, {from: accounts[2]});
		const uint256arrayacq1qYm = await WolfStakingRewardsDbVsIj9.updateNotifyRewardAmount.call(uintk7alJDO, {from: accounts[2]});

		await expect(WolfStakingRewardsDbVsIj9.updateNotifyRewardAmount.call(uintSotqsqu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringRTvX5zN = "i5VH82"
		const stringpMKOR2K = "iiLsQJbiFlo5sReBgb5STqUGyALuBgctVIlvFLjScpqui8UfemSxemvvfSyDWj9lf46m7mXtFEjabaz6yTBbYCBDeFYtq"
		const uintVEw0QD = BigInt("49")
		const WolfStakingRewardsFgZpPpv = await WolfStakingRewards.new(stringRTvX5zN, stringpMKOR2K, uintVEw0QD, {from: accounts[1]});
		const uintxKjsaLV = BigInt("1228")
		const stringIE1MyNX = await WolfStakingRewardsFgZpPpv.symbol.call({from: accounts[5]});
		const uint256e75jFp = await WolfStakingRewardsFgZpPpv.rewardPerToken.call(uintxKjsaLV, {from: accounts[5]});
		await WolfStakingRewardsFgZpPpv.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringInZ0cah = "uoidfUuwXVVTmpMFOSfrRjRySLoTJTiaRPHIFxba"
		const string5G88gR = "SHzhIX1HMFl0uy20MMBJmoGfzWbHU4tgVFb3pUp78Puo2HDUTXcf1TPrOWJ5YUEke2k1teFLkQs5JfWs7m"
		const uinthl1DyYW = BigInt("1")
		const WolfStakingRewardsI97MAip = await WolfStakingRewards.new(stringInZ0cah, string5G88gR, uinthl1DyYW, {from: accounts[3]});
		const uintOj4CUXV = BigInt("1801")
		const addressM4QHOjb = accounts[3]
		const uintWZQ8bQf = BigInt("793")
		const addresspOh14Kw = accounts[1]
		const uintZ5DTH4I = BigInt("1960")
		const uintO8LEj5x = BigInt("1775")
		const uint256eT8m0WK = await WolfStakingRewardsI97MAip.earned.call(addressM4QHOjb, uintOj4CUXV, {from: accounts[2]});
		const uint256z7lqCkn = await WolfStakingRewardsI97MAip.balanceOfPerPool.call(addresspOh14Kw, uintWZQ8bQf, {from: accounts[3]});
		const uintPICeqog = await WolfStakingRewardsI97MAip.getReward.call(uintZ5DTH4I, {from: accounts[0]});
		const uint256bILIF6G = await WolfStakingRewardsI97MAip.totalSupplyPerPool.call(uintO8LEj5x, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringgf4VVYH = "ctdHnyw4Njqhk48rrdtBLdHE4KAcvdEbqXO8k9dReEoyhLQS6cDdRU5Iu"
		const stringvGfMKND = "pCgaS6A7IbHQHkuIGUhjk7GxvEkLUQ7vaeEBjd4PA3Bj8w"
		const uintk9xjaRv = BigInt("204")
		const WolfStakingRewardsrNHbk49 = await WolfStakingRewards.new(stringgf4VVYH, stringvGfMKND, uintk9xjaRv, {from: accounts[1]});
		const uintNS9QZnQ = BigInt("123")
		const uintbYMeOBj = BigInt("1856")
		const addresspymBKOc = accounts[3]
		const stringysg0EfD = await WolfStakingRewardsrNHbk49.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256NDQPpFe = await WolfStakingRewardsrNHbk49.lastTimeRewardApplicable.call(uintNS9QZnQ, {from: accounts[4]});
		const uint256C2s81KY = await WolfStakingRewardsrNHbk49.earned.call(addresspymBKOc, uintbYMeOBj, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQBfQT0q = "x4SBaOgLrMJPldcazxdkfuQp7oqixOn6y0hJnhesUiPFkDowpD71nr"
		const stringNwd8Hcv = "4kyY"
		const uintdvy8h3a = BigInt("148")
		const WolfStakingRewardsjIUMsDX = await WolfStakingRewards.new(stringQBfQT0q, stringNwd8Hcv, uintdvy8h3a, {from: accounts[2]});
		const uintxqvIXXS = BigInt("703")
		const uintqgvmADh = BigInt("757")
		const uintWl5k5E3 = BigInt("1177")
		const uintuZup4Pe = BigInt("1730")
		const addressoGpuX9P = accounts[5]
		const uint256v7RzVTD = await WolfStakingRewardsjIUMsDX.totalSupplyPerPool.call(uintxqvIXXS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256arrayqsH8Duu = await WolfStakingRewardsjIUMsDX.updateNotifyRewardAmount.call(uintqgvmADh, {from: accounts[3]});
		const uint2562wshxd = await WolfStakingRewardsjIUMsDX.getRewardForDuration.call(uintWl5k5E3, {from: accounts[1]});
		await WolfStakingRewardsjIUMsDX.onlyRewardsDistribution.call({from: accounts[4]});
		const addresstE4hZq = await WolfStakingRewardsjIUMsDX.updateReward.call(addressoGpuX9P, uintuZup4Pe, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXfRdPO = "uVg3c2GnliOAXoaeg8osBHDnX9DX94aV4AC4yAWyMs9OmRE8xsnYUW6u8iyI3ABFP6IdiTHK"
		const stringIjMp6lp = "Nm1BLO2gyQIKkmGT6ejLKOcNMQpLDzr1uMfVuxdUzhhoP1pcAufVQ6DzafgXRrzIw"
		const uinttU8aExU = BigInt("7")
		const WolfStakingRewardspyexWKi = await WolfStakingRewards.new(stringXfRdPO, stringIjMp6lp, uinttU8aExU, {from: accounts[3]});
		await WolfStakingRewardspyexWKi.nonReentrant.call({from: accounts[4]});
		const stringg9hhJBe = await WolfStakingRewardspyexWKi.symbol.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIqkaIuC = "EmXoVleEhma6aY4ANuSaNcaDR0OAAGh4mdm3d10ygzYvT5QPXYuSKDugKvxyyIHm7BhjuNQUMQlYEqt"
		const stringj2OGhfX = "6vSNb2wJipkrCBAddLKSnySBY1J6sr"
		const uintpgvu7zV = BigInt("40")
		const WolfStakingRewardsj8rKKf9 = await WolfStakingRewards.new(stringIqkaIuC, stringj2OGhfX, uintpgvu7zV, {from: accounts[3]});
		const uinteiEf7mf = BigInt("1061")
		const uintScIslcV = BigInt("351")
		const uintTh2b94X = BigInt("1799")
		await WolfStakingRewardsj8rKKf9.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256nfAIlN = await WolfStakingRewardsj8rKKf9.rewardPerToken.call(uinteiEf7mf, {from: accounts[1]});
		const uint256EMWqdD3 = await WolfStakingRewardsj8rKKf9.exit.call(uintScIslcV, {from: accounts[1]});
		const uint256lBTvWRO = await WolfStakingRewardsj8rKKf9.lastTimeRewardApplicable.call(uintTh2b94X, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpw5oUS8 = "S3YV6YRNpupiGfks9DUq2uMYYTLjGrxbRNRJsmLdG8ebeU8WQoramA6IkjjV4NtYozqP7NvOpUcmYTgwNmUX7dGi"
		const stringfsAss0D = "WtvpWnzWJlhl5KgfnwkvlkMiY"
		const uintoDD6es = BigInt("207")
		const WolfStakingRewardsYDG8lP = await WolfStakingRewards.new(stringpw5oUS8, stringfsAss0D, uintoDD6es, {from: "0x0000000000000000000000000000000000000001"});
		const uintjomK2S1 = BigInt("807")
		const uintDlyUcOz = BigInt("711")
		const uintSK8Vw08 = BigInt("1420")
		const uintcnsOWMh = BigInt("1564")
		const uint256zvaKddS = await WolfStakingRewardsYDG8lP.withdraw.call(uintDlyUcOz, uintjomK2S1, {from: accounts[0]});
		const uint2561uuRPp = await WolfStakingRewardsYDG8lP.withdrawRemainingBalance.call(uintcnsOWMh, uintSK8Vw08, {from: accounts[3]});
		await WolfStakingRewardsYDG8lP.onlyRewardsDistribution.call({from: accounts[2]});
		await WolfStakingRewardsYDG8lP.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSLCy8SB = "XlA7npGJPnQkLCyKAWVQUlERxbcoZC4Ec1Hk4RX"
		const stringaQ3hqFK = "GQxEcLkFi8Pk8h7wrGoxUvm2VaMMkexqlt9CcQnFjc5Gn3YktHkFuEzdK1hvtuVk1ZuK8MtYOraE"
		const uintxGYPsaC = BigInt("159")
		const WolfStakingRewardsZ1CzoK2 = await WolfStakingRewards.new(stringSLCy8SB, stringaQ3hqFK, uintxGYPsaC, {from: accounts[4]});
		const uintopCWpwG = BigInt("1130")
		const addressAPV4xMg = accounts[0]
		const uintnTVJHJ3 = BigInt("902")
		const uintRR0ydXk = BigInt("50")
		const uintuZSmndk = BigInt("1209")
		const uintTMLXgcV = BigInt("1957")
		const uint8L7FGezN = await WolfStakingRewardsZ1CzoK2.decimals.call({from: accounts[3]});
		const addresszUUCPrR = await WolfStakingRewardsZ1CzoK2.updateReward.call(addressAPV4xMg, uintopCWpwG, {from: accounts[3]});
		const uint256arrayFJQBu0l = await WolfStakingRewardsZ1CzoK2.updateNotifyRewardAmount.call(uintnTVJHJ3, {from: accounts[4]});
		const uint256jjstxa1 = await WolfStakingRewardsZ1CzoK2.rewardPerToken.call(uintRR0ydXk, {from: accounts[4]});
		const uint256O3LLVO = await WolfStakingRewardsZ1CzoK2.withdraw.call(uintTMLXgcV, uintuZSmndk, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJv1XaaV = "xI6n9anr86r18zOSyGCgDZQ4DJxtAagzEWLKaBn5EEiS2HQu0tamU1TI5pYzKBwF5ram3JViyLvdHfh5Dx2NkDrbXsw4ZMSEH"
		const stringmBVLMFt = "px9TAkVI"
		const uintFDTfBRu = BigInt("47")
		const WolfStakingRewardsErw0WYT = await WolfStakingRewards.new(stringJv1XaaV, stringmBVLMFt, uintFDTfBRu, {from: "0x0000000000000000000000000000000000000001"});
		const uintgxbKvuq = BigInt("816")
		await WolfStakingRewardsErw0WYT.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256xWX692G = await WolfStakingRewardsErw0WYT.lastTimeRewardApplicable.call(uintgxbKvuq, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringB0ZUgQ7 = "pCFEjlG8uL2gWe7dBAAYcwchqspz5gAOb"
		const stringxaYqOp2 = "cTBehHn4eJBPQKUDIeGWuJCHNcbb2L1ivwJ"
		const uintva2XuwZ = BigInt("104")
		const WolfStakingRewardspDclgG = await WolfStakingRewards.new(stringB0ZUgQ7, stringxaYqOp2, uintva2XuwZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintNQeM9H2 = BigInt("1896")
		const addressqNlfqyU = accounts[0]
		const uintMKo5CBr = BigInt("9")
		const uint256jWAWAOB = await WolfStakingRewardspDclgG.balanceOfPerPool.call(addressqNlfqyU, uintNQeM9H2, {from: accounts[4]});
		const uint256JIHNoEL = await WolfStakingRewardspDclgG.exit.call(uintMKo5CBr, {from: accounts[2]});
		await WolfStakingRewardspDclgG.nonReentrant.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringRbVceon = "wijG5ZU7cqwtvKNgHDuYIi9E4b6TQhMSv9C"
		const stringQQN8tb = "nQSTli2tC7shQhu6zgFfI58P7QDCLEbmHh0t86r6MAmqqguFnmPFyMB9LKwTVC8h34THLV"
		const uintphMlxrv = BigInt("119")
		const WolfStakingRewardsfbH4lF = await WolfStakingRewards.new(stringRbVceon, stringQQN8tb, uintphMlxrv, {from: accounts[3]});
		const uintxIMCNYc = BigInt("1076")
		const uintmNaeX2J = BigInt("1226")
		const addressyPczbD = accounts[4]
		const uinttiuRF9 = BigInt("1966")
		const uint256NXNF0C6 = await WolfStakingRewardsfbH4lF.totalSupplyPerPool.call(uintxIMCNYc, {from: accounts[1]});
		const addressahqGjlX = await WolfStakingRewardsfbH4lF.updateReward.call(addressyPczbD, uintmNaeX2J, {from: accounts[0]});
		const uint256Wj54i0c = await WolfStakingRewardsfbH4lF.getRewardForDuration.call(uinttiuRF9, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbl7dqMl = "3Yfe3oNZG3lTMDVhYK1JSJKLdQUuhQG5r3KRzws8oT7MJn5FtQMQWrJBWz4ZlcHr3FQXoUxbzdPx5l1NMc"
		const stringtBJ3DJ6 = "F6A5Vdpu3j"
		const uintI05XXDz = BigInt("254")
		const WolfStakingRewardssJzHDTA = await WolfStakingRewards.new(stringbl7dqMl, stringtBJ3DJ6, uintI05XXDz, {from: accounts[4]});
		const uintRExved = BigInt("18")
		const uintDhEz9WA = BigInt("2043")
		const uintEWJcI8M = BigInt("2004")
		const uint256Ala7CAe = await WolfStakingRewardssJzHDTA.withdrawRemainingBalance.call(uintDhEz9WA, uintRExved, {from: accounts[5]});
		const uint256SetRllv = await WolfStakingRewardssJzHDTA.lastTimeRewardApplicable.call(uintEWJcI8M, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringKRKapR = "N11G12fXdxmTcbKc0tw5mz2sjcei1IoscEFslrJ3L7XEJLkZNFra6dxz7A"
		const stringIZfOCb8 = "odR82IDFoQ3Wgmg6Aom0FBnu3DfKgMuLOxfu7Nr4bRjPal8byEL9WuFXTKiNdQcEKlg"
		const uintquvsK3V = BigInt("43")
		const WolfStakingRewardsVpfFmgi = await WolfStakingRewards.new(stringKRKapR, stringIZfOCb8, uintquvsK3V, {from: accounts[0]});
		const uintn0Psgqw = BigInt("331")
		const uintlty7wp = BigInt("846")
		const uintZM08qt = BigInt("1041")
		const uintFL8dESJ = BigInt("46")
		const uintHMZ18aL = BigInt("1792")
		const uintRRpyfgS = BigInt("1974")
		const uint256WVwd9xS = await WolfStakingRewardsVpfFmgi.getRewardForDuration.call(uintn0Psgqw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256wPMXi6U = await WolfStakingRewardsVpfFmgi.getRewardForDuration.call(uintlty7wp, {from: accounts[3]});
		const uint256nKhRV0q = await WolfStakingRewardsVpfFmgi.stake.call(uintFL8dESJ, uintZM08qt, {from: "0x0000000000000000000000000000000000000001"});
		const uintTVLV7wp = await WolfStakingRewardsVpfFmgi.getReward.call(uintHMZ18aL, {from: accounts[1]});
		const uint256NKfTplt = await WolfStakingRewardsVpfFmgi.exit.call(uintRRpyfgS, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIIgu9yB = "xIwyte73J3aRvYg6lbp58Zxp4Q5qHUB3grj"
		const stringyadFnBX = "xNqb"
		const uintLm4PUqN = BigInt("35")
		const WolfStakingRewardsHyzDhe9 = await WolfStakingRewards.new(stringIIgu9yB, stringyadFnBX, uintLm4PUqN, {from: accounts[3]});
		const uintrRyiars = BigInt("288")
		const uintzEeCh1 = BigInt("446")
		const uintcHug3e = BigInt("520")
		const uintRzlgdII = BigInt("720")
		const uintXQoUvXU = BigInt("907")
		const uinthm97I4s = BigInt("1557")
		const uint2563mzuOH = await WolfStakingRewardsHyzDhe9.withdraw.call(uintzEeCh1, uintrRyiars, {from: accounts[0]});
		const uint256TnFRX5V = await WolfStakingRewardsHyzDhe9.stake.call(uintRzlgdII, uintcHug3e, {from: accounts[0]});
		const uint256gKa9dCP = await WolfStakingRewardsHyzDhe9.withdraw.call(uinthm97I4s, uintXQoUvXU, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringz9lda7d = "sF7IKB4g3zA2oxrf2Wuqn4rJiiaACTVcOfBRmVXYJdG"
		const stringtRGfIEg = "Fmc6TkSd1uPy8wmVkExMt26PYExbCHmQgXK9dRcIVTAJDsJe2LQtJA984bBSRdb8hJ6FRDde"
		const uintL9hKwtI = BigInt("112")
		const WolfStakingRewardsz2mrVcA = await WolfStakingRewards.new(stringz9lda7d, stringtRGfIEg, uintL9hKwtI, {from: accounts[5]});
		const uintkrvKuKQ = BigInt("1599")
		const addresskOZE2D1 = accounts[3]
		const uintE817eE = BigInt("1362")
		const uintb4MT22O = BigInt("1530")
		const addressnE7mMq4 = accounts[4]
		const uint256pOGq3db = await WolfStakingRewardsz2mrVcA.balanceOfPerPool.call(addresskOZE2D1, uintkrvKuKQ, {from: accounts[1]});
		const uint256arrayN1noWIg = await WolfStakingRewardsz2mrVcA.updateNotifyRewardAmount.call(uintE817eE, {from: accounts[5]});
		const stringodJvlA = await WolfStakingRewardsz2mrVcA.name.call({from: accounts[4]});
		const addressk1WoY41 = await WolfStakingRewardsz2mrVcA.updateReward.call(addressnE7mMq4, uintb4MT22O, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuxWt8ln = "q6IHKErZKOwuCQeJJhoC"
		const stringAVAWFuC = "2TDGK8Vu5VJr7aUMJ5yyi1Y"
		const uintamFuWG7 = BigInt("75")
		const WolfStakingRewardsUtF3G8i = await WolfStakingRewards.new(stringuxWt8ln, stringAVAWFuC, uintamFuWG7, {from: accounts[1]});
		const uinte58URF3 = BigInt("523")
		const uintjH8E4Mw = BigInt("172")
		const uintMKPsi7v = BigInt("2015")
		const addressKE2MlQM = accounts[3]
		const uint256TuyO4QJ = await WolfStakingRewardsUtF3G8i.rewardPerToken.call(uinte58URF3, {from: accounts[3]});
		const uint256rWNjj3b = await WolfStakingRewardsUtF3G8i.getRewardForDuration.call(uintjH8E4Mw, {from: accounts[3]});
		const uint256DTq52OT = await WolfStakingRewardsUtF3G8i.balanceOfPerPool.call(addressKE2MlQM, uintMKPsi7v, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringU5Fa6CS = "Y1PWiTgKRI5TZqY9XVC6ScqrFGUKb8xwev8m98UXoZwMhBAGSoEE1cVfOr9mlMH5riKTtIw1t7jnm"
		const stringLg128lt = "55aw2i6u5z5JaQ10wCc9dTYM9C"
		const uintKYQSymP = BigInt("253")
		const WolfStakingRewardssO1W9fd = await WolfStakingRewards.new(stringU5Fa6CS, stringLg128lt, uintKYQSymP, {from: accounts[1]});
		const uintCciylBG = BigInt("801")
		const uintbEBORaE = BigInt("408")
		const uintedu8Yf6 = BigInt("1707")
		const uintGs8JYbk = BigInt("1645")
		const uintlJ7lWz = BigInt("402")
		const uintiR3ruRh = BigInt("1106")
		const uintv8l4Xjh = BigInt("460")
		const uint256OoqWEno = await WolfStakingRewardssO1W9fd.withdraw.call(uintbEBORaE, uintCciylBG, {from: accounts[5]});
		const uint256rtqIHcv = await WolfStakingRewardssO1W9fd.withdraw.call(uintGs8JYbk, uintedu8Yf6, {from: accounts[2]});
		const uintajlaGGB = await WolfStakingRewardssO1W9fd.getReward.call(uintlJ7lWz, {from: accounts[2]});
		const stringE1xeBzF = await WolfStakingRewardssO1W9fd.name.call({from: accounts[0]});
		const stringQd3Dhbj = await WolfStakingRewardssO1W9fd.symbol.call({from: accounts[1]});
		const uint256ilsHZvx = await WolfStakingRewardssO1W9fd.withdraw.call(uintv8l4Xjh, uintiR3ruRh, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtznNPKF = "u5n7YTayKTbOSTPBVhLss2GO1vc4GAe8eCG6O"
		const stringaU00b9a = "3HAKPqtn8LDvTxPtJ6kExiFMR3ouzqdJheYJF4aPmcAEvip1w"
		const uintbHHagTL = BigInt("241")
		const WolfStakingRewardsugz8959 = await WolfStakingRewards.new(stringtznNPKF, stringaU00b9a, uintbHHagTL, {from: accounts[3]});
		const uintMP54f5R = BigInt("1855")
		const uint1ta0Id = BigInt("1079")
		const uintWl7RSBq = BigInt("980")
		const uint256BVQ3oFG = await WolfStakingRewardsugz8959.totalSupplyPerPool.call(uintMP54f5R, {from: accounts[2]});
		const uint256IyxfRrP = await WolfStakingRewardsugz8959.withdrawRemainingBalance.call(uintWl7RSBq, uint1ta0Id, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCsgb1RC = "ongCHueo1EthtVwvaGPiN4qRp"
		const stringtrQaKht = "rK9jqZ4Gk6UHIENbqWdCbNkTI9yA5JKCYePU8ynYsjYF4uNNKtYq"
		const uintlh5l2et = BigInt("32")
		const WolfStakingRewardsSZGz1bg = await WolfStakingRewards.new(stringCsgb1RC, stringtrQaKht, uintlh5l2et, {from: accounts[2]});
		const uintMdj21TA = BigInt("1548")
		const addressv4Z6zhe = accounts[3]
		const uint256TptZxUX = await WolfStakingRewardsSZGz1bg.balanceOfPerPool.call(addressv4Z6zhe, uintMdj21TA, {from: accounts[2]});
		const stringvmWs5MT = await WolfStakingRewardsSZGz1bg.symbol.call({from: accounts[4]});
		await WolfStakingRewardsSZGz1bg.nonReentrant.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGwFvcx = "yFZQmWrbdwa7Q6S4em3mfKzxvHDthT"
		const stringXXk707Q = "QCmjQPlnSbPtFB4RI4rgPVzzIPdOFfF2F6Z9aGUD1xMvs16ccmgOpK4kEQwuhWyJcPsBDekKAgiV61AuzRWr4p9k"
		const uinthaq4HiG = BigInt("239")
		const WolfStakingRewardsEcJVvED = await WolfStakingRewards.new(stringGwFvcx, stringXXk707Q, uinthaq4HiG, {from: accounts[1]});
		const uintsfmqYuZ = BigInt("479")
		const uintnnsKgP = BigInt("316")
		const uint256EuvikDj = await WolfStakingRewardsEcJVvED.rewardPerToken.call(uintsfmqYuZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256V0oj3qs = await WolfStakingRewardsEcJVvED.exit.call(uintnnsKgP, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrfvhILX = "irKiD5Rn5nabrQA2"
		const stringOrrutH = "tLI3CnW3FQPdifJItXrlZ4nS1z7WHXVrfkyvyqHRDJnall1nMWNUrZ7ozuk1DMe9ikX4li4YknrFIzpd5s"
		const uintP33CJdX = BigInt("220")
		const WolfStakingRewardsntYquq = await WolfStakingRewards.new(stringrfvhILX, stringOrrutH, uintP33CJdX, {from: accounts[1]});
		const uintJR89sbd = BigInt("1549")
		const uintTc3suD8 = BigInt("562")
		const uintZEu4APJ = BigInt("1868")
		const uintNyrPUF7 = BigInt("1646")
		const uintCwT0Gfp = BigInt("912")
		const uintVagbpqM = BigInt("666")
		const uintlJqaWOU = BigInt("2012")
		const uintTNBY9qs = BigInt("703")
		const uintZdlXReJ = await WolfStakingRewardsntYquq.getReward.call(uintJR89sbd, {from: accounts[1]});
		const uint256MpEs8by = await WolfStakingRewardsntYquq.withdraw.call(uintZEu4APJ, uintTc3suD8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256AdwZFbE = await WolfStakingRewardsntYquq.withdraw.call(uintCwT0Gfp, uintNyrPUF7, {from: accounts[2]});
		const uint256MoXMctz = await WolfStakingRewardsntYquq.getRewardForDuration.call(uintVagbpqM, {from: accounts[4]});
		const uint256IlXUpsd = await WolfStakingRewardsntYquq.withdraw.call(uintTNBY9qs, uintlJqaWOU, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringOR4o8Tl = "F"
		const stringhXdAHAd = "egbCs6ffRRw1a6xAg5k1eCAcJrZDg8LbPsdeW6qRT39LsYBmh53nkCiRbQGsddP"
		const uintS96eG9x = BigInt("54")
		const WolfStakingRewardsCsmTwkx = await WolfStakingRewards.new(stringOR4o8Tl, stringhXdAHAd, uintS96eG9x, {from: accounts[1]});
		const uintzqYk5wf = BigInt("1755")
		const uintEanYoQL = BigInt("1897")
		const uintulFOEYT = BigInt("1747")
		await WolfStakingRewardsCsmTwkx.nonReentrant.call({from: accounts[3]});
		const uint256zejxjud = await WolfStakingRewardsCsmTwkx.withdraw.call(uintEanYoQL, uintzqYk5wf, {from: accounts[0]});
		await WolfStakingRewardsCsmTwkx.onlyOwner.call({from: accounts[4]});
		const uintsrFPqwy = await WolfStakingRewardsCsmTwkx.getReward.call(uintulFOEYT, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringoTV4kc6 = "fxvQ2oJXEmgNcCDJew430c5kaMRPjdOn9GrtxSJCQK4dY39rG"
		const stringuCuZ4jb = "H8UYdjY87E81BepXewAS7l4xbGliPQ1UygCpLqDkjWeOijQ"
		const uintjoGy0AW = BigInt("185")
		const WolfStakingRewardsaFI1pLT = await WolfStakingRewards.new(stringoTV4kc6, stringuCuZ4jb, uintjoGy0AW, {from: accounts[1]});
		const uintRkjwIxk = BigInt("502")
		const uinte0I6CG3 = BigInt("943")
		const uintMat22kY = BigInt("825")
		const uintVuoHcQE = await WolfStakingRewardsaFI1pLT.getReward.call(uintRkjwIxk, {from: accounts[1]});
		const uint256emLQyv = await WolfStakingRewardsaFI1pLT.rewardPerToken.call(uinte0I6CG3, {from: accounts[5]});
		const uint256ZJRC6gK = await WolfStakingRewardsaFI1pLT.totalSupplyPerPool.call(uintMat22kY, {from: accounts[1]});
		const stringdGyEPGj = await WolfStakingRewardsaFI1pLT.name.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTwANIOI = "VaSf776rwtIfEfn"
		const stringVbIxozB = "JseTqmGWeFfnt76xNBcmGqtokKLRBBSyMkWAXK5FH3gaF4aOC4bXyz07XMYsEpgDMYuGN3ARWk"
		const uintQzEqwzg = BigInt("116")
		const WolfStakingRewardsyMAiL0k = await WolfStakingRewards.new(stringTwANIOI, stringVbIxozB, uintQzEqwzg, {from: accounts[0]});
		const uintZvajogP = BigInt("432")
		const addressLjMuXyl = accounts[4]
		const uintjfoopax = BigInt("517")
		const uintBmtNJrO = BigInt("51")
		const addressCOfR0oS = accounts[1]
		const uint256GVBvkB9 = await WolfStakingRewardsyMAiL0k.earned.call(addressLjMuXyl, uintZvajogP, {from: accounts[0]});
		const uint256njaI6qz = await WolfStakingRewardsyMAiL0k.totalSupplyPerPool.call(uintjfoopax, {from: accounts[1]});
		const uint256ncsGy7E = await WolfStakingRewardsyMAiL0k.earned.call(addressCOfR0oS, uintBmtNJrO, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrCejypb = "Ss8sLT0gJiP4VGKge6mM7li1R"
		const stringQWJ1XL5 = "HtFS1vd4d4HnK6OOumXFMHJv6gPoEkF5Oc"
		const uinttXZxx8J = BigInt("146")
		const WolfStakingRewardshnHjKw = await WolfStakingRewards.new(stringrCejypb, stringQWJ1XL5, uinttXZxx8J, {from: "0x0000000000000000000000000000000000000001"});
		const uintWWfhXMp = BigInt("1175")
		const addressuqZp2ZP = accounts[0]
		const uintLy33d3P = BigInt("279")
		const uintl52wQdS = BigInt("1872")
		const addressGpeok6M = accounts[1]
		const uintOWlFkoZ = BigInt("1650")
		const uint256CEMQRzf = await WolfStakingRewardshnHjKw.balanceOfPerPool.call(addressuqZp2ZP, uintWWfhXMp, {from: accounts[2]});
		const uint256HZxFUDR = await WolfStakingRewardshnHjKw.lastTimeRewardApplicable.call(uintLy33d3P, {from: accounts[5]});
		const addresskQ1kNyk = await WolfStakingRewardshnHjKw.updateReward.call(addressGpeok6M, uintl52wQdS, {from: accounts[3]});
		const uint256TeqrEK4 = await WolfStakingRewardshnHjKw.totalSupplyPerPool.call(uintOWlFkoZ, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZB9qCQD = "I28d1mOfK1Li796E01KSNxIo2Efroe"
		const stringencVxGS = "Y6SSnEz6T7P3UtPLP5R8shG26xabEbhON9MBboY8oRuB1YJKEwSbNwx2"
		const uintfHWs2ay = BigInt("215")
		const WolfStakingRewardsyGsvkG = await WolfStakingRewards.new(stringZB9qCQD, stringencVxGS, uintfHWs2ay, {from: accounts[2]});
		const uintxZnatS = BigInt("1336")
		const uintBlfLs2K = BigInt("988")
		const uintdIUrsDh = BigInt("271")
		const addressa703FY = accounts[3]
		const uintZAQo9dA = BigInt("2")
		const addressIw232ai = accounts[4]
		const uint256gj6lZAa = await WolfStakingRewardsyGsvkG.rewardPerToken.call(uintxZnatS, {from: accounts[1]});
		const uint256FTW3pyZ = await WolfStakingRewardsyGsvkG.totalSupplyPerPool.call(uintBlfLs2K, {from: accounts[1]});
		const stringxpPhvij = await WolfStakingRewardsyGsvkG.symbol.call({from: accounts[5]});
		const uint25666RTAE = await WolfStakingRewardsyGsvkG.earned.call(addressa703FY, uintdIUrsDh, {from: accounts[3]});
		const addressHJ6kWhB = await WolfStakingRewardsyGsvkG.updateReward.call(addressIw232ai, uintZAQo9dA, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVxTPY62 = "y8uUiPvEDeouICAuH3POQgvxt8FFgHvWCPraiyrdKk7Viz4RCzXpFfs3krZs5QVWKfwlzII"
		const stringx6UC0ot = "LLyLB05aygffsTAF1aJJ"
		const uintmuvHngw = BigInt("81")
		const WolfStakingRewardsVTrfsOh = await WolfStakingRewards.new(stringVxTPY62, stringx6UC0ot, uintmuvHngw, {from: accounts[3]});
		const uintcxHDvk7 = BigInt("1169")
		const uintSm00LHG = BigInt("670")
		const uintviVKLSK = BigInt("424")
		const uintIJNlfxA = BigInt("1320")
		const uintxACWLjL = BigInt("1716")
		const uintfp7yXGM = BigInt("738")
		const uint256q7MzTdk = await WolfStakingRewardsVTrfsOh.getRewardForDuration.call(uintcxHDvk7, {from: accounts[1]});
		const uint8looZwoW = await WolfStakingRewardsVTrfsOh.decimals.call({from: accounts[3]});
		const uint256oDKDlx8 = await WolfStakingRewardsVTrfsOh.stake.call(uintviVKLSK, uintSm00LHG, {from: accounts[3]});
		const uint256jm3u05d = await WolfStakingRewardsVTrfsOh.withdrawRemainingBalance.call(uintxACWLjL, uintIJNlfxA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZzfNcPr = await WolfStakingRewardsVTrfsOh.totalSupplyPerPool.call(uintfp7yXGM, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringewZ3MQ = "Fe6OZOQTXkselOJjvbQ1aPwqE8c7CtvutL6oEvBXQzPAPRYVji3Z1CzjbGdCNDr36wRiAapNPvfZeroIADkNnumbSfU"
		const stringNHdC7MS = "rbfHCiplKIdeacBeizDFkVCeg9x3P90fnpY9vF6VpbHGtSzHMTbpqcQzc1Q1FNT86izjS2mv1kPStqg87DnjGjZv"
		const uintPhoEg8Z = BigInt("218")
		const WolfStakingRewardsLkPElu0 = await WolfStakingRewards.new(stringewZ3MQ, stringNHdC7MS, uintPhoEg8Z, {from: accounts[3]});
		const uintu6K2MMR = BigInt("387")
		const addressC7IzXX5 = accounts[3]
		const uintvFjvcml = BigInt("1686")
		const uinteHC7IH = BigInt("848")
		const uint256AqMgDpZ = await WolfStakingRewardsLkPElu0.balanceOfPerPool.call(addressC7IzXX5, uintu6K2MMR, {from: accounts[3]});
		const uint256jHQzcq0 = await WolfStakingRewardsLkPElu0.stake.call(uinteHC7IH, uintvFjvcml, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringewCNijD = "6wqeB1tWVr6f7"
		const stringSkSXG1 = "26asYYXap7ITdppLZcc13"
		const uintW8UjLa3 = BigInt("231")
		const WolfStakingRewardsKJfJ2pN = await WolfStakingRewards.new(stringewCNijD, stringSkSXG1, uintW8UjLa3, {from: accounts[1]});
		const uintNBlCSkY = BigInt("31")
		const uintrMimGey = BigInt("1603")
		const uintliHzuva = BigInt("843")
		const uintNA5HEwq = BigInt("1015")
		await WolfStakingRewardsKJfJ2pN.nonReentrant.call({from: accounts[1]});
		const uintmDjdps = await WolfStakingRewardsKJfJ2pN.getReward.call(uintNBlCSkY, {from: accounts[3]});
		const uint256arraySkt0x8n = await WolfStakingRewardsKJfJ2pN.updateNotifyRewardAmount.call(uintrMimGey, {from: accounts[2]});
		const uint256arrayP1ftAdF = await WolfStakingRewardsKJfJ2pN.updateNotifyRewardAmount.call(uintliHzuva, {from: accounts[0]});
		const uint256wuTJZVc = await WolfStakingRewardsKJfJ2pN.getRewardForDuration.call(uintNA5HEwq, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwGmXTiq = "Oh3FAjGnxUj6fZkONSDQgMiCbrjhXHgBOzJGWxoyja2gi"
		const stringQfl5bbF = "31Yglh2vci1kNlWbo7Y4ENlcpJdP6SQ4lrQuCnjiiDEoiYA9KdyPVO8xzK"
		const uinteR8NSMD = BigInt("101")
		const WolfStakingRewardsqcsbBxf = await WolfStakingRewards.new(stringwGmXTiq, stringQfl5bbF, uinteR8NSMD, {from: accounts[5]});
		const uintIA2TZ2V = BigInt("209")
		const addressaKyogy = accounts[0]
		const uintJspRfbH = BigInt("942")
		const uint256krBn708 = await WolfStakingRewardsqcsbBxf.earned.call(addressaKyogy, uintIA2TZ2V, {from: accounts[5]});
		const uint256a87dUuQ = await WolfStakingRewardsqcsbBxf.lastTimeRewardApplicable.call(uintJspRfbH, {from: accounts[3]});
	});
})