const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALZM4kP86 = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGc0M5aB = BigInt("196")
		const addressBQJkFv = accounts[2]
		const uintP11FF5M = BigInt("1623")
		const addressxoFsgTa = accounts[4]
		const uintvEuOYNP = BigInt("4")
		const addressLJhEVVR = accounts[3]
		const uintCAk8K8i = BigInt("4")
		const addressA4Ik32g = accounts[1]
		const boolAAOtkYx = await NALZM4kP86.increaseAllowance.call(addressBQJkFv, uintGc0M5aB, {from: accounts[3]});
		const uint256HX4rwv = await NALZM4kP86.burn.call(uintP11FF5M, {from: accounts[3]});
		const addressStlkmwc = await NALZM4kP86.transferOwnership.call(addressxoFsgTa, {from: accounts[0]});
		const boolsTDtiw3 = await NALZM4kP86.transfer.call(addressLJhEVVR, uintvEuOYNP, {from: accounts[5]});
		const boola9WA0r = await NALZM4kP86.increaseAllowance.call(addressA4Ik32g, uintCAk8K8i, {from: accounts[1]});
	});

	it('test for NAL', async () => {
		const stringXGmm0HB = "WiwuxhFxBbSo58eCIECQxaV0ze3NeIwZufyo87ruRwtsdeT1HcmeieU3y"
		const stringT8gHfIL = "fCiOeEekxIKTM8eBdfc3GTBVy"
		const uintYxfo4pc = BigInt("182")
		const NALsDBsCc5 = await NAL.new(stringXGmm0HB, stringT8gHfIL, uintYxfo4pc, {from: "0x0000000000000000000000000000000000000001"});
		const uintM2AwpSH = BigInt("1305")
		const addresszxh5iXN = accounts[1]
		await NALsDBsCc5.unpause.call({from: accounts[1]});
		await NALsDBsCc5.unpause.call({from: accounts[2]});
		const boolH6ChyJH = await NALsDBsCc5.transfer.call(addresszxh5iXN, uintM2AwpSH, {from: accounts[3]});
	});

	it('test for NAL', async () => {
		const NALbpLwcmh = await NAL.new({from: accounts[2]});
		const uintb1m2R35 = BigInt("1242")
		const addressVKXsdUg = accounts[2]
		const addressfr753TV = accounts[3]
		const uintZa4jVYx = BigInt("353")
		const uintriM0xKL = BigInt("431")
		const addressR6aMCBB = accounts[3]
		await NALbpLwcmh.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const boolMfRJyA = await NALbpLwcmh.unlock.call(addressVKXsdUg, uintb1m2R35, {from: accounts[3]});
		const addressSYJpjUk = await NALbpLwcmh.upgradeTo.call(addressfr753TV, {from: accounts[2]});
		const boolvRImAEI = await NALbpLwcmh.lock.call(addressR6aMCBB, uintriM0xKL, uintZa4jVYx, {from: accounts[2]});

		await expect(NALbpLwcmh.renounceAdmin.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALyu76gs7 = await NAL.new({from: accounts[3]});
		const addressOgm04cH = accounts[3]
		const uintHVp74O = BigInt("1184")
		const addressZbAU7iD = accounts[5]
		const addressblRpabH = "0x0000000000000000000000000000000000000001"
		await NALyu76gs7.onlyAdmin.call({from: "0x0000000000000000000000000000000000000001"});
		const boolK7IuS6 = await NALyu76gs7.freezeAccount.call(addressOgm04cH, {from: accounts[0]});
		const booleNe6oSK = await NALyu76gs7.transferFrom.call(addressblRpabH, addressZbAU7iD, uintHVp74O, {from: accounts[2]});

		await expect(NALyu76gs7.onlyAdmin.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALYvfa712 = await NAL.new({from: accounts[1]});
		const uintWCEKNu8 = BigInt("637")
		const uintfggvLym = BigInt("693")
		const addressD9AenzC = accounts[5]
		const uintYnfsP10 = BigInt("1297")
		const addressqTQeMQW = accounts[4]
		const addressQS8L7d2 = accounts[5]
		const boolq8VzckV = await NALYvfa712.lock.call(addressD9AenzC, uintfggvLym, uintWCEKNu8, {from: "0x0000000000000000000000000000000000000001"});
		const boolgYLDCen = await NALYvfa712.transferFrom.call(addressQS8L7d2, addressqTQeMQW, uintYnfsP10, {from: accounts[2]});

		await expect(NALYvfa712.lock.call(addressD9AenzC, uintfggvLym, uintWCEKNu8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALYvfa712 = await NAL.new({from: accounts[1]});
		const uintOdE5Cje = BigInt("1721")
		const addressUSW6QGf = accounts[0]
		const uintl7evMIC = BigInt("637")
		const uintCDAFuTm = BigInt("693")
		const addressmhgHVi = accounts[5]
		const uintS3ma1L7 = BigInt("1160")
		const address1NCvGU = accounts[2]
		const boolmmvzbLw = await NALYvfa712.transfer.call(addressUSW6QGf, uintOdE5Cje, {from: accounts[4]});
		const boolq8VzckV = await NALYvfa712.lock.call(addressmhgHVi, uintCDAFuTm, uintl7evMIC, {from: "0x0000000000000000000000000000000000000001"});
		const boolrJC0Jb6 = await NALYvfa712.transfer.call(address1NCvGU, uintS3ma1L7, {from: accounts[0]});

		await expect(NALYvfa712.transfer.call(addressUSW6QGf, uintOdE5Cje, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkFtWN8V = await NAL.new({from: accounts[1]});
		const addresslxMjoz6 = accounts[0]
		const addressA0he8mm = accounts[0]
		const addressHVdw7CR = accounts[0]
		const addressVyBvAFc = accounts[4]
		const boolLOViex6 = await NALkFtWN8V.isAdmin.call(addresslxMjoz6, {from: accounts[4]});
		const boolaKncnYz = await NALkFtWN8V.isOwner.call(addressA0he8mm, {from: accounts[0]});
		const addressDFlueTZ = await NALkFtWN8V.transferOwnership.call(addressHVdw7CR, {from: accounts[1]});
		const addressQ5a5K6Y = await NALkFtWN8V.addAdmin.call(addressVyBvAFc, {from: accounts[1]});

		assert.equal(boolLOViex6, false)
		assert.equal(boolaKncnYz, false)
	});

	it('test for NAL', async () => {
		const NALkFtWN8V = await NAL.new({from: accounts[1]});
		const addresswx55Gha = accounts[0]
		const addressvXHwRI7 = accounts[1]
		const addressWjXXp1Y = accounts[0]
		const addressPNf56Pt = accounts[4]
		const boolLOViex6 = await NALkFtWN8V.isAdmin.call(addresswx55Gha, {from: accounts[4]});
		const boolaKncnYz = await NALkFtWN8V.isOwner.call(addressvXHwRI7, {from: accounts[0]});
		const addressDFlueTZ = await NALkFtWN8V.transferOwnership.call(addressWjXXp1Y, {from: accounts[1]});
		const addressQ5a5K6Y = await NALkFtWN8V.addAdmin.call(addressPNf56Pt, {from: accounts[1]});

		assert.equal(boolLOViex6, false)
		assert.equal(boolaKncnYz, true)
	});

	it('test for NAL', async () => {
		const NALYvfa712 = await NAL.new({from: accounts[1]});
		const uintDDQMOt = BigInt("809")
		const address5mCQxo = "0x0000000000000000000000000000000000000001"
		const uintpzlFpDj = BigInt("1721")
		const address45PhzD = accounts[0]
		const uintYcE4eON = BigInt("118")
		const addressmBwhmNH = accounts[2]
		const addressgOlYUhP = accounts[3]
		const uintwjYCy10 = BigInt("637")
		const uintdt4AP2a = BigInt("730")
		const addressbJjlptq = accounts[5]
		const uintTs8ySAe = BigInt("1160")
		const addressCU3hflg = accounts[2]
		const boolSc3Sjw5 = await NALYvfa712.decreaseAllowance.call(address5mCQxo, uintDDQMOt, {from: accounts[4]});
		const boolmmvzbLw = await NALYvfa712.transfer.call(address45PhzD, uintpzlFpDj, {from: accounts[4]});
		const booleuoH3tv = await NALYvfa712.transferFrom.call(addressgOlYUhP, addressmBwhmNH, uintYcE4eON, {from: accounts[2]});
		const boolq8VzckV = await NALYvfa712.lock.call(addressbJjlptq, uintdt4AP2a, uintwjYCy10, {from: "0x0000000000000000000000000000000000000001"});
		const boolrJC0Jb6 = await NALYvfa712.transfer.call(addressCU3hflg, uintTs8ySAe, {from: accounts[0]});

		await expect(NALYvfa712.decreaseAllowance.call(address5mCQxo, uintDDQMOt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALkFtWN8V = await NAL.new({from: accounts[1]});
		const addressdG6aGMg = accounts[0]
		const uintisvDWg4 = BigInt("1646")
		const addressYBKKHqW = accounts[0]
		const uintgwwQZtL = BigInt("762")
		const addressYYNdQZJ = accounts[2]
		const addresssWr1v1C = accounts[0]
		const addressgUhKafp = accounts[4]
		const boolaKncnYz = await NALkFtWN8V.isOwner.call(addressdG6aGMg, {from: accounts[0]});
		const boolMWeclr = await NALkFtWN8V.approve.call(addressYBKKHqW, uintisvDWg4, {from: accounts[3]});
		const boolbnljykk = await NALkFtWN8V.transfer.call(addressYYNdQZJ, uintgwwQZtL, {from: accounts[0]});
		const addressDFlueTZ = await NALkFtWN8V.transferOwnership.call(addresssWr1v1C, {from: accounts[1]});
		const addressQ5a5K6Y = await NALkFtWN8V.addAdmin.call(addressgUhKafp, {from: accounts[1]});

		assert.equal(boolMWeclr, true)
		assert.equal(boolaKncnYz, false)
		await expect(NALkFtWN8V.transfer.call(addressYYNdQZJ, uintgwwQZtL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALYvfa712 = await NAL.new({from: accounts[1]});
		const addressxjD1ub = accounts[1]
		const uintitOZXtt = BigInt("637")
		const uintDHQaWLm = BigInt("693")
		const addressolEMzeH = accounts[5]
		const uintTRBo9Ho = BigInt("1297")
		const addressYcJUKcR = accounts[5]
		const addressy8W9fZ7 = accounts[5]
		const uint256PGOCrJy = await NALYvfa712.balanceOf.call(addressxjD1ub, {from: accounts[0]});
		await NALYvfa712.onlyAdmin.call({from: accounts[4]});
		const boolq8VzckV = await NALYvfa712.lock.call(addressolEMzeH, uintDHQaWLm, uintitOZXtt, {from: "0x0000000000000000000000000000000000000001"});
		const boolgYLDCen = await NALYvfa712.transferFrom.call(addressy8W9fZ7, addressYcJUKcR, uintTRBo9Ho, {from: accounts[2]});

		assert.equal(uint256PGOCrJy, BigInt("2000000000000000000000000000"))
		await expect(NALYvfa712.onlyAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALYvfa712 = await NAL.new({from: accounts[1]});
		const uintOnr4weE = BigInt("1297")
		const addressvXWnQa = accounts[5]
		const addressm8GDkGN = accounts[5]
		const boolgYLDCen = await NALYvfa712.transferFrom.call(addressm8GDkGN, addressvXWnQa, uintOnr4weE, {from: accounts[2]});
		await NALYvfa712.onlyAdmin.call({from: accounts[4]});

		await expect(NALYvfa712.transferFrom.call(addressm8GDkGN, addressvXWnQa, uintOnr4weE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALFRAvmPS = await NAL.new({from: accounts[4]});
		const uintn666x9o = BigInt("1156")
		const addressC61JcBS = accounts[3]
		const uintBrX294T = BigInt("966")
		const addresszuP4Eoe = await NALFRAvmPS.burnFrom.call(addressC61JcBS, uintn666x9o, {from: accounts[0]});
		const boolqieOcSL = await NALFRAvmPS.paused.call({from: accounts[5]});
		const uint256OR7UyKr = await NALFRAvmPS.burn.call(uintBrX294T, {from: "0x0000000000000000000000000000000000000001"});

		await expect(NALFRAvmPS.burnFrom.call(addressC61JcBS, uintn666x9o, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALYvfa712 = await NAL.new({from: accounts[1]});
		const uint256KT1E471 = await NALYvfa712.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256KT1E471, BigInt("2000000000000000000000000000"))
	});

	it('test for NAL', async () => {
		const NALYvfa712 = await NAL.new({from: accounts[1]});
		const uinto0E9lY3 = BigInt("1297")
		const addressHeoSW5U = accounts[4]
		const addressdwtTqtj = accounts[5]
		const uint8bP6k4Q8 = await NALYvfa712.decimals.call({from: accounts[3]});
		const boolgYLDCen = await NALYvfa712.transferFrom.call(addressdwtTqtj, addressHeoSW5U, uinto0E9lY3, {from: accounts[2]});
		await NALYvfa712.whenNotPaused.call({from: accounts[1]});

		assert.equal(uint8bP6k4Q8, BigInt("18"))
		await expect(NALYvfa712.transferFrom.call(addressdwtTqtj, addressHeoSW5U, uinto0E9lY3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALYvfa712 = await NAL.new({from: accounts[1]});
		const uintKHumP19 = BigInt("491")
		const addressGNfCE4B = accounts[0]
		const uintyhF84Ss = BigInt("1297")
		const addresstFZHUYv = accounts[5]
		const addressGOEpgEM = accounts[5]
		const uintrhCqKaN = BigInt("857")
		const addressQ1JuLN = accounts[1]
		const booldE0OjJZ = await NALYvfa712.increaseAllowance.call(addressGNfCE4B, uintKHumP19, {from: accounts[2]});
		const boolgYLDCen = await NALYvfa712.transferFrom.call(addressGOEpgEM, addresstFZHUYv, uintyhF84Ss, {from: accounts[2]});
		const boolEATNNX8 = await NALYvfa712.transfer.call(addressQ1JuLN, uintrhCqKaN, {from: accounts[1]});

		assert.equal(booldE0OjJZ, true)
		await expect(NALYvfa712.transferFrom.call(addressGOEpgEM, addresstFZHUYv, uintyhF84Ss, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALM8wQRG5 = await NAL.new({from: accounts[4]});
		const uint256PNhMH4Y = await NALM8wQRG5.totalSupply.call({from: accounts[3]});
		await NALM8wQRG5.pause.call({from: accounts[4]});
		const boolDO1Ynz9 = await NALM8wQRG5.paused.call({from: accounts[4]});
		await NALM8wQRG5.onlyAdmin.call({from: accounts[2]});

		assert.equal(uint256PNhMH4Y, BigInt("2000000000000000000000000000"))
		await expect(NALM8wQRG5.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALYvfa712 = await NAL.new({from: accounts[1]});
		const addressvefcpd = accounts[1]
		const uintOyTQKr0 = BigInt("162")
		const uintYzoNkrP = BigInt("602")
		const uintuaGmhxB = BigInt("693")
		const addressnu8BYAx = accounts[5]
		const uint0bWpUi = BigInt("1523")
		const addresss0X4hG = accounts[4]
		const addressCdYeKup = accounts[0]
		const uintkCjoyuJ = BigInt("1998")
		const addressZRtLCLR = accounts[2]
		const uint256PGOCrJy = await NALYvfa712.balanceOf.call(addressvefcpd, {from: accounts[0]});
		const uint256tGl2whD = await NALYvfa712.burn.call(uintOyTQKr0, {from: accounts[2]});
		const boolq8VzckV = await NALYvfa712.lock.call(addressnu8BYAx, uintuaGmhxB, uintYzoNkrP, {from: "0x0000000000000000000000000000000000000001"});
		const boolwPR1Nk6 = await NALYvfa712.transferFrom.call(addressCdYeKup, addresss0X4hG, uint0bWpUi, {from: accounts[5]});
		const booluXzMMlS = await NALYvfa712.transfer.call(addressZRtLCLR, uintkCjoyuJ, {from: accounts[4]});

		assert.equal(uint256PGOCrJy, BigInt("2000000000000000000000000000"))
		await expect(NALYvfa712.burn.call(uintOyTQKr0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALYvfa712 = await NAL.new({from: accounts[1]});
		const addresslwD5QwT = accounts[1]
		const addressiXuYYGH = "0x0000000000000000000000000000000000000001"
		const uintBGyScrr = BigInt("1297")
		const addresse1hW3QH = accounts[5]
		const addressUonzakb = accounts[5]
		const uintaKy3C5X = BigInt("1038")
		const addressnCySxsC = accounts[4]
		const uint256PGOCrJy = await NALYvfa712.balanceOf.call(addresslwD5QwT, {from: accounts[0]});
		const stringqQ47Z84 = await NALYvfa712.symbol.call({from: accounts[0]});
		await NALYvfa712.onlyAdmin.call({from: accounts[4]});
		const boolfZHCslp = await NALYvfa712.unfreezeAccount.call(addressiXuYYGH, {from: accounts[3]});
		const boolgYLDCen = await NALYvfa712.transferFrom.call(addressUonzakb, addresse1hW3QH, uintBGyScrr, {from: accounts[2]});
		const boolrfDmlaW = await NALYvfa712.transfer.call(addressnCySxsC, uintaKy3C5X, {from: accounts[2]});

		assert.equal(stringqQ47Z84, "NAL")
		assert.equal(uint256PGOCrJy, BigInt("2000000000000000000000000000"))
		await expect(NALYvfa712.onlyAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALYvfa712 = await NAL.new({from: accounts[1]});
		const addressPz29v4A = accounts[3]
		const addressKuoo5ce = accounts[1]
		const uintuB40zfW = BigInt("602")
		const uintr5OoZCq = BigInt("693")
		const addresssyPb4K = accounts[5]
		const stringj3GnPCk = await NALYvfa712.name.call({from: accounts[0]});
		const addresspYqRu6x = await NALYvfa712.notFrozen.call(addressPz29v4A, {from: accounts[5]});
		const uint256PGOCrJy = await NALYvfa712.balanceOf.call(addressKuoo5ce, {from: accounts[0]});
		const boolq8VzckV = await NALYvfa712.lock.call(addresssyPb4K, uintr5OoZCq, uintuB40zfW, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringj3GnPCk, "Personal Token")
		await expect(NALYvfa712.notFrozen.call(addressPz29v4A, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALYvfa712 = await NAL.new({from: accounts[1]});
		const addressp0qDCr = accounts[1]
		const addressBjlbzJL = accounts[3]
		const addressWhPNEpK = accounts[3]
		const uintrIFbNsR = BigInt("826")
		const addressrbHGBaR = accounts[6]
		const addressi8Y67KX = accounts[5]
		const uinttePNZ70 = BigInt("1817")
		const addressZpbHPy = accounts[3]
		const uintHu6O7sl = BigInt("602")
		const uintxYrRELC = BigInt("693")
		const addressEWfHdKA = accounts[6]
		const addressvifMA4P = accounts[0]
		const uintTHa9dT = BigInt("1297")
		const addressnKjo4Nl = accounts[5]
		const addressDT5g0HM = accounts[5]
		const uint256PGOCrJy = await NALYvfa712.balanceOf.call(addressp0qDCr, {from: accounts[0]});
		const uint256q5Nmiqb = await NALYvfa712.allowance.call(addressWhPNEpK, addressBjlbzJL, {from: accounts[0]});
		const boolwfiN6Vc = await NALYvfa712.transferFrom.call(addressi8Y67KX, addressrbHGBaR, uintrIFbNsR, {from: accounts[5]});
		const boolBpLFX8n = await NALYvfa712.increaseAllowance.call(addressZpbHPy, uinttePNZ70, {from: "0x0000000000000000000000000000000000000001"});
		const boolq8VzckV = await NALYvfa712.lock.call(addressEWfHdKA, uintxYrRELC, uintHu6O7sl, {from: "0x0000000000000000000000000000000000000001"});
		const addressjtTsGKr = await NALYvfa712.notFrozen.call(addressvifMA4P, {from: accounts[3]});
		const boolgYLDCen = await NALYvfa712.transferFrom.call(addressDT5g0HM, addressnKjo4Nl, uintTHa9dT, {from: accounts[2]});

		assert.equal(uint256PGOCrJy, BigInt("2000000000000000000000000000"))
		assert.equal(uint256q5Nmiqb, BigInt("0"))
		await expect(NALYvfa712.transferFrom.call(addressi8Y67KX, addressrbHGBaR, uintrIFbNsR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALYvfa712 = await NAL.new({from: accounts[1]});
		const addressOJMlzYw = accounts[3]
		const uintuk2rTIM = BigInt("1712")
		const addresslFuRao = accounts[0]
		const uintmh3MZ7 = BigInt("2018")
		const uintea9DHRr = BigInt("1207")
		const addressA8l0nsh = accounts[0]
		const boolr6xG7o = await NALYvfa712.freezeAccount.call(addressOJMlzYw, {from: accounts[1]});
		const boolmmvzbLw = await NALYvfa712.transfer.call(addresslFuRao, uintuk2rTIM, {from: accounts[4]});
		const boolyArr3R5 = await NALYvfa712.lock.call(addressA8l0nsh, uintea9DHRr, uintmh3MZ7, {from: accounts[5]});

		assert.equal(boolr6xG7o, true)
		await expect(NALYvfa712.transfer.call(addresslFuRao, uintuk2rTIM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALYvfa712 = await NAL.new({from: accounts[1]});
		const addresscm1QL8e = accounts[2]
		const uintp4YQ5k = BigInt("1297")
		const addressYbJJJis = accounts[4]
		const addressjfzsUmW = accounts[6]
		const addressXrphyO4 = await NALYvfa712.removeAdmin.call(addresscm1QL8e, {from: accounts[1]});
		const boolgYLDCen = await NALYvfa712.transferFrom.call(addressjfzsUmW, addressYbJJJis, uintp4YQ5k, {from: accounts[2]});

		await expect(NALYvfa712.removeAdmin.call(addresscm1QL8e, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})