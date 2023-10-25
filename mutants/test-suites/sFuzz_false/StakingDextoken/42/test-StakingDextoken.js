const StakingDextoken = artifacts.require("StakingDextoken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('StakingDextoken', (accounts) => {
	it('test for StakingDextoken', async () => {
		const addresszlyxVpK = accounts[1]
		const addressnbliKt = accounts[0]
		const StakingDextokengZj7Xxo = await StakingDextoken.new(addresszlyxVpK, addressnbliKt, {from: accounts[3]});
		const uintzykJmtg = BigInt("875")
		const uintfpLjBn0 = BigInt("1038")
		const addressZeUIVvm = accounts[0]
		const addressZh2PyYm = accounts[3]
//		const uintK9rl1SS = await StakingDextokengZj7Xxo.withdraw.call(uintzykJmtg, {from: accounts[4]});
//		const uintXbbRXDS = await StakingDextokengZj7Xxo.getTotalStakes.call({from: accounts[0]});
//		const uinttlkzgET = await StakingDextokengZj7Xxo.deposit.call(uintfpLjBn0, {from: accounts[3]});
//		const uintK2Q4zH = await StakingDextokengZj7Xxo.getTotalStakes.call({from: accounts[1]});
//		const uintQb7naV = await StakingDextokengZj7Xxo.getClaimOf.call(addressZeUIVvm, {from: "0x0000000000000000000000000000000000000001"});
//		const uintVX9O6nC = await StakingDextokengZj7Xxo.getWithdrawalOf.call(addressZh2PyYm, {from: accounts[1]});

		await expect(StakingDextokengZj7Xxo.withdraw.call(uintzykJmtg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressGlNwwx6 = accounts[0]
		const addressChWnogl = accounts[4]
		const StakingDextokenn2jpRWN = await StakingDextoken.new(addressGlNwwx6, addressChWnogl, {from: accounts[2]});
		const addresswY0x22n = accounts[2]
		const addressPwTZelo = accounts[2]
		const addressYzWCL7O = accounts[0]
		const uintbIdcOW4 = await StakingDextokenn2jpRWN.totalRewards.call({from: accounts[2]});
		const uintMmspCzf = await StakingDextokenn2jpRWN.balanceOf.call(addresswY0x22n, {from: accounts[3]});
		const uintSriYdgF = await StakingDextokenn2jpRWN.balanceOf.call(addressPwTZelo, {from: accounts[3]});
//		const boolzoZyvaQ = await StakingDextokenn2jpRWN.freezeAccount.call(addressYzWCL7O, {from: accounts[5]});

		assert.equal(uintMmspCzf, BigInt("0"))
		assert.equal(uintSriYdgF, BigInt("0"))
		assert.equal(uintbIdcOW4, BigInt("0"))
		await expect(StakingDextokenn2jpRWN.freezeAccount.call(addressYzWCL7O, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressw3oG4K8 = accounts[4]
		const addressGlxNDuQ = accounts[3]
		const StakingDextokennBwo1NJ = await StakingDextoken.new(addressw3oG4K8, addressGlxNDuQ, {from: accounts[4]});
		const uintYhlHjQb = await StakingDextokennBwo1NJ.getTotalStakes.call({from: accounts[4]});
		const uintQC1rWNE = await StakingDextokennBwo1NJ.getStartTimestamp.call({from: accounts[5]});

		assert.equal(uintQC1rWNE, BigInt("0"))
		assert.equal(uintYhlHjQb, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addresshiRUlsn = accounts[3]
		const addressURt9BGV = "0x0000000000000000000000000000000000000001"
		const StakingDextokenAR7JqTo = await StakingDextoken.new(addresshiRUlsn, addressURt9BGV, {from: accounts[5]});
		const addresseiwQJ44 = accounts[0]
		const addressTArVvKO = accounts[1]
		const uintufAqFVX = BigInt("1958")
		const uintDrzyzIC = BigInt("1736")
		const uintpIu66Hx = BigInt("564")
		const uintCTJMQE4 = BigInt("1117")
		const addressDKNsYww = accounts[4]
		const uintV2y2jlq = await StakingDextokenAR7JqTo.stakeOf.call(addresseiwQJ44, {from: accounts[2]});
//		const boolYGuv5r = await StakingDextokenAR7JqTo.freezeAccount.call(addressTArVvKO, {from: accounts[4]});
//		await StakingDextokenAR7JqTo.notifyRewards.call({from: accounts[0]});
//		const uintJv1eotP = await StakingDextokenAR7JqTo.setRewardRound.call(uintCTJMQE4, uintpIu66Hx, uintDrzyzIC, uintufAqFVX, {from: accounts[3]});
//		const addressnCLURbw = await StakingDextokenAR7JqTo.setBeneficial.call(addressDKNsYww, {from: accounts[3]});

		assert.equal(uintV2y2jlq, BigInt("0"))
		await expect(StakingDextokenAR7JqTo.freezeAccount.call(addressTArVvKO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressv9NMsNG = accounts[0]
		const addresshoCVIiD = accounts[3]
		const StakingDextokenIkc5uEB = await StakingDextoken.new(addressv9NMsNG, addresshoCVIiD, {from: accounts[1]});
		const addresswBWfn1f = accounts[1]
		const uintdUbI6i1 = BigInt("427")
		const uintnAEwDcU = BigInt("1330")
		const uintXMkbFEu = BigInt("1771")
		const uintPvotl0c = BigInt("400")
		const addressZqJNZRr = accounts[0]
		const uintaX9upae = await StakingDextokenIkc5uEB.earned.call(addresswBWfn1f, {from: accounts[3]});
		const uintl16Kler = await StakingDextokenIkc5uEB.lastTimeRewardApplicable.call({from: accounts[1]});
		const uintaSzGimJ = await StakingDextokenIkc5uEB.totalRewards.call({from: accounts[3]});
//		const uintlfIxQwv = await StakingDextokenIkc5uEB.setRewardRound.call(uintPvotl0c, uintXMkbFEu, uintnAEwDcU, uintdUbI6i1, {from: accounts[1]});
//		const boolzAJOUQQ = await StakingDextokenIkc5uEB.unfreezeAccount.call(addressZqJNZRr, {from: accounts[0]});

		assert.equal(uintaSzGimJ, BigInt("0"))
		assert.equal(uintaX9upae, BigInt("0"))
		assert.equal(uintl16Kler, BigInt("0"))
		await expect(StakingDextokenIkc5uEB.setRewardRound.call(uintPvotl0c, uintXMkbFEu, uintnAEwDcU, uintdUbI6i1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressneVpd8b = accounts[3]
		const addressGkovFWx = accounts[1]
		const StakingDextokenz58mUyz = await StakingDextoken.new(addressneVpd8b, addressGkovFWx, {from: accounts[0]});
		const uintV5piqcL = BigInt("2000")
		const uintyuTQOIw = BigInt("1941")
		const uinteMc8skp = BigInt("548")
		const uintCWp21va = BigInt("559")
		const addressyVnosRb = accounts[5]
		const uintfTVKz2 = await StakingDextokenz58mUyz.setRewardRound.call(uintCWp21va, uinteMc8skp, uintyuTQOIw, uintV5piqcL, {from: accounts[0]});
		const uintqI1R8Df = await StakingDextokenz58mUyz.getWithdrawalOf.call(addressyVnosRb, {from: "0x0000000000000000000000000000000000000001"});
		const uintFPdh3cs = await StakingDextokenz58mUyz.getStartTimestamp.call({from: accounts[3]});

		assert.equal(uintFPdh3cs, BigInt("0"))
		assert.equal(uintqI1R8Df, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressPnwn1WM = accounts[0]
		const addressk2BU0JX = accounts[2]
		const StakingDextokenbNEeA2V = await StakingDextoken.new(addressPnwn1WM, addressk2BU0JX, {from: accounts[1]});
		const uinttHmL34n = BigInt("1107")
		const addressclehISO = accounts[3]
//		const uintVS3XuVb = await StakingDextokenbNEeA2V.deposit.call(uinttHmL34n, {from: accounts[3]});
//		const uintjr49mI = await StakingDextokenbNEeA2V.remainingRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressV5lTnr3 = await StakingDextokenbNEeA2V.setBeneficial.call(addressclehISO, {from: accounts[3]});
//		const uintLrNcGu6 = await StakingDextokenbNEeA2V.totalRewards.call({from: accounts[4]});

		await expect(StakingDextokenbNEeA2V.deposit.call(uinttHmL34n, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressCYmryju = accounts[4]
		const addresszAYnEH7 = accounts[3]
		const StakingDextokennBwo1NJ = await StakingDextoken.new(addressCYmryju, addresszAYnEH7, {from: accounts[4]});
		const uintQC1rWNE = await StakingDextokennBwo1NJ.getStartTimestamp.call({from: accounts[5]});
//		await StakingDextokennBwo1NJ.claim.call({from: accounts[5]});
//		const uintOx5IOsj = await StakingDextokennBwo1NJ.getStartTimestamp.call({from: accounts[1]});

		assert.equal(uintQC1rWNE, BigInt("0"))
		await expect(StakingDextokennBwo1NJ.claim.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressU6kY7Wa = accounts[0]
		const addressJLQwxS6 = accounts[2]
		const StakingDextokenbNEeA2V = await StakingDextoken.new(addressU6kY7Wa, addressJLQwxS6, {from: accounts[1]});
		const addressPf3fb5I = accounts[3]
		const uintjr49mI = await StakingDextokenbNEeA2V.remainingRewards.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressV5lTnr3 = await StakingDextokenbNEeA2V.setBeneficial.call(addressPf3fb5I, {from: accounts[3]});
//		const uintLrNcGu6 = await StakingDextokenbNEeA2V.totalRewards.call({from: accounts[4]});

		assert.equal(uintjr49mI, BigInt("0"))
		await expect(StakingDextokenbNEeA2V.setBeneficial.call(addressPf3fb5I, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressGIXHnWM = accounts[5]
		const addressGcrVmXt = "0x0000000000000000000000000000000000000001"
		const StakingDextokenWkcHZCk = await StakingDextoken.new(addressGIXHnWM, addressGcrVmXt, {from: accounts[0]});
		const addresssss7B3H = accounts[0]
		const uintemZhUI2 = BigInt("931")
		const addressTBmExo0 = accounts[2]
//		const addressdP0Yojm = await StakingDextokenWkcHZCk.updateReward.call(addresssss7B3H, {from: accounts[1]});
//		const uintL0F83aP = await StakingDextokenWkcHZCk.rewardPerToken.call({from: accounts[5]});
//		const uintApz9VD0 = await StakingDextokenWkcHZCk.deposit.call(uintemZhUI2, {from: accounts[2]});
//		const uint0JyzST = await StakingDextokenWkcHZCk.remainingRewards.call({from: accounts[4]});
//		const uintw0sm22 = await StakingDextokenWkcHZCk.earned.call(addressTBmExo0, {from: accounts[0]});

		await expect(StakingDextokenWkcHZCk.updateReward.call(addresssss7B3H, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresslkQUQI6 = accounts[4]
		const addressMtLaoyu = accounts[3]
		const StakingDextokennBwo1NJ = await StakingDextoken.new(addresslkQUQI6, addressMtLaoyu, {from: accounts[4]});
		const uintLdVyZd = BigInt("1036")
		const addressTAWKY5f = accounts[3]
		const uintULUf3bJ = await StakingDextokennBwo1NJ.getTotalStakes.call({from: accounts[0]});
		const uintVemYWlQ = await StakingDextokennBwo1NJ.getEndTimestamp.call({from: accounts[5]});
//		const addressF2Ihtja = await StakingDextokennBwo1NJ.capture.call(addressTAWKY5f, uintLdVyZd, {from: accounts[4]});
//		const uintYhlHjQb = await StakingDextokennBwo1NJ.getTotalStakes.call({from: accounts[4]});
//		const uintQC1rWNE = await StakingDextokennBwo1NJ.getStartTimestamp.call({from: accounts[5]});

		assert.equal(uintULUf3bJ, BigInt("0"))
		assert.equal(uintVemYWlQ, BigInt("0"))
		await expect(StakingDextokennBwo1NJ.capture.call(addressTAWKY5f, uintLdVyZd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresshY89TVu = accounts[4]
		const address4Tm0MF = accounts[3]
		const StakingDextokennBwo1NJ = await StakingDextoken.new(addresshY89TVu, address4Tm0MF, {from: accounts[4]});
		const addressM1hjTVh = accounts[2]
		const uintZv4I8SA = await StakingDextokennBwo1NJ.rewardOf.call(addressM1hjTVh, {from: accounts[1]});
		const uintQC1rWNE = await StakingDextokennBwo1NJ.getStartTimestamp.call({from: accounts[5]});

		assert.equal(uintQC1rWNE, BigInt("0"))
		assert.equal(uintZv4I8SA, BigInt("0"))
	});

	it('test for StakingDextoken', async () => {
		const addressM3HbeZO = accounts[4]
		const addressM6q8Dfz = accounts[3]
		const StakingDextokennBwo1NJ = await StakingDextoken.new(addressM3HbeZO, addressM6q8Dfz, {from: accounts[4]});
//		await StakingDextokennBwo1NJ.notifyRewards.call({from: accounts[4]});
//		const uintXjWZXYp = await StakingDextokennBwo1NJ.getTotalStakes.call({from: accounts[1]});
//		const uintQC1rWNE = await StakingDextokennBwo1NJ.getStartTimestamp.call({from: accounts[5]});
//		const uintd0cbhaQ = await StakingDextokennBwo1NJ.totalRewards.call({from: accounts[2]});

		await expect(StakingDextokennBwo1NJ.notifyRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressTZFQYPP = accounts[2]
		const addressrwFpEMo = accounts[0]
		const StakingDextokenbBlvr7x = await StakingDextoken.new(addressTZFQYPP, addressrwFpEMo, {from: accounts[1]});
		const addressMTSvyn = accounts[4]
		const addressNX80Szw = accounts[1]
		const addressuY0dbRF = accounts[5]
		const addressjnAHl2Q = "0x0000000000000000000000000000000000000001"
		const uintzmieqxb = BigInt("404")
		const addressCpHs6M = accounts[1]
		const uintT8h2iuL = await StakingDextokenbBlvr7x.getClaimOf.call(addressMTSvyn, {from: accounts[0]});
		const address9FmBWD = await StakingDextokenbBlvr7x.setBeneficial.call(addressNX80Szw, {from: accounts[1]});
//		const addressBRI8LX4 = await StakingDextokenbBlvr7x.updateReward.call(addressuY0dbRF, {from: accounts[4]});
//		const uintvjUke92 = await StakingDextokenbBlvr7x.earned.call(addressjnAHl2Q, {from: accounts[1]});
//		await StakingDextokenbBlvr7x.notifyRewards.call({from: accounts[4]});
//		const addressOqtp47B = await StakingDextokenbBlvr7x.capture.call(addressCpHs6M, uintzmieqxb, {from: accounts[5]});

		assert.equal(uintT8h2iuL, BigInt("0"))
		await expect(StakingDextokenbBlvr7x.updateReward.call(addressuY0dbRF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addresscXKAwSH = accounts[4]
		const addressd4nrYL = accounts[3]
		const StakingDextokennBwo1NJ = await StakingDextoken.new(addresscXKAwSH, addressd4nrYL, {from: accounts[4]});
		const addressVwQl1ND = accounts[4]
		const addressCryZZwg = accounts[2]
		const uintGSD7kFT = await StakingDextokennBwo1NJ.lastTimeRewardApplicable.call({from: accounts[1]});
		const uintQC1rWNE = await StakingDextokennBwo1NJ.getStartTimestamp.call({from: accounts[5]});
		const boolRZqCfzK = await StakingDextokennBwo1NJ.freezeAccount.call(addressVwQl1ND, {from: accounts[4]});
//		const addressToWQQ5f = await StakingDextokennBwo1NJ.setBeneficial.call(addressCryZZwg, {from: accounts[2]});

		assert.equal(boolRZqCfzK, true)
		assert.equal(uintGSD7kFT, BigInt("0"))
		assert.equal(uintQC1rWNE, BigInt("0"))
		await expect(StakingDextokennBwo1NJ.setBeneficial.call(addressCryZZwg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressgffblIw = accounts[4]
		const addressvMe7nA = accounts[3]
		const StakingDextokennBwo1NJ = await StakingDextoken.new(addressgffblIw, addressvMe7nA, {from: accounts[4]});
		const addressMNhCqGT = accounts[1]
		const addressqU7YFgf = accounts[1]
		const uinteYEx8Wj = BigInt("1318")
		const uintn32Qzs = await StakingDextokennBwo1NJ.earned.call(addressMNhCqGT, {from: accounts[4]});
//		const boolAgtDozF = await StakingDextokennBwo1NJ.unfreezeAccount.call(addressqU7YFgf, {from: accounts[4]});
//		const uintB9oELZd = await StakingDextokennBwo1NJ.withdraw.call(uinteYEx8Wj, {from: accounts[3]});

		assert.equal(uintn32Qzs, BigInt("0"))
		await expect(StakingDextokennBwo1NJ.unfreezeAccount.call(addressqU7YFgf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressrHilSDe = accounts[4]
		const addressZxzFBOe = accounts[3]
		const StakingDextokennBwo1NJ = await StakingDextoken.new(addressrHilSDe, addressZxzFBOe, {from: accounts[4]});
		const uintcbSR7Ey = BigInt("1131")
		const addresss6jZ7Rc = accounts[5]
		const addresseReRFzE = "0x0000000000000000000000000000000000000001"
		const uintrmxPcWS = await StakingDextokennBwo1NJ.lastTimeRewardApplicable.call({from: accounts[0]});
//		await StakingDextokennBwo1NJ.notifyRewards.call({from: accounts[4]});
//		const addressVp66NnQ = await StakingDextokennBwo1NJ.capture.call(addresss6jZ7Rc, uintcbSR7Ey, {from: accounts[4]});
//		const addressthpDIs = await StakingDextokennBwo1NJ.updateReward.call(addresseReRFzE, {from: accounts[4]});

		assert.equal(uintrmxPcWS, BigInt("0"))
		await expect(StakingDextokennBwo1NJ.notifyRewards.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for StakingDextoken', async () => {
		const addressIkNBLVi = accounts[5]
		const addresskxkwlq = accounts[3]
		const StakingDextokenEqlsejJ = await StakingDextoken.new(addressIkNBLVi, addresskxkwlq, {from: "0x0000000000000000000000000000000000000001"});
		const uintKFfVvV8 = BigInt("1192")
		const addressfJxAGfH = accounts[4]
		const uintuNSMgNx = await StakingDextokenEqlsejJ.remainingRewards.call({from: accounts[0]});
		const uintz72HF70 = await StakingDextokenEqlsejJ.withdraw.call(uintKFfVvV8, {from: accounts[2]});
		const uintp1Bu7YR = await StakingDextokenEqlsejJ.rewardOf.call(addressfJxAGfH, {from: accounts[1]});
	});

	it('test for StakingDextoken', async () => {
		const addressWP2iAqy = accounts[4]
		const addressJek6mtM = accounts[3]
		const StakingDextokennBwo1NJ = await StakingDextoken.new(addressWP2iAqy, addressJek6mtM, {from: accounts[4]});
		const uintytXN6BR = BigInt("731")
		const addressOyJayQw = accounts[4]
		const addresshc4SSss = accounts[3]
//		const addressHA2PKGD = await StakingDextokennBwo1NJ.capture.call(addressOyJayQw, uintytXN6BR, {from: accounts[4]});
//		const addressPjNcc4 = await StakingDextokennBwo1NJ.setBeneficial.call(addresshc4SSss, {from: accounts[4]});
//		const uintQC1rWNE = await StakingDextokennBwo1NJ.getStartTimestamp.call({from: accounts[5]});

		await expect(StakingDextokennBwo1NJ.capture.call(addressOyJayQw, uintytXN6BR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})