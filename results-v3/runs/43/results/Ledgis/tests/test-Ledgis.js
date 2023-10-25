const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisAyJOmpx = await Ledgis.new({from: accounts[0]});
		const uintwmpOOhv = BigInt("1695")
		const addressPB8AjBC = accounts[0]
		const addressJpfrHSY = accounts[1]
		const addresscaOwsOU = await LedgisAyJOmpx.unlock.call(addressPB8AjBC, uintwmpOOhv, {from: accounts[4]});
		const uint256l5b8qpX = await LedgisAyJOmpx.currentTime.call({from: accounts[4]});
		await LedgisAyJOmpx.unpause.call({from: accounts[0]});
		await LedgisAyJOmpx.unpause.call({from: accounts[0]});
		const addressV0iJZJz = await LedgisAyJOmpx.freeze.call(addressJpfrHSY, {from: accounts[0]});

		await expect(LedgisAyJOmpx.unlock.call(addressPB8AjBC, uintwmpOOhv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiscXOq8MI = await Ledgis.new({from: accounts[4]});
		const uintinMLKSZ = BigInt("1426")
		const addressK2vaPCw = accounts[1]
		const uintrqmCKUb = BigInt("807")
		const addressrSqPGfi = accounts[2]
		const boolUSvpf88 = await LedgiscXOq8MI.transfer.call(addressK2vaPCw, uintinMLKSZ, {from: accounts[0]});
		const boolsH41gfx = await LedgiscXOq8MI.increaseAllowance.call(addressrSqPGfi, uintrqmCKUb, {from: accounts[4]});

		await expect(LedgiscXOq8MI.transfer.call(addressK2vaPCw, uintinMLKSZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisVm2XTI0 = await Ledgis.new({from: accounts[2]});
		const uintCBPJvhj = BigInt("134")
		const addressMnAugR = accounts[3]
		const uinteaBCet = BigInt("1713")
		const addressMDcQCpq = accounts[1]
		const boolzUQFHrQ = await LedgisVm2XTI0.decreaseAllowance.call(addressMnAugR, uintCBPJvhj, {from: accounts[1]});
		await LedgisVm2XTI0.onlyOwner.call({from: accounts[3]});
		const boolINWDWIL = await LedgisVm2XTI0.transfer.call(addressMDcQCpq, uinteaBCet, {from: accounts[0]});
		const uint256boNfMl = await LedgisVm2XTI0.totalSupply.call({from: accounts[3]});

		await expect(LedgisVm2XTI0.decreaseAllowance.call(addressMnAugR, uintCBPJvhj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisQuXwHlx = await Ledgis.new({from: accounts[2]});
		const addressM1HGB9o = "0x0000000000000000000000000000000000000001"
		const uintwoaYd9w = BigInt("269")
		const addressAqe8s36 = accounts[3]
		const boolYZZVTUt = await LedgisQuXwHlx.isFrozen.call(addressM1HGB9o, {from: accounts[4]});
		await LedgisQuXwHlx.renounceOwnership.call({from: accounts[4]});
		const uint256GxTAoz1 = await LedgisQuXwHlx.afterTime.call(uintwoaYd9w, {from: accounts[0]});
		await LedgisQuXwHlx.onlyOwner.call({from: accounts[2]});
		const addressVE6pUDH = await LedgisQuXwHlx.unfreeze.call(addressAqe8s36, {from: accounts[4]});

		assert.equal(boolYZZVTUt, false)
		await expect(LedgisQuXwHlx.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisviYfOBf = await Ledgis.new({from: accounts[0]});
		const addressbqlUWxS = accounts[0]
		const uinthatLvmu = BigInt("266")
		const uintagvm9o1 = BigInt("753")
		const addressix6wFno = accounts[2]
		await LedgisviYfOBf.whenNotPaused.call({from: accounts[4]});
		const addressMhowFW0 = await LedgisviYfOBf.transferOwnership.call(addressbqlUWxS, {from: accounts[4]});
		const uint256a3cefw0 = await LedgisviYfOBf.afterTime.call(uinthatLvmu, {from: accounts[2]});
		const boolb43kQz = await LedgisviYfOBf.mint.call(addressix6wFno, uintagvm9o1, {from: accounts[1]});
		await LedgisviYfOBf.unpause.call({from: accounts[1]});

		await expect(LedgisviYfOBf.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisG2JN6Z2 = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const address4sMPVY = "0x0000000000000000000000000000000000000001"
		const addressVDmt2g6 = accounts[5]
		const uintLyxXy9Z = BigInt("292")
		const addresslMUS10h = accounts[1]
		const uint256FgHZayz = await LedgisG2JN6Z2.currentTime.call({from: accounts[1]});
		const uint256xWwlGFk = await LedgisG2JN6Z2.allowance.call(addressVDmt2g6, address4sMPVY, {from: accounts[2]});
		const boolqJVuTvn = await LedgisG2JN6Z2.increaseAllowance.call(addresslMUS10h, uintLyxXy9Z, {from: accounts[3]});
		await LedgisG2JN6Z2.onlyOwner.call({from: accounts[4]});
	});

	it('test for Ledgis', async () => {
		const LedgismICi6Of = await Ledgis.new({from: accounts[4]});
		const uintVTFaiIe = BigInt("616")
		const addressl5v90qF = accounts[2]
		const uintyNkb6Aj = BigInt("988")
		const addresso6qXoaA = accounts[4]
		const addressor9r4ow = "0x0000000000000000000000000000000000000001"
		const uintSPw2v8x = BigInt("953")
		const addressQCVjWL5 = accounts[3]
		const uintpcrIrFp = BigInt("299")
		const addressofahx0O = accounts[2]
		await LedgismICi6Of.lockState.call(addressl5v90qF, uintVTFaiIe, {from: accounts[3]});
		const addressVniPE4 = await LedgismICi6Of.unlock.call(addresso6qXoaA, uintyNkb6Aj, {from: accounts[4]});
		const uint256tPwYQOs = await LedgismICi6Of.balanceOf.call(addressor9r4ow, {from: accounts[0]});
		const boolsuMD1Ux = await LedgismICi6Of.mint.call(addressQCVjWL5, uintSPw2v8x, {from: accounts[2]});
		const addressG7hQYsT = await LedgismICi6Of.unlock.call(addressofahx0O, uintpcrIrFp, {from: accounts[0]});

		await expect(LedgismICi6Of.lockState.call(addressl5v90qF, uintVTFaiIe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisviYfOBf = await Ledgis.new({from: accounts[0]});
		const addressixBYdc = accounts[4]
		const addressPfPNxnI = accounts[0]
		const uintVtAorM = BigInt("266")
		const uintE6gSlFq = BigInt("753")
		const addressKIzaZjb = accounts[2]
		const uintR0fNPB = BigInt("1624")
		const addresserirSrf = accounts[0]
		const addressnUqKjdN = await LedgisviYfOBf.transferOwnership.call(addressixBYdc, {from: accounts[0]});
		await LedgisviYfOBf.whenNotPaused.call({from: accounts[4]});
		const addressMhowFW0 = await LedgisviYfOBf.transferOwnership.call(addressPfPNxnI, {from: accounts[4]});
		const uint256a3cefw0 = await LedgisviYfOBf.afterTime.call(uintVtAorM, {from: accounts[2]});
		const boolb43kQz = await LedgisviYfOBf.mint.call(addressKIzaZjb, uintE6gSlFq, {from: accounts[1]});
		const boolTpJBMEo = await LedgisviYfOBf.transfer.call(addresserirSrf, uintR0fNPB, {from: accounts[3]});
		await LedgisviYfOBf.unpause.call({from: accounts[1]});

		await expect(LedgisviYfOBf.whenNotPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisYFPbDQc = await Ledgis.new({from: accounts[4]});
		const uintLjUNRS2 = BigInt("886")
		const addressbRX0CwH = accounts[0]
		const addressHifuRaQ = accounts[5]
		const uinthgD6ms = BigInt("191")
		const uintb7tF9wF = BigInt("774")
		const address5iw2Yj = accounts[4]
		const boolaiFvoR4 = await LedgisYFPbDQc.transferFrom.call(addressHifuRaQ, addressbRX0CwH, uintLjUNRS2, {from: accounts[0]});
		const addressgAsaCa0 = await LedgisYFPbDQc.lockAfter.call(address5iw2Yj, uintb7tF9wF, uinthgD6ms, {from: accounts[0]});

		await expect(LedgisYFPbDQc.transferFrom.call(addressHifuRaQ, addressbRX0CwH, uintLjUNRS2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiscXOq8MI = await Ledgis.new({from: accounts[4]});
		const uintAC9ZTuC = BigInt("1300")
		const uint8zcBAh = BigInt("1426")
		const addressoWeJAMu = accounts[1]
		const uintSmAjucG = BigInt("807")
		const addressskb1aMz = accounts[2]
		const uint256NEQdamk = await LedgiscXOq8MI.afterTime.call(uintAC9ZTuC, {from: accounts[0]});
		const boolUSvpf88 = await LedgiscXOq8MI.transfer.call(addressoWeJAMu, uint8zcBAh, {from: accounts[0]});
		const boolsH41gfx = await LedgiscXOq8MI.increaseAllowance.call(addressskb1aMz, uintSmAjucG, {from: accounts[4]});

		assert.equal(uint256NEQdamk, BigInt("1630233787"))
		await expect(LedgiscXOq8MI.transfer.call(addressoWeJAMu, uint8zcBAh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisYFPbDQc = await Ledgis.new({from: accounts[4]});
		const uintsERFPrj = BigInt("1019")
		const addressWijVLzC = accounts[0]
		const addressU0veaiv = await LedgisYFPbDQc.burn.call(addressWijVLzC, uintsERFPrj, {from: accounts[4]});

		await expect(LedgisYFPbDQc.burn.call(addressWijVLzC, uintsERFPrj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisD1e1jab = await Ledgis.new({from: accounts[0]});
		const uintWuvWNsd = BigInt("1596")
		const addressjjrokxL = accounts[0]
		const addressD87HlWa = accounts[4]
		const uintOfHOZx4 = BigInt("1834")
		const addressc8cdkWU = accounts[0]
		const address6GXoGA = accounts[0]
		const uintz0Jm5SL = BigInt("86")
		const addressFrnn2q8 = accounts[0]
		const addressSyPYOlm = accounts[0]
		const uint256DggKk5J = await LedgisD1e1jab.currentTime.call({from: accounts[2]});
		const boolwP917v9 = await LedgisD1e1jab.mint.call(addressjjrokxL, uintWuvWNsd, {from: accounts[3]});
		const addressfa94m2k = await LedgisD1e1jab.freeze.call(addressD87HlWa, {from: "0x0000000000000000000000000000000000000001"});
		const boolDgkqO7 = await LedgisD1e1jab.transferFrom.call(address6GXoGA, addressc8cdkWU, uintOfHOZx4, {from: accounts[3]});
		const boolPP7xqsy = await LedgisD1e1jab.transferFrom.call(addressSyPYOlm, addressFrnn2q8, uintz0Jm5SL, {from: accounts[1]});

		assert.equal(uint256DggKk5J, BigInt("1630232485"))
		await expect(LedgisD1e1jab.mint.call(addressjjrokxL, uintWuvWNsd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiscXOq8MI = await Ledgis.new({from: accounts[4]});
		const addressl5zN1s1 = accounts[2]
		const uintE1xBqC6 = BigInt("1426")
		const addressOZLC4K = accounts[2]
		const uintQ3djaMz = BigInt("628")
		const addressFJQVhHW = accounts[0]
		const uint256DmJNnEZ = await LedgiscXOq8MI.balanceOf.call(addressl5zN1s1, {from: accounts[1]});
		const boolUSvpf88 = await LedgiscXOq8MI.transfer.call(addressOZLC4K, uintE1xBqC6, {from: accounts[0]});
		const boolJDjmWaQ = await LedgiscXOq8MI.decreaseAllowance.call(addressFJQVhHW, uintQ3djaMz, {from: accounts[2]});
		await LedgiscXOq8MI.whenPaused.call({from: accounts[4]});

		assert.equal(uint256DmJNnEZ, BigInt("0"))
		await expect(LedgiscXOq8MI.transfer.call(addressOZLC4K, uintE1xBqC6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiscXOq8MI = await Ledgis.new({from: accounts[4]});
		const uintw9347zR = BigInt("807")
		const addressTXqw6hd = accounts[2]
		const boolsH41gfx = await LedgiscXOq8MI.increaseAllowance.call(addressTXqw6hd, uintw9347zR, {from: accounts[4]});

		assert.equal(boolsH41gfx, true)
	});

	it('test for Ledgis', async () => {
		const LedgisuQ3Giyr = await Ledgis.new({from: accounts[3]});
		const addressEovqyjW = accounts[4]
		const addresskyrEcN7 = accounts[4]
		const uintW2KZswx = BigInt("455")
		const address8b1PWs = accounts[2]
		const uint256LjHzjNY = await LedgisuQ3Giyr.allowance.call(addresskyrEcN7, addressEovqyjW, {from: accounts[1]});
		const boolayZQbr = await LedgisuQ3Giyr.transfer.call(address8b1PWs, uintW2KZswx, {from: accounts[5]});

		assert.equal(uint256LjHzjNY, BigInt("0"))
		await expect(LedgisuQ3Giyr.transfer.call(address8b1PWs, uintW2KZswx, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisEVGA1y = await Ledgis.new({from: accounts[0]});
		const addressklgAECB = accounts[2]
		const uintMq3n1R2 = BigInt("1663")
		const addressYJwUsk9 = accounts[1]
		const uint256HLPvc81 = await LedgisEVGA1y.lockCount.call(addressklgAECB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BSpnRt5 = await LedgisEVGA1y.afterTime.call(uintMq3n1R2, {from: accounts[0]});
		const boolk1aUyLj = await LedgisEVGA1y.isFrozen.call(addressYJwUsk9, {from: accounts[3]});

		assert.equal(boolk1aUyLj, false)
		assert.equal(uint256BSpnRt5, BigInt("1630234135"))
		assert.equal(uint256HLPvc81, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgiscXOq8MI = await Ledgis.new({from: accounts[4]});
		const addressJwEL3gj = accounts[2]
		const uintMMooXL = BigInt("1805")
		const uintteA3Ram = BigInt("1380")
		const addressyeUv3W7 = "0x0000000000000000000000000000000000000001"
		const uintsoEKbmW = BigInt("1426")
		const addressL7rLQGH = accounts[2]
		const uintJ2CnHUC = BigInt("628")
		const addressBwEO0tJ = accounts[0]
		const addressOGKbZD2 = accounts[4]
		const uintYzKNyTC = BigInt("231")
		const addressuRYwlwC = accounts[0]
		const addresscs467NQ = accounts[2]
		const addressHnFWdwE = accounts[5]
		const addressDAU92Nt = accounts[0]
		const uint256DmJNnEZ = await LedgiscXOq8MI.balanceOf.call(addressJwEL3gj, {from: accounts[1]});
		const boolR3c9eY = await LedgiscXOq8MI.transferWithLockAfter.call(addressyeUv3W7, uintteA3Ram, uintMMooXL, {from: accounts[4]});
		const boolUSvpf88 = await LedgiscXOq8MI.transfer.call(addressL7rLQGH, uintsoEKbmW, {from: accounts[0]});
		const boolJDjmWaQ = await LedgiscXOq8MI.decreaseAllowance.call(addressBwEO0tJ, uintJ2CnHUC, {from: accounts[2]});
		await LedgiscXOq8MI.whenNotPaused.call({from: accounts[1]});
		const uint256o2zwtKr = await LedgiscXOq8MI.balanceOf.call(addressOGKbZD2, {from: accounts[2]});
		const addressj7YB5GL = await LedgiscXOq8MI.unlock.call(addressuRYwlwC, uintYzKNyTC, {from: accounts[0]});
		await LedgiscXOq8MI.whenPaused.call({from: accounts[4]});
		const uint256oqOCxUB = await LedgiscXOq8MI.allowance.call(addressHnFWdwE, addresscs467NQ, {from: accounts[0]});
		const addressaWfrRLI = await LedgiscXOq8MI.unfreeze.call(addressDAU92Nt, {from: accounts[2]});

		assert.equal(boolR3c9eY, true)
		assert.equal(uint256DmJNnEZ, BigInt("0"))
		await expect(LedgiscXOq8MI.transfer.call(addressL7rLQGH, uintsoEKbmW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiscXOq8MI = await Ledgis.new({from: accounts[4]});
		const addresstFagZot = accounts[3]
		const addressd7yPs5 = accounts[1]
		const uintnLUYeTg = BigInt("1426")
		const addressD24K3yB = accounts[2]
		const addressRgjVULJ = accounts[1]
		const uintDxuJLa0 = BigInt("628")
		const addressMGkKPUt = accounts[0]
		const uint6U2wmL = BigInt("1971")
		const addressRDJ6L2T = accounts[2]
		const uintwLV5Tkv = BigInt("1145")
		const uintaZsiQA = BigInt("1108")
		const addressB5HSSoN = accounts[0]
		const addressPeV7ek2 = "0x0000000000000000000000000000000000000001"
		const uint256DmJNnEZ = await LedgiscXOq8MI.balanceOf.call(addresstFagZot, {from: accounts[1]});
		const addressET1HeSe = await LedgiscXOq8MI.freeze.call(addressd7yPs5, {from: accounts[4]});
		const boolUSvpf88 = await LedgiscXOq8MI.transfer.call(addressD24K3yB, uintnLUYeTg, {from: accounts[0]});
		const addressnslmoV8 = await LedgiscXOq8MI.freeze.call(addressRgjVULJ, {from: accounts[4]});
		const boolJDjmWaQ = await LedgiscXOq8MI.decreaseAllowance.call(addressMGkKPUt, uintDxuJLa0, {from: accounts[2]});
		const addressKiN7v1w = await LedgiscXOq8MI.unlock.call(addressRDJ6L2T, uint6U2wmL, {from: accounts[3]});
		const boolcsVgbbC = await LedgiscXOq8MI.transferWithLockAfter.call(addressB5HSSoN, uintaZsiQA, uintwLV5Tkv, {from: accounts[4]});
		const uint256Cldkan1 = await LedgiscXOq8MI.balanceOf.call(addressPeV7ek2, {from: accounts[4]});
		await LedgiscXOq8MI.whenPaused.call({from: accounts[4]});

		assert.equal(uint256DmJNnEZ, BigInt("0"))
		await expect(LedgiscXOq8MI.transfer.call(addressD24K3yB, uintnLUYeTg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiscXOq8MI = await Ledgis.new({from: accounts[4]});
		const uintxp4tiXO = BigInt("2042")
		const addressTgqH1Io = accounts[2]
		const addressaHKB2pK = accounts[2]
		const boolbbPHIRw = await LedgiscXOq8MI.approve.call(addressTgqH1Io, uintxp4tiXO, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DmJNnEZ = await LedgiscXOq8MI.balanceOf.call(addressaHKB2pK, {from: accounts[1]});

		assert.equal(boolbbPHIRw, true)
		assert.equal(uint256DmJNnEZ, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgiscXOq8MI = await Ledgis.new({from: accounts[4]});
		const addressWcOBCv = accounts[3]
		const uint256DmJNnEZ = await LedgiscXOq8MI.balanceOf.call(addressWcOBCv, {from: accounts[1]});
		const uint256EJJBKil = await LedgiscXOq8MI.totalSupply.call({from: accounts[2]});
		await LedgiscXOq8MI.whenPaused.call({from: accounts[4]});

		assert.equal(uint256DmJNnEZ, BigInt("0"))
		assert.equal(uint256EJJBKil, BigInt("10000000000000"))
		await expect(LedgiscXOq8MI.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJAaBygm = await Ledgis.new({from: accounts[0]});
		const uintrQdR6U = BigInt("1295")
		const addressma5gEyK = accounts[2]
		const uintoGVWQsO = BigInt("1510")
		const addresskkcfRvr = accounts[1]
		const uintFC1q2w3 = BigInt("852")
		const addressuuGV7yy = accounts[3]
		const uintUXYFozd = BigInt("470")
		const address2yt1iD = accounts[3]
		const addresset6POpA = await LedgisJAaBygm.unlock.call(addressma5gEyK, uintrQdR6U, {from: accounts[0]});
		const boolyUVUAo = await LedgisJAaBygm.transfer.call(addresskkcfRvr, uintoGVWQsO, {from: accounts[0]});
		await LedgisJAaBygm.whenNotFrozen.call({from: accounts[5]});
		const boolIskgKxe = await LedgisJAaBygm.increaseAllowance.call(addressuuGV7yy, uintFC1q2w3, {from: accounts[0]});
		const addressYAwxCbR = await LedgisJAaBygm.burn.call(address2yt1iD, uintUXYFozd, {from: accounts[2]});

		await expect(LedgisJAaBygm.unlock.call(addressma5gEyK, uintrQdR6U, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisYFPbDQc = await Ledgis.new({from: accounts[4]});
		const uintOZTOrcA = BigInt("1895")
		const uintrGaMfmD = BigInt("241")
		const addressdlMJhLg = accounts[2]
		const uintGfxcGTE = BigInt("200")
		const addressykNwSuT = "0x0000000000000000000000000000000000000001"
		const uintzYqo18x = BigInt("874")
		const addresseNJ9QPQ = accounts[0]
		const addresskVVj9Mx = accounts[5]
		const addressrVaWyG1 = await LedgisYFPbDQc.lockAfter.call(addressdlMJhLg, uintrGaMfmD, uintOZTOrcA, {from: accounts[4]});
		await LedgisYFPbDQc.lockState.call(addressykNwSuT, uintGfxcGTE, {from: accounts[1]});
		const boolaiFvoR4 = await LedgisYFPbDQc.transferFrom.call(addresskVVj9Mx, addresseNJ9QPQ, uintzYqo18x, {from: accounts[0]});

		await expect(LedgisYFPbDQc.lockAfter.call(addressdlMJhLg, uintrGaMfmD, uintOZTOrcA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiscXOq8MI = await Ledgis.new({from: accounts[4]});
		const addressyLzYgqY = accounts[2]
		const uintTj0bGnc = BigInt("652")
		const addressPP9nG9v = accounts[4]
		const uint0LEtQ8 = BigInt("1399")
		const addressDOzBXKZ = accounts[2]
		const uint256DmJNnEZ = await LedgiscXOq8MI.balanceOf.call(addressyLzYgqY, {from: accounts[1]});
		const addressHLFwVpz = await LedgiscXOq8MI.burn.call(addressPP9nG9v, uintTj0bGnc, {from: accounts[4]});
		const boolUSvpf88 = await LedgiscXOq8MI.transfer.call(addressDOzBXKZ, uint0LEtQ8, {from: accounts[0]});
		await LedgiscXOq8MI.whenPaused.call({from: accounts[4]});

		assert.equal(uint256DmJNnEZ, BigInt("0"))
		await expect(LedgiscXOq8MI.transfer.call(addressDOzBXKZ, uint0LEtQ8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisySEQj3z = await Ledgis.new({from: accounts[2]});
		const addressuU2hxHm = accounts[0]
		const addresslEQ16F6 = accounts[5]
		const uintdGkTw7W = BigInt("546")
		const addressszdlLv5 = accounts[3]
		const uint256AOy8x5N = await LedgisySEQj3z.lockCount.call(addressuU2hxHm, {from: accounts[2]});
		const uint256Mb8nY5R = await LedgisySEQj3z.balanceOf.call(addresslEQ16F6, {from: accounts[4]});
		const booltX8OlC = await LedgisySEQj3z.approve.call(addressszdlLv5, uintdGkTw7W, {from: accounts[3]});
		await LedgisySEQj3z.pause.call({from: accounts[2]});

		assert.equal(booltX8OlC, true)
		assert.equal(uint256AOy8x5N, BigInt("0"))
		assert.equal(uint256Mb8nY5R, BigInt("0"))
		await expect(LedgisySEQj3z.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJAaBygm = await Ledgis.new({from: accounts[0]});
		const uintxRaFWVs = BigInt("1295")
		const addressemDrHW9 = accounts[2]
		const addresssD22Y9Z = accounts[1]
		const uintqIEprx6 = BigInt("470")
		const addressX8Jkgg = accounts[3]
		await LedgisJAaBygm.unpause.call({from: accounts[0]});
		const addresset6POpA = await LedgisJAaBygm.unlock.call(addressemDrHW9, uintxRaFWVs, {from: accounts[0]});
		const uint256qZaRLN = await LedgisJAaBygm.balanceOf.call(addresssD22Y9Z, {from: accounts[1]});
		await LedgisJAaBygm.whenNotFrozen.call({from: accounts[5]});
		const addressYAwxCbR = await LedgisJAaBygm.burn.call(addressX8Jkgg, uintqIEprx6, {from: accounts[2]});

		await expect(LedgisJAaBygm.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiscXOq8MI = await Ledgis.new({from: accounts[4]});
		const uintAqjsEYt = BigInt("398")
		const uintjSU2Jtd = BigInt("845")
		const addressnd4eESI = accounts[0]
		const addressoZeQfpK = accounts[3]
		const uinttL21OS = BigInt("850")
		const addressrsEMTYN = accounts[6]
		const uinthc0Rl00 = BigInt("1964")
		const address7mU1ff = accounts[2]
		const addressS1YOQ7q = await LedgiscXOq8MI.lock.call(addressnd4eESI, uintjSU2Jtd, uintAqjsEYt, {from: accounts[4]});
		const uint256DmJNnEZ = await LedgiscXOq8MI.balanceOf.call(addressoZeQfpK, {from: accounts[1]});
		const boolx8fB2by = await LedgiscXOq8MI.transfer.call(addressrsEMTYN, uinttL21OS, {from: accounts[1]});
		const boolUSvpf88 = await LedgiscXOq8MI.transfer.call(address7mU1ff, uinthc0Rl00, {from: accounts[0]});
		await LedgiscXOq8MI.whenPaused.call({from: accounts[4]});

		await expect(LedgiscXOq8MI.lock.call(addressnd4eESI, uintjSU2Jtd, uintAqjsEYt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisYFPbDQc = await Ledgis.new({from: accounts[4]});
		const addressjQWxV9S = "0x0000000000000000000000000000000000000001"
		const uint7ULUcv = BigInt("874")
		const addressSTvTws = accounts[0]
		const addressvtsP4pU = accounts[5]
		const boolIo0AzTJ = await LedgisYFPbDQc.isFrozen.call(addressjQWxV9S, {from: accounts[2]});
		await LedgisYFPbDQc.renounceOwnership.call({from: accounts[4]});
		await LedgisYFPbDQc.onlyOwner.call({from: accounts[4]});
		const boolaiFvoR4 = await LedgisYFPbDQc.transferFrom.call(addressvtsP4pU, addressSTvTws, uint7ULUcv, {from: accounts[0]});

		assert.equal(boolIo0AzTJ, false)
		await expect(LedgisYFPbDQc.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis9qIOtF = await Ledgis.new({from: accounts[1]});
		const addressDoYQRJJ = accounts[2]
		const uintXw0VRqk = BigInt("1211")
		const addressWXAIcUS = accounts[0]
		const addressz76gZ6 = accounts[0]
		const uintf2pD4U = BigInt("424")
		const addressIUqnAAg = accounts[2]
		const addressNrbvAqz = await Ledgis9qIOtF.unfreeze.call(addressDoYQRJJ, {from: accounts[1]});
		const addressXUNq1ry = await Ledgis9qIOtF.burn.call(addressWXAIcUS, uintXw0VRqk, {from: accounts[2]});
		const boolcyl3juE = await Ledgis9qIOtF.isFrozen.call(addressz76gZ6, {from: accounts[2]});
		const boolosZg4ha = await Ledgis9qIOtF.approve.call(addressIUqnAAg, uintf2pD4U, {from: accounts[5]});

		await expect(Ledgis9qIOtF.burn.call(addressWXAIcUS, uintXw0VRqk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisJAaBygm = await Ledgis.new({from: accounts[0]});
		const uintweIxnaF = BigInt("975")
		const addressUwmlTv = accounts[0]
		const uintcBMKqN = BigInt("1696")
		const addressXIseDod = accounts[3]
		const addressOJ0yrIm = accounts[0]
		const addresslE95tqb = accounts[0]
		const boolzReXhh9 = await LedgisJAaBygm.mint.call(addressUwmlTv, uintweIxnaF, {from: accounts[0]});
		const addresset6POpA = await LedgisJAaBygm.unlock.call(addressXIseDod, uintcBMKqN, {from: accounts[0]});
		const uint256vlV3S5t = await LedgisJAaBygm.allowance.call(addresslE95tqb, addressOJ0yrIm, {from: accounts[2]});

		assert.equal(boolzReXhh9, true)
		await expect(LedgisJAaBygm.unlock.call(addressXIseDod, uintcBMKqN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskLLhmKB = await Ledgis.new({from: accounts[1]});
		const uintODo8ry8 = BigInt("1287")
		const uintkZiyxHL = BigInt("927")
		const addresslXyZxSi = accounts[3]
		const uintdqRSUn2 = BigInt("1661")
		const uintarXjDQg = BigInt("804")
		const addressOLWEEn8 = accounts[4]
		const uintLNXbjnY = BigInt("444")
		const addresssSNV5d = accounts[0]
		const bool6SHLOY = await LedgiskLLhmKB.transferWithLock.call(addresslXyZxSi, uintkZiyxHL, uintODo8ry8, {from: accounts[1]});
		await LedgiskLLhmKB.onlyOwner.call({from: accounts[4]});
		const boolZ8r22Mb = await LedgiskLLhmKB.transferWithLockAfter.call(addressOLWEEn8, uintarXjDQg, uintdqRSUn2, {from: "0x0000000000000000000000000000000000000001"});
		const boolw51TC7J = await LedgiskLLhmKB.mint.call(addresssSNV5d, uintLNXbjnY, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(bool6SHLOY, true)
		await expect(LedgiskLLhmKB.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})