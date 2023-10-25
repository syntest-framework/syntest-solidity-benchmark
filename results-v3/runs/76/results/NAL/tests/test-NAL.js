const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const stringbDrnEN1 = "NXxvCT9H6O4PQ1qv1ej61QLKU6N"
		const stringDR0fAkL = "SqWMJFm1D1Oqct04BG5e0i1z6VkpMVNxd7T4FwV9VgcFVVsNbVn4D"
		const uintCXKqFB3 = BigInt("209")
		const NALytoODci = await NAL.new(stringbDrnEN1, stringDR0fAkL, uintCXKqFB3, {from: "0x0000000000000000000000000000000000000001"});
		const uintuBUeG0N = BigInt("1898")
		const addressBwi2qx2 = accounts[2]
		const uintjLBwGy8 = BigInt("299")
		const addressOuqm9Vl = accounts[0]
		const boolDDEeT1G = await NALytoODci.increaseAllowance.call(addressBwi2qx2, uintuBUeG0N, {from: accounts[2]});
		const boolaWpNLj6 = await NALytoODci.transfer.call(addressOuqm9Vl, uintjLBwGy8, {from: accounts[3]});
	});

	it('test for NAL', async () => {
		const NALKeeKA84 = await NAL.new({from: accounts[4]});
		const uintsip6zEG = BigInt("949")
		const addresslIhcGld = accounts[4]
		const address9zLPu9 = accounts[2]
		const addressATwQ4UJ = accounts[0]
		const booluF3CmAQ = await NALKeeKA84.transferFrom.call(address9zLPu9, addresslIhcGld, uintsip6zEG, {from: accounts[3]});
		const addressexKik3v = await NALKeeKA84.notFrozen.call(addressATwQ4UJ, {from: accounts[0]});

		await expect(NALKeeKA84.transferFrom.call(address9zLPu9, addresslIhcGld, uintsip6zEG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALoJ4APmN = await NAL.new({from: accounts[5]});
		const addressvZDWpkl = accounts[5]
		const addressz9uzgqS = accounts[0]
		const addressw2A6Abl = "0x0000000000000000000000000000000000000001"
		const boolxzeMZWQ = await NALoJ4APmN.isAdmin.call(addressvZDWpkl, {from: accounts[0]});
		const boolkkALjs5 = await NALoJ4APmN.freezeAccount.call(addressz9uzgqS, {from: accounts[5]});
		await NALoJ4APmN.whenNotPaused.call({from: accounts[2]});
		const uint256Ql1M0mM = await NALoJ4APmN.balanceOf.call(addressw2A6Abl, {from: accounts[2]});

		assert.equal(boolkkALjs5, true)
		assert.equal(boolxzeMZWQ, true)
		await expect(NALoJ4APmN.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCtivN36 = await NAL.new({from: accounts[5]});
		const uintwBvIvQK = BigInt("764")
		const addressQ5gjFGv = accounts[5]
		const addresshXPItt5 = accounts[3]
		const boolR0d6MM = await NALCtivN36.approve.call(addressQ5gjFGv, uintwBvIvQK, {from: "0x0000000000000000000000000000000000000001"});
		await NALCtivN36.pause.call({from: accounts[4]});
		const addressUQt3h4R = await NALCtivN36.addAdmin.call(addresshXPItt5, {from: accounts[2]});
		const stringUz3APIA = await NALCtivN36.symbol.call({from: accounts[0]});
		await NALCtivN36.whenNotPaused.call({from: accounts[4]});

		assert.equal(boolR0d6MM, true)
		await expect(NALCtivN36.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALRCmOqlO = await NAL.new({from: accounts[0]});
		const uintB5MjpJg = BigInt("1646")
		const addressaZ4o0cf = accounts[4]
		const addressKRVi5SG = accounts[3]
		const uintppvsumG = BigInt("1238")
		const addressoQtvr2A = accounts[1]
		const uintfGywhAs = BigInt("527")
		const addressA3b0xNl = accounts[4]
		const addressSeHicVp = accounts[4]
		const addresseFToGG = await NALRCmOqlO.burnFrom.call(addressaZ4o0cf, uintB5MjpJg, {from: accounts[0]});
		const boolvKbYrbd = await NALRCmOqlO.isAdmin.call(addressKRVi5SG, {from: accounts[4]});
		const boolKMUolU = await NALRCmOqlO.unlock.call(addressoQtvr2A, uintppvsumG, {from: accounts[3]});
		const boolPFCJoPM = await NALRCmOqlO.decreaseAllowance.call(addressA3b0xNl, uintfGywhAs, {from: accounts[4]});
		const boolYXvQD4C = await NALRCmOqlO.unfreezeAccount.call(addressSeHicVp, {from: accounts[3]});

		await expect(NALRCmOqlO.burnFrom.call(addressaZ4o0cf, uintB5MjpJg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALJJnCkRO = await NAL.new({from: accounts[1]});
		const uintniLSif7 = BigInt("798")
		const addresshom8N2 = accounts[2]
		const uintLuJFT8W = BigInt("1533")
		const addressRgL6QMf = accounts[3]
		const addressP0N9L1R = accounts[3]
		const boolmTDIuyJ = await NALJJnCkRO.transfer.call(addresshom8N2, uintniLSif7, {from: accounts[2]});
		const addressjqCsxIe = await NALJJnCkRO.burnFrom.call(addressRgL6QMf, uintLuJFT8W, {from: "0x0000000000000000000000000000000000000001"});
		const uint8FvCTDwD = await NALJJnCkRO.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		await NALJJnCkRO.unpause.call({from: accounts[3]});
		const addressOENPtgB = await NALJJnCkRO.transferOwnership.call(addressP0N9L1R, {from: accounts[1]});

		await expect(NALJJnCkRO.transfer.call(addresshom8N2, uintniLSif7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCEsV9J7 = await NAL.new({from: accounts[2]});
		const uintRdlbrbq = BigInt("339")
		const addressYgd5oS = accounts[4]
		const uintk2oH5Te = BigInt("631")
		const uintftKWIjT = BigInt("442")
		const addressHPD0IF7 = accounts[3]
		const addressGup7E9g = accounts[0]
		const uintC06X2Vf = BigInt("1890")
		const addressXDG99Vx = accounts[2]
		const boolV6G4pc = await NALCEsV9J7.increaseAllowance.call(addressYgd5oS, uintRdlbrbq, {from: accounts[2]});
		const uint256ELB62GM = await NALCEsV9J7.burn.call(uintk2oH5Te, {from: accounts[2]});
		const addressRTAEvNR = await NALCEsV9J7.burnFrom.call(addressHPD0IF7, uintftKWIjT, {from: accounts[4]});
		await NALCEsV9J7.onlyOwner.call({from: accounts[1]});
		const boolHTYDBSM = await NALCEsV9J7.isOwner.call(addressGup7E9g, {from: accounts[5]});
		const boolO44sAVe = await NALCEsV9J7.decreaseAllowance.call(addressXDG99Vx, uintC06X2Vf, {from: accounts[1]});

		assert.equal(boolV6G4pc, true)
		await expect(NALCEsV9J7.burnFrom.call(addressHPD0IF7, uintftKWIjT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALKeeKA84 = await NAL.new({from: accounts[4]});
		const addresssZIcsVX = accounts[4]
		const uintmlY5vDK = BigInt("994")
		const addressDOhe051 = accounts[4]
		const addresscSlj31q = accounts[2]
		const addressnzKIoUw = accounts[0]
		const boolpyl1p3R = await NALKeeKA84.isOwner.call(addresssZIcsVX, {from: accounts[3]});
		const booluF3CmAQ = await NALKeeKA84.transferFrom.call(addresscSlj31q, addressDOhe051, uintmlY5vDK, {from: accounts[3]});
		const addressexKik3v = await NALKeeKA84.notFrozen.call(addressnzKIoUw, {from: accounts[0]});
		const uint8aCfBChA = await NALKeeKA84.decimals.call({from: accounts[1]});

		assert.equal(boolpyl1p3R, true)
		await expect(NALKeeKA84.transferFrom.call(addresscSlj31q, addressDOhe051, uintmlY5vDK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALedYbyZA = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintbOFsHWC = BigInt("479")
		const addresseeYChKX = accounts[2]
		const addressz0ABCsb = accounts[2]
		const uintJKjfIxi = BigInt("1567")
		const addressaJP6LU = accounts[1]
		const addressuL93Ys4 = accounts[2]
		const boolLuSeK19 = await NALedYbyZA.transferFrom.call(addressz0ABCsb, addresseeYChKX, uintbOFsHWC, {from: accounts[1]});
		const boolgZR5zNF = await NALedYbyZA.transfer.call(addressaJP6LU, uintJKjfIxi, {from: accounts[4]});
		const boolZ7jciA6 = await NALedYbyZA.isOwner.call(addressuL93Ys4, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NAL', async () => {
		const NALWomdSLt = await NAL.new({from: accounts[4]});
		const addressKmJbFdo = accounts[0]
		const addressqrsUkTI = accounts[1]
		const addressRQFkXXR = accounts[5]
		const uintd6jg00W = BigInt("1796")
		const addressaHiOxyC = accounts[3]
		const boolzWbVbtP = await NALWomdSLt.isAdmin.call(addressKmJbFdo, {from: accounts[4]});
		const uint8Q8z3SUH = await NALWomdSLt.decimals.call({from: accounts[2]});
		const addressIWwwFK6 = await NALWomdSLt.transferOwnership.call(addressqrsUkTI, {from: accounts[5]});
		await NALWomdSLt.whenNotPaused.call({from: accounts[2]});
		const addressGb3etTo = await NALWomdSLt.notFrozen.call(addressRQFkXXR, {from: accounts[2]});
		const boolLBA8DGn = await NALWomdSLt.unlock.call(addressaHiOxyC, uintd6jg00W, {from: accounts[2]});

		assert.equal(boolzWbVbtP, false)
		assert.equal(uint8Q8z3SUH, BigInt("18"))
		await expect(NALWomdSLt.transferOwnership.call(addressqrsUkTI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL3FGhC8 = await NAL.new({from: accounts[3]});
		const addressrmcZTlQ = accounts[2]
		const uintebJuyV = BigInt("250")
		const addressnePdnT1 = accounts[4]
		const uint256PdH4Kt4 = await NAL3FGhC8.balanceOf.call(addressrmcZTlQ, {from: accounts[5]});
		const booljevPJpZ = await NAL3FGhC8.transfer.call(addressnePdnT1, uintebJuyV, {from: accounts[2]});

		assert.equal(uint256PdH4Kt4, BigInt("0"))
		await expect(NAL3FGhC8.transfer.call(addressnePdnT1, uintebJuyV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALKeeKA84 = await NAL.new({from: accounts[4]});
		const uintXsIYaW = BigInt("949")
		const addressAszcljr = accounts[6]
		const addressihatYfY = accounts[2]
		const uint256Q7cYps = await NALKeeKA84.totalSupply.call({from: accounts[0]});
		const booluF3CmAQ = await NALKeeKA84.transferFrom.call(addressihatYfY, addressAszcljr, uintXsIYaW, {from: accounts[3]});
		const stringg8qleNx = await NALKeeKA84.name.call({from: accounts[0]});
		await NALKeeKA84.onlyOwner.call({from: accounts[2]});

		assert.equal(uint256Q7cYps, BigInt("2000000000000000000000000000"))
		await expect(NALKeeKA84.transferFrom.call(addressihatYfY, addressAszcljr, uintXsIYaW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL3FGhC8 = await NAL.new({from: accounts[3]});
		const uintVmbQrxU = BigInt("726")
		const addresszo0Jqzl = accounts[3]
		const addressaEYrxQ4 = accounts[3]
		const stringNQv45H1 = await NAL3FGhC8.name.call({from: accounts[2]});
		const boolIedq4iT = await NAL3FGhC8.decreaseAllowance.call(addresszo0Jqzl, uintVmbQrxU, {from: accounts[2]});
		const addresswSsGEx6 = await NAL3FGhC8.upgradeTo.call(addressaEYrxQ4, {from: accounts[2]});

		assert.equal(stringNQv45H1, "Personal Token")
		await expect(NAL3FGhC8.decreaseAllowance.call(addresszo0Jqzl, uintVmbQrxU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALEqe9MYE = await NAL.new({from: accounts[2]});
		const uintOYjrPfu = BigInt("1033")
		const addressAaeViOs = accounts[1]
		const uintuqJ7Wi = BigInt("1122")
		const addressnTC1JaK = accounts[1]
		const addresswJ4KeJJ = accounts[4]
		const addresskoyc1bn = accounts[1]
		const uintq3w2enV = BigInt("1013")
		const addressCAPDUt6 = accounts[0]
		const booluRRvrPx = await NALEqe9MYE.approve.call(addressAaeViOs, uintOYjrPfu, {from: accounts[1]});
		const booleA2kxk5 = await NALEqe9MYE.increaseAllowance.call(addressnTC1JaK, uintuqJ7Wi, {from: accounts[2]});
		const boolo38A30q = await NALEqe9MYE.paused.call({from: accounts[5]});
		const uint256N753hDs = await NALEqe9MYE.allowance.call(addresskoyc1bn, addresswJ4KeJJ, {from: "0x0000000000000000000000000000000000000001"});
		const boolDNfuEQ = await NALEqe9MYE.transfer.call(addressCAPDUt6, uintq3w2enV, {from: accounts[1]});

		assert.equal(booleA2kxk5, true)
		assert.equal(boolo38A30q, false)
		assert.equal(booluRRvrPx, true)
		assert.equal(uint256N753hDs, BigInt("0"))
		await expect(NALEqe9MYE.transfer.call(addressCAPDUt6, uintq3w2enV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL3FGhC8 = await NAL.new({from: accounts[3]});
		const addressiqESlwS = accounts[3]
		const uintjK1iqp = BigInt("250")
		const addressTBzWPgW = accounts[4]
		await NAL3FGhC8.renounceAdmin.call({from: accounts[2]});
		const uint256PdH4Kt4 = await NAL3FGhC8.balanceOf.call(addressiqESlwS, {from: accounts[5]});
		const booljevPJpZ = await NAL3FGhC8.transfer.call(addressTBzWPgW, uintjK1iqp, {from: accounts[2]});

		await expect(NAL3FGhC8.renounceAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALWwF7oEq = await NAL.new({from: accounts[2]});
		const addresssw4q1a7 = accounts[0]
		const boolAyFFsT = await NALWwF7oEq.isAdmin.call(addresssw4q1a7, {from: accounts[4]});
		await NALWwF7oEq.renounceAdmin.call({from: accounts[2]});
		const boolGOfavkz = await NALWwF7oEq.paused.call({from: accounts[1]});

		assert.equal(boolAyFFsT, false)
		await expect(NALWwF7oEq.renounceAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALKeeKA84 = await NAL.new({from: accounts[4]});
		const addressDLF2TU = accounts[2]
		const addresshJ6TRaq = accounts[2]
		const addressTDLcUF = await NALKeeKA84.removeAdmin.call(addressDLF2TU, {from: accounts[4]});
		const uint256HWRROgY = await NALKeeKA84.balanceOf.call(addresshJ6TRaq, {from: accounts[0]});
		const stringVi5DEKt = await NALKeeKA84.name.call({from: accounts[3]});

		await expect(NALKeeKA84.removeAdmin.call(addressDLF2TU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALKeeKA84 = await NAL.new({from: accounts[4]});
		const addressHjQdyXo = accounts[5]
		const uintFKTIi6P = BigInt("949")
		const addresspiyaVdx = accounts[5]
		const addressd2AdxeC = accounts[2]
		const addressg5y8fav = await NALKeeKA84.upgradeTo.call(addressHjQdyXo, {from: accounts[4]});
		const booluF3CmAQ = await NALKeeKA84.transferFrom.call(addressd2AdxeC, addresspiyaVdx, uintFKTIi6P, {from: accounts[3]});

		await expect(NALKeeKA84.transferFrom.call(addressd2AdxeC, addresspiyaVdx, uintFKTIi6P, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALKeeKA84 = await NAL.new({from: accounts[4]});
		const uintLT1odWM = BigInt("1316")
		const addresscM1554D = accounts[0]
		const uintJ32gHEQ = BigInt("949")
		const addressWGw5jeC = accounts[4]
		const addressQWdZXEn = accounts[2]
		const boolJKzJkWF = await NALKeeKA84.unlock.call(addresscM1554D, uintLT1odWM, {from: accounts[4]});
		await NALKeeKA84.onlyOwner.call({from: accounts[5]});
		const booluF3CmAQ = await NALKeeKA84.transferFrom.call(addressQWdZXEn, addressWGw5jeC, uintJ32gHEQ, {from: accounts[3]});

		await expect(NALKeeKA84.unlock.call(addresscM1554D, uintLT1odWM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALKeeKA84 = await NAL.new({from: accounts[4]});
		const addresswhK31bz = accounts[4]
		const uintphfRBOI = BigInt("1728")
		const addresscBJBbJV = accounts[2]
		const uintZkxi57 = BigInt("317")
		const addressY3tMoG4 = accounts[2]
		const uintHpr9y4S = BigInt("949")
		const addressDp2Jw66 = accounts[5]
		const addressyvSME38 = accounts[2]
		const addressx8gsQtD = await NALKeeKA84.transferOwnership.call(addresswhK31bz, {from: accounts[4]});
		const addressMb9Lm86 = await NALKeeKA84.burnFrom.call(addresscBJBbJV, uintphfRBOI, {from: accounts[3]});
		const boollA5qSte = await NALKeeKA84.increaseAllowance.call(addressY3tMoG4, uintZkxi57, {from: accounts[0]});
		const booluF3CmAQ = await NALKeeKA84.transferFrom.call(addressyvSME38, addressDp2Jw66, uintHpr9y4S, {from: accounts[3]});

		await expect(NALKeeKA84.burnFrom.call(addresscBJBbJV, uintphfRBOI, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALKeeKA84 = await NAL.new({from: accounts[4]});
		const uintnq1YmkY = BigInt("1753")
		const uintkOJWmbO = BigInt("69")
		const addressXqUjjnx = accounts[3]
		const addressj81gFD0 = accounts[2]
		const addressWcEUBK = accounts[2]
		const bool7mv5aX = await NALKeeKA84.lock.call(addressXqUjjnx, uintkOJWmbO, uintnq1YmkY, {from: accounts[4]});
		const boolGO6izT = await NALKeeKA84.isAdmin.call(addressj81gFD0, {from: accounts[4]});
		const uint256HWRROgY = await NALKeeKA84.balanceOf.call(addressWcEUBK, {from: accounts[0]});

		await expect(NALKeeKA84.lock.call(addressXqUjjnx, uintkOJWmbO, uintnq1YmkY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALKeeKA84 = await NAL.new({from: accounts[4]});
		const uintNN7QWCB = BigInt("552")
		const uintXUpW1lD = BigInt("1992")
		const addresscjKYxyO = accounts[0]
		const uintu4Q5cE1 = BigInt("531")
		const addressztTL7kP = accounts[1]
		const boolkgtr4j7 = await NALKeeKA84.transferWithLock.call(addresscjKYxyO, uintXUpW1lD, uintNN7QWCB, {from: accounts[4]});
		const boolJKzJkWF = await NALKeeKA84.unlock.call(addressztTL7kP, uintu4Q5cE1, {from: accounts[4]});

		assert.equal(boolkgtr4j7, true)
		await expect(NALKeeKA84.unlock.call(addressztTL7kP, uintu4Q5cE1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})