const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const DSPPa3wfby = await DSP.new({from: accounts[3]});
		const uintYuRMFHx = BigInt("1004")
		const addressooOHNp8 = accounts[4]
		const addressKMgdkSv = accounts[5]
		await DSPPa3wfby.renouncePauser.call({from: accounts[2]});
		const boolqWCllie = await DSPPa3wfby.transfer.call(addressooOHNp8, uintYuRMFHx, {from: accounts[0]});
		const uint256EjsezJh = await DSPPa3wfby.balanceOf.call(addressKMgdkSv, {from: accounts[3]});

		await expect(DSPPa3wfby.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const stringHg32dU = "CLIxS9KeNpuFgHRxRllD2TR2j9GoMTQLAHXHTfOUoHQz"
		const stringu4nJMcU = "j8QEIVS5Cdlywvxbapxl8At2gqu9O7tTdNGv"
		const uintTu1aU2v = BigInt("65")
		const DSPCyHgvgQ = await DSP.new(stringHg32dU, stringu4nJMcU, uintTu1aU2v, {from: accounts[4]});
		const uintAcK0lBw = BigInt("1122")
		const addressTFPXRet = accounts[0]
		const uintUJogq4g = BigInt("1493")
		const addressS4e4KrU = accounts[0]
		const addressVo6b05c = accounts[1]
		const uintYrW4wX5 = BigInt("986")
		const addressJOp7Tv9 = accounts[1]
		const uintDD4Pii7 = BigInt("1285")
		const addressMspneSm = accounts[3]
		const booljYggUBp = await DSPCyHgvgQ.decreaseAllowance.call(addressTFPXRet, uintAcK0lBw, {from: accounts[4]});
		const boolEUTCiiH = await DSPCyHgvgQ.transferFrom.call(addressVo6b05c, addressS4e4KrU, uintUJogq4g, {from: accounts[3]});
		const boolCViweL2 = await DSPCyHgvgQ.approve.call(addressJOp7Tv9, uintYrW4wX5, {from: accounts[2]});
		const boolwQLUNIP = await DSPCyHgvgQ.unlock.call(addressMspneSm, uintDD4Pii7, {from: accounts[5]});
	});

	it('test for DSP', async () => {
		const DSPoFff7s = await DSP.new({from: accounts[0]});
		const uintxDEqFCV = BigInt("643")
		const addressrxRSmvm = accounts[0]
		const addressd7hQVJi = accounts[5]
		const uintIOWJg1 = BigInt("1199")
		const addressO6Um0d = accounts[4]
		const addressfxVo8vo = accounts[3]
		const uintsrz8RDb = BigInt("1534")
		const addressMg1DRMR = accounts[2]
		const addressWay7QF = accounts[3]
		const uintBbjmZ4s = BigInt("1486")
		const addressotLcTHD = accounts[1]
		const uintxq3hKfP = BigInt("1445")
		const uintW642oq = BigInt("1162")
		const addressnDfsy8f = "0x0000000000000000000000000000000000000001"
		const boolVjOkJ2S = await DSPoFff7s.transferFrom.call(addressd7hQVJi, addressrxRSmvm, uintxDEqFCV, {from: accounts[1]});
		const boolHPDS8h = await DSPoFff7s.transferFrom.call(addressfxVo8vo, addressO6Um0d, uintIOWJg1, {from: accounts[0]});
		const boolVKPGbI = await DSPoFff7s.transferFrom.call(addressWay7QF, addressMg1DRMR, uintsrz8RDb, {from: accounts[5]});
		const boolNhV0Aer = await DSPoFff7s.unlock.call(addressotLcTHD, uintBbjmZ4s, {from: "0x0000000000000000000000000000000000000001"});
		const boolnhmE1J = await DSPoFff7s.lock.call(addressnDfsy8f, uintW642oq, uintxq3hKfP, {from: accounts[0]});

		await expect(DSPoFff7s.transferFrom.call(addressd7hQVJi, addressrxRSmvm, uintxDEqFCV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPaoom1Sa = await DSP.new({from: accounts[2]});
		const uintGGo8TJJ = BigInt("173")
		const addressmC6L0HZ = accounts[1]
		const addresslCdTzUJ = accounts[4]
		const addressuQoRpRC = accounts[5]
		const address5WFhZr = accounts[4]
		const boolJKbhnGm = await DSPaoom1Sa.decreaseAllowance.call(addressmC6L0HZ, uintGGo8TJJ, {from: accounts[1]});
		const uint256s0NRGJN = await DSPaoom1Sa.balanceOf.call(addresslCdTzUJ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256D9ybsAT = await DSPaoom1Sa.balanceOf.call(addressuQoRpRC, {from: accounts[3]});
		await DSPaoom1Sa.f.call({from: accounts[4]});
		const boolMKrp1WR = await DSPaoom1Sa.isPauser.call(address5WFhZr, {from: accounts[5]});

		await expect(DSPaoom1Sa.decreaseAllowance.call(addressmC6L0HZ, uintGGo8TJJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPoFff7s = await DSP.new({from: accounts[0]});
		const uintdDWBHLm = BigInt("202")
		const addressriuAqcS = accounts[4]
		const uintlUKouMc = BigInt("643")
		const address1TgD3r = accounts[0]
		const addressG5xZjl3 = accounts[5]
		const uintiAaZrGn = BigInt("1199")
		const addressKELCA1v = accounts[4]
		const addresslR1Aas1 = accounts[3]
		const uintSkQ6rWN = BigInt("1534")
		const addressOgJDoO8 = accounts[3]
		const addressvLU0xHl = accounts[3]
		const uintzj3Dl1f = BigInt("1486")
		const addressOsnmUBt = accounts[1]
		const uintZ3uow2N = BigInt("1445")
		const uintH2GDITM = BigInt("1162")
		const addressTJhL6mL = "0x0000000000000000000000000000000000000001"
		const boolsIlIT4s = await DSPoFff7s.increaseAllowance.call(addressriuAqcS, uintdDWBHLm, {from: accounts[2]});
		const boolVjOkJ2S = await DSPoFff7s.transferFrom.call(addressG5xZjl3, address1TgD3r, uintlUKouMc, {from: accounts[1]});
		const boolHPDS8h = await DSPoFff7s.transferFrom.call(addresslR1Aas1, addressKELCA1v, uintiAaZrGn, {from: accounts[0]});
		const boolVKPGbI = await DSPoFff7s.transferFrom.call(addressvLU0xHl, addressOgJDoO8, uintSkQ6rWN, {from: accounts[5]});
		const boolNhV0Aer = await DSPoFff7s.unlock.call(addressOsnmUBt, uintzj3Dl1f, {from: "0x0000000000000000000000000000000000000001"});
		await DSPoFff7s.renouncePauser.call({from: accounts[1]});
		const boolnhmE1J = await DSPoFff7s.lock.call(addressTJhL6mL, uintH2GDITM, uintZ3uow2N, {from: accounts[0]});

		assert.equal(boolsIlIT4s, true)
		await expect(DSPoFff7s.transferFrom.call(addressG5xZjl3, address1TgD3r, uintlUKouMc, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPbbuQDjZ = await DSP.new({from: accounts[0]});
		const address1xj3se = accounts[2]
		const addressyKjaLED = accounts[4]
		const boolz4sbdDJ = await DSPbbuQDjZ.isOwner.call(address1xj3se, {from: accounts[1]});
		const uint8pDtILw5 = await DSPbbuQDjZ.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringwMltBc = await DSPbbuQDjZ.symbol.call({from: accounts[0]});
		const addressDtfVlRw = await DSPbbuQDjZ.transferOwnership.call(addressyKjaLED, {from: accounts[2]});
		await DSPbbuQDjZ.onlyPauser.call({from: accounts[1]});
		await DSPbbuQDjZ.onlyNewOwner.call({from: accounts[2]});

		assert.equal(boolz4sbdDJ, false)
		assert.equal(stringwMltBc, "DSP")
		assert.equal(uint8pDtILw5, BigInt("18"))
		await expect(DSPbbuQDjZ.transferOwnership.call(addressyKjaLED, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPu3OD4w = await DSP.new({from: accounts[4]});
		const uintXRRuq3a = BigInt("1621")
		const addressy4KzWoU = accounts[4]
		const addressv6uzew = accounts[3]
		await DSPu3OD4w.onlyOwner.call({from: accounts[3]});
		const boolVR4t90E = await DSPu3OD4w.transfer.call(addressy4KzWoU, uintXRRuq3a, {from: accounts[3]});
		const addresszQE3NXZ = await DSPu3OD4w.transferOwnership.call(addressv6uzew, {from: accounts[2]});

		await expect(DSPu3OD4w.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPoFff7s = await DSP.new({from: accounts[0]});
		const uintIu7bmeM = BigInt("643")
		const addresszoLr2M = accounts[0]
		const addressmIq8xO = accounts[5]
		const uintW9MKAHo = BigInt("1534")
		const addressYyU45E1 = accounts[2]
		const addressXvy46Q8 = accounts[3]
		const stringUqUsTt3 = await DSPoFff7s.name.call({from: accounts[0]});
		const boolVjOkJ2S = await DSPoFff7s.transferFrom.call(addressmIq8xO, addresszoLr2M, uintIu7bmeM, {from: accounts[1]});
		const boolVKPGbI = await DSPoFff7s.transferFrom.call(addressXvy46Q8, addressYyU45E1, uintW9MKAHo, {from: accounts[5]});

		assert.equal(stringUqUsTt3, "DSP")
		await expect(DSPoFff7s.transferFrom.call(addressmIq8xO, addresszoLr2M, uintIu7bmeM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPtnp8oSQ = await DSP.new({from: accounts[0]});
		const addressZYm8lCV = accounts[1]
		const addresshnpYULq = accounts[4]
		const addressHnoXmUd = accounts[0]
		const uint256wclH65o = await DSPtnp8oSQ.allowance.call(addresshnpYULq, addressZYm8lCV, {from: accounts[0]});
		const boolWVcOeSU = await DSPtnp8oSQ.acceptOwnership.call({from: accounts[1]});
		const uint256rL2Gqv8 = await DSPtnp8oSQ.balanceOf.call(addressHnoXmUd, {from: accounts[3]});

		assert.equal(uint256wclH65o, BigInt("0"))
		await expect(DSPtnp8oSQ.acceptOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPoFff7s = await DSP.new({from: accounts[0]});
		const addressSshBTCD = "0x0000000000000000000000000000000000000001"
		const uintChBqAyL = BigInt("815")
		const addressWAG22oh = accounts[2]
		const uintsjfKyeQ = BigInt("1534")
		const addressj2FXosu = accounts[3]
		const addressAAvOPg5 = accounts[4]
		const boolO3zeJ9q = await DSPoFff7s.isPauser.call(addressSshBTCD, {from: accounts[4]});
		await DSPoFff7s.whenNotPaused.call({from: accounts[3]});
		const boolD27TzP = await DSPoFff7s.transfer.call(addressWAG22oh, uintChBqAyL, {from: accounts[3]});
		const boolVKPGbI = await DSPoFff7s.transferFrom.call(addressAAvOPg5, addressj2FXosu, uintsjfKyeQ, {from: accounts[5]});

		assert.equal(boolO3zeJ9q, false)
		await expect(DSPoFff7s.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPoFff7s = await DSP.new({from: accounts[0]});
		const uintlFOj1M9 = BigInt("1401")
		const addresslqgrRn6 = accounts[0]
		const uintTMbx7HG = BigInt("1113")
		const addressRnGiH8H = accounts[5]
		const booleKaDcd1 = await DSPoFff7s.transfer.call(addresslqgrRn6, uintlFOj1M9, {from: accounts[0]});
		const boolr1lWiRl = await DSPoFff7s.transfer.call(addressRnGiH8H, uintTMbx7HG, {from: accounts[4]});

		assert.equal(booleKaDcd1, true)
		await expect(DSPoFff7s.transfer.call(addressRnGiH8H, uintTMbx7HG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPoFff7s = await DSP.new({from: accounts[0]});
		const uintVD20jxV = BigInt("1534")
		const addressGwwajAD = accounts[3]
		const addressODYox0 = accounts[3]
		const uintyBxDxg = BigInt("1570")
		const addressRhNUvV = accounts[4]
		const boolwnSxC1 = await DSPoFff7s.paused.call({from: accounts[2]});
		await DSPoFff7s.onlyNewOwner.call({from: accounts[3]});
		const boolVKPGbI = await DSPoFff7s.transferFrom.call(addressODYox0, addressGwwajAD, uintVD20jxV, {from: accounts[5]});
		const boolam2GaFG = await DSPoFff7s.mint.call(addressRhNUvV, uintyBxDxg, {from: accounts[3]});

		assert.equal(boolwnSxC1, false)
		await expect(DSPoFff7s.onlyNewOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPoFff7s = await DSP.new({from: accounts[0]});
		const address1noHWG = accounts[0]
		const addresskdQhZo = accounts[5]
		const uintMuDTn2i = BigInt("492")
		const addressv9Q5NKS = accounts[0]
		const uintmwmvz2x = BigInt("1534")
		const addressp5UrtMt = accounts[3]
		const addressfs5LTtN = accounts[4]
		const uint256Cy7aOLC = await DSPoFff7s.allowance.call(addresskdQhZo, address1noHWG, {from: accounts[1]});
		const boolyZaBXTY = await DSPoFff7s.approve.call(addressv9Q5NKS, uintMuDTn2i, {from: "0x0000000000000000000000000000000000000001"});
		const boolVKPGbI = await DSPoFff7s.transferFrom.call(addressfs5LTtN, addressp5UrtMt, uintmwmvz2x, {from: accounts[5]});

		assert.equal(boolyZaBXTY, true)
		assert.equal(uint256Cy7aOLC, BigInt("0"))
		await expect(DSPoFff7s.transferFrom.call(addressfs5LTtN, addressp5UrtMt, uintmwmvz2x, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPtSV40eY = await DSP.new({from: accounts[3]});
		const addressraSaQyb = accounts[3]
		const addressCsgBzbN = accounts[1]
		const uintF2bi7Ph = BigInt("430")
		const addressnYdsA2G = accounts[3]
		const boolMRObpH8 = await DSPtSV40eY.freezeAccount.call(addressraSaQyb, {from: accounts[3]});
		const uint256ykJJoz = await DSPtSV40eY.balanceOf.call(addressCsgBzbN, {from: accounts[4]});
		const boolAHKeekc = await DSPtSV40eY.transfer.call(addressnYdsA2G, uintF2bi7Ph, {from: accounts[3]});
		await DSPtSV40eY.f.call({from: accounts[5]});

		assert.equal(boolAHKeekc, true)
		assert.equal(boolMRObpH8, true)
		assert.equal(uint256ykJJoz, BigInt("0"))
		await expect(DSPtSV40eY.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPfgOYlOk = await DSP.new({from: accounts[1]});
		const addresse6erH1t = accounts[1]
		const addressY98f8nu = accounts[5]
		const addressL1qn4fb = accounts[4]
		const addressIZwE4cj = accounts[3]
		const uint8dnHrYOL = await DSPfgOYlOk.decimals.call({from: accounts[5]});
		const booloWY0umU = await DSPfgOYlOk.isOwner.call(addresse6erH1t, {from: accounts[3]});
		await DSPfgOYlOk.whenPaused.call({from: accounts[0]});
		const addressVBeyOwo = await DSPfgOYlOk.addPauser.call(addressY98f8nu, {from: accounts[4]});
		const addressim9IDk = await DSPfgOYlOk.upgradeTo.call(addressL1qn4fb, {from: accounts[4]});
		const addressUTMTFxz = await DSPfgOYlOk.notFrozen.call(addressIZwE4cj, {from: accounts[5]});

		assert.equal(booloWY0umU, true)
		assert.equal(uint8dnHrYOL, BigInt("18"))
		await expect(DSPfgOYlOk.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPoFff7s = await DSP.new({from: accounts[0]});
		const uintlFF8Mdf = BigInt("936")
		const uintCg11XQD = BigInt("1364")
		const addressZFfUMS = accounts[2]
		const uintzaJaxeS = BigInt("1388")
		const addressXvp6g0j = accounts[1]
		const addressqMV5kvo = accounts[3]
		const boolHdmlZ3w = await DSPoFff7s.transferWithLock.call(addressZFfUMS, uintCg11XQD, uintlFF8Mdf, {from: accounts[0]});
		const booleKaDcd1 = await DSPoFff7s.transfer.call(addressXvp6g0j, uintzaJaxeS, {from: accounts[0]});
		const boolslm8As = await DSPoFff7s.isOwner.call(addressqMV5kvo, {from: accounts[5]});

		assert.equal(boolHdmlZ3w, true)
		assert.equal(booleKaDcd1, true)
		assert.equal(boolslm8As, false)
	});

	it('test for DSP', async () => {
		const DSPFeoos5b = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressm670Js = accounts[4]
		const addressQTAXo7 = "0x0000000000000000000000000000000000000001"
		const addresst4cgucj = accounts[0]
		const addresshU7LHGv = accounts[1]
		const addressoagcNjX = accounts[0]
		const addresswA81kEt = await DSPFeoos5b.addPauser.call(addressm670Js, {from: accounts[3]});
		const addressqUZBp4 = await DSPFeoos5b.transferOwnership.call(addressQTAXo7, {from: accounts[0]});
		const boolutq1dVE = await DSPFeoos5b.unfreezeAccount.call(addresst4cgucj, {from: accounts[3]});
		const uint256uwCeP2 = await DSPFeoos5b.allowance.call(addressoagcNjX, addresshU7LHGv, {from: accounts[2]});
		const stringBOTAFxi = await DSPFeoos5b.name.call({from: accounts[0]});
		const uint256Vn7IMGy = await DSPFeoos5b.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for DSP', async () => {
		const DSPoFff7s = await DSP.new({from: accounts[0]});
		const uintbQbO0Ld = BigInt("1671")
		const addressYYyNuQu = accounts[1]
		const uintBuNIzfN = BigInt("1534")
		const addresssgBPSRu = accounts[3]
		const addressCOSlrUd = accounts[3]
		const uintGGq33TT = BigInt("400")
		const uintLan3sra = BigInt("1827")
		const addressBE28l2J = "0x0000000000000000000000000000000000000001"
		const boolPBNVGOK = await DSPoFff7s.burnFrombyOwner.call(addressYYyNuQu, uintbQbO0Ld, {from: accounts[0]});
		const uint8vqyctT = await DSPoFff7s.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolVKPGbI = await DSPoFff7s.transferFrom.call(addressCOSlrUd, addresssgBPSRu, uintBuNIzfN, {from: accounts[5]});
		const boolBBe3wM = await DSPoFff7s.transferWithLock.call(addressBE28l2J, uintLan3sra, uintGGq33TT, {from: accounts[4]});

		await expect(DSPoFff7s.burnFrombyOwner.call(addressYYyNuQu, uintbQbO0Ld, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPoFff7s = await DSP.new({from: accounts[0]});
		const uintHNwxjsu = BigInt("1818")
		const uintoejG9ex = BigInt("113")
		const addressIx1LjZb = accounts[3]
		const boolczVKmoi = await DSPoFff7s.lock.call(addressIx1LjZb, uintoejG9ex, uintHNwxjsu, {from: accounts[0]});

		await expect(DSPoFff7s.lock.call(addressIx1LjZb, uintoejG9ex, uintHNwxjsu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPoFff7s = await DSP.new({from: accounts[0]});
		const addressEbyeYFr = accounts[1]
		const uintfq1b5ep = BigInt("1388")
		const addresscXXPOEb = accounts[0]
		const uint256HBO5Ps = await DSPoFff7s.balanceOf.call(addressEbyeYFr, {from: accounts[2]});
		await DSPoFff7s.renouncePauser.call({from: accounts[0]});
		await DSPoFff7s.whenPaused.call({from: accounts[2]});
		const booleKaDcd1 = await DSPoFff7s.transfer.call(addresscXXPOEb, uintfq1b5ep, {from: accounts[0]});

		assert.equal(uint256HBO5Ps, BigInt("0"))
		await expect(DSPoFff7s.renouncePauser.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPoFff7s = await DSP.new({from: accounts[0]});
		const uintmlYfo7h = BigInt("1336")
		const addressCRFbLbm = accounts[0]
		const uint256lWEZH9M = await DSPoFff7s.totalSupply.call({from: accounts[3]});
		await DSPoFff7s.pause.call({from: accounts[0]});
		const booleKaDcd1 = await DSPoFff7s.transfer.call(addressCRFbLbm, uintmlYfo7h, {from: accounts[0]});

		assert.equal(uint256lWEZH9M, BigInt("100000000000000000000000000000"))
		await expect(DSPoFff7s.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPoFff7s = await DSP.new({from: accounts[0]});
		const addressNXcZpPb = accounts[0]
		const addressu4h86OD = accounts[2]
		const uintavyX1Xf = BigInt("1388")
		const addressqeVPh7 = accounts[1]
		const uint256HBO5Ps = await DSPoFff7s.balanceOf.call(addressNXcZpPb, {from: accounts[2]});
		const addressMjdW341 = await DSPoFff7s.removePauser.call(addressu4h86OD, {from: accounts[0]});
		const booleKaDcd1 = await DSPoFff7s.transfer.call(addressqeVPh7, uintavyX1Xf, {from: accounts[0]});

		assert.equal(uint256HBO5Ps, BigInt("100000000000000000000000000000"))
		await expect(DSPoFff7s.removePauser.call(addressu4h86OD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPoFff7s = await DSP.new({from: accounts[0]});
		const addresspkxLg7 = accounts[3]
		const uinta64Slda = BigInt("1534")
		const addressnB2sIwX = accounts[3]
		const addressHeVvBR3 = accounts[3]
		const addressWZhAKx = accounts[3]
		const addressrnAd5dA = await DSPoFff7s.transferOwnership.call(addresspkxLg7, {from: accounts[0]});
		const boolVKPGbI = await DSPoFff7s.transferFrom.call(addressHeVvBR3, addressnB2sIwX, uinta64Slda, {from: accounts[5]});
		const boolXG1tRbk = await DSPoFff7s.isOwner.call(addressWZhAKx, {from: accounts[2]});

		await expect(DSPoFff7s.transferFrom.call(addressHeVvBR3, addressnB2sIwX, uinta64Slda, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPoFff7s = await DSP.new({from: accounts[0]});
		const uintZafgUI1 = BigInt("1424")
		const addressHa4B1P1 = accounts[0]
		const uintu5NnuX4 = BigInt("513")
		const addressHvD4oRA = accounts[3]
		const booleKaDcd1 = await DSPoFff7s.transfer.call(addressHa4B1P1, uintZafgUI1, {from: accounts[0]});
		const boolfhZeVnu = await DSPoFff7s.unlock.call(addressHvD4oRA, uintu5NnuX4, {from: accounts[0]});

		assert.equal(booleKaDcd1, true)
		await expect(DSPoFff7s.unlock.call(addressHvD4oRA, uintu5NnuX4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})