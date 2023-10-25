const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringJEyvnc = "3mw"
		const stringjcUr0M = "kTyNYOA"
		const uint2O8OYG = BigInt("725")
		const Dipex2jJoaP = await Dipex.new(stringJEyvnc, stringjcUr0M, uint2O8OYG, {from: accounts[3]});
		const uintyGOpBg8 = BigInt("295")
		const addressas27ouD = accounts[0]
		const addresspxgbmnH = accounts[1]
		const uintiwnlTvW = BigInt("132")
		const addressFipWP1T = accounts[4]
		const uintfVR3S8X = BigInt("771")
		const addressqDTZhYs = accounts[3]
		const boolEm8cZ2k = await Dipex2jJoaP.transferFrom.call(addresspxgbmnH, addressas27ouD, uintyGOpBg8, {from: accounts[1]});
		const boolvfXwywQ = await Dipex2jJoaP.approveAndCall.call(addressFipWP1T, uintiwnlTvW, {from: "0x0000000000000000000000000000000000000001"});
		const boolDfLqrem = await Dipex2jJoaP.approveAndCall.call(addressqDTZhYs, uintfVR3S8X, {from: accounts[2]});

		await expect(Dipex2jJoaP.transferFrom.call(addresspxgbmnH, addressas27ouD, uintyGOpBg8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringdZlD6gb = "r9VwjOZazIfFuj4QiVXzQ14sMnftBKSq2x0hmYoMwKxTdsNPtXrgbxqDEfToJ"
		const stringORmitMF = "UMHacBBrCU9zo3zGFYjLWp8yQKzGUs52OY4iycCUwHaoijQK8dmg2HMLEmsWABaVKy35ysIBFII"
		const uintBj5ljaY = BigInt("472")
		const DipexFMql9As = await Dipex.new(stringdZlD6gb, stringORmitMF, uintBj5ljaY, {from: accounts[3]});
		const uintjaDlSzG = BigInt("177")
		const addressQIXSGGu = accounts[3]
		const uintwVAPaHj = BigInt("478")
		const addressr3YHQbD = accounts[1]
		const addressv6nkIsh = accounts[4]
		const boolHI5N6d = await DipexFMql9As.approve.call(addressQIXSGGu, uintjaDlSzG, {from: accounts[2]});
		const boolW0jpps9 = await DipexFMql9As.transferFrom.call(addressv6nkIsh, addressr3YHQbD, uintwVAPaHj, {from: accounts[3]});

		assert.equal(boolHI5N6d, true)
		await expect(DipexFMql9As.transferFrom.call(addressv6nkIsh, addressr3YHQbD, uintwVAPaHj, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringVZ41dr5 = "PbeC7Oo3OvbC4c5P04W0nmgabUV1hQ0w7mKBU3fhh5mTDxdY1wOaUBtLqCH7"
		const stringHjW6QoF = "y"
		const uint9o9Tva = BigInt("1440")
		const DipexOl2unk9 = await Dipex.new(stringVZ41dr5, stringHjW6QoF, uint9o9Tva, {from: "0x0000000000000000000000000000000000000001"});
		const uintZ4XbNEH = BigInt("1155")
		const addresshuRhG9g = accounts[2]
		const uintVZOfJl9 = BigInt("1964")
		const addressNuXtS0J = accounts[5]
		const addressef5FvIv = accounts[3]
		const uintFS5X53b = BigInt("1881")
		const addressdejpRof = accounts[4]
		const addresswRDfmeT = "0x0000000000000000000000000000000000000001"
		const uintdhqtzfm = BigInt("2031")
		const addressE9U4ri5 = accounts[1]
		const boolL577nN = await DipexOl2unk9.approveAndCall.call(addresshuRhG9g, uintZ4XbNEH, {from: accounts[3]});
		const boolCsQKGgo = await DipexOl2unk9.transferFrom.call(addressef5FvIv, addressNuXtS0J, uintVZOfJl9, {from: accounts[1]});
		const boolwidDNtl = await DipexOl2unk9.transferFrom.call(addresswRDfmeT, addressdejpRof, uintFS5X53b, {from: accounts[1]});
		const boolysnNN4 = await DipexOl2unk9.approveAndCall.call(addressE9U4ri5, uintdhqtzfm, {from: accounts[2]});
	});

	it('test for Dipex', async () => {
		const stringDFwxc7B = "VJawoqb9aPHV8oug4SixOwWWraYSRtVQEv1oLMob0huIzInl6dAHvAne181360gIhDPQM3EKg4M1G7ODytBofR0j55eLc8G5K"
		const stringpnqr8yL = "6VwOzaHV864XPNf8ciWNIafhCtc41M7abOpr6rQ17OABU1RnuOC44w5IJYU1Oscall1US85g6ZwMTnWpCpwqLfnpT8vRoMkFR"
		const uintSTUM8Pf = BigInt("1046")
		const DipexPnlgxwI = await Dipex.new(stringDFwxc7B, stringpnqr8yL, uintSTUM8Pf, {from: accounts[4]});
		const addressuJ7pL6M = accounts[5]
		const uintPFO0nBK = BigInt("939")
		const addressyrGGFz = accounts[4]
		const boolfTtZyMd = await DipexPnlgxwI.transferownership.call(addressuJ7pL6M, {from: accounts[1]});
		const boolnswroeC = await DipexPnlgxwI.approveAndCall.call(addressyrGGFz, uintPFO0nBK, {from: accounts[1]});

		await expect(DipexPnlgxwI.transferownership.call(addressuJ7pL6M, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringfFzofTp = "Nxa4PB6WpinHeWSX74Y1VLYJm2wPX8DxLoL5icHEGQJX8TpsZmxl0QywqWuJQj"
		const stringyquY81 = "EdJjdhnPOq1oLl5clviN7GUC1JBAvpCUhKxs5BFD4a8RxlKD2fkagZSghBOSFm8GViQJhlJ9ejKwVVPO"
		const uintXwJPYwr = BigInt("314")
		const Dipexv0wrUgC = await Dipex.new(stringfFzofTp, stringyquY81, uintXwJPYwr, {from: accounts[1]});
		const uintnflOJDH = BigInt("1085")
		const addressSkzEnaW = accounts[2]
		const uintgi6ea7 = BigInt("1826")
		const addresseKygiHH = accounts[5]
		const uintPPfNVQs = BigInt("1902")
		const addresstWizwdL = accounts[5]
		const uintN6mWVNz = BigInt("1077")
		const addressaPcpm8N = accounts[3]
		const uintBWQLszM = BigInt("1639")
		const addressBFdW8Tr = accounts[2]
		const boolgPSj0cP = await Dipexv0wrUgC.approve.call(addressSkzEnaW, uintnflOJDH, {from: accounts[1]});
		const boolI74S3VO = await Dipexv0wrUgC.approve.call(addresseKygiHH, uintgi6ea7, {from: accounts[2]});
		const boolueBBnge = await Dipexv0wrUgC.approveAndCall.call(addresstWizwdL, uintPPfNVQs, {from: "0x0000000000000000000000000000000000000001"});
		const boolw19m91t = await Dipexv0wrUgC.approve.call(addressaPcpm8N, uintN6mWVNz, {from: accounts[2]});
		const booldgLhFwT = await Dipexv0wrUgC.approve.call(addressBFdW8Tr, uintBWQLszM, {from: accounts[5]});

		assert.equal(boolI74S3VO, true)
		assert.equal(boolgPSj0cP, true)
		await expect(Dipexv0wrUgC.approveAndCall.call(addresstWizwdL, uintPPfNVQs, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringNPShtNM = "etCaTasdYWruf5nmJsebBiE6jjn8m6EV44mvEtxLywiblZkjN66"
		const stringvSN0WVI = "g"
		const uintrRu0rWz = BigInt("26")
		const DipexCKBx9YB = await Dipex.new(stringNPShtNM, stringvSN0WVI, uintrRu0rWz, {from: accounts[4]});
		const addressAQLJgTP = accounts[5]
		const uintypVoe6Y = BigInt("1030")
		const addressjWGRFb2 = accounts[1]
		const addressWmUOhZ = accounts[2]
		const uint9YBJ9k = BigInt("202")
		const addressYhHqK3b = accounts[0]
		const addresse08vJ2d = accounts[1]
		const uintQxJoNVV = BigInt("836")
		const addressd4Texwu = "0x0000000000000000000000000000000000000001"
		const uintuwIW8JJ = BigInt("286")
		const addressFodMkdf = accounts[4]
		const addressnx2cXqQ = accounts[4]
		const uintA4uwCw4 = BigInt("1325")
		const addressZ6plt2M = accounts[4]
		const addressgOCidK = accounts[2]
		const boolSRhxiI2 = await DipexCKBx9YB.transferownership.call(addressAQLJgTP, {from: accounts[4]});
		const booln4GsjPC = await DipexCKBx9YB.transferFrom.call(addressWmUOhZ, addressjWGRFb2, uintypVoe6Y, {from: accounts[1]});
		const bool4yA6N0 = await DipexCKBx9YB.transferFrom.call(addresse08vJ2d, addressYhHqK3b, uint9YBJ9k, {from: accounts[5]});
		const boolSyKZ4XG = await DipexCKBx9YB.approve.call(addressd4Texwu, uintQxJoNVV, {from: "0x0000000000000000000000000000000000000001"});
		const boolP4k5l73 = await DipexCKBx9YB.transferFrom.call(addressnx2cXqQ, addressFodMkdf, uintuwIW8JJ, {from: accounts[0]});
		const booldudMNW = await DipexCKBx9YB.transferFrom.call(addressgOCidK, addressZ6plt2M, uintA4uwCw4, {from: accounts[2]});

		assert.equal(boolSRhxiI2, true)
		await expect(DipexCKBx9YB.transferFrom.call(addressWmUOhZ, addressjWGRFb2, uintypVoe6Y, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringJEyvnc = "3mw"
		const stringjcUr0M = "kTyNYOA"
		const uintKmZfpnt = BigInt("725")
		const Dipex2jJoaP = await Dipex.new(stringJEyvnc, stringjcUr0M, uintKmZfpnt, {from: accounts[3]});
		const uintsG98S5m = BigInt("1547")
		const addressaSub07h = "0x0000000000000000000000000000000000000001"
		const uinttFZgDCJ = BigInt("295")
		const addressyvJGBS = accounts[1]
		const address1f1qqy = accounts[1]
		const uintvyf3oId = BigInt("806")
		const addresspYWG0Vb = accounts[4]
		const uintGAlhPy8 = BigInt("136")
		const addresst37oaLa = accounts[4]
		const boolvC363wQ = await Dipex2jJoaP.transfer.call(addressaSub07h, uintsG98S5m, {from: accounts[1]});
		const boolEm8cZ2k = await Dipex2jJoaP.transferFrom.call(address1f1qqy, addressyvJGBS, uinttFZgDCJ, {from: accounts[1]});
		const boolrISWolv = await Dipex2jJoaP.approveAndCall.call(addresspYWG0Vb, uintvyf3oId, {from: accounts[3]});
		const boolvfXwywQ = await Dipex2jJoaP.approveAndCall.call(addresst37oaLa, uintGAlhPy8, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Dipex2jJoaP.transfer.call(addressaSub07h, uintsG98S5m, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringCIoViAV = "E9KCN3bvjthsB80jvjaIG5jqFO2tuneiCN6Ky"
		const stringZZB9ZZA = "1z1yh8O3BdLp8HWZcFHiXbO4LsmmZ2ehn7zCOPOym24a8"
		const uintPZiwwSx = BigInt("1064")
		const DipexQ1uSo55 = await Dipex.new(stringCIoViAV, stringZZB9ZZA, uintPZiwwSx, {from: accounts[3]});
		const uintUQDzeKN = BigInt("1165")
		const addressKvjLVLo = accounts[1]
		const uinttNrY7EN = BigInt("1336")
		const addressi5OmvA = accounts[3]
		const uintzI07UZW = BigInt("189")
		const addresszXgnvGd = "0x0000000000000000000000000000000000000001"
		const addressap3QWzP = accounts[2]
		const addressyReKsvG = accounts[2]
		const uintITLEqbj = BigInt("366")
		const addressXJTtym = accounts[4]
		const addressvnXhig7 = accounts[3]
		const boolnX8dtlo = await DipexQ1uSo55.approve.call(addressKvjLVLo, uintUQDzeKN, {from: accounts[0]});
		const boolvK32ise = await DipexQ1uSo55.approveAndCall.call(addressi5OmvA, uinttNrY7EN, {from: accounts[3]});
		const boolDJ7PELK = await DipexQ1uSo55.transferFrom.call(addressap3QWzP, addresszXgnvGd, uintzI07UZW, {from: accounts[4]});
		const boolXgOIyxP = await DipexQ1uSo55.transferownership.call(addressyReKsvG, {from: accounts[4]});
		const boolllebjmA = await DipexQ1uSo55.transferFrom.call(addressvnXhig7, addressXJTtym, uintITLEqbj, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolnX8dtlo, true)
		assert.equal(boolvK32ise, true)
		await expect(DipexQ1uSo55.transferFrom.call(addressap3QWzP, addresszXgnvGd, uintzI07UZW, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringJEyvnc = "3mw"
		const stringjcUr0M = "kTyNYOA"
		const uintRPJqEYZ = BigInt("725")
		const Dipex2jJoaP = await Dipex.new(stringJEyvnc, stringjcUr0M, uintRPJqEYZ, {from: accounts[3]});
		const uintJ6LQigE = BigInt("428")
		const addressd5tQxQ2 = accounts[1]
		const uintz4UFbzO = BigInt("295")
		const addressYqGwIu6 = accounts[0]
		const addressBPkvwe5 = accounts[1]
		const boolZkBJXbN = await Dipex2jJoaP.transfer.call(addressd5tQxQ2, uintJ6LQigE, {from: accounts[3]});
		const boolEm8cZ2k = await Dipex2jJoaP.transferFrom.call(addressBPkvwe5, addressYqGwIu6, uintz4UFbzO, {from: accounts[1]});

		assert.equal(boolZkBJXbN, true)
		await expect(Dipex2jJoaP.transferFrom.call(addressBPkvwe5, addressYqGwIu6, uintz4UFbzO, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringJEyvnc = "3mw"
		const stringjcUr0M = "kTyNYOA"
		const uintU0FgmMm = BigInt("725")
		const Dipex2jJoaP = await Dipex.new(stringJEyvnc, stringjcUr0M, uintU0FgmMm, {from: accounts[3]});
		const uintf615iJa = BigInt("0")
		const addressR7wMPxj = accounts[3]
		const addressYOXLMl4 = accounts[4]
		const uintczxuubX = BigInt("2014")
		const addressuvnUrHx = accounts[1]
		const addressby6N3eW = accounts[1]
		const uintG4vo9zH = BigInt("295")
		const addresssMwtGzG = accounts[0]
		const addressgHDDeoq = accounts[2]
		const uintWLR2f3x = BigInt("1179")
		const addressAhuVYF = accounts[0]
		const addressSXoJrf4 = "0x0000000000000000000000000000000000000001"
		const uintI5nZ5x = BigInt("1314")
		const addressgkbqMS6 = accounts[0]
		const boolbJfN4AT = await Dipex2jJoaP.transferFrom.call(addressYOXLMl4, addressR7wMPxj, uintf615iJa, {from: accounts[4]});
		const boolWyy49FP = await Dipex2jJoaP.transferFrom.call(addressby6N3eW, addressuvnUrHx, uintczxuubX, {from: "0x0000000000000000000000000000000000000001"});
		const boolEm8cZ2k = await Dipex2jJoaP.transferFrom.call(addressgHDDeoq, addresssMwtGzG, uintG4vo9zH, {from: accounts[1]});
		const boolsS1nye6 = await Dipex2jJoaP.transferFrom.call(addressSXoJrf4, addressAhuVYF, uintWLR2f3x, {from: accounts[2]});
		const boolGQSnIr = await Dipex2jJoaP.approveAndCall.call(addressgkbqMS6, uintI5nZ5x, {from: accounts[1]});

		assert.equal(boolbJfN4AT, true)
		await expect(Dipex2jJoaP.transferFrom.call(addressby6N3eW, addressuvnUrHx, uintczxuubX, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringdZlD6gb = "r9VwjOZazIfFuj4QiVXzQ14sMnftBKSq2x0hmYoMwKxTdsNPtXrgbxqDEfToJ"
		const stringORmitMF = "UMHacBBrCU9zo3zGFYjLWp8yQKzGUs52OY4iycCUwHaoijQK8dmg2HMLEmsWABaVKy35ysIBFII"
		const uintrcVBHyL = BigInt("472")
		const DipexFMql9As = await Dipex.new(stringdZlD6gb, stringORmitMF, uintrcVBHyL, {from: accounts[3]});
		const uintdvQMK3E = BigInt("0")
		const addressKemnZCX = accounts[1]
		const uintyzBfctx = BigInt("578")
		const addressrDDPsGe = accounts[3]
		const boolwFQve8o = await DipexFMql9As.approveAndCall.call(addressKemnZCX, uintdvQMK3E, {from: accounts[3]});
		const boolBI3m5TQ = await DipexFMql9As.approveAndCall.call(addressrDDPsGe, uintyzBfctx, {from: accounts[1]});

		assert.equal(boolwFQve8o, true)
		await expect(DipexFMql9As.approveAndCall.call(addressrDDPsGe, uintyzBfctx, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})