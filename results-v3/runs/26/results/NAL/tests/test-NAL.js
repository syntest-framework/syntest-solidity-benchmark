const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALZMeEZCm = await NAL.new({from: accounts[1]});
		const addressjqFWz8L = accounts[4]
		const uint256ymfsIRy = await NALZMeEZCm.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolUcMJHiN = await NALZMeEZCm.isAdmin.call(addressjqFWz8L, {from: accounts[0]});
		const stringIL8txEI = await NALZMeEZCm.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolUcMJHiN, false)
		assert.equal(stringIL8txEI, "Personal Token")
		assert.equal(uint256ymfsIRy, BigInt("2000000000000000000000000000"))
	});

	it('test for NAL', async () => {
		const stringZead0ry = "RYnPCKRBZLeb5azf5tX5fI5vp5lY5zXcEsnEQATvOYyyhSz2UQZPaApWJc7E7XUgCtYmOkmvR3L"
		const stringJxYXCY = "uj3WhM3EDU5f4kZAQFpG1dHkVJ3Ux5jBrBmWBmGeKQWl2mGm9HMwCFPogeLcO4rqYvxmufdxnOVLR5K8IEdw"
		const uintAb7g4j = BigInt("171")
		const NALa4QyUC = await NAL.new(stringZead0ry, stringJxYXCY, uintAb7g4j, {from: accounts[0]});
		const addressib6BspR = accounts[3]
		const addresssYOLit = accounts[2]
		const addressu76KUW = accounts[2]
		const uintTJPmeB = BigInt("343")
		const addressCilA5Ab = accounts[4]
		const addressbx7ikyG = accounts[0]
		const addressY4Jx3RK = accounts[0]
		const uint2562cES2B = await NALa4QyUC.balanceOf.call(addressib6BspR, {from: accounts[0]});
		const uint256WTQeP0 = await NALa4QyUC.allowance.call(addressu76KUW, addresssYOLit, {from: accounts[0]});
		const boolMxzSzot = await NALa4QyUC.decreaseAllowance.call(addressCilA5Ab, uintTJPmeB, {from: accounts[3]});
		const uint256XEtcQG9 = await NALa4QyUC.allowance.call(addressY4Jx3RK, addressbx7ikyG, {from: accounts[5]});
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const uintZccF6i = BigInt("1747")
		const addressfWH2bjn = accounts[3]
		const addressYwhlaZw = accounts[1]
		const uintkL0nlg2 = BigInt("1455")
		const uint4oiZzH = BigInt("94")
		const addresssbcEy4z = accounts[1]
		const addresszPjggI = accounts[0]
		const boolkbYtSEu = await NAL2GVSWs.transferFrom.call(addressYwhlaZw, addressfWH2bjn, uintZccF6i, {from: accounts[4]});
		const string27w1ZO = await NAL2GVSWs.name.call({from: accounts[1]});
		const boolDwzXGB9 = await NAL2GVSWs.lock.call(addresssbcEy4z, uint4oiZzH, uintkL0nlg2, {from: accounts[4]});
		const addressLJBsSs = await NAL2GVSWs.removeAdmin.call(addresszPjggI, {from: accounts[4]});

		await expect(NAL2GVSWs.transferFrom.call(addressYwhlaZw, addressfWH2bjn, uintZccF6i, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALnF2MXw2 = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGpmiV1v = accounts[3]
		const uintqTIDo17 = BigInt("579")
		const addressx2vHkm = accounts[3]
		const addressHpSaO1O = accounts[3]
		const uintL9Yv49q = BigInt("1469")
		const addressYAP8t2e = "0x0000000000000000000000000000000000000001"
		const boolSN9b5p = await NALnF2MXw2.unfreezeAccount.call(addressGpmiV1v, {from: accounts[3]});
		const boolW1rUqRV = await NALnF2MXw2.transferFrom.call(addressHpSaO1O, addressx2vHkm, uintqTIDo17, {from: accounts[3]});
		const boolkq0LKoY = await NALnF2MXw2.increaseAllowance.call(addressYAP8t2e, uintL9Yv49q, {from: accounts[2]});
	});

	it('test for NAL', async () => {
		const NALB6mznRu = await NAL.new({from: accounts[3]});
		const addresstXr56y8 = accounts[4]
		const uintNK7yCH5 = BigInt("2016")
		const uintyLieYy = BigInt("1925")
		const addresslzzjva = accounts[1]
		await NALB6mznRu.renounceAdmin.call({from: accounts[1]});
		const uint256Dw5apRX = await NALB6mznRu.balanceOf.call(addresstXr56y8, {from: accounts[0]});
		const boolm69mjMZ = await NALB6mznRu.transferWithLock.call(addresslzzjva, uintyLieYy, uintNK7yCH5, {from: accounts[1]});
		await NALB6mznRu.renounceAdmin.call({from: accounts[2]});

		await expect(NALB6mznRu.renounceAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const uintFz7zRDD = BigInt("1455")
		const uintuuy5V2O = BigInt("94")
		const addressdZ1Hz5D = accounts[1]
		const uintkJitzYn = BigInt("536")
		const uintuiKCuin = BigInt("889")
		const addresszWE3nz = accounts[5]
		const uintIPuW9FK = BigInt("33")
		const addressus4NtiJ = "0x0000000000000000000000000000000000000001"
		const addressicHj7gp = accounts[0]
		const string27w1ZO = await NAL2GVSWs.name.call({from: accounts[1]});
		const boolDwzXGB9 = await NAL2GVSWs.lock.call(addressdZ1Hz5D, uintuuy5V2O, uintFz7zRDD, {from: accounts[4]});
		const boolsvTvtb = await NAL2GVSWs.transferWithLock.call(addresszWE3nz, uintuiKCuin, uintkJitzYn, {from: accounts[2]});
		const boolZBrPYNa = await NAL2GVSWs.decreaseAllowance.call(addressus4NtiJ, uintIPuW9FK, {from: accounts[2]});
		await NAL2GVSWs.renounceAdmin.call({from: accounts[4]});
		const addressLJBsSs = await NAL2GVSWs.removeAdmin.call(addressicHj7gp, {from: accounts[4]});

		assert.equal(string27w1ZO, "Personal Token")
		await expect(NAL2GVSWs.lock.call(addressdZ1Hz5D, uintuuy5V2O, uintFz7zRDD, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALZMeEZCm = await NAL.new({from: accounts[1]});
		const addressbBjRoi = accounts[3]
		const addressntUfOxr = accounts[4]
		const addressu6vnFzW = accounts[4]
		const uint256ymfsIRy = await NALZMeEZCm.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256jLNjS3 = await NALZMeEZCm.allowance.call(addressntUfOxr, addressbBjRoi, {from: accounts[1]});
		const boolUcMJHiN = await NALZMeEZCm.isAdmin.call(addressu6vnFzW, {from: accounts[0]});
		const boolz88wkvF = await NALZMeEZCm.paused.call({from: accounts[0]});
		const stringIL8txEI = await NALZMeEZCm.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolUcMJHiN, false)
		assert.equal(boolz88wkvF, false)
		assert.equal(stringIL8txEI, "Personal Token")
		assert.equal(uint256jLNjS3, BigInt("0"))
		assert.equal(uint256ymfsIRy, BigInt("2000000000000000000000000000"))
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const addressDJXcSe = accounts[0]
		const uintS7sl1q4 = BigInt("276")
		const addresslhIoGHu = accounts[0]
		const uintvjNwKtF = BigInt("1084")
		const addressJVNilJ = accounts[1]
		const uintwMGfRSE = BigInt("1747")
		const addresswjaasyS = accounts[4]
		const addresshOqBm2L = accounts[2]
		const boolE9klexy = await NAL2GVSWs.unfreezeAccount.call(addressDJXcSe, {from: accounts[0]});
		const boolyY7ubnt = await NAL2GVSWs.approve.call(addresslhIoGHu, uintS7sl1q4, {from: accounts[2]});
		const boolkulDKK = await NAL2GVSWs.increaseAllowance.call(addressJVNilJ, uintvjNwKtF, {from: accounts[1]});
		const boolkbYtSEu = await NAL2GVSWs.transferFrom.call(addresshOqBm2L, addresswjaasyS, uintwMGfRSE, {from: accounts[4]});
		const string27w1ZO = await NAL2GVSWs.name.call({from: accounts[1]});

		await expect(NAL2GVSWs.unfreezeAccount.call(addressDJXcSe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const uintRVT2v4t = BigInt("1742")
		const addressbwz6u32 = accounts[4]
		const addressW4PijJy = accounts[2]
		const addressSI4BLfY = accounts[0]
		await NAL2GVSWs.onlyAdmin.call({from: accounts[3]});
		const boolkbYtSEu = await NAL2GVSWs.transferFrom.call(addressW4PijJy, addressbwz6u32, uintRVT2v4t, {from: accounts[4]});
		await NAL2GVSWs.whenPaused.call({from: accounts[2]});
		const uint256V27rgtW = await NAL2GVSWs.balanceOf.call(addressSI4BLfY, {from: accounts[1]});

		await expect(NAL2GVSWs.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const uintYGNrYNS = BigInt("978")
		const addressEzk6F8N = accounts[1]
		const uinty2OhZ5X = BigInt("1742")
		const addresssSRPAuM = accounts[3]
		const addressDYb0cRb = accounts[2]
		const addressuQjrQMV = await NAL2GVSWs.burnFrom.call(addressEzk6F8N, uintYGNrYNS, {from: "0x0000000000000000000000000000000000000001"});
		const boolkbYtSEu = await NAL2GVSWs.transferFrom.call(addressDYb0cRb, addresssSRPAuM, uinty2OhZ5X, {from: accounts[4]});

		await expect(NAL2GVSWs.burnFrom.call(addressEzk6F8N, uintYGNrYNS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const uintmiAyoEk = BigInt("1367")
		const addressjZZ9uNq = accounts[4]
		const addressvjH7gSE = accounts[0]
		const uintzLWzP7K = BigInt("1742")
		const addressTSDD9q = accounts[4]
		const address4SIOga = accounts[2]
		const boolYDDamvn = await NAL2GVSWs.decreaseAllowance.call(addressjZZ9uNq, uintmiAyoEk, {from: accounts[2]});
		const boolyxkx2nD = await NAL2GVSWs.isAdmin.call(addressvjH7gSE, {from: accounts[4]});
		const boolkbYtSEu = await NAL2GVSWs.transferFrom.call(address4SIOga, addressTSDD9q, uintzLWzP7K, {from: accounts[4]});

		await expect(NAL2GVSWs.decreaseAllowance.call(addressjZZ9uNq, uintmiAyoEk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALriIj45O = await NAL.new({from: accounts[4]});
		const uintFYufhzd = BigInt("630")
		const addressjSHIB7s = accounts[1]
		const uintndeYlkx = BigInt("1339")
		const boolJvAzdbO = await NALriIj45O.approve.call(addressjSHIB7s, uintFYufhzd, {from: accounts[4]});
		const uint256aVgweoi = await NALriIj45O.burn.call(uintndeYlkx, {from: accounts[0]});

		assert.equal(boolJvAzdbO, true)
		await expect(NALriIj45O.burn.call(uintndeYlkx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const addressOfIhEzl = accounts[0]
		const uintz67NVRj = BigInt("1873")
		const addressPQlZtKz = accounts[2]
		const addressVGOLnpj = accounts[0]
		const uintRAjOeBY = BigInt("1742")
		const addressoSw1tDc = accounts[4]
		const addressjCFXBGx = accounts[2]
		const addresskdUt27 = await NAL2GVSWs.transferOwnership.call(addressOfIhEzl, {from: accounts[0]});
		const boolDwJvXKC = await NAL2GVSWs.transferFrom.call(addressVGOLnpj, addressPQlZtKz, uintz67NVRj, {from: accounts[5]});
		const boolkbYtSEu = await NAL2GVSWs.transferFrom.call(addressjCFXBGx, addressoSw1tDc, uintRAjOeBY, {from: accounts[4]});

		await expect(NAL2GVSWs.transferFrom.call(addressVGOLnpj, addressPQlZtKz, uintz67NVRj, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const addressl4K9yH = accounts[2]
		const addressWiLvN7Y = accounts[5]
		const address32b8ZY = accounts[1]
		const uintaIZaYV = BigInt("1742")
		const addressQlr8Si = accounts[3]
		const addressqJrS6C = accounts[3]
		const boolfkwJvq1 = await NAL2GVSWs.isAdmin.call(addressl4K9yH, {from: accounts[1]});
		const uint256yhv3QnG = await NAL2GVSWs.balanceOf.call(addressWiLvN7Y, {from: accounts[4]});
		const addresshAxLke2 = await NAL2GVSWs.upgradeTo.call(address32b8ZY, {from: accounts[2]});
		const boolkbYtSEu = await NAL2GVSWs.transferFrom.call(addressqJrS6C, addressQlr8Si, uintaIZaYV, {from: accounts[4]});

		assert.equal(boolfkwJvq1, false)
		assert.equal(uint256yhv3QnG, BigInt("0"))
		await expect(NAL2GVSWs.upgradeTo.call(address32b8ZY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const uint9NzLoU = BigInt("1226")
		const addressYqHTZAG = accounts[2]
		const uintE7e1JF = BigInt("329")
		const addressthww5f = "0x0000000000000000000000000000000000000001"
		const uintjmO8Xp2 = BigInt("1742")
		const addresssLGK2V3 = accounts[3]
		const addressdW7GasG = accounts[2]
		const boolNkLD35b = await NAL2GVSWs.approve.call(addressYqHTZAG, uint9NzLoU, {from: accounts[3]});
		const boolk4kT4jv = await NAL2GVSWs.transfer.call(addressthww5f, uintE7e1JF, {from: accounts[4]});
		const boolkbYtSEu = await NAL2GVSWs.transferFrom.call(addressdW7GasG, addresssLGK2V3, uintjmO8Xp2, {from: accounts[4]});

		assert.equal(boolNkLD35b, true)
		await expect(NAL2GVSWs.transfer.call(addressthww5f, uintE7e1JF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const uintNdLcnCY = BigInt("1226")
		const addresspwxNu33 = accounts[2]
		const uintBtAUF3N = BigInt("329")
		const address1mngg0 = "0x0000000000000000000000000000000000000002"
		const uintnFskNHm = BigInt("1573")
		const addressfhv93UM = accounts[4]
		const uintUnzvTuI = BigInt("1742")
		const addressfx633LG = accounts[3]
		const addressgCVT7Cr = accounts[2]
		const boolNkLD35b = await NAL2GVSWs.approve.call(addresspwxNu33, uintNdLcnCY, {from: accounts[3]});
		const stringsxvVDnA = await NAL2GVSWs.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolk4kT4jv = await NAL2GVSWs.transfer.call(address1mngg0, uintBtAUF3N, {from: accounts[4]});
		const boolofLXAO3 = await NAL2GVSWs.approve.call(addressfhv93UM, uintnFskNHm, {from: accounts[2]});
		const boolkbYtSEu = await NAL2GVSWs.transferFrom.call(addressgCVT7Cr, addressfx633LG, uintUnzvTuI, {from: accounts[4]});

		assert.equal(boolNkLD35b, true)
		assert.equal(stringsxvVDnA, "NAL")
		await expect(NAL2GVSWs.transfer.call(address1mngg0, uintBtAUF3N, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const uintx9qhYiM = BigInt("1226")
		const addressXFOL9tM = accounts[2]
		const uintCAFQAL = BigInt("1514")
		const addressblG4jL3 = accounts[3]
		const addressCzhNO3p = accounts[5]
		const uintXghhR45 = BigInt("1742")
		const addressZ6hcdO3 = accounts[3]
		const addressEmWx243 = accounts[2]
		const boolNkLD35b = await NAL2GVSWs.approve.call(addressXFOL9tM, uintx9qhYiM, {from: accounts[3]});
		const boolPWxXbBl = await NAL2GVSWs.unlock.call(addressblG4jL3, uintCAFQAL, {from: accounts[0]});
		const addressIoU2XMF = await NAL2GVSWs.notFrozen.call(addressCzhNO3p, {from: accounts[1]});
		const boolkbYtSEu = await NAL2GVSWs.transferFrom.call(addressEmWx243, addressZ6hcdO3, uintXghhR45, {from: accounts[4]});

		assert.equal(boolNkLD35b, true)
		await expect(NAL2GVSWs.unlock.call(addressblG4jL3, uintCAFQAL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const uintRnpDVh4 = BigInt("1127")
		const addressrseEj59 = accounts[2]
		const uintiwpi04R = BigInt("1742")
		const addressz9G0h49 = accounts[4]
		const addressDWJczF6 = accounts[3]
		const boolVZYbcru = await NAL2GVSWs.increaseAllowance.call(addressrseEj59, uintRnpDVh4, {from: accounts[1]});
		const boolkbYtSEu = await NAL2GVSWs.transferFrom.call(addressDWJczF6, addressz9G0h49, uintiwpi04R, {from: accounts[4]});

		assert.equal(boolVZYbcru, true)
		await expect(NAL2GVSWs.transferFrom.call(addressDWJczF6, addressz9G0h49, uintiwpi04R, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const addressxJG12mq = accounts[7]
		const addressk0Xg1LF = accounts[1]
		const uint256yhv3QnG = await NAL2GVSWs.balanceOf.call(addressxJG12mq, {from: accounts[4]});
		const uint8L0IZx7o = await NAL2GVSWs.decimals.call({from: accounts[3]});
		const addresshAxLke2 = await NAL2GVSWs.upgradeTo.call(addressk0Xg1LF, {from: accounts[2]});

		assert.equal(uint256yhv3QnG, BigInt("0"))
		assert.equal(uint8L0IZx7o, BigInt("18"))
		await expect(NAL2GVSWs.upgradeTo.call(addressk0Xg1LF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALET0WIyV = await NAL.new({from: accounts[1]});
		const addresszdHOaVL = accounts[2]
		const addressDTeWvnZ = accounts[5]
		const uintkkQShLM = BigInt("1838")
		const addressBTFuoey = "0x0000000000000000000000000000000000000001"
		const uintk5gfJBo = BigInt("1089")
		const addressBgk7X7F = accounts[0]
		const booliayvjHZ = await NALET0WIyV.freezeAccount.call(addresszdHOaVL, {from: accounts[1]});
		const addressMWldsp3 = await NALET0WIyV.removeAdmin.call(addressDTeWvnZ, {from: accounts[2]});
		const boolq6HbOTK = await NALET0WIyV.transfer.call(addressBTFuoey, uintkkQShLM, {from: accounts[0]});
		await NALET0WIyV.whenPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTTnHLYD = await NALET0WIyV.increaseAllowance.call(addressBgk7X7F, uintk5gfJBo, {from: accounts[0]});
		const stringa90cg7a = await NALET0WIyV.symbol.call({from: accounts[2]});

		assert.equal(booliayvjHZ, true)
		await expect(NALET0WIyV.removeAdmin.call(addressDTeWvnZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const uintaXLFNN = BigInt("124")
		const uintbTimhLc = BigInt("855")
		const addressBOnCOcM = accounts[1]
		const addressvNo439N = accounts[8]
		const boolRSorZH7 = await NAL2GVSWs.lock.call(addressBOnCOcM, uintbTimhLc, uintaXLFNN, {from: accounts[0]});
		const uint256yhv3QnG = await NAL2GVSWs.balanceOf.call(addressvNo439N, {from: accounts[4]});

		await expect(NAL2GVSWs.lock.call(addressBOnCOcM, uintbTimhLc, uintaXLFNN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const addressRPHXU0l = accounts[4]
		const uintHMDd8k1 = BigInt("1742")
		const addressN5u8Mbj = accounts[3]
		const addressHO95m4W = accounts[3]
		const uint256f9iCezi = await NAL2GVSWs.totalSupply.call({from: accounts[1]});
		await NAL2GVSWs.pause.call({from: accounts[0]});
		const addressHCJTyxj = await NAL2GVSWs.addAdmin.call(addressRPHXU0l, {from: accounts[2]});
		const boolkbYtSEu = await NAL2GVSWs.transferFrom.call(addressHO95m4W, addressN5u8Mbj, uintHMDd8k1, {from: accounts[4]});

		assert.equal(uint256f9iCezi, BigInt("2000000000000000000000000000"))
		await expect(NAL2GVSWs.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const addresszGsfgmF = accounts[0]
		const uintJpNRawQ = BigInt("322")
		const addressuLrMzS = "0x0000000000000000000000000000000000000001"
		const boolBfqoZ2i = await NAL2GVSWs.isOwner.call(addresszGsfgmF, {from: accounts[1]});
		const boolk4kT4jv = await NAL2GVSWs.transfer.call(addressuLrMzS, uintJpNRawQ, {from: accounts[4]});
		await NAL2GVSWs.onlyAdmin.call({from: accounts[0]});

		assert.equal(boolBfqoZ2i, true)
		await expect(NAL2GVSWs.transfer.call(addressuLrMzS, uintJpNRawQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NAL2GVSWs = await NAL.new({from: accounts[0]});
		const addressiGdWn3 = accounts[1]
		const uintvHohHNa = BigInt("329")
		const addressj16LkWK = "0x0000000000000000000000000000000000000001"
		const addressGq9UVxm = await NAL2GVSWs.removeAdmin.call(addressiGdWn3, {from: accounts[0]});
		const boolk4kT4jv = await NAL2GVSWs.transfer.call(addressj16LkWK, uintvHohHNa, {from: accounts[4]});

		await expect(NAL2GVSWs.removeAdmin.call(addressiGdWn3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})