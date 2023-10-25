const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisO4jzbzG = await Ledgis.new({from: accounts[5]});
		const uint4tuZwP = BigInt("704")
		const addressXXMidAv = accounts[2]
//		await LedgisO4jzbzG.onlyOwner.call({from: accounts[0]});
//		const boolGZ71Jzn = await LedgisO4jzbzG.mint.call(addressXXMidAv, uint4tuZwP, {from: accounts[2]});

		await expect(LedgisO4jzbzG.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisc0apxwI = await Ledgis.new({from: accounts[0]});
		const uintvdHWv5d = BigInt("346")
		const addressQL3QNN4 = accounts[3]
		const uintlBudeRs = BigInt("1727")
		const addressNDrbzK0 = accounts[2]
		const uintd26RvS1 = BigInt("943")
		const addressAr4Bkcx = accounts[3]
		const boolt7VTM2r = await Ledgisc0apxwI.approve.call(addressQL3QNN4, uintvdHWv5d, {from: accounts[1]});
//		const boolGy4nmsg = await Ledgisc0apxwI.decreaseAllowance.call(addressNDrbzK0, uintlBudeRs, {from: accounts[4]});
//		const addressLxlix4L = await Ledgisc0apxwI.unlock.call(addressAr4Bkcx, uintd26RvS1, {from: accounts[0]});

		assert.equal(boolt7VTM2r, true)
		await expect(Ledgisc0apxwI.decreaseAllowance.call(addressNDrbzK0, uintlBudeRs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJ10a1Vo = await Ledgis.new({from: accounts[2]});
		const addressQMNYSfC = accounts[1]
		const uintLonlKEy = BigInt("1697")
		const addressj0l0byo = accounts[3]
		const uint256rCagYLu = await LedgisJ10a1Vo.balanceOf.call(addressQMNYSfC, {from: accounts[5]});
//		await LedgisJ10a1Vo.whenNotPaused.call({from: accounts[2]});
//		const address4okhxs = await LedgisJ10a1Vo.unlock.call(addressj0l0byo, uintLonlKEy, {from: accounts[2]});

		assert.equal(uint256rCagYLu, BigInt("0"))
		await expect(LedgisJ10a1Vo.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskBW8CFv = await Ledgis.new({from: accounts[0]});
		const uintudmHxWK = BigInt("488")
		const uintHPSJzz2 = BigInt("1832")
		const addresswuyOiB1 = accounts[2]
//		const addresslQvwfTy = await LedgiskBW8CFv.lock.call(addresswuyOiB1, uintHPSJzz2, uintudmHxWK, {from: accounts[2]});
//		await LedgiskBW8CFv.unpause.call({from: accounts[4]});
//		await LedgiskBW8CFv.whenPaused.call({from: accounts[3]});

		await expect(LedgiskBW8CFv.lock.call(addresswuyOiB1, uintHPSJzz2, uintudmHxWK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis0MonEV = await Ledgis.new({from: accounts[4]});
		const addressNR1U8Vb = accounts[4]
		const addressPtsO2qV = "0x0000000000000000000000000000000000000001"
		const uinth1ctFJT = BigInt("1290")
		const addressqUKTsgb = accounts[1]
		const uintCwFDOEE = BigInt("1062")
		const addressivfHbcj = accounts[5]
		const uintDOI1aFU = BigInt("382")
		const uintCEG71av = BigInt("2024")
		const addressyFNWNO = accounts[3]
		const uintXGHCzmW = BigInt("2017")
		const addressBzIBiau = accounts[2]
		const uint256z981B8q = await Ledgis0MonEV.allowance.call(addressPtsO2qV, addressNR1U8Vb, {from: accounts[2]});
//		await Ledgis0MonEV.renounceOwnership.call({from: accounts[2]});
//		const addressLmIDC6X = await Ledgis0MonEV.unlock.call(addressqUKTsgb, uinth1ctFJT, {from: accounts[0]});
//		const boola8OlMK5 = await Ledgis0MonEV.increaseAllowance.call(addressivfHbcj, uintCwFDOEE, {from: accounts[5]});
//		const addressmP0Nfzh = await Ledgis0MonEV.lockAfter.call(addressyFNWNO, uintCEG71av, uintDOI1aFU, {from: accounts[5]});
//		const addressIdN5alG = await Ledgis0MonEV.burn.call(addressBzIBiau, uintXGHCzmW, {from: accounts[4]});

		assert.equal(uint256z981B8q, BigInt("0"))
		await expect(Ledgis0MonEV.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJ10a1Vo = await Ledgis.new({from: accounts[2]});
		const addressfo3QRo3 = accounts[1]
		const uintpVBvIML = BigInt("1697")
		const addressqhGY8Gj = accounts[3]
		const uint256rCagYLu = await LedgisJ10a1Vo.balanceOf.call(addressfo3QRo3, {from: accounts[5]});
//		const address4okhxs = await LedgisJ10a1Vo.unlock.call(addressqhGY8Gj, uintpVBvIML, {from: accounts[2]});

		assert.equal(uint256rCagYLu, BigInt("0"))
		await expect(LedgisJ10a1Vo.unlock.call(addressqhGY8Gj, uintpVBvIML, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisO4jzbzG = await Ledgis.new({from: accounts[5]});
		const uint6p5S2T = BigInt("1449")
		const addressLM6d4W = accounts[0]
		const uintQem4GSr = BigInt("704")
		const addresslE5TmWV = accounts[2]
//		const boolWGYjGOk = await LedgisO4jzbzG.transfer.call(addressLM6d4W, uint6p5S2T, {from: accounts[0]});
//		await LedgisO4jzbzG.onlyOwner.call({from: accounts[0]});
//		const boolGZ71Jzn = await LedgisO4jzbzG.mint.call(addresslE5TmWV, uintQem4GSr, {from: accounts[2]});

		await expect(LedgisO4jzbzG.transfer.call(addressLM6d4W, uint6p5S2T, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisO4jzbzG = await Ledgis.new({from: accounts[5]});
		const uintb5hOX8 = BigInt("1848")
		const addressypZwJBN = accounts[2]
		const addressOC1OM7V = accounts[5]
		const uintp8K1w9 = BigInt("1449")
		const addressyppqNB0 = accounts[0]
		const uintca5uyrP = BigInt("704")
		const address8P4OeI = accounts[2]
//		const boolnE9GbRI = await LedgisO4jzbzG.transferFrom.call(addressOC1OM7V, addressypZwJBN, uintb5hOX8, {from: accounts[4]});
//		const boolWGYjGOk = await LedgisO4jzbzG.transfer.call(addressyppqNB0, uintp8K1w9, {from: accounts[0]});
//		await LedgisO4jzbzG.onlyOwner.call({from: accounts[0]});
//		const boolGZ71Jzn = await LedgisO4jzbzG.mint.call(address8P4OeI, uintca5uyrP, {from: accounts[2]});

		await expect(LedgisO4jzbzG.transferFrom.call(addressOC1OM7V, addressypZwJBN, uintb5hOX8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJ10a1Vo = await Ledgis.new({from: accounts[2]});
		const addresst1Qv5M = accounts[1]
		const addressZyas01x = accounts[3]
		const uinthq2Qdrn = BigInt("1502")
		const addresstznSUzF = accounts[2]
		const uintoeyLK08 = BigInt("1689")
		const addresssBnsRbl = accounts[3]
		const uint256rCagYLu = await LedgisJ10a1Vo.balanceOf.call(addresst1Qv5M, {from: accounts[5]});
		const uint256Pfiv2h7 = await LedgisJ10a1Vo.lockCount.call(addressZyas01x, {from: accounts[3]});
//		await LedgisJ10a1Vo.whenNotPaused.call({from: accounts[4]});
//		const boolr6xd6Rj = await LedgisJ10a1Vo.mint.call(addresstznSUzF, uinthq2Qdrn, {from: accounts[2]});
//		const address4okhxs = await LedgisJ10a1Vo.unlock.call(addresssBnsRbl, uintoeyLK08, {from: accounts[2]});

		assert.equal(uint256Pfiv2h7, BigInt("0"))
		assert.equal(uint256rCagYLu, BigInt("0"))
		await expect(LedgisJ10a1Vo.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJ10a1Vo = await Ledgis.new({from: accounts[2]});
		const addressK709yOI = accounts[3]
		const addressyh7lQTp = accounts[3]
		const uintyO3UOJE = BigInt("1697")
		const addressyjAlQgO = accounts[3]
		const uintXCJsM4Y = BigInt("1000")
		const uintF1lTwh = BigInt("69")
		const addresspeoVFuR = accounts[1]
		const uint256dcmOYem = await LedgisJ10a1Vo.lockCount.call(addressK709yOI, {from: accounts[3]});
		const addressI5B0HQY = await LedgisJ10a1Vo.unfreeze.call(addressyh7lQTp, {from: accounts[2]});
//		const address4okhxs = await LedgisJ10a1Vo.unlock.call(addressyjAlQgO, uintyO3UOJE, {from: accounts[2]});
//		await LedgisJ10a1Vo.renounceOwnership.call({from: accounts[4]});
//		const boolxLnmDQE = await LedgisJ10a1Vo.transferWithLockAfter.call(addresspeoVFuR, uintF1lTwh, uintXCJsM4Y, {from: accounts[5]});

		assert.equal(uint256dcmOYem, BigInt("0"))
		await expect(LedgisJ10a1Vo.unlock.call(addressyjAlQgO, uintyO3UOJE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisO4jzbzG = await Ledgis.new({from: accounts[5]});
		const uintkpWPWza = BigInt("709")
		const addressZvt1TrE = accounts[1]
		const uinta9KojjK = BigInt("704")
		const addressRBJY0pr = accounts[2]
		const boolRXpbF3 = await LedgisO4jzbzG.increaseAllowance.call(addressZvt1TrE, uintkpWPWza, {from: accounts[4]});
//		const boolGZ71Jzn = await LedgisO4jzbzG.mint.call(addressRBJY0pr, uinta9KojjK, {from: accounts[2]});
//		const uint256Sap6kO7 = await LedgisO4jzbzG.currentTime.call({from: accounts[3]});

		assert.equal(boolRXpbF3, true)
		await expect(LedgisO4jzbzG.mint.call(addressRBJY0pr, uinta9KojjK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJ10a1Vo = await Ledgis.new({from: accounts[2]});
		const uintpadft40 = BigInt("1783")
		const addressgAMcy2F = accounts[3]
		const addresswMtWDLB = accounts[1]
		const uintPLpNiwA = BigInt("949")
		const uintXYAhwe = BigInt("1084")
		const addressf1NRjYf = accounts[3]
		const uintJL5lDOM = BigInt("1697")
		const addressexgISLx = accounts[4]
//		await LedgisJ10a1Vo.lockState.call(addressgAMcy2F, uintpadft40, {from: accounts[0]});
//		const uint256rCagYLu = await LedgisJ10a1Vo.balanceOf.call(addresswMtWDLB, {from: accounts[5]});
//		const addressAvXaOmD = await LedgisJ10a1Vo.lockAfter.call(addressf1NRjYf, uintXYAhwe, uintPLpNiwA, {from: accounts[2]});
//		const address4okhxs = await LedgisJ10a1Vo.unlock.call(addressexgISLx, uintJL5lDOM, {from: accounts[2]});

		await expect(LedgisJ10a1Vo.lockState.call(addressgAMcy2F, uintpadft40, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiseNaZ3wJ = await Ledgis.new({from: accounts[0]});
		const addressFxi5U33 = accounts[0]
		const uintXl909FB = BigInt("672")
		const addresszVHIKQ8 = accounts[4]
		const uintVjE5Ohl = BigInt("1125")
		const uintn4a0KNK = BigInt("484")
		const address08VzF9 = accounts[0]
		const uintwamaZi = BigInt("1503")
		const addressARMylAs = accounts[0]
		const uintY0jESB = BigInt("1981")
		const addressFJunIx = accounts[0]
		const boolKEoXgej = await LedgiseNaZ3wJ.isFrozen.call(addressFxi5U33, {from: accounts[4]});
		const boolFtkVEYd = await LedgiseNaZ3wJ.approve.call(addresszVHIKQ8, uintXl909FB, {from: accounts[1]});
//		const addressKPlvOR = await LedgiseNaZ3wJ.lock.call(address08VzF9, uintn4a0KNK, uintVjE5Ohl, {from: accounts[3]});
//		const boolYs8zX64 = await LedgiseNaZ3wJ.transfer.call(addressARMylAs, uintwamaZi, {from: accounts[2]});
//		const boolqFYxKh6 = await LedgiseNaZ3wJ.decreaseAllowance.call(addressFJunIx, uintY0jESB, {from: accounts[3]});

		assert.equal(boolFtkVEYd, true)
		assert.equal(boolKEoXgej, false)
		await expect(LedgiseNaZ3wJ.lock.call(address08VzF9, uintn4a0KNK, uintVjE5Ohl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJ10a1Vo = await Ledgis.new({from: accounts[2]});
		const addressE0Rs0x7 = accounts[3]
		const uintfTYTTgh = BigInt("626")
		const uintcXZ6U6X = BigInt("638")
		const addressIoN80qH = accounts[2]
		const addressJnSRwh = accounts[1]
		const addresslaR6zrk = accounts[5]
		const uint256rCagYLu = await LedgisJ10a1Vo.balanceOf.call(addressE0Rs0x7, {from: accounts[5]});
		const boolCY7y1Pm = await LedgisJ10a1Vo.transferWithLock.call(addressIoN80qH, uintcXZ6U6X, uintfTYTTgh, {from: accounts[2]});
		const uint256qTDCHuv = await LedgisJ10a1Vo.allowance.call(addresslaR6zrk, addressJnSRwh, {from: accounts[1]});

		assert.equal(boolCY7y1Pm, true)
		assert.equal(uint256qTDCHuv, BigInt("0"))
		assert.equal(uint256rCagYLu, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisJ10a1Vo = await Ledgis.new({from: accounts[2]});
		const addressV2Wv7ym = accounts[4]
		const addressOTnE8dK = accounts[2]
		const uint256d7ztW8 = await LedgisJ10a1Vo.currentTime.call({from: accounts[1]});
		const uint256YDo0Hdt = await LedgisJ10a1Vo.balanceOf.call(addressV2Wv7ym, {from: accounts[1]});
		const uint256rCagYLu = await LedgisJ10a1Vo.balanceOf.call(addressOTnE8dK, {from: accounts[5]});

		assert.equal(uint256YDo0Hdt, BigInt("0"))
		assert.equal(uint256d7ztW8, BigInt("1630229440"))
		assert.equal(uint256rCagYLu, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgismaO1JlT = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const addressFUwbO8z = accounts[3]
		const uintv7HKuio = BigInt("192")
		const addressCl5xc9P = accounts[2]
		const uintPxskA5 = BigInt("1324")
		const addressjxgk8a = "0x0000000000000000000000000000000000000001"
		const boolX3qsKCG = await LedgismaO1JlT.isFrozen.call(addressFUwbO8z, {from: accounts[3]});
		const boolN7KqxGC = await LedgismaO1JlT.transfer.call(addressCl5xc9P, uintv7HKuio, {from: accounts[2]});
		const boolIVcWNSK = await LedgismaO1JlT.approve.call(addressjxgk8a, uintPxskA5, {from: accounts[2]});
		await LedgismaO1JlT.whenNotFrozen.call({from: accounts[1]});
	});

	it('test for Ledgis', async () => {
		const LedgisJ10a1Vo = await Ledgis.new({from: accounts[2]});
		const addresspqpRIrJ = accounts[3]
		const uintaWu1kT9 = BigInt("1935")
		const uint256rCagYLu = await LedgisJ10a1Vo.balanceOf.call(addresspqpRIrJ, {from: accounts[5]});
		const uint256o4oWfS = await LedgisJ10a1Vo.afterTime.call(uintaWu1kT9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256o4oWfS, BigInt("1630231382"))
		assert.equal(uint256rCagYLu, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisJ10a1Vo = await Ledgis.new({from: accounts[2]});
		const addressNajcvCS = accounts[3]
//		await LedgisJ10a1Vo.pause.call({from: accounts[2]});
//		await LedgisJ10a1Vo.renounceOwnership.call({from: accounts[2]});
//		const uint256rCagYLu = await LedgisJ10a1Vo.balanceOf.call(addressNajcvCS, {from: accounts[5]});

		await expect(LedgisJ10a1Vo.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisO4jzbzG = await Ledgis.new({from: accounts[5]});
		const uintXi70n9z = BigInt("704")
		const addressu786UkW = accounts[2]
		const uint256tKIXM6N = await LedgisO4jzbzG.totalSupply.call({from: accounts[2]});
//		const boolGZ71Jzn = await LedgisO4jzbzG.mint.call(addressu786UkW, uintXi70n9z, {from: accounts[2]});

		assert.equal(uint256tKIXM6N, BigInt("10000000000000"))
		await expect(LedgisO4jzbzG.mint.call(addressu786UkW, uintXi70n9z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJ10a1Vo = await Ledgis.new({from: accounts[2]});
		const uintQkPAnwQ = BigInt("192")
		const uintxhZmX9q = BigInt("1136")
		const addressJKx5fKB = "0x0000000000000000000000000000000000000001"
		const addresspxdiKOF = accounts[3]
		const boolNNN5bf5 = await LedgisJ10a1Vo.transferWithLockAfter.call(addressJKx5fKB, uintxhZmX9q, uintQkPAnwQ, {from: accounts[2]});
		const uint256rCagYLu = await LedgisJ10a1Vo.balanceOf.call(addresspxdiKOF, {from: accounts[5]});

		assert.equal(boolNNN5bf5, true)
		assert.equal(uint256rCagYLu, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisJ10a1Vo = await Ledgis.new({from: accounts[2]});
		const addressOnVvzx = accounts[4]
		const addressN5vQaXv = accounts[2]
//		await LedgisJ10a1Vo.unpause.call({from: accounts[2]});
//		await LedgisJ10a1Vo.whenNotPaused.call({from: accounts[3]});
//		const boolQE5kBlV = await LedgisJ10a1Vo.isFrozen.call(addressOnVvzx, {from: accounts[5]});
//		const uint256rCagYLu = await LedgisJ10a1Vo.balanceOf.call(addressN5vQaXv, {from: accounts[5]});

		await expect(LedgisJ10a1Vo.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJ10a1Vo = await Ledgis.new({from: accounts[2]});
		const addresso7jw1X = accounts[3]
		const uintUhzMvnM = BigInt("1645")
		const addresslJgdBQ = accounts[1]
		const uint256rCagYLu = await LedgisJ10a1Vo.balanceOf.call(addresso7jw1X, {from: accounts[5]});
		const boolcEwgdG7 = await LedgisJ10a1Vo.mint.call(addresslJgdBQ, uintUhzMvnM, {from: accounts[2]});

		assert.equal(boolcEwgdG7, true)
		assert.equal(uint256rCagYLu, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisJ10a1Vo = await Ledgis.new({from: accounts[2]});
		const uintVUCGm61 = BigInt("1090")
		const addressvuEsj0q = accounts[3]
		const uintcu4yRZ = BigInt("1115")
		const uintW9S0Ti0 = BigInt("1575")
		const addresskgqgLJh = accounts[3]
		const addressMvh5hWc = accounts[0]
		const addressmkUOfXB = accounts[0]
		const uintnOWvwQV = BigInt("1878")
		const addressIKm1gs = accounts[3]
		const addressCg7H1d = accounts[2]
//		const addressftC2DaY = await LedgisJ10a1Vo.burn.call(addressvuEsj0q, uintVUCGm61, {from: accounts[2]});
//		const boolAnFkWz = await LedgisJ10a1Vo.transferWithLock.call(addresskgqgLJh, uintW9S0Ti0, uintcu4yRZ, {from: accounts[3]});
//		const uint2566CAUGu = await LedgisJ10a1Vo.allowance.call(addressmkUOfXB, addressMvh5hWc, {from: accounts[1]});
//		const addresshBkjrz = await LedgisJ10a1Vo.unlock.call(addressIKm1gs, uintnOWvwQV, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256rCagYLu = await LedgisJ10a1Vo.balanceOf.call(addressCg7H1d, {from: accounts[5]});

		await expect(LedgisJ10a1Vo.burn.call(addressvuEsj0q, uintVUCGm61, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisO4jzbzG = await Ledgis.new({from: accounts[5]});
		const uintIofLzoW = BigInt("1381")
		const uintwc12ND = BigInt("1665")
		const addressZyefJ0m = accounts[5]
		const uintrIOMGFF = BigInt("884")
		const addresscq7wJaZ = accounts[5]
		const uintPkxYQqw = BigInt("715")
		const addressdAwL8ON = accounts[2]
		const addressHdPBcA = await LedgisO4jzbzG.lockAfter.call(addressZyefJ0m, uintwc12ND, uintIofLzoW, {from: accounts[5]});
//		const booljNE1yYI = await LedgisO4jzbzG.mint.call(addresscq7wJaZ, uintrIOMGFF, {from: accounts[3]});
//		const boolGZ71Jzn = await LedgisO4jzbzG.mint.call(addressdAwL8ON, uintPkxYQqw, {from: accounts[2]});

		await expect(LedgisO4jzbzG.mint.call(addresscq7wJaZ, uintrIOMGFF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisO4jzbzG = await Ledgis.new({from: accounts[5]});
		const addressPQ2Irff = "0x0000000000000000000000000000000000000001"
		const addressbI92Qfl = accounts[1]
		const addressABqtthI = accounts[1]
		const uintF2G5Tlf = BigInt("704")
		const addressOGxYSLF = accounts[3]
		const addresszYjIMIT = await LedgisO4jzbzG.freeze.call(addressPQ2Irff, {from: accounts[5]});
		const uint256ujGLclM = await LedgisO4jzbzG.allowance.call(addressABqtthI, addressbI92Qfl, {from: accounts[5]});
//		const boolGZ71Jzn = await LedgisO4jzbzG.mint.call(addressOGxYSLF, uintF2G5Tlf, {from: accounts[2]});

		assert.equal(uint256ujGLclM, BigInt("0"))
		await expect(LedgisO4jzbzG.mint.call(addressOGxYSLF, uintF2G5Tlf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisO4jzbzG = await Ledgis.new({from: accounts[5]});
		const uintAFJzIKi = BigInt("547")
		const uintsuOmO1D = BigInt("574")
		const addressEA0ghw0 = accounts[0]
		const addressuHvGOcx = accounts[1]
		const uintat8Hbvi = BigInt("702")
		const addressmTROHee = accounts[2]
//		const addressZ4w3IyX = await LedgisO4jzbzG.lock.call(addressEA0ghw0, uintsuOmO1D, uintAFJzIKi, {from: accounts[5]});
//		const addressBmSM10d = await LedgisO4jzbzG.unfreeze.call(addressuHvGOcx, {from: accounts[5]});
//		const boolGZ71Jzn = await LedgisO4jzbzG.mint.call(addressmTROHee, uintat8Hbvi, {from: accounts[2]});

		await expect(LedgisO4jzbzG.lock.call(addressEA0ghw0, uintsuOmO1D, uintAFJzIKi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisO4jzbzG = await Ledgis.new({from: accounts[5]});
		const addressQhsHLlN = accounts[3]
		const uintfr5U7D8 = BigInt("704")
		const addressHXa6r1Y = accounts[3]
		const uintQP91EH9 = BigInt("1981")
		const uintnrzDL85 = BigInt("468")
		const addressAcxZGWW = accounts[1]
		const addressEwb6lDB = await LedgisO4jzbzG.transferOwnership.call(addressQhsHLlN, {from: accounts[5]});
//		await LedgisO4jzbzG.pause.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolGZ71Jzn = await LedgisO4jzbzG.mint.call(addressHXa6r1Y, uintfr5U7D8, {from: accounts[2]});
//		const boolwmivBkq = await LedgisO4jzbzG.transferWithLockAfter.call(addressAcxZGWW, uintnrzDL85, uintQP91EH9, {from: accounts[4]});

		await expect(LedgisO4jzbzG.pause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})