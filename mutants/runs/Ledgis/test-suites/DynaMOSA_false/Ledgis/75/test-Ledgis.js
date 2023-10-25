const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const Ledgisll9ilXs = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintGNHr6A1 = BigInt("1864")
		const addressqZuXdER = "0x0000000000000000000000000000000000000001"
		const uintr9EkikQ = BigInt("1137")
		const addresssFOqRkh = accounts[2]
		const addressV33LGrd = accounts[1]
		const addressbSMhpPx = accounts[0]
		const uintcx9V5ZU = BigInt("436")
		const addressdjP9Jq4 = accounts[3]
		const boolQZhQYe5 = await Ledgisll9ilXs.increaseAllowance.call(addressqZuXdER, uintGNHr6A1, {from: accounts[4]});
		await Ledgisll9ilXs.lockState.call(addresssFOqRkh, uintr9EkikQ, {from: accounts[5]});
		await Ledgisll9ilXs.pause.call({from: accounts[0]});
		const uint256mKlDzoe = await Ledgisll9ilXs.allowance.call(addressbSMhpPx, addressV33LGrd, {from: accounts[3]});
		await Ledgisll9ilXs.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const boolGQff5tw = await Ledgisll9ilXs.decreaseAllowance.call(addressdjP9Jq4, uintcx9V5ZU, {from: accounts[0]});
	});

	it('test for Ledgis', async () => {
		const LedgispsdGkLU = await Ledgis.new({from: accounts[2]});
		const uintZ1w5J9e = BigInt("901")
		const addressa3a9o5N = accounts[0]
		const addressENBRl4e = accounts[5]
		const uintk0vZxeq = BigInt("1363")
		const uintfoGbvR = BigInt("1770")
		const addressmjuUc1 = accounts[1]
		const boolHrUyWRv = await LedgispsdGkLU.transferFrom.call(addressENBRl4e, addressa3a9o5N, uintZ1w5J9e, {from: accounts[4]});
		const addresstjmxHoe = await LedgispsdGkLU.lockAfter.call(addressmjuUc1, uintfoGbvR, uintk0vZxeq, {from: accounts[4]});
		await LedgispsdGkLU.onlyOwner.call({from: accounts[4]});

		await expect(LedgispsdGkLU.transferFrom.call(addressENBRl4e, addressa3a9o5N, uintZ1w5J9e, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDE9prM = await Ledgis.new({from: accounts[4]});
		const uintQeavlwQ = BigInt("1731")
		const addressPKasDX3 = accounts[2]
		const addressJ8oNJro = accounts[0]
		const addressk0M4Tev = accounts[1]
		const uintpB4GTYC = BigInt("211")
		const addressAuQHun = accounts[1]
		const boolT2g0NhZ = await LedgisDE9prM.transfer.call(addressPKasDX3, uintQeavlwQ, {from: accounts[2]});
		const addressallumRt = await LedgisDE9prM.unfreeze.call(addressJ8oNJro, {from: accounts[4]});
		const boolkUKj7zM = await LedgisDE9prM.isFrozen.call(addressk0M4Tev, {from: accounts[1]});
		const boolNZScTIH = await LedgisDE9prM.increaseAllowance.call(addressAuQHun, uintpB4GTYC, {from: accounts[4]});

		await expect(LedgisDE9prM.transfer.call(addressPKasDX3, uintQeavlwQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgislK7sRe = await Ledgis.new({from: accounts[1]});
		const addressWtHuo77 = accounts[2]
		const uintIxIJ3t = BigInt("39")
		const addressEZcHQHb = accounts[4]
		const uintGsFh6OQ = BigInt("265")
		const address48eqOd = accounts[3]
		const uintcgVk7IV = BigInt("1472")
		const addressw1Z2DEU = accounts[1]
		const uintXiUtY9w = BigInt("82")
		const addresshzJGINF = accounts[3]
		const addressioAKCH = await LedgislK7sRe.freeze.call(addressWtHuo77, {from: accounts[4]});
		const boolmezxxQv = await LedgislK7sRe.approve.call(addressEZcHQHb, uintIxIJ3t, {from: accounts[0]});
		const boolwfxiHh7 = await LedgislK7sRe.approve.call(address48eqOd, uintGsFh6OQ, {from: accounts[3]});
		const addressPLQUJYb = await LedgislK7sRe.unlock.call(addressw1Z2DEU, uintcgVk7IV, {from: accounts[3]});
		const addresstlR9HqK = await LedgislK7sRe.unlock.call(addresshzJGINF, uintXiUtY9w, {from: accounts[0]});

		await expect(LedgislK7sRe.freeze.call(addressWtHuo77, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisz3WArN = await Ledgis.new({from: accounts[4]});
		const uint31YcVp = BigInt("1384")
		const addressdwpCrFd = "0x0000000000000000000000000000000000000001"
		await Ledgisz3WArN.whenPaused.call({from: accounts[5]});
		const addresssfb90nJ = await Ledgisz3WArN.burn.call(addressdwpCrFd, uint31YcVp, {from: accounts[4]});

		await expect(Ledgisz3WArN.whenPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOAUJ6rs = await Ledgis.new({from: accounts[3]});
		const addressVRfKB9 = accounts[2]
		const uintCNcyVY7 = BigInt("562")
		const addressYlGE2ic = accounts[3]
		const addressld566zD = accounts[3]
		const addresss0YKnjg = accounts[5]
		const addressjpG5B09 = accounts[2]
		const uint256PJgb5cB = await LedgisOAUJ6rs.balanceOf.call(addressVRfKB9, {from: accounts[2]});
		const addresskPGHNJ0 = await LedgisOAUJ6rs.burn.call(addressYlGE2ic, uintCNcyVY7, {from: accounts[0]});
		const uint256qzH9sF2 = await LedgisOAUJ6rs.balanceOf.call(addressld566zD, {from: accounts[4]});
		const uint256C8GgoKR = await LedgisOAUJ6rs.allowance.call(addressjpG5B09, addresss0YKnjg, {from: accounts[2]});

		assert.equal(uint256PJgb5cB, BigInt("0"))
		await expect(LedgisOAUJ6rs.burn.call(addressYlGE2ic, uintCNcyVY7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisz3WArN = await Ledgis.new({from: accounts[4]});
		const uintmvyAQrn = BigInt("1384")
		const addressveHmm2w = "0x0000000000000000000000000000000000000001"
		const addresssfb90nJ = await Ledgisz3WArN.burn.call(addressveHmm2w, uintmvyAQrn, {from: accounts[4]});

		await expect(Ledgisz3WArN.burn.call(addressveHmm2w, uintmvyAQrn, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisfKuypd0 = await Ledgis.new({from: accounts[1]});
		const addresst157xOL = accounts[1]
		const uintu35KGTd = BigInt("511")
		const uintEUTRwRZ = BigInt("800")
		const uintxaeXOlq = BigInt("38")
		const addresskjE0exr = accounts[0]
		const boolkHFMJl = await LedgisfKuypd0.isFrozen.call(addresst157xOL, {from: accounts[3]});
		const uint256cZxeDzj = await LedgisfKuypd0.afterTime.call(uintu35KGTd, {from: accounts[2]});
		const addressbWZkaP = await LedgisfKuypd0.lockAfter.call(addresskjE0exr, uintxaeXOlq, uintEUTRwRZ, {from: accounts[3]});
		await LedgisfKuypd0.whenNotPaused.call({from: accounts[1]});

		assert.equal(boolkHFMJl, false)
		assert.equal(uint256cZxeDzj, BigInt("1630233373"))
		await expect(LedgisfKuypd0.lockAfter.call(addresskjE0exr, uintxaeXOlq, uintEUTRwRZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOAUJ6rs = await Ledgis.new({from: accounts[3]});
		const addressA0x3c2H = accounts[2]
		const addressDswisTi = accounts[3]
		const addressVDWI4tU = "0x0000000000000000000000000000000000000001"
		const addresseXT5Lp2 = accounts[5]
		const addresst33n3xG = accounts[2]
		const uintm3GWhwq = BigInt("1896")
		const addressmECB0ey = accounts[5]
		const addresskSvl6bT = accounts[4]
		const uint256PJgb5cB = await LedgisOAUJ6rs.balanceOf.call(addressA0x3c2H, {from: accounts[2]});
		const uint256qzH9sF2 = await LedgisOAUJ6rs.balanceOf.call(addressDswisTi, {from: accounts[4]});
		const boolexJpDOs = await LedgisOAUJ6rs.isFrozen.call(addressVDWI4tU, {from: accounts[3]});
		const uint256C8GgoKR = await LedgisOAUJ6rs.allowance.call(addresst33n3xG, addresseXT5Lp2, {from: accounts[2]});
		const boolq2FLUBs = await LedgisOAUJ6rs.transferFrom.call(addresskSvl6bT, addressmECB0ey, uintm3GWhwq, {from: accounts[0]});

		assert.equal(boolexJpDOs, false)
		assert.equal(uint256C8GgoKR, BigInt("0"))
		assert.equal(uint256PJgb5cB, BigInt("0"))
		assert.equal(uint256qzH9sF2, BigInt("10000000000000"))
		await expect(LedgisOAUJ6rs.transferFrom.call(addresskSvl6bT, addressmECB0ey, uintm3GWhwq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOAUJ6rs = await Ledgis.new({from: accounts[3]});
		const uintEIDBVAj = BigInt("87")
		const addressVxSS10 = accounts[5]
		const addressBntbb86 = accounts[2]
		const addressICKLRxv = accounts[3]
		const uintDTpQgCJ = BigInt("697")
		const uints7eJqL = BigInt("559")
		const addressNu2B1hI = accounts[3]
		const addressjA0Ixfj = accounts[5]
		const addressziphxOQ = accounts[2]
		const boolCNo0KWz = await LedgisOAUJ6rs.approve.call(addressVxSS10, uintEIDBVAj, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PJgb5cB = await LedgisOAUJ6rs.balanceOf.call(addressBntbb86, {from: accounts[2]});
		await LedgisOAUJ6rs.whenNotPaused.call({from: accounts[0]});
		const uint256qzH9sF2 = await LedgisOAUJ6rs.balanceOf.call(addressICKLRxv, {from: accounts[4]});
		const addressl2ll9OV = await LedgisOAUJ6rs.lock.call(addressNu2B1hI, uints7eJqL, uintDTpQgCJ, {from: accounts[0]});
		const uint256C8GgoKR = await LedgisOAUJ6rs.allowance.call(addressziphxOQ, addressjA0Ixfj, {from: accounts[2]});

		assert.equal(boolCNo0KWz, true)
		assert.equal(uint256PJgb5cB, BigInt("0"))
		await expect(LedgisOAUJ6rs.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisDClbIeI = await Ledgis.new({from: accounts[4]});
		const addresshCKfiWr = accounts[0]
		const uintiUrkPc = BigInt("1630")
		const addressSVdaeoe = accounts[0]
		const addressflSVUAH = accounts[1]
		const addressjYvtBCY = accounts[0]
		const addressCzyNula = await LedgisDClbIeI.unfreeze.call(addresshCKfiWr, {from: accounts[4]});
		await LedgisDClbIeI.pause.call({from: accounts[3]});
		const boolYmRC59l = await LedgisDClbIeI.approve.call(addressSVdaeoe, uintiUrkPc, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BEPDKjr = await LedgisDClbIeI.lockCount.call(addressflSVUAH, {from: accounts[4]});
		const uint256RQxdUB7 = await LedgisDClbIeI.balanceOf.call(addressjYvtBCY, {from: accounts[0]});

		await expect(LedgisDClbIeI.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOAUJ6rs = await Ledgis.new({from: accounts[3]});
		const addressxdzorS = accounts[2]
		const addressjxqiM4D = accounts[4]
		const addressQRLi2Qb = accounts[0]
		const address6GMqmB = accounts[3]
		const addressjMfze7Q = "0x0000000000000000000000000000000000000001"
		const addressGtTtS0A = accounts[1]
		const addressDSJ9spN = accounts[5]
		const addresspTvQDx = accounts[2]
		const uintnQfFlsa = BigInt("1896")
		const addressaW2cuMd = accounts[6]
		const addressagSpkHv = accounts[4]
		const uint256PJgb5cB = await LedgisOAUJ6rs.balanceOf.call(addressxdzorS, {from: accounts[2]});
		const uint256KI3DD4 = await LedgisOAUJ6rs.allowance.call(addressQRLi2Qb, addressjxqiM4D, {from: accounts[0]});
		const uint256qzH9sF2 = await LedgisOAUJ6rs.balanceOf.call(address6GMqmB, {from: accounts[4]});
		const boolexJpDOs = await LedgisOAUJ6rs.isFrozen.call(addressjMfze7Q, {from: accounts[3]});
		const uint256u3rtHMr = await LedgisOAUJ6rs.lockCount.call(addressGtTtS0A, {from: accounts[5]});
		const uint256C8GgoKR = await LedgisOAUJ6rs.allowance.call(addresspTvQDx, addressDSJ9spN, {from: accounts[2]});
		const boolq2FLUBs = await LedgisOAUJ6rs.transferFrom.call(addressagSpkHv, addressaW2cuMd, uintnQfFlsa, {from: accounts[0]});

		assert.equal(boolexJpDOs, false)
		assert.equal(uint256C8GgoKR, BigInt("0"))
		assert.equal(uint256KI3DD4, BigInt("0"))
		assert.equal(uint256PJgb5cB, BigInt("0"))
		assert.equal(uint256qzH9sF2, BigInt("10000000000000"))
		assert.equal(uint256u3rtHMr, BigInt("0"))
		await expect(LedgisOAUJ6rs.transferFrom.call(addressagSpkHv, addressaW2cuMd, uintnQfFlsa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOAUJ6rs = await Ledgis.new({from: accounts[3]});
		const addressS3ksvwt = accounts[2]
		const addressAtAKNJr = accounts[3]
		const addressrZwPok3 = "0x0000000000000000000000000000000000000001"
		const addressQ6Cbp5C = accounts[5]
		const addressjbI4qWN = accounts[2]
		const uinttQnFt6c = BigInt("1896")
		const addressN4joXzN = accounts[5]
		const addressZPu0Gsd = accounts[4]
		const uint256PJgb5cB = await LedgisOAUJ6rs.balanceOf.call(addressS3ksvwt, {from: accounts[2]});
		const uint256qzH9sF2 = await LedgisOAUJ6rs.balanceOf.call(addressAtAKNJr, {from: accounts[4]});
		const boolexJpDOs = await LedgisOAUJ6rs.isFrozen.call(addressrZwPok3, {from: accounts[3]});
		const uint256QaC8pcJ = await LedgisOAUJ6rs.currentTime.call({from: accounts[3]});
		const uint256C8GgoKR = await LedgisOAUJ6rs.allowance.call(addressjbI4qWN, addressQ6Cbp5C, {from: accounts[2]});
		const boolq2FLUBs = await LedgisOAUJ6rs.transferFrom.call(addressZPu0Gsd, addressN4joXzN, uinttQnFt6c, {from: accounts[0]});

		assert.equal(boolexJpDOs, false)
		assert.equal(uint256C8GgoKR, BigInt("0"))
		assert.equal(uint256PJgb5cB, BigInt("0"))
		assert.equal(uint256QaC8pcJ, BigInt("1630232861"))
		assert.equal(uint256qzH9sF2, BigInt("10000000000000"))
		await expect(LedgisOAUJ6rs.transferFrom.call(addressZPu0Gsd, addressN4joXzN, uinttQnFt6c, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOAUJ6rs = await Ledgis.new({from: accounts[3]});
		const addressGuMZ0uk = accounts[2]
		const addresssRkSRTJ = accounts[3]
		const addressOzhixp6 = "0x00000000000000000000000000000000000000-1"
		const addressSe8Hlb = accounts[1]
		const addressiudTXOV = accounts[6]
		const addressDcdK4AP = accounts[2]
		const uintlDTBAcS = BigInt("1896")
		const addresszlczs4a = accounts[5]
		const addressPXTPuqD = accounts[4]
		const uint256PJgb5cB = await LedgisOAUJ6rs.balanceOf.call(addressGuMZ0uk, {from: accounts[2]});
		const uint256qzH9sF2 = await LedgisOAUJ6rs.balanceOf.call(addresssRkSRTJ, {from: accounts[4]});
		const boolexJpDOs = await LedgisOAUJ6rs.isFrozen.call(addressOzhixp6, {from: accounts[3]});
		const uint256LJipAKw = await LedgisOAUJ6rs.balanceOf.call(addressSe8Hlb, {from: accounts[2]});
		const uint256C8GgoKR = await LedgisOAUJ6rs.allowance.call(addressDcdK4AP, addressiudTXOV, {from: accounts[2]});
		const boolq2FLUBs = await LedgisOAUJ6rs.transferFrom.call(addressPXTPuqD, addresszlczs4a, uintlDTBAcS, {from: accounts[0]});

		assert.equal(uint256PJgb5cB, BigInt("0"))
		assert.equal(uint256qzH9sF2, BigInt("10000000000000"))
		await expect(LedgisOAUJ6rs.isFrozen.call(addressOzhixp6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOAUJ6rs = await Ledgis.new({from: accounts[3]});
		const addressiGdyDdr = accounts[2]
		const addressb8wCMsK = accounts[3]
		const uintEVO2p6Q = BigInt("353")
		const addressghizOe = accounts[3]
		const addressYkYQAXA = "0x0000000000000000000000000000000000000001"
		const uinthgFBeuI = BigInt("1613")
		const addresssgAUAsw = accounts[2]
		const addressBMV19FK = accounts[3]
		const addressUHisTxC = accounts[6]
		const addressbujXl3A = accounts[2]
		const uintjXokuM6 = BigInt("1896")
		const addressvn6oo1p = accounts[6]
		const addressXkH9vmQ = accounts[4]
		const uint256PJgb5cB = await LedgisOAUJ6rs.balanceOf.call(addressiGdyDdr, {from: accounts[2]});
		const uint256qzH9sF2 = await LedgisOAUJ6rs.balanceOf.call(addressb8wCMsK, {from: accounts[4]});
		await LedgisOAUJ6rs.lockState.call(addressghizOe, uintEVO2p6Q, {from: "0x0000000000000000000000000000000000000001"});
		const boolexJpDOs = await LedgisOAUJ6rs.isFrozen.call(addressYkYQAXA, {from: accounts[3]});
		const booldexP2mS = await LedgisOAUJ6rs.transferFrom.call(addressBMV19FK, addresssgAUAsw, uinthgFBeuI, {from: accounts[4]});
		const uint256C8GgoKR = await LedgisOAUJ6rs.allowance.call(addressbujXl3A, addressUHisTxC, {from: accounts[2]});
		const boolq2FLUBs = await LedgisOAUJ6rs.transferFrom.call(addressXkH9vmQ, addressvn6oo1p, uintjXokuM6, {from: accounts[0]});

		assert.equal(uint256PJgb5cB, BigInt("0"))
		assert.equal(uint256qzH9sF2, BigInt("10000000000000"))
		await expect(LedgisOAUJ6rs.lockState.call(addressghizOe, uintEVO2p6Q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOAUJ6rs = await Ledgis.new({from: accounts[3]});
		const addresszZ1exur = accounts[2]
		const addressTnEF7Jw = accounts[4]
		const addressaZTbzT7 = "0x0000000000000000000000000000000000000000"
		const addressyreTmJw = accounts[1]
		const address9Sb7wI = accounts[6]
		const addresssZxi2DU = accounts[2]
		const uintl5oepf9 = BigInt("1896")
		const addressiIqmC10 = accounts[5]
		const addressMW25JyV = accounts[4]
		const uint256PJgb5cB = await LedgisOAUJ6rs.balanceOf.call(addresszZ1exur, {from: accounts[2]});
		const uint256qzH9sF2 = await LedgisOAUJ6rs.balanceOf.call(addressTnEF7Jw, {from: accounts[4]});
		const boolexJpDOs = await LedgisOAUJ6rs.isFrozen.call(addressaZTbzT7, {from: accounts[3]});
		const uint256LJipAKw = await LedgisOAUJ6rs.balanceOf.call(addressyreTmJw, {from: accounts[2]});
		await LedgisOAUJ6rs.renounceOwnership.call({from: accounts[3]});
		const uint256C8GgoKR = await LedgisOAUJ6rs.allowance.call(addresssZxi2DU, address9Sb7wI, {from: accounts[2]});
		const boolq2FLUBs = await LedgisOAUJ6rs.transferFrom.call(addressMW25JyV, addressiIqmC10, uintl5oepf9, {from: accounts[0]});

		assert.equal(boolexJpDOs, false)
		assert.equal(uint256LJipAKw, BigInt("0"))
		assert.equal(uint256PJgb5cB, BigInt("0"))
		assert.equal(uint256qzH9sF2, BigInt("0"))
		await expect(LedgisOAUJ6rs.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisCdqFDu9 = await Ledgis.new({from: accounts[1]});
		const uintO6SCv10 = BigInt("1111")
		const addressuSSmj6 = accounts[3]
		const addressjcS55pf = accounts[4]
		const uintJytwEUT = BigInt("717")
		const addressKwSB2cv = "0x0000000000000000000000000000000000000001"
		const uintlLW2lJF = BigInt("181")
		const addressG6VxRHj = accounts[4]
		const uintzyNoplq = BigInt("5")
		const addressqfzXRbe = accounts[3]
		const uint256TeNZRdq = await LedgisCdqFDu9.totalSupply.call({from: accounts[2]});
		const boolg8EEulu = await LedgisCdqFDu9.transferFrom.call(addressjcS55pf, addressuSSmj6, uintO6SCv10, {from: accounts[0]});
		const addressqBEx4sM = await LedgisCdqFDu9.unlock.call(addressKwSB2cv, uintJytwEUT, {from: accounts[2]});
		const addressBB5I1Un = await LedgisCdqFDu9.unlock.call(addressG6VxRHj, uintlLW2lJF, {from: accounts[0]});
		const boolSCcTFjL = await LedgisCdqFDu9.transfer.call(addressqfzXRbe, uintzyNoplq, {from: accounts[4]});

		assert.equal(uint256TeNZRdq, BigInt("10000000000000"))
		await expect(LedgisCdqFDu9.transferFrom.call(addressjcS55pf, addressuSSmj6, uintO6SCv10, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOAUJ6rs = await Ledgis.new({from: accounts[3]});
		const addressrD2npFu = accounts[3]
		const addressoiXHSid = accounts[3]
		const addresseKcrHEZ = "0x0000000000000000000000000000000000000001"
		const uintyzUhFli = BigInt("1646")
		const uintiJ7sIVw = BigInt("504")
		const addressNrAfqw2 = accounts[3]
		const uintbXSpGTR = BigInt("1613")
		const addressJNOsGr8 = accounts[2]
		const addresspJ63AH = accounts[3]
		const addresshy2NfmC = accounts[6]
		const addressG8vIVpZ = accounts[2]
		const addresslAV6f8M = accounts[3]
		const uinto5jcqAO = BigInt("1896")
		const addressSdQEllW = accounts[6]
		const addressYK2HVTw = accounts[4]
		const uint256PJgb5cB = await LedgisOAUJ6rs.balanceOf.call(addressrD2npFu, {from: accounts[2]});
		const uint256qzH9sF2 = await LedgisOAUJ6rs.balanceOf.call(addressoiXHSid, {from: accounts[4]});
		const boolexJpDOs = await LedgisOAUJ6rs.isFrozen.call(addresseKcrHEZ, {from: accounts[3]});
		const addressmPcVGH = await LedgisOAUJ6rs.lock.call(addressNrAfqw2, uintiJ7sIVw, uintyzUhFli, {from: accounts[3]});
		const booldexP2mS = await LedgisOAUJ6rs.transferFrom.call(addresspJ63AH, addressJNOsGr8, uintbXSpGTR, {from: accounts[4]});
		const uint256C8GgoKR = await LedgisOAUJ6rs.allowance.call(addressG8vIVpZ, addresshy2NfmC, {from: accounts[2]});
		const uint256dFd1diP = await LedgisOAUJ6rs.balanceOf.call(addresslAV6f8M, {from: accounts[1]});
		const boolq2FLUBs = await LedgisOAUJ6rs.transferFrom.call(addressYK2HVTw, addressSdQEllW, uinto5jcqAO, {from: accounts[0]});

		assert.equal(boolexJpDOs, false)
		assert.equal(uint256PJgb5cB, BigInt("10000000000000"))
		assert.equal(uint256qzH9sF2, BigInt("10000000000000"))
		await expect(LedgisOAUJ6rs.transferFrom.call(addresspJ63AH, addressJNOsGr8, uintbXSpGTR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgishUJm2mz = await Ledgis.new({from: accounts[5]});
		const uintjBv6uJD = BigInt("351")
		const addresscJ4B2J = accounts[4]
		const uintcTFTQWc = BigInt("470")
		const addressviVD34 = accounts[2]
		const addressBEKhea = accounts[3]
		const addresstrb1Xy = accounts[1]
		const uintvNm7xEW = BigInt("365")
		const addressMZCjzr = accounts[2]
		const addressDex4L1l = accounts[1]
		const boolvdl0ln = await LedgishUJm2mz.decreaseAllowance.call(addresscJ4B2J, uintjBv6uJD, {from: accounts[4]});
		const boolxalZD0b = await LedgishUJm2mz.mint.call(addressviVD34, uintcTFTQWc, {from: accounts[0]});
		const uint256JCgMR9m = await LedgishUJm2mz.allowance.call(addresstrb1Xy, addressBEKhea, {from: accounts[4]});
		await LedgishUJm2mz.lockState.call(addressMZCjzr, uintvNm7xEW, {from: accounts[3]});
		const addressSpOneP1 = await LedgishUJm2mz.transferOwnership.call(addressDex4L1l, {from: accounts[0]});

		await expect(LedgishUJm2mz.decreaseAllowance.call(addresscJ4B2J, uintjBv6uJD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOAUJ6rs = await Ledgis.new({from: accounts[3]});
		const uintwVAAAjM = BigInt("1811")
		const addressvJgEYF9 = accounts[3]
		const addressjmsRB0a = accounts[2]
		const addresskgfEa2y = accounts[3]
		const uinthSeKyI = BigInt("1953")
		const addresszF9lcmB = accounts[0]
		const addressYQrAKD0 = "0x0000000000000000000000000000000000000001"
		const addressyTghsF = accounts[5]
		const addressw4mz3NZ = accounts[2]
		const booloeV2ApR = await LedgisOAUJ6rs.increaseAllowance.call(addressvJgEYF9, uintwVAAAjM, {from: accounts[3]});
		const uint256PJgb5cB = await LedgisOAUJ6rs.balanceOf.call(addressjmsRB0a, {from: accounts[2]});
		const uint256qzH9sF2 = await LedgisOAUJ6rs.balanceOf.call(addresskgfEa2y, {from: accounts[4]});
		const boolJaZxXWZ = await LedgisOAUJ6rs.transfer.call(addresszF9lcmB, uinthSeKyI, {from: accounts[3]});
		const boolexJpDOs = await LedgisOAUJ6rs.isFrozen.call(addressYQrAKD0, {from: accounts[3]});
		const uint256C8GgoKR = await LedgisOAUJ6rs.allowance.call(addressw4mz3NZ, addressyTghsF, {from: accounts[2]});

		assert.equal(boolJaZxXWZ, true)
		assert.equal(boolexJpDOs, false)
		assert.equal(booloeV2ApR, true)
		assert.equal(uint256C8GgoKR, BigInt("0"))
		assert.equal(uint256PJgb5cB, BigInt("0"))
		assert.equal(uint256qzH9sF2, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgisOAUJ6rs = await Ledgis.new({from: accounts[3]});
		const addressMH3TgkR = accounts[2]
		const addresscMLDuEL = accounts[0]
		const uintkeKXPtl = BigInt("562")
		const addressJd9ulMp = accounts[4]
		const addresspGiPwZ = accounts[3]
		const addressMCYJqo = accounts[5]
		const addressagTzouW = accounts[2]
		const uint256PJgb5cB = await LedgisOAUJ6rs.balanceOf.call(addressMH3TgkR, {from: accounts[2]});
		const addressJuqfHKb = await LedgisOAUJ6rs.transferOwnership.call(addresscMLDuEL, {from: accounts[3]});
		const addresskPGHNJ0 = await LedgisOAUJ6rs.burn.call(addressJd9ulMp, uintkeKXPtl, {from: accounts[0]});
		const uint256qzH9sF2 = await LedgisOAUJ6rs.balanceOf.call(addresspGiPwZ, {from: accounts[4]});
		const uint256C8GgoKR = await LedgisOAUJ6rs.allowance.call(addressagTzouW, addressMCYJqo, {from: accounts[2]});

		assert.equal(uint256PJgb5cB, BigInt("0"))
		await expect(LedgisOAUJ6rs.burn.call(addressJd9ulMp, uintkeKXPtl, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisI5djvju = await Ledgis.new({from: accounts[4]});
		const uint7BDmSP = BigInt("1706")
		const addresslLIjsvu = accounts[3]
		const addressPj8hkou = accounts[0]
		const addressHPAc0gO = accounts[4]
		const uintHSSsE9 = BigInt("586")
		const addresskvlgD0 = accounts[1]
		const boolBFt7mdD = await LedgisI5djvju.increaseAllowance.call(addresslLIjsvu, uint7BDmSP, {from: accounts[3]});
		const addresso1az77m = await LedgisI5djvju.transferOwnership.call(addressPj8hkou, {from: accounts[4]});
		const addressTKSSl4z = await LedgisI5djvju.freeze.call(addressHPAc0gO, {from: accounts[4]});
		const addressIxGbV9X = await LedgisI5djvju.unlock.call(addresskvlgD0, uintHSSsE9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolBFt7mdD, true)
		await expect(LedgisI5djvju.unlock.call(addresskvlgD0, uintHSSsE9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis4CZuwq = await Ledgis.new({from: accounts[0]});
		const uintNUh81nt = BigInt("1408")
		const uintyZzcatY = BigInt("2004")
		const addressDuvqUO = accounts[5]
		const addressJnR6Bjk = accounts[0]
		const addressAtjGjf0 = "0x0000000000000000000000000000000000000001"
		const uintfW7KAY = BigInt("647")
		const addressWeAm6G6 = accounts[0]
		const bool7ADJvl = await Ledgis4CZuwq.transferWithLockAfter.call(addressDuvqUO, uintyZzcatY, uintNUh81nt, {from: accounts[0]});
		const uint2566af8yV = await Ledgis4CZuwq.allowance.call(addressAtjGjf0, addressJnR6Bjk, {from: accounts[1]});
		const boolDmBPl4K = await Ledgis4CZuwq.decreaseAllowance.call(addressWeAm6G6, uintfW7KAY, {from: accounts[3]});
		await Ledgis4CZuwq.unpause.call({from: accounts[5]});
		await Ledgis4CZuwq.whenNotPaused.call({from: accounts[1]});

		assert.equal(bool7ADJvl, true)
		assert.equal(uint2566af8yV, BigInt("0"))
		await expect(Ledgis4CZuwq.decreaseAllowance.call(addressWeAm6G6, uintfW7KAY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisyzhvy0u = await Ledgis.new({from: accounts[3]});
		const addressZgWTxAZ = accounts[5]
		const addressrZVoEAz = accounts[0]
		const uintyVGruqD = BigInt("503")
		const uinttFss5Cu = BigInt("1851")
		const addressuq7Jztd = accounts[0]
		const uintTD5n8Yo = BigInt("1172")
		const addressYE3p6bS = accounts[0]
		const addressNgsQMDE = await Ledgisyzhvy0u.freeze.call(addressZgWTxAZ, {from: accounts[3]});
		await Ledgisyzhvy0u.unpause.call({from: accounts[3]});
		const uint256HFcqQUK = await Ledgisyzhvy0u.balanceOf.call(addressrZVoEAz, {from: accounts[1]});
		const addressNoZKcHJ = await Ledgisyzhvy0u.lockAfter.call(addressuq7Jztd, uinttFss5Cu, uintyVGruqD, {from: accounts[1]});
		const booluWdIuGP = await Ledgisyzhvy0u.mint.call(addressYE3p6bS, uintTD5n8Yo, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Ledgisyzhvy0u.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisPTogYtB = await Ledgis.new({from: accounts[1]});
		const uintfQ0QyYi = BigInt("1586")
		const addressSC0Plds = accounts[0]
		const uintvhMNcj5 = BigInt("1234")
		const addressveGvAjx = accounts[2]
		const uint5KUEJ5 = BigInt("1065")
		const addressfE0SUVF = accounts[3]
		const addressOyvzmxy = accounts[3]
		const addressecIlT1e = accounts[1]
		const boolkzKeFP7 = await LedgisPTogYtB.mint.call(addressSC0Plds, uintfQ0QyYi, {from: accounts[1]});
		const boolJRnMZFJ = await LedgisPTogYtB.decreaseAllowance.call(addressveGvAjx, uintvhMNcj5, {from: accounts[1]});
		const boolI6DiNTd = await LedgisPTogYtB.transferFrom.call(addressOyvzmxy, addressfE0SUVF, uint5KUEJ5, {from: accounts[2]});
		const uint256Usfery0 = await LedgisPTogYtB.balanceOf.call(addressecIlT1e, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolkzKeFP7, true)
		await expect(LedgisPTogYtB.decreaseAllowance.call(addressveGvAjx, uintvhMNcj5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOAUJ6rs = await Ledgis.new({from: accounts[3]});
		const addressQDUlynz = accounts[2]
		const addressQLi3N2y = accounts[3]
		const uintoqIaKn6 = BigInt("1795")
		const uintwOw9qbb = BigInt("1281")
		const addressUXJrH7m = accounts[3]
		const addressaIkcDwM = "0x0000000000000000000000000000000000000001"
		const addressGM1iXj5 = accounts[5]
		const addressycb64W4 = accounts[2]
		const uintdgf42qs = BigInt("1896")
		const addressH5PRk8I = accounts[5]
		const addressRKpIzcQ = accounts[4]
		const uint256PJgb5cB = await LedgisOAUJ6rs.balanceOf.call(addressQDUlynz, {from: accounts[2]});
		const uint256qzH9sF2 = await LedgisOAUJ6rs.balanceOf.call(addressQLi3N2y, {from: accounts[4]});
		const boolYgqbsDz = await LedgisOAUJ6rs.transferWithLock.call(addressUXJrH7m, uintwOw9qbb, uintoqIaKn6, {from: accounts[3]});
		const boolexJpDOs = await LedgisOAUJ6rs.isFrozen.call(addressaIkcDwM, {from: accounts[3]});
		const uint256C8GgoKR = await LedgisOAUJ6rs.allowance.call(addressycb64W4, addressGM1iXj5, {from: accounts[2]});
		const boolq2FLUBs = await LedgisOAUJ6rs.transferFrom.call(addressRKpIzcQ, addressH5PRk8I, uintdgf42qs, {from: accounts[0]});

		assert.equal(boolYgqbsDz, true)
		assert.equal(boolexJpDOs, false)
		assert.equal(uint256C8GgoKR, BigInt("0"))
		assert.equal(uint256PJgb5cB, BigInt("0"))
		assert.equal(uint256qzH9sF2, BigInt("10000000000000"))
		await expect(LedgisOAUJ6rs.transferFrom.call(addressRKpIzcQ, addressH5PRk8I, uintdgf42qs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOAUJ6rs = await Ledgis.new({from: accounts[3]});
		const addresstdV9uSd = accounts[2]
		const addressjdCa1zi = accounts[3]
		const addressKv1L2Ns = "0x0000000000000000000000000000000000000000"
		const uintfsj15r = BigInt("1155")
		const addressvf1xKb5 = accounts[4]
		const addressYgUnRW3 = accounts[1]
		const addressq3NowIw = accounts[6]
		const addressi5As9cl = accounts[2]
		const uintmqt9KOV = BigInt("1896")
		const addressqx7dQNs = accounts[5]
		const addressShcYugj = accounts[4]
		const uint256PJgb5cB = await LedgisOAUJ6rs.balanceOf.call(addresstdV9uSd, {from: accounts[2]});
		const uint256qzH9sF2 = await LedgisOAUJ6rs.balanceOf.call(addressjdCa1zi, {from: accounts[4]});
		const boolexJpDOs = await LedgisOAUJ6rs.isFrozen.call(addressKv1L2Ns, {from: accounts[3]});
		const addressgaVtSAj = await LedgisOAUJ6rs.unlock.call(addressvf1xKb5, uintfsj15r, {from: accounts[3]});
		const uint256LJipAKw = await LedgisOAUJ6rs.balanceOf.call(addressYgUnRW3, {from: accounts[2]});
		const uint256C8GgoKR = await LedgisOAUJ6rs.allowance.call(addressi5As9cl, addressq3NowIw, {from: accounts[2]});
		const boolq2FLUBs = await LedgisOAUJ6rs.transferFrom.call(addressShcYugj, addressqx7dQNs, uintmqt9KOV, {from: accounts[0]});

		assert.equal(boolexJpDOs, false)
		assert.equal(uint256PJgb5cB, BigInt("0"))
		assert.equal(uint256qzH9sF2, BigInt("10000000000000"))
		await expect(LedgisOAUJ6rs.unlock.call(addressvf1xKb5, uintfsj15r, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOAUJ6rs = await Ledgis.new({from: accounts[3]});
		const addressm6CF8Dj = accounts[2]
		const addressaZiHKTF = accounts[3]
		const uintqxTa3GV = BigInt("803")
		const addressQhn6z4E = accounts[4]
		const addressfKJg751 = "0x0000000000000000000000000000000000000000"
		const uintq0qXIXA = BigInt("1155")
		const addressaiTlxxb = accounts[4]
		const addressnjeT53 = accounts[7]
		const addressjK672l8 = accounts[2]
		const uintkeZILkN = BigInt("1896")
		const addressYIvWI1k = accounts[5]
		const addressrGUZAw9 = accounts[4]
		const uintmoKDDS7 = BigInt("53")
		const address9cDw6D = "0x0000000000000000000000000000000000000001"
		const addresspA2XFRW = accounts[2]
		const uint256PJgb5cB = await LedgisOAUJ6rs.balanceOf.call(addressm6CF8Dj, {from: accounts[2]});
		await LedgisOAUJ6rs.pause.call({from: accounts[3]});
		const uint256qzH9sF2 = await LedgisOAUJ6rs.balanceOf.call(addressaZiHKTF, {from: accounts[4]});
		const bool54d3S7 = await LedgisOAUJ6rs.increaseAllowance.call(addressQhn6z4E, uintqxTa3GV, {from: accounts[0]});
		const boolexJpDOs = await LedgisOAUJ6rs.isFrozen.call(addressfKJg751, {from: accounts[3]});
		const addressgaVtSAj = await LedgisOAUJ6rs.unlock.call(addressaiTlxxb, uintq0qXIXA, {from: accounts[3]});
		const uint256C8GgoKR = await LedgisOAUJ6rs.allowance.call(addressjK672l8, addressnjeT53, {from: accounts[2]});
		const boolq2FLUBs = await LedgisOAUJ6rs.transferFrom.call(addressrGUZAw9, addressYIvWI1k, uintkeZILkN, {from: accounts[0]});
		const boolaLBUeM = await LedgisOAUJ6rs.transferFrom.call(addresspA2XFRW, address9cDw6D, uintmoKDDS7, {from: accounts[3]});

		assert.equal(uint256PJgb5cB, BigInt("0"))
		await expect(LedgisOAUJ6rs.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgispsdGkLU = await Ledgis.new({from: accounts[2]});
		const uintfrL6yIQ = BigInt("1747")
		const uintE961D3h = BigInt("1390")
		const addressUXaJcd = accounts[4]
		const uintaczo92z = BigInt("1321")
		const addresswe5UHAI = accounts[4]
		const addresshsIHPky = accounts[3]
		const addressIKwVngU = await LedgispsdGkLU.lockAfter.call(addressUXaJcd, uintE961D3h, uintfrL6yIQ, {from: accounts[2]});
		const boolksDEHmn = await LedgispsdGkLU.approve.call(addresswe5UHAI, uintaczo92z, {from: accounts[4]});
		const uint256nUCZBDh = await LedgispsdGkLU.balanceOf.call(addresshsIHPky, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgispsdGkLU.lockAfter.call(addressUXaJcd, uintE961D3h, uintfrL6yIQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})