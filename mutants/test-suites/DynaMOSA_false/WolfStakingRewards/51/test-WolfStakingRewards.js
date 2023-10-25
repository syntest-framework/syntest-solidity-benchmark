const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const stringXPeaZ2 = "XtNweRrswid2oL6tspTmCVqWDFDv9p4PkMYT1Hik"
		const stringM9YH9FN = "LBz1MrdoL9TAFR21VFPvguUULn5A3f3WqkiEdh4L7879aDuQSBuLnRTibLOXeCYbNOrvMpehwIL9xHgqXWC"
		const uinthZt4DNt = BigInt("111")
		const WolfStakingRewardsGDKYwFO = await WolfStakingRewards.new(stringXPeaZ2, stringM9YH9FN, uinthZt4DNt, {from: accounts[5]});
		const uintprOUcqs = BigInt("718")
		const uintGdVpix9 = BigInt("932")
		const addressMzcD8RL = accounts[0]
		const uint256mi6v2DV = await WolfStakingRewardsGDKYwFO.exit.call(uintprOUcqs, {from: accounts[2]});
		const uint256lczE9PY = await WolfStakingRewardsGDKYwFO.earned.call(addressMzcD8RL, uintGdVpix9, {from: accounts[2]});
		await WolfStakingRewardsGDKYwFO.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressdfp40E2 = accounts[5]
		const addressLh1NiPy = accounts[2]
		const addressKRFhTY9 = accounts[0]
		const WolfStakingRewardsFndUkic = await WolfStakingRewards.new(addressdfp40E2, addressLh1NiPy, addressKRFhTY9, {from: accounts[0]});
		const uintBgM2Y1I = BigInt("768")
		const addressxOM7Ezm = accounts[0]
		const uintoCIuZLp = BigInt("999")
		const uintE1fDqnA = BigInt("1078")
		const uintnDvlW7 = BigInt("1704")
		const uintinohnV = BigInt("1647")
		const addresswJWHxcQ = accounts[5]
//		const addressGgoKPq8 = await WolfStakingRewardsFndUkic.updateReward.call(addressxOM7Ezm, uintBgM2Y1I, {from: accounts[5]});
//		await WolfStakingRewardsFndUkic.nonReentrant.call({from: accounts[4]});
//		const uint256ry7r5RY = await WolfStakingRewardsFndUkic.withdraw.call(uintE1fDqnA, uintoCIuZLp, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256exItKj3 = await WolfStakingRewardsFndUkic.getRewardForDuration.call(uintnDvlW7, {from: accounts[2]});
//		const addressr2hZFoH = await WolfStakingRewardsFndUkic.updateReward.call(addresswJWHxcQ, uintinohnV, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WolfStakingRewardsFndUkic.updateReward.call(addressxOM7Ezm, uintBgM2Y1I, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringjml1L1P = "tzb37d6jq3ZD2zGLS69EavT2IEUtD9bZmftPd7dsiUgV7"
		const stringsOBohuu = "E"
		const uintUci2DQb = BigInt("200")
		const WolfStakingRewardsBaaajKz = await WolfStakingRewards.new(stringjml1L1P, stringsOBohuu, uintUci2DQb, {from: accounts[1]});
		const uintwlEeiA2 = BigInt("1052")
		const addressMTAqHi4 = accounts[3]
		const uintQHe51GC = BigInt("231")
		const uintgPyk3UA = BigInt("88")
		const addressrHNH8PC = accounts[3]
		const uint256Ogd1eV6 = await WolfStakingRewardsBaaajKz.earned.call(addressMTAqHi4, uintwlEeiA2, {from: accounts[4]});
		const uint256NkCM5MD = await WolfStakingRewardsBaaajKz.rewardPerToken.call(uintQHe51GC, {from: accounts[1]});
		await WolfStakingRewardsBaaajKz.onlyRewardsDistribution.call({from: accounts[5]});
		const addressfvoc56y = await WolfStakingRewardsBaaajKz.updateReward.call(addressrHNH8PC, uintgPyk3UA, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressPdBOvsT = accounts[3]
		const addressIJ4Wy96 = "0x0000000000000000000000000000000000000001"
		const addressD68XUba = accounts[3]
		const WolfStakingRewardsh6ukWNy = await WolfStakingRewards.new(addressPdBOvsT, addressIJ4Wy96, addressD68XUba, {from: accounts[3]});
		const uintAQHQ3H = BigInt("994")
		const uintEWAMqvB = BigInt("128")
		const uint2565t2fpc = await WolfStakingRewardsh6ukWNy.rewardPerToken.call(uintAQHQ3H, {from: accounts[4]});
		const uintDTthURv = await WolfStakingRewardsh6ukWNy.getReward.call(uintEWAMqvB, {from: accounts[1]});
//		const stringescztcH = await WolfStakingRewardsh6ukWNy.symbol.call({from: accounts[3]});
//		await WolfStakingRewardsh6ukWNy.onlyRewardsDistribution.call({from: accounts[3]});

		assert.equal(uint2565t2fpc, BigInt("0"))
		await expect(WolfStakingRewardsh6ukWNy.symbol.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringRsLFzXb = "pbDi17Il0So69WLfX1iLTDphb2ajveBjXALkLluT62fcB77oVNzwIKp7xgziRi3aBdIMbNRMrrjQdHw2Hx1wb3Kqv3"
		const stringgoYfxnu = "FaBw1VuFe1lxq1MIWbb2vHHl4UsiHbJK8sLbm"
		const uintjn2sNQf = BigInt("219")
		const WolfStakingRewardsxTGdZ3e = await WolfStakingRewards.new(stringRsLFzXb, stringgoYfxnu, uintjn2sNQf, {from: accounts[5]});
		const uintdH0gtfQ = BigInt("712")
		const uintpW6dzV = BigInt("359")
		const uintJ33RBTW = BigInt("22")
		const uintoJGu0lD = BigInt("1010")
		await WolfStakingRewardsxTGdZ3e.nonReentrant.call({from: accounts[2]});
		const uint256NFXDW4 = await WolfStakingRewardsxTGdZ3e.stake.call(uintpW6dzV, uintdH0gtfQ, {from: accounts[4]});
		const uint2564dcbEm = await WolfStakingRewardsxTGdZ3e.exit.call(uintJ33RBTW, {from: accounts[3]});
		const uint256CCWmzC0 = await WolfStakingRewardsxTGdZ3e.rewardPerToken.call(uintoJGu0lD, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIn4cetO = "Ak40f699O9Ka"
		const stringMGzMfF8 = "ioUctM2IKf6rA2ri0fNJ4bM0E6CHWHVFRkF4aetI4PcTEwGo2MwQtO3aOTaE3XFvdBkUE5FScxtdLl7UMGthoUnRIfKhh"
		const uintkWRTVaS = BigInt("181")
		const WolfStakingRewardsQgCNC62 = await WolfStakingRewards.new(stringIn4cetO, stringMGzMfF8, uintkWRTVaS, {from: accounts[2]});
		const uintvNPRpJc = BigInt("2")
		const uintQ92TMYZ = BigInt("976")
		const uintMUWeCk3 = BigInt("1852")
		const uintYtWbhn9 = BigInt("1205")
		const uintQlDMhD = BigInt("308")
		const uintQNBYINy = BigInt("130")
		const uint2566mCyfB = await WolfStakingRewardsQgCNC62.withdrawRemainingBalance.call(uintQ92TMYZ, uintvNPRpJc, {from: accounts[3]});
		const uint256rXhMwoG = await WolfStakingRewardsQgCNC62.totalSupplyPerPool.call(uintMUWeCk3, {from: accounts[3]});
		const stringw2UBQo8 = await WolfStakingRewardsQgCNC62.symbol.call({from: accounts[0]});
		const uint256AxKu6R = await WolfStakingRewardsQgCNC62.getRewardForDuration.call(uintYtWbhn9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256cjnl46W = await WolfStakingRewardsQgCNC62.withdrawRemainingBalance.call(uintQNBYINy, uintQlDMhD, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsQgCNC62.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressmiEfxG7 = accounts[3]
		const addressfSKGRwX = accounts[2]
		const addressbpp3JlT = accounts[3]
		const WolfStakingRewardsumZB2z = await WolfStakingRewards.new(addressmiEfxG7, addressfSKGRwX, addressbpp3JlT, {from: "0x0000000000000000000000000000000000000001"});
		const uintv4nvaIX = BigInt("1775")
		const uintOBpJjxh = BigInt("1030")
		const uintfCCy3BM = BigInt("1071")
		const uintIxKc7y = BigInt("97")
		const uintJWAP5R2 = BigInt("1893")
		const uint256LqEKUnw = await WolfStakingRewardsumZB2z.stake.call(uintOBpJjxh, uintv4nvaIX, {from: accounts[3]});
		await WolfStakingRewardsumZB2z.onlyOwner.call({from: accounts[3]});
		const uint256oYOzHj3 = await WolfStakingRewardsumZB2z.stake.call(uintIxKc7y, uintfCCy3BM, {from: accounts[1]});
		const uint256UvG7uXR = await WolfStakingRewardsumZB2z.exit.call(uintJWAP5R2, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addresstPD6BEC = "0x0000000000000000000000000000000000000001"
		const addressMbQsYSd = accounts[4]
		const addresswWnGd0v = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardsqyvxIvp = await WolfStakingRewards.new(addresstPD6BEC, addressMbQsYSd, addresswWnGd0v, {from: accounts[0]});
		const uinta76bkwH = BigInt("632")
		const uintMg4EYF = BigInt("202")
//		const uint256K91UYDi = await WolfStakingRewardsqyvxIvp.stake.call(uintMg4EYF, uinta76bkwH, {from: accounts[1]});
//		const uint8ZZ4E14v = await WolfStakingRewardsqyvxIvp.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(WolfStakingRewardsqyvxIvp.stake.call(uintMg4EYF, uinta76bkwH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressogKNZuo = accounts[5]
		const addressckZxrnb = accounts[0]
		const addresso4jHvDJ = accounts[1]
		const WolfStakingRewardsiGhcfdO = await WolfStakingRewards.new(addressogKNZuo, addressckZxrnb, addresso4jHvDJ, {from: accounts[0]});
		const uintqIBT7y4 = BigInt("1596")
		const uintLDhBYzY = BigInt("1169")
		const uintdqXWTGL = BigInt("1548")
		const uinthizkUwh = BigInt("220")
		const uintbT1xnMX = await WolfStakingRewardsiGhcfdO.getReward.call(uintqIBT7y4, {from: accounts[1]});
		const uint256gSfo6Os = await WolfStakingRewardsiGhcfdO.totalSupplyPerPool.call(uintLDhBYzY, {from: accounts[2]});
//		const uint256TdfcIqM = await WolfStakingRewardsiGhcfdO.getRewardForDuration.call(uintdqXWTGL, {from: "0x0000000000000000000000000000000000000001"});
//		const uintNyheUxq = await WolfStakingRewardsiGhcfdO.getReward.call(uinthizkUwh, {from: accounts[3]});

		assert.equal(uint256gSfo6Os, BigInt("0"))
		await expect(WolfStakingRewardsiGhcfdO.getRewardForDuration.call(uintdqXWTGL, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressxFiTync = accounts[3]
		const addressjqkZ70X = accounts[2]
		const addresspd2aJWq = accounts[0]
		const WolfStakingRewardsoQV6zt = await WolfStakingRewards.new(addressxFiTync, addressjqkZ70X, addresspd2aJWq, {from: accounts[2]});
		const uintTbhifXN = BigInt("1534")
		const addressdOvJ6zK = accounts[3]
		const uintD8DBzzR = BigInt("407")
		const uintyPrWCAB = BigInt("1573")
		const uint256KaXfqJV = await WolfStakingRewardsoQV6zt.earned.call(addressdOvJ6zK, uintTbhifXN, {from: accounts[5]});
		const uintcCWT2KO = await WolfStakingRewardsoQV6zt.getReward.call(uintD8DBzzR, {from: accounts[4]});
//		const uint256arraytGarg4r = await WolfStakingRewardsoQV6zt.updateNotifyRewardAmount.call(uintyPrWCAB, {from: accounts[1]});

		assert.equal(uint256KaXfqJV, BigInt("0"))
		await expect(WolfStakingRewardsoQV6zt.updateNotifyRewardAmount.call(uintyPrWCAB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressR29XMJW = accounts[3]
		const addressLunksVI = "0x0000000000000000000000000000000000000001"
		const addresshgCCcvE = accounts[3]
		const WolfStakingRewardsh6ukWNy = await WolfStakingRewards.new(addressR29XMJW, addressLunksVI, addresshgCCcvE, {from: accounts[3]});
		const uintlsh1ha1 = BigInt("994")
		const uintkDVqacq = BigInt("128")
		const uintSnj1zIw = BigInt("899")
		const uintCgqHfd = BigInt("1243")
		const uintGhWG8Ef = BigInt("825")
		const uintPKSZHkf = BigInt("25")
		const uint2565t2fpc = await WolfStakingRewardsh6ukWNy.rewardPerToken.call(uintlsh1ha1, {from: accounts[4]});
		const uintDTthURv = await WolfStakingRewardsh6ukWNy.getReward.call(uintkDVqacq, {from: accounts[1]});
//		const uint256H9npvnW = await WolfStakingRewardsh6ukWNy.withdrawRemainingBalance.call(uintCgqHfd, uintSnj1zIw, {from: accounts[0]});
//		const uint256UAY4R7a = await WolfStakingRewardsh6ukWNy.getRewardForDuration.call(uintGhWG8Ef, {from: accounts[0]});
//		const stringescztcH = await WolfStakingRewardsh6ukWNy.symbol.call({from: accounts[3]});
//		const uint256XGhMUzj = await WolfStakingRewardsh6ukWNy.totalSupplyPerPool.call(uintPKSZHkf, {from: accounts[2]});
//		await WolfStakingRewardsh6ukWNy.onlyRewardsDistribution.call({from: accounts[3]});

		assert.equal(uint2565t2fpc, BigInt("0"))
		await expect(WolfStakingRewardsh6ukWNy.withdrawRemainingBalance.call(uintCgqHfd, uintSnj1zIw, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringGDv1zYc = "dkPhAmiAeAgMXPfdNVbkiSINb2s7KjBWpQg55EPvlQ7eJYkzgXPUm7ReVcYQxIYC0D2PewnhncgiYFY6bJ5XKP"
		const stringkQzV8uf = "ot2Qj"
		const uintTFanDQS = BigInt("146")
		const WolfStakingRewardsrSwjG9d = await WolfStakingRewards.new(stringGDv1zYc, stringkQzV8uf, uintTFanDQS, {from: accounts[4]});
		const uintiTF7UFI = BigInt("291")
		const uintfxvmkKv = BigInt("325")
		const addressE2J9ChJ = accounts[1]
		const uintzH1MT8E = BigInt("450")
		const uintGeysCbG = BigInt("1454")
		const uint256MfY4xd2 = await WolfStakingRewardsrSwjG9d.lastTimeRewardApplicable.call(uintiTF7UFI, {from: accounts[0]});
		const addresslPGzjko = await WolfStakingRewardsrSwjG9d.updateReward.call(addressE2J9ChJ, uintfxvmkKv, {from: accounts[4]});
		const uint256Gxc3wCg = await WolfStakingRewardsrSwjG9d.withdrawRemainingBalance.call(uintGeysCbG, uintzH1MT8E, {from: accounts[0]});
		const stringRyxEkvn = await WolfStakingRewardsrSwjG9d.symbol.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringF31P8S = "fwdr8PBpvqHXosnjsOoO41DGRzRERxLQt3e4bKDMM77cVbvmwBA9I0n5MSHnQb2NihzkcEPdsDtuNCRKak5RenluPc"
		const stringFd9OLh3 = "FCzVrOHEcoDaCYbkyl3QFVyCROq9loaWLAkHqRzJBPmiWReyJqyFOSi3OjWmIkGNAkaxiO2FKyEJbtfQp"
		const uint7TMeMI = BigInt("13")
		const WolfStakingRewardstrMa93u = await WolfStakingRewards.new(stringF31P8S, stringFd9OLh3, uint7TMeMI, {from: accounts[4]});
		const uintBs5USsj = BigInt("1086")
		const uintVUCEVrA = BigInt("1415")
		const uintpKWiXQ = BigInt("95")
		const address8xPdTX = accounts[4]
		const uint256y8O7QjV = await WolfStakingRewardstrMa93u.getRewardForDuration.call(uintBs5USsj, {from: accounts[2]});
		const uintMbfvaVO = await WolfStakingRewardstrMa93u.getReward.call(uintVUCEVrA, {from: accounts[1]});
		const uint256PHcMhR = await WolfStakingRewardstrMa93u.earned.call(address8xPdTX, uintpKWiXQ, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringd8OYfdq = "QTBQyqp0mAUgYzSsO2YaXstN5WgM3"
		const stringukeOElE = "BLzy0bMeng6rwnwi6zXCgi4o8ELLmtROGbIAVrlRnufqCDIaGTv8JoDRcn15asEmQvrP1XUv2XznBq2Xo"
		const uintCgJdWEo = BigInt("194")
		const WolfStakingRewardsmdfe1Co = await WolfStakingRewards.new(stringd8OYfdq, stringukeOElE, uintCgJdWEo, {from: accounts[0]});
		const uintyLBwpzB = BigInt("1971")
		const addressgDu7onX = accounts[4]
		const uintxFfk6Ak = BigInt("1735")
		const uintGlcuAq0 = BigInt("15")
		const uintCeGTJih = BigInt("520")
		const uintbLBNF23 = BigInt("1412")
		const addressYyIp3u = accounts[0]
		await WolfStakingRewardsmdfe1Co.nonReentrant.call({from: accounts[0]});
		const addressi3luoTt = await WolfStakingRewardsmdfe1Co.updateReward.call(addressgDu7onX, uintyLBwpzB, {from: accounts[2]});
		const uint256AXUuHZC = await WolfStakingRewardsmdfe1Co.stake.call(uintGlcuAq0, uintxFfk6Ak, {from: accounts[5]});
		await WolfStakingRewardsmdfe1Co.nonReentrant.call({from: accounts[3]});
		const uint256eWjQeWR = await WolfStakingRewardsmdfe1Co.exit.call(uintCeGTJih, {from: "0x0000000000000000000000000000000000000001"});
		const addressSeRGRu = await WolfStakingRewardsmdfe1Co.updateReward.call(addressYyIp3u, uintbLBNF23, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressXm2Xg1 = accounts[3]
		const addressWAK14r = "0x0000000000000000000000000000000000000001"
		const addresso9rnZ8L = accounts[3]
		const WolfStakingRewardsh6ukWNy = await WolfStakingRewards.new(addressXm2Xg1, addressWAK14r, addresso9rnZ8L, {from: accounts[3]});
		const uintyJvi9SL = BigInt("773")
		const addresssm1zI1Z = accounts[4]
		const uintliRVmI0 = BigInt("1526")
		const uinteVthme = BigInt("1788")
		const addressA92yMKm = accounts[2]
		const uint256pyJgGND = await WolfStakingRewardsh6ukWNy.balanceOfPerPool.call(addresssm1zI1Z, uintyJvi9SL, {from: "0x0000000000000000000000000000000000000001"});
		const uintDTthURv = await WolfStakingRewardsh6ukWNy.getReward.call(uintliRVmI0, {from: accounts[1]});
//		const stringi7ahdxt = await WolfStakingRewardsh6ukWNy.name.call({from: accounts[2]});
//		const uint256OD26V6u = await WolfStakingRewardsh6ukWNy.earned.call(addressA92yMKm, uinteVthme, {from: accounts[3]});
//		await WolfStakingRewardsh6ukWNy.onlyRewardsDistribution.call({from: accounts[3]});

		assert.equal(uint256pyJgGND, BigInt("0"))
		await expect(WolfStakingRewardsh6ukWNy.name.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringYyffvA = "ikHBhVWURuicp6KItrF6haN0ako1cMXsnIxit3S3GBYNtGvRPBBgQgI7unCJKyQdc5lDxTDuWCaBHZw6GLh7"
		const stringnySELrY = "Y97qsYqP6SdqUP3LNNKoqQmcN1YTwL7a9hSJ"
		const uintnEXLWs7 = BigInt("216")
		const WolfStakingRewardsG2xEZcI = await WolfStakingRewards.new(stringYyffvA, stringnySELrY, uintnEXLWs7, {from: accounts[3]});
		const uintOTvRny4 = BigInt("992")
		const uintav93kQj = BigInt("938")
		const uintDoBiqEe = BigInt("866")
		const uintSj0VsI = BigInt("285")
		const uint256NKteixz = await WolfStakingRewardsG2xEZcI.withdraw.call(uintav93kQj, uintOTvRny4, {from: accounts[0]});
		await WolfStakingRewardsG2xEZcI.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256arraykULyiP4 = await WolfStakingRewardsG2xEZcI.updateNotifyRewardAmount.call(uintDoBiqEe, {from: accounts[0]});
		const stringLN8hwfv = await WolfStakingRewardsG2xEZcI.symbol.call({from: accounts[2]});
		const uint256VXcQ8KH = await WolfStakingRewardsG2xEZcI.totalSupplyPerPool.call(uintSj0VsI, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressCmR5byQ = accounts[3]
		const addresslvDMeJo = "0x0000000000000000000000000000000000000001"
		const addressxJ2szsV = accounts[3]
		const WolfStakingRewardsh6ukWNy = await WolfStakingRewards.new(addressCmR5byQ, addresslvDMeJo, addressxJ2szsV, {from: accounts[3]});
		const uintMoiWGL = BigInt("128")
		const uintCb1PsS = BigInt("434")
		const uintn3AMjG4 = BigInt("558")
		const uintICQMD74 = BigInt("257")
		const uintDTthURv = await WolfStakingRewardsh6ukWNy.getReward.call(uintMoiWGL, {from: accounts[1]});
		const uint256pIYCYnK = await WolfStakingRewardsh6ukWNy.totalSupplyPerPool.call(uintCb1PsS, {from: accounts[4]});
//		const uint256psOCh4p = await WolfStakingRewardsh6ukWNy.exit.call(uintn3AMjG4, {from: accounts[2]});
//		const uintWaiZuH = await WolfStakingRewardsh6ukWNy.getReward.call(uintICQMD74, {from: accounts[4]});
//		await WolfStakingRewardsh6ukWNy.onlyRewardsDistribution.call({from: accounts[3]});

		assert.equal(uint256pIYCYnK, BigInt("0"))
		await expect(WolfStakingRewardsh6ukWNy.exit.call(uintn3AMjG4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressKO3ch4w = accounts[3]
		const addressZA6txVp = "0x0000000000000000000000000000000000000001"
		const address3C6j4w = accounts[3]
		const WolfStakingRewardsh6ukWNy = await WolfStakingRewards.new(addressKO3ch4w, addressZA6txVp, address3C6j4w, {from: accounts[3]});
		const uintnt57ZnD = BigInt("1134")
		const uintjgxfQZh = BigInt("172")
//		const uint256G9PXIDV = await WolfStakingRewardsh6ukWNy.withdrawRemainingBalance.call(uintjgxfQZh, uintnt57ZnD, {from: accounts[3]});
//		await WolfStakingRewardsh6ukWNy.onlyRewardsDistribution.call({from: accounts[3]});

		await expect(WolfStakingRewardsh6ukWNy.withdrawRemainingBalance.call(uintjgxfQZh, uintnt57ZnD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringmcqjc6V = "Eo6e1xtYcDA3jQDJ5wRSjCm2MEPpD"
		const stringA1IiL2 = "n8XlxEhu4dMXxlCvfG40fEooOcF1UFXVNLQgSDSpxIbteU8ZxhBomIygeNDctl3DT6SO2h9Ybt8Fxm9Ld5XDniYO1GgtnfUq"
		const uintFLlBiz = BigInt("193")
		const WolfStakingRewardsUkORfBc = await WolfStakingRewards.new(stringmcqjc6V, stringA1IiL2, uintFLlBiz, {from: accounts[0]});
		const uintlJbxxqd = BigInt("623")
		const uintRORphWS = BigInt("1974")
		const uintMV9Efcf = BigInt("1914")
		const addresskEiqvJ = accounts[0]
		const uintyzuv8n = BigInt("319")
		const addressM1DlHRf = accounts[3]
		const uintVsGBjvh = BigInt("481")
		const uint256arrayXDr0FK = await WolfStakingRewardsUkORfBc.updateNotifyRewardAmount.call(uintlJbxxqd, {from: accounts[3]});
		const uint256array7AWL2g = await WolfStakingRewardsUkORfBc.updateNotifyRewardAmount.call(uintRORphWS, {from: accounts[4]});
		const uint256UVTreL = await WolfStakingRewardsUkORfBc.balanceOfPerPool.call(addresskEiqvJ, uintMV9Efcf, {from: accounts[1]});
		const addressJXJw6HS = await WolfStakingRewardsUkORfBc.updateReward.call(addressM1DlHRf, uintyzuv8n, {from: accounts[0]});
		const uint256G1T52Kx = await WolfStakingRewardsUkORfBc.lastTimeRewardApplicable.call(uintVsGBjvh, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVka3HC8 = "iNwHvE1guD4KwgctaF2"
		const stringRTnis5U = "MRixiQTUHp5qZU883wNPdqsnOD3G"
		const uintNbR3DGh = BigInt("27")
		const WolfStakingRewardsFcQlyj = await WolfStakingRewards.new(stringVka3HC8, stringRTnis5U, uintNbR3DGh, {from: accounts[2]});
		const uintrww2BtE = BigInt("558")
		const uintadZ6HV = BigInt("1437")
		const uintSsCzRbd = BigInt("2027")
		const uintKX8Z37R = BigInt("1863")
		const uintshZElPr = BigInt("429")
		const addressL1tswdp = accounts[5]
		await WolfStakingRewardsFcQlyj.nonReentrant.call({from: accounts[1]});
		const uint256OGwKKRc = await WolfStakingRewardsFcQlyj.withdraw.call(uintadZ6HV, uintrww2BtE, {from: accounts[5]});
		const uint256KaL2S39 = await WolfStakingRewardsFcQlyj.withdraw.call(uintKX8Z37R, uintSsCzRbd, {from: accounts[2]});
		const uint8OSm5pgJ = await WolfStakingRewardsFcQlyj.decimals.call({from: accounts[0]});
		const uint256pW6QmBt = await WolfStakingRewardsFcQlyj.earned.call(addressL1tswdp, uintshZElPr, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuwISSLh = "McKhamtOuvnyPSlT1p15sTypiGyK6EAc"
		const stringX2M4AAk = "V3cS5IADodd7FtevpdwloUQ6lxh1hFgdWzUulCNk0ayEN"
		const uintT9F6nAt = BigInt("251")
		const WolfStakingRewardsvCgPza = await WolfStakingRewards.new(stringuwISSLh, stringX2M4AAk, uintT9F6nAt, {from: "0x0000000000000000000000000000000000000001"});
		const uintW1dflHy = BigInt("116")
		const uinttEnojBp = BigInt("689")
		const addressoDtVcbu = accounts[3]
		const uintLjdcwRR = BigInt("768")
		const uintxwYGobr = BigInt("430")
		const uintgdOnSsL = BigInt("921")
		const uintSLTbzDQ = BigInt("985")
		const uint256SDSDdc = await WolfStakingRewardsvCgPza.lastTimeRewardApplicable.call(uintW1dflHy, {from: accounts[1]});
		const uint256BJCs7dk = await WolfStakingRewardsvCgPza.balanceOfPerPool.call(addressoDtVcbu, uinttEnojBp, {from: accounts[5]});
		const uint256ih41iA7 = await WolfStakingRewardsvCgPza.exit.call(uintLjdcwRR, {from: accounts[4]});
		const uint256eUNfuNx = await WolfStakingRewardsvCgPza.withdrawRemainingBalance.call(uintgdOnSsL, uintxwYGobr, {from: accounts[5]});
		const uint8q0UrYU6 = await WolfStakingRewardsvCgPza.decimals.call({from: accounts[1]});
		const uint256arrayrx6kuPl = await WolfStakingRewardsvCgPza.updateNotifyRewardAmount.call(uintSLTbzDQ, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringClQehhj = "TjXS43t9xHQjCMu"
		const stringNCRr9qb = "wK8zG83Dq4pNeKQi923o3M0dP1gNKUYN4SONzZ1hC9RGwrxjuTnyT"
		const uintztDQGjc = BigInt("177")
		const WolfStakingRewardsTBmUjyD = await WolfStakingRewards.new(stringClQehhj, stringNCRr9qb, uintztDQGjc, {from: accounts[1]});
		const uintsyxsuOa = BigInt("1404")
		const uintKOWAwpt = BigInt("551")
		const addresspxu4Uoa = accounts[4]
		const uintutaAizv = BigInt("1250")
		const uint256Gy6sweY = await WolfStakingRewardsTBmUjyD.rewardPerToken.call(uintsyxsuOa, {from: accounts[2]});
		const uint8sg1ONy = await WolfStakingRewardsTBmUjyD.decimals.call({from: accounts[4]});
		const addressY98GTs6 = await WolfStakingRewardsTBmUjyD.updateReward.call(addresspxu4Uoa, uintKOWAwpt, {from: accounts[4]});
		const uint8NV40x = await WolfStakingRewardsTBmUjyD.getReward.call(uintutaAizv, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressnUKmhaw = accounts[3]
		const addressSv8TJbn = "0x0000000000000000000000000000000000000001"
		const addressUJ6WEq0 = accounts[3]
		const WolfStakingRewardsh6ukWNy = await WolfStakingRewards.new(addressnUKmhaw, addressSv8TJbn, addressUJ6WEq0, {from: accounts[3]});
		const uintiUwlkt7 = BigInt("130")
		const uintcHp58Nf = BigInt("649")
		const uintaa4zgy = BigInt("1343")
		const uintDTthURv = await WolfStakingRewardsh6ukWNy.getReward.call(uintiUwlkt7, {from: accounts[1]});
//		const uint256P66HOmd = await WolfStakingRewardsh6ukWNy.withdraw.call(uintaa4zgy, uintcHp58Nf, {from: accounts[5]});

		await expect(WolfStakingRewardsh6ukWNy.withdraw.call(uintaa4zgy, uintcHp58Nf, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringJYBY8XE = "2vg8pGai6VGck4coQNhNNMFz6p6"
		const stringtcj4P0 = "o9owDw2h1NUL6ciKD"
		const uintpOduPcI = BigInt("137")
		const WolfStakingRewardst4xfJsj = await WolfStakingRewards.new(stringJYBY8XE, stringtcj4P0, uintpOduPcI, {from: accounts[4]});
		const uintspdjhWv = BigInt("408")
		const uintyzMgMB = BigInt("991")
		const uint256v2U6Ox = await WolfStakingRewardst4xfJsj.rewardPerToken.call(uintspdjhWv, {from: accounts[1]});
		const stringSlZ7fu = await WolfStakingRewardst4xfJsj.symbol.call({from: accounts[4]});
		const uint256J5qwxUo = await WolfStakingRewardst4xfJsj.rewardPerToken.call(uintyzMgMB, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const string5dUfgt = "iokgiqb5m65vQOOTnW5iuRHUdISxyvhC1Uou4Ecptq5L71m94dN6UnNozjxBveJYeIGlRclxU16calXVnMnvUAs9"
		const stringSFsO6X = "fR5votZeKsh"
		const uintmWuW3cm = BigInt("217")
		const WolfStakingRewardscLSpWt2 = await WolfStakingRewards.new(string5dUfgt, stringSFsO6X, uintmWuW3cm, {from: "0x0000000000000000000000000000000000000001"});
		const uintEfh5OKe = BigInt("408")
		const addresstdtfhZX = accounts[4]
		const uintbOwBu7e = BigInt("817")
		const uintqENctgn = BigInt("29")
		const uintjPnQRoX = BigInt("603")
		const uintIDMIdlF = BigInt("655")
		const uint256GbHX6mD = await WolfStakingRewardscLSpWt2.balanceOfPerPool.call(addresstdtfhZX, uintEfh5OKe, {from: accounts[2]});
		const uint256pVbFKqx = await WolfStakingRewardscLSpWt2.stake.call(uintqENctgn, uintbOwBu7e, {from: accounts[4]});
		const uint256Au12HWa = await WolfStakingRewardscLSpWt2.totalSupplyPerPool.call(uintjPnQRoX, {from: accounts[1]});
		await WolfStakingRewardscLSpWt2.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256o9TtHc = await WolfStakingRewardscLSpWt2.getRewardForDuration.call(uintIDMIdlF, {from: accounts[4]});
		await WolfStakingRewardscLSpWt2.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjcgz6t = "Ya8SSz5WKQ27cEOE7kTwGpitwqEk1YBFDOWz0Ubx7pyFBAJ5jGDDOK"
		const stringVbcT7MM = "9yqhV9QAQClDHomMBTSFHFTfpSX7CfmhJePUnipjAW9CieAbURLeG1u"
		const uintw8IOwvB = BigInt("114")
		const WolfStakingRewardsAbhPjGs = await WolfStakingRewards.new(stringjcgz6t, stringVbcT7MM, uintw8IOwvB, {from: "0x0000000000000000000000000000000000000001"});
		const uintaYRvaIL = BigInt("1561")
		const uintPbewa7o = BigInt("1950")
		const uintsqvikyu = BigInt("616")
		const uintb4OTmus = BigInt("622")
		const uintFhRRxzH = BigInt("548")
		const uintptdb2N = BigInt("814")
		const uintb085A3X = BigInt("1462")
		const uintwh7bFNT = BigInt("1321")
		const uint256PHtbnxO = await WolfStakingRewardsAbhPjGs.withdraw.call(uintPbewa7o, uintaYRvaIL, {from: accounts[3]});
		const uint256DXF67c = await WolfStakingRewardsAbhPjGs.stake.call(uintb4OTmus, uintsqvikyu, {from: accounts[2]});
		const uint256UY0iV6 = await WolfStakingRewardsAbhPjGs.withdrawRemainingBalance.call(uintptdb2N, uintFhRRxzH, {from: accounts[4]});
		const uint256hlGDaax = await WolfStakingRewardsAbhPjGs.withdraw.call(uintwh7bFNT, uintb085A3X, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXPNxovH = "3EV4uEOBWVXbc4RjIczK9MfMVbM9qlLQXXmEG68qYwTwrTqRCpe2fMlAw6Gk1Dhb"
		const stringeB9l1V4 = "IGTXSJKBDQRjE5ttuQhlTueFiEegwG6GtLUaXGFiyApMbbJCTccXONziBdqiKZWpLgXqIe9u7"
		const uintwU5Tjny = BigInt("248")
		const WolfStakingRewardsSsNYiNC = await WolfStakingRewards.new(stringXPNxovH, stringeB9l1V4, uintwU5Tjny, {from: "0x0000000000000000000000000000000000000001"});
		const uintYzkeyzx = BigInt("118")
		const uintOGUKEo9 = BigInt("228")
		const uinttA4vu7N = BigInt("1122")
		const uintU42ZYnG = BigInt("1883")
		const uint256K5XghAM = await WolfStakingRewardsSsNYiNC.stake.call(uintOGUKEo9, uintYzkeyzx, {from: accounts[1]});
		const uint256FNWk8UX = await WolfStakingRewardsSsNYiNC.totalSupplyPerPool.call(uinttA4vu7N, {from: accounts[4]});
		const uint256RGFCnAr = await WolfStakingRewardsSsNYiNC.rewardPerToken.call(uintU42ZYnG, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSdZqjD = "gebsKcUjDtLS7oEQ1yBzHPHqizU7cUv5yl9IBDHbfeQiKFeS2sz8wlGu0JohwU"
		const stringoDQy0GN = "e6tpuEpFmhuN6sutptiT1exCeA9Pk3Bmme4BpIvtNsFrITB5yhRKxUeY6DCYGthsqVF7hcWB49j"
		const uinteVk6FDv = BigInt("170")
		const WolfStakingRewardsZn6ScCD = await WolfStakingRewards.new(stringSdZqjD, stringoDQy0GN, uinteVk6FDv, {from: "0x0000000000000000000000000000000000000001"});
		const uintevHyrhD = BigInt("297")
		const uintz89pPkb = BigInt("57")
		const uint256xhUMu8 = await WolfStakingRewardsZn6ScCD.totalSupplyPerPool.call(uintevHyrhD, {from: accounts[4]});
		const uintldqJ9dv = await WolfStakingRewardsZn6ScCD.getReward.call(uintz89pPkb, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringM8Rvev = "JiwW8DkKurk8yF"
		const stringC1zP8Qq = "un4qQ1AJOvUb5fQ0WgsL4p8Sx6EecA8csD3RLdP"
		const uintUBMJERr = BigInt("109")
		const WolfStakingRewardsfW3p1cB = await WolfStakingRewards.new(stringM8Rvev, stringC1zP8Qq, uintUBMJERr, {from: "0x0000000000000000000000000000000000000001"});
		const uintIWMqLqr = BigInt("1955")
		const uintwmmjxhy = BigInt("998")
		const addressi2uH3MN = accounts[0]
		const uintqP0ZWwP = BigInt("149")
		const uintMm0MiAi = BigInt("890")
		await WolfStakingRewardsfW3p1cB.onlyRewardsDistribution.call({from: accounts[1]});
		const uintjEnAySb = await WolfStakingRewardsfW3p1cB.getReward.call(uintIWMqLqr, {from: accounts[4]});
		const address7dT9xY = await WolfStakingRewardsfW3p1cB.updateReward.call(addressi2uH3MN, uintwmmjxhy, {from: accounts[2]});
		const uint256nxCVTyN = await WolfStakingRewardsfW3p1cB.totalSupplyPerPool.call(uintqP0ZWwP, {from: accounts[0]});
		const stringwBrgRK8 = await WolfStakingRewardsfW3p1cB.symbol.call({from: accounts[3]});
		const uintyg1cvCz = await WolfStakingRewardsfW3p1cB.getReward.call(uintMm0MiAi, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringr9X1wsj = "sNrVZzjJJHNHc4gnGuTxLn1sWxjhPi76vP9I3wxl4DdxhbuldbhRR2Qf2Spxc4QCbKull1eEgr"
		const stringWq8tb6o = "pUqrrTuiBPebegWJevp6PKaoI4DWcKDPiyjVO2vA7ITvfeeh5v3A8Xb"
		const uintyDl8Db0 = BigInt("101")
		const WolfStakingRewardsB1PLeQF = await WolfStakingRewards.new(stringr9X1wsj, stringWq8tb6o, uintyDl8Db0, {from: "0x0000000000000000000000000000000000000001"});
		const uintwvq1xtX = BigInt("1580")
		const addressqBevUy = accounts[5]
		await WolfStakingRewardsB1PLeQF.onlyRewardsDistribution.call({from: accounts[4]});
		const stringtuMzfSh = await WolfStakingRewardsB1PLeQF.symbol.call({from: accounts[0]});
		const addressEZL1e96 = await WolfStakingRewardsB1PLeQF.updateReward.call(addressqBevUy, uintwvq1xtX, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringQ5p2TW = "GqqYoVGlJNjUrlC3I1Nwz8q0q9htkOdfba9elA7d2VejTKlm60Y1ZeIJ9"
		const stringk7WjCma = "VNHegq2c3s4Ko6nAvkgVfIHfEbLpphUVqP3YWqkFiHPRDwWvlcmAjQnybJrRtM45lYYrFjMv1Wf7wwTybk"
		const uintjdnrqoC = BigInt("135")
		const WolfStakingRewardshrZLI2 = await WolfStakingRewards.new(stringQ5p2TW, stringk7WjCma, uintjdnrqoC, {from: accounts[1]});
		const uintj7DUxTW = BigInt("1109")
		const addressOZSmCJQ = accounts[2]
		const uintfhyQpmH = BigInt("199")
		const uintQs9U22q = BigInt("865")
		const uintfcASLW = BigInt("1390")
		const addressowgl9Qm = accounts[0]
		const uint2561YElpL = await WolfStakingRewardshrZLI2.earned.call(addressOZSmCJQ, uintj7DUxTW, {from: accounts[2]});
		const uint256lcOaY5B = await WolfStakingRewardshrZLI2.stake.call(uintQs9U22q, uintfhyQpmH, {from: accounts[3]});
		const uint256srUXCXP = await WolfStakingRewardshrZLI2.balanceOfPerPool.call(addressowgl9Qm, uintfcASLW, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringBK4PN7u = "NXHWxeBHfOsebefItjylf7j768YDl"
		const stringXkKaApd = "Alh8gWYilsk"
		const uintmTOm9g = BigInt("30")
		const WolfStakingRewardskf7iack = await WolfStakingRewards.new(stringBK4PN7u, stringXkKaApd, uintmTOm9g, {from: accounts[2]});
		const uintHVSCNgP = BigInt("1223")
		const uintXuI9O4a = BigInt("1855")
		const addressg2C3G4 = accounts[0]
		const uintYZpZfTw = BigInt("1090")
		const uint256iSHOW6M = await WolfStakingRewardskf7iack.rewardPerToken.call(uintHVSCNgP, {from: accounts[3]});
		const uint256oXfTfjg = await WolfStakingRewardskf7iack.earned.call(addressg2C3G4, uintXuI9O4a, {from: accounts[4]});
		await WolfStakingRewardskf7iack.onlyRewardsDistribution.call({from: accounts[3]});
		const uint8cV5qFi8 = await WolfStakingRewardskf7iack.decimals.call({from: accounts[1]});
		const uint256s0PCezS = await WolfStakingRewardskf7iack.rewardPerToken.call(uintYZpZfTw, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYxmauVB = "DqCdaRKTkNiliHX1kCiKojLLulKHdUKzjTnMnAEd6cAyBHjxoPsDEdMj"
		const stringMJNG62C = ""
		const uintAGBNYrX = BigInt("166")
		const WolfStakingRewardsOcq5znV = await WolfStakingRewards.new(stringYxmauVB, stringMJNG62C, uintAGBNYrX, {from: accounts[1]});
		const uintd3kKu1V = BigInt("1020")
		const addressf9NdbsA = accounts[2]
		const uintO0VlnnY = BigInt("937")
		const addressFpJpjtp = accounts[1]
		const uintKQ0Efp1 = BigInt("1638")
		const addressTTPRFjy = accounts[1]
		const uintF6t43dB = BigInt("1609")
		const addressvfVVb9B = accounts[1]
		const uintbCiWswf = BigInt("867")
		const addressvaXgTdR = await WolfStakingRewardsOcq5znV.updateReward.call(addressf9NdbsA, uintd3kKu1V, {from: accounts[1]});
		const addressBdUMgb = await WolfStakingRewardsOcq5znV.updateReward.call(addressFpJpjtp, uintO0VlnnY, {from: accounts[3]});
		await WolfStakingRewardsOcq5znV.nonReentrant.call({from: accounts[0]});
		const uint256pbs8AdH = await WolfStakingRewardsOcq5znV.balanceOfPerPool.call(addressTTPRFjy, uintKQ0Efp1, {from: accounts[4]});
		const uint256t0acMip = await WolfStakingRewardsOcq5znV.earned.call(addressvfVVb9B, uintF6t43dB, {from: accounts[1]});
		const uintWTFyfZ2 = await WolfStakingRewardsOcq5znV.getReward.call(uintbCiWswf, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringB1I6yh = "UmEsBrfygo0Tp6A5UNcKREmvGwY3AoHP8WXpb5p94fPX5wkF4Q3JgNLTwoW8jvbgXr72Ip3cTn1UBKMnlFDctVYYpHrJNZ"
		const stringfMSZo7f = "o7PVyOjBVDSFG1jW5V2YSLcp3ef4oCEji5dawfAd"
		const uintmoAHADV = BigInt("205")
		const WolfStakingRewardsVdPy0N = await WolfStakingRewards.new(stringB1I6yh, stringfMSZo7f, uintmoAHADV, {from: accounts[4]});
		const uintB0aH2kb = BigInt("1789")
		const uintc5duzw = BigInt("1457")
		const uintePeectl = BigInt("792")
		const uint256arrayXd1axQB = await WolfStakingRewardsVdPy0N.updateNotifyRewardAmount.call(uintB0aH2kb, {from: accounts[1]});
		const uint2568nevbg = await WolfStakingRewardsVdPy0N.getRewardForDuration.call(uintc5duzw, {from: accounts[2]});
		const uint256arrayagu4dKO = await WolfStakingRewardsVdPy0N.updateNotifyRewardAmount.call(uintePeectl, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringR1tqIy2 = "RjalDov8juBZKz"
		const stringEUhjZm5 = "RxknedmR3RgVd018pRkWOic2voiw8wuobevn7sDhToZjkuy726tf"
		const uintMh2BjXQ = BigInt("170")
		const WolfStakingRewardstDDSdVG = await WolfStakingRewards.new(stringR1tqIy2, stringEUhjZm5, uintMh2BjXQ, {from: accounts[2]});
		const uintPoI41r = BigInt("339")
		const addressHTKjRsi = accounts[3]
		const uintFR0DWiF = BigInt("1691")
		const uintQQORycp = BigInt("1517")
		const uintFf5YEW = BigInt("1493")
		const uint256E10nyW = await WolfStakingRewardstDDSdVG.balanceOfPerPool.call(addressHTKjRsi, uintPoI41r, {from: accounts[0]});
		await WolfStakingRewardstDDSdVG.onlyOwner.call({from: accounts[1]});
		const uint256E3MtOym = await WolfStakingRewardstDDSdVG.withdraw.call(uintQQORycp, uintFR0DWiF, {from: accounts[2]});
		const uint256arrayE1lWkUf = await WolfStakingRewardstDDSdVG.updateNotifyRewardAmount.call(uintFf5YEW, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTIPjG9Z = "v6i5b4GZ7xXWtLkWDVbWqUePUjJLSRtjw9EWweHkzbq77QDQ482cFPA7edRoi8Nt"
		const stringjTEdwS4 = "SbRctREQXbRyndE6Ij7DNTsvGXZIOgyEboAbO4EUP5QNoVgYfOerW33UGn5SSa8qH648KyDtov58EIDGjwpNG1uIV0X0qm"
		const uintGbOPrjK = BigInt("161")
		const WolfStakingRewardsPe9t3E = await WolfStakingRewards.new(stringTIPjG9Z, stringjTEdwS4, uintGbOPrjK, {from: accounts[2]});
		const uintzD80aM5 = BigInt("754")
		const uintfkz63Z = BigInt("592")
		const uint256rRJReGJ = await WolfStakingRewardsPe9t3E.rewardPerToken.call(uintzD80aM5, {from: accounts[4]});
		const uint8t80xkE2 = await WolfStakingRewardsPe9t3E.decimals.call({from: accounts[2]});
		const uint256WUScbRl = await WolfStakingRewardsPe9t3E.totalSupplyPerPool.call(uintfkz63Z, {from: accounts[5]});
		await WolfStakingRewardsPe9t3E.onlyRewardsDistribution.call({from: accounts[1]});
		await WolfStakingRewardsPe9t3E.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYyiRgvf = "TdX1Sic3Nqu349E"
		const stringdtIKzrc = "iCEBNGVb8UjdSKX346WT11vEARmFja8jza1UjqRupinxNkK3TKAohcv6oGUl8iJkrMRlY1MX7miLhfjy7nrv4aPqek3JtcT"
		const uintqhnCjNw = BigInt("207")
		const WolfStakingRewardsErYgZM = await WolfStakingRewards.new(stringYyiRgvf, stringdtIKzrc, uintqhnCjNw, {from: accounts[3]});
		const uintYt9DRh = BigInt("822")
		const addressjbTSwVH = accounts[3]
		const uintQJQAVha = BigInt("486")
		const uintHQtEEy = BigInt("1348")
		const uint256DuB5m06 = await WolfStakingRewardsErYgZM.balanceOfPerPool.call(addressjbTSwVH, uintYt9DRh, {from: accounts[1]});
		const uint256RBDYH6d = await WolfStakingRewardsErYgZM.stake.call(uintHQtEEy, uintQJQAVha, {from: accounts[2]});
		await WolfStakingRewardsErYgZM.nonReentrant.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXnfcTah = "rxwpCZoK"
		const stringoD3t5EK = "ptvWIhpP1vCS7078LIvoP5unHaISbiDZsHgfwl4kxMbUAh6RINvXnmqSog1Fv52rJST1UzdIG2MJDME7BCbwg1jjtO2S1EptB"
		const uintJ7XtIZR = BigInt("20")
		const WolfStakingRewardsmUUVSqS = await WolfStakingRewards.new(stringXnfcTah, stringoD3t5EK, uintJ7XtIZR, {from: accounts[1]});
		const uintVXSOiSl = BigInt("561")
		const uintmQdQmX3 = BigInt("1918")
		const addresswilNzbK = accounts[3]
		const stringKdTPJIO = await WolfStakingRewardsmUUVSqS.name.call({from: accounts[0]});
		const uintSzXl9GC = await WolfStakingRewardsmUUVSqS.getReward.call(uintVXSOiSl, {from: "0x0000000000000000000000000000000000000001"});
		const uint256lmfndzW = await WolfStakingRewardsmUUVSqS.earned.call(addresswilNzbK, uintmQdQmX3, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringdMYTnZs = "aEzDNrA8L9mXwiJnX8XgQ3A1Wajw6ItLoVtlzx8vmnHUjb4pVABo3rvauGsW2WLp4uftcjmKD"
		const stringzs7kLxw = "3GfxuWPuPhV"
		const uintBwmU926 = BigInt("244")
		const WolfStakingRewardsW8OwPLZ = await WolfStakingRewards.new(stringdMYTnZs, stringzs7kLxw, uintBwmU926, {from: accounts[2]});
		const uintYWcPx8 = BigInt("700")
		const uintLpTXpEr = BigInt("1049")
		const uintMEEMZMI = BigInt("965")
		const uintZShArRA = BigInt("1399")
		const uintQR4EP5A = BigInt("1471")
		const addressPEwvOCY = accounts[0]
		const uint256VC91j5j = await WolfStakingRewardsW8OwPLZ.withdrawRemainingBalance.call(uintLpTXpEr, uintYWcPx8, {from: accounts[4]});
		const uint256Afa7QS = await WolfStakingRewardsW8OwPLZ.stake.call(uintZShArRA, uintMEEMZMI, {from: accounts[3]});
		const uint256rjtlsGi = await WolfStakingRewardsW8OwPLZ.balanceOfPerPool.call(addressPEwvOCY, uintQR4EP5A, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringz1340Ek = "TDs9HRV2GHKaN19IPJFE5yNVBtJEJ0hjARPyiYBoG8BAjvOYX7OkTad678Kfu3lEdRjRWH9T"
		const stringPTwcrla = "zW4VEaWa51ixvvlrbifCyVd198Sn5mvuvCN8EjlKVTbq"
		const uint9j0Psq = BigInt("63")
		const WolfStakingRewardsEGfIqk = await WolfStakingRewards.new(stringz1340Ek, stringPTwcrla, uint9j0Psq, {from: accounts[4]});
		const uintc280wi = BigInt("1195")
		const uintnOpDjgI = BigInt("1603")
		const uint256XO5XvQ = await WolfStakingRewardsEGfIqk.stake.call(uintnOpDjgI, uintc280wi, {from: accounts[1]});
		const stringy3x6e6f = await WolfStakingRewardsEGfIqk.symbol.call({from: accounts[3]});
		const stringCbz1Z73 = await WolfStakingRewardsEGfIqk.symbol.call({from: accounts[0]});
		const stringrWOADk = await WolfStakingRewardsEGfIqk.symbol.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWCy3Gyt = "l9UyJY5DLaU8"
		const stringgy4g1VV = "WHMD93S9zpaPqJGpG1r6ykQbYDu4XDmkON3IbzMe5SGXPgszBCeORsr"
		const uintC6GlMJ9 = BigInt("238")
		const WolfStakingRewardsE9rUAjR = await WolfStakingRewards.new(stringWCy3Gyt, stringgy4g1VV, uintC6GlMJ9, {from: accounts[1]});
		const uintcEmojfu = BigInt("1222")
		const addresslGF9UpC = accounts[4]
		const uintKfgYsdS = BigInt("1906")
		const addressgCdZrgl = await WolfStakingRewardsE9rUAjR.updateReward.call(addresslGF9UpC, uintcEmojfu, {from: accounts[4]});
		const uint256arrayb5Xkpa4 = await WolfStakingRewardsE9rUAjR.updateNotifyRewardAmount.call(uintKfgYsdS, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsE9rUAjR.nonReentrant.call({from: accounts[0]});
		const stringKBs0c6n = await WolfStakingRewardsE9rUAjR.symbol.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFj7A8tk = "nVV10vkauCk9IYh6mToEne3kwfuhTewvz8jv2vGsvGaWv5TdSB43yVtjn1fpXAuKK7mO6El1"
		const stringRm41Ioi = "v3nSFVU1Iiozt6XA78V469x3KbzeYvL6qWfrs3CWhmh65VOYXegcIea2HPie8b0mfZRyIe7INClYm6xi82te"
		const uintVgMoq60 = BigInt("182")
		const WolfStakingRewardsn0ylq6F = await WolfStakingRewards.new(stringFj7A8tk, stringRm41Ioi, uintVgMoq60, {from: accounts[2]});
		const uintzW97vaJ = BigInt("1635")
		const uintORsDjtZ = BigInt("573")
		const uintCgVMryj = BigInt("710")
		const uintgEozD5C = BigInt("529")
		const addressfSFfih = accounts[1]
		const uintGkpoUwt = BigInt("840")
		const uintAPoQbbJ = BigInt("1677")
		const uintlloeH9l = BigInt("61")
		const addressc1VN0gv = accounts[1]
		const uint256z2VAccD = await WolfStakingRewardsn0ylq6F.exit.call(uintzW97vaJ, {from: accounts[2]});
		const uint256We0dKzL = await WolfStakingRewardsn0ylq6F.withdraw.call(uintCgVMryj, uintORsDjtZ, {from: accounts[0]});
		const uint256v6WutJT = await WolfStakingRewardsn0ylq6F.balanceOfPerPool.call(addressfSFfih, uintgEozD5C, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NGtdrye = await WolfStakingRewardsn0ylq6F.rewardPerToken.call(uintGkpoUwt, {from: accounts[0]});
		const uint256QeIrPOk = await WolfStakingRewardsn0ylq6F.rewardPerToken.call(uintAPoQbbJ, {from: accounts[5]});
		const uint256MNs4gZp = await WolfStakingRewardsn0ylq6F.balanceOfPerPool.call(addressc1VN0gv, uintlloeH9l, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringREm23Og = "zGqEgTWyfY5L32VNxPGkbXgicADJSROi"
		const stringE3Bh77f = "ozeYVG"
		const uintdwBPkYC = BigInt("221")
		const WolfStakingRewardsa5NXOnJ = await WolfStakingRewards.new(stringREm23Og, stringE3Bh77f, uintdwBPkYC, {from: accounts[0]});
		const uintDJXjmE2 = BigInt("1328")
		const uintNgE8CEv = BigInt("1839")
		const addressTKqDz4f = "0x0000000000000000000000000000000000000001"
		const uintuVSA1Uw = BigInt("1846")
		const uint256maxv3vO = await WolfStakingRewardsa5NXOnJ.rewardPerToken.call(uintDJXjmE2, {from: accounts[2]});
		const uint256tZXBvoZ = await WolfStakingRewardsa5NXOnJ.earned.call(addressTKqDz4f, uintNgE8CEv, {from: accounts[4]});
		await WolfStakingRewardsa5NXOnJ.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256zP1ruXx = await WolfStakingRewardsa5NXOnJ.exit.call(uintuVSA1Uw, {from: accounts[0]});
		await WolfStakingRewardsa5NXOnJ.onlyOwner.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringREZoULA = "mS5d4GuJjm7IkRtLoR3Tv4zUWNOHuM9kwUkVXlkvj5Dju3uRjR8YLMLNgiCzJlBxbu62SsTgAafOoK5X3XdDeE"
		const stringKgWu9Ui = "fyxG1vX843vcvlA1tmJeG3e9ahSMK"
		const uintvTcjiD6 = BigInt("150")
		const WolfStakingRewardsxSbWaHi = await WolfStakingRewards.new(stringREZoULA, stringKgWu9Ui, uintvTcjiD6, {from: accounts[3]});
		const uintP1dVDF1 = BigInt("1829")
		const uintpdCtwO = BigInt("205")
		const uintKNTOsvY = BigInt("1249")
		const uintsA6a9wc = BigInt("1711")
		const uint8qtsjBcI = await WolfStakingRewardsxSbWaHi.decimals.call({from: accounts[4]});
		const uint256bISEBCN = await WolfStakingRewardsxSbWaHi.stake.call(uintpdCtwO, uintP1dVDF1, {from: accounts[3]});
		const uint256NYaBWg2 = await WolfStakingRewardsxSbWaHi.withdraw.call(uintsA6a9wc, uintKNTOsvY, {from: accounts[2]});
		const stringSlB8hNg = await WolfStakingRewardsxSbWaHi.symbol.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringXO97yBX = "1lZpH9kHsBXGP7fNWZpQmgb57Xhhh28vMRWjsFIeU6v"
		const stringeziAdo = "LgK0lhlPFl9iCuY9SWE35IKfvORvx86kbKrsHLe08gaiOON7vbXXrROW9N"
		const uintFRFhsRH = BigInt("47")
		const WolfStakingRewardsGXUSWJN = await WolfStakingRewards.new(stringXO97yBX, stringeziAdo, uintFRFhsRH, {from: accounts[0]});
		const uinttTwSSo7 = BigInt("1107")
		const uintirkYf3e = BigInt("1459")
		const uintGqFxxJt = BigInt("1596")
		const uintvGCMcbk = BigInt("1493")
		const uintBpeKs0y = BigInt("1716")
		const uint256YX093qj = await WolfStakingRewardsGXUSWJN.getRewardForDuration.call(uinttTwSSo7, {from: accounts[4]});
		const uint5Livbl = await WolfStakingRewardsGXUSWJN.getReward.call(uintirkYf3e, {from: accounts[4]});
		const uint256QGGLeHj = await WolfStakingRewardsGXUSWJN.withdrawRemainingBalance.call(uintvGCMcbk, uintGqFxxJt, {from: accounts[0]});
		const uint256nxD9Gpt = await WolfStakingRewardsGXUSWJN.lastTimeRewardApplicable.call(uintBpeKs0y, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmkcGm7F = "S8qhq0bnhBdHaWLgNHTtkTjiRrGx2EJ23U6JdikEW6DFeOPn"
		const stringos6oLI = "8twcjCChsf7KXydsvydvBIl9SmIqhbyOO3130nNeRpPQCb7oDyeJ"
		const uintWo66Np = BigInt("34")
		const WolfStakingRewards4IC4rL = await WolfStakingRewards.new(stringmkcGm7F, stringos6oLI, uintWo66Np, {from: accounts[2]});
		const uintD7wtjoi = BigInt("1268")
		const addressBMpSE7F = accounts[1]
		const uint18qUul = BigInt("340")
		const addressTecjdbX = await WolfStakingRewards4IC4rL.updateReward.call(addressBMpSE7F, uintD7wtjoi, {from: accounts[2]});
		const stringSWMvyo3 = await WolfStakingRewards4IC4rL.name.call({from: accounts[4]});
		const uint256SjK5vIC = await WolfStakingRewards4IC4rL.totalSupplyPerPool.call(uint18qUul, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHGzYo3x = "3iJBOZNa4EmOCGYfcxp6kWwyduxP2MvOVDuWHmeEsO9MPYWZo2dgIfMjOG2z7r3W7lHPEQFy5SAXQSxQbxBxZ21n1XsiL2fIA"
		const stringoky4QLH = "te4S0SxmsxwWFgQowicg0Tguo3fxdqPBy55B39Ochgf7TfRbUNGRaZ2T2HHxq"
		const uintl55eLcL = BigInt("46")
		const WolfStakingRewardsEB4Hoi = await WolfStakingRewards.new(stringHGzYo3x, stringoky4QLH, uintl55eLcL, {from: accounts[5]});
		const uintHwKsn8q = BigInt("14")
		const uintHRUayXy = BigInt("1734")
		const addressfvP771S = accounts[1]
		const uintP8mgnPD = BigInt("434")
		const uintHmM6mf1 = BigInt("1515")
		const uint256G9XwT9J = await WolfStakingRewardsEB4Hoi.totalSupplyPerPool.call(uintHwKsn8q, {from: accounts[5]});
		const uint256Uw4kVM = await WolfStakingRewardsEB4Hoi.earned.call(addressfvP771S, uintHRUayXy, {from: accounts[5]});
		const uint256nKnJqnX = await WolfStakingRewardsEB4Hoi.stake.call(uintHmM6mf1, uintP8mgnPD, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringk1Sbxm7 = "fp5MUWnOrO3ccmgP8hrkDs8NtozWHmIqbXjh6XWQzSX5PpCm2d5yRN7U8N"
		const stringu5P8jma = "w3SrfBBNGYsyQT"
		const uintWcsXdWF = BigInt("65")
		const WolfStakingRewardsDyCuKnO = await WolfStakingRewards.new(stringk1Sbxm7, stringu5P8jma, uintWcsXdWF, {from: accounts[1]});
		const uintwQw9LPM = BigInt("422")
		const uintrFSmzyo = BigInt("1512")
		const uintuuqqZL = BigInt("1603")
		const uintTC2gUWQ = BigInt("644")
		const uint256MbVZLTX = await WolfStakingRewardsDyCuKnO.lastTimeRewardApplicable.call(uintwQw9LPM, {from: "0x0000000000000000000000000000000000000001"});
		const uint256NBKXLCj = await WolfStakingRewardsDyCuKnO.getRewardForDuration.call(uintrFSmzyo, {from: accounts[0]});
		await WolfStakingRewardsDyCuKnO.nonReentrant.call({from: accounts[1]});
		const uint256M7JIccQ = await WolfStakingRewardsDyCuKnO.getRewardForDuration.call(uintuuqqZL, {from: "0x0000000000000000000000000000000000000001"});
		const uintwirMZL = await WolfStakingRewardsDyCuKnO.getReward.call(uintTC2gUWQ, {from: accounts[4]});
		const uint8OVfL1AH = await WolfStakingRewardsDyCuKnO.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringT0gAXvK = "6iW6bEqmMwTM3LWDzRBVomee4NDj3BvGw7wgrJdKPNQC55iPtwFzvqU6P42JledkABDPfX9bCR5l9borqz8WT6b"
		const stringwyuPoYU = "rnSgNBMiKM5SIGVOf5pYEpQbX2cx90XhWhzhEEg4lOYzpVOrF5KzhtVMyp5yIAnN"
		const uintqwa0MbA = BigInt("165")
		const WolfStakingRewardsPabecz5 = await WolfStakingRewards.new(stringT0gAXvK, stringwyuPoYU, uintqwa0MbA, {from: "0x0000000000000000000000000000000000000001"});
		const uintnsKU0P5 = BigInt("1919")
		const addressUmsjttO = accounts[4]
		const uintcsPuIsc = BigInt("1279")
		const uint9YkvIY = BigInt("524")
		const uint256gEBnvhQ = await WolfStakingRewardsPabecz5.earned.call(addressUmsjttO, uintnsKU0P5, {from: accounts[0]});
		const uint256gRxw98S = await WolfStakingRewardsPabecz5.withdrawRemainingBalance.call(uint9YkvIY, uintcsPuIsc, {from: accounts[2]});
	});
})