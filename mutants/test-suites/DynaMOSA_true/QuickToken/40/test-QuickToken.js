const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressvVIoi9a = accounts[0]
		const addressXN2HxiC = accounts[5]
		const QuickTokenoqbccq1 = await QuickToken.new(addressvVIoi9a, addressXN2HxiC, {from: accounts[2]});
		const uintGFRdJRU = BigInt("1694")
		const address3qOJYJ = "0x0000000000000000000000000000000000000001"
		const addresshCrbtJt = accounts[1]
		const addresseDBYdDQ = accounts[0]
		const uintIMqqUoA = BigInt("1806")
		const addressuE18Puj = accounts[2]
		const addressqCU4xC9 = accounts[0]
		const uintxbKKgU9 = BigInt("1743")
		const addressOeWTydy = accounts[3]
//		const boolmkOpZfu = await QuickTokenoqbccq1.transfer.call(address3qOJYJ, uintGFRdJRU, {from: accounts[5]});
//		const uintykCcG2 = await QuickTokenoqbccq1.allowance.call(addresseDBYdDQ, addresshCrbtJt, {from: accounts[2]});
//		const boolIFp5mL6 = await QuickTokenoqbccq1.transferFrom.call(addressqCU4xC9, addressuE18Puj, uintIMqqUoA, {from: accounts[5]});
//		const addressTUNLet2 = await QuickTokenoqbccq1.mint.call(addressOeWTydy, uintxbKKgU9, {from: accounts[4]});

		await expect(QuickTokenoqbccq1.transfer.call(address3qOJYJ, uintGFRdJRU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressOpAjtRm = accounts[3]
		const address77CIWT = accounts[1]
		const QuickTokenyGnt1HO = await QuickToken.new(addressOpAjtRm, address77CIWT, {from: accounts[5]});
		const addressxpWqpVJ = "0x0000000000000000000000000000000000000001"
		const uintNfPJ9jn = BigInt("403")
		const addressk5qa0Pb = accounts[0]
		const addressO2jtYhv = accounts[0]
		const uintwvyjdV2 = BigInt("264")
		const addressmiME30Y = accounts[0]
		const uinteQoeiby = await QuickTokenyGnt1HO.balanceOf.call(addressxpWqpVJ, {from: accounts[1]});
//		const boolS5is9a = await QuickTokenyGnt1HO.transfer.call(addressk5qa0Pb, uintNfPJ9jn, {from: accounts[2]});
//		const uintzUkgwKC = await QuickTokenyGnt1HO.balanceOf.call(addressO2jtYhv, {from: accounts[1]});
//		const addressTH80h6 = await QuickTokenyGnt1HO.mint.call(addressmiME30Y, uintwvyjdV2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uinteQoeiby, BigInt("0"))
		await expect(QuickTokenyGnt1HO.transfer.call(addressk5qa0Pb, uintNfPJ9jn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressWyhOSGQ = "0x0000000000000000000000000000000000000001"
		const addresslOu7IlA = accounts[3]
		const QuickTokenhTTIpPc = await QuickToken.new(addressWyhOSGQ, addresslOu7IlA, {from: accounts[1]});
		const addresscgiRgAe = accounts[1]
		const addressGrACzxq = accounts[4]
		const addresstNGG8iL = "0x0000000000000000000000000000000000000001"
		const uintleDl3UP = await QuickTokenhTTIpPc.balanceOf.call(addresscgiRgAe, {from: "0x0000000000000000000000000000000000000001"});
		const uintwHfoTXX = await QuickTokenhTTIpPc.allowance.call(addresstNGG8iL, addressGrACzxq, {from: accounts[2]});

		assert.equal(uintleDl3UP, BigInt("0"))
		assert.equal(uintwHfoTXX, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addresssQsR2Je = accounts[3]
		const addressmlXeozm = "0x0000000000000000000000000000000000000001"
		const QuickTokenm4CuMz9 = await QuickToken.new(addresssQsR2Je, addressmlXeozm, {from: accounts[5]});
		const addressdpfyUiE = accounts[5]
		const uintgUfO6O = BigInt("64")
		const addressFxoKIZf = accounts[3]
		const uintnOhXWUh = BigInt("1985")
		const addresszMkiEFW = accounts[4]
		const uintcGpenf = BigInt("894")
		const addressvQAXU5V = accounts[3]
		const addresspGcXTFf = accounts[2]
		const addressm83tQ3 = accounts[3]
		const uintBYviUWC = await QuickTokenm4CuMz9.balanceOf.call(addressdpfyUiE, {from: accounts[2]});
//		const addresswb5Ylkz = await QuickTokenm4CuMz9.mint.call(addressFxoKIZf, uintgUfO6O, {from: accounts[5]});
//		const booloodQ7e = await QuickTokenm4CuMz9.transfer.call(addresszMkiEFW, uintnOhXWUh, {from: accounts[0]});
//		const addresshZzPbBO = await QuickTokenm4CuMz9.mint.call(addressvQAXU5V, uintcGpenf, {from: accounts[2]});
//		const uintBwg3aV6 = await QuickTokenm4CuMz9.allowance.call(addressm83tQ3, addresspGcXTFf, {from: accounts[2]});

		assert.equal(uintBYviUWC, BigInt("0"))
		await expect(QuickTokenm4CuMz9.mint.call(addressFxoKIZf, uintgUfO6O, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressbyISsea = accounts[2]
		const addressqfFXhw = accounts[1]
		const QuickTokenH6efwQA = await QuickToken.new(addressbyISsea, addressqfFXhw, {from: accounts[3]});
		const addressaEImnHE = accounts[4]
		const addresspX49O5G = accounts[1]
		const addresstlPc9p = accounts[3]
		const addressZDSsAwn = accounts[3]
		const uintgztgnzA = BigInt("1110")
		const addressqZKuMfy = accounts[1]
		const uinth6vG0WQ = BigInt("227")
		const addressRvPmm7M = "0x0000000000000000000000000000000000000001"
		const uintiMdGEIX = await QuickTokenH6efwQA.balanceOf.call(addressaEImnHE, {from: accounts[0]});
//		const addressIr3GSLX = await QuickTokenH6efwQA.setMinter.call(addresspX49O5G, {from: accounts[0]});
//		const uintP2YzUDk = await QuickTokenH6efwQA.allowance.call(addressZDSsAwn, addresstlPc9p, {from: accounts[1]});
//		const addressxms6jDt = await QuickTokenH6efwQA.mint.call(addressqZKuMfy, uintgztgnzA, {from: accounts[2]});
//		const boolN8bk7s = await QuickTokenH6efwQA.transfer.call(addressRvPmm7M, uinth6vG0WQ, {from: accounts[0]});

		assert.equal(uintiMdGEIX, BigInt("0"))
		await expect(QuickTokenH6efwQA.setMinter.call(addresspX49O5G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresso0CTjBD = accounts[0]
		const addressnSpliAR = accounts[0]
		const QuickTokenil6IN7A = await QuickToken.new(addresso0CTjBD, addressnSpliAR, {from: accounts[1]});
		const uintSpDG3CA = BigInt("1804")
		const addressPoFpUDC = accounts[2]
		const addressMWZDFM5 = accounts[4]
		const boolLSdhjl = await QuickTokenil6IN7A.approve.call(addressPoFpUDC, uintSpDG3CA, {from: accounts[5]});
		const uintJYC3bcQ = await QuickTokenil6IN7A.balanceOf.call(addressMWZDFM5, {from: accounts[5]});

		assert.equal(boolLSdhjl, true)
		assert.equal(uintJYC3bcQ, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressejCEMm = accounts[0]
		const addresscfos7v = accounts[1]
		const QuickTokent02dGHV = await QuickToken.new(addressejCEMm, addresscfos7v, {from: "0x0000000000000000000000000000000000000001"});
		const uintuBzHzBP = BigInt("1545")
		const addressb53qbUf = accounts[0]
		const uintIITPCmU = BigInt("1868")
		const addresskMxBbx = accounts[4]
		const uintOyvYzJe = BigInt("1871")
		const addressc5M8IJa = accounts[1]
		const uintXYwqYna = BigInt("371")
		const addressNUhslz3 = accounts[3]
		const addresse1UXHl8 = await QuickTokent02dGHV.mint.call(addressb53qbUf, uintuBzHzBP, {from: accounts[4]});
		const boolVugvb1w = await QuickTokent02dGHV.approve.call(addresskMxBbx, uintIITPCmU, {from: accounts[2]});
		const boolLtYZxZc = await QuickTokent02dGHV.transfer.call(addressc5M8IJa, uintOyvYzJe, {from: accounts[2]});
		const boolDIYHv83 = await QuickTokent02dGHV.transfer.call(addressNUhslz3, uintXYwqYna, {from: accounts[1]});
	});

	it('test for QuickToken', async () => {
		const addresszWXUH7p = accounts[2]
		const addresskyVu7Nt = accounts[4]
		const QuickTokenyL0luM9 = await QuickToken.new(addresszWXUH7p, addresskyVu7Nt, {from: accounts[4]});
		const addressE8We8iY = accounts[6]
		const addressXvzCzNm = accounts[0]
		const uintJ7K1ZZP = BigInt("1241")
		const addressJaBohY5 = accounts[4]
		const uintPFGgyc = BigInt("862")
		const addressXZ5pZZS = accounts[3]
		const uintNOgMc3u = BigInt("269")
		const addresswb0v6bp = accounts[3]
		const uintR5dVAfS = await QuickTokenyL0luM9.allowance.call(addressXvzCzNm, addressE8We8iY, {from: accounts[5]});
		const addressZcaMiHc = await QuickTokenyL0luM9.mint.call(addressJaBohY5, uintJ7K1ZZP, {from: accounts[4]});
		const boolmIsLbKI = await QuickTokenyL0luM9.approve.call(addressXZ5pZZS, uintPFGgyc, {from: accounts[1]});
		const boolQ8VvM7I = await QuickTokenyL0luM9.approve.call(addresswb0v6bp, uintNOgMc3u, {from: accounts[0]});

		assert.equal(boolQ8VvM7I, true)
		assert.equal(boolmIsLbKI, true)
		assert.equal(uintR5dVAfS, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const address15Fibs = accounts[0]
		const addressTs7VqhL = accounts[0]
		const QuickTokenil6IN7A = await QuickToken.new(address15Fibs, addressTs7VqhL, {from: accounts[1]});
		const uintCX9vI32 = BigInt("865")
		const addressbmvQN8E = "0x0000000000000000000000000000000000000001"
		const addressvXBF4Ir = accounts[5]
		const addressOg7utti = accounts[1]
		const address7ohoZN = accounts[4]
		const uintcxw8hyd = BigInt("1796")
		const addresssuUAvgZ = accounts[2]
		const uintYGNg2d = BigInt("2032")
		const addressxGddlLe = accounts[3]
		const addressQzRat7s = accounts[4]
		const uintTOfpgPj = BigInt("521")
		const addressMZCLbRN = accounts[2]
//		const booli9D2Q4T = await QuickTokenil6IN7A.transferFrom.call(addressvXBF4Ir, addressbmvQN8E, uintCX9vI32, {from: accounts[1]});
//		const uintgK8Y7cO = await QuickTokenil6IN7A.allowance.call(address7ohoZN, addressOg7utti, {from: accounts[1]});
//		const boolLSdhjl = await QuickTokenil6IN7A.approve.call(addresssuUAvgZ, uintcxw8hyd, {from: accounts[5]});
//		const addresssrViAc9 = await QuickTokenil6IN7A.mint.call(addressxGddlLe, uintYGNg2d, {from: accounts[2]});
//		const uintJYC3bcQ = await QuickTokenil6IN7A.balanceOf.call(addressQzRat7s, {from: accounts[5]});
//		const booliyexu7Z = await QuickTokenil6IN7A.approve.call(addressMZCLbRN, uintTOfpgPj, {from: accounts[3]});

		await expect(QuickTokenil6IN7A.transferFrom.call(addressvXBF4Ir, addressbmvQN8E, uintCX9vI32, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressDceePQ = accounts[0]
		const addressdjMhpeR = accounts[0]
		const QuickTokenil6IN7A = await QuickToken.new(addressDceePQ, addressdjMhpeR, {from: accounts[1]});
		const addressnlnoS2h = accounts[1]
		const addresskEYtc2L = accounts[1]
		const uintS5rhtrQ = BigInt("456")
		const addressM7HK7z = accounts[1]
		const uintlmTxxtT = BigInt("1804")
		const addresseD7vAMx = accounts[3]
		const uintxWUnhII = BigInt("1322")
		const addressfuseLVZ = accounts[4]
		const addressTbQAMmS = accounts[4]
		const uintt4M1SCA = BigInt("921")
		const addressloHu1NT = accounts[1]
		const addressIBiCqd8 = accounts[2]
		const addressNJ65Jd2 = accounts[2]
		const uintTbpb1o = BigInt("1090")
		const addressOaYDP7a = accounts[5]
		const addressPw0N8X9 = accounts[1]
		const uintgK8Y7cO = await QuickTokenil6IN7A.allowance.call(addresskEYtc2L, addressnlnoS2h, {from: accounts[1]});
		const boolZdkdou = await QuickTokenil6IN7A.transfer.call(addressM7HK7z, uintS5rhtrQ, {from: accounts[0]});
		const boolLSdhjl = await QuickTokenil6IN7A.approve.call(addresseD7vAMx, uintlmTxxtT, {from: accounts[5]});
//		const addressIyKGv2H = await QuickTokenil6IN7A.mint.call(addressfuseLVZ, uintxWUnhII, {from: accounts[3]});
//		const uintJYC3bcQ = await QuickTokenil6IN7A.balanceOf.call(addressTbQAMmS, {from: accounts[5]});
//		const boolvkgVytF = await QuickTokenil6IN7A.transferFrom.call(addressIBiCqd8, addressloHu1NT, uintt4M1SCA, {from: accounts[2]});
//		const uintYn0E1fN = await QuickTokenil6IN7A.balanceOf.call(addressNJ65Jd2, {from: accounts[1]});
//		const bool8SqVkR = await QuickTokenil6IN7A.transferFrom.call(addressPw0N8X9, addressOaYDP7a, uintTbpb1o, {from: accounts[1]});

		assert.equal(boolLSdhjl, true)
		assert.equal(boolZdkdou, true)
		assert.equal(uintgK8Y7cO, BigInt("0"))
		await expect(QuickTokenil6IN7A.mint.call(addressfuseLVZ, uintxWUnhII, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})