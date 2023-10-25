const OnXFinance = artifacts.require("OnXFinance");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('OnXFinance', (accounts) => {
	it('test for OnXFinance', async () => {
		const stringnYiyff0 = "LBTYhySOv5KbepX"
		const stringixp4Sn2 = "vaXmhbupNgI9fyGe5AJnv3LDAZIf8yNyfz8O5rqJxUU"
		const uintUAOqcSo = BigInt("204")
		const OnXFinanceKHtXsVl = await OnXFinance.new(stringnYiyff0, stringixp4Sn2, uintUAOqcSo, {from: accounts[0]});
		const uintX4c9fn = BigInt("776")
		const address3O1xzk = "0x0000000000000000000000000000000000000001"
		const addresswquBFy7 = accounts[1]
		const uintTHZ82Az = BigInt("1519")
		const addressyCXMuCN = accounts[1]
		const boolk7qiDlN = await OnXFinanceKHtXsVl.approveAndCall.call(address3O1xzk, uintX4c9fn, {from: accounts[0]});
		const uint8xa7Mlzg = await OnXFinanceKHtXsVl.decimals.call({from: accounts[0]});
		const uintPhGnifI = await OnXFinanceKHtXsVl.balanceOf.call(addresswquBFy7, {from: accounts[3]});
		const stringcifOCEu = await OnXFinanceKHtXsVl.symbol.call({from: accounts[0]});
		const boolffh91IY = await OnXFinanceKHtXsVl.increaseAllowance.call(addressyCXMuCN, uintTHZ82Az, {from: accounts[3]});

		assert.equal(boolk7qiDlN, true)
		assert.equal(stringcifOCEu, "vaXmhbupNgI9fyGe5AJnv3LDAZIf8yNyfz8O5rqJxUU")
		assert.equal(uint8xa7Mlzg, BigInt("18"))
		assert.equal(uintPhGnifI, BigInt("0"))
		await expect(OnXFinanceKHtXsVl.increaseAllowance.call(addressyCXMuCN, uintTHZ82Az, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringFb8Ua5W = "1NhtnwjvU7oapHCKAXT274wEOyo169PzmHOAqtTJAXarb4L6aGbaCfNafuULgoV"
		const stringyA4bF1i = "89MnVePKvvSXcLdoxj49UWUqEBunKT4yWDf6IqvdOXmtcl7uJRW"
		const uintx8I3sZO = BigInt("1804")
		const OnXFinanceVykkvTz = await OnXFinance.new(stringFb8Ua5W, stringyA4bF1i, uintx8I3sZO, {from: "0x0000000000000000000000000000000000000001"});
		const uintYZRxcjy = BigInt("1642")
		const addresstvltQsg = accounts[3]
		const uintJnwm7Si = BigInt("90")
		const addresstV2GFab = accounts[0]
		const boolbyC53dV = await OnXFinanceVykkvTz.increaseAllowance.call(addresstvltQsg, uintYZRxcjy, {from: accounts[0]});
		const stringfdkk6Lg = await OnXFinanceVykkvTz.symbol.call({from: accounts[0]});
		const boolgbFT1q5 = await OnXFinanceVykkvTz.approve.call(addresstV2GFab, uintJnwm7Si, {from: accounts[4]});
		const stringDlH0o0F = await OnXFinanceVykkvTz.name.call({from: accounts[4]});
	});

	it('test for OnXFinance', async () => {
		const stringQRa1iG0 = "J1liX"
		const stringpTWCWUg = "s1Z6nO41Yij1OVCvLihAh5Qga0QVvbd4eAgn2tse"
		const uintnNP0QD0 = BigInt("1405")
		const OnXFinanceUcQlQrM = await OnXFinance.new(stringQRa1iG0, stringpTWCWUg, uintnNP0QD0, {from: accounts[0]});
		const addressOv8McRe = accounts[3]
		const uint8JTdpS = BigInt("1302")
		const addresspdUx3iW = accounts[4]
		const uintizrLRh = BigInt("2006")
		const addressDJWdl7v = accounts[4]
		const addresscJIyq52 = accounts[4]
		const stringnCLj18f = await OnXFinanceUcQlQrM.symbol.call({from: accounts[0]});
		const boolCLUDiTl = await OnXFinanceUcQlQrM.transferownership.call(addressOv8McRe, {from: accounts[1]});
		const boolMuzhldw = await OnXFinanceUcQlQrM.transfer.call(addresspdUx3iW, uint8JTdpS, {from: accounts[0]});
		const boolQbQA3FT = await OnXFinanceUcQlQrM.approveAndCall.call(addressDJWdl7v, uintizrLRh, {from: accounts[0]});
		const uintaIvyNna = await OnXFinanceUcQlQrM.balanceOf.call(addresscJIyq52, {from: accounts[3]});

		assert.equal(stringnCLj18f, "s1Z6nO41Yij1OVCvLihAh5Qga0QVvbd4eAgn2tse")
		await expect(OnXFinanceUcQlQrM.transferownership.call(addressOv8McRe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringYkDKP6U = "b78n7WjDpBENrFkUwK4GFvh9VxTW"
		const stringIjIrumk = "zTEBKQbJC0Sc2DBTkGluUwXJjsjpfRZColkbmKkBxAtfEOqx1NMScrmd6fOO"
		const uintePGLNUr = BigInt("76")
		const OnXFinanceQxUJWg4 = await OnXFinance.new(stringYkDKP6U, stringIjIrumk, uintePGLNUr, {from: accounts[0]});
		const uintsTvwXV0 = BigInt("1798")
		const addressQpjWBEj = accounts[0]
		const addresshNQpYN5 = accounts[1]
		const addressqmoy3hh = accounts[4]
		const stringLd1VtIr = await OnXFinanceQxUJWg4.name.call({from: accounts[4]});
		const boolpHMBPyo = await OnXFinanceQxUJWg4.transferFrom.call(addresshNQpYN5, addressQpjWBEj, uintsTvwXV0, {from: accounts[3]});
		const uintArvJ79 = await OnXFinanceQxUJWg4.balanceOf.call(addressqmoy3hh, {from: accounts[0]});
		const stringmCIQHpr = await OnXFinanceQxUJWg4.name.call({from: accounts[2]});

		assert.equal(stringLd1VtIr, "b78n7WjDpBENrFkUwK4GFvh9VxTW")
		await expect(OnXFinanceQxUJWg4.transferFrom.call(addresshNQpYN5, addressQpjWBEj, uintsTvwXV0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringkJsPda1 = "J4fNdAl5HjqNGoAR2uIwymXqjj5BzkRoIz9iRtps0coVGqNxokY7mcQOW3DssPoPcuqPabaXlUm8grQ3WwynEaEICT"
		const stringMf3eYIA = "XZaX7m9DiiVtTLXSdPIqqv"
		const uintft27ENN = BigInt("82")
		const OnXFinanceQf1d7yd = await OnXFinance.new(stringkJsPda1, stringMf3eYIA, uintft27ENN, {from: accounts[2]});
		const uintPYvp5Ts = BigInt("799")
		const addressYPo1lOH = accounts[2]
		const uinthrcIloW = BigInt("1338")
		const addressqPMcvK = accounts[4]
		const uintnkeEwQ0 = BigInt("1151")
		const addressxa7G9cm = accounts[4]
		const addressKbJvE7h = accounts[1]
		const boolEetyPmJ = await OnXFinanceQf1d7yd.transfer.call(addressYPo1lOH, uintPYvp5Ts, {from: accounts[5]});
		const boolt0hZa8a = await OnXFinanceQf1d7yd.transfer.call(addressqPMcvK, uinthrcIloW, {from: accounts[5]});
		const boolwKopZ20 = await OnXFinanceQf1d7yd.transferFrom.call(addressKbJvE7h, addressxa7G9cm, uintnkeEwQ0, {from: accounts[4]});

		await expect(OnXFinanceQf1d7yd.transfer.call(addressYPo1lOH, uintPYvp5Ts, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringkJsPda1 = "J4fNdAl5HjqNGoAR2uIwymXqjj5BzkRoIz9iRtps0coVGqNxokY7mcQOW3DssPoPcuqPabaXlUm8grQ3WwynEaEICT"
		const stringMf3eYIA = "XZaX7m9DiiVtTLXSdPIqqv"
		const uintVXIcDCG = BigInt("82")
		const OnXFinanceQf1d7yd = await OnXFinance.new(stringkJsPda1, stringMf3eYIA, uintVXIcDCG, {from: accounts[2]});
		const uintidw6HRe = BigInt("1815")
		const addressRRGxr0r = accounts[2]
		const uintgSLIRE1 = BigInt("799")
		const addressD2LzWgC = accounts[2]
		const uintibtPC4b = BigInt("1338")
		const addressVWG0vT = accounts[4]
		const uintzJTzweB = BigInt("1151")
		const addressCP1kaHq = accounts[4]
		const addressBzBJ5HB = accounts[1]
		const boolrFOxfxp = await OnXFinanceQf1d7yd.approve.call(addressRRGxr0r, uintidw6HRe, {from: "0x0000000000000000000000000000000000000001"});
		const boolEetyPmJ = await OnXFinanceQf1d7yd.transfer.call(addressD2LzWgC, uintgSLIRE1, {from: accounts[5]});
		const boolt0hZa8a = await OnXFinanceQf1d7yd.transfer.call(addressVWG0vT, uintibtPC4b, {from: accounts[5]});
		const boolwKopZ20 = await OnXFinanceQf1d7yd.transferFrom.call(addressBzBJ5HB, addressCP1kaHq, uintzJTzweB, {from: accounts[4]});

		assert.equal(boolrFOxfxp, true)
		await expect(OnXFinanceQf1d7yd.transfer.call(addressD2LzWgC, uintgSLIRE1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringfTxBGF2 = "c2FXLXeVbXGRGwMiu63FAlkbp5FJdlWWOqTWoDXeNqz9dobt"
		const stringjX6qC0u = "B7SsXNhJMLmtLb4e9"
		const uintDzgv7Dy = BigInt("61")
		const OnXFinancePn9cLSJ = await OnXFinance.new(stringfTxBGF2, stringjX6qC0u, uintDzgv7Dy, {from: accounts[3]});
		const uintVSkd1g4 = BigInt("721")
		const addressypwbFsE = accounts[2]
		const uintXPWLngl = BigInt("992")
		const addressQsFQc9L = accounts[1]
		const uintc1lPHk6 = BigInt("214")
		const addressCFZkNb7 = accounts[3]
		const addressgHiDLX = accounts[0]
		const addressLtD042 = accounts[3]
		const addressqxubc4A = accounts[4]
		const booltyVNeeF = await OnXFinancePn9cLSJ.approveAndCall.call(addressypwbFsE, uintVSkd1g4, {from: accounts[3]});
		const boolXq9UTg = await OnXFinancePn9cLSJ.transfer.call(addressQsFQc9L, uintXPWLngl, {from: accounts[5]});
		const boolLXvXCLy = await OnXFinancePn9cLSJ.increaseAllowance.call(addressCFZkNb7, uintc1lPHk6, {from: accounts[2]});
		const uintneeVnlX = await OnXFinancePn9cLSJ.balanceOf.call(addressgHiDLX, {from: accounts[0]});
		const uintOI6k1IO = await OnXFinancePn9cLSJ.allowance.call(addressqxubc4A, addressLtD042, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booltyVNeeF, true)
		await expect(OnXFinancePn9cLSJ.transfer.call(addressQsFQc9L, uintXPWLngl, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringGhhROjP = "e2AvUrsVEyUYoeA7fhlKpjVk45e4D7h1"
		const stringeoLAvo = "w19k5FleBCeQ5koDoV3P8cwx4WptUb0rlAg71JaA"
		const uintYJf4HEG = BigInt("1647")
		const OnXFinanceoaEgqJO = await OnXFinance.new(stringGhhROjP, stringeoLAvo, uintYJf4HEG, {from: accounts[3]});
		const addressk5OHpbc = accounts[4]
		const uintTUOQXqA = BigInt("581")
		const addressfMNE0eU = accounts[3]
		const addressFTJGdD1 = accounts[2]
		const addressDJyotGf = accounts[3]
		const addressOq2OnC = accounts[0]
		const boolfpUdCL = await OnXFinanceoaEgqJO.transferownership.call(addressk5OHpbc, {from: accounts[3]});
		const boolyBIgnzk = await OnXFinanceoaEgqJO.transferFrom.call(addressFTJGdD1, addressfMNE0eU, uintTUOQXqA, {from: accounts[4]});
		const stringPrM2x1I = await OnXFinanceoaEgqJO.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const uintm7mZrd = await OnXFinanceoaEgqJO.allowance.call(addressOq2OnC, addressDJyotGf, {from: accounts[3]});

		assert.equal(boolfpUdCL, true)
		await expect(OnXFinanceoaEgqJO.transferFrom.call(addressFTJGdD1, addressfMNE0eU, uintTUOQXqA, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringqOmiKZA = "EAiEzGww7KN0ickK3jfhrGToOA"
		const stringPO3feKj = "dnQVkmuORrm7vhv6ZmgGm1dm1Yc9GTkQVjj7pxXAeEUxyhON5c6dW"
		const uintYEt6wo = BigInt("1587")
		const OnXFinancePch60z9 = await OnXFinance.new(stringqOmiKZA, stringPO3feKj, uintYEt6wo, {from: accounts[5]});
		const uintmx0c6P7 = BigInt("1143")
		const addressG12XvBd = accounts[3]
		const uintHyvXLm = BigInt("0")
		const addressAsB8lrt = accounts[1]
		const uintVQHehhm = BigInt("65")
		const addressXkVUAN4 = accounts[3]
		const addressDWa0KSt = accounts[5]
		const uintun9LB62 = BigInt("22")
		const addressgFhB4YT = "0x0000000000000000000000000000000000000001"
		const addressb2SH2kG = accounts[4]
		const uintrrEF5xF = await OnXFinancePch60z9.totalSupply.call({from: accounts[1]});
		const boolLY8zRIm = await OnXFinancePch60z9.approve.call(addressG12XvBd, uintmx0c6P7, {from: accounts[3]});
		const boollWgpALz = await OnXFinancePch60z9.approveAndCall.call(addressAsB8lrt, uintHyvXLm, {from: accounts[5]});
		const boolgiwkUzS = await OnXFinancePch60z9.transferFrom.call(addressDWa0KSt, addressXkVUAN4, uintVQHehhm, {from: accounts[3]});
		const booljDJw5GE = await OnXFinancePch60z9.transferFrom.call(addressb2SH2kG, addressgFhB4YT, uintun9LB62, {from: accounts[2]});

		assert.equal(boolLY8zRIm, true)
		assert.equal(boollWgpALz, true)
		assert.equal(uintrrEF5xF, BigInt("1587000000000000000000"))
		await expect(OnXFinancePch60z9.transferFrom.call(addressDWa0KSt, addressXkVUAN4, uintVQHehhm, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for OnXFinance', async () => {
		const stringfTxBGF2 = "c2FXLXeVbXGRGwMiu63FAlkbp5FJdlWWOqTWoDXeNqz9dobt"
		const stringjX6qC0u = "B7SsXNhJMLmtLb4e9"
		const uintol9tNdn = BigInt("61")
		const OnXFinancePn9cLSJ = await OnXFinance.new(stringfTxBGF2, stringjX6qC0u, uintol9tNdn, {from: accounts[3]});
		const uintVnirMu = BigInt("0")
		const addressmZDdz8H = accounts[4]
		const stringnFubcY = await OnXFinancePn9cLSJ.name.call({from: accounts[5]});
		const boolYDmjmq = await OnXFinancePn9cLSJ.transfer.call(addressmZDdz8H, uintVnirMu, {from: accounts[1]});
		const stringBB15FnU = await OnXFinancePn9cLSJ.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolYDmjmq, true)
		assert.equal(stringBB15FnU, "c2FXLXeVbXGRGwMiu63FAlkbp5FJdlWWOqTWoDXeNqz9dobt")
		assert.equal(stringnFubcY, "c2FXLXeVbXGRGwMiu63FAlkbp5FJdlWWOqTWoDXeNqz9dobt")
	});
})