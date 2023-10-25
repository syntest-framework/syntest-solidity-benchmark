const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerJoFv3m4 = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const boolLdb0aUQ = true
		const addresslQWXvci = "0x0000000000000000000000000000000000000001"
		const uintXDFs4q = BigInt("160")
		const addressVMKmNpz = accounts[4]
		const uintQbrDIbS = BigInt("1338")
		const addressSDqtCOK = accounts[2]
		const addressc3YgfrH = await TimeMinerJoFv3m4.whitelist.call(addresslQWXvci, boolLdb0aUQ, {from: accounts[3]});
		const boola3kY37n = await TimeMinerJoFv3m4.approve.call(addressVMKmNpz, uintXDFs4q, {from: "0x0000000000000000000000000000000000000001"});
		const boolCRlZPjg = await TimeMinerJoFv3m4.approve.call(addressSDqtCOK, uintQbrDIbS, {from: accounts[0]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinereCfwe5M = await TimeMiner.new({from: accounts[1]});
		const addressF8WLw7J = accounts[3]
		const uintn4S5VIB = BigInt("1369")
		const uintRLqMmjC = BigInt("129")
		const uintnVzYV0w = BigInt("2016")
		const addressWRb3cZe = accounts[4]
		const boolRp3ykvE = await TimeMinereCfwe5M.isWhitelisted.call(addressF8WLw7J, {from: accounts[0]});
		const uint256DBcYs6h = await TimeMinereCfwe5M.setPrizeFromNewAddress.call(uintRLqMmjC, uintn4S5VIB, {from: accounts[1]});
		const bool0GsZN3 = await TimeMinereCfwe5M.approve.call(addressWRb3cZe, uintnVzYV0w, {from: accounts[4]});

		assert.equal(bool0GsZN3, true)
		assert.equal(boolRp3ykvE, false)
	});

	it('test for TimeMiner', async () => {
		const TimeMinernJHSuZ = await TimeMiner.new({from: accounts[4]});
		const uintO0DgZm1 = BigInt("882")
		const uintO3M6oaU = BigInt("1444")
		const boolkNGuqJ8 = true
//		const uint256OkSoPAA = await TimeMinernJHSuZ.setPrizeFromNewAddress.call(uintO3M6oaU, uintO0DgZm1, {from: accounts[2]});
//		const boolxQcU7me = await TimeMinernJHSuZ.setStableCoinSystem.call(boolkNGuqJ8, {from: accounts[4]});

		await expect(TimeMinernJHSuZ.setPrizeFromNewAddress.call(uintO3M6oaU, uintO0DgZm1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerkbfeZub = await TimeMiner.new({from: accounts[2]});
		const addressM0vwaG6 = accounts[3]
		const uintCsPHh8w = BigInt("455")
		const uintKf41gpC = BigInt("1360")
		const uint256a8hAg7a = await TimeMinerkbfeZub.balanceOf.call(addressM0vwaG6, {from: accounts[3]});
//		const uint256HQCWPxc = await TimeMinerkbfeZub.setPrizeFromNewAddress.call(uintKf41gpC, uintCsPHh8w, {from: accounts[0]});

		assert.equal(uint256a8hAg7a, BigInt("0"))
		await expect(TimeMinerkbfeZub.setPrizeFromNewAddress.call(uintKf41gpC, uintCsPHh8w, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerU2jWDPt = await TimeMiner.new({from: accounts[4]});
		const addressikXeGwp = accounts[0]
		const addresssTaedxZ = "0x0000000000000000000000000000000000000001"
		const boolO9naWqh = true
		const addressGatuPVE = accounts[4]
		const addressYi2QSS = accounts[4]
		const uint2560TjKfb = await TimeMinerU2jWDPt.allowance.call(addresssTaedxZ, addressikXeGwp, {from: accounts[0]});
//		const addresssESKh9q = await TimeMinerU2jWDPt.whitelist.call(addressGatuPVE, boolO9naWqh, {from: accounts[1]});
//		const uint256kYqSvpl = await TimeMinerU2jWDPt.tokensToClaim.call(addressYi2QSS, {from: accounts[5]});
//		const boolc30Uiab = await TimeMinerU2jWDPt.infoStableSystem.call({from: accounts[3]});
//		const uint256IxP1J3v = await TimeMinerU2jWDPt.totalSupply.call({from: accounts[4]});

		assert.equal(uint2560TjKfb, BigInt("0"))
		await expect(TimeMinerU2jWDPt.whitelist.call(addressGatuPVE, boolO9naWqh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerYhUkLfG = await TimeMiner.new({from: accounts[0]});
		const uintuVkQn7B = BigInt("1215")
		const addressBvVF8Y = accounts[5]
//		const uint256vO8b3oB = await TimeMinerYhUkLfG.changePreSalePriceIfToHigh.call(uintuVkQn7B, {from: accounts[2]});
//		const uint256D3VN7Xp = await TimeMinerYhUkLfG.allInfoFor.call(addressBvVF8Y, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerYhUkLfG.changePreSalePriceIfToHigh.call(uintuVkQn7B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerGWaEQ2p = await TimeMiner.new({from: accounts[0]});
		const addresszmQwGmw = accounts[4]
		const addressOOaWy8K = accounts[2]
		const uintQEd854v = BigInt("2017")
		const uint256fMkv14 = await TimeMinerGWaEQ2p.totalSupply.call({from: accounts[3]});
//		const uint256pdiddR4 = await TimeMinerGWaEQ2p.tokensToClaim.call(addresszmQwGmw, {from: accounts[1]});
//		const uint256cUeox6 = await TimeMinerGWaEQ2p.totalSupply.call({from: accounts[1]});
//		const uint256k0pF1Zb = await TimeMinerGWaEQ2p.balanceOf.call(addressOOaWy8K, {from: accounts[1]});
//		const uint256cfJNrs = await TimeMinerGWaEQ2p.changePreSalePriceIfToHigh.call(uintQEd854v, {from: accounts[2]});

		assert.equal(uint256fMkv14, BigInt("24000000"))
		await expect(TimeMinerGWaEQ2p.tokensToClaim.call(addresszmQwGmw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerQGVhP5 = await TimeMiner.new({from: accounts[2]});
		const boolYjFlGnB = true
		const uintn8nRnmy = BigInt("39")
		const uintzKvHKMN = BigInt("1548")
		const uintyWyqaSb = BigInt("582")
		const addressGdmmA0G = "0x0000000000000000000000000000000000000001"
		const uintOxk3Mzu = BigInt("420")
		const uinttldtatT = BigInt("1791")
		const uintVxakQc6 = BigInt("1103")
//		const boolZ22KmkR = await TimeMinerQGVhP5.setStableCoinSystem.call(boolYjFlGnB, {from: accounts[1]});
//		const uint256XsZaZia = await TimeMinerQGVhP5.setPrizeFromNewAddress.call(uintzKvHKMN, uintn8nRnmy, {from: accounts[5]});
//		const boolOVEuOy1 = await TimeMinerQGVhP5.transfer.call(addressGdmmA0G, uintyWyqaSb, {from: accounts[1]});
//		const uint256Cet3NN9 = await TimeMinerQGVhP5.changePreSalePriceIfToHigh.call(uintOxk3Mzu, {from: accounts[5]});
//		const uint256qKnRO7g = await TimeMinerQGVhP5.setPrizeFromNewAddress.call(uintVxakQc6, uinttldtatT, {from: accounts[0]});

		await expect(TimeMinerQGVhP5.setStableCoinSystem.call(boolYjFlGnB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerOySv6aC = await TimeMiner.new({from: accounts[4]});
		const addressokBGrC = accounts[2]
		const uintnN9mRB = BigInt("1678")
		const addressUMXtIm5 = accounts[5]
		const addressLtTBBUz = accounts[0]
		const addressCcF7Htu = accounts[4]
		const uint256hGBrAfB = await TimeMinerOySv6aC.balanceOf.call(addressokBGrC, {from: accounts[3]});
//		const boolaafVQxm = await TimeMinerOySv6aC.transferFrom.call(addressLtTBBUz, addressUMXtIm5, uintnN9mRB, {from: accounts[3]});
//		const uint256pCMxXI = await TimeMinerOySv6aC.balanceOf.call(addressCcF7Htu, {from: accounts[0]});

		assert.equal(uint256hGBrAfB, BigInt("0"))
		await expect(TimeMinerOySv6aC.transferFrom.call(addressLtTBBUz, addressUMXtIm5, uintnN9mRB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerYhUkLfG = await TimeMiner.new({from: accounts[0]});
		const addressicl1y5l = accounts[5]
//		const uint256D3VN7Xp = await TimeMinerYhUkLfG.allInfoFor.call(addressicl1y5l, {from: "0x0000000000000000000000000000000000000001"});

		await expect(TimeMinerYhUkLfG.allInfoFor.call(addressicl1y5l, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlhFniUn = await TimeMiner.new({from: accounts[4]});
		const uintHZArZS = BigInt("1408")
		const addressXKIIf2r = accounts[2]
		const addressBoHbXFX = accounts[1]
		const uint256BvEhQbr = await TimeMinerlhFniUn.changePreSalePriceIfToHigh.call(uintHZArZS, {from: accounts[4]});
		const uint256KoG7HjX = await TimeMinerlhFniUn.balanceOf.call(addressXKIIf2r, {from: accounts[2]});
//		const uint256ZEj2cgB = await TimeMinerlhFniUn.tokensToClaim.call(addressBoHbXFX, {from: accounts[1]});

		assert.equal(uint256KoG7HjX, BigInt("0"))
		await expect(TimeMinerlhFniUn.tokensToClaim.call(addressBoHbXFX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerQGVhP5 = await TimeMiner.new({from: accounts[2]});
		const boolYjFlGnB = true
		const uintrY1jwuq = BigInt("39")
		const uintvnb03M = BigInt("1548")
		const addressnjDdYd6 = accounts[1]
		const uintudFAxMd = BigInt("582")
		const addressEU42jWo = "0x0000000000000000000000000000000000000002"
		const uintPjNZwiI = BigInt("420")
//		await TimeMinerQGVhP5.preSaleFinished.call({from: accounts[0]});
//		const boolZ22KmkR = await TimeMinerQGVhP5.setStableCoinSystem.call(boolYjFlGnB, {from: accounts[1]});
//		const uint256XsZaZia = await TimeMinerQGVhP5.setPrizeFromNewAddress.call(uintvnb03M, uintrY1jwuq, {from: accounts[5]});
//		const uint256vDUZCG2 = await TimeMinerQGVhP5.balanceOfTokenCirculation.call(addressnjDdYd6, {from: accounts[0]});
//		const boolOVEuOy1 = await TimeMinerQGVhP5.transfer.call(addressEU42jWo, uintudFAxMd, {from: accounts[1]});
//		const uint256Cet3NN9 = await TimeMinerQGVhP5.changePreSalePriceIfToHigh.call(uintPjNZwiI, {from: accounts[5]});

		await expect(TimeMinerQGVhP5.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerYhUkLfG = await TimeMiner.new({from: accounts[0]});
		const addressOEZjRJS = accounts[6]
		const addressIxLpOWL = accounts[0]
		const boolgAyZjd2 = await TimeMinerYhUkLfG.infoStableSystem.call({from: accounts[5]});
//		const uint256D3VN7Xp = await TimeMinerYhUkLfG.allInfoFor.call(addressOEZjRJS, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256X0vzawa = await TimeMinerYhUkLfG.balanceOf.call(addressIxLpOWL, {from: accounts[5]});

		await expect(TimeMinerYhUkLfG.allInfoFor.call(addressOEZjRJS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerg4dA3m = await TimeMiner.new({from: accounts[3]});
		const addressdaeQBw = accounts[0]
		const uintW8NHv0V = BigInt("1772")
		const addressuYiUPQC = accounts[3]
		const uintwGPOxC = BigInt("990")
		const addressK2FfA7b = accounts[4]
		const uintpjxIJeL = BigInt("2030")
		const addressU3SonnG = accounts[2]
		const uint256txELIhj = await TimeMinerg4dA3m.balanceOf.call(addressdaeQBw, {from: accounts[0]});
//		const boolDimxaBn = await TimeMinerg4dA3m.transfer.call(addressuYiUPQC, uintW8NHv0V, {from: accounts[0]});
//		const booldAyrJFA = await TimeMinerg4dA3m.transfer.call(addressK2FfA7b, uintwGPOxC, {from: accounts[2]});
//		const boolWHORQr = await TimeMinerg4dA3m.transfer.call(addressU3SonnG, uintpjxIJeL, {from: accounts[2]});

		assert.equal(uint256txELIhj, BigInt("0"))
		await expect(TimeMinerg4dA3m.transfer.call(addressuYiUPQC, uintW8NHv0V, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineracmEz5A = await TimeMiner.new({from: accounts[3]});
		const uintJVBQL9f = BigInt("1277")
		const addressrAna8N8 = accounts[1]
		const uintYR4qwf = BigInt("1244")
		const addressQC2eQKF = accounts[0]
		const boolQ2zAUvT = await TimeMineracmEz5A.transfer.call(addressrAna8N8, uintJVBQL9f, {from: accounts[3]});
//		await TimeMineracmEz5A.preSaleFinished.call({from: accounts[0]});
//		const booliw8c6J = await TimeMineracmEz5A.approve.call(addressQC2eQKF, uintYR4qwf, {from: accounts[2]});

		assert.equal(boolQ2zAUvT, true)
		await expect(TimeMineracmEz5A.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinervcvLDBw = await TimeMiner.new({from: accounts[4]});
		const addresse02UCSM = accounts[0]
		const uintiixuxn = BigInt("2039")
		const uintSyJITWS = BigInt("1604")
		const addressYgTcM6O = accounts[2]
		const addressLvsPPm = accounts[1]
		const uint256d5tJJU = await TimeMinervcvLDBw.balanceOf.call(addresse02UCSM, {from: accounts[4]});
//		const uintac4jQqU = await TimeMinervcvLDBw.preSale.call(uintiixuxn, {from: accounts[3]});
//		const booldiHo6Pn = await TimeMinervcvLDBw.transferFrom.call(addressLvsPPm, addressYgTcM6O, uintSyJITWS, {from: accounts[1]});
//		const boolKrsUDFx = await TimeMinervcvLDBw.infoStableSystem.call({from: accounts[4]});

		assert.equal(uint256d5tJJU, BigInt("0"))
		await expect(TimeMinervcvLDBw.preSale.call(uintiixuxn, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinercbmpxGb = await TimeMiner.new({from: accounts[5]});
		const boolR8OrSCI = false
		const addressQyruDR3 = accounts[2]
		const addressvwV2oXy = accounts[0]
		const uintHK2YebZ = BigInt("1624")
		const addressaF7zWdF = accounts[1]
		const addressbzKYIp = accounts[1]
		const uintkmfBqTw = BigInt("314")
		const addressEzXXUD = accounts[3]
		const uintoihWTV3 = BigInt("413")
		const addressnAsGUY = accounts[3]
		const addressBaWhPxw = accounts[2]
		const boolcVWbGo8 = await TimeMinercbmpxGb.setStableCoinSystem.call(boolR8OrSCI, {from: accounts[5]});
		const uint256gmH7GDr = await TimeMinercbmpxGb.allowance.call(addressvwV2oXy, addressQyruDR3, {from: accounts[1]});
//		const boolhqhtbAT = await TimeMinercbmpxGb.transferFrom.call(addressbzKYIp, addressaF7zWdF, uintHK2YebZ, {from: accounts[4]});
//		const boolMj9FNkT = await TimeMinercbmpxGb.transfer.call(addressEzXXUD, uintkmfBqTw, {from: accounts[2]});
//		const boolfvUO20x = await TimeMinercbmpxGb.transfer.call(addressnAsGUY, uintoihWTV3, {from: accounts[1]});
//		const uint256VBmgw3V = await TimeMinercbmpxGb.balanceOfTokenCirculation.call(addressBaWhPxw, {from: accounts[4]});

		assert.equal(uint256gmH7GDr, BigInt("0"))
		await expect(TimeMinercbmpxGb.transferFrom.call(addressbzKYIp, addressaF7zWdF, uintHK2YebZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMineracmEz5A = await TimeMiner.new({from: accounts[3]});
		const uintqdYgbWD = BigInt("1277")
		const addressEhYROA4 = accounts[2]
//		await TimeMineracmEz5A.preSaleFinished.call({from: accounts[3]});
//		const boolQ2zAUvT = await TimeMineracmEz5A.transfer.call(addressEhYROA4, uintqdYgbWD, {from: accounts[3]});

		await expect(TimeMineracmEz5A.preSaleFinished.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerOySv6aC = await TimeMiner.new({from: accounts[4]});
		const boolbqysEja = true
		const addressmvMqSee = accounts[4]
		const uintPPE5ol = BigInt("1579")
		const uintc5xxHUZ = BigInt("1678")
		const addresshFpPdEP = accounts[6]
		const addressdzmHVva = accounts[0]
		const addressMZMRqk6 = await TimeMinerOySv6aC.whitelist.call(addressmvMqSee, boolbqysEja, {from: accounts[4]});
//		const uint256VF6ZQbn = await TimeMinerOySv6aC.changePreSalePriceIfToHigh.call(uintPPE5ol, {from: accounts[0]});
//		const boolaafVQxm = await TimeMinerOySv6aC.transferFrom.call(addressdzmHVva, addresshFpPdEP, uintc5xxHUZ, {from: accounts[3]});

		await expect(TimeMinerOySv6aC.changePreSalePriceIfToHigh.call(uintPPE5ol, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})