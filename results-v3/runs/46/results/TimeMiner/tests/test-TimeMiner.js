const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMineraT8ngNQ = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressAaurM6w = accounts[0]
		const uint256Tafgm8d = await TimeMineraT8ngNQ.balanceOf.call(addressAaurM6w, {from: accounts[3]});
		const uint256Zk96OH3 = await TimeMineraT8ngNQ.totalSupply.call({from: accounts[4]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerRPpq44 = await TimeMiner.new({from: accounts[3]});
		const addressRfVZgVb = "0x0000000000000000000000000000000000000001"
		const addressPJk2or8 = accounts[3]
		const uintuUHIDmi = BigInt("1635")
		const addressNHeRRZ1 = "0x0000000000000000000000000000000000000001"
		const addressxNYmKkk = accounts[1]
		const uint256L7t5xwc = await TimeMinerRPpq44.balanceOfTokenCirculation.call(addressRfVZgVb, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BmnJztU = await TimeMinerRPpq44.balanceOf.call(addressPJk2or8, {from: accounts[0]});
		const uintoU3KEH9 = await TimeMinerRPpq44.preSale.call(uintuUHIDmi, {from: "0x0000000000000000000000000000000000000001"});
		const uint256U5WW2fN = await TimeMinerRPpq44.allowance.call(addressxNYmKkk, addressNHeRRZ1, {from: accounts[2]});

		assert.equal(uint256BmnJztU, BigInt("12000000"))
		assert.equal(uint256L7t5xwc, BigInt("0"))
		await expect(TimeMinerRPpq44.preSale.call(uintuUHIDmi, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerijPXgxd = await TimeMiner.new({from: accounts[0]});
		const addressPSBfgN = accounts[1]
		const uintzGsJYWE = BigInt("1934")
		const addressmy8sqDw = accounts[1]
		const addressWZNCrHq = accounts[2]
		const uintI4ZdWLt = BigInt("1951")
		const addresscw2ykjz = accounts[5]
		const uint256bLf5GoA = await TimeMinerijPXgxd.balanceOfTokenCirculation.call(addressPSBfgN, {from: accounts[4]});
		const uint256qulnNyx = await TimeMinerijPXgxd.changePreSalePriceIfToHigh.call(uintzGsJYWE, {from: accounts[0]});
		const uint256LmfcHP = await TimeMinerijPXgxd.allowance.call(addressWZNCrHq, addressmy8sqDw, {from: accounts[2]});
		const boolygc9WWZ = await TimeMinerijPXgxd.transfer.call(addresscw2ykjz, uintI4ZdWLt, {from: accounts[4]});

		assert.equal(uint256LmfcHP, BigInt("0"))
		assert.equal(uint256bLf5GoA, BigInt("0"))
		await expect(TimeMinerijPXgxd.transfer.call(addresscw2ykjz, uintI4ZdWLt, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinervUmwufH = await TimeMiner.new({from: accounts[0]});
		const addressOPU1doQ = "0x0000000000000000000000000000000000000001"
		const addressiaDTppl = accounts[3]
		const addresszlFIS2d = accounts[2]
		const addressUD5F4Vh = accounts[5]
		const uint256nhNmw8S = await TimeMinervUmwufH.tokensToClaim.call(addressOPU1doQ, {from: accounts[3]});
		const uint256VCqSxP = await TimeMinervUmwufH.allowance.call(addresszlFIS2d, addressiaDTppl, {from: accounts[3]});
		const uint256xho7hkS = await TimeMinervUmwufH.balanceOf.call(addressUD5F4Vh, {from: accounts[4]});

		await expect(TimeMinervUmwufH.tokensToClaim.call(addressOPU1doQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerO2s0CIG = await TimeMiner.new({from: accounts[1]});
		const addresscAXLES9 = accounts[4]
		const addressYLYM6j7 = accounts[0]
		const uintKN8dM3D = BigInt("951")
		const uinty7JcwKb = BigInt("1514")
		const boolaMYeal7 = false
		const addressOC2OAlM = "0x0000000000000000000000000000000000000001"
		const uint256T5qnTg4 = await TimeMinerO2s0CIG.balanceOfTokenCirculation.call(addresscAXLES9, {from: accounts[1]});
		const uint256Kb14QdH = await TimeMinerO2s0CIG.allInfoFor.call(addressYLYM6j7, {from: accounts[0]});
		const uintUqo3IwH = await TimeMinerO2s0CIG.preSale.call(uintKN8dM3D, {from: accounts[4]});
		const uinttG57rW = await TimeMinerO2s0CIG.preSale.call(uinty7JcwKb, {from: accounts[3]});
		const addressHoI1eTA = await TimeMinerO2s0CIG.whitelist.call(addressOC2OAlM, boolaMYeal7, {from: accounts[2]});
		await TimeMinerO2s0CIG.preSaleFinished.call({from: accounts[3]});

		assert.equal(uint256T5qnTg4, BigInt("0"))
		await expect(TimeMinerO2s0CIG.allInfoFor.call(addressYLYM6j7, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerKrJ7opo = await TimeMiner.new({from: accounts[0]});
		const addressFGmn5Ez = accounts[3]
		const uintirox97o = BigInt("1523")
		const addressgr8eZT9 = "0x0000000000000000000000000000000000000001"
		const addressUoqYrY5 = accounts[0]
		const boolJcusRBT = true
		const uintfwKTu2e = BigInt("228")
		const boolxtceKA0 = await TimeMinerKrJ7opo.isWhitelisted.call(addressFGmn5Ez, {from: "0x0000000000000000000000000000000000000001"});
		const boolTMObZ88 = await TimeMinerKrJ7opo.transferFrom.call(addressUoqYrY5, addressgr8eZT9, uintirox97o, {from: accounts[5]});
		const boolNQySBbj = await TimeMinerKrJ7opo.setStableCoinSystem.call(boolJcusRBT, {from: accounts[4]});
		const uint256xelXp8t = await TimeMinerKrJ7opo.changePreSalePriceIfToHigh.call(uintfwKTu2e, {from: accounts[4]});
		const uint256c5oQ1LC = await TimeMinerKrJ7opo.totalSupply.call({from: accounts[3]});

		assert.equal(boolxtceKA0, false)
		await expect(TimeMinerKrJ7opo.transferFrom.call(addressUoqYrY5, addressgr8eZT9, uintirox97o, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerr0tXkDV = await TimeMiner.new({from: accounts[1]});
		const addressCDr5mOa = accounts[0]
		const boolvhbLyza = false
		const addressMMpvhVh = accounts[2]
		const boolkNZciAL = false
		const addressRHESBW = accounts[3]
		const addressRlfQUOR = accounts[4]
		const boolGY6A9P2 = false
		const addresse68UZs = accounts[2]
		const uint256kxeeWs1 = await TimeMinerr0tXkDV.balanceOf.call(addressCDr5mOa, {from: accounts[2]});
		const address0u962c = await TimeMinerr0tXkDV.whitelist.call(addressMMpvhVh, boolvhbLyza, {from: accounts[3]});
		const boolb31AoWh = await TimeMinerr0tXkDV.setStableCoinSystem.call(boolkNZciAL, {from: accounts[5]});
		const boolu7TQ2UV = await TimeMinerr0tXkDV.isWhitelisted.call(addressRHESBW, {from: accounts[5]});
		const boolTzvL7X8 = await TimeMinerr0tXkDV.isWhitelisted.call(addressRlfQUOR, {from: accounts[1]});
		const addressvipBk39 = await TimeMinerr0tXkDV.whitelist.call(addresse68UZs, boolGY6A9P2, {from: accounts[4]});

		assert.equal(uint256kxeeWs1, BigInt("0"))
		await expect(TimeMinerr0tXkDV.whitelist.call(addressMMpvhVh, boolvhbLyza, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerpi8Uotl = await TimeMiner.new({from: accounts[0]});
		const addressPzSGHr0 = accounts[0]
		const addressWNUmYv8 = accounts[1]
		const uintuB9cL8U = BigInt("969")
		const addressdYpgKxR = accounts[2]
		const address2DMBdn = accounts[0]
		await TimeMinerpi8Uotl.preSaleFinished.call({from: accounts[0]});
		const boolciIPvtK = await TimeMinerpi8Uotl.isWhitelisted.call(addressPzSGHr0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256TxFyKf = await TimeMinerpi8Uotl.allInfoFor.call(addressWNUmYv8, {from: "0x0000000000000000000000000000000000000001"});
		const boolo2GnBpR = await TimeMinerpi8Uotl.transferFrom.call(address2DMBdn, addressdYpgKxR, uintuB9cL8U, {from: accounts[1]});

		await expect(TimeMinerpi8Uotl.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerOdlwJWP = await TimeMiner.new({from: accounts[3]});
		const addressmgeNBUV = accounts[3]
		const addressTFPYA9 = accounts[2]
		const boolyKjMEcU = false
		const boolHJQ9Psf = false
		const uint256G70JzNz = await TimeMinerOdlwJWP.allowance.call(addressTFPYA9, addressmgeNBUV, {from: accounts[3]});
		const boolyIiKhzy = await TimeMinerOdlwJWP.setStableCoinSystem.call(boolyKjMEcU, {from: "0x0000000000000000000000000000000000000001"});
		const boolHceV5FQ = await TimeMinerOdlwJWP.setStableCoinSystem.call(boolHJQ9Psf, {from: accounts[2]});

		assert.equal(uint256G70JzNz, BigInt("0"))
		await expect(TimeMinerOdlwJWP.setStableCoinSystem.call(boolyKjMEcU, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerpi8Uotl = await TimeMiner.new({from: accounts[0]});
		const uintQNHtz5U = BigInt("912")
		const addressSIScrfK = accounts[4]
		const addressvvTNH4F = accounts[0]
		const addressmx7yqtL = accounts[1]
		const uintJUpfbmF = BigInt("969")
		const addressR4voIuc = accounts[3]
		const addressULyDdM1 = accounts[0]
		await TimeMinerpi8Uotl.preSaleFinished.call({from: accounts[0]});
		const boolmod7XC5 = await TimeMinerpi8Uotl.approve.call(addressSIScrfK, uintQNHtz5U, {from: accounts[0]});
		const boolciIPvtK = await TimeMinerpi8Uotl.isWhitelisted.call(addressvvTNH4F, {from: "0x0000000000000000000000000000000000000001"});
		const uint256n7V9kz6 = await TimeMinerpi8Uotl.allInfoFor.call(addressmx7yqtL, {from: accounts[1]});
		const boolo2GnBpR = await TimeMinerpi8Uotl.transferFrom.call(addressULyDdM1, addressR4voIuc, uintJUpfbmF, {from: accounts[1]});

		await expect(TimeMinerpi8Uotl.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerpi8Uotl = await TimeMiner.new({from: accounts[0]});
		const uintu4CFpGi = BigInt("1338")
		const uintWc9ejVj = BigInt("1273")
		const addressKVfUejv = accounts[5]
		const uinthFW1poR = BigInt("488")
		const uintVWTaLEj = BigInt("1038")
		const uintJNopxiR = BigInt("206")
		const uint256R2TqYFc = await TimeMinerpi8Uotl.setPrizeFromNewAddress.call(uintWc9ejVj, uintu4CFpGi, {from: accounts[0]});
		const uint256Mcrufcg = await TimeMinerpi8Uotl.balanceOf.call(addressKVfUejv, {from: accounts[2]});
		const uint256oDauv9y = await TimeMinerpi8Uotl.changePreSalePriceIfToHigh.call(uinthFW1poR, {from: "0x0000000000000000000000000000000000000001"});
		await TimeMinerpi8Uotl.preSaleFinished.call({from: accounts[0]});
		const uint256KU163fI = await TimeMinerpi8Uotl.setPrizeFromNewAddress.call(uintJNopxiR, uintVWTaLEj, {from: accounts[1]});

		assert.equal(uint256Mcrufcg, BigInt("0"))
		await expect(TimeMinerpi8Uotl.changePreSalePriceIfToHigh.call(uinthFW1poR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerpi8Uotl = await TimeMiner.new({from: accounts[0]});
		const addressHbsFHhd = accounts[4]
		const addressCVVBbjA = accounts[0]
		const uintyTNj2X = BigInt("1589")
		const addressBMXHIuf = accounts[3]
		await TimeMinerpi8Uotl.preSaleFinished.call({from: accounts[0]});
		const boolU4Ut9Ub = await TimeMinerpi8Uotl.infoStableSystem.call({from: accounts[4]});
		const uint256T8P4pbq = await TimeMinerpi8Uotl.allowance.call(addressCVVBbjA, addressHbsFHhd, {from: accounts[3]});
		const boolGAdzCJZ = await TimeMinerpi8Uotl.approve.call(addressBMXHIuf, uintyTNj2X, {from: accounts[5]});

		await expect(TimeMinerpi8Uotl.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerpi8Uotl = await TimeMiner.new({from: accounts[0]});
		const uintOAo36vj = BigInt("464")
		const addresst2gZEbM = accounts[4]
		const uintYWJbTT = BigInt("11")
		const addressmvCU2ZJ = accounts[3]
		await TimeMinerpi8Uotl.preSaleFinished.call({from: accounts[0]});
		const bool9gBpNg = await TimeMinerpi8Uotl.approve.call(addresst2gZEbM, uintOAo36vj, {from: "0x0000000000000000000000000000000000000001"});
		const boolDOyNQRr = await TimeMinerpi8Uotl.transfer.call(addressmvCU2ZJ, uintYWJbTT, {from: accounts[0]});

		await expect(TimeMinerpi8Uotl.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})