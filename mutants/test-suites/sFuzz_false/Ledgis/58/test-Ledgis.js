const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgisFBnfqPo = await Ledgis.new({from: accounts[1]});
		const addressehxcV5 = accounts[2]
//		await LedgisFBnfqPo.renounceOwnership.call({from: accounts[5]});
//		const boolNmBhtYv = await LedgisFBnfqPo.isFrozen.call(addressehxcV5, {from: accounts[2]});

		await expect(LedgisFBnfqPo.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXaewLWB = await Ledgis.new({from: accounts[1]});
		const addressPvhOCbu = accounts[4]
		const uintfIituHz = BigInt("1435")
		const addressKFL3mRj = accounts[4]
		const uintRWa3ehK = BigInt("1025")
		const uintF8xfRwG = BigInt("713")
		const address0tndDf = accounts[0]
		const uintQsvv41C = BigInt("478")
		const uinti31OLvn = BigInt("14")
		const addressd0auPE5 = accounts[4]
		const uint256pLECEoM = await LedgisXaewLWB.balanceOf.call(addressPvhOCbu, {from: "0x0000000000000000000000000000000000000001"});
//		const addressjuY3LC = await LedgisXaewLWB.burn.call(addressKFL3mRj, uintfIituHz, {from: accounts[2]});
//		const addressvSU0CCQ = await LedgisXaewLWB.lock.call(address0tndDf, uintF8xfRwG, uintRWa3ehK, {from: accounts[1]});
//		const boolSWCM5dW = await LedgisXaewLWB.transferWithLock.call(addressd0auPE5, uinti31OLvn, uintQsvv41C, {from: accounts[0]});

		assert.equal(uint256pLECEoM, BigInt("0"))
		await expect(LedgisXaewLWB.burn.call(addressKFL3mRj, uintfIituHz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisdW2MLfv = await Ledgis.new({from: accounts[0]});
		const uintNh9b5u2 = BigInt("1022")
		const addressCjCG6mo = accounts[5]
		const uintLiF72fy = BigInt("1061")
		const addresssfIeEWe = accounts[4]
		const addressFWoXCF = accounts[0]
		const uintkGo99kO = BigInt("1531")
		const addressTDvgXQ8 = accounts[3]
		const uintefGVrFX = BigInt("1362")
		const addressJoo2Xkt = accounts[1]
		const uintt43pW9S = BigInt("1516")
		const uintzP8bcQ = BigInt("1288")
		const addresslcJyYrO = accounts[3]
//		const boolSLLBGK7 = await LedgisdW2MLfv.transfer.call(addressCjCG6mo, uintNh9b5u2, {from: accounts[5]});
//		const boolJHczeTy = await LedgisdW2MLfv.transferFrom.call(addressFWoXCF, addresssfIeEWe, uintLiF72fy, {from: accounts[0]});
//		const boolr6x0VFK = await LedgisdW2MLfv.approve.call(addressTDvgXQ8, uintkGo99kO, {from: accounts[1]});
//		const addressxhMS0T8 = await LedgisdW2MLfv.burn.call(addressJoo2Xkt, uintefGVrFX, {from: accounts[4]});
//		const addressKfCeoO8 = await LedgisdW2MLfv.lock.call(addresslcJyYrO, uintzP8bcQ, uintt43pW9S, {from: accounts[5]});

		await expect(LedgisdW2MLfv.transfer.call(addressCjCG6mo, uintNh9b5u2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisOW7wSCg = await Ledgis.new({from: accounts[5]});
		const uintWkKB9a = BigInt("1199")
		const addressRgSG0gl = accounts[2]
		const uintzY26Ngs = BigInt("1102")
		const addressKkzPen = accounts[4]
		const boolMfGBXq = await LedgisOW7wSCg.increaseAllowance.call(addressRgSG0gl, uintWkKB9a, {from: accounts[5]});
		const boola4cj5i = await LedgisOW7wSCg.mint.call(addressKkzPen, uintzY26Ngs, {from: accounts[5]});

		assert.equal(boolMfGBXq, true)
		assert.equal(boola4cj5i, true)
	});

	it('test for Ledgis', async () => {
		const LedgisRusAfBe = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintZF9Epn9 = BigInt("294")
		await LedgisRusAfBe.whenNotPaused.call({from: accounts[1]});
		await LedgisRusAfBe.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256E7MZu7 = await LedgisRusAfBe.afterTime.call(uintZF9Epn9, {from: accounts[5]});
		await LedgisRusAfBe.onlyOwner.call({from: accounts[5]});
	});

	it('test for Ledgis', async () => {
		const Ledgispa2CrDw = await Ledgis.new({from: accounts[1]});
		const uintqV79uuI = BigInt("1102")
		const addressTYuU4b = accounts[5]
		const addressyAH8dXe = accounts[3]
		const uintgDLn03I = BigInt("1026")
		const uintlfdvJyi = BigInt("1107")
		const addressQMmiynN = accounts[2]
		const boolizZOodm = await Ledgispa2CrDw.increaseAllowance.call(addressTYuU4b, uintqV79uuI, {from: accounts[2]});
		const uint256b8GF7ND = await Ledgispa2CrDw.lockCount.call(addressyAH8dXe, {from: accounts[2]});
//		const boolHkwKoH2 = await Ledgispa2CrDw.transferWithLock.call(addressQMmiynN, uintlfdvJyi, uintgDLn03I, {from: accounts[4]});

		assert.equal(boolizZOodm, true)
		assert.equal(uint256b8GF7ND, BigInt("0"))
		await expect(Ledgispa2CrDw.transferWithLock.call(addressQMmiynN, uintlfdvJyi, uintgDLn03I, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXaewLWB = await Ledgis.new({from: accounts[1]});
		const addressb2cVNAX = accounts[4]
		const uintcaIbq9K = BigInt("1025")
		const uintH4I4r00 = BigInt("713")
		const addressMDrw4lw = accounts[0]
		const addressjh2aP8D = "0x0000000000000000000000000000000000000001"
		const uints1nMnKe = BigInt("245")
		const uintO9J3kgE = BigInt("1161")
		const addressvgPkSxM = accounts[5]
		const uintQxXc5Yy = BigInt("478")
		const uint009T5H = BigInt("14")
		const addressI1uUas = accounts[5]
		const uint256pLECEoM = await LedgisXaewLWB.balanceOf.call(addressb2cVNAX, {from: "0x0000000000000000000000000000000000000001"});
//		const addressvSU0CCQ = await LedgisXaewLWB.lock.call(addressMDrw4lw, uintH4I4r00, uintcaIbq9K, {from: accounts[1]});
//		const addresshNeRtmt = await LedgisXaewLWB.unfreeze.call(addressjh2aP8D, {from: accounts[4]});
//		const boolr0Su8Cb = await LedgisXaewLWB.transferWithLockAfter.call(addressvgPkSxM, uintO9J3kgE, uints1nMnKe, {from: accounts[4]});
//		const boolSWCM5dW = await LedgisXaewLWB.transferWithLock.call(addressI1uUas, uint009T5H, uintQxXc5Yy, {from: accounts[0]});

		assert.equal(uint256pLECEoM, BigInt("0"))
		await expect(LedgisXaewLWB.lock.call(addressMDrw4lw, uintH4I4r00, uintcaIbq9K, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisFBnfqPo = await Ledgis.new({from: accounts[1]});
		const uintEEmgTvs = BigInt("1298")
		const addressBTTVt3l = accounts[3]
		const addressOZ4cUr = "0x0000000000000000000000000000000000000001"
		const addressv2XSyH3 = accounts[2]
//		const boolhkAZdal = await LedgisFBnfqPo.transferFrom.call(addressOZ4cUr, addressBTTVt3l, uintEEmgTvs, {from: accounts[2]});
//		await LedgisFBnfqPo.unpause.call({from: accounts[2]});
//		const boolNmBhtYv = await LedgisFBnfqPo.isFrozen.call(addressv2XSyH3, {from: accounts[2]});

		await expect(LedgisFBnfqPo.transferFrom.call(addressOZ4cUr, addressBTTVt3l, uintEEmgTvs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXaewLWB = await Ledgis.new({from: accounts[1]});
		const addressmnqanJx = accounts[4]
		const uintFGC3MV = BigInt("659")
		const addressKWZJamk = accounts[0]
		const uintORrGcHH = BigInt("1432")
		const addressx7bGLG3 = accounts[4]
		const uintoBjZeJi = BigInt("1025")
		const uintTfR7jL = BigInt("713")
		const addresslaaxkNj = accounts[0]
		const uintaVURIZO = BigInt("478")
		const uintsoBEEJR = BigInt("14")
		const addresshOvGE0f = accounts[4]
		const uint256pLECEoM = await LedgisXaewLWB.balanceOf.call(addressmnqanJx, {from: "0x0000000000000000000000000000000000000001"});
//		await LedgisXaewLWB.lockState.call(addressKWZJamk, uintFGC3MV, {from: accounts[4]});
//		const addressjuY3LC = await LedgisXaewLWB.burn.call(addressx7bGLG3, uintORrGcHH, {from: accounts[2]});
//		const addressvSU0CCQ = await LedgisXaewLWB.lock.call(addresslaaxkNj, uintTfR7jL, uintoBjZeJi, {from: accounts[1]});
//		const boolSWCM5dW = await LedgisXaewLWB.transferWithLock.call(addresshOvGE0f, uintsoBEEJR, uintaVURIZO, {from: accounts[0]});

		assert.equal(uint256pLECEoM, BigInt("0"))
		await expect(LedgisXaewLWB.lockState.call(addressKWZJamk, uintFGC3MV, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXaewLWB = await Ledgis.new({from: accounts[1]});
		const addresszRZOu5T = accounts[4]
		const uintnVWaYLh = BigInt("401")
		const uintSIy2dZU = BigInt("37")
		const addresszJVcxdb = accounts[2]
		const uintQZOw0N0 = BigInt("1435")
		const addressktXMpin = accounts[4]
		const uintZII9yCr = BigInt("1025")
		const uintD2fi0JJ = BigInt("713")
		const addressFvly7MP = accounts[0]
		const uintCeevxxK = BigInt("478")
		const uintkukrpXF = BigInt("14")
		const addressGFCULTx = accounts[4]
		const uint256pLECEoM = await LedgisXaewLWB.balanceOf.call(addresszRZOu5T, {from: "0x0000000000000000000000000000000000000001"});
//		await LedgisXaewLWB.onlyOwner.call({from: accounts[0]});
//		const addressMupmFyU = await LedgisXaewLWB.lockAfter.call(addresszJVcxdb, uintSIy2dZU, uintnVWaYLh, {from: accounts[4]});
//		const addressjuY3LC = await LedgisXaewLWB.burn.call(addressktXMpin, uintQZOw0N0, {from: accounts[2]});
//		const addressvSU0CCQ = await LedgisXaewLWB.lock.call(addressFvly7MP, uintD2fi0JJ, uintZII9yCr, {from: accounts[1]});
//		const boolSWCM5dW = await LedgisXaewLWB.transferWithLock.call(addressGFCULTx, uintkukrpXF, uintCeevxxK, {from: accounts[0]});

		assert.equal(uint256pLECEoM, BigInt("0"))
		await expect(LedgisXaewLWB.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisvJlmzJ = await Ledgis.new({from: accounts[0]});
		const uintiYjEGy = BigInt("1878")
		const addressKLKxZXm = accounts[3]
		const uint256WgZvI8O = await LedgisvJlmzJ.totalSupply.call({from: accounts[4]});
//		await LedgisvJlmzJ.unpause.call({from: accounts[1]});
//		const boolVThHZg4 = await LedgisvJlmzJ.mint.call(addressKLKxZXm, uintiYjEGy, {from: accounts[0]});

		assert.equal(uint256WgZvI8O, BigInt("10000000000000"))
		await expect(LedgisvJlmzJ.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisFBnfqPo = await Ledgis.new({from: accounts[1]});
		const addressGvhrVbv = accounts[3]
		const addressT4hd23B = await LedgisFBnfqPo.transferOwnership.call(addressGvhrVbv, {from: accounts[1]});
//		await LedgisFBnfqPo.renounceOwnership.call({from: accounts[5]});
//		await LedgisFBnfqPo.unpause.call({from: accounts[2]});

		await expect(LedgisFBnfqPo.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisFBnfqPo = await Ledgis.new({from: accounts[1]});
		const addressavQCc2U = accounts[5]
		const boolwKhC3u8 = await LedgisFBnfqPo.isFrozen.call(addressavQCc2U, {from: accounts[0]});
//		await LedgisFBnfqPo.renounceOwnership.call({from: accounts[5]});

		assert.equal(boolwKhC3u8, false)
		await expect(LedgisFBnfqPo.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXaewLWB = await Ledgis.new({from: accounts[1]});
		const addresskbZ71Tf = accounts[3]
		const addressAe4AXR1 = accounts[5]
		const uint256PU5C7Ui = await LedgisXaewLWB.currentTime.call({from: accounts[3]});
		const uint256EAI89sz = await LedgisXaewLWB.balanceOf.call(addresskbZ71Tf, {from: accounts[3]});
		const uint256pLECEoM = await LedgisXaewLWB.balanceOf.call(addressAe4AXR1, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256EAI89sz, BigInt("0"))
		assert.equal(uint256PU5C7Ui, BigInt("1630231860"))
		assert.equal(uint256pLECEoM, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgishWoDgbr = await Ledgis.new({from: accounts[3]});
		const uintRRXmb6V = BigInt("1895")
		const addressX6wnz1 = "0x0000000000000000000000000000000000000001"
		const uintYrZIdzL = BigInt("1442")
		const addresshfthPc = "0x0000000000000000000000000000000000000001"
		const uintrY36HNI = BigInt("683")
		const uintVveQ9vg = BigInt("1098")
		const addressaPKvux = accounts[0]
		const uint256IC2xPss = await LedgishWoDgbr.totalSupply.call({from: accounts[3]});
		const boolC4Q7S2R = await LedgishWoDgbr.transfer.call(addressX6wnz1, uintRRXmb6V, {from: accounts[3]});
		const boolpUUXMbB = await LedgishWoDgbr.approve.call(addresshfthPc, uintYrZIdzL, {from: accounts[4]});
//		const boolqb4OFfo = await LedgishWoDgbr.transferWithLockAfter.call(addressaPKvux, uintVveQ9vg, uintrY36HNI, {from: accounts[0]});

		assert.equal(boolC4Q7S2R, true)
		assert.equal(boolpUUXMbB, true)
		assert.equal(uint256IC2xPss, BigInt("10000000000000"))
		await expect(LedgishWoDgbr.transferWithLockAfter.call(addressaPKvux, uintVveQ9vg, uintrY36HNI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXaewLWB = await Ledgis.new({from: accounts[1]});
		const addressF5TAimB = accounts[5]
		const uintLYVU6DS = BigInt("722")
		const uintWmZUIId = BigInt("1965")
		const addresswlrJ9oC = accounts[2]
		const uint256pLECEoM = await LedgisXaewLWB.balanceOf.call(addressF5TAimB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256DgVZtPz = await LedgisXaewLWB.afterTime.call(uintLYVU6DS, {from: accounts[0]});
//		const addressMsbKF0O = await LedgisXaewLWB.unlock.call(addresswlrJ9oC, uintWmZUIId, {from: accounts[2]});

		assert.equal(uint256DgVZtPz, BigInt("1630232580"))
		assert.equal(uint256pLECEoM, BigInt("0"))
		await expect(LedgisXaewLWB.unlock.call(addresswlrJ9oC, uintWmZUIId, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXaewLWB = await Ledgis.new({from: accounts[1]});
		const addressccSi9Xk = accounts[2]
		const addressvnEtpB1 = accounts[5]
		const uintc9PnH81 = BigInt("125")
		const addressN7N1pRu = accounts[0]
		const addressPiTQ7Np = await LedgisXaewLWB.unfreeze.call(addressccSi9Xk, {from: accounts[1]});
		const uint256pLECEoM = await LedgisXaewLWB.balanceOf.call(addressvnEtpB1, {from: "0x0000000000000000000000000000000000000001"});
//		const addressUiiaiPe = await LedgisXaewLWB.burn.call(addressN7N1pRu, uintc9PnH81, {from: accounts[4]});

		assert.equal(uint256pLECEoM, BigInt("0"))
		await expect(LedgisXaewLWB.burn.call(addressN7N1pRu, uintc9PnH81, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXaewLWB = await Ledgis.new({from: accounts[1]});
		const addressvZs7ewn = accounts[5]
		const addressXEQ7yqG = accounts[0]
		const addressERL5WG3 = accounts[4]
		const uint256pLECEoM = await LedgisXaewLWB.balanceOf.call(addressvZs7ewn, {from: "0x0000000000000000000000000000000000000001"});
		const uint256g0hZwcS = await LedgisXaewLWB.allowance.call(addressERL5WG3, addressXEQ7yqG, {from: accounts[2]});

		assert.equal(uint256g0hZwcS, BigInt("0"))
		assert.equal(uint256pLECEoM, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisXaewLWB = await Ledgis.new({from: accounts[1]});
		const uintB6ivBoB = BigInt("1453")
		const addressWRNCdtv = accounts[2]
		const addressT9ZYmHF = accounts[2]
		const addressBGrrgro = accounts[4]
//		const boolNcl0MSn = await LedgisXaewLWB.decreaseAllowance.call(addressWRNCdtv, uintB6ivBoB, {from: accounts[3]});
//		const addresswqycfV1 = await LedgisXaewLWB.unfreeze.call(addressT9ZYmHF, {from: accounts[1]});
//		const uint256pLECEoM = await LedgisXaewLWB.balanceOf.call(addressBGrrgro, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisXaewLWB.decreaseAllowance.call(addressWRNCdtv, uintB6ivBoB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXaewLWB = await Ledgis.new({from: accounts[1]});
		const addressiy7RHy0 = accounts[3]
		const addressQD6PCY2 = accounts[5]
		const uintKy0H0v = BigInt("1226")
		const uintEaCHzxA = BigInt("1575")
		const addressAaYdQrn = "0x0000000000000000000000000000000000000001"
		const uint256xwuEW8m = await LedgisXaewLWB.lockCount.call(addressiy7RHy0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pLECEoM = await LedgisXaewLWB.balanceOf.call(addressQD6PCY2, {from: "0x0000000000000000000000000000000000000001"});
		const boolX4lcNwV = await LedgisXaewLWB.transferWithLockAfter.call(addressAaYdQrn, uintEaCHzxA, uintKy0H0v, {from: accounts[1]});

		assert.equal(boolX4lcNwV, true)
		assert.equal(uint256pLECEoM, BigInt("0"))
		assert.equal(uint256xwuEW8m, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisFBnfqPo = await Ledgis.new({from: accounts[1]});
		const uintqxpiSg0 = BigInt("1298")
		const addressEXOMYQa = accounts[3]
		const addressdBaNylN = "0x00000000000000000000000000000000000000-1"
		const uintwFAe1qB = BigInt("1334")
		const uinthUjYITq = BigInt("623")
		const addressRb1ZfQs = accounts[0]
		const uintcHCUKua = BigInt("133")
		const addressKKzLLNK = accounts[0]
//		const boolhkAZdal = await LedgisFBnfqPo.transferFrom.call(addressdBaNylN, addressEXOMYQa, uintqxpiSg0, {from: accounts[2]});
//		const addressLlibjbW = await LedgisFBnfqPo.lockAfter.call(addressRb1ZfQs, uinthUjYITq, uintwFAe1qB, {from: accounts[2]});
//		const boolW8MHkdz = await LedgisFBnfqPo.mint.call(addressKKzLLNK, uintcHCUKua, {from: accounts[0]});

		await expect(LedgisFBnfqPo.transferFrom.call(addressdBaNylN, addressEXOMYQa, uintqxpiSg0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXaewLWB = await Ledgis.new({from: accounts[1]});
		const addressnwtGKVp = accounts[4]
		const uintigYtRkS = BigInt("2042")
		const addressrHx6G0 = accounts[0]
		const uint256pLECEoM = await LedgisXaewLWB.balanceOf.call(addressnwtGKVp, {from: "0x0000000000000000000000000000000000000001"});
		const booloWWhBP9 = await LedgisXaewLWB.increaseAllowance.call(addressrHx6G0, uintigYtRkS, {from: accounts[4]});
//		await LedgisXaewLWB.pause.call({from: accounts[1]});

		assert.equal(booloWWhBP9, true)
		assert.equal(uint256pLECEoM, BigInt("0"))
		await expect(LedgisXaewLWB.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisxXL2Jq3 = await Ledgis.new({from: accounts[3]});
		const addressn5Vfhxg = accounts[1]
		const addressmclU0yf = accounts[4]
		const addressb0TVmX = accounts[3]
		const uint256EVRStkv = await LedgisxXL2Jq3.lockCount.call(addressn5Vfhxg, {from: accounts[2]});
		const boolQqYQE9 = await LedgisxXL2Jq3.isFrozen.call(addressmclU0yf, {from: accounts[2]});
		const addressgZ1YBKK = await LedgisxXL2Jq3.freeze.call(addressb0TVmX, {from: accounts[3]});

		assert.equal(boolQqYQE9, false)
		assert.equal(uint256EVRStkv, BigInt("0"))
	});

	it('test for Ledgis', async () => {
		const LedgisFBnfqPo = await Ledgis.new({from: accounts[1]});
		const uintdjc6Xk = BigInt("1523")
		const addressJvZFUIM = accounts[4]
		const uint1LDhQa = BigInt("1941")
		const addressMterXn = accounts[1]
		const uintDT4jZN0 = BigInt("1306")
		const addressvkBF2nW = accounts[3]
		const addresskd0gnZR = "0x0000000000000000000000000000000000000000"
//		const addressFz5ZSE4 = await LedgisFBnfqPo.unlock.call(addressJvZFUIM, uintdjc6Xk, {from: accounts[1]});
//		const boolmtEfJOP = await LedgisFBnfqPo.transfer.call(addressMterXn, uint1LDhQa, {from: accounts[1]});
//		const boolhkAZdal = await LedgisFBnfqPo.transferFrom.call(addresskd0gnZR, addressvkBF2nW, uintDT4jZN0, {from: accounts[2]});

		await expect(LedgisFBnfqPo.unlock.call(addressJvZFUIM, uintdjc6Xk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisFBnfqPo = await Ledgis.new({from: accounts[1]});
		const uintIpgXhb = BigInt("324")
		const addressQCaCO5C = accounts[3]
		const uintPpAo8Vg = BigInt("1298")
		const addressneLACu = accounts[4]
		const address1u00Od = "0x0000000000000000000000000000000000000000"
//		const addresshNNdp3V = await LedgisFBnfqPo.burn.call(addressQCaCO5C, uintIpgXhb, {from: accounts[1]});
//		const boolhkAZdal = await LedgisFBnfqPo.transferFrom.call(address1u00Od, addressneLACu, uintPpAo8Vg, {from: accounts[2]});

		await expect(LedgisFBnfqPo.burn.call(addressQCaCO5C, uintIpgXhb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXaewLWB = await Ledgis.new({from: accounts[1]});
		const uintpDuI6N = BigInt("449")
		const addressrZHzDHV = accounts[1]
		const addressdzhrWBs = accounts[4]
//		await LedgisXaewLWB.renounceOwnership.call({from: accounts[1]});
//		await LedgisXaewLWB.lockState.call(addressrZHzDHV, uintpDuI6N, {from: accounts[2]});
//		const uint256pLECEoM = await LedgisXaewLWB.balanceOf.call(addressdzhrWBs, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisXaewLWB.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisFBnfqPo = await Ledgis.new({from: accounts[1]});
		const uintdkYKAKD = BigInt("1350")
		const uintwXye6UY = BigInt("1525")
		const addressX7vNPp = accounts[0]
		const uintt7DsCbZ = BigInt("1298")
		const addressFP5ladf = accounts[3]
		const addressbDTMUE = "0x0000000000000000000000000000000000000000"
		const addressZubOlkc = accounts[0]
		const uint256TArcZWr = await LedgisFBnfqPo.currentTime.call({from: accounts[3]});
		const boolKKPgqWo = await LedgisFBnfqPo.transferWithLock.call(addressX7vNPp, uintwXye6UY, uintdkYKAKD, {from: accounts[1]});
//		const boolhkAZdal = await LedgisFBnfqPo.transferFrom.call(addressbDTMUE, addressFP5ladf, uintt7DsCbZ, {from: accounts[2]});
//		const addressGz30k8S = await LedgisFBnfqPo.unfreeze.call(addressZubOlkc, {from: accounts[5]});

		assert.equal(boolKKPgqWo, true)
		assert.equal(uint256TArcZWr, BigInt("1630231857"))
		await expect(LedgisFBnfqPo.transferFrom.call(addressbDTMUE, addressFP5ladf, uintt7DsCbZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisXaewLWB = await Ledgis.new({from: accounts[1]});
		const addressocBNh7e = accounts[4]
		const uint256pLECEoM = await LedgisXaewLWB.balanceOf.call(addressocBNh7e, {from: "0x0000000000000000000000000000000000000001"});
//		await LedgisXaewLWB.unpause.call({from: accounts[1]});

		assert.equal(uint256pLECEoM, BigInt("0"))
		await expect(LedgisXaewLWB.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisFBnfqPo = await Ledgis.new({from: accounts[1]});
		const uintX2awaeU = BigInt("35")
		const uintY5bhNlA = BigInt("755")
		const addressFWghfOX = accounts[1]
		const uintxzHclC = BigInt("271")
		const uintwJaaYfs = BigInt("1635")
		const addressOrilqrH = accounts[1]
		const uintngQo5Ww = BigInt("1298")
		const addressoTJ4WvI = accounts[4]
		const address1PORca = "0x0000000000000000000000000000000000000000"
		const addressPxNIkDQ = await LedgisFBnfqPo.lockAfter.call(addressFWghfOX, uintY5bhNlA, uintX2awaeU, {from: accounts[1]});
//		const addressLOlDP3U = await LedgisFBnfqPo.lock.call(addressOrilqrH, uintwJaaYfs, uintxzHclC, {from: accounts[3]});
//		const boolhkAZdal = await LedgisFBnfqPo.transferFrom.call(address1PORca, addressoTJ4WvI, uintngQo5Ww, {from: accounts[2]});

		await expect(LedgisFBnfqPo.lock.call(addressOrilqrH, uintwJaaYfs, uintxzHclC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisH6T4y4 = await Ledgis.new({from: accounts[3]});
		const uintfsS1bzX = BigInt("285")
		const addressJH1luYu = accounts[3]
		const uintz9bnZBc = BigInt("61")
		const addressT8KCSnj = accounts[4]
		const uintzsf2OW = BigInt("138")
		const addressdCGkC2d = accounts[4]
		const addressmYfa13O = await LedgisH6T4y4.burn.call(addressJH1luYu, uintfsS1bzX, {from: accounts[3]});
//		const addressMWsrG4A = await LedgisH6T4y4.burn.call(addressT8KCSnj, uintz9bnZBc, {from: accounts[4]});
//		const boolt1PoAl = await LedgisH6T4y4.approve.call(addressdCGkC2d, uintzsf2OW, {from: accounts[5]});

		await expect(LedgisH6T4y4.burn.call(addressT8KCSnj, uintz9bnZBc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})