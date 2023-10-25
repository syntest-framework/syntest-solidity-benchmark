const LIBERAPAY = artifacts.require("LIBERAPAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LIBERAPAY', (accounts) => {
	it('test for LIBERAPAY', async () => {
		const LIBERAPAYWPYhbQQ = await LIBERAPAY.new({from: accounts[3]});
		const uintS9dipfL = BigInt("1546")
		const addressrPDJmOV = accounts[4]
		const uintsE3ckwl = BigInt("470")
		const addressIpqVaYI = accounts[1]
		const uintfZsBAT4 = BigInt("1392")
		const addressxP1Dv1g = accounts[3]
		const booloKtori = await LIBERAPAYWPYhbQQ.acceptOwnership.call({from: accounts[1]});
		const boolq6RLyH4 = await LIBERAPAYWPYhbQQ.unlock.call(addressrPDJmOV, uintS9dipfL, {from: accounts[4]});
		const boolzqkaJe = await LIBERAPAYWPYhbQQ.distribute.call(addressIpqVaYI, uintsE3ckwl, {from: accounts[4]});
		const boolVuXsYCo = await LIBERAPAYWPYhbQQ.burn.call(uintfZsBAT4, {from: accounts[3]});
		await LIBERAPAYWPYhbQQ.whenPaused.call({from: accounts[3]});
		const uint256vOOlLN = await LIBERAPAYWPYhbQQ.balanceOf.call(addressxP1Dv1g, {from: accounts[4]});

		await expect(LIBERAPAYWPYhbQQ.acceptOwnership.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYEQ2wKB = await LIBERAPAY.new({from: accounts[4]});
		const uintmSlr4ts = BigInt("1606")
		const addressO53FHZO = accounts[1]
		const uint256nDNNmzE = await LIBERAPAYEQ2wKB.getNowTime.call({from: accounts[3]});
		const boolajO6TEG = await LIBERAPAYEQ2wKB.distribute.call(addressO53FHZO, uintmSlr4ts, {from: accounts[1]});
		const boolhniExLj = await LIBERAPAYEQ2wKB.acceptOwnership.call({from: accounts[0]});
		const boolg7Xj4C0 = await LIBERAPAYEQ2wKB.acceptOwnership.call({from: accounts[3]});

		assert.equal(uint256nDNNmzE, BigInt("1630229929"))
		await expect(LIBERAPAYEQ2wKB.distribute.call(addressO53FHZO, uintmSlr4ts, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYSSI14k9 = await LIBERAPAY.new({from: accounts[2]});
		const addressfNBmaM9 = accounts[4]
		const addressZfNYlhs = accounts[1]
		const addressnBvHd8 = accounts[3]
		const addresspMq08y = await LIBERAPAYSSI14k9.notFrozen.call(addressfNBmaM9, {from: accounts[3]});
		const uint256tIclgE8 = await LIBERAPAYSSI14k9.balanceOf.call(addressZfNYlhs, {from: accounts[3]});
		const addressqNDSl79 = await LIBERAPAYSSI14k9.transferOwnership.call(addressnBvHd8, {from: accounts[2]});

		await expect(LIBERAPAYSSI14k9.notFrozen.call(addressfNBmaM9, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfI4AmKt = await LIBERAPAY.new({from: accounts[1]});
		const uintld7t1oM = BigInt("1372")
		const addressYQotTo = accounts[4]
		const uint256zXXmf6o = await LIBERAPAYfI4AmKt.getNowTime.call({from: accounts[2]});
		const boolRmyktha = await LIBERAPAYfI4AmKt.increaseAllowance.call(addressYQotTo, uintld7t1oM, {from: accounts[2]});

		assert.equal(boolRmyktha, true)
		assert.equal(uint256zXXmf6o, BigInt("1630229934"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYYLH2eYi = await LIBERAPAY.new({from: accounts[0]});
		const uint256kdrJ6qA = await LIBERAPAYYLH2eYi.totalSupply.call({from: accounts[3]});
		const uint256FCAeYGs = await LIBERAPAYYLH2eYi.getNowTime.call({from: accounts[0]});
		const uint256Bj1jOqv = await LIBERAPAYYLH2eYi.getNowTime.call({from: accounts[3]});

		assert.equal(uint256Bj1jOqv, BigInt("1630229932"))
		assert.equal(uint256FCAeYGs, BigInt("1630229932"))
		assert.equal(uint256kdrJ6qA, BigInt("3000000000000000000000000000"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYqdu19Pr = await LIBERAPAY.new({from: accounts[4]});
		const addresswsbVzSR = accounts[3]
		const addressN1KwAIs = accounts[0]
		const uintPCUNKZ = BigInt("1659")
		const addressXSB3nOK = accounts[0]
		const addressOSQrJOy = await LIBERAPAYqdu19Pr.transferOwnership.call(addresswsbVzSR, {from: accounts[4]});
		const boolzzCUSpV = await LIBERAPAYqdu19Pr.unfreezeAccount.call(addressN1KwAIs, {from: accounts[4]});
		const boolu4LobOT = await LIBERAPAYqdu19Pr.decreaseAllowance.call(addressXSB3nOK, uintPCUNKZ, {from: accounts[3]});
		await LIBERAPAYqdu19Pr.unpause.call({from: accounts[0]});

		await expect(LIBERAPAYqdu19Pr.unfreezeAccount.call(addressN1KwAIs, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYW70WE8j = await LIBERAPAY.new({from: accounts[0]});
		const uintFHDz756 = BigInt("507")
		const addressARSRWo7 = accounts[1]
		const uintGNdXNC = BigInt("463")
		const uintn4mO4Wg = BigInt("1613")
		const addressFTzAsj = accounts[3]
		const address1WXqU5 = "0x0000000000000000000000000000000000000001"
		const booloOxDC6 = await LIBERAPAYW70WE8j.increaseAllowance.call(addressARSRWo7, uintFHDz756, {from: accounts[3]});
		const boolN9sc2Yj = await LIBERAPAYW70WE8j.lock.call(addressFTzAsj, uintn4mO4Wg, uintGNdXNC, {from: accounts[0]});
		const addressGNqwM3H = await LIBERAPAYW70WE8j.transferOwnership.call(address1WXqU5, {from: accounts[4]});

		assert.equal(booloOxDC6, true)
		await expect(LIBERAPAYW70WE8j.lock.call(addressFTzAsj, uintn4mO4Wg, uintGNdXNC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcwKAwnb = await LIBERAPAY.new({from: accounts[3]});
		const addressv4FmXMs = accounts[4]
		const addressxsS9DdD = "0x0000000000000000000000000000000000000001"
		const uintulK58J4 = BigInt("249")
		const addressWlfW6kD = accounts[4]
		const uintfg28CIi = BigInt("26")
		const addressf4KjS5v = accounts[5]
		const uinthdGAkl = BigInt("1435")
		const uintnqbhAd2 = BigInt("1057")
		const addressgQClTPg = accounts[3]
		const uint256BRuUV5h = await LIBERAPAYcwKAwnb.currentBalanceOf.call(addressv4FmXMs, {from: accounts[2]});
		const addressY5P16XR = await LIBERAPAYcwKAwnb.notFrozen.call(addressxsS9DdD, {from: accounts[3]});
		const boolnpNb1PF = await LIBERAPAYcwKAwnb.increaseAllowance.call(addressWlfW6kD, uintulK58J4, {from: accounts[1]});
		await LIBERAPAYcwKAwnb.whenNotPaused.call({from: accounts[3]});
		const boolNzwK7hV = await LIBERAPAYcwKAwnb.increaseAllowance.call(addressf4KjS5v, uintfg28CIi, {from: accounts[2]});
		const boolXD8SVEI = await LIBERAPAYcwKAwnb.lock.call(addressgQClTPg, uintnqbhAd2, uinthdGAkl, {from: accounts[0]});

		assert.equal(uint256BRuUV5h, BigInt("0"))
		await expect(LIBERAPAYcwKAwnb.notFrozen.call(addressxsS9DdD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcwKAwnb = await LIBERAPAY.new({from: accounts[3]});
		const addressbcL7kn = accounts[4]
		const addressyAa5R5J = "0x0000000000000000000000000000000000000002"
		const uintpQQhyf = BigInt("249")
		const addresscT4mm7A = accounts[4]
		const uintS22nk6D = BigInt("26")
		const addressuDv4JKt = accounts[5]
		const uint256BRuUV5h = await LIBERAPAYcwKAwnb.currentBalanceOf.call(addressbcL7kn, {from: accounts[2]});
		await LIBERAPAYcwKAwnb.f.call({from: accounts[1]});
		const addressY5P16XR = await LIBERAPAYcwKAwnb.notFrozen.call(addressyAa5R5J, {from: accounts[3]});
		await LIBERAPAYcwKAwnb.f.call({from: accounts[4]});
		const boolnpNb1PF = await LIBERAPAYcwKAwnb.increaseAllowance.call(addresscT4mm7A, uintpQQhyf, {from: accounts[1]});
		await LIBERAPAYcwKAwnb.whenNotPaused.call({from: accounts[3]});
		await LIBERAPAYcwKAwnb.whenPaused.call({from: accounts[1]});
		const boolNzwK7hV = await LIBERAPAYcwKAwnb.increaseAllowance.call(addressuDv4JKt, uintS22nk6D, {from: accounts[2]});

		assert.equal(uint256BRuUV5h, BigInt("0"))
		await expect(LIBERAPAYcwKAwnb.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYKzOKOx = await LIBERAPAY.new({from: accounts[2]});
		const addresshsfrli = accounts[3]
		const addressvtwOokj = accounts[4]
		const uintE0yFchb = BigInt("1177")
		const addresskWg3iLy = accounts[4]
		const uintVyk7FLO = BigInt("927")
		const addressJ6eEOJq = accounts[1]
		const uint256kimxYu = await LIBERAPAYKzOKOx.allowance.call(addressvtwOokj, addresshsfrli, {from: "0x0000000000000000000000000000000000000001"});
		const boolVvOolXy = await LIBERAPAYKzOKOx.decreaseAllowance.call(addresskWg3iLy, uintE0yFchb, {from: accounts[0]});
		const booliqG8Mh6 = await LIBERAPAYKzOKOx.distribute.call(addressJ6eEOJq, uintVyk7FLO, {from: accounts[4]});
		await LIBERAPAYKzOKOx.unpause.call({from: accounts[4]});
		await LIBERAPAYKzOKOx.f.call({from: accounts[4]});

		assert.equal(uint256kimxYu, BigInt("0"))
		await expect(LIBERAPAYKzOKOx.decreaseAllowance.call(addresskWg3iLy, uintE0yFchb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYnfQHbYD = await LIBERAPAY.new({from: accounts[2]});
		const uintlOG5lYT = BigInt("1606")
		const addressbTFr7Wc = accounts[1]
		const addressrVpydJL = accounts[2]
		const addressuZ4RpgK = accounts[5]
		const addressuodB6HT = "0x0000000000000000000000000000000000000001"
		const addressPN7jw0H = accounts[0]
		const addressIALn1W = accounts[0]
		const boolJgYD0vR = await LIBERAPAYnfQHbYD.approve.call(addressbTFr7Wc, uintlOG5lYT, {from: accounts[0]});
		const booliEqJta = await LIBERAPAYnfQHbYD.freezeAccount.call(addressrVpydJL, {from: accounts[2]});
		const address4pS7ee = await LIBERAPAYnfQHbYD.transferOwnership.call(addressuZ4RpgK, {from: accounts[3]});
		const addressszbMfFB = await LIBERAPAYnfQHbYD.notFrozen.call(addressuodB6HT, {from: accounts[2]});
		const uint256xCEErLw = await LIBERAPAYnfQHbYD.allowance.call(addressIALn1W, addressPN7jw0H, {from: accounts[4]});

		assert.equal(boolJgYD0vR, true)
		assert.equal(booliEqJta, true)
		await expect(LIBERAPAYnfQHbYD.transferOwnership.call(addressuZ4RpgK, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcwKAwnb = await LIBERAPAY.new({from: accounts[3]});
		const addressmau2pvF = accounts[4]
		const uintcNDWdPY = BigInt("1719")
		const addresscU2VZkr = accounts[2]
		const uintXwqtDYi = BigInt("244")
		const addressCTp6CYJ = accounts[4]
		const address8KJHdD = accounts[0]
		const addresssOOepJk = accounts[3]
		const uintf2StBNz = BigInt("26")
		const addressuKNfxKz = accounts[5]
		const uinthmW0SQK = BigInt("1438")
		const uintClAkYXI = BigInt("1057")
		const addressnOWU39S = accounts[3]
		const uint256BRuUV5h = await LIBERAPAYcwKAwnb.currentBalanceOf.call(addressmau2pvF, {from: accounts[2]});
		await LIBERAPAYcwKAwnb.showLockState.call(addresscU2VZkr, uintcNDWdPY, {from: accounts[1]});
		const boolnpNb1PF = await LIBERAPAYcwKAwnb.increaseAllowance.call(addressCTp6CYJ, uintXwqtDYi, {from: accounts[1]});
		const uint256CAJl4dX = await LIBERAPAYcwKAwnb.allowance.call(addresssOOepJk, address8KJHdD, {from: accounts[1]});
		await LIBERAPAYcwKAwnb.whenNotPaused.call({from: accounts[3]});
		const boolNzwK7hV = await LIBERAPAYcwKAwnb.increaseAllowance.call(addressuKNfxKz, uintf2StBNz, {from: accounts[2]});
		const boolXD8SVEI = await LIBERAPAYcwKAwnb.lock.call(addressnOWU39S, uintClAkYXI, uinthmW0SQK, {from: accounts[0]});

		assert.equal(uint256BRuUV5h, BigInt("0"))
		await expect(LIBERAPAYcwKAwnb.showLockState.call(addresscU2VZkr, uintcNDWdPY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcwKAwnb = await LIBERAPAY.new({from: accounts[3]});
		const addressgXiUeRw = accounts[4]
		const uintPqd3qsv = BigInt("1280")
		const addressCS29Kn3 = accounts[4]
		const addressy3yW6jy = accounts[0]
		const addressAOuavWa = "0x0000000000000000000000000000000000000001"
		const uintfBBQ5qa = BigInt("249")
		const addressAu2fFPq = accounts[4]
		const uintLOV20Eb = BigInt("1254")
		const addressy86Kh30 = accounts[4]
		const uintyjyhErr = BigInt("26")
		const addressy37DNq = accounts[5]
		const addressjANzn4Q = "0x0000000000000000000000000000000000000001"
		const uintNpHbyy4 = BigInt("1435")
		const uintvUXxdYg = BigInt("1047")
		const addresslvF54Mo = accounts[3]
		const addressoe4sL6v = "0x0000000000000000000000000000000000000001"
		const uint256BRuUV5h = await LIBERAPAYcwKAwnb.currentBalanceOf.call(addressgXiUeRw, {from: accounts[2]});
		const boolVukbrt = await LIBERAPAYcwKAwnb.transferFrom.call(addressy3yW6jy, addressCS29Kn3, uintPqd3qsv, {from: accounts[1]});
		const addressY5P16XR = await LIBERAPAYcwKAwnb.notFrozen.call(addressAOuavWa, {from: accounts[3]});
		const boolnpNb1PF = await LIBERAPAYcwKAwnb.increaseAllowance.call(addressAu2fFPq, uintfBBQ5qa, {from: accounts[1]});
		await LIBERAPAYcwKAwnb.whenNotPaused.call({from: accounts[3]});
		const bool9WPgeX = await LIBERAPAYcwKAwnb.burnFrom.call(addressy86Kh30, uintLOV20Eb, {from: accounts[1]});
		const boolNzwK7hV = await LIBERAPAYcwKAwnb.increaseAllowance.call(addressy37DNq, uintyjyhErr, {from: accounts[2]});
		const addresstw9xanM = await LIBERAPAYcwKAwnb.transferOwnership.call(addressjANzn4Q, {from: accounts[0]});
		const boolXD8SVEI = await LIBERAPAYcwKAwnb.lock.call(addresslvF54Mo, uintvUXxdYg, uintNpHbyy4, {from: accounts[0]});
		const uint256GTnEmFm = await LIBERAPAYcwKAwnb.currentBalanceOf.call(addressoe4sL6v, {from: accounts[4]});

		assert.equal(uint256BRuUV5h, BigInt("0"))
		await expect(LIBERAPAYcwKAwnb.transferFrom.call(addressy3yW6jy, addressCS29Kn3, uintPqd3qsv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcwKAwnb = await LIBERAPAY.new({from: accounts[3]});
		const addressV1krhFL = accounts[4]
		const addressZxIqHdo = accounts[5]
		const addressJjABIdA = "0x0000000000000000000000000000000000000002"
		const uintSYfp7Ch = BigInt("249")
		const addressoK5Ajvr = accounts[4]
		const uintNmlMMP8 = BigInt("26")
		const addressaM9mEn8 = accounts[5]
		const uint256BRuUV5h = await LIBERAPAYcwKAwnb.currentBalanceOf.call(addressV1krhFL, {from: accounts[2]});
		const uint256zwnEIaX = await LIBERAPAYcwKAwnb.balanceOf.call(addressZxIqHdo, {from: accounts[4]});
		await LIBERAPAYcwKAwnb.f.call({from: accounts[1]});
		const addressY5P16XR = await LIBERAPAYcwKAwnb.notFrozen.call(addressJjABIdA, {from: accounts[3]});
		await LIBERAPAYcwKAwnb.f.call({from: accounts[4]});
		const boolnpNb1PF = await LIBERAPAYcwKAwnb.increaseAllowance.call(addressoK5Ajvr, uintSYfp7Ch, {from: accounts[1]});
		await LIBERAPAYcwKAwnb.whenNotPaused.call({from: accounts[3]});
		await LIBERAPAYcwKAwnb.whenPaused.call({from: accounts[1]});
		const boolNzwK7hV = await LIBERAPAYcwKAwnb.increaseAllowance.call(addressaM9mEn8, uintNmlMMP8, {from: accounts[2]});

		assert.equal(uint256BRuUV5h, BigInt("0"))
		assert.equal(uint256zwnEIaX, BigInt("0"))
		await expect(LIBERAPAYcwKAwnb.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcwKAwnb = await LIBERAPAY.new({from: accounts[3]});
		const uintlDXvytt = BigInt("764")
		const addresswN1eEzM = accounts[4]
		const addresso147iLh = accounts[4]
		const addressV6iY6ZD = "0x0000000000000000000000000000000000000001"
		const uintZKNPDVa = BigInt("249")
		const addressUZmyU0W = accounts[4]
		const uintu3tGMpG = BigInt("26")
		const addressvqx9wDA = accounts[5]
		const booli2gIAy = await LIBERAPAYcwKAwnb.distribute.call(addresswN1eEzM, uintlDXvytt, {from: accounts[3]});
		const uint256BRuUV5h = await LIBERAPAYcwKAwnb.currentBalanceOf.call(addresso147iLh, {from: accounts[2]});
		await LIBERAPAYcwKAwnb.f.call({from: accounts[1]});
		const addressY5P16XR = await LIBERAPAYcwKAwnb.notFrozen.call(addressV6iY6ZD, {from: accounts[3]});
		await LIBERAPAYcwKAwnb.f.call({from: accounts[4]});
		const boolnpNb1PF = await LIBERAPAYcwKAwnb.increaseAllowance.call(addressUZmyU0W, uintZKNPDVa, {from: accounts[1]});
		await LIBERAPAYcwKAwnb.whenNotPaused.call({from: accounts[3]});
		await LIBERAPAYcwKAwnb.whenPaused.call({from: accounts[1]});
		await LIBERAPAYcwKAwnb.whenPaused.call({from: accounts[4]});
		const boolNzwK7hV = await LIBERAPAYcwKAwnb.increaseAllowance.call(addressvqx9wDA, uintu3tGMpG, {from: accounts[2]});

		assert.equal(booli2gIAy, true)
		assert.equal(uint256BRuUV5h, BigInt("0"))
		await expect(LIBERAPAYcwKAwnb.f.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfI4AmKt = await LIBERAPAY.new({from: accounts[1]});
		const uintvFKZCMf = BigInt("1408")
		const addressXLRCDiZ = accounts[4]
		const uintPnu8N4 = BigInt("218")
		const addressp1kYAR4 = "0x0000000000000000000000000000000000000001"
		const boolRmyktha = await LIBERAPAYfI4AmKt.increaseAllowance.call(addressXLRCDiZ, uintvFKZCMf, {from: accounts[2]});
		const boolITklndm = await LIBERAPAYfI4AmKt.burnFrom.call(addressp1kYAR4, uintPnu8N4, {from: accounts[5]});

		assert.equal(boolRmyktha, true)
		await expect(LIBERAPAYfI4AmKt.burnFrom.call(addressp1kYAR4, uintPnu8N4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYlSS8V1 = await LIBERAPAY.new({from: accounts[3]});
		const uinttoxYbMT = BigInt("807")
		const addressmkby6fb = accounts[4]
		const uintujIRGRK = BigInt("61")
		const addressXGkGaa = accounts[1]
		const uintnrDWRhd = BigInt("1920")
		const addressbQMuJwd = accounts[4]
		const uintHf1Vguy = BigInt("225")
		const addressSVGxCmt = accounts[2]
		const boolid5gKxL = await LIBERAPAYlSS8V1.approve.call(addressmkby6fb, uinttoxYbMT, {from: accounts[3]});
		const booltds6ciH = await LIBERAPAYlSS8V1.increaseAllowance.call(addressXGkGaa, uintujIRGRK, {from: accounts[2]});
		await LIBERAPAYlSS8V1.pause.call({from: accounts[3]});
		const boolch8xYr3 = await LIBERAPAYlSS8V1.burnFrom.call(addressbQMuJwd, uintnrDWRhd, {from: accounts[2]});
		const boolNOgfjkB = await LIBERAPAYlSS8V1.burn.call(uintHf1Vguy, {from: accounts[0]});
		const boolkzKyRyy = await LIBERAPAYlSS8V1.unfreezeAccount.call(addressSVGxCmt, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolid5gKxL, true)
		assert.equal(booltds6ciH, true)
		await expect(LIBERAPAYlSS8V1.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYH8bL7nR = await LIBERAPAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTOqdkN3 = BigInt("297")
		const addressxxwTtV9 = accounts[4]
		const addressKsuENDA = "0x0000000000000000000000000000000000000001"
		const boolzr08kzS = await LIBERAPAYH8bL7nR.transferFrom.call(addressKsuENDA, addressxxwTtV9, uintTOqdkN3, {from: accounts[3]});
		await LIBERAPAYH8bL7nR.whenNotPaused.call({from: accounts[4]});
		await LIBERAPAYH8bL7nR.unpause.call({from: accounts[2]});
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYfI4AmKt = await LIBERAPAY.new({from: accounts[1]});
		const uintsP1rn4K = BigInt("1868")
		const addressx9Cbagv = accounts[0]
		const addresslca4gz = accounts[0]
		const uintNATIHaL = BigInt("1868")
		const addressuMYXstN = accounts[4]
		const boolg1SSTIk = await LIBERAPAYfI4AmKt.transfer.call(addressx9Cbagv, uintsP1rn4K, {from: accounts[4]});
		const uint256XotpbIA = await LIBERAPAYfI4AmKt.balanceOf.call(addresslca4gz, {from: accounts[2]});
		const boolRmyktha = await LIBERAPAYfI4AmKt.increaseAllowance.call(addressuMYXstN, uintNATIHaL, {from: accounts[2]});

		await expect(LIBERAPAYfI4AmKt.transfer.call(addressx9Cbagv, uintsP1rn4K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYsiEZiiK = await LIBERAPAY.new({from: accounts[0]});
		const uintHVkMNip = BigInt("1043")
		const addressMetx9DC = accounts[5]
		const addressCbyNLlt = accounts[4]
		const boolwbgamqX = await LIBERAPAYsiEZiiK.unlock.call(addressMetx9DC, uintHVkMNip, {from: accounts[0]});
		const boolEYYLz3Y = await LIBERAPAYsiEZiiK.unfreezeAccount.call(addressCbyNLlt, {from: accounts[4]});

		await expect(LIBERAPAYsiEZiiK.unlock.call(addressMetx9DC, uintHVkMNip, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcwKAwnb = await LIBERAPAY.new({from: accounts[3]});
		const addressdjCxa5l = accounts[6]
		const addresstIl6srz = accounts[3]
		const uint256BRuUV5h = await LIBERAPAYcwKAwnb.currentBalanceOf.call(addressdjCxa5l, {from: accounts[2]});
		const addressfVe53C2 = await LIBERAPAYcwKAwnb.upgradeTo.call(addresstIl6srz, {from: accounts[3]});

		assert.equal(uint256BRuUV5h, BigInt("0"))
	});

	it('test for LIBERAPAY', async () => {
		const LIBERAPAYcwKAwnb = await LIBERAPAY.new({from: accounts[3]});
		const uintZ6V1q1 = BigInt("200")
		const addressuWML5QO = accounts[4]
		const uintpqgA1VD = BigInt("1093")
		const addressYMgH4bn = accounts[5]
		const addressGvQLNq = accounts[3]
		await LIBERAPAYcwKAwnb.showLockState.call(addressuWML5QO, uintZ6V1q1, {from: accounts[1]});
		const booldtfaN6n = await LIBERAPAYcwKAwnb.burn.call(uintpqgA1VD, {from: accounts[3]});
		const uint256BRuUV5h = await LIBERAPAYcwKAwnb.currentBalanceOf.call(addressYMgH4bn, {from: accounts[2]});
		const uint256sVgmlT3 = await LIBERAPAYcwKAwnb.currentBalanceOf.call(addressGvQLNq, {from: accounts[1]});

		await expect(LIBERAPAYcwKAwnb.showLockState.call(addressuWML5QO, uintZ6V1q1, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})