const FrogDAO = artifacts.require("FrogDAO");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAO', (accounts) => {
	it('test for FrogDAO', async () => {
		const FrogDAOFwG3NOz = await FrogDAO.new({from: accounts[4]});
		const uintslFRUs0 = BigInt("363")
		const addressp2PQskM = accounts[3]
		const uintGfbX8yr = BigInt("1681")
		const addressvJA4ey4 = accounts[5]
		const uintCkKYYvo = BigInt("847")
		const addressKxJsfWm = accounts[3]
		const addressYbrq9DU = accounts[3]
		const addresscn2kShf = accounts[5]
		const uintgtUtWAh = BigInt("1370")
		const addressgPIeNtV = accounts[4]
		const boolJpDnrwf = await FrogDAOFwG3NOz.approve.call(addressp2PQskM, uintslFRUs0, {from: accounts[4]});
//		const boolKmPmVWJ = await FrogDAOFwG3NOz.transfer.call(addressvJA4ey4, uintGfbX8yr, {from: accounts[1]});
//		const boolEJKVVp3 = await FrogDAOFwG3NOz.transferFrom.call(addressYbrq9DU, addressKxJsfWm, uintCkKYYvo, {from: accounts[3]});
//		const uintexmYrkv = await FrogDAOFwG3NOz.balanceOf.call(addresscn2kShf, {from: accounts[1]});
//		const boolLZfLpD = await FrogDAOFwG3NOz.approve.call(addressgPIeNtV, uintgtUtWAh, {from: accounts[5]});
//		const uintgUBz5M = await FrogDAOFwG3NOz.totalSupply.call({from: accounts[4]});

		assert.equal(boolJpDnrwf, true)
		await expect(FrogDAOFwG3NOz.transfer.call(addressvJA4ey4, uintGfbX8yr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOVE3CHeO = await FrogDAO.new({from: accounts[0]});
		const uintQy420su = BigInt("7")
		const addresszRPyBYG = "0x0000000000000000000000000000000000000001"
		const addressXcyAORT = accounts[5]
		const addressZrx61Il = accounts[0]
		const addresshW7Idai = accounts[5]
//		const bool22VjNE = await FrogDAOVE3CHeO.transferFrom.call(addressXcyAORT, addresszRPyBYG, uintQy420su, {from: accounts[1]});
//		const uintRCK9ARc = await FrogDAOVE3CHeO.allowance.call(addresshW7Idai, addressZrx61Il, {from: accounts[2]});

		await expect(FrogDAOVE3CHeO.transferFrom.call(addressXcyAORT, addresszRPyBYG, uintQy420su, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOsK6Lj2r = await FrogDAO.new({from: accounts[4]});
		const uintsrHtT79 = BigInt("345")
		const addressf6xLvWe = accounts[4]
		const uintWobJNbY = BigInt("428")
		const addressQMJVyZ = accounts[3]
		const uintSarPVw = BigInt("1345")
		const uintnFMc8zf = BigInt("724")
		const uintqkD58oQ = BigInt("1821")
		const uintfR1sZK = BigInt("649")
		const uintXNqwwZC = BigInt("547")
		const uint0Ck8x9 = BigInt("1729")
		const uintenYDMmg = BigInt("1130")
		const uintXMbwC5k = BigInt("1535")
		const boolbf2R1km = await FrogDAOsK6Lj2r.approve.call(addressf6xLvWe, uintsrHtT79, {from: accounts[4]});
		const boolXWmlb3Z = await FrogDAOsK6Lj2r.approve.call(addressQMJVyZ, uintWobJNbY, {from: accounts[5]});
		const uintqvcv1Lt = await FrogDAOsK6Lj2r.safeAdd.call(uintnFMc8zf, uintSarPVw, {from: accounts[2]});
		const uintq1YeBfC = await FrogDAOsK6Lj2r.safeDiv.call(uintfR1sZK, uintqkD58oQ, {from: accounts[4]});
		const uintYP8auwu = await FrogDAOsK6Lj2r.safeSub.call(uint0Ck8x9, uintXNqwwZC, {from: accounts[4]});
		const uintCWNWKeZ = await FrogDAOsK6Lj2r.safeSub.call(uintXMbwC5k, uintenYDMmg, {from: accounts[0]});

		assert.equal(boolXWmlb3Z, true)
		assert.equal(boolbf2R1km, true)
		assert.equal(uintCWNWKeZ, BigInt("405"))
		assert.equal(uintYP8auwu, BigInt("1182"))
		assert.equal(uintq1YeBfC, BigInt("0"))
		assert.equal(uintqvcv1Lt, BigInt("2069"))
	});

	it('test for FrogDAO', async () => {
		const FrogDAOG5FHLDj = await FrogDAO.new({from: accounts[2]});
		const addressktU7U0 = "0x0000000000000000000000000000000000000001"
		const uintqH0WWIF = BigInt("1821")
		const addressZ7s4QkY = accounts[2]
		const addressFi6v4MR = "0x0000000000000000000000000000000000000001"
		const addressJpo9LA7 = accounts[0]
		const addresssvdcpaE = accounts[5]
		const uintMQr20Pn = BigInt("1464")
		const uintcSEocXw = BigInt("332")
		const uintB1e3zWP = BigInt("902")
		const addresswztT0Vd = accounts[2]
		const addressarHngFP = accounts[3]
		const uintbRdGvB1 = await FrogDAOG5FHLDj.balanceOf.call(addressktU7U0, {from: accounts[1]});
		const boolprdhqXo = await FrogDAOG5FHLDj.approve.call(addressZ7s4QkY, uintqH0WWIF, {from: accounts[2]});
		const uintCKLXnYY = await FrogDAOG5FHLDj.balanceOf.call(addressFi6v4MR, {from: accounts[1]});
		const uintWyzCxQC = await FrogDAOG5FHLDj.allowance.call(addresssvdcpaE, addressJpo9LA7, {from: accounts[5]});
		const uintxN9SL7N = await FrogDAOG5FHLDj.safeDiv.call(uintcSEocXw, uintMQr20Pn, {from: accounts[3]});
//		const boolazaqhoG = await FrogDAOG5FHLDj.transferFrom.call(addressarHngFP, addresswztT0Vd, uintB1e3zWP, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolprdhqXo, true)
		assert.equal(uintCKLXnYY, BigInt("0"))
		assert.equal(uintWyzCxQC, BigInt("0"))
		assert.equal(uintbRdGvB1, BigInt("0"))
		assert.equal(uintxN9SL7N, BigInt("0"))
		await expect(FrogDAOG5FHLDj.transferFrom.call(addressarHngFP, addresswztT0Vd, uintB1e3zWP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAO', async () => {
		const FrogDAOsJgUOR3 = await FrogDAO.new({from: "0x0000000000000000000000000000000000000001"});
		const uintxGV6vQv = BigInt("1689")
		const addressbORFiTG = accounts[0]
		const uinttMVC589 = BigInt("1148")
		const addressk8b19Sk = "0x0000000000000000000000000000000000000001"
		const boolOaQgoM = await FrogDAOsJgUOR3.transfer.call(addressbORFiTG, uintxGV6vQv, {from: accounts[3]});
		const boolMBtekoR = await FrogDAOsJgUOR3.transfer.call(addressk8b19Sk, uinttMVC589, {from: accounts[5]});
	});

	it('test for FrogDAO', async () => {
		const FrogDAOHh093pI = await FrogDAO.new({from: accounts[1]});
		const uintG0mE4TK = BigInt("271")
		const address62puSo = accounts[1]
		const addressPpUMcCL = "0x0000000000000000000000000000000000000001"
		const addresslnFAYZ = "0x0000000000000000000000000000000000000001"
		const addressyJpY40F = accounts[2]
		const uint3USxC9 = await FrogDAOHh093pI.totalSupply.call({from: accounts[3]});
		const uintRMkpQpd = await FrogDAOHh093pI.totalSupply.call({from: accounts[4]});
		const uintBIU1904 = await FrogDAOHh093pI.totalSupply.call({from: accounts[4]});
//		const boolZtYNFJl = await FrogDAOHh093pI.transferFrom.call(addressPpUMcCL, address62puSo, uintG0mE4TK, {from: accounts[4]});
//		const uintYkStPMz = await FrogDAOHh093pI.allowance.call(addressyJpY40F, addresslnFAYZ, {from: accounts[2]});

		assert.equal(uint3USxC9, BigInt("1000000000000000000000000"))
		assert.equal(uintBIU1904, BigInt("1000000000000000000000000"))
		assert.equal(uintRMkpQpd, BigInt("1000000000000000000000000"))
		await expect(FrogDAOHh093pI.transferFrom.call(addressPpUMcCL, address62puSo, uintG0mE4TK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})