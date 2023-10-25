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
		const TimeMinerLcF4J17 = await TimeMiner.new({from: "0x0000000000000000000000000000000000000001"});
		const addressPNXtjAv = accounts[1]
		const addressI40qBp7 = accounts[5]
		const addressrjDUROs = accounts[1]
		const uintDzngZNQ = BigInt("857")
		const uintsftIfW1 = BigInt("1622")
		const uint256j7wgeyP = await TimeMinerLcF4J17.allowance.call(addressI40qBp7, addressPNXtjAv, {from: accounts[4]});
		const uint256eTus5sr = await TimeMinerLcF4J17.tokensToClaim.call(addressrjDUROs, {from: accounts[3]});
		const uint256Wy3Fr2R = await TimeMinerLcF4J17.setPrizeFromNewAddress.call(uintsftIfW1, uintDzngZNQ, {from: accounts[5]});
		await TimeMinerLcF4J17.preSaleFinished.call({from: accounts[2]});
	});

	it('test for TimeMiner', async () => {
		const TimeMinerOZfUA7 = await TimeMiner.new({from: accounts[4]});
		const uintGZnAwKd = BigInt("1288")
		const addresswQGXPJS = accounts[2]
		const uintvZyAHA6 = BigInt("349")
		const addressY41oZpm = "0x0000000000000000000000000000000000000001"
		const addressaOfLrYo = accounts[4]
		const boolXyIULkv = await TimeMinerOZfUA7.approve.call(addresswQGXPJS, uintGZnAwKd, {from: "0x0000000000000000000000000000000000000001"});
		const boolvG3S0gf = await TimeMinerOZfUA7.transfer.call(addressY41oZpm, uintvZyAHA6, {from: accounts[0]});
		const uint256ShjUaua = await TimeMinerOZfUA7.balanceOf.call(addressaOfLrYo, {from: accounts[2]});

		assert.equal(boolXyIULkv, true)
		await expect(TimeMinerOZfUA7.transfer.call(addressY41oZpm, uintvZyAHA6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerOZfUA7 = await TimeMiner.new({from: accounts[4]});
		const uintHuQxzMc = BigInt("1288")
		const addressDWt3USL = accounts[1]
		const addressGFj6MG = accounts[5]
		const addressepQT5E = accounts[1]
		const boolXyIULkv = await TimeMinerOZfUA7.approve.call(addressDWt3USL, uintHuQxzMc, {from: "0x0000000000000000000000000000000000000001"});
		const uint256kFLvIUU = await TimeMinerOZfUA7.allowance.call(addressepQT5E, addressGFj6MG, {from: accounts[3]});

		assert.equal(boolXyIULkv, true)
		assert.equal(uint256kFLvIUU, BigInt("0"))
	});

	it('test for TimeMiner', async () => {
		const TimeMinerM1XqRZh = await TimeMiner.new({from: accounts[0]});
		const boolk8NtlyN = true
		const uintgdbjly = BigInt("213")
		const uintKRQn7mw = BigInt("602")
		const addressWstwMO6 = accounts[4]
		await TimeMinerM1XqRZh.preSaleFinished.call({from: accounts[0]});
		const boolD6kSdYv = await TimeMinerM1XqRZh.setStableCoinSystem.call(boolk8NtlyN, {from: accounts[2]});
		const uint256iGW4SRv = await TimeMinerM1XqRZh.changePreSalePriceIfToHigh.call(uintgdbjly, {from: accounts[4]});
		const boolZaXIgHv = await TimeMinerM1XqRZh.approve.call(addressWstwMO6, uintKRQn7mw, {from: accounts[2]});

		await expect(TimeMinerM1XqRZh.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerOZfUA7 = await TimeMiner.new({from: accounts[4]});
		const uintpgecLTO = BigInt("657")
		const addressVuTkRKf = "0x00000000000000000000000000000000000000-1"
		const addresseGLsaoh = accounts[3]
		const boolnAPfXXN = await TimeMinerOZfUA7.transferFrom.call(addresseGLsaoh, addressVuTkRKf, uintpgecLTO, {from: accounts[2]});
		const boolBflyLM0 = await TimeMinerOZfUA7.infoStableSystem.call({from: accounts[4]});

		await expect(TimeMinerOZfUA7.transferFrom.call(addresseGLsaoh, addressVuTkRKf, uintpgecLTO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerDcA13h4 = await TimeMiner.new({from: accounts[1]});
		const uintP0g3asi = BigInt("1670")
		const address7Kkd3t = accounts[0]
		const boolR6aMiTm = true
		const addressKr9vJLl = "0x0000000000000000000000000000000000000001"
		const uintTVisoH9 = BigInt("1105")
		const addressOCam7d8 = accounts[2]
		const addresstAD8HT = accounts[2]
		const boolQosJv4E = await TimeMinerDcA13h4.transfer.call(address7Kkd3t, uintP0g3asi, {from: accounts[1]});
		const boolIdOJebB = await TimeMinerDcA13h4.setStableCoinSystem.call(boolR6aMiTm, {from: accounts[4]});
		const uint256C79YDE = await TimeMinerDcA13h4.tokensToClaim.call(addressKr9vJLl, {from: accounts[3]});
		const boolSKPVWgz = await TimeMinerDcA13h4.transferFrom.call(addresstAD8HT, addressOCam7d8, uintTVisoH9, {from: accounts[0]});

		assert.equal(boolQosJv4E, true)
		await expect(TimeMinerDcA13h4.setStableCoinSystem.call(boolR6aMiTm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerwKEy2Ih = await TimeMiner.new({from: accounts[4]});
		const uintcglv1m9 = BigInt("784")
		const addresseBmYpbF = accounts[4]
		const uintq54V5B = BigInt("1706")
		const uintp6RrMcd = BigInt("1602")
		const addressUdmrriV = accounts[4]
		const boolzFhQetk = false
		const boole6X2mRB = await TimeMinerwKEy2Ih.approve.call(addresseBmYpbF, uintcglv1m9, {from: accounts[1]});
		const uint256FGqcSh2 = await TimeMinerwKEy2Ih.setPrizeFromNewAddress.call(uintp6RrMcd, uintq54V5B, {from: accounts[4]});
		const uint256PTE29r6 = await TimeMinerwKEy2Ih.tokensToClaim.call(addressUdmrriV, {from: accounts[3]});
		const boolCRJrWbB = await TimeMinerwKEy2Ih.setStableCoinSystem.call(boolzFhQetk, {from: accounts[3]});

		assert.equal(boole6X2mRB, true)
		assert.equal(uint256PTE29r6, BigInt("12000000"))
		await expect(TimeMinerwKEy2Ih.setStableCoinSystem.call(boolzFhQetk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerirN00Ye = await TimeMiner.new({from: accounts[0]});
		const addressTj9isux = accounts[3]
		const boolrD3n4jG = true
		const boolhYWijx = true
		const uintu3Zw52 = BigInt("1384")
		const uint256FNUPLzh = await TimeMinerirN00Ye.balanceOf.call(addressTj9isux, {from: accounts[0]});
		const boolxHoKxHg = await TimeMinerirN00Ye.setStableCoinSystem.call(boolrD3n4jG, {from: accounts[0]});
		const bool47yDat = await TimeMinerirN00Ye.setStableCoinSystem.call(boolhYWijx, {from: accounts[2]});
		const uintSlJKueQ = await TimeMinerirN00Ye.preSale.call(uintu3Zw52, {from: accounts[3]});

		assert.equal(uint256FNUPLzh, BigInt("0"))
		await expect(TimeMinerirN00Ye.setStableCoinSystem.call(boolhYWijx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerYhNYceP = await TimeMiner.new({from: accounts[4]});
		const addressnfAUUUu = accounts[4]
		const addressinzrnXa = accounts[1]
		const uintPlrZ0JO = BigInt("919")
		const uintWZ1izhT = BigInt("1277")
		const addressYjx10cj = accounts[2]
		const boolwgzjRJ1 = true
		const addressC08Gz05 = accounts[4]
		const uint256vsrwQnz = await TimeMinerYhNYceP.allowance.call(addressinzrnXa, addressnfAUUUu, {from: "0x0000000000000000000000000000000000000001"});
		const uint256fFJ907J = await TimeMinerYhNYceP.changePreSalePriceIfToHigh.call(uintPlrZ0JO, {from: accounts[4]});
		const boolTthJ1Je = await TimeMinerYhNYceP.approve.call(addressYjx10cj, uintWZ1izhT, {from: accounts[2]});
		const addressz1rB5M = await TimeMinerYhNYceP.whitelist.call(addressC08Gz05, boolwgzjRJ1, {from: accounts[1]});

		assert.equal(boolTthJ1Je, true)
		assert.equal(uint256vsrwQnz, BigInt("0"))
		await expect(TimeMinerYhNYceP.whitelist.call(addressC08Gz05, boolwgzjRJ1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for TimeMiner', async () => {
		const TimeMinerM1XqRZh = await TimeMiner.new({from: accounts[0]});
		const addressnQPgYfl = accounts[5]
		const boolpeKdwu9 = true
		const addressLfkvd7j = accounts[1]
		const uintEvLQA8 = BigInt("1059")
		const addressHggs8K = accounts[1]
		const addressdk4AXE4 = accounts[1]
		const uintB5Rhv0i = BigInt("1444")
		const addressnz7xLQ = accounts[1]
		const addressIF1XcSo = accounts[4]
		const addressG4mcgX8 = accounts[4]
		const addressewnrDcK = "0x0000000000000000000000000000000000000001"
		const addressjWqxNZ3 = accounts[5]
		const addressR4gqfzT = accounts[4]
		const addressVg6OYgL = "0x0000000000000000000000000000000000000001"
		const boolaH8k5y = false
		const addressmqH4kzO = accounts[4]
		const addresso9vqaNt = accounts[2]
		const addressXDO5E59 = accounts[3]
		const uintUdy7FPx = BigInt("1728")
		const addressSiEvFzT = accounts[1]
		const addressJFkcbW3 = accounts[3]
		const addressKTiOBp = accounts[3]
		const uintxXsdfKL = BigInt("1454")
		const addressHqK3Twu = accounts[5]
		await TimeMinerM1XqRZh.preSaleFinished.call({from: accounts[0]});
		const boolNVeS4aG = await TimeMinerM1XqRZh.isWhitelisted.call(addressnQPgYfl, {from: accounts[2]});
		const addressWV9ysrc = await TimeMinerM1XqRZh.whitelist.call(addressLfkvd7j, boolpeKdwu9, {from: accounts[0]});
		const booluSEf8X9 = await TimeMinerM1XqRZh.infoStableSystem.call({from: accounts[4]});
		const boolh5Bb8n = await TimeMinerM1XqRZh.transferFrom.call(addressdk4AXE4, addressHggs8K, uintEvLQA8, {from: accounts[4]});
		const uinta3pfWf5 = await TimeMinerM1XqRZh.preSale.call(uintB5Rhv0i, {from: accounts[1]});
		const uint256EjaWtwp = await TimeMinerM1XqRZh.balanceOf.call(addressnz7xLQ, {from: accounts[3]});
		const uint256HV70qq3 = await TimeMinerM1XqRZh.tokensToClaim.call(addressIF1XcSo, {from: "0x0000000000000000000000000000000000000001"});
		const uint256RUsJ6qs = await TimeMinerM1XqRZh.allowance.call(addressewnrDcK, addressG4mcgX8, {from: accounts[3]});
		const uint256OoSiG4y = await TimeMinerM1XqRZh.balanceOf.call(addressjWqxNZ3, {from: "0x0000000000000000000000000000000000000001"});
		const uint256yrcUlf0 = await TimeMinerM1XqRZh.allowance.call(addressVg6OYgL, addressR4gqfzT, {from: accounts[2]});
		const addressBkNjty3 = await TimeMinerM1XqRZh.whitelist.call(addressmqH4kzO, boolaH8k5y, {from: "0x0000000000000000000000000000000000000001"});
		const uint256PyJnjvT = await TimeMinerM1XqRZh.allowance.call(addressXDO5E59, addresso9vqaNt, {from: accounts[1]});
		const boolS8bWOjC = await TimeMinerM1XqRZh.transfer.call(addressSiEvFzT, uintUdy7FPx, {from: accounts[3]});
		const uint256emAbDbp = await TimeMinerM1XqRZh.allowance.call(addressKTiOBp, addressJFkcbW3, {from: accounts[2]});
		const boolsZY3FYg = await TimeMinerM1XqRZh.approve.call(addressHqK3Twu, uintxXsdfKL, {from: accounts[0]});

		await expect(TimeMinerM1XqRZh.preSaleFinished.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})