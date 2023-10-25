const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressPTLlaRf = accounts[1]
		const FompCwxNtxO = await Fomp.new(addressPTLlaRf, {from: accounts[1]});
		const uintJBF8NlM = BigInt("1817")
		const addressRRMhN7P = accounts[3]
		const addressXr6XKr8 = accounts[4]
		const byteTfi7Vc9 = "0x131d1e03070c0a180a18110b1e1b0b1e170f0005081b010b111b14061a0d0b19"
		const bytewT2G5CI = "0x160a20150e11081b0910091b0e031c161e1408021f03181c1915020d06151a0e"
		const uintywBK8vN = BigInt("122")
		const uintH1kj6pP = BigInt("1518")
		const uintSNaNsXj = BigInt("962")
		const addresszwaa6eV = accounts[2]
		const uintAtVxL8a = BigInt("1421")
		const addressqR5Ki97 = accounts[3]
		const bytexRCvdHT = "0x01111105021020041d0b010b021e0a1d00130d081a14060e1e00010001151d03"
		const byteMKxXJoN = "0x0a1c0e090e1809121b1e002001051a1e0a140e150f041300041d16171f0e0713"
		const uinttpTgNgr = BigInt("175")
		const uintQZ9G1kH = BigInt("638")
		const uint9QqkZq = BigInt("733")
		const addressd704hHa = accounts[0]
		const uintZDuB4U3 = BigInt("780")
		const addressNqxZaCY = accounts[2]
		const boolZ5It2Gd = await FompCwxNtxO.transferFrom.call(addressXr6XKr8, addressRRMhN7P, uintJBF8NlM, {from: accounts[4]});
		const addressoVkuH11 = await FompCwxNtxO.delegateBySig.call(addresszwaa6eV, uintSNaNsXj, uintH1kj6pP, uintywBK8vN, bytewT2G5CI, byteTfi7Vc9, {from: accounts[5]});
		const boolKaQFc2R = await FompCwxNtxO.transfer.call(addressqR5Ki97, uintAtVxL8a, {from: "0x0000000000000000000000000000000000000001"});
		const addressbRKOdJe = await FompCwxNtxO.delegateBySig.call(addressd704hHa, uint9QqkZq, uintQZ9G1kH, uinttpTgNgr, byteMKxXJoN, bytexRCvdHT, {from: accounts[1]});
		const boolh7uspx7 = await FompCwxNtxO.transfer.call(addressNqxZaCY, uintZDuB4U3, {from: accounts[4]});

		await expect(FompCwxNtxO.transferFrom.call(addressXr6XKr8, addressRRMhN7P, uintJBF8NlM, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresslbk7nZ1 = accounts[4]
		const FompDyoveEU = await Fomp.new(addresslbk7nZ1, {from: accounts[0]});
		const uintJz3FtNf = BigInt("1878")
		const addressxmNBEXk = accounts[4]
		const addressCTfpLHb = accounts[5]
		const uintIKPMCG = BigInt("1674")
		const addressIcucD9i = accounts[1]
		const uintBDYacrh = BigInt("898")
		const addressf38njGr = accounts[0]
		const addresswTBfIcG = accounts[3]
		const addressahqTGDL = accounts[3]
		const addresseBolWtp = accounts[1]
		const boolabEqeyg = await FompDyoveEU.transferFrom.call(addressCTfpLHb, addressxmNBEXk, uintJz3FtNf, {from: accounts[1]});
		const boolX7L2B1 = await FompDyoveEU.approve.call(addressIcucD9i, uintIKPMCG, {from: accounts[3]});
		const boolSRYUDyW = await FompDyoveEU.transferFrom.call(addresswTBfIcG, addressf38njGr, uintBDYacrh, {from: accounts[5]});
		const uintzjzTf5 = await FompDyoveEU.balanceOf.call(addressahqTGDL, {from: accounts[4]});
		const uint96xkTidlJ = await FompDyoveEU.getCurrentVotes.call(addresseBolWtp, {from: accounts[5]});

		await expect(FompDyoveEU.transferFrom.call(addressCTfpLHb, addressxmNBEXk, uintJz3FtNf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressEjGlE7c = accounts[4]
		const FompyZKgK4I = await Fomp.new(addressEjGlE7c, {from: accounts[0]});
		const byteDdjxDqg = "0x0f04041d1910140511181b11120c1700141c1a1b011c1c02001e021f141a0615"
		const byteCAT7RxR = "0x0509020d02191c1712110c0313200003031c151208111c1b1405021b0c0f1904"
		const uintW9otkkO = BigInt("48")
		const uintLsKx54X = BigInt("1151")
		const uintZ00SyvE = BigInt("454")
		const addresszYZLv0 = "0x0000000000000000000000000000000000000001"
		const addressPqtJ2og = accounts[2]
		const uintgi4mfIA = BigInt("431")
		const addressUsnkDN = "0x0000000000000000000000000000000000000001"
		const address2lKkcc = accounts[0]
		const uintH39QgGR = BigInt("949")
		const addressTdN1pae = accounts[1]
		const addresspS8xYm7 = accounts[3]
		const addressiYr7fyq = await FompyZKgK4I.delegateBySig.call(addresszYZLv0, uintZ00SyvE, uintLsKx54X, uintW9otkkO, byteCAT7RxR, byteDdjxDqg, {from: accounts[4]});
		const uintxex8aDG = await FompyZKgK4I.balanceOf.call(addressPqtJ2og, {from: accounts[2]});
		const boolZC56MCG = await FompyZKgK4I.transferFrom.call(address2lKkcc, addressUsnkDN, uintgi4mfIA, {from: accounts[3]});
		const boolc2m26DK = await FompyZKgK4I.transfer.call(addressTdN1pae, uintH39QgGR, {from: "0x0000000000000000000000000000000000000001"});
		const addressDKXvR0s = await FompyZKgK4I.delegate.call(addresspS8xYm7, {from: accounts[2]});

		await expect(FompyZKgK4I.delegateBySig.call(addresszYZLv0, uintZ00SyvE, uintLsKx54X, uintW9otkkO, byteCAT7RxR, byteDdjxDqg, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressLLA3zut = accounts[4]
		const FompgFzpKDp = await Fomp.new(addressLLA3zut, {from: accounts[3]});
		const uintD7EiBhP = BigInt("1586")
		const addresseCOb25v = accounts[0]
		const addressBtDeKVB = accounts[5]
		const uintFLlp6O0 = BigInt("139")
		const addressHEqaaYr = accounts[2]
		const addressVFdFcPb = accounts[3]
		const uint96O1n0vwo = await FompgFzpKDp.getPriorVotes.call(addresseCOb25v, uintD7EiBhP, {from: accounts[4]});
		const addressllozKB9 = await FompgFzpKDp.delegate.call(addressBtDeKVB, {from: accounts[5]});
		const booloZiemm = await FompgFzpKDp.transferFrom.call(addressVFdFcPb, addressHEqaaYr, uintFLlp6O0, {from: accounts[4]});

		await expect(FompgFzpKDp.getPriorVotes.call(addresseCOb25v, uintD7EiBhP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressiuYDZfQ = accounts[4]
		const FompGtgGyDN = await Fomp.new(addressiuYDZfQ, {from: accounts[0]});
		const addressPI3k9u8 = accounts[0]
		const bytew0wPLq = "0x14140708171b0f0f0c16060d130517131714101609171e1c1c061c17131b0b15"
		const byteUSmfOd5 = "0x1918011d1a031509130a110f121c1d0406190c08191a160e1b15040a0e14041c"
		const uintSZ7ezLq = BigInt("74")
		const uintTJ1GyM6 = BigInt("385")
		const uintA0mszPn = BigInt("798")
		const addresspNxw9Ck = accounts[3]
		const uintHGgkQDu = BigInt("1105")
		const addressR8iwdQl = accounts[0]
		const addresss9hhMf = await FompGtgGyDN.delegate.call(addressPI3k9u8, {from: accounts[4]});
		const addresswhzCede = await FompGtgGyDN.delegateBySig.call(addresspNxw9Ck, uintA0mszPn, uintTJ1GyM6, uintSZ7ezLq, byteUSmfOd5, bytew0wPLq, {from: accounts[4]});
		const boolC9hKcff = await FompGtgGyDN.transfer.call(addressR8iwdQl, uintHGgkQDu, {from: accounts[0]});

		await expect(FompGtgGyDN.delegateBySig.call(addresspNxw9Ck, uintA0mszPn, uintTJ1GyM6, uintSZ7ezLq, byteUSmfOd5, bytew0wPLq, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressF5B5rcQ = accounts[2]
		const Fompb1e8GWW = await Fomp.new(addressF5B5rcQ, {from: "0x0000000000000000000000000000000000000001"});
		const uintnrzAoUR = BigInt("1810")
		const addressCWx36V = accounts[1]
		const addressucaLS4y = accounts[4]
		const boollzLD5v = await Fompb1e8GWW.approve.call(addressCWx36V, uintnrzAoUR, {from: accounts[1]});
		const uint96t8ioAW7 = await Fompb1e8GWW.getCurrentVotes.call(addressucaLS4y, {from: accounts[3]});
	});

	it('test for Fomp', async () => {
		const addressBySppRM = accounts[5]
		const Fompf7yCZUK = await Fomp.new(addressBySppRM, {from: accounts[4]});
		const uintfguNRim = BigInt("261")
		const addressxiWeBUP = accounts[5]
		const uintAavNFCg = BigInt("754")
		const addressYPrdwRZ = accounts[0]
		const uintkQYe8HQ = BigInt("1721")
		const addressXAs5Shb = accounts[3]
		const addressqNu24iB = accounts[3]
		const addressu2voF0B = accounts[4]
		const boolWJkRvYt = await Fompf7yCZUK.transfer.call(addressxiWeBUP, uintfguNRim, {from: accounts[4]});
		const boolFsznV3 = await Fompf7yCZUK.transfer.call(addressYPrdwRZ, uintAavNFCg, {from: accounts[2]});
		const booljVzdelB = await Fompf7yCZUK.transferFrom.call(addressqNu24iB, addressXAs5Shb, uintkQYe8HQ, {from: accounts[3]});
		const uint96bmRBJEO = await Fompf7yCZUK.getCurrentVotes.call(addressu2voF0B, {from: accounts[3]});

		await expect(Fompf7yCZUK.transfer.call(addressxiWeBUP, uintfguNRim, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressfxS5jBC = accounts[4]
		const FompAIb4Iqb = await Fomp.new(addressfxS5jBC, {from: accounts[2]});
		const uinttXqBzJ = BigInt("635")
		const addressUpLSn7R = accounts[2]
		const uintz6yTaKd = BigInt("225")
		const addressv4T4rIv = accounts[2]
		const addressJILNrIE = accounts[5]
		const addressJaysctv = accounts[5]
		const uintv2orqY8 = BigInt("1657")
		const addressgGNu095 = "0x0000000000000000000000000000000000000001"
		const uintBXvRWY = BigInt("1801")
		const addresskGIg0jR = accounts[4]
		const addresspIrN4Yl = accounts[4]
		const boolyrRNuM = await FompAIb4Iqb.approve.call(addressUpLSn7R, uinttXqBzJ, {from: accounts[5]});
		const boolZ03tAY7 = await FompAIb4Iqb.transferFrom.call(addressJILNrIE, addressv4T4rIv, uintz6yTaKd, {from: accounts[1]});
		const uintzJvj1or = await FompAIb4Iqb.balanceOf.call(addressJaysctv, {from: accounts[2]});
		const boolGsYcKa = await FompAIb4Iqb.transfer.call(addressgGNu095, uintv2orqY8, {from: accounts[3]});
		const boolGbcMPwZ = await FompAIb4Iqb.transferFrom.call(addresspIrN4Yl, addresskGIg0jR, uintBXvRWY, {from: accounts[3]});

		assert.equal(boolyrRNuM, true)
		await expect(FompAIb4Iqb.transferFrom.call(addressJILNrIE, addressv4T4rIv, uintz6yTaKd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressm8GqfgF = accounts[2]
		const FompFZKWLc = await Fomp.new(addressm8GqfgF, {from: accounts[4]});
		const addressfK01KE = accounts[2]
		const addressRNMIXi7 = accounts[0]
		const addressKybollg = accounts[1]
		const addresssn3Urbq = accounts[1]
		const uintDNPFzjK = BigInt("955")
		const addressENt8DDN = accounts[2]
		const uint96oFJqwbs = await FompFZKWLc.getCurrentVotes.call(addressfK01KE, {from: accounts[0]});
		const uintne2i3p = await FompFZKWLc.balanceOf.call(addressRNMIXi7, {from: accounts[3]});
		const addressDqZXMAN = await FompFZKWLc.delegate.call(addressKybollg, {from: accounts[2]});
		const addressscbeZll = await FompFZKWLc.delegate.call(addresssn3Urbq, {from: accounts[0]});
		const boolecDHY2W = await FompFZKWLc.transfer.call(addressENt8DDN, uintDNPFzjK, {from: accounts[1]});

		assert.equal(uint96oFJqwbs, BigInt("0"))
		assert.equal(uintne2i3p, BigInt("0"))
		await expect(FompFZKWLc.transfer.call(addressENt8DDN, uintDNPFzjK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressArcxWDi = accounts[4]
		const FompGtgGyDN = await Fomp.new(addressArcxWDi, {from: accounts[0]});
		const uintifilOQ = BigInt("1829")
		const addressKQQPyZ2 = accounts[1]
		const addressujeUK0G = accounts[0]
		const uintkDGDVzV = BigInt("1340")
		const addressspkfMlq = accounts[3]
		const addresst7yIaLV = accounts[1]
		const uintQFlfdC = BigInt("937")
		const addresspuUaO2 = accounts[4]
		const addresssf4Y3Ve = accounts[2]
		const addressArS8p7C = accounts[4]
		const bytes5dyxZY = "0x08081d180b1c1f0c0c02041c06131a16191b19160e0e1c0b110918180e1c0904"
		const byteX9rV9Yz = "0x1b160417041117050406160c141f1b0e0b040011080e1519131310180f0f130c"
		const uintpEFQckh = BigInt("158")
		const uinth6iWO6e = BigInt("144")
		const uintwMVeRK = BigInt("519")
		const addressChV8SbO = accounts[2]
		const boolhErq7kt = await FompGtgGyDN.transfer.call(addressKQQPyZ2, uintifilOQ, {from: accounts[4]});
		const addresss9hhMf = await FompGtgGyDN.delegate.call(addressujeUK0G, {from: accounts[4]});
		const boolkbwSuup = await FompGtgGyDN.transferFrom.call(addresst7yIaLV, addressspkfMlq, uintkDGDVzV, {from: accounts[0]});
		const booldiM6dLL = await FompGtgGyDN.approve.call(addresspuUaO2, uintQFlfdC, {from: accounts[3]});
		const addressGXDbLkG = await FompGtgGyDN.delegate.call(addresssf4Y3Ve, {from: accounts[4]});
		const uintJh2uktG = await FompGtgGyDN.balanceOf.call(addressArS8p7C, {from: accounts[0]});
		const addressysxS8jf = await FompGtgGyDN.delegateBySig.call(addressChV8SbO, uintwMVeRK, uinth6iWO6e, uintpEFQckh, byteX9rV9Yz, bytes5dyxZY, {from: accounts[0]});

		assert.equal(boolhErq7kt, true)
		await expect(FompGtgGyDN.transferFrom.call(addresst7yIaLV, addressspkfMlq, uintkDGDVzV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressYLawOx = accounts[4]
		const FompGtgGyDN = await Fomp.new(addressYLawOx, {from: accounts[0]});
		const addressaFR7b4 = accounts[1]
		const addressCzRYs58 = accounts[1]
		const addresswXxjbNq = accounts[4]
		const addresss9hhMf = await FompGtgGyDN.delegate.call(addressaFR7b4, {from: accounts[4]});
		const uintuosb6Qw = await FompGtgGyDN.allowance.call(addresswXxjbNq, addressCzRYs58, {from: accounts[1]});

		assert.equal(uintuosb6Qw, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressqh8D6Dc = accounts[4]
		const FompGtgGyDN = await Fomp.new(addressqh8D6Dc, {from: accounts[0]});
		const addressedEBMV5 = accounts[1]
		const uintZTZwrln = BigInt("156")
		const addressayjtneD = accounts[2]
		const uintJ2oKxJj = BigInt("1479")
		const addressEC0RgPs = accounts[5]
		const uint96hgwSApE = await FompGtgGyDN.getCurrentVotes.call(addressedEBMV5, {from: accounts[5]});
		const uint96hY7R6ZU = await FompGtgGyDN.getPriorVotes.call(addressayjtneD, uintZTZwrln, {from: accounts[1]});
		const uint96au5izeh = await FompGtgGyDN.getPriorVotes.call(addressEC0RgPs, uintJ2oKxJj, {from: accounts[1]});

		assert.equal(uint96hY7R6ZU, BigInt("0"))
		assert.equal(uint96hgwSApE, BigInt("0"))
		await expect(FompGtgGyDN.getPriorVotes.call(addressEC0RgPs, uintJ2oKxJj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressjnMiHU0 = accounts[4]
		const FompGtgGyDN = await Fomp.new(addressjnMiHU0, {from: accounts[0]});
		const addressQO1t83H = accounts[1]
		const byteUFv0HF5 = "0x14140708171b0f0f0c16060d130517131714101609171e1c1c061c17131b0b15"
		const byteHS4fYoJ = "0x1918011d1a031509130a110f121c1dfffffffc06190c08191a160e1b15040a0e14041c"
		const uintZBcjvvt = BigInt("74")
		const uintE7pfONJ = BigInt("385")
		const uintqpnuiM2 = BigInt("798")
		const addressWyrHDkH = accounts[4]
		const uinte7fBewI = await FompGtgGyDN.balanceOf.call(addressQO1t83H, {from: accounts[4]});
		const addresswhzCede = await FompGtgGyDN.delegateBySig.call(addressWyrHDkH, uintqpnuiM2, uintE7pfONJ, uintZBcjvvt, byteHS4fYoJ, byteUFv0HF5, {from: accounts[4]});

		assert.equal(uinte7fBewI, BigInt("0"))
		await expect(FompGtgGyDN.delegateBySig.call(addressWyrHDkH, uintqpnuiM2, uintE7pfONJ, uintZBcjvvt, byteHS4fYoJ, byteUFv0HF5, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const address0mHhuq = accounts[4]
		const FompGtgGyDN = await Fomp.new(address0mHhuq, {from: accounts[0]});
		const bytesyCKvT = "0x14140708171b0f0f0c16060d130517131714101609171e1c1c061c17131b0b15"
		const byteRYdLuEZ = "0x1918011d1a031509130a110f121c1d04ffffffff190c08191a160e1b15040a0e14041c"
		const uintFGVhhZ1 = BigInt("74")
		const uintA0EhEKQ = BigInt("385")
		const uintkoVwf6U = BigInt("798")
		const address61xDwo = accounts[4]
		const addressLUx8j6J = accounts[2]
		const addressuk30Hjj = accounts[1]
		const addresswhzCede = await FompGtgGyDN.delegateBySig.call(address61xDwo, uintkoVwf6U, uintA0EhEKQ, uintFGVhhZ1, byteRYdLuEZ, bytesyCKvT, {from: accounts[4]});
		const uintr3kr03t = await FompGtgGyDN.allowance.call(addressuk30Hjj, addressLUx8j6J, {from: accounts[2]});

		await expect(FompGtgGyDN.delegateBySig.call(address61xDwo, uintkoVwf6U, uintA0EhEKQ, uintFGVhhZ1, byteRYdLuEZ, bytesyCKvT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})