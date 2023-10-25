const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatF7ruGRz = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const intNi9Akux = BigInt("-425")
		const addressXEVysgb = accounts[1]
		const bytex2tcxq3 = "0x2004140513110812041b0b1e1f1c1d13181a010902141909090f080106020d19"
		const address55dc2Z = accounts[4]
		const intXrKqrUx = BigInt("-1572")
		const intTr64H8r = BigInt("-1594")
		const addressctxDOvH = accounts[1]
		const addressbpgxJIJ = accounts[0]
		const addressydqoBu = accounts[2]
		const byteAHjtLcg = "0x16001307160a12011717201c0a1a1a11031a13161f1b181f10140d160b0f1405"
		const addressrIuZ46m = accounts[3]
		const intrmeJzVz = BigInt("-781")
		const intXzmTOMJ = BigInt("-1800")
		const addresspchjxn9 = accounts[0]
		const addressLLZ6d8I = accounts[1]
		const byterVaUfWG = "0x0d1a08180e1818081105121a04171a0d140507160c080a190c18070701151004"
		const bytes32kn0bOrJ = await VatF7ruGRz.fold.call(bytex2tcxq3, addressXEVysgb, intNi9Akux, {from: accounts[0]});
		const addresshpj82E3 = await VatF7ruGRz.nope.call(address55dc2Z, {from: accounts[1]});
		await VatF7ruGRz.cage.call({from: accounts[1]});
		const bytes32sSptX8w = await VatF7ruGRz.grab.call(byteAHjtLcg, addressydqoBu, addressbpgxJIJ, addressctxDOvH, intTr64H8r, intXrKqrUx, {from: accounts[3]});
		const addresstmn760r = await VatF7ruGRz.hope.call(addressrIuZ46m, {from: accounts[5]});
		const bytes32lUJWKLK = await VatF7ruGRz.fork.call(byterVaUfWG, addressLLZ6d8I, addresspchjxn9, intXzmTOMJ, intrmeJzVz, {from: accounts[2]});
	});

	it('test for Vat', async () => {
		const VatDy5VMxa = await Vat.new({from: accounts[1]});
		const uintxFYrzor = BigInt("423")
		const uintwxekPo2 = BigInt("1925")
		const addressEeV0Rsq = accounts[5]
		const addressKdbZgl8 = accounts[2]
//		const uintHNEBUW8 = await VatDy5VMxa.heal.call(uintxFYrzor, {from: "0x0000000000000000000000000000000000000001"});
//		await VatDy5VMxa.auth.call({from: accounts[2]});
//		await VatDy5VMxa.cage.call({from: accounts[2]});
//		const addressKkjryIX = await VatDy5VMxa.suck.call(addressKdbZgl8, addressEeV0Rsq, uintwxekPo2, {from: accounts[4]});

		await expect(VatDy5VMxa.heal.call(uintxFYrzor, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatRIAoRrH = await Vat.new({from: accounts[0]});
		const intMZws3Ro = BigInt("-1504")
		const intaZxjXfY = BigInt("-991")
		const addresso7teAeS = accounts[0]
		const addressaPxYj9j = "0x0000000000000000000000000000000000000001"
		const addressHalec9x = accounts[3]
		const bytemcpgeww = "0x18190d171d001f070b1207031d1306101f141e091d14030f0911131314010603"
		const byteHxnUZwR = "0x200b1b1819151c0711080d091110050500091800040a1e0a0c1718061f0a1413"
		const intIEak7Pi = BigInt("-28")
		const addressqU99OhS = accounts[2]
		const byteAPjgQfG = "0x1b091d01021a0c0b1b170f080a16160811071e021b10120502130e1902061313"
		const intljCl2mn = BigInt("1647")
		const intTbtZw5O = BigInt("965")
		const addressvh23Blp = "0x0000000000000000000000000000000000000001"
		const addressVyUCYiS = accounts[2]
		const addressOR8YCKm = accounts[0]
		const byteeURAJeD = "0x0d18060012000a010b0203191e1b081b0d1e1a0e140c0605100a180a111f0902"
//		const bytes32zmE5sgO = await VatRIAoRrH.grab.call(bytemcpgeww, addressHalec9x, addressaPxYj9j, addresso7teAeS, intaZxjXfY, intMZws3Ro, {from: accounts[2]});
//		await VatRIAoRrH.cage.call({from: accounts[3]});
//		const bytes32cs7RXqt = await VatRIAoRrH.init.call(byteHxnUZwR, {from: accounts[3]});
//		const bytes32xiRFGNb = await VatRIAoRrH.fold.call(byteAPjgQfG, addressqU99OhS, intIEak7Pi, {from: accounts[3]});
//		const bytes32fzRmNBX = await VatRIAoRrH.frob.call(byteeURAJeD, addressOR8YCKm, addressVyUCYiS, addressvh23Blp, intTbtZw5O, intljCl2mn, {from: accounts[2]});

		await expect(VatRIAoRrH.grab.call(bytemcpgeww, addressHalec9x, addressaPxYj9j, addresso7teAeS, intaZxjXfY, intMZws3Ro, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatnV4dY6G = await Vat.new({from: accounts[3]});
		const addressgBPF9NV = accounts[3]
		const addressLDIcO5o = await VatnV4dY6G.hope.call(addressgBPF9NV, {from: accounts[2]});
//		await VatnV4dY6G.cage.call({from: accounts[0]});

		await expect(VatnV4dY6G.cage.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatOwzftxm = await Vat.new({from: accounts[3]});
		const addressyJWcIY = accounts[5]
		const uintrRlLbwG = BigInt("323")
		const byteUeDdwAi = "0x1d1e1f0a121212180d1b1d0914151d111d15100f1518161001071c200d1f1103"
		const intcJHHegP = BigInt("-106")
		const intPgtPWbb = BigInt("237")
		const addressXD3SYvR = accounts[5]
		const addressMjVbDK7 = accounts[5]
		const addressiEUHOFL = accounts[4]
		const byteb1Vqco6 = "0x08170d05041f1e1a1e13050b1a10050c160a040e1420041c1309060806190510"
		const uintR0jrlA = BigInt("1080")
		const addressn9ln8rK = "0x0000000000000000000000000000000000000001"
		const addresswjJgojt = accounts[1]
		const addressCgiLCNV = await VatOwzftxm.nope.call(addressyJWcIY, {from: accounts[1]});
//		const bytes32N1vPwmZ = await VatOwzftxm.file.call(byteUeDdwAi, uintrRlLbwG, {from: accounts[3]});
//		const bytes32v76Kur = await VatOwzftxm.grab.call(byteb1Vqco6, addressiEUHOFL, addressMjVbDK7, addressXD3SYvR, intPgtPWbb, intcJHHegP, {from: accounts[2]});
//		const addressF2Z3R7 = await VatOwzftxm.move.call(addresswjJgojt, addressn9ln8rK, uintR0jrlA, {from: accounts[2]});

		await expect(VatOwzftxm.file.call(byteUeDdwAi, uintrRlLbwG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatFM8Ll7 = await Vat.new({from: accounts[4]});
		const intve3kRUQ = BigInt("-430")
		const intT33JV4A = BigInt("336")
		const addressh6Oa7zC = "0x0000000000000000000000000000000000000001"
		const addressA27HfKu = accounts[2]
		const addresskYIBlcR = accounts[3]
		const byteNU6JeHu = "0x0f0f180d0e0b0e051a0915061f0a191f061f1b15081f1e0e161a1704121d0e0c"
		const intwCtvRYh = BigInt("130")
		const intiqKwRfJ = BigInt("-1775")
		const addressc3RB47 = accounts[2]
		const addressyCCh11 = accounts[2]
		const addresssNdaH8c = accounts[4]
		const byteUqKTAQZ = "0x12010213130d100d050f061811120a0f09170b12190d0e131806110d0a090a0b"
		const uintssBR25P = BigInt("6")
		const byteyWjnv2 = "0x0206060601051804161106160c18060207191c0a041e181e0403131c09161607"
		const intskViy90 = BigInt("987")
		const intbVduwuR = BigInt("-638")
		const addressyISj4c0 = accounts[3]
		const addressgPEzP2F = accounts[2]
		const addressTHr5qor = accounts[3]
		const byteWImhk9P = "0x111520031c1d0f11171b0305020f07010d190b150e0e0a01051f0f0c1d041f02"
		const addressmxiMISe = "0x0000000000000000000000000000000000000001"
		const intEmZzxAP = BigInt("-1030")
		const addressrGWvJ6V = accounts[1]
		const byteMB8s0Mp = "0x1b1217190e010c1c030716130b0011050f1a0e0c0610011819011713030e0305"
//		const bytes32mtZXhh = await VatFM8Ll7.frob.call(byteNU6JeHu, addresskYIBlcR, addressA27HfKu, addressh6Oa7zC, intT33JV4A, intve3kRUQ, {from: accounts[2]});
//		const bytes32j7OFuco = await VatFM8Ll7.frob.call(byteUqKTAQZ, addresssNdaH8c, addressyCCh11, addressc3RB47, intiqKwRfJ, intwCtvRYh, {from: accounts[0]});
//		const bytes32nR9Byq = await VatFM8Ll7.file.call(byteyWjnv2, uintssBR25P, {from: accounts[1]});
//		const bytes324AOcZb = await VatFM8Ll7.grab.call(byteWImhk9P, addressTHr5qor, addressgPEzP2F, addressyISj4c0, intbVduwuR, intskViy90, {from: accounts[3]});
//		const addressNGEgSe0 = await VatFM8Ll7.nope.call(addressmxiMISe, {from: accounts[2]});
//		const bytes32KgjKrXV = await VatFM8Ll7.slip.call(byteMB8s0Mp, addressrGWvJ6V, intEmZzxAP, {from: accounts[4]});

		await expect(VatFM8Ll7.frob.call(byteNU6JeHu, addresskYIBlcR, addressA27HfKu, addressh6Oa7zC, intT33JV4A, intve3kRUQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatnV4dY6G = await Vat.new({from: accounts[3]});
		const uintPfIBOvN = BigInt("1928")
		const addresssnZOYmA = accounts[1]
		const addressk5l63nI = accounts[3]
		const bytePXRWoai = "0x1d17060c17031c15021f16090209101d201b111e131f080102190b1b12110e0c"
		const addressJqoYS1H = accounts[3]
		const addressMSn937 = accounts[5]
//		const bytes32vUjnbx4 = await VatnV4dY6G.flux.call(bytePXRWoai, addressk5l63nI, addresssnZOYmA, uintPfIBOvN, {from: accounts[1]});
//		const addressLDIcO5o = await VatnV4dY6G.hope.call(addressJqoYS1H, {from: accounts[2]});
//		const addressMuvz2t3 = await VatnV4dY6G.nope.call(addressMSn937, {from: accounts[3]});
//		await VatnV4dY6G.cage.call({from: accounts[0]});

		await expect(VatnV4dY6G.flux.call(bytePXRWoai, addressk5l63nI, addresssnZOYmA, uintPfIBOvN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatdSe79cU = await Vat.new({from: accounts[1]});
		const uintoPCqrrN = BigInt("1100")
		const addressLe8CpWV = accounts[2]
		const addressC0GdYvt = accounts[3]
		const byteVMPztpd = "0x0a04191904000707190f02160e2020090a040b171212031004171902040c1b17"
		const uintpMvb52T = BigInt("1330")
		const intsd8oQla = BigInt("-725")
		const intbMzuMj = BigInt("-1894")
		const addressE7Z7wgK = accounts[1]
		const addressxJUX5Yi = accounts[2]
		const addressJE6sH2 = accounts[2]
		const bytetlc4riN = "0x1103190f0813190c181a0a1f0c0a02160f19162002191d0d161c0f1506070609"
//		const bytes32XpUZmpH = await VatdSe79cU.flux.call(byteVMPztpd, addressC0GdYvt, addressLe8CpWV, uintoPCqrrN, {from: accounts[3]});
//		const uintkqHg5y9 = await VatdSe79cU.heal.call(uintpMvb52T, {from: accounts[4]});
//		const bytes32QQhWDp = await VatdSe79cU.grab.call(bytetlc4riN, addressJE6sH2, addressxJUX5Yi, addressE7Z7wgK, intbMzuMj, intsd8oQla, {from: accounts[4]});

		await expect(VatdSe79cU.flux.call(byteVMPztpd, addressC0GdYvt, addressLe8CpWV, uintoPCqrrN, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatnV4dY6G = await Vat.new({from: accounts[3]});
		const addressVITGZt = accounts[2]
		const intFhBEs7X = BigInt("-122")
		const intEM1mSCO = BigInt("-1449")
		const addressXGJ41WV = accounts[0]
		const addressH9jEjZG = accounts[0]
		const byteuderg7 = "0x09051a0c0a091d062008131c170b0c16161f19151312161e081e1a150b041f0a"
		const addressURAsQc9 = accounts[5]
		const addressLHm3i9l = await VatnV4dY6G.deny.call(addressVITGZt, {from: accounts[3]});
		const bytes32Q4ElCXJ = await VatnV4dY6G.fork.call(byteuderg7, addressH9jEjZG, addressXGJ41WV, intEM1mSCO, intFhBEs7X, {from: accounts[0]});
		const addressLDIcO5o = await VatnV4dY6G.hope.call(addressURAsQc9, {from: accounts[2]});
	});

	it('test for Vat', async () => {
		const VatnV4dY6G = await Vat.new({from: accounts[3]});
		const address4n7ORS = accounts[5]
		const intGYGjp89 = BigInt("118")
		const addressY10ZPJU = accounts[2]
		const byteBEzpLlP = "0x191406141a0912070f0805091006171b05030b031814040c110814170c1f1309"
		const addressLDIcO5o = await VatnV4dY6G.hope.call(address4n7ORS, {from: accounts[2]});
		const bytes32UGts1g7 = await VatnV4dY6G.slip.call(byteBEzpLlP, addressY10ZPJU, intGYGjp89, {from: accounts[3]});
	});

	it('test for Vat', async () => {
		const VatnV4dY6G = await Vat.new({from: accounts[3]});
		const addressxa982Go = accounts[5]
		const addressGORiJwQ = accounts[3]
		const byteK5YowQT = "0x0b1d121d0c16151d1c0703071d1e1d0b101607031a0e071112081f110e1a0117"
		const addressLDIcO5o = await VatnV4dY6G.hope.call(addressxa982Go, {from: accounts[2]});
		const addressHPSwf8 = await VatnV4dY6G.nope.call(addressGORiJwQ, {from: accounts[3]});
//		await VatnV4dY6G.auth.call({from: accounts[3]});
//		await VatnV4dY6G.cage.call({from: accounts[2]});
//		const bytes32h76PVzJ = await VatnV4dY6G.init.call(byteK5YowQT, {from: accounts[4]});

		await expect(VatnV4dY6G.auth.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vato5FY3Eq = await Vat.new({from: accounts[4]});
		const uintDNZbmQS = BigInt("1789")
		const address2rI8mg = accounts[2]
		const addressz5tOwQy = accounts[5]
		const uintkjCGdyI = BigInt("101")
		const addresskg9zXEz = accounts[1]
		const addressFmW9lsA = accounts[0]
		const uintookwB1 = BigInt("1692")
		const uintt9Rd4cd = BigInt("869")
		const addressNCV0Ujm = accounts[0]
		const addresstK34aqh = accounts[0]
		const bytejR8VNXG = "0x0605111f1307061600071d080803110a100b1d0c1d0c0214110b0e1806091512"
		const intQWTKpC9 = BigInt("353")
		const addressJGCHcjS = "0x0000000000000000000000000000000000000001"
		const bytebKApkpG = "0x12201b1f0e120f1b121716041b0a110d06040c191f16181802170d15060a121a"
//		const addressvOuXZI0 = await Vato5FY3Eq.move.call(addressz5tOwQy, address2rI8mg, uintDNZbmQS, {from: accounts[4]});
//		const addressiSTRic7 = await Vato5FY3Eq.suck.call(addressFmW9lsA, addresskg9zXEz, uintkjCGdyI, {from: accounts[4]});
//		const uintjXVBVC = await Vato5FY3Eq.heal.call(uintookwB1, {from: accounts[4]});
//		const bytes32poQCQFy = await Vato5FY3Eq.flux.call(bytejR8VNXG, addresstK34aqh, addressNCV0Ujm, uintt9Rd4cd, {from: accounts[5]});
//		const bytes32GTtgWIY = await Vato5FY3Eq.fold.call(bytebKApkpG, addressJGCHcjS, intQWTKpC9, {from: accounts[0]});
//		await Vato5FY3Eq.note.call({from: accounts[2]});

		await expect(Vato5FY3Eq.move.call(addressz5tOwQy, address2rI8mg, uintDNZbmQS, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatnV4dY6G = await Vat.new({from: accounts[3]});
		const inteCHmnrz = BigInt("-672")
		const addressKIr7pSy = "0x0000000000000000000000000000000000000001"
		const bytejLsNj4L = "0x160217080d0f021115130d130b041e180313061517051511040810091c0c1315"
		const intykD1zeG = BigInt("1445")
		const addressOJqOLIp = accounts[2]
		const byteIWmTNQ = "0x0f0c121b1d0c10081e1400030b1f150915161b0a10181007111d071a14131f0b"
		const addressEt1ddCr = accounts[4]
//		const bytes32iP8N9di = await VatnV4dY6G.fold.call(bytejLsNj4L, addressKIr7pSy, inteCHmnrz, {from: accounts[3]});
//		const bytes32l8FOKeE = await VatnV4dY6G.slip.call(byteIWmTNQ, addressOJqOLIp, intykD1zeG, {from: accounts[3]});
//		const addressLDIcO5o = await VatnV4dY6G.hope.call(addressEt1ddCr, {from: accounts[2]});

		await expect(VatnV4dY6G.fold.call(bytejLsNj4L, addressKIr7pSy, inteCHmnrz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatDy5VMxa = await Vat.new({from: accounts[1]});
		const intiNWMjgK = BigInt("636")
		const inty8uQw0B = BigInt("-146")
		const addressKKRf8IB = "0x0000000000000000000000000000000000000001"
		const addressHwKK18E = accounts[1]
		const addressTxrxfU2 = accounts[1]
		const byteWVLo3IB = "0x0d180b0b06121b15071a0d151e021a12151210051f110e0d010e160f1d040a1d"
		const intJQwyxQ = BigInt("-413")
		const intwTrpQNc = BigInt("-1524")
		const addressRt4YsAi = accounts[4]
		const addressSUuU113 = accounts[2]
		const addressW4oO6qA = accounts[5]
		const bytecnB9hqu = "0x1615140205151a181e1504111a121912071313061e0d06090f12030b1a1d120b"
		const uinttYrWX2 = BigInt("391")
//		const bytes32hmt2MfB = await VatDy5VMxa.grab.call(byteWVLo3IB, addressTxrxfU2, addressHwKK18E, addressKKRf8IB, inty8uQw0B, intiNWMjgK, {from: accounts[1]});
//		const bytes32Pd7Kcz = await VatDy5VMxa.frob.call(bytecnB9hqu, addressW4oO6qA, addressSUuU113, addressRt4YsAi, intwTrpQNc, intJQwyxQ, {from: accounts[0]});
//		const uintHNEBUW8 = await VatDy5VMxa.heal.call(uinttYrWX2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatDy5VMxa.grab.call(byteWVLo3IB, addressTxrxfU2, addressHwKK18E, addressKKRf8IB, inty8uQw0B, intiNWMjgK, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatDy5VMxa = await Vat.new({from: accounts[1]});
		const uintvvgeMHS = BigInt("831")
		const addressPD4htq = accounts[0]
		const addressu1LWtkU = accounts[3]
		const uintRvjtsNY = BigInt("387")
		const intcjjLhLb = BigInt("1319")
		const addresspy0tSRM = accounts[5]
		const bytevii3UV3 = "0x1f061a120b0019021309051c10031d121000091a030d1d1a100d1b13010f191f"
//		const addressca0a80F = await VatDy5VMxa.move.call(addressu1LWtkU, addressPD4htq, uintvvgeMHS, {from: accounts[3]});
//		const uintHNEBUW8 = await VatDy5VMxa.heal.call(uintRvjtsNY, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32TBP9Gk8 = await VatDy5VMxa.slip.call(bytevii3UV3, addresspy0tSRM, intcjjLhLb, {from: accounts[5]});

		await expect(VatDy5VMxa.move.call(addressu1LWtkU, addressPD4htq, uintvvgeMHS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatnV4dY6G = await Vat.new({from: accounts[3]});
		const intR5WM9i = BigInt("2038")
		const intM5t2AW4 = BigInt("465")
		const addressO0XFWC = accounts[2]
		const addresse0asBKS = accounts[0]
		const addresshHxTYMa = accounts[2]
		const byteX9m7BmV = "0x071c1f052018121b14181e140f0604100e0e1d1e20191d1d200a141319171214"
		const addressNXSWbGr = accounts[5]
//		const bytes32yqbZmOu = await VatnV4dY6G.grab.call(byteX9m7BmV, addresshHxTYMa, addresse0asBKS, addressO0XFWC, intM5t2AW4, intR5WM9i, {from: accounts[3]});
//		const addressLDIcO5o = await VatnV4dY6G.hope.call(addressNXSWbGr, {from: accounts[2]});

		await expect(VatnV4dY6G.grab.call(byteX9m7BmV, addresshHxTYMa, addresse0asBKS, addressO0XFWC, intM5t2AW4, intR5WM9i, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatDy5VMxa = await Vat.new({from: accounts[1]});
		const addressArjKgdF = "0x0000000000000000000000000000000000000001"
		const uintRt6GVwS = BigInt("391")
		const addressz2LNzXS = await VatDy5VMxa.rely.call(addressArjKgdF, {from: accounts[1]});
//		const uintHNEBUW8 = await VatDy5VMxa.heal.call(uintRt6GVwS, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatDy5VMxa.heal.call(uintRt6GVwS, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatnV4dY6G = await Vat.new({from: accounts[3]});
		const uintTjgvp0B = BigInt("651")
		const addressv0SjgSw = accounts[4]
		const addressy9PvNrk = accounts[1]
		const addressn7UaoGM = accounts[5]
		const addressiZf9OMr = "0x0000000000000000000000000000000000000001"
		const addressdEY5rdh = await VatnV4dY6G.suck.call(addressy9PvNrk, addressv0SjgSw, uintTjgvp0B, {from: accounts[3]});
		const addressLDIcO5o = await VatnV4dY6G.hope.call(addressn7UaoGM, {from: accounts[2]});
//		const addresswM01mXr = await VatnV4dY6G.rely.call(addressiZf9OMr, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatnV4dY6G.rely.call(addressiZf9OMr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatnV4dY6G = await Vat.new({from: accounts[3]});
		const uintSW22Onx = BigInt("1623")
		const byteJyJf7Rh = "0x18021c0e0302030d12141109060f021e0d161c08190a1c20201611120614141d"
		const bytePZspYRf = "0x010a13021c14101220110006161f070a1a00170d101d130a040419071c1e191a"
		const intU2zDh1g = BigInt("-1328")
		const intnNqmKpR = BigInt("404")
		const addressbezdR8v = "0x0000000000000000000000000000000000000001"
		const addressHHUSHSL = accounts[4]
		const addressbrjTlGq = accounts[0]
		const byteqog6V5J = "0x0518121c0f131b121917070e1d1d041a0100141200080a1b1508051b0b070819"
		const addressiC3C4KW = accounts[4]
//		const bytes32NH9gW2u = await VatnV4dY6G.file.call(bytePZspYRf, byteJyJf7Rh, uintSW22Onx, {from: accounts[3]});
//		const bytes32qrP2xwJ = await VatnV4dY6G.frob.call(byteqog6V5J, addressbrjTlGq, addressHHUSHSL, addressbezdR8v, intnNqmKpR, intU2zDh1g, {from: accounts[2]});
//		const addressLDIcO5o = await VatnV4dY6G.hope.call(addressiC3C4KW, {from: accounts[2]});

		await expect(VatnV4dY6G.file.call(bytePZspYRf, byteJyJf7Rh, uintSW22Onx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatDy5VMxa = await Vat.new({from: accounts[1]});
		const intDNdyghB = BigInt("1945")
		const addresshEk9vEP = accounts[3]
		const byteoThMA46 = "0x08160d06101518090b0c150c02110d1012070512050f030b040f0c030e080d0b"
		const uintekgWEPU = BigInt("1897")
//		await VatDy5VMxa.cage.call({from: accounts[1]});
//		const bytes32TvNgUAJ = await VatDy5VMxa.fold.call(byteoThMA46, addresshEk9vEP, intDNdyghB, {from: accounts[3]});
//		const uintHNEBUW8 = await VatDy5VMxa.heal.call(uintekgWEPU, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatDy5VMxa.cage.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatDy5VMxa = await Vat.new({from: accounts[1]});
		const addresssHegBTv = accounts[1]
		const bytesurnF0X = "0x021d1c050c15090e060a12021610151e151d1c0c030c0019071d070a181f0116"
		const uintIXQ52vN = BigInt("391")
		const addressTqw9T1G = await VatDy5VMxa.nope.call(addresssHegBTv, {from: accounts[5]});
		const bytes32RmHgXO = await VatDy5VMxa.init.call(bytesurnF0X, {from: accounts[1]});
//		const uintHNEBUW8 = await VatDy5VMxa.heal.call(uintIXQ52vN, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatDy5VMxa.heal.call(uintIXQ52vN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})