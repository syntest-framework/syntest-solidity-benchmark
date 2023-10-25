const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const stringBwPJtks = "wv2FTQdvxHc58zBL5P2Jr5kUd1ACfhHIdJE1duJoKg2Vym3dv1avtWfMnF4BedJIMijfpEIOYdYwRccsMomAJybJ6T"
		const stringYRAt9x1 = "iblGh5oFLg0bANc0WQzGXGTejyzTq6boheJCCHyIDD5cdYqHHVkV5hfNPQkNDeE22jo7sYo0ujV322H"
		const uintob5n5VS = BigInt("34")
		const BACMARSLPTOKENPoolMk5CrB = await BACMARSLPTOKENPool.new(stringBwPJtks, stringYRAt9x1, uintob5n5VS, {from: "0x0000000000000000000000000000000000000001"});
		const uintQOv8gTi = BigInt("2025")
		const uint256dX4q4i3 = await BACMARSLPTOKENPoolMk5CrB.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256Es2mM92 = await BACMARSLPTOKENPoolMk5CrB.notifyRewardAmount.call(uintQOv8gTi, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringq50s6lY = "1bRIScHlhUC5dYAQOzymQNiq9C"
		const stringJ9jFt0a = "NJtGjsTTf8bY6JbfhEsvGYRwIY8alDF1BuRddy2lJRXBkkP18"
		const uintLZGQ2U2 = BigInt("168")
		const BACMARSLPTOKENPoolSb1pSYK = await BACMARSLPTOKENPool.new(stringq50s6lY, stringJ9jFt0a, uintLZGQ2U2, {from: accounts[2]});
		const uintlThB6Ts = BigInt("1815")
		const uintpGALWoy = BigInt("1135")
		const uint256Rj1p61s = await BACMARSLPTOKENPoolSb1pSYK.withdraw.call(uintlThB6Ts, {from: accounts[0]});
		const uint256cDnJkzJ = await BACMARSLPTOKENPoolSb1pSYK.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256dOjaaWm = await BACMARSLPTOKENPoolSb1pSYK.withdraw.call(uintpGALWoy, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressGbjmzkn = accounts[0]
		const addressThgNIth = accounts[3]
		const addressVcl6fTi = accounts[0]
		const BACMARSLPTOKENPoolItV85o = await BACMARSLPTOKENPool.new(addressGbjmzkn, addressThgNIth, addressVcl6fTi, {from: accounts[5]});
		const uintvPVWjx = BigInt("430")
		const addressgX1N6JV = accounts[4]
		const uintMpPS1uQ = BigInt("1653")
//		await BACMARSLPTOKENPoolItV85o.nonReentrant.call({from: accounts[5]});
//		const uint256stuABG9 = await BACMARSLPTOKENPoolItV85o.withdraw.call(uintvPVWjx, {from: accounts[5]});
//		const uint256rlEKTga = await BACMARSLPTOKENPoolItV85o.earned.call(addressgX1N6JV, {from: accounts[4]});
//		const uint256wWGt6o9 = await BACMARSLPTOKENPoolItV85o.withdraw.call(uintMpPS1uQ, {from: accounts[2]});

		await expect(BACMARSLPTOKENPoolItV85o.nonReentrant.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLiYQwd5 = "28uV9ExnSSi56YietEanYFFCnAzhxtJDhTOyrXHTGyOFrYTmTMJyJaZHvu6jKWVLooQx"
		const stringm4VhCUa = "1jqQaNlwQjwW9pbsg3Fiq5at2dHlh4G63yOEDYuLwnWbg58EXfg5q4r7MN4vBdfIcOKtLBOh2s5H"
		const uintD3pWgSY = BigInt("2")
		const BACMARSLPTOKENPoolrDESLLH = await BACMARSLPTOKENPool.new(stringLiYQwd5, stringm4VhCUa, uintD3pWgSY, {from: accounts[3]});
		const stringTpE5Sa = await BACMARSLPTOKENPoolrDESLLH.symbol.call({from: accounts[4]});
		const uint8jvTxOCY = await BACMARSLPTOKENPoolrDESLLH.decimals.call({from: accounts[0]});
		await BACMARSLPTOKENPoolrDESLLH.getReward.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWiRYyfu = "4KsgX8YUpdCmVE5nF"
		const stringcHLa4p7 = "Mred5rS3guUGjdbAZxpHFNaHEAeVeWQ5xazJ1bc305baE6A69JLjIVtXgm"
		const uintLBgvl9r = BigInt("167")
		const BACMARSLPTOKENPoolKvidhoM = await BACMARSLPTOKENPool.new(stringWiRYyfu, stringcHLa4p7, uintLBgvl9r, {from: accounts[0]});
		const bytefWylUb = "0x0215040812081713170c161e080804161608191d0e181915111c0d1c171a0607"
		const byteZrolAKc = "0x0a0410171d120e18040e011e09090f0e16040b1b1a19101403141503081e090e"
		const uintphd5S5 = BigInt("84")
		const uintXk0O4Od = BigInt("1469")
		const uintZQNpf1R = BigInt("92")
		const uintNZDtRjo = BigInt("717")
		await BACMARSLPTOKENPoolKvidhoM.exit.call({from: accounts[1]});
		const uint256L3wiqa6 = await BACMARSLPTOKENPoolKvidhoM.stakeWithPermit.call(uintZQNpf1R, uintXk0O4Od, uintphd5S5, byteZrolAKc, bytefWylUb, {from: accounts[3]});
		await BACMARSLPTOKENPoolKvidhoM.onlyRewardsDistribution.call({from: accounts[0]});
		await BACMARSLPTOKENPoolKvidhoM.exit.call({from: accounts[3]});
		const uint256v594S9z = await BACMARSLPTOKENPoolKvidhoM.withdraw.call(uintNZDtRjo, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringt2VeGbB = "56spmuy5QZpKvcT28ITrwYNgAWpmfLhYxiKxi7ip3yHYo"
		const stringYSjSVSR = "gIxzs8iLDGJFBrz6Hj7gY9tFfI21TizjnEmkLfzoT86js2FCry7QxmD4TqdT4qsxLw9QpzudDkUv"
		const uintKyFfRjN = BigInt("66")
		const BACMARSLPTOKENPoolaTU6qWa = await BACMARSLPTOKENPool.new(stringt2VeGbB, stringYSjSVSR, uintKyFfRjN, {from: accounts[2]});
		const addressYOBDgfJ = accounts[5]
		const uint256O0KTJJf = await BACMARSLPTOKENPoolaTU6qWa.balanceOf.call(addressYOBDgfJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256agqTwIw = await BACMARSLPTOKENPoolaTU6qWa.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256q08DDGe = await BACMARSLPTOKENPoolaTU6qWa.getRewardForDuration.call({from: accounts[1]});
		const uint256gWWNgbd = await BACMARSLPTOKENPoolaTU6qWa.getRewardForDuration.call({from: accounts[4]});
		const stringsmGTCMk = await BACMARSLPTOKENPoolaTU6qWa.symbol.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQdIDqaj = "piTh8HD1Knqw9X5HjRFeGWRia1mmILSYnWGPMrfWAXs4wdF6kTrubXvBHypFd7yl67K8D3pl7BRhx9QavSFm8FDpck"
		const stringWUUsrO3 = "mhS2PiNMpGyNhg3c9afboDa28yx0PI2ED3AYs2FDi9QuWhyFTTZkAJi5Fsx7HiUvmpX1QG6IEdEsxBBnKFgEyGeep0C1D8"
		const uintWzsp6dJ = BigInt("170")
		const BACMARSLPTOKENPool0CQdYl = await BACMARSLPTOKENPool.new(stringQdIDqaj, stringWUUsrO3, uintWzsp6dJ, {from: accounts[3]});
		const byteq25dSp = "0x190e0d1506111816060f06081500070a110a06080c01071d070c0a0005191e07"
		const byte2IdEbE = "0x1118051f121f0d0e1119101117041b060f1112050e060b1c091217130c031d1b"
		const uinteGZMd4a = BigInt("42")
		const uinti1T6jnZ = BigInt("1876")
		const uintoRRZktm = BigInt("520")
		await BACMARSLPTOKENPool0CQdYl.exit.call({from: accounts[2]});
		const uint256TyFsiPl = await BACMARSLPTOKENPool0CQdYl.stakeWithPermit.call(uintoRRZktm, uinti1T6jnZ, uinteGZMd4a, byte2IdEbE, byteq25dSp, {from: accounts[3]});
		await BACMARSLPTOKENPool0CQdYl.nonReentrant.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYxiiW0k = "Odry7KaBjK"
		const stringPIw5mTo = "MPbxXRUpwKq2WMbTbrUbXf1i5gxXuE3X4S35bnFW2cbQFJkQC4bsVUSe7yvF0sGup3anQxcMBXKDwMHYnat2Ld0MypqWuyorGS"
		const uintOzRNGV = BigInt("139")
		const BACMARSLPTOKENPoolSu2SNXM = await BACMARSLPTOKENPool.new(stringYxiiW0k, stringPIw5mTo, uintOzRNGV, {from: accounts[5]});
		const uintcyBDFd9 = BigInt("1538")
		const bytewk7qRee = "0x20091e1b160f18081d1b16130306020a000120001e051d010c07171b140d1c0a"
		const bytem7pzk7A = "0x0e090d06010c1e1f1e101812191c120f01071a170c1f1916150f070f1a021404"
		const uintqFQ6hFF = BigInt("17")
		const uintgz91iCO = BigInt("1135")
		const uintTlvwBgb = BigInt("189")
		await BACMARSLPTOKENPoolSu2SNXM.exit.call({from: accounts[2]});
		await BACMARSLPTOKENPoolSu2SNXM.getReward.call({from: accounts[1]});
		const uint256Jq4Y67y = await BACMARSLPTOKENPoolSu2SNXM.stake.call(uintcyBDFd9, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mQJ14PM = await BACMARSLPTOKENPoolSu2SNXM.stakeWithPermit.call(uintTlvwBgb, uintgz91iCO, uintqFQ6hFF, bytem7pzk7A, bytewk7qRee, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXbhW7OK = "nQFeEusAqQVvommEauWv539CWMg7VL33RtunvWhonaQAsdBPxbvtSVJLeEbIhvq1DWYcVRT0lK4kAz1ydOBwX"
		const stringbTBoH5q = "i9fjxu0XecPwBvqy"
		const uintamXe2K1 = BigInt("97")
		const BACMARSLPTOKENPoolLAnG6ja = await BACMARSLPTOKENPool.new(stringXbhW7OK, stringbTBoH5q, uintamXe2K1, {from: accounts[0]});
		const uintI9CPYNm = BigInt("656")
		const uintTgRvU46 = BigInt("480")
		const uintqkcQ86H = BigInt("736")
		const uint256tAZ91yU = await BACMARSLPTOKENPoolLAnG6ja.stake.call(uintI9CPYNm, {from: accounts[5]});
		const uint256iYpJr6i = await BACMARSLPTOKENPoolLAnG6ja.rewardPerToken.call({from: accounts[0]});
		const uint8hghTBGh = await BACMARSLPTOKENPoolLAnG6ja.decimals.call({from: accounts[4]});
		const uint256gsLvQ7k = await BACMARSLPTOKENPoolLAnG6ja.rewardPerToken.call({from: accounts[4]});
		const uint256T9Ofl8Q = await BACMARSLPTOKENPoolLAnG6ja.withdraw.call(uintTgRvU46, {from: accounts[1]});
		const uint256ztJDZ0 = await BACMARSLPTOKENPoolLAnG6ja.withdraw.call(uintqkcQ86H, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressPkmibDF = accounts[3]
		const addressljYlfEv = accounts[1]
		const addressBcALsPF = accounts[0]
		const BACMARSLPTOKENPoolxuUuNiD = await BACMARSLPTOKENPool.new(addressPkmibDF, addressljYlfEv, addressBcALsPF, {from: accounts[1]});
		const uintgCell9 = BigInt("139")
		const uinttPb6wpf = BigInt("1523")
//		const uint256igDNowt = await BACMARSLPTOKENPoolxuUuNiD.stake.call(uintgCell9, {from: accounts[5]});
//		const uint256GkaQ1Ac = await BACMARSLPTOKENPoolxuUuNiD.stake.call(uinttPb6wpf, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolxuUuNiD.stake.call(uintgCell9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressIFlhAh6 = accounts[4]
		const addressI8W1Jf = accounts[4]
		const addressV6JuXI9 = accounts[4]
		const BACMARSLPTOKENPool7slGGA = await BACMARSLPTOKENPool.new(addressIFlhAh6, addressI8W1Jf, addressV6JuXI9, {from: accounts[1]});
		const addressLiuRbHI = accounts[4]
		const uint256eMJCMyM = await BACMARSLPTOKENPool7slGGA.balanceOf.call(addressLiuRbHI, {from: accounts[4]});
//		const uint8spevsrC = await BACMARSLPTOKENPool7slGGA.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256FmwdpCu = await BACMARSLPTOKENPool7slGGA.getRewardForDuration.call({from: accounts[3]});

		assert.equal(uint256eMJCMyM, BigInt("0"))
		await expect(BACMARSLPTOKENPool7slGGA.decimals.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVEKPsvp = "tLBHi1tawOrbdcBCd9ZeW4KntBbOk5GqRzUx"
		const stringISgFT8z = "HN6Uit9QLBhw1lU76OfvZ1zYxazwegWg0J2IIMQiZzfPGSFzCXspRcsImlJ6TCwWcWBhgPft59t"
		const uintoYHc7jG = BigInt("98")
		const BACMARSLPTOKENPoolI9ZSjH = await BACMARSLPTOKENPool.new(stringVEKPsvp, stringISgFT8z, uintoYHc7jG, {from: accounts[4]});
		const addressQvraOq0 = accounts[4]
		const uintPWICe6P = BigInt("1729")
		await BACMARSLPTOKENPoolI9ZSjH.getReward.call({from: accounts[2]});
		const uint256pOfrMfC = await BACMARSLPTOKENPoolI9ZSjH.balanceOf.call(addressQvraOq0, {from: accounts[0]});
		const uint256gc4hGxi = await BACMARSLPTOKENPoolI9ZSjH.getRewardForDuration.call({from: accounts[1]});
		const uint256yRfspSB = await BACMARSLPTOKENPoolI9ZSjH.notifyRewardAmount.call(uintPWICe6P, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressWUsgUJ = accounts[3]
		const addressjyRWjO7 = accounts[1]
		const addressbPPXOQc = accounts[0]
		const BACMARSLPTOKENPoolxuUuNiD = await BACMARSLPTOKENPool.new(addressWUsgUJ, addressjyRWjO7, addressbPPXOQc, {from: accounts[1]});
		const uintmV7NcSM = BigInt("1538")
		const uint256eQ3vIv = await BACMARSLPTOKENPoolxuUuNiD.getRewardForDuration.call({from: accounts[0]});
//		const uint256GkaQ1Ac = await BACMARSLPTOKENPoolxuUuNiD.stake.call(uintmV7NcSM, {from: accounts[1]});

		assert.equal(uint256eQ3vIv, BigInt("0"))
		await expect(BACMARSLPTOKENPoolxuUuNiD.stake.call(uintmV7NcSM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresstok6LP = accounts[2]
		const addressQgXLCO = accounts[4]
		const addressgp931d = accounts[3]
		const BACMARSLPTOKENPoolwzA68hy = await BACMARSLPTOKENPool.new(addresstok6LP, addressQgXLCO, addressgp931d, {from: "0x0000000000000000000000000000000000000001"});
		const addresswSwJbKd = accounts[2]
		const uint256StFL862 = await BACMARSLPTOKENPoolwzA68hy.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolwzA68hy.nonReentrant.call({from: accounts[4]});
		await BACMARSLPTOKENPoolwzA68hy.getReward.call({from: accounts[4]});
		const addressXN0hAHb = await BACMARSLPTOKENPoolwzA68hy.updateReward.call(addresswSwJbKd, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressRrBqO9u = accounts[3]
		const addressJat8hz = accounts[1]
		const addressPAOzpkK = accounts[0]
		const BACMARSLPTOKENPoolxuUuNiD = await BACMARSLPTOKENPool.new(addressRrBqO9u, addressJat8hz, addressPAOzpkK, {from: accounts[1]});
		const addresscltRQIB = accounts[0]
		const uintGpnRmmO = BigInt("1666")
		const uintsMTHOvw = BigInt("1533")
		const uint256XjOYzpq = await BACMARSLPTOKENPoolxuUuNiD.earned.call(addresscltRQIB, {from: accounts[0]});
//		const uint256XRUMMgE = await BACMARSLPTOKENPoolxuUuNiD.notifyRewardAmount.call(uintGpnRmmO, {from: accounts[3]});
//		const uint256GkaQ1Ac = await BACMARSLPTOKENPoolxuUuNiD.stake.call(uintsMTHOvw, {from: accounts[1]});

		assert.equal(uint256XjOYzpq, BigInt("0"))
		await expect(BACMARSLPTOKENPoolxuUuNiD.notifyRewardAmount.call(uintGpnRmmO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressDJELh2 = accounts[3]
		const addressRVaqrph = accounts[1]
		const addressI42E7q9 = accounts[0]
		const BACMARSLPTOKENPoolxuUuNiD = await BACMARSLPTOKENPool.new(addressDJELh2, addressRVaqrph, addressI42E7q9, {from: accounts[1]});
		const uintKVXlEPl = BigInt("1715")
		const uintpPgY0o2 = BigInt("1468")
//		const uint256bicBEnm = await BACMARSLPTOKENPoolxuUuNiD.withdraw.call(uintKVXlEPl, {from: accounts[3]});
//		const uint256GkaQ1Ac = await BACMARSLPTOKENPoolxuUuNiD.stake.call(uintpPgY0o2, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolxuUuNiD.withdraw.call(uintKVXlEPl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKXqd0R3 = accounts[3]
		const addressttAtfKN = accounts[1]
		const addressPyfFTI2 = accounts[0]
		const BACMARSLPTOKENPoolxuUuNiD = await BACMARSLPTOKENPool.new(addressKXqd0R3, addressttAtfKN, addressPyfFTI2, {from: accounts[1]});
		const uintkpFoWnI = BigInt("1511")
//		await BACMARSLPTOKENPoolxuUuNiD.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256GkaQ1Ac = await BACMARSLPTOKENPoolxuUuNiD.stake.call(uintkpFoWnI, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolxuUuNiD.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringb9osa2 = "EbP8qvVMvIzwKpWX7DiiZ1FiiEu1UowUiRz9r1fVOuprHopsFFCdM3UUBnkT9f8gCeYq3rKdoYbE2"
		const stringi5UeKs = "a5a8cpYVF485tqXv731YHYUROmDc4UzpQYyYbdFCPPIL6iIcC"
		const uintpOgn0jv = BigInt("210")
		const BACMARSLPTOKENPool8PVd4i = await BACMARSLPTOKENPool.new(stringb9osa2, stringi5UeKs, uintpOgn0jv, {from: accounts[4]});
		const addressPk11NIq = accounts[4]
		const uintqMRnHM = BigInt("585")
		const addressymzJinF = await BACMARSLPTOKENPool8PVd4i.updateReward.call(addressPk11NIq, {from: accounts[1]});
		const uint256erC3bT = await BACMARSLPTOKENPool8PVd4i.notifyRewardAmount.call(uintqMRnHM, {from: accounts[3]});
		const uint256pCFaioj = await BACMARSLPTOKENPool8PVd4i.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressh5WWYEZ = accounts[3]
		const addressHswTrz = accounts[1]
		const addressdMHla4Q = accounts[0]
		const BACMARSLPTOKENPoolxuUuNiD = await BACMARSLPTOKENPool.new(addressh5WWYEZ, addressHswTrz, addressdMHla4Q, {from: accounts[1]});
		const addressqang9m = accounts[1]
		const uintHYwZH3P = BigInt("1183")
		const uint256jVRJok = await BACMARSLPTOKENPoolxuUuNiD.balanceOf.call(addressqang9m, {from: accounts[2]});
//		await BACMARSLPTOKENPoolxuUuNiD.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256FcXjZgB = await BACMARSLPTOKENPoolxuUuNiD.notifyRewardAmount.call(uintHYwZH3P, {from: accounts[0]});
//		await BACMARSLPTOKENPoolxuUuNiD.onlyRewardsDistribution.call({from: accounts[0]});

		assert.equal(uint256jVRJok, BigInt("0"))
		await expect(BACMARSLPTOKENPoolxuUuNiD.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressTEeLFp = accounts[1]
		const addressbpl8zl9 = accounts[2]
		const addressRySAW9P = accounts[4]
		const BACMARSLPTOKENPoolQq1WFBu = await BACMARSLPTOKENPool.new(addressTEeLFp, addressbpl8zl9, addressRySAW9P, {from: accounts[2]});
		const uintZYZASK = BigInt("605")
		const uint256lRpgiEX = await BACMARSLPTOKENPoolQq1WFBu.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256DovOOdA = await BACMARSLPTOKENPoolQq1WFBu.withdraw.call(uintZYZASK, {from: accounts[5]});
//		const stringrausF1 = await BACMARSLPTOKENPoolQq1WFBu.symbol.call({from: accounts[0]});

		assert.equal(uint256lRpgiEX, BigInt("0"))
		await expect(BACMARSLPTOKENPoolQq1WFBu.withdraw.call(uintZYZASK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVSyuJ4b = "KUcDe7PNsS7EKsOBYnWjZk3TpkLby5HirJxsUihL6V18eYKCBdrpkCL34Eu"
		const stringjm7fL26 = "b9fC65RG9xxFvrXztlFlnF8MOXSaXb3518Z4wu5jiyjjuzkdaAEhiVNeGSS5R3rwVQL8912"
		const uintIsHeoQ6 = BigInt("51")
		const BACMARSLPTOKENPoolPBfYT8O = await BACMARSLPTOKENPool.new(stringVSyuJ4b, stringjm7fL26, uintIsHeoQ6, {from: accounts[0]});
		const byteGbNPyov = "0x110e0a0309200419081c131215020a091f01011e081f1a1e070e030f0d130119"
		const byteW4EQKJ2 = "0x1e0914120909151118061f1314180e0f0a02111b0e1f0d0e0301140d15111005"
		const uintoWKYBO6 = BigInt("90")
		const uintr57HPOi = BigInt("1489")
		const uintpa4cDd = BigInt("1529")
		const uintexYXiV4 = BigInt("318")
		await BACMARSLPTOKENPoolPBfYT8O.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256tEawW9 = await BACMARSLPTOKENPoolPBfYT8O.stakeWithPermit.call(uintpa4cDd, uintr57HPOi, uintoWKYBO6, byteW4EQKJ2, byteGbNPyov, {from: accounts[3]});
		const uint256ciq8RH = await BACMARSLPTOKENPoolPBfYT8O.stake.call(uintexYXiV4, {from: accounts[0]});
		const uint256VGCZvp3 = await BACMARSLPTOKENPoolPBfYT8O.totalSupply.call({from: accounts[0]});
		const uint256mVv5gUc = await BACMARSLPTOKENPoolPBfYT8O.getRewardForDuration.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressJ2zZL3S = accounts[3]
		const addressWTeGkhb = accounts[1]
		const addressbybu7i = accounts[0]
		const BACMARSLPTOKENPoolxuUuNiD = await BACMARSLPTOKENPool.new(addressJ2zZL3S, addressWTeGkhb, addressbybu7i, {from: accounts[1]});
		const uintGV7tf5 = BigInt("1021")
		const uint256yCiGsJ3 = await BACMARSLPTOKENPoolxuUuNiD.totalSupply.call({from: accounts[2]});
//		const stringmYc7WZb = await BACMARSLPTOKENPoolxuUuNiD.symbol.call({from: accounts[0]});
//		const uint256GkaQ1Ac = await BACMARSLPTOKENPoolxuUuNiD.stake.call(uintGV7tf5, {from: accounts[1]});

		assert.equal(uint256yCiGsJ3, BigInt("0"))
		await expect(BACMARSLPTOKENPoolxuUuNiD.symbol.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const strings4fgfJD = "mQuor0W1dHGa4pHLymxfBG7T9D1P9Mn6EObfMvo5A19KYIcp6s"
		const stringdXVAPQd = "DmtBybvPQHs6u1cQOHo5Z"
		const uintvH7LtvQ = BigInt("136")
		const BACMARSLPTOKENPooldtyw9eF = await BACMARSLPTOKENPool.new(strings4fgfJD, stringdXVAPQd, uintvH7LtvQ, {from: accounts[1]});
		const byteLnESkb = "0x1c0e09151f0b0b12111d07180003050c1b1a0d0f07060c0108101c131a0b1b1f"
		const byteuIaEEM5 = "0x1a0d15021213051904151d1c1a0a1412150f11031f0a1f0009180805171d0620"
		const uintiZFVqCG = BigInt("174")
		const uintwUuHkQ = BigInt("602")
		const uintnEmfZfE = BigInt("272")
		const uintkpD9DGP = BigInt("1101")
		await BACMARSLPTOKENPooldtyw9eF.exit.call({from: accounts[5]});
		const uint256aG8TMB = await BACMARSLPTOKENPooldtyw9eF.stakeWithPermit.call(uintnEmfZfE, uintwUuHkQ, uintiZFVqCG, byteuIaEEM5, byteLnESkb, {from: accounts[3]});
		const uint256pADs9sK = await BACMARSLPTOKENPooldtyw9eF.withdraw.call(uintkpD9DGP, {from: accounts[5]});
		const uint256w5BUwTv = await BACMARSLPTOKENPooldtyw9eF.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256eCE6kvv = await BACMARSLPTOKENPooldtyw9eF.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringU2Kd4jq = "1BE1AU3wTKrGuikizHmLQi4Ae8vMbaSMsJJI9"
		const stringEXGUQsQ = "xc3a7WPVQf7zgnR69yx1Ii1OFOzpZgM2zPCPb8osWCt336yVC1vd7oi2FJIKBmnEpFWil8fyifIG1uDjzkCYmv"
		const uintZoy0gCa = BigInt("53")
		const BACMARSLPTOKENPoolj0qB1B1 = await BACMARSLPTOKENPool.new(stringU2Kd4jq, stringEXGUQsQ, uintZoy0gCa, {from: accounts[4]});
		const addressz50JIHA = accounts[2]
		const uintcixNbOh = BigInt("104")
		const stringa9zeYt = await BACMARSLPTOKENPoolj0qB1B1.symbol.call({from: accounts[3]});
		await BACMARSLPTOKENPoolj0qB1B1.getReward.call({from: accounts[3]});
		const addressvwAY0Bk = await BACMARSLPTOKENPoolj0qB1B1.updateReward.call(addressz50JIHA, {from: accounts[3]});
		const uint256M3cm5FH = await BACMARSLPTOKENPoolj0qB1B1.withdraw.call(uintcixNbOh, {from: accounts[2]});
		await BACMARSLPTOKENPoolj0qB1B1.nonReentrant.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringywKqerg = "7FB3wbr7"
		const stringdajhEn = "ME"
		const uinttW0erM = BigInt("246")
		const BACMARSLPTOKENPoolGVLaOkb = await BACMARSLPTOKENPool.new(stringywKqerg, stringdajhEn, uinttW0erM, {from: accounts[0]});
		const addresswrULdhk = accounts[4]
		const uint256uX64pcT = await BACMARSLPTOKENPoolGVLaOkb.balanceOf.call(addresswrULdhk, {from: accounts[4]});
		const stringJMJOaS = await BACMARSLPTOKENPoolGVLaOkb.symbol.call({from: accounts[0]});
		await BACMARSLPTOKENPoolGVLaOkb.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressG1axTzL = accounts[3]
		const addresshgwvZXl = accounts[1]
		const addresszCswWew = accounts[0]
		const BACMARSLPTOKENPoolxuUuNiD = await BACMARSLPTOKENPool.new(addressG1axTzL, addresshgwvZXl, addresszCswWew, {from: accounts[1]});
//		await BACMARSLPTOKENPoolxuUuNiD.exit.call({from: accounts[5]});
//		await BACMARSLPTOKENPoolxuUuNiD.getReward.call({from: accounts[4]});

		await expect(BACMARSLPTOKENPoolxuUuNiD.exit.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkJAn5V6 = "c6r74OTxHb0OOzUOh7I9YSsdxn0QzgUoJKxy4tMKCOObK3FocblQRZJ"
		const stringpeuf7mE = "xpxu4I8dYx8Tnz4n3L89cw2jNE4J74whpJFtVNPYiOtfF8XA3FxN4Ri1lElOv1lx5syoMSNnUgBwcxPf6R5q4kBU"
		const uintBSpqDG2 = BigInt("12")
		const BACMARSLPTOKENPoolRvC4zlh = await BACMARSLPTOKENPool.new(stringkJAn5V6, stringpeuf7mE, uintBSpqDG2, {from: accounts[5]});
		const addresscYKVFPp = accounts[1]
		const addressxNQISyi = accounts[3]
		const uint256LVE99ul = await BACMARSLPTOKENPoolRvC4zlh.earned.call(addresscYKVFPp, {from: accounts[5]});
		await BACMARSLPTOKENPoolRvC4zlh.exit.call({from: accounts[2]});
		const uint256W7kxpqq = await BACMARSLPTOKENPoolRvC4zlh.balanceOf.call(addressxNQISyi, {from: accounts[2]});
		const uint256gn6LQA9 = await BACMARSLPTOKENPoolRvC4zlh.lastTimeRewardApplicable.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressKP1R4JI = accounts[3]
		const addressRbSvkYu = accounts[1]
		const addressZqiqH2Z = accounts[0]
		const BACMARSLPTOKENPoolxuUuNiD = await BACMARSLPTOKENPool.new(addressKP1R4JI, addressRbSvkYu, addressZqiqH2Z, {from: accounts[1]});
		const byteaV1UYQ = "0x1e05061716120602100b121f111b03151802020c16181207031504050f1a0a1f"
		const bytebAZ0wDc = "0x050b0f1103021716200f0f120509061c200d15051a200d0717171c1d131d1a14"
		const uintpmIf7AP = BigInt("96")
		const uintxEJsRoe = BigInt("220")
		const uintgvxC2hQ = BigInt("930")
//		await BACMARSLPTOKENPoolxuUuNiD.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256uyeCSuY = await BACMARSLPTOKENPoolxuUuNiD.stakeWithPermit.call(uintgvxC2hQ, uintxEJsRoe, uintpmIf7AP, bytebAZ0wDc, byteaV1UYQ, {from: accounts[3]});

		await expect(BACMARSLPTOKENPoolxuUuNiD.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOs1tgZS = "u3mEB9OxbuZDC"
		const stringNSC7rtz = "UJMQASsyjmRJLm7HRoeSJRkxcNeWu"
		const uintmUgzYun = BigInt("206")
		const BACMARSLPTOKENPoolfJLoXl = await BACMARSLPTOKENPool.new(stringOs1tgZS, stringNSC7rtz, uintmUgzYun, {from: accounts[4]});
		const uintQnvexC = BigInt("1511")
		const uinttWR4v2Y = BigInt("977")
		const addressZvSIpzZ = accounts[4]
		const uint256vsvvloP = await BACMARSLPTOKENPoolfJLoXl.notifyRewardAmount.call(uintQnvexC, {from: accounts[3]});
		const uint256D7d2At0 = await BACMARSLPTOKENPoolfJLoXl.notifyRewardAmount.call(uinttWR4v2Y, {from: accounts[0]});
		await BACMARSLPTOKENPoolfJLoXl.onlyRewardsDistribution.call({from: accounts[4]});
		await BACMARSLPTOKENPoolfJLoXl.getReward.call({from: accounts[1]});
		const uint256uP88tZT = await BACMARSLPTOKENPoolfJLoXl.earned.call(addressZvSIpzZ, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLaGeRbN = "CeKuIgjEAa0fmWYMzDSOQrWUbqjUjlqYrrnjENPdnceFyuUA5uW7pjnOvX4nX0kTpplmJCr7qK2E3ZtNU"
		const stringgXYpWFr = "o7GkJ2HE5Xf5EBuahLa7"
		const uintvHS2jC6 = BigInt("182")
		const BACMARSLPTOKENPoolHXi0slw = await BACMARSLPTOKENPool.new(stringLaGeRbN, stringgXYpWFr, uintvHS2jC6, {from: accounts[0]});
		const uintnQysATG = BigInt("797")
		const uintDd5cmiz = BigInt("833")
		const stringK2wU8FN = await BACMARSLPTOKENPoolHXi0slw.name.call({from: accounts[5]});
		const uint8sC8pdr2 = await BACMARSLPTOKENPoolHXi0slw.decimals.call({from: accounts[4]});
		const uint256Q3yGTnc = await BACMARSLPTOKENPoolHXi0slw.rewardPerToken.call({from: accounts[0]});
		const uint256wInM9gN = await BACMARSLPTOKENPoolHXi0slw.notifyRewardAmount.call(uintnQysATG, {from: accounts[4]});
		await BACMARSLPTOKENPoolHXi0slw.nonReentrant.call({from: accounts[5]});
		const uint256n3HhINY = await BACMARSLPTOKENPoolHXi0slw.notifyRewardAmount.call(uintDd5cmiz, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringM5nPDHO = "AGhhESewVPjV8qZARKj5XuphkRnDwf9ztCgQwbJQUTskEAQtVHc47PHC0q"
		const stringPhD4IE4 = "i6qEvM6I5APzxuWS5eLHK2q1Lmim8u1kyEOjDCskkyjVJAU2ruTBCzcbiaLN5xcoKqhCzTC3tuaPie8ONLnxaja"
		const uintGe54mn2 = BigInt("243")
		const BACMARSLPTOKENPoolxTQiSx6 = await BACMARSLPTOKENPool.new(stringM5nPDHO, stringPhD4IE4, uintGe54mn2, {from: accounts[0]});
		const uint256Qp8XMlN = await BACMARSLPTOKENPoolxTQiSx6.totalSupply.call({from: accounts[2]});
		await BACMARSLPTOKENPoolxTQiSx6.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolxTQiSx6.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyrCpONQ = "BogisSKMFiVc5p"
		const stringySnFdri = "dd8HDQqvEGxdWQA65rl0bxaA1zExXT1TKLFv0cWQ5SP7UTasr3lHa8kmPTYpU4Eh7X"
		const uintmwUpOYk = BigInt("189")
		const BACMARSLPTOKENPoolEAzv1W = await BACMARSLPTOKENPool.new(stringyrCpONQ, stringySnFdri, uintmwUpOYk, {from: accounts[4]});
		const uintoDgcNXQ = BigInt("604")
		const uintTC8KMXE = BigInt("1744")
		const uint256NZcKbe = await BACMARSLPTOKENPoolEAzv1W.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPoolEAzv1W.getReward.call({from: accounts[2]});
		const uint256UM5ZHrz = await BACMARSLPTOKENPoolEAzv1W.stake.call(uintoDgcNXQ, {from: accounts[4]});
		const uint256B8kMyi4 = await BACMARSLPTOKENPoolEAzv1W.withdraw.call(uintTC8KMXE, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDtOIpVu = "4Dftb0UYDhGKGsEdXtMpB1"
		const stringVB8SJZ = "Ljp0f81OtEaGc36cwkPEbQJVVKCDVYnQ54"
		const uintaeinbx = BigInt("188")
		const BACMARSLPTOKENPoolFJO5xMC = await BACMARSLPTOKENPool.new(stringDtOIpVu, stringVB8SJZ, uintaeinbx, {from: accounts[2]});
		const addresszIFslGv = accounts[0]
		const addresslMgAWY5 = accounts[4]
		const uintu8YjwbW = BigInt("1996")
		const uint256oWrs34o = await BACMARSLPTOKENPoolFJO5xMC.balanceOf.call(addresszIFslGv, {from: accounts[2]});
		await BACMARSLPTOKENPoolFJO5xMC.getReward.call({from: accounts[4]});
		const uint2565YEg9x = await BACMARSLPTOKENPoolFJO5xMC.balanceOf.call(addresslMgAWY5, {from: accounts[3]});
		const uint256ml8fpWU = await BACMARSLPTOKENPoolFJO5xMC.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256PQu8fpx = await BACMARSLPTOKENPoolFJO5xMC.notifyRewardAmount.call(uintu8YjwbW, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeCvnEdo = "ZKFK8WaKmu7cMYcPcGX54xh7PhQAr3Gb"
		const stringELZ2W4E = "KJe25yHxjDlYsuW54LgcLGL6ETOIBtABPqsjYzQyaRoCyGA3Li0pMSRCDbb"
		const uintUTXiGW = BigInt("129")
		const BACMARSLPTOKENPoolZYEQW05 = await BACMARSLPTOKENPool.new(stringeCvnEdo, stringELZ2W4E, uintUTXiGW, {from: accounts[0]});
		const uintDSDnJOG = BigInt("1513")
		await BACMARSLPTOKENPoolZYEQW05.nonReentrant.call({from: accounts[0]});
		const uint256gMHgpPY = await BACMARSLPTOKENPoolZYEQW05.withdraw.call(uintDSDnJOG, {from: accounts[4]});
		const uint256a3wJj74 = await BACMARSLPTOKENPoolZYEQW05.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const stringvRmOLrJ = await BACMARSLPTOKENPoolZYEQW05.name.call({from: accounts[2]});
		const uint8SB8rnAu = await BACMARSLPTOKENPoolZYEQW05.decimals.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFbWrNWN = "ktcpr4onvmmAOwFdxcFxLdRr6hIBuGX7Dp4nnrZV4PmMd6xYCQ7C86kKImwNHADgXQ7RxQsW4wL5twtOvN"
		const stringEtblm0 = "grOcvuteJSBHJ1LfuKxS"
		const uintdNYzwg = BigInt("28")
		const BACMARSLPTOKENPoolE2EmgR2 = await BACMARSLPTOKENPool.new(stringFbWrNWN, stringEtblm0, uintdNYzwg, {from: accounts[1]});
		const uinty1vTSJl = BigInt("1150")
		const stringGlOmT3x = await BACMARSLPTOKENPoolE2EmgR2.name.call({from: accounts[3]});
		const uint256JXoAc7I = await BACMARSLPTOKENPoolE2EmgR2.stake.call(uinty1vTSJl, {from: accounts[5]});
		const uint256LgUvXii = await BACMARSLPTOKENPoolE2EmgR2.getRewardForDuration.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringzvM4ZO4 = "3Fq7Tn7Mq"
		const stringFG5GGkI = "7qYVmIfT3EUN3JL"
		const uintLG5i6Cd = BigInt("27")
		const BACMARSLPTOKENPoolCEytNY = await BACMARSLPTOKENPool.new(stringzvM4ZO4, stringFG5GGkI, uintLG5i6Cd, {from: accounts[4]});
		const addressoafoBek = accounts[2]
		const uintyJY0YtC = BigInt("533")
		const uintwd9CefD = BigInt("191")
		await BACMARSLPTOKENPoolCEytNY.exit.call({from: accounts[5]});
		const uint256ndYUlD = await BACMARSLPTOKENPoolCEytNY.earned.call(addressoafoBek, {from: accounts[3]});
		const uint256z07NnvM = await BACMARSLPTOKENPoolCEytNY.stake.call(uintyJY0YtC, {from: accounts[4]});
		const uint256dRHhjAZ = await BACMARSLPTOKENPoolCEytNY.withdraw.call(uintwd9CefD, {from: accounts[5]});
		await BACMARSLPTOKENPoolCEytNY.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringC2NtJqZ = "BLm2jIQocUWETFwKxEM122q7wKwy"
		const stringpMM0EaS = "Q1264QdGsG28QlVycJCl8CesdbrRzGq26"
		const uintuo8TUD6 = BigInt("114")
		const BACMARSLPTOKENPoolBPpqkl3 = await BACMARSLPTOKENPool.new(stringC2NtJqZ, stringpMM0EaS, uintuo8TUD6, {from: accounts[4]});
		const uinta0sbrko = BigInt("1284")
		const byteL2Qi4tn = "0x0c1b131808121002000a1b1406040d120b121c1d160d0511070306171a080a18"
		const bytenJYeObK = "0x110f100f131604121a15091d191f1c1c0b111c14181e0c030115050f02001906"
		const uintpXlmIx2 = BigInt("99")
		const uintcMq0hHS = BigInt("119")
		const uintq9WCDrW = BigInt("1315")
		const uintfUn8CP = BigInt("1798")
		const uint256Jt1za42 = await BACMARSLPTOKENPoolBPpqkl3.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256Zx1tGmR = await BACMARSLPTOKENPoolBPpqkl3.notifyRewardAmount.call(uinta0sbrko, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Wgc6ARJ = await BACMARSLPTOKENPoolBPpqkl3.stakeWithPermit.call(uintq9WCDrW, uintcMq0hHS, uintpXlmIx2, bytenJYeObK, byteL2Qi4tn, {from: accounts[4]});
		const uint256Apo7agn = await BACMARSLPTOKENPoolBPpqkl3.stake.call(uintfUn8CP, {from: accounts[5]});
		const stringqzlgFbU = await BACMARSLPTOKENPoolBPpqkl3.name.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringckz4mYC = "5aYiHTkFN"
		const stringMjHRypL = "dL5Xf1tioWsMX36MPMeAjLNMOYMTtK3QBEouPElNxE2JUnCWfxru"
		const uintmKuYNQ1 = BigInt("241")
		const BACMARSLPTOKENPoolMQqer30 = await BACMARSLPTOKENPool.new(stringckz4mYC, stringMjHRypL, uintmKuYNQ1, {from: accounts[0]});
		const uintzl0Hxc2 = BigInt("639")
		const uintRBJKrVF = BigInt("1020")
		const uint256A1Pbwd = await BACMARSLPTOKENPoolMQqer30.withdraw.call(uintzl0Hxc2, {from: accounts[1]});
		const uint256ZCtMkIw = await BACMARSLPTOKENPoolMQqer30.notifyRewardAmount.call(uintRBJKrVF, {from: accounts[0]});
		const uint256zwxiZk0 = await BACMARSLPTOKENPoolMQqer30.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint8HvP5kGU = await BACMARSLPTOKENPoolMQqer30.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlzJnCoM = "p6NtbiCXHr2rxXPaofBCECJDxP"
		const stringKtCypWU = "zs8VrJ78198IYLN92OdFxgTpqBqugXeY91ysr1"
		const uintstliiXm = BigInt("156")
		const BACMARSLPTOKENPoolS2sCp2K = await BACMARSLPTOKENPool.new(stringlzJnCoM, stringKtCypWU, uintstliiXm, {from: "0x0000000000000000000000000000000000000001"});
		const uintJtve9Vh = BigInt("1022")
		const uintbPU71hL = BigInt("815")
		const byteI8iaoK = "0x0a050a110f0c111b0e070502191214080c0d0d03200a0d05170217141302000d"
		const bytepXfZtp = "0x180405160e030d05180d010b0f1801150014160b040b030216101d050c140c20"
		const uintdfB0HGU = BigInt("250")
		const uintsoTt8KL = BigInt("1499")
		const uintUTmMVNx = BigInt("266")
		const uint256N164g8A = await BACMARSLPTOKENPoolS2sCp2K.stake.call(uintJtve9Vh, {from: accounts[0]});
		const uint256FMWRZqe = await BACMARSLPTOKENPoolS2sCp2K.withdraw.call(uintbPU71hL, {from: accounts[2]});
		const uint256wbU1f13 = await BACMARSLPTOKENPoolS2sCp2K.stakeWithPermit.call(uintUTmMVNx, uintsoTt8KL, uintdfB0HGU, bytepXfZtp, byteI8iaoK, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPADVGpD = "rfp53D42bl3W84HKDNQ6liVC2M9TxG4noD5jz2c9V4t"
		const stringqYfVO64 = "jj2wMOl4xPkoMrkMpbivilopJ8t8jg375L8"
		const uintiEXKxbu = BigInt("49")
		const BACMARSLPTOKENPoolYb5ITWw = await BACMARSLPTOKENPool.new(stringPADVGpD, stringqYfVO64, uintiEXKxbu, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolYb5ITWw.getReward.call({from: accounts[0]});
		const uint256SYx7B0d = await BACMARSLPTOKENPoolYb5ITWw.rewardPerToken.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringF7f9AkQ = "rw498YfRwvxqI3aysVE97AzNDgRgaD8hagK16Zy7EM9q7gEqsQBqvUhCUPOnrhCBwYaueeA20uonTP"
		const stringi3hALKt = "EdLMFi5"
		const uintOCIoj9u = BigInt("235")
		const BACMARSLPTOKENPoolQ6P1rFl = await BACMARSLPTOKENPool.new(stringF7f9AkQ, stringi3hALKt, uintOCIoj9u, {from: accounts[4]});
		const uint256GOhD9QN = await BACMARSLPTOKENPoolQ6P1rFl.rewardPerToken.call({from: accounts[0]});
		const uint256dUnjest = await BACMARSLPTOKENPoolQ6P1rFl.lastTimeRewardApplicable.call({from: accounts[2]});
		const stringWYVglqr = await BACMARSLPTOKENPoolQ6P1rFl.name.call({from: accounts[1]});
		const uint8o8uU8ls = await BACMARSLPTOKENPoolQ6P1rFl.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringVGTfKGK = "dVLcoiwzmsaeS6FP3SOdEAe9cczf7Xe77Bg1XX4ud"
		const stringYVA8Eak = "8HdNtFqjVx1aeQu8OjJvtD3oFvea1LqZcNANaQEpQZLRoxvbeAOJQdG5V5rxQxY8hOnizK2YmYY8AyskPlc6u"
		const uintmX6Hiob = BigInt("52")
		const BACMARSLPTOKENPooljX0A55u = await BACMARSLPTOKENPool.new(stringVGTfKGK, stringYVA8Eak, uintmX6Hiob, {from: accounts[0]});
		const uintM4olkkZ = BigInt("1564")
		const uint256WHIwHE5 = await BACMARSLPTOKENPooljX0A55u.totalSupply.call({from: accounts[2]});
		await BACMARSLPTOKENPooljX0A55u.exit.call({from: accounts[0]});
		const uint256G28qasE = await BACMARSLPTOKENPooljX0A55u.withdraw.call(uintM4olkkZ, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringm5Y6opM = "sz6h9WAV78RBIlWD9NR5chZ5d4u5ENSw8PJDpquUDGPrezJqqX2I6AWlB"
		const stringXzhkBwE = "63AS0ckv2FjxbfAb1A"
		const uintljAfepr = BigInt("174")
		const BACMARSLPTOKENPooloJMluo = await BACMARSLPTOKENPool.new(stringm5Y6opM, stringXzhkBwE, uintljAfepr, {from: accounts[1]});
		const uint256VMJHxDr = await BACMARSLPTOKENPooloJMluo.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256XtN6wba = await BACMARSLPTOKENPooloJMluo.totalSupply.call({from: accounts[4]});
		const uint256jhtYQhw = await BACMARSLPTOKENPooloJMluo.getRewardForDuration.call({from: accounts[0]});
		const uint256qm2sIZU = await BACMARSLPTOKENPooloJMluo.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringBzrvDCq = "YSGASqngnztgR4S7DP7AVOaSmXRyoLcZcHH"
		const stringLRLtt66 = "TYrWwBd8k5fhqIZ4CMakayQ11VhcYDuVq3RKHGw60s1vuJCCkq7t52KnbXiDcVpO9ncx65TMw8LQETt48nMhMgAB7EX"
		const uintuw4Avy4 = BigInt("198")
		const BACMARSLPTOKENPoolxluxRW = await BACMARSLPTOKENPool.new(stringBzrvDCq, stringLRLtt66, uintuw4Avy4, {from: accounts[1]});
		const addressEwEAGz = accounts[2]
		const addressxiNGI1N = accounts[1]
		const addressjIselnL = accounts[2]
		const uint256LQajz0p = await BACMARSLPTOKENPoolxluxRW.balanceOf.call(addressEwEAGz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MAQBxWu = await BACMARSLPTOKENPoolxluxRW.earned.call(addressxiNGI1N, {from: "0x0000000000000000000000000000000000000001"});
		const uint256biz7ip = await BACMARSLPTOKENPoolxluxRW.earned.call(addressjIselnL, {from: accounts[4]});
		const stringwEnAtnF = await BACMARSLPTOKENPoolxluxRW.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZT6L4W6 = "tdV6W8zxkueOODaXBY8Ky64vHK9wxjoBOtKMrtIwfsKRmbLLSD9XNp6FwulharyBOMaGSOfPqAki1sBVX35EsIUJ"
		const stringtwj7Fcb = "fATibGfKTVQiWAQDBrFODGPq46YtBsuIhbX65Zdqh6JgGWMnjX88Is188oSIaF6AH4IimVg55j6mJpG"
		const uintu8WJSxc = BigInt("123")
		const BACMARSLPTOKENPoolkTDD4GE = await BACMARSLPTOKENPool.new(stringZT6L4W6, stringtwj7Fcb, uintu8WJSxc, {from: accounts[4]});
		const addressvaUS1Kf = accounts[5]
		const uint256m3LchGq = await BACMARSLPTOKENPoolkTDD4GE.earned.call(addressvaUS1Kf, {from: accounts[0]});
		const stringQt4ipWO = await BACMARSLPTOKENPoolkTDD4GE.symbol.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTJdqbVw = "DVOwJG9FomsGdeAkO8LjzAcf9vRsezpJ1b64oFUvzn9dM"
		const stringSvIN9b4 = "m5NIKmSumNNRkKsPX4hyWJ8f9LQaS44y8F53fVvuJWNHqFmKo7RCAacWQ9UJ9OpfyZIfNEteyim1CaqAiBAGwyIknXCj"
		const uintAfTRaha = BigInt("242")
		const BACMARSLPTOKENPooljX0sWJv = await BACMARSLPTOKENPool.new(stringTJdqbVw, stringSvIN9b4, uintAfTRaha, {from: accounts[5]});
		const uintkYVgJqR = BigInt("1642")
		const uintq6zBAB4 = BigInt("577")
		const byteAlR8HXK = "0x1c15170d1e1e18030f08061c020d10000d0d0d0406150908010f100c15010716"
		const byteewD1J2E = "0x0506111f1b1c1c05061d1d1e1c0b0418160c000d1e1d1b1b19010f1a1e19141b"
		const uintfi9x1kK = BigInt("10")
		const uintDhqYkBt = BigInt("1115")
		const uintbxgduOO = BigInt("626")
		const uint256x0RfoFP = await BACMARSLPTOKENPooljX0sWJv.stake.call(uintkYVgJqR, {from: accounts[3]});
		const uint256kA9TAW9 = await BACMARSLPTOKENPooljX0sWJv.rewardPerToken.call({from: accounts[1]});
		const uint256bNmTni = await BACMARSLPTOKENPooljX0sWJv.withdraw.call(uintq6zBAB4, {from: accounts[1]});
		await BACMARSLPTOKENPooljX0sWJv.getReward.call({from: accounts[2]});
		const uint256ohL7IkN = await BACMARSLPTOKENPooljX0sWJv.stakeWithPermit.call(uintbxgduOO, uintDhqYkBt, uintfi9x1kK, byteewD1J2E, byteAlR8HXK, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringCRupLl = "qmSlkWLiXy2ruB"
		const stringn0ys73i = "7DHudQqHdUy6JHp5oKIp8RCyYm0DjvYJtf9l8hgGuJ0jHrNHNt6KglbtV2Vq2D2cBTbyzt6LR7sA58TdVf"
		const uintMX8JCBa = BigInt("214")
		const BACMARSLPTOKENPoolYZVYz6 = await BACMARSLPTOKENPool.new(stringCRupLl, stringn0ys73i, uintMX8JCBa, {from: accounts[4]});
		const address5iGiLH = accounts[2]
		const uint256rxrLkEe = await BACMARSLPTOKENPoolYZVYz6.totalSupply.call({from: accounts[2]});
		const uint256fGzTMjf = await BACMARSLPTOKENPoolYZVYz6.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Qcqs3BD = await BACMARSLPTOKENPoolYZVYz6.rewardPerToken.call({from: accounts[1]});
		const uint256aADoZ90 = await BACMARSLPTOKENPoolYZVYz6.earned.call(address5iGiLH, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringE0o3lk = "RWD3AuaKbf"
		const stringLguH6gp = "yusNuURk8c2uRAuQ4m8ZcUYzKvi4ipZY7YbPtdi9LiCQP9HsIbqll"
		const uintvrKeIEL = BigInt("224")
		const BACMARSLPTOKENPooleEa0n4k = await BACMARSLPTOKENPool.new(stringE0o3lk, stringLguH6gp, uintvrKeIEL, {from: accounts[5]});
		const bytein87RqK = "0x0c0a18020f0a010d18081e1b0b0e051a1c0f071e190b0d00181b0b1f1d031a06"
		const byteoTON7qG = "0x16111a1118100305190600001f190e16021a1c0219101312061f17010b12110f"
		const uintjFh4kc = BigInt("63")
		const uintseITVZf = BigInt("1290")
		const uintTjeNuFf = BigInt("671")
		const uint256gGCnUT = await BACMARSLPTOKENPooleEa0n4k.stakeWithPermit.call(uintTjeNuFf, uintseITVZf, uintjFh4kc, byteoTON7qG, bytein87RqK, {from: accounts[4]});
		const stringf7WJR4s = await BACMARSLPTOKENPooleEa0n4k.symbol.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringA9Mce3N = "f2ka8oOOO1youVLKnLWKmB3El16"
		const stringkc7cE36 = "2tVj4BHsxIpfHLjIq2"
		const uintyYS4LG = BigInt("169")
		const BACMARSLPTOKENPoolxXvg2rP = await BACMARSLPTOKENPool.new(stringA9Mce3N, stringkc7cE36, uintyYS4LG, {from: accounts[0]});
		const uintSAbJewH = BigInt("1457")
		await BACMARSLPTOKENPoolxXvg2rP.exit.call({from: accounts[5]});
		await BACMARSLPTOKENPoolxXvg2rP.exit.call({from: accounts[5]});
		const uint256b9DlDKE = await BACMARSLPTOKENPoolxXvg2rP.notifyRewardAmount.call(uintSAbJewH, {from: accounts[2]});
		const uint256n7aCQ9T = await BACMARSLPTOKENPoolxXvg2rP.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyv81Kg2 = "BT"
		const stringCZ3X9i = "rxmBB78vscwjzaQgYC6RhP748gnWAVPway351SCa3KsQmzvGLMHwwGY49M2XtQ"
		const uintoDZGP2N = BigInt("146")
		const BACMARSLPTOKENPoolx8hh3cV = await BACMARSLPTOKENPool.new(stringyv81Kg2, stringCZ3X9i, uintoDZGP2N, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolx8hh3cV.nonReentrant.call({from: accounts[0]});
		const string1WDNYe = await BACMARSLPTOKENPoolx8hh3cV.name.call({from: accounts[4]});
		await BACMARSLPTOKENPoolx8hh3cV.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOillSQZ = "t1m14MbBSHYy1DYY4RN2ifc"
		const stringD2Yq4Dp = "b9OThPZGaCykOUzwPjL7IKd"
		const uinttgYwkY3 = BigInt("133")
		const BACMARSLPTOKENPoolrv8Zn4 = await BACMARSLPTOKENPool.new(stringOillSQZ, stringD2Yq4Dp, uinttgYwkY3, {from: accounts[5]});
		const addresslnNGZCs = accounts[4]
		const uinthvw9IRQ = BigInt("1345")
		const uintuaLDgnY = BigInt("664")
		const uint256ioRpQP = await BACMARSLPTOKENPoolrv8Zn4.earned.call(addresslnNGZCs, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolrv8Zn4.getReward.call({from: accounts[5]});
		const uint256OUUo4eE = await BACMARSLPTOKENPoolrv8Zn4.withdraw.call(uinthvw9IRQ, {from: accounts[0]});
		const uint89odolw = await BACMARSLPTOKENPoolrv8Zn4.decimals.call({from: accounts[2]});
		const uint256GUdiUM9 = await BACMARSLPTOKENPoolrv8Zn4.stake.call(uintuaLDgnY, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfJEJIzd = "Us6XxsTzoqByBjgcDfrmZqld90tjQFMCzBhDaKfyvutPPlQOtIdpUqTdUqE"
		const stringtoLMXtE = "NyoEl9tHD2OmRY0aPpBUngNbPMGKdzXi5AcmPlJTfIjlT5UmuLhAB3eLempkO8uA3Db8tv4cBMjSzTQfkj"
		const uinta0P4JqU = BigInt("190")
		const BACMARSLPTOKENPoolJ7kxDIr = await BACMARSLPTOKENPool.new(stringfJEJIzd, stringtoLMXtE, uinta0P4JqU, {from: accounts[0]});
		const uint8yAaBLv9 = await BACMARSLPTOKENPoolJ7kxDIr.decimals.call({from: accounts[5]});
		await BACMARSLPTOKENPoolJ7kxDIr.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgHp98Rs = "W9CXma6V0dQpfRXogCWm8cpYey8SV9rzUtmLxOK3Hy1JlrSeb6f7ko8ohlUWWK8DhuRG0ftk7WEp0bkN5"
		const string5wtoEm = "chYFLkUUOUdlMDWHII5SemnUq95X1cbSy4SzVgsoayH13bE5"
		const uintzrxizGh = BigInt("18")
		const BACMARSLPTOKENPoolSJl09b = await BACMARSLPTOKENPool.new(stringgHp98Rs, string5wtoEm, uintzrxizGh, {from: "0x0000000000000000000000000000000000000001"});
		const addressunAHJvA = accounts[2]
		await BACMARSLPTOKENPoolSJl09b.getReward.call({from: accounts[5]});
		const uint256XfUQFqj = await BACMARSLPTOKENPoolSJl09b.earned.call(addressunAHJvA, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwOnO2Nb = "MIC2G6AkSUEBRdURycLhW6RzPi9HJnnBQUNzNJVp9oIJomESzvZO7iLYJeG2"
		const stringrOHY5jw = "3bXWaOKx3eKsi8kML0o1Hw62R3gK8b0WWJO9oP1"
		const uintz0Lq38k = BigInt("212")
		const BACMARSLPTOKENPoolFUk7NKa = await BACMARSLPTOKENPool.new(stringwOnO2Nb, stringrOHY5jw, uintz0Lq38k, {from: accounts[4]});
		const uintPatiztV = BigInt("1403")
		const uinttRdmihh = BigInt("872")
		const uint256upxQMa8 = await BACMARSLPTOKENPoolFUk7NKa.notifyRewardAmount.call(uintPatiztV, {from: accounts[2]});
		await BACMARSLPTOKENPoolFUk7NKa.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256Aqfwwn = await BACMARSLPTOKENPoolFUk7NKa.withdraw.call(uinttRdmihh, {from: accounts[0]});
		const uint256Kmn73uf = await BACMARSLPTOKENPoolFUk7NKa.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUZYyDCG = "2K83UxAkslsDGr5K5Kn37e"
		const stringRbVqJJK = "Yh5gdpAyxVboHv8YwotLMH5hHGbnPQ9oqkE"
		const uintftlQs6i = BigInt("187")
		const BACMARSLPTOKENPoolL2lD6b4 = await BACMARSLPTOKENPool.new(stringUZYyDCG, stringRbVqJJK, uintftlQs6i, {from: accounts[0]});
		const uintZ8bO3bz = BigInt("1896")
		const addressOMQD2SE = accounts[5]
		const uintZTBTpJ = BigInt("572")
		const uint256fuhHnw = await BACMARSLPTOKENPoolL2lD6b4.withdraw.call(uintZ8bO3bz, {from: accounts[0]});
		const uint256eNAUzRf = await BACMARSLPTOKENPoolL2lD6b4.earned.call(addressOMQD2SE, {from: accounts[4]});
		const stringfgZVui9 = await BACMARSLPTOKENPoolL2lD6b4.symbol.call({from: accounts[1]});
		const uint256slZrs9E = await BACMARSLPTOKENPoolL2lD6b4.stake.call(uintZTBTpJ, {from: accounts[0]});
		const uint256xL8tL8P = await BACMARSLPTOKENPoolL2lD6b4.getRewardForDuration.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringd7RDeIn = "yaRhdDEggmHc"
		const stringXcfAV7 = "QPnEdma6ead3jFXTcVxpjHcxcFJjUe9ibEN4GPCaVIxsgdqp"
		const uintmvgZYjm = BigInt("237")
		const BACMARSLPTOKENPoolUwjxqbF = await BACMARSLPTOKENPool.new(stringd7RDeIn, stringXcfAV7, uintmvgZYjm, {from: accounts[4]});
		const addressz44SgBm = "0x0000000000000000000000000000000000000001"
		const uint256m5yrrGl = await BACMARSLPTOKENPoolUwjxqbF.balanceOf.call(addressz44SgBm, {from: accounts[0]});
		const uint256kjzyV1Y = await BACMARSLPTOKENPoolUwjxqbF.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhvL7M5H = "7CStPyVN94aPA2SpKITkUgTxPKaLWepCDiMWC9TDjB5t4FvHbn2n9tisv5vVll1B3kQfpyWLPtr8hOMt1yiooSyXsfXVzpn2qK"
		const stringlVvSCQ4 = "tIgc1owwbjTm65dEFp7IA4O6olaiyGqX8NVwrhCCZxh1F1IYk2g1p41tBTDG0oRfrSd6"
		const uintecPnPIs = BigInt("31")
		const BACMARSLPTOKENPoolTXLyhMW = await BACMARSLPTOKENPool.new(stringhvL7M5H, stringlVvSCQ4, uintecPnPIs, {from: accounts[1]});
		const uintEkdjDtC = BigInt("1465")
		const byteGeGOUYH = "0x03170612110e10050d18091b1a11001112061f0e0c0709020a1d1e20041b080a"
		const bytevZc0y8X = "0x17111c12181d1214060a06011b040408141d121d011c101e1b071e0008150604"
		const uintxPw5frf = BigInt("161")
		const uintXXQyuPt = BigInt("668")
		const uintEEMdwq6 = BigInt("227")
		const uint256s5xxDX6 = await BACMARSLPTOKENPoolTXLyhMW.stake.call(uintEkdjDtC, {from: accounts[2]});
		const uint256DJFfN7 = await BACMARSLPTOKENPoolTXLyhMW.stakeWithPermit.call(uintEEMdwq6, uintXXQyuPt, uintxPw5frf, bytevZc0y8X, byteGeGOUYH, {from: accounts[5]});
		const uint256YcoKn4 = await BACMARSLPTOKENPoolTXLyhMW.rewardPerToken.call({from: accounts[0]});
		await BACMARSLPTOKENPoolTXLyhMW.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringR9jrQ0z = "8HkLVQGhY2jDa9ucPnchEzWEcyjyEallSeUKcZ"
		const string8WpogF = "mrYbCGVnOQeH455HB3YQr1CvoqQ69dU7oQLdIoFdKfyJNr1scnlJHVEfB21HVnsT2uCHxzlhSiiuXshrza4oyqGpSuV5TEa1ny"
		const uintzS85wS = BigInt("115")
		const BACMARSLPTOKENPoolTfZ5JlN = await BACMARSLPTOKENPool.new(stringR9jrQ0z, string8WpogF, uintzS85wS, {from: accounts[1]});
		const addresscLTBcXm = "0x0000000000000000000000000000000000000001"
		const uintNHE4eUm = BigInt("1137")
		const uintYhQbBkt = BigInt("1070")
		const uint256nUWSzYZ = await BACMARSLPTOKENPoolTfZ5JlN.getRewardForDuration.call({from: accounts[1]});
		const addressftqINzs = await BACMARSLPTOKENPoolTfZ5JlN.updateReward.call(addresscLTBcXm, {from: accounts[4]});
		const uint256sd1K7DE = await BACMARSLPTOKENPoolTfZ5JlN.withdraw.call(uintNHE4eUm, {from: "0x0000000000000000000000000000000000000001"});
		const uint256e90m6H1 = await BACMARSLPTOKENPoolTfZ5JlN.stake.call(uintYhQbBkt, {from: accounts[3]});
		await BACMARSLPTOKENPoolTfZ5JlN.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaojzyER = "Ls2raTMK9J3x6MGxNh9I3tCb0IMcVFvdOFlV"
		const stringo6EfYA7 = "u4Bxt6IsOWK6cqw0qpqIfyBkByNBtHnKdBTfB2n1AeSy5FLsu2iXPPjvbG3CXLs6uJiINTF4dnqe1C1fmlyBU5"
		const uintidcM7aM = BigInt("150")
		const BACMARSLPTOKENPoolZ5QFEM8 = await BACMARSLPTOKENPool.new(stringaojzyER, stringo6EfYA7, uintidcM7aM, {from: accounts[5]});
		const uintJM7XCVp = BigInt("731")
		const uintntQrvJe = BigInt("1782")
		const uint8fyJaXCo = await BACMARSLPTOKENPoolZ5QFEM8.decimals.call({from: accounts[4]});
		await BACMARSLPTOKENPoolZ5QFEM8.nonReentrant.call({from: accounts[1]});
		const uint256CtwSVnu = await BACMARSLPTOKENPoolZ5QFEM8.withdraw.call(uintJM7XCVp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256r6ucU6b = await BACMARSLPTOKENPoolZ5QFEM8.notifyRewardAmount.call(uintntQrvJe, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZi3lZ30 = "D5LtZ8PVXxRLYLPEqhu"
		const stringEfahAGa = "YEHx0jjbKjuPoVx4HeZATrVIGQ1zXkVuHtSmFo98"
		const uintoVMc8tS = BigInt("220")
		const BACMARSLPTOKENPoolSAjje2X = await BACMARSLPTOKENPool.new(stringZi3lZ30, stringEfahAGa, uintoVMc8tS, {from: accounts[1]});
		const addressfmbLnk = accounts[5]
		const uint256RTX9oVm = await BACMARSLPTOKENPoolSAjje2X.balanceOf.call(addressfmbLnk, {from: accounts[5]});
		await BACMARSLPTOKENPoolSAjje2X.onlyRewardsDistribution.call({from: accounts[4]});
		await BACMARSLPTOKENPoolSAjje2X.nonReentrant.call({from: accounts[3]});
		await BACMARSLPTOKENPoolSAjje2X.onlyRewardsDistribution.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJstGWeW = "XQHIdZfzOyOsmUN5i3zez1j7YN"
		const stringbUqfTtI = "oLP9m4IpinqX9aP2gYFMguuwn387AewtwsW8eltmputKJBmboUEBS7iR7hTj1uhallSjJRCe2T3xK1kI3B"
		const uintKMKIhZe = BigInt("82")
		const BACMARSLPTOKENPoolyMpqIIe = await BACMARSLPTOKENPool.new(stringJstGWeW, stringbUqfTtI, uintKMKIhZe, {from: accounts[1]});
		const uint256AI57HuC = await BACMARSLPTOKENPoolyMpqIIe.totalSupply.call({from: accounts[5]});
		const uint256mgMo76X = await BACMARSLPTOKENPoolyMpqIIe.getRewardForDuration.call({from: accounts[1]});
		const uint256OJhGytZ = await BACMARSLPTOKENPoolyMpqIIe.totalSupply.call({from: accounts[4]});
		const uint256o2WrrqY = await BACMARSLPTOKENPoolyMpqIIe.rewardPerToken.call({from: accounts[2]});
	});
})