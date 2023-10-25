const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYyV209yg = await KPLAY.new({from: accounts[0]});
		const addressN0F9u9Y = accounts[1]
		const addressvsGUxc6 = accounts[2]
		const uintkBlaXKu = BigInt("939")
		const addressL7qSfmG = accounts[1]
		const uintIo97Yji = BigInt("694")
		const addressTLelsDp = accounts[5]
		const uintBqwKHZF = BigInt("534")
		const addressgZX0sK4 = accounts[1]
		const uint256lkqFEo = await KPLAYyV209yg.allowance.call(addressvsGUxc6, addressN0F9u9Y, {from: accounts[0]});
		const uint256sanGWcS = await KPLAYyV209yg.afterTime.call(uintkBlaXKu, {from: accounts[5]});
//		await KPLAYyV209yg.pause.call({from: accounts[1]});
//		const uint256KlcV1F = await KPLAYyV209yg.balanceOf.call(addressL7qSfmG, {from: accounts[2]});
//		const boolAvvdJau = await KPLAYyV209yg.transfer.call(addressTLelsDp, uintIo97Yji, {from: accounts[4]});
//		const addressiqtbDbW = await KPLAYyV209yg.unlock.call(addressgZX0sK4, uintBqwKHZF, {from: accounts[0]});

		assert.equal(uint256lkqFEo, BigInt("0"))
		assert.equal(uint256sanGWcS, BigInt("1630228760"))
		await expect(KPLAYyV209yg.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYXr0hOwS = await KPLAY.new({from: accounts[4]});
		const uintofiQ75U = BigInt("545")
		const addressBpKCH3m = accounts[5]
		const addressNMh7baT = accounts[0]
		const addressn1flZA = accounts[4]
//		const boolYzDU0I = await KPLAYXr0hOwS.decreaseAllowance.call(addressBpKCH3m, uintofiQ75U, {from: "0x0000000000000000000000000000000000000001"});
//		const addressyMAIZ00 = await KPLAYXr0hOwS.transferOwnership.call(addressNMh7baT, {from: accounts[1]});
//		const addressUFTQQbn = await KPLAYXr0hOwS.freeze.call(addressn1flZA, {from: accounts[4]});

		await expect(KPLAYXr0hOwS.decreaseAllowance.call(addressBpKCH3m, uintofiQ75U, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYmmjns9n = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addresss5299Ra = accounts[0]
		const addressAUvmvs = accounts[0]
		await KPLAYmmjns9n.pause.call({from: accounts[0]});
		const uint256AncXwuf = await KPLAYmmjns9n.allowance.call(addressAUvmvs, addresss5299Ra, {from: accounts[1]});
		const uint256d3UJJwO = await KPLAYmmjns9n.currentTime.call({from: accounts[4]});
	});

	it('test for KPLAY', async () => {
		const KPLAYFdlxiwJ = await KPLAY.new({from: accounts[0]});
		const uintOJNngJ5 = BigInt("313")
		const addressWS4y7Nu = accounts[5]
		const addressSJPfQGm = accounts[4]
		const uintXByrXu = BigInt("171")
		const uintWHLQvYd = BigInt("747")
		const addressRuZVRKg = accounts[5]
		const addressS6KyOwm = "0x0000000000000000000000000000000000000001"
		const uintnKfhfI = BigInt("977")
		const uintMczF7yO = BigInt("1614")
		const addressSZS4VBb = accounts[2]
		const uintCKjBmS = BigInt("1250")
		const addresssRlPwwU = accounts[5]
		const uinta7tBug2 = BigInt("1973")
		const uinteJom5FF = BigInt("1803")
		const addressEfxVMW = accounts[0]
//		const boolyomhhQZ = await KPLAYFdlxiwJ.transferFrom.call(addressSJPfQGm, addressWS4y7Nu, uintOJNngJ5, {from: accounts[4]});
//		const addressBL7Dq3A = await KPLAYFdlxiwJ.lockAfter.call(addressRuZVRKg, uintWHLQvYd, uintXByrXu, {from: accounts[4]});
//		const boolAic290y = await KPLAYFdlxiwJ.isFrozen.call(addressS6KyOwm, {from: accounts[3]});
//		const boolTxQ31NF = await KPLAYFdlxiwJ.transferWithLockAfter.call(addressSZS4VBb, uintMczF7yO, uintnKfhfI, {from: accounts[0]});
//		const boolRrasiUH = await KPLAYFdlxiwJ.decreaseAllowance.call(addresssRlPwwU, uintCKjBmS, {from: accounts[4]});
//		const boolSlAQKVv = await KPLAYFdlxiwJ.transferWithLock.call(addressEfxVMW, uinteJom5FF, uinta7tBug2, {from: accounts[1]});

		await expect(KPLAYFdlxiwJ.transferFrom.call(addressSJPfQGm, addressWS4y7Nu, uintOJNngJ5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYJvNJQ04 = await KPLAY.new({from: accounts[1]});
		const uinthgii6Do = BigInt("716")
		const addressipI53D5 = accounts[2]
		const uint1RPKu2 = BigInt("871")
		const addresssqqUgQ5 = accounts[3]
		const uintBETfTy0 = BigInt("546")
		const addressUl8haDo = accounts[1]
//		await KPLAYJvNJQ04.lockState.call(addressipI53D5, uinthgii6Do, {from: accounts[3]});
//		const boolpwmvOJL = await KPLAYJvNJQ04.approve.call(addresssqqUgQ5, uint1RPKu2, {from: accounts[1]});
//		const bool2QIacR = await KPLAYJvNJQ04.approve.call(addressUl8haDo, uintBETfTy0, {from: accounts[0]});
//		await KPLAYJvNJQ04.whenNotFrozen.call({from: accounts[1]});

		await expect(KPLAYJvNJQ04.lockState.call(addressipI53D5, uinthgii6Do, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYyV209yg = await KPLAY.new({from: accounts[0]});
		const addressLDXsa1c = accounts[1]
		const addressBM0LnEB = accounts[2]
		const uintexTlvWd = BigInt("939")
		const uintW9t5O8v = BigInt("466")
		const addresstTffT48 = accounts[0]
		const addressOPuGV1j = accounts[1]
		const uintrRbDb3 = BigInt("691")
		const addressxDMDMda = accounts[5]
		const uintz5oIC8K = BigInt("534")
		const addressomz1iYI = accounts[1]
		const uint256lkqFEo = await KPLAYyV209yg.allowance.call(addressBM0LnEB, addressLDXsa1c, {from: accounts[0]});
		const uint256sanGWcS = await KPLAYyV209yg.afterTime.call(uintexTlvWd, {from: accounts[5]});
//		await KPLAYyV209yg.whenNotPaused.call({from: accounts[3]});
//		await KPLAYyV209yg.pause.call({from: accounts[1]});
//		const boolQQZqNvj = await KPLAYyV209yg.decreaseAllowance.call(addresstTffT48, uintW9t5O8v, {from: accounts[1]});
//		const uint256KlcV1F = await KPLAYyV209yg.balanceOf.call(addressOPuGV1j, {from: accounts[2]});
//		const boolAvvdJau = await KPLAYyV209yg.transfer.call(addressxDMDMda, uintrRbDb3, {from: accounts[4]});
//		const addressiqtbDbW = await KPLAYyV209yg.unlock.call(addressomz1iYI, uintz5oIC8K, {from: accounts[0]});

		assert.equal(uint256lkqFEo, BigInt("0"))
		assert.equal(uint256sanGWcS, BigInt("1630228734"))
		await expect(KPLAYyV209yg.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYInTAOyi = await KPLAY.new({from: accounts[0]});
		const uintMs1feT0 = BigInt("394")
		const addressvB9cwOI = accounts[0]
		const addressfIJQS9 = accounts[0]
		const addressgHq9wD = accounts[5]
		const booli77rKMz = await KPLAYInTAOyi.increaseAllowance.call(addressvB9cwOI, uintMs1feT0, {from: accounts[4]});
		const boolzHfzAuq = await KPLAYInTAOyi.isFrozen.call(addressfIJQS9, {from: accounts[0]});
//		await KPLAYInTAOyi.whenNotPaused.call({from: accounts[0]});
//		const uint256EwewRhW = await KPLAYInTAOyi.balanceOf.call(addressgHq9wD, {from: accounts[4]});

		assert.equal(booli77rKMz, true)
		assert.equal(boolzHfzAuq, false)
		await expect(KPLAYInTAOyi.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYFdlxiwJ = await KPLAY.new({from: accounts[0]});
		const addressXUfanoa = accounts[0]
		const uintThxc4sL = BigInt("313")
		const addressQUgp8j6 = accounts[5]
		const addressEfwrp6x = accounts[4]
		const uintIc1rmV = BigInt("1399")
		const uintzKycecY = BigInt("982")
		const addressi2ox99I = accounts[2]
		const uintfion8zH = BigInt("171")
		const uintdaOroo = BigInt("747")
		const addressELI43Gi = accounts[5]
		const addressd2zBoHq = "0x0000000000000000000000000000000000000001"
		const uintsye9zie = BigInt("977")
		const uintWr2O17d = BigInt("1614")
		const addressl3NzLDz = accounts[2]
		const uintsZVTrnS = BigInt("1250")
		const addressTnhUXZe = accounts[6]
		const uintCjKLcie = BigInt("1973")
		const uintK9g2owC = BigInt("1803")
		const addressfPm1KZ0 = accounts[0]
		const uint256kSt5YM7 = await KPLAYFdlxiwJ.balanceOf.call(addressXUfanoa, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyomhhQZ = await KPLAYFdlxiwJ.transferFrom.call(addressEfwrp6x, addressQUgp8j6, uintThxc4sL, {from: accounts[4]});
//		const boolytBSbkq = await KPLAYFdlxiwJ.transferWithLock.call(addressi2ox99I, uintzKycecY, uintIc1rmV, {from: accounts[1]});
//		await KPLAYFdlxiwJ.whenNotPaused.call({from: accounts[5]});
//		const addressBL7Dq3A = await KPLAYFdlxiwJ.lockAfter.call(addressELI43Gi, uintdaOroo, uintfion8zH, {from: accounts[4]});
//		const boolAic290y = await KPLAYFdlxiwJ.isFrozen.call(addressd2zBoHq, {from: accounts[3]});
//		const boolTxQ31NF = await KPLAYFdlxiwJ.transferWithLockAfter.call(addressl3NzLDz, uintWr2O17d, uintsye9zie, {from: accounts[0]});
//		const boolRrasiUH = await KPLAYFdlxiwJ.decreaseAllowance.call(addressTnhUXZe, uintsZVTrnS, {from: accounts[4]});
//		const boolSlAQKVv = await KPLAYFdlxiwJ.transferWithLock.call(addressfPm1KZ0, uintK9g2owC, uintCjKLcie, {from: accounts[1]});

		assert.equal(uint256kSt5YM7, BigInt("10000000000000000"))
		await expect(KPLAYFdlxiwJ.transferFrom.call(addressEfwrp6x, addressQUgp8j6, uintThxc4sL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYIfOnoSg = await KPLAY.new({from: accounts[1]});
		const addressb5LECt = accounts[3]
		const uintJCXa8F0 = BigInt("1523")
		const uint9iGs1H = BigInt("1974")
		const addressQNQaOq = accounts[1]
		const uint256cR5U91f = await KPLAYIfOnoSg.lockCount.call(addressb5LECt, {from: accounts[5]});
//		await KPLAYIfOnoSg.renounceOwnership.call({from: accounts[3]});
//		const addressnhup7kt = await KPLAYIfOnoSg.lockAfter.call(addressQNQaOq, uint9iGs1H, uintJCXa8F0, {from: accounts[4]});

		assert.equal(uint256cR5U91f, BigInt("0"))
		await expect(KPLAYIfOnoSg.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYimKSiRk = await KPLAY.new({from: accounts[2]});
		const uintfdOOSW4 = BigInt("1357")
		const addressWaqWWmj = accounts[1]
		const uintxhSihcf = BigInt("652")
		const uintK1lhLBr = BigInt("1495")
		const addressGuelFuO = accounts[2]
//		const addressWXA6rwj = await KPLAYimKSiRk.unlock.call(addressWaqWWmj, uintfdOOSW4, {from: accounts[2]});
//		await KPLAYimKSiRk.whenNotFrozen.call({from: accounts[2]});
//		const boolYcebGuf = await KPLAYimKSiRk.transferWithLock.call(addressGuelFuO, uintK1lhLBr, uintxhSihcf, {from: accounts[2]});

		await expect(KPLAYimKSiRk.unlock.call(addressWaqWWmj, uintfdOOSW4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYIfOnoSg = await KPLAY.new({from: accounts[1]});
		const uintA1g714T = BigInt("1233")
		const addressfcKTPeX = accounts[5]
		const uintX46zOe = BigInt("1528")
		const uintlVrlOda = BigInt("1994")
		const addressD3wGKdM = accounts[1]
		const boolUS02swM = await KPLAYIfOnoSg.approve.call(addressfcKTPeX, uintA1g714T, {from: accounts[0]});
//		const addressnhup7kt = await KPLAYIfOnoSg.lockAfter.call(addressD3wGKdM, uintlVrlOda, uintX46zOe, {from: accounts[4]});

		assert.equal(boolUS02swM, true)
		await expect(KPLAYIfOnoSg.lockAfter.call(addressD3wGKdM, uintlVrlOda, uintX46zOe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYvVQMIMe = await KPLAY.new({from: accounts[3]});
		const uintVQJgQvF = BigInt("180")
		const uinthGHvnK9 = BigInt("132")
		const addressbZ9xxVW = accounts[5]
		const addressEQM2tbB = accounts[4]
		const addressHBiojp5 = accounts[3]
		const addressm4MrOW2 = accounts[1]
//		const addressKt26fXs = await KPLAYvVQMIMe.lock.call(addressbZ9xxVW, uinthGHvnK9, uintVQJgQvF, {from: accounts[3]});
//		const uint256KUVbnOq = await KPLAYvVQMIMe.allowance.call(addressHBiojp5, addressEQM2tbB, {from: accounts[2]});
//		const uint256mx1mhY8 = await KPLAYvVQMIMe.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256uWUYClp = await KPLAYvVQMIMe.lockCount.call(addressm4MrOW2, {from: accounts[1]});

		await expect(KPLAYvVQMIMe.lock.call(addressbZ9xxVW, uinthGHvnK9, uintVQJgQvF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYXHTy7NF = await KPLAY.new({from: accounts[1]});
		const uintb1tIzI9 = BigInt("1123")
		const addresslVc0rR = accounts[0]
		const addressOroylUm = accounts[4]
		const uintbZHa1eG = BigInt("809")
		const addressGVHbzYx = accounts[3]
		const address314oqQ = accounts[4]
		const uintUa47MQq = BigInt("1211")
		const addressqxfD2Qo = accounts[2]
		const uintJ7xIdrs = BigInt("1799")
		const uinteytiOzS = BigInt("1507")
		const addressfd0URwE = accounts[0]
		const uintCKdokHp = BigInt("32")
		const uintyIxRYX = BigInt("1460")
		const addressFc8WhSw = accounts[6]
//		const boolfRo0Xv6 = await KPLAYXHTy7NF.transfer.call(addresslVc0rR, uintb1tIzI9, {from: accounts[4]});
//		const uint256DuymajS = await KPLAYXHTy7NF.balanceOf.call(addressOroylUm, {from: accounts[3]});
//		const boolFc61KC = await KPLAYXHTy7NF.transferFrom.call(address314oqQ, addressGVHbzYx, uintbZHa1eG, {from: accounts[1]});
//		const boolw16sYDQ = await KPLAYXHTy7NF.increaseAllowance.call(addressqxfD2Qo, uintUa47MQq, {from: accounts[2]});
//		const boolFURf8ni = await KPLAYXHTy7NF.transferWithLock.call(addressfd0URwE, uinteytiOzS, uintJ7xIdrs, {from: accounts[0]});
//		const boolmJEBPdc = await KPLAYXHTy7NF.transferWithLockAfter.call(addressFc8WhSw, uintyIxRYX, uintCKdokHp, {from: accounts[0]});

		await expect(KPLAYXHTy7NF.transfer.call(addresslVc0rR, uintb1tIzI9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYVFbMkel = await KPLAY.new({from: accounts[1]});
		const uintOyHAuOU = BigInt("1218")
		const addresser196N0 = accounts[2]
		const uintq2NxS2D = BigInt("785")
		const addresshnOQPh2 = accounts[4]
		const addressZQrK7m = "0x0000000000000000000000000000000000000001"
//		await KPLAYVFbMkel.renounceOwnership.call({from: accounts[1]});
//		await KPLAYVFbMkel.lockState.call(addresser196N0, uintOyHAuOU, {from: accounts[2]});
//		await KPLAYVFbMkel.lockState.call(addresshnOQPh2, uintq2NxS2D, {from: accounts[5]});
//		const addresshBhzmzN = await KPLAYVFbMkel.unfreeze.call(addressZQrK7m, {from: accounts[0]});

		await expect(KPLAYVFbMkel.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYimKSiRk = await KPLAY.new({from: accounts[2]});
		const uintXErUA6u = BigInt("652")
		const uintxoTRMwf = BigInt("1495")
		const addressN6F8Qdh = accounts[2]
		const boolYcebGuf = await KPLAYimKSiRk.transferWithLock.call(addressN6F8Qdh, uintxoTRMwf, uintXErUA6u, {from: accounts[2]});

		assert.equal(boolYcebGuf, true)
	});

	it('test for KPLAY', async () => {
		const KPLAYFdlxiwJ = await KPLAY.new({from: accounts[0]});
		const addressH4Ei19D = accounts[1]
		const uintrbMlm4h = BigInt("1399")
		const uintHMSUT43 = BigInt("982")
		const addresssqg9KLU = accounts[2]
		const uintnpp2B55 = BigInt("25")
		const addressa1BV3Oe = accounts[4]
		const uintwSesavg = BigInt("171")
		const uintPCAIRtu = BigInt("758")
		const addresspTuLZ2r = accounts[5]
		const addressOYrT1Q = "0x0000000000000000000000000000000000000001"
		const uintdKoldgB = BigInt("977")
		const uintaHTZOt5 = BigInt("1614")
		const addressJoynaPZ = accounts[2]
		const uintdYg0muJ = BigInt("1973")
		const uintSmkYvEy = BigInt("1440")
		const addressvhJwoGn = accounts[0]
		const uint256kSt5YM7 = await KPLAYFdlxiwJ.balanceOf.call(addressH4Ei19D, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZFo6kPv = await KPLAYFdlxiwJ.currentTime.call({from: accounts[5]});
//		const boolytBSbkq = await KPLAYFdlxiwJ.transferWithLock.call(addresssqg9KLU, uintHMSUT43, uintrbMlm4h, {from: accounts[1]});
//		await KPLAYFdlxiwJ.whenNotPaused.call({from: accounts[5]});
//		const boolKEvDLu = await KPLAYFdlxiwJ.increaseAllowance.call(addressa1BV3Oe, uintnpp2B55, {from: accounts[1]});
//		const addressBL7Dq3A = await KPLAYFdlxiwJ.lockAfter.call(addresspTuLZ2r, uintPCAIRtu, uintwSesavg, {from: accounts[4]});
//		const boolAic290y = await KPLAYFdlxiwJ.isFrozen.call(addressOYrT1Q, {from: accounts[3]});
//		const boolTxQ31NF = await KPLAYFdlxiwJ.transferWithLockAfter.call(addressJoynaPZ, uintaHTZOt5, uintdKoldgB, {from: accounts[0]});
//		await KPLAYFdlxiwJ.pause.call({from: accounts[3]});
//		const boolSlAQKVv = await KPLAYFdlxiwJ.transferWithLock.call(addressvhJwoGn, uintSmkYvEy, uintdYg0muJ, {from: accounts[1]});

		assert.equal(uint256ZFo6kPv, BigInt("1630227798"))
		assert.equal(uint256kSt5YM7, BigInt("0"))
		await expect(KPLAYFdlxiwJ.transferWithLock.call(addresssqg9KLU, uintHMSUT43, uintrbMlm4h, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYqONyrjp = await KPLAY.new({from: accounts[3]});
		const addressyi4Z9aX = "0x0000000000000000000000000000000000000001"
		const uintSmJnl1U = BigInt("1722")
		const addressLQCAmNK = accounts[3]
		const addressqXlc2Rz = accounts[3]
		const addressqlFuuQf = await KPLAYqONyrjp.freeze.call(addressyi4Z9aX, {from: accounts[3]});
		const uint256ySdolPG = await KPLAYqONyrjp.currentTime.call({from: accounts[4]});
//		const boolIvZvITa = await KPLAYqONyrjp.transferFrom.call(addressqXlc2Rz, addressLQCAmNK, uintSmJnl1U, {from: accounts[2]});

		assert.equal(uint256ySdolPG, BigInt("1630227819"))
		await expect(KPLAYqONyrjp.transferFrom.call(addressqXlc2Rz, addressLQCAmNK, uintSmJnl1U, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYqONyrjp = await KPLAY.new({from: accounts[3]});
		const uintvWPYmKg = BigInt("820")
		const uintcvlT2Az = BigInt("763")
		const addresshih1ffN = accounts[1]
		const uintOzcfz5W = BigInt("1722")
		const addressl06lE8W = accounts[3]
		const addressTseslV = accounts[3]
//		const addressODCfoS4 = await KPLAYqONyrjp.lockAfter.call(addresshih1ffN, uintcvlT2Az, uintvWPYmKg, {from: accounts[3]});
//		const boolIvZvITa = await KPLAYqONyrjp.transferFrom.call(addressTseslV, addressl06lE8W, uintOzcfz5W, {from: accounts[2]});

		await expect(KPLAYqONyrjp.lockAfter.call(addresshih1ffN, uintcvlT2Az, uintvWPYmKg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYimKSiRk = await KPLAY.new({from: accounts[2]});
		const uintqjP8ctg = BigInt("125")
		const addressQmfxlmr = accounts[3]
		const uintGn1lowY = BigInt("1357")
		const addressBy2K0xt = accounts[1]
		const boolfRZiFCx = await KPLAYimKSiRk.mint.call(addressQmfxlmr, uintqjP8ctg, {from: accounts[2]});
//		const addressWXA6rwj = await KPLAYimKSiRk.unlock.call(addressBy2K0xt, uintGn1lowY, {from: accounts[2]});
//		await KPLAYimKSiRk.whenNotFrozen.call({from: accounts[2]});

		assert.equal(boolfRZiFCx, true)
		await expect(KPLAYimKSiRk.unlock.call(addressBy2K0xt, uintGn1lowY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYpfxf2E9 = await KPLAY.new({from: accounts[2]});
		const uintMcJ1k8L = BigInt("149")
		const addressCauvKmk = accounts[3]
//		await KPLAYpfxf2E9.pause.call({from: accounts[2]});
		await KPLAYpfxf2E9.pause.call({from: accounts[2]});
//		const boolqgkhro = await KPLAYpfxf2E9.increaseAllowance.call(addressCauvKmk, uintMcJ1k8L, {from: accounts[2]});

		await expect(KPLAYpfxf2E9.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYimKSiRk = await KPLAY.new({from: accounts[2]});
		const uintLBCAdxu = BigInt("915")
		const uintpyVrqO6 = BigInt("1093")
		const addressjy3vPqg = accounts[0]
		const uinteMzFB7p = BigInt("1357")
		const addressDWHHjTI = accounts[3]
		const boolaETE9ja = await KPLAYimKSiRk.transferWithLockAfter.call(addressjy3vPqg, uintpyVrqO6, uintLBCAdxu, {from: accounts[2]});
//		const addressWXA6rwj = await KPLAYimKSiRk.unlock.call(addressDWHHjTI, uinteMzFB7p, {from: accounts[2]});

		assert.equal(boolaETE9ja, true)
		await expect(KPLAYimKSiRk.unlock.call(addressDWHHjTI, uinteMzFB7p, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYimKSiRk = await KPLAY.new({from: accounts[2]});
		const addressW3e91fv = accounts[0]
		const addressXoqUcGP = accounts[3]
		const uintQAreK20 = BigInt("1382")
		const addressBDofyCq = accounts[2]
		const uint256jBHIQ7w = await KPLAYimKSiRk.lockCount.call(addressW3e91fv, {from: accounts[4]});
		const addressSafr7Go = await KPLAYimKSiRk.unfreeze.call(addressXoqUcGP, {from: accounts[2]});
//		const addressWXA6rwj = await KPLAYimKSiRk.unlock.call(addressBDofyCq, uintQAreK20, {from: accounts[2]});

		assert.equal(uint256jBHIQ7w, BigInt("0"))
		await expect(KPLAYimKSiRk.unlock.call(addressBDofyCq, uintQAreK20, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYqONyrjp = await KPLAY.new({from: accounts[3]});
		const addressRooFOCS = accounts[6]
		const uintcoDv6S = BigInt("622")
		const addresscVXhael = accounts[4]
		const addressU1Miyll = accounts[5]
		const uint256WBJ3bKI = await KPLAYqONyrjp.balanceOf.call(addressRooFOCS, {from: accounts[5]});
		const uint256ENHJWoF = await KPLAYqONyrjp.totalSupply.call({from: accounts[2]});
//		const boolnpLxQax = await KPLAYqONyrjp.transfer.call(addresscVXhael, uintcoDv6S, {from: accounts[0]});
//		const addresstvwmZo = await KPLAYqONyrjp.transferOwnership.call(addressU1Miyll, {from: accounts[0]});

		assert.equal(uint256ENHJWoF, BigInt("10000000000000000"))
		assert.equal(uint256WBJ3bKI, BigInt("0"))
		await expect(KPLAYqONyrjp.transfer.call(addresscVXhael, uintcoDv6S, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYWOdDFG = await KPLAY.new({from: accounts[1]});
		const uintfADRlxK = BigInt("20")
		const addressJ5wMtFi = accounts[0]
		const uintfVU0w04 = BigInt("1897")
		const addressUlEw05e = accounts[4]
		const uintUOCPpHm = BigInt("2044")
		const addressgKR6xX = accounts[0]
		const uintxLS6hZ = BigInt("1439")
		const addressmeeGRo = accounts[0]
//		await KPLAYWOdDFG.unpause.call({from: accounts[1]});
//		const addressqDdlhQG = await KPLAYWOdDFG.burn.call(addressJ5wMtFi, uintfADRlxK, {from: accounts[2]});
//		const boolYlt8wEk = await KPLAYWOdDFG.increaseAllowance.call(addressUlEw05e, uintfVU0w04, {from: accounts[2]});
//		const booleV3d0KA = await KPLAYWOdDFG.transfer.call(addressgKR6xX, uintUOCPpHm, {from: accounts[0]});
//		await KPLAYWOdDFG.lockState.call(addressmeeGRo, uintxLS6hZ, {from: accounts[1]});

		await expect(KPLAYWOdDFG.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYimKSiRk = await KPLAY.new({from: accounts[2]});
		const addressfO5Im5j = accounts[2]
		const uintWu1ztRv = BigInt("78")
		const addressu0ZbhD7 = accounts[2]
		const uintSUbVHl = BigInt("565")
		const addressVopiPcp = "0x0000000000000000000000000000000000000000"
		const addressepH1VTW = "0x0000000000000000000000000000000000000001"
		const uintElwvHKT = BigInt("763")
		const addressQtzXaD = accounts[4]
		const uintFE1ZtUr = BigInt("1915")
		const addressalMFQjq = accounts[3]
		const uintfxozZvM = BigInt("44")
		const addressRNZ8eDR = accounts[0]
		const uint256N2rgCBB = await KPLAYimKSiRk.balanceOf.call(addressfO5Im5j, {from: accounts[4]});
		const boolAqjp0w4 = await KPLAYimKSiRk.increaseAllowance.call(addressu0ZbhD7, uintWu1ztRv, {from: accounts[2]});
//		const boolRyxENdX = await KPLAYimKSiRk.transferFrom.call(addressepH1VTW, addressVopiPcp, uintSUbVHl, {from: accounts[5]});
//		const boolEJFVQlG = await KPLAYimKSiRk.mint.call(addressQtzXaD, uintElwvHKT, {from: accounts[2]});
//		const addressWXA6rwj = await KPLAYimKSiRk.unlock.call(addressalMFQjq, uintFE1ZtUr, {from: accounts[2]});
//		await KPLAYimKSiRk.lockState.call(addressRNZ8eDR, uintfxozZvM, {from: accounts[0]});

		assert.equal(boolAqjp0w4, true)
		assert.equal(uint256N2rgCBB, BigInt("10000000000000000"))
		await expect(KPLAYimKSiRk.transferFrom.call(addressepH1VTW, addressVopiPcp, uintSUbVHl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYqONyrjp = await KPLAY.new({from: accounts[3]});
		const addressbj4kHHu = accounts[3]
		const addressUV7W5i8 = accounts[6]
		const addressrqatKoW = await KPLAYqONyrjp.transferOwnership.call(addressbj4kHHu, {from: accounts[3]});
		const uint256WBJ3bKI = await KPLAYqONyrjp.balanceOf.call(addressUV7W5i8, {from: accounts[5]});

		assert.equal(uint256WBJ3bKI, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYgBNBVoj = await KPLAY.new({from: accounts[1]});
		const uintn2HsP1B = BigInt("1043")
		const addressJEdqBZI = accounts[4]
		const uintAd2mC0 = BigInt("1886")
		const uintnGyjeHY = BigInt("1001")
		const addressWBNsP0 = accounts[0]
		const uintAm7zCp = BigInt("1334")
		const addressHS4z8Cm = accounts[2]
		const addressbk9tHIw = accounts[2]
		const addressmSwJqo = accounts[2]
//		const addressrNcrAcd = await KPLAYgBNBVoj.burn.call(addressJEdqBZI, uintn2HsP1B, {from: accounts[1]});
//		const booleBlREaG = await KPLAYgBNBVoj.transferWithLock.call(addressWBNsP0, uintnGyjeHY, uintAd2mC0, {from: accounts[3]});
//		const boolt7OuMnj = await KPLAYgBNBVoj.increaseAllowance.call(addressHS4z8Cm, uintAm7zCp, {from: accounts[4]});
//		const uint256XzH1mTB = await KPLAYgBNBVoj.balanceOf.call(addressbk9tHIw, {from: accounts[5]});
//		const uint256br7gw4L = await KPLAYgBNBVoj.balanceOf.call(addressmSwJqo, {from: accounts[2]});

		await expect(KPLAYgBNBVoj.burn.call(addressJEdqBZI, uintn2HsP1B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})