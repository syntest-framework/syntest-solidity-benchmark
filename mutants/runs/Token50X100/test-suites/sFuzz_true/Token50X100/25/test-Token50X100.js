const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100PswhTnN = await Token50X100.new({from: accounts[0]});
		const uintIXBybwJ = BigInt("21")
		const stringjVOGHH8 = "8A3DdfAQw5Yts28KVmGD6EMx4bS2dCLiBdbq4sGA1JgU3D57w2ITYEtt"
		const stringepDjQm1 = "1xI1Nt1Cm1Uy815I4lJqxQKW2NHqoUO3g54"
		const uintr3qx7SP = BigInt("993")
		const uintM78CZl7 = BigInt("1770")
		const addressUt5qs8R = accounts[3]
		const uinteOceau7 = BigInt("1386")
		const uinttIuHLH1 = BigInt("1359")
		const addresszGS6iKu = accounts[2]
		const addressE1E4Of4 = accounts[4]
		const boolrps511n = await Token50X100PswhTnN.setSymbolNameDecimals.call(stringepDjQm1, stringjVOGHH8, uintIXBybwJ, {from: accounts[3]});
		await Token50X100PswhTnN.release.call({from: accounts[4]});
		const boolNGUO6Z8 = await Token50X100PswhTnN.setVesting.call(addressUt5qs8R, uintM78CZl7, uintr3qx7SP, {from: accounts[3]});
		const booldHYLSOR = await Token50X100PswhTnN._transfer.call(addressE1E4Of4, addresszGS6iKu, uinttIuHLH1, uinteOceau7, {from: accounts[2]});

		await expect(Token50X100PswhTnN.setSymbolNameDecimals.call(stringepDjQm1, stringjVOGHH8, uintIXBybwJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YqYFoMG = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTtYKRCm = BigInt("1589")
		const uintXOINa0 = BigInt("1646")
		const addressonvSXrS = accounts[0]
		const addressUa8kZSa = accounts[0]
		const uintR60TJlt = BigInt("1224")
		const addressk5QMXUq = accounts[5]
		const addressKYRz6aG = accounts[1]
		const uintyNtavjG = BigInt("794")
		const uintBv0Sd6C = BigInt("138")
		const addressOsERV72 = accounts[5]
		const boolPONVru = await Token50X100YqYFoMG._transfer.call(addressUa8kZSa, addressonvSXrS, uintXOINa0, uintTtYKRCm, {from: accounts[1]});
		const boolTznXYmC = await Token50X100YqYFoMG.transferFrom.call(addressKYRz6aG, addressk5QMXUq, uintR60TJlt, {from: accounts[0]});
		const boolSt0FZg4 = await Token50X100YqYFoMG.setVesting.call(addressOsERV72, uintBv0Sd6C, uintyNtavjG, {from: accounts[2]});
	});

	it('test for Token50X100', async () => {
		const Token50X100yXJf87c = await Token50X100.new({from: accounts[3]});
		const uintUhDfgNF = BigInt("36")
		const addressK3aVBIE = accounts[0]
		const addressj64d2EQ = accounts[5]
		const uinteOA3WG = BigInt("941")
		const uintzp1TtN = BigInt("552")
		const addressPZy08tu = accounts[4]
		const uintci8BYsL = BigInt("6")
		const stringQ8KzqT0 = "PV7KK58qOm6Hb3WyAX"
		const stringu2VebZM = "Rw4RkJk9dGvBuIHEqrvUz"
		const addressKK3zY9A = accounts[3]
		const boolDLO00fz = await Token50X100yXJf87c.issueTokens.call(addressj64d2EQ, addressK3aVBIE, uintUhDfgNF, {from: accounts[2]});
		const boolyTGvLut = await Token50X100yXJf87c.setVesting.call(addressPZy08tu, uintzp1TtN, uinteOA3WG, {from: accounts[3]});
		await Token50X100yXJf87c.setSymbolNameDecimals.call(stringu2VebZM, stringQ8KzqT0, uintci8BYsL, {from: accounts[3]});
		await Token50X100yXJf87c.setTokenContract.call(addressKK3zY9A, {from: accounts[1]});

		await expect(Token50X100yXJf87c.issueTokens.call(addressj64d2EQ, addressK3aVBIE, uintUhDfgNF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100xEmRvA6 = await Token50X100.new({from: accounts[0]});
		const uintNu9w3IA = BigInt("636")
		const boolZOUAAUQ = false
		const addressWBJc3a3 = accounts[2]
		const uintBXPTBVA = BigInt("181")
		const addressJkp2JUC = accounts[2]
		const addressoo0ORm = accounts[4]
		const uintNvCQ2Up = BigInt("850")
		const addressvvPFMl = accounts[5]
		const boolnTzDJgT = await Token50X100xEmRvA6.setMaxLockPeriod.call(uintNu9w3IA, {from: accounts[4]});
		await Token50X100xEmRvA6.setWhiteList.call(addressWBJc3a3, boolZOUAAUQ, {from: accounts[5]});
		const boolqRcQMOv = await Token50X100xEmRvA6.transferFrom.call(addressoo0ORm, addressJkp2JUC, uintBXPTBVA, {from: accounts[3]});
		const boolanJV01 = await Token50X100xEmRvA6.increaseApproval.call(addressvvPFMl, uintNvCQ2Up, {from: accounts[0]});

		assert.equal(boolnTzDJgT, false)
		await expect(Token50X100xEmRvA6.setWhiteList.call(addressWBJc3a3, boolZOUAAUQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TL7vWM4 = await Token50X100.new({from: accounts[1]});
		const uintsMvPLcV = BigInt("601")
		const addressd1RSRjQ = accounts[1]
		const uintzqdX8df = BigInt("636")
		const uintjrHjrw = BigInt("1914")
		const uintHdIsFb = BigInt("963")
		const uintDm9reH1 = BigInt("390")
		const uintU9IQQgM = BigInt("997")
		const addressDX3tdFZ = accounts[4]
		const addresshYxF9dB = accounts[3]
		const boollS9VK2s = await Token50X100TL7vWM4.transfer.call(addressd1RSRjQ, uintsMvPLcV, {from: accounts[2]});
		const boolHsCyzgq = await Token50X100TL7vWM4.safeLock.call(uintjrHjrw, uintzqdX8df, {from: accounts[1]});
		const boolbBeeN5 = await Token50X100TL7vWM4.safeLock.call(uintDm9reH1, uintHdIsFb, {from: accounts[1]});
		const boolWHSIV87 = await Token50X100TL7vWM4.transferFrom.call(addresshYxF9dB, addressDX3tdFZ, uintU9IQQgM, {from: accounts[0]});

		await expect(Token50X100TL7vWM4.transfer.call(addressd1RSRjQ, uintsMvPLcV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100y2g2aF4 = await Token50X100.new({from: accounts[4]});
		const addressD75zXYP = accounts[4]
		const addressT4OwmKU = accounts[1]
		const uinttM6e7fm = BigInt("1389")
		const uintxy8Qc7F = BigInt("1444")
		const uintGH0Ooq3 = BigInt("595")
		const addresshw7MvF2 = "0x0000000000000000000000000000000000000001"
		const addressBZtd2V = accounts[2]
		await Token50X100y2g2aF4.setLinkingAddresses.call(addressT4OwmKU, addressD75zXYP, {from: accounts[4]});
		const boolfNHgKEt = await Token50X100y2g2aF4.setMaxLockPeriod.call(uinttM6e7fm, {from: accounts[4]});
		const boolvSufk0 = await Token50X100y2g2aF4.setMaxLockPeriod.call(uintxy8Qc7F, {from: accounts[4]});
		const boolNltKBkt = await Token50X100y2g2aF4.issueTokens.call(addressBZtd2V, addresshw7MvF2, uintGH0Ooq3, {from: accounts[2]});
		await Token50X100y2g2aF4.onlyOwner.call({from: accounts[2]});

		await expect(Token50X100y2g2aF4.setLinkingAddresses.call(addressT4OwmKU, addressD75zXYP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100OP1jXYn = await Token50X100.new({from: accounts[5]});
		const uintyLBEgS = BigInt("897")
		const uintfRwYMEs = BigInt("289")
		const uintycmbikv = BigInt("609")
		const uinto36rDX7 = BigInt("715")
		const addressbWm4Acf = "0x0000000000000000000000000000000000000001"
		const uintPPaIig = BigInt("801")
		const addressxNd53R = accounts[2]
		const booltk8iXJ = await Token50X100OP1jXYn.safeLock.call(uintfRwYMEs, uintyLBEgS, {from: accounts[0]});
		await Token50X100OP1jXYn.release.call({from: accounts[2]});
		const boolq3tujab = await Token50X100OP1jXYn.setVesting.call(addressbWm4Acf, uinto36rDX7, uintycmbikv, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100OP1jXYn.lock.call({from: accounts[0]});
		const boolnjru9mG = await Token50X100OP1jXYn.approve.call(addressxNd53R, uintPPaIig, {from: accounts[5]});

		await expect(Token50X100OP1jXYn.safeLock.call(uintfRwYMEs, uintyLBEgS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TL7vWM4 = await Token50X100.new({from: accounts[1]});
		const uintw1o3nS = BigInt("578")
		const addressb6rmTOd = accounts[0]
		const uintJaBuonq = BigInt("601")
		const addressaaZZGq = accounts[1]
		const uintdRavn3a = BigInt("744")
		const addresspiYfTfH = accounts[4]
		const uintDf6f0rv = BigInt("997")
		const addressS8RZ4xv = accounts[4]
		const addressQdnHVgh = accounts[3]
		const booltdnr6D3 = await Token50X100TL7vWM4.decreaseApproval.call(addressb6rmTOd, uintw1o3nS, {from: accounts[4]});
		const boollS9VK2s = await Token50X100TL7vWM4.transfer.call(addressaaZZGq, uintJaBuonq, {from: accounts[2]});
		const boolYOpS4UD = await Token50X100TL7vWM4.decreaseApproval.call(addresspiYfTfH, uintdRavn3a, {from: "0x0000000000000000000000000000000000000001"});
		const boolWHSIV87 = await Token50X100TL7vWM4.transferFrom.call(addressQdnHVgh, addressS8RZ4xv, uintDf6f0rv, {from: accounts[0]});

		assert.equal(booltdnr6D3, true)
		await expect(Token50X100TL7vWM4.transfer.call(addressaaZZGq, uintJaBuonq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TL7vWM4 = await Token50X100.new({from: accounts[1]});
		const uintG7Qhuku = BigInt("997")
		const addressaYowAWO = accounts[4]
		const addressBrCbmwG = accounts[3]
		const boolWHSIV87 = await Token50X100TL7vWM4.transferFrom.call(addressBrCbmwG, addressaYowAWO, uintG7Qhuku, {from: accounts[0]});

		await expect(Token50X100TL7vWM4.transferFrom.call(addressBrCbmwG, addressaYowAWO, uintG7Qhuku, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TL7vWM4 = await Token50X100.new({from: accounts[1]});
		const addressdM0SZM3 = "0x0000000000000000000000000000000000000001"
		const addressf9fjdDg = accounts[5]
		const uint7Ks8f1 = BigInt("997")
		const addressD2t5iGW = accounts[5]
		const addressJWp4UcX = accounts[3]
		const uint256nblZ43q = await Token50X100TL7vWM4.allowance.call(addressf9fjdDg, addressdM0SZM3, {from: accounts[4]});
		const boolWHSIV87 = await Token50X100TL7vWM4.transferFrom.call(addressJWp4UcX, addressD2t5iGW, uint7Ks8f1, {from: accounts[0]});

		assert.equal(uint256nblZ43q, BigInt("0"))
		await expect(Token50X100TL7vWM4.transferFrom.call(addressJWp4UcX, addressD2t5iGW, uint7Ks8f1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TL7vWM4 = await Token50X100.new({from: accounts[1]});
		const uintLvJPq2H = BigInt("601")
		const addressbFUcmli = accounts[1]
		const uint256pjricB2 = await Token50X100TL7vWM4.totalSupply.call({from: accounts[5]});
		const boollS9VK2s = await Token50X100TL7vWM4.transfer.call(addressbFUcmli, uintLvJPq2H, {from: accounts[2]});

		assert.equal(uint256pjricB2, BigInt("4714285714285710"))
		await expect(Token50X100TL7vWM4.transfer.call(addressbFUcmli, uintLvJPq2H, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100hKpE1wk = await Token50X100.new({from: accounts[0]});
		const uintPL2oMC0 = BigInt("638")
		const addressqKmJ5z9 = accounts[2]
		const uintC0apgO2 = BigInt("898")
		const uintkb8xmEq = BigInt("826")
		const addressk9EZs2m = accounts[4]
		const boolRgjb1fi = await Token50X100hKpE1wk.approve.call(addressqKmJ5z9, uintPL2oMC0, {from: accounts[0]});
		const uint256uNJTjqd = await Token50X100hKpE1wk.totalSupply.call({from: accounts[1]});
		const boolqNATtmz = await Token50X100hKpE1wk.safeLock.call(uintkb8xmEq, uintC0apgO2, {from: accounts[4]});
		const addressPHWOrBp = await Token50X100hKpE1wk.setOriginalContract.call(addressk9EZs2m, {from: accounts[0]});

		assert.equal(boolRgjb1fi, true)
		assert.equal(uint256uNJTjqd, BigInt("4714285714285710"))
		await expect(Token50X100hKpE1wk.safeLock.call(uintkb8xmEq, uintC0apgO2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100OP1jXYn = await Token50X100.new({from: accounts[5]});
		const addressEW7ldo = accounts[3]
		const uintzxiUQcg = BigInt("897")
		const uintqgzpdes = BigInt("289")
		const uintY31ZEa = BigInt("609")
		const uintgRDBrmh = BigInt("715")
		const addressfwA5X9 = "0x0000000000000000000000000000000000000001"
		const uint2560a9xz0 = await Token50X100OP1jXYn.balanceOf.call(addressEW7ldo, {from: accounts[2]});
		const booltk8iXJ = await Token50X100OP1jXYn.safeLock.call(uintqgzpdes, uintzxiUQcg, {from: accounts[0]});
		const boolq3tujab = await Token50X100OP1jXYn.setVesting.call(addressfwA5X9, uintgRDBrmh, uintY31ZEa, {from: "0x0000000000000000000000000000000000000001"});
		await Token50X100OP1jXYn.lock.call({from: accounts[0]});

		assert.equal(uint2560a9xz0, BigInt("0"))
		await expect(Token50X100OP1jXYn.safeLock.call(uintqgzpdes, uintzxiUQcg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TL7vWM4 = await Token50X100.new({from: accounts[1]});
		const addresscHK4PE6 = accounts[4]
		const uintT7lTCvu = BigInt("601")
		const addressojnzHVq = accounts[2]
		await Token50X100TL7vWM4.setTokenContract.call(addresscHK4PE6, {from: accounts[1]});
		const boollS9VK2s = await Token50X100TL7vWM4.transfer.call(addressojnzHVq, uintT7lTCvu, {from: accounts[2]});

		await expect(Token50X100TL7vWM4.setTokenContract.call(addresscHK4PE6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100WdMSRwY = await Token50X100.new({from: accounts[4]});
		const uintXxYY26V = BigInt("127")
		const stringMk3XsCe = "8gy7oRAvFqEf8sC9mwEjXKXKEMwe0l1UHqVTZHBEY16cf6ybeq"
		const stringiKZqS9O = "dSR7qeg3OvW68w2mDKXb7FVYCuRQS2jef0xFuHvuZgHiIGHVnIJgf44EYXg7jYc2WBQ"
		const addresswy86NzV = "0x0000000000000000000000000000000000000001"
		const uintE8Doa6e = BigInt("762")
		const uintCAxkC3 = BigInt("1710")
		await Token50X100WdMSRwY.setSymbolNameDecimals.call(stringiKZqS9O, stringMk3XsCe, uintXxYY26V, {from: accounts[4]});
		const uint256LzLbYaR = await Token50X100WdMSRwY.balanceOf.call(addresswy86NzV, {from: accounts[0]});
		const boolkIY7uy8 = await Token50X100WdMSRwY.safeLock.call(uintCAxkC3, uintE8Doa6e, {from: accounts[2]});

		await expect(Token50X100WdMSRwY.setSymbolNameDecimals.call(stringiKZqS9O, stringMk3XsCe, uintXxYY26V, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100HqnreYF = await Token50X100.new({from: accounts[4]});
		const uintbnxdL5a = BigInt("992")
		const uintks7G0QN = BigInt("1310")
		const addresssoCfjS = accounts[3]
		const addressB3G815F = accounts[4]
		const addressc8p7mlB = accounts[3]
		const uintM6h8HJ = BigInt("301")
		const addressz1o18su = accounts[4]
		const boolPVHfFmC = await Token50X100HqnreYF._transfer.call(addressB3G815F, addresssoCfjS, uintks7G0QN, uintbnxdL5a, {from: accounts[4]});
		const addressQDsFyEb = await Token50X100HqnreYF.transferOwnership.call(addressc8p7mlB, {from: accounts[4]});
		const boolo9xIl59 = await Token50X100HqnreYF.transfer.call(addressz1o18su, uintM6h8HJ, {from: accounts[1]});

		await expect(Token50X100HqnreYF._transfer.call(addressB3G815F, addresssoCfjS, uintks7G0QN, uintbnxdL5a, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TL7vWM4 = await Token50X100.new({from: accounts[1]});
		const uintNCEeruz = BigInt("1505")
		const addresskwPpml8 = "0x0000000000000000000000000000000000000000"
		const boolQ8Awgn3 = await Token50X100TL7vWM4.transfer.call(addresskwPpml8, uintNCEeruz, {from: accounts[4]});

		await expect(Token50X100TL7vWM4.transfer.call(addresskwPpml8, uintNCEeruz, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TL7vWM4 = await Token50X100.new({from: accounts[1]});
		const uintxCtMyBa = BigInt("1505")
		const addressc9CND3d = "0x0000000000000000000000000000000000000001"
		await Token50X100TL7vWM4.release.call({from: accounts[1]});
		const boolQ8Awgn3 = await Token50X100TL7vWM4.transfer.call(addressc9CND3d, uintxCtMyBa, {from: accounts[4]});

		await expect(Token50X100TL7vWM4.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100INJ8pzQ = await Token50X100.new({from: accounts[0]});
		const uintiJEdxNQ = BigInt("238")
		const addressfeqkGZ7 = accounts[0]
		const addresspzKrwna = accounts[0]
		const boolHHez9YR = await Token50X100INJ8pzQ.decreaseApproval.call(addressfeqkGZ7, uintiJEdxNQ, {from: accounts[2]});
		const addressykAKRbP = await Token50X100INJ8pzQ.transferOwnership.call(addresspzKrwna, {from: accounts[0]});

		assert.equal(boolHHez9YR, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100TL7vWM4 = await Token50X100.new({from: accounts[1]});
		const uintAcOrjgz = BigInt("955")
		const addressS0nCt2 = accounts[3]
		const uintrVcrUh3 = BigInt("1958")
		const uintgiNXPF7 = BigInt("2045")
		const uintbWd7gtm = BigInt("193")
		const stringiPccacj = "5w40UErrIYgcAVlpXanOqL4c6mpo5aj87fcsyusxhW"
		const stringkHYamJu = "DyccbE63JTDliwed"
		const bool7s2Cpk = await Token50X100TL7vWM4.increaseApproval.call(addressS0nCt2, uintAcOrjgz, {from: accounts[4]});
		const boolL6wjhsc = await Token50X100TL7vWM4.safeLock.call(uintgiNXPF7, uintrVcrUh3, {from: accounts[4]});
		const boolbQJHrQd = await Token50X100TL7vWM4.setSymbolNameDecimals.call(stringkHYamJu, stringiPccacj, uintbWd7gtm, {from: accounts[0]});

		assert.equal(bool7s2Cpk, true)
		await expect(Token50X100TL7vWM4.safeLock.call(uintgiNXPF7, uintrVcrUh3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TL7vWM4 = await Token50X100.new({from: accounts[1]});
		const uintGqy6eDk = BigInt("872")
		const uintlzOhhfQ = BigInt("1943")
		const addressvRMnOw = accounts[4]
		const uintg7abEhY = BigInt("812")
		const uintZo2h59 = BigInt("1085")
		const addressNIdvTla = accounts[0]
		const uintBpDuMSN = BigInt("1863")
		const uintZQQHvYd = BigInt("2025")
		const boolOpdYbH1 = await Token50X100TL7vWM4.setVesting.call(addressvRMnOw, uintlzOhhfQ, uintGqy6eDk, {from: accounts[1]});
		const boolq9OGD2S = await Token50X100TL7vWM4.setVesting.call(addressNIdvTla, uintZo2h59, uintg7abEhY, {from: "0x0000000000000000000000000000000000000001"});
		const boolL6wjhsc = await Token50X100TL7vWM4.safeLock.call(uintZQQHvYd, uintBpDuMSN, {from: accounts[4]});

		assert.equal(boolOpdYbH1, true)
		await expect(Token50X100TL7vWM4.setVesting.call(addressNIdvTla, uintZo2h59, uintg7abEhY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100TL7vWM4 = await Token50X100.new({from: accounts[1]});
		const booltTjZLmh = true
		const addressoX6Ah9Y = "0x0000000000000000000000000000000000000001"
		const uintFIH6lOc = BigInt("1505")
		const addressYiZZLPS = "0x0000000000000000000000000000000000000000"
		await Token50X100TL7vWM4.setWhiteList.call(addressoX6Ah9Y, booltTjZLmh, {from: accounts[1]});
		const boolQ8Awgn3 = await Token50X100TL7vWM4.transfer.call(addressYiZZLPS, uintFIH6lOc, {from: accounts[4]});

		await expect(Token50X100TL7vWM4.setWhiteList.call(addressoX6Ah9Y, booltTjZLmh, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})