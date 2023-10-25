const WolfStakingRewards = artifacts.require("WolfStakingRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('WolfStakingRewards', (accounts) => {
	it('test for WolfStakingRewards', async () => {
		const addressRKJeKkk = accounts[3]
		const addresszU2cFXy = accounts[3]
		const addressf5XddkV = accounts[0]
		const WolfStakingRewardsN8JDHea = await WolfStakingRewards.new(addressRKJeKkk, addresszU2cFXy, addressf5XddkV, {from: accounts[4]});
		const uintILSDIwm = BigInt("99")
		const addresslCFWkUK = accounts[2]
		const uintP6vbGyA = BigInt("1248")
		const uintzuMnHmI = BigInt("1665")
//		const addresshWv8KB1 = await WolfStakingRewardsN8JDHea.updateReward.call(addresslCFWkUK, uintILSDIwm, {from: accounts[0]});
//		await WolfStakingRewardsN8JDHea.nonReentrant.call({from: accounts[0]});
//		const uint256KxICTRg = await WolfStakingRewardsN8JDHea.lastTimeRewardApplicable.call(uintP6vbGyA, {from: accounts[3]});
//		const uint256E9xRDyE = await WolfStakingRewardsN8JDHea.rewardPerToken.call(uintzuMnHmI, {from: accounts[5]});

		await expect(WolfStakingRewardsN8JDHea.updateReward.call(addresslCFWkUK, uintILSDIwm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addresspFT0RNX = accounts[1]
		const addressBvaMIIY = accounts[3]
		const addresswj1HubR = accounts[3]
		const WolfStakingRewardsHoCM8fG = await WolfStakingRewards.new(addresspFT0RNX, addressBvaMIIY, addresswj1HubR, {from: accounts[0]});
		const uintuBRTri = BigInt("160")
		const uintA1Ce0c = BigInt("447")
		const uintHHKwEnj = BigInt("1210")
		const uintZmKiuUq = BigInt("1169")
		const uintvjZElv = BigInt("821")
//		const uint256zCLYi0f = await WolfStakingRewardsHoCM8fG.withdraw.call(uintA1Ce0c, uintuBRTri, {from: accounts[5]});
//		const stringPv77gax = await WolfStakingRewardsHoCM8fG.symbol.call({from: accounts[2]});
//		const uint256REXyIAA = await WolfStakingRewardsHoCM8fG.withdrawRemainingBalance.call(uintZmKiuUq, uintHHKwEnj, {from: accounts[3]});
//		await WolfStakingRewardsHoCM8fG.nonReentrant.call({from: accounts[1]});
//		const uint8GzgNkp = await WolfStakingRewardsHoCM8fG.decimals.call({from: accounts[1]});
//		const uint256xoSYSfR = await WolfStakingRewardsHoCM8fG.getRewardForDuration.call(uintvjZElv, {from: accounts[3]});

		await expect(WolfStakingRewardsHoCM8fG.withdraw.call(uintA1Ce0c, uintuBRTri, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressVBA7gct = accounts[0]
		const addressiK5cVUl = accounts[0]
		const addressiQrq957 = accounts[4]
		const WolfStakingRewardsxh9x9Fg = await WolfStakingRewards.new(addressVBA7gct, addressiK5cVUl, addressiQrq957, {from: accounts[3]});
		const uintBF7FAaO = BigInt("1584")
		const uintCnlE6Y = BigInt("1595")
		const uintZyIPaxF = BigInt("1328")
		const uintYv9pHA = BigInt("126")
		const uintWG14DOv = BigInt("1443")
		const addresssxy4Ecs = accounts[5]
//		const uint256oLCb9d = await WolfStakingRewardsxh9x9Fg.withdrawRemainingBalance.call(uintCnlE6Y, uintBF7FAaO, {from: accounts[5]});
//		await WolfStakingRewardsxh9x9Fg.nonReentrant.call({from: accounts[4]});
//		const uint256wNidFBH = await WolfStakingRewardsxh9x9Fg.withdraw.call(uintYv9pHA, uintZyIPaxF, {from: accounts[1]});
//		const uint256RvsbEgR = await WolfStakingRewardsxh9x9Fg.balanceOfPerPool.call(addresssxy4Ecs, uintWG14DOv, {from: accounts[4]});

		await expect(WolfStakingRewardsxh9x9Fg.withdrawRemainingBalance.call(uintCnlE6Y, uintBF7FAaO, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressVGm3Kxp = accounts[1]
		const addressuqDf9D = accounts[4]
		const addresskGYDIhH = accounts[4]
		const WolfStakingRewardsQiKXrx2 = await WolfStakingRewards.new(addressVGm3Kxp, addressuqDf9D, addresskGYDIhH, {from: accounts[2]});
		const uintnZ4BTWO = BigInt("1720")
		const uintTefSg8q = BigInt("897")
		const addressXclHSpY = accounts[0]
		const uint256vVa8tDJ = await WolfStakingRewardsQiKXrx2.totalSupplyPerPool.call(uintnZ4BTWO, {from: accounts[4]});
		const uint256DDexCgB = await WolfStakingRewardsQiKXrx2.balanceOfPerPool.call(addressXclHSpY, uintTefSg8q, {from: accounts[4]});

		assert.equal(uint256DDexCgB, BigInt("0"))
		assert.equal(uint256vVa8tDJ, BigInt("0"))
	});

	it('test for WolfStakingRewards', async () => {
		const stringWACmRT4 = "E8kQo7R"
		const stringhccpXGu = "fKBOVx0hRdbQ8qhSzvzDKG3x5ObHYnEgnufUuo9h6zlsQc06"
		const uintUPrjLy8 = BigInt("13")
		const WolfStakingRewardsOpP5eGp = await WolfStakingRewards.new(stringWACmRT4, stringhccpXGu, uintUPrjLy8, {from: "0x0000000000000000000000000000000000000001"});
		const uintl2hB3wy = BigInt("1308")
		const addresswu1FZ9n = accounts[0]
		const uintwmFD37 = BigInt("1577")
		const uintfr5uqwo = BigInt("1471")
		const uintzrK762 = BigInt("634")
		const uintllFtRLf = BigInt("879")
		const uintSuMjXdq = BigInt("139")
		const addressALxPMKk = accounts[5]
		const stringNIuixAB = await WolfStakingRewardsOpP5eGp.symbol.call({from: accounts[2]});
		const uint256aykmewx = await WolfStakingRewardsOpP5eGp.balanceOfPerPool.call(addresswu1FZ9n, uintl2hB3wy, {from: accounts[0]});
		const uint256XvqrhQI = await WolfStakingRewardsOpP5eGp.withdraw.call(uintfr5uqwo, uintwmFD37, {from: accounts[0]});
		const stringtLXhqaV = await WolfStakingRewardsOpP5eGp.name.call({from: accounts[2]});
		const uint2566HWt2n = await WolfStakingRewardsOpP5eGp.withdraw.call(uintllFtRLf, uintzrK762, {from: accounts[1]});
		const addressSZ6WIK4 = await WolfStakingRewardsOpP5eGp.updateReward.call(addressALxPMKk, uintSuMjXdq, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVV3Y3gC = "IysxEt6M1vXhzk96KKne4G2BYzp8z4CkA6RgSjJeLXWb3"
		const stringPub4GnN = "Wq1"
		const uintk3UWn64 = BigInt("196")
		const WolfStakingRewardsoIoWIeH = await WolfStakingRewards.new(stringVV3Y3gC, stringPub4GnN, uintk3UWn64, {from: "0x0000000000000000000000000000000000000001"});
		const uintZPDcDZH = BigInt("478")
		const uintSjPMK5h = BigInt("187")
		const addresstn32O18 = accounts[3]
		const uintUT23Fpm = BigInt("1268")
		const uintD2fwpog = BigInt("1263")
		const uintqLwwae = BigInt("1065")
		const uint256q8GlIaT = await WolfStakingRewardsoIoWIeH.totalSupplyPerPool.call(uintZPDcDZH, {from: accounts[1]});
		const uint256BGnyBof = await WolfStakingRewardsoIoWIeH.earned.call(addresstn32O18, uintSjPMK5h, {from: accounts[2]});
		const stringvovuk9N = await WolfStakingRewardsoIoWIeH.name.call({from: accounts[2]});
		const uint256ybUJh7H = await WolfStakingRewardsoIoWIeH.exit.call(uintUT23Fpm, {from: accounts[1]});
		const uint256EIVh76E = await WolfStakingRewardsoIoWIeH.withdraw.call(uintqLwwae, uintD2fwpog, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringve5M0y = "hLX7NnfvFER4wGR3UxBD7CD1h97wSCO53m2pp7rwAqv1k0Yft"
		const stringzumru5E = "dxfUGBAGkIYwYOcr0Vu1KTeGxFH5f02ZU6EBEtAJYOFHQjVQJ6g"
		const uintwREiHuV = BigInt("158")
		const WolfStakingRewardsr2wv1ou = await WolfStakingRewards.new(stringve5M0y, stringzumru5E, uintwREiHuV, {from: accounts[2]});
		const uintp7Y1KTV = BigInt("1440")
		const addressVx7Fy6l = accounts[3]
		const uintO3T7uVs = BigInt("80")
		const addressHMmifH = accounts[3]
		const addressQa55gX9 = await WolfStakingRewardsr2wv1ou.updateReward.call(addressVx7Fy6l, uintp7Y1KTV, {from: accounts[1]});
		const uint256NMbWCNS = await WolfStakingRewardsr2wv1ou.balanceOfPerPool.call(addressHMmifH, uintO3T7uVs, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringIx7oBmF = "bkOoGy8P1Y57g9FI41c11qQVgo78TlwMli298t34LT0uUgks94uVgrBX0IYtwD042lNNDFNcJNrM3THym"
		const stringuik6fz = "KiaaRAiRDncDfI4joIczsSdNk0InV7b4A0TsiNdiv9"
		const uintd8q6Bl9 = BigInt("207")
		const WolfStakingRewardspOqpTxt = await WolfStakingRewards.new(stringIx7oBmF, stringuik6fz, uintd8q6Bl9, {from: "0x0000000000000000000000000000000000000001"});
		const uintEmwR0cs = BigInt("1049")
		const uintVxZ707S = BigInt("893")
		const uint256vhWcpSt = await WolfStakingRewardspOqpTxt.getRewardForDuration.call(uintEmwR0cs, {from: accounts[2]});
		const stringOtUWnyH = await WolfStakingRewardspOqpTxt.symbol.call({from: accounts[2]});
		const uint256bSAumZ = await WolfStakingRewardspOqpTxt.totalSupplyPerPool.call(uintVxZ707S, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuiXbcp5 = "jR7omwf0KncA4Cx4hcy"
		const stringtvRNsAC = "tZdtlUon"
		const uintsoC2Z8m = BigInt("114")
		const WolfStakingRewardsA5LAc9I = await WolfStakingRewards.new(stringuiXbcp5, stringtvRNsAC, uintsoC2Z8m, {from: accounts[4]});
		const uintw6I10Z6 = BigInt("1089")
		const uintaMDI2h8 = BigInt("1254")
		const uintaewBC5Q = BigInt("611")
		const uintLpMOe2v = BigInt("1410")
		await WolfStakingRewardsA5LAc9I.onlyOwner.call({from: accounts[1]});
		const uint256M0bhfqR = await WolfStakingRewardsA5LAc9I.withdraw.call(uintaMDI2h8, uintw6I10Z6, {from: accounts[3]});
		const uint256pMGtn0 = await WolfStakingRewardsA5LAc9I.rewardPerToken.call(uintaewBC5Q, {from: accounts[5]});
		const uintnt1ALVU = await WolfStakingRewardsA5LAc9I.getReward.call(uintLpMOe2v, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressFk8yk5b = accounts[4]
		const addressljoCEIc = accounts[0]
		const addresswayWCHR = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardssb9blQR = await WolfStakingRewards.new(addressFk8yk5b, addressljoCEIc, addresswayWCHR, {from: accounts[4]});
		const uintpzM5E4A = BigInt("235")
		const addressPEzH2bE = accounts[0]
		const uintO4IJ7RJ = BigInt("797")
		const uintvJuMo1R = BigInt("1184")
		const uintcRWyfHC = BigInt("1586")
		const uinto8qjez5 = BigInt("1980")
		const uintkkZng0s = BigInt("1319")
		const uint7fxDta = BigInt("701")
		const uint256PwvUHZb = await WolfStakingRewardssb9blQR.earned.call(addressPEzH2bE, uintpzM5E4A, {from: accounts[3]});
//		const uint256JsRQQCe = await WolfStakingRewardssb9blQR.stake.call(uintvJuMo1R, uintO4IJ7RJ, {from: accounts[5]});
//		const uint256UaJHhwV = await WolfStakingRewardssb9blQR.lastTimeRewardApplicable.call(uintcRWyfHC, {from: accounts[1]});
//		await WolfStakingRewardssb9blQR.nonReentrant.call({from: accounts[0]});
//		const uint256ItGdpDN = await WolfStakingRewardssb9blQR.getRewardForDuration.call(uinto8qjez5, {from: accounts[4]});
//		const uint256GWixMo = await WolfStakingRewardssb9blQR.stake.call(uint7fxDta, uintkkZng0s, {from: accounts[3]});
//		const stringmQBexkY = await WolfStakingRewardssb9blQR.name.call({from: accounts[4]});

		assert.equal(uint256PwvUHZb, BigInt("0"))
		await expect(WolfStakingRewardssb9blQR.stake.call(uintvJuMo1R, uintO4IJ7RJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressfSLnaF1 = accounts[4]
		const addressIdpj8JO = accounts[0]
		const addressKksjng = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardssb9blQR = await WolfStakingRewards.new(addressfSLnaF1, addressIdpj8JO, addressKksjng, {from: accounts[4]});
		const uintMbXzA0N = BigInt("1439")
		const uinteAe1hRO = BigInt("235")
		const addressXRs8QwM = "0x0000000000000000000000000000000000000001"
		const uintuh3yPHw = BigInt("1586")
		const uintT4PuOk7 = BigInt("1980")
//		const uint256arrayDgYgSXj = await WolfStakingRewardssb9blQR.updateNotifyRewardAmount.call(uintMbXzA0N, {from: accounts[3]});
//		const uint256PwvUHZb = await WolfStakingRewardssb9blQR.earned.call(addressXRs8QwM, uinteAe1hRO, {from: accounts[3]});
//		const uint256UaJHhwV = await WolfStakingRewardssb9blQR.lastTimeRewardApplicable.call(uintuh3yPHw, {from: accounts[1]});
//		await WolfStakingRewardssb9blQR.nonReentrant.call({from: accounts[0]});
//		const uint256ItGdpDN = await WolfStakingRewardssb9blQR.getRewardForDuration.call(uintT4PuOk7, {from: accounts[4]});

		await expect(WolfStakingRewardssb9blQR.updateNotifyRewardAmount.call(uintMbXzA0N, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringuw3lIRs = "rJtvR8lMB5tQxsDSbBJSbTNh3LCGrT8w2bHHmK6aV9Wb2gtOg3CnJ7ypALgsGW1RYl21JDNHrdRzpqg1xu1EomiX0zlOYgdt6k"
		const stringyLsDkO1 = "Jl6wmHyE4iuMTTMyRMYizsTX1B7Ks4KqIfz3rbPQmv8SQHm3WvTAJsSpEytIdriDaJxIDvhCogGT"
		const uintipUohm9 = BigInt("0")
		const WolfStakingRewardsql9arCb = await WolfStakingRewards.new(stringuw3lIRs, stringyLsDkO1, uintipUohm9, {from: accounts[2]});
		const uintUrYD9Et = BigInt("599")
		const uintJRbGN4P = BigInt("1263")
		const uintTmc9RjE = BigInt("1586")
		const uintqAt1ysA = BigInt("292")
		const uint256WHyU4KO = await WolfStakingRewardsql9arCb.withdraw.call(uintJRbGN4P, uintUrYD9Et, {from: accounts[2]});
		await WolfStakingRewardsql9arCb.onlyRewardsDistribution.call({from: accounts[1]});
		const uint8U2tCukq = await WolfStakingRewardsql9arCb.decimals.call({from: accounts[4]});
		const uint256tyNWkKc = await WolfStakingRewardsql9arCb.getRewardForDuration.call(uintTmc9RjE, {from: accounts[2]});
		await WolfStakingRewardsql9arCb.nonReentrant.call({from: accounts[0]});
		const uint256cU1zCtz = await WolfStakingRewardsql9arCb.rewardPerToken.call(uintqAt1ysA, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressj5FtsKG = accounts[4]
		const addressaXEI11 = accounts[0]
		const addressUIIBwBm = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardssb9blQR = await WolfStakingRewards.new(addressj5FtsKG, addressaXEI11, addressUIIBwBm, {from: accounts[4]});
		const uintaSgBGN6 = BigInt("235")
		const addressfeMw1K1 = "0x0000000000000000000000000000000000000001"
		const uintjhIm4BW = BigInt("1655")
		const uintvEDlP10 = BigInt("1980")
		const uint256PwvUHZb = await WolfStakingRewardssb9blQR.earned.call(addressfeMw1K1, uintaSgBGN6, {from: accounts[3]});
		const uint256UaJHhwV = await WolfStakingRewardssb9blQR.lastTimeRewardApplicable.call(uintjhIm4BW, {from: accounts[1]});
//		const uint256ItGdpDN = await WolfStakingRewardssb9blQR.getRewardForDuration.call(uintvEDlP10, {from: accounts[4]});
//		const stringmQBexkY = await WolfStakingRewardssb9blQR.name.call({from: accounts[4]});

		assert.equal(uint256PwvUHZb, BigInt("0"))
		assert.equal(uint256UaJHhwV, BigInt("0"))
		await expect(WolfStakingRewardssb9blQR.getRewardForDuration.call(uintvEDlP10, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const addressXEcBCUf = accounts[4]
		const addressRMqhqd5 = accounts[0]
		const addressX2q7ikV = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardssb9blQR = await WolfStakingRewards.new(addressXEcBCUf, addressRMqhqd5, addressX2q7ikV, {from: accounts[4]});
		const uintUDBM2R = BigInt("235")
		const addressNyRkMPF = "0x0000000000000000000000000000000000000001"
		const uintHxHz778 = BigInt("1326")
		const uinthUQPStB = BigInt("1586")
		const uintAzDNrKk = BigInt("1971")
		const uint256PwvUHZb = await WolfStakingRewardssb9blQR.earned.call(addressNyRkMPF, uintUDBM2R, {from: accounts[3]});
//		const uint256CZV5yGV = await WolfStakingRewardssb9blQR.exit.call(uintHxHz778, {from: accounts[4]});
//		const uint256UaJHhwV = await WolfStakingRewardssb9blQR.lastTimeRewardApplicable.call(uinthUQPStB, {from: accounts[1]});
//		await WolfStakingRewardssb9blQR.nonReentrant.call({from: accounts[0]});
//		const uint256ItGdpDN = await WolfStakingRewardssb9blQR.getRewardForDuration.call(uintAzDNrKk, {from: accounts[4]});
//		const stringmQBexkY = await WolfStakingRewardssb9blQR.name.call({from: accounts[4]});

		assert.equal(uint256PwvUHZb, BigInt("0"))
		await expect(WolfStakingRewardssb9blQR.exit.call(uintHxHz778, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringc6rqc8N = "DmWMqSiem6874kgldvVCvXU1UhqOyiN"
		const stringZfkvd6 = "ewv46EPll"
		const uintuC0G4H4 = BigInt("220")
		const WolfStakingRewardsRsqDb5 = await WolfStakingRewards.new(stringc6rqc8N, stringZfkvd6, uintuC0G4H4, {from: accounts[2]});
		const uintiflxj9C = BigInt("1034")
		const addressIUaPosl = "0x0000000000000000000000000000000000000001"
		const uints5UZ0Lm = BigInt("1840")
		const addressJ0REK67 = await WolfStakingRewardsRsqDb5.updateReward.call(addressIUaPosl, uintiflxj9C, {from: accounts[5]});
		const uint256kWyLY3T = await WolfStakingRewardsRsqDb5.exit.call(uints5UZ0Lm, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringedybu38 = "dRzYHx6YzOwq2zsKfDoa2MPEvFQ3PncQtK"
		const stringuZbMo0H = "q"
		const uintzBJqrLO = BigInt("80")
		const WolfStakingRewardsvcdi1E = await WolfStakingRewards.new(stringedybu38, stringuZbMo0H, uintzBJqrLO, {from: accounts[4]});
		const uintoV2gR23 = BigInt("167")
		const uinteODSUSz = BigInt("766")
		const uint256J4nAGEw = await WolfStakingRewardsvcdi1E.rewardPerToken.call(uintoV2gR23, {from: accounts[5]});
		const uint256BMFeHCa = await WolfStakingRewardsvcdi1E.rewardPerToken.call(uinteODSUSz, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressRgMqjw = accounts[4]
		const addresslRQ2MOr = accounts[0]
		const addressSTILKLm = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardssb9blQR = await WolfStakingRewards.new(addressRgMqjw, addresslRQ2MOr, addressSTILKLm, {from: accounts[4]});
		const uintzNQrDv = BigInt("235")
		const addressK5by5oO = accounts[4]
		const uintixs87PQ = BigInt("18")
		const uintUFBIPOY = BigInt("1980")
		const uintxnQuF4s = BigInt("186")
		const uintBtPatT0 = BigInt("1591")
		const uint256PwvUHZb = await WolfStakingRewardssb9blQR.earned.call(addressK5by5oO, uintzNQrDv, {from: accounts[3]});
		const uintyuknvO = await WolfStakingRewardssb9blQR.getReward.call(uintixs87PQ, {from: accounts[0]});
//		const uint256ItGdpDN = await WolfStakingRewardssb9blQR.getRewardForDuration.call(uintUFBIPOY, {from: accounts[4]});
//		const uint256d6Jh9yn = await WolfStakingRewardssb9blQR.withdrawRemainingBalance.call(uintBtPatT0, uintxnQuF4s, {from: "0x0000000000000000000000000000000000000001"});
//		const stringmQBexkY = await WolfStakingRewardssb9blQR.name.call({from: accounts[4]});

		assert.equal(uint256PwvUHZb, BigInt("0"))
		await expect(WolfStakingRewardssb9blQR.getRewardForDuration.call(uintUFBIPOY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringn5uBrgM = "xJTNloo4qqgAp7A3NIj"
		const stringjqAXf2g = "I04Bs67VfE26k24Ata9GHeasmN7npbz1FsX9GHz5qxqHkeDCodFJCxpjNa3WvmMVBRvUGEp"
		const uintLzDhzJI = BigInt("228")
		const WolfStakingRewardsKL45nSf = await WolfStakingRewards.new(stringn5uBrgM, stringjqAXf2g, uintLzDhzJI, {from: accounts[5]});
		const uintQdnlNCK = BigInt("221")
		const uinteu7bPhZ = BigInt("298")
		const uintVP38XW = BigInt("560")
		const uint2561JEuQa = await WolfStakingRewardsKL45nSf.withdrawRemainingBalance.call(uinteu7bPhZ, uintQdnlNCK, {from: accounts[3]});
		const uint2564akIyR = await WolfStakingRewardsKL45nSf.lastTimeRewardApplicable.call(uintVP38XW, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmLfoSDS = "us9eYaIKjx3oWUfeoxWT6HC5fe4WCy4BrnKYMvkhyCWbcjzYbUWocqkAZxkXlmQOsDO5NKee2DO1nUJoj"
		const stringT8twNxs = "j6cpkKxreL4BxXN8Qqyt4tXAwIR"
		const uintqEuis14 = BigInt("178")
		const WolfStakingRewardstdcFWVd = await WolfStakingRewards.new(stringmLfoSDS, stringT8twNxs, uintqEuis14, {from: accounts[1]});
		const uintoy1VfYt = BigInt("745")
		const uintXrphOMD = BigInt("1482")
		const uintRXZUF6m = BigInt("1180")
		const uintqZvONCy = BigInt("109")
		const uintgiVZAgM = BigInt("1721")
		const uintLs605vd = BigInt("1069")
		const uintJCwEpae = BigInt("857")
		const uint256RZ0d3nz = await WolfStakingRewardstdcFWVd.totalSupplyPerPool.call(uintoy1VfYt, {from: accounts[5]});
		const uint256u0IImmJ = await WolfStakingRewardstdcFWVd.withdrawRemainingBalance.call(uintRXZUF6m, uintXrphOMD, {from: accounts[4]});
		const uint256izKRsV = await WolfStakingRewardstdcFWVd.rewardPerToken.call(uintqZvONCy, {from: accounts[0]});
		const uint256PUx8pd = await WolfStakingRewardstdcFWVd.withdraw.call(uintLs605vd, uintgiVZAgM, {from: accounts[3]});
		const uint256arrayuiUZJGT = await WolfStakingRewardstdcFWVd.updateNotifyRewardAmount.call(uintJCwEpae, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUoLqw0F = "uerEDdVoLiZHvLWsmT3JspmQBcTfgqIvsSEoI8rmR14jexQCNStYVi8HPnUsrrSHm17FvjCv"
		const stringwNVZZNv = "xvKB06ODiLvRbdWSJsELDBsuCNFt2YOlxfIjJM3hqUYAnMBLnWzqJqNqvVJG8"
		const uintyuwweBh = BigInt("141")
		const WolfStakingRewardsQAwYqB = await WolfStakingRewards.new(stringUoLqw0F, stringwNVZZNv, uintyuwweBh, {from: accounts[2]});
		const uintSnsj5L = BigInt("928")
		const addressCq9EkBo = accounts[4]
		const uintMelRrh = BigInt("1081")
		const addressrsZVBh = accounts[0]
		const uintfUmLA6j = BigInt("1300")
		const uint256QkrJ9NZ = await WolfStakingRewardsQAwYqB.balanceOfPerPool.call(addressCq9EkBo, uintSnsj5L, {from: "0x0000000000000000000000000000000000000001"});
		await WolfStakingRewardsQAwYqB.nonReentrant.call({from: accounts[4]});
		const uint256ntaQgQ2 = await WolfStakingRewardsQAwYqB.earned.call(addressrsZVBh, uintMelRrh, {from: accounts[4]});
		const uint256TCPrZK8 = await WolfStakingRewardsQAwYqB.exit.call(uintfUmLA6j, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringxYyDY0w = "DdiXxlypILBK5ro3yJGEG2E2"
		const stringW6vohxK = "pHKF9GL112mtRIfngYb5u4qvIXyNtgFbCJBwpfGvPWqr3FvNTEiizVqrQJCi5hunwcX2qA"
		const uintDjxZ3jp = BigInt("158")
		const WolfStakingRewardsrjoraxY = await WolfStakingRewards.new(stringxYyDY0w, stringW6vohxK, uintDjxZ3jp, {from: "0x0000000000000000000000000000000000000001"});
		const uintsbQkPyv = BigInt("1573")
		const uintRjhVH7 = BigInt("417")
		const addressKdOM5E9 = accounts[4]
		const uint256DFkV5jr = await WolfStakingRewardsrjoraxY.rewardPerToken.call(uintsbQkPyv, {from: accounts[5]});
		await WolfStakingRewardsrjoraxY.nonReentrant.call({from: accounts[2]});
		const addressTjklVbD = await WolfStakingRewardsrjoraxY.updateReward.call(addressKdOM5E9, uintRjhVH7, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringT8B46k = "nUH8z4EtvtHIE7KNWSCKNdfsu4wvxRJeg7EBBRBVmnXGFHufiaRGiA2p5kphi7XXqyKkzgxFhAww2ByqyEd0spCdcbovu44"
		const stringz82x2zI = "r3L1SfxVNW9QR26R6DUF7aixcAUEBHsEs2dB0aSfbXw1EwcwpUV5h1YiL6Aa64m5ryC8EYO"
		const uintvUfxrjY = BigInt("95")
		const WolfStakingRewards6Veo6C = await WolfStakingRewards.new(stringT8B46k, stringz82x2zI, uintvUfxrjY, {from: accounts[2]});
		const uintIzNYcus = BigInt("1766")
		const stringjDSzYj = await WolfStakingRewards6Veo6C.symbol.call({from: accounts[2]});
		const uint256ZbUSkAI = await WolfStakingRewards6Veo6C.getRewardForDuration.call(uintIzNYcus, {from: accounts[0]});
		const uint8l2YdHfN = await WolfStakingRewards6Veo6C.decimals.call({from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringAjkkhMR = "6w3zn4eLtNCcBX3KyDYumhmXIETRj"
		const stringUDKmiIN = "RDMaN9MZXAwMQoCr0LfhPc6TTxIvxPwTTufZ58vMh5mU62mgbCsrWaQTx5lUzTreoMeQFfmIR770z1egqM"
		const uintSIxGOL = BigInt("51")
		const WolfStakingRewardsloAgjns = await WolfStakingRewards.new(stringAjkkhMR, stringUDKmiIN, uintSIxGOL, {from: accounts[2]});
		const uintu8Azu09 = BigInt("1277")
		const uintVXgrfqZ = BigInt("146")
		const uintXWz3Jt = BigInt("1953")
		const uint2mzfr2 = BigInt("717")
		const uintJzO9ezU = BigInt("208")
		const uint256arrayVyocKRY = await WolfStakingRewardsloAgjns.updateNotifyRewardAmount.call(uintu8Azu09, {from: accounts[2]});
		const uint256qLDqea = await WolfStakingRewardsloAgjns.exit.call(uintVXgrfqZ, {from: accounts[1]});
		const uint256soj8zqE = await WolfStakingRewardsloAgjns.withdrawRemainingBalance.call(uint2mzfr2, uintXWz3Jt, {from: accounts[3]});
		await WolfStakingRewardsloAgjns.onlyRewardsDistribution.call({from: accounts[3]});
		await WolfStakingRewardsloAgjns.nonReentrant.call({from: accounts[2]});
		const uint256eNCNjAQ = await WolfStakingRewardsloAgjns.lastTimeRewardApplicable.call(uintJzO9ezU, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringh7xtp6D = "m1ds9zH18E1bsxzNMGbIGvXRf7uPdK"
		const stringlLnNIDw = "8JpOfj0sAOMxiKxoDGE7FGOzhowDG2NYsrd5kA8yFfXoowis6RP8lIjVXRBLXr5s"
		const uinte7BIpW = BigInt("216")
		const WolfStakingRewardsjrCuNxW = await WolfStakingRewards.new(stringh7xtp6D, stringlLnNIDw, uinte7BIpW, {from: accounts[4]});
		const uintTIX2dc = BigInt("36")
		const uintgUx07Zf = BigInt("1690")
		const uintsAlqSP = BigInt("473")
		const uintl2MQFpv = BigInt("1390")
		const uintOuT9TgR = BigInt("1246")
		const addressoNKUtr3 = accounts[4]
		const uinthR8KKiv = await WolfStakingRewardsjrCuNxW.getReward.call(uintTIX2dc, {from: "0x0000000000000000000000000000000000000001"});
		const uint256YWo8jik = await WolfStakingRewardsjrCuNxW.totalSupplyPerPool.call(uintgUx07Zf, {from: accounts[4]});
		const uint256xDOSS3 = await WolfStakingRewardsjrCuNxW.stake.call(uintl2MQFpv, uintsAlqSP, {from: accounts[2]});
		const stringOmNRp5F = await WolfStakingRewardsjrCuNxW.symbol.call({from: accounts[0]});
		const uint256rLYeC82 = await WolfStakingRewardsjrCuNxW.balanceOfPerPool.call(addressoNKUtr3, uintOuT9TgR, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const string6nYInO = "wujNisyKefwLrjxumqwBDpjEE78fzi1586XMptZpD9qPMCuL8veQiDc43bpdCnO3IsaXau6odiporgY1jgfkvIMEiBh"
		const stringnuCngFu = "1Qk8HczB1S537Dau8AnJYKTzuaH5GWIe3vJ3wn2LFNaTMAh4zBVcKQ81kRhqyp2r4oEJnSBUNihyQXG2h"
		const uintRWIXr2y = BigInt("108")
		const WolfStakingRewardsIG8jAb0 = await WolfStakingRewards.new(string6nYInO, stringnuCngFu, uintRWIXr2y, {from: accounts[1]});
		await WolfStakingRewardsIG8jAb0.nonReentrant.call({from: accounts[2]});
		const uint8N7JE96 = await WolfStakingRewardsIG8jAb0.decimals.call({from: accounts[4]});
		const stringAHyxEGE = await WolfStakingRewardsIG8jAb0.symbol.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressqcJ2Xp1 = accounts[4]
		const addressfbobYB = accounts[0]
		const addressqBsldT = "0x0000000000000000000000000000000000000001"
		const WolfStakingRewardssb9blQR = await WolfStakingRewards.new(addressqcJ2Xp1, addressfbobYB, addressqBsldT, {from: accounts[4]});
		const uintoEgCyy3 = BigInt("1647")
		const addressXh6bzf = accounts[3]
		const uintYmasEPa = BigInt("1343")
		const uintz3wRSM = BigInt("947")
		const uintpakHPtq = BigInt("200")
		const addressqvWjXmy = accounts[0]
		const uint256ZYMj03b = await WolfStakingRewardssb9blQR.earned.call(addressXh6bzf, uintoEgCyy3, {from: accounts[3]});
//		const uint256a5QlJs4 = await WolfStakingRewardssb9blQR.withdrawRemainingBalance.call(uintz3wRSM, uintYmasEPa, {from: accounts[4]});
//		const uint256PwvUHZb = await WolfStakingRewardssb9blQR.earned.call(addressqvWjXmy, uintpakHPtq, {from: accounts[3]});

		assert.equal(uint256ZYMj03b, BigInt("0"))
		await expect(WolfStakingRewardssb9blQR.withdrawRemainingBalance.call(uintz3wRSM, uintYmasEPa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for WolfStakingRewards', async () => {
		const stringWzghsHg = "HyHY79KXpaYkVrJvEOYLErvsYwxRZXITMAcyigzMjmnqo8MANKcAXp6tmz9WPGDVrk6PKidOsje4DGZnfiQFZS"
		const stringF9CWDlj = "PFhQHJj7reURgxj70zp3cGgoojUDgQzeaVUrwwjJXvkIyU2fXqF6FABLwS"
		const uintMlo457g = BigInt("17")
		const WolfStakingRewardsyvQC2Of = await WolfStakingRewards.new(stringWzghsHg, stringF9CWDlj, uintMlo457g, {from: accounts[2]});
		const uintp9Wmy3f = BigInt("732")
		const uintQ5C44O6 = BigInt("1361")
		const uintQzBhVw0 = BigInt("1987")
		const uint256rcb5xxg = await WolfStakingRewardsyvQC2Of.withdrawRemainingBalance.call(uintQ5C44O6, uintp9Wmy3f, {from: accounts[1]});
		const uint256Bj9TxLO = await WolfStakingRewardsyvQC2Of.rewardPerToken.call(uintQzBhVw0, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringuz07OhI = "xI9jaj"
		const stringHGK399l = "M1cMW4d6jtHwTxPkcGQDOF14CWsNDNrru4w1o7vkHdDFLXoubvb"
		const uintGdImxB7 = BigInt("87")
		const WolfStakingRewardsJUn1NHc = await WolfStakingRewards.new(stringuz07OhI, stringHGK399l, uintGdImxB7, {from: "0x0000000000000000000000000000000000000001"});
		const uintuuSAQwc = BigInt("89")
		const uintvS0h5pf = BigInt("580")
		const uint256tDYX6lh = await WolfStakingRewardsJUn1NHc.getRewardForDuration.call(uintuuSAQwc, {from: accounts[2]});
		await WolfStakingRewardsJUn1NHc.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256xmKNRLb = await WolfStakingRewardsJUn1NHc.getRewardForDuration.call(uintvS0h5pf, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringp8PP16X = "CA3m3l2LBlCsgYSjiYfdvHwzlCd2"
		const stringfGVBy4R = "DjpQQ24PaGLpiLELreF3dFQEbf82NV"
		const uintQsgayw9 = BigInt("67")
		const WolfStakingRewardsAKN6Iov = await WolfStakingRewards.new(stringp8PP16X, stringfGVBy4R, uintQsgayw9, {from: accounts[3]});
		const uintzRj0K41 = BigInt("868")
		const uintEDMALZq = BigInt("881")
		const uintVJI5ukt = BigInt("969")
		const uintzbeQJzH = BigInt("1560")
		const uintcJrEWL1 = BigInt("1947")
		const uintqPw2mR7 = BigInt("1792")
		const addressD25meJz = accounts[0]
		const uintgXVDtDF = BigInt("1511")
		const addresspdFeRP = accounts[5]
		const uint256rKFAmTP = await WolfStakingRewardsAKN6Iov.stake.call(uintEDMALZq, uintzRj0K41, {from: accounts[2]});
		const uint256oGJc4c = await WolfStakingRewardsAKN6Iov.withdraw.call(uintzbeQJzH, uintVJI5ukt, {from: accounts[1]});
		const uint256N2Jyc3U = await WolfStakingRewardsAKN6Iov.totalSupplyPerPool.call(uintcJrEWL1, {from: accounts[1]});
		const uint256TKyxczE = await WolfStakingRewardsAKN6Iov.balanceOfPerPool.call(addressD25meJz, uintqPw2mR7, {from: accounts[2]});
		const addressirpMVRs = await WolfStakingRewardsAKN6Iov.updateReward.call(addresspdFeRP, uintgXVDtDF, {from: accounts[1]});
		const stringHKT4l3d = await WolfStakingRewardsAKN6Iov.name.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringoyVaUMv = "q9nWF1Fy1DKSjYEyUTDFSbP6Zu5ANYfC8dIvMIWnftZJ89OxvRYJflEHNnEyjqa9F1"
		const stringM3n75Di = "vhnprld4D111jQ1CNiBHfHeJdC1CR58sp0EBzsuqEUPdJipADpVWO2hu01VvELudj7ANPX5J1gBVM4i43G"
		const uintZiR054c = BigInt("79")
		const WolfStakingRewardsoXzCcF = await WolfStakingRewards.new(stringoyVaUMv, stringM3n75Di, uintZiR054c, {from: accounts[2]});
		const uintxubNjQh = BigInt("1926")
		const uintf8Up8Xe = BigInt("530")
		const uintbZQxapI = BigInt("1942")
		const uint256PLSf1Xa = await WolfStakingRewardsoXzCcF.totalSupplyPerPool.call(uintxubNjQh, {from: accounts[3]});
		const uint256iB9JHMJ = await WolfStakingRewardsoXzCcF.exit.call(uintf8Up8Xe, {from: accounts[2]});
		const uint256cOeoijU = await WolfStakingRewardsoXzCcF.getRewardForDuration.call(uintbZQxapI, {from: accounts[0]});
		await WolfStakingRewardsoXzCcF.onlyOwner.call({from: accounts[3]});
		const uint8AVVDtlk = await WolfStakingRewardsoXzCcF.decimals.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringvqsdMlQ = "jdiJvCtu7uNFAD362ttCN058so"
		const stringK6h5QPk = "99r6131G4AW17XNJFiX8lICfWx3VzHy8lxWk7d9XuYZmaYBaW"
		const uintm4WT8tz = BigInt("140")
		const WolfStakingRewardsfQRj43 = await WolfStakingRewards.new(stringvqsdMlQ, stringK6h5QPk, uintm4WT8tz, {from: accounts[1]});
		const uintFheNpA5 = BigInt("1593")
		const uintXZVV1Pg = BigInt("2039")
		const addressMclmdFi = accounts[0]
		const uintyBI1SxB = BigInt("71")
		const addressoNQFqD = accounts[3]
		const uintzvXNeJH = BigInt("966")
		const uintdUQhw8n = BigInt("772")
		const uint256FMsfFa = await WolfStakingRewardsfQRj43.exit.call(uintFheNpA5, {from: accounts[4]});
		const uint256JiWUVI = await WolfStakingRewardsfQRj43.balanceOfPerPool.call(addressMclmdFi, uintXZVV1Pg, {from: accounts[4]});
		const addressLnyG3gV = await WolfStakingRewardsfQRj43.updateReward.call(addressoNQFqD, uintyBI1SxB, {from: accounts[3]});
		const uint256l9dalyF = await WolfStakingRewardsfQRj43.getRewardForDuration.call(uintzvXNeJH, {from: accounts[4]});
		const uint256CX3nWDa = await WolfStakingRewardsfQRj43.rewardPerToken.call(uintdUQhw8n, {from: accounts[0]});
		await WolfStakingRewardsfQRj43.nonReentrant.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringBvcIEqN = "StvIWdugDczVfqwzasvE68gY3xYIk88Gopm6h9gOU"
		const stringtnoPJtL = "y3dEXutaC4f8iRSODISX5dM4Kq6jgFxM7UB3s8sWNeG7uVmO"
		const uintTXkun3 = BigInt("235")
		const WolfStakingRewardsRNdKSV7 = await WolfStakingRewards.new(stringBvcIEqN, stringtnoPJtL, uintTXkun3, {from: accounts[4]});
		const uintPg1Mmos = BigInt("1291")
		const uintfaWSN5m = BigInt("1262")
		const stringGNpWXHT = await WolfStakingRewardsRNdKSV7.symbol.call({from: accounts[1]});
		const stringYkJCvw = await WolfStakingRewardsRNdKSV7.name.call({from: accounts[3]});
		const uint256Rhoai0N = await WolfStakingRewardsRNdKSV7.withdraw.call(uintfaWSN5m, uintPg1Mmos, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringv1K4tx4 = "48XxJDWTJyZfWpHcb4Fnuy91pj2spataYTdwM1dhmFJoX9a9VoTXp"
		const stringmN9KFF = "tn"
		const uintKVWiSPB = BigInt("124")
		const WolfStakingRewardsQhXWQdN = await WolfStakingRewards.new(stringv1K4tx4, stringmN9KFF, uintKVWiSPB, {from: accounts[0]});
		const uintl1lXP5 = BigInt("1841")
		const uintN61U8MX = BigInt("857")
		await WolfStakingRewardsQhXWQdN.onlyRewardsDistribution.call({from: accounts[5]});
		const uint256xXkCdtt = await WolfStakingRewardsQhXWQdN.lastTimeRewardApplicable.call(uintl1lXP5, {from: accounts[3]});
		const uint256vwBoItB = await WolfStakingRewardsQhXWQdN.rewardPerToken.call(uintN61U8MX, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringP7viO24 = "IcsAy7NJdgwoNCg9VsoCNJRXdSWdO3tvgsqKzI2xhloFeXeO9892l2NMpruwquCiouBjFhxUQg"
		const stringxh3lya6 = "JCJDlChXwDrhLzVbkFOhXkAiw"
		const uintX0j2d2n = BigInt("52")
		const WolfStakingRewardsaavquJn = await WolfStakingRewards.new(stringP7viO24, stringxh3lya6, uintX0j2d2n, {from: accounts[1]});
		const uinthdX6zmV = BigInt("1170")
		const uintYcZ481m = BigInt("134")
		const uintERkQNhz = BigInt("569")
		const stringQZlSuxj = await WolfStakingRewardsaavquJn.symbol.call({from: accounts[4]});
		const uint256KKvqlr2 = await WolfStakingRewardsaavquJn.lastTimeRewardApplicable.call(uinthdX6zmV, {from: accounts[2]});
		const uint256WAP9Pk7 = await WolfStakingRewardsaavquJn.rewardPerToken.call(uintYcZ481m, {from: accounts[2]});
		const uint256arrayjawa9Qb = await WolfStakingRewardsaavquJn.updateNotifyRewardAmount.call(uintERkQNhz, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSb9WAR0 = "Y"
		const stringPK9J7Vs = "yjsexyivl4NJaSBTvE46Qr186p9WTyqTEy2XzIPWAaF7mz5EPJlyP24s8okoG2EDEjloERKlP9tcKH6njE4jhG"
		const uintW5e5EsT = BigInt("32")
		const WolfStakingRewardsmNtpxA3 = await WolfStakingRewards.new(stringSb9WAR0, stringPK9J7Vs, uintW5e5EsT, {from: accounts[4]});
		const uintdcyF04n = BigInt("1469")
		const uintQ9CoQR = BigInt("1951")
		const uintIrfNjhO = BigInt("1102")
		const uint256a2rvVx4 = await WolfStakingRewardsmNtpxA3.stake.call(uintQ9CoQR, uintdcyF04n, {from: accounts[0]});
		const uint256arrayWUgiTKW = await WolfStakingRewardsmNtpxA3.updateNotifyRewardAmount.call(uintIrfNjhO, {from: accounts[5]});
		const stringZv5NQ6J = await WolfStakingRewardsmNtpxA3.symbol.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringDWfXFaL = "vhkPkmeDHzWi5fSuDhXst10WTAyYGLznFAHtSXCBbKSf6I"
		const stringLp2lN1Z = "xvCe61"
		const uintWwDvve1 = BigInt("14")
		const WolfStakingRewardskkJtMGp = await WolfStakingRewards.new(stringDWfXFaL, stringLp2lN1Z, uintWwDvve1, {from: accounts[5]});
		const uintTuPqQKK = BigInt("1099")
		const uintjBzFcaq = BigInt("612")
		const uintIcIepIv = BigInt("948")
		const uint256arrayp0c7iMg = await WolfStakingRewardskkJtMGp.updateNotifyRewardAmount.call(uintTuPqQKK, {from: accounts[0]});
		const stringq5BiCeN = await WolfStakingRewardskkJtMGp.symbol.call({from: accounts[2]});
		const uint256gc9nyWb = await WolfStakingRewardskkJtMGp.exit.call(uintjBzFcaq, {from: accounts[3]});
		const stringW30dLRU = await WolfStakingRewardskkJtMGp.symbol.call({from: accounts[0]});
		await WolfStakingRewardskkJtMGp.nonReentrant.call({from: accounts[0]});
		const uint256KRhsHmM = await WolfStakingRewardskkJtMGp.totalSupplyPerPool.call(uintIcIepIv, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringwDXMd8w = "VNBnI5yBoQaMXBVRLnV34R9mgHDIxNc7HKunVpG3lH3n6Iygc4LHSsAU38kyXtv9SkUOWN97wuIqPWH4"
		const stringRCnXYak = "qYsTVm"
		const uintABbBget = BigInt("193")
		const WolfStakingRewardsFSZ7xO4 = await WolfStakingRewards.new(stringwDXMd8w, stringRCnXYak, uintABbBget, {from: accounts[3]});
		const uintBP74BHB = BigInt("805")
		const uintMfjy3HQ = BigInt("1973")
		const uintUiSddPD = BigInt("296")
		const uintC1VXBzv = await WolfStakingRewardsFSZ7xO4.getReward.call(uintBP74BHB, {from: accounts[0]});
		const uint256R1DByre = await WolfStakingRewardsFSZ7xO4.withdraw.call(uintUiSddPD, uintMfjy3HQ, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringsKKuj6 = "Lx9iwQhCuN3sXJolRWwGYL"
		const stringIuNOZ9g = "Ajgag1YRAMeExsyDqdVZa9xiS64BhrpzIFooljueDReClDHKCIcHbWogNEA"
		const uintC5urxNp = BigInt("17")
		const WolfStakingRewardsJHzYL00 = await WolfStakingRewards.new(stringsKKuj6, stringIuNOZ9g, uintC5urxNp, {from: accounts[3]});
		const uint58df1x = BigInt("194")
		const uintJal1rPB = BigInt("1915")
		const uinttmE0NQv = BigInt("1544")
		const uintJTW8epg = BigInt("1756")
		const uintmk04VGR = BigInt("144")
		const uinta0urZbm = BigInt("230")
		const uintdYf8h4G = BigInt("930")
		const uint256kHBiQNP = await WolfStakingRewardsJHzYL00.rewardPerToken.call(uint58df1x, {from: accounts[2]});
		const uint256X4gWIsA = await WolfStakingRewardsJHzYL00.stake.call(uinttmE0NQv, uintJal1rPB, {from: accounts[4]});
		const uint256tlgxr24 = await WolfStakingRewardsJHzYL00.withdraw.call(uintmk04VGR, uintJTW8epg, {from: accounts[1]});
		const uint256TijkVOH = await WolfStakingRewardsJHzYL00.withdraw.call(uintdYf8h4G, uinta0urZbm, {from: accounts[3]});
		const stringed8L2h = await WolfStakingRewardsJHzYL00.symbol.call({from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYVJJwQ = "CNxaKcxIqLkWJkflSy5m5Lsoc6yinfzk1CbOLxwRqdbCHKnIFbN"
		const stringCHEevJs = "Fb6nITiBpkw82DX4vymAE8xij0fSTjUNfhMTzdVzNnQfQ42RZYMHMQMRFI1UoG1ujJQTfYzc"
		const uintUG1AjfX = BigInt("176")
		const WolfStakingRewardsWQh1NR = await WolfStakingRewards.new(stringYVJJwQ, stringCHEevJs, uintUG1AjfX, {from: "0x0000000000000000000000000000000000000001"});
		const uintdsELrYt = BigInt("1012")
		const addresssF81HCb = accounts[0]
		const uintaayuyfk = BigInt("1851")
		const uint256qlWrtFN = await WolfStakingRewardsWQh1NR.balanceOfPerPool.call(addresssF81HCb, uintdsELrYt, {from: accounts[1]});
		const uint256h4k4wP9 = await WolfStakingRewardsWQh1NR.lastTimeRewardApplicable.call(uintaayuyfk, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringHaLfCAK = "Gnk63nfPupqX"
		const stringP5V27mM = "gFHfNJb2BJY3HtE81"
		const uintaf4GWU7 = BigInt("171")
		const WolfStakingRewards7twQLa = await WolfStakingRewards.new(stringHaLfCAK, stringP5V27mM, uintaf4GWU7, {from: "0x0000000000000000000000000000000000000001"});
		const uintdf7dgYs = BigInt("1263")
		const addressHnfSuYY = accounts[4]
		const uintg4gEb37 = BigInt("2033")
		const uintHyZ9rOS = BigInt("759")
		const uintJo7ntFR = BigInt("1405")
		const addresssbHLyF1 = accounts[5]
		const uint256pT2vAYK = await WolfStakingRewards7twQLa.balanceOfPerPool.call(addressHnfSuYY, uintdf7dgYs, {from: accounts[4]});
		const uint256b3acrE0 = await WolfStakingRewards7twQLa.lastTimeRewardApplicable.call(uintg4gEb37, {from: "0x0000000000000000000000000000000000000001"});
		const stringHu91Z3V = await WolfStakingRewards7twQLa.symbol.call({from: accounts[5]});
		const uint256SCgCky7 = await WolfStakingRewards7twQLa.lastTimeRewardApplicable.call(uintHyZ9rOS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256V44peDW = await WolfStakingRewards7twQLa.balanceOfPerPool.call(addresssbHLyF1, uintJo7ntFR, {from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const string7rgkeK = "G7UYRlQndbCuGiP"
		const stringtSrdQ4T = "CVGSKbQInevOD6Kv39GJkvxprE"
		const uintjwJYagy = BigInt("190")
		const WolfStakingRewardsniakN3J = await WolfStakingRewards.new(string7rgkeK, stringtSrdQ4T, uintjwJYagy, {from: accounts[3]});
		const uintPHumDkS = BigInt("1520")
		const uintG8p6SDG = BigInt("121")
		const addresssv1O03U = "0x0000000000000000000000000000000000000001"
		const uintDeMjSX = BigInt("1606")
		const uint8JET8fwP = await WolfStakingRewardsniakN3J.decimals.call({from: accounts[2]});
		const uint256PkPyU5R = await WolfStakingRewardsniakN3J.exit.call(uintPHumDkS, {from: accounts[2]});
		const uint256gs4Vmzc = await WolfStakingRewardsniakN3J.earned.call(addresssv1O03U, uintG8p6SDG, {from: accounts[1]});
		const uintMwTpVJv = await WolfStakingRewardsniakN3J.getReward.call(uintDeMjSX, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringzr1gzh = "5M3Y2ho41BQuBspKJ7RAynG0i"
		const stringqfS8bcB = "sj72Awt6IcDEny2sKnCh0lt5KqjTzK2fcriVWHgszYRG2ohRqsl0xs6QaDzUvnqbs6zBRAnfMTnQWISGYOylJyne8H"
		const uintnsX93SQ = BigInt("164")
		const WolfStakingRewardsafkCcBY = await WolfStakingRewards.new(stringzr1gzh, stringqfS8bcB, uintnsX93SQ, {from: accounts[2]});
		const uintBv23vFS = BigInt("670")
		const uint9LkaRu = BigInt("845")
		const uintZBgMiQl = BigInt("1832")
		const uintRazFAW = BigInt("715")
		const uintYfC8mEN = BigInt("1654")
		const uint256nuOm6zB = await WolfStakingRewardsafkCcBY.totalSupplyPerPool.call(uintBv23vFS, {from: accounts[2]});
		const uint256zhyqkA = await WolfStakingRewardsafkCcBY.stake.call(uintZBgMiQl, uint9LkaRu, {from: accounts[3]});
		const uint256iJtMRmW = await WolfStakingRewardsafkCcBY.withdrawRemainingBalance.call(uintYfC8mEN, uintRazFAW, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTciofVJ = "bQiwVlRNukzQvcYjlOq4YPu2kw0av8SPHIM6Aiywq6LsAKLKDe014j8KTe"
		const stringq86331o = "QmSUC7Nkc3Imy6iA"
		const uintJgAaYYt = BigInt("202")
		const WolfStakingRewardscsb7c2Z = await WolfStakingRewards.new(stringTciofVJ, stringq86331o, uintJgAaYYt, {from: accounts[4]});
		const uintOiYJRe = BigInt("295")
		const addressJkUHKcS = accounts[0]
		const stringsWyd4p = await WolfStakingRewardscsb7c2Z.symbol.call({from: accounts[1]});
		const uint256R1bQSKQ = await WolfStakingRewardscsb7c2Z.earned.call(addressJkUHKcS, uintOiYJRe, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringPsP0hnl = "74Ei5wKP5uOgOePPwejjCHnsbEj2nyBZHhTMplYQpUm28kXOlMmCsGacK5DmBhmj0sA5UvV2SpYJyt3bXT"
		const stringQuNJg69 = "o6KeXeqT2jAy4S9"
		const uintlZelh7 = BigInt("47")
		const WolfStakingRewardsRa7fMDb = await WolfStakingRewards.new(stringPsP0hnl, stringQuNJg69, uintlZelh7, {from: accounts[2]});
		const uinteYHuKw2 = BigInt("394")
		await WolfStakingRewardsRa7fMDb.onlyOwner.call({from: accounts[0]});
		const uint85VXuNG = await WolfStakingRewardsRa7fMDb.decimals.call({from: accounts[1]});
		const uintDgzNwJu = await WolfStakingRewardsRa7fMDb.getReward.call(uinteYHuKw2, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringYKP4uD4 = "Jx"
		const stringQB8xFdF = "KPMYPHIP5dcgLVGPUQq7dqgK6b2XiTkPH4SGPHR9k6cwmze8eBvhIiw0khgTtLWksSI78WGyGlz01mR4iBorKGVRhMfB9swzR"
		const uintrmDxw6e = BigInt("35")
		const WolfStakingRewardsi65iS1y = await WolfStakingRewards.new(stringYKP4uD4, stringQB8xFdF, uintrmDxw6e, {from: accounts[2]});
		const uintXZQ6XJq = BigInt("1159")
		const uintyrKd0cm = BigInt("67")
		const uintzujxJ5 = BigInt("465")
		const uintgANt3cx = BigInt("1676")
		const uintJDAY7xI = BigInt("1997")
		const uintz7HYaJ5 = BigInt("388")
		const uint256BQ13551 = await WolfStakingRewardsi65iS1y.stake.call(uintyrKd0cm, uintXZQ6XJq, {from: accounts[0]});
		const uint256eVyAnGl = await WolfStakingRewardsi65iS1y.stake.call(uintgANt3cx, uintzujxJ5, {from: accounts[3]});
		const uint256pGPTh20 = await WolfStakingRewardsi65iS1y.rewardPerToken.call(uintJDAY7xI, {from: accounts[2]});
		await WolfStakingRewardsi65iS1y.nonReentrant.call({from: accounts[0]});
		const uintzmoVGM = await WolfStakingRewardsi65iS1y.getReward.call(uintz7HYaJ5, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringSlTKyr = "STeHfoGdW6bzY0Io1dmIWp1vjU8zIzrGjzsn46tNOV7NtHCTflB9ujf9gmshoA0xZOTMCLOTdzO"
		const stringRt6NBiU = "NTcA5evb835hVEiqTCrh2rlz8GYQm2WKIua0jjhr2lnI0pkrAq7o"
		const uintqLEnK9 = BigInt("211")
		const WolfStakingRewardsFgzrdI5 = await WolfStakingRewards.new(stringSlTKyr, stringRt6NBiU, uintqLEnK9, {from: accounts[4]});
		const uintXxAwEtL = BigInt("2017")
		const uint8tV7gB = BigInt("169")
		const uintD4VbDA = BigInt("1825")
		const uintlgHXI6s = BigInt("1254")
		await WolfStakingRewardsFgzrdI5.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256Yr8yZzw = await WolfStakingRewardsFgzrdI5.lastTimeRewardApplicable.call(uintXxAwEtL, {from: accounts[3]});
		const stringZkK0Yi3 = await WolfStakingRewardsFgzrdI5.symbol.call({from: accounts[1]});
		const uint256xMjHtuB = await WolfStakingRewardsFgzrdI5.getRewardForDuration.call(uint8tV7gB, {from: accounts[2]});
		const uint256neMUQE8 = await WolfStakingRewardsFgzrdI5.totalSupplyPerPool.call(uintD4VbDA, {from: "0x0000000000000000000000000000000000000001"});
		const uint256e2QQ6NI = await WolfStakingRewardsFgzrdI5.rewardPerToken.call(uintlgHXI6s, {from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const addressMJWc3bd = accounts[2]
		const addressjzevd3K = accounts[0]
		const addressA6T4DT3 = accounts[4]
		const WolfStakingRewardsZRcECn = await WolfStakingRewards.new(addressMJWc3bd, addressjzevd3K, addressA6T4DT3, {from: "0x0000000000000000000000000000000000000001"});
		const uinthXD65sN = BigInt("834")
		const uintcr8K3Kz = BigInt("1323")
		const uintEmxkeH = BigInt("1710")
		const addressErqNqQ = accounts[5]
		const uintgufuakl = BigInt("1802")
		const uint2567Mi7G2 = await WolfStakingRewardsZRcECn.stake.call(uintcr8K3Kz, uinthXD65sN, {from: accounts[4]});
		const uint256eCwpdig = await WolfStakingRewardsZRcECn.earned.call(addressErqNqQ, uintEmxkeH, {from: accounts[2]});
		await WolfStakingRewardsZRcECn.nonReentrant.call({from: accounts[2]});
		const uint256RUmWkF = await WolfStakingRewardsZRcECn.rewardPerToken.call(uintgufuakl, {from: accounts[2]});
		await WolfStakingRewardsZRcECn.nonReentrant.call({from: accounts[2]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringWaWK5yK = "KhUum4ghoFEARPOAk4RJ9zd1iU1HTIt2m9HmhLqBqCLuvxLsbtEiog4BHNwxLnKzrxz8YOVJoAp"
		const stringgwo3Uqj = "XDixHyijzkV7cK1kjqhxPqm3LrE5NDOJ0wy4opluYnssfywwSWeH"
		const uintM2HMUN0 = BigInt("39")
		const WolfStakingRewardsCe7CMgR = await WolfStakingRewards.new(stringWaWK5yK, stringgwo3Uqj, uintM2HMUN0, {from: accounts[0]});
		const uintNPIM1h = BigInt("1197")
		const addressVIOmWr = accounts[0]
		const uintetJYbhr = BigInt("483")
		const uintJRqQsS8 = BigInt("1433")
		const uint8kzMtDmI = await WolfStakingRewardsCe7CMgR.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256FXJogy2 = await WolfStakingRewardsCe7CMgR.earned.call(addressVIOmWr, uintNPIM1h, {from: accounts[0]});
		const uint256LI8qrgv = await WolfStakingRewardsCe7CMgR.stake.call(uintJRqQsS8, uintetJYbhr, {from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringmj3R9w = "5zpMQXZ3RQQpaq5AoVLl3UFlgA2"
		const stringjq5k5y8 = "jL3ba7"
		const uinteMTaAsH = BigInt("214")
		const WolfStakingRewardsARZELGg = await WolfStakingRewards.new(stringmj3R9w, stringjq5k5y8, uinteMTaAsH, {from: accounts[3]});
		const uintS7THvKM = BigInt("274")
		const uintXKCLKSV = await WolfStakingRewardsARZELGg.getReward.call(uintS7THvKM, {from: accounts[1]});
		await WolfStakingRewardsARZELGg.onlyOwner.call({from: accounts[0]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringFqyrXtS = "h4xBuQYTGCMQDaCwsVGG7Hbyj4p76vXQPbfby2APtNl65iuSdApQRH4w4YdvWsdHqcBeumsevYF3Xd0ZHEGvCn9U"
		const stringCyNFTYn = "eIk1ocmx050F8RFnN3RdeKAW6U5WYT3SozIDiZh7jWtIFYIV9dti46oftwRNk3vUPVP7iRYl9RIXYzo"
		const uintRMKvoMO = BigInt("167")
		const WolfStakingRewardswS4unDV = await WolfStakingRewards.new(stringFqyrXtS, stringCyNFTYn, uintRMKvoMO, {from: accounts[0]});
		const uintLjWZcZ8 = BigInt("1574")
		const uintnIZ2apR = BigInt("893")
		const uintb4I767 = BigInt("919")
		const addressllj9azi = accounts[3]
		const uintsRxDEwR = BigInt("1818")
		const addressygJhSnp = accounts[2]
		const uintA8Nzn36 = BigInt("621")
		const uint256MKdRT9w = await WolfStakingRewardswS4unDV.withdraw.call(uintnIZ2apR, uintLjWZcZ8, {from: accounts[1]});
		const uint256pW7VN1D = await WolfStakingRewardswS4unDV.balanceOfPerPool.call(addressllj9azi, uintb4I767, {from: accounts[4]});
		const addressI7P7GyE = await WolfStakingRewardswS4unDV.updateReward.call(addressygJhSnp, uintsRxDEwR, {from: accounts[1]});
		const uint256arrayWzJXK60 = await WolfStakingRewardswS4unDV.updateNotifyRewardAmount.call(uintA8Nzn36, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringCX5t7bo = "WVi3lJnUaxWhxUb1L8TfawdkxFGVPGfJVEH9wCIfjRYDPwiYXIs1x9Dd692rjwV6m8kU9VOTE7kF9mVDq"
		const stringxlix02y = "w43gfiLwSWZYcKevQqWB4DX"
		const uintngzq6At = BigInt("216")
		const WolfStakingRewardswpuAHN7 = await WolfStakingRewards.new(stringCX5t7bo, stringxlix02y, uintngzq6At, {from: accounts[3]});
		const uintot8VOX = BigInt("483")
		const uintb1QLRBd = BigInt("1710")
		const uintijSkUIA = BigInt("549")
		const uintP5C5HS = BigInt("1582")
		await WolfStakingRewardswpuAHN7.onlyOwner.call({from: accounts[0]});
		const uint256M5Sh1qF = await WolfStakingRewardswpuAHN7.lastTimeRewardApplicable.call(uintot8VOX, {from: accounts[4]});
		const uint256reZ7wkC = await WolfStakingRewardswpuAHN7.totalSupplyPerPool.call(uintb1QLRBd, {from: accounts[2]});
		const uintjDEEoRm = await WolfStakingRewardswpuAHN7.getReward.call(uintijSkUIA, {from: accounts[4]});
		const uint256arrayzlwjtW9 = await WolfStakingRewardswpuAHN7.updateNotifyRewardAmount.call(uintP5C5HS, {from: accounts[4]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringjNp1eWS = "tuKPYcZC1LrGWIcl0xTf9Iu6rSDdL8fFfUEfLhWNXhdfjAZ6zJ7mdFCAXQySIMj9"
		const stringF7jrxAq = "oZIXqNIHzCMb6fRgetmkaGTfudeUjLvxdN"
		const uint27YDj0 = BigInt("159")
		const WolfStakingRewardsBlHXhru = await WolfStakingRewards.new(stringjNp1eWS, stringF7jrxAq, uint27YDj0, {from: accounts[5]});
		const uintmz8nCZm = BigInt("1514")
		const uintDQnyc2j = BigInt("2032")
		const uintOhpSqT0 = BigInt("383")
		const uintfjWqIsb = BigInt("1151")
		const uint256arrayNbWJuOq = await WolfStakingRewardsBlHXhru.updateNotifyRewardAmount.call(uintmz8nCZm, {from: accounts[4]});
		const uint256DW2QJpb = await WolfStakingRewardsBlHXhru.exit.call(uintDQnyc2j, {from: accounts[2]});
		const uint256nOV1d1C = await WolfStakingRewardsBlHXhru.stake.call(uintfjWqIsb, uintOhpSqT0, {from: accounts[1]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringUI3Wcua = "lgnLBosASxkd8Zj3HYELVWdabRFxMllCKshRKBsrUuElmfJ8ZzzQ5RyaAu8A8ANMaH9dPtQN9T"
		const stringsoGN1Xh = "J1vN5w3MFhEje4XyigtvAS"
		const uintmqTxrSV = BigInt("180")
		const WolfStakingRewardszi7ZTkW = await WolfStakingRewards.new(stringUI3Wcua, stringsoGN1Xh, uintmqTxrSV, {from: accounts[1]});
		await WolfStakingRewardszi7ZTkW.onlyRewardsDistribution.call({from: accounts[4]});
		await WolfStakingRewardszi7ZTkW.nonReentrant.call({from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringTOHF02 = "I9W0"
		const stringqwiIIbh = "KtV8UX"
		const uintQ02RVSh = BigInt("162")
		const WolfStakingRewardsY3R241 = await WolfStakingRewards.new(stringTOHF02, stringqwiIIbh, uintQ02RVSh, {from: accounts[0]});
		const uintRR6jfa9 = BigInt("345")
		const uintZFy46i = BigInt("1796")
		const uint256COBcFah = await WolfStakingRewardsY3R241.withdraw.call(uintZFy46i, uintRR6jfa9, {from: accounts[3]});
		await WolfStakingRewardsY3R241.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringqQf9kjt = "QgXUoivtdIFQvBOhsnwIlGPCzBQwUH9M35P5LDyun2PcbpxMkJJskJPT"
		const stringiucNI1n = "WqDBqvLTfXZdfKGAFlOiu9BXYJs8fa6hIEUn9MTlRRLsQTRxW0z2Tsnmd1vuMro6U2M"
		const uinteG4xacG = BigInt("24")
		const WolfStakingRewardsztbYnA = await WolfStakingRewards.new(stringqQf9kjt, stringiucNI1n, uinteG4xacG, {from: accounts[5]});
		const uintZDh9KJ4 = BigInt("40")
		const uintyz3eRZg = BigInt("435")
		const uintdOHcp9n = BigInt("1195")
		const uintJzeplK5 = BigInt("918")
		const uint256LVYrLAi = await WolfStakingRewardsztbYnA.rewardPerToken.call(uintZDh9KJ4, {from: accounts[1]});
		const uint256QCvfyIr = await WolfStakingRewardsztbYnA.totalSupplyPerPool.call(uintyz3eRZg, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PYv06o8 = await WolfStakingRewardsztbYnA.withdraw.call(uintJzeplK5, uintdOHcp9n, {from: accounts[3]});
	});

	it('test for WolfStakingRewards', async () => {
		const stringVXSDd5h = "GPVHXfM"
		const stringmfK8hGy = "tlv7X9lsFVdvY6fhydMUwCmPbzZLgWFjJTmsPiJy7iRAplHfg89zKzQKGWKvlV6UU6FCOoPkbpkkjn1qavR"
		const uintq1AWc4l = BigInt("153")
		const WolfStakingRewardsRgZgAdt = await WolfStakingRewards.new(stringVXSDd5h, stringmfK8hGy, uintq1AWc4l, {from: accounts[0]});
		const uintQ52jRBT = BigInt("982")
		const uintFbA1M1X = BigInt("977")
		const addressBJ12HDr = accounts[4]
		const uintAWWuaMY = BigInt("307")
		const uintrNM6Q57 = await WolfStakingRewardsRgZgAdt.getReward.call(uintQ52jRBT, {from: accounts[4]});
		const uint256y4cEwzu = await WolfStakingRewardsRgZgAdt.balanceOfPerPool.call(addressBJ12HDr, uintFbA1M1X, {from: accounts[1]});
		const uintRFPtPA = await WolfStakingRewardsRgZgAdt.getReward.call(uintAWWuaMY, {from: accounts[4]});
		await WolfStakingRewardsRgZgAdt.nonReentrant.call({from: accounts[4]});
	});
})