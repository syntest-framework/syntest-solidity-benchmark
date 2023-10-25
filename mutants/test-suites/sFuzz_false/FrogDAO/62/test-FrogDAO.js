const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAODeNuXnT = await FrogDAO.new({from: accounts[4]});
		const uintFtCf22T = BigInt("115")
		const uintojIxggZ = BigInt("1442")
		const uint6FNRmf = BigInt("2004")
		const uintNpbrZjD = BigInt("1747")
		const uintn4CHvMF = await FrogDAODeNuXnT.totalSupply.call({from: accounts[3]});
		const uintRUVoxaX = await FrogDAODeNuXnT.safeDiv.call(uintojIxggZ, uintFtCf22T, {from: accounts[4]});
		const uinte5lQPJ = await FrogDAODeNuXnT.safeMul.call(uintNpbrZjD, uint6FNRmf, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uintRUVoxaX, BigInt("12"))
		assert.equal(uinte5lQPJ, BigInt("3500988"))
		assert.equal(uintn4CHvMF, BigInt("1000000000000000000000000"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOGLWa2i = await FrogDAO.new({from: accounts[0]});
		const uintPXSkxbe = BigInt("2046")
		const addressCv9rkUa = accounts[2]
		const uintvvJt8aS = BigInt("690")
		const uintzlf5Tv = BigInt("2003")
		const uintcTd6Rrv = BigInt("482")
		const uintZ31Q7M9 = BigInt("1334")
		const addressJUtmcZs = accounts[4]
		const addressjreTLv = accounts[5]
		const boolOpa5hwm = await FrogDAOGLWa2i.transfer.call(addressCv9rkUa, uintPXSkxbe, {from: accounts[0]});
		const uintzPUEVSl = await FrogDAOGLWa2i.safeMul.call(uintzlf5Tv, uintvvJt8aS, {from: accounts[2]});
		const uintGWfgiXf = await FrogDAOGLWa2i.safeMul.call(uintZ31Q7M9, uintcTd6Rrv, {from: accounts[4]});
		const uintSyaBseT = await FrogDAOGLWa2i.balanceOf.call(addressJUtmcZs, {from: accounts[3]});
		const uintixeo7ii = await FrogDAOGLWa2i.balanceOf.call(addressjreTLv, {from: accounts[0]});
		const uintdteeYOo = await FrogDAOGLWa2i.totalSupply.call({from: accounts[4]});

		assert.equal(boolOpa5hwm, true)
		assert.equal(uintGWfgiXf, BigInt("642988"))
		assert.equal(uintSyaBseT, BigInt("0"))
		assert.equal(uintdteeYOo, BigInt("1000000000000000000000000"))
		assert.equal(uintixeo7ii, BigInt("0"))
		assert.equal(uintzPUEVSl, BigInt("1382070"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAObLxRKSS = await FrogDAO.new({from: accounts[3]});
		const uintpebKf8x = BigInt("133")
		const uintT9ijSW9 = BigInt("760")
		const uintRlpPJ9v = BigInt("1372")
		const addressiKNg9Rf = accounts[2]
		const uintC5dmxK5 = await FrogDAObLxRKSS.safeMul.call(uintT9ijSW9, uintpebKf8x, {from: accounts[4]});
		const booleYdLxwU = await FrogDAObLxRKSS.approve.call(addressiKNg9Rf, uintRlpPJ9v, {from: accounts[3]});
		const uintAn4jUq0 = await FrogDAObLxRKSS.totalSupply.call({from: accounts[2]});

		assert.equal(booleYdLxwU, true)
		assert.equal(uintAn4jUq0, BigInt("1000000000000000000000000"))
		assert.equal(uintC5dmxK5, BigInt("101080"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOzEyDbuc = await FrogDAO.new({from: accounts[1]});
		const addressAxEiQ8X = accounts[5]
		const addressoypZSLf = accounts[4]
		const uintCEaWE9 = BigInt("1460")
		const uintxnlPFOB = BigInt("1328")
		const addressLIInH65 = accounts[2]
		const addressGl4EnGE = "0x0000000000000000000000000000000000000001"
		const uintiWpHCng = await FrogDAOzEyDbuc.totalSupply.call({from: accounts[3]});
		const uinteFlVV68 = await FrogDAOzEyDbuc.allowance.call(addressoypZSLf, addressAxEiQ8X, {from: accounts[2]});
		const uintedmisX = await FrogDAOzEyDbuc.safeMul.call(uintxnlPFOB, uintCEaWE9, {from: accounts[1]});
		const uintpmH7cgj = await FrogDAOzEyDbuc.allowance.call(addressGl4EnGE, addressLIInH65, {from: accounts[1]});
		const uintBnRJZVA = await FrogDAOzEyDbuc.totalSupply.call({from: accounts[5]});

		assert.equal(uintBnRJZVA, BigInt("1000000000000000000000000"))
		assert.equal(uinteFlVV68, BigInt("0"))
		assert.equal(uintedmisX, BigInt("1938880"))
		assert.equal(uintiWpHCng, BigInt("1000000000000000000000000"))
		assert.equal(uintpmH7cgj, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOCWgMw3w = await FrogDAO.new({from: accounts[0]});
		const uintz2SODWR = BigInt("1679")
		const uintGnqnVek = BigInt("403")
		const addressRXB4rrM = accounts[4]
		const uintAzXo0L6 = BigInt("1473")
		const addressvrfDp22 = accounts[3]
		const uintveT9quL = BigInt("1077")
		const addresswaqV9Nj = accounts[2]
		const uintnKXomXO = BigInt("1463")
		const uintER1EQDd = BigInt("1673")
		const uintn483oXk = await FrogDAOCWgMw3w.safeDiv.call(uintGnqnVek, uintz2SODWR, {from: accounts[4]});
		const uintrqyXo9D = await FrogDAOCWgMw3w.balanceOf.call(addressRXB4rrM, {from: accounts[1]});
//		const boolR0YfVdQ = await FrogDAOCWgMw3w.transfer.call(addressvrfDp22, uintAzXo0L6, {from: accounts[5]});
//		const boolZFck94f = await FrogDAOCWgMw3w.transfer.call(addresswaqV9Nj, uintveT9quL, {from: accounts[3]});
//		const uintEvKOyGU = await FrogDAOCWgMw3w.safeDiv.call(uintER1EQDd, uintnKXomXO, {from: accounts[3]});

		assert.equal(uintn483oXk, BigInt("0"))
		assert.equal(uintrqyXo9D, BigInt("0"))
		await expect(FrogDAOCWgMw3w.transfer.call(addressvrfDp22, uintAzXo0L6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOI373KVb = await FrogDAO.new({from: accounts[1]});
		const uintPXQGOlM = BigInt("1203")
		const addressFynVv1F = "0x0000000000000000000000000000000000000001"
		const addressKwUsuCU = accounts[2]
		const uintKv0SbpV = BigInt("1824")
		const uintTr4Nuom = BigInt("446")
		const uintWdWS7FL = BigInt("1100")
		const uintO5FeNLy = BigInt("335")
//		const boolzYPBB3I = await FrogDAOI373KVb.transferFrom.call(addressKwUsuCU, addressFynVv1F, uintPXQGOlM, {from: accounts[2]});
//		const uint0kbRsg = await FrogDAOI373KVb.safeSub.call(uintTr4Nuom, uintKv0SbpV, {from: accounts[1]});
//		const uintbM4WhZ8 = await FrogDAOI373KVb.safeMul.call(uintO5FeNLy, uintWdWS7FL, {from: accounts[2]});

		await expect(FrogDAOI373KVb.transferFrom.call(addressKwUsuCU, addressFynVv1F, uintPXQGOlM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOQHLARww = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintmBdJpPY = BigInt("1274")
		const uintYbFSXIh = BigInt("1808")
		const uintl21oiHe = BigInt("910")
		const uinteN2GaMi = BigInt("1823")
		const uintZVeOc50 = BigInt("147")
		const uintOZSuy6 = BigInt("1220")
		const uintbxrzqmA = await FrogDAOQHLARww.safeSub.call(uintYbFSXIh, uintmBdJpPY, {from: accounts[1]});
		const uintmmmVBL0 = await FrogDAOQHLARww.safeAdd.call(uinteN2GaMi, uintl21oiHe, {from: "0x0000000000000000000000000000000000000001"});
		const uintXKSA6Gg = await FrogDAOQHLARww.safeDiv.call(uintOZSuy6, uintZVeOc50, {from: accounts[1]});
	});
})