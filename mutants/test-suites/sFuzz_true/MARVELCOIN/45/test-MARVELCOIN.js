const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintV3LHQlc = BigInt("517")
		const stringTn2ruJg = "RGuQWcpHNc99DRaxzkccuVYKMbJELOfDznAk9P9bLD1Qw55dPSwOjKg"
		const stringev48o0U = "F4AvwgTbgX8tS97Hx8RFKg8Woj7M09jbXtkqQ8rquUIMO4djSkT5gRDXq8M7tmGFUiNoT833sz8I4ZK"
		const MARVELCOINCou2nEM = await MARVELCOIN.new(uintV3LHQlc, stringTn2ruJg, stringev48o0U, {from: accounts[0]});
		const uintEGyos7v = BigInt("516")
		const addressewtkAn = accounts[0]
		const uintNrq8Jse = BigInt("1315")
		const addressJd5YIch = accounts[2]
		const uintqts0V1J = BigInt("1597")
		const uinthFNNSSQ = BigInt("883")
//		const boolAPZAZph = await MARVELCOINCou2nEM.transfer.call(addressewtkAn, uintEGyos7v, {from: "0x0000000000000000000000000000000000000001"});
//		const boolpG0yzTp = await MARVELCOINCou2nEM.burnFrom.call(addressJd5YIch, uintNrq8Jse, {from: accounts[3]});
//		const boolBn8zMO6 = await MARVELCOINCou2nEM.burn.call(uintqts0V1J, {from: accounts[3]});
//		const boolssCpHuW = await MARVELCOINCou2nEM.burn.call(uinthFNNSSQ, {from: accounts[2]});

		await expect(MARVELCOINCou2nEM.transfer.call(addressewtkAn, uintEGyos7v, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintLEeNjT = BigInt("1857")
		const stringSQL5UUU = "CNgzIDJPwWY5ZBkhmcVnxhfDvVn2pqDfQp1LFt2SmG6QmCQru"
		const stringzQUxuBR = "Spn5WsaPcKfNaEfrSLYL"
		const MARVELCOINzlq3F5 = await MARVELCOIN.new(uintLEeNjT, stringSQL5UUU, stringzQUxuBR, {from: accounts[1]});
		const uintkswY4R0 = BigInt("662")
		const uintIuJHJd = BigInt("509")
		const addressjuGFQyY = accounts[2]
		const uintJBZk7ae = BigInt("1522")
		const uintZNfaUC = BigInt("1674")
		const addressuBjZx5o = accounts[3]
		const uintGp68ych = BigInt("1679")
		const addressmwdnUMj = accounts[3]
		const boolcxod9QR = await MARVELCOINzlq3F5.burn.call(uintkswY4R0, {from: accounts[1]});
		const boolidR1KPF = await MARVELCOINzlq3F5.approve.call(addressjuGFQyY, uintIuJHJd, {from: "0x0000000000000000000000000000000000000001"});
//		const boolktrYTwI = await MARVELCOINzlq3F5.burn.call(uintJBZk7ae, {from: "0x0000000000000000000000000000000000000001"});
//		const boolRJeKQ7c = await MARVELCOINzlq3F5.approve.call(addressuBjZx5o, uintZNfaUC, {from: accounts[4]});
//		const boolgntRCpR = await MARVELCOINzlq3F5.approve.call(addressmwdnUMj, uintGp68ych, {from: accounts[1]});

		assert.equal(boolcxod9QR, true)
		assert.equal(boolidR1KPF, true)
		await expect(MARVELCOINzlq3F5.burn.call(uintJBZk7ae, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintCVKoZe = BigInt("1299")
		const stringlHf7AYv = "LzPewc3xDNGW9oY13IfE7hYyyBkpqzwBHhSVJtH78CgOV7kLiso32bFu7VaS1tL"
		const stringvlxt7hD = "rH4rrmdm7O2Mn9lgO9mh6oq8FPilqyaKtCHPNMuRjPWhLSOCp7vtBMesERhIzt1byla90XTTXhpuIIZif6E5OTaLf5DnycVmJv"
		const MARVELCOINIUKswvb = await MARVELCOIN.new(uintCVKoZe, stringlHf7AYv, stringvlxt7hD, {from: accounts[2]});
		const byteVttutas = "0x191e0610110d170d0f06100319"
		const uintxSY5yK9 = BigInt("481")
		const addressMNTo6lm = accounts[1]
		const uintb8ElmzE = BigInt("1941")
		const addresszySAJyC = accounts[2]
		const addressjHVe75R = accounts[4]
		const uintC50CLsE = BigInt("569")
		const addressBu12BoN = accounts[3]
//		const boolorVaDa0 = await MARVELCOINIUKswvb.approveAndCall.call(addressMNTo6lm, uintxSY5yK9, byteVttutas, {from: accounts[4]});
//		const boolay9bus7 = await MARVELCOINIUKswvb.transferFrom.call(addressjHVe75R, addresszySAJyC, uintb8ElmzE, {from: accounts[2]});
//		const boolGiWRCCK = await MARVELCOINIUKswvb.transfer.call(addressBu12BoN, uintC50CLsE, {from: accounts[3]});

		await expect(MARVELCOINIUKswvb.approveAndCall.call(addressMNTo6lm, uintxSY5yK9, byteVttutas, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintNYUimd = BigInt("1837")
		const stringU8mHgUw = "zkFNsXoAj6L4oBXMGDXaVHENQeS5tBKPuGJM2TRKHFiXq2B46FhFDoJpVqR5fqDH4"
		const stringaAi7yLN = "Vd0KwBquxxRCLflFtlftikkpKeBSRM9k4b4VSwvI"
		const MARVELCOINKT8jkK4 = await MARVELCOIN.new(uintNYUimd, stringU8mHgUw, stringaAi7yLN, {from: accounts[3]});
		const uintxa7ZQ5M = BigInt("1411")
		const addressxp0a4KM = accounts[2]
		const uintogNPcJl = BigInt("1470")
		const addressvqrXKca = accounts[4]
		const addressbNDRFC = accounts[3]
		const uintghYFYfU = BigInt("1840")
		const addressWSysITF = accounts[1]
		const addressg1VPsQ2 = accounts[2]
		const boollPbkyYa = await MARVELCOINKT8jkK4.approve.call(addressxp0a4KM, uintxa7ZQ5M, {from: accounts[0]});
//		const boolxEKhVFi = await MARVELCOINKT8jkK4.transferFrom.call(addressbNDRFC, addressvqrXKca, uintogNPcJl, {from: accounts[2]});
//		const boolLP0W8rr = await MARVELCOINKT8jkK4.transferFrom.call(addressg1VPsQ2, addressWSysITF, uintghYFYfU, {from: accounts[0]});

		assert.equal(boollPbkyYa, true)
		await expect(MARVELCOINKT8jkK4.transferFrom.call(addressbNDRFC, addressvqrXKca, uintogNPcJl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uinteOCt1CW = BigInt("493")
		const stringg5rd7sB = "NoG1uQcFZKG22HEKmVAgqGVKF18m8WCZrdGqwOjabMMAT8fXkGaHHp"
		const stringk6pzowf = "8"
		const MARVELCOINahnDYW = await MARVELCOIN.new(uinteOCt1CW, stringg5rd7sB, stringk6pzowf, {from: accounts[3]});
		const uintGbxu6D6 = BigInt("112")
		const addressv5fhHoN = accounts[1]
		const uintF5cpAYP = BigInt("1739")
		const addressgx24ROR = accounts[3]
		const addressKsyCff = accounts[4]
		const uintcsUpRQ = BigInt("1337")
		const addressH14f76M = accounts[2]
		const addressUQTjGz0 = accounts[0]
//		const boolLRlcqr = await MARVELCOINahnDYW.burnFrom.call(addressv5fhHoN, uintGbxu6D6, {from: accounts[4]});
//		const boolK1bi4T = await MARVELCOINahnDYW.transferFrom.call(addressKsyCff, addressgx24ROR, uintF5cpAYP, {from: accounts[2]});
//		const boolhD0E4i2 = await MARVELCOINahnDYW.transferFrom.call(addressUQTjGz0, addressH14f76M, uintcsUpRQ, {from: accounts[2]});

		await expect(MARVELCOINahnDYW.burnFrom.call(addressv5fhHoN, uintGbxu6D6, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintAjHMnAp = BigInt("1688")
		const stringfFDZtAy = "ybsijCxxsMlAwKZFDljEM1mymRfyVhdREYCyhhM3bp8dB"
		const stringn2JfQl = "S1dhCEM5YteHXlksos7kHxZJJ1rprXLSDOP1uoLG"
		const MARVELCOINe7Etwag = await MARVELCOIN.new(uintAjHMnAp, stringfFDZtAy, stringn2JfQl, {from: accounts[1]});
		const uintgXKHt7f = BigInt("276")
		const addressOq7IfQa = accounts[1]
		const byteIOq1z5c = "0x090703041f16"
		const uint03AufW = BigInt("1592")
		const addressToNTQa3 = accounts[5]
		const uintzP0O0E = BigInt("875")
//		const boolDDeatG1 = await MARVELCOINe7Etwag.burnFrom.call(addressOq7IfQa, uintgXKHt7f, {from: accounts[1]});
//		const boolIifP554 = await MARVELCOINe7Etwag.approveAndCall.call(addressToNTQa3, uint03AufW, byteIOq1z5c, {from: accounts[3]});
//		const boolv8zmnVh = await MARVELCOINe7Etwag.burn.call(uintzP0O0E, {from: accounts[3]});

		await expect(MARVELCOINe7Etwag.burnFrom.call(addressOq7IfQa, uintgXKHt7f, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintzKRntDA = BigInt("1731")
		const stringKanqo5s = "6M6nUpzPvHR6upxZygSfWQGCNVPRmVsIkBWIMPRsrDkQenuvyujcz97VKLMwIfo8t3rGj4JgE"
		const stringQOIP41 = "4v2B3DxkATbJb7RI4EE1WEpBJSaI17"
		const MARVELCOINr7Sl6N = await MARVELCOIN.new(uintzKRntDA, stringKanqo5s, stringQOIP41, {from: "0x0000000000000000000000000000000000000001"});
		const byteOuLocxv = "0x1102"
		const uintIdnzMi = BigInt("328")
		const addresskJDYQJN = accounts[1]
		const uintMMxxtw = BigInt("1300")
		const uintIZOeNSL = BigInt("1746")
		const addressp4v2mdN = accounts[4]
		const addresstz41psV = accounts[1]
		const booleA7MDi0 = await MARVELCOINr7Sl6N.approveAndCall.call(addresskJDYQJN, uintIdnzMi, byteOuLocxv, {from: accounts[2]});
		const boolJpUzVE = await MARVELCOINr7Sl6N.burn.call(uintMMxxtw, {from: accounts[0]});
		const boolXH0xWQr = await MARVELCOINr7Sl6N.transferFrom.call(addresstz41psV, addressp4v2mdN, uintIZOeNSL, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for MARVELCOIN', async () => {
		const uintc0Ai7jz = BigInt("1299")
		const stringlHf7AYv = "LzPewc3xDNGW9oY13IfE7hYyyBkpqzwBHhSVJtH78CgOV7kLiso32bFu7VaS1tL"
		const stringvlxt7hD = "rH4rrmdm7O2Mn9lgO9mh6oq8FPilqyaKtCHPNMuRjPWhLSOCp7vtBMesERhIzt1byla90XTTXhpuIIZif6E5OTaLf5DnycVmJv"
		const MARVELCOINIUKswvb = await MARVELCOIN.new(uintc0Ai7jz, stringlHf7AYv, stringvlxt7hD, {from: accounts[2]});
		const uintw2XrKBs = BigInt("1424")
		const addressIi1iW1W = "0x0000000000000000000000000000000000000001"
		const uintUVVs74l = BigInt("2045")
		const addressuLVW5S1 = "0x0000000000000000000000000000000000000000"
		const boolQc2UZ0V = await MARVELCOINIUKswvb.transfer.call(addressIi1iW1W, uintw2XrKBs, {from: accounts[2]});
//		const boolH6Oe9GU = await MARVELCOINIUKswvb.transfer.call(addressuLVW5S1, uintUVVs74l, {from: accounts[3]});

		assert.equal(boolQc2UZ0V, true)
		await expect(MARVELCOINIUKswvb.transfer.call(addressuLVW5S1, uintUVVs74l, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})