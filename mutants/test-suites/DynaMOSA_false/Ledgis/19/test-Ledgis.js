const Ledgis = artifacts.require("Ledgis");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Ledgis', (accounts) => {
	it('test for Ledgis', async () => {
		const Ledgisi5HaPc = await Ledgis.new({from: accounts[1]});
		const uintSH1yw7 = BigInt("913")
		const addressdw9X1Rn = accounts[3]
		const uintgKy9e4S = BigInt("670")
		const addressIysk3uk = accounts[2]
		const uintadrTejQ = BigInt("654")
		const addressn0QHIpk = accounts[0]
		const address14zqSh = accounts[0]
//		const boolESPgvUX = await Ledgisi5HaPc.decreaseAllowance.call(addressdw9X1Rn, uintSH1yw7, {from: accounts[2]});
//		await Ledgisi5HaPc.lockState.call(addressIysk3uk, uintgKy9e4S, {from: accounts[2]});
//		const uint256cY1jkL = await Ledgisi5HaPc.afterTime.call(uintadrTejQ, {from: accounts[4]});
//		const uint256JL8o3R = await Ledgisi5HaPc.allowance.call(address14zqSh, addressn0QHIpk, {from: accounts[5]});

		await expect(Ledgisi5HaPc.decreaseAllowance.call(addressdw9X1Rn, uintSH1yw7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisWlE8Qx8 = await Ledgis.new({from: accounts[2]});
		const uintLC2HKmp = BigInt("1211")
		const addressKFDgpyT = accounts[4]
//		const boolNWhq7MX = await LedgisWlE8Qx8.mint.call(addressKFDgpyT, uintLC2HKmp, {from: accounts[4]});
//		await LedgisWlE8Qx8.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisWlE8Qx8.mint.call(addressKFDgpyT, uintLC2HKmp, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisiwGCS2L = await Ledgis.new({from: accounts[2]});
		const uintt7pELo1 = BigInt("1138")
		const addressjl346dw = accounts[0]
		const addressiQNJrgg = accounts[3]
		const uintlZfMWEm = BigInt("1739")
		const addressR0x0LyC = accounts[1]
		const addressYcpA7cG = accounts[2]
//		const boolvidV2Ug = await LedgisiwGCS2L.transferFrom.call(addressiQNJrgg, addressjl346dw, uintt7pELo1, {from: "0x0000000000000000000000000000000000000001"});
//		const addressvI5Zh8D = await LedgisiwGCS2L.burn.call(addressR0x0LyC, uintlZfMWEm, {from: accounts[0]});
//		const uint256EP9HU0U = await LedgisiwGCS2L.balanceOf.call(addressYcpA7cG, {from: accounts[4]});
//		await LedgisiwGCS2L.pause.call({from: accounts[0]});

		await expect(LedgisiwGCS2L.transferFrom.call(addressiQNJrgg, addressjl346dw, uintt7pELo1, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis3gMKeX = await Ledgis.new({from: accounts[2]});
		const uintzW45ZaW = BigInt("769")
		const addressYW0pPXZ = accounts[2]
		const uinttxKdJHO = BigInt("498")
		const uintBhzAaJM = BigInt("1416")
		const addressBBE4UYd = accounts[3]
		const uinto8VFiq = BigInt("1125")
		const uintMC6ECZ4 = BigInt("1064")
		const addressLU0MZYf = accounts[0]
		const boolCWPFZok = await Ledgis3gMKeX.transfer.call(addressYW0pPXZ, uintzW45ZaW, {from: accounts[2]});
//		const booles6cD3i = await Ledgis3gMKeX.transferWithLock.call(addressBBE4UYd, uintBhzAaJM, uinttxKdJHO, {from: accounts[3]});
//		const addressaJjswvy = await Ledgis3gMKeX.lock.call(addressLU0MZYf, uintMC6ECZ4, uinto8VFiq, {from: accounts[5]});

		assert.equal(boolCWPFZok, true)
		await expect(Ledgis3gMKeX.transferWithLock.call(addressBBE4UYd, uintBhzAaJM, uinttxKdJHO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisepZdvfO = await Ledgis.new({from: accounts[4]});
		const uintgKuGPrw = BigInt("590")
		const addressU7r5r7o = accounts[1]
		const uintbzGGmAK = BigInt("485")
		const addresszAUjUNt = accounts[4]
		const uintxQDmSJJ = BigInt("753")
		const addressfRr9DO1 = accounts[2]
		const addressW77nC4U = accounts[5]
//		await LedgisepZdvfO.onlyOwner.call({from: accounts[0]});
//		await LedgisepZdvfO.unpause.call({from: accounts[1]});
//		await LedgisepZdvfO.lockState.call(addressU7r5r7o, uintgKuGPrw, {from: accounts[5]});
//		const addressAKyOnpS = await LedgisepZdvfO.unlock.call(addresszAUjUNt, uintbzGGmAK, {from: accounts[5]});
//		const boolxFlxbYJ = await LedgisepZdvfO.transferFrom.call(addressW77nC4U, addressfRr9DO1, uintxQDmSJJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisepZdvfO.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisG8aDv0 = await Ledgis.new({from: accounts[3]});
		const addresssXsVknF = accounts[2]
		const uintKSss0l = BigInt("818")
		const addresshlA55ij = accounts[0]
		const addressuTcQzxm = accounts[2]
		const uinteWTH2IV = BigInt("1502")
		const addressRjEMoLB = accounts[3]
		const addressVtQTjZ2 = accounts[5]
		const addressoJqoeig = await LedgisG8aDv0.unfreeze.call(addresssXsVknF, {from: accounts[3]});
//		const boolq5tnkJO = await LedgisG8aDv0.transferFrom.call(addressuTcQzxm, addresshlA55ij, uintKSss0l, {from: accounts[0]});
//		const booljcjXCT4 = await LedgisG8aDv0.transferFrom.call(addressVtQTjZ2, addressRjEMoLB, uinteWTH2IV, {from: accounts[1]});

		await expect(LedgisG8aDv0.transferFrom.call(addressuTcQzxm, addresshlA55ij, uintKSss0l, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskNhVz6J = await Ledgis.new({from: accounts[0]});
		const addressVCsxG0 = accounts[3]
		const uintqEQTJj = BigInt("846")
		const addressgux1vsy = accounts[1]
		const uinteYoFrpK = BigInt("1412")
		const addressAsItjlk = accounts[3]
		const addressCnjODvj = accounts[1]
		const uint256gxBRdQS = await LedgiskNhVz6J.balanceOf.call(addressVCsxG0, {from: accounts[3]});
//		const boolZ7HEeGZ = await LedgiskNhVz6J.decreaseAllowance.call(addressgux1vsy, uintqEQTJj, {from: accounts[1]});
//		const boolrsKrvZE = await LedgiskNhVz6J.transferFrom.call(addressCnjODvj, addressAsItjlk, uinteYoFrpK, {from: accounts[0]});

		assert.equal(uint256gxBRdQS, BigInt("0"))
		await expect(LedgiskNhVz6J.decreaseAllowance.call(addressgux1vsy, uintqEQTJj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisWlE8Qx8 = await Ledgis.new({from: accounts[2]});
		const uintSN3jsTh = BigInt("1640")
		const addressX0dUTdL = accounts[4]
		const uintPOOyc7L = BigInt("1213")
		const addresshNVoNUe = accounts[4]
//		await LedgisWlE8Qx8.lockState.call(addressX0dUTdL, uintSN3jsTh, {from: accounts[4]});
//		const boolNWhq7MX = await LedgisWlE8Qx8.mint.call(addresshNVoNUe, uintPOOyc7L, {from: accounts[4]});
//		await LedgisWlE8Qx8.whenNotPaused.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(LedgisWlE8Qx8.lockState.call(addressX0dUTdL, uintSN3jsTh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisF01hVzp = await Ledgis.new({from: accounts[3]});
		const address9hkF5t = accounts[1]
		const uintXmrHu3v = BigInt("812")
		const addressUeisiJR = accounts[4]
		const uintBzY0Bwa = BigInt("782")
		const addressq4xvwaa = accounts[4]
		const uint256EtmbZY9 = await LedgisF01hVzp.lockCount.call(address9hkF5t, {from: accounts[2]});
//		const boolpYZvzzd = await LedgisF01hVzp.transfer.call(addressUeisiJR, uintXmrHu3v, {from: accounts[4]});
//		const addressltUFmy = await LedgisF01hVzp.burn.call(addressq4xvwaa, uintBzY0Bwa, {from: accounts[0]});

		assert.equal(uint256EtmbZY9, BigInt("0"))
		await expect(LedgisF01hVzp.transfer.call(addressUeisiJR, uintXmrHu3v, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisG8aDv0 = await Ledgis.new({from: accounts[3]});
		const uintf51yZi = BigInt("525")
		const addressf2pe2NY = accounts[0]
		const uintNXhkQW = BigInt("1412")
		const addressVNIPDkR = accounts[1]
		const uinthmarLAu = BigInt("1014")
		const uinthp4x7UV = BigInt("805")
		const addresswE6uDrw = accounts[2]
		const uintPcQlONX = BigInt("1502")
		const addressgLnBE4V = accounts[3]
		const addressAJ2G2eP = accounts[6]
		const boolRfmvGQ1 = await LedgisG8aDv0.increaseAllowance.call(addressf2pe2NY, uintf51yZi, {from: accounts[1]});
//		const addresse4IfRhB = await LedgisG8aDv0.unlock.call(addressVNIPDkR, uintNXhkQW, {from: "0x0000000000000000000000000000000000000001"});
//		const addressLhFVsAg = await LedgisG8aDv0.lockAfter.call(addresswE6uDrw, uinthp4x7UV, uinthmarLAu, {from: accounts[4]});
//		const booljcjXCT4 = await LedgisG8aDv0.transferFrom.call(addressAJ2G2eP, addressgLnBE4V, uintPcQlONX, {from: accounts[1]});

		assert.equal(boolRfmvGQ1, true)
		await expect(LedgisG8aDv0.unlock.call(addressVNIPDkR, uintNXhkQW, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgismPCL3K = await Ledgis.new({from: accounts[3]});
		const uintOloC0O3 = BigInt("731")
		const uintuWkGec = BigInt("1651")
		const addressP40xn8K = accounts[2]
		const addressU8XU7PU = accounts[0]
		const uint256cX8iXIw = await LedgismPCL3K.afterTime.call(uintOloC0O3, {from: accounts[1]});
//		await LedgismPCL3K.unpause.call({from: accounts[1]});
//		await LedgismPCL3K.lockState.call(addressP40xn8K, uintuWkGec, {from: accounts[2]});
//		const addressiqg75E = await LedgismPCL3K.unfreeze.call(addressU8XU7PU, {from: accounts[4]});
//		await LedgismPCL3K.whenPaused.call({from: accounts[4]});

		assert.equal(uint256cX8iXIw, BigInt("1630233432"))
		await expect(LedgismPCL3K.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskNhVz6J = await Ledgis.new({from: accounts[0]});
		const addressZl3i5Tq = accounts[3]
		const addressi46ieEG = accounts[0]
		const addressF6uqxrV = accounts[2]
		const uintXcfjD35 = BigInt("1412")
		const addressInF7ImV = accounts[3]
		const addressooX4vl7 = accounts[1]
		const addressEdmSSa = accounts[2]
		const uint256gxBRdQS = await LedgiskNhVz6J.balanceOf.call(addressZl3i5Tq, {from: accounts[3]});
		const uint256L0ModJj = await LedgiskNhVz6J.balanceOf.call(addressi46ieEG, {from: accounts[5]});
		const boolonkHz2U = await LedgiskNhVz6J.isFrozen.call(addressF6uqxrV, {from: accounts[0]});
//		const boolrsKrvZE = await LedgiskNhVz6J.transferFrom.call(addressooX4vl7, addressInF7ImV, uintXcfjD35, {from: accounts[0]});
//		const addressuCh3EC0 = await LedgiskNhVz6J.freeze.call(addressEdmSSa, {from: accounts[2]});

		assert.equal(boolonkHz2U, false)
		assert.equal(uint256L0ModJj, BigInt("10000000000000"))
		assert.equal(uint256gxBRdQS, BigInt("0"))
		await expect(LedgiskNhVz6J.transferFrom.call(addressooX4vl7, addressInF7ImV, uintXcfjD35, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisfH6YN92 = await Ledgis.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTu4Fdic = BigInt("1004")
		const uintikeNqE7 = BigInt("849")
		const addressOikNLb1 = accounts[5]
		const addressyLrVEo0 = accounts[1]
		const address443djm = accounts[1]
		const uintHxSopxC = BigInt("306")
		const addressXyHCqrV = accounts[0]
		const addressjUPQR8H = accounts[2]
		const addressqO21R6 = accounts[2]
		const addressGmdHZV5 = await LedgisfH6YN92.lock.call(addressOikNLb1, uintikeNqE7, uintTu4Fdic, {from: accounts[3]});
		const uint256w9FwAtI = await LedgisfH6YN92.allowance.call(address443djm, addressyLrVEo0, {from: accounts[5]});
		const addressRkwK8Xk = await LedgisfH6YN92.burn.call(addressXyHCqrV, uintHxSopxC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BOQFi3c = await LedgisfH6YN92.balanceOf.call(addressjUPQR8H, {from: accounts[2]});
		const uint256ldwoL8Q = await LedgisfH6YN92.lockCount.call(addressqO21R6, {from: accounts[4]});
	});

	it('test for Ledgis', async () => {
		const LedgisG8aDv0 = await Ledgis.new({from: accounts[3]});
		const uintMDnSFmK = BigInt("666")
		const uintgi23AY = BigInt("660")
		const addressQMll0EH = accounts[5]
		const address79ubta = accounts[2]
		const uintqklv0AZ = BigInt("1502")
		const addressdofUFYy = accounts[3]
		const addressknuZLs4 = accounts[6]
		const boolltHV93g = await LedgisG8aDv0.transferWithLockAfter.call(addressQMll0EH, uintgi23AY, uintMDnSFmK, {from: accounts[3]});
		const addressoJqoeig = await LedgisG8aDv0.unfreeze.call(address79ubta, {from: accounts[3]});
//		const booljcjXCT4 = await LedgisG8aDv0.transferFrom.call(addressknuZLs4, addressdofUFYy, uintqklv0AZ, {from: accounts[1]});

		assert.equal(boolltHV93g, true)
		await expect(LedgisG8aDv0.transferFrom.call(addressknuZLs4, addressdofUFYy, uintqklv0AZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskNhVz6J = await Ledgis.new({from: accounts[0]});
		const uinteTsY0d6 = BigInt("1691")
		const addressm0Igcf = accounts[5]
		const addressOMCdxXC = accounts[3]
		const uintwaFgmvd = BigInt("1412")
		const addressUCjhsKN = accounts[3]
		const addressLADWB4 = accounts[1]
		const addresseENg25k = accounts[2]
//		const addressewIDfWJ = await LedgiskNhVz6J.unlock.call(addressm0Igcf, uinteTsY0d6, {from: accounts[0]});
//		const uint256gxBRdQS = await LedgiskNhVz6J.balanceOf.call(addressOMCdxXC, {from: accounts[3]});
//		const boolrsKrvZE = await LedgiskNhVz6J.transferFrom.call(addressLADWB4, addressUCjhsKN, uintwaFgmvd, {from: accounts[0]});
//		const addressuCh3EC0 = await LedgiskNhVz6J.freeze.call(addresseENg25k, {from: accounts[2]});

		await expect(LedgiskNhVz6J.unlock.call(addressm0Igcf, uinteTsY0d6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis3gMKeX = await Ledgis.new({from: accounts[2]});
		const addressKIByocC = accounts[3]
		const uintaLW3PW6 = BigInt("769")
		const addressi2XD4YS = accounts[2]
		const uintcleMzW1 = BigInt("498")
		const uintmeQDrM9 = BigInt("1416")
		const addressevx80fm = accounts[3]
		const uintcmNIoj6 = BigInt("532")
		const addressUlCY8XO = accounts[3]
		const uintI8NKtvB = BigInt("1125")
		const uintaKlUqkR = BigInt("1074")
		const addressohGQHqA = accounts[0]
		const uint256Y3O2bqx = await Ledgis3gMKeX.balanceOf.call(addressKIByocC, {from: accounts[0]});
		const boolCWPFZok = await Ledgis3gMKeX.transfer.call(addressi2XD4YS, uintaLW3PW6, {from: accounts[2]});
//		await Ledgis3gMKeX.renounceOwnership.call({from: accounts[2]});
//		const booles6cD3i = await Ledgis3gMKeX.transferWithLock.call(addressevx80fm, uintmeQDrM9, uintcleMzW1, {from: accounts[3]});
//		await Ledgis3gMKeX.lockState.call(addressUlCY8XO, uintcmNIoj6, {from: accounts[2]});
//		const addressaJjswvy = await Ledgis3gMKeX.lock.call(addressohGQHqA, uintaKlUqkR, uintI8NKtvB, {from: accounts[5]});

		assert.equal(boolCWPFZok, true)
		assert.equal(uint256Y3O2bqx, BigInt("0"))
		await expect(Ledgis3gMKeX.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgis3gMKeX = await Ledgis.new({from: accounts[2]});
		const addresshGnKs1F = accounts[3]
		const uintuzpytz1 = BigInt("1179")
		const addressSFkHcJ = accounts[4]
		const uintgO8Xco3 = BigInt("769")
		const addressGR8vcJB = accounts[2]
		const uintsXH8iB = BigInt("498")
		const uintEINheTz = BigInt("1416")
		const addressyAdgBX = accounts[3]
		const uintfifl4qo = BigInt("1125")
		const uintUIEFdxe = BigInt("1074")
		const addressPAdbqvG = accounts[0]
		const uint256Y3O2bqx = await Ledgis3gMKeX.balanceOf.call(addresshGnKs1F, {from: accounts[0]});
		const booloqlmf8b = await Ledgis3gMKeX.approve.call(addressSFkHcJ, uintuzpytz1, {from: accounts[4]});
		const boolCWPFZok = await Ledgis3gMKeX.transfer.call(addressGR8vcJB, uintgO8Xco3, {from: accounts[2]});
//		const booles6cD3i = await Ledgis3gMKeX.transferWithLock.call(addressyAdgBX, uintEINheTz, uintsXH8iB, {from: accounts[3]});
//		const addressaJjswvy = await Ledgis3gMKeX.lock.call(addressPAdbqvG, uintUIEFdxe, uintfifl4qo, {from: accounts[5]});

		assert.equal(boolCWPFZok, true)
		assert.equal(booloqlmf8b, true)
		assert.equal(uint256Y3O2bqx, BigInt("0"))
		await expect(Ledgis3gMKeX.transferWithLock.call(addressyAdgBX, uintEINheTz, uintsXH8iB, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskNhVz6J = await Ledgis.new({from: accounts[0]});
		const address7fOD68 = accounts[4]
		const addressafn1TI2 = accounts[4]
		const uint0eq38A = BigInt("1412")
		const addressk8FhPRQ = accounts[3]
		const addressHrrkH0b = accounts[1]
		const uintb4HHQtQ = BigInt("1837")
		const addressPLnPhYQ = accounts[3]
		const uint256gxBRdQS = await LedgiskNhVz6J.balanceOf.call(address7fOD68, {from: accounts[3]});
		const addressZoPZ4xd = await LedgiskNhVz6J.freeze.call(addressafn1TI2, {from: accounts[0]});
//		const boolrsKrvZE = await LedgiskNhVz6J.transferFrom.call(addressHrrkH0b, addressk8FhPRQ, uint0eq38A, {from: accounts[0]});
//		const boolQFKt9CV = await LedgiskNhVz6J.mint.call(addressPLnPhYQ, uintb4HHQtQ, {from: accounts[2]});

		assert.equal(uint256gxBRdQS, BigInt("0"))
		await expect(LedgiskNhVz6J.transferFrom.call(addressHrrkH0b, addressk8FhPRQ, uint0eq38A, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskNhVz6J = await Ledgis.new({from: accounts[0]});
		const addressDfI7ZHp = accounts[1]
		const addressI7vd7pN = accounts[5]
		const uintbQ2qXH = BigInt("1691")
		const addressB9mGDje = accounts[5]
		const uintmPcWvMg = BigInt("1412")
		const addressvueDUXd = accounts[4]
		const addressp6Wh7TI = accounts[2]
		const addressEUuK36O = accounts[2]
		const uint256l32Hrnx = await LedgiskNhVz6J.allowance.call(addressI7vd7pN, addressDfI7ZHp, {from: accounts[0]});
//		const addressewIDfWJ = await LedgiskNhVz6J.unlock.call(addressB9mGDje, uintbQ2qXH, {from: accounts[0]});
//		const boolrsKrvZE = await LedgiskNhVz6J.transferFrom.call(addressp6Wh7TI, addressvueDUXd, uintmPcWvMg, {from: accounts[0]});
//		const addressuCh3EC0 = await LedgiskNhVz6J.freeze.call(addressEUuK36O, {from: accounts[2]});

		assert.equal(uint256l32Hrnx, BigInt("0"))
		await expect(LedgiskNhVz6J.unlock.call(addressB9mGDje, uintbQ2qXH, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskNhVz6J = await Ledgis.new({from: accounts[0]});
		const uintYaB7vaH = BigInt("2031")
		const addressRTyex6 = "0x0000000000000000000000000000000000000001"
		const uintdurtwbY = BigInt("1425")
		const addressP3J2mCm = accounts[4]
		const addressvbk1m6E = accounts[1]
		const booltCfhC4Y = await LedgiskNhVz6J.mint.call(addressRTyex6, uintYaB7vaH, {from: accounts[0]});
//		const boolrsKrvZE = await LedgiskNhVz6J.transferFrom.call(addressvbk1m6E, addressP3J2mCm, uintdurtwbY, {from: accounts[0]});

		assert.equal(booltCfhC4Y, true)
		await expect(LedgiskNhVz6J.transferFrom.call(addressvbk1m6E, addressP3J2mCm, uintdurtwbY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const Ledgisb9teCDt = await Ledgis.new({from: accounts[1]});
		const addressOfYeXHs = accounts[1]
		const uint256FVWt0WG = await Ledgisb9teCDt.currentTime.call({from: accounts[4]});
		const uint256nvzE7VY = await Ledgisb9teCDt.lockCount.call(addressOfYeXHs, {from: accounts[4]});
//		await Ledgisb9teCDt.pause.call({from: accounts[0]});

		assert.equal(uint256FVWt0WG, BigInt("1630232689"))
		assert.equal(uint256nvzE7VY, BigInt("0"))
		await expect(Ledgisb9teCDt.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskNhVz6J = await Ledgis.new({from: accounts[0]});
		const addresswxjvKSD = accounts[4]
		const uintWu3AJn = BigInt("527")
		const uintN3Dp7x3 = BigInt("1856")
		const addressUU8yWe6 = "0x0000000000000000000000000000000000000001"
		const uint256gxBRdQS = await LedgiskNhVz6J.balanceOf.call(addresswxjvKSD, {from: accounts[3]});
//		const addressNO2HX4D = await LedgiskNhVz6J.lockAfter.call(addressUU8yWe6, uintN3Dp7x3, uintWu3AJn, {from: accounts[0]});

		assert.equal(uint256gxBRdQS, BigInt("0"))
		await expect(LedgiskNhVz6J.lockAfter.call(addressUU8yWe6, uintN3Dp7x3, uintWu3AJn, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskNhVz6J = await Ledgis.new({from: accounts[0]});
		const addressdw9Ans = accounts[1]
		const addressAukbptv = accounts[4]
		const uintxMA1Ylo = BigInt("1510")
		const addresspcajLGl = accounts[4]
		const uintDaBmve9 = BigInt("1412")
		const addressNrlCWh = accounts[3]
		const addressEi7QfjL = accounts[1]
		const uint256AuMR7In = await LedgiskNhVz6J.balanceOf.call(addressdw9Ans, {from: accounts[3]});
		const uint256LB8hNg = await LedgiskNhVz6J.totalSupply.call({from: accounts[3]});
		const uint256gxBRdQS = await LedgiskNhVz6J.balanceOf.call(addressAukbptv, {from: accounts[3]});
//		const booleTOYZU = await LedgiskNhVz6J.mint.call(addresspcajLGl, uintxMA1Ylo, {from: accounts[2]});
//		const boolrsKrvZE = await LedgiskNhVz6J.transferFrom.call(addressEi7QfjL, addressNrlCWh, uintDaBmve9, {from: accounts[0]});

		assert.equal(uint256AuMR7In, BigInt("0"))
		assert.equal(uint256LB8hNg, BigInt("10000000000000"))
		assert.equal(uint256gxBRdQS, BigInt("0"))
		await expect(LedgiskNhVz6J.mint.call(addresspcajLGl, uintxMA1Ylo, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskNhVz6J = await Ledgis.new({from: accounts[0]});
		const addressuZPwewy = accounts[3]
		const uintSWnx4f7 = BigInt("1412")
		const addressYyIUaGF = accounts[3]
		const addressowQA6sP = accounts[1]
		const uint256gxBRdQS = await LedgiskNhVz6J.balanceOf.call(addressuZPwewy, {from: accounts[3]});
//		await LedgiskNhVz6J.pause.call({from: accounts[0]});
//		const boolrsKrvZE = await LedgiskNhVz6J.transferFrom.call(addressowQA6sP, addressYyIUaGF, uintSWnx4f7, {from: accounts[0]});

		assert.equal(uint256gxBRdQS, BigInt("0"))
		await expect(LedgiskNhVz6J.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisRUyzT00 = await Ledgis.new({from: accounts[1]});
		const address7xXKXi = accounts[3]
		const addressYKVHpyx = accounts[1]
		const addressJsRvb1v = accounts[4]
		const addressBJjqEOm = await LedgisRUyzT00.transferOwnership.call(address7xXKXi, {from: accounts[1]});
		const uint256nzGNIMr = await LedgisRUyzT00.allowance.call(addressJsRvb1v, addressYKVHpyx, {from: accounts[4]});
//		await LedgisRUyzT00.whenPaused.call({from: accounts[4]});

		assert.equal(uint256nzGNIMr, BigInt("0"))
		await expect(LedgisRUyzT00.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgisiWJRQL = await Ledgis.new({from: accounts[1]});
		const uint3TULda = BigInt("1178")
		const uintUJRMNDc = BigInt("1298")
		const addressnSBfNnV = accounts[4]
		const uinthuYI6YB = BigInt("1312")
		const uintMUAUCim = BigInt("330")
		const addressfhhAgen = accounts[5]
		const uintQiTrHSm = BigInt("1788")
		const addressxiXkHDr = accounts[1]
		const boolwXAmvl = await LedgisiWJRQL.transferWithLockAfter.call(addressnSBfNnV, uintUJRMNDc, uint3TULda, {from: accounts[1]});
//		const addresseZR2mr5 = await LedgisiWJRQL.lock.call(addressfhhAgen, uintMUAUCim, uinthuYI6YB, {from: accounts[1]});
//		await LedgisiWJRQL.renounceOwnership.call({from: accounts[3]});
//		const addressacQv37 = await LedgisiWJRQL.burn.call(addressxiXkHDr, uintQiTrHSm, {from: accounts[2]});

		assert.equal(boolwXAmvl, true)
		await expect(LedgisiWJRQL.lock.call(addressfhhAgen, uintMUAUCim, uinthuYI6YB, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskNhVz6J = await Ledgis.new({from: accounts[0]});
		const uintp3mAmU = BigInt("211")
		const addressJWEttyN = accounts[1]
		const uintlaZa06P = BigInt("255")
		const uintN336PIg = BigInt("1370")
		const addressWcVnWxo = accounts[0]
		const uintk3G27EN = BigInt("1425")
		const addressrmwaBp = accounts[4]
		const address8bAFI1 = accounts[1]
//		const addressRoWNTCQ = await LedgiskNhVz6J.burn.call(addressJWEttyN, uintp3mAmU, {from: accounts[0]});
//		const addressOwSKetw = await LedgiskNhVz6J.lockAfter.call(addressWcVnWxo, uintN336PIg, uintlaZa06P, {from: "0x0000000000000000000000000000000000000001"});
//		const boolrsKrvZE = await LedgiskNhVz6J.transferFrom.call(address8bAFI1, addressrmwaBp, uintk3G27EN, {from: accounts[0]});

		await expect(LedgiskNhVz6J.burn.call(addressJWEttyN, uintp3mAmU, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskNhVz6J = await Ledgis.new({from: accounts[0]});
		const addressOYVciqI = accounts[5]
		const uintqnLsJNa = BigInt("762")
		const uintZUH0cSL = BigInt("160")
		const addressfsC1wWd = accounts[4]
		const uintRQig3Q8 = BigInt("291")
		const addressLo0q5wV = accounts[4]
		const uint256gxBRdQS = await LedgiskNhVz6J.balanceOf.call(addressOYVciqI, {from: accounts[3]});
//		await LedgiskNhVz6J.unpause.call({from: accounts[0]});
//		const uint256DuWXXL1 = await LedgiskNhVz6J.afterTime.call(uintqnLsJNa, {from: accounts[2]});
//		const boolpXVzRt = await LedgiskNhVz6J.approve.call(addressfsC1wWd, uintZUH0cSL, {from: accounts[4]});
//		const addressqj8lMJ = await LedgiskNhVz6J.burn.call(addressLo0q5wV, uintRQig3Q8, {from: accounts[0]});

		assert.equal(uint256gxBRdQS, BigInt("0"))
		await expect(LedgiskNhVz6J.unpause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Ledgis', async () => {
		const LedgiskNhVz6J = await Ledgis.new({from: accounts[0]});
		const addressCTd5UfO = accounts[5]
		const addressDmnj2kt = accounts[5]
		const uintZ0ppH7q = BigInt("160")
		const addressuK2Jov = accounts[4]
		const uintpAAEnZo = BigInt("885")
		const uintM0ZUpiL = BigInt("681")
		const addressWsaAHz7 = accounts[0]
		const uint256Dw4G8pN = await LedgiskNhVz6J.balanceOf.call(addressCTd5UfO, {from: accounts[0]});
		const uint256gxBRdQS = await LedgiskNhVz6J.balanceOf.call(addressDmnj2kt, {from: accounts[3]});
		const boolpXVzRt = await LedgiskNhVz6J.approve.call(addressuK2Jov, uintZ0ppH7q, {from: accounts[4]});
		const boolBuVA3Nh = await LedgiskNhVz6J.transferWithLock.call(addressWsaAHz7, uintM0ZUpiL, uintpAAEnZo, {from: accounts[0]});

		assert.equal(boolBuVA3Nh, true)
		assert.equal(boolpXVzRt, true)
		assert.equal(uint256Dw4G8pN, BigInt("0"))
		assert.equal(uint256gxBRdQS, BigInt("0"))
	});
})