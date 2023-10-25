const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressyoJ1AVo = accounts[2]
		const addressdQsyUMo = accounts[1]
		const addressVOunst = accounts[1]
		const WolfStakingRewardsmB2VQm = await WolfStakingRewards.new(addressyoJ1AVo, addressdQsyUMo, addressVOunst, {from: accounts[2]});
		const uintFAANYt8 = BigInt("704")
		const uintP3qtqCq = BigInt("421")
//		const stringNqPMD1j = await WolfStakingRewardsmB2VQm.symbol.call({from: accounts[3]});
//		const uint256hHvFZG = await WolfStakingRewardsmB2VQm.rewardPerToken.call(uintFAANYt8, {from: accounts[5]});
//		const uint256arraylLPj6jI = await WolfStakingRewardsmB2VQm.updateNotifyRewardAmount.call(uintP3qtqCq, {from: accounts[0]});

		await expect(WolfStakingRewardsmB2VQm.symbol.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringRRBV8OT = "lzCUGkALn8yXYShXIw9iSWi4hayBs6UlO1x524bF5ghw5UydHhODTFdnEm69FYcHBKPXrVIw"
		const stringohjIwNq = "wkinjSBot9AXNijRTgGyLxF5jh9Pf"
		const uintDViWOz7 = BigInt("91")
		const WolfStakingRewardsbDSLI7 = await WolfStakingRewards.new(stringRRBV8OT, stringohjIwNq, uintDViWOz7, {from: accounts[0]});
		const uintElTPlp = BigInt("2030")
		const uintMuaGhLp = BigInt("277")
		const uintO4crae = BigInt("875")
		const addressXri5Ler = accounts[0]
		const uint256pXzbo0M = await WolfStakingRewardsbDSLI7.withdraw.call(uintMuaGhLp, uintElTPlp, {from: accounts[4]});
		const addressZvzxx0U = await WolfStakingRewardsbDSLI7.updateReward.call(addressXri5Ler, uintO4crae, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressy8m1cYh = "0x0000000000000000000000000000000000000001"
		const addressR7lVAOW = accounts[2]
		const addressnE2QZpS = accounts[1]
		const WolfStakingRewardsc9Rj11h = await WolfStakingRewards.new(addressy8m1cYh, addressR7lVAOW, addressnE2QZpS, {from: accounts[1]});
		const uintBYALUGl = BigInt("1552")
		const uintoQnXdez = BigInt("675")
		const uintrGsaP2E = BigInt("1666")
		const uint256UfQQ89S = await WolfStakingRewardsc9Rj11h.lastTimeRewardApplicable.call(uintBYALUGl, {from: accounts[3]});
//		const uint256lT3PlB4 = await WolfStakingRewardsc9Rj11h.stake.call(uintrGsaP2E, uintoQnXdez, {from: accounts[5]});

		assert.equal(uint256UfQQ89S, BigInt("0"))
		await expect(WolfStakingRewardsc9Rj11h.stake.call(uintrGsaP2E, uintoQnXdez, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringDbAVU50 = "vkNnbiI6XpjDHfp9Maih87ktimKjeHY2sUEH"
		const stringpJXucTS = "QLNYZBc6gAUc43YneSpGb"
		const uintkiS0l7 = BigInt("196")
		const WolfStakingRewardsJd8q1P = await WolfStakingRewards.new(stringDbAVU50, stringpJXucTS, uintkiS0l7, {from: accounts[2]});
		const uintlGwXC9X = BigInt("422")
		const uintE5i3klQ = BigInt("380")
		const uintgSJFaJ = BigInt("937")
		const uintJiYbNxq = BigInt("266")
		const uintDpmJNhS = BigInt("1934")
		const uintu0v0YFF = BigInt("897")
		const uintqJbXzc = BigInt("201")
		const uint256U3Vqnsb = await WolfStakingRewardsJd8q1P.stake.call(uintE5i3klQ, uintlGwXC9X, {from: accounts[0]});
		const uint256x4G8gt = await WolfStakingRewardsJd8q1P.totalSupplyPerPool.call(uintgSJFaJ, {from: accounts[1]});
		const uint256veLKsAY = await WolfStakingRewardsJd8q1P.rewardPerToken.call(uintJiYbNxq, {from: accounts[0]});
		const uint256YsusQoA = await WolfStakingRewardsJd8q1P.stake.call(uintu0v0YFF, uintDpmJNhS, {from: accounts[0]});
		const uint256array77FBbZ = await WolfStakingRewardsJd8q1P.updateNotifyRewardAmount.call(uintqJbXzc, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringY3xnZGP = "CHgJjnFnCfb2EeFVffZwAT35rO4T1cOcGPn19OBIDbMQIxi3cBy6QOaRowpnyeTylMquVAGIjfwYywRqG4PthNrSK0JAXzt6"
		const stringcDppQVT = ""
		const uintN3f2fwM = BigInt("34")
		const WolfStakingRewardseVlZa7r = await WolfStakingRewards.new(stringY3xnZGP, stringcDppQVT, uintN3f2fwM, {from: accounts[3]});
		const uintRyBCMH = BigInt("562")
		const uintiL6iz8U = BigInt("737")
		const uintSuqIYVg = BigInt("253")
		const uintKd4rFzt = BigInt("1449")
		const uintBh8G171 = BigInt("69")
		const uintUFDy5is = BigInt("940")
		const uint256vLpgnlX = await WolfStakingRewardseVlZa7r.getRewardForDuration.call(uintRyBCMH, {from: accounts[2]});
		const uint2563CchTK = await WolfStakingRewardseVlZa7r.exit.call(uintiL6iz8U, {from: accounts[1]});
		const uint256YHEwlJ = await WolfStakingRewardseVlZa7r.withdraw.call(uintKd4rFzt, uintSuqIYVg, {from: accounts[2]});
		const uint256CRWHWqW = await WolfStakingRewardseVlZa7r.totalSupplyPerPool.call(uintBh8G171, {from: accounts[0]});
		await WolfStakingRewardseVlZa7r.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256pMlZ4x = await WolfStakingRewardseVlZa7r.rewardPerToken.call(uintUFDy5is, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringOKMhRTl = "mcTIs3H1L5TBmzUH5EWczoJCQ5LyBbW14bbUqb"
		const stringbUiIJ87 = "Q"
		const uintXOaiLAk = BigInt("97")
		const WolfStakingRewardsHrBVDE = await WolfStakingRewards.new(stringOKMhRTl, stringbUiIJ87, uintXOaiLAk, {from: accounts[2]});
		const uintnAA9Iwl = BigInt("953")
		const uintJoMlTo9 = BigInt("413")
		const uintKSQ907Q = BigInt("1861")
		const uintmePcMrn = BigInt("800")
		const addressoxdQ29 = accounts[0]
		const uintSaSHXf8 = BigInt("599")
		const addressk1xIY3f = accounts[1]
		const uint256nQuAzZM = await WolfStakingRewardsHrBVDE.withdrawRemainingBalance.call(uintJoMlTo9, uintnAA9Iwl, {from: accounts[0]});
		const uint256tpEysyL = await WolfStakingRewardsHrBVDE.totalSupplyPerPool.call(uintKSQ907Q, {from: accounts[3]});
		const addresshSrb738 = await WolfStakingRewardsHrBVDE.updateReward.call(addressoxdQ29, uintmePcMrn, {from: accounts[2]});
		const uint256gmb0fr = await WolfStakingRewardsHrBVDE.balanceOfPerPool.call(addressk1xIY3f, uintSaSHXf8, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringoBZSHbX = "JWQJvL4NmlXuKAEIRvFQfQle9IYhxv7sqAHUZVqkD3vg0t6wwSUegTtbWCgOdOP8YBPs4Cq8ld8Qqij6s"
		const stringTsn2jyq = "8ekElkeILvM5dkrL1TLWYMiyfPgEzIw948M3i3JWfxMoINzVXBHb9o9jxgaqWwmHtPBuCsmr55C8yVFiUyBOWyVE5EvS"
		const uintpnL1qyF = BigInt("160")
		const WolfStakingRewardsWYpHkkC = await WolfStakingRewards.new(stringoBZSHbX, stringTsn2jyq, uintpnL1qyF, {from: accounts[0]});
		const uintwbdMWuE = BigInt("1535")
		const uintk5n0C31 = BigInt("672")
		const uintVEAfZ9P = BigInt("876")
		const uintoSYtY37 = BigInt("1121")
		const addressiCjfg7A = accounts[0]
		const uintupD4Qpu = BigInt("110")
		const addressqor8kIs = accounts[4]
		const uintzqrsImb = BigInt("1865")
		const uintpuaLcY = BigInt("1082")
		const uint256UNHHGY = await WolfStakingRewardsWYpHkkC.withdraw.call(uintk5n0C31, uintwbdMWuE, {from: accounts[5]});
		const uint256lf57fcL = await WolfStakingRewardsWYpHkkC.lastTimeRewardApplicable.call(uintVEAfZ9P, {from: accounts[1]});
		const uint256sNKmz6a = await WolfStakingRewardsWYpHkkC.earned.call(addressiCjfg7A, uintoSYtY37, {from: accounts[2]});
		const uint256TLd0bvV = await WolfStakingRewardsWYpHkkC.earned.call(addressqor8kIs, uintupD4Qpu, {from: accounts[2]});
		const uint256CN5FPHT = await WolfStakingRewardsWYpHkkC.withdraw.call(uintpuaLcY, uintzqrsImb, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressa7pJkn = accounts[2]
		const addressuCmhdHI = accounts[3]
		const addressasSweGG = accounts[4]
		const WolfStakingRewardsRWViWdS = await WolfStakingRewards.new(addressa7pJkn, addressuCmhdHI, addressasSweGG, {from: accounts[0]});
		const uintFeNhf9u = BigInt("1482")
		const uintb2StcRW = BigInt("1160")
		const uintzqyIU8k = BigInt("1154")
		const addressOLzS4mb = accounts[4]
		const uintMZt5kxb = BigInt("849")
		const uintnnVzFe = BigInt("327")
//		const uint256oOWip5c = await WolfStakingRewardsRWViWdS.withdrawRemainingBalance.call(uintb2StcRW, uintFeNhf9u, {from: accounts[4]});
//		const uint256PyQ6MS2 = await WolfStakingRewardsRWViWdS.balanceOfPerPool.call(addressOLzS4mb, uintzqyIU8k, {from: accounts[3]});
//		const uint256lMKJJ6R = await WolfStakingRewardsRWViWdS.stake.call(uintnnVzFe, uintMZt5kxb, {from: accounts[2]});
//		const stringVogQ4D = await WolfStakingRewardsRWViWdS.symbol.call({from: accounts[1]});

		await expect(WolfStakingRewardsRWViWdS.withdrawRemainingBalance.call(uintb2StcRW, uintFeNhf9u, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringRiS0xb = "C4CVYEcnpkWKIq7sMhJXZP1D5iNj8yjB5wgp2CcvoACxCIGEwJ"
		const stringAYDRk7 = "8ZH9n6FmzIkMUl5iqFfyU7tQioRPaI06TMg8u"
		const uintqNdTV8F = BigInt("51")
		const WolfStakingRewardsJ6DyHcC = await WolfStakingRewards.new(stringRiS0xb, stringAYDRk7, uintqNdTV8F, {from: "0x0000000000000000000000000000000000000001"});
		const uintTBaenq4 = BigInt("1937")
		const addressddNcyG6 = accounts[0]
		const uintMCsB9d = BigInt("1345")
		const uintyXOOnf3 = BigInt("761")
		const addressWeFu57P = accounts[3]
		const uint256ptNvQC3 = await WolfStakingRewardsJ6DyHcC.earned.call(addressddNcyG6, uintTBaenq4, {from: accounts[4]});
		const uint256arrayeJYIAH = await WolfStakingRewardsJ6DyHcC.updateNotifyRewardAmount.call(uintMCsB9d, {from: accounts[2]});
		const addressoJbCYKt = await WolfStakingRewardsJ6DyHcC.updateReward.call(addressWeFu57P, uintyXOOnf3, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresseEPS2za = "0x0000000000000000000000000000000000000001"
		const addressiqC0GCr = accounts[2]
		const addressWiWgBy9 = accounts[1]
		const WolfStakingRewardsc9Rj11h = await WolfStakingRewards.new(addresseEPS2za, addressiqC0GCr, addressWiWgBy9, {from: accounts[1]});
		const uintJGU6jev = BigInt("1552")
		const uintTUamvTy = BigInt("1632")
		const uintd4CLNCn = BigInt("660")
		const uintQRVS9x4 = BigInt("1666")
		const uint256UfQQ89S = await WolfStakingRewardsc9Rj11h.lastTimeRewardApplicable.call(uintJGU6jev, {from: accounts[3]});
		const uint256eqYelPe = await WolfStakingRewardsc9Rj11h.totalSupplyPerPool.call(uintTUamvTy, {from: accounts[5]});
//		const uint256lT3PlB4 = await WolfStakingRewardsc9Rj11h.stake.call(uintQRVS9x4, uintd4CLNCn, {from: accounts[5]});

		assert.equal(uint256UfQQ89S, BigInt("0"))
		assert.equal(uint256eqYelPe, BigInt("0"))
		await expect(WolfStakingRewardsc9Rj11h.stake.call(uintQRVS9x4, uintd4CLNCn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringL3CS8iG = "RT4R6m3dJcoo9rlrQLFmbOwIx6pqY7veOiyh5CECuKiVIQhEIFAwBsptDGi"
		const stringXmtNhzZ = "yAcQ5RnZ9qr4hhtKLPQwVHMnOAdJOabaqBVo20d3C5IGkRLCDmOOat"
		const uintPWXWxp9 = BigInt("199")
		const WolfStakingRewardsA29yha6 = await WolfStakingRewards.new(stringL3CS8iG, stringXmtNhzZ, uintPWXWxp9, {from: accounts[1]});
		const uintTt6S1MN = BigInt("1937")
		const addresslw8HQ0s = accounts[4]
		const uintHf5h5D5 = BigInt("287")
		const uintBzifInj = BigInt("1048")
		await WolfStakingRewardsA29yha6.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256yst4Ln1 = await WolfStakingRewardsA29yha6.earned.call(addresslw8HQ0s, uintTt6S1MN, {from: accounts[0]});
		const uint256G4d2DIz = await WolfStakingRewardsA29yha6.withdraw.call(uintBzifInj, uintHf5h5D5, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPQuPTs = "ZN5CeeZ"
		const stringDVz9lqa = "rotEnM25b06BauTKf2mmAv2Rz"
		const uintNSnQsKO = BigInt("107")
		const WolfStakingRewardse17kmEs = await WolfStakingRewards.new(stringPQuPTs, stringDVz9lqa, uintNSnQsKO, {from: accounts[5]});
		const uintj2BgDdc = BigInt("505")
		const addressR2eZYKI = accounts[3]
		const uintTfergHA = BigInt("1553")
		const uint256pGi8W0h = await WolfStakingRewardse17kmEs.balanceOfPerPool.call(addressR2eZYKI, uintj2BgDdc, {from: accounts[1]});
		await WolfStakingRewardse17kmEs.onlyRewardsDistribution.call({from: accounts[0]});
		const uintk9UraBE = await WolfStakingRewardse17kmEs.getReward.call(uintTfergHA, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjSWJHRC = "bdYNH1BblyToOBHoquyeN2YHXIMcUw1b"
		const stringmTS3un0 = "W0PBunTtYNc8CPPg4enlcoEd5qQ6Dt8OXXp8epei2OZqioQESInEM65j1YVcKzgYnPf3VgryJAz"
		const uintWczKeJg = BigInt("119")
		const WolfStakingRewardsZ7r58jL = await WolfStakingRewards.new(stringjSWJHRC, stringmTS3un0, uintWczKeJg, {from: accounts[2]});
		const uintPeOQbrS = BigInt("917")
		const addressW8RlsX = "0x0000000000000000000000000000000000000001"
		const uintSAgz07p = BigInt("1467")
		const uint256uQNzet = await WolfStakingRewardsZ7r58jL.balanceOfPerPool.call(addressW8RlsX, uintPeOQbrS, {from: accounts[3]});
		const uint256p8BjCs = await WolfStakingRewardsZ7r58jL.totalSupplyPerPool.call(uintSAgz07p, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const address4pane6 = "0x0000000000000000000000000000000000000001"
		const addressGU3Q5V = accounts[2]
		const addressRJYJw4i = accounts[1]
		const WolfStakingRewardsc9Rj11h = await WolfStakingRewards.new(address4pane6, addressGU3Q5V, addressRJYJw4i, {from: accounts[1]});
		const uintGPEpmDE = BigInt("499")
		const uintGP3nui = BigInt("657")
		const uintqHVtqOc = BigInt("660")
		const uintyZdBcKk = BigInt("1666")
		const uint256UfQQ89S = await WolfStakingRewardsc9Rj11h.lastTimeRewardApplicable.call(uintGPEpmDE, {from: accounts[3]});
//		const uint256arrayFaxKpst = await WolfStakingRewardsc9Rj11h.updateNotifyRewardAmount.call(uintGP3nui, {from: accounts[4]});
//		const uint256lT3PlB4 = await WolfStakingRewardsc9Rj11h.stake.call(uintyZdBcKk, uintqHVtqOc, {from: accounts[5]});

		assert.equal(uint256UfQQ89S, BigInt("0"))
		await expect(WolfStakingRewardsc9Rj11h.updateNotifyRewardAmount.call(uintGP3nui, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressE84YjXr = "0x0000000000000000000000000000000000000001"
		const addressGGuEQ1O = accounts[2]
		const addressS58Heaf = accounts[1]
		const WolfStakingRewardsc9Rj11h = await WolfStakingRewards.new(addressE84YjXr, addressGGuEQ1O, addressS58Heaf, {from: accounts[1]});
		const uintBfxehdY = BigInt("1027")
		const uintnYfz2Us = BigInt("609")
		const uintBvhGdhM = BigInt("687")
		const uintPAtUIdp = BigInt("1666")
//		const uint256q5z6NQy = await WolfStakingRewardsc9Rj11h.withdrawRemainingBalance.call(uintnYfz2Us, uintBfxehdY, {from: accounts[1]});
//		await WolfStakingRewardsc9Rj11h.onlyRewardsDistribution.call({from: accounts[0]});
//		const uint256lT3PlB4 = await WolfStakingRewardsc9Rj11h.stake.call(uintPAtUIdp, uintBvhGdhM, {from: accounts[5]});

		await expect(WolfStakingRewardsc9Rj11h.withdrawRemainingBalance.call(uintnYfz2Us, uintBfxehdY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringthavCtT = "EWvUz5SJ8MQkH9AKnOYPniIxcFYxYLRtA0yxnHGsgYlZB1m5sXlXiFNRhVIXpCTCtUf49IIrk5A4IeRCAl82Vz7lHE"
		const stringvWodeqS = "DxC77f4Z2Ga3WXr2oNmRz3ejyaFhXfxv7HGcua4Tcq"
		const uintf5xIGug = BigInt("44")
		const WolfStakingRewardshEPomnv = await WolfStakingRewards.new(stringthavCtT, stringvWodeqS, uintf5xIGug, {from: accounts[4]});
		const uintSzVEjoz = BigInt("140")
		const uintfJYgUla = BigInt("1750")
		const uintzosx4ut = BigInt("1583")
		const uintANqirQ = BigInt("2022")
		const uintxS1jdy = BigInt("2046")
		const uintsy85gyb = BigInt("1511")
		const addresstXXNwcQ = accounts[5]
		const uint256GM5fiPg = await WolfStakingRewardshEPomnv.lastTimeRewardApplicable.call(uintSzVEjoz, {from: accounts[2]});
		const uint256odeqhGa = await WolfStakingRewardshEPomnv.stake.call(uintzosx4ut, uintfJYgUla, {from: accounts[1]});
		const uint256Uu7Exw0 = await WolfStakingRewardshEPomnv.withdraw.call(uintxS1jdy, uintANqirQ, {from: accounts[2]});
		const uint8vAQK9WA = await WolfStakingRewardshEPomnv.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256HsMHzwn = await WolfStakingRewardshEPomnv.earned.call(addresstXXNwcQ, uintsy85gyb, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressLmqAV2 = "0x0000000000000000000000000000000000000001"
		const addressJUclNr = accounts[2]
		const addressBMZb2X9 = accounts[1]
		const WolfStakingRewardsc9Rj11h = await WolfStakingRewards.new(addressLmqAV2, addressJUclNr, addressBMZb2X9, {from: accounts[1]});
		const uintGavU1Dc = BigInt("1048")
		const addresshm4uknr = accounts[3]
		const uintQV3vayJ = BigInt("1540")
		const uintQ95R9id = BigInt("678")
		const uintDIrlDCK = BigInt("1666")
		const uintz7sVrLs = BigInt("635")
		const uintOx7vFTu = BigInt("825")
		const uint256IIpwJ1Y = await WolfStakingRewardsc9Rj11h.balanceOfPerPool.call(addresshm4uknr, uintGavU1Dc, {from: accounts[2]});
		const uint256UfQQ89S = await WolfStakingRewardsc9Rj11h.lastTimeRewardApplicable.call(uintQV3vayJ, {from: accounts[3]});
//		const uint256lT3PlB4 = await WolfStakingRewardsc9Rj11h.stake.call(uintDIrlDCK, uintQ95R9id, {from: accounts[5]});
//		const uint256IgzISA4 = await WolfStakingRewardsc9Rj11h.withdraw.call(uintOx7vFTu, uintz7sVrLs, {from: accounts[1]});

		assert.equal(uint256IIpwJ1Y, BigInt("0"))
		assert.equal(uint256UfQQ89S, BigInt("0"))
		await expect(WolfStakingRewardsc9Rj11h.stake.call(uintDIrlDCK, uintQ95R9id, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresscjgZUjH = accounts[1]
		const addressvsN6Hwr = accounts[4]
		const addressL5Bcfov = accounts[0]
		const WolfStakingRewardsQ6I2g0e = await WolfStakingRewards.new(addresscjgZUjH, addressvsN6Hwr, addressL5Bcfov, {from: accounts[3]});
		const uintHeA31Qq = BigInt("1846")
		const addressBSBXnW1 = accounts[1]
		const uintJPd9wI2 = BigInt("1993")
		const uintY5uW709 = BigInt("622")
		const uint256XiZ42em = await WolfStakingRewardsQ6I2g0e.balanceOfPerPool.call(addressBSBXnW1, uintHeA31Qq, {from: "0x0000000000000000000000000000000000000001"});
		const uintPkON7xy = await WolfStakingRewardsQ6I2g0e.getReward.call(uintJPd9wI2, {from: accounts[2]});
		const uint256M80TODu = await WolfStakingRewardsQ6I2g0e.rewardPerToken.call(uintY5uW709, {from: accounts[2]});

		assert.equal(uint256M80TODu, BigInt("0"))
		assert.equal(uint256XiZ42em, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const addresszPltYGc = "0x0000000000000000000000000000000000000001"
		const addressFk4rZbh = accounts[2]
		const addresslZksan = accounts[1]
		const WolfStakingRewardsc9Rj11h = await WolfStakingRewards.new(addresszPltYGc, addressFk4rZbh, addresslZksan, {from: accounts[1]});
		const uintiT0Ngbh = BigInt("1514")
		const uintWP3ykYq = BigInt("675")
		const uinte5BlEla = BigInt("1666")
		const uintvk8LFrv = BigInt("777")
		const uint256UfQQ89S = await WolfStakingRewardsc9Rj11h.lastTimeRewardApplicable.call(uintiT0Ngbh, {from: accounts[3]});
//		const uint256lT3PlB4 = await WolfStakingRewardsc9Rj11h.stake.call(uinte5BlEla, uintWP3ykYq, {from: accounts[5]});
//		const uintp2KRKQ = await WolfStakingRewardsc9Rj11h.getReward.call(uintvk8LFrv, {from: accounts[4]});
//		const stringC0mU1c = await WolfStakingRewardsc9Rj11h.name.call({from: accounts[0]});

		assert.equal(uint256UfQQ89S, BigInt("0"))
		await expect(WolfStakingRewardsc9Rj11h.stake.call(uinte5BlEla, uintWP3ykYq, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringCw9A9SJ = "XM3HzqOiwOyEWhaWcMFb1Xq7uq3NjWisjkvIxyUGb0qREkj3Y6AqfulGtmlAWypWmHQY8UD5Afs457bWFHz7zoynIU52ZCS"
		const stringkrQBUQg = "A6FQQFeuVIPH"
		const uintQtBxNS4 = BigInt("18")
		const WolfStakingRewardsd76liIB = await WolfStakingRewards.new(stringCw9A9SJ, stringkrQBUQg, uintQtBxNS4, {from: accounts[0]});
		const uintHGpow76 = BigInt("921")
		const uintCH5w1Jy = BigInt("1961")
		const uintQ97H2ag = BigInt("1084")
		const uintVv7Iakl = BigInt("1471")
		const uintDbF627x = BigInt("1830")
		const uintjURWDLI = BigInt("677")
		const uintvpuVsAA = BigInt("1055")
		const uintqKT5Jwd = BigInt("597")
		const uintsNrZFZG = BigInt("1319")
		const uintGYVdyz = BigInt("792")
		const uint256yLsgCnK = await WolfStakingRewardsd76liIB.withdraw.call(uintCH5w1Jy, uintHGpow76, {from: accounts[1]});
		const uint256arrayq0EIKjI = await WolfStakingRewardsd76liIB.updateNotifyRewardAmount.call(uintQ97H2ag, {from: accounts[5]});
		const uint256aSg18K1 = await WolfStakingRewardsd76liIB.withdrawRemainingBalance.call(uintDbF627x, uintVv7Iakl, {from: accounts[1]});
		const uint256npELoyY = await WolfStakingRewardsd76liIB.stake.call(uintvpuVsAA, uintjURWDLI, {from: accounts[0]});
		const uint256tK30akY = await WolfStakingRewardsd76liIB.withdraw.call(uintsNrZFZG, uintqKT5Jwd, {from: accounts[0]});
		const uint256arrayuHi4bmH = await WolfStakingRewardsd76liIB.updateNotifyRewardAmount.call(uintGYVdyz, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUwjE5Al = "M8JhSdsjqQmFYJ4I2PQL3DmGFm5V3LW5op"
		const stringkM4Cw9 = "Jwua47449b55QA6KyPMgHT74FZHvtJ1sbLe"
		const uintZ9IPVLg = BigInt("122")
		const WolfStakingRewardsE1Y4j0a = await WolfStakingRewards.new(stringUwjE5Al, stringkM4Cw9, uintZ9IPVLg, {from: accounts[1]});
		const uintAOKhJB = BigInt("961")
		const addressbRa6iAl = accounts[0]
		const uintORfTbr = BigInt("1786")
		const uintNZIv7yz = BigInt("1022")
		const uintZvdC9dl = BigInt("937")
		const uintGODJtKT = BigInt("1134")
		const uint14xf2V = BigInt("1879")
		const addresskLg7AyD = accounts[5]
		const uint256MYwYbSW = await WolfStakingRewardsE1Y4j0a.earned.call(addressbRa6iAl, uintAOKhJB, {from: accounts[0]});
		await WolfStakingRewardsE1Y4j0a.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256PgnRJbX = await WolfStakingRewardsE1Y4j0a.withdrawRemainingBalance.call(uintNZIv7yz, uintORfTbr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qZ8x52l = await WolfStakingRewardsE1Y4j0a.withdraw.call(uintGODJtKT, uintZvdC9dl, {from: accounts[2]});
		await WolfStakingRewardsE1Y4j0a.onlyRewardsDistribution.call({from: accounts[4]});
		const addressWswvPFH = await WolfStakingRewardsE1Y4j0a.updateReward.call(addresskLg7AyD, uint14xf2V, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresslv0nHa = accounts[1]
		const addresswWYyjma = accounts[4]
		const addressdcvCWqa = accounts[0]
		const WolfStakingRewardsQ6I2g0e = await WolfStakingRewards.new(addresslv0nHa, addresswWYyjma, addressdcvCWqa, {from: accounts[3]});
		const uintGRh9Rse = BigInt("600")
		const uintndhUhXr = BigInt("1873")
		const addressesp5yn = accounts[1]
		const uintiOUHDo = BigInt("1456")
		const uintNUoNKhW = BigInt("704")
		const uintwazbIEw = BigInt("1505")
		const uintuNFVG7 = BigInt("622")
//		const uint256dMN8342 = await WolfStakingRewardsQ6I2g0e.exit.call(uintGRh9Rse, {from: accounts[4]});
//		const uint256XiZ42em = await WolfStakingRewardsQ6I2g0e.balanceOfPerPool.call(addressesp5yn, uintndhUhXr, {from: "0x0000000000000000000000000000000000000001"});
//		const uintJhP4UMr = await WolfStakingRewardsQ6I2g0e.getReward.call(uintiOUHDo, {from: "0x0000000000000000000000000000000000000001"});
//		const uintPkON7xy = await WolfStakingRewardsQ6I2g0e.getReward.call(uintNUoNKhW, {from: accounts[2]});
//		const uint256TjhQ7cd = await WolfStakingRewardsQ6I2g0e.totalSupplyPerPool.call(uintwazbIEw, {from: accounts[2]});
//		await WolfStakingRewardsQ6I2g0e.onlyRewardsDistribution.call({from: accounts[2]});
//		const uint256M80TODu = await WolfStakingRewardsQ6I2g0e.rewardPerToken.call(uintuNFVG7, {from: accounts[2]});

		await expect(WolfStakingRewardsQ6I2g0e.exit.call(uintGRh9Rse, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressQ91nJvj = "0x0000000000000000000000000000000000000001"
		const addressmoehEg8 = accounts[2]
		const addressdCRzc6i = accounts[1]
		const WolfStakingRewardsc9Rj11h = await WolfStakingRewards.new(addressQ91nJvj, addressmoehEg8, addressdCRzc6i, {from: accounts[1]});
		const uintV6MCMoI = BigInt("726")
		const uintFPvNWR = BigInt("419")
		const uintIEC9ORF = BigInt("726")
		const uintCH6IgcM = BigInt("1666")
		const uintYdYjZyi = BigInt("1360")
//		const uint256dcGHFw = await WolfStakingRewardsc9Rj11h.withdraw.call(uintFPvNWR, uintV6MCMoI, {from: accounts[3]});
//		const uint256lT3PlB4 = await WolfStakingRewardsc9Rj11h.stake.call(uintCH6IgcM, uintIEC9ORF, {from: accounts[5]});
//		const uint256rhwx6zq = await WolfStakingRewardsc9Rj11h.rewardPerToken.call(uintYdYjZyi, {from: accounts[0]});

		await expect(WolfStakingRewardsc9Rj11h.withdraw.call(uintFPvNWR, uintV6MCMoI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressPUXCS5a = accounts[1]
		const addressOmsKBF3 = accounts[4]
		const addressVUVFj9 = accounts[0]
		const WolfStakingRewardsQ6I2g0e = await WolfStakingRewards.new(addressPUXCS5a, addressOmsKBF3, addressVUVFj9, {from: accounts[3]});
		const uintdgABu3 = BigInt("2015")
		const uintYEIA9EJ = BigInt("622")
		const uintPkON7xy = await WolfStakingRewardsQ6I2g0e.getReward.call(uintdgABu3, {from: accounts[2]});
		const uint256M80TODu = await WolfStakingRewardsQ6I2g0e.rewardPerToken.call(uintYEIA9EJ, {from: accounts[2]});

		assert.equal(uint256M80TODu, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const addressksUx1eN = "0x0000000000000000000000000000000000000001"
		const addressOKf9QoN = accounts[2]
		const addressbx4w8r9 = accounts[1]
		const WolfStakingRewardsc9Rj11h = await WolfStakingRewards.new(addressksUx1eN, addressOKf9QoN, addressbx4w8r9, {from: accounts[1]});
		const uintyxnbWwC = BigInt("726")
		const uintIldEqXE = BigInt("419")
		const uintAcja6VY = BigInt("723")
		const uintbMXmKSh = BigInt("144")
		const uinth4dWj52 = BigInt("693")
		const uintxUHJ6bz = BigInt("1666")
		const uinthw8Q960 = BigInt("1360")
//		const uint256dcGHFw = await WolfStakingRewardsc9Rj11h.withdraw.call(uintIldEqXE, uintyxnbWwC, {from: accounts[3]});
//		const uint256nq1rYpL = await WolfStakingRewardsc9Rj11h.exit.call(uintAcja6VY, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256rjjgLWs = await WolfStakingRewardsc9Rj11h.lastTimeRewardApplicable.call(uintbMXmKSh, {from: accounts[3]});
//		const uint256lT3PlB4 = await WolfStakingRewardsc9Rj11h.stake.call(uintxUHJ6bz, uinth4dWj52, {from: accounts[5]});
//		const uint256rhwx6zq = await WolfStakingRewardsc9Rj11h.rewardPerToken.call(uinthw8Q960, {from: accounts[0]});

		await expect(WolfStakingRewardsc9Rj11h.withdraw.call(uintIldEqXE, uintyxnbWwC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressNysV8nC = accounts[4]
		const addressjGfaHJf = accounts[2]
		const addressNgYWXXN = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardsitMpaM4 = await WolfStakingRewards.new(addressNysV8nC, addressjGfaHJf, addressNgYWXXN, {from: accounts[1]});
		const uintATJaE6u = BigInt("451")
		const addressJsFzZMx = accounts[2]
		const uintTAPO8F = BigInt("1134")
		const uintC16G2Or = BigInt("259")
		const uintoIxfiah = BigInt("179")
		const uint256Zlf35oN = await WolfStakingRewardsitMpaM4.earned.call(addressJsFzZMx, uintATJaE6u, {from: accounts[3]});
		const uintA4gfl0T = await WolfStakingRewardsitMpaM4.getReward.call(uintTAPO8F, {from: accounts[0]});
//		const uint256dwNGV0d = await WolfStakingRewardsitMpaM4.getRewardForDuration.call(uintC16G2Or, {from: accounts[2]});
//		const uint256k8I3biU = await WolfStakingRewardsitMpaM4.rewardPerToken.call(uintoIxfiah, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Zlf35oN, BigInt("0"))
		await expect(WolfStakingRewardsitMpaM4.getRewardForDuration.call(uintC16G2Or, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringPae7CYm = "gBrg4Pa3FUPQWEN1xGDXeONSVy4lZJzA6"
		const stringSiX1GZX = "wZnsQMlX308YdIk"
		const uintJINlhOy = BigInt("161")
		const WolfStakingRewardskh4tMa8 = await WolfStakingRewards.new(stringPae7CYm, stringSiX1GZX, uintJINlhOy, {from: accounts[0]});
		const uintsR5yv5d = BigInt("1308")
		const uintD11uA0q = BigInt("2038")
		const uintqXB0arr = BigInt("1116")
		await WolfStakingRewardskh4tMa8.onlyOwner.call({from: accounts[3]});
		const uint256YNsFoPM = await WolfStakingRewardskh4tMa8.rewardPerToken.call(uintsR5yv5d, {from: accounts[3]});
		const uint256UNpDLJ4 = await WolfStakingRewardskh4tMa8.withdrawRemainingBalance.call(uintqXB0arr, uintD11uA0q, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringy68mcu3 = "8qcOEZIuSjwsaqZy8OTQVTkvNv1B6VbycXmzwZHcC5IjEEFoN32omqYpADHbmz7XS7b0suDWI9ERMtsCWx1uKY"
		const stringBlFd5ek = "abZ8Zcg51Qb7CmMutFvIeSjkJTgW1d80LqPInxIQoyedw5NewLjYEISC9phtS38PuQ8kSzgnseqd9rlPDE3JjRMVW5SU27N8b"
		const uintf2VGk65 = BigInt("188")
		const WolfStakingRewardsUkPS8Rs = await WolfStakingRewards.new(stringy68mcu3, stringBlFd5ek, uintf2VGk65, {from: accounts[1]});
		const uintT6A5ZVU = BigInt("571")
		await WolfStakingRewardsUkPS8Rs.onlyOwner.call({from: accounts[2]});
		const uintMC3EGKB = await WolfStakingRewardsUkPS8Rs.getReward.call(uintT6A5ZVU, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHH47ZCX = "3xiOmvakge4yHc7FAf1QX95Sebcl7HTpp4Fp6YzmvhPSAfFiCdW5IDNA5y259vT3g4h2JIzIRgPRvJu"
		const stringkg5FsjE = "z21MdDmR8jEH3NCtprMJcfglO7thfiU5cbkmUJl4LN4mTf2OhZ1DBmNaUtNqgfijl2ukf"
		const uintlCD4jE0 = BigInt("118")
		const WolfStakingRewardsyn3g2JQ = await WolfStakingRewards.new(stringHH47ZCX, stringkg5FsjE, uintlCD4jE0, {from: accounts[2]});
		const uintuGLRRxn = BigInt("1228")
		const uintMQwCOxh = BigInt("1452")
		const uintrAUHnMW = BigInt("770")
		const uintTYHQmSM = BigInt("632")
		const uintvrGxrLG = BigInt("902")
		const uint256jE8FHDw = await WolfStakingRewardsyn3g2JQ.lastTimeRewardApplicable.call(uintuGLRRxn, {from: accounts[2]});
		const uinthdWsfdQ = await WolfStakingRewardsyn3g2JQ.getReward.call(uintMQwCOxh, {from: accounts[3]});
		const uint256VWjK9Fh = await WolfStakingRewardsyn3g2JQ.getRewardForDuration.call(uintrAUHnMW, {from: accounts[3]});
		const uint256gf7uMoq = await WolfStakingRewardsyn3g2JQ.exit.call(uintTYHQmSM, {from: accounts[2]});
		const uint256CZYxyN = await WolfStakingRewardsyn3g2JQ.totalSupplyPerPool.call(uintvrGxrLG, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const string491ZH5 = "oJmLgJzHm5hXUlSgbD6Vg4En2sQiCalJpAiv5tXgQA2oAPYS8ALha2utj0yVRnnqwH"
		const stringyXeVlwC = "SQ6A"
		const uintjkEvf2J = BigInt("125")
		const WolfStakingRewardsv83DEph = await WolfStakingRewards.new(string491ZH5, stringyXeVlwC, uintjkEvf2J, {from: accounts[1]});
		const uintzM7EsE = BigInt("61")
		const uintBPwRJud = BigInt("132")
		const uintYGgcItf = BigInt("1129")
		const addressmBGGBBn = accounts[1]
		const uint256NWrJXwG = await WolfStakingRewardsv83DEph.exit.call(uintzM7EsE, {from: accounts[4]});
		const uint256arrayYPIPqyl = await WolfStakingRewardsv83DEph.updateNotifyRewardAmount.call(uintBPwRJud, {from: accounts[3]});
		const uint8TNSFul5 = await WolfStakingRewardsv83DEph.decimals.call({from: accounts[4]});
		const uint256pWhWdJR = await WolfStakingRewardsv83DEph.earned.call(addressmBGGBBn, uintYGgcItf, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbzVPLtN = "krsZ16wkIwh648LE1sfiUtAcovtbnnvKBCjDq779mL3U"
		const stringtiFY6zZ = "ohpKDytNEi7PmdBTwQkBNLoDmRfwPf4OiudYt4YyXUTUCXGhXne7RRv70RBT"
		const uintcr98pe0 = BigInt("89")
		const WolfStakingRewardsIMcJTzX = await WolfStakingRewards.new(stringbzVPLtN, stringtiFY6zZ, uintcr98pe0, {from: accounts[0]});
		const uintge3MRQE = BigInt("989")
		const addressjFIEKsQ = accounts[2]
		const uintTB1t6vP = BigInt("1676")
		const addressATAoe96 = await WolfStakingRewardsIMcJTzX.updateReward.call(addressjFIEKsQ, uintge3MRQE, {from: accounts[2]});
		const uint256oi32eJP = await WolfStakingRewardsIMcJTzX.lastTimeRewardApplicable.call(uintTB1t6vP, {from: accounts[3]});
		await WolfStakingRewardsIMcJTzX.nonReentrant.call({from: accounts[3]});
		const stringAPHd5d2 = await WolfStakingRewardsIMcJTzX.name.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcic8id = "We2Eja2jXYyyoYTtryAwwX2SL16aIKJ7YFe6Su9"
		const stringQ1xb3L = "b7"
		const uintPAhGvzE = BigInt("129")
		const WolfStakingRewardsYoqmXTw = await WolfStakingRewards.new(stringcic8id, stringQ1xb3L, uintPAhGvzE, {from: "0x0000000000000000000000000000000000000001"});
		const uintCFSIkEB = BigInt("717")
		const uintZmlsqO = BigInt("1163")
		const uintkNMAhEv = BigInt("1445")
		const uintYQKLfgT = BigInt("875")
		const uints15tfoO = BigInt("742")
		const addressLpBvCo1 = accounts[4]
		const uint256WtNIEwO = await WolfStakingRewardsYoqmXTw.stake.call(uintZmlsqO, uintCFSIkEB, {from: accounts[1]});
		const uintlkjUi8t = await WolfStakingRewardsYoqmXTw.getReward.call(uintkNMAhEv, {from: accounts[2]});
		const uint256lu96qBQ = await WolfStakingRewardsYoqmXTw.rewardPerToken.call(uintYQKLfgT, {from: accounts[2]});
		const stringaeVtWsR = await WolfStakingRewardsYoqmXTw.symbol.call({from: accounts[4]});
		const uint256Yy14qgS = await WolfStakingRewardsYoqmXTw.earned.call(addressLpBvCo1, uints15tfoO, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringeIOYJfS = "cihwjwG"
		const stringAUKydQG = "mlMO2U3WkKK"
		const uintTMz4WUV = BigInt("62")
		const WolfStakingRewardsxZE5JF = await WolfStakingRewards.new(stringeIOYJfS, stringAUKydQG, uintTMz4WUV, {from: accounts[1]});
		const uintgs8KfAy = BigInt("638")
		const addressWcDaYe2 = "0x0000000000000000000000000000000000000001"
		const uintUUHQ2sR = BigInt("353")
		const uintvkPyCv2 = BigInt("584")
		const addressYEsYWXt = accounts[5]
		const uintPKPjjo = BigInt("416")
		const addressmIVjAMu = accounts[2]
		const uintnKvjApa = BigInt("502")
		const addressINcDVmL = accounts[2]
		const addressn9cjUt = await WolfStakingRewardsxZE5JF.updateReward.call(addressWcDaYe2, uintgs8KfAy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ghjENz0 = await WolfStakingRewardsxZE5JF.getRewardForDuration.call(uintUUHQ2sR, {from: accounts[0]});
		const addressmcvGtE3 = await WolfStakingRewardsxZE5JF.updateReward.call(addressYEsYWXt, uintvkPyCv2, {from: accounts[3]});
		const addressSGMOZoD = await WolfStakingRewardsxZE5JF.updateReward.call(addressmIVjAMu, uintPKPjjo, {from: accounts[2]});
		const addressI6Lo4v6 = await WolfStakingRewardsxZE5JF.updateReward.call(addressINcDVmL, uintnKvjApa, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringoLRYBiw = "NVMtR2tV"
		const stringGdIJX0 = "lnne2bHi69ycnirGGj3JTYti5oYfGb08csBQ4zMgs3wJCynZHQpfUNPG7ZErwR8xLdBFGbe4N55kVXWQK9ncOYjm7"
		const uint5rqdVD = BigInt("73")
		const WolfStakingRewardspoiRJOq = await WolfStakingRewards.new(stringoLRYBiw, stringGdIJX0, uint5rqdVD, {from: accounts[1]});
		const uinthlMongg = BigInt("664")
		const addressaaHEB7Z = accounts[0]
		const uintpORZrb4 = BigInt("352")
		const uintv1zeZQU = BigInt("933")
		const addressQBbJlPq = "0x0000000000000000000000000000000000000001"
		const uintEheqaSi = BigInt("1676")
		const uintHU4vQLk = BigInt("1216")
		const uint256x7OTJp1 = await WolfStakingRewardspoiRJOq.earned.call(addressaaHEB7Z, uinthlMongg, {from: accounts[2]});
		await WolfStakingRewardspoiRJOq.nonReentrant.call({from: accounts[2]});
		const uint256qz4tx9b = await WolfStakingRewardspoiRJOq.exit.call(uintpORZrb4, {from: accounts[1]});
		const uint256KZiyjGi = await WolfStakingRewardspoiRJOq.balanceOfPerPool.call(addressQBbJlPq, uintv1zeZQU, {from: accounts[4]});
		const uint256Gj3xImq = await WolfStakingRewardspoiRJOq.getRewardForDuration.call(uintEheqaSi, {from: accounts[2]});
		const uint256GFVVjfA = await WolfStakingRewardspoiRJOq.getRewardForDuration.call(uintHU4vQLk, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringufjFSo7 = "MWjLDa6iRh2QYzTDMi5jwAhXuzs"
		const stringt2so70U = "k5T22iX8m8ByiHILQ8dnACL9U7wJUJOmFk4fC2Qy"
		const uintF1Xx4in = BigInt("188")
		const WolfStakingRewards4QRjfx = await WolfStakingRewards.new(stringufjFSo7, stringt2so70U, uintF1Xx4in, {from: accounts[5]});
		const uintEhnkdZb = BigInt("1847")
		const uintF5EMoBm = BigInt("951")
		await WolfStakingRewards4QRjfx.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256dPuSpu = await WolfStakingRewards4QRjfx.lastTimeRewardApplicable.call(uintEhnkdZb, {from: accounts[2]});
		const uint256OdDNwxI = await WolfStakingRewards4QRjfx.lastTimeRewardApplicable.call(uintF5EMoBm, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressjXW9Gl = "0x0000000000000000000000000000000000000001"
		const addressQbVFGy8 = accounts[1]
		const addressDUJbAcF = accounts[4]
		const WolfStakingRewardsDRR80Nc = await WolfStakingRewards.new(addressjXW9Gl, addressQbVFGy8, addressDUJbAcF, {from: "0x0000000000000000000000000000000000000001"});
		const uintQGxjXIC = BigInt("66")
		const uintkVgjP3H = BigInt("828")
		const addressJcWitw = "0x0000000000000000000000000000000000000001"
		const uintttOq92 = BigInt("1139")
		const stringaaYeIU9 = await WolfStakingRewardsDRR80Nc.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256JOBsU2z = await WolfStakingRewardsDRR80Nc.rewardPerToken.call(uintQGxjXIC, {from: accounts[1]});
		const uint256Ld71PFK = await WolfStakingRewardsDRR80Nc.earned.call(addressJcWitw, uintkVgjP3H, {from: accounts[2]});
		const uint256dHSOwoQ = await WolfStakingRewardsDRR80Nc.exit.call(uintttOq92, {from: accounts[3]});
		await WolfStakingRewardsDRR80Nc.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringaRtifLo = "syD82fjs06wDaedevHzaAEFnFAQbNEG7uYJlKlLPEbyRJKBJPKkA0SEwWiY0ZmtX9BU"
		const stringiToaLbb = "D4LeRwo93qMLZltzJJPdDTipb"
		const uintuCTiThk = BigInt("37")
		const WolfStakingRewardsdBl39qp = await WolfStakingRewards.new(stringaRtifLo, stringiToaLbb, uintuCTiThk, {from: accounts[3]});
		const uintKjXq4qg = BigInt("413")
		const uintfHBR1tE = BigInt("1535")
		const uintxWOrhl0 = BigInt("1923")
		const uint256whymUsR = await WolfStakingRewardsdBl39qp.rewardPerToken.call(uintKjXq4qg, {from: accounts[2]});
		const uint256ZwIK16L = await WolfStakingRewardsdBl39qp.lastTimeRewardApplicable.call(uintfHBR1tE, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PNAc1X6 = await WolfStakingRewardsdBl39qp.exit.call(uintxWOrhl0, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringyQvqTX8 = "f7uBsS2DnAJ4axzo6lA2eJi08y3T3gdXKbjPnw5O35YwbAVFT3igAUBIswIOp5CCbhqaV4uNFy2CrRKQ6brKS"
		const stringbUXqtpi = "zsqHeoTbMadNT5Uk5LKemt3gwVaNG7f5QpwxJlFRkmKrFGfQsUXjXRV5"
		const uintFco6XPh = BigInt("74")
		const WolfStakingRewardsRBTzCQC = await WolfStakingRewards.new(stringyQvqTX8, stringbUXqtpi, uintFco6XPh, {from: accounts[1]});
		const uinthWCCTSE = BigInt("902")
		const uintn1YOGff = BigInt("118")
		const uintUjnwTkY = BigInt("1532")
		const uintSDcd2r = BigInt("582")
		const uintahrhXqh = BigInt("940")
		const uint256HmFxkv1 = await WolfStakingRewardsRBTzCQC.withdraw.call(uintn1YOGff, uinthWCCTSE, {from: accounts[2]});
		const uint256WJBRIpN = await WolfStakingRewardsRBTzCQC.getRewardForDuration.call(uintUjnwTkY, {from: accounts[3]});
		const stringIczmyis = await WolfStakingRewardsRBTzCQC.symbol.call({from: accounts[2]});
		const uint256Le2s758 = await WolfStakingRewardsRBTzCQC.stake.call(uintahrhXqh, uintSDcd2r, {from: accounts[2]});
		const uint8hOn2oEJ = await WolfStakingRewardsRBTzCQC.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbRsUlvS = "tHGwJ4D4uYxymx1NfwwsYATQ"
		const stringz6vkEUQ = "jEsWoayvQZdPzvpgzDtIMiGzCAN3dlN1O5ht6K039JTWVMqfeJRsLwhtQMRcJbK5nkr"
		const uintJm5aK7d = BigInt("207")
		const WolfStakingRewardsDk7zkV = await WolfStakingRewards.new(stringbRsUlvS, stringz6vkEUQ, uintJm5aK7d, {from: accounts[1]});
		const uintev2kpXR = BigInt("1484")
		const uintBoO8oK0 = BigInt("1124")
		const addresszM6eeMA = accounts[4]
		const stringqTe77IC = await WolfStakingRewardsDk7zkV.name.call({from: accounts[1]});
		const stringmDXa1qH = await WolfStakingRewardsDk7zkV.symbol.call({from: accounts[4]});
		const uint256hLUakel = await WolfStakingRewardsDk7zkV.rewardPerToken.call(uintev2kpXR, {from: accounts[0]});
		const addressluvSvyt = await WolfStakingRewardsDk7zkV.updateReward.call(addresszM6eeMA, uintBoO8oK0, {from: accounts[0]});
		const stringUZm2vaO = await WolfStakingRewardsDk7zkV.name.call({from: accounts[2]});
		const stringSLP6nO = await WolfStakingRewardsDk7zkV.name.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringG8CVqB = "aOawWYqPqeiHj4aD8UYUeFhlqpEM5oDD0JXVFA8kQS7oLSsPNxA"
		const stringxdg0Sl7 = "xNFGvwFM7XgjV9qO8aGWUzUdhpz1FspDtyl32IsZC9FKtbrrp7TLjrydrV"
		const uintin2EwAM = BigInt("43")
		const WolfStakingRewardsKxLboYW = await WolfStakingRewards.new(stringG8CVqB, stringxdg0Sl7, uintin2EwAM, {from: accounts[3]});
		const uintexp342V = BigInt("150")
		const uintZCt7j7S = BigInt("71")
		const uintvZ7UmcQ = BigInt("72")
		const uintR43rOKS = BigInt("358")
		const addressFnQTMV0 = accounts[4]
		const uint256PHitza = await WolfStakingRewardsKxLboYW.withdraw.call(uintZCt7j7S, uintexp342V, {from: accounts[1]});
		const uint256Kee5q2w = await WolfStakingRewardsKxLboYW.getRewardForDuration.call(uintvZ7UmcQ, {from: accounts[3]});
		const addressHjCfyJ9 = await WolfStakingRewardsKxLboYW.updateReward.call(addressFnQTMV0, uintR43rOKS, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvXLfjBY = "IOTXHjzcM99jzProlLqCzfHoGmfBwDuOgon8ozIrhwDX8qXsAgfG2byasXqQO96d"
		const stringEUGXALW = "Xn19n4aYei"
		const uintOjldUal = BigInt("160")
		const WolfStakingRewardsxU95dvT = await WolfStakingRewards.new(stringvXLfjBY, stringEUGXALW, uintOjldUal, {from: "0x0000000000000000000000000000000000000001"});
		const uintdZtKAh = BigInt("557")
		const uintywFtB6 = BigInt("1576")
		const uint256WRmg2jF = await WolfStakingRewardsxU95dvT.withdraw.call(uintywFtB6, uintdZtKAh, {from: accounts[3]});
		await WolfStakingRewardsxU95dvT.nonReentrant.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdRYJ1Gn = "GlbqlrBlYUVdaYdmbVYTIIIH"
		const stringOeppdAa = "awH2L8lIxD6WXntMVwfSOpP8D0qImPRQnT6J2ympVDPwW5jBfihpFfhQXxg3W9h3"
		const uintgkOVwSf = BigInt("67")
		const WolfStakingRewardsYQEVRuQ = await WolfStakingRewards.new(stringdRYJ1Gn, stringOeppdAa, uintgkOVwSf, {from: accounts[4]});
		const uintiic3Wl = BigInt("635")
		const addressjH5GvOH = "0x0000000000000000000000000000000000000001"
		const uintdlnmC9 = BigInt("1564")
		const uint8RIffCMp = await WolfStakingRewardsYQEVRuQ.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256CIsBSB9 = await WolfStakingRewardsYQEVRuQ.earned.call(addressjH5GvOH, uintiic3Wl, {from: accounts[2]});
		const uintyRhlHYm = await WolfStakingRewardsYQEVRuQ.getReward.call(uintdlnmC9, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWhyIQkA = "uUcIpxCYAKT2qUV2nh1DMxrlSiMpuuVRzan35Hh9nVFScv7P338"
		const stringyUvQDhR = "UE93BeSYOWjzGCmEw74KQsgnFqaPu"
		const uintmLes0m = BigInt("222")
		const WolfStakingRewardsUR4RtpC = await WolfStakingRewards.new(stringWhyIQkA, stringyUvQDhR, uintmLes0m, {from: accounts[2]});
		const uintBYgXwQ = BigInt("1185")
		const uintWM6LhWC = BigInt("1059")
		const uintbrmiurq = BigInt("1391")
		const uintpNOPgqC = BigInt("1039")
		const uintkwxrQPy = BigInt("1221")
		const uint256rgHowIt = await WolfStakingRewardsUR4RtpC.withdraw.call(uintWM6LhWC, uintBYgXwQ, {from: accounts[5]});
		const uint256Y2oJONk = await WolfStakingRewardsUR4RtpC.getRewardForDuration.call(uintbrmiurq, {from: accounts[2]});
		const uint256etlPoZn = await WolfStakingRewardsUR4RtpC.lastTimeRewardApplicable.call(uintpNOPgqC, {from: accounts[4]});
		const uint256arrayRRu0p63 = await WolfStakingRewardsUR4RtpC.updateNotifyRewardAmount.call(uintkwxrQPy, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzs4vnH7 = "UPiIuiXdxu1Y09LpwR6ErWyI4oKH3FjSr3dsVs9LkQUABs6d9SfZ"
		const stringklKhzRr = "5mlfpWJUl2ZqJAfdgOiV8RtzIuudtQSpwUbQRC4OAGRaeD1xCdTrGReY9G1HFUB7kbgd4MfPjhcWrbyYd8PgVRF"
		const uintYh2ZUWq = BigInt("63")
		const WolfStakingRewardsa8s3MNN = await WolfStakingRewards.new(stringzs4vnH7, stringklKhzRr, uintYh2ZUWq, {from: accounts[2]});
		const uintYzSR1M = BigInt("953")
		const addressvpeN9Gw = accounts[1]
		const uint256Vhop02 = await WolfStakingRewardsa8s3MNN.earned.call(addressvpeN9Gw, uintYzSR1M, {from: accounts[5]});
		await WolfStakingRewardsa8s3MNN.onlyRewardsDistribution.call({from: accounts[5]});
		const stringlSsews8 = await WolfStakingRewardsa8s3MNN.name.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVRO3Qz2 = "o7h3af1XTQqoJdFDOxuhGwfYfGdbKzkmm5YU"
		const stringsBNHl3L = "ojSrBIAUfjmrZ8qOUrWtRiZnA9b5Sw1Bd56q2J8GgokH6xQyEYuA8zpc"
		const uintriNnCcY = BigInt("75")
		const WolfStakingRewardsRD4w4eR = await WolfStakingRewards.new(stringVRO3Qz2, stringsBNHl3L, uintriNnCcY, {from: accounts[0]});
		const uintCMf8h0 = BigInt("1992")
		const uintBf7Xmcc = BigInt("355")
		const addressFAnXK3P = accounts[3]
		const uintLhOhkNq = BigInt("34")
		const uint256arrayLhFZjge = await WolfStakingRewardsRD4w4eR.updateNotifyRewardAmount.call(uintCMf8h0, {from: accounts[2]});
		const uint256RUaXXH7 = await WolfStakingRewardsRD4w4eR.balanceOfPerPool.call(addressFAnXK3P, uintBf7Xmcc, {from: accounts[0]});
		const uintaDQl7wG = await WolfStakingRewardsRD4w4eR.getReward.call(uintLhOhkNq, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzhzcAPk = "ntu"
		const stringIR99qry = "bYGWP39bVTMCvLiJCF3OL0or3NX2nyO60FikYRdApxprXGE"
		const uintyxJbiz = BigInt("102")
		const WolfStakingRewardsGRsbAIp = await WolfStakingRewards.new(stringzhzcAPk, stringIR99qry, uintyxJbiz, {from: accounts[0]});
		const uintwfX63Po = BigInt("303")
		const uintTNMMxAD = BigInt("819")
		const uintLl0oBeP = BigInt("719")
		const addressmK2vt6l = accounts[0]
		const uintmilPz7T = await WolfStakingRewardsGRsbAIp.getReward.call(uintwfX63Po, {from: accounts[4]});
		await WolfStakingRewardsGRsbAIp.onlyRewardsDistribution.call({from: accounts[4]});
		const uintzUnjVm = await WolfStakingRewardsGRsbAIp.getReward.call(uintTNMMxAD, {from: accounts[4]});
		const uint256sSUkgwM = await WolfStakingRewardsGRsbAIp.balanceOfPerPool.call(addressmK2vt6l, uintLl0oBeP, {from: accounts[4]});
		const uint8sae4Ney = await WolfStakingRewardsGRsbAIp.decimals.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringokoZ4Xj = "XIyBDgk8MdIJsmhPLWWYpy5Dd8Hza2Fb3nV3l9hpZmOd8UDQedblaqLi53kBJS7B7r60sjeommcodHm0FYH4YB6bk6UD8LOr"
		const stringbtX5OWs = "ab9VNikXGuUQtDUw5dftKcLxaN9c2SHMXYt"
		const uintiixStXM = BigInt("156")
		const WolfStakingRewardsgKCTqxf = await WolfStakingRewards.new(stringokoZ4Xj, stringbtX5OWs, uintiixStXM, {from: accounts[1]});
		const uintCzHnsTZ = BigInt("1714")
		const uintpev3RSa = BigInt("1339")
		const uintWcV3Ggo = BigInt("491")
		const uintZCBDP6n = BigInt("775")
		const uint256QfwacU = await WolfStakingRewardsgKCTqxf.totalSupplyPerPool.call(uintCzHnsTZ, {from: accounts[3]});
		await WolfStakingRewardsgKCTqxf.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256rRW752 = await WolfStakingRewardsgKCTqxf.stake.call(uintWcV3Ggo, uintpev3RSa, {from: accounts[0]});
		const uint8DWxzRcq = await WolfStakingRewardsgKCTqxf.decimals.call({from: accounts[0]});
		const uint256GQS7ym = await WolfStakingRewardsgKCTqxf.exit.call(uintZCBDP6n, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringgaWPiJG = "hBf1NH8Ovl8nSE5EKLLA"
		const stringaE8jTWM = "nyzMHNMYdQSiBCn3N8oRKYGS6MMeXc8EFkU7EBFe7nky3RqQwm7DIhaUy"
		const uintaAsggQw = BigInt("109")
		const WolfStakingRewardsa9Chmp4 = await WolfStakingRewards.new(stringgaWPiJG, stringaE8jTWM, uintaAsggQw, {from: accounts[4]});
		const uintNHrdgTQ = BigInt("1660")
		const uintS7Ns2FL = BigInt("869")
		const uintfx5igD4 = BigInt("1437")
		const uintvWakcxs = await WolfStakingRewardsa9Chmp4.getReward.call(uintNHrdgTQ, {from: accounts[1]});
		const uint256GbAblV = await WolfStakingRewardsa9Chmp4.getRewardForDuration.call(uintS7Ns2FL, {from: accounts[3]});
		const uint256V2EHWzO = await WolfStakingRewardsa9Chmp4.totalSupplyPerPool.call(uintfx5igD4, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringw1ZRXH8 = "xp6VepB5NV4IMsCfhA62YSMSipYs9j5dtLIu4I1g8Yx6sqiexueaF3pgg1BL8"
		const stringH0ldtDQ = "DIkziayWWHoUdjhBVwCUWQdpVxdRVC8tmrgUaXBiHJ28tTIaSM7OaSAPR2eztoopqz4wZh5dXSMpuuHwLJecV9"
		const uintulHriYc = BigInt("197")
		const WolfStakingRewardsLpRmsFy = await WolfStakingRewards.new(stringw1ZRXH8, stringH0ldtDQ, uintulHriYc, {from: accounts[4]});
		const uintFRfzUOP = BigInt("1076")
		const uintknvzynE = BigInt("793")
		const uintkw5nFAA = BigInt("124")
		const uintQHomEVD = BigInt("862")
		const uinttNRiTs = BigInt("311")
		const uintWhSn43u = BigInt("56")
		const uint256iZD97O0 = await WolfStakingRewardsLpRmsFy.withdrawRemainingBalance.call(uintknvzynE, uintFRfzUOP, {from: accounts[2]});
		await WolfStakingRewardsLpRmsFy.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256elGsf49 = await WolfStakingRewardsLpRmsFy.withdraw.call(uintQHomEVD, uintkw5nFAA, {from: accounts[4]});
		const uint256J0aF8Dv = await WolfStakingRewardsLpRmsFy.exit.call(uinttNRiTs, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tpvz2k = await WolfStakingRewardsLpRmsFy.lastTimeRewardApplicable.call(uintWhSn43u, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdqFiweA = "2M5BgbUH4eBuFfefgwPPn9caeFoT1QZnW0CR8rXqRDY5q8yqIqt84Cxg3urM84kqpY4k74sEO5hL770KtRDvBYbg8C"
		const stringybHbSMr = "N1RyUfCP4Mnx8yzd0H7534jdM84n5qrXlHfBvFL3NCJoaRpAkXjuxJTzooYjNrG3nkO0NmAbUsAR6ktzgMN5ebIny"
		const uintrnPi13i = BigInt("101")
		const WolfStakingRewardsRI6cwTI = await WolfStakingRewards.new(stringdqFiweA, stringybHbSMr, uintrnPi13i, {from: accounts[4]});
		const uintfbymzIA = BigInt("1438")
		const uintjNhwqkv = BigInt("1279")
		const uintIWy0vGz = BigInt("1096")
		const uintmEnK19h = BigInt("1381")
		const uint256GVww80B = await WolfStakingRewardsRI6cwTI.getRewardForDuration.call(uintfbymzIA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256XPD4OEL = await WolfStakingRewardsRI6cwTI.lastTimeRewardApplicable.call(uintjNhwqkv, {from: "0x0000000000000000000000000000000000000001"});
		const uint256D0NlFL0 = await WolfStakingRewardsRI6cwTI.getRewardForDuration.call(uintIWy0vGz, {from: accounts[2]});
		const uint256wFTYZWX = await WolfStakingRewardsRI6cwTI.lastTimeRewardApplicable.call(uintmEnK19h, {from: accounts[2]});
		const stringrWhQbgp = await WolfStakingRewardsRI6cwTI.symbol.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxix6rk = "R7aW"
		const stringlCF4qvl = "FeEB2RdYHDjtqb3uLfiv4oWCjlv32w3rSd4T29nJtZTmB2Pe4MOQlhn6MkExvGL"
		const uintvNlPccK = BigInt("94")
		const WolfStakingRewardsE2hoSu3 = await WolfStakingRewards.new(stringxix6rk, stringlCF4qvl, uintvNlPccK, {from: accounts[5]});
		const uintBl3oyEf = BigInt("53")
		const addressdLISS17 = accounts[2]
		const uintabpp37 = BigInt("1028")
		const uintlNeX6HA = BigInt("697")
		const uint47XtQw = BigInt("1357")
		const addressSHOa9wD = await WolfStakingRewardsE2hoSu3.updateReward.call(addressdLISS17, uintBl3oyEf, {from: accounts[1]});
		const uint256NOne9Q0 = await WolfStakingRewardsE2hoSu3.rewardPerToken.call(uintabpp37, {from: accounts[0]});
		const uint256Xr2gojt = await WolfStakingRewardsE2hoSu3.withdraw.call(uint47XtQw, uintlNeX6HA, {from: accounts[3]});
		const stringbN8P57b = await WolfStakingRewardsE2hoSu3.symbol.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWsFU5m = "jrRi9dAXuu"
		const stringU96t1qP = "sR1FDFxYLQ3XcyWc"
		const uintnvt7Pn1 = BigInt("145")
		const WolfStakingRewardsjJQslZ0 = await WolfStakingRewards.new(stringWsFU5m, stringU96t1qP, uintnvt7Pn1, {from: accounts[2]});
		const uintBV8OFOr = BigInt("466")
		const uinteuwawHR = BigInt("66")
		const uintQkIpGCW = BigInt("1770")
		const uintTMl0OFe = await WolfStakingRewardsjJQslZ0.getReward.call(uintBV8OFOr, {from: accounts[2]});
		const uint256g3IVxPq = await WolfStakingRewardsjJQslZ0.withdraw.call(uintQkIpGCW, uinteuwawHR, {from: accounts[1]});
		await WolfStakingRewardsjJQslZ0.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringBc1M0ZT = "yPNHugJl1H5C1gj9kIbnuTByQK6hC07VcOZg8n5q2eZMNwI7jRntWM5R4IJsKOy53KhgufqGn5aV"
		const stringOlrZ7w = "7PbpTjKjwtvMtEdYHPYNlGwNulLLMBtgfghPxImX0uZwJ9zP23RPO2H"
		const uintogfh1OF = BigInt("15")
		const WolfStakingRewardst47FLwG = await WolfStakingRewards.new(stringBc1M0ZT, stringOlrZ7w, uintogfh1OF, {from: "0x0000000000000000000000000000000000000001"});
		const uintHKKv2RF = BigInt("1132")
		const uintzmOYSdK = BigInt("474")
		const uintwdicCtB = BigInt("97")
		const uinteNKPkoB = BigInt("194")
		const uinttQXEkPz = BigInt("1860")
		const uint256ZehVbRK = await WolfStakingRewardst47FLwG.lastTimeRewardApplicable.call(uintHKKv2RF, {from: accounts[1]});
		const uint256umpFDrZ = await WolfStakingRewardst47FLwG.getRewardForDuration.call(uintzmOYSdK, {from: accounts[3]});
		const uint256arrayMHlsFjp = await WolfStakingRewardst47FLwG.updateNotifyRewardAmount.call(uintwdicCtB, {from: accounts[3]});
		const uint256arrayvlNeJyZ = await WolfStakingRewardst47FLwG.updateNotifyRewardAmount.call(uinteNKPkoB, {from: accounts[3]});
		const uint256Fsxz2wV = await WolfStakingRewardst47FLwG.totalSupplyPerPool.call(uinttQXEkPz, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringpKnIzDx = "i4ixOEAEqh8eEecaqkUaV3SMkxgR"
		const string2S2iwj = "3VKl9zOv4h4EUyE0XsWK7D6eZThTsaaQKQHjdNZRJzbKm3eaH"
		const uintzBuaYUL = BigInt("133")
		const WolfStakingRewardsY73XYA = await WolfStakingRewards.new(stringpKnIzDx, string2S2iwj, uintzBuaYUL, {from: accounts[0]});
		const uintznB1NSk = BigInt("1466")
		const uintLcuaIrJ = BigInt("658")
		const uint256BayzCJe = await WolfStakingRewardsY73XYA.lastTimeRewardApplicable.call(uintznB1NSk, {from: accounts[4]});
		const uint256eSbnzpU = await WolfStakingRewardsY73XYA.lastTimeRewardApplicable.call(uintLcuaIrJ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressY95jb0 = "0x0000000000000000000000000000000000000001"
		const addressESthTUh = accounts[2]
		const addressVoeHB2 = accounts[1]
		const WolfStakingRewardsc9Rj11h = await WolfStakingRewards.new(addressY95jb0, addressESthTUh, addressVoeHB2, {from: accounts[1]});
		const uintmRdYRWD = BigInt("5")
		const uintxFt9OSr = BigInt("672")
		const uintScZ9SCz = BigInt("1666")
//		const uint256RVEFgzK = await WolfStakingRewardsc9Rj11h.exit.call(uintmRdYRWD, {from: accounts[0]});
//		const uint256lT3PlB4 = await WolfStakingRewardsc9Rj11h.stake.call(uintScZ9SCz, uintxFt9OSr, {from: accounts[5]});

		await expect(WolfStakingRewardsc9Rj11h.exit.call(uintmRdYRWD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringJQEByJj = "BbEogiC1CmGrOMzUe1gDw1GKB8jVUhsrHvnOV7U81BabhcVqGDygK7U9Mtma"
		const stringOmhnUp = "jH8jQuMaXymrVuZDTw3q7arTv1ILsbb1updtmXpUBYw2Jv0pyIOGshlRkaEzz"
		const uintmyFHQBr = BigInt("58")
		const WolfStakingRewardsdchk9ll = await WolfStakingRewards.new(stringJQEByJj, stringOmhnUp, uintmyFHQBr, {from: accounts[3]});
		const uintjYzfP6Z = BigInt("325")
		const uint0hD8TT = BigInt("1414")
		await WolfStakingRewardsdchk9ll.onlyOwner.call({from: accounts[3]});
		await WolfStakingRewardsdchk9ll.onlyOwner.call({from: accounts[2]});
		const uint256arrayBpwnMb4 = await WolfStakingRewardsdchk9ll.updateNotifyRewardAmount.call(uintjYzfP6Z, {from: accounts[4]});
		const uint256eefJGn5 = await WolfStakingRewardsdchk9ll.lastTimeRewardApplicable.call(uint0hD8TT, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringp2jmhMG = "N6JAn7S1SHWI54NAoTdNfIFQ4OwMYBp6Vrvy5pKKQjefgobbhvMCWJSqCd1VU26s3wjwWcAJYWVh5cmlx9hwwW2d3r"
		const stringbL73uI = "DJUXQ0uEAuiW7ylwebd9P6x"
		const uintnWwJOBs = BigInt("98")
		const WolfStakingRewardst1lecvp = await WolfStakingRewards.new(stringp2jmhMG, stringbL73uI, uintnWwJOBs, {from: accounts[3]});
		const uintBkRi2Vw = BigInt("1524")
		const uintISc0QZa = BigInt("1541")
		const uintagnV9Eb = BigInt("727")
		const addressijTtr9T = accounts[3]
		const uinttS90kX0 = BigInt("625")
		const uintbvts8TX = BigInt("1523")
		const uint256Lkb17Sn = await WolfStakingRewardst1lecvp.withdraw.call(uintISc0QZa, uintBkRi2Vw, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardst1lecvp.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256WPeys2h = await WolfStakingRewardst1lecvp.earned.call(addressijTtr9T, uintagnV9Eb, {from: accounts[4]});
		const stringVjUgyU = await WolfStakingRewardst1lecvp.symbol.call({from: accounts[3]});
		const uint256PeHsVE = await WolfStakingRewardst1lecvp.getRewardForDuration.call(uinttS90kX0, {from: accounts[4]});
		const uintTYIrO8 = await WolfStakingRewardst1lecvp.getReward.call(uintbvts8TX, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwsIq9Pn = "0FUK572l75Qfb7VQBWagJbduJQll2QzYtMzlIxJXhydKM4bzcLDvKLqIrilGEJJr23bWna"
		const stringmuwPgrm = "vEVB2RNJM37Kpy1tl6FKxsRqx8nlVhpDLzHBeWz0yGqiGBhVJDNTcOUheep5zams7DOvUTCw91J"
		const uintUecJnKY = BigInt("43")
		const WolfStakingRewardsG6dxYga = await WolfStakingRewards.new(stringwsIq9Pn, stringmuwPgrm, uintUecJnKY, {from: accounts[2]});
		const uintWYq63i7 = BigInt("1785")
		const addresstZvWpwY = accounts[5]
		const uintMmnfbVF = BigInt("412")
		const uintSTcyk1W = BigInt("970")
		const uintGB3FiS = BigInt("1326")
		const addressjNPyTa7 = accounts[1]
		const uint256n7BBBJt = await WolfStakingRewardsG6dxYga.earned.call(addresstZvWpwY, uintWYq63i7, {from: accounts[1]});
		const uint256Kb9uBQF = await WolfStakingRewardsG6dxYga.withdrawRemainingBalance.call(uintSTcyk1W, uintMmnfbVF, {from: accounts[1]});
		const addresshZvVLUy = await WolfStakingRewardsG6dxYga.updateReward.call(addressjNPyTa7, uintGB3FiS, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresshb4wLKw = "0x0000000000000000000000000000000000000001"
		const addressCa6iotl = accounts[2]
		const addresskHooYwe = accounts[1]
		const WolfStakingRewardsc9Rj11h = await WolfStakingRewards.new(addresshb4wLKw, addressCa6iotl, addresskHooYwe, {from: accounts[1]});
		const uintWhsx3qL = BigInt("8")
		const uintsuFA5XJ = BigInt("672")
		const uintn5m8hs2 = BigInt("1666")
//		const uint256RVEFgzK = await WolfStakingRewardsc9Rj11h.exit.call(uintWhsx3qL, {from: accounts[0]});
//		const uint256lT3PlB4 = await WolfStakingRewardsc9Rj11h.stake.call(uintn5m8hs2, uintsuFA5XJ, {from: accounts[5]});

		await expect(WolfStakingRewardsc9Rj11h.exit.call(uintWhsx3qL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringna0h73U = "oIeYf0QadcE95CehPJhBkOHHGPu6DvnCvaxawquPJrszFmXV8G"
		const stringN8ooMW2 = "aE4FF2WhwP8yywaX88ECzrHjgkjcDcK0iEcDOIqepG8q"
		const uintZW6QXzM = BigInt("137")
		const WolfStakingRewardsbMgF2wN = await WolfStakingRewards.new(stringna0h73U, stringN8ooMW2, uintZW6QXzM, {from: accounts[3]});
		const uintzfRXeD = BigInt("1215")
		const uintAtcFG7m = BigInt("1538")
		const addressuMrTBxi = accounts[4]
		const uintKxft9tS = BigInt("790")
		const uintinCFg3x = BigInt("167")
		const uintmMg1VXy = BigInt("559")
		const addresspTJ770f = accounts[3]
		const uint256rhLrn1 = await WolfStakingRewardsbMgF2wN.lastTimeRewardApplicable.call(uintzfRXeD, {from: accounts[1]});
		const addresshu5qFxu = await WolfStakingRewardsbMgF2wN.updateReward.call(addressuMrTBxi, uintAtcFG7m, {from: accounts[3]});
		const uint256kdbdHxG = await WolfStakingRewardsbMgF2wN.withdrawRemainingBalance.call(uintinCFg3x, uintKxft9tS, {from: accounts[2]});
		await WolfStakingRewardsbMgF2wN.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256aaw3UHi = await WolfStakingRewardsbMgF2wN.balanceOfPerPool.call(addresspTJ770f, uintmMg1VXy, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringOAPgolb = "QedN31w"
		const string4cmvDZ = "xo9jHEyeoHwEThVxrzFxZbihYJaerrsJxqMOTkflDpCqlXkSpeUubX8a1QbBPmHuCAg0Crw"
		const uintbTnGKdh = BigInt("153")
		const WolfStakingRewardsyt56VQk = await WolfStakingRewards.new(stringOAPgolb, string4cmvDZ, uintbTnGKdh, {from: accounts[1]});
		const uintdmn37BU = BigInt("607")
		const uint5ETuGf = BigInt("187")
		const uinta58mdSj = BigInt("1810")
		const uint256roiw1po = await WolfStakingRewardsyt56VQk.rewardPerToken.call(uintdmn37BU, {from: accounts[1]});
		const uint256VczhSQF = await WolfStakingRewardsyt56VQk.rewardPerToken.call(uint5ETuGf, {from: accounts[0]});
		const uint256t45Ataw = await WolfStakingRewardsyt56VQk.getRewardForDuration.call(uinta58mdSj, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringY219JXb = "LNXzF8mdsuDXGA6fXabi9sHorNj3U955e3JHtnUdF5MyBKLr9VWgNJk7Tq8C1NGu8tUFrlmfM1IsiSmmDdXABy7TBORZF8uu"
		const stringjBGWHXS = "aFC1B"
		const uintxWKE5vG = BigInt("189")
		const WolfStakingRewardsLBxtDvb = await WolfStakingRewards.new(stringY219JXb, stringjBGWHXS, uintxWKE5vG, {from: accounts[1]});
		const uintvdsAeMV = BigInt("937")
		const uintwWqGSa = BigInt("1296")
		const uintT3wlvw = BigInt("892")
		const uintUXcg9oO = BigInt("1560")
		const uintEesnfl = BigInt("570")
		const uintMubVwCv = BigInt("1970")
		const uint256ktZklFA = await WolfStakingRewardsLBxtDvb.withdraw.call(uintwWqGSa, uintvdsAeMV, {from: "0x0000000000000000000000000000000000000001"});
		const uintFCrn3QF = await WolfStakingRewardsLBxtDvb.getReward.call(uintT3wlvw, {from: accounts[5]});
		const uint256XFUHJWf = await WolfStakingRewardsLBxtDvb.totalSupplyPerPool.call(uintUXcg9oO, {from: accounts[1]});
		const uint8JKeAuO = await WolfStakingRewardsLBxtDvb.decimals.call({from: accounts[2]});
		const uint256oriHFFd = await WolfStakingRewardsLBxtDvb.withdrawRemainingBalance.call(uintMubVwCv, uintEesnfl, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringLEsPRxV = "PZ3W5sYfhvStfIrssh29tDEgK8T0ubgyeklxV"
		const stringhkUOlPN = "7CNWSNS90yOtvYxKJA6"
		const uintLinEfr = BigInt("155")
		const WolfStakingRewardsGX3rWYF = await WolfStakingRewards.new(stringLEsPRxV, stringhkUOlPN, uintLinEfr, {from: accounts[4]});
		const uintvrezVKD = BigInt("1921")
		const uintYRD7vX0 = BigInt("1376")
		const uintEj6GLCz = BigInt("1924")
		const addressBydPtZa = accounts[3]
		const uintTkhJKj = BigInt("1572")
		const addressnIw4jN5 = accounts[2]
		await WolfStakingRewardsGX3rWYF.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256G3tRbae = await WolfStakingRewardsGX3rWYF.withdraw.call(uintYRD7vX0, uintvrezVKD, {from: accounts[2]});
		const uint256aWmbw9 = await WolfStakingRewardsGX3rWYF.balanceOfPerPool.call(addressBydPtZa, uintEj6GLCz, {from: accounts[0]});
		const uint256FbdXT3a = await WolfStakingRewardsGX3rWYF.balanceOfPerPool.call(addressnIw4jN5, uintTkhJKj, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqr0h7UW = "wdvGTvvUPC9GzEXwM3v6K80nkbB3kiI6veFeurl4fEVqNt40Vgv"
		const stringD2RnI64 = "v4rYGl3TSXeXOgHLEKXgGuS55u"
		const uinty1DQFDH = BigInt("86")
		const WolfStakingRewardsX7fs54 = await WolfStakingRewards.new(stringqr0h7UW, stringD2RnI64, uinty1DQFDH, {from: accounts[1]});
		const uintTMzvbmd = BigInt("1385")
		const uinthmYRPTH = BigInt("926")
		const stringVPwZTZw = await WolfStakingRewardsX7fs54.symbol.call({from: accounts[2]});
		const uint256arraysRwTBGo = await WolfStakingRewardsX7fs54.updateNotifyRewardAmount.call(uintTMzvbmd, {from: accounts[4]});
		const uint256P2cnhIE = await WolfStakingRewardsX7fs54.rewardPerToken.call(uinthmYRPTH, {from: accounts[3]});
	});
})