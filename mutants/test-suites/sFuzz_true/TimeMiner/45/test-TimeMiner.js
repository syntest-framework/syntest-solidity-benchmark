const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerXs7Uo6 = await TimeMiner.new({from: accounts[3]});
		const address9Wn3Ai = accounts[0]
		const addressd0QhFH = accounts[4]
		const uintrCYD85j = BigInt("773")
		const addresshGSp1u = accounts[4]
		const addressPOKZJIM = accounts[1]
		const addressoKvpuO = accounts[0]
		const uint256BreLwVh = await TimeMinerXs7Uo6.allowance.call(addressd0QhFH, address9Wn3Ai, {from: accounts[0]});
		const boolaWiLMJ = await TimeMinerXs7Uo6.approve.call(addresshGSp1u, uintrCYD85j, {from: accounts[3]});
//		const uint256bBuRh22 = await TimeMinerXs7Uo6.tokensToClaim.call(addressPOKZJIM, {from: accounts[1]});
//		const uint256lCzcmQC = await TimeMinerXs7Uo6.tokensToClaim.call(addressoKvpuO, {from: accounts[1]});

		assert.equal(boolaWiLMJ, true)
		assert.equal(uint256BreLwVh, BigInt("0"))
		await expect(TimeMinerXs7Uo6.tokensToClaim.call(addressPOKZJIM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerDR7IDDi = await TimeMiner.new({from: accounts[4]});
		const boolsF71G8 = false
		const uintgocjgef = BigInt("1850")
		const uintVOtXVbc = BigInt("88")
		const uintwUqb58R = BigInt("830")
		const addressg4obMsA = accounts[3]
		const addressxrIPOn = accounts[0]
		const uintp5si8cR = BigInt("1730")
		const boolIkrS5YM = await TimeMinerDR7IDDi.setStableCoinSystem.call(boolsF71G8, {from: accounts[4]});
//		const uint256AQOrbuf = await TimeMinerDR7IDDi.setPrizeFromNewAddress.call(uintVOtXVbc, uintgocjgef, {from: accounts[1]});
//		const uint256PeeyA5a = await TimeMinerDR7IDDi.changePreSalePriceIfToHigh.call(uintwUqb58R, {from: accounts[0]});
//		const uint256RNs1w0 = await TimeMinerDR7IDDi.allowance.call(addressxrIPOn, addressg4obMsA, {from: accounts[2]});
//		const uint256uTz9LRC = await TimeMinerDR7IDDi.changePreSalePriceIfToHigh.call(uintp5si8cR, {from: accounts[0]});

		await expect(TimeMinerDR7IDDi.setPrizeFromNewAddress.call(uintVOtXVbc, uintgocjgef, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerGvFD3T = await TimeMiner.new({from: accounts[4]});
		const uintWMuX1d = BigInt("1030")
		const addressbFPiyRJ = accounts[3]
		const addressrGIgMTX = accounts[2]
//		await TimeMinerGvFD3T.preSaleFinished.call({from: accounts[4]});
//		const boolTikfQ2I = await TimeMinerGvFD3T.approve.call(addressbFPiyRJ, uintWMuX1d, {from: "0x0000000000000000000000000000000000000001"});
//		const uint2564Ubz3e = await TimeMinerGvFD3T.tokensToClaim.call(addressrGIgMTX, {from: accounts[2]});

		await expect(TimeMinerGvFD3T.preSaleFinished.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerCg0zjhC = await TimeMiner.new({from: accounts[2]});
		const uinthfMUaJS = BigInt("1731")
		const addressCXwNivK = accounts[4]
		const addressGSvAcDj = accounts[0]
		const uintCQCBNei = BigInt("1519")
		const uintfnnM44G = BigInt("1502")
		const uintqPRNpNS = BigInt("984")
		const uintQV1Xijh = BigInt("1656")
		const addressUdm3UtU = accounts[5]
		const addressBqFlbCM = accounts[0]
		const addresspxyhY0 = accounts[3]
		const boolQO5rPbf = await TimeMinerCg0zjhC.infoStableSystem.call({from: accounts[2]});
//		const booldDxcR5j = await TimeMinerCg0zjhC.transferFrom.call(addressGSvAcDj, addressCXwNivK, uinthfMUaJS, {from: accounts[4]});
//		const uintscKwylN = await TimeMinerCg0zjhC.preSale.call(uintCQCBNei, {from: accounts[1]});
//		const uint256mI8OZkX = await TimeMinerCg0zjhC.setPrizeFromNewAddress.call(uintqPRNpNS, uintfnnM44G, {from: accounts[4]});
//		const boolKae10p = await TimeMinerCg0zjhC.transfer.call(addressUdm3UtU, uintQV1Xijh, {from: accounts[0]});
//		const uint256c3DCHv4 = await TimeMinerCg0zjhC.allowance.call(addresspxyhY0, addressBqFlbCM, {from: accounts[4]});

		await expect(TimeMinerCg0zjhC.transferFrom.call(addressGSvAcDj, addressCXwNivK, uinthfMUaJS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinertW4CDD4 = await TimeMiner.new({from: accounts[5]});
		const addressdMims0 = accounts[4]
		const addressPX8v3Iv = accounts[4]
		const uintsRFVA1N = BigInt("984")
		const uintvdkbTmh = BigInt("1808")
		const addressRo9NQAs = accounts[1]
		const boolxerxzK0 = await TimeMinertW4CDD4.isWhitelisted.call(addressdMims0, {from: accounts[4]});
		const uint256vLG3XiX = await TimeMinertW4CDD4.balanceOf.call(addressPX8v3Iv, {from: accounts[1]});
		const uint256KmtmiTg = await TimeMinertW4CDD4.setPrizeFromNewAddress.call(uintvdkbTmh, uintsRFVA1N, {from: accounts[5]});
//		const uint256zJKhIju = await TimeMinertW4CDD4.allInfoFor.call(addressRo9NQAs, {from: accounts[2]});

		assert.equal(boolxerxzK0, false)
		assert.equal(uint256vLG3XiX, BigInt("0"))
		await expect(TimeMinertW4CDD4.allInfoFor.call(addressRo9NQAs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerXm93G6L = await TimeMiner.new({from: accounts[2]});
		const addressvJYTjHt = accounts[4]
		const boolp0KAYPz = true
		const addressCnD2SP = accounts[4]
		const addressfyZSTVb = accounts[0]
		const uint256wbBHTXi = await TimeMinerXm93G6L.balanceOf.call(addressvJYTjHt, {from: accounts[0]});
		const addressByoGBF4 = await TimeMinerXm93G6L.whitelist.call(addressCnD2SP, boolp0KAYPz, {from: accounts[2]});
		const uint256QxaXain = await TimeMinerXm93G6L.balanceOf.call(addressfyZSTVb, {from: accounts[4]});

		assert.equal(uint256QxaXain, BigInt("0"))
		assert.equal(uint256wbBHTXi, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinermYENcj5 = await TimeMiner.new({from: accounts[4]});
		const addressEYA38Nh = accounts[0]
		const uintC7lPPgU = BigInt("1846")
		const uinty20ZbW = BigInt("291")
		const uintWo143wa = BigInt("297")
		const uintUiA0TLV = BigInt("515")
		const uint256bhz0GFx = await TimeMinermYENcj5.balanceOf.call(addressEYA38Nh, {from: accounts[3]});
		const boolEbHKTh = await TimeMinermYENcj5.infoStableSystem.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256GrTdfiH = await TimeMinermYENcj5.totalSupply.call({from: accounts[0]});
		const uint256UTjzZyY = await TimeMinermYENcj5.changePreSalePriceIfToHigh.call(uintC7lPPgU, {from: accounts[4]});
//		const uint256xVVykLY = await TimeMinermYENcj5.setPrizeFromNewAddress.call(uintWo143wa, uinty20ZbW, {from: accounts[3]});
//		const uint256yC0cV8Q = await TimeMinermYENcj5.changePreSalePriceIfToHigh.call(uintUiA0TLV, {from: accounts[4]});

		assert.equal(uint256GrTdfiH, BigInt("24000000"))
		assert.equal(uint256bhz0GFx, BigInt("0"))
		await expect(TimeMinermYENcj5.setPrizeFromNewAddress.call(uintWo143wa, uinty20ZbW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerCg0zjhC = await TimeMiner.new({from: accounts[2]});
		const uint2DFCNL = BigInt("1519")
		const uintHzcdPra = BigInt("1502")
		const uinta6zMOXT = BigInt("984")
		const uint4aeM0n = BigInt("1656")
		const addresspGzODcf = accounts[5]
		const addresseNPJA6z = accounts[0]
		const addressEJElLV = accounts[3]
		const boolQO5rPbf = await TimeMinerCg0zjhC.infoStableSystem.call({from: accounts[2]});
//		const uintscKwylN = await TimeMinerCg0zjhC.preSale.call(uint2DFCNL, {from: accounts[1]});
//		const uint256mI8OZkX = await TimeMinerCg0zjhC.setPrizeFromNewAddress.call(uinta6zMOXT, uintHzcdPra, {from: accounts[4]});
//		const boolKae10p = await TimeMinerCg0zjhC.transfer.call(addresspGzODcf, uint4aeM0n, {from: accounts[0]});
//		const uint256c3DCHv4 = await TimeMinerCg0zjhC.allowance.call(addressEJElLV, addresseNPJA6z, {from: accounts[4]});

		await expect(TimeMinerCg0zjhC.preSale.call(uint2DFCNL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerGvFD3T = await TimeMiner.new({from: accounts[4]});
		const uinttvtRVfO = BigInt("2004")
		const addressPkCbH2 = "0x0000000000000000000000000000000000000001"
		const addressb5gX1uv = accounts[0]
//		const boolNSLqoHt = await TimeMinerGvFD3T.transfer.call(addressPkCbH2, uinttvtRVfO, {from: accounts[2]});
//		await TimeMinerGvFD3T.preSaleFinished.call({from: accounts[4]});
//		const uint256E1kstlG = await TimeMinerGvFD3T.tokensToClaim.call(addressb5gX1uv, {from: accounts[3]});

		await expect(TimeMinerGvFD3T.transfer.call(addressPkCbH2, uinttvtRVfO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMiner4UgRP4 = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressaDenhdp = accounts[4]
		const uintuATrxDX = BigInt("123")
		const uintY30Hy4I = BigInt("487")
		const uint256pYiEO33 = await TimeMiner4UgRP4.totalSupply.call({from: accounts[1]});
		const uint256gCdijel = await TimeMiner4UgRP4.allInfoFor.call(addressaDenhdp, {from: accounts[1]});
		const uint256v6sTGQW = await TimeMiner4UgRP4.setPrizeFromNewAddress.call(uintY30Hy4I, uintuATrxDX, {from: accounts[2]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerGvFD3T = await TimeMiner.new({from: accounts[4]});
		const uintCR0NWQ = BigInt("399")
		const addresshZ0XclN = accounts[5]
		const boolkDKKW3B = true
		const addresshkxlApw = accounts[4]
		const uinty5QsXet = BigInt("543")
		const booll1IqQgQ = await TimeMinerGvFD3T.transfer.call(addresshZ0XclN, uintCR0NWQ, {from: accounts[4]});
		const uint256ZHhHkI7 = await TimeMinerGvFD3T.totalSupply.call({from: accounts[3]});
		const addressN8IgVi = await TimeMinerGvFD3T.whitelist.call(addresshkxlApw, boolkDKKW3B, {from: accounts[4]});
//		const uintXlFWbb = await TimeMinerGvFD3T.preSale.call(uinty5QsXet, {from: accounts[1]});

		assert.equal(booll1IqQgQ, true)
		assert.equal(uint256ZHhHkI7, BigInt("24000000"))
		await expect(TimeMinerGvFD3T.preSale.call(uinty5QsXet, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})