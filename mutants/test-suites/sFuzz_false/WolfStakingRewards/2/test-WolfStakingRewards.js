const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringlhOZOL = "vCJzW11kfPumFIPFxofErLx"
		const stringN957KvM = "PMD34mRpqh9SjoO0ADFQvCh2EvfgLz524oO4odTg1S1ShS3esl2gCRyAyigbRetIPb2B15b3PJaTJmowu2Lw"
		const uintKHqNKVe = BigInt("239")
		const WolfStakingRewardssofUHH = await WolfStakingRewards.new(stringlhOZOL, stringN957KvM, uintKHqNKVe, {from: accounts[4]});
		const uintIICM0Wr = BigInt("742")
		const stringxwFdyU5 = await WolfStakingRewardssofUHH.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardssofUHH.nonReentrant.call({from: accounts[5]});
		const uint256vElATXN = await WolfStakingRewardssofUHH.lastTimeRewardApplicable.call(uintIICM0Wr, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressxdhLNjn = accounts[4]
		const addressrAin1XY = "0x0000000000000000000000000000000000000001"
		const addressBPHzwNb = accounts[1]
		const WolfStakingRewardsK0mx71H = await WolfStakingRewards.new(addressxdhLNjn, addressrAin1XY, addressBPHzwNb, {from: accounts[4]});
		const uintYKUP5z = BigInt("1592")
		const addressevY4D4K = accounts[3]
		const uintTMHCqU4 = BigInt("4")
		const uintTSggFZs = BigInt("661")
		const uintOmXfhy = BigInt("1327")
		const uint256JzLR53i = await WolfStakingRewardsK0mx71H.balanceOfPerPool.call(addressevY4D4K, uintYKUP5z, {from: accounts[3]});
//		const stringhMvmtqY = await WolfStakingRewardsK0mx71H.name.call({from: accounts[5]});
//		const uint256BCKXQXx = await WolfStakingRewardsK0mx71H.getRewardForDuration.call(uintTMHCqU4, {from: accounts[0]});
//		const uint256q0HpZ1e = await WolfStakingRewardsK0mx71H.totalSupplyPerPool.call(uintTSggFZs, {from: accounts[2]});
//		const uint256Xk1kLFq = await WolfStakingRewardsK0mx71H.rewardPerToken.call(uintOmXfhy, {from: accounts[4]});

		assert.equal(uint256JzLR53i, BigInt("0"))
		await expect(WolfStakingRewardsK0mx71H.name.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressW0PQM75 = accounts[3]
		const addresskvcJolI = accounts[3]
		const address8nBeXx = accounts[2]
		const WolfStakingRewardsAGdkqR6 = await WolfStakingRewards.new(addressW0PQM75, addresskvcJolI, address8nBeXx, {from: "0x0000000000000000000000000000000000000001"});
		const uintCWZOUx = BigInt("1127")
		const uintlCrX01Y = BigInt("1336")
		const uintVsgOgM = BigInt("132")
		const uintAuS2OV = BigInt("1080")
		const uintKotI2Ea = BigInt("485")
		const uint256Pi7rFk5 = await WolfStakingRewardsAGdkqR6.exit.call(uintCWZOUx, {from: accounts[3]});
		await WolfStakingRewardsAGdkqR6.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256i6i0B2X = await WolfStakingRewardsAGdkqR6.stake.call(uintVsgOgM, uintlCrX01Y, {from: accounts[0]});
		await WolfStakingRewardsAGdkqR6.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsAGdkqR6.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256g5f7Rcs = await WolfStakingRewardsAGdkqR6.withdraw.call(uintKotI2Ea, uintAuS2OV, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringG5cyl8I = "EzExaaX9LPUgYVfYfEfH4FRAuEwkF8jui5ypK8iI8nbnoS5yJj6bBSP7WSAzentsLc6sh4i"
		const stringgjVj8eo = "CJ9FftXsmxq5q4ofhNH76gauI1jBCkKFP6PYhztTi1bPsy1Co5d3Dt7osLpV2LcVACZzrbkTARCM4YA1p5tr7AhMhMlmCs"
		const uinteIaPj0W = BigInt("41")
		const WolfStakingRewardsdTXb7WR = await WolfStakingRewards.new(stringG5cyl8I, stringgjVj8eo, uinteIaPj0W, {from: accounts[3]});
		const uintEXpWNGP = BigInt("1797")
		const uintwMNZjpB = BigInt("1034")
		const uint256VAWITks = await WolfStakingRewardsdTXb7WR.totalSupplyPerPool.call(uintEXpWNGP, {from: accounts[1]});
		const uint256FN3GOHY = await WolfStakingRewardsdTXb7WR.exit.call(uintwMNZjpB, {from: accounts[4]});
		const stringAcUdBtp = await WolfStakingRewardsdTXb7WR.name.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringh9mvy4e = "JlmO7pGXw0DIXU9JB1ycB9gAPDgUjfIXHCLP1Ov5tNIJKa7zaHvRqLURB9jXpWLjBiFrlb8EIniFFAXejEpv"
		const stringbCfyZG6 = "pq4vVTXZ2dYkCkbIvAfrCNf4DuoYtntA"
		const uintSktbDUK = BigInt("229")
		const WolfStakingRewardsduSjltg = await WolfStakingRewards.new(stringh9mvy4e, stringbCfyZG6, uintSktbDUK, {from: "0x0000000000000000000000000000000000000001"});
		const uintwXRv8Z = BigInt("444")
		const addressAyvL1c4 = accounts[3]
		const uintPnVSXBn = BigInt("1465")
		const uintZvnLAAj = BigInt("725")
		const addressDqeb53O = accounts[0]
		const uintBOMhsk2 = BigInt("1978")
		const uint256YaUOQB7 = await WolfStakingRewardsduSjltg.balanceOfPerPool.call(addressAyvL1c4, uintwXRv8Z, {from: accounts[3]});
		const uint256dCWrSQh = await WolfStakingRewardsduSjltg.exit.call(uintPnVSXBn, {from: accounts[3]});
		const uint256iQqH6Ws = await WolfStakingRewardsduSjltg.balanceOfPerPool.call(addressDqeb53O, uintZvnLAAj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256f9f0r4P = await WolfStakingRewardsduSjltg.rewardPerToken.call(uintBOMhsk2, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvYVhV40 = "uNJOFwf3kU9gJ8WqhuS"
		const stringzXIYt4h = "7XemXCA7Wcud3iKiwSzPhsH3JJlFnh6IDoiAKbvNooBLXtlOYhCICkUJbOFH4q89jXm7Ux4kK2QvQiyC26339npD13QUlE8v"
		const uintIUDLo1 = BigInt("212")
		const WolfStakingRewardsX9OqQsR = await WolfStakingRewards.new(stringvYVhV40, stringzXIYt4h, uintIUDLo1, {from: accounts[3]});
		const uintb4Tyspc = BigInt("1879")
		const uintcfmYJVc = BigInt("1549")
		const uintnOCWu8V = BigInt("1265")
		const uintpHhhVbF = BigInt("1181")
		const uint0k6dpC = BigInt("1896")
		const uint256bkuz4gn = await WolfStakingRewardsX9OqQsR.withdraw.call(uintcfmYJVc, uintb4Tyspc, {from: accounts[3]});
		const uint256icnKj1u = await WolfStakingRewardsX9OqQsR.stake.call(uintpHhhVbF, uintnOCWu8V, {from: accounts[0]});
		const uintGtsOVFi = await WolfStakingRewardsX9OqQsR.getReward.call(uint0k6dpC, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressjI3yhP = accounts[2]
		const addressjUHD8xE = accounts[3]
		const addressKd3mKTb = accounts[3]
		const WolfStakingRewardsNJJ5h2z = await WolfStakingRewards.new(addressjI3yhP, addressjUHD8xE, addressKd3mKTb, {from: accounts[2]});
		const uintWX6DW6I = BigInt("1423")
		const uintrKoJS5D = BigInt("214")
		const uintqZbpwLT = BigInt("935")
		const addressxHVVR0x = accounts[3]
		const uintqOekQ8 = BigInt("881")
		const uinty1ulgG8 = BigInt("889")
		const addressYl8iJl = accounts[1]
		const uint256iaEHVmp = await WolfStakingRewardsNJJ5h2z.lastTimeRewardApplicable.call(uintWX6DW6I, {from: accounts[3]});
		const uint256xDu0eHc = await WolfStakingRewardsNJJ5h2z.rewardPerToken.call(uintrKoJS5D, {from: accounts[4]});
		const uint256VmuYKYA = await WolfStakingRewardsNJJ5h2z.balanceOfPerPool.call(addressxHVVR0x, uintqZbpwLT, {from: accounts[3]});
		const uint256IIEOpnT = await WolfStakingRewardsNJJ5h2z.lastTimeRewardApplicable.call(uintqOekQ8, {from: "0x0000000000000000000000000000000000000001"});
//		const addressXoTvDgz = await WolfStakingRewardsNJJ5h2z.updateReward.call(addressYl8iJl, uinty1ulgG8, {from: accounts[4]});

		assert.equal(uint256IIEOpnT, BigInt("0"))
		assert.equal(uint256VmuYKYA, BigInt("0"))
		assert.equal(uint256iaEHVmp, BigInt("0"))
		assert.equal(uint256xDu0eHc, BigInt("0"))
		await expect(WolfStakingRewardsNJJ5h2z.updateReward.call(addressYl8iJl, uinty1ulgG8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressujGijGS = accounts[3]
		const addressux0Aksz = accounts[3]
		const addressx5tk4IU = accounts[2]
		const WolfStakingRewardsCsqftmu = await WolfStakingRewards.new(addressujGijGS, addressux0Aksz, addressx5tk4IU, {from: accounts[1]});
		const uintJnWI3V1 = BigInt("269")
//		const uint256byLH22N = await WolfStakingRewardsCsqftmu.exit.call(uintJnWI3V1, {from: accounts[0]});

		await expect(WolfStakingRewardsCsqftmu.exit.call(uintJnWI3V1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressCVrwFTZ = accounts[2]
		const addresspCON4E = accounts[3]
		const addresskO0yABo = accounts[3]
		const WolfStakingRewardsNJJ5h2z = await WolfStakingRewards.new(addressCVrwFTZ, addresspCON4E, addresskO0yABo, {from: accounts[2]});
		const uintX0qrzQ = BigInt("1435")
		const uintY7eaLU = BigInt("214")
		const uintcAQGYCT = BigInt("935")
		const addressF0hL4kx = accounts[3]
		const uintO2HjQyX = BigInt("1212")
		const uinthoxnUAG = BigInt("1842")
		const uintK71Qmh = BigInt("881")
		const uintHRHWRPw = BigInt("919")
		const uintmuYHmAn = BigInt("889")
		const addressb51OMia = accounts[1]
		const uint256iaEHVmp = await WolfStakingRewardsNJJ5h2z.lastTimeRewardApplicable.call(uintX0qrzQ, {from: accounts[3]});
		const uint256xDu0eHc = await WolfStakingRewardsNJJ5h2z.rewardPerToken.call(uintY7eaLU, {from: accounts[4]});
		const uint256VmuYKYA = await WolfStakingRewardsNJJ5h2z.balanceOfPerPool.call(addressF0hL4kx, uintcAQGYCT, {from: accounts[3]});
//		const uint256HyPg6rH = await WolfStakingRewardsNJJ5h2z.stake.call(uinthoxnUAG, uintO2HjQyX, {from: accounts[0]});
//		const uint256IIEOpnT = await WolfStakingRewardsNJJ5h2z.lastTimeRewardApplicable.call(uintK71Qmh, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256j0DhdHR = await WolfStakingRewardsNJJ5h2z.rewardPerToken.call(uintHRHWRPw, {from: accounts[4]});
//		const addressXoTvDgz = await WolfStakingRewardsNJJ5h2z.updateReward.call(addressb51OMia, uintmuYHmAn, {from: accounts[4]});

		assert.equal(uint256VmuYKYA, BigInt("0"))
		assert.equal(uint256iaEHVmp, BigInt("0"))
		assert.equal(uint256xDu0eHc, BigInt("0"))
		await expect(WolfStakingRewardsNJJ5h2z.stake.call(uinthoxnUAG, uintO2HjQyX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringaBQ7NnJ = "X3SPrsO7nWUVnzRsGeBrlaf9rQxAzBguBFl"
		const stringWekitb = "w9pNL5awIYgXB77n2Is3Y"
		const uintzTXDWF9 = BigInt("168")
		const WolfStakingRewardsuqIUYpp = await WolfStakingRewards.new(stringaBQ7NnJ, stringWekitb, uintzTXDWF9, {from: accounts[4]});
		const uintEHGwMu = BigInt("483")
		const uintQRtBBf6 = BigInt("331")
		const addressAtYTcfu = accounts[3]
		const stringznzj96P = await WolfStakingRewardsuqIUYpp.symbol.call({from: accounts[2]});
		const uint256WUKk8G6 = await WolfStakingRewardsuqIUYpp.rewardPerToken.call(uintEHGwMu, {from: accounts[2]});
		const uint256bQcrWVd = await WolfStakingRewardsuqIUYpp.earned.call(addressAtYTcfu, uintQRtBBf6, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressH26qzdB = accounts[2]
		const addressIOKuXW = accounts[3]
		const addressqhRYbSJ = accounts[3]
		const WolfStakingRewardsNJJ5h2z = await WolfStakingRewards.new(addressH26qzdB, addressIOKuXW, addressqhRYbSJ, {from: accounts[2]});
		const uintnzEykuz = BigInt("1950")
		const uintYbOhjiE = BigInt("1510")
		const uintxJjwo6a = BigInt("221")
		const uintJUeJO77 = BigInt("1931")
		const uintOVhdbL = BigInt("214")
		const uintBQwemGJ = BigInt("935")
		const addressFaXKJzY = accounts[3]
		const uintT7FMQrD = BigInt("881")
		const uintjMG1DQ9 = BigInt("889")
		const addressgEproPq = accounts[3]
		const uint256iaEHVmp = await WolfStakingRewardsNJJ5h2z.lastTimeRewardApplicable.call(uintnzEykuz, {from: accounts[3]});
//		const uint256XRGUo8A = await WolfStakingRewardsNJJ5h2z.getRewardForDuration.call(uintYbOhjiE, {from: accounts[3]});
//		const uint256Lne0GnI = await WolfStakingRewardsNJJ5h2z.stake.call(uintJUeJO77, uintxJjwo6a, {from: accounts[5]});
//		const uint256xDu0eHc = await WolfStakingRewardsNJJ5h2z.rewardPerToken.call(uintOVhdbL, {from: accounts[4]});
//		await WolfStakingRewardsNJJ5h2z.onlyRewardsDistribution.call({from: accounts[3]});
//		const uint256VmuYKYA = await WolfStakingRewardsNJJ5h2z.balanceOfPerPool.call(addressFaXKJzY, uintBQwemGJ, {from: accounts[3]});
//		const uint256IIEOpnT = await WolfStakingRewardsNJJ5h2z.lastTimeRewardApplicable.call(uintT7FMQrD, {from: "0x0000000000000000000000000000000000000001"});
//		const addressXoTvDgz = await WolfStakingRewardsNJJ5h2z.updateReward.call(addressgEproPq, uintjMG1DQ9, {from: accounts[4]});

		assert.equal(uint256iaEHVmp, BigInt("0"))
		await expect(WolfStakingRewardsNJJ5h2z.getRewardForDuration.call(uintYbOhjiE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressMUo2drD = accounts[2]
		const addressRitVXQR = accounts[3]
		const addressiZkOW3t = accounts[3]
		const WolfStakingRewardsNJJ5h2z = await WolfStakingRewards.new(addressMUo2drD, addressRitVXQR, addressiZkOW3t, {from: accounts[2]});
		const uintZXktRU = BigInt("1435")
		const uintUctJRmu = BigInt("233")
		const uintjyQCVc = BigInt("220")
		const uintmYOKyuA = BigInt("126")
		const uintUeIhfpw = BigInt("1521")
		const uintwQRknOF = BigInt("1396")
		const uintR8S9dth = BigInt("935")
		const addressE4U2zHt = accounts[3]
		const uintMaqD8La = BigInt("1212")
		const uintePeUPfJ = BigInt("1842")
		const uintknJXvs = BigInt("881")
		const uintiIJOzzf = BigInt("919")
		const uintOhygkuG = BigInt("889")
		const addressGJbXtR = accounts[1]
		const uint256iaEHVmp = await WolfStakingRewardsNJJ5h2z.lastTimeRewardApplicable.call(uintZXktRU, {from: accounts[3]});
		const uintL0g8z1 = await WolfStakingRewardsNJJ5h2z.getReward.call(uintUctJRmu, {from: accounts[3]});
		const uint256xDu0eHc = await WolfStakingRewardsNJJ5h2z.rewardPerToken.call(uintjyQCVc, {from: accounts[4]});
//		const uint256MQkOsB = await WolfStakingRewardsNJJ5h2z.withdraw.call(uintUeIhfpw, uintmYOKyuA, {from: accounts[0]});
//		const uint256Wltv1fC = await WolfStakingRewardsNJJ5h2z.exit.call(uintwQRknOF, {from: accounts[1]});
//		const uint256VmuYKYA = await WolfStakingRewardsNJJ5h2z.balanceOfPerPool.call(addressE4U2zHt, uintR8S9dth, {from: accounts[3]});
//		const uint256HyPg6rH = await WolfStakingRewardsNJJ5h2z.stake.call(uintePeUPfJ, uintMaqD8La, {from: accounts[0]});
//		const uint256IIEOpnT = await WolfStakingRewardsNJJ5h2z.lastTimeRewardApplicable.call(uintknJXvs, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256j0DhdHR = await WolfStakingRewardsNJJ5h2z.rewardPerToken.call(uintiIJOzzf, {from: accounts[4]});
//		const addressXoTvDgz = await WolfStakingRewardsNJJ5h2z.updateReward.call(addressGJbXtR, uintOhygkuG, {from: accounts[4]});

		assert.equal(uint256iaEHVmp, BigInt("0"))
		assert.equal(uint256xDu0eHc, BigInt("0"))
		await expect(WolfStakingRewardsNJJ5h2z.withdraw.call(uintUeIhfpw, uintmYOKyuA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressMPtPnFi = accounts[2]
		const addressXI78Ag6 = accounts[3]
		const addressxEhvgCZ = accounts[3]
		const WolfStakingRewardsNJJ5h2z = await WolfStakingRewards.new(addressMPtPnFi, addressXI78Ag6, addressxEhvgCZ, {from: accounts[2]});
		const uintDB5Hksj = BigInt("1423")
		const uintWPb6vl = BigInt("214")
		const uintJHEeZu3 = BigInt("1703")
		const uintqEBOc8N = BigInt("935")
		const addressZEkgbAz = accounts[3]
		const uinti4ccniX = BigInt("881")
		const uint256iaEHVmp = await WolfStakingRewardsNJJ5h2z.lastTimeRewardApplicable.call(uintDB5Hksj, {from: accounts[3]});
		const uint256xDu0eHc = await WolfStakingRewardsNJJ5h2z.rewardPerToken.call(uintWPb6vl, {from: accounts[4]});
		const uint256vFU0Ivr = await WolfStakingRewardsNJJ5h2z.totalSupplyPerPool.call(uintJHEeZu3, {from: accounts[1]});
		const uint256VmuYKYA = await WolfStakingRewardsNJJ5h2z.balanceOfPerPool.call(addressZEkgbAz, uintqEBOc8N, {from: accounts[3]});
		const uint256IIEOpnT = await WolfStakingRewardsNJJ5h2z.lastTimeRewardApplicable.call(uinti4ccniX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256IIEOpnT, BigInt("0"))
		assert.equal(uint256VmuYKYA, BigInt("0"))
		assert.equal(uint256iaEHVmp, BigInt("0"))
		assert.equal(uint256vFU0Ivr, BigInt("0"))
		assert.equal(uint256xDu0eHc, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const addressS7gW730 = accounts[3]
		const addressmXtpkiK = accounts[3]
		const addressonWld8B = accounts[2]
		const WolfStakingRewardsCsqftmu = await WolfStakingRewards.new(addressS7gW730, addressmXtpkiK, addressonWld8B, {from: accounts[1]});
		const uintkqoSpRY = BigInt("1431")
		const uintgFmQsbH = BigInt("1417")
		const uintX1nGNp8 = BigInt("180")
//		const uint256ifu5905 = await WolfStakingRewardsCsqftmu.withdrawRemainingBalance.call(uintgFmQsbH, uintkqoSpRY, {from: "0x0000000000000000000000000000000000000001"});
//		const uintXCB1zNX = await WolfStakingRewardsCsqftmu.getReward.call(uintX1nGNp8, {from: accounts[2]});
//		await WolfStakingRewardsCsqftmu.nonReentrant.call({from: accounts[3]});

		await expect(WolfStakingRewardsCsqftmu.withdrawRemainingBalance.call(uintgFmQsbH, uintkqoSpRY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressFev7pBT = accounts[1]
		const addressxMwE5O = accounts[4]
		const addressapVqat7 = accounts[0]
		const WolfStakingRewardsxTXBz4K = await WolfStakingRewards.new(addressFev7pBT, addressxMwE5O, addressapVqat7, {from: accounts[1]});
		const uintXuIUmS = BigInt("240")
		const uintXH9GK9q = BigInt("736")
		const uintuzZfSil = await WolfStakingRewardsxTXBz4K.getReward.call(uintXuIUmS, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256arrayt6rqPM8 = await WolfStakingRewardsxTXBz4K.updateNotifyRewardAmount.call(uintXH9GK9q, {from: accounts[0]});
//		const uint8z9bHxii = await WolfStakingRewardsxTXBz4K.decimals.call({from: accounts[5]});

		await expect(WolfStakingRewardsxTXBz4K.updateNotifyRewardAmount.call(uintXH9GK9q, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringSNB7XWa = "5"
		const stringIaBeKjZ = "DhS9qor8DHSHLduuBwRB2opiTuokwPwSTrZUTPQMeYEs0sa58D"
		const uintWsFOncm = BigInt("207")
		const WolfStakingRewardsrzS1XcC = await WolfStakingRewards.new(stringSNB7XWa, stringIaBeKjZ, uintWsFOncm, {from: accounts[4]});
		const uintxHn7uPN = BigInt("1793")
		const addressMFibxFa = accounts[2]
		const uintpAcKv0U = BigInt("1411")
		const addresskGlZWEJ = accounts[2]
		const uintmuxDEFW = BigInt("49")
		const addressZBXnMMA = accounts[5]
		const address4NKGrI = await WolfStakingRewardsrzS1XcC.updateReward.call(addressMFibxFa, uintxHn7uPN, {from: accounts[3]});
		const uint256H2uX4OG = await WolfStakingRewardsrzS1XcC.balanceOfPerPool.call(addresskGlZWEJ, uintpAcKv0U, {from: accounts[3]});
		const addressVdn7JGK = await WolfStakingRewardsrzS1XcC.updateReward.call(addressZBXnMMA, uintmuxDEFW, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringf92BCzk = "mpN"
		const stringDTzvpVY = "gdVxDzoP0xgLXkJeJfyXsbFmgbfnVVAnMMtpL5rvG7elGqS8vgcaBjsdyiS3Nx"
		const uintt4Ut6AV = BigInt("207")
		const WolfStakingRewardseJ4pjiK = await WolfStakingRewards.new(stringf92BCzk, stringDTzvpVY, uintt4Ut6AV, {from: accounts[1]});
		const uintsCQaQo = BigInt("506")
		const uintcFuGJM5 = BigInt("921")
		const uintanhZE8k = BigInt("1843")
		const uintYm3mYeG = BigInt("1275")
		const uintOoWdcV = BigInt("954")
		const uints4mo7Xk = BigInt("1891")
		const uint256ckMKrAC = await WolfStakingRewardseJ4pjiK.withdraw.call(uintcFuGJM5, uintsCQaQo, {from: accounts[2]});
		const uint256yv7IaQy = await WolfStakingRewardseJ4pjiK.withdraw.call(uintYm3mYeG, uintanhZE8k, {from: accounts[1]});
		const uint256VBQPGsf = await WolfStakingRewardseJ4pjiK.withdrawRemainingBalance.call(uints4mo7Xk, uintOoWdcV, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbo3oQv = "MkrrKyLxexqvK20jBf7CxW6nLHqJnQMaVEhd8WtJNr1it2GLoSaz6BrKWtCwFpm4Dd0hYQzF"
		const stringSI3nT1X = "cbj1vDtrb6BXaS7xd"
		const uintWuy8dQ = BigInt("46")
		const WolfStakingRewardsvmnuQI = await WolfStakingRewards.new(stringbo3oQv, stringSI3nT1X, uintWuy8dQ, {from: accounts[1]});
		const uintwdWv6yR = BigInt("1152")
		const uintDmnlLAc = BigInt("965")
		const uintByYyk7r = BigInt("865")
		const addressUouqiH = accounts[4]
		const uint256nqWHljn = await WolfStakingRewardsvmnuQI.getRewardForDuration.call(uintwdWv6yR, {from: accounts[4]});
		const uint256B0Tw6Yu = await WolfStakingRewardsvmnuQI.getRewardForDuration.call(uintDmnlLAc, {from: accounts[4]});
		const addressntvAka = await WolfStakingRewardsvmnuQI.updateReward.call(addressUouqiH, uintByYyk7r, {from: accounts[3]});
		const stringzg5PZg3 = await WolfStakingRewardsvmnuQI.name.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrBCdFSB = "DRJYQJlaSjvosmMbES40wB1AMzBO2zr2mqzrbiEWSM8MqEcDUVEo"
		const stringIs5Gj1h = "03RMZtb7XWPMXJ3tvDgyJKgmvFY8G8Sv1boouUfQ3VCbE2JeSEQ1bQtvm4kio85ldP7fwR1TNPixSOpu4kWHecYPyCLORM"
		const uintnRbb5nr = BigInt("246")
		const WolfStakingRewardsvmDIUVM = await WolfStakingRewards.new(stringrBCdFSB, stringIs5Gj1h, uintnRbb5nr, {from: accounts[0]});
		const uintIBfTWol = BigInt("886")
		const uintZ03CJbM = BigInt("740")
		const uintVpZse6 = BigInt("895")
		const uint256qSX1OOG = await WolfStakingRewardsvmDIUVM.rewardPerToken.call(uintIBfTWol, {from: accounts[3]});
		const uint256mqRpPF1 = await WolfStakingRewardsvmDIUVM.withdraw.call(uintVpZse6, uintZ03CJbM, {from: accounts[3]});
		const uint8XQSlx1 = await WolfStakingRewardsvmDIUVM.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressSnJEPrU = accounts[3]
		const addressRvIRu0Z = accounts[3]
		const addressYKiB8RT = accounts[2]
		const WolfStakingRewardsCsqftmu = await WolfStakingRewards.new(addressSnJEPrU, addressRvIRu0Z, addressYKiB8RT, {from: accounts[1]});
		const uintJujZQjB = BigInt("1032")
		const uintYuexJFx = BigInt("1060")
		const uinttItncSn = BigInt("1525")
		const addressbH7lYP = accounts[3]
		const uintd79yb7Y = BigInt("614")
//		const uint256rOKNXDW = await WolfStakingRewardsCsqftmu.withdrawRemainingBalance.call(uintYuexJFx, uintJujZQjB, {from: accounts[1]});
//		const addressxa5RLdP = await WolfStakingRewardsCsqftmu.updateReward.call(addressbH7lYP, uinttItncSn, {from: accounts[3]});
//		const uint256byLH22N = await WolfStakingRewardsCsqftmu.exit.call(uintd79yb7Y, {from: accounts[0]});

		await expect(WolfStakingRewardsCsqftmu.withdrawRemainingBalance.call(uintYuexJFx, uintJujZQjB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringxrVuX0Y = "wFfSSQunvf6m5xCTcxY6kiQXxtsL1i6EEFp4ZG9AAFTUAly"
		const stringHgfbNIA = "NETqElxsfCzOmbKq83c3LynSscRb8eamJhnv7FgrhqW8m2hHnsDE9MPoS49B0nhhxaQ3"
		const uintXFPLLZX = BigInt("130")
		const WolfStakingRewardsh1jvWM0 = await WolfStakingRewards.new(stringxrVuX0Y, stringHgfbNIA, uintXFPLLZX, {from: accounts[4]});
		const uintbs4vZUk = BigInt("1337")
		const uintGUVDSmB = BigInt("40")
		const uintZ4doXDY = BigInt("1496")
		const uint256XNyaWye = await WolfStakingRewardsh1jvWM0.exit.call(uintbs4vZUk, {from: accounts[4]});
		await WolfStakingRewardsh1jvWM0.nonReentrant.call({from: accounts[4]});
		await WolfStakingRewardsh1jvWM0.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256DE0ptDm = await WolfStakingRewardsh1jvWM0.exit.call(uintGUVDSmB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256array1ugA6Q = await WolfStakingRewardsh1jvWM0.updateNotifyRewardAmount.call(uintZ4doXDY, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCC06cWj = "cSvbGZjQThsKqEfqK4hbB4LulQpIH0vmiaZaA5ojJEM0MFz4B3qP6WGREdw1aRiqtaqnYBJbnOCkchDk3fOfY4DP5N8"
		const stringdeKPxFN = "MRwq73Hift3"
		const uintQMDXPwV = BigInt("120")
		const WolfStakingRewardsQj2t7dV = await WolfStakingRewards.new(stringCC06cWj, stringdeKPxFN, uintQMDXPwV, {from: accounts[3]});
		const uintS0rzq5 = BigInt("1884")
		const addresseRxE2wN = accounts[0]
		const uintSCoT6xu = BigInt("1707")
		const uintnhec2rl = BigInt("839")
		const uintbatl2t8 = BigInt("575")
		const uintQMI4M80 = BigInt("726")
		await WolfStakingRewardsQj2t7dV.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256XQZfXgX = await WolfStakingRewardsQj2t7dV.balanceOfPerPool.call(addresseRxE2wN, uintS0rzq5, {from: accounts[2]});
		const uint256EDcQwZn = await WolfStakingRewardsQj2t7dV.getRewardForDuration.call(uintSCoT6xu, {from: accounts[3]});
		await WolfStakingRewardsQj2t7dV.onlyOwner.call({from: accounts[5]});
		const uint256lBdIPM7 = await WolfStakingRewardsQj2t7dV.rewardPerToken.call(uintnhec2rl, {from: accounts[3]});
		const uint256U9KXVK9 = await WolfStakingRewardsQj2t7dV.withdrawRemainingBalance.call(uintQMI4M80, uintbatl2t8, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringRDBNra7 = "NhXUMiLKS"
		const stringCyKnjW7 = "ExE1x6si5oftwGWjkTPklpYpLGzeXWyUCVzemPtODQVMeIvFU9IJ8RpUvW7dO1c8BYtP6ENljU2"
		const uintWGEzAB = BigInt("91")
		const WolfStakingRewardsDDWVsLP = await WolfStakingRewards.new(stringRDBNra7, stringCyKnjW7, uintWGEzAB, {from: accounts[3]});
		const uintT1sUca4 = BigInt("185")
		const addressAVb30CH = accounts[4]
		const uintLM6YQLM = BigInt("356")
		const addressOVCxtSM = accounts[4]
		const uintTlvlprr = BigInt("308")
		const addressjfyU5jD = accounts[1]
		const uintFBzDbm8 = BigInt("163")
		const uintXMo5HIs = BigInt("1119")
		const uint256bzOT2Tk = await WolfStakingRewardsDDWVsLP.earned.call(addressAVb30CH, uintT1sUca4, {from: accounts[4]});
		const addresss2WbPsR = await WolfStakingRewardsDDWVsLP.updateReward.call(addressOVCxtSM, uintLM6YQLM, {from: accounts[1]});
		const uint256zRtGnNh = await WolfStakingRewardsDDWVsLP.balanceOfPerPool.call(addressjfyU5jD, uintTlvlprr, {from: accounts[1]});
		const uint256oREYSi = await WolfStakingRewardsDDWVsLP.getRewardForDuration.call(uintFBzDbm8, {from: accounts[0]});
		const uint8C352z2 = await WolfStakingRewardsDDWVsLP.decimals.call({from: accounts[2]});
		const uint256tLl1fha = await WolfStakingRewardsDDWVsLP.getRewardForDuration.call(uintXMo5HIs, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYPKYGho = "YOVbs3BHyE8fKLYfd1a1Ic9RZjFEf1IiYsFb9PWMBrzSDaivXMv8wC21hXzc8CnfF2H30WYdJYXf"
		const stringqaQVbF = "k9tpoT54JV8jSTyzGaXBbfiltoPdQ2e0txlkhI32CVREf5H9zq2QQYHlJJ6ndPxU9aBgK3Cer8CF"
		const uintZHpw400 = BigInt("108")
		const WolfStakingRewardshIcAyx = await WolfStakingRewards.new(stringYPKYGho, stringqaQVbF, uintZHpw400, {from: accounts[1]});
		const uintXl0shkJ = BigInt("1692")
		const uintK87TWVC = BigInt("1977")
		const stringgRS1J1l = await WolfStakingRewardshIcAyx.symbol.call({from: accounts[2]});
		const uint256YC9SAbj = await WolfStakingRewardshIcAyx.stake.call(uintK87TWVC, uintXl0shkJ, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDORRGqw = "9DlcdAQsRNXBTvPhFYYzbYerMhqK1tcCnngUzJGFYaykbCstNfys2szI6a5eWuermHw"
		const stringLJiNsb = "3cBfCZDMoFOACnAesKlW81qdZevK9xU3McTOfx2rb3HaLITvFT0x"
		const uintZG24c63 = BigInt("243")
		const WolfStakingRewardsK5Rfdqy = await WolfStakingRewards.new(stringDORRGqw, stringLJiNsb, uintZG24c63, {from: accounts[0]});
		const uintVNqAgEO = BigInt("1594")
		const uintVtrcpd1 = BigInt("1693")
		const uintCYBPowi = BigInt("1822")
		const addressYHrbPNw = accounts[1]
		const uintulITOU = BigInt("494")
		const uint256KaQAloY = await WolfStakingRewardsK5Rfdqy.withdrawRemainingBalance.call(uintVtrcpd1, uintVNqAgEO, {from: accounts[5]});
		const uint256vjpwJp = await WolfStakingRewardsK5Rfdqy.earned.call(addressYHrbPNw, uintCYBPowi, {from: accounts[1]});
		const uint256ETf0lm = await WolfStakingRewardsK5Rfdqy.getRewardForDuration.call(uintulITOU, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjz0xFdN = "N3Rjje3x1HVvbpvSAuO3cghwY4zteEm0B4iK5j69DfcF0TqQY4ojMMtX8UIGoBnTyANfwOQxtv5FyD5rTyufaa4eaeW4GjgiK"
		const stringvtbOBq1 = "l71pKqtzywuFXLYyVFKL65wkbi2u3OWMjJbvvepFiYXHwKjyyqRn6HuuJ6W2jbe8pyYPNQkMAezjmNUdm2PhhZ96dWU"
		const uinttgxZPJx = BigInt("95")
		const WolfStakingRewardsk6btIpa = await WolfStakingRewards.new(stringjz0xFdN, stringvtbOBq1, uinttgxZPJx, {from: accounts[4]});
		const uintBkV8ood = BigInt("1756")
		const addresshoOcVrM = accounts[3]
		const uintxruplV = BigInt("1265")
		const uintACbCHD = BigInt("209")
		const uintJfXvG4q = BigInt("270")
		const addressXPu2NRD = accounts[3]
		const uintShYTmhD = BigInt("450")
		const addressexoeB6f = await WolfStakingRewardsk6btIpa.updateReward.call(addresshoOcVrM, uintBkV8ood, {from: accounts[0]});
		const uint256Kave0XW = await WolfStakingRewardsk6btIpa.withdrawRemainingBalance.call(uintACbCHD, uintxruplV, {from: accounts[0]});
		const uint256UhUjstx = await WolfStakingRewardsk6btIpa.balanceOfPerPool.call(addressXPu2NRD, uintJfXvG4q, {from: accounts[0]});
		await WolfStakingRewardsk6btIpa.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256hyjP3fg = await WolfStakingRewardsk6btIpa.lastTimeRewardApplicable.call(uintShYTmhD, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const string6yT158 = "sJMtCjiaFckDoekBls4r3EDnJYeUSyweKX"
		const stringqrpCEQ6 = "AbwHng1rgi8Ee7UX9tyR8WpCdUVPEGhuNmTUAu1wwEeOFwac"
		const uintkMygnpR = BigInt("182")
		const WolfStakingRewardsG5KmbVR = await WolfStakingRewards.new(string6yT158, stringqrpCEQ6, uintkMygnpR, {from: accounts[2]});
		const uintIBF7NVs = BigInt("1515")
		const uintwBys2lg = BigInt("116")
		const uintwJ2p0QP = BigInt("1681")
		const addressApCL2Y = accounts[0]
		const uintrqCe6Vj = BigInt("1838")
		const addressMqvme46 = accounts[4]
		const stringHNQBGc4 = await WolfStakingRewardsG5KmbVR.symbol.call({from: accounts[0]});
		const uint256J2pLyQE = await WolfStakingRewardsG5KmbVR.exit.call(uintIBF7NVs, {from: accounts[4]});
		const uint256QhpfNmJ = await WolfStakingRewardsG5KmbVR.totalSupplyPerPool.call(uintwBys2lg, {from: accounts[1]});
		const uint256XTLus0S = await WolfStakingRewardsG5KmbVR.balanceOfPerPool.call(addressApCL2Y, uintwJ2p0QP, {from: accounts[1]});
		const addressBdEyH0M = await WolfStakingRewardsG5KmbVR.updateReward.call(addressMqvme46, uintrqCe6Vj, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringJCc5r1 = "ewNTptJEqexcxIR29L2gPHiAcHJuDpHM46C7gyOMIH0X7kQPY1ImxxdlGMczTfnhkC53EVm5"
		const stringAlxt0KG = "trOUn1PnnCvmBPVtegVSbUhcOwu4duFqQoRobvm4iyehP7Lm2ZCGgCnCM4O"
		const uintlNEHeFV = BigInt("35")
		const WolfStakingRewardsE2lJjUL = await WolfStakingRewards.new(stringJCc5r1, stringAlxt0KG, uintlNEHeFV, {from: accounts[2]});
		const uintPWf4FRd = BigInt("667")
		const uintMoK211a = BigInt("762")
		const uintBAJ35pH = BigInt("1088")
		const addressBYfwdpd = accounts[0]
		const uint256OOVevTF = await WolfStakingRewardsE2lJjUL.withdraw.call(uintMoK211a, uintPWf4FRd, {from: accounts[4]});
		const strings3zydn0 = await WolfStakingRewardsE2lJjUL.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256b1Wo1hp = await WolfStakingRewardsE2lJjUL.balanceOfPerPool.call(addressBYfwdpd, uintBAJ35pH, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFUMORAk = "0QW7MMV"
		const stringdDEUcqF = "ob"
		const uintCvGoBHp = BigInt("41")
		const WolfStakingRewardsqaZ6kso = await WolfStakingRewards.new(stringFUMORAk, stringdDEUcqF, uintCvGoBHp, {from: accounts[4]});
		const uintLaLufmu = BigInt("1497")
		const uintBAnwNxD = BigInt("949")
		const uintDFeCP22 = BigInt("169")
		const uintdUivCH = BigInt("487")
		const uint256cb4DL2v = await WolfStakingRewardsqaZ6kso.lastTimeRewardApplicable.call(uintLaLufmu, {from: accounts[2]});
		const uintB6hdRb = await WolfStakingRewardsqaZ6kso.getReward.call(uintBAnwNxD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GbYzKhd = await WolfStakingRewardsqaZ6kso.lastTimeRewardApplicable.call(uintDFeCP22, {from: accounts[0]});
		const uint256Hn2cAnT = await WolfStakingRewardsqaZ6kso.totalSupplyPerPool.call(uintdUivCH, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringP950hsT = "Pc9b2cLjunqrN16ryRSzeDlgyzdCAeS"
		const stringHMCrVRt = "c4S3eWjOhlaJslEKOXr1lddEd"
		const uintJBUXQKW = BigInt("148")
		const WolfStakingRewardsmIkyJcE = await WolfStakingRewards.new(stringP950hsT, stringHMCrVRt, uintJBUXQKW, {from: accounts[3]});
		const uintBHsXy4t = BigInt("1925")
		await WolfStakingRewardsmIkyJcE.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256eqkZuei = await WolfStakingRewardsmIkyJcE.lastTimeRewardApplicable.call(uintBHsXy4t, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjoPpAYF = "kwwUHdek15pGPEF5WF"
		const stringZBG0iFb = "tmfSAicae4b6ddF8zXY3mTJzKfMbIrpSUwNK6uNpx49Gu2Vkc8RJqOjKUmjuGU0"
		const uintm8VmwPx = BigInt("47")
		const WolfStakingRewardsm5ELKCm = await WolfStakingRewards.new(stringjoPpAYF, stringZBG0iFb, uintm8VmwPx, {from: accounts[1]});
		const uintF8mrSR0 = BigInt("1217")
		const uintWHBo1SK = BigInt("291")
		const uint256ZqFWoT = await WolfStakingRewardsm5ELKCm.stake.call(uintWHBo1SK, uintF8mrSR0, {from: accounts[2]});
		const uint8EmTd9yZ = await WolfStakingRewardsm5ELKCm.decimals.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringAeFNdKY = "XNpLrSi927XT6DzPSxL"
		const stringaWzwJqQ = "TKm5CfBarhFKRdbTxUosmb6aPwjITNjWIVzDQsnh"
		const uintPCt08n = BigInt("127")
		const WolfStakingRewardsASDIEEV = await WolfStakingRewards.new(stringAeFNdKY, stringaWzwJqQ, uintPCt08n, {from: accounts[5]});
		const uintU3NZfC9 = BigInt("942")
		const uintFBkYd7 = BigInt("1989")
		const addresseslWWb4 = accounts[2]
		const uint256CslpxBZ = await WolfStakingRewardsASDIEEV.getRewardForDuration.call(uintU3NZfC9, {from: accounts[2]});
		const uint256j8p7Y7h = await WolfStakingRewardsASDIEEV.earned.call(addresseslWWb4, uintFBkYd7, {from: accounts[2]});
		await WolfStakingRewardsASDIEEV.nonReentrant.call({from: accounts[0]});
		const stringE8h3VBj = await WolfStakingRewardsASDIEEV.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringc8n4XEv = "IMAsAzL4SEw"
		const stringEXOrJrz = "1grnlQfGBlHpcO"
		const uintl3j1hm = BigInt("155")
		const WolfStakingRewardsHDgtggn = await WolfStakingRewards.new(stringc8n4XEv, stringEXOrJrz, uintl3j1hm, {from: "0x0000000000000000000000000000000000000001"});
		const uintUzZ9F9s = BigInt("2021")
		const uintgICC0aI = BigInt("648")
		const uintwSwhKG = BigInt("1073")
		const addresskZXcxzu = accounts[5]
		const stringeFhLU7E = await WolfStakingRewardsHDgtggn.symbol.call({from: accounts[0]});
		const uint256kiAf1nt = await WolfStakingRewardsHDgtggn.withdrawRemainingBalance.call(uintgICC0aI, uintUzZ9F9s, {from: accounts[3]});
		const uint256OZw1EEo = await WolfStakingRewardsHDgtggn.balanceOfPerPool.call(addresskZXcxzu, uintwSwhKG, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsw7CUSk = "rw2bcnwLVWNe8RkIuBYRwx5tXoWx6N2QYr626Vehuqkd"
		const stringW43qzL = "gEg7Ayy3o6uArxLc5lhq"
		const uintzzPMNVA = BigInt("199")
		const WolfStakingRewardsGvwwwpz = await WolfStakingRewards.new(stringsw7CUSk, stringW43qzL, uintzzPMNVA, {from: accounts[0]});
		const uintLbzKlEq = BigInt("1745")
		const address1kuJ80 = accounts[1]
		const uintiFUQaXi = BigInt("911")
		const uint256yHGGwjC = await WolfStakingRewardsGvwwwpz.balanceOfPerPool.call(address1kuJ80, uintLbzKlEq, {from: accounts[0]});
		const stringy6Nn9b9 = await WolfStakingRewardsGvwwwpz.symbol.call({from: accounts[1]});
		await WolfStakingRewardsGvwwwpz.onlyOwner.call({from: accounts[3]});
		const uintI585ri = await WolfStakingRewardsGvwwwpz.getReward.call(uintiFUQaXi, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMxWH2d8 = "mPDlcjGoJBiZSxZQARoARi8aYUGjEbYI8Ph5GrBdoJWbNQbj2gyQfDKC8"
		const stringd8vwhhl = "LvunSN4pi5u61uhGJCVX3I7xCACRCeq"
		const uintIcxXsDy = BigInt("29")
		const WolfStakingRewardsP9Epriw = await WolfStakingRewards.new(stringMxWH2d8, stringd8vwhhl, uintIcxXsDy, {from: accounts[3]});
		const uintLK5IMiZ = BigInt("889")
		const address5GjQ6S = accounts[2]
		const uintDAxLNUt = BigInt("557")
		const uintkj116k = BigInt("746")
		const uintWuJ3ZPr = BigInt("1968")
		const uintjL2y2ag = BigInt("151")
		const uintJdTE1Jh = BigInt("755")
		const address0ZtZyi = accounts[4]
		const uint256FCXI8F = await WolfStakingRewardsP9Epriw.earned.call(address5GjQ6S, uintLK5IMiZ, {from: accounts[4]});
		const uint256F77H37Q = await WolfStakingRewardsP9Epriw.withdrawRemainingBalance.call(uintkj116k, uintDAxLNUt, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsP9Epriw.nonReentrant.call({from: accounts[3]});
		const uint256Al8sWge = await WolfStakingRewardsP9Epriw.stake.call(uintjL2y2ag, uintWuJ3ZPr, {from: accounts[0]});
		const addressx0zcU4O = await WolfStakingRewardsP9Epriw.updateReward.call(address0ZtZyi, uintJdTE1Jh, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWKztycU = "Q3bRhCfvoV1G84xWlXZNSi2utCwK0a0pvq3I4tcuaEioDGyJMQoSL4CL"
		const stringGEF0mnX = "BocAeUGG2swm6qtAEh5yxdPIhwxaVtE44VE7y4nKTjb4ARekpoZo"
		const uintpNsgvkR = BigInt("249")
		const WolfStakingRewardsT2pkqbC = await WolfStakingRewards.new(stringWKztycU, stringGEF0mnX, uintpNsgvkR, {from: accounts[5]});
		const uintqIJYPaw = BigInt("1258")
		const uintRcVyv3c = BigInt("127")
		const uintDwoYhNr = BigInt("1186")
		const uint93flxW = BigInt("123")
		const addresscAgMdbr = accounts[3]
		await WolfStakingRewardsT2pkqbC.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256mi54Mor = await WolfStakingRewardsT2pkqbC.rewardPerToken.call(uintqIJYPaw, {from: accounts[1]});
		const uint256lGr0HWN = await WolfStakingRewardsT2pkqbC.totalSupplyPerPool.call(uintRcVyv3c, {from: accounts[3]});
		const uint256NGLR4Xo = await WolfStakingRewardsT2pkqbC.exit.call(uintDwoYhNr, {from: accounts[2]});
		const uint256Qpbc4gr = await WolfStakingRewardsT2pkqbC.earned.call(addresscAgMdbr, uint93flxW, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmYe3HEb = "XJtqKvbGTBpR4"
		const stringkMLfURl = "t7CT9vAXEQOzmCDTN1gcCE6GY4pbNlusHBEcwKkb7CfG5etl"
		const uints8uqM7D = BigInt("200")
		const WolfStakingRewardsXnyupPY = await WolfStakingRewards.new(stringmYe3HEb, stringkMLfURl, uints8uqM7D, {from: accounts[5]});
		const uintqYgZPHW = BigInt("508")
		const uintXImoU9W = BigInt("1121")
		const uintgBsw6GD = BigInt("92")
		const uintEfJpiKg = BigInt("1760")
		const uintjjf6esV = BigInt("930")
		const uintnTMNuE = BigInt("560")
		const addressMF3tO2I = accounts[0]
		const uint256eWyfuIq = await WolfStakingRewardsXnyupPY.exit.call(uintqYgZPHW, {from: accounts[4]});
		const uint256mSbptIS = await WolfStakingRewardsXnyupPY.withdraw.call(uintgBsw6GD, uintXImoU9W, {from: accounts[3]});
		const uint256F8xBguN = await WolfStakingRewardsXnyupPY.withdrawRemainingBalance.call(uintjjf6esV, uintEfJpiKg, {from: accounts[2]});
		const uint256aePnDyK = await WolfStakingRewardsXnyupPY.earned.call(addressMF3tO2I, uintnTMNuE, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringGQ2zJNT = "xKko1Yk3ezWBsx2bUHBmjdnb1jvDngQ7srcDMnamH3qhGaH121x85r932NsNtnSvDfNE2CtpO6DCK"
		const stringnNYYUzF = "So3tRuNejCoGoYHN32lUJtdB7VB8C8XT"
		const uintc6eKuiH = BigInt("72")
		const WolfStakingRewardsuLv9bU = await WolfStakingRewards.new(stringGQ2zJNT, stringnNYYUzF, uintc6eKuiH, {from: accounts[1]});
		const uintp8AkxY = BigInt("1918")
		const uintxUQ2wLL = BigInt("84")
		const uintokSQN7 = BigInt("1294")
		const uintkgqQTYI = BigInt("1653")
		const uintkPKi5sU = BigInt("498")
		const uint256iVPV6IR = await WolfStakingRewardsuLv9bU.withdraw.call(uintxUQ2wLL, uintp8AkxY, {from: "0x0000000000000000000000000000000000000001"});
		const uint256nXRH5IL = await WolfStakingRewardsuLv9bU.exit.call(uintokSQN7, {from: accounts[1]});
		const uint256YcyrnBh = await WolfStakingRewardsuLv9bU.lastTimeRewardApplicable.call(uintkgqQTYI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256m5dLuhB = await WolfStakingRewardsuLv9bU.lastTimeRewardApplicable.call(uintkPKi5sU, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnFmJAq = "GW56B3BBlonlpGWDmw9E"
		const stringEndWA9 = "xAdmZkPnjNiWIM2kX3wPsV18tEh9daS1SxApuNSK1rvVT6RFDLv7GmyzlzSt"
		const uintqPiIR3 = BigInt("253")
		const WolfStakingRewardsHsQ8kbN = await WolfStakingRewards.new(stringnFmJAq, stringEndWA9, uintqPiIR3, {from: accounts[0]});
		const uintl0TCaoG = BigInt("700")
		const uintYU6QRH = BigInt("782")
		const uinttiuxJJr = BigInt("129")
		const uintQwq7To6 = BigInt("528")
		const uint256rNIZZJI = await WolfStakingRewardsHsQ8kbN.rewardPerToken.call(uintl0TCaoG, {from: accounts[2]});
		const uint256yTdGLIS = await WolfStakingRewardsHsQ8kbN.exit.call(uintYU6QRH, {from: accounts[3]});
		const uint256V20TEaO = await WolfStakingRewardsHsQ8kbN.withdraw.call(uintQwq7To6, uinttiuxJJr, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkQsFTfo = "5VOGu9OMIONIvpfcH11qOBv15Vaw"
		const stringBSaYaeD = "WF3kZKX0DMRzyxzWCySiuCXHi4IGMBj5ocW8QSjCXI1HYXTV1did9DhnAu3CUzTw9ppo1r0HpxgVV4Rd5FmrE4gkHfd6SNJF"
		const uintVBo0Dzo = BigInt("247")
		const WolfStakingRewardsjZS0e9P = await WolfStakingRewards.new(stringkQsFTfo, stringBSaYaeD, uintVBo0Dzo, {from: accounts[2]});
		const uintEU1dUXM = BigInt("995")
		const uintKoHWnz = BigInt("873")
		const uintE8codrY = BigInt("1093")
		const uint256ZuAYEvM = await WolfStakingRewardsjZS0e9P.lastTimeRewardApplicable.call(uintEU1dUXM, {from: accounts[3]});
		const uint256lFLKRou = await WolfStakingRewardsjZS0e9P.exit.call(uintKoHWnz, {from: accounts[2]});
		const uintT3cgzLj = await WolfStakingRewardsjZS0e9P.getReward.call(uintE8codrY, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHEqqOaG = "SdpbUffs9qcKX7yFPlxNu3Bulh6pfJyWpmfskMRe9c2PoCiGPvFnLGtgr8MskCnWWBHGrD5"
		const stringJZKZ3VN = "dAuWN47J0ybxbMCAHjuIhayCaCj3R65lIaoeqlXN6vlaO1JtuXcVtsNYvG6O41qGq9XtrvyUUlneVJN939F28M"
		const uintdCLAY3 = BigInt("154")
		const WolfStakingRewardsphRoYs4 = await WolfStakingRewards.new(stringHEqqOaG, stringJZKZ3VN, uintdCLAY3, {from: accounts[5]});
		const uintMkLs7L = BigInt("1100")
		const uintjKTUgR = await WolfStakingRewardsphRoYs4.getReward.call(uintMkLs7L, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsphRoYs4.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUFh5wQV = "eI97XMh1duc9sQ4brFZG5DaycQMKTM9gcoLymRhwvMG8JmcGeiJKluLkiNa"
		const stringqgMqQIH = "BSxF8mG2RAjUG3YuxZXDXu5Cqj32Xxp4mKsuCN7p"
		const uintkDvo63j = BigInt("35")
		const WolfStakingRewardswNnZ2v0 = await WolfStakingRewards.new(stringUFh5wQV, stringqgMqQIH, uintkDvo63j, {from: accounts[0]});
		const uintT0F9ufj = BigInt("1401")
		const uintIM7XKQQ = BigInt("1431")
		const uintTCmSD9E = BigInt("1713")
		const uintcKxT6pX = BigInt("565")
		const uint256zI5W4VB = await WolfStakingRewardswNnZ2v0.withdrawRemainingBalance.call(uintIM7XKQQ, uintT0F9ufj, {from: accounts[1]});
		const uint256g263Lpb = await WolfStakingRewardswNnZ2v0.withdraw.call(uintcKxT6pX, uintTCmSD9E, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUIojYzg = "nhwkbfrCLge"
		const stringEHPYEHK = "1qhcMTZQ7hAPsoXJ9lng5FFTthx07FygrnPdqWVxoLSzrkGuYc5"
		const uintYT6aoZt = BigInt("237")
		const WolfStakingRewardsIp71izL = await WolfStakingRewards.new(stringUIojYzg, stringEHPYEHK, uintYT6aoZt, {from: accounts[0]});
		const uintjR96VS7 = BigInt("212")
		const uint5TYAoD = BigInt("1825")
		const uintcbyRhMK = BigInt("1155")
		const uint8uZ6D8XU = await WolfStakingRewardsIp71izL.decimals.call({from: accounts[5]});
		const uint256fbd9Ib1 = await WolfStakingRewardsIp71izL.lastTimeRewardApplicable.call(uintjR96VS7, {from: "0x0000000000000000000000000000000000000001"});
		const uint256IIUkD4f = await WolfStakingRewardsIp71izL.rewardPerToken.call(uint5TYAoD, {from: accounts[4]});
		const uint256lkyENh = await WolfStakingRewardsIp71izL.getRewardForDuration.call(uintcbyRhMK, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjctCOE = "Ss3cO2sO8CrWOohjOgPb7fYSPniBPfoxJicP"
		const stringmMkpIU4 = "4vlnlkIR6oRHgfKUwOv3qGLiFCc4lSqxxeF3X4rqiQHOYEvcSptM6clBSf8QTptdA67HLMI5KYZqnLxqpmot4Y"
		const uintZSKRHY8 = BigInt("59")
		const WolfStakingRewardsf15k7ng = await WolfStakingRewards.new(stringjctCOE, stringmMkpIU4, uintZSKRHY8, {from: accounts[1]});
		const uintqpnDx9E = BigInt("1337")
		const uintYge7qnQ = BigInt("160")
		const uintgz6B62 = BigInt("1716")
		const uintDuH7lJV = BigInt("1142")
		const uintNQyOaBN = BigInt("2014")
		const uintTbYt766 = BigInt("44")
		const uint256IoClE1 = await WolfStakingRewardsf15k7ng.exit.call(uintqpnDx9E, {from: accounts[3]});
		const stringm1p6bqs = await WolfStakingRewardsf15k7ng.name.call({from: accounts[5]});
		const uint256QZZunR4 = await WolfStakingRewardsf15k7ng.withdrawRemainingBalance.call(uintgz6B62, uintYge7qnQ, {from: accounts[0]});
		const uintN6bXSk = await WolfStakingRewardsf15k7ng.getReward.call(uintDuH7lJV, {from: accounts[4]});
		const uint256tIhSQK1 = await WolfStakingRewardsf15k7ng.withdraw.call(uintTbYt766, uintNQyOaBN, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringEQnIMJH = "lU8QkrqjeDljyesYoAAsK3Lr2waaL2kazIjfGi"
		const stringEvWcdbm = "VUAtWZu6aEQpIb1a00IEX"
		const uintmkTk2r6 = BigInt("78")
		const WolfStakingRewardsNnqbc1r = await WolfStakingRewards.new(stringEQnIMJH, stringEvWcdbm, uintmkTk2r6, {from: accounts[1]});
		const uintEiQJuKj = BigInt("1517")
		const uintMrX04eN = BigInt("1979")
		const uint256jf7Q4RM = await WolfStakingRewardsNnqbc1r.stake.call(uintMrX04eN, uintEiQJuKj, {from: accounts[2]});
		const stringXq5dCHB = await WolfStakingRewardsNnqbc1r.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringffPpABo = "GsyBaWkLtlgFBM2uzpHTUJHBDbS0E0nzVwhx9dG5MPeXJhF2f2VKhgcMdH2riD3u8t9dxo"
		const stringiqIIR79 = "NJ6YPjmdFy6QTabgcosYKm2OIC9fk4QvQdPvThUAMaMIe5VfGfzxbXhNXcAvPKR34cuRoO8hPySkEO"
		const uintHyZtBl7 = BigInt("177")
		const WolfStakingRewardsaLCtOH = await WolfStakingRewards.new(stringffPpABo, stringiqIIR79, uintHyZtBl7, {from: accounts[1]});
		const uintzLLMCLq = BigInt("1532")
		const uintImrr4RY = BigInt("1853")
		const uintVMgngfX = BigInt("794")
		const uintLzYF7Me = BigInt("353")
		await WolfStakingRewardsaLCtOH.onlyRewardsDistribution.call({from: accounts[3]});
		await WolfStakingRewardsaLCtOH.onlyRewardsDistribution.call({from: accounts[4]});
		const uint8YNKW8S = await WolfStakingRewardsaLCtOH.decimals.call({from: accounts[4]});
		const uint256dfz3es = await WolfStakingRewardsaLCtOH.withdraw.call(uintImrr4RY, uintzLLMCLq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256UiEwGfb = await WolfStakingRewardsaLCtOH.stake.call(uintLzYF7Me, uintVMgngfX, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVKva2jI = "HswD7VWOFJ7RzULK3mEBcDjthYXj2"
		const stringbwmVSP2 = "xjMfkk5j4vEMq9BZjVWPyfBhZJwotIyEUUWAhnFuyqvMqvwStskef8vKY3Nz"
		const uintOZZhKhH = BigInt("98")
		const WolfStakingRewardsQxWirUn = await WolfStakingRewards.new(stringVKva2jI, stringbwmVSP2, uintOZZhKhH, {from: accounts[0]});
		const uintLhbMmi4 = BigInt("280")
		const uintlNhERfm = BigInt("1121")
		const uintkCVi2W = BigInt("345")
		const stringc4wNIGa = await WolfStakingRewardsQxWirUn.name.call({from: accounts[5]});
		const uint256aq767Im = await WolfStakingRewardsQxWirUn.exit.call(uintLhbMmi4, {from: accounts[3]});
		await WolfStakingRewardsQxWirUn.nonReentrant.call({from: accounts[2]});
		const uint256vSWNZv3 = await WolfStakingRewardsQxWirUn.totalSupplyPerPool.call(uintlNhERfm, {from: accounts[2]});
		const uint256arrayF99M662 = await WolfStakingRewardsQxWirUn.updateNotifyRewardAmount.call(uintkCVi2W, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSaEI9du = "qt0JfOKog8l74SS5Ni1QdWexLkrvj1tlRyBpkSrF6Aw4FdnFIDSTj1a2rQzWCgOWE9UDsUrohFSrQGV"
		const stringZkJDubZ = "CW763UHIaQnuAo6cYQgstJNPq8CwZcsfNfl94UwNxwGsIJbdKZPA3HbNP8zeFnUhaJUpvJas"
		const uintEuATUx = BigInt("193")
		const WolfStakingRewardsk2yr307 = await WolfStakingRewards.new(stringSaEI9du, stringZkJDubZ, uintEuATUx, {from: accounts[3]});
		const uintdHachd6 = BigInt("1343")
		const uintbp5RKXq = BigInt("926")
		const uintKTMPHr = BigInt("1964")
		const uint4x8jeS = BigInt("1611")
		const addressuOS7djH = accounts[0]
		const uint256XH8Sqls = await WolfStakingRewardsk2yr307.lastTimeRewardApplicable.call(uintdHachd6, {from: accounts[2]});
		const uint256fnKSwLT = await WolfStakingRewardsk2yr307.exit.call(uintbp5RKXq, {from: accounts[0]});
		const uint256jj0LX2 = await WolfStakingRewardsk2yr307.rewardPerToken.call(uintKTMPHr, {from: accounts[2]});
		const uint256Ux9kMU = await WolfStakingRewardsk2yr307.balanceOfPerPool.call(addressuOS7djH, uint4x8jeS, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringkT8iNLk = "M1lzXc5FJNtIMm7vbvt2RBUUGHvAVggOqMjfsLct9cb1dHGYSSX2koFR45bxZj33gHM60gBj21RAbw1fo4Hn1OyXXgf8C1zaJ"
		const string3Tatvm = "fzp1TdYIczRjNQlROGLZf6k64lhajorTEri8Kupin4StsCdYa"
		const uintKFB7fJc = BigInt("202")
		const WolfStakingRewardsb6Fc26q = await WolfStakingRewards.new(stringkT8iNLk, string3Tatvm, uintKFB7fJc, {from: accounts[1]});
		const uintVF37pEj = BigInt("1993")
		const uintWSj8Kqm = BigInt("649")
		const uintHwTNFnn = BigInt("1328")
		const uint8GwgK4 = BigInt("818")
		const uintVG3HyYt = BigInt("460")
		const addressxxJT4ol = "0x0000000000000000000000000000000000000001"
		const uint256U9EK2Xm = await WolfStakingRewardsb6Fc26q.withdraw.call(uintWSj8Kqm, uintVF37pEj, {from: accounts[3]});
		const stringNZF7Hs = await WolfStakingRewardsb6Fc26q.symbol.call({from: accounts[4]});
		const uint256U2uJjU = await WolfStakingRewardsb6Fc26q.withdrawRemainingBalance.call(uint8GwgK4, uintHwTNFnn, {from: accounts[1]});
		const uint256ZxqdFph = await WolfStakingRewardsb6Fc26q.earned.call(addressxxJT4ol, uintVG3HyYt, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringrdXmtmz = "DR4CrwCQIAzoa84RVfLZIFEwDhMqE1zvnanVig0EJ8WADJMgS5hetlSu9z36G"
		const stringmRzikqe = "JT"
		const uinthDb3pgL = BigInt("23")
		const WolfStakingRewardsdigN9eN = await WolfStakingRewards.new(stringrdXmtmz, stringmRzikqe, uinthDb3pgL, {from: accounts[2]});
		const uinteI4Gxao = BigInt("265")
		const uinttMvvIfy = BigInt("1575")
		const uintQmTRVlC = BigInt("1128")
		const uintcc58Xb = BigInt("1316")
		const uintYCWT1qC = BigInt("165")
		const uint256EYIwIM7 = await WolfStakingRewardsdigN9eN.rewardPerToken.call(uinteI4Gxao, {from: accounts[2]});
		await WolfStakingRewardsdigN9eN.nonReentrant.call({from: accounts[4]});
		const uint256muMuePK = await WolfStakingRewardsdigN9eN.lastTimeRewardApplicable.call(uinttMvvIfy, {from: accounts[4]});
		const uint256arrayvW4nujH = await WolfStakingRewardsdigN9eN.updateNotifyRewardAmount.call(uintQmTRVlC, {from: accounts[1]});
		const uint256Dawla3A = await WolfStakingRewardsdigN9eN.getRewardForDuration.call(uintcc58Xb, {from: accounts[2]});
		const uint256niQgk9d = await WolfStakingRewardsdigN9eN.getRewardForDuration.call(uintYCWT1qC, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const string50s25M = "bzXaYYYWMw7MVE1QsGtaQKcErMLtMsm5QsE3IjWQDVc23xO6Ejissp9Fc3CxPqZrn3N4j6l3YDnoq40U0x9iq6FnI9Hzayuf"
		const stringpIr2tlX = "vnoqdBsgE96VjzC8MjAhfl3Ff6aQEf58aqUNdgWkaata8ETfdLZXr"
		const uintxxzbVtl = BigInt("215")
		const WolfStakingRewardszQXALp0 = await WolfStakingRewards.new(string50s25M, stringpIr2tlX, uintxxzbVtl, {from: accounts[1]});
		const uintp2SDcyF = BigInt("1152")
		const uintQHpLPta = BigInt("2010")
		const uintZwppjYZ = BigInt("1622")
		const uint256wlu8gf7 = await WolfStakingRewardszQXALp0.withdrawRemainingBalance.call(uintQHpLPta, uintp2SDcyF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256FpQTQRw = await WolfStakingRewardszQXALp0.rewardPerToken.call(uintZwppjYZ, {from: accounts[0]});
		const uint8f4ILDeX = await WolfStakingRewardszQXALp0.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZh6OlQN = "caLq2W5MwiFmsX2qurO4n3cwvHlrBxhEDymKCCC1pBA5JBE4dh8W8jlj3YA7CjUNecrYHM"
		const stringfPrn6Bb = "roS0skA9OSpS4Pm2NIBRwSRoo4TLMeQLjz3z4B96AC2g1BJKcVo"
		const uintOVbDEub = BigInt("106")
		const WolfStakingRewardsOcDOPiT = await WolfStakingRewards.new(stringZh6OlQN, stringfPrn6Bb, uintOVbDEub, {from: accounts[5]});
		const uintNJ2muHS = BigInt("1751")
		const uintRKIjD3w = BigInt("1347")
		const addressrsCkspr = accounts[1]
		const uint256UXFZZy = await WolfStakingRewardsOcDOPiT.lastTimeRewardApplicable.call(uintNJ2muHS, {from: accounts[2]});
		const addresshpipV9 = await WolfStakingRewardsOcDOPiT.updateReward.call(addressrsCkspr, uintRKIjD3w, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvWPOUOq = "VwBVEd9hv084PVi"
		const stringWKDF8nw = "EPRPx73aTe9a6gp1TQk627FSL5JYB4vcOlKD1Y2yHj7PklfwMue0IXE"
		const uintp6WSc4H = BigInt("227")
		const WolfStakingRewardsovfdMwE = await WolfStakingRewards.new(stringvWPOUOq, stringWKDF8nw, uintp6WSc4H, {from: accounts[1]});
		const uintyU7U1ip = BigInt("1575")
		await WolfStakingRewardsovfdMwE.nonReentrant.call({from: accounts[5]});
		const uint256grArEG1 = await WolfStakingRewardsovfdMwE.lastTimeRewardApplicable.call(uintyU7U1ip, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsovfdMwE.onlyRewardsDistribution.call({from: accounts[2]});
		const uint8Cmc0Y0V = await WolfStakingRewardsovfdMwE.decimals.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdBdL6Tj = "PPhtz9jiLlNRSn3RX6sr74Dw5yfqxo6OHaRYnWa0c2b6Q9kYd0eKL5VguhnXj1W"
		const stringFh4iyHG = "klGhNN5xCYla4vOoKYg3sBuYdQddpjTmdh7qGVEV5V2J9tTYjBANN86Uc"
		const uintRxO9QKF = BigInt("90")
		const WolfStakingRewardsRhPvgQ = await WolfStakingRewards.new(stringdBdL6Tj, stringFh4iyHG, uintRxO9QKF, {from: accounts[4]});
		const uintVyhv5e9 = BigInt("2018")
		const uintuLWLMfE = BigInt("1201")
		const uintNH8L80M = BigInt("598")
		const uintx5OMCc = BigInt("1470")
		const uint8FAAGXwk = await WolfStakingRewardsRhPvgQ.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256qwaE8fr = await WolfStakingRewardsRhPvgQ.getRewardForDuration.call(uintVyhv5e9, {from: accounts[0]});
		const uint256VunOuIx = await WolfStakingRewardsRhPvgQ.lastTimeRewardApplicable.call(uintuLWLMfE, {from: accounts[3]});
		const uint256kWSTEW8 = await WolfStakingRewardsRhPvgQ.withdrawRemainingBalance.call(uintx5OMCc, uintNH8L80M, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHw21ChS = "ChDRHyD9BL6X69QptLm0vexriNDlK8AhGAcAyx4Qxukiow7FOXa"
		const stringRMeXg6 = "vw9W0es3lj6xslldwhRnuLoWiEq1vrZMXn6iS9hbI64L5XCxJLwWbEvvX95oQVbDfJekpV"
		const uintqHnzEsw = BigInt("62")
		const WolfStakingRewardsczbJzYY = await WolfStakingRewards.new(stringHw21ChS, stringRMeXg6, uintqHnzEsw, {from: accounts[1]});
		const uintC8JXfVo = BigInt("153")
		const addressC81iZig = accounts[5]
		const uintqQnBtNR = BigInt("827")
		const addressFUMp7qm = accounts[3]
		const uintW3mL2IY = BigInt("1724")
		const uint256zukL6F = await WolfStakingRewardsczbJzYY.earned.call(addressC81iZig, uintC8JXfVo, {from: "0x0000000000000000000000000000000000000001"});
		const addressLNRBrOn = await WolfStakingRewardsczbJzYY.updateReward.call(addressFUMp7qm, uintqQnBtNR, {from: accounts[5]});
		const uint256It2p4ro = await WolfStakingRewardsczbJzYY.totalSupplyPerPool.call(uintW3mL2IY, {from: accounts[4]});
	});
})