const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addressmESmIlU = accounts[4]
		const addressNQkFdFj = accounts[1]
		const StakingDextokenWRMXIlN = await StakingDextoken.new(addressmESmIlU, addressNQkFdFj, {from: "0x0000000000000000000000000000000000000001"});
		const addressvDnjUS3 = accounts[3]
		const uintyoxXNNO = await StakingDextokenWRMXIlN.getStartTimestamp.call({from: accounts[2]});
		const uintQV7wUQb = await StakingDextokenWRMXIlN.balanceOf.call(addressvDnjUS3, {from: accounts[0]});
		const uintSHkATiY = await StakingDextokenWRMXIlN.getEndTimestamp.call({from: accounts[2]});
	});

	it('test for StakingDextoken', async () => {
		const addressw9646Ro = accounts[3]
		const address938paL = accounts[3]
		const StakingDextokenOJHOB3f = await StakingDextoken.new(addressw9646Ro, address938paL, {from: accounts[3]});
		const addressDfZDbK9 = accounts[3]
//		const addressartGES = await StakingDextokenOJHOB3f.setBeneficial.call(addressDfZDbK9, {from: accounts[5]});
//		const uintbsZc30c = await StakingDextokenOJHOB3f.getStartTimestamp.call({from: accounts[0]});

		await expect(StakingDextokenOJHOB3f.setBeneficial.call(addressDfZDbK9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressLw0gJMo = accounts[4]
		const addresskOQzSMm = accounts[0]
		const StakingDextokenl6GWcg = await StakingDextoken.new(addressLw0gJMo, addresskOQzSMm, {from: accounts[2]});
		const uintvYq6rhg = await StakingDextokenl6GWcg.getEndTimestamp.call({from: accounts[2]});
//		await StakingDextokenl6GWcg.claim.call({from: accounts[3]});
//		const uintuKZSc8 = await StakingDextokenl6GWcg.totalRewards.call({from: accounts[1]});

		assert.equal(uintvYq6rhg, BigInt("0"))
		await expect(StakingDextokenl6GWcg.claim.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressUku4gd = accounts[5]
		const addresserr2vg5 = accounts[1]
		const StakingDextokenxpWRaG0 = await StakingDextoken.new(addressUku4gd, addresserr2vg5, {from: accounts[0]});
		const addresssBLZjWW = accounts[3]
		const addressRoRKIxU = accounts[4]
		const uintu5t8Sm9 = await StakingDextokenxpWRaG0.rewardPerToken.call({from: accounts[4]});
		const uintl6YP8cd = await StakingDextokenxpWRaG0.getEndTimestamp.call({from: accounts[5]});
		const uintgwv97Wr = await StakingDextokenxpWRaG0.totalRewards.call({from: accounts[1]});
//		await StakingDextokenxpWRaG0.notifyRewards.call({from: accounts[3]});
//		const boolmlMPffr = await StakingDextokenxpWRaG0.unfreezeAccount.call(addresssBLZjWW, {from: accounts[1]});
//		const boolmMczhU = await StakingDextokenxpWRaG0.unfreezeAccount.call(addressRoRKIxU, {from: accounts[4]});

		assert.equal(uintgwv97Wr, BigInt("0"))
		assert.equal(uintl6YP8cd, BigInt("0"))
		assert.equal(uintu5t8Sm9, BigInt("0"))
		await expect(StakingDextokenxpWRaG0.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressAdDI5pj = accounts[4]
		const addressMDlQ5KH = accounts[4]
		const StakingDextokennIqIzIp = await StakingDextoken.new(addressAdDI5pj, addressMDlQ5KH, {from: accounts[3]});
		const addressN42PADI = accounts[3]
		const uintV5N6rcO = await StakingDextokennIqIzIp.rewardOf.call(addressN42PADI, {from: accounts[5]});
		const uintn4iQToV = await StakingDextokennIqIzIp.remainingRewards.call({from: accounts[3]});
		const uintQOjleX = await StakingDextokennIqIzIp.getEndTimestamp.call({from: accounts[3]});
		const uintnQJaleL = await StakingDextokennIqIzIp.getEndTimestamp.call({from: accounts[1]});
		const uintO1gu4ZX = await StakingDextokennIqIzIp.totalRewards.call({from: accounts[2]});

		assert.equal(uintO1gu4ZX, BigInt("0"))
		assert.equal(uintQOjleX, BigInt("0"))
		assert.equal(uintV5N6rcO, BigInt("0"))
		assert.equal(uintn4iQToV, BigInt("0"))
		assert.equal(uintnQJaleL, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressQm7ubkN = accounts[4]
		const addressOMg2TZA = accounts[0]
		const StakingDextokenl6GWcg = await StakingDextoken.new(addressQm7ubkN, addressOMg2TZA, {from: accounts[2]});
		const addresszw3vsUi = accounts[4]
		const uintvYq6rhg = await StakingDextokenl6GWcg.getEndTimestamp.call({from: accounts[2]});
		const uintUs9e2z7 = await StakingDextokenl6GWcg.getWithdrawalOf.call(addresszw3vsUi, {from: accounts[0]});
//		await StakingDextokenl6GWcg.claim.call({from: accounts[3]});
//		const uintciE68Ax = await StakingDextokenl6GWcg.totalRewards.call({from: accounts[4]});
//		const uintuKZSc8 = await StakingDextokenl6GWcg.totalRewards.call({from: accounts[1]});

		assert.equal(uintUs9e2z7, BigInt("0"))
		assert.equal(uintvYq6rhg, BigInt("0"))
		await expect(StakingDextokenl6GWcg.claim.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressFQnXOt8 = accounts[2]
		const addressegMt2dd = accounts[5]
		const StakingDextokenr5djht = await StakingDextoken.new(addressFQnXOt8, addressegMt2dd, {from: accounts[0]});
		const addressC89DDGo = accounts[1]
		const addressckwYW3P = accounts[0]
		const uintenJeFgS = await StakingDextokenr5djht.getStartTimestamp.call({from: accounts[5]});
//		const addressvJuSTb = await StakingDextokenr5djht.setBeneficial.call(addressC89DDGo, {from: accounts[2]});
//		const uintp9UZmtT = await StakingDextokenr5djht.remainingRewards.call({from: accounts[4]});
//		const uintdYMFPx6 = await StakingDextokenr5djht.totalRewards.call({from: accounts[0]});
//		const uintPj75Aeq = await StakingDextokenr5djht.totalRewards.call({from: accounts[2]});
//		const boolbEDRw72 = await StakingDextokenr5djht.unfreezeAccount.call(addressckwYW3P, {from: accounts[2]});

		assert.equal(uintenJeFgS, BigInt("0"))
		await expect(StakingDextokenr5djht.setBeneficial.call(addressC89DDGo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresstbfC3qI = accounts[3]
		const addresstmSbTYq = accounts[3]
		const StakingDextokenOJHOB3f = await StakingDextoken.new(addresstbfC3qI, addresstmSbTYq, {from: accounts[3]});
		const addressWDqkQEK = accounts[2]
		const addressbJ97sHu = accounts[4]
		const uintRJy0hdX = await StakingDextokenOJHOB3f.totalRewards.call({from: accounts[1]});
		const uintgVHDd0o = await StakingDextokenOJHOB3f.getClaimOf.call(addressWDqkQEK, {from: "0x0000000000000000000000000000000000000001"});
//		const addressartGES = await StakingDextokenOJHOB3f.setBeneficial.call(addressbJ97sHu, {from: accounts[5]});
//		const uintbsZc30c = await StakingDextokenOJHOB3f.getStartTimestamp.call({from: accounts[0]});

		assert.equal(uintRJy0hdX, BigInt("0"))
		assert.equal(uintgVHDd0o, BigInt("0"))
		await expect(StakingDextokenOJHOB3f.setBeneficial.call(addressbJ97sHu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressNZZEU3e = accounts[4]
		const addressFME2M9g = accounts[1]
		const StakingDextokenRme7oi5 = await StakingDextoken.new(addressNZZEU3e, addressFME2M9g, {from: accounts[5]});
		const addresszCrZrP = "0x0000000000000000000000000000000000000001"
		const uintMQNjd0E = await StakingDextokenRme7oi5.getEndTimestamp.call({from: accounts[2]});
		const uinticyOTfv = await StakingDextokenRme7oi5.rewardPerToken.call({from: accounts[4]});
//		const addressxEYqM8 = await StakingDextokenRme7oi5.notFrozen.call(addresszCrZrP, {from: accounts[1]});
//		const uintySQ1G89 = await StakingDextokenRme7oi5.remainingRewards.call({from: accounts[0]});
//		const uintyHuPhME = await StakingDextokenRme7oi5.getTotalStakes.call({from: accounts[5]});

		assert.equal(uintMQNjd0E, BigInt("0"))
		assert.equal(uinticyOTfv, BigInt("0"))
		await expect(StakingDextokenRme7oi5.notFrozen.call(addresszCrZrP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressxGzc9jo = accounts[4]
		const addressbEO5wsu = accounts[0]
		const StakingDextokenl6GWcg = await StakingDextoken.new(addressxGzc9jo, addressbEO5wsu, {from: accounts[2]});
		const uintYyElYC = BigInt("1743")
		const addressIDtrUv = accounts[3]
//		const addressOKoxAhN = await StakingDextokenl6GWcg.capture.call(addressIDtrUv, uintYyElYC, {from: accounts[2]});
//		await StakingDextokenl6GWcg.claim.call({from: accounts[3]});

		await expect(StakingDextokenl6GWcg.capture.call(addressIDtrUv, uintYyElYC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressm5M0RyN = accounts[4]
		const addressFeIy67p = accounts[0]
		const StakingDextokenl6GWcg = await StakingDextoken.new(addressm5M0RyN, addressFeIy67p, {from: accounts[2]});
		const addressiJjdHXg = accounts[5]
		const uintPGpsD6k = await StakingDextokenl6GWcg.stakeOf.call(addressiJjdHXg, {from: "0x0000000000000000000000000000000000000001"});
		const uintTgTq8Wd = await StakingDextokenl6GWcg.remainingRewards.call({from: accounts[1]});
//		await StakingDextokenl6GWcg.claim.call({from: accounts[3]});

		assert.equal(uintPGpsD6k, BigInt("0"))
		assert.equal(uintTgTq8Wd, BigInt("0"))
		await expect(StakingDextokenl6GWcg.claim.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressHBBOTYq = accounts[4]
		const addressUh3Qgco = accounts[0]
		const StakingDextokenl6GWcg = await StakingDextoken.new(addressHBBOTYq, addressUh3Qgco, {from: accounts[2]});
		const uintxSh3db2 = BigInt("565")
//		const uintCTCKk9x = await StakingDextokenl6GWcg.withdraw.call(uintxSh3db2, {from: accounts[1]});
//		await StakingDextokenl6GWcg.claim.call({from: accounts[3]});

		await expect(StakingDextokenl6GWcg.withdraw.call(uintxSh3db2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresseVtJMab = accounts[2]
		const addressFsnpAH = accounts[5]
		const StakingDextokendHuFj7M = await StakingDextoken.new(addresseVtJMab, addressFsnpAH, {from: accounts[3]});
		const addressYon44xs = accounts[5]
		const addressomfvZPR = accounts[2]
//		await StakingDextokendHuFj7M.notifyRewards.call({from: accounts[3]});
//		const uintbD7ZcUI = await StakingDextokendHuFj7M.remainingRewards.call({from: accounts[0]});
//		const addressBrYeLMY = await StakingDextokendHuFj7M.setBeneficial.call(addressYon44xs, {from: accounts[5]});
//		const uintGTSPxZ9 = await StakingDextokendHuFj7M.earned.call(addressomfvZPR, {from: accounts[0]});

		await expect(StakingDextokendHuFj7M.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressuieqoFA = accounts[4]
		const addressi99Hwgn = accounts[0]
		const StakingDextokenl6GWcg = await StakingDextoken.new(addressuieqoFA, addressi99Hwgn, {from: accounts[2]});
		const uintCk2BjD = BigInt("475")
		const uintmenXNJo = BigInt("479")
		const uintfP9C1C8 = BigInt("1582")
		const uintkldg4Eo = BigInt("54")
//		const uintNt5KHi = await StakingDextokenl6GWcg.setRewardRound.call(uintkldg4Eo, uintfP9C1C8, uintmenXNJo, uintCk2BjD, {from: accounts[2]});
//		await StakingDextokenl6GWcg.claim.call({from: accounts[3]});

		await expect(StakingDextokenl6GWcg.setRewardRound.call(uintkldg4Eo, uintfP9C1C8, uintmenXNJo, uintCk2BjD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressjWrLwmE = accounts[4]
		const addressinIV0Uv = accounts[0]
		const StakingDextokenYMFFKA5 = await StakingDextoken.new(addressjWrLwmE, addressinIV0Uv, {from: accounts[1]});
		const uintVxQvCfJ = BigInt("1068")
		const uintapZ3Y7x = BigInt("906")
		const addressqq1fvx = accounts[4]
		const addressyOA3wyk = accounts[3]
//		const uintQCAFfuL = await StakingDextokenYMFFKA5.deposit.call(uintVxQvCfJ, {from: accounts[5]});
//		const uintbH5Zde = await StakingDextokenYMFFKA5.getTotalStakes.call({from: accounts[4]});
//		const addressXLDwpea = await StakingDextokenYMFFKA5.capture.call(addressqq1fvx, uintapZ3Y7x, {from: accounts[2]});
//		const boolUlTQPr4 = await StakingDextokenYMFFKA5.freezeAccount.call(addressyOA3wyk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenYMFFKA5.deposit.call(uintVxQvCfJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressRIcIvU0 = accounts[2]
		const addressQtN2Tcp = accounts[5]
		const StakingDextokendHuFj7M = await StakingDextoken.new(addressRIcIvU0, addressQtN2Tcp, {from: accounts[3]});
		const addressTnbjAlW = accounts[2]
		const addressoAs77x = "0x0000000000000000000000000000000000000001"
		const boolUCdxqkm = await StakingDextokendHuFj7M.freezeAccount.call(addressTnbjAlW, {from: accounts[3]});
//		await StakingDextokendHuFj7M.notifyRewards.call({from: accounts[3]});
//		const boolNzKR21W = await StakingDextokendHuFj7M.freezeAccount.call(addressoAs77x, {from: accounts[0]});

		assert.equal(boolUCdxqkm, true)
		await expect(StakingDextokendHuFj7M.notifyRewards.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresshJ8x7OD = accounts[4]
		const addressokWa8YT = accounts[0]
		const StakingDextokenl6GWcg = await StakingDextoken.new(addresshJ8x7OD, addressokWa8YT, {from: accounts[2]});
		const uint5yHrBC = BigInt("840")
		const addresssnLRrQ = accounts[0]
		const uintr8uh2WO = BigInt("1759")
//		const addressQjvYImH = await StakingDextokenl6GWcg.capture.call(addresssnLRrQ, uint5yHrBC, {from: accounts[2]});
//		const uintMmWOJZG = await StakingDextokenl6GWcg.withdraw.call(uintr8uh2WO, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenl6GWcg.capture.call(addresssnLRrQ, uint5yHrBC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressbIvQBrS = accounts[4]
		const addressnYGfhiv = accounts[0]
		const StakingDextokenl6GWcg = await StakingDextoken.new(addressbIvQBrS, addressnYGfhiv, {from: accounts[2]});
		const addresscU3xA2F = accounts[4]
		const uintgbP4smk = BigInt("1750")
//		const boolBhV70zC = await StakingDextokenl6GWcg.unfreezeAccount.call(addresscU3xA2F, {from: accounts[2]});
//		const uintMmWOJZG = await StakingDextokenl6GWcg.withdraw.call(uintgbP4smk, {from: "0x0000000000000000000000000000000000000001"});

		await expect(StakingDextokenl6GWcg.unfreezeAccount.call(addresscU3xA2F, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressPAD5wL4 = accounts[4]
		const addresso3Vgaw0 = accounts[3]
		const StakingDextokenExABoLT = await StakingDextoken.new(addressPAD5wL4, addresso3Vgaw0, {from: accounts[0]});
		const uinttQ1xEOX = BigInt("1779")
		const addressF7Oz40 = accounts[4]
		const addressTIZCDOg = accounts[3]
//		const addressfmLRO2z = await StakingDextokenExABoLT.capture.call(addressF7Oz40, uinttQ1xEOX, {from: accounts[0]});
//		const uintdVQygii = await StakingDextokenExABoLT.getClaimOf.call(addressTIZCDOg, {from: accounts[3]});
//		const uintRakoLYc = await StakingDextokenExABoLT.totalRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint9q4jSJ = await StakingDextokenExABoLT.rewardPerToken.call({from: accounts[2]});

		await expect(StakingDextokenExABoLT.capture.call(addressF7Oz40, uinttQ1xEOX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressKdK67WN = accounts[4]
		const addressqM4qrE = accounts[0]
		const StakingDextokenl6GWcg = await StakingDextoken.new(addressKdK67WN, addressqM4qrE, {from: accounts[2]});
		const addressiIYBVOx = accounts[0]
		const uintmKDocKK = await StakingDextokenl6GWcg.remainingRewards.call({from: accounts[2]});
		const uintV0WPjnQ = await StakingDextokenl6GWcg.remainingRewards.call({from: accounts[4]});
		const addressihR5zio = await StakingDextokenl6GWcg.setBeneficial.call(addressiIYBVOx, {from: accounts[2]});

		assert.equal(uintV0WPjnQ, BigInt("0"))
		assert.equal(uintmKDocKK, BigInt("0"))
	});
})