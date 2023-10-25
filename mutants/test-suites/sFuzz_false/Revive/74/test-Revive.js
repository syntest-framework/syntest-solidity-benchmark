const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const Reviver42MoWO = await Revive.new({from: accounts[3]});
		const byteeu240ij = "0x1f06161a1206081f02180f170b0f190d042005140f131d061d1619170d19110f"
		const addressnOPZYSW = accounts[3]
		const addressfsAB3X = accounts[3]
		const uintjyL9aTW = BigInt("1708")
		const addressUytISoF = accounts[3]
		const addressxQczSzm = accounts[3]
		const uintkhQ5V2C = BigInt("669")
		const byteEABn7um = "0x0a150c0b090a1b181e0e0b091b1d000e0b171d0d11121b1919161e190c1d0e06"
		const addressGQ2ORwP = accounts[2]
		const addressKNa4UFv = "0x0000000000000000000000000000000000000001"
		const uint256uVr51st = await Reviver42MoWO.tokensUnlockable.call(addressnOPZYSW, byteeu240ij, {from: accounts[4]});
		const uint256ZUhsL3 = await Reviver42MoWO.getUnlockableTokens.call(addressfsAB3X, {from: accounts[0]});
		const addressRBo0gMQ = await Reviver42MoWO.owner.call({from: accounts[2]});
//		const boolG1HzsQb = await Reviver42MoWO.transferFrom.call(addressxQczSzm, addressUytISoF, uintjyL9aTW, {from: accounts[3]});
//		const uint256ZawYVq6 = await Reviver42MoWO.tokensLockedAtTime.call(addressGQ2ORwP, byteEABn7um, uintkhQ5V2C, {from: accounts[1]});
//		const uint256rNIWuNo = await Reviver42MoWO.balanceOf.call(addressKNa4UFv, {from: accounts[1]});

		assert.equal(addressRBo0gMQ, 0x5A3d7A2BE04AE8db7AA40691d868997D5e6f6787)
		assert.equal(uint256ZUhsL3, BigInt("0"))
		assert.equal(uint256uVr51st, BigInt("0"))
		await expect(Reviver42MoWO.transferFrom.call(addressxQczSzm, addressUytISoF, uintjyL9aTW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveNixmMI9 = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const addressfcTVrm = accounts[5]
		const byterCEvR7 = "0x20051506100501021f0717010f17090e1d161c12071106191b0610070f1a0804"
		const addressSuE6gh = accounts[2]
		const uintvIK6vhz = BigInt("226")
		const byteq8DaRN = "0x1e181e030c170a02081f1a021c0615061e11141d1501090f071b051e070b0009"
		const uint256KMgrWgJ = await ReviveNixmMI9.unlock.call(addressfcTVrm, {from: accounts[0]});
		const uint256cQ88tdU = await ReviveNixmMI9.tokensLocked.call(addressSuE6gh, byterCEvR7, {from: accounts[5]});
		const boolVpD0qvh = await ReviveNixmMI9.increaseLockAmount.call(byteq8DaRN, uintvIK6vhz, {from: accounts[1]});
		const boolhOicqhs = await ReviveNixmMI9.isOwner.call({from: accounts[0]});
		const addressmpaFOLd = await ReviveNixmMI9.owner.call({from: accounts[5]});
	});

	it('test for Revive', async () => {
		const Reviveqk6eipX = await Revive.new({from: accounts[4]});
		const byteMTzDFBG = "0x02101b0413100d130114030a0d10160a0c0310140c180811170c160218080d06"
		const address5leyDU = accounts[2]
		const uint256fgwlgmu = await Reviveqk6eipX.totalSupply.call({from: accounts[4]});
		const uint256I2AAyN = await Reviveqk6eipX.tokensLocked.call(address5leyDU, byteMTzDFBG, {from: accounts[2]});

		assert.equal(uint256I2AAyN, BigInt("0"))
		assert.equal(uint256fgwlgmu, BigInt("3000000000000000000000000000"))
	});

	it('test for Revive', async () => {
		const ReviveRMMrapc = await Revive.new({from: accounts[3]});
		const uintlZ7boXR = BigInt("1609")
		const addressWIltWSi = accounts[2]
		const addressjUHdZy2 = await ReviveRMMrapc.owner.call({from: accounts[3]});
		const boolIE230sZ = await ReviveRMMrapc.approve.call(addressWIltWSi, uintlZ7boXR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressjUHdZy2, 0x5A3d7A2BE04AE8db7AA40691d868997D5e6f6787)
		assert.equal(boolIE230sZ, true)
	});

	it('test for Revive', async () => {
		const ReviveS0SZnLa = await Revive.new({from: accounts[0]});
		const addressAVuy4Yy = accounts[4]
		const uinthoUQ2W = BigInt("1199")
		const addressPwJRBsp = accounts[3]
		const uintaR1QeVk = BigInt("693")
		const addressVu3CM1f = accounts[4]
		const addressmRbgdZd = "0x0000000000000000000000000000000000000001"
		const addresse4JulYq = accounts[3]
		const uintLui6l1w = BigInt("935")
		const uintjQJsQSM = BigInt("576")
		const byteWITWzyR = "0x19001e1b190e0b1e090413000c061c0d131c1e091001030c061a130206010b1b"
		const addressyc1nb6Q = accounts[0]
		const uint256RPH6Ab = await ReviveS0SZnLa.totalBalanceOf.call(addressAVuy4Yy, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAvRloTM = await ReviveS0SZnLa.decreaseAllowance.call(addressPwJRBsp, uinthoUQ2W, {from: accounts[2]});
//		const boolz5VWMHn = await ReviveS0SZnLa.increaseAllowance.call(addressVu3CM1f, uintaR1QeVk, {from: accounts[0]});
//		const uint256UjlfERP = await ReviveS0SZnLa.getUnlockableTokens.call(addressmRbgdZd, {from: accounts[2]});
//		const uint256gquRpX9 = await ReviveS0SZnLa.balanceOf.call(addresse4JulYq, {from: accounts[5]});
//		const boolxXOaD6H = await ReviveS0SZnLa.transferWithLock.call(addressyc1nb6Q, byteWITWzyR, uintjQJsQSM, uintLui6l1w, {from: accounts[3]});

		assert.equal(uint256RPH6Ab, BigInt("0"))
		await expect(ReviveS0SZnLa.decreaseAllowance.call(addressPwJRBsp, uinthoUQ2W, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivexh4uq0k = await Revive.new({from: accounts[3]});
		const addressjM5r1eD = accounts[3]
		const uintG0OyDvj = BigInt("1080")
		const addressf9qUITR = accounts[5]
		const addressybshem8 = await Revivexh4uq0k.owner.call({from: accounts[5]});
		const uint256rLEPXC = await Revivexh4uq0k.unlock.call(addressjM5r1eD, {from: accounts[5]});
//		const address7S3eVB = await Revivexh4uq0k.recoverERC20.call(addressf9qUITR, uintG0OyDvj, {from: accounts[4]});

		assert.equal(addressybshem8, 0x5A3d7A2BE04AE8db7AA40691d868997D5e6f6787)
		assert.equal(uint256rLEPXC, BigInt("0"))
		await expect(Revivexh4uq0k.recoverERC20.call(addressf9qUITR, uintG0OyDvj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTMZ75uS = await Revive.new({from: accounts[1]});
		const uintWTIZdbN = BigInt("1286")
		const uintFEqDgP2 = BigInt("1952")
		const byteibd4rkR = "0x1e100d0c120703020e0a11120512001816041e03201b091703041802070a130e"
		const addressMynbwE0 = "0x0000000000000000000000000000000000000001"
		const byteo1q0BSi = "0x0a0c0607171e1e1e191f101811120d0c0403090d011f08030606141d0e140515"
		const addressxvXmjh = accounts[1]
		const uinthHbq2KL = BigInt("1458")
		const uintcCVFue = BigInt("1076")
		const bytehrsm5LR = "0x05161c131a0e091602011e010117101311181e1d18100d141f0d0c131f18050f"
//		const boolHYQ0xoe = await ReviveTMZ75uS.transferWithLock.call(addressMynbwE0, byteibd4rkR, uintFEqDgP2, uintWTIZdbN, {from: accounts[4]});
//		const uint256a3IQWpB = await ReviveTMZ75uS.tokensUnlockable.call(addressxvXmjh, byteo1q0BSi, {from: accounts[4]});
//		await ReviveTMZ75uS.renounceOwnership.call({from: accounts[0]});
//		const boolN2Vww1A = await ReviveTMZ75uS.lock.call(bytehrsm5LR, uintcCVFue, uinthHbq2KL, {from: accounts[2]});

		await expect(ReviveTMZ75uS.transferWithLock.call(addressMynbwE0, byteibd4rkR, uintFEqDgP2, uintWTIZdbN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveaiaOVTX = await Revive.new({from: accounts[2]});
		const uintgczpiw6 = BigInt("2041")
		const byteDFEBrQ3 = "0x1a0e031105131a191608101605161514121f051402031d0315181e0520150c17"
		const uintDsstcwz = BigInt("1256")
		const byteTWnOyEn = "0x0c131b11050a0315172001071d0d13061804011811120106140d07191301090b"
		const uintD655eHN = BigInt("289")
		const addresstWO6kGY = accounts[1]
//		const boolMa1m44q = await ReviveaiaOVTX.increaseLockAmount.call(byteDFEBrQ3, uintgczpiw6, {from: accounts[3]});
//		const boolskwxNTy = await ReviveaiaOVTX.extendLock.call(byteTWnOyEn, uintDsstcwz, {from: accounts[4]});
//		await ReviveaiaOVTX.onlyOwner.call({from: accounts[4]});
//		const boolcmNYhNg = await ReviveaiaOVTX.transfer.call(addresstWO6kGY, uintD655eHN, {from: accounts[3]});
//		await ReviveaiaOVTX.renounceOwnership.call({from: accounts[4]});

		await expect(ReviveaiaOVTX.increaseLockAmount.call(byteDFEBrQ3, uintgczpiw6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveVYPQS6A = await Revive.new({from: accounts[2]});
		const uintLKp0Fy = BigInt("615")
		const byteov8xs9 = "0x1c0201051712170f0a03170c00031812100e1807141e03020b01051301020f1a"
		const uintp85uz3f = BigInt("568")
		const addressZqAnxNM = accounts[0]
		const addressZsM4L2e = accounts[1]
//		await ReviveVYPQS6A.onlyOwner.call({from: accounts[1]});
//		const booltjF40QR = await ReviveVYPQS6A.extendLock.call(byteov8xs9, uintLKp0Fy, {from: accounts[4]});
//		const boolLS43Ljd = await ReviveVYPQS6A.approve.call(addressZqAnxNM, uintp85uz3f, {from: accounts[2]});
//		const addressdNbx5Ex = await ReviveVYPQS6A.transferOwnership.call(addressZsM4L2e, {from: accounts[2]});

		await expect(ReviveVYPQS6A.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviver42MoWO = await Revive.new({from: accounts[3]});
		const byteLjgsmMT = "0x1f06161a1206081f02180f170b0f190d042005140f131d061d1619170d19110f"
		const addressxeH4JU = accounts[3]
		const addressGBDjXeo = accounts[3]
		const uintm43dVoy = BigInt("1578")
		const bytercwVxtc = "0x17171d180c171117021c02050e151e2017101f0b0804021e06111b0810140219"
		const uintjeZL36k = BigInt("1708")
		const addressRvpLEL = accounts[4]
		const addressb8WYm9 = accounts[3]
		const uinth52l4M9 = BigInt("669")
		const byterVMIMTf = "0x0a150c0b090a1b181e0e0b091b1d000e0b171d0d11121b1919161e190c1d0e06"
		const addressX2D7Vsa = accounts[2]
		const addressBWckJIg = "0x0000000000000000000000000000000000000001"
		const uint256uVr51st = await Reviver42MoWO.tokensUnlockable.call(addressxeH4JU, byteLjgsmMT, {from: accounts[4]});
		const uint256ZUhsL3 = await Reviver42MoWO.getUnlockableTokens.call(addressGBDjXeo, {from: accounts[0]});
		const addressRBo0gMQ = await Reviver42MoWO.owner.call({from: accounts[2]});
//		const boolAompoaj = await Reviver42MoWO.extendLock.call(bytercwVxtc, uintm43dVoy, {from: accounts[5]});
//		const boolG1HzsQb = await Reviver42MoWO.transferFrom.call(addressb8WYm9, addressRvpLEL, uintjeZL36k, {from: accounts[3]});
//		const uint256ZawYVq6 = await Reviver42MoWO.tokensLockedAtTime.call(addressX2D7Vsa, byterVMIMTf, uinth52l4M9, {from: accounts[1]});
//		const uint256rNIWuNo = await Reviver42MoWO.balanceOf.call(addressBWckJIg, {from: accounts[1]});

		assert.equal(addressRBo0gMQ, 0x5A3d7A2BE04AE8db7AA40691d868997D5e6f6787)
		assert.equal(uint256ZUhsL3, BigInt("0"))
		assert.equal(uint256uVr51st, BigInt("0"))
		await expect(Reviver42MoWO.extendLock.call(bytercwVxtc, uintm43dVoy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivexh4uq0k = await Revive.new({from: accounts[3]});
		const address8aUReH = accounts[3]
		const uintQCgdDs2 = BigInt("848")
		const addressT3hbYwE = accounts[3]
		const uintrQppISS = BigInt("1080")
		const addressa2dJ6H2 = accounts[5]
		const uinte1fUFlT = BigInt("395")
		const addressbfmyT8i = accounts[2]
		const addressybshem8 = await Revivexh4uq0k.owner.call({from: accounts[5]});
		const uint256rLEPXC = await Revivexh4uq0k.unlock.call(address8aUReH, {from: accounts[5]});
		const boolz4UGzJ = await Revivexh4uq0k.isOwner.call({from: accounts[0]});
		const boolmEsdB6J = await Revivexh4uq0k.increaseAllowance.call(addressT3hbYwE, uintQCgdDs2, {from: "0x0000000000000000000000000000000000000001"});
//		const address7S3eVB = await Revivexh4uq0k.recoverERC20.call(addressa2dJ6H2, uintrQppISS, {from: accounts[4]});
//		const bool6MtaTs = await Revivexh4uq0k.transfer.call(addressbfmyT8i, uinte1fUFlT, {from: accounts[2]});

		assert.equal(addressybshem8, 0x5A3d7A2BE04AE8db7AA40691d868997D5e6f6787)
		assert.equal(boolmEsdB6J, true)
		assert.equal(boolz4UGzJ, false)
		assert.equal(uint256rLEPXC, BigInt("0"))
		await expect(Revivexh4uq0k.recoverERC20.call(addressa2dJ6H2, uintrQppISS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivefEJ6cin = await Revive.new({from: accounts[2]});
		const uintIdlmm6h = BigInt("604")
		const addresst7KJZbR = accounts[3]
		const uintGyID9vF = BigInt("849")
		const bytez8eVm02 = "0x1f1a1a1e12051b140d12111d0e1a20021d000a201b0116130f041d080a110917"
		const addressvMRIIQp = accounts[4]
		const uintr8xNUgX = BigInt("608")
		const addressID5oJG = "0x0000000000000000000000000000000000000001"
		const byter9qNifn = "0x100218151a09030d1d09191c171a050c1a0c070903170e00160b161718061905"
		const addressfCMPvYB = accounts[4]
		const uintcGRoxWU = BigInt("246")
		const uintPwaGD30 = BigInt("1556")
		const bytefjAlgb = "0x000a0412141a02181e1b12131113081d12021b0b1c1a01060c0a1e031c0c020f"
		const boolZHFJkhn = await RevivefEJ6cin.transfer.call(addresst7KJZbR, uintIdlmm6h, {from: accounts[2]});
		const uint256T5VlQev = await RevivefEJ6cin.tokensLockedAtTime.call(addressvMRIIQp, bytez8eVm02, uintGyID9vF, {from: accounts[5]});
		const boolxSHKKw = await RevivefEJ6cin.increaseAllowance.call(addressID5oJG, uintr8xNUgX, {from: accounts[3]});
		const uint256Og3YjpE = await RevivefEJ6cin.tokensLocked.call(addressfCMPvYB, byter9qNifn, {from: accounts[0]});
		const addressIbBpnJD = await RevivefEJ6cin.owner.call({from: accounts[0]});
//		const boolX8Afb7 = await RevivefEJ6cin.lock.call(bytefjAlgb, uintPwaGD30, uintcGRoxWU, {from: accounts[1]});

		assert.equal(addressIbBpnJD, 0xE18BaAB581aBe7756bF9dfEFc1FD083F2a5a1D4f)
		assert.equal(boolZHFJkhn, true)
		assert.equal(boolxSHKKw, true)
		assert.equal(uint256Og3YjpE, BigInt("0"))
		assert.equal(uint256T5VlQev, BigInt("0"))
		await expect(RevivefEJ6cin.lock.call(bytefjAlgb, uintPwaGD30, uintcGRoxWU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivexh4uq0k = await Revive.new({from: accounts[3]});
		const addressr8AHaNE = accounts[3]
		const addressHYoDgy9 = accounts[3]
		const uintb6D24mg = BigInt("822")
		const uintIYAU1Xf = BigInt("1113")
		const addressnrCoPh9 = accounts[0]
		const uintjAtkZvp = BigInt("1080")
		const addressI2oSvxa = accounts[5]
		const addressybshem8 = await Revivexh4uq0k.owner.call({from: accounts[5]});
		const uint256gYM1UAK = await Revivexh4uq0k.totalBalanceOf.call(addressr8AHaNE, {from: accounts[5]});
		const uint256rLEPXC = await Revivexh4uq0k.unlock.call(addressHYoDgy9, {from: accounts[5]});
//		const uint256BoOO5rt = await Revivexh4uq0k.recoverERC20.call(uintb6D24mg, {from: accounts[2]});
//		const boolQYt7MH = await Revivexh4uq0k.decreaseAllowance.call(addressnrCoPh9, uintIYAU1Xf, {from: accounts[3]});
//		const address7S3eVB = await Revivexh4uq0k.recoverERC20.call(addressI2oSvxa, uintjAtkZvp, {from: accounts[4]});

		assert.equal(addressybshem8, 0x5A3d7A2BE04AE8db7AA40691d868997D5e6f6787)
		assert.equal(uint256gYM1UAK, BigInt("3000000000000000000000000000"))
		assert.equal(uint256rLEPXC, BigInt("0"))
		await expect(Revivexh4uq0k.recoverERC20.call(uintb6D24mg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveqk6eipX = await Revive.new({from: accounts[4]});
		const uintUkZcwMv = BigInt("527")
		const addressF9SzbF2 = accounts[2]
		const uint256fgwlgmu = await Reviveqk6eipX.totalSupply.call({from: accounts[4]});
//		const uint256PnpZUTs = await Reviveqk6eipX.recoverERC20.call(uintUkZcwMv, {from: accounts[1]});
//		const uint256kGbXKHw = await Reviveqk6eipX.unlock.call(addressF9SzbF2, {from: accounts[5]});

		assert.equal(uint256fgwlgmu, BigInt("3000000000000000000000000000"))
		await expect(Reviveqk6eipX.recoverERC20.call(uintUkZcwMv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveS0SZnLa = await Revive.new({from: accounts[0]});
		const addressqXnUB3W = accounts[5]
		const addressytHyHti = accounts[4]
		const addressPAD7igG = accounts[4]
		const uintKDcDpSy = BigInt("1199")
		const addressbtjqSkw = accounts[3]
		const addressrZXZuqq = "0x0000000000000000000000000000000000000001"
		const addressUlddgQs = accounts[3]
		const uintrcuasQk = BigInt("935")
		const uintUGoWWCP = BigInt("576")
		const bytewiB7SZy = "0x19001e1b190e0b1e090413000c061c0d131c1e091001030c061a130206010b1b"
		const addressWyUAMS = accounts[0]
		const uint256AlFQFzd = await ReviveS0SZnLa.allowance.call(addressytHyHti, addressqXnUB3W, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RPH6Ab = await ReviveS0SZnLa.totalBalanceOf.call(addressPAD7igG, {from: "0x0000000000000000000000000000000000000001"});
//		const boolAvRloTM = await ReviveS0SZnLa.decreaseAllowance.call(addressbtjqSkw, uintKDcDpSy, {from: accounts[2]});
//		const uint256UjlfERP = await ReviveS0SZnLa.getUnlockableTokens.call(addressrZXZuqq, {from: accounts[2]});
//		const uint256gquRpX9 = await ReviveS0SZnLa.balanceOf.call(addressUlddgQs, {from: accounts[5]});
//		const boolxXOaD6H = await ReviveS0SZnLa.transferWithLock.call(addressWyUAMS, bytewiB7SZy, uintUGoWWCP, uintrcuasQk, {from: accounts[3]});

		assert.equal(uint256AlFQFzd, BigInt("0"))
		assert.equal(uint256RPH6Ab, BigInt("0"))
		await expect(ReviveS0SZnLa.decreaseAllowance.call(addressbtjqSkw, uintKDcDpSy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveH6q9PNQ = await Revive.new({from: accounts[1]});
		const uintQpnWDrB = BigInt("574")
		const addressnuixGLY = accounts[2]
		const address07wzei = accounts[0]
//		const addressAqUlJ6Q = await ReviveH6q9PNQ.recoverERC20.call(addressnuixGLY, uintQpnWDrB, {from: accounts[1]});
//		await ReviveH6q9PNQ.renounceOwnership.call({from: accounts[5]});
//		const addressK4xUYG = await ReviveH6q9PNQ.transferOwnership.call(address07wzei, {from: accounts[2]});

		await expect(ReviveH6q9PNQ.recoverERC20.call(addressnuixGLY, uintQpnWDrB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveqk6eipX = await Revive.new({from: accounts[4]});
		const uinta4ftS0G = BigInt("366")
		const byteM5SrcN1 = "0x071302141e151e1504001c0f0c040504101f0b121908021312080f0f041e0b15"
		const addressonXw3gY = accounts[3]
		const addressYr2jgJO = accounts[2]
		const addressFOdYvqV = accounts[4]
//		const uint256ebn4M4O = await Reviveqk6eipX.recoverERC20.call(uinta4ftS0G, {from: accounts[2]});
//		const uint256iuzW0k = await Reviveqk6eipX.tokensUnlockable.call(addressonXw3gY, byteM5SrcN1, {from: accounts[3]});
//		const uint256Ethiv9g = await Reviveqk6eipX.getUnlockableTokens.call(addressYr2jgJO, {from: accounts[0]});
//		const uint256ekWpexE = await Reviveqk6eipX.unlock.call(addressFOdYvqV, {from: accounts[2]});

		await expect(Reviveqk6eipX.recoverERC20.call(uinta4ftS0G, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTMZ75uS = await Revive.new({from: accounts[1]});
		const addressyFmNMq = "0x00000000000000000000000000000000000000-1"
		const uintmtqRiu = BigInt("1250")
		const addressourJMig = accounts[4]
//		const uint256RYPceRI = await ReviveTMZ75uS.totalBalanceOf.call(addressyFmNMq, {from: "0x0000000000000000000000000000000000000001"});
//		await ReviveTMZ75uS.renounceOwnership.call({from: accounts[4]});
//		const boolzlbdfeI = await ReviveTMZ75uS.increaseAllowance.call(addressourJMig, uintmtqRiu, {from: accounts[2]});

		await expect(ReviveTMZ75uS.totalBalanceOf.call(addressyFmNMq, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveqk6eipX = await Revive.new({from: accounts[4]});
		const addressNGmze68 = accounts[4]
		const uintgTGBp4 = BigInt("1257")
		const uinte8OYfEU = BigInt("434")
		const byteJHAD4pw = "0x0b100d1c1a0f1d1f11181008030d03020e0703101f081c1d0b010c1b0d0b1112"
		const uinthU3Sfee = BigInt("1462")
		const addressGEHqCFY = "0x0000000000000000000000000000000000000001"
		const addressTWHXRf2 = await Reviveqk6eipX.transferOwnership.call(addressNGmze68, {from: accounts[4]});
//		const boolsLNvru4 = await Reviveqk6eipX.lock.call(byteJHAD4pw, uinte8OYfEU, uintgTGBp4, {from: accounts[5]});
//		const booljGA3DK1 = await Reviveqk6eipX.transfer.call(addressGEHqCFY, uinthU3Sfee, {from: accounts[3]});
//		const uint256fgwlgmu = await Reviveqk6eipX.totalSupply.call({from: accounts[4]});

		await expect(Reviveqk6eipX.lock.call(byteJHAD4pw, uinte8OYfEU, uintgTGBp4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveic3guGQ = await Revive.new({from: accounts[0]});
		const uintKxoOOS5 = BigInt("1029")
		const bytepsi3TiV = "0x0612171a01040203031a1119031c16170818150c161c0c1f1d14050b1e0c160b"
		const addressFSLO4Xu = accounts[4]
		const addressfX3xRyq = accounts[4]
//		await Reviveic3guGQ.renounceOwnership.call({from: accounts[0]});
//		const uint2568FwjKA = await Reviveic3guGQ.tokensLockedAtTime.call(addressFSLO4Xu, bytepsi3TiV, uintKxoOOS5, {from: accounts[3]});
//		await Reviveic3guGQ.renounceOwnership.call({from: accounts[1]});
//		const uint256xn8WpYu = await Reviveic3guGQ.getUnlockableTokens.call(addressfX3xRyq, {from: accounts[0]});
//		await Reviveic3guGQ.renounceOwnership.call({from: accounts[3]});

		await expect(Reviveic3guGQ.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveqk6eipX = await Revive.new({from: accounts[4]});
		const uintodJ6Yku = BigInt("1588")
		const addressbWbX0el = accounts[2]
		const uintyjWKTTt = BigInt("47")
		const byteKYFdeSK = "0x051f0e1d191a1b181d17051d1d1b0c1b1c1f0b1f050218030718041f060a0312"
		const addressivYr96 = accounts[2]
		const uint256fgwlgmu = await Reviveqk6eipX.totalSupply.call({from: accounts[4]});
//		const uint256kwwxhRF = await Reviveqk6eipX.recoverERC20.call(uintodJ6Yku, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Ethiv9g = await Reviveqk6eipX.getUnlockableTokens.call(addressbWbX0el, {from: accounts[0]});
//		const uint256vDzOo0n = await Reviveqk6eipX.tokensLockedAtTime.call(addressivYr96, byteKYFdeSK, uintyjWKTTt, {from: accounts[0]});

		assert.equal(uint256fgwlgmu, BigInt("3000000000000000000000000000"))
		await expect(Reviveqk6eipX.recoverERC20.call(uintodJ6Yku, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveEekizko = await Revive.new({from: accounts[1]});
		const uintIpxd18z = BigInt("2047")
		const byteWga2uMi = "0x181118130a02110d16130e0f090f1d070f100e200105020c1e071d0304101d18"
		const address5lX1cF = accounts[0]
		const uintw6LmbxM = BigInt("224")
		const uintCcdo34j = BigInt("1694")
		const bytetr0oQq = "0x160c011e0f13110e121516051c1e1f0a140203200f18050a0a0513020a02031a"
		const addressVRr45Wk = accounts[0]
		const byteU28cVZE = "0x0c080c151f0a1a16191f0c13151a0f1a0709060504131c1f121a1b0b1c02050e"
		const addressyXEKzgf = accounts[2]
		const uintxFyMov = BigInt("1211")
		const bytenpTdBeg = "0x020103190c190e200102161009111f01191315181906040c0b0607070d071517"
		const addressOtac0Y = accounts[3]
//		const uint256TERCSM0 = await ReviveEekizko.recoverERC20.call(uintIpxd18z, {from: accounts[2]});
//		const uint256zCnNoJr = await ReviveEekizko.tokensLocked.call(address5lX1cF, byteWga2uMi, {from: accounts[0]});
//		const boolRVq36m = await ReviveEekizko.transferWithLock.call(addressVRr45Wk, bytetr0oQq, uintCcdo34j, uintw6LmbxM, {from: accounts[4]});
//		const uint256qo7m1V7 = await ReviveEekizko.tokensUnlockable.call(addressyXEKzgf, byteU28cVZE, {from: accounts[1]});
//		const uint256lKoIlOM = await ReviveEekizko.tokensLockedAtTime.call(addressOtac0Y, bytenpTdBeg, uintxFyMov, {from: accounts[0]});

		await expect(ReviveEekizko.recoverERC20.call(uintIpxd18z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTMZ75uS = await Revive.new({from: accounts[1]});
		const uintwXUNxB = BigInt("1256")
		const uinthfETjjI = BigInt("1749")
		const uintPYGnSPN = BigInt("1161")
		const byteUsQ7udL = "0x040216021f0b19011b1a1e06031f14040b16191d1212140c12141d0e1b0e1a15"
		const addressCY139YT = "0x0000000000000000000000000000000000000001"
		const uintBPLQCBS = BigInt("1810")
		const uintCEHGDLB = BigInt("1006")
		const byteB2ABBHD = "0x1e171e19070108100e0e07191e190119191711131711190f0a130b0119140b04"
		const addressmZq1Kml = accounts[2]
//		const uint256bDqJIFE = await ReviveTMZ75uS.recoverERC20.call(uintwXUNxB, {from: accounts[3]});
//		const boolV4PlcsJ = await ReviveTMZ75uS.lock.call(byteUsQ7udL, uintPYGnSPN, uinthfETjjI, {from: accounts[2]});
//		const uint256RYPceRI = await ReviveTMZ75uS.totalBalanceOf.call(addressCY139YT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolARiOPgg = await ReviveTMZ75uS.transferWithLock.call(addressmZq1Kml, byteB2ABBHD, uintCEHGDLB, uintBPLQCBS, {from: accounts[4]});

		await expect(ReviveTMZ75uS.recoverERC20.call(uintwXUNxB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveqk6eipX = await Revive.new({from: accounts[4]});
		const uintgSVdlBg = BigInt("1983")
		const addressqcH5Du = accounts[4]
//		const uint256xayYuTK = await Reviveqk6eipX.recoverERC20.call(uintgSVdlBg, {from: accounts[0]});
//		const uint256Ethiv9g = await Reviveqk6eipX.getUnlockableTokens.call(addressqcH5Du, {from: accounts[0]});

		await expect(Reviveqk6eipX.recoverERC20.call(uintgSVdlBg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivexh4uq0k = await Revive.new({from: accounts[3]});
		const uintq2MPypj = BigInt("1064")
		const addressGUt4v36 = accounts[4]
		const addressa2Fy29X = accounts[5]
		const boolACgr9Fo = await Revivexh4uq0k.isOwner.call({from: accounts[4]});
//		const uint256nNTbRRI = await Revivexh4uq0k.recoverERC20.call(uintq2MPypj, {from: accounts[2]});
//		const uint256L3Ry2ze = await Revivexh4uq0k.unlock.call(addressGUt4v36, {from: accounts[4]});
//		const uint256rLEPXC = await Revivexh4uq0k.unlock.call(addressa2Fy29X, {from: accounts[5]});

		assert.equal(boolACgr9Fo, false)
		await expect(Revivexh4uq0k.recoverERC20.call(uintq2MPypj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveqk6eipX = await Revive.new({from: accounts[4]});
		const uintV4jdheg = BigInt("705")
		const uintgVVjomD = BigInt("838")
		const addressI2kgD8L = accounts[4]
//		const uint256ae9GOau = await Reviveqk6eipX.recoverERC20.call(uintV4jdheg, {from: accounts[2]});
//		const uint256fgwlgmu = await Reviveqk6eipX.totalSupply.call({from: accounts[4]});
//		const boolvtlTLl0 = await Reviveqk6eipX.approve.call(addressI2kgD8L, uintgVVjomD, {from: accounts[4]});

		await expect(Reviveqk6eipX.recoverERC20.call(uintV4jdheg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTMZ75uS = await Revive.new({from: accounts[1]});
		const uintz6cVGdd = BigInt("30")
		const bytezA3MuBq = "0x16101f02161105020f1b110e171e0208071d0c040a091a040a0c080b0a1d0c16"
		const addressSKUnKEJ = accounts[4]
		const address8WHQam = accounts[4]
		const address6zPWgD = "0x00000000000000000000000000000000000000-2"
		const uint256mcR2aCP = await ReviveTMZ75uS.tokensLockedAtTime.call(addressSKUnKEJ, bytezA3MuBq, uintz6cVGdd, {from: accounts[0]});
		const uint256bsteeoq = await ReviveTMZ75uS.totalBalanceOf.call(address8WHQam, {from: accounts[2]});
//		const uint256RYPceRI = await ReviveTMZ75uS.totalBalanceOf.call(address6zPWgD, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256bsteeoq, BigInt("0"))
		assert.equal(uint256mcR2aCP, BigInt("0"))
		await expect(ReviveTMZ75uS.totalBalanceOf.call(address6zPWgD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivePlVt2S = await Revive.new({from: accounts[2]});
		const uintvXmXw4z = BigInt("1560")
//		const uint256vsUZnbz = await RevivePlVt2S.recoverERC20.call(uintvXmXw4z, {from: accounts[1]});
//		await RevivePlVt2S.renounceOwnership.call({from: accounts[5]});

		await expect(RevivePlVt2S.recoverERC20.call(uintvXmXw4z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Reviveqk6eipX = await Revive.new({from: accounts[4]});
		const uintTMLomHN = BigInt("856")
//		const uint256qxLQS10 = await Reviveqk6eipX.recoverERC20.call(uintTMLomHN, {from: accounts[2]});
//		const uint256fgwlgmu = await Reviveqk6eipX.totalSupply.call({from: accounts[4]});

		await expect(Reviveqk6eipX.recoverERC20.call(uintTMLomHN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivexh4uq0k = await Revive.new({from: accounts[3]});
		const addressrxz0A1w = accounts[5]
		const uintI9ljfIC = BigInt("1082")
		const byteTvUg6HU = "0x111007191f1d191f081813170c0f051c1f1d111117070901081602051c1e070f"
		const addresszOSXtzZ = "0x0000000000000000000000000000000000000001"
		const uintXPkEUYc = BigInt("1899")
		const uint256rLEPXC = await Revivexh4uq0k.unlock.call(addressrxz0A1w, {from: accounts[5]});
		const uint256iwytK3 = await Revivexh4uq0k.tokensLockedAtTime.call(addresszOSXtzZ, byteTvUg6HU, uintI9ljfIC, {from: accounts[3]});
//		const uint256H2mPXBs = await Revivexh4uq0k.recoverERC20.call(uintXPkEUYc, {from: accounts[2]});

		assert.equal(uint256iwytK3, BigInt("0"))
		assert.equal(uint256rLEPXC, BigInt("0"))
		await expect(Revivexh4uq0k.recoverERC20.call(uintXPkEUYc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveObbbaTr = await Revive.new({from: accounts[4]});
		const uintsoqRdpR = BigInt("1758")
		const uintaDQC9Q = BigInt("278")
		const addressAxLJ7L = accounts[0]
		const addressIO3IYhv = accounts[2]
		const uintUhti6wg = BigInt("1595")
		const uinthxFAe2a = BigInt("1966")
		const byteJrIiCV = "0x110b03071c130c0d0a060b0219001e111e0c150c1b090904080a111a031c1308"
//		const uint256WAWije1 = await ReviveObbbaTr.recoverERC20.call(uintsoqRdpR, {from: accounts[3]});
//		const boolGcOrCU3 = await ReviveObbbaTr.increaseAllowance.call(addressAxLJ7L, uintaDQC9Q, {from: accounts[5]});
//		const uint256BhsVMz = await ReviveObbbaTr.unlock.call(addressIO3IYhv, {from: accounts[2]});
//		const boolj45V8Mh = await ReviveObbbaTr.lock.call(byteJrIiCV, uinthxFAe2a, uintUhti6wg, {from: accounts[2]});

		await expect(ReviveObbbaTr.recoverERC20.call(uintsoqRdpR, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTMZ75uS = await Revive.new({from: accounts[1]});
		const uintYbBTgxS = BigInt("28")
		const bytelzwxgB6 = "0x141013040d1e1012160300171c0b1f1d040710160b05011b0408021d10120a1a"
		const addressqqhJ6S6 = accounts[4]
		const uintVHD4QAU = BigInt("165")
		const uint256mcR2aCP = await ReviveTMZ75uS.tokensLockedAtTime.call(addressqqhJ6S6, bytelzwxgB6, uintYbBTgxS, {from: accounts[0]});
//		const uint256UPAy2d9 = await ReviveTMZ75uS.recoverERC20.call(uintVHD4QAU, {from: accounts[1]});

		assert.equal(uint256mcR2aCP, BigInt("0"))
		await expect(ReviveTMZ75uS.recoverERC20.call(uintVHD4QAU, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTMZ75uS = await Revive.new({from: accounts[1]});
		const addressfIQBZid = accounts[3]
		const uintZFD6xy6 = BigInt("28")
		const byteC6URFnW = "0x141013040d1e1012160300171c0b1f1d040710160b05011b0408021d10120a1a"
		const addressQSEFJAA = accounts[4]
		const uintO9SIxuW = BigInt("148")
		const uint256hpCChAl = await ReviveTMZ75uS.balanceOf.call(addressfIQBZid, {from: accounts[0]});
		const uint256mcR2aCP = await ReviveTMZ75uS.tokensLockedAtTime.call(addressQSEFJAA, byteC6URFnW, uintZFD6xy6, {from: accounts[0]});
//		const uint256UPAy2d9 = await ReviveTMZ75uS.recoverERC20.call(uintO9SIxuW, {from: accounts[1]});

		assert.equal(uint256hpCChAl, BigInt("0"))
		assert.equal(uint256mcR2aCP, BigInt("0"))
		await expect(ReviveTMZ75uS.recoverERC20.call(uintO9SIxuW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTMZ75uS = await Revive.new({from: accounts[1]});
		const bytekiyh39G = "0x1319091113130e051e0d02000e0a1b07171812111d1e140916121e08021e0315"
		const addressKD6U9Xg = accounts[3]
		const uintfAn6U0i = BigInt("28")
		const bytegdZ3063 = "0x141013040d1e1012160300171c0b1f1d040710160b05011b0408021d10120a1a"
		const addressBPArTNM = accounts[4]
		const uintRPOTYfR = BigInt("187")
		const addressZoFHF31 = "0x0000000000000000000000000000000000000001"
		const uint256mxY4G4 = await ReviveTMZ75uS.tokensLocked.call(addressKD6U9Xg, bytekiyh39G, {from: accounts[1]});
		const uint256mcR2aCP = await ReviveTMZ75uS.tokensLockedAtTime.call(addressBPArTNM, bytegdZ3063, uintfAn6U0i, {from: accounts[0]});
//		const uint256UPAy2d9 = await ReviveTMZ75uS.recoverERC20.call(uintRPOTYfR, {from: accounts[1]});
//		const uint256F6JF8Fq = await ReviveTMZ75uS.totalBalanceOf.call(addressZoFHF31, {from: accounts[4]});

		assert.equal(uint256mcR2aCP, BigInt("0"))
		assert.equal(uint256mxY4G4, BigInt("0"))
		await expect(ReviveTMZ75uS.recoverERC20.call(uintRPOTYfR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTMZ75uS = await Revive.new({from: accounts[1]});
		const uintY8OEdQt = BigInt("10")
//		const uint256UPAy2d9 = await ReviveTMZ75uS.recoverERC20.call(uintY8OEdQt, {from: accounts[1]});

		await expect(ReviveTMZ75uS.recoverERC20.call(uintY8OEdQt, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTMZ75uS = await Revive.new({from: accounts[1]});
		const uintj2m7ynP = BigInt("28")
		const byteoYo3u1M = "0x141013040d1e1015160300171c0b1f1d040710160b05011b0408021d10120a1a"
		const addressYgbTCHM = accounts[4]
		const addressC7iGrb5 = accounts[0]
		const addressLzxyX51 = accounts[5]
		const uintBz2zj1R = BigInt("685")
		const uint256mcR2aCP = await ReviveTMZ75uS.tokensLockedAtTime.call(addressYgbTCHM, byteoYo3u1M, uintj2m7ynP, {from: accounts[0]});
		const uint256U2IYFgo = await ReviveTMZ75uS.allowance.call(addressLzxyX51, addressC7iGrb5, {from: accounts[3]});
//		const uint256BpLjMLF = await ReviveTMZ75uS.recoverERC20.call(uintBz2zj1R, {from: accounts[4]});
//		await ReviveTMZ75uS.renounceOwnership.call({from: accounts[2]});

		assert.equal(uint256U2IYFgo, BigInt("0"))
		assert.equal(uint256mcR2aCP, BigInt("0"))
		await expect(ReviveTMZ75uS.recoverERC20.call(uintBz2zj1R, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveTMZ75uS = await Revive.new({from: accounts[1]});
		const uintazj95LN = BigInt("470")
		const uintnYh7Lwb = BigInt("580")
		const addressuvKU9hQ = accounts[2]
		const address8IypsA = accounts[4]
		const uintOAIKxpn = BigInt("1286")
		const uintHtr2p3E = BigInt("1952")
		const byteYoe0rFm = "0x1e100d0c120703020e0a11120512001816041e03201b091703041802070a130e"
		const addressNyuAmw = "0x0000000000000000000000000000000000000002"
		const addressyvYuCjq = accounts[5]
		const uinttlGIVAp = BigInt("865")
		const addressXLDYPJY = accounts[1]
		const addressHvtOX6g = accounts[2]
//		const uint256QP8XSGk = await ReviveTMZ75uS.recoverERC20.call(uintazj95LN, {from: accounts[4]});
//		const boolBTH5N9U = await ReviveTMZ75uS.transferFrom.call(address8IypsA, addressuvKU9hQ, uintnYh7Lwb, {from: accounts[4]});
//		const boolHYQ0xoe = await ReviveTMZ75uS.transferWithLock.call(addressNyuAmw, byteYoe0rFm, uintHtr2p3E, uintOAIKxpn, {from: accounts[4]});
//		const addresskRYR09V = await ReviveTMZ75uS.transferOwnership.call(addressyvYuCjq, {from: accounts[2]});
//		const boolOKpZfcT = await ReviveTMZ75uS.transferFrom.call(addressHvtOX6g, addressXLDYPJY, uinttlGIVAp, {from: accounts[0]});

		await expect(ReviveTMZ75uS.recoverERC20.call(uintazj95LN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})