const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const stringw8nM3oK = "mX3PFNput6aWyV454ex9xFoK4"
		const stringMgxODy = "2QsWjk2RYgkCOv4b2gqUqkEFSwhogP2hWmoJV3osShqMv9nUjYVXs5YPvdo3qvnxrB"
		const uint1DB9va = BigInt("54")
		const BACMARSLPTOKENPoolXMjBrcn = await BACMARSLPTOKENPool.new(stringw8nM3oK, stringMgxODy, uint1DB9va, {from: accounts[0]});
		const byteYYKXLyj = "0x03111e1a120f04041a1b09111a0f151618070a031e070e160c171f1210200214"
		const byteUtNZO4E = "0x0810180e061f191a010202030a1b1d160b040b0b0a1c082002191b0a01120a0f"
		const uintwTU2V6X = BigInt("195")
		const uintJLftnJF = BigInt("1226")
		const uintRXCnrC3 = BigInt("1731")
		const uint256P96Vag = await BACMARSLPTOKENPoolXMjBrcn.stakeWithPermit.call(uintRXCnrC3, uintJLftnJF, uintwTU2V6X, byteUtNZO4E, byteYYKXLyj, {from: accounts[1]});
		const uint256qTMMW5D = await BACMARSLPTOKENPoolXMjBrcn.rewardPerToken.call({from: accounts[5]});
		await BACMARSLPTOKENPoolXMjBrcn.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8KaltTE = await BACMARSLPTOKENPoolXMjBrcn.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhoLU3lo = "AOaooUOariLE2b25EJpvbWy7RhKOtIqm8rXcDUZRBNqGqttfWVLRRAjYXzUXtnQHOSEfJEnHjYJLPOnNxWTOcWUix"
		const stringDycNlzY = "1LV9lRhVVYBx9b7KAy14a1H1oPBFK5gHxAB53elJ7qRvCOG"
		const uintIn6z5dh = BigInt("178")
		const BACMARSLPTOKENPoolXiqTte = await BACMARSLPTOKENPool.new(stringhoLU3lo, stringDycNlzY, uintIn6z5dh, {from: accounts[1]});
		const uintS6wfQDN = BigInt("1354")
		const uintXbteqO0 = BigInt("1740")
		const addressyfR0sue = accounts[3]
		await BACMARSLPTOKENPoolXiqTte.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256L1lObjh = await BACMARSLPTOKENPoolXiqTte.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256WHsAMY0 = await BACMARSLPTOKENPoolXiqTte.notifyRewardAmount.call(uintS6wfQDN, {from: accounts[1]});
		const uint256Ib3XWaR = await BACMARSLPTOKENPoolXiqTte.withdraw.call(uintXbteqO0, {from: accounts[2]});
		await BACMARSLPTOKENPoolXiqTte.getReward.call({from: accounts[2]});
		const uint256ZVI3J1E = await BACMARSLPTOKENPoolXiqTte.balanceOf.call(addressyfR0sue, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringnd09gAP = "Y"
		const stringZD9zUpX = "lFIzIukWRloN3MliTfbyGXerqdGd"
		const uintUKTJ5lP = BigInt("12")
		const BACMARSLPTOKENPoolEVLNW2o = await BACMARSLPTOKENPool.new(stringnd09gAP, stringZD9zUpX, uintUKTJ5lP, {from: "0x0000000000000000000000000000000000000001"});
		const stringi1t3TvM = await BACMARSLPTOKENPoolEVLNW2o.name.call({from: accounts[1]});
		await BACMARSLPTOKENPoolEVLNW2o.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const strings0WfNDJ = "a4TmH6XvM7HlH0KpXSnDRKrQY7pXLu3q8ql1SJ2txMaaVlOtTlWo06VMPG1wRxYEOjG0o2ePfPru"
		const stringqULIOno = "qYce2CJRDf7f0g2B1hmP9LFBOMugPrhvzrt32Go4mOV"
		const uintKvej0Fh = BigInt("176")
		const BACMARSLPTOKENPoolxPjVVx9 = await BACMARSLPTOKENPool.new(strings0WfNDJ, stringqULIOno, uintKvej0Fh, {from: accounts[1]});
		const uintetC47R2 = BigInt("676")
		await BACMARSLPTOKENPoolxPjVVx9.onlyRewardsDistribution.call({from: accounts[2]});
		const uint8dBX2Jln = await BACMARSLPTOKENPoolxPjVVx9.decimals.call({from: accounts[3]});
		const uint256rqt9pIf = await BACMARSLPTOKENPoolxPjVVx9.stake.call(uintetC47R2, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressayvrFVH = accounts[3]
		const addressfMyhY10 = "0x0000000000000000000000000000000000000001"
		const addressteQvQ4t = accounts[4]
		const BACMARSLPTOKENPoolku9i10c = await BACMARSLPTOKENPool.new(addressayvrFVH, addressfMyhY10, addressteQvQ4t, {from: accounts[3]});
//		const stringnqgo4mE = await BACMARSLPTOKENPoolku9i10c.symbol.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolku9i10c.exit.call({from: accounts[1]});
//		const uint256sBg9Uy4 = await BACMARSLPTOKENPoolku9i10c.getRewardForDuration.call({from: accounts[3]});
//		await BACMARSLPTOKENPoolku9i10c.getReward.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolku9i10c.symbol.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressa3kZz0C = accounts[3]
		const address9hbVMy = accounts[3]
		const addressbderKK8 = accounts[3]
		const BACMARSLPTOKENPoolEJoxWzA = await BACMARSLPTOKENPool.new(addressa3kZz0C, address9hbVMy, addressbderKK8, {from: accounts[5]});
		const uintyDWl4B4 = BigInt("445")
		const uintM055Kgp = BigInt("1822")
//		const uint256HKnZtn0 = await BACMARSLPTOKENPoolEJoxWzA.notifyRewardAmount.call(uintyDWl4B4, {from: accounts[4]});
//		const uint256gZ7eLzn = await BACMARSLPTOKENPoolEJoxWzA.getRewardForDuration.call({from: accounts[2]});
//		const uint256yY51OW = await BACMARSLPTOKENPoolEJoxWzA.stake.call(uintM055Kgp, {from: accounts[0]});
//		await BACMARSLPTOKENPoolEJoxWzA.getReward.call({from: accounts[3]});
//		const uint256m7hr3AT = await BACMARSLPTOKENPoolEJoxWzA.getRewardForDuration.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolEJoxWzA.notifyRewardAmount.call(uintyDWl4B4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressqtq8MAc = accounts[1]
		const addressvXevgf7 = accounts[5]
		const addressAb8LiNU = accounts[3]
		const BACMARSLPTOKENPooljj7iNrI = await BACMARSLPTOKENPool.new(addressqtq8MAc, addressvXevgf7, addressAb8LiNU, {from: accounts[0]});
		const byteWlCeLUI = "0x1b04130a1c0e0513121410081c020a0a090c030f13101515080f19131316171e"
		const byteh08ftUq = "0x081f190501131f120406001f1002120a070f0e0b030a130a080e0c0e090b0c02"
		const uintnUccd5m = BigInt("52")
		const uintNDuR8Mp = BigInt("1009")
		const uintzjLG37B = BigInt("1946")
		const addressfFwsyu5 = accounts[5]
		const uintUEKN9li = BigInt("1776")
//		const uint256HqtQY5S = await BACMARSLPTOKENPooljj7iNrI.stakeWithPermit.call(uintzjLG37B, uintNDuR8Mp, uintnUccd5m, byteh08ftUq, byteWlCeLUI, {from: accounts[3]});
//		const addresshblr0T = await BACMARSLPTOKENPooljj7iNrI.updateReward.call(addressfFwsyu5, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256JwH4SlN = await BACMARSLPTOKENPooljj7iNrI.notifyRewardAmount.call(uintUEKN9li, {from: accounts[1]});

		await expect(BACMARSLPTOKENPooljj7iNrI.stakeWithPermit.call(uintzjLG37B, uintNDuR8Mp, uintnUccd5m, byteh08ftUq, byteWlCeLUI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringALS9F1p = "ja2SqFPNiKvMOzC71V5aDGu0GzPURRw4nSnSNcSbQChDot3ufD5dEdtfCqhyNQelh"
		const stringB2E1fdQ = "Y2EPkISIBAtPTzwtv"
		const uintj0dQaw = BigInt("17")
		const BACMARSLPTOKENPoolEw8mPBc = await BACMARSLPTOKENPool.new(stringALS9F1p, stringB2E1fdQ, uintj0dQaw, {from: accounts[0]});
		await BACMARSLPTOKENPoolEw8mPBc.exit.call({from: accounts[3]});
		const stringxJAJuvI = await BACMARSLPTOKENPoolEw8mPBc.symbol.call({from: accounts[3]});
		const stringEzbLUpX = await BACMARSLPTOKENPoolEw8mPBc.symbol.call({from: accounts[0]});
		const stringVHQ1ja9 = await BACMARSLPTOKENPoolEw8mPBc.name.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAWNzHmX = "FPMshiIHPcVlsNbjkW13MYPDQsSGloX1aXVKeDmCEYi9Jyz5VLzgYjNyB8rXRoiU6mFMFqiXBaQ9F2yDJSQoKV"
		const stringf8tubEq = "Fkj1BhVdSLbrXS6aBh6MO"
		const uintJjkc0M = BigInt("197")
		const BACMARSLPTOKENPoolyeI9Ffm = await BACMARSLPTOKENPool.new(stringAWNzHmX, stringf8tubEq, uintJjkc0M, {from: accounts[4]});
		const uintJ2s5DsY = BigInt("247")
		const uintKl5IdoI = BigInt("628")
		const stringmyr1WL = await BACMARSLPTOKENPoolyeI9Ffm.symbol.call({from: accounts[4]});
		const uint256JxIf9Qc = await BACMARSLPTOKENPoolyeI9Ffm.getRewardForDuration.call({from: accounts[4]});
		const uint256z62qbBU = await BACMARSLPTOKENPoolyeI9Ffm.getRewardForDuration.call({from: accounts[2]});
		const uint256QO9zW70 = await BACMARSLPTOKENPoolyeI9Ffm.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256f6WSx2y = await BACMARSLPTOKENPoolyeI9Ffm.stake.call(uintJ2s5DsY, {from: accounts[3]});
		const uint256EdjKtNV = await BACMARSLPTOKENPoolyeI9Ffm.notifyRewardAmount.call(uintKl5IdoI, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressofXPWYy = accounts[3]
		const addressdq7oXJG = accounts[0]
		const addressrjJNWcO = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolbKOK25p = await BACMARSLPTOKENPool.new(addressofXPWYy, addressdq7oXJG, addressrjJNWcO, {from: accounts[1]});
		const addressCWT94fh = accounts[0]
		const uint256rCbj2z = await BACMARSLPTOKENPoolbKOK25p.totalSupply.call({from: accounts[4]});
		const uint256G30Ahds = await BACMARSLPTOKENPoolbKOK25p.earned.call(addressCWT94fh, {from: accounts[1]});
		const uint256CeXcE6 = await BACMARSLPTOKENPoolbKOK25p.totalSupply.call({from: accounts[4]});

		assert.equal(uint256CeXcE6, BigInt("0"))
		assert.equal(uint256G30Ahds, BigInt("0"))
		assert.equal(uint256rCbj2z, BigInt("0"))
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressXzElAYa = accounts[3]
		const addresstHMnLxt = accounts[3]
		const addresseEjBfU8 = accounts[3]
		const BACMARSLPTOKENPoolEJoxWzA = await BACMARSLPTOKENPool.new(addressXzElAYa, addresstHMnLxt, addresseEjBfU8, {from: accounts[5]});
		const uintUIVQBBh = BigInt("445")
		const uintz6kcOuo = BigInt("457")
//		await BACMARSLPTOKENPoolEJoxWzA.exit.call({from: accounts[2]});
//		const uint256HKnZtn0 = await BACMARSLPTOKENPoolEJoxWzA.notifyRewardAmount.call(uintUIVQBBh, {from: accounts[4]});
//		const uint256gZ7eLzn = await BACMARSLPTOKENPoolEJoxWzA.getRewardForDuration.call({from: accounts[2]});
//		const uint256yY51OW = await BACMARSLPTOKENPoolEJoxWzA.stake.call(uintz6kcOuo, {from: accounts[0]});
//		await BACMARSLPTOKENPoolEJoxWzA.getReward.call({from: accounts[3]});
//		const uint256m7hr3AT = await BACMARSLPTOKENPoolEJoxWzA.getRewardForDuration.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolEJoxWzA.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresspuuCoX0 = accounts[3]
		const addressWCqC5lm = accounts[0]
		const addressjBB8hM = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolbKOK25p = await BACMARSLPTOKENPool.new(addresspuuCoX0, addressWCqC5lm, addressjBB8hM, {from: accounts[1]});
		const addressuf3bd9 = accounts[0]
		const addressW6PXF5a = accounts[1]
		const uint256rCbj2z = await BACMARSLPTOKENPoolbKOK25p.totalSupply.call({from: accounts[4]});
		const uint256G30Ahds = await BACMARSLPTOKENPoolbKOK25p.earned.call(addressuf3bd9, {from: accounts[1]});
		const uint256CeXcE6 = await BACMARSLPTOKENPoolbKOK25p.totalSupply.call({from: accounts[4]});
		const uint256bVLzgNb = await BACMARSLPTOKENPoolbKOK25p.balanceOf.call(addressW6PXF5a, {from: accounts[4]});

		assert.equal(uint256CeXcE6, BigInt("0"))
		assert.equal(uint256G30Ahds, BigInt("0"))
		assert.equal(uint256bVLzgNb, BigInt("0"))
		assert.equal(uint256rCbj2z, BigInt("0"))
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressi0lourS = accounts[3]
		const addressO4ZrLaf = accounts[3]
		const addressbD92dGi = accounts[3]
		const BACMARSLPTOKENPoolEJoxWzA = await BACMARSLPTOKENPool.new(addressi0lourS, addressO4ZrLaf, addressbD92dGi, {from: accounts[5]});
		const uintm9NQ24 = BigInt("445")
		const uintqEU6HBM = BigInt("1822")
		const uint256NBqnY1 = await BACMARSLPTOKENPoolEJoxWzA.getRewardForDuration.call({from: accounts[1]});
//		const uint256HKnZtn0 = await BACMARSLPTOKENPoolEJoxWzA.notifyRewardAmount.call(uintm9NQ24, {from: accounts[4]});
//		await BACMARSLPTOKENPoolEJoxWzA.exit.call({from: accounts[4]});
//		const uint256gZ7eLzn = await BACMARSLPTOKENPoolEJoxWzA.getRewardForDuration.call({from: accounts[2]});
//		const uint256yY51OW = await BACMARSLPTOKENPoolEJoxWzA.stake.call(uintqEU6HBM, {from: accounts[0]});
//		await BACMARSLPTOKENPoolEJoxWzA.getReward.call({from: accounts[3]});
//		const uint256m7hr3AT = await BACMARSLPTOKENPoolEJoxWzA.getRewardForDuration.call({from: accounts[4]});

		assert.equal(uint256NBqnY1, BigInt("0"))
		await expect(BACMARSLPTOKENPoolEJoxWzA.notifyRewardAmount.call(uintm9NQ24, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWwOkBY5 = "CJAMTNrDAhWIW5uo3BLdbOHUNNCqDrJLGA07we"
		const stringQCTCwRR = "Fm7sWoqdAzNjsOqnzWyvdUszdnJji1"
		const uintaVFfiie = BigInt("141")
		const BACMARSLPTOKENPoolA1rFdDa = await BACMARSLPTOKENPool.new(stringWwOkBY5, stringQCTCwRR, uintaVFfiie, {from: accounts[3]});
		const uintz3CFVG7 = BigInt("1741")
		await BACMARSLPTOKENPoolA1rFdDa.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256x1VucEa = await BACMARSLPTOKENPoolA1rFdDa.notifyRewardAmount.call(uintz3CFVG7, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressEXq4Srm = accounts[1]
		const address2RmScy = accounts[5]
		const addressgsKYuGM = accounts[3]
		const BACMARSLPTOKENPooljj7iNrI = await BACMARSLPTOKENPool.new(addressEXq4Srm, address2RmScy, addressgsKYuGM, {from: accounts[0]});
		const byteDzLGrk0 = "0x1b04130a1c0e0513121410081c020a0a090c030f13101515080f19131316171e"
		const byteWADfik = "0x081f190501131f120406001f1002120a070f0e0b030a130a080e0c0e090b0c02"
		const uintUbetW5F = BigInt("52")
		const uintbSUTdNu = BigInt("1009")
		const uintZMOb8b5 = BigInt("1946")
		const addressbCEXVkG = accounts[6]
		const uintZQNxx5B = BigInt("1776")
		const byteJgCK56m = "0x1e1217081a041a13160f180a0f0a1808120f0d10040a1f100512081406060c15"
		const byteuoW2NY1 = "0x121615100809111e1412071e10060a120d091a0b090b10110b02051806011213"
		const uintHI7Ti7N = BigInt("41")
		const uintulfmYfm = BigInt("151")
		const uint508eOn = BigInt("25")
//		await BACMARSLPTOKENPooljj7iNrI.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256HqtQY5S = await BACMARSLPTOKENPooljj7iNrI.stakeWithPermit.call(uintZMOb8b5, uintbSUTdNu, uintUbetW5F, byteWADfik, byteDzLGrk0, {from: accounts[3]});
//		await BACMARSLPTOKENPooljj7iNrI.onlyRewardsDistribution.call({from: accounts[0]});
//		const uint256pzOBt9m = await BACMARSLPTOKENPooljj7iNrI.getRewardForDuration.call({from: accounts[5]});
//		const addresshblr0T = await BACMARSLPTOKENPooljj7iNrI.updateReward.call(addressbCEXVkG, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256JwH4SlN = await BACMARSLPTOKENPooljj7iNrI.notifyRewardAmount.call(uintZQNxx5B, {from: accounts[1]});
//		const uint256suAZwNU = await BACMARSLPTOKENPooljj7iNrI.stakeWithPermit.call(uint508eOn, uintulfmYfm, uintHI7Ti7N, byteuoW2NY1, byteJgCK56m, {from: accounts[5]});
//		await BACMARSLPTOKENPooljj7iNrI.nonReentrant.call({from: accounts[1]});
//		const stringL25IFgC = await BACMARSLPTOKENPooljj7iNrI.symbol.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPooljj7iNrI.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressdLoiHUR = accounts[1]
		const addressMzGMov0 = accounts[5]
		const addressJpFu1p1 = accounts[3]
		const BACMARSLPTOKENPooljj7iNrI = await BACMARSLPTOKENPool.new(addressdLoiHUR, addressMzGMov0, addressJpFu1p1, {from: accounts[0]});
		const byteEGxVlow = "0x1b04130a1c0e0513121410081c020a0a090c030f13101515080f19131316171e"
		const bytePrxm1us = "0x081f190501131f120406001f1002120a070f0e0b030a130a080e0c0e090b0c02"
		const uinteViWugz = BigInt("52")
		const uintM99upOf = BigInt("1009")
		const uintc2Qhebr = BigInt("1946")
		const addressLbxMRsO = accounts[6]
		const uintngU0rYW = BigInt("223")
//		await BACMARSLPTOKENPooljj7iNrI.exit.call({from: accounts[4]});
//		const uint256HqtQY5S = await BACMARSLPTOKENPooljj7iNrI.stakeWithPermit.call(uintc2Qhebr, uintM99upOf, uinteViWugz, bytePrxm1us, byteEGxVlow, {from: accounts[3]});
//		const addresshblr0T = await BACMARSLPTOKENPooljj7iNrI.updateReward.call(addressLbxMRsO, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256JwH4SlN = await BACMARSLPTOKENPooljj7iNrI.notifyRewardAmount.call(uintngU0rYW, {from: accounts[1]});

		await expect(BACMARSLPTOKENPooljj7iNrI.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyitpMZr = "zgoHtvvV2nlwkeKBRAQysKbrmpJHGLULN9wgNs6jatgwKBA4BiiiKrw9OT5q9IRPLwVBh46WgsA6m7Sg"
		const stringi405CLQ = "dxuUUrXY9USOFnTvk2r4d6wBtAWTC18JbL277VUcNa6xzHwd5V3HJGR8BVOZPty15fb8EZVAvfWpD9zNIZIAd"
		const uintWDd1qrx = BigInt("236")
		const BACMARSLPTOKENPoolUGgNGyF = await BACMARSLPTOKENPool.new(stringyitpMZr, stringi405CLQ, uintWDd1qrx, {from: accounts[0]});
		const uint256czFH8b9 = await BACMARSLPTOKENPoolUGgNGyF.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolUGgNGyF.nonReentrant.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvuZgEwj = "MMEj7FqRHth4O8CWR8X2i7gm7eV9RfefOMdFi4bUEOnfF78volPY3MGj2Xd3I7kHfcwmkRz2sLYNOLlgBUAoqeFpgazNbVhk8o"
		const stringJIV0HlU = "PbpV6SSVHYw6WbpGY240ryzHsboQULCrgrdQetPXElqu"
		const uinthYL7ukG = BigInt("19")
		const BACMARSLPTOKENPoolKk6J6so = await BACMARSLPTOKENPool.new(stringvuZgEwj, stringJIV0HlU, uinthYL7ukG, {from: accounts[0]});
		const uint7THTmU = BigInt("1653")
		const uint256tMHv29a = await BACMARSLPTOKENPoolKk6J6so.totalSupply.call({from: accounts[1]});
		const uint256EPIlLTC = await BACMARSLPTOKENPoolKk6J6so.stake.call(uint7THTmU, {from: accounts[0]});
		const uint256nSDwoqu = await BACMARSLPTOKENPoolKk6J6so.lastTimeRewardApplicable.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressCEkrxgC = accounts[1]
		const addressWSRQRYm = "0x0000000000000000000000000000000000000001"
		const addresstIOXoq = accounts[1]
		const BACMARSLPTOKENPoolQWGfIN = await BACMARSLPTOKENPool.new(addressCEkrxgC, addressWSRQRYm, addresstIOXoq, {from: accounts[2]});
		const uintHiKD6fv = BigInt("1238")
		const addresssbmtmrt = accounts[2]
//		const uint256XdBXacv = await BACMARSLPTOKENPoolQWGfIN.withdraw.call(uintHiKD6fv, {from: accounts[2]});
//		const stringZWzgA4 = await BACMARSLPTOKENPoolQWGfIN.symbol.call({from: accounts[1]});
//		const uint256E1hPNK0 = await BACMARSLPTOKENPoolQWGfIN.balanceOf.call(addresssbmtmrt, {from: accounts[4]});

		await expect(BACMARSLPTOKENPoolQWGfIN.withdraw.call(uintHiKD6fv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuYkBYt1 = "8KYhC9BBRPNTQOOyYjrTLxhXIqvYnYFaSMI"
		const stringSVgc5CR = "UwUfH6ML"
		const uintq1rfinR = BigInt("75")
		const BACMARSLPTOKENPoolKkMccmM = await BACMARSLPTOKENPool.new(stringuYkBYt1, stringSVgc5CR, uintq1rfinR, {from: accounts[4]});
		await BACMARSLPTOKENPoolKkMccmM.onlyRewardsDistribution.call({from: accounts[2]});
		const uint8S8ea5VY = await BACMARSLPTOKENPoolKkMccmM.decimals.call({from: accounts[5]});
		await BACMARSLPTOKENPoolKkMccmM.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressQI4fr7T = accounts[1]
		const addresslpzQBw = accounts[0]
		const addressxmUlrKG = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolGPzL0sR = await BACMARSLPTOKENPool.new(addressQI4fr7T, addresslpzQBw, addressxmUlrKG, {from: accounts[4]});
		const uintXlRIt8p = BigInt("592")
		const uintiuxs2rN = BigInt("451")
//		const uint256mzCEyvy = await BACMARSLPTOKENPoolGPzL0sR.stake.call(uintXlRIt8p, {from: accounts[2]});
//		const uint256vboi8ne = await BACMARSLPTOKENPoolGPzL0sR.totalSupply.call({from: accounts[5]});
//		const uint256Qlf2sbq = await BACMARSLPTOKENPoolGPzL0sR.stake.call(uintiuxs2rN, {from: accounts[0]});
//		await BACMARSLPTOKENPoolGPzL0sR.nonReentrant.call({from: accounts[3]});
//		const uint256j9u2o8 = await BACMARSLPTOKENPoolGPzL0sR.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolGPzL0sR.stake.call(uintXlRIt8p, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const address5hsHta = accounts[1]
		const addressPhWENi1 = accounts[5]
		const addressdfa7r0x = accounts[3]
		const BACMARSLPTOKENPooljj7iNrI = await BACMARSLPTOKENPool.new(address5hsHta, addressPhWENi1, addressdfa7r0x, {from: accounts[0]});
		const byte31NkkT = "0x1b04130a1c0e0513121410081c020a0a090c030f13101515080f19131316171e"
		const byteOGW9UXI = "0x081f190501131f120406001f1002120a070f0e0b030a130a080e0c0e090b0c02"
		const uintfYXARwj = BigInt("52")
		const uintP2mf9N6 = BigInt("1009")
		const uintp2rUhmL = BigInt("1946")
		const addressCHiCwK8 = accounts[7]
		const uintiSWCM3K = BigInt("1776")
		const byteLMSBOLI = "0x1e1217081a041a13160f180a0f0a1808120f0d10040a1f100512081406060c15"
		const byteYhb7x9h = "0x121615100809111e1412071e10060a120d091a0b090b10110b02051806011213"
		const uinta5tMAqL = BigInt("41")
		const uintKhVFjWQ = BigInt("151")
		const uintJVZkMKK = BigInt("25")
		const addressyFgLM2c = accounts[0]
//		await BACMARSLPTOKENPooljj7iNrI.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256HqtQY5S = await BACMARSLPTOKENPooljj7iNrI.stakeWithPermit.call(uintp2rUhmL, uintP2mf9N6, uintfYXARwj, byteOGW9UXI, byte31NkkT, {from: accounts[3]});
//		await BACMARSLPTOKENPooljj7iNrI.onlyRewardsDistribution.call({from: accounts[0]});
//		const uint256pzOBt9m = await BACMARSLPTOKENPooljj7iNrI.getRewardForDuration.call({from: accounts[5]});
//		const uint256d9eBSr1 = await BACMARSLPTOKENPooljj7iNrI.rewardPerToken.call({from: accounts[0]});
//		const addresshblr0T = await BACMARSLPTOKENPooljj7iNrI.updateReward.call(addressCHiCwK8, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256JwH4SlN = await BACMARSLPTOKENPooljj7iNrI.notifyRewardAmount.call(uintiSWCM3K, {from: accounts[1]});
//		const uint256suAZwNU = await BACMARSLPTOKENPooljj7iNrI.stakeWithPermit.call(uintJVZkMKK, uintKhVFjWQ, uinta5tMAqL, byteYhb7x9h, byteLMSBOLI, {from: accounts[5]});
//		await BACMARSLPTOKENPooljj7iNrI.onlyRewardsDistribution.call({from: accounts[2]});
//		const stringL25IFgC = await BACMARSLPTOKENPooljj7iNrI.symbol.call({from: accounts[1]});
//		const uint256T563UR = await BACMARSLPTOKENPooljj7iNrI.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256gQPi1JJ = await BACMARSLPTOKENPooljj7iNrI.earned.call(addressyFgLM2c, {from: "0x0000000000000000000000000000000000000001"});
//		const stringodm4eSf = await BACMARSLPTOKENPooljj7iNrI.name.call({from: accounts[0]});

		await expect(BACMARSLPTOKENPooljj7iNrI.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressyH1jf8e = accounts[1]
		const addressBHlslek = accounts[0]
		const addressm1lDyPX = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolGPzL0sR = await BACMARSLPTOKENPool.new(addressyH1jf8e, addressBHlslek, addressm1lDyPX, {from: accounts[4]});
		const uintBwy2GnF = BigInt("592")
		const uintJemoCxs = BigInt("64")
		const uintx1oywQP = BigInt("451")
//		const uint256mzCEyvy = await BACMARSLPTOKENPoolGPzL0sR.stake.call(uintBwy2GnF, {from: accounts[2]});
//		const uint256vboi8ne = await BACMARSLPTOKENPoolGPzL0sR.totalSupply.call({from: accounts[5]});
//		const uint256BQEQA7 = await BACMARSLPTOKENPoolGPzL0sR.notifyRewardAmount.call(uintJemoCxs, {from: accounts[1]});
//		const uint256Qlf2sbq = await BACMARSLPTOKENPoolGPzL0sR.stake.call(uintx1oywQP, {from: accounts[0]});
//		await BACMARSLPTOKENPoolGPzL0sR.nonReentrant.call({from: accounts[3]});
//		const uint256j9u2o8 = await BACMARSLPTOKENPoolGPzL0sR.lastTimeRewardApplicable.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolGPzL0sR.stake.call(uintBwy2GnF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhHOostj = "P38MKlPH1dXzRgJlx4m2QP"
		const stringjxwzXZd = "AdUuL8r9jgaXz0Elzp3W6PRkFHRowKrVjys4rHBSIW7K4oC0YaH6gLuiSmFnS2F8BhNqc3tRvL2NXaja"
		const uintrKD81f7 = BigInt("254")
		const BACMARSLPTOKENPoolNtLSWEI = await BACMARSLPTOKENPool.new(stringhHOostj, stringjxwzXZd, uintrKD81f7, {from: accounts[1]});
		const addressMiqDqhN = accounts[5]
		const addressTaEX64d = accounts[2]
		const uint256jiz0E8u = await BACMARSLPTOKENPoolNtLSWEI.earned.call(addressMiqDqhN, {from: accounts[1]});
		const uint256FwPGWMC = await BACMARSLPTOKENPoolNtLSWEI.earned.call(addressTaEX64d, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoPnzbBM = "HUOtEOTIe7vMWsF3QZDXgKz"
		const stringX8vpt06 = "pNi88mXgRjRcRgOz1r237JAnNWcqabamt"
		const uinthonCrbK = BigInt("233")
		const BACMARSLPTOKENPoolHhuCfAG = await BACMARSLPTOKENPool.new(stringoPnzbBM, stringX8vpt06, uinthonCrbK, {from: accounts[4]});
		const uints6sfxKT = BigInt("1352")
		await BACMARSLPTOKENPoolHhuCfAG.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256ODc9jE3 = await BACMARSLPTOKENPoolHhuCfAG.stake.call(uints6sfxKT, {from: accounts[0]});
		const uint256qhCjX6c = await BACMARSLPTOKENPoolHhuCfAG.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolHhuCfAG.getReward.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQO4pE5R = "rLyli2r1lQ9hCfeoLf54uieWbW4zHMwuG"
		const stringIvLQq7Z = "rxBWHxQYb4IFojTRVQfWlqYTuL1aE63hVI7OmRTqjIu1WBNmR9cxBThXIGQIdPOpzM"
		const uintbaf96j = BigInt("105")
		const BACMARSLPTOKENPoolBQGXPjB = await BACMARSLPTOKENPool.new(stringQO4pE5R, stringIvLQq7Z, uintbaf96j, {from: accounts[0]});
		const addressjO27Z3Z = accounts[0]
		const uint256LVgwxBr = await BACMARSLPTOKENPoolBQGXPjB.earned.call(addressjO27Z3Z, {from: accounts[2]});
		const stringGocLftF = await BACMARSLPTOKENPoolBQGXPjB.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolBQGXPjB.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolBQGXPjB.nonReentrant.call({from: accounts[0]});
		await BACMARSLPTOKENPoolBQGXPjB.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolBQGXPjB.nonReentrant.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string1sNkkC = "SeYinaIqLoT573aioYJcN8bU8YvaAdFSs4k8"
		const stringUJ7iSCF = "iV1qGiGiTBdtxHB3JSPp6CKSF5GzsjmHTKa5HJaW6nj1uAPyqXkbeSI33QExYoPlejnzAIez"
		const uintcAN4nWz = BigInt("106")
		const BACMARSLPTOKENPoolKbiR2ri = await BACMARSLPTOKENPool.new(string1sNkkC, stringUJ7iSCF, uintcAN4nWz, {from: accounts[5]});
		const uintKsDV04f = BigInt("1064")
		const uint256hmfIcgS = await BACMARSLPTOKENPoolKbiR2ri.rewardPerToken.call({from: accounts[5]});
		await BACMARSLPTOKENPoolKbiR2ri.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256LPGg20G = await BACMARSLPTOKENPoolKbiR2ri.notifyRewardAmount.call(uintKsDV04f, {from: accounts[3]});
		const uint256iob2TTE = await BACMARSLPTOKENPoolKbiR2ri.totalSupply.call({from: accounts[4]});
		const uint256UyHpJLy = await BACMARSLPTOKENPoolKbiR2ri.totalSupply.call({from: accounts[3]});
		const uint256j31oDfi = await BACMARSLPTOKENPoolKbiR2ri.rewardPerToken.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressvscSdDt = accounts[2]
		const addresszN0Y6wO = accounts[1]
		const addressbaR1lj5 = accounts[0]
		const BACMARSLPTOKENPoolJKNmzka = await BACMARSLPTOKENPool.new(addressvscSdDt, addresszN0Y6wO, addressbaR1lj5, {from: "0x0000000000000000000000000000000000000001"});
		const bytecobbZR = "0x00101a111c1316111f120c1204131715110811051315050c171a1812061f080c"
		const byteuhysYJ6 = "0x07011a0c1a0a020a1d1b160c141b08161f182016080f04101c110407180d1f0b"
		const uinthREMlRA = BigInt("114")
		const uintTL0phEC = BigInt("635")
		const uintz5IDOHS = BigInt("825")
		const uint8OvYu4zD = await BACMARSLPTOKENPoolJKNmzka.decimals.call({from: accounts[2]});
		const uint256Iyis1iI = await BACMARSLPTOKENPoolJKNmzka.stakeWithPermit.call(uintz5IDOHS, uintTL0phEC, uinthREMlRA, byteuhysYJ6, bytecobbZR, {from: accounts[1]});
		const uint8rlwFHS7 = await BACMARSLPTOKENPoolJKNmzka.decimals.call({from: accounts[0]});
		const uint256GE2D83g = await BACMARSLPTOKENPoolJKNmzka.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresshWMuvZX = accounts[3]
		const addresseUSE8es = accounts[0]
		const addressCNjjTD = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolbKOK25p = await BACMARSLPTOKENPool.new(addresshWMuvZX, addresseUSE8es, addressCNjjTD, {from: accounts[1]});
		const uintSxOoV4T = BigInt("1740")
		const uint256rCbj2z = await BACMARSLPTOKENPoolbKOK25p.totalSupply.call({from: accounts[4]});
//		const uint256FkYjYyX = await BACMARSLPTOKENPoolbKOK25p.notifyRewardAmount.call(uintSxOoV4T, {from: accounts[3]});

		assert.equal(uint256rCbj2z, BigInt("0"))
		await expect(BACMARSLPTOKENPoolbKOK25p.notifyRewardAmount.call(uintSxOoV4T, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiB2vW15 = "1Rkn5BfB69R2AreByKwe0pXgNDJeeqkmO"
		const stringNsdVtp = "vGdBcsDAlS1ziisDlz4eejGeOG8W7rPAwrBFdmVp6tJa7oHQJEOrRwx1yL"
		const uintL1794hT = BigInt("8")
		const BACMARSLPTOKENPooly3ngO1J = await BACMARSLPTOKENPool.new(stringiB2vW15, stringNsdVtp, uintL1794hT, {from: accounts[0]});
		const uintPbIeWPD = BigInt("1920")
		const uintUVPSLWo = BigInt("1924")
		const addressoat7Ahy = accounts[0]
		const uintp1sFFsi = BigInt("1600")
		const uint256GHcfqcL = await BACMARSLPTOKENPooly3ngO1J.withdraw.call(uintPbIeWPD, {from: accounts[5]});
		const uint256vSTdXx = await BACMARSLPTOKENPooly3ngO1J.rewardPerToken.call({from: accounts[4]});
		const uint256EnUlhaq = await BACMARSLPTOKENPooly3ngO1J.withdraw.call(uintUVPSLWo, {from: accounts[2]});
		const uint256SRhlWsc = await BACMARSLPTOKENPooly3ngO1J.balanceOf.call(addressoat7Ahy, {from: accounts[2]});
		const uint256F6Ylis = await BACMARSLPTOKENPooly3ngO1J.withdraw.call(uintp1sFFsi, {from: accounts[0]});
		await BACMARSLPTOKENPooly3ngO1J.getReward.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCcsgNNi = "GIQPC"
		const stringlDuDDMy = "vrJy79y4VuviqRfhkTso4KtHh4MO7tCiX6uLtMTsWkrGBGOsR8V4nYASLyNQNzgLeX5fkpBhiFp5dqxhko81kdg4G3pU7TsyC3"
		const uintXjfQ6Fn = BigInt("228")
		const BACMARSLPTOKENPoolBIbZ1Xp = await BACMARSLPTOKENPool.new(stringCcsgNNi, stringlDuDDMy, uintXjfQ6Fn, {from: accounts[3]});
		const uint256DPeixHo = await BACMARSLPTOKENPoolBIbZ1Xp.totalSupply.call({from: accounts[3]});
		const uint256woC6wBb = await BACMARSLPTOKENPoolBIbZ1Xp.totalSupply.call({from: accounts[1]});
		await BACMARSLPTOKENPoolBIbZ1Xp.onlyRewardsDistribution.call({from: accounts[1]});
		const stringEDlKUnT = await BACMARSLPTOKENPoolBIbZ1Xp.name.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrkMgqa3 = "pj4dkcFNqJRwjCvO1oJdcvBSt6YGa4ARBYIgxpoQYboybEkzNDWBkhc3pdXDVXcXrD"
		const stringvXVg5s3 = "b3kEsGkRS3S17EnO7IecTd3PxDOro0DWtQ7yAO30gSWMImHXfIx5ee6wfrymXo5ysqgPEKB3Aeb4bcridQqY7L1"
		const uinttf56ejs = BigInt("188")
		const BACMARSLPTOKENPoolG7S4DQe = await BACMARSLPTOKENPool.new(stringrkMgqa3, stringvXVg5s3, uinttf56ejs, {from: accounts[0]});
		const addressqedqlI7 = accounts[2]
		const uintlD2abOa = BigInt("777")
		const stringwbz5W5q = await BACMARSLPTOKENPoolG7S4DQe.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPoolG7S4DQe.getReward.call({from: accounts[3]});
		const uint256WZaSPc1 = await BACMARSLPTOKENPoolG7S4DQe.earned.call(addressqedqlI7, {from: accounts[2]});
		const stringigsMzH = await BACMARSLPTOKENPoolG7S4DQe.symbol.call({from: accounts[2]});
		const uint256Ef6Fp6P = await BACMARSLPTOKENPoolG7S4DQe.notifyRewardAmount.call(uintlD2abOa, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiv1nh67 = "5TfmjhArbMeAiiEFbweIFdzkvtaEpRJReEl4JYq8YtHKRgpm1Pzq5Dm64HlQedBc8B7rOVWvTLQYOGyJu2fScoO"
		const stringReXaIZW = "2UpZnhcvRMrG4g6LuwLwAsDfcthRYDXw6feUQ8Q94vuuT8hkjBHheCoIbKJX1DTTXKPZrP6"
		const uintexbD77M = BigInt("123")
		const BACMARSLPTOKENPooljaAhCjT = await BACMARSLPTOKENPool.new(stringiv1nh67, stringReXaIZW, uintexbD77M, {from: accounts[0]});
		const uint256bgpVicx = await BACMARSLPTOKENPooljaAhCjT.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPooljaAhCjT.nonReentrant.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringn6wNt8z = "FI6KOe45fIv3XoPJSJ"
		const stringKqmw8ZL = "4HfVWwk0rtzlbaGWPQyJQ3kPrRIlXOGGdpLn9hLuxQ47XihWB0DAuusQKUsgDlNkJuG6HX3aSflyrVgAAd7Q06F"
		const uintYQ8wVUf = BigInt("178")
		const BACMARSLPTOKENPoolwDysUZ = await BACMARSLPTOKENPool.new(stringn6wNt8z, stringKqmw8ZL, uintYQ8wVUf, {from: accounts[1]});
		const uintgfBoqu = BigInt("1986")
		await BACMARSLPTOKENPoolwDysUZ.getReward.call({from: accounts[5]});
		const uint256M9clbp4 = await BACMARSLPTOKENPoolwDysUZ.notifyRewardAmount.call(uintgfBoqu, {from: accounts[3]});
		const uint256lkg4mj = await BACMARSLPTOKENPoolwDysUZ.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringzIL1Cl = "yExhwyOpDucQtdlc"
		const string21Aqd9 = "sGvIozWTtEpy1BgD0fqlMhc1Z3TLeVycKdVBHfw"
		const uintUftzvw1 = BigInt("62")
		const BACMARSLPTOKENPoolV4efIyL = await BACMARSLPTOKENPool.new(stringzIL1Cl, string21Aqd9, uintUftzvw1, {from: "0x0000000000000000000000000000000000000001"});
		const addressWV7Tz7S = accounts[4]
		const uint256Ei3EfrA = await BACMARSLPTOKENPoolV4efIyL.balanceOf.call(addressWV7Tz7S, {from: accounts[5]});
		const uint256PSmPrUt = await BACMARSLPTOKENPoolV4efIyL.rewardPerToken.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtqqFw6Y = "WEQPwjx5ScypZC5hesrXOUcvbnvJRfRKHLpDGKHKh2R5R8qDSeDpwmy9asPmFvyWXJLHct1iQJnQt"
		const stringGwoJSud = "DKIhlcNYThTo5MfcC4yL8Scae8w1YEU2VCdp5NtsKWN3XVJVjCevdeR3orWKUKcuePuUw2BfWf7sM8BVU2lJvx9"
		const uintUXOSrrG = BigInt("254")
		const BACMARSLPTOKENPoolb7P2V16 = await BACMARSLPTOKENPool.new(stringtqqFw6Y, stringGwoJSud, uintUXOSrrG, {from: accounts[1]});
		const uintHGG2tlc = BigInt("1594")
		const addressHM4kbAV = accounts[4]
		const uint256rJD55r = await BACMARSLPTOKENPoolb7P2V16.stake.call(uintHGG2tlc, {from: accounts[3]});
		const uint256Tn1OYLO = await BACMARSLPTOKENPoolb7P2V16.lastTimeRewardApplicable.call({from: accounts[2]});
		await BACMARSLPTOKENPoolb7P2V16.nonReentrant.call({from: accounts[4]});
		const addressXXe6pJd = await BACMARSLPTOKENPoolb7P2V16.updateReward.call(addressHM4kbAV, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfrnAiDm = "Q6U9uu7gOjA1CxDK3gLQR2riVzGAOwfEtewoKuS398mZ623VhtzB"
		const stringvRDmxsg = "9RhdiHS5"
		const uintXzeZQsG = BigInt("8")
		const BACMARSLPTOKENPoolbw2mJ9Y = await BACMARSLPTOKENPool.new(stringfrnAiDm, stringvRDmxsg, uintXzeZQsG, {from: "0x0000000000000000000000000000000000000001"});
		const uinta4xFd20 = BigInt("74")
		const uintHBQf7m2 = BigInt("1153")
		const addressR52SdNl = accounts[3]
		const uint8lyNSnlo = await BACMARSLPTOKENPoolbw2mJ9Y.decimals.call({from: accounts[2]});
		const uint256pBGg8gU = await BACMARSLPTOKENPoolbw2mJ9Y.stake.call(uinta4xFd20, {from: accounts[4]});
		const uint8TFSirp7 = await BACMARSLPTOKENPoolbw2mJ9Y.decimals.call({from: accounts[2]});
		const uint256hDZ7En = await BACMARSLPTOKENPoolbw2mJ9Y.notifyRewardAmount.call(uintHBQf7m2, {from: accounts[5]});
		const uint256vnGyErt = await BACMARSLPTOKENPoolbw2mJ9Y.balanceOf.call(addressR52SdNl, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLJEDWi = "zlgJKYmtyqjTIDUZKKKCA6EvVXV0kciBV6RVl5I2FrCJU3bFU1Ah52sj73Emj8"
		const stringMEIcguF = "beQhR2ArcX8WUGswJ5SNhW8j1xPqHRCCPiV98HKxK1"
		const uintTzoWQz9 = BigInt("22")
		const BACMARSLPTOKENPoolpJmzzZq = await BACMARSLPTOKENPool.new(stringLJEDWi, stringMEIcguF, uintTzoWQz9, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolpJmzzZq.onlyRewardsDistribution.call({from: accounts[2]});
		await BACMARSLPTOKENPoolpJmzzZq.onlyRewardsDistribution.call({from: accounts[1]});
		await BACMARSLPTOKENPoolpJmzzZq.exit.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiFQboNc = "IMm1wZM4w13LaZ2xWsAAV3AeGBuMIA8GgE2v2cU3VuSub8PptZM098jjavTDPzcln3unziwqzdxW0jw9XNIOY"
		const stringtR3tmZd = "MCcrdSCvBqk64Cp4FGRFkdWLDTZ8MHyWwlxcqFsUFZ3jwKWx"
		const uintRPmJD16 = BigInt("173")
		const BACMARSLPTOKENPoolNtpVslt = await BACMARSLPTOKENPool.new(stringiFQboNc, stringtR3tmZd, uintRPmJD16, {from: accounts[1]});
		await BACMARSLPTOKENPoolNtpVslt.exit.call({from: accounts[0]});
		const uint256DRYRk3 = await BACMARSLPTOKENPoolNtpVslt.totalSupply.call({from: accounts[2]});
		const uint8CT17JUG = await BACMARSLPTOKENPoolNtpVslt.decimals.call({from: accounts[1]});
		const uint8zs7fKE2 = await BACMARSLPTOKENPoolNtpVslt.decimals.call({from: accounts[3]});
		const stringXEXSMVU = await BACMARSLPTOKENPoolNtpVslt.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtL9z1mY = "xTbf9OOkPdCR48V4YwurvQXCNR9kuIOCKo6WXCh"
		const stringlO2iBkP = "aA6EFHFWMQxqsXU9EDFWRQvRd1wD4UNJVlyczYIz2rGeOWLaeeV6B5NobwMGKa8YOlSbwMGV9J"
		const uintKz566pT = BigInt("30")
		const BACMARSLPTOKENPoolvJk8liI = await BACMARSLPTOKENPool.new(stringtL9z1mY, stringlO2iBkP, uintKz566pT, {from: accounts[0]});
		const addressXfb4xzz = accounts[2]
		const addressTIV7eWf = accounts[1]
		const uint8Q5eA7pB = await BACMARSLPTOKENPoolvJk8liI.decimals.call({from: accounts[5]});
		const uint256nZRhasu = await BACMARSLPTOKENPoolvJk8liI.balanceOf.call(addressXfb4xzz, {from: accounts[4]});
		const uint256zL5klT = await BACMARSLPTOKENPoolvJk8liI.earned.call(addressTIV7eWf, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVD4glaZ = "J8JLizv5HeNkIlo3UbWW1pR4awi"
		const stringmwzwGpw = "o6Ssdi13CP"
		const uintDANd8XX = BigInt("201")
		const BACMARSLPTOKENPoolxoVj3G2 = await BACMARSLPTOKENPool.new(stringVD4glaZ, stringmwzwGpw, uintDANd8XX, {from: accounts[0]});
		const uint256iK7pAjc = await BACMARSLPTOKENPoolxoVj3G2.getRewardForDuration.call({from: accounts[1]});
		const uint256l4pPey = await BACMARSLPTOKENPoolxoVj3G2.rewardPerToken.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYOe0Gl6 = "WepqkInXrefVv4EnjNlRtaJqHW8YFt9bS6R7i5fbKd8iPdQrmvd1DopawtJ5KHCZJ7fWrNa2NJr8JJeHj2"
		const stringiXp4mbo = "iBEuWyUh0UCme8"
		const uintynMKxPn = BigInt("238")
		const BACMARSLPTOKENPoolqwxnsGd = await BACMARSLPTOKENPool.new(stringYOe0Gl6, stringiXp4mbo, uintynMKxPn, {from: accounts[1]});
		await BACMARSLPTOKENPoolqwxnsGd.getReward.call({from: accounts[4]});
		await BACMARSLPTOKENPoolqwxnsGd.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringv1ExH7F = "RbXAjRHYz1d1c6BcIwWPjruZdoUBcOSEfl"
		const stringFaqILZC = "f9F22y"
		const uinty0xRU4L = BigInt("150")
		const BACMARSLPTOKENPooljEhmCUZ = await BACMARSLPTOKENPool.new(stringv1ExH7F, stringFaqILZC, uinty0xRU4L, {from: accounts[1]});
		const bytekPaBTL0 = "0x0f08080b0d021a11031318061a160c190d080513031514191f07072009081b06"
		const bytempyIsC8 = "0x1b1b1c0a1a0c18091801010c06010b031a18160a070508000604100b140c0803"
		const uintrY2bfrP = BigInt("240")
		const uintD9fqPy = BigInt("182")
		const uintQMP5iwu = BigInt("348")
		await BACMARSLPTOKENPooljEhmCUZ.getReward.call({from: accounts[2]});
		const uint256RfY15Wl = await BACMARSLPTOKENPooljEhmCUZ.stakeWithPermit.call(uintQMP5iwu, uintD9fqPy, uintrY2bfrP, bytempyIsC8, bytekPaBTL0, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyG88lVZ = "WEgcXXrNDbKjx4zTz55TFIp8"
		const stringlU7NGxu = "YjVEVqs6IaX3YBOdW6SNX0FeutS"
		const uintpktZGyi = BigInt("174")
		const BACMARSLPTOKENPoolp6wY2ON = await BACMARSLPTOKENPool.new(stringyG88lVZ, stringlU7NGxu, uintpktZGyi, {from: accounts[0]});
		const uintPBWhctk = BigInt("1545")
		const addressMTUhPFe = accounts[3]
		const uint256VITwlEV = await BACMARSLPTOKENPoolp6wY2ON.stake.call(uintPBWhctk, {from: accounts[1]});
		await BACMARSLPTOKENPoolp6wY2ON.getReward.call({from: accounts[1]});
		const uint256wuRI25m = await BACMARSLPTOKENPoolp6wY2ON.balanceOf.call(addressMTUhPFe, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSM1228K = "X6STzwvf6pbJBLsC3iL2bQgrJzFD2N"
		const stringFeqjMXI = "NIhNyXGOQcPlSESVDpHVt0r6z6C8lMnbABjPk6t0WQDHA4gug"
		const uintWDReor = BigInt("200")
		const BACMARSLPTOKENPoolJLWO9fR = await BACMARSLPTOKENPool.new(stringSM1228K, stringFeqjMXI, uintWDReor, {from: accounts[0]});
		const uintBGZCBmD = BigInt("913")
		const addressXcersSx = accounts[3]
		await BACMARSLPTOKENPoolJLWO9fR.onlyRewardsDistribution.call({from: accounts[3]});
		await BACMARSLPTOKENPoolJLWO9fR.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolJLWO9fR.nonReentrant.call({from: accounts[2]});
		const uint256UxsjlaS = await BACMARSLPTOKENPoolJLWO9fR.withdraw.call(uintBGZCBmD, {from: accounts[5]});
		const uint256wi7JUPY = await BACMARSLPTOKENPoolJLWO9fR.balanceOf.call(addressXcersSx, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFKjmyOs = "jIkJ6dwHTyqWZFRUYUBEm9Smx2J2Mo4Yh"
		const stringZRe8to = "DITmhcUCnqVKiGdHHgO1cOOGXu2n6k0lvZyGa2h1b9Q81RBTutWrF5UFZtMC"
		const uintrD7pfN3 = BigInt("47")
		const BACMARSLPTOKENPoolcQnVILT = await BACMARSLPTOKENPool.new(stringFKjmyOs, stringZRe8to, uintrD7pfN3, {from: accounts[5]});
		const addressGXGXLsW = accounts[4]
		const addressZVB2fd4 = accounts[4]
		await BACMARSLPTOKENPoolcQnVILT.exit.call({from: accounts[3]});
		const uint2560ETOV8 = await BACMARSLPTOKENPoolcQnVILT.getRewardForDuration.call({from: accounts[3]});
		const uint256EferU4d = await BACMARSLPTOKENPoolcQnVILT.balanceOf.call(addressGXGXLsW, {from: accounts[3]});
		const stringxxPX4tQ = await BACMARSLPTOKENPoolcQnVILT.symbol.call({from: accounts[0]});
		const uint256Sew48OB = await BACMARSLPTOKENPoolcQnVILT.balanceOf.call(addressZVB2fd4, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringm3EfbTV = "KqXCbIcEqhhPeOsDXml1TfhOBfNhUV9h6"
		const stringZegNaqx = "3rcLjM3lokRPyoAxitb09toL8pzXEPh4GpoFrVgBCvTMsESdAbXmKEww03qZ3G0uvtcTO"
		const uintQHGYiF2 = BigInt("72")
		const BACMARSLPTOKENPoolijMMx3 = await BACMARSLPTOKENPool.new(stringm3EfbTV, stringZegNaqx, uintQHGYiF2, {from: accounts[4]});
		const uintLuAcn8P = BigInt("1749")
		const uintSZyBmdd = BigInt("215")
		const uint256BQwVc4q = await BACMARSLPTOKENPoolijMMx3.stake.call(uintLuAcn8P, {from: accounts[1]});
		const uint256Ub6V60s = await BACMARSLPTOKENPoolijMMx3.withdraw.call(uintSZyBmdd, {from: accounts[4]});
		const stringIabNJIi = await BACMARSLPTOKENPoolijMMx3.symbol.call({from: accounts[2]});
		await BACMARSLPTOKENPoolijMMx3.getReward.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCAQ12M0 = "GabrjK"
		const stringRdg0QG = "XPVWPPjAiJlpBrEUaWVtq1wMcg5YemIgDMbvuhiFMAowqUcRoNj9Ay1XLMdtR"
		const uintc4PC8o = BigInt("254")
		const BACMARSLPTOKENPoolrIduMqJ = await BACMARSLPTOKENPool.new(stringCAQ12M0, stringRdg0QG, uintc4PC8o, {from: "0x0000000000000000000000000000000000000001"});
		const addressmhzSnox = accounts[1]
		const uint256oo9yvsl = await BACMARSLPTOKENPoolrIduMqJ.balanceOf.call(addressmhzSnox, {from: accounts[2]});
		const uint256nAQQSRT = await BACMARSLPTOKENPoolrIduMqJ.getRewardForDuration.call({from: accounts[3]});
		await BACMARSLPTOKENPoolrIduMqJ.nonReentrant.call({from: accounts[3]});
		const stringQgz0V0a = await BACMARSLPTOKENPoolrIduMqJ.name.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringAkivNUm = "itpkXaPlYkifk8rwGnh2TMVhseJLy6N8qPYGHXg0gdQjaP7h"
		const stringWSPtq0G = "VXRNJnaf4Rbrr9byVSzjcaWGf10eJw9zILRLmHUHgwQkfrBITghxmMd6nLAoR4xYilzUVLIuQKKrWjDsX4dw6mTjJs"
		const uintGXjQHVH = BigInt("236")
		const BACMARSLPTOKENPooltzTgEYt = await BACMARSLPTOKENPool.new(stringAkivNUm, stringWSPtq0G, uintGXjQHVH, {from: accounts[3]});
		const stringHBPa5W = await BACMARSLPTOKENPooltzTgEYt.symbol.call({from: accounts[1]});
		await BACMARSLPTOKENPooltzTgEYt.onlyRewardsDistribution.call({from: accounts[3]});
		await BACMARSLPTOKENPooltzTgEYt.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256UUIYa4q = await BACMARSLPTOKENPooltzTgEYt.totalSupply.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhofvfvX = "vQ"
		const stringC25IY8k = "Ix2merJE"
		const uintxCRAUew = BigInt("88")
		const BACMARSLPTOKENPoolMjAcIO = await BACMARSLPTOKENPool.new(stringhofvfvX, stringC25IY8k, uintxCRAUew, {from: accounts[4]});
		const uintSDhCdUz = BigInt("1007")
		const uintJsjFIwU = BigInt("1849")
		const uintGLw3TVm = BigInt("787")
		const addressvyWADs5 = accounts[4]
		const uint256ffOSIv3 = await BACMARSLPTOKENPoolMjAcIO.withdraw.call(uintSDhCdUz, {from: accounts[4]});
		const uint256pUZseHR = await BACMARSLPTOKENPoolMjAcIO.stake.call(uintJsjFIwU, {from: accounts[1]});
		const uint256oFwdcL = await BACMARSLPTOKENPoolMjAcIO.stake.call(uintGLw3TVm, {from: accounts[4]});
		const uint256qa4IEHN = await BACMARSLPTOKENPoolMjAcIO.balanceOf.call(addressvyWADs5, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqdoYXQ = "DhmYzVOvAEM2Ke3vtPHyj92m6L6Xjp7ab0fyJXBkL4IsdP77FyZK3zymHILURUGYnixRt3rDYKqyCnyyGIas0Dz6YpqfCz7aT"
		const stringXbCWISa = "ERJkKMHRkSNtkHUOqhtKV77FqXF0tJlRNRhK6qaWq9odJo8qO"
		const uintkPGzDjt = BigInt("154")
		const BACMARSLPTOKENPooluRzA9zf = await BACMARSLPTOKENPool.new(stringqdoYXQ, stringXbCWISa, uintkPGzDjt, {from: accounts[2]});
		const uintV0lGsH = BigInt("115")
		const uint256dvSC0E = await BACMARSLPTOKENPooluRzA9zf.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const stringlNhzIMH = await BACMARSLPTOKENPooluRzA9zf.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPooluRzA9zf.nonReentrant.call({from: accounts[0]});
		const uint8gkVomWa = await BACMARSLPTOKENPooluRzA9zf.decimals.call({from: accounts[2]});
		const uint256wAX0xib = await BACMARSLPTOKENPooluRzA9zf.withdraw.call(uintV0lGsH, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressGqDYJr0 = accounts[3]
		const addressQ2lVdWv = accounts[0]
		const addressHb9xiZ = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolbKOK25p = await BACMARSLPTOKENPool.new(addressGqDYJr0, addressQ2lVdWv, addressHb9xiZ, {from: accounts[1]});
		const uintSY2mVB3 = BigInt("0")
		const uintF3lSUjA = BigInt("460")
//		const uint256eY1e7WK = await BACMARSLPTOKENPoolbKOK25p.stake.call(uintSY2mVB3, {from: accounts[2]});
//		const uint256s3OtCfL = await BACMARSLPTOKENPoolbKOK25p.withdraw.call(uintF3lSUjA, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolbKOK25p.stake.call(uintSY2mVB3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPTHueqU = "GuYXL8HQPF9R74chcH6NRXlqVOLzB6sBBsS5H8kCUDAroEyPquTdtpKYiajFvS2uSV36ejUEeIMD5TYqkwSEN9uyt7U"
		const stringkjrSqAU = "eHl5ntllPqIEhvf2fvez4iRHK5ATpEvqzYhTVIyMha"
		const uintFp0MGxO = BigInt("93")
		const BACMARSLPTOKENPoolOXsuNsG = await BACMARSLPTOKENPool.new(stringPTHueqU, stringkjrSqAU, uintFp0MGxO, {from: accounts[0]});
		const uintCni9qbh = BigInt("110")
		await BACMARSLPTOKENPoolOXsuNsG.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256YvGPHmD = await BACMARSLPTOKENPoolOXsuNsG.stake.call(uintCni9qbh, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuGSTbeV = "lT"
		const stringoJc9ASt = "rANW6svoVr"
		const uintBffCJCX = BigInt("246")
		const BACMARSLPTOKENPoolcEdLihM = await BACMARSLPTOKENPool.new(stringuGSTbeV, stringoJc9ASt, uintBffCJCX, {from: accounts[2]});
		const uintRIHTzI = BigInt("1120")
		const addressPswPumA = accounts[3]
		const uintupo226V = BigInt("1870")
		const uint256AxfOAOZ = await BACMARSLPTOKENPoolcEdLihM.stake.call(uintRIHTzI, {from: accounts[1]});
		const uint256D4sRuPf = await BACMARSLPTOKENPoolcEdLihM.balanceOf.call(addressPswPumA, {from: accounts[0]});
		const uint256zX2n7X = await BACMARSLPTOKENPoolcEdLihM.withdraw.call(uintupo226V, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEdZ7E0H = "UzQoDk0iNmQokJvapA1Vl1z1hRK99BsebWuYaKfTX32RJKpVASHTQfiFVh87W"
		const stringZP4NKKV = "yNlNxSL5Mbmg15X6S5vssBsr0DZWwznwPvCFYxh4kPHDpnbT9Gfte"
		const uintmQEn2jD = BigInt("139")
		const BACMARSLPTOKENPoolA7Km6EB = await BACMARSLPTOKENPool.new(stringEdZ7E0H, stringZP4NKKV, uintmQEn2jD, {from: accounts[0]});
		const byte1Wr2EY = "0x0a03040b130e04151c0b16111d0c191505181a0f080c19121c13171b0e1a0e02"
		const byteDf0JwFa = "0x021b150102021c0f0b0e17130e060e11170e0d1b16170902030f1b061b0c010d"
		const uintasJMDm9 = BigInt("238")
		const uintNMnUpgW = BigInt("1511")
		const uintAH3v3b0 = BigInt("979")
		const uint256mkUagH9 = await BACMARSLPTOKENPoolA7Km6EB.stakeWithPermit.call(uintAH3v3b0, uintNMnUpgW, uintasJMDm9, byteDf0JwFa, byte1Wr2EY, {from: accounts[3]});
		const uint256hxd6nJs = await BACMARSLPTOKENPoolA7Km6EB.rewardPerToken.call({from: accounts[0]});
		const uint256vxJrDBb = await BACMARSLPTOKENPoolA7Km6EB.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256Tfso8Al = await BACMARSLPTOKENPoolA7Km6EB.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXjYRTo2 = "BsUowkwp2i2s9CiUK"
		const stringhYQFmT = "6yzCxcPr5UyyYNMUPbAdz2ESeRyRLYqwcqoKyFap24EMxekigeYgkHPsJfOaKKNJ"
		const uintfu4ovQH = BigInt("76")
		const BACMARSLPTOKENPoolGqYtxpX = await BACMARSLPTOKENPool.new(stringXjYRTo2, stringhYQFmT, uintfu4ovQH, {from: accounts[3]});
		const uintWPJZtxd = BigInt("1843")
		const uintl8nHAR = BigInt("2030")
		const byteRnln42K = "0x170b0f09040c1c130d08010b14200f0603121e0a161b0a18031f0f2008061716"
		const bytebcsXjvA = "0x1616071005101f0e1d1b0f1f02130a13090e081104170803090703100c061414"
		const uint1gGTJu = BigInt("58")
		const uintDv3W1rK = BigInt("792")
		const uint1BHyZG = BigInt("1784")
		const uint256GkvR44Y = await BACMARSLPTOKENPoolGqYtxpX.notifyRewardAmount.call(uintWPJZtxd, {from: accounts[0]});
		const uint256yuLdhhy = await BACMARSLPTOKENPoolGqYtxpX.withdraw.call(uintl8nHAR, {from: accounts[1]});
		const uint256WdJoKJk = await BACMARSLPTOKENPoolGqYtxpX.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256ptRHZPS = await BACMARSLPTOKENPoolGqYtxpX.stakeWithPermit.call(uint1BHyZG, uintDv3W1rK, uint1gGTJu, bytebcsXjvA, byteRnln42K, {from: accounts[1]});
		await BACMARSLPTOKENPoolGqYtxpX.exit.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringozkgUPU = "47QgW"
		const stringkKAENaW = "QGRRtS1RkhLJ3O2Xbsnr5OUg571QtSN8TtqFbx1PA5uEzYYW1qG2E2evfn4"
		const uintQu0ToBB = BigInt("77")
		const BACMARSLPTOKENPoolqORaVY = await BACMARSLPTOKENPool.new(stringozkgUPU, stringkKAENaW, uintQu0ToBB, {from: accounts[1]});
		const uintmP7UHPx = BigInt("598")
		const bytejrQx75H = "0x120515030a0e0e11050812060c0b1a0803161820180e1c19101b020a1f030207"
		const byteDY3pCsL = "0x1d1904160f190a15101d0e1e1f120c03181d00070712090b060311110101030c"
		const uintxbSOhmI = BigInt("72")
		const uintMA0WnfF = BigInt("1337")
		const uintxJFWNfE = BigInt("1881")
		const uint256nK3lGHB = await BACMARSLPTOKENPoolqORaVY.stake.call(uintmP7UHPx, {from: accounts[0]});
		const uint256bHa7PRF = await BACMARSLPTOKENPoolqORaVY.totalSupply.call({from: accounts[4]});
		const uint256q4j5il = await BACMARSLPTOKENPoolqORaVY.stakeWithPermit.call(uintxJFWNfE, uintMA0WnfF, uintxbSOhmI, byteDY3pCsL, bytejrQx75H, {from: accounts[3]});
		const stringbK20zsw = await BACMARSLPTOKENPoolqORaVY.symbol.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringh7hV2Lr = "IQmggfLU"
		const stringZxTdxac = "QfIr4FFsjJIYaemlkX1tcdI2hGlrQlg67A64hdkPXuB4pFktomp0PEOmoV2KBUTCuPN9lAfsOMri6Tn7r2WK984Qwvev7"
		const uint6wwuiZ = BigInt("113")
		const BACMARSLPTOKENPoolkrUPMWb = await BACMARSLPTOKENPool.new(stringh7hV2Lr, stringZxTdxac, uint6wwuiZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintf8plZJ = BigInt("1499")
		const bytefziD3Zo = "0x021b03031d02110b190702100818141d0b20151e0a2007121e0d1f181e05030a"
		const bytek7pRDbh = "0x1b021103030b060b040a100e12160a0a1c07171b050911191a11021219160b13"
		const uintQY47V8P = BigInt("39")
		const uintAHxwSKN = BigInt("1385")
		const uintDrTRn6G = BigInt("887")
		const uint4tv5tE = BigInt("1336")
		const uint256WOtb5SP = await BACMARSLPTOKENPoolkrUPMWb.withdraw.call(uintf8plZJ, {from: accounts[0]});
		const uint256hdTUJno = await BACMARSLPTOKENPoolkrUPMWb.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256J1IHPw4 = await BACMARSLPTOKENPoolkrUPMWb.stakeWithPermit.call(uintDrTRn6G, uintAHxwSKN, uintQY47V8P, bytek7pRDbh, bytefziD3Zo, {from: accounts[1]});
		const uint256MkBSTGq = await BACMARSLPTOKENPoolkrUPMWb.notifyRewardAmount.call(uint4tv5tE, {from: "0x0000000000000000000000000000000000000001"});
	});
})