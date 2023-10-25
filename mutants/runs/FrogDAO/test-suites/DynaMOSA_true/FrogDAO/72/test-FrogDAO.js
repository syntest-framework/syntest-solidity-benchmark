const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOfPHKqBP = await FrogDAO.new({from: accounts[5]});
		const uinteuS8051 = BigInt("1993")
		const uintDs1tiPT = BigInt("1222")
		const uintNFu1uYZ = BigInt("1881")
		const uintQiuDLTn = BigInt("471")
		const addressGPA00w = accounts[0]
		const uintrjC2iQM = await FrogDAOfPHKqBP.safeSub.call(uintDs1tiPT, uinteuS8051, {from: accounts[2]});
		const uintJdlTd4M = await FrogDAOfPHKqBP.safeDiv.call(uintQiuDLTn, uintNFu1uYZ, {from: accounts[0]});
		const uintrpAJyth = await FrogDAOfPHKqBP.balanceOf.call(addressGPA00w, {from: accounts[4]});

		await expect(FrogDAOfPHKqBP.safeSub.call(uintDs1tiPT, uinteuS8051, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOS06lPW = await FrogDAO.new({from: accounts[1]});
		const addressY1WRRAW = accounts[4]
		const addressZYfnuo4 = accounts[2]
		const uintVylmd4K = BigInt("1885")
		const uintYIBeWi = BigInt("1251")
		const uintz0CKNgA = await FrogDAOS06lPW.allowance.call(addressZYfnuo4, addressY1WRRAW, {from: accounts[3]});
		const uintgoauRlW = await FrogDAOS06lPW.safeMul.call(uintYIBeWi, uintVylmd4K, {from: accounts[0]});

		assert.equal(uintgoauRlW, BigInt("2358135"))
		assert.equal(uintz0CKNgA, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOMlrkGXe = await FrogDAO.new({from: accounts[3]});
		const addressLqPWRVr = accounts[2]
		const uintzBVoayO = BigInt("2013")
		const addresswAuE4rR = accounts[1]
		const uintHqL9jAW = BigInt("214")
		const addressOb36I7e = accounts[4]
		const uintSOXT62A = BigInt("1528")
		const uintZZSdLay = BigInt("622")
		const addressUB7vzy = accounts[4]
		const uintp03LQ3 = await FrogDAOMlrkGXe.balanceOf.call(addressLqPWRVr, {from: accounts[2]});
		const booljmEHVCs = await FrogDAOMlrkGXe.approve.call(addresswAuE4rR, uintzBVoayO, {from: accounts[0]});
		const booliLE37uB = await FrogDAOMlrkGXe.transfer.call(addressOb36I7e, uintHqL9jAW, {from: accounts[1]});
		const uintZDwf76d = await FrogDAOMlrkGXe.safeSub.call(uintZZSdLay, uintSOXT62A, {from: accounts[1]});
		const uintUUgypx3 = await FrogDAOMlrkGXe.balanceOf.call(addressUB7vzy, {from: accounts[4]});

		assert.equal(booljmEHVCs, true)
		assert.equal(uintp03LQ3, BigInt("0"))
		await expect(FrogDAOMlrkGXe.transfer.call(addressOb36I7e, uintHqL9jAW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOc3gub1D = await FrogDAO.new({from: accounts[3]});
		const uintA6m2GS9 = BigInt("603")
		const uintxKD2FT0 = BigInt("538")
		const uintRDfQYM2 = BigInt("1917")
		const uintOCkRvUD = BigInt("1231")
		const uintCJxzXzx = BigInt("1230")
		const uintA55o81 = BigInt("661")
		const uintX7DtsIE = await FrogDAOc3gub1D.safeDiv.call(uintxKD2FT0, uintA6m2GS9, {from: accounts[4]});
		const uintX22s76 = await FrogDAOc3gub1D.safeMul.call(uintOCkRvUD, uintRDfQYM2, {from: accounts[3]});
		const uintmIG3Nk = await FrogDAOc3gub1D.safeMul.call(uintA55o81, uintCJxzXzx, {from: accounts[4]});

		assert.equal(uintX22s76, BigInt("2359827"))
		assert.equal(uintX7DtsIE, BigInt("0"))
		assert.equal(uintmIG3Nk, BigInt("813030"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOxd8Qle = await FrogDAO.new({from: accounts[5]});
		const addressLkOriRT = accounts[0]
		const addressR6Rpnlv = accounts[1]
		const uintMRLDBML = BigInt("123")
		const uintynkGDW = BigInt("809")
		const uintJ3waHCb = BigInt("244")
		const addressxY42bAX = accounts[4]
		const uintImpVQtX = await FrogDAOxd8Qle.allowance.call(addressR6Rpnlv, addressLkOriRT, {from: accounts[1]});
		const uintNNUNUv8 = await FrogDAOxd8Qle.safeMul.call(uintynkGDW, uintMRLDBML, {from: accounts[3]});
		const uinthNAYSFo = await FrogDAOxd8Qle.totalSupply.call({from: accounts[2]});
		const boolSmN0hRl = await FrogDAOxd8Qle.transfer.call(addressxY42bAX, uintJ3waHCb, {from: accounts[2]});

		assert.equal(uintImpVQtX, BigInt("0"))
		assert.equal(uintNNUNUv8, BigInt("99507"))
		assert.equal(uinthNAYSFo, BigInt("1000000000000000000000000"))
		await expect(FrogDAOxd8Qle.transfer.call(addressxY42bAX, uintJ3waHCb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOofdRKoL = await FrogDAO.new({from: accounts[1]});
		const uintQxr43MI = BigInt("1085")
		const uintm74tDt = BigInt("1353")
		const uinthshntaU = BigInt("1323")
		const addresszBE7Vz = accounts[0]
		const uintai5hTA = BigInt("1821")
		const addressYjRRYb6 = "0x0000000000000000000000000000000000000001"
		const uintwF9lrCE = BigInt("1356")
		const addressAvVju5i = accounts[4]
		const addressnDxJsq1 = accounts[4]
		const uintAEHNuJ6 = await FrogDAOofdRKoL.safeAdd.call(uintm74tDt, uintQxr43MI, {from: accounts[2]});
		const boolpCGbPXF = await FrogDAOofdRKoL.transfer.call(addresszBE7Vz, uinthshntaU, {from: accounts[2]});
		const boolEEmC7LI = await FrogDAOofdRKoL.transfer.call(addressYjRRYb6, uintai5hTA, {from: accounts[0]});
		const uintuFV8jHF = await FrogDAOofdRKoL.totalSupply.call({from: accounts[5]});
		const boolfEXUSSm = await FrogDAOofdRKoL.transferFrom.call(addressnDxJsq1, addressAvVju5i, uintwF9lrCE, {from: accounts[1]});

		assert.equal(uintAEHNuJ6, BigInt("2438"))
		await expect(FrogDAOofdRKoL.transfer.call(addresszBE7Vz, uinthshntaU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOS06lPW = await FrogDAO.new({from: accounts[1]});
		const addressuWyMrW = accounts[5]
		const addressUzFIOCM = accounts[2]
		const addressxFawEu = accounts[2]
		const uintgasNbm = BigInt("1909")
		const addressyrRII6l = accounts[3]
		const addressG6tcjDy = accounts[4]
		const uintG3C7aIG = BigInt("1392")
		const addressckRf5NX = accounts[0]
		const addresscc3stX5 = accounts[4]
		const uintiEcl0kA = BigInt("1885")
		const uintoaVL5RE = BigInt("1251")
		const uintz0CKNgA = await FrogDAOS06lPW.allowance.call(addressUzFIOCM, addressuWyMrW, {from: accounts[3]});
		const uinttXYw0QO = await FrogDAOS06lPW.balanceOf.call(addressxFawEu, {from: accounts[2]});
		const boolNJwqAYD = await FrogDAOS06lPW.transferFrom.call(addressG6tcjDy, addressyrRII6l, uintgasNbm, {from: accounts[0]});
		const boola5G93ZU = await FrogDAOS06lPW.transferFrom.call(addresscc3stX5, addressckRf5NX, uintG3C7aIG, {from: accounts[2]});
		const uintgoauRlW = await FrogDAOS06lPW.safeMul.call(uintoaVL5RE, uintiEcl0kA, {from: accounts[0]});

		assert.equal(uinttXYw0QO, BigInt("0"))
		assert.equal(uintz0CKNgA, BigInt("0"))
		await expect(FrogDAOS06lPW.transferFrom.call(addressG6tcjDy, addressyrRII6l, uintgasNbm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOPSvj0yG = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmRB1L0k = BigInt("200")
		const addressR0FmxUe = accounts[5]
		const uintwha0ir9 = BigInt("1254")
		const addressQ4FIRv = accounts[2]
		const uintLUyNWcC = BigInt("567")
		const uintrLruRZl = BigInt("1634")
		const uintqeppR58 = BigInt("790")
		const uintkgJoNMy = BigInt("1064")
		const boolLOYWde3 = await FrogDAOPSvj0yG.transfer.call(addressR0FmxUe, uintmRB1L0k, {from: accounts[0]});
		const boolPpNpaAC = await FrogDAOPSvj0yG.transfer.call(addressQ4FIRv, uintwha0ir9, {from: accounts[0]});
		const uintLtnxZt = await FrogDAOPSvj0yG.totalSupply.call({from: accounts[4]});
		const uintAhDOqVK = await FrogDAOPSvj0yG.safeMul.call(uintrLruRZl, uintLUyNWcC, {from: accounts[4]});
		const uintu7RlMeN = await FrogDAOPSvj0yG.safeSub.call(uintkgJoNMy, uintqeppR58, {from: accounts[4]});
	});
})