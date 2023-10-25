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
		const uint8CnABoAu = await WolfStakingRewardsJ5I7jIG.decimals.call({from: accounts[3]});
		const uint256jaHy71 = await WolfStakingRewardsJ5I7jIG.earned.call(addresscS0nO9, uintpHcZsOF, {from: accounts[4]});
		const uint256arrayQoDOklP = await WolfStakingRewardsJ5I7jIG.updateNotifyRewardAmount.call(uinth92Iqmc, {from: accounts[3]});
		const stringwxHr4G1 = await WolfStakingRewardsJ5I7jIG.symbol.call({from: accounts[0]});

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
		const uint256q9iCAZw = await WolfStakingRewardsQ9dtgGf.stake.call(uintgWZj7vG, uintLskDJ7c, {from: accounts[2]});
		const uint256ATRo1YB = await WolfStakingRewardsQ9dtgGf.getRewardForDuration.call(uintOnBCQca, {from: accounts[2]});

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
		const uint256HLfp8c = await WolfStakingRewardsen7Tjy2.exit.call(uintxUNKgPN, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PmXAXH0 = await WolfStakingRewardsen7Tjy2.totalSupplyPerPool.call(uintHBt8Y0D, {from: accounts[2]});
		const uintwCYgWvP = await WolfStakingRewardsen7Tjy2.getReward.call(uintye6x9K, {from: accounts[0]});

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
		const uint256arrayUnbqcZA = await WolfStakingRewardsHSzUWjk.updateNotifyRewardAmount.call(uintTAbxGGU, {from: accounts[4]});
		await WolfStakingRewardsHSzUWjk.onlyRewardsDistribution.call({from: accounts[4]});

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
		const stringrXVfG5B = await WolfStakingRewardsge1787R.name.call({from: accounts[0]});

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
		const addressBk70ho = accounts[0]
		const addressLWFd6ya = accounts[3]
		const addressAveJpyn = accounts[5]
		const WolfStakingRewardsQ9dtgGf = await WolfStakingRewards.new(addressBk70ho, addressLWFd6ya, addressAveJpyn, {from: accounts[4]});
		const uintCB6oQzS = BigInt("1456")
		const addressclXs8yL = accounts[5]
		const uintk14Ra6 = BigInt("1408")
		const uintQhhAJhc = BigInt("196")
		const uintoHG8maJ = BigInt("136")
		const uintkEL1hFX = BigInt("374")
		const uint256WLBNrQQ = await WolfStakingRewardsQ9dtgGf.balanceOfPerPool.call(addressclXs8yL, uintCB6oQzS, {from: accounts[1]});
		const uint256k8orND = await WolfStakingRewardsQ9dtgGf.totalSupplyPerPool.call(uintk14Ra6, {from: accounts[1]});
		const uint256q9iCAZw = await WolfStakingRewardsQ9dtgGf.stake.call(uintoHG8maJ, uintQhhAJhc, {from: accounts[2]});
		const uint256ATRo1YB = await WolfStakingRewardsQ9dtgGf.getRewardForDuration.call(uintkEL1hFX, {from: accounts[2]});

		assert.equal(uint256WLBNrQQ, BigInt("0"))
		assert.equal(uint256k8orND, BigInt("0"))
		await expect(WolfStakingRewardsQ9dtgGf.stake.call(uintoHG8maJ, uintQhhAJhc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressHMdP7cN = accounts[0]
		const addressiOJHOr = accounts[3]
		const addressxc5bN8 = accounts[5]
		const WolfStakingRewardsQ9dtgGf = await WolfStakingRewards.new(addressHMdP7cN, addressiOJHOr, addressxc5bN8, {from: accounts[4]});
		const uintq2ryzgV = BigInt("606")
		const uintuYCyGne = BigInt("1827")
		const uint38RSMY = BigInt("1235")
		const uintURisaun = BigInt("292")
		const uintqKkCkod = BigInt("196")
		const uintVNASa4c = BigInt("160")
		const uinthDVVN9i = BigInt("374")
		const uint256GVnM6t = await WolfStakingRewardsQ9dtgGf.withdraw.call(uintuYCyGne, uintq2ryzgV, {from: accounts[1]});
		const uint256M6DNPHX = await WolfStakingRewardsQ9dtgGf.stake.call(uintURisaun, uint38RSMY, {from: accounts[1]});
		const uint256q9iCAZw = await WolfStakingRewardsQ9dtgGf.stake.call(uintVNASa4c, uintqKkCkod, {from: accounts[2]});
		const uint256ATRo1YB = await WolfStakingRewardsQ9dtgGf.getRewardForDuration.call(uinthDVVN9i, {from: accounts[2]});

		await expect(WolfStakingRewardsQ9dtgGf.withdraw.call(uintuYCyGne, uintq2ryzgV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringIqu5zQs = "SQuClDXkMfT9oX8a9YFLQAkA0duDHZvlQzDcN9Vgq"
		const stringbd4Nt2o = "HSEfZhkL7QHWtxKNtBQrR5WlUv25yMpNh3aQAvVH2d8r"
		const uintgjG7QO7 = BigInt("105")
		const WolfStakingRewardsXEI9NEj = await WolfStakingRewards.new(stringIqu5zQs, stringbd4Nt2o, uintgjG7QO7, {from: accounts[2]});
		const uints7WIf2u = BigInt("536")
		const addressFavrlx = accounts[2]
		const uintF1ZllJf = BigInt("243")
		const uintFUzxE8t = BigInt("793")
		const uintAVcy44F = BigInt("636")
		const uintLvC30TT = BigInt("1255")
		const uintJYkn0gv = BigInt("857")
		const addressSZGZkfT = accounts[2]
		const uintDog9Rp = BigInt("1728")
		const uint256YUcvi8N = await WolfStakingRewardsXEI9NEj.earned.call(addressFavrlx, uints7WIf2u, {from: accounts[0]});
		const stringudXmmHE = await WolfStakingRewardsXEI9NEj.name.call({from: accounts[4]});
		const uint256y7OtLGt = await WolfStakingRewardsXEI9NEj.withdraw.call(uintFUzxE8t, uintF1ZllJf, {from: accounts[2]});
		const uint256D8DbA6 = await WolfStakingRewardsXEI9NEj.stake.call(uintLvC30TT, uintAVcy44F, {from: accounts[4]});
		const uint256LaF6aSK = await WolfStakingRewardsXEI9NEj.earned.call(addressSZGZkfT, uintJYkn0gv, {from: accounts[3]});
		const uint256s3Iem7i = await WolfStakingRewardsXEI9NEj.lastTimeRewardApplicable.call(uintDog9Rp, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressyBTTpIh = accounts[0]
		const addressCFEehIx = accounts[3]
		const addressyvVlcXV = accounts[5]
		const WolfStakingRewardsQ9dtgGf = await WolfStakingRewards.new(addressyBTTpIh, addressCFEehIx, addressyvVlcXV, {from: accounts[4]});
		const uintnYjQ2WK = BigInt("1842")
		const uintjvMFm3X = BigInt("789")
		const uintqjgjtzl = BigInt("1456")
		const addressdhOq8ZH = accounts[5]
		const uintwlUZ6lO = BigInt("196")
		const uintU43MpcT = BigInt("160")
		const uintC0igQZV = BigInt("142")
		const addressBshNSTl = accounts[1]
		const uintx4IvWC = BigInt("710")
		const uintWCur9Uu = BigInt("2018")
		const uintT4Mf7LB = BigInt("387")
		const uint256X4Y7kSJ = await WolfStakingRewardsQ9dtgGf.withdrawRemainingBalance.call(uintjvMFm3X, uintnYjQ2WK, {from: accounts[1]});
		const uint256WLBNrQQ = await WolfStakingRewardsQ9dtgGf.balanceOfPerPool.call(addressdhOq8ZH, uintqjgjtzl, {from: accounts[1]});
		const uint256q9iCAZw = await WolfStakingRewardsQ9dtgGf.stake.call(uintU43MpcT, uintwlUZ6lO, {from: accounts[2]});
		const uint256H3oSEiI = await WolfStakingRewardsQ9dtgGf.earned.call(addressBshNSTl, uintC0igQZV, {from: accounts[2]});
		const uint256VUGQOU7 = await WolfStakingRewardsQ9dtgGf.withdraw.call(uintWCur9Uu, uintx4IvWC, {from: accounts[2]});
		const uint256ATRo1YB = await WolfStakingRewardsQ9dtgGf.getRewardForDuration.call(uintT4Mf7LB, {from: accounts[2]});

		await expect(WolfStakingRewardsQ9dtgGf.withdrawRemainingBalance.call(uintjvMFm3X, uintnYjQ2WK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressc3DSBXn = accounts[0]
		const addressacoMjJg = accounts[3]
		const addressBXD5AQx = accounts[5]
		const WolfStakingRewardsQ9dtgGf = await WolfStakingRewards.new(addressc3DSBXn, addressacoMjJg, addressBXD5AQx, {from: accounts[4]});
		const uintliFlvIe = BigInt("1456")
		const addressgNpHwcb = accounts[6]
		const uintQL8nik5 = BigInt("374")
		const uint256WLBNrQQ = await WolfStakingRewardsQ9dtgGf.balanceOfPerPool.call(addressgNpHwcb, uintliFlvIe, {from: accounts[1]});
		const uint256ATRo1YB = await WolfStakingRewardsQ9dtgGf.getRewardForDuration.call(uintQL8nik5, {from: accounts[2]});

		assert.equal(uint256WLBNrQQ, BigInt("0"))
		await expect(WolfStakingRewardsQ9dtgGf.getRewardForDuration.call(uintQL8nik5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringcWFChQ9 = "sHtOJ3P6W8sO"
		const stringbmAmUIX = "uFsnSLA5srCmVpPzZA1JvgDQvTdZKGRKaBHac5BcIJvXv5Uf7sFUywOo8uZ6HF7lv0BBctFE18xd"
		const uint5Xhtko = BigInt("118")
		const WolfStakingRewardsreLEgUz = await WolfStakingRewards.new(stringcWFChQ9, stringbmAmUIX, uint5Xhtko, {from: accounts[4]});
		const uintqcaCgqo = BigInt("19")
		const uintaplE9qS = BigInt("1223")
		const uintUKx1Rd0 = BigInt("1895")
		const uintxTEZL5 = BigInt("1148")
		const uintKCxjRA0 = BigInt("907")
		const uintWAPmAyR = BigInt("475")
		const uint256lETMFs4 = await WolfStakingRewardsreLEgUz.exit.call(uintqcaCgqo, {from: accounts[3]});
		const uint256lB0VaPE = await WolfStakingRewardsreLEgUz.getRewardForDuration.call(uintaplE9qS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256cIeYkgS = await WolfStakingRewardsreLEgUz.withdraw.call(uintxTEZL5, uintUKx1Rd0, {from: accounts[5]});
		const stringEDJjLuI = await WolfStakingRewardsreLEgUz.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256z6KYnB5 = await WolfStakingRewardsreLEgUz.withdraw.call(uintWAPmAyR, uintKCxjRA0, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringhYKytC = "c0mzP12btKt288QFWN9w8yLIQseb7v"
		const stringksWcBLJ = "kHjcZMHBSw11lJe0tiYf"
		const uint5E59sS = BigInt("36")
		const WolfStakingRewardswXTXdWg = await WolfStakingRewards.new(stringhYKytC, stringksWcBLJ, uint5E59sS, {from: accounts[2]});
		const uintsoEjmAS = BigInt("785")
		const uintQZfvVd = await WolfStakingRewardswXTXdWg.getReward.call(uintsoEjmAS, {from: accounts[2]});
		await WolfStakingRewardswXTXdWg.nonReentrant.call({from: accounts[0]});
		await WolfStakingRewardswXTXdWg.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringO6LnIke = "etqmgNYgkgkPDUKApLRaWB13wpyaMfko7JTyTEu7ztaX0BpWVOFRzSBgj3Ths46uAtNo1oMT9mzDWEK3dtHDIllj"
		const stringd0WSGJ = "hzfyp4qK56DOwgeqBvjYapu48Esp9thlc5Qf96O3FIJ1TiYwuDfXCcmOwjOwe"
		const uintSWRdmKx = BigInt("127")
		const WolfStakingRewardsvqVj1br = await WolfStakingRewards.new(stringO6LnIke, stringd0WSGJ, uintSWRdmKx, {from: accounts[2]});
		const uintgI9vp2Y = BigInt("339")
		const stringRMH2cgH = await WolfStakingRewardsvqVj1br.name.call({from: accounts[0]});
		const uint256afh6Iwr = await WolfStakingRewardsvqVj1br.rewardPerToken.call(uintgI9vp2Y, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringaf3yQIQ = "qg2v7W9DoStPuC6zVvEBln9pxRy2v6seAd0wuPelU9aHoVKekXJkfST8cpOmQVVSH3CCnVponRbk0"
		const stringQjMIlIm = "6ITXbDYpLLBMZJiuBWnteR2TEHHaj6A8xjM1fLTgQdC2WQb"
		const uintNRdI0JB = BigInt("4")
		const WolfStakingRewardsCm6js87 = await WolfStakingRewards.new(stringaf3yQIQ, stringQjMIlIm, uintNRdI0JB, {from: accounts[4]});
		const uintx5d1pKc = BigInt("369")
		const uintsSKldd = BigInt("278")
		const uintfoFg8gJ = BigInt("1782")
		const uintBD1yAeK = BigInt("861")
		const uint256u0TSwx = await WolfStakingRewardsCm6js87.stake.call(uintsSKldd, uintx5d1pKc, {from: accounts[3]});
		await WolfStakingRewardsCm6js87.onlyOwner.call({from: accounts[1]});
		await WolfStakingRewardsCm6js87.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256d2YI1nN = await WolfStakingRewardsCm6js87.withdraw.call(uintBD1yAeK, uintfoFg8gJ, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringAjIRuvX = "vgLKkK9JRfZnyrJbKTjOQKaTLNJD22YsgW4pIdb5G7LLWHrwi5WuvaRijdr"
		const stringAKviW6D = "h35rQLWv3ts2iN9xpOo4KEybWHkKTTJVgReBMEx2LaQ4YKOq24op6eSD1h6frXFiUJ6VisDNx6diikBnSapLYc"
		const uintGQs3rYz = BigInt("155")
		const WolfStakingRewardsS5coNRG = await WolfStakingRewards.new(stringAjIRuvX, stringAKviW6D, uintGQs3rYz, {from: accounts[3]});
		const uintMCawwDu = BigInt("94")
		const uintAkgGkaJ = BigInt("1612")
		const uintrwR8Skt = BigInt("1942")
		const uintFJ372p5 = BigInt("34")
		const uintVxx4YVf = BigInt("233")
		const uintmyKoKQx = BigInt("1225")
		const uintKPXyRBh = BigInt("828")
		const uint256RVvV6u9 = await WolfStakingRewardsS5coNRG.exit.call(uintMCawwDu, {from: accounts[1]});
		const uint256QclQDLj = await WolfStakingRewardsS5coNRG.exit.call(uintAkgGkaJ, {from: accounts[1]});
		const uint256KffDIVy = await WolfStakingRewardsS5coNRG.stake.call(uintFJ372p5, uintrwR8Skt, {from: accounts[3]});
		const uint256U5rpiP = await WolfStakingRewardsS5coNRG.exit.call(uintVxx4YVf, {from: accounts[1]});
		const uint256F1pTGHA = await WolfStakingRewardsS5coNRG.stake.call(uintKPXyRBh, uintmyKoKQx, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringw8731yV = "ccbRbwAO6yHD8Q6g3j2MA3f1D8ydaSeVvfIdK7VxiNZjPc9TmZe272fpEwRGeyqLHZOZiqGVc3X"
		const stringYVGprBO = "3CbiOXTdpDN9l9IpYfgf3WULfXvN3Jx9xSGiCwt64HxaD2tg49Bs5xlGuImgnlIMxWh1oFgo1XwesezuoBrPn51QuqiIRT5oo"
		const uintwUfKYz1 = BigInt("58")
		const WolfStakingRewardszF1a6QC = await WolfStakingRewards.new(stringw8731yV, stringYVGprBO, uintwUfKYz1, {from: "0x0000000000000000000000000000000000000001"});
		const uintyXeSuQ2 = BigInt("63")
		const uintBwmoDQH = BigInt("80")
		const uintTiI8q8m = BigInt("1842")
		const addressqNL3Q4r = accounts[1]
		const uintH6ptrB = BigInt("841")
		const uint8Eb6hCpy = await WolfStakingRewardszF1a6QC.decimals.call({from: accounts[1]});
		const uint256JecqTo = await WolfStakingRewardszF1a6QC.withdraw.call(uintBwmoDQH, uintyXeSuQ2, {from: accounts[3]});
		await WolfStakingRewardszF1a6QC.onlyOwner.call({from: accounts[1]});
		const uint256mELM2te = await WolfStakingRewardszF1a6QC.earned.call(addressqNL3Q4r, uintTiI8q8m, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardszF1a6QC.onlyOwner.call({from: accounts[4]});
		const uint256arrayKZ6oI57 = await WolfStakingRewardszF1a6QC.updateNotifyRewardAmount.call(uintH6ptrB, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjL57Hva = "fO9KFBkaIGDuXJiGRE2czl8ZVaEtWEEmzHIKqv1wpPYRbjIO2jUSNJBEouOABfUKkRJpu3eygX6kd"
		const stringBfkAOTU = "7X2ilq"
		const uintDcnga7J = BigInt("113")
		const WolfStakingRewardsouuTJEB = await WolfStakingRewards.new(stringjL57Hva, stringBfkAOTU, uintDcnga7J, {from: accounts[4]});
		const uintYLTVqRA = BigInt("1716")
		const uintixOIgl = BigInt("1203")
		const uintKb2jDPv = BigInt("1210")
		const uintGc0NUw = BigInt("1887")
		const uintDn2Svuz = BigInt("1056")
		const uintsseMeLn = BigInt("985")
		const uint256RsmQQi3 = await WolfStakingRewardsouuTJEB.exit.call(uintYLTVqRA, {from: accounts[1]});
		const uint256m7kVeHw = await WolfStakingRewardsouuTJEB.withdrawRemainingBalance.call(uintKb2jDPv, uintixOIgl, {from: accounts[4]});
		const uint8F8DEw15 = await WolfStakingRewardsouuTJEB.decimals.call({from: accounts[4]});
		const uintRJqaYk2 = await WolfStakingRewardsouuTJEB.getReward.call(uintGc0NUw, {from: accounts[2]});
		const uintCguKqn1 = await WolfStakingRewardsouuTJEB.getReward.call(uintDn2Svuz, {from: accounts[3]});
		const uint256nI1VrtA = await WolfStakingRewardsouuTJEB.totalSupplyPerPool.call(uintsseMeLn, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringtH7GByd = "xFMRcbz8Md2gVnfKwVfaDNCERqOrHqGUHuftRGrsp0a0v0APfUJexKOaQck6Yq2uNemsJOdG4cIbeZw4C"
		const stringjOgAU97 = "IDD1RyO5XQmQrKIW6ammw2sCgQYt3n56XauKIJjaMLsa4iFEFzaymPg820YgCMxbpmbS5Zbd3Zo1NwsFND"
		const uintnPd0qaw = BigInt("166")
		const WolfStakingRewardsG6TvzZt = await WolfStakingRewards.new(stringtH7GByd, stringjOgAU97, uintnPd0qaw, {from: accounts[4]});
		const uintbJpXQRF = BigInt("1326")
		const uintYxAEBb = BigInt("616")
		const uintgCeT79 = BigInt("175")
		const uintKAILBzN = BigInt("572")
		const uintQc3OoQB = BigInt("1321")
		const uint256k3pelpX = await WolfStakingRewardsG6TvzZt.withdrawRemainingBalance.call(uintYxAEBb, uintbJpXQRF, {from: accounts[2]});
		const uint256pZkL5QO = await WolfStakingRewardsG6TvzZt.withdraw.call(uintKAILBzN, uintgCeT79, {from: accounts[0]});
		const uint256WUhycKs = await WolfStakingRewardsG6TvzZt.getRewardForDuration.call(uintQc3OoQB, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsG6TvzZt.onlyOwner.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresskjWm5MB = accounts[2]
		const addressfEiRhfG = accounts[4]
		const addresslzgqOxJ = accounts[2]
		const WolfStakingRewardsge1787R = await WolfStakingRewards.new(addresskjWm5MB, addressfEiRhfG, addresslzgqOxJ, {from: accounts[2]});
		const uintpODGJG = BigInt("301")
		const uintzhRKQeE = BigInt("1791")
		const uintaBgCOep = BigInt("636")
		const uintLzsP96 = await WolfStakingRewardsge1787R.getReward.call(uintpODGJG, {from: accounts[1]});
		const uint256SKyLMEf = await WolfStakingRewardsge1787R.withdrawRemainingBalance.call(uintaBgCOep, uintzhRKQeE, {from: accounts[2]});

		await expect(WolfStakingRewardsge1787R.withdrawRemainingBalance.call(uintaBgCOep, uintzhRKQeE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringWGtjAi5 = "GzwHnhyaY3ShTkX7eue7384BC4YxaNx2XAUX4T9Bw3M9yAME7UOhzWkdnk22Cc9qxylYns8"
		const stringxVbXZLF = "NdEZTGJfcnmj4AL3KcyFsLFsIgM5P27udMyjVnjKifLbbF11Kw5Ze3LRkydXI"
		const uintYSoREJV = BigInt("48")
		const WolfStakingRewardshzvubfV = await WolfStakingRewards.new(stringWGtjAi5, stringxVbXZLF, uintYSoREJV, {from: accounts[0]});
		const uintafAonxX = BigInt("1692")
		const uintkfl2K3B = BigInt("458")
		const uint256Hk2GKSv = await WolfStakingRewardshzvubfV.rewardPerToken.call(uintafAonxX, {from: accounts[3]});
		const uint256BAiijgv = await WolfStakingRewardshzvubfV.totalSupplyPerPool.call(uintkfl2K3B, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringnXxoZVC = "tF3A2KCUAPvSBhbVC1PmRIiPmw56Ny1jasTCz6kjR4b3kG3M3J2eFWHANEeRMCer2kPeD5jsI"
		const stringzr8fIB3 = "Pvd7YKOPUsUlvEgCDQ2SOnbBkFjPzl3O4YybH85PWhJSACLJ4cFEYLf8kE0qqksVu62dJSpBkPVRAQIPp3IEvWIk7RoNfJOw"
		const uinthCUyAYq = BigInt("139")
		const WolfStakingRewardsZnr44xp = await WolfStakingRewards.new(stringnXxoZVC, stringzr8fIB3, uinthCUyAYq, {from: accounts[4]});
		const uintz6nPqU = BigInt("1948")
		const uintrS1Xd6L = BigInt("1186")
		const uintejzY3YO = BigInt("90")
		const uinttKUjUKO = BigInt("1298")
		const uintH3Hkk1 = BigInt("917")
		const addressLemtkd = accounts[4]
		const uintHh5A2CL = BigInt("1652")
		const uint256BsdrDhK = await WolfStakingRewardsZnr44xp.withdraw.call(uintrS1Xd6L, uintz6nPqU, {from: accounts[0]});
		const uint256gSdqk9i = await WolfStakingRewardsZnr44xp.withdrawRemainingBalance.call(uinttKUjUKO, uintejzY3YO, {from: accounts[5]});
		const addresslGSFyvm = await WolfStakingRewardsZnr44xp.updateReward.call(addressLemtkd, uintH3Hkk1, {from: accounts[4]});
		const uint256arrayDLgLkPW = await WolfStakingRewardsZnr44xp.updateNotifyRewardAmount.call(uintHh5A2CL, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const string8xyFnD = "2vWXdFiO4qoXgeTMisMN1XFuS9eYk57GxNykiwb37uL"
		const stringx6x9g0V = "EJJpLflqU6WVXVhgtQT1pkNU8JpV2orUqe9IfWRbc7BK6cCVXnkYgyYMNuHlK5pXoKWkP0eTRjUyOFJMhrbbdfge9gpoSer4"
		const uintLb8z4tI = BigInt("160")
		const WolfStakingRewardsdxx6T6c = await WolfStakingRewards.new(string8xyFnD, stringx6x9g0V, uintLb8z4tI, {from: accounts[5]});
		const uintO0fpMG = BigInt("1786")
		const uintqjVzHv = BigInt("571")
		const uintQspl1Ya = BigInt("1011")
		const uinto3AB7lI = BigInt("698")
		const uint256CH5Wtr0 = await WolfStakingRewardsdxx6T6c.lastTimeRewardApplicable.call(uintO0fpMG, {from: accounts[1]});
		const uint256Ijt3jQD = await WolfStakingRewardsdxx6T6c.exit.call(uintqjVzHv, {from: accounts[2]});
		const uint256MD9Fjw = await WolfStakingRewardsdxx6T6c.exit.call(uintQspl1Ya, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OuDlGL3 = await WolfStakingRewardsdxx6T6c.lastTimeRewardApplicable.call(uinto3AB7lI, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsgcd1Pz = "wW5"
		const stringxNGbOtw = "CWAYa7FhfBp994AaPol7mL3H3nEmWxxTw9MhYDYdlOhQRqvY"
		const uintYXKpKmO = BigInt("205")
		const WolfStakingRewardsDKRel7X = await WolfStakingRewards.new(stringsgcd1Pz, stringxNGbOtw, uintYXKpKmO, {from: accounts[1]});
		const uint2NzYzT = BigInt("309")
		const uint256hw6Q91K = await WolfStakingRewardsDKRel7X.lastTimeRewardApplicable.call(uint2NzYzT, {from: accounts[3]});
		const stringIOH5u2Y = await WolfStakingRewardsDKRel7X.symbol.call({from: accounts[3]});
		const stringl3AdNwn = await WolfStakingRewardsDKRel7X.symbol.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringMF9hhel = "i1SKuKjR5o7mm1Rvs8sEhhRWvrrueFhK1kmKUrAdMfE"
		const stringaNH8eje = "1KVVYBIwNZd5qvWv8KXPy2aFxb0Smz09gyQ6mYV36un0ckvS0xqs3BO0S5s0y"
		const uintYkUbzua = BigInt("62")
		const WolfStakingRewardsCYTr0VZ = await WolfStakingRewards.new(stringMF9hhel, stringaNH8eje, uintYkUbzua, {from: accounts[3]});
		const uintnNPFxkp = BigInt("658")
		const uint256NcMZyCq = await WolfStakingRewardsCYTr0VZ.lastTimeRewardApplicable.call(uintnNPFxkp, {from: accounts[4]});
		const string3Seg0m = await WolfStakingRewardsCYTr0VZ.name.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringX6Fq1T = "XoZpkwhWFOzJfRxG3yVnskQUFhlFwROexxzQU"
		const stringmzgAw78 = "NH1s5HGg2CxtvBAIOY5XFPSgmjblPZGXC"
		const uintsaOmL0u = BigInt("85")
		const WolfStakingRewardscc040FV = await WolfStakingRewards.new(stringX6Fq1T, stringmzgAw78, uintsaOmL0u, {from: accounts[2]});
		const uintU5NjQW9 = BigInt("1796")
		const uintO7U0kRD = BigInt("374")
		const uint256kmrwCOD = await WolfStakingRewardscc040FV.rewardPerToken.call(uintU5NjQW9, {from: accounts[3]});
		const uint256iaa4lsC = await WolfStakingRewardscc040FV.getRewardForDuration.call(uintO7U0kRD, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringU9hP38V = "C3pfXO1XOwDzazt8sTuQuKEj04JKTLWoUbGE4sn9VLL6QUpEkcdGvCG4RC0XNRIRUo6QK67s"
		const stringZOIeUrg = "ePDKGNebjLKsrNWRvJBg1TJ1MBcHU1FdowX8xu3Y2XEB2BfMOqgYlh3wygFBJPOF1PFqhtOxaG"
		const uintGyY9aId = BigInt("176")
		const WolfStakingRewardsIOgFUhP = await WolfStakingRewards.new(stringU9hP38V, stringZOIeUrg, uintGyY9aId, {from: accounts[4]});
		const uintj1T8Sl0 = BigInt("1810")
		const addressigKKIOE = accounts[3]
		const uintHqFIXUc = BigInt("326")
		const uintlMMWTvG = BigInt("207")
		const uintPYHi5i9 = BigInt("1856")
		const uintFrqhqan = BigInt("1218")
		const uint256CJNzwDy = await WolfStakingRewardsIOgFUhP.balanceOfPerPool.call(addressigKKIOE, uintj1T8Sl0, {from: accounts[4]});
		const uint256XJW2yhs = await WolfStakingRewardsIOgFUhP.exit.call(uintHqFIXUc, {from: accounts[3]});
		const uint256f5Tc2r3 = await WolfStakingRewardsIOgFUhP.totalSupplyPerPool.call(uintlMMWTvG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256auipnf9 = await WolfStakingRewardsIOgFUhP.stake.call(uintFrqhqan, uintPYHi5i9, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxlINXME = "WlMG1YxxIqMm7yeBu52a0PSEH0sW4mpfovZwX6Ts5bTjXP4YJV3K7Df82zoDnCOyXGQphUpnxzBV"
		const stringJTdSSsw = "lP7TMsqI249txIxVJi6ZJwcILuPYuaj9p8gbUaBXPdwmSHPBz2ruX1pHBrxmcTRPeeyjFMcPb0qM65jEU7VleWKPc0q4S8Te"
		const uintTsPg8lb = BigInt("91")
		const WolfStakingRewardsQsloGtH = await WolfStakingRewards.new(stringxlINXME, stringJTdSSsw, uintTsPg8lb, {from: "0x0000000000000000000000000000000000000001"});
		const uintUZzVnWQ = BigInt("1319")
		const uintB8ulAdB = BigInt("1403")
		const uint256arrayz7KS7pk = await WolfStakingRewardsQsloGtH.updateNotifyRewardAmount.call(uintUZzVnWQ, {from: accounts[0]});
		const uint256arrayxLc3Exk = await WolfStakingRewardsQsloGtH.updateNotifyRewardAmount.call(uintB8ulAdB, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPfTxZ4w = "HFqcUKyGqUV2rQQj5UrDBe27hAXkpsmwH5fK6FfngL8v7MzMWWDKEbnkuHCDHNAouX32pc"
		const stringMvc4aey = "thbP6nE5wEC"
		const uintx7kx4pd = BigInt("112")
		const WolfStakingRewardsLgoCdVl = await WolfStakingRewards.new(stringPfTxZ4w, stringMvc4aey, uintx7kx4pd, {from: accounts[0]});
		const uintdpI8Gh0 = BigInt("1176")
		const uintQ8ASzs = BigInt("1771")
		const uintFCNTxlz = BigInt("391")
		const uintprWYFIi = BigInt("1549")
		const uintZZJmRg = BigInt("1878")
		const uintnlVpgu = BigInt("1259")
		const uint256MIYYav4 = await WolfStakingRewardsLgoCdVl.withdraw.call(uintQ8ASzs, uintdpI8Gh0, {from: "0x0000000000000000000000000000000000000001"});
		const uintkqXKNrH = await WolfStakingRewardsLgoCdVl.getReward.call(uintFCNTxlz, {from: accounts[4]});
		const uint256ASKFDmS = await WolfStakingRewardsLgoCdVl.withdraw.call(uintZZJmRg, uintprWYFIi, {from: accounts[0]});
		const uint256kS9Fq1g = await WolfStakingRewardsLgoCdVl.getRewardForDuration.call(uintnlVpgu, {from: accounts[1]});
		await WolfStakingRewardsLgoCdVl.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressepaxsKY = accounts[1]
		const addresss0dh5c2 = accounts[4]
		const addressB31Sf1F = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardsNn4YUW8 = await WolfStakingRewards.new(addressepaxsKY, addresss0dh5c2, addressB31Sf1F, {from: "0x0000000000000000000000000000000000000001"});
		const uintvPnaKE = BigInt("1508")
		const uintRuItGOD = BigInt("628")
		const uintOZzXCV = BigInt("743")
		const uintXOxuOAd = BigInt("373")
		const uint256D6QCskI = await WolfStakingRewardsNn4YUW8.exit.call(uintvPnaKE, {from: accounts[3]});
		const uint256zlB2cWm = await WolfStakingRewardsNn4YUW8.rewardPerToken.call(uintRuItGOD, {from: accounts[5]});
		const uint256WheLTeZ = await WolfStakingRewardsNn4YUW8.totalSupplyPerPool.call(uintOZzXCV, {from: accounts[2]});
		const uint256yEMOmoL = await WolfStakingRewardsNn4YUW8.exit.call(uintXOxuOAd, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringbUknXzy = "9D5cW139uhCZEF2RWTX"
		const stringIPXYwYG = "2RNpWy218"
		const uintQyUIYEP = BigInt("34")
		const WolfStakingRewardsoZwG0Fc = await WolfStakingRewards.new(stringbUknXzy, stringIPXYwYG, uintQyUIYEP, {from: accounts[1]});
		const uintrHixWaZ = BigInt("89")
		const uintdrQi2zX = BigInt("1770")
		const uintNk0PnUs = BigInt("1523")
		const uintD9eTlzc = BigInt("29")
		const uintNoTWQV4 = BigInt("1381")
		const addressfre4Fy = accounts[1]
		const uint256CYSEESt = await WolfStakingRewardsoZwG0Fc.totalSupplyPerPool.call(uintrHixWaZ, {from: accounts[5]});
		const uint256Qzbbb65 = await WolfStakingRewardsoZwG0Fc.withdraw.call(uintNk0PnUs, uintdrQi2zX, {from: accounts[4]});
		const uint256PFmNdrz = await WolfStakingRewardsoZwG0Fc.lastTimeRewardApplicable.call(uintD9eTlzc, {from: accounts[2]});
		const uint256kQAFwd4 = await WolfStakingRewardsoZwG0Fc.earned.call(addressfre4Fy, uintNoTWQV4, {from: accounts[5]});
		const stringvPE15kx = await WolfStakingRewardsoZwG0Fc.name.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringlTzG1LC = "L8P3tRyXPwTFrHieyLYbCyTzuAris2PDpwO3UT3RVeGFdfEIP9ITphDEaZ"
		const stringjfSWox7 = "tRgjrLnqIYso1TpO8V2FG2Rha1SatTCJc5e"
		const uintRH5riZ5 = BigInt("35")
		const WolfStakingRewardsEJiEatV = await WolfStakingRewards.new(stringlTzG1LC, stringjfSWox7, uintRH5riZ5, {from: accounts[1]});
		const uintgXBUoL5 = BigInt("1414")
		await WolfStakingRewardsEJiEatV.nonReentrant.call({from: accounts[5]});
		await WolfStakingRewardsEJiEatV.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256arraycigi4VI = await WolfStakingRewardsEJiEatV.updateNotifyRewardAmount.call(uintgXBUoL5, {from: accounts[1]});
		await WolfStakingRewardsEJiEatV.nonReentrant.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressUMhvPX2 = accounts[2]
		const addressF4Vd7zg = accounts[4]
		const addressB3Ag07E = accounts[2]
		const WolfStakingRewardsge1787R = await WolfStakingRewards.new(addressUMhvPX2, addressF4Vd7zg, addressB3Ag07E, {from: accounts[2]});
		const uintAwhPgGy = BigInt("2")
		const uintoqhRHx = BigInt("1357")
		const uinthqYsHJg = BigInt("618")
		const addressZmPkNpZ = accounts[3]
		const uintY6hcZl = BigInt("306")
		const uint256JjXMp1 = await WolfStakingRewardsge1787R.withdraw.call(uintoqhRHx, uintAwhPgGy, {from: accounts[1]});
		const addressaaxmjgC = await WolfStakingRewardsge1787R.updateReward.call(addressZmPkNpZ, uinthqYsHJg, {from: accounts[3]});
		const uintLzsP96 = await WolfStakingRewardsge1787R.getReward.call(uintY6hcZl, {from: accounts[1]});

		await expect(WolfStakingRewardsge1787R.withdraw.call(uintoqhRHx, uintAwhPgGy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringtZQsiUT = "Sq33G6ZTPYKKo0X3PC0Jid1D7CkmmxCN75Jx"
		const stringTyst6VG = "ewa1Uh7SKVNHg9TQQwnouYVOm5lmc"
		const uintbHZvGjX = BigInt("242")
		const WolfStakingRewardsJ2HnFWs = await WolfStakingRewards.new(stringtZQsiUT, stringTyst6VG, uintbHZvGjX, {from: accounts[3]});
		const uintElhCCf4 = BigInt("1904")
		const addressOdbYNv5 = accounts[2]
		const uintpIwGfu9 = BigInt("293")
		const addressnoDUZv7 = accounts[4]
		const uintwT7HDYK = BigInt("1308")
		const addressinJFvN = accounts[4]
		const stringBpqV3lq = await WolfStakingRewardsJ2HnFWs.symbol.call({from: accounts[0]});
		const uint256AdCEQCQ = await WolfStakingRewardsJ2HnFWs.balanceOfPerPool.call(addressOdbYNv5, uintElhCCf4, {from: accounts[4]});
		const uint256efE6inz = await WolfStakingRewardsJ2HnFWs.balanceOfPerPool.call(addressnoDUZv7, uintpIwGfu9, {from: accounts[5]});
		await WolfStakingRewardsJ2HnFWs.nonReentrant.call({from: accounts[3]});
		const uint256ag5eTJy = await WolfStakingRewardsJ2HnFWs.balanceOfPerPool.call(addressinJFvN, uintwT7HDYK, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHVEv4ES = "w5q1GwAt7DXDkUpHzU2KMSETno8TWJAKk5rgzBIRuc4eLlB"
		const stringWwcLV2N = "jW2JtYJVvUREPHMQow2VhDmfyuPY"
		const uintSXNKslk = BigInt("52")
		const WolfStakingRewardsHbuPI4x = await WolfStakingRewards.new(stringHVEv4ES, stringWwcLV2N, uintSXNKslk, {from: accounts[4]});
		const uintmzfkNjY = BigInt("1901")
		const uintGSfXdJv = BigInt("582")
		const uintoij4GcP = BigInt("959")
		const uintxfjIkZ5 = BigInt("1784")
		const uintNnwSxx = BigInt("146")
		const uint256arrayBXTnZvO = await WolfStakingRewardsHbuPI4x.updateNotifyRewardAmount.call(uintmzfkNjY, {from: accounts[5]});
		const uint256Ll5vt5l = await WolfStakingRewardsHbuPI4x.stake.call(uintoij4GcP, uintGSfXdJv, {from: accounts[1]});
		await WolfStakingRewardsHbuPI4x.onlyOwner.call({from: accounts[4]});
		const uint256xDcra2w = await WolfStakingRewardsHbuPI4x.lastTimeRewardApplicable.call(uintxfjIkZ5, {from: accounts[4]});
		const uint256arrayMnXQv1J = await WolfStakingRewardsHbuPI4x.updateNotifyRewardAmount.call(uintNnwSxx, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZw5QsQd = "9qL1WEftRPEqH89OrsrF7d7imYEWpoSqxoBT8SVnWqgno93AtMIkoNju8WvtDScbwCLCaNXIM2vnfC9dqRSadEabN31tw5fnff"
		const stringmsqDmAa = "fvvuQvW69"
		const uintfhb2rM = BigInt("21")
		const WolfStakingRewardsgK4i6cb = await WolfStakingRewards.new(stringZw5QsQd, stringmsqDmAa, uintfhb2rM, {from: accounts[2]});
		const uintiTl2IBG = BigInt("1142")
		const uintGOHz0vv = BigInt("2036")
		const uintpykAvyw = BigInt("1226")
		const uintUPBSQ97 = BigInt("1545")
		const uint256niPR2FU = await WolfStakingRewardsgK4i6cb.lastTimeRewardApplicable.call(uintiTl2IBG, {from: accounts[5]});
		const uint256ymuFgzq = await WolfStakingRewardsgK4i6cb.withdraw.call(uintpykAvyw, uintGOHz0vv, {from: accounts[1]});
		const uint8wy1wYD = await WolfStakingRewardsgK4i6cb.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256F2YjFgj = await WolfStakingRewardsgK4i6cb.lastTimeRewardApplicable.call(uintUPBSQ97, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSsIl7ag = "lNDVbeEdeku6fcIjLFbkKp9hL36JF4wgpW1Np"
		const stringh0I62pI = "YybR913JayGIH24OclMwS"
		const uintnCR9GMR = BigInt("16")
		const WolfStakingRewardsYlQ0GXp = await WolfStakingRewards.new(stringSsIl7ag, stringh0I62pI, uintnCR9GMR, {from: accounts[5]});
		const uintv4PKg4o = BigInt("562")
		const uintbQvn3B2 = BigInt("328")
		await WolfStakingRewardsYlQ0GXp.onlyRewardsDistribution.call({from: accounts[2]});
		const uintPpRJ1AG = await WolfStakingRewardsYlQ0GXp.getReward.call(uintv4PKg4o, {from: accounts[1]});
		const uint256arrayThrWb2z = await WolfStakingRewardsYlQ0GXp.updateNotifyRewardAmount.call(uintbQvn3B2, {from: accounts[1]});
		await WolfStakingRewardsYlQ0GXp.onlyOwner.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringprSTBJ = "Batorr74K7R16p2PpU5LRCmUcgL5WSAF9VYnNgALHVWdbh83nMo1XyS3G7hA"
		const stringt84PfrJ = "If4zjGmh3SIMDmr837lmS36ErOS6qe2EpdgQqViVtusWU"
		const uintdNaifIZ = BigInt("192")
		const WolfStakingRewardsa5gLoQH = await WolfStakingRewards.new(stringprSTBJ, stringt84PfrJ, uintdNaifIZ, {from: accounts[1]});
		const uintYdmuLMc = BigInt("1132")
		const uintcBKlZKr = BigInt("145")
		const uintHo175D6 = BigInt("305")
		await WolfStakingRewardsa5gLoQH.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256sgByUm7 = await WolfStakingRewardsa5gLoQH.getRewardForDuration.call(uintYdmuLMc, {from: accounts[5]});
		await WolfStakingRewardsa5gLoQH.nonReentrant.call({from: accounts[4]});
		const uint8qway1Ev = await WolfStakingRewardsa5gLoQH.decimals.call({from: accounts[3]});
		const uint256Y2lz2u = await WolfStakingRewardsa5gLoQH.rewardPerToken.call(uintcBKlZKr, {from: accounts[1]});
		const uint256Vxtuudt = await WolfStakingRewardsa5gLoQH.lastTimeRewardApplicable.call(uintHo175D6, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvhWrJX = "rqvLm5X7H3UTHg"
		const stringF9kgFP = "hJSwYUX8OKAsVzDWh6UjWU9HqePoWl3Cinof2XlrnsfDXpTuLOLYpWeRRoq"
		const uintfumUDJ4 = BigInt("7")
		const WolfStakingRewardsWKXa0G2 = await WolfStakingRewards.new(stringvhWrJX, stringF9kgFP, uintfumUDJ4, {from: accounts[4]});
		const uintulGdaf3 = BigInt("436")
		const addressgiLvHYc = accounts[3]
		const uintYOb9Fkf = BigInt("962")
		const uint8Yq4Wfje = await WolfStakingRewardsWKXa0G2.decimals.call({from: accounts[3]});
		const uint256rY7yxC = await WolfStakingRewardsWKXa0G2.balanceOfPerPool.call(addressgiLvHYc, uintulGdaf3, {from: accounts[4]});
		await WolfStakingRewardsWKXa0G2.nonReentrant.call({from: accounts[5]});
		const uint8ogF7JAp = await WolfStakingRewardsWKXa0G2.decimals.call({from: accounts[4]});
		await WolfStakingRewardsWKXa0G2.nonReentrant.call({from: accounts[2]});
		const uint256BAEzFW8 = await WolfStakingRewardsWKXa0G2.rewardPerToken.call(uintYOb9Fkf, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzJdZbW4 = "zKkIywMzOnbCKaMnYMRjC8DSHdSY"
		const stringEg9igMw = "S3hfmr3eMoUwfJzM4yuZubZOir2clF9DOlWE6VuoGFDxv6TOLOrkpgfH735jbBGQAQ56WCMdCUakDb"
		const uintnYVxr6u = BigInt("26")
		const WolfStakingRewardsaAxlkf6 = await WolfStakingRewards.new(stringzJdZbW4, stringEg9igMw, uintnYVxr6u, {from: accounts[2]});
		const uintJU3Rfhw = BigInt("258")
		const uintkuG8Szf = BigInt("1348")
		await WolfStakingRewardsaAxlkf6.onlyOwner.call({from: accounts[3]});
		const uint256Hl5yWdp = await WolfStakingRewardsaAxlkf6.totalSupplyPerPool.call(uintJU3Rfhw, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ixTTBYw = await WolfStakingRewardsaAxlkf6.exit.call(uintkuG8Szf, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringO0G27MV = "wIcV2wn662CeL55DE62kc9tdSN0VaxAKRis4c8LTgt8F26VtohYxCJMwB2PXk4pJtQfhrxPVKCONJ70YntvMb2iSXsLWJycp"
		const stringoG5pjeV = "7rksSbEG8SBwdAvsXgEEfQGsRElPuVmT7DAR0UyuUcm1z5K"
		const uintJbdvnpy = BigInt("174")
		const WolfStakingRewardsy4kzQpH = await WolfStakingRewards.new(stringO0G27MV, stringoG5pjeV, uintJbdvnpy, {from: accounts[4]});
		const uintjp3pR2P = BigInt("1479")
		const uintuQCNS2e = BigInt("1226")
		const uintkcQlk1 = BigInt("1784")
		const uintKTE0IrP = BigInt("955")
		const uintgRNeji9 = BigInt("1592")
		const addressLmrn7lt = accounts[1]
		const uint256IyrXE6G = await WolfStakingRewardsy4kzQpH.lastTimeRewardApplicable.call(uintjp3pR2P, {from: accounts[2]});
		const uint256JNqiemO = await WolfStakingRewardsy4kzQpH.stake.call(uintkcQlk1, uintuQCNS2e, {from: accounts[0]});
		const uintPW8lZfu = await WolfStakingRewardsy4kzQpH.getReward.call(uintKTE0IrP, {from: accounts[0]});
		const uint256K3phPs7 = await WolfStakingRewardsy4kzQpH.balanceOfPerPool.call(addressLmrn7lt, uintgRNeji9, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringn5sqxwX = "791vhGqYJCwTJfQuAXlJ8xZ22fAWvKwhCxMR1Fc1eXcpuHtlJdmfvHCe8F3z242zeabLGIOh7TZ3Pl5JNM5gJxBc46NeoJCc"
		const stringDCaIlZo = "8d5zsTEej"
		const uintNU5nBra = BigInt("189")
		const WolfStakingRewardslizDfL = await WolfStakingRewards.new(stringn5sqxwX, stringDCaIlZo, uintNU5nBra, {from: accounts[3]});
		const uinthGXNZtu = BigInt("1937")
		const uintJfir30h = BigInt("79")
		const uintxoHBMrq = BigInt("2")
		const uintBSTL9fN = BigInt("1960")
		await WolfStakingRewardslizDfL.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256BHYqci1 = await WolfStakingRewardslizDfL.totalSupplyPerPool.call(uinthGXNZtu, {from: accounts[4]});
		const uint256hq6XMtY = await WolfStakingRewardslizDfL.totalSupplyPerPool.call(uintJfir30h, {from: accounts[3]});
		const uint256FRuPELt = await WolfStakingRewardslizDfL.withdrawRemainingBalance.call(uintBSTL9fN, uintxoHBMrq, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringifiQ2gp = "CyT6HmXNbSj4iUHC3zdoOODJdf"
		const stringAPbiZOE = "VHQqZvl5uRboGJZJNzgndYovsrBP457s0EkhGsFnAP8XlfON5WrdVT0cl5As6D2BWyyyowdpUZ"
		const uintPCIgQj2 = BigInt("89")
		const WolfStakingRewardsl3f6rIZ = await WolfStakingRewards.new(stringifiQ2gp, stringAPbiZOE, uintPCIgQj2, {from: accounts[1]});
		const uint2XoNFk = BigInt("1366")
		const uintUgUgf9 = BigInt("684")
		const uintZXDWx9 = BigInt("1477")
		const stringTc4xP33 = await WolfStakingRewardsl3f6rIZ.symbol.call({from: accounts[2]});
		const uintXR1BMUz = await WolfStakingRewardsl3f6rIZ.getReward.call(uint2XoNFk, {from: accounts[1]});
		await WolfStakingRewardsl3f6rIZ.onlyOwner.call({from: accounts[5]});
		const uint256tBfYHr = await WolfStakingRewardsl3f6rIZ.rewardPerToken.call(uintUgUgf9, {from: accounts[4]});
		const uint256e06wlbE = await WolfStakingRewardsl3f6rIZ.rewardPerToken.call(uintZXDWx9, {from: accounts[2]});
		await WolfStakingRewardsl3f6rIZ.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringZxxgQiH = "B9fGcrguiJReUNSzgr8sDcEM6mPF"
		const stringBqZfvNv = "qs35COR2KeSU7l5zrtHiMBV943"
		const uintBzAaVy = BigInt("166")
		const WolfStakingRewardskC4jCHE = await WolfStakingRewards.new(stringZxxgQiH, stringBqZfvNv, uintBzAaVy, {from: accounts[5]});
		const uint3qhcKl = BigInt("632")
		const uintnbHQ66k = BigInt("1896")
		const uintldr7aXD = BigInt("996")
		const uintZVod5wo = BigInt("1954")
		const uint256sUyAxuB = await WolfStakingRewardskC4jCHE.withdrawRemainingBalance.call(uintnbHQ66k, uint3qhcKl, {from: accounts[1]});
		const uint256wlq59wx = await WolfStakingRewardskC4jCHE.withdrawRemainingBalance.call(uintZVod5wo, uintldr7aXD, {from: accounts[4]});
		const uint8zOT9Vyl = await WolfStakingRewardskC4jCHE.decimals.call({from: accounts[2]});
		await WolfStakingRewardskC4jCHE.nonReentrant.call({from: accounts[1]});
	});
})