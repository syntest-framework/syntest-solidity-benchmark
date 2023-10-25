const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveyIXGtgV = await Revive.new({from: accounts[4]});
		const uintURmbQEU = BigInt("1054")
		const byteOOxyLrB = "0x0d1c1b1f0a181f0c00051000151e1e01091015141f1b13110606180302030b09"
		const byteuLwUTKo = "0x1e1d0608111512080e1a03141b121e13011f130a0a191b05160d1613100d1f01"
		const addressfFv1DY = accounts[5]
		const uintc4Viox8 = BigInt("307")
		const addressKl0v9gD = accounts[3]
		const uintNxPY4r = BigInt("836")
		const addresskpTKmNH = accounts[2]
		const addressglHKGDj = accounts[2]
//		const boolR2tJcYB = await ReviveyIXGtgV.increaseLockAmount.call(byteOOxyLrB, uintURmbQEU, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256AOxQs3f = await ReviveyIXGtgV.tokensUnlockable.call(addressfFv1DY, byteuLwUTKo, {from: accounts[3]});
//		const boolCMrAyEM = await ReviveyIXGtgV.increaseAllowance.call(addressKl0v9gD, uintc4Viox8, {from: accounts[0]});
//		const boolxBLJatA = await ReviveyIXGtgV.transfer.call(addresskpTKmNH, uintNxPY4r, {from: accounts[0]});
//		const boolQWOf15F = await ReviveyIXGtgV.isOwner.call({from: accounts[3]});
//		const uint256MCPcgIO = await ReviveyIXGtgV.totalBalanceOf.call(addressglHKGDj, {from: accounts[3]});

		await expect(ReviveyIXGtgV.increaseLockAmount.call(byteOOxyLrB, uintURmbQEU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveLhv1gnO = await Revive.new({from: accounts[4]});
		const uintAHXodFW = BigInt("1887")
		const uintpn3lhBk = BigInt("411")
		const byteuz3mZ3u = "0x0e150b180f0d1d0819070d0b1a171d00111e0d191f1315111c1e141a0b111310"
		const addressoxtpvvq = accounts[3]
		const uintKfJbzMP = BigInt("1280")
		const uintRkJMJAn = BigInt("402")
		const byteyrjrGxP = "0x09040e1505010c0d0a09070c1808192016061d031e081d031b0a111c0a191620"
		const uintZgV7QUM = BigInt("728")
		const byteQNtMubw = "0x100c1b1414191c041d0f0c1e031c1d11060a120a06000a0c171713150e041d0e"
		const addressvoUzn8e = accounts[4]
		const uintFqrU2br = BigInt("1236")
		const addresscyKUzEY = accounts[1]
		const boolko2JmV8 = await ReviveLhv1gnO.transferWithLock.call(addressoxtpvvq, byteuz3mZ3u, uintpn3lhBk, uintAHXodFW, {from: accounts[4]});
//		const boolTvNf2RI = await ReviveLhv1gnO.lock.call(byteyrjrGxP, uintRkJMJAn, uintKfJbzMP, {from: accounts[0]});
//		const uint256nECUt23 = await ReviveLhv1gnO.tokensLockedAtTime.call(addressvoUzn8e, byteQNtMubw, uintZgV7QUM, {from: accounts[3]});
//		const booliXW2pgU = await ReviveLhv1gnO.increaseAllowance.call(addresscyKUzEY, uintFqrU2br, {from: accounts[1]});

		assert.equal(boolko2JmV8, true)
		await expect(ReviveLhv1gnO.lock.call(byteyrjrGxP, uintRkJMJAn, uintKfJbzMP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivetY8Mpul = await Revive.new({from: accounts[4]});
		const uintcLT8C2i = BigInt("1876")
		const addressIQHxTQs = accounts[0]
		const uintrTVUbtT = BigInt("636")
		const addressErJ0y0T = accounts[5]
		const addressNFzzy31 = await RevivetY8Mpul.owner.call({from: accounts[4]});
		const boolXMDXesP = await RevivetY8Mpul.approve.call(addressIQHxTQs, uintcLT8C2i, {from: "0x0000000000000000000000000000000000000001"});
//		const addresskwqIF8d = await RevivetY8Mpul.recoverERC20.call(addressErJ0y0T, uintrTVUbtT, {from: accounts[4]});

		assert.equal(addressNFzzy31, 0x30dE596a7dAd2F00E83986dCa626f725dd2946ED)
		assert.equal(boolXMDXesP, true)
		await expect(RevivetY8Mpul.recoverERC20.call(addressErJ0y0T, uintrTVUbtT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivemjuB3be = await Revive.new({from: accounts[0]});
		const uintf9tiZd5 = BigInt("1652")
		const bytefP7yhUU = "0x1e0d030b190719130c19090d010a0502041311080606201f151619090901081f"
		const uintblKn8pr = BigInt("942")
		const bytepXW9vII = "0x03051e190602191a08041303120e0f030f0b1c060a12071518141d0c1b1b0b10"
		const uintGm1XQJZ = BigInt("873")
		const addressy4BpSJx = accounts[2]
		const addressoxx4iIU = accounts[2]
		const uintWGOlBm = BigInt("1523")
		const addressmCBkbq = accounts[1]
//		const booldUMAZLB = await RevivemjuB3be.extendLock.call(bytefP7yhUU, uintf9tiZd5, {from: accounts[0]});
//		const boolfkyn7CK = await RevivemjuB3be.increaseLockAmount.call(bytepXW9vII, uintblKn8pr, {from: accounts[2]});
//		const boolGrPr3xJ = await RevivemjuB3be.transferFrom.call(addressoxx4iIU, addressy4BpSJx, uintGm1XQJZ, {from: accounts[1]});
//		const boolrs0HBgE = await RevivemjuB3be.increaseAllowance.call(addressmCBkbq, uintWGOlBm, {from: accounts[4]});

		await expect(RevivemjuB3be.extendLock.call(bytefP7yhUU, uintf9tiZd5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveEzF2IYp = await Revive.new({from: accounts[0]});
		const addressEhZiAQ8 = accounts[4]
		const addresskBQBWKG = accounts[0]
		const addressYhNoOh8 = accounts[2]
		const address4EZmtN = accounts[0]
		const uint256RFFxym = await ReviveEzF2IYp.allowance.call(addresskBQBWKG, addressEhZiAQ8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256y8sXVcq = await ReviveEzF2IYp.totalBalanceOf.call(addressYhNoOh8, {from: accounts[1]});
//		await ReviveEzF2IYp.onlyOwner.call({from: accounts[4]});
//		const addressitXtWnM = await ReviveEzF2IYp.transferOwnership.call(address4EZmtN, {from: accounts[3]});
//		const boolE9e2KvJ = await ReviveEzF2IYp.isOwner.call({from: accounts[2]});

		assert.equal(uint256RFFxym, BigInt("0"))
		assert.equal(uint256y8sXVcq, BigInt("0"))
		await expect(ReviveEzF2IYp.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivezsF9jdG = await Revive.new({from: accounts[2]});
		const uintXGyrI8M = BigInt("1786")
		const addressJS7zvOF = accounts[2]
		const uintdgJ4hn = BigInt("1529")
		const uintMMg5nIo = BigInt("1668")
		const byteZyCwt2E = "0x030a0110151906110a161f0b1d0f101c010b11010c190f1e191e00130c130313"
		const addressVAcszpN = accounts[3]
		const uintaw3H9Ee = BigInt("1360")
		const addresshBkDIXA = accounts[4]
		const addressVAekMtw = accounts[4]
		const addressFwhgZX = accounts[0]
		const uintJQoBC6K = BigInt("1445")
		const boolz94aABc = await RevivezsF9jdG.increaseAllowance.call(addressJS7zvOF, uintXGyrI8M, {from: accounts[1]});
//		const boolF5BBsHt = await RevivezsF9jdG.transferWithLock.call(addressVAcszpN, byteZyCwt2E, uintMMg5nIo, uintdgJ4hn, {from: accounts[0]});
//		const boolUSua5iw = await RevivezsF9jdG.transferFrom.call(addressVAekMtw, addresshBkDIXA, uintaw3H9Ee, {from: accounts[1]});
//		const addresskvSlqJW = await RevivezsF9jdG.transferOwnership.call(addressFwhgZX, {from: accounts[1]});
//		const uint256Ad2cVs = await RevivezsF9jdG.recoverERC20.call(uintJQoBC6K, {from: accounts[5]});

		assert.equal(boolz94aABc, true)
		await expect(RevivezsF9jdG.transferWithLock.call(addressVAcszpN, byteZyCwt2E, uintMMg5nIo, uintdgJ4hn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivebcQGr4T = await Revive.new({from: accounts[3]});
		const byteXBisyFP = "0x131904001c0902161c0511170f161c1604180f1d1417041e0912070301010c11"
		const addresscL4JFIY = accounts[1]
		const addressVR6mEjM = accounts[1]
		const addressDmgROzq = accounts[5]
		const addressyhsVjog = accounts[0]
		const addressKQ4PhaO = accounts[5]
		const uint256oQCd4Kx = await RevivebcQGr4T.tokensLocked.call(addresscL4JFIY, byteXBisyFP, {from: accounts[0]});
		const uint256oIQsnHr = await RevivebcQGr4T.allowance.call(addressDmgROzq, addressVR6mEjM, {from: accounts[4]});
		const uint256CkstBpK = await RevivebcQGr4T.totalSupply.call({from: accounts[0]});
		const uint256IJ9VMP3 = await RevivebcQGr4T.totalBalanceOf.call(addressyhsVjog, {from: accounts[4]});
		const uint256tfcZKni = await RevivebcQGr4T.unlock.call(addressKQ4PhaO, {from: accounts[4]});

		assert.equal(uint256CkstBpK, BigInt("3000000000000000000000000000"))
		assert.equal(uint256IJ9VMP3, BigInt("0"))
		assert.equal(uint256oIQsnHr, BigInt("0"))
		assert.equal(uint256oQCd4Kx, BigInt("0"))
		assert.equal(uint256tfcZKni, BigInt("0"))
	});

	it('test for Revive', async () => {
		const RevivebcQGr4T = await Revive.new({from: accounts[3]});
		const byteuIpNRgt = "0x131904001c0902161c0511170f161c1604180f1d1417041e0912070301010c11"
		const addressy7SXpje = accounts[1]
		const addressvUYem8 = accounts[1]
		const addressJCczpo = accounts[5]
		const uintilBTxj = BigInt("425")
		const addressacdISs = "0x0000000000000000000000000000000000000001"
		const addresscNfNhuN = accounts[0]
		const uintRjgPLew = BigInt("621")
		const addressn9Kh0Vd = accounts[5]
		const uint256oQCd4Kx = await RevivebcQGr4T.tokensLocked.call(addressy7SXpje, byteuIpNRgt, {from: accounts[0]});
		const uint256oIQsnHr = await RevivebcQGr4T.allowance.call(addressJCczpo, addressvUYem8, {from: accounts[4]});
		const uint256CkstBpK = await RevivebcQGr4T.totalSupply.call({from: accounts[0]});
		const booledcjKRb = await RevivebcQGr4T.transfer.call(addressacdISs, uintilBTxj, {from: accounts[3]});
		const uint256IJ9VMP3 = await RevivebcQGr4T.totalBalanceOf.call(addresscNfNhuN, {from: accounts[4]});
//		const uint256Sw316aJ = await RevivebcQGr4T.recoverERC20.call(uintRjgPLew, {from: accounts[1]});
//		const uint256tfcZKni = await RevivebcQGr4T.unlock.call(addressn9Kh0Vd, {from: accounts[4]});

		assert.equal(booledcjKRb, true)
		assert.equal(uint256CkstBpK, BigInt("3000000000000000000000000000"))
		assert.equal(uint256IJ9VMP3, BigInt("0"))
		assert.equal(uint256oIQsnHr, BigInt("0"))
		assert.equal(uint256oQCd4Kx, BigInt("0"))
		await expect(RevivebcQGr4T.recoverERC20.call(uintRjgPLew, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveEzF2IYp = await Revive.new({from: accounts[0]});
		const addressKssRlG = accounts[4]
		const addressoIFGqI8 = accounts[0]
		const addressXFLeQrU = accounts[3]
		const uintJq50ET = BigInt("337")
		const addressrMgCdI2 = accounts[5]
		const addressAmTQ57V = accounts[1]
		const addressCwRLErK = accounts[0]
		const uint256RFFxym = await ReviveEzF2IYp.allowance.call(addressoIFGqI8, addressKssRlG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256y8sXVcq = await ReviveEzF2IYp.totalBalanceOf.call(addressXFLeQrU, {from: accounts[1]});
//		const boolM2lP1C = await ReviveEzF2IYp.transferFrom.call(addressAmTQ57V, addressrMgCdI2, uintJq50ET, {from: "0x0000000000000000000000000000000000000001"});
//		const addressitXtWnM = await ReviveEzF2IYp.transferOwnership.call(addressCwRLErK, {from: accounts[3]});
//		const boolE9e2KvJ = await ReviveEzF2IYp.isOwner.call({from: accounts[2]});

		assert.equal(uint256RFFxym, BigInt("0"))
		assert.equal(uint256y8sXVcq, BigInt("0"))
		await expect(ReviveEzF2IYp.transferFrom.call(addressAmTQ57V, addressrMgCdI2, uintJq50ET, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveEzF2IYp = await Revive.new({from: accounts[0]});
		const addressxIvW6S2 = accounts[5]
		const addressvBnkDLG = accounts[4]
		const addressOge9KiJ = accounts[0]
		const addressr1SVNBo = accounts[4]
		const uint256KlN8nqE = await ReviveEzF2IYp.getUnlockableTokens.call(addressxIvW6S2, {from: accounts[2]});
		const uint256RFFxym = await ReviveEzF2IYp.allowance.call(addressOge9KiJ, addressvBnkDLG, {from: "0x0000000000000000000000000000000000000001"});
		const uint256y8sXVcq = await ReviveEzF2IYp.totalBalanceOf.call(addressr1SVNBo, {from: accounts[1]});
		const boolE9e2KvJ = await ReviveEzF2IYp.isOwner.call({from: accounts[2]});

		assert.equal(boolE9e2KvJ, false)
		assert.equal(uint256KlN8nqE, BigInt("0"))
		assert.equal(uint256RFFxym, BigInt("0"))
		assert.equal(uint256y8sXVcq, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveCN4HjLh = await Revive.new({from: accounts[1]});
		const addressj8SXP8h = accounts[1]
		const byteeEIvL9w = "0x150705041d18191f1703061618060f1a0d0b191e151106190a17070d1710051d"
		const addressRTt0ar3 = accounts[0]
		const addressUQE62R4 = await ReviveCN4HjLh.transferOwnership.call(addressj8SXP8h, {from: accounts[1]});
		const uint256PW0BU7P = await ReviveCN4HjLh.tokensLocked.call(addressRTt0ar3, byteeEIvL9w, {from: accounts[5]});

		assert.equal(uint256PW0BU7P, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveLhv1gnO = await Revive.new({from: accounts[4]});
		const uintaEbeNue = BigInt("952")
		const addressWwVduxw = accounts[2]
		const byteF8Vkw4o = "0x091a031f20010a19090d050a051e0a0f14191c1d150d1d1b0d010d1a00071a06"
		const addressqEMUB4Z = accounts[3]
		const uintA3ZyZY5 = BigInt("845")
		const byteVkMxbMI = "0x1d0c0d061e100e1c0f031d04180a0202021c041915171108130e0f120302180e"
		const uinttvg0WX = BigInt("1887")
		const uintfuOLoYz = BigInt("411")
		const bytejW6QeuJ = "0x0e150b180f0d1d0819070d0b1a171d00111e0d191f1315111c1e141a0b111310"
		const addressv9OP3Re = accounts[3]
		const uintCpb47Ex = BigInt("1280")
		const uinte8isGQj = BigInt("402")
		const byteWVD7sDa = "0x09040e1505010c0d0a09070c1808192016061d031e081d031b0a111c0a191620"
		const uintV0FeHjA = BigInt("1236")
		const addressY7FBs2S = accounts[1]
		const booliOLbKf = await ReviveLhv1gnO.approve.call(addressWwVduxw, uintaEbeNue, {from: accounts[0]});
		const uint256IHn78Rv = await ReviveLhv1gnO.totalSupply.call({from: accounts[3]});
		const uint256WreJwGC = await ReviveLhv1gnO.tokensUnlockable.call(addressqEMUB4Z, byteF8Vkw4o, {from: accounts[3]});
//		const boolGgzlRTj = await ReviveLhv1gnO.increaseLockAmount.call(byteVkMxbMI, uintA3ZyZY5, {from: accounts[2]});
//		const boolko2JmV8 = await ReviveLhv1gnO.transferWithLock.call(addressv9OP3Re, bytejW6QeuJ, uintfuOLoYz, uinttvg0WX, {from: accounts[4]});
//		const boolTvNf2RI = await ReviveLhv1gnO.lock.call(byteWVD7sDa, uinte8isGQj, uintCpb47Ex, {from: accounts[0]});
//		const booliXW2pgU = await ReviveLhv1gnO.increaseAllowance.call(addressY7FBs2S, uintV0FeHjA, {from: accounts[1]});

		assert.equal(booliOLbKf, true)
		assert.equal(uint256IHn78Rv, BigInt("3000000000000000000000000000"))
		assert.equal(uint256WreJwGC, BigInt("0"))
		await expect(ReviveLhv1gnO.increaseLockAmount.call(byteVkMxbMI, uintA3ZyZY5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveLhv1gnO = await Revive.new({from: accounts[4]});
		const uintsFdU10j = BigInt("1039")
		const uintcbEbMOt = BigInt("1887")
		const uintYpPrcHt = BigInt("411")
		const bytes6LDgo = "0x0e150b180f0d1d0819070d0b1a171d00111e0d191f1315111c1e141f0b111310"
		const addressdlhkdIq = accounts[3]
//		const uint256H9iNQWI = await ReviveLhv1gnO.recoverERC20.call(uintsFdU10j, {from: accounts[2]});
//		const boolko2JmV8 = await ReviveLhv1gnO.transferWithLock.call(addressdlhkdIq, bytes6LDgo, uintYpPrcHt, uintcbEbMOt, {from: accounts[4]});

		await expect(ReviveLhv1gnO.recoverERC20.call(uintsFdU10j, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNapADX5 = await Revive.new({from: accounts[3]});
		const uint9RF1Im = BigInt("9")
		const bytejUrsfV8 = "0x1d150a020d1f1501000f1b0c1c160b1d120c05060e151d0c0a0515010e200f0e"
		const addresspr0b240 = accounts[0]
		const uintSb8efFV = BigInt("1380")
		const uintT3bvps5 = BigInt("1553")
		const byteYzvzIaZ = "0x07200f010f05000e12150e03141f0b061e011003051b0c00061e0f1909130f0d"
		const boolcr0KD80 = await ReviveNapADX5.isOwner.call({from: accounts[3]});
		const uint256o8j7ygc = await ReviveNapADX5.tokensLockedAtTime.call(addresspr0b240, bytejUrsfV8, uint9RF1Im, {from: accounts[2]});
//		const boolqmxT9E = await ReviveNapADX5.lock.call(byteYzvzIaZ, uintT3bvps5, uintSb8efFV, {from: accounts[5]});

		assert.equal(boolcr0KD80, true)
		assert.equal(uint256o8j7ygc, BigInt("0"))
		await expect(ReviveNapADX5.lock.call(byteYzvzIaZ, uintT3bvps5, uintSb8efFV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveAav9SN0 = await Revive.new({from: accounts[4]});
		const uintJ6fmSH = BigInt("825")
		const addressP5VPpMU = accounts[0]
		const uintcgl2Os0 = BigInt("294")
		const uintgJKkMiS = BigInt("1838")
		const byteJk6mhoe = "0x0f1a0308061315150e081f1213110a19010e1208101f0a191d07060502170507"
		const bytesFiWN81 = "0x1d0419202008181a060c1a1e060f0d030a11130703190e1214151c1d061f1816"
		const addressM2OdIt = accounts[3]
		const addressQwHxXSD = accounts[1]
//		const boolpSmEKqw = await ReviveAav9SN0.decreaseAllowance.call(addressP5VPpMU, uintJ6fmSH, {from: "0x0000000000000000000000000000000000000001"});
//		const boolxvI7l9u = await ReviveAav9SN0.lock.call(byteJk6mhoe, uintgJKkMiS, uintcgl2Os0, {from: accounts[0]});
//		const uint256G3GGHfa = await ReviveAav9SN0.tokensLocked.call(addressM2OdIt, bytesFiWN81, {from: accounts[4]});
//		const uint256SudzDFg = await ReviveAav9SN0.unlock.call(addressQwHxXSD, {from: accounts[1]});

		await expect(ReviveAav9SN0.decreaseAllowance.call(addressP5VPpMU, uintJ6fmSH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveZu5ZtF1 = await Revive.new({from: accounts[1]});
		const address6LiBHq = accounts[0]
		const addressgNJcfUy = accounts[3]
		const uintdbRUSm3 = BigInt("1964")
		const uintOYn6w8 = BigInt("93")
		const byteW52jm99 = "0x0b020f0f05171d161a03190411171d11181d1c030d04011b17151e16161a0d0a"
		const addresse0Fnb0c = accounts[3]
		const addressVnobgQf = accounts[2]
		const byteTWu4om0 = "0x1a17111e1f141e160e1d160113001815190f14090b09181d011a12020d1e1f08"
		const addressoYQLqyW = accounts[4]
//		await ReviveZu5ZtF1.renounceOwnership.call({from: accounts[1]});
//		const uint256IlpZJLz = await ReviveZu5ZtF1.allowance.call(addressgNJcfUy, address6LiBHq, {from: accounts[2]});
//		const boolHWnsyp5 = await ReviveZu5ZtF1.transferWithLock.call(addresse0Fnb0c, byteW52jm99, uintOYn6w8, uintdbRUSm3, {from: accounts[0]});
//		const addressoWbBlTb = await ReviveZu5ZtF1.transferOwnership.call(addressVnobgQf, {from: accounts[0]});
//		await ReviveZu5ZtF1.renounceOwnership.call({from: accounts[4]});
//		const uint256N74aym = await ReviveZu5ZtF1.tokensUnlockable.call(addressoYQLqyW, byteTWu4om0, {from: accounts[1]});

		await expect(ReviveZu5ZtF1.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNapADX5 = await Revive.new({from: accounts[3]});
		const uintTyGfOI5 = BigInt("1562")
		const uintb5o69Ex = BigInt("1380")
		const uintcfHeMtQ = BigInt("1546")
		const byteb9OQxT5 = "0x07200f010f05000e12150e03141f0b061e011003051b0c00061e0f1909130f0d"
//		const uint256UF5DXHy = await ReviveNapADX5.recoverERC20.call(uintTyGfOI5, {from: accounts[4]});
//		const boolqmxT9E = await ReviveNapADX5.lock.call(byteb9OQxT5, uintcfHeMtQ, uintb5o69Ex, {from: accounts[5]});

		await expect(ReviveNapADX5.recoverERC20.call(uintTyGfOI5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveLaIZOeU = await Revive.new({from: accounts[2]});
		const uintCTmvdjh = BigInt("1118")
		const addressKrxYVxD = accounts[1]
//		const uint256nywPF3F = await ReviveLaIZOeU.recoverERC20.call(uintCTmvdjh, {from: accounts[0]});
//		const uint25685Shaz = await ReviveLaIZOeU.totalBalanceOf.call(addressKrxYVxD, {from: accounts[0]});
//		const boolBK11Tj = await ReviveLaIZOeU.isOwner.call({from: accounts[4]});

		await expect(ReviveLaIZOeU.recoverERC20.call(uintCTmvdjh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivebcQGr4T = await Revive.new({from: accounts[3]});
		const uint8PwQcv = BigInt("1285")
		const addressnUEen98 = accounts[6]
//		const uint256knb18aD = await RevivebcQGr4T.recoverERC20.call(uint8PwQcv, {from: accounts[0]});
//		const uint256EqHwDz = await RevivebcQGr4T.getUnlockableTokens.call(addressnUEen98, {from: accounts[0]});

		await expect(RevivebcQGr4T.recoverERC20.call(uint8PwQcv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveELfeMVo = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const addressalKcCBH = "0x0000000000000000000000000000000000000001"
		const addresslEwiY0G = "0x0000000000000000000000000000000000000001"
		const addressFYaLzSg = accounts[1]
		const uint256qemeaeJ = await ReviveELfeMVo.unlock.call(addressalKcCBH, {from: accounts[5]});
		const uint256LAiiQWM = await ReviveELfeMVo.unlock.call(addresslEwiY0G, {from: accounts[3]});
		const uint256SrOuGJD = await ReviveELfeMVo.balanceOf.call(addressFYaLzSg, {from: accounts[2]});
	});

	it('test for Revive', async () => {
		const ReviveLhv1gnO = await Revive.new({from: accounts[4]});
		const uintZXvsHFz = BigInt("845")
		const byteXs6upNc = "0x1d0c0d061e100e1c0f031d04180a0202021c041915171108130e0f1203fffffffb180e"
		const uintVJs50iS = BigInt("212")
		const byteU0v7Zp7 = "0x1c0b0c001c000220030a010b170f0f1a04010d010c01010b101a1a1010151411"
		const uintdq8ePI = BigInt("1049")
		const byteXnsjNy = "0x0f1e0005171d0210021a171f010813170a020d1200140307191313121b0b111e"
//		const boolGgzlRTj = await ReviveLhv1gnO.increaseLockAmount.call(byteXs6upNc, uintZXvsHFz, {from: accounts[2]});
//		const boolgTjGG1p = await ReviveLhv1gnO.increaseLockAmount.call(byteU0v7Zp7, uintVJs50iS, {from: accounts[3]});
//		const boolCc95TBm = await ReviveLhv1gnO.extendLock.call(byteXnsjNy, uintdq8ePI, {from: accounts[3]});

		await expect(ReviveLhv1gnO.increaseLockAmount.call(byteXs6upNc, uintZXvsHFz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveLhv1gnO = await Revive.new({from: accounts[4]});
		const uintGsKDFaj = BigInt("563")
		const uintExqheza = BigInt("1887")
		const uintfW6DdYx = BigInt("411")
		const bytezRkumg = "0x0e150b180f0d1d0819070d0b1a171d00111e0d191f1315111c1e141a0b111310"
		const addressIklICSN = accounts[4]
//		const uint256cA9UvAe = await ReviveLhv1gnO.recoverERC20.call(uintGsKDFaj, {from: accounts[4]});
//		const boolko2JmV8 = await ReviveLhv1gnO.transferWithLock.call(addressIklICSN, bytezRkumg, uintfW6DdYx, uintExqheza, {from: accounts[4]});

		await expect(ReviveLhv1gnO.recoverERC20.call(uintGsKDFaj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivebcQGr4T = await Revive.new({from: accounts[3]});
		const addressLutcWIL = accounts[7]
		const uintyVy8Z3 = BigInt("445")
		const uintUfVtHqA = BigInt("867")
		const addressqp2Fnvs = accounts[4]
		const uint256EqHwDz = await RevivebcQGr4T.getUnlockableTokens.call(addressLutcWIL, {from: accounts[0]});
//		const uint256YmE0TFs = await RevivebcQGr4T.recoverERC20.call(uintyVy8Z3, {from: "0x0000000000000000000000000000000000000001"});
//		const boolGpdyNuS = await RevivebcQGr4T.increaseAllowance.call(addressqp2Fnvs, uintUfVtHqA, {from: accounts[4]});

		assert.equal(uint256EqHwDz, BigInt("0"))
		await expect(RevivebcQGr4T.recoverERC20.call(uintyVy8Z3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveLhv1gnO = await Revive.new({from: accounts[4]});
		const uinttNrVOQY = BigInt("274")
		const uintnZPJhr7 = BigInt("1058")
		const byteNUmmejS = "0x1d111b141c110e0c16060e1f0b15201808190318050e02190d0f09160c1d0c1c"
		const addresslSuFlfZ = accounts[2]
		const uintW71gSnF = BigInt("845")
		const byteejm5jig = "0x1d0c0d061e100e1c0f031d04180a0202021c041915171108130e0f1203fffffffe180e"
		const boolvuFKa9s = await ReviveLhv1gnO.transferWithLock.call(addresslSuFlfZ, byteNUmmejS, uintnZPJhr7, uinttNrVOQY, {from: accounts[4]});
//		const boolGgzlRTj = await ReviveLhv1gnO.increaseLockAmount.call(byteejm5jig, uintW71gSnF, {from: accounts[2]});

		assert.equal(boolvuFKa9s, true)
		await expect(ReviveLhv1gnO.increaseLockAmount.call(byteejm5jig, uintW71gSnF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivebcQGr4T = await Revive.new({from: accounts[3]});
		const addressRAfaR3g = accounts[0]
		const addressM40jK0V = accounts[2]
		const uintypeiRwD = BigInt("1567")
		const addresscmL5sAE = accounts[7]
		const uint256RCRKPiQ = await RevivebcQGr4T.allowance.call(addressM40jK0V, addressRAfaR3g, {from: accounts[4]});
//		const uint256YH2EzxB = await RevivebcQGr4T.recoverERC20.call(uintypeiRwD, {from: accounts[1]});
//		const uint256EqHwDz = await RevivebcQGr4T.getUnlockableTokens.call(addresscmL5sAE, {from: accounts[0]});

		assert.equal(uint256RCRKPiQ, BigInt("0"))
		await expect(RevivebcQGr4T.recoverERC20.call(uintypeiRwD, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveEzF2IYp = await Revive.new({from: accounts[0]});
		const uintqbcPc74 = BigInt("127")
		const addressGcANHhQ = accounts[1]
		const addressbvfEsMc = accounts[4]
		const uinttUbfKuo = BigInt("352")
		const boolz1eMt9 = await ReviveEzF2IYp.increaseAllowance.call(addressGcANHhQ, uintqbcPc74, {from: accounts[4]});
		const uint256y8sXVcq = await ReviveEzF2IYp.totalBalanceOf.call(addressbvfEsMc, {from: accounts[1]});
//		const uint256EeXFZsL = await ReviveEzF2IYp.recoverERC20.call(uinttUbfKuo, {from: accounts[5]});

		assert.equal(boolz1eMt9, true)
		assert.equal(uint256y8sXVcq, BigInt("0"))
		await expect(ReviveEzF2IYp.recoverERC20.call(uinttUbfKuo, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveLhv1gnO = await Revive.new({from: accounts[4]});
		const uinteffpGUT = BigInt("1028")
		const uintL6hSCT = BigInt("1887")
		const uintSvgxei = BigInt("411")
		const byteDGMYkqu = "0x0e150b180f0d1d0819070d0b1a171d00111e0d191f1315111c1e141a0b111310"
		const addresshifRRa8 = accounts[3]
//		const uint256ltn5lWt = await ReviveLhv1gnO.recoverERC20.call(uinteffpGUT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolko2JmV8 = await ReviveLhv1gnO.transferWithLock.call(addresshifRRa8, byteDGMYkqu, uintSvgxei, uintL6hSCT, {from: accounts[4]});

		await expect(ReviveLhv1gnO.recoverERC20.call(uinteffpGUT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveLhv1gnO = await Revive.new({from: accounts[4]});
		const uintc4lx43r = BigInt("1887")
		const uintgbejBCR = BigInt("411")
		const bytevDryBqz = "0x0e150b180f0d1d0819070d0b1a171d00111e0d191f1315111c1e141a0b111310"
		const addressWi0XSr6 = accounts[4]
		const uintrP8z3XA = BigInt("753")
		const uintfJaWVjt = BigInt("1094")
		const boolko2JmV8 = await ReviveLhv1gnO.transferWithLock.call(addressWi0XSr6, bytevDryBqz, uintgbejBCR, uintc4lx43r, {from: accounts[4]});
//		const uint256FKAd8fj = await ReviveLhv1gnO.recoverERC20.call(uintrP8z3XA, {from: accounts[2]});
//		const uint256IT0Zk7t = await ReviveLhv1gnO.recoverERC20.call(uintfJaWVjt, {from: accounts[1]});

		assert.equal(boolko2JmV8, true)
		await expect(ReviveLhv1gnO.recoverERC20.call(uintrP8z3XA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveLhv1gnO = await Revive.new({from: accounts[4]});
		const uintYfNgR5 = BigInt("1887")
		const uintYUJS2qu = BigInt("411")
		const byteQkgRpjs = "0x0e150b180f0d1e0819070d0b1a171d00111e0d191f1315111c1e141a0b111310"
		const addressE6FMOdv = accounts[3]
		const addressm6k0fS = accounts[5]
		const uintID4wGnf = BigInt("521")
		const boolko2JmV8 = await ReviveLhv1gnO.transferWithLock.call(addressE6FMOdv, byteQkgRpjs, uintYUJS2qu, uintYfNgR5, {from: accounts[4]});
		const uint256BiTPJFa = await ReviveLhv1gnO.unlock.call(addressm6k0fS, {from: accounts[0]});
//		const uint256vo389Oc = await ReviveLhv1gnO.recoverERC20.call(uintID4wGnf, {from: accounts[2]});

		assert.equal(boolko2JmV8, true)
		assert.equal(uint256BiTPJFa, BigInt("0"))
		await expect(ReviveLhv1gnO.recoverERC20.call(uintID4wGnf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivebcQGr4T = await Revive.new({from: accounts[3]});
		const uintsrsBLZ = BigInt("627")
		const uintQAqnTDy = BigInt("2023")
		const addresscNWdkJ = accounts[4]
		const addressiEtQAfy = accounts[7]
//		const uint256HTDeo9S = await RevivebcQGr4T.recoverERC20.call(uintsrsBLZ, {from: accounts[0]});
//		const addressiGLDot1 = await RevivebcQGr4T.recoverERC20.call(addresscNWdkJ, uintQAqnTDy, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256EqHwDz = await RevivebcQGr4T.getUnlockableTokens.call(addressiEtQAfy, {from: accounts[0]});

		await expect(RevivebcQGr4T.recoverERC20.call(uintsrsBLZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveLhv1gnO = await Revive.new({from: accounts[4]});
		const uintQ3nKnR4 = BigInt("845")
		const bytemilfYUU = "0x1d0c0d061e100e1c0f031dfffffffd180a0202021c041915171108130e0f120302180e"
		const uintTmRgrN = BigInt("1529")
		const addressuuydZn = accounts[2]
		const addressooDNXVn = accounts[3]
//		const boolGgzlRTj = await ReviveLhv1gnO.increaseLockAmount.call(bytemilfYUU, uintQ3nKnR4, {from: accounts[2]});
//		const bool4uvbsY = await ReviveLhv1gnO.isOwner.call({from: accounts[0]});
//		const boolM0BqHwz = await ReviveLhv1gnO.approve.call(addressuuydZn, uintTmRgrN, {from: accounts[0]});
//		const uint256ho2AQ7 = await ReviveLhv1gnO.getUnlockableTokens.call(addressooDNXVn, {from: accounts[4]});

		await expect(ReviveLhv1gnO.increaseLockAmount.call(bytemilfYUU, uintQ3nKnR4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})