const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressXIcntHj = accounts[0]
		const addressDNuXdO8 = accounts[4]
		const QuickTokengcmjlHe = await QuickToken.new(addressXIcntHj, addressDNuXdO8, {from: accounts[1]});
		const addressFHnW6l = accounts[1]
		const addressu1HvgIG = accounts[4]
		const addressLFUX1kB = accounts[2]
		const addressP4yO8I8 = accounts[3]
		const addressCB2iVJt = await QuickTokengcmjlHe.setMinter.call(addressFHnW6l, {from: accounts[4]});
		const uintFYtJ6WQ = await QuickTokengcmjlHe.allowance.call(addressLFUX1kB, addressu1HvgIG, {from: accounts[3]});
		const uintO9x8e0p = await QuickTokengcmjlHe.balanceOf.call(addressP4yO8I8, {from: accounts[0]});

		assert.equal(uintFYtJ6WQ, BigInt("0"))
		assert.equal(uintO9x8e0p, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressWYEFqmx = accounts[0]
		const addressWQQw8oh = accounts[2]
		const QuickTokenMLQvyIs = await QuickToken.new(addressWYEFqmx, addressWQQw8oh, {from: accounts[5]});
		const uintwuzT7qW = BigInt("1453")
		const addressdGiqYuU = accounts[2]
		const uintsxgDjDu = BigInt("1386")
		const addressXKa8Eox = accounts[1]
		const uintPkMmNMQ = BigInt("1742")
		const addresssWMhb2l = accounts[0]
		const addressyIm1kar = accounts[4]
		const addresslMhT2im = "0x0000000000000000000000000000000000000001"
		const boolxdz3kH = await QuickTokenMLQvyIs.approve.call(addressdGiqYuU, uintwuzT7qW, {from: accounts[0]});
		const addressxWDUiNx = await QuickTokenMLQvyIs.mint.call(addressXKa8Eox, uintsxgDjDu, {from: accounts[1]});
		const booltuAaQVs = await QuickTokenMLQvyIs.transferFrom.call(addressyIm1kar, addresssWMhb2l, uintPkMmNMQ, {from: accounts[5]});
		const uintrfhGcvD = await QuickTokenMLQvyIs.balanceOf.call(addresslMhT2im, {from: accounts[1]});

		assert.equal(boolxdz3kH, true)
		await expect(QuickTokenMLQvyIs.mint.call(addressXKa8Eox, uintsxgDjDu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressUuGE0y2 = accounts[4]
		const addresszqEXJRL = "0x0000000000000000000000000000000000000001"
		const QuickTokenMz584bO = await QuickToken.new(addressUuGE0y2, addresszqEXJRL, {from: "0x0000000000000000000000000000000000000001"});
		const uintlMpCPfX = BigInt("164")
		const addressXGYW7U7 = accounts[4]
		const addresswu2OhjA = accounts[3]
		const addressqZF1gU9 = accounts[4]
		const addressWzSAXvt = accounts[4]
		const uint6IWXKw = BigInt("1134")
		const addressFI9CvBO = accounts[5]
		const booly611vEO = await QuickTokenMz584bO.transferFrom.call(addresswu2OhjA, addressXGYW7U7, uintlMpCPfX, {from: accounts[4]});
		const uintC8xbfgd = await QuickTokenMz584bO.allowance.call(addressWzSAXvt, addressqZF1gU9, {from: accounts[3]});
		const addressB21DzwU = await QuickTokenMz584bO.mint.call(addressFI9CvBO, uint6IWXKw, {from: accounts[3]});
	});

	it('test for QuickToken', async () => {
		const addressFWXQRE9 = accounts[5]
		const addressyaQTKt4 = accounts[1]
		const QuickTokenrjf4oQK = await QuickToken.new(addressFWXQRE9, addressyaQTKt4, {from: accounts[2]});
		const uintOmdVrEM = BigInt("1903")
		const addressWL9MELS = accounts[1]
		const uintgRhjqGo = BigInt("1889")
		const addresspu2tKd = accounts[2]
		const addressJiA51si = accounts[1]
		const addressdfIYi2K = accounts[3]
		const uintLXdhphA = BigInt("1283")
		const addresstqg2Yo4 = accounts[3]
		const boolCcBZsS1 = await QuickTokenrjf4oQK.transfer.call(addressWL9MELS, uintOmdVrEM, {from: accounts[0]});
		const booldJhOn1Q = await QuickTokenrjf4oQK.approve.call(addresspu2tKd, uintgRhjqGo, {from: accounts[2]});
		const uint6Z9vdO = await QuickTokenrjf4oQK.allowance.call(addressdfIYi2K, addressJiA51si, {from: "0x0000000000000000000000000000000000000001"});
		const boolKURuA78 = await QuickTokenrjf4oQK.transfer.call(addresstqg2Yo4, uintLXdhphA, {from: accounts[2]});

		await expect(QuickTokenrjf4oQK.transfer.call(addressWL9MELS, uintOmdVrEM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressKsl16Nd = accounts[2]
		const addressfivvOKF = "0x0000000000000000000000000000000000000001"
		const QuickTokenAcPMhcn = await QuickToken.new(addressKsl16Nd, addressfivvOKF, {from: accounts[0]});
		const addressUPgOThS = accounts[4]
		const addressa1I502E = accounts[5]
		const addressCvstF6E = accounts[0]
		const uintlSLlUkR = await QuickTokenAcPMhcn.balanceOf.call(addressUPgOThS, {from: accounts[2]});
		const addressKR7fPoU = await QuickTokenAcPMhcn.setMinter.call(addressa1I502E, {from: accounts[0]});
		const uintSkZlWUf = await QuickTokenAcPMhcn.balanceOf.call(addressCvstF6E, {from: accounts[2]});

		assert.equal(uintlSLlUkR, BigInt("0"))
		await expect(QuickTokenAcPMhcn.setMinter.call(addressa1I502E, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressuaS3vsN = accounts[2]
		const addressRX57qcp = accounts[4]
		const QuickTokenz5bxqCG = await QuickToken.new(addressuaS3vsN, addressRX57qcp, {from: accounts[0]});
		const uintb3PuCv4 = BigInt("398")
		const addresspD2z7k6 = accounts[0]
		const addressVTb8GmF = accounts[5]
		const addressmVDesfG = accounts[4]
		const addressuOyXLGc = accounts[2]
		const uintfO4mtSN = BigInt("414")
		const addressuDEkXXl = accounts[4]
		const address038kV5 = accounts[2]
		const addressK3jGfml = accounts[2]
		const addressLNFd3D1 = accounts[2]
		const boolG2EZwsg = await QuickTokenz5bxqCG.transferFrom.call(addressVTb8GmF, addresspD2z7k6, uintb3PuCv4, {from: accounts[2]});
		const uintRGs5hy = await QuickTokenz5bxqCG.allowance.call(addressuOyXLGc, addressmVDesfG, {from: accounts[1]});
		const bool24sZYv = await QuickTokenz5bxqCG.approve.call(addressuDEkXXl, uintfO4mtSN, {from: "0x0000000000000000000000000000000000000001"});
		const addresslgavEKP = await QuickTokenz5bxqCG.setMinter.call(address038kV5, {from: accounts[1]});
		const uintlFs2kwI = await QuickTokenz5bxqCG.allowance.call(addressLNFd3D1, addressK3jGfml, {from: accounts[2]});

		await expect(QuickTokenz5bxqCG.transferFrom.call(addressVTb8GmF, addresspD2z7k6, uintb3PuCv4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressPAiTFPY = accounts[2]
		const addresso2MkyZe = accounts[5]
		const QuickTokenS684P8 = await QuickToken.new(addressPAiTFPY, addresso2MkyZe, {from: accounts[0]});
		const addressWehqYzL = "0x0000000000000000000000000000000000000001"
		const uintn8jlsYR = BigInt("1459")
		const addressvqwHIZ1 = accounts[2]
		const uinthQWKZ33 = BigInt("816")
		const addressmOGVDCS = accounts[1]
		const addressE77gMlh = accounts[2]
		const uintSUCy07J = BigInt("1040")
		const addressjiEqdSc = accounts[3]
		const uintDbwDGBt = await QuickTokenS684P8.balanceOf.call(addressWehqYzL, {from: accounts[0]});
		const booloyn2y1c = await QuickTokenS684P8.transfer.call(addressvqwHIZ1, uintn8jlsYR, {from: accounts[2]});
		const boolRa7V3AB = await QuickTokenS684P8.approve.call(addressmOGVDCS, uinthQWKZ33, {from: accounts[2]});
		const uintyqquLgv = await QuickTokenS684P8.balanceOf.call(addressE77gMlh, {from: accounts[1]});
		const addressHKZBYrQ = await QuickTokenS684P8.mint.call(addressjiEqdSc, uintSUCy07J, {from: accounts[1]});

		assert.equal(boolRa7V3AB, true)
		assert.equal(booloyn2y1c, true)
		assert.equal(uintDbwDGBt, BigInt("0"))
		assert.equal(uintyqquLgv, BigInt("2000000000000"))
		await expect(QuickTokenS684P8.mint.call(addressjiEqdSc, uintSUCy07J, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressl7IrU0h = accounts[1]
		const addressjW5JLhv = accounts[4]
		const QuickTokenrG0Ej1w = await QuickToken.new(addressl7IrU0h, addressjW5JLhv, {from: accounts[4]});
		const uinttKh5OZS = BigInt("1185")
		const addresscmhQ37q = accounts[1]
		const uintfXJqvN = BigInt("91")
		const addressAr2WdFI = "0x0000000000000000000000000000000000000001"
		const addresszWPNpzC = accounts[2]
		const addressqaAgyEr = accounts[0]
		const addressetl8PG = accounts[4]
		const addressLPFD0DD = accounts[0]
		const addressuJlVsJj = await QuickTokenrG0Ej1w.mint.call(addresscmhQ37q, uinttKh5OZS, {from: accounts[4]});
		const booltvZXyyY = await QuickTokenrG0Ej1w.transfer.call(addressAr2WdFI, uintfXJqvN, {from: accounts[5]});
		const addressVVwCUbC = await QuickTokenrG0Ej1w.setMinter.call(addresszWPNpzC, {from: accounts[3]});
		const uintOY1XQ1Q = await QuickTokenrG0Ej1w.balanceOf.call(addressqaAgyEr, {from: accounts[1]});
		const uintLF7mUhi = await QuickTokenrG0Ej1w.allowance.call(addressLPFD0DD, addressetl8PG, {from: accounts[5]});

		await expect(QuickTokenrG0Ej1w.transfer.call(addressAr2WdFI, uintfXJqvN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})