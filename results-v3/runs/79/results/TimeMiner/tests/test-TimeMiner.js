const TimeMiner = artifacts.require("TimeMiner");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('TimeMiner', (accounts) => {
	it('test for TimeMiner', async () => {
		const TimeMinerIWuVDzi = await TimeMiner.new({from: accounts[2]});
		const addressMpKOr3A = accounts[3]
		const uintySeOSA = BigInt("1450")
		const booleauq9Wq = false
		const addressyIrv4N9 = accounts[1]
		const boolqnayS8J = await TimeMinerIWuVDzi.isWhitelisted.call(addressMpKOr3A, {from: "0x0000000000000000000000000000000000000001"});
		const uint2561i0r5t = await TimeMinerIWuVDzi.changePreSalePriceIfToHigh.call(uintySeOSA, {from: accounts[3]});
		const addressJFjy5um = await TimeMinerIWuVDzi.whitelist.call(addressyIrv4N9, booleauq9Wq, {from: accounts[0]});

		assert.equal(boolqnayS8J, false)
		await expect(TimeMinerIWuVDzi.changePreSalePriceIfToHigh.call(uintySeOSA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerOEp8lS4 = await TimeMiner.new({from: accounts[2]});
		const addressuiCjG9 = accounts[0]
		const addressezLzBsk = accounts[0]
		const uintTQ4wYEL = BigInt("1743")
		const uintMxbsGQF = BigInt("154")
		const boolm0CitPd = false
		const addresscTtB78F = accounts[5]
		const uint25688edYF = await TimeMinerOEp8lS4.allInfoFor.call(addressuiCjG9, {from: accounts[0]});
		const uint256xh3FZ3a = await TimeMinerOEp8lS4.tokensToClaim.call(addressezLzBsk, {from: accounts[3]});
		await TimeMinerOEp8lS4.preSaleFinished.call({from: accounts[2]});
		const uintrbtUdLQ = await TimeMinerOEp8lS4.preSale.call(uintTQ4wYEL, {from: accounts[4]});
		const uintgqR2wxb = await TimeMinerOEp8lS4.preSale.call(uintMxbsGQF, {from: accounts[0]});
		const addressDp8bh4D = await TimeMinerOEp8lS4.whitelist.call(addresscTtB78F, boolm0CitPd, {from: accounts[4]});

		await expect(TimeMinerOEp8lS4.allInfoFor.call(addressuiCjG9, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerOZfUA7 = await TimeMiner.new({from: accounts[4]});
		const uintAc0R3CL = BigInt("1288")
		const address0NB3q3 = accounts[1]
		const uintdYfBcbC = BigInt("657")
		const addressjW3Psav = "0x0000000000000000000000000000000000000001"
		const addressifT685j = accounts[3]
		const boolXyIULkv = await TimeMinerOZfUA7.approve.call(address0NB3q3, uintAc0R3CL, {from: "0x0000000000000000000000000000000000000001"});
		const boolnAPfXXN = await TimeMinerOZfUA7.transferFrom.call(addressifT685j, addressjW3Psav, uintdYfBcbC, {from: accounts[2]});

		assert.equal(boolXyIULkv, true)
		await expect(TimeMinerOZfUA7.transferFrom.call(addressifT685j, addressjW3Psav, uintdYfBcbC, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerDcA13h4 = await TimeMiner.new({from: accounts[1]});
		const uintxRSrzxU = BigInt("1063")
		const uintJInbRiO = BigInt("220")
		const boolR6aMiTm = true
		const addressCw8qVRo = accounts[0]
		const addressoKm2wz = accounts[5]
		const uint256pQq64fo = await TimeMinerDcA13h4.setPrizeFromNewAddress.call(uintJInbRiO, uintxRSrzxU, {from: accounts[4]});
		const boolIdOJebB = await TimeMinerDcA13h4.setStableCoinSystem.call(boolR6aMiTm, {from: accounts[4]});
		const boolnNLj2V = await TimeMinerDcA13h4.isWhitelisted.call(addressCw8qVRo, {from: accounts[5]});
		const uint256zAoYQwl = await TimeMinerDcA13h4.balanceOf.call(addressoKm2wz, {from: accounts[4]});

		await expect(TimeMinerDcA13h4.setPrizeFromNewAddress.call(uintJInbRiO, uintxRSrzxU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerirN00Ye = await TimeMiner.new({from: accounts[0]});
		const addressrqPCBuP = accounts[2]
		const uintCkaPUu6 = BigInt("1412")
		const addressnBrgSMk = accounts[1]
		const uintR37ZPUs = BigInt("1386")
		const uint256FNUPLzh = await TimeMinerirN00Ye.balanceOf.call(addressrqPCBuP, {from: accounts[0]});
		const boolufemI1Y = await TimeMinerirN00Ye.approve.call(addressnBrgSMk, uintCkaPUu6, {from: accounts[3]});
		const boolYpMgK21 = await TimeMinerirN00Ye.infoStableSystem.call({from: accounts[3]});
		const uintSlJKueQ = await TimeMinerirN00Ye.preSale.call(uintR37ZPUs, {from: accounts[3]});
		const boolC834pgg = await TimeMinerirN00Ye.infoStableSystem.call({from: accounts[3]});

		assert.equal(boolufemI1Y, true)
		assert.equal(uint256FNUPLzh, BigInt("0"))
		await expect(TimeMinerirN00Ye.preSale.call(uintR37ZPUs, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerfYwqdI3 = await TimeMiner.new({from: accounts[4]});
		const uintpiTXVm5 = BigInt("1889")
		const uintL4pWJMO = BigInt("1371")
		const uintfyH49hn = BigInt("638")
		const addressS9TYrsA = accounts[2]
		const addressGKdatg3 = "0x0000000000000000000000000000000000000001"
		await TimeMinerfYwqdI3.preSaleFinished.call({from: accounts[1]});
		const uint256A1wDnBM = await TimeMinerfYwqdI3.setPrizeFromNewAddress.call(uintL4pWJMO, uintpiTXVm5, {from: accounts[1]});
		const boolootEArq = await TimeMinerfYwqdI3.transferFrom.call(addressGKdatg3, addressS9TYrsA, uintfyH49hn, {from: accounts[1]});

		await expect(TimeMinerfYwqdI3.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerYhNYceP = await TimeMiner.new({from: accounts[4]});
		const addressB8zq9W9 = accounts[3]
		const boolwgzjRJ1 = true
		const addressUM9hpUb = accounts[2]
		const boolVqQDcYM = await TimeMinerYhNYceP.isWhitelisted.call(addressB8zq9W9, {from: accounts[1]});
		const addressz1rB5M = await TimeMinerYhNYceP.whitelist.call(addressUM9hpUb, boolwgzjRJ1, {from: accounts[1]});

		assert.equal(boolVqQDcYM, false)
		await expect(TimeMinerYhNYceP.whitelist.call(addressUM9hpUb, boolwgzjRJ1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerDcA13h4 = await TimeMiner.new({from: accounts[1]});
		const boolr8fEnnl = true
		const uinteLiha7t = BigInt("1063")
		const uintvvWyh4H = BigInt("220")
		const boolR6aMiTm = true
		const addressAEiAQmy = accounts[1]
		const addresshoLP5RS = accounts[5]
		const booldJXETM6 = await TimeMinerDcA13h4.setStableCoinSystem.call(boolr8fEnnl, {from: accounts[3]});
		const uint256pQq64fo = await TimeMinerDcA13h4.setPrizeFromNewAddress.call(uintvvWyh4H, uinteLiha7t, {from: accounts[4]});
		const boolIdOJebB = await TimeMinerDcA13h4.setStableCoinSystem.call(boolR6aMiTm, {from: accounts[4]});
		const boolnNLj2V = await TimeMinerDcA13h4.isWhitelisted.call(addressAEiAQmy, {from: accounts[5]});
		const uint256zAoYQwl = await TimeMinerDcA13h4.balanceOf.call(addresshoLP5RS, {from: accounts[4]});

		await expect(TimeMinerDcA13h4.setStableCoinSystem.call(boolr8fEnnl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerOZfUA7 = await TimeMiner.new({from: accounts[4]});
		const addresskOcJCM5 = accounts[3]
		const addressm4HyCGK = accounts[5]
		const uintjCbmoy0 = BigInt("1288")
		const addressHPTyFCi = accounts[1]
		const uintocsUAYy = BigInt("657")
		const addresspyY8nx = "0x0000000000000000000000000000000000000001"
		const addressGNJtqS = accounts[3]
		const uint256XLXFoyH = await TimeMinerOZfUA7.allowance.call(addressm4HyCGK, addresskOcJCM5, {from: accounts[3]});
		const boolXyIULkv = await TimeMinerOZfUA7.approve.call(addressHPTyFCi, uintjCbmoy0, {from: "0x0000000000000000000000000000000000000001"});
		const boolnAPfXXN = await TimeMinerOZfUA7.transferFrom.call(addressGNJtqS, addresspyY8nx, uintocsUAYy, {from: accounts[2]});

		assert.equal(boolXyIULkv, true)
		assert.equal(uint256XLXFoyH, BigInt("0"))
		await expect(TimeMinerOZfUA7.transferFrom.call(addressGNJtqS, addresspyY8nx, uintocsUAYy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerIWuVDzi = await TimeMiner.new({from: accounts[2]});
		const addressevmKaD = accounts[3]
		const uint9i3AyH = BigInt("661")
		const address1knjPp = accounts[1]
		const addressptIXiXt = accounts[3]
		const uintm3AZGSO = BigInt("1483")
		const booleauq9Wq = false
		const addressHEyXD56 = accounts[1]
		const boolqnayS8J = await TimeMinerIWuVDzi.isWhitelisted.call(addressevmKaD, {from: "0x0000000000000000000000000000000000000001"});
		const boolbD01LCd = await TimeMinerIWuVDzi.transfer.call(address1knjPp, uint9i3AyH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oCze3gw = await TimeMinerIWuVDzi.tokensToClaim.call(addressptIXiXt, {from: accounts[1]});
		const boolvNS8gMM = await TimeMinerIWuVDzi.infoStableSystem.call({from: accounts[2]});
		const uint2561i0r5t = await TimeMinerIWuVDzi.changePreSalePriceIfToHigh.call(uintm3AZGSO, {from: accounts[3]});
		const addressJFjy5um = await TimeMinerIWuVDzi.whitelist.call(addressHEyXD56, booleauq9Wq, {from: accounts[0]});

		assert.equal(boolqnayS8J, false)
		await expect(TimeMinerIWuVDzi.transfer.call(address1knjPp, uint9i3AyH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerD8kBWvw = await TimeMiner.new({from: accounts[1]});
		const uintoKFLvy3 = BigInt("721")
		const addressAScVXVg = accounts[2]
		const uintFrR17tp = BigInt("462")
		const addresszn7d99V = "0x0000000000000000000000000000000000000002"
		const addressIwWBcT5 = accounts[4]
		const uintS0dlMIU = BigInt("832")
		const addressCCS7Y3u = accounts[3]
		const boolIU6FYaA = true
		const addressg17RWc = accounts[3]
		const boolyvYk6eV = await TimeMinerD8kBWvw.transfer.call(addressAScVXVg, uintoKFLvy3, {from: accounts[1]});
		const boolWcEq8fv = await TimeMinerD8kBWvw.transfer.call(addresszn7d99V, uintFrR17tp, {from: accounts[3]});
		const uint256AvCf5H = await TimeMinerD8kBWvw.balanceOf.call(addressIwWBcT5, {from: accounts[3]});
		const uintPRhSKJj = await TimeMinerD8kBWvw.preSale.call(uintS0dlMIU, {from: accounts[1]});
		const uint256BgwRQ4R = await TimeMinerD8kBWvw.tokensToClaim.call(addressCCS7Y3u, {from: accounts[2]});
		const booleiyxmYS = await TimeMinerD8kBWvw.setStableCoinSystem.call(boolIU6FYaA, {from: accounts[1]});
		const boolMxeTS08 = await TimeMinerD8kBWvw.isWhitelisted.call(addressg17RWc, {from: accounts[4]});

		assert.equal(boolyvYk6eV, true)
		await expect(TimeMinerD8kBWvw.transfer.call(addresszn7d99V, uintFrR17tp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerpr3ixc = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const address8Y2Kuv = accounts[2]
		const uintUCBeAcC = BigInt("1917")
		const addressNixGEn0 = accounts[1]
		const uint256rAMtqAl = await TimeMinerpr3ixc.tokensToClaim.call(address8Y2Kuv, {from: accounts[1]});
		const bool8RhCSH = await TimeMinerpr3ixc.approve.call(addressNixGEn0, uintUCBeAcC, {from: accounts[0]});
		await TimeMinerpr3ixc.preSaleFinished.call({from: accounts[4]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerlUPkHi6 = await TimeMiner.new({from: accounts[1]});
		const uintALhXhW = BigInt("1530")
		const address0j8ZAT = accounts[3]
		const boolpt1l12Z = await TimeMinerlUPkHi6.infoStableSystem.call({from: accounts[3]});
		await TimeMinerlUPkHi6.preSaleFinished.call({from: accounts[1]});
		const bool4Ahs6J = await TimeMinerlUPkHi6.transfer.call(address0j8ZAT, uintALhXhW, {from: accounts[3]});

		await expect(TimeMinerlUPkHi6.preSaleFinished.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})