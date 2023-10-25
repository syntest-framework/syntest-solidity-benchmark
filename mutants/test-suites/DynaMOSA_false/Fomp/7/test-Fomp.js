const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressDcvUb1G = "0x0000000000000000000000000000000000000001"
		const FompOuJOpv = await Fomp.new(addressDcvUb1G, {from: accounts[3]});
		const uintgNmVeVj = BigInt("94")
		const addressTSs0tJ8 = accounts[5]
		const uintBuZlr0z = BigInt("1070")
		const addressxo9LI5q = accounts[3]
		const addressQY47sHi = accounts[4]
		const bytebMvzUrs = "0x15111d0d02170d18181c1b10031a181a16040c061f1819121510080a0b1c0a14"
		const byteQxnAbum = "0x1407080d140a0f1f0f0a1f1d101d0f0f061a0809171005140c061a1b1c1a1e0d"
		const uintGTC57on = BigInt("161")
		const uintj4qmLpq = BigInt("249")
		const uintA4utO3T = BigInt("111")
		const addresseiB1dxt = accounts[2]
		const boolvRcJmlb = await FompOuJOpv.approve.call(addressTSs0tJ8, uintgNmVeVj, {from: accounts[4]});
		const boolnGg2n7v = await FompOuJOpv.approve.call(addressxo9LI5q, uintBuZlr0z, {from: accounts[5]});
		const addressi3TJYco = await FompOuJOpv.delegate.call(addressQY47sHi, {from: accounts[5]});
//		const addressDebhqqi = await FompOuJOpv.delegateBySig.call(addresseiB1dxt, uintA4utO3T, uintj4qmLpq, uintGTC57on, byteQxnAbum, bytebMvzUrs, {from: accounts[2]});

		assert.equal(boolnGg2n7v, true)
		assert.equal(boolvRcJmlb, true)
		await expect(FompOuJOpv.delegateBySig.call(addresseiB1dxt, uintA4utO3T, uintj4qmLpq, uintGTC57on, byteQxnAbum, bytebMvzUrs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressHAPdLjF = accounts[1]
		const FompaazoEq5 = await Fomp.new(addressHAPdLjF, {from: accounts[0]});
		const uintYp02ihv = BigInt("1066")
		const addressQQk8u2m = accounts[3]
		const addressjSeP406 = accounts[3]
		const uintihiAyBJ = BigInt("647")
		const addressyLcI7su = accounts[2]
		const uintIha9NUc = BigInt("1993")
		const addressDgDpxNC = accounts[5]
		const uintFhrYGoi = BigInt("255")
		const address5dgFYW = accounts[1]
//		const boolb0GQ2aF = await FompaazoEq5.transferFrom.call(addressjSeP406, addressQQk8u2m, uintYp02ihv, {from: accounts[3]});
//		const uint96aGUJpX5 = await FompaazoEq5.getPriorVotes.call(addressyLcI7su, uintihiAyBJ, {from: accounts[0]});
//		const booleIwZIt = await FompaazoEq5.transfer.call(addressDgDpxNC, uintIha9NUc, {from: accounts[0]});
//		const uint96rjZaIji = await FompaazoEq5.getPriorVotes.call(address5dgFYW, uintFhrYGoi, {from: accounts[2]});

		await expect(FompaazoEq5.transferFrom.call(addressjSeP406, addressQQk8u2m, uintYp02ihv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressr6JFRkA = accounts[4]
		const FompfsuHNTF = await Fomp.new(addressr6JFRkA, {from: accounts[4]});
		const addressFxlf3kQ = accounts[4]
		const addressfh5ujW4 = accounts[0]
		const addresseM74bG3 = accounts[4]
		const uintqtFT5Ed = BigInt("1091")
		const addressn6vX8I = accounts[5]
		const uintMWTAG14 = BigInt("1049")
		const addresso8VnPyk = accounts[5]
		const addressw76hkn = accounts[2]
		const addresshaPl37k = accounts[3]
		const addressF7iiFc3 = accounts[0]
		const uintNXPsQW0 = await FompfsuHNTF.allowance.call(addressfh5ujW4, addressFxlf3kQ, {from: accounts[1]});
		const uinti5HdSd = await FompfsuHNTF.balanceOf.call(addresseM74bG3, {from: accounts[0]});
		const uint96GWAldmS = await FompfsuHNTF.getPriorVotes.call(addressn6vX8I, uintqtFT5Ed, {from: accounts[4]});
//		const boolgXP83oa = await FompfsuHNTF.transferFrom.call(addressw76hkn, addresso8VnPyk, uintMWTAG14, {from: accounts[4]});
//		const addressIdt3tNt = await FompfsuHNTF.delegate.call(addresshaPl37k, {from: accounts[5]});
//		const addressFv1p5w = await FompfsuHNTF.delegate.call(addressF7iiFc3, {from: accounts[3]});

		assert.equal(uint96GWAldmS, BigInt("0"))
		assert.equal(uintNXPsQW0, BigInt("0"))
		assert.equal(uinti5HdSd, BigInt("1000000000000000000000000"))
		await expect(FompfsuHNTF.transferFrom.call(addressw76hkn, addresso8VnPyk, uintMWTAG14, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressfG3JXHp = accounts[2]
		const Fompdef1Al2 = await Fomp.new(addressfG3JXHp, {from: accounts[0]});
		const uintQa9OUiK = BigInt("981")
		const addressEABAtW4 = accounts[0]
		const addressSuQEDjn = accounts[1]
		const addressB84uaZk = accounts[1]
		const uintuLaBSmA = BigInt("968")
		const addressfalvqx = accounts[2]
		const uintKW6FB2R = BigInt("812")
		const addressSF1x8Ic = accounts[3]
		const uintcD7DjR = BigInt("1232")
		const addressPg2kgmq = accounts[3]
		const addressy8pe4Ju = accounts[5]
//		const boolNTTbwnb = await Fompdef1Al2.transferFrom.call(addressSuQEDjn, addressEABAtW4, uintQa9OUiK, {from: accounts[0]});
//		const addressDlgOhbw = await Fompdef1Al2.delegate.call(addressB84uaZk, {from: accounts[4]});
//		const boolMdIFRA3 = await Fompdef1Al2.transfer.call(addressfalvqx, uintuLaBSmA, {from: accounts[0]});
//		const uint96N7U6SFE = await Fompdef1Al2.getPriorVotes.call(addressSF1x8Ic, uintKW6FB2R, {from: accounts[2]});
//		const boolOSJoOfK = await Fompdef1Al2.transferFrom.call(addressy8pe4Ju, addressPg2kgmq, uintcD7DjR, {from: accounts[4]});

		await expect(Fompdef1Al2.transferFrom.call(addressSuQEDjn, addressEABAtW4, uintQa9OUiK, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressuqHc3Ei = accounts[0]
		const FompIYf3foa = await Fomp.new(addressuqHc3Ei, {from: "0x0000000000000000000000000000000000000001"});
		const addresslo3VhQ = accounts[3]
		const addressHrDnIpD = accounts[2]
		const addressTwH1ZeR = accounts[0]
		const addressU6jywu = accounts[1]
		const addressGKaack3 = await FompIYf3foa.delegate.call(addresslo3VhQ, {from: accounts[3]});
		const uinthPf0Stw = await FompIYf3foa.allowance.call(addressTwH1ZeR, addressHrDnIpD, {from: accounts[3]});
		const uintdjjZkHp = await FompIYf3foa.balanceOf.call(addressU6jywu, {from: accounts[1]});
	});

	it('test for Fomp', async () => {
		const addressKdYiG1E = accounts[2]
		const FompJDvirJ = await Fomp.new(addressKdYiG1E, {from: accounts[1]});
		const uintflVL15p = BigInt("703")
		const addressJ3GZNLP = accounts[0]
		const uintu8MOreW = BigInt("1626")
		const addressV4e30df = accounts[2]
		const uintkbW4PV2 = BigInt("1736")
		const addressBnQ6ZqC = accounts[2]
		const addresstQTTb3i = accounts[5]
		const bytesv15Zhl = "0x0306050f0e1f0314080a0d0113120f1701111a1a201105181c1b1a06110b191b"
		const bytek5zY96V = "0x0b040c01181418030519100c0c1e0903061a16001b031e071c1408030d170c0b"
		const uintTRmdi8I = BigInt("196")
		const uintWi54O38 = BigInt("1371")
		const uintvJVSfuc = BigInt("1551")
		const addressnpqV59s = accounts[5]
		const uintjl1iPDW = BigInt("1903")
		const addressW7OjKDu = accounts[4]
//		const boolIfb8iA = await FompJDvirJ.transfer.call(addressJ3GZNLP, uintflVL15p, {from: accounts[0]});
//		const boolIew08gt = await FompJDvirJ.approve.call(addressV4e30df, uintu8MOreW, {from: accounts[0]});
//		const boolnJ7F5EX = await FompJDvirJ.transferFrom.call(addresstQTTb3i, addressBnQ6ZqC, uintkbW4PV2, {from: accounts[4]});
//		const addressg7gixYr = await FompJDvirJ.delegateBySig.call(addressnpqV59s, uintvJVSfuc, uintWi54O38, uintTRmdi8I, bytek5zY96V, bytesv15Zhl, {from: accounts[5]});
//		const boolR26iZQh = await FompJDvirJ.transfer.call(addressW7OjKDu, uintjl1iPDW, {from: accounts[0]});

		await expect(FompJDvirJ.transfer.call(addressJ3GZNLP, uintflVL15p, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressPSSOwS5 = "0x0000000000000000000000000000000000000001"
		const FompOuJOpv = await Fomp.new(addressPSSOwS5, {from: accounts[3]});
		const uintE4wVfWq = BigInt("94")
		const addresshdWEQRt = accounts[5]
		const uintQ9CtTU = BigInt("1070")
		const addressF1pkueO = accounts[3]
		const addressjpWINk0 = accounts[0]
		const addressIGkjZUw = accounts[4]
		const byteAtmDx53 = "0x15111d0d02170d18181c1b10031a181a16040c061f1819121510080a0b1c0a14"
		const byteWHvO6rm = "0x1407080d140a0f1f0f0a1f1d101d0f0f061a0809171005140c061a1b1c1a1e0d"
		const uintnV7U4RB = BigInt("161")
		const uintZLql2nT = BigInt("249")
		const uintOs9HmwP = BigInt("111")
		const addressYpyX8Pi = accounts[2]
		const boolvRcJmlb = await FompOuJOpv.approve.call(addresshdWEQRt, uintE4wVfWq, {from: accounts[4]});
		const boolnGg2n7v = await FompOuJOpv.approve.call(addressF1pkueO, uintQ9CtTU, {from: accounts[5]});
		const uint96GmisxGm = await FompOuJOpv.getCurrentVotes.call(addressjpWINk0, {from: accounts[1]});
		const addressi3TJYco = await FompOuJOpv.delegate.call(addressIGkjZUw, {from: accounts[5]});
//		const addressDebhqqi = await FompOuJOpv.delegateBySig.call(addressYpyX8Pi, uintOs9HmwP, uintZLql2nT, uintnV7U4RB, byteWHvO6rm, byteAtmDx53, {from: accounts[2]});

		assert.equal(boolnGg2n7v, true)
		assert.equal(boolvRcJmlb, true)
		assert.equal(uint96GmisxGm, BigInt("0"))
		await expect(FompOuJOpv.delegateBySig.call(addressYpyX8Pi, uintOs9HmwP, uintZLql2nT, uintnV7U4RB, byteWHvO6rm, byteAtmDx53, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressVWXsgjL = accounts[1]
		const FompCUGIxIW = await Fomp.new(addressVWXsgjL, {from: accounts[1]});
		const addressfwUByR = accounts[4]
		const uintNOCjAsf = BigInt("533")
		const addressvdrc7TI = accounts[0]
		const addressNj39Sg2 = accounts[3]
		const uintZhreUZo = BigInt("897")
		const addressy6YccmT = accounts[1]
		const addressuOaLRvl = accounts[4]
		const addressdgoAYXr = accounts[0]
		const addressA6m0sPQ = accounts[1]
		const addresscECXgeO = accounts[4]
		const addressuFXWSAu = await FompCUGIxIW.delegate.call(addressfwUByR, {from: accounts[1]});
//		const boolgVtzX4m = await FompCUGIxIW.transfer.call(addressvdrc7TI, uintNOCjAsf, {from: accounts[4]});
//		const uintTiKu2Xl = await FompCUGIxIW.balanceOf.call(addressNj39Sg2, {from: accounts[1]});
//		const booll2zPGzv = await FompCUGIxIW.transferFrom.call(addressuOaLRvl, addressy6YccmT, uintZhreUZo, {from: accounts[4]});
//		const uintDHLbLxp = await FompCUGIxIW.allowance.call(addressA6m0sPQ, addressdgoAYXr, {from: accounts[1]});
//		const uintnlXxI41 = await FompCUGIxIW.balanceOf.call(addresscECXgeO, {from: accounts[2]});

		await expect(FompCUGIxIW.transfer.call(addressvdrc7TI, uintNOCjAsf, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressiy48xbc = accounts[3]
		const FompkKGz2l0 = await Fomp.new(addressiy48xbc, {from: accounts[3]});
		const uintYTZBpIs = BigInt("122")
		const address3hhCSq = "0x0000000000000000000000000000000000000002"
		const uintyFIeVvI = BigInt("250")
		const addressVODExeP = accounts[4]
		const uintPnZ4DV3 = BigInt("1652")
		const addressolcgfQC = accounts[0]
		const uint96LoymfuH = await FompkKGz2l0.getPriorVotes.call(address3hhCSq, uintYTZBpIs, {from: accounts[3]});
		const uint9614zSAc = await FompkKGz2l0.getPriorVotes.call(addressVODExeP, uintyFIeVvI, {from: "0x0000000000000000000000000000000000000001"});
//		const uint96GpEshKz = await FompkKGz2l0.getPriorVotes.call(addressolcgfQC, uintPnZ4DV3, {from: accounts[0]});

		assert.equal(uint9614zSAc, BigInt("0"))
		assert.equal(uint96LoymfuH, BigInt("0"))
		await expect(FompkKGz2l0.getPriorVotes.call(addressolcgfQC, uintPnZ4DV3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresseXC1JiV = "0x0000000000000000000000000000000000000001"
		const FompOuJOpv = await Fomp.new(addresseXC1JiV, {from: accounts[3]});
		const uintfjepjCG = BigInt("56")
		const addressqf19GH = accounts[3]
		const byteWOcmBO = "0x15010e0a0709120f061b17140f0a12091a0c0305171a0e180e011d1d1714041c"
		const bytea9CH7no = "0x0f0718091a020b12120b0f0b1a141b08111500070e030c171f00061217091f0e"
		const uintcQtFht = BigInt("27")
		const uintQQPpp2O = BigInt("1593")
		const uintMtNZTlI = BigInt("1039")
		const addressR5IAbQu = accounts[1]
		const addressQ70ctDs = "0x0000000000000000000000000000000000000002"
		const uintC7EF1lW = BigInt("1653")
		const addressvE0aRNP = "0x0000000000000000000000000000000000000001"
		const uintGjOlJ5q = BigInt("1070")
		const addressA6RFdm0 = accounts[3]
		const boolvRcJmlb = await FompOuJOpv.approve.call(addressqf19GH, uintfjepjCG, {from: accounts[4]});
//		const address82cBBD = await FompOuJOpv.delegateBySig.call(addressR5IAbQu, uintMtNZTlI, uintQQPpp2O, uintcQtFht, bytea9CH7no, byteWOcmBO, {from: accounts[2]});
//		const addresskmoR9ce = await FompOuJOpv.delegate.call(addressQ70ctDs, {from: accounts[2]});
//		const boolSY6akMR = await FompOuJOpv.transfer.call(addressvE0aRNP, uintC7EF1lW, {from: accounts[3]});
//		const boolnGg2n7v = await FompOuJOpv.approve.call(addressA6RFdm0, uintGjOlJ5q, {from: accounts[5]});

		assert.equal(boolvRcJmlb, true)
		await expect(FompOuJOpv.delegateBySig.call(addressR5IAbQu, uintMtNZTlI, uintQQPpp2O, uintcQtFht, bytea9CH7no, byteWOcmBO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressVHxH2ib = "0x0000000000000000000000000000000000000001"
		const FompOuJOpv = await Fomp.new(addressVHxH2ib, {from: accounts[3]});
		const uint9KuCzW = BigInt("48")
		const addressa1mamb = accounts[3]
		const bytel0ppUTG = "0x14020a0e140c0905130d040d041e0e11150216180419021e03081e1408180602"
		const byteJG87mi4 = "0x1310191b0d090809130a0f140c000c010801020c11161f170417ffffffff1b051c1417"
		const uintsLUYjQw = BigInt("233")
		const uintriSBmu3 = BigInt("474")
		const uintIUzlcJ = BigInt("1900")
		const addressRt5JXoj = accounts[0]
		const byteidwGpvE = "0x1c07031c12191217070d0e14050e0c1210050f050b01010410141e0d020e160f"
		const bytemYw21zi = "0x0b141b1c0a170b0a18190616120b011814010a1308081f08040a07151504101b"
		const uintyDiSHwp = BigInt("132")
		const uintVeoLmzy = BigInt("342")
		const uintvT4KdA2 = BigInt("878")
		const addressJ2x330a = accounts[5]
		const addressyZBh27 = accounts[3]
		const uintxKcknIA = BigInt("1070")
		const addressEK7rgRb = accounts[3]
		const boolvRcJmlb = await FompOuJOpv.approve.call(addressa1mamb, uint9KuCzW, {from: accounts[4]});
//		const addressOsX2ixS = await FompOuJOpv.delegateBySig.call(addressRt5JXoj, uintIUzlcJ, uintriSBmu3, uintsLUYjQw, byteJG87mi4, bytel0ppUTG, {from: accounts[4]});
//		const addressKHJla5 = await FompOuJOpv.delegateBySig.call(addressJ2x330a, uintvT4KdA2, uintVeoLmzy, uintyDiSHwp, bytemYw21zi, byteidwGpvE, {from: accounts[3]});
//		const addresskmoR9ce = await FompOuJOpv.delegate.call(addressyZBh27, {from: accounts[2]});
//		const boolnGg2n7v = await FompOuJOpv.approve.call(addressEK7rgRb, uintxKcknIA, {from: accounts[5]});

		assert.equal(boolvRcJmlb, true)
		await expect(FompOuJOpv.delegateBySig.call(addressRt5JXoj, uintIUzlcJ, uintriSBmu3, uintsLUYjQw, byteJG87mi4, bytel0ppUTG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressVoijaU = "0x0000000000000000000000000000000000000001"
		const FompOuJOpv = await Fomp.new(addressVoijaU, {from: accounts[3]});
		const uintihaweoe = BigInt("5")
		const addressFE6wKg9 = accounts[3]
		const byteaz2p2cP = "0x14020a0e140c0905130d040d041e0e11150216180419021e03081e1408180602"
		const byteVL2T1PN = "0x1310191b0d090807130a0f140c000c010801020c11161f170417ffffffff1b051c1417"
		const uintpsxtbdI = BigInt("233")
		const uint2zJz5y = BigInt("474")
		const uintlIQiR2 = BigInt("1900")
		const addressSLIITLc = accounts[0]
		const uintX9zYcUV = BigInt("1768")
		const addressmf81x2 = accounts[2]
		const addressxlFpy1w = accounts[2]
		const addressYzvcPDQ = accounts[3]
		const boolvRcJmlb = await FompOuJOpv.approve.call(addressFE6wKg9, uintihaweoe, {from: accounts[4]});
//		const addressOsX2ixS = await FompOuJOpv.delegateBySig.call(addressSLIITLc, uintlIQiR2, uint2zJz5y, uintpsxtbdI, byteVL2T1PN, byteaz2p2cP, {from: accounts[4]});
//		const boolBpPPIOy = await FompOuJOpv.transfer.call(addressmf81x2, uintX9zYcUV, {from: accounts[1]});
//		const uint96XXzRVAl = await FompOuJOpv.getCurrentVotes.call(addressxlFpy1w, {from: accounts[2]});
//		const addresskmoR9ce = await FompOuJOpv.delegate.call(addressYzvcPDQ, {from: accounts[2]});

		assert.equal(boolvRcJmlb, true)
		await expect(FompOuJOpv.delegateBySig.call(addressSLIITLc, uintlIQiR2, uint2zJz5y, uintpsxtbdI, byteVL2T1PN, byteaz2p2cP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})