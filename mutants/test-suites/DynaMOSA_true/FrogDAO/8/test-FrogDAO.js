const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOJNK9fk5 = await FrogDAO.new({from: accounts[0]});
		const uint9kHy6G = BigInt("1783")
		const uintyfbq6sJ = BigInt("436")
		const uint4EfJBL = BigInt("1349")
		const uintBI1x2Wb = BigInt("668")
		const uintjPkJLSb = BigInt("52")
		const uintALCCVxM = BigInt("1235")
//		const uintuSLmyUK = await FrogDAOJNK9fk5.safeSub.call(uintyfbq6sJ, uint9kHy6G, {from: accounts[0]});
//		const uintWQFntQ6 = await FrogDAOJNK9fk5.safeAdd.call(uintBI1x2Wb, uint4EfJBL, {from: accounts[2]});
//		const uintT4XBqqM = await FrogDAOJNK9fk5.safeMul.call(uintALCCVxM, uintjPkJLSb, {from: accounts[5]});

		await expect(FrogDAOJNK9fk5.safeSub.call(uintyfbq6sJ, uint9kHy6G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOcPGgp3B = await FrogDAO.new({from: accounts[1]});
		const uintAWmARcw = BigInt("1567")
		const addressojrXi9D = accounts[1]
		const addressv8NI0VH = accounts[4]
		const addressbSvXdFN = accounts[4]
		const uintzD2Y3V2 = BigInt("664")
		const uintQis6rkg = BigInt("778")
		const uintPsfQdbY = BigInt("184")
		const addressS78DU2P = accounts[2]
		const boolDUuHB9 = await FrogDAOcPGgp3B.approve.call(addressojrXi9D, uintAWmARcw, {from: accounts[0]});
		const uintWq3j61D = await FrogDAOcPGgp3B.allowance.call(addressbSvXdFN, addressv8NI0VH, {from: accounts[3]});
		const uintFRX1YOE = await FrogDAOcPGgp3B.safeMul.call(uintQis6rkg, uintzD2Y3V2, {from: accounts[4]});
		const boolCRZuBbj = await FrogDAOcPGgp3B.approve.call(addressS78DU2P, uintPsfQdbY, {from: accounts[4]});
		const uintE7RHtDN = await FrogDAOcPGgp3B.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolCRZuBbj, true)
		assert.equal(boolDUuHB9, true)
		assert.equal(uintE7RHtDN, BigInt("1000000000000000000000000"))
		assert.equal(uintFRX1YOE, BigInt("516592"))
		assert.equal(uintWq3j61D, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOiVOU7Of = await FrogDAO.new({from: accounts[2]});
		const addressUoyvDYZ = "0x0000000000000000000000000000000000000001"
		const uintGtvVRhI = BigInt("33")
		const uinth7PJOV5 = BigInt("583")
		const addressSHIL35k = accounts[4]
		const uintPciLxVW = BigInt("1698")
		const uintinwTFy5 = BigInt("616")
		const uintLoSxkAR = await FrogDAOiVOU7Of.balanceOf.call(addressUoyvDYZ, {from: accounts[4]});
		const uint1cWCRw = await FrogDAOiVOU7Of.safeSub.call(uinth7PJOV5, uintGtvVRhI, {from: accounts[1]});
		const uintJPnatpc = await FrogDAOiVOU7Of.balanceOf.call(addressSHIL35k, {from: accounts[5]});
//		const uintzwE4YwU = await FrogDAOiVOU7Of.safeSub.call(uintinwTFy5, uintPciLxVW, {from: accounts[1]});

		assert.equal(uint1cWCRw, BigInt("550"))
		assert.equal(uintJPnatpc, BigInt("0"))
		assert.equal(uintLoSxkAR, BigInt("0"))
		await expect(FrogDAOiVOU7Of.safeSub.call(uintinwTFy5, uintPciLxVW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOf6k1Kxi = await FrogDAO.new({from: accounts[3]});
		const uintx5dAA2j = BigInt("487")
		const addresswWtAuKc = accounts[3]
		const uintqFDYoKz = BigInt("1431")
		const addresshfRL78p = accounts[2]
		const addresslDftT3 = accounts[0]
		const uint2tGiSS = BigInt("350")
		const addressJqFlCma = accounts[1]
		const uintWRWjnlJ = BigInt("690")
		const addresstXvzGIa = accounts[4]
		const uintKq8r6c1 = BigInt("1416")
		const addressVtfPfUs = accounts[3]
		const boolrrADsW = await FrogDAOf6k1Kxi.approve.call(addresswWtAuKc, uintx5dAA2j, {from: accounts[1]});
//		const bool9fKD28 = await FrogDAOf6k1Kxi.transfer.call(addresshfRL78p, uintqFDYoKz, {from: "0x0000000000000000000000000000000000000001"});
//		const uintgkhCqo = await FrogDAOf6k1Kxi.balanceOf.call(addresslDftT3, {from: accounts[2]});
//		const boolXAV3Lo6 = await FrogDAOf6k1Kxi.transfer.call(addressJqFlCma, uint2tGiSS, {from: accounts[1]});
//		const boolcDHosnL = await FrogDAOf6k1Kxi.transfer.call(addresstXvzGIa, uintWRWjnlJ, {from: accounts[1]});
//		const boolMa3HCUp = await FrogDAOf6k1Kxi.transfer.call(addressVtfPfUs, uintKq8r6c1, {from: accounts[0]});

		assert.equal(boolrrADsW, true)
		await expect(FrogDAOf6k1Kxi.transfer.call(addresshfRL78p, uintqFDYoKz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOwmziMLx = await FrogDAO.new({from: accounts[3]});
		const uintBPWDaa = BigInt("960")
		const uintO85ytbV = BigInt("1080")
		const addressbBI5Pxz = accounts[2]
		const uintowTMkft = BigInt("1214")
		const uintKdwTLx9 = BigInt("1762")
		const uintsYSpZt = await FrogDAOwmziMLx.safeAdd.call(uintO85ytbV, uintBPWDaa, {from: accounts[2]});
		const uintxuDU5sm = await FrogDAOwmziMLx.balanceOf.call(addressbBI5Pxz, {from: accounts[2]});
		const uintuxJeySn = await FrogDAOwmziMLx.safeSub.call(uintKdwTLx9, uintowTMkft, {from: accounts[4]});

		assert.equal(uintsYSpZt, BigInt("2040"))
		assert.equal(uintuxJeySn, BigInt("548"))
		assert.equal(uintxuDU5sm, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOzAUzgsM = await FrogDAO.new({from: accounts[2]});
		const addressUe55QSm = accounts[5]
		const uintWLQKky = BigInt("242")
		const addressQtM4Yzt = accounts[3]
		const addressRyRU9C1 = accounts[0]
		const uintTzAZAbX = BigInt("875")
		const addressZCKYJs5 = accounts[2]
		const addressdkjSf6B = accounts[0]
		const uintgZHeasq = await FrogDAOzAUzgsM.balanceOf.call(addressUe55QSm, {from: accounts[2]});
//		const boolbtUsGq = await FrogDAOzAUzgsM.transferFrom.call(addressRyRU9C1, addressQtM4Yzt, uintWLQKky, {from: accounts[2]});
//		const boolW5KVEtA = await FrogDAOzAUzgsM.transferFrom.call(addressdkjSf6B, addressZCKYJs5, uintTzAZAbX, {from: accounts[3]});

		assert.equal(uintgZHeasq, BigInt("0"))
		await expect(FrogDAOzAUzgsM.transferFrom.call(addressRyRU9C1, addressQtM4Yzt, uintWLQKky, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOqkbYuqt = await FrogDAO.new({from: accounts[3]});
		const addressiBkTCr3 = accounts[3]
		const addressI834xTv = accounts[3]
		const uintK3srlnT = BigInt("856")
		const uintUrxCmYn = BigInt("351")
		const addresscKzAMpR = accounts[0]
		const addressEDa219q = "0x0000000000000000000000000000000000000001"
		const uintj2v37aF = BigInt("218")
		const addressYCqmP8W = "0x0000000000000000000000000000000000000001"
		const addressAvvVn24 = accounts[3]
		const addressHs8goDy = accounts[3]
		const uintwkXzYqH = await FrogDAOqkbYuqt.allowance.call(addressI834xTv, addressiBkTCr3, {from: accounts[0]});
		const uintwszpC0 = await FrogDAOqkbYuqt.safeDiv.call(uintUrxCmYn, uintK3srlnT, {from: accounts[3]});
		const uintYPnLJ0c = await FrogDAOqkbYuqt.allowance.call(addressEDa219q, addresscKzAMpR, {from: accounts[4]});
		const boolzfoSw0T = await FrogDAOqkbYuqt.approve.call(addressYCqmP8W, uintj2v37aF, {from: accounts[3]});
		const uintIazHyJ8 = await FrogDAOqkbYuqt.allowance.call(addressHs8goDy, addressAvvVn24, {from: accounts[4]});

		assert.equal(boolzfoSw0T, true)
		assert.equal(uintIazHyJ8, BigInt("0"))
		assert.equal(uintYPnLJ0c, BigInt("0"))
		assert.equal(uintwkXzYqH, BigInt("0"))
		assert.equal(uintwszpC0, BigInt("0"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAORLeRbQq = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const addressiAksOhv = accounts[2]
		const uintNVNx9PO = BigInt("1829")
		const addressIWKSZ7n = accounts[5]
		const uintHLYdF0S = await FrogDAORLeRbQq.balanceOf.call(addressiAksOhv, {from: accounts[3]});
		const uintJRGRBxy = await FrogDAORLeRbQq.totalSupply.call({from: accounts[4]});
		const boolTTBHWMc = await FrogDAORLeRbQq.transfer.call(addressIWKSZ7n, uintNVNx9PO, {from: accounts[4]});
	});
})