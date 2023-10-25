const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const Revive3TqMAV = await Revive.new({from: accounts[3]});
		const uintKXt6g7S = BigInt("1967")
		const uintg9ikpoH = BigInt("336")
		const byte5Ms3wa = "0x070302001c1a021d07181a1316091c011812131c071a060417121c02050b0b19"
		const uintvPOE06r = BigInt("1807")
		const addressMLZuwhi = accounts[3]
		const uintolvxEsS = BigInt("1447")
		const addressKxq8ClP = accounts[5]
		const boolNuelohY = await Revive3TqMAV.lock.call(byte5Ms3wa, uintg9ikpoH, uintKXt6g7S, {from: accounts[1]});
		const addressYDXcr3z = await Revive3TqMAV.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const addresswdCLX16 = await Revive3TqMAV.recoverERC20.call(addressMLZuwhi, uintvPOE06r, {from: accounts[4]});
		const addressE6LcK43 = await Revive3TqMAV.recoverERC20.call(addressKxq8ClP, uintolvxEsS, {from: accounts[2]});

		await expect(Revive3TqMAV.lock.call(byte5Ms3wa, uintg9ikpoH, uintKXt6g7S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWmlZFYF = await Revive.new({from: accounts[4]});
		const uintg2oGYX = BigInt("329")
		const addressnIWWOn = accounts[4]
		const uintGIRs0bh = BigInt("1848")
		const bytecjsyIWI = "0x1218150f1d09070a07161a0f16050f20050d0c1f05001504020f01201306051e"
		const booleHSMf7r = await ReviveWmlZFYF.approve.call(addressnIWWOn, uintg2oGYX, {from: accounts[3]});
		const boolnuSaDT6 = await ReviveWmlZFYF.increaseLockAmount.call(bytecjsyIWI, uintGIRs0bh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booleHSMf7r, true)
		await expect(ReviveWmlZFYF.increaseLockAmount.call(bytecjsyIWI, uintGIRs0bh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefavuDq1 = await Revive.new({from: accounts[3]});
		await RevivefavuDq1.onlyOwner.call({from: accounts[4]});
		const addressFCJw0st = await RevivefavuDq1.owner.call({from: accounts[2]});

		await expect(RevivefavuDq1.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNDOS5V = await Revive.new({from: accounts[2]});
		const uintujPsLmc = BigInt("1522")
		const bytees8ao3T = "0x121f0e11160618011a050404011b1609060e0b160d110a161214191a101b0802"
		const addressXxHD3fe = accounts[2]
		const addressAmXna08 = accounts[2]
		const addressOnn95ym = accounts[2]
		const uintQkv1Y8 = BigInt("942")
		const addressbKZ8JKS = accounts[0]
		const addressYst9r7V = accounts[5]
		const addressIMB2PlS = accounts[3]
		const uint256Wcd8378 = await ReviveNDOS5V.tokensLockedAtTime.call(addressXxHD3fe, bytees8ao3T, uintujPsLmc, {from: accounts[1]});
		const addresssyBUbJ2 = await ReviveNDOS5V.owner.call({from: accounts[3]});
		const uint256tpaXy0X = await ReviveNDOS5V.unlock.call(addressAmXna08, {from: accounts[3]});
		const uint256qdyPdXV = await ReviveNDOS5V.totalBalanceOf.call(addressOnn95ym, {from: accounts[0]});
		const boolUwSyuda = await ReviveNDOS5V.approve.call(addressbKZ8JKS, uintQkv1Y8, {from: accounts[0]});
		const uint256dI6rxmH = await ReviveNDOS5V.allowance.call(addressIMB2PlS, addressYst9r7V, {from: accounts[2]});

		assert.equal(addresssyBUbJ2, 0xe0dCC8Be865153f6c9D668FE98b7BDaA329bf16d)
		assert.equal(boolUwSyuda, true)
		assert.equal(uint256Wcd8378, BigInt("0"))
		assert.equal(uint256dI6rxmH, BigInt("0"))
		assert.equal(uint256qdyPdXV, BigInt("3000000000000000000000000000"))
		assert.equal(uint256tpaXy0X, BigInt("0"))
	});

	it('test for Revive', async () => {
		const Revivei5TB55e = await Revive.new({from: accounts[1]});
		const addressSQ6qNE = accounts[1]
		const addressL7xmsJO = accounts[1]
		const addressIYA0WU = await Revivei5TB55e.owner.call({from: accounts[2]});
		const addressdC7DT2Y = await Revivei5TB55e.transferOwnership.call(addressSQ6qNE, {from: accounts[1]});
		const uint256Xx8km2X = await Revivei5TB55e.unlock.call(addressL7xmsJO, {from: accounts[2]});

		assert.equal(addressIYA0WU, 0xAcb4a6957E501F4A534090695dAA46F6d2216Bee)
		assert.equal(uint256Xx8km2X, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveD78FRzW = await Revive.new({from: accounts[4]});
		const byteUggXSIm = "0x0f0c150f2010041f0a1a000f061a171f15161d150f19130e041117010d061902"
		const addressyKQZdwv = accounts[1]
		const uintrD2rj5z = BigInt("523")
		const uintKVnfebW = BigInt("1332")
		const bytehUOzr3U = "0x060620071e081d120c08111a08190d1c1f0a180b1f05020c19141e0b1f080205"
		const uintTfKIUpm = BigInt("1016")
		const addressc22Dm1U = accounts[4]
		const uint256BaGd9d8 = await ReviveD78FRzW.tokensUnlockable.call(addressyKQZdwv, byteUggXSIm, {from: "0x0000000000000000000000000000000000000001"});
		const boollZlngjM = await ReviveD78FRzW.lock.call(bytehUOzr3U, uintKVnfebW, uintrD2rj5z, {from: accounts[4]});
		const addressZg6rho = await ReviveD78FRzW.recoverERC20.call(addressc22Dm1U, uintTfKIUpm, {from: accounts[5]});
		const boolhfATQ7H = await ReviveD78FRzW.isOwner.call({from: accounts[4]});

		assert.equal(boollZlngjM, true)
		assert.equal(uint256BaGd9d8, BigInt("0"))
		await expect(ReviveD78FRzW.recoverERC20.call(addressc22Dm1U, uintTfKIUpm, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNDOS5V = await Revive.new({from: accounts[2]});
		const uintd3kdMgc = BigInt("1522")
		const byteZfZuACx = "0x121f0e11160618011a050404011b1609060e0b160d110a161214191a101b0802"
		const addressFl0RqxN = accounts[2]
		const addressbA2CwvR = accounts[3]
		const uintyRA4puC = BigInt("1195")
		const byteg81VXVy = "0x1c0015111e1e1317151e0b0d091c0106111f0f02110409050f111005081c061d"
		const addressu0Bqh0n = accounts[2]
		const uintGf5Z1c = BigInt("942")
		const addressODGWRw2 = accounts[0]
		const addresss17cy0 = accounts[5]
		const addressqnXY3IE = accounts[3]
		const uint256Wcd8378 = await ReviveNDOS5V.tokensLockedAtTime.call(addressFl0RqxN, byteZfZuACx, uintd3kdMgc, {from: accounts[1]});
		const addresssyBUbJ2 = await ReviveNDOS5V.owner.call({from: accounts[3]});
		const uint256tpaXy0X = await ReviveNDOS5V.unlock.call(addressbA2CwvR, {from: accounts[3]});
		const boolRgelWrG = await ReviveNDOS5V.extendLock.call(byteg81VXVy, uintyRA4puC, {from: accounts[2]});
		const uint256qdyPdXV = await ReviveNDOS5V.totalBalanceOf.call(addressu0Bqh0n, {from: accounts[0]});
		const boolUwSyuda = await ReviveNDOS5V.approve.call(addressODGWRw2, uintGf5Z1c, {from: accounts[0]});
		const uint256dI6rxmH = await ReviveNDOS5V.allowance.call(addressqnXY3IE, addresss17cy0, {from: accounts[2]});

		assert.equal(addresssyBUbJ2, 0xe0dCC8Be865153f6c9D668FE98b7BDaA329bf16d)
		assert.equal(uint256Wcd8378, BigInt("0"))
		assert.equal(uint256tpaXy0X, BigInt("0"))
		await expect(ReviveNDOS5V.extendLock.call(byteg81VXVy, uintyRA4puC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveunvLICw = await Revive.new({from: accounts[3]});
		const uintF9msiR = BigInt("991")
		const byteKUGRgst = "0x041601101a0612021b1e2012200e1913160102111e0b06031e130c1a1e0f041b"
		const addressO31A1o = accounts[0]
		const addressj8dZXOe = accounts[4]
		const uintqGl1UnZ = BigInt("1715")
		const bytel4W626 = "0x1c121707110c0317081802191a1a1505161410021d1f0d141416200d011c1a17"
		const bytefagUiF5 = "0x1a0700020408131411101406041117090f11110f14020c0d1a160a02181f1b10"
		const addressBCE0zZe = accounts[1]
		const uintiJgyh3P = BigInt("1571")
		const addresss205FrI = accounts[5]
		const uint256wmg3T2 = await ReviveunvLICw.tokensLockedAtTime.call(addressO31A1o, byteKUGRgst, uintF9msiR, {from: accounts[4]});
		const uint256hea9tlA = await ReviveunvLICw.getUnlockableTokens.call(addressj8dZXOe, {from: accounts[3]});
		const boolsZeN78m = await ReviveunvLICw.increaseLockAmount.call(bytel4W626, uintqGl1UnZ, {from: accounts[4]});
		const uint256TmPSSxt = await ReviveunvLICw.tokensUnlockable.call(addressBCE0zZe, bytefagUiF5, {from: accounts[4]});
		const boolOip9HhK = await ReviveunvLICw.decreaseAllowance.call(addresss205FrI, uintiJgyh3P, {from: accounts[1]});

		assert.equal(uint256hea9tlA, BigInt("0"))
		assert.equal(uint256wmg3T2, BigInt("0"))
		await expect(ReviveunvLICw.increaseLockAmount.call(bytel4W626, uintqGl1UnZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveunvLICw = await Revive.new({from: accounts[3]});
		const uintmQnWft4 = BigInt("991")
		const byteQYoc3Jo = "0x041601101a0612021b1e2012200e1913160102111e0b06031e130c1a1e0f041b"
		const addressZdvhR95 = accounts[0]
		const bytejtzMSLz = "0x130d0c0b121c1f1c0f0b17030f0e1d1d011f181b130c0e0509161e1c14021a18"
		const addressBKZz5Tz = accounts[1]
		const uintU3kRSIV = BigInt("1549")
		const addresswLiaOJk = accounts[5]
		const addressuvSbpaT = accounts[0]
		const uint256wmg3T2 = await ReviveunvLICw.tokensLockedAtTime.call(addressZdvhR95, byteQYoc3Jo, uintmQnWft4, {from: accounts[4]});
		const uint256TmPSSxt = await ReviveunvLICw.tokensUnlockable.call(addressBKZz5Tz, bytejtzMSLz, {from: accounts[4]});
		const boolOip9HhK = await ReviveunvLICw.decreaseAllowance.call(addresswLiaOJk, uintU3kRSIV, {from: accounts[1]});
		const uint256ekv6utA = await ReviveunvLICw.totalBalanceOf.call(addressuvSbpaT, {from: accounts[4]});

		assert.equal(uint256TmPSSxt, BigInt("0"))
		assert.equal(uint256wmg3T2, BigInt("0"))
		await expect(ReviveunvLICw.decreaseAllowance.call(addresswLiaOJk, uintU3kRSIV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveunvLICw = await Revive.new({from: accounts[3]});
		const addressu2GHdm4 = accounts[2]
		const uintinfi0x = BigInt("991")
		const byteO0DHQVM = "0x041601101a0612021b1e2012200e1913160102111e0b06031e130c1a1e0f041b"
		const addressaoUcXLn = accounts[0]
		const addressRQAkYGc = accounts[4]
		const uintnEmIE1P = BigInt("1715")
		const bytex8GJwxz = "0x1c121707110c03170818fffffffd191a1a1505161410021d1f0d141416200d011c1a17"
		const uintSSpXEEp = BigInt("654")
		const addressok9Z3tc = "0x0000000000000000000000000000000000000001"
		const bytemyUqVil = "0x1a0700020408131411101406041117090f11110f14020c0d1a160a02181f1b10"
		const addressNaDiVhu = accounts[1]
		const uintLGVuZs0 = BigInt("1571")
		const addresslklqmSx = accounts[5]
		const uint256DKxDaQ = await ReviveunvLICw.balanceOf.call(addressu2GHdm4, {from: accounts[5]});
		const uint256wmg3T2 = await ReviveunvLICw.tokensLockedAtTime.call(addressaoUcXLn, byteO0DHQVM, uintinfi0x, {from: accounts[4]});
		const uint256hea9tlA = await ReviveunvLICw.getUnlockableTokens.call(addressRQAkYGc, {from: accounts[3]});
		const boolsZeN78m = await ReviveunvLICw.increaseLockAmount.call(bytex8GJwxz, uintnEmIE1P, {from: accounts[4]});
		const boola8bOJAm = await ReviveunvLICw.increaseAllowance.call(addressok9Z3tc, uintSSpXEEp, {from: accounts[0]});
		const uint256TmPSSxt = await ReviveunvLICw.tokensUnlockable.call(addressNaDiVhu, bytemyUqVil, {from: accounts[4]});
		const boolOip9HhK = await ReviveunvLICw.decreaseAllowance.call(addresslklqmSx, uintLGVuZs0, {from: accounts[1]});

		assert.equal(uint256DKxDaQ, BigInt("0"))
		assert.equal(uint256hea9tlA, BigInt("0"))
		assert.equal(uint256wmg3T2, BigInt("0"))
		await expect(ReviveunvLICw.increaseLockAmount.call(bytex8GJwxz, uintnEmIE1P, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveHZBLOzA = await Revive.new({from: accounts[3]});
		const uintYuWVKR7 = BigInt("1669")
		const uinteQSP4Dx = BigInt("1404")
		const addresseKaUwjV = accounts[2]
		const uintKZWuxA9 = BigInt("17")
		const addresswRAdmg7 = accounts[4]
		const booliXY8wj = await ReviveHZBLOzA.isOwner.call({from: accounts[1]});
		const uint256yUo0xNu = await ReviveHZBLOzA.recoverERC20.call(uintYuWVKR7, {from: accounts[5]});
		const boolmMtu3VQ = await ReviveHZBLOzA.increaseAllowance.call(addresseKaUwjV, uinteQSP4Dx, {from: accounts[5]});
		const addressXbGVmW = await ReviveHZBLOzA.recoverERC20.call(addresswRAdmg7, uintKZWuxA9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booliXY8wj, false)
		await expect(ReviveHZBLOzA.recoverERC20.call(uintYuWVKR7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNDOS5V = await Revive.new({from: accounts[2]});
		const uintdRVGLuR = BigInt("1522")
		const byteFulV9eT = "0x121f0e11160618011a050404011b1609060e0b160d110a161214191a101b0802"
		const addressbHhykOs = accounts[2]
		const addressRuiKnPi = accounts[3]
		const addresswgykYPF = accounts[2]
		const uint2LWuvy = BigInt("942")
		const addresst2hhDwA = accounts[0]
		const uinthKvmPV5 = BigInt("1418")
		const addressy7tre0z = accounts[3]
		const addressSuweRE = accounts[5]
		const addressWeDNYDH = accounts[3]
		const uint256Wcd8378 = await ReviveNDOS5V.tokensLockedAtTime.call(addressbHhykOs, byteFulV9eT, uintdRVGLuR, {from: accounts[1]});
		const addresssyBUbJ2 = await ReviveNDOS5V.owner.call({from: accounts[3]});
		const uint256tpaXy0X = await ReviveNDOS5V.unlock.call(addressRuiKnPi, {from: accounts[3]});
		const uint256qdyPdXV = await ReviveNDOS5V.totalBalanceOf.call(addresswgykYPF, {from: accounts[0]});
		const boolUwSyuda = await ReviveNDOS5V.approve.call(addresst2hhDwA, uint2LWuvy, {from: accounts[0]});
		const boolU0NlMqW = await ReviveNDOS5V.increaseAllowance.call(addressy7tre0z, uinthKvmPV5, {from: accounts[2]});
		const uint256dI6rxmH = await ReviveNDOS5V.allowance.call(addressWeDNYDH, addressSuweRE, {from: accounts[2]});

		assert.equal(addresssyBUbJ2, 0xe0dCC8Be865153f6c9D668FE98b7BDaA329bf16d)
		assert.equal(boolU0NlMqW, true)
		assert.equal(boolUwSyuda, true)
		assert.equal(uint256Wcd8378, BigInt("0"))
		assert.equal(uint256dI6rxmH, BigInt("0"))
		assert.equal(uint256qdyPdXV, BigInt("3000000000000000000000000000"))
		assert.equal(uint256tpaXy0X, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivejYHqfsN = await Revive.new({from: accounts[2]});
		const uintZ1g7lsK = BigInt("673")
		const addressTuozhqa = accounts[1]
		const addressVdQ3QJ9 = accounts[1]
		const uint256DdLk2Nf = await RevivejYHqfsN.totalSupply.call({from: accounts[0]});
		const boolJCpGEJ = await RevivejYHqfsN.transferFrom.call(addressVdQ3QJ9, addressTuozhqa, uintZ1g7lsK, {from: accounts[0]});

		assert.equal(uint256DdLk2Nf, BigInt("3000000000000000000000000000"))
		await expect(RevivejYHqfsN.transferFrom.call(addressVdQ3QJ9, addressTuozhqa, uintZ1g7lsK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNDOS5V = await Revive.new({from: accounts[2]});
		const uintyDiOcYn = BigInt("1522")
		const bytebeRvLRy = "0x121f0e11160618011a050404011b1609060e0b160d110a161214191a101b0802"
		const addressuwcdCOK = accounts[2]
		const uintIKq8dTa = BigInt("95")
		const uinty8ipnCy = BigInt("1652")
		const bytetwqJa1 = "0x090418090108071a1d171d1b1a10101d130817150e1b151c0704160111130a04"
		const addressYQl58ci = accounts[3]
		const addressiJ66vI = accounts[3]
		const uintxE4O5pl = BigInt("1195")
		const byteAUTZLR4 = "0x1c0015111e1e1317151e0b0d091c0106111f0f02110409050f111005081c061d"
		const addressZyMJHRE = accounts[2]
		const addresskFifJcb = accounts[5]
		const uintNje1PR = BigInt("942")
		const addressUr0yEK4 = accounts[0]
		const addressnPpMA7T = accounts[5]
		const addressmbawIos = accounts[3]
		const uint256Wcd8378 = await ReviveNDOS5V.tokensLockedAtTime.call(addressuwcdCOK, bytebeRvLRy, uintyDiOcYn, {from: accounts[1]});
		const addresssyBUbJ2 = await ReviveNDOS5V.owner.call({from: accounts[3]});
		const boolQnAdvXQ = await ReviveNDOS5V.transferWithLock.call(addressYQl58ci, bytetwqJa1, uinty8ipnCy, uintIKq8dTa, {from: accounts[1]});
		const uint256tpaXy0X = await ReviveNDOS5V.unlock.call(addressiJ66vI, {from: accounts[3]});
		const boolRgelWrG = await ReviveNDOS5V.extendLock.call(byteAUTZLR4, uintxE4O5pl, {from: accounts[2]});
		const uint256qdyPdXV = await ReviveNDOS5V.totalBalanceOf.call(addressZyMJHRE, {from: accounts[0]});
		const address2Wi9eX = await ReviveNDOS5V.transferOwnership.call(addresskFifJcb, {from: accounts[4]});
		const boolUwSyuda = await ReviveNDOS5V.approve.call(addressUr0yEK4, uintNje1PR, {from: accounts[0]});
		const uint256dI6rxmH = await ReviveNDOS5V.allowance.call(addressmbawIos, addressnPpMA7T, {from: accounts[2]});

		assert.equal(addresssyBUbJ2, 0xe0dCC8Be865153f6c9D668FE98b7BDaA329bf16d)
		assert.equal(uint256Wcd8378, BigInt("0"))
		await expect(ReviveNDOS5V.transferWithLock.call(addressYQl58ci, bytetwqJa1, uinty8ipnCy, uintIKq8dTa, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveutxKI5w = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const addresszDipVlL = accounts[3]
		const addressCnPEnDK = accounts[0]
		const addressCaa9gSC = accounts[1]
		const addressdHJLA5y = accounts[2]
		const addressk3XIm23 = accounts[5]
		const uint256DCD67nS = await ReviveutxKI5w.balanceOf.call(addresszDipVlL, {from: accounts[0]});
		const addressDAgjiD0 = await ReviveutxKI5w.transferOwnership.call(addressCnPEnDK, {from: accounts[2]});
		const uint256eqnpaKm = await ReviveutxKI5w.totalBalanceOf.call(addressCaa9gSC, {from: accounts[1]});
		const uint256jhQ6xyw = await ReviveutxKI5w.getUnlockableTokens.call(addressdHJLA5y, {from: accounts[3]});
		const addressbWTKi6M = await ReviveutxKI5w.transferOwnership.call(addressk3XIm23, {from: accounts[2]});
	});

	it('test for Revive', async () => {
		const ReviveNDOS5V = await Revive.new({from: accounts[2]});
		const uintkkXCNzT = BigInt("1522")
		const byteM8qazz = "0x121f0e11160618011a050404011b1609060e0b160d110a161214191a101b0802"
		const addressvUfuZRx = accounts[3]
		const addressLUdhg8K = accounts[2]
		const uintSXptcNp = BigInt("942")
		const addressNoI4gY4 = accounts[0]
		const uint256Wcd8378 = await ReviveNDOS5V.tokensLockedAtTime.call(addressvUfuZRx, byteM8qazz, uintkkXCNzT, {from: accounts[1]});
		const uint256qdyPdXV = await ReviveNDOS5V.totalBalanceOf.call(addressLUdhg8K, {from: accounts[0]});
		await ReviveNDOS5V.renounceOwnership.call({from: accounts[2]});
		const boolUwSyuda = await ReviveNDOS5V.approve.call(addressNoI4gY4, uintSXptcNp, {from: accounts[0]});

		assert.equal(uint256Wcd8378, BigInt("0"))
		assert.equal(uint256qdyPdXV, BigInt("3000000000000000000000000000"))
		await expect(ReviveNDOS5V.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivevmFYGcu = await Revive.new({from: accounts[2]});
		const uintdNeKso = BigInt("618")
		const addressmnMdnx0 = accounts[0]
		const uintmQSed2j = BigInt("1183")
		const addressCJMARY = accounts[4]
		const addressRo8dEpU = await RevivevmFYGcu.recoverERC20.call(addressmnMdnx0, uintdNeKso, {from: accounts[2]});
		const addressgMQQ6e8 = await RevivevmFYGcu.recoverERC20.call(addressCJMARY, uintmQSed2j, {from: accounts[3]});

		await expect(RevivevmFYGcu.recoverERC20.call(addressmnMdnx0, uintdNeKso, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivei5TB55e = await Revive.new({from: accounts[1]});
		const addressRMwoJIW = "0x0000000000000000000000000000000000000001"
		const uintjknftdv = BigInt("431")
		const addressSacjxK = accounts[0]
		const uintfbBegrI = BigInt("642")
		const uint256a4nPbI4 = await Revivei5TB55e.getUnlockableTokens.call(addressRMwoJIW, {from: accounts[2]});
		const boolgX8AJFX = await Revivei5TB55e.approve.call(addressSacjxK, uintjknftdv, {from: accounts[2]});
		const uint256bOzxCTf = await Revivei5TB55e.recoverERC20.call(uintfbBegrI, {from: accounts[0]});

		assert.equal(boolgX8AJFX, true)
		assert.equal(uint256a4nPbI4, BigInt("0"))
		await expect(Revivei5TB55e.recoverERC20.call(uintfbBegrI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveunvLICw = await Revive.new({from: accounts[3]});
		const uinthrQeny4 = BigInt("995")
		const bytej8gX1aB = "0x041601101a0612021b1e2012200e1913160102111e0b06031e130c1a1e0f041b"
		const addressMbUUsPV = accounts[0]
		const uintKuRtI4o = BigInt("1142")
		const uint256wmg3T2 = await ReviveunvLICw.tokensLockedAtTime.call(addressMbUUsPV, bytej8gX1aB, uinthrQeny4, {from: accounts[4]});
		const uint256cmtoOju = await ReviveunvLICw.recoverERC20.call(uintKuRtI4o, {from: accounts[0]});

		assert.equal(uint256wmg3T2, BigInt("0"))
		await expect(ReviveunvLICw.recoverERC20.call(uintKuRtI4o, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive3TqMAV = await Revive.new({from: accounts[3]});
		const uint0og9zO = BigInt("1967")
		const uintVrJNTus = BigInt("336")
		const byteH9vehkH = "0x070302001c1a021d07181a1316091cfffffffe1812131c071a060417121c02050b0b19"
		const uintEw33Mxd = BigInt("1760")
		const bytehsncIwL = "0x01121d0c0a1f0815080a0f0b0203050b04010e1b1c0410190c0913100c170302"
		const uintIhQLMgf = BigInt("1800")
		const addressjr7kwu7 = accounts[3]
		const boolNuelohY = await Revive3TqMAV.lock.call(byteH9vehkH, uintVrJNTus, uint0og9zO, {from: accounts[1]});
		await Revive3TqMAV.renounceOwnership.call({from: accounts[2]});
		const boollxG3p2W = await Revive3TqMAV.extendLock.call(bytehsncIwL, uintEw33Mxd, {from: accounts[5]});
		const addresswdCLX16 = await Revive3TqMAV.recoverERC20.call(addressjr7kwu7, uintIhQLMgf, {from: accounts[4]});

		await expect(Revive3TqMAV.lock.call(byteH9vehkH, uintVrJNTus, uint0og9zO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveunvLICw = await Revive.new({from: accounts[3]});
		const addressKUKySD = accounts[0]
		const addressTTQYVsy = accounts[0]
		const uintzyVNyH6 = BigInt("881")
		const uint256ekv6utA = await ReviveunvLICw.totalBalanceOf.call(addressKUKySD, {from: accounts[4]});
		const uint256He1nFOV = await ReviveunvLICw.unlock.call(addressTTQYVsy, {from: accounts[3]});
		const uint256lHsleM1 = await ReviveunvLICw.recoverERC20.call(uintzyVNyH6, {from: accounts[5]});

		assert.equal(uint256He1nFOV, BigInt("0"))
		assert.equal(uint256ekv6utA, BigInt("0"))
		await expect(ReviveunvLICw.recoverERC20.call(uintzyVNyH6, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveunvLICw = await Revive.new({from: accounts[3]});
		const addressxBF1jOh = accounts[0]
		const uintRMXmqh2 = BigInt("977")
		const uint256ekv6utA = await ReviveunvLICw.totalBalanceOf.call(addressxBF1jOh, {from: accounts[4]});
		const uint256ctOwCAu = await ReviveunvLICw.recoverERC20.call(uintRMXmqh2, {from: accounts[1]});

		assert.equal(uint256ekv6utA, BigInt("0"))
		await expect(ReviveunvLICw.recoverERC20.call(uintRMXmqh2, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive3TqMAV = await Revive.new({from: accounts[3]});
		const uintgmc6wM = BigInt("181")
		const uintuYmm9PV = BigInt("1967")
		const uintxDBK1IS = BigInt("304")
		const byteId0jiiO = "0x070302001c1a021d07181a1316091c011812131c071a060417121c02050b0b19"
		const uint256EmHIZRX = await Revive3TqMAV.recoverERC20.call(uintgmc6wM, {from: accounts[4]});
		const boolNuelohY = await Revive3TqMAV.lock.call(byteId0jiiO, uintxDBK1IS, uintuYmm9PV, {from: accounts[1]});

		await expect(Revive3TqMAV.recoverERC20.call(uintgmc6wM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivei5TB55e = await Revive.new({from: accounts[1]});
		const uintOv6xqc = BigInt("1439")
		const addresswF5Zzws = "0x0000000000000000000000000000000000000002"
		const uint256fkId2M9 = await Revivei5TB55e.recoverERC20.call(uintOv6xqc, {from: accounts[3]});
		const uint256a4nPbI4 = await Revivei5TB55e.getUnlockableTokens.call(addresswF5Zzws, {from: accounts[2]});

		await expect(Revivei5TB55e.recoverERC20.call(uintOv6xqc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveunvLICw = await Revive.new({from: accounts[3]});
		const uintS3l4ovk = BigInt("906")
		const uintjzLMa0Y = BigInt("1194")
		const bytejolM1XR = "0x160201170513120d04010a121413020910071207030510121911081f06061b12"
		const address8umqzQ = accounts[2]
		const addressPm0uveS = accounts[1]
		const uintpJmB5A3 = BigInt("652")
		const uintCeeyqZR = BigInt("78")
		const byteKZPwEGC = "0x101f062019071809110d0c1717050615170e021f12051b1a12130f1a0117130f"
		const boolU5PoCs = await ReviveunvLICw.transferWithLock.call(address8umqzQ, bytejolM1XR, uintjzLMa0Y, uintS3l4ovk, {from: accounts[3]});
		const uint256ekv6utA = await ReviveunvLICw.totalBalanceOf.call(addressPm0uveS, {from: accounts[4]});
		const uint256A2vl2AT = await ReviveunvLICw.recoverERC20.call(uintpJmB5A3, {from: "0x0000000000000000000000000000000000000001"});
		const boolPZk5lRG = await ReviveunvLICw.increaseLockAmount.call(byteKZPwEGC, uintCeeyqZR, {from: accounts[1]});

		assert.equal(boolU5PoCs, true)
		assert.equal(uint256ekv6utA, BigInt("0"))
		await expect(ReviveunvLICw.recoverERC20.call(uintpJmB5A3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveunvLICw = await Revive.new({from: accounts[3]});
		const addressugarqH4 = accounts[0]
		const uintSfWpuK8 = BigInt("833")
		const addresshpHR8bo = accounts[1]
		const addressaxPgL79 = accounts[1]
		const uint256V3pWHbp = await ReviveunvLICw.totalBalanceOf.call(addressugarqH4, {from: accounts[3]});
		const uint256HqmyjGq = await ReviveunvLICw.recoverERC20.call(uintSfWpuK8, {from: accounts[1]});
		const uint256ekv6utA = await ReviveunvLICw.totalBalanceOf.call(addresshpHR8bo, {from: accounts[4]});
		const uint256KXWL0i = await ReviveunvLICw.getUnlockableTokens.call(addressaxPgL79, {from: accounts[4]});

		assert.equal(uint256V3pWHbp, BigInt("0"))
		await expect(ReviveunvLICw.recoverERC20.call(uintSfWpuK8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveROvnvz = await Revive.new({from: accounts[0]});
		const uintcHmYxlY = BigInt("1731")
		const byteslGqydh = "0x171b07020915120b0e201f1913120d02151c0919061d13170e170d051e120b02"
		const addressn7BySw1 = accounts[2]
		const uintUwgibc0 = BigInt("1908")
		const addressEi427BV = accounts[0]
		const addressBbCawqs = accounts[2]
		const addresspL1u8y0 = accounts[3]
		const addressNnPoKcB = "0x0000000000000000000000000000000000000001"
		const uint256KhQ0CFM = await ReviveROvnvz.tokensLockedAtTime.call(addressn7BySw1, byteslGqydh, uintcHmYxlY, {from: accounts[2]});
		const uint256BkwayhM = await ReviveROvnvz.recoverERC20.call(uintUwgibc0, {from: accounts[3]});
		const uint256duZs3t = await ReviveROvnvz.balanceOf.call(addressEi427BV, {from: "0x0000000000000000000000000000000000000001"});
		const uint256KUKLOrV = await ReviveROvnvz.unlock.call(addressBbCawqs, {from: accounts[1]});
		const uint256kj05I3v = await ReviveROvnvz.allowance.call(addressNnPoKcB, addresspL1u8y0, {from: accounts[2]});

		assert.equal(uint256KhQ0CFM, BigInt("0"))
		await expect(ReviveROvnvz.recoverERC20.call(uintUwgibc0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWmlZFYF = await Revive.new({from: accounts[4]});
		const uintACS2p99 = BigInt("35")
		const byteZtwQgcy = "0x100402190213000315021b101603020402180918161a20160e10110f091b0d1b"
		const addressAxtBZcx = accounts[1]
		const uintWAZqkAv = BigInt("2008")
		const uint256JoMWEs = await ReviveWmlZFYF.tokensLockedAtTime.call(addressAxtBZcx, byteZtwQgcy, uintACS2p99, {from: accounts[2]});
		const uint2569Kwgo8 = await ReviveWmlZFYF.recoverERC20.call(uintWAZqkAv, {from: accounts[2]});

		assert.equal(uint256JoMWEs, BigInt("0"))
		await expect(ReviveWmlZFYF.recoverERC20.call(uintWAZqkAv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive3TqMAV = await Revive.new({from: accounts[3]});
		const uint3MrR3m = BigInt("1967")
		const uintPuMaNp7 = BigInt("336")
		const byteEb8v1Ir = "0x0703fffffffd001c1a021d07181a1316091c011812131c071a060417121c02050b0b19"
		const uintzieJPpx = BigInt("809")
		const addressm2mxCQk = accounts[2]
		const uintA2dnQI = BigInt("1381")
		const addressOPO9jP = accounts[2]
		const uintDJAXDp4 = BigInt("312")
		const uintbe7LSGH = BigInt("1576")
		const byteSIwwZ7w = "0x050c020f060d04140407101507031c0d1111101f160b012015061f090d0b1810"
		const addresssfukbRk = accounts[0]
		const uintqs7kNnV = BigInt("1345")
		const addressN2WeEof = accounts[0]
		const boolNuelohY = await Revive3TqMAV.lock.call(byteEb8v1Ir, uintPuMaNp7, uint3MrR3m, {from: accounts[1]});
		const boolAJet5Vz = await Revive3TqMAV.increaseAllowance.call(addressm2mxCQk, uintzieJPpx, {from: accounts[2]});
		const boolIzCZkg = await Revive3TqMAV.approve.call(addressOPO9jP, uintA2dnQI, {from: accounts[2]});
		const boolcYRZp77 = await Revive3TqMAV.transferWithLock.call(addresssfukbRk, byteSIwwZ7w, uintbe7LSGH, uintDJAXDp4, {from: "0x0000000000000000000000000000000000000001"});
		const boolahATm9T = await Revive3TqMAV.decreaseAllowance.call(addressN2WeEof, uintqs7kNnV, {from: accounts[4]});

		await expect(Revive3TqMAV.lock.call(byteEb8v1Ir, uintPuMaNp7, uint3MrR3m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivei5TB55e = await Revive.new({from: accounts[1]});
		const addressqjEO6uH = accounts[4]
		const uintY7UH9Cf = BigInt("1784")
		const uintTOBNySX = BigInt("1528")
		const address87JE6k = accounts[1]
		const addressvX8dRDS = accounts[1]
		const uint256MVGcQEy = await Revivei5TB55e.totalBalanceOf.call(addressqjEO6uH, {from: accounts[3]});
		const uint256Yd03a0S = await Revivei5TB55e.recoverERC20.call(uintY7UH9Cf, {from: accounts[3]});
		const boolVOSFbBm = await Revivei5TB55e.increaseAllowance.call(address87JE6k, uintTOBNySX, {from: accounts[5]});
		const uint256Xx8km2X = await Revivei5TB55e.unlock.call(addressvX8dRDS, {from: accounts[2]});

		assert.equal(uint256MVGcQEy, BigInt("0"))
		await expect(Revivei5TB55e.recoverERC20.call(uintY7UH9Cf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveunvLICw = await Revive.new({from: accounts[3]});
		const uinttEhkqaI = BigInt("370")
		const addressDf2H1Po = accounts[0]
		const addressPkJob5o = "0x0000000000000000000000000000000000000001"
		const uint256lGyaibi = await ReviveunvLICw.recoverERC20.call(uinttEhkqaI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ekv6utA = await ReviveunvLICw.totalBalanceOf.call(addressDf2H1Po, {from: accounts[4]});
		const uint256UgVuf6k = await ReviveunvLICw.balanceOf.call(addressPkJob5o, {from: accounts[4]});

		await expect(ReviveunvLICw.recoverERC20.call(uinttEhkqaI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive3TqMAV = await Revive.new({from: accounts[3]});
		const uinto9kGIW9 = BigInt("1967")
		const uintcBfKtmD = BigInt("336")
		const bytetV3L8x7 = "0x0703fffffffa001c1a021d07181a1316091c011812131c071a060417121c02050b0b19"
		const uintpnzqVun = BigInt("1869")
		const byteQ2UBuJB = "0x1a13140e1c0a1e1120050206131b0d1610161c141c1f1c1a100f1812101c170b"
		const boolNuelohY = await Revive3TqMAV.lock.call(bytetV3L8x7, uintcBfKtmD, uinto9kGIW9, {from: accounts[1]});
		const boolzGh98IH = await Revive3TqMAV.increaseLockAmount.call(byteQ2UBuJB, uintpnzqVun, {from: accounts[0]});

		await expect(Revive3TqMAV.lock.call(bytetV3L8x7, uintcBfKtmD, uinto9kGIW9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveunvLICw = await Revive.new({from: accounts[3]});
		const uintB9Cz830 = BigInt("917")
		const uinty3eeuRQ = BigInt("146")
		const bytepsDE65 = "0x05071b180f130d06190f170e06130d03120cffffffff060e1c1e181b16151e181d040a"
		const addressgYsWzH = accounts[3]
		const boolFmDbUnT = await ReviveunvLICw.transferWithLock.call(addressgYsWzH, bytepsDE65, uinty3eeuRQ, uintB9Cz830, {from: accounts[3]});

		await expect(ReviveunvLICw.transferWithLock.call(addressgYsWzH, bytepsDE65, uinty3eeuRQ, uintB9Cz830, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveWmlZFYF = await Revive.new({from: accounts[4]});
		const addressexo9QUN = accounts[1]
		const uintP4gWNyJ = BigInt("142")
		const uintoQPiHRp = BigInt("1493")
		const byteNa830oH = "0x1a1f1c0f0d0313050c0b11062017020f1b1d1e1917021b1a1315060e0c110116"
		const uintiPF3ysr = BigInt("12")
		const bytekKkpgJI = "0x1004ffffffff190213000315021b101603020402180918161a20160e10110f091b0d1b"
		const addressPAHqr0l = accounts[0]
		const uintqLyCsW = BigInt("1254")
		const addressxvzmnUH = accounts[5]
		const uint256qEarYSJ = await ReviveWmlZFYF.unlock.call(addressexo9QUN, {from: accounts[5]});
		const boolSuzYEiS = await ReviveWmlZFYF.lock.call(byteNa830oH, uintoQPiHRp, uintP4gWNyJ, {from: accounts[4]});
		const uint256JoMWEs = await ReviveWmlZFYF.tokensLockedAtTime.call(addressPAHqr0l, bytekKkpgJI, uintiPF3ysr, {from: accounts[2]});
		const boolQtZlMf8 = await ReviveWmlZFYF.transfer.call(addressxvzmnUH, uintqLyCsW, {from: accounts[1]});

		assert.equal(boolSuzYEiS, true)
		assert.equal(uint256qEarYSJ, BigInt("0"))
		await expect(ReviveWmlZFYF.tokensLockedAtTime.call(addressPAHqr0l, bytekKkpgJI, uintiPF3ysr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivei5TB55e = await Revive.new({from: accounts[1]});
		const addresshKtuBCy = accounts[2]
		const uintbOXj7SA = BigInt("59")
		const uint256Xx8km2X = await Revivei5TB55e.unlock.call(addresshKtuBCy, {from: accounts[2]});
		const uint256rKpb4Tm = await Revivei5TB55e.recoverERC20.call(uintbOXj7SA, {from: accounts[5]});

		assert.equal(uint256Xx8km2X, BigInt("0"))
		await expect(Revivei5TB55e.recoverERC20.call(uintbOXj7SA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})