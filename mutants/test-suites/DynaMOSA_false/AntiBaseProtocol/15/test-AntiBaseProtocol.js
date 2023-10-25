const AntiBaseProtocol = artifacts.require("AntiBaseProtocol");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('AntiBaseProtocol', (accounts) => {
	it('test for AntiBaseProtocol', async () => {
		const stringthYzeBj = "6T9y2H28YqD5UfGv3LqFExebGZwGu"
		const stringPfHDanw = "OwpN6QFH5ZMtYKeU2FD4qnkY"
		const uintL1evNfY = BigInt("45")
		const AntiBaseProtocolJMMY5fM = await AntiBaseProtocol.new(stringthYzeBj, stringPfHDanw, uintL1evNfY, {from: accounts[2]});
		const uintYKfijmg = BigInt("744")
		const addressGVDJz2R = "0x0000000000000000000000000000000000000001"
		const uintdy2ip5b = BigInt("1427")
		const addresspo9h828 = accounts[2]
		const uintw3DyrF = BigInt("1522")
		const addressNvPnIW = "0x0000000000000000000000000000000000000001"
		const addressjHr6Y0p = accounts[0]
		const addressC28e07g = await AntiBaseProtocolJMMY5fM._burn.call(addressGVDJz2R, uintYKfijmg, {from: accounts[4]});
		const addresswqprN8k = await AntiBaseProtocolJMMY5fM._mint.call(addresspo9h828, uintdy2ip5b, {from: accounts[0]});
		const boolPCHYAUq = await AntiBaseProtocolJMMY5fM.transferFrom.call(addressjHr6Y0p, addressNvPnIW, uintw3DyrF, {from: accounts[2]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocola8wHnxU = await AntiBaseProtocol.new({from: accounts[1]});
		const uintARasiWz = BigInt("1452")
		const addressKk3eBE = accounts[5]
		const uintwxJSYIP = BigInt("1133")
		const addressZ5HHI9g = "0x0000000000000000000000000000000000000001"
		const addressDbrjjQ9 = accounts[0]
//		await AntiBaseProtocola8wHnxU.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint8oDvNnkP = await AntiBaseProtocola8wHnxU.decimals.call({from: accounts[5]});
//		const addressBtDj40O = await AntiBaseProtocola8wHnxU._mint.call(addressKk3eBE, uintARasiWz, {from: accounts[2]});
//		const boolVlqIG6N = await AntiBaseProtocola8wHnxU.transfer.call(addressZ5HHI9g, uintwxJSYIP, {from: accounts[2]});
//		const addresstf8zNtd = await AntiBaseProtocola8wHnxU.transferOwnership.call(addressDbrjjQ9, {from: accounts[1]});

		await expect(AntiBaseProtocola8wHnxU.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZXswUPE = await AntiBaseProtocol.new({from: accounts[0]});
		const uintCu67aEI = BigInt("379")
		const addressI7Ir7SI = accounts[3]
		const addressyOq1xsp = accounts[0]
		const uintWl87MX2 = BigInt("993")
		const addressml7qODB = accounts[1]
		const addressKyUOCOU = "0x0000000000000000000000000000000000000001"
		const uint256Tzdgjst = await AntiBaseProtocolZXswUPE.totalSupply.call({from: accounts[1]});
//		await AntiBaseProtocolZXswUPE.renounceOwnership.call({from: accounts[2]});
//		const uint256dUsaL8 = await AntiBaseProtocolZXswUPE.burn.call(uintCu67aEI, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256EPwmB2j = await AntiBaseProtocolZXswUPE.allowance.call(addressyOq1xsp, addressI7Ir7SI, {from: accounts[0]});
//		const addresspijEfem = await AntiBaseProtocolZXswUPE._approve.call(addressKyUOCOU, addressml7qODB, uintWl87MX2, {from: accounts[1]});

		assert.equal(uint256Tzdgjst, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolZXswUPE.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocols626yg = await AntiBaseProtocol.new({from: accounts[3]});
		const uinty3miJzS = BigInt("992")
		const addressa8f7X5H = accounts[2]
		const uintAoH7PX3 = BigInt("1148")
		const uintcdAuHCy = BigInt("244")
//		const addressdRZgpaj = await AntiBaseProtocols626yg._mint.call(addressa8f7X5H, uinty3miJzS, {from: accounts[2]});
//		const uint256ONuiEpd = await AntiBaseProtocols626yg.burn.call(uintAoH7PX3, {from: accounts[1]});
//		const uint256meQHOiF = await AntiBaseProtocols626yg.burn.call(uintcdAuHCy, {from: accounts[4]});
//		const uint256SefZ70Q = await AntiBaseProtocols626yg.totalSupply.call({from: accounts[4]});
//		const stringmTTNQbW = await AntiBaseProtocols626yg.symbol.call({from: accounts[5]});

		await expect(AntiBaseProtocols626yg._mint.call(addressa8f7X5H, uinty3miJzS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolxIsgMP6 = await AntiBaseProtocol.new({from: accounts[5]});
		const uintuV2W9y1 = BigInt("2021")
		const addressYgHGEtG = accounts[2]
		const addressqtwGYSp = accounts[4]
		const uintV6gPxLi = BigInt("303")
		const uintN3Tu8Rq = BigInt("53")
		const addressGZ2GWgo = accounts[4]
		const addressO8sd83 = accounts[3]
//		const uint256Oq0xkJa = await AntiBaseProtocolxIsgMP6.burn.call(uintuV2W9y1, {from: accounts[4]});
//		await AntiBaseProtocolxIsgMP6.requestGas.call({from: accounts[3]});
//		const addressyJd6CYI = await AntiBaseProtocolxIsgMP6.owner.call({from: accounts[0]});
//		const uint256tSqRsTa = await AntiBaseProtocolxIsgMP6.allowance.call(addressqtwGYSp, addressYgHGEtG, {from: accounts[5]});
//		const uint256rZBQUEM = await AntiBaseProtocolxIsgMP6.findRewardFee.call(uintV6gPxLi, {from: accounts[2]});
//		const boolPdkimYk = await AntiBaseProtocolxIsgMP6.transferFrom.call(addressO8sd83, addressGZ2GWgo, uintN3Tu8Rq, {from: accounts[4]});

		await expect(AntiBaseProtocolxIsgMP6.burn.call(uintuV2W9y1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSolYfKd = await AntiBaseProtocol.new({from: accounts[5]});
		const uintlwdxgrh = BigInt("849")
		const addressrVYIbP4 = accounts[0]
		const uintPHB2PFq = BigInt("959")
		const addressHDa1y7x = accounts[1]
		const stringqvsWVLK = await AntiBaseProtocolSolYfKd.symbol.call({from: accounts[0]});
//		await AntiBaseProtocolSolYfKd.renounceOwnership.call({from: accounts[3]});
//		const addressmNO9tOk = await AntiBaseProtocolSolYfKd.burnFrom.call(addressrVYIbP4, uintlwdxgrh, {from: accounts[1]});
//		const addressZjOGIsm = await AntiBaseProtocolSolYfKd.burnFrom.call(addressHDa1y7x, uintPHB2PFq, {from: accounts[5]});

		assert.equal(stringqvsWVLK, "ABASE")
		await expect(AntiBaseProtocolSolYfKd.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSolYfKd = await AntiBaseProtocol.new({from: accounts[5]});
		const uintUTVjBnm = BigInt("849")
		const addressDIBbiCg = accounts[0]
		const uintvmttcW = BigInt("959")
		const addressTrEwqmw = accounts[1]
		const stringqvsWVLK = await AntiBaseProtocolSolYfKd.symbol.call({from: accounts[0]});
//		const addressmNO9tOk = await AntiBaseProtocolSolYfKd.burnFrom.call(addressDIBbiCg, uintUTVjBnm, {from: accounts[1]});
//		const addressZjOGIsm = await AntiBaseProtocolSolYfKd.burnFrom.call(addressTrEwqmw, uintvmttcW, {from: accounts[5]});

		assert.equal(stringqvsWVLK, "ABASE")
		await expect(AntiBaseProtocolSolYfKd.burnFrom.call(addressDIBbiCg, uintUTVjBnm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolgUENbm = await AntiBaseProtocol.new({from: "0x0000000000000000000000000000000000000001"});
		const uint7aHtvj = BigInt("1032")
		const uintBkw6xxH = BigInt("1179")
		const addressmtYpJTO = accounts[3]
		const uintcD9iLdT = BigInt("472")
		const addresscN715c8 = "0x0000000000000000000000000000000000000001"
		const uint8jiriUnD = await AntiBaseProtocolgUENbm.decimals.call({from: accounts[4]});
		const uint256RWyIj6C = await AntiBaseProtocolgUENbm.burn.call(uint7aHtvj, {from: accounts[5]});
		const addressCVAbtbo = await AntiBaseProtocolgUENbm._mint.call(addressmtYpJTO, uintBkw6xxH, {from: accounts[0]});
		const addressAouQaA = await AntiBaseProtocolgUENbm._mint.call(addresscN715c8, uintcD9iLdT, {from: accounts[5]});
		const boolcmJvEOY = await AntiBaseProtocolgUENbm.isOwner.call({from: accounts[1]});
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoljotqwqQ = await AntiBaseProtocol.new({from: accounts[3]});
		const uintwJCFfPj = BigInt("1941")
		const addressp3czNPW = accounts[3]
		const uintW4uHimw = BigInt("1610")
		const uintHENXZl1 = BigInt("1306")
//		const addressYRExpqz = await AntiBaseProtocoljotqwqQ.burnFrom.call(addressp3czNPW, uintwJCFfPj, {from: accounts[0]});
//		const stringcopNT4u = await AntiBaseProtocoljotqwqQ.symbol.call({from: accounts[3]});
//		const uint256gRvJsSc = await AntiBaseProtocoljotqwqQ.findBurnFee.call(uintW4uHimw, {from: accounts[3]});
//		const uint256B1NXsiF = await AntiBaseProtocoljotqwqQ.burn.call(uintHENXZl1, {from: accounts[4]});

		await expect(AntiBaseProtocoljotqwqQ.burnFrom.call(addressp3czNPW, uintwJCFfPj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolSolYfKd = await AntiBaseProtocol.new({from: accounts[5]});
		const uintIf2lJZk = BigInt("849")
		const addresstkxIKzB = accounts[0]
		const uintLLQkurq = BigInt("592")
		const addressfypCTnS = accounts[0]
		const uintmvhgmD = BigInt("959")
		const addressqERFWEJ = accounts[1]
		const stringN1FIz5x = await AntiBaseProtocolSolYfKd.name.call({from: accounts[1]});
		const stringqvsWVLK = await AntiBaseProtocolSolYfKd.symbol.call({from: accounts[0]});
//		await AntiBaseProtocolSolYfKd.renounceOwnership.call({from: accounts[3]});
//		const addressmNO9tOk = await AntiBaseProtocolSolYfKd.burnFrom.call(addresstkxIKzB, uintIf2lJZk, {from: accounts[1]});
//		const addressWDtNQOc = await AntiBaseProtocolSolYfKd._mint.call(addressfypCTnS, uintLLQkurq, {from: accounts[1]});
//		const addressZjOGIsm = await AntiBaseProtocolSolYfKd.burnFrom.call(addressqERFWEJ, uintmvhgmD, {from: accounts[5]});

		assert.equal(stringN1FIz5x, "https://t.me/antibaseprotocol")
		assert.equal(stringqvsWVLK, "ABASE")
		await expect(AntiBaseProtocolSolYfKd.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZXswUPE = await AntiBaseProtocol.new({from: accounts[0]});
		const uintZBh6GhO = BigInt("1997")
		const uintcch1cLl = BigInt("379")
		const addressMk6Oazp = accounts[3]
		const addressSL7ioqr = accounts[0]
		const uintugb15QI = BigInt("993")
		const addressujE0CuW = accounts[1]
		const addressUaqTpJL = "0x0000000000000000000000000000000000000001"
		const uint256Tzdgjst = await AntiBaseProtocolZXswUPE.totalSupply.call({from: accounts[1]});
		const uint256xVD0Qdx = await AntiBaseProtocolZXswUPE.findBurnFee.call(uintZBh6GhO, {from: accounts[1]});
//		await AntiBaseProtocolZXswUPE.renounceOwnership.call({from: accounts[2]});
//		const uint256dUsaL8 = await AntiBaseProtocolZXswUPE.burn.call(uintcch1cLl, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256EPwmB2j = await AntiBaseProtocolZXswUPE.allowance.call(addressSL7ioqr, addressMk6Oazp, {from: accounts[0]});
//		const addresspijEfem = await AntiBaseProtocolZXswUPE._approve.call(addressUaqTpJL, addressujE0CuW, uintugb15QI, {from: accounts[1]});

		assert.equal(uint256Tzdgjst, BigInt("31250000000000000000"))
		assert.equal(uint256xVD0Qdx, BigInt("300"))
		await expect(AntiBaseProtocolZXswUPE.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZXswUPE = await AntiBaseProtocol.new({from: accounts[0]});
		const addressDzur5qi = accounts[4]
		const uintNhk0jA = BigInt("1775")
		const addresswEOomzv = accounts[3]
		const addressO48djeE = accounts[0]
		const uinthU6Igu0 = BigInt("993")
		const addressCGljpsu = accounts[1]
		const addressCfTsSG2 = "0x0000000000000000000000000000000000000001"
		const uint256Tzdgjst = await AntiBaseProtocolZXswUPE.totalSupply.call({from: accounts[1]});
		const uint256GCdb8qI = await AntiBaseProtocolZXswUPE.balanceOf.call(addressDzur5qi, {from: accounts[1]});
//		await AntiBaseProtocolZXswUPE.renounceOwnership.call({from: accounts[2]});
//		const uint256dUsaL8 = await AntiBaseProtocolZXswUPE.burn.call(uintNhk0jA, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256EPwmB2j = await AntiBaseProtocolZXswUPE.allowance.call(addressO48djeE, addresswEOomzv, {from: accounts[0]});
//		const addresspijEfem = await AntiBaseProtocolZXswUPE._approve.call(addressCfTsSG2, addressCGljpsu, uinthU6Igu0, {from: accounts[1]});

		assert.equal(uint256GCdb8qI, BigInt("0"))
		assert.equal(uint256Tzdgjst, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolZXswUPE.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZXswUPE = await AntiBaseProtocol.new({from: accounts[0]});
		const uinthCeGYbo = BigInt("1997")
		const uintUURul5k = BigInt("379")
		const uinttrEPgDZ = BigInt("993")
		const addressmoaOMj1 = accounts[1]
		const addressynWiPxt = "0x0000000000000000000000000000000000000001"
		const uint256Tzdgjst = await AntiBaseProtocolZXswUPE.totalSupply.call({from: accounts[1]});
		const addressLrYfdJZ = await AntiBaseProtocolZXswUPE.owner.call({from: accounts[1]});
		const uint256xVD0Qdx = await AntiBaseProtocolZXswUPE.findBurnFee.call(uinthCeGYbo, {from: accounts[1]});
//		await AntiBaseProtocolZXswUPE.renounceOwnership.call({from: accounts[2]});
//		const uint256dUsaL8 = await AntiBaseProtocolZXswUPE.burn.call(uintUURul5k, {from: "0x0000000000000000000000000000000000000001"});
//		const addresspijEfem = await AntiBaseProtocolZXswUPE._approve.call(addressynWiPxt, addressmoaOMj1, uinttrEPgDZ, {from: accounts[1]});
//		const uint8ahFPv0J = await AntiBaseProtocolZXswUPE.decimals.call({from: accounts[4]});

		assert.equal(addressLrYfdJZ, 0x17603dD18Bb9aAa3eBa265305C980D7B99A15307)
		assert.equal(uint256Tzdgjst, BigInt("31250000000000000000"))
		assert.equal(uint256xVD0Qdx, BigInt("300"))
		await expect(AntiBaseProtocolZXswUPE.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZXswUPE = await AntiBaseProtocol.new({from: accounts[0]});
		const uinttumTqvV = BigInt("1997")
		const uintM6Tns8N = BigInt("1142")
		const addressWM3W0eb = accounts[2]
		const uintiOr1Nr5 = BigInt("393")
		const uintCD5BCZu = BigInt("993")
		const addressf1bPcpv = accounts[1]
		const addressBSVmb3S = "0x0000000000000000000000000000000000000001"
		const uint256Tzdgjst = await AntiBaseProtocolZXswUPE.totalSupply.call({from: accounts[1]});
		const uint256xVD0Qdx = await AntiBaseProtocolZXswUPE.findBurnFee.call(uinttumTqvV, {from: accounts[1]});
//		const boolwCnoTvU = await AntiBaseProtocolZXswUPE.decreaseAllowance.call(addressWM3W0eb, uintM6Tns8N, {from: accounts[4]});
//		await AntiBaseProtocolZXswUPE.renounceOwnership.call({from: accounts[2]});
//		const uint256dUsaL8 = await AntiBaseProtocolZXswUPE.burn.call(uintiOr1Nr5, {from: "0x0000000000000000000000000000000000000001"});
//		const addresspijEfem = await AntiBaseProtocolZXswUPE._approve.call(addressBSVmb3S, addressf1bPcpv, uintCD5BCZu, {from: accounts[1]});

		assert.equal(uint256Tzdgjst, BigInt("31250000000000000000"))
		assert.equal(uint256xVD0Qdx, BigInt("300"))
		await expect(AntiBaseProtocolZXswUPE.decreaseAllowance.call(addressWM3W0eb, uintM6Tns8N, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZXswUPE = await AntiBaseProtocol.new({from: accounts[0]});
		const uintFkbI07q = BigInt("1997")
		const uintwalHWvs = BigInt("379")
		const uintilnGZl2 = BigInt("1016")
		const addresshrFdA23 = accounts[1]
		const addressFbZ9Mk8 = "0x0000000000000000000000000000000000000001"
		const uint8Yg8wvpC = await AntiBaseProtocolZXswUPE.decimals.call({from: accounts[1]});
		const uint256Tzdgjst = await AntiBaseProtocolZXswUPE.totalSupply.call({from: accounts[1]});
		const addressLrYfdJZ = await AntiBaseProtocolZXswUPE.owner.call({from: accounts[1]});
		const uint256xVD0Qdx = await AntiBaseProtocolZXswUPE.findBurnFee.call(uintFkbI07q, {from: accounts[1]});
//		await AntiBaseProtocolZXswUPE.renounceOwnership.call({from: accounts[2]});
//		const uint256dUsaL8 = await AntiBaseProtocolZXswUPE.burn.call(uintwalHWvs, {from: "0x0000000000000000000000000000000000000001"});
//		const addresspijEfem = await AntiBaseProtocolZXswUPE._approve.call(addressFbZ9Mk8, addresshrFdA23, uintilnGZl2, {from: accounts[1]});
//		await AntiBaseProtocolZXswUPE.requestGas.call({from: accounts[2]});
//		const uint8ahFPv0J = await AntiBaseProtocolZXswUPE.decimals.call({from: accounts[4]});

		assert.equal(addressLrYfdJZ, 0x17603dD18Bb9aAa3eBa265305C980D7B99A15307)
		assert.equal(uint256Tzdgjst, BigInt("31250000000000000000"))
		assert.equal(uint256xVD0Qdx, BigInt("300"))
		assert.equal(uint8Yg8wvpC, BigInt("18"))
		await expect(AntiBaseProtocolZXswUPE.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolMQHAfAp = await AntiBaseProtocol.new({from: accounts[2]});
		const uintB4TqWdf = BigInt("1598")
		const addressLKOlCqi = accounts[2]
		const uintpyaBr4u = BigInt("1595")
		const uintyEevAr2 = BigInt("1695")
		const addressVObsFb8 = accounts[0]
		const uintvzgJnKG = BigInt("1260")
		const addresscNyves = accounts[0]
		const boolwCMlFw2 = await AntiBaseProtocolMQHAfAp.approve.call(addressLKOlCqi, uintB4TqWdf, {from: accounts[2]});
		const uint256sLDiWpq = await AntiBaseProtocolMQHAfAp.burn.call(uintpyaBr4u, {from: accounts[2]});
//		const addressIcH0Ch3 = await AntiBaseProtocolMQHAfAp.burnFrom.call(addressVObsFb8, uintyEevAr2, {from: accounts[3]});
//		const boolaPf1L4y = await AntiBaseProtocolMQHAfAp.approve.call(addresscNyves, uintvzgJnKG, {from: accounts[4]});

		assert.equal(boolwCMlFw2, true)
		await expect(AntiBaseProtocolMQHAfAp.burnFrom.call(addressVObsFb8, uintyEevAr2, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZXswUPE = await AntiBaseProtocol.new({from: accounts[0]});
		const uintfJJoc5b = BigInt("51")
		const addressNWm3U3Z = accounts[4]
		const uintwr32B7n = BigInt("1997")
		const uintts4IkyT = BigInt("379")
		const addressivbRm6M = accounts[4]
		const addressEF5BH8o = accounts[0]
		const uintDkz1BVs = BigInt("993")
		const addressMdWBUsF = accounts[1]
		const addressmiShhY = "0x0000000000000000000000000000000000000001"
		const uint256Tzdgjst = await AntiBaseProtocolZXswUPE.totalSupply.call({from: accounts[1]});
//		const bool3RgCZk = await AntiBaseProtocolZXswUPE.transfer.call(addressNWm3U3Z, uintfJJoc5b, {from: accounts[2]});
//		const uint256xVD0Qdx = await AntiBaseProtocolZXswUPE.findBurnFee.call(uintwr32B7n, {from: accounts[1]});
//		await AntiBaseProtocolZXswUPE.renounceOwnership.call({from: accounts[2]});
//		const uint256dUsaL8 = await AntiBaseProtocolZXswUPE.burn.call(uintts4IkyT, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256EPwmB2j = await AntiBaseProtocolZXswUPE.allowance.call(addressEF5BH8o, addressivbRm6M, {from: accounts[0]});
//		const addresspijEfem = await AntiBaseProtocolZXswUPE._approve.call(addressmiShhY, addressMdWBUsF, uintDkz1BVs, {from: accounts[1]});

		assert.equal(uint256Tzdgjst, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolZXswUPE.transfer.call(addressNWm3U3Z, uintfJJoc5b, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZXswUPE = await AntiBaseProtocol.new({from: accounts[0]});
		const addressDef12lb = accounts[2]
		const addresswTZKwE = accounts[1]
		const uintJfITZVx = BigInt("470")
		const uintjUApO2o = BigInt("908")
		const addressVgsWRzR = accounts[3]
		const addressES66Rtw = accounts[3]
		const addressL9hMrwf = "0x0000000000000000000000000000000000000001"
		const uintiL1qW8v = BigInt("1997")
		const uinttdZZll9 = BigInt("379")
		const uintT7upkTS = BigInt("993")
		const addressD221ZUl = accounts[1]
		const addressz5LABV5 = "0x0000000000000000000000000000000000000000"
		const uint256Tzdgjst = await AntiBaseProtocolZXswUPE.totalSupply.call({from: accounts[1]});
		const uint256Oa7vWZ = await AntiBaseProtocolZXswUPE.allowance.call(addresswTZKwE, addressDef12lb, {from: accounts[0]});
		const uint256lSWhgTX = await AntiBaseProtocolZXswUPE.findBurnFee.call(uintJfITZVx, {from: accounts[5]});
//		const addressdUQPfu = await AntiBaseProtocolZXswUPE.burnFrom.call(addressVgsWRzR, uintjUApO2o, {from: accounts[3]});
//		const uint256FfMccsu = await AntiBaseProtocolZXswUPE.allowance.call(addressL9hMrwf, addressES66Rtw, {from: accounts[1]});
//		const addressLrYfdJZ = await AntiBaseProtocolZXswUPE.owner.call({from: accounts[1]});
//		const uint8wuZvPWQ = await AntiBaseProtocolZXswUPE.decimals.call({from: accounts[2]});
//		const uint256xVD0Qdx = await AntiBaseProtocolZXswUPE.findBurnFee.call(uintiL1qW8v, {from: accounts[1]});
//		await AntiBaseProtocolZXswUPE.renounceOwnership.call({from: accounts[2]});
//		const uint256dUsaL8 = await AntiBaseProtocolZXswUPE.burn.call(uinttdZZll9, {from: "0x0000000000000000000000000000000000000001"});
//		const addresspijEfem = await AntiBaseProtocolZXswUPE._approve.call(addressz5LABV5, addressD221ZUl, uintT7upkTS, {from: accounts[1]});
//		const uint8ahFPv0J = await AntiBaseProtocolZXswUPE.decimals.call({from: accounts[4]});

		assert.equal(uint256Oa7vWZ, BigInt("0"))
		assert.equal(uint256Tzdgjst, BigInt("31250000000000000000"))
		assert.equal(uint256lSWhgTX, BigInt("75"))
		await expect(AntiBaseProtocolZXswUPE.burnFrom.call(addressVgsWRzR, uintjUApO2o, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZXswUPE = await AntiBaseProtocol.new({from: accounts[0]});
		const uinttX8Ttyp = BigInt("528")
		const addressZwYo8Ja = accounts[5]
		const uintdVnuAk = BigInt("470")
		const uintPycIz1Q = BigInt("1781")
		const addressEq6Rqr = accounts[3]
		const uintuaD4m5A = BigInt("268")
		const addressxz7RzLb = accounts[1]
		const uintFvTVwCr = BigInt("1997")
		const uintqT15T1k = BigInt("379")
		const uintcM4IxO2 = BigInt("993")
		const addressD6jXjnD = accounts[1]
		const addressALlVI7l = "0x0000000000000000000000000000000000000001"
		const uint256Tzdgjst = await AntiBaseProtocolZXswUPE.totalSupply.call({from: accounts[1]});
		const uint8KtlmOqw = await AntiBaseProtocolZXswUPE.decimals.call({from: accounts[1]});
		const boolCBGCgSi = await AntiBaseProtocolZXswUPE.increaseAllowance.call(addressZwYo8Ja, uinttX8Ttyp, {from: accounts[4]});
		const uint256lSWhgTX = await AntiBaseProtocolZXswUPE.findBurnFee.call(uintdVnuAk, {from: accounts[5]});
//		const addressdUQPfu = await AntiBaseProtocolZXswUPE.burnFrom.call(addressEq6Rqr, uintPycIz1Q, {from: accounts[3]});
//		const addressLrYfdJZ = await AntiBaseProtocolZXswUPE.owner.call({from: accounts[1]});
//		await AntiBaseProtocolZXswUPE.requestGas.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolzqhZl4 = await AntiBaseProtocolZXswUPE.approve.call(addressxz7RzLb, uintuaD4m5A, {from: accounts[4]});
//		const uint256xVD0Qdx = await AntiBaseProtocolZXswUPE.findBurnFee.call(uintFvTVwCr, {from: accounts[1]});
//		await AntiBaseProtocolZXswUPE.renounceOwnership.call({from: accounts[2]});
//		const uint256dUsaL8 = await AntiBaseProtocolZXswUPE.burn.call(uintqT15T1k, {from: "0x0000000000000000000000000000000000000001"});
//		const addresspijEfem = await AntiBaseProtocolZXswUPE._approve.call(addressALlVI7l, addressD6jXjnD, uintcM4IxO2, {from: accounts[1]});
//		const uint8ahFPv0J = await AntiBaseProtocolZXswUPE.decimals.call({from: accounts[4]});

		assert.equal(boolCBGCgSi, true)
		assert.equal(uint256Tzdgjst, BigInt("31250000000000000000"))
		assert.equal(uint256lSWhgTX, BigInt("75"))
		assert.equal(uint8KtlmOqw, BigInt("18"))
		await expect(AntiBaseProtocolZXswUPE.burnFrom.call(addressEq6Rqr, uintPycIz1Q, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolZXswUPE = await AntiBaseProtocol.new({from: accounts[0]});
		const uintXPVz1I = BigInt("1184")
		const addressGp0XrVI = accounts[5]
		const addressSCYBlAF = accounts[3]
		const uintcfxhUl = BigInt("51")
		const addressO5inIY = accounts[4]
		const uintPcF5qId = BigInt("1997")
		const uintWOR5Zs3 = BigInt("379")
		const address6qUL6T = accounts[4]
		const addressThQvUR5 = accounts[0]
		const uintAotaM9N = BigInt("993")
		const addressyJwzSTF = accounts[1]
		const addressiIpe3hB = "0x0000000000000000000000000000000000000001"
//		const boolxxFciCH = await AntiBaseProtocolZXswUPE.transferFrom.call(addressSCYBlAF, addressGp0XrVI, uintXPVz1I, {from: accounts[2]});
//		const uint256Tzdgjst = await AntiBaseProtocolZXswUPE.totalSupply.call({from: accounts[1]});
//		const bool3RgCZk = await AntiBaseProtocolZXswUPE.transfer.call(addressO5inIY, uintcfxhUl, {from: accounts[2]});
//		const uint256xVD0Qdx = await AntiBaseProtocolZXswUPE.findBurnFee.call(uintPcF5qId, {from: accounts[1]});
//		await AntiBaseProtocolZXswUPE.renounceOwnership.call({from: accounts[2]});
//		const uint256dUsaL8 = await AntiBaseProtocolZXswUPE.burn.call(uintWOR5Zs3, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256EPwmB2j = await AntiBaseProtocolZXswUPE.allowance.call(addressThQvUR5, address6qUL6T, {from: accounts[0]});
//		const addresspijEfem = await AntiBaseProtocolZXswUPE._approve.call(addressiIpe3hB, addressyJwzSTF, uintAotaM9N, {from: accounts[1]});

		await expect(AntiBaseProtocolZXswUPE.transferFrom.call(addressSCYBlAF, addressGp0XrVI, uintXPVz1I, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocoljDFv3U8 = await AntiBaseProtocol.new({from: accounts[4]});
		const uintVnNhzWK = BigInt("618")
		const uinthFGwPw = BigInt("1735")
		const addressnHzVwLE = accounts[4]
		const uintsGhQdzI = BigInt("328")
		const addresssLKVqi = accounts[5]
		const uintGyEZ9MD = BigInt("1982")
		const addressHHHQNE = accounts[3]
		const uint256CbSDmfg = await AntiBaseProtocoljDFv3U8.findRewardFee.call(uintVnNhzWK, {from: accounts[4]});
//		const addressS9gVD4 = await AntiBaseProtocoljDFv3U8._burnFrom.call(addressnHzVwLE, uinthFGwPw, {from: accounts[2]});
//		await AntiBaseProtocoljDFv3U8.requestGas.call({from: accounts[1]});
//		const addressD2Xb9G0 = await AntiBaseProtocoljDFv3U8._mint.call(addresssLKVqi, uintsGhQdzI, {from: accounts[3]});
//		const boolrR2SZw2 = await AntiBaseProtocoljDFv3U8.approve.call(addressHHHQNE, uintGyEZ9MD, {from: accounts[3]});

		assert.equal(uint256CbSDmfg, BigInt("35"))
		await expect(AntiBaseProtocoljDFv3U8._burnFrom.call(addressnHzVwLE, uinthFGwPw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWGAN7u = await AntiBaseProtocol.new({from: accounts[0]});
		const addressDPkf9IE = accounts[0]
		const addressUUVak0K = accounts[3]
		const addressHOU0wsK = accounts[2]
		const uintcgXV7pG = BigInt("2027")
		const addressrlKZtai = accounts[5]
		const uintD0UacI = BigInt("317")
		const addresskRZYC6m = accounts[1]
		const addressl5rbi6f = accounts[0]
		const uint256v0eh1CA = await AntiBaseProtocolWGAN7u.balanceOf.call(addressDPkf9IE, {from: accounts[0]});
		const uint256PuyaReZ = await AntiBaseProtocolWGAN7u.allowance.call(addressHOU0wsK, addressUUVak0K, {from: "0x0000000000000000000000000000000000000001"});
		const boolHu2ywW = await AntiBaseProtocolWGAN7u.transfer.call(addressrlKZtai, uintcgXV7pG, {from: accounts[0]});
//		const addressS8LGDm4 = await AntiBaseProtocolWGAN7u._mint.call(addresskRZYC6m, uintD0UacI, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256tj8beoU = await AntiBaseProtocolWGAN7u.balanceOf.call(addressl5rbi6f, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolHu2ywW, true)
		assert.equal(uint256PuyaReZ, BigInt("0"))
		assert.equal(uint256v0eh1CA, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolWGAN7u._mint.call(addresskRZYC6m, uintD0UacI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWGAN7u = await AntiBaseProtocol.new({from: accounts[0]});
		const addressLpa7kYs = accounts[0]
		const addresssJY0ppL = accounts[3]
		const addressqqgQed5 = accounts[2]
		const uintIpe0r35 = BigInt("807")
		const uintYpkXQe = BigInt("736")
		const uintbFIk3iQ = BigInt("2027")
		const addressTNL6FCG = accounts[5]
		const uintuC4aIIY = BigInt("522")
		const uintQ2Wmsy = BigInt("566")
		const addressrjh6UjU = accounts[3]
		const addressBTcDDxs = accounts[0]
		const uintxjvE6Jp = BigInt("662")
		const addressN2oZkRX = accounts[1]
		const addressO8njQmI = accounts[1]
		const addresst7LnApQ = accounts[2]
		const uint256v0eh1CA = await AntiBaseProtocolWGAN7u.balanceOf.call(addressLpa7kYs, {from: accounts[0]});
		const uint256PuyaReZ = await AntiBaseProtocolWGAN7u.allowance.call(addressqqgQed5, addresssJY0ppL, {from: "0x0000000000000000000000000000000000000001"});
		const stringOIf6r4a = await AntiBaseProtocolWGAN7u.symbol.call({from: accounts[4]});
		const uint256yD5NIPR = await AntiBaseProtocolWGAN7u.findRewardFee.call(uintIpe0r35, {from: accounts[0]});
		const uint256tVmoA2f = await AntiBaseProtocolWGAN7u.findRewardFee.call(uintYpkXQe, {from: accounts[0]});
		const boolHu2ywW = await AntiBaseProtocolWGAN7u.transfer.call(addressTNL6FCG, uintbFIk3iQ, {from: accounts[0]});
		const uint256g8Eqj2x = await AntiBaseProtocolWGAN7u.findRewardFee.call(uintuC4aIIY, {from: accounts[4]});
//		const boolXvfEKK = await AntiBaseProtocolWGAN7u.transferFrom.call(addressBTcDDxs, addressrjh6UjU, uintQ2Wmsy, {from: accounts[1]});
//		const uint256kV9CZFy = await AntiBaseProtocolWGAN7u.findBurnFee.call(uintxjvE6Jp, {from: accounts[2]});
//		const uint256tj8beoU = await AntiBaseProtocolWGAN7u.balanceOf.call(addressN2oZkRX, {from: "0x0000000000000000000000000000000000000001"});
//		const addressdzzZK0 = await AntiBaseProtocolWGAN7u._transferOwnership.call(addressO8njQmI, {from: accounts[4]});
//		const addressl0AYpzB = await AntiBaseProtocolWGAN7u.transferOwnership.call(addresst7LnApQ, {from: accounts[3]});
//		const addressnn3PVtK = await AntiBaseProtocolWGAN7u.owner.call({from: accounts[3]});

		assert.equal(boolHu2ywW, true)
		assert.equal(stringOIf6r4a, "ABASE")
		assert.equal(uint256PuyaReZ, BigInt("0"))
		assert.equal(uint256g8Eqj2x, BigInt("30"))
		assert.equal(uint256tVmoA2f, BigInt("40"))
		assert.equal(uint256v0eh1CA, BigInt("31250000000000000000"))
		assert.equal(uint256yD5NIPR, BigInt("45"))
		await expect(AntiBaseProtocolWGAN7u.transferFrom.call(addressBTcDDxs, addressrjh6UjU, uintQ2Wmsy, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWGAN7u = await AntiBaseProtocol.new({from: accounts[0]});
		const addressDyXXsyf = accounts[0]
		const addresssvco74l = accounts[4]
		const addresspL0SKDP = accounts[4]
		const addresswDeF3h2 = accounts[0]
		const addressVTNT9N3 = accounts[3]
		const addresslV2iMjj = accounts[2]
		const uints1LIMRb = BigInt("945")
		const addressV3kgF8 = accounts[3]
		const uintoIRpVE = BigInt("807")
		const uintpqJrFQI = BigInt("736")
		const uintyFakIZ = BigInt("62")
		const addressAJ6UMoy = accounts[5]
		const uintqgfYfiv = BigInt("458")
		const uintMEXlNz = BigInt("566")
		const addressRBSdmnP = accounts[3]
		const addressO4Eu9Rv = accounts[0]
		const uintA10qeCY = BigInt("662")
		const uintAB2SAIc = BigInt("1692")
		const addressaxdZSC1 = accounts[5]
		const addressbNPSzB = accounts[1]
		const addressibzeh8 = accounts[1]
		const addressZTUPzM8 = accounts[2]
		const uint256v0eh1CA = await AntiBaseProtocolWGAN7u.balanceOf.call(addressDyXXsyf, {from: accounts[0]});
		const addresshGLXb2Z = await AntiBaseProtocolWGAN7u.transferOwnership.call(addresssvco74l, {from: accounts[0]});
		const uint256hczzqSn = await AntiBaseProtocolWGAN7u.allowance.call(addresswDeF3h2, addresspL0SKDP, {from: accounts[3]});
		const uint256PuyaReZ = await AntiBaseProtocolWGAN7u.allowance.call(addresslV2iMjj, addressVTNT9N3, {from: "0x0000000000000000000000000000000000000001"});
//		const addressTEsGtoE = await AntiBaseProtocolWGAN7u.burnFrom.call(addressV3kgF8, uints1LIMRb, {from: "0x0000000000000000000000000000000000000001"});
//		const stringOIf6r4a = await AntiBaseProtocolWGAN7u.symbol.call({from: accounts[4]});
//		const uint256yD5NIPR = await AntiBaseProtocolWGAN7u.findRewardFee.call(uintoIRpVE, {from: accounts[0]});
//		const uint256tVmoA2f = await AntiBaseProtocolWGAN7u.findRewardFee.call(uintpqJrFQI, {from: accounts[0]});
//		const boolHu2ywW = await AntiBaseProtocolWGAN7u.transfer.call(addressAJ6UMoy, uintyFakIZ, {from: accounts[0]});
//		const uint256g8Eqj2x = await AntiBaseProtocolWGAN7u.findRewardFee.call(uintqgfYfiv, {from: accounts[4]});
//		const boolXvfEKK = await AntiBaseProtocolWGAN7u.transferFrom.call(addressO4Eu9Rv, addressRBSdmnP, uintMEXlNz, {from: accounts[1]});
//		const uint256kV9CZFy = await AntiBaseProtocolWGAN7u.findBurnFee.call(uintA10qeCY, {from: accounts[2]});
//		const boolneAUxSS = await AntiBaseProtocolWGAN7u.transfer.call(addressaxdZSC1, uintAB2SAIc, {from: accounts[4]});
//		const uint256tj8beoU = await AntiBaseProtocolWGAN7u.balanceOf.call(addressbNPSzB, {from: "0x0000000000000000000000000000000000000001"});
//		const addressdzzZK0 = await AntiBaseProtocolWGAN7u._transferOwnership.call(addressibzeh8, {from: accounts[4]});
//		const addressl0AYpzB = await AntiBaseProtocolWGAN7u.transferOwnership.call(addressZTUPzM8, {from: accounts[3]});
//		const addressnn3PVtK = await AntiBaseProtocolWGAN7u.owner.call({from: accounts[3]});

		assert.equal(uint256PuyaReZ, BigInt("0"))
		assert.equal(uint256hczzqSn, BigInt("0"))
		assert.equal(uint256v0eh1CA, BigInt("31250000000000000000"))
		await expect(AntiBaseProtocolWGAN7u.burnFrom.call(addressV3kgF8, uints1LIMRb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for AntiBaseProtocol', async () => {
		const AntiBaseProtocolWGAN7u = await AntiBaseProtocol.new({from: accounts[0]});
		const uintZDoPsBi = BigInt("1085")
		const addressSCeNhrW = accounts[6]
//		await AntiBaseProtocolWGAN7u.renounceOwnership.call({from: accounts[0]});
//		const boolHu2ywW = await AntiBaseProtocolWGAN7u.transfer.call(addressSCeNhrW, uintZDoPsBi, {from: accounts[0]});

		await expect(AntiBaseProtocolWGAN7u.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})