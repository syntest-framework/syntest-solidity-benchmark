const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringI156tu = "9m2C5IAOslcH48c7SVXBRbE5tCzCUIIhHq7jLVcc7XaeQtqrVaTMcVYOqNe4yc7RMUXbekbtYF1ArA"
		const stringtZX5t4l = "YoBN4PIAfB8714DXZLrnJr1k759t8WIpOQUvM7WLCJFD6xnCZcDKPY"
		const uintF0Ig8Zy = BigInt("347")
		const DipexHJ9II6I = await Dipex.new(stringI156tu, stringtZX5t4l, uintF0Ig8Zy, {from: accounts[3]});
		const uintLh1Hzk4 = BigInt("1516")
		const addresscU8XcAL = accounts[0]
		const uintWdnEJnA = BigInt("1321")
		const addresskZd2FuA = accounts[1]
		const addressJyFR9W2 = accounts[2]
		const addressRFLBN2z = accounts[3]
		const booltGwzKUJ = await DipexHJ9II6I.approveAndCall.call(addresscU8XcAL, uintLh1Hzk4, {from: accounts[3]});
		const boolBcQzrUl = await DipexHJ9II6I.approveAndCall.call(addresskZd2FuA, uintWdnEJnA, {from: accounts[2]});
		const boolioAyKAq = await DipexHJ9II6I.transferownership.call(addressJyFR9W2, {from: accounts[2]});
		const boolzDhdRl = await DipexHJ9II6I.transferownership.call(addressRFLBN2z, {from: accounts[1]});

		assert.equal(booltGwzKUJ, true)
		await expect(DipexHJ9II6I.approveAndCall.call(addresskZd2FuA, uintWdnEJnA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringVWhXgPX = "pwBjbIwm86gVqgaskjzl5pMRA6weWSiYANZ"
		const stringo3RAbzN = "2D9kt7llmhgP2MgMxjt9DVsbpG7TA3EQtHoCzLy3HCaMzjeLAnTBta53dK3f57SgCbEZHsKA13ZoA"
		const uintsfRnXuM = BigInt("1865")
		const DipexBnzJDAH = await Dipex.new(stringVWhXgPX, stringo3RAbzN, uintsfRnXuM, {from: accounts[2]});
		const addressngQRgok = accounts[3]
		const uintUt76UD7 = BigInt("845")
		const addressBr959dd = accounts[1]
		const uintpX9Osdx = BigInt("1290")
		const addressJ7EV84o = accounts[3]
		const addressPPDFNWO = "0x0000000000000000000000000000000000000001"
		const uinteohsJs = BigInt("1347")
		const addressu1DTiJj = "0x0000000000000000000000000000000000000001"
		const uintTPwwQRK = BigInt("1153")
		const addressUjo0aAJ = accounts[4]
		const uintyE2ZWys = BigInt("1512")
		const addressURwzR2K = accounts[3]
		const boolLBr0vg = await DipexBnzJDAH.transferownership.call(addressngQRgok, {from: accounts[3]});
		const boolWOwNxhT = await DipexBnzJDAH.approveAndCall.call(addressBr959dd, uintUt76UD7, {from: accounts[0]});
		const boolrhXvnaj = await DipexBnzJDAH.transferFrom.call(addressPPDFNWO, addressJ7EV84o, uintpX9Osdx, {from: accounts[4]});
		const boolzBGARr = await DipexBnzJDAH.approveAndCall.call(addressu1DTiJj, uinteohsJs, {from: accounts[2]});
		const boolSBH1FCw = await DipexBnzJDAH.transfer.call(addressUjo0aAJ, uintTPwwQRK, {from: accounts[0]});
		const boolGKxuxnV = await DipexBnzJDAH.transfer.call(addressURwzR2K, uintyE2ZWys, {from: accounts[4]});

		await expect(DipexBnzJDAH.transferownership.call(addressngQRgok, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringH7mduJl = "sz6kLJ1KwxTduJyHfttP5sqHihBi9DaGzywR1IrW1YXgwJiPUkFFbpZg7ckDoW"
		const stringI5dLxP = "PqmZ1mR5h2TFko2mpeLKFDww0tQhlhlUc"
		const uintyEEQaU2 = BigInt("1542")
		const DipexMHDQk9T = await Dipex.new(stringH7mduJl, stringI5dLxP, uintyEEQaU2, {from: accounts[4]});
		const uintHeaRoz9 = BigInt("1172")
		const addresseG9dbui = accounts[1]
		const addressYI2QQx1 = accounts[2]
		const uintMXt8eTa = BigInt("1744")
		const addressnR5aOae = accounts[2]
		const addressY6VWEfg = accounts[4]
		const addressGxcGzBG = accounts[2]
		const uintwvSNHvB = BigInt("917")
		const addressKvvcIAe = accounts[0]
		const addressADkaAGO = accounts[5]
		const booldzGBYu4 = await DipexMHDQk9T.transferFrom.call(addressYI2QQx1, addresseG9dbui, uintHeaRoz9, {from: accounts[4]});
		const booln2dSUKH = await DipexMHDQk9T.transferFrom.call(addressY6VWEfg, addressnR5aOae, uintMXt8eTa, {from: accounts[2]});
		const boolpG7DYNN = await DipexMHDQk9T.transferownership.call(addressGxcGzBG, {from: accounts[1]});
		const boolFHlq6Cm = await DipexMHDQk9T.transfer.call(addressKvvcIAe, uintwvSNHvB, {from: accounts[2]});
		const boolTlgZkN = await DipexMHDQk9T.transferownership.call(addressADkaAGO, {from: accounts[0]});

		await expect(DipexMHDQk9T.transferFrom.call(addressYI2QQx1, addresseG9dbui, uintHeaRoz9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringj3zdLDd = "OmMSXjehvpbL9cf2B"
		const stringB0tCqL = "CH3Q6fzxiU09NqYJBR63hIJj0RJfXRX88oyC2fAeyEzUPPy9sxFkx"
		const uintVY7ZnNy = BigInt("1548")
		const DipexZ4Kx1ls = await Dipex.new(stringj3zdLDd, stringB0tCqL, uintVY7ZnNy, {from: accounts[3]});
		const uintFYAtHmd = BigInt("138")
		const addressE5YbQpG = accounts[0]
		const uintrqjSGXo = BigInt("1632")
		const addressgzvVuB = accounts[3]
		const uints3HZMKE = BigInt("302")
		const addressPoPywDB = accounts[3]
		const uintDzySidu = BigInt("655")
		const addressVLHiLeX = accounts[0]
		const uint0xDxBF = BigInt("1591")
		const addressVeJs8Kg = accounts[2]
		const boolLMj5Zx3 = await DipexZ4Kx1ls.approve.call(addressE5YbQpG, uintFYAtHmd, {from: "0x0000000000000000000000000000000000000001"});
		const boolUHojJc6 = await DipexZ4Kx1ls.approveAndCall.call(addressgzvVuB, uintrqjSGXo, {from: "0x0000000000000000000000000000000000000001"});
		const boolagkYmsT = await DipexZ4Kx1ls.approveAndCall.call(addressPoPywDB, uints3HZMKE, {from: accounts[5]});
		const boolXQvBaBF = await DipexZ4Kx1ls.approve.call(addressVLHiLeX, uintDzySidu, {from: accounts[1]});
		const boolc7RjdDD = await DipexZ4Kx1ls.approve.call(addressVeJs8Kg, uint0xDxBF, {from: accounts[3]});

		assert.equal(boolLMj5Zx3, true)
		await expect(DipexZ4Kx1ls.approveAndCall.call(addressgzvVuB, uintrqjSGXo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const string4BBE36 = "TqW47aCXO7JD3g1hB7cdmxkXhwBQYBzXtte1xGLiX"
		const stringCNeEffe = "gEKZ5Y2UuRi7PJ9BRy6T2aVgCZyQQliFNamWyTanppaPLIoefGOhKx9LqiT4aaLi2H2Qjw5Itsu7V769s8oFSZW"
		const uintlyFNEUW = BigInt("262")
		const DipexnPL0EkL = await Dipex.new(string4BBE36, stringCNeEffe, uintlyFNEUW, {from: accounts[2]});
		const uintYC3g8ZB = BigInt("1103")
		const addressO9g2DmB = accounts[0]
		const addressUgxhoeY = accounts[3]
		const uintFsNsh31 = BigInt("1605")
		const addressQY5QOU6 = accounts[2]
		const uintIJxuY0 = BigInt("1871")
		const addressIlV4qTp = accounts[1]
		const boolaUkboBO = await DipexnPL0EkL.transferFrom.call(addressUgxhoeY, addressO9g2DmB, uintYC3g8ZB, {from: accounts[3]});
		const boolxdvLA9U = await DipexnPL0EkL.approve.call(addressQY5QOU6, uintFsNsh31, {from: accounts[5]});
		const boolV8Jp0lp = await DipexnPL0EkL.approveAndCall.call(addressIlV4qTp, uintIJxuY0, {from: accounts[0]});

		await expect(DipexnPL0EkL.transferFrom.call(addressUgxhoeY, addressO9g2DmB, uintYC3g8ZB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringI156tu = "9m2C5IAOslcH48c7SVXBRbE5tCzCUIIhHq7jLVcc7XaeQtqrVaTMcVYOqNe4yc7RMUXbekbtYF1ArA"
		const stringtZX5t4l = "YoBN4PIAfB8714DXZLrnJr1k759t8WIpOQUvM7WLCJFD6xnCZcDKPY"
		const uinta4scCs = BigInt("347")
		const DipexHJ9II6I = await Dipex.new(stringI156tu, stringtZX5t4l, uinta4scCs, {from: accounts[3]});
		const uintWZsNTwD = BigInt("689")
		const addressr1dlHvP = accounts[5]
		const uintmk5Fupp = BigInt("1516")
		const addressLfulQSm = accounts[0]
		const uintG2ZwlNU = BigInt("1310")
		const addressCU8Bq7 = accounts[1]
		const addressCY9NUIX = accounts[3]
		const boolGvdzp42 = await DipexHJ9II6I.transfer.call(addressr1dlHvP, uintWZsNTwD, {from: accounts[1]});
		const booltGwzKUJ = await DipexHJ9II6I.approveAndCall.call(addressLfulQSm, uintmk5Fupp, {from: accounts[3]});
		const boolBcQzrUl = await DipexHJ9II6I.approveAndCall.call(addressCU8Bq7, uintG2ZwlNU, {from: accounts[2]});
		const boolzDhdRl = await DipexHJ9II6I.transferownership.call(addressCY9NUIX, {from: accounts[1]});

		await expect(DipexHJ9II6I.transfer.call(addressr1dlHvP, uintWZsNTwD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringLPxdPym = "T1We6DImm55k5XS2Ugooz9RRDAz6CfbaF2VGnW7XoV"
		const stringPyA1mrh = "REOKPjaMeDULkjIf1pZPcnOZF8qTbbTWUM1yIk"
		const uintTey6HRa = BigInt("1250")
		const DipexLZX9lYN = await Dipex.new(stringLPxdPym, stringPyA1mrh, uintTey6HRa, {from: "0x0000000000000000000000000000000000000001"});
		const uintTrnuRsS = BigInt("1967")
		const addressEQzeOV4 = accounts[0]
		const uintXqAEbLc = BigInt("1668")
		const addressMjVKuLZ = accounts[3]
		const uintDYyjbS = BigInt("1653")
		const addressLImuSyp = accounts[0]
		const boolkdZbvas = await DipexLZX9lYN.approveAndCall.call(addressEQzeOV4, uintTrnuRsS, {from: accounts[2]});
		const boolXX1Wmk = await DipexLZX9lYN.approveAndCall.call(addressMjVKuLZ, uintXqAEbLc, {from: accounts[0]});
		const boolPT1mAuB = await DipexLZX9lYN.approveAndCall.call(addressLImuSyp, uintDYyjbS, {from: accounts[5]});
	});

	it('test for Dipex', async () => {
		const stringI156tu = "9m2C5IAOslcH48c7SVXBRbE5tCzCUIIhHq7jLVcc7XaeQtqrVaTMcVYOqNe4yc7RMUXbekbtYF1ArA"
		const stringtZX5t4l = "YoBN4PIAfB8714DXZLrnJr1k759t8WIpOQUvM7WLCJFD6xnCZcDKPY"
		const uintg12WmSH = BigInt("347")
		const DipexHJ9II6I = await Dipex.new(stringI156tu, stringtZX5t4l, uintg12WmSH, {from: accounts[3]});
		const addressVwtC9GE = accounts[3]
		const uintMFrlVbf = BigInt("1848")
		const addressp3d7bmp = accounts[4]
		const addressLHHcHBK = accounts[3]
		const uintCTv6HRx = BigInt("583")
		const addressj6s2p5T = accounts[0]
		const addressTFtqrNY = accounts[4]
		const boolBzJ9vK3 = await DipexHJ9II6I.transferownership.call(addressVwtC9GE, {from: accounts[3]});
		const boolTLfHFlC = await DipexHJ9II6I.transferFrom.call(addressLHHcHBK, addressp3d7bmp, uintMFrlVbf, {from: accounts[3]});
		const boolWpc2QL = await DipexHJ9II6I.approve.call(addressj6s2p5T, uintCTv6HRx, {from: accounts[4]});
		const boolzDhdRl = await DipexHJ9II6I.transferownership.call(addressTFtqrNY, {from: accounts[1]});

		assert.equal(boolBzJ9vK3, true)
		assert.equal(boolTLfHFlC, true)
		assert.equal(boolWpc2QL, true)
		await expect(DipexHJ9II6I.transferownership.call(addressTFtqrNY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringjdUkLuB = "bOW9AONQ4mm4nmFiAlPDnu7Y3NbR6KzFQXhL6Hs15siJDtkwteRC4cfMSGkTYUu"
		const stringtY3d0pH = "o7UaWI8F6lSlMM7RgDKztvDASqR8vNxAtYvhQrjQIOp7dFcfwvwPMYELAaa1c7hKcVrcyRe6qVZV1phr3MGgfkAS"
		const uintcr5WqB = BigInt("1965")
		const DipexcSUbEb4 = await Dipex.new(stringjdUkLuB, stringtY3d0pH, uintcr5WqB, {from: accounts[1]});
		const uintz0JYCJv = BigInt("0")
		const addressCBOlyqV = "0x0000000000000000000000000000000000000001"
		const addressVpYS5l = accounts[0]
		const bool94kwQQ = await DipexcSUbEb4.transferFrom.call(addressVpYS5l, addressCBOlyqV, uintz0JYCJv, {from: accounts[2]});

		assert.equal(bool94kwQQ, true)
	});

	it('test for Dipex', async () => {
		const stringtpvEcWu = "Q2Q82au1mWDC8PXtsAWrurlYX4jNnR47sVzyvtLl42rDLCAyPSmqSvLt2yx1sLcBZa8PG2E70B45nzJk"
		const stringCsjwFiy = "pGskXrgQnTYGB"
		const uintGDWVkW9 = BigInt("243")
		const DipexEEz71lu = await Dipex.new(stringtpvEcWu, stringCsjwFiy, uintGDWVkW9, {from: accounts[1]});
		const uintAR0H3Ts = BigInt("1766")
		const addressPat42g = "0x0000000000000000000000000000000000000001"
		const uintQLTDD4V = BigInt("0")
		const addressPOJKxOO = accounts[3]
		const boolnoWnl1M = await DipexEEz71lu.approve.call(addressPat42g, uintAR0H3Ts, {from: "0x0000000000000000000000000000000000000001"});
		const boolu2zGnn = await DipexEEz71lu.approveAndCall.call(addressPOJKxOO, uintQLTDD4V, {from: accounts[1]});

		assert.equal(boolnoWnl1M, true)
		assert.equal(boolu2zGnn, true)
	});
})