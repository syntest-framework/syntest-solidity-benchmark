const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100aQHHiHn = await Token50X100.new({from: accounts[1]});
		const uintfTIHXk3 = BigInt("86")
		const stringeKfDcW2 = "Wy7awSzfGIncNRxcn5p5KlQ2mvEFwYLcbQlBCSfIoeYno4TriUYTjkCtSSqjJDwVkE5Ib1VSTEn"
		const stringUNZ5QEG = "htGf4W1MqHLc79AzqvhimhOTcJErCZoCqv9UmmhuLh9RWqZXxATpMIKSbMtnfRgTQUwg2dXtV1r2kpXsgsuiLYUvTTQ7Q7Y"
		const addressKHRtBoO = accounts[2]
		const addresssAWUeN3 = accounts[1]
		const boolNYFHnh7 = true
		const addressmD5Fgk4 = accounts[3]
		const addressn6TXdz = accounts[1]
		await Token50X100aQHHiHn.setSymbolNameDecimals.call(stringUNZ5QEG, stringeKfDcW2, uintfTIHXk3, {from: accounts[3]});
		await Token50X100aQHHiHn.setLinkingAddresses.call(addresssAWUeN3, addressKHRtBoO, {from: accounts[0]});
		await Token50X100aQHHiHn.setWhiteListReceivers.call(addressmD5Fgk4, boolNYFHnh7, {from: accounts[5]});
		await Token50X100aQHHiHn.release.call({from: accounts[3]});
		const uint256RmI48xh = await Token50X100aQHHiHn.balanceOf.call(addressn6TXdz, {from: accounts[0]});

		await expect(Token50X100aQHHiHn.setSymbolNameDecimals.call(stringUNZ5QEG, stringeKfDcW2, uintfTIHXk3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100gjhJJ6M = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const boolX7FrNP5 = false
		const addressKxEYDfY = accounts[4]
		const uintz1bpoW = BigInt("1970")
		const addressyXcHbZ = accounts[3]
		const addressYAQ9n8X = accounts[4]
		const addressWHphNKS = accounts[0]
		const uintY7akpo = BigInt("970")
		const addressgLxHk0a = "0x0000000000000000000000000000000000000001"
		const addressoICZfR = "0x0000000000000000000000000000000000000001"
		await Token50X100gjhJJ6M.setWhiteList.call(addressKxEYDfY, boolX7FrNP5, {from: "0x0000000000000000000000000000000000000001"});
		const booldCsWMUm = await Token50X100gjhJJ6M.approve.call(addressyXcHbZ, uintz1bpoW, {from: accounts[2]});
		await Token50X100gjhJJ6M.setLinkingAddresses.call(addressWHphNKS, addressYAQ9n8X, {from: accounts[3]});
		const boolawGsnmK = await Token50X100gjhJJ6M.transferFrom.call(addressoICZfR, addressgLxHk0a, uintY7akpo, {from: accounts[4]});
	});

	it('test for Token50X100', async () => {
		const Token50X1009992OY = await Token50X100.new({from: accounts[4]});
		const uintjyGc9D5 = BigInt("864")
		const uintim42H1Z = BigInt("917")
		const uintj33mH1 = BigInt("1836")
		const uintJcdvGo = BigInt("1712")
		const addresstrxBhUn = accounts[3]
		const uinttH9YpeZ = BigInt("277")
		const uintBNed9U4 = BigInt("1551")
		const addressEOiA8sX = accounts[1]
		const addresscvWqUhm = accounts[2]
		const uintji0JNp0 = BigInt("1827")
		const addressL9NlIms = accounts[3]
		const uintDM5UXHO = BigInt("901")
		const addressrmebS1C = accounts[2]
		const addressO45yfkK = accounts[1]
		const boolmHFDEj = await Token50X1009992OY.safeLock.call(uintim42H1Z, uintjyGc9D5, {from: accounts[1]});
		const boolBGvWXRe = await Token50X1009992OY.setVesting.call(addresstrxBhUn, uintJcdvGo, uintj33mH1, {from: accounts[5]});
		const boolrI9gbuY = await Token50X1009992OY._transfer.call(addresscvWqUhm, addressEOiA8sX, uintBNed9U4, uinttH9YpeZ, {from: accounts[0]});
		const booltohujkV = await Token50X1009992OY.transfer.call(addressL9NlIms, uintji0JNp0, {from: accounts[3]});
		const boolx9veYIv = await Token50X1009992OY.transferFrom.call(addressO45yfkK, addressrmebS1C, uintDM5UXHO, {from: accounts[1]});

		await expect(Token50X1009992OY.safeLock.call(uintim42H1Z, uintjyGc9D5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100GZh0Mde = await Token50X100.new({from: accounts[4]});
		const uintLCWtz44 = BigInt("204")
		const stringufN8bOl = "9luyyOUMTQUMxZ3dPc9EzS4AmfhKUL7bKtPgQerr8lIkB2ijUXyrJmvYda4O4w2m7NUIl4"
		const stringAKuEcDn = "fMoiuVlHhk4VwKtzs"
		const uintaWzysR = BigInt("141")
		const addresssbRXOvl = accounts[5]
		const uintaPqSWLP = BigInt("613")
		const uintxT73EYB = BigInt("1654")
		const addresswk2qiR4 = accounts[4]
		const addressCHANwIO = accounts[0]
		await Token50X100GZh0Mde.setSymbolNameDecimals.call(stringAKuEcDn, stringufN8bOl, uintLCWtz44, {from: accounts[4]});
		const boolhrZvOv = await Token50X100GZh0Mde.approve.call(addresssbRXOvl, uintaWzysR, {from: accounts[1]});
		const bool1ydJ3b = await Token50X100GZh0Mde._transfer.call(addressCHANwIO, addresswk2qiR4, uintxT73EYB, uintaPqSWLP, {from: accounts[1]});
		await Token50X100GZh0Mde.lock.call({from: accounts[4]});

		await expect(Token50X100GZh0Mde.setSymbolNameDecimals.call(stringAKuEcDn, stringufN8bOl, uintLCWtz44, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100r3KuzX2 = await Token50X100.new({from: accounts[0]});
		const addressNFCRUWw = accounts[4]
		const addressiptmbZH = accounts[1]
		const uintRqwjShV = BigInt("1697")
		const uintih52VRS = BigInt("1339")
		const uintiXohKYN = BigInt("1947")
		const addressXoRmi5s = "0x0000000000000000000000000000000000000001"
		await Token50X100r3KuzX2.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await Token50X100r3KuzX2.setTokenContract.call(addressNFCRUWw, {from: accounts[1]});
		const uint256ld3F8PT = await Token50X100r3KuzX2.balanceOf.call(addressiptmbZH, {from: "0x0000000000000000000000000000000000000001"});
		const boolZ2Tdbq0 = await Token50X100r3KuzX2.safeLock.call(uintih52VRS, uintRqwjShV, {from: accounts[1]});
		const booleKqCey = await Token50X100r3KuzX2.transfer.call(addressXoRmi5s, uintiXohKYN, {from: accounts[2]});

		await expect(Token50X100r3KuzX2.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100gNzIxoO = await Token50X100.new({from: accounts[1]});
		const uint0FuGlZ = BigInt("1190")
		const addressW512Y1U = accounts[4]
		const addressE07G8HQ = accounts[1]
		const uintbs2BYvz = BigInt("1411")
		const addressqWsnXH = "0x0000000000000000000000000000000000000001"
		const uintvxLcb20 = BigInt("1782")
		const addressxquXyn6 = accounts[4]
		const addressYM1Q8XY = accounts[4]
		const boolE9qklva = await Token50X100gNzIxoO.transferFrom.call(addressE07G8HQ, addressW512Y1U, uint0FuGlZ, {from: accounts[2]});
		const bools8i6R90 = await Token50X100gNzIxoO.approve.call(addressqWsnXH, uintbs2BYvz, {from: accounts[2]});
		const boolHPtD8Uv = await Token50X100gNzIxoO.issueTokens.call(addressYM1Q8XY, addressxquXyn6, uintvxLcb20, {from: accounts[1]});

		await expect(Token50X100gNzIxoO.transferFrom.call(addressE07G8HQ, addressW512Y1U, uint0FuGlZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100GZh0Mde = await Token50X100.new({from: accounts[4]});
		const addressuQcJeEa = accounts[3]
		const uintlLhn6a = BigInt("204")
		const stringufN8bOl = "9luyyOUMTQUMxZ3dPc9EzS4AmfhKUL7bKtPgQerr8lIkB2ijUXyrJmvYda4O4w2m7NUIl4"
		const stringAKuEcDn = "fMoiuVlHhk4VwKtzs"
		const uintzOW9Oct = BigInt("141")
		const addressFPB9yjQ = accounts[5]
		const uintU6eYgTq = BigInt("318")
		const uintj867Dv = BigInt("1470")
		const uintmiMTmKu = BigInt("613")
		const uinth18BK6Y = BigInt("1654")
		const addressYIdnGaH = accounts[4]
		const addressAftadSo = accounts[0]
		const uintZvxlQ16 = BigInt("1136")
		const addresssPhBRyP = accounts[3]
		const uint256Ob2E7Dy = await Token50X100GZh0Mde.balanceOf.call(addressuQcJeEa, {from: accounts[1]});
		await Token50X100GZh0Mde.setSymbolNameDecimals.call(stringAKuEcDn, stringufN8bOl, uintlLhn6a, {from: accounts[4]});
		const boolhrZvOv = await Token50X100GZh0Mde.approve.call(addressFPB9yjQ, uintzOW9Oct, {from: accounts[1]});
		const boolsSrRcBg = await Token50X100GZh0Mde.safeLock.call(uintj867Dv, uintU6eYgTq, {from: accounts[3]});
		const bool1ydJ3b = await Token50X100GZh0Mde._transfer.call(addressAftadSo, addressYIdnGaH, uinth18BK6Y, uintmiMTmKu, {from: accounts[1]});
		const booljXAXUpm = await Token50X100GZh0Mde.transfer.call(addresssPhBRyP, uintZvxlQ16, {from: accounts[1]});
		await Token50X100GZh0Mde.lock.call({from: accounts[4]});

		assert.equal(uint256Ob2E7Dy, BigInt("0"))
		await expect(Token50X100GZh0Mde.setSymbolNameDecimals.call(stringAKuEcDn, stringufN8bOl, uintlLhn6a, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100G5d0x5m = await Token50X100.new({from: accounts[1]});
		const uintU0Ag1lo = BigInt("465")
		const addressBtwddqS = accounts[3]
		const booldefZmHS = await Token50X100G5d0x5m.transfer.call(addressBtwddqS, uintU0Ag1lo, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100G5d0x5m.transfer.call(addressBtwddqS, uintU0Ag1lo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100G5d0x5m = await Token50X100.new({from: accounts[1]});
		const uintAaSFzII = BigInt("261")
		const addressySqoW2F = accounts[3]
		const booliJTZCrz = true
		const addressHdJpcCl = accounts[4]
		const addressbg5ZjMS = accounts[1]
		const addressYkwQ1nq = accounts[0]
		const boolQuwMja0 = await Token50X100G5d0x5m.decreaseApproval.call(addressySqoW2F, uintAaSFzII, {from: accounts[3]});
		await Token50X100G5d0x5m.setWhiteListReceivers.call(addressHdJpcCl, booliJTZCrz, {from: accounts[0]});
		await Token50X100G5d0x5m.setLinkingAddresses.call(addressYkwQ1nq, addressbg5ZjMS, {from: accounts[4]});

		assert.equal(boolQuwMja0, true)
		await expect(Token50X100G5d0x5m.setWhiteListReceivers.call(addressHdJpcCl, booliJTZCrz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100G5d0x5m = await Token50X100.new({from: accounts[1]});
		const boolh9Xb3MQ = true
		const addressL6QQvyz = accounts[0]
		const uintvJqhMmQ = BigInt("425")
		const addresskbVtjE4 = accounts[3]
		const uint7qoMhp = BigInt("1185")
		const addressf3kuX3g = accounts[0]
		const uintiWU9Mg0 = BigInt("1774")
		const uintcnl26B2 = BigInt("570")
		const addressjEHvhh = accounts[2]
		await Token50X100G5d0x5m.setWhiteList.call(addressL6QQvyz, boolh9Xb3MQ, {from: accounts[1]});
		const booldefZmHS = await Token50X100G5d0x5m.transfer.call(addresskbVtjE4, uintvJqhMmQ, {from: "0x0000000000000000000000000000000000000001"});
		const booljSiNQ6T = await Token50X100G5d0x5m.transfer.call(addressf3kuX3g, uint7qoMhp, {from: accounts[0]});
		const boolX8YB8hr = await Token50X100G5d0x5m.setVesting.call(addressjEHvhh, uintcnl26B2, uintiWU9Mg0, {from: accounts[1]});

		await expect(Token50X100G5d0x5m.setWhiteList.call(addressL6QQvyz, boolh9Xb3MQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100G5d0x5m = await Token50X100.new({from: accounts[1]});
		const uintPiEEWOv = BigInt("261")
		const addresswosfCg = accounts[3]
		const uintSkEwxwE = BigInt("121")
		const stringIBX5BkL = "LWiEgtvl1yEcXD1baOcc9U2AEPNa1RUKWPUxzG0VEpQvkhr1KAQq9GPpl1D7kpzaI2iwpCMgVfcYEVZOFRUIN"
		const stringjyRwoi7 = "8kIXmMmcpv2t961SHiDjp1Vj30arWTDwi3NRb7SNN4kNwCyRZs5xENfoSmJyUTrFYlMCphPNj8QhaoTWYfOrdrGxjGyNHOy6"
		const addressHSwE1Gb = accounts[1]
		const addresspUxWTHt = accounts[1]
		const boolQuwMja0 = await Token50X100G5d0x5m.decreaseApproval.call(addresswosfCg, uintPiEEWOv, {from: accounts[3]});
		await Token50X100G5d0x5m.lock.call({from: accounts[1]});
		const boolato0AEr = await Token50X100G5d0x5m.setSymbolNameDecimals.call(stringjyRwoi7, stringIBX5BkL, uintSkEwxwE, {from: accounts[3]});
		await Token50X100G5d0x5m.setLinkingAddresses.call(addresspUxWTHt, addressHSwE1Gb, {from: accounts[4]});

		assert.equal(boolQuwMja0, true)
		await expect(Token50X100G5d0x5m.lock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100G5d0x5m = await Token50X100.new({from: accounts[1]});
		const uintupNfm8 = BigInt("261")
		const addressrbQjAgA = accounts[3]
		const uintXUqsfpv = BigInt("1655")
		const uintVUYmnR = BigInt("1374")
		const addressZkoDDwa = accounts[4]
		const addressXDTN9du = accounts[2]
		const addressZlFxlX = accounts[0]
		const boolQuwMja0 = await Token50X100G5d0x5m.decreaseApproval.call(addressrbQjAgA, uintupNfm8, {from: accounts[3]});
		const boolCxv9T0b = await Token50X100G5d0x5m.setMaxLockPeriod.call(uintXUqsfpv, {from: accounts[4]});
		const boolUOwXzK = await Token50X100G5d0x5m.increaseApproval.call(addressZkoDDwa, uintVUYmnR, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100G5d0x5m.setLinkingAddresses.call(addressZlFxlX, addressXDTN9du, {from: accounts[4]});

		assert.equal(boolCxv9T0b, false)
		assert.equal(boolQuwMja0, true)
		assert.equal(boolUOwXzK, true)
		await expect(Token50X100G5d0x5m.setLinkingAddresses.call(addressZlFxlX, addressXDTN9du, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100G5d0x5m = await Token50X100.new({from: accounts[1]});
		const uinttoVMk43 = BigInt("261")
		const addressgj7OllD = accounts[3]
		const addressDtVhlS = accounts[5]
		const addresslQHzsc = accounts[1]
		const addresse6BvREj = accounts[2]
		const addressVkMhZST = accounts[0]
		const boolQuwMja0 = await Token50X100G5d0x5m.decreaseApproval.call(addressgj7OllD, uinttoVMk43, {from: accounts[3]});
		const uint256n5feYo6 = await Token50X100G5d0x5m.allowance.call(addresslQHzsc, addressDtVhlS, {from: accounts[5]});
		await Token50X100G5d0x5m.setLinkingAddresses.call(addressVkMhZST, addresse6BvREj, {from: accounts[4]});

		assert.equal(boolQuwMja0, true)
		assert.equal(uint256n5feYo6, BigInt("0"))
		await expect(Token50X100G5d0x5m.setLinkingAddresses.call(addressVkMhZST, addresse6BvREj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100AHtVgjF = await Token50X100.new({from: accounts[0]});
		const boolXxh1bY4 = true
		const addressUvZaJv6 = accounts[5]
		const uintpaguloc = BigInt("836")
		const addressqODQQ2r = accounts[0]
		const addresszEbdCRk = accounts[3]
		const addressyBnetg0 = accounts[2]
		const boolLs0YCIt = true
		const addressUrxJ8g = accounts[1]
		await Token50X100AHtVgjF.setWhiteListReceivers.call(addressUvZaJv6, boolXxh1bY4, {from: accounts[0]});
		const boolaUumz5j = await Token50X100AHtVgjF.increaseApproval.call(addressqODQQ2r, uintpaguloc, {from: accounts[4]});
		const uint256HldKPNJ = await Token50X100AHtVgjF.allowance.call(addressyBnetg0, addresszEbdCRk, {from: accounts[4]});
		await Token50X100AHtVgjF.setWhiteList.call(addressUrxJ8g, boolLs0YCIt, {from: accounts[2]});

		await expect(Token50X100AHtVgjF.setWhiteListReceivers.call(addressUvZaJv6, boolXxh1bY4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100gNzIxoO = await Token50X100.new({from: accounts[1]});
		const uintIenYowb = BigInt("1272")
		const uintGdzwBjj = BigInt("403")
		const address9MLUoa = accounts[0]
		const addressQoMkkGS = accounts[1]
		const uintAnXketY = BigInt("1190")
		const addresseeBN6p = accounts[6]
		const addressZ7wUydF = accounts[1]
		const boolA5Pl3Xf = await Token50X100gNzIxoO._transfer.call(addressQoMkkGS, address9MLUoa, uintGdzwBjj, uintIenYowb, {from: accounts[1]});
		const boolE9qklva = await Token50X100gNzIxoO.transferFrom.call(addressZ7wUydF, addresseeBN6p, uintAnXketY, {from: accounts[2]});

		await expect(Token50X100gNzIxoO._transfer.call(addressQoMkkGS, address9MLUoa, uintGdzwBjj, uintIenYowb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100G5d0x5m = await Token50X100.new({from: accounts[1]});
		const uintTa18y6q = BigInt("261")
		const addressnbOnQU6 = accounts[3]
		const addressIqzzthu = accounts[4]
		const addressiMEI7Gt = accounts[3]
		const uintXMH8jbG = BigInt("445")
		const boolQuwMja0 = await Token50X100G5d0x5m.decreaseApproval.call(addressnbOnQU6, uintTa18y6q, {from: accounts[3]});
		await Token50X100G5d0x5m.setTokenContract.call(addressIqzzthu, {from: accounts[1]});
		await Token50X100G5d0x5m.release.call({from: accounts[2]});
		await Token50X100G5d0x5m.setTokenContract.call(addressiMEI7Gt, {from: accounts[5]});
		const boolBFJjJxu = await Token50X100G5d0x5m.setMaxLockPeriod.call(uintXMH8jbG, {from: accounts[1]});

		assert.equal(boolQuwMja0, true)
		await expect(Token50X100G5d0x5m.setTokenContract.call(addressIqzzthu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100fYys76H = await Token50X100.new({from: accounts[0]});
		const addresslfRULtr = accounts[5]
		const addressnqYmbHG = "0x0000000000000000000000000000000000000001"
		const uintBc11wZh = BigInt("1386")
		const addressbv8aR4A = accounts[4]
		const uinttsXumpk = BigInt("461")
		const addressazV4hQr = accounts[3]
		const boolJ3bPB7 = true
		const addressSvPlyVV = accounts[2]
		const uintd0R9qO2 = BigInt("1106")
		const addressZ3Eyeif = accounts[4]
		const addressIJwJxKN = accounts[3]
		await Token50X100fYys76H.setLinkingAddresses.call(addressnqYmbHG, addresslfRULtr, {from: accounts[0]});
		const boolJFLbWzm = await Token50X100fYys76H.approve.call(addressbv8aR4A, uintBc11wZh, {from: accounts[3]});
		const boolR2lrgQ = await Token50X100fYys76H.transfer.call(addressazV4hQr, uinttsXumpk, {from: accounts[4]});
		await Token50X100fYys76H.setWhiteList.call(addressSvPlyVV, boolJ3bPB7, {from: accounts[1]});
		const boolFOThCWG = await Token50X100fYys76H.transferFrom.call(addressIJwJxKN, addressZ3Eyeif, uintd0R9qO2, {from: accounts[0]});

		await expect(Token50X100fYys76H.setLinkingAddresses.call(addressnqYmbHG, addresslfRULtr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100s6CGSQ5 = await Token50X100.new({from: accounts[5]});
		const uintYeqpxzM = BigInt("79")
		const uintQNC26f3 = BigInt("87")
		const addressjFhbNPk = accounts[2]
		const addressJogrtXQ = accounts[0]
		const uintsc0QmPu = BigInt("1199")
		const uintNrQkYF3 = BigInt("1694")
		const addresstn7AlH9 = "0x0000000000000000000000000000000000000001"
		const addressCvOCg1l = accounts[2]
		const uint2565b2wro = await Token50X100s6CGSQ5.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolIY4PXyk = await Token50X100s6CGSQ5.setMaxLockPeriod.call(uintYeqpxzM, {from: accounts[3]});
		const boolJJeqrV3 = await Token50X100s6CGSQ5.decreaseApproval.call(addressjFhbNPk, uintQNC26f3, {from: accounts[2]});
		await Token50X100s6CGSQ5.setTokenContract.call(addressJogrtXQ, {from: accounts[3]});
		const boolVzSUhq8 = await Token50X100s6CGSQ5._transfer.call(addressCvOCg1l, addresstn7AlH9, uintNrQkYF3, uintsc0QmPu, {from: accounts[4]});

		assert.equal(boolIY4PXyk, false)
		assert.equal(boolJJeqrV3, true)
		assert.equal(uint2565b2wro, BigInt("4714285714285710"))
		await expect(Token50X100s6CGSQ5.setTokenContract.call(addressJogrtXQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100G5d0x5m = await Token50X100.new({from: accounts[1]});
		const uintelOISEY = BigInt("80")
		const addressnWIeeVD = accounts[5]
		const uintDFTiZvX = BigInt("1456")
		const addressHGuOk4N = accounts[4]
		await Token50X100G5d0x5m.release.call({from: accounts[1]});
		const boolQuwMja0 = await Token50X100G5d0x5m.decreaseApproval.call(addressnWIeeVD, uintelOISEY, {from: accounts[3]});
		const boolPE0UvBq = await Token50X100G5d0x5m.transfer.call(addressHGuOk4N, uintDFTiZvX, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100G5d0x5m.release.call({from: accounts[1]});

		await expect(Token50X100G5d0x5m.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100gNzIxoO = await Token50X100.new({from: accounts[1]});
		const uintvSzskPp = BigInt("1311")
		const addressCz2LETy = "0x0000000000000000000000000000000000000001"
		const addressRko3IWy = "0x00000000000000000000000000000000000000-1"
		const uintMZQb1D1 = BigInt("1190")
		const addressR2A7AC0 = accounts[6]
		const addressLaF2tnM = accounts[1]
		const uintB4Mu4F = BigInt("127")
		const addressRSf8oIC = accounts[3]
		const boolheKibxo = await Token50X100gNzIxoO.transferFrom.call(addressRko3IWy, addressCz2LETy, uintvSzskPp, {from: accounts[3]});
		const boolE9qklva = await Token50X100gNzIxoO.transferFrom.call(addressLaF2tnM, addressR2A7AC0, uintMZQb1D1, {from: accounts[2]});
		const boolMuKVnJU = await Token50X100gNzIxoO.approve.call(addressRSf8oIC, uintB4Mu4F, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100gNzIxoO.transferFrom.call(addressRko3IWy, addressCz2LETy, uintvSzskPp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100G5d0x5m = await Token50X100.new({from: accounts[1]});
		const uintR4tkYWr = BigInt("1324")
		const addressWW0jEb = "0x0000000000000000000000000000000000000000"
		const uintJi9dZF = BigInt("653")
		const uintatG4z9A = BigInt("1411")
		const uintUdKX9Dv = BigInt("1038")
		const uintLNsbBtI = BigInt("1823")
		const boolXCR0OCQ = await Token50X100G5d0x5m.transfer.call(addressWW0jEb, uintR4tkYWr, {from: accounts[1]});
		const booloNz3RyX = await Token50X100G5d0x5m.safeLock.call(uintatG4z9A, uintJi9dZF, {from: accounts[0]});
		const boolvQpFn9u = await Token50X100G5d0x5m.safeLock.call(uintLNsbBtI, uintUdKX9Dv, {from: accounts[0]});

		await expect(Token50X100G5d0x5m.transfer.call(addressWW0jEb, uintR4tkYWr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100G5d0x5m = await Token50X100.new({from: accounts[1]});
		const uintzh1kf13 = BigInt("1324")
		const addressFlGp5nI = "0x00000000000000000000000000000000000000-1"
		const boolXCR0OCQ = await Token50X100G5d0x5m.transfer.call(addressFlGp5nI, uintzh1kf13, {from: accounts[1]});

		await expect(Token50X100G5d0x5m.transfer.call(addressFlGp5nI, uintzh1kf13, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100afXDFE3 = await Token50X100.new({from: accounts[4]});
		const uintHSvf9zX = BigInt("2003")
		const uintYq5cSmo = BigInt("1789")
		const addressXLa7MwG = accounts[0]
		const uintwpt2I9 = BigInt("728")
		const uintn6dWJqo = BigInt("952")
		const addressSEefve = accounts[0]
		const addressr0NxHyt = accounts[1]
		const uintO8QdaMB = BigInt("139")
		const uintCUj1Zcz = BigInt("200")
		const boolX0o64qP = await Token50X100afXDFE3.setVesting.call(addressXLa7MwG, uintYq5cSmo, uintHSvf9zX, {from: accounts[4]});
		const bool6rfmMR = await Token50X100afXDFE3._transfer.call(addressr0NxHyt, addressSEefve, uintn6dWJqo, uintwpt2I9, {from: accounts[2]});
		const boolAyJPFuF = await Token50X100afXDFE3.safeLock.call(uintCUj1Zcz, uintO8QdaMB, {from: accounts[2]});

		assert.equal(boolX0o64qP, true)
		await expect(Token50X100afXDFE3._transfer.call(addressr0NxHyt, addressSEefve, uintn6dWJqo, uintwpt2I9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})