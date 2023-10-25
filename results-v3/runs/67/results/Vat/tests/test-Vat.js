const Vat = artifacts.require("Vat");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Vat', (accounts) => {
	it('test for Vat', async () => {
		const VateCfiVue = await Vat.new({from: accounts[4]});
		const intiruLOfZ = BigInt("1464")
		const intjPpo9vB = BigInt("-2012")
		const addressb8gCnu = accounts[1]
		const addressKWu4n6 = accounts[1]
		const bytezFvbujT = "0x151f020d1806161a1b0401160b1e030c05041a010c11011f1311140a0a090319"
		const byteWIdbhJQ = "0x181f11180a20150b13111c04010a05050c190f1c151210010f080e0b0c1e1b19"
		await VateCfiVue.note.call({from: accounts[4]});
		const bytes32NIv70e9 = await VateCfiVue.fork.call(bytezFvbujT, addressKWu4n6, addressb8gCnu, intjPpo9vB, intiruLOfZ, {from: accounts[1]});
		const bytes32s0g2cxh = await VateCfiVue.init.call(byteWIdbhJQ, {from: accounts[2]});

		await expect(VateCfiVue.note.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXvgWGhy = await Vat.new({from: accounts[5]});
		const uintJ32kb3O = BigInt("1786")
		const addressvegMsT9 = accounts[0]
		const addressQL01YER = accounts[4]
		const addressF7fxGL = accounts[0]
		const addressMx8gGYT = accounts[0]
		const uintvB47R4Q = BigInt("2038")
		const byteGc1e8jJ = "0x1215051c0e0a151b13170d1a11150018160b191c071b06000c141706130e0a08"
		const addressQiHCaVm = await VatXvgWGhy.move.call(addressQL01YER, addressvegMsT9, uintJ32kb3O, {from: accounts[2]});
		const addressSU6AzHl = await VatXvgWGhy.hope.call(addressF7fxGL, {from: accounts[1]});
		const addressVN7pBuk = await VatXvgWGhy.nope.call(addressMx8gGYT, {from: accounts[3]});
		const bytes32XT222zw = await VatXvgWGhy.file.call(byteGc1e8jJ, uintvB47R4Q, {from: accounts[5]});

		await expect(VatXvgWGhy.move.call(addressQL01YER, addressvegMsT9, uintJ32kb3O, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatYBWKPES = await Vat.new({from: accounts[2]});
		const uintNabeLna = BigInt("362")
		const addressE95SUbH = accounts[1]
		const addressCoUXl2Y = "0x0000000000000000000000000000000000000001"
		const intSJ84hb = BigInt("-1683")
		const addresschLDQEu = accounts[2]
		const byteK3PmZxG = "0x161d1a1707120d0706081b14121620100b0f1f2013190a19010d13101c07121a"
		const byteU9Kv42Y = "0x110c0d140b1f0e051d051404041e17051f011f151a00050d02041f03001d0514"
		const addresspDk44MW = await VatYBWKPES.suck.call(addressCoUXl2Y, addressE95SUbH, uintNabeLna, {from: "0x0000000000000000000000000000000000000001"});
		const bytes32IaahLQC = await VatYBWKPES.slip.call(byteK3PmZxG, addresschLDQEu, intSJ84hb, {from: accounts[4]});
		const bytes32RZKd8bU = await VatYBWKPES.init.call(byteU9Kv42Y, {from: accounts[3]});

		await expect(VatYBWKPES.suck.call(addressCoUXl2Y, addressE95SUbH, uintNabeLna, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatrfaTQsS = await Vat.new({from: accounts[2]});
		const intlTWbphP = BigInt("-995")
		const intuekA5hJ = BigInt("-641")
		const addressnWOXcXu = accounts[5]
		const addressDjsI28n = "0x0000000000000000000000000000000000000001"
		const bytetDyYDs = "0x1915180b0e191c1c1b060c151a201a1913160313091f16040d18191b0809100f"
		const uintMWYhOX2 = BigInt("1893")
		const bytePZAAIL0 = "0x1a100f02111d0c1e140a011a20170407011e1d081f0102111b0c1a1c08121205"
		const byted2zksjV = "0x08040d0b021610061c151d15191e20061a101e1f030a02161b1713100e030503"
		const intGEEAaM = BigInt("1894")
		const inthTMzcy6 = BigInt("-424")
		const addresszJyoxD = accounts[0]
		const addressCqW5HTR = accounts[2]
		const addresscgcRPZ = accounts[2]
		const byteBxqkebE = "0x070f0f1c0d130c190500141f1f05171d01161b120a0c141e11020502180e0d0f"
		const bytes32IX0madm = await VatrfaTQsS.fork.call(bytetDyYDs, addressDjsI28n, addressnWOXcXu, intuekA5hJ, intlTWbphP, {from: accounts[1]});
		const bytes32NKRDcKa = await VatrfaTQsS.file.call(byted2zksjV, bytePZAAIL0, uintMWYhOX2, {from: accounts[3]});
		const bytes32GjsD6Uq = await VatrfaTQsS.frob.call(byteBxqkebE, addresscgcRPZ, addressCqW5HTR, addresszJyoxD, inthTMzcy6, intGEEAaM, {from: accounts[4]});
		await VatrfaTQsS.note.call({from: accounts[0]});

		await expect(VatrfaTQsS.fork.call(bytetDyYDs, addressDjsI28n, addressnWOXcXu, intuekA5hJ, intlTWbphP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatytNxRyR = await Vat.new({from: accounts[4]});
		const addresslMKgvU = "0x0000000000000000000000000000000000000001"
		const intziXqUcb = BigInt("337")
		const intw453aPd = BigInt("380")
		const addressaygMJrK = accounts[2]
		const addresswRd4VOB = accounts[4]
		const addressyaFfuLA = accounts[2]
		const byte90nL4P = "0x1e04161602190013010e091f031908020b050e0e151904040c061101070e1915"
		const intTKczcRw = BigInt("-874")
		const intHys13A = BigInt("1277")
		const addressu9Ap6nQ = accounts[5]
		const addresslbKlBY = accounts[4]
		const bytect2Cwku = "0x150d0d18121919170e1118140b1e180d0e05111d1e0e0619130f121113131003"
		const addressX351tZh = await VatytNxRyR.deny.call(addresslMKgvU, {from: accounts[4]});
		await VatytNxRyR.auth.call({from: "0x0000000000000000000000000000000000000001"});
		const bytes32vFLMoOb = await VatytNxRyR.frob.call(byte90nL4P, addressyaFfuLA, addresswRd4VOB, addressaygMJrK, intw453aPd, intziXqUcb, {from: accounts[2]});
		const bytes321OV4j5 = await VatytNxRyR.fork.call(bytect2Cwku, addresslbKlBY, addressu9Ap6nQ, intHys13A, intTKczcRw, {from: accounts[1]});

		await expect(VatytNxRyR.auth.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const Vatn2XY7SL = await Vat.new({from: accounts[5]});
		const uintnobmg1e = BigInt("1331")
		const byteLauWzg = "0x1d1a1a1c08021c151a1b1c1e1611130d0111071a1e0709180205191905030a1a"
		const inti00mqx9 = BigInt("-171")
		const addressJ7ncujt = accounts[2]
		const byteTmQdlEs = "0x150f0d17190f040b06071d0b000f1602170d0c0a1f110d050710150f010d1816"
		const inttGlqEUD = BigInt("-943")
		const intUbbLDim = BigInt("-800")
		const addressonCu5KB = accounts[2]
		const addressOpRR7B = accounts[0]
		const addressC3cz9f = accounts[0]
		const bytefsZRBJp = "0x18011e1f1b0b1f171c030e13011704141416171e141b071a05020d140c02010c"
		const uintmiMPzNx = BigInt("1699")
		const byteyTBQVE9 = "0x0d0f150b161d12141d011119121815131f15100d011d1b1c131703150917080d"
		const bytemyfqBUH = "0x1f09191f060701010f100b071b161f191b011809051c100e08151306030c1104"
		const bytes32qlcfDWD = await Vatn2XY7SL.file.call(byteLauWzg, uintnobmg1e, {from: accounts[0]});
		const bytes32x8FPzIX = await Vatn2XY7SL.fold.call(byteTmQdlEs, addressJ7ncujt, inti00mqx9, {from: accounts[4]});
		const bytes32tO1rTo = await Vatn2XY7SL.frob.call(bytefsZRBJp, addressC3cz9f, addressOpRR7B, addressonCu5KB, intUbbLDim, inttGlqEUD, {from: accounts[3]});
		const bytes32qiCc3RS = await Vatn2XY7SL.file.call(bytemyfqBUH, byteyTBQVE9, uintmiMPzNx, {from: accounts[2]});

		await expect(Vatn2XY7SL.file.call(byteLauWzg, uintnobmg1e, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatytNxRyR = await Vat.new({from: accounts[4]});
		const addressO2qO02S = "0x0000000000000000000000000000000000000001"
		const intM1MA3qU = BigInt("337")
		const intM3CyMmw = BigInt("380")
		const addressXcJYRl7 = accounts[2]
		const addressuaXxbx = accounts[4]
		const addressn8RwQr1 = accounts[2]
		const byteN7XKK5W = "0x1e04161602190013010e091f031908020b050e0e151904040c061101070e1915"
		const intIpAILc9 = BigInt("-874")
		const intGNh3U6C = BigInt("1277")
		const addresscb8Y0CC = accounts[5]
		const addressr7QuG6w = accounts[5]
		const byteQw8dTNC = "0x150d0d18121919170e1118140b1e180d0e05111d1e0e0619130f121113131003"
		const addressX351tZh = await VatytNxRyR.deny.call(addressO2qO02S, {from: accounts[4]});
		const bytes32vFLMoOb = await VatytNxRyR.frob.call(byteN7XKK5W, addressn8RwQr1, addressuaXxbx, addressXcJYRl7, intM3CyMmw, intM1MA3qU, {from: accounts[2]});
		const bytes321OV4j5 = await VatytNxRyR.fork.call(byteQw8dTNC, addressr7QuG6w, addresscb8Y0CC, intGNh3U6C, intIpAILc9, {from: accounts[1]});

		await expect(VatytNxRyR.frob.call(byteN7XKK5W, addressn8RwQr1, addressuaXxbx, addressXcJYRl7, intM3CyMmw, intM1MA3qU, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatM8Zk0Ns = await Vat.new({from: accounts[4]});
		const uintMAlGal4 = BigInt("608")
		const addressZS2NKwu = accounts[4]
		const addressATIde31 = accounts[4]
		const byteoyOdLDp = "0x0b0e1c181f0b050b18191d0813180b0e1e01051317011f0f1715191f1010141a"
		const uintawjsnMI = BigInt("632")
		const addressZvb6iiI = accounts[4]
		const addressRKmTCq6 = "0x0000000000000000000000000000000000000001"
		const bytes32hdhMnHu = await VatM8Zk0Ns.flux.call(byteoyOdLDp, addressATIde31, addressZS2NKwu, uintMAlGal4, {from: accounts[1]});
		const addressRIRvCqb = await VatM8Zk0Ns.suck.call(addressRKmTCq6, addressZvb6iiI, uintawjsnMI, {from: accounts[3]});
		await VatM8Zk0Ns.cage.call({from: accounts[4]});
		await VatM8Zk0Ns.auth.call({from: accounts[0]});

		await expect(VatM8Zk0Ns.flux.call(byteoyOdLDp, addressATIde31, addressZS2NKwu, uintMAlGal4, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatdGyQiLu = await Vat.new({from: accounts[0]});
		const addressuVKgjZq = accounts[0]
		const intrPuXej = BigInt("-696")
		const addresscLhbiR8 = accounts[1]
		const byteIeLYJC = "0x09010a071c1a090d020d041609200c1520000b0103060b1314041c141a100e04"
		const intYDkPa5p = BigInt("-1999")
		const intwyy9uEQ = BigInt("-653")
		const addressSvNrwm = accounts[0]
		const addressK1Mu5p = accounts[5]
		const byteepXoiDP = "0x1919180a201000150e151b0f060710131311190a0808170c070e060b091a1416"
		const addressvUVuSg3 = accounts[0]
		const addressshECkpf = await VatdGyQiLu.nope.call(addressuVKgjZq, {from: accounts[3]});
		const bytes32ykmeqCv = await VatdGyQiLu.slip.call(byteIeLYJC, addresscLhbiR8, intrPuXej, {from: accounts[0]});
		const bytes32bAg0UuX = await VatdGyQiLu.fork.call(byteepXoiDP, addressK1Mu5p, addressSvNrwm, intwyy9uEQ, intYDkPa5p, {from: accounts[1]});
		const address8qHmJK = await VatdGyQiLu.nope.call(addressvUVuSg3, {from: accounts[2]});

		await expect(VatdGyQiLu.slip.call(byteIeLYJC, addresscLhbiR8, intrPuXej, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatXvgWGhy = await Vat.new({from: accounts[5]});
		const addresseuluGFF = accounts[1]
		const addressOv2Xpo = accounts[0]
		const uintmgnNIXg = BigInt("2038")
		const bytemd11Y2b = "0x1215051c0e0a151b13170d1a11150018160b191c071b06000c141706130e0a08"
		const addressSU6AzHl = await VatXvgWGhy.hope.call(addresseuluGFF, {from: accounts[1]});
		const addressVN7pBuk = await VatXvgWGhy.nope.call(addressOv2Xpo, {from: accounts[3]});
		const bytes32XT222zw = await VatXvgWGhy.file.call(bytemd11Y2b, uintmgnNIXg, {from: accounts[5]});

		await expect(VatXvgWGhy.file.call(bytemd11Y2b, uintmgnNIXg, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatlA3dfK6 = await Vat.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCWqDTht = BigInt("1058")
		const addresscgBeNEu = accounts[5]
		const addressVmfyW3l = accounts[2]
		const byteF9HMUto = "0x181214091118021a180e181a0f0b050f10160c05051e06180a201d1a06091100"
		const intQqEtevn = BigInt("-1528")
		const addressbwe4hI = accounts[1]
		const byteLsNIReJ = "0x030a151a20190b12001d18051c1d0614091d051e0b001b190d06040f19191012"
		const uintF6sz7h = BigInt("1879")
		const addressvZkMahw = accounts[3]
		const addressJvTHPv = accounts[5]
		const bytes32JBvwkPK = await VatlA3dfK6.flux.call(byteF9HMUto, addressVmfyW3l, addresscgBeNEu, uintCWqDTht, {from: accounts[3]});
		const bytes32zhIpzcp = await VatlA3dfK6.slip.call(byteLsNIReJ, addressbwe4hI, intQqEtevn, {from: accounts[0]});
		const addressgW9Ev8r = await VatlA3dfK6.move.call(addressJvTHPv, addressvZkMahw, uintF6sz7h, {from: accounts[4]});
	});

	it('test for Vat', async () => {
		const VatOlnz9Mk = await Vat.new({from: accounts[0]});
		const uintqmfDJ9V = BigInt("1499")
		const addresszBsIXjd = accounts[0]
		const addresso0cy9rR = "0x0000000000000000000000000000000000000001"
		const uint2f2Sul = BigInt("869")
		const address5LMjMS = accounts[1]
		const addressANOXqS3 = accounts[0]
		const intyAkrC7Z = BigInt("202")
		const intZYqwsML = BigInt("71")
		const addressqzuCigs = accounts[0]
		const addressHfKPiV = accounts[4]
		const addressTdxjOTQ = accounts[3]
		const bytexgXvhf = "0x011c0a18050d01051c09121a0a13021e02020c1f1c121912171c0f010c1f040b"
		const addressbGmGUtu = accounts[4]
		const uintV31pDa9 = BigInt("363")
		await VatOlnz9Mk.cage.call({from: accounts[0]});
		const addressTHlD0P5 = await VatOlnz9Mk.move.call(addresso0cy9rR, addresszBsIXjd, uintqmfDJ9V, {from: accounts[0]});
		const addresshOa570F = await VatOlnz9Mk.move.call(addressANOXqS3, address5LMjMS, uint2f2Sul, {from: accounts[3]});
		const bytes32bg96PF = await VatOlnz9Mk.grab.call(bytexgXvhf, addressTdxjOTQ, addressHfKPiV, addressqzuCigs, intZYqwsML, intyAkrC7Z, {from: accounts[3]});
		const addressMqKCMFW = await VatOlnz9Mk.hope.call(addressbGmGUtu, {from: "0x0000000000000000000000000000000000000001"});
		const uint8hFVFu = await VatOlnz9Mk.heal.call(uintV31pDa9, {from: accounts[5]});

		await expect(VatOlnz9Mk.cage.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatuLb923k = await Vat.new({from: accounts[0]});
		const intzx6uvn = BigInt("-174")
		const intjDz2J9e = BigInt("1422")
		const addressAiY4nPo = accounts[4]
		const addressrYR7iQ = accounts[2]
		const addressg1yErCv = accounts[0]
		const byteaK3l0J9 = "0x100d1e0707090b110b08161f1018010916031410141c1516011b180c0c1c0719"
		const intuW3gt5E = BigInt("-469")
		const intIxVGD52 = BigInt("1121")
		const address2Xv8cv = accounts[2]
		const addressW8m5q0U = accounts[1]
		const byteLbWCNI1 = "0x17131c10031f03190a1401081311190a1e100b061d1603080a2016011508081c"
		const uintM978qxQ = BigInt("1438")
		const addressUy5yUIz = accounts[0]
		const addressbTc9oE = accounts[4]
		const addressOEyYDGx = accounts[2]
		const intWnBKj4 = BigInt("1869")
		const addresszcLiTJE = accounts[3]
		const bytexEKo38x = "0x1d1818070e171304200d0d1617081a131b07171a1f0e181d0b1811130b1b070f"
		const bytes32bwE4td5 = await VatuLb923k.grab.call(byteaK3l0J9, addressg1yErCv, addressrYR7iQ, addressAiY4nPo, intjDz2J9e, intzx6uvn, {from: accounts[0]});
		const bytes32KlzZ6Np = await VatuLb923k.fork.call(byteLbWCNI1, addressW8m5q0U, address2Xv8cv, intIxVGD52, intuW3gt5E, {from: accounts[5]});
		const addressbT0O4wK = await VatuLb923k.suck.call(addressbTc9oE, addressUy5yUIz, uintM978qxQ, {from: accounts[1]});
		await VatuLb923k.note.call({from: accounts[0]});
		const addresszlljxVI = await VatuLb923k.hope.call(addressOEyYDGx, {from: accounts[0]});
		const bytes32csjvQN = await VatuLb923k.fold.call(bytexEKo38x, addresszcLiTJE, intWnBKj4, {from: accounts[3]});

		await expect(VatuLb923k.grab.call(byteaK3l0J9, addressg1yErCv, addressrYR7iQ, addressAiY4nPo, intjDz2J9e, intzx6uvn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatM8Zk0Ns = await Vat.new({from: accounts[4]});
		const uintJp47Zc = BigInt("1338")
		const uintrPwpYP = BigInt("1619")
		const addressyzryNoJ = accounts[4]
		const addressm6D6JJs = "0x0000000000000000000000000000000000000002"
		const uintjVefcZh = await VatM8Zk0Ns.heal.call(uintJp47Zc, {from: accounts[2]});
		const addressRIRvCqb = await VatM8Zk0Ns.suck.call(addressm6D6JJs, addressyzryNoJ, uintrPwpYP, {from: accounts[3]});

		await expect(VatM8Zk0Ns.heal.call(uintJp47Zc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatM8Zk0Ns = await Vat.new({from: accounts[4]});
		const uintM6JCFav = BigInt("824")
		const byteATmG45c = "0x0b0906151f1a191104101f071e1c030f0d040003161c01151c050d191904190d"
		const bytem2JXg1c = "0x1e040f1506080c021d0307040a010b160d1c1e1815051311160205041c1d201f"
		const uintYdvGBU = BigInt("632")
		const addressdKpmYNh = accounts[4]
		const addressINmrjh = "0x0000000000000000000000000000000000000001"
		const bytes32Hvf2Eq8 = await VatM8Zk0Ns.file.call(bytem2JXg1c, byteATmG45c, uintM6JCFav, {from: accounts[4]});
		const addressRIRvCqb = await VatM8Zk0Ns.suck.call(addressINmrjh, addressdKpmYNh, uintYdvGBU, {from: accounts[3]});
		await VatM8Zk0Ns.auth.call({from: accounts[0]});

		await expect(VatM8Zk0Ns.file.call(bytem2JXg1c, byteATmG45c, uintM6JCFav, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatZ9Zvs6G = await Vat.new({from: accounts[4]});
		const uintj7SJnRB = BigInt("950")
		const byteFXAfW14 = "0x1609161e19001e1f151c16050c1f090a1c1e1a04001a19070c01160613101307"
		const byteib0HLnX = "0x1c061b1515121b061a1a1f1ffffffffd02110b130e11200a1306200d10061e1a001f05"
		const intan6PDzw = BigInt("-1779")
		const addressAz6fe3 = accounts[5]
		const bytehNzYCIZ = "0x1f20160b08021205020617010d100306071c120302071415190811021806051c"
		const uintqXDDFU = BigInt("952")
		const byteJCCaUFw = "0x0e01011a1b030418120d0a001e1b121e10170d051f151607170806120c1d1019"
		const intq0P1W13 = BigInt("-1859")
		const addressR7aximm = accounts[3]
		const byteZCtqTQ = "0x140920140e0b0d0611041c02080109181c200a0a0e1a040d0f03190f1e121113"
		const bytes32in6H5CB = await VatZ9Zvs6G.file.call(byteib0HLnX, byteFXAfW14, uintj7SJnRB, {from: accounts[4]});
		const bytes32QPxBb6o = await VatZ9Zvs6G.slip.call(bytehNzYCIZ, addressAz6fe3, intan6PDzw, {from: accounts[5]});
		const bytes32GmgWLsY = await VatZ9Zvs6G.file.call(byteJCCaUFw, uintqXDDFU, {from: accounts[1]});
		const bytes32yM06mqu = await VatZ9Zvs6G.fold.call(byteZCtqTQ, addressR7aximm, intq0P1W13, {from: accounts[1]});

		await expect(VatZ9Zvs6G.file.call(byteib0HLnX, byteFXAfW14, uintj7SJnRB, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatM8Zk0Ns = await Vat.new({from: accounts[4]});
		const uintWom7pT = BigInt("824")
		const byteGLQDRaz = "0x0b0906151f1a191104101f071e1c030f0d040003161c01151c050d1919ffffffff190d"
		const byteaZ7IhgB = "0x10001217140303080f16181516141c090f15051f181d06141e08131d15100708"
		const uintj0sni7Y = BigInt("1717")
		const addressQn4wfsJ = accounts[2]
		const addressNIyi65a = "0x0000000000000000000000000000000000000001"
		const byteEHp8iJq = "0x0f0e151419200e1a190d050f1017051a1f1604161f071c190614160814101616"
		const addresskANAkUG = accounts[4]
		const intcKHq4un = BigInt("-1942")
		const addresszuZBpWF = accounts[0]
		const bytegZw4drf = "0x082002051f04080a0200050d0408061419161c0f1f0611111816161917150f1d"
		const addressbNDJsRa = "0x0000000000000000000000000000000000000001"
		const bytes32Hvf2Eq8 = await VatM8Zk0Ns.file.call(byteaZ7IhgB, byteGLQDRaz, uintWom7pT, {from: accounts[4]});
		const bytes32Y3d4c4 = await VatM8Zk0Ns.flux.call(byteEHp8iJq, addressNIyi65a, addressQn4wfsJ, uintj0sni7Y, {from: accounts[0]});
		await VatM8Zk0Ns.auth.call({from: accounts[0]});
		const addressCE7RSv = await VatM8Zk0Ns.deny.call(addresskANAkUG, {from: accounts[1]});
		const bytes32jAmbAjT = await VatM8Zk0Ns.fold.call(bytegZw4drf, addresszuZBpWF, intcKHq4un, {from: accounts[0]});
		const addressELs2dF1 = await VatM8Zk0Ns.nope.call(addressbNDJsRa, {from: accounts[5]});

		await expect(VatM8Zk0Ns.file.call(byteaZ7IhgB, byteGLQDRaz, uintWom7pT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatM8Zk0Ns = await Vat.new({from: accounts[4]});
		const uintP2YNWvB = BigInt("1216")
		const addressGLZJ9lT = "0x0000000000000000000000000000000000000001"
		const addressvh1WJuJ = accounts[1]
		const intVEFGCM3 = BigInt("-1081")
		const inttIWxBcH = BigInt("1499")
		const addresslMxEzZ1 = accounts[3]
		const addressgrGk9Kj = accounts[3]
		const byteCJOefTz = "0x170e1f041f0a0d1e0e1e1d171f0c0a08131405101304080b1d130b1c1513000b"
		const uintCX3s2ph = BigInt("620")
		const addressybyiUA3 = accounts[4]
		const addressBFHunV1 = "0x0000000000000000000000000000000000000001"
		const addressWJWb2R = await VatM8Zk0Ns.suck.call(addressvh1WJuJ, addressGLZJ9lT, uintP2YNWvB, {from: accounts[4]});
		const bytes32FJuz80 = await VatM8Zk0Ns.fork.call(byteCJOefTz, addressgrGk9Kj, addresslMxEzZ1, inttIWxBcH, intVEFGCM3, {from: accounts[1]});
		const addressRIRvCqb = await VatM8Zk0Ns.suck.call(addressBFHunV1, addressybyiUA3, uintCX3s2ph, {from: accounts[3]});

		await expect(VatM8Zk0Ns.fork.call(byteCJOefTz, addressgrGk9Kj, addresslMxEzZ1, inttIWxBcH, intVEFGCM3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatM8Zk0Ns = await Vat.new({from: accounts[4]});
		const uintzDPviaC = BigInt("824")
		const byteWYmyKOc = "0x0b0906151f1a191104101f071e1c030f0d040003161c01151c050d191904190d"
		const byte4lKYra = "0x1e040f1506080c021d0307040a010b160d1c1e181505131116ffffffff05041c1d201f"
		const bytes32Hvf2Eq8 = await VatM8Zk0Ns.file.call(byte4lKYra, byteWYmyKOc, uintzDPviaC, {from: accounts[4]});

		await expect(VatM8Zk0Ns.file.call(byte4lKYra, byteWYmyKOc, uintzDPviaC, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatnWqPJ4V = await Vat.new({from: accounts[0]});
		const byteQ78M6M5 = "0x11181116100f040a151116160c0515060e1e11101402010c1009161011190400"
		const intKKgsNs8 = BigInt("1845")
		const intKJKWUdL = BigInt("323")
		const addresspeTX1zx = accounts[0]
		const addressvPtc841 = accounts[1]
		const addressnEwFLJO = accounts[1]
		const byteyTwEsD7 = "0x0f0518110d081f1b101507011b0514041b060d1a19100f150e1c14090f011219"
		const addressXPKBy69 = accounts[4]
		const bytes32Ec44tjR = await VatnWqPJ4V.init.call(byteQ78M6M5, {from: accounts[0]});
		const bytes32L52wxaS = await VatnWqPJ4V.frob.call(byteyTwEsD7, addressnEwFLJO, addressvPtc841, addresspeTX1zx, intKJKWUdL, intKKgsNs8, {from: accounts[3]});
		await VatnWqPJ4V.note.call({from: accounts[1]});
		const addressbhjwZel = await VatnWqPJ4V.deny.call(addressXPKBy69, {from: accounts[1]});

		await expect(VatnWqPJ4V.frob.call(byteyTwEsD7, addressnEwFLJO, addressvPtc841, addresspeTX1zx, intKJKWUdL, intKKgsNs8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatnN9iGr = await Vat.new({from: accounts[1]});
		const intKkTmL6f = BigInt("-1589")
		const intllpHBLy = BigInt("-816")
		const addressUaWBz9C = accounts[3]
		const addressETaDgMr = accounts[3]
		const bytelaSB1x = "0x120305061b170f081f0d010b19151a1c1f19040b0a19071c0101161e04070911"
		const uintQTvUqwQ = BigInt("1239")
		const byterL3WQXR = "0x190c11180e061c001d031315010a020a100d0a0d131a0714160a17020d0d1c16"
		const byteuQY2D0V = "0x0c0017111a011d1d0e18021d1a1e110702160e1f1e171a0f1b0a141a0a13140f"
		const addressZG4QNLM = accounts[1]
		const addressIGgavlf = accounts[4]
		const inth90aPVt = BigInt("1403")
		const intcDQck9M = BigInt("-810")
		const addressXwORzK8 = accounts[4]
		const addressUOj61qG = accounts[2]
		const bytegjEBzKy = "0x0c090e10051c11030e15131d1e1904020c030b1519140e0c1500070c0b00030c"
		const bytes32wG7grv = await VatnN9iGr.fork.call(bytelaSB1x, addressETaDgMr, addressUaWBz9C, intllpHBLy, intKkTmL6f, {from: accounts[5]});
		const bytes32pU4b1WJ = await VatnN9iGr.file.call(byteuQY2D0V, byterL3WQXR, uintQTvUqwQ, {from: accounts[4]});
		const addressvDBCaR = await VatnN9iGr.hope.call(addressZG4QNLM, {from: accounts[2]});
		const addressTL4vcHz = await VatnN9iGr.deny.call(addressIGgavlf, {from: accounts[1]});
		const bytes32k38ZCzR = await VatnN9iGr.fork.call(bytegjEBzKy, addressUOj61qG, addressXwORzK8, intcDQck9M, inth90aPVt, {from: accounts[4]});

		await expect(VatnN9iGr.fork.call(bytelaSB1x, addressETaDgMr, addressUaWBz9C, intllpHBLy, intKkTmL6f, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatM8Zk0Ns = await Vat.new({from: accounts[4]});
		const uinttUfG7IK = BigInt("824")
		const byteVUb3Xkt = "0x0b0906151f1a191104101f071e1c030f0d04ffffffff03161c01151c050d191904190d"
		const byteEvngei = "0x1e040f1506080c021d0307040a010b160d1c1e1815051311160205041c1d201f"
		const bytes32Hvf2Eq8 = await VatM8Zk0Ns.file.call(byteEvngei, byteVUb3Xkt, uinttUfG7IK, {from: accounts[4]});

		await expect(VatM8Zk0Ns.file.call(byteEvngei, byteVUb3Xkt, uinttUfG7IK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatM8Zk0Ns = await Vat.new({from: accounts[4]});
		const uintCnT2jac = BigInt("824")
		const bytekD06IAh = "0x0b0906151f1a191104101f071e1c030f0d040003161c01151c050d191904190d"
		const byteQDZ3U8N = "0x1e040f1506080c021dffffffff07040a010b160d1c1e1815051311160205041c1d201f"
		const intleUJHkv = BigInt("1")
		const addressNCgSVNy = accounts[5]
		const byteMEnwahD = "0x100c1c0f14191f071d1b0605070a1f051d131f091b050e201117070e0c0f0505"
		const bytes32Hvf2Eq8 = await VatM8Zk0Ns.file.call(byteQDZ3U8N, bytekD06IAh, uintCnT2jac, {from: accounts[4]});
		const bytes32gFaeoGm = await VatM8Zk0Ns.slip.call(byteMEnwahD, addressNCgSVNy, intleUJHkv, {from: accounts[2]});

		await expect(VatM8Zk0Ns.file.call(byteQDZ3U8N, bytekD06IAh, uintCnT2jac, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatM8Zk0Ns = await Vat.new({from: accounts[4]});
		const uintFMrZuZ = BigInt("824")
		const byteGcW4jKu = "0x0b0906151f1a191104101f071e1c030f0d040003161c01151c050d191904190d"
		const bytebq607a6 = "0x1e040f1506080c021d0307040affffffff0b160d1c1e1815051311160205041c1d201f"
		const intkA7sSt4 = BigInt("1883")
		const intcbiGxLD = BigInt("1740")
		const addressHXPADE1 = accounts[5]
		const addressVmHc2pN = accounts[5]
		const addresseQV6VDs = "0x0000000000000000000000000000000000000001"
		const bytecB3ls6v = "0x0a0707121e0e0c0b061504181b0b010b14191a151314160804021902060c1e20"
		const uintUJKtBtz = BigInt("632")
		const addresspagjU2 = accounts[4]
		const addresssnn4GL = "0x0000000000000000000000000000000000000001"
		const uintKT7CRaZ = BigInt("1498")
		const bytes32Hvf2Eq8 = await VatM8Zk0Ns.file.call(bytebq607a6, byteGcW4jKu, uintFMrZuZ, {from: accounts[4]});
		const bytes32OQ4jBb = await VatM8Zk0Ns.grab.call(bytecB3ls6v, addresseQV6VDs, addressVmHc2pN, addressHXPADE1, intcbiGxLD, intkA7sSt4, {from: accounts[0]});
		const addressRIRvCqb = await VatM8Zk0Ns.suck.call(addresssnn4GL, addresspagjU2, uintUJKtBtz, {from: accounts[3]});
		const uintAx1G6kg = await VatM8Zk0Ns.heal.call(uintKT7CRaZ, {from: accounts[1]});

		await expect(VatM8Zk0Ns.file.call(bytebq607a6, byteGcW4jKu, uintFMrZuZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatM8Zk0Ns = await Vat.new({from: accounts[4]});
		const intBEQdMEH = BigInt("-1374")
		const addresswAUTVv8 = accounts[0]
		const byteXy2Kdqh = "0x07141f1900030f1f0a1203181911070a120516010f191b070d011c050f001c1f"
		const uintDb9VM7T = BigInt("824")
		const bytesVx9WV9 = "0x0b0906151f1a191104101f071e1c030f0d040003161c01151c050d191904190d"
		const byteoFBIiEi = "0x1e040f1506080c021d0307040a010b160d1c1e1815051311160205041c1d201f"
		const uintj02M7m4 = BigInt("632")
		const addresstOughpU = accounts[4]
		const addressZM5StmN = "0x0000000000000000000000000000000000000001"
		const bytes32Bxj0abd = await VatM8Zk0Ns.fold.call(byteXy2Kdqh, addresswAUTVv8, intBEQdMEH, {from: accounts[4]});
		const bytes32Hvf2Eq8 = await VatM8Zk0Ns.file.call(byteoFBIiEi, bytesVx9WV9, uintDb9VM7T, {from: accounts[4]});
		const addressRIRvCqb = await VatM8Zk0Ns.suck.call(addressZM5StmN, addresstOughpU, uintj02M7m4, {from: accounts[3]});

		await expect(VatM8Zk0Ns.fold.call(byteXy2Kdqh, addresswAUTVv8, intBEQdMEH, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Vat', async () => {
		const VatZ9Zvs6G = await Vat.new({from: accounts[4]});
		const uintPRTm98 = BigInt("950")
		const byteRcHnWL = "0x1609161e19001e1f151c16050c1f090a1c1e1a04001a19070c01160613101307"
		const byteqbqKAQa = "0x1c061b1515121b061a1a1f1ffffffffc02110b130e11200a1306200d10061e1a001f05"
		const intc22ITe7 = BigInt("1608")
		const intSuRm0MQ = BigInt("-317")
		const addressPZQ3cn = accounts[3]
		const address4oxKYU = "0x0000000000000000000000000000000000000001"
		const addressB6JlTkz = accounts[3]
		const byteBsCWdJ3 = "0x151314101b16101001110a1709130a040a09050a160f021e0c1200030c141308"
		const intQprXS6l = BigInt("703")
		const intF7fr1GY = BigInt("-705")
		const addressFgVkOig = accounts[0]
		const addresszxm7Mcq = accounts[0]
		const addressH0U4hQU = accounts[5]
		const bytewFXnsLi = "0x10121e0c020f040a0a0c0e16092013141e1a120d0509120115091b1f0700111e"
		const addresswuaVK89 = accounts[2]
		const intYlKSHZE = BigInt("-1859")
		const addressKyC3gxA = accounts[3]
		const byteAswdHQP = "0x140920140e0b0d0611041c02080109181c200a0a0e1a040d0f03190f1e121113"
		const bytes32in6H5CB = await VatZ9Zvs6G.file.call(byteqbqKAQa, byteRcHnWL, uintPRTm98, {from: accounts[4]});
		const bytes32bpK3s20 = await VatZ9Zvs6G.grab.call(byteBsCWdJ3, addressB6JlTkz, address4oxKYU, addressPZQ3cn, intSuRm0MQ, intc22ITe7, {from: accounts[0]});
		const bytes32UIXMpGH = await VatZ9Zvs6G.grab.call(bytewFXnsLi, addressH0U4hQU, addresszxm7Mcq, addressFgVkOig, intF7fr1GY, intQprXS6l, {from: accounts[4]});
		const addressKp7udSB = await VatZ9Zvs6G.deny.call(addresswuaVK89, {from: accounts[4]});
		const bytes32yM06mqu = await VatZ9Zvs6G.fold.call(byteAswdHQP, addressKyC3gxA, intYlKSHZE, {from: accounts[1]});

		await expect(VatZ9Zvs6G.file.call(byteqbqKAQa, byteRcHnWL, uintPRTm98, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})