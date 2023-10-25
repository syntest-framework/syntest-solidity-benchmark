const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintWQ2PKTk = BigInt("953")
		const stringSlxTzdw = "gQRiIF8sMjoESgwR6FYkpoAgn5x9KCpw5aoti9TplUPqsCWLuKaXWup1yeo1KhC0raBinQGcuJ2xXNANbj1W6PQE8uGD"
		const stringq871j5q = "1DBqchfPKqkChijKnWWE6eDNxOXvnAIio59H8KQlh2RHiuYv6KHFRWZYkCSSwxouR9hUusNdgfKG1yECK3b434"
		const INSuUr7CC = await INS.new(uintWQ2PKTk, stringSlxTzdw, stringq871j5q, {from: accounts[2]});
		const bytez9MDyzZ = "0x13091e12040f130a1b16011216021d17"
		const uintTPyozki = BigInt("1480")
		const addressohum5AK = accounts[2]
		const byteOOj7TdA = "0x0c08"
		const uintiz05UGu = BigInt("1389")
		const addressf2rgWq2 = accounts[4]
		const uintVSsiGz3 = BigInt("1261")
		const uintRaY5ZQ3 = BigInt("1767")
		const addressBIGlMpX = accounts[2]
		const boolV3inqUm = await INSuUr7CC.approveAndCall.call(addressohum5AK, uintTPyozki, bytez9MDyzZ, {from: accounts[1]});
		const boolHWMIUmo = await INSuUr7CC.approveAndCall.call(addressf2rgWq2, uintiz05UGu, byteOOj7TdA, {from: accounts[5]});
		const boolb0VNLfg = await INSuUr7CC.burn.call(uintVSsiGz3, {from: accounts[2]});
		const boolxpLVeHl = await INSuUr7CC.approve.call(addressBIGlMpX, uintRaY5ZQ3, {from: accounts[0]});

		await expect(INSuUr7CC.approveAndCall.call(addressohum5AK, uintTPyozki, bytez9MDyzZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintPaPsak4 = BigInt("362")
		const stringwTDRIE4 = "Yix9tIwiX18f5A55vXyxug8MvqCLUkbQNl9hhMOkGeDB1aJAqLtxiF9bU3MVK8HqXt0"
		const stringTKZKg6n = "DvnrVffjxf14QIeVvtZYrTJbmIk5Ryi7MxusYMfieetN82bXeDELcFxkMJxrs7XHyS4WkkRiLgAoIUJCpvL"
		const INSZs2M1dv = await INS.new(uintPaPsak4, stringwTDRIE4, stringTKZKg6n, {from: accounts[2]});
		const uintYicM7cA = BigInt("1521")
		const addressvqospmT = "0x0000000000000000000000000000000000000001"
		const uintSbs27bk = BigInt("425")
		const uintaF4ArP = BigInt("1094")
		const addresshDq4dr2 = accounts[3]
		const boolDfXN4Y4 = await INSZs2M1dv.burnFrom.call(addressvqospmT, uintYicM7cA, {from: accounts[1]});
		const boolz7SA193 = await INSZs2M1dv.burn.call(uintSbs27bk, {from: accounts[4]});
		const booluW7FoAQ = await INSZs2M1dv.approve.call(addresshDq4dr2, uintaF4ArP, {from: "0x0000000000000000000000000000000000000001"});

		await expect(INSZs2M1dv.burnFrom.call(addressvqospmT, uintYicM7cA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintohkqoA = BigInt("1542")
		const stringMfNj4Pz = "PtcLdhM7jsphwgD7wZ3jGqTgMEFFGQTqQSqD5SXnfcmcCpeuvPEky1RmTuMYxEjgM"
		const stringZ6QNOKi = "j8NUUA9lldamg3I1AbjuKPVVlodBQiZysbJyTKAT2qoSluvLG2HonXWRqkOXrYmW7OlmRwNCi"
		const INSLXb9JfO = await INS.new(uintohkqoA, stringMfNj4Pz, stringZ6QNOKi, {from: accounts[1]});
		const uintn20ZuS = BigInt("1371")
		const addressFvE9DX = "0x0000000000000000000000000000000000000001"
		const uintlQ5PLy = BigInt("1277")
		const addressDJY4NAO = accounts[0]
		const addressVPmr6s2 = accounts[2]
		const boollABaFAH = await INSLXb9JfO.approve.call(addressFvE9DX, uintn20ZuS, {from: accounts[3]});
		const boolPBKndb = await INSLXb9JfO.transferFrom.call(addressVPmr6s2, addressDJY4NAO, uintlQ5PLy, {from: accounts[5]});

		assert.equal(boollABaFAH, true)
		await expect(INSLXb9JfO.transferFrom.call(addressVPmr6s2, addressDJY4NAO, uintlQ5PLy, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintrpbwRHG = BigInt("385")
		const stringzgGkrcU = "xVDmlS1EnXrRg5nEpcySta8mO9C2swPwIP6mmXO88y1ry1oTSxQxBBh7aywLvHxtwNcdPm"
		const stringMvciNBZ = "w5K7xevo7BAh56JKik"
		const INSDyQhEUT = await INS.new(uintrpbwRHG, stringzgGkrcU, stringMvciNBZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintaOL5lG9 = BigInt("1224")
		const byteCMrVjYY = "0x091a140a1116010b0f030e170402"
		const uintp1dtlzk = BigInt("1633")
		const addressEcK7LQ9 = accounts[2]
		const uintXsTJr47 = BigInt("1031")
		const addressHvIiTUJ = accounts[0]
		const byteIpDtFmO = "0x1f190f150e0f0303040206200d000c"
		const uinttJP58hn = BigInt("1592")
		const addressktk3On3 = accounts[1]
		const boollQGP8x = await INSDyQhEUT.burn.call(uintaOL5lG9, {from: accounts[0]});
		const booldaoW1lR = await INSDyQhEUT.approveAndCall.call(addressEcK7LQ9, uintp1dtlzk, byteCMrVjYY, {from: accounts[0]});
		const boolo8HBLcL = await INSDyQhEUT.approve.call(addressHvIiTUJ, uintXsTJr47, {from: accounts[3]});
		const boolsLnN6X6 = await INSDyQhEUT.approveAndCall.call(addressktk3On3, uinttJP58hn, byteIpDtFmO, {from: accounts[0]});
	});

	it('test for INS', async () => {
		const uintrGba4PJ = BigInt("230")
		const string4X9JQ8 = "3Qz7hozbB"
		const string3E7KVv = "vWejEHvxl8T0fIlGPoY1xY39zOgEQnrC5hWEKPmRhKPrZvYbmkTNwnsanjz8N5OtQgY0y3N2iBhT8Q1TkoVuV"
		const INSQLQ1QvF = await INS.new(uintrGba4PJ, string4X9JQ8, string3E7KVv, {from: accounts[0]});
		const uintUyuvjC5 = BigInt("627")
		const addressIMmXiRY = accounts[4]
		const uintKrYMl4H = BigInt("344")
		const addressKlciiJX = accounts[2]
		const uintuLuZxtR = BigInt("172")
		const uintli1vvPJ = BigInt("324")
		const addressUUiRmcK = accounts[2]
		const uintiLkDcxu = BigInt("1491")
		const addressUVCVTMn = accounts[1]
		const booleURKf4a = await INSQLQ1QvF.approve.call(addressIMmXiRY, uintUyuvjC5, {from: accounts[0]});
		const boolXbWlHO5 = await INSQLQ1QvF.approve.call(addressKlciiJX, uintKrYMl4H, {from: accounts[4]});
		const boolu5hDFdO = await INSQLQ1QvF.burn.call(uintuLuZxtR, {from: accounts[4]});
		const boolEEkVnQM = await INSQLQ1QvF.burnFrom.call(addressUUiRmcK, uintli1vvPJ, {from: accounts[1]});
		const booljfcyqdJ = await INSQLQ1QvF.approve.call(addressUVCVTMn, uintiLkDcxu, {from: accounts[1]});

		assert.equal(boolXbWlHO5, true)
		assert.equal(booleURKf4a, true)
		await expect(INSQLQ1QvF.burn.call(uintuLuZxtR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintHDHqTeS = BigInt("230")
		const string4X9JQ8 = "3Qz7hozbB"
		const string3E7KVv = "vWejEHvxl8T0fIlGPoY1xY39zOgEQnrC5hWEKPmRhKPrZvYbmkTNwnsanjz8N5OtQgY0y3N2iBhT8Q1TkoVuV"
		const INSQLQ1QvF = await INS.new(uintHDHqTeS, string4X9JQ8, string3E7KVv, {from: accounts[0]});
		const uintzT7FjH = BigInt("627")
		const addressjt1K6Uk = accounts[4]
		const uintFoBOwFd = BigInt("889")
		const addressR1vJAeN = accounts[2]
		const uintIZsbXz9 = BigInt("344")
		const addressHQlNiTH = accounts[2]
		const uintmYjSuzw = BigInt("515")
		const uintL4fQD1z = BigInt("324")
		const addressLhiFSVf = accounts[2]
		const uintFgepdyZ = BigInt("1491")
		const addresslciaJj8 = accounts[1]
		const uintaIYL8lq = BigInt("1262")
		const address1ks87B = accounts[3]
		const addressW5PS4Ch = accounts[0]
		const booleURKf4a = await INSQLQ1QvF.approve.call(addressjt1K6Uk, uintzT7FjH, {from: accounts[0]});
		const boolEEFjEj = await INSQLQ1QvF.transfer.call(addressR1vJAeN, uintFoBOwFd, {from: accounts[0]});
		const boolXbWlHO5 = await INSQLQ1QvF.approve.call(addressHQlNiTH, uintIZsbXz9, {from: accounts[4]});
		const boolu5hDFdO = await INSQLQ1QvF.burn.call(uintmYjSuzw, {from: accounts[4]});
		const boolEEkVnQM = await INSQLQ1QvF.burnFrom.call(addressLhiFSVf, uintL4fQD1z, {from: accounts[1]});
		const booljfcyqdJ = await INSQLQ1QvF.approve.call(addresslciaJj8, uintFgepdyZ, {from: accounts[1]});
		const boolFYL1GFJ = await INSQLQ1QvF.transferFrom.call(addressW5PS4Ch, address1ks87B, uintaIYL8lq, {from: accounts[2]});

		assert.equal(boolEEFjEj, true)
		assert.equal(boolXbWlHO5, true)
		assert.equal(booleURKf4a, true)
		await expect(INSQLQ1QvF.burn.call(uintmYjSuzw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintHOKBuaP = BigInt("362")
		const stringwTDRIE4 = "Yix9tIwiX18f5A55vXyxug8MvqCLUkbQNl9hhMOkGeDB1aJAqLtxiF9bU3MVK8HqXt0"
		const stringTKZKg6n = "DvnrVffjxf14QIeVvtZYrTJbmIk5Ryi7MxusYMfieetN82bXeDELcFxkMJxrs7XHyS4WkkRiLgAoIUJCpvL"
		const INSZs2M1dv = await INS.new(uintHOKBuaP, stringwTDRIE4, stringTKZKg6n, {from: accounts[2]});
		const uintnIo47ML = BigInt("1579")
		const uintDITLSYw = BigInt("1521")
		const addressZF2lD94 = "0x0000000000000000000000000000000000000001"
		const boolRnTf5KT = await INSZs2M1dv.burn.call(uintnIo47ML, {from: accounts[2]});
		const boolDfXN4Y4 = await INSZs2M1dv.burnFrom.call(addressZF2lD94, uintDITLSYw, {from: accounts[1]});

		assert.equal(boolRnTf5KT, true)
		await expect(INSZs2M1dv.burnFrom.call(addressZF2lD94, uintDITLSYw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintblcx9w = BigInt("1542")
		const stringMfNj4Pz = "PtcLdhM7jsphwgD7wZ3jGqTgMEFFGQTqQSqD5SXnfcmcCpeuvPEky1RmTuMYxEjgM"
		const stringZ6QNOKi = "j8NUUA9lldamg3I1AbjuKPVVlodBQiZysbJyTKAT2qoSluvLG2HonXWRqkOXrYmW7OlmRwNCi"
		const INSLXb9JfO = await INS.new(uintblcx9w, stringMfNj4Pz, stringZ6QNOKi, {from: accounts[1]});
		const uintzTEol8b = BigInt("361")
		const addressojxyp2W = accounts[1]
		const uinte2uXtTy = BigInt("296")
		const addresszZXgxYd = accounts[0]
		const addressCc2w17x = accounts[2]
		const uintjWa94fL = BigInt("898")
		const addressgI6mes = accounts[4]
		const addressYl1OBgK = accounts[3]
		const uintoTWIhBf = BigInt("770")
		const addressUhBC91o = accounts[3]
		const addressqlVZmFY = accounts[1]
		const uintgu6HLFl = BigInt("1099")
		const addressdyGjjwC = accounts[1]
		const addressR8FRCX = accounts[2]
		const boolQtOl5XD = await INSLXb9JfO.burnFrom.call(addressojxyp2W, uintzTEol8b, {from: accounts[0]});
		const boolPBKndb = await INSLXb9JfO.transferFrom.call(addressCc2w17x, addresszZXgxYd, uinte2uXtTy, {from: accounts[5]});
		const boolLLbAVma = await INSLXb9JfO.transferFrom.call(addressYl1OBgK, addressgI6mes, uintjWa94fL, {from: accounts[2]});
		const boolUrGsArI = await INSLXb9JfO.transferFrom.call(addressqlVZmFY, addressUhBC91o, uintoTWIhBf, {from: accounts[2]});
		const boolTYTc1qA = await INSLXb9JfO.transferFrom.call(addressR8FRCX, addressdyGjjwC, uintgu6HLFl, {from: accounts[3]});

		await expect(INSLXb9JfO.burnFrom.call(addressojxyp2W, uintzTEol8b, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})