const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOpLlC1pU = await FrogDAO.new({from: accounts[5]});
		const uintq1WcfR4 = BigInt("900")
		const addresspf2xAO = accounts[5]
		const addressTCmrd4B = accounts[3]
		const uintwNEKnuE = BigInt("89")
		const uintlbaTmuN = BigInt("1544")
		const uintuYHuUX0 = BigInt("631")
		const addresshiKVySy = accounts[5]
		const addressmCPng5Q = accounts[2]
		const uintpxrAwQI = BigInt("794")
		const addressEsN8PoE = accounts[4]
		const uintwAjgyi = BigInt("1231")
		const uintXvkQDJ = BigInt("563")
		const uintOxEjg4R = BigInt("1813")
		const uintGsQXmDP = BigInt("139")
		const booly55Ae0U = await FrogDAOpLlC1pU.transferFrom.call(addressTCmrd4B, addresspf2xAO, uintq1WcfR4, {from: "0x0000000000000000000000000000000000000001"});
		const uintufFKTSS = await FrogDAOpLlC1pU.safeMul.call(uintlbaTmuN, uintwNEKnuE, {from: accounts[0]});
		const boolY9zrQJU = await FrogDAOpLlC1pU.transferFrom.call(addressmCPng5Q, addresshiKVySy, uintuYHuUX0, {from: accounts[1]});
		const boolmNV4ya5 = await FrogDAOpLlC1pU.transfer.call(addressEsN8PoE, uintpxrAwQI, {from: accounts[4]});
		const uintKGa9Upu = await FrogDAOpLlC1pU.safeDiv.call(uintXvkQDJ, uintwAjgyi, {from: accounts[3]});
		const uintkQtRtu = await FrogDAOpLlC1pU.safeSub.call(uintGsQXmDP, uintOxEjg4R, {from: accounts[3]});

		await expect(FrogDAOpLlC1pU.transferFrom.call(addressTCmrd4B, addresspf2xAO, uintq1WcfR4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOPWQdl7z = await FrogDAO.new({from: accounts[2]});
		const uintnHGLLcW = BigInt("1927")
		const addressgFNzZPH = accounts[5]
		const uintRUBOobw = BigInt("1643")
		const uintodFLDSl = BigInt("87")
		const addressCWmvlRR = accounts[1]
		const addresscQEI2N2 = accounts[0]
		const uintloR6FUs = await FrogDAOPWQdl7z.totalSupply.call({from: accounts[4]});
		const booldFkl5wt = await FrogDAOPWQdl7z.transfer.call(addressgFNzZPH, uintnHGLLcW, {from: accounts[2]});
		const uintJE9rj8b = await FrogDAOPWQdl7z.safeDiv.call(uintodFLDSl, uintRUBOobw, {from: accounts[4]});
		const uintWLphS9x = await FrogDAOPWQdl7z.allowance.call(addresscQEI2N2, addressCWmvlRR, {from: accounts[2]});

		assert.equal(booldFkl5wt, true)
		assert.equal(uintJE9rj8b, BigInt("0"))
		assert.equal(uintWLphS9x, BigInt("0"))
		assert.equal(uintloR6FUs, BigInt("1000000000000000000000000"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOL8rIszK = await FrogDAO.new({from: accounts[0]});
		const addressEBCRVfx = accounts[2]
		const uintjWdAgP = BigInt("556")
		const addressPgEdMJm = accounts[4]
		const addressv3Qmhc6 = accounts[1]
		const addressZY9x6Zc = accounts[5]
		const uintuKbiRNO = BigInt("490")
		const uintRiB5Dzu = BigInt("1009")
		const uintGQfZIqU = BigInt("955")
		const uintjcO5b4S = BigInt("1291")
		const uintDRFrFJB = await FrogDAOL8rIszK.balanceOf.call(addressEBCRVfx, {from: accounts[3]});
		const boole9gW41Z = await FrogDAOL8rIszK.transfer.call(addressPgEdMJm, uintjWdAgP, {from: accounts[5]});
		const uintEa2KWyI = await FrogDAOL8rIszK.allowance.call(addressZY9x6Zc, addressv3Qmhc6, {from: accounts[0]});
		const uintCuRhHq = await FrogDAOL8rIszK.safeSub.call(uintRiB5Dzu, uintuKbiRNO, {from: accounts[1]});
		const uintF1dXo5H = await FrogDAOL8rIszK.totalSupply.call({from: accounts[4]});
		const uintV5hHJSA = await FrogDAOL8rIszK.safeSub.call(uintjcO5b4S, uintGQfZIqU, {from: accounts[2]});

		assert.equal(uintDRFrFJB, BigInt("0"))
		await expect(FrogDAOL8rIszK.transfer.call(addressPgEdMJm, uintjWdAgP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOPWGASXl = await FrogDAO.new({from: accounts[1]});
		const addressogByqF3 = accounts[3]
		const uintiULoLTS = BigInt("388")
		const addressb9zELFX = accounts[3]
		const uintJOnw0d8 = await FrogDAOPWGASXl.balanceOf.call(addressogByqF3, {from: accounts[2]});
		const boolNrjejRK = await FrogDAOPWGASXl.approve.call(addressb9zELFX, uintiULoLTS, {from: accounts[4]});
		const uint7Py5dH = await FrogDAOPWGASXl.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolNrjejRK, true)
		assert.equal(uint7Py5dH, BigInt("1000000000000000000000000"))
		assert.equal(uintJOnw0d8, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOueD7hDu = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const addresssSqzSuN = accounts[3]
		const uintWyhqMzC = BigInt("909")
		const addresspqNbAyk = accounts[3]
		const uintifGfx4O = BigInt("1155")
		const uintwzpDhNo = BigInt("1095")
		const uintONLea4e = BigInt("147")
		const uintnYK0QcD = BigInt("1444")
		const uintrWGEotG = await FrogDAOueD7hDu.balanceOf.call(addresssSqzSuN, {from: accounts[2]});
		const boolTuyVDEl = await FrogDAOueD7hDu.transfer.call(addresspqNbAyk, uintWyhqMzC, {from: accounts[2]});
		const uintJr90M4n = await FrogDAOueD7hDu.safeDiv.call(uintwzpDhNo, uintifGfx4O, {from: accounts[3]});
		const uintltbvhPI = await FrogDAOueD7hDu.safeDiv.call(uintnYK0QcD, uintONLea4e, {from: accounts[2]});
	});
})