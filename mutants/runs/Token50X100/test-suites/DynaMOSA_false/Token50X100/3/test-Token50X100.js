const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100K8mUsvH = await Token50X100.new({from: accounts[0]});
		const uintw2I0YV = BigInt("1185")
		const addressxZhX9Zm = accounts[4]
		const uintnTcBeT = BigInt("207")
		const addressnF6hfY8 = accounts[0]
		const addressvQFz4G = accounts[1]
		await Token50X100K8mUsvH.onlyOwner.call({from: accounts[2]});
		await Token50X100K8mUsvH.release.call({from: accounts[3]});
		const boolNb4psiW = await Token50X100K8mUsvH.transfer.call(addressxZhX9Zm, uintw2I0YV, {from: accounts[4]});
		const boolMgmtKn3 = await Token50X100K8mUsvH.transferFrom.call(addressvQFz4G, addressnF6hfY8, uintnTcBeT, {from: accounts[3]});

		await expect(Token50X100K8mUsvH.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100NtoK7c2 = await Token50X100.new({from: accounts[2]});
		const uint3AxYAs = BigInt("2036")
		const uinttu4sEzb = BigInt("337")
		const uintqmqn1GW = BigInt("48")
		const stringQqPEWsT = "4098uCTV2j1KKxGpVtTdGZbO2LHaHxRzm7AHqz0FuIwekvaXuLWwIy9gHJpSspL59K7OcnM6"
		const stringiIv7lb6 = "tuDuwtm2saYebcurdDiLEyJh2MEJnENrkuy8WnJ2HuBu4ZO5f7nWFTUhJayj3rYklU8ILDwIaXkzrqfGxywF3dOnECW"
		const uintXqYEcS = BigInt("1299")
		const addressLKhHRSA = accounts[1]
		const addressFwKuUJq = accounts[0]
		const boollrNxH2f = true
		const addressBnf40jI = accounts[2]
		const uintULel35i = BigInt("87")
		const stringbprnBDk = "52fXJWdmCvPNk1mLVaDKvIJDM7z9WyCL19s1eqdiAKeMVz3GPSEkBej"
		const stringcUDW87J = "ApiaJwwUsC2Ab6e1G0I4UHM4Z24Rn4HeCuWKUMXf0EoXIXhSV9UrIkbxkfvWypr"
		const addressHPlxcrv = accounts[3]
		const boolcBFuzTr = await Token50X100NtoK7c2.safeLock.call(uinttu4sEzb, uint3AxYAs, {from: accounts[2]});
		const booljMzmQPZ = await Token50X100NtoK7c2.setSymbolNameDecimals.call(stringiIv7lb6, stringQqPEWsT, uintqmqn1GW, {from: accounts[2]});
		const boolJUcaNOA = await Token50X100NtoK7c2.issueTokens.call(addressFwKuUJq, addressLKhHRSA, uintXqYEcS, {from: accounts[4]});
		await Token50X100NtoK7c2.setWhiteList.call(addressBnf40jI, boollrNxH2f, {from: accounts[4]});
		const boolGv1D8dg = await Token50X100NtoK7c2.setSymbolNameDecimals.call(stringcUDW87J, stringbprnBDk, uintULel35i, {from: accounts[0]});
		const address88ctYL = await Token50X100NtoK7c2.setOriginalContract.call(addressHPlxcrv, {from: accounts[1]});

		await expect(Token50X100NtoK7c2.safeLock.call(uinttu4sEzb, uint3AxYAs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RYnnXCT = await Token50X100.new({from: accounts[1]});
		const uintX3IUCRz = BigInt("1936")
		const addressQc7bcn = accounts[4]
		const uintpHkKzDa = BigInt("344")
		const uintR4AcbPK = BigInt("848")
		const addressZ6VAOPO = accounts[3]
		const addressIPYK9N7 = accounts[0]
		const addresszl7fAG4 = accounts[4]
		const addressWrNqMuG = accounts[5]
		const boolDIo63Yi = await Token50X100RYnnXCT.transfer.call(addressQc7bcn, uintX3IUCRz, {from: accounts[1]});
		const boolLp2S12l = await Token50X100RYnnXCT.setVesting.call(addressZ6VAOPO, uintR4AcbPK, uintpHkKzDa, {from: accounts[5]});
		const addressRhln02F = await Token50X100RYnnXCT.transferOwnership.call(addressIPYK9N7, {from: accounts[2]});
		await Token50X100RYnnXCT.setLinkingAddresses.call(addressWrNqMuG, addresszl7fAG4, {from: accounts[1]});

		await expect(Token50X100RYnnXCT.transfer.call(addressQc7bcn, uintX3IUCRz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ZLLUKu4 = await Token50X100.new({from: accounts[4]});
		const boolndIKmRy = true
		const addresszYl8PWp = accounts[0]
		const uintWKOdQ3g = BigInt("1411")
		const addressExOW1L = accounts[2]
		const uintM2ubZV = BigInt("1241")
		const addressJ7s7dXO = accounts[2]
		const uintH4QOM8w = BigInt("784")
		const addresskv9nU26 = accounts[4]
		await Token50X100ZLLUKu4.setWhiteList.call(addresszYl8PWp, boolndIKmRy, {from: accounts[4]});
		const boolc31ANYg = await Token50X100ZLLUKu4.decreaseApproval.call(addressExOW1L, uintWKOdQ3g, {from: accounts[4]});
		await Token50X100ZLLUKu4.lock.call({from: accounts[3]});
		const boolEY4nSIV = await Token50X100ZLLUKu4.decreaseApproval.call(addressJ7s7dXO, uintM2ubZV, {from: accounts[3]});
		const boolddHgVuU = await Token50X100ZLLUKu4.increaseApproval.call(addresskv9nU26, uintH4QOM8w, {from: accounts[5]});

		await expect(Token50X100ZLLUKu4.setWhiteList.call(addresszYl8PWp, boolndIKmRy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100P8a7XFq = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCQ2PCDR = BigInt("61")
		const addressbee7IMt = "0x0000000000000000000000000000000000000001"
		const uintAq3D7Xx = BigInt("1541")
		const uintwiU4CDk = BigInt("607")
		await Token50X100P8a7XFq.lock.call({from: "0x0000000000000000000000000000000000000001"});
		const boolaM7jvV = await Token50X100P8a7XFq.transfer.call(addressbee7IMt, uintCQ2PCDR, {from: accounts[3]});
		await Token50X100P8a7XFq.onlyOwner.call({from: accounts[1]});
		const boolTo8GgAr = await Token50X100P8a7XFq.safeLock.call(uintwiU4CDk, uintAq3D7Xx, {from: accounts[2]});
		await Token50X100P8a7XFq.lock.call({from: accounts[2]});
	});

	it('test for Token50X100', async () => {
		const Token50X100ZLLUKu4 = await Token50X100.new({from: accounts[4]});
		const boolndIKmRy = true
		const addressXPwbOI = accounts[0]
		const uintxaJlH0W = BigInt("1421")
		const addressaL52Rc = accounts[2]
		const uintd8Hcdji = BigInt("52")
		const uintUy25Sjj = BigInt("187")
		const addresskBoT9Ml = accounts[1]
		const addressQiwbYJg = accounts[1]
		const uintBs77JS = BigInt("1241")
		const addressHg2BM4K = accounts[2]
		const uintlGedjkV = BigInt("784")
		const addressOtmViyy = accounts[4]
		await Token50X100ZLLUKu4.setWhiteList.call(addressXPwbOI, boolndIKmRy, {from: accounts[4]});
		const boolc31ANYg = await Token50X100ZLLUKu4.decreaseApproval.call(addressaL52Rc, uintxaJlH0W, {from: accounts[4]});
		const boolVsw9EJV = await Token50X100ZLLUKu4._transfer.call(addressQiwbYJg, addresskBoT9Ml, uintUy25Sjj, uintd8Hcdji, {from: accounts[4]});
		await Token50X100ZLLUKu4.lock.call({from: accounts[3]});
		const boolEY4nSIV = await Token50X100ZLLUKu4.decreaseApproval.call(addressHg2BM4K, uintBs77JS, {from: accounts[3]});
		const boolddHgVuU = await Token50X100ZLLUKu4.increaseApproval.call(addressOtmViyy, uintlGedjkV, {from: accounts[5]});

		await expect(Token50X100ZLLUKu4.setWhiteList.call(addressXPwbOI, boolndIKmRy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Tfieasz = await Token50X100.new({from: accounts[2]});
		const uintto9kOC2 = BigInt("1215")
		const addressWCVqM90 = accounts[3]
		const addressqOqJZDG = accounts[0]
		const uintWXKdOn = BigInt("1178")
		const addressBUSOxbv = accounts[5]
		const uintLw9GJpd = BigInt("811")
		const addressyJSY5mM = accounts[3]
		const addressdYaMpgR = accounts[1]
		const boolEnAQk8 = await Token50X100Tfieasz.transferFrom.call(addressqOqJZDG, addressWCVqM90, uintto9kOC2, {from: accounts[2]});
		const booleNV2cxP = await Token50X100Tfieasz.approve.call(addressBUSOxbv, uintWXKdOn, {from: accounts[2]});
		const boolXe85ULe = await Token50X100Tfieasz.issueTokens.call(addressdYaMpgR, addressyJSY5mM, uintLw9GJpd, {from: accounts[2]});
		await Token50X100Tfieasz.release.call({from: accounts[1]});

		await expect(Token50X100Tfieasz.transferFrom.call(addressqOqJZDG, addressWCVqM90, uintto9kOC2, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ETNRwri = await Token50X100.new({from: accounts[2]});
		const addressssQ1Iib = accounts[3]
		const addressVkcPDFt = accounts[1]
		const uint256BhwYQKy = await Token50X100ETNRwri.balanceOf.call(addressssQ1Iib, {from: "0x0000000000000000000000000000000000000001"});
		const addressjfXhTfQ = await Token50X100ETNRwri.transferOwnership.call(addressVkcPDFt, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256BhwYQKy, BigInt("0"))
		await expect(Token50X100ETNRwri.transferOwnership.call(addressVkcPDFt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ZLLUKu4 = await Token50X100.new({from: accounts[4]});
		const boolndIKmRy = true
		const addressBkNagKQ = accounts[0]
		const uintO5kMz2a = BigInt("1421")
		const addressDFF5AWH = accounts[2]
		const uintJBMJ2Jz = BigInt("673")
		const uintIDr6Sik = BigInt("1773")
		const addressABgHhQ0 = accounts[0]
		const uintap2krhp = BigInt("52")
		const uintLz5V1U = BigInt("187")
		const addressOHedVC = accounts[1]
		const addressnyYbZBY = accounts[1]
		const addressPGDRyL = accounts[3]
		const addresskEel3hL = accounts[2]
		const uintxKBpbr5 = BigInt("1241")
		const addressKtX2of = accounts[2]
		const uintQX55iJN = BigInt("784")
		const addressBZhdBAD = accounts[4]
		await Token50X100ZLLUKu4.setWhiteList.call(addressBkNagKQ, boolndIKmRy, {from: accounts[4]});
		await Token50X100ZLLUKu4.release.call({from: accounts[4]});
		const boolc31ANYg = await Token50X100ZLLUKu4.decreaseApproval.call(addressDFF5AWH, uintO5kMz2a, {from: accounts[4]});
		const boolK0wGT2d = await Token50X100ZLLUKu4.setVesting.call(addressABgHhQ0, uintIDr6Sik, uintJBMJ2Jz, {from: accounts[2]});
		const boolVsw9EJV = await Token50X100ZLLUKu4._transfer.call(addressnyYbZBY, addressOHedVC, uintLz5V1U, uintap2krhp, {from: accounts[4]});
		await Token50X100ZLLUKu4.setLinkingAddresses.call(addresskEel3hL, addressPGDRyL, {from: accounts[1]});
		await Token50X100ZLLUKu4.lock.call({from: accounts[3]});
		const boolEY4nSIV = await Token50X100ZLLUKu4.decreaseApproval.call(addressKtX2of, uintxKBpbr5, {from: accounts[3]});
		const boolddHgVuU = await Token50X100ZLLUKu4.increaseApproval.call(addressBZhdBAD, uintQX55iJN, {from: accounts[5]});

		await expect(Token50X100ZLLUKu4.setWhiteList.call(addressBkNagKQ, boolndIKmRy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YskPCJk = await Token50X100.new({from: accounts[0]});
		const uintKWMMwo3 = BigInt("185")
		const addressXOOCPNT = accounts[4]
		const uintTK9niP = BigInt("1515")
		const addressnkLb7o7 = accounts[3]
		const addresseNchKvR = accounts[1]
		const boolzysahPA = await Token50X100YskPCJk.decreaseApproval.call(addressXOOCPNT, uintKWMMwo3, {from: accounts[2]});
		const boolUUh4oZ0 = await Token50X100YskPCJk.setMaxLockPeriod.call(uintTK9niP, {from: accounts[4]});
		await Token50X100YskPCJk.setLinkingAddresses.call(addresseNchKvR, addressnkLb7o7, {from: accounts[4]});

		assert.equal(boolUUh4oZ0, false)
		assert.equal(boolzysahPA, true)
		await expect(Token50X100YskPCJk.setLinkingAddresses.call(addresseNchKvR, addressnkLb7o7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YskPCJk = await Token50X100.new({from: accounts[0]});
		const uintuINa4qo = BigInt("185")
		const addressP5ko2k = accounts[4]
		const uint7pK68i = BigInt("749")
		const addressdJMxOdR = accounts[4]
		const uintIY7SGK7 = BigInt("1515")
		const addressrqcUvPI = accounts[4]
		const addresswgh1nC4 = accounts[1]
		const uintsVZcarg = BigInt("1159")
		const uintIAfli5d = BigInt("1560")
		const addressOSmPhtw = accounts[4]
		const boolzysahPA = await Token50X100YskPCJk.decreaseApproval.call(addressP5ko2k, uintuINa4qo, {from: accounts[2]});
		const boolH9nAZl6 = await Token50X100YskPCJk.increaseApproval.call(addressdJMxOdR, uint7pK68i, {from: accounts[5]});
		const boolUUh4oZ0 = await Token50X100YskPCJk.setMaxLockPeriod.call(uintIY7SGK7, {from: accounts[4]});
		await Token50X100YskPCJk.setLinkingAddresses.call(addresswgh1nC4, addressrqcUvPI, {from: accounts[4]});
		const boolJ7jOW3a = await Token50X100YskPCJk.setVesting.call(addressOSmPhtw, uintIAfli5d, uintsVZcarg, {from: accounts[4]});

		assert.equal(boolH9nAZl6, true)
		assert.equal(boolUUh4oZ0, false)
		assert.equal(boolzysahPA, true)
		await expect(Token50X100YskPCJk.setLinkingAddresses.call(addresswgh1nC4, addressrqcUvPI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100ZLLUKu4 = await Token50X100.new({from: accounts[4]});
		const boolndIKmRy = true
		const addressykFnmtT = accounts[0]
		const uintqqL96jp = BigInt("1421")
		const addressk9cYH64 = accounts[3]
		const uinttak50w2 = BigInt("52")
		const uintmaN93VX = BigInt("188")
		const addressbLkE9Qx = accounts[1]
		const addressXPQXCiG = accounts[1]
		const uintPNva8qs = BigInt("156")
		const addressdGG0lmg = accounts[4]
		const addressqRNV06R = accounts[0]
		const uintO9bO6f7 = BigInt("236")
		const addressIVhqEJJ = accounts[4]
		const uintQNSV3si = BigInt("784")
		const addressuUbPl5n = accounts[4]
		const uintwQyNIt = BigInt("1372")
		const uintCITSBpc = BigInt("616")
		const address0CszlR = accounts[0]
		const uint256aV0qFIv = await Token50X100ZLLUKu4.totalSupply.call({from: accounts[0]});
		await Token50X100ZLLUKu4.setWhiteList.call(addressykFnmtT, boolndIKmRy, {from: accounts[4]});
		const boolc31ANYg = await Token50X100ZLLUKu4.decreaseApproval.call(addressk9cYH64, uintqqL96jp, {from: accounts[4]});
		const boolVsw9EJV = await Token50X100ZLLUKu4._transfer.call(addressXPQXCiG, addressbLkE9Qx, uintmaN93VX, uinttak50w2, {from: accounts[4]});
		const boolS0mXcdJ = await Token50X100ZLLUKu4.transferFrom.call(addressqRNV06R, addressdGG0lmg, uintPNva8qs, {from: accounts[5]});
		const boolSePQ9lM = await Token50X100ZLLUKu4.decreaseApproval.call(addressIVhqEJJ, uintO9bO6f7, {from: accounts[4]});
		await Token50X100ZLLUKu4.lock.call({from: accounts[3]});
		const boolddHgVuU = await Token50X100ZLLUKu4.increaseApproval.call(addressuUbPl5n, uintQNSV3si, {from: accounts[5]});
		const boolYNAmi5m = await Token50X100ZLLUKu4.setVesting.call(address0CszlR, uintCITSBpc, uintwQyNIt, {from: accounts[2]});

		assert.equal(uint256aV0qFIv, BigInt("4714285714285710"))
		await expect(Token50X100ZLLUKu4.setWhiteList.call(addressykFnmtT, boolndIKmRy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YskPCJk = await Token50X100.new({from: accounts[0]});
		const uintK7WXXOa = BigInt("185")
		const addressQ6S0gZl = accounts[4]
		const addresseUl6l89 = "0x0000000000000000000000000000000000000001"
		const addressxREtt7S = accounts[0]
		const uintM199UwE = BigInt("902")
		const addressZO1Yalp = accounts[5]
		const uintZf2pliD = BigInt("1515")
		const uintR57AVhV = BigInt("250")
		const addressFXsFYT = accounts[3]
		const addressPs0RTTQ = accounts[1]
		const boolzysahPA = await Token50X100YskPCJk.decreaseApproval.call(addressQ6S0gZl, uintK7WXXOa, {from: accounts[2]});
		await Token50X100YskPCJk.setLinkingAddresses.call(addressxREtt7S, addresseUl6l89, {from: accounts[0]});
		const booldQGfkZS = await Token50X100YskPCJk.transfer.call(addressZO1Yalp, uintM199UwE, {from: accounts[3]});
		const boolUUh4oZ0 = await Token50X100YskPCJk.setMaxLockPeriod.call(uintZf2pliD, {from: accounts[4]});
		const boolbY1PFSN = await Token50X100YskPCJk.setMaxLockPeriod.call(uintR57AVhV, {from: accounts[2]});
		await Token50X100YskPCJk.setLinkingAddresses.call(addressPs0RTTQ, addressFXsFYT, {from: accounts[4]});

		assert.equal(boolzysahPA, true)
		await expect(Token50X100YskPCJk.setLinkingAddresses.call(addressxREtt7S, addresseUl6l89, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100JX0bej = await Token50X100.new({from: accounts[4]});
		const uintZWXVh8 = BigInt("922")
		const uintO6gnx3S = BigInt("169")
		const uintNpMasx = BigInt("1847")
		const addresstraSsBh = accounts[0]
		const booluKbepk = await Token50X100JX0bej.setMaxLockPeriod.call(uintZWXVh8, {from: accounts[1]});
		const boolG8eVtOr = await Token50X100JX0bej.setMaxLockPeriod.call(uintO6gnx3S, {from: accounts[2]});
		const booliLoSCbk = await Token50X100JX0bej.approve.call(addresstraSsBh, uintNpMasx, {from: accounts[2]});
		await Token50X100JX0bej.onlyOwner.call({from: accounts[2]});

		assert.equal(boolG8eVtOr, false)
		assert.equal(booliLoSCbk, true)
		assert.equal(booluKbepk, false)
		await expect(Token50X100JX0bej.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YskPCJk = await Token50X100.new({from: accounts[0]});
		const uintQldPwnv = BigInt("145")
		const addressyN6fc38 = accounts[4]
		const addressFTvsuvX = accounts[2]
		const addressbVpp2yZ = accounts[3]
		const boolzysahPA = await Token50X100YskPCJk.decreaseApproval.call(addressyN6fc38, uintQldPwnv, {from: accounts[2]});
		const uint256SJ6fR3G = await Token50X100YskPCJk.allowance.call(addressbVpp2yZ, addressFTvsuvX, {from: accounts[2]});

		assert.equal(boolzysahPA, true)
		assert.equal(uint256SJ6fR3G, BigInt("0"))
	});

	it('test for Token50X100', async () => {
		const Token50X100YskPCJk = await Token50X100.new({from: accounts[0]});
		const addressTXHsbkK = accounts[4]
		const addressLtHWEVe = "0x0000000000000000000000000000000000000001"
		const addressnUr3zkm = accounts[0]
		const uintq7qK9Xa = BigInt("2009")
		const address5B1Cpj = accounts[3]
		const uintmhuYnOc = BigInt("136")
		const addressOSOHTS = accounts[5]
		const uintUGoKCbh = BigInt("262")
		const addressrejBEX = accounts[4]
		const uint256yZ5Tcaj = await Token50X100YskPCJk.balanceOf.call(addressTXHsbkK, {from: accounts[4]});
		const addressHFHNJ9P = await Token50X100YskPCJk.transferOwnership.call(addressLtHWEVe, {from: accounts[0]});
		const uint2560dasQg = await Token50X100YskPCJk.balanceOf.call(addressnUr3zkm, {from: accounts[1]});
		const boolJo2YscC = await Token50X100YskPCJk.transfer.call(address5B1Cpj, uintq7qK9Xa, {from: "0x0000000000000000000000000000000000000001"});
		const boolzysahPA = await Token50X100YskPCJk.decreaseApproval.call(addressOSOHTS, uintmhuYnOc, {from: accounts[2]});
		const bools44u5OR = await Token50X100YskPCJk.transfer.call(addressrejBEX, uintUGoKCbh, {from: accounts[2]});

		assert.equal(uint2560dasQg, BigInt("0"))
		assert.equal(uint256yZ5Tcaj, BigInt("0"))
		await expect(Token50X100YskPCJk.transfer.call(address5B1Cpj, uintq7qK9Xa, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YskPCJk = await Token50X100.new({from: accounts[0]});
		const uintFZcsr8o = BigInt("145")
		const addressJU3S1Hk = accounts[6]
		const uintf2QDgZk = BigInt("1385")
		const uinted96KWT = BigInt("656")
		const addresshKuGFyO = accounts[3]
		const boolzysahPA = await Token50X100YskPCJk.decreaseApproval.call(addressJU3S1Hk, uintFZcsr8o, {from: accounts[2]});
		const boolfvcTNUw = await Token50X100YskPCJk.setVesting.call(addresshKuGFyO, uinted96KWT, uintf2QDgZk, {from: accounts[0]});

		assert.equal(boolfvcTNUw, true)
		assert.equal(boolzysahPA, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100YskPCJk = await Token50X100.new({from: accounts[0]});
		const uinttzqfWI0 = BigInt("88")
		const stringI5VrANN = "xMOg"
		const stringp1RQ2LP = "1tAEb4eDmbCVSrvCQVrDwTnyxihlPqwPo6OY4c8gSF6nQgaCFWkREWm0g1sGu2qcU4BnRwwctfUaHd8MnCwjZELqPKNyqj"
		const uintze9v9Iw = BigInt("1276")
		const uintEmUSuCi = BigInt("145")
		const addressa8iPQVU = accounts[5]
		const boolcMXE5y6 = await Token50X100YskPCJk.setSymbolNameDecimals.call(stringp1RQ2LP, stringI5VrANN, uinttzqfWI0, {from: accounts[0]});
		const boolhWGymW2 = await Token50X100YskPCJk.setMaxLockPeriod.call(uintze9v9Iw, {from: accounts[4]});
		const boolzysahPA = await Token50X100YskPCJk.decreaseApproval.call(addressa8iPQVU, uintEmUSuCi, {from: accounts[2]});

		assert.equal(boolhWGymW2, false)
		assert.equal(boolzysahPA, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100YskPCJk = await Token50X100.new({from: accounts[0]});
		const addressGcLkvFu = "0x0000000000000000000000000000000000000001"
		const uintTJ0a3JJ = BigInt("1879")
		const addressiwuHQ6n = accounts[0]
		const uintPi7shuQ = BigInt("126")
		const addressu8mqEXi = accounts[5]
		const boolFoU5NLZ = false
		const addressC8JY8vR = accounts[2]
		const addressUjoOYHu = accounts[3]
		const addressq8XUagm = accounts[4]
		await Token50X100YskPCJk.setTokenContract.call(addressGcLkvFu, {from: accounts[0]});
		const boolQxltY0f = await Token50X100YskPCJk.increaseApproval.call(addressiwuHQ6n, uintTJ0a3JJ, {from: accounts[2]});
		const boolzysahPA = await Token50X100YskPCJk.decreaseApproval.call(addressu8mqEXi, uintPi7shuQ, {from: accounts[2]});
		await Token50X100YskPCJk.setWhiteListReceivers.call(addressC8JY8vR, boolFoU5NLZ, {from: accounts[3]});
		await Token50X100YskPCJk.setLinkingAddresses.call(addressq8XUagm, addressUjoOYHu, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100YskPCJk.setTokenContract.call(addressGcLkvFu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YskPCJk = await Token50X100.new({from: accounts[0]});
		const uintVJHchf5 = BigInt("765")
		const addresslBWgBCd = "0x0000000000000000000000000000000000000000"
		const uintmbQNK0 = BigInt("997")
		const uintHInWOld = BigInt("1037")
		const addressULqiAy2 = accounts[2]
		const uintJ3PvnU = BigInt("1757")
		const addressJY0FUGN = accounts[1]
		const boolSZjwTif = await Token50X100YskPCJk.transfer.call(addresslBWgBCd, uintVJHchf5, {from: accounts[1]});
		const boolSWVbOWj = await Token50X100YskPCJk.setVesting.call(addressULqiAy2, uintHInWOld, uintmbQNK0, {from: accounts[2]});
		const boolT06Okrs = await Token50X100YskPCJk.transfer.call(addressJY0FUGN, uintJ3PvnU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100YskPCJk.transfer.call(addresslBWgBCd, uintVJHchf5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YskPCJk = await Token50X100.new({from: accounts[0]});
		const uintA5iEb3D = BigInt("765")
		const addressecDmAwB = "0x00000000000000000000000000000000000000-1"
		const uintN0uFXx = BigInt("1846")
		const uintAHZIfst = BigInt("1026")
		const boolSZjwTif = await Token50X100YskPCJk.transfer.call(addressecDmAwB, uintA5iEb3D, {from: accounts[1]});
		const boolskl6X0v = await Token50X100YskPCJk.safeLock.call(uintAHZIfst, uintN0uFXx, {from: accounts[4]});

		await expect(Token50X100YskPCJk.transfer.call(addressecDmAwB, uintA5iEb3D, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})