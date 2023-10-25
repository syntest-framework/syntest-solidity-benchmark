const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100X5cero6 = await Token50X100.new({from: accounts[1]});
		const uintZOJXJ7N = BigInt("1330")
		const addresscpfAjW = accounts[4]
		const addressrGobsoD = accounts[5]
//		await Token50X100X5cero6.lock.call({from: accounts[0]});
//		const boolXVWPAcO = await Token50X100X5cero6.approve.call(addresscpfAjW, uintZOJXJ7N, {from: accounts[0]});
//		const addressAciVBzg = await Token50X100X5cero6.transferOwnership.call(addressrGobsoD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100X5cero6.lock.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100MqmOrYI = await Token50X100.new({from: accounts[3]});
		const addressfcvewFi = accounts[4]
		const uintHMqPPnA = BigInt("240")
		const stringBvM4PoO = "FQJlVKYTxgTx98b33fQsfxyib4jLJdNnGF0C6qR2GXYsJVtaKYxm8A5hu1LJqVtQA0l33NEw2j5ed2ATX7v57EEdj"
		const stringU9Xle9Y = "qHZpYTIIxyP04ccIUs1Pfhm4M"
		const uintTaWTLUZ = BigInt("1195")
		const addresslM7S7F2 = accounts[4]
		const addressWuJFRZD = accounts[4]
		const uintklyo5es = BigInt("1428")
		const uintoBbruq = BigInt("959")
//		const addressnbOWSZx = await Token50X100MqmOrYI.setOriginalContract.call(addressfcvewFi, {from: accounts[2]});
//		await Token50X100MqmOrYI.setSymbolNameDecimals.call(stringU9Xle9Y, stringBvM4PoO, uintHMqPPnA, {from: accounts[4]});
//		const boolyw16JDU = await Token50X100MqmOrYI.transferFrom.call(addressWuJFRZD, addresslM7S7F2, uintTaWTLUZ, {from: accounts[1]});
//		const boolKAfdvh0 = await Token50X100MqmOrYI.safeLock.call(uintoBbruq, uintklyo5es, {from: accounts[0]});

		await expect(Token50X100MqmOrYI.setOriginalContract.call(addressfcvewFi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ssU1AIV = await Token50X100.new({from: accounts[1]});
		const uintWoPfyiU = BigInt("1005")
		const addressFGObma6 = accounts[4]
		const boolyotxbY = true
		const addressO1vv0bv = accounts[4]
		const uintXr4EfcI = BigInt("709")
		const addressYt9xmRC = accounts[0]
//		const boolikKC8I = await Token50X100ssU1AIV.transfer.call(addressFGObma6, uintWoPfyiU, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100ssU1AIV.setWhiteList.call(addressO1vv0bv, boolyotxbY, {from: accounts[2]});
//		const boolA4CGwLF = await Token50X100ssU1AIV.increaseApproval.call(addressYt9xmRC, uintXr4EfcI, {from: accounts[2]});

		await expect(Token50X100ssU1AIV.transfer.call(addressFGObma6, uintWoPfyiU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100NKrZgA9 = await Token50X100.new({from: accounts[3]});
		const uintYPr1cO1 = BigInt("1916")
		const uintBG8Us3 = BigInt("1225")
		const addressJpOddsE = accounts[3]
		const addressopf79HJ = accounts[4]
		const uintTzhAOk = BigInt("1032")
		const uint6MCZHN = BigInt("1505")
		const addressbkFaPJR = accounts[2]
//		const boolAweLTbx = await Token50X100NKrZgA9.safeLock.call(uintBG8Us3, uintYPr1cO1, {from: accounts[4]});
//		const uint256Q2Qxtyu = await Token50X100NKrZgA9.allowance.call(addressopf79HJ, addressJpOddsE, {from: accounts[3]});
//		const boolPLFsv0n = await Token50X100NKrZgA9.setVesting.call(addressbkFaPJR, uint6MCZHN, uintTzhAOk, {from: accounts[4]});

		await expect(Token50X100NKrZgA9.safeLock.call(uintBG8Us3, uintYPr1cO1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100LFnDFsi = await Token50X100.new({from: accounts[2]});
		const uintR3bdUYk = BigInt("1342")
		const addressBAILQl3 = accounts[2]
		const uintFdQeJFt = BigInt("1935")
		const uintXgvfbJC = BigInt("1467")
		const addresseRR14Es = accounts[3]
		const addressu4lCQQ = accounts[2]
		const addresstiw8XA = accounts[2]
		const uintavneB6L = BigInt("212")
		const stringvaxMU8n = "IK3VZY1xvhcXufG0eKYH3UrKaDXIDw6eiO4AbGYyg"
		const stringZW9B1KD = "HZFXEKGFK8xMLM2JFWo34OxGsobA6frFCXuWBVvnbQojd9L12u"
		const boolyWX6val = await Token50X100LFnDFsi.decreaseApproval.call(addressBAILQl3, uintR3bdUYk, {from: accounts[1]});
//		const boolIl2IXef = await Token50X100LFnDFsi._transfer.call(addressu4lCQQ, addresseRR14Es, uintXgvfbJC, uintFdQeJFt, {from: "0x0000000000000000000000000000000000000001"});
//		const addresshuJszya = await Token50X100LFnDFsi.transferOwnership.call(addresstiw8XA, {from: accounts[3]});
//		await Token50X100LFnDFsi.onlyOwner.call({from: accounts[1]});
//		await Token50X100LFnDFsi.setSymbolNameDecimals.call(stringZW9B1KD, stringvaxMU8n, uintavneB6L, {from: accounts[3]});

		assert.equal(boolyWX6val, true)
		await expect(Token50X100LFnDFsi._transfer.call(addressu4lCQQ, addresseRR14Es, uintXgvfbJC, uintFdQeJFt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100NKrZgA9 = await Token50X100.new({from: accounts[3]});
		const uintJIlOeRB = BigInt("1085")
		const addressdxaHMG = accounts[3]
		const addresseYEbvu = accounts[3]
		const uintXbkWwt6 = BigInt("1916")
		const uintSgYyyz = BigInt("1225")
		const addressrQej82w = accounts[3]
		const addressSrCCbT = accounts[4]
		const uintCY3AnMS = BigInt("1032")
		const uinto7R5DC = BigInt("413")
		const addresshxIJwXt = accounts[2]
//		const boold6zVkTS = await Token50X100NKrZgA9.transferFrom.call(addresseYEbvu, addressdxaHMG, uintJIlOeRB, {from: accounts[4]});
//		const boolAweLTbx = await Token50X100NKrZgA9.safeLock.call(uintSgYyyz, uintXbkWwt6, {from: accounts[4]});
//		const uint256Q2Qxtyu = await Token50X100NKrZgA9.allowance.call(addressSrCCbT, addressrQej82w, {from: accounts[3]});
//		const boolPLFsv0n = await Token50X100NKrZgA9.setVesting.call(addresshxIJwXt, uinto7R5DC, uintCY3AnMS, {from: accounts[4]});

		await expect(Token50X100NKrZgA9.transferFrom.call(addresseYEbvu, addressdxaHMG, uintJIlOeRB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100SsC8zhC = await Token50X100.new({from: accounts[3]});
		const uintToV9rxW = BigInt("187")
		const uintr1bk72B = BigInt("1460")
		const addressXhiBFVQ = accounts[3]
		const addressKS2ZuLU = accounts[0]
		const uintRNFiza4 = BigInt("38")
		const addressE0WbjOl = accounts[1]
		const addressPz3sGiQ = accounts[4]
//		const boolTtBf0Zh = await Token50X100SsC8zhC._transfer.call(addressKS2ZuLU, addressXhiBFVQ, uintr1bk72B, uintToV9rxW, {from: accounts[3]});
//		const boolR31ABVs = await Token50X100SsC8zhC.setMaxLockPeriod.call(uintRNFiza4, {from: accounts[0]});
//		await Token50X100SsC8zhC.setLinkingAddresses.call(addressPz3sGiQ, addressE0WbjOl, {from: accounts[0]});

		await expect(Token50X100SsC8zhC._transfer.call(addressKS2ZuLU, addressXhiBFVQ, uintr1bk72B, uintToV9rxW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100LFnDFsi = await Token50X100.new({from: accounts[2]});
		const addressZVsp5TF = accounts[3]
		const addressQZ09MV2 = accounts[2]
		const uintWF93EWJ = BigInt("1342")
		const addressmCfylVa = accounts[2]
		const uintG4IyYNX = BigInt("1935")
		const uintryMNcdE = BigInt("1467")
		const addressXzHkdxb = accounts[3]
		const address9o5QfP = accounts[2]
		const addressW3KM8ge = accounts[2]
		const uintqUSw6Mt = BigInt("212")
		const stringvaxMU8n = "IK3VZY1xvhcXufG0eKYH3UrKaDXIDw6eiO4AbGYyg"
		const stringZW9B1KD = "HZFXEKGFK8xMLM2JFWo34OxGsobA6frFCXuWBVvnbQojd9L12u"
		const uint256g7kUNSV = await Token50X100LFnDFsi.allowance.call(addressQZ09MV2, addressZVsp5TF, {from: accounts[4]});
		const boolyWX6val = await Token50X100LFnDFsi.decreaseApproval.call(addressmCfylVa, uintWF93EWJ, {from: accounts[1]});
//		const boolIl2IXef = await Token50X100LFnDFsi._transfer.call(address9o5QfP, addressXzHkdxb, uintryMNcdE, uintG4IyYNX, {from: "0x0000000000000000000000000000000000000001"});
//		const addresshuJszya = await Token50X100LFnDFsi.transferOwnership.call(addressW3KM8ge, {from: accounts[3]});
//		await Token50X100LFnDFsi.setSymbolNameDecimals.call(stringZW9B1KD, stringvaxMU8n, uintqUSw6Mt, {from: accounts[3]});

		assert.equal(boolyWX6val, true)
		assert.equal(uint256g7kUNSV, BigInt("0"))
		await expect(Token50X100LFnDFsi._transfer.call(address9o5QfP, addressXzHkdxb, uintryMNcdE, uintG4IyYNX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ssU1AIV = await Token50X100.new({from: accounts[1]});
		const uinteAL4w5f = BigInt("709")
		const addressgaIf6vi = accounts[0]
		const boolA4CGwLF = await Token50X100ssU1AIV.increaseApproval.call(addressgaIf6vi, uinteAL4w5f, {from: accounts[2]});

		assert.equal(boolA4CGwLF, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100ei64bSa = await Token50X100.new({from: accounts[1]});
		const uintPmhlyrB = BigInt("50")
		const addressyxVSo6 = accounts[2]
		const boolX9jf7X2 = await Token50X100ei64bSa.setMaxLockPeriod.call(uintPmhlyrB, {from: accounts[0]});
		const uint256vhxB997 = await Token50X100ei64bSa.balanceOf.call(addressyxVSo6, {from: accounts[3]});

		assert.equal(boolX9jf7X2, false)
		assert.equal(uint256vhxB997, BigInt("0"))
	});

	it('test for Token50X100', async () => {
		const Token50X100yQbNS5X = await Token50X100.new({from: accounts[1]});
		const uintvY0BbL = BigInt("1357")
		const addressdz79Gmh = accounts[5]
		const uintR4PmRNX = BigInt("319")
		const uintv5xLsel = BigInt("1359")
		const address1leIEW = accounts[1]
		const uintrURCYO9 = BigInt("1913")
		const uintSENsM2E = BigInt("151")
		const addresshUFQUai = accounts[5]
		const addressniGV8DI = accounts[2]
		const boolGWtdnpr = await Token50X100yQbNS5X.approve.call(addressdz79Gmh, uintvY0BbL, {from: accounts[0]});
//		const boolfgbEwnE = await Token50X100yQbNS5X.setVesting.call(address1leIEW, uintv5xLsel, uintR4PmRNX, {from: accounts[3]});
//		const boolkMWeZFX = await Token50X100yQbNS5X._transfer.call(addressniGV8DI, addresshUFQUai, uintSENsM2E, uintrURCYO9, {from: accounts[4]});

		assert.equal(boolGWtdnpr, true)
		await expect(Token50X100yQbNS5X.setVesting.call(address1leIEW, uintv5xLsel, uintR4PmRNX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yQbNS5X = await Token50X100.new({from: accounts[1]});
		const addressQd0Zew1 = accounts[5]
		const addressb6GkjOS = accounts[3]
		const uintCsfyvJc = BigInt("1913")
		const uintFWt8sZK = BigInt("179")
		const addressU6sZlZJ = accounts[5]
		const addresspcOtRjD = accounts[3]
//		await Token50X100yQbNS5X.setLinkingAddresses.call(addressb6GkjOS, addressQd0Zew1, {from: accounts[1]});
//		const boolkMWeZFX = await Token50X100yQbNS5X._transfer.call(addresspcOtRjD, addressU6sZlZJ, uintFWt8sZK, uintCsfyvJc, {from: accounts[4]});

		await expect(Token50X100yQbNS5X.setLinkingAddresses.call(addressb6GkjOS, addressQd0Zew1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ssU1AIV = await Token50X100.new({from: accounts[1]});
		const uintNWMsz6c = BigInt("1700")
		const uintl5bNH4 = BigInt("500")
		const addressOlaIzKq = accounts[3]
		const uinthi8GEfE = BigInt("1064")
		const addressAx1fhHK = "0x0000000000000000000000000000000000000000"
		const uintJ9wsN4i = BigInt("1005")
		const addressFPYM4cF = accounts[5]
		const boolGWpQJyD = await Token50X100ssU1AIV.setMaxLockPeriod.call(uintNWMsz6c, {from: accounts[2]});
		const boolE2DSGEq = await Token50X100ssU1AIV.decreaseApproval.call(addressOlaIzKq, uintl5bNH4, {from: accounts[1]});
//		const boolOQ9KIWC = await Token50X100ssU1AIV.transfer.call(addressAx1fhHK, uinthi8GEfE, {from: accounts[1]});
//		const boolikKC8I = await Token50X100ssU1AIV.transfer.call(addressFPYM4cF, uintJ9wsN4i, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolE2DSGEq, true)
		assert.equal(boolGWpQJyD, false)
		await expect(Token50X100ssU1AIV.transfer.call(addressAx1fhHK, uinthi8GEfE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ssU1AIV = await Token50X100.new({from: accounts[1]});
		const uintDuvNfDY = BigInt("500")
		const addressil4YCsl = accounts[3]
		const uintOQSJwhM = BigInt("1049")
		const addressaarkGLY = "0x0000000000000000000000000000000000000001"
		const uint256sDTcKQw = await Token50X100ssU1AIV.totalSupply.call({from: accounts[2]});
		const boolE2DSGEq = await Token50X100ssU1AIV.decreaseApproval.call(addressil4YCsl, uintDuvNfDY, {from: accounts[1]});
//		const boolOQ9KIWC = await Token50X100ssU1AIV.transfer.call(addressaarkGLY, uintOQSJwhM, {from: accounts[1]});

		assert.equal(boolE2DSGEq, true)
		assert.equal(uint256sDTcKQw, BigInt("4714285714285710"))
		await expect(Token50X100ssU1AIV.transfer.call(addressaarkGLY, uintOQSJwhM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yQbNS5X = await Token50X100.new({from: accounts[1]});
		const addressMBWsd2R = accounts[4]
		const uintwePIfYh = BigInt("1909")
		const uintE1Iazl1 = BigInt("179")
		const addresseEiN8n = accounts[5]
		const addressvhan8Dw = accounts[2]
		const uintFDiHV63 = BigInt("1651")
		const addressCwSQI84 = await Token50X100yQbNS5X.transferOwnership.call(addressMBWsd2R, {from: accounts[1]});
//		const boolkMWeZFX = await Token50X100yQbNS5X._transfer.call(addressvhan8Dw, addresseEiN8n, uintE1Iazl1, uintwePIfYh, {from: accounts[4]});
//		const booleiTtMWz = await Token50X100yQbNS5X.setMaxLockPeriod.call(uintFDiHV63, {from: accounts[3]});

		await expect(Token50X100yQbNS5X._transfer.call(addressvhan8Dw, addresseEiN8n, uintE1Iazl1, uintwePIfYh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yQbNS5X = await Token50X100.new({from: accounts[1]});
		const boolxRPW5z4 = true
		const addressCMyiANU = accounts[3]
		const uint9vsjZ7 = BigInt("1913")
		const uintHa5Yssf = BigInt("179")
		const addressuIGH1HA = accounts[5]
		const addressUP7fgSM = accounts[2]
//		await Token50X100yQbNS5X.setWhiteList.call(addressCMyiANU, boolxRPW5z4, {from: accounts[1]});
//		const boolkMWeZFX = await Token50X100yQbNS5X._transfer.call(addressUP7fgSM, addressuIGH1HA, uintHa5Yssf, uint9vsjZ7, {from: accounts[4]});

		await expect(Token50X100yQbNS5X.setWhiteList.call(addressCMyiANU, boolxRPW5z4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100xJ1kdv = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uinterPSkX = BigInt("582")
		const addressaTPvrhi = accounts[1]
		const uintK1tXdjr = BigInt("675")
		const addressqImahgq = accounts[4]
		const uintLuIjVtT = BigInt("249")
		const stringnrtsFu = "idEack"
		const stringDtYiTGW = "rzYlJ3bU"
		const uintCG8DTuK = BigInt("252")
		const stringNEfGUQF = "VOczmweLo44mbpTBCOm5YEkzN0S5mDHSZ924bab3kdvKRCDUryFL347UUsh5whPqnHaLs1Tsu9UCIQ6Jz1j4"
		const stringfKIIogh = "4WostV7y91d1z"
		const boolR7DaEBr = await Token50X100xJ1kdv.transfer.call(addressaTPvrhi, uinterPSkX, {from: accounts[4]});
		const boolsBAHxLo = await Token50X100xJ1kdv.decreaseApproval.call(addressqImahgq, uintK1tXdjr, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100xJ1kdv.setSymbolNameDecimals.call(stringDtYiTGW, stringnrtsFu, uintLuIjVtT, {from: accounts[3]});
		await Token50X100xJ1kdv.setSymbolNameDecimals.call(stringfKIIogh, stringNEfGUQF, uintCG8DTuK, {from: accounts[1]});
	});

	it('test for Token50X100', async () => {
		const Token50X100NKrZgA9 = await Token50X100.new({from: accounts[3]});
		const uintlKCGrSe = BigInt("1937")
		const uinteKolWmz = BigInt("1224")
//		await Token50X100NKrZgA9.lock.call({from: accounts[3]});
//		const boolAweLTbx = await Token50X100NKrZgA9.safeLock.call(uinteKolWmz, uintlKCGrSe, {from: accounts[4]});

		await expect(Token50X100NKrZgA9.lock.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yQbNS5X = await Token50X100.new({from: accounts[1]});
		const uintwDbwf0 = BigInt("349")
		const addressMaCHKHj = accounts[4]
		const uintiyCkIdd = BigInt("1113")
		const addressytLT7TY = accounts[0]
		const boolhr7onXr = await Token50X100yQbNS5X.decreaseApproval.call(addressMaCHKHj, uintwDbwf0, {from: accounts[0]});
//		await Token50X100yQbNS5X.release.call({from: accounts[1]});
//		const booltS4N9yi = await Token50X100yQbNS5X.transfer.call(addressytLT7TY, uintiyCkIdd, {from: accounts[0]});

		assert.equal(boolhr7onXr, true)
		await expect(Token50X100yQbNS5X.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100lH7TFSF = await Token50X100.new({from: accounts[3]});
		const uintxRURsd5 = BigInt("265")
		const addresszcXJJcj = "0x00000000000000000000000000000000000000-1"
		const uintYdnWig5 = BigInt("1474")
		const addressdRRxpqo = accounts[1]
		const uintKyr2zRJ = BigInt("285")
		const addressP5vmDeN = accounts[4]
//		const boolAibrlbl = await Token50X100lH7TFSF.transfer.call(addresszcXJJcj, uintxRURsd5, {from: accounts[2]});
//		const boolKEvA8H5 = await Token50X100lH7TFSF.transfer.call(addressdRRxpqo, uintYdnWig5, {from: accounts[4]});
//		const boolrWXmeAN = await Token50X100lH7TFSF.transfer.call(addressP5vmDeN, uintKyr2zRJ, {from: accounts[1]});

		await expect(Token50X100lH7TFSF.transfer.call(addresszcXJJcj, uintxRURsd5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yQbNS5X = await Token50X100.new({from: accounts[1]});
		const uintslEEFO = BigInt("310")
		const addresseKSAG5d = accounts[4]
		const uintR6FQHUn = BigInt("212")
		const stringFlXMU2M = "Urw8ZbeVcf3HKfpKda4bKHkHK1AFRH4LFpC4EqaRuttnwZgkdnlzUUsPz"
		const stringp2nnKS = "fgrlMV0MrkoU8nnOpn1Cu9JcgpiqCePzMJ7Lk"
		const uintiBzTz8f = BigInt("205")
		const uintjbvSSXO = BigInt("1746")
		const boolhr7onXr = await Token50X100yQbNS5X.decreaseApproval.call(addresseKSAG5d, uintslEEFO, {from: accounts[0]});
//		await Token50X100yQbNS5X.setSymbolNameDecimals.call(stringp2nnKS, stringFlXMU2M, uintR6FQHUn, {from: accounts[1]});
//		const boolTrZkosp = await Token50X100yQbNS5X.safeLock.call(uintjbvSSXO, uintiBzTz8f, {from: accounts[5]});

		assert.equal(boolhr7onXr, true)
		await expect(Token50X100yQbNS5X.setSymbolNameDecimals.call(stringp2nnKS, stringFlXMU2M, uintR6FQHUn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100NKrZgA9 = await Token50X100.new({from: accounts[3]});
		const uintQSLkxk = BigInt("285")
		const uintavcknOl = BigInt("1416")
		const addressLoRLvZr = accounts[2]
		const uintPmny4ig = BigInt("1937")
		const uintFJOLG3t = BigInt("1234")
		const uintPdcR8dw = BigInt("888")
		const addressM5beiqz = accounts[4]
		const boolOw8fMXL = await Token50X100NKrZgA9.setVesting.call(addressLoRLvZr, uintavcknOl, uintQSLkxk, {from: accounts[3]});
//		await Token50X100NKrZgA9.onlyOwner.call({from: accounts[2]});
//		const boolAweLTbx = await Token50X100NKrZgA9.safeLock.call(uintFJOLG3t, uintPmny4ig, {from: accounts[4]});
//		const boolowBN9V = await Token50X100NKrZgA9.transfer.call(addressM5beiqz, uintPdcR8dw, {from: accounts[1]});

		assert.equal(boolOw8fMXL, true)
		await expect(Token50X100NKrZgA9.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100lH7TFSF = await Token50X100.new({from: accounts[3]});
		const addressuasvLb4 = accounts[5]
		const uintPhUUvKY = BigInt("255")
		const addressFQXiYzt = accounts[1]
		const uintIuhc6Dq = BigInt("265")
		const addressu870YFA = "0x00000000000000000000000000000000000000-1"
//		await Token50X100lH7TFSF.setTokenContract.call(addressuasvLb4, {from: accounts[3]});
//		const boolIY83qCA = await Token50X100lH7TFSF.transfer.call(addressFQXiYzt, uintPhUUvKY, {from: accounts[2]});
//		const boolAibrlbl = await Token50X100lH7TFSF.transfer.call(addressu870YFA, uintIuhc6Dq, {from: accounts[2]});

		await expect(Token50X100lH7TFSF.setTokenContract.call(addressuasvLb4, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100yQbNS5X = await Token50X100.new({from: accounts[1]});
		const uintymXSjXd = BigInt("0")
		const addresstQI5AMf = accounts[5]
		const boolhr7onXr = await Token50X100yQbNS5X.decreaseApproval.call(addresstQI5AMf, uintymXSjXd, {from: accounts[0]});

		assert.equal(boolhr7onXr, true)
	});
})