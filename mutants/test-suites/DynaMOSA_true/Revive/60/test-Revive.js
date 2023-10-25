const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveG03GLJt = await Revive.new({from: accounts[4]});
		const uintgjwDH3o = BigInt("622")
		const addressN1xOpI1 = accounts[2]
		const addressTqNT59 = accounts[1]
		const uintdWS9SJB = BigInt("722")
		const addressaq0uAUK = accounts[1]
		const booln0neCFs = await ReviveG03GLJt.isOwner.call({from: accounts[0]});
//		const address7nb1TD = await ReviveG03GLJt.recoverERC20.call(addressN1xOpI1, uintgjwDH3o, {from: accounts[3]});
//		const uint256r3yNaGd = await ReviveG03GLJt.totalBalanceOf.call(addressTqNT59, {from: accounts[3]});
//		const boolKIsljip = await ReviveG03GLJt.decreaseAllowance.call(addressaq0uAUK, uintdWS9SJB, {from: accounts[5]});

		assert.equal(booln0neCFs, false)
		await expect(ReviveG03GLJt.recoverERC20.call(addressN1xOpI1, uintgjwDH3o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveyiu0Wzd = await Revive.new({from: accounts[2]});
		const byterwmChLm = "0x1f0d0e071806161f0b0b1e110606030e0d171f000f1b1b0c011e1d19071b100f"
		const addressDMboyU3 = accounts[5]
		const uintjDeD21t = BigInt("888")
		const addressRuMHABz = accounts[3]
		const uintq8MzaLd = BigInt("370")
		const bytea7JgJGn = "0x03191b130d1719091d18151e1b0c141f031e0320040e1009181e0b0a081d1c08"
		const addressYn9dbLh = accounts[3]
		const addressKijvGDq = accounts[1]
		const uint256TFW4bel = await Reviveyiu0Wzd.tokensUnlockable.call(addressDMboyU3, byterwmChLm, {from: accounts[3]});
		const boolZiZxU71 = await Reviveyiu0Wzd.transfer.call(addressRuMHABz, uintjDeD21t, {from: accounts[2]});
		const uint256JHbZ9D = await Reviveyiu0Wzd.tokensLockedAtTime.call(addressYn9dbLh, bytea7JgJGn, uintq8MzaLd, {from: accounts[1]});
		const boolcGXowRb = await Reviveyiu0Wzd.isOwner.call({from: accounts[0]});
		const uint256sGOLB0Q = await Reviveyiu0Wzd.totalBalanceOf.call(addressKijvGDq, {from: accounts[3]});

		assert.equal(boolZiZxU71, true)
		assert.equal(boolcGXowRb, false)
		assert.equal(uint256JHbZ9D, BigInt("0"))
		assert.equal(uint256TFW4bel, BigInt("0"))
		assert.equal(uint256sGOLB0Q, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveO360uZQ = await Revive.new({from: accounts[0]});
		const uinthqyaO04 = BigInt("1935")
		const byted5ISNfq = "0x0e1108180909051a1d0f040c181c191f0a141b0314130304111a0b0900010807"
		const addressIt9SUWM = "0x0000000000000000000000000000000000000001"
		const addressjr0nZaA = accounts[4]
		const uintkWuBPE = BigInt("718")
		const addressQBag7yd = accounts[5]
		const addressg8eGQA5 = accounts[1]
//		const booliU2vSMh = await ReviveO360uZQ.increaseLockAmount.call(byted5ISNfq, uinthqyaO04, {from: accounts[2]});
//		const uint256eZB9NBE = await ReviveO360uZQ.allowance.call(addressjr0nZaA, addressIt9SUWM, {from: accounts[3]});
//		const addressRZHmW4T = await ReviveO360uZQ.recoverERC20.call(addressQBag7yd, uintkWuBPE, {from: accounts[3]});
//		const uint256J335hA2 = await ReviveO360uZQ.unlock.call(addressg8eGQA5, {from: accounts[4]});

		await expect(ReviveO360uZQ.increaseLockAmount.call(byted5ISNfq, uinthqyaO04, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveUBUXDJP = await Revive.new({from: accounts[5]});
		const uintxfj3Xt = BigInt("1033")
		const addresswWXU3G = accounts[3]
		const uintiFkx5y = BigInt("69")
		const addressQFqyL2B = accounts[3]
		const addressXv3lbLc = "0x0000000000000000000000000000000000000001"
		const addressRqwyes6 = accounts[5]
//		const boolxORh2j9 = await ReviveUBUXDJP.decreaseAllowance.call(addresswWXU3G, uintxfj3Xt, {from: accounts[2]});
//		const boolksfxWPB = await ReviveUBUXDJP.decreaseAllowance.call(addressQFqyL2B, uintiFkx5y, {from: accounts[5]});
//		const uint256Wox2oY6 = await ReviveUBUXDJP.allowance.call(addressRqwyes6, addressXv3lbLc, {from: accounts[5]});

		await expect(ReviveUBUXDJP.decreaseAllowance.call(addresswWXU3G, uintxfj3Xt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivehKDnRnH = await Revive.new({from: accounts[4]});
		const addressZbZuFhh = accounts[2]
		const uintjePLHFx = BigInt("1091")
		const addressK8bIDGi = accounts[4]
		const bytev59QYCl = "0x0003000c1b081a120a0c011a0f1909110e11020a1f0f0f1e0c1b06080d050a19"
		const addressPgMZ0wg = accounts[4]
		const uint256rwMMvZk = await RevivehKDnRnH.balanceOf.call(addressZbZuFhh, {from: accounts[4]});
		const boolnTaI9MO = await RevivehKDnRnH.approve.call(addressK8bIDGi, uintjePLHFx, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OAVemDI = await RevivehKDnRnH.tokensLocked.call(addressPgMZ0wg, bytev59QYCl, {from: accounts[3]});

		assert.equal(boolnTaI9MO, true)
		assert.equal(uint256OAVemDI, BigInt("0"))
		assert.equal(uint256rwMMvZk, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivezE5VZHN = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintEKBAd6T = BigInt("99")
		const addressA40Fby8 = accounts[3]
		const addresss51IhW = accounts[4]
		const uintVzCmR1S = BigInt("425")
		const byteMsPelXX = "0x1806121a0a1e1303091c1e181512021a030e20090811151f0102111e0c081219"
		const addressbcr1yVc = "0x0000000000000000000000000000000000000001"
		const addressZhsfvKI = accounts[0]
		const boolXbYCzPJ = await RevivezE5VZHN.transfer.call(addressA40Fby8, uintEKBAd6T, {from: accounts[1]});
		const uint256ASPEIw7 = await RevivezE5VZHN.getUnlockableTokens.call(addresss51IhW, {from: accounts[3]});
		const uint256Mzdkjwv = await RevivezE5VZHN.tokensLockedAtTime.call(addressbcr1yVc, byteMsPelXX, uintVzCmR1S, {from: accounts[3]});
		const uint256O3NeeEY = await RevivezE5VZHN.unlock.call(addressZhsfvKI, {from: accounts[2]});
	});

	it('test for Revive', async () => {
		const ReviveNoJhsHe = await Revive.new({from: accounts[1]});
		const addressFrCdkcq = "0x0000000000000000000000000000000000000001"
		const uintMstA26l = BigInt("1954")
		const addressooz1ttA = accounts[4]
		const uintrMp8cpJ = BigInt("1647")
		const uintMw4UMk9 = BigInt("1241")
		const byteocZMD8a = "0x170815150f1908070f08101520160a11051104160301030a1811090004160908"
		const addressOGYAV17 = accounts[1]
		const uint256nWSkdq = await ReviveNoJhsHe.unlock.call(addressFrCdkcq, {from: accounts[4]});
		const boolDyhChs1 = await ReviveNoJhsHe.approve.call(addressooz1ttA, uintMstA26l, {from: accounts[2]});
//		const boolWgdkfbh = await ReviveNoJhsHe.lock.call(byteocZMD8a, uintMw4UMk9, uintrMp8cpJ, {from: accounts[2]});
//		await ReviveNoJhsHe.onlyOwner.call({from: accounts[3]});
//		const addressL4xncbp = await ReviveNoJhsHe.transferOwnership.call(addressOGYAV17, {from: accounts[0]});

		assert.equal(boolDyhChs1, true)
		assert.equal(uint256nWSkdq, BigInt("0"))
		await expect(ReviveNoJhsHe.lock.call(byteocZMD8a, uintMw4UMk9, uintrMp8cpJ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveikdNBlF = await Revive.new({from: accounts[3]});
		const uintdhk08pc = BigInt("1274")
		const bytena8cugq = "0x0c0d060312171e1c1b04050f1e071200110707010a160e19180b130d08021300"
		const addressQQSaJCg = accounts[0]
		const uintQwVtDcq = BigInt("552")
		const uintnnjymiu = BigInt("313")
		const byteKFiyhEl = "0x1a15161a1705140806051c091c0b050d1e0c101a0b140316140111031f1b1b19"
		const addressfZy8pTw = await ReviveikdNBlF.owner.call({from: accounts[0]});
//		const boollBatBVD = await ReviveikdNBlF.increaseLockAmount.call(bytena8cugq, uintdhk08pc, {from: "0x0000000000000000000000000000000000000001"});
//		const addressmGdkYAj = await ReviveikdNBlF.transferOwnership.call(addressQQSaJCg, {from: accounts[1]});
//		const boolry5zNw = await ReviveikdNBlF.lock.call(byteKFiyhEl, uintnnjymiu, uintQwVtDcq, {from: accounts[0]});
//		const boolDZkeeVt = await ReviveikdNBlF.isOwner.call({from: accounts[4]});
//		await ReviveikdNBlF.renounceOwnership.call({from: accounts[3]});

		assert.equal(addressfZy8pTw, 0x89cb2DE1F3e7abb297121B19BFf0d975A8996f2C)
		await expect(ReviveikdNBlF.increaseLockAmount.call(bytena8cugq, uintdhk08pc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveIVSltbS = await Revive.new({from: accounts[0]});
		const uintW07KLr = BigInt("1472")
		const byteTsj3ih = "0x1106070b1808071f101e110e1a151418080e081c181f0e0e021e0b021e161b17"
		const uintBbb2cCf = BigInt("1743")
		const uintaRenl90 = BigInt("761")
		const byteGcudy2V = "0x0b0d101b13091c061b0720161e111b05122013071a0d15200c0a150711051b1d"
		const uintJziw4CB = BigInt("1098")
		const addressmbX5b7w = accounts[1]
		const uintxbnnPVF = BigInt("1603")
		const addressYMyVSYW = accounts[2]
		const addressIZO32YW = accounts[0]
//		const boolXYT6WEr = await ReviveIVSltbS.extendLock.call(byteTsj3ih, uintW07KLr, {from: accounts[2]});
//		const boolSvPqEt7 = await ReviveIVSltbS.lock.call(byteGcudy2V, uintaRenl90, uintBbb2cCf, {from: accounts[0]});
//		const boolrV63AmH = await ReviveIVSltbS.transfer.call(addressmbX5b7w, uintJziw4CB, {from: accounts[3]});
//		const addressAEUuvt1 = await ReviveIVSltbS.recoverERC20.call(addressYMyVSYW, uintxbnnPVF, {from: accounts[4]});
//		const uint256eVaIvx = await ReviveIVSltbS.totalBalanceOf.call(addressIZO32YW, {from: accounts[2]});
//		const addressXg0Qqef = await ReviveIVSltbS.owner.call({from: accounts[3]});

		await expect(ReviveIVSltbS.extendLock.call(byteTsj3ih, uintW07KLr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveG03GLJt = await Revive.new({from: accounts[4]});
		const uintTZ0Ib1z = BigInt("1470")
		const addressVOCeUGx = "0x0000000000000000000000000000000000000001"
		const uintAwOSjMP = BigInt("1455")
		const addressAnQCk2R = accounts[1]
		const uintT5xnfjF = BigInt("622")
		const addressDDifBjW = accounts[2]
		const addressYUgekzd = accounts[1]
		const uintGk9Ywz = BigInt("722")
		const addressVZiH7hD = accounts[2]
		const booln0neCFs = await ReviveG03GLJt.isOwner.call({from: accounts[0]});
		const boolO7mm6UJ = await ReviveG03GLJt.increaseAllowance.call(addressVOCeUGx, uintTZ0Ib1z, {from: accounts[1]});
		const bools98e6ve = await ReviveG03GLJt.approve.call(addressAnQCk2R, uintAwOSjMP, {from: accounts[4]});
//		const address7nb1TD = await ReviveG03GLJt.recoverERC20.call(addressDDifBjW, uintT5xnfjF, {from: accounts[3]});
//		const uint256r3yNaGd = await ReviveG03GLJt.totalBalanceOf.call(addressYUgekzd, {from: accounts[3]});
//		const boolKIsljip = await ReviveG03GLJt.decreaseAllowance.call(addressVZiH7hD, uintGk9Ywz, {from: accounts[5]});

		assert.equal(boolO7mm6UJ, true)
		assert.equal(booln0neCFs, false)
		assert.equal(bools98e6ve, true)
		await expect(ReviveG03GLJt.recoverERC20.call(addressDDifBjW, uintT5xnfjF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveG03GLJt = await Revive.new({from: accounts[4]});
		const uintxaaRBiJ = BigInt("622")
		const addressYGQQjnF = accounts[2]
		const address5VWqQl = accounts[2]
		const uintgkVWgTq = BigInt("722")
		const addresskijrtB2 = accounts[1]
//		await ReviveG03GLJt.onlyOwner.call({from: accounts[2]});
//		const booln0neCFs = await ReviveG03GLJt.isOwner.call({from: accounts[0]});
//		const address7nb1TD = await ReviveG03GLJt.recoverERC20.call(addressYGQQjnF, uintxaaRBiJ, {from: accounts[3]});
//		const uint256r3yNaGd = await ReviveG03GLJt.totalBalanceOf.call(address5VWqQl, {from: accounts[3]});
//		const boolKIsljip = await ReviveG03GLJt.decreaseAllowance.call(addresskijrtB2, uintgkVWgTq, {from: accounts[5]});

		await expect(ReviveG03GLJt.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivevRiUNB2 = await Revive.new({from: accounts[4]});
		const addressDuIZo6y = accounts[5]
		const uint256QZC3jwE = await RevivevRiUNB2.unlock.call(addressDuIZo6y, {from: accounts[0]});
		const uint256YGYkbKf = await RevivevRiUNB2.totalSupply.call({from: accounts[3]});

		assert.equal(uint256QZC3jwE, BigInt("0"))
		assert.equal(uint256YGYkbKf, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const Reviveyiu0Wzd = await Revive.new({from: accounts[2]});
		const bytegluntjX = "0x1f0d0e071806161f0b0b1e110606030e0d171f000f1b1b0c011e1d19071b100f"
		const addressBwaRzz = accounts[5]
		const uintchRvZk = BigInt("888")
		const addressAe0nZt3 = accounts[3]
		const uintHnEknI = BigInt("370")
		const byteQoNNiSC = "0x03191b130d1719091d18151e1b0c141f031e0320040e1009181e0b0a081d1c08"
		const addressFHkUu9X = accounts[3]
		const addressUV4A9Hv = accounts[2]
		const addressETvHDLl = accounts[4]
		const uintodHfchh = BigInt("268")
		const addressUrArz6n = accounts[2]
		const addressCabfLxs = accounts[1]
		const uint256TFW4bel = await Reviveyiu0Wzd.tokensUnlockable.call(addressBwaRzz, bytegluntjX, {from: accounts[3]});
		const boolZiZxU71 = await Reviveyiu0Wzd.transfer.call(addressAe0nZt3, uintchRvZk, {from: accounts[2]});
		const uint256JHbZ9D = await Reviveyiu0Wzd.tokensLockedAtTime.call(addressFHkUu9X, byteQoNNiSC, uintHnEknI, {from: accounts[1]});
		const boolcGXowRb = await Reviveyiu0Wzd.isOwner.call({from: accounts[0]});
		const uint256Qhy4d1V = await Reviveyiu0Wzd.allowance.call(addressETvHDLl, addressUV4A9Hv, {from: accounts[3]});
//		const boolAATqOBO = await Reviveyiu0Wzd.transfer.call(addressUrArz6n, uintodHfchh, {from: accounts[1]});
//		const uint256sGOLB0Q = await Reviveyiu0Wzd.totalBalanceOf.call(addressCabfLxs, {from: accounts[3]});

		assert.equal(boolZiZxU71, true)
		assert.equal(boolcGXowRb, false)
		assert.equal(uint256JHbZ9D, BigInt("0"))
		assert.equal(uint256Qhy4d1V, BigInt("0"))
		assert.equal(uint256TFW4bel, BigInt("0"))
		await expect(Reviveyiu0Wzd.transfer.call(addressUrArz6n, uintodHfchh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMvJV2wo = await Revive.new({from: accounts[3]});
		const addressE6bJWYD = accounts[2]
		const uintKvfSFvF = BigInt("147")
		const bytehQ3YP7c = "0x141f0d021b0419080d19141a0b040a02100b0311091c0b0400151b170b0b150b"
		const addressck2UEY3 = accounts[5]
		const uintGZ6Tay4 = BigInt("1049")
		const addresswfqLi4K = accounts[2]
		const uintXCAH0ua = BigInt("324")
		const addressqCtLRmW = accounts[3]
		const uintlEdpg6m = BigInt("903")
		const uintw5gkfLA = BigInt("289")
		const byteN7bU1Td = "0x10111214120d1c1b100e0c041005061c1f0806021802041d1d0e1c140a121b1b"
		const addressRVvDH4U = accounts[4]
		const uintywhJAw = BigInt("275")
		const addressdi3em3T = accounts[0]
		const addressvyNEcuW = accounts[3]
		const uint2565kBBZq = await ReviveMvJV2wo.getUnlockableTokens.call(addressE6bJWYD, {from: accounts[3]});
		const addresseg3PA94 = await ReviveMvJV2wo.owner.call({from: accounts[2]});
		const uint256PQHzQIV = await ReviveMvJV2wo.tokensLockedAtTime.call(addressck2UEY3, bytehQ3YP7c, uintKvfSFvF, {from: accounts[4]});
//		const addressWGa0oJ = await ReviveMvJV2wo.recoverERC20.call(addresswfqLi4K, uintGZ6Tay4, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbSDOF07 = await ReviveMvJV2wo.transfer.call(addressqCtLRmW, uintXCAH0ua, {from: accounts[0]});
//		const boolPuivpJH = await ReviveMvJV2wo.lock.call(byteN7bU1Td, uintw5gkfLA, uintlEdpg6m, {from: accounts[0]});
//		const addresssloM6v9 = await ReviveMvJV2wo.transferOwnership.call(addressRVvDH4U, {from: accounts[3]});
//		const boolbF2GnJ = await ReviveMvJV2wo.transferFrom.call(addressvyNEcuW, addressdi3em3T, uintywhJAw, {from: accounts[1]});

		assert.equal(addresseg3PA94, 0x89cb2DE1F3e7abb297121B19BFf0d975A8996f2C)
		assert.equal(uint2565kBBZq, BigInt("0"))
		assert.equal(uint256PQHzQIV, BigInt("0"))
		await expect(ReviveMvJV2wo.recoverERC20.call(addresswfqLi4K, uintGZ6Tay4, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivecmLS0dv = await Revive.new({from: accounts[0]});
		const addressAYaWarB = "0x0000000000000000000000000000000000000001"
		const addressqS1Xwd = accounts[2]
		const uintquWxEu = BigInt("751")
		const addresspHmTcwP = accounts[0]
		const uintWjhmrNR = BigInt("23")
		const addresswGHsGjw = accounts[0]
		const addressw3Wh30e = accounts[4]
		const addressbII6dR = accounts[4]
		const uint256V0lgeeB = await RevivecmLS0dv.allowance.call(addressqS1Xwd, addressAYaWarB, {from: "0x0000000000000000000000000000000000000001"});
//		const addressY5t6smP = await RevivecmLS0dv.recoverERC20.call(addresspHmTcwP, uintquWxEu, {from: accounts[0]});
//		const booleCv7tv = await RevivecmLS0dv.increaseAllowance.call(addresswGHsGjw, uintWjhmrNR, {from: accounts[3]});
//		const uint256ssckPf8 = await RevivecmLS0dv.allowance.call(addressbII6dR, addressw3Wh30e, {from: accounts[3]});

		assert.equal(uint256V0lgeeB, BigInt("0"))
		await expect(RevivecmLS0dv.recoverERC20.call(addresspHmTcwP, uintquWxEu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMvJV2wo = await Revive.new({from: accounts[3]});
		const uintiHSoar6 = BigInt("1031")
		const addressTPqXzX6 = accounts[3]
		const addressaXkhdfK = accounts[1]
		const uintPVdYEdB = BigInt("1049")
		const addressd9uBmpD = accounts[2]
		const uintSHhK1yU = BigInt("324")
		const addressy7ASEpl = accounts[3]
		const addressSbQSLPz = accounts[4]
		const uintd1HOm2 = BigInt("275")
		const addressfWAcDEg = accounts[0]
		const addressO99c20t = accounts[3]
		const addresseg3PA94 = await ReviveMvJV2wo.owner.call({from: accounts[2]});
		const boolUvK08z5 = await ReviveMvJV2wo.increaseAllowance.call(addressTPqXzX6, uintiHSoar6, {from: accounts[4]});
		const addressqRqyuqH = await ReviveMvJV2wo.transferOwnership.call(addressaXkhdfK, {from: accounts[3]});
//		const addressWGa0oJ = await ReviveMvJV2wo.recoverERC20.call(addressd9uBmpD, uintPVdYEdB, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbSDOF07 = await ReviveMvJV2wo.transfer.call(addressy7ASEpl, uintSHhK1yU, {from: accounts[0]});
//		const addresssloM6v9 = await ReviveMvJV2wo.transferOwnership.call(addressSbQSLPz, {from: accounts[3]});
//		const boolbF2GnJ = await ReviveMvJV2wo.transferFrom.call(addressO99c20t, addressfWAcDEg, uintd1HOm2, {from: accounts[1]});

		assert.equal(addresseg3PA94, 0x89cb2DE1F3e7abb297121B19BFf0d975A8996f2C)
		assert.equal(boolUvK08z5, true)
		await expect(ReviveMvJV2wo.recoverERC20.call(addressd9uBmpD, uintPVdYEdB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMvJV2wo = await Revive.new({from: accounts[3]});
		const uintFQH73f4 = BigInt("147")
		const byteRSVC4F = "0x141f0d021b0419080d19141a0b040a02100b0311091c0b0400151b170b0b150b"
		const addressCjTa4fe = accounts[4]
		const uintpFL6QE1 = BigInt("1847")
		const addresssaGeAh = "0x0000000000000000000000000000000000000001"
		const addresscsbFmA6 = accounts[3]
		const uintaOr6QfJ = BigInt("1049")
		const addressSC1Q1Ws = accounts[2]
		const uintSY7Ej5u = BigInt("324")
		const addressvI99O5C = accounts[3]
		const addresseg3PA94 = await ReviveMvJV2wo.owner.call({from: accounts[2]});
		const uint256PQHzQIV = await ReviveMvJV2wo.tokensLockedAtTime.call(addressCjTa4fe, byteRSVC4F, uintFQH73f4, {from: accounts[4]});
//		const boolzOMuVdx = await ReviveMvJV2wo.transferFrom.call(addresscsbFmA6, addresssaGeAh, uintpFL6QE1, {from: accounts[2]});
//		const addressWGa0oJ = await ReviveMvJV2wo.recoverERC20.call(addressSC1Q1Ws, uintaOr6QfJ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolbSDOF07 = await ReviveMvJV2wo.transfer.call(addressvI99O5C, uintSY7Ej5u, {from: accounts[0]});

		assert.equal(addresseg3PA94, 0x89cb2DE1F3e7abb297121B19BFf0d975A8996f2C)
		assert.equal(uint256PQHzQIV, BigInt("0"))
		await expect(ReviveMvJV2wo.transferFrom.call(addresscsbFmA6, addresssaGeAh, uintpFL6QE1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNoJhsHe = await Revive.new({from: accounts[1]});
		const addressj3kU4YJ = "0x0000000000000000000000000000000000000001"
		const uintcQZrt1R = BigInt("1533")
		const uintZ3i8wR6 = BigInt("1390")
		const bytenZHz1i2 = "0x0e1405080311070214021e0b150b170500160e1f0b1f1c081f060a001f030317"
		const addressNjfsHSn = accounts[0]
		const uintuz5kim = BigInt("1646")
		const uintFRbXWtJ = BigInt("1241")
		const byteXQgm8FS = "0x170815150f1908070f08101520160a11051104160301030a1811090004160908"
		const addresszYA3nqR = accounts[1]
		const uint256nWSkdq = await ReviveNoJhsHe.unlock.call(addressj3kU4YJ, {from: accounts[4]});
//		const boolu4ePzSs = await ReviveNoJhsHe.transferWithLock.call(addressNjfsHSn, bytenZHz1i2, uintZ3i8wR6, uintcQZrt1R, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZ9eyblh = await ReviveNoJhsHe.isOwner.call({from: accounts[3]});
//		const boolWgdkfbh = await ReviveNoJhsHe.lock.call(byteXQgm8FS, uintFRbXWtJ, uintuz5kim, {from: accounts[2]});
//		await ReviveNoJhsHe.onlyOwner.call({from: accounts[3]});
//		const addressL4xncbp = await ReviveNoJhsHe.transferOwnership.call(addresszYA3nqR, {from: accounts[0]});

		assert.equal(uint256nWSkdq, BigInt("0"))
		await expect(ReviveNoJhsHe.transferWithLock.call(addressNjfsHSn, bytenZHz1i2, uintZ3i8wR6, uintcQZrt1R, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivevRiUNB2 = await Revive.new({from: accounts[4]});
		const uintJSwbTst = BigInt("1366")
		const bytej1LXkop = "0x18141a1d0604191e1c0c03180c0e1a160f1d1416031209100a1114151605fffffffd16"
//		const boolZIlrbkU = await RevivevRiUNB2.increaseLockAmount.call(bytej1LXkop, uintJSwbTst, {from: accounts[0]});
//		const addressSK7nCG = await RevivevRiUNB2.owner.call({from: accounts[2]});

		await expect(RevivevRiUNB2.increaseLockAmount.call(bytej1LXkop, uintJSwbTst, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive63xSko = await Revive.new({from: accounts[3]});
		const addressUeWCzmh = accounts[4]
		const addresso89WEsE = accounts[2]
		const uintnt1cNG = BigInt("285")
		const addressc1cOBVY = accounts[0]
		const uint256WsOztoC = await Revive63xSko.allowance.call(addresso89WEsE, addressUeWCzmh, {from: accounts[5]});
//		await Revive63xSko.renounceOwnership.call({from: accounts[3]});
//		const boolBlMLokt = await Revive63xSko.transfer.call(addressc1cOBVY, uintnt1cNG, {from: accounts[5]});

		assert.equal(uint256WsOztoC, BigInt("0"))
		await expect(Revive63xSko.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefPTmjOg = await Revive.new({from: accounts[5]});
		const uintyMOX6Q9 = BigInt("70")
		const addressYDs9wZ = accounts[0]
		const uintaX0y8uK = BigInt("1050")
		const uintsBw7giR = BigInt("884")
		const addressDxXU2zS = accounts[5]
		const boolReoPoTA = await RevivefPTmjOg.approve.call(addressYDs9wZ, uintyMOX6Q9, {from: accounts[2]});
//		const uint256LPcyTlx = await RevivefPTmjOg.recoverERC20.call(uintaX0y8uK, {from: accounts[1]});
//		const boolgujbx27 = await RevivefPTmjOg.transfer.call(addressDxXU2zS, uintsBw7giR, {from: accounts[2]});

		assert.equal(boolReoPoTA, true)
		await expect(RevivefPTmjOg.recoverERC20.call(uintaX0y8uK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqV0wVAx = await Revive.new({from: accounts[2]});
		const uintEUqdGTO = BigInt("585")
		const addressfIUq0ig = accounts[4]
		const uintuLboVs9 = BigInt("40")
		const bytetwHDbA4 = "0x1b0d0b0a000c1f020c191504061006061ffffffffe1f05141f1301101e0c20021d0715"
		const addressg9xs8NJ = accounts[0]
		const uintUHr8f14 = BigInt("838")
		const addressK5IdpZs = "0x0000000000000000000000000000000000000001"
		const addressCkmFmq = accounts[3]
		const addressynd7sxB = accounts[2]
		const uintf20tcP0 = BigInt("1611")
		const uintmbKpbvb = BigInt("1122")
		const byteTnDDviD = "0x160b051a120a1f040a1a1a131817131000201314161d14161e070e111a081605"
		const addressSxOxFEm = accounts[3]
		const uintYOz1plW = BigInt("571")
		const byteaH5WViD = "0x0d15180b1409091718191a071b0c101d1c0e1f2010140a1111120b0113131402"
		const uintzPGfVdi = BigInt("943")
		const bytemutoSW = "0x08090404170d171f0d0e050b1f050d1901140f07190e151e0d07051220160f06"
		const boolCN5Awx = await ReviveqV0wVAx.approve.call(addressfIUq0ig, uintEUqdGTO, {from: accounts[5]});
//		const uint256hBj7i5s = await ReviveqV0wVAx.tokensLockedAtTime.call(addressg9xs8NJ, bytetwHDbA4, uintuLboVs9, {from: accounts[0]});
//		const boolpQoLmSJ = await ReviveqV0wVAx.transferFrom.call(addressCkmFmq, addressK5IdpZs, uintUHr8f14, {from: accounts[1]});
//		const addressh90CYnE = await ReviveqV0wVAx.transferOwnership.call(addressynd7sxB, {from: accounts[4]});
//		const boollELUlyd = await ReviveqV0wVAx.transferWithLock.call(addressSxOxFEm, byteTnDDviD, uintmbKpbvb, uintf20tcP0, {from: accounts[3]});
//		const boolg3XFwQb = await ReviveqV0wVAx.extendLock.call(byteaH5WViD, uintYOz1plW, {from: accounts[2]});
//		const boolaAdHSB0 = await ReviveqV0wVAx.extendLock.call(bytemutoSW, uintzPGfVdi, {from: accounts[4]});

		assert.equal(boolCN5Awx, true)
		await expect(ReviveqV0wVAx.tokensLockedAtTime.call(addressg9xs8NJ, bytetwHDbA4, uintuLboVs9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMvJV2wo = await Revive.new({from: accounts[3]});
		const uintI0ggUM9 = BigInt("101")
		const bytexrxokt5 = "0x141f0dfffffffc1b0419080d19141a0b040a02100b0311091c0b0400151b170b0b150b"
		const addresscVrIX2y = accounts[4]
		const uintFOC9iVu = BigInt("869")
		const byteGvJITQj = "0x121012200807051908021f1f081a180c121a12130d10010f0f13191c0e11140d"
		const uintWzUlOB = BigInt("1596")
		const addresswUzIUlQ = accounts[3]
		const addressGCvx7iO = accounts[3]
//		const uint256PQHzQIV = await ReviveMvJV2wo.tokensLockedAtTime.call(addresscVrIX2y, bytexrxokt5, uintI0ggUM9, {from: accounts[4]});
//		const boolHIkCwAa = await ReviveMvJV2wo.extendLock.call(byteGvJITQj, uintFOC9iVu, {from: "0x0000000000000000000000000000000000000001"});
//		const boolUWq9wbW = await ReviveMvJV2wo.transferFrom.call(addressGCvx7iO, addresswUzIUlQ, uintWzUlOB, {from: accounts[1]});

		await expect(ReviveMvJV2wo.tokensLockedAtTime.call(addresscVrIX2y, bytexrxokt5, uintI0ggUM9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveG03GLJt = await Revive.new({from: accounts[4]});
		const addressZMnW50M = accounts[4]
		const uintl2Azcq = BigInt("1923")
		const uint256ulRjBRT = await ReviveG03GLJt.getUnlockableTokens.call(addressZMnW50M, {from: accounts[3]});
//		const uint256sqcx7xK = await ReviveG03GLJt.recoverERC20.call(uintl2Azcq, {from: accounts[0]});
//		const addressUlmY2Nl = await ReviveG03GLJt.owner.call({from: accounts[0]});

		assert.equal(uint256ulRjBRT, BigInt("0"))
		await expect(ReviveG03GLJt.recoverERC20.call(uintl2Azcq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveG03GLJt = await Revive.new({from: accounts[4]});
		const bytezDKXncW = "0x13060e0e1d080f0c03041f11131b1510062009190d191a07081905070b13000b"
		const addressbrWRdZV = accounts[1]
		const uintZ4THlnk = BigInt("1935")
		const addressnLZd3Lr = accounts[1]
		const uint256uV27dd6 = await ReviveG03GLJt.tokensUnlockable.call(addressbrWRdZV, bytezDKXncW, {from: accounts[1]});
//		const uint256iT86OKs = await ReviveG03GLJt.recoverERC20.call(uintZ4THlnk, {from: accounts[3]});
//		const uint256r3yNaGd = await ReviveG03GLJt.totalBalanceOf.call(addressnLZd3Lr, {from: accounts[3]});

		assert.equal(uint256uV27dd6, BigInt("0"))
		await expect(ReviveG03GLJt.recoverERC20.call(uintZ4THlnk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveuqVezaO = await Revive.new({from: accounts[2]});
		const uintObHKhK2 = BigInt("1067")
		const uintjE4gq26 = BigInt("334")
		const addressrKYinaM = accounts[5]
//		const uint256Vtjf0P8 = await ReviveuqVezaO.recoverERC20.call(uintObHKhK2, {from: accounts[4]});
//		const boolycwtaQj = await ReviveuqVezaO.increaseAllowance.call(addressrKYinaM, uintjE4gq26, {from: accounts[3]});

		await expect(ReviveuqVezaO.recoverERC20.call(uintObHKhK2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveG03GLJt = await Revive.new({from: accounts[4]});
		const addressicj0nB8 = accounts[2]
		const uintqyeM0U = BigInt("307")
		const uint256r3yNaGd = await ReviveG03GLJt.totalBalanceOf.call(addressicj0nB8, {from: accounts[3]});
//		const uint256afn5RT = await ReviveG03GLJt.recoverERC20.call(uintqyeM0U, {from: accounts[3]});

		assert.equal(uint256r3yNaGd, BigInt("0"))
		await expect(ReviveG03GLJt.recoverERC20.call(uintqyeM0U, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNoJhsHe = await Revive.new({from: accounts[1]});
		const addressjiSnhz = accounts[1]
		const uintLQFMto = BigInt("560")
		const addresseDJwIZ = "0x0000000000000000000000000000000000000002"
		const uintRAH5BID = BigInt("1652")
		const uintlw3UE7f = BigInt("1241")
		const byteYnbrZsP = "0x170815150f1908070f08101520160a11051104160301030a1811090004160908"
		const uint256DAfAj9K = await ReviveNoJhsHe.balanceOf.call(addressjiSnhz, {from: accounts[4]});
//		const uint256bBltGO6 = await ReviveNoJhsHe.recoverERC20.call(uintLQFMto, {from: accounts[2]});
//		const uint256nWSkdq = await ReviveNoJhsHe.unlock.call(addresseDJwIZ, {from: accounts[4]});
//		const boolWgdkfbh = await ReviveNoJhsHe.lock.call(byteYnbrZsP, uintlw3UE7f, uintRAH5BID, {from: accounts[2]});

		assert.equal(uint256DAfAj9K, BigInt("3000000000000000000000000000"))
		await expect(ReviveNoJhsHe.recoverERC20.call(uintLQFMto, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqV0wVAx = await Revive.new({from: accounts[2]});
		const addressF0JW1jg = accounts[3]
		const addressQCk4T2D = accounts[6]
		const uintSwUjfbp = BigInt("1729")
		const addressJINqZPB = accounts[3]
		const uintY4KbTHq = BigInt("538")
		const bytefG9DSaR = "0x202017111b13080201181b01121e0b070805120d15041e0206141f141c0d041e"
		const uintQhqxKYL = BigInt("0")
		const byteA27pKm0 = "0x121b120a020a1d1709121d1307050e000414060c1f17020117071a101f0f1c05"
		const addressNWATYbR = accounts[0]
		const uint256Xw6LUZa = await ReviveqV0wVAx.allowance.call(addressQCk4T2D, addressF0JW1jg, {from: accounts[2]});
//		const uint256cWg2WGP = await ReviveqV0wVAx.recoverERC20.call(uintSwUjfbp, {from: accounts[4]});
//		const uint256t29U98D = await ReviveqV0wVAx.getUnlockableTokens.call(addressJINqZPB, {from: accounts[1]});
//		const boolkiGBJOX = await ReviveqV0wVAx.extendLock.call(bytefG9DSaR, uintY4KbTHq, {from: accounts[0]});
//		const uint256hBj7i5s = await ReviveqV0wVAx.tokensLockedAtTime.call(addressNWATYbR, byteA27pKm0, uintQhqxKYL, {from: accounts[0]});

		assert.equal(uint256Xw6LUZa, BigInt("0"))
		await expect(ReviveqV0wVAx.recoverERC20.call(uintSwUjfbp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNoJhsHe = await Revive.new({from: accounts[1]});
		const uintbAzTYwH = BigInt("448")
		const uintRhPFDVs = BigInt("974")
		const addressqMsiXYf = accounts[0]
		const uintvOgryzS = BigInt("1652")
		const uinthD2r4Yj = BigInt("1221")
		const bytepGowrFw = "0x170815150f1908070f08101520160a11051104160301030a1811090004160908"
//		const uint256e7Al7ge = await ReviveNoJhsHe.recoverERC20.call(uintbAzTYwH, {from: accounts[1]});
//		const boolANS7je = await ReviveNoJhsHe.decreaseAllowance.call(addressqMsiXYf, uintRhPFDVs, {from: accounts[5]});
//		await ReviveNoJhsHe.onlyOwner.call({from: accounts[2]});
//		const boolWgdkfbh = await ReviveNoJhsHe.lock.call(bytepGowrFw, uinthD2r4Yj, uintvOgryzS, {from: accounts[2]});

		await expect(ReviveNoJhsHe.recoverERC20.call(uintbAzTYwH, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefGgOk3Z = await Revive.new({from: accounts[1]});
		const uinttq8VdKz = BigInt("634")
		const uintA5SAooO = BigInt("47")
		const byteFiA7WPh = "0x1e180e091a050c0e15141e1c19040d16051c190616180c0f170c140318160400"
		const addressB2LF7ZC = accounts[0]
		const addressLxUSFB1 = accounts[0]
		const byteo0XMKf = "0x070013191d04100c02050d1004141b1414150a16101312050411062002060117"
		const addressKFUk4J9 = accounts[1]
//		const uint256LMhBIRu = await RevivefGgOk3Z.recoverERC20.call(uinttq8VdKz, {from: accounts[3]});
//		const booluBvdKa3 = await RevivefGgOk3Z.increaseLockAmount.call(byteFiA7WPh, uintA5SAooO, {from: accounts[2]});
//		const uint256XDjxLpd = await RevivefGgOk3Z.allowance.call(addressLxUSFB1, addressB2LF7ZC, {from: accounts[3]});
//		const uint256SFPdrrc = await RevivefGgOk3Z.tokensUnlockable.call(addressKFUk4J9, byteo0XMKf, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RevivefGgOk3Z.recoverERC20.call(uinttq8VdKz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqV0wVAx = await Revive.new({from: accounts[2]});
		const addressMHCFvH = accounts[3]
		const addressrXSIL7X = accounts[5]
		const uintJuz9lsk = BigInt("658")
		const uintoQh0tz = BigInt("0")
		const byteput8IlV = "0x121b120a020a1d1709121d1307050e000414060c1f14020117071a101f0f1c05"
		const addressHTe3Pp = accounts[0]
		const uint256Xw6LUZa = await ReviveqV0wVAx.allowance.call(addressrXSIL7X, addressMHCFvH, {from: accounts[2]});
//		const uint256KMvrQ5T = await ReviveqV0wVAx.recoverERC20.call(uintJuz9lsk, {from: accounts[0]});
//		const uint256hBj7i5s = await ReviveqV0wVAx.tokensLockedAtTime.call(addressHTe3Pp, byteput8IlV, uintoQh0tz, {from: accounts[0]});

		assert.equal(uint256Xw6LUZa, BigInt("0"))
		await expect(ReviveqV0wVAx.recoverERC20.call(uintJuz9lsk, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveG03GLJt = await Revive.new({from: accounts[4]});
		const addressTIMRUNG = accounts[1]
		const uintLLZjUJp = BigInt("1499")
		const addressffDYgsD = accounts[4]
		const uint256r3yNaGd = await ReviveG03GLJt.totalBalanceOf.call(addressTIMRUNG, {from: accounts[3]});
//		const uint256YFpMrzp = await ReviveG03GLJt.recoverERC20.call(uintLLZjUJp, {from: accounts[2]});
//		const uint256fa1DslJ = await ReviveG03GLJt.getUnlockableTokens.call(addressffDYgsD, {from: accounts[4]});

		assert.equal(uint256r3yNaGd, BigInt("0"))
		await expect(ReviveG03GLJt.recoverERC20.call(uintLLZjUJp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivevRiUNB2 = await Revive.new({from: accounts[4]});
		const uintJAdGfpb = BigInt("1332")
		const uintL1bj9J4 = BigInt("1366")
		const byteqPEXIF = "0x18141a1c0604191e1c0c03180c0e1a160f1d1416031209100a11141516050316"
//		const uint256wWGeMtJ = await RevivevRiUNB2.recoverERC20.call(uintJAdGfpb, {from: accounts[4]});
//		const boolZIlrbkU = await RevivevRiUNB2.increaseLockAmount.call(byteqPEXIF, uintL1bj9J4, {from: accounts[0]});

		await expect(RevivevRiUNB2.recoverERC20.call(uintJAdGfpb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqV0wVAx = await Revive.new({from: accounts[2]});
		const uintFT54pqp = BigInt("0")
		const byteHeWVcZ = "0x121b120a020a161709121d1307050e000414060c1f17020117071a101f0f1c05"
		const addressLCn4qgv = accounts[0]
		const uintcKvHiu7 = BigInt("370")
		const uint256hBj7i5s = await ReviveqV0wVAx.tokensLockedAtTime.call(addressLCn4qgv, byteHeWVcZ, uintFT54pqp, {from: accounts[0]});
//		const uint256oxbvrsg = await ReviveqV0wVAx.recoverERC20.call(uintcKvHiu7, {from: accounts[2]});

		assert.equal(uint256hBj7i5s, BigInt("0"))
		await expect(ReviveqV0wVAx.recoverERC20.call(uintcKvHiu7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivevRiUNB2 = await Revive.new({from: accounts[4]});
		const addressPEHnCQ3 = accounts[0]
		const uintx1JfMP8 = BigInt("975")
		const uintle205Wg = BigInt("748")
		const bytesH3PQX9 = "0x0c0e1005121d191b0e0115090e1a1a0c1ffffffffe18110c001e121d1d1a1f0114020e"
		const addressm6qUqs = accounts[4]
		const uint256mmzxyqf = await RevivevRiUNB2.balanceOf.call(addressPEHnCQ3, {from: accounts[1]});
//		const booluhQBYl4 = await RevivevRiUNB2.transferWithLock.call(addressm6qUqs, bytesH3PQX9, uintle205Wg, uintx1JfMP8, {from: accounts[3]});

		assert.equal(uint256mmzxyqf, BigInt("0"))
		await expect(RevivevRiUNB2.transferWithLock.call(addressm6qUqs, bytesH3PQX9, uintle205Wg, uintx1JfMP8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveG03GLJt = await Revive.new({from: accounts[4]});
		const address4BmDYf = accounts[1]
		const uintX0d4QN = BigInt("861")
		const addressyM70VrF = accounts[5]
		const addressX9upiED = accounts[1]
		const uint256W08EmJX = await ReviveG03GLJt.unlock.call(address4BmDYf, {from: accounts[5]});
//		const uint256xbxOeH2 = await ReviveG03GLJt.recoverERC20.call(uintX0d4QN, {from: accounts[0]});
//		const addresstyNU5qA = await ReviveG03GLJt.transferOwnership.call(addressyM70VrF, {from: accounts[4]});
//		const uint256r3yNaGd = await ReviveG03GLJt.totalBalanceOf.call(addressX9upiED, {from: accounts[3]});

		assert.equal(uint256W08EmJX, BigInt("0"))
		await expect(ReviveG03GLJt.recoverERC20.call(uintX0d4QN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveqV0wVAx = await Revive.new({from: accounts[2]});
		const uint1QJMIf = BigInt("1162")
		const uintDjn0uGO = BigInt("710")
		const byteCSfhh1j = "0x101d03fffffffe090b050b1f1c191c0200031c1a131d10060311140e1f17110d0a0f04"
		const uintrJpbcVU = BigInt("0")
		const bytebBbQHqv = "0x121b120a020a161709121d1307050e000414060c1f17020117071a101f0f1c05"
		const addressHCtkmrw = accounts[0]
//		const boolhrguzOF = await ReviveqV0wVAx.lock.call(byteCSfhh1j, uintDjn0uGO, uint1QJMIf, {from: accounts[3]});
//		const uint256hBj7i5s = await ReviveqV0wVAx.tokensLockedAtTime.call(addressHCtkmrw, bytebBbQHqv, uintrJpbcVU, {from: accounts[0]});

		await expect(ReviveqV0wVAx.lock.call(byteCSfhh1j, uintDjn0uGO, uint1QJMIf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})