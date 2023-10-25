const Fomp = artifacts.require("Fomp");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Fomp', (accounts) => {
	it('test for Fomp', async () => {
		const addressem5uy4 = accounts[4]
		const FompGdoByH = await Fomp.new(addressem5uy4, {from: "0x0000000000000000000000000000000000000001"});
		const uintz4A1k1D = BigInt("575")
		const addressgcbyENG = accounts[2]
		const uintfgAx821 = BigInt("171")
		const addressnph5AJt = accounts[4]
		const addressizNAxEC = accounts[0]
		const addressncCsN4b = accounts[5]
		const uintgQW9ZXh = BigInt("1888")
		const addressO6lvqu8 = "0x0000000000000000000000000000000000000001"
		const addressuhOy6EZ = accounts[2]
		const booldwTnQQk = await FompGdoByH.transfer.call(addressgcbyENG, uintz4A1k1D, {from: accounts[0]});
		const boolJiDgWrj = await FompGdoByH.transferFrom.call(addressizNAxEC, addressnph5AJt, uintfgAx821, {from: accounts[0]});
		const uint963PZ9oO = await FompGdoByH.getCurrentVotes.call(addressncCsN4b, {from: accounts[4]});
		const booliG056YG = await FompGdoByH.transfer.call(addressO6lvqu8, uintgQW9ZXh, {from: accounts[2]});
		const uintUzMfjyl = await FompGdoByH.balanceOf.call(addressuhOy6EZ, {from: accounts[0]});
	});

	it('test for Fomp', async () => {
		const addressKBTXX1 = accounts[2]
		const Fompu6okuBS = await Fomp.new(addressKBTXX1, {from: accounts[1]});
		const addressDkbaMWI = accounts[4]
		const uintvGepG8v = BigInt("452")
		const addresswDTewn = accounts[4]
		const addressGXg3kxo = accounts[1]
		const addressT3vtb5 = accounts[0]
		const uintLY6r6iZ = BigInt("667")
		const addressGYUD889 = accounts[0]
		const uintplMpMgj = BigInt("1195")
		const addressQDFQxgM = accounts[3]
		const addresshH14wJu = await Fompu6okuBS.delegate.call(addressDkbaMWI, {from: accounts[4]});
		const boolRZgaXC5 = await Fompu6okuBS.transfer.call(addresswDTewn, uintvGepG8v, {from: accounts[3]});
		const uintsiT62hS = await Fompu6okuBS.allowance.call(addressT3vtb5, addressGXg3kxo, {from: accounts[0]});
		const uint96v8mWaXN = await Fompu6okuBS.getPriorVotes.call(addressGYUD889, uintLY6r6iZ, {from: accounts[0]});
		const boolrelQHOh = await Fompu6okuBS.transfer.call(addressQDFQxgM, uintplMpMgj, {from: accounts[1]});

		await expect(Fompu6okuBS.transfer.call(addresswDTewn, uintvGepG8v, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressNpzanBe = accounts[3]
		const FomphCyfx1v = await Fomp.new(addressNpzanBe, {from: accounts[2]});
		const byteSqnIIrU = "0x180e0c100c11141c0113031808050105130d1b1e1820190d1a00170206051906"
		const byteNDSP9nW = "0x091b040d1218001920071517090d141a0e1c1f0405031a161e100913050f090a"
		const uintEhPP04H = BigInt("117")
		const uintoIVgio = BigInt("1931")
		const uintl3teDOw = BigInt("1817")
		const addressfdME5L6 = accounts[4]
		const uintBfhx4gN = BigInt("241")
		const addressoVO1TQ3 = accounts[4]
		const uintySTvaxi = BigInt("1241")
		const addressTVzDQyw = accounts[5]
		const addressywaCSNF = await FomphCyfx1v.delegateBySig.call(addressfdME5L6, uintl3teDOw, uintoIVgio, uintEhPP04H, byteNDSP9nW, byteSqnIIrU, {from: accounts[3]});
		const boolqxClqKQ = await FomphCyfx1v.transfer.call(addressoVO1TQ3, uintBfhx4gN, {from: "0x0000000000000000000000000000000000000001"});
		const uint96Ljk5Gio = await FomphCyfx1v.getPriorVotes.call(addressTVzDQyw, uintySTvaxi, {from: accounts[4]});

		await expect(FomphCyfx1v.delegateBySig.call(addressfdME5L6, uintl3teDOw, uintoIVgio, uintEhPP04H, byteNDSP9nW, byteSqnIIrU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addressRB4zf7Q = accounts[1]
		const FompEU5KTZD = await Fomp.new(addressRB4zf7Q, {from: accounts[3]});
		const addressDagWxLf = accounts[2]
		const uintTjS8Szy = BigInt("535")
		const addressLVOUSGf = accounts[4]
		const uintKarjt6c = BigInt("693")
		const addresskCf12O = accounts[0]
		const uintRucfG3P = BigInt("1990")
		const addressPBDREJ = accounts[3]
		const addressm6RzhS3 = accounts[4]
		const uintK0wPGhw = await FompEU5KTZD.balanceOf.call(addressDagWxLf, {from: accounts[2]});
		const boolyDHpw4r = await FompEU5KTZD.transfer.call(addressLVOUSGf, uintTjS8Szy, {from: accounts[1]});
		const boolhsHR4Oz = await FompEU5KTZD.transfer.call(addresskCf12O, uintKarjt6c, {from: accounts[1]});
		const boolzlued8 = await FompEU5KTZD.transferFrom.call(addressm6RzhS3, addressPBDREJ, uintRucfG3P, {from: accounts[1]});

		assert.equal(boolhsHR4Oz, true)
		assert.equal(boolyDHpw4r, true)
		assert.equal(uintK0wPGhw, BigInt("0"))
		await expect(FompEU5KTZD.transferFrom.call(addressm6RzhS3, addressPBDREJ, uintRucfG3P, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Fomp', async () => {
		const addresspvL6K8V = accounts[1]
		const FompVfffzoQ = await Fomp.new(addresspvL6K8V, {from: accounts[1]});
		const addresszCuKX4n = accounts[2]
		const addressGbHPz1R = accounts[2]
		const addressl5DsCNp = accounts[3]
		const addressFvOqHX1 = accounts[1]
		const uintCfYOAu = BigInt("94")
		const addressydlemwz = accounts[0]
		const addressEEFKguM = accounts[4]
		const addressaCwNEd8 = "0x0000000000000000000000000000000000000001"
		const uintMIahRsT = await FompVfffzoQ.allowance.call(addressGbHPz1R, addresszCuKX4n, {from: accounts[5]});
		const addressQTPkTDb = await FompVfffzoQ.delegate.call(addressl5DsCNp, {from: accounts[1]});
		const uintGgKctGU = await FompVfffzoQ.balanceOf.call(addressFvOqHX1, {from: accounts[4]});
		const uint96cNfhCyo = await FompVfffzoQ.getPriorVotes.call(addressydlemwz, uintCfYOAu, {from: accounts[5]});
		const uint0PJObc = await FompVfffzoQ.allowance.call(addressaCwNEd8, addressEEFKguM, {from: accounts[4]});

		assert.equal(uint0PJObc, BigInt("0"))
		assert.equal(uint96cNfhCyo, BigInt("0"))
		assert.equal(uintGgKctGU, BigInt("1000000000000000000000000"))
		assert.equal(uintMIahRsT, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressWlKS9OJ = accounts[0]
		const FompBIi7SlK = await Fomp.new(addressWlKS9OJ, {from: accounts[0]});
		const addressKz9UZi3 = accounts[2]
		const addressnmewlxR = accounts[3]
		const uintgqkdz9j = BigInt("1512")
		const addressjoWwJ6 = accounts[2]
		const uintLabVi6Q = BigInt("964")
		const addressVmpH8Iq = accounts[3]
		const addresskMpYsu7 = accounts[3]
		const uint96ufUUumE = await FompBIi7SlK.getCurrentVotes.call(addressKz9UZi3, {from: accounts[0]});
		const uintPJ9NW31 = await FompBIi7SlK.balanceOf.call(addressnmewlxR, {from: accounts[5]});
		const boolhMMIMyZ = await FompBIi7SlK.transfer.call(addressjoWwJ6, uintgqkdz9j, {from: accounts[0]});
		const boolbfwgJBz = await FompBIi7SlK.approve.call(addressVmpH8Iq, uintLabVi6Q, {from: accounts[3]});
		const uint96Gy6SVab = await FompBIi7SlK.getCurrentVotes.call(addresskMpYsu7, {from: accounts[2]});

		assert.equal(boolbfwgJBz, true)
		assert.equal(boolhMMIMyZ, true)
		assert.equal(uint96Gy6SVab, BigInt("0"))
		assert.equal(uint96ufUUumE, BigInt("0"))
		assert.equal(uintPJ9NW31, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressPTUoakj = accounts[1]
		const FompzsxwuQX = await Fomp.new(addressPTUoakj, {from: accounts[1]});
		const addressKUpemJn = accounts[5]
		const uintzupt6Bj = BigInt("113")
		const addressXxQjAsf = accounts[4]
		const addressk1gbcQ = accounts[0]
		const uintLykstoZ = BigInt("44")
		const addressSp1NKZR = accounts[2]
		const uint96EQBFaZu = await FompzsxwuQX.getCurrentVotes.call(addressKUpemJn, {from: accounts[3]});
		const uint96XMHuDXg = await FompzsxwuQX.getPriorVotes.call(addressXxQjAsf, uintzupt6Bj, {from: accounts[3]});
		const uint969amc43 = await FompzsxwuQX.getCurrentVotes.call(addressk1gbcQ, {from: accounts[4]});
		const boolN7qgxIe = await FompzsxwuQX.approve.call(addressSp1NKZR, uintLykstoZ, {from: accounts[4]});

		assert.equal(boolN7qgxIe, true)
		assert.equal(uint969amc43, BigInt("0"))
		assert.equal(uint96EQBFaZu, BigInt("0"))
		assert.equal(uint96XMHuDXg, BigInt("0"))
	});

	it('test for Fomp', async () => {
		const addressIlyI32 = accounts[2]
		const FompBj2Bv2v = await Fomp.new(addressIlyI32, {from: accounts[4]});
		const addressI4wY3x = accounts[4]
		const uintK3KEcu3 = BigInt("1")
		const addressmNKxWsk = accounts[0]
		const address5NzPPD = accounts[2]
		const byteFetfaJN = "0x1c1f121214120b1f0d120e051e0e161d040d000c0504130f021a1910081b1304"
		const bytepfnBRTU = "0x0f02140d1816011c07081b0b0816041b0806040c061c190515020e0f1f170f18"
		const uintoYsq3Kz = BigInt("27")
		const uintHM3k9Z4 = BigInt("1224")
		const uintglXSmSl = BigInt("478")
		const addressZdYVPci = "0x0000000000000000000000000000000000000001"
		const uintPGWrfi9 = BigInt("1648")
		const addressTxpr7kn = accounts[0]
		const uint962tjebu = await FompBj2Bv2v.getCurrentVotes.call(addressI4wY3x, {from: accounts[4]});
		const uint96cpZiUSo = await FompBj2Bv2v.getPriorVotes.call(addressmNKxWsk, uintK3KEcu3, {from: accounts[3]});
		const uint96IuPRcF9 = await FompBj2Bv2v.getCurrentVotes.call(address5NzPPD, {from: accounts[0]});
		const addressHUceIKY = await FompBj2Bv2v.delegateBySig.call(addressZdYVPci, uintglXSmSl, uintHM3k9Z4, uintoYsq3Kz, bytepfnBRTU, byteFetfaJN, {from: accounts[2]});
		const boollo16QFb = await FompBj2Bv2v.approve.call(addressTxpr7kn, uintPGWrfi9, {from: accounts[5]});

		assert.equal(uint962tjebu, BigInt("0"))
		assert.equal(uint96IuPRcF9, BigInt("0"))
		assert.equal(uint96cpZiUSo, BigInt("0"))
		await expect(FompBj2Bv2v.delegateBySig.call(addressZdYVPci, uintglXSmSl, uintHM3k9Z4, uintoYsq3Kz, bytepfnBRTU, byteFetfaJN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})