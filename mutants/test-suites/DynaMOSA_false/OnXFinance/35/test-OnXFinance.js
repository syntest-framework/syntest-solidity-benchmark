const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringFKwgR9X = "STXVbhz4pKvxY8JoffkazmiPlE8thXTy4yysfaGR6IJ3KDgnRj9LH52W8IXQDfTfJSDGBQMCuqCG"
		const stringnQFPB5t = "0O66LHNECNAh73eSDwowGtUwQip12NBrKUbSHPHOdnSbwSp"
		const uintEYT7dA7 = BigInt("675")
		const OnXFinanceB2bAImW = await OnXFinance.new(stringFKwgR9X, stringnQFPB5t, uintEYT7dA7, {from: accounts[3]});
		const uintBWywP8x = BigInt("1767")
		const addresspM0Y4N = accounts[2]
		const addressU6Y0TZO = accounts[0]
		const addressKmQOL30 = accounts[4]
		const uintCn0dBmG = BigInt("1315")
		const addressdwXzxU = accounts[2]
		const uintv0nhjbt = BigInt("2")
		const addressZgAtmpf = accounts[5]
		const uintW79Fwn7 = BigInt("1900")
		const addressul0FagO = accounts[2]
		const addressli3R0L = accounts[0]
		const uintEAfGbP6 = await OnXFinanceB2bAImW.totalSupply.call({from: accounts[1]});
//		const boolFT3EtM = await OnXFinanceB2bAImW.transfer.call(addresspM0Y4N, uintBWywP8x, {from: accounts[0]});
//		const uintq8pKUbs = await OnXFinanceB2bAImW.allowance.call(addressKmQOL30, addressU6Y0TZO, {from: accounts[2]});
//		const boolBwb00y = await OnXFinanceB2bAImW.approveAndCall.call(addressdwXzxU, uintCn0dBmG, {from: accounts[1]});
//		const bool1frQG2 = await OnXFinanceB2bAImW.transfer.call(addressZgAtmpf, uintv0nhjbt, {from: accounts[5]});
//		const boolevtdE0w = await OnXFinanceB2bAImW.transferFrom.call(addressli3R0L, addressul0FagO, uintW79Fwn7, {from: accounts[2]});

		assert.equal(uintEAfGbP6, BigInt("675000000000000000000"))
		await expect(OnXFinanceB2bAImW.transfer.call(addresspM0Y4N, uintBWywP8x, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringChjpANG = "KgvmDxMOfjtgKBE5avQiAdrHph3"
		const stringD7ez0DI = "YJQYJzUVk6CwfnnWty9s3MLd3vMsH"
		const uinttVNjlp7 = BigInt("215")
		const OnXFinancezNhI03l = await OnXFinance.new(stringChjpANG, stringD7ez0DI, uinttVNjlp7, {from: accounts[0]});
		const uintvnqckf1 = BigInt("886")
		const addressYDUupAT = accounts[0]
		const uintumPo5kh = BigInt("421")
		const addressZNrVAO1 = accounts[3]
//		const booltRs2EUn = await OnXFinancezNhI03l.increaseAllowance.call(addressYDUupAT, uintvnqckf1, {from: accounts[2]});
//		const boolamxu8ab = await OnXFinancezNhI03l.transfer.call(addressZNrVAO1, uintumPo5kh, {from: accounts[2]});

		await expect(OnXFinancezNhI03l.increaseAllowance.call(addressYDUupAT, uintvnqckf1, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringa8exbcv = "AMyItGqWDxzr8XXtfST2YqMQg6BZOHjVtPMR2Ycn16bie1nyCNHzRmHW77JjN"
		const stringN7GRqZN = "GeBmEI4oSFXMyqCDJoKxdGrCOcBJ6s288Xx216Wq7jxl5Q4jrIzwDbcE14VXE"
		const uintOyIUVx = BigInt("1520")
		const OnXFinancegAJHxKv = await OnXFinance.new(stringa8exbcv, stringN7GRqZN, uintOyIUVx, {from: accounts[4]});
		const uintcwaLQYK = BigInt("524")
		const addressiwrSSGc = "0x0000000000000000000000000000000000000001"
		const uintsEokspP = BigInt("728")
		const addresszCbDT2Q = accounts[3]
		const uintGs02zL7 = BigInt("620")
		const addressFLZIZA = accounts[4]
		const uintoZFIPSY = BigInt("462")
		const addressOKPjr7x = "0x0000000000000000000000000000000000000001"
		const addressfWXvgvW = accounts[3]
//		const boolaM6WRLn = await OnXFinancegAJHxKv.approveAndCall.call(addressiwrSSGc, uintcwaLQYK, {from: accounts[3]});
//		const boolvHQKNS1 = await OnXFinancegAJHxKv.decreaseAllowance.call(addresszCbDT2Q, uintsEokspP, {from: accounts[3]});
//		const boolAX8CrOu = await OnXFinancegAJHxKv.transfer.call(addressFLZIZA, uintGs02zL7, {from: accounts[5]});
//		const boolitUCGZM = await OnXFinancegAJHxKv.approve.call(addressOKPjr7x, uintoZFIPSY, {from: accounts[1]});
//		const uintsYGtmU4 = await OnXFinancegAJHxKv.balanceOf.call(addressfWXvgvW, {from: accounts[4]});

		await expect(OnXFinancegAJHxKv.approveAndCall.call(addressiwrSSGc, uintcwaLQYK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringuGvDC8t = "ojSKozZ9mjKRQtca4Ip9nhLOjc3"
		const stringavP3ls5 = "vc12yHOXCSDDcFCh5NFCXOMTG8K1grufYJeql"
		const uintcTBmIAp = BigInt("178")
		const OnXFinanceTCPedV6 = await OnXFinance.new(stringuGvDC8t, stringavP3ls5, uintcTBmIAp, {from: accounts[1]});
		const uintQAXOZrM = BigInt("1")
		const addressvuugytP = accounts[1]
		const uintpz2dvqz = BigInt("523")
		const addressu61WJrJ = "0x0000000000000000000000000000000000000001"
		const addresshOUFuIM = "0x0000000000000000000000000000000000000001"
		const boolDKQfjnV = await OnXFinanceTCPedV6.approve.call(addressvuugytP, uintQAXOZrM, {from: accounts[5]});
		const uintR0y5PkV = await OnXFinanceTCPedV6.totalSupply.call({from: accounts[0]});
//		const boola90eKmI = await OnXFinanceTCPedV6.transferFrom.call(addresshOUFuIM, addressu61WJrJ, uintpz2dvqz, {from: accounts[2]});
//		const stringXcBHaQj = await OnXFinanceTCPedV6.symbol.call({from: accounts[5]});
//		const stringnp6s1qH = await OnXFinanceTCPedV6.name.call({from: accounts[4]});

		assert.equal(boolDKQfjnV, true)
		assert.equal(uintR0y5PkV, BigInt("178000000000000000000"))
		await expect(OnXFinanceTCPedV6.transferFrom.call(addresshOUFuIM, addressu61WJrJ, uintpz2dvqz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringFv2Vr9e = "jBc4VEIwCaoGyAuG5HLx27WKILIFJcOEDJu1JjA3ie8B5QItqm1"
		const stringb1E8Nt9 = "c1Ey3SeYaNVw3XnalyxxfjTnKWXjke1s3u16T2K5"
		const uinttLex82S = BigInt("183")
		const OnXFinancesLGJYBv = await OnXFinance.new(stringFv2Vr9e, stringb1E8Nt9, uinttLex82S, {from: "0x0000000000000000000000000000000000000001"});
		const addressLQJtm3r = accounts[1]
		const addressMukEFtW = accounts[0]
		const uintVbq3Hm2 = BigInt("420")
		const addresspqJubWu = accounts[1]
		const uintdHEa47R = BigInt("1863")
		const addressdRNtnhM = accounts[2]
		const uintRengt3a = BigInt("1840")
		const addressDQbdl6A = "0x0000000000000000000000000000000000000001"
		const uintMSlPCcs = BigInt("1643")
		const addressrahASj8 = accounts[1]
		const addressgv8erK = accounts[5]
		const uintfDVT9Q = await OnXFinancesLGJYBv.allowance.call(addressMukEFtW, addressLQJtm3r, {from: accounts[2]});
		const boolOrUm49Q = await OnXFinancesLGJYBv.approve.call(addresspqJubWu, uintVbq3Hm2, {from: accounts[3]});
		const boolBpAjurJ = await OnXFinancesLGJYBv.transfer.call(addressdRNtnhM, uintdHEa47R, {from: "0x0000000000000000000000000000000000000001"});
		const boolHr0BDKE = await OnXFinancesLGJYBv.transfer.call(addressDQbdl6A, uintRengt3a, {from: accounts[4]});
		const boolH1O1cH = await OnXFinancesLGJYBv.transferFrom.call(addressgv8erK, addressrahASj8, uintMSlPCcs, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for OnXFinance', async () => {
		const stringm6Xax0j = "BUDxQMX4FTGjbwvA7LQq5uOePoTxNjy9HncMRBapX15h19"
		const stringIEHZGB = "lAb46JJ8l2DlgY5b6p5qE9zxUnxGloQdnFUy5gLXabwNWn4zaT"
		const uintlGkiKcc = BigInt("552")
		const OnXFinanceS9n4gL7 = await OnXFinance.new(stringm6Xax0j, stringIEHZGB, uintlGkiKcc, {from: accounts[4]});
		const uintNeRqBGM = BigInt("1121")
		const addressuhfAu4O = accounts[4]
		const uintl3Hq5V8 = BigInt("1014")
		const addressTeaLXwV = accounts[0]
		const addresshZftngQ = accounts[4]
		const uintVc6J23e = BigInt("990")
		const addressjDvvrEP = accounts[1]
		const uintmMzLvK6 = BigInt("1988")
		const addressxrIGMWw = accounts[0]
		const uintjJ4ActG = BigInt("1139")
		const addresser5OxpA = accounts[4]
		const address35c3fu = accounts[3]
		const booldP8OBv = await OnXFinanceS9n4gL7.approve.call(addressuhfAu4O, uintNeRqBGM, {from: accounts[3]});
		const boolKEmoRe8 = await OnXFinanceS9n4gL7.transferFrom.call(addresshZftngQ, addressTeaLXwV, uintl3Hq5V8, {from: accounts[4]});
//		const boolLMyDral = await OnXFinanceS9n4gL7.approveAndCall.call(addressjDvvrEP, uintVc6J23e, {from: accounts[1]});
//		const boolbHu9a08 = await OnXFinanceS9n4gL7.approveAndCall.call(addressxrIGMWw, uintmMzLvK6, {from: accounts[3]});
//		const boolkxm6y7 = await OnXFinanceS9n4gL7.transferFrom.call(address35c3fu, addresser5OxpA, uintjJ4ActG, {from: accounts[3]});
//		const stringB27iV7W = await OnXFinanceS9n4gL7.name.call({from: accounts[3]});

		assert.equal(boolKEmoRe8, true)
		assert.equal(booldP8OBv, true)
		await expect(OnXFinanceS9n4gL7.approveAndCall.call(addressjDvvrEP, uintVc6J23e, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringzzhRvjp = "tdWwiSts1gsRnloUDZfMrJKOYgfiKZ11WNIrh5EjBUuXJQWTYL8"
		const stringBQOBxKN = "4peUzz786Kaz0YwrfB5fSKHMqMX5HTADDMdq8KUJ9xMQxyfKQDKSC7IX42Oaq5raKhDn6cTbKnu0NBU"
		const uintFGeNYlK = BigInt("1063")
		const OnXFinanceffviJED = await OnXFinance.new(stringzzhRvjp, stringBQOBxKN, uintFGeNYlK, {from: accounts[3]});
		const uintKSHWBy = BigInt("10")
		const addressVsIQo4b = accounts[2]
		const uintuAuNfL = BigInt("1186")
		const addressWstmKpd = accounts[0]
		const addressapZxrYk = accounts[4]
		const uintprQwT76 = BigInt("1751")
		const addressQY0gK0m = accounts[1]
		const addressjFTYjja = accounts[1]
		const uintEJQE7D5 = BigInt("189")
		const addressFnpoeaB = accounts[2]
		const uintIfvLC1g = BigInt("437")
		const addressB6PdXFV = accounts[4]
		const uintPGgVMOf = BigInt("209")
		const addressg2U9IdU = accounts[5]
		const addressu0T1eKg = accounts[4]
		const stringKv4Hzs5 = await OnXFinanceffviJED.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolEowGLT3 = await OnXFinanceffviJED.transfer.call(addressVsIQo4b, uintKSHWBy, {from: accounts[3]});
		const boolx1mdWJL = await OnXFinanceffviJED.approve.call(addressWstmKpd, uintuAuNfL, {from: "0x0000000000000000000000000000000000000001"});
//		const boolIvBQLpM = await OnXFinanceffviJED.transferownership.call(addressapZxrYk, {from: accounts[2]});
//		const boolHF9GFN = await OnXFinanceffviJED.approveAndCall.call(addressQY0gK0m, uintprQwT76, {from: "0x0000000000000000000000000000000000000001"});
//		const uintx3pP0vx = await OnXFinanceffviJED.totalSupply.call({from: accounts[1]});
//		const uintAGGL4xz = await OnXFinanceffviJED.balanceOf.call(addressjFTYjja, {from: accounts[2]});
//		const boolqFuxkei = await OnXFinanceffviJED.transfer.call(addressFnpoeaB, uintEJQE7D5, {from: accounts[2]});
//		const boolnQNZk6U = await OnXFinanceffviJED.increaseAllowance.call(addressB6PdXFV, uintIfvLC1g, {from: accounts[2]});
//		const boolmWgFJWn = await OnXFinanceffviJED.transferFrom.call(addressu0T1eKg, addressg2U9IdU, uintPGgVMOf, {from: accounts[4]});

		assert.equal(boolEowGLT3, true)
		assert.equal(boolx1mdWJL, true)
		assert.equal(stringKv4Hzs5, "4peUzz786Kaz0YwrfB5fSKHMqMX5HTADDMdq8KUJ9xMQxyfKQDKSC7IX42Oaq5raKhDn6cTbKnu0NBU")
		await expect(OnXFinanceffviJED.transferownership.call(addressapZxrYk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringzzhRvjp = "tdWwiSts1gsRnloUDZfMrJKOYgfiKZ11WNIrh5EjBUuXJQWTYL8"
		const stringBQOBxKN = "4peUzz786Kaz0YwrfB5fSKHMqMX5HTADDMdq8KUJ9xMQxyfKQDKSC7IX42Oaq5raKhDn6cTbKnu0NBU"
		const uintz8Tu3vB = BigInt("1063")
		const OnXFinanceffviJED = await OnXFinance.new(stringzzhRvjp, stringBQOBxKN, uintz8Tu3vB, {from: accounts[3]});
		const uintpdyWB4b = BigInt("0")
		const addressQNxz3g9 = accounts[2]
		const uintditDlxS = BigInt("117")
		const addresss2THCr2 = accounts[2]
		const addressBegm8Mq = accounts[2]
		const uinthNulNwe = BigInt("209")
		const addressCs6wJS = accounts[5]
		const addressReUvE89 = accounts[4]
		const stringKv4Hzs5 = await OnXFinanceffviJED.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolEowGLT3 = await OnXFinanceffviJED.transfer.call(addressQNxz3g9, uintpdyWB4b, {from: accounts[3]});
		const boolHoCVRw = await OnXFinanceffviJED.approve.call(addresss2THCr2, uintditDlxS, {from: accounts[4]});
		const uintAGGL4xz = await OnXFinanceffviJED.balanceOf.call(addressBegm8Mq, {from: accounts[2]});
//		const boolmWgFJWn = await OnXFinanceffviJED.transferFrom.call(addressReUvE89, addressCs6wJS, uinthNulNwe, {from: accounts[4]});

		assert.equal(boolEowGLT3, true)
		assert.equal(boolHoCVRw, true)
		assert.equal(stringKv4Hzs5, "4peUzz786Kaz0YwrfB5fSKHMqMX5HTADDMdq8KUJ9xMQxyfKQDKSC7IX42Oaq5raKhDn6cTbKnu0NBU")
		assert.equal(uintAGGL4xz, BigInt("0"))
		await expect(OnXFinanceffviJED.transferFrom.call(addressReUvE89, addressCs6wJS, uinthNulNwe, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const string9fJwXo = "YBTc1igyAjQZLAlEl45QqwrxShqPJDu"
		const stringuzESebW = "GEyyWo9o7Yhljbi6PV1xaPcgp9Ep74Uxbz0HKofPg9GAX"
		const uintE9nruNC = BigInt("154")
		const OnXFinanceN0s1BO9 = await OnXFinance.new(string9fJwXo, stringuzESebW, uintE9nruNC, {from: accounts[0]});
		const uintSh7f7tT = BigInt("245")
		const addressA722io = accounts[1]
		const addressgaxgNmF = accounts[1]
		const addressZsu5FQR = accounts[0]
		const uintP7MFTMr = BigInt("1999")
		const addressPsveme5 = accounts[5]
		const addressMsrJ2fy = accounts[1]
		const uintEk8esRc = BigInt("203")
		const addressKacwTTb = accounts[0]
		const uintR5LTcl6 = BigInt("975")
		const addresshQV8s1w = accounts[0]
		const addressJ1Hzdz2 = accounts[1]
		const booltL5sdWx = await OnXFinanceN0s1BO9.approveAndCall.call(addressA722io, uintSh7f7tT, {from: accounts[0]});
		const uintadRzbna = await OnXFinanceN0s1BO9.allowance.call(addressZsu5FQR, addressgaxgNmF, {from: accounts[0]});
//		const boolKPP6vig = await OnXFinanceN0s1BO9.transferFrom.call(addressMsrJ2fy, addressPsveme5, uintP7MFTMr, {from: accounts[1]});
//		const stringQgbZLfl = await OnXFinanceN0s1BO9.symbol.call({from: accounts[0]});
//		const boolW1VBhb4 = await OnXFinanceN0s1BO9.increaseAllowance.call(addressKacwTTb, uintEk8esRc, {from: accounts[3]});
//		const boolsmuZsFM = await OnXFinanceN0s1BO9.transferFrom.call(addressJ1Hzdz2, addresshQV8s1w, uintR5LTcl6, {from: accounts[1]});

		assert.equal(booltL5sdWx, true)
		assert.equal(uintadRzbna, BigInt("0"))
		await expect(OnXFinanceN0s1BO9.transferFrom.call(addressMsrJ2fy, addressPsveme5, uintP7MFTMr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})