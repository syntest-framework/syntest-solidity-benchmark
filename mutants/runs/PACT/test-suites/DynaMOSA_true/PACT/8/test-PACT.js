const PACT = artifacts.require("PACT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('PACT', (accounts) => {
	it('test for PACT', async () => {
		const PACTc3sOjSh = await PACT.new({from: accounts[4]});
		const uintY73W6yS = BigInt("477")
		const addressom6fFU9 = accounts[0]
		const bool6XUHdA = await PACTc3sOjSh.transfer.call(addressom6fFU9, uintY73W6yS, {from: accounts[1]});
		const stringmAXeRNC = await PACTc3sOjSh.name.call({from: accounts[1]});

		await expect(PACTc3sOjSh.transfer.call(addressom6fFU9, uintY73W6yS, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTYDAOlhJ = await PACT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintkSHVgcv = BigInt("253")
		const addressG19ZCG3 = "0x0000000000000000000000000000000000000001"
		const addressVrEzWn2 = "0x0000000000000000000000000000000000000001"
		const addressWi8iaa7 = accounts[3]
		const boolHXtirSG = await PACTYDAOlhJ.approve.call(addressG19ZCG3, uintkSHVgcv, {from: "0x0000000000000000000000000000000000000001"});
		const boolRDckoxr = await PACTYDAOlhJ.setupFarming.call(addressVrEzWn2, {from: accounts[2]});
		const stringBnzq3jq = await PACTYDAOlhJ.symbol.call({from: accounts[4]});
		const bool4KKZg8 = await PACTYDAOlhJ.setupRewards.call(addressWi8iaa7, {from: accounts[1]});
	});

	it('test for PACT', async () => {
		const PACTAUWPHwI = await PACT.new({from: accounts[0]});
		const addresseWcCUDp = accounts[2]
		const addressd6KnG3o = accounts[2]
		const addressNfNZQEN = accounts[3]
		const addresssqtYTNH = accounts[5]
		const addressHWDAdXj = accounts[2]
		const uintKM0HVrj = await PACTAUWPHwI.balanceOf.call(addresseWcCUDp, {from: accounts[4]});
		const uint8GA2MYHz = await PACTAUWPHwI.decimals.call({from: accounts[1]});
		const booldNDKpw = await PACTAUWPHwI.setupReserve.call(addressd6KnG3o, {from: accounts[4]});
		const uintQPrsqAf = await PACTAUWPHwI.allowance.call(addresssqtYTNH, addressNfNZQEN, {from: accounts[5]});
		const boolMvNSHWy = await PACTAUWPHwI.setupTeam.call(addressHWDAdXj, {from: accounts[0]});

		assert.equal(uint8GA2MYHz, BigInt("18"))
		assert.equal(uintKM0HVrj, BigInt("0"))
		await expect(PACTAUWPHwI.setupReserve.call(addressd6KnG3o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACThk8RO3V = await PACT.new({from: accounts[3]});
		const addressJ3unE38 = "0x0000000000000000000000000000000000000001"
		const addressXbSHDrc = accounts[4]
		const addressn2DDf7 = accounts[4]
		const addressPcFgKE9 = accounts[2]
		const boolqU3Ekez = await PACThk8RO3V.setupRewards.call(addressJ3unE38, {from: accounts[0]});
		const uintEtha02Q = await PACThk8RO3V.allowance.call(addressn2DDf7, addressXbSHDrc, {from: accounts[2]});
		const boolp004Js8 = await PACThk8RO3V.setupReserve.call(addressPcFgKE9, {from: accounts[4]});

		await expect(PACThk8RO3V.setupRewards.call(addressJ3unE38, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTyAOzwyd = await PACT.new({from: accounts[3]});
		const addressaScrKC5 = accounts[4]
		const addresshhHFiAY = accounts[4]
		const boolvBsoH7L = await PACTyAOzwyd.setupBasePool.call(addressaScrKC5, {from: accounts[5]});
		const boolNGsSfrq = await PACTyAOzwyd.setupReserve.call(addresshhHFiAY, {from: accounts[5]});
		const uint8XC24C5 = await PACTyAOzwyd.decimals.call({from: accounts[0]});

		await expect(PACTyAOzwyd.setupBasePool.call(addressaScrKC5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTpwO4IXI = await PACT.new({from: accounts[1]});
		const addresscdejpdc = accounts[0]
		const addressixs1z4y = accounts[2]
		const uint1Akt27 = BigInt("999")
		const addressT4bT0ZR = accounts[1]
		const addressb2yTegW = accounts[3]
		const addressgRACgiz = accounts[0]
		const boolYMzQUkq = await PACTpwO4IXI.setupTeam.call(addresscdejpdc, {from: "0x0000000000000000000000000000000000000001"});
		const booltLwCJH = await PACTpwO4IXI.setupBasePool.call(addressixs1z4y, {from: accounts[1]});
		const boolVkqk1bk = await PACTpwO4IXI.transfer.call(addressT4bT0ZR, uint1Akt27, {from: accounts[0]});
		const stringpRf3hae = await PACTpwO4IXI.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolXfT6Qcu = await PACTpwO4IXI.setupRewards.call(addressb2yTegW, {from: accounts[0]});
		const boolWEciazT = await PACTpwO4IXI.setupReserve.call(addressgRACgiz, {from: accounts[3]});

		await expect(PACTpwO4IXI.setupTeam.call(addresscdejpdc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTId1hddo = await PACT.new({from: accounts[4]});
		const addressI3dJDPE = accounts[2]
		const addresss8MeiQq = accounts[0]
		const uintYNSCSrY = BigInt("723")
		const addressVRyko3L = accounts[3]
		const uintv5CVsbT = BigInt("1424")
		const addressCmTxyYr = "0x0000000000000000000000000000000000000001"
		const boolXSbZaWt = await PACTId1hddo.setupFarming.call(addressI3dJDPE, {from: accounts[0]});
		const stringnnLoFhW = await PACTId1hddo.name.call({from: accounts[4]});
		const boollm28psx = await PACTId1hddo.setupRewards.call(addresss8MeiQq, {from: accounts[0]});
		const boolGE0vAXu = await PACTId1hddo.burn.call(addressVRyko3L, uintYNSCSrY, {from: accounts[0]});
		const boolbE4UMph = await PACTId1hddo.transfer.call(addressCmTxyYr, uintv5CVsbT, {from: accounts[1]});

		await expect(PACTId1hddo.setupFarming.call(addressI3dJDPE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTc3sOjSh = await PACT.new({from: accounts[4]});
		const addressIfEBywi = "0x0000000000000000000000000000000000000001"
		const stringmAXeRNC = await PACTc3sOjSh.name.call({from: accounts[1]});
		const uintV8l5EeN = await PACTc3sOjSh.balanceOf.call(addressIfEBywi, {from: accounts[0]});

		assert.equal(stringmAXeRNC, "P2PB2B community token")
		assert.equal(uintV8l5EeN, BigInt("0"))
	});

	it('test for PACT', async () => {
		const PACTAUWPHwI = await PACT.new({from: accounts[0]});
		const addressTKOt5BV = accounts[2]
		const addressTJDe9q6 = accounts[5]
		const addressg64wFGm = accounts[4]
		const addressJRU5Rxk = accounts[2]
		const addressBSBe7RO = accounts[3]
		const addressGsM4Dyt = accounts[5]
		const addressR9xShOO = accounts[2]
		const uintKM0HVrj = await PACTAUWPHwI.balanceOf.call(addressTKOt5BV, {from: accounts[4]});
		const uint8FOtVzNp = await PACTAUWPHwI.decimals.call({from: accounts[5]});
		const uintRNES7vG = await PACTAUWPHwI.allowance.call(addressg64wFGm, addressTJDe9q6, {from: accounts[0]});
		const uint8GA2MYHz = await PACTAUWPHwI.decimals.call({from: accounts[1]});
		const booldNDKpw = await PACTAUWPHwI.setupReserve.call(addressJRU5Rxk, {from: accounts[4]});
		const uintQPrsqAf = await PACTAUWPHwI.allowance.call(addressGsM4Dyt, addressBSBe7RO, {from: accounts[5]});
		const boolMvNSHWy = await PACTAUWPHwI.setupTeam.call(addressR9xShOO, {from: accounts[0]});

		assert.equal(uint8FOtVzNp, BigInt("18"))
		assert.equal(uint8GA2MYHz, BigInt("18"))
		assert.equal(uintKM0HVrj, BigInt("0"))
		assert.equal(uintRNES7vG, BigInt("0"))
		await expect(PACTAUWPHwI.setupReserve.call(addressJRU5Rxk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACThk8RO3V = await PACT.new({from: accounts[3]});
		const addressv8jsGNQ = "0x00000000000000000000000000000000000000-1"
		const addressVXBdnl = accounts[0]
		const addressbUzLGAI = accounts[4]
		const addresskcMShnM = accounts[4]
		const addresshruAZli = accounts[4]
		const addressXRPuT7 = accounts[2]
		const boolqU3Ekez = await PACThk8RO3V.setupRewards.call(addressv8jsGNQ, {from: accounts[0]});
		const boolC0jSnb6 = await PACThk8RO3V.setupFarming.call(addressVXBdnl, {from: accounts[1]});
		const boolMYaIKLH = await PACThk8RO3V.setupReserve.call(addressbUzLGAI, {from: accounts[2]});
		const stringyBvgJuC = await PACThk8RO3V.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uintEtha02Q = await PACThk8RO3V.allowance.call(addresshruAZli, addresskcMShnM, {from: accounts[2]});
		const boolp004Js8 = await PACThk8RO3V.setupReserve.call(addressXRPuT7, {from: accounts[4]});

		await expect(PACThk8RO3V.setupRewards.call(addressv8jsGNQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTyAOzwyd = await PACT.new({from: accounts[3]});
		const addressRayPufJ = accounts[5]
		const addressezCpysh = accounts[4]
		const uint9qGeF5 = await PACTyAOzwyd.totalSupply.call({from: accounts[3]});
		const boolvBsoH7L = await PACTyAOzwyd.setupBasePool.call(addressRayPufJ, {from: accounts[5]});
		const uint8zNByC2L = await PACTyAOzwyd.decimals.call({from: accounts[1]});
		const stringcCJlTYy = await PACTyAOzwyd.symbol.call({from: accounts[0]});
		const boolNGsSfrq = await PACTyAOzwyd.setupReserve.call(addressezCpysh, {from: accounts[5]});

		assert.equal(uint9qGeF5, BigInt("1000000000000000000000000000"))
		await expect(PACTyAOzwyd.setupBasePool.call(addressRayPufJ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTkLcP8EZ = await PACT.new({from: accounts[2]});
		const uintHoSF3Pt = BigInt("769")
		const addressXXjiCw = accounts[5]
		const addressZJdTl5a = accounts[1]
		const uintSolqHWG = BigInt("1886")
		const addressQcURkh = accounts[0]
		const addressNUBglqj = accounts[1]
		const boole7KMvEa = await PACTkLcP8EZ.transferFrom.call(addressZJdTl5a, addressXXjiCw, uintHoSF3Pt, {from: accounts[3]});
		const boolRpmIxJZ = await PACTkLcP8EZ.burn.call(addressQcURkh, uintSolqHWG, {from: accounts[3]});
		const boolTy3l5UW = await PACTkLcP8EZ.setupFarming.call(addressNUBglqj, {from: accounts[4]});

		await expect(PACTkLcP8EZ.transferFrom.call(addressZJdTl5a, addressXXjiCw, uintHoSF3Pt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTyAOzwyd = await PACT.new({from: accounts[3]});
		const uintwW9PJK4 = BigInt("713")
		const addressDFhWEj = accounts[4]
		const boolIF4ImBD = await PACTyAOzwyd.burn.call(addressDFhWEj, uintwW9PJK4, {from: accounts[2]});
		const uint8XC24C5 = await PACTyAOzwyd.decimals.call({from: accounts[0]});

		await expect(PACTyAOzwyd.burn.call(addressDFhWEj, uintwW9PJK4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTsXKapnd = await PACT.new({from: accounts[2]});
		const uinteCYQfps = BigInt("260")
		const addresszUlZfRO = accounts[2]
		const addressqKIXxmA = accounts[2]
		const addressg22xGkP = accounts[0]
		const bool6DAwtZ = await PACTsXKapnd.approve.call(addresszUlZfRO, uinteCYQfps, {from: accounts[4]});
		const uintJNhO8PU = await PACTsXKapnd.allowance.call(addressg22xGkP, addressqKIXxmA, {from: accounts[3]});
		const uintioPQmv = await PACTsXKapnd.totalSupply.call({from: accounts[4]});

		assert.equal(bool6DAwtZ, true)
		assert.equal(uintJNhO8PU, BigInt("0"))
		assert.equal(uintioPQmv, BigInt("1000000000000000000000000000"))
	});

	it('test for PACT', async () => {
		const PACTyAOzwyd = await PACT.new({from: accounts[3]});
		const uintNqv3FKd = BigInt("670")
		const addresslJAuqaG = accounts[4]
		const uintDp7ugk = BigInt("1392")
		const addressRTMviBJ = accounts[3]
		const addressvVgo6fP = accounts[0]
		const stringlwmxwuY = await PACTyAOzwyd.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolIF4ImBD = await PACTyAOzwyd.burn.call(addresslJAuqaG, uintNqv3FKd, {from: accounts[2]});
		const uint8XC24C5 = await PACTyAOzwyd.decimals.call({from: accounts[0]});
		const boolWoQDRsz = await PACTyAOzwyd.transferFrom.call(addressvVgo6fP, addressRTMviBJ, uintDp7ugk, {from: accounts[3]});
		const uint8KLvRjp3 = await PACTyAOzwyd.decimals.call({from: accounts[3]});

		assert.equal(stringlwmxwuY, "PACT")
		await expect(PACTyAOzwyd.burn.call(addresslJAuqaG, uintNqv3FKd, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for PACT', async () => {
		const PACTRfBtLF = await PACT.new({from: accounts[5]});
		const addresshxS18NJ = "0x0000000000000000000000000000000000000001"
		const addressC9xKFbM = accounts[3]
		const uintfKy6Xc6 = BigInt("159")
		const addressNVBLy4W = accounts[0]
		const addressPPkck77 = "0x0000000000000000000000000000000000000000"
		const uintEdDjGDq = await PACTRfBtLF.allowance.call(addressC9xKFbM, addresshxS18NJ, {from: accounts[1]});
		const boolNRnwyC = await PACTRfBtLF.transferFrom.call(addressPPkck77, addressNVBLy4W, uintfKy6Xc6, {from: accounts[1]});
		const stringXmuCUBp = await PACTRfBtLF.symbol.call({from: accounts[5]});

		assert.equal(uintEdDjGDq, BigInt("0"))
		await expect(PACTRfBtLF.transferFrom.call(addressPPkck77, addressNVBLy4W, uintfKy6Xc6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})