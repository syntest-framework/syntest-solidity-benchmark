const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintBxB7Dm9 = BigInt("1896")
		const stringq75iFSc = "voM3m54hQ0tujpNxiljgEmRCodNqGpLorfurHBFaZkesQ3IidK9r6JI6ODnxd5no7ZO"
		const stringUB80m0j = "dn5cnUeKnTHpRBsC4kmIGD4cyuFAYGOQVsmj1UbalDr4Iu3bp8162e"
		const INSfGIz6FT = await INS.new(uintBxB7Dm9, stringq75iFSc, stringUB80m0j, {from: accounts[0]});
		const uintGLhtKxp = BigInt("1475")
		const uintGMQWbhh = BigInt("840")
		const addressJe15NE1 = accounts[2]
		const uintGFB1b9x = BigInt("503")
		const uinta4iwOXV = BigInt("330")
		const addresszAPewSg = "0x0000000000000000000000000000000000000001"
		const addressMoFobQ1 = accounts[1]
		const byteoufXian = "0x010f17051702170e15021b110701171f071c050918120d13"
		const uintKXe9qJL = BigInt("1643")
		const addressfpKs1C = accounts[1]
		const boolGiqcPXp = await INSfGIz6FT.burn.call(uintGLhtKxp, {from: accounts[2]});
		const boolOjLcTDu = await INSfGIz6FT.approve.call(addressJe15NE1, uintGMQWbhh, {from: accounts[3]});
		const boolVYeY0Qr = await INSfGIz6FT.burn.call(uintGFB1b9x, {from: accounts[3]});
		const boolGznzNxx = await INSfGIz6FT.transferFrom.call(addressMoFobQ1, addresszAPewSg, uinta4iwOXV, {from: accounts[4]});
		const boolPiDGV5B = await INSfGIz6FT.approveAndCall.call(addressfpKs1C, uintKXe9qJL, byteoufXian, {from: accounts[2]});

		await expect(INSfGIz6FT.burn.call(uintGLhtKxp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uinteNY0Fh = BigInt("380")
		const stringIeNlelI = "ZW7dLol5G6NPDLE0w8mTgd67fqTVpgTYo4UMPe9oO8RRYFmFY9YzHifBLa7xOroygx9e5bzZltYg"
		const stringgDDgZWG = "RdADKX5VKq3PgQUKpe1FmGzeSIzagO56oH60OcBMiWwJQUSYfk0nBVDKfIGCfTOLuIAuEqGGp3TQQAaz"
		const INSb4IkHN = await INS.new(uinteNY0Fh, stringIeNlelI, stringgDDgZWG, {from: accounts[4]});
		const byteCIHQTOF = "0x13081015191712180402140317091a011c"
		const uintAqn2JbO = BigInt("1128")
		const addressRYKuyWs = accounts[4]
		const uintimNG2HO = BigInt("1033")
		const addressGubvkkP = accounts[5]
		const boolVb1WUOS = await INSb4IkHN.approveAndCall.call(addressRYKuyWs, uintAqn2JbO, byteCIHQTOF, {from: accounts[2]});
		const boolRQwrMq3 = await INSb4IkHN.approve.call(addressGubvkkP, uintimNG2HO, {from: accounts[0]});

		await expect(INSb4IkHN.approveAndCall.call(addressRYKuyWs, uintAqn2JbO, byteCIHQTOF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintnuIgSyd = BigInt("942")
		const stringPA9rdMJ = "XacBl03mzIKZrs4o3uFgls67iDbpJAv"
		const stringAXSYUl0 = "n9A6KY13MDKN8YDByQydxEIgbeNqelZLV4ok45yMAh4N5bjnAHn1JtHDoW2xqdInZsHsrQ1AXR8nvS2zgKxYLMbpqJYzPeSq"
		const INShIq91u = await INS.new(uintnuIgSyd, stringPA9rdMJ, stringAXSYUl0, {from: accounts[4]});
		const uintSsYMbC3 = BigInt("396")
		const addresstuQZdq6 = accounts[1]
		const uintWnl5Fw5 = BigInt("2002")
		const addressbaQSPnU = accounts[2]
		const uintaIgSeSu = BigInt("414")
		const addressYtoMXqo = accounts[2]
		const byteJW292wP = "0x1f04120f"
		const uintYMWSqDo = BigInt("1892")
		const address4WG6Ze = "0x0000000000000000000000000000000000000001"
		const boolbAPFaet = await INShIq91u.approve.call(addresstuQZdq6, uintSsYMbC3, {from: accounts[1]});
		const boolXrFnpFD = await INShIq91u.burnFrom.call(addressbaQSPnU, uintWnl5Fw5, {from: accounts[2]});
		const boolMXkTlJA = await INShIq91u.burnFrom.call(addressYtoMXqo, uintaIgSeSu, {from: accounts[3]});
		const boolvc47p7q = await INShIq91u.approveAndCall.call(address4WG6Ze, uintYMWSqDo, byteJW292wP, {from: accounts[1]});

		assert.equal(boolbAPFaet, true)
		await expect(INShIq91u.burnFrom.call(addressbaQSPnU, uintWnl5Fw5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintz9yflMt = BigInt("735")
		const stringPqP13NN = "rqabfFB33QYAkVTWRkqpirKnYgyihtstkH2Kwa3iTFPrtODjg7QG18DVnZm2"
		const stringxj3OzBL = "xVr"
		const INSPwqcBD9 = await INS.new(uintz9yflMt, stringPqP13NN, stringxj3OzBL, {from: "0x0000000000000000000000000000000000000001"});
		const uintsww6fCW = BigInt("1725")
		const addressPChT4HC = accounts[0]
		const addressmqNRwdn = "0x0000000000000000000000000000000000000001"
		const bytedWHAojc = "0x080a130214021f1c181902171d1b200b0900020a0b1f100714161d08"
		const uintWM6K1DH = BigInt("140")
		const addressPY0J1F = accounts[1]
		const uinttOikU7w = BigInt("327")
		const addresswid1YIp = "0x0000000000000000000000000000000000000001"
		const uintT8Ribo = BigInt("1973")
		const addressJxQntTx = accounts[4]
		const boolJVhZvRc = await INSPwqcBD9.transferFrom.call(addressmqNRwdn, addressPChT4HC, uintsww6fCW, {from: accounts[0]});
		const boolq17MaGU = await INSPwqcBD9.approveAndCall.call(addressPY0J1F, uintWM6K1DH, bytedWHAojc, {from: accounts[1]});
		const boolFxgnbuy = await INSPwqcBD9.approve.call(addresswid1YIp, uinttOikU7w, {from: accounts[5]});
		const boolQikdrCT = await INSPwqcBD9.approve.call(addressJxQntTx, uintT8Ribo, {from: accounts[3]});
	});

	it('test for INS', async () => {
		const uintlAfYV7Y = BigInt("434")
		const stringTkZkKBa = "MqxU34CA4VPuEXHrMe55FvA6HsGmQWYazLKTYGL1t1lxGTpgPnz98wQ3Z5BbQj25njHQ4Bfykf4LpfAA"
		const stringCqiQ8o = "BGex6Hcm61Xy2cSwpjEQ8yGfD8y8d0RK"
		const INSWKew10 = await INS.new(uintlAfYV7Y, stringTkZkKBa, stringCqiQ8o, {from: accounts[2]});
		const uintnJb7Srl = BigInt("1480")
		const addressGjV39qv = accounts[0]
		const uintzeGscP = BigInt("1221")
		const addresszsBYr1 = accounts[2]
		const uintACx78gr = BigInt("631")
		const uinto5JIAf = BigInt("97")
		const uintFH6sOPo = BigInt("1894")
		const addressIRksnj = accounts[0]
		const byteD6DT948 = "0x170f14040c060a17"
		const uintRRWtkpN = BigInt("895")
		const addressKcU63BW = accounts[3]
		const uintZb0JR8h = BigInt("1826")
		const boolsatyBwq = await INSWKew10.approve.call(addressGjV39qv, uintnJb7Srl, {from: accounts[5]});
		const boolR4fCbUv = await INSWKew10.approve.call(addresszsBYr1, uintzeGscP, {from: accounts[5]});
		const boolUid261a = await INSWKew10.burn.call(uintACx78gr, {from: accounts[2]});
		const boolm29ziFL = await INSWKew10.burn.call(uinto5JIAf, {from: accounts[4]});
		const boollMZWekk = await INSWKew10.approve.call(addressIRksnj, uintFH6sOPo, {from: accounts[5]});
		const boolbSxCrU = await INSWKew10.approveAndCall.call(addressKcU63BW, uintRRWtkpN, byteD6DT948, {from: accounts[5]});
		const boolkZA0wCU = await INSWKew10.burn.call(uintZb0JR8h, {from: accounts[0]});

		assert.equal(boolR4fCbUv, true)
		assert.equal(boolUid261a, true)
		assert.equal(boolsatyBwq, true)
		await expect(INSWKew10.burn.call(uinto5JIAf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintnUb5M6S = BigInt("1647")
		const stringudDLSM = "fKs3BQTfPBj37U4iTLXcwxSDfnm8vcNX3K7BTAteYMKqHpNLbOiFi7EkiQghBbczhYRA"
		const stringbxOzogy = "6iYLqOdVcg4fy8xmHAIga3GnOaNlgmEiidjCrYHVMiUb1F0hqMnvNMFRsBv22zfdUXrQtyGs7"
		const INSC8ZlT3n = await INS.new(uintnUb5M6S, stringudDLSM, stringbxOzogy, {from: accounts[4]});
		const uintNBk1X9O = BigInt("1677")
		const addressufjY2As = accounts[4]
		const uintcmJU9HW = BigInt("126")
		const addressw71TzZy = accounts[4]
		const uintZ6BkXP = BigInt("146")
		const addressBOmR8OO = "0x0000000000000000000000000000000000000001"
		const addressSYMXlOa = accounts[0]
		const boolikKNfte = await INSC8ZlT3n.approve.call(addressufjY2As, uintNBk1X9O, {from: accounts[0]});
		const bools1YpcWX = await INSC8ZlT3n.approve.call(addressw71TzZy, uintcmJU9HW, {from: accounts[1]});
		const booleBtOfuM = await INSC8ZlT3n.transferFrom.call(addressSYMXlOa, addressBOmR8OO, uintZ6BkXP, {from: accounts[3]});

		assert.equal(boolikKNfte, true)
		assert.equal(bools1YpcWX, true)
		await expect(INSC8ZlT3n.transferFrom.call(addressSYMXlOa, addressBOmR8OO, uintZ6BkXP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintlWPhLXR = BigInt("380")
		const stringIeNlelI = "ZW7dLol5G6NPDLE0w8mTgd67fqTVpgTYo4UMPe9oO8RRYFmFY9YzHifBLa7xOroygx9e5bzZltYg"
		const stringgDDgZWG = "RdADKX5VKq3PgQUKpe1FmGzeSIzagO56oH60OcBMiWwJQUSYfk0nBVDKfIGCfTOLuIAuEqGGp3TQQAaz"
		const INSb4IkHN = await INS.new(uintlWPhLXR, stringIeNlelI, stringgDDgZWG, {from: accounts[4]});
		const uintS0E4Mjq = BigInt("1724")
		const addressYEMDnPy = "0x0000000000000000000000000000000000000001"
		const byteUKf5SWV = "0x13081015191712180402140317091a011c"
		const uintsDgiTDB = BigInt("1097")
		const addressSXumWzb = accounts[4]
		const boolyzzthgT = await INSb4IkHN.transfer.call(addressYEMDnPy, uintS0E4Mjq, {from: accounts[2]});
		const boolVb1WUOS = await INSb4IkHN.approveAndCall.call(addressSXumWzb, uintsDgiTDB, byteUKf5SWV, {from: accounts[2]});

		await expect(INSb4IkHN.transfer.call(addressYEMDnPy, uintS0E4Mjq, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintAC0edKw = BigInt("942")
		const stringPA9rdMJ = "XacBl03mzIKZrs4o3uFgls67iDbpJAv"
		const stringAXSYUl0 = "n9A6KY13MDKN8YDByQydxEIgbeNqelZLV4ok45yMAh4N5bjnAHn1JtHDoW2xqdInZsHsrQ1AXR8nvS2zgKxYLMbpqJYzPeSq"
		const INShIq91u = await INS.new(uintAC0edKw, stringPA9rdMJ, stringAXSYUl0, {from: accounts[4]});
		const uintZ5Fpqc = BigInt("2002")
		const addressODdTsdP = accounts[4]
		const boolXrFnpFD = await INShIq91u.burnFrom.call(addressODdTsdP, uintZ5Fpqc, {from: accounts[2]});

		await expect(INShIq91u.burnFrom.call(addressODdTsdP, uintZ5Fpqc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintSRL0Rh = BigInt("380")
		const stringIeNlelI = "ZW7dLol5G6NPDLE0w8mTgd67fqTVpgTYo4UMPe9oO8RRYFmFY9YzHifBLa7xOroygx9e5bzZltYg"
		const stringgDDgZWG = "RdADKX5VKq3PgQUKpe1FmGzeSIzagO56oH60OcBMiWwJQUSYfk0nBVDKfIGCfTOLuIAuEqGGp3TQQAaz"
		const INSb4IkHN = await INS.new(uintSRL0Rh, stringIeNlelI, stringgDDgZWG, {from: accounts[4]});
		const uintnZTdPWE = BigInt("796")
		const addresskzUL9AW = accounts[3]
		const uintqDNK8Yp = BigInt("1698")
		const addresshVVQiIo = "0x0000000000000000000000000000000000000001"
		const boolfaRGJmo = await INSb4IkHN.transfer.call(addresskzUL9AW, uintnZTdPWE, {from: accounts[4]});
		const boolyzzthgT = await INSb4IkHN.transfer.call(addresshVVQiIo, uintqDNK8Yp, {from: accounts[2]});

		assert.equal(boolfaRGJmo, true)
		await expect(INSb4IkHN.transfer.call(addresshVVQiIo, uintqDNK8Yp, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})