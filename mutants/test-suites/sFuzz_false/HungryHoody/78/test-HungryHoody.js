const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodynjjhebj = await HungryHoody.new({from: accounts[5]});
		const uint9BG7VS = BigInt("1957")
		const uintzRaGLor = BigInt("1754")
		const uintbx2GU1U = BigInt("106")
		const addressy8LPqQh = accounts[3]
		const uintvkxhP1q = BigInt("1246")
		const uintScLzOyX = BigInt("1099")
		const uintMs8Jyl2 = BigInt("241")
		const uintL4sxwH3 = BigInt("547")
		const uintoBT347Y = BigInt("1661")
		const addressHqt99dY = accounts[3]
		const uintY9lqDMS = await HungryHoodynjjhebj.safeDiv.call(uintzRaGLor, uint9BG7VS, {from: accounts[1]});
//		const boolOMk2lzy = await HungryHoodynjjhebj.transfer.call(addressy8LPqQh, uintbx2GU1U, {from: accounts[3]});
//		const uintSFSOqIG = await HungryHoodynjjhebj.safeMul.call(uintScLzOyX, uintvkxhP1q, {from: accounts[0]});
//		const uintSJvYS4a = await HungryHoodynjjhebj.safeMul.call(uintL4sxwH3, uintMs8Jyl2, {from: accounts[3]});
//		const boolAvT5pH6 = await HungryHoodynjjhebj.transfer.call(addressHqt99dY, uintoBT347Y, {from: accounts[0]});

		assert.equal(uintY9lqDMS, BigInt("0"))
		await expect(HungryHoodynjjhebj.transfer.call(addressy8LPqQh, uintbx2GU1U, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyS313908 = await HungryHoody.new({from: accounts[3]});
		const addressmIs4XOi = accounts[0]
		const addressHgc6e0b = accounts[4]
		const addressY4KHJ5a = accounts[5]
		const addresssD7AysX = accounts[0]
		const addressmLpQhRp = accounts[3]
		const addressKSSTXh = accounts[3]
		const uintwwl8N1H = await HungryHoodyS313908.allowance.call(addressHgc6e0b, addressmIs4XOi, {from: accounts[0]});
		const uintYs3O9fR = await HungryHoodyS313908.allowance.call(addresssD7AysX, addressY4KHJ5a, {from: accounts[2]});
		const uint9CxpZ9 = await HungryHoodyS313908.balanceOf.call(addressmLpQhRp, {from: accounts[3]});
		const uintCCHevBy = await HungryHoodyS313908.balanceOf.call(addressKSSTXh, {from: accounts[3]});

		assert.equal(uint9CxpZ9, BigInt("25000000000000000000"))
		assert.equal(uintCCHevBy, BigInt("25000000000000000000"))
		assert.equal(uintYs3O9fR, BigInt("0"))
		assert.equal(uintwwl8N1H, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyG5UbdNU = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintfoZmF7V = BigInt("1193")
		const uintlgjuIzL = BigInt("1064")
		const uintXHUxRW1 = BigInt("1505")
		const uinte9TV8q8 = BigInt("32")
		const uintEcg8F7U = BigInt("214")
		const addressnBbfM4z = "0x0000000000000000000000000000000000000001"
		const uinttj2GNhg = await HungryHoodyG5UbdNU.safeSub.call(uintlgjuIzL, uintfoZmF7V, {from: accounts[4]});
		const uintT84wxZI = await HungryHoodyG5UbdNU.safeMul.call(uinte9TV8q8, uintXHUxRW1, {from: accounts[5]});
		const boolnvi8g2K = await HungryHoodyG5UbdNU.approve.call(addressnBbfM4z, uintEcg8F7U, {from: accounts[3]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyhb8nQ0w = await HungryHoody.new({from: accounts[3]});
		const uintUKxoRZt = BigInt("619")
		const addressDOvxsuc = accounts[2]
		const addressMld40r = accounts[1]
		const uintaHPI0TX = BigInt("83")
		const addressQiGCE8u = accounts[2]
		const addressFzIA8mZ = accounts[1]
		const addressB4sequK = accounts[1]
		const addresszfaMXOY = "0x0000000000000000000000000000000000000001"
		const addressXw69I55 = accounts[2]
		const uintoH8wEBV = BigInt("1406")
		const addressXfIz1hM = accounts[4]
//		const boolaiV5QX0 = await HungryHoodyhb8nQ0w.transferFrom.call(addressMld40r, addressDOvxsuc, uintUKxoRZt, {from: accounts[1]});
//		const boolN9wqT5L = await HungryHoodyhb8nQ0w.approve.call(addressQiGCE8u, uintaHPI0TX, {from: accounts[1]});
//		const uintcokRYfy = await HungryHoodyhb8nQ0w.allowance.call(addressB4sequK, addressFzIA8mZ, {from: accounts[1]});
//		const uintGblQKGB = await HungryHoodyhb8nQ0w.allowance.call(addressXw69I55, addresszfaMXOY, {from: accounts[2]});
//		const boolpEEdbMu = await HungryHoodyhb8nQ0w.approve.call(addressXfIz1hM, uintoH8wEBV, {from: accounts[2]});

		await expect(HungryHoodyhb8nQ0w.transferFrom.call(addressMld40r, addressDOvxsuc, uintUKxoRZt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyu1VMjWr = await HungryHoody.new({from: accounts[0]});
		const uintvnJS6GN = BigInt("1086")
		const addresstjtDnx = accounts[4]
		const uintBrhY8Sv = BigInt("1273")
		const addressJ6nZoBr = accounts[1]
		const uintP0vo4UP = BigInt("1423")
		const addressqDZt2K = accounts[3]
		const boolcyZF0ch = await HungryHoodyu1VMjWr.transfer.call(addresstjtDnx, uintvnJS6GN, {from: accounts[0]});
//		const boolSlGQE3I = await HungryHoodyu1VMjWr.transfer.call(addressJ6nZoBr, uintBrhY8Sv, {from: accounts[4]});
//		const boole5dFEEO = await HungryHoodyu1VMjWr.transfer.call(addressqDZt2K, uintP0vo4UP, {from: accounts[3]});

		assert.equal(boolcyZF0ch, true)
		await expect(HungryHoodyu1VMjWr.transfer.call(addressJ6nZoBr, uintBrhY8Sv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyYi9MAaM = await HungryHoody.new({from: accounts[3]});
		const uintq2a4a9E = BigInt("1616")
		const uintQyGl1yt = BigInt("991")
		const uintdbTVRje = BigInt("595")
		const uintZrwv9cN = BigInt("1784")
		const uintjadPXei = BigInt("1040")
		const uintlzOALc = BigInt("1603")
		const uintLrUVy7V = await HungryHoodyYi9MAaM.totalSupply.call({from: accounts[1]});
		const uintfoqpXUa = await HungryHoodyYi9MAaM.safeMul.call(uintQyGl1yt, uintq2a4a9E, {from: accounts[0]});
		const uintvD8sxlJ = await HungryHoodyYi9MAaM.safeDiv.call(uintZrwv9cN, uintdbTVRje, {from: accounts[0]});
		const uintCJJB7C1 = await HungryHoodyYi9MAaM.safeSub.call(uintlzOALc, uintjadPXei, {from: accounts[2]});

		assert.equal(uintCJJB7C1, BigInt("563"))
		assert.equal(uintLrUVy7V, BigInt("25000000000000000000"))
		assert.equal(uintfoqpXUa, BigInt("1601456"))
		assert.equal(uintvD8sxlJ, BigInt("2"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyKh40HUW = await HungryHoody.new({from: accounts[2]});
		const uintaS23RYh = BigInt("1712")
		const addressN2qe7d8 = accounts[3]
		const uintxYdiAhg = BigInt("290")
		const uintPelQOZw = BigInt("1829")
		const uintD2hZ1Ra = BigInt("1999")
		const uint44k3rC = BigInt("903")
		const uintNVUHiHh = BigInt("798")
		const addressHA2Jaya = accounts[0]
		const boolhMEDIHD = await HungryHoodyKh40HUW.approve.call(addressN2qe7d8, uintaS23RYh, {from: accounts[3]});
		const uintzeHFAdG = await HungryHoodyKh40HUW.safeDiv.call(uintPelQOZw, uintxYdiAhg, {from: accounts[1]});
		const uintLwza2dn = await HungryHoodyKh40HUW.safeMul.call(uint44k3rC, uintD2hZ1Ra, {from: accounts[0]});
		const booluMMhjxK = await HungryHoodyKh40HUW.approve.call(addressHA2Jaya, uintNVUHiHh, {from: accounts[2]});

		assert.equal(boolhMEDIHD, true)
		assert.equal(booluMMhjxK, true)
		assert.equal(uintLwza2dn, BigInt("1805097"))
		assert.equal(uintzeHFAdG, BigInt("6"))
	});
})