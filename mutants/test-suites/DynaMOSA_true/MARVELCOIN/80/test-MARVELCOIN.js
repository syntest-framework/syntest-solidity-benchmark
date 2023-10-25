const MARVELCOIN = artifacts.require("MARVELCOIN");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('MARVELCOIN', (accounts) => {
	it('test for MARVELCOIN', async () => {
		const uintfQGmY4 = BigInt("1419")
		const stringfbFc4tl = "7XhXyqDRufeop2TooomraAK8l3H36cKYUEopt308DnMiUl9LknyFUC"
		const stringinPmhFd = "h4lrTQjGXc1tf8G8NJeIT3aWggW8tNwb18lyowm5cYGTKhjgJkO"
		const MARVELCOINsCA8sVl = await MARVELCOIN.new(uintfQGmY4, stringfbFc4tl, stringinPmhFd, {from: accounts[0]});
		const uintaFlrTBt = BigInt("724")
		const addressXtsyn1 = accounts[0]
		const uintmstFvcT = BigInt("245")
		const addressfXdvATt = accounts[2]
		const byteJsvjGh = "0x150319090608191f0914190e12031f120b04030f"
		const uintOEm1eLx = BigInt("1076")
		const addressRmAfnF0 = accounts[3]
		const uinte6kPPH0 = BigInt("990")
		const uintjIIA2SP = BigInt("1591")
		const addresssXqvDa2 = accounts[4]
		const addressnIPPkvQ = accounts[0]
//		const boolLgaw2Ja = await MARVELCOINsCA8sVl.transfer.call(addressXtsyn1, uintaFlrTBt, {from: accounts[5]});
//		const boola3WUnLs = await MARVELCOINsCA8sVl.approve.call(addressfXdvATt, uintmstFvcT, {from: accounts[0]});
//		const boolar6GJVz = await MARVELCOINsCA8sVl.approveAndCall.call(addressRmAfnF0, uintOEm1eLx, byteJsvjGh, {from: accounts[3]});
//		const boolnpE5me0 = await MARVELCOINsCA8sVl.burn.call(uinte6kPPH0, {from: accounts[4]});
//		const boolNcqRk8 = await MARVELCOINsCA8sVl.transferFrom.call(addressnIPPkvQ, addresssXqvDa2, uintjIIA2SP, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MARVELCOINsCA8sVl.transfer.call(addressXtsyn1, uintaFlrTBt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintSfJPFOj = BigInt("543")
		const stringYXaOGrZ = "yVL"
		const stringF3uP3lR = "Fg7B4QgQzvJ0Vd1Mrm9VCmgWkDI4NXpfTfPPj85vowa9olvvzTlfTvm1HtYQA2WfKh8nnXKiGwhyC23XBLU7UFT"
		const MARVELCOINRYVRKab = await MARVELCOIN.new(uintSfJPFOj, stringYXaOGrZ, stringF3uP3lR, {from: accounts[1]});
		const uintyfzFs0n = BigInt("1149")
		const addressmxQ1Lp = accounts[0]
		const uintlmWHygG = BigInt("1632")
		const addressIBHdKg = accounts[3]
		const uintdPO9MZ = BigInt("269")
		const addresswvQoRKR = accounts[0]
		const addressNvKVWaJ = accounts[1]
//		const boolbGCdQR9 = await MARVELCOINRYVRKab.burnFrom.call(addressmxQ1Lp, uintyfzFs0n, {from: accounts[4]});
//		const boolQJrdYhZ = await MARVELCOINRYVRKab.transfer.call(addressIBHdKg, uintlmWHygG, {from: accounts[3]});
//		const boolfDHp4n = await MARVELCOINRYVRKab.transferFrom.call(addressNvKVWaJ, addresswvQoRKR, uintdPO9MZ, {from: accounts[3]});

		await expect(MARVELCOINRYVRKab.burnFrom.call(addressmxQ1Lp, uintyfzFs0n, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintX7KAGBe = BigInt("920")
		const stringCxqp28q = "celcgWzTbtmos3Qb9W9YoCARrLViUF1vfCf2CUWdCMyaPyHVcHFmEPPcILriUVLw0COQvtaWvMQkiVYDUoNrv1uwvT1l"
		const stringt8s1eLI = "Giq9bY4ljeudHnDvFEQCAfp5prWC4zthXbsaSBD2HC743HIwQ9vNDWkTYwHmlKoPETFexbRBwcU"
		const MARVELCOINH4l6Izd = await MARVELCOIN.new(uintX7KAGBe, stringCxqp28q, stringt8s1eLI, {from: accounts[2]});
		const uintZzHilFF = BigInt("1054")
		const addressSF0VlIL = accounts[5]
		const uintofTAkWM = BigInt("649")
		const addressGJevNQg = accounts[1]
		const bytekCfMq4O = "0x17100e1d1916190011"
		const uintGseRgM = BigInt("1189")
		const addresscV7xPoY = accounts[0]
		const booluprbOpt = await MARVELCOINH4l6Izd.approve.call(addressSF0VlIL, uintZzHilFF, {from: accounts[3]});
//		const boolvLpInjs = await MARVELCOINH4l6Izd.burnFrom.call(addressGJevNQg, uintofTAkWM, {from: accounts[1]});
//		const boolF8MEirR = await MARVELCOINH4l6Izd.approveAndCall.call(addresscV7xPoY, uintGseRgM, bytekCfMq4O, {from: accounts[0]});

		assert.equal(booluprbOpt, true)
		await expect(MARVELCOINH4l6Izd.burnFrom.call(addressGJevNQg, uintofTAkWM, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintdbBkpA = BigInt("401")
		const stringhxNbFvH = "TUIYKwEpIk1lltwswpVCFcSUBmyP3r"
		const stringKzdNAhX = "o14Ehl6MMivdcIr7md87RPYhS"
		const MARVELCOINFXg70MM = await MARVELCOIN.new(uintdbBkpA, stringhxNbFvH, stringKzdNAhX, {from: accounts[3]});
		const uintEuVzXe = BigInt("830")
		const addressp3qcHuV = accounts[4]
		const addressk2PpbxT = accounts[5]
		const bytehPDhKix = "0x081d1e160e090e131a0b050a15130a1e1e0a0c0f14191d180b"
		const uintYBlAy75 = BigInt("1309")
		const addressVGlwxg = accounts[2]
		const uintOJByuiH = BigInt("1992")
//		const boolg1YhAAG = await MARVELCOINFXg70MM.transferFrom.call(addressk2PpbxT, addressp3qcHuV, uintEuVzXe, {from: accounts[1]});
//		const boolkI2vcgs = await MARVELCOINFXg70MM.approveAndCall.call(addressVGlwxg, uintYBlAy75, bytehPDhKix, {from: accounts[3]});
//		const boolf1pUIiJ = await MARVELCOINFXg70MM.burn.call(uintOJByuiH, {from: "0x0000000000000000000000000000000000000001"});

		await expect(MARVELCOINFXg70MM.transferFrom.call(addressk2PpbxT, addressp3qcHuV, uintEuVzXe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintSPWutWQ = BigInt("1448")
		const stringBwItjsB = "lqkICzcQQYSPpuEkasXUsoYo"
		const stringHO8bLx0 = "fKOEf39Dodjs"
		const MARVELCOINELt9TxU = await MARVELCOIN.new(uintSPWutWQ, stringBwItjsB, stringHO8bLx0, {from: accounts[0]});
		const uintmPO3g3f = BigInt("570")
		const addresstcMv3fa = accounts[3]
		const bytem6djsf = "0x162016141b1f060c0e181107001f04160d1717"
		const uintez18Nyk = BigInt("1027")
		const address8uprjU = accounts[0]
		const uintZGUNORb = BigInt("1655")
		const addressZ6Wqi4Y = accounts[1]
		const byteNTzhMfp = "0x19141906141e120c0e1f0c141a0806190d1e0c2008040006020a0c121119"
		const uintGSAl21e = BigInt("1079")
		const addressb4iUtMx = accounts[2]
		const uintx8Fxtcc = BigInt("1470")
		const addresse507hBx = accounts[0]
		const uintMGmHpYG = BigInt("265")
		const addressyjxWJ5V = accounts[4]
		const booloHjPee9 = await MARVELCOINELt9TxU.approve.call(addresstcMv3fa, uintmPO3g3f, {from: accounts[1]});
//		const booll2252hv = await MARVELCOINELt9TxU.approveAndCall.call(address8uprjU, uintez18Nyk, bytem6djsf, {from: accounts[2]});
//		const boolraVIcED = await MARVELCOINELt9TxU.approve.call(addressZ6Wqi4Y, uintZGUNORb, {from: accounts[0]});
//		const boolUInNWx7 = await MARVELCOINELt9TxU.approveAndCall.call(addressb4iUtMx, uintGSAl21e, byteNTzhMfp, {from: accounts[5]});
//		const boolQnJrkED = await MARVELCOINELt9TxU.burnFrom.call(addresse507hBx, uintx8Fxtcc, {from: accounts[0]});
//		const boolLefqkFD = await MARVELCOINELt9TxU.approve.call(addressyjxWJ5V, uintMGmHpYG, {from: accounts[3]});

		assert.equal(booloHjPee9, true)
		await expect(MARVELCOINELt9TxU.approveAndCall.call(address8uprjU, uintez18Nyk, bytem6djsf, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintA57TfR2 = BigInt("1800")
		const stringlUWLI7G = "pzRqQYIYc2TbRzAOSokUZuz1oXvGaP1kzVDbgkJzjH4Q8nVRTAzInmRsFDKa3rHQdf"
		const string53Zvzc = "2u8M2sSKHhl8JpFMdD43SH0MILEvQ7VDK46oFyGzB7vYaiRibEdaGCJKu1yTa8ASnOUqo"
		const MARVELCOINaUtlAyH = await MARVELCOIN.new(uintA57TfR2, stringlUWLI7G, string53Zvzc, {from: accounts[2]});
		const uintjZ6FlU1 = BigInt("969")
		const uintI7wJDtK = BigInt("688")
		const uintZ0qpC8a = BigInt("691")
		const addressWGb4OZf = "0x0000000000000000000000000000000000000001"
		const addressdFDAGVN = accounts[1]
		const uintG7LGCoG = BigInt("1914")
		const uintPi1ZGk5 = BigInt("1175")
//		const boolaBzMcNX = await MARVELCOINaUtlAyH.burn.call(uintjZ6FlU1, {from: accounts[3]});
//		const boolYJTTlee = await MARVELCOINaUtlAyH.burn.call(uintI7wJDtK, {from: accounts[0]});
//		const boolzNrrXyE = await MARVELCOINaUtlAyH.transferFrom.call(addressdFDAGVN, addressWGb4OZf, uintZ0qpC8a, {from: accounts[3]});
//		const boolZODe9ws = await MARVELCOINaUtlAyH.burn.call(uintG7LGCoG, {from: accounts[4]});
//		const boolFNK9LgT = await MARVELCOINaUtlAyH.burn.call(uintPi1ZGk5, {from: accounts[0]});

		await expect(MARVELCOINaUtlAyH.burn.call(uintjZ6FlU1, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintLVpElFc = BigInt("1470")
		const stringeZjcrmr = "0xxyrLYQY"
		const stringTOC0rz = "3R6vxPTL7wKRJEtYiDazGhc6s6EglBzrxZRFIx1rHlIqqix2"
		const MARVELCOINfHCopGg = await MARVELCOIN.new(uintLVpElFc, stringeZjcrmr, stringTOC0rz, {from: "0x0000000000000000000000000000000000000001"});
		const uintMHAZet = BigInt("1267")
		const addressQ0R77yR = "0x0000000000000000000000000000000000000001"
		const addressxLGccbe = accounts[4]
		const uintiV0VNYA = BigInt("435")
		const addressBR33Pj0 = accounts[0]
		const uintKIABIxk = BigInt("226")
		const addressQ8fyYIN = accounts[4]
		const addressPsMZudj = accounts[1]
		const uintR4FH8zZ = BigInt("292")
		const uinttlE2d45 = BigInt("639")
		const addressjEpw7fz = accounts[4]
		const addresswkayiHx = accounts[1]
		const uintmE3xuQQ = BigInt("593")
		const addressisJK6MC = accounts[3]
		const boolVKXUeYS = await MARVELCOINfHCopGg.transferFrom.call(addressxLGccbe, addressQ0R77yR, uintMHAZet, {from: accounts[0]});
		const boolYFLxZLv = await MARVELCOINfHCopGg.approve.call(addressBR33Pj0, uintiV0VNYA, {from: accounts[3]});
		const boolqGzZfEv = await MARVELCOINfHCopGg.transferFrom.call(addressPsMZudj, addressQ8fyYIN, uintKIABIxk, {from: accounts[1]});
		const boolNg7vUDX = await MARVELCOINfHCopGg.burn.call(uintR4FH8zZ, {from: accounts[3]});
		const boolxhEzBPF = await MARVELCOINfHCopGg.transferFrom.call(addresswkayiHx, addressjEpw7fz, uinttlE2d45, {from: accounts[1]});
		const boollHehzN5 = await MARVELCOINfHCopGg.approve.call(addressisJK6MC, uintmE3xuQQ, {from: accounts[4]});
	});

	it('test for MARVELCOIN', async () => {
		const uinttDrNWR = BigInt("543")
		const stringYXaOGrZ = "yVL"
		const stringF3uP3lR = "Fg7B4QgQzvJ0Vd1Mrm9VCmgWkDI4NXpfTfPPj85vowa9olvvzTlfTvm1HtYQA2WfKh8nnXKiGwhyC23XBLU7UFT"
		const MARVELCOINRYVRKab = await MARVELCOIN.new(uinttDrNWR, stringYXaOGrZ, stringF3uP3lR, {from: accounts[1]});
		const uintZDpLU05 = BigInt("846")
		const uintWwEZkq8 = BigInt("1841")
		const addressLMtXYYw = accounts[0]
		const uintt5SuVzb = BigInt("269")
		const addressf2GbMSu = accounts[1]
		const addressmAoiC0r = accounts[1]
		const booltsfY2M0 = await MARVELCOINRYVRKab.burn.call(uintZDpLU05, {from: accounts[1]});
//		const boolbGCdQR9 = await MARVELCOINRYVRKab.burnFrom.call(addressLMtXYYw, uintWwEZkq8, {from: accounts[4]});
//		const boolfDHp4n = await MARVELCOINRYVRKab.transferFrom.call(addressmAoiC0r, addressf2GbMSu, uintt5SuVzb, {from: accounts[3]});

		assert.equal(booltsfY2M0, true)
		await expect(MARVELCOINRYVRKab.burnFrom.call(addressLMtXYYw, uintWwEZkq8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintur2QRry = BigInt("543")
		const stringYXaOGrZ = "yVL"
		const stringF3uP3lR = "Fg7B4QgQzvJ0Vd1Mrm9VCmgWkDI4NXpfTfPPj85vowa9olvvzTlfTvm1HtYQA2WfKh8nnXKiGwhyC23XBLU7UFT"
		const MARVELCOINRYVRKab = await MARVELCOIN.new(uintur2QRry, stringYXaOGrZ, stringF3uP3lR, {from: accounts[1]});
		const uintTTVoKSP = BigInt("1841")
		const addresspaXPRe4 = accounts[1]
		const bytegWdft5a = "0x09051010010d0d071b171509070203080f0a1b0c1f17121d050b02180c0c03"
		const uintoXErsJG = BigInt("1748")
		const addressF0HmBw = accounts[0]
//		const boolbGCdQR9 = await MARVELCOINRYVRKab.burnFrom.call(addresspaXPRe4, uintTTVoKSP, {from: accounts[4]});
//		const boolBWOPCPb = await MARVELCOINRYVRKab.approveAndCall.call(addressF0HmBw, uintoXErsJG, bytegWdft5a, {from: accounts[4]});

		await expect(MARVELCOINRYVRKab.burnFrom.call(addresspaXPRe4, uintTTVoKSP, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for MARVELCOIN', async () => {
		const uintwBazneT = BigInt("862")
		const stringMPbZYz0 = "x8aDkTJTdyDvSnOWRDP7qJc"
		const stringxLcwYIn = "fJplCKLMvC2nXai5WG7qEfY7nZKpeWXljBGwoc8GE0"
		const MARVELCOINRWnB3Ia = await MARVELCOIN.new(uintwBazneT, stringMPbZYz0, stringxLcwYIn, {from: accounts[0]});
		const uintuwArqSh = BigInt("784")
		const addressV0Wfr6b = accounts[0]
		const uintUpMkmwv = BigInt("227")
		const addressVVEHHr3 = "0x0000000000000000000000000000000000000001"
		const uintlsKcXS3 = BigInt("1060")
		const uintXkajHPF = BigInt("557")
		const uintrnIKlTR = BigInt("943")
		const addressYi1Lw4z = accounts[3]
		const uintOLC2GpB = BigInt("1237")
		const boolQRk3vZU = await MARVELCOINRWnB3Ia.transfer.call(addressV0Wfr6b, uintuwArqSh, {from: accounts[0]});
//		const boolduiyBbQ = await MARVELCOINRWnB3Ia.transfer.call(addressVVEHHr3, uintUpMkmwv, {from: "0x0000000000000000000000000000000000000001"});
//		const boolfiYmqrM = await MARVELCOINRWnB3Ia.burn.call(uintlsKcXS3, {from: accounts[0]});
//		const boolnMZNWhV = await MARVELCOINRWnB3Ia.burn.call(uintXkajHPF, {from: accounts[0]});
//		const boolJ0pFdi1 = await MARVELCOINRWnB3Ia.approve.call(addressYi1Lw4z, uintrnIKlTR, {from: accounts[5]});
//		const boolv0tFPiA = await MARVELCOINRWnB3Ia.burn.call(uintOLC2GpB, {from: accounts[1]});

		assert.equal(boolQRk3vZU, true)
		await expect(MARVELCOINRWnB3Ia.transfer.call(addressVVEHHr3, uintUpMkmwv, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})