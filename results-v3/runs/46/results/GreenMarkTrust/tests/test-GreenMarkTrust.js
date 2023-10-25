const GreenMarkTrust = artifacts.require("GreenMarkTrust");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('GreenMarkTrust', (accounts) => {
	it('test for GreenMarkTrust', async () => {
		const uintIIW0EcC = BigInt("1206")
		const stringpQtk2TJ = "UwAGeGlxbXiwk7OHWmAp5nZ8V82ODICBCIhfQUaeFXSFMTVCFbcoZ4gDdDtLPDpSRjYkSfH9jFGwJxPpI2oS0kDQx"
		const stringn6VUqIr = "fidSz1sOhEmebIPXU6cJnLjt4W5fKd8D4QdC6UREmwo8Eqvihgm4ieCCxMQoKq1xBudZfto3wx0m"
		const GreenMarkTrustUR8sMdy = await GreenMarkTrust.new(uintIIW0EcC, stringpQtk2TJ, stringn6VUqIr, {from: accounts[1]});
		const uintEmUOJN9 = BigInt("939")
		const byteVJqEc7 = "0x1705181e180e18000404160707140e0c18050207070b171d1b1a071c020904"
		const uintZISOr0I = BigInt("552")
		const addressDsNteXM = accounts[3]
		const byteToNFKww = "0x010518070e0406131f14011519151109"
		const uintKJAx8k = BigInt("1007")
		const addressucAGHZH = accounts[5]
		const uintgsG71U2 = BigInt("1154")
		const addressH2RPcEt = accounts[1]
		const boolmJzLQUl = await GreenMarkTrustUR8sMdy.burn.call(uintEmUOJN9, {from: accounts[4]});
		const booltka482 = await GreenMarkTrustUR8sMdy.approveAndCall.call(addressDsNteXM, uintZISOr0I, byteVJqEc7, {from: accounts[0]});
		const boolLMsP0JE = await GreenMarkTrustUR8sMdy.approveAndCall.call(addressucAGHZH, uintKJAx8k, byteToNFKww, {from: accounts[0]});
		const boolS9ggqK = await GreenMarkTrustUR8sMdy.transfer.call(addressH2RPcEt, uintgsG71U2, {from: accounts[4]});

		await expect(GreenMarkTrustUR8sMdy.burn.call(uintEmUOJN9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintQFQqgD3 = BigInt("785")
		const stringEyejeyO = "iqPurvjwjUpAm7ppWYm"
		const stringzDmUJI = "UzXJczOosU1aZio"
		const GreenMarkTrustxJOLu0w = await GreenMarkTrust.new(uintQFQqgD3, stringEyejeyO, stringzDmUJI, {from: "0x0000000000000000000000000000000000000001"});
		const uintYavRLbk = BigInt("1870")
		const addressqfdJtT3 = accounts[5]
		const uintIqhquaD = BigInt("618")
		const uintU5SP4f = BigInt("72")
		const addresswMM59Ym = accounts[4]
		const uintL8INJ5K = BigInt("1716")
		const addressMTllNd = accounts[0]
		const addresswJCI3Hc = accounts[5]
		const boolo2IUVNd = await GreenMarkTrustxJOLu0w.approve.call(addressqfdJtT3, uintYavRLbk, {from: "0x0000000000000000000000000000000000000001"});
		const boolSr8Kjpo = await GreenMarkTrustxJOLu0w.burn.call(uintIqhquaD, {from: accounts[1]});
		const boolvJplpSR = await GreenMarkTrustxJOLu0w.approve.call(addresswMM59Ym, uintU5SP4f, {from: accounts[4]});
		const bool5J07rJ = await GreenMarkTrustxJOLu0w.transferFrom.call(addresswJCI3Hc, addressMTllNd, uintL8INJ5K, {from: accounts[2]});
	});

	it('test for GreenMarkTrust', async () => {
		const uintrjrV1zI = BigInt("1015")
		const stringNzA3Tw9 = "coI7nS5Nx4UQM26"
		const stringT0MaZBL = "wfDTqXQbR8okTTkU7P1L8gpMSOcfzymUESN8ofz4iiI0Tz5kaJAaQfbE3k3hesChHqCzQB1qqwibjjxDTHHFNnbsiMv52zcR"
		const GreenMarkTrustccTSFPA = await GreenMarkTrust.new(uintrjrV1zI, stringNzA3Tw9, stringT0MaZBL, {from: accounts[3]});
		const uintVLQ7n8h = BigInt("1634")
		const addressqIIb4HJ = accounts[3]
		const uintNtxwdL9 = BigInt("1164")
		const addressTG7b00Z = accounts[2]
		const addressA9kpye1 = accounts[1]
		const uintBdM3iTU = BigInt("1853")
		const addressbwK1qJf = "0x0000000000000000000000000000000000000001"
		const uintKPe8kzG = BigInt("277")
		const addresskQEtAv8 = accounts[0]
		const uintQlVglek = BigInt("1854")
		const booloxvYUg = await GreenMarkTrustccTSFPA.transfer.call(addressqIIb4HJ, uintVLQ7n8h, {from: accounts[0]});
		const boolo6YuNYp = await GreenMarkTrustccTSFPA.transferFrom.call(addressA9kpye1, addressTG7b00Z, uintNtxwdL9, {from: accounts[3]});
		const boolswbgLP = await GreenMarkTrustccTSFPA.burnFrom.call(addressbwK1qJf, uintBdM3iTU, {from: accounts[1]});
		const boolc5ZTW8a = await GreenMarkTrustccTSFPA.transfer.call(addresskQEtAv8, uintKPe8kzG, {from: accounts[3]});
		const boolChVPMq2 = await GreenMarkTrustccTSFPA.burn.call(uintQlVglek, {from: accounts[0]});

		await expect(GreenMarkTrustccTSFPA.transfer.call(addressqIIb4HJ, uintVLQ7n8h, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintvxjD6Le = BigInt("1403")
		const stringmiSo0O = "yHqp3jAd3wwNq4pnDPxpizegUsEDVgvNXWDiGP6qwttTeLw2dFBFscIxXo0y6R"
		const stringV2z9EID = "MtHPP2A3ghWOOxptSbTaAHK7AWECq563VMZw"
		const GreenMarkTrustX4KBvKB = await GreenMarkTrust.new(uintvxjD6Le, stringmiSo0O, stringV2z9EID, {from: accounts[1]});
		const bytefwpV6SH = "0x0214071a021d0916030a0d"
		const uintgfU9OoF = BigInt("1402")
		const addressINV1ZOz = accounts[2]
		const byteGSzO8Jw = "0x150a0b0c0a1215180d201308091e0f1818150e040c100401031d"
		const uintE3vJYKr = BigInt("1586")
		const addresspuWK6rn = accounts[3]
		const uintJdDzRpu = BigInt("442")
		const uintPexFyZB = BigInt("1530")
		const addressi7YE6UD = accounts[3]
		const bytepnF1DFo = "0x2014031802051115170d1904081a190c1c1710110603"
		const uinthxnOfOb = BigInt("1327")
		const addressCVuwAzf = accounts[0]
		const uintX3BdvBL = BigInt("266")
		const addressYCiiEhx = accounts[1]
		const addressYtdlnU7 = accounts[5]
		const boolIWW9Upr = await GreenMarkTrustX4KBvKB.approveAndCall.call(addressINV1ZOz, uintgfU9OoF, bytefwpV6SH, {from: accounts[3]});
		const boolba9Awun = await GreenMarkTrustX4KBvKB.approveAndCall.call(addresspuWK6rn, uintE3vJYKr, byteGSzO8Jw, {from: accounts[3]});
		const booli4zLDz = await GreenMarkTrustX4KBvKB.burn.call(uintJdDzRpu, {from: accounts[3]});
		const boolYJB9io8 = await GreenMarkTrustX4KBvKB.burnFrom.call(addressi7YE6UD, uintPexFyZB, {from: accounts[0]});
		const boolpYgBux6 = await GreenMarkTrustX4KBvKB.approveAndCall.call(addressCVuwAzf, uinthxnOfOb, bytepnF1DFo, {from: accounts[2]});
		const booleTg2ZAB = await GreenMarkTrustX4KBvKB.transferFrom.call(addressYtdlnU7, addressYCiiEhx, uintX3BdvBL, {from: accounts[4]});

		await expect(GreenMarkTrustX4KBvKB.approveAndCall.call(addressINV1ZOz, uintgfU9OoF, bytefwpV6SH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uinty2yohNL = BigInt("316")
		const stringwOO7JlE = "A7iLNjlmco7xPLVTwo81NG5Xm4hnXszqekfQmQnP5pkUTgLDcndMoWbWoir9Kgce2XpmXMPdRfP5DlzOXOcMj98tHvoFZHh4Hn"
		const stringg2KsjMa = "cE1Wg1yQAK6nJZlGU9lNM0DYrJzVj1ZL7OXnD3bz76S9YFMCvcJ5h6xdmsI66PNF9I9JLP9FwGYhnJ4LN7UdgigLPEGeXU"
		const GreenMarkTrustRPXo2b4 = await GreenMarkTrust.new(uinty2yohNL, stringwOO7JlE, stringg2KsjMa, {from: accounts[1]});
		const uintnN4zTeS = BigInt("1787")
		const addressdpFi6N7 = accounts[3]
		const addressNtBJ4tV = accounts[3]
		const byteuSpQgyU = "0x1f1f1b"
		const uintqDv260n = BigInt("1378")
		const addressz9DPdu = accounts[3]
		const uintVxKztso = BigInt("1596")
		const addressxmih2tg = accounts[3]
		const uintJwMlrww = BigInt("684")
		const addressH7tWR23 = "0x0000000000000000000000000000000000000001"
		const uintIy105hu = BigInt("21")
		const addressB2cTZ6s = accounts[3]
		const addressd8TUg1 = accounts[1]
		const boolbsPcrWU = await GreenMarkTrustRPXo2b4.transferFrom.call(addressNtBJ4tV, addressdpFi6N7, uintnN4zTeS, {from: accounts[4]});
		const boolxUPcqJQ = await GreenMarkTrustRPXo2b4.approveAndCall.call(addressz9DPdu, uintqDv260n, byteuSpQgyU, {from: accounts[2]});
		const boolji9PUYf = await GreenMarkTrustRPXo2b4.approve.call(addressxmih2tg, uintVxKztso, {from: accounts[5]});
		const boolY9LEu9C = await GreenMarkTrustRPXo2b4.transfer.call(addressH7tWR23, uintJwMlrww, {from: accounts[1]});
		const boolDwGZM4D = await GreenMarkTrustRPXo2b4.transferFrom.call(addressd8TUg1, addressB2cTZ6s, uintIy105hu, {from: accounts[2]});

		await expect(GreenMarkTrustRPXo2b4.transferFrom.call(addressNtBJ4tV, addressdpFi6N7, uintnN4zTeS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for GreenMarkTrust', async () => {
		const uintqBA5dUZ = BigInt("1502")
		const stringoEKFjwk = "n5FlHsVZc5r7nYSbrFE0K"
		const stringpXnqZbJ = "LkVa1NdOeC3GdBTqW0SHGM39Y00JuvNta0gkc1dfEpx7R6c6"
		const GreenMarkTrustjpvRz8C = await GreenMarkTrust.new(uintqBA5dUZ, stringoEKFjwk, stringpXnqZbJ, {from: accounts[5]});
		const uintZz9DTKG = BigInt("2011")
		const addressR5q0RZP = "0x0000000000000000000000000000000000000001"
		const byteGPxKRK3 = "0x081c1e0516171e031504100d0e1002040419051a1f1719160c1a05020813"
		const uinttcqWBw7 = BigInt("7")
		const addressg1a6aHF = accounts[0]
		const uintuwk40b = BigInt("901")
		const boolnqSWDge = await GreenMarkTrustjpvRz8C.burnFrom.call(addressR5q0RZP, uintZz9DTKG, {from: accounts[4]});
		const boolNzMnpcr = await GreenMarkTrustjpvRz8C.approveAndCall.call(addressg1a6aHF, uinttcqWBw7, byteGPxKRK3, {from: "0x0000000000000000000000000000000000000001"});
		const boolgxJjSwQ = await GreenMarkTrustjpvRz8C.burn.call(uintuwk40b, {from: accounts[3]});

		await expect(GreenMarkTrustjpvRz8C.burnFrom.call(addressR5q0RZP, uintZz9DTKG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})