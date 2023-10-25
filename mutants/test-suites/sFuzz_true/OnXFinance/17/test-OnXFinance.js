const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringB6ArlaW = "XebPFARKAxf18UVLX69UFK8bSQC9OCFF8varz4y69gEPzlIbxRDsaAQT7pYSK"
		const stringra4ig0S = "okGTPtN2q0Ap6n34SNBb"
		const uintNpXN2oJ = BigInt("149")
		const OnXFinancennY83Yt = await OnXFinance.new(stringB6ArlaW, stringra4ig0S, uintNpXN2oJ, {from: accounts[1]});
		const uintv8yO2dq = BigInt("152")
		const addressQsnWHSh = accounts[4]
		const addressP3dXpf = accounts[3]
		const addressJcVHUFk = accounts[4]
		const uintCPz4vzn = BigInt("621")
		const addressnqQyYLm = accounts[5]
//		const boolpDeWIeD = await OnXFinancennY83Yt.transferFrom.call(addressP3dXpf, addressQsnWHSh, uintv8yO2dq, {from: accounts[2]});
//		const boolRQrNNQ = await OnXFinancennY83Yt.transferownership.call(addressJcVHUFk, {from: accounts[1]});
//		const boolCnfeN2H = await OnXFinancennY83Yt.decreaseAllowance.call(addressnqQyYLm, uintCPz4vzn, {from: accounts[2]});

		await expect(OnXFinancennY83Yt.transferFrom.call(addressP3dXpf, addressQsnWHSh, uintv8yO2dq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringvBoF3ly = "gyhT4mjpmppWIvBmEV"
		const stringD5JjHTe = "Nnrw1nfyVRF5f3cgQT7nb455hxV7xCv9O770kom8Fo7cn264pnkMVyP3rM3afV4RUS2"
		const uintk82ZSPr = BigInt("519")
		const OnXFinancevFG2Pse = await OnXFinance.new(stringvBoF3ly, stringD5JjHTe, uintk82ZSPr, {from: accounts[0]});
		const uintNc5Wn4H = BigInt("1427")
		const addresslhSnfMD = accounts[4]
		const uint25bA4a = BigInt("535")
		const addressmPQz2ge = accounts[2]
		const uintFE7k6tO = BigInt("672")
		const addresshOV7loS = accounts[2]
		const addressn0ymtJd = accounts[4]
		const addresshHvFu7X = "0x0000000000000000000000000000000000000001"
		const addressw0XoxWS = accounts[4]
		const boolBVpvuaE = await OnXFinancevFG2Pse.approve.call(addresslhSnfMD, uintNc5Wn4H, {from: accounts[1]});
		const boolYIdOUs = await OnXFinancevFG2Pse.approve.call(addressmPQz2ge, uint25bA4a, {from: "0x0000000000000000000000000000000000000001"});
		const stringPRxXahy = await OnXFinancevFG2Pse.symbol.call({from: accounts[2]});
//		const boolNL7uLF5 = await OnXFinancevFG2Pse.increaseAllowance.call(addresshOV7loS, uintFE7k6tO, {from: accounts[1]});
//		const boolB5dMQNn = await OnXFinancevFG2Pse.transferownership.call(addressn0ymtJd, {from: "0x0000000000000000000000000000000000000001"});
//		const uintdaKWMeN = await OnXFinancevFG2Pse.allowance.call(addressw0XoxWS, addresshHvFu7X, {from: accounts[4]});

		assert.equal(boolBVpvuaE, true)
		assert.equal(boolYIdOUs, true)
		assert.equal(stringPRxXahy, "Nnrw1nfyVRF5f3cgQT7nb455hxV7xCv9O770kom8Fo7cn264pnkMVyP3rM3afV4RUS2")
		await expect(OnXFinancevFG2Pse.increaseAllowance.call(addresshOV7loS, uintFE7k6tO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringrC5sO2c = "Qz5UnczkB4ejuRWclev3nOOL37PAJkTEJvfAvVIGY4Pv9ENj2mVcoLEsqjqdIysBbVGRIofRbvlv5ur"
		const stringL6A2jHo = "IPQ31GeLSgPBRgXoNAv2Sj2eXzEtARoWQTKjeApvoIycamxsmtqcZ"
		const uintqq6HMX6 = BigInt("18")
		const OnXFinancehuS3Zx2 = await OnXFinance.new(stringrC5sO2c, stringL6A2jHo, uintqq6HMX6, {from: accounts[1]});
		const uintaxqV0AI = BigInt("2003")
		const addressZZUbnlp = accounts[5]
		const uintb0hNx91 = BigInt("2042")
		const addressyhQ9orX = accounts[3]
		const uintL2wKR91 = BigInt("9")
		const addressYipCAn7 = accounts[0]
		const addressrCwFUc = accounts[0]
		const uintoTqluh5 = BigInt("204")
		const addressnyhAw2h = accounts[3]
		const uintK6VaZ0L = BigInt("387")
		const addresswml2N3 = accounts[0]
		const boolTUgioLf = await OnXFinancehuS3Zx2.transfer.call(addressZZUbnlp, uintaxqV0AI, {from: accounts[1]});
		const boolyqb9gF = await OnXFinancehuS3Zx2.approve.call(addressyhQ9orX, uintb0hNx91, {from: accounts[3]});
//		const booljIaZxru = await OnXFinancehuS3Zx2.transferFrom.call(addressrCwFUc, addressYipCAn7, uintL2wKR91, {from: accounts[1]});
//		const boolwpGKb0 = await OnXFinancehuS3Zx2.approve.call(addressnyhAw2h, uintoTqluh5, {from: accounts[2]});
//		const boolhs540Ml = await OnXFinancehuS3Zx2.transfer.call(addresswml2N3, uintK6VaZ0L, {from: accounts[5]});

		assert.equal(boolTUgioLf, true)
		assert.equal(boolyqb9gF, true)
		await expect(OnXFinancehuS3Zx2.transferFrom.call(addressrCwFUc, addressYipCAn7, uintL2wKR91, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringRe3tBND = "nA1t991zfAl8CrLanII3jULnBtnOAXe"
		const stringOeH2xoE = "H05hBV2G9BlpLOP2a0y91u2HF5asl7hRpkD3nzS5Ssy"
		const uintypIRxbI = BigInt("1520")
		const OnXFinancexYL76D = await OnXFinance.new(stringRe3tBND, stringOeH2xoE, uintypIRxbI, {from: accounts[4]});
		const uintIiHwE6x = BigInt("976")
		const addressTFVTcV9 = "0x0000000000000000000000000000000000000001"
		const addressQeGWW0 = accounts[1]
		const uintRZ6YNXg = BigInt("90")
		const addressuwUtueq = accounts[5]
		const uintSHOz45v = BigInt("1580")
		const addresshTXl3V7 = accounts[3]
		const uintRiytLS1 = BigInt("1958")
		const addressVpomZC9 = accounts[3]
//		const boolfckvXl1 = await OnXFinancexYL76D.transferFrom.call(addressQeGWW0, addressTFVTcV9, uintIiHwE6x, {from: accounts[1]});
//		const boolH8wsNeC = await OnXFinancexYL76D.increaseAllowance.call(addressuwUtueq, uintRZ6YNXg, {from: accounts[0]});
//		const boolQhQBxXP = await OnXFinancexYL76D.decreaseAllowance.call(addresshTXl3V7, uintSHOz45v, {from: "0x0000000000000000000000000000000000000001"});
//		const boolz03hNP9 = await OnXFinancexYL76D.approve.call(addressVpomZC9, uintRiytLS1, {from: accounts[3]});

		await expect(OnXFinancexYL76D.transferFrom.call(addressQeGWW0, addressTFVTcV9, uintIiHwE6x, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringWGdHUeA = "LnePp7aIttmkwp2DUBLLmQWRTRjlanpEEf2ENLst0De9s"
		const stringIWb77eH = "aTpJBI5IjjU8vJGe"
		const uintfTRfvDf = BigInt("756")
		const OnXFinanceeXzVgpv = await OnXFinance.new(stringWGdHUeA, stringIWb77eH, uintfTRfvDf, {from: accounts[1]});
		const uintkhgKxCC = BigInt("1134")
		const addressARj1Uso = accounts[0]
		const uinta7rxPUJ = BigInt("1545")
		const addressIi5keFg = accounts[4]
		const addressQ8XXSi = accounts[1]
		const uintD45mnj = BigInt("2034")
		const addressZsAPU3r = accounts[2]
		const addressfvJ31QF = accounts[1]
//		const boolyKNcPs7 = await OnXFinanceeXzVgpv.approveAndCall.call(addressARj1Uso, uintkhgKxCC, {from: accounts[4]});
//		const stringgdnNbK = await OnXFinanceeXzVgpv.symbol.call({from: accounts[1]});
//		const boolYP6eLvW = await OnXFinanceeXzVgpv.transferFrom.call(addressQ8XXSi, addressIi5keFg, uinta7rxPUJ, {from: accounts[3]});
//		const boolXsOCHp = await OnXFinanceeXzVgpv.approveAndCall.call(addressZsAPU3r, uintD45mnj, {from: accounts[0]});
//		const uintK3RzHf = await OnXFinanceeXzVgpv.balanceOf.call(addressfvJ31QF, {from: accounts[3]});

		await expect(OnXFinanceeXzVgpv.approveAndCall.call(addressARj1Uso, uintkhgKxCC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringJOcvwT = "l3sphYhThLgTHN0tFRwKViaz8g6wBqxjTgSD3r7LPK4i54StJ"
		const stringBUt2Tio = "oqBu9t2DHizpPk3Y0zDKaFYBIy9V7G6DO97"
		const uintEgTYgS6 = BigInt("1932")
		const OnXFinanceVqoaKJO = await OnXFinance.new(stringJOcvwT, stringBUt2Tio, uintEgTYgS6, {from: "0x0000000000000000000000000000000000000001"});
		const addressrURyeQ = accounts[4]
		const uintJug7QOJ = BigInt("1211")
		const addressm5W84gA = accounts[0]
		const uintMQSLLRE = BigInt("1377")
		const addressw1UMMOM = accounts[1]
		const boolJAQOA64 = await OnXFinanceVqoaKJO.transferownership.call(addressrURyeQ, {from: accounts[4]});
		const stringNWJ1YqI = await OnXFinanceVqoaKJO.symbol.call({from: accounts[4]});
		const boolkCt3RA8 = await OnXFinanceVqoaKJO.approveAndCall.call(addressm5W84gA, uintJug7QOJ, {from: accounts[4]});
		const boolX1xPsBf = await OnXFinanceVqoaKJO.approve.call(addressw1UMMOM, uintMQSLLRE, {from: accounts[2]});
	});

	it('test for OnXFinance', async () => {
		const stringBnLu0qZ = "XquFoyMzxynSh0cTigzz10sbwDOeHUyEZmuJ2965SQzzWFN8dn4wY9PrdJgHyE1nLo"
		const stringxRJGTeU = "RDMsbOSWWMzNMo8h5PkgvVXoJqwP575X8TwUyAcNUFr70IffcyuRSVSf7c7ET32afjnfqyJRqOWkKHJ9P437W2lC4cPsTi2lL"
		const uintPZbcqun = BigInt("9")
		const OnXFinanceJ4Vr6Hf = await OnXFinance.new(stringBnLu0qZ, stringxRJGTeU, uintPZbcqun, {from: accounts[2]});
		const addressNuUH52x = accounts[4]
		const uintYunc8Q8 = BigInt("1928")
		const addressHOiul9Z = accounts[6]
		const addressCDgGj21 = accounts[1]
		const bool8AfKj1 = await OnXFinanceJ4Vr6Hf.transferownership.call(addressNuUH52x, {from: accounts[2]});
//		const boolZ61EhRt = await OnXFinanceJ4Vr6Hf.transferFrom.call(addressCDgGj21, addressHOiul9Z, uintYunc8Q8, {from: accounts[1]});

		assert.equal(bool8AfKj1, true)
		await expect(OnXFinanceJ4Vr6Hf.transferFrom.call(addressCDgGj21, addressHOiul9Z, uintYunc8Q8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringBnLu0qZ = "XquFoyMzxynSh0cTigzz10sbwDOeHUyEZmuJ2965SQzzWFN8dn4wY9PrdJgHyE1nLo"
		const stringxRJGTeU = "RDMsbOSWWMzNMo8h5PkgvVXoJqwP575X8TwUyAcNUFr70IffcyuRSVSf7c7ET32afjnfqyJRqOWkKHJ9P437W2lC4cPsTi2lL"
		const uintkuFLmfH = BigInt("9")
		const OnXFinanceJ4Vr6Hf = await OnXFinance.new(stringBnLu0qZ, stringxRJGTeU, uintkuFLmfH, {from: accounts[2]});
		const uintJUvdcj7 = BigInt("595")
		const addressCFDb6Z0 = accounts[0]
		const uintEpc03YA = BigInt("1928")
		const addressH46Y1ls = accounts[5]
		const addressgRqAqy9 = accounts[1]
		const boolNELxvC = await OnXFinanceJ4Vr6Hf.approveAndCall.call(addressCFDb6Z0, uintJUvdcj7, {from: accounts[2]});
//		const boolZ61EhRt = await OnXFinanceJ4Vr6Hf.transferFrom.call(addressgRqAqy9, addressH46Y1ls, uintEpc03YA, {from: accounts[1]});

		assert.equal(boolNELxvC, true)
		await expect(OnXFinanceJ4Vr6Hf.transferFrom.call(addressgRqAqy9, addressH46Y1ls, uintEpc03YA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringrC5sO2c = "Qz5UnczkB4ejuRWclev3nOOL37PAJkTEJvfAvVIGY4Pv9ENj2mVcoLEsqjqdIysBbVGRIofRbvlv5ur"
		const stringL6A2jHo = "IPQ31GeLSgPBRgXoNAv2Sj2eXzEtARoWQTKjeApvoIycamxsmtqcZ"
		const uintny1RGF = BigInt("18")
		const OnXFinancehuS3Zx2 = await OnXFinance.new(stringrC5sO2c, stringL6A2jHo, uintny1RGF, {from: accounts[1]});
		const uintcQLohk9 = BigInt("0")
		const addresspjgnNEj = accounts[1]
		const addresskq6nvJH = accounts[0]
		const uintCgIax3K = BigInt("2037")
		const addressmFhagkV = accounts[2]
		const uintf2AyRR = BigInt("1160")
		const addresshOOUMVs = accounts[3]
		const addressN7Bruu = accounts[5]
		const uintH1A3rWh = BigInt("1222")
		const addressVGL0bzG = accounts[3]
		const booljIaZxru = await OnXFinancehuS3Zx2.transferFrom.call(addresskq6nvJH, addresspjgnNEj, uintcQLohk9, {from: accounts[1]});
//		const boolYfzeFUs = await OnXFinancehuS3Zx2.decreaseAllowance.call(addressmFhagkV, uintCgIax3K, {from: accounts[4]});
//		const booleDikl7X = await OnXFinancehuS3Zx2.transferFrom.call(addressN7Bruu, addresshOOUMVs, uintf2AyRR, {from: accounts[2]});
//		const boolVJvSYf = await OnXFinancehuS3Zx2.transfer.call(addressVGL0bzG, uintH1A3rWh, {from: accounts[4]});

		assert.equal(booljIaZxru, true)
		await expect(OnXFinancehuS3Zx2.decreaseAllowance.call(addressmFhagkV, uintCgIax3K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})