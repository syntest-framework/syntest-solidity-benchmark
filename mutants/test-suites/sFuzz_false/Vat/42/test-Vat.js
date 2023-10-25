const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatszlOUi = await Vat.new({from: accounts[4]});
		const intqyZ3BrS = BigInt("825")
		const intlqNnRuN = BigInt("-1176")
		const address8FPWZy = accounts[2]
		const addressPwRyJb = accounts[4]
		const bytebPwEqzb = "0x1e140d0615121d09080703101b05080d130c1e1c0a1c0e02100505200c171520"
//		await VatszlOUi.note.call({from: accounts[1]});
//		await VatszlOUi.cage.call({from: accounts[0]});
//		const bytes32oAjPFi8 = await VatszlOUi.fork.call(bytebPwEqzb, addressPwRyJb, address8FPWZy, intlqNnRuN, intqyZ3BrS, {from: accounts[0]});

		await expect(VatszlOUi.note.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatSDfzvaL = await Vat.new({from: accounts[5]});
		const addressDAZk44U = accounts[2]
		const intT9eVLG = BigInt("916")
		const intD89AIgt = BigInt("-223")
		const addresswXEG4LQ = accounts[0]
		const addressRlzDgGU = accounts[2]
		const byteMRfq0Xq = "0x091b1707122007181b1d091c1b081d1a0d160e0a031f020f1501070b1d01130b"
		const intobCnD7 = BigInt("-1561")
		const addressS8lEH47 = accounts[0]
		const byteqXcnQhj = "0x15031819160b1d1a130318160814121b1e14081d1d0d12011a1c090b1a081b16"
		const addressDKFGp4v = accounts[5]
		const addresslNwTa5L = await VatSDfzvaL.hope.call(addressDAZk44U, {from: accounts[2]});
//		const bytes32nYQSuWJ = await VatSDfzvaL.fork.call(byteMRfq0Xq, addressRlzDgGU, addresswXEG4LQ, intD89AIgt, intT9eVLG, {from: accounts[4]});
//		const bytes32VZD6lk4 = await VatSDfzvaL.slip.call(byteqXcnQhj, addressS8lEH47, intobCnD7, {from: accounts[3]});
//		await VatSDfzvaL.note.call({from: accounts[5]});
//		const addresscNRpZE = await VatSDfzvaL.nope.call(addressDKFGp4v, {from: accounts[3]});

		await expect(VatSDfzvaL.fork.call(byteMRfq0Xq, addressRlzDgGU, addresswXEG4LQ, intD89AIgt, intT9eVLG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const byteMyNVLeY = "0x071c021208110b120d0d0e0c020b0d1b070b0d111915200c1d1a1d0800111c1b"
		const intPA2ja9v = BigInt("1359")
		const intzfaTRrh = BigInt("-191")
		const addressB9UmTjN = accounts[1]
		const addresszzgjicT = accounts[0]
		const bytedq9eFb0 = "0x011e0e0e021a13061118111e1a0d1210010d001314021d020e0f010e15141c11"
		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteMyNVLeY, {from: accounts[0]});
//		const bytes32n87mIgh = await VatzlVoSkv.fork.call(bytedq9eFb0, addresszzgjicT, addressB9UmTjN, intzfaTRrh, intPA2ja9v, {from: accounts[2]});

		await expect(VatzlVoSkv.fork.call(bytedq9eFb0, addresszzgjicT, addressB9UmTjN, intzfaTRrh, intPA2ja9v, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatqx4SZV0 = await Vat.new({from: accounts[3]});
		const addressoGwVfat = accounts[1]
		const uintkgiaxhf = BigInt("225")
		const addressbPNpNEN = accounts[0]
		const addressO33NFzp = accounts[3]
		const uintRKVh1FC = BigInt("1962")
		const byte2sbBFe = "0x140902171d06070c1220170b0f0400171514150a071b05150e160b1301110820"
		const addresst0rykvq = await Vatqx4SZV0.hope.call(addressoGwVfat, {from: accounts[3]});
//		const addressq8gv0uy = await Vatqx4SZV0.move.call(addressO33NFzp, addressbPNpNEN, uintkgiaxhf, {from: accounts[0]});
//		const bytes32FFMcMS = await Vatqx4SZV0.file.call(byte2sbBFe, uintRKVh1FC, {from: accounts[3]});

		await expect(Vatqx4SZV0.move.call(addressO33NFzp, addressbPNpNEN, uintkgiaxhf, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatQRxEfUF = await Vat.new({from: accounts[1]});
		const uintLJbWRRz = BigInt("1595")
		const byteC8gXpN = "0x0c02081e0111041119080f19131c1401000b011c1c011e0e0e0f0e070905011b"
		const byteNBxK9lQ = "0x18181a140c140f0e0414060d0312051415170a1e1909070a1f1a070415042005"
		const addressB82s4Ro = accounts[2]
		const addressUVP3IMa = accounts[5]
//		const bytes32Os7zvpa = await VatQRxEfUF.file.call(byteNBxK9lQ, byteC8gXpN, uintLJbWRRz, {from: accounts[3]});
//		const addresswq2Y2wr = await VatQRxEfUF.hope.call(addressB82s4Ro, {from: "0x0000000000000000000000000000000000000001"});
//		const addresszLXrCB = await VatQRxEfUF.deny.call(addressUVP3IMa, {from: accounts[5]});

		await expect(VatQRxEfUF.file.call(byteNBxK9lQ, byteC8gXpN, uintLJbWRRz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const byteiMTJpZe = "0x071c021208110b120d0d0e0c020b0d1b070b0d111915200c1d1a1d0800111c1b"
		const uintKZdZzXO = BigInt("1113")
		const byteYtLdCO3 = "0x1d1b1a02091c1e050318060b0a160207090501011f05150916191f0219010f0c"
		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteiMTJpZe, {from: accounts[0]});
//		const bytes32jyUj6o = await VatzlVoSkv.file.call(byteYtLdCO3, uintKZdZzXO, {from: accounts[4]});

		await expect(VatzlVoSkv.file.call(byteYtLdCO3, uintKZdZzXO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const bytei8kBcHc = "0x051205041f12181f1f17121404021319090d0e191802001316060b0014190302"
		const uintIoJRjmQ = BigInt("340")
		const addressCde0Vz3 = accounts[3]
		const bytes32pHxt0MB = await VatzlVoSkv.init.call(bytei8kBcHc, {from: accounts[0]});
//		const uintLeLAAeZ = await VatzlVoSkv.heal.call(uintIoJRjmQ, {from: accounts[1]});
//		const addressosz2O7I = await VatzlVoSkv.nope.call(addressCde0Vz3, {from: accounts[5]});

		await expect(VatzlVoSkv.heal.call(uintIoJRjmQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const intUNO9xsy = BigInt("-1637")
		const intO19bQP6 = BigInt("1061")
		const addressUlr5Q3y = accounts[3]
		const addressnXt9qsT = accounts[4]
		const addressmluS6Xw = accounts[1]
		const bytej2pczp = "0x1c05091d050a00071a05140a1d071807190b0e200f0a1a1209021c000107141b"
		const byteA8yQmlC = "0x1c1c0c060c051a19071206000a0c061a0306151e121c1b1e0d0b08090a141c1c"
		const uintxDFfeeU = BigInt("1883")
		const addressZOfrtN8 = accounts[4]
		const addresshwPcF8 = accounts[2]
		const byteSK6zrq = "0x1d1a121717021814130a160c0316130a041b0f1213161e13040c0a0911180a10"
//		const bytes32vePNWjJ = await VatzlVoSkv.frob.call(bytej2pczp, addressmluS6Xw, addressnXt9qsT, addressUlr5Q3y, intO19bQP6, intUNO9xsy, {from: accounts[4]});
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteA8yQmlC, {from: accounts[0]});
//		const bytes32W3uuWx6 = await VatzlVoSkv.flux.call(byteSK6zrq, addresshwPcF8, addressZOfrtN8, uintxDFfeeU, {from: accounts[4]});

		await expect(VatzlVoSkv.frob.call(bytej2pczp, addressmluS6Xw, addressnXt9qsT, addressUlr5Q3y, intO19bQP6, intUNO9xsy, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const intajhbqF = BigInt("1152")
		const addressoY3x7Z4 = "0x0000000000000000000000000000000000000001"
		const byteDqsflI0 = "0x050d1e120c1e0e0c1f14051c010d051c0a0b010a140c1e1e1e13031719111112"
		const byteQvQHXPb = "0x071c021208110b120d0d0e0c020b0d1b050b0d111915200c1d1a1d0800111c1b"
		const bytes32A2HKNCK = await VatzlVoSkv.fold.call(byteDqsflI0, addressoY3x7Z4, intajhbqF, {from: accounts[0]});
		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteQvQHXPb, {from: accounts[0]});
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const uintaHDosjw = BigInt("14")
		const addressjqUJlMK = accounts[4]
		const addressl6i8hQ6 = accounts[4]
		const byteftacBo0 = "0x0b0f1f0303090b0118200e1310080b03080702080f0f1208061e1e0913131a06"
		const bytepz8k3PB = "0x1a060803121e070f0301201e02191a08061220151f061105071c200c1b071315"
		const uintiVWunHU = BigInt("1465")
//		const bytes32h0Bhk9 = await VatzlVoSkv.flux.call(byteftacBo0, addressl6i8hQ6, addressjqUJlMK, uintaHDosjw, {from: accounts[3]});
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(bytepz8k3PB, {from: accounts[0]});
//		const uintcsa3Nf = await VatzlVoSkv.heal.call(uintiVWunHU, {from: accounts[2]});

		await expect(VatzlVoSkv.flux.call(byteftacBo0, addressl6i8hQ6, addressjqUJlMK, uintaHDosjw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const bytejAS2VxG = "0x071c021208110b120d0d0e0c020b0d1b070b0d111915200c1d1a1d0800111c1b"
		const intEaAAIp = BigInt("-111")
		const intArIym7e = BigInt("-1034")
		const addressrbxPFHm = accounts[0]
		const addresslSrYbCT = accounts[1]
		const addressDvUUps2 = accounts[2]
		const byteh2PsbKd = "0x1e16091b0b09120d101303161d0a1c010e0f1a14131a131f1c17021b03051413"
		const bytes32pHxt0MB = await VatzlVoSkv.init.call(bytejAS2VxG, {from: accounts[0]});
//		const bytes32gNU4l21 = await VatzlVoSkv.grab.call(byteh2PsbKd, addressDvUUps2, addresslSrYbCT, addressrbxPFHm, intArIym7e, intEaAAIp, {from: accounts[0]});
//		await VatzlVoSkv.cage.call({from: accounts[3]});

		await expect(VatzlVoSkv.grab.call(byteh2PsbKd, addressDvUUps2, addresslSrYbCT, addressrbxPFHm, intArIym7e, intEaAAIp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const addressznL2NlV = accounts[1]
		const intaYoM27d = BigInt("218")
		const intQZZ9ap4 = BigInt("57")
		const addressonOiHt9 = accounts[1]
		const addressYZqHNWK = "0x0000000000000000000000000000000000000001"
		const byteAzuN59i = "0x181803120705161e0d0f090a001608180f10100f031f081816081f061c021808"
		const byteJ6X6x0D = "0x071c021208110b120d0d0e0c020b0d1b070b0d111915200c1d1a1d0800111c1b"
		const addressW7uX60T = await VatzlVoSkv.nope.call(addressznL2NlV, {from: accounts[1]});
//		const bytes32sgvLIOA = await VatzlVoSkv.fork.call(byteAzuN59i, addressYZqHNWK, addressonOiHt9, intQZZ9ap4, intaYoM27d, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteJ6X6x0D, {from: accounts[0]});

		await expect(VatzlVoSkv.fork.call(byteAzuN59i, addressYZqHNWK, addressonOiHt9, intQZZ9ap4, intaYoM27d, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const byteTo1nyRV = "0x0e131f061202070305001d1812170e10061911100a0c0512011520060b041002"
		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteTo1nyRV, {from: accounts[0]});
//		await VatzlVoSkv.cage.call({from: accounts[0]});

		await expect(VatzlVoSkv.cage.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatMpPnRKG = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const uintW2dwy5X = BigInt("1316")
		const bytencF6D23 = "0x0d0f0b0415041006111a140a160e0403000a01131e0e0a15151d0700201c161c"
		const intOXQgG2z = BigInt("-144")
		const addressyDIuBpP = accounts[2]
		const bytemb6yFI = "0x041e0b040d1d050c0c0d1f03060b1b06110a0c030a190c0d0905010d0e131a12"
		const bytes32CEMSnEI = await VatMpPnRKG.file.call(bytencF6D23, uintW2dwy5X, {from: accounts[3]});
		await VatMpPnRKG.auth.call({from: "0x0000000000000000000000000000000000000001"});
		const bytes32mA2a9sU = await VatMpPnRKG.slip.call(bytemb6yFI, addressyDIuBpP, intOXQgG2z, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const byteR7YARtM = "0x071cffffffff1208110b120d0d0e0c020b0d1b070b0d111915200c1d1a1d0800111c1b"
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteR7YARtM, {from: accounts[0]});

		await expect(VatzlVoSkv.init.call(byteR7YARtM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const addressclPoVv6 = accounts[4]
		const byteLhckOSE = "0x071c021208110b120d0d0e0c020b0d1b070b0d111915200c1d1a1d0800111c1b"
		const addressDUBStt6 = await VatzlVoSkv.deny.call(addressclPoVv6, {from: accounts[0]});
		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteLhckOSE, {from: accounts[0]});
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const uintjYIcqU = BigInt("1041")
		const addressoYaYTuD = accounts[1]
		const address5fNmJp = accounts[1]
		const bytexiIvgXJ = "0x071c021208110b120d0d0e0d020b0d1b070b0d111915200c1d1a1d0800111c1b"
		const intq9cS4xl = BigInt("-1567")
		const addressa9BW6Zl = accounts[4]
		const byteOEFClPh = "0x1d19020709180109070f101e1c0f051f1b120e121610020c160c1a0f1809071c"
		const addressQuNNWgp = await VatzlVoSkv.suck.call(address5fNmJp, addressoYaYTuD, uintjYIcqU, {from: accounts[0]});
		const bytes32pHxt0MB = await VatzlVoSkv.init.call(bytexiIvgXJ, {from: accounts[0]});
//		const bytes32VJywW4 = await VatzlVoSkv.fold.call(byteOEFClPh, addressa9BW6Zl, intq9cS4xl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatzlVoSkv.fold.call(byteOEFClPh, addressa9BW6Zl, intq9cS4xl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const byteEV4jFoW = "0x071cfffffffc1208110b120d0d0e0c020b0d1b070b0d111915200c1d1a1d0800111c1b"
		const addressK2yCBrP = accounts[1]
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteEV4jFoW, {from: accounts[0]});
//		const addressAN8qRzr = await VatzlVoSkv.nope.call(addressK2yCBrP, {from: accounts[2]});

		await expect(VatzlVoSkv.init.call(byteEV4jFoW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const addressgbQehL = accounts[2]
		const uintiwTPnKi = BigInt("1954")
		const addressJtSO8oL = accounts[4]
		const addressX3i64xz = accounts[1]
		const byteXdFa0eR = "0x140a1d20100d1c191f0d041d190e1603050e031c0f160e0c1502171505150104"
		const byteFlxlPb2 = "0x071c021208110b120d0d0e0c020b0d1b070b0d111915200c1d1a1d0800111c1b"
		const addressJnNMnc = await VatzlVoSkv.rely.call(addressgbQehL, {from: accounts[0]});
//		const bytes32iZMD5nj = await VatzlVoSkv.flux.call(byteXdFa0eR, addressX3i64xz, addressJtSO8oL, uintiwTPnKi, {from: accounts[4]});
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteFlxlPb2, {from: accounts[0]});

		await expect(VatzlVoSkv.flux.call(byteXdFa0eR, addressX3i64xz, addressJtSO8oL, uintiwTPnKi, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const bytegkdubN1 = "0x071c021208110b120d0d0e0c020b0d1b070b0d111915200c1d1a1d08fffffffc111c1b"
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(bytegkdubN1, {from: accounts[0]});

		await expect(VatzlVoSkv.init.call(bytegkdubN1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const byteOqCxic1 = "0x071c021208110b120d0d0e0c020b0d1c070b0d111915200c1d1a1d0800111c1b"
		const uints9Gfx8P = BigInt("879")
		const bytemzWYhih = "0x131f0509161204030a0e0c0f1c0b0d190d151e12190300171e04070a121b0b05"
		const byteO5cKxEe = "0x151308181010090f1512201a200210051d06171e03090302120709091c190a0c"
		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteOqCxic1, {from: accounts[0]});
//		const bytes32JfmEMfy = await VatzlVoSkv.file.call(byteO5cKxEe, bytemzWYhih, uints9Gfx8P, {from: accounts[0]});

		await expect(VatzlVoSkv.file.call(byteO5cKxEe, bytemzWYhih, uints9Gfx8P, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const byteia94uhY = "0x071c021208110b120d0d0e0cffffffff0b0d1b070b0d111915200c1c1a1d0800111c1b"
		const intfyc8Kbn = BigInt("-316")
		const intr3j16BQ = BigInt("556")
		const address6CjEZj = accounts[1]
		const addresshW6xUKD = accounts[4]
		const addressHuiITq3 = accounts[5]
		const bytevJPlqG = "0x06070218001001080b1d0208121f131c0b04171f160f030e0104101e0c0b0d02"
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteia94uhY, {from: accounts[0]});
//		const bytes32PlSe8PG = await VatzlVoSkv.grab.call(bytevJPlqG, addressHuiITq3, addresshW6xUKD, address6CjEZj, intr3j16BQ, intfyc8Kbn, {from: accounts[2]});

		await expect(VatzlVoSkv.init.call(byteia94uhY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const bytesYAPZAg = "0x071c021208110f120d0d0e0c020b0d1b070b0d111915200c1c1a1d0800111c1b"
		const intVlp6Sp1 = BigInt("-501")
		const addressqFm3ljh = "0x0000000000000000000000000000000000000001"
		const byter4xKok3 = "0x040b01141e1506131a0c150b01040011090812071b0f081a06091714121b011d"
		const bytes32pHxt0MB = await VatzlVoSkv.init.call(bytesYAPZAg, {from: accounts[0]});
//		const bytes32N8AEMfd = await VatzlVoSkv.slip.call(byter4xKok3, addressqFm3ljh, intVlp6Sp1, {from: accounts[0]});

		await expect(VatzlVoSkv.slip.call(byter4xKok3, addressqFm3ljh, intVlp6Sp1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const bytebyxztl = "0x151610110b11030d0e0712182014151f0e06190818201506180e15170b081f14"
		const intoD3NjA = BigInt("-463")
		const inthQ5j81f = BigInt("-1543")
		const addressT2YVPP = accounts[4]
		const addressGDT3DHi = accounts[4]
		const byteLCMhhMT = "0x1102070d1012140f080e161f1c18051f10081f13150f1803140d1a160f091708"
		const bytes32pHxt0MB = await VatzlVoSkv.init.call(bytebyxztl, {from: accounts[0]});
		const bytes32dO6HziQ = await VatzlVoSkv.fork.call(byteLCMhhMT, addressGDT3DHi, addressT2YVPP, inthQ5j81f, intoD3NjA, {from: accounts[4]});
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const byteHN8YiMN = "0x071c021208110b120d0d0e0cffffffff0b0d1b070b0d111915200c1d1a1d0800111c1b"
		const addresszjIhohC = accounts[3]
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteHN8YiMN, {from: accounts[0]});
//		const addressi6XK3NE = await VatzlVoSkv.hope.call(addresszjIhohC, {from: accounts[0]});

		await expect(VatzlVoSkv.init.call(byteHN8YiMN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const byteK8lJcL = "0x071c021208110b120d0d0e0c020b0d1b070b0d111915200c1c1a1d08fffffffb111c1b"
		const uint8Pzu0a = BigInt("880")
		const addressPO3hEgF = accounts[2]
		const addressxMkxGS1 = accounts[4]
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteK8lJcL, {from: accounts[0]});
//		const addresszartSPr = await VatzlVoSkv.move.call(addressxMkxGS1, addressPO3hEgF, uint8Pzu0a, {from: accounts[5]});

		await expect(VatzlVoSkv.init.call(byteK8lJcL, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const addressDL6rBp9 = accounts[2]
		const byteSJ2H7SG = "0x071c021208110b120d0d0e0cfffffffe0b0d1b070b0d111915200c1d1a1d0800111c1b"
		const intxeJhwYF = BigInt("1639")
		const addressfZ9DIQ6 = accounts[0]
		const byteog2wGN5 = "0x170d05051c190d160805141f060b010220151910001c20081f1b0c03120a0902"
		const addressRga4PaD = await VatzlVoSkv.hope.call(addressDL6rBp9, {from: accounts[1]});
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteSJ2H7SG, {from: accounts[0]});
//		const bytes32VWjFetH = await VatzlVoSkv.slip.call(byteog2wGN5, addressfZ9DIQ6, intxeJhwYF, {from: "0x0000000000000000000000000000000000000001"});

		await expect(VatzlVoSkv.init.call(byteSJ2H7SG, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const byteyYZKGs = "0x071c021208110b120d0d0e0c020b0d1b070b0d111915200c1c1a1d08fffffffe111c1b"
		const uintVnwyLR3 = BigInt("593")
		const addresszAsdmf = accounts[4]
		const addresskCYPGaD = accounts[3]
		const byteYYt4NaG = "0x1508161d1d1b04120f0f1a1a1215060917021d051f1901071f09120f18140f1c"
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteyYZKGs, {from: accounts[0]});
//		const addressjqctPie = await VatzlVoSkv.suck.call(addresskCYPGaD, addresszAsdmf, uintVnwyLR3, {from: accounts[2]});
//		const bytes32JNo8C29 = await VatzlVoSkv.init.call(byteYYt4NaG, {from: accounts[4]});

		await expect(VatzlVoSkv.init.call(byteyYZKGs, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const addressNV5Fegf = accounts[0]
		const byteqZOh3VR = "0x071c021208110b120d0d0e0c020b0d1b070b0d111915200c1c1a1d08ffffffff111c1b"
		const addressOONmPPp = await VatzlVoSkv.hope.call(addressNV5Fegf, {from: accounts[5]});
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteqZOh3VR, {from: accounts[0]});

		await expect(VatzlVoSkv.init.call(byteqZOh3VR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const bytexDCXvAE = "0x071c021208110b120d0d0e0c020b0d1b070b0d111915200c1d1a1d08ffffffff111c1b"
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(bytexDCXvAE, {from: accounts[0]});

		await expect(VatzlVoSkv.init.call(bytexDCXvAE, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const byteOVAkCTH = "0x071c021208110b120d0d0e0cfffffffd0b0d1b070b0d111915200c1c1a1d0800111c1b"
		const byteeF7vyV7 = "0x0c09091c07181e0e13150905070a0b090d130707161104081f1e1b0e180e0707"
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteOVAkCTH, {from: accounts[0]});
//		const bytes32r6eQpek = await VatzlVoSkv.init.call(byteeF7vyV7, {from: accounts[4]});

		await expect(VatzlVoSkv.init.call(byteOVAkCTH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const byteMSH7dsQ = "0x071c021208110b120d0d0e0c020b0d1b070b0d111915200c1c1a1d08fffffffc111c1b"
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteMSH7dsQ, {from: accounts[0]});

		await expect(VatzlVoSkv.init.call(byteMSH7dsQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzlVoSkv = await Vat.new({from: accounts[0]});
		const byteNvnz5xD = "0x071c021208110b120d0d0e0c020b0d1b070b0d111915200c1c1a1d08fffffffa111c1b"
		const uintyAAmlWH = BigInt("220")
		const addressCEC0Kd1 = accounts[4]
		const addresst9X7cBf = accounts[0]
//		const bytes32pHxt0MB = await VatzlVoSkv.init.call(byteNvnz5xD, {from: accounts[0]});
//		const addressZY8VCOL = await VatzlVoSkv.suck.call(addresst9X7cBf, addressCEC0Kd1, uintyAAmlWH, {from: accounts[4]});

		await expect(VatzlVoSkv.init.call(byteNvnz5xD, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})