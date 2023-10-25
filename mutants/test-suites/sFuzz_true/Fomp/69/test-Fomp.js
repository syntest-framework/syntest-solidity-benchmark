const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressoQyXQmF = accounts[0]
		const FompWHbmKqS = await Fomp.new(addressoQyXQmF, {from: accounts[3]});
		const bytelwu6HzO = "0x131b0d151019080419190d0c200e0908111d16130c201b0a040c201f10110103"
		const byteoSaTi2R = "0x011d0d16141a1413161d0511020717191a161c020a140a0d0911060a11181909"
		const uintTNpOsk6 = BigInt("170")
		const uintAmMyjz = BigInt("1987")
		const uintVb28Fnd = BigInt("1665")
		const addresspfFfFSq = accounts[3]
		const addressledjisU = accounts[2]
		const addressUifOSKx = "0x0000000000000000000000000000000000000001"
		const uintA0XtrPO = BigInt("848")
		const address1uk5E5 = accounts[3]
		const addresstUiL2rm = accounts[0]
		const uintomELpg0 = BigInt("1543")
		const addressQ8Bvw6O = accounts[2]
//		const addressQ2OlMjm = await FompWHbmKqS.delegateBySig.call(addresspfFfFSq, uintVb28Fnd, uintAmMyjz, uintTNpOsk6, byteoSaTi2R, bytelwu6HzO, {from: accounts[1]});
//		const addressYQBFbAj = await FompWHbmKqS.delegate.call(addressledjisU, {from: accounts[4]});
//		const uint967Sstac = await FompWHbmKqS.getCurrentVotes.call(addressUifOSKx, {from: accounts[3]});
//		const boolCcVr4Y = await FompWHbmKqS.transferFrom.call(addresstUiL2rm, address1uk5E5, uintA0XtrPO, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAaI3lgZ = await FompWHbmKqS.approve.call(addressQ8Bvw6O, uintomELpg0, {from: accounts[3]});

		await expect(FompWHbmKqS.delegateBySig.call(addresspfFfFSq, uintVb28Fnd, uintAmMyjz, uintTNpOsk6, byteoSaTi2R, bytelwu6HzO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressnS6RpG0 = accounts[1]
		const FompbcQc5Cb = await Fomp.new(addressnS6RpG0, {from: accounts[2]});
		const addressL4YZ6aW = accounts[3]
		const addresstV0xhCe = accounts[3]
		const addressZ55VI20 = accounts[0]
		const addressjEEWMiY = accounts[2]
		const addressEsbB7c3 = accounts[2]
		const uintuGWgirp = await FompbcQc5Cb.allowance.call(addresstV0xhCe, addressL4YZ6aW, {from: accounts[1]});
		const addressZjd6nNA = await FompbcQc5Cb.delegate.call(addressZ55VI20, {from: accounts[3]});
		const addresszKwp5T1 = await FompbcQc5Cb.delegate.call(addressjEEWMiY, {from: accounts[0]});
		const uint96cC2PoVI = await FompbcQc5Cb.getCurrentVotes.call(addressEsbB7c3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint96cC2PoVI, BigInt("0"))
		assert.equal(uintuGWgirp, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addresspwk4ng1 = "0x0000000000000000000000000000000000000001"
		const FompVOc55p = await Fomp.new(addresspwk4ng1, {from: accounts[4]});
		const uinteu8e0BQ = BigInt("1453")
		const addressA2VJU0 = accounts[3]
		const addressoHFxz8 = accounts[0]
		const uintwFki7Cr = BigInt("1636")
		const addresstcNIq2T = accounts[2]
		const addressCtFqo8s = accounts[3]
		const addressyr91QC2 = accounts[2]
		const uintd8yxibN = BigInt("1914")
		const addressNneOxj5 = accounts[4]
		const uintWBMkEu = BigInt("335")
		const addressgPnbVa = accounts[3]
//		const boolcrDehHA = await FompVOc55p.transferFrom.call(addressoHFxz8, addressA2VJU0, uinteu8e0BQ, {from: accounts[4]});
//		const boolSR7BWNW = await FompVOc55p.transferFrom.call(addressCtFqo8s, addresstcNIq2T, uintwFki7Cr, {from: accounts[2]});
//		const addressW2T1evf = await FompVOc55p.delegate.call(addressyr91QC2, {from: accounts[4]});
//		const boolfj0p2yg = await FompVOc55p.transfer.call(addressNneOxj5, uintd8yxibN, {from: accounts[3]});
//		const uint96onPrXOM = await FompVOc55p.getPriorVotes.call(addressgPnbVa, uintWBMkEu, {from: accounts[2]});

		await expect(FompVOc55p.transferFrom.call(addressoHFxz8, addressA2VJU0, uinteu8e0BQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressgXzBFvt = accounts[0]
		const FompY2apoTt = await Fomp.new(addressgXzBFvt, {from: accounts[2]});
		const addressWpEfmIH = accounts[1]
		const uintnxAUCrN = BigInt("1625")
		const addressCRfAI5 = accounts[1]
		const addressSH20PT6 = "0x0000000000000000000000000000000000000001"
		const uintG4so4t2 = await FompY2apoTt.balanceOf.call(addressWpEfmIH, {from: accounts[3]});
//		const boolMUANHLZ = await FompY2apoTt.transfer.call(addressCRfAI5, uintnxAUCrN, {from: accounts[1]});
//		const address0TjSjX = await FompY2apoTt.delegate.call(addressSH20PT6, {from: accounts[5]});

		assert.equal(uintG4so4t2, BigInt("0"))
		await expect(FompY2apoTt.transfer.call(addressCRfAI5, uintnxAUCrN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressOhYN4DX = accounts[0]
		const FompnBuyuaY = await Fomp.new(addressOhYN4DX, {from: accounts[3]});
		const uintS3C7Ts = BigInt("503")
		const addressct66YGJ = "0x0000000000000000000000000000000000000001"
		const addressrgj5QXk = accounts[2]
		const address2TCOyO = accounts[0]
		const addresshOlyZo1 = accounts[2]
		const addressOyvIQL6 = accounts[4]
		const uintRdhu2i = BigInt("1995")
		const addressCXzBqK0 = accounts[3]
		const uint96N5UuZU9 = await FompnBuyuaY.getPriorVotes.call(addressct66YGJ, uintS3C7Ts, {from: accounts[0]});
		const uint96MJEwDrt = await FompnBuyuaY.getCurrentVotes.call(addressrgj5QXk, {from: accounts[0]});
		const uintg6r2MaK = await FompnBuyuaY.allowance.call(addresshOlyZo1, address2TCOyO, {from: accounts[5]});
		const uint96qjfRetv = await FompnBuyuaY.getCurrentVotes.call(addressOyvIQL6, {from: accounts[0]});
//		const booljMdPiI = await FompnBuyuaY.transfer.call(addressCXzBqK0, uintRdhu2i, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint96MJEwDrt, BigInt("0"))
		assert.equal(uint96N5UuZU9, BigInt("0"))
		assert.equal(uint96qjfRetv, BigInt("0"))
		assert.equal(uintg6r2MaK, BigInt("0"))
		await expect(FompnBuyuaY.transfer.call(addressCXzBqK0, uintRdhu2i, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressdFka0Im = accounts[1]
		const FompbcQc5Cb = await Fomp.new(addressdFka0Im, {from: accounts[2]});
		const address3amTjS = accounts[3]
		const addressa4QZBlE = accounts[3]
		const addressNy4tcgZ = accounts[1]
		const uintajwSegk = BigInt("1455")
		const addressVVkNmTR = accounts[0]
		const addressHIPRUZq = accounts[2]
		const addressfpa1TG = accounts[2]
		const uintuGWgirp = await FompbcQc5Cb.allowance.call(addressa4QZBlE, address3amTjS, {from: accounts[1]});
		const addressZjd6nNA = await FompbcQc5Cb.delegate.call(addressNy4tcgZ, {from: accounts[3]});
		const boolzdkW4Bv = await FompbcQc5Cb.transfer.call(addressVVkNmTR, uintajwSegk, {from: accounts[1]});
		const addresszKwp5T1 = await FompbcQc5Cb.delegate.call(addressHIPRUZq, {from: accounts[0]});
		const uint96cC2PoVI = await FompbcQc5Cb.getCurrentVotes.call(addressfpa1TG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolzdkW4Bv, true)
		assert.equal(uint96cC2PoVI, BigInt("0"))
		assert.equal(uintuGWgirp, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressqgbPoSY = accounts[2]
		const Fompcq53BmD = await Fomp.new(addressqgbPoSY, {from: accounts[1]});
		const addressTOHQIOR = accounts[3]
		const addressPlHpple = accounts[3]
		const addresswXNGD7Z = "0x0000000000000000000000000000000000000001"
		const addresshUGH0IU = accounts[0]
		const uintWEhdYDA = await Fompcq53BmD.balanceOf.call(addressTOHQIOR, {from: "0x0000000000000000000000000000000000000001"});
		const uintvNZ7Cbf = await Fompcq53BmD.balanceOf.call(addressPlHpple, {from: accounts[4]});
		const addressAdDHEK = await Fompcq53BmD.delegate.call(addresswXNGD7Z, {from: accounts[2]});
		const uint96UrVOcuq = await Fompcq53BmD.getCurrentVotes.call(addresshUGH0IU, {from: accounts[2]});

		assert.equal(uint96UrVOcuq, BigInt("0"))
		assert.equal(uintWEhdYDA, BigInt("0"))
		assert.equal(uintvNZ7Cbf, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressIUDxjZg = accounts[1]
		const FompbcQc5Cb = await Fomp.new(addressIUDxjZg, {from: accounts[2]});
		const uintepVr3QO = BigInt("1876")
		const addresszYUMtJz = accounts[0]
		const addressvE1A3eg = accounts[0]
		const addressnXSSPDg = accounts[5]
		const address14CsL7 = accounts[0]
		const addressMcf1LPZ = accounts[2]
		const boolbKdoaqb = await FompbcQc5Cb.approve.call(addresszYUMtJz, uintepVr3QO, {from: accounts[1]});
		const uintuGWgirp = await FompbcQc5Cb.allowance.call(addressnXSSPDg, addressvE1A3eg, {from: accounts[1]});
		const addressZjd6nNA = await FompbcQc5Cb.delegate.call(address14CsL7, {from: accounts[3]});
		const uint96cC2PoVI = await FompbcQc5Cb.getCurrentVotes.call(addressMcf1LPZ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolbKdoaqb, true)
		assert.equal(uint96cC2PoVI, BigInt("0"))
		assert.equal(uintuGWgirp, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressbEukrI3 = "0x0000000000000000000000000000000000000001"
		const FompHo0sjGS = await Fomp.new(addressbEukrI3, {from: "0x0000000000000000000000000000000000000001"});
		const addresseXAggyl = accounts[4]
		const uintEnRWJ6r = BigInt("1149")
		const addressxFH0BUo = accounts[4]
		const uintO79r6Pn = BigInt("1749")
		const addressBiR1oox = accounts[3]
		const uint96Twc8oKm = await FompHo0sjGS.getCurrentVotes.call(addresseXAggyl, {from: accounts[2]});
		const booloVEV4cZ = await FompHo0sjGS.transfer.call(addressxFH0BUo, uintEnRWJ6r, {from: accounts[1]});
		const boolSbxQ6gm = await FompHo0sjGS.approve.call(addressBiR1oox, uintO79r6Pn, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Fomp', async () => {
		const addressSHUz0tg = accounts[2]
		const Fompcq53BmD = await Fomp.new(addressSHUz0tg, {from: accounts[1]});
		const addressxJKwIO = accounts[3]
		const addressAEmHrEn = accounts[4]
		const uint4boTif = BigInt("21")
		const addresshcOXeqX = accounts[1]
		const addressKYl3jgZ = accounts[4]
		const uintkuiT1q = await Fompcq53BmD.allowance.call(addressAEmHrEn, addressxJKwIO, {from: accounts[1]});
		const uint96OtEZtFs = await Fompcq53BmD.getPriorVotes.call(addresshcOXeqX, uint4boTif, {from: accounts[2]});
		const addresshDp97D1 = await Fompcq53BmD.delegate.call(addressKYl3jgZ, {from: accounts[1]});

		assert.equal(uint96OtEZtFs, BigInt("0"))
		assert.equal(uintkuiT1q, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressqvHIM0t = accounts[1]
		const FompbcQc5Cb = await Fomp.new(addressqvHIM0t, {from: accounts[2]});
		const uintyn6qFuu = BigInt("434")
		const addressYtYwg5r = "0x0000000000000000000000000000000000000001"
		const addressdBGQUD = accounts[5]
		const byteX4wWbdY = "0x180415131a08100f080e201d15010c0c0d131c0d0a0c0a121e0c1701151c1b09"
		const byteJWJyfdb = "0x0d1c010f0e1113070a081bfffffff906132008080e19080f050f0c1e19150c1d0b051d"
		const uintGfFb7Gl = BigInt("51")
		const uintoI59oIr = BigInt("1131")
		const uintse1LsZw = BigInt("1788")
		const addresssRD0LvF = accounts[2]
		const addresstgAoYhz = accounts[2]
		const addressDkwWLGz = accounts[5]
		const addresszq2wXXl = accounts[0]
		const addressiZiBOjL = accounts[1]
		const addressFFdvEXb = accounts[1]
		const bool9mdCjU = await FompbcQc5Cb.approve.call(addressYtYwg5r, uintyn6qFuu, {from: accounts[3]});
		const uint96UU2WL08 = await FompbcQc5Cb.getCurrentVotes.call(addressdBGQUD, {from: accounts[4]});
//		const addressdEQvXbb = await FompbcQc5Cb.delegateBySig.call(addresssRD0LvF, uintse1LsZw, uintoI59oIr, uintGfFb7Gl, byteJWJyfdb, byteX4wWbdY, {from: "0x0000000000000000000000000000000000000001"});
//		const uint96gmOg5Y9 = await FompbcQc5Cb.getCurrentVotes.call(addresstgAoYhz, {from: accounts[3]});
//		const addressN13lrta = await FompbcQc5Cb.delegate.call(addressDkwWLGz, {from: accounts[4]});
//		const addressj4hoNur = await FompbcQc5Cb.delegate.call(addresszq2wXXl, {from: accounts[2]});
//		const uintuGWgirp = await FompbcQc5Cb.allowance.call(addressFFdvEXb, addressiZiBOjL, {from: accounts[1]});

		assert.equal(bool9mdCjU, true)
		assert.equal(uint96UU2WL08, BigInt("0"))
		await expect(FompbcQc5Cb.delegateBySig.call(addresssRD0LvF, uintse1LsZw, uintoI59oIr, uintGfFb7Gl, byteJWJyfdb, byteX4wWbdY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})