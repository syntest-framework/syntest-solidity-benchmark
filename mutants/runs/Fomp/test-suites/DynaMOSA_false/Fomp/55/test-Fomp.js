const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressr0MPJC0 = accounts[3]
		const FompOKMLUiF = await Fomp.new(addressr0MPJC0, {from: accounts[1]});
		const bytedzV6oJA = "0x1b1e181006081e08090620010d1318080813081d10131c1c0a181a17121f131d"
		const bytevpkckT = "0x1309171f1c0a120f0e0c1b1303150f071011051e02190212130b200b0d041a19"
		const uintIDdpTYr = BigInt("53")
		const uintNVtTah = BigInt("161")
		const uintS2wJJNq = BigInt("639")
		const addressl9EAPkQ = accounts[5]
		const uintwTkjKbM = BigInt("10")
		const addressA3mEODD = accounts[0]
		const addressUmfXbsO = accounts[0]
		const addresslJMvdDf = await FompOKMLUiF.delegateBySig.call(addressl9EAPkQ, uintS2wJJNq, uintNVtTah, uintIDdpTYr, bytevpkckT, bytedzV6oJA, {from: accounts[0]});
		const boolvIqAenq = await FompOKMLUiF.transfer.call(addressA3mEODD, uintwTkjKbM, {from: accounts[3]});
		const addressEwAitDv = await FompOKMLUiF.delegate.call(addressUmfXbsO, {from: accounts[5]});

		await expect(FompOKMLUiF.delegateBySig.call(addressl9EAPkQ, uintS2wJJNq, uintNVtTah, uintIDdpTYr, bytevpkckT, bytedzV6oJA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresswlhy8w2 = accounts[0]
		const FomphAuUmxF = await Fomp.new(addresswlhy8w2, {from: accounts[2]});
		const addressTLTROZs = accounts[4]
		const uintD0st6i = BigInt("1277")
		const addressKTD4Ub = accounts[2]
		const addressJVDvsYR = accounts[0]
		const addressNgYUuMA = await FomphAuUmxF.delegate.call(addressTLTROZs, {from: accounts[5]});
		const boolMJSBq1J = await FomphAuUmxF.transferFrom.call(addressJVDvsYR, addressKTD4Ub, uintD0st6i, {from: accounts[2]});

		await expect(FomphAuUmxF.transferFrom.call(addressJVDvsYR, addressKTD4Ub, uintD0st6i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressejKskEd = accounts[1]
		const FompjB4NVvF = await Fomp.new(addressejKskEd, {from: accounts[0]});
		const addressTbsapLC = accounts[0]
		const bytebQERQ74 = "0x1111111410110a020c1c161717100f13120d0b1d1b1f1015111e15181817040f"
		const byteIdsXud = "0x0103100d1c0d180d1a101c090f091b1e1714080613010a111c190502191c001a"
		const uintdnVGYaM = BigInt("147")
		const uintci7ef90 = BigInt("1991")
		const uintfXq7UEU = BigInt("821")
		const addressaN5svHR = accounts[2]
		const uint2RZGtF = BigInt("1812")
		const addressYBOMi7E = accounts[4]
		const uintzcVQdZz = BigInt("499")
		const addressxGNvGiL = accounts[5]
		const addressfsjrftY = accounts[2]
		const uintRrOUAjT = await FompjB4NVvF.balanceOf.call(addressTbsapLC, {from: accounts[2]});
		const addresspngQ3Lt = await FompjB4NVvF.delegateBySig.call(addressaN5svHR, uintfXq7UEU, uintci7ef90, uintdnVGYaM, byteIdsXud, bytebQERQ74, {from: accounts[0]});
		const boolXL0gMTq = await FompjB4NVvF.transfer.call(addressYBOMi7E, uint2RZGtF, {from: accounts[2]});
		const boolLS5cDw1 = await FompjB4NVvF.transfer.call(addressxGNvGiL, uintzcVQdZz, {from: accounts[0]});
		const addressSTN2qEo = await FompjB4NVvF.delegate.call(addressfsjrftY, {from: accounts[4]});

		assert.equal(uintRrOUAjT, BigInt("0"))
		await expect(FompjB4NVvF.delegateBySig.call(addressaN5svHR, uintfXq7UEU, uintci7ef90, uintdnVGYaM, byteIdsXud, bytebQERQ74, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressU4jXRqX = accounts[2]
		const FompOsZ77U1 = await Fomp.new(addressU4jXRqX, {from: accounts[2]});
		const addressooXjhfX = accounts[0]
		const addresscRpVrNs = accounts[0]
		const bytesISJakO = "0x1e021d140a1a0c181916121d0612141c07120e0a101b0a0a1918120606050b1d"
		const byteG4J9OMT = "0x140c151d19111d0b0d1c0e0101001f1513071e0d0a1d100b1c0c1e1417011017"
		const uintlHAt9ga = BigInt("101")
		const uintxnZaVfw = BigInt("1950")
		const uintJ9SF5tO = BigInt("1729")
		const addressQ0zjyBN = accounts[4]
		const uint96zJ6F2gG = await FompOsZ77U1.getCurrentVotes.call(addressooXjhfX, {from: accounts[5]});
		const uinthI6QSU3 = await FompOsZ77U1.balanceOf.call(addresscRpVrNs, {from: accounts[3]});
		const addressHJmVM9W = await FompOsZ77U1.delegateBySig.call(addressQ0zjyBN, uintJ9SF5tO, uintxnZaVfw, uintlHAt9ga, byteG4J9OMT, bytesISJakO, {from: accounts[3]});

		assert.equal(uint96zJ6F2gG, BigInt("0"))
		assert.equal(uinthI6QSU3, BigInt("0"))
		await expect(FompOsZ77U1.delegateBySig.call(addressQ0zjyBN, uintJ9SF5tO, uintxnZaVfw, uintlHAt9ga, byteG4J9OMT, bytesISJakO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresseTOo4Hf = accounts[1]
		const FompuBaOPr = await Fomp.new(addresseTOo4Hf, {from: accounts[0]});
		const uintCYpXP4A = BigInt("844")
		const addressha6Avf7 = accounts[4]
		const addressSpwB0Cb = accounts[0]
		const uintcp8Q00h = BigInt("1841")
		const address0aKd2i = accounts[3]
		const addressXQZZAuC = accounts[3]
		const boolYt4lTp = await FompuBaOPr.transfer.call(addressha6Avf7, uintCYpXP4A, {from: accounts[3]});
		const uintz59K5OK = await FompuBaOPr.balanceOf.call(addressSpwB0Cb, {from: accounts[0]});
		const boolkRb8IDb = await FompuBaOPr.transfer.call(address0aKd2i, uintcp8Q00h, {from: accounts[1]});
		const uint96UWyMcZe = await FompuBaOPr.getCurrentVotes.call(addressXQZZAuC, {from: accounts[2]});

		await expect(FompuBaOPr.transfer.call(addressha6Avf7, uintCYpXP4A, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresssDypMBK = accounts[4]
		const Fompwd4UCIg = await Fomp.new(addresssDypMBK, {from: accounts[1]});
		const addressmhZBuj2 = "0x0000000000000000000000000000000000000001"
		const addressaf1omcx = accounts[1]
		const addressIjavi3P = accounts[2]
		const uinttJsIU61 = BigInt("1781")
		const addressrBR4owc = accounts[5]
		const uint3VZPan = await Fompwd4UCIg.balanceOf.call(addressmhZBuj2, {from: accounts[0]});
		const uint96Z2jbNYS = await Fompwd4UCIg.getCurrentVotes.call(addressaf1omcx, {from: accounts[3]});
		const uint96dN2FLFW = await Fompwd4UCIg.getCurrentVotes.call(addressIjavi3P, {from: accounts[0]});
		const boolYCUKGbp = await Fompwd4UCIg.approve.call(addressrBR4owc, uinttJsIU61, {from: accounts[1]});

		assert.equal(boolYCUKGbp, true)
		assert.equal(uint3VZPan, BigInt("0"))
		assert.equal(uint96Z2jbNYS, BigInt("0"))
		assert.equal(uint96dN2FLFW, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressB3Di1LK = accounts[4]
		const FomppNDF1Bu = await Fomp.new(addressB3Di1LK, {from: accounts[3]});
		const uintq422D6p = BigInt("1920")
		const addressXQ0kt1 = accounts[1]
		const addressdfZXSLP = accounts[2]
		const uintI9eGl8u = BigInt("1590")
		const addressLf8nLWg = accounts[2]
		const uint96XgGGvAD = await FomppNDF1Bu.getPriorVotes.call(addressXQ0kt1, uintq422D6p, {from: accounts[2]});
		const addressYVywCRO = await FomppNDF1Bu.delegate.call(addressdfZXSLP, {from: accounts[3]});
		const boollHmEX3Y = await FomppNDF1Bu.transfer.call(addressLf8nLWg, uintI9eGl8u, {from: accounts[3]});

		await expect(FomppNDF1Bu.getPriorVotes.call(addressXQ0kt1, uintq422D6p, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressGAbYta3 = accounts[3]
		const FompNFNs28l = await Fomp.new(addressGAbYta3, {from: accounts[2]});
		const uintheFvQPG = BigInt("1428")
		const addressmh0uXLl = accounts[2]
		const addressO2gRCrS = accounts[3]
		const addressODrsTNw = accounts[1]
		const addressUjJxdxf = accounts[1]
		const uintxXiMT3V = BigInt("1754")
		const addressUNYPF7b = "0x0000000000000000000000000000000000000001"
		const addressKCmApvi = accounts[4]
		const uintNV6SkfF = BigInt("101")
		const addresssT8kYkw = accounts[5]
		const addressFyYWWmm = accounts[0]
		const uintDwwxA1T = BigInt("16")
		const addressgRXeD0y = accounts[3]
		const boolyqGFpV6 = await FompNFNs28l.transferFrom.call(addressO2gRCrS, addressmh0uXLl, uintheFvQPG, {from: accounts[3]});
		const uintmI5bpX4 = await FompNFNs28l.allowance.call(addressUjJxdxf, addressODrsTNw, {from: accounts[4]});
		const boolZDDok2U = await FompNFNs28l.transferFrom.call(addressKCmApvi, addressUNYPF7b, uintxXiMT3V, {from: accounts[4]});
		const boolQqicxxj = await FompNFNs28l.transferFrom.call(addressFyYWWmm, addresssT8kYkw, uintNV6SkfF, {from: accounts[1]});
		const boolszZ3YVz = await FompNFNs28l.approve.call(addressgRXeD0y, uintDwwxA1T, {from: accounts[3]});

		assert.equal(boolyqGFpV6, true)
		assert.equal(uintmI5bpX4, BigInt("0"))
		await expect(FompNFNs28l.transferFrom.call(addressKCmApvi, addressUNYPF7b, uintxXiMT3V, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressA7FfNQo = accounts[3]
		const FompgQ0Ald3 = await Fomp.new(addressA7FfNQo, {from: "0x0000000000000000000000000000000000000001"});
		const uintmn0cprH = BigInt("137")
		const addressWQyGl4B = "0x0000000000000000000000000000000000000001"
		const uintXkqKLPl = BigInt("927")
		const addresskYAUsQ3 = accounts[0]
		const addressKz004sG = accounts[1]
		const uintcLqNKtL = BigInt("779")
		const addressMlfWBgY = "0x0000000000000000000000000000000000000001"
		const byte6ka7vk = "0x0d121d1705121d16160f1904001b0e01180a0c06060e051c13130b0413080216"
		const bytevx6P3w = "0x0f1806161601111817170502131d17020109080f051a200115010c0b06200201"
		const uintXaOWHr = BigInt("26")
		const uinttxEB5l7 = BigInt("1877")
		const uintl6Y3lu0 = BigInt("1436")
		const addressyUEi7hX = "0x0000000000000000000000000000000000000001"
		const boolL9mIZY4 = await FompgQ0Ald3.transfer.call(addressWQyGl4B, uintmn0cprH, {from: accounts[4]});
		const booli2ho9fx = await FompgQ0Ald3.transferFrom.call(addressKz004sG, addresskYAUsQ3, uintXkqKLPl, {from: accounts[0]});
		const boolfAyrEax = await FompgQ0Ald3.approve.call(addressMlfWBgY, uintcLqNKtL, {from: accounts[3]});
		const addressqpxU8mt = await FompgQ0Ald3.delegateBySig.call(addressyUEi7hX, uintl6Y3lu0, uinttxEB5l7, uintXaOWHr, bytevx6P3w, byte6ka7vk, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Fomp', async () => {
		const addresskRDmdTw = accounts[4]
		const FompMwaEGpE = await Fomp.new(addresskRDmdTw, {from: accounts[5]});
		const addressZ5FQTBt = accounts[3]
		const addressh5nFfK = accounts[1]
		const uint1sprBL = BigInt("1117")
		const addressLJdkV7N = accounts[3]
		const addressL3iUvGU = accounts[4]
		const addressLsxZqzW = "0x0000000000000000000000000000000000000001"
		const uintMKpLmf = BigInt("1633")
		const addressDzvcm6 = accounts[5]
		const addressFwTATB = await FompMwaEGpE.delegate.call(addressZ5FQTBt, {from: accounts[2]});
		const addressNUnXms5 = await FompMwaEGpE.delegate.call(addressh5nFfK, {from: accounts[4]});
		const uint96RrB3nQ1 = await FompMwaEGpE.getPriorVotes.call(addressLJdkV7N, uint1sprBL, {from: accounts[4]});
		const addressUgNGb29 = await FompMwaEGpE.delegate.call(addressL3iUvGU, {from: accounts[0]});
		const addressMC4gnWf = await FompMwaEGpE.delegate.call(addressLsxZqzW, {from: accounts[2]});
		const uint96HWkdNS = await FompMwaEGpE.getPriorVotes.call(addressDzvcm6, uintMKpLmf, {from: accounts[0]});

		await expect(FompMwaEGpE.getPriorVotes.call(addressLJdkV7N, uint1sprBL, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressamXXepb = accounts[4]
		const FomppNDF1Bu = await Fomp.new(addressamXXepb, {from: accounts[3]});
		const uintDyDl4en = BigInt("63")
		const addressmUZD9UV = accounts[2]
		const uintmNdEGIN = BigInt("1128")
		const addressxNIkVk = accounts[1]
		const uint96vSDjAXg = await FomppNDF1Bu.getPriorVotes.call(addressmUZD9UV, uintDyDl4en, {from: accounts[4]});
		const uint96XgGGvAD = await FomppNDF1Bu.getPriorVotes.call(addressxNIkVk, uintmNdEGIN, {from: accounts[2]});

		assert.equal(uint96vSDjAXg, BigInt("0"))
		await expect(FomppNDF1Bu.getPriorVotes.call(addressxNIkVk, uintmNdEGIN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressYwXnIp9 = accounts[4]
		const FomppNDF1Bu = await Fomp.new(addressYwXnIp9, {from: accounts[3]});
		const byteCvEqETp = "0x13100a1d0e110503040b090509041c0501031f19200907160c06011d07050b1c"
		const bytebobmL8v = "0x1a1e1c10190d100c000f0302031d19081c0902000f0e160d1b031c0c0a000a0b"
		const uintlYSfaQE = BigInt("27")
		const uintuigWFLI = BigInt("729")
		const uintkEubHVB = BigInt("435")
		const addresshUOUg4d = accounts[0]
		const uintXaGWQMV = BigInt("77")
		const addresswIFA4vY = accounts[3]
		const address2Gzpat = await FomppNDF1Bu.delegateBySig.call(addresshUOUg4d, uintkEubHVB, uintuigWFLI, uintlYSfaQE, bytebobmL8v, byteCvEqETp, {from: accounts[1]});
		const uint96vSDjAXg = await FomppNDF1Bu.getPriorVotes.call(addresswIFA4vY, uintXaGWQMV, {from: accounts[4]});

		await expect(FomppNDF1Bu.delegateBySig.call(addresshUOUg4d, uintkEubHVB, uintuigWFLI, uintlYSfaQE, bytebobmL8v, byteCvEqETp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})