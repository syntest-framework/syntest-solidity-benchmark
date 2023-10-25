const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressrmjGM3 = accounts[0]
		const FompPLyS06k = await Fomp.new(addressrmjGM3, {from: accounts[3]});
		const byteo88DkVG = "0x171f1e0c071c0001080b0e1f1717141b1c0215140f001a0e131f021012020708"
		const bytevYqZkPE = "0x160f0e1d0a16031c1f1d0d0e06150e091206120a04011d1606171d040a0f1112"
		const uintAuo72oo = BigInt("194")
		const uintQWyIxHB = BigInt("2031")
		const uintTRNbVQn = BigInt("1122")
		const addressKBnzxw6 = accounts[3]
		const addressS3hU9s = accounts[4]
		const addressvaGYEQ3 = await FompPLyS06k.delegateBySig.call(addressKBnzxw6, uintTRNbVQn, uintQWyIxHB, uintAuo72oo, bytevYqZkPE, byteo88DkVG, {from: accounts[1]});
		const uintsqySfxU = await FompPLyS06k.balanceOf.call(addressS3hU9s, {from: accounts[4]});

		await expect(FompPLyS06k.delegateBySig.call(addressKBnzxw6, uintTRNbVQn, uintQWyIxHB, uintAuo72oo, bytevYqZkPE, byteo88DkVG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressgNpagEZ = accounts[3]
		const FompJaw1TbW = await Fomp.new(addressgNpagEZ, {from: accounts[2]});
		const addressCeFkG3x = accounts[2]
		const uintpD4Fx5O = BigInt("973")
		const addressICWoJLw = accounts[0]
		const uintDaggqpy = BigInt("994")
		const addressECdtD8C = accounts[1]
		const uint96CCCqmeW = await FompJaw1TbW.getCurrentVotes.call(addressCeFkG3x, {from: accounts[3]});
		const uint96FpaZsX3 = await FompJaw1TbW.getPriorVotes.call(addressICWoJLw, uintpD4Fx5O, {from: accounts[4]});
		const boolcSJQ1A9 = await FompJaw1TbW.transfer.call(addressECdtD8C, uintDaggqpy, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint96CCCqmeW, BigInt("0"))
		assert.equal(uint96FpaZsX3, BigInt("0"))
		await expect(FompJaw1TbW.transfer.call(addressECdtD8C, uintDaggqpy, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressx8leb9G = accounts[0]
		const FompQ3Ylnq = await Fomp.new(addressx8leb9G, {from: accounts[2]});
		const addressts6H58G = accounts[0]
		const uintjZ02D6 = BigInt("1307")
		const addressFDcmawH = accounts[1]
		const uintJGuvjW = BigInt("995")
		const addressnMgjLTt = accounts[3]
		const addressvRf1HuT = await FompQ3Ylnq.delegate.call(addressts6H58G, {from: accounts[5]});
		const booldgMI0Gp = await FompQ3Ylnq.transfer.call(addressFDcmawH, uintjZ02D6, {from: accounts[0]});
		const boolHKG5oOB = await FompQ3Ylnq.approve.call(addressnMgjLTt, uintJGuvjW, {from: accounts[2]});

		assert.equal(boolHKG5oOB, true)
		assert.equal(booldgMI0Gp, true)
	});

	it('test for Fomp', async () => {
		const addresss4yPB7N = accounts[2]
		const FompRxqTu72 = await Fomp.new(addresss4yPB7N, {from: "0x0000000000000000000000000000000000000001"});
		const addressgPSXWI5 = accounts[2]
		const addressPqlUnFT = accounts[2]
		const addressJBeZdbZ = accounts[1]
		const uintxcaukwv = BigInt("1637")
		const addressk0ka7lB = accounts[2]
		const uintv5Jz8AA = await FompRxqTu72.balanceOf.call(addressgPSXWI5, {from: accounts[2]});
		const uintf1gMD2z = await FompRxqTu72.balanceOf.call(addressPqlUnFT, {from: accounts[1]});
		const uintxEuMOkX = await FompRxqTu72.balanceOf.call(addressJBeZdbZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolGpzJV0m = await FompRxqTu72.approve.call(addressk0ka7lB, uintxcaukwv, {from: accounts[3]});
	});

	it('test for Fomp', async () => {
		const addressKYXwgTT = accounts[3]
		const FompBpi4bhL = await Fomp.new(addressKYXwgTT, {from: accounts[3]});
		const uinti8eN1l = BigInt("647")
		const addressZkMRgWI = accounts[3]
		const addresshTpBLUC = accounts[0]
		const addressbksjD6o = accounts[1]
		const addressUNUUD8A = accounts[3]
		const boolP0NzQed = await FompBpi4bhL.approve.call(addressZkMRgWI, uinti8eN1l, {from: accounts[1]});
		const addressQoG7E4A = await FompBpi4bhL.delegate.call(addresshTpBLUC, {from: accounts[5]});
		const uintMnydQ61 = await FompBpi4bhL.balanceOf.call(addressbksjD6o, {from: accounts[5]});
		const uintGLKaDDj = await FompBpi4bhL.balanceOf.call(addressUNUUD8A, {from: accounts[3]});

		assert.equal(boolP0NzQed, true)
		assert.equal(uintGLKaDDj, BigInt("1000000000000000000000000"))
		assert.equal(uintMnydQ61, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addresswjpOrzt = accounts[3]
		const FomphhBabdp = await Fomp.new(addresswjpOrzt, {from: accounts[4]});
		const addresslITEBi = accounts[2]
		const addressy18TrEU = accounts[2]
		const addressxJJxHcr = "0x0000000000000000000000000000000000000001"
		const addressAd6Bfup = accounts[2]
		const addressAbmAHl = accounts[0]
		const addresswXwtjfu = await FomphhBabdp.delegate.call(addresslITEBi, {from: accounts[2]});
		const uintMfZkzbm = await FomphhBabdp.allowance.call(addressxJJxHcr, addressy18TrEU, {from: accounts[4]});
		const uintt1YxkEv = await FomphhBabdp.allowance.call(addressAbmAHl, addressAd6Bfup, {from: accounts[2]});

		assert.equal(uintMfZkzbm, BigInt("0"))
		assert.equal(uintt1YxkEv, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressa3ClzIR = accounts[3]
		const FompJaw1TbW = await Fomp.new(addressa3ClzIR, {from: accounts[2]});
		const addressZZk8Az = accounts[2]
		const uintoGmNeMm = BigInt("994")
		const address7O5sxd = accounts[2]
		const uint96CCCqmeW = await FompJaw1TbW.getCurrentVotes.call(addressZZk8Az, {from: accounts[3]});
		const boolcSJQ1A9 = await FompJaw1TbW.transfer.call(address7O5sxd, uintoGmNeMm, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint96CCCqmeW, BigInt("0"))
		await expect(FompJaw1TbW.transfer.call(address7O5sxd, uintoGmNeMm, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresspSqYwuM = accounts[0]
		const FompPLyS06k = await Fomp.new(addresspSqYwuM, {from: accounts[3]});
		const addressYYmm1Zk = accounts[0]
		const uintHU9Lzai = BigInt("1725")
		const addresselsnTQQ = accounts[3]
		const uintDAeDh2l = BigInt("152")
		const addressqQtqYpd = accounts[1]
		const uintOuHzAdr = BigInt("2042")
		const addressWBiqrr = "0x0000000000000000000000000000000000000001"
		const addressm4eLimE = accounts[2]
		const addressKCjB0mh = "0x0000000000000000000000000000000000000001"
		const addressb57oEkl = accounts[2]
		const uintsqySfxU = await FompPLyS06k.balanceOf.call(addressYYmm1Zk, {from: accounts[4]});
		const boolJCWCK2j = await FompPLyS06k.approve.call(addresselsnTQQ, uintHU9Lzai, {from: accounts[0]});
		const boolkRFxS0n = await FompPLyS06k.approve.call(addressqQtqYpd, uintDAeDh2l, {from: accounts[1]});
		const booltNg2k4z = await FompPLyS06k.transferFrom.call(addressm4eLimE, addressWBiqrr, uintOuHzAdr, {from: accounts[0]});
		const uintAoFOMTL = await FompPLyS06k.allowance.call(addressb57oEkl, addressKCjB0mh, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolJCWCK2j, true)
		assert.equal(boolkRFxS0n, true)
		assert.equal(uintsqySfxU, BigInt("1000000000000000000000000"))
		await expect(FompPLyS06k.transferFrom.call(addressm4eLimE, addressWBiqrr, uintOuHzAdr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressbUihdnL = accounts[0]
		const FompPLyS06k = await Fomp.new(addressbUihdnL, {from: accounts[3]});
		const addressGtEkln7 = accounts[0]
		const uintldjAKS4 = BigInt("78")
		const addressEwNRpts = accounts[1]
		const addresslAzvroe = accounts[4]
		const uintTkHUyS = BigInt("1142")
		const addressHHYBsmp = accounts[0]
		const uinthCFENOk = BigInt("365")
		const addressKZ8A5cc = accounts[2]
		const uintsqySfxU = await FompPLyS06k.balanceOf.call(addressGtEkln7, {from: accounts[4]});
		const bool2ZevLG = await FompPLyS06k.approve.call(addressEwNRpts, uintldjAKS4, {from: accounts[1]});
		const addresskh18dE = await FompPLyS06k.delegate.call(addresslAzvroe, {from: accounts[0]});
		const boolkRFxS0n = await FompPLyS06k.approve.call(addressHHYBsmp, uintTkHUyS, {from: accounts[1]});
		const boolWLuGmec = await FompPLyS06k.approve.call(addressKZ8A5cc, uinthCFENOk, {from: accounts[0]});

		assert.equal(bool2ZevLG, true)
		assert.equal(boolWLuGmec, true)
		assert.equal(boolkRFxS0n, true)
		assert.equal(uintsqySfxU, BigInt("1000000000000000000000000"))
	});

	it('test for Fomp', async () => {
		const addressGNIJ0vI = accounts[0]
		const FompPLyS06k = await Fomp.new(addressGNIJ0vI, {from: accounts[3]});
		const uintoUNEEW3 = BigInt("51")
		const addressacIDrmu = accounts[3]
		const bytetpFqZVX = "0x171f1e0c071c0001080b0e1f1714141b1c0215140f001a0e131f021012020708"
		const bytezvkls1f = "0x160f0e1d0a16031c1f1d0d0e06150e091206120a04011d1606171d040a0f1112"
		const uintxV5VeS = BigInt("240")
		const uintvDGsirg = BigInt("2031")
		const uintVVdZLeV = BigInt("1122")
		const addresssbfX7NC = accounts[3]
		const addressylr8Bf5 = accounts[1]
		const byteSpBcza = "0x200a040a180412160e01132012140f1f101e071606060a08061e1c0f1313110e"
		const bytewfrJXHQ = "0x09191e0a0f100411161011061014171312150b011405201f1e07181a02191713"
		const uintLBh7Sg = BigInt("177")
		const uintDkprOL1 = BigInt("1818")
		const uintPh5Kg6M = BigInt("1186")
		const addressoxoatbI = accounts[2]
		const uint96oioeXYr = await FompPLyS06k.getPriorVotes.call(addressacIDrmu, uintoUNEEW3, {from: accounts[2]});
		const addressvaGYEQ3 = await FompPLyS06k.delegateBySig.call(addresssbfX7NC, uintVVdZLeV, uintvDGsirg, uintxV5VeS, bytezvkls1f, bytetpFqZVX, {from: accounts[1]});
		const uintrb8LG9Q = await FompPLyS06k.balanceOf.call(addressylr8Bf5, {from: accounts[2]});
		const addressNP1FPjW = await FompPLyS06k.delegateBySig.call(addressoxoatbI, uintPh5Kg6M, uintDkprOL1, uintLBh7Sg, bytewfrJXHQ, byteSpBcza, {from: accounts[1]});

		assert.equal(uint96oioeXYr, BigInt("0"))
		await expect(FompPLyS06k.delegateBySig.call(addresssbfX7NC, uintVVdZLeV, uintvDGsirg, uintxV5VeS, bytezvkls1f, bytetpFqZVX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressfJFexo = accounts[0]
		const FompPLyS06k = await Fomp.new(addressfJFexo, {from: accounts[3]});
		const uintupaWi11 = BigInt("154")
		const addresskk74qg = accounts[2]
		const bytehSh2bk = "0x171f1e0c071c0001080b0e1f1717141b1c0215140f001a0e131fffffffff1012020708"
		const byteGBg6MAn = "0x160f0e1d0a16031c1f1d0d0e06150e091206120a04011d1606171d040a0f1112"
		const uintEf7D6Dq = BigInt("240")
		const uintIZKP1TX = BigInt("2031")
		const uintKT1Hhmg = BigInt("1122")
		const addressyIH4sch = accounts[3]
		const booliMR2J4 = await FompPLyS06k.approve.call(addresskk74qg, uintupaWi11, {from: accounts[5]});
		const addressvaGYEQ3 = await FompPLyS06k.delegateBySig.call(addressyIH4sch, uintKT1Hhmg, uintIZKP1TX, uintEf7D6Dq, byteGBg6MAn, bytehSh2bk, {from: accounts[1]});

		assert.equal(booliMR2J4, true)
		await expect(FompPLyS06k.delegateBySig.call(addressyIH4sch, uintKT1Hhmg, uintIZKP1TX, uintEf7D6Dq, byteGBg6MAn, bytehSh2bk, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const address31Qhua = accounts[0]
		const FompPLyS06k = await Fomp.new(address31Qhua, {from: accounts[3]});
		const byteqt8oqXQ = "0x171f1e0c071c0001080b0e1f1717141b1c0215140f001a0e131f021012fffffffd0708"
		const bytelGgDBU2 = "0x160f0e1d0a16031c1f1d0d0e06150e091206120a04011d1606171d040a0f1112"
		const uintcd3EoH0 = BigInt("240")
		const uintQa2Mzr3 = BigInt("2031")
		const uintgTEAVp = BigInt("1122")
		const addressvNZtJz5 = accounts[0]
		const addressvaGYEQ3 = await FompPLyS06k.delegateBySig.call(addressvNZtJz5, uintgTEAVp, uintQa2Mzr3, uintcd3EoH0, bytelGgDBU2, byteqt8oqXQ, {from: accounts[1]});

		await expect(FompPLyS06k.delegateBySig.call(addressvNZtJz5, uintgTEAVp, uintQa2Mzr3, uintcd3EoH0, bytelGgDBU2, byteqt8oqXQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressbZ5j4gL = accounts[0]
		const FompPLyS06k = await Fomp.new(addressbZ5j4gL, {from: accounts[3]});
		const uintbaQqn9S = BigInt("51")
		const addressmDLp5V = accounts[1]
		const byteGnFvk5L = "0x0b11121c1a080903161a141b1c170a070606151b0b14110c0d1514150809030e"
		const bytebNyLZjS = "0x0f1408060b0e0e1c09061b0b1c141e0719190f020b03110e0217180f1f0e0f19"
		const uintGwpV3T = BigInt("28")
		const uintEDvsLcN = BigInt("202")
		const uintiFh9U3r = BigInt("1319")
		const address3cDNJg = accounts[1]
		const uint96oioeXYr = await FompPLyS06k.getPriorVotes.call(addressmDLp5V, uintbaQqn9S, {from: accounts[2]});
		const addressPae7RN5 = await FompPLyS06k.delegateBySig.call(address3cDNJg, uintiFh9U3r, uintEDvsLcN, uintGwpV3T, bytebNyLZjS, byteGnFvk5L, {from: accounts[5]});

		assert.equal(uint96oioeXYr, BigInt("0"))
		await expect(FompPLyS06k.delegateBySig.call(address3cDNJg, uintiFh9U3r, uintEDvsLcN, uintGwpV3T, bytebNyLZjS, byteGnFvk5L, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})