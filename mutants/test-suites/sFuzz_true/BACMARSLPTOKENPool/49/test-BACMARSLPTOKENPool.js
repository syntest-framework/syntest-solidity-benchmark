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
//		const uint256VeXuxi3 = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintn1aX781, uintgyO5a2l, uintzrBPJo6, bytetTaHv1, byteJKmQqT4, {from: accounts[1]});
//		const stringPwTT2U = await BACMARSLPTOKENPooluV0omWF.name.call({from: accounts[1]});
//		const uint256gCbdx0Z = await BACMARSLPTOKENPooluV0omWF.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256moh4SQo = await BACMARSLPTOKENPooluV0omWF.earned.call(addressACKfJxJ, {from: accounts[0]});
//		const uint256yXMTUo = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintJ3p3vmb, uintYS5zDNk, uintfxTaa3b, bytecSCixOQ, byte6fFoeq, {from: accounts[4]});
//		const uint256dYsiLn7 = await BACMARSLPTOKENPooluV0omWF.notifyRewardAmount.call(uintCmTnqyL, {from: accounts[4]});

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
//		await BACMARSLPTOKENPoolmQymCzH.onlyRewardsDistribution.call({from: accounts[3]});
//		await BACMARSLPTOKENPoolmQymCzH.onlyRewardsDistribution.call({from: accounts[4]});
//		const uint256G0yeSB = await BACMARSLPTOKENPoolmQymCzH.earned.call(addressCt5ZHtw, {from: "0x0000000000000000000000000000000000000001"});
//		await BACMARSLPTOKENPoolmQymCzH.getReward.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolmQymCzH.onlyRewardsDistribution.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringcsrmbX4 = "AFa944PJ6IcNim5hDtgdoIu32O5RYOtptG0ncRaH19EHtDKvPeOkG3VE4VdRQ5Hfm4Vy1n"
		const stringn0iYPEc = "uz8e5qUm1XMkKONMooHDxGTpB5Q4Xoq0fb"
		const uintKKj4OWF = BigInt("40")
		const BACMARSLPTOKENPoolNc0OrDu = await BACMARSLPTOKENPool.new(stringcsrmbX4, stringn0iYPEc, uintKKj4OWF, {from: accounts[1]});
		const uintHR9Iik9 = BigInt("1413")
		const uintSc7P8QS = BigInt("669")
		await BACMARSLPTOKENPoolNc0OrDu.getReward.call({from: accounts[5]});
		const uint256K8OWxmZ = await BACMARSLPTOKENPoolNc0OrDu.notifyRewardAmount.call(uintHR9Iik9, {from: accounts[1]});
		const uint256hi8cHaq = await BACMARSLPTOKENPoolNc0OrDu.rewardPerToken.call({from: accounts[0]});
		const stringKn69Q0r = await BACMARSLPTOKENPoolNc0OrDu.symbol.call({from: accounts[1]});
		const stringSmE3MaF = await BACMARSLPTOKENPoolNc0OrDu.name.call({from: accounts[1]});
		const uint256rOYXWin = await BACMARSLPTOKENPoolNc0OrDu.withdraw.call(uintSc7P8QS, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressqh9d8cC = accounts[3]
		const addressbOr7i3c = accounts[4]
		const addresswSRQQb4 = accounts[2]
		const BACMARSLPTOKENPooluV0omWF = await BACMARSLPTOKENPool.new(addressqh9d8cC, addressbOr7i3c, addresswSRQQb4, {from: accounts[1]});
		const byteXEzxJhu = "0x151b0d0012010b0a070a191d1d0e200a101f1417081403121f12100c0507040b"
		const byteyohm84g = "0x0905091d081e1f041b08051e1b1d0412120b11081d0c14110302031f1b0f2009"
		const uintnV8pEwr = BigInt("11")
		const uintyf3NQcQ = BigInt("348")
		const uint4PtlUr = BigInt("1668")
		const byteuTVQtQC = "0x090305191c001f1217200f0b001d1a1906141a091208030818161b1e09141b09"
		const byteQ8dkE5y = "0x10131a08071a000a0d11081411121f1912190c1b0f020320070d150b1202081e"
		const uintDCdt8YF = BigInt("204")
		const uintJe18ZD = BigInt("1373")
		const uintSu7II0r = BigInt("106")
		const uintbf7Wjv4 = BigInt("531")
		const uint256h68sAmG = await BACMARSLPTOKENPooluV0omWF.getRewardForDuration.call({from: accounts[3]});
//		const uint256VeXuxi3 = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uint4PtlUr, uintyf3NQcQ, uintnV8pEwr, byteyohm84g, byteXEzxJhu, {from: accounts[1]});
//		const stringPwTT2U = await BACMARSLPTOKENPooluV0omWF.name.call({from: accounts[1]});
//		const uint256gCbdx0Z = await BACMARSLPTOKENPooluV0omWF.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256yXMTUo = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintSu7II0r, uintJe18ZD, uintDCdt8YF, byteQ8dkE5y, byteuTVQtQC, {from: accounts[4]});
//		const uint256dYsiLn7 = await BACMARSLPTOKENPooluV0omWF.notifyRewardAmount.call(uintbf7Wjv4, {from: accounts[4]});

		assert.equal(uint256h68sAmG, BigInt("0"))
		await expect(BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uint4PtlUr, uintyf3NQcQ, uintnV8pEwr, byteyohm84g, byteXEzxJhu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressmCzTCSA = accounts[3]
		const addressaLvTa8b = accounts[4]
		const addressOExE4IH = accounts[2]
		const BACMARSLPTOKENPooluV0omWF = await BACMARSLPTOKENPool.new(addressmCzTCSA, addressaLvTa8b, addressOExE4IH, {from: accounts[1]});
		const uintw7u8ik = BigInt("1186")
		const bytedN3pK5 = "0x151b0d0012010b0a070a191d1d0e200a101f1417081403121f12100c0507040b"
		const bytesrTV4u = "0x0905091d081e1f041b08051e1b1d0412120b11081d0c14110302031f1b0f2009"
		const uintuSOZmKt = BigInt("11")
		const uintPmDTlz = BigInt("348")
		const uintptZTXn = BigInt("1668")
		const byteA5x0voe = "0x090305191c001f1217200f0b001d1a1906141a091208030818161b1e09141b09"
		const byteK9HW6at = "0x10131a08071a00080d11081411121f1912190c1b0f020320070d150b1202081e"
		const uintzkX2atD = BigInt("204")
		const uintvkj8m9L = BigInt("1373")
		const uintrfC1Fv9 = BigInt("106")
//		const uint256zZndrsE = await BACMARSLPTOKENPooluV0omWF.withdraw.call(uintw7u8ik, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256VeXuxi3 = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintptZTXn, uintPmDTlz, uintuSOZmKt, bytesrTV4u, bytedN3pK5, {from: accounts[1]});
//		const uint256fuXeu5n = await BACMARSLPTOKENPooluV0omWF.rewardPerToken.call({from: accounts[4]});
//		const stringPwTT2U = await BACMARSLPTOKENPooluV0omWF.name.call({from: accounts[1]});
//		const uint256gCbdx0Z = await BACMARSLPTOKENPooluV0omWF.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256yXMTUo = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintrfC1Fv9, uintvkj8m9L, uintzkX2atD, byteK9HW6at, byteA5x0voe, {from: accounts[4]});

		await expect(BACMARSLPTOKENPooluV0omWF.withdraw.call(uintw7u8ik, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressRschvTy = accounts[3]
		const addressfbD8hja = accounts[4]
		const addressu20oO0v = accounts[0]
		const BACMARSLPTOKENPoolU9WRw6v = await BACMARSLPTOKENPool.new(addressRschvTy, addressfbD8hja, addressu20oO0v, {from: accounts[1]});
		const uintR2r37nM = BigInt("905")
//		const uint256AFJtSaI = await BACMARSLPTOKENPoolU9WRw6v.notifyRewardAmount.call(uintR2r37nM, {from: accounts[4]});
//		const uint256agFp5tp = await BACMARSLPTOKENPoolU9WRw6v.rewardPerToken.call({from: accounts[4]});
//		await BACMARSLPTOKENPoolU9WRw6v.nonReentrant.call({from: accounts[5]});

		await expect(BACMARSLPTOKENPoolU9WRw6v.notifyRewardAmount.call(uintR2r37nM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresscNTknd4 = accounts[3]
		const addressaExxLrG = accounts[4]
		const addressDCLdulj = accounts[2]
		const BACMARSLPTOKENPooluV0omWF = await BACMARSLPTOKENPool.new(addresscNTknd4, addressaExxLrG, addressDCLdulj, {from: accounts[1]});
		const byteGjtvEUG = "0x090305191c001f1217200f0b001d1a1906141a091208030818161b1e09141b09"
		const byte84V0z2 = "0x10131a08071a00080d11081411121f1912190c1b0f020320070d150b1202081e"
		const uint9ZMgAH = BigInt("204")
		const uintGsZ2Pg = BigInt("1373")
		const uintcH7y2ki = BigInt("106")
		const uintGoRQyCJ = BigInt("531")
		const uint256PJaeBC2 = await BACMARSLPTOKENPooluV0omWF.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gCbdx0Z = await BACMARSLPTOKENPooluV0omWF.lastTimeRewardApplicable.call({from: accounts[3]});
//		await BACMARSLPTOKENPooluV0omWF.exit.call({from: accounts[3]});
//		const uint256PPDyCB2 = await BACMARSLPTOKENPooluV0omWF.getRewardForDuration.call({from: accounts[5]});
//		const uint256yXMTUo = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintcH7y2ki, uintGsZ2Pg, uint9ZMgAH, byte84V0z2, byteGjtvEUG, {from: accounts[4]});
//		const uint256dYsiLn7 = await BACMARSLPTOKENPooluV0omWF.notifyRewardAmount.call(uintGoRQyCJ, {from: accounts[4]});

		assert.equal(uint256PJaeBC2, BigInt("0"))
		assert.equal(uint256gCbdx0Z, BigInt("0"))
		await expect(BACMARSLPTOKENPooluV0omWF.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressVzxerg6 = accounts[3]
		const addressJscIrYu = accounts[4]
		const addressIcSicD = accounts[2]
		const BACMARSLPTOKENPooluV0omWF = await BACMARSLPTOKENPool.new(addressVzxerg6, addressJscIrYu, addressIcSicD, {from: accounts[1]});
		const bytevPoxZr3 = "0x090305191c001f1217200f0b001d1a1906141a091208030818161b1e09141b09"
		const bytentRmBGW = "0x10131a08071a00080d11081411121f1912190c1b0f020320070d150b1202081e"
		const uintTINSBEL = BigInt("204")
		const uintLQM7x6O = BigInt("1373")
		const uintWo2rqfV = BigInt("106")
		const uintY1j6Cnu = BigInt("1501")
		const uintiKioFVs = BigInt("531")
		const uint256PJaeBC2 = await BACMARSLPTOKENPooluV0omWF.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gCbdx0Z = await BACMARSLPTOKENPooluV0omWF.lastTimeRewardApplicable.call({from: accounts[3]});
//		await BACMARSLPTOKENPooluV0omWF.getReward.call({from: accounts[0]});
//		await BACMARSLPTOKENPooluV0omWF.getReward.call({from: accounts[2]});
//		const uint256yXMTUo = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintWo2rqfV, uintLQM7x6O, uintTINSBEL, bytentRmBGW, bytevPoxZr3, {from: accounts[4]});
//		const uint256xRTyb7 = await BACMARSLPTOKENPooluV0omWF.notifyRewardAmount.call(uintY1j6Cnu, {from: accounts[1]});
//		const uint256dYsiLn7 = await BACMARSLPTOKENPooluV0omWF.notifyRewardAmount.call(uintiKioFVs, {from: accounts[4]});

		assert.equal(uint256PJaeBC2, BigInt("0"))
		assert.equal(uint256gCbdx0Z, BigInt("0"))
		await expect(BACMARSLPTOKENPooluV0omWF.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressGUFE5rf = accounts[3]
		const addressI4caa5u = accounts[4]
		const addressInQHccw = accounts[2]
		const BACMARSLPTOKENPooluV0omWF = await BACMARSLPTOKENPool.new(addressGUFE5rf, addressI4caa5u, addressInQHccw, {from: accounts[1]});
		const addressDmdB0wv = "0x0000000000000000000000000000000000000001"
		const bytektFrf3W = "0x151b0d0012010b0a070a191d1d0e200a101f1417081403121f12100c0507040b"
		const byteqYqdHsP = "0x0905091d081e1f041b08051e1b1d0412120b11081d0c14110302031f1b0f2009"
		const uintcLLzXgC = BigInt("11")
		const uintrBjRdik = BigInt("348")
		const uintFh0lVvF = BigInt("1668")
		const uint256OE83XC = await BACMARSLPTOKENPooluV0omWF.balanceOf.call(addressDmdB0wv, {from: accounts[2]});
//		const uint256VeXuxi3 = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintFh0lVvF, uintrBjRdik, uintcLLzXgC, byteqYqdHsP, bytektFrf3W, {from: accounts[1]});
//		const uint256gCbdx0Z = await BACMARSLPTOKENPooluV0omWF.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256OE83XC, BigInt("0"))
		await expect(BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintFh0lVvF, uintrBjRdik, uintcLLzXgC, byteqYqdHsP, bytektFrf3W, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringc5BTceC = "aQeDAL1S1z"
		const stringjs7e2D6 = "XMfSox4F4qoFxe3oUvw0nTICvHCvYhfYkR564JawdMuv9iFBtBE6csdkD7TTwDfsaKLhnBdIIZd4iTJp0cX2V"
		const uintr2bmAtD = BigInt("135")
		const BACMARSLPTOKENPooloT72f8W = await BACMARSLPTOKENPool.new(stringc5BTceC, stringjs7e2D6, uintr2bmAtD, {from: accounts[5]});
		const addresseoZ1dDC = accounts[1]
		const uintBBl3V9j = BigInt("2001")
		const addressb4JGemT = accounts[5]
		await BACMARSLPTOKENPooloT72f8W.onlyRewardsDistribution.call({from: accounts[5]});
		const stringqToXIhX = await BACMARSLPTOKENPooloT72f8W.name.call({from: accounts[1]});
		const uint256zko25q = await BACMARSLPTOKENPooloT72f8W.earned.call(addresseoZ1dDC, {from: accounts[1]});
		const uint256DYoiDmP = await BACMARSLPTOKENPooloT72f8W.notifyRewardAmount.call(uintBBl3V9j, {from: accounts[2]});
		const addressLkgjJI = await BACMARSLPTOKENPooloT72f8W.updateReward.call(addressb4JGemT, {from: accounts[3]});
		const uint256dH15OdO = await BACMARSLPTOKENPooloT72f8W.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressP0tBaIc = accounts[3]
		const addressuswqMlm = accounts[4]
		const addressdN3MtMa = accounts[2]
		const BACMARSLPTOKENPooluV0omWF = await BACMARSLPTOKENPool.new(addressP0tBaIc, addressuswqMlm, addressdN3MtMa, {from: accounts[1]});
		const uintHswDuy3 = BigInt("1478")
		const bytednT3bMz = "0x151b0d0012010b0a070a191d1d0e200a101f1417081403121f12100c0507040b"
		const byteW1QosAU = "0x0905091d081e1f041b08051e1b1d0412120b11081d0c14110302031f1b0f2009"
		const uinttojg4uK = BigInt("11")
		const uintJjoEZN = BigInt("348")
		const uintZRESDtX = BigInt("1668")
		const byteyE9omO4 = "0x0b120c1f1e170a0c181c15090c191000091b171c1b151206091a000406040506"
		const byteRJINtB = "0x061e0e170e11171a1f031e19100f050e1605070b101b020018170319090d0f13"
		const uinth1dyd6b = BigInt("224")
		const uint35zB4v = BigInt("825")
		const uintPT5aGd9 = BigInt("890")
		const byteQROyhd3 = "0x090305191c001f1217200f0b001d1a1906141a091208030818161b1e09141b09"
		const byteIRHtf47 = "0x10131a08071a00080d11081411121f19121c0c1b0f020320070d150b1202081e"
		const uinte0a2UwZ = BigInt("204")
		const uintayEnxp = BigInt("1373")
		const uintvmJbCJ8 = BigInt("106")
		const addressYDbp0zK = accounts[2]
//		const uint256rHVdzy = await BACMARSLPTOKENPooluV0omWF.withdraw.call(uintHswDuy3, {from: accounts[2]});
//		const uint256VeXuxi3 = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintZRESDtX, uintJjoEZN, uinttojg4uK, byteW1QosAU, bytednT3bMz, {from: accounts[1]});
//		const uint256VVHECS9 = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintPT5aGd9, uint35zB4v, uinth1dyd6b, byteRJINtB, byteyE9omO4, {from: accounts[1]});
//		const uint256yXMTUo = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintvmJbCJ8, uintayEnxp, uinte0a2UwZ, byteIRHtf47, byteQROyhd3, {from: accounts[4]});
//		const uint256rTAsbU = await BACMARSLPTOKENPooluV0omWF.earned.call(addressYDbp0zK, {from: accounts[4]});

		await expect(BACMARSLPTOKENPooluV0omWF.withdraw.call(uintHswDuy3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressOJBTn4 = accounts[3]
		const addressCXIn9Lb = accounts[4]
		const addressVcmguK3 = accounts[2]
		const BACMARSLPTOKENPooluV0omWF = await BACMARSLPTOKENPool.new(addressOJBTn4, addressCXIn9Lb, addressVcmguK3, {from: accounts[1]});
		const uintxOlNQll = BigInt("957")
		const byterL4OQTY = "0x090305191c001f1217200f0b001d1a1906141a091208030818161b1e09141b09"
		const byteMKBMy3T = "0x10131a08071a00080d11081411121f1912190c1b0f020320070d150b1202081e"
		const uinthNMMKMV = BigInt("204")
		const uintN5aFVjC = BigInt("1373")
		const uintxIHIbTV = BigInt("106")
		const uintFOKJfvx = BigInt("531")
		const uint256PJaeBC2 = await BACMARSLPTOKENPooluV0omWF.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gCbdx0Z = await BACMARSLPTOKENPooluV0omWF.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256Gip88qV = await BACMARSLPTOKENPooluV0omWF.stake.call(uintxOlNQll, {from: accounts[0]});
//		await BACMARSLPTOKENPooluV0omWF.exit.call({from: accounts[3]});
//		const uint256yXMTUo = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintxIHIbTV, uintN5aFVjC, uinthNMMKMV, byteMKBMy3T, byterL4OQTY, {from: accounts[4]});
//		const uint256dYsiLn7 = await BACMARSLPTOKENPooluV0omWF.notifyRewardAmount.call(uintFOKJfvx, {from: accounts[4]});

		assert.equal(uint256PJaeBC2, BigInt("0"))
		assert.equal(uint256gCbdx0Z, BigInt("0"))
		await expect(BACMARSLPTOKENPooluV0omWF.stake.call(uintxOlNQll, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const address36tdN1 = accounts[3]
		const addressToVrJXn = accounts[4]
		const addresslydcn4z = accounts[2]
		const BACMARSLPTOKENPooluV0omWF = await BACMARSLPTOKENPool.new(address36tdN1, addressToVrJXn, addresslydcn4z, {from: accounts[1]});
		const byteuXYIctC = "0x090305191c001f1217200f0b001d1a1906141a091208030818161b1e09141b09"
		const bytenyofMoL = "0x10131a08071a00080d11081411121f1912190c1b0f020320070d150b1202081e"
		const uintMtR94I = BigInt("204")
		const uintjJhKm2W = BigInt("1373")
		const uintqZvmyPj = BigInt("106")
		const uintUbVfzRo = BigInt("1501")
		const uintDrh31H8 = BigInt("531")
		const uint256gCbdx0Z = await BACMARSLPTOKENPooluV0omWF.lastTimeRewardApplicable.call({from: accounts[3]});
//		await BACMARSLPTOKENPooluV0omWF.getReward.call({from: accounts[0]});
//		await BACMARSLPTOKENPooluV0omWF.getReward.call({from: accounts[2]});
//		const uint256yXMTUo = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintqZvmyPj, uintjJhKm2W, uintMtR94I, bytenyofMoL, byteuXYIctC, {from: accounts[4]});
//		const uint256xRTyb7 = await BACMARSLPTOKENPooluV0omWF.notifyRewardAmount.call(uintUbVfzRo, {from: accounts[1]});
//		const uint256dYsiLn7 = await BACMARSLPTOKENPooluV0omWF.notifyRewardAmount.call(uintDrh31H8, {from: accounts[4]});

		assert.equal(uint256gCbdx0Z, BigInt("0"))
		await expect(BACMARSLPTOKENPooluV0omWF.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmJjKX3j = "HdDkxV99dI44O76fPcJucoz9CmDszcah4TgXDo3F2TuS1yFIiTJ2NqfWNzpVzN7rXuNVzegKbQDyZyQB3a3KNRneezHZssll"
		const stringGYX2Jd5 = "paN7qvviqVXRh8QQiDrnOnK91Y"
		const uintlMVxOD7 = BigInt("169")
		const BACMARSLPTOKENPooljpVyL6K = await BACMARSLPTOKENPool.new(stringmJjKX3j, stringGYX2Jd5, uintlMVxOD7, {from: accounts[1]});
		const uinto9bcmd = BigInt("1329")
		const uint256GWvNXQc = await BACMARSLPTOKENPooljpVyL6K.withdraw.call(uinto9bcmd, {from: accounts[4]});
		const uint8TQxjExC = await BACMARSLPTOKENPooljpVyL6K.decimals.call({from: accounts[2]});
		const uint256iif8dE = await BACMARSLPTOKENPooljpVyL6K.totalSupply.call({from: accounts[2]});
		const uint256wPYW3Ej = await BACMARSLPTOKENPooljpVyL6K.rewardPerToken.call({from: accounts[2]});
		const stringAUfXE5o = await BACMARSLPTOKENPooljpVyL6K.name.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressqZMm0hG = accounts[3]
		const addressCDe34VM = accounts[4]
		const addressH2pF6Fd = accounts[2]
		const BACMARSLPTOKENPooluV0omWF = await BACMARSLPTOKENPool.new(addressqZMm0hG, addressCDe34VM, addressH2pF6Fd, {from: accounts[1]});
		const uintM2gqg6C = BigInt("957")
		const byteNh0MJE = "0x090305191c001f1217200f0b001d1a1906141a091208030818161b1e09141b09"
		const byteaBGaUpX = "0x10131a08071a00080d11081411121f1912190c1b0f020320070d150b1202081e"
		const uintO7gclsK = BigInt("204")
		const uintNQJ2hHn = BigInt("1373")
		const uintVyGPnnm = BigInt("106")
		const uintPux5nI = BigInt("531")
		const uint256PJaeBC2 = await BACMARSLPTOKENPooluV0omWF.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256gCbdx0Z = await BACMARSLPTOKENPooluV0omWF.lastTimeRewardApplicable.call({from: accounts[3]});
//		const uint256Gip88qV = await BACMARSLPTOKENPooluV0omWF.stake.call(uintM2gqg6C, {from: accounts[0]});
//		await BACMARSLPTOKENPooluV0omWF.getReward.call({from: accounts[3]});
//		await BACMARSLPTOKENPooluV0omWF.exit.call({from: accounts[3]});
//		const uint8dC15q3f = await BACMARSLPTOKENPooluV0omWF.decimals.call({from: accounts[0]});
//		const uint256yXMTUo = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uintVyGPnnm, uintNQJ2hHn, uintO7gclsK, byteaBGaUpX, byteNh0MJE, {from: accounts[4]});
//		const uint256dYsiLn7 = await BACMARSLPTOKENPooluV0omWF.notifyRewardAmount.call(uintPux5nI, {from: accounts[4]});

		assert.equal(uint256PJaeBC2, BigInt("0"))
		assert.equal(uint256gCbdx0Z, BigInt("0"))
		await expect(BACMARSLPTOKENPooluV0omWF.stake.call(uintM2gqg6C, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringyhv3WoN = "0kaok1NdtMHTCReHkgnLurpAs0FEGMixGfSCunuK0p9NJGg9JHaulOdk83gWpWz6DjMXBTTJbHK8WoXEIP4cnDqsg4"
		const stringhnPLyxV = "wWIvHAHSNGLyinG"
		const uintGIKoroK = BigInt("104")
		const BACMARSLPTOKENPoolgyxzaWk = await BACMARSLPTOKENPool.new(stringyhv3WoN, stringhnPLyxV, uintGIKoroK, {from: accounts[4]});
		const uintGX2z5CO = BigInt("928")
		const uint7C6n5a = BigInt("1573")
		const uint256GAalOVn = await BACMARSLPTOKENPoolgyxzaWk.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256FL28MzW = await BACMARSLPTOKENPoolgyxzaWk.rewardPerToken.call({from: accounts[2]});
		const uint256wcf1Aw = await BACMARSLPTOKENPoolgyxzaWk.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256XuMcdqd = await BACMARSLPTOKENPoolgyxzaWk.stake.call(uintGX2z5CO, {from: accounts[3]});
		const uint256G2iAdcX = await BACMARSLPTOKENPoolgyxzaWk.withdraw.call(uint7C6n5a, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkDrbdp3 = "ktE19l9Ln5hPgUHSmKDxAjY6K2tGqCTCgaNb0"
		const stringiUUJIpq = "2u041Ptfxx4eGnbKHfiUY1vnmi2yrs4nPUEwmUvWVwiL"
		const uintHhfaYU = BigInt("76")
		const BACMARSLPTOKENPoolbNPKPZ = await BACMARSLPTOKENPool.new(stringkDrbdp3, stringiUUJIpq, uintHhfaYU, {from: accounts[3]});
		const uint256b0Ew23m = await BACMARSLPTOKENPoolbNPKPZ.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256fsxz5NY = await BACMARSLPTOKENPoolbNPKPZ.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256Njs5od4 = await BACMARSLPTOKENPoolbNPKPZ.totalSupply.call({from: accounts[4]});
		const stringEvWex1 = await BACMARSLPTOKENPoolbNPKPZ.symbol.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrzhzRnJ = "ISeVuJma0t93iMUihHBsusMDXgFWEs9pqO6mUayXEkwguMmfp5zYNz2A4HPCvsKyiH3BuRpC9TQIdiiU0wWT"
		const stringHAlipf = "1qfkY1oubQMAxyaIQGLg8mUo"
		const uintYFGHmOl = BigInt("99")
		const BACMARSLPTOKENPoolZwmkO4d = await BACMARSLPTOKENPool.new(stringrzhzRnJ, stringHAlipf, uintYFGHmOl, {from: accounts[2]});
		const stringrLthdUF = await BACMARSLPTOKENPoolZwmkO4d.symbol.call({from: accounts[3]});
		const uint256ie0mgHd = await BACMARSLPTOKENPoolZwmkO4d.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolZwmkO4d.exit.call({from: accounts[3]});
		const uint256gqzXXm = await BACMARSLPTOKENPoolZwmkO4d.rewardPerToken.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressoOb5gvZ = accounts[3]
		const addressWribBZi = accounts[4]
		const addressdpVknO = accounts[2]
		const BACMARSLPTOKENPooluV0omWF = await BACMARSLPTOKENPool.new(addressoOb5gvZ, addressWribBZi, addressdpVknO, {from: accounts[1]});
		const uintmg2uBx = BigInt("531")
		const uint256gCbdx0Z = await BACMARSLPTOKENPooluV0omWF.lastTimeRewardApplicable.call({from: accounts[3]});
//		await BACMARSLPTOKENPooluV0omWF.getReward.call({from: accounts[2]});
//		const uint256f07SF5K = await BACMARSLPTOKENPooluV0omWF.totalSupply.call({from: accounts[3]});
//		const uint256dYsiLn7 = await BACMARSLPTOKENPooluV0omWF.notifyRewardAmount.call(uintmg2uBx, {from: accounts[4]});

		assert.equal(uint256gCbdx0Z, BigInt("0"))
		await expect(BACMARSLPTOKENPooluV0omWF.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjKUXX1 = "Y8pnIeyK7MxgnfjeifIbeatFvG8Jorg5k9JdmTuUzarqWLFPKWywc9ml4Mze8"
		const stringwxioQh = "breYnTRPsaRmmqDWH6jLkuHTi9OxiJcCk8DXfKI60sFdhFsvmAYByqN38HGzlcoocK"
		const uintSyiRGR = BigInt("41")
		const BACMARSLPTOKENPoollvYBAf5 = await BACMARSLPTOKENPool.new(stringjKUXX1, stringwxioQh, uintSyiRGR, {from: accounts[3]});
		await BACMARSLPTOKENPoollvYBAf5.nonReentrant.call({from: accounts[4]});
		await BACMARSLPTOKENPoollvYBAf5.nonReentrant.call({from: accounts[1]});
		await BACMARSLPTOKENPoollvYBAf5.nonReentrant.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringqorlzPM = "U4vSaW8JDfXcCdCYxWR2iRyw"
		const string6gL0Mg = "pG4eyrxxQl8IcspWDDKfC9sbzc6xbF9BHqJaKoiJxdBkrLOCWotHURRSk9Axd0cbBGmeVhcMf9NplFr9"
		const uintixaTBya = BigInt("73")
		const BACMARSLPTOKENPoolUTyYHpn = await BACMARSLPTOKENPool.new(stringqorlzPM, string6gL0Mg, uintixaTBya, {from: accounts[4]});
		const uintgFUzE8f = BigInt("1306")
		const uint256QkVRr4e = await BACMARSLPTOKENPoolUTyYHpn.withdraw.call(uintgFUzE8f, {from: accounts[1]});
		const uint256yX64K3L = await BACMARSLPTOKENPoolUTyYHpn.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint8pNfcX3 = await BACMARSLPTOKENPoolUTyYHpn.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringU1C6dsB = "dceOw0mTIsdzot3EFD5oUcpG4"
		const stringyv19PnX = "6Kewa7GwtFF0y8ZYaSnYuE8RTc3kKLFZNjvKUGzVN2ihl3JgxMuu5VNyb9Yj5gV"
		const uintVeFWKwK = BigInt("69")
		const BACMARSLPTOKENPoolEpRYVEY = await BACMARSLPTOKENPool.new(stringU1C6dsB, stringyv19PnX, uintVeFWKwK, {from: accounts[1]});
		const addressi5zcRCz = accounts[5]
		const address8ARZvJ = "0x0000000000000000000000000000000000000001"
		const uintI7RKcQk = BigInt("683")
		const uint256h1aNTgL = await BACMARSLPTOKENPoolEpRYVEY.rewardPerToken.call({from: accounts[0]});
		const uint256kTFkJvl = await BACMARSLPTOKENPoolEpRYVEY.balanceOf.call(addressi5zcRCz, {from: accounts[4]});
		const uint256zFRQEv3 = await BACMARSLPTOKENPoolEpRYVEY.totalSupply.call({from: accounts[3]});
		await BACMARSLPTOKENPoolEpRYVEY.getReward.call({from: accounts[1]});
		const uint256tOeysi = await BACMARSLPTOKENPoolEpRYVEY.earned.call(address8ARZvJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256mI3I4SR = await BACMARSLPTOKENPoolEpRYVEY.withdraw.call(uintI7RKcQk, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuAZhhdD = "uOdPx9GVgJ1FikQGAy77rwji"
		const stringuSETkbV = "mw3559dt5I92jiIbEkefQQhdCzL1W76tRBVF2cSnLNQDEiytqdj9TEUjyMcFRx3K"
		const uintQdei1ZS = BigInt("192")
		const BACMARSLPTOKENPoolMIn8Rf = await BACMARSLPTOKENPool.new(stringuAZhhdD, stringuSETkbV, uintQdei1ZS, {from: accounts[1]});
		const uintY6tZ98B = BigInt("408")
		const addressFfvTbwC = accounts[5]
		const uintH6C8aJ9 = BigInt("1042")
		const uint256bf64WRZ = await BACMARSLPTOKENPoolMIn8Rf.withdraw.call(uintY6tZ98B, {from: accounts[4]});
		const addressz0v2Snv = await BACMARSLPTOKENPoolMIn8Rf.updateReward.call(addressFfvTbwC, {from: accounts[3]});
		const uint256z1cteAe = await BACMARSLPTOKENPoolMIn8Rf.notifyRewardAmount.call(uintH6C8aJ9, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressN3LxvVr = accounts[3]
		const addressieo3DMf = accounts[4]
		const addresseMdjR1q = accounts[2]
		const BACMARSLPTOKENPooluV0omWF = await BACMARSLPTOKENPool.new(addressN3LxvVr, addressieo3DMf, addresseMdjR1q, {from: accounts[1]});
		const uint6tb7nj = BigInt("1522")
//		const uint256qKgamO1 = await BACMARSLPTOKENPooluV0omWF.notifyRewardAmount.call(uint6tb7nj, {from: accounts[3]});
//		await BACMARSLPTOKENPooluV0omWF.exit.call({from: accounts[0]});
//		await BACMARSLPTOKENPooluV0omWF.getReward.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPooluV0omWF.notifyRewardAmount.call(uint6tb7nj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringm812zoj = "x8EFbQGuMMjdpihhvpKyO6L9BkCAn07eXqiHU6s1FrDb6cxxn8WLoUx7POfT4CP5"
		const stringMv6qsR0 = "6678cPKalteepwW9Q7uy4BtPTkzcC5XQvpkt9BSqsilBbejfIcRMAXYXIdmw3g285icnc"
		const uintMMztmQD = BigInt("130")
		const BACMARSLPTOKENPoolNJfQWF3 = await BACMARSLPTOKENPool.new(stringm812zoj, stringMv6qsR0, uintMMztmQD, {from: accounts[4]});
		const addressYkD9ZGf = accounts[3]
		const uintYAWq6ur = BigInt("1786")
		const uint256econ2Oy = await BACMARSLPTOKENPoolNJfQWF3.earned.call(addressYkD9ZGf, {from: accounts[2]});
		const uint256TcuxM2m = await BACMARSLPTOKENPoolNJfQWF3.rewardPerToken.call({from: accounts[1]});
		await BACMARSLPTOKENPoolNJfQWF3.exit.call({from: accounts[0]});
		const uint256ftrY3p5 = await BACMARSLPTOKENPoolNJfQWF3.stake.call(uintYAWq6ur, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringikoMfpt = "BiPsrKgEQjfHOPp6ojyfeS24Hv6JeklKjeLq5mU8La3MH3mD1eNWAGMsjnRD9Hrr8QIYg2p9mc"
		const stringMy1asf2 = "Iz0DsL20Pb2f6YherkBG2NqhqnETyYfn0nJmVOyrRf1hOg5LEWgfPmE5A7Hx4En4rqS7OM44UN9Utnsgi3cuyDnNylGf8o4"
		const uintPcIXbAL = BigInt("194")
		const BACMARSLPTOKENPoolHtRrJco = await BACMARSLPTOKENPool.new(stringikoMfpt, stringMy1asf2, uintPcIXbAL, {from: accounts[1]});
		const uintQIRjrF = BigInt("982")
		await BACMARSLPTOKENPoolHtRrJco.onlyRewardsDistribution.call({from: accounts[2]});
		const uint256y6LZ1Qf = await BACMARSLPTOKENPoolHtRrJco.getRewardForDuration.call({from: accounts[5]});
		await BACMARSLPTOKENPoolHtRrJco.nonReentrant.call({from: accounts[2]});
		const uint256qJok2T = await BACMARSLPTOKENPoolHtRrJco.withdraw.call(uintQIRjrF, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNRTa32v = "zCqcG9m8vL0mtfPNvcs1"
		const stringlsSyPwx = "2533RY9E78ZW9Ms8ltWddcJV7JasBoFzfCp8KpTEJN"
		const uintfxboRXe = BigInt("248")
		const BACMARSLPTOKENPoolBSdjX2L = await BACMARSLPTOKENPool.new(stringNRTa32v, stringlsSyPwx, uintfxboRXe, {from: accounts[4]});
		const addressQ0oKMLB = "0x0000000000000000000000000000000000000001"
		const addressqdLObFQ = accounts[1]
		const addressTKuOHIs = accounts[3]
		const addressmhGD4b2 = accounts[2]
		const addressjOxZdT = accounts[3]
		const uint256wRCbCb1 = await BACMARSLPTOKENPoolBSdjX2L.earned.call(addressQ0oKMLB, {from: accounts[2]});
		const uint256XskBsis = await BACMARSLPTOKENPoolBSdjX2L.earned.call(addressqdLObFQ, {from: accounts[1]});
		const uint256v9VLJS = await BACMARSLPTOKENPoolBSdjX2L.balanceOf.call(addressTKuOHIs, {from: accounts[1]});
		await BACMARSLPTOKENPoolBSdjX2L.exit.call({from: accounts[5]});
		const uint256PkwEXvq = await BACMARSLPTOKENPoolBSdjX2L.balanceOf.call(addressmhGD4b2, {from: accounts[2]});
		const uint256WjfH9qj = await BACMARSLPTOKENPoolBSdjX2L.balanceOf.call(addressjOxZdT, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringhRCzIil = "5DIhh8LrL6Du7Kmw7whTrJwZ"
		const stringv3MxAo = "9CI8UnHUS"
		const uintsIYdWWB = BigInt("86")
		const BACMARSLPTOKENPoolPk0MXmW = await BACMARSLPTOKENPool.new(stringhRCzIil, stringv3MxAo, uintsIYdWWB, {from: accounts[4]});
		const addressrIEwA3 = accounts[4]
		const bytei2L80Wm = "0x1a06060a07140b031b0c050919011605051b07040008110819171e061510020b"
		const byteusjJOMP = "0x02110e1a170d13060c0d2011071e090c080c110d06050a010f11030602091110"
		const uintBZkYTk = BigInt("162")
		const uintWYCTX6g = BigInt("377")
		const uintg53SlQ = BigInt("417")
		const stringgwFlmV9 = await BACMARSLPTOKENPoolPk0MXmW.symbol.call({from: accounts[1]});
		const uint8F0lwS17 = await BACMARSLPTOKENPoolPk0MXmW.decimals.call({from: accounts[0]});
		const uint256OR3GPvb = await BACMARSLPTOKENPoolPk0MXmW.earned.call(addressrIEwA3, {from: accounts[0]});
		const uint256FbotNhU = await BACMARSLPTOKENPoolPk0MXmW.stakeWithPermit.call(uintg53SlQ, uintWYCTX6g, uintBZkYTk, byteusjJOMP, bytei2L80Wm, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringuKsyXcv = "dCcvcYbPo8axCVGsPdW9a2Iaq6ByoGYWjfXzDOReUIdxz0iIdErAC1MIGv3QfrWLUEOzuDCNaS3HvQ5RDl"
		const stringEjkJ99J = "i4sEl7xLFOcogH0JdGBguTuXndJjuEGDynrsP7eAYQQIlaN4xEL9bOyyvPivfpaGR05FVJlcHp9"
		const uintElKhyBP = BigInt("14")
		const BACMARSLPTOKENPoolubYj14 = await BACMARSLPTOKENPool.new(stringuKsyXcv, stringEjkJ99J, uintElKhyBP, {from: accounts[4]});
		const uintOqgErrv = BigInt("1503")
		const bytefFrvI7K = "0x06111a1f0a0a04091d111d1f0518111907170f1d0006011a1e0c0e170b0e1907"
		const bytevOkCesx = "0x0a091c1706021b1a070a19030a011a0f0919100c1e200110190504020a120111"
		const uintBdzQwqv = BigInt("208")
		const uintqjXjAKG = BigInt("1420")
		const uintOKmhLiE = BigInt("1093")
		const uint256TgqTrMX = await BACMARSLPTOKENPoolubYj14.stake.call(uintOqgErrv, {from: accounts[5]});
		const uint256pC2eokn = await BACMARSLPTOKENPoolubYj14.getRewardForDuration.call({from: accounts[5]});
		const stringhISj7n = await BACMARSLPTOKENPoolubYj14.name.call({from: "0x0000000000000000000000000000000000000001"});
		const stringcDLlnFJ = await BACMARSLPTOKENPoolubYj14.name.call({from: accounts[3]});
		const uint256aq4FHfa = await BACMARSLPTOKENPoolubYj14.stakeWithPermit.call(uintOKmhLiE, uintqjXjAKG, uintBdzQwqv, bytevOkCesx, bytefFrvI7K, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKwoA0a2 = "XSV0n7HGL6lQx8eVHgvPd1rgL3dQ9hSUnEVcSFNgD4qme25ASWfuEUrN"
		const stringsc4NKRh = "ImfutVfiUK86W2GialpaIoWEGDA1gzdQzQGTjQkz5SzzEWu1pbis4uON5mHYjb2FI"
		const uintObkNnjJ = BigInt("56")
		const BACMARSLPTOKENPoolncxBjL9 = await BACMARSLPTOKENPool.new(stringKwoA0a2, stringsc4NKRh, uintObkNnjJ, {from: "0x0000000000000000000000000000000000000001"});
		const bytedWraxQ5 = "0x1511161a201c120f010e111d1a1f0a0803140a031a0c1a071408121209051500"
		const bytevOLysyC = "0x160d1418061505121c1d05200b16160b031c0e191f1e1c030005070b06061301"
		const uintqisEhb2 = BigInt("220")
		const uintSiCJ0WD = BigInt("1270")
		const uintHmqqqDt = BigInt("302")
		const addresss4mT35 = accounts[4]
		const addressfLz9B49 = accounts[0]
		await BACMARSLPTOKENPoolncxBjL9.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256vh5arJo = await BACMARSLPTOKENPoolncxBjL9.stakeWithPermit.call(uintHmqqqDt, uintSiCJ0WD, uintqisEhb2, bytevOLysyC, bytedWraxQ5, {from: accounts[1]});
		const addresskC9Pb4f = await BACMARSLPTOKENPoolncxBjL9.updateReward.call(addresss4mT35, {from: accounts[0]});
		const uint256ZSQrPQR = await BACMARSLPTOKENPoolncxBjL9.balanceOf.call(addressfLz9B49, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWoESR5U = "N5e6Dpeg2K3eX"
		const stringn8SMfOx = "L2G9K1WAjILT3uB8GhU3HwuOja0GCewORIhMCyTYhqAq9eG6z7lhViPtOIoXaeyQ9CNXDsSvWX2Vhn"
		const uintQNl6irw = BigInt("41")
		const BACMARSLPTOKENPoolCObhurq = await BACMARSLPTOKENPool.new(stringWoESR5U, stringn8SMfOx, uintQNl6irw, {from: "0x0000000000000000000000000000000000000001"});
		const uintIh3EM7W = BigInt("425")
		const addressTxHzyvR = accounts[1]
		const stringMhF0BES = await BACMARSLPTOKENPoolCObhurq.symbol.call({from: accounts[0]});
		const uint256GLbCuEw = await BACMARSLPTOKENPoolCObhurq.withdraw.call(uintIh3EM7W, {from: accounts[2]});
		const addressHDo2IXU = await BACMARSLPTOKENPoolCObhurq.updateReward.call(addressTxHzyvR, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringq6zPul = "51h1NYwmOJGA0LbDmv7SO25CpQsFCNzFs"
		const stringDVt4yN0 = "1E8Orr8MibYnUqnAnHBmQrYcByHCJMcDG2nv7T6Y4iUxm4RSCFzRUsPoX1BYMfffVCme"
		const uintwhPZ42L = BigInt("239")
		const BACMARSLPTOKENPoolnmsgrzt = await BACMARSLPTOKENPool.new(stringq6zPul, stringDVt4yN0, uintwhPZ42L, {from: accounts[3]});
		await BACMARSLPTOKENPoolnmsgrzt.nonReentrant.call({from: accounts[3]});
		const uint256vpA0C2J = await BACMARSLPTOKENPoolnmsgrzt.lastTimeRewardApplicable.call({from: accounts[1]});
		await BACMARSLPTOKENPoolnmsgrzt.getReward.call({from: accounts[3]});
		const uint256yGRLkQi = await BACMARSLPTOKENPoolnmsgrzt.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringE6ReURE = "z426bbX1F37xs2XNqwAL1JmqlruKTnr2p6WXYmvmF65w3Ko9GcYki"
		const string57ayjW = "qhKMg3GcNvzhndOgXXysiADu2OFTkncnMYFgfYf6LqZwCPSpBWoYA"
		const uintDCzyk9n = BigInt("120")
		const BACMARSLPTOKENPoolkscqDoH = await BACMARSLPTOKENPool.new(stringE6ReURE, string57ayjW, uintDCzyk9n, {from: accounts[1]});
		const uintAKq8sUp = BigInt("1267")
		const uintiVlvIW = BigInt("445")
		const byteeODLGC = "0x1e1f12000d141205101e1110081b030b17121d20030a0611140917120e14181d"
		const byteZVOY2uR = "0x05041f151c02060e1e0c1904080c140b201a0f0d07091b0e06021e171c1b0518"
		const uintBDBxJr = BigInt("223")
		const uintzBLfukX = BigInt("1909")
		const uintW0KDkaZ = BigInt("761")
		const stringywAhROy = await BACMARSLPTOKENPoolkscqDoH.symbol.call({from: accounts[1]});
		const uint256JOIJJCJ = await BACMARSLPTOKENPoolkscqDoH.stake.call(uintAKq8sUp, {from: accounts[5]});
		await BACMARSLPTOKENPoolkscqDoH.getReward.call({from: accounts[2]});
		const uint256IB3eiUb = await BACMARSLPTOKENPoolkscqDoH.withdraw.call(uintiVlvIW, {from: accounts[0]});
		const uint256i3QSZJ9 = await BACMARSLPTOKENPoolkscqDoH.stakeWithPermit.call(uintW0KDkaZ, uintzBLfukX, uintBDBxJr, byteZVOY2uR, byteeODLGC, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringDfln2ry = "yJDpXCXGwCo5FcSEBkitEEUA7HzOkKuW"
		const stringrVnc0RG = "6yNMB80lkthAbbohuMlnWHoFb"
		const uintzaEG5uI = BigInt("19")
		const BACMARSLPTOKENPoollLXt3L5 = await BACMARSLPTOKENPool.new(stringDfln2ry, stringrVnc0RG, uintzaEG5uI, {from: accounts[1]});
		const byte0Df7ac = "0x20101e151f0b141c1d1710081602150307140c061b12051e130f181412141d0d"
		const byte2sABxR = "0x000c1c1c080112030e0e0a12031504061507021d1b200310171317180804191c"
		const uintAGZBuIh = BigInt("217")
		const uintZtVuN5R = BigInt("1400")
		const uintfa8hBIZ = BigInt("913")
		await BACMARSLPTOKENPoollLXt3L5.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256LW1acdw = await BACMARSLPTOKENPoollLXt3L5.stakeWithPermit.call(uintfa8hBIZ, uintZtVuN5R, uintAGZBuIh, byte2sABxR, byte0Df7ac, {from: accounts[3]});
		await BACMARSLPTOKENPoollLXt3L5.nonReentrant.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgVdbDgz = "wkXWxVeJ3trlRmlbY5RhfKwp2R6yVAApMWuiHCLO98o8ZMIgIChTjCNw3lkhmv3llPlGvna3Qfs25rKZq6lRA1tg4En"
		const stringh5Vb3Ri = "1iAfLTxL9CepYJ4Q"
		const uintgAiXPei = BigInt("105")
		const BACMARSLPTOKENPoolQJ3GnpH = await BACMARSLPTOKENPool.new(stringgVdbDgz, stringh5Vb3Ri, uintgAiXPei, {from: accounts[5]});
		const uintvLIkEGP = BigInt("1335")
		const addressojpTFrs = accounts[0]
		const stringbCVoFl = await BACMARSLPTOKENPoolQJ3GnpH.symbol.call({from: accounts[1]});
		const uint256dT3M7P = await BACMARSLPTOKENPoolQJ3GnpH.totalSupply.call({from: accounts[1]});
		await BACMARSLPTOKENPoolQJ3GnpH.exit.call({from: accounts[1]});
		await BACMARSLPTOKENPoolQJ3GnpH.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256qqWpLx = await BACMARSLPTOKENPoolQJ3GnpH.stake.call(uintvLIkEGP, {from: accounts[3]});
		const addressrx4AeqH = await BACMARSLPTOKENPoolQJ3GnpH.updateReward.call(addressojpTFrs, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXtk7q3i = "s4LT1hmQYU7YRFa2VxeCU3KXkTGTrKciGffkEJOeFSQD"
		const stringGvc6CH9 = "QPTvs00UNCIJFiEGYptax29uZIdhf91xQhsITNvLEVWgJAHvAzLUvYmTPce9swOT6Vbxns5oFbYJp5iRrTWI2"
		const uinterh4A7a = BigInt("115")
		const BACMARSLPTOKENPoolQczk8nV = await BACMARSLPTOKENPool.new(stringXtk7q3i, stringGvc6CH9, uinterh4A7a, {from: accounts[4]});
		const addressJxY7nA1 = accounts[3]
		const addressb3C2E8i = accounts[3]
		const uintj5uylYo = BigInt("1316")
		const stringBIVc9jw = await BACMARSLPTOKENPoolQczk8nV.symbol.call({from: accounts[0]});
		const uint256jeMzRVI = await BACMARSLPTOKENPoolQczk8nV.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256fsqGv12 = await BACMARSLPTOKENPoolQczk8nV.rewardPerToken.call({from: accounts[1]});
		const uint256Ls38qUc = await BACMARSLPTOKENPoolQczk8nV.earned.call(addressJxY7nA1, {from: accounts[3]});
		const uint256tLU0OcM = await BACMARSLPTOKENPoolQczk8nV.balanceOf.call(addressb3C2E8i, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RAbMKYA = await BACMARSLPTOKENPoolQczk8nV.withdraw.call(uintj5uylYo, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringcvnpgNn = "OERzQymSIywUXs7caBgj4X6ClbiPnipI0Id6ooko0dA4iz0XKw6zS9z8wTggkoqVo0saXI2t"
		const stringlCWbiUQ = "7pmGROfzbHNsRFOyABBU3SvmbW2ohsi5Ig9amnHP0LTlPh4RgC23athRAkzDKr2CDNkwLC8mhyXdjbbhgvyWX"
		const uintGS0H9Re = BigInt("40")
		const BACMARSLPTOKENPoolxKh03o = await BACMARSLPTOKENPool.new(stringcvnpgNn, stringlCWbiUQ, uintGS0H9Re, {from: accounts[1]});
		const uintmPvxwFS = BigInt("521")
		const addressREOzQeO = accounts[3]
		await BACMARSLPTOKENPoolxKh03o.nonReentrant.call({from: accounts[2]});
		await BACMARSLPTOKENPoolxKh03o.onlyRewardsDistribution.call({from: accounts[4]});
		const uint256etM6hyH = await BACMARSLPTOKENPoolxKh03o.notifyRewardAmount.call(uintmPvxwFS, {from: accounts[1]});
		await BACMARSLPTOKENPoolxKh03o.onlyRewardsDistribution.call({from: accounts[0]});
		const uint2566fieFn = await BACMARSLPTOKENPoolxKh03o.balanceOf.call(addressREOzQeO, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwggUYfS = "LM4Pt7At4w2aLVHlfwA7ZhH0eM2Qo08qKZGOjFP8wrCj7VCxbWAX5L9hVc64pXMyJhiYE3zcZNMWxL9tlhZzNWtyY3z9X"
		const stringSCUnxF9 = "ZFHWoN5CqC4Fv5QRc8JUzulLt9uqxAcW58hIOwEDRsx6Jkluvxojl4cuM8TlhvG87llBMJmaWBcHuUZI"
		const uintYFdiu1H = BigInt("118")
		const BACMARSLPTOKENPooldhEyo69 = await BACMARSLPTOKENPool.new(stringwggUYfS, stringSCUnxF9, uintYFdiu1H, {from: accounts[1]});
		await BACMARSLPTOKENPooldhEyo69.getReward.call({from: accounts[0]});
		await BACMARSLPTOKENPooldhEyo69.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringm3I5A2A = "OnniRz899kXYEkMFExKY5PV8cOctePQxKRaGeQE"
		const stringHuMCeOx = "LmUXs"
		const uinthmWCpBG = BigInt("65")
		const BACMARSLPTOKENPoolkccJ94W = await BACMARSLPTOKENPool.new(stringm3I5A2A, stringHuMCeOx, uinthmWCpBG, {from: accounts[0]});
		const uint256rwSnfqs = await BACMARSLPTOKENPoolkccJ94W.getRewardForDuration.call({from: accounts[1]});
		await BACMARSLPTOKENPoolkccJ94W.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolkccJ94W.getReward.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressMtfxrsz = accounts[3]
		const addressXqjrmlX = accounts[4]
		const addressrKKFADI = accounts[2]
		const BACMARSLPTOKENPooluV0omWF = await BACMARSLPTOKENPool.new(addressMtfxrsz, addressXqjrmlX, addressrKKFADI, {from: accounts[1]});
		const bytebDuFZwr = "0x151b0d0012010b0a070a191d1d0e200a101f1417081403121f12100c0507040b"
		const bytejFxiNsf = "0x0905091d081e1f041b08051e1b1dfffffffd12120b11081d0c14110302031f1b0f2009"
		const uintFUjHoXT = BigInt("11")
		const uintJOH6Ldr = BigInt("348")
		const uint33g1s6 = BigInt("1668")
//		const uint256VeXuxi3 = await BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uint33g1s6, uintJOH6Ldr, uintFUjHoXT, bytejFxiNsf, bytebDuFZwr, {from: accounts[1]});

		await expect(BACMARSLPTOKENPooluV0omWF.stakeWithPermit.call(uint33g1s6, uintJOH6Ldr, uintFUjHoXT, bytejFxiNsf, bytebDuFZwr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringocxcENE = "y8AhGXL2us2aMV2I5cgtqAnPRfVjvDiRer8WeC3qzo9Caag5vXOyFftiJWMMCDEwShsNqKUFCL9LHAzjVo"
		const stringHFzlFjK = "utCsqIjgzMAuJj"
		const uintpnTECVU = BigInt("120")
		const BACMARSLPTOKENPoolepRyoZE = await BACMARSLPTOKENPool.new(stringocxcENE, stringHFzlFjK, uintpnTECVU, {from: "0x0000000000000000000000000000000000000001"});
		const addressc9Avaaz = accounts[3]
		const uintovRKis0 = BigInt("1307")
		const addressVvzbCE = accounts[0]
		const uint256ZvNwyZA = await BACMARSLPTOKENPoolepRyoZE.balanceOf.call(addressc9Avaaz, {from: accounts[2]});
		const uint256D8Tf10q = await BACMARSLPTOKENPoolepRyoZE.stake.call(uintovRKis0, {from: accounts[5]});
		const uint256jlGnLf9 = await BACMARSLPTOKENPoolepRyoZE.balanceOf.call(addressVvzbCE, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringP2EqAg = "cetWzpujkEEJqwdNabRmTyYlN6FmfuomrHVUxYRvLdN3qv6cxro1XYXc3FUsOeqVQlE8ZF8"
		const stringwEZD7or = "zh1oLBOsdP1TS1aSbvT7jKncDf3Pgj1irihTvsjtGvx7BqsNIk86NtMi26JNsE4FK15sw"
		const uintOnJC13C = BigInt("164")
		const BACMARSLPTOKENPoolkuQOvQj = await BACMARSLPTOKENPool.new(stringP2EqAg, stringwEZD7or, uintOnJC13C, {from: accounts[4]});
		const uintMK5e74r = BigInt("588")
		const uint256KVKSfXC = await BACMARSLPTOKENPoolkuQOvQj.notifyRewardAmount.call(uintMK5e74r, {from: accounts[0]});
		const uint256PkGa651 = await BACMARSLPTOKENPoolkuQOvQj.rewardPerToken.call({from: accounts[4]});
		await BACMARSLPTOKENPoolkuQOvQj.exit.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSYeuruq = "UdXjpnof8t7ThIM9hQEAe"
		const stringkkeVrG = "UfSyM2o3YKfKW"
		const uintjnsUjrU = BigInt("96")
		const BACMARSLPTOKENPoolmnoRQCg = await BACMARSLPTOKENPool.new(stringSYeuruq, stringkkeVrG, uintjnsUjrU, {from: accounts[4]});
		const addressZnoNQRd = accounts[0]
		const addresshCkpKvf = accounts[2]
		await BACMARSLPTOKENPoolmnoRQCg.nonReentrant.call({from: accounts[2]});
		const uint256q4egReG = await BACMARSLPTOKENPoolmnoRQCg.earned.call(addressZnoNQRd, {from: accounts[1]});
		const uint256jnc6jux = await BACMARSLPTOKENPoolmnoRQCg.balanceOf.call(addresshCkpKvf, {from: accounts[3]});
		const uint256szKDqTU = await BACMARSLPTOKENPoolmnoRQCg.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPpCrfwo = "VyTf47VDGqCvjJN4SmkX1NklFcevxSMtY04C7obs5BVC6"
		const stringboV49vk = "PIp9e0xaxGBip3tWH3iYCjvibD5yHxxCEPffehQulR2i8ceZkOpU3jOc2iBQUR2ABWCU"
		const uintKB7FzUO = BigInt("103")
		const BACMARSLPTOKENPoolhQgHTSX = await BACMARSLPTOKENPool.new(stringPpCrfwo, stringboV49vk, uintKB7FzUO, {from: accounts[2]});
		const uint8hQHCM3O = await BACMARSLPTOKENPoolhQgHTSX.decimals.call({from: accounts[4]});
		const uint256OcMBIi = await BACMARSLPTOKENPoolhQgHTSX.totalSupply.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtJD0pka = "qIXNYeASNiTcNhKYjUA0ynakMa0tg7P1aD6mJ5nC7Ra3Pcr6T9ubBIYb4XA3WXWFJbrARp2ETj5YiNYjxbUATbfGTpxhi"
		const stringud6CCdd = "y4LhJe2XRe5ynHIIe6553Neg98goig6zm5WPCxDQOxAda7ngTwqUTYOkeut5dp2lgJIVLoNSNY8fGtedtaddIwcCT"
		const uintDgXyIre = BigInt("177")
		const BACMARSLPTOKENPoolOkRDeLf = await BACMARSLPTOKENPool.new(stringtJD0pka, stringud6CCdd, uintDgXyIre, {from: accounts[5]});
		const uint256gGoI9g = await BACMARSLPTOKENPoolOkRDeLf.getRewardForDuration.call({from: accounts[4]});
		await BACMARSLPTOKENPoolOkRDeLf.exit.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringtFTbqlY = "jFClglx5a"
		const stringGJVha2d = "AQrm"
		const uintwL95kX2 = BigInt("86")
		const BACMARSLPTOKENPoolUVVuuPl = await BACMARSLPTOKENPool.new(stringtFTbqlY, stringGJVha2d, uintwL95kX2, {from: accounts[1]});
		const uintDuzKlCv = BigInt("1520")
		const addresslLHlsi5 = accounts[3]
		const uint256lJIz19S = await BACMARSLPTOKENPoolUVVuuPl.lastTimeRewardApplicable.call({from: accounts[2]});
		await BACMARSLPTOKENPoolUVVuuPl.getReward.call({from: accounts[0]});
		const uint256EFpbOL4 = await BACMARSLPTOKENPoolUVVuuPl.withdraw.call(uintDuzKlCv, {from: accounts[4]});
		const uint256TDM6LAp = await BACMARSLPTOKENPoolUVVuuPl.balanceOf.call(addresslLHlsi5, {from: accounts[1]});
		await BACMARSLPTOKENPoolUVVuuPl.nonReentrant.call({from: accounts[0]});
		const uint256gGMYgok = await BACMARSLPTOKENPoolUVVuuPl.rewardPerToken.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringiPTCqJ9 = "0yIdUMeD93IeQNnlwuEkYdklNPBYNYPpszNDHCoqXPsf8kXChpNy8gXCTAa84m6VQaLRjnMwoGnlaVUVzH1B1"
		const stringNJdfH20 = "kxVDvIKCDBvIQCbANxGfy7forUodJTwp2y9zqJlP65Wmv7nVaPXLohf7QwtSlaW"
		const uintG35qiM = BigInt("9")
		const BACMARSLPTOKENPoollLlwqUI = await BACMARSLPTOKENPool.new(stringiPTCqJ9, stringNJdfH20, uintG35qiM, {from: accounts[2]});
		const uintVIUGdDT = BigInt("1024")
		const uintdkPDN3n = BigInt("1392")
		const uint256DnarhrB = await BACMARSLPTOKENPoollLlwqUI.withdraw.call(uintVIUGdDT, {from: accounts[3]});
		const uint256i2lB9M5 = await BACMARSLPTOKENPoollLlwqUI.stake.call(uintdkPDN3n, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOBXmuDp = "ozl161Pxkydu3Vs1a2QvXnVjKeeGfAwqEQd93KKSIxK9J8WbUAruGK4pJsU5u1UhAjk4WyHk"
		const stringiwSPSUi = "mLd2"
		const uintmaJgDh = BigInt("240")
		const BACMARSLPTOKENPoolzC6SiVm = await BACMARSLPTOKENPool.new(stringOBXmuDp, stringiwSPSUi, uintmaJgDh, {from: accounts[3]});
		const uintZm28Wzk = BigInt("880")
		const uint256wlpKYd5 = await BACMARSLPTOKENPoolzC6SiVm.rewardPerToken.call({from: accounts[2]});
		const uint8kjcpYeB = await BACMARSLPTOKENPoolzC6SiVm.decimals.call({from: accounts[1]});
		const uint256am1b27W = await BACMARSLPTOKENPoolzC6SiVm.stake.call(uintZm28Wzk, {from: accounts[2]});
		const uint8lSYJVNL = await BACMARSLPTOKENPoolzC6SiVm.decimals.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbaE4V5Z = "oqcmZhWMaLqVCtCuO64lpvWDI4hnS3h29BI5UlxMFPn7FBFKyVHhZiFvYuk1RW9LQJMwSuGwgKtsfYNRqVoLrBVLFWWL7mVO"
		const stringTSqAwTA = "E48UhdMSGgQeATGcleTu2ybxhL6amrBceWvC9EPEe7ndmPjOl8y"
		const uintI8HikKF = BigInt("207")
		const BACMARSLPTOKENPoolQ8GzTv = await BACMARSLPTOKENPool.new(stringbaE4V5Z, stringTSqAwTA, uintI8HikKF, {from: accounts[0]});
		await BACMARSLPTOKENPoolQ8GzTv.onlyRewardsDistribution.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256SBmZbh3 = await BACMARSLPTOKENPoolQ8GzTv.totalSupply.call({from: accounts[3]});
		await BACMARSLPTOKENPoolQ8GzTv.onlyRewardsDistribution.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringt5PU9Jk = "PaVVqFRE6ZU3uM7a6iHPv29WFo0qsHY3o"
		const stringVquPqZN = "GU1g7J5Nfk4sb4cvsdNoKnAYBb6fKRcjuSol8haS6KAH2Qy7rV1plPvOUs7d9aDx8gRgS59uM1W2AO6GSM87GEF"
		const uintZC1ctun = BigInt("152")
		const BACMARSLPTOKENPoolEdGVNsk = await BACMARSLPTOKENPool.new(stringt5PU9Jk, stringVquPqZN, uintZC1ctun, {from: "0x0000000000000000000000000000000000000001"});
		const uintDOBxjsg = BigInt("1869")
		const uintfVK19Q3 = BigInt("430")
		const uintWjgNKX = BigInt("220")
		const uint256YlQVeel = await BACMARSLPTOKENPoolEdGVNsk.stake.call(uintDOBxjsg, {from: accounts[2]});
		const uint256IVhbZOb = await BACMARSLPTOKENPoolEdGVNsk.withdraw.call(uintfVK19Q3, {from: accounts[3]});
		await BACMARSLPTOKENPoolEdGVNsk.nonReentrant.call({from: accounts[5]});
		const uint256FYR0pKl = await BACMARSLPTOKENPoolEdGVNsk.stake.call(uintWjgNKX, {from: accounts[2]});
		await BACMARSLPTOKENPoolEdGVNsk.nonReentrant.call({from: accounts[4]});
		const uint256C26sFX6 = await BACMARSLPTOKENPoolEdGVNsk.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringTGR8qOH = "STkvD3Ck3SrRulR4M7Ir8tLNbkiLrFgxY3YF"
		const stringPWoZRP8 = "PzyYkixN12pyrbyjN78DDSlkFRiRySSWFrUv2BgPXG9C9bXy4YUxnxpOdJC52DQhAfcm7IlNqry"
		const uintWyN1eHC = BigInt("178")
		const BACMARSLPTOKENPoolx2kXMGb = await BACMARSLPTOKENPool.new(stringTGR8qOH, stringPWoZRP8, uintWyN1eHC, {from: accounts[1]});
		const addressnQIf6p = accounts[4]
		const uint256wOpyMOm = await BACMARSLPTOKENPoolx2kXMGb.getRewardForDuration.call({from: accounts[0]});
		const uint256EpqvUHr = await BACMARSLPTOKENPoolx2kXMGb.balanceOf.call(addressnQIf6p, {from: accounts[1]});
		const uint8v5aTyMe = await BACMARSLPTOKENPoolx2kXMGb.decimals.call({from: accounts[3]});
		await BACMARSLPTOKENPoolx2kXMGb.onlyRewardsDistribution.call({from: accounts[1]});
		const uint256fcU5EH8 = await BACMARSLPTOKENPoolx2kXMGb.getRewardForDuration.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPlRFMWd = "HcUYPiGdC40oBi8t"
		const stringFjwqgrY = "m3hz8gN0OIomGpWIOcQO43XuZEmYJUdcEYhFI462PVDeHZEbvUGK"
		const uintiY0IWMd = BigInt("199")
		const BACMARSLPTOKENPoolu0vNYHb = await BACMARSLPTOKENPool.new(stringPlRFMWd, stringFjwqgrY, uintiY0IWMd, {from: accounts[0]});
		const byteDpPye0D = "0x0601180a1e091d03131f0f1819170904011a070a0c18080b061a180b1a1c121a"
		const byteu8bEWUo = "0x0e130c00031e0e0a17191d130f07191e0a05101c120e1d06101d0316151b110f"
		const uintp3jAsBL = BigInt("198")
		const uintdBebBNb = BigInt("1928")
		const uintuHcUSss = BigInt("1455")
		const uintekf43B2 = BigInt("622")
		const uintCJsfDCP = BigInt("2025")
		const uintAvIQMjh = BigInt("1393")
		await BACMARSLPTOKENPoolu0vNYHb.exit.call({from: accounts[4]});
		const uint256P3IN2xQ = await BACMARSLPTOKENPoolu0vNYHb.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256vdVD4Ap = await BACMARSLPTOKENPoolu0vNYHb.stakeWithPermit.call(uintuHcUSss, uintdBebBNb, uintp3jAsBL, byteu8bEWUo, byteDpPye0D, {from: accounts[4]});
		const uint256tzucBfG = await BACMARSLPTOKENPoolu0vNYHb.notifyRewardAmount.call(uintekf43B2, {from: accounts[3]});
		const uint256dN8a730 = await BACMARSLPTOKENPoolu0vNYHb.stake.call(uintCJsfDCP, {from: accounts[0]});
		const uint256KlXF2t0 = await BACMARSLPTOKENPoolu0vNYHb.stake.call(uintAvIQMjh, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSyTcmB = "T2SKqJF2UrOEva9mC9cufJ5svJWdsHU96KVLb6thCpusHo"
		const stringbeUuKAW = "hLTfcCzEAkxRlr71e84ElBRCuUu6SnvPCNgr2hrGeOGxA927tzNUe58nq5xcdUfdDIi4Hnh9kEyR5KM5OW8aADn8VR8g2JV"
		const uintC7x7xZt = BigInt("33")
		const BACMARSLPTOKENPoolKpALufz = await BACMARSLPTOKENPool.new(stringSyTcmB, stringbeUuKAW, uintC7x7xZt, {from: accounts[2]});
		const stringO8YDJ6J = await BACMARSLPTOKENPoolKpALufz.symbol.call({from: accounts[0]});
		const uint256Bq0uKtM = await BACMARSLPTOKENPoolKpALufz.lastTimeRewardApplicable.call({from: accounts[5]});
		await BACMARSLPTOKENPoolKpALufz.getReward.call({from: accounts[1]});
		await BACMARSLPTOKENPoolKpALufz.getReward.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJoxzRZT = "hcRkd1Xy6VsYvS7kDnm7pG32RrCc8xFHybFkIUfGkjJicGOsSwNGgOlsx68Tk7WYIU2K5gdVvhqfyX7vU3G2tlwpwyRjvq"
		const stringARmtGOl = "S2kiy1hyEmfRNTmFdvQN3qwILgqb57gGJ4N3sqq0BhaUzEYUJ8txviBxOZ"
		const uintkwmFE2L = BigInt("158")
		const BACMARSLPTOKENPooljZ8LPBG = await BACMARSLPTOKENPool.new(stringJoxzRZT, stringARmtGOl, uintkwmFE2L, {from: "0x0000000000000000000000000000000000000001"});
		const bytejWk4LnJ = "0x1d1d031a0102201a01030f16020c1d021d0d011f05161909191a1f19121e2018"
		const bytejIRrPuY = "0x041a1d1d12181e0d090a0914150c041c051101161a1e120817140e0105030002"
		const uintV2xqUIT = BigInt("115")
		const uinteElsYWB = BigInt("1419")
		const uintulpneAe = BigInt("1976")
		const uintghAdo2 = BigInt("144")
		const uint256CTheyt7 = await BACMARSLPTOKENPooljZ8LPBG.stakeWithPermit.call(uintulpneAe, uinteElsYWB, uintV2xqUIT, bytejIRrPuY, bytejWk4LnJ, {from: accounts[1]});
		await BACMARSLPTOKENPooljZ8LPBG.getReward.call({from: accounts[4]});
		const uint256djBmAVs = await BACMARSLPTOKENPooljZ8LPBG.notifyRewardAmount.call(uintghAdo2, {from: accounts[0]});
		await BACMARSLPTOKENPooljZ8LPBG.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringjsHhCX = "czzZltycok0YMfqg9VJrV2z9Ium5FcsDiXOrMdivUwFzXQCwMNXA25K4gy69njO"
		const stringzKqxMv = "n8iKNtfh6mzCXvrbMVR5dQVVgB5ETNerJKLJLMlvsi8ZWKib04DoygywqKLVGGsRUYjx7"
		const uintjf2RCXD = BigInt("148")
		const BACMARSLPTOKENPoolOwgqF2W = await BACMARSLPTOKENPool.new(stringjsHhCX, stringzKqxMv, uintjf2RCXD, {from: accounts[5]});
		const bytebetquMj = "0x1811151a150c05011c0701120e1f1805090d180d1018150010140b111519190b"
		const bytemsRa0fK = "0x0c0208020e0a06070917131100110a17110111150a021f150907131c07091811"
		const uintMph725W = BigInt("12")
		const uintXfAlxio = BigInt("496")
		const uintLpnOfmR = BigInt("1674")
		await BACMARSLPTOKENPoolOwgqF2W.exit.call({from: accounts[1]});
		await BACMARSLPTOKENPoolOwgqF2W.exit.call({from: accounts[4]});
		const stringf5x6RKz = await BACMARSLPTOKENPoolOwgqF2W.symbol.call({from: accounts[4]});
		const uint256jFtKHOx = await BACMARSLPTOKENPoolOwgqF2W.stakeWithPermit.call(uintLpnOfmR, uintXfAlxio, uintMph725W, bytemsRa0fK, bytebetquMj, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringK1ioC0T = "4WsB"
		const stringenCgsk1 = "ww8zhoAO2P7t4zXNrJmKB2P8zfxTtqGo0FyjDmEav1zVHia7G4b"
		const uintgK6EuPa = BigInt("126")
		const BACMARSLPTOKENPoolgVOxnrJ = await BACMARSLPTOKENPool.new(stringK1ioC0T, stringenCgsk1, uintgK6EuPa, {from: accounts[0]});
		const uintNIGPOU4 = BigInt("206")
		const uintPnKdQCi = BigInt("62")
		const addressHKJKoee = accounts[1]
		const uintll7OZU = BigInt("175")
		const uint256b1Rol4S = await BACMARSLPTOKENPoolgVOxnrJ.withdraw.call(uintNIGPOU4, {from: accounts[1]});
		const uint256dWesehY = await BACMARSLPTOKENPoolgVOxnrJ.withdraw.call(uintPnKdQCi, {from: accounts[3]});
		const uint256DJJAHi2 = await BACMARSLPTOKENPoolgVOxnrJ.balanceOf.call(addressHKJKoee, {from: accounts[4]});
		const uint2569OiVrR = await BACMARSLPTOKENPoolgVOxnrJ.stake.call(uintll7OZU, {from: accounts[2]});
		const stringFETu2bY = await BACMARSLPTOKENPoolgVOxnrJ.symbol.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringkvernbM = "c6AHSGWE1jHQNQ9roXANJVDShk"
		const stringmFDWCWP = "8aeCXxMNPtd1ZvWQnQM9ISJCb7weybJzbpE37G0raruFcmb8LU1Zls"
		const uintOXr9l9o = BigInt("101")
		const BACMARSLPTOKENPoolz5wMahp = await BACMARSLPTOKENPool.new(stringkvernbM, stringmFDWCWP, uintOXr9l9o, {from: "0x0000000000000000000000000000000000000001"});
		const uintnaRMf8C = BigInt("884")
		const uint256BK47J79 = await BACMARSLPTOKENPoolz5wMahp.withdraw.call(uintnaRMf8C, {from: "0x0000000000000000000000000000000000000001"});
		const uint256zTEWTpT = await BACMARSLPTOKENPoolz5wMahp.rewardPerToken.call({from: accounts[0]});
		const uint256c7bf303 = await BACMARSLPTOKENPoolz5wMahp.rewardPerToken.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeBXLXSa = "XWPQetkntgUq9FL9qvFE4YQqvbO3XMXay3RZlIE0ZVX33SbUi8MpspCHd4TxrPzxMrh"
		const stringvtpQxBe = "VGyO0sXFsqDT3St9etPi4q5BXNkKk8e7wxBSgFuiHJpThhae4xS7QJx9kbrQMT3"
		const uintrq4sjaP = BigInt("169")
		const BACMARSLPTOKENPoolLLzvs7E = await BACMARSLPTOKENPool.new(stringeBXLXSa, stringvtpQxBe, uintrq4sjaP, {from: accounts[4]});
		const addressqXL8Ef = accounts[1]
		const byteS29jTlp = "0x0d0607130f0b071e1b1211121d1d031b0a011e02200c101f01110811060f1b12"
		const byteqQEPxMm = "0x121a0607111d0b0d061d1f161e011e14181d0c170b201611130817080220011b"
		const uintmI3nNOC = BigInt("231")
		const uintHAroZ9o = BigInt("681")
		const uintGwo32f = BigInt("656")
		const uint8VzzAAwG = await BACMARSLPTOKENPoolLLzvs7E.decimals.call({from: accounts[0]});
		const stringo5H5XLw = await BACMARSLPTOKENPoolLLzvs7E.name.call({from: accounts[3]});
		const uint256Y3MQExf = await BACMARSLPTOKENPoolLLzvs7E.balanceOf.call(addressqXL8Ef, {from: accounts[2]});
		const uint256ggapX4y = await BACMARSLPTOKENPoolLLzvs7E.stakeWithPermit.call(uintGwo32f, uintHAroZ9o, uintmI3nNOC, byteqQEPxMm, byteS29jTlp, {from: accounts[0]});
		await BACMARSLPTOKENPoolLLzvs7E.nonReentrant.call({from: accounts[1]});
		const uint256Xj4UvtN = await BACMARSLPTOKENPoolLLzvs7E.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwzah98L = "HEgI4psyIsYtOlVXHHyNMC1BmpqZcsEn6bQds4k2jCRdF"
		const stringEyPYsF3 = "4pQrhJoAUgFuOUTUMUg61i3QjWNMnfAjaieeJK93M8zEiye1Tpt3o6Rc4RaXafisJ3EAtQS"
		const uintJ3tCiZ = BigInt("254")
		const BACMARSLPTOKENPoolUwX1xOK = await BACMARSLPTOKENPool.new(stringwzah98L, stringEyPYsF3, uintJ3tCiZ, {from: accounts[3]});
		const uint256hBUxZHo = await BACMARSLPTOKENPoolUwX1xOK.getRewardForDuration.call({from: accounts[4]});
		const stringCIqAWPa = await BACMARSLPTOKENPoolUwX1xOK.name.call({from: accounts[5]});
		const uint256RGCO3qy = await BACMARSLPTOKENPoolUwX1xOK.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256zD69yap = await BACMARSLPTOKENPoolUwX1xOK.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
	});
})