const Rexona = artifacts.require("Rexona");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Rexona', (accounts) => {
	it('test for Rexona', async () => {
		const stringAINHids = "k3CRa3lKl998wAfEAg3Shsrazn4YsvGMdXUSgYwRd9QVqHBfDkuQ7ExlhCoaLRJPKQdLzQ67j"
		const stringUCY1l9U = "IouoWfeyUO7HijK8JuDf5BAA2KW364IUBrlRVKEc1Pg11WOVOPLkVAy3EfhuIXLIey"
		const uintIqF2KNE = BigInt("551")
		const RexonajJdN7A8 = await Rexona.new(stringAINHids, stringUCY1l9U, uintIqF2KNE, {from: accounts[2]});
		const uintw4dpvRh = BigInt("1356")
		const addressK46vHiB = accounts[1]
		const uintLSgHNZU = BigInt("71")
		const addressTGunVL7 = accounts[4]
		const uintiNzEBQz = BigInt("1537")
		const addressVBhoMN = accounts[0]
		const uintMNoAuXR = BigInt("1572")
		const addressbmBd1Hf = accounts[4]
		const boolnHVGfgh = await RexonajJdN7A8.approveAndCall.call(addressK46vHiB, uintw4dpvRh, {from: "0x0000000000000000000000000000000000000001"});
		const boolOTWG6sk = await RexonajJdN7A8.transfer.call(addressTGunVL7, uintLSgHNZU, {from: accounts[0]});
		const boolt6KINpS = await RexonajJdN7A8.approve.call(addressVBhoMN, uintiNzEBQz, {from: accounts[3]});
		const boolEQ29AD1 = await RexonajJdN7A8.approve.call(addressbmBd1Hf, uintMNoAuXR, {from: accounts[4]});

		await expect(RexonajJdN7A8.approveAndCall.call(addressK46vHiB, uintw4dpvRh, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringvBAKGNJ = "x4tsowgNmFRsT8naWoarJA7Q32UEXdhc"
		const stringi6rQ3FL = "mwNV3nQApTvG9x5YnvdYKVD2BLEqk7hu59Mw89lQM8eeJqyYE6zf9v8nEHug4qCBpIzOgLPmDnbYIohsyeuTLpaiaRPXDkLlI"
		const uintify8wiU = BigInt("33")
		const Rexonamn0IZmo = await Rexona.new(stringvBAKGNJ, stringi6rQ3FL, uintify8wiU, {from: "0x0000000000000000000000000000000000000001"});
		const uintNQKz4n = BigInt("211")
		const addressNeuvFLb = accounts[4]
		const addressmumzipp = accounts[1]
		const uintUJJmypl = BigInt("1063")
		const addresspbluglq = "0x0000000000000000000000000000000000000001"
		const addressre5ZG6r = accounts[5]
		const uintcW7WDb = BigInt("398")
		const addressg0PONuB = accounts[0]
		const uintqzWQFW = BigInt("723")
		const addresszBA82qW = accounts[0]
		const addressZhvLDzr = accounts[1]
		const boolGnxTTS = await Rexonamn0IZmo.transferFrom.call(addressmumzipp, addressNeuvFLb, uintNQKz4n, {from: accounts[3]});
		const boolxKU0JqH = await Rexonamn0IZmo.transferFrom.call(addressre5ZG6r, addresspbluglq, uintUJJmypl, {from: accounts[0]});
		const booleLLeuo = await Rexonamn0IZmo.approve.call(addressg0PONuB, uintcW7WDb, {from: accounts[1]});
		const boolycQ6Ou9 = await Rexonamn0IZmo.transferFrom.call(addressZhvLDzr, addresszBA82qW, uintqzWQFW, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Rexona', async () => {
		const stringHxgfFbR = "zSTVQQW7aQWgVyCSrby8i4clbT"
		const stringx2LElK = "svIA65k6I8KBSEQO1f21qbYysg08NQalYlqoopfBGQPX2SAbXPYxATOnxng"
		const uintZru7ep = BigInt("1908")
		const RexonauzgjNa7 = await Rexona.new(stringHxgfFbR, stringx2LElK, uintZru7ep, {from: accounts[0]});
		const uintRKt2Tja = BigInt("789")
		const addressP6qUIS = accounts[5]
		const uinttlPiL12 = BigInt("1223")
		const addressBMpEkli = accounts[0]
		const uintMwBvEgf = BigInt("65")
		const addressdB2dYv9 = accounts[4]
		const uintxoAP3bA = BigInt("541")
		const addressw2vTiTd = "0x0000000000000000000000000000000000000001"
		const uintPtT3qo6 = BigInt("147")
		const addresshciGYWG = "0x0000000000000000000000000000000000000001"
		const addressoRNVdHw = accounts[0]
		const uintZGB9M1 = BigInt("1026")
		const addressD7Xc63J = accounts[4]
		const boolrQxOfSM = await RexonauzgjNa7.transfer.call(addressP6qUIS, uintRKt2Tja, {from: accounts[3]});
		const boolYWrCdSj = await RexonauzgjNa7.approveAndCall.call(addressBMpEkli, uinttlPiL12, {from: accounts[0]});
		const boolyn7wIYM = await RexonauzgjNa7.approveAndCall.call(addressdB2dYv9, uintMwBvEgf, {from: accounts[1]});
		const boolydnAlt = await RexonauzgjNa7.approve.call(addressw2vTiTd, uintxoAP3bA, {from: accounts[4]});
		const boolXFY4KKO = await RexonauzgjNa7.transferFrom.call(addressoRNVdHw, addresshciGYWG, uintPtT3qo6, {from: accounts[1]});
		const boolZL7adRY = await RexonauzgjNa7.approve.call(addressD7Xc63J, uintZGB9M1, {from: "0x0000000000000000000000000000000000000001"});

		await expect(RexonauzgjNa7.transfer.call(addressP6qUIS, uintRKt2Tja, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringvyflqxg = "rgk"
		const stringOZqUol = "DHOYdVbwPaaLmgwq1NKIMcCg1cgLCORm4INUYpEusClB2oGDc0ipIA3XV3uhEjsNEBVNKVy41JLtW78MszCBoeMP"
		const uintqcxBNSh = BigInt("669")
		const RexonacanrnM = await Rexona.new(stringvyflqxg, stringOZqUol, uintqcxBNSh, {from: accounts[3]});
		const uinttoS6MXo = BigInt("1706")
		const addressYLBAM5m = accounts[1]
		const addressHQUVuz = accounts[1]
		const uintjbJR1hz = BigInt("1765")
		const addressysJq1o = accounts[3]
		const uinteZRvXDW = BigInt("4")
		const addressoTj9yTr = accounts[0]
		const addressJt1117E = accounts[0]
		const addressS6ixUOw = accounts[2]
		const booliVC6oI = await RexonacanrnM.transferFrom.call(addressHQUVuz, addressYLBAM5m, uinttoS6MXo, {from: "0x0000000000000000000000000000000000000001"});
		const boolTIIIP3i = await RexonacanrnM.approveAndCall.call(addressysJq1o, uintjbJR1hz, {from: accounts[3]});
		const boolTzEpISY = await RexonacanrnM.approveAndCall.call(addressoTj9yTr, uinteZRvXDW, {from: accounts[3]});
		const booltMcV6ty = await RexonacanrnM.transferownership.call(addressJt1117E, {from: accounts[1]});
		const boolNyf2NUh = await RexonacanrnM.transferownership.call(addressS6ixUOw, {from: accounts[0]});

		await expect(RexonacanrnM.transferFrom.call(addressHQUVuz, addressYLBAM5m, uinttoS6MXo, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringiCF7CkH = "ckhagTMBgMREruDVbzHiXoHadPNs2xrJFKnivIWmunQttEK418eW1bw2oq4IisVk9"
		const stringW2lk5UO = "P7hEougohAu9lXfEpVIAbE2SAVukskDtbRuGXRmHSHC1zsZ3ED4bhIioLueQSjB6t6BbvTHCouo8xXXEGchY42gCOsX"
		const uintH0s8o5 = BigInt("1054")
		const RexonaJExwRzE = await Rexona.new(stringiCF7CkH, stringW2lk5UO, uintH0s8o5, {from: accounts[3]});
		const uintskzyEu7 = BigInt("1349")
		const addressR7O6yr2 = accounts[1]
		const uintbmaSLsc = BigInt("1181")
		const addressIL2zYT = accounts[3]
		const addressfhSbjdJ = accounts[0]
		const uinthyb37sw = BigInt("1022")
		const addressJyJdfuP = accounts[1]
		const uintxj2Tm7w = BigInt("2039")
		const addressWHlx7a7 = accounts[1]
		const uintV6dfF3o = BigInt("1625")
		const addressQZRdcPT = accounts[2]
		const boolq5QZzXz = await RexonaJExwRzE.approve.call(addressR7O6yr2, uintskzyEu7, {from: accounts[4]});
		const boolrEOkkQY = await RexonaJExwRzE.transferFrom.call(addressfhSbjdJ, addressIL2zYT, uintbmaSLsc, {from: accounts[2]});
		const booleaBpE6P = await RexonaJExwRzE.approveAndCall.call(addressJyJdfuP, uinthyb37sw, {from: accounts[5]});
		const boolgqYEHf9 = await RexonaJExwRzE.approve.call(addressWHlx7a7, uintxj2Tm7w, {from: accounts[0]});
		const boolSZSjOFx = await RexonaJExwRzE.approveAndCall.call(addressQZRdcPT, uintV6dfF3o, {from: accounts[0]});

		assert.equal(boolq5QZzXz, true)
		await expect(RexonaJExwRzE.transferFrom.call(addressfhSbjdJ, addressIL2zYT, uintbmaSLsc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringoYahCRA = "NR0LyIzsklMb7W6X6TloMBAU5Lt4VBG9bF4nv9BXdlnXafnb9U3zsNnnIv1aQvNhFastbPVVnX"
		const stringE6aMTek = "IN77c34JLmzNAcWNDV01vWnF3zjWaUwrw8KiUuj50MS9uehVFG8HeODQfm"
		const uintVyPfSa5 = BigInt("875")
		const RexonattWAiFS = await Rexona.new(stringoYahCRA, stringE6aMTek, uintVyPfSa5, {from: accounts[0]});
		const uintmF4s0kg = BigInt("1886")
		const address7ztqdz = accounts[0]
		const uintGfawQ38 = BigInt("795")
		const addressIMeK0Za = accounts[4]
		const addresstju1wR7 = accounts[1]
		const boolGnol9gh = await RexonattWAiFS.transfer.call(address7ztqdz, uintmF4s0kg, {from: accounts[3]});
		const boolrt0Juhr = await RexonattWAiFS.transferFrom.call(addresstju1wR7, addressIMeK0Za, uintGfawQ38, {from: accounts[4]});

		await expect(RexonattWAiFS.transfer.call(address7ztqdz, uintmF4s0kg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringwTrqFal = "oiBwzJTJIG6FCfliJRIPt2mMSFi32OSAU9MOkIBFZUq7ZzMYJJVpWMxLEEUmWbBkPez1WlKj1xIbN30RulwQGcH"
		const stringNk60lHX = "s52oIIj3oCCUVqvA7oahSEcOK29TTwaU8CZmSbYrv2Eld"
		const uint0AUZVa = BigInt("398")
		const RexonaxKv8a4m = await Rexona.new(stringwTrqFal, stringNk60lHX, uint0AUZVa, {from: accounts[1]});
		const addressXZlxdK0 = accounts[5]
		const uintdQlSzwp = BigInt("1450")
		const addressz22QZYp = accounts[4]
		const uintzqxDSCi = BigInt("350")
		const addresscVQpkdb = accounts[1]
		const addressAjbPmbl = accounts[2]
		const addressySqgIzg = accounts[3]
		const boolM8459Rg = await RexonaxKv8a4m.transferownership.call(addressXZlxdK0, {from: accounts[4]});
		const boolNfLeuNM = await RexonaxKv8a4m.approveAndCall.call(addressz22QZYp, uintdQlSzwp, {from: accounts[0]});
		const boolCcZsUqI = await RexonaxKv8a4m.transferFrom.call(addressAjbPmbl, addresscVQpkdb, uintzqxDSCi, {from: accounts[0]});
		const boolAi2lGsx = await RexonaxKv8a4m.transferownership.call(addressySqgIzg, {from: accounts[1]});

		await expect(RexonaxKv8a4m.transferownership.call(addressXZlxdK0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringoYahCRA = "NR0LyIzsklMb7W6X6TloMBAU5Lt4VBG9bF4nv9BXdlnXafnb9U3zsNnnIv1aQvNhFastbPVVnX"
		const stringE6aMTek = "IN77c34JLmzNAcWNDV01vWnF3zjWaUwrw8KiUuj50MS9uehVFG8HeODQfm"
		const uintGJK3On6 = BigInt("875")
		const RexonattWAiFS = await Rexona.new(stringoYahCRA, stringE6aMTek, uintGJK3On6, {from: accounts[0]});
		const uintYrm8q7q = BigInt("1507")
		const addresstydEyoV = accounts[2]
		const uint40bzwk = BigInt("306")
		const addressabX3PeC = accounts[2]
		const boolU7ylGGm = await RexonattWAiFS.approveAndCall.call(addresstydEyoV, uintYrm8q7q, {from: accounts[0]});
		const boolt5X2i7l = await RexonattWAiFS.approveAndCall.call(addressabX3PeC, uint40bzwk, {from: accounts[2]});

		assert.equal(boolU7ylGGm, true)
		await expect(RexonattWAiFS.approveAndCall.call(addressabX3PeC, uint40bzwk, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringHxgfFbR = "zSTVQQW7aQWgVyCSrby8i4clbT"
		const stringx2LElK = "svIA65k6I8KBSEQO1f21qbYysg08NQalYlqoopfBGQPX2SAbXPYxATOnxng"
		const uintX4cNgSU = BigInt("1908")
		const RexonauzgjNa7 = await Rexona.new(stringHxgfFbR, stringx2LElK, uintX4cNgSU, {from: accounts[0]});
		const addressfP4X4aQ = accounts[1]
		const uintzn7nPFt = BigInt("789")
		const addressilEtzgL = accounts[5]
		const addressTtClXcf = accounts[1]
		const uints28Awlz = BigInt("548")
		const addressXYH3Ejf = "0x0000000000000000000000000000000000000002"
		const boolp5lR5iz = await RexonauzgjNa7.transferownership.call(addressfP4X4aQ, {from: accounts[0]});
		const boolrQxOfSM = await RexonauzgjNa7.transfer.call(addressilEtzgL, uintzn7nPFt, {from: accounts[3]});
		const boolbV9nN2n = await RexonauzgjNa7.transferownership.call(addressTtClXcf, {from: accounts[1]});
		const boolydnAlt = await RexonauzgjNa7.approve.call(addressXYH3Ejf, uints28Awlz, {from: accounts[4]});

		assert.equal(boolp5lR5iz, true)
		await expect(RexonauzgjNa7.transfer.call(addressilEtzgL, uintzn7nPFt, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringCCK6nQ = "1pptjmGa6Pr4ANMtahlgtwkx4yuIfWF"
		const stringKDKDNaj = "Iuyax5EloIEemZoTfvkvhlbKXoY3"
		const uintngeUEjC = BigInt("1707")
		const RexonakZkIgPs = await Rexona.new(stringCCK6nQ, stringKDKDNaj, uintngeUEjC, {from: accounts[2]});
		const uintmYnTGcK = BigInt("0")
		const addressfG1CqIW = accounts[3]
		const uintv2bQJou = BigInt("735")
		const addressgWRcV9c = accounts[2]
		const addressVa89cI = accounts[2]
		const boolKPFyvJM = await RexonakZkIgPs.approveAndCall.call(addressfG1CqIW, uintmYnTGcK, {from: accounts[2]});
		const boolOQO85KM = await RexonakZkIgPs.transferFrom.call(addressVa89cI, addressgWRcV9c, uintv2bQJou, {from: accounts[4]});

		assert.equal(boolKPFyvJM, true)
		await expect(RexonakZkIgPs.transferFrom.call(addressVa89cI, addressgWRcV9c, uintv2bQJou, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Rexona', async () => {
		const stringHxgfFbR = "zSTVQQW7aQWgVyCSrby8i4clbT"
		const stringx2LElK = "svIA65k6I8KBSEQO1f21qbYysg08NQalYlqoopfBGQPX2SAbXPYxATOnxng"
		const uintZLJ8wFr = BigInt("1908")
		const RexonauzgjNa7 = await Rexona.new(stringHxgfFbR, stringx2LElK, uintZLJ8wFr, {from: accounts[0]});
		const uintQ8KW0fd = BigInt("0")
		const addressY4GxwHE = accounts[0]
		const addresswrV7j56 = accounts[2]
		const uintTV15RR0 = BigInt("789")
		const addresskunbAYq = accounts[6]
		const boolbXDOqsg = await RexonauzgjNa7.transferFrom.call(addresswrV7j56, addressY4GxwHE, uintQ8KW0fd, {from: accounts[4]});
		const boolrQxOfSM = await RexonauzgjNa7.transfer.call(addresskunbAYq, uintTV15RR0, {from: accounts[3]});

		assert.equal(boolbXDOqsg, true)
		await expect(RexonauzgjNa7.transfer.call(addresskunbAYq, uintTV15RR0, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})