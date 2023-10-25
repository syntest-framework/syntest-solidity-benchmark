const DSP = artifacts.require("DSP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DSP', (accounts) => {
	it('test for DSP', async () => {
		const stringg6nLa9f = "HEXWTz3re3CyNQIVEwKL4mQlg"
		const stringlgFO1tf = "iLwBcQ4JhPsAJyWZbwCvnkNaXIu"
		const uintlz9HMMO = BigInt("175")
		const DSPUYgasd = await DSP.new(stringg6nLa9f, stringlgFO1tf, uintlz9HMMO, {from: accounts[3]});
		const uintLcJunIT = BigInt("1892")
		const uintNl5zxlW = BigInt("952")
		const addressFLWHWvi = accounts[5]
		const uintla8rVJh = BigInt("985")
		const addressHbArjF0 = accounts[4]
		const addressU9EZU7l = "0x0000000000000000000000000000000000000001"
		const uintOgbUNv5 = BigInt("706")
		const addressZ7i4XDA = accounts[4]
		const addresshw9UUyQ = accounts[0]
		const addressFBxaSXf = accounts[0]
		const addressJqmh8ZX = accounts[4]
		const boolCgZ6gbm = await DSPUYgasd.lock.call(addressFLWHWvi, uintNl5zxlW, uintLcJunIT, {from: accounts[4]});
		const stringggvG1v4 = await DSPUYgasd.name.call({from: accounts[1]});
		const boolLmqGTg1 = await DSPUYgasd.transferFrom.call(addressU9EZU7l, addressHbArjF0, uintla8rVJh, {from: accounts[2]});
		const boolrALbHAH = await DSPUYgasd.transferFrom.call(addresshw9UUyQ, addressZ7i4XDA, uintOgbUNv5, {from: accounts[4]});
		const addressH33utZu = await DSPUYgasd.removePauser.call(addressFBxaSXf, {from: accounts[4]});
		const uint256O0tR2LN = await DSPUYgasd.balanceOf.call(addressJqmh8ZX, {from: accounts[3]});
	});

	it('test for DSP', async () => {
		const DSPYLhFQLh = await DSP.new({from: accounts[0]});
		const uintIPQJrXr = BigInt("1269")
		const address40jPri = accounts[2]
		const uintlNW15m = BigInt("1837")
		const addressLW9WSrT = accounts[3]
		const addresshdkRxaM = accounts[0]
		const addresstRZbQU = accounts[4]
		const stringwtVEv7K = await DSPYLhFQLh.symbol.call({from: accounts[1]});
//		const bool7kK6KS = await DSPYLhFQLh.mint.call(address40jPri, uintIPQJrXr, {from: accounts[3]});
//		const boolJjmov6 = await DSPYLhFQLh.transferFrom.call(addresshdkRxaM, addressLW9WSrT, uintlNW15m, {from: accounts[2]});
//		const boolzDer8xi = await DSPYLhFQLh.isOwner.call(addresstRZbQU, {from: accounts[0]});

		assert.equal(stringwtVEv7K, "DSP")
		await expect(DSPYLhFQLh.mint.call(address40jPri, uintIPQJrXr, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrnYzgQ6 = await DSP.new({from: accounts[0]});
		const addressMUphIwn = accounts[3]
		const uint256bQ4u7s0 = await DSPrnYzgQ6.balanceOf.call(addressMUphIwn, {from: accounts[0]});
		const boolkLiA4ey = await DSPrnYzgQ6.paused.call({from: accounts[2]});

		assert.equal(boolkLiA4ey, false)
		assert.equal(uint256bQ4u7s0, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPvf1MMH2 = await DSP.new({from: accounts[3]});
		const addressGm1fPlQ = accounts[4]
		const uint256GOPuDjE = await DSPvf1MMH2.totalSupply.call({from: accounts[3]});
		const uint256gyJ6ZbF = await DSPvf1MMH2.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressAnWnkhP = await DSPvf1MMH2.upgradeTo.call(addressGm1fPlQ, {from: accounts[5]});

		assert.equal(uint256GOPuDjE, BigInt("100000000000000000000000000000"))
		assert.equal(uint256gyJ6ZbF, BigInt("100000000000000000000000000000"))
		await expect(DSPvf1MMH2.upgradeTo.call(addressGm1fPlQ, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPnsEZJNK = await DSP.new({from: accounts[4]});
		const uintcLo4j1o = BigInt("1188")
		const addressoRvy2yG = accounts[4]
		const addressGImDztf = accounts[1]
//		await DSPnsEZJNK.onlyNewOwner.call({from: accounts[1]});
//		const boolir7OCrR = await DSPnsEZJNK.transfer.call(addressoRvy2yG, uintcLo4j1o, {from: accounts[0]});
//		const uint256jROxgtm = await DSPnsEZJNK.balanceOf.call(addressGImDztf, {from: accounts[4]});

		await expect(DSPnsEZJNK.onlyNewOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPKnbloWZ = await DSP.new({from: "0x0000000000000000000000000000000000000001"});
		const uinte1tQGSM = BigInt("1708")
		const uintu0XwSke = BigInt("849")
		const addressFVeoTF = "0x0000000000000000000000000000000000000001"
		const addresshC1yXHg = accounts[3]
		const addressETkMnHF = accounts[4]
		const addressbcHLIJy = accounts[5]
		await DSPKnbloWZ.unpause.call({from: accounts[5]});
		const boolCAPqxW = await DSPKnbloWZ.transferWithLock.call(addressFVeoTF, uintu0XwSke, uinte1tQGSM, {from: accounts[3]});
		const addresswmFds9x = await DSPKnbloWZ.removePauser.call(addresshC1yXHg, {from: accounts[4]});
		const boolRJ421lv = await DSPKnbloWZ.freezeAccount.call(addressETkMnHF, {from: accounts[3]});
		const boolRetOUAv = await DSPKnbloWZ.paused.call({from: accounts[1]});
		const uint256ritDM2f = await DSPKnbloWZ.balanceOf.call(addressbcHLIJy, {from: accounts[2]});
	});

	it('test for DSP', async () => {
		const DSPBGcEIJ = await DSP.new({from: accounts[5]});
		const addressV3ulxk0 = accounts[3]
		const addressjOz1pcI = accounts[2]
		const uint8GQ8kxBo = await DSPBGcEIJ.decimals.call({from: accounts[1]});
//		const boolPYZSmaA = await DSPBGcEIJ.unfreezeAccount.call(addressV3ulxk0, {from: accounts[0]});
//		const uint256fhkpdAE = await DSPBGcEIJ.balanceOf.call(addressjOz1pcI, {from: accounts[1]});

		assert.equal(uint8GQ8kxBo, BigInt("18"))
		await expect(DSPBGcEIJ.unfreezeAccount.call(addressV3ulxk0, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrnYzgQ6 = await DSP.new({from: accounts[0]});
		const addresswpsk5iL = accounts[3]
		const uinto75lDyf = BigInt("1279")
		const addressP83CFRX = accounts[2]
		const uint256bQ4u7s0 = await DSPrnYzgQ6.balanceOf.call(addresswpsk5iL, {from: accounts[0]});
		const boolkLiA4ey = await DSPrnYzgQ6.paused.call({from: accounts[2]});
//		await DSPrnYzgQ6.f.call({from: accounts[3]});
//		const boollhRXG53 = await DSPrnYzgQ6.transfer.call(addressP83CFRX, uinto75lDyf, {from: accounts[1]});

		assert.equal(boolkLiA4ey, false)
		assert.equal(uint256bQ4u7s0, BigInt("0"))
		await expect(DSPrnYzgQ6.f.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrnYzgQ6 = await DSP.new({from: accounts[0]});
		const addressYaPL1RD = accounts[4]
//		await DSPrnYzgQ6.renouncePauser.call({from: accounts[4]});
//		const uint256bQ4u7s0 = await DSPrnYzgQ6.balanceOf.call(addressYaPL1RD, {from: accounts[0]});
//		const stringyqvfMaf = await DSPrnYzgQ6.name.call({from: accounts[3]});

		await expect(DSPrnYzgQ6.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrnYzgQ6 = await DSP.new({from: accounts[0]});
		const addressaKoSMD = accounts[4]
		const addressXdSoFvZ = accounts[0]
		const uintDnyzRBX = BigInt("686")
		const uintXDunnG = BigInt("767")
		const addressXTdvRDy = accounts[1]
		const uint256bQ4u7s0 = await DSPrnYzgQ6.balanceOf.call(addressaKoSMD, {from: accounts[0]});
		const boolmBmayRa = await DSPrnYzgQ6.isOwner.call(addressXdSoFvZ, {from: accounts[1]});
		const boolkLiA4ey = await DSPrnYzgQ6.paused.call({from: accounts[2]});
//		await DSPrnYzgQ6.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolen77Coq = await DSPrnYzgQ6.lock.call(addressXTdvRDy, uintXDunnG, uintDnyzRBX, {from: accounts[5]});

		assert.equal(boolkLiA4ey, false)
		assert.equal(boolmBmayRa, true)
		assert.equal(uint256bQ4u7s0, BigInt("0"))
		await expect(DSPrnYzgQ6.onlyPauser.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrnYzgQ6 = await DSP.new({from: accounts[0]});
		const uintT6ohwTG = BigInt("491")
		const addresskcdrTLZ = accounts[2]
		const addressaJxYxh5 = accounts[1]
		const addressZoWksQ = accounts[4]
		const uint0FZKJF = BigInt("1782")
		const addressIDpo8e = accounts[0]
		const addresse2udq4q = accounts[2]
		const stringSgrxVM5 = await DSPrnYzgQ6.symbol.call({from: accounts[0]});
//		const bool48Pqbs = await DSPrnYzgQ6.transferFrom.call(addressaJxYxh5, addresskcdrTLZ, uintT6ohwTG, {from: accounts[5]});
//		const uint256bQ4u7s0 = await DSPrnYzgQ6.balanceOf.call(addressZoWksQ, {from: accounts[0]});
//		const boolxYorOJ = await DSPrnYzgQ6.transferFrom.call(addresse2udq4q, addressIDpo8e, uint0FZKJF, {from: accounts[1]});

		assert.equal(stringSgrxVM5, "DSP")
		await expect(DSPrnYzgQ6.transferFrom.call(addressaJxYxh5, addresskcdrTLZ, uintT6ohwTG, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrnYzgQ6 = await DSP.new({from: accounts[0]});
		const addressNSlBwAF = accounts[3]
		const addressW3XssoS = accounts[4]
		const addresslIK2khK = accounts[3]
		const uintlUciiIj = BigInt("93")
		const addressD5tmx9G = accounts[0]
		const uint256KZR6P2v = await DSPrnYzgQ6.allowance.call(addressW3XssoS, addressNSlBwAF, {from: accounts[0]});
		const uint256bQ4u7s0 = await DSPrnYzgQ6.balanceOf.call(addresslIK2khK, {from: accounts[0]});
		const boolzwadAL = await DSPrnYzgQ6.approve.call(addressD5tmx9G, uintlUciiIj, {from: accounts[4]});

		assert.equal(boolzwadAL, true)
		assert.equal(uint256KZR6P2v, BigInt("0"))
		assert.equal(uint256bQ4u7s0, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPrnYzgQ6 = await DSP.new({from: accounts[0]});
		const addressxAdt8cC = accounts[4]
		const addressLyUMgjf = accounts[0]
		const addressVtFhIEB = accounts[4]
		const uint256bQ4u7s0 = await DSPrnYzgQ6.balanceOf.call(addressxAdt8cC, {from: accounts[0]});
		const stringdmsedUf = await DSPrnYzgQ6.name.call({from: accounts[2]});
//		const boolFmKCP9j = await DSPrnYzgQ6.freezeAccount.call(addressLyUMgjf, {from: "0x0000000000000000000000000000000000000001"});
//		const addressnlHa322 = await DSPrnYzgQ6.transferOwnership.call(addressVtFhIEB, {from: accounts[1]});

		assert.equal(stringdmsedUf, "DSP")
		assert.equal(uint256bQ4u7s0, BigInt("0"))
		await expect(DSPrnYzgQ6.freezeAccount.call(addressLyUMgjf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrnYzgQ6 = await DSP.new({from: accounts[0]});
		const addressVA7STVM = accounts[4]
		const uintMvBBjZ = BigInt("1629")
		const addressoc0rXcP = accounts[2]
		const uint256bQ4u7s0 = await DSPrnYzgQ6.balanceOf.call(addressVA7STVM, {from: accounts[0]});
//		const booliPvPPO = await DSPrnYzgQ6.transfer.call(addressoc0rXcP, uintMvBBjZ, {from: "0x0000000000000000000000000000000000000001"});
//		const stringv71gvU2 = await DSPrnYzgQ6.symbol.call({from: accounts[0]});

		assert.equal(uint256bQ4u7s0, BigInt("0"))
		await expect(DSPrnYzgQ6.transfer.call(addressoc0rXcP, uintMvBBjZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrnYzgQ6 = await DSP.new({from: accounts[0]});
		const uintxGDQOMX = BigInt("1821")
		const addressBLG3v2Q = accounts[2]
		const addressiMPzmTE = accounts[4]
		const boolCp3MYrX = await DSPrnYzgQ6.increaseAllowance.call(addressBLG3v2Q, uintxGDQOMX, {from: accounts[4]});
		const uint256bQ4u7s0 = await DSPrnYzgQ6.balanceOf.call(addressiMPzmTE, {from: accounts[0]});

		assert.equal(boolCp3MYrX, true)
		assert.equal(uint256bQ4u7s0, BigInt("0"))
	});

	it('test for DSP', async () => {
		const DSPrnYzgQ6 = await DSP.new({from: accounts[0]});
		const uintVteI01 = BigInt("612")
		const addressu7GJYUi = "0x0000000000000000000000000000000000000001"
		const uintoVuECer = BigInt("1054")
		const addresswt5Veq0 = accounts[1]
		const address1zRKDS = "0x0000000000000000000000000000000000000002"
		const addressxbICwKy = "0x0000000000000000000000000000000000000001"
//		const boolfPAhnIi = await DSPrnYzgQ6.decreaseAllowance.call(addressu7GJYUi, uintVteI01, {from: accounts[0]});
//		const boolV9MKZuh = await DSPrnYzgQ6.transferFrom.call(address1zRKDS, addresswt5Veq0, uintoVuECer, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256PwRdByC = await DSPrnYzgQ6.balanceOf.call(addressxbICwKy, {from: accounts[0]});

		await expect(DSPrnYzgQ6.decreaseAllowance.call(addressu7GJYUi, uintVteI01, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPRzRhn8C = await DSP.new({from: accounts[4]});
		const addressS6t4Uiy = "0x0000000000000000000000000000000000000001"
		const addressjcMIjmV = accounts[4]
		const uints5nCChV = BigInt("655")
		const addressy9xxLMO = accounts[3]
//		await DSPRzRhn8C.pause.call({from: accounts[4]});
//		const uint256UG9MsH5 = await DSPRzRhn8C.allowance.call(addressjcMIjmV, addressS6t4Uiy, {from: accounts[2]});
//		const boolH3p26A2 = await DSPRzRhn8C.mint.call(addressy9xxLMO, uints5nCChV, {from: accounts[5]});
//		const boollXYJSxY = await DSPRzRhn8C.acceptOwnership.call({from: accounts[4]});

		await expect(DSPRzRhn8C.pause.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrnYzgQ6 = await DSP.new({from: accounts[0]});
		const addresslIiI2CZ = accounts[1]
		const uintKzTtU2i = BigInt("2019")
		const addressP1cqO7V = accounts[2]
		const uintSs7XlWP = BigInt("1054")
		const addressOSRUudD = accounts[1]
		const addresszpwsYee = "0x0000000000000000000000000000000000000001"
//		const addressEOo7OOE = await DSPrnYzgQ6.removePauser.call(addresslIiI2CZ, {from: accounts[0]});
//		const boolPrcj02J = await DSPrnYzgQ6.decreaseAllowance.call(addressP1cqO7V, uintKzTtU2i, {from: accounts[0]});
//		const boolV9MKZuh = await DSPrnYzgQ6.transferFrom.call(addresszpwsYee, addressOSRUudD, uintSs7XlWP, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPrnYzgQ6.removePauser.call(addresslIiI2CZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrnYzgQ6 = await DSP.new({from: accounts[0]});
		const uintLwBkFWR = BigInt("1920")
		const addresstC1qQU6 = accounts[4]
		const uintOOGWnTL = BigInt("1054")
		const address7cOpnY = accounts[2]
		const addresspxfMj7g = "0x0000000000000000000000000000000000000001"
//		const boolhVyD02h = await DSPrnYzgQ6.unlock.call(addresstC1qQU6, uintLwBkFWR, {from: accounts[0]});
//		const boolV9MKZuh = await DSPrnYzgQ6.transferFrom.call(addresspxfMj7g, address7cOpnY, uintOOGWnTL, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPrnYzgQ6.unlock.call(addresstC1qQU6, uintLwBkFWR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrnYzgQ6 = await DSP.new({from: accounts[0]});
		const uint8lVNLA = BigInt("1968")
		const uintCIiu6Ll = BigInt("1582")
		const addressKGwX6vo = accounts[4]
		const addressQQR6n3X = accounts[0]
		const uintR1BApAx = BigInt("1054")
		const addressuBmEeEE = accounts[1]
		const addresslyxmKh = "0x0000000000000000000000000000000000000001"
//		const boolRg5ZvJf = await DSPrnYzgQ6.lock.call(addressKGwX6vo, uintCIiu6Ll, uint8lVNLA, {from: accounts[0]});
//		const uint256SBE6gSx = await DSPrnYzgQ6.totalSupply.call({from: accounts[0]});
//		const stringqgMEaEs = await DSPrnYzgQ6.symbol.call({from: accounts[4]});
//		const addressoKCQv3e = await DSPrnYzgQ6.transferOwnership.call(addressQQR6n3X, {from: "0x0000000000000000000000000000000000000001"});
//		const boolV9MKZuh = await DSPrnYzgQ6.transferFrom.call(addresslyxmKh, addressuBmEeEE, uintR1BApAx, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DSPrnYzgQ6.lock.call(addressKGwX6vo, uintCIiu6Ll, uint8lVNLA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrnYzgQ6 = await DSP.new({from: accounts[0]});
		const uintxJx2MQU = BigInt("1353")
		const addressMl0BRN0 = accounts[0]
		const uintZGXhj1b = BigInt("1054")
		const addresslO9lnv = accounts[1]
		const addressqHALc52 = "0x0000000000000000000000000000000000000001"
		const uintBI28hT5 = BigInt("1879")
		const addressghpB2Um = accounts[2]
		const booloAFhdRy = await DSPrnYzgQ6.mint.call(addressMl0BRN0, uintxJx2MQU, {from: accounts[0]});
//		const booljGhIxQq = await DSPrnYzgQ6.acceptOwnership.call({from: accounts[4]});
//		const boolV9MKZuh = await DSPrnYzgQ6.transferFrom.call(addressqHALc52, addresslO9lnv, uintZGXhj1b, {from: "0x0000000000000000000000000000000000000001"});
//		const boolY6Nzetu = await DSPrnYzgQ6.unlock.call(addressghpB2Um, uintBI28hT5, {from: accounts[3]});

		assert.equal(booloAFhdRy, true)
		await expect(DSPrnYzgQ6.acceptOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DSP', async () => {
		const DSPrnYzgQ6 = await DSP.new({from: accounts[0]});
		const uintU1OW5BM = BigInt("638")
		const addressSQwZ5Xw = accounts[4]
		const uintymbWJos = BigInt("1156")
		const addressppVDpKT = accounts[0]
		const addressKguCiLy = accounts[4]
		const booltNNnuyy = await DSPrnYzgQ6.approve.call(addressSQwZ5Xw, uintU1OW5BM, {from: accounts[0]});
		const boolNNGdEqW = await DSPrnYzgQ6.burnFrombyOwner.call(addressppVDpKT, uintymbWJos, {from: accounts[0]});
		const uint256bQ4u7s0 = await DSPrnYzgQ6.balanceOf.call(addressKguCiLy, {from: accounts[0]});

		assert.equal(boolNNGdEqW, true)
		assert.equal(booltNNnuyy, true)
		assert.equal(uint256bQ4u7s0, BigInt("0"))
	});
})