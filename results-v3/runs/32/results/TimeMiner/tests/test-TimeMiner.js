const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerlsFkiuM = await TimeMiner.new({from: accounts[2]});
		const addressQNGn6h = accounts[0]
		const uintuBd9sC = BigInt("983")
		const boolq6uxJcy = false
		const addresstoy7Qjo = accounts[1]
		const boolghb01Hx = await TimeMinerlsFkiuM.isWhitelisted.call(addressQNGn6h, {from: accounts[0]});
		const uintHGaQ9jF = await TimeMinerlsFkiuM.preSale.call(uintuBd9sC, {from: accounts[0]});
		const addressVAL2ykz = await TimeMinerlsFkiuM.whitelist.call(addresstoy7Qjo, boolq6uxJcy, {from: accounts[1]});

		assert.equal(boolghb01Hx, false)
		await expect(TimeMinerlsFkiuM.preSale.call(uintuBd9sC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerLRGwEGu = await TimeMiner.new({from: accounts[0]});
		const addressBd3HXXN = accounts[3]
		const uintDP8NrxQ = BigInt("1815")
		const addressFny2rO5 = accounts[4]
		const boolzx1ItMA = await TimeMinerLRGwEGu.isWhitelisted.call(addressBd3HXXN, {from: accounts[1]});
		const boolk3plNLr = await TimeMinerLRGwEGu.transfer.call(addressFny2rO5, uintDP8NrxQ, {from: accounts[1]});

		assert.equal(boolzx1ItMA, false)
		await expect(TimeMinerLRGwEGu.transfer.call(addressFny2rO5, uintDP8NrxQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerNEJxpV = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addresshfqiH9x = accounts[3]
		const addressmRWCKIN = accounts[5]
		const uintHPhUiwv = BigInt("2024")
		const addressJYuJQr8 = accounts[0]
		const uint256njDWsto = await TimeMinerNEJxpV.allInfoFor.call(addresshfqiH9x, {from: accounts[4]});
		const uint256lwP5NJF = await TimeMinerNEJxpV.balanceOfTokenCirculation.call(addressmRWCKIN, {from: accounts[5]});
		await TimeMinerNEJxpV.preSaleFinished.call({from: accounts[0]});
		const boolUr0deCR = await TimeMinerNEJxpV.approve.call(addressJYuJQr8, uintHPhUiwv, {from: accounts[0]});
		await TimeMinerNEJxpV.preSaleFinished.call({from: accounts[5]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinereHEm3D = await TimeMiner.new({from: accounts[5]});
		const uintJmFa7WP = BigInt("1638")
		const uintQrW356n = BigInt("1784")
		const addressU0B37OY = accounts[4]
		const uint256oSRZJh0 = await TimeMinereHEm3D.totalSupply.call({from: accounts[3]});
		const uint256e5HbPI = await TimeMinereHEm3D.setPrizeFromNewAddress.call(uintQrW356n, uintJmFa7WP, {from: accounts[4]});
		const boolzZFFiSi = await TimeMinereHEm3D.isWhitelisted.call(addressU0B37OY, {from: accounts[1]});

		assert.equal(uint256oSRZJh0, BigInt("24000000"))
		await expect(TimeMinereHEm3D.setPrizeFromNewAddress.call(uintQrW356n, uintJmFa7WP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerC5MruUw = await TimeMiner.new({from: accounts[1]});
		const bools8ZonlZ = false
		const addressD62B3y = accounts[3]
		const boolSYL5y1l = true
		const uintcM6PplM = BigInt("1693")
		const addressNsNzH3 = accounts[4]
		const addressewm6W5 = accounts[2]
		const address6nWGCj = await TimeMinerC5MruUw.whitelist.call(addressD62B3y, bools8ZonlZ, {from: accounts[2]});
		const boolpIV5rOd = await TimeMinerC5MruUw.setStableCoinSystem.call(boolSYL5y1l, {from: accounts[4]});
		await TimeMinerC5MruUw.preSaleFinished.call({from: accounts[1]});
		const boolc9fMt9i = await TimeMinerC5MruUw.transferFrom.call(addressewm6W5, addressNsNzH3, uintcM6PplM, {from: accounts[2]});

		await expect(TimeMinerC5MruUw.whitelist.call(addressD62B3y, bools8ZonlZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerEAdYnPm = await TimeMiner.new({from: accounts[5]});
		const addressxfGSMRA = "0x0000000000000000000000000000000000000001"
		const uintKaBtIn = BigInt("1912")
		const addressVid1oqY = accounts[4]
		const uintKKcsPzr = BigInt("1578")
		const uintZlJjwg5 = BigInt("1030")
		const uint256uYxSHo9 = await TimeMinerEAdYnPm.balanceOf.call(addressxfGSMRA, {from: accounts[1]});
		const boolswL8PO = await TimeMinerEAdYnPm.approve.call(addressVid1oqY, uintKaBtIn, {from: accounts[4]});
		const uint256EscPd9i = await TimeMinerEAdYnPm.setPrizeFromNewAddress.call(uintZlJjwg5, uintKKcsPzr, {from: accounts[5]});

		assert.equal(boolswL8PO, true)
		assert.equal(uint256uYxSHo9, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerdtzTVoM = await TimeMiner.new({from: accounts[4]});
		const boolQyKYF1t = false
		const booltYZNEjW = await TimeMinerdtzTVoM.setStableCoinSystem.call(boolQyKYF1t, {from: accounts[2]});
		const boolbzespN6 = await TimeMinerdtzTVoM.infoStableSystem.call({from: accounts[0]});

		await expect(TimeMinerdtzTVoM.setStableCoinSystem.call(boolQyKYF1t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerMvOhQa = await TimeMiner.new({from: accounts[4]});
		const addresstnIBFgT = accounts[1]
		const uintz8iJjs5 = BigInt("1419")
		const uint256rh8TXI = await TimeMinerMvOhQa.allInfoFor.call(addresstnIBFgT, {from: accounts[5]});
		const uintm3a5rhf = await TimeMinerMvOhQa.preSale.call(uintz8iJjs5, {from: accounts[2]});

		await expect(TimeMinerMvOhQa.allInfoFor.call(addresstnIBFgT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlsFkiuM = await TimeMiner.new({from: accounts[2]});
		const addresstCTbU2b = accounts[0]
		const boolq6uxJcy = false
		const addressOTlZAW3 = accounts[2]
		const boolllUvwUK = await TimeMinerlsFkiuM.infoStableSystem.call({from: accounts[5]});
		const boolghb01Hx = await TimeMinerlsFkiuM.isWhitelisted.call(addresstCTbU2b, {from: accounts[0]});
		const addressVAL2ykz = await TimeMinerlsFkiuM.whitelist.call(addressOTlZAW3, boolq6uxJcy, {from: accounts[1]});

		assert.equal(boolghb01Hx, false)
		await expect(TimeMinerlsFkiuM.whitelist.call(addressOTlZAW3, boolq6uxJcy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlsFkiuM = await TimeMiner.new({from: accounts[2]});
		const uintirxkXFe = BigInt("983")
		await TimeMinerlsFkiuM.preSaleFinished.call({from: accounts[3]});
		const uintHGaQ9jF = await TimeMinerlsFkiuM.preSale.call(uintirxkXFe, {from: accounts[0]});

		await expect(TimeMinerlsFkiuM.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerxFtec4H = await TimeMiner.new({from: accounts[1]});
		const addressgaTbjdG = accounts[2]
		const uintzjy8vRU = BigInt("64")
		const uint256BolNFea = await TimeMinerxFtec4H.balanceOf.call(addressgaTbjdG, {from: accounts[1]});
		const uint256hqlp7V6 = await TimeMinerxFtec4H.changePreSalePriceIfToHigh.call(uintzjy8vRU, {from: accounts[1]});

		assert.equal(uint256BolNFea, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlsFkiuM = await TimeMiner.new({from: accounts[2]});
		const boolE5AQe3i = true
		const addressWmSIsS = accounts[4]
		const boolUjmAeIk = false
		const addressZVcMqMe = accounts[0]
		const boolq6uxJcy = false
		const addressDeyhcFu = accounts[2]
		const addressTJ49syF = await TimeMinerlsFkiuM.whitelist.call(addressWmSIsS, boolE5AQe3i, {from: accounts[2]});
		const booliSf1Vak = await TimeMinerlsFkiuM.setStableCoinSystem.call(boolUjmAeIk, {from: accounts[1]});
		const boolghb01Hx = await TimeMinerlsFkiuM.isWhitelisted.call(addressZVcMqMe, {from: accounts[0]});
		const addressVAL2ykz = await TimeMinerlsFkiuM.whitelist.call(addressDeyhcFu, boolq6uxJcy, {from: accounts[1]});

		await expect(TimeMinerlsFkiuM.setStableCoinSystem.call(boolUjmAeIk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerMvOhQa = await TimeMiner.new({from: accounts[4]});
		const boolwo3FbQ3 = false
		const uintpi7obi6 = BigInt("1091")
		const addressuvI9qAb = accounts[3]
		const uintL1zRnjx = BigInt("1419")
		const boolmB04NV = await TimeMinerMvOhQa.setStableCoinSystem.call(boolwo3FbQ3, {from: accounts[4]});
		const boolWHOW4qd = await TimeMinerMvOhQa.transfer.call(addressuvI9qAb, uintpi7obi6, {from: accounts[2]});
		const uintm3a5rhf = await TimeMinerMvOhQa.preSale.call(uintL1zRnjx, {from: accounts[2]});

		await expect(TimeMinerMvOhQa.transfer.call(addressuvI9qAb, uintpi7obi6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlsFkiuM = await TimeMiner.new({from: accounts[2]});
		const addressboE67J3 = accounts[1]
		const addressQWbCrsI = accounts[1]
		const addressuTQYBqG = "0x0000000000000000000000000000000000000001"
		const uintz5h2ZcA = BigInt("983")
		const boolghb01Hx = await TimeMinerlsFkiuM.isWhitelisted.call(addressboE67J3, {from: accounts[0]});
		const uint256dpvo4w = await TimeMinerlsFkiuM.allowance.call(addressuTQYBqG, addressQWbCrsI, {from: accounts[1]});
		const uintHGaQ9jF = await TimeMinerlsFkiuM.preSale.call(uintz5h2ZcA, {from: accounts[0]});

		assert.equal(boolghb01Hx, false)
		assert.equal(uint256dpvo4w, BigInt("0"))
		await expect(TimeMinerlsFkiuM.preSale.call(uintz5h2ZcA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerAcujgBJ = await TimeMiner.new({from: accounts[0]});
		const uintskzFBbP = BigInt("1936")
		const addressYTswvVX = accounts[0]
		const addressaQQU4Sy = "0x0000000000000000000000000000000000000001"
		const boolIbcvIo3 = true
		const addressO71du1F = accounts[0]
		const uintNVfBvo = BigInt("136")
		const uintGgh1ui7 = BigInt("1679")
		const addressLqYPAn9 = accounts[2]
		const boolE77q9FH = await TimeMinerAcujgBJ.transfer.call(addressYTswvVX, uintskzFBbP, {from: accounts[0]});
		const uint256Q9un8H5 = await TimeMinerAcujgBJ.allInfoFor.call(addressaQQU4Sy, {from: accounts[2]});
		const boolhvKDOae = await TimeMinerAcujgBJ.setStableCoinSystem.call(boolIbcvIo3, {from: accounts[5]});
		const uint256DtTXmNy = await TimeMinerAcujgBJ.tokensToClaim.call(addressO71du1F, {from: accounts[3]});
		const uint256ywUkeaH = await TimeMinerAcujgBJ.setPrizeFromNewAddress.call(uintGgh1ui7, uintNVfBvo, {from: accounts[0]});
		const uint256FMqyfdi = await TimeMinerAcujgBJ.allInfoFor.call(addressLqYPAn9, {from: accounts[1]});

		assert.equal(boolE77q9FH, true)
		await expect(TimeMinerAcujgBJ.allInfoFor.call(addressaQQU4Sy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerAcujgBJ = await TimeMiner.new({from: accounts[0]});
		const uintLhSyB8P = BigInt("1936")
		const addresscnOdGCZ = accounts[0]
		const addressAqMMWt = "0x00000000000000000000000000000000000000-1"
		const addressJ5SrprZ = accounts[0]
		const uintPQFzjLu = BigInt("136")
		const uintwMnuTMa = BigInt("1679")
		const addressYXUBSom = accounts[2]
		const boolE77q9FH = await TimeMinerAcujgBJ.transfer.call(addresscnOdGCZ, uintLhSyB8P, {from: accounts[0]});
		const uint256Q9un8H5 = await TimeMinerAcujgBJ.allInfoFor.call(addressAqMMWt, {from: accounts[2]});
		const uint256DtTXmNy = await TimeMinerAcujgBJ.tokensToClaim.call(addressJ5SrprZ, {from: accounts[3]});
		const uint256ywUkeaH = await TimeMinerAcujgBJ.setPrizeFromNewAddress.call(uintwMnuTMa, uintPQFzjLu, {from: accounts[0]});
		const uint256FMqyfdi = await TimeMinerAcujgBJ.allInfoFor.call(addressYXUBSom, {from: accounts[1]});

		assert.equal(boolE77q9FH, true)
		await expect(TimeMinerAcujgBJ.allInfoFor.call(addressAqMMWt, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerAcujgBJ = await TimeMiner.new({from: accounts[0]});
		const uintMVvGZZ = BigInt("1936")
		const addressDxJQWq = accounts[1]
		const addressrAb3Zkc = "0x0000000000000000000000000000000000000001"
		const boolIbcvIo3 = true
		const uintT5Rnut = BigInt("975")
		const addressO0nkJOR = accounts[0]
		const uintzW8OdIa = BigInt("136")
		const uintR2SAy30 = BigInt("1679")
		const addressGrQIGy = accounts[2]
		const boolE77q9FH = await TimeMinerAcujgBJ.transfer.call(addressDxJQWq, uintMVvGZZ, {from: accounts[0]});
		const boolMpQYLWY = await TimeMinerAcujgBJ.infoStableSystem.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Q9un8H5 = await TimeMinerAcujgBJ.allInfoFor.call(addressrAb3Zkc, {from: accounts[2]});
		const boolhvKDOae = await TimeMinerAcujgBJ.setStableCoinSystem.call(boolIbcvIo3, {from: accounts[5]});
		const uintKauo5Uw = await TimeMinerAcujgBJ.preSale.call(uintT5Rnut, {from: accounts[2]});
		const uint256DtTXmNy = await TimeMinerAcujgBJ.tokensToClaim.call(addressO0nkJOR, {from: accounts[3]});
		const uint256ywUkeaH = await TimeMinerAcujgBJ.setPrizeFromNewAddress.call(uintR2SAy30, uintzW8OdIa, {from: accounts[0]});
		const uint256FMqyfdi = await TimeMinerAcujgBJ.allInfoFor.call(addressGrQIGy, {from: accounts[1]});

		assert.equal(boolE77q9FH, true)
		await expect(TimeMinerAcujgBJ.allInfoFor.call(addressrAb3Zkc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlsFkiuM = await TimeMiner.new({from: accounts[2]});
		const uintYkZOFNF = BigInt("457")
		const addressZDBFW4I = accounts[0]
		const addressPzUMgZj = accounts[2]
		const uintz55DXt9 = BigInt("992")
		const boolEJ0n5xv = await TimeMinerlsFkiuM.transferFrom.call(addressPzUMgZj, addressZDBFW4I, uintYkZOFNF, {from: accounts[5]});
		const uintHGaQ9jF = await TimeMinerlsFkiuM.preSale.call(uintz55DXt9, {from: accounts[0]});

		await expect(TimeMinerlsFkiuM.transferFrom.call(addressPzUMgZj, addressZDBFW4I, uintYkZOFNF, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})