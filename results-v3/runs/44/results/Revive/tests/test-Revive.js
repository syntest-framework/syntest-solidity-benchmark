const Revive = artifacts.require("Revive");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Revive', (accounts) => {
	it('test for Revive', async () => {
		const ReviveYATvifK = await Revive.new({from: "0x0000000000000000000000000000000000000001"});
		const uintnV7iYxL = BigInt("463")
		const uintnEpmxbP = BigInt("830")
		const bytewBxdmU = "0x0205010e0c0a0d1c011a01180a151b1f121c15171e0e050c0d16111418140e04"
		const addressl27Aw66 = accounts[4]
		const addressfbUpTDM = accounts[0]
		const addressBZqEUrD = accounts[1]
		const uintxoNoDgO = BigInt("1515")
		const addressQu44Y3W = accounts[0]
		const boolZCdasYq = await ReviveYATvifK.lock.call(bytewBxdmU, uintnEpmxbP, uintnV7iYxL, {from: accounts[2]});
		const addressSPxrw3s = await ReviveYATvifK.transferOwnership.call(addressl27Aw66, {from: accounts[3]});
		const uint256HvwJNRL = await ReviveYATvifK.getUnlockableTokens.call(addressfbUpTDM, {from: accounts[2]});
		const uint256f69glR3 = await ReviveYATvifK.balanceOf.call(addressBZqEUrD, {from: "0x0000000000000000000000000000000000000001"});
		const boolzYZJqRn = await ReviveYATvifK.approve.call(addressQu44Y3W, uintxoNoDgO, {from: accounts[1]});
	});

	it('test for Revive', async () => {
		const ReviveMkCx9L3 = await Revive.new({from: accounts[1]});
		const addressyn8SkHL = accounts[0]
		const addresseH5G2LG = accounts[1]
		const uintYhLYzmx = BigInt("1854")
		const addressvRArG1G = accounts[0]
		const addresszpGryNI = accounts[3]
		const uint256SdMksMb = await ReviveMkCx9L3.allowance.call(addresseH5G2LG, addressyn8SkHL, {from: accounts[5]});
		const boolbO59kK = await ReviveMkCx9L3.increaseAllowance.call(addressvRArG1G, uintYhLYzmx, {from: accounts[3]});
		const boollC9IX6 = await ReviveMkCx9L3.isOwner.call({from: accounts[4]});
		const uint256RhIhayX = await ReviveMkCx9L3.balanceOf.call(addresszpGryNI, {from: accounts[3]});

		assert.equal(boolbO59kK, true)
		assert.equal(boollC9IX6, false)
		assert.equal(uint256RhIhayX, BigInt("0"))
		assert.equal(uint256SdMksMb, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveFxIgJit = await Revive.new({from: accounts[4]});
		const addressDLp0QGE = accounts[2]
		const addressFS6Uvzx = accounts[2]
		const addresshZ6FS0F = "0x0000000000000000000000000000000000000001"
		const uint256tCNlPCe = await ReviveFxIgJit.getUnlockableTokens.call(addressDLp0QGE, {from: accounts[2]});
		const uint256qPqXLlP = await ReviveFxIgJit.getUnlockableTokens.call(addressFS6Uvzx, {from: accounts[5]});
		const uint256KD6eWP = await ReviveFxIgJit.totalBalanceOf.call(addresshZ6FS0F, {from: accounts[1]});

		assert.equal(uint256KD6eWP, BigInt("0"))
		assert.equal(uint256qPqXLlP, BigInt("0"))
		assert.equal(uint256tCNlPCe, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveAODyUlD = await Revive.new({from: accounts[1]});
		const uintxHAhJi = BigInt("822")
		const uintxeE2KP = BigInt("1726")
		const byteTyvp3qV = "0x1c06191d0a040d1405180d111f150c0307010e16111a1517111914030c140112"
		const addressnN2tg52 = accounts[3]
		const uint0Imqiz = BigInt("2026")
		const byteQdDVLVW = "0x0b0f1c091505160f0b011200040b111811170d011d071a0e1116190e0406071d"
		const addressxEZIu9m = accounts[2]
		const addressST5w3cv = accounts[0]
		const boolo1vSoF4 = await ReviveAODyUlD.transferWithLock.call(addressnN2tg52, byteTyvp3qV, uintxeE2KP, uintxHAhJi, {from: "0x0000000000000000000000000000000000000001"});
		const boolyx3EraH = await ReviveAODyUlD.increaseLockAmount.call(byteQdDVLVW, uint0Imqiz, {from: accounts[0]});
		const uint256mCtqms2 = await ReviveAODyUlD.balanceOf.call(addressxEZIu9m, {from: accounts[2]});
		const uint256Qc58cgb = await ReviveAODyUlD.totalBalanceOf.call(addressST5w3cv, {from: accounts[0]});

		await expect(ReviveAODyUlD.transferWithLock.call(addressnN2tg52, byteTyvp3qV, uintxeE2KP, uintxHAhJi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMQF9d0n = await Revive.new({from: accounts[1]});
		const uintKKHCtsj = BigInt("209")
		const addresswunSWoR = accounts[3]
		const uintyxLoVyM = BigInt("1740")
		const addressSzEo9dg = accounts[0]
		const addressL3tg4hz = accounts[2]
		const addressTbzVQCR = "0x0000000000000000000000000000000000000001"
		const boolCzCrb6C = await ReviveMQF9d0n.decreaseAllowance.call(addresswunSWoR, uintKKHCtsj, {from: accounts[1]});
		const boolURSxOo = await ReviveMQF9d0n.approve.call(addressSzEo9dg, uintyxLoVyM, {from: accounts[2]});
		const uint256sc5VT2w = await ReviveMQF9d0n.unlock.call(addressL3tg4hz, {from: accounts[4]});
		const uint256rgMhc0X = await ReviveMQF9d0n.unlock.call(addressTbzVQCR, {from: accounts[5]});

		await expect(ReviveMQF9d0n.decreaseAllowance.call(addresswunSWoR, uintKKHCtsj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivevOVdVE = await Revive.new({from: accounts[4]});
		const uinthlz0W62 = BigInt("2046")
		const uintZW9y2oO = BigInt("1402")
		const addresspRUiouI = accounts[0]
		const addressa0FTKy = accounts[0]
		const uint256u8qR8K8 = await RevivevOVdVE.recoverERC20.call(uinthlz0W62, {from: accounts[1]});
		const boolA0VyHol = await RevivevOVdVE.approve.call(addresspRUiouI, uintZW9y2oO, {from: accounts[3]});
		const addressyfV5jRS = await RevivevOVdVE.transferOwnership.call(addressa0FTKy, {from: accounts[2]});

		await expect(RevivevOVdVE.recoverERC20.call(uinthlz0W62, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revivezjg0zZD = await Revive.new({from: accounts[1]});
		const byteWpFzLMF = "0x0b030114161b1c0c0c1d0c0e041a190702191601130a12040115200215131b1c"
		const addressVgWpc1U = accounts[3]
		const byteadVgTa9 = "0x0810100b1f0d0c0f0912071107111a0f1e001c1d19141f0f021d1e181e1b0312"
		const addresse3qTeov = accounts[5]
		const uintD6M3HYz = BigInt("432")
		const uint256iTv01k = await Revivezjg0zZD.tokensUnlockable.call(addressVgWpc1U, byteWpFzLMF, {from: accounts[5]});
		const uint256HkWasix = await Revivezjg0zZD.tokensLocked.call(addresse3qTeov, byteadVgTa9, {from: accounts[5]});
		const uint256Ofc3wog = await Revivezjg0zZD.recoverERC20.call(uintD6M3HYz, {from: accounts[0]});

		assert.equal(uint256HkWasix, BigInt("0"))
		assert.equal(uint256iTv01k, BigInt("0"))
		await expect(Revivezjg0zZD.recoverERC20.call(uintD6M3HYz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMkCx9L3 = await Revive.new({from: accounts[1]});
		const addressniy0B8f = accounts[0]
		const addressqWHEKm = accounts[1]
		const uinti5N5o3q = BigInt("2026")
		const byteHLC6Ryw = "0x17080c12190c1708121a1a0d13180e1c180e200f0806020e01001e0308141201"
		const addressw06Fzjr = accounts[0]
		const addressDjtCvTw = accounts[3]
		const uint256SdMksMb = await ReviveMkCx9L3.allowance.call(addressqWHEKm, addressniy0B8f, {from: accounts[5]});
		const boollC9IX6 = await ReviveMkCx9L3.isOwner.call({from: accounts[4]});
		const uint256hZFxuIg = await ReviveMkCx9L3.tokensLockedAtTime.call(addressw06Fzjr, byteHLC6Ryw, uinti5N5o3q, {from: accounts[3]});
		const uint256RhIhayX = await ReviveMkCx9L3.balanceOf.call(addressDjtCvTw, {from: accounts[3]});

		assert.equal(boollC9IX6, false)
		assert.equal(uint256RhIhayX, BigInt("0"))
		assert.equal(uint256SdMksMb, BigInt("0"))
		assert.equal(uint256hZFxuIg, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveMQF9d0n = await Revive.new({from: accounts[1]});
		const uintj8tfrh4 = BigInt("1740")
		const addressnKVWwDI = accounts[1]
		const addressSZjVUik = accounts[2]
		const addressFuAAr0E = "0x0000000000000000000000000000000000000001"
		const boolURSxOo = await ReviveMQF9d0n.approve.call(addressnKVWwDI, uintj8tfrh4, {from: accounts[2]});
		const uint256sc5VT2w = await ReviveMQF9d0n.unlock.call(addressSZjVUik, {from: accounts[4]});
		const uint256rgMhc0X = await ReviveMQF9d0n.unlock.call(addressFuAAr0E, {from: accounts[5]});

		assert.equal(boolURSxOo, true)
		assert.equal(uint256rgMhc0X, BigInt("0"))
		assert.equal(uint256sc5VT2w, BigInt("0"))
	});

	it('test for Revive', async () => {
		const Revivezjg0zZD = await Revive.new({from: accounts[1]});
		const byteHsiutcP = "0x0b030114161b1c0c0c1d0c0e041a190702191601130a12040115200215131b1c"
		const addressojvQg3K = accounts[3]
		const byteHYxqTd0 = "0x0810100b1f0d0c0f0912071107111a0f1e001c1d19141f0f021d1e181e1b0312"
		const addressvlgEwYd = accounts[6]
		const uintqATI57h = BigInt("304")
		const uintP66T9GC = BigInt("720")
		const addressSmW8SKb = accounts[5]
		const uintyDZSHpx = BigInt("432")
		const uint256iTv01k = await Revivezjg0zZD.tokensUnlockable.call(addressojvQg3K, byteHsiutcP, {from: accounts[5]});
		const uint256HkWasix = await Revivezjg0zZD.tokensLocked.call(addressvlgEwYd, byteHYxqTd0, {from: accounts[5]});
		const uint256PP1udUS = await Revivezjg0zZD.recoverERC20.call(uintqATI57h, {from: accounts[5]});
		const boolGp0Q7dk = await Revivezjg0zZD.transfer.call(addressSmW8SKb, uintP66T9GC, {from: accounts[4]});
		const uint256Ofc3wog = await Revivezjg0zZD.recoverERC20.call(uintyDZSHpx, {from: accounts[0]});

		assert.equal(uint256HkWasix, BigInt("0"))
		assert.equal(uint256iTv01k, BigInt("0"))
		await expect(Revivezjg0zZD.recoverERC20.call(uintqATI57h, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveAODyUlD = await Revive.new({from: accounts[1]});
		const uinteLwDh0r = BigInt("822")
		const uintTRtAsc = BigInt("1726")
		const byter7Ph3Ca = "0x1c06191d0a040d1405180d111f150c0307010e16111a1517111914030c140112"
		const addressdR1Qsis = accounts[4]
		const byte6ZMMSv = "0x100a170c04101b0f1b161e02020e0d050a1d1b170f0f0f17150e18141b0a1a13"
		const addressae6fRHt = accounts[3]
		const addressRhYkYZn = accounts[5]
		const uintswbY4E = BigInt("2026")
		const byteVAyV3rb = "0x0b0f1c091505160f0b011200040b111811170d011d071a0e1116190e0406071d"
		const addressnh4OuOp = accounts[2]
		const addresslZO0qgJ = accounts[0]
		await ReviveAODyUlD.onlyOwner.call({from: accounts[1]});
		const boolo1vSoF4 = await ReviveAODyUlD.transferWithLock.call(addressdR1Qsis, byter7Ph3Ca, uintTRtAsc, uinteLwDh0r, {from: "0x0000000000000000000000000000000000000001"});
		const uint256isonAv4 = await ReviveAODyUlD.tokensUnlockable.call(addressae6fRHt, byte6ZMMSv, {from: accounts[2]});
		const uint256QKFzibT = await ReviveAODyUlD.totalBalanceOf.call(addressRhYkYZn, {from: "0x0000000000000000000000000000000000000001"});
		const boolyx3EraH = await ReviveAODyUlD.increaseLockAmount.call(byteVAyV3rb, uintswbY4E, {from: accounts[0]});
		const uint256mCtqms2 = await ReviveAODyUlD.balanceOf.call(addressnh4OuOp, {from: accounts[2]});
		const uint256Qc58cgb = await ReviveAODyUlD.totalBalanceOf.call(addresslZO0qgJ, {from: accounts[0]});

		await expect(ReviveAODyUlD.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const Revive9ko79v = await Revive.new({from: accounts[0]});
		const bytefK6AKeG = "0x1d131d000519030311020f1f1c03181c101c0c1c06091d1c0d1f1803090c0f1a"
		const addressUordGj8 = accounts[0]
		const addresskEPAnfi = accounts[0]
		const bytecmIOCsR = "0x1310141f07051b081217171f0c20011113151d160d1b110203101806080b121c"
		const addressplAdUOx = accounts[4]
		const uintM6dKO0b = BigInt("1829")
		const addressuHtp8NN = accounts[2]
		const addressticulLw = accounts[0]
		const addressyErWRu = "0x0000000000000000000000000000000000000001"
		const uint48jPxQ = BigInt("9")
		const addresstNNsIjX = accounts[3]
		const uint256HdMSHVa = await Revive9ko79v.tokensLocked.call(addressUordGj8, bytefK6AKeG, {from: accounts[4]});
		const uint256fcEMqbx = await Revive9ko79v.balanceOf.call(addresskEPAnfi, {from: accounts[0]});
		const uint256d0SUWmW = await Revive9ko79v.tokensUnlockable.call(addressplAdUOx, bytecmIOCsR, {from: accounts[2]});
		const boolZcmBx44 = await Revive9ko79v.transferFrom.call(addressticulLw, addressuHtp8NN, uintM6dKO0b, {from: accounts[1]});
		const uint256Oydl4o6 = await Revive9ko79v.totalBalanceOf.call(addressyErWRu, {from: accounts[1]});
		const boolYGxV5X1 = await Revive9ko79v.approve.call(addresstNNsIjX, uint48jPxQ, {from: accounts[1]});

		assert.equal(uint256HdMSHVa, BigInt("0"))
		assert.equal(uint256d0SUWmW, BigInt("0"))
		assert.equal(uint256fcEMqbx, BigInt("3000000000000000000000000000"))
		await expect(Revive9ko79v.transferFrom.call(addressticulLw, addressuHtp8NN, uintM6dKO0b, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFxIgJit = await Revive.new({from: accounts[4]});
		const addressWfFefxI = accounts[2]
		const addressxe9Aa0p = accounts[3]
		const addressRpMEKpm = accounts[0]
		const addressdfbg3L = "0x0000000000000000000000000000000000000002"
		const uint256tCNlPCe = await ReviveFxIgJit.getUnlockableTokens.call(addressWfFefxI, {from: accounts[2]});
		const uint256qPqXLlP = await ReviveFxIgJit.getUnlockableTokens.call(addressxe9Aa0p, {from: accounts[5]});
		const uint256snaWeZ6 = await ReviveFxIgJit.totalBalanceOf.call(addressRpMEKpm, {from: accounts[1]});
		await ReviveFxIgJit.renounceOwnership.call({from: accounts[4]});
		const uint256KD6eWP = await ReviveFxIgJit.totalBalanceOf.call(addressdfbg3L, {from: accounts[1]});

		assert.equal(uint256qPqXLlP, BigInt("0"))
		assert.equal(uint256snaWeZ6, BigInt("0"))
		assert.equal(uint256tCNlPCe, BigInt("0"))
		await expect(ReviveFxIgJit.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviverzITxK = await Revive.new({from: accounts[3]});
		const uinteaWPLQE = BigInt("1027")
		const byteZbNQQSg = "0x1e01150c1c0110041b1e1f1f1e0a040518121715190a150c1d06130a0f10030f"
		const uintEG7xt3B = BigInt("1679")
		const addressEWCAuBl = accounts[2]
		const addressVmLUaNe = accounts[0]
		const addressbrS3ip = accounts[2]
		const addressSCcqd79 = accounts[5]
		const uintOiPLJii = BigInt("1914")
		const uintD6QXaKD = BigInt("1189")
		const byteZXRQ9EW = "0x040e101b040d10080f07100c061218041e0913100d190c11131b0d051e080614"
		const booloae8lXU = await ReviverzITxK.increaseLockAmount.call(byteZbNQQSg, uinteaWPLQE, {from: "0x0000000000000000000000000000000000000001"});
		const boolpDFm2nh = await ReviverzITxK.transferFrom.call(addressVmLUaNe, addressEWCAuBl, uintEG7xt3B, {from: accounts[1]});
		const uint256aAkMovQ = await ReviverzITxK.allowance.call(addressSCcqd79, addressbrS3ip, {from: accounts[4]});
		await ReviverzITxK.renounceOwnership.call({from: accounts[3]});
		const boolloVcooO = await ReviverzITxK.lock.call(byteZXRQ9EW, uintD6QXaKD, uintOiPLJii, {from: accounts[0]});

		await expect(ReviverzITxK.increaseLockAmount.call(byteZbNQQSg, uinteaWPLQE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFxIgJit = await Revive.new({from: accounts[4]});
		const uinti4hMQz = BigInt("1948")
		const addressq9tFsYx = accounts[0]
		const addressvvJDjxz = accounts[2]
		const addressVRvc47E = accounts[3]
		const addressJ7Jkt0i = await ReviveFxIgJit.recoverERC20.call(addressq9tFsYx, uinti4hMQz, {from: accounts[4]});
		const uint256WwthQjD = await ReviveFxIgJit.totalBalanceOf.call(addressvvJDjxz, {from: accounts[4]});
		const uint256qPqXLlP = await ReviveFxIgJit.getUnlockableTokens.call(addressVRvc47E, {from: accounts[5]});

		await expect(ReviveFxIgJit.recoverERC20.call(addressq9tFsYx, uinti4hMQz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviverzITxK = await Revive.new({from: accounts[3]});
		const uintiRgFhqo = BigInt("1561")
		const uintbYauZgw = BigInt("1066")
		const byteWt2pp9Q = "0x00140a0f1910161f1a02150f010b1f041c0e0b101c0b0c03160a0c061106111d"
		const uintgSJXJyy = BigInt("1027")
		const bytezmc6tBv = "0x1e01150c1c0110041b1e1f1f1e0a040518121715190a150c1d06130a0f10030f"
		const addressXF1t0F9 = accounts[4]
		const uintCeTCByy = BigInt("1029")
		const addressDzugjjh = accounts[2]
		const uintmjRVRJy = BigInt("1679")
		const addressPJrDtoJ = accounts[2]
		const addressNZQ4pMU = accounts[1]
		const addressvT9H1Yp = accounts[2]
		const address5cTt5i = accounts[5]
		const addressFiO9AvP = accounts[4]
		const uintPdHi4k7 = BigInt("1914")
		const uintnWg1yEy = BigInt("1189")
		const bytes2d0CsC = "0x040e101b040d10080f07100c061218041e0913100d190c11131b0d051e080614"
		const boolH0dBx6Z = await ReviverzITxK.lock.call(byteWt2pp9Q, uintbYauZgw, uintiRgFhqo, {from: "0x0000000000000000000000000000000000000001"});
		const booloae8lXU = await ReviverzITxK.increaseLockAmount.call(bytezmc6tBv, uintgSJXJyy, {from: "0x0000000000000000000000000000000000000001"});
		const uint256E3COq56 = await ReviverzITxK.getUnlockableTokens.call(addressXF1t0F9, {from: accounts[0]});
		const boolUoNekxK = await ReviverzITxK.approve.call(addressDzugjjh, uintCeTCByy, {from: accounts[5]});
		const boolpDFm2nh = await ReviverzITxK.transferFrom.call(addressNZQ4pMU, addressPJrDtoJ, uintmjRVRJy, {from: accounts[1]});
		const uint256aAkMovQ = await ReviverzITxK.allowance.call(address5cTt5i, addressvT9H1Yp, {from: accounts[4]});
		await ReviverzITxK.renounceOwnership.call({from: accounts[3]});
		const addressReSKfz2 = await ReviverzITxK.transferOwnership.call(addressFiO9AvP, {from: accounts[0]});
		const boolloVcooO = await ReviverzITxK.lock.call(bytes2d0CsC, uintnWg1yEy, uintPdHi4k7, {from: accounts[0]});

		await expect(ReviverzITxK.lock.call(byteWt2pp9Q, uintbYauZgw, uintiRgFhqo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFxIgJit = await Revive.new({from: accounts[4]});
		const address6b9M6Y = accounts[3]
		const uintIzpt2PG = BigInt("385")
		const byteaVI4T0k = "0x08120f150d000710011408131e200f0e1808070b15181f110c1d140b10121b07"
		const uint256qPqXLlP = await ReviveFxIgJit.getUnlockableTokens.call(address6b9M6Y, {from: accounts[5]});
		const boolfmpNcKs = await ReviveFxIgJit.extendLock.call(byteaVI4T0k, uintIzpt2PG, {from: accounts[0]});

		assert.equal(uint256qPqXLlP, BigInt("0"))
		await expect(ReviveFxIgJit.extendLock.call(byteaVI4T0k, uintIzpt2PG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFxIgJit = await Revive.new({from: accounts[4]});
		const bytec07PWMt = "0x041016010a19170a10101d031f1b1e071d1901140f0a1f1c141c020f15171e11"
		const addressZbIU7Bj = accounts[1]
		const addressL733fty = accounts[3]
		const uint256Ll2ruX = await ReviveFxIgJit.tokensUnlockable.call(addressZbIU7Bj, bytec07PWMt, {from: accounts[5]});
		const uint256qPqXLlP = await ReviveFxIgJit.getUnlockableTokens.call(addressL733fty, {from: accounts[5]});
		const uint256Wtez1kc = await ReviveFxIgJit.totalSupply.call({from: accounts[5]});

		assert.equal(uint256Ll2ruX, BigInt("0"))
		assert.equal(uint256Wtez1kc, BigInt("3000000000000000000000000000"))
		assert.equal(uint256qPqXLlP, BigInt("0"))
	});

	it('test for Revive', async () => {
		const ReviveFxIgJit = await Revive.new({from: accounts[4]});
		const uintwTjOrHL = BigInt("704")
		const bytemXFpmS7 = "0x15091e0d11021a0e0f041f1a0d0b1a111b1a081311080f060d1d07001b071516"
		const addressRJ2dQLf = accounts[3]
		const uint8dE1pn = BigInt("1391")
		const addressYfnzZEI = "0x0000000000000000000000000000000000000001"
		const uint256VdhGLE3 = await ReviveFxIgJit.tokensLockedAtTime.call(addressRJ2dQLf, bytemXFpmS7, uintwTjOrHL, {from: accounts[4]});
		const uint256Eg2ViKY = await ReviveFxIgJit.recoverERC20.call(uint8dE1pn, {from: accounts[1]});
		const uint256KD6eWP = await ReviveFxIgJit.totalBalanceOf.call(addressYfnzZEI, {from: accounts[1]});

		assert.equal(uint256VdhGLE3, BigInt("0"))
		await expect(ReviveFxIgJit.recoverERC20.call(uint8dE1pn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFxIgJit = await Revive.new({from: accounts[4]});
		const addressURXSRKN = "0x0000000000000000000000000000000000000001"
		const uinteBSzj2A = BigInt("338")
		const uint256KD6eWP = await ReviveFxIgJit.totalBalanceOf.call(addressURXSRKN, {from: accounts[1]});
		const uint256CEUFUg8 = await ReviveFxIgJit.recoverERC20.call(uinteBSzj2A, {from: accounts[1]});

		assert.equal(uint256KD6eWP, BigInt("0"))
		await expect(ReviveFxIgJit.recoverERC20.call(uinteBSzj2A, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFxIgJit = await Revive.new({from: accounts[4]});
		const uintwI0jS1n = BigInt("690")
		const addressSXRsWlG = accounts[3]
		const uintuly8rri = BigInt("414")
		const byteAma0iwx = "0x08120f150d000710011408131e200f0e1808070b15181f110c1d140b10121b09"
		const byteiZGqolV = "0x07150510011d010f0711020503160c1d171c0c15011b14170517011518130609"
		const addressfkp5PTG = accounts[5]
		const uintBjC223J = BigInt("1375")
		const byteYEvQrzP = "0x09190604150919101b13041b0d16030f0d081b13160e11120116041706021c00"
		const uint256LdBDx3 = await ReviveFxIgJit.recoverERC20.call(uintwI0jS1n, {from: accounts[1]});
		const uint256l1edRYG = await ReviveFxIgJit.totalBalanceOf.call(addressSXRsWlG, {from: accounts[2]});
		const boolfmpNcKs = await ReviveFxIgJit.extendLock.call(byteAma0iwx, uintuly8rri, {from: accounts[0]});
		const uint256hOjcvWd = await ReviveFxIgJit.tokensLocked.call(addressfkp5PTG, byteiZGqolV, {from: accounts[4]});
		const boolOXkwMRg = await ReviveFxIgJit.increaseLockAmount.call(byteYEvQrzP, uintBjC223J, {from: accounts[1]});
		await ReviveFxIgJit.renounceOwnership.call({from: accounts[2]});

		await expect(ReviveFxIgJit.recoverERC20.call(uintwI0jS1n, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFxIgJit = await Revive.new({from: accounts[4]});
		const addressPm0AlB = "0x0000000000000000000000000000000000000002"
		const addressLN0mhiw = accounts[4]
		const uintyz2QvYb = BigInt("461")
		const uint256KD6eWP = await ReviveFxIgJit.totalBalanceOf.call(addressPm0AlB, {from: accounts[1]});
		const uint256UqWin7 = await ReviveFxIgJit.balanceOf.call(addressLN0mhiw, {from: accounts[2]});
		const uint256vIvCY8T = await ReviveFxIgJit.recoverERC20.call(uintyz2QvYb, {from: accounts[1]});

		assert.equal(uint256KD6eWP, BigInt("0"))
		assert.equal(uint256UqWin7, BigInt("3000000000000000000000000000"))
		await expect(ReviveFxIgJit.recoverERC20.call(uintyz2QvYb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveMQF9d0n = await Revive.new({from: accounts[1]});
		const uintQ4fNy9A = BigInt("1017")
		const addresskO5z7Hb = accounts[5]
		const addressc4pPL4M = accounts[3]
		const uint256Gkkzn0 = await ReviveMQF9d0n.recoverERC20.call(uintQ4fNy9A, {from: accounts[0]});
		const uint256MKoGC7W = await ReviveMQF9d0n.unlock.call(addresskO5z7Hb, {from: accounts[4]});
		const uint256sc5VT2w = await ReviveMQF9d0n.unlock.call(addressc4pPL4M, {from: accounts[4]});

		await expect(ReviveMQF9d0n.recoverERC20.call(uintQ4fNy9A, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFxIgJit = await Revive.new({from: accounts[4]});
		const uintkgCFLIc = BigInt("435")
		const bytecpV1MbW = "0x1615150908200816ffffffff00051b0d120a041a1b131914071312021b080b0d0c1d08"
		const bool7QfIuO = await ReviveFxIgJit.increaseLockAmount.call(bytecpV1MbW, uintkgCFLIc, {from: accounts[2]});

		await expect(ReviveFxIgJit.increaseLockAmount.call(bytecpV1MbW, uintkgCFLIc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivepMPG3oC = await Revive.new({from: accounts[1]});
		const uintrttNs6k = BigInt("411")
		const uintugMPvKN = BigInt("266")
		const uintetlI2zR = BigInt("633")
		const byteL1A0Suk = "0x080d08051d1116170d09150608141706120208051f1920191420020411011320"
		const uint256EbadidY = await RevivepMPG3oC.recoverERC20.call(uintrttNs6k, {from: "0x0000000000000000000000000000000000000001"});
		const boollJSbAF = await RevivepMPG3oC.lock.call(byteL1A0Suk, uintetlI2zR, uintugMPvKN, {from: accounts[2]});

		await expect(RevivepMPG3oC.recoverERC20.call(uintrttNs6k, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFxIgJit = await Revive.new({from: accounts[4]});
		const addressiGX5BB = "0x0000000000000000000000000000000000000001"
		const addressC6dLjDg = accounts[0]
		const uintAAaTsvS = BigInt("435")
		const byteOg0lO6c = "0x16151506082008160200051b0d120a041a1b131914071312021b080b0d0c1d08"
		const addressb9Bgxd8 = await ReviveFxIgJit.transferOwnership.call(addressiGX5BB, {from: accounts[4]});
		await ReviveFxIgJit.onlyOwner.call({from: accounts[0]});
		const uint256Y5buF63 = await ReviveFxIgJit.getUnlockableTokens.call(addressC6dLjDg, {from: accounts[2]});
		const bool7QfIuO = await ReviveFxIgJit.increaseLockAmount.call(byteOg0lO6c, uintAAaTsvS, {from: accounts[2]});

		await expect(ReviveFxIgJit.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivepMPG3oC = await Revive.new({from: accounts[1]});
		const uintILEEQwQ = BigInt("968")
		const uintgi4a9AA = BigInt("266")
		const uintvG0JQrO = BigInt("633")
		const byteHYUBgcG = "0x080d08051d1116170d09150608141706120308051f1920191420020511011320"
		const uint256bZdtZzr = await RevivepMPG3oC.recoverERC20.call(uintILEEQwQ, {from: accounts[2]});
		const boollJSbAF = await RevivepMPG3oC.lock.call(byteHYUBgcG, uintvG0JQrO, uintgi4a9AA, {from: accounts[2]});

		await expect(RevivepMPG3oC.recoverERC20.call(uintILEEQwQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFxIgJit = await Revive.new({from: accounts[4]});
		const addressZsjOsLX = accounts[2]
		const uintNjHsc50 = BigInt("1872")
		const uint256qPqXLlP = await ReviveFxIgJit.getUnlockableTokens.call(addressZsjOsLX, {from: accounts[5]});
		const uint256tGG8hpV = await ReviveFxIgJit.recoverERC20.call(uintNjHsc50, {from: accounts[1]});

		assert.equal(uint256qPqXLlP, BigInt("0"))
		await expect(ReviveFxIgJit.recoverERC20.call(uintNjHsc50, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFxIgJit = await Revive.new({from: accounts[4]});
		const uintaFEM6jM = BigInt("385")
		const bytegfTYYb2 = "0x08120f150dfffffffe0710011408131e200f0e1808070b15181f110c1d140b10121b07"
		const boolfmpNcKs = await ReviveFxIgJit.extendLock.call(bytegfTYYb2, uintaFEM6jM, {from: accounts[0]});

		await expect(ReviveFxIgJit.extendLock.call(bytegfTYYb2, uintaFEM6jM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFxIgJit = await Revive.new({from: accounts[4]});
		const uint1vvyRc = BigInt("59")
		const byteHvF9gR3 = "0x1e050f0b0a180610141f170505001d150e0915071b020b201b06061718201406"
		const addressYn2JjAk = accounts[5]
		const uintJ2mzoaL = BigInt("893")
		const uintwxsFvRj = BigInt("802")
		const uinty4hx8AD = BigInt("1842")
		const bytewUERWms = "0x13060a1d0801191208000c02081b0418041616150504011105111706170d021c"
		const addressR1a0JGC = accounts[0]
		const uint256ieSd31h = await ReviveFxIgJit.tokensLockedAtTime.call(addressYn2JjAk, byteHvF9gR3, uint1vvyRc, {from: accounts[2]});
		const uint256P0SChW3 = await ReviveFxIgJit.recoverERC20.call(uintJ2mzoaL, {from: accounts[3]});
		const uint256rbeVlP = await ReviveFxIgJit.recoverERC20.call(uintwxsFvRj, {from: accounts[3]});
		const uint256YK1zK2C = await ReviveFxIgJit.tokensLockedAtTime.call(addressR1a0JGC, bytewUERWms, uinty4hx8AD, {from: accounts[3]});

		assert.equal(uint256ieSd31h, BigInt("0"))
		await expect(ReviveFxIgJit.recoverERC20.call(uintJ2mzoaL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveuJ3dXpa = await Revive.new({from: accounts[2]});
		const uintj3oYUVa = BigInt("1063")
		const uintwRnP1Lw = BigInt("1356")
		const addressCzWtfvh = "0x0000000000000000000000000000000000000001"
		const uintJD3Q2hg = BigInt("1312")
		const byteGCTIOsS = "0x130a1203001d06040e1a120715180304170e050f1c0e171b03110c0814041407"
		const addressjbfflRE = accounts[0]
		const byteAcNLZBj = "0x0a1d0a1a0312060c051718150417190405011b151d0609171c20070d02031715"
		const addresseivxx1L = accounts[3]
		const uint256KoBOZtR = await ReviveuJ3dXpa.recoverERC20.call(uintj3oYUVa, {from: accounts[4]});
		const boolNTENtwF = await ReviveuJ3dXpa.transfer.call(addressCzWtfvh, uintwRnP1Lw, {from: "0x0000000000000000000000000000000000000001"});
		await ReviveuJ3dXpa.onlyOwner.call({from: accounts[1]});
		const uint256ttCf58W = await ReviveuJ3dXpa.tokensLockedAtTime.call(addressjbfflRE, byteGCTIOsS, uintJD3Q2hg, {from: accounts[1]});
		const uint256AVhgWS = await ReviveuJ3dXpa.tokensUnlockable.call(addresseivxx1L, byteAcNLZBj, {from: accounts[2]});

		await expect(ReviveuJ3dXpa.recoverERC20.call(uintj3oYUVa, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const RevivepMPG3oC = await Revive.new({from: accounts[1]});
		const uintsFHw2WS = BigInt("596")
		const uinthMDywWO = BigInt("266")
		const uintIo8Hhv = BigInt("337")
		const bytebHIDfu = "0x080d08051d1116170d09150608141706120308051f1920191420020411011320"
		const uint256WKjXi53 = await RevivepMPG3oC.recoverERC20.call(uintsFHw2WS, {from: accounts[5]});
		const boollJSbAF = await RevivepMPG3oC.lock.call(bytebHIDfu, uintIo8Hhv, uinthMDywWO, {from: accounts[2]});

		await expect(RevivepMPG3oC.recoverERC20.call(uintsFHw2WS, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFxIgJit = await Revive.new({from: accounts[4]});
		const uintcm8wr08 = BigInt("1779")
		const addressFiTYd1 = "0x0000000000000000000000000000000000000002"
		const uint256Saw1wzd = await ReviveFxIgJit.recoverERC20.call(uintcm8wr08, {from: accounts[2]});
		const uint256KD6eWP = await ReviveFxIgJit.totalBalanceOf.call(addressFiTYd1, {from: accounts[1]});

		await expect(ReviveFxIgJit.recoverERC20.call(uintcm8wr08, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveAvAJskN = await Revive.new({from: accounts[3]});
		const uintk3yQtgR = BigInt("1515")
		const uintLXLvdCm = BigInt("1647")
		const byteDZtyMfY = "0x130c040d0b0c1f04180e0b13101516160c1f06100e011c09090d061101010300"
		const uint256BVUFVtX = await ReviveAvAJskN.recoverERC20.call(uintk3yQtgR, {from: accounts[1]});
		const boolXVVCWyk = await ReviveAvAJskN.extendLock.call(byteDZtyMfY, uintLXLvdCm, {from: accounts[5]});

		await expect(ReviveAvAJskN.recoverERC20.call(uintk3yQtgR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Revive', async () => {
		const ReviveFxIgJit = await Revive.new({from: accounts[4]});
		const uintzgsU0cO = BigInt("905")
		const uintEx3xL2B = BigInt("18")
		const byteToQ1G1G = "0x1e050f0b0a180610141f170505001d150e0915071b020b201b06061715201406"
		const addressXOhCTGw = accounts[5]
		const uint256HOXH9lJ = await ReviveFxIgJit.recoverERC20.call(uintzgsU0cO, {from: accounts[1]});
		const uint256ieSd31h = await ReviveFxIgJit.tokensLockedAtTime.call(addressXOhCTGw, byteToQ1G1G, uintEx3xL2B, {from: accounts[2]});

		await expect(ReviveFxIgJit.recoverERC20.call(uintzgsU0cO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})