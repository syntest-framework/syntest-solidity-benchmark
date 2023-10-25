const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringfPGh1JH = "46T9Uwb3ytcWXlchBwKiRJ8vszHorfD3lA9qEcY8i9UcYfTOSoW"
		const stringV6OZRvd = "Kot47RwCk7hMClzKy16zbN5AUNyzWPnGXPtOBgfjVCS6utxo3yo4aG1j"
		const uintz5eCLED = BigInt("38")
		const DSPs2lz6M = await DSP.new(stringfPGh1JH, stringV6OZRvd, uintz5eCLED, {from: accounts[0]});
		const addresslPaBQal = "0x0000000000000000000000000000000000000001"
		const boolRjSt6s = await DSPs2lz6M.isOwner.call(addresslPaBQal, {from: accounts[0]});
		const stringGCVhTJ = await DSPs2lz6M.name.call({from: accounts[2]});
	});

	it('test for DSP', async () => {
		const DSPJ8XhDKC = await DSP.new({from: accounts[0]});
//		await DSPJ8XhDKC.pause.call({from: accounts[1]});
//		const boolXUKzRNy = await DSPJ8XhDKC.paused.call({from: accounts[1]});

		await expect(DSPJ8XhDKC.pause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPGAWbP7a = await DSP.new({from: accounts[2]});
		const uintPJ9cbIc = BigInt("438")
		const addressKI6YcUi = accounts[2]
		const uintuMl4tsw = BigInt("1958")
		const uintrWck7n = BigInt("1321")
		const addressUnTvo3 = accounts[5]
		const address3A8e70 = accounts[1]
		const uinty8lB37r = BigInt("311")
		const addressSUr3iJ = accounts[0]
		const boolacbCpnt = await DSPGAWbP7a.approve.call(addressKI6YcUi, uintPJ9cbIc, {from: accounts[1]});
//		const boolFewmGLR = await DSPGAWbP7a.lock.call(addressUnTvo3, uintrWck7n, uintuMl4tsw, {from: accounts[3]});
//		const boolz0mXAHu = await DSPGAWbP7a.paused.call({from: accounts[1]});
//		const boolZymtv0O = await DSPGAWbP7a.unfreezeAccount.call(address3A8e70, {from: accounts[4]});
//		const boolcjvye9j = await DSPGAWbP7a.acceptOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolUKzkdEf = await DSPGAWbP7a.approve.call(addressSUr3iJ, uinty8lB37r, {from: accounts[2]});

		assert.equal(boolacbCpnt, true)
		await expect(DSPGAWbP7a.lock.call(addressUnTvo3, uintrWck7n, uintuMl4tsw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuRgIua = await DSP.new({from: accounts[1]});
		const uintNA7S0f4 = BigInt("984")
		const addressRa2SLxy = accounts[3]
		const addressoqjeO1n = "0x0000000000000000000000000000000000000001"
		const uintsohb1zx = BigInt("1604")
		const addresso4O0Kj = accounts[4]
		const addressXuEhpPG = accounts[3]
		const uintui4rzvY = BigInt("1400")
		const addressvKdwdgz = accounts[2]
		const stringZsAn6xM = await DSPuRgIua.name.call({from: accounts[4]});
//		const booljenYIKr = await DSPuRgIua.transferFrom.call(addressoqjeO1n, addressRa2SLxy, uintNA7S0f4, {from: accounts[2]});
//		const booltKaHtto = await DSPuRgIua.transferFrom.call(addressXuEhpPG, addresso4O0Kj, uintsohb1zx, {from: accounts[4]});
//		const boolxNVNqcs = await DSPuRgIua.unlock.call(addressvKdwdgz, uintui4rzvY, {from: accounts[2]});

		assert.equal(stringZsAn6xM, "DSP")
		await expect(DSPuRgIua.transferFrom.call(addressoqjeO1n, addressRa2SLxy, uintNA7S0f4, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSP5kUant = await DSP.new({from: accounts[1]});
		const addressh4vuags = accounts[3]
		const addressjt1cGIK = accounts[1]
		const addressMKx0dki = accounts[2]
		const addressJDGJklm = accounts[4]
		const addressljGtpYA = await DSP5kUant.addPauser.call(addressh4vuags, {from: accounts[1]});
//		await DSP5kUant.renouncePauser.call({from: accounts[1]});
//		const uint25695zUb4 = await DSP5kUant.allowance.call(addressMKx0dki, addressjt1cGIK, {from: "0x0000000000000000000000000000000000000001"});
//		const boolQAFpnR0 = await DSP5kUant.acceptOwnership.call({from: accounts[4]});
//		const addressOefLkQi = await DSP5kUant.addPauser.call(addressJDGJklm, {from: accounts[0]});

		await expect(DSP5kUant.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPzDGYtOj = await DSP.new({from: accounts[0]});
		const addressBSrT1hF = accounts[3]
		const addressE78HLAm = "0x0000000000000000000000000000000000000001"
//		const addresscfozUV1 = await DSPzDGYtOj.removePauser.call(addressBSrT1hF, {from: accounts[0]});
//		const addressLJGWVF = await DSPzDGYtOj.upgradeTo.call(addressE78HLAm, {from: accounts[0]});

		await expect(DSPzDGYtOj.removePauser.call(addressBSrT1hF, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPB9qJgTX = await DSP.new({from: accounts[4]});
		const addressEOp4PfO = accounts[2]
		const uinthKjgVhE = BigInt("1249")
		const addressBXcC2pD = accounts[3]
		const addressDr6kfIF = accounts[0]
		const uintefY7D7t = BigInt("1126")
		const addressvg232c = "0x0000000000000000000000000000000000000001"
		const uintQc5jau7 = BigInt("1854")
		const uintGZP8Fn0 = BigInt("310")
		const addressaYriEE8 = accounts[4]
		const addressBni3LOO = accounts[0]
		const uint256yBJaZCc = await DSPB9qJgTX.balanceOf.call(addressEOp4PfO, {from: accounts[0]});
		const boolVGLWXhF = await DSPB9qJgTX.increaseAllowance.call(addressBXcC2pD, uinthKjgVhE, {from: accounts[2]});
		const boolNw3omkN = await DSPB9qJgTX.isPauser.call(addressDr6kfIF, {from: accounts[2]});
//		const boolTClMeoW = await DSPB9qJgTX.transfer.call(addressvg232c, uintefY7D7t, {from: accounts[0]});
//		const boolJrOIaFI = await DSPB9qJgTX.lock.call(addressaYriEE8, uintGZP8Fn0, uintQc5jau7, {from: "0x0000000000000000000000000000000000000001"});
//		const addressGophlar = await DSPB9qJgTX.addPauser.call(addressBni3LOO, {from: accounts[5]});

		assert.equal(boolNw3omkN, false)
		assert.equal(boolVGLWXhF, true)
		assert.equal(uint256yBJaZCc, BigInt("0"))
		await expect(DSPB9qJgTX.transfer.call(addressvg232c, uintefY7D7t, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPhSXiNSG = await DSP.new({from: accounts[3]});
		const uintZlAoJ61 = BigInt("1796")
		const addressWUslioQ = accounts[5]
		const addressFuXeJ7h = accounts[3]
		const uintR5RqP9z = BigInt("366")
		const addressi0AEmMa = accounts[2]
		const addressjOv4nZd = accounts[0]
		const boolZmeGsQZ = await DSPhSXiNSG.paused.call({from: "0x0000000000000000000000000000000000000001"});
//		const booluShRTeC = await DSPhSXiNSG.burnFrombyOwner.call(addressWUslioQ, uintZlAoJ61, {from: accounts[2]});
//		const uint256Ymw4w96 = await DSPhSXiNSG.balanceOf.call(addressFuXeJ7h, {from: accounts[4]});
//		const boolMW89UAX = await DSPhSXiNSG.transferFrom.call(addressjOv4nZd, addressi0AEmMa, uintR5RqP9z, {from: accounts[0]});

		assert.equal(boolZmeGsQZ, false)
		await expect(DSPhSXiNSG.burnFrombyOwner.call(addressWUslioQ, uintZlAoJ61, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjonbfV = await DSP.new({from: accounts[2]});
		const uintAKe3Dyj = BigInt("1867")
		const addresseGX1yWk = accounts[5]
		const addresshodYJLY = "0x0000000000000000000000000000000000000001"
		const boolnAYfLc = await DSPjonbfV.transfer.call(addresseGX1yWk, uintAKe3Dyj, {from: accounts[2]});
//		await DSPjonbfV.whenNotPaused.call({from: accounts[2]});
//		const addressqfuIUJY = await DSPjonbfV.removePauser.call(addresshodYJLY, {from: accounts[0]});

		assert.equal(boolnAYfLc, true)
		await expect(DSPjonbfV.whenNotPaused.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjonbfV = await DSP.new({from: accounts[2]});
		const uintXHSIg0k = BigInt("1867")
		const addressJEeBeoy = accounts[5]
		const uintjxcMAQm = BigInt("771")
		const addressiTmhnSE = "0x0000000000000000000000000000000000000001"
		const addressPgAJUet = "0x0000000000000000000000000000000000000001"
		const boolnAYfLc = await DSPjonbfV.transfer.call(addressJEeBeoy, uintXHSIg0k, {from: accounts[2]});
//		await DSPjonbfV.f.call({from: accounts[5]});
//		const boolebWkWLs = await DSPjonbfV.transfer.call(addressiTmhnSE, uintjxcMAQm, {from: accounts[0]});
//		const addressqfuIUJY = await DSPjonbfV.removePauser.call(addressPgAJUet, {from: accounts[0]});

		assert.equal(boolnAYfLc, true)
		await expect(DSPjonbfV.f.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjonbfV = await DSP.new({from: accounts[2]});
		const uintmQfMe2 = BigInt("1871")
		const addressgj7eZ1 = accounts[7]
		const boolnAYfLc = await DSPjonbfV.transfer.call(addressgj7eZ1, uintmQfMe2, {from: accounts[2]});
		const uint256xh5Zgx1 = await DSPjonbfV.totalSupply.call({from: accounts[4]});

		assert.equal(boolnAYfLc, true)
		assert.equal(uint256xh5Zgx1, BigInt("100000000000000000000000000000"))
	});

	it('test for DSP', async () => {
		const DSPuRgIua = await DSP.new({from: accounts[1]});
		const uintGPLmh4k = BigInt("148")
		const addressYHmurUd = accounts[4]
		const uintCFyHUNh = BigInt("984")
		const addressclw4QZO = accounts[3]
		const addressTBsT634 = "0x0000000000000000000000000000000000000001"
		const uintqiXmyNn = BigInt("1604")
		const addressqxLJz0C = accounts[4]
		const addressVy0dMk8 = accounts[3]
		const uintnl7iBfb = BigInt("1400")
		const addressA3lqsCJ = accounts[2]
		const uintaMvLnkc = BigInt("1497")
		const uintynqtTNI = BigInt("131")
		const addressMUNiEsG = accounts[2]
//		const boolfCHO6dB = await DSPuRgIua.unlock.call(addressYHmurUd, uintGPLmh4k, {from: accounts[1]});
//		const booljenYIKr = await DSPuRgIua.transferFrom.call(addressTBsT634, addressclw4QZO, uintCFyHUNh, {from: accounts[2]});
//		const booltKaHtto = await DSPuRgIua.transferFrom.call(addressVy0dMk8, addressqxLJz0C, uintqiXmyNn, {from: accounts[4]});
//		const boolxNVNqcs = await DSPuRgIua.unlock.call(addressA3lqsCJ, uintnl7iBfb, {from: accounts[2]});
//		const boolfPTkvF = await DSPuRgIua.transferWithLock.call(addressMUNiEsG, uintynqtTNI, uintaMvLnkc, {from: accounts[0]});

		await expect(DSPuRgIua.unlock.call(addressYHmurUd, uintGPLmh4k, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPB9qJgTX = await DSP.new({from: accounts[4]});
		const addressZd9c7aJ = accounts[2]
		const addressSgossRT = accounts[4]
		const uintGGv21nz = BigInt("1721")
		const addressi7Ghtu = accounts[2]
		const uintwrvMBm2 = BigInt("1249")
		const addressRt4oYod = accounts[4]
		const addressBDmp3w5 = accounts[0]
		const uintZZ6QtqI = BigInt("1854")
		const uintxzm2NjX = BigInt("310")
		const addressDisWvxc = accounts[4]
		const addressQRcilNb = accounts[0]
		const uint256yBJaZCc = await DSPB9qJgTX.balanceOf.call(addressZd9c7aJ, {from: accounts[0]});
//		const boolLtYDVNh = await DSPB9qJgTX.unfreezeAccount.call(addressSgossRT, {from: accounts[4]});
//		const boolYhQyrm = await DSPB9qJgTX.mint.call(addressi7Ghtu, uintGGv21nz, {from: accounts[3]});
//		const boolVGLWXhF = await DSPB9qJgTX.increaseAllowance.call(addressRt4oYod, uintwrvMBm2, {from: accounts[2]});
//		const boolNw3omkN = await DSPB9qJgTX.isPauser.call(addressBDmp3w5, {from: accounts[2]});
//		const boolJrOIaFI = await DSPB9qJgTX.lock.call(addressDisWvxc, uintxzm2NjX, uintZZ6QtqI, {from: "0x0000000000000000000000000000000000000001"});
//		const addressGophlar = await DSPB9qJgTX.addPauser.call(addressQRcilNb, {from: accounts[5]});

		assert.equal(uint256yBJaZCc, BigInt("0"))
		await expect(DSPB9qJgTX.unfreezeAccount.call(addressSgossRT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjonbfV = await DSP.new({from: accounts[2]});
		const uintoI8NwBv = BigInt("1867")
		const addresshaijYcD = accounts[8]
//		await DSPjonbfV.pause.call({from: accounts[2]});
//		const boolnAYfLc = await DSPjonbfV.transfer.call(addresshaijYcD, uintoI8NwBv, {from: accounts[2]});

		await expect(DSPjonbfV.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjonbfV = await DSP.new({from: accounts[2]});
		const uintqX0KTi = BigInt("1867")
		const addresswBGsUwv = accounts[7]
		const uintET25wxJ = BigInt("556")
		const addressexxwwL = accounts[4]
		const addressE3Zmq5 = accounts[2]
		const boolnAYfLc = await DSPjonbfV.transfer.call(addresswBGsUwv, uintqX0KTi, {from: accounts[2]});
		const booli1TK05Y = await DSPjonbfV.mint.call(addressexxwwL, uintET25wxJ, {from: accounts[2]});
//		const addressiH4x0pn = await DSPjonbfV.addPauser.call(addressE3Zmq5, {from: accounts[2]});

		assert.equal(booli1TK05Y, true)
		assert.equal(boolnAYfLc, true)
		await expect(DSPjonbfV.addPauser.call(addressE3Zmq5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPuRgIua = await DSP.new({from: accounts[1]});
		const uintAxiPSc = BigInt("226")
		const addresshBDUq0K = accounts[2]
		const addressOhlWwpu = accounts[2]
		const stringoGvp4rU = await DSPuRgIua.symbol.call({from: accounts[1]});
//		const boolxNVNqcs = await DSPuRgIua.unlock.call(addresshBDUq0K, uintAxiPSc, {from: accounts[2]});
//		const addressH6LPnoi = await DSPuRgIua.transferOwnership.call(addressOhlWwpu, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringoGvp4rU, "DSP")
		await expect(DSPuRgIua.unlock.call(addresshBDUq0K, uintAxiPSc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPjonbfV = await DSP.new({from: accounts[2]});
		const addresspeCu2zG = accounts[3]
		const uintc2jAxkl = BigInt("1839")
		const addressUj344Hr = accounts[7]
		const addressNMFRZAa = accounts[2]
		const uint256gbnSXfZ = await DSPjonbfV.balanceOf.call(addresspeCu2zG, {from: "0x0000000000000000000000000000000000000001"});
		const boolnAYfLc = await DSPjonbfV.transfer.call(addressUj344Hr, uintc2jAxkl, {from: accounts[2]});
		const boolY6NFN4W = await DSPjonbfV.isOwner.call(addressNMFRZAa, {from: accounts[4]});

		assert.equal(boolY6NFN4W, true)
		assert.equal(boolnAYfLc, true)
		assert.equal(uint256gbnSXfZ, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPuRgIua = await DSP.new({from: accounts[1]});
		const uintblz8W51 = BigInt("984")
		const addressR856omo = accounts[3]
		const addressYbAH4m7 = "0x0000000000000000000000000000000000000001"
		const uint8J4GsrMb = await DSPuRgIua.decimals.call({from: accounts[5]});
//		const booljenYIKr = await DSPuRgIua.transferFrom.call(addressYbAH4m7, addressR856omo, uintblz8W51, {from: accounts[2]});
//		const boolcJ95zfB = await DSPuRgIua.paused.call({from: accounts[0]});
//		const stringsytglo = await DSPuRgIua.symbol.call({from: accounts[3]});

		assert.equal(uint8J4GsrMb, BigInt("18"))
		await expect(DSPuRgIua.transferFrom.call(addressYbAH4m7, addressR856omo, uintblz8W51, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPoAwEE4I = await DSP.new({from: accounts[1]});
		const uintweqP1Qz = BigInt("1873")
		const addressvd40njT = accounts[2]
		const uintiItVOvF = BigInt("602")
		const addresssJktrH = accounts[5]
		const addressjNdSvok = accounts[2]
		const addressgCq5H3Q = accounts[1]
		const uint256VCiwtEL = await DSPoAwEE4I.totalSupply.call({from: accounts[2]});
//		const booloBA2giJ = await DSPoAwEE4I.decreaseAllowance.call(addressvd40njT, uintweqP1Qz, {from: accounts[3]});
//		const boolZvNtR4d = await DSPoAwEE4I.transfer.call(addresssJktrH, uintiItVOvF, {from: accounts[0]});
//		await DSPoAwEE4I.whenNotPaused.call({from: accounts[2]});
//		const boolCSFh39Y = await DSPoAwEE4I.freezeAccount.call(addressjNdSvok, {from: accounts[3]});
//		const uint256niRk0ci = await DSPoAwEE4I.balanceOf.call(addressgCq5H3Q, {from: accounts[3]});

		assert.equal(uint256VCiwtEL, BigInt("100000000000000000000000000000"))
		await expect(DSPoAwEE4I.decreaseAllowance.call(addressvd40njT, uintweqP1Qz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPB9qJgTX = await DSP.new({from: accounts[4]});
		const addressP2K4s1g = accounts[5]
		const addressQHkKVL = accounts[5]
		const boolqp1cTif = await DSPB9qJgTX.paused.call({from: accounts[0]});
		const addressk5IkfI = await DSPB9qJgTX.upgradeTo.call(addressP2K4s1g, {from: accounts[4]});
		const uint256yBJaZCc = await DSPB9qJgTX.balanceOf.call(addressQHkKVL, {from: accounts[0]});

		assert.equal(boolqp1cTif, false)
		assert.equal(uint256yBJaZCc, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPuRgIua = await DSP.new({from: accounts[1]});
		const addressj3y0FuG = accounts[3]
		const addresskLIiYUp = accounts[1]
		const uintlodW3zN = BigInt("984")
		const addressy90nO7o = accounts[4]
		const addressnFXScET = "0x0000000000000000000000000000000000000001"
		const boolGjZePtE = await DSPuRgIua.freezeAccount.call(addressj3y0FuG, {from: accounts[1]});
//		const boolEkXVkEY = await DSPuRgIua.freezeAccount.call(addresskLIiYUp, {from: accounts[0]});
//		const boolZruZvrN = await DSPuRgIua.acceptOwnership.call({from: accounts[2]});
//		const booljenYIKr = await DSPuRgIua.transferFrom.call(addressnFXScET, addressy90nO7o, uintlodW3zN, {from: accounts[2]});
//		const stringsBvN8N2 = await DSPuRgIua.symbol.call({from: accounts[0]});

		assert.equal(boolGjZePtE, true)
		await expect(DSPuRgIua.freezeAccount.call(addresskLIiYUp, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPusjiT5c = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressjjuW5u5 = accounts[5]
		const addressf3gQRdu = accounts[0]
		const addressDScTSNM = "0x0000000000000000000000000000000000000001"
		await DSPusjiT5c.pause.call({from: accounts[3]});
		const booluZ4h72a = await DSPusjiT5c.isOwner.call(addressjjuW5u5, {from: accounts[3]});
		const addressAJ4VKmJ = await DSPusjiT5c.notFrozen.call(addressf3gQRdu, {from: accounts[1]});
		const boolsn7YEp = await DSPusjiT5c.freezeAccount.call(addressDScTSNM, {from: accounts[4]});
		await DSPusjiT5c.whenNotPaused.call({from: accounts[1]});
	});
})