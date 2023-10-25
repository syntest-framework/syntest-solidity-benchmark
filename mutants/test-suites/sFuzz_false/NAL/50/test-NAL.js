const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALsGem5uy = await NAL.new({from: accounts[4]});
		const uintgQW9ZXh = BigInt("1888")
		const addressO6lvqu8 = "0x0000000000000000000000000000000000000001"
		const uintT4hOy6E = BigInt("857")
		const addresswnpr8xS = accounts[3]
//		const booliG056YG = await NALsGem5uy.transfer.call(addressO6lvqu8, uintgQW9ZXh, {from: accounts[2]});
//		const boolUzMfjyl = await NALsGem5uy.approve.call(addresswnpr8xS, uintT4hOy6E, {from: accounts[0]});

		await expect(NALsGem5uy.transfer.call(addressO6lvqu8, uintgQW9ZXh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZaYiMsz = await NAL.new({from: accounts[0]});
		const addressNRK6h7e = accounts[4]
		const uintGkMF3zj = BigInt("1663")
		const addressRnwTnQ = accounts[4]
		const uinthjNI2aO = BigInt("951")
		const uints1FTiDg = BigInt("727")
		const addresstpgAx8 = "0x0000000000000000000000000000000000000001"
//		await NALZaYiMsz.whenNotPaused.call({from: accounts[1]});
//		const uint256KBTXX1 = await NALZaYiMsz.balanceOf.call(addressNRK6h7e, {from: accounts[4]});
//		const boolABV4Gyw = await NALZaYiMsz.transfer.call(addressRnwTnQ, uintGkMF3zj, {from: accounts[0]});
//		const boolKYjqcb = await NALZaYiMsz.lock.call(addresstpgAx8, uints1FTiDg, uinthjNI2aO, {from: accounts[4]});

		await expect(NALZaYiMsz.whenNotPaused.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const stringLY6r6iZ = "zrW7hok4XYY"
		const stringsiT62hS = "VYCmqndaeNiCdEd198jTLJrUognwTAME"
		const uintBbLw9a8 = BigInt("123")
		const NALP4HwDTe = await NAL.new(stringLY6r6iZ, stringsiT62hS, uintBbLw9a8, {from: accounts[4]});
		const uintn1vcKJp = BigInt("200")
		const addressdBerCyf = accounts[2]
		const uinthH14wJu = BigInt("1543")
		const addressDkbaMWI = accounts[4]
		await NALP4HwDTe.unpause.call({from: accounts[3]});
		const boolad2L85d = await NALP4HwDTe.transfer.call(addressdBerCyf, uintn1vcKJp, {from: accounts[1]});
		const uint8iJcXvA = await NALP4HwDTe.decimals.call({from: accounts[4]});
		const boolR3kXzg = await NALP4HwDTe.approve.call(addressDkbaMWI, uinthH14wJu, {from: accounts[4]});
		await NALP4HwDTe.whenNotPaused.call({from: accounts[3]});
	});

	it('test for NAL', async () => {
		const NAL0xClqK = await NAL.new({from: accounts[1]});
		const uintzNotRZl = BigInt("1656")
		const uintH0IZjuA = BigInt("1615")
		const addressXPP04Hc = accounts[0]
		const addressfdME5L6 = accounts[4]
//		await NAL0xClqK.unpause.call({from: accounts[3]});
//		const boolQ17IJFy = await NAL0xClqK.transferWithLock.call(addressXPP04Hc, uintH0IZjuA, uintzNotRZl, {from: accounts[3]});
//		const addressl3teDOw = await NAL0xClqK.notFrozen.call(addressfdME5L6, {from: accounts[4]});

		await expect(NAL0xClqK.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALsOUarjt = await NAL.new({from: accounts[5]});
		const uintM0VVOUS = BigInt("212")
		const addresszkI6eXb = accounts[1]
//		await NALsOUarjt.renounceAdmin.call({from: accounts[4]});
//		const stringJRLli8r = await NALsOUarjt.name.call({from: accounts[1]});
//		const boolVdjS8Sz = await NALsOUarjt.transfer.call(addresszkI6eXb, uintM0VVOUS, {from: accounts[4]});

		await expect(NALsOUarjt.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALMvWnZ7N = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const addressyeK8kIH = accounts[0]
		const addressxvadbMO = accounts[5]
		const uinthPYVPl = BigInt("1519")
		const addresszGKUKik = accounts[1]
		const uintZsYmSS6 = BigInt("1695")
		const addressadAdwe9 = accounts[1]
		const uint256Jy7wZ5L = await NALMvWnZ7N.allowance.call(addressxvadbMO, addressyeK8kIH, {from: "0x0000000000000000000000000000000000000001"});
		await NALMvWnZ7N.whenPaused.call({from: accounts[0]});
		const boolmd1kqKh = await NALMvWnZ7N.transfer.call(addresszGKUKik, uinthPYVPl, {from: accounts[2]});
		await NALMvWnZ7N.unpause.call({from: accounts[1]});
		const boolQAgWajU = await NALMvWnZ7N.decreaseAllowance.call(addressadAdwe9, uintZsYmSS6, {from: accounts[4]});
	});

	it('test for NAL', async () => {
		const NALRzq465A = await NAL.new({from: accounts[5]});
		const uintCixsZcW = BigInt("814")
		const uintW1xo5rR = BigInt("1007")
		const addressM3up6TK = accounts[0]
		const string3oPnaZ = await NALRzq465A.name.call({from: accounts[4]});
//		await NALRzq465A.whenPaused.call({from: accounts[3]});
//		const boolp5IZqTk = await NALRzq465A.transferWithLock.call(addressM3up6TK, uintW1xo5rR, uintCixsZcW, {from: accounts[0]});

		assert.equal(string3oPnaZ, "Personal Token")
		await expect(NALRzq465A.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALsGem5uy = await NAL.new({from: accounts[4]});
		const uintcSShpsg = BigInt("857")
		const addresszt1kZHK = accounts[3]
		const boolUzMfjyl = await NALsGem5uy.approve.call(addresszt1kZHK, uintcSShpsg, {from: accounts[0]});

		assert.equal(boolUzMfjyl, true)
	});

	it('test for NAL', async () => {
		const NALsGem5uy = await NAL.new({from: accounts[4]});
		const uintQcZ2qyN = BigInt("459")
		const uintaMhfJR5 = BigInt("1258")
		const uintJimQKOH = BigInt("1888")
		const addressZwM4ASu = "0x0000000000000000000000000000000000000001"
		const uintAj7ifc5 = BigInt("853")
		const addressqnJ3JIz = accounts[3]
//		const uint256HPvufyy = await NALsGem5uy.burn.call(uintQcZ2qyN, {from: accounts[0]});
//		const uint256GzvDgyb = await NALsGem5uy.burn.call(uintaMhfJR5, {from: accounts[2]});
//		const booliG056YG = await NALsGem5uy.transfer.call(addressZwM4ASu, uintJimQKOH, {from: accounts[2]});
//		const boolUzMfjyl = await NALsGem5uy.approve.call(addressqnJ3JIz, uintAj7ifc5, {from: accounts[0]});

		await expect(NALsGem5uy.burn.call(uintQcZ2qyN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALsGem5uy = await NAL.new({from: accounts[4]});
		const uintrHXMrT = BigInt("1888")
		const addressSCvwWw = "0x0000000000000000000000000000000000000002"
//		await NALsGem5uy.pause.call({from: accounts[4]});
//		const booliG056YG = await NALsGem5uy.transfer.call(addressSCvwWw, uintrHXMrT, {from: accounts[2]});

		await expect(NALsGem5uy.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALsGem5uy = await NAL.new({from: accounts[4]});
		const uintX3ZaDiS = BigInt("1919")
		const addressP30uQXs = accounts[3]
		const uintd0yyqzi = BigInt("1876")
		const addresslPivPqs = "0x0000000000000000000000000000000000000001"
		const uint256vdeTwKA = await NALsGem5uy.totalSupply.call({from: accounts[0]});
		const boolZAPjRCS = await NALsGem5uy.increaseAllowance.call(addressP30uQXs, uintX3ZaDiS, {from: accounts[3]});
//		const booliG056YG = await NALsGem5uy.transfer.call(addresslPivPqs, uintd0yyqzi, {from: accounts[2]});

		assert.equal(boolZAPjRCS, true)
		assert.equal(uint256vdeTwKA, BigInt("2000000000000000000000000000"))
		await expect(NALsGem5uy.transfer.call(addresslPivPqs, uintd0yyqzi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZYK54Mj = await NAL.new({from: accounts[2]});
		const uinteFPgk2 = BigInt("1875")
		const addressxqXH9nQ = accounts[1]
		const addressdNHGrGl = accounts[3]
		const uintwbAvUsP = BigInt("1629")
		const addressB3dTimZ = accounts[4]
		const addressNZJR8e8 = accounts[3]
		const addressb3ksOUK = accounts[2]
//		const boolCGF33k5 = await NALZYK54Mj.transferFrom.call(addressdNHGrGl, addressxqXH9nQ, uinteFPgk2, {from: accounts[0]});
//		const addressA48ei6v = await NALZYK54Mj.burnFrom.call(addressB3dTimZ, uintwbAvUsP, {from: accounts[1]});
//		const uint256mPfhF25 = await NALZYK54Mj.allowance.call(addressb3ksOUK, addressNZJR8e8, {from: accounts[1]});

		await expect(NALZYK54Mj.transferFrom.call(addressdNHGrGl, addressxqXH9nQ, uinteFPgk2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZYK54Mj = await NAL.new({from: accounts[2]});
		const uintK4nX43a = BigInt("1645")
		const addresswJCG9x = accounts[4]
		const addressXLKm6cc = accounts[3]
		const address9sfgH8 = accounts[2]
//		const addressA48ei6v = await NALZYK54Mj.burnFrom.call(addresswJCG9x, uintK4nX43a, {from: accounts[1]});
//		const uint256mPfhF25 = await NALZYK54Mj.allowance.call(address9sfgH8, addressXLKm6cc, {from: accounts[1]});

		await expect(NALZYK54Mj.burnFrom.call(addresswJCG9x, uintK4nX43a, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALsGem5uy = await NAL.new({from: accounts[4]});
		const uintz6y6RDp = BigInt("99")
		const uintSzBzXhd = BigInt("1380")
		const addressLG1yRyp = accounts[1]
		const uintZWIti2 = BigInt("395")
		const uintEdXlcv = BigInt("1888")
		const addresspT2OkXT = "0x0000000000000000000000000000000000000002"
		const boola5wBK6n = await NALsGem5uy.transferWithLock.call(addressLG1yRyp, uintSzBzXhd, uintz6y6RDp, {from: accounts[4]});
//		const uint256r41dneN = await NALsGem5uy.burn.call(uintZWIti2, {from: accounts[0]});
//		const booliG056YG = await NALsGem5uy.transfer.call(addresspT2OkXT, uintEdXlcv, {from: accounts[2]});

		assert.equal(boola5wBK6n, true)
		await expect(NALsGem5uy.burn.call(uintZWIti2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALsGem5uy = await NAL.new({from: accounts[4]});
		const addressmwUGlz9 = accounts[2]
		const uintZzL5KXp = BigInt("1888")
		const addressIMbULIX = "0x0000000000000000000000000000000000000000"
		const boolBuja8L4 = await NALsGem5uy.freezeAccount.call(addressmwUGlz9, {from: accounts[4]});
//		const booliG056YG = await NALsGem5uy.transfer.call(addressIMbULIX, uintZzL5KXp, {from: accounts[2]});

		assert.equal(boolBuja8L4, true)
		await expect(NALsGem5uy.transfer.call(addressIMbULIX, uintZzL5KXp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALsGem5uy = await NAL.new({from: accounts[4]});
		const addressCo9MkYm = accounts[4]
		const addressbirIjyM = accounts[0]
		const uintkchwG0D = BigInt("1895")
		const addressPdcj0a = "0x0000000000000000000000000000000000000001"
//		const addressXONoVpd = await NALsGem5uy.addAdmin.call(addressCo9MkYm, {from: accounts[4]});
//		const addresshnaqmdp = await NALsGem5uy.addAdmin.call(addressbirIjyM, {from: accounts[3]});
//		const booliG056YG = await NALsGem5uy.transfer.call(addressPdcj0a, uintkchwG0D, {from: accounts[2]});

		await expect(NALsGem5uy.addAdmin.call(addressCo9MkYm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZYK54Mj = await NAL.new({from: accounts[2]});
		const addressHPDYjhp = accounts[4]
		const addressB8kgXD1 = accounts[1]
		const uintxqZWlZK = BigInt("1875")
		const addressHdGaU0Y = accounts[1]
		const addressV07nJDT = accounts[4]
		const uint256OGb2J82 = await NALZYK54Mj.balanceOf.call(addressHPDYjhp, {from: accounts[2]});
		const uint256HLRrX6o = await NALZYK54Mj.balanceOf.call(addressB8kgXD1, {from: accounts[4]});
//		const boolCGF33k5 = await NALZYK54Mj.transferFrom.call(addressV07nJDT, addressHdGaU0Y, uintxqZWlZK, {from: accounts[0]});

		assert.equal(uint256HLRrX6o, BigInt("0"))
		assert.equal(uint256OGb2J82, BigInt("0"))
		await expect(NALZYK54Mj.transferFrom.call(addressV07nJDT, addressHdGaU0Y, uintxqZWlZK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALsGem5uy = await NAL.new({from: accounts[4]});
		const uintaV6wWJP = BigInt("1596")
		const addresswJZiSq4 = accounts[2]
		const uintBjsOl0e = BigInt("1888")
		const addresszZOfu4H = "0x0000000000000000000000000000000000000002"
//		const boolxQxv9U = await NALsGem5uy.decreaseAllowance.call(addresswJZiSq4, uintaV6wWJP, {from: accounts[2]});
//		const booliG056YG = await NALsGem5uy.transfer.call(addresszZOfu4H, uintBjsOl0e, {from: accounts[2]});

		await expect(NALsGem5uy.decreaseAllowance.call(addresswJZiSq4, uintaV6wWJP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZYK54Mj = await NAL.new({from: accounts[2]});
		const addressZZsCRp3 = accounts[1]
		const uintDmPXf6l = BigInt("372")
		const addressiv4gLkV = accounts[2]
		const uintD2budIu = BigInt("1875")
		const addressDKdK738 = accounts[1]
		const addressVZMIWBE = accounts[5]
		const stringmvUpJt5 = await NALZYK54Mj.symbol.call({from: accounts[3]});
		const uint256iYfCI5e = await NALZYK54Mj.balanceOf.call(addressZZsCRp3, {from: accounts[5]});
//		const boolP5GRV3E = await NALZYK54Mj.transfer.call(addressiv4gLkV, uintDmPXf6l, {from: accounts[4]});
//		const boolCGF33k5 = await NALZYK54Mj.transferFrom.call(addressVZMIWBE, addressDKdK738, uintD2budIu, {from: accounts[0]});

		assert.equal(stringmvUpJt5, "NAL")
		assert.equal(uint256iYfCI5e, BigInt("0"))
		await expect(NALZYK54Mj.transfer.call(addressiv4gLkV, uintDmPXf6l, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZYK54Mj = await NAL.new({from: accounts[2]});
		const addressIViMwYL = accounts[3]
		const addressH5uI5oY = "0x0000000000000000000000000000000000000001"
		const address82GD37 = accounts[1]
		const uintLgSJZOK = BigInt("1875")
		const addressyYKFPuw = accounts[3]
		const addressTNGU1wi = accounts[4]
		const uint256Ybxfoz6 = await NALZYK54Mj.balanceOf.call(addressIViMwYL, {from: accounts[0]});
		const uint256JozM5Qc = await NALZYK54Mj.allowance.call(address82GD37, addressH5uI5oY, {from: accounts[0]});
//		const boolCGF33k5 = await NALZYK54Mj.transferFrom.call(addressTNGU1wi, addressyYKFPuw, uintLgSJZOK, {from: accounts[0]});

		assert.equal(uint256JozM5Qc, BigInt("0"))
		assert.equal(uint256Ybxfoz6, BigInt("0"))
		await expect(NALZYK54Mj.transferFrom.call(addressTNGU1wi, addressyYKFPuw, uintLgSJZOK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZYK54Mj = await NAL.new({from: accounts[2]});
		const addressWJfijPO = accounts[1]
		const uintjO2x6i0 = BigInt("1875")
		const addressV46zmjr = accounts[2]
		const addressZ4wmHl = accounts[4]
		const boolGncbcBE = await NALZYK54Mj.isOwner.call(addressWJfijPO, {from: accounts[2]});
		const uint8RgVyyAf = await NALZYK54Mj.decimals.call({from: accounts[4]});
//		const boolCGF33k5 = await NALZYK54Mj.transferFrom.call(addressZ4wmHl, addressV46zmjr, uintjO2x6i0, {from: accounts[0]});

		assert.equal(boolGncbcBE, false)
		assert.equal(uint8RgVyyAf, BigInt("18"))
		await expect(NALZYK54Mj.transferFrom.call(addressZ4wmHl, addressV46zmjr, uintjO2x6i0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALOYS8YNn = await NAL.new({from: accounts[1]});
		const addressofe4JN = "0x0000000000000000000000000000000000000001"
		const uintAHkvEyL = BigInt("1544")
		const addressQaCnCO7 = accounts[0]
		const addresstB3nc9d = accounts[2]
		const uintmdR2agl = BigInt("1840")
		const uintYTSnar4 = BigInt("1626")
		const addresstXa6mlv = accounts[3]
		const boolNt9NbGo = await NALOYS8YNn.paused.call({from: accounts[5]});
//		await NALOYS8YNn.unpause.call({from: accounts[1]});
//		const uint256ThRYLxg = await NALOYS8YNn.balanceOf.call(addressofe4JN, {from: accounts[1]});
//		await NALOYS8YNn.unpause.call({from: accounts[0]});
//		const boolStvt3FH = await NALOYS8YNn.transferFrom.call(addresstB3nc9d, addressQaCnCO7, uintAHkvEyL, {from: accounts[2]});
//		const boolsNfrREZ = await NALOYS8YNn.lock.call(addresstXa6mlv, uintYTSnar4, uintmdR2agl, {from: accounts[4]});

		assert.equal(boolNt9NbGo, false)
		await expect(NALOYS8YNn.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZYK54Mj = await NAL.new({from: accounts[2]});
		const uintCDCSpBs = BigInt("190")
		const uintbhklord = BigInt("1497")
		const addressX6WiMTk = accounts[1]
		const uintmx0wq8 = BigInt("1866")
		const addressvxNYlH6 = accounts[2]
		const addressmGjSyTO = accounts[4]
//		const booli7ebhgx = await NALZYK54Mj.lock.call(addressX6WiMTk, uintbhklord, uintCDCSpBs, {from: accounts[2]});
//		const boolCGF33k5 = await NALZYK54Mj.transferFrom.call(addressmGjSyTO, addressvxNYlH6, uintmx0wq8, {from: accounts[0]});

		await expect(NALZYK54Mj.lock.call(addressX6WiMTk, uintbhklord, uintCDCSpBs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALsGem5uy = await NAL.new({from: accounts[4]});
		const addressayKstOp = accounts[0]
		const uintSVXXkzx = BigInt("1888")
		const addressBNy2Nmp = "0x0000000000000000000000000000000000000000"
		const addressSrHMCxq = await NALsGem5uy.transferOwnership.call(addressayKstOp, {from: accounts[4]});
//		const booliG056YG = await NALsGem5uy.transfer.call(addressBNy2Nmp, uintSVXXkzx, {from: accounts[2]});

		await expect(NALsGem5uy.transfer.call(addressBNy2Nmp, uintSVXXkzx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALg95oLh = await NAL.new({from: accounts[4]});
		const addressP9LDLJ8 = accounts[4]
		const addressl4hLlOs = accounts[4]
		const uintiiGNzcL = BigInt("1314")
		const addressa2v0i2O = accounts[3]
		const addressH9q6s2j = accounts[2]
//		const boolfxxqcl2 = await NALg95oLh.unfreezeAccount.call(addressP9LDLJ8, {from: accounts[4]});
//		const addressfQUo85w = await NALg95oLh.upgradeTo.call(addressl4hLlOs, {from: "0x0000000000000000000000000000000000000001"});
//		const boolqoZoVGx = await NALg95oLh.transferFrom.call(addressH9q6s2j, addressa2v0i2O, uintiiGNzcL, {from: accounts[1]});

		await expect(NALg95oLh.unfreezeAccount.call(addressP9LDLJ8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZYK54Mj = await NAL.new({from: accounts[2]});
		const addresslewI33f = accounts[1]
		const uint0CosM7 = BigInt("1184")
		const addresszMLoYy = accounts[5]
		const uintCDXsyTM = BigInt("1875")
		const addressax4Plu8 = accounts[1]
		const addresssm4ij8E = accounts[4]
//		const addressJTHWtGr = await NALZYK54Mj.removeAdmin.call(addresslewI33f, {from: accounts[2]});
//		const boolsSZH33v = await NALZYK54Mj.transfer.call(addresszMLoYy, uint0CosM7, {from: accounts[1]});
//		const boolCGF33k5 = await NALZYK54Mj.transferFrom.call(addresssm4ij8E, addressax4Plu8, uintCDXsyTM, {from: accounts[0]});

		await expect(NALZYK54Mj.removeAdmin.call(addresslewI33f, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALQKEckD4 = await NAL.new({from: accounts[0]});
		const addressZLXuiXg = accounts[2]
		const addresscIhftAf = await NALQKEckD4.upgradeTo.call(addressZLXuiXg, {from: accounts[0]});
//		await NALQKEckD4.onlyOwner.call({from: accounts[5]});
//		const boolo5H76RA = await NALQKEckD4.paused.call({from: accounts[2]});
//		await NALQKEckD4.renounceAdmin.call({from: accounts[2]});
//		await NALQKEckD4.onlyAdmin.call({from: accounts[2]});

		await expect(NALQKEckD4.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZYK54Mj = await NAL.new({from: accounts[2]});
		const addressGAv02j2 = accounts[2]
		const uintMvQeBYR = BigInt("1885")
		const addressLrGHgmA = accounts[2]
		const addressGKjYL8R = accounts[4]
		const boolRqWy0qv = await NALZYK54Mj.isOwner.call(addressGAv02j2, {from: accounts[0]});
//		const boolCGF33k5 = await NALZYK54Mj.transferFrom.call(addressGKjYL8R, addressLrGHgmA, uintMvQeBYR, {from: accounts[0]});
//		const uint256xSW4GSO = await NALZYK54Mj.totalSupply.call({from: accounts[2]});

		assert.equal(boolRqWy0qv, true)
		await expect(NALZYK54Mj.transferFrom.call(addressGKjYL8R, addressLrGHgmA, uintMvQeBYR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})