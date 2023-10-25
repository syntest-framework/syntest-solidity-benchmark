const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const stringNbGWr5W = "GCwLn6tVQIAFYvq6o"
		const stringznCMI6g = "NYzMPIMuJotrcIJP6nHTK1rzbgA2l6Y2Q4lZiVJ0Jzd2g6kEisZ6xxNusVfK"
		const uintyFOr0mc = BigInt("190")
		const NALppkDpNr = await NAL.new(stringNbGWr5W, stringznCMI6g, uintyFOr0mc, {from: accounts[3]});
		const uintT5Rgq4E = BigInt("1572")
		const addressJf4W9sp = accounts[0]
		const uintpjKxcrd = BigInt("1900")
		const addressb09Tcqs = "0x0000000000000000000000000000000000000001"
		const addressHSvRn24 = accounts[5]
		const uintBTa4tO = BigInt("727")
		const boolcbygMwc = await NALppkDpNr.increaseAllowance.call(addressJf4W9sp, uintT5Rgq4E, {from: "0x0000000000000000000000000000000000000001"});
		const boolBGVwGJu = await NALppkDpNr.transferFrom.call(addressHSvRn24, addressb09Tcqs, uintpjKxcrd, {from: accounts[4]});
		const stringBnacvNU = await NALppkDpNr.symbol.call({from: accounts[3]});
		const uint256KVgcu2b = await NALppkDpNr.burn.call(uintBTa4tO, {from: accounts[4]});
	});

	it('test for NAL', async () => {
		const NALJTYe76v = await NAL.new({from: accounts[0]});
		const uint8WWdva = BigInt("693")
		const addressZ0ipv5N = accounts[1]
		const uintjBlfLB2 = BigInt("1325")
		const addressSw666uv = accounts[1]
		await NALJTYe76v.whenPaused.call({from: accounts[2]});
		const boolo1y293 = await NALJTYe76v.approve.call(addressZ0ipv5N, uint8WWdva, {from: accounts[2]});
		const uint256frtIYyL = await NALJTYe76v.totalSupply.call({from: accounts[2]});
		const boolNTcJ4Z2 = await NALJTYe76v.transfer.call(addressSw666uv, uintjBlfLB2, {from: accounts[5]});

		await expect(NALJTYe76v.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALc1BhTLz = await NAL.new({from: accounts[1]});
		const uintsOAtVAn = BigInt("1127")
		const addressqrgWGap = accounts[1]
		const addresseJwm2pk = accounts[3]
		const uintkzQ6k6C = BigInt("1151")
		const addressOJKQvSy = accounts[2]
		const addressh2Gqhnm = accounts[1]
		const uint256d3XxqM1 = await NALc1BhTLz.burn.call(uintsOAtVAn, {from: accounts[2]});
		const uint8a0xG4YL = await NALc1BhTLz.decimals.call({from: accounts[3]});
		const boolM0To3Tn = await NALc1BhTLz.unfreezeAccount.call(addressqrgWGap, {from: accounts[1]});
		const boolaB2E0d = await NALc1BhTLz.unfreezeAccount.call(addresseJwm2pk, {from: accounts[3]});
		const boolmSzCqb9 = await NALc1BhTLz.transferFrom.call(addressh2Gqhnm, addressOJKQvSy, uintkzQ6k6C, {from: accounts[1]});

		await expect(NALc1BhTLz.burn.call(uintsOAtVAn, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALwrXdgSF = await NAL.new({from: accounts[0]});
		const addressqzydybl = accounts[0]
		const uintjXv2ooF = BigInt("235")
		const addressjGEHwU = accounts[2]
		const addressjOgk4fX = accounts[1]
		const addresscMundko = "0x0000000000000000000000000000000000000001"
		const addressKbLUTML = accounts[1]
		const boolNxg7OES = await NALwrXdgSF.paused.call({from: accounts[1]});
		const boolB4ZeC9l = await NALwrXdgSF.freezeAccount.call(addressqzydybl, {from: accounts[0]});
		await NALwrXdgSF.whenPaused.call({from: accounts[2]});
		const boolyKIIph8 = await NALwrXdgSF.transferFrom.call(addressjOgk4fX, addressjGEHwU, uintjXv2ooF, {from: accounts[2]});
		const uint256N5leXCR = await NALwrXdgSF.allowance.call(addressKbLUTML, addresscMundko, {from: accounts[2]});

		assert.equal(boolB4ZeC9l, true)
		assert.equal(boolNxg7OES, false)
		await expect(NALwrXdgSF.whenPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALV5d8LVv = await NAL.new({from: accounts[1]});
		const addresswtMbj56 = accounts[3]
		const addressWaXW4k = accounts[4]
		const uintiKMMobn = BigInt("1818")
		const uintFHjTq7X = BigInt("472")
		const addressUnkYJPC = accounts[3]
		const addressDwmMyz4 = accounts[0]
		await NALV5d8LVv.unpause.call({from: accounts[2]});
		const boolZhdccEQ = await NALV5d8LVv.isOwner.call(addresswtMbj56, {from: accounts[4]});
		const boolvoXT5Lq = await NALV5d8LVv.freezeAccount.call(addressWaXW4k, {from: accounts[3]});
		const boolbMZYt7 = await NALV5d8LVv.lock.call(addressUnkYJPC, uintFHjTq7X, uintiKMMobn, {from: accounts[1]});
		const addressMqdeBJk = await NALV5d8LVv.removeAdmin.call(addressDwmMyz4, {from: accounts[5]});

		await expect(NALV5d8LVv.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALq41PZW = await NAL.new({from: accounts[0]});
		const uintWnS5oA9 = BigInt("862")
		const addressGBDZLrz = accounts[2]
		const uintaDV8Lv6 = BigInt("32")
		const addressoVmts7S = accounts[2]
		const addressFjydaSg = accounts[3]
		const stringimqbfN1 = await NALq41PZW.name.call({from: accounts[1]});
		await NALq41PZW.onlyAdmin.call({from: accounts[1]});
		const uint256hBdBaoO = await NALq41PZW.totalSupply.call({from: accounts[0]});
		const boolrESTdMN = await NALq41PZW.approve.call(addressGBDZLrz, uintWnS5oA9, {from: accounts[1]});
		await NALq41PZW.whenNotPaused.call({from: accounts[5]});
		const bool9lLfvn = await NALq41PZW.transferFrom.call(addressFjydaSg, addressoVmts7S, uintaDV8Lv6, {from: accounts[5]});

		assert.equal(stringimqbfN1, "Personal Token")
		await expect(NALq41PZW.onlyAdmin.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALKCXCI3M = await NAL.new({from: accounts[4]});
		const uintRswgioO = BigInt("895")
		const addressOXnq2FK = accounts[4]
		const uintGIWXIJY = BigInt("662")
		const addressjKaUgaW = accounts[4]
		const addressazaiT9t = accounts[1]
		const uintWmiAgXx = BigInt("513")
		const uint256uBhYWkN = await NALKCXCI3M.totalSupply.call({from: accounts[1]});
		const boolaHs6Yg8 = await NALKCXCI3M.approve.call(addressOXnq2FK, uintRswgioO, {from: accounts[0]});
		await NALKCXCI3M.whenNotPaused.call({from: accounts[3]});
		const boolNfLP1wY = await NALKCXCI3M.unlock.call(addressjKaUgaW, uintGIWXIJY, {from: accounts[3]});
		const boolWSQykM = await NALKCXCI3M.freezeAccount.call(addressazaiT9t, {from: accounts[4]});
		const uint256K0IGNk5 = await NALKCXCI3M.burn.call(uintWmiAgXx, {from: accounts[4]});

		assert.equal(boolaHs6Yg8, true)
		assert.equal(uint256uBhYWkN, BigInt("2000000000000000000000000000"))
		await expect(NALKCXCI3M.whenNotPaused.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALt81ed6l = await NAL.new({from: accounts[1]});
		const uintUp6v5qA = BigInt("611")
		const addressIVj3IO = accounts[4]
		const uintPLb0kz6 = BigInt("304")
		const addressguDthjf = accounts[3]
		const addressK86vJcy = accounts[2]
		const addressbTaCTW = accounts[1]
		const boolnuDN1EB = await NALt81ed6l.transfer.call(addressIVj3IO, uintUp6v5qA, {from: accounts[1]});
		const boolFUlYI3 = await NALt81ed6l.transfer.call(addressguDthjf, uintPLb0kz6, {from: accounts[1]});
		const boolUK4pOQh = await NALt81ed6l.unfreezeAccount.call(addressK86vJcy, {from: accounts[5]});
		const addresslCSukE = await NALt81ed6l.notFrozen.call(addressbTaCTW, {from: accounts[2]});

		assert.equal(boolFUlYI3, true)
		assert.equal(boolnuDN1EB, true)
		await expect(NALt81ed6l.unfreezeAccount.call(addressK86vJcy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALt81ed6l = await NAL.new({from: accounts[1]});
		const uintHWQYn3J = BigInt("611")
		const addressKhHgN52 = accounts[4]
		const uintCUcunDR = BigInt("304")
		const addressJG19rdY = accounts[3]
		const addressJQrPgtn = accounts[4]
		const uintuEMXDdy = BigInt("1248")
		const addressjCTV9gS = accounts[3]
		const uintp5cgdnU = BigInt("1385")
		const addressHEOoDT = accounts[2]
		const addressetEkYp6 = accounts[1]
		const boolnuDN1EB = await NALt81ed6l.transfer.call(addressKhHgN52, uintHWQYn3J, {from: accounts[1]});
		const boolFUlYI3 = await NALt81ed6l.transfer.call(addressJG19rdY, uintCUcunDR, {from: accounts[1]});
		const addressIGtL0MP = await NALt81ed6l.transferOwnership.call(addressJQrPgtn, {from: accounts[1]});
		const uint256A9qKVbL = await NALt81ed6l.burn.call(uintuEMXDdy, {from: accounts[2]});
		const boolUK4pOQh = await NALt81ed6l.unfreezeAccount.call(addressjCTV9gS, {from: accounts[5]});
		const addressy0EnUy7 = await NALt81ed6l.burnFrom.call(addressHEOoDT, uintp5cgdnU, {from: accounts[4]});
		const addresslCSukE = await NALt81ed6l.notFrozen.call(addressetEkYp6, {from: accounts[2]});

		assert.equal(boolFUlYI3, true)
		assert.equal(boolnuDN1EB, true)
		await expect(NALt81ed6l.burn.call(uintuEMXDdy, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALFF9NGqD = await NAL.new({from: accounts[1]});
		const uintHoeqooL = BigInt("543")
		const addressEk7domN = "0x0000000000000000000000000000000000000001"
		const addressAdf7Dzu = "0x0000000000000000000000000000000000000001"
		const addressKabyBPQ = accounts[2]
		const addressKQQWcao = accounts[4]
		const addressJwz0lx = accounts[1]
		const boolE6wiCsx = await NALFF9NGqD.increaseAllowance.call(addressEk7domN, uintHoeqooL, {from: accounts[5]});
		const booljbxZ727 = await NALFF9NGqD.unfreezeAccount.call(addressAdf7Dzu, {from: accounts[0]});
		const booliS0WG0t = await NALFF9NGqD.isOwner.call(addressKabyBPQ, {from: accounts[5]});
		const uint256NlaleVp = await NALFF9NGqD.allowance.call(addressJwz0lx, addressKQQWcao, {from: accounts[2]});

		assert.equal(boolE6wiCsx, true)
		await expect(NALFF9NGqD.unfreezeAccount.call(addressAdf7Dzu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALt81ed6l = await NAL.new({from: accounts[1]});
		const uintxxYAPC = BigInt("611")
		const addressFyIdjNZ = accounts[5]
		const addressqSYt9Ew = accounts[4]
		const addressdEcGEDC = accounts[3]
		const addressioRokTB = accounts[1]
		const boolnuDN1EB = await NALt81ed6l.transfer.call(addressFyIdjNZ, uintxxYAPC, {from: accounts[1]});
		const uint256TO4V40H = await NALt81ed6l.balanceOf.call(addressqSYt9Ew, {from: accounts[4]});
		const boolUK4pOQh = await NALt81ed6l.unfreezeAccount.call(addressdEcGEDC, {from: accounts[5]});
		const addresslCSukE = await NALt81ed6l.notFrozen.call(addressioRokTB, {from: accounts[2]});

		assert.equal(boolnuDN1EB, true)
		assert.equal(uint256TO4V40H, BigInt("0"))
		await expect(NALt81ed6l.unfreezeAccount.call(addressdEcGEDC, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALt81ed6l = await NAL.new({from: accounts[1]});
		const uinth7nZK7t = BigInt("611")
		const addressIK4lS4w = accounts[4]
		const uintc22mMwP = BigInt("1172")
		const addressV3N1ofN = accounts[3]
		const addressVh4RLkK = accounts[1]
		const addresssPWphr = accounts[2]
		const boolnuDN1EB = await NALt81ed6l.transfer.call(addressIK4lS4w, uinth7nZK7t, {from: accounts[1]});
		const boolnkGV1mW = await NALt81ed6l.transferFrom.call(addressVh4RLkK, addressV3N1ofN, uintc22mMwP, {from: accounts[4]});
		const addresslCSukE = await NALt81ed6l.notFrozen.call(addresssPWphr, {from: accounts[2]});

		assert.equal(boolnuDN1EB, true)
		await expect(NALt81ed6l.transferFrom.call(addressVh4RLkK, addressV3N1ofN, uintc22mMwP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALt81ed6l = await NAL.new({from: accounts[1]});
		const uintM54luDb = BigInt("605")
		const addressFtnBonz = accounts[4]
		const uintPYW31Sb = BigInt("517")
		const uintRVtsKwi = BigInt("1609")
		const addressBvqn6kA = accounts[4]
		const addresslzbX4V = accounts[1]
		const string6LJs3u = await NALt81ed6l.name.call({from: accounts[1]});
		const boolnuDN1EB = await NALt81ed6l.transfer.call(addressFtnBonz, uintM54luDb, {from: accounts[1]});
		const boolXmFU7oK = await NALt81ed6l.lock.call(addressBvqn6kA, uintRVtsKwi, uintPYW31Sb, {from: accounts[1]});
		const addresslCSukE = await NALt81ed6l.notFrozen.call(addresslzbX4V, {from: accounts[2]});

		assert.equal(boolnuDN1EB, true)
		assert.equal(string6LJs3u, "Personal Token")
		await expect(NALt81ed6l.lock.call(addressBvqn6kA, uintRVtsKwi, uintPYW31Sb, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALt81ed6l = await NAL.new({from: accounts[1]});
		const uintHPs5yjd = BigInt("705")
		const addressYR9bFBq = accounts[4]
		const uintbk4RFQ = BigInt("611")
		const addressoNQnkpY = accounts[5]
		const addresshqLkGCN = accounts[1]
		const boold3d8Ma = await NALt81ed6l.decreaseAllowance.call(addressYR9bFBq, uintHPs5yjd, {from: accounts[5]});
		const boolnuDN1EB = await NALt81ed6l.transfer.call(addressoNQnkpY, uintbk4RFQ, {from: accounts[1]});
		const addresslCSukE = await NALt81ed6l.notFrozen.call(addresshqLkGCN, {from: accounts[2]});

		await expect(NALt81ed6l.decreaseAllowance.call(addressYR9bFBq, uintHPs5yjd, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALLSRlaH = await NAL.new({from: accounts[2]});
		const uintBKuRgaU = BigInt("291")
		const addressxdjLsMz = accounts[1]
		const addressTpoyzwQ = accounts[2]
		const addresszfgRuVa = accounts[3]
		const boolEQwQKRn = await NALLSRlaH.unlock.call(addressxdjLsMz, uintBKuRgaU, {from: accounts[2]});
		const booln5gJzBI = await NALLSRlaH.isAdmin.call(addressTpoyzwQ, {from: accounts[0]});
		const stringbxd33dc = await NALLSRlaH.name.call({from: accounts[1]});
		const addressItPUUUg = await NALLSRlaH.removeAdmin.call(addresszfgRuVa, {from: accounts[2]});
		await NALLSRlaH.onlyAdmin.call({from: accounts[1]});

		await expect(NALLSRlaH.unlock.call(addressxdjLsMz, uintBKuRgaU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALF7a95p = await NAL.new({from: accounts[2]});
		const addressCGXEnrM = accounts[0]
		const address6bREsR = "0x0000000000000000000000000000000000000001"
		const addressiJxIWVZ = accounts[2]
		const uint256BjXvGZK = await NALF7a95p.allowance.call(address6bREsR, addressCGXEnrM, {from: accounts[4]});
		const boolPPwZux = await NALF7a95p.isOwner.call(addressiJxIWVZ, {from: accounts[4]});

		assert.equal(boolPPwZux, true)
		assert.equal(uint256BjXvGZK, BigInt("0"))
	});

	it('test for NAL', async () => {
		const NALt81ed6l = await NAL.new({from: accounts[1]});
		const uintasyPtNn = BigInt("611")
		const addressR8JUbYV = accounts[4]
		const uintYbGeCx6 = BigInt("1295")
		const addresssHPkt2 = accounts[4]
		const addressxYd7SWD = accounts[1]
		const uint892rQFn = await NALt81ed6l.decimals.call({from: accounts[0]});
		const boolnuDN1EB = await NALt81ed6l.transfer.call(addressR8JUbYV, uintasyPtNn, {from: accounts[1]});
		const boolbiAKN9 = await NALt81ed6l.unlock.call(addresssHPkt2, uintYbGeCx6, {from: accounts[0]});
		const addressFqvhjxf = await NALt81ed6l.notFrozen.call(addressxYd7SWD, {from: accounts[4]});

		assert.equal(boolnuDN1EB, true)
		assert.equal(uint892rQFn, BigInt("18"))
		await expect(NALt81ed6l.unlock.call(addresssHPkt2, uintYbGeCx6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALt81ed6l = await NAL.new({from: accounts[1]});
		const uintdftFux = BigInt("1078")
		const uintQFJ8rXk = BigInt("1923")
		const addresse2gYX3 = accounts[4]
		const uintzrg6lv = BigInt("611")
		const addressBnzB4Pv = accounts[5]
		const addresslTNLKl = accounts[3]
		const addressiaefvr = accounts[2]
		const boolO7RgQNI = await NALt81ed6l.transferWithLock.call(addresse2gYX3, uintQFJ8rXk, uintdftFux, {from: accounts[1]});
		const boolnuDN1EB = await NALt81ed6l.transfer.call(addressBnzB4Pv, uintzrg6lv, {from: accounts[1]});
		const boolUK4pOQh = await NALt81ed6l.unfreezeAccount.call(addresslTNLKl, {from: accounts[5]});
		const addresslCSukE = await NALt81ed6l.notFrozen.call(addressiaefvr, {from: accounts[2]});

		assert.equal(boolO7RgQNI, true)
		assert.equal(boolnuDN1EB, true)
		await expect(NALt81ed6l.unfreezeAccount.call(addresslTNLKl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALt81ed6l = await NAL.new({from: accounts[1]});
		const uinttQTsYvj = BigInt("659")
		const addressMCO00UG = accounts[4]
		const uintnrMVcF5 = BigInt("978")
		const uintvkXIyHt = BigInt("1064")
		const addresspqNWMjC = accounts[5]
		const boolnuDN1EB = await NALt81ed6l.transfer.call(addressMCO00UG, uinttQTsYvj, {from: accounts[1]});
		await NALt81ed6l.renounceAdmin.call({from: accounts[2]});
		const boolQcit33f = await NALt81ed6l.transferWithLock.call(addresspqNWMjC, uintvkXIyHt, uintnrMVcF5, {from: accounts[2]});

		assert.equal(boolnuDN1EB, true)
		await expect(NALt81ed6l.renounceAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALt81ed6l = await NAL.new({from: accounts[1]});
		const uintr533G2A = BigInt("1172")
		const addressY3yfm1V = accounts[3]
		const addressvkLRrkP = accounts[1]
		const stringCx4KKM = await NALt81ed6l.symbol.call({from: accounts[0]});
		const boolnkGV1mW = await NALt81ed6l.transferFrom.call(addressvkLRrkP, addressY3yfm1V, uintr533G2A, {from: accounts[4]});

		assert.equal(stringCx4KKM, "NAL")
		await expect(NALt81ed6l.transferFrom.call(addressvkLRrkP, addressY3yfm1V, uintr533G2A, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALt81ed6l = await NAL.new({from: accounts[1]});
		const uinthuUAZTk = BigInt("1202")
		const addresszHhqP5I = accounts[3]
		const addresss87BPKd = accounts[2]
		const uintjAUssoe = BigInt("614")
		const addressqecYApa = accounts[4]
		const addresslVK9V6Q = await NALt81ed6l.burnFrom.call(addresszHhqP5I, uinthuUAZTk, {from: accounts[5]});
		const addressWAJTrJK = await NALt81ed6l.transferOwnership.call(addresss87BPKd, {from: accounts[3]});
		const boolnuDN1EB = await NALt81ed6l.transfer.call(addressqecYApa, uintjAUssoe, {from: accounts[1]});

		await expect(NALt81ed6l.burnFrom.call(addresszHhqP5I, uinthuUAZTk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALt81ed6l = await NAL.new({from: accounts[1]});
		const addressSdDBDB = accounts[5]
		const uintvyOyLgV = BigInt("611")
		const addresskd7WgtE = accounts[4]
		const boolJvxwrUR = await NALt81ed6l.unfreezeAccount.call(addressSdDBDB, {from: accounts[1]});
		const booloUp0YV = await NALt81ed6l.paused.call({from: accounts[3]});
		const uint83Ffcus = await NALt81ed6l.decimals.call({from: accounts[1]});
		const boolnuDN1EB = await NALt81ed6l.transfer.call(addresskd7WgtE, uintvyOyLgV, {from: accounts[1]});

		await expect(NALt81ed6l.unfreezeAccount.call(addressSdDBDB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALt81ed6l = await NAL.new({from: accounts[1]});
		const uintbUHeud1 = BigInt("624")
		const addressmXOv4Tc = accounts[4]
		const addressNttgyGg = accounts[2]
		const boolnuDN1EB = await NALt81ed6l.transfer.call(addressmXOv4Tc, uintbUHeud1, {from: accounts[1]});
		const addressdbrFboh = await NALt81ed6l.removeAdmin.call(addressNttgyGg, {from: accounts[1]});
		const boolJb77Wtx = await NALt81ed6l.paused.call({from: accounts[3]});

		assert.equal(boolnuDN1EB, true)
		await expect(NALt81ed6l.removeAdmin.call(addressNttgyGg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALs6FYR9M = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const uintR2TR21T = BigInt("1254")
		const addressZBVg2N = accounts[3]
		const addresshnSE609 = accounts[3]
		const boolCSFvyLm = await NALs6FYR9M.decreaseAllowance.call(addressZBVg2N, uintR2TR21T, {from: accounts[0]});
		await NALs6FYR9M.unpause.call({from: accounts[3]});
		const stringmLnfUk1 = await NALs6FYR9M.name.call({from: accounts[0]});
		const addressC0nvr2f = await NALs6FYR9M.transferOwnership.call(addresshnSE609, {from: accounts[4]});
	});
})