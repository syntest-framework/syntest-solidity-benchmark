const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100dMZ03yk = await Token50X100.new({from: accounts[2]});
		const addressXfDv70 = accounts[4]
		const addresstm2ujjX = accounts[0]
		const uintOXl9I7V = BigInt("2035")
		const addressiawuayU = accounts[1]
		const addressW8cTgd2 = accounts[3]
		const addressqOPTu3q = accounts[0]
		await Token50X100dMZ03yk.setLinkingAddresses.call(addresstm2ujjX, addressXfDv70, {from: accounts[4]});
		const boolaiJQ1sW = await Token50X100dMZ03yk.issueTokens.call(addressW8cTgd2, addressiawuayU, uintOXl9I7V, {from: accounts[5]});
		await Token50X100dMZ03yk.setTokenContract.call(addressqOPTu3q, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100dMZ03yk.setLinkingAddresses.call(addresstm2ujjX, addressXfDv70, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100FJf6KkV = await Token50X100.new({from: accounts[3]});
		const addressx4ujWup = accounts[3]
		const addressZjeIxSd = accounts[2]
		const addresscJI7MQ = accounts[1]
		const uint256sFO18qu = await Token50X100FJf6KkV.totalSupply.call({from: accounts[3]});
		const uint256Ir3vOHT = await Token50X100FJf6KkV.allowance.call(addressZjeIxSd, addressx4ujWup, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100FJf6KkV.setTokenContract.call(addresscJI7MQ, {from: accounts[1]});
		await Token50X100FJf6KkV.onlyOwner.call({from: accounts[4]});

		assert.equal(uint256Ir3vOHT, BigInt("0"))
		assert.equal(uint256sFO18qu, BigInt("4714285714285710"))
		await expect(Token50X100FJf6KkV.setTokenContract.call(addresscJI7MQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100tuyBpXl = await Token50X100.new({from: accounts[5]});
		const uintMydpMvM = BigInt("453")
		const addressWoNpwN1 = accounts[3]
		const addressyL3H2R = accounts[0]
		const addressIbhuIgq = accounts[0]
		const uintF4cO3R1 = BigInt("739")
		const addressfW07ml3 = accounts[1]
		const uintVkybey = BigInt("681")
		const uintVqNEVJk = BigInt("65")
		const stringEJdX4v = "e5iMTTqrErJpZuEEQ4k7Ns5WHnCVajjd7onN5Qmgh2TkGGcEsgHt3BP5"
		const stringtTJjeFi = "O6Hk35U"
		const boolGAZp8MM = await Token50X100tuyBpXl.approve.call(addressWoNpwN1, uintMydpMvM, {from: accounts[2]});
		const addressUfrl2Cz = await Token50X100tuyBpXl.setOriginalContract.call(addressyL3H2R, {from: accounts[1]});
		const addressQPp3urO = await Token50X100tuyBpXl.transferOwnership.call(addressIbhuIgq, {from: accounts[0]});
		const boolNxNMVf = await Token50X100tuyBpXl.decreaseApproval.call(addressfW07ml3, uintF4cO3R1, {from: accounts[3]});
		const boolRBX8y1b = await Token50X100tuyBpXl.setMaxLockPeriod.call(uintVkybey, {from: accounts[1]});
		await Token50X100tuyBpXl.setSymbolNameDecimals.call(stringtTJjeFi, stringEJdX4v, uintVqNEVJk, {from: accounts[1]});

		assert.equal(boolGAZp8MM, true)
		await expect(Token50X100tuyBpXl.setOriginalContract.call(addressyL3H2R, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Zrsgqw = await Token50X100.new({from: accounts[1]});
		const uint6s206W = BigInt("1047")
		const addressJw2PORd = accounts[4]
		const addressXZoTBFC = "0x0000000000000000000000000000000000000001"
		const uinthwCTTL0 = BigInt("1105")
		const addressAGxCRxn = accounts[2]
		const uinthZwmlV5 = BigInt("153")
		const stringDv5BAvf = "z7j4ICwWS8O8O1lr5oUTXOkTLW6DOQ8dw4vS3M"
		const stringEZEDaeo = "YkcQSIE6PfKFhq8JmCQKwb"
		const boolNy5ATsp = await Token50X100Zrsgqw.transferFrom.call(addressXZoTBFC, addressJw2PORd, uint6s206W, {from: accounts[1]});
		const boolaOkfwbQ = await Token50X100Zrsgqw.increaseApproval.call(addressAGxCRxn, uinthwCTTL0, {from: accounts[3]});
		const boolgcitV2y = await Token50X100Zrsgqw.setSymbolNameDecimals.call(stringEZEDaeo, stringDv5BAvf, uinthZwmlV5, {from: accounts[4]});

		await expect(Token50X100Zrsgqw.transferFrom.call(addressXZoTBFC, addressJw2PORd, uint6s206W, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100glkgHL8 = await Token50X100.new({from: accounts[2]});
		const uintTGVnaEV = BigInt("37")
		await Token50X100glkgHL8.lock.call({from: accounts[2]});
		const boolBonTjE9 = await Token50X100glkgHL8.setMaxLockPeriod.call(uintTGVnaEV, {from: accounts[2]});

		await expect(Token50X100glkgHL8.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100tuyBpXl = await Token50X100.new({from: accounts[5]});
		const uintsMlB2uc = BigInt("453")
		const addressQgvJE68 = accounts[3]
		const addresslR84pe = accounts[1]
		const addressmpM9Ne5 = accounts[1]
		const addressZ29hQQz = accounts[0]
		const uintZm7cLQd = BigInt("739")
		const addressBUaZKh = accounts[1]
		const uintuTxQl7C = BigInt("681")
		const boolGAZp8MM = await Token50X100tuyBpXl.approve.call(addressQgvJE68, uintsMlB2uc, {from: accounts[2]});
		const uint256PdGec5 = await Token50X100tuyBpXl.balanceOf.call(addresslR84pe, {from: accounts[4]});
		const addressUfrl2Cz = await Token50X100tuyBpXl.setOriginalContract.call(addressmpM9Ne5, {from: accounts[1]});
		const addressQPp3urO = await Token50X100tuyBpXl.transferOwnership.call(addressZ29hQQz, {from: accounts[0]});
		const boolNxNMVf = await Token50X100tuyBpXl.decreaseApproval.call(addressBUaZKh, uintZm7cLQd, {from: accounts[3]});
		const boolRBX8y1b = await Token50X100tuyBpXl.setMaxLockPeriod.call(uintuTxQl7C, {from: accounts[1]});

		assert.equal(boolGAZp8MM, true)
		assert.equal(uint256PdGec5, BigInt("0"))
		await expect(Token50X100tuyBpXl.setOriginalContract.call(addressmpM9Ne5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Zrsgqw = await Token50X100.new({from: accounts[1]});
		const uintQ6q4KB0 = BigInt("1105")
		const addressyzERj1U = accounts[2]
		const uintA7m6CAl = BigInt("153")
		const stringDv5BAvf = "z7j4ICwWS8O8O1lr5oUTXOkTLW6DOQ8dw4vS3M"
		const stringEZEDaeo = "YkcQSIE6PfKFhq8JmCQKwb"
		const boolaOkfwbQ = await Token50X100Zrsgqw.increaseApproval.call(addressyzERj1U, uintQ6q4KB0, {from: accounts[3]});
		const boolgcitV2y = await Token50X100Zrsgqw.setSymbolNameDecimals.call(stringEZEDaeo, stringDv5BAvf, uintA7m6CAl, {from: accounts[4]});

		assert.equal(boolaOkfwbQ, true)
		await expect(Token50X100Zrsgqw.setSymbolNameDecimals.call(stringEZEDaeo, stringDv5BAvf, uintA7m6CAl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100P0mZ0b = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const addressXsutQVN = accounts[2]
		const uintQgjbXW = BigInt("161")
		const stringAu4eC3 = "fhcGbUre7vIwY"
		const stringNO0Czre = "BS7V7MwnAWGbeqxoVjXkETNKWkvvUamwWnKUusxNnnBQ00CCTYllPFwpq90pwbnWi"
		const uinta5f0oJW = BigInt("1691")
		const addressnaDAOIk = accounts[0]
		const uinteAU9bx = BigInt("353")
		const addressy3d0qM = accounts[5]
		const addresshHlbuzS = accounts[1]
		await Token50X100P0mZ0b.setTokenContract.call(addressXsutQVN, {from: accounts[2]});
		const boolzm4v7xZ = await Token50X100P0mZ0b.setSymbolNameDecimals.call(stringNO0Czre, stringAu4eC3, uintQgjbXW, {from: accounts[4]});
		const boolzCISP6Y = await Token50X100P0mZ0b.transfer.call(addressnaDAOIk, uinta5f0oJW, {from: accounts[0]});
		const boolncWQtt = await Token50X100P0mZ0b.issueTokens.call(addresshHlbuzS, addressy3d0qM, uinteAU9bx, {from: accounts[0]});
	});

	it('test for Token50X100', async () => {
		const Token50X100vuPlLTx = await Token50X100.new({from: accounts[3]});
		const uintSGh94ap = BigInt("872")
		const addressYFIXw5M = accounts[4]
		const uintiunxWkG = BigInt("1940")
		const uintSacqTYD = BigInt("1052")
		const addressw8nzCLY = accounts[4]
		const addressQny5XDz = "0x0000000000000000000000000000000000000001"
		const boolHOLA5W = await Token50X100vuPlLTx.transfer.call(addressYFIXw5M, uintSGh94ap, {from: accounts[5]});
		const boolVUsGuw = await Token50X100vuPlLTx._transfer.call(addressQny5XDz, addressw8nzCLY, uintSacqTYD, uintiunxWkG, {from: accounts[0]});

		await expect(Token50X100vuPlLTx.transfer.call(addressYFIXw5M, uintSGh94ap, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100iWUEM9x = await Token50X100.new({from: accounts[3]});
		const uintuYdlKW = BigInt("2035")
		const uintEQA2zgi = BigInt("660")
		const uintB5YEDU = BigInt("2015")
		const uintmmbUtUv = BigInt("842")
		const boolPKRZ5sk = await Token50X100iWUEM9x.safeLock.call(uintEQA2zgi, uintuYdlKW, {from: accounts[4]});
		const boolrgFOx1Q = await Token50X100iWUEM9x.safeLock.call(uintmmbUtUv, uintB5YEDU, {from: accounts[4]});

		await expect(Token50X100iWUEM9x.safeLock.call(uintEQA2zgi, uintuYdlKW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Zrsgqw = await Token50X100.new({from: accounts[1]});
		const uintlL0iNn = BigInt("134")
		const uintoY0c0fQ = BigInt("1019")
		const addressTsejTUa = accounts[2]
		const uintCZFrBY9 = BigInt("1047")
		const addressffRnHn = accounts[5]
		const addressMqlgky3 = "0x0000000000000000000000000000000000000000"
		const uintVailWN = BigInt("1825")
		const uinttZyuGGz = BigInt("1002")
		const boolNVB6z0A = await Token50X100Zrsgqw.setVesting.call(addressTsejTUa, uintoY0c0fQ, uintlL0iNn, {from: accounts[1]});
		const boolNy5ATsp = await Token50X100Zrsgqw.transferFrom.call(addressMqlgky3, addressffRnHn, uintCZFrBY9, {from: accounts[1]});
		const boolP0ctY4F = await Token50X100Zrsgqw.safeLock.call(uinttZyuGGz, uintVailWN, {from: accounts[1]});

		assert.equal(boolNVB6z0A, true)
		await expect(Token50X100Zrsgqw.transferFrom.call(addressMqlgky3, addressffRnHn, uintCZFrBY9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vuPlLTx = await Token50X100.new({from: accounts[3]});
		const boolwRHpSMA = true
		const addressCUzvgBl = accounts[4]
		const uintGabE85h = BigInt("849")
		const addressCxLbRuQ = accounts[4]
		await Token50X100vuPlLTx.setWhiteListReceivers.call(addressCUzvgBl, boolwRHpSMA, {from: accounts[3]});
		const boolHOLA5W = await Token50X100vuPlLTx.transfer.call(addressCxLbRuQ, uintGabE85h, {from: accounts[5]});

		await expect(Token50X100vuPlLTx.setWhiteListReceivers.call(addressCUzvgBl, boolwRHpSMA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vuPlLTx = await Token50X100.new({from: accounts[3]});
		const uintYZzSNrD = BigInt("289")
		const addressZoPZJkf = accounts[0]
		const uintrSAV0Xi = BigInt("872")
		const addressSXZGveq = accounts[4]
		const addressUkeKDDD = accounts[3]
		const uintyAmJ6wJ = BigInt("373")
		const addressrcdFP7 = accounts[1]
		const uintjQVdjCk = BigInt("1940")
		const uintNSg3N5G = BigInt("1051")
		const addressqScKgxM = accounts[4]
		const addressTtBL9O5 = "0x0000000000000000000000000000000000000001"
		const boolK1iaN9I = await Token50X100vuPlLTx.decreaseApproval.call(addressZoPZJkf, uintYZzSNrD, {from: accounts[4]});
		const boolHOLA5W = await Token50X100vuPlLTx.transfer.call(addressSXZGveq, uintrSAV0Xi, {from: accounts[5]});
		const addressaif9hhP = await Token50X100vuPlLTx.transferOwnership.call(addressUkeKDDD, {from: accounts[1]});
		await Token50X100vuPlLTx.release.call({from: accounts[1]});
		const boolaZmozrL = await Token50X100vuPlLTx.transfer.call(addressrcdFP7, uintyAmJ6wJ, {from: accounts[4]});
		const boolVUsGuw = await Token50X100vuPlLTx._transfer.call(addressTtBL9O5, addressqScKgxM, uintNSg3N5G, uintjQVdjCk, {from: accounts[0]});

		assert.equal(boolK1iaN9I, true)
		await expect(Token50X100vuPlLTx.transfer.call(addressSXZGveq, uintrSAV0Xi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vuPlLTx = await Token50X100.new({from: accounts[3]});
		const uintOfB2AE = BigInt("1306")
		const addressBkgrPmG = accounts[3]
		const addressRFXSwAX = accounts[3]
		const boolXToZmBZ = false
		const addressbf5X0LT = accounts[1]
		const uinttRsom0N = BigInt("872")
		const addresstMbpfvR = accounts[4]
		const boolFVjXQqU = await Token50X100vuPlLTx.setMaxLockPeriod.call(uintOfB2AE, {from: accounts[0]});
		await Token50X100vuPlLTx.setLinkingAddresses.call(addressRFXSwAX, addressBkgrPmG, {from: accounts[3]});
		await Token50X100vuPlLTx.setWhiteList.call(addressbf5X0LT, boolXToZmBZ, {from: accounts[0]});
		const boolHOLA5W = await Token50X100vuPlLTx.transfer.call(addresstMbpfvR, uinttRsom0N, {from: accounts[5]});

		assert.equal(boolFVjXQqU, false)
		await expect(Token50X100vuPlLTx.setLinkingAddresses.call(addressRFXSwAX, addressBkgrPmG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RZC8tiH = await Token50X100.new({from: accounts[5]});
		const addressH6Ct3wQ = accounts[1]
		const addresslimjiMx = accounts[0]
		const addressc56VAM = accounts[0]
		const uintwwt3qow = BigInt("113")
		const addressBsm8JJQ = accounts[2]
		const addressl3um5ST = accounts[1]
		const addressXeePKB0 = accounts[3]
		const addressMCLsayl = await Token50X100RZC8tiH.transferOwnership.call(addressH6Ct3wQ, {from: accounts[5]});
		const addressHHSHJpV = await Token50X100RZC8tiH.setOriginalContract.call(addresslimjiMx, {from: accounts[1]});
		const uint256x8VTSMg = await Token50X100RZC8tiH.balanceOf.call(addressc56VAM, {from: accounts[0]});
		const bools0qEGJR = await Token50X100RZC8tiH.transfer.call(addressBsm8JJQ, uintwwt3qow, {from: accounts[3]});
		await Token50X100RZC8tiH.setLinkingAddresses.call(addressXeePKB0, addressl3um5ST, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100RZC8tiH.setOriginalContract.call(addresslimjiMx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Zrsgqw = await Token50X100.new({from: accounts[1]});
		const uintt3D57L3 = BigInt("212")
		const stringLmQ8hMs = "poV3r1x2ytbojBHOEF3BSEHUIN8wCWtKHPhSlPsBoFw"
		const stringqVR8Q0w = "kZ3vceWnjyD8QhUIYjczPUBRUxqbUYguy6jKI4dxHvoqpJfhA"
		const boolyv4PZ3H = true
		const addressqC3qoOK = accounts[4]
		const uintD1Lbjo0 = BigInt("1047")
		const addressncugTS = accounts[6]
		const addresskMoO469 = "0x0000000000000000000000000000000000000001"
		const boolGhwbMzf = await Token50X100Zrsgqw.setSymbolNameDecimals.call(stringqVR8Q0w, stringLmQ8hMs, uintt3D57L3, {from: accounts[1]});
		await Token50X100Zrsgqw.setWhiteList.call(addressqC3qoOK, boolyv4PZ3H, {from: accounts[3]});
		const boolNy5ATsp = await Token50X100Zrsgqw.transferFrom.call(addresskMoO469, addressncugTS, uintD1Lbjo0, {from: accounts[1]});

		await expect(Token50X100Zrsgqw.setWhiteList.call(addressqC3qoOK, boolyv4PZ3H, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Zrsgqw = await Token50X100.new({from: accounts[1]});
		const uintbuTPKG = BigInt("1161")
		const uintVV8e1ja = BigInt("168")
		const addressChsRER4 = accounts[3]
		const boolqjX7Uz = await Token50X100Zrsgqw.setMaxLockPeriod.call(uintbuTPKG, {from: accounts[1]});
		await Token50X100Zrsgqw.release.call({from: accounts[1]});
		const boolttJGMgs = await Token50X100Zrsgqw.decreaseApproval.call(addressChsRER4, uintVV8e1ja, {from: accounts[1]});

		assert.equal(boolqjX7Uz, false)
		await expect(Token50X100Zrsgqw.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100h8ZXMGe = await Token50X100.new({from: accounts[1]});
		const uintBvHljHf = BigInt("829")
		const uintHuCZz4n = BigInt("1168")
		const addressBozE9P2 = accounts[1]
		const addressUUM4pHK = accounts[0]
		const uintF8wPBym = BigInt("839")
		const uintc5RhRWb = BigInt("122")
		const stringLqg3fQo = "heNj3eKGO24BqHpQ4BVhYbJVZlkglS3QwE4jdGudMNBmQyLuWCWTX1Sp7c1Syl7S4orJYrcehmNDSO"
		const stringLEgznih = "bxx8sFjA7ugo6LXkfMQzgvYNXTaAn8vv8Lzuy7pkx4fqgiJCIZONLKFPqvTjPOuiG71XQ8fQ9ZCidsoR"
		const uintBl3c487 = BigInt("1215")
		const boolJDmCUuN = await Token50X100h8ZXMGe._transfer.call(addressUUM4pHK, addressBozE9P2, uintHuCZz4n, uintBvHljHf, {from: accounts[1]});
		const boolgDxTzRB = await Token50X100h8ZXMGe.setMaxLockPeriod.call(uintF8wPBym, {from: accounts[0]});
		const boolFWoPO6m = await Token50X100h8ZXMGe.setSymbolNameDecimals.call(stringLEgznih, stringLqg3fQo, uintc5RhRWb, {from: accounts[0]});
		const boolWitUBUn = await Token50X100h8ZXMGe.setMaxLockPeriod.call(uintBl3c487, {from: accounts[0]});

		await expect(Token50X100h8ZXMGe._transfer.call(addressUUM4pHK, addressBozE9P2, uintHuCZz4n, uintBvHljHf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})