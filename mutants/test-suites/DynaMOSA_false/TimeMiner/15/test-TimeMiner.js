const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerW3Txg7W = await TimeMiner.new({from: accounts[4]});
		const addressO3D28QK = accounts[4]
		const addressfAIwvH1 = accounts[4]
		const addressQ6dDESB = accounts[2]
		const addressN1TMgh1 = accounts[5]
		const addressreTHWCu = accounts[2]
		const addressjyvNLIR = accounts[2]
		const uint47Zhja = BigInt("129")
		const addressIIU8je = accounts[3]
		const addresswOrGekt = accounts[0]
		const uint256LgjmFNG = await TimeMinerW3Txg7W.allInfoFor.call(addressO3D28QK, {from: accounts[5]});
		const uint256xKxFoGi = await TimeMinerW3Txg7W.allInfoFor.call(addressfAIwvH1, {from: accounts[2]});
		const uint256pZPlKCP = await TimeMinerW3Txg7W.allowance.call(addressN1TMgh1, addressQ6dDESB, {from: accounts[3]});
//		const uint256rCbYGKb = await TimeMinerW3Txg7W.tokensToClaim.call(addressreTHWCu, {from: accounts[0]});
//		const uint256ZeLLY3N = await TimeMinerW3Txg7W.tokensToClaim.call(addressjyvNLIR, {from: accounts[3]});
//		const boolBO43WN = await TimeMinerW3Txg7W.transferFrom.call(addresswOrGekt, addressIIU8je, uint47Zhja, {from: accounts[2]});

		assert.equal(uint256pZPlKCP, BigInt("0"))
		await expect(TimeMinerW3Txg7W.tokensToClaim.call(addressreTHWCu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerGG3nWO = await TimeMiner.new({from: accounts[0]});
		const boolH5JOY42 = false
		const uintD804Aiu = BigInt("1212")
		const uintgndoc0u = BigInt("253")
		const uinticdMkgY = BigInt("1393")
		const addressVWjqWu = accounts[0]
		const addressukRQI3 = accounts[3]
//		const boolPHRgftB = await TimeMinerGG3nWO.setStableCoinSystem.call(boolH5JOY42, {from: accounts[1]});
//		const uint256tTcdF6Y = await TimeMinerGG3nWO.setPrizeFromNewAddress.call(uintgndoc0u, uintD804Aiu, {from: "0x0000000000000000000000000000000000000001"});
//		const boolP8Sm4Gm = await TimeMinerGG3nWO.transferFrom.call(addressukRQI3, addressVWjqWu, uinticdMkgY, {from: accounts[1]});

		await expect(TimeMinerGG3nWO.setStableCoinSystem.call(boolH5JOY42, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerN4DJVVB = await TimeMiner.new({from: accounts[0]});
		const addressaOPR5qT = accounts[2]
		const addressTz3gBvF = accounts[5]
		const addressXoJjRSv = accounts[2]
		const addressX8VYJfx = accounts[0]
		const addressNCXYiNe = accounts[3]
		const uintApgpQP5 = BigInt("827")
		const addressUqbQwCC = "0x0000000000000000000000000000000000000001"
		const addressbZuZg40 = accounts[2]
		const uint256fgiq6O6 = await TimeMinerN4DJVVB.allowance.call(addressTz3gBvF, addressaOPR5qT, {from: accounts[3]});
		const boolmbUgAYU = await TimeMinerN4DJVVB.isWhitelisted.call(addressXoJjRSv, {from: accounts[4]});
		const uint256dG6QTYS = await TimeMinerN4DJVVB.allowance.call(addressNCXYiNe, addressX8VYJfx, {from: accounts[3]});
//		const boolsVdifTS = await TimeMinerN4DJVVB.transfer.call(addressUqbQwCC, uintApgpQP5, {from: accounts[3]});
//		const uint256puKpgJD = await TimeMinerN4DJVVB.tokensToClaim.call(addressbZuZg40, {from: accounts[2]});
//		const boolVS5WxnR = await TimeMinerN4DJVVB.infoStableSystem.call({from: accounts[4]});

		assert.equal(boolmbUgAYU, false)
		assert.equal(uint256dG6QTYS, BigInt("0"))
		assert.equal(uint256fgiq6O6, BigInt("0"))
		await expect(TimeMinerN4DJVVB.transfer.call(addressUqbQwCC, uintApgpQP5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerBZrIVbJ = await TimeMiner.new({from: accounts[4]});
		const uintYehwbP = BigInt("1054")
		const uintLgHj7R4 = BigInt("1266")
		const boolAJsTG92 = true
		const addressNyF1HcK = accounts[3]
//		await TimeMinerBZrIVbJ.preSaleFinished.call({from: accounts[5]});
//		const uint256I883PzK = await TimeMinerBZrIVbJ.setPrizeFromNewAddress.call(uintLgHj7R4, uintYehwbP, {from: accounts[1]});
//		const addressso1nS02 = await TimeMinerBZrIVbJ.whitelist.call(addressNyF1HcK, boolAJsTG92, {from: accounts[0]});

		await expect(TimeMinerBZrIVbJ.preSaleFinished.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerksBrEev = await TimeMiner.new({from: accounts[5]});
		const addressjHj0Q6 = accounts[3]
		const addressYgFCQYp = accounts[0]
		const uint256TzQpl4P = await TimeMinerksBrEev.allowance.call(addressYgFCQYp, addressjHj0Q6, {from: accounts[4]});
		const boolUpXExUr = await TimeMinerksBrEev.infoStableSystem.call({from: accounts[0]});
		const uint256PuEWpGc = await TimeMinerksBrEev.totalSupply.call({from: accounts[1]});

		assert.equal(uint256PuEWpGc, BigInt("24000000"))
		assert.equal(uint256TzQpl4P, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerf5xZVPB = await TimeMiner.new({from: accounts[5]});
		const uintqGnQWLE = BigInt("487")
		const addressS67DqZ = accounts[1]
//		const uint256v3E07Eo = await TimeMinerf5xZVPB.changePreSalePriceIfToHigh.call(uintqGnQWLE, {from: accounts[1]});
//		const uint256cgrdCD = await TimeMinerf5xZVPB.balanceOf.call(addressS67DqZ, {from: accounts[5]});

		await expect(TimeMinerf5xZVPB.changePreSalePriceIfToHigh.call(uintqGnQWLE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerN4DJVVB = await TimeMiner.new({from: accounts[0]});
		const addressPEF7WI4 = accounts[2]
		const addresshgrpB80 = accounts[5]
		const addressuivUDd = accounts[3]
		const addressAvw92sw = accounts[1]
		const addresskKW8NFI = accounts[3]
		const uintA2ezvwc = BigInt("1032")
		const uintdfCDQW = BigInt("827")
		const addressUeDFBqq = "0x0000000000000000000000000000000000000001"
		const addressJN96I1E = accounts[2]
		const uint256fgiq6O6 = await TimeMinerN4DJVVB.allowance.call(addresshgrpB80, addressPEF7WI4, {from: accounts[3]});
		const boolmbUgAYU = await TimeMinerN4DJVVB.isWhitelisted.call(addressuivUDd, {from: accounts[4]});
		const uint256dG6QTYS = await TimeMinerN4DJVVB.allowance.call(addresskKW8NFI, addressAvw92sw, {from: accounts[3]});
//		const uintFax0JF3 = await TimeMinerN4DJVVB.preSale.call(uintA2ezvwc, {from: accounts[2]});
//		const boolsVdifTS = await TimeMinerN4DJVVB.transfer.call(addressUeDFBqq, uintdfCDQW, {from: accounts[3]});
//		const uint256puKpgJD = await TimeMinerN4DJVVB.tokensToClaim.call(addressJN96I1E, {from: accounts[2]});
//		const boolVS5WxnR = await TimeMinerN4DJVVB.infoStableSystem.call({from: accounts[4]});

		assert.equal(boolmbUgAYU, false)
		assert.equal(uint256dG6QTYS, BigInt("0"))
		assert.equal(uint256fgiq6O6, BigInt("0"))
		await expect(TimeMinerN4DJVVB.preSale.call(uintA2ezvwc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerN4DJVVB = await TimeMiner.new({from: accounts[0]});
		const uintNCnTmc = BigInt("1000")
		const addresshnKXnke = accounts[3]
		const addressG1HflML = accounts[1]
		const addressPRRtHkx = accounts[2]
		const address3tFzEA = accounts[5]
		const addressBlHEDyh = accounts[3]
		const addressHBMSN10 = accounts[1]
		const addresszK5uen = accounts[3]
		const uinteHY5QWk = BigInt("827")
		const addressyNvH3Jm = "0x0000000000000000000000000000000000000001"
		const addressJHvSZba = accounts[2]
		const boolxuHmaJ = false
		const addresslikjU1a = accounts[0]
		const uintckoNNv0 = BigInt("1026")
		const addressYY0a7Gc = accounts[1]
//		const boolpRfYDt3 = await TimeMinerN4DJVVB.transferFrom.call(addressG1HflML, addresshnKXnke, uintNCnTmc, {from: accounts[0]});
//		const uint256fgiq6O6 = await TimeMinerN4DJVVB.allowance.call(address3tFzEA, addressPRRtHkx, {from: accounts[3]});
//		const boolmbUgAYU = await TimeMinerN4DJVVB.isWhitelisted.call(addressBlHEDyh, {from: accounts[4]});
//		const uint256dG6QTYS = await TimeMinerN4DJVVB.allowance.call(addresszK5uen, addressHBMSN10, {from: accounts[3]});
//		await TimeMinerN4DJVVB.preSaleFinished.call({from: accounts[0]});
//		const boolsVdifTS = await TimeMinerN4DJVVB.transfer.call(addressyNvH3Jm, uinteHY5QWk, {from: accounts[3]});
//		const uint256puKpgJD = await TimeMinerN4DJVVB.tokensToClaim.call(addressJHvSZba, {from: accounts[2]});
//		await TimeMinerN4DJVVB.preSaleFinished.call({from: accounts[5]});
//		const address1VO20o = await TimeMinerN4DJVVB.whitelist.call(addresslikjU1a, boolxuHmaJ, {from: accounts[1]});
//		const boolVS5WxnR = await TimeMinerN4DJVVB.infoStableSystem.call({from: accounts[4]});
//		const boolHtrQtC7 = await TimeMinerN4DJVVB.approve.call(addressYY0a7Gc, uintckoNNv0, {from: accounts[0]});

		await expect(TimeMinerN4DJVVB.transferFrom.call(addressG1HflML, addresshnKXnke, uintNCnTmc, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerVdO5uG8 = await TimeMiner.new({from: accounts[1]});
		const bool8InKeK = true
		const addressZrnVYcF = accounts[3]
		const boolp3rovWU = true
		const uintX5B4yuI = BigInt("1603")
		const addressuOR2Kkh = accounts[1]
//		const addressydm2Uu1 = await TimeMinerVdO5uG8.whitelist.call(addressZrnVYcF, bool8InKeK, {from: accounts[3]});
//		const boolanmgHna = await TimeMinerVdO5uG8.setStableCoinSystem.call(boolp3rovWU, {from: accounts[0]});
//		const booljhqdhsA = await TimeMinerVdO5uG8.approve.call(addressuOR2Kkh, uintX5B4yuI, {from: accounts[4]});

		await expect(TimeMinerVdO5uG8.whitelist.call(addressZrnVYcF, bool8InKeK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerN4DJVVB = await TimeMiner.new({from: accounts[0]});
		const addressMblIYe3 = accounts[2]
		const addressaysnpR7 = accounts[5]
		const uintxmcmkLT = BigInt("1398")
		const addressBCmn6f3 = "0x0000000000000000000000000000000000000001"
		const addressmxT3wq1 = accounts[2]
		const addressLQfzSMd = accounts[1]
		const addresspgGhiE = accounts[3]
		const uintskmzUJX = BigInt("827")
		const addressuCNfFxb = "0x0000000000000000000000000000000000000001"
		const addressMmzjg6 = accounts[2]
		const addressSU5FI6V = accounts[3]
		const addressVukpfO = accounts[2]
		const uint256fgiq6O6 = await TimeMinerN4DJVVB.allowance.call(addressaysnpR7, addressMblIYe3, {from: accounts[3]});
		const boolnuB1oZ2 = await TimeMinerN4DJVVB.approve.call(addressBCmn6f3, uintxmcmkLT, {from: accounts[4]});
		const boolmbUgAYU = await TimeMinerN4DJVVB.isWhitelisted.call(addressmxT3wq1, {from: accounts[4]});
		const uint256dG6QTYS = await TimeMinerN4DJVVB.allowance.call(addresspgGhiE, addressLQfzSMd, {from: accounts[3]});
//		const boolsVdifTS = await TimeMinerN4DJVVB.transfer.call(addressuCNfFxb, uintskmzUJX, {from: accounts[3]});
//		const uint256puKpgJD = await TimeMinerN4DJVVB.tokensToClaim.call(addressMmzjg6, {from: accounts[2]});
//		const uint256eVLOlfS = await TimeMinerN4DJVVB.balanceOf.call(addressSU5FI6V, {from: accounts[0]});
//		const boolVS5WxnR = await TimeMinerN4DJVVB.infoStableSystem.call({from: accounts[4]});
//		const uint256ij5SQBL = await TimeMinerN4DJVVB.tokensToClaim.call(addressVukpfO, {from: accounts[3]});

		assert.equal(boolmbUgAYU, false)
		assert.equal(boolnuB1oZ2, true)
		assert.equal(uint256dG6QTYS, BigInt("0"))
		assert.equal(uint256fgiq6O6, BigInt("0"))
		await expect(TimeMinerN4DJVVB.transfer.call(addressuCNfFxb, uintskmzUJX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerN4DJVVB = await TimeMiner.new({from: accounts[0]});
		const uintJJ2Drzw = BigInt("812")
		const addressdLSllK7 = accounts[3]
		const addresslFmcLvW = accounts[2]
		const uintyO73Emm = BigInt("119")
		const uintPgYuPNR = BigInt("827")
		const addressaHCr4LI = "0x0000000000000000000000000000000000000001"
		const addressTxU6CyH = accounts[2]
		const uintqlTybeh = BigInt("1181")
		const uintqAM9CIZ = BigInt("552")
		const boolHvUrHbK = await TimeMinerN4DJVVB.transfer.call(addressdLSllK7, uintJJ2Drzw, {from: accounts[0]});
		const boolmbUgAYU = await TimeMinerN4DJVVB.isWhitelisted.call(addresslFmcLvW, {from: accounts[4]});
//		const uint256xuMQX1L = await TimeMinerN4DJVVB.changePreSalePriceIfToHigh.call(uintyO73Emm, {from: accounts[1]});
//		const boolsVdifTS = await TimeMinerN4DJVVB.transfer.call(addressaHCr4LI, uintPgYuPNR, {from: accounts[3]});
//		const uint256puKpgJD = await TimeMinerN4DJVVB.tokensToClaim.call(addressTxU6CyH, {from: accounts[2]});
//		const uint256NNqllC9 = await TimeMinerN4DJVVB.setPrizeFromNewAddress.call(uintqAM9CIZ, uintqlTybeh, {from: accounts[5]});
//		const boolVS5WxnR = await TimeMinerN4DJVVB.infoStableSystem.call({from: accounts[4]});

		assert.equal(boolHvUrHbK, true)
		assert.equal(boolmbUgAYU, false)
		await expect(TimeMinerN4DJVVB.changePreSalePriceIfToHigh.call(uintyO73Emm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerN4DJVVB = await TimeMiner.new({from: accounts[0]});
		const uintT8P6Wki = BigInt("812")
		const addressgaHCFVp = accounts[3]
		const addressNch7qs = accounts[3]
		const uintyP0YZhp = BigInt("119")
		const uintZHzThP = BigInt("827")
		const addressi7ONM60 = "0x0000000000000000000000000000000000000001"
		const addressD5D19gI = accounts[2]
		const uintNGembH7 = BigInt("1181")
		const uintXLPOA09 = BigInt("552")
		const boolwPDLWS6 = false
		const boolHvUrHbK = await TimeMinerN4DJVVB.transfer.call(addressgaHCFVp, uintT8P6Wki, {from: accounts[0]});
		const boolmbUgAYU = await TimeMinerN4DJVVB.isWhitelisted.call(addressNch7qs, {from: accounts[4]});
//		await TimeMinerN4DJVVB.preSaleFinished.call({from: accounts[0]});
//		const uint256xuMQX1L = await TimeMinerN4DJVVB.changePreSalePriceIfToHigh.call(uintyP0YZhp, {from: accounts[1]});
//		const boolsVdifTS = await TimeMinerN4DJVVB.transfer.call(addressi7ONM60, uintZHzThP, {from: accounts[3]});
//		const uint256puKpgJD = await TimeMinerN4DJVVB.tokensToClaim.call(addressD5D19gI, {from: accounts[2]});
//		const uint256NNqllC9 = await TimeMinerN4DJVVB.setPrizeFromNewAddress.call(uintXLPOA09, uintNGembH7, {from: accounts[5]});
//		const boolZf7sxbo = await TimeMinerN4DJVVB.setStableCoinSystem.call(boolwPDLWS6, {from: accounts[1]});
//		const boolVS5WxnR = await TimeMinerN4DJVVB.infoStableSystem.call({from: accounts[4]});

		assert.equal(boolHvUrHbK, true)
		assert.equal(boolmbUgAYU, false)
		await expect(TimeMinerN4DJVVB.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerymD0LL9 = await TimeMiner.new({from: accounts[0]});
		const uintkw6Vvl = BigInt("1214")
		const uintxpFzqLL = BigInt("609")
		const addressIJMpEZy = "0x0000000000000000000000000000000000000001"
		const addressjXTA6ix = accounts[4]
		const uintIiexIiF = BigInt("918")
		const uintQDpCTMt = BigInt("1407")
//		const uint256KqzBmXY = await TimeMinerymD0LL9.setPrizeFromNewAddress.call(uintxpFzqLL, uintkw6Vvl, {from: accounts[3]});
//		const uint256s2jWSmX = await TimeMinerymD0LL9.balanceOfTokenCirculation.call(addressIJMpEZy, {from: accounts[2]});
//		const uint256kNaKer = await TimeMinerymD0LL9.tokensToClaim.call(addressjXTA6ix, {from: accounts[2]});
//		const uint256S5HNfOu = await TimeMinerymD0LL9.setPrizeFromNewAddress.call(uintQDpCTMt, uintIiexIiF, {from: accounts[5]});

		await expect(TimeMinerymD0LL9.setPrizeFromNewAddress.call(uintxpFzqLL, uintkw6Vvl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineryavfukG = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressdIqhXX7 = accounts[3]
		const addressRGPRqBd = "0x0000000000000000000000000000000000000001"
		const addressLBJ8neN = accounts[1]
		const uintKUbbCsT = BigInt("1427")
		const addresslPp9IIL = accounts[4]
		const uint256RQWZy2o = await TimeMineryavfukG.allInfoFor.call(addressdIqhXX7, {from: accounts[3]});
		const uint256Dy7IniE = await TimeMineryavfukG.balanceOfTokenCirculation.call(addressRGPRqBd, {from: accounts[2]});
		const uint256WQlVCuO = await TimeMineryavfukG.allInfoFor.call(addressLBJ8neN, {from: accounts[1]});
		const uintzBBeJ83 = await TimeMineryavfukG.preSale.call(uintKUbbCsT, {from: accounts[5]});
		const uint256MRoz8U = await TimeMineryavfukG.allInfoFor.call(addresslPp9IIL, {from: "0x0000000000000000000000000000000000000001"});
	});
})