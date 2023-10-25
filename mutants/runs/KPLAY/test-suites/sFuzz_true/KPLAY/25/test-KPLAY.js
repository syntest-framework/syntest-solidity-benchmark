const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYBlpUxo = await KPLAY.new({from: accounts[2]});
		const uintUSkke1u = BigInt("224")
		const addressaYil7Kw = accounts[2]
		const addressjuosEhf = accounts[3]
		const addresskh2uWQc = accounts[4]
		const uintbuj4Ves = BigInt("1570")
		const addresswxLUBm2 = accounts[2]
		const addressaZQzt6Z = accounts[4]
		const uinteBccUKj = BigInt("1054")
		const addressx8Mrnu7 = accounts[5]
		const boolUy6SnsE = await KPLAYBlpUxo.transferFrom.call(addressjuosEhf, addressaYil7Kw, uintUSkke1u, {from: accounts[4]});
		const uint256xih0yDk = await KPLAYBlpUxo.lockCount.call(addresskh2uWQc, {from: accounts[3]});
		const boolCH9pAWQ = await KPLAYBlpUxo.transferFrom.call(addressaZQzt6Z, addresswxLUBm2, uintbuj4Ves, {from: accounts[1]});
		const boolF5kWBaK = await KPLAYBlpUxo.decreaseAllowance.call(addressx8Mrnu7, uinteBccUKj, {from: accounts[4]});

		await expect(KPLAYBlpUxo.transferFrom.call(addressjuosEhf, addressaYil7Kw, uintUSkke1u, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYNen23jL = await KPLAY.new({from: accounts[2]});
		const uintSPjBn8j = BigInt("284")
		const addressMho0ZIE = accounts[2]
		const uintIOAqG0 = BigInt("367")
		const addressEGgM6bM = accounts[2]
		const uintNbeTFao = BigInt("132")
		const uintc5Hr56 = BigInt("1785")
		const addresswaFzEo1 = accounts[0]
		const addressb2xL1t = accounts[4]
		const boolauYgIC8 = await KPLAYNen23jL.transfer.call(addressMho0ZIE, uintSPjBn8j, {from: accounts[0]});
		const booli8M5Ce2 = await KPLAYNen23jL.mint.call(addressEGgM6bM, uintIOAqG0, {from: accounts[4]});
		const boolafDSv1 = await KPLAYNen23jL.transferWithLock.call(addresswaFzEo1, uintc5Hr56, uintNbeTFao, {from: accounts[2]});
		const uint256qPb0Vpb = await KPLAYNen23jL.balanceOf.call(addressb2xL1t, {from: accounts[1]});

		await expect(KPLAYNen23jL.transfer.call(addressMho0ZIE, uintSPjBn8j, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYICfeUbu = await KPLAY.new({from: accounts[0]});
		const uintHvqz1e = BigInt("819")
		const addressLIlcder = accounts[0]
		const uintnIFtCUR = BigInt("420")
		const addressESkGRz5 = accounts[2]
		const uintrgZJj0U = BigInt("668")
		const addressh3vQkL4 = accounts[1]
		const addressuajBM3X = accounts[3]
		await KPLAYICfeUbu.lockState.call(addressLIlcder, uintHvqz1e, {from: accounts[1]});
		await KPLAYICfeUbu.pause.call({from: accounts[1]});
		const boolzUNPy3 = await KPLAYICfeUbu.transfer.call(addressESkGRz5, uintnIFtCUR, {from: accounts[4]});
		const boolyno6SV4 = await KPLAYICfeUbu.transferFrom.call(addressuajBM3X, addressh3vQkL4, uintrgZJj0U, {from: accounts[1]});

		await expect(KPLAYICfeUbu.lockState.call(addressLIlcder, uintHvqz1e, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYt8aouzS = await KPLAY.new({from: accounts[1]});
		const uintbF0PIJM = BigInt("1539")
		const addressFR7YeZM = accounts[5]
		const uintyiLtpWG = BigInt("939")
		const addressbrqq4q = accounts[2]
		const uintNvOYjd = BigInt("1739")
		const uintNvq1PA6 = BigInt("1820")
		const addressakjI0v = accounts[3]
		const addressNt4JKmw = accounts[3]
		const addressklUhbb9 = await KPLAYt8aouzS.burn.call(addressFR7YeZM, uintbF0PIJM, {from: accounts[5]});
		await KPLAYt8aouzS.onlyOwner.call({from: accounts[0]});
		const boolU9CsoHH = await KPLAYt8aouzS.mint.call(addressbrqq4q, uintyiLtpWG, {from: accounts[2]});
		const boolRVPr6nN = await KPLAYt8aouzS.transferWithLock.call(addressakjI0v, uintNvq1PA6, uintNvOYjd, {from: accounts[1]});
		const addresszodMYQ2 = await KPLAYt8aouzS.transferOwnership.call(addressNt4JKmw, {from: accounts[0]});

		await expect(KPLAYt8aouzS.burn.call(addressFR7YeZM, uintbF0PIJM, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbMeDGsa = await KPLAY.new({from: accounts[0]});
		const uintVAohbPz = BigInt("1430")
		const addressRwqoc1J = "0x0000000000000000000000000000000000000001"
		const uintqjmSYGJ = BigInt("1855")
		const addressvRkwI1T = accounts[0]
		const uintzJT0dOW = BigInt("1594")
		const addresspGbYsRP = accounts[5]
		const addressu4BK3T = accounts[4]
		const addresso3nrLw = accounts[2]
		const addressvjcue9r = accounts[3]
		const boolN9UKEzm = await KPLAYbMeDGsa.approve.call(addressRwqoc1J, uintVAohbPz, {from: accounts[4]});
		const addressOOQaKzS = await KPLAYbMeDGsa.unlock.call(addressvRkwI1T, uintqjmSYGJ, {from: accounts[0]});
		const boolgHQWXIu = await KPLAYbMeDGsa.transferFrom.call(addressu4BK3T, addresspGbYsRP, uintzJT0dOW, {from: accounts[0]});
		const uint256sSCU4Hy = await KPLAYbMeDGsa.currentTime.call({from: accounts[4]});
		const uint256VFT3ulM = await KPLAYbMeDGsa.allowance.call(addressvjcue9r, addresso3nrLw, {from: accounts[3]});

		assert.equal(boolN9UKEzm, true)
		await expect(KPLAYbMeDGsa.unlock.call(addressvRkwI1T, uintqjmSYGJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKsygUGS = await KPLAY.new({from: accounts[2]});
		const uintXKUo2qy = BigInt("718")
		const uintbCYn6g6 = BigInt("1015")
		const uintsPJ9kHn = BigInt("1512")
		const addressd0mOGiD = accounts[5]
		const uint256n31fmfo = await KPLAYKsygUGS.afterTime.call(uintXKUo2qy, {from: accounts[0]});
		const addressmY6uZ7N = await KPLAYKsygUGS.lockAfter.call(addressd0mOGiD, uintsPJ9kHn, uintbCYn6g6, {from: accounts[0]});

		assert.equal(uint256n31fmfo, BigInt("1630228774"))
		await expect(KPLAYKsygUGS.lockAfter.call(addressd0mOGiD, uintsPJ9kHn, uintbCYn6g6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYOv9jWRm = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const addressKEsFv5H = accounts[3]
		const addressGcO5T2Z = accounts[4]
		const uint256MaYUiiS = await KPLAYOv9jWRm.balanceOf.call(addressKEsFv5H, {from: accounts[1]});
		await KPLAYOv9jWRm.onlyOwner.call({from: accounts[4]});
		const uint256weV8oQ = await KPLAYOv9jWRm.balanceOf.call(addressGcO5T2Z, {from: accounts[2]});
	});

	it('test for KPLAY', async () => {
		const KPLAYKsygUGS = await KPLAY.new({from: accounts[2]});
		const uintzyPSKjR = BigInt("718")
		const uintxQSr42x = BigInt("749")
		const uintP5oiKdA = BigInt("1512")
		const addresswy6YXW5 = accounts[5]
		const uint256n31fmfo = await KPLAYKsygUGS.afterTime.call(uintzyPSKjR, {from: accounts[0]});
		const uint256vXPGWh = await KPLAYKsygUGS.totalSupply.call({from: accounts[0]});
		const addressmY6uZ7N = await KPLAYKsygUGS.lockAfter.call(addresswy6YXW5, uintP5oiKdA, uintxQSr42x, {from: accounts[0]});

		assert.equal(uint256n31fmfo, BigInt("1630228776"))
		assert.equal(uint256vXPGWh, BigInt("10000000000000000"))
		await expect(KPLAYKsygUGS.lockAfter.call(addresswy6YXW5, uintP5oiKdA, uintxQSr42x, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYOyOq7K = await KPLAY.new({from: accounts[0]});
		const uintDlYASQ = BigInt("1339")
		const addressa5JguJk = "0x0000000000000000000000000000000000000001"
		const uintpzzTGti = BigInt("674")
		const addressLkTXYmv = accounts[5]
		const addressYEnfqaZ = accounts[2]
		const addresszRS6YmW = await KPLAYOyOq7K.burn.call(addressa5JguJk, uintDlYASQ, {from: accounts[0]});
		const booldPUppoB = await KPLAYOyOq7K.transfer.call(addressLkTXYmv, uintpzzTGti, {from: accounts[2]});
		const uint256qIwBj2p = await KPLAYOyOq7K.lockCount.call(addressYEnfqaZ, {from: accounts[5]});

		await expect(KPLAYOyOq7K.burn.call(addressa5JguJk, uintDlYASQ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKsygUGS = await KPLAY.new({from: accounts[2]});
		const uintBnpBfHu = BigInt("731")
		const uintgePw9aw = BigInt("598")
		const uinthaodSWv = BigInt("468")
		const addresscQXApMX = accounts[4]
		const addressHl64fMa = accounts[1]
		const uint256n31fmfo = await KPLAYKsygUGS.afterTime.call(uintBnpBfHu, {from: accounts[0]});
		const uint25678QTMl = await KPLAYKsygUGS.currentTime.call({from: accounts[5]});
		const addresseHA4sb = await KPLAYKsygUGS.lock.call(addresscQXApMX, uinthaodSWv, uintgePw9aw, {from: accounts[3]});
		const uint2564OomUg = await KPLAYKsygUGS.lockCount.call(addressHl64fMa, {from: accounts[0]});

		assert.equal(uint25678QTMl, BigInt("1630228063"))
		assert.equal(uint256n31fmfo, BigInt("1630228794"))
		await expect(KPLAYKsygUGS.lock.call(addresscQXApMX, uinthaodSWv, uintgePw9aw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKsygUGS = await KPLAY.new({from: accounts[2]});
		const uintlKMaoCX = BigInt("843")
		const addresscNZfQn5 = accounts[0]
		const addressCaOJwd = accounts[2]
		const uintiTbAdA = BigInt("730")
		const uintrh0cPeg = BigInt("623")
		const addressea3JCUZ = accounts[1]
		const address2dnU5n = accounts[3]
		const boolvudEZW = await KPLAYKsygUGS.transferFrom.call(addressCaOJwd, addresscNZfQn5, uintlKMaoCX, {from: accounts[4]});
		const uint256n31fmfo = await KPLAYKsygUGS.afterTime.call(uintiTbAdA, {from: accounts[0]});
		const uint256WA05EE = await KPLAYKsygUGS.currentTime.call({from: "0x0000000000000000000000000000000000000001"});
		const boolCR23bR9 = await KPLAYKsygUGS.transferFrom.call(address2dnU5n, addressea3JCUZ, uintrh0cPeg, {from: accounts[1]});

		await expect(KPLAYKsygUGS.transferFrom.call(addressCaOJwd, addresscNZfQn5, uintlKMaoCX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKsygUGS = await KPLAY.new({from: accounts[2]});
		const uinth4pbMNF = BigInt("731")
		const uint256QMggofW = await KPLAYKsygUGS.currentTime.call({from: accounts[1]});
		const uint256n31fmfo = await KPLAYKsygUGS.afterTime.call(uinth4pbMNF, {from: accounts[0]});
		await KPLAYKsygUGS.onlyOwner.call({from: accounts[4]});

		assert.equal(uint256QMggofW, BigInt("1630228060"))
		assert.equal(uint256n31fmfo, BigInt("1630228791"))
		await expect(KPLAYKsygUGS.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBlpUxo = await KPLAY.new({from: accounts[2]});
		const uintWn3Boh1 = BigInt("709")
		const addressBIBGdpi = accounts[4]
		const uintDBxz3v3 = BigInt("224")
		const addressYgPXAfq = accounts[2]
		const addressW4BdgjP = accounts[3]
		const uintQZm4Uw = BigInt("1570")
		const addressLACWdZR = accounts[3]
		const addressSP4ahab = accounts[4]
		const uintYvdKyzz = BigInt("1698")
		const uintwDHW8a = BigInt("1327")
		const addressB9aVVQ = accounts[1]
		const uintPz6M5qS = BigInt("1054")
		const addressIqP2Hs4 = accounts[5]
		const boolnp47Gpg = await KPLAYBlpUxo.increaseAllowance.call(addressBIBGdpi, uintWn3Boh1, {from: accounts[5]});
		const boolUy6SnsE = await KPLAYBlpUxo.transferFrom.call(addressW4BdgjP, addressYgPXAfq, uintDBxz3v3, {from: accounts[4]});
		const boolCH9pAWQ = await KPLAYBlpUxo.transferFrom.call(addressSP4ahab, addressLACWdZR, uintQZm4Uw, {from: accounts[1]});
		const boolTc8eLU6 = await KPLAYBlpUxo.transferWithLock.call(addressB9aVVQ, uintwDHW8a, uintYvdKyzz, {from: accounts[3]});
		const boolF5kWBaK = await KPLAYBlpUxo.decreaseAllowance.call(addressIqP2Hs4, uintPz6M5qS, {from: accounts[4]});

		assert.equal(boolnp47Gpg, true)
		await expect(KPLAYBlpUxo.transferFrom.call(addressW4BdgjP, addressYgPXAfq, uintDBxz3v3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYbBCfc3T = await KPLAY.new({from: accounts[2]});
		const addresszofvoUO = accounts[3]
		const uintMX9PZMC = BigInt("1226")
		const uintH62wmrd = BigInt("1224")
		const addressKBTvJ0 = accounts[0]
		const uintxIejeyh = BigInt("806")
		const addresstKJGuWH = "0x0000000000000000000000000000000000000001"
		const uint256ovziCnY = await KPLAYbBCfc3T.balanceOf.call(addresszofvoUO, {from: accounts[1]});
		await KPLAYbBCfc3T.onlyOwner.call({from: accounts[0]});
		await KPLAYbBCfc3T.whenPaused.call({from: accounts[3]});
		const boolA1xoWiG = await KPLAYbBCfc3T.transferWithLockAfter.call(addressKBTvJ0, uintH62wmrd, uintMX9PZMC, {from: accounts[5]});
		const boolF23QNnW = await KPLAYbBCfc3T.decreaseAllowance.call(addresstKJGuWH, uintxIejeyh, {from: accounts[3]});

		assert.equal(uint256ovziCnY, BigInt("0"))
		await expect(KPLAYbBCfc3T.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKsygUGS = await KPLAY.new({from: accounts[2]});
		const addressAIdZ5TR = accounts[5]
		const addresshyty0P6 = accounts[3]
		const addresstjIJQ1E = accounts[1]
		const addressEiz1U7 = accounts[4]
		const uintP7TNdJ = BigInt("713")
		const uint256DWFrxC = await KPLAYKsygUGS.allowance.call(addresshyty0P6, addressAIdZ5TR, {from: accounts[5]});
		const uint256NGiEj7f = await KPLAYKsygUGS.allowance.call(addressEiz1U7, addresstjIJQ1E, {from: accounts[4]});
		await KPLAYKsygUGS.pause.call({from: accounts[2]});
		const uint256n31fmfo = await KPLAYKsygUGS.afterTime.call(uintP7TNdJ, {from: accounts[0]});

		assert.equal(uint256DWFrxC, BigInt("0"))
		assert.equal(uint256NGiEj7f, BigInt("0"))
		await expect(KPLAYKsygUGS.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBlpUxo = await KPLAY.new({from: accounts[2]});
		const uintHXYVofN = BigInt("1054")
		const addresst9cXxx = accounts[6]
		const addressENHipG2 = "0x0000000000000000000000000000000000000001"
		const boolF5kWBaK = await KPLAYBlpUxo.decreaseAllowance.call(addresst9cXxx, uintHXYVofN, {from: accounts[4]});
		const boolreUxvUj = await KPLAYBlpUxo.isFrozen.call(addressENHipG2, {from: accounts[3]});

		await expect(KPLAYBlpUxo.decreaseAllowance.call(addresst9cXxx, uintHXYVofN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBlpUxo = await KPLAY.new({from: accounts[2]});
		const addressav5k4bE = accounts[0]
		const uintwAXuMMC = BigInt("224")
		const addressgsZ8s3I = accounts[3]
		const addressHZvOdMS = accounts[3]
		const uint256xjzbMzs = await KPLAYBlpUxo.lockCount.call(addressav5k4bE, {from: accounts[4]});
		await KPLAYBlpUxo.unpause.call({from: accounts[3]});
		const boolUy6SnsE = await KPLAYBlpUxo.transferFrom.call(addressHZvOdMS, addressgsZ8s3I, uintwAXuMMC, {from: accounts[4]});

		assert.equal(uint256xjzbMzs, BigInt("0"))
		await expect(KPLAYBlpUxo.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBlpUxo = await KPLAY.new({from: accounts[2]});
		const addresscbHZ4wH = accounts[0]
		const uintcESQp7C = BigInt("224")
		const addressz2RxDvn = accounts[2]
		const addressxLrPTD3 = accounts[3]
		const booliuL9yjE = await KPLAYBlpUxo.isFrozen.call(addresscbHZ4wH, {from: accounts[1]});
		const boolUy6SnsE = await KPLAYBlpUxo.transferFrom.call(addressxLrPTD3, addressz2RxDvn, uintcESQp7C, {from: accounts[4]});

		assert.equal(booliuL9yjE, false)
		await expect(KPLAYBlpUxo.transferFrom.call(addressxLrPTD3, addressz2RxDvn, uintcESQp7C, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYKsygUGS = await KPLAY.new({from: accounts[2]});
		const uintYCOhOqv = BigInt("732")
		const addressK3FjONC = accounts[3]
		const uintcXjCns = BigInt("711")
		const boolwQC2Tpt = await KPLAYKsygUGS.mint.call(addressK3FjONC, uintYCOhOqv, {from: accounts[2]});
		const uint256n31fmfo = await KPLAYKsygUGS.afterTime.call(uintcXjCns, {from: accounts[0]});

		assert.equal(boolwQC2Tpt, true)
		assert.equal(uint256n31fmfo, BigInt("1630228761"))
	});

	it('test for KPLAY', async () => {
		const KPLAYBlpUxo = await KPLAY.new({from: accounts[2]});
		const uintiMZIKp = BigInt("590")
		const uintNvLfEL2 = BigInt("539")
		const addressONloJ1 = accounts[1]
		const uintyQGDdvI = BigInt("1934")
		const addressf6pB1D5 = accounts[4]
		const uintCQK4fd = BigInt("224")
		const addressr5Fj1tW = accounts[2]
		const addressYUF9WqO = accounts[4]
		const boolh35eoxW = await KPLAYBlpUxo.transferWithLock.call(addressONloJ1, uintNvLfEL2, uintiMZIKp, {from: accounts[2]});
		const boolvgrsZBL = await KPLAYBlpUxo.decreaseAllowance.call(addressf6pB1D5, uintyQGDdvI, {from: accounts[5]});
		const boolUy6SnsE = await KPLAYBlpUxo.transferFrom.call(addressYUF9WqO, addressr5Fj1tW, uintCQK4fd, {from: accounts[4]});

		assert.equal(boolh35eoxW, true)
		await expect(KPLAYBlpUxo.decreaseAllowance.call(addressf6pB1D5, uintyQGDdvI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBlpUxo = await KPLAY.new({from: accounts[2]});
		const addressoiyzbSs = accounts[3]
		const uintCyiyWDU = BigInt("517")
		const uintrOdJje8 = BigInt("593")
		const addressnLeuvK = accounts[0]
		const addressqGa6ztK = accounts[4]
		const addressCUQyfZ = await KPLAYBlpUxo.transferOwnership.call(addressoiyzbSs, {from: accounts[2]});
		const boolw7dYo30 = await KPLAYBlpUxo.transferWithLock.call(addressnLeuvK, uintrOdJje8, uintCyiyWDU, {from: accounts[4]});
		const uint2564Q7KDl = await KPLAYBlpUxo.balanceOf.call(addressqGa6ztK, {from: accounts[2]});

		await expect(KPLAYBlpUxo.transferWithLock.call(addressnLeuvK, uintrOdJje8, uintCyiyWDU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBlpUxo = await KPLAY.new({from: accounts[2]});
		const uintEDJaS1i = BigInt("1565")
		const uintdH5aax2 = BigInt("1899")
		const addressmO8lsiL = accounts[2]
		const uintfpALE7r = BigInt("224")
		const addressi5JZjDi = accounts[2]
		const addressRnc1PrG = accounts[3]
		const boolN8XMNV4 = await KPLAYBlpUxo.transferWithLockAfter.call(addressmO8lsiL, uintdH5aax2, uintEDJaS1i, {from: accounts[2]});
		const boolUy6SnsE = await KPLAYBlpUxo.transferFrom.call(addressRnc1PrG, addressi5JZjDi, uintfpALE7r, {from: accounts[4]});

		assert.equal(boolN8XMNV4, true)
		await expect(KPLAYBlpUxo.transferFrom.call(addressRnc1PrG, addressi5JZjDi, uintfpALE7r, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBlpUxo = await KPLAY.new({from: accounts[2]});
		const addressVcCDVP9 = "0x0000000000000000000000000000000000000001"
		const addressfFbnXOX = accounts[4]
		await KPLAYBlpUxo.unpause.call({from: accounts[2]});
		const addressu48iFv3 = await KPLAYBlpUxo.freeze.call(addressVcCDVP9, {from: accounts[5]});
		const uint2564Q7KDl = await KPLAYBlpUxo.balanceOf.call(addressfFbnXOX, {from: accounts[2]});

		await expect(KPLAYBlpUxo.unpause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBlpUxo = await KPLAY.new({from: accounts[2]});
		const uintTvs0alr = BigInt("677")
		const uintQS2cHI9 = BigInt("143")
		const addressESm4VyY = accounts[2]
		const uintCo0ysl7 = BigInt("224")
		const addressw1lUxqO = accounts[3]
		const addressh7YNFdX = accounts[3]
		const uintKUmbCD = BigInt("1864")
		const uintizPJ1F = BigInt("1927")
		const address88Zt2J = accounts[0]
		const uintpqf2I1 = BigInt("1592")
		const uintclou9Wn = BigInt("1375")
		const addressDc6hMpv = accounts[2]
		const addressyPgEPL4 = await KPLAYBlpUxo.lockAfter.call(addressESm4VyY, uintQS2cHI9, uintTvs0alr, {from: accounts[2]});
		await KPLAYBlpUxo.whenNotFrozen.call({from: accounts[0]});
		const boolUy6SnsE = await KPLAYBlpUxo.transferFrom.call(addressh7YNFdX, addressw1lUxqO, uintCo0ysl7, {from: accounts[4]});
		const boolahhFzVD = await KPLAYBlpUxo.transferWithLockAfter.call(address88Zt2J, uintizPJ1F, uintKUmbCD, {from: accounts[1]});
		const boolJjFcCsw = await KPLAYBlpUxo.transferWithLock.call(addressDc6hMpv, uintclou9Wn, uintpqf2I1, {from: accounts[0]});

		await expect(KPLAYBlpUxo.whenNotFrozen.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBlpUxo = await KPLAY.new({from: accounts[2]});
		const address9R3Lu2 = accounts[4]
		await KPLAYBlpUxo.renounceOwnership.call({from: accounts[2]});
		const uint2564Q7KDl = await KPLAYBlpUxo.balanceOf.call(address9R3Lu2, {from: accounts[2]});

		await expect(KPLAYBlpUxo.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBlpUxo = await KPLAY.new({from: accounts[2]});
		const uintReDYsTT = BigInt("466")
		const addressoSYzCGq = accounts[2]
		const uintpMSiqjX = BigInt("224")
		const addressRI7oOK = accounts[3]
		const addressQv9e4v = accounts[3]
		const addressbEX5PTz = await KPLAYBlpUxo.burn.call(addressoSYzCGq, uintReDYsTT, {from: accounts[2]});
		const boolUy6SnsE = await KPLAYBlpUxo.transferFrom.call(addressQv9e4v, addressRI7oOK, uintpMSiqjX, {from: accounts[4]});

		await expect(KPLAYBlpUxo.transferFrom.call(addressQv9e4v, addressRI7oOK, uintpMSiqjX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYsJF6Svr = await KPLAY.new({from: accounts[0]});
		const addressiT6uJ97 = accounts[0]
		const uintfi44rPq = BigInt("506")
		const addressBUIpaw5 = "0x0000000000000000000000000000000000000001"
		const addressxU2XF0C = accounts[4]
		const addressxA30f4W = await KPLAYsJF6Svr.unfreeze.call(addressiT6uJ97, {from: accounts[0]});
		const addressjqb9j3q = await KPLAYsJF6Svr.burn.call(addressBUIpaw5, uintfi44rPq, {from: accounts[1]});
		const addressYsAcVU6 = await KPLAYsJF6Svr.transferOwnership.call(addressxU2XF0C, {from: accounts[0]});

		await expect(KPLAYsJF6Svr.burn.call(addressBUIpaw5, uintfi44rPq, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYBlpUxo = await KPLAY.new({from: accounts[2]});
		const addressxgObZc = accounts[2]
		const uintCRVQLob = BigInt("681")
		const uintwoc7hU1 = BigInt("1196")
		const addressaBeyAlH = "0x0000000000000000000000000000000000000001"
		const address1KKFzH = accounts[4]
		const uint256nqycFod = await KPLAYBlpUxo.balanceOf.call(addressxgObZc, {from: accounts[1]});
		const addressQ3Mvxca = await KPLAYBlpUxo.lock.call(addressaBeyAlH, uintwoc7hU1, uintCRVQLob, {from: accounts[2]});
		await KPLAYBlpUxo.whenNotPaused.call({from: accounts[1]});
		const uint2564Q7KDl = await KPLAYBlpUxo.balanceOf.call(address1KKFzH, {from: accounts[2]});

		assert.equal(uint256nqycFod, BigInt("10000000000000000"))
		await expect(KPLAYBlpUxo.lock.call(addressaBeyAlH, uintwoc7hU1, uintCRVQLob, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})