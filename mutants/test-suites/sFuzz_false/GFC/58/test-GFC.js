const GFC = artifacts.require("GFC");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GFC', (accounts) => {
	it('test for GFC', async () => {
		const uintg0YIm5 = BigInt("442")
		const stringGvxgq9e = "8Qpgwr57nYtQP94O8zCxhNfXuV3aqeUiVRo0gnjT9kdKO4jes8NUw"
		const stringq317DMi = "R1dheilwhXL1"
		const GFChDNxe9I = await GFC.new(uintg0YIm5, stringGvxgq9e, stringq317DMi, {from: accounts[1]});
		const uintIonPuMX = BigInt("1155")
		const addresskZ9w4lu = accounts[0]
		const uintnZdtzCR = BigInt("825")
		const addressFs3vYVs = accounts[5]
		const byteg6okOjF = "0x150919111008031c1b0a"
		const uintnlNAOzA = BigInt("3")
		const addressZIkJgC = accounts[4]
		const uintKBVvh91 = BigInt("1643")
		const addresspUsDcD = accounts[2]
		const address3rUcaD = accounts[4]
		const booleIqXgtI = await GFChDNxe9I.approve.call(addresskZ9w4lu, uintIonPuMX, {from: accounts[1]});
//		const boolhTyYFG2 = await GFChDNxe9I.transfer.call(addressFs3vYVs, uintnZdtzCR, {from: accounts[2]});
//		const boolssuSYAq = await GFChDNxe9I.approveAndCall.call(addressZIkJgC, uintnlNAOzA, byteg6okOjF, {from: accounts[1]});
//		const boolhOVzCoc = await GFChDNxe9I.transferFrom.call(address3rUcaD, addresspUsDcD, uintKBVvh91, {from: accounts[2]});

		assert.equal(booleIqXgtI, true)
		await expect(GFChDNxe9I.transfer.call(addressFs3vYVs, uintnZdtzCR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintVBNeyoc = BigInt("1057")
		const stringNVqoViT = "tXT"
		const stringUQx00AT = "YEmHCjC0cS0M"
		const GFCTkf1Mi = await GFC.new(uintVBNeyoc, stringNVqoViT, stringUQx00AT, {from: accounts[4]});
		const uintq6z1sO = BigInt("1633")
		const bytes1Up2vL = "0x0c1f121e1a1d1e0703020c0e0d"
		const uintstos2K = BigInt("922")
		const addressN5qa6k7 = accounts[3]
		const uintm6BwS8 = BigInt("754")
		const uintQ9nhsYd = BigInt("1542")
		const addressPN9QByZ = accounts[2]
		const bytey0C3kce = "0x0c19060c1505151d050309010520190b1d0401021e0d110a04010b07010f0510"
		const uintvpL2s1s = BigInt("961")
		const addressAjeJcG = accounts[2]
//		const booluQyiRIz = await GFCTkf1Mi.burn.call(uintq6z1sO, {from: accounts[2]});
//		const boolFka319 = await GFCTkf1Mi.approveAndCall.call(addressN5qa6k7, uintstos2K, bytes1Up2vL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolIcLiT45 = await GFCTkf1Mi.burn.call(uintm6BwS8, {from: accounts[0]});
//		const boolbajocbN = await GFCTkf1Mi.approve.call(addressPN9QByZ, uintQ9nhsYd, {from: accounts[1]});
//		const boolNOAo7lr = await GFCTkf1Mi.approveAndCall.call(addressAjeJcG, uintvpL2s1s, bytey0C3kce, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GFCTkf1Mi.burn.call(uintq6z1sO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintXqMYsyB = BigInt("15")
		const stringEfKsZaA = "oQELt17JVd81cV424pLXuwLgqjstEksVIN"
		const stringqPOJ2WJ = "hNSKPGrUDDLMMrBaKgmLcl8GDitjzRFPOl8NsmBlQCuidM9pAJQSiwKnCSLqgGqw2u8APGVe8ofDn5hpVtvNLiLy3"
		const GFCNpLuiKd = await GFC.new(uintXqMYsyB, stringEfKsZaA, stringqPOJ2WJ, {from: accounts[4]});
		const uintepsIPR6 = BigInt("955")
		const addressa09iHQ6 = "0x0000000000000000000000000000000000000001"
		const byteQNiTg0B = "0x0d010c0101030702162006061d"
		const uintVj6wp61 = BigInt("1155")
		const addressOvUmDtp = "0x0000000000000000000000000000000000000001"
		const uintZvtrldo = BigInt("1587")
		const boolwhLeICl = await GFCNpLuiKd.transfer.call(addressa09iHQ6, uintepsIPR6, {from: accounts[4]});
//		const boolEGE87tz = await GFCNpLuiKd.approveAndCall.call(addressOvUmDtp, uintVj6wp61, byteQNiTg0B, {from: accounts[5]});
//		const boolJektQmP = await GFCNpLuiKd.burn.call(uintZvtrldo, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolwhLeICl, true)
		await expect(GFCNpLuiKd.approveAndCall.call(addressOvUmDtp, uintVj6wp61, byteQNiTg0B, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintgBcJMQ5 = BigInt("529")
		const stringvNb8gi = "tOM9XtciAYAoWplj2UDm4YbNM9"
		const stringJsJJdv = "Y2wNcicayEEwkEF854gnk6hTYo1oWMSpNwV7rKSXcxi0fNI9jd8ObTbtHO0QpfvMMc6WEs8HqtVYnhyPt2khejtut"
		const GFCQjn99IE = await GFC.new(uintgBcJMQ5, stringvNb8gi, stringJsJJdv, {from: accounts[0]});
		const uintSfEQlB7 = BigInt("1288")
		const addressN9Lorr4 = accounts[0]
		const uintq9eFYAL = BigInt("1411")
		const addresschPJCr4 = accounts[1]
		const addressSq6Pzh9 = accounts[5]
		const uintkkbyuFw = BigInt("984")
		const addressFB4kafV = accounts[3]
//		const boolCFVRZxR = await GFCQjn99IE.burnFrom.call(addressN9Lorr4, uintSfEQlB7, {from: accounts[2]});
//		const booliooPSG = await GFCQjn99IE.transferFrom.call(addressSq6Pzh9, addresschPJCr4, uintq9eFYAL, {from: accounts[0]});
//		const boolrqaFxZO = await GFCQjn99IE.approve.call(addressFB4kafV, uintkkbyuFw, {from: accounts[5]});

		await expect(GFCQjn99IE.burnFrom.call(addressN9Lorr4, uintSfEQlB7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintPW9aP4 = BigInt("15")
		const stringEfKsZaA = "oQELt17JVd81cV424pLXuwLgqjstEksVIN"
		const stringqPOJ2WJ = "hNSKPGrUDDLMMrBaKgmLcl8GDitjzRFPOl8NsmBlQCuidM9pAJQSiwKnCSLqgGqw2u8APGVe8ofDn5hpVtvNLiLy3"
		const GFCNpLuiKd = await GFC.new(uintPW9aP4, stringEfKsZaA, stringqPOJ2WJ, {from: accounts[4]});
		const uintkbTKPWN = BigInt("112")
		const addressktXXRXy = accounts[3]
		const addressfKSnNxH = accounts[3]
		const uintkwxssBO = BigInt("955")
		const addressBuEb4r8 = "0x0000000000000000000000000000000000000001"
		const bytealmeuOi = "0x0d010c0101030702162006061d"
		const uintxlVdkF0 = BigInt("1155")
		const addressjo61cHd = "0x0000000000000000000000000000000000000001"
		const bytei3jRq3L = "0x1d07041313000c1c0503081c140e14120a121a18170d1f181913"
		const uintsDfC8r = BigInt("998")
		const addressN8KANwP = accounts[3]
		const uintZ92uyO3 = BigInt("1582")
//		const boolLz5VBOf = await GFCNpLuiKd.transferFrom.call(addressfKSnNxH, addressktXXRXy, uintkbTKPWN, {from: accounts[4]});
//		const boolwhLeICl = await GFCNpLuiKd.transfer.call(addressBuEb4r8, uintkwxssBO, {from: accounts[4]});
//		const boolEGE87tz = await GFCNpLuiKd.approveAndCall.call(addressjo61cHd, uintxlVdkF0, bytealmeuOi, {from: accounts[5]});
//		const booly8Qk2bC = await GFCNpLuiKd.approveAndCall.call(addressN8KANwP, uintsDfC8r, bytei3jRq3L, {from: accounts[5]});
//		const boolJektQmP = await GFCNpLuiKd.burn.call(uintZ92uyO3, {from: "0x0000000000000000000000000000000000000001"});

		await expect(GFCNpLuiKd.transferFrom.call(addressfKSnNxH, addressktXXRXy, uintkbTKPWN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GFC', async () => {
		const uintyU44rRt = BigInt("10")
		const stringru982R5 = "iLKxq2suu"
		const stringPEyGSFz = "tyIUnefdaEN8y4Y9xEzAYk9qSpv84Y6pOFgiJ4H0LuuAGOJUAj8VWqnUMih3lAcIe"
		const GFCvWp8n0b = await GFC.new(uintyU44rRt, stringru982R5, stringPEyGSFz, {from: "0x0000000000000000000000000000000000000001"});
		const uinthL3FxQw = BigInt("1172")
		const addressLXI5jF8 = "0x0000000000000000000000000000000000000001"
		const addressfoJLi0B = "0x0000000000000000000000000000000000000001"
		const uintWZeGp8g = BigInt("1121")
		const addressOAR5Tz8 = accounts[5]
		const boolbP0kNg3 = await GFCvWp8n0b.transferFrom.call(addressfoJLi0B, addressLXI5jF8, uinthL3FxQw, {from: accounts[1]});
		const boolbaPMJRy = await GFCvWp8n0b.transfer.call(addressOAR5Tz8, uintWZeGp8g, {from: accounts[1]});
	});
})