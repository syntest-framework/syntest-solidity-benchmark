const SpiritCoin = artifacts.require("SpiritCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SpiritCoin', (accounts) => {
	it('test for SpiritCoin', async () => {
		const addressbsNarv2 = accounts[4]
		const addressUsZaPuN = accounts[1]
		const SpiritCoinE7DLtGu = await SpiritCoin.new(addressbsNarv2, addressUsZaPuN, {from: accounts[2]});
		const addressgGJLQB = accounts[3]
		const addressjN98MCt = accounts[3]
		const uinta7i7yOq = BigInt("1995")
		const addressf1ANwe = accounts[3]
		const addressmCGJZ4r = accounts[2]
		const uintxlUTlP = BigInt("1265")
		const addressyUvX1Uy = accounts[5]
		const uintB0BeFt = await SpiritCoinE7DLtGu.allowance.call(addressjN98MCt, addressgGJLQB, {from: accounts[0]});
		const boolF8JxVL = await SpiritCoinE7DLtGu.transferFrom.call(addressmCGJZ4r, addressf1ANwe, uinta7i7yOq, {from: accounts[0]});
		const boolAYScwKZ = await SpiritCoinE7DLtGu.approve.call(addressyUvX1Uy, uintxlUTlP, {from: accounts[0]});

		assert.equal(uintB0BeFt, BigInt("0"))
		await expect(SpiritCoinE7DLtGu.transferFrom.call(addressmCGJZ4r, addressf1ANwe, uinta7i7yOq, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresslMtmuo1 = accounts[0]
		const addressFeYaT8q = "0x0000000000000000000000000000000000000001"
		const SpiritCoinnRQs9v = await SpiritCoin.new(addresslMtmuo1, addressFeYaT8q, {from: accounts[0]});
		const uintOX2xVP = BigInt("20")
		const addressLgwFLsC = accounts[0]
		const uintBYXIACT = BigInt("266")
		const addresseOYVRix = accounts[1]
		const uintJ2sLgBd = BigInt("1932")
		const addressbisyXOB = accounts[4]
		const addressJTjPhOK = accounts[2]
		const addresswaxepb = accounts[2]
		const addressAo0beVj = await SpiritCoinnRQs9v.mint.call(addressLgwFLsC, uintOX2xVP, {from: accounts[2]});
		const booldE2YSiH = await SpiritCoinnRQs9v.approve.call(addresseOYVRix, uintBYXIACT, {from: accounts[5]});
		const addressljUKq2U = await SpiritCoinnRQs9v.mint.call(addressbisyXOB, uintJ2sLgBd, {from: accounts[2]});
		const uintpzVMSBa = await SpiritCoinnRQs9v.balanceOf.call(addressJTjPhOK, {from: accounts[1]});
		const uintUAZHjjB = await SpiritCoinnRQs9v.balanceOf.call(addresswaxepb, {from: accounts[4]});

		await expect(SpiritCoinnRQs9v.mint.call(addressLgwFLsC, uintOX2xVP, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresssC8UAW1 = accounts[5]
		const addressDyf8YOR = accounts[2]
		const SpiritCoinJUuPmJh = await SpiritCoin.new(addresssC8UAW1, addressDyf8YOR, {from: accounts[0]});
		const addressgngvNNr = accounts[0]
		const addressz5pUvKt = "0x0000000000000000000000000000000000000001"
		const addressnKyXIA6 = accounts[3]
		const addressW2F1oTw = accounts[4]
		const addressklW3URa = "0x0000000000000000000000000000000000000001"
		const uinthtK3u1b = await SpiritCoinJUuPmJh.balanceOf.call(addressgngvNNr, {from: accounts[0]});
		const uintb9FwjXQ = await SpiritCoinJUuPmJh.balanceOf.call(addressz5pUvKt, {from: accounts[0]});
		const uintfXEJNoP = await SpiritCoinJUuPmJh.balanceOf.call(addressnKyXIA6, {from: accounts[4]});
		const uintEeAmxiP = await SpiritCoinJUuPmJh.allowance.call(addressklW3URa, addressW2F1oTw, {from: accounts[4]});

		assert.equal(uintEeAmxiP, BigInt("0"))
		assert.equal(uintb9FwjXQ, BigInt("0"))
		assert.equal(uintfXEJNoP, BigInt("0"))
		assert.equal(uinthtK3u1b, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addressVzM0z6k = accounts[2]
		const addressMs7YoOX = accounts[3]
		const SpiritCoinO45r3YW = await SpiritCoin.new(addressVzM0z6k, addressMs7YoOX, {from: accounts[2]});
		const addressIbbXM1a = accounts[5]
		const addresswT71Hg = accounts[2]
		const addressvbJcmUO = accounts[2]
		const uintzKVctq9 = BigInt("1750")
		const addressPfA9cls = accounts[1]
		const addressRi7MZH3 = accounts[3]
		const addressjo8idtu = accounts[1]
		const addressbSkjwF9 = accounts[5]
		const uintofSoDO0 = await SpiritCoinO45r3YW.allowance.call(addresswT71Hg, addressIbbXM1a, {from: accounts[4]});
		const uintcNjWuKo = await SpiritCoinO45r3YW.balanceOf.call(addressvbJcmUO, {from: accounts[2]});
		const boolGMGDQqv = await SpiritCoinO45r3YW.approve.call(addressPfA9cls, uintzKVctq9, {from: accounts[3]});
		const uintW70CCo = await SpiritCoinO45r3YW.allowance.call(addressjo8idtu, addressRi7MZH3, {from: accounts[4]});
		const addressTW1Vr4a = await SpiritCoinO45r3YW.setMinter.call(addressbSkjwF9, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolGMGDQqv, true)
		assert.equal(uintW70CCo, BigInt("0"))
		assert.equal(uintcNjWuKo, BigInt("10000000000000000000000000"))
		assert.equal(uintofSoDO0, BigInt("0"))
		await expect(SpiritCoinO45r3YW.setMinter.call(addressbSkjwF9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addresscEu6EN5 = accounts[3]
		const addressUfsOzAe = "0x0000000000000000000000000000000000000001"
		const SpiritCoinp1tK12A = await SpiritCoin.new(addresscEu6EN5, addressUfsOzAe, {from: accounts[0]});
		const uintfjXWDub = BigInt("923")
		const addressNH89hZT = accounts[0]
		const uintfFWoJ7b = BigInt("1571")
		const addressQ46Jfq1 = accounts[1]
		const addressL3R2bsw = accounts[2]
		const uintdcC2uc5 = BigInt("1522")
		const addressqjxi78g = accounts[2]
		const addressToHl0O6 = accounts[4]
		const boolfWJyrOW = await SpiritCoinp1tK12A.transfer.call(addressNH89hZT, uintfjXWDub, {from: accounts[2]});
		const boolT32dt8 = await SpiritCoinp1tK12A.transferFrom.call(addressL3R2bsw, addressQ46Jfq1, uintfFWoJ7b, {from: "0x0000000000000000000000000000000000000001"});
		const boolYV5npLx = await SpiritCoinp1tK12A.transferFrom.call(addressToHl0O6, addressqjxi78g, uintdcC2uc5, {from: accounts[1]});

		await expect(SpiritCoinp1tK12A.transfer.call(addressNH89hZT, uintfjXWDub, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressILjWGj = accounts[1]
		const addressTJvxj1H = accounts[0]
		const SpiritCointA0loc1 = await SpiritCoin.new(addressILjWGj, addressTJvxj1H, {from: accounts[0]});
		const uintqzOyKe = BigInt("943")
		const addressSrlYbVe = accounts[4]
		const uintPSBeJV = BigInt("1577")
		const addressYHEXot4 = accounts[4]
		const addressbpPB7yY = accounts[0]
		const addressubJYu3x = accounts[4]
		const uintCKwCPag = BigInt("598")
		const addressLqypaFe = accounts[0]
		const addresshmb7dy4 = accounts[1]
		const uintwjIlrG2 = BigInt("1285")
		const addressF4FJZjE = accounts[1]
		const addressPqIYAhl = await SpiritCointA0loc1.mint.call(addressSrlYbVe, uintqzOyKe, {from: accounts[0]});
		const boolnODf0kl = await SpiritCointA0loc1.transferFrom.call(addressbpPB7yY, addressYHEXot4, uintPSBeJV, {from: "0x0000000000000000000000000000000000000001"});
		const uintFGZJYJG = await SpiritCointA0loc1.balanceOf.call(addressubJYu3x, {from: accounts[0]});
		const boolZrb9DFW = await SpiritCointA0loc1.transfer.call(addressLqypaFe, uintCKwCPag, {from: "0x0000000000000000000000000000000000000001"});
		const uintO3w4Xi = await SpiritCointA0loc1.balanceOf.call(addresshmb7dy4, {from: accounts[0]});
		const boolVMPnhQ = await SpiritCointA0loc1.transfer.call(addressF4FJZjE, uintwjIlrG2, {from: accounts[2]});

		await expect(SpiritCointA0loc1.transferFrom.call(addressbpPB7yY, addressYHEXot4, uintPSBeJV, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressI1uqQYo = accounts[4]
		const addresscHdcjuU = accounts[1]
		const SpiritCoinLpC2Mo2 = await SpiritCoin.new(addressI1uqQYo, addresscHdcjuU, {from: accounts[3]});
		const uintiR4gXyY = BigInt("1004")
		const addressNDlwAJ8 = accounts[4]
		const uintxirxZ8 = BigInt("1780")
		const addressQyIJ8j = accounts[2]
		const boolGMItzXZ = await SpiritCoinLpC2Mo2.transfer.call(addressNDlwAJ8, uintiR4gXyY, {from: accounts[4]});
		const addressazIjmot = await SpiritCoinLpC2Mo2.mint.call(addressQyIJ8j, uintxirxZ8, {from: accounts[2]});

		assert.equal(boolGMItzXZ, true)
		await expect(SpiritCoinLpC2Mo2.mint.call(addressQyIJ8j, uintxirxZ8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SpiritCoin', async () => {
		const addressowZOFyB = accounts[0]
		const addressDP3QlWF = accounts[4]
		const SpiritCoinPXBGZDe = await SpiritCoin.new(addressowZOFyB, addressDP3QlWF, {from: accounts[1]});
		const addressPTxXjkN = accounts[4]
		const uintfsPKra5 = BigInt("1620")
		const addresshACocVT = "0x0000000000000000000000000000000000000001"
		const addressqqQnHqM = accounts[5]
		const uintYEQLPlT = BigInt("813")
		const addressJc5jIFj = accounts[4]
		const uintzzDsw7T = BigInt("989")
		const addressrOAvux = accounts[2]
		const addressvnp7dCc = accounts[4]
		const uintZHB2v8v = await SpiritCoinPXBGZDe.balanceOf.call(addressPTxXjkN, {from: accounts[3]});
		const boolNzLT8b = await SpiritCoinPXBGZDe.approve.call(addresshACocVT, uintfsPKra5, {from: accounts[3]});
		const addressL0NFXtt = await SpiritCoinPXBGZDe.setMinter.call(addressqqQnHqM, {from: accounts[4]});
		const boolXqXtx3X = await SpiritCoinPXBGZDe.approve.call(addressJc5jIFj, uintYEQLPlT, {from: accounts[0]});
		const bool5VH7yz = await SpiritCoinPXBGZDe.approve.call(addressrOAvux, uintzzDsw7T, {from: accounts[1]});
		const uintENev5G = await SpiritCoinPXBGZDe.balanceOf.call(addressvnp7dCc, {from: accounts[5]});

		assert.equal(bool5VH7yz, true)
		assert.equal(boolNzLT8b, true)
		assert.equal(boolXqXtx3X, true)
		assert.equal(uintENev5G, BigInt("0"))
		assert.equal(uintZHB2v8v, BigInt("0"))
	});

	it('test for SpiritCoin', async () => {
		const addresswbNISpe = accounts[3]
		const addressSgpZ4C = accounts[1]
		const SpiritCoinVmGXbO = await SpiritCoin.new(addresswbNISpe, addressSgpZ4C, {from: "0x0000000000000000000000000000000000000001"});
		const uintfh4SxE = BigInt("862")
		const addressqWdPoyv = accounts[3]
		const addresseh018vX = accounts[4]
		const addressRRiVmS2 = accounts[0]
		const uintPqAJInN = BigInt("1955")
		const addresszmZCKLq = accounts[1]
		const addressHc7pcGM = accounts[1]
		const boolX0uBxgf = await SpiritCoinVmGXbO.transfer.call(addressqWdPoyv, uintfh4SxE, {from: accounts[2]});
		const uintl2dbm54 = await SpiritCoinVmGXbO.allowance.call(addressRRiVmS2, addresseh018vX, {from: accounts[1]});
		const addressnKg9JHp = await SpiritCoinVmGXbO.mint.call(addresszmZCKLq, uintPqAJInN, {from: accounts[1]});
		const uintoYdktH = await SpiritCoinVmGXbO.balanceOf.call(addressHc7pcGM, {from: accounts[4]});
	});

	it('test for SpiritCoin', async () => {
		const addressgu09FeE = accounts[4]
		const addressxzQLsz9 = accounts[1]
		const SpiritCoinLpC2Mo2 = await SpiritCoin.new(addressgu09FeE, addressxzQLsz9, {from: accounts[3]});
		const uintbYqgsH = BigInt("495")
		const addressDl13b6d = accounts[5]
		const addressjHJAWEe = accounts[0]
		const addressjOlcov = "0x0000000000000000000000000000000000000001"
		const uintbv4N41G = BigInt("330")
		const addressm6HiGIG = accounts[3]
		const addressZRszAi9 = accounts[3]
		const addressbEUsqHo = accounts[2]
		const uintSGkrbt9 = BigInt("79")
		const addressfM9Vpq0 = accounts[4]
		const uinthiiSdje = BigInt("1631")
		const addressiNAcVtR = "0x0000000000000000000000000000000000000000"
		const addressFPLFKVU = accounts[5]
		const addressUs3AT0 = accounts[1]
		const addressvRtDIWC = accounts[4]
		const boolJRduuAZ = await SpiritCoinLpC2Mo2.approve.call(addressDl13b6d, uintbYqgsH, {from: accounts[3]});
		const uintApBTKuH = await SpiritCoinLpC2Mo2.allowance.call(addressjOlcov, addressjHJAWEe, {from: accounts[3]});
		const boolP3k87Jf = await SpiritCoinLpC2Mo2.approve.call(addressm6HiGIG, uintbv4N41G, {from: accounts[5]});
		const uintcgeIRD8 = await SpiritCoinLpC2Mo2.allowance.call(addressbEUsqHo, addressZRszAi9, {from: accounts[2]});
		const boolkumCEv = await SpiritCoinLpC2Mo2.approve.call(addressfM9Vpq0, uintSGkrbt9, {from: "0x0000000000000000000000000000000000000001"});
		const addressVuAFkii = await SpiritCoinLpC2Mo2.mint.call(addressiNAcVtR, uinthiiSdje, {from: accounts[1]});
		const uintvhXzNOy = await SpiritCoinLpC2Mo2.balanceOf.call(addressFPLFKVU, {from: accounts[0]});
		const uintdBLKn5m = await SpiritCoinLpC2Mo2.allowance.call(addressvRtDIWC, addressUs3AT0, {from: accounts[2]});

		assert.equal(boolJRduuAZ, true)
		assert.equal(boolP3k87Jf, true)
		assert.equal(boolkumCEv, true)
		assert.equal(uintApBTKuH, BigInt("0"))
		assert.equal(uintcgeIRD8, BigInt("0"))
		await expect(SpiritCoinLpC2Mo2.mint.call(addressiNAcVtR, uinthiiSdje, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})