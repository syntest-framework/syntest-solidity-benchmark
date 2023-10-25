const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveO8dxgO1 = await Revive.new({from: accounts[2]});
		const uintuvXFkCP = BigInt("103")
		const bytevp0fQe5 = "0x0b191f1d00160a0b010c08100e0d1c1b19141201190e070d19051d13161c0101"
//		const boolxaUSoMR = await ReviveO8dxgO1.increaseLockAmount.call(bytevp0fQe5, uintuvXFkCP, {from: "0x0000000000000000000000000000000000000001"});
//		await ReviveO8dxgO1.renounceOwnership.call({from: accounts[5]});

		await expect(ReviveO8dxgO1.increaseLockAmount.call(bytevp0fQe5, uintuvXFkCP, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const addresspE9PYgO = accounts[2]
		const addresswJcEBfL = accounts[2]
		const addressOwFO8GW = accounts[0]
		const uint256GORFCXw = await ReviveVwZOQgs.totalBalanceOf.call(addresspE9PYgO, {from: accounts[4]});
		const uint256MzcD8RL = await ReviveVwZOQgs.getUnlockableTokens.call(addresswJcEBfL, {from: accounts[1]});
		const uint256OtglETM = await ReviveVwZOQgs.balanceOf.call(addressOwFO8GW, {from: accounts[1]});
//		await ReviveVwZOQgs.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256GORFCXw, BigInt("0"))
		assert.equal(uint256MzcD8RL, BigInt("0"))
		assert.equal(uint256OtglETM, BigInt("0"))
		await expect(ReviveVwZOQgs.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivee5cfQUX = await Revive.new({from: accounts[0]});
		const addressId88IIr = accounts[3]
		const uintNQgoKPq = BigInt("2008")
		const addressBgM2Y1I = accounts[3]
		const addressE7OM7Ez = accounts[5]
		const uintbHoARm = BigInt("764")
		const bytery7r5RY = "0x151a041705131d0e120a0b0e190e0215081c1002161400111a0204180d061610"
		const uintr2hZFoH = BigInt("143")
		const uintinohnV = BigInt("1647")
		const bytewJWHxcQ = "0x111b0712081a070a0903110a0c2008140f0b13120f0306071d1f09031b171e1e"
		const addressf40E2iV = accounts[2]
//		const addressAygYFff = await Revivee5cfQUX.transferOwnership.call(addressId88IIr, {from: accounts[4]});
//		await Revivee5cfQUX.onlyOwner.call({from: accounts[1]});
//		await Revivee5cfQUX.renounceOwnership.call({from: accounts[1]});
//		const boolwfi9IOK = await Revivee5cfQUX.transferFrom.call(addressE7OM7Ez, addressBgM2Y1I, uintNQgoKPq, {from: accounts[0]});
//		const bool5FGT51 = await Revivee5cfQUX.increaseLockAmount.call(bytery7r5RY, uintbHoARm, {from: accounts[4]});
//		const boolmJdEFUv = await Revivee5cfQUX.transferWithLock.call(addressf40E2iV, bytewJWHxcQ, uintinohnV, uintr2hZFoH, {from: accounts[2]});

		await expect(Revivee5cfQUX.transferOwnership.call(addressId88IIr, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveOJJJEqb = await Revive.new({from: accounts[3]});
		const uintGbwLaaa = BigInt("1180")
		const addresskueci2D = accounts[2]
		const addressFAo2OBo = accounts[4]
		const addressTnJL9WP = accounts[4]
		const addresseKf4Cso = accounts[0]
		const addressDQPSbdj = accounts[4]
		const addresswP3LcIT = "0x0000000000000000000000000000000000000001"
		const addressFrADtR = accounts[0]
		const addressRtEUk8f = accounts[1]
		const addressQXg6Rya = accounts[1]
//		const boolAzUaasQ = await ReviveOJJJEqb.transferFrom.call(addressFAo2OBo, addresskueci2D, uintGbwLaaa, {from: accounts[5]});
//		const uint256S0NGNcS = await ReviveOJJJEqb.allowance.call(addresseKf4Cso, addressTnJL9WP, {from: accounts[5]});
//		const uint256BCHNFSa = await ReviveOJJJEqb.getUnlockableTokens.call(addressDQPSbdj, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256ed30h6D = await ReviveOJJJEqb.allowance.call(addressFrADtR, addresswP3LcIT, {from: accounts[3]});
//		const uint256qpFNZRL = await ReviveOJJJEqb.allowance.call(addressQXg6Rya, addressRtEUk8f, {from: accounts[2]});

		await expect(ReviveOJJJEqb.transferFrom.call(addressFAo2OBo, addresskueci2D, uintGbwLaaa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveeMCWmz = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const byteGWGzMfF = "0x021f161007140b1d1503151c06120f07180b041e19160f090d1e0c1c17081809"
		const addresspCJy3Jo = accounts[2]
		const uintws6p1Uq = BigInt("128")
		const byteAwAoGmr = "0x0518050a141d0f1018071e090c1d060f1901171808030e13010e0900081a1802"
		const uintedZRgK = BigInt("398")
		const addressYqZuoYc = accounts[3]
		const uintuwS4NzL = BigInt("1135")
		const uintGVANFXD = BigInt("729")
		const byteAnH0gtf = "0x180a1d1c09010a0c00031d0f0f0e0214151601170e0000111300150c1e0f1a0b"
		const uint256yuWRTVa = await ReviveeMCWmz.tokensUnlockable.call(addresspCJy3Jo, byteGWGzMfF, {from: accounts[1]});
		const boolOdsDzM = await ReviveeMCWmz.increaseLockAmount.call(byteAwAoGmr, uintws6p1Uq, {from: accounts[4]});
		const boolRU618JH = await ReviveeMCWmz.decreaseAllowance.call(addressYqZuoYc, uintedZRgK, {from: accounts[3]});
		const boolwJHk7PP = await ReviveeMCWmz.lock.call(byteAnH0gtf, uintGVANFXD, uintuwS4NzL, {from: accounts[1]});
	});

	it('test for Revive', async () => {
		const ReviveKOC2F2a = await Revive.new({from: accounts[0]});
		const uintsTMYZd5 = BigInt("439")
		const uintKBQo8Kn = BigInt("1484")
		const uintgyiWtD6 = BigInt("1809")
		const byteAu6RBvM = "0x0206110205141215141d1e0c00110e1005130d1d1112180c0e1115201303001a"
//		const uint256FRpJcAI = await ReviveKOC2F2a.recoverERC20.call(uintsTMYZd5, {from: accounts[5]});
//		await ReviveKOC2F2a.onlyOwner.call({from: accounts[2]});
//		const boolANFnGQW = await ReviveKOC2F2a.lock.call(byteAu6RBvM, uintgyiWtD6, uintKBQo8Kn, {from: accounts[1]});

		await expect(ReviveKOC2F2a.recoverERC20.call(uintsTMYZd5, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivepOPCekk = await Revive.new({from: accounts[4]});
		const addressY2E3PD6 = accounts[0]
		const addressz9Dhli = accounts[3]
		const uintpJjxhf = BigInt("1909")
		const uintubTgvwk = BigInt("793")
		const byteBjW1wov = "0x1a050f1f1a021501011a1d0106111a0c081a04121c0d0515120f17110b200e15"
		const addressE6QKnDI = "0x0000000000000000000000000000000000000001"
		const uintf3JlTJu = BigInt("1277")
		const addressRwXqlp = accounts[0]
		const uint256ECxWbQ = await RevivepOPCekk.allowance.call(addressz9Dhli, addressY2E3PD6, {from: accounts[3]});
//		await RevivepOPCekk.renounceOwnership.call({from: accounts[2]});
//		const boolunvaIX1 = await RevivepOPCekk.transferWithLock.call(addressE6QKnDI, byteBjW1wov, uintubTgvwk, uintpJjxhf, {from: accounts[1]});
//		await RevivepOPCekk.onlyOwner.call({from: accounts[4]});
//		const boolPB2zDOI = await RevivepOPCekk.decreaseAllowance.call(addressRwXqlp, uintf3JlTJu, {from: accounts[3]});

		assert.equal(uint256ECxWbQ, BigInt("0"))
		await expect(RevivepOPCekk.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveO8dxgO1 = await Revive.new({from: accounts[2]});
		const uintJv5oKjG = BigInt("567")
		const byteSfzFbyX = "0x1f0b130914020e181d190a0a201704031d1c081e0a14020602190613190c1f11"
		const uintPlOEQu = BigInt("103")
		const byteILG3rxI = "0x0b191f1d00160a0b010c08100e0d1c1b19141201190e070d19051d13161c0101"
		const uintJd1Lh3K = BigInt("851")
		const uintT7A7ci = BigInt("371")
		const byteJVqegTv = "0x20190713101416071b0a191a1a1c041617061101140701150104151507000c11"
//		const boolxEMvT5 = await ReviveO8dxgO1.extendLock.call(byteSfzFbyX, uintJv5oKjG, {from: accounts[0]});
//		const boolxaUSoMR = await ReviveO8dxgO1.increaseLockAmount.call(byteILG3rxI, uintPlOEQu, {from: "0x0000000000000000000000000000000000000001"});
//		const boolv8zMG8A = await ReviveO8dxgO1.lock.call(byteJVqegTv, uintT7A7ci, uintJd1Lh3K, {from: accounts[4]});
//		await ReviveO8dxgO1.renounceOwnership.call({from: accounts[5]});

		await expect(ReviveO8dxgO1.extendLock.call(byteSfzFbyX, uintJv5oKjG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveEOfOwv9 = await Revive.new({from: accounts[0]});
		const uintJEWsLAs = BigInt("694")
		const addressur9SnZF = accounts[3]
		const addressWcnXAw5 = accounts[4]
		const uintjgDToi = BigInt("855")
		const addressLxle6PG = accounts[4]
//		await ReviveEOfOwv9.renounceOwnership.call({from: accounts[0]});
//		const boolWnhLbc4 = await ReviveEOfOwv9.increaseAllowance.call(addressur9SnZF, uintJEWsLAs, {from: accounts[0]});
//		await ReviveEOfOwv9.renounceOwnership.call({from: accounts[4]});
//		const uint256WE4THQL = await ReviveEOfOwv9.getUnlockableTokens.call(addressWcnXAw5, {from: accounts[3]});
//		const boolZ9zPiJL = await ReviveEOfOwv9.decreaseAllowance.call(addressLxle6PG, uintjgDToi, {from: accounts[0]});

		await expect(ReviveEOfOwv9.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const addressGgd1RVm = accounts[2]
		const addressZ1zIwbR = accounts[0]
		const uintPKSZHkf = BigInt("25")
		const uintFVoxDIS = BigInt("579")
		const byteDF6t0l9 = "0x06180205071a12010d0f1f001c1114131513050e1f100f12080e161f090e1310"
		const uint256GORFCXw = await ReviveVwZOQgs.totalBalanceOf.call(addressGgd1RVm, {from: accounts[4]});
		const uint256OtglETM = await ReviveVwZOQgs.balanceOf.call(addressZ1zIwbR, {from: accounts[1]});
//		const boolXGhMUzj = await ReviveVwZOQgs.lock.call(byteDF6t0l9, uintFVoxDIS, uintPKSZHkf, {from: accounts[2]});
//		await ReviveVwZOQgs.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256GORFCXw, BigInt("0"))
		assert.equal(uint256OtglETM, BigInt("0"))
		await expect(ReviveVwZOQgs.lock.call(byteDF6t0l9, uintFVoxDIS, uintPKSZHkf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const addressw9Glod5 = accounts[1]
		const addressHB7Xm7Z = accounts[2]
		const addressU3SxNn9 = accounts[1]
		const uint256c4i9Ror = await ReviveVwZOQgs.unlock.call(addressw9Glod5, {from: accounts[3]});
		const uint256GORFCXw = await ReviveVwZOQgs.totalBalanceOf.call(addressHB7Xm7Z, {from: accounts[4]});
//		await ReviveVwZOQgs.onlyOwner.call({from: accounts[5]});
//		const uint256OtglETM = await ReviveVwZOQgs.balanceOf.call(addressU3SxNn9, {from: accounts[1]});
//		await ReviveVwZOQgs.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256GORFCXw, BigInt("0"))
		assert.equal(uint256c4i9Ror, BigInt("0"))
		await expect(ReviveVwZOQgs.onlyOwner.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const addressdPLrhzA = accounts[2]
		const addressLwvDvSA = accounts[2]
		const uintopgnuHA = BigInt("481")
		const bytefPGLR1H = "0x001419000309121a141419101a0905050109010e1d121e03060d1e1902161718"
		const addresszK6L4hb = accounts[5]
		const byteePI2SKL = "0x0404031c101c0a060d15021508150a1305141a041003011f101f03071c051509"
		const addressMvNB01s = accounts[1]
		const uint256MzcD8RL = await ReviveVwZOQgs.getUnlockableTokens.call(addressdPLrhzA, {from: accounts[1]});
		const uint256OtglETM = await ReviveVwZOQgs.balanceOf.call(addressLwvDvSA, {from: accounts[1]});
		const uint256SAMgkdj = await ReviveVwZOQgs.tokensLockedAtTime.call(addresszK6L4hb, bytefPGLR1H, uintopgnuHA, {from: accounts[1]});
//		await ReviveVwZOQgs.onlyOwner.call({from: accounts[1]});
//		const uint256gWaRhJU = await ReviveVwZOQgs.tokensUnlockable.call(addressMvNB01s, byteePI2SKL, {from: accounts[4]});

		assert.equal(uint256MzcD8RL, BigInt("0"))
		assert.equal(uint256OtglETM, BigInt("0"))
		assert.equal(uint256SAMgkdj, BigInt("0"))
		await expect(ReviveVwZOQgs.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const addressgb7raVD = accounts[2]
		const addressp22mmN = accounts[0]
		const uintPyewyFx = BigInt("730")
		const addressazWOC2x = accounts[2]
		const byteniPwbp = "0x13190a0b1007100c1713161310151a071004130f0e1a000b0e19151c1b1e041e"
		const addressyKHwlpY = accounts[1]
		const uintYe3A4hU = BigInt("25")
		const uintVtaCkSL = BigInt("579")
		const byteFJ5cLoa = "0x06180205071a12010d0f1f001c1114131513050e1f100f12080e161f090e1310"
		const uint256GORFCXw = await ReviveVwZOQgs.totalBalanceOf.call(addressgb7raVD, {from: accounts[4]});
		const uint256OtglETM = await ReviveVwZOQgs.balanceOf.call(addressp22mmN, {from: accounts[1]});
		const boolEH0YdeW = await ReviveVwZOQgs.increaseAllowance.call(addressazWOC2x, uintPyewyFx, {from: accounts[0]});
		const uint256Z8V7lhA = await ReviveVwZOQgs.tokensUnlockable.call(addressyKHwlpY, byteniPwbp, {from: accounts[4]});
//		const boolXGhMUzj = await ReviveVwZOQgs.lock.call(byteFJ5cLoa, uintVtaCkSL, uintYe3A4hU, {from: accounts[2]});
//		await ReviveVwZOQgs.onlyOwner.call({from: accounts[1]});

		assert.equal(boolEH0YdeW, true)
		assert.equal(uint256GORFCXw, BigInt("0"))
		assert.equal(uint256OtglETM, BigInt("0"))
		assert.equal(uint256Z8V7lhA, BigInt("0"))
		await expect(ReviveVwZOQgs.lock.call(byteFJ5cLoa, uintVtaCkSL, uintYe3A4hU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const addressZMPlUMV = accounts[2]
		const addressvSPQS2I = accounts[1]
		const uint256MzcD8RL = await ReviveVwZOQgs.getUnlockableTokens.call(addressZMPlUMV, {from: accounts[1]});
		const uint256OtglETM = await ReviveVwZOQgs.balanceOf.call(addressvSPQS2I, {from: accounts[1]});
		const addressp2FQKg = await ReviveVwZOQgs.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		await ReviveVwZOQgs.onlyOwner.call({from: accounts[1]});

		assert.equal(addressp2FQKg, 0x410bBa132bC3DeB5504BaCF41693FAE6edA16EAb)
		assert.equal(uint256MzcD8RL, BigInt("0"))
		assert.equal(uint256OtglETM, BigInt("0"))
		await expect(ReviveVwZOQgs.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const uintF0WKC78 = BigInt("39")
		const addressI5GFVAZ = accounts[4]
		const addressfO0rtzU = accounts[2]
		const uintXyGRxV = BigInt("81")
		const uintglnNf63 = BigInt("579")
		const byteXr25g8e = "0x06180205071a12010d0f1f001c1114131513050e1f100f12080e161f090e1310"
//		const boolRkSjqdW = await ReviveVwZOQgs.decreaseAllowance.call(addressI5GFVAZ, uintF0WKC78, {from: accounts[1]});
//		const uint256GORFCXw = await ReviveVwZOQgs.totalBalanceOf.call(addressfO0rtzU, {from: accounts[4]});
//		const boolXGhMUzj = await ReviveVwZOQgs.lock.call(byteXr25g8e, uintglnNf63, uintXyGRxV, {from: accounts[2]});
//		await ReviveVwZOQgs.onlyOwner.call({from: accounts[1]});

		await expect(ReviveVwZOQgs.decreaseAllowance.call(addressI5GFVAZ, uintF0WKC78, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveQWItTp = await Revive.new({from: accounts[5]});
		const bytepV86dXG = "0x0209111515141b0a05190d1217101001150d0b0509121d07011b17000b130d0e"
		const addressBrMALE6 = accounts[0]
		const uint4P0dtm = BigInt("948")
		const addressknRdvbF = accounts[4]
		const uintbbNu9OD = BigInt("255")
		const addressMSTnAd9 = accounts[4]
		const uint2565dqZ28 = await ReviveQWItTp.tokensLocked.call(addressBrMALE6, bytepV86dXG, {from: accounts[4]});
		const boolZxT5zk = await ReviveQWItTp.approve.call(addressknRdvbF, uint4P0dtm, {from: accounts[5]});
//		const addressyQGX4d9 = await ReviveQWItTp.recoverERC20.call(addressMSTnAd9, uintbbNu9OD, {from: accounts[4]});

		assert.equal(boolZxT5zk, true)
		assert.equal(uint2565dqZ28, BigInt("0"))
		await expect(ReviveQWItTp.recoverERC20.call(addressMSTnAd9, uintbbNu9OD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const addressDdTJTXr = accounts[4]
		const addressNqtAVoo = accounts[4]
		const addressiJTOWf6 = accounts[2]
		const addressEr37wqA = accounts[4]
		const uint256O2UEmIY = await ReviveVwZOQgs.allowance.call(addressNqtAVoo, addressDdTJTXr, {from: "0x0000000000000000000000000000000000000001"});
		const uint256GORFCXw = await ReviveVwZOQgs.totalBalanceOf.call(addressiJTOWf6, {from: accounts[4]});
		const boolmNb5EeU = await ReviveVwZOQgs.isOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const addresscd8JE6V = await ReviveVwZOQgs.transferOwnership.call(addressEr37wqA, {from: accounts[4]});

		assert.equal(boolmNb5EeU, false)
		assert.equal(uint256GORFCXw, BigInt("0"))
		assert.equal(uint256O2UEmIY, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const addressjy7aNtS = accounts[2]
		const uintRIRjLsp = BigInt("1988")
		const uintClWOGeG = BigInt("1950")
		const byteeTlKOSF = "0x0f170e06091300081a070c131314091e0c0814120d040200121a150e0801180d"
		const addressTgZInrp = accounts[1]
		const uintaeBV58b = BigInt("811")
		const byteHPxcLwT = "0x180f1f08181e160a1f111b12041a0c132018161d191b0a140105140603181204"
		const addresswe9xX7 = accounts[4]
		const addressTRgjQnA = accounts[2]
		const uintmLPbZqZ = BigInt("481")
		const byteaWlM7BK = "0x001419000309121a141419101a0905050109010e1d121e03060d1e1902161718"
		const addresse6kMKeM = accounts[5]
		const byteML82Ujk = "0x0404031c101c0a060d15021508150a1305141a041003011f101f03071c051509"
		const addressJ7nOKzX = accounts[1]
		const uint256MzcD8RL = await ReviveVwZOQgs.getUnlockableTokens.call(addressjy7aNtS, {from: accounts[1]});
		const boolUQdvIZq = await ReviveVwZOQgs.isOwner.call({from: accounts[3]});
//		const booldbahT8 = await ReviveVwZOQgs.transferWithLock.call(addressTgZInrp, byteeTlKOSF, uintClWOGeG, uintRIRjLsp, {from: accounts[2]});
//		const uint256OJdWkEo = await ReviveVwZOQgs.tokensLockedAtTime.call(addresswe9xX7, byteHPxcLwT, uintaeBV58b, {from: accounts[1]});
//		const uint256OtglETM = await ReviveVwZOQgs.balanceOf.call(addressTRgjQnA, {from: accounts[1]});
//		const uint256SAMgkdj = await ReviveVwZOQgs.tokensLockedAtTime.call(addresse6kMKeM, byteaWlM7BK, uintmLPbZqZ, {from: accounts[1]});
//		await ReviveVwZOQgs.onlyOwner.call({from: accounts[1]});
//		const uint256gWaRhJU = await ReviveVwZOQgs.tokensUnlockable.call(addressJ7nOKzX, byteML82Ujk, {from: accounts[4]});

		assert.equal(boolUQdvIZq, false)
		assert.equal(uint256MzcD8RL, BigInt("0"))
		await expect(ReviveVwZOQgs.transferWithLock.call(addressTgZInrp, byteeTlKOSF, uintClWOGeG, uintRIRjLsp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const uintWvDQWI0 = BigInt("1594")
		const uint7qQu99 = BigInt("935")
		const byteRhJcf4j = "0x1b01081a1d180e0a1f1907031c09110d0c07010d0418010d031b1a040f1e0e15"
		const addressoR63ndS = accounts[2]
		const addressWffbczX = accounts[0]
		const uintqNShxTv = BigInt("558")
		const addressqLdYEOr = accounts[0]
//		const uint256MmcQ2Hl = await ReviveVwZOQgs.recoverERC20.call(uintWvDQWI0, {from: accounts[3]});
//		const uint256HQXfU0O = await ReviveVwZOQgs.tokensLockedAtTime.call(addressoR63ndS, byteRhJcf4j, uint7qQu99, {from: accounts[3]});
//		const uint256OtglETM = await ReviveVwZOQgs.balanceOf.call(addressWffbczX, {from: accounts[1]});
//		const boolpOMif9y = await ReviveVwZOQgs.approve.call(addressqLdYEOr, uintqNShxTv, {from: accounts[2]});

		await expect(ReviveVwZOQgs.recoverERC20.call(uintWvDQWI0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveO8dxgO1 = await Revive.new({from: accounts[2]});
		const uintU5kKEcM = BigInt("119")
		const bytezmIvNfd = "0x0b191f1d00160a0b010c08100e0d1c1b19141201190e070d19051d13161c0101"
		const addressGxyt3Jq = accounts[1]
		const addressNnszKK5 = accounts[3]
		const uintzQZZLyB = BigInt("510")
		const byteVnFWfl8 = "0x02040f121f1c111017180b18011f180f1f0e081f0a00111b121f091411191f0e"
		const addressyg5Zix5 = accounts[0]
		const uint256FeTVvWi = await ReviveO8dxgO1.totalSupply.call({from: accounts[0]});
//		const boolxaUSoMR = await ReviveO8dxgO1.increaseLockAmount.call(bytezmIvNfd, uintU5kKEcM, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256m3hLPQw = await ReviveO8dxgO1.allowance.call(addressNnszKK5, addressGxyt3Jq, {from: accounts[5]});
//		const uint256N10p7l = await ReviveO8dxgO1.tokensLockedAtTime.call(addressyg5Zix5, byteVnFWfl8, uintzQZZLyB, {from: accounts[3]});

		assert.equal(uint256FeTVvWi, BigInt("3000000000000000000000000000"))
		await expect(ReviveO8dxgO1.increaseLockAmount.call(bytezmIvNfd, uintU5kKEcM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJHRE3cc = await Revive.new({from: accounts[1]});
		const addressBsISKlG = accounts[4]
		const uintcOb2vyN = BigInt("2004")
		const addressE1oDDPj = accounts[1]
		const uintugSMmUz = BigInt("863")
		const uint256oCvXdv7 = await ReviveJHRE3cc.unlock.call(addressBsISKlG, {from: accounts[4]});
		const boolFashTOL = await ReviveJHRE3cc.increaseAllowance.call(addressE1oDDPj, uintcOb2vyN, {from: accounts[3]});
//		const uint256j9YBtfB = await ReviveJHRE3cc.recoverERC20.call(uintugSMmUz, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolFashTOL, true)
		assert.equal(uint256oCvXdv7, BigInt("0"))
		await expect(ReviveJHRE3cc.recoverERC20.call(uintugSMmUz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivehUcftQk = await Revive.new({from: accounts[2]});
		const uintJK8HjaW = BigInt("402")
		const uintKb6oXlx = BigInt("258")
		const addressO8zgCaP = accounts[5]
		const uintygB5vtW = BigInt("430")
		const byteKyELceU = "0x13011a041b151103141903050f090609120b1a0d1b041b1c0d17091c15170b15"
		const addressr32gTY = "0x0000000000000000000000000000000000000001"
//		const uint256HN9YzUg = await RevivehUcftQk.recoverERC20.call(uintJK8HjaW, {from: accounts[4]});
//		const boolbSfNVuE = await RevivehUcftQk.transfer.call(addressO8zgCaP, uintKb6oXlx, {from: accounts[1]});
//		const uint256jxfLN11 = await RevivehUcftQk.tokensLockedAtTime.call(addressr32gTY, byteKyELceU, uintygB5vtW, {from: accounts[3]});
//		await RevivehUcftQk.onlyOwner.call({from: accounts[0]});

		await expect(RevivehUcftQk.recoverERC20.call(uintJK8HjaW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const addresspjNdnYS = accounts[4]
		const uintOw19Sdp = BigInt("1055")
		const uint256MzcD8RL = await ReviveVwZOQgs.getUnlockableTokens.call(addresspjNdnYS, {from: accounts[1]});
//		const uint256YXA2Qn = await ReviveVwZOQgs.recoverERC20.call(uintOw19Sdp, {from: accounts[1]});

		assert.equal(uint256MzcD8RL, BigInt("0"))
		await expect(ReviveVwZOQgs.recoverERC20.call(uintOw19Sdp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const addressgygS1AW = accounts[4]
		const uintQJ6841 = BigInt("1908")
		const uint256GORFCXw = await ReviveVwZOQgs.totalBalanceOf.call(addressgygS1AW, {from: accounts[4]});
//		const uint256H0SS96h = await ReviveVwZOQgs.recoverERC20.call(uintQJ6841, {from: accounts[0]});

		assert.equal(uint256GORFCXw, BigInt("3000000000000000000000000000"))
		await expect(ReviveVwZOQgs.recoverERC20.call(uintQJ6841, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const addressSXIrNr = accounts[4]
		const uintgN2TyB = BigInt("429")
		const addressNoQyUU7 = accounts[4]
		const uint256MzcD8RL = await ReviveVwZOQgs.getUnlockableTokens.call(addressSXIrNr, {from: accounts[1]});
//		const addressD476F9r = await ReviveVwZOQgs.recoverERC20.call(addressNoQyUU7, uintgN2TyB, {from: accounts[4]});

		assert.equal(uint256MzcD8RL, BigInt("0"))
		await expect(ReviveVwZOQgs.recoverERC20.call(addressNoQyUU7, uintgN2TyB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJHRE3cc = await Revive.new({from: accounts[1]});
		const uintkcbzXp9 = BigInt("116")
		const bytepLSNESU = "0x1f0805100c1c041302191e1f0a1510170d1b080519091f1a161f0e0b081c020a"
		const addressFcq5TA3 = accounts[0]
		const addressFUVNei0 = accounts[4]
		const uintxCC8ZY9 = BigInt("5")
		const uint256x7rCQVI = await ReviveJHRE3cc.tokensLockedAtTime.call(addressFcq5TA3, bytepLSNESU, uintkcbzXp9, {from: accounts[1]});
		const uint256oCvXdv7 = await ReviveJHRE3cc.unlock.call(addressFUVNei0, {from: accounts[4]});
//		const uint256gR95bQF = await ReviveJHRE3cc.recoverERC20.call(uintxCC8ZY9, {from: accounts[2]});

		assert.equal(uint256oCvXdv7, BigInt("0"))
		assert.equal(uint256x7rCQVI, BigInt("0"))
		await expect(ReviveJHRE3cc.recoverERC20.call(uintxCC8ZY9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const uintlrQA30y = BigInt("839")
		const addressxRRsj7H = accounts[3]
		const addressQFNR6Z6 = accounts[2]
//		const uint256P7yM8sh = await ReviveVwZOQgs.recoverERC20.call(uintlrQA30y, {from: accounts[2]});
//		const uint256MzcD8RL = await ReviveVwZOQgs.getUnlockableTokens.call(addressxRRsj7H, {from: accounts[1]});
//		const addressHh4XyjA = await ReviveVwZOQgs.transferOwnership.call(addressQFNR6Z6, {from: accounts[2]});

		await expect(ReviveVwZOQgs.recoverERC20.call(uintlrQA30y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveRH1UVX = await Revive.new({from: accounts[1]});
		const uintJLggRsW = BigInt("1164")
		const addressE7P3PUh = accounts[4]
		const uintlTsakp0 = BigInt("1757")
		const uintghb7WOx = BigInt("1458")
		const bytet1O4fX9 = "0x0e0a18171301110e160804060b15061d111619061e1e18070a0f1f09061d2002"
		const addressv2kHtVT = accounts[5]
		const boollkcHgug = await ReviveRH1UVX.isOwner.call({from: accounts[4]});
		const boolXaTAq03 = await ReviveRH1UVX.approve.call(addressE7P3PUh, uintJLggRsW, {from: "0x0000000000000000000000000000000000000001"});
		const addresskiS6hNb = await ReviveRH1UVX.owner.call({from: accounts[0]});
//		const uint256pqoGCyY = await ReviveRH1UVX.recoverERC20.call(uintlTsakp0, {from: accounts[1]});
//		const uint256EOWHrjA = await ReviveRH1UVX.tokensLockedAtTime.call(addressv2kHtVT, bytet1O4fX9, uintghb7WOx, {from: accounts[4]});

		assert.equal(addresskiS6hNb, 0xdA09b84bc9B66F7E4f87362643bA4E60cd1d2657)
		assert.equal(boolXaTAq03, true)
		assert.equal(boollkcHgug, false)
		await expect(ReviveRH1UVX.recoverERC20.call(uintlTsakp0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveESBzowN = await Revive.new({from: accounts[4]});
		const uintYkAY6el = BigInt("427")
		const addresstD1AM90 = accounts[4]
		const uintt5RRbma = BigInt("1826")
		const uintcAvoABM = BigInt("1482")
		const addressRWY2nhH = accounts[2]
		const addressnsJVt6o = accounts[4]
		const boolmsV9Ak = await ReviveESBzowN.approve.call(addresstD1AM90, uintYkAY6el, {from: accounts[1]});
//		const uint256SRDDDC5 = await ReviveESBzowN.recoverERC20.call(uintt5RRbma, {from: accounts[3]});
//		const uint256zYKIjOb = await ReviveESBzowN.totalSupply.call({from: accounts[2]});
//		const addressu294f5v = await ReviveESBzowN.recoverERC20.call(addressRWY2nhH, uintcAvoABM, {from: accounts[0]});
//		const uint256EZDUYj6 = await ReviveESBzowN.getUnlockableTokens.call(addressnsJVt6o, {from: accounts[4]});

		assert.equal(boolmsV9Ak, true)
		await expect(ReviveESBzowN.recoverERC20.call(uintt5RRbma, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const addresshqqNtGG = accounts[4]
		const uintxDVWk4v = BigInt("1862")
		const addressjP6w67I = accounts[1]
		const uint256MzcD8RL = await ReviveVwZOQgs.getUnlockableTokens.call(addresshqqNtGG, {from: accounts[1]});
//		const uint256Jrq4Vw2 = await ReviveVwZOQgs.recoverERC20.call(uintxDVWk4v, {from: accounts[0]});
//		const uint256PLS10Fe = await ReviveVwZOQgs.balanceOf.call(addressjP6w67I, {from: accounts[3]});

		assert.equal(uint256MzcD8RL, BigInt("0"))
		await expect(ReviveVwZOQgs.recoverERC20.call(uintxDVWk4v, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveXJgT7gW = await Revive.new({from: accounts[4]});
		const addressU3Jwce = accounts[2]
		const addressP9obxjA = accounts[2]
		const uintxCg081B = BigInt("639")
		const address9FU4vh = accounts[1]
		const uintScsXp3r = BigInt("879")
		const byteAkDFnFR = "0x0c0c051319090c160c011f15121807161e081414121d02190616050c05171c00"
		const addressbx6YiW8 = accounts[4]
		const uintJ8lwYwT = BigInt("1305")
		const addressvRwAml = accounts[2]
		const addressQcfe2wA = await ReviveXJgT7gW.owner.call({from: accounts[5]});
		const uint256RpkPlvf = await ReviveXJgT7gW.allowance.call(addressP9obxjA, addressU3Jwce, {from: accounts[1]});
//		const uint256ACyoiIL = await ReviveXJgT7gW.recoverERC20.call(uintxCg081B, {from: accounts[3]});
//		const addressGupgdxa = await ReviveXJgT7gW.transferOwnership.call(address9FU4vh, {from: accounts[4]});
//		const uint256sgEXTsz = await ReviveXJgT7gW.tokensLockedAtTime.call(addressbx6YiW8, byteAkDFnFR, uintScsXp3r, {from: accounts[2]});
//		const boolZwhB3S = await ReviveXJgT7gW.decreaseAllowance.call(addressvRwAml, uintJ8lwYwT, {from: accounts[2]});

		assert.equal(addressQcfe2wA, 0x410bBa132bC3DeB5504BaCF41693FAE6edA16EAb)
		assert.equal(uint256RpkPlvf, BigInt("0"))
		await expect(ReviveXJgT7gW.recoverERC20.call(uintxCg081B, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const addressVVl68EV = accounts[3]
		const byteMECdnU5 = "0x0b180b16190e130b0b030c071717121f0f0d181c10000c020e0111020902100c"
		const addressqbrWgSb = "0x0000000000000000000000000000000000000001"
		const uintI9Em9N = BigInt("362")
		const uint256GORFCXw = await ReviveVwZOQgs.totalBalanceOf.call(addressVVl68EV, {from: accounts[4]});
		const uint256c0x8xVm = await ReviveVwZOQgs.tokensUnlockable.call(addressqbrWgSb, byteMECdnU5, {from: accounts[0]});
//		const uint256hH9yD9P = await ReviveVwZOQgs.recoverERC20.call(uintI9Em9N, {from: accounts[2]});

		assert.equal(uint256GORFCXw, BigInt("0"))
		assert.equal(uint256c0x8xVm, BigInt("0"))
		await expect(ReviveVwZOQgs.recoverERC20.call(uintI9Em9N, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const uintAhOY57T = BigInt("319")
		const uintgXMsW8 = BigInt("25")
		const uintieeWFNh = BigInt("1777")
		const bytegFEm2QS = "0x06180205071a12010d0f1f001c1114131513050e1f100f12080e161f090e1310"
//		const uint256zN8dCJ = await ReviveVwZOQgs.recoverERC20.call(uintAhOY57T, {from: accounts[5]});
//		const boolXGhMUzj = await ReviveVwZOQgs.lock.call(bytegFEm2QS, uintieeWFNh, uintgXMsW8, {from: accounts[2]});

		await expect(ReviveVwZOQgs.recoverERC20.call(uintAhOY57T, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJHRE3cc = await Revive.new({from: accounts[1]});
		const uintWuD8XFT = BigInt("51")
		const byteyWWYJ48 = "0x170408161215160f05111a1d0110121613081b16140b16021016081608041401"
		const addressdQiMcv1 = accounts[4]
		const uintyd9pHj2 = BigInt("173")
		const uintvtYYKUV = BigInt("1339")
		const uintMHMwIZo = BigInt("1296")
		const bytesAPs8y = "0x1e110a0910190f0f0e141103051b0b10061208051f17171e1d191f060618191f"
		const uint256xGuN0oL = await ReviveJHRE3cc.tokensLockedAtTime.call(addressdQiMcv1, byteyWWYJ48, uintWuD8XFT, {from: accounts[3]});
		const addressT8f2WX7 = await ReviveJHRE3cc.owner.call({from: accounts[5]});
//		const uint256THrQRQ0 = await ReviveJHRE3cc.recoverERC20.call(uintyd9pHj2, {from: "0x0000000000000000000000000000000000000001"});
//		const boolLbpZVXp = await ReviveJHRE3cc.lock.call(bytesAPs8y, uintMHMwIZo, uintvtYYKUV, {from: accounts[3]});

		assert.equal(addressT8f2WX7, 0xdA09b84bc9B66F7E4f87362643bA4E60cd1d2657)
		assert.equal(uint256xGuN0oL, BigInt("0"))
		await expect(ReviveJHRE3cc.recoverERC20.call(uintyd9pHj2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJHRE3cc = await Revive.new({from: accounts[1]});
		const uintvrWDX3 = BigInt("51")
		const byteCH37aQm = "0x170408161215160f05111a1d0110121613081b16140b16021016081608041401"
		const addressmrDWaOi = accounts[4]
		const uintNgyNagu = BigInt("295")
		const uintgVGH2N6 = BigInt("1339")
		const uintshwAYf9 = BigInt("1304")
		const bytePsIbk3u = "0x1e110a0910190f0f0e141103051b0b10061208051f17171e1d191f060618191f"
		const uint256xGuN0oL = await ReviveJHRE3cc.tokensLockedAtTime.call(addressmrDWaOi, byteCH37aQm, uintvrWDX3, {from: accounts[3]});
//		const uint256ajwhwb1 = await ReviveJHRE3cc.recoverERC20.call(uintNgyNagu, {from: accounts[2]});
//		const boolLbpZVXp = await ReviveJHRE3cc.lock.call(bytePsIbk3u, uintshwAYf9, uintgVGH2N6, {from: accounts[3]});

		assert.equal(uint256xGuN0oL, BigInt("0"))
		await expect(ReviveJHRE3cc.recoverERC20.call(uintNgyNagu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJHRE3cc = await Revive.new({from: accounts[1]});
		const uintlICRbgU = BigInt("860")
		const uintMAEWo24 = BigInt("51")
		const bytezNJvgyB = "0x170408161215160f05111a1d0110121613081b16140b16021016081608041401"
		const addressbdRg98 = accounts[4]
		const byteDHUHMZk = "0x1f062019030816120e0a191c1d0f170a20091f080f14080b02141d1617170c19"
		const addressZMdZXlo = accounts[3]
//		const uint256IBt7m4F = await ReviveJHRE3cc.recoverERC20.call(uintlICRbgU, {from: accounts[2]});
//		const uint256xGuN0oL = await ReviveJHRE3cc.tokensLockedAtTime.call(addressbdRg98, bytezNJvgyB, uintMAEWo24, {from: accounts[3]});
//		const uint256rTB6rwM = await ReviveJHRE3cc.tokensLocked.call(addressZMdZXlo, byteDHUHMZk, {from: accounts[5]});

		await expect(ReviveJHRE3cc.recoverERC20.call(uintlICRbgU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveZNxT9Yw = await Revive.new({from: accounts[1]});
		const uintE7FP95j = BigInt("710")
		const byte8O4YqC = "0x14051a05140a1515181f011f15151d1f1814101607191816020b1d15071d1b0f"
		const addressIbpOSxl = accounts[2]
		const uintxbqda4g = BigInt("332")
		const addressFrS2IUx = accounts[2]
		const uintOhOEXlj = BigInt("132")
		const uintviOOZmX = BigInt("260")
		const bytev58EgSR = "0x0119110110191d0b100f171d0210030c05180e1e1f0e13201f07091a1e131210"
//		const uint256umy35mi = await ReviveZNxT9Yw.recoverERC20.call(uintE7FP95j, {from: accounts[1]});
//		const uint256T9BgVq5 = await ReviveZNxT9Yw.tokensLocked.call(addressIbpOSxl, byte8O4YqC, {from: accounts[4]});
//		const addressUnzOMs5 = await ReviveZNxT9Yw.recoverERC20.call(addressFrS2IUx, uintxbqda4g, {from: accounts[4]});
//		const boolhPN9cav = await ReviveZNxT9Yw.lock.call(bytev58EgSR, uintviOOZmX, uintOhOEXlj, {from: accounts[4]});

		await expect(ReviveZNxT9Yw.recoverERC20.call(uintE7FP95j, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJHRE3cc = await Revive.new({from: accounts[1]});
		const uintr2QZmC = BigInt("51")
		const byteEsl9Skg = "0x170408161215160f05111a1d0110121613081b16140b16021016081608041401"
		const addressxOJp7Z7 = accounts[5]
		const uintDnfyQmf = BigInt("338")
		const addressU1RbxJf = accounts[4]
		const uint256xGuN0oL = await ReviveJHRE3cc.tokensLockedAtTime.call(addressxOJp7Z7, byteEsl9Skg, uintr2QZmC, {from: accounts[3]});
//		const uint256jb8BAHr = await ReviveJHRE3cc.recoverERC20.call(uintDnfyQmf, {from: accounts[1]});
//		const uint256QIQ2NwO = await ReviveJHRE3cc.getUnlockableTokens.call(addressU1RbxJf, {from: accounts[1]});

		assert.equal(uint256xGuN0oL, BigInt("0"))
		await expect(ReviveJHRE3cc.recoverERC20.call(uintDnfyQmf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI9X5mi9 = await Revive.new({from: accounts[3]});
		const uintJoUPBgR = BigInt("1852")
		const addressPjM6kQB = accounts[0]
		const uintwSht5rY = BigInt("611")
		const uintHQNevLf = BigInt("933")
		const addressIPXuN6s = accounts[4]
		const uintrEH7Ojf = BigInt("373")
		const uintLaoGTCt = BigInt("300")
		const bytes2NxEKy = "0x151311140510021c20091d041a150902081f121f03171d0c020d061e1f0d0d11"
		const addressCN1F0Ef = accounts[2]
		const boolGNBv9xm = await ReviveI9X5mi9.approve.call(addressPjM6kQB, uintJoUPBgR, {from: accounts[4]});
//		const uint256ewRUBMp = await ReviveI9X5mi9.recoverERC20.call(uintwSht5rY, {from: accounts[4]});
//		const boolL8Gi9d5 = await ReviveI9X5mi9.decreaseAllowance.call(addressIPXuN6s, uintHQNevLf, {from: accounts[5]});
//		const addressk8mZYbw = await ReviveI9X5mi9.owner.call({from: accounts[2]});
//		const boolq2ftIT = await ReviveI9X5mi9.transferWithLock.call(addressCN1F0Ef, bytes2NxEKy, uintLaoGTCt, uintrEH7Ojf, {from: accounts[2]});

		assert.equal(boolGNBv9xm, true)
		await expect(ReviveI9X5mi9.recoverERC20.call(uintwSht5rY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveJHRE3cc = await Revive.new({from: accounts[1]});
		const addressber32xt = accounts[6]
		const uintB4uZDCl = BigInt("623")
		const uintOdvdgga = BigInt("745")
		const addressAzPVnKV = accounts[2]
		const uintIQQfces = BigInt("22")
		const byteWINgeTU = "0x170408161215160f05111a1d0110121613081b16140b16021016081608041401"
		const addressOhhj64h = accounts[4]
		const uint256jVlWnV = await ReviveJHRE3cc.balanceOf.call(addressber32xt, {from: accounts[1]});
//		const uint256DizdiL8 = await ReviveJHRE3cc.recoverERC20.call(uintB4uZDCl, {from: accounts[4]});
//		const boolWoucGVy = await ReviveJHRE3cc.increaseAllowance.call(addressAzPVnKV, uintOdvdgga, {from: accounts[5]});
//		const uint256xGuN0oL = await ReviveJHRE3cc.tokensLockedAtTime.call(addressOhhj64h, byteWINgeTU, uintIQQfces, {from: accounts[3]});

		assert.equal(uint256jVlWnV, BigInt("0"))
		await expect(ReviveJHRE3cc.recoverERC20.call(uintB4uZDCl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVwZOQgs = await Revive.new({from: accounts[4]});
		const uintdzUHDbJ = BigInt("738")
		const addressii1LiU = accounts[4]
		const addressBR3eNo = "0x0000000000000000000000000000000000000001"
//		const uint256Gy6b8a5 = await ReviveVwZOQgs.recoverERC20.call(uintdzUHDbJ, {from: accounts[3]});
//		const uint256GORFCXw = await ReviveVwZOQgs.totalBalanceOf.call(addressii1LiU, {from: accounts[4]});
//		const uint256yvHszyJ = await ReviveVwZOQgs.totalBalanceOf.call(addressBR3eNo, {from: accounts[3]});

		await expect(ReviveVwZOQgs.recoverERC20.call(uintdzUHDbJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefoDK63w = await Revive.new({from: accounts[0]});
		const addressAc3Awsk = accounts[3]
		const addresstWdnrkF = accounts[5]
		const addressYtv2aFC = "0x0000000000000000000000000000000000000001"
		const uintfcSp92u = BigInt("268")
		const addressZcbFxDe = await RevivefoDK63w.transferOwnership.call(addressAc3Awsk, {from: accounts[0]});
		const uint256YhNDf64 = await RevivefoDK63w.unlock.call(addresstWdnrkF, {from: accounts[4]});
		const uint256fr8JMbG = await RevivefoDK63w.getUnlockableTokens.call(addressYtv2aFC, {from: accounts[2]});
//		const uint256a5HVvct = await RevivefoDK63w.recoverERC20.call(uintfcSp92u, {from: accounts[0]});

		assert.equal(uint256YhNDf64, BigInt("0"))
		assert.equal(uint256fr8JMbG, BigInt("0"))
		await expect(RevivefoDK63w.recoverERC20.call(uintfcSp92u, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})