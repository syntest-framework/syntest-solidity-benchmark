const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const stringeCujY3r = "23MCv"
		const stringo2mTJ5 = "jMFljo2BChxGj"
		const uint9AymGg = BigInt("144")
		const BACMARSLPTOKENPoolowtuBfr = await BACMARSLPTOKENPool.new(stringeCujY3r, stringo2mTJ5, uint9AymGg, {from: accounts[3]});
		const uintW3loDf8 = BigInt("1667")
		const uint256FiHgTMa = await BACMARSLPTOKENPoolowtuBfr.getRewardForDuration.call({from: accounts[5]});
		const uint256bp9Ef0a = await BACMARSLPTOKENPoolowtuBfr.notifyRewardAmount.call(uintW3loDf8, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressVjQSaHu = accounts[3]
		const addresss2Zb6QO = accounts[4]
		const addressMJBG2wr = accounts[2]
		const BACMARSLPTOKENPooluV0omWF = await BACMARSLPTOKENPool.new(addressVjQSaHu, addresss2Zb6QO, addressMJBG2wr, {from: accounts[1]});
		const byteJKmQqT4 = "0x151b0d0012010b0a070a191d1d0e200a101f1417081403121f12100c0507040b"
		const bytetTaHv1 = "0x0905091d081e1f041b08051e1b1d0412120b11081d0c14110302031f1b0f2009"
		const uintzrBPJo6 = BigInt("11")
		const uintgyO5a2l = BigInt("348")
		const uintn1aX781 = BigInt("1668")
		const addressACKfJxJ = accounts[4]
		const byte6fFoeq = "0x090305191c001f1217200f0b001d1a1906141a091208030818161b1e09141b09"
		const bytecSCixOQ = "0x10131a08071a00080d11081411121f1912190c1b0f020320070d150b1202081e"
		const uintfxTaa3b = BigInt("204")
		const uintYS5zDNk = BigInt("1375")
		const uintJ3p3vmb = BigInt("106")
		const uintCmTnqyL = BigInt("531")
		const uint256VeXuxi3 = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintn1aX781, uintgyO5a2l, uintzrBPJo6, bytetTaHv1, byteJKmQqT4, {from: accounts[1]});
		const stringPwTT2U = await BACMARSLPTOKENPooluV0omWF.name.call({from: accounts[1]});
		const uint256gCbdx0Z = await BACMARSLPTOKENPooluV0omWF.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256moh4SQo = await BACMARSLPTOKENPooluV0omWF.earned.call(addressACKfJxJ, {from: accounts[0]});
		const uint256yXMTUo = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintJ3p3vmb, uintYS5zDNk, uintfxTaa3b, bytecSCixOQ, byte6fFoeq, {from: accounts[4]});
		const uint256dYsiLn7 = await BACMARSLPTOKENPooluV0omWF.notifyRewardAmount.call(uintCmTnqyL, {from: accounts[4]});

		await expect(BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintn1aX781, uintgyO5a2l, uintzrBPJo6, bytetTaHv1, byteJKmQqT4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringn4lebm3 = "RQg1SQy47q44iacKmv2LrJ8Ngfc2aCeYZ4X3K4"
		const stringjvrznIx = "kSIxGDIVdD6LRcH9YGoz"
		const uinthilXKCH = BigInt("51")
		const BACMARSLPTOKENPoolq6sKzd3 = await BACMARSLPTOKENPool.new(stringn4lebm3, stringjvrznIx, uinthilXKCH, {from: "0x0000000000000000000000000000000000000001"});
		const uintrWfEYgz = BigInt("541")
		const uintXXoZRTb = BigInt("672")
		const addressI02qsrh = accounts[5]
		await BACMARSLPTOKENPoolq6sKzd3.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256Wah4dyX = await BACMARSLPTOKENPoolq6sKzd3.notifyRewardAmount.call(uintrWfEYgz, {from: accounts[2]});
		await BACMARSLPTOKENPoolq6sKzd3.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256lshD9X7 = await BACMARSLPTOKENPoolq6sKzd3.withdraw.call(uintXXoZRTb, {from: accounts[4]});
		const addressob4bIl = await BACMARSLPTOKENPoolq6sKzd3.updateReward.call(addressI02qsrh, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringivyVlTm = "hunLIThoUdI6nubOvTs7wWkcv6onq1klL"
		const stringMTAmjm8 = "RJGUxPfzX0wV22"
		const uintEHfPBye = BigInt("155")
		const BACMARSLPTOKENPoolG0uNJ87 = await BACMARSLPTOKENPool.new(stringivyVlTm, stringMTAmjm8, uintEHfPBye, {from: accounts[1]});
		const uintUsq2TCz = BigInt("977")
		const uint8tnVkkoN = await BACMARSLPTOKENPoolG0uNJ87.decimals.call({from: accounts[4]});
		const uint256YcnL7WB = await BACMARSLPTOKENPoolG0uNJ87.stake.call(uintUsq2TCz, {from: accounts[1]});
		await BACMARSLPTOKENPoolG0uNJ87.getReward.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringt2Z7aR5 = "Qfuj9hDl190gLSLqMQKJVIVrZaP5QtNipBM7Kq2vp2k8oNjEOoi"
		const stringhSnP4RJ = "p7KrH1H5fZWDTEGFZBalMSzLQw5mYIhS4ZfnFpydFfWAt5SpNS331solZiCcOxQdqqSKmk1qc"
		const uintAYSvMK = BigInt("14")
		const BACMARSLPTOKENPoolvlp8uca = await BACMARSLPTOKENPool.new(stringt2Z7aR5, stringhSnP4RJ, uintAYSvMK, {from: accounts[4]});
		const byte0Q71aA = "0x0a1e170c181a110113100b0e0f1f1e101f1419160c0417191510071a0319081c"
		const byteipZehol = "0x0b1f1d121a18010710151c13130d0d14100f03041502140a191919040e1b161a"
		const uintP7ZJPBm = BigInt("31")
		const uintLOsu3J2 = BigInt("458")
		const uintRuNEn9 = BigInt("170")
		const byteAsWqfw7 = "0x1714021e200a070b021a11150f160f081b0a011509030e131e130a141a0e0f0d"
		const byteKb4LlSE = "0x08061c1d050d050005080410091404041b04071a161b0404110b0e1319190b1a"
		const uintdJOva2A = BigInt("244")
		const uintd5gxbdy = BigInt("44")
		const uintmg3E2cl = BigInt("1078")
		const uint256Ttj0kvS = await BACMARSLPTOKENPoolvlp8uca.stakeWithPermit.call(uintRuNEn9, uintLOsu3J2, uintP7ZJPBm, byteipZehol, byte0Q71aA, {from: accounts[5]});
		const uint256COd3wDa = await BACMARSLPTOKENPoolvlp8uca.stakeWithPermit.call(uintmg3E2cl, uintd5gxbdy, uintdJOva2A, byteKb4LlSE, byteAsWqfw7, {from: accounts[1]});
		await BACMARSLPTOKENPoolvlp8uca.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQON6xhl = "Cy00hKhLmXYxWSjtNECPGzsMSz5F2ck9xSvl4cvwad5XYrvykTx3xMVrqbyfrbXM7XR1YLPuebqu8efFlCgVKyEP"
		const stringr0MFpXS = "QEu4y"
		const uintIfk8Wpv = BigInt("177")
		const BACMARSLPTOKENPoolf0X8fQx = await BACMARSLPTOKENPool.new(stringQON6xhl, stringr0MFpXS, uintIfk8Wpv, {from: accounts[2]});
		const uint8AyxMe2I = await BACMARSLPTOKENPoolf0X8fQx.decimals.call({from: accounts[0]});
		const uint256Tf5gb0X = await BACMARSLPTOKENPoolf0X8fQx.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolf0X8fQx.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256G9OcmzM = await BACMARSLPTOKENPoolf0X8fQx.getRewardForDuration.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressytI6Hfv = accounts[0]
		const addressPoBX6oj = accounts[0]
		const addressO5t5ab = accounts[3]
		const BACMARSLPTOKENPoolVdOgegl = await BACMARSLPTOKENPool.new(addressytI6Hfv, addressPoBX6oj, addressO5t5ab, {from: "0x0000000000000000000000000000000000000001"});
		const uintFrINr9G = BigInt("1079")
		const uint256aoppaHA = await BACMARSLPTOKENPoolVdOgegl.rewardPerToken.call({from: accounts[4]});
		const uint256UOVX3v = await BACMARSLPTOKENPoolVdOgegl.stake.call(uintFrINr9G, {from: accounts[2]});
		const uint8bWPdiFS = await BACMARSLPTOKENPoolVdOgegl.decimals.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringp09l7Sj = "f7TF9yaJSZhmJ1eeWZK2wDtgaew6Dv265zbcaucXASRXQ6cj6zoCwoHiWCQ4jo5D1A4E12KzGgIWULh"
		const string02fl9m = "P6"
		const uintOtCRgN = BigInt("170")
		const BACMARSLPTOKENPoolJ11erPX = await BACMARSLPTOKENPool.new(stringp09l7Sj, string02fl9m, uintOtCRgN, {from: accounts[3]});
		const addressfy5ux0Z = accounts[1]
		const addressX7EzHQp = await BACMARSLPTOKENPoolJ11erPX.updateReward.call(addressfy5ux0Z, {from: accounts[4]});
		const stringiuLtbkA = await BACMARSLPTOKENPoolJ11erPX.name.call({from: accounts[4]});
		await BACMARSLPTOKENPoolJ11erPX.getReward.call({from: accounts[1]});
		const uint256wjhSKQf = await BACMARSLPTOKENPoolJ11erPX.lastTimeRewardApplicable.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringd5F4Oky = "HWnOh2syUEsWNgDNij8n"
		const stringiDXFMiY = "N8PhKYgWoIVvFtwWJavAyzuREshJcYgDO1nLZ39G34sYRWcfU7FEfMkuvECeDWi5ljTd7REtejfNTdD2HpwkwLKWQ"
		const uintRpZtvp = BigInt("33")
		const BACMARSLPTOKENPools3HUjiU = await BACMARSLPTOKENPool.new(stringd5F4Oky, stringiDXFMiY, uintRpZtvp, {from: accounts[4]});
		const uint256bIF4R3Y = await BACMARSLPTOKENPools3HUjiU.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256YpOlG5l = await BACMARSLPTOKENPools3HUjiU.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPools3HUjiU.nonReentrant.call({from: accounts[3]});
		await BACMARSLPTOKENPools3HUjiU.exit.call({from: accounts[2]});
		await BACMARSLPTOKENPools3HUjiU.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressDFB7tvQ = accounts[4]
		const addresspTWeFkR = accounts[5]
		const addressJS0mvOm = accounts[5]
		const BACMARSLPTOKENPoolmQymCzH = await BACMARSLPTOKENPool.new(addressDFB7tvQ, addresspTWeFkR, addressJS0mvOm, {from: accounts[0]});
		const addressCt5ZHtw = accounts[0]
		await BACMARSLPTOKENPoolmQymCzH.onlyRewardsDistribution.call({from: accounts[3]});
		await BACMARSLPTOKENPoolmQymCzH.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256G0yeSB = await BACMARSLPTOKENPoolmQymCzH.earned.call(addressCt5ZHtw, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolmQymCzH.getReward.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolmQymCzH.onlyRewardsDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressWA13L8D = accounts[2]
		const addressvodhwAO = accounts[1]
		const addressv3a4mWf = accounts[2]
		const BACMARSLPTOKENPoolN9GeAop = await BACMARSLPTOKENPool.new(addressWA13L8D, addressvodhwAO, addressv3a4mWf, {from: accounts[1]});
		const uintDwqSW8x = BigInt("1727")
		const uint256ra5C1L = await BACMARSLPTOKENPoolN9GeAop.totalSupply.call({from: accounts[4]});
		await BACMARSLPTOKENPoolN9GeAop.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256lbMOB7B = await BACMARSLPTOKENPoolN9GeAop.rewardPerToken.call({from: accounts[5]});
		const stringEvmJ7r2 = await BACMARSLPTOKENPoolN9GeAop.symbol.call({from: accounts[5]});
		const stringhfvQ7SJ = await BACMARSLPTOKENPoolN9GeAop.symbol.call({from: accounts[3]});
		const uint256xN1WZsv = await BACMARSLPTOKENPoolN9GeAop.withdraw.call(uintDwqSW8x, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ra5C1L, BigInt("0"))
		await expect(BACMARSLPTOKENPoolN9GeAop.onlyRewardsDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresssywyPyq = accounts[3]
		const addresscctkWFN = accounts[4]
		const addresswUUyouh = accounts[2]
		const BACMARSLPTOKENPooluV0omWF = await BACMARSLPTOKENPool.new(addresssywyPyq, addresscctkWFN, addresswUUyouh, {from: accounts[1]});
		const uintbC1DlS = BigInt("167")
		const bytekkWAO70 = "0x151b0d0012010b0a070a191d1d0e200a101f1417081403121f12100c0507040b"
		const bytejspmWu1 = "0x0905091d081e1f041b08051e1b1d0412120b11081d0c14110302031f1b0f2009"
		const uintB3ixnrS = BigInt("11")
		const uintEungM9a = BigInt("348")
		const uintJoUqeFZ = BigInt("1668")
		const addressbFyNNJN = accounts[5]
		const byteIECo6G = "0x090305191c001f1217200f0b001d1a1906141a091208030818161b1e09141b09"
		const byteMLsYN4H = "0x10131a08071a00080d11081411121f1912190c1b0f020320070d150b1202081e"
		const uintEkBFFWw = BigInt("204")
		const uintDA2BaVc = BigInt("1375")
		const uintknFxq2m = BigInt("106")
		const uintSffa6Go = BigInt("531")
		const uint256hydKdI8 = await BACMARSLPTOKENPooluV0omWF.withdraw.call(uintbC1DlS, {from: accounts[3]});
		const uint256VeXuxi3 = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintJoUqeFZ, uintEungM9a, uintB3ixnrS, bytejspmWu1, bytekkWAO70, {from: accounts[1]});
		const stringPwTT2U = await BACMARSLPTOKENPooluV0omWF.name.call({from: accounts[1]});
		const uint256moh4SQo = await BACMARSLPTOKENPooluV0omWF.earned.call(addressbFyNNJN, {from: accounts[0]});
		const uint256yXMTUo = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintknFxq2m, uintDA2BaVc, uintEkBFFWw, byteMLsYN4H, byteIECo6G, {from: accounts[4]});
		const uint256dYsiLn7 = await BACMARSLPTOKENPooluV0omWF.notifyRewardAmount.call(uintSffa6Go, {from: accounts[4]});

		await expect(BACMARSLPTOKENPooluV0omWF.withdraw.call(uintbC1DlS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiYDkxf = "1wTrUvktM6rFv5DhVjktNTLQYtrvHka3qNwNFNH6AQiXnPHDcKfdUPE1mCDYob1V1MYqw7rAN8xEAmR27tRSJJHxrjN1"
		const stringVpFHSxX = "1YloImBZM4RUxnDpcV5T8GKSQ2Gh6LQ9LkdM6dumdh3KviO08p095M2wT2P95c777RteIiW2m8M83TPLtVj"
		const uintcASbXnI = BigInt("252")
		const BACMARSLPTOKENPoolxA5tmBZ = await BACMARSLPTOKENPool.new(stringiYDkxf, stringVpFHSxX, uintcASbXnI, {from: accounts[3]});
		const uintcbX4Vej = BigInt("284")
		const uint256EFa4WA7 = await BACMARSLPTOKENPoolxA5tmBZ.stake.call(uintcbX4Vej, {from: accounts[4]});
		const stringvN10FrP = await BACMARSLPTOKENPoolxA5tmBZ.symbol.call({from: accounts[1]});
		const stringprdnuf = await BACMARSLPTOKENPoolxA5tmBZ.name.call({from: accounts[4]});
		const stringoE18ycZ = await BACMARSLPTOKENPoolxA5tmBZ.symbol.call({from: accounts[2]});
		const uint8iLxSWER = await BACMARSLPTOKENPoolxA5tmBZ.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringS0dRuyJ = "PfV7oIFrnm59FreulRxhmBfgzObI23EOf"
		const stringwnCpVc4 = "mgy34d4WsSO3LMolgLPpEroeqnORL6ejaACr7W56qk3vIdlcvxNVe5q"
		const uintdQ19808 = BigInt("187")
		const BACMARSLPTOKENPoolrq5gxv = await BACMARSLPTOKENPool.new(stringS0dRuyJ, stringwnCpVc4, uintdQ19808, {from: accounts[5]});
		const uintLZhmUL7 = BigInt("941")
		const addressCznIcmX = accounts[3]
		const uint256JfOybA = await BACMARSLPTOKENPoolrq5gxv.stake.call(uintLZhmUL7, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RlLGmiA = await BACMARSLPTOKENPoolrq5gxv.earned.call(addressCznIcmX, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressjotPdLI = accounts[0]
		const addressoJ67fU8 = "0x0000000000000000000000000000000000000001"
		const addressTPaohs = accounts[2]
		const BACMARSLPTOKENPoolLcgABbn = await BACMARSLPTOKENPool.new(addressjotPdLI, addressoJ67fU8, addressTPaohs, {from: accounts[0]});
		const uintBfCkqNN = BigInt("1895")
		const uint256XRe67u = await BACMARSLPTOKENPoolLcgABbn.stake.call(uintBfCkqNN, {from: accounts[4]});

		await expect(BACMARSLPTOKENPoolLcgABbn.stake.call(uintBfCkqNN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringFuH1Ir = "t7gXioPa"
		const stringUygb6BI = "L0gYeFDJQI8PirgZytNrrScU3FCf3QmJ51S7ajtT8bgLs1HwGYUvqXjuEwzdobuCChFuljOuSxjZvdBPf"
		const uintIdDtcpx = BigInt("126")
		const BACMARSLPTOKENPoolGw7ybyC = await BACMARSLPTOKENPool.new(stringFuH1Ir, stringUygb6BI, uintIdDtcpx, {from: accounts[0]});
		await BACMARSLPTOKENPoolGw7ybyC.nonReentrant.call({from: accounts[0]});
		await BACMARSLPTOKENPoolGw7ybyC.onlyRewardsDistribution.call({from: accounts[2]});
		await BACMARSLPTOKENPoolGw7ybyC.exit.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringvrqhXJ2 = "Yziuu4E4I4qdFm2tljleo4dpCs2zrAKKJeJzFPW"
		const stringgOZXXu = "wyTihXeiB6YXboKtgGyF1PqO3d3ToY"
		const uintaU43YL3 = BigInt("46")
		const BACMARSLPTOKENPoolTKfzzn0 = await BACMARSLPTOKENPool.new(stringvrqhXJ2, stringgOZXXu, uintaU43YL3, {from: accounts[5]});
		const addressn5fih07 = accounts[0]
		const byteEMQJgQ = "0x0d1a07191d02071115031e19080b0217171f161517140d111b11140906031401"
		const bytekTXMM9L = "0x1f151417120e08051b0b1b18130d101e1b101303141f0916170e171c03150c02"
		const uintjluPYPR = BigInt("1")
		const uintVyEcxgy = BigInt("1794")
		const uintS095Tyw = BigInt("1232")
		const uint256vIJzFVI = await BACMARSLPTOKENPoolTKfzzn0.earned.call(addressn5fih07, {from: accounts[3]});
		const stringCTeBxFZ = await BACMARSLPTOKENPoolTKfzzn0.symbol.call({from: accounts[2]});
		const uint256YSAJKlq = await BACMARSLPTOKENPoolTKfzzn0.stakeWithPermit.call(uintS095Tyw, uintVyEcxgy, uintjluPYPR, bytekTXMM9L, byteEMQJgQ, {from: accounts[3]});
		const stringg0SiiV3 = await BACMARSLPTOKENPoolTKfzzn0.symbol.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressl2LZb7 = accounts[0]
		const addressig3OXsx = "0x0000000000000000000000000000000000000001"
		const addressdqGfmu = accounts[2]
		const BACMARSLPTOKENPoolLcgABbn = await BACMARSLPTOKENPool.new(addressl2LZb7, addressig3OXsx, addressdqGfmu, {from: accounts[0]});
		const addressaLzomiG = "0x0000000000000000000000000000000000000001"
		const uintm9JMRSh = BigInt("1895")
		const uint256pEUWG0m = await BACMARSLPTOKENPoolLcgABbn.getRewardForDuration.call({from: accounts[2]});
		const uint256Hjevclf = await BACMARSLPTOKENPoolLcgABbn.earned.call(addressaLzomiG, {from: accounts[0]});
		const uint256XRe67u = await BACMARSLPTOKENPoolLcgABbn.stake.call(uintm9JMRSh, {from: accounts[4]});

		assert.equal(uint256Hjevclf, BigInt("0"))
		assert.equal(uint256pEUWG0m, BigInt("0"))
		await expect(BACMARSLPTOKENPoolLcgABbn.stake.call(uintm9JMRSh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbWGUo6V = "LERot70vbe9QIa4mFpfJ1snq"
		const stringxPmCMtD = "UAyudN3xgDVo5G0FnSdObdr9GVxCXvp3tD6DVV9vLQgz5s125lIoVUi2iJwC8"
		const uintuHv3GO5 = BigInt("106")
		const BACMARSLPTOKENPoolodrluW0 = await BACMARSLPTOKENPool.new(stringbWGUo6V, stringxPmCMtD, uintuHv3GO5, {from: accounts[0]});
		const uint256UJAGUc = await BACMARSLPTOKENPoolodrluW0.rewardPerToken.call({from: accounts[0]});
		const string37ygqS = await BACMARSLPTOKENPoolodrluW0.symbol.call({from: accounts[2]});
		const uint256JVz4cJA = await BACMARSLPTOKENPoolodrluW0.lastTimeRewardApplicable.call({from: accounts[4]});
		await BACMARSLPTOKENPoolodrluW0.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressq1kqyKB = accounts[0]
		const addressOh3izmM = "0x0000000000000000000000000000000000000001"
		const addressm4X4sDh = accounts[2]
		const BACMARSLPTOKENPoolLcgABbn = await BACMARSLPTOKENPool.new(addressq1kqyKB, addressOh3izmM, addressm4X4sDh, {from: accounts[0]});
		const uintLC2RVbL = BigInt("1872")
		const addressborr88w = "0x0000000000000000000000000000000000000001"
		const uint256ht6Z86f = await BACMARSLPTOKENPoolLcgABbn.getRewardForDuration.call({from: accounts[2]});
		const uint256vNTznY9 = await BACMARSLPTOKENPoolLcgABbn.notifyRewardAmount.call(uintLC2RVbL, {from: accounts[1]});
		const uint256pEUWG0m = await BACMARSLPTOKENPoolLcgABbn.getRewardForDuration.call({from: accounts[2]});
		const uint256Hjevclf = await BACMARSLPTOKENPoolLcgABbn.earned.call(addressborr88w, {from: accounts[0]});

		assert.equal(uint256ht6Z86f, BigInt("0"))
		await expect(BACMARSLPTOKENPoolLcgABbn.notifyRewardAmount.call(uintLC2RVbL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEB6IWa0 = "ZlqoNBMxwzY05T79fTQRiIbx1RSgHYA8RGnNsQAFg4wz8o"
		const stringSsJFOdH = "9Whwbox1HDWS3qHGwyxq0EKpmIxhOuuTz1Kz8M8MbkyfStSyvTAj"
		const uintKDwfRzf = BigInt("72")
		const BACMARSLPTOKENPoolpLlglOU = await BACMARSLPTOKENPool.new(stringEB6IWa0, stringSsJFOdH, uintKDwfRzf, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolpLlglOU.exit.call({from: accounts[1]});
		await BACMARSLPTOKENPoolpLlglOU.nonReentrant.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEQLHt6g = "iUIcE45luRBLGV2v79f9dvA1p"
		const stringOowNTt0 = "8"
		const uintAcZz5tm = BigInt("155")
		const BACMARSLPTOKENPoolaQVsYr1 = await BACMARSLPTOKENPool.new(stringEQLHt6g, stringOowNTt0, uintAcZz5tm, {from: accounts[1]});
		const uintqsxRMSH = BigInt("554")
		const addressPNiMcKq = accounts[1]
		const uintUCYoGR = BigInt("706")
		const uint256AJzea1K = await BACMARSLPTOKENPoolaQVsYr1.stake.call(uintqsxRMSH, {from: "0x0000000000000000000000000000000000000001"});
		const uint8G0tX86O = await BACMARSLPTOKENPoolaQVsYr1.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256IGfxBb3 = await BACMARSLPTOKENPoolaQVsYr1.earned.call(addressPNiMcKq, {from: accounts[0]});
		const uint256PEMhDYm = await BACMARSLPTOKENPoolaQVsYr1.notifyRewardAmount.call(uintUCYoGR, {from: accounts[4]});
		const uint256u5Fu7N7 = await BACMARSLPTOKENPoolaQVsYr1.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressHDwsvf2 = accounts[0]
		const addressg6HPWCn = "0x0000000000000000000000000000000000000001"
		const addressyJLSIPY = accounts[2]
		const BACMARSLPTOKENPoolLcgABbn = await BACMARSLPTOKENPool.new(addressHDwsvf2, addressg6HPWCn, addressyJLSIPY, {from: accounts[0]});
		const addressjQYXrfu = accounts[0]
		const uintyd5coHW = BigInt("1847")
		const uint256OJmhnWz = await BACMARSLPTOKENPoolLcgABbn.balanceOf.call(addressjQYXrfu, {from: accounts[1]});
		const uint256FeXRJDl = await BACMARSLPTOKENPoolLcgABbn.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256cKvvzEF = await BACMARSLPTOKENPoolLcgABbn.totalSupply.call({from: accounts[4]});
		const uint256XRe67u = await BACMARSLPTOKENPoolLcgABbn.stake.call(uintyd5coHW, {from: accounts[4]});

		assert.equal(uint256FeXRJDl, BigInt("0"))
		assert.equal(uint256OJmhnWz, BigInt("0"))
		assert.equal(uint256cKvvzEF, BigInt("0"))
		await expect(BACMARSLPTOKENPoolLcgABbn.stake.call(uintyd5coHW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgfee5G = "8yTGqW16GVVgshJWo86RW1NUagjrWIgaV3IICFHFikoAtGgqs5dBwp1FIq"
		const stringIcCS0n5 = "9p7zqcNwy2yfOWU6fBCKrr714NxodIQmBmJXN4EoRpjK5hr4JP4bYF2sru1tH"
		const uintqdnIzRQ = BigInt("165")
		const BACMARSLPTOKENPoolkhe1bi3 = await BACMARSLPTOKENPool.new(stringgfee5G, stringIcCS0n5, uintqdnIzRQ, {from: accounts[3]});
		const addressgfQiRgL = "0x0000000000000000000000000000000000000001"
		const uint256leH6XHW = await BACMARSLPTOKENPoolkhe1bi3.balanceOf.call(addressgfQiRgL, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolkhe1bi3.getReward.call({from: accounts[4]});
		const uint256eY0MdeC = await BACMARSLPTOKENPoolkhe1bi3.rewardPerToken.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressho3euS = accounts[0]
		const addressIu2vdna = "0x0000000000000000000000000000000000000001"
		const addressEJFeEGX = accounts[2]
		const BACMARSLPTOKENPoolLcgABbn = await BACMARSLPTOKENPool.new(addressho3euS, addressIu2vdna, addressEJFeEGX, {from: accounts[0]});
		const uintWufhnNd = BigInt("1902")
		await BACMARSLPTOKENPoolLcgABbn.exit.call({from: accounts[3]});
		const uint256XRe67u = await BACMARSLPTOKENPoolLcgABbn.stake.call(uintWufhnNd, {from: accounts[4]});
		const uint8NCaK5v = await BACMARSLPTOKENPoolLcgABbn.decimals.call({from: accounts[3]});
		const uint256M7H7u0 = await BACMARSLPTOKENPoolLcgABbn.totalSupply.call({from: accounts[0]});
		await BACMARSLPTOKENPoolLcgABbn.nonReentrant.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolLcgABbn.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresslrZUn00 = accounts[0]
		const addressl1QzTO5 = "0x0000000000000000000000000000000000000001"
		const addressDulBluM = accounts[2]
		const BACMARSLPTOKENPoolLcgABbn = await BACMARSLPTOKENPool.new(addresslrZUn00, addressl1QzTO5, addressDulBluM, {from: accounts[0]});
		const addresst6wqn3I = "0x0000000000000000000000000000000000000001"
		const uintn98dJ7V = BigInt("1090")
		const uintzrcmLMv = BigInt("1895")
		const uint256pEUWG0m = await BACMARSLPTOKENPoolLcgABbn.getRewardForDuration.call({from: accounts[2]});
		const uint256Hjevclf = await BACMARSLPTOKENPoolLcgABbn.earned.call(addresst6wqn3I, {from: accounts[0]});
		const uint256Xn7WpvI = await BACMARSLPTOKENPoolLcgABbn.notifyRewardAmount.call(uintn98dJ7V, {from: accounts[0]});
		const uint256XRe67u = await BACMARSLPTOKENPoolLcgABbn.stake.call(uintzrcmLMv, {from: accounts[4]});

		assert.equal(uint256Hjevclf, BigInt("0"))
		assert.equal(uint256pEUWG0m, BigInt("0"))
		await expect(BACMARSLPTOKENPoolLcgABbn.notifyRewardAmount.call(uintn98dJ7V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringRHN9mAi = "1EIQyP9Wdp3rYv6Rt1JwIEx5XIaFJGubTuciKMWmKEermd1g32z2b1cGn1Jbhv"
		const stringwUdZAv = "ap3CuJ92KEE04RxxzvwYtvGVsQ6s6QkEtYROJEqkUICU4joyx6wDftSVBAYefw3MTTPRLs3A1"
		const uintmfeRF6I = BigInt("94")
		const BACMARSLPTOKENPoolRsm9pr5 = await BACMARSLPTOKENPool.new(stringRHN9mAi, stringwUdZAv, uintmfeRF6I, {from: accounts[2]});
		const uinturyov8k = BigInt("338")
		const uint256EAI0Hg9 = await BACMARSLPTOKENPoolRsm9pr5.totalSupply.call({from: accounts[4]});
		const uint8CVmKT5 = await BACMARSLPTOKENPoolRsm9pr5.decimals.call({from: accounts[0]});
		const uint256cXixoyZ = await BACMARSLPTOKENPoolRsm9pr5.notifyRewardAmount.call(uinturyov8k, {from: accounts[4]});
		const stringRR0eSH8 = await BACMARSLPTOKENPoolRsm9pr5.name.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressOkaMgDy = accounts[0]
		const addresso7wVqYX = "0x0000000000000000000000000000000000000001"
		const addressf9XktLo = accounts[2]
		const BACMARSLPTOKENPoolLcgABbn = await BACMARSLPTOKENPool.new(addressOkaMgDy, addresso7wVqYX, addressf9XktLo, {from: accounts[0]});
		const addressPyNJFBy = "0x0000000000000000000000000000000000000001"
		const uintfh66pm3 = BigInt("182")
		await BACMARSLPTOKENPoolLcgABbn.getReward.call({from: accounts[2]});
		const uint256IKYHn2v = await BACMARSLPTOKENPoolLcgABbn.rewardPerToken.call({from: accounts[5]});
		const uint256FuwDh5e = await BACMARSLPTOKENPoolLcgABbn.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256W2dLn5h = await BACMARSLPTOKENPoolLcgABbn.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256ocrK3w2 = await BACMARSLPTOKENPoolLcgABbn.balanceOf.call(addressPyNJFBy, {from: accounts[0]});
		const uint256w0rQpZ7 = await BACMARSLPTOKENPoolLcgABbn.stake.call(uintfh66pm3, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolLcgABbn.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqO1Jdob = "KTnn1B1KtCqGBCujciv08V6MBd7PkmcnbMvjAriqAGLMD"
		const stringjLLIJ4E = "GYkzeGUEgH4OqMwWIh5vOgQOoNge4y"
		const uintebYfIiY = BigInt("11")
		const BACMARSLPTOKENPoolqcbZ6kx = await BACMARSLPTOKENPool.new(stringqO1Jdob, stringjLLIJ4E, uintebYfIiY, {from: accounts[3]});
		const uint8hTLJlnV = await BACMARSLPTOKENPoolqcbZ6kx.decimals.call({from: accounts[0]});
		await BACMARSLPTOKENPoolqcbZ6kx.exit.call({from: accounts[3]});
		await BACMARSLPTOKENPoolqcbZ6kx.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string3Vw8Mu = "QHcTe0SzvqCpuLNgCcOAjSiLIN7uIKYLinSWOocHlj5is4O7DiTn5l6PNee3FkpOxCNTyqjt"
		const stringrTRhbhJ = "BoxgQpwPQsCrYu7zmnTOVNwacbMgYpUSX8f9ctYEsQMP"
		const uintxWw7vAX = BigInt("126")
		const BACMARSLPTOKENPoolcCiCtrt = await BACMARSLPTOKENPool.new(string3Vw8Mu, stringrTRhbhJ, uintxWw7vAX, {from: accounts[1]});
		const uintcyhRvB4 = BigInt("1997")
		const addressPsvReCJ = accounts[3]
		const stringhgd8nUe = await BACMARSLPTOKENPoolcCiCtrt.symbol.call({from: accounts[2]});
		const uint8H75OlCD = await BACMARSLPTOKENPoolcCiCtrt.decimals.call({from: accounts[0]});
		const uint256ugxTn69 = await BACMARSLPTOKENPoolcCiCtrt.notifyRewardAmount.call(uintcyhRvB4, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolcCiCtrt.nonReentrant.call({from: accounts[0]});
		const uint256ExXr3kN = await BACMARSLPTOKENPoolcCiCtrt.earned.call(addressPsvReCJ, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringz23rRM6 = "FxXW1blzkRB5uPcA0C"
		const stringWe2sb0H = "BXRklt7HMiCf"
		const uinto7PJ6eU = BigInt("81")
		const BACMARSLPTOKENPoolC50qwmH = await BACMARSLPTOKENPool.new(stringz23rRM6, stringWe2sb0H, uinto7PJ6eU, {from: accounts[1]});
		const uint256m3gtNHF = await BACMARSLPTOKENPoolC50qwmH.rewardPerToken.call({from: accounts[2]});
		const uint256yeVB5OG = await BACMARSLPTOKENPoolC50qwmH.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPoolC50qwmH.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringh9zxUZP = "k3I2XCkmQQiPnGJOBfYHTlT3iakGiECUDUWeHt4CFyR5YbknGcUKjUWCz8zHFdqJqEzEPtUXy"
		const stringMtqEWE = "IrsLSRQx3Pl2a5KvzCiWaJGnYYQ23l9RZfo8Qx6aXOSM9XFlexDEc8q3sLaeHDls"
		const uintQHiU7Jc = BigInt("227")
		const BACMARSLPTOKENPoolaMFpxvi = await BACMARSLPTOKENPool.new(stringh9zxUZP, stringMtqEWE, uintQHiU7Jc, {from: accounts[0]});
		const addressQCn8gn = accounts[1]
		const addressLEAvT9I = accounts[1]
		const uintnBierWy = BigInt("1560")
		const uint256jJNGKD8 = await BACMARSLPTOKENPoolaMFpxvi.rewardPerToken.call({from: accounts[4]});
		const uint256TBXHqm = await BACMARSLPTOKENPoolaMFpxvi.totalSupply.call({from: accounts[1]});
		const uint256sTEZq4I = await BACMARSLPTOKENPoolaMFpxvi.balanceOf.call(addressQCn8gn, {from: accounts[3]});
		const uint256li7dMaL = await BACMARSLPTOKENPoolaMFpxvi.earned.call(addressLEAvT9I, {from: accounts[3]});
		const uint256chiEQmP = await BACMARSLPTOKENPoolaMFpxvi.notifyRewardAmount.call(uintnBierWy, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfdQjVxf = "SzBv7cn4cdmWoKEgvCKllcX5r5V51"
		const stringeyhwzQ = "SO4acT6aPW363keox133zT9k3sqdXnpiBUcR3hOe8dYPpgYjwrs5F"
		const uintamymj6Q = BigInt("32")
		const BACMARSLPTOKENPoolnxHHGGg = await BACMARSLPTOKENPool.new(stringfdQjVxf, stringeyhwzQ, uintamymj6Q, {from: "0x0000000000000000000000000000000000000001"});
		const addressxNfpZ9u = accounts[5]
		const uintI426sqa = BigInt("1372")
		const uintlbEL4do = BigInt("341")
		const uint256cG27pTM = await BACMARSLPTOKENPoolnxHHGGg.balanceOf.call(addressxNfpZ9u, {from: accounts[2]});
		const uint256gsBRzj = await BACMARSLPTOKENPoolnxHHGGg.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256DCtptER = await BACMARSLPTOKENPoolnxHHGGg.rewardPerToken.call({from: accounts[2]});
		const uint256BDLUmHS = await BACMARSLPTOKENPoolnxHHGGg.withdraw.call(uintI426sqa, {from: accounts[1]});
		const uint256tbF7PhS = await BACMARSLPTOKENPoolnxHHGGg.withdraw.call(uintlbEL4do, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkLyqBZ1 = "MnhBe7jAQLHosiLoKQsGQVJ8NmbclEjmNQlAR3WGIWdLubXlG5jgLTiLKHFgI7QDIXfVrvOQiVjdzCM2iG25tdoyV5lsrqB"
		const stringUGt2fjH = "KnMJTyKz1UUzdVvA3PzWX28Hn9JYYaxPBKednWuA2hQUAnke1P"
		const uintGfu9yA8 = BigInt("142")
		const BACMARSLPTOKENPoolm1ezHAt = await BACMARSLPTOKENPool.new(stringkLyqBZ1, stringUGt2fjH, uintGfu9yA8, {from: accounts[3]});
		const addressALsJwy9 = accounts[3]
		const stringj005548 = await BACMARSLPTOKENPoolm1ezHAt.name.call({from: accounts[1]});
		await BACMARSLPTOKENPoolm1ezHAt.getReward.call({from: accounts[4]});
		const addresse5d7D7F = await BACMARSLPTOKENPoolm1ezHAt.updateReward.call(addressALsJwy9, {from: accounts[3]});
		const uint8YiLjLuP = await BACMARSLPTOKENPoolm1ezHAt.decimals.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPNpXC6l = "CgvPKnD2JoYClcQBRKuPqa6EcAb1J1TEfTU0DjnxNMin4zeN0TVeP6HC1FL"
		const stringtXvKQjH = "eUJMLJtAJaj8DqIWjQ69cw61PXj7JBQeW1TmRU93sJ"
		const uint5NMFkm = BigInt("12")
		const BACMARSLPTOKENPoolWKCo0oS = await BACMARSLPTOKENPool.new(stringPNpXC6l, stringtXvKQjH, uint5NMFkm, {from: accounts[0]});
		const addressAPmjRoE = accounts[5]
		const addressjwf16aA = accounts[5]
		const uint256amSQhl = await BACMARSLPTOKENPoolWKCo0oS.balanceOf.call(addressAPmjRoE, {from: accounts[4]});
		await BACMARSLPTOKENPoolWKCo0oS.nonReentrant.call({from: accounts[2]});
		const addressenhcoPX = await BACMARSLPTOKENPoolWKCo0oS.updateReward.call(addressjwf16aA, {from: accounts[4]});
		await BACMARSLPTOKENPoolWKCo0oS.nonReentrant.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringT2pxHIe = "MQ6qjftTWi9J48A3jlst1E6P4"
		const stringRFwK0rg = "QTpddFwtKftrDA2oe8IQcdRefPedQFXdGQrNDzl"
		const uintmBTdvH = BigInt("229")
		const BACMARSLPTOKENPoolnOGxxQj = await BACMARSLPTOKENPool.new(stringT2pxHIe, stringRFwK0rg, uintmBTdvH, {from: accounts[2]});
		const uintcHtDlyn = BigInt("1855")
		const addressD6nl9xb = accounts[0]
		const uint256vDU6j3I = await BACMARSLPTOKENPoolnOGxxQj.withdraw.call(uintcHtDlyn, {from: accounts[4]});
		const uint256SwNjEU8 = await BACMARSLPTOKENPoolnOGxxQj.balanceOf.call(addressD6nl9xb, {from: accounts[3]});
		await BACMARSLPTOKENPoolnOGxxQj.exit.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringHq6jUvr = "rzKUvXSsd1IH3izxG5lQCjCq4"
		const stringepbs9du = "wIP6YP831LRdqr"
		const uintWmLIlmF = BigInt("29")
		const BACMARSLPTOKENPoolXbgq5bk = await BACMARSLPTOKENPool.new(stringHq6jUvr, stringepbs9du, uintWmLIlmF, {from: accounts[2]});
		const byteUnCbEHX = "0x041d1310100918090d1515101f0f071902150318101c1a130d150d1810111209"
		const byteQFDtTpJ = "0x0716121c151f19131f170e0002041716201f190e110b0e0d1c09040314192007"
		const uintMeTDim = BigInt("136")
		const uintzzPrBGL = BigInt("1352")
		const uintAhcCysP = BigInt("674")
		const bytewsf0nSJ = "0x14051e0a120a101104020f0402060d1d02071a110d19010c201e1d1f08121311"
		const bytepnh3gFH = "0x1b030b0f190b010c1112040506180f0c1d030b15131c0b0f1d07001603170c02"
		const uintblhrKP6 = BigInt("102")
		const uintvYiuAab = BigInt("674")
		const uintMhRQGFd = BigInt("1261")
		const addressmvGeZid = accounts[3]
		const uint256S08UthU = await BACMARSLPTOKENPoolXbgq5bk.stakeWithPermit.call(uintAhcCysP, uintzzPrBGL, uintMeTDim, byteQFDtTpJ, byteUnCbEHX, {from: accounts[4]});
		const uint256UbY81yT = await BACMARSLPTOKENPoolXbgq5bk.stakeWithPermit.call(uintMhRQGFd, uintvYiuAab, uintblhrKP6, bytepnh3gFH, bytewsf0nSJ, {from: accounts[1]});
		await BACMARSLPTOKENPoolXbgq5bk.getReward.call({from: accounts[3]});
		const stringWwyiPHk = await BACMARSLPTOKENPoolXbgq5bk.symbol.call({from: accounts[1]});
		const uint256kzKNC8Y = await BACMARSLPTOKENPoolXbgq5bk.earned.call(addressmvGeZid, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringpvCoAVw = "sa8G"
		const stringrMSKSJq = "VRMoxYiN8lWzXO113RCYps3blQ29bjPXKdRAm5BXr5jlqbA2GSihPQ17ucO7WXJ8QRsisFH7"
		const uintxik8Kr8 = BigInt("188")
		const BACMARSLPTOKENPoolJrUw2Mr = await BACMARSLPTOKENPool.new(stringpvCoAVw, stringrMSKSJq, uintxik8Kr8, {from: accounts[1]});
		const addressAkiUdJC = accounts[5]
		const uint256ZWXBequ = await BACMARSLPTOKENPoolJrUw2Mr.getRewardForDuration.call({from: accounts[1]});
		const uint256HHD0ocN = await BACMARSLPTOKENPoolJrUw2Mr.earned.call(addressAkiUdJC, {from: accounts[3]});
		await BACMARSLPTOKENPoolJrUw2Mr.onlyRewardsDistribution.call({from: accounts[0]});
		const uint8VoVuRc5 = await BACMARSLPTOKENPoolJrUw2Mr.decimals.call({from: accounts[3]});
		await BACMARSLPTOKENPoolJrUw2Mr.nonReentrant.call({from: accounts[0]});
		await BACMARSLPTOKENPoolJrUw2Mr.onlyRewardsDistribution.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringMtHhRon = "QHTJC2dQhcGEmqRhI5XSa5KrjoeMaDGVaaju9jy6VhBgE9tdB6Vq5MjfC27AmaFNMIsTU69CDfcPy5"
		const stringeSHYkL = "UhWntWxi7JSxZ6TCYzf7ZiG9gB47zOLlKffze65GDjnd39J8jWV5EuCcPzPyJZ4cA5HepktecAtfCh2b7qEjc"
		const uintvXblO3 = BigInt("113")
		const BACMARSLPTOKENPoolKxSObU = await BACMARSLPTOKENPool.new(stringMtHhRon, stringeSHYkL, uintvXblO3, {from: accounts[0]});
		const uintXY8PT9 = BigInt("1578")
		const byteBpqDYt0 = "0x1f0214151b0b1a0d1a0417081709151b130c06020b001b06011e030505141f1c"
		const byteczbgF9 = "0x001504010f181d04000c110e01020e0300040f0b150b111e020c1b0d0a1f1e00"
		const uintgkONCaa = BigInt("148")
		const uintJLpKPu6 = BigInt("1449")
		const uintAxzI67u = BigInt("1320")
		const uint256TXwwX3O = await BACMARSLPTOKENPoolKxSObU.stake.call(uintXY8PT9, {from: accounts[1]});
		const uint256EMUoeRt = await BACMARSLPTOKENPoolKxSObU.stakeWithPermit.call(uintAxzI67u, uintJLpKPu6, uintgkONCaa, byteczbgF9, byteBpqDYt0, {from: accounts[3]});
		const uint256FO7pW95 = await BACMARSLPTOKENPoolKxSObU.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolKxSObU.exit.call({from: accounts[3]});
		const uint256ohTsIZR = await BACMARSLPTOKENPoolKxSObU.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringLPgkH9R = "w2aLVH"
		const stringy6ggUYf = "0eM2Qo08qKZGOjFP8wrCj7VCxbWAX5L9hVc64pXMyJhiYE3zcZNMWxL9tlhZzNWtyY3z9"
		const uintIy9pr6Y = BigInt("203")
		const BACMARSLPTOKENPoolmamDpf = await BACMARSLPTOKENPool.new(stringLPgkH9R, stringy6ggUYf, uintIy9pr6Y, {from: "0x0000000000000000000000000000000000000001"});
		const addresswlMre59 = accounts[0]
		const addressVhYTVDM = accounts[2]
		const addressTJeahlL = accounts[4]
		const uint256dhEyo69 = await BACMARSLPTOKENPoolmamDpf.rewardPerToken.call({from: accounts[1]});
		const uint256icCUnxF = await BACMARSLPTOKENPoolmamDpf.balanceOf.call(addresswlMre59, {from: accounts[5]});
		const uint256UwH4VQf = await BACMARSLPTOKENPoolmamDpf.balanceOf.call(addressVhYTVDM, {from: accounts[3]});
		const uint256xFHQsyg = await BACMARSLPTOKENPoolmamDpf.balanceOf.call(addressTJeahlL, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringX9RVfx = "YjYnuHKiZ"
		const stringFrhuMxN = "3Vb1pLs4wA3AJpWHCdCcB9MIknRQvv2JLV6jpHOCfEB"
		const uintdO681xt = BigInt("9")
		const BACMARSLPTOKENPoolMJHeQi7 = await BACMARSLPTOKENPool.new(stringX9RVfx, stringFrhuMxN, uintdO681xt, {from: accounts[4]});
		const uintEuXPXCV = BigInt("455")
		const uintABVLL5G = BigInt("575")
		const addressP4FOWJ5 = accounts[1]
		const uint256jcrlE6L = await BACMARSLPTOKENPoolMJHeQi7.notifyRewardAmount.call(uintEuXPXCV, {from: accounts[3]});
		const uint256f8mJ2B = await BACMARSLPTOKENPoolMJHeQi7.withdraw.call(uintABVLL5G, {from: accounts[5]});
		const uint256rYhaCLX = await BACMARSLPTOKENPoolMJHeQi7.getRewardForDuration.call({from: accounts[3]});
		const uint256LXlRJ41 = await BACMARSLPTOKENPoolMJHeQi7.earned.call(addressP4FOWJ5, {from: accounts[4]});
		const uint25683oXLX = await BACMARSLPTOKENPoolMJHeQi7.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringlA3u0H = "bey1AroC6xVftW0LUK6r51KhgpJEg9xHa"
		const stringqKoR8Yl = "oKbAr9mq15i9c1uajniMiVr"
		const uintoCW6qSj = BigInt("215")
		const BACMARSLPTOKENPoolRySSzUA = await BACMARSLPTOKENPool.new(stringlA3u0H, stringqKoR8Yl, uintoCW6qSj, {from: accounts[0]});
		await BACMARSLPTOKENPoolRySSzUA.getReward.call({from: accounts[2]});
		const uint256bI2pqGt = await BACMARSLPTOKENPoolRySSzUA.rewardPerToken.call({from: accounts[2]});
		const uint256Sv6G0vs = await BACMARSLPTOKENPoolRySSzUA.getRewardForDuration.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgEkfgxe = "2ipGFQrwv55AQ"
		const stringWLHoTZ9 = "uERsZk41xyZTIlUfeq7RZoJg9J"
		const uintqwQnw5c = BigInt("110")
		const BACMARSLPTOKENPoolgJBc7Wn = await BACMARSLPTOKENPool.new(stringgEkfgxe, stringWLHoTZ9, uintqwQnw5c, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolgJBc7Wn.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256l2MQxqn = await BACMARSLPTOKENPoolgJBc7Wn.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolgJBc7Wn.onlyRewardsDistribution.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringg1ai9VC = "Nbx6WnpCK9Pn40p3mWMgYiLrnGKMzYWDfCYPmpzgcxy3TZ"
		const stringkBf0SyH = "EKwIwfwMu7isAIz8JlI8OU12mbv8yYHNarPiXCokoSgeOO6YQA2gHAw38Bjwk1MGRU1E4us"
		const uintmpjC4Sn = BigInt("236")
		const BACMARSLPTOKENPoolDs74vNv = await BACMARSLPTOKENPool.new(stringg1ai9VC, stringkBf0SyH, uintmpjC4Sn, {from: accounts[5]});
		const uintHjQ6rVW = BigInt("925")
		await BACMARSLPTOKENPoolDs74vNv.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256u06fldx = await BACMARSLPTOKENPoolDs74vNv.withdraw.call(uintHjQ6rVW, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTOGMtNh = "qgfQkfz65c5fKxKo2c5Q"
		const stringdVy8nuu = "9tRUfxIaAnolzrM9ygmEB6I7i1LMLR9jf6ui7XIkhipyYtiw2YNG2K7SpVisNWxzJj6m1VPoHoJQYte2zfC4"
		const uintUZo2e27 = BigInt("67")
		const BACMARSLPTOKENPoolyMLuCyI = await BACMARSLPTOKENPool.new(stringTOGMtNh, stringdVy8nuu, uintUZo2e27, {from: accounts[0]});
		const uintEAw8U0y = BigInt("1328")
		const addressUELe1a = accounts[3]
		const addressUscIUq0 = accounts[2]
		const addressUpFI4pX = accounts[1]
		const uint256gucwQb1 = await BACMARSLPTOKENPoolyMLuCyI.totalSupply.call({from: accounts[4]});
		const uint256fUMjZoZ = await BACMARSLPTOKENPoolyMLuCyI.withdraw.call(uintEAw8U0y, {from: accounts[3]});
		const uint256Hqqmwy = await BACMARSLPTOKENPoolyMLuCyI.balanceOf.call(addressUELe1a, {from: accounts[4]});
		const uint256c5Bx60 = await BACMARSLPTOKENPoolyMLuCyI.earned.call(addressUscIUq0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pNEDkp = await BACMARSLPTOKENPoolyMLuCyI.earned.call(addressUpFI4pX, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJLrKIwQ = "ojWwh3ICk"
		const string4MDNhR = "Tww9wxs2dS"
		const uintQeWd5Kb = BigInt("102")
		const BACMARSLPTOKENPoolfCP3XOV = await BACMARSLPTOKENPool.new(stringJLrKIwQ, string4MDNhR, uintQeWd5Kb, {from: accounts[0]});
		const uint256LNbE57r = await BACMARSLPTOKENPoolfCP3XOV.rewardPerToken.call({from: accounts[4]});
		const uint256NtRDIXV = await BACMARSLPTOKENPoolfCP3XOV.totalSupply.call({from: accounts[3]});
		await BACMARSLPTOKENPoolfCP3XOV.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringX9l36if = "KBHJw6rgIAmn"
		const stringozlH0e = "DwO7llxx1mRX1Suu44rMVc1J66"
		const uintmGRkkOM = BigInt("241")
		const BACMARSLPTOKENPooln2j30Hl = await BACMARSLPTOKENPool.new(stringX9l36if, stringozlH0e, uintmGRkkOM, {from: accounts[0]});
		const uintC4XySS = BigInt("1105")
		const uintfqUoPVA = BigInt("291")
		const addressnq56jQW = accounts[2]
		const uint256WTbtDI = await BACMARSLPTOKENPooln2j30Hl.notifyRewardAmount.call(uintC4XySS, {from: "0x0000000000000000000000000000000000000001"});
		const uint256tsw7ksq = await BACMARSLPTOKENPooln2j30Hl.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPooln2j30Hl.getReward.call({from: accounts[4]});
		const uint256OFKLiz = await BACMARSLPTOKENPooln2j30Hl.withdraw.call(uintfqUoPVA, {from: accounts[3]});
		await BACMARSLPTOKENPooln2j30Hl.onlyRewardsDistribution.call({from: accounts[0]});
		const uint256VWNcTLe = await BACMARSLPTOKENPooln2j30Hl.earned.call(addressnq56jQW, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhFLUrVb = "UVOAMPMkhSLM54Pi33UMhDwCKWjrNaeo1hUxQ9IEXyLvp3ynBVEaXy2eg7xo6ChrvCZKNToQpCyAffscszr6j4wsjCPtjC5Fw"
		const stringDXjpMo8 = "Tb9e0ceKv8C21WQtCKgnFuOu7YryUmEG"
		const uintlxN8mr = BigInt("250")
		const BACMARSLPTOKENPoolOn5jGS8 = await BACMARSLPTOKENPool.new(stringhFLUrVb, stringDXjpMo8, uintlxN8mr, {from: accounts[4]});
		const uintm7kzGkp = BigInt("1576")
		const uint256PsAjlCT = await BACMARSLPTOKENPoolOn5jGS8.notifyRewardAmount.call(uintm7kzGkp, {from: accounts[3]});
		const uint256I85iiA = await BACMARSLPTOKENPoolOn5jGS8.lastTimeRewardApplicable.call({from: accounts[2]});
		await BACMARSLPTOKENPoolOn5jGS8.exit.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringUqEuGjf = "9C5Jr1UCWXhCbOzkXXYYfE2TtJJg3SrDaCjNq4y9srx8"
		const stringvZyDerF = "WDuQq"
		const uinty5NrjHz = BigInt("232")
		const BACMARSLPTOKENPoolzP5vSvG = await BACMARSLPTOKENPool.new(stringUqEuGjf, stringvZyDerF, uinty5NrjHz, {from: accounts[1]});
		const uintVdjrRCb = BigInt("559")
		const uint256Nk2YOCH = await BACMARSLPTOKENPoolzP5vSvG.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256MmWoC7X = await BACMARSLPTOKENPoolzP5vSvG.notifyRewardAmount.call(uintVdjrRCb, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringYIstxp4 = "w3qVBo7Gbtf1cVtvOQYP6rpHJVH92EuwdBHuPBTPuNwEwLmy3mpL"
		const stringIcSFKZi = "pJgzTGqpxgIr2gq"
		const uintXhjPUVB = BigInt("161")
		const BACMARSLPTOKENPoolFVLqby9 = await BACMARSLPTOKENPool.new(stringYIstxp4, stringIcSFKZi, uintXhjPUVB, {from: accounts[2]});
		const byteHB3VUyU = "0x0c03090109170705041115021e1d1812151918131a0f1d0314020920101f0100"
		const bytekylY33S = "0x0c091b12141d1d1b07081b131b0a140a141920121815011804060e0f1c0b1f0b"
		const uint9D2Q4S = BigInt("155")
		const uintYnrzE4 = BigInt("171")
		const uintAEVgEeh = BigInt("1462")
		const addressEpkEpFv = accounts[1]
		const uint256Xogyk8 = await BACMARSLPTOKENPoolFVLqby9.stakeWithPermit.call(uintAEVgEeh, uintYnrzE4, uint9D2Q4S, bytekylY33S, byteHB3VUyU, {from: accounts[2]});
		const uint256luLyjdD = await BACMARSLPTOKENPoolFVLqby9.balanceOf.call(addressEpkEpFv, {from: accounts[4]});
		await BACMARSLPTOKENPoolFVLqby9.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaKlDkuA = "W92GXq6PBXY"
		const stringRvzoYrT = "HRmQSH5pcFGufzHJxQNS6OeXpy8xBc"
		const uintYQcU1NN = BigInt("182")
		const BACMARSLPTOKENPoolwVezx3Y = await BACMARSLPTOKENPool.new(stringaKlDkuA, stringRvzoYrT, uintYQcU1NN, {from: accounts[4]});
		const uintwaqbuDi = BigInt("63")
		const uint256L72Ybz = await BACMARSLPTOKENPoolwVezx3Y.withdraw.call(uintwaqbuDi, {from: accounts[2]});
		await BACMARSLPTOKENPoolwVezx3Y.getReward.call({from: accounts[2]});
		const uint256n9SKeDm = await BACMARSLPTOKENPoolwVezx3Y.getRewardForDuration.call({from: accounts[2]});
		const stringKKMqyrE = await BACMARSLPTOKENPoolwVezx3Y.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256VugRu1u = await BACMARSLPTOKENPoolwVezx3Y.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256ANjjqsM = await BACMARSLPTOKENPoolwVezx3Y.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringIKmNYA = "jNThw9iOKfJTEAnsZPJKdBCcp6x3AY3dLuIxSWu6rduXoCLbDFm"
		const stringo9bagng = "n2eMgYhCgUI3xpAspMgpuOB"
		const uintrZZ7iY1 = BigInt("30")
		const BACMARSLPTOKENPoolfjYLPVY = await BACMARSLPTOKENPool.new(stringIKmNYA, stringo9bagng, uintrZZ7iY1, {from: accounts[3]});
		const uintQiou9Me = BigInt("1340")
		const uint256CH1j6zS = await BACMARSLPTOKENPoolfjYLPVY.withdraw.call(uintQiou9Me, {from: "0x0000000000000000000000000000000000000001"});
		const uint8MOZTMEU = await BACMARSLPTOKENPoolfjYLPVY.decimals.call({from: accounts[4]});
	});
})