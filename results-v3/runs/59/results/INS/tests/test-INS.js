const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintNOGNpmf = BigInt("134")
		const stringIq9BcHT = "Gwy40tlyd9O7qkjVprh6qPUriFAGQdttLAIhuRTme215HjVNBOweDD2cR2mQ400nvWl8LJnlawo"
		const stringJA2zzaF = "huShFTzPkzUSSzomXCX"
		const INSwlkxlIo = await INS.new(uintNOGNpmf, stringIq9BcHT, stringJA2zzaF, {from: accounts[0]});
		const uintQ4dPOp = BigInt("1430")
		const addressLlAuVn9 = accounts[4]
		const uintaIo1cb = BigInt("935")
		const addressL7gzRMr = accounts[0]
		const bytetTGyf7 = "0x080a090c0413011c040607171c18160c1a1013190820040f120c1502"
		const uintn8A8KR1 = BigInt("1626")
		const addressZW87Box = "0x0000000000000000000000000000000000000001"
		const uint0B1bNG = BigInt("754")
		const addressBCJLnRH = accounts[2]
		const addresscnR3trt = accounts[2]
		const uintrvY7Hfj = BigInt("1043")
		const addressQPBMkVM = accounts[0]
		const uintI0umtC = BigInt("1202")
		const addressKeuerPx = accounts[3]
		const boolRiQAE1 = await INSwlkxlIo.burnFrom.call(addressLlAuVn9, uintQ4dPOp, {from: accounts[2]});
		const boolTXp7L4L = await INSwlkxlIo.transfer.call(addressL7gzRMr, uintaIo1cb, {from: accounts[3]});
		const boolXaxafFr = await INSwlkxlIo.approveAndCall.call(addressZW87Box, uintn8A8KR1, bytetTGyf7, {from: accounts[0]});
		const boolxBitpwX = await INSwlkxlIo.transferFrom.call(addresscnR3trt, addressBCJLnRH, uint0B1bNG, {from: accounts[1]});
		const boolfJKWR8d = await INSwlkxlIo.transfer.call(addressQPBMkVM, uintrvY7Hfj, {from: accounts[4]});
		const boolhIlvSK = await INSwlkxlIo.approve.call(addressKeuerPx, uintI0umtC, {from: "0x0000000000000000000000000000000000000001"});

		await expect(INSwlkxlIo.burnFrom.call(addressLlAuVn9, uintQ4dPOp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintbv5kfo = BigInt("759")
		const stringBq3kn9y = "35twd3PohaZigpXoqe83JSYJY9UkVF6eqBFDrCekoZfBARJYwZOciOkATKRMX"
		const stringaZhTmiv = "iprcX2CkJlhcramNQHWimmmXN64H3IiSiE4Ytj7DN2b1pg98RwJBhVmfqBbJB5Ry1sasj0"
		const INSJJ1kp2C = await INS.new(uintbv5kfo, stringBq3kn9y, stringaZhTmiv, {from: accounts[5]});
		const uintlC5Yvad = BigInt("686")
		const addressTTc3pwT = accounts[4]
		const uintcixI8q1 = BigInt("1958")
		const address90yFRO = accounts[4]
		const uintuv3wwue = BigInt("1790")
		const addressOyKO8hk = accounts[0]
		const boolKWBAHBL = await INSJJ1kp2C.approve.call(addressTTc3pwT, uintlC5Yvad, {from: accounts[0]});
		const boolNAyzAtq = await INSJJ1kp2C.approve.call(address90yFRO, uintcixI8q1, {from: accounts[2]});
		const boollgsAaiT = await INSJJ1kp2C.approve.call(addressOyKO8hk, uintuv3wwue, {from: accounts[3]});

		assert.equal(boolKWBAHBL, true)
		assert.equal(boolNAyzAtq, true)
		assert.equal(boollgsAaiT, true)
	});

	it('test for INS', async () => {
		const uintpQOMrFJ = BigInt("682")
		const stringNq8j4Ou = "WC3mTVo4Ui3zr7jzNAfPQSFHHGM7k8ty3i6Btvj5hRNxnO5loggcfW2N"
		const stringv6A4Tns = "wGHuNOEB34HrwiHLicJg8qHbnieUhztASdmLMyCmSB9r06VSmEcawfG9q1zvIN3YS3Rbn9IhiRppOuoRq8DiZbajb"
		const INSA8aI1y0 = await INS.new(uintpQOMrFJ, stringNq8j4Ou, stringv6A4Tns, {from: accounts[0]});
		const byterJgVfDl = "0x0c0f12141103051c120a0c1e011a1906130c15071d010a20"
		const uintgtMkKsE = BigInt("835")
		const addressrSSU3Ey = accounts[5]
		const bytemzeqKkH = "0x12160d"
		const uintbsjJz9D = BigInt("613")
		const addressZs9QPwg = accounts[5]
		const uintUfs4sUm = BigInt("181")
		const addressPSSCnAp = accounts[1]
		const addressH2DcDCG = accounts[2]
		const boolWwi8aE5 = await INSA8aI1y0.approveAndCall.call(addressrSSU3Ey, uintgtMkKsE, byterJgVfDl, {from: accounts[4]});
		const boolQsDNzM3 = await INSA8aI1y0.approveAndCall.call(addressZs9QPwg, uintbsjJz9D, bytemzeqKkH, {from: accounts[2]});
		const boolrUhftCe = await INSA8aI1y0.transferFrom.call(addressH2DcDCG, addressPSSCnAp, uintUfs4sUm, {from: accounts[1]});

		await expect(INSA8aI1y0.approveAndCall.call(addressrSSU3Ey, uintgtMkKsE, byterJgVfDl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintnauzvq = BigInt("85")
		const stringvQqC7lC = "K8ysW7ALHLs5NWmBVkjug6WW7MwBWyHCEUekd"
		const stringI10WqP6 = "orS8eMsSHSWVMVNp7hUuWD1Q3v9cosnTgnwy73t1LqAiJef6MLVc0loOhktg4ebrMMlx8OvYcMDqXx6nLsSc"
		const INSlORSK1Z = await INS.new(uintnauzvq, stringvQqC7lC, stringI10WqP6, {from: accounts[3]});
		const uintiQkvMfU = BigInt("1742")
		const addressquSSc8v = accounts[3]
		const uintMdyaF9y = BigInt("589")
		const addressRwOPyiu = accounts[0]
		const uintaVHeJDM = BigInt("1871")
		const addressFXU8QbJ = accounts[1]
		const uintf177oZq = BigInt("1939")
		const boolbeFNa6S = await INSlORSK1Z.transfer.call(addressquSSc8v, uintiQkvMfU, {from: accounts[5]});
		const boolNwpZ9Y5 = await INSlORSK1Z.approve.call(addressRwOPyiu, uintMdyaF9y, {from: accounts[2]});
		const boollbWR635 = await INSlORSK1Z.approve.call(addressFXU8QbJ, uintaVHeJDM, {from: accounts[4]});
		const boolXExuy4Q = await INSlORSK1Z.burn.call(uintf177oZq, {from: "0x0000000000000000000000000000000000000001"});

		await expect(INSlORSK1Z.transfer.call(addressquSSc8v, uintiQkvMfU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uinthjTh4gN = BigInt("1177")
		const string1oicwC = "sgIiCgBoOrA6wyxooM9KIXNnK1k5eIy3N"
		const stringv0odJPZ = "bcH9dk5fSmssa5oix5nRFncg7h0N"
		const INSLhanPV7 = await INS.new(uinthjTh4gN, string1oicwC, stringv0odJPZ, {from: "0x0000000000000000000000000000000000000001"});
		const uintUTQcASU = BigInt("1926")
		const addressNVGj7E9 = accounts[2]
		const uintHNDsqRq = BigInt("1431")
		const uintqmIylIH = BigInt("1785")
		const addressgtngiVg = accounts[5]
		const addresspTzU3uZ = accounts[2]
		const uintMMbZwgJ = BigInt("1987")
		const boolUh5lO9v = await INSLhanPV7.transfer.call(addressNVGj7E9, uintUTQcASU, {from: accounts[3]});
		const boolQf075mf = await INSLhanPV7.burn.call(uintHNDsqRq, {from: accounts[4]});
		const boolmahpuZv = await INSLhanPV7.transferFrom.call(addresspTzU3uZ, addressgtngiVg, uintqmIylIH, {from: accounts[2]});
		const boolGznbWZ7 = await INSLhanPV7.burn.call(uintMMbZwgJ, {from: accounts[2]});
	});

	it('test for INS', async () => {
		const uintvWmuxCL = BigInt("934")
		const stringiSBPWvj = "7SI6xmO93LsiaVbcVkVTKQMoq8KT3u5aezFVdvNyF9i6okOsorSf"
		const stringPZogIwv = "9EVcqFIYAPDLpuxQb0x5WHjxoFxM5R2NxxxJzfbsmlBJrsBGkSgDHOVZ5QMEDVXJoKIk5tXoSa1c6rvgOIea20MaR032d2rpzU"
		const INS2O0xZD = await INS.new(uintvWmuxCL, stringiSBPWvj, stringPZogIwv, {from: accounts[0]});
		const uintFvZLRGX = BigInt("1114")
		const addressZE7bs3n = accounts[4]
		const uintrJLz1Eg = BigInt("2006")
		const addresse9nlD9o = accounts[3]
		const addressO6gS7ih = accounts[4]
		const uintlymngV = BigInt("1026")
		const uintp9m1TRA = BigInt("755")
		const addressOPqv2iD = accounts[1]
		const byteeD2ToUh = "0x0412140114"
		const uintPKILVTS = BigInt("165")
		const addressaEVvbiN = accounts[2]
		const uintEisy2Rt = BigInt("758")
		const addressFTQrNL5 = accounts[1]
		const boolwucQ6KP = await INS2O0xZD.approve.call(addressZE7bs3n, uintFvZLRGX, {from: accounts[5]});
		const boolsVoIeXs = await INS2O0xZD.transferFrom.call(addressO6gS7ih, addresse9nlD9o, uintrJLz1Eg, {from: accounts[1]});
		const boolilc4keQ = await INS2O0xZD.burn.call(uintlymngV, {from: accounts[0]});
		const boolOC8LXY = await INS2O0xZD.transfer.call(addressOPqv2iD, uintp9m1TRA, {from: accounts[1]});
		const boollwOk0Pu = await INS2O0xZD.approveAndCall.call(addressaEVvbiN, uintPKILVTS, byteeD2ToUh, {from: accounts[0]});
		const boolTYeITbL = await INS2O0xZD.burnFrom.call(addressFTQrNL5, uintEisy2Rt, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolwucQ6KP, true)
		await expect(INS2O0xZD.transferFrom.call(addressO6gS7ih, addresse9nlD9o, uintrJLz1Eg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintSs2LuI7 = BigInt("759")
		const stringBq3kn9y = "35twd3PohaZigpXoqe83JSYJY9UkVF6eqBFDrCekoZfBARJYwZOciOkATKRMX"
		const stringaZhTmiv = "iprcX2CkJlhcramNQHWimmmXN64H3IiSiE4Ytj7DN2b1pg98RwJBhVmfqBbJB5Ry1sasj0"
		const INSJJ1kp2C = await INS.new(uintSs2LuI7, stringBq3kn9y, stringaZhTmiv, {from: accounts[5]});
		const uintOxIQpcG = BigInt("686")
		const addressx7T67uc = accounts[4]
		const uintysLKbQn = BigInt("1582")
		const uintRNYhGU = BigInt("1958")
		const addressrtByJC = accounts[4]
		const uintkEaxAHS = BigInt("2047")
		const addressmxmffwu = accounts[5]
		const uintK2j9ad = BigInt("1790")
		const addressU2hM7LH = accounts[0]
		const boolKWBAHBL = await INSJJ1kp2C.approve.call(addressx7T67uc, uintOxIQpcG, {from: accounts[0]});
		const boolXawwr0a = await INSJJ1kp2C.burn.call(uintysLKbQn, {from: accounts[1]});
		const boolNAyzAtq = await INSJJ1kp2C.approve.call(addressrtByJC, uintRNYhGU, {from: accounts[2]});
		const boolMMeiAgE = await INSJJ1kp2C.transfer.call(addressmxmffwu, uintkEaxAHS, {from: accounts[3]});
		const boollgsAaiT = await INSJJ1kp2C.approve.call(addressU2hM7LH, uintK2j9ad, {from: accounts[3]});

		assert.equal(boolKWBAHBL, true)
		await expect(INSJJ1kp2C.burn.call(uintysLKbQn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})