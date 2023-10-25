const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100ycGaGb1 = await Token50X100.new({from: accounts[1]});
		const uintuHeq8mL = BigInt("214")
		const stringzKHJbOU = "Er2wxEyG9em8WpIxEk8DTcvCEGNXomKjbEMgUVSQGXCU685mfDlw4XOIzwiLX6EX3VDMKdBSz"
		const stringKyBci4H = "xzxhfMoVr"
		const uintrm0MbVd = BigInt("501")
		const addresspnMgkK = accounts[0]
		const boolyJl9xK = false
		const addressix9ZfN = accounts[3]
		const addressScRBNr7 = accounts[3]
		const addressUFJAq2L = accounts[1]
		const boolUsY6OKi = await Token50X100ycGaGb1.setSymbolNameDecimals.call(stringKyBci4H, stringzKHJbOU, uintuHeq8mL, {from: accounts[2]});
		const boolqGtvgDu = await Token50X100ycGaGb1.increaseApproval.call(addresspnMgkK, uintrm0MbVd, {from: accounts[3]});
		await Token50X100ycGaGb1.setWhiteListReceivers.call(addressix9ZfN, boolyJl9xK, {from: accounts[3]});
		await Token50X100ycGaGb1.lock.call({from: accounts[1]});
		const uint256fKhBdyJ = await Token50X100ycGaGb1.allowance.call(addressUFJAq2L, addressScRBNr7, {from: accounts[2]});

		await expect(Token50X100ycGaGb1.setSymbolNameDecimals.call(stringKyBci4H, stringzKHJbOU, uintuHeq8mL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100S7sItj = await Token50X100.new({from: accounts[2]});
		const uintexyb3KA = BigInt("1083")
		const addressnjyAajA = accounts[2]
		const addressrDgk7F9 = accounts[3]
		const addressFrfgFjR = accounts[4]
		const uintqiv75Yg = BigInt("1207")
		const addressHMEzkRI = accounts[3]
		const boolIYpTb0 = await Token50X100S7sItj.transferFrom.call(addressrDgk7F9, addressnjyAajA, uintexyb3KA, {from: accounts[1]});
		const addressROKfSVx = await Token50X100S7sItj.setOriginalContract.call(addressFrfgFjR, {from: accounts[2]});
		const boolE8DQNGW = await Token50X100S7sItj.setMaxLockPeriod.call(uintqiv75Yg, {from: accounts[2]});
		await Token50X100S7sItj.setTokenContract.call(addressHMEzkRI, {from: accounts[2]});
		await Token50X100S7sItj.release.call({from: "0x0000000000000000000000000000000000000001"});
		await Token50X100S7sItj.release.call({from: accounts[0]});

		await expect(Token50X100S7sItj.transferFrom.call(addressrDgk7F9, addressnjyAajA, uintexyb3KA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100n6N7HSx = await Token50X100.new({from: accounts[5]});
		const uinthngjj37 = BigInt("669")
		const addressocPvSkl = accounts[4]
		const uintNrF2QLo = BigInt("1621")
		const addressYurGFK = accounts[1]
		const uintKyCqNQB = BigInt("1888")
		const addresszYNsTZ = accounts[0]
		const addressXJmyu5g = accounts[2]
		const uintx54OY4z = BigInt("1761")
		const addressr4W4zb4 = accounts[1]
		const uintNg1606s = BigInt("1561")
		const addressVlZH2B = accounts[1]
		const uintaKOHfut = BigInt("1131")
		const addressJI7RMC = accounts[1]
		const addressuFUg5pC = accounts[0]
		const boolZBELr0y = await Token50X100n6N7HSx.transfer.call(addressocPvSkl, uinthngjj37, {from: accounts[2]});
		const boolDLq1LGI = await Token50X100n6N7HSx.increaseApproval.call(addressYurGFK, uintNrF2QLo, {from: accounts[1]});
		const boolZAPEE2d = await Token50X100n6N7HSx.transferFrom.call(addressXJmyu5g, addresszYNsTZ, uintKyCqNQB, {from: accounts[3]});
		const booljqeN0QT = await Token50X100n6N7HSx.transfer.call(addressr4W4zb4, uintx54OY4z, {from: accounts[1]});
		const boolKFIgho1 = await Token50X100n6N7HSx.transfer.call(addressVlZH2B, uintNg1606s, {from: accounts[3]});
		const booljUHwvn = await Token50X100n6N7HSx.issueTokens.call(addressuFUg5pC, addressJI7RMC, uintaKOHfut, {from: accounts[4]});

		await expect(Token50X100n6N7HSx.transfer.call(addressocPvSkl, uinthngjj37, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100VctJrak = await Token50X100.new({from: accounts[1]});
		const uintjMIFLwU = BigInt("138")
		const uintYvBBcmL = BigInt("104")
		const stringZxJJ8QQ = "aU2cPxB6z6rluAlDLnt08PQmypoIIFII2foo25rcSjQ5FSoRUzDYEPXNIlbSXU1gO68WQDAvLErESOStQgw"
		const stringSmZWFNa = "v7xFNibgyKxPefw59T2L5nqTbMU15f9dBvRwaqiWP38oAsIJwK66yVBAkKXiKIvbcfaXcf5JI"
		const uintrNajJp = BigInt("683")
		const addressbN05z3z = accounts[0]
		const booliDuJBSq = await Token50X100VctJrak.setMaxLockPeriod.call(uintjMIFLwU, {from: accounts[2]});
		await Token50X100VctJrak.setSymbolNameDecimals.call(stringSmZWFNa, stringZxJJ8QQ, uintYvBBcmL, {from: accounts[1]});
		const boolBLhwE4s = await Token50X100VctJrak.transfer.call(addressbN05z3z, uintrNajJp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booliDuJBSq, false)
		await expect(Token50X100VctJrak.setSymbolNameDecimals.call(stringSmZWFNa, stringZxJJ8QQ, uintYvBBcmL, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100l83OTs = await Token50X100.new({from: accounts[3]});
		const addressdKWD155 = accounts[1]
		const uintCIwPgbs = BigInt("685")
		const uintnH8Wq5U = BigInt("1899")
		const addressezh0Soa = accounts[2]
		const addressYihW4S4 = accounts[2]
		const uinteCrIPRj = BigInt("1231")
		const addressO9pDFN3 = accounts[5]
		const addressZfjxLkC = await Token50X100l83OTs.setOriginalContract.call(addressdKWD155, {from: accounts[2]});
		const boolBETtXYA = await Token50X100l83OTs.setMaxLockPeriod.call(uintCIwPgbs, {from: accounts[3]});
		const boollajfaE = await Token50X100l83OTs.transferFrom.call(addressYihW4S4, addressezh0Soa, uintnH8Wq5U, {from: accounts[3]});
		await Token50X100l83OTs.release.call({from: accounts[4]});
		const boolakrGBOZ = await Token50X100l83OTs.increaseApproval.call(addressO9pDFN3, uinteCrIPRj, {from: accounts[4]});
		await Token50X100l83OTs.onlyOwner.call({from: accounts[3]});

		await expect(Token50X100l83OTs.setOriginalContract.call(addressdKWD155, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100tVfdxdA = await Token50X100.new({from: accounts[0]});
		const uintE21hEoI = BigInt("1918")
		const addressF72UmHN = accounts[1]
		const addressqqLkUv = accounts[0]
		const uintkboGeOy = BigInt("1233")
		const uintCXODWT4 = BigInt("1158")
		const addressvZCnlNf = accounts[3]
		const uintWN05qys = BigInt("484")
		const addressiSM3dY0 = accounts[1]
		const uintm4qS5V = BigInt("1311")
		const uint8zvg1V = BigInt("1045")
		const addressRP0TcGT = accounts[4]
		const addressPmXCSap = accounts[3]
		const addressTyR7X9I = accounts[1]
		const boolmDb7wHA = await Token50X100tVfdxdA.approve.call(addressF72UmHN, uintE21hEoI, {from: accounts[4]});
		await Token50X100tVfdxdA.setTokenContract.call(addressqqLkUv, {from: accounts[4]});
		const booluwnM5vG = await Token50X100tVfdxdA.setVesting.call(addressvZCnlNf, uintCXODWT4, uintkboGeOy, {from: accounts[0]});
		const boolpADL90M = await Token50X100tVfdxdA.decreaseApproval.call(addressiSM3dY0, uintWN05qys, {from: accounts[3]});
		const boolwpaRJF7 = await Token50X100tVfdxdA._transfer.call(addressPmXCSap, addressRP0TcGT, uint8zvg1V, uintm4qS5V, {from: accounts[2]});
		const addressQemlzfr = await Token50X100tVfdxdA.transferOwnership.call(addressTyR7X9I, {from: accounts[4]});

		assert.equal(boolmDb7wHA, true)
		await expect(Token50X100tVfdxdA.setTokenContract.call(addressqqLkUv, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100oVW82UE = await Token50X100.new({from: accounts[0]});
		const uintBjeZ1Q = BigInt("1469")
		const addressfPjLPCl = accounts[0]
		const uintRIFYXll = BigInt("140")
		const stringLBf3XXc = "dNAfIVGQuoUQ31sZIPzhzacVE1xp9w4E2jdXdfCzsBmWkZlWuRUhIL1c6fHU4oR"
		const stringvF7z8HQ = "8mKhcigd1A36wCHQV8lASl3dx"
		const uintDykK3RH = BigInt("2000")
		const uintVBRtcTu = BigInt("656")
		const addressY8HVjFN = accounts[1]
		const boolK9AhipI = false
		const addresssvbR0DJ = accounts[1]
		const boolyUPOa9e = await Token50X100oVW82UE.decreaseApproval.call(addressfPjLPCl, uintBjeZ1Q, {from: accounts[4]});
		const boolNYoweMO = await Token50X100oVW82UE.setSymbolNameDecimals.call(stringvF7z8HQ, stringLBf3XXc, uintRIFYXll, {from: accounts[0]});
		const uint256ZA4dzhN = await Token50X100oVW82UE.totalSupply.call({from: accounts[5]});
		const boolroKGkTC = await Token50X100oVW82UE.setMaxLockPeriod.call(uintDykK3RH, {from: accounts[0]});
		const boolRw6ZQYL = await Token50X100oVW82UE.transfer.call(addressY8HVjFN, uintVBRtcTu, {from: accounts[3]});
		await Token50X100oVW82UE.setWhiteListReceivers.call(addresssvbR0DJ, boolK9AhipI, {from: accounts[0]});

		assert.equal(boolroKGkTC, false)
		assert.equal(boolyUPOa9e, true)
		assert.equal(uint256ZA4dzhN, BigInt("4714285714285710"))
		await expect(Token50X100oVW82UE.transfer.call(addressY8HVjFN, uintVBRtcTu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100KDlqny8 = await Token50X100.new({from: accounts[4]});
		const uintqVY1kyq = BigInt("1560")
		const uintxW34JZ = BigInt("1793")
		const uintE2yRXxH = BigInt("1871")
		const addresspAUzIjU = accounts[2]
		const uintdeMIAJ = BigInt("707")
		const addressbZgaGd8 = "0x0000000000000000000000000000000000000001"
		const uintQWRDyaU = BigInt("1988")
		const uintX7EjBNj = BigInt("1810")
		const addressdyWTLY = accounts[2]
		const addressRkWaS9i = "0x0000000000000000000000000000000000000001"
		const addressgRGKBc = accounts[2]
		const uinta73rt1 = BigInt("219")
		const stringWrBTQZ1 = "IKx9NM893g3AfQiGksaENwhUBumU1RKNXCFc3ev8ohoAKtNvatgu8FmG8I"
		const stringJ7Y1hwq = "ykVgGi1j8ZJ8Gw4gatJnOLvsbNxwpCIAqAsJsupCFReYRiYOOjRjSxl83Chbky8e1WuetM"
		const uintJkYNGdc = BigInt("988")
		const uintk1vAE4 = BigInt("1358")
		const addressf2MaFDP = accounts[4]
		const addressqpXs3N3 = accounts[2]
		const boolM1J7aUJ = await Token50X100KDlqny8.safeLock.call(uintxW34JZ, uintqVY1kyq, {from: accounts[1]});
		const boolhFmviEX = await Token50X100KDlqny8.transfer.call(addresspAUzIjU, uintE2yRXxH, {from: accounts[3]});
		const boolO8bRZU1 = await Token50X100KDlqny8.increaseApproval.call(addressbZgaGd8, uintdeMIAJ, {from: accounts[2]});
		const boolO55Aa6H = await Token50X100KDlqny8._transfer.call(addressRkWaS9i, addressdyWTLY, uintX7EjBNj, uintQWRDyaU, {from: accounts[3]});
		await Token50X100KDlqny8.setTokenContract.call(addressgRGKBc, {from: accounts[2]});
		const boolgH9lZgj = await Token50X100KDlqny8.setSymbolNameDecimals.call(stringJ7Y1hwq, stringWrBTQZ1, uinta73rt1, {from: accounts[4]});
		await Token50X100KDlqny8.lock.call({from: accounts[3]});
		const boolUvONEta = await Token50X100KDlqny8._transfer.call(addressqpXs3N3, addressf2MaFDP, uintk1vAE4, uintJkYNGdc, {from: accounts[3]});

		await expect(Token50X100KDlqny8.safeLock.call(uintxW34JZ, uintqVY1kyq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100fvCaef = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintEFhCQc = BigInt("465")
		const uinttTADeVV = BigInt("778")
		const addressOjY60O2 = accounts[1]
		const addressD6hNjl1 = accounts[5]
		const addressD1ksALN = accounts[1]
		const uintnRiJVBI = BigInt("239")
		const stringnTHDSjs = "yPCHoWe0XX4HD9tfqhpSBwB473nL34VKjIT7DUaymIN1cTtwjSqx5p71PAkda9K4RzmyFfrqd"
		const stringBqU4szA = "D8vecH2LFyT2yiz6TjxTUrDfCJXLhvwdVIHs9OTYQPejDYT3lXKJtn948941wDOLdThQ7mPqpVGlyaOrS"
		const uintIOghveW = BigInt("439")
		const addresskZgvblA = accounts[5]
		const boolWFGP6BY = await Token50X100fvCaef._transfer.call(addressD6hNjl1, addressOjY60O2, uinttTADeVV, uintEFhCQc, {from: accounts[1]});
		await Token50X100fvCaef.release.call({from: "0x0000000000000000000000000000000000000001"});
		const addressWxFliin = await Token50X100fvCaef.setOriginalContract.call(addressD1ksALN, {from: accounts[3]});
		const boolPMdTtn = await Token50X100fvCaef.setSymbolNameDecimals.call(stringBqU4szA, stringnTHDSjs, uintnRiJVBI, {from: "0x0000000000000000000000000000000000000001"});
		const boolPCBEuAv = await Token50X100fvCaef.setMaxLockPeriod.call(uintIOghveW, {from: accounts[0]});
		const uint256T7l9Lzt = await Token50X100fvCaef.balanceOf.call(addresskZgvblA, {from: accounts[4]});
	});

	it('test for Token50X100', async () => {
		const Token50X100oVW82UE = await Token50X100.new({from: accounts[0]});
		const uintLIis9Qk = BigInt("1469")
		const addressDcSSwFA = accounts[0]
		const uintZPJjz9x = BigInt("140")
		const stringLBf3XXc = "dNAfIVGQuoUQ31sZIPzhzacVE1xp9w4E2jdXdfCzsBmWkZlWuRUhIL1c6fHU4oR"
		const stringvF7z8HQ = "8mKhcigd1A36wCHQV8lASl3dx"
		const boollBci50Z = true
		const addressv5Rzy8u = accounts[0]
		const uintuacMshA = BigInt("169")
		const uintUhKK2W2 = BigInt("656")
		const addressD7a52i6 = accounts[1]
		const uintBtDibIu = BigInt("604")
		const addressYSKr8PW = accounts[1]
		const boolK9AhipI = false
		const addressouesdoT = accounts[1]
		const boolyUPOa9e = await Token50X100oVW82UE.decreaseApproval.call(addressDcSSwFA, uintLIis9Qk, {from: accounts[4]});
		const boolNYoweMO = await Token50X100oVW82UE.setSymbolNameDecimals.call(stringvF7z8HQ, stringLBf3XXc, uintZPJjz9x, {from: accounts[0]});
		const uint256ZA4dzhN = await Token50X100oVW82UE.totalSupply.call({from: accounts[5]});
		await Token50X100oVW82UE.setWhiteListReceivers.call(addressv5Rzy8u, boollBci50Z, {from: accounts[0]});
		const boolroKGkTC = await Token50X100oVW82UE.setMaxLockPeriod.call(uintuacMshA, {from: accounts[0]});
		const boolRw6ZQYL = await Token50X100oVW82UE.transfer.call(addressD7a52i6, uintUhKK2W2, {from: accounts[3]});
		const boolM64IquO = await Token50X100oVW82UE.decreaseApproval.call(addressYSKr8PW, uintBtDibIu, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100oVW82UE.setWhiteListReceivers.call(addressouesdoT, boolK9AhipI, {from: accounts[0]});

		assert.equal(boolyUPOa9e, true)
		assert.equal(uint256ZA4dzhN, BigInt("4714285714285710"))
		await expect(Token50X100oVW82UE.setWhiteListReceivers.call(addressv5Rzy8u, boollBci50Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100oVW82UE = await Token50X100.new({from: accounts[0]});
		const uintqAt1ZpO = BigInt("1469")
		const addressxSyaUIm = accounts[0]
		const uintzY5wRSL = BigInt("140")
		const stringLBf3XXc = "dNAfIVGQuoUQ31sZIPzhzacVE1xp9w4E2jdXdfCzsBmWkZlWuRUhIL1c6fHU4oR"
		const stringvF7z8HQ = "8mKhcigd1A36wCHQV8lASl3dx"
		const uintjwBB5FJ = BigInt("2008")
		const uintrPaqf0a = BigInt("818")
		const addressZMe3esP = accounts[5]
		const uint2nab7H = BigInt("656")
		const addressNL4xd9z = accounts[1]
		const boolK9AhipI = false
		const addressL2oi8f = accounts[1]
		const boolyUPOa9e = await Token50X100oVW82UE.decreaseApproval.call(addressxSyaUIm, uintqAt1ZpO, {from: accounts[4]});
		const boolNYoweMO = await Token50X100oVW82UE.setSymbolNameDecimals.call(stringvF7z8HQ, stringLBf3XXc, uintzY5wRSL, {from: accounts[0]});
		const boolroKGkTC = await Token50X100oVW82UE.setMaxLockPeriod.call(uintjwBB5FJ, {from: accounts[0]});
		const boolwUajPaD = await Token50X100oVW82UE.increaseApproval.call(addressZMe3esP, uintrPaqf0a, {from: accounts[2]});
		const boolRw6ZQYL = await Token50X100oVW82UE.transfer.call(addressNL4xd9z, uint2nab7H, {from: accounts[3]});
		await Token50X100oVW82UE.setWhiteListReceivers.call(addressL2oi8f, boolK9AhipI, {from: accounts[0]});

		assert.equal(boolroKGkTC, false)
		assert.equal(boolwUajPaD, true)
		assert.equal(boolyUPOa9e, true)
		await expect(Token50X100oVW82UE.transfer.call(addressNL4xd9z, uint2nab7H, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100oVW82UE = await Token50X100.new({from: accounts[0]});
		const uinteS8II7A = BigInt("1469")
		const addressD2CSXq = accounts[0]
		const uintQZksGjZ = BigInt("140")
		const stringLBf3XXc = "dNAfIVGQuoUQ31sZIPzhzacVE1xp9w4E2jdXdfCzsBmWkZlWuRUhIL1c6fHU4oR"
		const stringvF7z8HQ = "8mKhcigd1A36wCHQV8lASl3dx"
		const addresslu5YgVE = accounts[3]
		const addressQfdL3Hc = accounts[5]
		const uintnjiLkHQ = BigInt("2000")
		const uintd8Qcsk3 = BigInt("670")
		const addressZquST5q = accounts[1]
		const uintQ5HGfV4 = BigInt("533")
		const uintwOCxEVx = BigInt("553")
		const addressZSpseYn = accounts[2]
		const address7zxrr2 = accounts[3]
		const boolK9AhipI = false
		const addressJBRX3z7 = accounts[1]
		const boolyUPOa9e = await Token50X100oVW82UE.decreaseApproval.call(addressD2CSXq, uinteS8II7A, {from: accounts[4]});
		const boolNYoweMO = await Token50X100oVW82UE.setSymbolNameDecimals.call(stringvF7z8HQ, stringLBf3XXc, uintQZksGjZ, {from: accounts[0]});
		const uint256ZA4dzhN = await Token50X100oVW82UE.totalSupply.call({from: accounts[5]});
		await Token50X100oVW82UE.setLinkingAddresses.call(addressQfdL3Hc, addresslu5YgVE, {from: accounts[0]});
		const boolroKGkTC = await Token50X100oVW82UE.setMaxLockPeriod.call(uintnjiLkHQ, {from: accounts[0]});
		const boolRw6ZQYL = await Token50X100oVW82UE.transfer.call(addressZquST5q, uintd8Qcsk3, {from: accounts[3]});
		const boolmATCyaU = await Token50X100oVW82UE._transfer.call(address7zxrr2, addressZSpseYn, uintwOCxEVx, uintQ5HGfV4, {from: accounts[0]});
		await Token50X100oVW82UE.setWhiteListReceivers.call(addressJBRX3z7, boolK9AhipI, {from: accounts[0]});

		assert.equal(boolyUPOa9e, true)
		assert.equal(uint256ZA4dzhN, BigInt("4714285714285710"))
		await expect(Token50X100oVW82UE.setLinkingAddresses.call(addressQfdL3Hc, addresslu5YgVE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100VctJrak = await Token50X100.new({from: accounts[1]});
		const uinthz2QJ3I = BigInt("57")
		const uintU85Dg7r = BigInt("104")
		const stringZxJJ8QQ = "aU2cPxB6z6rluAlDLnt08PQmypoIIFII2foo25rcSjQ5FSoRUzDYEPXNIlbSXU1gO68WQDAvErESOStQgw"
		const stringSmZWFNa = "v7xFNibgyKxPefw59T2L5nqTbMU15f9dBvR0aqiWP38oAsIJwK66yVBAkKXiKIvbcfaXcf5JI"
		const uintArnbocT = BigInt("1641")
		const uintfie4wVb = BigInt("2010")
		const addressTBDGi0 = "0x0000000000000000000000000000000000000001"
		const addresshp86DAl = accounts[2]
		const uintIwy9Ch = BigInt("460")
		const addressYAytVDQ = "0x0000000000000000000000000000000000000001"
		const boolOr0U1Ig = true
		const addressDV7OIJq = accounts[0]
		const boolBuxFoO = false
		const addressqyHotZ2 = accounts[1]
		const boolYYIN3CU = await Token50X100VctJrak.setMaxLockPeriod.call(uinthz2QJ3I, {from: accounts[5]});
		await Token50X100VctJrak.setSymbolNameDecimals.call(stringSmZWFNa, stringZxJJ8QQ, uintU85Dg7r, {from: accounts[1]});
		const boolFPp5Z2x = await Token50X100VctJrak._transfer.call(addresshp86DAl, addressTBDGi0, uintfie4wVb, uintArnbocT, {from: accounts[1]});
		const boolywVM1mr = await Token50X100VctJrak.decreaseApproval.call(addressYAytVDQ, uintIwy9Ch, {from: accounts[1]});
		await Token50X100VctJrak.setWhiteListReceivers.call(addressDV7OIJq, boolOr0U1Ig, {from: accounts[2]});
		await Token50X100VctJrak.setWhiteList.call(addressqyHotZ2, boolBuxFoO, {from: accounts[3]});

		assert.equal(boolYYIN3CU, false)
		await expect(Token50X100VctJrak.setSymbolNameDecimals.call(stringSmZWFNa, stringZxJJ8QQ, uintU85Dg7r, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sK9GW0 = await Token50X100.new({from: accounts[4]});
		const addressNseOdpt = accounts[0]
		const addressWAVweBb = accounts[4]
		const uintRlwjA6u = BigInt("1184")
		const addressHcY7CT5 = accounts[2]
		const uintc19rKnZ = BigInt("902")
		const addressqViXYJK = "0x0000000000000000000000000000000000000001"
		const uintzXC0VB = BigInt("104")
		const stringliTxxzp = "d5Lw87wzwh9Sscblp48koW5UDFC5nsdiGcxdcOukC71nd7xTFaCH7rKHQxG4IB64atp2WkpNS8Ghxy8N2A9FdkeHzZVZvg"
		const stringriJ205V = "6L4Coh2gaN9w4qQXoJBeOgbqNmIlp45PGsbeblw9"
		const uint256i0QbYw = await Token50X100sK9GW0.allowance.call(addressWAVweBb, addressNseOdpt, {from: accounts[5]});
		const boolvHJzrCZ = await Token50X100sK9GW0.decreaseApproval.call(addressHcY7CT5, uintRlwjA6u, {from: accounts[3]});
		const boolFZMHlS = await Token50X100sK9GW0.transfer.call(addressqViXYJK, uintc19rKnZ, {from: accounts[2]});
		const boolhY7voTy = await Token50X100sK9GW0.setSymbolNameDecimals.call(stringriJ205V, stringliTxxzp, uintzXC0VB, {from: accounts[3]});

		assert.equal(boolvHJzrCZ, true)
		assert.equal(uint256i0QbYw, BigInt("0"))
		await expect(Token50X100sK9GW0.transfer.call(addressqViXYJK, uintc19rKnZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sK9GW0 = await Token50X100.new({from: accounts[4]});
		const addressQKUuCix = accounts[0]
		const addressqNlKq71 = accounts[4]
		const uintU95iqj = BigInt("1184")
		const addressd2rbTuL = accounts[3]
		const uintCqiXXwP = BigInt("902")
		const addressOgTR9lf = "0x0000000000000000000000000000000000000001"
		const uintF2wIwFe = BigInt("104")
		const stringliTxxzp = "d5Lw87wzwh9Sscblp48koW5UDFC5nsdiGcxdcOukC71nd7xTFaCH7rKHQxG4IB64atp2WkpNS8Ghxy8N2A9FdkeHzZVZvg"
		const stringriJ205V = "6L4Coh2gaN9w4qQXoJBeOgbqNmIlp45PGsbeblw9"
		const uinteDm3CCI = BigInt("22")
		const stringdT81nx3 = "4Rd4sC76KfDV7VLBE7XTZlQSZm2DrxaiR4LGVK7o5p7VgPQhMp6Ayen"
		const stringVuTPBY = "KsOkL4QmdNjFm0DAXTVu7knWmLcn2kce1jkORLb8ks1PvXGu9tSgvyE1edWpfMog3gSzToAWGOxToQWjEwMmQS3Es"
		await Token50X100sK9GW0.lock.call({from: accounts[4]});
		const uint256i0QbYw = await Token50X100sK9GW0.allowance.call(addressqNlKq71, addressQKUuCix, {from: accounts[5]});
		const boolvHJzrCZ = await Token50X100sK9GW0.decreaseApproval.call(addressd2rbTuL, uintU95iqj, {from: accounts[3]});
		const boolFZMHlS = await Token50X100sK9GW0.transfer.call(addressOgTR9lf, uintCqiXXwP, {from: accounts[2]});
		const boolhY7voTy = await Token50X100sK9GW0.setSymbolNameDecimals.call(stringriJ205V, stringliTxxzp, uintF2wIwFe, {from: accounts[3]});
		await Token50X100sK9GW0.setSymbolNameDecimals.call(stringVuTPBY, stringdT81nx3, uinteDm3CCI, {from: accounts[0]});

		await expect(Token50X100sK9GW0.lock.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100VctJrak = await Token50X100.new({from: accounts[1]});
		const uintW5pCHGF = BigInt("26")
		const addressmIjnVSD = accounts[1]
		const uintVPgTeIR = BigInt("683")
		const addressShkvspV = accounts[0]
		const booliL0yKu0 = await Token50X100VctJrak.decreaseApproval.call(addressmIjnVSD, uintW5pCHGF, {from: accounts[4]});
		await Token50X100VctJrak.release.call({from: accounts[1]});
		const boolBLhwE4s = await Token50X100VctJrak.transfer.call(addressShkvspV, uintVPgTeIR, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booliL0yKu0, true)
		await expect(Token50X100VctJrak.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sK9GW0 = await Token50X100.new({from: accounts[4]});
		const addressYHwfgHh = accounts[0]
		const addressR4Kn595 = accounts[4]
		const uintYreb3Rt = BigInt("1184")
		const addresszVcEHdT = accounts[2]
		const uintAy1N6OS = BigInt("597")
		const uintUROW75l = BigInt("712")
		const addressT3xUWxh = accounts[4]
		const boolvsgTKLQ = false
		const address7Zx91E = accounts[1]
		const uintp1C4AW = BigInt("902")
		const addressl9r0VA = "0x0000000000000000000000000000000000000001"
		const addressFL5r7aX = "0x0000000000000000000000000000000000000001"
		const addressxKPhiiQ = accounts[2]
		const uintCX6Wc5H = BigInt("104")
		const stringliTxxzp = "d5Lw87wzwh9Sscblp48koW5UDFC5nsdiGcxdcOukC71nd7xTFaCH7rKHQxG4IB64atp2WkpNS8Ghxy8N2A9FdkeHzZVZvg"
		const stringriJ205V = "6L4Coh2gaN9w4qQXoJBeOgbqNmIlp45PGsbeblw9"
		const uint256i0QbYw = await Token50X100sK9GW0.allowance.call(addressR4Kn595, addressYHwfgHh, {from: accounts[5]});
		const boolvHJzrCZ = await Token50X100sK9GW0.decreaseApproval.call(addresszVcEHdT, uintYreb3Rt, {from: accounts[3]});
		const booleTopV8c = await Token50X100sK9GW0.setMaxLockPeriod.call(uintAy1N6OS, {from: accounts[3]});
		const boolfgtimBA = await Token50X100sK9GW0.decreaseApproval.call(addressT3xUWxh, uintUROW75l, {from: accounts[1]});
		await Token50X100sK9GW0.setWhiteList.call(address7Zx91E, boolvsgTKLQ, {from: accounts[4]});
		const boolFZMHlS = await Token50X100sK9GW0.transfer.call(addressl9r0VA, uintp1C4AW, {from: accounts[2]});
		await Token50X100sK9GW0.setLinkingAddresses.call(addressxKPhiiQ, addressFL5r7aX, {from: accounts[2]});
		const boolhY7voTy = await Token50X100sK9GW0.setSymbolNameDecimals.call(stringriJ205V, stringliTxxzp, uintCX6Wc5H, {from: accounts[3]});

		assert.equal(booleTopV8c, false)
		assert.equal(boolfgtimBA, true)
		assert.equal(boolvHJzrCZ, true)
		assert.equal(uint256i0QbYw, BigInt("0"))
		await expect(Token50X100sK9GW0.setWhiteList.call(address7Zx91E, boolvsgTKLQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sK9GW0 = await Token50X100.new({from: accounts[4]});
		const addressepKxRTv = accounts[0]
		const addressdykGZ8I = accounts[4]
		const uintQbaRrO = BigInt("1184")
		const address7fzJnE = accounts[2]
		const addressfPeHhN1 = accounts[1]
		const uintqTWFAoN = BigInt("597")
		const uintvYgz4H7 = BigInt("712")
		const addressrz0f4UN = accounts[4]
		const uintZFDRhW = BigInt("902")
		const addressmicVIli = "0x0000000000000000000000000000000000000002"
		const addressMzfHOB = "0x0000000000000000000000000000000000000001"
		const addressJEphiNL = accounts[2]
		const uintPaNU2JD = BigInt("104")
		const stringliTxxzp = "d5Lw87wzwh9Sscblp48koW5UDFC5nsdiGcxdcOukC71nd7xTFaCH7rKHQxG4IB64atp2WkpNS8Ghxy8N2A9FdkeHzZVZvg"
		const stringriJ205V = "6L4Coh2gaN9w4qQXoJBeOgbqNmIlp45PGsbeblw9"
		const uint256i0QbYw = await Token50X100sK9GW0.allowance.call(addressdykGZ8I, addressepKxRTv, {from: accounts[5]});
		const boolvHJzrCZ = await Token50X100sK9GW0.decreaseApproval.call(address7fzJnE, uintQbaRrO, {from: accounts[3]});
		const uint256LFcCeNy = await Token50X100sK9GW0.balanceOf.call(addressfPeHhN1, {from: accounts[2]});
		const booleTopV8c = await Token50X100sK9GW0.setMaxLockPeriod.call(uintqTWFAoN, {from: accounts[3]});
		const boolfgtimBA = await Token50X100sK9GW0.decreaseApproval.call(addressrz0f4UN, uintvYgz4H7, {from: accounts[1]});
		const boolFZMHlS = await Token50X100sK9GW0.transfer.call(addressmicVIli, uintZFDRhW, {from: accounts[2]});
		await Token50X100sK9GW0.setLinkingAddresses.call(addressJEphiNL, addressMzfHOB, {from: accounts[2]});
		const boolhY7voTy = await Token50X100sK9GW0.setSymbolNameDecimals.call(stringriJ205V, stringliTxxzp, uintPaNU2JD, {from: accounts[3]});

		assert.equal(booleTopV8c, false)
		assert.equal(boolfgtimBA, true)
		assert.equal(boolvHJzrCZ, true)
		assert.equal(uint256LFcCeNy, BigInt("0"))
		assert.equal(uint256i0QbYw, BigInt("0"))
		await expect(Token50X100sK9GW0.transfer.call(addressmicVIli, uintZFDRhW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100VctJrak = await Token50X100.new({from: accounts[1]});
		const uintURGKukI = BigInt("52")
		const uinto0X8kR5 = BigInt("1175")
		const addresstB6MwPA = accounts[1]
		const uintsPU2FF8 = BigInt("26")
		const addresswzzguK = accounts[2]
		const bool1LUdRn = await Token50X100VctJrak.setVesting.call(addresstB6MwPA, uinto0X8kR5, uintURGKukI, {from: accounts[1]});
		const booliL0yKu0 = await Token50X100VctJrak.decreaseApproval.call(addresswzzguK, uintsPU2FF8, {from: accounts[4]});

		assert.equal(bool1LUdRn, true)
		assert.equal(booliL0yKu0, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100VctJrak = await Token50X100.new({from: accounts[1]});
		const uintSaTAmKj = BigInt("0")
		const addressXLv18Z = accounts[1]
		const uintGlJniRc = BigInt("1124")
		const addressKkUwN5 = accounts[3]
		const uintznEwkqN = BigInt("683")
		const addresshAStG0P = accounts[0]
		const booliL0yKu0 = await Token50X100VctJrak.decreaseApproval.call(addressXLv18Z, uintSaTAmKj, {from: accounts[4]});
		const boolEDk8JkF = await Token50X100VctJrak.approve.call(addressKkUwN5, uintGlJniRc, {from: accounts[3]});
		const boolBLhwE4s = await Token50X100VctJrak.transfer.call(addresshAStG0P, uintznEwkqN, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolEDk8JkF, true)
		assert.equal(booliL0yKu0, true)
		await expect(Token50X100VctJrak.transfer.call(addresshAStG0P, uintznEwkqN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100VctJrak = await Token50X100.new({from: accounts[1]});
		const uintCvuHLLH = BigInt("994")
		const addressWoqvtLf = "0x0000000000000000000000000000000000000000"
		const booljR6N4wj = await Token50X100VctJrak.transfer.call(addressWoqvtLf, uintCvuHLLH, {from: accounts[0]});

		await expect(Token50X100VctJrak.transfer.call(addressWoqvtLf, uintCvuHLLH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100VctJrak = await Token50X100.new({from: accounts[1]});
		const uintJ4vT0pU = BigInt("994")
		const addressH7h5HzR = "0x00000000000000000000000000000000000000-1"
		const uintrEdNDRa = BigInt("1337")
		const addressxP2Icwq = accounts[2]
		const booljR6N4wj = await Token50X100VctJrak.transfer.call(addressH7h5HzR, uintJ4vT0pU, {from: accounts[0]});
		const boolXZDnnxO = await Token50X100VctJrak.transfer.call(addressxP2Icwq, uintrEdNDRa, {from: accounts[3]});

		await expect(Token50X100VctJrak.transfer.call(addressH7h5HzR, uintJ4vT0pU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})