const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveszlOUi = await Revive.new({from: accounts[4]});
		const uintz7yanY5 = BigInt("257")
		const addressBrA7V0Y = accounts[3]
		const uintUb2IdWI = BigInt("1054")
		const addressjPFi8O = accounts[4]
		const addressoZ3BrSr = accounts[4]
		const uinttIPwRyJ = BigInt("896")
		const bytebPwEqzb = "0x1e140d0615121d09080703101b05080d130c1e1c0a1c0e02100505200c171520"
		const boolwYL9cgk = await ReviveszlOUi.increaseAllowance.call(addressBrA7V0Y, uintz7yanY5, {from: accounts[4]});
		const boolDcbQ9Xn = await ReviveszlOUi.transferFrom.call(addressoZ3BrSr, addressjPFi8O, uintUb2IdWI, {from: accounts[0]});
		const boolXC8FPWZ = await ReviveszlOUi.extendLock.call(bytebPwEqzb, uinttIPwRyJ, {from: accounts[4]});

		assert.equal(boolwYL9cgk, true)
		await expect(ReviveszlOUi.transferFrom.call(addressoZ3BrSr, addressjPFi8O, uintUb2IdWI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveF5NKFGp = await Revive.new({from: accounts[5]});
		const addressebCnD7H = accounts[0]
		const uintx3RVzQ = BigInt("1728")
		const bytewmO34aj = "0x1d17180a1e100e2016170207140b0c1215031819160b1d1a130318160814121b"
		const addresspYI0QR = "0x0000000000000000000000000000000000000001"
		const uint256VZD6lk4 = await ReviveF5NKFGp.getUnlockableTokens.call(addressebCnD7H, {from: accounts[3]});
		const uint256g0XcnQh = await ReviveF5NKFGp.tokensLockedAtTime.call(addresspYI0QR, bytewmO34aj, uintx3RVzQ, {from: accounts[2]});

		assert.equal(uint256VZD6lk4, BigInt("0"))
		assert.equal(uint256g0XcnQh, BigInt("0"))
	});

	it('test for Revive', async () => {
		const Revive8EdnAN = await Revive.new({from: accounts[1]});
		const addressPAkmE3D = "0x0000000000000000000000000000000000000001"
		const addressAcZozEw = accounts[4]
		const addressSyKP2AF = accounts[0]
		const uintMJ4OSpm = BigInt("1784")
		const bytesxYQSu = "0x0c16110e131b0211040b071e0c02031d0608071f20000511170e030a20100b06"
		const addressSdCaol2 = await Revive8EdnAN.transferOwnership.call(addressPAkmE3D, {from: accounts[2]});
		const uint2566baDyk = await Revive8EdnAN.balanceOf.call(addressAcZozEw, {from: accounts[0]});
		const uint256UbdKsHl = await Revive8EdnAN.unlock.call(addressSyKP2AF, {from: accounts[5]});
		const boolvLfWGqY = await Revive8EdnAN.isOwner.call({from: accounts[1]});
		const boolQOKgNAZ = await Revive8EdnAN.increaseLockAmount.call(bytesxYQSu, uintMJ4OSpm, {from: accounts[3]});

		await expect(Revive8EdnAN.transferOwnership.call(addressPAkmE3D, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivehhcZA2j = await Revive.new({from: accounts[2]});
		const uintXMPxtGE = BigInt("1247")
		const byteVdwk10X = "0x16111d0c11180601071f090817181d1203111e0f190e17140d1111130f0f161a"
		const byteJwpG8Hl = "0x1c1b0c1a070b06100c1a041a171b0701061e0b010707180d0d121b0901131d01"
		const addressM3z4PAh = accounts[5]
		const uintuTO2EiQ = BigInt("1070")
		const addressRsuNQz5 = accounts[2]
		const boolZHsJ4eo = await RevivehhcZA2j.extendLock.call(byteVdwk10X, uintXMPxtGE, {from: accounts[1]});
		const uint256LBcumVN = await RevivehhcZA2j.tokensLocked.call(addressM3z4PAh, byteJwpG8Hl, {from: accounts[1]});
		const addressLiYaaXE = await RevivehhcZA2j.recoverERC20.call(addressRsuNQz5, uintuTO2EiQ, {from: accounts[1]});

		await expect(RevivehhcZA2j.extendLock.call(byteVdwk10X, uintXMPxtGE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivehqBxv1i = await Revive.new({from: accounts[2]});
		const uintNRDgjby = BigInt("1441")
		const uintdHjuea = BigInt("1180")
		const bytepkXIbkr = "0x0b1707151b0f011a020f020a0c01180e121e071c061a1700160a1006110c0e0b"
		const addressE7wPYjK = accounts[0]
		const boolHokrFyX = await RevivehqBxv1i.lock.call(bytepkXIbkr, uintdHjuea, uintNRDgjby, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QiXeDnM = await RevivehqBxv1i.balanceOf.call(addressE7wPYjK, {from: accounts[1]});
		const addressXjS8lxq = await RevivehqBxv1i.owner.call({from: accounts[0]});
		await RevivehqBxv1i.renounceOwnership.call({from: accounts[1]});
		const uint2565dtX4l = await RevivehqBxv1i.totalSupply.call({from: accounts[2]});

		await expect(RevivehqBxv1i.lock.call(bytepkXIbkr, uintdHjuea, uintNRDgjby, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveoORHTJK = await Revive.new({from: accounts[2]});
		const addressn8E6Ji6 = accounts[3]
		const addressva0wETw = accounts[1]
		const uintC3BLpl5 = BigInt("939")
		const byteeeZs04C = "0x14061f031c0f1b12150d060a1f050d090c0c0619131515110d131f130f1f0a12"
		const addressnqC1kfl = accounts[0]
		await ReviveoORHTJK.onlyOwner.call({from: accounts[2]});
		const uint256ypkTR3e = await ReviveoORHTJK.getUnlockableTokens.call(addressn8E6Ji6, {from: accounts[4]});
		const uint256eKfR9D = await ReviveoORHTJK.balanceOf.call(addressva0wETw, {from: accounts[3]});
		const uint2565JzvmB = await ReviveoORHTJK.tokensLockedAtTime.call(addressnqC1kfl, byteeeZs04C, uintC3BLpl5, {from: accounts[3]});

		await expect(ReviveoORHTJK.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivedr81tdY = await Revive.new({from: accounts[1]});
		const byteiompSM0 = "0x1b1a1d0a0d0b1b140800081e140212040d140902171d06070c1220170b0f0400"
		const addressFDeSvgD = accounts[5]
		const addressRNzNnUM = accounts[4]
		const addressSq33ETd = accounts[1]
		const uint256parUkB = await Revivedr81tdY.tokensLocked.call(addressFDeSvgD, byteiompSM0, {from: accounts[2]});
		const uint256jdpBIUg = await Revivedr81tdY.totalBalanceOf.call(addressRNzNnUM, {from: accounts[3]});
		const uint256npzKPIc = await Revivedr81tdY.unlock.call(addressSq33ETd, {from: accounts[3]});

		assert.equal(uint256jdpBIUg, BigInt("0"))
		assert.equal(uint256npzKPIc, BigInt("0"))
		assert.equal(uint256parUkB, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveDNocDP1 = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const addresse6q2Y2w = accounts[1]
		const uintCaJzLXr = BigInt("89")
		const byte9eVP3I = "0x0c1f0f120a010a080a0b04190b0a0e1b0e091a02100b030c181910131c17020c"
		const uintmV8YFny = BigInt("1449")
		const addressyDL86V1 = accounts[0]
		const uintlRUapiD = BigInt("809")
		const addresskJYjXE = accounts[4]
		const uintcERXrzK = BigInt("1176")
		const addresss3xWkFR = accounts[4]
		const uint256hBJEJtT = await ReviveDNocDP1.unlock.call(addresse6q2Y2w, {from: accounts[4]});
		const bool8b9bbs = await ReviveDNocDP1.increaseLockAmount.call(byte9eVP3I, uintCaJzLXr, {from: accounts[5]});
		const boolB1MLpsc = await ReviveDNocDP1.decreaseAllowance.call(addressyDL86V1, uintmV8YFny, {from: accounts[0]});
		const addressjD3ndeM = await ReviveDNocDP1.recoverERC20.call(addresskJYjXE, uintlRUapiD, {from: accounts[3]});
		const addressJhwIYzN = await ReviveDNocDP1.recoverERC20.call(addresss3xWkFR, uintcERXrzK, {from: accounts[3]});
	});

	it('test for Revive', async () => {
		const ReviveF5NKFGp = await Revive.new({from: accounts[5]});
		const bytecfWLZNb = "0x080b171301150e050a1b01170b0203050f1607131a1216200c1604110a07141f"
		const addresstkF3V3y = accounts[2]
		const uintMHhlnf = BigInt("1353")
		const addressFDucJM9 = accounts[0]
		const uintlx2bLUM = BigInt("1863")
		const addressevOhGbR = accounts[4]
		const uintl1aoVLP = BigInt("1728")
		const byteauDbqIZ = "0x1d17180a1e100e2016170207140b0c1215031819160b1d1a130318160814121b"
		const addressOflL3sj = "0x0000000000000000000000000000000000000001"
		const uint256fECqNIB = await ReviveF5NKFGp.tokensLocked.call(addresstkF3V3y, bytecfWLZNb, {from: accounts[1]});
		const boolPYY6Sol = await ReviveF5NKFGp.approve.call(addressFDucJM9, uintMHhlnf, {from: accounts[4]});
		const boolHRGxC7u = await ReviveF5NKFGp.increaseAllowance.call(addressevOhGbR, uintlx2bLUM, {from: accounts[0]});
		const uint256g0XcnQh = await ReviveF5NKFGp.tokensLockedAtTime.call(addressOflL3sj, byteauDbqIZ, uintl1aoVLP, {from: accounts[2]});

		assert.equal(boolHRGxC7u, true)
		assert.equal(boolPYY6Sol, true)
		assert.equal(uint256fECqNIB, BigInt("0"))
		assert.equal(uint256g0XcnQh, BigInt("0"))
	});

	it('test for Revive', async () => {
		const Revivedr81tdY = await Revive.new({from: accounts[1]});
		const addressRrcOH6y = "0x0000000000000000000000000000000000000001"
		const addressyhmzX0 = accounts[5]
		const bytepyDR25K = "0x060e1a0809060e0802110305041d03032016041a160f0905091e151906010d1d"
		const addressk8Io4d = accounts[4]
		const byteh236cXz = "0x1b1a1d0a0d0b1b140800081e140212040d140902171d06070c1220170b0f0400"
		const addressdAOgcvM = accounts[5]
		const addressQB3HrL = accounts[4]
		const addressLPALkvp = accounts[1]
		const uint256QTAVxk = await Revivedr81tdY.allowance.call(addressyhmzX0, addressRrcOH6y, {from: accounts[1]});
		const uint256uLVSrD = await Revivedr81tdY.tokensLocked.call(addressk8Io4d, bytepyDR25K, {from: accounts[0]});
		const uint256parUkB = await Revivedr81tdY.tokensLocked.call(addressdAOgcvM, byteh236cXz, {from: accounts[2]});
		const uint256jdpBIUg = await Revivedr81tdY.totalBalanceOf.call(addressQB3HrL, {from: accounts[3]});
		const uint256npzKPIc = await Revivedr81tdY.unlock.call(addressLPALkvp, {from: accounts[3]});

		assert.equal(uint256QTAVxk, BigInt("0"))
		assert.equal(uint256jdpBIUg, BigInt("0"))
		assert.equal(uint256npzKPIc, BigInt("0"))
		assert.equal(uint256parUkB, BigInt("0"))
		assert.equal(uint256uLVSrD, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveKlDdFkg = await Revive.new({from: accounts[1]});
		const addressOLLOR6l = accounts[3]
		const addressjAyRkhB = accounts[2]
		const uintRvLJAHN = BigInt("1850")
		const addressF98RBcA = accounts[2]
		const uint256ZtAOZi = await ReviveKlDdFkg.unlock.call(addressOLLOR6l, {from: accounts[0]});
		const uint256VtIhNZL = await ReviveKlDdFkg.totalBalanceOf.call(addressjAyRkhB, {from: accounts[2]});
		const booliUwb7l2 = await ReviveKlDdFkg.isOwner.call({from: accounts[3]});
		const addressHoUNm5 = await ReviveKlDdFkg.owner.call({from: accounts[2]});
		const boolydC6Iou = await ReviveKlDdFkg.decreaseAllowance.call(addressF98RBcA, uintRvLJAHN, {from: accounts[3]});

		assert.equal(addressHoUNm5, 0xE71B0cF346efd20A88E49448B0c2EFc198d99122)
		assert.equal(booliUwb7l2, false)
		assert.equal(uint256VtIhNZL, BigInt("0"))
		assert.equal(uint256ZtAOZi, BigInt("0"))
		await expect(ReviveKlDdFkg.decreaseAllowance.call(addressF98RBcA, uintRvLJAHN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivedr81tdY = await Revive.new({from: accounts[1]});
		const byteGrmXdC = "0x1b1a1d0a0d0b1b140800081e140212040d140902171d06070c1220170b0f0400"
		const addresslnN66vH = accounts[5]
		const addresskkThRlZ = accounts[5]
		const byteHP7vdc1 = "0x0b1b150809081e1f1010051918080a1306121c1c0a180909190211100c071100"
		const addressruKttJT = accounts[0]
		const uint256parUkB = await Revivedr81tdY.tokensLocked.call(addresslnN66vH, byteGrmXdC, {from: accounts[2]});
		const uint256jdpBIUg = await Revivedr81tdY.totalBalanceOf.call(addresskkThRlZ, {from: accounts[3]});
		const uint256NIzqXgM = await Revivedr81tdY.tokensUnlockable.call(addressruKttJT, byteHP7vdc1, {from: accounts[1]});

		assert.equal(uint256NIzqXgM, BigInt("0"))
		assert.equal(uint256jdpBIUg, BigInt("0"))
		assert.equal(uint256parUkB, BigInt("0"))
	});

	it('test for Revive', async () => {
		const Revivedr81tdY = await Revive.new({from: accounts[1]});
		const byteiyulpgj = "0x1b1a1d0a0d0b1b140800081e140212040d140902171d06070c1220170b0f0400"
		const addressHE4Eeyr = accounts[5]
		const uintY7D3xje = BigInt("25")
		const byteFRen3HM = "0x0c18161b1219101b0c1202180c1e1b190f190e11101c140f0314171003151402"
		const addressoN4fUnO = accounts[4]
		const uint256parUkB = await Revivedr81tdY.tokensLocked.call(addressHE4Eeyr, byteiyulpgj, {from: accounts[2]});
		const boolNSPc8Ma = await Revivedr81tdY.increaseLockAmount.call(byteFRen3HM, uintY7D3xje, {from: accounts[3]});
		const uint256jdpBIUg = await Revivedr81tdY.totalBalanceOf.call(addressoN4fUnO, {from: accounts[3]});

		assert.equal(uint256parUkB, BigInt("0"))
		await expect(Revivedr81tdY.increaseLockAmount.call(byteFRen3HM, uintY7D3xje, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivehff4dP8 = await Revive.new({from: accounts[5]});
		const uintjO2TFHg = BigInt("592")
		const uintWSSte6 = BigInt("322")
		const byteBmcl0aw = "0x1f0514081b041a1a1810121511070c07140a1003031e08181d05090b0c050f03"
		const addressP14LyX2 = accounts[2]
		const bytexZaRgv9 = "0x190a14011a0216060f191d060401171d041c010e0913060a1d09001519071a10"
		const addresseXxbS33 = accounts[2]
		const byteT1a6WA = "0x190d1b1d1f150a1012080e0d0d0e081f0f06131f121d18070601180b0c081f1a"
		const addressfmRfIsu = accounts[5]
		const boolTbOiwcD = await Revivehff4dP8.transferWithLock.call(addressP14LyX2, byteBmcl0aw, uintWSSte6, uintjO2TFHg, {from: accounts[4]});
		const uint256M7xZ03n = await Revivehff4dP8.tokensLocked.call(addresseXxbS33, bytexZaRgv9, {from: accounts[2]});
		const uint256CZYqyqJ = await Revivehff4dP8.tokensUnlockable.call(addressfmRfIsu, byteT1a6WA, {from: accounts[0]});

		await expect(Revivehff4dP8.transferWithLock.call(addressP14LyX2, byteBmcl0aw, uintWSSte6, uintjO2TFHg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivedr81tdY = await Revive.new({from: accounts[1]});
		const byteKCB2SjJ = "0x1b1a1d0a0d0b1b140800081e140212040d1409ffffffff171d06070c1220170b0f0400"
		const addressXkcRWmX = accounts[5]
		const uintiljPX7 = BigInt("25")
		const byteL1lfEf = "0x0c18161b1219101b0c1202180c1e1b190f190e11101c140f0314171003151402"
		const addressKd63Ehl = accounts[3]
		const addressMTjl3iC = accounts[4]
		const uint256parUkB = await Revivedr81tdY.tokensLocked.call(addressXkcRWmX, byteKCB2SjJ, {from: accounts[2]});
		const boolNSPc8Ma = await Revivedr81tdY.increaseLockAmount.call(byteL1lfEf, uintiljPX7, {from: accounts[3]});
		const uint256D2mAMGk = await Revivedr81tdY.getUnlockableTokens.call(addressKd63Ehl, {from: accounts[1]});
		const uint256jdpBIUg = await Revivedr81tdY.totalBalanceOf.call(addressMTjl3iC, {from: accounts[3]});

		await expect(Revivedr81tdY.tokensLocked.call(addressXkcRWmX, byteKCB2SjJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveF5NKFGp = await Revive.new({from: accounts[5]});
		const uintVh5PSrn = BigInt("1674")
		const byteJQQJKET = "0x09071510011a200f191a161804031e09051c06041e0e19051a0503090d04151a"
		const addressxwOP79K = accounts[1]
		const addressl17SINj = accounts[0]
		const bytexo41ldK = "0x0e0014010d0107011b021f08201110010b050107070202091603090508161316"
		const addressXzMp36L = accounts[4]
		const uintQOP5BcX = BigInt("1728")
		const byteMNyDXO0 = "0x1d17180a1e100e2016170207140b0c1215031819160b1d1a130318160814121b"
		const addressazU85qM = "0x0000000000000000000000000000000000000001"
		const uintVv7SzPY = BigInt("855")
		const uint256Qd9oTsf = await ReviveF5NKFGp.tokensLockedAtTime.call(addressxwOP79K, byteJQQJKET, uintVh5PSrn, {from: accounts[3]});
		const uint256OGIP3wg = await ReviveF5NKFGp.getUnlockableTokens.call(addressl17SINj, {from: accounts[1]});
		const uint256NhNAmP5 = await ReviveF5NKFGp.tokensUnlockable.call(addressXzMp36L, bytexo41ldK, {from: accounts[1]});
		const uint256g0XcnQh = await ReviveF5NKFGp.tokensLockedAtTime.call(addressazU85qM, byteMNyDXO0, uintQOP5BcX, {from: accounts[2]});
		const uint256tEjdrhl = await ReviveF5NKFGp.recoverERC20.call(uintVv7SzPY, {from: accounts[4]});

		assert.equal(uint256NhNAmP5, BigInt("0"))
		assert.equal(uint256OGIP3wg, BigInt("0"))
		assert.equal(uint256Qd9oTsf, BigInt("0"))
		assert.equal(uint256g0XcnQh, BigInt("0"))
		await expect(ReviveF5NKFGp.recoverERC20.call(uintVv7SzPY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivedr81tdY = await Revive.new({from: accounts[1]});
		const bytejQXDtgY = "0x1b1a1d0a0d0b1b140800081e140212040d140902171d06070c1220170b0f0400"
		const addresseRlQBhr = accounts[5]
		const addressTjzVQzL = accounts[4]
		const addressdjmJKzO = accounts[1]
		const uint256parUkB = await Revivedr81tdY.tokensLocked.call(addresseRlQBhr, bytejQXDtgY, {from: accounts[2]});
		const uint256tjA6Dze = await Revivedr81tdY.totalSupply.call({from: accounts[1]});
		const uint256jdpBIUg = await Revivedr81tdY.totalBalanceOf.call(addressTjzVQzL, {from: accounts[3]});
		const uint256npzKPIc = await Revivedr81tdY.unlock.call(addressdjmJKzO, {from: accounts[3]});

		assert.equal(uint256jdpBIUg, BigInt("0"))
		assert.equal(uint256npzKPIc, BigInt("0"))
		assert.equal(uint256parUkB, BigInt("0"))
		assert.equal(uint256tjA6Dze, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const ReviveF5NKFGp = await Revive.new({from: accounts[5]});
		const uintPR0VNsx = BigInt("304")
		const uintLokPVuP = BigInt("790")
		const addresshrQpNtr = accounts[1]
		const addressNZQQtHU = accounts[2]
		const uint256rQb0Nz5 = await ReviveF5NKFGp.recoverERC20.call(uintPR0VNsx, {from: accounts[2]});
		const boolgIjONdt = await ReviveF5NKFGp.transfer.call(addresshrQpNtr, uintLokPVuP, {from: accounts[1]});
		const uint256VZD6lk4 = await ReviveF5NKFGp.getUnlockableTokens.call(addressNZQQtHU, {from: accounts[3]});

		await expect(ReviveF5NKFGp.recoverERC20.call(uintPR0VNsx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivedr81tdY = await Revive.new({from: accounts[1]});
		const addressVmnPHyn = accounts[4]
		const uintUbpxbCt = BigInt("1979")
		const addressHTZmbs1 = accounts[4]
		const uintv6CqCK = BigInt("22")
		const addressfklGhS = accounts[1]
		const uint256jdpBIUg = await Revivedr81tdY.totalBalanceOf.call(addressVmnPHyn, {from: accounts[3]});
		const boolExx40kv = await Revivedr81tdY.approve.call(addressHTZmbs1, uintUbpxbCt, {from: accounts[4]});
		const uint256zaQqjtZ = await Revivedr81tdY.recoverERC20.call(uintv6CqCK, {from: accounts[0]});
		const uint256FjlLEoY = await Revivedr81tdY.getUnlockableTokens.call(addressfklGhS, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolExx40kv, true)
		assert.equal(uint256jdpBIUg, BigInt("0"))
		await expect(Revivedr81tdY.recoverERC20.call(uintv6CqCK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviverUSTrg4 = await Revive.new({from: accounts[1]});
		const uintUuMWrQt = BigInt("1621")
		const addressKWXrSXC = accounts[0]
		const addressbNi72Hv = accounts[5]
		const uintOOG1mAV = BigInt("864")
		const addresstEFCDFZ = accounts[0]
		const uint256yA0br0Z = await ReviverUSTrg4.totalSupply.call({from: accounts[3]});
		const uint256gf00jXC = await ReviverUSTrg4.recoverERC20.call(uintUuMWrQt, {from: accounts[2]});
		const addressLJFjeZ = await ReviverUSTrg4.transferOwnership.call(addressKWXrSXC, {from: accounts[3]});
		const uint256h0xUGoP = await ReviverUSTrg4.getUnlockableTokens.call(addressbNi72Hv, {from: accounts[0]});
		const boolq3lbZP = await ReviverUSTrg4.transfer.call(addresstEFCDFZ, uintOOG1mAV, {from: accounts[1]});

		assert.equal(uint256yA0br0Z, BigInt("3000000000000000000000000000"))
		await expect(ReviverUSTrg4.recoverERC20.call(uintUuMWrQt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivedr81tdY = await Revive.new({from: accounts[1]});
		const uintMpeBzJ = BigInt("25")
		const bytesVvcVK = "0x0c18161b1219101b0c1202180c1e1b190f190e11101c140f03141710ffffffff151402"
		const boolNSPc8Ma = await Revivedr81tdY.increaseLockAmount.call(bytesVvcVK, uintMpeBzJ, {from: accounts[3]});

		await expect(Revivedr81tdY.increaseLockAmount.call(bytesVvcVK, uintMpeBzJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveBQKswd4 = await Revive.new({from: accounts[3]});
		const uintBihjpOP = BigInt("7")
		const addressYXAHo5z = accounts[4]
		const addressguw6gi2 = accounts[2]
		const uint256aM5hL3x = await ReviveBQKswd4.recoverERC20.call(uintBihjpOP, {from: "0x0000000000000000000000000000000000000001"});
		const address8rKaPz = await ReviveBQKswd4.owner.call({from: accounts[3]});
		const uint256HMVNmUY = await ReviveBQKswd4.allowance.call(addressguw6gi2, addressYXAHo5z, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveBQKswd4.recoverERC20.call(uintBihjpOP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivehqBxv1i = await Revive.new({from: accounts[2]});
		const byteGcE16MS = "0x1717050b0c03000407051102140f07160c19110c100c1a0a0214181c0e1c0f13"
		const addressb4IA2If = accounts[5]
		const uintgZEsYc = BigInt("1441")
		const uintnI76Mls = BigInt("1180")
		const bytebs37eUQ = "0x0b1707151b0f011a020f020a0c01180e121e071c061a1700160a1006110c0e0b"
		await RevivehqBxv1i.renounceOwnership.call({from: accounts[2]});
		const uint256tt2BBrO = await RevivehqBxv1i.tokensUnlockable.call(addressb4IA2If, byteGcE16MS, {from: accounts[1]});
		const boolHokrFyX = await RevivehqBxv1i.lock.call(bytebs37eUQ, uintnI76Mls, uintgZEsYc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivehqBxv1i.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivedr81tdY = await Revive.new({from: accounts[1]});
		const uintwhXHCtf = BigInt("100")
		const byteUXkQgyw = "0x1a021b0715171a1c020f1e070901fffffffc0f0515110d011d06020c09041c01061303"
		const addressAShRoLc = accounts[1]
		const addressiIg9P36 = accounts[3]
		const uintn1Do0bX = BigInt("25")
		const byteNJllmbx = "0x0c18161b1219101b0c1202180c1e1b190f190e11101c140f0314171003151402"
		const uint256A6K5PG4 = await Revivedr81tdY.tokensLockedAtTime.call(addressAShRoLc, byteUXkQgyw, uintwhXHCtf, {from: accounts[4]});
		const uint256GMstlgo = await Revivedr81tdY.balanceOf.call(addressiIg9P36, {from: accounts[0]});
		const uint256rtfHFq = await Revivedr81tdY.totalSupply.call({from: accounts[1]});
		const boolNSPc8Ma = await Revivedr81tdY.increaseLockAmount.call(byteNJllmbx, uintn1Do0bX, {from: accounts[3]});

		await expect(Revivedr81tdY.tokensLockedAtTime.call(addressAShRoLc, byteUXkQgyw, uintwhXHCtf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveF5NKFGp = await Revive.new({from: accounts[5]});
		const uintzzV9s8 = BigInt("1539")
		const address8HQU5X = accounts[2]
		const uint256Ml29Iz6 = await ReviveF5NKFGp.recoverERC20.call(uintzzV9s8, {from: accounts[3]});
		const uint256VZD6lk4 = await ReviveF5NKFGp.getUnlockableTokens.call(address8HQU5X, {from: accounts[3]});

		await expect(ReviveF5NKFGp.recoverERC20.call(uintzzV9s8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivehqBxv1i = await Revive.new({from: accounts[2]});
		const addressvBMrzCk = accounts[2]
		const uinto0nZbf7 = BigInt("1441")
		const uintjZ73XPy = BigInt("542")
		const byteP6atEaZ = "0x0b1707151b0f011a020f020a0c01180e121e071c061a1700160a1006110c0e0b"
		const uintKpdZMro = BigInt("264")
		const byteEPPlkpo = "0x0d0a150a040601090e121e0c1205031b0f120617151f0a1f1a0c130710080801"
		const addressGcT1D1r = await RevivehqBxv1i.transferOwnership.call(addressvBMrzCk, {from: accounts[2]});
		const boolHokrFyX = await RevivehqBxv1i.lock.call(byteP6atEaZ, uintjZ73XPy, uinto0nZbf7, {from: "0x0000000000000000000000000000000000000001"});
		const boolK4aWhy7 = await RevivehqBxv1i.increaseLockAmount.call(byteEPPlkpo, uintKpdZMro, {from: accounts[5]});

		await expect(RevivehqBxv1i.lock.call(byteP6atEaZ, uintjZ73XPy, uinto0nZbf7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivehqBxv1i = await Revive.new({from: accounts[2]});
		const uintac9c2cp = BigInt("267")
		const uint0YC8Xv = BigInt("1441")
		const uinttXkRLuh = BigInt("1180")
		const byteAxdyQFs = "0x0b1707151b0f011a020f020a0c01180e121e071c061a1700160a1006110c0e0b"
		const uint256x9CS7Qi = await RevivehqBxv1i.recoverERC20.call(uintac9c2cp, {from: accounts[2]});
		const boolHokrFyX = await RevivehqBxv1i.lock.call(byteAxdyQFs, uinttXkRLuh, uint0YC8Xv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivehqBxv1i.recoverERC20.call(uintac9c2cp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveF5NKFGp = await Revive.new({from: accounts[5]});
		const addressfqwCSno = accounts[1]
		const addressxuq94ZP = accounts[3]
		const uintJp6UGUb = BigInt("706")
		const addresslqTOLgo = accounts[4]
		const addresseNIqEt7 = accounts[2]
		const uintPNangb = BigInt("1332")
		const addressTBVR7BO = accounts[1]
		const addressOggMav = accounts[1]
		const uint256kYtmhdi = await ReviveF5NKFGp.allowance.call(addressxuq94ZP, addressfqwCSno, {from: accounts[1]});
		const addressxUAsAJQ = await ReviveF5NKFGp.recoverERC20.call(addresslqTOLgo, uintJp6UGUb, {from: accounts[5]});
		const uint256VZD6lk4 = await ReviveF5NKFGp.getUnlockableTokens.call(addresseNIqEt7, {from: accounts[3]});
		const boolvZLVSqy = await ReviveF5NKFGp.transferFrom.call(addressOggMav, addressTBVR7BO, uintPNangb, {from: accounts[4]});

		assert.equal(uint256kYtmhdi, BigInt("0"))
		await expect(ReviveF5NKFGp.recoverERC20.call(addresslqTOLgo, uintJp6UGUb, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveF5NKFGp = await Revive.new({from: accounts[5]});
		const uintOu6bUe9 = BigInt("1859")
		const bytewx6wNkp = "0x1702031607140d0a0c16180819110a1e11200e0300170b05161f11171c031b11"
		const addressVG8HSUZ = accounts[3]
		const addressxUUm77t = accounts[2]
		const uint256PSBFStQ = await ReviveF5NKFGp.recoverERC20.call(uintOu6bUe9, {from: accounts[5]});
		const uint256xQNCd2e = await ReviveF5NKFGp.tokensUnlockable.call(addressVG8HSUZ, bytewx6wNkp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256VZD6lk4 = await ReviveF5NKFGp.getUnlockableTokens.call(addressxUUm77t, {from: accounts[3]});

		await expect(ReviveF5NKFGp.recoverERC20.call(uintOu6bUe9, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivedr81tdY = await Revive.new({from: accounts[1]});
		const uintp5R8zCd = BigInt("2001")
		const addressZKRZwNf = accounts[1]
		const addresslh3UNZn = accounts[5]
		const uint256trhNQzI = await Revivedr81tdY.recoverERC20.call(uintp5R8zCd, {from: accounts[4]});
		const uint256kFqq3m4 = await Revivedr81tdY.getUnlockableTokens.call(addressZKRZwNf, {from: accounts[4]});
		const uint256jdpBIUg = await Revivedr81tdY.totalBalanceOf.call(addresslh3UNZn, {from: accounts[3]});

		await expect(Revivedr81tdY.recoverERC20.call(uintp5R8zCd, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveF5NKFGp = await Revive.new({from: accounts[5]});
		const addressoBvCwmH = accounts[1]
		const uintWvD2HE3 = BigInt("68")
		const addresshOWnEI = accounts[5]
		const uintQ5cHen2 = BigInt("1009")
		const uint256VZD6lk4 = await ReviveF5NKFGp.getUnlockableTokens.call(addressoBvCwmH, {from: accounts[3]});
		const boolldvqe4O = await ReviveF5NKFGp.increaseAllowance.call(addresshOWnEI, uintWvD2HE3, {from: accounts[1]});
		const uint256VwWlumk = await ReviveF5NKFGp.recoverERC20.call(uintQ5cHen2, {from: accounts[1]});

		assert.equal(boolldvqe4O, true)
		assert.equal(uint256VZD6lk4, BigInt("0"))
		await expect(ReviveF5NKFGp.recoverERC20.call(uintQ5cHen2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveF5NKFGp = await Revive.new({from: accounts[5]});
		const addressXDpfoAu = accounts[2]
		const uintscTJUij = BigInt("16")
		const uint256VZD6lk4 = await ReviveF5NKFGp.getUnlockableTokens.call(addressXDpfoAu, {from: accounts[3]});
		const uint256kD7rMdW = await ReviveF5NKFGp.recoverERC20.call(uintscTJUij, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256VZD6lk4, BigInt("0"))
		await expect(ReviveF5NKFGp.recoverERC20.call(uintscTJUij, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveF5NKFGp = await Revive.new({from: accounts[5]});
		const addressy1OewTJ = accounts[2]
		const uintN5IRRWs = BigInt("325")
		const addressbbfe3xR = accounts[1]
		const uint256VZD6lk4 = await ReviveF5NKFGp.getUnlockableTokens.call(addressy1OewTJ, {from: accounts[3]});
		const uint256PigxD0F = await ReviveF5NKFGp.recoverERC20.call(uintN5IRRWs, {from: accounts[1]});
		const uint256x7pGLCD = await ReviveF5NKFGp.totalBalanceOf.call(addressbbfe3xR, {from: accounts[1]});

		assert.equal(uint256VZD6lk4, BigInt("0"))
		await expect(ReviveF5NKFGp.recoverERC20.call(uintN5IRRWs, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveF5NKFGp = await Revive.new({from: accounts[5]});
		const addressnxZEq90 = accounts[2]
		const uintwiUb0by = BigInt("706")
		const addressBZj24c = accounts[3]
		const uintlCv6RcP = BigInt("722")
		const addressrESG6Da = "0x0000000000000000000000000000000000000001"
		const uint256VZD6lk4 = await ReviveF5NKFGp.getUnlockableTokens.call(addressnxZEq90, {from: accounts[3]});
		const boolRs5n82Z = await ReviveF5NKFGp.isOwner.call({from: accounts[2]});
		const uint256va9wSbT = await ReviveF5NKFGp.recoverERC20.call(uintwiUb0by, {from: accounts[3]});
		const uint256Sb9EfY = await ReviveF5NKFGp.totalBalanceOf.call(addressBZj24c, {from: accounts[2]});
		const boolSkoyt2f = await ReviveF5NKFGp.increaseAllowance.call(addressrESG6Da, uintlCv6RcP, {from: accounts[4]});

		assert.equal(boolRs5n82Z, false)
		assert.equal(uint256VZD6lk4, BigInt("0"))
		await expect(ReviveF5NKFGp.recoverERC20.call(uintwiUb0by, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveD3tCoaZ = await Revive.new({from: accounts[1]});
		const uintupIzqEh = BigInt("82")
		const uintftznAr5 = BigInt("2013")
		const addressD0nyEpG = accounts[4]
		const uint256mn7m56S = await ReviveD3tCoaZ.recoverERC20.call(uintupIzqEh, {from: accounts[4]});
		const bool2Fw4gL = await ReviveD3tCoaZ.transfer.call(addressD0nyEpG, uintftznAr5, {from: accounts[2]});
		const uint256cM6ba0H = await ReviveD3tCoaZ.totalSupply.call({from: accounts[4]});
		const boolUHts9ii = await ReviveD3tCoaZ.isOwner.call({from: accounts[0]});

		await expect(ReviveD3tCoaZ.recoverERC20.call(uintupIzqEh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivedr81tdY = await Revive.new({from: accounts[1]});
		const addressn3p1J5m = accounts[2]
		const uintqVEx6gz = BigInt("1301")
		const uint256npzKPIc = await Revivedr81tdY.unlock.call(addressn3p1J5m, {from: accounts[3]});
		const uint256CI9tT2s = await Revivedr81tdY.recoverERC20.call(uintqVEx6gz, {from: accounts[1]});

		assert.equal(uint256npzKPIc, BigInt("0"))
		await expect(Revivedr81tdY.recoverERC20.call(uintqVEx6gz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})