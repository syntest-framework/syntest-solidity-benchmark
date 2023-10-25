const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressyQkWAnr = accounts[2]
		const Fompi5YhOG = await Fomp.new(addressyQkWAnr, {from: accounts[0]});
		const uintgVxedu = BigInt("223")
		const addressefQXQLm = accounts[0]
		const addressbjjzWFx = accounts[4]
		const addressJMYhQ3k = accounts[5]
		const addressIcGILDb = accounts[3]
		const uintBflEgLF = BigInt("96")
		const addressXMRsanX = accounts[5]
		const uintJVBgl3k = BigInt("1989")
		const addresslcAjG6Y = "0x0000000000000000000000000000000000000001"
		const boolc4rZz1F = await Fompi5YhOG.transferFrom.call(addressbjjzWFx, addressefQXQLm, uintgVxedu, {from: accounts[5]});
		const uintBiEc4mg = await Fompi5YhOG.balanceOf.call(addressJMYhQ3k, {from: accounts[3]});
		const uint96shY6Q8a = await Fompi5YhOG.getCurrentVotes.call(addressIcGILDb, {from: accounts[2]});
		const booliwI1zkD = await Fompi5YhOG.approve.call(addressXMRsanX, uintBflEgLF, {from: accounts[2]});
		const boolXxE24gx = await Fompi5YhOG.transfer.call(addresslcAjG6Y, uintJVBgl3k, {from: accounts[5]});

		await expect(Fompi5YhOG.transferFrom.call(addressbjjzWFx, addressefQXQLm, uintgVxedu, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressGVetaof = accounts[1]
		const FompX0IrQx = await Fomp.new(addressGVetaof, {from: accounts[0]});
		const uintGqLKSCQ = BigInt("913")
		const addresssXmbVQ = accounts[2]
		const addressHE2p9ER = accounts[5]
		const byteJEZye2y = "0x011302180909020a1c09150a0114160e091005100816200712021f0f1f0e0f1a"
		const byteG4JSdOp = "0x11011406050c1f051907050c01181e02061311160c0a02010f1b030210121408"
		const uintldGgdep = BigInt("39")
		const uintmHyC7R8 = BigInt("587")
		const uintSDUtZUX = BigInt("1327")
		const addressmtYSsS = accounts[5]
		const byteUJj8qIU = "0x150b150302110b081a0d1306101b001113140f0013141e130e11030204121204"
		const byteCdpPNii = "0x0c0c10110e180b010c14050f0e120a0c1402091601110e02011a071a1d0a0100"
		const uintUc8JdkL = BigInt("241")
		const uintmHm3gNE = BigInt("1094")
		const uintWjVwBul = BigInt("1081")
		const addressN85IRg7 = accounts[2]
		const boolohhfoc = await FompX0IrQx.transfer.call(addresssXmbVQ, uintGqLKSCQ, {from: accounts[4]});
		const uint964agqzt = await FompX0IrQx.getCurrentVotes.call(addressHE2p9ER, {from: "0x0000000000000000000000000000000000000001"});
		const addressLYhwkf = await FompX0IrQx.delegateBySig.call(addressmtYSsS, uintSDUtZUX, uintmHyC7R8, uintldGgdep, byteG4JSdOp, byteJEZye2y, {from: accounts[1]});
		const addressrI5rDLU = await FompX0IrQx.delegateBySig.call(addressN85IRg7, uintWjVwBul, uintmHm3gNE, uintUc8JdkL, byteCdpPNii, byteUJj8qIU, {from: accounts[1]});

		await expect(FompX0IrQx.transfer.call(addresssXmbVQ, uintGqLKSCQ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressyv2dzi9 = accounts[2]
		const FompDm8eMUL = await Fomp.new(addressyv2dzi9, {from: accounts[4]});
		const uintNWMH1T5 = BigInt("647")
		const addressuLFBsJQ = accounts[5]
		const addressfxoSog2 = "0x0000000000000000000000000000000000000001"
		const addressjSN6cWG = accounts[3]
		const addressbeJ2iPO = accounts[0]
		const uint96ixjjvQu = await FompDm8eMUL.getPriorVotes.call(addressuLFBsJQ, uintNWMH1T5, {from: accounts[1]});
		const addressdiUlNQA = await FompDm8eMUL.delegate.call(addressfxoSog2, {from: accounts[2]});
		const uintHggPtgU = await FompDm8eMUL.balanceOf.call(addressjSN6cWG, {from: accounts[1]});
		const uint96qx8rnyW = await FompDm8eMUL.getCurrentVotes.call(addressbeJ2iPO, {from: accounts[3]});

		assert.equal(uint96ixjjvQu, BigInt("0"))
		assert.equal(uint96qx8rnyW, BigInt("0"))
		assert.equal(uintHggPtgU, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressusZrLFV = accounts[2]
		const FompLA6tUc = await Fomp.new(addressusZrLFV, {from: "0x0000000000000000000000000000000000000001"});
		const byteCpfeBgI = "0x0a130e041f1c17010f1d1313161f07191b070c01000213181b190f121f091402"
		const byteJcXQJT = "0x04030d190e071a0e0d141616050f10011f10102017111d18091804020f04010c"
		const uintavpQBRY = BigInt("93")
		const uintUxw3anw = BigInt("119")
		const uintwEnoduE = BigInt("183")
		const addressRSqfnKa = accounts[5]
		const addressiu1ppd7 = "0x0000000000000000000000000000000000000001"
		const uintheoAwsm = BigInt("1592")
		const addressFIRWx7n = accounts[2]
		const addressavhrOn = accounts[3]
		const addressqT5vs7w = await FompLA6tUc.delegateBySig.call(addressRSqfnKa, uintwEnoduE, uintUxw3anw, uintavpQBRY, byteJcXQJT, byteCpfeBgI, {from: accounts[2]});
		const uint96y87L9Jl = await FompLA6tUc.getCurrentVotes.call(addressiu1ppd7, {from: accounts[4]});
		const booldhOl1Um = await FompLA6tUc.transfer.call(addressFIRWx7n, uintheoAwsm, {from: accounts[4]});
		const addressr51PxCm = await FompLA6tUc.delegate.call(addressavhrOn, {from: accounts[4]});
	});

	it('test for Fomp', async () => {
		const addressMppmiBK = accounts[4]
		const FompMaJCcip = await Fomp.new(addressMppmiBK, {from: accounts[4]});
		const addressctKarb = accounts[1]
		const uintTryTFbO = BigInt("1645")
		const addressFvOiWwR = accounts[4]
		const uintXsOzj9g = BigInt("1242")
		const addressKbhMKDI = accounts[2]
		const addressJnmZFBc = accounts[4]
		const addressXG2B6rX = accounts[4]
		const addresswWegXIZ = await FompMaJCcip.delegate.call(addressctKarb, {from: accounts[4]});
		const boolwRYGChE = await FompMaJCcip.transfer.call(addressFvOiWwR, uintTryTFbO, {from: accounts[0]});
		const uint96vp6bdn7 = await FompMaJCcip.getPriorVotes.call(addressKbhMKDI, uintXsOzj9g, {from: accounts[4]});
		const uint96s0d0wX = await FompMaJCcip.getCurrentVotes.call(addressJnmZFBc, {from: accounts[0]});
		const addressT84a9yk = await FompMaJCcip.delegate.call(addressXG2B6rX, {from: accounts[3]});

		await expect(FompMaJCcip.transfer.call(addressFvOiWwR, uintTryTFbO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressq9Vj4pl = accounts[1]
		const FompMqEpOWO = await Fomp.new(addressq9Vj4pl, {from: accounts[4]});
		const uintFdC4V3E = BigInt("2002")
		const addressacPoxW = accounts[5]
		const uintbTmRTy9 = BigInt("1886")
		const addressHcDDVMC = accounts[3]
		const bytec0GN1D = "0x05101b1f0515191f1d0b1a1c2009011d12040f02160a0f190b0c191a0a0e0213"
		const byteBiUyWL2 = "0x1517112018160f080c1e1d1a0b03041b081e1a16051e081f0e1202161d010315"
		const uintaRjuuNn = BigInt("94")
		const uintszkfbNm = BigInt("511")
		const uintjUqAwc = BigInt("1275")
		const addressSejjZwx = "0x0000000000000000000000000000000000000001"
		const uintkpQnte5 = BigInt("317")
		const addressOMscPfz = accounts[4]
		const addressj81XEve = accounts[2]
		const boolCC4Pj42 = await FompMqEpOWO.approve.call(addressacPoxW, uintFdC4V3E, {from: accounts[4]});
		const boolZRM961G = await FompMqEpOWO.transfer.call(addressHcDDVMC, uintbTmRTy9, {from: accounts[4]});
		const addressgDpII3o = await FompMqEpOWO.delegateBySig.call(addressSejjZwx, uintjUqAwc, uintszkfbNm, uintaRjuuNn, byteBiUyWL2, bytec0GN1D, {from: accounts[1]});
		const boolXaSHwlg = await FompMqEpOWO.transferFrom.call(addressj81XEve, addressOMscPfz, uintkpQnte5, {from: accounts[1]});

		assert.equal(boolCC4Pj42, true)
		await expect(FompMqEpOWO.transfer.call(addressHcDDVMC, uintbTmRTy9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresscMEKhLp = accounts[1]
		const FompPgXiqf = await Fomp.new(addresscMEKhLp, {from: accounts[4]});
		const bytePaalV6 = "0x101a18021d0f12171019050b1708151b1c0508041801171119161605161a160b"
		const bytejuf7Ych = "0x021d100304060d0b161817050d1d1d0a121b20170604100f070f15080d0f0c0a"
		const uintj4lV9fH = BigInt("242")
		const uintU1bNikL = BigInt("292")
		const uinthAqTVZG = BigInt("277")
		const addressHZoebSo = accounts[4]
		const uintEPmdlm = BigInt("1450")
		const addressbPsFcXW = accounts[0]
		const addressTq5wTT = accounts[4]
		const uintLkcAepE = BigInt("672")
		const addressSeRyTP4 = accounts[3]
		const addressnQBjHy7 = accounts[1]
		const addressdARo6wh = await FompPgXiqf.delegateBySig.call(addressHZoebSo, uinthAqTVZG, uintU1bNikL, uintj4lV9fH, bytejuf7Ych, bytePaalV6, {from: accounts[2]});
		const uint96KbP1bJh = await FompPgXiqf.getPriorVotes.call(addressbPsFcXW, uintEPmdlm, {from: accounts[4]});
		const uint96rYyfUKP = await FompPgXiqf.getCurrentVotes.call(addressTq5wTT, {from: accounts[4]});
		const boolEjuezI8 = await FompPgXiqf.transfer.call(addressSeRyTP4, uintLkcAepE, {from: accounts[0]});
		const uint96YvZPDJK = await FompPgXiqf.getCurrentVotes.call(addressnQBjHy7, {from: accounts[2]});

		await expect(FompPgXiqf.delegateBySig.call(addressHZoebSo, uinthAqTVZG, uintU1bNikL, uintj4lV9fH, bytejuf7Ych, bytePaalV6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressRMdC3b = accounts[2]
		const FompV01NzHu = await Fomp.new(addressRMdC3b, {from: accounts[3]});
		const addressykRZ9iR = accounts[0]
		const addresstfH25kS = accounts[4]
		const byteqatrhqp = "0x011f0807101f140900111d021211061f0e1f120c051d0d080a200619190b0310"
		const bytecr1ZxGT = "0x1f1f0504061c131509181015010602130e0d011d11081107030a0e131b161212"
		const uintGHoXDN = BigInt("2")
		const uintFIWPba = BigInt("1307")
		const uintOyCPHKx = BigInt("206")
		const addressXkOqMmb = accounts[1]
		const uintR5ZLQ4X = BigInt("897")
		const addressuwQoHM1 = accounts[3]
		const addressmUYummF = accounts[4]
		const uint96C2HBNpP = await FompV01NzHu.getCurrentVotes.call(addressykRZ9iR, {from: accounts[4]});
		const uintBL8How = await FompV01NzHu.balanceOf.call(addresstfH25kS, {from: accounts[2]});
		const addressfgksWbw = await FompV01NzHu.delegateBySig.call(addressXkOqMmb, uintOyCPHKx, uintFIWPba, uintGHoXDN, bytecr1ZxGT, byteqatrhqp, {from: accounts[3]});
		const boolTsGEZBA = await FompV01NzHu.transfer.call(addressuwQoHM1, uintR5ZLQ4X, {from: accounts[5]});
		const uintuuZsDlV = await FompV01NzHu.balanceOf.call(addressmUYummF, {from: accounts[3]});

		assert.equal(uint96C2HBNpP, BigInt("0"))
		assert.equal(uintBL8How, BigInt("0"))
		await expect(FompV01NzHu.delegateBySig.call(addressXkOqMmb, uintOyCPHKx, uintFIWPba, uintGHoXDN, bytecr1ZxGT, byteqatrhqp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresspcFEids = accounts[0]
		const FompIr23Jjo = await Fomp.new(addresspcFEids, {from: accounts[5]});
		const addressSG7FYSS = accounts[0]
		const addressdZaxzxP = accounts[5]
		const uinte8fyoFO = BigInt("219")
		const addressMgsazHq = accounts[2]
		const uintjrSISPV = BigInt("1708")
		const addressnxfYAwg = accounts[1]
		const bytetpd7pce = "0x0308091909171710020b10070910021a1d0c13050f1f1a0c091d101e13152019"
		const byteqUfdHie = "0x1e0706120c150a1d060d0c19061b04020f120212181105091c1b1c16101f0f0a"
		const uintOldJfH = BigInt("69")
		const uintSfozhdo = BigInt("1588")
		const uintYJQVfAN = BigInt("41")
		const addresszxLtjeZ = accounts[3]
		const bytemsej4zW = "0x1e0b0e1f111516181d181b02011a1e1d12121603101e0d101119131819100a19"
		const byteRioKAq = "0x1511041f0b1b060c111613050e06071c1f05060a1f0b030e130f0f11081b1106"
		const uintR4baHxW = BigInt("137")
		const uintNaufHzZ = BigInt("1035")
		const uintmPhceKT = BigInt("1262")
		const addressLguW6OG = accounts[0]
		const addressh6HnpVl = accounts[0]
		const addressHrqUc5n = accounts[2]
		const uintLCkJG4J = await FompIr23Jjo.allowance.call(addressdZaxzxP, addressSG7FYSS, {from: accounts[4]});
		const uint96DDcH1BH = await FompIr23Jjo.getPriorVotes.call(addressMgsazHq, uinte8fyoFO, {from: accounts[0]});
		const uint96d7KGskO = await FompIr23Jjo.getPriorVotes.call(addressnxfYAwg, uintjrSISPV, {from: accounts[2]});
		const addressRzzwlK6 = await FompIr23Jjo.delegateBySig.call(addresszxLtjeZ, uintYJQVfAN, uintSfozhdo, uintOldJfH, byteqUfdHie, bytetpd7pce, {from: accounts[5]});
		const addressxP208tp = await FompIr23Jjo.delegateBySig.call(addressLguW6OG, uintmPhceKT, uintNaufHzZ, uintR4baHxW, byteRioKAq, bytemsej4zW, {from: "0x0000000000000000000000000000000000000001"});
		const uintjs55o3P = await FompIr23Jjo.balanceOf.call(addressh6HnpVl, {from: accounts[5]});
		const addresshXvtGS = await FompIr23Jjo.delegate.call(addressHrqUc5n, {from: accounts[2]});

		assert.equal(uint96DDcH1BH, BigInt("0"))
		assert.equal(uintLCkJG4J, BigInt("0"))
		await expect(FompIr23Jjo.getPriorVotes.call(addressnxfYAwg, uintjrSISPV, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressZK5sWsA = accounts[4]
		const FompMaJCcip = await Fomp.new(addressZK5sWsA, {from: accounts[4]});
		const addressmcB2ErG = accounts[1]
		const address0aXXjq = accounts[3]
		const uintoBus2E0 = BigInt("80")
		const addressb6QESK = accounts[3]
		const addressejEHn4I = accounts[5]
		const addresswWegXIZ = await FompMaJCcip.delegate.call(addressmcB2ErG, {from: accounts[4]});
		const uint96s0d0wX = await FompMaJCcip.getCurrentVotes.call(address0aXXjq, {from: accounts[0]});
		const uint96roILTiv = await FompMaJCcip.getPriorVotes.call(addressb6QESK, uintoBus2E0, {from: accounts[2]});
		const addressT84a9yk = await FompMaJCcip.delegate.call(addressejEHn4I, {from: accounts[3]});

		assert.equal(uint96roILTiv, BigInt("0"))
		assert.equal(uint96s0d0wX, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const address9Ez8bH = accounts[4]
		const FompMaJCcip = await Fomp.new(address9Ez8bH, {from: accounts[4]});
		const addressQ2i5Ln = accounts[3]
		const uint8aesil = BigInt("29")
		const addressAVXWmtY = accounts[2]
		const uintl7k2UBU = BigInt("67")
		const addressKsFy2j = "0x0000000000000000000000000000000000000001"
		const addressjOMlDB = accounts[4]
		const addressybknyde = "0x0000000000000000000000000000000000000001"
		const uintlRmFy3a = BigInt("55")
		const addresshNvhH0H = accounts[0]
		const addresstvmgjU8 = accounts[5]
		const uintHBfqg6m = BigInt("259")
		const addressDpu69qr = accounts[4]
		const uintPuAroGU = BigInt("95")
		const addressji7Qui4 = accounts[0]
		const uintEYmWzNm = BigInt("920")
		const addressQBJaiT = "0x0000000000000000000000000000000000000000"
		const uintQt2mqra = await FompMaJCcip.balanceOf.call(addressQ2i5Ln, {from: "0x0000000000000000000000000000000000000001"});
		const boolhVpilnt = await FompMaJCcip.approve.call(addressAVXWmtY, uint8aesil, {from: "0x0000000000000000000000000000000000000001"});
		const boolxcUyUzI = await FompMaJCcip.approve.call(addressKsFy2j, uintl7k2UBU, {from: accounts[1]});
		const addresswWegXIZ = await FompMaJCcip.delegate.call(addressjOMlDB, {from: accounts[4]});
		const uint96NqgIYw4 = await FompMaJCcip.getCurrentVotes.call(addressybknyde, {from: accounts[1]});
		const boolm1W8lak = await FompMaJCcip.approve.call(addresshNvhH0H, uintlRmFy3a, {from: accounts[1]});
		const addressT84a9yk = await FompMaJCcip.delegate.call(addresstvmgjU8, {from: accounts[3]});
		const boolpN8QYqp = await FompMaJCcip.approve.call(addressDpu69qr, uintHBfqg6m, {from: accounts[4]});
		const uint96GM3qiIZ = await FompMaJCcip.getPriorVotes.call(addressji7Qui4, uintPuAroGU, {from: accounts[0]});
		const boolEyXKii4 = await FompMaJCcip.transfer.call(addressQBJaiT, uintEYmWzNm, {from: accounts[0]});

		assert.equal(boolhVpilnt, true)
		assert.equal(boolm1W8lak, true)
		assert.equal(boolpN8QYqp, true)
		assert.equal(boolxcUyUzI, true)
		assert.equal(uint96GM3qiIZ, BigInt("0"))
		assert.equal(uint96NqgIYw4, BigInt("0"))
		assert.equal(uintQt2mqra, BigInt("0"))
		await expect(FompMaJCcip.transfer.call(addressQBJaiT, uintEYmWzNm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressCRJTFOd = accounts[0]
		const Fompx7wNsDH = await Fomp.new(addressCRJTFOd, {from: accounts[0]});
		const bytem9gmcSK = "0x0d1513130c11131e0303091a010e1d06051815010814051f05030f05131a031a"
		const byteuxJxI8F = "0x0e14100d151b1208000f0c02121f0e09200c0a0e180f1b050f0f0a111e001810"
		const uintyeHT5Lp = BigInt("27")
		const uintRbO5va = BigInt("1463")
		const uintEgwvjY8 = BigInt("279")
		const addressx1lUgHF = accounts[5]
		const addressdPJ0JLj = accounts[2]
		const uintfZ4H9Q = BigInt("832")
		const addresskZ7xXVb = accounts[4]
		const addressTqHSf8R = accounts[2]
		const uintk3F7DAZ = BigInt("219")
		const addresswcIo6YI = accounts[4]
		const addressqHlAthp = accounts[4]
		const addressIFtL7fd = await Fompx7wNsDH.delegateBySig.call(addressx1lUgHF, uintEgwvjY8, uintRbO5va, uintyeHT5Lp, byteuxJxI8F, bytem9gmcSK, {from: "0x0000000000000000000000000000000000000001"});
		const addressBqwqc8v = await Fompx7wNsDH.delegate.call(addressdPJ0JLj, {from: accounts[3]});
		const boolRxshZmh = await Fompx7wNsDH.transfer.call(addresskZ7xXVb, uintfZ4H9Q, {from: accounts[0]});
		const uint96b1YDETJ = await Fompx7wNsDH.getCurrentVotes.call(addressTqHSf8R, {from: accounts[0]});
		const boolcpon4R6 = await Fompx7wNsDH.transferFrom.call(addressqHlAthp, addresswcIo6YI, uintk3F7DAZ, {from: accounts[4]});

		await expect(Fompx7wNsDH.delegateBySig.call(addressx1lUgHF, uintEgwvjY8, uintRbO5va, uintyeHT5Lp, byteuxJxI8F, bytem9gmcSK, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})