const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const stringPJ1piW9 = "FWakouPWPuluafvwduQUVXrFsk4ESRJI3XOUoYnP4jIZsbgnFqpcj97tV0zAlQitrfoIiObMAUouPewXLmEHCSbLKkOwul"
		const stringcUyH3de = "NzPem5KkIABwxQNiiL1EpVY46N6wjzMAXu8RqrQqOAN"
		const uintfjbYIUt = BigInt("89")
		const NALrnmQh8j = await NAL.new(stringPJ1piW9, stringcUyH3de, uintfjbYIUt, {from: "0x0000000000000000000000000000000000000001"});
		const uintz7MJghh = BigInt("1833")
		const addresswbgSvNf = accounts[5]
		const addressU9URZDS = accounts[4]
		const boolf25sA3 = await NALrnmQh8j.decreaseAllowance.call(addresswbgSvNf, uintz7MJghh, {from: accounts[2]});
		const stringEtmEm9C = await NALrnmQh8j.name.call({from: accounts[0]});
		const addressHC5uRdb = await NALrnmQh8j.addAdmin.call(addressU9URZDS, {from: accounts[1]});
	});

	it('test for NAL', async () => {
		const NALtuNw03 = await NAL.new({from: accounts[5]});
		const uinteoWQNrT = BigInt("198")
		const addressFlvsqBP = accounts[2]
		const addressi6llRiF = "0x0000000000000000000000000000000000000001"
		const boolUfbDQ5Z = await NALtuNw03.transfer.call(addressFlvsqBP, uinteoWQNrT, {from: accounts[1]});
		const address60KxyF = await NALtuNw03.addAdmin.call(addressi6llRiF, {from: accounts[4]});

		await expect(NALtuNw03.transfer.call(addressFlvsqBP, uinteoWQNrT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALxiDWlrh = await NAL.new({from: accounts[1]});
		const uintoKM4tAT = BigInt("358")
		const addressvhXackt = accounts[5]
		const addressmG6dAPW = accounts[1]
		const addressKxHilLK = accounts[4]
		const uintpzj28eL = BigInt("1836")
		const addressc9Smhi = "0x0000000000000000000000000000000000000001"
		const uintyvDXLd = BigInt("1341")
		const addressgRml7Qq = accounts[1]
		const uintoUNcECg = BigInt("1060")
		const addressvJgAjsG = accounts[2]
		const addressjavpeb = accounts[3]
		const boolm8xr4cb = await NALxiDWlrh.decreaseAllowance.call(addressvhXackt, uintoKM4tAT, {from: accounts[1]});
		const uint256p3NtNI = await NALxiDWlrh.allowance.call(addressKxHilLK, addressmG6dAPW, {from: accounts[0]});
		const boolgUzT77 = await NALxiDWlrh.decreaseAllowance.call(addressc9Smhi, uintpzj28eL, {from: "0x0000000000000000000000000000000000000001"});
		const boolNu2pM9L = await NALxiDWlrh.unlock.call(addressgRml7Qq, uintyvDXLd, {from: accounts[2]});
		const boolqzqEwFB = await NALxiDWlrh.transferFrom.call(addressjavpeb, addressvJgAjsG, uintoUNcECg, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALxiDWlrh.decreaseAllowance.call(addressvhXackt, uintoKM4tAT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALTYiGx3u = await NAL.new({from: accounts[5]});
		const addressRUIjR5O = accounts[4]
		const addressgSGRcII = accounts[1]
		const uintYA5hxEt = BigInt("176")
		const addressqj1pU1 = "0x0000000000000000000000000000000000000001"
		const uint256hYLkLoD = await NALTYiGx3u.balanceOf.call(addressRUIjR5O, {from: accounts[0]});
		await NALTYiGx3u.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256cYQABVA = await NALTYiGx3u.totalSupply.call({from: accounts[0]});
		const addressajrPjAh = await NALTYiGx3u.notFrozen.call(addressgSGRcII, {from: "0x0000000000000000000000000000000000000001"});
		const boolbb74Eed = await NALTYiGx3u.transfer.call(addressqj1pU1, uintYA5hxEt, {from: accounts[3]});

		assert.equal(uint256hYLkLoD, BigInt("0"))
		await expect(NALTYiGx3u.pause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALTYiGx3u = await NAL.new({from: accounts[5]});
		const addresswAhSRTE = accounts[4]
		const addressrwRFPEn = accounts[2]
		const uintruo26n = BigInt("176")
		const addressXxc11cs = "0x0000000000000000000000000000000000000001"
		const uint256hYLkLoD = await NALTYiGx3u.balanceOf.call(addresswAhSRTE, {from: accounts[0]});
		const strings1rqHZm = await NALTYiGx3u.name.call({from: accounts[2]});
		await NALTYiGx3u.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256cYQABVA = await NALTYiGx3u.totalSupply.call({from: accounts[0]});
		const addressajrPjAh = await NALTYiGx3u.notFrozen.call(addressrwRFPEn, {from: "0x0000000000000000000000000000000000000001"});
		const boolbb74Eed = await NALTYiGx3u.transfer.call(addressXxc11cs, uintruo26n, {from: accounts[3]});

		assert.equal(strings1rqHZm, "Personal Token")
		assert.equal(uint256hYLkLoD, BigInt("0"))
		await expect(NALTYiGx3u.pause.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALTYiGx3u = await NAL.new({from: accounts[5]});
		const uintweBIvSi = BigInt("1859")
		const addresswWsjxLA = accounts[2]
		const uintWjZL5g3 = BigInt("944")
		const addressVC7wsi8 = accounts[2]
		const addresshFBdXKU = accounts[4]
		const addresscq399Wm = accounts[1]
		const uintJllWDke = BigInt("176")
		const addressmMPVIV9 = "0x0000000000000000000000000000000000000001"
		const boolqhbTEPw = await NALTYiGx3u.approve.call(addresswWsjxLA, uintweBIvSi, {from: accounts[0]});
		const uint256ZrZrCyy = await NALTYiGx3u.burn.call(uintWjZL5g3, {from: accounts[4]});
		const addresscVsALhb = await NALTYiGx3u.addAdmin.call(addressVC7wsi8, {from: accounts[0]});
		const uint256hYLkLoD = await NALTYiGx3u.balanceOf.call(addresshFBdXKU, {from: accounts[0]});
		await NALTYiGx3u.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256cYQABVA = await NALTYiGx3u.totalSupply.call({from: accounts[0]});
		const addressajrPjAh = await NALTYiGx3u.notFrozen.call(addresscq399Wm, {from: "0x0000000000000000000000000000000000000001"});
		const boolbb74Eed = await NALTYiGx3u.transfer.call(addressmMPVIV9, uintJllWDke, {from: accounts[3]});

		assert.equal(boolqhbTEPw, true)
		await expect(NALTYiGx3u.burn.call(uintWjZL5g3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALunNHhUL = await NAL.new({from: accounts[0]});
		const uintFWauzE3 = BigInt("1688")
		const addresseWOuBnm = accounts[4]
		const addresstxmmsS5 = accounts[4]
		const addressfvnV4rT = "0x0000000000000000000000000000000000000001"
		const uintffIKBb5 = BigInt("1503")
		const addressYHBPen6 = accounts[2]
		const uintq0XnD0 = BigInt("989")
		const addressle0FTWu = "0x0000000000000000000000000000000000000001"
		const addressqqdSkVN = accounts[0]
		const uintgRN9kDx = BigInt("927")
		const addressrEUgAM = accounts[0]
		const booloOS5NKK = await NALunNHhUL.increaseAllowance.call(addresseWOuBnm, uintFWauzE3, {from: accounts[4]});
		const uint256IsoTNWQ = await NALunNHhUL.allowance.call(addressfvnV4rT, addresstxmmsS5, {from: accounts[4]});
		const boolpblu22 = await NALunNHhUL.unlock.call(addressYHBPen6, uintffIKBb5, {from: accounts[3]});
		const boolAD2w3b = await NALunNHhUL.transferFrom.call(addressqqdSkVN, addressle0FTWu, uintq0XnD0, {from: accounts[2]});
		const bool0gBnoQ = await NALunNHhUL.increaseAllowance.call(addressrEUgAM, uintgRN9kDx, {from: accounts[0]});

		assert.equal(booloOS5NKK, true)
		assert.equal(uint256IsoTNWQ, BigInt("0"))
		await expect(NALunNHhUL.unlock.call(addressYHBPen6, uintffIKBb5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALTYiGx3u = await NAL.new({from: accounts[5]});
		const addressIDUsTGB = accounts[5]
		const uintC2mkydq = BigInt("920")
		const addressVtsGV1U = accounts[2]
		const uinteT7rwmQ = BigInt("48")
		const addressLXXXTTd = "0x0000000000000000000000000000000000000001"
		const addressOkJaZ5M = accounts[4]
		const uintBTQi6dM = BigInt("176")
		const addressNExiMG0 = "0x0000000000000000000000000000000000000001"
		const uint256hYLkLoD = await NALTYiGx3u.balanceOf.call(addressIDUsTGB, {from: accounts[0]});
		const booltEH3c2 = await NALTYiGx3u.increaseAllowance.call(addressVtsGV1U, uintC2mkydq, {from: accounts[2]});
		const boolA7tgRV8 = await NALTYiGx3u.transferFrom.call(addressOkJaZ5M, addressLXXXTTd, uinteT7rwmQ, {from: accounts[1]});
		await NALTYiGx3u.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256cYQABVA = await NALTYiGx3u.totalSupply.call({from: accounts[0]});
		const boolbb74Eed = await NALTYiGx3u.transfer.call(addressNExiMG0, uintBTQi6dM, {from: accounts[3]});

		assert.equal(booltEH3c2, true)
		assert.equal(uint256hYLkLoD, BigInt("2000000000000000000000000000"))
		await expect(NALTYiGx3u.transferFrom.call(addressOkJaZ5M, addressLXXXTTd, uinteT7rwmQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALTYiGx3u = await NAL.new({from: accounts[5]});
		const addresszPe9bmM = accounts[4]
		const uintSr28uSX = BigInt("176")
		const addresssxzA3in = "0x0000000000000000000000000000000000000001"
		const uint256hYLkLoD = await NALTYiGx3u.balanceOf.call(addresszPe9bmM, {from: accounts[0]});
		await NALTYiGx3u.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await NALTYiGx3u.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const boolbb74Eed = await NALTYiGx3u.transfer.call(addresssxzA3in, uintSr28uSX, {from: accounts[3]});

		assert.equal(uint256hYLkLoD, BigInt("0"))
		await expect(NALTYiGx3u.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALTYiGx3u = await NAL.new({from: accounts[5]});
		const uintlyApArW = BigInt("454")
		const addressmwKU95o = accounts[3]
		const addressSM4BKj = accounts[4]
		const addressMTXYuxf = await NALTYiGx3u.burnFrom.call(addressmwKU95o, uintlyApArW, {from: accounts[5]});
		const uint256hYLkLoD = await NALTYiGx3u.balanceOf.call(addressSM4BKj, {from: accounts[0]});
		await NALTYiGx3u.pause.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(NALTYiGx3u.burnFrom.call(addressmwKU95o, uintlyApArW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtuNw03 = await NAL.new({from: accounts[5]});
		const uintFHIMAsA = BigInt("250")
		const addressbuSesX4 = accounts[2]
		const addressDB4I3pE = accounts[0]
		const uint8fdvBaPo = await NALtuNw03.decimals.call({from: accounts[2]});
		const boolUfbDQ5Z = await NALtuNw03.transfer.call(addressbuSesX4, uintFHIMAsA, {from: accounts[1]});
		const booltF0h9zP = await NALtuNw03.unfreezeAccount.call(addressDB4I3pE, {from: accounts[2]});

		assert.equal(uint8fdvBaPo, BigInt("18"))
		await expect(NALtuNw03.transfer.call(addressbuSesX4, uintFHIMAsA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALTYiGx3u = await NAL.new({from: accounts[5]});
		const addressY8V7S6 = accounts[5]
		const uintz6UShsN = BigInt("1904")
		const uintVNFyzGX = BigInt("513")
		const addressCVhbfBA = accounts[2]
		const uint256hYLkLoD = await NALTYiGx3u.balanceOf.call(addressY8V7S6, {from: accounts[0]});
		const boolANenyvZ = await NALTYiGx3u.lock.call(addressCVhbfBA, uintVNFyzGX, uintz6UShsN, {from: accounts[5]});

		assert.equal(uint256hYLkLoD, BigInt("2000000000000000000000000000"))
		await expect(NALTYiGx3u.lock.call(addressCVhbfBA, uintVNFyzGX, uintz6UShsN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALJO0ujXK = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrFjn1Bq = BigInt("1337")
		const addresstZG1AfD = "0x0000000000000000000000000000000000000001"
		const addressbaU4kNU = accounts[4]
		const boolBzKQF8e = await NALJO0ujXK.decreaseAllowance.call(addresstZG1AfD, uintrFjn1Bq, {from: "0x0000000000000000000000000000000000000001"});
		const uint256MTnURjY = await NALJO0ujXK.balanceOf.call(addressbaU4kNU, {from: accounts[4]});
	});

	it('test for NAL', async () => {
		const NALtuNw03 = await NAL.new({from: accounts[5]});
		const uintCCyIqZR = BigInt("227")
		const addressYjuVPuv = accounts[2]
		const addressTdI3YBD = "0x0000000000000000000000000000000000000001"
		const uint256VQ4k3Y6 = await NALtuNw03.totalSupply.call({from: accounts[0]});
		const boolUfbDQ5Z = await NALtuNw03.transfer.call(addressYjuVPuv, uintCCyIqZR, {from: accounts[1]});
		const addresshtSq8Xb = await NALtuNw03.addAdmin.call(addressTdI3YBD, {from: accounts[1]});

		assert.equal(uint256VQ4k3Y6, BigInt("2000000000000000000000000000"))
		await expect(NALtuNw03.transfer.call(addressYjuVPuv, uintCCyIqZR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtuNw03 = await NAL.new({from: accounts[5]});
		const addressqgJTDZc = "0x0000000000000000000000000000000000000001"
		const uintCmV681 = BigInt("888")
		const addressaVoNzm = accounts[2]
		const addressxSeeyro = accounts[4]
		const uintAvik8I4 = BigInt("409")
		const addressvMSSsPD = accounts[3]
		await NALtuNw03.renounceAdmin.call({from: accounts[5]});
		const uint256i0zckE0 = await NALtuNw03.balanceOf.call(addressqgJTDZc, {from: accounts[1]});
		const boolPdjDMs = await NALtuNw03.transferFrom.call(addressxSeeyro, addressaVoNzm, uintCmV681, {from: accounts[0]});
		const boolZzUOil = await NALtuNw03.approve.call(addressvMSSsPD, uintAvik8I4, {from: accounts[3]});

		await expect(NALtuNw03.renounceAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtuNw03 = await NAL.new({from: accounts[5]});
		const addressE7LYd04 = accounts[4]
		const uinteSc6jlH = BigInt("897")
		const addressNGmvgWz = accounts[2]
		const addressKGPeGae = accounts[3]
		const addressbMY55Ed = await NALtuNw03.addAdmin.call(addressE7LYd04, {from: accounts[5]});
		const boolPdjDMs = await NALtuNw03.transferFrom.call(addressKGPeGae, addressNGmvgWz, uinteSc6jlH, {from: accounts[0]});

		await expect(NALtuNw03.transferFrom.call(addressKGPeGae, addressNGmvgWz, uinteSc6jlH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtuNw03 = await NAL.new({from: accounts[5]});
		const uintN2QyZA0 = BigInt("228")
		const addressQY8n6H = accounts[2]
		const uintJ67dQwp = BigInt("256")
		const addressBbCTLOn = accounts[1]
		const boolcgF0z7Z = await NALtuNw03.paused.call({from: accounts[2]});
		const boolUfbDQ5Z = await NALtuNw03.transfer.call(addressQY8n6H, uintN2QyZA0, {from: accounts[1]});
		const boolaWhugqz = await NALtuNw03.unlock.call(addressBbCTLOn, uintJ67dQwp, {from: accounts[3]});

		assert.equal(boolcgF0z7Z, false)
		await expect(NALtuNw03.transfer.call(addressQY8n6H, uintN2QyZA0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALtuNw03 = await NAL.new({from: accounts[5]});
		const uintBPD3Ds5 = BigInt("227")
		const addresswGMTse = accounts[3]
		const stringXRFv7pe = await NALtuNw03.name.call({from: accounts[2]});
		const stringAl8Xj1L = await NALtuNw03.symbol.call({from: accounts[4]});
		const boolUfbDQ5Z = await NALtuNw03.transfer.call(addresswGMTse, uintBPD3Ds5, {from: accounts[1]});

		assert.equal(stringAl8Xj1L, "NAL")
		assert.equal(stringXRFv7pe, "Personal Token")
		await expect(NALtuNw03.transfer.call(addresswGMTse, uintBPD3Ds5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALTYiGx3u = await NAL.new({from: accounts[5]});
		const addressXsyWCc3 = accounts[0]
		const addressFAaFlkJ = accounts[5]
		const uintosj0UY = BigInt("609")
		const addressEEINnBg = accounts[2]
		const addressuoQQPLi = await NALTYiGx3u.removeAdmin.call(addressXsyWCc3, {from: accounts[5]});
		const uint256hYLkLoD = await NALTYiGx3u.balanceOf.call(addressFAaFlkJ, {from: accounts[0]});
		const boolNq6TJgz = await NALTYiGx3u.transfer.call(addressEEINnBg, uintosj0UY, {from: accounts[3]});

		await expect(NALTYiGx3u.removeAdmin.call(addressXsyWCc3, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})