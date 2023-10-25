const MIMOToken = artifacts.require("MIMOToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MIMOToken', (accounts) => {
	it('test for MIMOToken', async () => {
		const MIMOTokenCwbMta6 = await MIMOToken.new({from: accounts[3]});
		const addressHnXXII6 = accounts[4]
		const addressUVP27u1 = accounts[3]
		const addressOY4Tyz = accounts[0]
		const uintoQSG9ha = BigInt("1654")
		const uintTJEKBgL = await MIMOTokenCwbMta6.totalSupply.call({from: accounts[2]});
		const uintPJKziiG = await MIMOTokenCwbMta6.allowance.call(addressUVP27u1, addressHnXXII6, {from: "0x0000000000000000000000000000000000000001"});
		const uints9zFZIQ = await MIMOTokenCwbMta6.balanceOf.call(addressOY4Tyz, {from: accounts[1]});
		const uint256iyhHSC2 = await MIMOTokenCwbMta6.getFee.call(uintoQSG9ha, {from: accounts[0]});

		assert.equal(uint256iyhHSC2, BigInt("50000000000000000"))
		assert.equal(uintPJKziiG, BigInt("0"))
		assert.equal(uintTJEKBgL, BigInt("16000000000000000000000000"))
		assert.equal(uints9zFZIQ, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenqiaWfbQ = await MIMOToken.new({from: accounts[4]});
		const uintBbCB5y9 = BigInt("1036")
		const addressakxdktN = accounts[5]
		const addresstvEtJYB = accounts[3]
		const uintB04JucB = BigInt("349")
		const uint256Pj2K3af = await MIMOTokenqiaWfbQ.setFeeRate.call(uintBbCB5y9, {from: accounts[2]});
		const uintUHEnJ1W = await MIMOTokenqiaWfbQ.totalSupply.call({from: accounts[2]});
		const uint2klwal = await MIMOTokenqiaWfbQ.allowance.call(addresstvEtJYB, addressakxdktN, {from: accounts[1]});
		const uint256wwlcL8O = await MIMOTokenqiaWfbQ.setFeeRate.call(uintB04JucB, {from: accounts[3]});

		assert.equal(uint2klwal, BigInt("0"))
		assert.equal(uintUHEnJ1W, BigInt("16000000000000000000000000"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenkJlIrwB = await MIMOToken.new({from: accounts[0]});
		const addressfoHwWFb = accounts[3]
		const uintk6uI8Hz = BigInt("450")
		const uintJmfTfEa = BigInt("499")
		const addressXRjwjID = accounts[5]
		const uintmKs49j = BigInt("961")
		const addressLI99FEv = accounts[4]
		const uintVlp7Qa = await MIMOTokenkJlIrwB.totalSupply.call({from: accounts[5]});
		const uintos6b6EF = await MIMOTokenkJlIrwB.balanceOf.call(addressfoHwWFb, {from: accounts[5]});
		const uint256s2wpZll = await MIMOTokenkJlIrwB.setMinFee.call(uintk6uI8Hz, {from: accounts[3]});
		const booldGhXwP = await MIMOTokenkJlIrwB.approve.call(addressXRjwjID, uintJmfTfEa, {from: accounts[4]});
		const uint256VfWyts = await MIMOTokenkJlIrwB.setFeeRate.call(uintmKs49j, {from: accounts[5]});
		const uintON94wgx = await MIMOTokenkJlIrwB.balanceOf.call(addressLI99FEv, {from: accounts[3]});

		assert.equal(booldGhXwP, true)
		assert.equal(uintON94wgx, BigInt("0"))
		assert.equal(uintVlp7Qa, BigInt("16000000000000000000000000"))
		assert.equal(uintos6b6EF, BigInt("0"))
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenb0QEgF6 = await MIMOToken.new({from: "0x0000000000000000000000000000000000000001"});
		const uintx3M9bn3 = BigInt("380")
		const addressARJzfoB = accounts[1]
		const addressGwItLbF = "0x0000000000000000000000000000000000000001"
		const addresszgSwIFe = accounts[4]
		const boolnKVAhz = await MIMOTokenb0QEgF6.approve.call(addressARJzfoB, uintx3M9bn3, {from: accounts[1]});
		const uintF8adJCi = await MIMOTokenb0QEgF6.allowance.call(addresszgSwIFe, addressGwItLbF, {from: accounts[1]});
	});

	it('test for MIMOToken', async () => {
		const MIMOTokeno0HlC6U = await MIMOToken.new({from: accounts[3]});
		const uintwBfUiWl = BigInt("1654")
		const addressgJYB2wn = accounts[2]
		const uintQd8xSa = BigInt("718")
		const addressrYiBLnN = accounts[0]
		const addressmHC1aPW = accounts[1]
		const bool3vGOot = await MIMOTokeno0HlC6U.approve.call(addressgJYB2wn, uintwBfUiWl, {from: accounts[2]});
		const uintrhitnOw = await MIMOTokeno0HlC6U.totalSupply.call({from: accounts[5]});
		const boolXQScnRK = await MIMOTokeno0HlC6U.transferFrom.call(addressmHC1aPW, addressrYiBLnN, uintQd8xSa, {from: accounts[0]});

		assert.equal(bool3vGOot, true)
		assert.equal(uintrhitnOw, BigInt("16000000000000000000000000"))
		await expect(MIMOTokeno0HlC6U.transferFrom.call(addressmHC1aPW, addressrYiBLnN, uintQd8xSa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenPkl5Mdr = await MIMOToken.new({from: accounts[4]});
		const addressHaNo3ZP = accounts[3]
		const addressBY5vgp5 = accounts[4]
		const addresspYjgWYy = "0x0000000000000000000000000000000000000001"
		const uintvDTIoPn = BigInt("1567")
		const addressNJGyK9W = accounts[4]
		const uintfpZfmeg = BigInt("449")
		const uintxFWVfT = BigInt("974")
		const addressPEqyZYe = accounts[4]
		const uinteK1FHYe = await MIMOTokenPkl5Mdr.allowance.call(addressBY5vgp5, addressHaNo3ZP, {from: accounts[1]});
		const uintNnoucvx = await MIMOTokenPkl5Mdr.balanceOf.call(addresspYjgWYy, {from: accounts[3]});
		const boolgrbfUy = await MIMOTokenPkl5Mdr.transfer.call(addressNJGyK9W, uintvDTIoPn, {from: accounts[5]});
		const uint256cz3OWs = await MIMOTokenPkl5Mdr.getFee.call(uintfpZfmeg, {from: "0x0000000000000000000000000000000000000001"});
		const booleZ4BWuH = await MIMOTokenPkl5Mdr.transfer.call(addressPEqyZYe, uintxFWVfT, {from: accounts[2]});

		assert.equal(uintNnoucvx, BigInt("0"))
		assert.equal(uinteK1FHYe, BigInt("0"))
		await expect(MIMOTokenPkl5Mdr.transfer.call(addressNJGyK9W, uintvDTIoPn, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MIMOToken', async () => {
		const MIMOTokenzCYxFTv = await MIMOToken.new({from: accounts[5]});
		const uintBjPd5f9 = BigInt("1822")
		const address5uWNTH = accounts[0]
		const uintw4Rzoxs = BigInt("529")
		const uinty1kqA26 = BigInt("1371")
		const addressPzguqdt = "0x0000000000000000000000000000000000000000"
		const addresssG7H0OO = accounts[0]
		const uintVCRyayI = BigInt("301")
		const boolxgjNq3G = await MIMOTokenzCYxFTv.approve.call(address5uWNTH, uintBjPd5f9, {from: accounts[0]});
		const uintmrUaNGO = await MIMOTokenzCYxFTv.totalSupply.call({from: accounts[0]});
		const uint256SQhymte = await MIMOTokenzCYxFTv.setMinFee.call(uintw4Rzoxs, {from: accounts[0]});
		const boolnU9aSsG = await MIMOTokenzCYxFTv.transferFrom.call(addresssG7H0OO, addressPzguqdt, uinty1kqA26, {from: accounts[3]});
		const uint256RMYoHfg = await MIMOTokenzCYxFTv.getFee.call(uintVCRyayI, {from: accounts[2]});

		assert.equal(boolxgjNq3G, true)
		assert.equal(uintmrUaNGO, BigInt("16000000000000000000000000"))
		await expect(MIMOTokenzCYxFTv.transferFrom.call(addresssG7H0OO, addressPzguqdt, uinty1kqA26, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})