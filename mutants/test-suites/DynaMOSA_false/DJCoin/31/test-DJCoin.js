const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinA2Nm7Gv = await DJCoin.new({from: accounts[4]});
		const addressTsDNsI = accounts[2]
		const addressulfMLKL = accounts[4]
		const addressYnxI8y1 = accounts[0]
//		const addressgZt09Xs = await DJCoinA2Nm7Gv.validRecipient.call(addressTsDNsI, {from: accounts[1]});
//		const uint256ogTkgpV = await DJCoinA2Nm7Gv.allowance.call(addressYnxI8y1, addressulfMLKL, {from: accounts[4]});
//		const uint256bytUrkb = await DJCoinA2Nm7Gv.totalSupply.call({from: accounts[0]});

		await expect(DJCoinA2Nm7Gv.validRecipient.call(addressTsDNsI, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinCeVPze5 = await DJCoin.new({from: accounts[3]});
		const addressfG3yZI3 = accounts[4]
		const addresslHoKuDk = "0x0000000000000000000000000000000000000001"
		const addressdtutyLM = accounts[0]
		const uintr0OEZMX = BigInt("78")
		const addressmwhyhZ9 = "0x0000000000000000000000000000000000000001"
		const uintvKW2geH = BigInt("681")
		const addresstJcQ9I = accounts[2]
		const uint256gjcbK3o = await DJCoinCeVPze5.allowance.call(addresslHoKuDk, addressfG3yZI3, {from: accounts[2]});
		const uint256tvl7DBX = await DJCoinCeVPze5.balanceOf.call(addressdtutyLM, {from: accounts[5]});
		const bool9HtM38 = await DJCoinCeVPze5.decreaseAllowance.call(addressmwhyhZ9, uintr0OEZMX, {from: accounts[3]});
//		await DJCoinCeVPze5.onlyOwner.call({from: accounts[3]});
//		const boolrrg6Gh = await DJCoinCeVPze5.decreaseAllowance.call(addresstJcQ9I, uintvKW2geH, {from: accounts[3]});

		assert.equal(bool9HtM38, true)
		assert.equal(uint256gjcbK3o, BigInt("0"))
		assert.equal(uint256tvl7DBX, BigInt("0"))
		await expect(DJCoinCeVPze5.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinVf1VX0O = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const addressHBqiPE = accounts[4]
		const addressp1UlPNO = accounts[4]
		const addressRKgzQVo = accounts[3]
		const addressJdQYzWb = "0x0000000000000000000000000000000000000001"
		const addresstaET4yy = accounts[3]
		const uint256qdBjGtD = await DJCoinVf1VX0O.allowance.call(addressp1UlPNO, addressHBqiPE, {from: accounts[1]});
		const addressezlfS1X = await DJCoinVf1VX0O.owner.call({from: accounts[0]});
		await DJCoinVf1VX0O.onlyOwner.call({from: accounts[1]});
		const addressihr8ZDF = await DJCoinVf1VX0O.validRecipient.call(addressRKgzQVo, {from: accounts[3]});
		const uint256TqXF4nt = await DJCoinVf1VX0O.allowance.call(addresstaET4yy, addressJdQYzWb, {from: accounts[3]});
	});

	it('test for DJCoin', async () => {
		const DJCoinXAiJN0Q = await DJCoin.new({from: accounts[5]});
		const addressKoPJi4z = accounts[2]
		const uinte7wcluj = BigInt("1241")
		const addressgP5mDZO = accounts[5]
		const uint256Ko4hT5Z = await DJCoinXAiJN0Q.balanceOf.call(addressKoPJi4z, {from: "0x0000000000000000000000000000000000000001"});
//		const boolBPecTbh = await DJCoinXAiJN0Q.transfer.call(addressgP5mDZO, uinte7wcluj, {from: accounts[0]});

		assert.equal(uint256Ko4hT5Z, BigInt("0"))
		await expect(DJCoinXAiJN0Q.transfer.call(addressgP5mDZO, uinte7wcluj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinoev751Q = await DJCoin.new({from: accounts[1]});
		const uintq6osBRX = BigInt("24")
		const addressttBAIGT = accounts[3]
		const uintzo9P0Wq = BigInt("2031")
		const addressrzMAfQA = accounts[2]
		const uintFJlWRMk = BigInt("1087")
		const addresss9xE61w = accounts[4]
		const uintjXuVKKE = BigInt("1021")
		const uintz4NAlZ = BigInt("1254")
		const boolJrQynjj = await DJCoinoev751Q.approve.call(addressttBAIGT, uintq6osBRX, {from: accounts[1]});
//		const boolxyCHjbn = await DJCoinoev751Q.transfer.call(addressrzMAfQA, uintzo9P0Wq, {from: accounts[3]});
//		const uint256V2pYTx = await DJCoinoev751Q.totalSupply.call({from: accounts[1]});
//		const boolT3uTgKV = await DJCoinoev751Q.transfer.call(addresss9xE61w, uintFJlWRMk, {from: accounts[4]});
//		const uint256RJJdqF = await DJCoinoev751Q.burn.call(uintz4NAlZ, uintjXuVKKE, {from: accounts[1]});

		assert.equal(boolJrQynjj, true)
		await expect(DJCoinoev751Q.transfer.call(addressrzMAfQA, uintzo9P0Wq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinVtlA1zq = await DJCoin.new({from: accounts[0]});
		const uintC2vtCb6 = BigInt("105")
		const addressXyVgp3j = accounts[0]
		const addressjnywCAa = accounts[1]
//		await DJCoinVtlA1zq.renounceOwnership.call({from: accounts[1]});
//		await DJCoinVtlA1zq.onlyOwner.call({from: accounts[1]});
//		const boolFKpvvcL = await DJCoinVtlA1zq.decreaseAllowance.call(addressXyVgp3j, uintC2vtCb6, {from: accounts[3]});
//		const addressrs89CX6 = await DJCoinVtlA1zq.validRecipient.call(addressjnywCAa, {from: accounts[3]});

		await expect(DJCoinVtlA1zq.renounceOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinzMBBnWv = await DJCoin.new({from: accounts[0]});
		const uintJKTm96Q = BigInt("1270")
		const uintaZRJyAW = BigInt("721")
		const addresscz3KMHq = "0x0000000000000000000000000000000000000001"
		const addressCaQnYBL = accounts[3]
		const uint256lL8OKg7 = await DJCoinzMBBnWv.burn.call(uintaZRJyAW, uintJKTm96Q, {from: accounts[0]});
//		const addressd1XcyB5 = await DJCoinzMBBnWv.validRecipient.call(addresscz3KMHq, {from: accounts[4]});
//		const uint256PHknrwO = await DJCoinzMBBnWv.balanceOf.call(addressCaQnYBL, {from: accounts[5]});

		assert.equal(uint256lL8OKg7, BigInt("1833300000000"))
		await expect(DJCoinzMBBnWv.validRecipient.call(addresscz3KMHq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinRJatAqa = await DJCoin.new({from: accounts[3]});
		const uintNUPrAqB = BigInt("1960")
		const addressOeKr0gd = accounts[4]
		const addressm8jYMuP = accounts[4]
		const uintv6H3mH = BigInt("913")
		const addressYnf90DV = accounts[4]
		const uintLlcXp7w = BigInt("421")
		const uintG3vsTjM = BigInt("1910")
		const boolkOuIsSb = await DJCoinRJatAqa.approve.call(addressOeKr0gd, uintNUPrAqB, {from: accounts[4]});
		const addressWR131xi = await DJCoinRJatAqa.transferOwnership.call(addressm8jYMuP, {from: accounts[3]});
//		const boolYSP4kHA = await DJCoinRJatAqa.transfer.call(addressYnf90DV, uintv6H3mH, {from: accounts[2]});
//		const uint256I12lCU6 = await DJCoinRJatAqa.totalSupply.call({from: accounts[0]});
//		const uint256O8mzr7T = await DJCoinRJatAqa.burn.call(uintG3vsTjM, uintLlcXp7w, {from: accounts[0]});

		assert.equal(boolkOuIsSb, true)
		await expect(DJCoinRJatAqa.transfer.call(addressYnf90DV, uintv6H3mH, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinRJatAqa = await DJCoin.new({from: accounts[3]});
		const uintHAU063n = BigInt("1960")
		const addresskY3iBr = accounts[4]
		const addressmBrhvA6 = accounts[4]
		const uintz8Bxni4 = BigInt("421")
		const uintBgZRnxE = BigInt("1910")
		const uintKYaMmM = BigInt("1854")
		const uintg6O3j3z = BigInt("1233")
		const boolkOuIsSb = await DJCoinRJatAqa.approve.call(addresskY3iBr, uintHAU063n, {from: accounts[4]});
		const addressWR131xi = await DJCoinRJatAqa.transferOwnership.call(addressmBrhvA6, {from: accounts[3]});
		const uint256I12lCU6 = await DJCoinRJatAqa.totalSupply.call({from: accounts[0]});
//		const uint256O8mzr7T = await DJCoinRJatAqa.burn.call(uintBgZRnxE, uintz8Bxni4, {from: accounts[0]});
//		const uint256WSxChmv = await DJCoinRJatAqa.burn.call(uintg6O3j3z, uintKYaMmM, {from: accounts[0]});

		assert.equal(boolkOuIsSb, true)
		assert.equal(uint256I12lCU6, BigInt("2100000000000"))
		await expect(DJCoinRJatAqa.burn.call(uintBgZRnxE, uintz8Bxni4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinzMBBnWv = await DJCoin.new({from: accounts[0]});
		const uintbT80GDO = BigInt("1242")
		const uintkJKeBn = BigInt("721")
		const addressFSInp6Z = "0x0000000000000000000000000000000000000001"
		const addressKUwLP0U = accounts[3]
		const uint256lL8OKg7 = await DJCoinzMBBnWv.burn.call(uintkJKeBn, uintbT80GDO, {from: accounts[0]});
		const addressqoux24s = await DJCoinzMBBnWv.owner.call({from: accounts[3]});
//		const addressd1XcyB5 = await DJCoinzMBBnWv.validRecipient.call(addressFSInp6Z, {from: accounts[4]});
//		const uint256PHknrwO = await DJCoinzMBBnWv.balanceOf.call(addressKUwLP0U, {from: accounts[5]});

		assert.equal(addressqoux24s, 0xB153aC8Ea94b00b6E3392B55553A6C291aaAB0C9)
		assert.equal(uint256lL8OKg7, BigInt("1839180000000"))
		await expect(DJCoinzMBBnWv.validRecipient.call(addressFSInp6Z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinXAiJN0Q = await DJCoin.new({from: accounts[5]});
		const addressVWq2JFQ = accounts[4]
		const uintod6CFJD = BigInt("29")
		const addressE5mgpdM = accounts[0]
		const uintXzoXUhN = BigInt("1241")
		const addressGCmMV5D = accounts[5]
		const uint256Ko4hT5Z = await DJCoinXAiJN0Q.balanceOf.call(addressVWq2JFQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolA3zuGPq = await DJCoinXAiJN0Q.increaseAllowance.call(addressE5mgpdM, uintod6CFJD, {from: accounts[5]});
//		const boolBPecTbh = await DJCoinXAiJN0Q.transfer.call(addressGCmMV5D, uintXzoXUhN, {from: accounts[0]});

		assert.equal(boolA3zuGPq, true)
		assert.equal(uint256Ko4hT5Z, BigInt("0"))
		await expect(DJCoinXAiJN0Q.transfer.call(addressGCmMV5D, uintXzoXUhN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinMgcm89E = await DJCoin.new({from: accounts[1]});
		const uintzXo5P4p = BigInt("1785")
		const address2xou3B = accounts[4]
		const uintDluQ81E = BigInt("1670")
		const addressBRIteux = accounts[1]
		const uintLVWGcVT = BigInt("5")
		const addressbCdRCJD = accounts[2]
		const uintkXARca5 = BigInt("1940")
		const addressBM3Mxwy = accounts[2]
		const uintlN21R2Z = BigInt("270")
		const addressS38YpZm = accounts[4]
		const addressf5HbZHV = accounts[1]
		const uintGdfaZ8B = BigInt("568")
		const addressbBDGamG = accounts[2]
		const boolUfxqSwH = await DJCoinMgcm89E.decreaseAllowance.call(address2xou3B, uintzXo5P4p, {from: accounts[4]});
		const boolRpURvh = await DJCoinMgcm89E.decreaseAllowance.call(addressBRIteux, uintDluQ81E, {from: accounts[2]});
		const boolz5F2TEX = await DJCoinMgcm89E.decreaseAllowance.call(addressbCdRCJD, uintLVWGcVT, {from: accounts[0]});
		const boolnE7ICfL = await DJCoinMgcm89E.approve.call(addressBM3Mxwy, uintkXARca5, {from: accounts[4]});
		const boolz1n3TA3 = await DJCoinMgcm89E.changetokensPerBlock.call(uintlN21R2Z, {from: accounts[2]});
		const uint256NhS5ULs = await DJCoinMgcm89E.allowance.call(addressf5HbZHV, addressS38YpZm, {from: accounts[4]});
		const addresseTwtBsI = await DJCoinMgcm89E.owner.call({from: accounts[4]});
//		const boolKOzOr12 = await DJCoinMgcm89E.transfer.call(addressbBDGamG, uintGdfaZ8B, {from: accounts[2]});
//		const uint256TzbDVSC = await DJCoinMgcm89E.totalSupply.call({from: accounts[1]});

		assert.equal(addresseTwtBsI, 0xb3BD7e2D48EF7463774D1654CD0e5Db0C83BcEf3)
		assert.equal(boolRpURvh, true)
		assert.equal(boolUfxqSwH, true)
		assert.equal(boolnE7ICfL, true)
		assert.equal(boolz1n3TA3, true)
		assert.equal(boolz5F2TEX, true)
		assert.equal(uint256NhS5ULs, BigInt("0"))
		await expect(DJCoinMgcm89E.transfer.call(addressbBDGamG, uintGdfaZ8B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinMgcm89E = await DJCoin.new({from: accounts[1]});
		const uintKfPY2Tz = BigInt("1794")
		const addressxktA9sZ = accounts[4]
		const uintECb7LPN = BigInt("5")
		const addressRBHwzaa = accounts[2]
		const addressfjAwRj = accounts[4]
		const uintrfcnSxM = BigInt("1491")
		const addressqJ0bgg7 = accounts[1]
		const addressdFk200u = accounts[3]
		const uintbEkKYHD = BigInt("1940")
		const addressSnlPPrL = accounts[2]
		const uintBQSAGAy = BigInt("287")
		const addressv08dKtQ = accounts[3]
		const uintwF5dsQQ = BigInt("568")
		const addresszisasxz = accounts[2]
		const boolUfxqSwH = await DJCoinMgcm89E.decreaseAllowance.call(addressxktA9sZ, uintKfPY2Tz, {from: accounts[4]});
		const boolz5F2TEX = await DJCoinMgcm89E.decreaseAllowance.call(addressRBHwzaa, uintECb7LPN, {from: accounts[0]});
		const uint256OlJDjix = await DJCoinMgcm89E.balanceOf.call(addressfjAwRj, {from: "0x0000000000000000000000000000000000000001"});
//		const boollU8f2f = await DJCoinMgcm89E.transferFrom.call(addressdFk200u, addressqJ0bgg7, uintrfcnSxM, {from: accounts[2]});
//		const boolnE7ICfL = await DJCoinMgcm89E.approve.call(addressSnlPPrL, uintbEkKYHD, {from: accounts[4]});
//		const addresseTwtBsI = await DJCoinMgcm89E.owner.call({from: accounts[4]});
//		const boolDSl5aEe = await DJCoinMgcm89E.transfer.call(addressv08dKtQ, uintBQSAGAy, {from: accounts[2]});
//		const boolKOzOr12 = await DJCoinMgcm89E.transfer.call(addresszisasxz, uintwF5dsQQ, {from: accounts[2]});
//		const uint256TzbDVSC = await DJCoinMgcm89E.totalSupply.call({from: accounts[1]});

		assert.equal(boolUfxqSwH, true)
		assert.equal(boolz5F2TEX, true)
		assert.equal(uint256OlJDjix, BigInt("0"))
		await expect(DJCoinMgcm89E.transferFrom.call(addressdFk200u, addressqJ0bgg7, uintrfcnSxM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinbR5NKHz = await DJCoin.new({from: accounts[2]});
		const uintjxgKv7v = BigInt("608")
		const addressRZvIZNN = accounts[1]
		const addressVOxm38O = accounts[1]
//		await DJCoinbR5NKHz.renounceOwnership.call({from: accounts[2]});
//		await DJCoinbR5NKHz.onlyOwner.call({from: accounts[3]});
//		const booliAxkLv9 = await DJCoinbR5NKHz.changetokensPerBlock.call(uintjxgKv7v, {from: accounts[2]});
//		const addressVCDZWV6 = await DJCoinbR5NKHz.transferOwnership.call(addressRZvIZNN, {from: accounts[1]});
//		const addressnoMusEk = await DJCoinbR5NKHz.transferOwnership.call(addressVOxm38O, {from: accounts[0]});

		await expect(DJCoinbR5NKHz.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinMgcm89E = await DJCoin.new({from: accounts[1]});
		const uintNBHaSyc = BigInt("1785")
		const addressSHdiWPH = accounts[4]
		const uintEDCGwzu = BigInt("0")
		const addressRjvQ2Ww = accounts[2]
		const addressjUHROBN = accounts[0]
		const uintsST6G3 = BigInt("270")
		const addressrDJHkuW = accounts[4]
		const uintB2QciWi = BigInt("568")
		const addresscWu6tka = accounts[2]
		const uintBeLhMC = BigInt("1801")
		const addressUsIbjsl = accounts[2]
		const boolUfxqSwH = await DJCoinMgcm89E.decreaseAllowance.call(addressSHdiWPH, uintNBHaSyc, {from: accounts[4]});
		const booljdY8wcT = await DJCoinMgcm89E.transfer.call(addressRjvQ2Ww, uintEDCGwzu, {from: accounts[4]});
		const uint2569edROC = await DJCoinMgcm89E.balanceOf.call(addressjUHROBN, {from: accounts[4]});
//		const boolDSl5aEe = await DJCoinMgcm89E.transfer.call(addressrDJHkuW, uintsST6G3, {from: accounts[2]});
//		const boolKOzOr12 = await DJCoinMgcm89E.transfer.call(addresscWu6tka, uintB2QciWi, {from: accounts[2]});
//		const boolsGOldQB = await DJCoinMgcm89E.decreaseAllowance.call(addressUsIbjsl, uintBeLhMC, {from: accounts[2]});
//		await DJCoinMgcm89E.onlyOwner.call({from: accounts[2]});
//		const uint256TzbDVSC = await DJCoinMgcm89E.totalSupply.call({from: accounts[1]});

		assert.equal(boolUfxqSwH, true)
		assert.equal(booljdY8wcT, true)
		assert.equal(uint2569edROC, BigInt("0"))
		await expect(DJCoinMgcm89E.transfer.call(addressrDJHkuW, uintsST6G3, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})