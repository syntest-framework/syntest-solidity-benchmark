const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodypPnhdwj = await HungryHoody.new({from: accounts[0]});
		const uintAp8HgS = BigInt("1296")
		const addressj4QC80 = accounts[4]
		const uintvwBjPvK = await HungryHoodypPnhdwj.totalSupply.call({from: accounts[0]});
//		const boolFJlALz3 = await HungryHoodypPnhdwj.transfer.call(addressj4QC80, uintAp8HgS, {from: accounts[1]});

		assert.equal(uintvwBjPvK, BigInt("25000000000000000000"))
		await expect(HungryHoodypPnhdwj.transfer.call(addressj4QC80, uintAp8HgS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyT5DDHlN = await HungryHoody.new({from: accounts[4]});
		const uintNtogPBZ = BigInt("271")
		const uintyfzYCiH = BigInt("1084")
		const uintAlCfqfB = BigInt("91")
		const addressG4azCpI = accounts[4]
		const uintgSOPjR6 = BigInt("1123")
		const uintWb4N9gi = BigInt("95")
		const uintQRDW2Hn = BigInt("274")
		const addressADaVPWv = accounts[1]
		const uintibtmlKo = BigInt("300")
		const addressP546bkH = accounts[5]
		const uintggt2gtm = BigInt("121")
		const uintuIdiZnh = BigInt("874")
		const uintn919cvJ = await HungryHoodyT5DDHlN.safeAdd.call(uintyfzYCiH, uintNtogPBZ, {from: accounts[5]});
		const boolUKbwTha = await HungryHoodyT5DDHlN.approve.call(addressG4azCpI, uintAlCfqfB, {from: accounts[0]});
//		const uintFPQvjRv = await HungryHoodyT5DDHlN.safeSub.call(uintWb4N9gi, uintgSOPjR6, {from: accounts[2]});
//		const boolRvc5oG = await HungryHoodyT5DDHlN.transfer.call(addressADaVPWv, uintQRDW2Hn, {from: accounts[2]});
//		const boolUUdAXOI = await HungryHoodyT5DDHlN.transfer.call(addressP546bkH, uintibtmlKo, {from: accounts[2]});
//		const uintfqy6FKL = await HungryHoodyT5DDHlN.safeMul.call(uintuIdiZnh, uintggt2gtm, {from: accounts[0]});

		assert.equal(boolUKbwTha, true)
		assert.equal(uintn919cvJ, BigInt("1355"))
		await expect(HungryHoodyT5DDHlN.safeSub.call(uintWb4N9gi, uintgSOPjR6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyl6h3LeS = await HungryHoody.new({from: accounts[0]});
		const uintaqFNP4w = BigInt("1086")
		const uintBJhLNrj = BigInt("1897")
		const addressXb3YN9P = accounts[2]
		const uint44c22U = BigInt("446")
		const uintUSgutAF = BigInt("1476")
		const uintbqKBMIS = BigInt("164")
		const addresssQExEZ = accounts[2]
		const addressVdmTOp8 = accounts[1]
		const uintT0UQOqR = await HungryHoodyl6h3LeS.totalSupply.call({from: accounts[0]});
		const uintW9qexio = await HungryHoodyl6h3LeS.totalSupply.call({from: accounts[1]});
		const uintO944UUJ = await HungryHoodyl6h3LeS.safeMul.call(uintBJhLNrj, uintaqFNP4w, {from: accounts[3]});
		const uintRhqFGlg = await HungryHoodyl6h3LeS.balanceOf.call(addressXb3YN9P, {from: accounts[0]});
		const uintBaLDpcV = await HungryHoodyl6h3LeS.safeDiv.call(uintUSgutAF, uint44c22U, {from: accounts[1]});
//		const booliHR29Nu = await HungryHoodyl6h3LeS.transferFrom.call(addressVdmTOp8, addresssQExEZ, uintbqKBMIS, {from: accounts[5]});

		assert.equal(uintBaLDpcV, BigInt("3"))
		assert.equal(uintO944UUJ, BigInt("2060142"))
		assert.equal(uintRhqFGlg, BigInt("0"))
		assert.equal(uintT0UQOqR, BigInt("25000000000000000000"))
		assert.equal(uintW9qexio, BigInt("25000000000000000000"))
		await expect(HungryHoodyl6h3LeS.transferFrom.call(addressVdmTOp8, addresssQExEZ, uintbqKBMIS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodynZzIVVD = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintH1awRZC = BigInt("1815")
		const addressNa11ren = accounts[2]
		const addressZytbNu1 = accounts[3]
		const addressbPozTuH = accounts[4]
		const uintVQcNcD = BigInt("87")
		const uintTjRnMUF = BigInt("1558")
		const uinthSBOmN4 = BigInt("583")
		const addressmM3bJhJ = accounts[4]
		const boolQI8CjI8 = await HungryHoodynZzIVVD.approve.call(addressNa11ren, uintH1awRZC, {from: accounts[4]});
		const uinthFgKfkZ = await HungryHoodynZzIVVD.allowance.call(addressbPozTuH, addressZytbNu1, {from: accounts[4]});
		const uintg1KQhYW = await HungryHoodynZzIVVD.safeDiv.call(uintTjRnMUF, uintVQcNcD, {from: accounts[0]});
		const boolJMV5htd = await HungryHoodynZzIVVD.transfer.call(addressmM3bJhJ, uinthSBOmN4, {from: accounts[1]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodysFhQgEs = await HungryHoody.new({from: accounts[0]});
		const addressLh2qRo4 = accounts[3]
		const uintXOGV8rT = BigInt("1742")
		const addressohPdovn = accounts[1]
		const uintDuRndey = BigInt("913")
		const uintrOZCdGU = BigInt("956")
		const addressfBOIGRY = accounts[3]
		const addressLHLmtaj = accounts[3]
		const uintNmBov4v = await HungryHoodysFhQgEs.balanceOf.call(addressLh2qRo4, {from: accounts[3]});
		const boolTqQszky = await HungryHoodysFhQgEs.transfer.call(addressohPdovn, uintXOGV8rT, {from: accounts[0]});
		const uintjkTmU9B = await HungryHoodysFhQgEs.safeAdd.call(uintrOZCdGU, uintDuRndey, {from: accounts[2]});
		const uinttSJ09zq = await HungryHoodysFhQgEs.allowance.call(addressLHLmtaj, addressfBOIGRY, {from: accounts[1]});

		assert.equal(boolTqQszky, true)
		assert.equal(uintNmBov4v, BigInt("0"))
		assert.equal(uintjkTmU9B, BigInt("1869"))
		assert.equal(uinttSJ09zq, BigInt("0"))
	});
})