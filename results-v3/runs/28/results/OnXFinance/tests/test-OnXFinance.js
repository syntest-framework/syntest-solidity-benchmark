const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringwvNRHKV = "9GuGTWY"
		const stringM1OOqE = "OvxpQYBfMsOfNCFTU6LBtS2rRoxE2ihVGQ4NNmcWND0gjfrCcHTcY6weXV7UA8TMrvJPWs5mNDAc3BDCRyd0Czm6kFl5NM6QfN"
		const uintKVNq3oB = BigInt("1260")
		const OnXFinanceSijRBd = await OnXFinance.new(stringwvNRHKV, stringM1OOqE, uintKVNq3oB, {from: accounts[4]});
		const uintbJrHjnR = BigInt("1603")
		const addresslP47xDe = accounts[5]
		const uintXlfjcGk = BigInt("401")
		const addressuz73OBF = accounts[4]
		const addressb8ctuq = accounts[2]
		const boolw2i9yQr = await OnXFinanceSijRBd.approve.call(addresslP47xDe, uintbJrHjnR, {from: accounts[5]});
		const uint8fchgAsi = await OnXFinanceSijRBd.decimals.call({from: accounts[2]});
		const boolmoPICoP = await OnXFinanceSijRBd.transferFrom.call(addressb8ctuq, addressuz73OBF, uintXlfjcGk, {from: accounts[4]});

		assert.equal(boolw2i9yQr, true)
		assert.equal(uint8fchgAsi, BigInt("18"))
		await expect(OnXFinanceSijRBd.transferFrom.call(addressb8ctuq, addressuz73OBF, uintXlfjcGk, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringB8u0xZk = "bN2bb5VPuxov4TZ3N653gNqk"
		const stringwqOZQNB = "Akv3aS3erBJQpX7izUNjBpj3joIeaYcLbNeQdeJHlAZK"
		const uintkr1IOFO = BigInt("554")
		const OnXFinance3X2VpJ = await OnXFinance.new(stringB8u0xZk, stringwqOZQNB, uintkr1IOFO, {from: accounts[1]});
		const uintGDOQFNo = BigInt("993")
		const addresstljWxg4 = accounts[5]
		const uintlRCC7Ap = BigInt("926")
		const addressDCPamjR = accounts[4]
		const boolpW7Kqr7 = await OnXFinance3X2VpJ.decreaseAllowance.call(addresstljWxg4, uintGDOQFNo, {from: accounts[0]});
		const booljRprnJr = await OnXFinance3X2VpJ.transfer.call(addressDCPamjR, uintlRCC7Ap, {from: accounts[2]});
		const uintokGN6vU = await OnXFinance3X2VpJ.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(OnXFinance3X2VpJ.decreaseAllowance.call(addresstljWxg4, uintGDOQFNo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringmsL7H6N = "UK54fNakOM1Y4IhgoYACKE"
		const stringNl09e8 = "WFMYCXu"
		const uint5MB346 = BigInt("306")
		const OnXFinancef2EoUKa = await OnXFinance.new(stringmsL7H6N, stringNl09e8, uint5MB346, {from: accounts[2]});
		const uintikej6dz = BigInt("357")
		const addressNz0GlFA = accounts[1]
		const uintMMn0wPf = BigInt("1680")
		const addressdq1HPO3 = accounts[2]
		const uintRPY7qW = BigInt("668")
		const addressOU7LofV = accounts[1]
		const uintUEYLqqc = BigInt("1487")
		const addressyv7ncLS = "0x0000000000000000000000000000000000000001"
		const boolzjO0WPe = await OnXFinancef2EoUKa.transfer.call(addressNz0GlFA, uintikej6dz, {from: accounts[1]});
		const stringUwpMX1P = await OnXFinancef2EoUKa.symbol.call({from: accounts[1]});
		const boolQJyXqac = await OnXFinancef2EoUKa.approve.call(addressdq1HPO3, uintMMn0wPf, {from: accounts[3]});
		const stringD5Qx9Vp = await OnXFinancef2EoUKa.name.call({from: accounts[0]});
		const boolJFibwbJ = await OnXFinancef2EoUKa.approveAndCall.call(addressOU7LofV, uintRPY7qW, {from: accounts[5]});
		const boolnP7wuJy = await OnXFinancef2EoUKa.approve.call(addressyv7ncLS, uintUEYLqqc, {from: accounts[3]});

		await expect(OnXFinancef2EoUKa.transfer.call(addressNz0GlFA, uintikej6dz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringjMYoTO = "H63Y8RfVYC5a4kp37PjQp17CqYsLvmklFm7tO1p3RYYz9fIQLIrIHB63pFYWBjWxzPfm3s7xYdL2Y774"
		const stringUzKG9DK = "Is9rHBmZflG3e1XoG6AJg0cvienBIdWJh1W5SbXlKtRB5u3PNwSVWL96pFJYMELdw6INGoesbs9nf"
		const uintr5M1OkY = BigInt("236")
		const OnXFinancewDJLVR1 = await OnXFinance.new(stringjMYoTO, stringUzKG9DK, uintr5M1OkY, {from: accounts[2]});
		const addressdnx8sHj = accounts[4]
		const uintnB1W4Cj = BigInt("741")
		const addressNNq7reQ = accounts[1]
		const uintFauMaok = BigInt("1339")
		const addressjbFaROB = accounts[1]
		const uintz3oZ6E = await OnXFinancewDJLVR1.balanceOf.call(addressdnx8sHj, {from: accounts[1]});
		const booleYL4vwb = await OnXFinancewDJLVR1.approveAndCall.call(addressNNq7reQ, uintnB1W4Cj, {from: accounts[3]});
		const booltQq9zC8 = await OnXFinancewDJLVR1.transfer.call(addressjbFaROB, uintFauMaok, {from: accounts[3]});

		assert.equal(uintz3oZ6E, BigInt("0"))
		await expect(OnXFinancewDJLVR1.approveAndCall.call(addressNNq7reQ, uintnB1W4Cj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringjMYoTO = "H63Y8RfVYC5a4kp37PjQp17CqYsLvmklFm7tO1p3RYYz9fIQLIrIHB63pFYWBjWxzPfm3s7xYdL2Y774"
		const stringUzKG9DK = "Is9rHBmZflG3e1XoG6AJg0cvienBIdWJh1W5SbXlKtRB5u3PNwSVWL96pFJYMELdw6INGoesbs9nf"
		const uintEOCyjC = BigInt("236")
		const OnXFinancewDJLVR1 = await OnXFinance.new(stringjMYoTO, stringUzKG9DK, uintEOCyjC, {from: accounts[2]});
		const uintvl5ACkV = BigInt("1110")
		const addressy6TLMnl = accounts[2]
		const addressRDbGww8 = accounts[5]
		const uintyG3h64t = BigInt("741")
		const addressHa5BcIi = accounts[1]
		const uintL9uelz1 = BigInt("1339")
		const addressYGMuEMt = accounts[1]
		const boolZxJgFGN = await OnXFinancewDJLVR1.transfer.call(addressy6TLMnl, uintvl5ACkV, {from: accounts[5]});
		const uintz3oZ6E = await OnXFinancewDJLVR1.balanceOf.call(addressRDbGww8, {from: accounts[1]});
		const booleYL4vwb = await OnXFinancewDJLVR1.approveAndCall.call(addressHa5BcIi, uintyG3h64t, {from: accounts[3]});
		const booltQq9zC8 = await OnXFinancewDJLVR1.transfer.call(addressYGMuEMt, uintL9uelz1, {from: accounts[3]});

		await expect(OnXFinancewDJLVR1.transfer.call(addressy6TLMnl, uintvl5ACkV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringlqF8HPa = "fs5D95BfFJJ5msA0KeojSm"
		const stringhBXwUNt = "3uw4pt3NLyLTHTsXQgPnfCnqBej3pRxyZ6xodJm1593oMkaC9PZ2p76Xqfr37"
		const uintOt2O4g2 = BigInt("8")
		const OnXFinanceCZXSous = await OnXFinance.new(stringlqF8HPa, stringhBXwUNt, uintOt2O4g2, {from: accounts[1]});
		const addressMu6uVUy = accounts[1]
		const addressSOOPHG1 = accounts[5]
		const addressxrNqgBW = accounts[1]
		const addresshdz7BG8 = accounts[1]
		const uintqo5bGhv = BigInt("75")
		const addressnlm7qTW = accounts[3]
		const uintsSaxSmv = await OnXFinanceCZXSous.balanceOf.call(addressMu6uVUy, {from: accounts[2]});
		const stringmp6s5A = await OnXFinanceCZXSous.symbol.call({from: accounts[2]});
		const uintWtcBwJU = await OnXFinanceCZXSous.allowance.call(addressxrNqgBW, addressSOOPHG1, {from: accounts[1]});
		const uint8wXGFTDO = await OnXFinanceCZXSous.decimals.call({from: accounts[1]});
		const uint8dpShYyx = await OnXFinanceCZXSous.decimals.call({from: accounts[3]});
		const boolnY1PSfi = await OnXFinanceCZXSous.transferownership.call(addresshdz7BG8, {from: accounts[4]});
		const boolpdIAiD2 = await OnXFinanceCZXSous.transfer.call(addressnlm7qTW, uintqo5bGhv, {from: accounts[3]});

		assert.equal(stringmp6s5A, "3uw4pt3NLyLTHTsXQgPnfCnqBej3pRxyZ6xodJm1593oMkaC9PZ2p76Xqfr37")
		assert.equal(uint8dpShYyx, BigInt("18"))
		assert.equal(uint8wXGFTDO, BigInt("18"))
		assert.equal(uintWtcBwJU, BigInt("0"))
		assert.equal(uintsSaxSmv, BigInt("8000000000000000000"))
		await expect(OnXFinanceCZXSous.transferownership.call(addresshdz7BG8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringXaDhxa = "9EhrOHW3Z4ZSN1iAEEiVixohdByxg6xSNr3TKm8dVFVhkMBE4mSoLVpCec5XNNi5XzE5PGJvk5YqCo47sTNtexkl3"
		const stringQmGiKV0 = "rnubcvDdxQGAWn"
		const uintkVts9jR = BigInt("1103")
		const OnXFinanceg5A9dtz = await OnXFinance.new(stringXaDhxa, stringQmGiKV0, uintkVts9jR, {from: accounts[4]});
		const uintad1GBiK = BigInt("211")
		const addressMJZ0b0g = "0x0000000000000000000000000000000000000001"
		const addressVDuzjVV = accounts[3]
		const uintlxQMVej = BigInt("1337")
		const addressGUhLT8U = accounts[0]
		const boolv8DXPw4 = await OnXFinanceg5A9dtz.approveAndCall.call(addressMJZ0b0g, uintad1GBiK, {from: accounts[4]});
		const uintk3QPLT = await OnXFinanceg5A9dtz.balanceOf.call(addressVDuzjVV, {from: accounts[3]});
		const boolzMO8rfJ = await OnXFinanceg5A9dtz.transfer.call(addressGUhLT8U, uintlxQMVej, {from: accounts[4]});
		const uint8K7a7Pwj = await OnXFinanceg5A9dtz.decimals.call({from: accounts[2]});

		assert.equal(boolv8DXPw4, true)
		assert.equal(boolzMO8rfJ, true)
		assert.equal(uint8K7a7Pwj, BigInt("18"))
		assert.equal(uintk3QPLT, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringlqF8HPa = "fs5D95BfFJJ5msA0KeojSm"
		const stringhBXwUNt = "3uw4pt3NLyLTHTsXQgPnfCnqBej3pRxyZ6xodJm1593oMkaC9PZ2p76Xqfr37"
		const uintdkE2PuS = BigInt("8")
		const OnXFinanceCZXSous = await OnXFinance.new(stringlqF8HPa, stringhBXwUNt, uintdkE2PuS, {from: accounts[1]});
		const addressZIiPnjo = accounts[1]
		const addressC6esFvR = accounts[3]
		const addressXTozE9 = accounts[2]
		const addressy0Z2195 = accounts[3]
		const addresscDAF3Ra = accounts[3]
		const uintcW0KRnC = BigInt("48")
		const addressZ54B3Dp = accounts[3]
		const uintsSaxSmv = await OnXFinanceCZXSous.balanceOf.call(addressZIiPnjo, {from: accounts[2]});
		const stringmp6s5A = await OnXFinanceCZXSous.symbol.call({from: accounts[2]});
		const uintDjhABQN = await OnXFinanceCZXSous.allowance.call(addressXTozE9, addressC6esFvR, {from: accounts[2]});
		const booliv3ZpuB = await OnXFinanceCZXSous.transferownership.call(addressy0Z2195, {from: accounts[1]});
		const uintFkAVgyC = await OnXFinanceCZXSous.balanceOf.call(addresscDAF3Ra, {from: accounts[1]});
		const stringno6vNq3 = await OnXFinanceCZXSous.symbol.call({from: accounts[1]});
		const boolpdIAiD2 = await OnXFinanceCZXSous.transfer.call(addressZ54B3Dp, uintcW0KRnC, {from: accounts[3]});

		assert.equal(booliv3ZpuB, true)
		assert.equal(stringmp6s5A, "3uw4pt3NLyLTHTsXQgPnfCnqBej3pRxyZ6xodJm1593oMkaC9PZ2p76Xqfr37")
		assert.equal(stringno6vNq3, "3uw4pt3NLyLTHTsXQgPnfCnqBej3pRxyZ6xodJm1593oMkaC9PZ2p76Xqfr37")
		assert.equal(uintDjhABQN, BigInt("0"))
		assert.equal(uintFkAVgyC, BigInt("0"))
		assert.equal(uintsSaxSmv, BigInt("8000000000000000000"))
		await expect(OnXFinanceCZXSous.transfer.call(addressZ54B3Dp, uintcW0KRnC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringXaDhxa = "9EhrOHW3Z4ZSN1iAEEiVixohdByxg6xSNr3TKm8dVFVhkMBE4mSoLVpCec5XNNi5XzE5PGJvk5YqCo47sTNtexkl3"
		const stringQmGiKV0 = "rnubcvDdxQGAWn"
		const uintQXgwwZ = BigInt("1103")
		const OnXFinanceg5A9dtz = await OnXFinance.new(stringXaDhxa, stringQmGiKV0, uintQXgwwZ, {from: accounts[4]});
		const uinthkUnhWZ = BigInt("196")
		const addresslA6tFT = "0x00000000000000000000000000000000000000-1"
		const uintI8d1Jy = BigInt("226")
		const addresstWlc0cA = accounts[4]
		const uintl3qgFq6 = BigInt("25")
		const addressFgg5XzI = accounts[4]
		const addressDCrP2SE = accounts[4]
		const uintyXY6gnb = BigInt("1478")
		const addressg5QCIU = accounts[4]
		const uintFY1wj9D = BigInt("1218")
		const addressojwPqkk = accounts[2]
		const addressLbOJmvs = accounts[4]
		const uintCh2IZ9F = BigInt("1743")
		const addressCVkcGU = accounts[3]
		const uintoZayZDJ = BigInt("752")
		const addressxDQk5Rw = accounts[0]
		const uintCzaGUzI = BigInt("1337")
		const addressdexsna1 = accounts[0]
		const addresscj9F6QY = accounts[4]
		const uintdb4nnV = BigInt("1558")
		const addressPobuCvh = accounts[2]
		const boolv8DXPw4 = await OnXFinanceg5A9dtz.approveAndCall.call(addresslA6tFT, uinthkUnhWZ, {from: accounts[4]});
		const boolIF73KB = await OnXFinanceg5A9dtz.transfer.call(addresstWlc0cA, uintI8d1Jy, {from: accounts[4]});
		const boold91CXBm = await OnXFinanceg5A9dtz.transferFrom.call(addressDCrP2SE, addressFgg5XzI, uintl3qgFq6, {from: accounts[4]});
		const boolc2npdkH = await OnXFinanceg5A9dtz.approveAndCall.call(addressg5QCIU, uintyXY6gnb, {from: accounts[3]});
		const boolFXuMDzo = await OnXFinanceg5A9dtz.increaseAllowance.call(addressojwPqkk, uintFY1wj9D, {from: accounts[4]});
		const uintiHQ70yh = await OnXFinanceg5A9dtz.balanceOf.call(addressLbOJmvs, {from: accounts[3]});
		const stringSlDNzel = await OnXFinanceg5A9dtz.name.call({from: accounts[1]});
		const boolD5PLFky = await OnXFinanceg5A9dtz.approve.call(addressCVkcGU, uintCh2IZ9F, {from: accounts[2]});
		const boolZHmOYhJ = await OnXFinanceg5A9dtz.transfer.call(addressxDQk5Rw, uintoZayZDJ, {from: accounts[5]});
		const boolzMO8rfJ = await OnXFinanceg5A9dtz.transfer.call(addressdexsna1, uintCzaGUzI, {from: accounts[4]});
		const uint8K7a7Pwj = await OnXFinanceg5A9dtz.decimals.call({from: accounts[2]});
		const uintRimwNuk = await OnXFinanceg5A9dtz.balanceOf.call(addresscj9F6QY, {from: accounts[1]});
		const boolL35jYch = await OnXFinanceg5A9dtz.decreaseAllowance.call(addressPobuCvh, uintdb4nnV, {from: accounts[5]});

		await expect(OnXFinanceg5A9dtz.approveAndCall.call(addresslA6tFT, uinthkUnhWZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringAFGLloh = "MxWeKJgOJPWgQ7CeyhX3rTZZ7XNjYn"
		const stringdyicsbp = "y5EWluWXVEojacQRqbQt"
		const uintLAgB93z = BigInt("1202")
		const OnXFinanceqY4do1 = await OnXFinance.new(stringAFGLloh, stringdyicsbp, uintLAgB93z, {from: "0x0000000000000000000000000000000000000001"});
		const addressrLJjizS = accounts[0]
		const uintrvxFqWK = BigInt("950")
		const addressnIEVAC7 = accounts[2]
		const uintjOKdbNc = BigInt("182")
		const addresszLEtKNM = accounts[2]
		const addresseouZizj = accounts[2]
		const booltnlpem = await OnXFinanceqY4do1.transferownership.call(addressrLJjizS, {from: accounts[2]});
		const boolS14EQd = await OnXFinanceqY4do1.approve.call(addressnIEVAC7, uintrvxFqWK, {from: accounts[3]});
		const boolPxeZ5uo = await OnXFinanceqY4do1.transferFrom.call(addresseouZizj, addresszLEtKNM, uintjOKdbNc, {from: accounts[3]});
	});

	it('test for OnXFinance', async () => {
		const stringwF409S1 = "REvv8mxgBUdbnv867FEMfIox"
		const stringt0qqhDi = "SWNreanihG"
		const uintDhYIRvz = BigInt("790")
		const OnXFinanceLVIY5E7 = await OnXFinance.new(stringwF409S1, stringt0qqhDi, uintDhYIRvz, {from: accounts[4]});
		const addresscozQdas = accounts[2]
		const uintxLl3mQ5 = BigInt("0")
		const addresstpG0WD0 = accounts[0]
		const address4A6Dl4 = accounts[0]
		const uintuH75gwl = BigInt("640")
		const addressfIvSMSp = accounts[0]
		const addresswdEBjZF = accounts[1]
		const uintVH4vDIp = await OnXFinanceLVIY5E7.balanceOf.call(addresscozQdas, {from: accounts[3]});
		const uint8i6jiAS8 = await OnXFinanceLVIY5E7.decimals.call({from: accounts[2]});
		const boolXCfexKh = await OnXFinanceLVIY5E7.transferFrom.call(address4A6Dl4, addresstpG0WD0, uintxLl3mQ5, {from: "0x0000000000000000000000000000000000000001"});
		const boolNeHUGHu = await OnXFinanceLVIY5E7.transferFrom.call(addresswdEBjZF, addressfIvSMSp, uintuH75gwl, {from: accounts[5]});
		const uint8K6fmxOr = await OnXFinanceLVIY5E7.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolXCfexKh, true)
		assert.equal(uint8i6jiAS8, BigInt("18"))
		assert.equal(uintVH4vDIp, BigInt("0"))
		await expect(OnXFinanceLVIY5E7.transferFrom.call(addresswdEBjZF, addressfIvSMSp, uintuH75gwl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})