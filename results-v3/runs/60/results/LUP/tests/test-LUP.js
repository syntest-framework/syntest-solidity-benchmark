const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPQgaff2g = await LUP.new({from: accounts[3]});
		const uintFfbh3iN = BigInt("1359")
		const addressVsm9AqN = accounts[5]
		const addressRvZRrcw = accounts[5]
		const uintJDqeHUB = BigInt("1899")
		const uintg5qcMWm = BigInt("1201")
		const addressNV5YYXT = accounts[2]
		const boolRe90dme = true
		const addressljCfqEP = accounts[5]
		const uintESiJYi = BigInt("1521")
		const addressZHbfy7k = accounts[0]
		const boolHEC5nzJ = await LUPQgaff2g.unlock.call(addressVsm9AqN, uintFfbh3iN, {from: "0x0000000000000000000000000000000000000001"});
		const addressYvzqV8m = await LUPQgaff2g.notFrozen.call(addressRvZRrcw, {from: accounts[4]});
		const boolL7MxuZm = await LUPQgaff2g.transferWithLock.call(addressNV5YYXT, uintg5qcMWm, uintJDqeHUB, {from: accounts[2]});
		const booldankTOn = await LUPQgaff2g.freezeAccount.call(addressljCfqEP, boolRe90dme, {from: accounts[3]});
		const boolblwFiic = await LUPQgaff2g.unlock.call(addressZHbfy7k, uintESiJYi, {from: accounts[3]});

		await expect(LUPQgaff2g.unlock.call(addressVsm9AqN, uintFfbh3iN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringORqziH = "RinTr5xbReBfn1Vcbg5HtoPUVlFNBAQ2PW2iyKycsiTfrImrSeLMnrclhAgFS"
		const stringmaRzFwW = "W77imqRsfE9LXDMWsgoH"
		const uintM4p0bgP = BigInt("253")
		const LUPTlagJoI = await LUP.new(stringORqziH, stringmaRzFwW, uintM4p0bgP, {from: accounts[2]});
		const uintgbwljCk = BigInt("1780")
		const addresshQtJsHj = accounts[1]
		const addressDA99sPc = accounts[2]
		const stringnzHyBTl = await LUPTlagJoI.name.call({from: accounts[0]});
		const boolskNoi6v = await LUPTlagJoI.transfer.call(addresshQtJsHj, uintgbwljCk, {from: accounts[0]});
		const uint256Y65WCyH = await LUPTlagJoI.balanceOf.call(addressDA99sPc, {from: accounts[3]});
	});

	it('test for LUP', async () => {
		const LUPm1FO58j = await LUP.new({from: accounts[4]});
		const addressJXvsA6c = accounts[3]
		const uinttRodXdG = BigInt("406")
		const uintIKLNPA = BigInt("1053")
		const addresstSgpke1 = accounts[0]
		const uintkXFz3Xe = BigInt("728")
		const uintLXOWWZG = BigInt("386")
		const addressWwVkDnf = accounts[1]
		const uint256mBQM1pI = await LUPm1FO58j.balanceOf.call(addressJXvsA6c, {from: accounts[1]});
		const boolLelrIHA = await LUPm1FO58j.lock.call(addresstSgpke1, uintIKLNPA, uinttRodXdG, {from: accounts[4]});
		const boolTazA9Uh = await LUPm1FO58j.transferWithLock.call(addressWwVkDnf, uintLXOWWZG, uintkXFz3Xe, {from: accounts[0]});

		assert.equal(uint256mBQM1pI, BigInt("0"))
		await expect(LUPm1FO58j.lock.call(addresstSgpke1, uintIKLNPA, uinttRodXdG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPm1FO58j = await LUP.new({from: accounts[4]});
		const addressgwhC505 = accounts[4]
		const addressKj3NsrK = accounts[3]
		const uintwceyTNY = BigInt("406")
		const uintFnwzzCG = BigInt("1053")
		const addressU2wrxss = accounts[1]
		const boolnXRlTFe = false
		const address4UZ5x5 = accounts[2]
		const uintJlpTLYv = BigInt("728")
		const uintfupyKll = BigInt("386")
		const addressslEpSBi = accounts[1]
		const uint256tAQBOzd = await LUPm1FO58j.balanceOf.call(addressgwhC505, {from: accounts[0]});
		const uint256mBQM1pI = await LUPm1FO58j.balanceOf.call(addressKj3NsrK, {from: accounts[1]});
		const stringiXoJ0tc = await LUPm1FO58j.name.call({from: accounts[0]});
		const boolLelrIHA = await LUPm1FO58j.lock.call(addressU2wrxss, uintFnwzzCG, uintwceyTNY, {from: accounts[4]});
		const booljbSCiJb = await LUPm1FO58j.freezeAccount.call(address4UZ5x5, boolnXRlTFe, {from: accounts[2]});
		const boolTazA9Uh = await LUPm1FO58j.transferWithLock.call(addressslEpSBi, uintfupyKll, uintJlpTLYv, {from: accounts[0]});

		assert.equal(stringiXoJ0tc, "LINKUP Token")
		assert.equal(uint256mBQM1pI, BigInt("0"))
		assert.equal(uint256tAQBOzd, BigInt("50000000000000000000000000"))
		await expect(LUPm1FO58j.lock.call(addressU2wrxss, uintFnwzzCG, uintwceyTNY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPQgaff2g = await LUP.new({from: accounts[3]});
		const uintfaurz8A = BigInt("910")
		const addressSOPegxn = accounts[4]
		const uintR7BBo9b = BigInt("1359")
		const addressIdBLwPy = accounts[6]
		const addressWOgFJTf = accounts[5]
		const uintx9cfNko = BigInt("1899")
		const uintcanoWX3 = BigInt("1201")
		const addressoIhv9Ne = accounts[2]
		const boolRe90dme = true
		const addressIdqcHRH = accounts[5]
		const uintk8ke2Va = BigInt("1521")
		const addresskMt6A89 = accounts[0]
		const boolwhUJ8xR = await LUPQgaff2g.transfer.call(addressSOPegxn, uintfaurz8A, {from: accounts[5]});
		const boolHEC5nzJ = await LUPQgaff2g.unlock.call(addressIdBLwPy, uintR7BBo9b, {from: "0x0000000000000000000000000000000000000001"});
		const addressYvzqV8m = await LUPQgaff2g.notFrozen.call(addressWOgFJTf, {from: accounts[4]});
		const boolL7MxuZm = await LUPQgaff2g.transferWithLock.call(addressoIhv9Ne, uintcanoWX3, uintx9cfNko, {from: accounts[2]});
		const booldankTOn = await LUPQgaff2g.freezeAccount.call(addressIdqcHRH, boolRe90dme, {from: accounts[3]});
		const boolblwFiic = await LUPQgaff2g.unlock.call(addresskMt6A89, uintk8ke2Va, {from: accounts[3]});

		await expect(LUPQgaff2g.transfer.call(addressSOPegxn, uintfaurz8A, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPVYn2OwJ = await LUP.new({from: accounts[3]});
		const addressrTIbQej = accounts[1]
		const uintlmAfzG8 = BigInt("1963")
		const uintaaoi1bs = BigInt("909")
		const addressBcxEq2W = accounts[1]
		const boolJVp5a1q = false
		const addressFFEMUUm = accounts[1]
		const addressmbvGze4 = await LUPVYn2OwJ.notFrozen.call(addressrTIbQej, {from: accounts[3]});
		const boolyD9ozYL = await LUPVYn2OwJ.lock.call(addressBcxEq2W, uintaaoi1bs, uintlmAfzG8, {from: accounts[0]});
		const boolcUz0mlT = await LUPVYn2OwJ.freezeAccount.call(addressFFEMUUm, boolJVp5a1q, {from: accounts[3]});

		await expect(LUPVYn2OwJ.notFrozen.call(addressrTIbQej, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPm1FO58j = await LUP.new({from: accounts[4]});
		const addressum6hzUY = accounts[4]
		const addressBBRBLmU = accounts[3]
		const uintiUWBRrG = BigInt("875")
		const addressN6Fdo4a = accounts[3]
		const uintKwhzgln = BigInt("406")
		const uintHsqp8v = BigInt("1052")
		const addressELJqR1D = accounts[1]
		const boolnXRlTFe = false
		const addressefzkdxV = accounts[2]
		const uintgpVXBd9 = BigInt("901")
		const uintL5f2B4g = BigInt("1365")
		const addresskcR9bh = accounts[3]
		const uintxRGmOo = BigInt("728")
		const uinttS2hBJ = BigInt("386")
		const addressncCM78H = accounts[1]
		const uint256tAQBOzd = await LUPm1FO58j.balanceOf.call(addressum6hzUY, {from: accounts[0]});
		const uint256mBQM1pI = await LUPm1FO58j.balanceOf.call(addressBBRBLmU, {from: accounts[1]});
		const stringiXoJ0tc = await LUPm1FO58j.name.call({from: accounts[0]});
		const booljCGZbqv = await LUPm1FO58j.unlock.call(addressN6Fdo4a, uintiUWBRrG, {from: accounts[4]});
		const boolLelrIHA = await LUPm1FO58j.lock.call(addressELJqR1D, uintHsqp8v, uintKwhzgln, {from: accounts[4]});
		const booljbSCiJb = await LUPm1FO58j.freezeAccount.call(addressefzkdxV, boolnXRlTFe, {from: accounts[2]});
		const boolACvB4kS = await LUPm1FO58j.lock.call(addresskcR9bh, uintL5f2B4g, uintgpVXBd9, {from: accounts[3]});
		const boolTazA9Uh = await LUPm1FO58j.transferWithLock.call(addressncCM78H, uinttS2hBJ, uintxRGmOo, {from: accounts[0]});

		assert.equal(stringiXoJ0tc, "LINKUP Token")
		assert.equal(uint256mBQM1pI, BigInt("0"))
		assert.equal(uint256tAQBOzd, BigInt("50000000000000000000000000"))
		await expect(LUPm1FO58j.unlock.call(addressN6Fdo4a, uintiUWBRrG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPm1FO58j = await LUP.new({from: accounts[4]});
		const addressPjMCmWj = accounts[3]
		const addresseonNaAW = accounts[2]
		const uintivqtyO = BigInt("1879")
		const uintbi7yrBC = BigInt("687")
		const addressMEo4DYM = accounts[2]
		const uintRX4jP1X = BigInt("728")
		const uintBO9jeUy = BigInt("386")
		const addressRF6bn5m = accounts[1]
		const uint256mBQM1pI = await LUPm1FO58j.balanceOf.call(addressPjMCmWj, {from: accounts[1]});
		const addressdgtLx8K = await LUPm1FO58j.upgradeTo.call(addresseonNaAW, {from: accounts[2]});
		const boolEpbhq1 = await LUPm1FO58j.lock.call(addressMEo4DYM, uintbi7yrBC, uintivqtyO, {from: accounts[3]});
		const boolTazA9Uh = await LUPm1FO58j.transferWithLock.call(addressRF6bn5m, uintBO9jeUy, uintRX4jP1X, {from: accounts[0]});

		assert.equal(uint256mBQM1pI, BigInt("0"))
		await expect(LUPm1FO58j.upgradeTo.call(addresseonNaAW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPm1FO58j = await LUP.new({from: accounts[4]});
		const addressNnEylrW = accounts[4]
		const addressN7tR2MG = accounts[4]
		const uintAb2C9T = BigInt("1223")
		const addressOBE6AuO = accounts[5]
		const uintsmQgSgH = BigInt("406")
		const uintKCaMeIo = BigInt("1053")
		const addressxz38Qvx = accounts[1]
		const boolnXRlTFe = false
		const addressPFIjF51 = accounts[2]
		const uintOY6VLk8 = BigInt("728")
		const uintxRAsZj = BigInt("386")
		const addresslYKG0tI = accounts[1]
		const uint256tAQBOzd = await LUPm1FO58j.balanceOf.call(addressNnEylrW, {from: accounts[0]});
		const uint256mBQM1pI = await LUPm1FO58j.balanceOf.call(addressN7tR2MG, {from: accounts[1]});
		const stringiXoJ0tc = await LUPm1FO58j.name.call({from: accounts[0]});
		const stringlSfAVR = await LUPm1FO58j.symbol.call({from: accounts[1]});
		const stringLyoiZv = await LUPm1FO58j.symbol.call({from: accounts[2]});
		const boolHjPfSLG = await LUPm1FO58j.transfer.call(addressOBE6AuO, uintAb2C9T, {from: accounts[5]});
		const boolLelrIHA = await LUPm1FO58j.lock.call(addressxz38Qvx, uintKCaMeIo, uintsmQgSgH, {from: accounts[4]});
		const booljbSCiJb = await LUPm1FO58j.freezeAccount.call(addressPFIjF51, boolnXRlTFe, {from: accounts[2]});
		const boolTazA9Uh = await LUPm1FO58j.transferWithLock.call(addresslYKG0tI, uintxRAsZj, uintOY6VLk8, {from: accounts[0]});

		assert.equal(stringLyoiZv, "LUP")
		assert.equal(stringiXoJ0tc, "LINKUP Token")
		assert.equal(stringlSfAVR, "LUP")
		assert.equal(uint256mBQM1pI, BigInt("50000000000000000000000000"))
		assert.equal(uint256tAQBOzd, BigInt("50000000000000000000000000"))
		await expect(LUPm1FO58j.transfer.call(addressOBE6AuO, uintAb2C9T, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPm1FO58j = await LUP.new({from: accounts[4]});
		const uintkNGuaqm = BigInt("728")
		const uintEGi04Aa = BigInt("386")
		const addresshOsZvOc = accounts[1]
		const uint8s2YhPKR = await LUPm1FO58j.decimals.call({from: accounts[0]});
		const boolTazA9Uh = await LUPm1FO58j.transferWithLock.call(addresshOsZvOc, uintEGi04Aa, uintkNGuaqm, {from: accounts[0]});

		assert.equal(uint8s2YhPKR, BigInt("18"))
		await expect(LUPm1FO58j.transferWithLock.call(addresshOsZvOc, uintEGi04Aa, uintkNGuaqm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPQIAEB7u = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcwo19JX = BigInt("1293")
		const addresssqPDmis = accounts[5]
		const uintdiPvx8h = BigInt("369")
		const uintASgBHYB = BigInt("1538")
		const addressFPCfgn = accounts[2]
		const boolQoV3fqb = await LUPQIAEB7u.unlock.call(addresssqPDmis, uintcwo19JX, {from: accounts[1]});
		const uint8p08JuMC = await LUPQIAEB7u.decimals.call({from: accounts[5]});
		const stringCLainV = await LUPQIAEB7u.symbol.call({from: accounts[1]});
		const stringDsvxmK3 = await LUPQIAEB7u.symbol.call({from: accounts[3]});
		const boolxMCIBOH = await LUPQIAEB7u.transferWithLock.call(addressFPCfgn, uintASgBHYB, uintdiPvx8h, {from: accounts[0]});
	});

	it('test for LUP', async () => {
		const LUPm1FO58j = await LUP.new({from: accounts[4]});
		const boolh3FlRIa = false
		const addresspQQVfVD = accounts[5]
		const addressIrCXABb = accounts[5]
		const boolNEerUHQ = await LUPm1FO58j.freezeAccount.call(addresspQQVfVD, boolh3FlRIa, {from: accounts[4]});
		const uint256mBQM1pI = await LUPm1FO58j.balanceOf.call(addressIrCXABb, {from: accounts[1]});

		assert.equal(boolNEerUHQ, true)
		assert.equal(uint256mBQM1pI, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPm1FO58j = await LUP.new({from: accounts[4]});
		const uinttdHDpiW = BigInt("183")
		const uintH1FrYO = BigInt("1598")
		const addressKvxuC8r = accounts[1]
		const uintGOr5fSB = BigInt("533")
		const uintZoPIQCb = BigInt("570")
		const addressczSN5u8 = accounts[3]
		const uintqfVpxjP = BigInt("546")
		const addressGrAYkR8 = accounts[3]
		const uint18elho = BigInt("1932")
		const addressoc1v4SN = accounts[1]
		const booltpE3oih = await LUPm1FO58j.transferWithLock.call(addressKvxuC8r, uintH1FrYO, uinttdHDpiW, {from: accounts[4]});
		const boolrUREMO7 = await LUPm1FO58j.transferWithLock.call(addressczSN5u8, uintZoPIQCb, uintGOr5fSB, {from: accounts[5]});
		const boolt8fq47 = await LUPm1FO58j.transfer.call(addressGrAYkR8, uintqfVpxjP, {from: accounts[4]});
		const boolTJ3gLfQ = await LUPm1FO58j.unlock.call(addressoc1v4SN, uint18elho, {from: accounts[4]});

		assert.equal(booltpE3oih, true)
		await expect(LUPm1FO58j.transferWithLock.call(addressczSN5u8, uintZoPIQCb, uintGOr5fSB, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPm1FO58j = await LUP.new({from: accounts[4]});
		const addressHL2uCXX = accounts[0]
		const uintRTPifmG = BigInt("524")
		const addressrLhYUd = accounts[2]
		const uint8RHhbzQT = await LUPm1FO58j.decimals.call({from: accounts[0]});
		const addressRr92s5 = await LUPm1FO58j.upgradeTo.call(addressHL2uCXX, {from: accounts[4]});
		const boolt8fq47 = await LUPm1FO58j.transfer.call(addressrLhYUd, uintRTPifmG, {from: accounts[4]});

		assert.equal(boolt8fq47, true)
		assert.equal(uint8RHhbzQT, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPm1FO58j = await LUP.new({from: accounts[4]});
		const addressfpUydNZ = accounts[3]
		const uintmcYAEl9 = BigInt("34")
		const addressiUPmD9U = "0x0000000000000000000000000000000000000000"
		const uintckTuhRN = BigInt("406")
		const uintYlFT4Kn = BigInt("1053")
		const addressXfUpIo = accounts[1]
		const uint256mBQM1pI = await LUPm1FO58j.balanceOf.call(addressfpUydNZ, {from: accounts[1]});
		const boolDCmQeb7 = await LUPm1FO58j.transfer.call(addressiUPmD9U, uintmcYAEl9, {from: accounts[4]});
		const boolLelrIHA = await LUPm1FO58j.lock.call(addressXfUpIo, uintYlFT4Kn, uintckTuhRN, {from: accounts[4]});

		assert.equal(uint256mBQM1pI, BigInt("0"))
		await expect(LUPm1FO58j.transfer.call(addressiUPmD9U, uintmcYAEl9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPm1FO58j = await LUP.new({from: accounts[4]});
		const addresslwgkuEd = accounts[2]
		const uintxYfIHlG = BigInt("1042")
		const addressjjoDreP = accounts[3]
		const uintnmV25Wt = BigInt("1991")
		const uintVKcM5gL = BigInt("1979")
		const addressHmt0ZSK = accounts[4]
		const uintRzA4AiT = BigInt("1932")
		const addressMFZDZ98 = accounts[1]
		const uint256ojzXHa = await LUPm1FO58j.balanceOf.call(addresslwgkuEd, {from: accounts[2]});
		const boolt8fq47 = await LUPm1FO58j.transfer.call(addressjjoDreP, uintxYfIHlG, {from: accounts[4]});
		const boolVBKyNN = await LUPm1FO58j.lock.call(addressHmt0ZSK, uintVKcM5gL, uintnmV25Wt, {from: accounts[4]});
		const stringeRzh2Mp = await LUPm1FO58j.symbol.call({from: accounts[2]});
		const boolTJ3gLfQ = await LUPm1FO58j.unlock.call(addressMFZDZ98, uintRzA4AiT, {from: accounts[4]});

		assert.equal(boolVBKyNN, true)
		assert.equal(boolt8fq47, true)
		assert.equal(stringeRzh2Mp, "LUP")
		assert.equal(uint256ojzXHa, BigInt("0"))
		await expect(LUPm1FO58j.unlock.call(addressMFZDZ98, uintRzA4AiT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})