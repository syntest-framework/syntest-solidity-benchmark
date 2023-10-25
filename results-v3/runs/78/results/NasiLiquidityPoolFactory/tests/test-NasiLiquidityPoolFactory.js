const NasiLiquidityPoolFactory = artifacts.require("NasiLiquidityPoolFactory");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NasiLiquidityPoolFactory', (accounts) => {
	it('test for NasiLiquidityPoolFactory', async () => {
		const addresslId6JhA = accounts[3]
		const addressPYHO4qo = accounts[1]
		const uintPNT8ykq = BigInt("1816")
		const uintUldalg8 = BigInt("730")
		const NasiLiquidityPoolFactoryUvbiD23 = await NasiLiquidityPoolFactory.new(addresslId6JhA, addressPYHO4qo, uintPNT8ykq, uintUldalg8, {from: accounts[2]});
		const uintZfeWeh3 = BigInt("635")
		const addressQq4xWXw = accounts[2]
		const boolxb8QP3E = await NasiLiquidityPoolFactoryUvbiD23.isOwner.call({from: accounts[4]});
		const boolrCUwZlv = await NasiLiquidityPoolFactoryUvbiD23.transfer.call(addressQq4xWXw, uintZfeWeh3, {from: accounts[2]});

		assert.equal(boolxb8QP3E, false)
		await expect(NasiLiquidityPoolFactoryUvbiD23.transfer.call(addressQq4xWXw, uintZfeWeh3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringSBtGBvH = "LahNUeQTaprS7gdXIu2VaJjWswMi9cYdybaxxsHRFBoIwYqy3TYLp6MfVxvg8NBIuUd08yYSZtMC9uhmihaJ1FCk1m9xMjmHX"
		const stringQkThcO = "yC4Ivkkn"
		const uintab5KRYQ = BigInt("234")
		const NasiLiquidityPoolFactoryvE5wpvs = await NasiLiquidityPoolFactory.new(stringSBtGBvH, stringQkThcO, uintab5KRYQ, {from: accounts[2]});
		const uintLnWtgm5 = BigInt("1480")
		const addressHzZIT8A = accounts[4]
		const uintG545gQj = BigInt("309")
		const addressyhayaW3 = accounts[3]
		const uintqXTakdG = BigInt("868")
		const addresscuVwqKo = accounts[5]
		const addressvolq3Ov = "0x0000000000000000000000000000000000000001"
		const uintep0uiVS = BigInt("923")
		const addressA39PPbJ = await NasiLiquidityPoolFactoryvE5wpvs.burnFrom.call(addressHzZIT8A, uintLnWtgm5, {from: accounts[3]});
		const boolOvZAvec = await NasiLiquidityPoolFactoryvE5wpvs.approve.call(addressyhayaW3, uintG545gQj, {from: accounts[2]});
		await NasiLiquidityPoolFactoryvE5wpvs.massUpdatePools.call({from: accounts[3]});
		const uint256XTFNeZX = await NasiLiquidityPoolFactoryvE5wpvs.getPriorVotes.call(addresscuVwqKo, uintqXTakdG, {from: accounts[4]});
		const uint256HFTrM2g = await NasiLiquidityPoolFactoryvE5wpvs.pendingNasi.call(uintep0uiVS, addressvolq3Ov, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringtff0L2v = "lPdRUrog5LWpwhSBOHcaxtpry1I1SZ4oYgpFHT3wcVYY1i4kcuWUaAgGVzR"
		const stringYPORb7s = "ffFIHcR1OazMLnKDhhB2gxnpY9KgzHVoeEC6XnKuwKe3S5lld1K5WBUQtxxGZ"
		const uintyd5IzZG = BigInt("3")
		const NasiLiquidityPoolFactoryIDBahcA = await NasiLiquidityPoolFactory.new(stringtff0L2v, stringYPORb7s, uintyd5IzZG, {from: accounts[5]});
		const uintCNz2006 = BigInt("1301")
		const addressLMHLZwW = accounts[1]
		const uint256k5Chbkl = await NasiLiquidityPoolFactoryIDBahcA.burn.call(uintCNz2006, {from: accounts[2]});
		const addresslOxvCp = await NasiLiquidityPoolFactoryIDBahcA.addMinter.call(addressLMHLZwW, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringNrQGF0I = "7TJV8GjAgzLtQ0UMEkf0tVuBj9tz6wR4sRHpxPQLhzWzn7XnqEEpQNFvEcckw1IWp7OvTci9HaWh"
		const stringZ5oEbbN = "0OOeHD3kZhkbHiQeaDC3gxzMZJjKPOZDVwmZYMTbBoRRVJPOuLtXX4lDYpksOGc73NNh8PR69Hp4o"
		const uintZonKv5Y = BigInt("232")
		const NasiLiquidityPoolFactorykFgYBtT = await NasiLiquidityPoolFactory.new(stringNrQGF0I, stringZ5oEbbN, uintZonKv5Y, {from: accounts[1]});
		const uintU63gG8b = BigInt("1038")
		const addresstdPQQqZ = accounts[3]
		const addressEdHqGZ = accounts[3]
		const uintpNqTotg = BigInt("1422")
		const addressdlR5YhD = accounts[5]
		const uintSJG0Lt = BigInt("2011")
		const addresssA0v3AP = accounts[5]
		const addressyGLlZz = accounts[1]
		const booldHiQG0Q = await NasiLiquidityPoolFactorykFgYBtT.transferFrom.call(addressEdHqGZ, addresstdPQQqZ, uintU63gG8b, {from: accounts[3]});
		const boolv2TPSiF = await NasiLiquidityPoolFactorykFgYBtT.mint.call(addressdlR5YhD, uintpNqTotg, {from: accounts[0]});
		const uint256EQyHCa4 = await NasiLiquidityPoolFactorykFgYBtT.migrate.call(uintSJG0Lt, {from: accounts[4]});
		const addresshXcfdk = await NasiLiquidityPoolFactorykFgYBtT.addPauser.call(addresssA0v3AP, {from: accounts[2]});
		const addressAgdYBdV = await NasiLiquidityPoolFactorykFgYBtT.addPauser.call(addressyGLlZz, {from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringTTAf6Vp = "MJN5KoAbnhMo128dzBL0mcvx1VF"
		const stringcFe7fhI = "bYnuHQdtd7MopwYkRfqyNvHB4xAcgKPpzldieaYNUVGGr0EI"
		const uintNLhHREr = BigInt("247")
		const NasiLiquidityPoolFactory1WP9G7 = await NasiLiquidityPoolFactory.new(stringTTAf6Vp, stringcFe7fhI, uintNLhHREr, {from: accounts[4]});
		const uintZLrQvdG = BigInt("1685")
		const addressPWVsQhx = accounts[1]
		const addressLmUpAUb = accounts[4]
		const bool3wEK68 = true
		const uintERmOzr2 = BigInt("1321")
		const uintAM3eCo6 = BigInt("791")
		const addresszS0aa26 = accounts[1]
		const addressNNLSSB = await NasiLiquidityPoolFactory1WP9G7.burnFrom.call(addressPWVsQhx, uintZLrQvdG, {from: accounts[4]});
		const addressCl7ElKz = await NasiLiquidityPoolFactory1WP9G7.transferOwnership.call(addressLmUpAUb, {from: accounts[4]});
		const uint256i5Z735t = await NasiLiquidityPoolFactory1WP9G7.setAllocationPoint.call(uintAM3eCo6, uintERmOzr2, bool3wEK68, {from: accounts[2]});
		const boolqarILK3 = await NasiLiquidityPoolFactory1WP9G7.isMinter.call(addresszS0aa26, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringnFZ30uZ = "Op613icYfAg6eRhNq6AQcHaFUwdEuAGMnyaqNsqzx3pcmldazZV"
		const stringzei1Itx = "egPdM5QZwsVtvWE"
		const uintRk8cFzC = BigInt("7")
		const NasiLiquidityPoolFactoryfF8UIm2 = await NasiLiquidityPoolFactory.new(stringnFZ30uZ, stringzei1Itx, uintRk8cFzC, {from: accounts[1]});
		const uintS05Yyjb = BigInt("1596")
		const addressyImUVRZ = accounts[3]
		const uintQ70EmEM = BigInt("266")
		const uintEewpz4h = BigInt("1528")
		const addressKIX55Ib = accounts[5]
		const uint5B8oFH = BigInt("1415")
		const addressddXGef0 = accounts[3]
		const address25GY18 = accounts[4]
		const boolDOfNQ2V = await NasiLiquidityPoolFactoryfF8UIm2.increaseAllowance.call(addressyImUVRZ, uintS05Yyjb, {from: accounts[4]});
		const uint256CFYPYsq = await NasiLiquidityPoolFactoryfF8UIm2.updatePool.call(uintQ70EmEM, {from: accounts[4]});
		const booldR1lfHL = await NasiLiquidityPoolFactoryfF8UIm2.approve.call(addressKIX55Ib, uintEewpz4h, {from: accounts[5]});
		const boolUgofOlW = await NasiLiquidityPoolFactoryfF8UIm2.mint.call(addressddXGef0, uint5B8oFH, {from: accounts[1]});
		const addresskkEFro8 = await NasiLiquidityPoolFactoryfF8UIm2.addMinter.call(address25GY18, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringYEKtvM5 = "8CLuinmglYK07knx"
		const stringhsGuvyh = "FF5YAyMzxeTc2BPcLboz"
		const uinti6Y6go = BigInt("205")
		const NasiLiquidityPoolFactoryHvqC87M = await NasiLiquidityPoolFactory.new(stringYEKtvM5, stringhsGuvyh, uinti6Y6go, {from: accounts[4]});
		const addressfeq2yoL = accounts[1]
		const uint9D2Js6 = BigInt("97")
		const addressZ2yixKt = "0x0000000000000000000000000000000000000001"
		const uinturYeNpd = BigInt("1179")
		const addressvk23PHq = "0x0000000000000000000000000000000000000001"
		const addressrkaWFu6 = accounts[2]
		const uintMIDXes = BigInt("768")
		const uint256e8Z2FGO = await NasiLiquidityPoolFactoryHvqC87M.balanceOf.call(addressfeq2yoL, {from: accounts[2]});
		const boolgCWCXg0 = await NasiLiquidityPoolFactoryHvqC87M.transfer.call(addressZ2yixKt, uint9D2Js6, {from: accounts[2]});
		const boolSsL3XDj = await NasiLiquidityPoolFactoryHvqC87M.isOwner.call({from: accounts[0]});
		await NasiLiquidityPoolFactoryHvqC87M.onlyOwner.call({from: accounts[2]});
		const boolFL5IogT = await NasiLiquidityPoolFactoryHvqC87M.transferFrom.call(addressrkaWFu6, addressvk23PHq, uinturYeNpd, {from: accounts[2]});
		const uint256JJRfyS3 = await NasiLiquidityPoolFactoryHvqC87M.burn.call(uintMIDXes, {from: accounts[3]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressFN7Ficr = accounts[3]
		const address74P9iJ = accounts[1]
		const uint179Fzt = BigInt("1816")
		const uintEAJuKS4 = BigInt("730")
		const NasiLiquidityPoolFactoryUvbiD23 = await NasiLiquidityPoolFactory.new(addressFN7Ficr, address74P9iJ, uint179Fzt, uintEAJuKS4, {from: accounts[2]});
		const boolvMEA1x3 = true
		const addressPoFNOix = accounts[4]
		const uintyViu9vT = BigInt("1325")
		const uintovJEu8W = BigInt("116")
		const addressxhFnm0z = accounts[3]
		const uintZ9gGwq8 = BigInt("635")
		const addresshG4POz = accounts[3]
		const uint256DzRrAME = await NasiLiquidityPoolFactoryUvbiD23.addLpToken.call(uintyViu9vT, addressPoFNOix, boolvMEA1x3, {from: accounts[4]});
		const boolxb8QP3E = await NasiLiquidityPoolFactoryUvbiD23.isOwner.call({from: accounts[4]});
		const boolLOXaT4w = await NasiLiquidityPoolFactoryUvbiD23.increaseAllowance.call(addressxhFnm0z, uintovJEu8W, {from: accounts[1]});
		const boolrCUwZlv = await NasiLiquidityPoolFactoryUvbiD23.transfer.call(addresshG4POz, uintZ9gGwq8, {from: accounts[2]});

		await expect(NasiLiquidityPoolFactoryUvbiD23.addLpToken.call(uintyViu9vT, addressPoFNOix, boolvMEA1x3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressMuuLYJp = accounts[3]
		const addressHL0ifG3 = accounts[1]
		const uintOWZjuXC = BigInt("1816")
		const uintOx75x9 = BigInt("730")
		const NasiLiquidityPoolFactoryUvbiD23 = await NasiLiquidityPoolFactory.new(addressMuuLYJp, addressHL0ifG3, uintOWZjuXC, uintOx75x9, {from: accounts[2]});
		const uintSzmkBYV = BigInt("1731")
		const uint256j42PZnc = await NasiLiquidityPoolFactoryUvbiD23.leaveStaking.call(uintSzmkBYV, {from: accounts[2]});
		const boolxb8QP3E = await NasiLiquidityPoolFactoryUvbiD23.isOwner.call({from: accounts[4]});

		await expect(NasiLiquidityPoolFactoryUvbiD23.leaveStaking.call(uintSzmkBYV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringHjRzcUy = "v8aozCb1oBSxSLIkAHA4ZlrIJPezjeDcbep46mF5jlEvEQEttAwAYxtAACtnRvvjICwOPvDVfGnKlK4syHM0CJXGQTSji43UGF"
		const stringf9Ti6CT = "vdwIwjajP9FCfLROqS5cLIPo61zm6Nb7AeTDgk4oQKYjeRh7DwJLqR50GTxDKB5CUq3kbpKa0tJSPCj"
		const uintI8toEy2 = BigInt("190")
		const NasiLiquidityPoolFactoryAXxKtdx = await NasiLiquidityPoolFactory.new(stringHjRzcUy, stringf9Ti6CT, uintI8toEy2, {from: accounts[1]});
		const addresshHeBBT = accounts[3]
		const addressLlS3iFZ = accounts[2]
		const addressnCuerVv = accounts[0]
		const addressloL1QSU = accounts[3]
		const addressrsKzYP0 = await NasiLiquidityPoolFactoryAXxKtdx._delegate.call(addressLlS3iFZ, addresshHeBBT, {from: accounts[0]});
		await NasiLiquidityPoolFactoryAXxKtdx.whenPaused.call({from: accounts[1]});
		const boolEpThaI = await NasiLiquidityPoolFactoryAXxKtdx.paused.call({from: accounts[3]});
		const addressofEj8YX = await NasiLiquidityPoolFactoryAXxKtdx._delegate.call(addressloL1QSU, addressnCuerVv, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressoo6PXQz = accounts[3]
		const addressDA90Xb8 = accounts[1]
		const uintWxBlxcM = BigInt("1816")
		const uintmreIlqf = BigInt("730")
		const NasiLiquidityPoolFactoryUvbiD23 = await NasiLiquidityPoolFactory.new(addressoo6PXQz, addressDA90Xb8, uintWxBlxcM, uintmreIlqf, {from: accounts[2]});
		const uintGNNrLXn = BigInt("366")
		const uintm7n54gR = BigInt("1436")
		const uintirSZCht = BigInt("639")
		const addressUJeZX0E = accounts[2]
		const uint256PxDXOw = await NasiLiquidityPoolFactoryUvbiD23.emergencyWithdraw.call(uintGNNrLXn, {from: accounts[2]});
		const uint256r31eAru = await NasiLiquidityPoolFactoryUvbiD23.burn.call(uintm7n54gR, {from: accounts[3]});
		const boolrCUwZlv = await NasiLiquidityPoolFactoryUvbiD23.transfer.call(addressUJeZX0E, uintirSZCht, {from: accounts[2]});

		await expect(NasiLiquidityPoolFactoryUvbiD23.emergencyWithdraw.call(uintGNNrLXn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringj063bK2 = "f2Eo6M0RBMfJrsOMIDRvtEI9uXyEEAFDe8D5TXr"
		const stringwGjdnNe = "mm3kXxX3J7Z2yvBHbUOlPdDlTjFUmlCKRYl9GNZdXMziG6mTMGpjleHXPmxHdjwsV3C8C5FDbiYE8Q21OOfuxOr"
		const uintjeUnZVo = BigInt("112")
		const NasiLiquidityPoolFactorys7LohWd = await NasiLiquidityPoolFactory.new(stringj063bK2, stringwGjdnNe, uintjeUnZVo, {from: accounts[4]});
		const boolNvkT67i = true
		const addressJk1Usgr = "0x0000000000000000000000000000000000000001"
		const uintfhpvuKh = BigInt("1")
		const uintlFCI9OC = BigInt("430")
		const addressAVgKgt2 = accounts[3]
		const uintBxxZT2 = BigInt("881")
		const uint256mLcFSD = await NasiLiquidityPoolFactorys7LohWd.addLpToken.call(uintfhpvuKh, addressJk1Usgr, boolNvkT67i, {from: accounts[3]});
		const boolD6KH7eF = await NasiLiquidityPoolFactorys7LohWd.increaseAllowance.call(addressAVgKgt2, uintlFCI9OC, {from: accounts[0]});
		const uint256ym06tpe = await NasiLiquidityPoolFactorys7LohWd.emergencyWithdraw.call(uintBxxZT2, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringwCdGFv3 = "Q87CGwlw6RKdPp8q5sb1XP"
		const stringSdpXpmG = "29XoNsfWj0g7J9RRWAcMR8nm725cuRlj60NQ4AbBH6A31LQ91X8h"
		const uintXHJihF = BigInt("40")
		const NasiLiquidityPoolFactoryQpbdVov = await NasiLiquidityPoolFactory.new(stringwCdGFv3, stringSdpXpmG, uintXHJihF, {from: accounts[3]});
		const addressHohjur = accounts[1]
		const uintF93tbx5 = BigInt("631")
		const addressmq13tYp = accounts[0]
		const uintX1TkRqE = BigInt("353")
		const addressck1Y2L9 = accounts[2]
		const uintLsMsKOq = BigInt("1399")
		const addressuGxsbXn = accounts[5]
		const addressvfQc5BP = await NasiLiquidityPoolFactoryQpbdVov.transferOwnership.call(addressHohjur, {from: "0x0000000000000000000000000000000000000001"});
		const boolan1MpJu = await NasiLiquidityPoolFactoryQpbdVov.decreaseAllowance.call(addressmq13tYp, uintF93tbx5, {from: accounts[4]});
		const uint256y3Egcnh = await NasiLiquidityPoolFactoryQpbdVov.leaveStaking.call(uintX1TkRqE, {from: accounts[2]});
		const booltL7sCIf = await NasiLiquidityPoolFactoryQpbdVov.isPauser.call(addressck1Y2L9, {from: accounts[3]});
		const addressTY0qaTj = await NasiLiquidityPoolFactoryQpbdVov.burnFrom.call(addressuGxsbXn, uintLsMsKOq, {from: accounts[0]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressjREA7fc = accounts[3]
		const addressPRgnbya = accounts[1]
		const uintzfPr5XM = BigInt("1816")
		const uintrFLNpRN = BigInt("730")
		const NasiLiquidityPoolFactoryUvbiD23 = await NasiLiquidityPoolFactory.new(addressjREA7fc, addressPRgnbya, uintzfPr5XM, uintrFLNpRN, {from: accounts[2]});
		const uintKOdnbTM = BigInt("1345")
		const uintoLTUdnc = BigInt("1134")
		const uintJvcKTz4 = BigInt("1500")
		const addressqzXM2N = accounts[4]
		const uintJMPFZOW = BigInt("634")
		const addressZlaBJo = accounts[3]
		const uint256CwWQdNH = await NasiLiquidityPoolFactoryUvbiD23.deposit.call(uintoLTUdnc, uintKOdnbTM, {from: accounts[2]});
		const booljZUrXWW = await NasiLiquidityPoolFactoryUvbiD23.decreaseAllowance.call(addressqzXM2N, uintJvcKTz4, {from: accounts[3]});
		const boolrCUwZlv = await NasiLiquidityPoolFactoryUvbiD23.transfer.call(addressZlaBJo, uintJMPFZOW, {from: accounts[2]});

		await expect(NasiLiquidityPoolFactoryUvbiD23.deposit.call(uintoLTUdnc, uintKOdnbTM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressVbLhI0J = accounts[3]
		const addresss3oufaC = accounts[1]
		const uintDE9ZkMi = BigInt("1816")
		const uintp3DlgYw = BigInt("730")
		const NasiLiquidityPoolFactoryUvbiD23 = await NasiLiquidityPoolFactory.new(addressVbLhI0J, addresss3oufaC, uintDE9ZkMi, uintp3DlgYw, {from: accounts[2]});
		const uintBVPcvJS = BigInt("1474")
		const boolfMsYuiX = true
		const uintmvqUXyE = BigInt("1749")
		const uintJFyK9pu = BigInt("1759")
		const uint256nhcEmoY = await NasiLiquidityPoolFactoryUvbiD23.updatePool.call(uintBVPcvJS, {from: accounts[0]});
		const uint256c8D2iPi = await NasiLiquidityPoolFactoryUvbiD23.setAllocationPoint.call(uintJFyK9pu, uintmvqUXyE, boolfMsYuiX, {from: accounts[3]});

		await expect(NasiLiquidityPoolFactoryUvbiD23.updatePool.call(uintBVPcvJS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringmJbPfbU = "E9vwCcT7MLibdwm3Fxax2ch27tdz9n1vzkcg7T6pkDFIFTdzu9IY6JTiDx"
		const stringQMaD1fI = "JXF7Ljqo9D9J9DWl3RZeamuvQQQhmaAqMUJYK6A29udaeNsFyqTVVWa4w8Mi6ubn8kzuX"
		const uintzLk02x3 = BigInt("140")
		const NasiLiquidityPoolFactoryxRGqJM6 = await NasiLiquidityPoolFactory.new(stringmJbPfbU, stringQMaD1fI, uintzLk02x3, {from: accounts[0]});
		const addresszDvkgJa = accounts[1]
		await NasiLiquidityPoolFactoryxRGqJM6.unpause.call({from: accounts[4]});
		await NasiLiquidityPoolFactoryxRGqJM6.onlyPauser.call({from: accounts[4]});
		const addressSM8F86e = await NasiLiquidityPoolFactoryxRGqJM6.setMigrator.call(addresszDvkgJa, {from: accounts[4]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringYFgObar = "8kIKoqORTNtTGYKNp1Juk4EdUJRTBdc6xwEM04aTIqU8LYuWSLtUNWDtOG3qY5G3q8HHdYVVjDjB4Rapfg"
		const stringidAblVz = "DplSeYssLL8kUC3vH3KncR4YsWl4tuWgAnBRjyp9bWbK2VnYEYo1A7LuS8JG93X0YJA7uQo741deniS0O7ux"
		const uintO56dTbD = BigInt("200")
		const NasiLiquidityPoolFactoryDcAyrfm = await NasiLiquidityPoolFactory.new(stringYFgObar, stringidAblVz, uintO56dTbD, {from: accounts[2]});
		const uintFZ6VzB2 = BigInt("16")
		const addressq0BVndt = "0x0000000000000000000000000000000000000001"
		const uintMVGCnCb = BigInt("1869")
		const addresshVepLX4 = accounts[2]
		const boolRZ1PPFy = await NasiLiquidityPoolFactoryDcAyrfm.approve.call(addressq0BVndt, uintFZ6VzB2, {from: accounts[3]});
		const stringlECMGyI = await NasiLiquidityPoolFactoryDcAyrfm.name.call({from: accounts[4]});
		const uint256YDBdtT = await NasiLiquidityPoolFactoryDcAyrfm.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolunO5UTh = await NasiLiquidityPoolFactoryDcAyrfm.increaseAllowance.call(addresshVepLX4, uintMVGCnCb, {from: accounts[0]});
		await NasiLiquidityPoolFactoryDcAyrfm.renounceMinter.call({from: accounts[2]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressMJYqSXA = accounts[3]
		const addressjJUNZAK = accounts[1]
		const uintzdXgTMx = BigInt("1816")
		const uinta8zaiRj = BigInt("730")
		const NasiLiquidityPoolFactoryUvbiD23 = await NasiLiquidityPoolFactory.new(addressMJYqSXA, addressjJUNZAK, uintzdXgTMx, uinta8zaiRj, {from: accounts[2]});
		const uintakjc7A = BigInt("672")
		const uintE7JciXV = BigInt("1837")
		const uintvFePDpB = BigInt("1730")
		const addressp8fVJD = accounts[3]
		const uintSxUZSa = BigInt("635")
		const addresscYmV7k8 = accounts[1]
		const uint256odnptR5 = await NasiLiquidityPoolFactoryUvbiD23.withdraw.call(uintE7JciXV, uintakjc7A, {from: accounts[1]});
		const boolBoQMuaw = await NasiLiquidityPoolFactoryUvbiD23.mint.call(addressp8fVJD, uintvFePDpB, {from: accounts[0]});
		const boolrCUwZlv = await NasiLiquidityPoolFactoryUvbiD23.transfer.call(addresscYmV7k8, uintSxUZSa, {from: accounts[2]});

		await expect(NasiLiquidityPoolFactoryUvbiD23.withdraw.call(uintE7JciXV, uintakjc7A, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressIp9wvyq = "0x0000000000000000000000000000000000000001"
		const addressiU47rKf = accounts[2]
		const uintNxvFGZ6 = BigInt("300")
		const uintAeG1Db = BigInt("1625")
		const NasiLiquidityPoolFactoryKKzWW8A = await NasiLiquidityPoolFactory.new(addressIp9wvyq, addressiU47rKf, uintNxvFGZ6, uintAeG1Db, {from: accounts[3]});
		const uintmxlzWnz = BigInt("34")
		const uintOa08hOW = BigInt("1922")
		const uintqJwzd7 = BigInt("1972")
		const boolqRZXHfG = true
		const uintl4F0b6P = BigInt("657")
		const uintBpJOTZP = BigInt("1878")
		const addressa4n8HUl = accounts[0]
		const uintWfVwScj = BigInt("1207")
		const uint256M0U9qo0 = await NasiLiquidityPoolFactoryKKzWW8A.getBonusMultiplier.call(uintOa08hOW, uintmxlzWnz, {from: accounts[3]});
		const uint2565tOE6P = await NasiLiquidityPoolFactoryKKzWW8A.burn.call(uintqJwzd7, {from: accounts[4]});
		await NasiLiquidityPoolFactoryKKzWW8A.massUpdatePools.call({from: accounts[3]});
		const uint256Wa4m12M = await NasiLiquidityPoolFactoryKKzWW8A.setAllocationPoint.call(uintBpJOTZP, uintl4F0b6P, boolqRZXHfG, {from: accounts[3]});
		const uint256wqMly9K = await NasiLiquidityPoolFactoryKKzWW8A.pendingNasi.call(uintWfVwScj, addressa4n8HUl, {from: accounts[2]});

		assert.equal(uint256M0U9qo0, BigInt("0"))
		await expect(NasiLiquidityPoolFactoryKKzWW8A.burn.call(uintqJwzd7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringPqCkvAv = "yKYmtgbUQcynOJnQtfMXbhVCSLQtYtrfglsP"
		const stringq7puGMx = "qAwWHvz0W6TTnsqNzeFPR23fzqCBerHlj3DE17LXAspZSBU47Qsi2ehZS3aj5S4meS5Aia1IOk51JBNyo0M7AvTkL"
		const uintYak4nWX = BigInt("75")
		const NasiLiquidityPoolFactorycoW6ER1 = await NasiLiquidityPoolFactory.new(stringPqCkvAv, stringq7puGMx, uintYak4nWX, {from: accounts[3]});
		const boolDxyDJZl = await NasiLiquidityPoolFactorycoW6ER1.paused.call({from: accounts[3]});
		await NasiLiquidityPoolFactorycoW6ER1.onlyMinter.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const addressruFn55L = accounts[3]
		const addressbmLHdvd = accounts[1]
		const uintgSF9WC6 = BigInt("1816")
		const uintcznkDJT = BigInt("730")
		const NasiLiquidityPoolFactoryUvbiD23 = await NasiLiquidityPoolFactory.new(addressruFn55L, addressbmLHdvd, uintgSF9WC6, uintcznkDJT, {from: accounts[2]});
		const addressAGK9KDp = accounts[5]
		const uintbAfgbzX = BigInt("158")
		const uintwgoOHwc = BigInt("634")
		const addressgerAmn = accounts[2]
		const addressyteuUex = accounts[2]
		const uintd46rr97 = BigInt("1835")
		const uint256ZyMQqxc = await NasiLiquidityPoolFactoryUvbiD23.pendingNasi.call(uintbAfgbzX, addressAGK9KDp, {from: accounts[3]});
		const boolrCUwZlv = await NasiLiquidityPoolFactoryUvbiD23.transfer.call(addressgerAmn, uintwgoOHwc, {from: accounts[2]});
		const stringMJEJ2V = await NasiLiquidityPoolFactoryUvbiD23.name.call({from: accounts[4]});
		const uint256HvRX2XI = await NasiLiquidityPoolFactoryUvbiD23.pendingNasi.call(uintd46rr97, addressyteuUex, {from: accounts[1]});

		await expect(NasiLiquidityPoolFactoryUvbiD23.pendingNasi.call(uintbAfgbzX, addressAGK9KDp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const stringfcQ08F1 = "htaoRVCqtjZo7H8JGdtYYMVHWo1NHwFABHbRJefA29nsIgESXypiR6y2XCeB5MEh7DiVfzHuZtX"
		const stringfIWalrM = "f6qM0sSAtx81C2esDE7396AyI6A1HqqGGbpenCyHBaCIwHhVpcZIMu7dFoWsWc"
		const uintidrmsfj = BigInt("65")
		const NasiLiquidityPoolFactoryaL0ka88 = await NasiLiquidityPoolFactory.new(stringfcQ08F1, stringfIWalrM, uintidrmsfj, {from: accounts[1]});
		const addressT8EZEog = accounts[3]
		const uintLvcy5v = BigInt("27")
		const uintgmyfMro = BigInt("1508")
		const addressuKOtRVd = accounts[4]
		const boolkcA7KCj = await NasiLiquidityPoolFactoryaL0ka88.paused.call({from: accounts[0]});
		const uint256aZ0WjWz = await NasiLiquidityPoolFactoryaL0ka88.pendingNasi.call(uintLvcy5v, addressT8EZEog, {from: accounts[2]});
		const stringBkUfit = await NasiLiquidityPoolFactoryaL0ka88.name.call({from: accounts[3]});
		const boolj1z1O07 = await NasiLiquidityPoolFactoryaL0ka88.paused.call({from: accounts[1]});
		const boolve3mmTP = await NasiLiquidityPoolFactoryaL0ka88.mint.call(addressuKOtRVd, uintgmyfMro, {from: accounts[1]});
	});

	it('test for NasiLiquidityPoolFactory', async () => {
		const string6MEcPt = "T4zLOuV4zhSthdJmw5z"
		const stringWrUWrxH = "CPsuno5v9NjmRRV7b6QuVRdCGrnBivpkKl4frYbHXszgxAfSi6ndKzs92niRo"
		const uintjPCTEYd = BigInt("249")
		const NasiLiquidityPoolFactoryYCEK1NZ = await NasiLiquidityPoolFactory.new(string6MEcPt, stringWrUWrxH, uintjPCTEYd, {from: accounts[4]});
		const uintZmTySN = BigInt("987")
		const addressu8BQbbB = accounts[5]
		const uintxu3ALLI = BigInt("1139")
		const uintOEXqsRU = BigInt("722")
		const addressCHdkveR = accounts[2]
		const boolENTAN6M = await NasiLiquidityPoolFactoryYCEK1NZ.mint.call(addressu8BQbbB, uintZmTySN, {from: accounts[1]});
		const uint256f5jYS38 = await NasiLiquidityPoolFactoryYCEK1NZ.migrate.call(uintxu3ALLI, {from: "0x0000000000000000000000000000000000000001"});
		const boolsiF9xLF = await NasiLiquidityPoolFactoryYCEK1NZ.transfer.call(addressCHdkveR, uintOEXqsRU, {from: accounts[3]});
	});
})