const Final = artifacts.require("Final");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Final', (accounts) => {
	it('test for Final', async () => {
		const stringoOq8EF8 = "BHdqHLRiuHpqfKefX3bI6KtcYXZfXogzVYkLnRkO7NBkjBgCaoisMapbhGKRvzrWqM26aqTHB8vR1dMuAXyX"
		const stringz8MCtmA = "NlcazCfuHiZmHJe"
		const uintWGJLQBA = BigInt("6")
		const FinalqBeFtNV = await Final.new(stringoOq8EF8, stringz8MCtmA, uintWGJLQBA, {from: accounts[3]});
		const addressnRQs9v = accounts[3]
		const addressnXHXC6X = "0x0000000000000000000000000000000000000001"
		const addressP448tD = accounts[5]
//		const boolF8Afgo = await FinalqBeFtNV.transferownership.call(addressnRQs9v, {from: accounts[0]});
//		const uintFJvMtmu = await FinalqBeFtNV.allowance.call(addressP448tD, addressnXHXC6X, {from: accounts[3]});

		await expect(FinalqBeFtNV.transferownership.call(addressnRQs9v, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringBgBd6vj = "zfxebPPlcj1ql9hPsRg0aTByHNnf2jSI"
		const stringIiH7FPz = "aGRky6OFe8PurpEfomhyNbon803k8C4So"
		const uintiuUlILV = BigInt("135")
		const FinalmFLsCEO = await Final.new(stringBgBd6vj, stringIiH7FPz, uintiuUlILV, {from: accounts[1]});
		const uintCNhnoqx = BigInt("1222")
		const addressb9FwjXQ = accounts[3]
		const addressfXEJNoP = accounts[5]
		const addresskxKyXIA = accounts[3]
		const uintQ2g2F1o = BigInt("651")
		const addressulW3UR = accounts[1]
		const uintSNyf8YO = BigInt("590")
		const addresssC8UAW1 = accounts[5]
		const uintsNsNZk5 = BigInt("1682")
		const addressLjiXZIg = accounts[2]
//		const boolhOqngvN = await FinalmFLsCEO.transfer.call(addressb9FwjXQ, uintCNhnoqx, {from: accounts[0]});
//		const uinttQazckK = await FinalmFLsCEO.allowance.call(addresskxKyXIA, addressfXEJNoP, {from: accounts[2]});
//		const boolmOeAmxi = await FinalmFLsCEO.decreaseAllowance.call(addressulW3UR, uintQ2g2F1o, {from: accounts[1]});
//		const boolJUuPmJh = await FinalmFLsCEO.transfer.call(addresssC8UAW1, uintSNyf8YO, {from: accounts[0]});
//		const boolD1p8LbG = await FinalmFLsCEO.decreaseAllowance.call(addressLjiXZIg, uintsNsNZk5, {from: accounts[0]});

		await expect(FinalmFLsCEO.transfer.call(addressb9FwjXQ, uintCNhnoqx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringu5r3YWe = "qEjTiCrJsvPcQPVAGmIWoEeno"
		const stringueQZfA9 = "wwBHjFM2VBiAzM5ZtmQlGTq0Rfukrx6kkJEYytJKAryXcp8T3mWP32ETfn8JFM"
		const uintSls9KVc = BigInt("188")
		const Finalg90QMGD = await Final.new(stringu5r3YWe, stringueQZfA9, uintSls9KVc, {from: accounts[1]});
		const addresstAZJeGO = accounts[1]
		const addressC3mfBDX = accounts[0]
		const uintk4knRtN = BigInt("1014")
		const addressx69Dgwh = accounts[1]
		const addressL4fZeWb = accounts[5]
		const uintpdJhFI = BigInt("1130")
		const addressAMkOMhk = accounts[1]
		const uintrayfSoD = BigInt("489")
		const addressW9SbbXM = accounts[0]
		const uintKOmNjWu = BigInt("334")
		const addressba5bJcm = accounts[5]
		const uintu09fQHt = await Finalg90QMGD.allowance.call(addressC3mfBDX, addresstAZJeGO, {from: accounts[1]});
//		const boolOWxCJaJ = await Finalg90QMGD.transferFrom.call(addressL4fZeWb, addressx69Dgwh, uintk4knRtN, {from: accounts[5]});
//		const boolw3HdjsT = await Finalg90QMGD.approve.call(addressAMkOMhk, uintpdJhFI, {from: accounts[0]});
//		const boolq1CO8PY = await Finalg90QMGD.approve.call(addressW9SbbXM, uintrayfSoD, {from: accounts[0]});
//		const booledhK727 = await Finalg90QMGD.decreaseAllowance.call(addressba5bJcm, uintKOmNjWu, {from: accounts[0]});

		assert.equal(uintu09fQHt, BigInt("0"))
		await expect(Finalg90QMGD.transferFrom.call(addressL4fZeWb, addressx69Dgwh, uintk4knRtN, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringOgbyryn = "1CHYFw51NGoUTzq6wuiseE7UfgXz85PSul7Ibh8NDkzjaKMqtIhafI"
		const stringWQs6zr3 = "lF2SdESE8tKjaDqlrwn4cogMbutgS6"
		const uintuKdeoR = BigInt("96")
		const FinalS5rQCPA = await Final.new(stringOgbyryn, stringWQs6zr3, uintuKdeoR, {from: accounts[4]});
		const uintX0jxi78 = BigInt("1066")
		const addressToHl0O6 = accounts[4]
		const uintUfsOzAe = BigInt("1704")
		const addressu6EN5A = accounts[3]
		const uintKJLIX8U = BigInt("1818")
		const addressjbtMOjo = accounts[3]
		const address1kzIjm = accounts[2]
		const uintvmgPIKA = BigInt("1837")
		const addressrfnBLKn = accounts[1]
//		const booldcC2uc5 = await FinalS5rQCPA.approveAndCall.call(addressToHl0O6, uintX0jxi78, {from: accounts[3]});
//		const boolrtK12AO = await FinalS5rQCPA.transfer.call(addressu6EN5A, uintUfsOzAe, {from: accounts[0]});
//		const boolqFAxWX = await FinalS5rQCPA.transferFrom.call(address1kzIjm, addressjbtMOjo, uintKJLIX8U, {from: accounts[0]});
//		const boolhZGaygk = await FinalS5rQCPA.decreaseAllowance.call(addressrfnBLKn, uintvmgPIKA, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FinalS5rQCPA.approveAndCall.call(addressToHl0O6, uintX0jxi78, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringTt8DSaN = "vFRF6mEaWrL9jTS"
		const string9rmxZ2 = "oc7Ocn7XYxpjFznm4KrsEm9NGemsQBJSirxalibnI0XYDHcnMhQ5tNKRLEiOU1AQ8XTTJ1sgJC8Lu70uHu"
		const uintEBc381d = BigInt("596")
		const FinalQxG0AT7 = await Final.new(stringTt8DSaN, string9rmxZ2, uintEBc381d, {from: accounts[5]});
		const uintTpo2M3X = BigInt("1086")
		const addresseqqPk2D = accounts[5]
		const uintwLZ0sOV = BigInt("1384")
		const addresspaAHfLz = accounts[4]
		const uintp7pkK7b = BigInt("1049")
		const addressRHnNB9e = accounts[1]
		const uintJ07oZUX = BigInt("192")
		const addressdtFlx3z = accounts[3]
		const uintA9aBuLe = BigInt("324")
		const addressjYEDk3e = accounts[4]
		const addressYTezgeB = accounts[0]
		const uintS6CUaMD = BigInt("1759")
		const addressVITaq6 = accounts[0]
		const boolwL62xuH = await FinalQxG0AT7.approve.call(addresseqqPk2D, uintTpo2M3X, {from: "0x0000000000000000000000000000000000000001"});
		const booloN6yyfj = await FinalQxG0AT7.approveAndCall.call(addresspaAHfLz, uintwLZ0sOV, {from: accounts[5]});
		const bool0JJCAc = await FinalQxG0AT7.approve.call(addressRHnNB9e, uintp7pkK7b, {from: accounts[1]});
		const boolADKKOvT = await FinalQxG0AT7.approve.call(addressdtFlx3z, uintJ07oZUX, {from: accounts[4]});
//		const boolLNG56bK = await FinalQxG0AT7.transferFrom.call(addressYTezgeB, addressjYEDk3e, uintA9aBuLe, {from: accounts[2]});
//		const boolEnZ73yn = await FinalQxG0AT7.decreaseAllowance.call(addressVITaq6, uintS6CUaMD, {from: accounts[5]});

		assert.equal(bool0JJCAc, true)
		assert.equal(boolADKKOvT, true)
		assert.equal(booloN6yyfj, true)
		assert.equal(boolwL62xuH, true)
		await expect(FinalQxG0AT7.transferFrom.call(addressYTezgeB, addressjYEDk3e, uintA9aBuLe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringI0smSQK = "TCmPVqbxA9KAsv"
		const stringX85E0sU = "Mco2J0bNfouvSUhR6dvLOMmpct3Tp3k9z9o8Kko6Dd9"
		const uintvRFyDjC = BigInt("1291")
		const FinalFD7lxt0 = await Final.new(stringI0smSQK, stringX85E0sU, uintvRFyDjC, {from: accounts[2]});
		const addressdSZKSEO = accounts[4]
		const addressU9dA4vX = accounts[3]
		const addressQdW3kKU = accounts[1]
		const uint0EWZY5 = BigInt("612")
		const addressMvClTeR = accounts[4]
		const uint9Tboma = BigInt("715")
		const addressnoyqL0w = accounts[3]
		const uintANQa9Bi = await FinalFD7lxt0.allowance.call(addressU9dA4vX, addressdSZKSEO, {from: accounts[2]});
		const uintcRAt2wF = await FinalFD7lxt0.balanceOf.call(addressQdW3kKU, {from: accounts[1]});
		const boolGWOhWle = await FinalFD7lxt0.approve.call(addressMvClTeR, uint0EWZY5, {from: accounts[2]});
		const stringA7W1sj5 = await FinalFD7lxt0.name.call({from: accounts[0]});
//		const boolPBWAZay = await FinalFD7lxt0.increaseAllowance.call(addressnoyqL0w, uint9Tboma, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolGWOhWle, true)
		assert.equal(stringA7W1sj5, "TCmPVqbxA9KAsv")
		assert.equal(uintANQa9Bi, BigInt("0"))
		assert.equal(uintcRAt2wF, BigInt("0"))
		await expect(FinalFD7lxt0.increaseAllowance.call(addressnoyqL0w, uint9Tboma, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Final', async () => {
		const stringzdmHIih = "DndQsLjcFA2VY9yfIUK8TiqQdwgoW5aON8"
		const stringmxHbhYo = "W0gPx8xOfVEGfVy8FhTP2YT6tO2lH"
		const uintFv7jlpL = BigInt("143")
		const FinalifD5xFs = await Final.new(stringzdmHIih, stringmxHbhYo, uintFv7jlpL, {from: "0x0000000000000000000000000000000000000001"});
		const uintUfcGQDr = BigInt("1889")
		const addresszgT4cJW = accounts[2]
		const uintXWysxtm = BigInt("1073")
		const addressEviT9Ow = accounts[1]
		const uintGJkWb22 = BigInt("1985")
		const addressL69V0dS = accounts[0]
		const addressp8srBS = accounts[3]
		const uintoW4ooX = BigInt("1127")
		const addressASyNc5r = accounts[4]
		const booltzIVvHg = await FinalifD5xFs.approve.call(addresszgT4cJW, uintUfcGQDr, {from: accounts[1]});
		const boolDntA5ua = await FinalifD5xFs.approve.call(addressEviT9Ow, uintXWysxtm, {from: accounts[4]});
		const uintW4NA8Bg = await FinalifD5xFs.totalSupply.call({from: accounts[0]});
		const boolVI44sIx = await FinalifD5xFs.approve.call(addressL69V0dS, uintGJkWb22, {from: accounts[3]});
		const uintDA3fprM = await FinalifD5xFs.balanceOf.call(addressp8srBS, {from: accounts[3]});
		const boolRelgiDi = await FinalifD5xFs.decreaseAllowance.call(addressASyNc5r, uintoW4ooX, {from: accounts[1]});
	});

	it('test for Final', async () => {
		const stringoOq8EF8 = "BHdqHLRiuHpqfKefX3bI6KtcYXZfXogzVYkLnRkO7NBkjBgCaoisMapbhGKRvzrWqM26aqTHB8vR1dMuAXyX"
		const stringz8MCtmA = "NlcazCfuHiZmHJe"
		const uintkrOmmS = BigInt("6")
		const FinalqBeFtNV = await Final.new(stringoOq8EF8, stringz8MCtmA, uintkrOmmS, {from: accounts[3]});
		const uintsTj8nAd = BigInt("0")
		const addressMCcLox3 = accounts[1]
		const boolgG5Uql = await FinalqBeFtNV.approveAndCall.call(addressMCcLox3, uintsTj8nAd, {from: accounts[3]});

		assert.equal(boolgG5Uql, true)
	});

	it('test for Final', async () => {
		const stringTt8DSaN = "vFRF6mEaWrL9jTS"
		const string9rmxZ2 = "oc7Ocn7XYxpjFznm4KrsEm9NGemsQBJSirxalibnI0XYDHcnMhQ5tNKRLEiOU1AQ8XTTJ1sgJC8Lu70uHu"
		const uintCdhpkwI = BigInt("596")
		const FinalQxG0AT7 = await Final.new(stringTt8DSaN, string9rmxZ2, uintCdhpkwI, {from: accounts[5]});
		const uintMfeIFUq = BigInt("0")
		const addressxA8HZhc = accounts[4]
		const addressneNZIus = accounts[1]
		const uintJ64WKE5 = BigInt("1563")
		const addressXOKqCDQ = accounts[2]
		const addressdEi5MWF = accounts[2]
		const boolr0Al8d = await FinalQxG0AT7.transferFrom.call(addressneNZIus, addressxA8HZhc, uintMfeIFUq, {from: accounts[2]});
//		const boolKhXmDNx = await FinalQxG0AT7.transferFrom.call(addressdEi5MWF, addressXOKqCDQ, uintJ64WKE5, {from: accounts[1]});

		assert.equal(boolr0Al8d, true)
		await expect(FinalQxG0AT7.transferFrom.call(addressdEi5MWF, addressXOKqCDQ, uintJ64WKE5, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})