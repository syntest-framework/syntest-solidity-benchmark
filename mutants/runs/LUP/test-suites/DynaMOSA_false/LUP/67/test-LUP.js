const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringvUGe8r2 = "VNIG15F9v6pfA51Dvk7H9kPAzbB4554Tbax0d0q9dtFvq"
		const stringNDJ6hz9 = "lmYfzdAvfx2oVahzWr3oLSw2zPuMcV1vBzPEXfaw7Lo6"
		const uintXfeSHI0 = BigInt("238")
		const LUPjTPDA9 = await LUP.new(stringvUGe8r2, stringNDJ6hz9, uintXfeSHI0, {from: accounts[4]});
		const addressBxBWJnD = accounts[4]
		const uintuZGUiP = BigInt("954")
		const addressXd8aEBb = accounts[2]
		const addressNcIV31q = accounts[1]
		const uint256kRbdFRu = await LUPjTPDA9.balanceOf.call(addressBxBWJnD, {from: accounts[4]});
		const boolvmKH5dB = await LUPjTPDA9.unlock.call(addressXd8aEBb, uintuZGUiP, {from: accounts[4]});
		const stringQBZIzON = await LUPjTPDA9.name.call({from: accounts[1]});
		const addressLC6CAc7 = await LUPjTPDA9.upgradeTo.call(addressNcIV31q, {from: accounts[0]});
	});

	it('test for LUP', async () => {
		const LUPhhD3Tl7 = await LUP.new({from: accounts[0]});
		const boolPFV2R3q = true
		const addressT6NMh73 = accounts[3]
		const boolYnE1G0 = false
		const addressoxZbOTU = accounts[0]
		const uintJmrXZ0s = BigInt("1786")
		const addressF1KwVN = accounts[0]
		const addressOgrBIPi = accounts[5]
		const boolzc36Qjm = await LUPhhD3Tl7.freezeAccount.call(addressT6NMh73, boolPFV2R3q, {from: accounts[1]});
		const boolZ0tJOYb = await LUPhhD3Tl7.freezeAccount.call(addressoxZbOTU, boolYnE1G0, {from: accounts[3]});
		const booloecEsWD = await LUPhhD3Tl7.transfer.call(addressF1KwVN, uintJmrXZ0s, {from: accounts[1]});
		const addressm8bBbZU = await LUPhhD3Tl7.upgradeTo.call(addressOgrBIPi, {from: accounts[4]});

		await expect(LUPhhD3Tl7.freezeAccount.call(addressT6NMh73, boolPFV2R3q, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPIw7S27 = await LUP.new({from: accounts[2]});
		const addressPX9Lyjv = accounts[3]
		const uintbAmYg6e = BigInt("31")
		const addresstwWWnW = accounts[1]
		const uint256mL8UUQ4 = await LUPIw7S27.balanceOf.call(addressPX9Lyjv, {from: accounts[4]});
		const boolbwVvZPd = await LUPIw7S27.unlock.call(addresstwWWnW, uintbAmYg6e, {from: accounts[0]});

		assert.equal(uint256mL8UUQ4, BigInt("0"))
		await expect(LUPIw7S27.unlock.call(addresstwWWnW, uintbAmYg6e, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPaoFCz3m = await LUP.new({from: accounts[4]});
		const addressFSgeaDM = "0x0000000000000000000000000000000000000001"
		const uint8d5ZZR72 = await LUPaoFCz3m.decimals.call({from: accounts[4]});
		const addressmLaGUJh = await LUPaoFCz3m.upgradeTo.call(addressFSgeaDM, {from: accounts[0]});

		assert.equal(uint8d5ZZR72, BigInt("18"))
		await expect(LUPaoFCz3m.upgradeTo.call(addressFSgeaDM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPtPcKJ2L = await LUP.new({from: accounts[2]});
		const stringAqlmilR = await LUPtPcKJ2L.symbol.call({from: accounts[1]});
		const stringIqWsqwI = await LUPtPcKJ2L.name.call({from: accounts[2]});
		const stringOylKOj = await LUPtPcKJ2L.name.call({from: accounts[2]});
		const stringVHVCdf = await LUPtPcKJ2L.symbol.call({from: accounts[5]});

		assert.equal(stringAqlmilR, "LUP")
		assert.equal(stringIqWsqwI, "LINKUP Token")
		assert.equal(stringOylKOj, "LINKUP Token")
		assert.equal(stringVHVCdf, "LUP")
	});

	it('test for LUP', async () => {
		const LUPLB47XpB = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const uintuzFUirJ = BigInt("1982")
		const address6FdBKg = accounts[2]
		const addressGXRupYm = "0x0000000000000000000000000000000000000001"
		const uintezpvhbt = BigInt("505")
		const addressX058z1I = accounts[1]
		const boolJD3y99P = false
		const addressQUKyMo = accounts[5]
		const uintjtrNZNW = BigInt("1872")
		const uintCHIjXXu = BigInt("546")
		const addressmZTH5i6 = accounts[0]
		const uintNKMlOHh = BigInt("1759")
		const addressgn6I2BK = accounts[3]
		const boolcvww4gq = await LUPLB47XpB.transfer.call(address6FdBKg, uintuzFUirJ, {from: accounts[2]});
		const uint256ts2b522 = await LUPLB47XpB.balanceOf.call(addressGXRupYm, {from: "0x0000000000000000000000000000000000000001"});
		const booloEkIpPa = await LUPLB47XpB.transfer.call(addressX058z1I, uintezpvhbt, {from: accounts[1]});
		const boolrEiqrz = await LUPLB47XpB.freezeAccount.call(addressQUKyMo, boolJD3y99P, {from: accounts[3]});
		const boolP1G26mg = await LUPLB47XpB.lock.call(addressmZTH5i6, uintCHIjXXu, uintjtrNZNW, {from: accounts[1]});
		const boolDW6seO8 = await LUPLB47XpB.unlock.call(addressgn6I2BK, uintNKMlOHh, {from: accounts[4]});
	});

	it('test for LUP', async () => {
		const LUPIw7S27 = await LUP.new({from: accounts[2]});
		const addressMDRQ4dR = accounts[4]
		const uintlqjk3MH = BigInt("56")
		const uintB6vs7H3 = BigInt("1872")
		const addressEheF8BA = accounts[1]
		const uintx86H1jE = BigInt("31")
		const addressF5ULi0a = accounts[1]
		const uint256mL8UUQ4 = await LUPIw7S27.balanceOf.call(addressMDRQ4dR, {from: accounts[4]});
		const booljYQVrWh = await LUPIw7S27.transferWithLock.call(addressEheF8BA, uintB6vs7H3, uintlqjk3MH, {from: accounts[2]});
		const stringwQ35NVi = await LUPIw7S27.symbol.call({from: accounts[0]});
		const boolbwVvZPd = await LUPIw7S27.unlock.call(addressF5ULi0a, uintx86H1jE, {from: accounts[0]});

		assert.equal(booljYQVrWh, true)
		assert.equal(stringwQ35NVi, "LUP")
		assert.equal(uint256mL8UUQ4, BigInt("0"))
		await expect(LUPIw7S27.unlock.call(addressF5ULi0a, uintx86H1jE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPIw7S27 = await LUP.new({from: accounts[2]});
		const addressbou1Hjq = accounts[4]
		const uintxpFLQA8 = BigInt("420")
		const addressr9eiSNb = accounts[0]
		const uintyzliqdB = BigInt("31")
		const addressjKLUR4L = accounts[1]
		const uint256mL8UUQ4 = await LUPIw7S27.balanceOf.call(addressbou1Hjq, {from: accounts[4]});
		const boolt3p70yp = await LUPIw7S27.unlock.call(addressr9eiSNb, uintxpFLQA8, {from: accounts[2]});
		const boolbwVvZPd = await LUPIw7S27.unlock.call(addressjKLUR4L, uintyzliqdB, {from: accounts[0]});

		assert.equal(uint256mL8UUQ4, BigInt("0"))
		await expect(LUPIw7S27.unlock.call(addressr9eiSNb, uintxpFLQA8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPIw7S27 = await LUP.new({from: accounts[2]});
		const addressBHGHMnL = "0x0000000000000000000000000000000000000001"
		const uintXpakoMX = BigInt("31")
		const addressHrIEsII = accounts[1]
		const stringv1S4TrK = await LUPIw7S27.symbol.call({from: accounts[0]});
		const addressvdjjbsI = await LUPIw7S27.upgradeTo.call(addressBHGHMnL, {from: accounts[2]});
		const boolbwVvZPd = await LUPIw7S27.unlock.call(addressHrIEsII, uintXpakoMX, {from: accounts[0]});

		assert.equal(stringv1S4TrK, "LUP")
		await expect(LUPIw7S27.unlock.call(addressHrIEsII, uintXpakoMX, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPIw7S27 = await LUP.new({from: accounts[2]});
		const addressNwfWd8W = accounts[5]
		const addressdWsFTD5 = accounts[2]
		const uintaLcthk = BigInt("241")
		const uinta1fljco = BigInt("1351")
		const addresswN2ues = accounts[0]
		const uintn8owRsP = BigInt("31")
		const addresswqcVGRY = accounts[1]
		const uint256mL8UUQ4 = await LUPIw7S27.balanceOf.call(addressNwfWd8W, {from: accounts[4]});
		const addressZEj3Z6d = await LUPIw7S27.notFrozen.call(addressdWsFTD5, {from: accounts[2]});
		const stringwVST1LH = await LUPIw7S27.symbol.call({from: accounts[1]});
		const boolNZxaXxc = await LUPIw7S27.lock.call(addresswN2ues, uinta1fljco, uintaLcthk, {from: accounts[2]});
		const boolbwVvZPd = await LUPIw7S27.unlock.call(addresswqcVGRY, uintn8owRsP, {from: accounts[0]});

		assert.equal(uint256mL8UUQ4, BigInt("0"))
		await expect(LUPIw7S27.notFrozen.call(addressdWsFTD5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPIw7S27 = await LUP.new({from: accounts[2]});
		const boolvDtu2ac = true
		const addressQkTy9IH = accounts[4]
		const addressLFd1cB = accounts[6]
		const boolf9LS6zF = await LUPIw7S27.freezeAccount.call(addressQkTy9IH, boolvDtu2ac, {from: accounts[2]});
		const uint256mL8UUQ4 = await LUPIw7S27.balanceOf.call(addressLFd1cB, {from: accounts[4]});

		assert.equal(boolf9LS6zF, true)
		assert.equal(uint256mL8UUQ4, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPIw7S27 = await LUP.new({from: accounts[2]});
		const addressgzfuqXn = accounts[4]
		const uintt4bxUah = BigInt("1896")
		const addresslD5A7i = accounts[4]
		const uintlvXu8CH = BigInt("56")
		const uintPBDoGN5 = BigInt("1872")
		const addresssJya15i = accounts[1]
		const uintnm1qOcO = BigInt("31")
		const addressrs1bK4 = accounts[1]
		const uint256mL8UUQ4 = await LUPIw7S27.balanceOf.call(addressgzfuqXn, {from: accounts[4]});
		const boolOVScMo = await LUPIw7S27.transfer.call(addresslD5A7i, uintt4bxUah, {from: accounts[4]});
		const booljYQVrWh = await LUPIw7S27.transferWithLock.call(addresssJya15i, uintPBDoGN5, uintlvXu8CH, {from: accounts[2]});
		const stringwQ35NVi = await LUPIw7S27.symbol.call({from: accounts[0]});
		const boolbwVvZPd = await LUPIw7S27.unlock.call(addressrs1bK4, uintnm1qOcO, {from: accounts[0]});

		assert.equal(uint256mL8UUQ4, BigInt("0"))
		await expect(LUPIw7S27.transfer.call(addresslD5A7i, uintt4bxUah, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPIw7S27 = await LUP.new({from: accounts[2]});
		const addressNYglBXw = accounts[4]
		const uintVeStl0X = BigInt("397")
		const uintX03yOAa = BigInt("1990")
		const addressSxqzaiY = accounts[0]
		const uintZtI5MwE = BigInt("254")
		const addressOREcC99 = accounts[1]
		const uintSqs3D0w = BigInt("31")
		const addressbVJ1ZD8 = accounts[1]
		const uint256mL8UUQ4 = await LUPIw7S27.balanceOf.call(addressNYglBXw, {from: accounts[4]});
		const boolV0JxIV = await LUPIw7S27.lock.call(addressSxqzaiY, uintX03yOAa, uintVeStl0X, {from: accounts[2]});
		const boolCUfTlth = await LUPIw7S27.transfer.call(addressOREcC99, uintZtI5MwE, {from: accounts[2]});
		const boolbwVvZPd = await LUPIw7S27.unlock.call(addressbVJ1ZD8, uintSqs3D0w, {from: accounts[0]});

		assert.equal(uint256mL8UUQ4, BigInt("0"))
		await expect(LUPIw7S27.lock.call(addressSxqzaiY, uintX03yOAa, uintVeStl0X, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})