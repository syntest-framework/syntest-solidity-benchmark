const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const LedgiskQCdtN7 = await Ledgis.new({from: accounts[4]});
		const uintoP8uajF = BigInt("756")
		const addressO7SeID = accounts[5]
		const addressjOLAUWf = accounts[2]
		const uintOM4CjYI = BigInt("1390")
		const addressdeeA4Ng = accounts[3]
		const addressbBkMSXK = accounts[3]
		const uintLk8doCn = BigInt("857")
		const uintUEvtmTt = BigInt("881")
		const addressaLw0ow2 = accounts[3]
		const boolvnVCKDk = await LedgiskQCdtN7.approve.call(addressO7SeID, uintoP8uajF, {from: accounts[5]});
		const addressVkC2Ux = await LedgiskQCdtN7.unfreeze.call(addressjOLAUWf, {from: accounts[3]});
		await LedgiskQCdtN7.lockState.call(addressdeeA4Ng, uintOM4CjYI, {from: accounts[5]});
		const addressnoF7aUx = await LedgiskQCdtN7.unfreeze.call(addressbBkMSXK, {from: accounts[5]});
		const boolEGm0y4k = await LedgiskQCdtN7.transferWithLockAfter.call(addressaLw0ow2, uintUEvtmTt, uintLk8doCn, {from: accounts[3]});

		assert.equal(boolvnVCKDk, true)
		await expect(LedgiskQCdtN7.unfreeze.call(addressjOLAUWf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisEotbo51 = await Ledgis.new({from: accounts[1]});
		const uintk1OzF1w = BigInt("1909")
		const addressJtl0dQb = accounts[5]
		await LedgisEotbo51.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});
		const boolvlxlLW5 = await LedgisEotbo51.decreaseAllowance.call(addressJtl0dQb, uintk1OzF1w, {from: accounts[4]});

		await expect(LedgisEotbo51.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisC3MSM3k = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uinttjZ6JwM = BigInt("16")
		const uintXqMzYW9 = BigInt("1961")
		const addresst4T2DSr = accounts[0]
		const uintCmh1PlE = BigInt("370")
		const addresss2OEYY = accounts[5]
		await LedgisC3MSM3k.onlyOwner.call({from: accounts[0]});
		const addressa0wPiMu = await LedgisC3MSM3k.lock.call(addresst4T2DSr, uintXqMzYW9, uinttjZ6JwM, {from: accounts[1]});
		const boolb3JwGV3 = await LedgisC3MSM3k.mint.call(addresss2OEYY, uintCmh1PlE, {from: accounts[2]});
	});

	it('test for Ledgis', async () => {
		const LedgisuCokAox = await Ledgis.new({from: accounts[2]});
		const uintMd2XyXw = BigInt("2042")
		const addressSDS7OCY = accounts[3]
		const uintAhJzTZN = BigInt("947")
		const addressunhyDij = accounts[3]
		const addressuSBUYdY = accounts[4]
		const uintaQ03ZTh = BigInt("518")
		const addressS4QpBL = accounts[0]
		const boolxVCmhpR = await LedgisuCokAox.approve.call(addressSDS7OCY, uintMd2XyXw, {from: accounts[4]});
		await LedgisuCokAox.lockState.call(addressunhyDij, uintAhJzTZN, {from: accounts[1]});
		const uint256aHBzc4X = await LedgisuCokAox.balanceOf.call(addressuSBUYdY, {from: accounts[0]});
		await LedgisuCokAox.whenNotFrozen.call({from: accounts[2]});
		await LedgisuCokAox.onlyOwner.call({from: accounts[4]});
		const booloSEzzjt = await LedgisuCokAox.transfer.call(addressS4QpBL, uintaQ03ZTh, {from: accounts[2]});

		assert.equal(boolxVCmhpR, true)
		await expect(LedgisuCokAox.lockState.call(addressunhyDij, uintAhJzTZN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisM28pPHI = await Ledgis.new({from: accounts[5]});
		const uintJps2Bce = BigInt("1715")
		const addressw64dWQ2 = accounts[2]
		await LedgisM28pPHI.renounceOwnership.call({from: accounts[5]});
		const boolHcxRTl = await LedgisM28pPHI.transfer.call(addressw64dWQ2, uintJps2Bce, {from: accounts[5]});

		await expect(LedgisM28pPHI.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskfxODq5 = await Ledgis.new({from: accounts[5]});
		const uintF5YVVEG = BigInt("1873")
		const addressr0Aceh0 = accounts[0]
		const uintm0iKQsh = BigInt("1525")
		const addressc6NbcV = accounts[0]
		const addressqLgOV3K = accounts[2]
		const addressU8LGH2r = accounts[2]
		const addressFVniThB = "0x0000000000000000000000000000000000000001"
		const booliZrjBA = await LedgiskfxODq5.increaseAllowance.call(addressr0Aceh0, uintF5YVVEG, {from: accounts[1]});
		const boolyirizBh = await LedgiskfxODq5.approve.call(addressc6NbcV, uintm0iKQsh, {from: accounts[4]});
		const uint256LuJE8Xz = await LedgiskfxODq5.allowance.call(addressU8LGH2r, addressqLgOV3K, {from: accounts[3]});
		const uint256xxAMEE0 = await LedgiskfxODq5.balanceOf.call(addressFVniThB, {from: accounts[2]});
		await LedgiskfxODq5.whenPaused.call({from: accounts[0]});

		assert.equal(booliZrjBA, true)
		assert.equal(boolyirizBh, true)
		assert.equal(uint256LuJE8Xz, BigInt("0"))
		assert.equal(uint256xxAMEE0, BigInt("0"))
		await expect(LedgiskfxODq5.whenPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisR0UhV9R = await Ledgis.new({from: accounts[3]});
		const uintc0ziFA7 = BigInt("587")
		const addressiqCdT7 = accounts[2]
		const addressrRnHHB = accounts[4]
		const booli78qc1N = await LedgisR0UhV9R.decreaseAllowance.call(addressiqCdT7, uintc0ziFA7, {from: accounts[3]});
		await LedgisR0UhV9R.whenNotPaused.call({from: accounts[3]});
		const uint256rcLX0J = await LedgisR0UhV9R.balanceOf.call(addressrRnHHB, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisR0UhV9R.decreaseAllowance.call(addressiqCdT7, uintc0ziFA7, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisM28pPHI = await Ledgis.new({from: accounts[5]});
		const uintl5py6R4 = BigInt("549")
		const addressLA7hhgf = accounts[0]
		const addressabUrFWQ = accounts[2]
		const uintfPR9OU = BigInt("650")
		const addresscZUQ8Fl = accounts[0]
		const uintc0tj81V = BigInt("1715")
		const addressAlC0vDq = accounts[3]
		const boolLyoxNiW = await LedgisM28pPHI.transferFrom.call(addressabUrFWQ, addressLA7hhgf, uintl5py6R4, {from: accounts[4]});
		const boolQE8veip = await LedgisM28pPHI.mint.call(addresscZUQ8Fl, uintfPR9OU, {from: accounts[1]});
		const boolHcxRTl = await LedgisM28pPHI.transfer.call(addressAlC0vDq, uintc0tj81V, {from: accounts[5]});

		await expect(LedgisM28pPHI.transferFrom.call(addressabUrFWQ, addressLA7hhgf, uintl5py6R4, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisM28pPHI = await Ledgis.new({from: accounts[5]});
		const uintgCnlncZ = BigInt("549")
		const addressTZefMqT = accounts[0]
		const addressMSSWU0n = accounts[2]
		const uintsDfnniu = BigInt("1694")
		const addresss5hw1Kr = accounts[3]
		const uint256YON8VPx = await LedgisM28pPHI.currentTime.call({from: accounts[2]});
		const boolLyoxNiW = await LedgisM28pPHI.transferFrom.call(addressMSSWU0n, addressTZefMqT, uintgCnlncZ, {from: accounts[4]});
		const boolHcxRTl = await LedgisM28pPHI.transfer.call(addresss5hw1Kr, uintsDfnniu, {from: accounts[5]});

		assert.equal(uint256YON8VPx, BigInt("1630232663"))
		await expect(LedgisM28pPHI.transferFrom.call(addressMSSWU0n, addressTZefMqT, uintgCnlncZ, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisM28pPHI = await Ledgis.new({from: accounts[5]});
		const uintFVh5dY = BigInt("1715")
		const addressyqsEXd = accounts[2]
		const addressBXinrAz = accounts[3]
		const addressfOES71O = accounts[4]
		await LedgisM28pPHI.renounceOwnership.call({from: accounts[5]});
		const boolHcxRTl = await LedgisM28pPHI.transfer.call(addressyqsEXd, uintFVh5dY, {from: accounts[5]});
		const uint256qq4l8L = await LedgisM28pPHI.lockCount.call(addressBXinrAz, {from: accounts[3]});
		const uint256eYHq882 = await LedgisM28pPHI.balanceOf.call(addressfOES71O, {from: accounts[0]});

		await expect(LedgisM28pPHI.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisM28pPHI = await Ledgis.new({from: accounts[5]});
		const uintAxa2zkA = BigInt("1715")
		const addressZzESKwj = accounts[2]
		const addressG8kvBCq = accounts[3]
		const addressEsEYTw = accounts[0]
		const addressF8XQdua = accounts[4]
		const boolHcxRTl = await LedgisM28pPHI.transfer.call(addressZzESKwj, uintAxa2zkA, {from: accounts[5]});
		const uint256qq4l8L = await LedgisM28pPHI.lockCount.call(addressG8kvBCq, {from: accounts[3]});
		const uint256TefgNge = await LedgisM28pPHI.totalSupply.call({from: accounts[0]});
		const addressuTFjMz9 = await LedgisM28pPHI.freeze.call(addressEsEYTw, {from: accounts[2]});
		const uint256eYHq882 = await LedgisM28pPHI.balanceOf.call(addressF8XQdua, {from: accounts[0]});

		assert.equal(boolHcxRTl, true)
		assert.equal(uint256TefgNge, BigInt("10000000000000"))
		assert.equal(uint256qq4l8L, BigInt("0"))
		await expect(LedgisM28pPHI.freeze.call(addressEsEYTw, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisM28pPHI = await Ledgis.new({from: accounts[5]});
		const addressJalg6ij = accounts[1]
		const uintl0xgxF = BigInt("826")
		const addressC5RhbYV = accounts[4]
		const addressNTVq78 = accounts[4]
		await LedgisM28pPHI.renounceOwnership.call({from: accounts[5]});
		const boolTOtvV80 = await LedgisM28pPHI.isFrozen.call(addressJalg6ij, {from: accounts[1]});
		const uint256TAYaoD = await LedgisM28pPHI.afterTime.call(uintl0xgxF, {from: accounts[3]});
		const uint256qq4l8L = await LedgisM28pPHI.lockCount.call(addressC5RhbYV, {from: accounts[3]});
		const uint256eYHq882 = await LedgisM28pPHI.balanceOf.call(addressNTVq78, {from: accounts[0]});

		await expect(LedgisM28pPHI.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisM28pPHI = await Ledgis.new({from: accounts[5]});
		const addressLJfqrE5 = accounts[1]
		const uinthC8byxA = BigInt("1732")
		const addressnZARaX = accounts[2]
		const uintDwGAyl = BigInt("1960")
		const addressthNqvu = accounts[2]
		const addressXz76Yk3 = accounts[3]
		const addressZvfwJoh = accounts[5]
		const addressEJHuG6 = await LedgisM28pPHI.freeze.call(addressLJfqrE5, {from: accounts[5]});
		await LedgisM28pPHI.renounceOwnership.call({from: accounts[5]});
		const boolHcxRTl = await LedgisM28pPHI.transfer.call(addressnZARaX, uinthC8byxA, {from: accounts[5]});
		const boolYRT3i5m = await LedgisM28pPHI.mint.call(addressthNqvu, uintDwGAyl, {from: accounts[3]});
		const uint256Qd0MTjD = await LedgisM28pPHI.balanceOf.call(addressXz76Yk3, {from: accounts[0]});
		await LedgisM28pPHI.whenNotPaused.call({from: accounts[2]});
		const uint256LHkOlba = await LedgisM28pPHI.balanceOf.call(addressZvfwJoh, {from: accounts[3]});

		await expect(LedgisM28pPHI.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisM28pPHI = await Ledgis.new({from: accounts[5]});
		const uintlDwOxv8 = BigInt("236")
		const addresspWGOBLJ = accounts[3]
		const uintx3eCEP0 = BigInt("1715")
		const addressS8REjGV = accounts[2]
		const addressemNsFEp = accounts[3]
		const addressNdEdcmI = accounts[4]
		const addressXJyzIjG = accounts[5]
		await LedgisM28pPHI.renounceOwnership.call({from: accounts[5]});
		const boolm3gu1cs = await LedgisM28pPHI.mint.call(addresspWGOBLJ, uintlDwOxv8, {from: accounts[5]});
		const boolHcxRTl = await LedgisM28pPHI.transfer.call(addressS8REjGV, uintx3eCEP0, {from: accounts[5]});
		const uint256Qd0MTjD = await LedgisM28pPHI.balanceOf.call(addressemNsFEp, {from: accounts[0]});
		const addressSSoBJ6g = await LedgisM28pPHI.freeze.call(addressNdEdcmI, {from: "0x0000000000000000000000000000000000000001"});
		await LedgisM28pPHI.whenNotPaused.call({from: accounts[5]});
		const uint256LHkOlba = await LedgisM28pPHI.balanceOf.call(addressXJyzIjG, {from: accounts[3]});

		await expect(LedgisM28pPHI.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisM28pPHI = await Ledgis.new({from: accounts[5]});
		const addressxydJ3jp = accounts[2]
		const uintFmBDJX9 = BigInt("1109")
		const uintJd1hKat = BigInt("296")
		const addressDbS7gzf = "0x0000000000000000000000000000000000000001"
		const uintueV5Tw = BigInt("1715")
		const addresskLzAsX = accounts[2]
		const addressdxg5YPc = accounts[5]
		const addressCF8CGLA = accounts[4]
		const uintCR2gIcM = BigInt("1105")
		const addressE8RD2VH = accounts[3]
		await LedgisM28pPHI.renounceOwnership.call({from: accounts[5]});
		const addressdVE3Pd9 = await LedgisM28pPHI.unfreeze.call(addressxydJ3jp, {from: accounts[5]});
		await LedgisM28pPHI.whenNotFrozen.call({from: accounts[4]});
		const addressAWvooMm = await LedgisM28pPHI.lockAfter.call(addressDbS7gzf, uintJd1hKat, uintFmBDJX9, {from: accounts[4]});
		const boolHcxRTl = await LedgisM28pPHI.transfer.call(addresskLzAsX, uintueV5Tw, {from: accounts[5]});
		const uint256qq4l8L = await LedgisM28pPHI.lockCount.call(addressdxg5YPc, {from: accounts[3]});
		const uint256eYHq882 = await LedgisM28pPHI.balanceOf.call(addressCF8CGLA, {from: accounts[0]});
		const boolYL2JtwE = await LedgisM28pPHI.transfer.call(addressE8RD2VH, uintCR2gIcM, {from: accounts[2]});

		await expect(LedgisM28pPHI.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisKeGuAmC = await Ledgis.new({from: accounts[3]});
		const uintCBudneE = BigInt("340")
		const uintC1I4PhD = BigInt("816")
		const address27Gp5j = accounts[0]
		const uintAKFl9Ck = BigInt("1227")
		const addressMu8jEGB = accounts[3]
		const addressN3FnYsM = accounts[5]
		const addressHt7jP8N = await LedgisKeGuAmC.lockAfter.call(address27Gp5j, uintC1I4PhD, uintCBudneE, {from: accounts[3]});
		const boolWNUs4c = await LedgisKeGuAmC.mint.call(addressMu8jEGB, uintAKFl9Ck, {from: accounts[0]});
		const uint256y73Hyjw = await LedgisKeGuAmC.lockCount.call(addressN3FnYsM, {from: accounts[4]});
		await LedgisKeGuAmC.onlyOwner.call({from: accounts[3]});

		await expect(LedgisKeGuAmC.lockAfter.call(address27Gp5j, uintC1I4PhD, uintCBudneE, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisM28pPHI = await Ledgis.new({from: accounts[5]});
		const uinteLrU0SR = BigInt("614")
		const addressWp9NUfW = accounts[2]
		const uinthFx1afa = BigInt("913")
		const uintDyLWJg4 = BigInt("950")
		const addressOAY1S9w = accounts[2]
		const addressm7173cG = accounts[4]
		const addressOVtbyww = accounts[4]
		await LedgisM28pPHI.renounceOwnership.call({from: accounts[5]});
		const boolHcxRTl = await LedgisM28pPHI.transfer.call(addressWp9NUfW, uinteLrU0SR, {from: accounts[5]});
		const addressCkpB1OH = await LedgisM28pPHI.lock.call(addressOAY1S9w, uintDyLWJg4, uinthFx1afa, {from: accounts[5]});
		const uint256qq4l8L = await LedgisM28pPHI.lockCount.call(addressm7173cG, {from: accounts[3]});
		const uint256eYHq882 = await LedgisM28pPHI.balanceOf.call(addressOVtbyww, {from: accounts[0]});
		await LedgisM28pPHI.renounceOwnership.call({from: accounts[0]});

		await expect(LedgisM28pPHI.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisbaEHiNA = await Ledgis.new({from: accounts[1]});
		const uintYEqNAeo = BigInt("363")
		const addressvZY5C5Z = accounts[0]
		const addresse3mhrtI = accounts[3]
		const addressi4xc8GW = await LedgisbaEHiNA.burn.call(addressvZY5C5Z, uintYEqNAeo, {from: accounts[1]});
		await LedgisbaEHiNA.whenNotPaused.call({from: accounts[1]});
		await LedgisbaEHiNA.whenPaused.call({from: accounts[4]});
		const addressGhaL4jj = await LedgisbaEHiNA.freeze.call(addresse3mhrtI, {from: accounts[3]});

		await expect(LedgisbaEHiNA.burn.call(addressvZY5C5Z, uintYEqNAeo, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisM28pPHI = await Ledgis.new({from: accounts[5]});
		const uintvlhXaq9 = BigInt("1715")
		const addresslqYxild = accounts[3]
		const addresseYkv94h = accounts[3]
		const uint4TSUJg = BigInt("1746")
		const addresstpjNPVC = accounts[5]
		await LedgisM28pPHI.renounceOwnership.call({from: accounts[5]});
		const uint256vEvp5Yn = await LedgisM28pPHI.totalSupply.call({from: accounts[1]});
		const boolHcxRTl = await LedgisM28pPHI.transfer.call(addresslqYxild, uintvlhXaq9, {from: accounts[5]});
		const uint256qq4l8L = await LedgisM28pPHI.lockCount.call(addresseYkv94h, {from: accounts[3]});
		const addressMZUUo2a = await LedgisM28pPHI.unlock.call(addresstpjNPVC, uint4TSUJg, {from: accounts[5]});

		await expect(LedgisM28pPHI.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisM28pPHI = await Ledgis.new({from: accounts[5]});
		const uintIvrLDih = BigInt("1715")
		const address8ycmWS = accounts[2]
		const uintEzrMoar = BigInt("1983")
		const uintvCHxAGR = BigInt("297")
		const addressWfq5SEj = accounts[2]
		const addressXrYVnBF = accounts[3]
		const addressYadZyUV = accounts[5]
		await LedgisM28pPHI.renounceOwnership.call({from: accounts[5]});
		const boolHcxRTl = await LedgisM28pPHI.transfer.call(address8ycmWS, uintIvrLDih, {from: accounts[5]});
		const boolEq3LyuI = await LedgisM28pPHI.transferWithLockAfter.call(addressWfq5SEj, uintvCHxAGR, uintEzrMoar, {from: accounts[5]});
		const uint256Qd0MTjD = await LedgisM28pPHI.balanceOf.call(addressXrYVnBF, {from: accounts[0]});
		await LedgisM28pPHI.whenNotPaused.call({from: accounts[2]});
		const uint256LHkOlba = await LedgisM28pPHI.balanceOf.call(addressYadZyUV, {from: accounts[3]});

		await expect(LedgisM28pPHI.renounceOwnership.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisM28pPHI = await Ledgis.new({from: accounts[5]});
		const addresslivikg = accounts[5]
		const addressDC3FDB = "0x0000000000000000000000000000000000000001"
		const uint256eYHq882 = await LedgisM28pPHI.balanceOf.call(addresslivikg, {from: accounts[0]});
		const addressuX5OYwN = await LedgisM28pPHI.transferOwnership.call(addressDC3FDB, {from: accounts[5]});

		assert.equal(uint256eYHq882, BigInt("10000000000000"))
	});

	it('test for Ledgis', async () => {
		const LedgisM28pPHI = await Ledgis.new({from: accounts[5]});
		const addressbqHaEmo = accounts[4]
		await LedgisM28pPHI.pause.call({from: accounts[5]});
		const uint256eYHq882 = await LedgisM28pPHI.balanceOf.call(addressbqHaEmo, {from: accounts[0]});

		await expect(LedgisM28pPHI.pause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisM28pPHI = await Ledgis.new({from: accounts[5]});
		const uintAQpMDVr = BigInt("1715")
		const addressE2a0psR = accounts[3]
		const uintMkTLiou = BigInt("1683")
		const addressEUGfrDc = accounts[1]
		const addressyVXv57k = accounts[4]
		const addressYwkgUv = accounts[4]
		const uintus3IHgu = BigInt("1669")
		const addressWpZRm7e = accounts[5]
		const uint256nRykEgZ = await LedgisM28pPHI.totalSupply.call({from: accounts[4]});
		await LedgisM28pPHI.unpause.call({from: accounts[5]});
		await LedgisM28pPHI.renounceOwnership.call({from: accounts[5]});
		const boolHcxRTl = await LedgisM28pPHI.transfer.call(addressE2a0psR, uintAQpMDVr, {from: accounts[5]});
		const boolmSzyzyZ = await LedgisM28pPHI.approve.call(addressEUGfrDc, uintMkTLiou, {from: "0x0000000000000000000000000000000000000001"});
		const uint256FpN9irX = await LedgisM28pPHI.balanceOf.call(addressyVXv57k, {from: accounts[5]});
		const uint256HUpzOyM = await LedgisM28pPHI.balanceOf.call(addressYwkgUv, {from: accounts[3]});
		const addressMZUUo2a = await LedgisM28pPHI.unlock.call(addressWpZRm7e, uintus3IHgu, {from: accounts[5]});

		assert.equal(uint256nRykEgZ, BigInt("10000000000000"))
		await expect(LedgisM28pPHI.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisAdzgnxX = await Ledgis.new({from: accounts[3]});
		const addressUpzDR9g = accounts[3]
		const uintycYlqNF = BigInt("1032")
		const uintlEaMXBX = BigInt("157")
		const addressVYpnuuW = accounts[3]
		const uint256Kb93apj = await LedgisAdzgnxX.balanceOf.call(addressUpzDR9g, {from: accounts[3]});
		const booloudSMzb = await LedgisAdzgnxX.transferWithLock.call(addressVYpnuuW, uintlEaMXBX, uintycYlqNF, {from: accounts[3]});

		assert.equal(booloudSMzb, true)
		assert.equal(uint256Kb93apj, BigInt("10000000000000"))
	});
})