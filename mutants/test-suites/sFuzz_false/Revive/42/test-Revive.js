const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveRfi3IKF = await Revive.new({from: accounts[0]});
		const uinteiPsbZ = BigInt("1791")
		const bytej7qYNBw = "0x0f05190c0c011b08111c081e18131808050d101e051c101b00170e0b1e0b0d0d"
		const addressFBM4YVM = accounts[3]
		const addressx8qtgxF = accounts[0]
		const uintP6p9hf = BigInt("1045")
		const addressx98hse = accounts[4]
//		const boolWBU9oF6 = await ReviveRfi3IKF.extendLock.call(bytej7qYNBw, uinteiPsbZ, {from: "0x0000000000000000000000000000000000000001"});
//		const addressbLhNJ8L = await ReviveRfi3IKF.owner.call({from: accounts[0]});
//		const uint256BAVQhTZ = await ReviveRfi3IKF.getUnlockableTokens.call(addressFBM4YVM, {from: accounts[3]});
//		const uint256cf8RjgO = await ReviveRfi3IKF.balanceOf.call(addressx8qtgxF, {from: accounts[2]});
//		const addressFeW6v5U = await ReviveRfi3IKF.recoverERC20.call(addressx98hse, uintP6p9hf, {from: accounts[3]});

		await expect(ReviveRfi3IKF.extendLock.call(bytej7qYNBw, uinteiPsbZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveo6TZKvJ = await Revive.new({from: accounts[2]});
		const addresscRxO99P = accounts[0]
		const addressYFO1zS = accounts[0]
		const uint256GUM1fg4 = await Reviveo6TZKvJ.balanceOf.call(addresscRxO99P, {from: accounts[0]});
//		const addressT9tz9BM = await Reviveo6TZKvJ.transferOwnership.call(addressYFO1zS, {from: accounts[3]});

		assert.equal(uint256GUM1fg4, BigInt("0"))
		await expect(Reviveo6TZKvJ.transferOwnership.call(addressYFO1zS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivetb0iFP8 = await Revive.new({from: accounts[0]});
		const uint0TdTZZ = BigInt("1236")
		const addressYdcQUAa = "0x0000000000000000000000000000000000000001"
		const byteSxZKxSm = "0x13191d1c170b19081c0d1c020e1e0d1f1e1a030c130d130c0b12041214191d0c"
		const addressOrH8iPo = accounts[0]
		const byteqRxBkj2 = "0x0c02050210050b0f040e080912041801010c0609070e130c140700151e1b141c"
		const address8U6dLG = accounts[5]
		const bytezz8h7E = "0x0e061d1d04150a1c121b1c15060902050a17170c152001030b09010e0f190312"
		const addressZJo05A6 = accounts[0]
//		const boolQj8Q7ZZ = await Revivetb0iFP8.decreaseAllowance.call(addressYdcQUAa, uint0TdTZZ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint2563Gwo0W = await Revivetb0iFP8.tokensUnlockable.call(addressOrH8iPo, byteSxZKxSm, {from: accounts[5]});
//		const uint256iLDVr0Y = await Revivetb0iFP8.tokensLocked.call(address8U6dLG, byteqRxBkj2, {from: accounts[1]});
//		const uint256R6euTzF = await Revivetb0iFP8.tokensLocked.call(addressZJo05A6, bytezz8h7E, {from: accounts[2]});
//		await Revivetb0iFP8.onlyOwner.call({from: accounts[0]});

		await expect(Revivetb0iFP8.decreaseAllowance.call(addressYdcQUAa, uint0TdTZZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveI5oS8x = await Revive.new({from: accounts[2]});
		const addressS9zKB2o = accounts[0]
		const addressCPNGCSi = accounts[2]
		const byte3qc2WF = "0x0e201c061d0f05030c060e08141d03031d1d141d1f190d1b0404120206020b0a"
		const addressAeHJ5OB = accounts[3]
		const uintfNsVhw5 = BigInt("1798")
		const uintUQDn6cq = BigInt("1072")
		const bytegdBBRq3 = "0x0d1f1c02110a16040b1c1b171e0b201609071f0c020e170b0e071d0a00070d09"
		const addressfaiYQ9N = accounts[1]
		const address5LrMRh = await ReviveI5oS8x.owner.call({from: accounts[0]});
		const uint256st4O0IZ = await ReviveI5oS8x.getUnlockableTokens.call(addressS9zKB2o, {from: accounts[3]});
		const uint256KrYEGD = await ReviveI5oS8x.totalBalanceOf.call(addressCPNGCSi, {from: accounts[1]});
		const uint256OQx7Py6 = await ReviveI5oS8x.tokensUnlockable.call(addressAeHJ5OB, byte3qc2WF, {from: accounts[0]});
		const boolzWNRZOB = await ReviveI5oS8x.lock.call(bytegdBBRq3, uintUQDn6cq, uintfNsVhw5, {from: accounts[2]});
		const uint256yGL69G1 = await ReviveI5oS8x.unlock.call(addressfaiYQ9N, {from: accounts[5]});

		assert.equal(address5LrMRh, 0x9B8E5981a0f086728BD9304826f0cDdC90DC3f99)
		assert.equal(boolzWNRZOB, true)
		assert.equal(uint256KrYEGD, BigInt("3000000000000000000000000000"))
		assert.equal(uint256OQx7Py6, BigInt("0"))
		assert.equal(uint256st4O0IZ, BigInt("0"))
		assert.equal(uint256yGL69G1, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveQyD8Wp = await Revive.new({from: accounts[0]});
		const uintrFba9L = BigInt("1489")
		const byteC2XzK3Z = "0x190817050a130d041b0b0015140f0d0d051b12131c0a18171b1b1b010b0d1417"
		const addresswewhv2b = accounts[1]
		const byteQqoNIi = "0x12010f120407070710180b0d1f0b1c1607050c1b1c02090e07141c1b0a101e1b"
		const addresssBEEOTw = accounts[2]
		const uint256JA0l1h4 = await ReviveQyD8Wp.tokensLockedAtTime.call(addresswewhv2b, byteC2XzK3Z, uintrFba9L, {from: accounts[2]});
//		await ReviveQyD8Wp.onlyOwner.call({from: accounts[2]});
//		const uint256Xgrv4gg = await ReviveQyD8Wp.tokensLocked.call(addresssBEEOTw, byteQqoNIi, {from: accounts[0]});

		assert.equal(uint256JA0l1h4, BigInt("0"))
		await expect(ReviveQyD8Wp.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFuzDsgH = await Revive.new({from: accounts[4]});
		const addressB2v0M6w = accounts[4]
		const addresshhB7ElH = accounts[1]
		const addresslEb2det = accounts[2]
		const bytepIb40TT = "0x0811031e0f031a1a050e0c0c191c170b1918081b1d111e1d1d1c161c190d1f06"
		const addressM0Otmvv = accounts[4]
		const uint256tCxWgIA = await ReviveFuzDsgH.totalSupply.call({from: accounts[4]});
		const uint256UpfQbby = await ReviveFuzDsgH.getUnlockableTokens.call(addressB2v0M6w, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PDcepvg = await ReviveFuzDsgH.unlock.call(addresshhB7ElH, {from: accounts[2]});
		const uint256QGimMUx = await ReviveFuzDsgH.balanceOf.call(addresslEb2det, {from: accounts[4]});
		const uint256F4RrOYF = await ReviveFuzDsgH.tokensUnlockable.call(addressM0Otmvv, bytepIb40TT, {from: accounts[4]});

		assert.equal(uint256F4RrOYF, BigInt("0"))
		assert.equal(uint256PDcepvg, BigInt("0"))
		assert.equal(uint256QGimMUx, BigInt("0"))
		assert.equal(uint256UpfQbby, BigInt("0"))
		assert.equal(uint256tCxWgIA, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const RevivehFBzSyk = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDxjt2p = BigInt("1131")
		const bytejc2sFuO = "0x120607150003190c121414170f09031906030c0b030100080f1d07161e091109"
		const addressKYdXrVa = accounts[3]
		const uintR4A7XlH = BigInt("2025")
		const addressMZGcLfh = accounts[2]
		const addressaEQfrYu = accounts[2]
		const byteoKXoSSD = "0x18081f040d17081c180a00170b1c1f051904090901200a060b1703150c060c04"
		const addressyltnhpq = accounts[3]
		const addressMb6LX23 = accounts[1]
		const uint256X8c9aM = await RevivehFBzSyk.tokensLockedAtTime.call(addressKYdXrVa, bytejc2sFuO, uintDxjt2p, {from: accounts[2]});
		const boolRbulBq = await RevivehFBzSyk.approve.call(addressMZGcLfh, uintR4A7XlH, {from: accounts[1]});
		const addressl5L8Yqo = await RevivehFBzSyk.transferOwnership.call(addressaEQfrYu, {from: accounts[5]});
		const uint256oKD1BN = await RevivehFBzSyk.tokensUnlockable.call(addressyltnhpq, byteoKXoSSD, {from: accounts[4]});
		const uint256hweTSHS = await RevivehFBzSyk.totalBalanceOf.call(addressMb6LX23, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Revive', async () => {
		const ReviveI5oS8x = await Revive.new({from: accounts[2]});
		const uintPFwFsoT = BigInt("1765")
		const uintyUzjEKQ = BigInt("519")
		const bytelL6IDEZ = "0x110b0800080e111901051d1e1b16160f0d0818181c1b021f19100e0d1a10110b"
		const addressYhGDOcu = accounts[0]
		const byteIyCSQMP = "0x11050d151e120b00081e101f0e1c1f1e0d110017120b00010803040c12110b04"
		const addressoUufj8T = accounts[3]
		const addressOQhLg3S = accounts[0]
		const addressQrjHx3y = accounts[2]
		const byteXnSZdrz = "0x0e201c061d0f05030c060e08141d03031d1d141d1f190d1b0404120206020b0a"
		const addressUccJDyz = accounts[3]
		const uintQjOBS89 = BigInt("1798")
		const uintMEqq6WA = BigInt("1072")
		const bytegMwzYix = "0x0d1f1c02110a16040b1c1b171e0b201609071f0c020e170b0e071d0a00070d09"
		const addressCV7mEpP = accounts[1]
		const address5LrMRh = await ReviveI5oS8x.owner.call({from: accounts[0]});
		const boolCqLsr9v = await ReviveI5oS8x.transferWithLock.call(addressYhGDOcu, bytelL6IDEZ, uintyUzjEKQ, uintPFwFsoT, {from: accounts[2]});
		const uint256v8xVrxr = await ReviveI5oS8x.tokensUnlockable.call(addressoUufj8T, byteIyCSQMP, {from: accounts[4]});
		const uint256st4O0IZ = await ReviveI5oS8x.getUnlockableTokens.call(addressOQhLg3S, {from: accounts[3]});
		const uint256KrYEGD = await ReviveI5oS8x.totalBalanceOf.call(addressQrjHx3y, {from: accounts[1]});
		const uint256OQx7Py6 = await ReviveI5oS8x.tokensUnlockable.call(addressUccJDyz, byteXnSZdrz, {from: accounts[0]});
		const boolzWNRZOB = await ReviveI5oS8x.lock.call(bytegMwzYix, uintMEqq6WA, uintQjOBS89, {from: accounts[2]});
		const uint256yGL69G1 = await ReviveI5oS8x.unlock.call(addressCV7mEpP, {from: accounts[5]});

		assert.equal(address5LrMRh, 0x9B8E5981a0f086728BD9304826f0cDdC90DC3f99)
		assert.equal(boolCqLsr9v, true)
		assert.equal(boolzWNRZOB, true)
		assert.equal(uint256KrYEGD, BigInt("3000000000000000000000000000"))
		assert.equal(uint256OQx7Py6, BigInt("0"))
		assert.equal(uint256st4O0IZ, BigInt("0"))
		assert.equal(uint256v8xVrxr, BigInt("0"))
		assert.equal(uint256yGL69G1, BigInt("0"))
	});

	it('test for Revive', async () => {
		const Revivec9gMcM = await Revive.new({from: accounts[0]});
		const uint7SAmLQ = BigInt("1262")
		const addresssis67c1 = accounts[0]
		const uintSP7k4Vc = BigInt("952")
		const uintFXvDa8l = BigInt("1605")
		const byteqtmGye = "0x1d12190b1b1f0c151a10191f161b1b1301131e0b0c151116101a09181606031f"
//		await Revivec9gMcM.renounceOwnership.call({from: accounts[0]});
//		const boolqmdH9hR = await Revivec9gMcM.approve.call(addresssis67c1, uint7SAmLQ, {from: accounts[4]});
//		const booltYO252Y = await Revivec9gMcM.lock.call(byteqtmGye, uintFXvDa8l, uintSP7k4Vc, {from: accounts[5]});
//		await Revivec9gMcM.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(Revivec9gMcM.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveuCBIVqB = await Revive.new({from: accounts[1]});
		const uintZO0y2Ca = BigInt("1384")
		const addresspWe8Svc = accounts[2]
		const addressrgD6LSQ = accounts[2]
		const addressCWffi67 = accounts[5]
		const boolQ1i1Qsx = await ReviveuCBIVqB.increaseAllowance.call(addresspWe8Svc, uintZO0y2Ca, {from: accounts[0]});
//		await ReviveuCBIVqB.onlyOwner.call({from: accounts[1]});
//		const uint256URXXJX = await ReviveuCBIVqB.totalBalanceOf.call(addressrgD6LSQ, {from: accounts[2]});
//		const uint256ybN5LiK = await ReviveuCBIVqB.totalBalanceOf.call(addressCWffi67, {from: accounts[1]});

		assert.equal(boolQ1i1Qsx, true)
		await expect(ReviveuCBIVqB.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFuzDsgH = await Revive.new({from: accounts[4]});
		const addressuJbPsHo = accounts[5]
		const uinteCBVUaT = BigInt("4")
		const addressKkuezLw = "0x0000000000000000000000000000000000000001"
		const addresswiJ3T6p = accounts[3]
		const address8TriZj = accounts[1]
		const addressfeNrLyT = accounts[2]
		const byteaBvHzlX = "0x0811031e0f031a1a050e0c0c191c170b1918081b1d111e1d1d1c161c190d1f06"
		const addressQPV9KCJ = accounts[4]
		const uint256tCxWgIA = await ReviveFuzDsgH.totalSupply.call({from: accounts[4]});
		const uint256UpfQbby = await ReviveFuzDsgH.getUnlockableTokens.call(addressuJbPsHo, {from: "0x0000000000000000000000000000000000000001"});
//		const boolyJx6SEq = await ReviveFuzDsgH.transferFrom.call(addresswiJ3T6p, addressKkuezLw, uinteCBVUaT, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256PDcepvg = await ReviveFuzDsgH.unlock.call(address8TriZj, {from: accounts[2]});
//		const uint256QGimMUx = await ReviveFuzDsgH.balanceOf.call(addressfeNrLyT, {from: accounts[4]});
//		const uint256F4RrOYF = await ReviveFuzDsgH.tokensUnlockable.call(addressQPV9KCJ, byteaBvHzlX, {from: accounts[4]});

		assert.equal(uint256UpfQbby, BigInt("0"))
		assert.equal(uint256tCxWgIA, BigInt("3000000000000000000000000000"))
		await expect(ReviveFuzDsgH.transferFrom.call(addresswiJ3T6p, addressKkuezLw, uinteCBVUaT, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivec9gMcM = await Revive.new({from: accounts[0]});
		const uintEIoOSfj = BigInt("1780")
		const byteOwlDQfX = "0x06180d1017080a0f1f16030001090e1a1210110c19131f1a19131814110b0d18"
		const uintaGtE4hO = BigInt("1165")
		const bytecukpNhP = "0x05020f1a1b051614070e170f15110b0c091d1919110b0c180212191e00010712"
//		const booloDgIhym = await Revivec9gMcM.increaseLockAmount.call(byteOwlDQfX, uintEIoOSfj, {from: accounts[3]});
//		const boolr1uScTh = await Revivec9gMcM.extendLock.call(bytecukpNhP, uintaGtE4hO, {from: accounts[4]});
//		await Revivec9gMcM.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(Revivec9gMcM.increaseLockAmount.call(byteOwlDQfX, uintEIoOSfj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveRF0diWg = await Revive.new({from: accounts[4]});
		const addresstxsEm60 = accounts[4]
		const uintjAlAuUQ = BigInt("1063")
		const addressv369rO5 = accounts[3]
		const uint256hbDiwLn = await ReviveRF0diWg.totalBalanceOf.call(addresstxsEm60, {from: accounts[0]});
//		const uint256EeJHmF9 = await ReviveRF0diWg.recoverERC20.call(uintjAlAuUQ, {from: accounts[0]});
//		const addressq8b2l5w = await ReviveRF0diWg.transferOwnership.call(addressv369rO5, {from: accounts[0]});

		assert.equal(uint256hbDiwLn, BigInt("3000000000000000000000000000"))
		await expect(ReviveRF0diWg.recoverERC20.call(uintjAlAuUQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFuzDsgH = await Revive.new({from: accounts[4]});
		const addressMR95zZ1 = accounts[4]
		const addressbcAKCjz = accounts[1]
		const addressbHWhIM8 = accounts[2]
		const address9FPZvu = accounts[2]
		const byteTnyDQqy = "0x13031d181d0f1318141b000c021a1e1d1a0618191c0a0c13181f0f19170f0606"
		const addressXX3ukpF = accounts[3]
		const uint256tCxWgIA = await ReviveFuzDsgH.totalSupply.call({from: accounts[4]});
		const uint256UpfQbby = await ReviveFuzDsgH.getUnlockableTokens.call(addressMR95zZ1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PDcepvg = await ReviveFuzDsgH.unlock.call(addressbcAKCjz, {from: accounts[2]});
		const uint256QGimMUx = await ReviveFuzDsgH.balanceOf.call(addressbHWhIM8, {from: accounts[4]});
		const uint256q6uJ0py = await ReviveFuzDsgH.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const addressHrNerk = await ReviveFuzDsgH.transferOwnership.call(address9FPZvu, {from: accounts[4]});
		const uint256G2yhKlU = await ReviveFuzDsgH.tokensUnlockable.call(addressXX3ukpF, byteTnyDQqy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256G2yhKlU, BigInt("0"))
		assert.equal(uint256PDcepvg, BigInt("0"))
		assert.equal(uint256QGimMUx, BigInt("0"))
		assert.equal(uint256UpfQbby, BigInt("0"))
		assert.equal(uint256q6uJ0py, BigInt("3000000000000000000000000000"))
		assert.equal(uint256tCxWgIA, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const Revivec9gMcM = await Revive.new({from: accounts[0]});
		const addressWqj2GTV = accounts[1]
		const addresse7YnzlT = accounts[2]
		const uint256X9UPAhF = await Revivec9gMcM.allowance.call(addresse7YnzlT, addressWqj2GTV, {from: accounts[4]});
		const addresstg7ense = await Revivec9gMcM.owner.call({from: accounts[1]});
//		await Revivec9gMcM.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addresstg7ense, 0xb312cfEBccEe218b977D50d9BDce30C630DE5aD5)
		assert.equal(uint256X9UPAhF, BigInt("0"))
		await expect(Revivec9gMcM.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveRF0diWg = await Revive.new({from: accounts[4]});
		const addressrM8s4q7 = accounts[3]
		const uinteyFabzi = BigInt("495")
		const addresskW0WJXk = "0x0000000000000000000000000000000000000001"
		const addresssTU4nLd = accounts[4]
		const uint256hbDiwLn = await ReviveRF0diWg.totalBalanceOf.call(addressrM8s4q7, {from: accounts[0]});
//		const addressL6qDk99 = await ReviveRF0diWg.recoverERC20.call(addresskW0WJXk, uinteyFabzi, {from: accounts[4]});
//		const addressq8b2l5w = await ReviveRF0diWg.transferOwnership.call(addresssTU4nLd, {from: accounts[0]});
//		const boolIoq6nMM = await ReviveRF0diWg.isOwner.call({from: accounts[2]});

		assert.equal(uint256hbDiwLn, BigInt("0"))
		await expect(ReviveRF0diWg.recoverERC20.call(addresskW0WJXk, uinteyFabzi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveRF0diWg = await Revive.new({from: accounts[4]});
		const addressjXYYRLk = accounts[4]
		const addressK5eKIax = accounts[4]
		const uintvJ0QWeX = BigInt("1295")
		const uint256ZkbUUn7 = await ReviveRF0diWg.balanceOf.call(addressjXYYRLk, {from: accounts[2]});
		const uint256hbDiwLn = await ReviveRF0diWg.totalBalanceOf.call(addressK5eKIax, {from: accounts[0]});
//		const uint256QbqrcBk = await ReviveRF0diWg.recoverERC20.call(uintvJ0QWeX, {from: accounts[4]});

		assert.equal(uint256ZkbUUn7, BigInt("3000000000000000000000000000"))
		assert.equal(uint256hbDiwLn, BigInt("3000000000000000000000000000"))
		await expect(ReviveRF0diWg.recoverERC20.call(uintvJ0QWeX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTIYmrrg = await Revive.new({from: accounts[4]});
		const uintr1uV9zz = BigInt("999")
		const uintjAM0Tie = BigInt("1798")
		const bytesZcTW3H = "0x0719050306031f1e15140a1f12121d0d10142014120807fffffffe1b010d1b15081a04"
		const addressUBEEKjn = accounts[2]
		const uintbL8l77I = BigInt("390")
		const bytegYEWxG2 = "0x101d0a02140a011e041b0a050b1112120a0818111f1516170c1a1701090d1206"
		const bytetbyn2Cz = "0x0c130113090216080e1a001510170d140b170d10100c1b130e001a0d140c0903"
		const addressYt0zFbv = "0x0000000000000000000000000000000000000001"
		const uintbbR1ER7 = BigInt("1019")
		const addressulPnmX8 = accounts[2]
//		const boolmvbIlb1 = await ReviveTIYmrrg.transferWithLock.call(addressUBEEKjn, bytesZcTW3H, uintjAM0Tie, uintr1uV9zz, {from: accounts[4]});
//		const boolD3r2Lp = await ReviveTIYmrrg.extendLock.call(bytegYEWxG2, uintbL8l77I, {from: accounts[2]});
//		const uint256NjXS6vi = await ReviveTIYmrrg.tokensUnlockable.call(addressYt0zFbv, bytetbyn2Cz, {from: accounts[1]});
//		const boolpccjqK = await ReviveTIYmrrg.decreaseAllowance.call(addressulPnmX8, uintbbR1ER7, {from: accounts[4]});

		await expect(ReviveTIYmrrg.transferWithLock.call(addressUBEEKjn, bytesZcTW3H, uintjAM0Tie, uintr1uV9zz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveRF0diWg = await Revive.new({from: accounts[4]});
		const addressycSNgb = accounts[5]
		const uintuW8jsVN = BigInt("1086")
		const uint256hbDiwLn = await ReviveRF0diWg.totalBalanceOf.call(addressycSNgb, {from: accounts[0]});
//		const uint256zSWQa4F = await ReviveRF0diWg.recoverERC20.call(uintuW8jsVN, {from: accounts[1]});

		assert.equal(uint256hbDiwLn, BigInt("0"))
		await expect(ReviveRF0diWg.recoverERC20.call(uintuW8jsVN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFuzDsgH = await Revive.new({from: accounts[4]});
		const addresslzqmDU = accounts[5]
		const uintVjgLRZ6 = BigInt("1894")
		const uint256UpfQbby = await ReviveFuzDsgH.getUnlockableTokens.call(addresslzqmDU, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256TOTkTpT = await ReviveFuzDsgH.recoverERC20.call(uintVjgLRZ6, {from: accounts[2]});

		assert.equal(uint256UpfQbby, BigInt("0"))
		await expect(ReviveFuzDsgH.recoverERC20.call(uintVjgLRZ6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTIYmrrg = await Revive.new({from: accounts[4]});
		const uintYA0Shoz = BigInt("999")
		const uintPvs76g5 = BigInt("1798")
		const byteJKKgPE8 = "0x0719050306031f1e15140a1f12121d0d10142014120807021bfffffffe0d1b15081a04"
		const addressMerg84Y = accounts[2]
		const uintkPk6FBZ = BigInt("1711")
		const addressFgxAtie = accounts[3]
		const byteYfM8oAK = "0x1a0f08021f111e15191213160a1c1c0e1a0c140e0c1c0f04061e071d141d2009"
		const address6hQvrF = accounts[2]
//		const boolmvbIlb1 = await ReviveTIYmrrg.transferWithLock.call(addressMerg84Y, byteJKKgPE8, uintPvs76g5, uintYA0Shoz, {from: accounts[4]});
//		const boolccfZLQ7 = await ReviveTIYmrrg.decreaseAllowance.call(addressFgxAtie, uintkPk6FBZ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256KRlBqBh = await ReviveTIYmrrg.tokensUnlockable.call(address6hQvrF, byteYfM8oAK, {from: accounts[1]});

		await expect(ReviveTIYmrrg.transferWithLock.call(addressMerg84Y, byteJKKgPE8, uintPvs76g5, uintYA0Shoz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveRF0diWg = await Revive.new({from: accounts[4]});
		const addressxH603MB = accounts[4]
		const addresszFpY17v = accounts[1]
		const uintPa5sn7d = BigInt("922")
		const uint256hbDiwLn = await ReviveRF0diWg.totalBalanceOf.call(addressxH603MB, {from: accounts[0]});
		const uint256vCjSXHo = await ReviveRF0diWg.getUnlockableTokens.call(addresszFpY17v, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256vS3xWs = await ReviveRF0diWg.recoverERC20.call(uintPa5sn7d, {from: accounts[4]});

		assert.equal(uint256hbDiwLn, BigInt("3000000000000000000000000000"))
		assert.equal(uint256vCjSXHo, BigInt("0"))
		await expect(ReviveRF0diWg.recoverERC20.call(uintPa5sn7d, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveRF0diWg = await Revive.new({from: accounts[4]});
		const addressJLTKkAz = accounts[5]
		const uintaL4455 = BigInt("2033")
		const uint256hbDiwLn = await ReviveRF0diWg.totalBalanceOf.call(addressJLTKkAz, {from: accounts[0]});
//		const uint256DMQ7CRb = await ReviveRF0diWg.recoverERC20.call(uintaL4455, {from: accounts[4]});

		assert.equal(uint256hbDiwLn, BigInt("0"))
		await expect(ReviveRF0diWg.recoverERC20.call(uintaL4455, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTIYmrrg = await Revive.new({from: accounts[4]});
		const uinte9shqDQ = BigInt("1845")
		const uintPC9pqgn = BigInt("999")
		const uintyI0RWOy = BigInt("1801")
		const byteLaqBs5m = "0x0719050306031f1e15140a1f12121d0d10142014120807021b010d1b15081a04"
		const addressEFUYCw = accounts[2]
//		const uint256ZQfbFGz = await ReviveTIYmrrg.recoverERC20.call(uinte9shqDQ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolmvbIlb1 = await ReviveTIYmrrg.transferWithLock.call(addressEFUYCw, byteLaqBs5m, uintyI0RWOy, uintPC9pqgn, {from: accounts[4]});

		await expect(ReviveTIYmrrg.recoverERC20.call(uinte9shqDQ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFuzDsgH = await Revive.new({from: accounts[4]});
		const uintXZgIGTK = BigInt("297")
		const addressOKtuYKZ = accounts[5]
//		const uint256K08r93K = await ReviveFuzDsgH.recoverERC20.call(uintXZgIGTK, {from: accounts[3]});
//		const uint256UpfQbby = await ReviveFuzDsgH.getUnlockableTokens.call(addressOKtuYKZ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ReviveFuzDsgH.recoverERC20.call(uintXZgIGTK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveRF0diWg = await Revive.new({from: accounts[4]});
		const addressvwRHWA2 = "0x0000000000000000000000000000000000000001"
		const uintwqJt97T = BigInt("392")
		const addressXp1SvBz = accounts[4]
		const addresskUBGttP = await ReviveRF0diWg.owner.call({from: accounts[1]});
		const uint256pM2z4l6 = await ReviveRF0diWg.unlock.call(addressvwRHWA2, {from: accounts[1]});
//		const uint256ybHNVL = await ReviveRF0diWg.recoverERC20.call(uintwqJt97T, {from: accounts[4]});
//		const uint256hbDiwLn = await ReviveRF0diWg.totalBalanceOf.call(addressXp1SvBz, {from: accounts[0]});

		assert.equal(addresskUBGttP, 0x374B3C7981C3543c9F45652c5981b55ce6c35dd3)
		assert.equal(uint256pM2z4l6, BigInt("0"))
		await expect(ReviveRF0diWg.recoverERC20.call(uintwqJt97T, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFuzDsgH = await Revive.new({from: accounts[4]});
		const addresshJ1Gg7U = accounts[5]
		const uintA28AWOu = BigInt("97")
		const uintRvRyE1l = BigInt("1403")
		const bytecSD3yMM = "0x091f1303040e0e1b191317060a111d150c0c1b0903131b1f0d1415090608141a"
		const uint256UpfQbby = await ReviveFuzDsgH.getUnlockableTokens.call(addresshJ1Gg7U, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256VDzjK5x = await ReviveFuzDsgH.recoverERC20.call(uintA28AWOu, {from: accounts[2]});
//		const boolu1irbZN = await ReviveFuzDsgH.increaseLockAmount.call(bytecSD3yMM, uintRvRyE1l, {from: accounts[2]});

		assert.equal(uint256UpfQbby, BigInt("0"))
		await expect(ReviveFuzDsgH.recoverERC20.call(uintA28AWOu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})