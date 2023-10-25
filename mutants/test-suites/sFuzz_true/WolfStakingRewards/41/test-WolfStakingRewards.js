const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressFPUk936 = accounts[3]
		const addressF6ZhitM = accounts[5]
		const addressLC7wNnD = accounts[2]
		const WolfStakingRewardsJ5I7jIG = await WolfStakingRewards.new(addressFPUk936, addressF6ZhitM, addressLC7wNnD, {from: accounts[1]});
		const uintpHcZsOF = BigInt("161")
		const addresscS0nO9 = accounts[3]
		const uinth92Iqmc = BigInt("147")
//		const uint8CnABoAu = await WolfStakingRewardsJ5I7jIG.decimals.call({from: accounts[3]});
//		const uint256jaHy71 = await WolfStakingRewardsJ5I7jIG.earned.call(addresscS0nO9, uintpHcZsOF, {from: accounts[4]});
//		const uint256arrayQoDOklP = await WolfStakingRewardsJ5I7jIG.updateNotifyRewardAmount.call(uinth92Iqmc, {from: accounts[3]});
//		const stringwxHr4G1 = await WolfStakingRewardsJ5I7jIG.symbol.call({from: accounts[0]});

		await expect(WolfStakingRewardsJ5I7jIG.decimals.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringk4AACjL = "DVEtaLXaQBPn5zlTerN731P4frp4kk3KIK4E"
		const stringygbqABL = "uPNOwoX33MFOGtF8qhI9PQ1mW3hgGphk6Hm9r03OAnZvTrHKfobFIfWAUNB0Jel8n3GgyoOnMbJ6L7UEneEXWEtJPKpSaMkv9QK"
		const uintinPfChZ = BigInt("254")
		const WolfStakingRewardsr9SLr7V = await WolfStakingRewards.new(stringk4AACjL, stringygbqABL, uintinPfChZ, {from: accounts[3]});
		const uintop4QQsE = BigInt("1758")
		const uintHu1a5P4 = BigInt("962")
		const uintCDPqAa5 = BigInt("1241")
		const uintEjCsIKf = BigInt("321")
		const uintJ5DpA6n = BigInt("81")
		const stringa8we6N = await WolfStakingRewardsr9SLr7V.symbol.call({from: accounts[4]});
		const uint25629Vczu = await WolfStakingRewardsr9SLr7V.withdrawRemainingBalance.call(uintHu1a5P4, uintop4QQsE, {from: accounts[3]});
		const string9YbPuJ = await WolfStakingRewardsr9SLr7V.symbol.call({from: accounts[1]});
		const uint256h2UsFTN = await WolfStakingRewardsr9SLr7V.withdrawRemainingBalance.call(uintEjCsIKf, uintCDPqAa5, {from: accounts[1]});
		const uint256BzSb5vK = await WolfStakingRewardsr9SLr7V.getRewardForDuration.call(uintJ5DpA6n, {from: accounts[3]});
		const stringzy0XL2g = await WolfStakingRewardsr9SLr7V.symbol.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressoA9Oq4 = accounts[0]
		const addressjGJTT5 = accounts[3]
		const addressHOivlHd = accounts[5]
		const WolfStakingRewardsQ9dtgGf = await WolfStakingRewards.new(addressoA9Oq4, addressjGJTT5, addressHOivlHd, {from: accounts[4]});
		const uinttrei0f9 = BigInt("1456")
		const addressHn7xEDT = accounts[5]
		const uintLskDJ7c = BigInt("196")
		const uintgWZj7vG = BigInt("160")
		const uintOnBCQca = BigInt("374")
		const uint256WLBNrQQ = await WolfStakingRewardsQ9dtgGf.balanceOfPerPool.call(addressHn7xEDT, uinttrei0f9, {from: accounts[1]});
//		const uint256q9iCAZw = await WolfStakingRewardsQ9dtgGf.stake.call(uintgWZj7vG, uintLskDJ7c, {from: accounts[2]});
//		const uint256ATRo1YB = await WolfStakingRewardsQ9dtgGf.getRewardForDuration.call(uintOnBCQca, {from: accounts[2]});

		assert.equal(uint256WLBNrQQ, BigInt("0"))
		await expect(WolfStakingRewardsQ9dtgGf.stake.call(uintgWZj7vG, uintLskDJ7c, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringO2hLJWr = "cQ6sywkIynMutfRRHABswtYRbGtp63pVT6Jhuy7K"
		const stringk2Smwx7 = "FuGPt9DMxoAHW32hiS"
		const uintbGoAvgy = BigInt("229")
		const WolfStakingRewardsw7r8ZUA = await WolfStakingRewards.new(stringO2hLJWr, stringk2Smwx7, uintbGoAvgy, {from: accounts[2]});
		const uintYAaw8rT = BigInt("582")
		const uintHCtap00 = BigInt("1903")
		const addressLhJstRt = accounts[0]
		const uint256SyJQopP = await WolfStakingRewardsw7r8ZUA.rewardPerToken.call(uintYAaw8rT, {from: accounts[2]});
		const uint256oT28h9W = await WolfStakingRewardsw7r8ZUA.balanceOfPerPool.call(addressLhJstRt, uintHCtap00, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressqohIShf = accounts[1]
		const addressvTxY3FV = accounts[3]
		const addressbAVyzfw = accounts[1]
		const WolfStakingRewardsen7Tjy2 = await WolfStakingRewards.new(addressqohIShf, addressvTxY3FV, addressbAVyzfw, {from: accounts[4]});
		const uintxUNKgPN = BigInt("1319")
		const uintHBt8Y0D = BigInt("970")
		const uintye6x9K = BigInt("1213")
//		const uint256HLfp8c = await WolfStakingRewardsen7Tjy2.exit.call(uintxUNKgPN, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256PmXAXH0 = await WolfStakingRewardsen7Tjy2.totalSupplyPerPool.call(uintHBt8Y0D, {from: accounts[2]});
//		const uintwCYgWvP = await WolfStakingRewardsen7Tjy2.getReward.call(uintye6x9K, {from: accounts[0]});

		await expect(WolfStakingRewardsen7Tjy2.exit.call(uintxUNKgPN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressIiy7av = accounts[2]
		const addressWNpVOPZ = accounts[4]
		const addressy8Jst3k = accounts[3]
		const WolfStakingRewardsHSzUWjk = await WolfStakingRewards.new(addressIiy7av, addressWNpVOPZ, addressy8Jst3k, {from: accounts[1]});
		const uintBagsMR = BigInt("347")
		const addressd7c4LLv = accounts[0]
		const uintTAbxGGU = BigInt("1433")
		const uint256JLCbriU = await WolfStakingRewardsHSzUWjk.balanceOfPerPool.call(addressd7c4LLv, uintBagsMR, {from: accounts[1]});
//		const uint256arrayUnbqcZA = await WolfStakingRewardsHSzUWjk.updateNotifyRewardAmount.call(uintTAbxGGU, {from: accounts[4]});
//		await WolfStakingRewardsHSzUWjk.onlyRewardsDistribution.call({from: accounts[4]});

		assert.equal(uint256JLCbriU, BigInt("0"))
		await expect(WolfStakingRewardsHSzUWjk.updateNotifyRewardAmount.call(uintTAbxGGU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressrNAg5fa = accounts[2]
		const addressotq1shw = accounts[4]
		const addressYw1qf8i = accounts[2]
		const WolfStakingRewardsge1787R = await WolfStakingRewards.new(addressrNAg5fa, addressotq1shw, addressYw1qf8i, {from: accounts[2]});
		const uintBCSvXs1 = BigInt("306")
		const uintduzK2Gk = BigInt("1986")
		const uintHtMQq4 = BigInt("1172")
		const uintLzsP96 = await WolfStakingRewardsge1787R.getReward.call(uintBCSvXs1, {from: accounts[1]});
		const uintPESCh9K = await WolfStakingRewardsge1787R.getReward.call(uintduzK2Gk, {from: accounts[0]});
		const uintQHD09ep = await WolfStakingRewardsge1787R.getReward.call(uintHtMQq4, {from: accounts[0]});
//		const stringrXVfG5B = await WolfStakingRewardsge1787R.name.call({from: accounts[0]});

		await expect(WolfStakingRewardsge1787R.name.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringyspfo1I = "7ncwsLsf3q4LFcqZNEOOXoLYWeCxDRWqFo6oaqkMtE9a9lYhAeCa7aGEbfVTrC68StntfzZyIPebwsVl"
		const stringqtW01zT = "itgIi9CLaX3ANeqaWSZS6AAUZjoyEKatVX19Qx6jkMtprSQTX6J4xnXdB"
		const uintPNtkbO5 = BigInt("0")
		const WolfStakingRewardsh2S5iCB = await WolfStakingRewards.new(stringyspfo1I, stringqtW01zT, uintPNtkbO5, {from: accounts[5]});
		const uintIIm81xA = BigInt("115")
		const uintdmRqUBi = BigInt("1390")
		const uintfc8bvAn = BigInt("1187")
		const uintG3eh7JJ = BigInt("1981")
		const uint256cmmRk8 = await WolfStakingRewardsh2S5iCB.withdrawRemainingBalance.call(uintdmRqUBi, uintIIm81xA, {from: accounts[1]});
		const uint256qzxfJl = await WolfStakingRewardsh2S5iCB.totalSupplyPerPool.call(uintfc8bvAn, {from: accounts[1]});
		const stringINAPnot = await WolfStakingRewardsh2S5iCB.symbol.call({from: accounts[4]});
		const uint256qMEfRk8 = await WolfStakingRewardsh2S5iCB.getRewardForDuration.call(uintG3eh7JJ, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWbXGyzw = "AcDHagx8nGiD8gRXfPmdHPgLDfCQY7ZdCpg5Ee4fsieUf8pBFyBHl8gTTWiHjMePg"
		const stringm5GK3n4 = "J7"
		const uintnHFxKQm = BigInt("227")
		const WolfStakingRewardssJTtIwl = await WolfStakingRewards.new(stringWbXGyzw, stringm5GK3n4, uintnHFxKQm, {from: accounts[4]});
		const uintWPFpgaI = BigInt("1537")
		const addressl5qcUbw = accounts[1]
		const uintOu1plzK = BigInt("525")
		const addresslVNbx1 = accounts[2]
		const uintfx0KAf6 = BigInt("495")
		const addressLheTEJU = accounts[4]
		const uint256uB2dOFP = await WolfStakingRewardssJTtIwl.balanceOfPerPool.call(addressl5qcUbw, uintWPFpgaI, {from: accounts[0]});
		const uint256zrb10Cr = await WolfStakingRewardssJTtIwl.earned.call(addresslVNbx1, uintOu1plzK, {from: accounts[2]});
		const uint8xj1AXBx = await WolfStakingRewardssJTtIwl.decimals.call({from: accounts[2]});
		await WolfStakingRewardssJTtIwl.nonReentrant.call({from: accounts[0]});
		const uint256RwFmYLs = await WolfStakingRewardssJTtIwl.balanceOfPerPool.call(addressLheTEJU, uintfx0KAf6, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const addressEwa1rGW = accounts[2]
		const addressXibRVYo = accounts[4]
		const addressX8Nluzt = accounts[2]
		const WolfStakingRewardsge1787R = await WolfStakingRewards.new(addressEwa1rGW, addressXibRVYo, addressX8Nluzt, {from: accounts[2]});
		const uinthVxHuW0 = BigInt("306")
		const uintGwMHyx = BigInt("1961")
		const uintUr4b4Wb = BigInt("1172")
		const uint6QWXbt = BigInt("737")
		const uintW5iQxr5 = BigInt("388")
		const uintLzsP96 = await WolfStakingRewardsge1787R.getReward.call(uinthVxHuW0, {from: accounts[1]});
		const uintPESCh9K = await WolfStakingRewardsge1787R.getReward.call(uintGwMHyx, {from: accounts[0]});
		const uintQHD09ep = await WolfStakingRewardsge1787R.getReward.call(uintUr4b4Wb, {from: accounts[0]});
//		const uint256Wyq6Edw = await WolfStakingRewardsge1787R.withdraw.call(uintW5iQxr5, uint6QWXbt, {from: accounts[3]});
//		const stringrXVfG5B = await WolfStakingRewardsge1787R.name.call({from: accounts[0]});

		await expect(WolfStakingRewardsge1787R.withdraw.call(uintW5iQxr5, uint6QWXbt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressl4u5MvI = accounts[1]
		const addresszoMJu3 = accounts[3]
		const addressBaXHZfp = accounts[1]
		const WolfStakingRewardsen7Tjy2 = await WolfStakingRewards.new(addressl4u5MvI, addresszoMJu3, addressBaXHZfp, {from: accounts[4]});
		const uintdgz9Ugz = BigInt("943")
		const uintjdsTnF0 = BigInt("1104")
		const uintcRh1Yw1 = BigInt("1319")
		const uintwOhasS = BigInt("983")
		const uintZFs0Vbb = BigInt("305")
		const uintvIPM7y = BigInt("1213")
//		const uint256mJUyAtq = await WolfStakingRewardsen7Tjy2.withdrawRemainingBalance.call(uintjdsTnF0, uintdgz9Ugz, {from: accounts[3]});
//		const uint256HLfp8c = await WolfStakingRewardsen7Tjy2.exit.call(uintcRh1Yw1, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256PmXAXH0 = await WolfStakingRewardsen7Tjy2.totalSupplyPerPool.call(uintwOhasS, {from: accounts[2]});
//		const uint256ggzfUA = await WolfStakingRewardsen7Tjy2.rewardPerToken.call(uintZFs0Vbb, {from: accounts[4]});
//		const uintwCYgWvP = await WolfStakingRewardsen7Tjy2.getReward.call(uintvIPM7y, {from: accounts[0]});

		await expect(WolfStakingRewardsen7Tjy2.withdrawRemainingBalance.call(uintjdsTnF0, uintdgz9Ugz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressPf0eLJG = accounts[2]
		const addresshBmP7Kj = accounts[4]
		const addressGDG9qy1 = accounts[2]
		const WolfStakingRewardsge1787R = await WolfStakingRewards.new(addressPf0eLJG, addresshBmP7Kj, addressGDG9qy1, {from: accounts[2]});
		const uinttGkeMND = BigInt("125")
		const addresscRXykMW = accounts[4]
		const uintHu4G6Se = BigInt("306")
		const uintra435hH = BigInt("622")
		const uintZbjmMee = BigInt("1605")
		const uintHY84Iyi = BigInt("1986")
		const uintHOO9Xne = BigInt("1189")
		const uint256X9iSoxc = await WolfStakingRewardsge1787R.earned.call(addresscRXykMW, uinttGkeMND, {from: accounts[2]});
		const uintLzsP96 = await WolfStakingRewardsge1787R.getReward.call(uintHu4G6Se, {from: accounts[1]});
		const uint256oBalDyq = await WolfStakingRewardsge1787R.totalSupplyPerPool.call(uintra435hH, {from: accounts[4]});
		const uint256PEYZHXk = await WolfStakingRewardsge1787R.rewardPerToken.call(uintZbjmMee, {from: accounts[2]});
		const uintPESCh9K = await WolfStakingRewardsge1787R.getReward.call(uintHY84Iyi, {from: accounts[0]});
		const uintQHD09ep = await WolfStakingRewardsge1787R.getReward.call(uintHOO9Xne, {from: accounts[0]});
//		const stringrXVfG5B = await WolfStakingRewardsge1787R.name.call({from: accounts[0]});

		assert.equal(uint256PEYZHXk, BigInt("0"))
		assert.equal(uint256X9iSoxc, BigInt("0"))
		assert.equal(uint256oBalDyq, BigInt("0"))
		await expect(WolfStakingRewardsge1787R.name.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressR1H7QRK = accounts[0]
		const addressAEjEl9c = accounts[3]
		const addressh3IeCTX = accounts[5]
		const WolfStakingRewardsQ9dtgGf = await WolfStakingRewards.new(addressR1H7QRK, addressAEjEl9c, addressh3IeCTX, {from: accounts[4]});
		const uintJbqwdlh = BigInt("1456")
		const addresskxyBJ4w = accounts[6]
		const uintjt2xD7g = BigInt("196")
		const uintvHLl7XR = BigInt("160")
		const uintNnL5D8r = BigInt("39")
		const uintPIW2oPe = BigInt("578")
		const uintmXNIklH = BigInt("374")
		const uint256WLBNrQQ = await WolfStakingRewardsQ9dtgGf.balanceOfPerPool.call(addresskxyBJ4w, uintJbqwdlh, {from: accounts[1]});
//		const uint256q9iCAZw = await WolfStakingRewardsQ9dtgGf.stake.call(uintvHLl7XR, uintjt2xD7g, {from: accounts[2]});
//		const uint256poj1POz = await WolfStakingRewardsQ9dtgGf.withdrawRemainingBalance.call(uintPIW2oPe, uintNnL5D8r, {from: accounts[0]});
//		const uint256ATRo1YB = await WolfStakingRewardsQ9dtgGf.getRewardForDuration.call(uintmXNIklH, {from: accounts[2]});

		assert.equal(uint256WLBNrQQ, BigInt("0"))
		await expect(WolfStakingRewardsQ9dtgGf.stake.call(uintvHLl7XR, uintjt2xD7g, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressYY7NuZ5 = accounts[2]
		const addressz99pJLy = accounts[4]
		const addressT1vitSG = accounts[1]
		const WolfStakingRewardsamX2Ks = await WolfStakingRewards.new(addressYY7NuZ5, addressz99pJLy, addressT1vitSG, {from: "0x0000000000000000000000000000000000000001"});
		const uintY3aNs3p = BigInt("233")
		const uintTW8Jtrb = BigInt("1756")
		const uint5dbJPs = BigInt("1603")
		const addressB7gKZjX = accounts[3]
		const uintQeGSGtD = BigInt("390")
		const uintGNFqpmU = BigInt("552")
		const uintXKzLDwQ = BigInt("471")
		const addressxFrRskt = accounts[1]
		const uint256xW08RVO = await WolfStakingRewardsamX2Ks.lastTimeRewardApplicable.call(uintY3aNs3p, {from: accounts[0]});
		const uint256f4hlHum = await WolfStakingRewardsamX2Ks.exit.call(uintTW8Jtrb, {from: accounts[3]});
		const uint256J9HZRWj = await WolfStakingRewardsamX2Ks.balanceOfPerPool.call(addressB7gKZjX, uint5dbJPs, {from: accounts[1]});
		const uint256ZqRTwfv = await WolfStakingRewardsamX2Ks.lastTimeRewardApplicable.call(uintQeGSGtD, {from: accounts[3]});
		const uint256HTy6ZkB = await WolfStakingRewardsamX2Ks.totalSupplyPerPool.call(uintGNFqpmU, {from: accounts[1]});
		const uint256eURy8EJ = await WolfStakingRewardsamX2Ks.earned.call(addressxFrRskt, uintXKzLDwQ, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressigOaFp9 = accounts[0]
		const addressTbSUTx3 = accounts[3]
		const addressJVELA7H = accounts[5]
		const WolfStakingRewardsQ9dtgGf = await WolfStakingRewards.new(addressigOaFp9, addressTbSUTx3, addressJVELA7H, {from: accounts[4]});
		const uintPWaTIIw = BigInt("1456")
		const addressEC0D7Dv = accounts[5]
		const uintM6g1MM5 = BigInt("38")
		const uintko12hEH = BigInt("197")
		const uintxe2eI5D = BigInt("147")
		const uint256WLBNrQQ = await WolfStakingRewardsQ9dtgGf.balanceOfPerPool.call(addressEC0D7Dv, uintPWaTIIw, {from: accounts[1]});
//		const uint256yVgH0y = await WolfStakingRewardsQ9dtgGf.getRewardForDuration.call(uintM6g1MM5, {from: accounts[0]});
//		const uint8PoXFS1 = await WolfStakingRewardsQ9dtgGf.decimals.call({from: accounts[5]});
//		const uint256q9iCAZw = await WolfStakingRewardsQ9dtgGf.stake.call(uintxe2eI5D, uintko12hEH, {from: accounts[2]});

		assert.equal(uint256WLBNrQQ, BigInt("0"))
		await expect(WolfStakingRewardsQ9dtgGf.getRewardForDuration.call(uintM6g1MM5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringKE2On9 = "P6rrrsLE6QEWzLNiNE"
		const stringgxqby22 = "VRODJI6SsABfcL87ve4hr64qRPpx1xlkVHeuNJQbf3TQgYKz72aw7oYrtqeYOVZIsux6"
		const uintwhcrs85 = BigInt("123")
		const WolfStakingRewardsI1Xctr9 = await WolfStakingRewards.new(stringKE2On9, stringgxqby22, uintwhcrs85, {from: accounts[3]});
		const uintOLoWLV = BigInt("183")
		const uint29mZsR = BigInt("464")
		const uintQY4tEgZ = BigInt("150")
		const uintC1xonZN = BigInt("167")
		const uint256Irfn6R3 = await WolfStakingRewardsI1Xctr9.stake.call(uint29mZsR, uintOLoWLV, {from: "0x0000000000000000000000000000000000000001"});
		const uintka0NOLY = await WolfStakingRewardsI1Xctr9.getReward.call(uintQY4tEgZ, {from: accounts[3]});
		const uint256arrayyFjBMR1 = await WolfStakingRewardsI1Xctr9.updateNotifyRewardAmount.call(uintC1xonZN, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringlvVUYTb = "BYUMtF2cUDQluvqKJSNaLKq6Gz2rsFKRiumDdupfLGUMXe7XwFYnHVG5XdjAS3bzWc53XXr9"
		const stringkcHXljm = "4KH1PLJve7L1WA3tcdtV7BFsgEI2cCHp1jC2WhNNkM4Rn79fQ2A2Y36uDcPBOPOmgsMElYjDU2LPA86Dl4zdEcNsq2WPZ25Jq"
		const uintI40MdAj = BigInt("182")
		const WolfStakingRewardsbuzSOyJ = await WolfStakingRewards.new(stringlvVUYTb, stringkcHXljm, uintI40MdAj, {from: accounts[3]});
		const uintVXtczev = BigInt("1198")
		const uintFgQwSEO = BigInt("1122")
		const uintoMkmKDv = BigInt("595")
		const uint256arrayWRWcogH = await WolfStakingRewardsbuzSOyJ.updateNotifyRewardAmount.call(uintVXtczev, {from: accounts[2]});
		const stringZQpLfM2 = await WolfStakingRewardsbuzSOyJ.symbol.call({from: accounts[2]});
		await WolfStakingRewardsbuzSOyJ.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256lBwtmxN = await WolfStakingRewardsbuzSOyJ.lastTimeRewardApplicable.call(uintFgQwSEO, {from: accounts[2]});
		const uint256arrayw1D4I3D = await WolfStakingRewardsbuzSOyJ.updateNotifyRewardAmount.call(uintoMkmKDv, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringv15H1y2 = "v3kGx77oWAybekgWJXa4ybuCj7QSnJEm3EWK2W1nmrS6eC0t0ycxTBMJOwJ5FZNlLdpsWZEIOi0xhUWMu8Enl73"
		const stringe0wuYf = "5UqoROO3QyDTctySFp2UiYLllpqQOpAppNl8IiuH8LG5heJUwPgvOJT9sRi81"
		const uintz2hsJuX = BigInt("65")
		const WolfStakingRewardsbUiaA0R = await WolfStakingRewards.new(stringv15H1y2, stringe0wuYf, uintz2hsJuX, {from: accounts[0]});
		const uintSc15tFF = BigInt("21")
		const uintWxniA4q = BigInt("534")
		const uintkSkx5y = BigInt("659")
		await WolfStakingRewardsbUiaA0R.nonReentrant.call({from: accounts[4]});
		const uint256vBtemBI = await WolfStakingRewardsbUiaA0R.stake.call(uintWxniA4q, uintSc15tFF, {from: accounts[3]});
		const uint256u1vzhdp = await WolfStakingRewardsbUiaA0R.rewardPerToken.call(uintkSkx5y, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHQzhBRO = "o"
		const stringhXRFrd8 = "9wOOJmzY4poMuMnS8S35cFSjYJVh4NCLlXCE4pSSXR12L5deMwXBcfng9kJuOpMaihBKGW5qB"
		const uintOLWjYVg = BigInt("146")
		const WolfStakingRewardsHLkHvhI = await WolfStakingRewards.new(stringHQzhBRO, stringhXRFrd8, uintOLWjYVg, {from: accounts[0]});
		const uintPEpxu6h = BigInt("1958")
		const addressAX0ylz = "0x0000000000000000000000000000000000000001"
		const uintqN8wNx9 = BigInt("380")
		const uintKg018K = BigInt("1768")
		const stringaBKoww = await WolfStakingRewardsHLkHvhI.symbol.call({from: accounts[3]});
		const uint2564Ta5nK = await WolfStakingRewardsHLkHvhI.earned.call(addressAX0ylz, uintPEpxu6h, {from: accounts[4]});
		const uint256lonzyfB = await WolfStakingRewardsHLkHvhI.getRewardForDuration.call(uintqN8wNx9, {from: accounts[5]});
		const uint256mohIbVh = await WolfStakingRewardsHLkHvhI.rewardPerToken.call(uintKg018K, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTiL6h5j = "wRK"
		const stringoO6sz1U = "YyGh25IrJ5Pd2uyCAsslHsccYV1unNzrB94NqmyQFZ07K5KRn4JE8C7FPUpCZBiSxPc"
		const uintFzNBSNf = BigInt("53")
		const WolfStakingRewardsfVLIFhi = await WolfStakingRewards.new(stringTiL6h5j, stringoO6sz1U, uintFzNBSNf, {from: accounts[0]});
		const uintqIOVY7b = BigInt("1552")
		const addressjgOouJS = accounts[5]
		const uintFVEoils = BigInt("1757")
		const addressr6rAHFP = accounts[5]
		const uintbZwEoqo = BigInt("169")
		const addressDSOcrtD = accounts[0]
		const uintXbEici4 = BigInt("1048")
		const uint256IV6Nic = await WolfStakingRewardsfVLIFhi.balanceOfPerPool.call(addressjgOouJS, uintqIOVY7b, {from: accounts[1]});
		const uint256zhqrrJY = await WolfStakingRewardsfVLIFhi.earned.call(addressr6rAHFP, uintFVEoils, {from: accounts[0]});
		const uint256hxdSiOU = await WolfStakingRewardsfVLIFhi.balanceOfPerPool.call(addressDSOcrtD, uintbZwEoqo, {from: accounts[2]});
		const stringOuxXxjx = await WolfStakingRewardsfVLIFhi.symbol.call({from: accounts[5]});
		const uint256NKD4Wj = await WolfStakingRewardsfVLIFhi.totalSupplyPerPool.call(uintXbEici4, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTDhLenq = "rljibnO4nrJDCMwokHnDlCjSefa66"
		const stringPYIM2s = "hT8tRu13LdGqqSwogF20ssyagHcFX7rTIyPLOvW5PncgPK7rgjX2VFQq"
		const uintlDzgiz = BigInt("70")
		const WolfStakingRewardsL7Cn0M3 = await WolfStakingRewards.new(stringTDhLenq, stringPYIM2s, uintlDzgiz, {from: accounts[0]});
		const uintbF1bxuF = BigInt("1543")
		const uintz3RqUll = BigInt("1191")
		const uint8PHFoV = BigInt("1238")
		const uintLAQD17 = await WolfStakingRewardsL7Cn0M3.getReward.call(uintbF1bxuF, {from: accounts[0]});
		const uint256N0w3cTM = await WolfStakingRewardsL7Cn0M3.lastTimeRewardApplicable.call(uintz3RqUll, {from: "0x0000000000000000000000000000000000000001"});
		const uintAQ2IFQ = await WolfStakingRewardsL7Cn0M3.getReward.call(uint8PHFoV, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhJISbi = "wJmsOWy4LnFIf3EbsJ3QvnptaEbx1OLDJ7jtLMexkLs1o9Qz6vvYDcJpszzAOsCWUGw"
		const stringViPawEn = "cN5RXUVzGcsdPvXeFGu1d4PHkqeafqCHf6oQILRbELDY2eKwGg9HaQ2"
		const uint5WoWl4 = BigInt("167")
		const WolfStakingRewardsP6L2tib = await WolfStakingRewards.new(stringhJISbi, stringViPawEn, uint5WoWl4, {from: accounts[1]});
		const uintq8GGrJG = BigInt("286")
		const addressWiG2Pxm = accounts[0]
		const uintI3agcCb = BigInt("1395")
		const uint256OtXq61z = await WolfStakingRewardsP6L2tib.balanceOfPerPool.call(addressWiG2Pxm, uintq8GGrJG, {from: accounts[0]});
		const uint256s9ytpJ3 = await WolfStakingRewardsP6L2tib.getRewardForDuration.call(uintI3agcCb, {from: accounts[2]});
		const stringGQy93OK = await WolfStakingRewardsP6L2tib.name.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIBu6WqF = "Qay1gSVeockeDYMUy1EkUUXjx9ZF2Wx9RGMiHli1uFW8G7hajNKKXBidktN6QAxV1vRh1YlgXjaeTpE1YT2ZHWLzNRi"
		const stringRFLyAHm = "JSOL9xhrFw7Q9FoT25s46YeEycVq9QePOO71lqafIoqntIB1MUfpqfKWh9PFmNHAsh5rC"
		const uintfGeXA0K = BigInt("237")
		const WolfStakingRewardsN4i4HRU = await WolfStakingRewards.new(stringIBu6WqF, stringRFLyAHm, uintfGeXA0K, {from: accounts[3]});
		const uintrFgPw5w = BigInt("273")
		const uinte87nSms = BigInt("853")
		const uintMIRjO8X = BigInt("1804")
		const uintlvsyiCW = BigInt("1735")
		const uintXD8ftON = BigInt("673")
		const uintXyxKlXY = BigInt("67")
		const uint256vn9Nq3N = await WolfStakingRewardsN4i4HRU.lastTimeRewardApplicable.call(uintrFgPw5w, {from: accounts[2]});
		const uint256kcYmuzo = await WolfStakingRewardsN4i4HRU.stake.call(uintMIRjO8X, uinte87nSms, {from: accounts[3]});
		const uint256BLDdIV = await WolfStakingRewardsN4i4HRU.withdraw.call(uintXD8ftON, uintlvsyiCW, {from: accounts[2]});
		const uint256LRYIXI9 = await WolfStakingRewardsN4i4HRU.rewardPerToken.call(uintXyxKlXY, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuXj1AcL = "Xp51mCpCNnBIke1kl5Ua2FuXKe2jp8mt1yjvDd036EySY7I3m7gmqpTI6iAEQidCRGdOyIdMR3mBYyQqD72"
		const stringGFot3zg = "7XkrJfbAOFzBpYu3AGuYxwCkxBtegRkdA9bcVPG6rbhsT1brDeOxbR7zJNI6arQEmWSKVWcVIVx"
		const uintvqPBU6n = BigInt("92")
		const WolfStakingRewardsRsyytLy = await WolfStakingRewards.new(stringuXj1AcL, stringGFot3zg, uintvqPBU6n, {from: accounts[1]});
		const uintVRM0Rzl = BigInt("1910")
		const uintB5L7lFE = BigInt("1558")
		const uintqpKOkPD = BigInt("761")
		const uintMd2M2gy = BigInt("2027")
		const addressxT9slNW = accounts[4]
		const uintMrrr4TP = BigInt("1857")
		const uint256Cz7lKr = await WolfStakingRewardsRsyytLy.getRewardForDuration.call(uintVRM0Rzl, {from: accounts[2]});
		const uint256hz6XdFK = await WolfStakingRewardsRsyytLy.withdraw.call(uintqpKOkPD, uintB5L7lFE, {from: accounts[5]});
		await WolfStakingRewardsRsyytLy.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256ofm9j1p = await WolfStakingRewardsRsyytLy.earned.call(addressxT9slNW, uintMd2M2gy, {from: accounts[1]});
		const uintY1XOWLH = await WolfStakingRewardsRsyytLy.getReward.call(uintMrrr4TP, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqoXm6MF = "YrZW27sJe6DDjufYnNWFDbyU"
		const stringkuS3RoA = "LybDJjjTi5Lh4cKAymbzxbUWUoOQ3bO8YQvj5BurCunt6fy2DxOju377eEfYiyg7uAmoIYmuA1"
		const uintDhLhtmL = BigInt("234")
		const WolfStakingRewardsMXxKOq = await WolfStakingRewards.new(stringqoXm6MF, stringkuS3RoA, uintDhLhtmL, {from: accounts[3]});
		const uintj7ui4qr = BigInt("644")
		const uint256UjXy2Ln = await WolfStakingRewardsMXxKOq.getRewardForDuration.call(uintj7ui4qr, {from: accounts[1]});
		const stringd0Umr8X = await WolfStakingRewardsMXxKOq.symbol.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDXYqSUm = "lLxII7qgOlRymKDiCGIv4l91cqJxM"
		const stringGFH2GW = "hEqx1BXvgxoVA4H4sWpRkEs1Ik45QsnJdlfY1bDqiigjKX4OGnJvwtHj7F1b3LMagCPL"
		const uintLyqq2Wu = BigInt("1")
		const WolfStakingRewardsaTF33bo = await WolfStakingRewards.new(stringDXYqSUm, stringGFH2GW, uintLyqq2Wu, {from: accounts[4]});
		const uintBqQjUA1 = BigInt("1833")
		const uintNkBedvd = BigInt("931")
		const uintqt1fZTl = BigInt("1260")
		const uintrH3ZAM = BigInt("1737")
		const uintnKsLG2U = BigInt("769")
		const uint256FDXIbLq = await WolfStakingRewardsaTF33bo.withdrawRemainingBalance.call(uintNkBedvd, uintBqQjUA1, {from: accounts[1]});
		const uint256hz1tkm0 = await WolfStakingRewardsaTF33bo.stake.call(uintrH3ZAM, uintqt1fZTl, {from: accounts[0]});
		const uint256DTWxRPz = await WolfStakingRewardsaTF33bo.lastTimeRewardApplicable.call(uintnKsLG2U, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMzbGd3p = "uM7OFqMqmKGPxk1g1CY8eQ8sbgJs66RiQehBoYg76rCykJWSw906V5u7VgASGHdADshcexGW85xBxjkeDF3PJU8hTvQ8f2"
		const stringMQJWnBO = "CevFvQ3XMmdeVhCuWl5WDuQ"
		const uintW05zvz = BigInt("33")
		const WolfStakingRewardsQmFCXu = await WolfStakingRewards.new(stringMzbGd3p, stringMQJWnBO, uintW05zvz, {from: accounts[0]});
		const uinth6Yd2Zt = BigInt("1846")
		const uintUpLh5N = BigInt("815")
		const uint256Q78fK4Y = await WolfStakingRewardsQmFCXu.lastTimeRewardApplicable.call(uinth6Yd2Zt, {from: accounts[4]});
		const uintPv4nPiw = await WolfStakingRewardsQmFCXu.getReward.call(uintUpLh5N, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringspOpCVl = "njIeSrAcKznG7aE2bYk1aUB3Y9jbxkiWAsK1KSX4JlrhetPUjnwXN8RWPFu3BXX4s6EMte1nSXErS6mFuYymlvEgpGK9GrVqf"
		const stringRhxlY1 = "FR1HL5VH9Vd5aFrP1xaRaSxrV9aTw0PUX8SVKHBtumglSbkWea"
		const uintfaHmuAS = BigInt("95")
		const WolfStakingRewardsVWu2b03 = await WolfStakingRewards.new(stringspOpCVl, stringRhxlY1, uintfaHmuAS, {from: accounts[3]});
		const uintQyxAlrM = BigInt("1795")
		const uintn7cDbw7 = BigInt("1144")
		const uint8p2jylkV = await WolfStakingRewardsVWu2b03.decimals.call({from: accounts[4]});
		const uintDmMbZOK = await WolfStakingRewardsVWu2b03.getReward.call(uintQyxAlrM, {from: accounts[5]});
		const uintQCm0Cfr = await WolfStakingRewardsVWu2b03.getReward.call(uintn7cDbw7, {from: accounts[3]});
		await WolfStakingRewardsVWu2b03.nonReentrant.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressCZ4s3l3 = accounts[2]
		const addressBLCEo7x = accounts[4]
		const addressFU7K03v = accounts[2]
		const WolfStakingRewardsge1787R = await WolfStakingRewards.new(addressCZ4s3l3, addressBLCEo7x, addressFU7K03v, {from: accounts[2]});
		const uintHs9d84m = BigInt("382")
		const uintMJBPXLQ = BigInt("883")
		const uintjaWaXK = BigInt("1210")
		const uintaPy4JKy = BigInt("749")
//		const uint256RZ3jXyL = await WolfStakingRewardsge1787R.withdrawRemainingBalance.call(uintMJBPXLQ, uintHs9d84m, {from: accounts[2]});
//		const uintQHD09ep = await WolfStakingRewardsge1787R.getReward.call(uintjaWaXK, {from: accounts[0]});
//		const uint256arraydgyAhd3 = await WolfStakingRewardsge1787R.updateNotifyRewardAmount.call(uintaPy4JKy, {from: accounts[0]});

		await expect(WolfStakingRewardsge1787R.withdrawRemainingBalance.call(uintMJBPXLQ, uintHs9d84m, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringh4XY9Er = "RyNHGp0i05DYWD"
		const stringwcO4ni = "mUDqHJwREHEQbokBkRzen"
		const uintL9lfjcs = BigInt("13")
		const WolfStakingRewardsQIT3CN = await WolfStakingRewards.new(stringh4XY9Er, stringwcO4ni, uintL9lfjcs, {from: accounts[2]});
		const uintYn6iIES = BigInt("1206")
		const uintUDKGXF = BigInt("1298")
		const uintOGlQQuF = BigInt("1898")
		const addressFtmhZZc = accounts[0]
		const uintPnS6eY = BigInt("116")
		const uint256L5EYdjw = await WolfStakingRewardsQIT3CN.withdrawRemainingBalance.call(uintUDKGXF, uintYn6iIES, {from: accounts[2]});
		const uint8oQvnc7M = await WolfStakingRewardsQIT3CN.decimals.call({from: accounts[2]});
		const uint256cbqegM = await WolfStakingRewardsQIT3CN.earned.call(addressFtmhZZc, uintOGlQQuF, {from: accounts[1]});
		const uint256D4SABQ = await WolfStakingRewardsQIT3CN.rewardPerToken.call(uintPnS6eY, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqXPu8Yd = "CkE4d38zzIttmH8PCNAa0BceLv56zelMS8DFn2agFKGFAi8xyREvEHq8uEBoiFMejQFlxI8Ng"
		const stringrwkmJDw = "aSgt"
		const uintxxtoQar = BigInt("6")
		const WolfStakingRewardsgJMJKpk = await WolfStakingRewards.new(stringqXPu8Yd, stringrwkmJDw, uintxxtoQar, {from: accounts[2]});
		const uintayvZDCf = BigInt("1238")
		const addressw4SQKZ = accounts[0]
		const uint8DaGb9 = BigInt("613")
		const addressrhL2tyD = accounts[2]
		const uint256UiAPoI = await WolfStakingRewardsgJMJKpk.earned.call(addressw4SQKZ, uintayvZDCf, {from: "0x0000000000000000000000000000000000000001"});
		const uint8EbiKSBl = await WolfStakingRewardsgJMJKpk.decimals.call({from: accounts[4]});
		const uint8gRLk1kQ = await WolfStakingRewardsgJMJKpk.decimals.call({from: accounts[4]});
		const uint8eVzIqxJ = await WolfStakingRewardsgJMJKpk.decimals.call({from: accounts[1]});
		const uint256UEGA35H = await WolfStakingRewardsgJMJKpk.balanceOfPerPool.call(addressrhL2tyD, uint8DaGb9, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringiSbd2Dk = "FO8YncVBW5LOIwu9n1wmkGe1KbMsSdTpU6dGVf9WUGuIUtb4EZnB3U"
		const stringmHNSFPl = "5qwnZgpbHmki8QTbdbOK8odfTJNmi"
		const uintwTJT4I = BigInt("105")
		const WolfStakingRewardsYSXvkpI = await WolfStakingRewards.new(stringiSbd2Dk, stringmHNSFPl, uintwTJT4I, {from: accounts[1]});
		const uintMpMAH9s = BigInt("478")
		const addressZ0TcPf9 = accounts[1]
		const uintsMENcJz = BigInt("224")
		const uintNV1A9h7 = BigInt("68")
		const uint8mvWMevH = await WolfStakingRewardsYSXvkpI.decimals.call({from: accounts[4]});
		const uint256WynUusJ = await WolfStakingRewardsYSXvkpI.earned.call(addressZ0TcPf9, uintMpMAH9s, {from: accounts[0]});
		const uint256xvuoHFl = await WolfStakingRewardsYSXvkpI.stake.call(uintNV1A9h7, uintsMENcJz, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringX3MtM8S = "8TSBKwRTzYDn7AHRb1YpP"
		const stringBPNFn1 = "dLxZlqs8JEkqFVQcQ3cv6sgHxVJR3IP8GvznK48K36rLEnBYWZoBavrcRuCmb"
		const uintwtwm0Qi = BigInt("219")
		const WolfStakingRewardswSfarC6 = await WolfStakingRewards.new(stringX3MtM8S, stringBPNFn1, uintwtwm0Qi, {from: accounts[3]});
		const uintOI6tzZy = BigInt("1671")
		const uintJIUt72o = BigInt("1805")
		const uintPLHv2QK = BigInt("1695")
		const uintVDbD1fm = BigInt("1407")
		const stringeWyB4zt = await WolfStakingRewardswSfarC6.symbol.call({from: accounts[4]});
		const uint256HsbUO8s = await WolfStakingRewardswSfarC6.totalSupplyPerPool.call(uintOI6tzZy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GpGTUyp = await WolfStakingRewardswSfarC6.getRewardForDuration.call(uintJIUt72o, {from: accounts[3]});
		const stringjL3C68U = await WolfStakingRewardswSfarC6.symbol.call({from: accounts[2]});
		const uint256iGxN7UF = await WolfStakingRewardswSfarC6.exit.call(uintPLHv2QK, {from: accounts[0]});
		const uint25661eB7x = await WolfStakingRewardswSfarC6.rewardPerToken.call(uintVDbD1fm, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVfyHicm = "AhoogAI4JKe91qxNj9Jxs7B6FqhYVjOawTtXi38VzFFLaDOWMqcd33z5lzquI4AWjiMJwvS"
		const stringWTYZuvq = "4qW79hGhYpKFY1Idgsd69vvkJ5EumA2nDJg0GEetuK8q2XRSePfoYAmHsMBIomDLzSeYBRNNedoA"
		const uintBe6fv5o = BigInt("46")
		const WolfStakingRewardsvnCGcE4 = await WolfStakingRewards.new(stringVfyHicm, stringWTYZuvq, uintBe6fv5o, {from: accounts[3]});
		const uintkf4jfbE = BigInt("1643")
		const uintGTVwKkG = BigInt("802")
		const uintfgIzrEM = BigInt("1969")
		const uintzBn8HG1 = BigInt("772")
		const uint9Tdebj = BigInt("1876")
		const stringeR7uPav = await WolfStakingRewardsvnCGcE4.name.call({from: accounts[3]});
		const uint256Lesc0Su = await WolfStakingRewardsvnCGcE4.totalSupplyPerPool.call(uintkf4jfbE, {from: accounts[1]});
		const stringNU6HBzj = await WolfStakingRewardsvnCGcE4.symbol.call({from: accounts[1]});
		const uint256vANAaM7 = await WolfStakingRewardsvnCGcE4.withdrawRemainingBalance.call(uintfgIzrEM, uintGTVwKkG, {from: accounts[0]});
		const uint25640gqje = await WolfStakingRewardsvnCGcE4.exit.call(uintzBn8HG1, {from: accounts[4]});
		const uint256MZXS4s = await WolfStakingRewardsvnCGcE4.totalSupplyPerPool.call(uint9Tdebj, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjPjdyhE = "82WkAuxoQ7QuSqJVSj4ve28kLkHnfKG1TLnwYBfCXOEXT6WMmR9HiN5DvHcsct"
		const stringbKqLzsV = "HqAwbIXwVQ9KXWhFCbcC3DHWeHRyucy9NCluSeOtufjxNttAUiwuDBCM8eQlqkDJ"
		const uintvJsXBa = BigInt("141")
		const WolfStakingRewardsb97ImPR = await WolfStakingRewards.new(stringjPjdyhE, stringbKqLzsV, uintvJsXBa, {from: accounts[4]});
		const uintZ17cLK2 = BigInt("1084")
		const uintJIKTXMO = BigInt("1167")
		const uintt7QTgFC = BigInt("1388")
		const uintmkexmiq = BigInt("54")
		const uintV5p1MwY = BigInt("1793")
		const uintLWUlzBp = BigInt("1823")
		const uint77CejI = BigInt("1385")
		const addressV6UfxVu = accounts[3]
		await WolfStakingRewardsb97ImPR.nonReentrant.call({from: accounts[1]});
		const uint256Dcu6Uvu = await WolfStakingRewardsb97ImPR.withdrawRemainingBalance.call(uintJIKTXMO, uintZ17cLK2, {from: accounts[3]});
		const uint256DZZl9wT = await WolfStakingRewardsb97ImPR.lastTimeRewardApplicable.call(uintt7QTgFC, {from: accounts[0]});
		const uint256ksnQ2EM = await WolfStakingRewardsb97ImPR.getRewardForDuration.call(uintmkexmiq, {from: accounts[3]});
		const uint256qD1RTIY = await WolfStakingRewardsb97ImPR.withdrawRemainingBalance.call(uintLWUlzBp, uintV5p1MwY, {from: accounts[0]});
		const uint256mFmN8xr = await WolfStakingRewardsb97ImPR.earned.call(addressV6UfxVu, uint77CejI, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringRsfMd4W = "UXyKJ7oJuLfXKvh393qC"
		const stringVPwgTPR = "BBAyiGoi5dEYrQOlCBRea5EPMzZFp2IQNPGsgNbwn"
		const uintZwLnYOC = BigInt("127")
		const WolfStakingRewardsfBFZrz8 = await WolfStakingRewards.new(stringRsfMd4W, stringVPwgTPR, uintZwLnYOC, {from: accounts[4]});
		const uintONZWT8S = BigInt("507")
		const uintTc6U65U = BigInt("1650")
		const uint5AO2oQ = BigInt("1964")
		const uintyWUYWjE = BigInt("425")
		const uintSuI9sBg = BigInt("1608")
		const uintiUUueN0 = BigInt("1000")
		const uintSrD5HDC = BigInt("375")
		const uintvnpcukt = BigInt("277")
		const uint256Zm8DVPD = await WolfStakingRewardsfBFZrz8.withdrawRemainingBalance.call(uintTc6U65U, uintONZWT8S, {from: accounts[0]});
		const uint256YmOE6Y = await WolfStakingRewardsfBFZrz8.withdrawRemainingBalance.call(uintyWUYWjE, uint5AO2oQ, {from: accounts[0]});
		const uint256g08HZZ = await WolfStakingRewardsfBFZrz8.stake.call(uintiUUueN0, uintSuI9sBg, {from: accounts[2]});
		const uintpllUS7O = await WolfStakingRewardsfBFZrz8.getReward.call(uintSrD5HDC, {from: accounts[1]});
		const uint256WQSWZub = await WolfStakingRewardsfBFZrz8.totalSupplyPerPool.call(uintvnpcukt, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringoJ0wU5 = "xusCmjP6EiOWFwvKmlrT4KKXOiYDQGHgaA5gAOxoQwd8da1RLD3cmJRAUus4uwQlnbjhR6CU"
		const stringeRI0ix5 = "2gxwE9Nuz7IMRnHSQLiFVvRrSgO79CiHxM3Jz1VTIt3AzRrkNBLM7lV6IgR0vX246TKHCmwgYPb"
		const uintVKJHjkZ = BigInt("158")
		const WolfStakingRewardstkTVuV9 = await WolfStakingRewards.new(stringoJ0wU5, stringeRI0ix5, uintVKJHjkZ, {from: accounts[1]});
		const uintMIDJi0O = BigInt("1060")
		const addressF82CIKX = accounts[5]
		const uintTfoF3OI = BigInt("1215")
		const uint256THP1B4r = await WolfStakingRewardstkTVuV9.earned.call(addressF82CIKX, uintMIDJi0O, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QAyK9JC = await WolfStakingRewardstkTVuV9.rewardPerToken.call(uintTfoF3OI, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuN0qXJC = "QjFyNRJ9LLY"
		const stringuzh9A8l = "7"
		const uintQaWJLN6 = BigInt("192")
		const WolfStakingRewardsqc0Vhp = await WolfStakingRewards.new(stringuN0qXJC, stringuzh9A8l, uintQaWJLN6, {from: accounts[3]});
		const uintOBHfQiJ = BigInt("1243")
		const uintexvFNN9 = BigInt("660")
		const uintUjHBnpd = BigInt("1437")
		const uintRc3Zne = BigInt("1255")
		const uinte0kAbC = BigInt("327")
		const uintBUtQn8L = BigInt("528")
		const addressZihIoQ9 = "0x0000000000000000000000000000000000000001"
		const uint256hD0EKsx = await WolfStakingRewardsqc0Vhp.totalSupplyPerPool.call(uintOBHfQiJ, {from: accounts[3]});
		const uint256yxdW49 = await WolfStakingRewardsqc0Vhp.totalSupplyPerPool.call(uintexvFNN9, {from: accounts[4]});
		const uint256Gaep0QS = await WolfStakingRewardsqc0Vhp.lastTimeRewardApplicable.call(uintUjHBnpd, {from: accounts[1]});
		const stringh8S1BZx = await WolfStakingRewardsqc0Vhp.symbol.call({from: accounts[0]});
		const uint256RdzRBlm = await WolfStakingRewardsqc0Vhp.withdrawRemainingBalance.call(uinte0kAbC, uintRc3Zne, {from: accounts[0]});
		const uint256QV0bN99 = await WolfStakingRewardsqc0Vhp.earned.call(addressZihIoQ9, uintBUtQn8L, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMHE1ZoW = "TAnOqEGzquo3N5VBT57I3HyzhhfUw5YXxELrtKXfF7eEaThIQ2zLL7UwLaUmc8COjumXpQ2sEqd6UklIa2cPihE6DvKuATc0"
		const stringSBjlS0L = "ECyIJ6n4vOl1sOmHPcJUpGNJ5gocJfUwnyqTpuf7vihUxWb6e"
		const uintB4FvYYH = BigInt("146")
		const WolfStakingRewardsgmIMitf = await WolfStakingRewards.new(stringMHE1ZoW, stringSBjlS0L, uintB4FvYYH, {from: accounts[0]});
		const uintu8m06vD = BigInt("1106")
		const uintgDR8SEz = BigInt("817")
		const uintPuEgRt = BigInt("1969")
		const uint256AuY0n5 = await WolfStakingRewardsgmIMitf.withdrawRemainingBalance.call(uintgDR8SEz, uintu8m06vD, {from: accounts[4]});
		const uint256cVBGoLE = await WolfStakingRewardsgmIMitf.rewardPerToken.call(uintPuEgRt, {from: accounts[3]});
		const string7XT4cF = await WolfStakingRewardsgmIMitf.symbol.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDwEQLAj = "c6PJH3cCJL0CbB7zub2HnGzrRTs95Ih0ciE4NTjCESObeEa"
		const stringNbOekB = "juePQjAxhHctSMSu3ZDK2044aM9mWfOoHRMwlLkbReHRyeXgCFVfCmYuGfdOIGrvPF16LRkxIDcOvm64pNf3eJ6"
		const uintvEvK5ll = BigInt("107")
		const WolfStakingRewardsdnxQ6s3 = await WolfStakingRewards.new(stringDwEQLAj, stringNbOekB, uintvEvK5ll, {from: accounts[2]});
		const uintm3GNiQ = BigInt("867")
		const uintHsDn18Q = BigInt("1336")
		const uintyqmPPfs = BigInt("336")
		const uintpato7qf = BigInt("1779")
		const uint256oZsICQV = await WolfStakingRewardsdnxQ6s3.getRewardForDuration.call(uintm3GNiQ, {from: accounts[2]});
		const uint256hnbqOGg = await WolfStakingRewardsdnxQ6s3.withdrawRemainingBalance.call(uintyqmPPfs, uintHsDn18Q, {from: accounts[0]});
		const uint256qcynwjw = await WolfStakingRewardsdnxQ6s3.lastTimeRewardApplicable.call(uintpato7qf, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringC9HTmME = "UT4nW21d2BfHFYVtDyBrZ4BJkwJHc3IhGmkuyAH44ak5uWyWiXiVE6D2G0xZjI3dKVOCaLrXrw5kqCpMKD"
		const stringjQlYSPc = "4q2dvNM1vgSdT2i9hiQKSkNScYnU"
		const uint5hV0YC = BigInt("98")
		const WolfStakingRewardsFHcBUSl = await WolfStakingRewards.new(stringC9HTmME, stringjQlYSPc, uint5hV0YC, {from: accounts[5]});
		const uint7BM7Xp = BigInt("1747")
		const uintfNt1o4l = BigInt("1231")
		const uintCTAYNix = BigInt("1762")
		const uints9W5ig1 = BigInt("2010")
		const uintZtnBfe2 = BigInt("1750")
		await WolfStakingRewardsFHcBUSl.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256iUlqmKh = await WolfStakingRewardsFHcBUSl.stake.call(uintfNt1o4l, uint7BM7Xp, {from: accounts[2]});
		const uint256Plku1VF = await WolfStakingRewardsFHcBUSl.withdraw.call(uints9W5ig1, uintCTAYNix, {from: accounts[1]});
		const uint256oGimRqF = await WolfStakingRewardsFHcBUSl.lastTimeRewardApplicable.call(uintZtnBfe2, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringa1JK6Iy = "H2YeB47sGKR7YtXoE9vni2ZRTKMJJx"
		const stringTSuYmdS = "ox8XpySnjS9CQmNjg0oJEft5K"
		const uintiLyL30h = BigInt("202")
		const WolfStakingRewardshyMOAY = await WolfStakingRewards.new(stringa1JK6Iy, stringTSuYmdS, uintiLyL30h, {from: accounts[3]});
		const uintmnMvE3 = BigInt("1165")
		const uinttEMTnOu = BigInt("1048")
		const uintAiZTjth = BigInt("2026")
		const uintDchOyXg = BigInt("266")
		await WolfStakingRewardshyMOAY.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardshyMOAY.onlyOwner.call({from: accounts[3]});
		await WolfStakingRewardshyMOAY.nonReentrant.call({from: accounts[4]});
		const uintRM599cw = await WolfStakingRewardshyMOAY.getReward.call(uintmnMvE3, {from: accounts[2]});
		const uint256q5RqJbv = await WolfStakingRewardshyMOAY.withdraw.call(uintAiZTjth, uinttEMTnOu, {from: accounts[1]});
		const uint256xaPEDEh = await WolfStakingRewardshyMOAY.exit.call(uintDchOyXg, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringNxAECm9 = "3TOeduIUCYhE9KL2tGgVXSgxrmThBx8ngcJeD6QVRilg6S7sXXroA5z3Serh9DIm"
		const stringwyVQZE = "oMmWQXYNovgiqGYhmixnFMpOvITfDnT6yp5X"
		const uintZd8cmW1 = BigInt("224")
		const WolfStakingRewards8SdC06 = await WolfStakingRewards.new(stringNxAECm9, stringwyVQZE, uintZd8cmW1, {from: accounts[3]});
		const uinttnToBrX = BigInt("195")
		const uintbVvpGcF = BigInt("1820")
		const uint256arrayXHcZqcy = await WolfStakingRewards8SdC06.updateNotifyRewardAmount.call(uinttnToBrX, {from: "0x0000000000000000000000000000000000000001"});
		const uintabRPR8 = await WolfStakingRewards8SdC06.getReward.call(uintbVvpGcF, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVuEjCLY = "bnVoMXS2VvVcKLxxOd71K2lfHgHNP1N"
		const stringoUxmgOC = "otR8LjnhTWd4pXnpB2obwoyBZNYNx6zsPrfuKF7P4zjk0d3qWrWuyBx2yZNLytlXp61mtK95Prjd1Q8Tdy2"
		const uintOwBcO2 = BigInt("235")
		const WolfStakingRewardsfau8a1C = await WolfStakingRewards.new(stringVuEjCLY, stringoUxmgOC, uintOwBcO2, {from: accounts[3]});
		const uintsJnzypJ = BigInt("1860")
		const addressbLG5Zoj = accounts[1]
		const uintrctbIae = BigInt("747")
		const addressW9X9u3 = accounts[2]
		const uint8rCmqwRc = await WolfStakingRewardsfau8a1C.decimals.call({from: accounts[0]});
		const addresshycxkI = await WolfStakingRewardsfau8a1C.updateReward.call(addressbLG5Zoj, uintsJnzypJ, {from: accounts[2]});
		const uint256Y76Kruz = await WolfStakingRewardsfau8a1C.balanceOfPerPool.call(addressW9X9u3, uintrctbIae, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringcjGSerD = "OtVPIJOajPNcsMULasDCi9W93sDcWlVppWx"
		const stringNFRDFGM = "MYEcTRKsGq2UA0s9qhctF8wdG5ZDK6HfNBvUogmYl6sQnc0IGo1pUr1okoDV7PYjnKE6IAIUAAEo3FZhpN7tzaoh13S9s"
		const uintCwCIwNl = BigInt("218")
		const WolfStakingRewardsdkFIWY9 = await WolfStakingRewards.new(stringcjGSerD, stringNFRDFGM, uintCwCIwNl, {from: accounts[1]});
		const uint0ApsP4 = BigInt("1756")
		const addressHRcdtsS = accounts[0]
		const uintHjIbOu = BigInt("1745")
		const uintpEGOczv = BigInt("1090")
		const uintE9dzbHR = BigInt("928")
		const uintj7J1bAz = BigInt("742")
		const uint256CS7A1El = await WolfStakingRewardsdkFIWY9.earned.call(addressHRcdtsS, uint0ApsP4, {from: accounts[0]});
		const uint256lBxtnBN = await WolfStakingRewardsdkFIWY9.exit.call(uintHjIbOu, {from: accounts[1]});
		const uint256yQJuakL = await WolfStakingRewardsdkFIWY9.withdrawRemainingBalance.call(uintE9dzbHR, uintpEGOczv, {from: accounts[0]});
		const uint256gjX6Ndq = await WolfStakingRewardsdkFIWY9.lastTimeRewardApplicable.call(uintj7J1bAz, {from: accounts[3]});
		await WolfStakingRewardsdkFIWY9.onlyOwner.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhsvfhr8 = "vmIz3D8nicf5IIx"
		const stringwUJIjOX = ""
		const uintghFBLMj = BigInt("110")
		const WolfStakingRewardsA3BCsY4 = await WolfStakingRewards.new(stringhsvfhr8, stringwUJIjOX, uintghFBLMj, {from: accounts[4]});
		const uintPWAQsT = BigInt("658")
		const uinth8YP2fg = BigInt("1774")
		const uintqlUmX6L = BigInt("54")
		const uintQwQ1y3 = BigInt("452")
		const uinti3hwxS = BigInt("1804")
		const uint256neN5jue = await WolfStakingRewardsA3BCsY4.withdraw.call(uinth8YP2fg, uintPWAQsT, {from: accounts[5]});
		const uint256QsijrfU = await WolfStakingRewardsA3BCsY4.withdrawRemainingBalance.call(uintQwQ1y3, uintqlUmX6L, {from: accounts[3]});
		await WolfStakingRewardsA3BCsY4.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256PkYzE9n = await WolfStakingRewardsA3BCsY4.exit.call(uinti3hwxS, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUZpU2f = "Lh2UiERmxPCN04ZyTwGQErjnyFf"
		const stringXJo7dT0 = "tEY85NuJVhp8BHgX1bDdNMt9xAS3hrgPcq3d5BEnyieclwW3xuwbg9CGczt5TSMS4bIU1dJK84b"
		const uintWY3tYYc = BigInt("221")
		const WolfStakingRewardsjtcg4o9 = await WolfStakingRewards.new(stringUZpU2f, stringXJo7dT0, uintWY3tYYc, {from: accounts[3]});
		const uintpYCxneA = BigInt("765")
		const uintqKD23gE = BigInt("1511")
		const uintOTrDZVI = BigInt("365")
		const addresswRnTiVJ = accounts[5]
		const uint8RvIGf = BigInt("1472")
		const uintFZGcfed = await WolfStakingRewardsjtcg4o9.getReward.call(uintpYCxneA, {from: accounts[0]});
		const uint256KyhDzWI = await WolfStakingRewardsjtcg4o9.exit.call(uintqKD23gE, {from: accounts[3]});
		const addresslhMOTXf = await WolfStakingRewardsjtcg4o9.updateReward.call(addresswRnTiVJ, uintOTrDZVI, {from: accounts[2]});
		const uint256mT9K81m = await WolfStakingRewardsjtcg4o9.rewardPerToken.call(uint8RvIGf, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuMTuP8g = "E9yN3XEKOxCEyUjxW7C7cImrXZTzauGXYDm7WhY0sB4R6qj6TT85ygQTAnqGSXrJeJvSIfkT5"
		const stringYDaznZV = "BcJr5X4tbKosESsyr0JGcasbYC764DqAryRGWrOvvBa9kvOYltEGmzqD27I"
		const uintxE7ZSgR = BigInt("46")
		const WolfStakingRewardsxTOBrj = await WolfStakingRewards.new(stringuMTuP8g, stringYDaznZV, uintxE7ZSgR, {from: accounts[3]});
		const uintC5OOx37 = BigInt("790")
		const uintwyUFGEq = BigInt("969")
		await WolfStakingRewardsxTOBrj.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256tuOaf3d = await WolfStakingRewardsxTOBrj.getRewardForDuration.call(uintC5OOx37, {from: accounts[1]});
		const stringrYVJvE = await WolfStakingRewardsxTOBrj.symbol.call({from: accounts[0]});
		const string8ykl6P = await WolfStakingRewardsxTOBrj.symbol.call({from: accounts[4]});
		const uint256UmCE7St = await WolfStakingRewardsxTOBrj.getRewardForDuration.call(uintwyUFGEq, {from: accounts[3]});
	});
})