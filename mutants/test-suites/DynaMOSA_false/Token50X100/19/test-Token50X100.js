const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100blRXQy = await Token50X100.new({from: accounts[4]});
		const boolJtNhmY8 = true
		const addressYxynJW = accounts[0]
		const addressusoUl6O = accounts[4]
		const uinth69ypRC = BigInt("783")
		const addressCY2jdS1 = accounts[4]
		const uintJBJd0v3 = BigInt("1439")
		const addressTEFFlf9 = accounts[2]
//		await Token50X100blRXQy.setWhiteList.call(addressYxynJW, boolJtNhmY8, {from: accounts[1]});
//		const addressNqRpLaS = await Token50X100blRXQy.transferOwnership.call(addressusoUl6O, {from: "0x0000000000000000000000000000000000000001"});
//		const boolFRlLfL = await Token50X100blRXQy.transfer.call(addressCY2jdS1, uinth69ypRC, {from: "0x0000000000000000000000000000000000000001"});
//		const boolHi6ItsY = await Token50X100blRXQy.transfer.call(addressTEFFlf9, uintJBJd0v3, {from: accounts[4]});

		await expect(Token50X100blRXQy.setWhiteList.call(addressYxynJW, boolJtNhmY8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100qThxg3m = await Token50X100.new({from: accounts[0]});
		const addressjV0H1Fy = accounts[2]
		const uintenJrzLJ = BigInt("111")
		const addressvZYQ0QW = accounts[3]
		const addressNYApOsN = accounts[3]
		const addresshelkBAI = accounts[2]
		const uinthiQXdc = BigInt("203")
		const stringYzt1erU = "1OOXfBjpy"
		const stringlGmqjKZ = "0ncUWY6Qzq3YY1vaOr8rhRnB0Ea7ldR83o7l7F9UnYnceYEe5krsFsEqADQ4YXZvnCu7cjVYjYjw"
		const uint256xCAoHjC = await Token50X100qThxg3m.balanceOf.call(addressjV0H1Fy, {from: accounts[4]});
//		const boolf6TDYth = await Token50X100qThxg3m.transferFrom.call(addressNYApOsN, addressvZYQ0QW, uintenJrzLJ, {from: accounts[1]});
//		await Token50X100qThxg3m.onlyOwner.call({from: accounts[0]});
//		await Token50X100qThxg3m.setTokenContract.call(addresshelkBAI, {from: accounts[0]});
//		const boolW8VPYs0 = await Token50X100qThxg3m.setSymbolNameDecimals.call(stringlGmqjKZ, stringYzt1erU, uinthiQXdc, {from: accounts[0]});

		assert.equal(uint256xCAoHjC, BigInt("0"))
		await expect(Token50X100qThxg3m.transferFrom.call(addressNYApOsN, addressvZYQ0QW, uintenJrzLJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100M6xbeTK = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintKfxtIOK = BigInt("20")
		const addressclRNJTJ = accounts[5]
		const addressgoZyRoU = accounts[4]
		const addressBhpdpDc = accounts[3]
		const uintB0YTotl = BigInt("297")
		const addressvSIABhX = "0x0000000000000000000000000000000000000001"
		const addresskYDQFAq = accounts[2]
		const boolQ1Gj4Ik = await Token50X100M6xbeTK.setMaxLockPeriod.call(uintKfxtIOK, {from: accounts[3]});
		const addressusnSE35 = await Token50X100M6xbeTK.transferOwnership.call(addressclRNJTJ, {from: accounts[1]});
		await Token50X100M6xbeTK.setLinkingAddresses.call(addressBhpdpDc, addressgoZyRoU, {from: accounts[1]});
		const boolFLoax8j = await Token50X100M6xbeTK.transfer.call(addressvSIABhX, uintB0YTotl, {from: accounts[2]});
		await Token50X100M6xbeTK.setTokenContract.call(addresskYDQFAq, {from: accounts[1]});
		await Token50X100M6xbeTK.lock.call({from: accounts[2]});
	});

	it('test for Token50X100', async () => {
		const Token50X1005gG5ep = await Token50X100.new({from: accounts[1]});
		const uintgIDNexl = BigInt("804")
		const addressLUeLiwo = accounts[2]
		const uintoGxhvNf = BigInt("1602")
		const addressZ0DIWxt = accounts[4]
		const addressm6uE6V = accounts[0]
		const addressCO3YyZ7 = accounts[2]
		const uintXwKoJB2 = BigInt("1111")
		const addressKndPCpJ = accounts[1]
		const addressWxYGVd = accounts[2]
		const boolYcz7NO7 = await Token50X1005gG5ep.approve.call(addressLUeLiwo, uintgIDNexl, {from: accounts[2]});
//		const boolHhfXr49 = await Token50X1005gG5ep.transferFrom.call(addressm6uE6V, addressZ0DIWxt, uintoGxhvNf, {from: accounts[3]});
//		const addresseEe5FFe = await Token50X1005gG5ep.transferOwnership.call(addressCO3YyZ7, {from: accounts[3]});
//		const boolbQAroo6 = await Token50X1005gG5ep.issueTokens.call(addressWxYGVd, addressKndPCpJ, uintXwKoJB2, {from: accounts[4]});

		assert.equal(boolYcz7NO7, true)
		await expect(Token50X1005gG5ep.transferFrom.call(addressm6uE6V, addressZ0DIWxt, uintoGxhvNf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YbTGjmi = await Token50X100.new({from: accounts[4]});
		const uintgrgNQqA = BigInt("367")
		const addresssXwLiQN = accounts[1]
		const addressZEpLdxG = accounts[4]
		const uintqLQB9vu = BigInt("511")
		const addressEXmCFNX = accounts[3]
//		const boolerRsBTC = await Token50X100YbTGjmi.transfer.call(addresssXwLiQN, uintgrgNQqA, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100YbTGjmi.setTokenContract.call(addressZEpLdxG, {from: accounts[3]});
//		const boolZGqhtnZ = await Token50X100YbTGjmi.approve.call(addressEXmCFNX, uintqLQB9vu, {from: accounts[2]});

		await expect(Token50X100YbTGjmi.transfer.call(addresssXwLiQN, uintgrgNQqA, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YbTGjmi = await Token50X100.new({from: accounts[4]});
		const addressDFUMrgD = accounts[2]
		const addresshjn0L9 = accounts[5]
		const uintAMIcV1A = BigInt("1358")
		const uintdyhRujG = BigInt("511")
		const addressh81MFhN = accounts[2]
//		const addressg7ONv0W = await Token50X100YbTGjmi.setOriginalContract.call(addressDFUMrgD, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100YbTGjmi.setTokenContract.call(addresshjn0L9, {from: accounts[3]});
//		const boolbtMS3G = await Token50X100YbTGjmi.setMaxLockPeriod.call(uintAMIcV1A, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZGqhtnZ = await Token50X100YbTGjmi.approve.call(addressh81MFhN, uintdyhRujG, {from: accounts[2]});

		await expect(Token50X100YbTGjmi.setOriginalContract.call(addressDFUMrgD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YbTGjmi = await Token50X100.new({from: accounts[4]});
		const uintB8zu9cR = BigInt("306")
		const uintdN7ea0B = BigInt("407")
		const addresscKA22WD = accounts[1]
		const uintu7JZtKV = BigInt("511")
		const addressFRZlhaR = accounts[3]
		const boolXUqKGGi = await Token50X100YbTGjmi.setMaxLockPeriod.call(uintB8zu9cR, {from: accounts[2]});
//		const boolerRsBTC = await Token50X100YbTGjmi.transfer.call(addresscKA22WD, uintdN7ea0B, {from: "0x0000000000000000000000000000000000000001"});
//		const boolZGqhtnZ = await Token50X100YbTGjmi.approve.call(addressFRZlhaR, uintu7JZtKV, {from: accounts[2]});

		assert.equal(boolXUqKGGi, false)
		await expect(Token50X100YbTGjmi.transfer.call(addresscKA22WD, uintdN7ea0B, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YbTGjmi = await Token50X100.new({from: accounts[4]});
		const uintWeFHMKb = BigInt("407")
		const addresscfMUVtr = accounts[1]
		const uint256on2Rs0z = await Token50X100YbTGjmi.totalSupply.call({from: accounts[0]});
//		const boolerRsBTC = await Token50X100YbTGjmi.transfer.call(addresscfMUVtr, uintWeFHMKb, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256on2Rs0z, BigInt("4714285714285710"))
		await expect(Token50X100YbTGjmi.transfer.call(addresscfMUVtr, uintWeFHMKb, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YbTGjmi = await Token50X100.new({from: accounts[4]});
		const uintfNTQSTX = BigInt("1940")
		const uintlHMVdGK = BigInt("1619")
		const uint11ooOY = BigInt("736")
		const addressY5prwtA = accounts[0]
		const uintYzg8MPv = BigInt("407")
		const addressz24T8PP = accounts[1]
//		const boollQ56kRm = await Token50X100YbTGjmi.safeLock.call(uintlHMVdGK, uintfNTQSTX, {from: accounts[5]});
//		const boolKoYOULy = await Token50X100YbTGjmi.transfer.call(addressY5prwtA, uint11ooOY, {from: accounts[2]});
//		const boolerRsBTC = await Token50X100YbTGjmi.transfer.call(addressz24T8PP, uintYzg8MPv, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100YbTGjmi.safeLock.call(uintlHMVdGK, uintfNTQSTX, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100P2s11pf = await Token50X100.new({from: accounts[2]});
		const uintOTFMC59 = BigInt("933")
		const uintQTjRO67 = BigInt("1793")
		const addressqoiUzz3 = accounts[0]
		const uintyvnIeJA = BigInt("1343")
		const addressATqu7gC = accounts[2]
		const addresswwhTIhn = accounts[4]
		const boolHChWJbG = false
		const addressbkCsgad = accounts[0]
		const boolH7O6hSx = await Token50X100P2s11pf.setVesting.call(addressqoiUzz3, uintQTjRO67, uintOTFMC59, {from: accounts[2]});
//		await Token50X100P2s11pf.onlyOwner.call({from: accounts[4]});
//		const boolQ3vIUL = await Token50X100P2s11pf.transfer.call(addressATqu7gC, uintyvnIeJA, {from: accounts[2]});
//		const addressi1Kwyyo = await Token50X100P2s11pf.setOriginalContract.call(addresswwhTIhn, {from: accounts[1]});
//		await Token50X100P2s11pf.setWhiteList.call(addressbkCsgad, boolHChWJbG, {from: accounts[0]});

		assert.equal(boolH7O6hSx, true)
		await expect(Token50X100P2s11pf.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UUJQ69u = await Token50X100.new({from: accounts[2]});
		const uintblXLPT8 = BigInt("1783")
		const addressshN3yUq = "0x0000000000000000000000000000000000000000"
		const uintJfYMWQ = BigInt("806")
		const uintd2a5RHY = BigInt("1453")
		const boolsmS5h27 = false
		const addressJGJtV59 = accounts[0]
//		const boolpqCK8W7 = await Token50X100UUJQ69u.transfer.call(addressshN3yUq, uintblXLPT8, {from: accounts[3]});
//		const boolgjD8igD = await Token50X100UUJQ69u.safeLock.call(uintd2a5RHY, uintJfYMWQ, {from: accounts[0]});
//		await Token50X100UUJQ69u.setWhiteList.call(addressJGJtV59, boolsmS5h27, {from: accounts[1]});
//		await Token50X100UUJQ69u.onlyOwner.call({from: accounts[0]});

		await expect(Token50X100UUJQ69u.transfer.call(addressshN3yUq, uintblXLPT8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100u3rXYjS = await Token50X100.new({from: accounts[3]});
		const uintYZVWTSY = BigInt("428")
		const uintPskk6WV = BigInt("1172")
		const addressfVULwAz = accounts[0]
		const addresswHUEnuo = accounts[2]
		const addressn7Zi4wA = accounts[3]
		const uintB2LA0F = BigInt("259")
		const addressOzv2wzs = accounts[1]
//		const boolZEF61y = await Token50X100u3rXYjS._transfer.call(addresswHUEnuo, addressfVULwAz, uintPskk6WV, uintYZVWTSY, {from: accounts[3]});
//		const uint256RXg1Sst = await Token50X100u3rXYjS.balanceOf.call(addressn7Zi4wA, {from: accounts[3]});
//		const boolCwEtIX3 = await Token50X100u3rXYjS.increaseApproval.call(addressOzv2wzs, uintB2LA0F, {from: accounts[2]});

		await expect(Token50X100u3rXYjS._transfer.call(addresswHUEnuo, addressfVULwAz, uintPskk6WV, uintYZVWTSY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100cRSsnCO = await Token50X100.new({from: accounts[4]});
		const addresshr1AJ6N = accounts[2]
		const addressLbDrwLi = accounts[0]
		const uintGh9jAwV = BigInt("788")
		const addresspODhcxI = accounts[1]
		const uintYLwha9r = BigInt("1841")
		const addressm4Oou3n = accounts[2]
		const uintszi7oFF = BigInt("368")
		const uint4nIdWz = BigInt("74")
		const uint256m60mvoA = await Token50X100cRSsnCO.allowance.call(addressLbDrwLi, addresshr1AJ6N, {from: accounts[1]});
		const boolgNmbuJ = await Token50X100cRSsnCO.approve.call(addresspODhcxI, uintGh9jAwV, {from: accounts[0]});
//		const boolbb1szmZ = await Token50X100cRSsnCO.transfer.call(addressm4Oou3n, uintYLwha9r, {from: accounts[1]});
//		const boolwGegxWo = await Token50X100cRSsnCO.safeLock.call(uint4nIdWz, uintszi7oFF, {from: accounts[2]});

		assert.equal(boolgNmbuJ, true)
		assert.equal(uint256m60mvoA, BigInt("0"))
		await expect(Token50X100cRSsnCO.transfer.call(addressm4Oou3n, uintYLwha9r, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100FshPGBJ = await Token50X100.new({from: accounts[0]});
		const uintBMHob3a = BigInt("212")
		const addressLBgtUc = accounts[0]
		const uintloJlW2s = BigInt("6")
		const uintUKq72K = BigInt("1915")
		const booltIk54GH = await Token50X100FshPGBJ.increaseApproval.call(addressLBgtUc, uintBMHob3a, {from: accounts[3]});
//		await Token50X100FshPGBJ.lock.call({from: accounts[1]});
//		const boolH80Yl4j = await Token50X100FshPGBJ.safeLock.call(uintUKq72K, uintloJlW2s, {from: accounts[3]});

		assert.equal(booltIk54GH, true)
		await expect(Token50X100FshPGBJ.lock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UUJQ69u = await Token50X100.new({from: accounts[2]});
		const uintZVXcNm = BigInt("2034")
		const addressSWemeco = accounts[4]
		const addressqbVjwKJ = accounts[4]
		const uinthNHb43O = BigInt("1783")
		const address5qYHkY = "0x0000000000000000000000000000000000000001"
		const addressYquAja = "0x0000000000000000000000000000000000000000"
		const bools2EVL3Y = await Token50X100UUJQ69u.decreaseApproval.call(addressSWemeco, uintZVXcNm, {from: accounts[1]});
//		const addressk2KUlgf = await Token50X100UUJQ69u.transferOwnership.call(addressqbVjwKJ, {from: accounts[4]});
//		const boolpqCK8W7 = await Token50X100UUJQ69u.transfer.call(address5qYHkY, uinthNHb43O, {from: accounts[3]});
//		await Token50X100UUJQ69u.onlyOwner.call({from: accounts[0]});
//		const uint2565S3Y6y = await Token50X100UUJQ69u.balanceOf.call(addressYquAja, {from: accounts[2]});
//		await Token50X100UUJQ69u.release.call({from: accounts[1]});

		assert.equal(bools2EVL3Y, true)
		await expect(Token50X100UUJQ69u.transferOwnership.call(addressqbVjwKJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100e6jHaoa = await Token50X100.new({from: accounts[5]});
		const uintBnL1di = BigInt("682")
		const addressTbdw9Wt = accounts[5]
//		await Token50X100e6jHaoa.lock.call({from: accounts[5]});
//		const boolp4CVrVT = await Token50X100e6jHaoa.transfer.call(addressTbdw9Wt, uintBnL1di, {from: accounts[0]});

		await expect(Token50X100e6jHaoa.lock.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UUJQ69u = await Token50X100.new({from: accounts[2]});
		const uintJjdXylI = BigInt("200")
		const stringFlHrcx0 = "5KUbftylUAGX2qIis34ouvVTjeH2XmPW80VcNy7fX9fay280RUHkp2DyR4BKDDltczixYyJ1ZtVsOrQsm5C"
		const stringfK3t6x = "x"
		const uintT8z6i2v = BigInt("47")
		const stringaQcpquW = "kJ57hYnEamcKiKu3xI6hPrPBVOp2bBg6J8vUvbv"
		const stringqYgY4B = "JPzaa8Tdw1gmyBsBkshnhgDaJvW2nbksxSW36AWgUcc2Abd3Ara5ql0VyH0UhHdrWZDDmqzOVgbVJV"
		const uintPPNTmew = BigInt("1783")
		const addresstoUHUlG = "0x0000000000000000000000000000000000000001"
		const boolSW5rg6 = await Token50X100UUJQ69u.setSymbolNameDecimals.call(stringfK3t6x, stringFlHrcx0, uintJjdXylI, {from: accounts[2]});
//		await Token50X100UUJQ69u.setSymbolNameDecimals.call(stringqYgY4B, stringaQcpquW, uintT8z6i2v, {from: accounts[4]});
//		const boolpqCK8W7 = await Token50X100UUJQ69u.transfer.call(addresstoUHUlG, uintPPNTmew, {from: accounts[3]});

		await expect(Token50X100UUJQ69u.setSymbolNameDecimals.call(stringqYgY4B, stringaQcpquW, uintT8z6i2v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100u3rXYjS = await Token50X100.new({from: accounts[3]});
		const addressX0Dn3xZ = accounts[1]
		const addressgyKuFTS = "0x0000000000000000000000000000000000000001"
		const boolEYBAYRr = false
		const addressgdSjkRM = accounts[1]
//		await Token50X100u3rXYjS.setLinkingAddresses.call(addressgyKuFTS, addressX0Dn3xZ, {from: accounts[3]});
//		await Token50X100u3rXYjS.setWhiteList.call(addressgdSjkRM, boolEYBAYRr, {from: accounts[0]});

		await expect(Token50X100u3rXYjS.setLinkingAddresses.call(addressgyKuFTS, addressX0Dn3xZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100zEvWYpe = await Token50X100.new({from: accounts[0]});
		const addressAw0hz86 = accounts[1]
		const uintzuqSpkB = BigInt("192")
		const stringpqdhU2Q = "gfpNe337PVIeFnLDcv2jIPcFsiOABPJTp685nHy9FzJ6fvHDPwzGqVaaK"
		const stringhSAY44 = "H0YfD95C27ckjITuIEQURuT24cubWyNSNAZhmRFU1HmiLnwK449dI3vWacLLntVd60NKex7y7c"
//		await Token50X100zEvWYpe.setTokenContract.call(addressAw0hz86, {from: accounts[0]});
//		await Token50X100zEvWYpe.lock.call({from: accounts[4]});
//		const boolMr8mzpl = await Token50X100zEvWYpe.setSymbolNameDecimals.call(stringhSAY44, stringpqdhU2Q, uintzuqSpkB, {from: accounts[5]});

		await expect(Token50X100zEvWYpe.setTokenContract.call(addressAw0hz86, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100O3cvOZ = await Token50X100.new({from: accounts[1]});
		const uintSWIeek3 = BigInt("1778")
		const addressvF2E3Vg = accounts[4]
		const uint1s5hBF = BigInt("1008")
		const addressGulnrm9 = accounts[1]
		const addressHvtWAQj = accounts[4]
		const uintwb4jXch = BigInt("1844")
		const addressKXLR7hL = accounts[2]
		const addressu8XCaK = accounts[4]
//		await Token50X100O3cvOZ.release.call({from: accounts[1]});
//		const bool44PhGO = await Token50X100O3cvOZ.approve.call(addressvF2E3Vg, uintSWIeek3, {from: accounts[0]});
//		const boolGsvuPZV = await Token50X100O3cvOZ.increaseApproval.call(addressGulnrm9, uint1s5hBF, {from: accounts[3]});
//		const uint256xcKgfSP = await Token50X100O3cvOZ.balanceOf.call(addressHvtWAQj, {from: "0x0000000000000000000000000000000000000001"});
//		const boolVi3pfk = await Token50X100O3cvOZ.issueTokens.call(addressu8XCaK, addressKXLR7hL, uintwb4jXch, {from: accounts[2]});

		await expect(Token50X100O3cvOZ.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UUJQ69u = await Token50X100.new({from: accounts[2]});
		const uint9n5rwK = BigInt("203")
		const addressGsxZkJ0 = accounts[5]
		const boolaBRKdA4 = false
		const addressQBgiY0g = accounts[4]
		const uint3YFpGs = BigInt("691")
		const addressWGim6Mq = "0x0000000000000000000000000000000000000001"
		const uintyYPEhPZ = BigInt("1188")
		const addressM6Co9Hb = "0x0000000000000000000000000000000000000001"
		const boolBj5PgJg = await Token50X100UUJQ69u.decreaseApproval.call(addressGsxZkJ0, uint9n5rwK, {from: accounts[3]});
//		await Token50X100UUJQ69u.setWhiteListReceivers.call(addressQBgiY0g, boolaBRKdA4, {from: accounts[2]});
//		const uint256RcmtHRn = await Token50X100UUJQ69u.totalSupply.call({from: accounts[1]});
//		const boolizJWu8y = await Token50X100UUJQ69u.approve.call(addressWGim6Mq, uint3YFpGs, {from: accounts[2]});
//		const boolpqCK8W7 = await Token50X100UUJQ69u.transfer.call(addressM6Co9Hb, uintyYPEhPZ, {from: accounts[3]});

		assert.equal(boolBj5PgJg, true)
		await expect(Token50X100UUJQ69u.setWhiteListReceivers.call(addressQBgiY0g, boolaBRKdA4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100u3rXYjS = await Token50X100.new({from: accounts[3]});
		const addressFQwGhC = accounts[2]
		const uintXQHmFBz = BigInt("666")
		const uintcC5MkIx = BigInt("1177")
		const addressHTckcGt = accounts[3]
		const uintE5fByjo = BigInt("428")
		const uintWiEMWy4 = BigInt("52")
		const addressONu6xV5 = accounts[0]
		const addressmZ3NYmJ = accounts[2]
		const address3xxGMj = await Token50X100u3rXYjS.transferOwnership.call(addressFQwGhC, {from: accounts[3]});
//		const boolR7noX5G = await Token50X100u3rXYjS.setVesting.call(addressHTckcGt, uintcC5MkIx, uintXQHmFBz, {from: accounts[5]});
//		const boolZEF61y = await Token50X100u3rXYjS._transfer.call(addressmZ3NYmJ, addressONu6xV5, uintWiEMWy4, uintE5fByjo, {from: accounts[3]});

		await expect(Token50X100u3rXYjS.setVesting.call(addressHTckcGt, uintcC5MkIx, uintXQHmFBz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})