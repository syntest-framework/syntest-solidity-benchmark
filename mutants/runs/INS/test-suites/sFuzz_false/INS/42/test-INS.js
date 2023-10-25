const INS = artifacts.require("INS");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('INS', (accounts) => {
	it('test for INS', async () => {
		const uintjqML9ve = BigInt("277")
		const stringFH9SEZ2 = "vRsoVyECAXJDZKpPqCEDiUNF7YwtwfB8HlPUVaUF6ttHksfMEBam28KBC53KI1FNBtHbsy6PirH0SF"
		const stringFe3Z3Yh = "MJaFr"
		const INSuMsgJH8 = await INS.new(uintjqML9ve, stringFH9SEZ2, stringFe3Z3Yh, {from: accounts[4]});
		const uinth67LgHe = BigInt("1310")
		const uintE7040JO = BigInt("784")
		const uintHP75xMR = BigInt("1787")
		const uintSv1ltxB = BigInt("1775")
		const byteRkU6sML = "0x131919140610110c1e1a1608151f09111403191513011d1f1e1b19010c"
		const uintPPjho1b = BigInt("1076")
		const addressaIPUq9 = accounts[3]
		const boolTP8pjuU = await INSuMsgJH8.burn.call(uinth67LgHe, {from: accounts[1]});
		const boolDlQtUeI = await INSuMsgJH8.burn.call(uintE7040JO, {from: accounts[2]});
		const boolLcpoL5W = await INSuMsgJH8.burn.call(uintHP75xMR, {from: accounts[0]});
		const boolo78eUa1 = await INSuMsgJH8.burn.call(uintSv1ltxB, {from: accounts[0]});
		const boolBFnitoy = await INSuMsgJH8.approveAndCall.call(addressaIPUq9, uintPPjho1b, byteRkU6sML, {from: accounts[1]});

		await expect(INSuMsgJH8.burn.call(uinth67LgHe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintypNyvF = BigInt("928")
		const string1HcWy6 = "GAN8wyqyiZ81hprHga"
		const stringxOYlpxT = "fMGkGZdixlb3pPkCFyUnPOEp0pEOTAxihcQC6RDOk3xuI2qlNJ7WxnkWQIEwN09QoLU6cQn"
		const INSPfDlUxj = await INS.new(uintypNyvF, string1HcWy6, stringxOYlpxT, {from: accounts[0]});
		const uintr3tq4u = BigInt("1318")
		const addresskipGBKb = accounts[0]
		const uintytD8j9 = BigInt("1493")
		const address5vAjdp = accounts[1]
		const byteXco03vr = "0x19121d"
		const uintA3rFqk9 = BigInt("1487")
		const addressFI1jfGE = accounts[5]
		const uintK6S8mvS = BigInt("676")
		const address0WHdZh = accounts[3]
		const addressEzYQPvh = accounts[2]
		const uintLWejNHp = BigInt("1436")
		const booluJ8r1em = await INSPfDlUxj.transfer.call(addresskipGBKb, uintr3tq4u, {from: accounts[5]});
		const boolMzbkIN7 = await INSPfDlUxj.approve.call(address5vAjdp, uintytD8j9, {from: accounts[0]});
		const boolh9KD2Zx = await INSPfDlUxj.approveAndCall.call(addressFI1jfGE, uintA3rFqk9, byteXco03vr, {from: accounts[3]});
		const boolhRbophO = await INSPfDlUxj.transferFrom.call(addressEzYQPvh, address0WHdZh, uintK6S8mvS, {from: accounts[1]});
		const boolSrjIyf = await INSPfDlUxj.burn.call(uintLWejNHp, {from: accounts[1]});

		await expect(INSPfDlUxj.transfer.call(addresskipGBKb, uintr3tq4u, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uint9wPLrO = BigInt("70")
		const stringr2j7xn = "gPdygqd0mgdJW9ajXGd2tEZ77A8RJR6"
		const stringB1w3mGD = "F6LsFdYdEnivxXBIqwwbpRJGIahLWa9ntfnGY8agyWiZ"
		const INShcfK1xu = await INS.new(uint9wPLrO, stringr2j7xn, stringB1w3mGD, {from: accounts[0]});
		const uintscQr0Vw = BigInt("899")
		const addressKVIfUDD = accounts[2]
		const uintMtdXKT9 = BigInt("292")
		const addresspw5X0NQ = "0x0000000000000000000000000000000000000001"
		const addresst7YiSNE = accounts[0]
		const boolTDPtRLP = await INShcfK1xu.approve.call(addressKVIfUDD, uintscQr0Vw, {from: accounts[2]});
		const boolW0leEzz = await INShcfK1xu.transferFrom.call(addresst7YiSNE, addresspw5X0NQ, uintMtdXKT9, {from: accounts[1]});

		assert.equal(boolTDPtRLP, true)
		await expect(INShcfK1xu.transferFrom.call(addresst7YiSNE, addresspw5X0NQ, uintMtdXKT9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintHJtaEr = BigInt("1809")
		const stringI07S67 = "KMm2g2LSKkQ18EbamFsD2PJQ"
		const stringDCl0oME = "eW5KeXokcwiYOoM1oooyIolzniiaSnayLmrjYmRfWSnfx5l39YYGpF0JS5LCOCnAZBlgDWGc8GU4U3OHjbi9bvKahnkx6GjqRg"
		const INSw0UOXGT = await INS.new(uintHJtaEr, stringI07S67, stringDCl0oME, {from: accounts[3]});
		const byteJNohzi = "0x011510201e0f1b1207061107191d08000d01181417141611081d1e"
		const uintDtvBkWv = BigInt("1817")
		const addresseEciSOZ = accounts[1]
		const uintAQh5eJ4 = BigInt("814")
		const addressaRfidv = "0x0000000000000000000000000000000000000001"
		const uintaPviKcV = BigInt("289")
		const byteU48KCPa = "0x0c08151c051c151c06120a0f"
		const uintSdgNdY8 = BigInt("417")
		const addresskM6J7jM = accounts[3]
		const boolVgA9k3P = await INSw0UOXGT.approveAndCall.call(addresseEciSOZ, uintDtvBkWv, byteJNohzi, {from: accounts[4]});
		const boolpms3Wt3 = await INSw0UOXGT.transfer.call(addressaRfidv, uintAQh5eJ4, {from: accounts[4]});
		const boolqVTN61c = await INSw0UOXGT.burn.call(uintaPviKcV, {from: accounts[2]});
		const bool6NgWS1 = await INSw0UOXGT.approveAndCall.call(addresskM6J7jM, uintSdgNdY8, byteU48KCPa, {from: accounts[5]});

		await expect(INSw0UOXGT.approveAndCall.call(addresseEciSOZ, uintDtvBkWv, byteJNohzi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uintFLH46vB = BigInt("150")
		const stringy7Tv5Is = "kaSzfqHMIxhyssAcSYvnqaRCoBtHMEVoTGKdGcsPEeqhL1VB1H1kMo3peXf6qvNH9TR2IVXz"
		const stringT8KcRQw = "g51ou4d7eHbTrmI9qcHFRyq1W7S0TnZJUggipkrQfM3cYeKMjvtom6"
		const INSYCdOhr = await INS.new(uintFLH46vB, stringy7Tv5Is, stringT8KcRQw, {from: accounts[2]});
		const uintCnyKdKC = BigInt("1743")
		const addressu14f150 = accounts[4]
		const uintBLXiFQf = BigInt("492")
		const addresscDOSEVW = accounts[3]
		const uint1QUdOF = BigInt("905")
		const byteSXpNfm = "0x1d0a1605010903"
		const uintJXz8QQl = BigInt("1490")
		const addressvniH4lV = "0x0000000000000000000000000000000000000001"
		const boolVAWhVAU = await INSYCdOhr.burnFrom.call(addressu14f150, uintCnyKdKC, {from: accounts[1]});
		const booliqfrAi3 = await INSYCdOhr.burnFrom.call(addresscDOSEVW, uintBLXiFQf, {from: accounts[2]});
		const boolOJM1goB = await INSYCdOhr.burn.call(uint1QUdOF, {from: accounts[3]});
		const boolZ5MBF1e = await INSYCdOhr.approveAndCall.call(addressvniH4lV, uintJXz8QQl, byteSXpNfm, {from: accounts[5]});

		await expect(INSYCdOhr.burnFrom.call(addressu14f150, uintCnyKdKC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for INS', async () => {
		const uinthRbGaSm = BigInt("662")
		const stringbO8EcJK = "hLGGqRvgCOCMjZPIRgkLP8vkYC3iOm2LkLezp2OeI98yzSwGfXzs2z7SDsNXtHNFQWQMumR"
		const stringpGc2ZWL = "zjoAv3AEanLvopACvSADNjcoLARsUnsoVjqwYmWUABRr5IAWxO69JtXSN6ubTkGmrWOL6dRBh8Tj0rd4HpHPTzQ6I6ol"
		const INSNfWhTD = await INS.new(uinthRbGaSm, stringbO8EcJK, stringpGc2ZWL, {from: "0x0000000000000000000000000000000000000001"});
		const uintUVQ8FR5 = BigInt("812")
		const addressysKDiXw = accounts[0]
		const uintaEdK5n = BigInt("1495")
		const uintZwpGkH7 = BigInt("1361")
		const addressO90OrHV = accounts[0]
		const byteL1ROiZ1 = "0x0f17131d1f1f0b091e0f"
		const uintJQW5ym = BigInt("1980")
		const addressrXYGODY = accounts[1]
		const booloA3fzAr = await INSNfWhTD.approve.call(addressysKDiXw, uintUVQ8FR5, {from: accounts[0]});
		const boolACIikFO = await INSNfWhTD.burn.call(uintaEdK5n, {from: accounts[3]});
		const boolJMFEiVj = await INSNfWhTD.approve.call(addressO90OrHV, uintZwpGkH7, {from: accounts[1]});
		const boolbspQPV = await INSNfWhTD.approveAndCall.call(addressrXYGODY, uintJQW5ym, byteL1ROiZ1, {from: accounts[0]});
	});
})