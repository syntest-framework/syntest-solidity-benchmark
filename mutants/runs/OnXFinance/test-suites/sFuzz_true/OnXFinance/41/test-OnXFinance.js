const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringzfa7LeD = "6CL7erLxD87Ny4xcrszfBaqHYrqGWVc8nwtOP4CE3JoYzhIyouTe5qVqrLWu71VxN2rlXMkxz"
		const string7ktfaT = "5kE"
		const uintAeWPPMQ = BigInt("223")
		const OnXFinanceYGjqWqi = await OnXFinance.new(stringzfa7LeD, string7ktfaT, uintAeWPPMQ, {from: accounts[2]});
		const uintRH1aU6l = BigInt("961")
		const addressLqQ4uox = accounts[2]
		const uintKrpyKp = BigInt("1111")
		const addressCqe4kk0 = accounts[2]
		const boolYwn9WgW = await OnXFinanceYGjqWqi.transfer.call(addressLqQ4uox, uintRH1aU6l, {from: "0x0000000000000000000000000000000000000001"});
		const boolL4gutJi = await OnXFinanceYGjqWqi.approve.call(addressCqe4kk0, uintKrpyKp, {from: accounts[0]});

		await expect(OnXFinanceYGjqWqi.transfer.call(addressLqQ4uox, uintRH1aU6l, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringMK8MTtR = "Kov8Aofw6DmhPjQyAWglQZGMkYDdYOwap1NXLf4JHexxu4NlJuFxVRBkU6iODAO"
		const stringeXEk33 = "xjtuYp1X8SD7eUegrhauK5S8wwFxq6l7PmQywwud7TPcYeiiNV9yf7WwQfjeblXjN41lNRRycdfZC"
		const uintbZuTcRR = BigInt("145")
		const OnXFinancenV7gjfG = await OnXFinance.new(stringMK8MTtR, stringeXEk33, uintbZuTcRR, {from: accounts[5]});
		const uintLXRwqBQ = BigInt("1326")
		const addressLaOLbCO = accounts[2]
		const addressORS2nr = accounts[0]
		const addresskYk6vPO = accounts[0]
		const boolCpMh90r = await OnXFinancenV7gjfG.increaseAllowance.call(addressLaOLbCO, uintLXRwqBQ, {from: accounts[4]});
		const uintDeDI4X7 = await OnXFinancenV7gjfG.allowance.call(addresskYk6vPO, addressORS2nr, {from: accounts[3]});
		const uint8WxJ4NYO = await OnXFinancenV7gjfG.decimals.call({from: accounts[4]});

		await expect(OnXFinancenV7gjfG.increaseAllowance.call(addressLaOLbCO, uintLXRwqBQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringyAWwfC3 = "5bgjf56BSYAAFlp05KY1opLVuDg7LhPp1RGhCB1K0k2a1Gd7UOv7MEAOb9XsnDoQLiR0"
		const stringZUoG7Z7 = "56D8OuKWpj286IN0kxp4WDIARPl8G0KNUzgJcwCbHFkbA9bwUvKT3TxoUwac1vP6Ogmvo9k"
		const uintQQ6dj4J = BigInt("721")
		const OnXFinanceuB6sX5Y = await OnXFinance.new(stringyAWwfC3, stringZUoG7Z7, uintQQ6dj4J, {from: accounts[0]});
		const addressBhhDcm = accounts[3]
		const addressaRYW6F = accounts[4]
		const uintgPq6cYh = BigInt("951")
		const addressET1oO0M = accounts[3]
		const addressCdYxnM8 = accounts[1]
		const uintxf48wss = BigInt("281")
		const addressAJLwnTX = accounts[1]
		const uintkl98qut = await OnXFinanceuB6sX5Y.allowance.call(addressaRYW6F, addressBhhDcm, {from: "0x0000000000000000000000000000000000000001"});
		const boolJRomEC = await OnXFinanceuB6sX5Y.approveAndCall.call(addressET1oO0M, uintgPq6cYh, {from: accounts[5]});
		const uintAACPNcu = await OnXFinanceuB6sX5Y.balanceOf.call(addressCdYxnM8, {from: accounts[0]});
		const boolWt7tLtK = await OnXFinanceuB6sX5Y.approve.call(addressAJLwnTX, uintxf48wss, {from: accounts[4]});

		assert.equal(uintkl98qut, BigInt("0"))
		await expect(OnXFinanceuB6sX5Y.approveAndCall.call(addressET1oO0M, uintgPq6cYh, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringJY57PbP = "MiyHzAnfKC3xIfRXQ2nzKgv9ROttHYaYT1Kst9EtoMSCOUytR8tk"
		const stringQnS3n6I = "j8ICEVnyxQlps4O3sS2rOS6taM3qgZ5Fpug"
		const uintGFRvwtf = BigInt("48")
		const OnXFinanceaNWCONI = await OnXFinance.new(stringJY57PbP, stringQnS3n6I, uintGFRvwtf, {from: accounts[4]});
		const addressrSNGr6d = accounts[5]
		const uintytW9PCk = BigInt("1664")
		const addressbYUk982 = accounts[5]
		const uintCJdPRYK = BigInt("411")
		const addressfPb4QB = "0x0000000000000000000000000000000000000001"
		const boolPUx9gsJ = await OnXFinanceaNWCONI.transferownership.call(addressrSNGr6d, {from: accounts[2]});
		const boolRX1Pep8 = await OnXFinanceaNWCONI.transfer.call(addressbYUk982, uintytW9PCk, {from: accounts[2]});
		const boolvgXS03R = await OnXFinanceaNWCONI.increaseAllowance.call(addressfPb4QB, uintCJdPRYK, {from: accounts[3]});

		await expect(OnXFinanceaNWCONI.transferownership.call(addressrSNGr6d, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringRfLOkqU = "EuGkfVvWmdrS2lpOHj8JTVxITtkf2veXw2dQFEimgfs3k4fcFeYuEoVXvlMyPemaCDvXC3b5Be5eAa1QKf"
		const stringZ4L7XGi = "G8CLwhX7hImYemDamVwu2IBNnVA8Fnu8AENBU5QPa"
		const uintThnom28 = BigInt("1821")
		const OnXFinancexIdxIav = await OnXFinance.new(stringRfLOkqU, stringZ4L7XGi, uintThnom28, {from: accounts[3]});
		const uintPTnmXcf = BigInt("1278")
		const addresstUsNghf = accounts[3]
		const uintFSeGLlD = BigInt("720")
		const addressQPYjfda = accounts[4]
		const booliQuxZzz = await OnXFinancexIdxIav.approve.call(addresstUsNghf, uintPTnmXcf, {from: accounts[5]});
		const stringf9oWd4T = await OnXFinancexIdxIav.symbol.call({from: accounts[4]});
		const stringoHHAcR = await OnXFinancexIdxIav.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uintW4vE9MR = await OnXFinancexIdxIav.totalSupply.call({from: accounts[0]});
		const bools3v6HZ7 = await OnXFinancexIdxIav.increaseAllowance.call(addressQPYjfda, uintFSeGLlD, {from: accounts[3]});

		assert.equal(booliQuxZzz, true)
		assert.equal(stringf9oWd4T, "G8CLwhX7hImYemDamVwu2IBNnVA8Fnu8AENBU5QPa")
		assert.equal(stringoHHAcR, "G8CLwhX7hImYemDamVwu2IBNnVA8Fnu8AENBU5QPa")
		assert.equal(uintW4vE9MR, BigInt("1821000000000000000000"))
		await expect(OnXFinancexIdxIav.increaseAllowance.call(addressQPYjfda, uintFSeGLlD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringUSavooj = "ytM9Srsyze57Wrp4cu8MLXbR3GlXjBTvjfMTDy7cJtsuJ6wsUKOj8"
		const stringWp8rMHc = ""
		const uintIebUSH = BigInt("34")
		const OnXFinanceqjigZyq = await OnXFinance.new(stringUSavooj, stringWp8rMHc, uintIebUSH, {from: "0x0000000000000000000000000000000000000001"});
		const addressknDWOUG = accounts[2]
		const addressoN8D2Bt = accounts[3]
		const uintZ72fGy = BigInt("840")
		const addressVOFP8ti = accounts[3]
		const addressOp5XCDS = accounts[3]
		const uintZIGO9W5 = await OnXFinanceqjigZyq.allowance.call(addressoN8D2Bt, addressknDWOUG, {from: accounts[3]});
		const boolI4CdpVm = await OnXFinanceqjigZyq.approveAndCall.call(addressVOFP8ti, uintZ72fGy, {from: accounts[2]});
		const uintHPt0kcp = await OnXFinanceqjigZyq.balanceOf.call(addressOp5XCDS, {from: accounts[2]});
	});

	it('test for OnXFinance', async () => {
		const stringzJil29F = "KkEOEmMQaFyDEcF2oqIk6ekm07rFXOd2j0oYHs"
		const stringGXPVUFr = "QHdaxxYfme"
		const uinteKtllyq = BigInt("1451")
		const OnXFinancefl6GFKl = await OnXFinance.new(stringzJil29F, stringGXPVUFr, uinteKtllyq, {from: accounts[0]});
		const uintC8m3UdY = BigInt("1206")
		const addresshQbeSew = "0x0000000000000000000000000000000000000001"
		const addressF2qLVV = accounts[2]
		const addressjQGALlG = accounts[5]
		const uintU3kH1wb = BigInt("642")
		const addressbmju49Z = accounts[0]
		const addressuZnuKrh = accounts[0]
		const boolgDeAWjT = await OnXFinancefl6GFKl.transferFrom.call(addressF2qLVV, addresshQbeSew, uintC8m3UdY, {from: accounts[0]});
		const uintOqiv9b = await OnXFinancefl6GFKl.balanceOf.call(addressjQGALlG, {from: accounts[1]});
		const uint8l5hyob2 = await OnXFinancefl6GFKl.decimals.call({from: accounts[4]});
		const uintAkJTSJ0 = await OnXFinancefl6GFKl.totalSupply.call({from: accounts[4]});
		const boolg0uGXJe = await OnXFinancefl6GFKl.transferFrom.call(addressuZnuKrh, addressbmju49Z, uintU3kH1wb, {from: accounts[3]});

		await expect(OnXFinancefl6GFKl.transferFrom.call(addressF2qLVV, addresshQbeSew, uintC8m3UdY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringyAWwfC3 = "5bgjf56BSYAAFlp05KY1opLVuDg7LhPp1RGhCB1K0k2a1Gd7UOv7MEAOb9XsnDoQLiR0"
		const stringZUoG7Z7 = "56D8OuKWpj286IN0kxp4WDIARPl8G0KNUzgJcwCbHFkbA9bwUvKT3TxoUwac1vP6Ogmvo9k"
		const uintxqwT0W = BigInt("721")
		const OnXFinanceuB6sX5Y = await OnXFinance.new(stringyAWwfC3, stringZUoG7Z7, uintxqwT0W, {from: accounts[0]});
		const addressWpTWLuL = accounts[3]
		const addressPGm9srU = accounts[4]
		const uintPL825r4 = BigInt("773")
		const addressW9GBzG = accounts[4]
		const uintCPHSW3v = BigInt("951")
		const addresswtT5D9K = accounts[3]
		const addressMpDizv2 = accounts[1]
		const uintDTMoMmJ = BigInt("281")
		const addressOxpJSNm = accounts[1]
		const uintkl98qut = await OnXFinanceuB6sX5Y.allowance.call(addressPGm9srU, addressWpTWLuL, {from: "0x0000000000000000000000000000000000000001"});
		const boolyYh2rc = await OnXFinanceuB6sX5Y.transfer.call(addressW9GBzG, uintPL825r4, {from: accounts[4]});
		const stringsBWsE3k = await OnXFinanceuB6sX5Y.name.call({from: accounts[4]});
		const boolJRomEC = await OnXFinanceuB6sX5Y.approveAndCall.call(addresswtT5D9K, uintCPHSW3v, {from: accounts[5]});
		const uintAACPNcu = await OnXFinanceuB6sX5Y.balanceOf.call(addressMpDizv2, {from: accounts[0]});
		const boolWt7tLtK = await OnXFinanceuB6sX5Y.approve.call(addressOxpJSNm, uintDTMoMmJ, {from: accounts[4]});

		assert.equal(uintkl98qut, BigInt("0"))
		await expect(OnXFinanceuB6sX5Y.transfer.call(addressW9GBzG, uintPL825r4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringzIOsX3y = "WR3eADxZUqq5aSqmjcPSAqnI4YmauA20nC2qdr0RwmeWmxSLAAN435Tww3JiokeXN"
		const stringhlVP3Jz = "1GUjFxUS1NDsRTeietDuRQpucDaBQB0C2OO5FjP8MItw7R5zg2nGMdAGSTdra"
		const uintLyUzb2R = BigInt("1656")
		const OnXFinance4bcVzI = await OnXFinance.new(stringzIOsX3y, stringhlVP3Jz, uintLyUzb2R, {from: accounts[2]});
		const uintOf56v0y = BigInt("1712")
		const address5PHSeJ = accounts[1]
		const addressT7KWIMh = accounts[2]
		const addressyyQB0Il = accounts[0]
		const addressHbNsCIb = accounts[5]
		const booloXDBUYD = await OnXFinance4bcVzI.approve.call(address5PHSeJ, uintOf56v0y, {from: accounts[0]});
		const boolFljr1Q4 = await OnXFinance4bcVzI.transferownership.call(addressT7KWIMh, {from: accounts[2]});
		const uintGDyVCko = await OnXFinance4bcVzI.balanceOf.call(addressyyQB0Il, {from: accounts[1]});
		const uintnV9wK8O = await OnXFinance4bcVzI.balanceOf.call(addressHbNsCIb, {from: accounts[0]});

		assert.equal(boolFljr1Q4, true)
		assert.equal(booloXDBUYD, true)
		assert.equal(uintGDyVCko, BigInt("0"))
		assert.equal(uintnV9wK8O, BigInt("0"))
	});

	it('test for OnXFinance', async () => {
		const stringzfa7LeD = "6CL7erLxD87Ny4xcrszfBaqHYrqGWVc8nwtOP4CE3JoYzhIyouTe5qVqrLWu71VxN2rlXMkxz"
		const string7ktfaT = "5kE"
		const uintSyYN38e = BigInt("223")
		const OnXFinanceYGjqWqi = await OnXFinance.new(stringzfa7LeD, string7ktfaT, uintSyYN38e, {from: accounts[2]});
		const uintxUYd7w = BigInt("115")
		const addressrmVkFUI = accounts[3]
		const uintgpaoWc6 = BigInt("1693")
		const addressGSkCi3 = accounts[1]
		const uinti4Wo30 = BigInt("884")
		const addressoSF02iP = "0x0000000000000000000000000000000000000001"
		const uintMCcvAPo = BigInt("60")
		const addressPsTGMv0 = accounts[6]
		const addressb2Q1Ur = accounts[3]
		const boolM54hFUC = await OnXFinanceYGjqWqi.approve.call(addressrmVkFUI, uintxUYd7w, {from: accounts[5]});
		const booloCak4Jw = await OnXFinanceYGjqWqi.approve.call(addressGSkCi3, uintgpaoWc6, {from: accounts[0]});
		const boolnibl6xv = await OnXFinanceYGjqWqi.approveAndCall.call(addressoSF02iP, uinti4Wo30, {from: accounts[2]});
		const bool2kRuPg = await OnXFinanceYGjqWqi.transferFrom.call(addressb2Q1Ur, addressPsTGMv0, uintMCcvAPo, {from: accounts[4]});
		const stringr8fIgQQ = await OnXFinanceYGjqWqi.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolM54hFUC, true)
		assert.equal(boolnibl6xv, true)
		assert.equal(booloCak4Jw, true)
		await expect(OnXFinanceYGjqWqi.transferFrom.call(addressb2Q1Ur, addressPsTGMv0, uintMCcvAPo, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringzfa7LeD = "6CL7erLxD87Ny4xcrszfBaqHYrqGWVc8nwtOP4CE3JoYzhIyouTe5qVqrLWu71VxN2rlXMkxz"
		const string7ktfaT = "5kE"
		const uintKQWUOmS = BigInt("223")
		const OnXFinanceYGjqWqi = await OnXFinance.new(stringzfa7LeD, string7ktfaT, uintKQWUOmS, {from: accounts[2]});
		const addressoXfiWg7 = accounts[1]
		const uintoNcldS5 = BigInt("0")
		const addressP1zvibg = accounts[2]
		const uintqVZglgC = BigInt("1285")
		const address0LORby = accounts[5]
		const stringd6dPZIv = await OnXFinanceYGjqWqi.symbol.call({from: accounts[4]});
		const uintnD0r3xI = await OnXFinanceYGjqWqi.balanceOf.call(addressoXfiWg7, {from: accounts[4]});
		const boolxI0JSHL = await OnXFinanceYGjqWqi.transfer.call(addressP1zvibg, uintoNcldS5, {from: accounts[1]});
		const uint8kH5ob8r = await OnXFinanceYGjqWqi.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolf6wNcL9 = await OnXFinanceYGjqWqi.transfer.call(address0LORby, uintqVZglgC, {from: accounts[0]});

		assert.equal(boolxI0JSHL, true)
		assert.equal(stringd6dPZIv, "5kE")
		assert.equal(uint8kH5ob8r, BigInt("18"))
		assert.equal(uintnD0r3xI, BigInt("0"))
		await expect(OnXFinanceYGjqWqi.transfer.call(address0LORby, uintqVZglgC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringzfa7LeD = "6CL7erLxD87Ny4xcrszfBaqHYrqGWVc8nwtOP4CE3JoYzhIyouTe5qVqrLWu71VxN2rlXMkxz"
		const string7ktfaT = "5kE"
		const uintzlVfH7L = BigInt("223")
		const OnXFinanceYGjqWqi = await OnXFinance.new(stringzfa7LeD, string7ktfaT, uintzlVfH7L, {from: accounts[2]});
		const uintO4U0KtP = BigInt("0")
		const addressegkaVDQ = accounts[0]
		const uint8WPeBMhg = await OnXFinanceYGjqWqi.decimals.call({from: accounts[1]});
		const uint8B8GqMuR = await OnXFinanceYGjqWqi.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolSDAtZcm = await OnXFinanceYGjqWqi.approveAndCall.call(addressegkaVDQ, uintO4U0KtP, {from: accounts[2]});

		assert.equal(boolSDAtZcm, true)
		assert.equal(uint8B8GqMuR, BigInt("18"))
		assert.equal(uint8WPeBMhg, BigInt("18"))
	});
})