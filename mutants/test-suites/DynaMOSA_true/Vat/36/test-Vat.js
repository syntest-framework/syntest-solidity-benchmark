const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatbcKi32s = await Vat.new({from: accounts[3]});
		const addressZarqKL3 = accounts[3]
		const intjGa1uOj = BigInt("376")
		const intVD3j5ZA = BigInt("884")
		const addressjBRpN9A = accounts[5]
		const addressWzcmT9x = accounts[1]
		const addressgZECZsD = accounts[1]
		const byteuVzQ5T9 = "0x16150c0b0c0408191f0c081a0810170e1b1c1e02161e1f1e17030518111e0610"
		const addressYmQG6aE = accounts[4]
		const bytevbIipL = "0x020c03031418171b13151a020f1309170713151f051d070a1907071f181a0505"
		const uintcm3Jv2C = BigInt("39")
		const uintzdoNvUw = BigInt("548")
		const addressGkYhL73 = accounts[1]
		const addressDS9yVRp = accounts[0]
		const addressvvYfhBn = await VatbcKi32s.deny.call(addressZarqKL3, {from: accounts[3]});
//		const bytes32idj7fqn = await VatbcKi32s.frob.call(byteuVzQ5T9, addressgZECZsD, addressWzcmT9x, addressjBRpN9A, intVD3j5ZA, intjGa1uOj, {from: accounts[4]});
//		const addressCrV5mSw = await VatbcKi32s.nope.call(addressYmQG6aE, {from: accounts[1]});
//		const bytes32uRqRb3Y = await VatbcKi32s.init.call(bytevbIipL, {from: accounts[3]});
//		const uintPuVJf1v = await VatbcKi32s.heal.call(uintcm3Jv2C, {from: accounts[3]});
//		const addressR3KsYes = await VatbcKi32s.suck.call(addressDS9yVRp, addressGkYhL73, uintzdoNvUw, {from: accounts[3]});

		await expect(VatbcKi32s.frob.call(byteuVzQ5T9, addressgZECZsD, addressWzcmT9x, addressjBRpN9A, intVD3j5ZA, intjGa1uOj, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatYECPCYH = await Vat.new({from: accounts[1]});
		const addressd5B87y1 = accounts[2]
		const uintBrIrCTR = BigInt("1882")
		const byteLGA28Z1 = "0x091e12171f0a1a0d1f06101e131f0d080208181303150413180b0f0b0e061f07"
		const bytesr2OGT8 = "0x1b040211070d1c181a1c0e111c1a150f0d0a1b1b181614130114181d1d071c1d"
		const uintXtkgtSQ = BigInt("1321")
		const uintbyJC4kF = BigInt("1696")
		const addresshV2C5o = await VatYECPCYH.hope.call(addressd5B87y1, {from: accounts[4]});
//		const bytes32I0fK8nD = await VatYECPCYH.file.call(bytesr2OGT8, byteLGA28Z1, uintBrIrCTR, {from: accounts[1]});
//		await VatYECPCYH.cage.call({from: "0x0000000000000000000000000000000000000001"});
//		const uintodHfUEr = await VatYECPCYH.heal.call(uintXtkgtSQ, {from: accounts[2]});
//		const uintoXi3xz = await VatYECPCYH.heal.call(uintbyJC4kF, {from: accounts[0]});

		await expect(VatYECPCYH.file.call(bytesr2OGT8, byteLGA28Z1, uintBrIrCTR, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VattgUUZ26 = await Vat.new({from: accounts[1]});
		const intkpxiIMe = BigInt("1404")
		const intetQp148 = BigInt("1603")
		const addressklnM1rx = accounts[3]
		const addresskfZzYK = accounts[0]
		const addresst3MZ66r = accounts[4]
		const byteChni6mj = "0x0611141f1c050f1a131714171b0702161008010b1c121c0c1f161d040c070316"
		const bytegztzN9M = "0x160c180a16200405020f1c091b1c1b18091400100e07150b13060d12020e0b09"
		const uinta5E0v6 = BigInt("1969")
		const byteSF3Wqx = "0x0813160e0f1d080f1f1d0c1c1c190d18040401190403201f1c10070a0a06190f"
		const byteJLCSsQz = "0x0a14162019100b1c10040e1b1b1e181906050e16071a100a08120b0d200f1d02"
		const intKbuCph = BigInt("1789")
		const intCIfk8g3 = BigInt("-1805")
		const addressCvFNIqp = accounts[2]
		const addressSlPNwMo = "0x0000000000000000000000000000000000000001"
		const addressnvExR1f = accounts[0]
		const bytetz4wpvY = "0x151d0e0b1b0205071d111c13181d1e081e02201f0a1e111f1a051809080e191c"
//		const bytes32q4IuFXm = await VattgUUZ26.grab.call(byteChni6mj, addresst3MZ66r, addresskfZzYK, addressklnM1rx, intetQp148, intkpxiIMe, {from: accounts[0]});
//		const bytes32JWLeqif = await VattgUUZ26.init.call(bytegztzN9M, {from: accounts[5]});
//		await VattgUUZ26.cage.call({from: accounts[2]});
//		const bytes32L64KnGs = await VattgUUZ26.file.call(byteJLCSsQz, byteSF3Wqx, uinta5E0v6, {from: accounts[3]});
//		const bytes32upg6ZjK = await VattgUUZ26.grab.call(bytetz4wpvY, addressnvExR1f, addressSlPNwMo, addressCvFNIqp, intCIfk8g3, intKbuCph, {from: accounts[4]});

		await expect(VattgUUZ26.grab.call(byteChni6mj, addresst3MZ66r, addresskfZzYK, addressklnM1rx, intetQp148, intkpxiIMe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatkNOOoY5 = await Vat.new({from: accounts[3]});
		const uintdbLJPN = BigInt("693")
		const byteOELoTIZ = "0x051b130e19061618061608070c0c021b120f091f0100171e021b171f07180119"
		const uintiMy1QGS = BigInt("1444")
		const byteyuyfxfs = "0x090c151410061e1113060f14051618060005070a0315191919060a181c1b0b1d"
		const byteWomRtRb = "0x05150a1c151b07081a0a1f1d1b0b0413010506080411170c0a031d0e08021412"
		const intAqQrmNJ = BigInt("-1884")
		const intM7CoNN = BigInt("1399")
		const address7NVGiX = accounts[3]
		const addressohm25nt = accounts[3]
		const addressgb3gZVM = accounts[0]
		const byteHoGGys4 = "0x1818160e1f080d0f171a0f121f180718151620131d0c140202091116011f1712"
//		const bytes32IYSic5v = await VatkNOOoY5.file.call(byteOELoTIZ, uintdbLJPN, {from: accounts[2]});
//		const bytes32u2qlxkq = await VatkNOOoY5.file.call(byteyuyfxfs, uintiMy1QGS, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32R3VUaqc = await VatkNOOoY5.init.call(byteWomRtRb, {from: accounts[4]});
//		await VatkNOOoY5.cage.call({from: accounts[3]});
//		const bytes32e6BMW2n = await VatkNOOoY5.frob.call(byteHoGGys4, addressgb3gZVM, addressohm25nt, address7NVGiX, intM7CoNN, intAqQrmNJ, {from: accounts[3]});

		await expect(VatkNOOoY5.file.call(byteOELoTIZ, uintdbLJPN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatkQhureq = await Vat.new({from: accounts[3]});
		const intly5qBa7 = BigInt("1407")
		const intqHB0GcE = BigInt("-1895")
		const addressDvW3mIp = accounts[2]
		const addresszpfkjpp = accounts[4]
		const byteTCyT5PC = "0x111f0b041e150b05011504180a180b140e1a0c071f0f1019081c171804040801"
		const byteEENoImg = "0x0410190c00011d1610181b1c1f121d051b2000141a081f0e00150316180b0b05"
		const intTLSyWxc = BigInt("-1405")
		const intZ0Bn9hy = BigInt("406")
		const addressiqxIrhw = accounts[0]
		const addressXHsymIZ = accounts[3]
		const byteiE1Kfo4 = "0x011e0604161f121d181000150a181b0a0704161f010d020f16030f1416121d11"
		const uintxvr4woM = BigInt("938")
//		const bytes32TK6phY0 = await VatkQhureq.fork.call(byteTCyT5PC, addresszpfkjpp, addressDvW3mIp, intqHB0GcE, intly5qBa7, {from: accounts[5]});
//		const bytes32zASsuMc = await VatkQhureq.init.call(byteEENoImg, {from: accounts[0]});
//		const bytes32GM87RU = await VatkQhureq.fork.call(byteiE1Kfo4, addressXHsymIZ, addressiqxIrhw, intZ0Bn9hy, intTLSyWxc, {from: accounts[1]});
//		const uintlLXsSbC = await VatkQhureq.heal.call(uintxvr4woM, {from: accounts[4]});
//		await VatkQhureq.note.call({from: accounts[2]});

		await expect(VatkQhureq.fork.call(byteTCyT5PC, addresszpfkjpp, addressDvW3mIp, intqHB0GcE, intly5qBa7, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatgmQDmBZ = await Vat.new({from: accounts[3]});
		const uintipobpkh = BigInt("207")
		const addressdFeZKwk = accounts[3]
		const addressRqI56L2 = accounts[0]
		const byteQYC9isN = "0x0b14030b1f0008050d1b191f071e1f200f0814050d15081d0906041911021b1b"
//		await VatgmQDmBZ.cage.call({from: accounts[3]});
//		const bytes32FvlJqZ1 = await VatgmQDmBZ.flux.call(byteQYC9isN, addressRqI56L2, addressdFeZKwk, uintipobpkh, {from: accounts[3]});

		await expect(VatgmQDmBZ.cage.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatm55Wrsj = await Vat.new({from: accounts[3]});
		const addressP4X5nRU = accounts[2]
		const intTtXZ1OD = BigInt("241")
		const intiK3DboX = BigInt("-1725")
		const addressU4fo9Q3 = accounts[1]
		const addressAVydj09 = accounts[4]
		const addressJZaMY1p = accounts[3]
		const byterTPN4HF = "0x081c1002110901070a061d021a0e091a0311100b09170b1602071910151c0b1b"
		const bytemettIXD = "0x1e07071406181d0703040d20041b1410191e0718081609080e1f08120812061e"
		const uintPsgyUPK = BigInt("925")
		const addressZ0xMXHZ = accounts[0]
		const addressprTgEAw = accounts[4]
		const addressyq84hEp = await Vatm55Wrsj.nope.call(addressP4X5nRU, {from: accounts[0]});
//		await Vatm55Wrsj.cage.call({from: accounts[5]});
//		const bytes32OzXY58v = await Vatm55Wrsj.frob.call(byterTPN4HF, addressJZaMY1p, addressAVydj09, addressU4fo9Q3, intiK3DboX, intTtXZ1OD, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32kN0E0hl = await Vatm55Wrsj.init.call(bytemettIXD, {from: accounts[5]});
//		const addresslgtU61Q = await Vatm55Wrsj.suck.call(addressprTgEAw, addressZ0xMXHZ, uintPsgyUPK, {from: accounts[1]});

		await expect(Vatm55Wrsj.cage.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatgmQDmBZ = await Vat.new({from: accounts[3]});
		const intl6hrcgG = BigInt("1799")
		const addresswDvTaZ = accounts[0]
		const byteHxXkOy = "0x0d1d080c0a1716001a091a1c10140a0f1c0f13200e011e1705061308001a1d04"
		const uintQcAjwTI = BigInt("207")
		const addressjlasQwR = accounts[3]
		const addressC5qB02j = accounts[0]
		const bytec7JIz2h = "0x0b14030b1f0008050d1b191f071e1f200f0814050d15081d0906041911021b1b"
		const addressp7b6lKt = accounts[2]
		const intGRdtVT6 = BigInt("-138")
		const intTl923g7 = BigInt("1287")
		const addressdGlva1S = accounts[4]
		const addressYn5In7 = "0x0000000000000000000000000000000000000001"
		const addressdYmu2l = accounts[4]
		const byteKwzvTOo = "0x080e0e150e1208131b15140c00120d051a0507010d1c0d020806080518171f02"
//		await VatgmQDmBZ.cage.call({from: accounts[3]});
//		const bytes32UuIat90 = await VatgmQDmBZ.fold.call(byteHxXkOy, addresswDvTaZ, intl6hrcgG, {from: accounts[3]});
//		const bytes32FvlJqZ1 = await VatgmQDmBZ.flux.call(bytec7JIz2h, addressC5qB02j, addressjlasQwR, uintQcAjwTI, {from: accounts[3]});
//		const addressG6TWVdd = await VatgmQDmBZ.nope.call(addressp7b6lKt, {from: accounts[4]});
//		await VatgmQDmBZ.cage.call({from: accounts[4]});
//		const bytes32Mqkeftg = await VatgmQDmBZ.frob.call(byteKwzvTOo, addressdYmu2l, addressYn5In7, addressdGlva1S, intTl923g7, intGRdtVT6, {from: accounts[3]});

		await expect(VatgmQDmBZ.cage.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatgmQDmBZ = await Vat.new({from: accounts[3]});
		const uintCzyBCN = BigInt("578")
		const byterGByoeU = "0x03160a12070d1e040f0a000f0606020a07040210031f1604160a1a0a191b1412"
		const byteCiII17Y = "0x150f0215000e08050b1e11070518081d0119031a030a080312071f0a1f100115"
		const uintMa1X4oD = BigInt("207")
		const addressX8GUOPP = accounts[3]
		const addressu8K4D37 = accounts[0]
		const byteeVHiQQM = "0x0b14030b1f0008050d1b191f071e1f200f0814050d15081d0906041911021b1b"
//		await VatgmQDmBZ.cage.call({from: accounts[3]});
//		await VatgmQDmBZ.auth.call({from: accounts[3]});
//		const bytes32CCpJOfI = await VatgmQDmBZ.file.call(byteCiII17Y, byterGByoeU, uintCzyBCN, {from: accounts[2]});
//		const bytes32FvlJqZ1 = await VatgmQDmBZ.flux.call(byteeVHiQQM, addressu8K4D37, addressX8GUOPP, uintMa1X4oD, {from: accounts[3]});

		await expect(VatgmQDmBZ.cage.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatkQhureq = await Vat.new({from: accounts[3]});
		const uintCN1hSfw = BigInt("222")
		const intf8YvVUL = BigInt("1407")
		const intkkbzNvl = BigInt("-1895")
		const addressr1TFNQ9 = accounts[2]
		const addressq0NPDFw = accounts[4]
		const byteNcS7mn = "0x111f0b041e150b05011504180a180b140e1a0c071f0f1019081c171804040801"
		const byteR0GFOBO = "0x0410190c00011c1610181b1c1f121d051b2000141a081f0e00150316180b0b05"
//		const uintlCm8yJ = await VatkQhureq.heal.call(uintCN1hSfw, {from: accounts[1]});
//		const bytes32TK6phY0 = await VatkQhureq.fork.call(byteNcS7mn, addressq0NPDFw, addressr1TFNQ9, intkkbzNvl, intf8YvVUL, {from: accounts[5]});
//		const bytes32zASsuMc = await VatkQhureq.init.call(byteR0GFOBO, {from: accounts[0]});
//		await VatkQhureq.note.call({from: accounts[2]});

		await expect(VatkQhureq.heal.call(uintCN1hSfw, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatgmQDmBZ = await Vat.new({from: accounts[3]});
		const byteaJND1Mc = "0x171e071a19140a061018051c021e1309171c081f1104041d0912030a1e070c1a"
		const bytes32aognvuV = await VatgmQDmBZ.init.call(byteaJND1Mc, {from: accounts[3]});
//		await VatgmQDmBZ.cage.call({from: accounts[3]});

		await expect(VatgmQDmBZ.cage.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatgmQDmBZ = await Vat.new({from: accounts[3]});
		const addressdDVCm7m = accounts[3]
		const uintltRsNi = BigInt("207")
		const addresseDthGyf = accounts[3]
		const addressunX5dWN = accounts[0]
		const bytedQsxYPo = "0x0b14030b1f0008050d1b191f071e1f200f0814050d15081d0906041911021b1b"
		const byteN2ghYfz = "0x0d161d15101e171d1106060613171f141118100b1101090813171d0301171f19"
		const addressy3mFooK = await VatgmQDmBZ.rely.call(addressdDVCm7m, {from: accounts[3]});
//		await VatgmQDmBZ.cage.call({from: accounts[3]});
//		const bytes32FvlJqZ1 = await VatgmQDmBZ.flux.call(bytedQsxYPo, addressunX5dWN, addresseDthGyf, uintltRsNi, {from: accounts[3]});
//		const bytes32v0dfyCH = await VatgmQDmBZ.init.call(byteN2ghYfz, {from: accounts[1]});

		await expect(VatgmQDmBZ.cage.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatD6hC5h1 = await Vat.new({from: accounts[0]});
		const intXvwze3j = BigInt("-1980")
		const intvHUre5w = BigInt("-1715")
		const addressW3kYKQg = accounts[0]
		const addressGefaSAA = accounts[4]
		const addressXxUy1e = accounts[2]
		const byteXzDFvzb = "0x171c1815151e050112020603080f100f1d080516020b020105080809101c0d01"
		const intat8fA8g = BigInt("-1312")
		const intq9CncE = BigInt("1120")
		const addressuZW34kl = accounts[3]
		const addressIWlGq7l = accounts[0]
		const addressIaqesFt = accounts[0]
		const byteXnvHXHN = "0x1b0111050e02000718061b19071614020218090b021b0f1b070212000e171120"
		const intUkcmga = BigInt("1272")
		const addressN64koM9 = accounts[3]
		const bytewyJdnpl = "0x171f15010b1105050c031e151803160a11151615160215141e091c1902141718"
		const addressKfYc4l = accounts[2]
//		const bytes32OEZ903t = await VatD6hC5h1.grab.call(byteXzDFvzb, addressXxUy1e, addressGefaSAA, addressW3kYKQg, intvHUre5w, intXvwze3j, {from: accounts[0]});
//		const bytes32mFUsAaJ = await VatD6hC5h1.frob.call(byteXnvHXHN, addressIaqesFt, addressIWlGq7l, addressuZW34kl, intq9CncE, intat8fA8g, {from: accounts[1]});
//		const bytes32QatzGt8 = await VatD6hC5h1.slip.call(bytewyJdnpl, addressN64koM9, intUkcmga, {from: accounts[1]});
//		const addressj9VC7C = await VatD6hC5h1.nope.call(addressKfYc4l, {from: accounts[3]});

		await expect(VatD6hC5h1.grab.call(byteXzDFvzb, addressXxUy1e, addressGefaSAA, addressW3kYKQg, intvHUre5w, intXvwze3j, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatgmQDmBZ = await Vat.new({from: accounts[3]});
		const uintl8QZRRo = BigInt("441")
		const addresszXn2RPe = accounts[4]
		const addressK4aHCV = accounts[3]
		const uinttVFzOlq = BigInt("207")
		const addressgPPeL2Z = accounts[3]
		const addresstHWX4h = accounts[0]
		const byteeFIvqti = "0x0b14030b1f0008050d1b191f071e1f200f0814050d15081d0906041911021b1b"
//		await VatgmQDmBZ.cage.call({from: accounts[3]});
//		const addressWwCpGcz = await VatgmQDmBZ.move.call(addressK4aHCV, addresszXn2RPe, uintl8QZRRo, {from: accounts[4]});
//		const bytes32FvlJqZ1 = await VatgmQDmBZ.flux.call(byteeFIvqti, addresstHWX4h, addressgPPeL2Z, uinttVFzOlq, {from: accounts[3]});

		await expect(VatgmQDmBZ.cage.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatYECPCYH = await Vat.new({from: accounts[1]});
		const uintHiqcFge = BigInt("1265")
		const addressxiSFIJ = accounts[0]
		const addressfmYlfs1 = accounts[4]
		const uint98f0OY = BigInt("1323")
		const addressGxGZGck = await VatYECPCYH.suck.call(addressfmYlfs1, addressxiSFIJ, uintHiqcFge, {from: accounts[1]});
//		const uintodHfUEr = await VatYECPCYH.heal.call(uint98f0OY, {from: accounts[2]});

		await expect(VatYECPCYH.heal.call(uint98f0OY, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatgmQDmBZ = await Vat.new({from: accounts[3]});
		const uintaiuwW56 = BigInt("441")
		const addressKZe55cG = accounts[4]
		const addressK5EIWcf = accounts[4]
		const uintfstrdJV = BigInt("207")
		const addressgnc6m4d = accounts[3]
		const addresszBH6Of = accounts[0]
		const byteseYwiId = "0x0b14030b1f0008050d1b191f071e1f200f0814050d15081d0906041911021b1b"
//		await VatgmQDmBZ.cage.call({from: accounts[3]});
//		const addressWwCpGcz = await VatgmQDmBZ.move.call(addressK5EIWcf, addressKZe55cG, uintaiuwW56, {from: accounts[4]});
//		const bytes32FvlJqZ1 = await VatgmQDmBZ.flux.call(byteseYwiId, addresszBH6Of, addressgnc6m4d, uintfstrdJV, {from: accounts[3]});

		await expect(VatgmQDmBZ.cage.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatMmK5BtK = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwq3bnMq = BigInt("2017")
		const addressZRmMSex = accounts[0]
		const addresscfFHhZZ = accounts[5]
		const addresstshxenG = accounts[3]
		const addressjAwG65x = await VatMmK5BtK.move.call(addresscfFHhZZ, addressZRmMSex, uintwq3bnMq, {from: accounts[4]});
		await VatMmK5BtK.note.call({from: accounts[1]});
		const addresszaLLu13 = await VatMmK5BtK.deny.call(addresstshxenG, {from: accounts[3]});
	});

	it('test for Vat', async () => {
		const VatYECPCYH = await Vat.new({from: accounts[1]});
		const uintuedX0bB = BigInt("1882")
		const bytemNYoVrp = "0x091e12171f0a1a0d1f06101e131f0d0802081813fffffffa150413180b0f0b0e061f07"
		const byteFZyDeqI = "0x1b040211070d1c181a1c0e111c1a150f0d0a1b1b181614130114181d1d071c1d"
//		const bytes32I0fK8nD = await VatYECPCYH.file.call(byteFZyDeqI, bytemNYoVrp, uintuedX0bB, {from: accounts[1]});

		await expect(VatYECPCYH.file.call(byteFZyDeqI, bytemNYoVrp, uintuedX0bB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatgmQDmBZ = await Vat.new({from: accounts[3]});
		const uintAxEwPG5 = BigInt("207")
		const addressjuSLJ0Y = accounts[3]
		const addressE5KP5c = accounts[0]
		const byteuLAVDjo = "0x0b14ffffffff0b1f0008050d1b191f071e1f200f0814050d15081d0906041911021b1b"
		const uintcfg9Gq3 = BigInt("777")
		const bytenP9GTS1 = "0x131d0f120c020610120912050b0d080c151e1d100c05151812071f0518150c0f"
//		const bytes32FvlJqZ1 = await VatgmQDmBZ.flux.call(byteuLAVDjo, addressE5KP5c, addressjuSLJ0Y, uintAxEwPG5, {from: accounts[3]});
//		const bytes32xk5SFnO = await VatgmQDmBZ.file.call(bytenP9GTS1, uintcfg9Gq3, {from: accounts[3]});

		await expect(VatgmQDmBZ.flux.call(byteuLAVDjo, addressE5KP5c, addressjuSLJ0Y, uintAxEwPG5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatD6hC5h1 = await Vat.new({from: accounts[0]});
		const intpPLBPE = BigInt("2004")
		const addressTh2xXFH = accounts[4]
		const byteffL41wm = "0x1c030f19111f010f0f07070a0c081106100601131305021a081b1c0d061b1206"
		const uintzP8CPYl = BigInt("524")
		const addressvXTakER = accounts[3]
		const addressOQM2asY = accounts[3]
		const byteKyd0qOi = "0x031512071b0001071715161f0f161a031f20101b161b131b0a03051e1f1a1b0b"
		const intu6EaDMK = BigInt("-1014")
		const intrCeQAU9 = BigInt("-2030")
		const addresscDXcqq1 = accounts[4]
		const addressoQIMxsH = accounts[3]
		const addressfyHDP3C = accounts[1]
		const byteSx7sxd1 = "0x0c1504161d110503030b1e1e1f1803100c1707030e161903051c061015121d07"
		const addressF28YMMH = accounts[4]
		const intO7xo6qj = BigInt("-1312")
		const intwNvqvWO = BigInt("-1863")
		const addresszyyH0sD = accounts[3]
		const addressDoSxZb0 = accounts[1]
		const addressEqgoPnR = accounts[0]
		const bytersRv5KG = "0x1b0111050e02000718061b19071614020218090b021b0f1b070212000e171120"
		const bytes32e8Zg3Tj = await VatD6hC5h1.fold.call(byteffL41wm, addressTh2xXFH, intpPLBPE, {from: accounts[0]});
//		const bytes328zasbA = await VatD6hC5h1.flux.call(byteKyd0qOi, addressOQM2asY, addressvXTakER, uintzP8CPYl, {from: accounts[3]});
//		const bytes32cPRSwX8 = await VatD6hC5h1.frob.call(byteSx7sxd1, addressfyHDP3C, addressoQIMxsH, addresscDXcqq1, intrCeQAU9, intu6EaDMK, {from: accounts[1]});
//		const addressxWnincw = await VatD6hC5h1.deny.call(addressF28YMMH, {from: accounts[3]});
//		const bytes32mFUsAaJ = await VatD6hC5h1.frob.call(bytersRv5KG, addressEqgoPnR, addressDoSxZb0, addresszyyH0sD, intwNvqvWO, intO7xo6qj, {from: accounts[1]});

		await expect(VatD6hC5h1.flux.call(byteKyd0qOi, addressOQM2asY, addressvXTakER, uintzP8CPYl, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatYECPCYH = await Vat.new({from: accounts[1]});
		const uintEEMU0O = BigInt("1882")
		const bytemLI9FX1 = "0x091e12171f0a1a0d1f06101e131f0d080208181303150413180b0f0b0e061f07"
		const bytem1234As = "0x1b040211070d1c181a1c0e111c1a150f0d0a1b1b18161413ffffffff14181d1d071c1d"
		const uintrs5XD2 = BigInt("551")
		const addressHTLiIzc = accounts[3]
		const addressJiNjac3 = accounts[0]
		const bytetPklUXG = "0x1d170c1d071c1c1b1c0714161a111f061519080a0e1b0f03141d080c11070618"
		const uintQUoECYa = BigInt("1696")
//		const bytes32I0fK8nD = await VatYECPCYH.file.call(bytem1234As, bytemLI9FX1, uintEEMU0O, {from: accounts[1]});
//		const bytes32zzr3rSL = await VatYECPCYH.flux.call(bytetPklUXG, addressJiNjac3, addressHTLiIzc, uintrs5XD2, {from: accounts[1]});
//		const uintoXi3xz = await VatYECPCYH.heal.call(uintQUoECYa, {from: accounts[0]});

		await expect(VatYECPCYH.file.call(bytem1234As, bytemLI9FX1, uintEEMU0O, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatkQhureq = await Vat.new({from: accounts[3]});
		const intal83Y1y = BigInt("-554")
		const addressBl0c85y = accounts[2]
		const byteSFiwUkK = "0x1d09111a0e101c110a011f12122017010f1c0908020b0e1f0c1a07161d07091e"
		const intNEjvy7T = BigInt("1407")
		const intIc6cJL = BigInt("-1895")
		const addressaSjmcQM = accounts[2]
		const addressgyuIc33 = accounts[5]
		const bytetaFJDiQ = "0x111f0b041e150b05011504180a180b140e1a0c071f0f1019081c171804040801"
//		const bytes32rNOm0xR = await VatkQhureq.slip.call(byteSFiwUkK, addressBl0c85y, intal83Y1y, {from: accounts[3]});
//		const bytes32TK6phY0 = await VatkQhureq.fork.call(bytetaFJDiQ, addressgyuIc33, addressaSjmcQM, intIc6cJL, intNEjvy7T, {from: accounts[5]});

		await expect(VatkQhureq.slip.call(byteSFiwUkK, addressBl0c85y, intal83Y1y, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatPpq3UHA = await Vat.new({from: accounts[0]});
		const intmnAqKPg = BigInt("-1169")
		const intpGRPgL3 = BigInt("-1295")
		const addressKHXD6mT = accounts[2]
		const addressWpN9Ca = accounts[2]
		const byteC5bF1Up = "0x150801140d0e1a141f19161006110c0a171a0d17131b171b1a0f20101d06030d"
		const intsh3zKvq = BigInt("928")
		const addressQ9LTVTa = accounts[3]
		const byteie1joxp = "0x050c061d05100d0819060c13061a10040a0b1218201d1e151d1f0b041e18000d"
		const uintux0VPVi = BigInt("498")
		const byteMiDPQZt = "0x201a030f0b1e0a110e12160d1f0e010a1c0d0f091517111a140d13110306040c"
//		const bytes32uvhRhc9 = await VatPpq3UHA.fork.call(byteC5bF1Up, addressWpN9Ca, addressKHXD6mT, intpGRPgL3, intmnAqKPg, {from: accounts[3]});
//		const bytes32WpkBlED = await VatPpq3UHA.slip.call(byteie1joxp, addressQ9LTVTa, intsh3zKvq, {from: accounts[3]});
//		const bytes32UQzE0yW = await VatPpq3UHA.file.call(byteMiDPQZt, uintux0VPVi, {from: accounts[5]});

		await expect(VatPpq3UHA.fork.call(byteC5bF1Up, addressWpN9Ca, addressKHXD6mT, intpGRPgL3, intmnAqKPg, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatYECPCYH = await Vat.new({from: accounts[1]});
		const uintUyr4kE7 = BigInt("1882")
		const byteroEnPI = "0x091e12171f0a1a0d1f06101e131f0d080208181303150413180b0f0b0effffffff1f07"
		const byteY98NBoI = "0x1b040211070d1c181a1c0e111c1a150f0d0a1b1b181614130114181d1d071c1d"
//		const bytes32I0fK8nD = await VatYECPCYH.file.call(byteY98NBoI, byteroEnPI, uintUyr4kE7, {from: accounts[1]});

		await expect(VatYECPCYH.file.call(byteY98NBoI, byteroEnPI, uintUyr4kE7, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})