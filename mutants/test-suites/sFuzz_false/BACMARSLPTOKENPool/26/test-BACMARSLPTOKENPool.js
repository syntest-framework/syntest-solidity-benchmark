const BACMARSLPTOKENPool = artifacts.require("BACMARSLPTOKENPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BACMARSLPTOKENPool', (accounts) => {
	it('test for BACMARSLPTOKENPool', async () => {
		const addressc2Q8mBU = accounts[3]
		const addressBAcEuht = accounts[2]
		const addressOO7nBFb = "0x0000000000000000000000000000000000000001"
		const BACMARSLPTOKENPoolumUg59Z = await BACMARSLPTOKENPool.new(addressc2Q8mBU, addressBAcEuht, addressOO7nBFb, {from: accounts[1]});
		const uintnaTe4x6 = BigInt("1615")
		const byteLjYm0QQ = "0x1e08050911120707181e08080e170317081b1b041b11140c201b0c031711151a"
		const bytetdcZ3KP = "0x0f0513030708091d120d1f0701051c161c0f110e130e1a03160517070e10040a"
		const uintiXOq4fh = BigInt("91")
		const uintPJfYmgO = BigInt("1788")
		const uintQvp5gh9 = BigInt("817")
		const uintIJCbWle = BigInt("1436")
//		const uint256tnKzb5U = await BACMARSLPTOKENPoolumUg59Z.stake.call(uintnaTe4x6, {from: accounts[1]});
//		const uint256CYpTkKy = await BACMARSLPTOKENPoolumUg59Z.stakeWithPermit.call(uintQvp5gh9, uintPJfYmgO, uintiXOq4fh, bytetdcZ3KP, byteLjYm0QQ, {from: accounts[2]});
//		const uint256B0xVW1j = await BACMARSLPTOKENPoolumUg59Z.stake.call(uintIJCbWle, {from: accounts[0]});

		await expect(BACMARSLPTOKENPoolumUg59Z.stake.call(uintnaTe4x6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNHrySs4 = "4SxMI5M9aTea4fdiZjoGtjis7DRoaFkwcQ1ScFwspJXuv3sdjsoLhkTaMu4MxWYC8fDC99YWssG1itzslLVBO9r2Q"
		const stringDhkruuP = "f71XJUQUj4mojuj3tNJJCltRlnxEzJVXQNO4I8vSGXmUOgYpV5sTMM1K49vO17Bk1VWYkG2sD"
		const uintZoPSCcG = BigInt("35")
		const BACMARSLPTOKENPoolVdHkyS = await BACMARSLPTOKENPool.new(stringNHrySs4, stringDhkruuP, uintZoPSCcG, {from: accounts[3]});
		const byteI3ZVc4e = "0x1417121d050b1106071e141305141a18190d021005081d021c19000f0119091c"
		const bytegfAOUhY = "0x101f0a1a1d0f070d1b1204051b050a16070206071c05050f080618141c0b0607"
		const uintP1OqeC = BigInt("29")
		const uintURaqwR4 = BigInt("1970")
		const uintHuMrCv = BigInt("429")
		const uint256NRHcQCk = await BACMARSLPTOKENPoolVdHkyS.stakeWithPermit.call(uintHuMrCv, uintURaqwR4, uintP1OqeC, bytegfAOUhY, byteI3ZVc4e, {from: accounts[3]});
		await BACMARSLPTOKENPoolVdHkyS.nonReentrant.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressLlvTiFx = accounts[1]
		const addressqu5NzDm = accounts[5]
		const addressf9S9wUQ = accounts[0]
		const BACMARSLPTOKENPoolraOReFU = await BACMARSLPTOKENPool.new(addressLlvTiFx, addressqu5NzDm, addressf9S9wUQ, {from: accounts[0]});
		const byteCwvmNp5 = "0x0c1904030703080514100a0c071e1a0f18000703070b08160c03060514061217"
		const byteZgna1KI = "0x0b110a1600140a0209070308161f081e0714021c011c1a1b180403140d020109"
		const uintIPcRiwv = BigInt("220")
		const uintcsKVOpD = BigInt("383")
		const uintLMpeEy = BigInt("1325")
//		const uint8NVWKQhn = await BACMARSLPTOKENPoolraOReFU.decimals.call({from: accounts[1]});
//		const uint256gxl9S7 = await BACMARSLPTOKENPoolraOReFU.stakeWithPermit.call(uintLMpeEy, uintcsKVOpD, uintIPcRiwv, byteZgna1KI, byteCwvmNp5, {from: accounts[1]});
//		await BACMARSLPTOKENPoolraOReFU.nonReentrant.call({from: accounts[1]});

		await expect(BACMARSLPTOKENPoolraOReFU.decimals.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringt66qIh6 = "rraH17OlrAJKfkOekC9TgIK6Jhr7vHx7FjksT52yASbAmtstrHfKlmswjm7HstG"
		const string6GTApo = "DMpX7ssVDxbzykmsIEjbarnvyiBU1IVOU4GmV"
		const uintOMF65Sc = BigInt("166")
		const BACMARSLPTOKENPoolJpoyazW = await BACMARSLPTOKENPool.new(stringt66qIh6, string6GTApo, uintOMF65Sc, {from: accounts[3]});
		const addressmkqJZhM = accounts[3]
		const uint256mhduYbc = await BACMARSLPTOKENPoolJpoyazW.earned.call(addressmkqJZhM, {from: accounts[2]});
		const uint8H7YArFl = await BACMARSLPTOKENPoolJpoyazW.decimals.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressNRKJdl4 = accounts[1]
		const addressEY4Dj7O = accounts[1]
		const addressuXFSv7h = accounts[5]
		const BACMARSLPTOKENPoolN7IOUDS = await BACMARSLPTOKENPool.new(addressNRKJdl4, addressEY4Dj7O, addressuXFSv7h, {from: accounts[5]});
		const addresseDmJuNm = "0x0000000000000000000000000000000000000001"
		const byteaiPiOEK = "0x100b091b11040a04101a201f1a04101f0f061e091f1f0214101c1e001317090a"
		const bytepRres3S = "0x05020b0204121f1f110816040f090d06021b0a10071e020d02070d0a141e1a03"
		const uintRMVavU = BigInt("62")
		const uintouQnKZp = BigInt("343")
		const uintnNn7F8 = BigInt("966")
		const uint256qsHeI70 = await BACMARSLPTOKENPoolN7IOUDS.earned.call(addresseDmJuNm, {from: accounts[2]});
//		const uint256uk5d8UU = await BACMARSLPTOKENPoolN7IOUDS.stakeWithPermit.call(uintnNn7F8, uintouQnKZp, uintRMVavU, bytepRres3S, byteaiPiOEK, {from: accounts[1]});

		assert.equal(uint256qsHeI70, BigInt("0"))
		await expect(BACMARSLPTOKENPoolN7IOUDS.stakeWithPermit.call(uintnNn7F8, uintouQnKZp, uintRMVavU, bytepRres3S, byteaiPiOEK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressahq4zqk = accounts[1]
		const addressmszpXWP = accounts[0]
		const addressnJOqzHC = accounts[2]
		const BACMARSLPTOKENPoolnYTg1bn = await BACMARSLPTOKENPool.new(addressahq4zqk, addressmszpXWP, addressnJOqzHC, {from: accounts[5]});
		const addressPiiI2fI = accounts[4]
		const uintu4uBvp = BigInt("1967")
		const uintjPflhu = BigInt("237")
		const uint256JOFzbcs = await BACMARSLPTOKENPoolnYTg1bn.getRewardForDuration.call({from: accounts[5]});
		const uint256RM25UJc = await BACMARSLPTOKENPoolnYTg1bn.balanceOf.call(addressPiiI2fI, {from: accounts[1]});
//		const uint256Ic5yF0j = await BACMARSLPTOKENPoolnYTg1bn.notifyRewardAmount.call(uintu4uBvp, {from: accounts[3]});
//		const uint256DvhAvw5 = await BACMARSLPTOKENPoolnYTg1bn.notifyRewardAmount.call(uintjPflhu, {from: accounts[2]});

		assert.equal(uint256JOFzbcs, BigInt("0"))
		assert.equal(uint256RM25UJc, BigInt("0"))
		await expect(BACMARSLPTOKENPoolnYTg1bn.notifyRewardAmount.call(uintu4uBvp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressHAnVsCP = accounts[0]
		const addressrKYqqrM = accounts[3]
		const addressDiYZ4Rt = accounts[4]
		const BACMARSLPTOKENPoolsO8ZHCR = await BACMARSLPTOKENPool.new(addressHAnVsCP, addressrKYqqrM, addressDiYZ4Rt, {from: accounts[5]});
		const addresssA6Q3Fv = "0x0000000000000000000000000000000000000001"
		const byte8TqLIV = "0x0308121d0f000e0b1d0a1508091d191e121c10201c1f061b1f03172009190813"
		const byteXPq1ZxG = "0x10041a1d1d1d11171c0f181f0c001113111c1418020708010c1d15090519021f"
		const uintdWCvkJS = BigInt("16")
		const uintKMoYZM7 = BigInt("710")
		const uintTs5V2R8 = BigInt("92")
		const uint256Mvrsp0S = await BACMARSLPTOKENPoolsO8ZHCR.totalSupply.call({from: accounts[2]});
//		const uint8y41rs3S = await BACMARSLPTOKENPoolsO8ZHCR.decimals.call({from: accounts[3]});
//		const uint2562RxHY2 = await BACMARSLPTOKENPoolsO8ZHCR.balanceOf.call(addresssA6Q3Fv, {from: accounts[4]});
//		const uint256OP1R2sJ = await BACMARSLPTOKENPoolsO8ZHCR.stakeWithPermit.call(uintTs5V2R8, uintKMoYZM7, uintdWCvkJS, byteXPq1ZxG, byte8TqLIV, {from: accounts[4]});

		assert.equal(uint256Mvrsp0S, BigInt("0"))
		await expect(BACMARSLPTOKENPoolsO8ZHCR.decimals.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringeCF8KJJ = "avQMLBauYqlYwbT3SpGVHBGKiM6nzNAzCg9jGCVBgIGKVNDyOA1BQQKvQnAoL6OMNQieRgn2lzWAhAhQ"
		const stringNoBgjJ6 = "ajAElvWxPhzZkgvlQ1ELbVLPB8jwImrV1ha5o1"
		const uintFLClQd = BigInt("225")
		const BACMARSLPTOKENPoolbhKCFs = await BACMARSLPTOKENPool.new(stringeCF8KJJ, stringNoBgjJ6, uintFLClQd, {from: accounts[4]});
		const addressiP1t4kf = "0x0000000000000000000000000000000000000001"
		const addressh7KaTLv = accounts[4]
		const addressW2Kjrp = await BACMARSLPTOKENPoolbhKCFs.updateReward.call(addressiP1t4kf, {from: accounts[4]});
		const uint8lYevlYC = await BACMARSLPTOKENPoolbhKCFs.decimals.call({from: accounts[3]});
		await BACMARSLPTOKENPoolbhKCFs.nonReentrant.call({from: accounts[4]});
		const addresssoOMxzV = await BACMARSLPTOKENPoolbhKCFs.updateReward.call(addressh7KaTLv, {from: accounts[0]});
		await BACMARSLPTOKENPoolbhKCFs.onlyRewardsDistribution.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresssHWJT62 = accounts[1]
		const addressKMJIJOF = accounts[1]
		const addressK8vzCjX = accounts[5]
		const BACMARSLPTOKENPoolN7IOUDS = await BACMARSLPTOKENPool.new(addresssHWJT62, addressKMJIJOF, addressK8vzCjX, {from: accounts[5]});
		const uintnjksjFr = BigInt("1868")
		const byteFNI5ix = "0x100b091b11040a04101a201f1a04101f0f061e091f1f0214101c1e001317090a"
		const byteH0MoCu9 = "0x05020b0204121f1f110816040f090d06021b0a10071e020d02070d0a141e1a03"
		const uintYA72sUq = BigInt("201")
		const uintR4OAwIa = BigInt("343")
		const uintAGizl01 = BigInt("966")
//		const uint256f4d6lG3 = await BACMARSLPTOKENPoolN7IOUDS.withdraw.call(uintnjksjFr, {from: accounts[5]});
//		const uint256uk5d8UU = await BACMARSLPTOKENPoolN7IOUDS.stakeWithPermit.call(uintAGizl01, uintR4OAwIa, uintYA72sUq, byteH0MoCu9, byteFNI5ix, {from: accounts[1]});

		await expect(BACMARSLPTOKENPoolN7IOUDS.withdraw.call(uintnjksjFr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresslJvh71m = accounts[1]
		const addressdLcEIxN = accounts[1]
		const addressLNKFm57 = accounts[5]
		const BACMARSLPTOKENPoolN7IOUDS = await BACMARSLPTOKENPool.new(addresslJvh71m, addressdLcEIxN, addressLNKFm57, {from: accounts[5]});
		const addressWhVuazm = accounts[1]
		const uintfl2R0oV = BigInt("1394")
		const uint256mnxxWk = await BACMARSLPTOKENPoolN7IOUDS.earned.call(addressWhVuazm, {from: accounts[2]});
//		const uint256Fzh3AJ = await BACMARSLPTOKENPoolN7IOUDS.notifyRewardAmount.call(uintfl2R0oV, {from: accounts[1]});

		assert.equal(uint256mnxxWk, BigInt("0"))
		await expect(BACMARSLPTOKENPoolN7IOUDS.notifyRewardAmount.call(uintfl2R0oV, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addresspT5ySKG = accounts[1]
		const addressJ8qhRtS = accounts[0]
		const addresstr4vTCD = accounts[2]
		const BACMARSLPTOKENPooltxA55b0 = await BACMARSLPTOKENPool.new(addresspT5ySKG, addressJ8qhRtS, addresstr4vTCD, {from: accounts[3]});
		const uintzYV9ROt = BigInt("1260")
//		await BACMARSLPTOKENPooltxA55b0.exit.call({from: accounts[3]});
//		await BACMARSLPTOKENPooltxA55b0.nonReentrant.call({from: accounts[4]});
//		const uint256B6faor = await BACMARSLPTOKENPooltxA55b0.withdraw.call(uintzYV9ROt, {from: accounts[4]});

		await expect(BACMARSLPTOKENPooltxA55b0.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressd8CFVMN = accounts[1]
		const addressEdmHQp = accounts[1]
		const addressCqImCnd = accounts[5]
		const BACMARSLPTOKENPoolN7IOUDS = await BACMARSLPTOKENPool.new(addressd8CFVMN, addressEdmHQp, addressCqImCnd, {from: accounts[5]});
		const byteg8RrTF0 = "0x100b091b11040a04101a201f1a04101f0f061e091f1f0214101c1e001317090a"
		const byteY6FrwO9 = "0x05020b0204121f1f110816040f090d06021b0a10071e020d02070d0a141e1a03"
		const uintNGSlUAr = BigInt("39")
		const uintbm6rn5Y = BigInt("343")
		const uintOZp8zmp = BigInt("966")
//		await BACMARSLPTOKENPoolN7IOUDS.getReward.call({from: accounts[0]});
//		const uint256uk5d8UU = await BACMARSLPTOKENPoolN7IOUDS.stakeWithPermit.call(uintOZp8zmp, uintbm6rn5Y, uintNGSlUAr, byteY6FrwO9, byteg8RrTF0, {from: accounts[1]});
//		const uint256rxsgbmB = await BACMARSLPTOKENPoolN7IOUDS.getRewardForDuration.call({from: accounts[3]});

		await expect(BACMARSLPTOKENPoolN7IOUDS.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressQCQtB3I = accounts[4]
		const addressyZIaWbg = accounts[3]
		const addresst3hk5iB = accounts[1]
		const BACMARSLPTOKENPoolUKvBxAF = await BACMARSLPTOKENPool.new(addressQCQtB3I, addressyZIaWbg, addresst3hk5iB, {from: "0x0000000000000000000000000000000000000001"});
		const uintZK5i9i = BigInt("382")
		await BACMARSLPTOKENPoolUKvBxAF.nonReentrant.call({from: accounts[2]});
		const uint256t7B5ZQR = await BACMARSLPTOKENPoolUKvBxAF.stake.call(uintZK5i9i, {from: accounts[2]});
		const stringr0CKP4b = await BACMARSLPTOKENPoolUKvBxAF.symbol.call({from: accounts[2]});
		const uint256DG1O2He = await BACMARSLPTOKENPoolUKvBxAF.rewardPerToken.call({from: accounts[3]});
		await BACMARSLPTOKENPoolUKvBxAF.exit.call({from: accounts[0]});
		const stringM6SNbTm = await BACMARSLPTOKENPoolUKvBxAF.name.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringZmD0Ls = "CPiKpq4wY1orR2MyAHu5TCA554YciC4d2zCMgX6Szmd8wWMcfO4DE8G5emXtEt53EdVpGXFHildnU"
		const stringet8Iq69 = "TvHlkOgwc78qpgcebFK6m"
		const uintL8aSSnJ = BigInt("131")
		const BACMARSLPTOKENPoolkdNqjDb = await BACMARSLPTOKENPool.new(stringZmD0Ls, stringet8Iq69, uintL8aSSnJ, {from: accounts[3]});
		const uintSpjM2o = BigInt("1574")
		const uintIL84gnO = BigInt("1496")
		const uint2567UtozK = await BACMARSLPTOKENPoolkdNqjDb.getRewardForDuration.call({from: accounts[2]});
		const uint256WlSxDba = await BACMARSLPTOKENPoolkdNqjDb.withdraw.call(uintSpjM2o, {from: accounts[2]});
		const uint256bDzJNei = await BACMARSLPTOKENPoolkdNqjDb.stake.call(uintIL84gnO, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQzEmrPO = "15Msy9bWD0ynKuy4SbwxHretmLxOprZ7NGMwxQi7sEJtn89FR5AIzpMtQPg7GTmN3pftnU8GpGaMe"
		const stringK4o674o = "LgT7FV"
		const uintSu3XWWB = BigInt("40")
		const BACMARSLPTOKENPoolZlmmcbI = await BACMARSLPTOKENPool.new(stringQzEmrPO, stringK4o674o, uintSu3XWWB, {from: "0x0000000000000000000000000000000000000001"});
		const addressh4Zrtxd = accounts[2]
		const uint256cAfX2Ab = await BACMARSLPTOKENPoolZlmmcbI.totalSupply.call({from: accounts[2]});
		const uint256vb4mLVn = await BACMARSLPTOKENPoolZlmmcbI.totalSupply.call({from: accounts[4]});
		await BACMARSLPTOKENPoolZlmmcbI.exit.call({from: accounts[1]});
		const stringndzRpr = await BACMARSLPTOKENPoolZlmmcbI.symbol.call({from: accounts[1]});
		const uint256W1FAPYj = await BACMARSLPTOKENPoolZlmmcbI.earned.call(addressh4Zrtxd, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrOt8I3T = "1r6auUxU2CqfSIGJIKlxnVFvoQwJBjf24CVGcHfwCS22wliVglgZ9mfj2tAnWtq2N4OrNf7ERhM1xpFvs4J35xd"
		const stringi0tppka = "UHUT4v5RPc8Q9IMZAh4pUTw"
		const uintSHW11IR = BigInt("237")
		const BACMARSLPTOKENPoolEiTGEkm = await BACMARSLPTOKENPool.new(stringrOt8I3T, stringi0tppka, uintSHW11IR, {from: accounts[4]});
		const addresseb8EDEQ = accounts[0]
		const uintWmafsMN = BigInt("394")
		const uintnkIKlor = BigInt("505")
		await BACMARSLPTOKENPoolEiTGEkm.exit.call({from: accounts[0]});
		const uint256xVip7U7 = await BACMARSLPTOKENPoolEiTGEkm.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256IpuEM8g = await BACMARSLPTOKENPoolEiTGEkm.balanceOf.call(addresseb8EDEQ, {from: accounts[0]});
		const uint256SWpa9RM = await BACMARSLPTOKENPoolEiTGEkm.withdraw.call(uintWmafsMN, {from: accounts[1]});
		const uint256OxYS3uG = await BACMARSLPTOKENPoolEiTGEkm.rewardPerToken.call({from: accounts[3]});
		const uint256a2gOGc = await BACMARSLPTOKENPoolEiTGEkm.stake.call(uintnkIKlor, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringfc1SmH1 = "wWBbO1dxndYpg049kydsWNje9GBPxzWSAjRF6GmVh7Ur3G3S9grxp1TYHVZzqwhuXPsxocq5Mbvn"
		const stringyISb10j = "cl1x2tNgXjOj2XBDHyn46qcCNVagpA2y1QeTt9kCtSqFcoz2zMrxuMNrBGQWw9rfrqdcSxRhnw"
		const uintwXoJ9ol = BigInt("237")
		const BACMARSLPTOKENPoolvEUECx = await BACMARSLPTOKENPool.new(stringfc1SmH1, stringyISb10j, uintwXoJ9ol, {from: accounts[0]});
		const uintvO9Z2C9 = BigInt("1118")
		await BACMARSLPTOKENPoolvEUECx.exit.call({from: accounts[2]});
		await BACMARSLPTOKENPoolvEUECx.exit.call({from: accounts[3]});
		const uint25627e0LX = await BACMARSLPTOKENPoolvEUECx.totalSupply.call({from: accounts[4]});
		const uint256Ka2r0VN = await BACMARSLPTOKENPoolvEUECx.withdraw.call(uintvO9Z2C9, {from: "0x0000000000000000000000000000000000000001"});
		const uint8ueWZyM1 = await BACMARSLPTOKENPoolvEUECx.decimals.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringplL3iD0 = "3Q7MhU1EZysQspmByHEBB2TmwlxjcqTF2X1zPlIKJBS5PXFgc4dYXNMxjldMmD1Ba2"
		const stringNcXqBsB = "nue"
		const uintP8AYlwS = BigInt("32")
		const BACMARSLPTOKENPoolk1lTQfU = await BACMARSLPTOKENPool.new(stringplL3iD0, stringNcXqBsB, uintP8AYlwS, {from: accounts[2]});
		const uint256EP6l0n = await BACMARSLPTOKENPoolk1lTQfU.getRewardForDuration.call({from: accounts[2]});
		await BACMARSLPTOKENPoolk1lTQfU.exit.call({from: accounts[3]});
		const uint256KU9eo4n = await BACMARSLPTOKENPoolk1lTQfU.totalSupply.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringOsXokeb = "ugIdnOzIHb8v8VgECe9norzT9AqGUcB8UIv8WkrkFgThDkQraP2jLJYiMWNqCgUbBZj"
		const stringfdTzVba = "CB1jxpJ6kwpiNhvhs7H2DwRcuL3L3lsO4UL9cbyc2BNc3hnSTAQzt6KEZvQT2WwI6T"
		const uintjtWyZII = BigInt("110")
		const BACMARSLPTOKENPoolMkD01JL = await BACMARSLPTOKENPool.new(stringOsXokeb, stringfdTzVba, uintjtWyZII, {from: accounts[4]});
		const uint8f0qwUkn = await BACMARSLPTOKENPoolMkD01JL.decimals.call({from: accounts[2]});
		await BACMARSLPTOKENPoolMkD01JL.getReward.call({from: accounts[4]});
		await BACMARSLPTOKENPoolMkD01JL.exit.call({from: accounts[3]});
		const stringWJtGRkw = await BACMARSLPTOKENPoolMkD01JL.symbol.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringsjoKyth = "p3YukFEnpfxnlgaEldITlgRdasShsg3"
		const stringEExPZsX = "FuNLIL6djvUjCl2RMbV9fWN7fGbKKT66dQbtwwQVboYAdMS1Y28ZBDl7BCV3dj4kvV8Ay8vXU5F"
		const uintpzBLRKS = BigInt("174")
		const BACMARSLPTOKENPoolz9ogxAF = await BACMARSLPTOKENPool.new(stringsjoKyth, stringEExPZsX, uintpzBLRKS, {from: "0x0000000000000000000000000000000000000001"});
		const addressIw67Pci = accounts[4]
		const uint256Tfh453g = await BACMARSLPTOKENPoolz9ogxAF.balanceOf.call(addressIw67Pci, {from: accounts[2]});
		await BACMARSLPTOKENPoolz9ogxAF.getReward.call({from: accounts[2]});
		const uint8NAqayQY = await BACMARSLPTOKENPoolz9ogxAF.decimals.call({from: accounts[0]});
		const uint8wXYf4py = await BACMARSLPTOKENPoolz9ogxAF.decimals.call({from: accounts[1]});
		await BACMARSLPTOKENPoolz9ogxAF.getReward.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringbGQiA5W = "C1dWlKjHV9m3TBpGkx1"
		const stringsTPbJ8p = "ndsNQUWtyTupwqy7qV9ThYlFqutfVIVRkMVvgnSTduYpBSzaNYZ54RAn5Iqr1YINkPDpOPw3LwEkn5OsrHFYwM"
		const uintgM10JX8 = BigInt("217")
		const BACMARSLPTOKENPoolwHphGtK = await BACMARSLPTOKENPool.new(stringbGQiA5W, stringsTPbJ8p, uintgM10JX8, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gJsyL0p = await BACMARSLPTOKENPoolwHphGtK.totalSupply.call({from: accounts[3]});
		await BACMARSLPTOKENPoolwHphGtK.nonReentrant.call({from: accounts[5]});
		await BACMARSLPTOKENPoolwHphGtK.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolwHphGtK.getReward.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringwRZbymI = "CpIYguOBPIS7WoJan2vHO8PwDhAD18548S9iNzYD55pZTL4qFXmCD2aFjQFp4InVz8UHMVoDx33ToVwdHNf2rimOSwy"
		const stringhQizNdV = "jCKsgqXHur3oLsqCwaVRZqvU2Qi7cheanGNQfbYDEIwkYDsnfYMqJH2IbUCxjsmYCWrF1fB9tu0UabHY"
		const uintSkLUy1H = BigInt("73")
		const BACMARSLPTOKENPoolljF49I = await BACMARSLPTOKENPool.new(stringwRZbymI, stringhQizNdV, uintSkLUy1H, {from: accounts[2]});
		const byteoakpFg = "0x1603140d120104180d01010111151a0317181c050601130303130105051d0b02"
		const byteopdQVuh = "0x0813170f0c08121b01031d0c201504121d0f04141217061c0b1d160f0b1f0404"
		const uint5ciJ1J = BigInt("153")
		const uintnnoj0WA = BigInt("1552")
		const uintkJD1f2V = BigInt("1265")
		const uintVQUNE2z = BigInt("1849")
		const uint256ou7fuKt = await BACMARSLPTOKENPoolljF49I.stakeWithPermit.call(uintkJD1f2V, uintnnoj0WA, uint5ciJ1J, byteopdQVuh, byteoakpFg, {from: accounts[5]});
		const uint256LqdC55h = await BACMARSLPTOKENPoolljF49I.stake.call(uintVQUNE2z, {from: accounts[3]});
		await BACMARSLPTOKENPoolljF49I.onlyRewardsDistribution.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringXtAYKto = "ys1ojiP4ypJ9h4v"
		const stringu6kdG39 = "Sdh6Xe9grxactci3xi9LDDx19B8EIb7KF5yc"
		const uintIjzYBMU = BigInt("159")
		const BACMARSLPTOKENPooliIRCmKL = await BACMARSLPTOKENPool.new(stringXtAYKto, stringu6kdG39, uintIjzYBMU, {from: accounts[1]});
		const byteExlLh6 = "0x070f1d15081114170d13130e1a0612170a030e1b1b0208200316111d0d17181a"
		const byteEnA5Z0h = "0x02100a0e1a0e10170d1b08160d0a000d061616151f17091a170d1d1b10030115"
		const uintPHkpsSt = BigInt("27")
		const uint9tig4a = BigInt("1391")
		const uintibLmsRx = BigInt("1988")
		const stringBx7ewSM = await BACMARSLPTOKENPooliIRCmKL.symbol.call({from: accounts[4]});
		const uint2563HrbnL = await BACMARSLPTOKENPooliIRCmKL.getRewardForDuration.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256lxOOy3w = await BACMARSLPTOKENPooliIRCmKL.stakeWithPermit.call(uintibLmsRx, uint9tig4a, uintPHkpsSt, byteEnA5Z0h, byteExlLh6, {from: accounts[2]});
		const stringbmc2phL = await BACMARSLPTOKENPooliIRCmKL.name.call({from: accounts[1]});
		await BACMARSLPTOKENPooliIRCmKL.exit.call({from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringylSO4eK = "rPnaSpe8fAmpeNnfwRsPTuJ6JXbjGX4uiwbjRDOPVc"
		const stringMDMYUYB = "aY1HxegYhEWMyl1pfuegk1tRUmYhG5msgNl6HFiu5olp9H1WMmwQsqtEqY"
		const uintGRHvCT8 = BigInt("88")
		const BACMARSLPTOKENPoolGv76mGg = await BACMARSLPTOKENPool.new(stringylSO4eK, stringMDMYUYB, uintGRHvCT8, {from: accounts[1]});
		const uintBFrYpkA = BigInt("200")
		const uintG5OpY5r = BigInt("1552")
		const uint8eGa8bZD = await BACMARSLPTOKENPoolGv76mGg.decimals.call({from: accounts[0]});
		const uint256zzP8Q26 = await BACMARSLPTOKENPoolGv76mGg.notifyRewardAmount.call(uintBFrYpkA, {from: accounts[1]});
		const uint256UXnecI8 = await BACMARSLPTOKENPoolGv76mGg.stake.call(uintG5OpY5r, {from: "0x0000000000000000000000000000000000000001"});
		await BACMARSLPTOKENPoolGv76mGg.onlyRewardsDistribution.call({from: accounts[5]});
		const stringJPferEF = await BACMARSLPTOKENPoolGv76mGg.name.call({from: accounts[0]});
		const uint256hlMhaUl = await BACMARSLPTOKENPoolGv76mGg.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringmPOIqIZ = "lstqzNQlT9V2BYNezPCNinRoUFrXklhh6HAYZJ9OcjILv1cRuBk9Ik92sPB"
		const stringa45ZWlI = "Sh9rO5yz7K5yjyKWtrvl83aPucpgAdy1f9aKd0NK5aDSGS8jEb1jpPKmMM9rptYRfBS55cec"
		const uintRpYCfPP = BigInt("67")
		const BACMARSLPTOKENPoolipuXdjt = await BACMARSLPTOKENPool.new(stringmPOIqIZ, stringa45ZWlI, uintRpYCfPP, {from: accounts[3]});
		const uint8bdPF0pw = await BACMARSLPTOKENPoolipuXdjt.decimals.call({from: accounts[2]});
		const stringrxILbEm = await BACMARSLPTOKENPoolipuXdjt.name.call({from: accounts[4]});
		await BACMARSLPTOKENPoolipuXdjt.exit.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringNQ69JVm = "VnzgtWuyW993NJCLQYoY94JBvEzXSyoYMVJOora46uUeS8dL8OGifJq5zAoHW7JDwciHNYSz7RHlye"
		const stringvOYu1VY = "ryUiGorv7qKjmhmV4iO4OLTX2IXwmCnske2HP4ow3dFrfSjg5qVBBl"
		const uintmd1rQGp = BigInt("26")
		const BACMARSLPTOKENPoolYxtdX2s = await BACMARSLPTOKENPool.new(stringNQ69JVm, stringvOYu1VY, uintmd1rQGp, {from: accounts[2]});
		const uintObjeCD = BigInt("493")
		const bytePhZu2Vh = "0x060a1f1e140f161e08010b0f0816131a091d1e1e171a090917181b080f1f0006"
		const byteL0JGQN = "0x1d0c1b1c1c0a1a00100a0d07010902140b030311141f02011c0313160d121301"
		const uintdKUqjDb = BigInt("238")
		const uintGu4fdBn = BigInt("1032")
		const uint3Ro9lM = BigInt("288")
		const uint256aTe3Eoq = await BACMARSLPTOKENPoolYxtdX2s.withdraw.call(uintObjeCD, {from: accounts[0]});
		const uint8aad5xFb = await BACMARSLPTOKENPoolYxtdX2s.decimals.call({from: accounts[1]});
		const uint256VNAq79 = await BACMARSLPTOKENPoolYxtdX2s.totalSupply.call({from: accounts[4]});
		const uint256cjVwsB3 = await BACMARSLPTOKENPoolYxtdX2s.stakeWithPermit.call(uint3Ro9lM, uintGu4fdBn, uintdKUqjDb, byteL0JGQN, bytePhZu2Vh, {from: accounts[5]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const addressK2cmYd = accounts[1]
		const addressMpEb6uH = accounts[1]
		const addressAIU5Z7g = accounts[5]
		const BACMARSLPTOKENPoolN7IOUDS = await BACMARSLPTOKENPool.new(addressK2cmYd, addressMpEb6uH, addressAIU5Z7g, {from: accounts[5]});
		const byteVAX3dhM = "0x100b091b11040a04101a201f1a04101f0f061e091f1f0214101c1e001317090a"
		const byteciS4gMa = "0x05020b02ffffffff121f1f110816040f090d06021b0a10071e020d02070d0a141e1a03"
		const uinthfWkehj = BigInt("62")
		const uintYP9WRK = BigInt("343")
		const uintnPhan7G = BigInt("966")
//		const uint256uk5d8UU = await BACMARSLPTOKENPoolN7IOUDS.stakeWithPermit.call(uintnPhan7G, uintYP9WRK, uinthfWkehj, byteciS4gMa, byteVAX3dhM, {from: accounts[1]});
//		await BACMARSLPTOKENPoolN7IOUDS.onlyRewardsDistribution.call({from: accounts[4]});
//		const uint256JxjHRxF = await BACMARSLPTOKENPoolN7IOUDS.getRewardForDuration.call({from: accounts[2]});

		await expect(BACMARSLPTOKENPoolN7IOUDS.stakeWithPermit.call(uintnPhan7G, uintYP9WRK, uinthfWkehj, byteciS4gMa, byteVAX3dhM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string90FzCy = "daS8NGhN6o3MG"
		const stringBkclNcZ = "gkj3uDMIJfgtQY2YTHVeNlFi6aaZOJqUCTLbUqE9MUedk8R5ITE1G2WaQ9VlItGveFMeUy53KaYdKq3a1AuS"
		const uintckMV6Ex = BigInt("92")
		const BACMARSLPTOKENPool51Dukc = await BACMARSLPTOKENPool.new(string90FzCy, stringBkclNcZ, uintckMV6Ex, {from: accounts[2]});
		const uint256fRIMq0u = await BACMARSLPTOKENPool51Dukc.getRewardForDuration.call({from: accounts[5]});
		await BACMARSLPTOKENPool51Dukc.onlyRewardsDistribution.call({from: accounts[3]});
		const uint256p26a3yp = await BACMARSLPTOKENPool51Dukc.rewardPerToken.call({from: accounts[3]});
		await BACMARSLPTOKENPool51Dukc.nonReentrant.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringaCrFmn0 = "RVeWqvXwx9uV6AduBdJKAWDvlSrzxaFQaVRPPwfzGQDUH4Lds1vTD6dZ5lyHxq54UxHE4MdHZH5FbyO"
		const stringAAsGUc1 = "vkB1UvrVcBfQLsMzppZVRKqvicqqNhw1etTBpBBGjE9zoSEo4rHqv2pL8c4vgKjCpd9rQiP6ZaEDciIN2"
		const uinto3fx8N6 = BigInt("141")
		const BACMARSLPTOKENPoolkwBK6M4 = await BACMARSLPTOKENPool.new(stringaCrFmn0, stringAAsGUc1, uinto3fx8N6, {from: accounts[3]});
		const uintbT16nv = BigInt("417")
		const uintyNFuf0J = BigInt("459")
		const uint256y6DxTsr = await BACMARSLPTOKENPoolkwBK6M4.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256gYpCGW = await BACMARSLPTOKENPoolkwBK6M4.totalSupply.call({from: accounts[3]});
		const uint256tGORGGt = await BACMARSLPTOKENPoolkwBK6M4.stake.call(uintbT16nv, {from: accounts[3]});
		await BACMARSLPTOKENPoolkwBK6M4.getReward.call({from: accounts[1]});
		const uint256CfQx63P = await BACMARSLPTOKENPoolkwBK6M4.stake.call(uintyNFuf0J, {from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringWwdPRqe = "2APwl6z8myS481LoBIPCA2TqXRPvbTJlPkwq22FTAcP7ERN5kWii9qxAGb6"
		const stringE9RTy8 = "zdm0OmQEqLyUT2qOaT92OVsIbRQxCeuLOFEJJmSIyTiPHFNxTGzWG6FDd9OMWZ0ZYyqNwWHXBAnk53cW4kLGw1Y8z1F8"
		const uintpMDLmYP = BigInt("138")
		const BACMARSLPTOKENPoolUSFVPEh = await BACMARSLPTOKENPool.new(stringWwdPRqe, stringE9RTy8, uintpMDLmYP, {from: accounts[2]});
		const byteSjkWLno = "0x07180013121c0a1e191a18110f10120d080305091c01061e0d09170811141c09"
		const byteGfbK5B5 = "0x081a1f0b0c17190c030e0c1b1e0b0414021d14100d140d191007111b1211121e"
		const uintZ4yUFVt = BigInt("150")
		const uintVQHhxTj = BigInt("571")
		const uintSFhkcrW = BigInt("891")
		await BACMARSLPTOKENPoolUSFVPEh.getReward.call({from: accounts[4]});
		const uint256QONH09y = await BACMARSLPTOKENPoolUSFVPEh.getRewardForDuration.call({from: accounts[2]});
		const uint256YufWPC = await BACMARSLPTOKENPoolUSFVPEh.stakeWithPermit.call(uintSFhkcrW, uintVQHhxTj, uintZ4yUFVt, byteGfbK5B5, byteSjkWLno, {from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringEBiQdI = "HnvdX4lKcmjoyEqtBdc2PO2GPtx3aSWf"
		const string0Jet9F = "dRcW"
		const uintUpopRBZ = BigInt("25")
		const BACMARSLPTOKENPooluqM0BAA = await BACMARSLPTOKENPool.new(stringEBiQdI, string0Jet9F, uintUpopRBZ, {from: accounts[0]});
		const uintPBJZPVW = BigInt("353")
		await BACMARSLPTOKENPooluqM0BAA.onlyRewardsDistribution.call({from: accounts[5]});
		await BACMARSLPTOKENPooluqM0BAA.nonReentrant.call({from: accounts[3]});
		const uint2565j7vBC = await BACMARSLPTOKENPooluqM0BAA.withdraw.call(uintPBJZPVW, {from: accounts[3]});
		await BACMARSLPTOKENPooluqM0BAA.getReward.call({from: accounts[3]});
		const uint8s3GCPpk = await BACMARSLPTOKENPooluqM0BAA.decimals.call({from: accounts[4]});
		const stringFGUScn = await BACMARSLPTOKENPooluqM0BAA.symbol.call({from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringPr2fjiU = "wVatzG7hGEjrJsqFEaTsh5pFJpMr7l3Pb"
		const stringLYNHnhu = "YXFnKCzphEBcjGDYuUdvwwk71AXwgMhSBHcHiEbpvl6Xzsri4JedBNCVi7sxaYuS6FELui4DbRDYVOkiCreJcDb"
		const uintdVY37Z3 = BigInt("110")
		const BACMARSLPTOKENPoolHmNY6Tj = await BACMARSLPTOKENPool.new(stringPr2fjiU, stringLYNHnhu, uintdVY37Z3, {from: accounts[3]});
		const uintuHIjcXa = BigInt("1558")
		const addressTiS42QB = accounts[4]
		const addressDlsdNuN = accounts[4]
		const addressqcuJ0pS = accounts[4]
		const uint256qm9x5uK = await BACMARSLPTOKENPoolHmNY6Tj.notifyRewardAmount.call(uintuHIjcXa, {from: accounts[0]});
		const uint256Vt2ChbW = await BACMARSLPTOKENPoolHmNY6Tj.earned.call(addressTiS42QB, {from: accounts[0]});
		const uint256aBdeU9P = await BACMARSLPTOKENPoolHmNY6Tj.balanceOf.call(addressDlsdNuN, {from: accounts[4]});
		await BACMARSLPTOKENPoolHmNY6Tj.getReward.call({from: accounts[2]});
		const uint256chC2Qx3 = await BACMARSLPTOKENPoolHmNY6Tj.earned.call(addressqcuJ0pS, {from: accounts[4]});
		await BACMARSLPTOKENPoolHmNY6Tj.nonReentrant.call({from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const string7g5G1L = "65IkbRuNbV9LsRDQAkcO79GrSrQU3ozpUDncna2tPBhDAUNNGES5BpmTmkUEUsGmTC2BaSAq1LVDXvIaI"
		const stringLetOpEL = "DaFPrAVMVl4dECnyBonM4UowQof8fm6vo4HOuhRAMAqXUvwG1SusXJddy"
		const uintcU86iTa = BigInt("96")
		const BACMARSLPTOKENPoolMiSK2Xy = await BACMARSLPTOKENPool.new(string7g5G1L, stringLetOpEL, uintcU86iTa, {from: "0x0000000000000000000000000000000000000001"});
		const addressbdt22k5 = accounts[1]
		const uint256DT3ElRO = await BACMARSLPTOKENPoolMiSK2Xy.totalSupply.call({from: accounts[2]});
		const uint256fbJk4bf = await BACMARSLPTOKENPoolMiSK2Xy.getRewardForDuration.call({from: accounts[0]});
		const addressN78C00 = await BACMARSLPTOKENPoolMiSK2Xy.updateReward.call(addressbdt22k5, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringKDIOZjv = "dvDC"
		const stringdpMRIl = "WKcvfAAwLH5vkJdnI7f5RjHkXXe25KzvlQ11GEdbr5qHuWzz2EIVMNBfxHY6cvqdSO1OK2wWraAEnm3aq2kiuSI2eCza"
		const uintjCTbV5 = BigInt("217")
		const BACMARSLPTOKENPooluPzKE6i = await BACMARSLPTOKENPool.new(stringKDIOZjv, stringdpMRIl, uintjCTbV5, {from: accounts[2]});
		const addressTdarRkP = accounts[1]
		const uint256NCga9N9 = await BACMARSLPTOKENPooluPzKE6i.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256UQMhSQ = await BACMARSLPTOKENPooluPzKE6i.earned.call(addressTdarRkP, {from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringdtBPWqk = "ijnhK0fMvpR2KWQYAAAUxOk0wxu2OR4aURRhJaNVdvFQC43bxzDn5ak73BsV1NfeqGu6PlA9sDEj6YR4rDB2hgAwvgK19yk54"
		const stringdgulYK = "Fr5HaqfXiOgN9x3Vtqjo966WvdnxioM2846gZ7vj4cMQQnfiCeOSfLwjj0G3nLarkIMyOOmbFCParM85olDmRXaDjdo8pTy"
		const uintImVXT3M = BigInt("119")
		const BACMARSLPTOKENPoolOQt9oNO = await BACMARSLPTOKENPool.new(stringdtBPWqk, stringdgulYK, uintImVXT3M, {from: accounts[4]});
		const byteGrnKZ9Z = "0x09021c180b070c1a000212101f010e081e1e0f20141f1d030d191413110b010c"
		const bytelaIrgC = "0x1b071a16071d0c021a161809131c160d0a0f06061d020d0c0b1f1a0117050c0b"
		const uintPMCqHKw = BigInt("137")
		const uintmQBJrIW = BigInt("1336")
		const uintkth04G = BigInt("653")
		const byteUgJIa7Q = "0x1b141c0c10201a031918120e1a1a19151a0f0f02030f0e18061f0d171b0f0412"
		const byteEbaKNhT = "0x140a1806020d180e0e091e1a08070e1e180d042016140c030d020e0d11140d1a"
		const uintGS6cyFm = BigInt("54")
		const uintuSHicUc = BigInt("1155")
		const uintSqleus = BigInt("1874")
		const addresslwX1ujT = accounts[2]
		const uinttIOG3HQ = BigInt("837")
		const stringen4RRnN = await BACMARSLPTOKENPoolOQt9oNO.symbol.call({from: accounts[4]});
		const uint256pP510AQ = await BACMARSLPTOKENPoolOQt9oNO.stakeWithPermit.call(uintkth04G, uintmQBJrIW, uintPMCqHKw, bytelaIrgC, byteGrnKZ9Z, {from: "0x0000000000000000000000000000000000000001"});
		const uint256myoZgwv = await BACMARSLPTOKENPoolOQt9oNO.stakeWithPermit.call(uintSqleus, uintuSHicUc, uintGS6cyFm, byteEbaKNhT, byteUgJIa7Q, {from: accounts[4]});
		const uint256tiOYTCz = await BACMARSLPTOKENPoolOQt9oNO.earned.call(addresslwX1ujT, {from: accounts[1]});
		const uint256aP4t2Px = await BACMARSLPTOKENPoolOQt9oNO.notifyRewardAmount.call(uinttIOG3HQ, {from: accounts[3]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringrJVVaMR = "2bPdZmQvzlOMNU9GyB6G6DlESp3wYDZchS4D7xInLAH14wKMUc3rKkmGlnCuf7bcZui9dDffmawnnCmsrXyN61CzWoyPxLq19qQ"
		const stringJQoHD03 = "1PhBVk0Wqi9k127yUpPc7G8Sy71TF5EW83W6BPLpQK9grXvpwpMAmoU6FAVrzrM"
		const uintPyiZ0TD = BigInt("34")
		const BACMARSLPTOKENPoolCmtD6Qm = await BACMARSLPTOKENPool.new(stringrJVVaMR, stringJQoHD03, uintPyiZ0TD, {from: accounts[3]});
		const addressBkrA7ZA = accounts[0]
		const uintExEorSR = BigInt("1716")
		const addresstT0vsqs = accounts[4]
		const uinteRR9gCp = BigInt("1883")
		const uint256jwS26ny = await BACMARSLPTOKENPoolCmtD6Qm.balanceOf.call(addressBkrA7ZA, {from: accounts[4]});
		await BACMARSLPTOKENPoolCmtD6Qm.getReward.call({from: accounts[4]});
		const uint256DgtXfdD = await BACMARSLPTOKENPoolCmtD6Qm.notifyRewardAmount.call(uintExEorSR, {from: accounts[0]});
		const uint256XqM3IQ7 = await BACMARSLPTOKENPoolCmtD6Qm.balanceOf.call(addresstT0vsqs, {from: accounts[3]});
		const uint256AJhekS4 = await BACMARSLPTOKENPoolCmtD6Qm.rewardPerToken.call({from: accounts[5]});
		const uint256AeA3Zfh = await BACMARSLPTOKENPoolCmtD6Qm.withdraw.call(uinteRR9gCp, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringSX6sQLI = "675haGqVvvvHo2Lj3mjMM8gzicnkOnLMFOPCXJG3tj7zeu1VrNrtDwbccUN6BbJgNEi1"
		const stringVieZ1l = "Rl41AaT9uq4xS6XJ3wryt3anNZSvxKid9ReGIsrNolTPo7rB4YWoIYIkJz42gB5fHMlzUfdVmxn5CnsCrpz6ambThiUYQJd"
		const uint3HrTMT = BigInt("51")
		const BACMARSLPTOKENPoolR4ZvqsH = await BACMARSLPTOKENPool.new(stringSX6sQLI, stringVieZ1l, uint3HrTMT, {from: accounts[4]});
		const uintkOtjBov = BigInt("1363")
		await BACMARSLPTOKENPoolR4ZvqsH.exit.call({from: accounts[0]});
		const uint256SpvBgCJ = await BACMARSLPTOKENPoolR4ZvqsH.notifyRewardAmount.call(uintkOtjBov, {from: accounts[2]});
		const uint8MeiGFev = await BACMARSLPTOKENPoolR4ZvqsH.decimals.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJJUnkV4 = "GDHFtaRdgrszIya1GpLSjCgTPx4Rvklk91zbgpmTJa1fplx2P2WWD92nbenXnwvpwAgFuqrM3GEbcGOSjUPW4PVL"
		const stringCCJDdHf = "7vmtiZza9sQGqA9UsWu9IshfRbNTBfjiMYw4jROnu6QdmSJU6L8IpuvCsw2rXMQorRJWxwVLC"
		const uintzjOqVLf = BigInt("195")
		const BACMARSLPTOKENPoolmNN5UUh = await BACMARSLPTOKENPool.new(stringJJUnkV4, stringCCJDdHf, uintzjOqVLf, {from: accounts[4]});
		const bytenhJQQqW = "0x0e12101708121215121c110d1c0f061b171b1005131c0e151a0d1f0a1f050619"
		const bytev9tUDJ8 = "0x0d070a1b0e1e0b140b010c1f1b121812060b09070a08010b1517101213042004"
		const uintYD3v3st = BigInt("61")
		const uinteneDY8Z = BigInt("1906")
		const uintpxiyVZa = BigInt("365")
		const byteCdXHwqr = "0x09050e13141e1d06130f01050d17110e170d1e1c0801171e13181f1f070a1813"
		const byteWIBzYqW = "0x0911120c150b0c02181f1b09000c0e051c160e180d04081117010c05071a040d"
		const uintcOxctKp = BigInt("183")
		const uintnXfoqi5 = BigInt("1119")
		const uintVaT5mkc = BigInt("2035")
		const stringEJTcB4Y = await BACMARSLPTOKENPoolmNN5UUh.name.call({from: accounts[2]});
		const uint256XfFSZFP = await BACMARSLPTOKENPoolmNN5UUh.stakeWithPermit.call(uintpxiyVZa, uinteneDY8Z, uintYD3v3st, bytev9tUDJ8, bytenhJQQqW, {from: accounts[4]});
		const uint256ycfXEh4 = await BACMARSLPTOKENPoolmNN5UUh.stakeWithPermit.call(uintVaT5mkc, uintnXfoqi5, uintcOxctKp, byteWIBzYqW, byteCdXHwqr, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringQlBgCT = "yZXuN9dXsoDk0xNMOSUKc4UkEClxonOQ4WBjKSelE4KqR6uvMIhqmIe"
		const stringPCiOIZ = "fVTvtEqeaTRzp63ywnmN3MhheMXvxYxAXROEGvDZ4YMKx5vYy5Xm9C9WpQVgrRvT"
		const uintmyUeKNX = BigInt("222")
		const BACMARSLPTOKENPoolcP0ZXkJ = await BACMARSLPTOKENPool.new(stringQlBgCT, stringPCiOIZ, uintmyUeKNX, {from: accounts[3]});
		const addressoVrmBeP = accounts[5]
		const addressR9ls37A = accounts[1]
		const uint256e7BKZp = await BACMARSLPTOKENPoolcP0ZXkJ.balanceOf.call(addressoVrmBeP, {from: accounts[2]});
		const uint256PpCGPG5 = await BACMARSLPTOKENPoolcP0ZXkJ.balanceOf.call(addressR9ls37A, {from: accounts[3]});
		await BACMARSLPTOKENPoolcP0ZXkJ.nonReentrant.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringP8RW5gq = "eKONEjzxlnF4ftK3LX2HFEOtlV"
		const stringPo4FfkG = "02djDNcfNe3hicBh77EtX3xvCYrsMMGzaiHGF8dab"
		const uintCplB770 = BigInt("30")
		const BACMARSLPTOKENPoolOxTv6OH = await BACMARSLPTOKENPool.new(stringP8RW5gq, stringPo4FfkG, uintCplB770, {from: accounts[0]});
		const uintXW1inwr = BigInt("40")
		const byteNs8g8Yy = "0x13101f1401110312060b011f171f031b08070d071c140f1e141a050016181505"
		const bytenKPDBT7 = "0x1e02091d1f0712011703140714130f191f040920150c0b170a041d190f15030e"
		const uinteP3UXU6 = BigInt("159")
		const uinta12FmRx = BigInt("1461")
		const uintm9qvJhA = BigInt("1126")
		const stringfsLAe8K = await BACMARSLPTOKENPoolOxTv6OH.name.call({from: accounts[4]});
		const uint256CCbdNWa = await BACMARSLPTOKENPoolOxTv6OH.notifyRewardAmount.call(uintXW1inwr, {from: accounts[2]});
		const uint256h2SDyN8 = await BACMARSLPTOKENPoolOxTv6OH.stakeWithPermit.call(uintm9qvJhA, uinta12FmRx, uinteP3UXU6, bytenKPDBT7, byteNs8g8Yy, {from: accounts[2]});
		const uint256F3eEYOD = await BACMARSLPTOKENPoolOxTv6OH.totalSupply.call({from: accounts[0]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringG4yvsAr = "w"
		const stringEB3td9B = "0nSfNAOLnXEGqSnk8IbS0UyWOFaXnM63L24F4YHuKHoA0HDK5auaTsl15iYiQ0P8VXQAvkSHVgqbXAoZxphoW"
		const uintQRuMPL1 = BigInt("184")
		const BACMARSLPTOKENPoolegBmJDb = await BACMARSLPTOKENPool.new(stringG4yvsAr, stringEB3td9B, uintQRuMPL1, {from: accounts[3]});
		await BACMARSLPTOKENPoolegBmJDb.exit.call({from: accounts[0]});
		await BACMARSLPTOKENPoolegBmJDb.exit.call({from: accounts[4]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringJaaDJS4 = "WbrPKMIlGXivNYOVf7oGtYUhtsJy981JVaw7Dxo4gtibbA2lp27slCittwpwSTR4vEpSqMR4GtLrw0JcuNdeAKuK2h"
		const stringgu0IpYb = "mm68X2SLlNlbc5H7Rdn7Wc6r8rDKT9hKkA5jzU8urJ459w3WuNoWciyg3bVn4Slg24UpYnJzX6F5zopGSVGKgCGDc0"
		const uintocVGqB2 = BigInt("66")
		const BACMARSLPTOKENPoolyhLqRA2 = await BACMARSLPTOKENPool.new(stringJaaDJS4, stringgu0IpYb, uintocVGqB2, {from: "0x0000000000000000000000000000000000000001"});
		const uintIKLsoqO = BigInt("710")
		const uintQVYPC2P = BigInt("1966")
		const uint256z7BcoTZ = await BACMARSLPTOKENPoolyhLqRA2.withdraw.call(uintIKLsoqO, {from: accounts[4]});
		const uint256XkM76nq = await BACMARSLPTOKENPoolyhLqRA2.rewardPerToken.call({from: accounts[4]});
		const uint256Bv6lB6 = await BACMARSLPTOKENPoolyhLqRA2.notifyRewardAmount.call(uintQVYPC2P, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringgPIyB8o = "R5Ih4DxmucEvQouj984Wi1wMcmHTujkpji4Waujs9BpV"
		const stringtZeKovu = "CbP7xW5zYp4jGQb8OgJ8I4NaOlXExPJGD1wrTOfg4Ldv1suV6vDBSgz5sVK12OjTMU6rUVfizbRMq4c"
		const uintjWfX4r = BigInt("136")
		const BACMARSLPTOKENPoolssxGvJM = await BACMARSLPTOKENPool.new(stringgPIyB8o, stringtZeKovu, uintjWfX4r, {from: accounts[2]});
		const addressgU5tBhn = accounts[2]
		const uintMhZyTUK = BigInt("589")
		const uint256rYbgW4 = await BACMARSLPTOKENPoolssxGvJM.earned.call(addressgU5tBhn, {from: accounts[2]});
		const uint256raZUTCP = await BACMARSLPTOKENPoolssxGvJM.notifyRewardAmount.call(uintMhZyTUK, {from: accounts[2]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringoDbXZSq = "B4YouuW7QmaUyhW2zKDS2JwD"
		const stringT0jEAIF = "WkEMUime9dCTVgY"
		const uint72Ebfv = BigInt("125")
		const BACMARSLPTOKENPoolT2FXXgh = await BACMARSLPTOKENPool.new(stringoDbXZSq, stringT0jEAIF, uint72Ebfv, {from: accounts[3]});
		const uintqa78pYo = BigInt("1267")
		const uintuCoipT0 = BigInt("1747")
		const uint256t3mHHlk = await BACMARSLPTOKENPoolT2FXXgh.getRewardForDuration.call({from: accounts[0]});
		const uint256tYkprHq = await BACMARSLPTOKENPoolT2FXXgh.withdraw.call(uintqa78pYo, {from: accounts[4]});
		const uint256enNYDS1 = await BACMARSLPTOKENPoolT2FXXgh.stake.call(uintuCoipT0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256EtxPwSk = await BACMARSLPTOKENPoolT2FXXgh.totalSupply.call({from: accounts[2]});
		const uint256XhCR74 = await BACMARSLPTOKENPoolT2FXXgh.lastTimeRewardApplicable.call({from: accounts[1]});
	});

	it('test for BACMARSLPTOKENPool', async () => {
		const stringazSmX8v = "PkrFLBXUoevQytpOO7HPwPYtUoexkA0CXBYcRbPZZp"
		const stringCgR043J = "kaWch241AN86M9InhzDrzOX2Gy2RTGNu8Rp1mWcq3oPGmW10123ExvQsWo"
		const uintHPd1GDe = BigInt("149")
		const BACMARSLPTOKENPoolC23nqrt = await BACMARSLPTOKENPool.new(stringazSmX8v, stringCgR043J, uintHPd1GDe, {from: accounts[0]});
		const addressE8IVo9A = accounts[0]
		const uintTPosqEm = BigInt("970")
		const uint256LOWj7Cs = await BACMARSLPTOKENPoolC23nqrt.earned.call(addressE8IVo9A, {from: accounts[5]});
		const uint8gP7td5w = await BACMARSLPTOKENPoolC23nqrt.decimals.call({from: accounts[2]});
		const uint256xdo3zTv = await BACMARSLPTOKENPoolC23nqrt.stake.call(uintTPosqEm, {from: accounts[4]});
	});
})