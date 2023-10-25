const TetherToken = artifacts.require("TetherToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TetherToken', (accounts) => {
	it('test for TetherToken', async () => {
		const uintJ1hat95 = BigInt("185")
		const stringDNBgif = "UN5MMjKk0lGL9lmQenr34ubpq0YXqG8sdRMva3D2EALMa8zhvHCfxn9dlOzCBap5i2JUWRZghjMf7D"
		const stringiOt3EWi = "J51tDtWyHL27qj5zO932WQk3gc3ewLUNRyiJGYJLa7RctIcPuqpytLBdKvYFltI4sTyPkZROFriqbTF"
		const uintSLv25oo = BigInt("1553")
		const TetherTokenBc44qfv = await TetherToken.new(uintJ1hat95, stringDNBgif, stringiOt3EWi, uintSLv25oo, {from: accounts[2]});
		const addressx7WgNvb = accounts[2]
		const uinthyEn4HN = BigInt("1115")
		const address12mUy8 = accounts[2]
		const addressOudln0K = accounts[1]
		const uintMtWDdVV = await TetherTokenBc44qfv.balanceOf.call(addressx7WgNvb, {from: "0x0000000000000000000000000000000000000001"});
		const addresscakMiO = await TetherTokenBc44qfv.transferFrom.call(addressOudln0K, address12mUy8, uinthyEn4HN, {from: accounts[2]});

		assert.equal(uintMtWDdVV, BigInt("185"))
		await expect(TetherTokenBc44qfv.transferFrom.call(addressOudln0K, address12mUy8, uinthyEn4HN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintpIZpzbc = BigInt("523")
		const stringkHUCjq1 = "sHzvrMbEybrg3S"
		const stringKDWxOB3 = "Jbe3wtGW4OLCUiGJsD0Vhy80qT9YXDg8"
		const uintH5snOz5 = BigInt("1194")
		const TetherTokenxnGIyXY = await TetherToken.new(uintpIZpzbc, stringkHUCjq1, stringKDWxOB3, uintH5snOz5, {from: accounts[1]});
		const uintIEiuEu = BigInt("773")
		const addressM916RqI = accounts[4]
		const uintLRXMEJu = BigInt("644")
		const uintvrmuchd = BigInt("876")
		const addressEdUmZNp = accounts[2]
		const addressmwGvarl = accounts[4]
		const address9bkyuP = await TetherTokenxnGIyXY.transfer.call(addressM916RqI, uintIEiuEu, {from: accounts[3]});
		const uintf4DpiY = await TetherTokenxnGIyXY.redeem.call(uintLRXMEJu, {from: accounts[3]});
		const addressGp8Qzza = await TetherTokenxnGIyXY.transferFrom.call(addressmwGvarl, addressEdUmZNp, uintvrmuchd, {from: accounts[3]});

		await expect(TetherTokenxnGIyXY.transfer.call(addressM916RqI, uintIEiuEu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintMMGm8rU = BigInt("508")
		const stringJ6EVex = "2VlWRc82DhFc74RfWIT4rZvzXwd4fuvyWASScz3ZVRhQcY2vByhSSN3PwND"
		const stringicRm5dt = "qxcyWHn3pqkNBjYmw58eWxoVeqb7GccRMwcQU469hYxHSZuU8buW4a2sspF4"
		const uintBGiPXAR = BigInt("1559")
		const TetherTokenXY5m0FJ = await TetherToken.new(uintMMGm8rU, stringJ6EVex, stringicRm5dt, uintBGiPXAR, {from: accounts[0]});
		const addressvcHXHYC = accounts[2]
		const uintNGPHFRA = BigInt("228")
		const uintGkJy7ln = BigInt("558")
		const uintkvlfZ6g = BigInt("585")
		const uintCPVV81K = await TetherTokenXY5m0FJ.balanceOf.call(addressvcHXHYC, {from: accounts[4]});
		const uintmneQQFt = await TetherTokenXY5m0FJ.totalSupply.call({from: accounts[1]});
		const uintlx7f1qj = await TetherTokenXY5m0FJ.issue.call(uintNGPHFRA, {from: accounts[4]});
		const uintrHFTKq = await TetherTokenXY5m0FJ.setParams.call(uintkvlfZ6g, uintGkJy7ln, {from: accounts[4]});

		assert.equal(uintCPVV81K, BigInt("0"))
		assert.equal(uintmneQQFt, BigInt("508"))
		await expect(TetherTokenXY5m0FJ.issue.call(uintNGPHFRA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintMynEyVl = BigInt("1729")
		const stringKZoqfYP = "Vd6THqV1LQVawoMif7sqy0SgQYEinscwQnn6kNgsF0lMCXc8Wda87olzdEYkilNLz3Q7"
		const stringCRFE6So = "2UEr1bBJWwY62ybLuVC7E5LfYm0CfERc2lY68ZuNhHqQFMNAepPbs2vqp3sgs89ztxbgHCKARXspRz7rzvVSn"
		const uintQt79e6O = BigInt("16")
		const TetherTokenaQuk3GJ = await TetherToken.new(uintMynEyVl, stringKZoqfYP, stringCRFE6So, uintQt79e6O, {from: accounts[1]});
		const uintaz3f8pa = BigInt("1854")
		const uintdHlTF45 = BigInt("535")
		const uintkWtqBRz = BigInt("1015")
		const addressiRFsP3D = accounts[4]
		const addresszl9e0uJ = accounts[0]
		const uintVZy7Et = BigInt("469")
		const addressGWzkS0D = accounts[2]
		const uintZA0OoPj = await TetherTokenaQuk3GJ.redeem.call(uintaz3f8pa, {from: accounts[5]});
		const uintiamJoPg = await TetherTokenaQuk3GJ.setParams.call(uintkWtqBRz, uintdHlTF45, {from: accounts[3]});
		const uintvMF6jB = await TetherTokenaQuk3GJ.allowance.call(addresszl9e0uJ, addressiRFsP3D, {from: accounts[4]});
		const addressJMFZz7i = await TetherTokenaQuk3GJ.approve.call(addressGWzkS0D, uintVZy7Et, {from: accounts[5]});

		await expect(TetherTokenaQuk3GJ.redeem.call(uintaz3f8pa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintaVQvqH = BigInt("1755")
		const stringsBvqYjq = "wfmRcppdDDXk3hbdQntonsSjAsdMdNk072vOWBMJ4Rt9eHrizstYYGidRLibW3KtEFCqgDpAKEN8M4uE"
		const stringphbeXib = "JeH3kf8DET5D1AllCfsLQsgVmqKjphCquKICCm8qGzEVCkK88k7Orl07DwcbbJ"
		const uinttR2pR0C = BigInt("1342")
		const TetherTokenC86U0po = await TetherToken.new(uintaVQvqH, stringsBvqYjq, stringphbeXib, uinttR2pR0C, {from: accounts[2]});
		const uintTlHFrzx = BigInt("821")
		const addressdCGb0wd = accounts[3]
		const addressGyOSoob = accounts[0]
		const addressu7snb1t = accounts[2]
		const addresswWptp0A = await TetherTokenC86U0po.transfer.call(addressdCGb0wd, uintTlHFrzx, {from: accounts[2]});
		const uintvxGFlsQ = await TetherTokenC86U0po.allowance.call(addressu7snb1t, addressGyOSoob, {from: accounts[2]});

		assert.equal(uintvxGFlsQ, BigInt("0"))
	});

	it('test for TetherToken', async () => {
		const uintWNfxIVt = BigInt("230")
		const stringeychQr4 = ""
		const stringHAKrYQB = "yo2fjVfYAmUmjLVrs1rijv6CiyEqvxppSKJNbc"
		const uintuHDy2ep = BigInt("1964")
		const TetherTokenXORNv8i = await TetherToken.new(uintWNfxIVt, stringeychQr4, stringHAKrYQB, uintuHDy2ep, {from: accounts[1]});
		const addressx4GKPj6 = accounts[4]
		const addressFkcdvX = accounts[3]
		const uintx5H37fT = BigInt("589")
		const uintBPIgrUm = BigInt("1813")
		const addressCEaHs1I = accounts[2]
		const uintZ4MA9lC = BigInt("633")
		const uintdoY0T8 = BigInt("139")
		const uintxKuJW36 = await TetherTokenXORNv8i.balanceOf.call(addressx4GKPj6, {from: accounts[0]});
		const addressRkN4WlS = await TetherTokenXORNv8i.deprecate.call(addressFkcdvX, {from: "0x0000000000000000000000000000000000000001"});
		const uintEN0zoY = await TetherTokenXORNv8i.issue.call(uintx5H37fT, {from: accounts[2]});
		const addressRUKF87B = await TetherTokenXORNv8i.transfer.call(addressCEaHs1I, uintBPIgrUm, {from: "0x0000000000000000000000000000000000000001"});
		const uintbUPBQO7 = await TetherTokenXORNv8i.redeem.call(uintZ4MA9lC, {from: accounts[1]});
		const uintRD4FrX4 = await TetherTokenXORNv8i.issue.call(uintdoY0T8, {from: accounts[2]});

		assert.equal(uintxKuJW36, BigInt("0"))
		await expect(TetherTokenXORNv8i.deprecate.call(addressFkcdvX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uinteu6U5xh = BigInt("1755")
		const stringsBvqYjq = "wfmRcppdDDXk3hbdQntonsSjAsdMdNk072vOWBMJ4Rt9eHrizstYYGidRLibW3KtEFCqgDpAKEN8M4uE"
		const stringphbeXib = "JeH3kf8DET5D1AllCfsLQsgVmqKjphCquKICCm8qGzEVCkK88k7Orl07DwcbbJ"
		const uintIoycn49 = BigInt("1342")
		const TetherTokenC86U0po = await TetherToken.new(uinteu6U5xh, stringsBvqYjq, stringphbeXib, uintIoycn49, {from: accounts[2]});
		const uintm7QVc1O = BigInt("94")
		const uintIEduByL = BigInt("2046")
		const uintkrRjVSK = BigInt("821")
		const addressx1jClPX = accounts[4]
		const addressrAa5pxt = accounts[3]
		const addressQRapoc = accounts[0]
		const addressuZXnUN = accounts[2]
		const uintVdIfvgB = await TetherTokenC86U0po.setParams.call(uintIEduByL, uintm7QVc1O, {from: accounts[4]});
		const addresswWptp0A = await TetherTokenC86U0po.transfer.call(addressx1jClPX, uintkrRjVSK, {from: accounts[2]});
		const uintzdMkC42 = await TetherTokenC86U0po.balanceOf.call(addressrAa5pxt, {from: accounts[3]});
		const uintvxGFlsQ = await TetherTokenC86U0po.allowance.call(addressuZXnUN, addressQRapoc, {from: accounts[2]});

		await expect(TetherTokenC86U0po.setParams.call(uintIEduByL, uintm7QVc1O, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintHLVmKHA = BigInt("1755")
		const stringsBvqYjq = "wfmRcppdDDXk3hbdQntonsSjAsdMdNk072vOWBMJ4Rt9eHrizstYYGidRLibW3KtEFCqgDpAKEN8M4uE"
		const stringphbeXib = "JeH3kf8DET5D1AllCfsLQsgVmqKjphCquKICCm8qGzEVCkK88k7Orl07DwcbbJ"
		const uintpSZdTPB = BigInt("1342")
		const TetherTokenC86U0po = await TetherToken.new(uintHLVmKHA, stringsBvqYjq, stringphbeXib, uintpSZdTPB, {from: accounts[2]});
		const uintXCwV1wN = BigInt("1881")
		const addressOAythdM = accounts[3]
		const uintPImS3g = BigInt("1634")
		const uintfnFMCdv = BigInt("1173")
		const addressNaucN7f = accounts[0]
		const addressyTf85Oy = accounts[2]
		const uintM7gMRgj = BigInt("1634")
		const uintzqx2cIA = BigInt("1373")
		const addressqmNG64S = await TetherTokenC86U0po.approve.call(addressOAythdM, uintXCwV1wN, {from: "0x0000000000000000000000000000000000000001"});
		const uintjVbatSG = await TetherTokenC86U0po.setParams.call(uintfnFMCdv, uintPImS3g, {from: accounts[5]});
		const uintvxGFlsQ = await TetherTokenC86U0po.allowance.call(addressyTf85Oy, addressNaucN7f, {from: accounts[2]});
		const uintk34y38G = await TetherTokenC86U0po.setParams.call(uintzqx2cIA, uintM7gMRgj, {from: accounts[2]});

		await expect(TetherTokenC86U0po.setParams.call(uintfnFMCdv, uintPImS3g, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TetherToken', async () => {
		const uintMazIyHP = BigInt("10")
		const stringladawPX = "oyOHgIBa5mmjW7BKoOtBm9lEpSwgtcLwFnvgaNE5JX9Hoo0VHwALWFI9"
		const stringVIhaAVb = "kX4cR6lMTXVwyvN9AyRmxXDzxi9et41vWXEkY06PT3iIdu8uD4zWKAkiNarS8Y2nPswWcFrOOYGums0gsbp752PgK1Wdondk"
		const uinthqlYnp = BigInt("1190")
		const TetherTokenZf6Fy8n = await TetherToken.new(uintMazIyHP, stringladawPX, stringVIhaAVb, uinthqlYnp, {from: "0x0000000000000000000000000000000000000001"});
		const addressAayLAIf = accounts[2]
		const addressUiDJOct = "0x0000000000000000000000000000000000000001"
		const addressSnfLNkl = "0x0000000000000000000000000000000000000001"
		const uint9mzBWz = BigInt("752")
		const addresspW9MCMG = accounts[2]
		const addressY1vfgq3 = accounts[3]
		const addressa2ExUjx = accounts[2]
		const uintI9BpooV = BigInt("202")
		const addressuayiG5N = accounts[4]
		const addressYjpXKl0 = "0x0000000000000000000000000000000000000001"
		const uintxC62NO2 = BigInt("1527")
		const uintclDh3Zi = BigInt("17")
		const addressHHv5jyG = await TetherTokenZf6Fy8n.deprecate.call(addressAayLAIf, {from: accounts[2]});
		const uintC67HTnv = await TetherTokenZf6Fy8n.allowance.call(addressSnfLNkl, addressUiDJOct, {from: accounts[3]});
		const addresssR09RyU = await TetherTokenZf6Fy8n.transferFrom.call(addressY1vfgq3, addresspW9MCMG, uint9mzBWz, {from: accounts[0]});
		const uintlEZ2yoW = await TetherTokenZf6Fy8n.balanceOf.call(addressa2ExUjx, {from: accounts[3]});
		const addressKyhzCkf = await TetherTokenZf6Fy8n.transferFrom.call(addressYjpXKl0, addressuayiG5N, uintI9BpooV, {from: accounts[0]});
		const uintvJ9wAby = await TetherTokenZf6Fy8n.setParams.call(uintclDh3Zi, uintxC62NO2, {from: accounts[0]});
	});
})