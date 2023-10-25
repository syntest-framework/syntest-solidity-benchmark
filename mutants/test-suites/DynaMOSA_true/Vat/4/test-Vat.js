const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatiVhhmWv = await Vat.new({from: accounts[2]});
		const intaKzcc7B = BigInt("1320")
		const intNwSSbg1 = BigInt("-1057")
		const addresst1kATbT = accounts[1]
		const addressUsRv1wD = accounts[3]
		const addressRNtm0bm = accounts[2]
		const bytesRvFcyn = "0x0c1e10110b051d0e1c13140a0617071a1d190d2014131d0d1215190d080a0c19"
		const addresslpE1181 = accounts[0]
		const intySSfhV = BigInt("1526")
		const inthNDKeqM = BigInt("-26")
		const addressBIdlWXn = accounts[2]
		const addressF2uzv4S = accounts[4]
		const addressAiCFyZe = accounts[0]
		const bytegrjNbjO = "0x131c0f09171f02150f06160d150a0c030b17031a1311081303080b1401110f0b"
//		const bytes32dhS2qS = await VatiVhhmWv.frob.call(bytesRvFcyn, addressRNtm0bm, addressUsRv1wD, addresst1kATbT, intNwSSbg1, intaKzcc7B, {from: "0x0000000000000000000000000000000000000001"});
//		const addressUpn8h4h = await VatiVhhmWv.deny.call(addresslpE1181, {from: accounts[0]});
//		const bytes32R9Kgjsu = await VatiVhhmWv.grab.call(bytegrjNbjO, addressAiCFyZe, addressF2uzv4S, addressBIdlWXn, inthNDKeqM, intySSfhV, {from: accounts[5]});
//		await VatiVhhmWv.auth.call({from: accounts[3]});

		await expect(VatiVhhmWv.frob.call(bytesRvFcyn, addressRNtm0bm, addressUsRv1wD, addresst1kATbT, intNwSSbg1, intaKzcc7B, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatEry8I8k = await Vat.new({from: accounts[1]});
		const uintWmPvIY = BigInt("14")
		const intMmhY5x = BigInt("-1277")
		const intDcAkNG8 = BigInt("-1769")
		const addressENYjxjf = accounts[5]
		const addressquiJy9u = accounts[4]
		const addressULggsMH = accounts[2]
		const bytekwtTHNn = "0x1e0506070e0c200e170403081e04040b110803110d1813051b12170408150f1a"
//		const uintZh6BPst = await VatEry8I8k.heal.call(uintWmPvIY, {from: accounts[4]});
//		const bytes32lzyNihm = await VatEry8I8k.grab.call(bytekwtTHNn, addressULggsMH, addressquiJy9u, addressENYjxjf, intDcAkNG8, intMmhY5x, {from: accounts[4]});

		await expect(VatEry8I8k.heal.call(uintWmPvIY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXoY8A8n = await Vat.new({from: accounts[3]});
		const intVbpbv1V = BigInt("1685")
		const addresslWz8ciz = accounts[5]
		const byteqr5fEA = "0x1d14141306200c150c11191b16000719041d120602131407131506151718061b"
		const uintUikmNeX = BigInt("1531")
		const addressP3wvJq = accounts[3]
		const address3wuCMP = accounts[2]
		const addressWtYKL92 = accounts[0]
		const uintp0OPnhf = BigInt("1906")
		const addressgfda926 = accounts[2]
		const addresshh5Cg7S = accounts[4]
		const intiTh3QTd = BigInt("279")
		const intwcwp9Sh = BigInt("618")
		const addressQZcDTnx = accounts[1]
		const addresslL3sNjZ = "0x0000000000000000000000000000000000000001"
		const addressIgggBSR = accounts[2]
		const byteJoJFki5 = "0x110f1c0e010d150714151d1c161e0702171703190c051c1e140f180a2019010b"
		const addresspLVdq7X = accounts[1]
//		const bytes32pJFORCt = await VatXoY8A8n.slip.call(byteqr5fEA, addresslWz8ciz, intVbpbv1V, {from: accounts[1]});
//		const addressIZ9ZnPB = await VatXoY8A8n.move.call(address3wuCMP, addressP3wvJq, uintUikmNeX, {from: accounts[2]});
//		const addressS9WrHa = await VatXoY8A8n.deny.call(addressWtYKL92, {from: accounts[0]});
//		const addressrh0wg6V = await VatXoY8A8n.move.call(addresshh5Cg7S, addressgfda926, uintp0OPnhf, {from: accounts[2]});
//		const bytes32aseM9H1 = await VatXoY8A8n.grab.call(byteJoJFki5, addressIgggBSR, addresslL3sNjZ, addressQZcDTnx, intwcwp9Sh, intiTh3QTd, {from: accounts[2]});
//		const addressOCi4csU = await VatXoY8A8n.rely.call(addresspLVdq7X, {from: accounts[4]});

		await expect(VatXoY8A8n.slip.call(byteqr5fEA, addresslWz8ciz, intVbpbv1V, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatFXVa9M3 = await Vat.new({from: accounts[3]});
		const addressrKQxRw = accounts[1]
		const intLESo3Xr = BigInt("-1258")
		const intKYwtuQZ = BigInt("-1277")
		const address8LpNsv = "0x0000000000000000000000000000000000000001"
		const addressjGJE2g0 = accounts[2]
		const byteTK9RoVg = "0x010205100d031d0d101c0b0a0609090f1709170f0d091b020b16011f1c1c101a"
		const addressqrrBjvy = await VatFXVa9M3.rely.call(addressrKQxRw, {from: accounts[3]});
//		const bytes32R1tlDVs = await VatFXVa9M3.fork.call(byteTK9RoVg, addressjGJE2g0, address8LpNsv, intKYwtuQZ, intLESo3Xr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatFXVa9M3.fork.call(byteTK9RoVg, addressjGJE2g0, address8LpNsv, intKYwtuQZ, intLESo3Xr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatmWslLwp = await Vat.new({from: accounts[1]});
		const addressb8xW0fA = accounts[0]
		const byteDYSoyZ0 = "0x1d140a1e0708141f040e1a07011b021b18020e12161c0d0e1313021a1d0f1d0e"
		const uintJdF7CVL = BigInt("1640")
		const byteXSvxIEC = "0x1e00160c13130f11140d1f1e0103110c081a15021a200b180e1e1a1d111d0604"
		const byteqSnmu52 = "0x0d16031e0304010014171c1e121f180c1815151a0a0f19121c010906130e2007"
		const addressI5ifh8 = await VatmWslLwp.hope.call(addressb8xW0fA, {from: accounts[1]});
//		await VatmWslLwp.auth.call({from: accounts[2]});
//		const bytes32u2V6X5W = await VatmWslLwp.init.call(byteDYSoyZ0, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32suGU38k = await VatmWslLwp.file.call(byteqSnmu52, byteXSvxIEC, uintJdF7CVL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatmWslLwp.auth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatbVIdkCo = await Vat.new({from: accounts[3]});
		const addressygNw2jw = accounts[4]
		const intQBNpgB0 = BigInt("603")
		const intdk7llga = BigInt("-1379")
		const addresse1P4AE = accounts[1]
		const addresskRV6vAH = accounts[4]
		const byteT7mWJYd = "0x1f151e020b0f05180e140b080e1c0913011d19171b140a0b1b120f120b1d0b16"
		const addressI11e9NI = accounts[1]
		const addressy900cZ = await VatbVIdkCo.nope.call(addressygNw2jw, {from: accounts[1]});
//		await VatbVIdkCo.note.call({from: accounts[2]});
//		const bytes32TFft1lk = await VatbVIdkCo.fork.call(byteT7mWJYd, addresskRV6vAH, addresse1P4AE, intdk7llga, intQBNpgB0, {from: accounts[2]});
//		const addressjCHfa4 = await VatbVIdkCo.nope.call(addressI11e9NI, {from: accounts[3]});

		await expect(VatbVIdkCo.note.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatAQgBLCF = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const byteYESMmI3 = "0x0104171e14010a1816161e1d15091f1b0d0d08161d140a19170f0f1e15041c02"
		const uintmxOj12b = BigInt("758")
		const addresse5O64xM = accounts[2]
		const addressZjbvb9z = accounts[3]
		const uintGgmjeIX = BigInt("84")
		const byteVoTFMtu = "0x10040f051b171e0d170a10170d0216161b05191c191b1604140f1a05090a151c"
		const bytes32GYPygVO = await VatAQgBLCF.init.call(byteYESMmI3, {from: accounts[2]});
		const addressvw6ReUg = await VatAQgBLCF.move.call(addressZjbvb9z, addresse5O64xM, uintmxOj12b, {from: accounts[1]});
		const bytes32W7EuooE = await VatAQgBLCF.file.call(byteVoTFMtu, uintGgmjeIX, {from: accounts[1]});
	});

	it('test for Vat', async () => {
		const VatFXVa9M3 = await Vat.new({from: accounts[3]});
		const addressI0VUgk5 = accounts[5]
		const uintJnAy5Ho = BigInt("1029")
		const addressdXCmswx = accounts[0]
		const addressNcKPezf = accounts[1]
		const byteYPqEqOi = "0x030619180e1e160c1f11081d121f0e040a17131403110109091b1a1c14090c0f"
		const addressqrrBjvy = await VatFXVa9M3.rely.call(addressI0VUgk5, {from: accounts[3]});
//		const bytes32cIxIhPt = await VatFXVa9M3.flux.call(byteYPqEqOi, addressNcKPezf, addressdXCmswx, uintJnAy5Ho, {from: accounts[4]});

		await expect(VatFXVa9M3.flux.call(byteYPqEqOi, addressNcKPezf, addressdXCmswx, uintJnAy5Ho, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatiVhhmWv = await Vat.new({from: accounts[2]});
		const uintBQMiWye = BigInt("1205")
		const addressgJtIioH = accounts[5]
		const addresschPZV1O = "0x0000000000000000000000000000000000000001"
		const intitnOHYV = BigInt("1320")
		const intEotnmKk = BigInt("-1057")
		const addressMMD3W4R = accounts[1]
		const addressqo9HnI8 = accounts[3]
		const addressXhCDhKQ = accounts[2]
		const bytegYimU6r = "0x0c1e10110b051d0e1c13140a0617071a1d190d2014131d0d1215190d080a0c19"
		const addressJA0CWP3 = accounts[0]
//		const addressvIs59ea = await VatiVhhmWv.move.call(addresschPZV1O, addressgJtIioH, uintBQMiWye, {from: accounts[1]});
//		const bytes32dhS2qS = await VatiVhhmWv.frob.call(bytegYimU6r, addressXhCDhKQ, addressqo9HnI8, addressMMD3W4R, intEotnmKk, intitnOHYV, {from: "0x0000000000000000000000000000000000000001"});
//		const addressUpn8h4h = await VatiVhhmWv.deny.call(addressJA0CWP3, {from: accounts[0]});
//		await VatiVhhmWv.auth.call({from: accounts[3]});

		await expect(VatiVhhmWv.move.call(addresschPZV1O, addressgJtIioH, uintBQMiWye, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatZ9FVnSx = await Vat.new({from: accounts[2]});
		const intE1OLKbA = BigInt("-1655")
		const addressmng1jeY = accounts[4]
		const bytenZhvpF = "0x0c1713091d0c03151e1d190a1b1e1205190218010007051e1e0219080602050e"
		const addresszcsz5ry = accounts[2]
//		const bytes32HYKGa1n = await VatZ9FVnSx.slip.call(bytenZhvpF, addressmng1jeY, intE1OLKbA, {from: accounts[2]});
//		const addressQHlBUCi = await VatZ9FVnSx.hope.call(addresszcsz5ry, {from: accounts[3]});

		await expect(VatZ9FVnSx.slip.call(bytenZhvpF, addressmng1jeY, intE1OLKbA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatZ9FVnSx = await Vat.new({from: accounts[2]});
		const addressPjCPgNS = accounts[0]
		const uintXkOV0M = BigInt("1947")
		const addressQH8WAtf = accounts[3]
		const addressorGaO3 = accounts[3]
		const intTkI0B7r = BigInt("-1676")
		const addressRj9WY1 = accounts[4]
		const byteu0AIYCN = "0x0c1713091d0c03151e1d190a1b1e1205190218010007051e1e0219080602050e"
		const addressq4jJ0yf = accounts[4]
		const addressRcKZmyT = await VatZ9FVnSx.deny.call(addressPjCPgNS, {from: accounts[2]});
//		const addresssLMbGT = await VatZ9FVnSx.move.call(addressorGaO3, addressQH8WAtf, uintXkOV0M, {from: accounts[1]});
//		const bytes32HYKGa1n = await VatZ9FVnSx.slip.call(byteu0AIYCN, addressRj9WY1, intTkI0B7r, {from: accounts[2]});
//		const addressQHlBUCi = await VatZ9FVnSx.hope.call(addressq4jJ0yf, {from: accounts[3]});

		await expect(VatZ9FVnSx.move.call(addressorGaO3, addressQH8WAtf, uintXkOV0M, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatFXVa9M3 = await Vat.new({from: accounts[3]});
		const int26N9m0 = BigInt("535")
		const intw33nmki = BigInt("458")
		const addressH2pmwYU = "0x0000000000000000000000000000000000000001"
		const addressqZCI157 = "0x0000000000000000000000000000000000000001"
		const addressmnaU0pW = accounts[1]
		const bytecATYeYI = "0x170d041d1c1c12150e030c1320040b0215051a121b1c04170515051e0f0f070c"
		const intGKGOJLd = BigInt("-1258")
		const intRyPejrk = BigInt("-1277")
		const addressHk38Fwd = "0x0000000000000000000000000000000000000002"
		const addressTLyv3gi = accounts[2]
		const byteEWaEMii = "0x010205100d031d0d101c0b0a0609090f1709170f0d091b020b16011f1c1c101a"
//		const bytes32sKkCQOG = await VatFXVa9M3.grab.call(bytecATYeYI, addressmnaU0pW, addressqZCI157, addressH2pmwYU, intw33nmki, int26N9m0, {from: accounts[3]});
//		const bytes32R1tlDVs = await VatFXVa9M3.fork.call(byteEWaEMii, addressTLyv3gi, addressHk38Fwd, intRyPejrk, intGKGOJLd, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatFXVa9M3.grab.call(bytecATYeYI, addressmnaU0pW, addressqZCI157, addressH2pmwYU, intw33nmki, int26N9m0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatFXVa9M3 = await Vat.new({from: accounts[3]});
		const addressD39LlMZ = accounts[1]
		const addressMKPnTIa = accounts[5]
		const addressxSVAW0G = accounts[0]
		const uintcIqrtvL = BigInt("683")
		const byteVdj3Pr3 = "0x1b101a0f090117181c1e191a0d1c170f0a0c1102060a150b0f110b0c0f131b16"
		const addressqrrBjvy = await VatFXVa9M3.rely.call(addressD39LlMZ, {from: accounts[3]});
		const addressETggLvp = await VatFXVa9M3.nope.call(addressMKPnTIa, {from: accounts[4]});
		const addressR7N26ol = await VatFXVa9M3.nope.call(addressxSVAW0G, {from: accounts[5]});
//		const bytes32mmlr1j = await VatFXVa9M3.file.call(byteVdj3Pr3, uintcIqrtvL, {from: accounts[5]});

		await expect(VatFXVa9M3.file.call(byteVdj3Pr3, uintcIqrtvL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatFXVa9M3 = await Vat.new({from: accounts[3]});
		const uintvOCRLGK = BigInt("740")
		const addresshmpGcjn = accounts[2]
		const addressJ0XtjVj = accounts[5]
		const byterGU7MS8 = "0x0809031d1d03121819091c1710120e140a010319011f07070d1d17200f031f01"
		const uintnFZuFeY = BigInt("275")
		const byteIYGja7U = "0x01051c01010b04180a01011c1c1d06061700100c01201d1f03021d051d160407"
//		const bytes32YIZhtqa = await VatFXVa9M3.flux.call(byterGU7MS8, addressJ0XtjVj, addresshmpGcjn, uintvOCRLGK, {from: accounts[5]});
//		const bytes32PR1Rsiz = await VatFXVa9M3.file.call(byteIYGja7U, uintnFZuFeY, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatFXVa9M3.flux.call(byterGU7MS8, addressJ0XtjVj, addresshmpGcjn, uintvOCRLGK, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatFXVa9M3 = await Vat.new({from: accounts[3]});
		const intaaY2Ulq = BigInt("-1602")
		const addresssBB87Q8 = accounts[0]
		const byteS1y80p = "0x03161c03021f1e131b1d1d161d0b0311071d071d061d1c110c130c161a0d1c1c"
		const bytegSXNcMS = "0x07031a0617121113180d0918120716011f171c1406191f0a1c0d1208001e1e03"
		const intxUJ3cmC = BigInt("-1258")
		const intdHj809j = BigInt("-1274")
		const addressgH0YTl7 = "0x0000000000000000000000000000000000000000"
		const addressZKhA1O = accounts[2]
		const byteuhsshG6 = "0x010205100d031d0d101c0b0a0609090f1709170f0d091b020b16011f1c1c101a"
		const uintMIMoWhU = BigInt("1064")
//		const bytes32wulq1Eo = await VatFXVa9M3.fold.call(byteS1y80p, addresssBB87Q8, intaaY2Ulq, {from: accounts[3]});
//		const bytes32bcxDVWu = await VatFXVa9M3.init.call(bytegSXNcMS, {from: accounts[4]});
//		const bytes32R1tlDVs = await VatFXVa9M3.fork.call(byteuhsshG6, addressZKhA1O, addressgH0YTl7, intdHj809j, intxUJ3cmC, {from: "0x0000000000000000000000000000000000000001"});
//		const uintojLW7Ot = await VatFXVa9M3.heal.call(uintMIMoWhU, {from: accounts[1]});

		await expect(VatFXVa9M3.fold.call(byteS1y80p, addresssBB87Q8, intaaY2Ulq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatiVhhmWv = await Vat.new({from: accounts[2]});
		const addressMDbjp8K = accounts[1]
		const uintmkUmeuX = BigInt("594")
		const addressY3ogxiv = accounts[5]
		const addressqVl46QY = accounts[4]
		const intleA6Zts = BigInt("1320")
		const intZtrpRWv = BigInt("-1057")
		const addressAxdhgI8 = accounts[1]
		const addressEKJJ6ko = accounts[4]
		const addressGUdGHJ = accounts[2]
		const bytewk6kRnW = "0x0c1e10110b051d0e1c13140a0617071a1d190d2014131d0d1215190d080a0c19"
		const addressNwP1NMj = await VatiVhhmWv.nope.call(addressMDbjp8K, {from: accounts[1]});
		const addressJF20vjB = await VatiVhhmWv.suck.call(addressqVl46QY, addressY3ogxiv, uintmkUmeuX, {from: accounts[2]});
//		const bytes32dhS2qS = await VatiVhhmWv.frob.call(bytewk6kRnW, addressGUdGHJ, addressEKJJ6ko, addressAxdhgI8, intZtrpRWv, intleA6Zts, {from: "0x0000000000000000000000000000000000000001"});
//		await VatiVhhmWv.auth.call({from: accounts[3]});

		await expect(VatiVhhmWv.frob.call(bytewk6kRnW, addressGUdGHJ, addressEKJJ6ko, addressAxdhgI8, intZtrpRWv, intleA6Zts, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatiVhhmWv = await Vat.new({from: accounts[2]});
		const byterSpbSQl = "0x0506031f160f11110800081a0c1e041305011b10110b0b18030f1b14110a1501"
		const intl47tylN = BigInt("1320")
		const intQrcmPVR = BigInt("-1057")
		const addressQlcztHx = accounts[1]
		const addressYL7aeA9 = accounts[4]
		const addressxhqY98O = accounts[3]
		const byteztkUsNj = "0x0c1e10110b051d0e1c13140a0617071a1d190d2014131d0d1215190d080a0c19"
		const bytes32vJz2NNR = await VatiVhhmWv.init.call(byterSpbSQl, {from: accounts[2]});
//		const bytes32dhS2qS = await VatiVhhmWv.frob.call(byteztkUsNj, addressxhqY98O, addressYL7aeA9, addressQlcztHx, intQrcmPVR, intl47tylN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatiVhhmWv.frob.call(byteztkUsNj, addressxhqY98O, addressYL7aeA9, addressQlcztHx, intQrcmPVR, intl47tylN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatEry8I8k = await Vat.new({from: accounts[1]});
		const uintk9Eennx = BigInt("0")
		const intoH1uixE = BigInt("1632")
		const intW0pUMLC = BigInt("1662")
		const addresscfGWYt8 = accounts[1]
		const addresse5akDgt = accounts[4]
		const byteonvM789 = "0x0f16140208120813191d1f1b0a02151717130414051903030b07120417111207"
		const uintZh6BPst = await VatEry8I8k.heal.call(uintk9Eennx, {from: accounts[4]});
//		const bytes32Z9C5tu2 = await VatEry8I8k.fork.call(byteonvM789, addresse5akDgt, addresscfGWYt8, intW0pUMLC, intoH1uixE, {from: "0x0000000000000000000000000000000000000001"});
//		await VatEry8I8k.cage.call({from: accounts[2]});

		await expect(VatEry8I8k.fork.call(byteonvM789, addresse5akDgt, addresscfGWYt8, intW0pUMLC, intoH1uixE, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatyU0IWbP = await Vat.new({from: accounts[3]});
		const addressFgPCCwW = accounts[1]
		const uintLzfDxu = BigInt("1184")
		const bytexFCh5oW = "0x02111a1a1001140010191a0518140312041d140410111f0d16190d020b070208"
		const byteHnJ84IO = "0x0714180804031f1c0a06090a0303170a0c1419032011050c1915001f11051916"
		const address0B1c3Y = await VatyU0IWbP.nope.call(addressFgPCCwW, {from: accounts[0]});
//		const bytes32zu2U4MY = await VatyU0IWbP.file.call(byteHnJ84IO, bytexFCh5oW, uintLzfDxu, {from: accounts[3]});
//		await VatyU0IWbP.cage.call({from: accounts[1]});
//		await VatyU0IWbP.cage.call({from: accounts[1]});

		await expect(VatyU0IWbP.file.call(byteHnJ84IO, bytexFCh5oW, uintLzfDxu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatiVhhmWv = await Vat.new({from: accounts[2]});
		const intl87CLTa = BigInt("-735")
		const intJsI2jGp = BigInt("-1120")
		const addressIUo4A07 = accounts[2]
		const addressxJ8yD03 = accounts[2]
		const bytesWMrzXP = "0x1b1b0b030a1916130714100008031c09140c1e010b130f05170d14151e060b12"
		const intknpYyE = BigInt("1320")
		const intS9iRyJD = BigInt("-1057")
		const addressUT4ToWx = accounts[1]
		const addressUvDAJt5 = accounts[4]
		const addressVX9JFUb = accounts[2]
		const byteE5RTtnp = "0x0c1e10110b051d0e1c13140a0617071a1d190d2014131d0d1215190d080a0c19"
//		const bytes32JTxtSLD = await VatiVhhmWv.fork.call(bytesWMrzXP, addressxJ8yD03, addressIUo4A07, intJsI2jGp, intl87CLTa, {from: accounts[0]});
//		const bytes32dhS2qS = await VatiVhhmWv.frob.call(byteE5RTtnp, addressVX9JFUb, addressUvDAJt5, addressUT4ToWx, intS9iRyJD, intknpYyE, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatiVhhmWv.fork.call(bytesWMrzXP, addressxJ8yD03, addressIUo4A07, intJsI2jGp, intl87CLTa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatiVhhmWv = await Vat.new({from: accounts[2]});
		const bytec3HPXUT = "0x0915061f0b180c0420170905020112161800190e171701150e0610021b1d0803"
		const uintzDFpEDk = BigInt("17")
		const addressMaQrJaK = accounts[0]
		const addressT3V3Ht8 = accounts[5]
		const uintfwkBtN7 = BigInt("1467")
		const byteMWDyQcR = "0x1b0309130b1d111909121920000400180b1f040c1f1f141d1f190d031b090a0c"
		const bytewC2Qoiz = "0x0a0f07191f10180306100b0a0d1d09031b0905130d0c180b18170b171f0f0e0e"
		const bytes32Sg8tXpY = await VatiVhhmWv.init.call(bytec3HPXUT, {from: accounts[2]});
//		const addressK906Dej = await VatiVhhmWv.move.call(addressT3V3Ht8, addressMaQrJaK, uintzDFpEDk, {from: accounts[5]});
//		const bytes32wPmphPU = await VatiVhhmWv.file.call(bytewC2Qoiz, byteMWDyQcR, uintfwkBtN7, {from: accounts[2]});

		await expect(VatiVhhmWv.move.call(addressT3V3Ht8, addressMaQrJaK, uintzDFpEDk, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatiVhhmWv = await Vat.new({from: accounts[2]});
		const uintiohzPFb = BigInt("1467")
		const bytesY7wagD = "0x1b0309130b1d111909121920000400180b1f040c1f1f141d1f190d031c090a0c"
		const byter89s2Me = "0x0a0f07191f10180306100b0a0d1d09031b0905130d0c180b18170b171f0f120e"
		const intOloC3g = BigInt("-1914")
		const addressKTpmZd8 = accounts[4]
		const bytejpHxCZI = "0x0f120803121e0a1c1c050318130b03140b021c1b0d0d070610110b070412131a"
		const bytePl3BeS0 = "0x00141a070d1e05060f041f0a2016031d151f121f0718080d0b1c2000071a0b15"
		const uinthVulFVy = BigInt("685")
		const addresstfrIfPg = accounts[5]
		const addressSUToVmv = accounts[0]
//		await VatiVhhmWv.cage.call({from: accounts[2]});
//		const bytes32wPmphPU = await VatiVhhmWv.file.call(byter89s2Me, bytesY7wagD, uintiohzPFb, {from: accounts[2]});
//		const bytes32S9DfmQ3 = await VatiVhhmWv.slip.call(bytejpHxCZI, addressKTpmZd8, intOloC3g, {from: accounts[5]});
//		const bytes32iAJfKAR = await VatiVhhmWv.init.call(bytePl3BeS0, {from: accounts[0]});
//		const addressCWqKIt3 = await VatiVhhmWv.suck.call(addressSUToVmv, addresstfrIfPg, uinthVulFVy, {from: accounts[1]});

		await expect(VatiVhhmWv.cage.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatiVhhmWv = await Vat.new({from: accounts[2]});
		const intnz2Ah4U = BigInt("1608")
		const addressun5l93a = accounts[4]
		const byteIvjCuub = "0x0d191a0a03181c190214090f1803040c180b001a13161d1115090b081f1f1412"
		const addressBWDfUr = accounts[3]
		const uintFSj1vU4 = BigInt("1467")
		const bytebQYmITs = "0x1b0309130b1d111909121920fffffffe0400180b1f040c1f1f141d1f190d031c090a0c"
		const bytenIc1LZ = "0x0a0f07191f10180306100b0a0d1d09031b0905130d0c180b18170b171f0f0e0e"
		const bytes32av5PM4c = await VatiVhhmWv.fold.call(byteIvjCuub, addressun5l93a, intnz2Ah4U, {from: accounts[2]});
		const addressMiEJmQV = await VatiVhhmWv.hope.call(addressBWDfUr, {from: accounts[0]});
//		const bytes32wPmphPU = await VatiVhhmWv.file.call(bytenIc1LZ, bytebQYmITs, uintFSj1vU4, {from: accounts[2]});

		await expect(VatiVhhmWv.file.call(bytenIc1LZ, bytebQYmITs, uintFSj1vU4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatiVhhmWv = await Vat.new({from: accounts[2]});
		const intv5RB4c0 = BigInt("-735")
		const intNv0KvQi = BigInt("-1120")
		const addressP3dvolU = accounts[2]
		const addressLYQpW8o = accounts[2]
		const bytenGUGVx = "0x1b1b0b030a1916130714100008031c09140c1efffffffd0b130f05170d14151e060b12"
//		const bytes32JTxtSLD = await VatiVhhmWv.fork.call(bytenGUGVx, addressLYQpW8o, addressP3dvolU, intNv0KvQi, intv5RB4c0, {from: accounts[0]});

		await expect(VatiVhhmWv.fork.call(bytenGUGVx, addressLYQpW8o, addressP3dvolU, intNv0KvQi, intv5RB4c0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatiVhhmWv = await Vat.new({from: accounts[2]});
		const addressDxUP7PT = accounts[4]
		const uintiImia5H = BigInt("803")
		const byteRGdvTHu = "0x1b0309130b1d111909121920000400180b1f040c1f1f141d1f190d031c090a0c"
		const byteHbor1Xo = "0x11161120050817000b0d1c0d0b16150402081a1703040cffffffff031f09010705100c"
		const addressfPlnsim = accounts[4]
		const intlrVB3fb = BigInt("-1984")
		const intGpjM49 = BigInt("-400")
		const addressn14iWbx = accounts[2]
		const addressHpkATEC = accounts[1]
		const addressOvxJJnc = accounts[3]
		const byteAW37WWu = "0x0a1f091d06041513101c1a1d11151818160219100612061e16181b1c1c091118"
		const uinty649G1q = BigInt("1491")
		const addressQ1aBWvE = accounts[1]
		const addressQmAQpC = accounts[4]
		const addressvkYYw65 = await VatiVhhmWv.nope.call(addressDxUP7PT, {from: accounts[4]});
//		const bytes32wPmphPU = await VatiVhhmWv.file.call(byteHbor1Xo, byteRGdvTHu, uintiImia5H, {from: accounts[2]});
//		const addressz5dsFUF = await VatiVhhmWv.nope.call(addressfPlnsim, {from: "0x0000000000000000000000000000000000000001"});
//		await VatiVhhmWv.cage.call({from: accounts[2]});
//		const bytes32GbgSakt = await VatiVhhmWv.frob.call(byteAW37WWu, addressOvxJJnc, addressHpkATEC, addressn14iWbx, intGpjM49, intlrVB3fb, {from: accounts[1]});
//		const addressz9syII4 = await VatiVhhmWv.suck.call(addressQmAQpC, addressQ1aBWvE, uinty649G1q, {from: accounts[4]});
//		await VatiVhhmWv.note.call({from: accounts[0]});

		await expect(VatiVhhmWv.file.call(byteHbor1Xo, byteRGdvTHu, uintiImia5H, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatiVhhmWv = await Vat.new({from: accounts[2]});
		const uintKZGU5QA = BigInt("1467")
		const bytepU7I58O = "0x1b0309130b1d1119091219200004fffffffc180b1f040c1f1f141d1f170d031c090a0c"
		const byteVkd1d8H = "0x0a0f07191c10180306100b0a0d1d09031b0905130d0c180b18170b171f0f0e0e"
//		const bytes32wPmphPU = await VatiVhhmWv.file.call(byteVkd1d8H, bytepU7I58O, uintKZGU5QA, {from: accounts[2]});

		await expect(VatiVhhmWv.file.call(byteVkd1d8H, bytepU7I58O, uintKZGU5QA, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})