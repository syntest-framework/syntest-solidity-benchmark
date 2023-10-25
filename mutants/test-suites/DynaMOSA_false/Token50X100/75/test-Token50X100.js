const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100SJu4cdt = await Token50X100.new({from: accounts[3]});
		const uintV2kj959 = BigInt("1340")
		const uintHd5iuO = BigInt("1711")
		const addresshcWVUP1 = accounts[1]
		const uintSi6Kk2r = BigInt("218")
		const uintZQy4A0s = BigInt("1117")
		const addressYRGveQR = accounts[2]
		const addressZk2znmK = accounts[1]
		const uintS5nQNik = BigInt("1024")
		const addressKPQywEP = accounts[4]
		const uintu6vbd5t = BigInt("145")
		const stringWFpbxWs = "SlmTemiIdGDAntoUZxS7kyKfnyHGAYK4UR9Hu7mPmfjaCvoNuPspPrH"
		const stringbgzaAc3 = "L6ujceDN9MadYNd3uP2WXOtrkDUKMBig7AGgPBuCCAvWpwTUbeQfW3B4MGetvcD78ds5I6bqcF"
		const addressvRlwVeP = accounts[2]
//		const boolWQI41BW = await Token50X100SJu4cdt.setVesting.call(addresshcWVUP1, uintHd5iuO, uintV2kj959, {from: accounts[4]});
//		const boolPFBF2eF = await Token50X100SJu4cdt._transfer.call(addressZk2znmK, addressYRGveQR, uintZQy4A0s, uintSi6Kk2r, {from: accounts[4]});
//		const boolKrG3aV9 = await Token50X100SJu4cdt.increaseApproval.call(addressKPQywEP, uintS5nQNik, {from: accounts[2]});
//		await Token50X100SJu4cdt.setSymbolNameDecimals.call(stringbgzaAc3, stringWFpbxWs, uintu6vbd5t, {from: accounts[0]});
//		const addressnTngPTm = await Token50X100SJu4cdt.setOriginalContract.call(addressvRlwVeP, {from: accounts[4]});

		await expect(Token50X100SJu4cdt.setVesting.call(addresshcWVUP1, uintHd5iuO, uintV2kj959, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RHDKHNp = await Token50X100.new({from: accounts[1]});
		const uintNfy9fjX = BigInt("1203")
		const addressgQLsdvN = accounts[2]
		const addressWO72xoS = accounts[5]
		const addressNlkNVEE = accounts[1]
		const addressnbjbUCj = accounts[0]
//		const boollFjOPJX = await Token50X100RHDKHNp.transfer.call(addressgQLsdvN, uintNfy9fjX, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256uXQFPZC = await Token50X100RHDKHNp.allowance.call(addressNlkNVEE, addressWO72xoS, {from: accounts[5]});
//		await Token50X100RHDKHNp.release.call({from: accounts[3]});
//		const addressQKv0aA3 = await Token50X100RHDKHNp.transferOwnership.call(addressnbjbUCj, {from: accounts[3]});

		await expect(Token50X100RHDKHNp.transfer.call(addressgQLsdvN, uintNfy9fjX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100FpSKaPb = await Token50X100.new({from: accounts[5]});
		const uintSrIzQNA = BigInt("1037")
		const addressVhkcZW = accounts[0]
		const addressCsMmiGW = accounts[2]
		const uintbT8bziJ = BigInt("2022")
		const uintJ8IKxHq = BigInt("1414")
		const uintecXJPFx = BigInt("1793")
//		const boolK8gnwB = await Token50X100FpSKaPb.issueTokens.call(addressCsMmiGW, addressVhkcZW, uintSrIzQNA, {from: accounts[0]});
//		const boolCyjRjQr = await Token50X100FpSKaPb.setMaxLockPeriod.call(uintbT8bziJ, {from: accounts[5]});
//		await Token50X100FpSKaPb.lock.call({from: accounts[1]});
//		const boolZYexAH3 = await Token50X100FpSKaPb.safeLock.call(uintecXJPFx, uintJ8IKxHq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100FpSKaPb.issueTokens.call(addressCsMmiGW, addressVhkcZW, uintSrIzQNA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100I2L8iwT = await Token50X100.new({from: accounts[1]});
		const uintnaPtyF = BigInt("1257")
		const uintpPqvSt1 = BigInt("424")
		const addressyLzygl = accounts[2]
		const addressLdwTTJF = accounts[2]
		const boolKIDsEkk = true
		const addresswucA7vI = "0x0000000000000000000000000000000000000001"
		const addressuRuYw5C = "0x0000000000000000000000000000000000000001"
		const addressK4SisG7 = "0x0000000000000000000000000000000000000001"
		const boolR8NA3Ni = await Token50X100I2L8iwT.setMaxLockPeriod.call(uintnaPtyF, {from: accounts[4]});
//		const boolkBFhMgX = await Token50X100I2L8iwT.transfer.call(addressyLzygl, uintpPqvSt1, {from: accounts[0]});
//		const addressig9s0By = await Token50X100I2L8iwT.transferOwnership.call(addressLdwTTJF, {from: accounts[5]});
//		await Token50X100I2L8iwT.setWhiteListReceivers.call(addresswucA7vI, boolKIDsEkk, {from: accounts[4]});
//		await Token50X100I2L8iwT.setTokenContract.call(addressuRuYw5C, {from: "0x0000000000000000000000000000000000000001"});
//		const addressrgWS61h = await Token50X100I2L8iwT.setOriginalContract.call(addressK4SisG7, {from: accounts[0]});

		assert.equal(boolR8NA3Ni, false)
		await expect(Token50X100I2L8iwT.transfer.call(addressyLzygl, uintpPqvSt1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RQAhq15 = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uint5H3ZtU = BigInt("255")
		const uintesSp2VS = BigInt("873")
		const addressMMKZvYw = accounts[5]
		const boolaztWz5R = true
		const addressmq66pYr = accounts[3]
		const uintjNkyPoa = BigInt("1625")
		const uintSp6Ndkz = BigInt("66")
		const boolePW8vgH = await Token50X100RQAhq15.setVesting.call(addressMMKZvYw, uintesSp2VS, uint5H3ZtU, {from: accounts[5]});
		await Token50X100RQAhq15.setWhiteListReceivers.call(addressmq66pYr, boolaztWz5R, {from: accounts[2]});
		await Token50X100RQAhq15.release.call({from: "0x0000000000000000000000000000000000000001"});
		const booleSUAML9 = await Token50X100RQAhq15.safeLock.call(uintSp6Ndkz, uintjNkyPoa, {from: accounts[3]});
	});

	it('test for Token50X100', async () => {
		const Token50X100I2L8iwT = await Token50X100.new({from: accounts[1]});
		const uintyhFcQnP = BigInt("1257")
		const uintmEMLUNR = BigInt("431")
		const addressWYMl9O = accounts[2]
		const addresspbKw60G = accounts[2]
		const addressw9FBtU8 = accounts[2]
		const uintWyVGYUP = BigInt("1905")
		const uintjem0fhK = BigInt("100")
		const addressbjkuiRJ = accounts[4]
		const address2ncz5e = accounts[1]
		const boolKIDsEkk = true
		const addressN5qBs1G = "0x0000000000000000000000000000000000000001"
		const addressjRT5iuh = "0x0000000000000000000000000000000000000000"
		const addressmp4rEpT = "0x0000000000000000000000000000000000000001"
		const boolR8NA3Ni = await Token50X100I2L8iwT.setMaxLockPeriod.call(uintyhFcQnP, {from: accounts[4]});
//		await Token50X100I2L8iwT.release.call({from: accounts[1]});
//		const boolkBFhMgX = await Token50X100I2L8iwT.transfer.call(addressWYMl9O, uintmEMLUNR, {from: accounts[0]});
//		const addresssk89pr6 = await Token50X100I2L8iwT.setOriginalContract.call(addresspbKw60G, {from: accounts[5]});
//		const addressig9s0By = await Token50X100I2L8iwT.transferOwnership.call(addressw9FBtU8, {from: accounts[5]});
//		const boolo3jv3Xt = await Token50X100I2L8iwT._transfer.call(address2ncz5e, addressbjkuiRJ, uintjem0fhK, uintWyVGYUP, {from: accounts[1]});
//		await Token50X100I2L8iwT.setWhiteListReceivers.call(addressN5qBs1G, boolKIDsEkk, {from: accounts[4]});
//		await Token50X100I2L8iwT.setTokenContract.call(addressjRT5iuh, {from: "0x0000000000000000000000000000000000000001"});
//		const addressrgWS61h = await Token50X100I2L8iwT.setOriginalContract.call(addressmp4rEpT, {from: accounts[0]});

		assert.equal(boolR8NA3Ni, false)
		await expect(Token50X100I2L8iwT.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100XGYEtN = await Token50X100.new({from: accounts[2]});
		const uintfQQsdjZ = BigInt("1989")
		const addressCv4xgKV = accounts[1]
		const addressh6rsGRT = accounts[1]
		const uintDdN7hEZ = BigInt("1220")
		const addressmLakMs7 = accounts[1]
		const boolItC0bW = true
		const addressEYdk4y9 = accounts[1]
		const uintvgJWj7b = BigInt("11")
		const boolG7qSB5q = await Token50X100XGYEtN.setMaxLockPeriod.call(uintfQQsdjZ, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oA4OIwB = await Token50X100XGYEtN.allowance.call(addressh6rsGRT, addressCv4xgKV, {from: accounts[1]});
		const boolgKvwhyd = await Token50X100XGYEtN.increaseApproval.call(addressmLakMs7, uintDdN7hEZ, {from: accounts[2]});
//		await Token50X100XGYEtN.setWhiteList.call(addressEYdk4y9, boolItC0bW, {from: accounts[2]});
//		await Token50X100XGYEtN.lock.call({from: accounts[2]});
//		const boolUIf1Zz2 = await Token50X100XGYEtN.setMaxLockPeriod.call(uintvgJWj7b, {from: accounts[4]});

		assert.equal(boolG7qSB5q, false)
		assert.equal(boolgKvwhyd, true)
		assert.equal(uint256oA4OIwB, BigInt("0"))
		await expect(Token50X100XGYEtN.setWhiteList.call(addressEYdk4y9, boolItC0bW, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100vnqDnXb = await Token50X100.new({from: accounts[0]});
		const uintOHidiRP = BigInt("1273")
		const uintlKSDK3 = BigInt("1319")
		const uintSAbVxO = BigInt("1540")
		const uintWnjwNKt = BigInt("240")
		const addresspsuH8cf = accounts[4]
		const addressf3U1ubb = accounts[1]
		const uintQyzPpUJ = BigInt("925")
		const addressuzSXS5d = accounts[1]
		const addressLCcGJtU = accounts[0]
		const uintuFcNpkP = BigInt("1446")
		const uintWKFigJ = BigInt("892")
		const addresskpAh7T = accounts[5]
		const addressmyWcUw = accounts[2]
//		const boolzxUNlKh = await Token50X100vnqDnXb.safeLock.call(uintlKSDK3, uintOHidiRP, {from: accounts[4]});
//		await Token50X100vnqDnXb.release.call({from: accounts[1]});
//		const boolW3Ph1Hn = await Token50X100vnqDnXb._transfer.call(addressf3U1ubb, addresspsuH8cf, uintWnjwNKt, uintSAbVxO, {from: accounts[3]});
//		const boolrWyOKc = await Token50X100vnqDnXb.issueTokens.call(addressLCcGJtU, addressuzSXS5d, uintQyzPpUJ, {from: accounts[3]});
//		const boolbqlGQlE = await Token50X100vnqDnXb._transfer.call(addressmyWcUw, addresskpAh7T, uintWKFigJ, uintuFcNpkP, {from: accounts[0]});

		await expect(Token50X100vnqDnXb.safeLock.call(uintlKSDK3, uintOHidiRP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RHDKHNp = await Token50X100.new({from: accounts[1]});
		const uint024Rwe = BigInt("1")
		const uintHZgcxrB = BigInt("854")
		const addressQSB2l7t = accounts[3]
		const addresshfXzn8z = accounts[4]
		const uinteDHl7da = BigInt("1203")
		const addressrz4DEUX = accounts[3]
		const addressRjaqCS7 = accounts[0]
		const uintxiggjCa = BigInt("22")
		const addressNQbizRv = accounts[2]
//		const boolgdyeuZJ = await Token50X100RHDKHNp._transfer.call(addresshfXzn8z, addressQSB2l7t, uintHZgcxrB, uint024Rwe, {from: accounts[1]});
//		const boollFjOPJX = await Token50X100RHDKHNp.transfer.call(addressrz4DEUX, uinteDHl7da, {from: "0x0000000000000000000000000000000000000001"});
//		const addressQKv0aA3 = await Token50X100RHDKHNp.transferOwnership.call(addressRjaqCS7, {from: accounts[3]});
//		const boolqAxU0fw = await Token50X100RHDKHNp.approve.call(addressNQbizRv, uintxiggjCa, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100RHDKHNp._transfer.call(addresshfXzn8z, addressQSB2l7t, uintHZgcxrB, uint024Rwe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100u6RlFcD = await Token50X100.new({from: accounts[4]});
		const uintM52upxg = BigInt("501")
		const addressIausNE1 = accounts[2]
		const addressLHPVHe = accounts[4]
		const uintIAwPDR8 = BigInt("114")
		const stringAWUUeaq = "xMmmlteEcvDi9bXfykQQ2Iw1T7htIojy83jqao5q2KuJf2zUxStqgSeG81TSblRlpLeV5FiYkHoOS9iEidz"
		const stringaPrqKpb = "PTCo8N2oUgsuFC39PJyy9IRqGAj4yd5PCRMXMI6gQcHy"
		const uintMCzHgoi = BigInt("692")
		const addressJ12Ieml = accounts[2]
		const uintiMhB5zj = BigInt("59")
		const uintU4yo4lC = BigInt("1592")
		const addresswXuSu8Z = accounts[3]
		const uintpobrcUL = BigInt("1365")
		const addressuoApWtJ = accounts[3]
		const addressVeZBci = accounts[2]
//		const boolvVdBVaC = await Token50X100u6RlFcD.transferFrom.call(addressLHPVHe, addressIausNE1, uintM52upxg, {from: accounts[0]});
//		const boolUcJ3j0D = await Token50X100u6RlFcD.setSymbolNameDecimals.call(stringaPrqKpb, stringAWUUeaq, uintIAwPDR8, {from: accounts[1]});
//		const boolkLwjoP = await Token50X100u6RlFcD.transfer.call(addressJ12Ieml, uintMCzHgoi, {from: accounts[4]});
//		const boolNOGldY = await Token50X100u6RlFcD.setVesting.call(addresswXuSu8Z, uintU4yo4lC, uintiMhB5zj, {from: accounts[5]});
//		const booljj6mhep = await Token50X100u6RlFcD.transferFrom.call(addressVeZBci, addressuoApWtJ, uintpobrcUL, {from: accounts[5]});

		await expect(Token50X100u6RlFcD.transferFrom.call(addressLHPVHe, addressIausNE1, uintM52upxg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RHDKHNp = await Token50X100.new({from: accounts[1]});
		const uintMAlVXQK = BigInt("1169")
		const addresseOFIb3 = accounts[0]
		const uintB6cjWcZ = BigInt("1990")
		const addressT68AZIG = accounts[0]
		const addressEH0haqt = accounts[4]
		const uintTR2fb4c = BigInt("1")
		const uintdMXzc7 = BigInt("854")
		const addressdGBpaUr = accounts[3]
		const addressq6vFbtI = accounts[4]
		const addressfQUOaao = accounts[1]
		const addressAOtyx9J = accounts[4]
		const uintEBZ5OKF = BigInt("22")
		const addresss09Edq5 = accounts[2]
		const boolsSFSk7n = await Token50X100RHDKHNp.approve.call(addresseOFIb3, uintMAlVXQK, {from: accounts[2]});
//		const boolK1zNADG = await Token50X100RHDKHNp.transferFrom.call(addressEH0haqt, addressT68AZIG, uintB6cjWcZ, {from: "0x0000000000000000000000000000000000000001"});
//		const boolgdyeuZJ = await Token50X100RHDKHNp._transfer.call(addressq6vFbtI, addressdGBpaUr, uintdMXzc7, uintTR2fb4c, {from: accounts[1]});
//		const addressQKv0aA3 = await Token50X100RHDKHNp.transferOwnership.call(addressfQUOaao, {from: accounts[3]});
//		const addressF8BgPs = await Token50X100RHDKHNp.transferOwnership.call(addressAOtyx9J, {from: accounts[3]});
//		const boolqAxU0fw = await Token50X100RHDKHNp.approve.call(addresss09Edq5, uintEBZ5OKF, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolsSFSk7n, true)
		await expect(Token50X100RHDKHNp.transferFrom.call(addressEH0haqt, addressT68AZIG, uintB6cjWcZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RHDKHNp = await Token50X100.new({from: accounts[1]});
		const uintFPfkVXq = BigInt("210")
		const addressx0OgkoH = accounts[0]
		const uintH48gvn = BigInt("1")
		const uintnjOwbUy = BigInt("854")
		const addressDIFCIaV = accounts[3]
		const addressWnCEFsL = accounts[4]
		const boolPHrywEr = await Token50X100RHDKHNp.decreaseApproval.call(addressx0OgkoH, uintFPfkVXq, {from: accounts[3]});
//		const boolgdyeuZJ = await Token50X100RHDKHNp._transfer.call(addressWnCEFsL, addressDIFCIaV, uintnjOwbUy, uintH48gvn, {from: accounts[1]});
//		await Token50X100RHDKHNp.lock.call({from: accounts[0]});

		assert.equal(boolPHrywEr, true)
		await expect(Token50X100RHDKHNp._transfer.call(addressWnCEFsL, addressDIFCIaV, uintnjOwbUy, uintH48gvn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RHDKHNp = await Token50X100.new({from: accounts[1]});
		const uintKN7EVX2 = BigInt("304")
		const addressysjDFL0 = accounts[2]
		const uint256rxzBVCE = await Token50X100RHDKHNp.totalSupply.call({from: accounts[4]});
//		const boollFjOPJX = await Token50X100RHDKHNp.transfer.call(addressysjDFL0, uintKN7EVX2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256rxzBVCE, BigInt("4714285714285710"))
		await expect(Token50X100RHDKHNp.transfer.call(addressysjDFL0, uintKN7EVX2, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RHDKHNp = await Token50X100.new({from: accounts[1]});
		const addressb06U3Tx = "0x0000000000000000000000000000000000000001"
		const uinti9iXtPu = BigInt("210")
		const addressYSL2kx0 = accounts[0]
		const uintNdUPB3X = BigInt("1963")
		const boolcKJYGK = false
		const addressh2rpBZX = accounts[1]
		const addressknnWgHJ = accounts[0]
		const uintJe3S5aR = BigInt("1")
		const uintlBgF7J4 = BigInt("854")
		const addressA3ahk8V = accounts[3]
		const addresshDxRetA = accounts[4]
		const addresslHyAukW = accounts[4]
		const uint256NrveW5 = await Token50X100RHDKHNp.balanceOf.call(addressb06U3Tx, {from: "0x0000000000000000000000000000000000000001"});
		const boolPHrywEr = await Token50X100RHDKHNp.decreaseApproval.call(addressYSL2kx0, uinti9iXtPu, {from: accounts[3]});
		const boolQBNOlf8 = await Token50X100RHDKHNp.setMaxLockPeriod.call(uintNdUPB3X, {from: accounts[1]});
//		await Token50X100RHDKHNp.setWhiteList.call(addressh2rpBZX, boolcKJYGK, {from: accounts[3]});
//		await Token50X100RHDKHNp.setTokenContract.call(addressknnWgHJ, {from: accounts[2]});
//		const boolgdyeuZJ = await Token50X100RHDKHNp._transfer.call(addresshDxRetA, addressA3ahk8V, uintlBgF7J4, uintJe3S5aR, {from: accounts[1]});
//		const uint256uWfQBfX = await Token50X100RHDKHNp.balanceOf.call(addresslHyAukW, {from: accounts[4]});
//		await Token50X100RHDKHNp.lock.call({from: accounts[0]});

		assert.equal(boolPHrywEr, true)
		assert.equal(boolQBNOlf8, false)
		assert.equal(uint256NrveW5, BigInt("0"))
		await expect(Token50X100RHDKHNp.setWhiteList.call(addressh2rpBZX, boolcKJYGK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RHDKHNp = await Token50X100.new({from: accounts[1]});
		const uintUKVSnIu = BigInt("122")
		const stringp4JmWJ = "WJqEpGG44CNiUSYk9nXmwvVmTwq4pHIYtxWmSTQtOaNMBJiCaFSE70gV58MRwuQSQEBGyG4WUjsxivRxFwStpq0XmV55"
		const stringXWa4RAZ = "HR"
		const addressHF5k3KW = accounts[5]
		const addressv1rVJOl = accounts[1]
		const uintBDVGV0q = BigInt("843")
		const addressdenHQ3c = "0x0000000000000000000000000000000000000001"
		const uintumGfWS = BigInt("1")
		const uintCy1WQfF = BigInt("854")
		const addressemhyqd0 = accounts[3]
		const addressR6EK35 = accounts[5]
//		await Token50X100RHDKHNp.setSymbolNameDecimals.call(stringXWa4RAZ, stringp4JmWJ, uintUKVSnIu, {from: accounts[1]});
//		const uint256m5AEYG3 = await Token50X100RHDKHNp.allowance.call(addressv1rVJOl, addressHF5k3KW, {from: accounts[3]});
//		const boolKhHFZMc = await Token50X100RHDKHNp.transfer.call(addressdenHQ3c, uintBDVGV0q, {from: accounts[4]});
//		const boolgdyeuZJ = await Token50X100RHDKHNp._transfer.call(addressR6EK35, addressemhyqd0, uintCy1WQfF, uintumGfWS, {from: accounts[1]});

		await expect(Token50X100RHDKHNp.setSymbolNameDecimals.call(stringXWa4RAZ, stringp4JmWJ, uintUKVSnIu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RHDKHNp = await Token50X100.new({from: accounts[1]});
		const addresstfA22I = accounts[1]
		const addressVpdJbra = accounts[2]
		const uintAcugeh1 = BigInt("826")
		const addressnfDCLhQ = "0x0000000000000000000000000000000000000000"
		const uint25640SJva = await Token50X100RHDKHNp.allowance.call(addressVpdJbra, addresstfA22I, {from: accounts[0]});
//		const boolKhHFZMc = await Token50X100RHDKHNp.transfer.call(addressnfDCLhQ, uintAcugeh1, {from: accounts[4]});

		assert.equal(uint25640SJva, BigInt("0"))
		await expect(Token50X100RHDKHNp.transfer.call(addressnfDCLhQ, uintAcugeh1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RHDKHNp = await Token50X100.new({from: accounts[1]});
		const addressVQbdNzy = accounts[0]
		const uintt3DFc0K = BigInt("1403")
		const addressffSW6q1 = "0x0000000000000000000000000000000000000001"
		const addressKd0TaL3 = accounts[3]
		const address1hDSND = await Token50X100RHDKHNp.transferOwnership.call(addressVQbdNzy, {from: accounts[1]});
//		const boolKhHFZMc = await Token50X100RHDKHNp.transfer.call(addressffSW6q1, uintt3DFc0K, {from: accounts[4]});
//		await Token50X100RHDKHNp.release.call({from: accounts[2]});
//		const addresswlxn0QH = await Token50X100RHDKHNp.transferOwnership.call(addressKd0TaL3, {from: accounts[4]});

		await expect(Token50X100RHDKHNp.transfer.call(addressffSW6q1, uintt3DFc0K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RHDKHNp = await Token50X100.new({from: accounts[1]});
		const uintNxWGaD5 = BigInt("198")
		const address4JC1bE = accounts[0]
		const uintD3d75al = BigInt("870")
		const uintXAWWJke = BigInt("713")
		const uintqizI2Bl = BigInt("258")
		const addressiX0fW1d = accounts[0]
		const addressJ5s7g2 = accounts[4]
		const addressEB6eWKY = accounts[0]
		const uintsaYRiET = BigInt("487")
		const addressR4pVTXj = accounts[2]
		const addressjr9Yvx = accounts[3]
		const uintPl3tRVu = BigInt("89")
		const uintsgR2kXr = BigInt("72")
		const boolPHrywEr = await Token50X100RHDKHNp.decreaseApproval.call(address4JC1bE, uintNxWGaD5, {from: accounts[3]});
		const boolIeru9IO = await Token50X100RHDKHNp.setMaxLockPeriod.call(uintD3d75al, {from: accounts[0]});
		const boolLUmGq0d = await Token50X100RHDKHNp.setVesting.call(addressiX0fW1d, uintqizI2Bl, uintXAWWJke, {from: accounts[1]});
		const uint256yilQaRb = await Token50X100RHDKHNp.allowance.call(addressEB6eWKY, addressJ5s7g2, {from: accounts[2]});
//		const boolvdaDiCD = await Token50X100RHDKHNp.issueTokens.call(addressjr9Yvx, addressR4pVTXj, uintsaYRiET, {from: accounts[1]});
//		const boolckDryui = await Token50X100RHDKHNp.safeLock.call(uintsgR2kXr, uintPl3tRVu, {from: accounts[1]});

		assert.equal(boolIeru9IO, false)
		assert.equal(boolLUmGq0d, true)
		assert.equal(boolPHrywEr, true)
		assert.equal(uint256yilQaRb, BigInt("0"))
		await expect(Token50X100RHDKHNp.issueTokens.call(addressjr9Yvx, addressR4pVTXj, uintsaYRiET, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RHDKHNp = await Token50X100.new({from: accounts[1]});
		const uintO7kQpqT = BigInt("206")
		const addressndEfsR = accounts[1]
		const addressgmrLKl5 = accounts[3]
		const uinteO6AKm = BigInt("1359")
		const addressKQIfkoU = accounts[0]
		const uintJfHCCAe = BigInt("1512")
		const uinthM0dfNq = BigInt("677")
		const addresskYBHIND = accounts[3]
		const uintKBXunZ7 = BigInt("1156")
		const uintsxB3ybG = BigInt("396")
		const addressUy5avYh = accounts[3]
		const addressnBRMUT = accounts[3]
		const uintNqt5638 = BigInt("743")
		const addressy70EnQ = accounts[2]
		const uinta0Ip08U = BigInt("929")
		const addressP6E0Npu = accounts[2]
		const uintdbmHQSY = BigInt("1291")
		const uintcka5JVE = BigInt("1267")
		const addressLefgWp = accounts[5]
		const boolPHrywEr = await Token50X100RHDKHNp.decreaseApproval.call(addressndEfsR, uintO7kQpqT, {from: accounts[3]});
//		await Token50X100RHDKHNp.setTokenContract.call(addressgmrLKl5, {from: accounts[1]});
//		const boolBGufcgC = await Token50X100RHDKHNp.transfer.call(addressKQIfkoU, uinteO6AKm, {from: accounts[0]});
//		const boolAVVF1c5 = await Token50X100RHDKHNp.setVesting.call(addresskYBHIND, uinthM0dfNq, uintJfHCCAe, {from: accounts[2]});
//		const boolmz22PZv = await Token50X100RHDKHNp._transfer.call(addressnBRMUT, addressUy5avYh, uintsxB3ybG, uintKBXunZ7, {from: accounts[2]});
//		const boolXVXuQX = await Token50X100RHDKHNp.transfer.call(addressy70EnQ, uintNqt5638, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQPrrqsV = await Token50X100RHDKHNp.decreaseApproval.call(addressP6E0Npu, uinta0Ip08U, {from: accounts[4]});
//		const boolJijRS6 = await Token50X100RHDKHNp.setVesting.call(addressLefgWp, uintcka5JVE, uintdbmHQSY, {from: accounts[0]});

		assert.equal(boolPHrywEr, true)
		await expect(Token50X100RHDKHNp.setTokenContract.call(addressgmrLKl5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100RHDKHNp = await Token50X100.new({from: accounts[1]});
		const addressLRI9dXy = accounts[1]
		const addressBEcK1y3 = accounts[5]
		const booljnTDx0Z = true
		const addressK5Tg0IF = "0x0000000000000000000000000000000000000001"
		const uintOSQAM4M = BigInt("1249")
		const uintw0YGzzc = BigInt("51")
		const addressXsATlUc = accounts[0]
		const uintKgpk5b = BigInt("323")
		const addressiV5Z9p7 = accounts[0]
		const uintYzByBT6 = BigInt("826")
		const addressNGEmzAA = "0x0000000000000000000000000000000000000000"
		const uintMAsUs2m = BigInt("633")
		const address6t3Zwi = accounts[1]
		const addressLqj9FHw = "0x0000000000000000000000000000000000000001"
		const uint256Fx8GCHj = await Token50X100RHDKHNp.allowance.call(addressBEcK1y3, addressLRI9dXy, {from: accounts[1]});
//		await Token50X100RHDKHNp.setWhiteListReceivers.call(addressK5Tg0IF, booljnTDx0Z, {from: accounts[1]});
//		const boolWexdxqP = await Token50X100RHDKHNp.setVesting.call(addressXsATlUc, uintw0YGzzc, uintOSQAM4M, {from: accounts[2]});
//		const boolF4cO7CY = await Token50X100RHDKHNp.decreaseApproval.call(addressiV5Z9p7, uintKgpk5b, {from: accounts[2]});
//		const boolKhHFZMc = await Token50X100RHDKHNp.transfer.call(addressNGEmzAA, uintYzByBT6, {from: accounts[4]});
//		const boolHhETkcO = await Token50X100RHDKHNp.issueTokens.call(addressLqj9FHw, address6t3Zwi, uintMAsUs2m, {from: accounts[2]});

		assert.equal(uint256Fx8GCHj, BigInt("0"))
		await expect(Token50X100RHDKHNp.setWhiteListReceivers.call(addressK5Tg0IF, booljnTDx0Z, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})