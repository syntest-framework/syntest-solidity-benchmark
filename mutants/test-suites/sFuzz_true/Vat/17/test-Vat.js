const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VatdbKJeKk = await Vat.new({from: accounts[3]});
		const addresspgNkpXF = accounts[0]
		const uintljZElvY = BigInt("1971")
		const addressbhlT2hB = accounts[3]
		const addressC8fGGWv = "0x0000000000000000000000000000000000000001"
		const uintT0RNXn = BigInt("365")
		const addresssMoHpXz = accounts[3]
		const addressoGlNrst = accounts[3]
		const uintcCrWv8K = BigInt("55")
		const byteASLSDIw = "0x1713141b0b02191b0508100218010f1704130a0d0907060b1e0e1802030c130b"
		const byteKxICTRg = "0x201806150414041a07201a09021a022019190b020a131b0c0d1e190e031a0014"
		const addressvXddkVX = accounts[3]
//		const addressDMHsqBJ = await VatdbKJeKk.deny.call(addresspgNkpXF, {from: accounts[4]});
//		const addresseSYSfRt = await VatdbKJeKk.move.call(addressC8fGGWv, addressbhlT2hB, uintljZElvY, {from: accounts[1]});
//		const addresslaMIIYt = await VatdbKJeKk.move.call(addressoGlNrst, addresssMoHpXz, uintT0RNXn, {from: accounts[5]});
//		const bytes32rJI06O0 = await VatdbKJeKk.file.call(byteKxICTRg, byteASLSDIw, uintcCrWv8K, {from: accounts[2]});
//		const addressyJDHeay = await VatdbKJeKk.nope.call(addressvXddkVX, {from: accounts[5]});

		await expect(VatdbKJeKk.deny.call(addresspgNkpXF, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatdjkbEXy = await Vat.new({from: accounts[0]});
		const intrNdczrU = BigInt("1735")
		const inthbvsbEg = BigInt("-900")
		const addressWG14DOv = accounts[3]
		const addressw2xy4Ec = accounts[1]
		const addressoud0G6e = accounts[5]
		const byteX9x9Fgl = "0x18011a15121819051001001f110f180717061d0f0b0b141a17091716201e1f1f"
		const uintqf7vV49 = BigInt("487")
		const byteYE9CLYi = "0x1a030d181f1f110e1a0e1b0e091a0520181504001b01101b0e07051801090a17"
//		await VatdjkbEXy.note.call({from: accounts[4]});
//		await VatdjkbEXy.auth.call({from: accounts[0]});
//		const bytes32fFYv9pH = await VatdjkbEXy.frob.call(byteX9x9Fgl, addressoud0G6e, addressw2xy4Ec, addressWG14DOv, inthbvsbEg, intrNdczrU, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32Igxz3am = await VatdjkbEXy.file.call(byteYE9CLYi, uintqf7vV49, {from: accounts[4]});

		await expect(VatdjkbEXy.note.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatb9d79e = await Vat.new({from: accounts[1]});
		const uintDK0IaR3 = BigInt("1166")
		const uinteHT0XH1 = BigInt("1088")
		const bytef3o2cE = "0x081b1e0b0e1f1802051a141e0c0b14071909141a040708040d110f061f171810"
		const addressLNhclHS = "0x0000000000000000000000000000000000000001"
		const bytenuGYDIh = "0x0a1e0f010d0e1c021a121d06031908170d1003141d061a151903181602102002"
//		const uintVjnuqCh = await Vatb9d79e.heal.call(uintDK0IaR3, {from: "0x0000000000000000000000000000000000000001"});
//		const bytes32CmRT4e = await Vatb9d79e.file.call(bytef3o2cE, uinteHT0XH1, {from: accounts[0]});
//		await Vatb9d79e.cage.call({from: accounts[2]});
//		const addressfYdefSg = await Vatb9d79e.hope.call(addressLNhclHS, {from: accounts[5]});
//		const bytes32aiKXrx = await Vatb9d79e.init.call(bytenuGYDIh, {from: accounts[4]});

		await expect(Vatb9d79e.heal.call(uintDK0IaR3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrMe0Yop = await Vat.new({from: accounts[3]});
		const intXwVSk1G = BigInt("-1951")
		const intbKxweaJ = BigInt("-1557")
		const addressOYpekB = accounts[0]
		const addresssKHSXkn = accounts[4]
		const byteTTKN4M4 = "0x130d1d0f0a0419151d0b12121a09151002191f0a18040f150207190e16131301"
		const addressgMEG8JD = accounts[3]
		const uintkixABid = BigInt("911")
		const addresssOUgEXI = accounts[2]
		const addresscewxOuY = accounts[3]
		const byte3wynky = "0x03021d1f191119161711090406191d100c1e110a0a061e181b030d2014181c11"
//		const bytes32aZJfAuo = await VatrMe0Yop.fork.call(byteTTKN4M4, addresssKHSXkn, addressOYpekB, intbKxweaJ, intXwVSk1G, {from: accounts[5]});
//		await VatrMe0Yop.note.call({from: accounts[3]});
//		const addressqmDtwJQ = await VatrMe0Yop.nope.call(addressgMEG8JD, {from: accounts[0]});
//		await VatrMe0Yop.note.call({from: accounts[5]});
//		const bytes32hdsH0nD = await VatrMe0Yop.flux.call(byte3wynky, addresscewxOuY, addresssOUgEXI, uintkixABid, {from: accounts[1]});

		await expect(VatrMe0Yop.fork.call(byteTTKN4M4, addresssKHSXkn, addressOYpekB, intbKxweaJ, intXwVSk1G, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzrgQBfh = await Vat.new({from: accounts[4]});
		const addresshCl8jZI = "0x0000000000000000000000000000000000000001"
		const addressQUbsich = accounts[2]
		const addressZEmUkG1 = await VatzrgQBfh.nope.call(addresshCl8jZI, {from: accounts[1]});
		const addressedGwAf8 = await VatzrgQBfh.hope.call(addressQUbsich, {from: accounts[1]});
	});

	it('test for Vat', async () => {
		const VatwQYGH3V = await Vat.new({from: accounts[2]});
		const addressLxynpxM = "0x0000000000000000000000000000000000000001"
		const addresstAe5QUc = accounts[4]
		const addresskxbwC3s = await VatwQYGH3V.deny.call(addressLxynpxM, {from: accounts[2]});
//		const addressDe5Qbm = await VatwQYGH3V.deny.call(addresstAe5QUc, {from: accounts[5]});

		await expect(VatwQYGH3V.deny.call(addresstAe5QUc, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatb9d79e = await Vat.new({from: accounts[1]});
		const uintqv8oGxW = BigInt("1088")
		const byteNlP593r = "0x081b1e0b0e1f1802051a141e0c0b14071909141a040708040d110f061f171810"
		const addresskZlKO1R = "0x0000000000000000000000000000000000000001"
		const bytev53rBN = "0x0a1e0f010d0e1c021a121d06031908170d1003141d061a151903181602102002"
//		const bytes32CmRT4e = await Vatb9d79e.file.call(byteNlP593r, uintqv8oGxW, {from: accounts[0]});
//		await Vatb9d79e.cage.call({from: accounts[2]});
//		const addressfYdefSg = await Vatb9d79e.hope.call(addresskZlKO1R, {from: accounts[5]});
//		const bytes32aiKXrx = await Vatb9d79e.init.call(bytev53rBN, {from: accounts[4]});

		await expect(Vatb9d79e.file.call(byteNlP593r, uintqv8oGxW, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzrgQBfh = await Vat.new({from: accounts[4]});
		const addressnf1y8Uj = "0x0000000000000000000000000000000000000001"
		const uintoEXCtU = BigInt("1303")
		const byteYgzOb8w = "0x13160f050005090a0e19071d090807181c051e0d1a1d060c121d1911050b111d"
		const bytefjXwttL = "0x08080b0d15170f050113161015130f0914061a0c0217160b0908011101011605"
		const addressQIMh9ip = accounts[3]
		const addressZEmUkG1 = await VatzrgQBfh.nope.call(addressnf1y8Uj, {from: accounts[1]});
//		const bytes32SKvhRR7 = await VatzrgQBfh.file.call(bytefjXwttL, byteYgzOb8w, uintoEXCtU, {from: accounts[4]});
//		await VatzrgQBfh.auth.call({from: accounts[5]});
//		const addressedGwAf8 = await VatzrgQBfh.hope.call(addressQIMh9ip, {from: accounts[1]});

		await expect(VatzrgQBfh.file.call(bytefjXwttL, byteYgzOb8w, uintoEXCtU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatcb5TBUQ = await Vat.new({from: accounts[1]});
		const addressmCtqS33 = accounts[3]
		const uintb3j3SNh = BigInt("1016")
		const addressAKIgsxn = accounts[0]
		const addressFOrDVlA = accounts[0]
		const byteTj3rtue = "0x111d1718161f021b05181d101b05200c16090d02111a010c180c0f0919180213"
		const intBX2drfr = BigInt("1211")
		const intES96LcO = BigInt("-847")
		const addressrOvayCU = accounts[3]
		const addressluWuLSZ = accounts[4]
		const addressiUCte7I = "0x0000000000000000000000000000000000000001"
		const bytegpWoJm2 = "0x0e1a07140417011f161e15090c0d10180a11070515060e000d0908161f01110a"
		const addresszb3TX4r = await Vatcb5TBUQ.nope.call(addressmCtqS33, {from: accounts[3]});
//		const bytes32HhlJXRb = await Vatcb5TBUQ.flux.call(byteTj3rtue, addressFOrDVlA, addressAKIgsxn, uintb3j3SNh, {from: accounts[4]});
//		const bytes32Km4gTdI = await Vatcb5TBUQ.frob.call(bytegpWoJm2, addressiUCte7I, addressluWuLSZ, addressrOvayCU, intES96LcO, intBX2drfr, {from: accounts[3]});
//		await Vatcb5TBUQ.note.call({from: accounts[5]});

		await expect(Vatcb5TBUQ.flux.call(byteTj3rtue, addressFOrDVlA, addressAKIgsxn, uintb3j3SNh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatb9d79e = await Vat.new({from: accounts[1]});
		const uintn7RBda2 = BigInt("1351")
		const addressIPQbxvT = "0x0000000000000000000000000000000000000001"
		const addressEihN1Lm = accounts[0]
		const uintAFHdwfW = BigInt("1197")
		const uintWBbEpdO = BigInt("230")
		const addressaxLCHU1 = accounts[0]
		const addressdYebDa = accounts[4]
//		const addressStLtibf = await Vatb9d79e.move.call(addressEihN1Lm, addressIPQbxvT, uintn7RBda2, {from: accounts[4]});
//		const uintVjnuqCh = await Vatb9d79e.heal.call(uintAFHdwfW, {from: "0x0000000000000000000000000000000000000001"});
//		const addresskzw8tOz = await Vatb9d79e.suck.call(addressdYebDa, addressaxLCHU1, uintWBbEpdO, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Vatb9d79e.move.call(addressEihN1Lm, addressIPQbxvT, uintn7RBda2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzrgQBfh = await Vat.new({from: accounts[4]});
		const intuO9EM3J = BigInt("-1097")
		const intr1q72H = BigInt("261")
		const addresswvEm6qD = accounts[3]
		const addressVeA5uyq = accounts[2]
		const addressvmMvhdT = accounts[2]
		const byteBvTvnP0 = "0x181810010c0b091d051f09150b1c0310080805070e061d10170a080d17022009"
		const addressMIV9Lrd = "0x0000000000000000000000000000000000000001"
//		const bytes32PX8LjR = await VatzrgQBfh.frob.call(byteBvTvnP0, addressvmMvhdT, addressVeA5uyq, addresswvEm6qD, intr1q72H, intuO9EM3J, {from: accounts[1]});
//		const addressZEmUkG1 = await VatzrgQBfh.nope.call(addressMIV9Lrd, {from: accounts[1]});

		await expect(VatzrgQBfh.frob.call(byteBvTvnP0, addressvmMvhdT, addressVeA5uyq, addresswvEm6qD, intr1q72H, intuO9EM3J, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatcb5TBUQ = await Vat.new({from: accounts[1]});
		const byteRBIysOp = "0x051216061f1e010c171c180a161b17191b1d14040e0514080a1812020813000d"
		const addressDkRjn3p = accounts[3]
		const uintZpkQ77L = BigInt("1016")
		const addressyepVtB6 = accounts[0]
		const addresstBoORob = accounts[0]
		const bytewPN4cEy = "0x111d1718161f021b05181d101b05200c16090d02111c010c180c0f0919180213"
		const bytes32pZmhUdy = await Vatcb5TBUQ.init.call(byteRBIysOp, {from: accounts[1]});
		const addresszb3TX4r = await Vatcb5TBUQ.nope.call(addressDkRjn3p, {from: accounts[3]});
//		const bytes32HhlJXRb = await Vatcb5TBUQ.flux.call(bytewPN4cEy, addresstBoORob, addressyepVtB6, uintZpkQ77L, {from: accounts[4]});
//		await Vatcb5TBUQ.note.call({from: accounts[5]});

		await expect(Vatcb5TBUQ.flux.call(bytewPN4cEy, addresstBoORob, addressyepVtB6, uintZpkQ77L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatZil5ax = await Vat.new({from: accounts[4]});
		const addressjMcdHAu = accounts[0]
		const uintuzKCX9 = BigInt("1664")
		const addressCoITNLf = accounts[2]
		const addressRuPR3cI = accounts[2]
		const bytetqfqKc = "0x20020e191612070f2011090a061306140b031608070e120f14181e110a19200b"
		const addresssHfItIx = accounts[0]
		const addressyFOy10k = await VatZil5ax.nope.call(addressjMcdHAu, {from: accounts[0]});
//		const bytes32sfcsbz5 = await VatZil5ax.flux.call(bytetqfqKc, addressRuPR3cI, addressCoITNLf, uintuzKCX9, {from: accounts[2]});
//		const addressp1OBv9a = await VatZil5ax.nope.call(addresssHfItIx, {from: accounts[3]});

		await expect(VatZil5ax.flux.call(bytetqfqKc, addressRuPR3cI, addressCoITNLf, uintuzKCX9, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzrgQBfh = await Vat.new({from: accounts[4]});
		const addressIZIqLaP = "0x00000000000000000000000000000000000000-1"
		const uintRvzAHpq = BigInt("415")
		const addresscgXcSn = "0x0000000000000000000000000000000000000001"
		const addressfivc3az = accounts[1]
		const addressXfn5gO9 = "0x0000000000000000000000000000000000000001"
//		const addressZEmUkG1 = await VatzrgQBfh.nope.call(addressIZIqLaP, {from: accounts[1]});
//		const addressrhga1NY = await VatzrgQBfh.move.call(addressfivc3az, addresscgXcSn, uintRvzAHpq, {from: accounts[3]});
//		const addresscf1FLQM = await VatzrgQBfh.nope.call(addressXfn5gO9, {from: accounts[1]});

		await expect(VatzrgQBfh.nope.call(addressIZIqLaP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzrgQBfh = await Vat.new({from: accounts[4]});
		const addressESsPAvR = accounts[5]
		const addresslXFQ55R = "0x0000000000000000000000000000000000000001"
		const addressXnzOgjb = await VatzrgQBfh.rely.call(addressESsPAvR, {from: accounts[4]});
//		await VatzrgQBfh.auth.call({from: accounts[2]});
//		const addressZEmUkG1 = await VatzrgQBfh.nope.call(addresslXFQ55R, {from: accounts[1]});

		await expect(VatzrgQBfh.auth.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatb9d79e = await Vat.new({from: accounts[1]});
		const intBRPt9QE = BigInt("-554")
		const intUGJbKXa = BigInt("-569")
		const addressjQmiSJb = accounts[1]
		const addressb1xnCj = accounts[3]
		const addressjIuAxCF = accounts[0]
		const bytePV0A6EP = "0x0a201e1b06171a0a170a090b170e080c19150d0d180910061b0812061612071b"
		const uintKquRJO7 = BigInt("1198")
		const uintbGOKQON = BigInt("430")
//		const bytes32DRdtgd = await Vatb9d79e.grab.call(bytePV0A6EP, addressjIuAxCF, addressb1xnCj, addressjQmiSJb, intUGJbKXa, intBRPt9QE, {from: accounts[1]});
//		const uintVjnuqCh = await Vatb9d79e.heal.call(uintKquRJO7, {from: "0x0000000000000000000000000000000000000001"});
//		const uintFpPRfJ = await Vatb9d79e.heal.call(uintbGOKQON, {from: accounts[2]});

		await expect(Vatb9d79e.grab.call(bytePV0A6EP, addressjIuAxCF, addressb1xnCj, addressjQmiSJb, intUGJbKXa, intBRPt9QE, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatBVYExjJ = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const uinte0yZi2Q = BigInt("1028")
		const addressDGtvWRf = accounts[1]
		const addressUFFJkJj = accounts[5]
		const bytez4Y8gf4 = "0x0403040d0d130d0e010108060d04110e030318090818061c100f102009091809"
		const uintMAVYzU8 = BigInt("1528")
		const addressK1KzV5 = accounts[1]
		const addressMYX0FtU = accounts[2]
		const bytejm0uEs = "0x18161718070c1b041e0b020e020a0a02071b04120b001b050d16091400151b1e"
		const intw2DdN0x = BigInt("-880")
		const intC9IHIGP = BigInt("232")
		const addressTSq4m53 = accounts[3]
		const addresstG3ZK0 = accounts[3]
		const addressDu119p1 = accounts[0]
		const byteGs6J4KI = "0x07160f131d14161c06031e020b1e0f13061d0119070f090007091802021a1e04"
		const addressW1p57Lj = accounts[1]
		const bytes32XsbjYp = await VatBVYExjJ.flux.call(bytez4Y8gf4, addressUFFJkJj, addressDGtvWRf, uinte0yZi2Q, {from: accounts[3]});
		const bytes32oORLxlS = await VatBVYExjJ.flux.call(bytejm0uEs, addressMYX0FtU, addressK1KzV5, uintMAVYzU8, {from: accounts[0]});
		const bytes32WULDV1W = await VatBVYExjJ.grab.call(byteGs6J4KI, addressDu119p1, addresstG3ZK0, addressTSq4m53, intC9IHIGP, intw2DdN0x, {from: accounts[4]});
		const addressB0lPGT = await VatBVYExjJ.hope.call(addressW1p57Lj, {from: accounts[5]});
	});

	it('test for Vat', async () => {
		const VatzrgQBfh = await Vat.new({from: accounts[4]});
		const addressql3uPZd = "0x0000000000000000000000000000000000000001"
		const uintXXtAtSg = BigInt("1055")
		const addresscBrVAjX = accounts[4]
		const addressB7AOuq = accounts[0]
		const addressZEmUkG1 = await VatzrgQBfh.nope.call(addressql3uPZd, {from: accounts[1]});
//		const addresskVIk5a = await VatzrgQBfh.move.call(addressB7AOuq, addresscBrVAjX, uintXXtAtSg, {from: accounts[0]});

		await expect(VatzrgQBfh.move.call(addressB7AOuq, addresscBrVAjX, uintXXtAtSg, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatb9d79e = await Vat.new({from: accounts[1]});
		const uintj13kEyD = BigInt("689")
		const addressZjCbc5l = accounts[2]
		const addressdAqqhhy = accounts[5]
		const uintaDFIpQl = BigInt("1234")
		const addresswRvTE64 = await Vatb9d79e.suck.call(addressdAqqhhy, addressZjCbc5l, uintj13kEyD, {from: accounts[1]});
//		const uintVjnuqCh = await Vatb9d79e.heal.call(uintaDFIpQl, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Vatb9d79e.heal.call(uintaDFIpQl, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatuQ5Vzeg = await Vat.new({from: accounts[2]});
		const inttXPJ02t = BigInt("-561")
		const intWgGreA = BigInt("1060")
		const addressr5wLQqL = accounts[5]
		const addressg4WCGT9 = accounts[0]
		const addressd5AWALH = accounts[3]
		const bytekC93SQC = "0x09061515031f17050b080e1b0b040b09021b050c05031e1b0411091411091d0e"
		const uintR8Vw4sz = BigInt("827")
		const addresshS2MVBJ = accounts[0]
		const addressiFeT6y6 = accounts[3]
		const addresscUn7pjh = accounts[1]
		const byteV9nm94 = "0x1c181d0d0209020f0e031f1c1b1e0d071b131f011c12201e201b141b06170213"
//		const bytes32myLlHrp = await VatuQ5Vzeg.grab.call(bytekC93SQC, addressd5AWALH, addressg4WCGT9, addressr5wLQqL, intWgGreA, inttXPJ02t, {from: accounts[2]});
//		const addressXnrsvPm = await VatuQ5Vzeg.move.call(addressiFeT6y6, addresshS2MVBJ, uintR8Vw4sz, {from: accounts[2]});
//		const addressdxT8kWs = await VatuQ5Vzeg.nope.call(addresscUn7pjh, {from: accounts[2]});
//		const bytes32dT3PHDb = await VatuQ5Vzeg.init.call(byteV9nm94, {from: accounts[2]});
//		await VatuQ5Vzeg.cage.call({from: accounts[1]});

		await expect(VatuQ5Vzeg.grab.call(bytekC93SQC, addressd5AWALH, addressg4WCGT9, addressr5wLQqL, intWgGreA, inttXPJ02t, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatb9d79e = await Vat.new({from: accounts[1]});
		const intBJVW5sp = BigInt("-1586")
		const addressnYBRIfd = accounts[3]
		const bytevg3LYFN = "0x1a10151a1e18100503141c110a12061d1a0a191d1b061c160a010219070d0c04"
		const intedh9K2e = BigInt("-893")
		const intLRuVA4X = BigInt("-72")
		const addresswjy2rs3 = accounts[1]
		const addressGsapeZ = accounts[2]
		const byteTR4FATs = "0x15161611181b0b0b0d10031f1a07161914001c0406111310061e02130f020500"
//		const bytes32w45mgZY = await Vatb9d79e.slip.call(bytevg3LYFN, addressnYBRIfd, intBJVW5sp, {from: accounts[1]});
//		const bytes32WB4k55N = await Vatb9d79e.fork.call(byteTR4FATs, addressGsapeZ, addresswjy2rs3, intLRuVA4X, intedh9K2e, {from: accounts[4]});

		await expect(Vatb9d79e.slip.call(bytevg3LYFN, addressnYBRIfd, intBJVW5sp, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzrgQBfh = await Vat.new({from: accounts[4]});
		const intOnYDY5W = BigInt("-693")
		const inte8wmSjs = BigInt("-1259")
		const addressVbr7mDv = accounts[3]
		const addressAXFlkPT = accounts[3]
		const bytefsULS4J = "0x0a19010620040c180310010a171d160413141d15070d11111d0e1c120c0b040e"
		const addressF2N8R6e = "0x0000000000000000000000000000000000000002"
		const bytes32oxytuX0 = await VatzrgQBfh.fork.call(bytefsULS4J, addressAXFlkPT, addressVbr7mDv, inte8wmSjs, intOnYDY5W, {from: accounts[3]});
		const addressZEmUkG1 = await VatzrgQBfh.nope.call(addressF2N8R6e, {from: accounts[1]});
	});

	it('test for Vat', async () => {
		const Vatb9d79e = await Vat.new({from: accounts[1]});
		const uintSbHBEH = BigInt("1549")
		const uintg2MXrTE = BigInt("1380")
		const addressKAMaJI6 = accounts[1]
		const addressRXhbGvD = accounts[3]
//		await Vatb9d79e.cage.call({from: accounts[1]});
//		const uintVjnuqCh = await Vatb9d79e.heal.call(uintSbHBEH, {from: "0x0000000000000000000000000000000000000001"});
//		const addressfTJDZ5n = await Vatb9d79e.move.call(addressRXhbGvD, addressKAMaJI6, uintg2MXrTE, {from: accounts[2]});

		await expect(Vatb9d79e.cage.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatAoYFd65 = await Vat.new({from: accounts[4]});
		const intRpvfHJ = BigInt("1725")
		const intNXbsbON = BigInt("867")
		const addressPOl47s9 = "0x0000000000000000000000000000000000000001"
		const address0c89Ak = accounts[3]
		const addressn2iym5i = accounts[4]
		const bytepFy91HN = "0x060814050b1c18010f0d07030d001817090a1d0b141f031905151f0319081b01"
		const intH3LJcL = BigInt("-2012")
		const intCBNRGqu = BigInt("511")
		const addresspStx1hI = accounts[0]
		const addressts1SEW = accounts[3]
		const addressL3G0WEm = accounts[3]
		const bytemiiBwOB = "0x101905061a090909061f0c02150f1520140b0a07161c1803040d1a0114041d12"
		const uintntWuEg = BigInt("370")
		const addressGHmSQP3 = accounts[0]
		const addressbqLe9nM = accounts[4]
		const addressD6KDzlt = accounts[5]
//		const bytes32sLqLrxL = await VatAoYFd65.grab.call(bytepFy91HN, addressn2iym5i, address0c89Ak, addressPOl47s9, intNXbsbON, intRpvfHJ, {from: accounts[4]});
//		const bytes32aBb1Uh3 = await VatAoYFd65.frob.call(bytemiiBwOB, addressL3G0WEm, addressts1SEW, addresspStx1hI, intCBNRGqu, intH3LJcL, {from: accounts[5]});
//		const addressTbEY5Dy = await VatAoYFd65.move.call(addressbqLe9nM, addressGHmSQP3, uintntWuEg, {from: accounts[3]});
//		const addressBfUmVJe = await VatAoYFd65.hope.call(addressD6KDzlt, {from: accounts[4]});

		await expect(VatAoYFd65.grab.call(bytepFy91HN, addressn2iym5i, address0c89Ak, addressPOl47s9, intNXbsbON, intRpvfHJ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatzrgQBfh = await Vat.new({from: accounts[4]});
		const intQQ32jw = BigInt("-493")
		const addressuziNOsX = accounts[0]
		const byteex8mrT4 = "0x130a111b12040a091b051c1b0e1b0f0f1017010b010b0c05181b0a1c191c000a"
		const addressXmH5PDa = "0x0000000000000000000000000000000000000002"
//		const bytes32CPcJLGo = await VatzrgQBfh.fold.call(byteex8mrT4, addressuziNOsX, intQQ32jw, {from: accounts[4]});
//		const addressZEmUkG1 = await VatzrgQBfh.nope.call(addressXmH5PDa, {from: accounts[1]});

		await expect(VatzrgQBfh.fold.call(byteex8mrT4, addressuziNOsX, intQQ32jw, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})