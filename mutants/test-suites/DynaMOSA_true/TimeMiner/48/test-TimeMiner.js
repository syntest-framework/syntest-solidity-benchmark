const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerQYrxiab = await TimeMiner.new({from: accounts[3]});
		const uintYpcLz8a = BigInt("312")
		const addresspVmKnZM = accounts[3]
		const addressEEoQpLQ = accounts[4]
		const boolGSYvIs2 = false
		const uintTklifSM = BigInt("1965")
		const addressdCvYk91 = accounts[3]
		const uintpn6iCSN = BigInt("1777")
		const addressq9DK0VS = accounts[2]
		const addressmiR7zZg = accounts[2]
//		await TimeMinerQYrxiab.preSaleFinished.call({from: accounts[4]});
//		const bool2mxGZQ = await TimeMinerQYrxiab.transferFrom.call(addressEEoQpLQ, addresspVmKnZM, uintYpcLz8a, {from: accounts[3]});
//		const boolbDT61F = await TimeMinerQYrxiab.setStableCoinSystem.call(boolGSYvIs2, {from: accounts[1]});
//		const boolXQgGOOZ = await TimeMinerQYrxiab.approve.call(addressdCvYk91, uintTklifSM, {from: accounts[2]});
//		const boolLyTuosj = await TimeMinerQYrxiab.transferFrom.call(addressmiR7zZg, addressq9DK0VS, uintpn6iCSN, {from: accounts[3]});

		await expect(TimeMinerQYrxiab.preSaleFinished.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerVVqacRK = await TimeMiner.new({from: accounts[2]});
		const uintcbBZPbd = BigInt("982")
		const uintt8iWXqB = BigInt("561")
		const addressEZoWlzD = accounts[1]
		const addressXKXW9R = "0x0000000000000000000000000000000000000001"
//		const uint256tSwUikW = await TimeMinerVVqacRK.changePreSalePriceIfToHigh.call(uintcbBZPbd, {from: "0x0000000000000000000000000000000000000001"});
//		const boollQGiAQP = await TimeMinerVVqacRK.transfer.call(addressEZoWlzD, uintt8iWXqB, {from: accounts[4]});
//		const uint256EjJtfvP = await TimeMinerVVqacRK.balanceOf.call(addressXKXW9R, {from: accounts[1]});

		await expect(TimeMinerVVqacRK.changePreSalePriceIfToHigh.call(uintcbBZPbd, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerizY6bHX = await TimeMiner.new({from: accounts[1]});
		const uintKiR6q1B = BigInt("611")
		const addressuxG9UlG = accounts[1]
		const addressnbEBFNZ = accounts[2]
		const addressEglBtmm = accounts[1]
		const addressi38nQp = accounts[2]
//		const boolZ0f77H = await TimeMinerizY6bHX.transferFrom.call(addressnbEBFNZ, addressuxG9UlG, uintKiR6q1B, {from: accounts[4]});
//		const uint256lZNQM25 = await TimeMinerizY6bHX.tokensToClaim.call(addressEglBtmm, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256Mx1AdrV = await TimeMinerizY6bHX.balanceOfTokenCirculation.call(addressi38nQp, {from: accounts[0]});

		await expect(TimeMinerizY6bHX.transferFrom.call(addressnbEBFNZ, addressuxG9UlG, uintKiR6q1B, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerDobVG82 = await TimeMiner.new({from: accounts[2]});
		const addressiWRQWAn = accounts[2]
		const addressWt68KZN = accounts[3]
		const uinteMZpgqH = BigInt("717")
		const addressm4ynpqg = accounts[5]
		const uint256nOAg4ca = await TimeMinerDobVG82.balanceOf.call(addressiWRQWAn, {from: accounts[3]});
		const uint256lP5caza = await TimeMinerDobVG82.balanceOf.call(addressWt68KZN, {from: accounts[5]});
//		const boolIFwAlmz = await TimeMinerDobVG82.transfer.call(addressm4ynpqg, uinteMZpgqH, {from: accounts[4]});
//		await TimeMinerDobVG82.preSaleFinished.call({from: accounts[4]});
//		await TimeMinerDobVG82.preSaleFinished.call({from: accounts[1]});

		assert.equal(uint256lP5caza, BigInt("0"))
		assert.equal(uint256nOAg4ca, BigInt("12000000"))
		await expect(TimeMinerDobVG82.transfer.call(addressm4ynpqg, uinteMZpgqH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinertBzCpxQ = await TimeMiner.new({from: accounts[5]});
		const addressnL8EE4k = "0x0000000000000000000000000000000000000001"
		const uintSWnbbZY = BigInt("1029")
		const addressLt99NT = accounts[3]
		const boolHIzbBvI = false
		const addressRYwTYbK = accounts[4]
		const uintWmRWN2H = BigInt("1234")
//		const uint256ZAEvR6k = await TimeMinertBzCpxQ.tokensToClaim.call(addressnL8EE4k, {from: accounts[2]});
//		await TimeMinertBzCpxQ.preSaleFinished.call({from: accounts[0]});
//		const boolhukXB8Z = await TimeMinertBzCpxQ.approve.call(addressLt99NT, uintSWnbbZY, {from: accounts[0]});
//		const addressLP6Sv9o = await TimeMinertBzCpxQ.whitelist.call(addressRYwTYbK, boolHIzbBvI, {from: accounts[5]});
//		const uintpcDrDfP = await TimeMinertBzCpxQ.preSale.call(uintWmRWN2H, {from: accounts[4]});

		await expect(TimeMinertBzCpxQ.tokensToClaim.call(addressnL8EE4k, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerUHXrPYG = await TimeMiner.new({from: accounts[2]});
		const addressqlpYprt = accounts[4]
		const boolIMho9Ki = false
		const uintNA9Miej = BigInt("1154")
		const addressVZzYwuw = accounts[2]
		const uintiv7EiXH = BigInt("1889")
		const addressaewBR9E = "0x0000000000000000000000000000000000000001"
		const uintwLKUYVv = BigInt("371")
		const addressn5vQsN = accounts[0]
		const addressZf9en96 = accounts[5]
		const uint256CeFu00o = await TimeMinerUHXrPYG.balanceOfTokenCirculation.call(addressqlpYprt, {from: accounts[0]});
//		const boolawd09u = await TimeMinerUHXrPYG.setStableCoinSystem.call(boolIMho9Ki, {from: accounts[3]});
//		const boolqmCx9br = await TimeMinerUHXrPYG.transfer.call(addressVZzYwuw, uintNA9Miej, {from: accounts[2]});
//		const boolQfrveV = await TimeMinerUHXrPYG.transfer.call(addressaewBR9E, uintiv7EiXH, {from: accounts[4]});
//		const boolfXVuMB = await TimeMinerUHXrPYG.transferFrom.call(addressZf9en96, addressn5vQsN, uintwLKUYVv, {from: accounts[0]});
//		await TimeMinerUHXrPYG.preSaleFinished.call({from: accounts[2]});

		assert.equal(uint256CeFu00o, BigInt("0"))
		await expect(TimeMinerUHXrPYG.setStableCoinSystem.call(boolIMho9Ki, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerJrCA0je = await TimeMiner.new({from: accounts[0]});
		const bool3VXKkJ = true
		const addressL3cTNk5 = accounts[2]
		const addressHVbqfG = accounts[1]
		const addresslJZP5eM = accounts[1]
		const addressLnfmzyt = accounts[1]
//		await TimeMinerJrCA0je.preSaleFinished.call({from: accounts[0]});
//		const addressErQ77cn = await TimeMinerJrCA0je.whitelist.call(addressL3cTNk5, bool3VXKkJ, {from: accounts[3]});
//		const uint256DD2NrnZ = await TimeMinerJrCA0je.allowance.call(addresslJZP5eM, addressHVbqfG, {from: accounts[1]});
//		const boolF3epeB8 = await TimeMinerJrCA0je.isWhitelisted.call(addressLnfmzyt, {from: accounts[4]});

		await expect(TimeMinerJrCA0je.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerNciEzUR = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgst9I03 = BigInt("657")
		const uintGbLPQTj = BigInt("620")
		const uint256gQYPQ0q = await TimeMinerNciEzUR.totalSupply.call({from: accounts[2]});
		const uint256NmGIZEn = await TimeMinerNciEzUR.setPrizeFromNewAddress.call(uintGbLPQTj, uintgst9I03, {from: accounts[2]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerKIs0n2P = await TimeMiner.new({from: accounts[3]});
		const addressuMon9CW = accounts[1]
		const uintAAp3WJ = BigInt("995")
		const addressLWFG5ZJ = accounts[1]
		const boolgWJPfT3 = await TimeMinerKIs0n2P.infoStableSystem.call({from: accounts[2]});
		const boolx7IJPZX = await TimeMinerKIs0n2P.isWhitelisted.call(addressuMon9CW, {from: accounts[1]});
//		const uintZuyNR5B = await TimeMinerKIs0n2P.preSale.call(uintAAp3WJ, {from: accounts[4]});
//		const boolLTI3P0W = await TimeMinerKIs0n2P.infoStableSystem.call({from: accounts[1]});
//		const uint256cKYhWvG = await TimeMinerKIs0n2P.balanceOf.call(addressLWFG5ZJ, {from: accounts[4]});

		assert.equal(boolx7IJPZX, false)
		await expect(TimeMinerKIs0n2P.preSale.call(uintAAp3WJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerVVqacRK = await TimeMiner.new({from: accounts[2]});
		const uintbI18QzB = BigInt("982")
		const addressuaBbxWl = accounts[4]
		const uintAdfSZXq = BigInt("561")
		const addressdiK38Q3 = accounts[1]
		const addressXFIQOfK = "0x0000000000000000000000000000000000000001"
		const uint256lT24MSV = await TimeMinerVVqacRK.totalSupply.call({from: accounts[3]});
//		const uint256tSwUikW = await TimeMinerVVqacRK.changePreSalePriceIfToHigh.call(uintbI18QzB, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256SAAbt0s = await TimeMinerVVqacRK.allInfoFor.call(addressuaBbxWl, {from: accounts[0]});
//		const boollQGiAQP = await TimeMinerVVqacRK.transfer.call(addressdiK38Q3, uintAdfSZXq, {from: accounts[4]});
//		const uint256EjJtfvP = await TimeMinerVVqacRK.balanceOf.call(addressXFIQOfK, {from: accounts[1]});

		assert.equal(uint256lT24MSV, BigInt("24000000"))
		await expect(TimeMinerVVqacRK.changePreSalePriceIfToHigh.call(uintbI18QzB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerYVxPRl6 = await TimeMiner.new({from: accounts[0]});
		const uinty86OCRH = BigInt("264")
		const addressAPj3FQn = accounts[2]
		const addressKnttzff = accounts[1]
		const bool6egM1v = await TimeMinerYVxPRl6.approve.call(addressAPj3FQn, uinty86OCRH, {from: accounts[3]});
		const uint256POnQqxX = await TimeMinerYVxPRl6.totalSupply.call({from: accounts[0]});
//		const uint256akzDyZ1 = await TimeMinerYVxPRl6.tokensToClaim.call(addressKnttzff, {from: accounts[4]});

		assert.equal(bool6egM1v, true)
		assert.equal(uint256POnQqxX, BigInt("24000000"))
		await expect(TimeMinerYVxPRl6.tokensToClaim.call(addressKnttzff, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerJrCA0je = await TimeMiner.new({from: accounts[0]});
		const addressZHfrxP = accounts[1]
		const addressAs5Nbt8 = accounts[1]
		const addressQ1oUCjQ = accounts[3]
		const uinttuaMdS = BigInt("1803")
		const uintLPtB2Bv = BigInt("1235")
		const addressOHREk7 = accounts[1]
//		await TimeMinerJrCA0je.preSaleFinished.call({from: accounts[0]});
//		const uint256DD2NrnZ = await TimeMinerJrCA0je.allowance.call(addressAs5Nbt8, addressZHfrxP, {from: accounts[1]});
//		const uint256ocLJJfe = await TimeMinerJrCA0je.allInfoFor.call(addressQ1oUCjQ, {from: accounts[5]});
//		const uint256VfUN2br = await TimeMinerJrCA0je.setPrizeFromNewAddress.call(uintLPtB2Bv, uinttuaMdS, {from: accounts[4]});
//		const boolF3epeB8 = await TimeMinerJrCA0je.isWhitelisted.call(addressOHREk7, {from: accounts[4]});

		await expect(TimeMinerJrCA0je.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineras1EAye = await TimeMiner.new({from: accounts[4]});
		const uintW5JSDkD = BigInt("489")
		const uintY0c4108 = BigInt("696")
		const addressJgvUxR4 = accounts[0]
		const uintsbQHiAt = BigInt("1375")
		const uintlyLD3XG = BigInt("1880")
		const uintsFvI6CI = BigInt("822")
		const uintKzezBTC = BigInt("1493")
//		const uint256lnS5ipU = await TimeMineras1EAye.setPrizeFromNewAddress.call(uintY0c4108, uintW5JSDkD, {from: accounts[2]});
//		const booldjINtf = await TimeMineras1EAye.isWhitelisted.call(addressJgvUxR4, {from: accounts[4]});
//		const uint256NfYbOcQ = await TimeMineras1EAye.changePreSalePriceIfToHigh.call(uintsbQHiAt, {from: accounts[3]});
//		const uint256OcpUsKA = await TimeMineras1EAye.setPrizeFromNewAddress.call(uintsFvI6CI, uintlyLD3XG, {from: accounts[4]});
//		const uint0VwZtj = await TimeMineras1EAye.preSale.call(uintKzezBTC, {from: accounts[4]});
//		const boolmHXV8t = await TimeMineras1EAye.infoStableSystem.call({from: accounts[1]});

		await expect(TimeMineras1EAye.setPrizeFromNewAddress.call(uintY0c4108, uintW5JSDkD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerElUzCMC = await TimeMiner.new({from: accounts[1]});
		const boolpo43D0a = true
		const addresszWG9pZ4 = accounts[4]
		const uintDBxLrUv = BigInt("962")
		const uintk0TPtch = BigInt("1800")
		const boolwHckA45 = true
		const addressgAUhHo0 = await TimeMinerElUzCMC.whitelist.call(addresszWG9pZ4, boolpo43D0a, {from: accounts[1]});
//		const uint256mLPesJ2 = await TimeMinerElUzCMC.setPrizeFromNewAddress.call(uintk0TPtch, uintDBxLrUv, {from: "0x0000000000000000000000000000000000000001"});
//		const boolnrid2B = await TimeMinerElUzCMC.setStableCoinSystem.call(boolwHckA45, {from: accounts[3]});

		await expect(TimeMinerElUzCMC.setPrizeFromNewAddress.call(uintk0TPtch, uintDBxLrUv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerVVqacRK = await TimeMiner.new({from: accounts[2]});
		const uintFrhiWq = BigInt("403")
		const uintnPfI56 = BigInt("558")
		const uintm4r9Czu = BigInt("949")
		const uint256PWhyF3o = await TimeMinerVVqacRK.setPrizeFromNewAddress.call(uintnPfI56, uintFrhiWq, {from: accounts[2]});
//		const uint256tSwUikW = await TimeMinerVVqacRK.changePreSalePriceIfToHigh.call(uintm4r9Czu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerVVqacRK.changePreSalePriceIfToHigh.call(uintm4r9Czu, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerVVqacRK = await TimeMiner.new({from: accounts[2]});
		const boolWIOxsIh = false
		const boolyLnKwX5 = false
		const addressgmaHhGW = accounts[5]
		const uintEOgcDNK = BigInt("967")
		const boolBTJogwf = await TimeMinerVVqacRK.setStableCoinSystem.call(boolWIOxsIh, {from: accounts[2]});
//		const addressdtF7k69 = await TimeMinerVVqacRK.whitelist.call(addressgmaHhGW, boolyLnKwX5, {from: accounts[3]});
//		const uint256tSwUikW = await TimeMinerVVqacRK.changePreSalePriceIfToHigh.call(uintEOgcDNK, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerVVqacRK.whitelist.call(addressgmaHhGW, boolyLnKwX5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerQjOZskX = await TimeMiner.new({from: accounts[4]});
		const uintb856Na7 = BigInt("1743")
		const addressYNA9eZb = accounts[0]
		const uintV9ipeiA = BigInt("1520")
		const addressMBgx0c = accounts[1]
		const uintYMJldj6 = BigInt("1298")
		const addressS2muHnc = accounts[5]
		const boolJbB0PX = await TimeMinerQjOZskX.infoStableSystem.call({from: accounts[0]});
		const boolsYQCGax = await TimeMinerQjOZskX.transfer.call(addressYNA9eZb, uintb856Na7, {from: accounts[4]});
		const boolJmmA5L = await TimeMinerQjOZskX.transfer.call(addressMBgx0c, uintV9ipeiA, {from: accounts[4]});
		const uint256h5CnPis = await TimeMinerQjOZskX.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolfVk1O8T = await TimeMinerQjOZskX.approve.call(addressS2muHnc, uintYMJldj6, {from: accounts[3]});

		assert.equal(boolJmmA5L, true)
		assert.equal(boolfVk1O8T, true)
		assert.equal(boolsYQCGax, true)
		assert.equal(uint256h5CnPis, BigInt("24000000"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerQzfZY9G = await TimeMiner.new({from: accounts[3]});
		const addressqYJ7Zrl = accounts[4]
		const addressvp5lRWl = accounts[2]
		const addressFoeY2mM = accounts[3]
		const uintCyEuM9S = BigInt("701")
		const uint256l0NKwja = await TimeMinerQzfZY9G.balanceOfTokenCirculation.call(addressqYJ7Zrl, {from: accounts[3]});
		const uint256HYWkpfY = await TimeMinerQzfZY9G.balanceOfTokenCirculation.call(addressvp5lRWl, {from: accounts[1]});
		const uint256XVyYUY = await TimeMinerQzfZY9G.allInfoFor.call(addressFoeY2mM, {from: accounts[3]});
		const uint256fEqI6x4 = await TimeMinerQzfZY9G.changePreSalePriceIfToHigh.call(uintCyEuM9S, {from: accounts[3]});

		assert.equal(uint256HYWkpfY, BigInt("0"))
		assert.equal(uint256l0NKwja, BigInt("0"))
	});
})