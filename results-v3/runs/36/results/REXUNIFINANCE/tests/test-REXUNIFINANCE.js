const REXUNIFINANCE = artifacts.require("REXUNIFINANCE");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('REXUNIFINANCE', (accounts) => {
	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEyLVwn86 = await REXUNIFINANCE.new({from: accounts[1]});
		const uintwyIsyiG = BigInt("1579")
		const addressywlxtA2 = "0x0000000000000000000000000000000000000001"
		const addressnVHbm9B = accounts[2]
		const addressZ9k8YAN = accounts[3]
		const uinthJD2W0D = BigInt("1893")
		const addressBlM6kxI = accounts[2]
		const addressExX5T3J = "0x0000000000000000000000000000000000000001"
		const boolEmYG84P = await REXUNIFINANCEyLVwn86.transfer.call(addressywlxtA2, uintwyIsyiG, {from: accounts[3]});
		const uint256wnGya9M = await REXUNIFINANCEyLVwn86.allowance.call(addressZ9k8YAN, addressnVHbm9B, {from: accounts[4]});
		const booli4sFpXA = await REXUNIFINANCEyLVwn86.decreaseApproval.call(addressBlM6kxI, uinthJD2W0D, {from: accounts[3]});
		const addressHQ2fUeC = await REXUNIFINANCEyLVwn86.transferOwnership.call(addressExX5T3J, {from: accounts[0]});

		await expect(REXUNIFINANCEyLVwn86.transfer.call(addressywlxtA2, uintwyIsyiG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEd02PXYQ = await REXUNIFINANCE.new({from: "0x0000000000000000000000000000000000000001"});
		const uintgdJpEdW = BigInt("2023")
		const addressGvepdHV = "0x0000000000000000000000000000000000000001"
		const addressd54Kl63 = accounts[0]
		const addresssvEuWuj = accounts[2]
		const uintUziKbIp = BigInt("1370")
		const addressVHbC9Fm = accounts[0]
		const uintJI4YRjE = BigInt("2015")
		const addressLEDVkWd = accounts[4]
		const boolXijNy3j = await REXUNIFINANCEd02PXYQ.transferFrom.call(addressd54Kl63, addressGvepdHV, uintgdJpEdW, {from: accounts[1]});
		const addresssh6CTTc = await REXUNIFINANCEd02PXYQ.transferOwnership.call(addresssvEuWuj, {from: accounts[2]});
		const bool0XtLhy = await REXUNIFINANCEd02PXYQ.approve.call(addressVHbC9Fm, uintUziKbIp, {from: accounts[3]});
		const boolWiHBXta = await REXUNIFINANCEd02PXYQ.increaseApproval.call(addressLEDVkWd, uintJI4YRjE, {from: accounts[0]});
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEAEhKhiz = await REXUNIFINANCE.new({from: accounts[0]});
		const addressxrDsNXW = "0x0000000000000000000000000000000000000001"
		const addressuCN87Q = accounts[3]
		const uintltJk6SA = BigInt("436")
		const addressSVzRwUr = accounts[4]
		const addressiR1F6tF = accounts[2]
		const uint256iO1HF5M = await REXUNIFINANCEAEhKhiz.transferableTokens.call(addressxrDsNXW, {from: accounts[2]});
		const uint256t7AsA3 = await REXUNIFINANCEAEhKhiz.balanceOf.call(addressuCN87Q, {from: accounts[0]});
		const boolAKDIfTV = await REXUNIFINANCEAEhKhiz.transferFrom.call(addressiR1F6tF, addressSVzRwUr, uintltJk6SA, {from: accounts[2]});

		assert.equal(uint256iO1HF5M, BigInt("0"))
		assert.equal(uint256t7AsA3, BigInt("0"))
		await expect(REXUNIFINANCEAEhKhiz.transferFrom.call(addressiR1F6tF, addressSVzRwUr, uintltJk6SA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEnnMnqz1 = await REXUNIFINANCE.new({from: accounts[2]});
		const uintFsTb494 = BigInt("1139")
		const addressDuROYB2 = accounts[2]
		const uintEKNKwG = BigInt("1000")
		const addressTtvCAVg = accounts[2]
		const uintpD9wI4m = BigInt("272")
		const addressfszftN9 = "0x0000000000000000000000000000000000000001"
		const addressm38uFsd = accounts[1]
		const addressSzR1m1g = accounts[4]
		const boolI61AO6D = await REXUNIFINANCEnnMnqz1.approve.call(addressDuROYB2, uintFsTb494, {from: accounts[0]});
		const boolJ6lSyKZ = await REXUNIFINANCEnnMnqz1.approve.call(addressTtvCAVg, uintEKNKwG, {from: accounts[4]});
		const boolSoKnGQD = await REXUNIFINANCEnnMnqz1.transfer.call(addressfszftN9, uintpD9wI4m, {from: accounts[2]});
		const addressAxESNaA = await REXUNIFINANCEnnMnqz1.transferOwnership.call(addressm38uFsd, {from: accounts[2]});
		const uint256SEbgls1 = await REXUNIFINANCEnnMnqz1.balanceOf.call(addressSzR1m1g, {from: accounts[4]});

		assert.equal(boolI61AO6D, true)
		assert.equal(boolJ6lSyKZ, true)
		await expect(REXUNIFINANCEnnMnqz1.transfer.call(addressfszftN9, uintpD9wI4m, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEDUlTa7 = await REXUNIFINANCE.new({from: accounts[1]});
		const addressCw9cA2c = accounts[4]
		const uint9dk923 = BigInt("992")
		const addressZY3K05L = accounts[1]
		const uintCnHJgyn = BigInt("956")
		const addressz4dWBk = accounts[1]
		const addressDGBMPUJ = await REXUNIFINANCEDUlTa7.transferOwnership.call(addressCw9cA2c, {from: accounts[2]});
		const boolSyz1uU = await REXUNIFINANCEDUlTa7.transfer.call(addressZY3K05L, uint9dk923, {from: accounts[0]});
		const boolNbsZr8U = await REXUNIFINANCEDUlTa7.approve.call(addressz4dWBk, uintCnHJgyn, {from: accounts[0]});

		await expect(REXUNIFINANCEDUlTa7.transferOwnership.call(addressCw9cA2c, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCETusV9bg = await REXUNIFINANCE.new({from: accounts[2]});
		const uintOFRBAmh = BigInt("514")
		const addressuPvyQaa = accounts[1]
		const uinttkTRsG3 = BigInt("836")
		const addressnSVQYwW = accounts[0]
		const addressx3qMDCm = accounts[3]
		const uintKlFm2Fc = BigInt("248")
		const addressYfXpKUm = accounts[1]
		const uintfBdTsZa = BigInt("1203")
		const addressZhnw4Nr = accounts[5]
		const boolEZ17pIR = await REXUNIFINANCETusV9bg.decreaseApproval.call(addressuPvyQaa, uintOFRBAmh, {from: accounts[3]});
		const boolEcoJ5ze = await REXUNIFINANCETusV9bg.transferFrom.call(addressx3qMDCm, addressnSVQYwW, uinttkTRsG3, {from: accounts[1]});
		const boolvffihII = await REXUNIFINANCETusV9bg.approve.call(addressYfXpKUm, uintKlFm2Fc, {from: accounts[1]});
		const boolV7OzBs5 = await REXUNIFINANCETusV9bg.increaseApproval.call(addressZhnw4Nr, uintfBdTsZa, {from: accounts[2]});

		assert.equal(boolEZ17pIR, true)
		await expect(REXUNIFINANCETusV9bg.transferFrom.call(addressx3qMDCm, addressnSVQYwW, uinttkTRsG3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEZEpkc1U = await REXUNIFINANCE.new({from: accounts[3]});
		const addresspiH3dhm = accounts[1]
		const addressbs6h7HX = accounts[0]
		const addressZINOr49 = accounts[4]
		const addressNz5bh5j = accounts[0]
		const uintQEq0xhx = BigInt("507")
		const addressnlJgfle = accounts[4]
		const uintffdN0qp = BigInt("138")
		const addressYScrQYG = accounts[0]
		const addresscrqJnl = accounts[4]
		const addressxchPHht = accounts[2]
		const uint256VoYiQJC = await REXUNIFINANCEZEpkc1U.allowance.call(addressbs6h7HX, addresspiH3dhm, {from: accounts[3]});
		const uint256mWi4bI = await REXUNIFINANCEZEpkc1U.allowance.call(addressNz5bh5j, addressZINOr49, {from: accounts[3]});
		const boolhvnsqc = await REXUNIFINANCEZEpkc1U.transfer.call(addressnlJgfle, uintQEq0xhx, {from: accounts[0]});
		const boolmAe75wu = await REXUNIFINANCEZEpkc1U.transfer.call(addressYScrQYG, uintffdN0qp, {from: accounts[3]});
		const uint256RDll75 = await REXUNIFINANCEZEpkc1U.allowance.call(addressxchPHht, addresscrqJnl, {from: accounts[5]});

		assert.equal(uint256VoYiQJC, BigInt("0"))
		assert.equal(uint256mWi4bI, BigInt("0"))
		await expect(REXUNIFINANCEZEpkc1U.transfer.call(addressnlJgfle, uintQEq0xhx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEGFzHMqR = await REXUNIFINANCE.new({from: accounts[4]});
		const uintNBpnhug = BigInt("1451")
		const addressY6JB9ce = "0x0000000000000000000000000000000000000001"
		const uintTmXXqBd = BigInt("1721")
		const addressvnlMkdI = accounts[0]
		const uintDr5QfMN = BigInt("1276")
		const addressfGsUvAg = accounts[0]
		const addressjqS1D4m = accounts[1]
		const addressioNNIpF = accounts[0]
		const uintdQxAIr = BigInt("930")
		const addressduuumar = accounts[2]
		const boolTbsenqG = await REXUNIFINANCEGFzHMqR.approve.call(addressY6JB9ce, uintNBpnhug, {from: accounts[2]});
		const boolJoFc7Rv = await REXUNIFINANCEGFzHMqR.increaseApproval.call(addressvnlMkdI, uintTmXXqBd, {from: accounts[1]});
		const boolvZlSnt2 = await REXUNIFINANCEGFzHMqR.transferFrom.call(addressjqS1D4m, addressfGsUvAg, uintDr5QfMN, {from: accounts[3]});
		const addressS8dPgKk = await REXUNIFINANCEGFzHMqR.transferOwnership.call(addressioNNIpF, {from: accounts[1]});
		const booldHbvlyv = await REXUNIFINANCEGFzHMqR.transfer.call(addressduuumar, uintdQxAIr, {from: accounts[2]});

		assert.equal(boolJoFc7Rv, true)
		assert.equal(boolTbsenqG, true)
		await expect(REXUNIFINANCEGFzHMqR.transferFrom.call(addressjqS1D4m, addressfGsUvAg, uintDr5QfMN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEDUlTa7 = await REXUNIFINANCE.new({from: accounts[1]});
		const addressQOZR7In = accounts[3]
		const addressLbQIeTe = accounts[4]
		const uintrMIMVOT = BigInt("992")
		const addressAskv7qH = accounts[1]
		const addressdt0SyV9 = await REXUNIFINANCEDUlTa7.transferOwnership.call(addressQOZR7In, {from: accounts[1]});
		const addressDGBMPUJ = await REXUNIFINANCEDUlTa7.transferOwnership.call(addressLbQIeTe, {from: accounts[2]});
		const boolSyz1uU = await REXUNIFINANCEDUlTa7.transfer.call(addressAskv7qH, uintrMIMVOT, {from: accounts[0]});

		await expect(REXUNIFINANCEDUlTa7.transferOwnership.call(addressLbQIeTe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEyLVwn86 = await REXUNIFINANCE.new({from: accounts[1]});
		const uintXiQ8gnK = BigInt("1579")
		const addressN2bsYq = "0x00000000000000000000000000000000000000-1"
		const boolEmYG84P = await REXUNIFINANCEyLVwn86.transfer.call(addressN2bsYq, uintXiQ8gnK, {from: accounts[3]});

		await expect(REXUNIFINANCEyLVwn86.transfer.call(addressN2bsYq, uintXiQ8gnK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for REXUNIFINANCE', async () => {
		const REXUNIFINANCEAEhKhiz = await REXUNIFINANCE.new({from: accounts[0]});
		const uint55aqzU = BigInt("1992")
		const addressOs2RAvT = accounts[5]
		const addressMKG0Ws0 = "0x00000000000000000000000000000000000000-1"
		const uintwN0AxQW = BigInt("436")
		const addressMVppqpt = accounts[4]
		const addressy5Ftm67 = accounts[2]
		const addressRmGtSvE = accounts[4]
		const addresszFcLTKD = accounts[1]
		const booly31UNJ5 = await REXUNIFINANCEAEhKhiz.approve.call(addressOs2RAvT, uint55aqzU, {from: accounts[4]});
		const uint256iO1HF5M = await REXUNIFINANCEAEhKhiz.transferableTokens.call(addressMKG0Ws0, {from: accounts[2]});
		const boolAKDIfTV = await REXUNIFINANCEAEhKhiz.transferFrom.call(addressy5Ftm67, addressMVppqpt, uintwN0AxQW, {from: accounts[2]});
		const uint256doEo02X = await REXUNIFINANCEAEhKhiz.balanceOf.call(addressRmGtSvE, {from: accounts[5]});
		const uint256GwMH3w = await REXUNIFINANCEAEhKhiz.balanceOf.call(addresszFcLTKD, {from: accounts[0]});

		assert.equal(booly31UNJ5, true)
		await expect(REXUNIFINANCEAEhKhiz.transferableTokens.call(addressMKG0Ws0, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})