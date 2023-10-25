const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyowjNsXf = await HungryHoody.new({from: accounts[5]});
		const uintgMxf5pG = BigInt("304")
		const addressuORBeqv = "0x0000000000000000000000000000000000000001"
		const uintm5VFLXW = BigInt("908")
		const addressWR5jK4V = accounts[4]
		const uintDASa0WT = BigInt("2045")
		const addressyhfE3LT = accounts[1]
		const uintZgblQMX = BigInt("1792")
		const uintj7gByl = BigInt("1582")
		const uintBrUgW8X = BigInt("42")
		const addressTaZ35iQ = accounts[1]
		const addressbsDW8pG = accounts[0]
		const boolWZjieeC = await HungryHoodyowjNsXf.approve.call(addressuORBeqv, uintgMxf5pG, {from: accounts[5]});
		const boolscLko3 = await HungryHoodyowjNsXf.transfer.call(addressWR5jK4V, uintm5VFLXW, {from: "0x0000000000000000000000000000000000000001"});
		const boolC6kXnno = await HungryHoodyowjNsXf.approve.call(addressyhfE3LT, uintDASa0WT, {from: "0x0000000000000000000000000000000000000001"});
		const uint7l7Jlm = await HungryHoodyowjNsXf.safeSub.call(uintj7gByl, uintZgblQMX, {from: accounts[5]});
		const boolQJgnIQF = await HungryHoodyowjNsXf.transferFrom.call(addressbsDW8pG, addressTaZ35iQ, uintBrUgW8X, {from: accounts[4]});

		assert.equal(boolWZjieeC, true)
		await expect(HungryHoodyowjNsXf.transfer.call(addressWR5jK4V, uintm5VFLXW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyofOP5T = await HungryHoody.new({from: accounts[5]});
		const uintjNUAiw2 = BigInt("261")
		const addressesBUIab = accounts[3]
		const uintZHrGGNW = await HungryHoodyofOP5T.totalSupply.call({from: accounts[2]});
		const boolu9P89s = await HungryHoodyofOP5T.transfer.call(addressesBUIab, uintjNUAiw2, {from: accounts[4]});

		assert.equal(uintZHrGGNW, BigInt("25000000000000000000"))
		await expect(HungryHoodyofOP5T.transfer.call(addressesBUIab, uintjNUAiw2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyz9xxS48 = await HungryHoody.new({from: accounts[3]});
		const uintNtlNTUT = BigInt("473")
		const addressHjahLDo = accounts[1]
		const uintLqFL8F3 = BigInt("1754")
		const uintm7rnKMP = BigInt("1285")
		const uintMDWl85h = await HungryHoodyz9xxS48.totalSupply.call({from: accounts[4]});
		const boolLYixXR = await HungryHoodyz9xxS48.transfer.call(addressHjahLDo, uintNtlNTUT, {from: accounts[3]});
		const uintLIKiZbM = await HungryHoodyz9xxS48.safeDiv.call(uintm7rnKMP, uintLqFL8F3, {from: accounts[1]});

		assert.equal(boolLYixXR, true)
		assert.equal(uintLIKiZbM, BigInt("0"))
		assert.equal(uintMDWl85h, BigInt("25000000000000000000"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyTxC2U83 = await HungryHoody.new({from: accounts[5]});
		const uintmb61CKE = BigInt("1468")
		const uintlHJTOCB = BigInt("1556")
		const addressMe6Hfms = accounts[5]
		const uintk6LZofa = BigInt("965")
		const addressZEklTOC = accounts[5]
		const uintpIaD1gP = await HungryHoodyTxC2U83.safeDiv.call(uintlHJTOCB, uintmb61CKE, {from: accounts[4]});
		const uintm10G1t = await HungryHoodyTxC2U83.balanceOf.call(addressMe6Hfms, {from: accounts[2]});
		const boolmN0e3x = await HungryHoodyTxC2U83.approve.call(addressZEklTOC, uintk6LZofa, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolmN0e3x, true)
		assert.equal(uintm10G1t, BigInt("25000000000000000000"))
		assert.equal(uintpIaD1gP, BigInt("1"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyX6Y5vGP = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uintocyguWd = BigInt("342")
		const addressL6LmhD4 = accounts[0]
		const uinttTBGNYQ = BigInt("540")
		const uintifvuVJ9 = BigInt("1489")
		const uintqK2CmXd = BigInt("1083")
		const addressxN3g49z = accounts[4]
		const uintxBF50lp = BigInt("1844")
		const uintXUyRCUm = BigInt("18")
		const uintOPHupac = BigInt("1771")
		const uinta2QG8vI = BigInt("838")
		const boolVFNpR8D = await HungryHoodyX6Y5vGP.transfer.call(addressL6LmhD4, uintocyguWd, {from: accounts[4]});
		const uintM2vjIcv = await HungryHoodyX6Y5vGP.safeMul.call(uintifvuVJ9, uinttTBGNYQ, {from: accounts[5]});
		const boolHIdBL4u = await HungryHoodyX6Y5vGP.transfer.call(addressxN3g49z, uintqK2CmXd, {from: accounts[2]});
		const uintKZbRapt = await HungryHoodyX6Y5vGP.safeDiv.call(uintXUyRCUm, uintxBF50lp, {from: "0x0000000000000000000000000000000000000001"});
		const uintclnCdtO = await HungryHoodyX6Y5vGP.safeMul.call(uinta2QG8vI, uintOPHupac, {from: accounts[3]});
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyA7JeRvu = await HungryHoody.new({from: accounts[0]});
		const addressgImLHV = accounts[1]
		const addressJaRRXfV = accounts[3]
		const addressYnrXmQe = accounts[3]
		const addresszjxVe06 = accounts[4]
		const uintiWmI21i = BigInt("1728")
		const addressLowkdBa = accounts[2]
		const uintPl0tFfP = BigInt("1512")
		const addressRN8JGFW = accounts[3]
		const uinte9TPA3H = await HungryHoodyA7JeRvu.balanceOf.call(addressgImLHV, {from: accounts[1]});
		const uintxaMfide = await HungryHoodyA7JeRvu.allowance.call(addressYnrXmQe, addressJaRRXfV, {from: accounts[4]});
		const uintLJiJvtj = await HungryHoodyA7JeRvu.balanceOf.call(addresszjxVe06, {from: accounts[3]});
		const uintQrbLOiC = await HungryHoodyA7JeRvu.totalSupply.call({from: accounts[5]});
		const boolkRMlNC = await HungryHoodyA7JeRvu.approve.call(addressLowkdBa, uintiWmI21i, {from: accounts[2]});
		const boolHO91np9 = await HungryHoodyA7JeRvu.approve.call(addressRN8JGFW, uintPl0tFfP, {from: accounts[3]});

		assert.equal(boolHO91np9, true)
		assert.equal(boolkRMlNC, true)
		assert.equal(uintLJiJvtj, BigInt("0"))
		assert.equal(uintQrbLOiC, BigInt("25000000000000000000"))
		assert.equal(uinte9TPA3H, BigInt("0"))
		assert.equal(uintxaMfide, BigInt("0"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyowjNsXf = await HungryHoody.new({from: accounts[5]});
		const uintUYAm9kj = BigInt("304")
		const addressn4gSMhQ = "0x0000000000000000000000000000000000000001"
		const uintGBtNa7C = BigInt("690")
		const addressuM7IiUw = "0x0000000000000000000000000000000000000001"
		const addressNoALJRc = accounts[1]
		const uintSuglME7 = BigInt("2045")
		const addressTRhTt5 = accounts[1]
		const uintsWfNCpy = BigInt("1808")
		const uintVPzunxC = BigInt("1195")
		const uintKwPLorP = BigInt("955")
		const uintrMPyu7D = BigInt("1281")
		const uintAqhI3m1 = BigInt("1792")
		const uintLSq1Vgt = BigInt("1582")
		const uint9da6KU = BigInt("42")
		const addressRm6LsOl = accounts[1]
		const addressCSfGurj = accounts[0]
		const boolWZjieeC = await HungryHoodyowjNsXf.approve.call(addressn4gSMhQ, uintUYAm9kj, {from: accounts[5]});
		const boolQZXx2l = await HungryHoodyowjNsXf.transferFrom.call(addressNoALJRc, addressuM7IiUw, uintGBtNa7C, {from: accounts[3]});
		const boolC6kXnno = await HungryHoodyowjNsXf.approve.call(addressTRhTt5, uintSuglME7, {from: "0x0000000000000000000000000000000000000001"});
		const uintVxSMtd0 = await HungryHoodyowjNsXf.safeDiv.call(uintVPzunxC, uintsWfNCpy, {from: accounts[3]});
		const uint37ADQy = await HungryHoodyowjNsXf.safeSub.call(uintrMPyu7D, uintKwPLorP, {from: accounts[2]});
		const uint7l7Jlm = await HungryHoodyowjNsXf.safeSub.call(uintLSq1Vgt, uintAqhI3m1, {from: accounts[5]});
		const boolQJgnIQF = await HungryHoodyowjNsXf.transferFrom.call(addressCSfGurj, addressRm6LsOl, uint9da6KU, {from: accounts[4]});

		assert.equal(boolWZjieeC, true)
		await expect(HungryHoodyowjNsXf.transferFrom.call(addressNoALJRc, addressuM7IiUw, uintGBtNa7C, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})