const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringrvciNjC = "kmadxhhgeL2Aw8RgEg3oCgoqG3V03T0hfgyGB"
		const stringfjBp2Yy = "hi4174v2K2LrvNmCa7E3UA5EZnAeiMnZiFC7t3HNkgGvL99PhRHJ9IB5uSWNTofQ8TmFPMYTZqXiSc4t"
		const uintaLLwPq = BigInt("153")
		const DSPCmhSwOw = await DSP.new(stringrvciNjC, stringfjBp2Yy, uintaLLwPq, {from: accounts[3]});
		const addressaDrxIvw = accounts[0]
		const uintbEf1MA3 = BigInt("1254")
		const addressSs8jsnp = accounts[1]
		const uintlseLHz = BigInt("10")
		const addressSnqyd05 = accounts[3]
		const addressKCr2Rd5 = "0x0000000000000000000000000000000000000001"
		const uintxK6ibnt = BigInt("324")
		const addresscJEPkoN = accounts[1]
		const uint256qfjlsFx = await DSPCmhSwOw.balanceOf.call(addressaDrxIvw, {from: accounts[2]});
		const boolI9evHk = await DSPCmhSwOw.unlock.call(addressSs8jsnp, uintbEf1MA3, {from: accounts[1]});
		const booleiN5d0G = await DSPCmhSwOw.transferFrom.call(addressKCr2Rd5, addressSnqyd05, uintlseLHz, {from: accounts[1]});
		const boolQJKmS3i = await DSPCmhSwOw.transfer.call(addresscJEPkoN, uintxK6ibnt, {from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPxrI33sr = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addresspCDqxQ = accounts[4]
		const addresssEvBT5H = accounts[0]
		const stringayhtCpq = await DSPxrI33sr.name.call({from: accounts[2]});
		const boolL2Sh6cd = await DSPxrI33sr.paused.call({from: accounts[1]});
		const addressHjcrHqu = await DSPxrI33sr.notFrozen.call(addresspCDqxQ, {from: accounts[5]});
		const addresslH4BcMg = await DSPxrI33sr.transferOwnership.call(addresssEvBT5H, {from: accounts[3]});
		await DSPxrI33sr.whenPaused.call({from: accounts[0]});
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const addressxdwTfUW = "0x0000000000000000000000000000000000000001"
		const addressGsiQm54 = accounts[3]
		const uintpVygx8x = BigInt("1256")
		const addressp1vZ5W7 = "0x0000000000000000000000000000000000000001"
		const uint256PnMBlas = await DSPuB6NdEE.balanceOf.call(addressxdwTfUW, {from: accounts[2]});
		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressGsiQm54, {from: accounts[2]});
//		const boolgmGufOj = await DSPuB6NdEE.mint.call(addressp1vZ5W7, uintpVygx8x, {from: accounts[4]});
//		const uint256T9XcoYq = await DSPuB6NdEE.totalSupply.call({from: accounts[2]});
//		await DSPuB6NdEE.renouncePauser.call({from: accounts[4]});

		assert.equal(uint256PnMBlas, BigInt("0"))
		assert.equal(uint256Ywe2lX, BigInt("0"))
		await expect(DSPuB6NdEE.mint.call(addressp1vZ5W7, uintpVygx8x, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrJR1owZ = await DSP.new({from: accounts[3]});
		const uintCpDzV1 = BigInt("609")
		const addressKzZiUPa = "0x0000000000000000000000000000000000000001"
//		await DSPrJR1owZ.f.call({from: accounts[2]});
//		const boolXvvtCsK = await DSPrJR1owZ.increaseAllowance.call(addressKzZiUPa, uintCpDzV1, {from: accounts[0]});
//		const uint8fUZ26PT = await DSPrJR1owZ.decimals.call({from: accounts[1]});
//		const uint256R4py8Qp = await DSPrJR1owZ.totalSupply.call({from: accounts[5]});
//		await DSPrJR1owZ.f.call({from: accounts[0]});

		await expect(DSPrJR1owZ.f.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKKUHzhG = await DSP.new({from: accounts[4]});
		const addressb4NeGZT = accounts[2]
		const addressLoxg2Rg = accounts[5]
//		const addressZt4HwGK = await DSPKKUHzhG.addPauser.call(addressb4NeGZT, {from: accounts[1]});
//		const uint256YunLuAB = await DSPKKUHzhG.balanceOf.call(addressLoxg2Rg, {from: accounts[3]});
//		await DSPKKUHzhG.onlyNewOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPKKUHzhG.addPauser.call(addressb4NeGZT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const addressNjKQJuD = accounts[5]
		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressNjKQJuD, {from: accounts[2]});
//		await DSPuB6NdEE.renouncePauser.call({from: accounts[4]});

		assert.equal(uint256Ywe2lX, BigInt("0"))
		await expect(DSPuB6NdEE.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const addressugIsXTa = accounts[5]
		const uintShz9CV9 = BigInt("1563")
		const addresspiBwmw9 = accounts[1]
		const addressx11pibR = accounts[1]
		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressugIsXTa, {from: accounts[2]});
		const boolezUAzfR = await DSPuB6NdEE.increaseAllowance.call(addresspiBwmw9, uintShz9CV9, {from: accounts[0]});
//		await DSPuB6NdEE.renouncePauser.call({from: accounts[4]});
//		const addressqlc2K93 = await DSPuB6NdEE.transferOwnership.call(addressx11pibR, {from: accounts[5]});

		assert.equal(boolezUAzfR, true)
		assert.equal(uint256Ywe2lX, BigInt("0"))
		await expect(DSPuB6NdEE.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPbCU8DZi = await DSP.new({from: accounts[4]});
		const uintTvYj21c = BigInt("1201")
		const addressX8yGjXz = accounts[2]
		const addressuxbXKt4 = accounts[0]
		const stringjhVEKMd = await DSPbCU8DZi.symbol.call({from: "0x0000000000000000000000000000000000000001"});
//		await DSPbCU8DZi.whenPaused.call({from: accounts[3]});
//		const boolHRw3gBI = await DSPbCU8DZi.increaseAllowance.call(addressX8yGjXz, uintTvYj21c, {from: accounts[4]});
//		const boolhKaILgV = await DSPbCU8DZi.freezeAccount.call(addressuxbXKt4, {from: accounts[1]});

		assert.equal(stringjhVEKMd, "DSP")
		await expect(DSPbCU8DZi.whenPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const addresshsmUtI0 = accounts[5]
		const uintCvo20eL = BigInt("1390")
		const addressyasYvA = accounts[3]
		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addresshsmUtI0, {from: accounts[2]});
//		const boolRTdyhLX = await DSPuB6NdEE.decreaseAllowance.call(addressyasYvA, uintCvo20eL, {from: accounts[0]});
//		await DSPuB6NdEE.renouncePauser.call({from: accounts[4]});

		assert.equal(uint256Ywe2lX, BigInt("0"))
		await expect(DSPuB6NdEE.decreaseAllowance.call(addressyasYvA, uintCvo20eL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const uintdDC9Vu4 = BigInt("1781")
		const addressJaMmP8p = accounts[2]
		const addressfuYMt9f = accounts[7]
		const uintUUWlf1K = BigInt("573")
		const addressUmNWSlU = accounts[1]
//		const boolA42h334 = await DSPuB6NdEE.transfer.call(addressJaMmP8p, uintdDC9Vu4, {from: accounts[4]});
//		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressfuYMt9f, {from: accounts[2]});
//		const boolefhIVcf = await DSPuB6NdEE.burnFrombyOwner.call(addressUmNWSlU, uintUUWlf1K, {from: accounts[5]});

		await expect(DSPuB6NdEE.transfer.call(addressJaMmP8p, uintdDC9Vu4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const uintwZKr11h = BigInt("497")
		const addressnCUMGJc = accounts[2]
		const addressTCUWCTe = accounts[1]
		const addressI5swxTi = accounts[1]
		const addressxmKbR3D = accounts[7]
//		const bool96k0bG = await DSPuB6NdEE.transferFrom.call(addressTCUWCTe, addressnCUMGJc, uintwZKr11h, {from: accounts[3]});
//		const addressDvKZDkI = await DSPuB6NdEE.notFrozen.call(addressI5swxTi, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressxmKbR3D, {from: accounts[2]});

		await expect(DSPuB6NdEE.transferFrom.call(addressTCUWCTe, addressnCUMGJc, uintwZKr11h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const addressOM4gPcf = accounts[5]
		const addressWtR0Gt = accounts[0]
		const addressPyXjvc = accounts[0]
		const addressmWUm1Rz = accounts[7]
		const boolhMf2GoW = await DSPuB6NdEE.isOwner.call(addressOM4gPcf, {from: accounts[3]});
		const uint256kjCJ3Kn = await DSPuB6NdEE.allowance.call(addressPyXjvc, addressWtR0Gt, {from: accounts[4]});
		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressmWUm1Rz, {from: accounts[2]});

		assert.equal(boolhMf2GoW, false)
		assert.equal(uint256Ywe2lX, BigInt("0"))
		assert.equal(uint256kjCJ3Kn, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const addressCWNdvlG = accounts[1]
		const addressVUCIt4c = accounts[7]
		const addressCuXPFwD = "0x0000000000000000000000000000000000000001"
		const boolvwnunUD = await DSPuB6NdEE.isOwner.call(addressCWNdvlG, {from: accounts[4]});
		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressVUCIt4c, {from: accounts[2]});
		const boolgbrOHkn = await DSPuB6NdEE.isPauser.call(addressCuXPFwD, {from: accounts[4]});

		assert.equal(boolgbrOHkn, false)
		assert.equal(boolvwnunUD, true)
		assert.equal(uint256Ywe2lX, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const uintWYfUJib = BigInt("1757")
		const addressPTrP17r = accounts[1]
		const uintZttJag = BigInt("1781")
		const addressy6k2HUs = accounts[2]
		const addressGfR1Km5 = accounts[7]
		const uintd90TdY = BigInt("1511")
		const addressL7j6C6t = accounts[2]
		const boolKbyuQIc = await DSPuB6NdEE.approve.call(addressPTrP17r, uintWYfUJib, {from: accounts[0]});
//		const boolA42h334 = await DSPuB6NdEE.transfer.call(addressy6k2HUs, uintZttJag, {from: accounts[4]});
//		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressGfR1Km5, {from: accounts[2]});
//		const boolJRcUgKz = await DSPuB6NdEE.transfer.call(addressL7j6C6t, uintd90TdY, {from: accounts[3]});

		assert.equal(boolKbyuQIc, true)
		await expect(DSPuB6NdEE.transfer.call(addressy6k2HUs, uintZttJag, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const uintEvSIa2t = BigInt("23")
		const addressMmanWuq = accounts[2]
		const uinttyzQtpH = BigInt("1581")
		const uintVjuFfc = BigInt("1268")
		const addressrjVHWs = accounts[2]
		const addressW1xGIO0 = accounts[7]
		const uint8SmSyg1a = await DSPuB6NdEE.decimals.call({from: accounts[4]});
//		const booldoZeMPS = await DSPuB6NdEE.transfer.call(addressMmanWuq, uintEvSIa2t, {from: accounts[3]});
//		const boolHPgtHyN = await DSPuB6NdEE.transferWithLock.call(addressrjVHWs, uintVjuFfc, uinttyzQtpH, {from: accounts[0]});
//		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressW1xGIO0, {from: accounts[2]});

		assert.equal(uint8SmSyg1a, BigInt("18"))
		await expect(DSPuB6NdEE.transfer.call(addressMmanWuq, uintEvSIa2t, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const addressJbfeqRg = accounts[6]
		const stringUZwTRnh = await DSPuB6NdEE.name.call({from: accounts[0]});
		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressJbfeqRg, {from: accounts[2]});

		assert.equal(stringUZwTRnh, "DSP")
		assert.equal(uint256Ywe2lX, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const addressAjdjhYC = accounts[0]
		const addressA3Gvjmh = accounts[7]
//		const addressSmoX1Y0 = await DSPuB6NdEE.removePauser.call(addressAjdjhYC, {from: accounts[1]});
//		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressA3Gvjmh, {from: accounts[2]});
//		await DSPuB6NdEE.pause.call({from: accounts[1]});

		await expect(DSPuB6NdEE.removePauser.call(addressAjdjhYC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPA4COxPO = await DSP.new({from: accounts[3]});
		const uintusjgFve = BigInt("280")
		const addresscbDKV06 = accounts[1]
		const boolaK8oDXx = await DSPA4COxPO.paused.call({from: accounts[1]});
//		const boolVwNpyS3 = await DSPA4COxPO.unlock.call(addresscbDKV06, uintusjgFve, {from: accounts[2]});
//		const uint256DoZxM1Y = await DSPA4COxPO.totalSupply.call({from: accounts[4]});
//		await DSPA4COxPO.onlyPauser.call({from: accounts[0]});

		assert.equal(boolaK8oDXx, false)
		await expect(DSPA4COxPO.unlock.call(addresscbDKV06, uintusjgFve, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const addressMXZxHi = accounts[7]
		const addressZnKfJoh = accounts[3]
		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressMXZxHi, {from: accounts[2]});
		const boolIFZNy5K = await DSPuB6NdEE.freezeAccount.call(addressZnKfJoh, {from: accounts[1]});

		assert.equal(boolIFZNy5K, true)
		assert.equal(uint256Ywe2lX, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const addressyqHXL9E = accounts[0]
		const addressNoT5ydE = accounts[6]
		const uintesd3ykq = BigInt("1750")
		const addressFi8ecxl = accounts[0]
		const addresskI8DnFx = await DSPuB6NdEE.upgradeTo.call(addressyqHXL9E, {from: accounts[1]});
		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressNoT5ydE, {from: accounts[2]});
//		const booltq33gAH = await DSPuB6NdEE.transfer.call(addressFi8ecxl, uintesd3ykq, {from: accounts[2]});

		assert.equal(uint256Ywe2lX, BigInt("0"))
		await expect(DSPuB6NdEE.transfer.call(addressFi8ecxl, uintesd3ykq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const addressRAQvlci = accounts[7]
		const uintPzEz48k = BigInt("152")
		const addressVbasAQ2 = accounts[1]
		const uint256CT9v1VS = await DSPuB6NdEE.totalSupply.call({from: accounts[3]});
		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressRAQvlci, {from: accounts[2]});
		const bool2SKTf8 = await DSPuB6NdEE.approve.call(addressVbasAQ2, uintPzEz48k, {from: accounts[4]});

		assert.equal(bool2SKTf8, true)
		assert.equal(uint256CT9v1VS, BigInt("100000000000000000000000000000"))
		assert.equal(uint256Ywe2lX, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const addresszRiCJNQ = accounts[0]
		const addressS9OJBXC = accounts[7]
		const addressNPPOtX = accounts[4]
		const addressEDS7wyG = await DSPuB6NdEE.addPauser.call(addresszRiCJNQ, {from: accounts[1]});
		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressS9OJBXC, {from: accounts[2]});
		const boolooW9gE = await DSPuB6NdEE.isOwner.call(addressNPPOtX, {from: accounts[0]});

		assert.equal(boolooW9gE, false)
		assert.equal(uint256Ywe2lX, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const addressoLInuw4 = accounts[6]
		const uintIvJo1h = BigInt("524")
		const uintgJpCpW = BigInt("975")
		const addresseOf1QsB = accounts[1]
		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressoLInuw4, {from: accounts[2]});
		const boolZAFsTgj = await DSPuB6NdEE.lock.call(addresseOf1QsB, uintgJpCpW, uintIvJo1h, {from: accounts[1]});

		assert.equal(boolZAFsTgj, true)
		assert.equal(uint256Ywe2lX, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const uintd00Tl3 = BigInt("740")
		const addressLNjBQ3k = "0x0000000000000000000000000000000000000001"
		const addressbCoQr14 = accounts[7]
		const booll23FOF = await DSPuB6NdEE.mint.call(addressLNjBQ3k, uintd00Tl3, {from: accounts[1]});
//		await DSPuB6NdEE.onlyNewOwner.call({from: accounts[3]});
//		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressbCoQr14, {from: accounts[2]});

		assert.equal(booll23FOF, true)
		await expect(DSPuB6NdEE.onlyNewOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const uintWVSb2fv = BigInt("165")
		const addressENVBeXq = accounts[2]
		const uintLOuxOiW = BigInt("443")
		const uintIAzMTX2 = BigInt("325")
		const addressdqPY01W = accounts[5]
		const addressj6ZkIE = accounts[6]
		const boolipzL1D2 = await DSPuB6NdEE.approve.call(addressENVBeXq, uintWVSb2fv, {from: accounts[2]});
		const boolKCtjq1L = await DSPuB6NdEE.transferWithLock.call(addressdqPY01W, uintIAzMTX2, uintLOuxOiW, {from: accounts[1]});
		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressj6ZkIE, {from: accounts[2]});

		assert.equal(boolKCtjq1L, true)
		assert.equal(boolipzL1D2, true)
		assert.equal(uint256Ywe2lX, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const uinthqyQAy5 = BigInt("1781")
		const addressRV8Jhvi = accounts[4]
		const uintGYOaCnd = BigInt("757")
		const addresspgMLohY = "0x0000000000000000000000000000000000000001"
		const addresspzO8hfw = accounts[4]
//		await DSPuB6NdEE.pause.call({from: accounts[1]});
//		const boolA42h334 = await DSPuB6NdEE.transfer.call(addressRV8Jhvi, uinthqyQAy5, {from: accounts[4]});
//		const boole4pzyRV = await DSPuB6NdEE.transferFrom.call(addresspzO8hfw, addresspgMLohY, uintGYOaCnd, {from: accounts[5]});

		await expect(DSPuB6NdEE.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuB6NdEE = await DSP.new({from: accounts[1]});
		const uintc7xRG4E = BigInt("388")
		const addressHQRFsax = accounts[3]
		const addressY5Uadr1 = accounts[7]
//		const boollT2jJu0 = await DSPuB6NdEE.burnFrombyOwner.call(addressHQRFsax, uintc7xRG4E, {from: accounts[1]});
//		const uint256Ywe2lX = await DSPuB6NdEE.balanceOf.call(addressY5Uadr1, {from: accounts[2]});

		await expect(DSPuB6NdEE.burnFrombyOwner.call(addressHQRFsax, uintc7xRG4E, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})