const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveNNeDp4D = await Revive.new({from: accounts[3]});
		const addressoIZgdn = accounts[3]
		const uintrButRCr = BigInt("1143")
		const uintzM7FTg4 = BigInt("826")
		const byteyydagM1 = "0x1f020a0e12090d110a031a03201007191a101b1102060b131b150d0e1e031401"
		const addressjVqKWnu = accounts[2]
		const uintHlMMbYq = BigInt("309")
		const addressQ4H6NSl = accounts[1]
		const uint256isx4yRQ = await ReviveNNeDp4D.getUnlockableTokens.call(addressoIZgdn, {from: accounts[2]});
		const addressXiAQDxq = await ReviveNNeDp4D.owner.call({from: accounts[3]});
//		const boolQAmb3A = await ReviveNNeDp4D.transferWithLock.call(addressjVqKWnu, byteyydagM1, uintzM7FTg4, uintrButRCr, {from: accounts[2]});
//		const boolwqouRS = await ReviveNNeDp4D.decreaseAllowance.call(addressQ4H6NSl, uintHlMMbYq, {from: accounts[4]});
//		await ReviveNNeDp4D.onlyOwner.call({from: accounts[3]});

		assert.equal(addressXiAQDxq, 0x9B3f06516e630d8F1CFb9Ec5Ec9BD1D95848F4f5)
		assert.equal(uint256isx4yRQ, BigInt("0"))
		await expect(ReviveNNeDp4D.transferWithLock.call(addressjVqKWnu, byteyydagM1, uintzM7FTg4, uintrButRCr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMxL00n = await Revive.new({from: accounts[2]});
		const byteRtybZH5 = "0x1903030611041808061e171d0b0c1116181216160d160203100017090c110b1e"
		const addressB9MYToS = accounts[5]
		const addressfYLOFPP = accounts[2]
		const booll2Hghu8 = await ReviveMxL00n.isOwner.call({from: accounts[4]});
		const uint256e9YNKdK = await ReviveMxL00n.tokensUnlockable.call(addressB9MYToS, byteRtybZH5, {from: accounts[0]});
		const addressPdgDbkX = await ReviveMxL00n.transferOwnership.call(addressfYLOFPP, {from: accounts[2]});

		assert.equal(booll2Hghu8, false)
		assert.equal(uint256e9YNKdK, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivegRcAKkC = await Revive.new({from: accounts[4]});
		const uintcMfP17 = BigInt("1953")
		const uintOBa8GD = BigInt("1529")
		const byteGuy98oE = "0x081e05161d041b14170701091c200a11171101071e021c0e0a1e1705011a1611"
		const addressDr6B04S = await RevivegRcAKkC.owner.call({from: accounts[1]});
//		const boolaeSQaY7 = await RevivegRcAKkC.lock.call(byteGuy98oE, uintOBa8GD, uintcMfP17, {from: accounts[1]});
//		const bools5QEUO5 = await RevivegRcAKkC.isOwner.call({from: accounts[2]});

		assert.equal(addressDr6B04S, 0x99E54645b9bBEe57232e28F437cC27911130877d)
		await expect(RevivegRcAKkC.lock.call(byteGuy98oE, uintOBa8GD, uintcMfP17, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJkxU0f = await Revive.new({from: accounts[3]});
		const addressvrLCPFe = accounts[3]
		const addressWGpMnFB = accounts[3]
		const uintcJHo5pt = BigInt("1855")
		const byteVRccWck = "0x190f0e181f1e1913101110170b0a1c15130310101e16200e100e1603140b1107"
		const addressYi2Yl7u = accounts[2]
		const uintD4zxLIr = BigInt("1809")
		const byteYDpuOUF = "0x030e100c05110320020301041418090a021d10090a0e19120a08090e0b10010b"
		const uintcH8alpU = BigInt("1098")
		const addressKze60LD = accounts[4]
		const addressn6HfFx = accounts[4]
		const uintZ2kVSNZ = BigInt("1276")
		const uintv6PLxkv = BigInt("896")
		const bytesK561M9 = "0x03150e0e141a07170f17160904131b1e1614190100051615181a04180116130b"
		const address2kfwcn = accounts[3]
		const addressen7eLkO = accounts[1]
		const uint256dBBEPHg = await ReviveJkxU0f.allowance.call(addressWGpMnFB, addressvrLCPFe, {from: accounts[3]});
		const uint256ffaEfy3 = await ReviveJkxU0f.tokensLockedAtTime.call(addressYi2Yl7u, byteVRccWck, uintcJHo5pt, {from: accounts[2]});
//		const boolBtlqTNJ = await ReviveJkxU0f.increaseLockAmount.call(byteYDpuOUF, uintD4zxLIr, {from: accounts[2]});
//		const boolUcqBVwa = await ReviveJkxU0f.transferFrom.call(addressn6HfFx, addressKze60LD, uintcH8alpU, {from: accounts[3]});
//		const boolTC0F1pn = await ReviveJkxU0f.transferWithLock.call(address2kfwcn, bytesK561M9, uintv6PLxkv, uintZ2kVSNZ, {from: accounts[0]});
//		const uint256ce5d109 = await ReviveJkxU0f.totalBalanceOf.call(addressen7eLkO, {from: accounts[0]});

		assert.equal(uint256dBBEPHg, BigInt("0"))
		assert.equal(uint256ffaEfy3, BigInt("0"))
		await expect(ReviveJkxU0f.increaseLockAmount.call(byteYDpuOUF, uintD4zxLIr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivee6rYByN = await Revive.new({from: accounts[3]});
		const uintazk06zL = BigInt("1153")
		const bytepwYRVQ1 = "0x02010c1d0e15081612090f0b041b080b1517020806011f111c1616020a082012"
		const addressmaeS7yE = accounts[4]
		const uinte0EjWKm = BigInt("623")
		const uintKJmrf2f = BigInt("258")
		const byteVwP2Sso = "0x1a1a130c080e0213121d18110018031103111e1d091c07011c1e15061d1b0711"
		const addressnYDZDhP = "0x0000000000000000000000000000000000000001"
		const uintCPOk1oq = BigInt("651")
		const bytet69SQ8a = "0x0c140c02141307171e0c120c0316090912160c070405070315020a0d041e0e07"
		const addresscvN6DxS = accounts[2]
//		await Revivee6rYByN.onlyOwner.call({from: accounts[2]});
//		const uint2561x9c7U = await Revivee6rYByN.tokensLockedAtTime.call(addressmaeS7yE, bytepwYRVQ1, uintazk06zL, {from: accounts[0]});
//		const addressf5PzQ4u = await Revivee6rYByN.owner.call({from: accounts[0]});
//		const boolkLJpFRv = await Revivee6rYByN.transferWithLock.call(addressnYDZDhP, byteVwP2Sso, uintKJmrf2f, uinte0EjWKm, {from: accounts[4]});
//		const uint256QjQ3ERO = await Revivee6rYByN.tokensLockedAtTime.call(addresscvN6DxS, bytet69SQ8a, uintCPOk1oq, {from: accounts[4]});
//		const addresstb6F6xG = await Revivee6rYByN.owner.call({from: accounts[1]});

		await expect(Revivee6rYByN.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviversfvJNa = await Revive.new({from: accounts[4]});
		const uintlXPd9Vf = BigInt("1709")
		const addressIJSSCdX = accounts[3]
		const addressgwLvJKI = accounts[0]
		const uintiZRNR3b = BigInt("893")
		const addressDSgrn9B = "0x0000000000000000000000000000000000000001"
//		const boolc7HofJ = await ReviversfvJNa.transferFrom.call(addressgwLvJKI, addressIJSSCdX, uintlXPd9Vf, {from: accounts[2]});
//		const boolTSIBhss = await ReviversfvJNa.decreaseAllowance.call(addressDSgrn9B, uintiZRNR3b, {from: accounts[5]});

		await expect(ReviversfvJNa.transferFrom.call(addressgwLvJKI, addressIJSSCdX, uintlXPd9Vf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveBflfjnW = await Revive.new({from: accounts[0]});
		const addressW4rXYdJ = accounts[3]
		const uintvnRr9yo = BigInt("897")
		const addresshCTonmK = accounts[2]
		const uintNPSDIxj = BigInt("1786")
		const addressX5AYTMF = accounts[2]
		const uintU5W2E9 = BigInt("413")
		const addressdehXZuO = accounts[2]
		const addressQNN60TP = await ReviveBflfjnW.transferOwnership.call(addressW4rXYdJ, {from: accounts[0]});
//		const addressPDb0NJe = await ReviveBflfjnW.recoverERC20.call(addresshCTonmK, uintvnRr9yo, {from: accounts[0]});
//		const addressEEbq67G = await ReviveBflfjnW.recoverERC20.call(addressX5AYTMF, uintNPSDIxj, {from: "0x0000000000000000000000000000000000000001"});
//		const boolGwAD1Oo = await ReviveBflfjnW.isOwner.call({from: accounts[0]});
//		const boolnmnezhw = await ReviveBflfjnW.decreaseAllowance.call(addressdehXZuO, uintU5W2E9, {from: accounts[2]});

		await expect(ReviveBflfjnW.recoverERC20.call(addresshCTonmK, uintvnRr9yo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVD7qiu1 = await Revive.new({from: accounts[0]});
		const uintuTLeCwI = BigInt("683")
		const addressWQQACbe = accounts[0]
		const addressG8QjBEX = accounts[0]
		const uintAbFqDPt = BigInt("241")
		const uintF6oyyJ = BigInt("93")
		const bytel2P4IOj = "0x1b0501051f16101b071a151b1f04130a1a0607161c0e111e171e1e0205101b0d"
		const addressWLuucmL = accounts[3]
		const uintTGKTjTe = BigInt("756")
		const addressvZEsDmJ = accounts[5]
//		const boolykb0m8s = await ReviveVD7qiu1.decreaseAllowance.call(addressWQQACbe, uintuTLeCwI, {from: accounts[0]});
//		const uint256C0BBroX = await ReviveVD7qiu1.getUnlockableTokens.call(addressG8QjBEX, {from: accounts[5]});
//		const boolI2gCsu = await ReviveVD7qiu1.transferWithLock.call(addressWLuucmL, bytel2P4IOj, uintF6oyyJ, uintAbFqDPt, {from: "0x0000000000000000000000000000000000000001"});
//		const boolxhJp5wJ = await ReviveVD7qiu1.increaseAllowance.call(addressvZEsDmJ, uintTGKTjTe, {from: accounts[0]});

		await expect(ReviveVD7qiu1.decreaseAllowance.call(addressWQQACbe, uintuTLeCwI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNNeDp4D = await Revive.new({from: accounts[3]});
		const addresssX5ibuz = accounts[3]
		const uintVJi79vH = BigInt("1143")
		const uintYmYRv6Q = BigInt("826")
		const byteTZ1ygxd = "0x1f020a0e12090d110a031a03201007191a101b11fffffffe060b131b150d0e1e031401"
		const addressRM8IlOu = accounts[2]
		const uintGLUFPJS = BigInt("477")
		const byteLBS8cc = "0x14170b09120d121803050720140d0c1a09071e0a130610100716111a0b06021a"
		const uintRkhOBJF = BigInt("309")
		const addressdGbfYR3 = accounts[1]
		const uint256isx4yRQ = await ReviveNNeDp4D.getUnlockableTokens.call(addresssX5ibuz, {from: accounts[2]});
		const addressXiAQDxq = await ReviveNNeDp4D.owner.call({from: accounts[3]});
//		const boolQAmb3A = await ReviveNNeDp4D.transferWithLock.call(addressRM8IlOu, byteTZ1ygxd, uintYmYRv6Q, uintVJi79vH, {from: accounts[2]});
//		const boolvaBvPpF = await ReviveNNeDp4D.increaseLockAmount.call(byteLBS8cc, uintGLUFPJS, {from: accounts[1]});
//		await ReviveNNeDp4D.renounceOwnership.call({from: accounts[4]});
//		const boolwqouRS = await ReviveNNeDp4D.decreaseAllowance.call(addressdGbfYR3, uintRkhOBJF, {from: accounts[4]});
//		await ReviveNNeDp4D.onlyOwner.call({from: accounts[3]});

		assert.equal(addressXiAQDxq, 0x9B3f06516e630d8F1CFb9Ec5Ec9BD1D95848F4f5)
		assert.equal(uint256isx4yRQ, BigInt("0"))
		await expect(ReviveNNeDp4D.transferWithLock.call(addressRM8IlOu, byteTZ1ygxd, uintYmYRv6Q, uintVJi79vH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNNeDp4D = await Revive.new({from: accounts[3]});
		const addressm26huXM = accounts[3]
		const addresseBq5Imv = accounts[0]
		const uintBSOBLD7 = BigInt("1143")
		const uintiwbgkyx = BigInt("826")
		const byteOpvZ9T7 = "0x1f020a0e12090d110a031a03201007191a101b1102060b131b150d0e1e031401"
		const addressdBiSuR4 = accounts[2]
		const uintgxOpDzG = BigInt("309")
		const addressTnNBue = accounts[1]
		const uint256isx4yRQ = await ReviveNNeDp4D.getUnlockableTokens.call(addressm26huXM, {from: accounts[2]});
		const uint256xXQQ3wE = await ReviveNNeDp4D.unlock.call(addresseBq5Imv, {from: accounts[4]});
		const addressXiAQDxq = await ReviveNNeDp4D.owner.call({from: accounts[3]});
		const boolhp6cr33 = await ReviveNNeDp4D.isOwner.call({from: accounts[1]});
//		const boolQAmb3A = await ReviveNNeDp4D.transferWithLock.call(addressdBiSuR4, byteOpvZ9T7, uintiwbgkyx, uintBSOBLD7, {from: accounts[2]});
//		await ReviveNNeDp4D.onlyOwner.call({from: accounts[4]});
//		const boolwqouRS = await ReviveNNeDp4D.decreaseAllowance.call(addressTnNBue, uintgxOpDzG, {from: accounts[4]});
//		await ReviveNNeDp4D.onlyOwner.call({from: accounts[3]});

		assert.equal(addressXiAQDxq, 0x9B3f06516e630d8F1CFb9Ec5Ec9BD1D95848F4f5)
		assert.equal(boolhp6cr33, false)
		assert.equal(uint256isx4yRQ, BigInt("0"))
		assert.equal(uint256xXQQ3wE, BigInt("0"))
		await expect(ReviveNNeDp4D.transferWithLock.call(addressdBiSuR4, byteOpvZ9T7, uintiwbgkyx, uintBSOBLD7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveGAcqBDv = await Revive.new({from: accounts[4]});
		const uintlwqA7BT = BigInt("863")
		const addresskfIVzR = accounts[1]
		const addressi0p008 = accounts[5]
		const uintKFitdfV = BigInt("1715")
		const byteBg2BWJg = "0x151b0c170417060117180e1707091404120c160f1803121a051d1002201e1110"
		const uint256PsnN9zH = await ReviveGAcqBDv.totalSupply.call({from: accounts[0]});
//		const bools0U1dx1 = await ReviveGAcqBDv.transfer.call(addresskfIVzR, uintlwqA7BT, {from: accounts[0]});
//		const addresshahBaHZ = await ReviveGAcqBDv.transferOwnership.call(addressi0p008, {from: accounts[0]});
//		const boolB3VM9T9 = await ReviveGAcqBDv.increaseLockAmount.call(byteBg2BWJg, uintKFitdfV, {from: accounts[2]});
//		await ReviveGAcqBDv.renounceOwnership.call({from: accounts[3]});

		assert.equal(uint256PsnN9zH, BigInt("3000000000000000000000000000"))
		await expect(ReviveGAcqBDv.transfer.call(addresskfIVzR, uintlwqA7BT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivexC8aogr = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintX1vmEFc = BigInt("258")
		const byteYzu969 = "0x1a1a1508011e050c0009100f031613031510050a111012141e08111b0b180f0e"
		const uintUj7tSwn = BigInt("1699")
		const addressbwSjD41 = accounts[0]
		const uintkAGvGOT = BigInt("1468")
		const bytejBDeKTT = "0x1d1a050311080b031c1f111e00201e1f0910071a1f1710130f0304010b0c130e"
		const addressAbuxMh9 = accounts[3]
		const boolz5V63I = await RevivexC8aogr.increaseLockAmount.call(byteYzu969, uintX1vmEFc, {from: accounts[1]});
		const addressrshbU1p = await RevivexC8aogr.recoverERC20.call(addressbwSjD41, uintUj7tSwn, {from: accounts[3]});
		const uint256s0pwv6O = await RevivexC8aogr.tokensLockedAtTime.call(addressAbuxMh9, bytejBDeKTT, uintkAGvGOT, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Revive', async () => {
		const ReviveGAcqBDv = await Revive.new({from: accounts[4]});
		const uintgVpUN3b = BigInt("1432")
		const addressDT6VeLK = accounts[5]
		const uintEQo25Is = BigInt("891")
		const addresstDUwTrr = accounts[2]
		const addressKIOLeuc = accounts[2]
		const boolpVf7WQz = await ReviveGAcqBDv.approve.call(addressDT6VeLK, uintgVpUN3b, {from: accounts[2]});
//		const bools0U1dx1 = await ReviveGAcqBDv.transfer.call(addresstDUwTrr, uintEQo25Is, {from: accounts[0]});
//		const uint256qdgReht = await ReviveGAcqBDv.balanceOf.call(addressKIOLeuc, {from: accounts[5]});
//		await ReviveGAcqBDv.renounceOwnership.call({from: accounts[3]});

		assert.equal(boolpVf7WQz, true)
		await expect(ReviveGAcqBDv.transfer.call(addresstDUwTrr, uintEQo25Is, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJkxU0f = await Revive.new({from: accounts[3]});
		const uintAOSCTDj = BigInt("481")
		const bytezPu0zQ = "0x0713181f1c100a1c180b1d19120415000702140a061e120b0e1504190c0f0001"
		const addressWRCenXO = accounts[3]
		const addresspS3OfM = accounts[3]
		const uinthOMMZOF = BigInt("1855")
		const bytes7Pst3r = "0x190f0e181f1e1913101110170b0a1c15130310101e16200e100e1603140b1107"
		const addressT5dvWC5 = accounts[2]
		const uintwqPxJu7 = BigInt("307")
		const uintcx7GVEf = BigInt("1331")
		const bytez8VgaR5 = "0x1c0e030c171a1818091a011c050b17150a1316120d0b0c0d1b130208111a1903"
		const uintmNtUlS = BigInt("1809")
		const byteHSqFGg = "0x030e100c05110320020301041418090a021d10090a0e19120a08090e0b10010b"
		const uintjwzhzA = BigInt("1098")
		const addressIhwCaMJ = accounts[4]
		const addresseFTZt0W = accounts[4]
		const uinte9JOrA = BigInt("1276")
		const uintpaWBU1s = BigInt("896")
		const byte8X7orZ = "0x03150e0e141a07170f17160904131b1e1614190100051615181a04180116130b"
		const addressVnaE4bf = accounts[3]
		const addressS8MVSKq = accounts[1]
//		const boolZxwLqbx = await ReviveJkxU0f.extendLock.call(bytezPu0zQ, uintAOSCTDj, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256dBBEPHg = await ReviveJkxU0f.allowance.call(addresspS3OfM, addressWRCenXO, {from: accounts[3]});
//		const uint256ffaEfy3 = await ReviveJkxU0f.tokensLockedAtTime.call(addressT5dvWC5, bytes7Pst3r, uinthOMMZOF, {from: accounts[2]});
//		const boolSYFZ8n0 = await ReviveJkxU0f.lock.call(bytez8VgaR5, uintcx7GVEf, uintwqPxJu7, {from: accounts[3]});
//		const boolBtlqTNJ = await ReviveJkxU0f.increaseLockAmount.call(byteHSqFGg, uintmNtUlS, {from: accounts[2]});
//		const boolUcqBVwa = await ReviveJkxU0f.transferFrom.call(addresseFTZt0W, addressIhwCaMJ, uintjwzhzA, {from: accounts[3]});
//		const boolTC0F1pn = await ReviveJkxU0f.transferWithLock.call(addressVnaE4bf, byte8X7orZ, uintpaWBU1s, uinte9JOrA, {from: accounts[0]});
//		const uint256ce5d109 = await ReviveJkxU0f.totalBalanceOf.call(addressS8MVSKq, {from: accounts[0]});

		await expect(ReviveJkxU0f.extendLock.call(bytezPu0zQ, uintAOSCTDj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivegRcAKkC = await Revive.new({from: accounts[4]});
		const uintXOiSKpo = BigInt("278")
		const bytelR3xMPN = "0x1e110a171b0b031f19181f1c0d05200f0c16150201160400070b0d121903170a"
		const addressiWRTN6y = accounts[4]
		const addressxfthjPz = accounts[4]
		const addressAHQbSYl = "0x0000000000000000000000000000000000000001"
		const uintq5SgkO = BigInt("819")
		const addressWriYfyb = accounts[0]
		const uintrK4Vtcm = BigInt("1953")
		const uintu4UoFOe = BigInt("1529")
		const byteq5nqsVx = "0x081e05161d041b14170701091c200a11171101071e021c0e0a1e1705011a1611"
		const uint256jpXz2Vj = await RevivegRcAKkC.tokensLockedAtTime.call(addressiWRTN6y, bytelR3xMPN, uintXOiSKpo, {from: accounts[4]});
		const uint256uWKdag7 = await RevivegRcAKkC.allowance.call(addressAHQbSYl, addressxfthjPz, {from: accounts[3]});
		const boolacywhc = await RevivegRcAKkC.increaseAllowance.call(addressWriYfyb, uintq5SgkO, {from: accounts[2]});
//		const boolaeSQaY7 = await RevivegRcAKkC.lock.call(byteq5nqsVx, uintu4UoFOe, uintrK4Vtcm, {from: accounts[1]});
//		const bools5QEUO5 = await RevivegRcAKkC.isOwner.call({from: accounts[2]});

		assert.equal(boolacywhc, true)
		assert.equal(uint256jpXz2Vj, BigInt("0"))
		assert.equal(uint256uWKdag7, BigInt("0"))
		await expect(RevivegRcAKkC.lock.call(byteq5nqsVx, uintu4UoFOe, uintrK4Vtcm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivegRcAKkC = await Revive.new({from: accounts[4]});
		const uintAliz33g = BigInt("278")
		const bytemX78SZW = "0x1e110a171b0b031f19181f1c0d05200f0c16150201160400070b0d121903170a"
		const addresswGA3mrH = accounts[3]
		const addressDkmLZw = accounts[0]
		const bytehvOYGqi = "0x19120a11021715020302151d041f0c190c1c0814070400150d0711010d1c010d"
		const addressaYPVWZF = accounts[1]
		const uintyzTwVed = BigInt("789")
		const addressoIjI90B = accounts[5]
		const uintMRHv1Yv = BigInt("1953")
		const uintWArUnaM = BigInt("1529")
		const byteXFtFdHi = "0x081e05161d041b14170701091c200a11171101071e021c0e0a1e1705011a1611"
		const uint256jpXz2Vj = await RevivegRcAKkC.tokensLockedAtTime.call(addresswGA3mrH, bytemX78SZW, uintAliz33g, {from: accounts[4]});
		const uint256vXgWKqO = await RevivegRcAKkC.totalBalanceOf.call(addressDkmLZw, {from: accounts[4]});
		const uint256werytp1 = await RevivegRcAKkC.tokensLocked.call(addressaYPVWZF, bytehvOYGqi, {from: accounts[4]});
		const addressDr6B04S = await RevivegRcAKkC.owner.call({from: accounts[1]});
		const boolG99ONk = await RevivegRcAKkC.approve.call(addressoIjI90B, uintyzTwVed, {from: "0x0000000000000000000000000000000000000001"});
//		const boolaeSQaY7 = await RevivegRcAKkC.lock.call(byteXFtFdHi, uintWArUnaM, uintMRHv1Yv, {from: accounts[1]});
//		const bools5QEUO5 = await RevivegRcAKkC.isOwner.call({from: accounts[2]});

		assert.equal(addressDr6B04S, 0x99E54645b9bBEe57232e28F437cC27911130877d)
		assert.equal(boolG99ONk, true)
		assert.equal(uint256jpXz2Vj, BigInt("0"))
		assert.equal(uint256vXgWKqO, BigInt("0"))
		assert.equal(uint256werytp1, BigInt("0"))
		await expect(RevivegRcAKkC.lock.call(byteXFtFdHi, uintWArUnaM, uintMRHv1Yv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivegRcAKkC = await Revive.new({from: accounts[4]});
		const uintpFTNVxQ = BigInt("278")
		const byteUBh2ANC = "0x1e110a171b0b031f19181f1c0d05200f0c16150201160400070b0d121903170a"
		const addressF2YzIM = accounts[3]
		const uinttaYt4Z = BigInt("225")
		const byteakdEGwZ = "0x171d0e020b16151411020c1706090d04181e071709050c0a100f0c0d031d0909"
		const addressOd4tPp = accounts[2]
		const byteBBDF4jv = "0x19120a11021715020302151d041f0c190c1c0814070400150d0711010d1c010d"
		const addresslbzuq0Y = accounts[1]
		const uintI19RJZu = BigInt("1433")
		const uintOIYOjGh = BigInt("789")
		const addresswdrL7FO = accounts[5]
		const uintHvRFTBl = BigInt("1953")
		const uinttIgRy6o = BigInt("1529")
		const byteGkZYdsi = "0x081e05161d041b14170701091c200a11171101071e021c0e0a1e1705011a1611"
		const uint256jpXz2Vj = await RevivegRcAKkC.tokensLockedAtTime.call(addressF2YzIM, byteUBh2ANC, uintpFTNVxQ, {from: accounts[4]});
		const uint256DN6lnba = await RevivegRcAKkC.tokensLockedAtTime.call(addressOd4tPp, byteakdEGwZ, uinttaYt4Z, {from: accounts[1]});
		const uint256werytp1 = await RevivegRcAKkC.tokensLocked.call(addresslbzuq0Y, byteBBDF4jv, {from: accounts[4]});
//		const uint256HILhwx = await RevivegRcAKkC.recoverERC20.call(uintI19RJZu, {from: accounts[1]});
//		const addressDr6B04S = await RevivegRcAKkC.owner.call({from: accounts[1]});
//		const boolG99ONk = await RevivegRcAKkC.approve.call(addresswdrL7FO, uintOIYOjGh, {from: "0x0000000000000000000000000000000000000001"});
//		const boolaeSQaY7 = await RevivegRcAKkC.lock.call(byteGkZYdsi, uinttIgRy6o, uintHvRFTBl, {from: accounts[1]});
//		const bools5QEUO5 = await RevivegRcAKkC.isOwner.call({from: accounts[2]});

		assert.equal(uint256DN6lnba, BigInt("0"))
		assert.equal(uint256jpXz2Vj, BigInt("0"))
		assert.equal(uint256werytp1, BigInt("0"))
		await expect(RevivegRcAKkC.recoverERC20.call(uintI19RJZu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivegRcAKkC = await Revive.new({from: accounts[4]});
		const byteAXne9Tp = "0x040b0b1a1c0b0e10090a0f11151e08061a0018150118131c14130f081b1c1e20"
		const addressgVW3pkH = accounts[3]
		const uintUdGWb3 = BigInt("278")
		const byteDvL0iA = "0x1e110a171b0b031f19181f1c0d05200f0c16150201160400070b0d121903170a"
		const addressLcxDuN = accounts[3]
		const addressCnw5iH = accounts[0]
		const byteWcjz2l3 = "0x19120a11021715020302151d041f0c190c1c0814070400150d0711010d1c010d"
		const addressbFLShD = accounts[1]
		const uinttsFXtFI = BigInt("958")
		const uintVjjH9ov = BigInt("789")
		const addressuoDrlsQ = accounts[5]
		const uintlT5Y8EI = BigInt("1953")
		const uintOcxgOEO = BigInt("1529")
		const bytesZaXGer = "0x081e05161d041b14170701091c200a11171101071e021c0e0a1e1705011a1611"
		const byteL6fmueh = "0x1c0408191c04141d0d0314040b151e0b011e1603011e0d00181a0e051012110f"
		const addressvm40Thb = accounts[4]
		const uint256GasbGc4 = await RevivegRcAKkC.tokensUnlockable.call(addressgVW3pkH, byteAXne9Tp, {from: "0x0000000000000000000000000000000000000001"});
		const uint256jpXz2Vj = await RevivegRcAKkC.tokensLockedAtTime.call(addressLcxDuN, byteDvL0iA, uintUdGWb3, {from: accounts[4]});
		const uint256vXgWKqO = await RevivegRcAKkC.totalBalanceOf.call(addressCnw5iH, {from: accounts[4]});
		const uint256werytp1 = await RevivegRcAKkC.tokensLocked.call(addressbFLShD, byteWcjz2l3, {from: accounts[4]});
//		const uint256R9DWNO = await RevivegRcAKkC.recoverERC20.call(uinttsFXtFI, {from: accounts[5]});
//		const addressDr6B04S = await RevivegRcAKkC.owner.call({from: accounts[1]});
//		const boolG99ONk = await RevivegRcAKkC.approve.call(addressuoDrlsQ, uintVjjH9ov, {from: "0x0000000000000000000000000000000000000001"});
//		const boolaeSQaY7 = await RevivegRcAKkC.lock.call(bytesZaXGer, uintOcxgOEO, uintlT5Y8EI, {from: accounts[1]});
//		const uint256H8r1LED = await RevivegRcAKkC.tokensLocked.call(addressvm40Thb, byteL6fmueh, {from: accounts[4]});
//		const bools5QEUO5 = await RevivegRcAKkC.isOwner.call({from: accounts[2]});

		assert.equal(uint256GasbGc4, BigInt("0"))
		assert.equal(uint256jpXz2Vj, BigInt("0"))
		assert.equal(uint256vXgWKqO, BigInt("0"))
		assert.equal(uint256werytp1, BigInt("0"))
		await expect(RevivegRcAKkC.recoverERC20.call(uinttsFXtFI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveKlUJS9K = await Revive.new({from: accounts[4]});
		const addressCsW9RAo = accounts[3]
		const uintzp2TIR8 = BigInt("1649")
		const bytegAFNoep = "0x000f1413100f150c141b1f11202017051d0e1c0f0c18160f0913201d0e1f0c0e"
		const addresssX1MMt4 = accounts[4]
		const uinttXA4k1 = BigInt("938")
		const addresspGCdWqv = accounts[1]
		const addressT8fnDnv = accounts[2]
		const byteVeBzUu = "0x130b0c160f1d08130b0614101d0f19111509030f110003091d09171d021f1c0e"
		const addressmS6ltkU = accounts[2]
		const uintd6BJrRy = BigInt("1175")
		const uint256L1N0h1l = await ReviveKlUJS9K.unlock.call(addressCsW9RAo, {from: accounts[0]});
		const uint256q6kN7L1 = await ReviveKlUJS9K.totalSupply.call({from: accounts[2]});
		const uint256GptjHGN = await ReviveKlUJS9K.tokensLockedAtTime.call(addresssX1MMt4, bytegAFNoep, uintzp2TIR8, {from: accounts[0]});
		const uint256X1V6GX = await ReviveKlUJS9K.totalSupply.call({from: accounts[2]});
		const addressO7png4 = await ReviveKlUJS9K.owner.call({from: accounts[1]});
		const booldCJnSys = await ReviveKlUJS9K.approve.call(addresspGCdWqv, uinttXA4k1, {from: accounts[0]});
		const uint256AA6DSyB = await ReviveKlUJS9K.totalBalanceOf.call(addressT8fnDnv, {from: accounts[4]});
		const uint256IRr5O8 = await ReviveKlUJS9K.tokensLocked.call(addressmS6ltkU, byteVeBzUu, {from: accounts[3]});
//		const uint256HWb7x18 = await ReviveKlUJS9K.recoverERC20.call(uintd6BJrRy, {from: accounts[4]});

		assert.equal(addressO7png4, 0x99E54645b9bBEe57232e28F437cC27911130877d)
		assert.equal(booldCJnSys, true)
		assert.equal(uint256AA6DSyB, BigInt("0"))
		assert.equal(uint256GptjHGN, BigInt("0"))
		assert.equal(uint256IRr5O8, BigInt("0"))
		assert.equal(uint256L1N0h1l, BigInt("0"))
		assert.equal(uint256X1V6GX, BigInt("3000000000000000000000000000"))
		assert.equal(uint256q6kN7L1, BigInt("3000000000000000000000000000"))
		await expect(ReviveKlUJS9K.recoverERC20.call(uintd6BJrRy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJTyhVPe = await Revive.new({from: accounts[5]});
		const addresslGLjI7 = accounts[0]
		const uintPpeSoET = BigInt("117")
		const byteT0F9ye2 = "0x1a061a0b0b0a1b0b0a0f061315090b03111404181316201a0e0c191910110810"
		const addresswQii1WN = accounts[2]
		const addresspAM3AqN = accounts[3]
		const addressZlmp1qi = accounts[5]
		const uintIo1KaQn = BigInt("662")
		const addressMW8aYHd = accounts[2]
		const uintfWUnSPb = BigInt("680")
		const addressCqngcsn = accounts[4]
		const uint256gvLUNPx = await ReviveJTyhVPe.unlock.call(addresslGLjI7, {from: accounts[1]});
//		await ReviveJTyhVPe.renounceOwnership.call({from: accounts[5]});
//		const uint256lrdjLl = await ReviveJTyhVPe.tokensLockedAtTime.call(addresswQii1WN, byteT0F9ye2, uintPpeSoET, {from: accounts[2]});
//		const uint256CEpqnFY = await ReviveJTyhVPe.totalBalanceOf.call(addresspAM3AqN, {from: accounts[2]});
//		const uint256VkvEYrJ = await ReviveJTyhVPe.getUnlockableTokens.call(addressZlmp1qi, {from: accounts[3]});
//		const boolGbmdKJg = await ReviveJTyhVPe.transfer.call(addressMW8aYHd, uintIo1KaQn, {from: accounts[1]});
//		const addresshIJJy3y = await ReviveJTyhVPe.owner.call({from: accounts[4]});
//		const boolvBOHbSI = await ReviveJTyhVPe.increaseAllowance.call(addressCqngcsn, uintfWUnSPb, {from: accounts[2]});

		assert.equal(uint256gvLUNPx, BigInt("0"))
		await expect(ReviveJTyhVPe.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveGAcqBDv = await Revive.new({from: accounts[4]});
		const uintJsEHFQk = BigInt("578")
		const addressVUZFjfW = accounts[5]
//		const uint256Mlm3nWk = await ReviveGAcqBDv.recoverERC20.call(uintJsEHFQk, {from: accounts[2]});
//		const uint256kz08q66 = await ReviveGAcqBDv.totalBalanceOf.call(addressVUZFjfW, {from: accounts[4]});

		await expect(ReviveGAcqBDv.recoverERC20.call(uintJsEHFQk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJTyhVPe = await Revive.new({from: accounts[5]});
		const uintYTm1YfF = BigInt("1123")
		const addressQE3sWrv = accounts[0]
		const uintiFFTuCX = BigInt("117")
		const bytep5T66kJ = "0x1a061a0b0b0a1b0b0a0f061315090b03111404181316201a0e0c191910110810"
		const addressxuhsDrI = accounts[2]
		const addressTbBvPza = accounts[3]
		const addressGqqUG7W = accounts[5]
		const uintxCMVDP = BigInt("662")
		const addressbJf4qNL = accounts[2]
		const uintJs5LNB3 = BigInt("680")
		const addressjz8sov = accounts[4]
//		const uint256TMtjZ4 = await ReviveJTyhVPe.recoverERC20.call(uintYTm1YfF, {from: accounts[0]});
//		const uint256gvLUNPx = await ReviveJTyhVPe.unlock.call(addressQE3sWrv, {from: accounts[1]});
//		await ReviveJTyhVPe.renounceOwnership.call({from: accounts[5]});
//		const uint256lrdjLl = await ReviveJTyhVPe.tokensLockedAtTime.call(addressxuhsDrI, bytep5T66kJ, uintiFFTuCX, {from: accounts[2]});
//		const uint256CEpqnFY = await ReviveJTyhVPe.totalBalanceOf.call(addressTbBvPza, {from: accounts[2]});
//		const uint256VkvEYrJ = await ReviveJTyhVPe.getUnlockableTokens.call(addressGqqUG7W, {from: accounts[3]});
//		const boolGbmdKJg = await ReviveJTyhVPe.transfer.call(addressbJf4qNL, uintxCMVDP, {from: accounts[1]});
//		const addresshIJJy3y = await ReviveJTyhVPe.owner.call({from: accounts[4]});
//		const boolvBOHbSI = await ReviveJTyhVPe.increaseAllowance.call(addressjz8sov, uintJs5LNB3, {from: accounts[2]});

		await expect(ReviveJTyhVPe.recoverERC20.call(uintYTm1YfF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJTyhVPe = await Revive.new({from: accounts[5]});
		const uint0d0RuO = BigInt("1087")
		const bytePy0N0gb = "0x1a061a0b0b0a1b0b0a0f061315090b03111404181316201a0e0c191910110810"
		const addressMXT4H5t = accounts[2]
		const uintJ9MDwv = BigInt("698")
		const uintEJIBTgT = BigInt("948")
		const byteort09F0 = "0x1b131b0d1e150d0c0904180b001f150813151a161609190a0816071d141a080d"
		const addresssGJvLk = accounts[4]
		const uint256lrdjLl = await ReviveJTyhVPe.tokensLockedAtTime.call(addressMXT4H5t, bytePy0N0gb, uint0d0RuO, {from: accounts[2]});
//		const uint256V8RRedK = await ReviveJTyhVPe.recoverERC20.call(uintJ9MDwv, {from: accounts[3]});
//		const boolJ3zfLjV = await ReviveJTyhVPe.increaseLockAmount.call(byteort09F0, uintEJIBTgT, {from: accounts[3]});
//		const uint256VkvEYrJ = await ReviveJTyhVPe.getUnlockableTokens.call(addresssGJvLk, {from: accounts[3]});
//		const addresshIJJy3y = await ReviveJTyhVPe.owner.call({from: accounts[4]});

		assert.equal(uint256lrdjLl, BigInt("0"))
		await expect(ReviveJTyhVPe.recoverERC20.call(uintJ9MDwv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveDyQR9eA = await Revive.new({from: accounts[5]});
		const uintczftRfC = BigInt("740")
		const addresszR3QVqN = accounts[1]
		const uintdPTdWz2 = BigInt("971")
		const uintNovBxFa = BigInt("1031")
		const byteGXVlnu2 = "0x02171d090a070f1809100d12140d181303010f0219070d090f041b15190b1217"
		const addressNNIF1vv = accounts[4]
		const addressjqCQXVa = accounts[0]
//		const uint256cPdk5W0 = await ReviveDyQR9eA.recoverERC20.call(uintczftRfC, {from: accounts[5]});
//		const uint256F109D8 = await ReviveDyQR9eA.totalBalanceOf.call(addresszR3QVqN, {from: accounts[5]});
//		const booljH77sx2 = await ReviveDyQR9eA.transferWithLock.call(addressNNIF1vv, byteGXVlnu2, uintNovBxFa, uintdPTdWz2, {from: accounts[0]});
//		const uint256LhFjMg3 = await ReviveDyQR9eA.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256zZbDcrt = await ReviveDyQR9eA.unlock.call(addressjqCQXVa, {from: accounts[3]});

		await expect(ReviveDyQR9eA.recoverERC20.call(uintczftRfC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveBVkcU72 = await Revive.new({from: accounts[4]});
		const uintJ2JW9pT = BigInt("31")
		const addresssS9uFmN = accounts[4]
		const addressMCkdIAD = accounts[0]
		const uintgZnkEqi = BigInt("1388")
		const uintBLN7anQ = BigInt("1962")
		const bytecTeiVa = "0x141918151b071a1e0e15171a011d1e160307111a091415020413141110121204"
		const boolMKA3B7i = await ReviveBVkcU72.approve.call(addresssS9uFmN, uintJ2JW9pT, {from: accounts[0]});
		const uint256CAqTh0y = await ReviveBVkcU72.totalBalanceOf.call(addressMCkdIAD, {from: accounts[5]});
//		const uint256ZWFqJew = await ReviveBVkcU72.recoverERC20.call(uintgZnkEqi, {from: accounts[5]});
//		const boolJbMvnfl = await ReviveBVkcU72.increaseLockAmount.call(bytecTeiVa, uintBLN7anQ, {from: accounts[2]});

		assert.equal(boolMKA3B7i, true)
		assert.equal(uint256CAqTh0y, BigInt("0"))
		await expect(ReviveBVkcU72.recoverERC20.call(uintgZnkEqi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})