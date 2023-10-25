const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatEM3GmKC = await Vat.new({from: accounts[4]});
		const uintNJceiXz = BigInt("441")
		const bytecyCZP2n = "0x0f0f1f1f0a10051709021c0209160a1b1f0e0c18000601160b20051f0a201109"
		const byteEws4Atk = "0x03110c0b0b16060f1e0b0a02001b090e0710110f0f051912020d1f1e0a12111b"
		const intyEumSkH = BigInt("428")
		const intG8DVQwO = BigInt("793")
		const addressdV7CFca = accounts[2]
		const addresshdiJLYx = accounts[5]
		const addressroWSnol = accounts[3]
		const bytebZxUtJt = "0x191b02161418071d0a1516121f010e121a10011011171c1f061e12021a001513"
		const uinti94CGPb = BigInt("1188")
		const bytezZzIG3 = "0x07160e0c1d0b021d010705070d0203100c1d1502140a0f01161e0f060209140a"
		const intWawcloP = BigInt("1509")
		const addressmVch1v9 = accounts[3]
		const bytez32ZJht = "0x15000d1f15091b17191f011519090b180b1a171b1c0e031310190c171301141f"
		const addressmlVbmDP = accounts[0]
		const bytes32QqKLVn = await VatEM3GmKC.file.call(byteEws4Atk, bytecyCZP2n, uintNJceiXz, {from: accounts[2]});
		const bytes32a4npSPY = await VatEM3GmKC.frob.call(bytebZxUtJt, addressroWSnol, addresshdiJLYx, addressdV7CFca, intG8DVQwO, intyEumSkH, {from: "0x0000000000000000000000000000000000000001"});
		const bytes32Qc3Mphd = await VatEM3GmKC.file.call(bytezZzIG3, uinti94CGPb, {from: accounts[2]});
		await VatEM3GmKC.cage.call({from: accounts[2]});
		const bytes320r8V3m = await VatEM3GmKC.slip.call(bytez32ZJht, addressmVch1v9, intWawcloP, {from: accounts[1]});
		const addressSqJBOIt = await VatEM3GmKC.nope.call(addressmlVbmDP, {from: accounts[4]});

		await expect(VatEM3GmKC.file.call(byteEws4Atk, bytecyCZP2n, uintNJceiXz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatduIMDue = await Vat.new({from: accounts[0]});
		const intVpV5wS = BigInt("-23")
		const intG8qfMV = BigInt("-1944")
		const addressiIh7vET = accounts[3]
		const addressHklBhj3 = accounts[4]
		const byteOp5WO7T = "0x030400071b101f02150c12042008200c0c1108091e0c19150e1c0919031b021a"
		const addressxEI1pr2 = accounts[4]
		const bytes32JZN3bP = await VatduIMDue.fork.call(byteOp5WO7T, addressHklBhj3, addressiIh7vET, intG8qfMV, intVpV5wS, {from: accounts[3]});
		const addressaq8KOoB = await VatduIMDue.deny.call(addressxEI1pr2, {from: accounts[2]});

		await expect(VatduIMDue.fork.call(byteOp5WO7T, addressHklBhj3, addressiIh7vET, intG8qfMV, intVpV5wS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatP4Awy5O = await Vat.new({from: accounts[3]});
		const intZyJrYR9 = BigInt("-1344")
		const intBaXjE7O = BigInt("116")
		const addressQUNZHa = accounts[2]
		const addressmu7jtfz = accounts[2]
		const addressYsxkEC = accounts[3]
		const bytemh4R2a = "0x1e0f08160a09140a0e130005020e1b0c18021a1f040b1b1e14170f1f030a180d"
		const addressHriUApZ = accounts[2]
		const intKO6pZV7 = BigInt("-1178")
		const intv2aHIlG = BigInt("1162")
		const addressXaG7yop = accounts[2]
		const addressLtsNkUS = accounts[0]
		const addresspC1gIvg = accounts[4]
		const bytem35re3A = "0x1a0a200111111a1e0416011d14171c150f200c121c0f10101e1a0d0a141d121e"
		const addresstzxb3cl = accounts[2]
		const addressAZ4odGn = accounts[1]
		const bytes32iowMpSg = await VatP4Awy5O.grab.call(bytemh4R2a, addressYsxkEC, addressmu7jtfz, addressQUNZHa, intBaXjE7O, intZyJrYR9, {from: accounts[3]});
		const addressGKcdP5t = await VatP4Awy5O.deny.call(addressHriUApZ, {from: accounts[4]});
		const bytes329fXdpB = await VatP4Awy5O.frob.call(bytem35re3A, addresspC1gIvg, addressLtsNkUS, addressXaG7yop, intv2aHIlG, intKO6pZV7, {from: "0x0000000000000000000000000000000000000001"});
		const addressEdZ87JY = await VatP4Awy5O.nope.call(addresstzxb3cl, {from: accounts[2]});
		const addresskhI6q9Q = await VatP4Awy5O.rely.call(addressAZ4odGn, {from: accounts[3]});

		await expect(VatP4Awy5O.grab.call(bytemh4R2a, addressYsxkEC, addressmu7jtfz, addressQUNZHa, intBaXjE7O, intZyJrYR9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatmanl1B2 = await Vat.new({from: accounts[3]});
		await Vatmanl1B2.auth.call({from: accounts[2]});
		await Vatmanl1B2.note.call({from: accounts[2]});
		await Vatmanl1B2.cage.call({from: accounts[4]});
		await Vatmanl1B2.note.call({from: accounts[4]});

		await expect(Vatmanl1B2.auth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatUdwHLzJ = await Vat.new({from: accounts[4]});
		const uintFCF5y3y = BigInt("1377")
		const intGk3se0Z = BigInt("541")
		const intFmrv6z = BigInt("481")
		const addresslVcAULJ = accounts[4]
		const addresshTXmRAj = accounts[0]
		const addressdvrZF6M = accounts[1]
		const byteMcmXQGF = "0x110b15170f0c1014111a1e200b120200021d1a150a18111e12070d1a0e061114"
		const intzzBKMQg = BigInt("-1828")
		const intlAHBcV7 = BigInt("1798")
		const addressV31wE5L = accounts[3]
		const addressJPVXICd = accounts[4]
		const bytevBObcLg = "0x050315091706121f021117030820140c071002021a0d00111b150f0c1f19081d"
		const uintuT9nIps = BigInt("1308")
		const addressAubWDxu = accounts[0]
		const addressmeBznqw = accounts[1]
		const byteFIGyKTj = "0x190404041e051c150b1e1a04151a05121e19160c070e1611030b111c0a190810"
		const uintpj4clvX = await VatUdwHLzJ.heal.call(uintFCF5y3y, {from: accounts[0]});
		const bytes32YHIbvD8 = await VatUdwHLzJ.frob.call(byteMcmXQGF, addressdvrZF6M, addresshTXmRAj, addresslVcAULJ, intFmrv6z, intGk3se0Z, {from: accounts[0]});
		const bytes32M1rts8F = await VatUdwHLzJ.fork.call(bytevBObcLg, addressJPVXICd, addressV31wE5L, intlAHBcV7, intzzBKMQg, {from: accounts[4]});
		const bytes32gKoih7M = await VatUdwHLzJ.flux.call(byteFIGyKTj, addressmeBznqw, addressAubWDxu, uintuT9nIps, {from: accounts[4]});
		await VatUdwHLzJ.cage.call({from: accounts[4]});
		await VatUdwHLzJ.note.call({from: accounts[3]});

		await expect(VatUdwHLzJ.heal.call(uintFCF5y3y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatduIMDue = await Vat.new({from: accounts[0]});
		const addressZC1fkj6 = accounts[2]
		const intuHkR9B8 = BigInt("287")
		const intSFO8c5O = BigInt("-710")
		const addressNsA8Oub = accounts[5]
		const addressm6ols8N = accounts[0]
		const addressxHpw7k = accounts[4]
		const bytexzYdHx = "0x171c061f030f151d190b050b1a1d13020704070c1e181b1d18181a081e14171b"
		const addressyE5zZ9 = accounts[4]
		const addressr1pGSlm = await VatduIMDue.hope.call(addressZC1fkj6, {from: accounts[1]});
		const bytes32hLneoIH = await VatduIMDue.frob.call(bytexzYdHx, addressxHpw7k, addressm6ols8N, addressNsA8Oub, intSFO8c5O, intuHkR9B8, {from: accounts[0]});
		const addressaq8KOoB = await VatduIMDue.deny.call(addressyE5zZ9, {from: accounts[2]});

		await expect(VatduIMDue.frob.call(bytexzYdHx, addressxHpw7k, addressm6ols8N, addressNsA8Oub, intSFO8c5O, intuHkR9B8, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatAvZaCWs = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const addresskB53NoO = accounts[2]
		const addressbMBiiK = "0x0000000000000000000000000000000000000001"
		const intB2PZKuO = BigInt("-878")
		const addressHMg1SBH = accounts[4]
		const byteEHYxOdO = "0x09100f0b1713201e0d111b0f021311020c111f14071f1a1b18141e030a1f140e"
		const addressZj1tmf = accounts[2]
		const intTJthdy2 = BigInt("-1604")
		const intnqvyTKA = BigInt("1721")
		const addressq41AWk4 = accounts[2]
		const addressRoLfydu = accounts[2]
		const addressti5kOA = accounts[3]
		const byteRJA1Yi = "0x13130306050d0f0f040f0a1d191d06040104150b1f0c1e201a180703190d0718"
		const uintr5TNzK = BigInt("1668")
		const addressDuy5Wn3 = accounts[0]
		const addresslSLcCJ7 = accounts[2]
		const addressQTEJNZK = await VatAvZaCWs.nope.call(addresskB53NoO, {from: accounts[0]});
		const addressanoSjY = await VatAvZaCWs.rely.call(addressbMBiiK, {from: accounts[0]});
		const bytes32EHOMIAz = await VatAvZaCWs.slip.call(byteEHYxOdO, addressHMg1SBH, intB2PZKuO, {from: accounts[4]});
		const addressKGzVMcp = await VatAvZaCWs.hope.call(addressZj1tmf, {from: accounts[0]});
		const bytes32qliV7TW = await VatAvZaCWs.grab.call(byteRJA1Yi, addressti5kOA, addressRoLfydu, addressq41AWk4, intnqvyTKA, intTJthdy2, {from: "0x0000000000000000000000000000000000000001"});
		const addresshTwNoG = await VatAvZaCWs.move.call(addresslSLcCJ7, addressDuy5Wn3, uintr5TNzK, {from: accounts[4]});
	});

	it('test for Vat', async () => {
		const VatduIMDue = await Vat.new({from: accounts[0]});
		const intprX0Tch = BigInt("-23")
		const intkotzzLo = BigInt("-1944")
		const addressgy7Xg1o = accounts[4]
		const addressg69opk6 = accounts[4]
		const bytekzQqN3o = "0x030400071b101f02150c12042008200c0c1108091e0c19150e1c0919031b021a"
		const bytes32JZN3bP = await VatduIMDue.fork.call(bytekzQqN3o, addressg69opk6, addressgy7Xg1o, intkotzzLo, intprX0Tch, {from: accounts[3]});

		await expect(VatduIMDue.fork.call(bytekzQqN3o, addressg69opk6, addressgy7Xg1o, intkotzzLo, intprX0Tch, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatduIMDue = await Vat.new({from: accounts[0]});
		const uintxQdtkXU = BigInt("158")
		const byteMalRlbG = "0x0c19110c1b141a1f051f1c2013130116050e130a050d17031c0f011e06140c10"
		const intxM8DMRl = BigInt("-23")
		const intkSnXpha = BigInt("-1944")
		const addressS2S42T1 = accounts[3]
		const addressKYHRFcK = accounts[4]
		const byte9Eq8Po = "0x030400071b101f02150c12042008200c0c1108091e0c19150e1c0919031b021a"
		const addresshRDr0t = accounts[4]
		const bytes32Pp6cVnH = await VatduIMDue.file.call(byteMalRlbG, uintxQdtkXU, {from: accounts[4]});
		const bytes32JZN3bP = await VatduIMDue.fork.call(byte9Eq8Po, addressKYHRFcK, addressS2S42T1, intkSnXpha, intxM8DMRl, {from: accounts[3]});
		const addressaq8KOoB = await VatduIMDue.deny.call(addresshRDr0t, {from: accounts[2]});

		await expect(VatduIMDue.file.call(byteMalRlbG, uintxQdtkXU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatGZzCJGw = await Vat.new({from: accounts[4]});
		const uintX64UdmN = BigInt("1537")
		const addressqlP3fEI = accounts[2]
		const addresszEY23kK = "0x0000000000000000000000000000000000000001"
		const addresskhKga04 = accounts[0]
		const addressGAMayUv = accounts[5]
		const addresssQOTVK4 = accounts[3]
		const addressHnQydSc = accounts[5]
		const addressdBFd9ka = await VatGZzCJGw.move.call(addresszEY23kK, addressqlP3fEI, uintX64UdmN, {from: accounts[0]});
		await VatGZzCJGw.note.call({from: accounts[3]});
		const addressepbqgv = await VatGZzCJGw.deny.call(addresskhKga04, {from: accounts[3]});
		const addressm4Fuhkc = await VatGZzCJGw.deny.call(addressGAMayUv, {from: accounts[2]});
		const addressPvE1HvT = await VatGZzCJGw.deny.call(addresssQOTVK4, {from: accounts[4]});
		await VatGZzCJGw.cage.call({from: accounts[1]});
		const addressoAaOKWv = await VatGZzCJGw.rely.call(addressHnQydSc, {from: accounts[2]});

		await expect(VatGZzCJGw.move.call(addresszEY23kK, addressqlP3fEI, uintX64UdmN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatAAbvvxT = await Vat.new({from: accounts[5]});
		const addressZ0eCE6B = accounts[3]
		const intEyqX9mE = BigInt("-1789")
		const address4PBiMM = accounts[4]
		const bytetFQuFUS = "0x06030f16071600160c10071c0b0d1f1802061106050f09151b0314201a111c0c"
		const intZbOZ7Hj = BigInt("1840")
		const addresskc2ipiV = accounts[4]
		const byteHL4oJ38 = "0x0a051917160d1d0f2001070d0a1e1a17160e080a1c0d1e14141f07141a1e1702"
		const intliuBlfs = BigInt("-698")
		const addressNSxJVsY = accounts[1]
		const byteiRwVT6 = "0x1d1d0b1c1918010a0805191906030c1a090d1e0f001711011d0f031f02061b1b"
		const uintruPCetr = BigInt("485")
		const byteIhHl9if = "0x12031b0b00010b0d1c08101f0f090d1d090d0411071f151e071f08060a120e17"
		const bytesJdwdNV = "0x0a1b1c0d0c040c05180f00151c1106080b191f0d151d0f0607110e1509080a15"
		const addressDw0ETbe = await VatAAbvvxT.nope.call(addressZ0eCE6B, {from: accounts[2]});
		const bytes32nY4AxHd = await VatAAbvvxT.slip.call(bytetFQuFUS, address4PBiMM, intEyqX9mE, {from: accounts[2]});
		const bytes32hBNlxr1 = await VatAAbvvxT.slip.call(byteHL4oJ38, addresskc2ipiV, intZbOZ7Hj, {from: accounts[2]});
		const bytes32wp2PDjI = await VatAAbvvxT.slip.call(byteiRwVT6, addressNSxJVsY, intliuBlfs, {from: accounts[0]});
		const uint8X4OCx = await VatAAbvvxT.heal.call(uintruPCetr, {from: accounts[2]});
		const bytes32JmKGfY8 = await VatAAbvvxT.init.call(byteIhHl9if, {from: accounts[3]});
		const bytes32zAGRQES = await VatAAbvvxT.init.call(bytesJdwdNV, {from: accounts[0]});

		await expect(VatAAbvvxT.slip.call(bytetFQuFUS, address4PBiMM, intEyqX9mE, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatBBpU8W4 = await Vat.new({from: accounts[2]});
		const byteP1BUp8v = "0x050c130d130f130502091007130e1c161201120614141e04070d0517171f121d"
		const intWb8LoPL = BigInt("-286")
		const addresssGpFV6X = accounts[0]
		const bytehVXldBA = "0x1811080b16060f131e1b081f10060b061d1a061b05020f130b181b0d140d0700"
		const intaEeFiHi = BigInt("-424")
		const intyuLF0v7 = BigInt("1100")
		const addressw0xwlAo = accounts[4]
		const addressjZJvVnn = accounts[4]
		const bytecKFXKhn = "0x15131b1e0c1315061d0c011a02040214131202080c17030b101d01021c0b1510"
		const bytes32MXYNEmD = await VatBBpU8W4.init.call(byteP1BUp8v, {from: accounts[2]});
		const bytes32Tl5nGn = await VatBBpU8W4.slip.call(bytehVXldBA, addresssGpFV6X, intWb8LoPL, {from: accounts[2]});
		const bytes32K41hDuR = await VatBBpU8W4.fork.call(bytecKFXKhn, addressjZJvVnn, addressw0xwlAo, intyuLF0v7, intaEeFiHi, {from: accounts[2]});

		await expect(VatBBpU8W4.slip.call(bytehVXldBA, addresssGpFV6X, intWb8LoPL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatW2C9CIA = await Vat.new({from: accounts[3]});
		const uintiYgV1h9 = BigInt("1988")
		const addressv6GgMxB = "0x0000000000000000000000000000000000000001"
		const address0th28B = accounts[1]
		const byteohLPWB = "0x1f01201a17140c0e111d141113051f1e011604190e0d111113101505181c0716"
		const uintoo8nZ9k = BigInt("535")
		const bytes32dxwofE0 = await VatW2C9CIA.flux.call(byteohLPWB, address0th28B, addressv6GgMxB, uintiYgV1h9, {from: accounts[1]});
		const uintCEoKypQ = await VatW2C9CIA.heal.call(uintoo8nZ9k, {from: accounts[1]});

		await expect(VatW2C9CIA.flux.call(byteohLPWB, address0th28B, addressv6GgMxB, uintiYgV1h9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatduIMDue = await Vat.new({from: accounts[0]});
		const uintU8b4nj1 = BigInt("1602")
		const addressyX9NGrs = accounts[3]
		const addressc0bTUDG = accounts[1]
		const uintDec7elI = BigInt("496")
		const bytebSlQFY9 = "0x0d001f1e011b1b03150519081b0f140d030f011d031b0908031a0216140c0811"
		const addressa83z8Ps = accounts[4]
		const addresshX3IqaY = await VatduIMDue.suck.call(addressc0bTUDG, addressyX9NGrs, uintU8b4nj1, {from: accounts[0]});
		const bytes32K31HFZM = await VatduIMDue.file.call(bytebSlQFY9, uintDec7elI, {from: accounts[2]});
		const addressaq8KOoB = await VatduIMDue.deny.call(addressa83z8Ps, {from: accounts[2]});

		await expect(VatduIMDue.file.call(bytebSlQFY9, uintDec7elI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatduIMDue = await Vat.new({from: accounts[0]});
		const intQFOSqPR = BigInt("1159")
		const addressbF0aTPG = accounts[1]
		const bytePqFRVRR = "0x051700180c1c12050e0e0d0c0f111f0815060f07011604031314120711101b14"
		const addressHQxG6DR = accounts[5]
		const bytes32eroba9Q = await VatduIMDue.fold.call(bytePqFRVRR, addressbF0aTPG, intQFOSqPR, {from: accounts[0]});
		const addressaq8KOoB = await VatduIMDue.deny.call(addressHQxG6DR, {from: accounts[2]});

		await expect(VatduIMDue.deny.call(addressHQxG6DR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatPY4p8k = await Vat.new({from: accounts[2]});
		const addressFJIHkCX = accounts[4]
		const bytekzD42cq = "0x19121f1f1c021d1713181d071b161b0c08111900121d1b0d180b181f19050e0a"
		const addressxXlHro7 = "0x0000000000000000000000000000000000000001"
		const addressoP9HHoO = await VatPY4p8k.deny.call(addressFJIHkCX, {from: accounts[2]});
		const bytes32l9cZ1Ig = await VatPY4p8k.init.call(bytekzD42cq, {from: accounts[1]});
		const addressChAtss = await VatPY4p8k.nope.call(addressxXlHro7, {from: accounts[5]});

		await expect(VatPY4p8k.init.call(bytekzD42cq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatduIMDue = await Vat.new({from: accounts[0]});
		const addressFBqs5rs = accounts[4]
		await VatduIMDue.cage.call({from: accounts[0]});
		const addressaq8KOoB = await VatduIMDue.deny.call(addressFBqs5rs, {from: accounts[2]});
		await VatduIMDue.auth.call({from: accounts[4]});

		await expect(VatduIMDue.cage.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWRpy3hz = await Vat.new({from: accounts[0]});
		const byteHSDYFy8 = "0x0c1802071308131d1a1e001f0d12100d09ffffffff10120c1f09201a1b1f1e0e190b07"
		const intlirenEV = BigInt("300")
		const addressyiD72b3 = accounts[2]
		const byte6DLpZg = "0x1b010d08151a0605010f1d15061c0f0d0a060f110b1f050d0b1f0f190c141710"
		const uinttQLSGk = BigInt("388")
		const byteUpqAyr = "0x06010d080c1a02060d1b11151d0e03100c0713060d130a071101041916100408"
		const uintPbFgLcT = BigInt("1325")
		const addressjixw4Wx = accounts[5]
		const addressOy8Z4F8 = "0x0000000000000000000000000000000000000001"
		const byteukBJYBz = "0x0f1211181515130f1413060b0c1b1b1e0e071905080e080d171f15160b0e1705"
		const intCkHUz1f = BigInt("-1618")
		const intHrCDyVa = BigInt("1518")
		const addressU45VTqm = accounts[2]
		const addressTgpvGi = accounts[4]
		const byte04qMls = "0x060c1e0c0d0417041c021b0c13080709010f1819171a031d12010d1d06150f06"
		const bytes32zMhogAC = await VatWRpy3hz.init.call(byteHSDYFy8, {from: accounts[3]});
		const bytes32Qaiq8iB = await VatWRpy3hz.slip.call(byte6DLpZg, addressyiD72b3, intlirenEV, {from: accounts[5]});
		const bytes32Jts5LTM = await VatWRpy3hz.file.call(byteUpqAyr, uinttQLSGk, {from: accounts[4]});
		const bytes32aqzYod0 = await VatWRpy3hz.flux.call(byteukBJYBz, addressOy8Z4F8, addressjixw4Wx, uintPbFgLcT, {from: accounts[5]});
		const bytes32fOmEbw1 = await VatWRpy3hz.fork.call(byte04qMls, addressTgpvGi, addressU45VTqm, intHrCDyVa, intCkHUz1f, {from: accounts[2]});

		await expect(VatWRpy3hz.init.call(byteHSDYFy8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatWRpy3hz = await Vat.new({from: accounts[0]});
		const byteVNg8SIp = "0x0c1802071308131d1a1efffffffe1f0d12100d090010120c1f09201a1b1f1e0e190b07"
		const intf7wd8kH = BigInt("-1618")
		const intoY0iO07 = BigInt("1518")
		const addressBH6tCE5 = accounts[2]
		const addresszi4N5E = accounts[4]
		const bytedrJy63Q = "0x060c1e0c0d0417041c021b0c13080709010f1819171a031d12010d1d06150f06"
		const bytes32zMhogAC = await VatWRpy3hz.init.call(byteVNg8SIp, {from: accounts[3]});
		const bytes32fOmEbw1 = await VatWRpy3hz.fork.call(bytedrJy63Q, addresszi4N5E, addressBH6tCE5, intoY0iO07, intf7wd8kH, {from: accounts[2]});

		await expect(VatWRpy3hz.init.call(byteVNg8SIp, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatP4Awy5O = await Vat.new({from: accounts[3]});
		const uintAWR4wAz = BigInt("852")
		const bytec1Kf6hS = "0x0f060c07201509020c0a01020e07041c1004151d06150d1f0302161618200f1d"
		const byteozCXoPr = "0x090e01050512040e11021e1f09121d1c18051e0d10060a161e0f080216120200"
		const intWTFFtr3 = BigInt("-1344")
		const intk5I9zrF = BigInt("116")
		const addressj3uzYLy = accounts[2]
		const addressPO8NmA1 = accounts[2]
		const addressPXpdEwv = accounts[3]
		const byteDOWOVx = "0x1e0f08160a09140a0e130005020e1b0c18021a1f040b1b1e14170f1f030a180d"
		const addressITuRIL = accounts[2]
		const intvDj8Vc = BigInt("-1178")
		const intp7CuY8d = BigInt("1162")
		const addresshCY0YmU = accounts[2]
		const addressJBLWMUp = accounts[0]
		const addressysh3FQQ = accounts[4]
		const byteNW49dU = "0x1a0a200111111a1e0416011d14171c150f200c121c0f10101e1a0d0a141d121e"
		const intouPDw2t = BigInt("451")
		const intLT0hWe4 = BigInt("-332")
		const addressFFfjJZF = accounts[0]
		const addressgtEqaat = accounts[2]
		const addressb2qVHSG = accounts[1]
		const byteaq40n0B = "0x1405110a0b1d111114141c0c010c111700190b1e1f0d0d0a051a19110e03190c"
		const addressC0WzFY4 = accounts[2]
		const addressLj6rMs2 = accounts[1]
		const bytes32Skh2HwV = await VatP4Awy5O.file.call(byteozCXoPr, bytec1Kf6hS, uintAWR4wAz, {from: accounts[3]});
		const bytes32iowMpSg = await VatP4Awy5O.grab.call(byteDOWOVx, addressPXpdEwv, addressPO8NmA1, addressj3uzYLy, intk5I9zrF, intWTFFtr3, {from: accounts[3]});
		const addressGKcdP5t = await VatP4Awy5O.deny.call(addressITuRIL, {from: accounts[4]});
		const bytes329fXdpB = await VatP4Awy5O.frob.call(byteNW49dU, addressysh3FQQ, addressJBLWMUp, addresshCY0YmU, intp7CuY8d, intvDj8Vc, {from: "0x0000000000000000000000000000000000000001"});
		const bytes32Y0bQpu = await VatP4Awy5O.grab.call(byteaq40n0B, addressb2qVHSG, addressgtEqaat, addressFFfjJZF, intLT0hWe4, intouPDw2t, {from: accounts[1]});
		const addressEdZ87JY = await VatP4Awy5O.nope.call(addressC0WzFY4, {from: accounts[2]});
		const addresskhI6q9Q = await VatP4Awy5O.rely.call(addressLj6rMs2, {from: accounts[3]});

		await expect(VatP4Awy5O.file.call(byteozCXoPr, bytec1Kf6hS, uintAWR4wAz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})