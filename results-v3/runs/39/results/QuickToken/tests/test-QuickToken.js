const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressaEaLpvR = accounts[1]
		const addressVAKBt9O = accounts[1]
		const QuickTokenXJDdXz = await QuickToken.new(addressaEaLpvR, addressVAKBt9O, {from: accounts[4]});
		const uintWiZOdkz = BigInt("646")
		const addressufq2a5 = accounts[0]
		const uintFNvjYZ1 = BigInt("57")
		const addresseXdlhAm = accounts[0]
		const addressv0MgfTG = "0x0000000000000000000000000000000000000001"
		const uintUuGte5Z = BigInt("974")
		const addressxJCxx0O = accounts[0]
		const boolCzrKoSy = await QuickTokenXJDdXz.transfer.call(addressufq2a5, uintWiZOdkz, {from: accounts[2]});
		const boolmxGFGw1 = await QuickTokenXJDdXz.transfer.call(addresseXdlhAm, uintFNvjYZ1, {from: accounts[5]});
		const uintkyrWkQg = await QuickTokenXJDdXz.balanceOf.call(addressv0MgfTG, {from: accounts[2]});
		const addressGQ7dXZh = await QuickTokenXJDdXz.mint.call(addressxJCxx0O, uintUuGte5Z, {from: accounts[3]});

		await expect(QuickTokenXJDdXz.transfer.call(addressufq2a5, uintWiZOdkz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressBQ9GBgl = accounts[2]
		const addressY8ch0l = accounts[4]
		const QuickTokentIcpCQW = await QuickToken.new(addressBQ9GBgl, addressY8ch0l, {from: accounts[1]});
		const uintO2aEs1w = BigInt("1648")
		const addressfldVFzm = accounts[4]
		const addressIHjxCEn = accounts[1]
		const boolvQjHJoS = await QuickTokentIcpCQW.approve.call(addressfldVFzm, uintO2aEs1w, {from: accounts[2]});
		const addresslrmFNCa = await QuickTokentIcpCQW.setMinter.call(addressIHjxCEn, {from: accounts[4]});

		assert.equal(boolvQjHJoS, true)
	});

	it('test for QuickToken', async () => {
		const addresspHzmz0E = accounts[3]
		const addressZ7Yhadp = accounts[1]
		const QuickTokenEb7FGPe = await QuickToken.new(addresspHzmz0E, addressZ7Yhadp, {from: accounts[0]});
		const uintz27VYLQ = BigInt("938")
		const addressPkeZcpF = accounts[2]
		const addressTkHmMmY = accounts[4]
		const addressliFClr9 = accounts[0]
		const uintlpYxvQU = BigInt("570")
		const addressEZIjgAy = accounts[0]
		const addressNfNROEV = "0x0000000000000000000000000000000000000001"
		const addressHPJjwAF = accounts[2]
		const addressqIUl5UQ = accounts[0]
		const booltmJffU3 = await QuickTokenEb7FGPe.approve.call(addressPkeZcpF, uintz27VYLQ, {from: accounts[0]});
		const uintVbZb7XW = await QuickTokenEb7FGPe.balanceOf.call(addressTkHmMmY, {from: accounts[2]});
		const addressssQ0R4Y = await QuickTokenEb7FGPe.setMinter.call(addressliFClr9, {from: accounts[3]});
		const boolFBjFMZr = await QuickTokenEb7FGPe.transferFrom.call(addressNfNROEV, addressEZIjgAy, uintlpYxvQU, {from: accounts[4]});
		const uintRrEcPG = await QuickTokenEb7FGPe.balanceOf.call(addressHPJjwAF, {from: accounts[2]});
		const uintnG6dZMw = await QuickTokenEb7FGPe.balanceOf.call(addressqIUl5UQ, {from: accounts[4]});

		assert.equal(booltmJffU3, true)
		assert.equal(uintVbZb7XW, BigInt("0"))
		await expect(QuickTokenEb7FGPe.setMinter.call(addressliFClr9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressOPgjnJ1 = accounts[0]
		const address9ZvMVG = accounts[2]
		const QuickTokenoEmN3RE = await QuickToken.new(addressOPgjnJ1, address9ZvMVG, {from: accounts[3]});
		const uintscCMc8 = BigInt("1931")
		const addressgXl1Dwq = "0x0000000000000000000000000000000000000001"
		const addressxiukAYH = accounts[1]
		const uintzqY5AZQ = BigInt("416")
		const addresszMjCYH5 = accounts[5]
		const addressCy5L5E = accounts[5]
		const uintBJEDfx6 = BigInt("322")
		const addressGWnnnFB = accounts[1]
		const uintqpIovq = BigInt("1290")
		const addressKciHwrg = accounts[5]
		const addresskKtMws8 = accounts[1]
		const boolElMAZLw = await QuickTokenoEmN3RE.transferFrom.call(addressxiukAYH, addressgXl1Dwq, uintscCMc8, {from: accounts[5]});
		const boolicDKrJV = await QuickTokenoEmN3RE.transferFrom.call(addressCy5L5E, addresszMjCYH5, uintzqY5AZQ, {from: accounts[3]});
		const addressD8JVp31 = await QuickTokenoEmN3RE.mint.call(addressGWnnnFB, uintBJEDfx6, {from: accounts[2]});
		const boolG3b3PJm = await QuickTokenoEmN3RE.transferFrom.call(addresskKtMws8, addressKciHwrg, uintqpIovq, {from: accounts[0]});

		await expect(QuickTokenoEmN3RE.transferFrom.call(addressxiukAYH, addressgXl1Dwq, uintscCMc8, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressvjoY8q1 = accounts[1]
		const addressSCjeTS9 = accounts[5]
		const QuickTokenqw8fVPt = await QuickToken.new(addressvjoY8q1, addressSCjeTS9, {from: accounts[3]});
		const addressTx8ecMA = accounts[4]
		const addressSxovQPp = accounts[5]
		const address6e0djq = accounts[1]
		const uintidbvDBJ = BigInt("2029")
		const addressYRSiODT = accounts[1]
		const addressemTMvmu = accounts[1]
		const addressdiMCd75 = accounts[2]
		const addresslPRDjCm = accounts[2]
		const uintcbLhDte = BigInt("132")
		const addresscmJ9w5J = accounts[1]
		const uintQoxqFkX = await QuickTokenqw8fVPt.allowance.call(addressSxovQPp, addressTx8ecMA, {from: accounts[0]});
		const uintnFsQ5fC = await QuickTokenqw8fVPt.balanceOf.call(address6e0djq, {from: accounts[2]});
		const boolOyqWyJa = await QuickTokenqw8fVPt.transfer.call(addressYRSiODT, uintidbvDBJ, {from: accounts[3]});
		const addressTWn6ZPK = await QuickTokenqw8fVPt.setMinter.call(addressemTMvmu, {from: accounts[4]});
		const uintkcicDt = await QuickTokenqw8fVPt.allowance.call(addresslPRDjCm, addressdiMCd75, {from: accounts[3]});
		const boolUTtcXMO = await QuickTokenqw8fVPt.transfer.call(addresscmJ9w5J, uintcbLhDte, {from: accounts[2]});

		assert.equal(uintQoxqFkX, BigInt("0"))
		assert.equal(uintnFsQ5fC, BigInt("2000000000000"))
		await expect(QuickTokenqw8fVPt.transfer.call(addressYRSiODT, uintidbvDBJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressHDSrXTs = accounts[3]
		const addressIfoQauW = accounts[3]
		const QuickTokenylIKxbs = await QuickToken.new(addressHDSrXTs, addressIfoQauW, {from: accounts[4]});
		const addresscam2sEv = accounts[4]
		const addresshSYoLFP = accounts[4]
		const uintkhUKkO4 = BigInt("1612")
		const addressnP91GoF = accounts[1]
		const uintgFbUVeH = await QuickTokenylIKxbs.balanceOf.call(addresscam2sEv, {from: accounts[2]});
		const uintpU34vSn = await QuickTokenylIKxbs.balanceOf.call(addresshSYoLFP, {from: accounts[4]});
		const boolx7Ey5hd = await QuickTokenylIKxbs.transfer.call(addressnP91GoF, uintkhUKkO4, {from: accounts[3]});

		assert.equal(boolx7Ey5hd, true)
		assert.equal(uintgFbUVeH, BigInt("0"))
		assert.equal(uintpU34vSn, BigInt("0"))
	});

	it('test for QuickToken', async () => {
		const addressf0HTnlX = "0x0000000000000000000000000000000000000001"
		const addresslMnHXLQ = accounts[2]
		const QuickTokengYWHG7B = await QuickToken.new(addressf0HTnlX, addresslMnHXLQ, {from: accounts[2]});
		const uintUBp0NW = BigInt("1628")
		const addressMbXwfxz = accounts[1]
		const addresskWFL15o = accounts[0]
		const addressZVfTxIn = accounts[3]
		const addressJUuKNPw = accounts[3]
		const addressuQAGaz = await QuickTokengYWHG7B.mint.call(addressMbXwfxz, uintUBp0NW, {from: accounts[4]});
		const uintzgqF7Dl = await QuickTokengYWHG7B.allowance.call(addressZVfTxIn, addresskWFL15o, {from: accounts[1]});
		const addressM7omSy1 = await QuickTokengYWHG7B.setMinter.call(addressJUuKNPw, {from: accounts[2]});

		await expect(QuickTokengYWHG7B.mint.call(addressMbXwfxz, uintUBp0NW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressD7kbcvK = accounts[3]
		const addressFKp6dba = accounts[1]
		const QuickTokenEb7FGPe = await QuickToken.new(addressD7kbcvK, addressFKp6dba, {from: accounts[0]});
		const uintFXfU5X0 = BigInt("601")
		const addressRLQK3Eu = accounts[1]
		const uintm4Nfrll = BigInt("26")
		const addressrdiXXZ = accounts[3]
		const uintYvBd8S = BigInt("544")
		const addressCVOMCKs = accounts[2]
		const addressTpuPjve = accounts[2]
		const addressQR4sVK = accounts[5]
		const addressmRH6Hxq = accounts[3]
		const uintegLzIVB = BigInt("570")
		const addresswoSZmfx = accounts[3]
		const addressdgrUNpB = "0x0000000000000000000000000000000000000001"
		const address2xAbl1 = accounts[2]
		const addressF0psU56 = accounts[0]
		const boolJYZSpFw = await QuickTokenEb7FGPe.approve.call(addressRLQK3Eu, uintFXfU5X0, {from: accounts[4]});
		const addressh6G230S = await QuickTokenEb7FGPe.mint.call(addressrdiXXZ, uintm4Nfrll, {from: accounts[1]});
		const booltmJffU3 = await QuickTokenEb7FGPe.approve.call(addressCVOMCKs, uintYvBd8S, {from: accounts[0]});
		const uintVbZb7XW = await QuickTokenEb7FGPe.balanceOf.call(addressTpuPjve, {from: accounts[2]});
		const uintxJs0BaD = await QuickTokenEb7FGPe.balanceOf.call(addressQR4sVK, {from: accounts[4]});
		const uintFPcthxl = await QuickTokenEb7FGPe.balanceOf.call(addressmRH6Hxq, {from: accounts[2]});
		const boolFBjFMZr = await QuickTokenEb7FGPe.transferFrom.call(addressdgrUNpB, addresswoSZmfx, uintegLzIVB, {from: accounts[4]});
		const uintRrEcPG = await QuickTokenEb7FGPe.balanceOf.call(address2xAbl1, {from: accounts[2]});
		const uintnG6dZMw = await QuickTokenEb7FGPe.balanceOf.call(addressF0psU56, {from: accounts[4]});

		assert.equal(boolJYZSpFw, true)
		assert.equal(booltmJffU3, true)
		assert.equal(uintFPcthxl, BigInt("2000000000000"))
		assert.equal(uintVbZb7XW, BigInt("0"))
		assert.equal(uintxJs0BaD, BigInt("0"))
		await expect(QuickTokenEb7FGPe.transferFrom.call(addressdgrUNpB, addresswoSZmfx, uintegLzIVB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addresseFZBUPc = accounts[0]
		const addressoB6oV8U = accounts[3]
		const QuickTokenRwutuKO = await QuickToken.new(addresseFZBUPc, addressoB6oV8U, {from: "0x0000000000000000000000000000000000000001"});
		const addresss8GJYdd = "0x0000000000000000000000000000000000000001"
		const addressRWxWeF = accounts[2]
		const uintqZbgdFP = BigInt("1170")
		const address2vNT6f = accounts[4]
		const uintRpAInxw = BigInt("561")
		const addressiPZ4JTu = accounts[2]
		const uintUIcxOxp = await QuickTokenRwutuKO.allowance.call(addressRWxWeF, addresss8GJYdd, {from: accounts[2]});
		const boolPvmvyeh = await QuickTokenRwutuKO.approve.call(address2vNT6f, uintqZbgdFP, {from: accounts[0]});
		const booldbW02sT = await QuickTokenRwutuKO.transfer.call(addressiPZ4JTu, uintRpAInxw, {from: accounts[5]});
	});
})