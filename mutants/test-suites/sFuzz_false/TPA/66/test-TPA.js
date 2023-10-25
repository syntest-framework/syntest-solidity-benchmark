const TPA = artifacts.require("TPA");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TPA', (accounts) => {
	it('test for TPA', async () => {
		const TPAKDTxNwP = await TPA.new({from: accounts[1]});
		const uintrM3CIeW = BigInt("808")
		const addressxi6sasG = accounts[3]
		const addressGBbwhtA = accounts[2]
		const addresscBASN1 = accounts[1]
		const uintqJtV8qE = BigInt("812")
		const addressYj2IHUI = accounts[0]
//		const boolYbfWV5J = await TPAKDTxNwP.transfer.call(addressxi6sasG, uintrM3CIeW, {from: accounts[2]});
//		const uint256qXDagr = await TPAKDTxNwP.balanceOf.call(addressGBbwhtA, {from: accounts[1]});
//		await TPAKDTxNwP.onlyOwner.call({from: accounts[3]});
//		const addressPeMdMmn = await TPAKDTxNwP.removeAdmin.call(addresscBASN1, {from: accounts[4]});
//		await TPAKDTxNwP.whenPaused.call({from: accounts[5]});
//		const booljqG1g1U = await TPAKDTxNwP.unlock.call(addressYj2IHUI, uintqJtV8qE, {from: accounts[0]});

		await expect(TPAKDTxNwP.transfer.call(addressxi6sasG, uintrM3CIeW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACnZbDaO = await TPA.new({from: accounts[2]});
		const addressaKBRPAv = accounts[4]
		const uintmCHU2py = BigInt("814")
		const addressfg207lm = accounts[5]
//		const boolXSMznsF = await TPACnZbDaO.unfreezeAccount.call(addressaKBRPAv, {from: accounts[3]});
//		const boolDC7UVJF = await TPACnZbDaO.transfer.call(addressfg207lm, uintmCHU2py, {from: accounts[1]});
//		await TPACnZbDaO.whenPaused.call({from: accounts[4]});

		await expect(TPACnZbDaO.unfreezeAccount.call(addressaKBRPAv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const stringnKrcRZQ = "OI4yfPPQuIEnxcOo1Ie1i4BFUfWR3jL4upts7IybrrC0upHj24V2Tinxzx7I5kX0fYr9"
		const stringyYZcH8g = "yPWtqffoIlyqDN9SDyDP5xLXOkvxmrpBO425cWl47VXqvxLtNGxpCs2WwTvJPSWg4kFb95Erw6WnPExJQtG876IexW8iI63gYiy"
		const uintvdSTcdn = BigInt("5")
		const TPASlTJRZP = await TPA.new(stringnKrcRZQ, stringyYZcH8g, uintvdSTcdn, {from: "0x0000000000000000000000000000000000000001"});
		const addressB3nKBm8 = accounts[1]
		const addressZKBY95 = accounts[1]
		const addressuUSIIqB = accounts[0]
		const uintqKbpptW = BigInt("687")
		const addressXJqp7H1 = accounts[1]
		const boolUnOTARh = await TPASlTJRZP.isOwner.call(addressB3nKBm8, {from: accounts[5]});
		const boolsFsMo0X = await TPASlTJRZP.unfreezeAccount.call(addressZKBY95, {from: accounts[0]});
		const boolLiqCjeE = await TPASlTJRZP.isAdmin.call(addressuUSIIqB, {from: accounts[4]});
		const boolnP3Vk0P = await TPASlTJRZP.transfer.call(addressXJqp7H1, uintqKbpptW, {from: accounts[5]});
	});

	it('test for TPA', async () => {
		const TPADIfNB63 = await TPA.new({from: "0x0000000000000000000000000000000000000001"});
		const uintBTfy7Y = BigInt("335")
		const addressoFMkogc = accounts[2]
		const addressW9Wh7Kg = accounts[2]
		const addressW7LKvmX = accounts[0]
		const addressTShlf2J = accounts[1]
		await TPADIfNB63.onlyAdmin.call({from: accounts[5]});
		const boolZzlkDt = await TPADIfNB63.transferFrom.call(addressW9Wh7Kg, addressoFMkogc, uintBTfy7Y, {from: "0x0000000000000000000000000000000000000001"});
		await TPADIfNB63.renounceAdmin.call({from: accounts[1]});
		const addressPEqLEm = await TPADIfNB63.transferOwnership.call(addressW7LKvmX, {from: accounts[1]});
		const boolAdkrKm3 = await TPADIfNB63.isAdmin.call(addressTShlf2J, {from: accounts[1]});
		const uint256Hq8jiFp = await TPADIfNB63.totalSupply.call({from: accounts[4]});
	});

	it('test for TPA', async () => {
		const TPAD5R1X69 = await TPA.new({from: accounts[1]});
		const uintXEhSuAt = BigInt("1948")
		const addressUMV3ZH = "0x0000000000000000000000000000000000000001"
		const addressFfSR3OY = accounts[0]
		const uinty3MtXj3 = BigInt("826")
//		const addressqTLSMKg = await TPAD5R1X69.burnFrom.call(addressUMV3ZH, uintXEhSuAt, {from: accounts[5]});
//		await TPAD5R1X69.renounceAdmin.call({from: accounts[1]});
//		const addresspyPJYMR = await TPAD5R1X69.notFrozen.call(addressFfSR3OY, {from: accounts[0]});
//		const uint256hZw8a3 = await TPAD5R1X69.burn.call(uinty3MtXj3, {from: accounts[4]});

		await expect(TPAD5R1X69.burnFrom.call(addressUMV3ZH, uintXEhSuAt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAWwzvSN5 = await TPA.new({from: accounts[2]});
		const uintFuuomZd = BigInt("416")
//		const uint256zcn2lHb = await TPAWwzvSN5.burn.call(uintFuuomZd, {from: accounts[3]});
//		const stringS5zDJkf = await TPAWwzvSN5.name.call({from: accounts[3]});

		await expect(TPAWwzvSN5.burn.call(uintFuuomZd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAKDTxNwP = await TPA.new({from: accounts[1]});
		const addressNEjheMP = accounts[4]
		const uintVXenRfm = BigInt("808")
		const addressRUrvFFV = accounts[3]
		const addressaJgLsTV = accounts[2]
		const addressasDF3pd = accounts[2]
		const uintLnmPMQ3 = BigInt("812")
		const addressOgCHcDP = accounts[0]
//		const boolIAf8JXx = await TPAKDTxNwP.unfreezeAccount.call(addressNEjheMP, {from: accounts[1]});
//		const boolYbfWV5J = await TPAKDTxNwP.transfer.call(addressRUrvFFV, uintVXenRfm, {from: accounts[2]});
//		const uint256qXDagr = await TPAKDTxNwP.balanceOf.call(addressaJgLsTV, {from: accounts[1]});
//		const addressPeMdMmn = await TPAKDTxNwP.removeAdmin.call(addressasDF3pd, {from: accounts[4]});
//		await TPAKDTxNwP.whenPaused.call({from: accounts[5]});
//		const booljqG1g1U = await TPAKDTxNwP.unlock.call(addressOgCHcDP, uintLnmPMQ3, {from: accounts[0]});

		await expect(TPAKDTxNwP.unfreezeAccount.call(addressNEjheMP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPA57uW0q = await TPA.new({from: accounts[0]});
//		await TPA57uW0q.onlyAdmin.call({from: accounts[3]});
//		await TPA57uW0q.whenNotPaused.call({from: accounts[4]});
//		const boolTDlOPHW = await TPA57uW0q.paused.call({from: accounts[3]});

		await expect(TPA57uW0q.onlyAdmin.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAjk3Yuei = await TPA.new({from: accounts[3]});
		const uint256WgYNWoh = await TPAjk3Yuei.totalSupply.call({from: accounts[5]});
		const uint81MkLFm = await TPAjk3Yuei.decimals.call({from: accounts[1]});

		assert.equal(uint256WgYNWoh, BigInt("10000000000000000000000000000"))
		assert.equal(uint81MkLFm, BigInt("18"))
	});

	it('test for TPA', async () => {
		const TPAKDTxNwP = await TPA.new({from: accounts[1]});
		const addressCGuC6Au = accounts[2]
		const addressRQAdc2P = accounts[4]
		const uint256qXDagr = await TPAKDTxNwP.balanceOf.call(addressCGuC6Au, {from: accounts[1]});
		const boolaOtbiaP = await TPAKDTxNwP.isAdmin.call(addressRQAdc2P, {from: accounts[0]});
//		await TPAKDTxNwP.whenPaused.call({from: accounts[5]});

		assert.equal(boolaOtbiaP, false)
		assert.equal(uint256qXDagr, BigInt("0"))
		await expect(TPAKDTxNwP.whenPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAKDTxNwP = await TPA.new({from: accounts[1]});
		const uintZITU4AH = BigInt("1149")
		const addressOjzSmzl = accounts[3]
		const addressfoWv4cd = accounts[1]
		const uintFgn2Kxe = BigInt("808")
		const addressKbZnDAY = accounts[3]
		const addressiE3e4W = accounts[3]
//		const boolSp85dy3 = await TPAKDTxNwP.transferFrom.call(addressfoWv4cd, addressOjzSmzl, uintZITU4AH, {from: "0x0000000000000000000000000000000000000001"});
//		const boolYbfWV5J = await TPAKDTxNwP.transfer.call(addressKbZnDAY, uintFgn2Kxe, {from: accounts[2]});
//		const uint256qXDagr = await TPAKDTxNwP.balanceOf.call(addressiE3e4W, {from: accounts[1]});

		await expect(TPAKDTxNwP.transferFrom.call(addressfoWv4cd, addressOjzSmzl, uintZITU4AH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAKDTxNwP = await TPA.new({from: accounts[1]});
		const uintLSO1ET = BigInt("1415")
		const addresskzbGanv = accounts[1]
		const uintAnpoCNO = BigInt("129")
		const addressmW6bvAm = accounts[2]
		const uintaJKqdwa = BigInt("808")
		const addressx3NBWRq = accounts[3]
		const addressS3ciV0 = accounts[5]
		const addressVbcKVOj = accounts[4]
//		const boolnjjIkIO = await TPAKDTxNwP.decreaseAllowance.call(addresskzbGanv, uintLSO1ET, {from: accounts[2]});
//		const boolmqDtM53 = await TPAKDTxNwP.transfer.call(addressmW6bvAm, uintAnpoCNO, {from: "0x0000000000000000000000000000000000000001"});
//		const boolYbfWV5J = await TPAKDTxNwP.transfer.call(addressx3NBWRq, uintaJKqdwa, {from: accounts[2]});
//		const uint256raqiHrS = await TPAKDTxNwP.allowance.call(addressVbcKVOj, addressS3ciV0, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TPAKDTxNwP.decreaseAllowance.call(addresskzbGanv, uintLSO1ET, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPACdfVEPr = await TPA.new({from: accounts[2]});
		const uintQUxNoTV = BigInt("939")
		const addressdW56CWY = accounts[1]
		const uintvgAjkss = BigInt("7")
		const addressTdq1pM7 = accounts[5]
		const addressdNTSMxB = accounts[1]
		const boolNCVFp1L = await TPACdfVEPr.increaseAllowance.call(addressdW56CWY, uintQUxNoTV, {from: accounts[1]});
//		await TPACdfVEPr.whenPaused.call({from: accounts[2]});
//		const boolXobiGB = await TPACdfVEPr.paused.call({from: accounts[0]});
//		const boolW0ruS4M = await TPACdfVEPr.transferFrom.call(addressdNTSMxB, addressTdq1pM7, uintvgAjkss, {from: accounts[5]});

		assert.equal(boolNCVFp1L, true)
		await expect(TPACdfVEPr.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAKDTxNwP = await TPA.new({from: accounts[1]});
		const addressK1A2PEK = accounts[2]
		const addressfLf65T2 = accounts[3]
		const addressDDScYm = accounts[3]
		const uint256qXDagr = await TPAKDTxNwP.balanceOf.call(addressK1A2PEK, {from: accounts[1]});
		const uint256Hahoy3 = await TPAKDTxNwP.allowance.call(addressDDScYm, addressfLf65T2, {from: accounts[1]});
//		await TPAKDTxNwP.whenPaused.call({from: accounts[5]});
//		const uint8ypzb2vH = await TPAKDTxNwP.decimals.call({from: accounts[4]});

		assert.equal(uint256Hahoy3, BigInt("0"))
		assert.equal(uint256qXDagr, BigInt("0"))
		await expect(TPAKDTxNwP.whenPaused.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPASXlyGpx = await TPA.new({from: accounts[2]});
		const addresssiUPar5 = accounts[3]
		const addressphI2uoi = accounts[0]
		const addresstFvNq0 = accounts[3]
		const uint256c6zfEZl = await TPASXlyGpx.balanceOf.call(addresssiUPar5, {from: accounts[0]});
//		const addressZNDPWXY = await TPASXlyGpx.removeAdmin.call(addressphI2uoi, {from: accounts[2]});
//		const addressz98w8Kd = await TPASXlyGpx.upgradeTo.call(addresstFvNq0, {from: accounts[3]});

		assert.equal(uint256c6zfEZl, BigInt("0"))
		await expect(TPASXlyGpx.removeAdmin.call(addressphI2uoi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPANOYadaD = await TPA.new({from: accounts[4]});
		const uintsrQLh3A = BigInt("536")
		const addresseoKt5HL = accounts[2]
		const addressZVvCwWi = accounts[0]
		const uintj7Y4kKa = BigInt("1319")
		const addressPM4RKVg = accounts[0]
		const stringrYpE2No = await TPANOYadaD.symbol.call({from: accounts[4]});
//		const boolVatKIx1 = await TPANOYadaD.transferFrom.call(addressZVvCwWi, addresseoKt5HL, uintsrQLh3A, {from: accounts[1]});
//		const addressyWj3VV = await TPANOYadaD.burnFrom.call(addressPM4RKVg, uintj7Y4kKa, {from: accounts[3]});

		assert.equal(stringrYpE2No, "TPA")
		await expect(TPANOYadaD.transferFrom.call(addressZVvCwWi, addresseoKt5HL, uintsrQLh3A, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAKDTxNwP = await TPA.new({from: accounts[1]});
		const uintAxqa9kL = BigInt("79")
		const addressR8crhp = accounts[0]
		const uintiBdLKPI = BigInt("808")
		const addresspg3bNw8 = accounts[4]
		const boolXp26ztV = await TPAKDTxNwP.paused.call({from: accounts[0]});
		const booljkPNV9g = await TPAKDTxNwP.approve.call(addressR8crhp, uintAxqa9kL, {from: accounts[1]});
//		await TPAKDTxNwP.whenPaused.call({from: accounts[2]});
//		const boolYbfWV5J = await TPAKDTxNwP.transfer.call(addresspg3bNw8, uintiBdLKPI, {from: accounts[2]});

		assert.equal(boolXp26ztV, false)
		assert.equal(booljkPNV9g, true)
		await expect(TPAKDTxNwP.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAKDTxNwP = await TPA.new({from: accounts[1]});
		const uintHvt64Ro = BigInt("1491")
		const addressrUo7ou = accounts[4]
		const address9YOXjv = accounts[3]
//		const boolSiPok8 = await TPAKDTxNwP.unlock.call(addressrUo7ou, uintHvt64Ro, {from: accounts[1]});
//		const uint256qXDagr = await TPAKDTxNwP.balanceOf.call(address9YOXjv, {from: accounts[1]});
//		await TPAKDTxNwP.renounceAdmin.call({from: accounts[5]});
//		await TPAKDTxNwP.whenPaused.call({from: accounts[5]});

		await expect(TPAKDTxNwP.unlock.call(addressrUo7ou, uintHvt64Ro, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAB0ZGv4h = await TPA.new({from: accounts[4]});
		const uintd5K0Feg = BigInt("1881")
		const addressN5UVLvv = "0x0000000000000000000000000000000000000001"
		const addressONjpH4v = accounts[0]
		const uinthr3ywS = BigInt("1351")
		const uintecx2RxC = BigInt("1559")
		const addressvkdodAR = accounts[3]
//		await TPAB0ZGv4h.renounceAdmin.call({from: accounts[0]});
//		const uint256jsjsjmT = await TPAB0ZGv4h.burn.call(uintd5K0Feg, {from: accounts[2]});
//		const boolu5PBLPC = await TPAB0ZGv4h.isAdmin.call(addressN5UVLvv, {from: accounts[1]});
//		const addressOXtPIn = await TPAB0ZGv4h.transferOwnership.call(addressONjpH4v, {from: accounts[4]});
//		const boolpbpQg7o = await TPAB0ZGv4h.lock.call(addressvkdodAR, uintecx2RxC, uinthr3ywS, {from: accounts[4]});

		await expect(TPAB0ZGv4h.renounceAdmin.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAKDTxNwP = await TPA.new({from: accounts[1]});
		const addressdLootW = accounts[2]
		const uintYbnwJvc = BigInt("1703")
		const addresslTvNHa = accounts[1]
		const uintPIlm24J = BigInt("380")
		const addressM04a0JX = accounts[2]
		const address7MdxT2 = accounts[4]
		const uint256qXDagr = await TPAKDTxNwP.balanceOf.call(addressdLootW, {from: accounts[1]});
		const stringLqIfCqd = await TPAKDTxNwP.name.call({from: accounts[4]});
//		const boolGckoQNr = await TPAKDTxNwP.transfer.call(addresslTvNHa, uintYbnwJvc, {from: accounts[3]});
//		const boolNjJCymg = await TPAKDTxNwP.approve.call(addressM04a0JX, uintPIlm24J, {from: accounts[1]});
//		const uint256bQlNpPz = await TPAKDTxNwP.balanceOf.call(address7MdxT2, {from: accounts[1]});
//		await TPAKDTxNwP.whenPaused.call({from: accounts[5]});

		assert.equal(stringLqIfCqd, "TPA")
		assert.equal(uint256qXDagr, BigInt("0"))
		await expect(TPAKDTxNwP.transfer.call(addresslTvNHa, uintYbnwJvc, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TPA', async () => {
		const TPAKDTxNwP = await TPA.new({from: accounts[1]});
		const addressR3MhaSm = accounts[3]
		const addresspSY3iuU = accounts[1]
		const uint256qXDagr = await TPAKDTxNwP.balanceOf.call(addressR3MhaSm, {from: accounts[1]});
		const addresskkuFptw = await TPAKDTxNwP.upgradeTo.call(addresspSY3iuU, {from: accounts[1]});

		assert.equal(uint256qXDagr, BigInt("0"))
	});
})