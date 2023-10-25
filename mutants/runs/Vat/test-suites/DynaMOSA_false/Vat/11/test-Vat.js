const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatWqqUwTe = await Vat.new({from: accounts[3]});
		const uintPue5e9X = BigInt("719")
		const bytemmbEGQ = "0x05181b0211050a1b1e051b1519170303021b0702051d0d0b0110091004131e17"
		const bytexD1fB8w = "0x1c0e1909070a1a06070f141c1b010103041b190e150f1b040117110a07200f0b"
		const uintiFK4cB = BigInt("977")
		const bytexikhBTa = "0x11090a191c1a07100807051b1b131f18090810190511090c1a1a0f020c1b1c0d"
		const byteF6WXYIR = "0x140710171c100c17191a0e1a14132003191316061f0218120607120517170f18"
		const addresskRXeGtp = accounts[4]
		const uintOHiZMov = BigInt("1330")
		const byteonVnBPs = "0x1909131318140c16041b011b0514100b0505060a0c1010070d0f1a121e011406"
		const bytes32WC6zmg7 = await VatWqqUwTe.file.call(bytemmbEGQ, uintPue5e9X, {from: accounts[2]});
		const bytes32ggWvCy7 = await VatWqqUwTe.init.call(bytexD1fB8w, {from: accounts[2]});
		const bytes32ZIIzBli = await VatWqqUwTe.file.call(byteF6WXYIR, bytexikhBTa, uintiFK4cB, {from: accounts[2]});
		const addressBgGg5Kj = await VatWqqUwTe.rely.call(addresskRXeGtp, {from: accounts[3]});
		const bytes32KnNsVlc = await VatWqqUwTe.file.call(byteonVnBPs, uintOHiZMov, {from: accounts[4]});

		await expect(VatWqqUwTe.file.call(bytemmbEGQ, uintPue5e9X, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatqdj7tz = await Vat.new({from: accounts[4]});
		const byteKKwsofp = "0x0f041c00190e160a141712111e0f160018090a1b0c1c110c0a0103051c0c1909"
		const addresswxikmau = accounts[2]
		await Vatqdj7tz.auth.call({from: accounts[3]});
		const bytes32jd437t = await Vatqdj7tz.init.call(byteKKwsofp, {from: accounts[1]});
		const addressaFeo9F = await Vatqdj7tz.deny.call(addresswxikmau, {from: accounts[3]});

		await expect(Vatqdj7tz.auth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQq4oaSQ = await Vat.new({from: accounts[5]});
		const addressLLqdFI = accounts[0]
		const addressCExxkV5 = await VatQq4oaSQ.deny.call(addressLLqdFI, {from: accounts[2]});
		await VatQq4oaSQ.cage.call({from: accounts[1]});

		await expect(VatQq4oaSQ.deny.call(addressLLqdFI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatk5jfprE = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const uintuEqXozn = BigInt("65")
		const uintGPFQ4Ps = BigInt("1184")
		const addressKFgpSkF = accounts[0]
		const addressPmLkjhc = "0x0000000000000000000000000000000000000001"
		const byte4Si4pF = "0x120f1b180a020616011715171309121e09041200020e0a1b11091e1b15101400"
		const intP2GwRYz = BigInt("67")
		const intpK7mnho = BigInt("1488")
		const addressLc1x5t = accounts[2]
		const addressUVkbNxH = accounts[1]
		const addresszVwzTZG = accounts[2]
		const byteDRvyhB8 = "0x0a15181e1707000d0117141f090911150a0a190107061a1e031f130a17091409"
		const uintIr1ZrQ2 = await Vatk5jfprE.heal.call(uintuEqXozn, {from: accounts[4]});
		const bytes32m05Xbfn = await Vatk5jfprE.flux.call(byte4Si4pF, addressPmLkjhc, addressKFgpSkF, uintGPFQ4Ps, {from: "0x0000000000000000000000000000000000000001"});
		const bytes32jHFTQ49 = await Vatk5jfprE.frob.call(byteDRvyhB8, addresszVwzTZG, addressUVkbNxH, addressLc1x5t, intpK7mnho, intP2GwRYz, {from: accounts[2]});
	});

	it('test for Vat', async () => {
		const VatX6BxOPB = await Vat.new({from: accounts[3]});
		const intLtpSwga = BigInt("-885")
		const intjTBabQm = BigInt("941")
		const addressEd2v0s = accounts[2]
		const addressXofRdK = accounts[5]
		const byteR4vG4lz = "0x17021b1e1f1d0a020e061b18060610011e07091a1d170b1e0603020403152003"
		const byteViHQhhq = "0x03070818052015061a1a09180f1e021e0f0a1a02030b091d180901201c0f1d1f"
		const intdRSnZTh = BigInt("416")
		const addressUpGM5YC = accounts[3]
		const byteaBvg9sj = "0x051c110d1604120d03120716091d05111c1816161119130f0501191a1b1f1501"
		const uintgzHtY7e = BigInt("1060")
		const bytes32JsRdp5E = await VatX6BxOPB.fork.call(byteR4vG4lz, addressXofRdK, addressEd2v0s, intjTBabQm, intLtpSwga, {from: accounts[1]});
		const bytes32Byqgf3R = await VatX6BxOPB.init.call(byteViHQhhq, {from: "0x0000000000000000000000000000000000000001"});
		const bytes323UuwhN = await VatX6BxOPB.fold.call(byteaBvg9sj, addressUpGM5YC, intdRSnZTh, {from: accounts[4]});
		await VatX6BxOPB.cage.call({from: accounts[5]});
		await VatX6BxOPB.auth.call({from: accounts[0]});
		const uintW1JbZ4 = await VatX6BxOPB.heal.call(uintgzHtY7e, {from: accounts[1]});

		await expect(VatX6BxOPB.fork.call(byteR4vG4lz, addressXofRdK, addressEd2v0s, intjTBabQm, intLtpSwga, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatKNKfMPb = await Vat.new({from: accounts[0]});
		const addressnSCOEng = accounts[5]
		const addressW3fIWFO = accounts[3]
		const uintDkX2fiH = BigInt("1201")
		const bytevBDfpo1 = "0x14070e0a121708131c11180f0f0b141b130a0910041f1318181e1a110f0d1d05"
		const uintJncstsK = BigInt("417")
		const addresszPpp27Q = accounts[2]
		const addressMJR0eZw = accounts[0]
		const intLCnofN = BigInt("-1683")
		const addresserrgG7x = accounts[4]
		const byteSfC32W = "0x1319030c042019041e0a0014070202130b0419061b060606101c151f121a0318"
		const addresstfyZrtc = await VatKNKfMPb.nope.call(addressnSCOEng, {from: accounts[0]});
		const addresszQ4pZx = await VatKNKfMPb.hope.call(addressW3fIWFO, {from: accounts[3]});
		const bytes32z4VSjSl = await VatKNKfMPb.file.call(bytevBDfpo1, uintDkX2fiH, {from: accounts[0]});
		const addressmFqQ6Ax = await VatKNKfMPb.suck.call(addressMJR0eZw, addresszPpp27Q, uintJncstsK, {from: accounts[1]});
		const bytes32RMHDLSJ = await VatKNKfMPb.slip.call(byteSfC32W, addresserrgG7x, intLCnofN, {from: accounts[5]});

		await expect(VatKNKfMPb.file.call(bytevBDfpo1, uintDkX2fiH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatKNKfMPb = await Vat.new({from: accounts[0]});
		const addressXCZjD86 = accounts[5]
		const addressLpAG3D3 = accounts[3]
		const intrXdbEfA = BigInt("165")
		const intOl8RWea = BigInt("1028")
		const addressxRvK3hM = accounts[4]
		const addressAdFNqh3 = accounts[3]
		const addressbxFJ1O = accounts[5]
		const byteKbMhqwS = "0x0e011f1c0c17011020141907121e04161a071109011604031c1f1a111f180704"
		const intlNIbMnv = BigInt("-620")
		const intJC4Dzg3 = BigInt("1735")
		const addressHzqL7K = "0x0000000000000000000000000000000000000001"
		const addressKply1u6 = accounts[5]
		const addresspR2iQ9S = accounts[5]
		const byteKKGWV9i = "0x1f1e0214110b190b1a081010130f0e1313130e1a171b0b0417061a140e020e20"
		const uintNW4SbBa = BigInt("1201")
		const byteDPZrroZ = "0x14070e0a121708131c11180f0f0b141b130a0910041f1318181e1a110f0d1d05"
		const uintc18fPpo = BigInt("417")
		const addresskSRjkaC = accounts[2]
		const addressVANdT16 = accounts[0]
		const intPMwmmrY = BigInt("-1683")
		const addressIpm6KHp = accounts[4]
		const byteYGldFjt = "0x1319030c042019041e0a0014070202130b0419061b060606101c151f121a0318"
		const addresstfyZrtc = await VatKNKfMPb.nope.call(addressXCZjD86, {from: accounts[0]});
		const addresszQ4pZx = await VatKNKfMPb.hope.call(addressLpAG3D3, {from: accounts[3]});
		const bytes32tCVBSco = await VatKNKfMPb.frob.call(byteKbMhqwS, addressbxFJ1O, addressAdFNqh3, addressxRvK3hM, intOl8RWea, intrXdbEfA, {from: accounts[3]});
		const bytes32fXl5cQI = await VatKNKfMPb.frob.call(byteKKGWV9i, addresspR2iQ9S, addressKply1u6, addressHzqL7K, intJC4Dzg3, intlNIbMnv, {from: accounts[2]});
		const bytes32z4VSjSl = await VatKNKfMPb.file.call(byteDPZrroZ, uintNW4SbBa, {from: accounts[0]});
		const addressmFqQ6Ax = await VatKNKfMPb.suck.call(addressVANdT16, addresskSRjkaC, uintc18fPpo, {from: accounts[1]});
		const bytes32RMHDLSJ = await VatKNKfMPb.slip.call(byteYGldFjt, addressIpm6KHp, intPMwmmrY, {from: accounts[5]});

		await expect(VatKNKfMPb.frob.call(byteKbMhqwS, addressbxFJ1O, addressAdFNqh3, addressxRvK3hM, intOl8RWea, intrXdbEfA, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQq4oaSQ = await Vat.new({from: accounts[5]});
		const uintQJRPpes = BigInt("1536")
		const addressGYeRojH = accounts[2]
		const addressSc8myl = accounts[1]
		const addressA018RAt = await VatQq4oaSQ.move.call(addressSc8myl, addressGYeRojH, uintQJRPpes, {from: accounts[2]});
		await VatQq4oaSQ.cage.call({from: accounts[1]});
		await VatQq4oaSQ.cage.call({from: accounts[4]});

		await expect(VatQq4oaSQ.move.call(addressSc8myl, addressGYeRojH, uintQJRPpes, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatqdj7tz = await Vat.new({from: accounts[4]});
		const uintCaC9rV3 = BigInt("1663")
		const byteSc3RBM = "0x0f041c00190e160a141712111e0f160018090a1b0c1c110c0a0103051c0c1909"
		const addressOwgNZWD = accounts[2]
		const uintIE1pGOk = await Vatqdj7tz.heal.call(uintCaC9rV3, {from: "0x0000000000000000000000000000000000000001"});
		await Vatqdj7tz.auth.call({from: accounts[3]});
		const bytes32jd437t = await Vatqdj7tz.init.call(byteSc3RBM, {from: accounts[1]});
		const addressaFeo9F = await Vatqdj7tz.deny.call(addressOwgNZWD, {from: accounts[3]});

		await expect(Vatqdj7tz.heal.call(uintCaC9rV3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWqqUwTe = await Vat.new({from: accounts[3]});
		const uintFQA3AvC = BigInt("1035")
		const byteAJJLcBu = "0x18140e120b0e111d1f06090b2014130e1c101d0619170b111a1d0d1d1c1a0f20"
		const byteDKVlzp = "0x1b12150d11011f0419070b09060d1f0d1b121214010a101d0f0a1d200115170e"
		const uintJZ7RcW2 = BigInt("719")
		const byteQpxZYeZ = "0x05181b0211050a1b1e051b1519170303021b0702051d0d0b0110091004131e17"
		const bytevjL6sVK = "0x1c0e1909070a1a06070f141c1b010103041b190e150f1b040117110a07200f0b"
		const uintasbW2T2 = BigInt("977")
		const bytevFz9w4H = "0x11090a191c1a07100807051b1b131f18090810190511090c1a1a0f020c1b1c0d"
		const byteIs76f7A = "0x140710171c100c17191a0e1a14132003191316061f0218120607120517170f18"
		const uintxU6kx2A = BigInt("1330")
		const byteww9I8wL = "0x1909131318140c16041b011b0514100b0505060a0c1010070d0f1a121e011406"
		const bytes32YJaRxXe = await VatWqqUwTe.file.call(byteDKVlzp, byteAJJLcBu, uintFQA3AvC, {from: accounts[3]});
		const bytes32WC6zmg7 = await VatWqqUwTe.file.call(byteQpxZYeZ, uintJZ7RcW2, {from: accounts[2]});
		const bytes32ggWvCy7 = await VatWqqUwTe.init.call(bytevjL6sVK, {from: accounts[2]});
		await VatWqqUwTe.cage.call({from: accounts[3]});
		const bytes32ZIIzBli = await VatWqqUwTe.file.call(byteIs76f7A, bytevFz9w4H, uintasbW2T2, {from: accounts[2]});
		const bytes32KnNsVlc = await VatWqqUwTe.file.call(byteww9I8wL, uintxU6kx2A, {from: accounts[4]});

		await expect(VatWqqUwTe.file.call(byteDKVlzp, byteAJJLcBu, uintFQA3AvC, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWqqUwTe = await Vat.new({from: accounts[3]});
		const uintkzJ7sEx = BigInt("977")
		const byteWfeCfrc = "0x11090a191c1a07100807051b1b131f18090810190511090c1a1a0f020c1b1c0d"
		const bytepZArmDp = "0x140710171c100c17191a0e1a14132003191316061f0218120607120517170f18"
		await VatWqqUwTe.cage.call({from: accounts[3]});
		const bytes32ZIIzBli = await VatWqqUwTe.file.call(bytepZArmDp, byteWfeCfrc, uintkzJ7sEx, {from: accounts[2]});

		await expect(VatWqqUwTe.cage.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQq4oaSQ = await Vat.new({from: accounts[5]});
		const uintgBowhKb = BigInt("1283")
		const addressWO77J5 = accounts[0]
		const addresspAX0fXE = accounts[0]
		const uintsTSiRj7 = BigInt("275")
		const addressKlHzfLk = await VatQq4oaSQ.suck.call(addresspAX0fXE, addressWO77J5, uintgBowhKb, {from: accounts[5]});
		const uintACtJscI = await VatQq4oaSQ.heal.call(uintsTSiRj7, {from: accounts[1]});
		await VatQq4oaSQ.cage.call({from: accounts[1]});

		await expect(VatQq4oaSQ.heal.call(uintsTSiRj7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQq4oaSQ = await Vat.new({from: accounts[5]});
		const uintdbXjxgr = BigInt("1892")
		const addressVdn4gqX = accounts[0]
		const addressDLvi6wq = accounts[1]
		const byterhOFJE = "0x181d07030f18041d051103030d1b0a15071209121e1805051f16081417011720"
		const bytes32fQnw7Vc = await VatQq4oaSQ.flux.call(byterhOFJE, addressDLvi6wq, addressVdn4gqX, uintdbXjxgr, {from: accounts[1]});
		await VatQq4oaSQ.cage.call({from: accounts[1]});

		await expect(VatQq4oaSQ.flux.call(byterhOFJE, addressDLvi6wq, addressVdn4gqX, uintdbXjxgr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWqqUwTe = await Vat.new({from: accounts[3]});
		const uintLSnynUL = BigInt("1035")
		const byteklURAxu = "0x18140e120b0e111d1f06090b2014130e1c101d0619170b111a1d0d1d1c1a0f20"
		const byteJnuEkXe = "0x1b12150d11ffffffff1f0419070b09060d1f0d1b121214010a101d0f0a1d200115170e"
		const intV2s5cTH = BigInt("1922")
		const addressXBy4q8I = accounts[2]
		const byteIA72Cs = "0x160509131f170c010d150a0a00021c14121d1e120214150b081e0c0b171f1109"
		const uintMNU9Qr0 = BigInt("583")
		const addressKulttmO = accounts[1]
		const addressP5qTsct = accounts[1]
		const bytes32YJaRxXe = await VatWqqUwTe.file.call(byteJnuEkXe, byteklURAxu, uintLSnynUL, {from: accounts[3]});
		const bytes32g2SpkH4 = await VatWqqUwTe.slip.call(byteIA72Cs, addressXBy4q8I, intV2s5cTH, {from: accounts[3]});
		const addressWTYvZW = await VatWqqUwTe.move.call(addressP5qTsct, addressKulttmO, uintMNU9Qr0, {from: accounts[1]});

		await expect(VatWqqUwTe.file.call(byteJnuEkXe, byteklURAxu, uintLSnynUL, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWqqUwTe = await Vat.new({from: accounts[3]});
		const addressX2KKhBs = "0x0000000000000000000000000000000000000001"
		const addressPGdTOsl = accounts[0]
		const uintjkew91P = BigInt("1035")
		const byteWTMnKuL = "0x18140e120b0e111d1f06090b2014130e1c101d0619170b111a1d0d1d1c1a0f20"
		const byteCaTCQMF = "0x1b12150d11011f0419060b09060d1f0d1b121214010a101d0f0a1d200115170e"
		const addressWq2l0ct = await VatWqqUwTe.nope.call(addressX2KKhBs, {from: accounts[4]});
		const addressTtb47eG = await VatWqqUwTe.deny.call(addressPGdTOsl, {from: accounts[3]});
		const bytes32YJaRxXe = await VatWqqUwTe.file.call(byteCaTCQMF, byteWTMnKuL, uintjkew91P, {from: accounts[3]});

		await expect(VatWqqUwTe.file.call(byteCaTCQMF, byteWTMnKuL, uintjkew91P, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatmcfgugM = await Vat.new({from: accounts[3]});
		const intiUoDAbK = BigInt("444")
		const addresscIVIZho = accounts[4]
		const bytei4ATvHq = "0x0f1116071a0b1819070d041f151410030a0d01100807121a1d030f0b19030401"
		const addresse4duFLc = accounts[4]
		const uintx7B6566 = BigInt("373")
		const addressRXWpUls = accounts[1]
		const addressxEvyii = accounts[2]
		const intKO9H4lA = BigInt("-577")
		const intUqB8j0z = BigInt("-1431")
		const address4gbkjg = accounts[0]
		const addressK4BCm6N = accounts[3]
		const byteWkw9YfO = "0x1d07131a1b0a0c12091a0e18011a0d040e160612050403161712100d1415171e"
		const bytes32KEbaJYC = await VatmcfgugM.slip.call(bytei4ATvHq, addresscIVIZho, intiUoDAbK, {from: accounts[3]});
		const addressKB5kr6 = await VatmcfgugM.nope.call(addresse4duFLc, {from: accounts[0]});
		await VatmcfgugM.cage.call({from: accounts[0]});
		const addressGJaWPTh = await VatmcfgugM.move.call(addressxEvyii, addressRXWpUls, uintx7B6566, {from: accounts[2]});
		const bytes32J1cyuXG = await VatmcfgugM.fork.call(byteWkw9YfO, addressK4BCm6N, address4gbkjg, intUqB8j0z, intKO9H4lA, {from: accounts[1]});

		await expect(VatmcfgugM.cage.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWqqUwTe = await Vat.new({from: accounts[3]});
		const intcUpjhcr = BigInt("-1662")
		const intsaiL1yh = BigInt("105")
		const addressNLxPy5t = accounts[0]
		const addressWONbObz = accounts[4]
		const addressazSD5Jz = accounts[0]
		const byteoPA1keZ = "0x191b1b1804190614140a0e1210051f1c1e011101180c040619050f1a02130605"
		const uintSfnjDyq = BigInt("1035")
		const byteqTZ4Max = "0x18140e120b0e111d1f06090b2014130e1c101d0619170b111a1d0d1d1c1a0f20"
		const byteSrtgi3 = "0x1b12150d11011f0419070b09060d1f0d1b121214010a101d0f0a1d200115170e"
		const uinttyXX5E4 = BigInt("127")
		const byteAgXuXmh = "0x1f152019071e070a20001e1f0a1219050a18180c151c1b121f0716141b1e0f05"
		const uintUnPC9U0 = BigInt("993")
		const byteRXiJKF9 = "0x11090a191c1a07100807051b1b131f18090810190511090c1a1a0f020c1b1c0d"
		const byte7sX9qP = "0x140710171c100c17191a0e1a14132003191316061f0218120607120517170f18"
		const bytes32V55KWEv = await VatWqqUwTe.grab.call(byteoPA1keZ, addressazSD5Jz, addressWONbObz, addressNLxPy5t, intsaiL1yh, intcUpjhcr, {from: accounts[3]});
		const bytes32YJaRxXe = await VatWqqUwTe.file.call(byteSrtgi3, byteqTZ4Max, uintSfnjDyq, {from: accounts[3]});
		const bytes32s1mE3FI = await VatWqqUwTe.file.call(byteAgXuXmh, uinttyXX5E4, {from: accounts[1]});
		const bytes32ZIIzBli = await VatWqqUwTe.file.call(byte7sX9qP, byteRXiJKF9, uintUnPC9U0, {from: accounts[2]});

		await expect(VatWqqUwTe.grab.call(byteoPA1keZ, addressazSD5Jz, addressWONbObz, addressNLxPy5t, intsaiL1yh, intcUpjhcr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWqqUwTe = await Vat.new({from: accounts[3]});
		const byteb5s4Mgi = "0x1f14180f190f17061b160a070c09100501091e101b17010b021a201f050f0200"
		const uintEE1h2gf = BigInt("1035")
		const byteEkxSjeE = "0x18140e120b0e111d1f06090b2014130e1c101d0619170b111a1d0d1d1c1a0f20"
		const byter5MQ1Ge = "0x1b12150d11011f0419070b09060d1f0d1b121214010a101d0f0a1d200115170e"
		const uintiVgXp3Z = BigInt("719")
		const byteYCgCh3f = "0x05181b0211050a1b1e051b1519170303021b0702051d0d0b0110091004131e17"
		const byteIr7K5d = "0x1c0e1909070a1a06070f141c1b010103041b190e150f1b040117110a07200f0b"
		const uintSYTE9YM = BigInt("977")
		const byteo85qamc = "0x11090a191c1a07100807051b1b131f18090810190511090c1a1a0f020c1b1c0d"
		const byteROloDPQ = "0x140710171c100c17191a0e1a14132003191316061f0218120607120517170f18"
		const uintqLf2FcQ = BigInt("1330")
		const bytepOrchBc = "0x1909131318140c16041b011b0514100b0505060a0c1010070d0f1a121e011406"
		const bytes32yJkvhF = await VatWqqUwTe.init.call(byteb5s4Mgi, {from: accounts[3]});
		const bytes32YJaRxXe = await VatWqqUwTe.file.call(byter5MQ1Ge, byteEkxSjeE, uintEE1h2gf, {from: accounts[3]});
		const bytes32WC6zmg7 = await VatWqqUwTe.file.call(byteYCgCh3f, uintiVgXp3Z, {from: accounts[2]});
		const bytes32ggWvCy7 = await VatWqqUwTe.init.call(byteIr7K5d, {from: accounts[2]});
		await VatWqqUwTe.cage.call({from: accounts[3]});
		const bytes32ZIIzBli = await VatWqqUwTe.file.call(byteROloDPQ, byteo85qamc, uintSYTE9YM, {from: accounts[2]});
		const bytes32KnNsVlc = await VatWqqUwTe.file.call(bytepOrchBc, uintqLf2FcQ, {from: accounts[4]});

		await expect(VatWqqUwTe.file.call(byter5MQ1Ge, byteEkxSjeE, uintEE1h2gf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWqqUwTe = await Vat.new({from: accounts[3]});
		const uint66arsh = BigInt("1035")
		const byteIzLPajM = "0x18140e120b0e111d1f06090b2014130e1c101dfffffffd19170b111a1d0d1d1c1a0f20"
		const byteAuWEKc = "0x1b12150d11011f0419070b09060d1f0d1b121214010a101d0f0a1d200115170e"
		const bytes32YJaRxXe = await VatWqqUwTe.file.call(byteAuWEKc, byteIzLPajM, uint66arsh, {from: accounts[3]});

		await expect(VatWqqUwTe.file.call(byteAuWEKc, byteIzLPajM, uint66arsh, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWqqUwTe = await Vat.new({from: accounts[3]});
		const intuefy9wi = BigInt("1836")
		const addresschRbKXu = accounts[1]
		const byteRiC6Yi = "0x1e0f04050e14031a041d0f0b1d021c1a051d1a201512091120020d0b0214060f"
		const uintGmWeGe9 = BigInt("1035")
		const byteHOoFcQn = "0x1d00020d0412021103040a071a081b04131f120716081a0e1d1e10171f1c0f1a"
		const bytegFJymZ = "0x1b12150d11011f0419070b09060d1f0d1b121214010a101d0f0a1d200115170e"
		const bytes32TGNs2WJ = await VatWqqUwTe.fold.call(byteRiC6Yi, addresschRbKXu, intuefy9wi, {from: accounts[3]});
		const bytes32YJaRxXe = await VatWqqUwTe.file.call(bytegFJymZ, byteHOoFcQn, uintGmWeGe9, {from: accounts[3]});

		await expect(VatWqqUwTe.file.call(bytegFJymZ, byteHOoFcQn, uintGmWeGe9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatKBdKJtG = await Vat.new({from: accounts[5]});
		const intcjKPC3v = BigInt("-684")
		const intSTK1ml7 = BigInt("-1597")
		const addressSsf34Pn = accounts[4]
		const addressUdtzK2c = accounts[4]
		const byteyZlalms = "0x0e0c190d080c1704130808071e1f0f0b0d071b160917021c1f1f141e1a0f0b14"
		const intfLxippI = BigInt("1285")
		const addressd0mEpZ = accounts[2]
		const byteoxbT8v = "0x030a100b09021215091b0f0d0f110e14031b090b09121605021e1c031b041b16"
		const uinteMATHwV = BigInt("468")
		const byteZKFnR56 = "0x101104021d1d0f0d0d02191a0810040f011b1d091b151e03100c171f1c071f0c"
		const byteFy7JrB3 = "0x090d09060d20120a13071e1a15030705030e050e1106171a0b0f05170c0c0610"
		const byte61iyhb = "0x140b1106061e090a110a0003061b061c1e1318141e171a0d18081e1f181b0d07"
		const bytes32KC95u5n = await VatKBdKJtG.fork.call(byteyZlalms, addressUdtzK2c, addressSsf34Pn, intSTK1ml7, intcjKPC3v, {from: accounts[2]});
		const bytes32ycVCEX = await VatKBdKJtG.fold.call(byteoxbT8v, addressd0mEpZ, intfLxippI, {from: accounts[2]});
		const bytes32dSxVd2 = await VatKBdKJtG.file.call(byteFy7JrB3, byteZKFnR56, uinteMATHwV, {from: accounts[2]});
		const bytes32VIQaDF6 = await VatKBdKJtG.init.call(byte61iyhb, {from: accounts[0]});

		await expect(VatKBdKJtG.fork.call(byteyZlalms, addressUdtzK2c, addressSsf34Pn, intSTK1ml7, intcjKPC3v, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})