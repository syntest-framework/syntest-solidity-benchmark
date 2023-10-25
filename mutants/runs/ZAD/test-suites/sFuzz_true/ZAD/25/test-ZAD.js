const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADfPHKqBP = await ZAD.new({from: accounts[5]});
		const addressfAJythu = accounts[4]
		const addressGPA00w = accounts[0]
		const uint256M4HGiqJ = await ZADfPHKqBP.totalSupply.call({from: accounts[0]});
		const uint256NFu1uYZ = await ZADfPHKqBP.totalSupply.call({from: accounts[5]});
		const uint256jFTqlY = await ZADfPHKqBP.allowance.call(addressGPA00w, addressfAJythu, {from: accounts[1]});

		assert.equal(uint256M4HGiqJ, BigInt("100000000000000000000000000"))
		assert.equal(uint256NFu1uYZ, BigInt("100000000000000000000000000"))
		assert.equal(uint256jFTqlY, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADGgJguYv = await ZAD.new({from: accounts[2]});
		const addressgVWlrk = accounts[4]
		const addressrA5Fayh = accounts[3]
		const uintz0CKNgA = BigInt("1203")
		const addressY1WRRAW = accounts[4]
		const uintgoauRlW = BigInt("321")
		const addressolmd4K5 = accounts[2]
		const uint256XekN9f = await ZADGgJguYv.allowance.call(addressrA5Fayh, addressgVWlrk, {from: accounts[4]});
		const booltJVWig7 = await ZADGgJguYv.decreaseAllowance.call(addressY1WRRAW, uintz0CKNgA, {from: accounts[4]});
		const boolabWLW3 = await ZADGgJguYv.approve.call(addressolmd4K5, uintgoauRlW, {from: accounts[3]});
		const stringBIi0JVE = await ZADGgJguYv.symbol.call({from: accounts[0]});
		const stringXn6caLV = await ZADGgJguYv.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256XekN9f, BigInt("0"))
		await expect(ZADGgJguYv.decreaseAllowance.call(addressY1WRRAW, uintz0CKNgA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADjZSdLa = await ZAD.new({from: accounts[4]});
		const addressHu90ayy = "0x0000000000000000000000000000000000000001"
		const uintoYb36I7 = BigInt("1004")
		const addressebRumC1 = accounts[5]
		const addresswf76dS = accounts[2]
		const uint256H6AuE4r = await ZADjZSdLa.balanceOf.call(addressHu90ayy, {from: accounts[1]});
		const boolHqL9jAW = await ZADjZSdLa.transferFrom.call(addresswf76dS, addressebRumC1, uintoYb36I7, {from: accounts[0]});

		assert.equal(uint256H6AuE4r, BigInt("0"))
		await expect(ZADjZSdLa.transferFrom.call(addresswf76dS, addressebRumC1, uintoYb36I7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADKHpQ9ff = await ZAD.new({from: accounts[1]});
		const uinthuJMq4i = BigInt("874")
		const addressGSH4pzL = accounts[0]
		const address4LQVTa = accounts[2]
		const addressrUBf68 = accounts[0]
		const uintdnGLI1Y = BigInt("1607")
		const addressxLgEf1T = accounts[3]
		const uintKWj2fBL = BigInt("1547")
		const addressFPKz834 = accounts[1]
		const boolHvP8VVn = await ZADKHpQ9ff.transfer.call(addressGSH4pzL, uinthuJMq4i, {from: accounts[4]});
		const uint256l3p6DOC = await ZADKHpQ9ff.allowance.call(addressrUBf68, address4LQVTa, {from: accounts[4]});
		const booltedHCU = await ZADKHpQ9ff.approve.call(addressxLgEf1T, uintdnGLI1Y, {from: accounts[2]});
		const boolv71vw3u = await ZADKHpQ9ff.approve.call(addressFPKz834, uintKWj2fBL, {from: accounts[3]});
		const stringhDS2pDH = await ZADKHpQ9ff.name.call({from: accounts[4]});

		await expect(ZADKHpQ9ff.transfer.call(addressGSH4pzL, uinthuJMq4i, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADLEa1o8l = await ZAD.new({from: accounts[2]});
		const addressP6n3oOv = accounts[4]
		const addressG8g1oaZ = "0x0000000000000000000000000000000000000001"
		const uintYZf06rN = BigInt("1214")
		const addressk7dCpRL = accounts[0]
		const uint256MseeeO9 = await ZADLEa1o8l.allowance.call(addressG8g1oaZ, addressP6n3oOv, {from: accounts[0]});
		const uint256eRjHeg1 = await ZADLEa1o8l.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolHRHah3N = await ZADLEa1o8l.increaseAllowance.call(addressk7dCpRL, uintYZf06rN, {from: accounts[2]});

		assert.equal(boolHRHah3N, true)
		assert.equal(uint256MseeeO9, BigInt("0"))
		assert.equal(uint256eRjHeg1, BigInt("100000000000000000000000000"))
	});

	it('test for ZAD', async () => {
		const ZADnEOcbKH = await ZAD.new({from: accounts[3]});
		const uintAZgwP7L = BigInt("1086")
		const addressUJwmuk4 = accounts[4]
		const uintUYDCQdA = BigInt("908")
		const addressZ8kYX5 = "0x0000000000000000000000000000000000000001"
		const addressrVjeE6x = accounts[1]
		const uintXEXElMy = BigInt("872")
		const address2E23Ob = accounts[1]
		const uint256AoLVEUh = await ZADnEOcbKH.totalSupply.call({from: accounts[3]});
		const boolTLiDsaC = await ZADnEOcbKH.increaseAllowance.call(addressUJwmuk4, uintAZgwP7L, {from: accounts[0]});
		const boolFjddnKP = await ZADnEOcbKH.approve.call(addressZ8kYX5, uintUYDCQdA, {from: accounts[0]});
		const uint256YoFO4Pk = await ZADnEOcbKH.balanceOf.call(addressrVjeE6x, {from: accounts[1]});
		const boolgmkYmhr = await ZADnEOcbKH.increaseAllowance.call(address2E23Ob, uintXEXElMy, {from: accounts[2]});

		assert.equal(boolFjddnKP, true)
		assert.equal(boolTLiDsaC, true)
		assert.equal(boolgmkYmhr, true)
		assert.equal(uint256AoLVEUh, BigInt("100000000000000000000000000"))
		assert.equal(uint256YoFO4Pk, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADfpEXUSS = await ZAD.new({from: accounts[3]});
		const addressNSd1njc = accounts[1]
		const addressHNuJ6f = accounts[0]
		const uintQ0uTcjD = BigInt("25")
		const addressGbPXFc = accounts[4]
		const uintz9vwmM6 = BigInt("1732")
		const addressmC7LII = accounts[0]
		const uintuCwg0Z = BigInt("1754")
		const addressV8jHF6 = accounts[4]
		const stringzulYMZu = await ZADfpEXUSS.symbol.call({from: accounts[5]});
		const uint256thvs8g4 = await ZADfpEXUSS.allowance.call(addressHNuJ6f, addressNSd1njc, {from: accounts[4]});
		const boolm74tDt = await ZADfpEXUSS.approve.call(addressGbPXFc, uintQ0uTcjD, {from: accounts[3]});
		const boolADzBE7V = await ZADfpEXUSS.decreaseAllowance.call(addressmC7LII, uintz9vwmM6, {from: accounts[4]});
		const boolijRRYb = await ZADfpEXUSS.transfer.call(addressV8jHF6, uintuCwg0Z, {from: accounts[5]});

		assert.equal(boolm74tDt, true)
		assert.equal(stringzulYMZu, "ZAD")
		assert.equal(uint256thvs8g4, BigInt("0"))
		await expect(ZADfpEXUSS.decreaseAllowance.call(addressmC7LII, uintz9vwmM6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADjZSdLa = await ZAD.new({from: accounts[4]});
		const addresssINN7pw = accounts[3]
		const addressweBKpOf = accounts[5]
		const uintFEjyCoD = BigInt("1004")
		const addressqg9QjTw = accounts[6]
		const addressaVs7lfo = accounts[3]
		const uint256Q5M1ClN = await ZADjZSdLa.allowance.call(addressweBKpOf, addresssINN7pw, {from: accounts[1]});
		const uint8E7TGTw1 = await ZADjZSdLa.decimals.call({from: accounts[2]});
		const boolHqL9jAW = await ZADjZSdLa.transferFrom.call(addressaVs7lfo, addressqg9QjTw, uintFEjyCoD, {from: accounts[0]});
		const stringCM0oj8h = await ZADjZSdLa.name.call({from: accounts[1]});

		assert.equal(uint256Q5M1ClN, BigInt("0"))
		assert.equal(uint8E7TGTw1, BigInt("18"))
		await expect(ZADjZSdLa.transferFrom.call(addressaVs7lfo, addressqg9QjTw, uintFEjyCoD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADjZSdLa = await ZAD.new({from: accounts[4]});
		const uintvpfyP7y = BigInt("78")
		const addressSAL7Yb3 = accounts[6]
		const addressP2qe46 = accounts[2]
		const uintHDuDymK = BigInt("785")
		const addressGzot9RA = accounts[0]
		const addressNwQaZhc = "0x0000000000000000000000000000000000000001"
		const stringi2MYNIa = await ZADjZSdLa.name.call({from: accounts[2]});
		const boolHqL9jAW = await ZADjZSdLa.transferFrom.call(addressP2qe46, addressSAL7Yb3, uintvpfyP7y, {from: accounts[0]});
		const boolJUyffNd = await ZADjZSdLa.transferFrom.call(addressNwQaZhc, addressGzot9RA, uintHDuDymK, {from: accounts[3]});

		assert.equal(stringi2MYNIa, "Zadkiel")
		await expect(ZADjZSdLa.transferFrom.call(addressP2qe46, addressSAL7Yb3, uintvpfyP7y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADGgJguYv = await ZAD.new({from: accounts[2]});
		const addresscSKvYTU = accounts[4]
		const addressf5AIPQ3 = accounts[3]
		const uintnVRdUPV = BigInt("310")
		const uintzQ7wIme = BigInt("1836")
		const addressO1Ez7we = accounts[4]
		const uintPr3u0oP = BigInt("1203")
		const addressXU68Sb = accounts[5]
		const uintTuwHU4n = BigInt("321")
		const addressx2SoJWN = accounts[2]
		const uint256XekN9f = await ZADGgJguYv.allowance.call(addressf5AIPQ3, addresscSKvYTU, {from: accounts[4]});
		const uint256squgxKf = await ZADGgJguYv._burn.call(uintnVRdUPV, {from: "0x0000000000000000000000000000000000000001"});
		const boolgiZwdBS = await ZADGgJguYv.decreaseAllowance.call(addressO1Ez7we, uintzQ7wIme, {from: accounts[1]});
		const booltJVWig7 = await ZADGgJguYv.decreaseAllowance.call(addressXU68Sb, uintPr3u0oP, {from: accounts[4]});
		const boolabWLW3 = await ZADGgJguYv.approve.call(addressx2SoJWN, uintTuwHU4n, {from: accounts[3]});

		assert.equal(uint256XekN9f, BigInt("0"))
		await expect(ZADGgJguYv._burn.call(uintnVRdUPV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADrCAPv8p = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrSeab7t = BigInt("58")
		const addressqF3ng4e = accounts[0]
		const addressp8mz0zd = accounts[3]
		const uintXK6o3Vx = BigInt("808")
		const addresslAW9pT8 = accounts[4]
		const addressEyewSGV = accounts[0]
		const uintUQGJ06J = BigInt("1544")
		const uinty3tXrFX = BigInt("1628")
		const addresscQSxLe5 = accounts[2]
		const boolJJnQVJK = await ZADrCAPv8p.transferFrom.call(addressp8mz0zd, addressqF3ng4e, uintrSeab7t, {from: "0x0000000000000000000000000000000000000001"});
		const boolaasjAPb = await ZADrCAPv8p.transferFrom.call(addressEyewSGV, addresslAW9pT8, uintXK6o3Vx, {from: accounts[0]});
		const uint256YSseKoc = await ZADrCAPv8p._burn.call(uintUQGJ06J, {from: accounts[3]});
		const boolndUMdnn = await ZADrCAPv8p.transfer.call(addresscQSxLe5, uinty3tXrFX, {from: "0x0000000000000000000000000000000000000001"});
		const stringoGDIC9s = await ZADrCAPv8p.symbol.call({from: accounts[2]});
	});
})