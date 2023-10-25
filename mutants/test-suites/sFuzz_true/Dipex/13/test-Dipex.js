const Dipex = artifacts.require("Dipex");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Dipex', (accounts) => {
	it('test for Dipex', async () => {
		const stringz7BkmoV = "4tvLXyDLDjYfxQlGVQyH3"
		const string7KOKzv = "AeagLGqDQfRJuSvXTNXmW5tHF6pVtugT1MAdyV"
		const uintFf31O2N = BigInt("263")
		const DipexigNTavB = await Dipex.new(stringz7BkmoV, string7KOKzv, uintFf31O2N, {from: accounts[2]});
		const uintJghhxUW = BigInt("1541")
		const addressbNyCoLj = accounts[1]
		const uintr0fHnEe = BigInt("451")
		const addresskinm7a5 = accounts[1]
		const uintxfnbmQw = BigInt("824")
		const addressKk2Y7wm = accounts[1]
		const addressrqSMMa6 = accounts[5]
		const uintksf84xT = BigInt("293")
		const addressn88oSSY = accounts[2]
		const addressxdN1Ety = accounts[4]
		const addressoNRjwyg = accounts[1]
		const uint5Qfcyz = BigInt("92")
		const address7sgdsX = accounts[2]
//		const boolLEzr1SE = await DipexigNTavB.approveAndCall.call(addressbNyCoLj, uintJghhxUW, {from: accounts[3]});
//		const boolKA5jDY = await DipexigNTavB.approveAndCall.call(addresskinm7a5, uintr0fHnEe, {from: accounts[4]});
//		const boolYXHWRl3 = await DipexigNTavB.transferFrom.call(addressrqSMMa6, addressKk2Y7wm, uintxfnbmQw, {from: accounts[2]});
//		const boolbxVgOLD = await DipexigNTavB.transferFrom.call(addressxdN1Ety, addressn88oSSY, uintksf84xT, {from: accounts[4]});
//		const boolItJmNBw = await DipexigNTavB.transferownership.call(addressoNRjwyg, {from: accounts[2]});
//		const boolv70yno4 = await DipexigNTavB.approve.call(address7sgdsX, uint5Qfcyz, {from: accounts[2]});

		await expect(DipexigNTavB.approveAndCall.call(addressbNyCoLj, uintJghhxUW, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringiB5NFZP = "WrBLjLza09vEFZPVqOE9h5k6pGVfpNqA739UVD72O9zY8kmajhuYUcHLi2tKgg88h6Hu55h5p0mluTmRNUkErnGoc4vxQmH7"
		const stringhBOVAoT = "hetGNWS4QSy7rHHZIm3qlgXPeUHiL2FgbvMZsLKuItixMWrLc2FcLfgXhyUdoRlgpQ18I"
		const uintASv97kw = BigInt("2029")
		const Dipexf3Ivje5 = await Dipex.new(stringiB5NFZP, stringhBOVAoT, uintASv97kw, {from: accounts[4]});
		const addressSX7f8nf = accounts[5]
		const uintTVXQKkA = BigInt("1577")
		const addressCaEUS9e = accounts[2]
		const uintZFaqKap = BigInt("1399")
		const addresseP8vy6Z = accounts[3]
		const addressGseTWna = accounts[4]
		const uintmO5DWA = BigInt("1960")
		const addressqEpqODp = accounts[2]
		const uintexphIOs = BigInt("908")
		const addressynNfHtp = accounts[1]
//		const bool2kqfLi = await Dipexf3Ivje5.transferownership.call(addressSX7f8nf, {from: accounts[1]});
//		const boolHJpv8yx = await Dipexf3Ivje5.approveAndCall.call(addressCaEUS9e, uintTVXQKkA, {from: accounts[3]});
//		const boolm5cExUZ = await Dipexf3Ivje5.transferFrom.call(addressGseTWna, addresseP8vy6Z, uintZFaqKap, {from: accounts[1]});
//		const boolWycUAqk = await Dipexf3Ivje5.approveAndCall.call(addressqEpqODp, uintmO5DWA, {from: accounts[0]});
//		const boolMYLg1M = await Dipexf3Ivje5.approve.call(addressynNfHtp, uintexphIOs, {from: accounts[3]});

		await expect(Dipexf3Ivje5.transferownership.call(addressSX7f8nf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const string799t64 = "TSYIcgojcCRtZzbGMTizFz9S6NEcKleBRWPOG32GzZNSOu8J4LWhd2JOJeOLSl"
		const stringhr3WnFf = "W9WUgB8pFGHD01kPfi6ue9kXBmyxK29lFLgq8OyVU2ok"
		const uintgDDblAx = BigInt("1415")
		const DipexpsXnt3J = await Dipex.new(string799t64, stringhr3WnFf, uintgDDblAx, {from: accounts[3]});
		const uintD4Nyu6j = BigInt("1460")
		const addressZbn3bAp = accounts[5]
		const uintD23xcCI = BigInt("2027")
		const addressGKBYFbK = accounts[3]
		const addressMR47gA5 = accounts[2]
		const uintYPjF455 = BigInt("159")
		const addressIxa5YgD = accounts[0]
		const uintWwMu3d = BigInt("1249")
		const addressbwUK39j = accounts[3]
		const bool9kVWEs = await DipexpsXnt3J.approve.call(addressZbn3bAp, uintD4Nyu6j, {from: accounts[3]});
//		const booleEOyKEZ = await DipexpsXnt3J.transferFrom.call(addressMR47gA5, addressGKBYFbK, uintD23xcCI, {from: accounts[5]});
//		const bool3RsJ8u = await DipexpsXnt3J.transfer.call(addressIxa5YgD, uintYPjF455, {from: accounts[5]});
//		const boolpepx4az = await DipexpsXnt3J.transfer.call(addressbwUK39j, uintWwMu3d, {from: accounts[3]});

		assert.equal(bool9kVWEs, true)
		await expect(DipexpsXnt3J.transferFrom.call(addressMR47gA5, addressGKBYFbK, uintD23xcCI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringZ0ObGs = "mPH9O7kC55vHCJN"
		const stringduZOVXT = "BUMt7qPK4LlYNJuJmOFVvqFG2t79WyyJObCXOnmEiNxwQ7LRSYmP9C"
		const uintBcqlDCv = BigInt("357")
		const DipexSLDyTNs = await Dipex.new(stringZ0ObGs, stringduZOVXT, uintBcqlDCv, {from: "0x0000000000000000000000000000000000000001"});
		const uintSojyRv9 = BigInt("1639")
		const addressys7vqiP = accounts[2]
		const uintfQeKOue = BigInt("885")
		const addresswIG9UBj = "0x0000000000000000000000000000000000000001"
		const uinteUBtiNa = BigInt("1971")
		const addressmxgVVIj = "0x0000000000000000000000000000000000000001"
		const uintnpLQjH = BigInt("538")
		const address8yH2Ux = accounts[3]
		const uint2Ht6W2 = BigInt("1569")
		const addresssQTE7Ho = accounts[4]
		const boolQCISD3 = await DipexSLDyTNs.approve.call(addressys7vqiP, uintSojyRv9, {from: accounts[4]});
		const boolGpQRetb = await DipexSLDyTNs.approveAndCall.call(addresswIG9UBj, uintfQeKOue, {from: accounts[5]});
		const boolYVvtiVi = await DipexSLDyTNs.transfer.call(addressmxgVVIj, uinteUBtiNa, {from: accounts[1]});
		const boolvfIr6eH = await DipexSLDyTNs.approveAndCall.call(address8yH2Ux, uintnpLQjH, {from: accounts[2]});
		const boolO1pxdhe = await DipexSLDyTNs.approve.call(addresssQTE7Ho, uint2Ht6W2, {from: accounts[1]});
	});

	it('test for Dipex', async () => {
		const stringZaWShrl = "AWO6J5pWhbsIXdIdGxcPuQDoaF7OzYCPIfPnG1aokWhQYT7ze"
		const stringFacaK8t = "KfaS3YQSERzjjoRKsRylX4rH6530kkfwxyXAKfQYuXFz8WRHaehwMmFiFYMJXNEgnWo5Lu3XQ4kdL84W6OrAu48gNQpfu"
		const uintETDbu40 = BigInt("945")
		const DipexkuSa5DN = await Dipex.new(stringZaWShrl, stringFacaK8t, uintETDbu40, {from: accounts[3]});
		const uintahA5hFR = BigInt("1957")
		const addressPEYITgt = accounts[2]
		const uintcFppaN = BigInt("1155")
		const addressSjuqWAh = accounts[2]
		const uintFZ4q8TR = BigInt("1427")
		const addressRMbc1QG = accounts[0]
		const addressM3QcOkf = accounts[5]
		const uintU1KiBk7 = BigInt("369")
		const addressXJWFG27 = accounts[4]
		const addressZqpbcH4 = accounts[1]
		const uinttd4OILf = BigInt("1951")
		const addressHSjjyeP = accounts[3]
		const uintJMTVidT = BigInt("1412")
		const addressGR04cG = accounts[3]
//		const booldwuCh78 = await DipexkuSa5DN.transfer.call(addressPEYITgt, uintahA5hFR, {from: accounts[2]});
//		const boolZ44t4z8 = await DipexkuSa5DN.approveAndCall.call(addressSjuqWAh, uintcFppaN, {from: "0x0000000000000000000000000000000000000001"});
//		const boolynQ8Ow = await DipexkuSa5DN.transferFrom.call(addressM3QcOkf, addressRMbc1QG, uintFZ4q8TR, {from: accounts[4]});
//		const boolzpelXs7 = await DipexkuSa5DN.transferFrom.call(addressZqpbcH4, addressXJWFG27, uintU1KiBk7, {from: accounts[4]});
//		const boolghi16Uw = await DipexkuSa5DN.transfer.call(addressHSjjyeP, uinttd4OILf, {from: accounts[3]});
//		const boolpcQqIsp = await DipexkuSa5DN.transfer.call(addressGR04cG, uintJMTVidT, {from: accounts[0]});

		await expect(DipexkuSa5DN.transfer.call(addressPEYITgt, uintahA5hFR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringetFXOQs = "rZ72kRAMjuGydEDrrFw6sttN8ASmwed2rD0ysnu0kEGo14jPxTg27GYQT57zbp"
		const stringn3JgMqm = "tP2G"
		const uintkCwQcg0 = BigInt("303")
		const DipexIq1C952 = await Dipex.new(stringetFXOQs, stringn3JgMqm, uintkCwQcg0, {from: accounts[0]});
		const uintcFWLnGg = BigInt("1270")
		const addressuL4P1nd = accounts[1]
		const uintDsFSV4n = BigInt("589")
		const addressfgSpFqx = "0x0000000000000000000000000000000000000001"
		const addressDUFn9b1 = accounts[0]
		const uintW1lBOYS = BigInt("1205")
		const addressdMH1TK5 = accounts[0]
		const addressLVijew = accounts[2]
		const uintA2LtIM = BigInt("1418")
		const addressgZnp9iZ = accounts[2]
		const boolYIr75cY = await DipexIq1C952.approveAndCall.call(addressuL4P1nd, uintcFWLnGg, {from: accounts[0]});
//		const boolgH7lm03 = await DipexIq1C952.transferFrom.call(addressDUFn9b1, addressfgSpFqx, uintDsFSV4n, {from: accounts[5]});
//		const boolecyrw8K = await DipexIq1C952.approve.call(addressdMH1TK5, uintW1lBOYS, {from: accounts[0]});
//		const boolcqEWgTw = await DipexIq1C952.transferownership.call(addressLVijew, {from: accounts[1]});
//		const boolULkrYmW = await DipexIq1C952.approveAndCall.call(addressgZnp9iZ, uintA2LtIM, {from: accounts[1]});

		assert.equal(boolYIr75cY, true)
		await expect(DipexIq1C952.transferFrom.call(addressDUFn9b1, addressfgSpFqx, uintDsFSV4n, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringCYrjN29 = "LnjtSN6HUEvVEAENArSxzH7dlvANfuFmzykaL39DO6yWJhQFUg5OsuPWjKKkx1S4PH1BCqE7hDhXb4UlTE6iV"
		const stringBaB0Mz = "ivDo7dfOk5U"
		const uintJFn7sFy = BigInt("1293")
		const DipexEJCIdr = await Dipex.new(stringCYrjN29, stringBaB0Mz, uintJFn7sFy, {from: accounts[2]});
		const uintLY4nf4 = BigInt("1296")
		const addressWL63DXh = accounts[4]
		const uintCsF1rek = BigInt("1676")
		const addresssEV005 = accounts[2]
		const uintur1zYsg = BigInt("1177")
		const addresspEnuae1 = accounts[1]
		const boolQa20BqD = await DipexEJCIdr.approve.call(addressWL63DXh, uintLY4nf4, {from: accounts[2]});
//		const boolavDejxR = await DipexEJCIdr.transfer.call(addresssEV005, uintCsF1rek, {from: accounts[3]});
//		const boolgKzGnTC = await DipexEJCIdr.approveAndCall.call(addresspEnuae1, uintur1zYsg, {from: accounts[1]});

		assert.equal(boolQa20BqD, true)
		await expect(DipexEJCIdr.transfer.call(addresssEV005, uintCsF1rek, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringcNt91w = "bnx1UVWniNIxYVe3CArxnqbavxXGOWjA5RnrwRUe3kymE2Y03g0aFlSg4KR7cAEN4KjeocIq8"
		const stringVfglIlL = "isouKvhlOrXl6h9kRAjx6LRq8CJmvrRDpGFg56IsV3oeo7MKJjAcMKzULB7357J2A6UVuphACRzKeDdm9dtuI6HRTT5YUMXK98"
		const uintYFLFjj5 = BigInt("515")
		const DipexcmV30fU = await Dipex.new(stringcNt91w, stringVfglIlL, uintYFLFjj5, {from: accounts[4]});
		const uintgdSG84p = BigInt("54")
		const addressX6UkzSo = accounts[5]
		const addressDjr4ntC = accounts[0]
		const uintEXwla1h = BigInt("1946")
		const addressJ5ox3pn = accounts[0]
		const uintWqaa8os = BigInt("703")
		const addressQKX3d5 = accounts[0]
		const uintYgm2z2i = BigInt("1802")
		const addressIx5OQVY = accounts[2]
		const address6R4HUi = accounts[2]
		const boolB5c7Wjb = await DipexcmV30fU.transfer.call(addressX6UkzSo, uintgdSG84p, {from: accounts[4]});
		const boolAo8iegj = await DipexcmV30fU.transferownership.call(addressDjr4ntC, {from: accounts[4]});
		const boolfMYzYif = await DipexcmV30fU.approve.call(addressJ5ox3pn, uintEXwla1h, {from: accounts[4]});
//		const booljCjR8it = await DipexcmV30fU.transfer.call(addressQKX3d5, uintWqaa8os, {from: accounts[2]});
//		const booljbc8XJd = await DipexcmV30fU.approveAndCall.call(addressIx5OQVY, uintYgm2z2i, {from: accounts[3]});
//		const boolcGylxnD = await DipexcmV30fU.transferownership.call(address6R4HUi, {from: accounts[0]});

		assert.equal(boolAo8iegj, true)
		assert.equal(boolB5c7Wjb, true)
		assert.equal(boolfMYzYif, true)
		await expect(DipexcmV30fU.transfer.call(addressQKX3d5, uintWqaa8os, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringcNt91w = "bnx1UVWniNIxYVe3CArxnqbavxXGOWjA5RnrwRUe3kymE2Y03g0aFlSg4KR7cAEN4KjeocIq8"
		const stringVfglIlL = "isouKvhlOrXl6h9kRAjx6LRq8CJmvrRDpGFg56IsV3oeo7MKJjAcMKzULB7357J2A6UVuphACRzKeDdm9dtuI6HRTT5YUMXK98"
		const uintQlBfz7T = BigInt("515")
		const DipexcmV30fU = await Dipex.new(stringcNt91w, stringVfglIlL, uintQlBfz7T, {from: accounts[4]});
		const uintywk6HC = BigInt("730")
		const addressmb8xN0 = "0x0000000000000000000000000000000000000001"
		const uintr7w2Zzt = BigInt("0")
		const addressnKa86XG = accounts[5]
		const addresshXU8Yht = accounts[1]
		const uintKWaUjSY = BigInt("104")
		const addressbMlKogE = accounts[2]
		const boolKMJGgVE = await DipexcmV30fU.approveAndCall.call(addressmb8xN0, uintywk6HC, {from: accounts[4]});
		const boolSineGat = await DipexcmV30fU.transferFrom.call(addresshXU8Yht, addressnKa86XG, uintr7w2Zzt, {from: accounts[2]});
//		const booldEvuKwS = await DipexcmV30fU.transfer.call(addressbMlKogE, uintKWaUjSY, {from: accounts[3]});

		assert.equal(boolKMJGgVE, true)
		assert.equal(boolSineGat, true)
		await expect(DipexcmV30fU.transfer.call(addressbMlKogE, uintKWaUjSY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Dipex', async () => {
		const stringcNt91w = "bnx1UVWniNIxYVe3CArxnqbavxXGOWjA5RnrwRUe3kymE2Y03g0aFlSg4KR7cAEN4KjeocIq8"
		const stringVfglIlL = "isouKvhlOrXl6h9kRAjx6LRq8CJmvrRDpGFg56IsV3oeo7MKJjAcMKzULB7357J2A6UVuphACRzKeDdm9dtuI6HRTT5YUMXK98"
		const uints5ah7ro = BigInt("515")
		const DipexcmV30fU = await Dipex.new(stringcNt91w, stringVfglIlL, uints5ah7ro, {from: accounts[4]});
		const uintYxDQ07X = BigInt("463")
		const addressfggBcvn = accounts[4]
		const uintpQYma4J = BigInt("0")
		const addressTSepFcQ = accounts[0]
		const boolFt8DdL = await DipexcmV30fU.approve.call(addressfggBcvn, uintYxDQ07X, {from: accounts[0]});
		const boolJV4XPR = await DipexcmV30fU.approveAndCall.call(addressTSepFcQ, uintpQYma4J, {from: accounts[4]});

		assert.equal(boolFt8DdL, true)
		assert.equal(boolJV4XPR, true)
	});
})