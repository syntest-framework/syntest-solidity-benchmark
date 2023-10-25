const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringeCujY3r = "23MCv"
		const stringo2mTJ5 = "jMFljo2BChxGj"
		const uint9AymGg = BigInt("144")
		const XenoFelixowtuBfr = await XenoFelix.new(stringeCujY3r, stringo2mTJ5, uint9AymGg, {from: accounts[3]});
		const uintFiHgTMa = BigInt("1882")
		const addresstloDf8y = accounts[2]
		const uint256TC0720t = await XenoFelixowtuBfr.burn.call(uintFiHgTMa, {from: "0x0000000000000000000000000000000000000001"});
		const boolbp9Ef0a = await XenoFelixowtuBfr.unfreezeAccount.call(addresstloDf8y, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const stringtbxekxP = "RSprVgeqm926RMGUmQECm6mPqwUUALWVdCjDGObgDoIybDXPDEN8o1eCjSFSLCr3yiUP4dAFENjqq"
		const stringdUjDP5m = "N0foxeDxzXMyMnQs37Yep"
		const uintICixOQS = BigInt("219")
		const uintAx2A8js = BigInt("255")
		const XenoFelixSUA3yxM = await XenoFelix.new(stringtbxekxP, stringdUjDP5m, uintICixOQS, uintAx2A8js, {from: accounts[3]});
		const uintk1BHPw = BigInt("649")
		const addressqZtDtVL = accounts[4]
		const addressxJwoh4 = accounts[2]
		const uintoeqAyX = BigInt("412")
		const addressGn0QF6f = accounts[5]
		const boolo6CQJR = await XenoFelixSUA3yxM.paused.call({from: accounts[4]});
		const uint256x81yqyO = await XenoFelixSUA3yxM.totalSupply.call({from: accounts[5]});
		const boolJ2US8tY = await XenoFelixSUA3yxM.approve.call(addressqZtDtVL, uintk1BHPw, {from: accounts[3]});
		const addressIQoKaTP = await XenoFelixSUA3yxM.addPauser.call(addressxJwoh4, {from: accounts[0]});
		const boolJUozBuw = await XenoFelixSUA3yxM.transfer.call(addressGn0QF6f, uintoeqAyX, {from: accounts[1]});

		assert.equal(boolJ2US8tY, true)
		assert.equal(boolo6CQJR, false)
		assert.equal(uint256x81yqyO, BigInt("57896044618658097711785492504343953926634992332820282019728792003956564819968"))
		await expect(XenoFelixSUA3yxM.addPauser.call(addressxJwoh4, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringKSNTw43 = "Jkq7KQEPo0y1"
		const stringEMAZuEF = "ZkvWCIgD6yYzun9d8ljaCgGjUvunKNyTpCiMxvvMRc0l"
		const uintmR7dX6v = BigInt("90")
		const XenoFelixRSX10PB = await XenoFelix.new(stringKSNTw43, stringEMAZuEF, uintmR7dX6v, {from: accounts[4]});
		const addressgYjtvrz = accounts[5]
		const addressulebm3M = accounts[4]
		const addresskWfCvbt = accounts[0]
		const booldIxrilX = await XenoFelixRSX10PB.isPauser.call(addressgYjtvrz, {from: accounts[0]});
		const boolK2siqns = await XenoFelixRSX10PB.isOwner.call(addressulebm3M, {from: accounts[5]});
		const boolxQPLCK = await XenoFelixRSX10PB.isPauser.call(addresskWfCvbt, {from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringMYuhQ3I = "7vf1OuBgQKeaXWoXa0mUgdlP"
		const stringPG3nVkk = "ana9rq2GuIGSj2OtxsDcWm2lW3g8kt"
		const uinteN1P7iW = BigInt("374")
		const uintsVw5Gc3 = BigInt("155")
		const XenoFelixlBxdQXs = await XenoFelix.new(stringMYuhQ3I, stringPG3nVkk, uinteN1P7iW, uintsVw5Gc3, {from: accounts[0]});
		const addressm0gEW9s = accounts[2]
		const addressKIYxToz = "0x0000000000000000000000000000000000000001"
		const addressmGuaBfZ = accounts[3]
		const uintAPw2va = BigInt("1620")
		const addressUTJQnVB = accounts[0]
		const boolH2E9OXp = await XenoFelixlBxdQXs.freezeAccount.call(addressm0gEW9s, {from: accounts[1]});
		await XenoFelixlBxdQXs.onlyNewOwner.call({from: accounts[3]});
		const uint256NS32Z7a = await XenoFelixlBxdQXs.allowance.call(addressmGuaBfZ, addressKIYxToz, {from: accounts[1]});
		const boolrut5s6b = await XenoFelixlBxdQXs.transfer.call(addressUTJQnVB, uintAPw2va, {from: accounts[5]});

		await expect(XenoFelixlBxdQXs.freezeAccount.call(addressm0gEW9s, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringfRnIHz = "Kmk1qcHiDfTi920oiLdb3VBFYKsqLLql3CdxhPc2HopRKdOmkTTbNDLwS4SsBwDVwNrtN1D9fLqR1WecRTap909e"
		const stringpUb4LlS = "eNFP87wlrALLl"
		const uintrnD59T = BigInt("55")
		const XenoFelixLExgodq = await XenoFelix.new(stringfRnIHz, stringpUb4LlS, uintrnD59T, {from: accounts[2]});
		const uintCxGvO2I = BigInt("1742")
		const addresshWIsxpe = accounts[4]
		const addressQc86f7m = accounts[1]
		const uintnxIa1qy = BigInt("1457")
		const addressHpDmUw = accounts[2]
		const addressskkZZme = accounts[3]
		const uintEsu3J2N = BigInt("827")
		const uintHuNEn9F = BigInt("713")
		const addressW4ucpH = "0x0000000000000000000000000000000000000001"
		const uintvjTnycc = BigInt("812")
		const boolG71aAdt = await XenoFelixLExgodq.transferFrom.call(addressQc86f7m, addresshWIsxpe, uintCxGvO2I, {from: accounts[2]});
		const boolfZeholU = await XenoFelixLExgodq.transferFrom.call(addressskkZZme, addressHpDmUw, uintnxIa1qy, {from: accounts[5]});
		const boolxZJPBmH = await XenoFelixLExgodq.lock.call(addressW4ucpH, uintHuNEn9F, uintEsu3J2N, {from: accounts[1]});
		const uint256AsWqfw7 = await XenoFelixLExgodq.burn.call(uintvjTnycc, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringMtAOO69 = "70SiB9XzXpYumIKu43rNpe2ya2MqoujNf7TF9yaJSZh"
		const stringb9mEOtC = "2wDtgaew6Dv265zbcaucXASRXQ6cj6zoCwoHiWCQ4jo5D1A4E12KzGgIWULhPPZBWiz1P67QSv"
		const uintHgNpT11 = BigInt("125")
		const XenoFelixhPXlced = await XenoFelix.new(stringMtAOO69, stringb9mEOtC, uintHgNpT11, {from: "0x0000000000000000000000000000000000000001"});
		const uintt702y97 = BigInt("320")
		const addresskeCV1wN = accounts[3]
		const addressn0Zh7Ez = accounts[4]
		const uintFk4AsuL = BigInt("1498")
		const addresskFWTMaT = accounts[2]
		const boolCr6XyQC = await XenoFelixhPXlced.transfer.call(addresskeCV1wN, uintt702y97, {from: accounts[2]});
		const boolQp1rh6 = await XenoFelixhPXlced.unfreezeAccount.call(addressn0Zh7Ez, {from: accounts[1]});
		const boolRkAyTzM = await XenoFelixhPXlced.decreaseAllowance.call(addresskFWTMaT, uintFk4AsuL, {from: accounts[3]});
		await XenoFelixhPXlced.whenPaused.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringfI23HUj = "oIVvFtwWJavAyzuREshJcYgDO1nLZ39G34sYRWcfU7FEfMkuvECeDWi5ljTd7REtejfNTdD2HpwkwLKWQI3n5dyo1hEpJK"
		const stringdJlcipO = "kS6dy1QYrIQdBIirIsNrvQBrGRTaiiBNt1tmA2DhMoafsOwZ3yETnmh"
		const uintbG5lANh = BigInt("133")
		const XenoFelixDQiYlI = await XenoFelix.new(stringfI23HUj, stringdJlcipO, uintbG5lANh, {from: accounts[0]});
		const uintNeT22Q = BigInt("556")
		const uintmIG0yeS = BigInt("40")
		const addressMt5ZHt = accounts[2]
		const uintcXJYvo3 = BigInt("1123")
		const addressGymCzHL = accounts[4]
		const uintwBiTBok = BigInt("421")
		const addressf8CUH2H = accounts[3]
		const boolFvFmacp = await XenoFelixDQiYlI.lock.call(addressMt5ZHt, uintmIG0yeS, uintNeT22Q, {from: accounts[1]});
		const boolqIOqYAO = await XenoFelixDQiYlI.transfer.call(addressGymCzHL, uintcXJYvo3, {from: accounts[5]});
		await XenoFelixDQiYlI.whenNotPaused.call({from: accounts[1]});
		const boolHHlNbym = await XenoFelixDQiYlI.transfer.call(addressf8CUH2H, uintwBiTBok, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringpj6BVow = "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp"
		const stringwe0qjJm = "t"
		const uintLog4yEH = BigInt("1969")
		const uintQzOQE5q = BigInt("12")
		const XenoFelixcFaQvQE = await XenoFelix.new(stringpj6BVow, stringwe0qjJm, uintLog4yEH, uintQzOQE5q, {from: accounts[0]});
		const uintVnVoEHl = BigInt("1019")
		const uintdNtE5rx = BigInt("306")
		const addressIzkWgxv = accounts[1]
		const addressYwjRJAh = accounts[1]
		const uint256h7rxfne = await XenoFelixcFaQvQE.burn.call(uintVnVoEHl, {from: accounts[0]});
		const boolb0ZXWB = await XenoFelixcFaQvQE.transferFrom.call(addressYwjRJAh, addressIzkWgxv, uintdNtE5rx, {from: accounts[3]});

		await expect(XenoFelixcFaQvQE.transferFrom.call(addressYwjRJAh, addressIzkWgxv, uintdNtE5rx, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpj6BVow = "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp"
		const stringwe0qjJm = "t"
		const uinteNWOfjf = BigInt("1969")
		const uint9EzoAU = BigInt("12")
		const XenoFelixcFaQvQE = await XenoFelix.new(stringpj6BVow, stringwe0qjJm, uinteNWOfjf, uint9EzoAU, {from: accounts[0]});
		const uintlUDiNna = BigInt("1019")
		const uintrSLSm6m = BigInt("306")
		const addressioQf28f = accounts[1]
		const addressqYQwgGw = accounts[4]
		const string0OvKG4 = await XenoFelixcFaQvQE.name.call({from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixcFaQvQE.whenNotPaused.call({from: accounts[0]});
		const uint256h7rxfne = await XenoFelixcFaQvQE.burn.call(uintlUDiNna, {from: accounts[0]});
		const boolb0ZXWB = await XenoFelixcFaQvQE.transferFrom.call(addressqYQwgGw, addressioQf28f, uintrSLSm6m, {from: accounts[3]});

		assert.equal(string0OvKG4, "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp")
		await expect(XenoFelixcFaQvQE.whenNotPaused.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpj6BVow = "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp"
		const stringwe0qjJm = "t"
		const uintdSyXzPM = BigInt("1969")
		const uintKCm7kkX = BigInt("12")
		const XenoFelixcFaQvQE = await XenoFelix.new(stringpj6BVow, stringwe0qjJm, uintdSyXzPM, uintKCm7kkX, {from: accounts[0]});
		const uintkG3V5ti = BigInt("1019")
		const uintVFMkbiM = BigInt("612")
		const addresstoiLkHy = "0x0000000000000000000000000000000000000001"
		const uint256h7rxfne = await XenoFelixcFaQvQE.burn.call(uintkG3V5ti, {from: accounts[0]});
		const boolWhLL1gz = await XenoFelixcFaQvQE.increaseAllowance.call(addresstoiLkHy, uintVFMkbiM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolWhLL1gz, true)
	});

	it('test for XenoFelix', async () => {
		const XenoFelixkJNecFi = await XenoFelix.new({from: accounts[5]});
		const uintHhXxJK3 = BigInt("550")
		const addressSHxr5Lr = accounts[1]
		const addressNB07f65 = accounts[0]
		const booleaUykX = await XenoFelixkJNecFi.increaseAllowance.call(addressSHxr5Lr, uintHhXxJK3, {from: accounts[0]});
		const boolce1u6L = await XenoFelixkJNecFi.isPauser.call(addressNB07f65, {from: accounts[1]});
		const stringj2ar60X = await XenoFelixkJNecFi.name.call({from: accounts[0]});
		await XenoFelixkJNecFi.whenNotPaused.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringpj6BVow = "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp"
		const stringwe0qjJm = "t"
		const uintHGTiUXW = BigInt("1969")
		const uintImHG7J = BigInt("12")
		const XenoFelixcFaQvQE = await XenoFelix.new(stringpj6BVow, stringwe0qjJm, uintHGTiUXW, uintImHG7J, {from: accounts[0]});
		const uintJW1ad6S = BigInt("1019")
		const addresseGkND3h = "0x0000000000000000000000000000000000000001"
		const uintXFrBtKC = BigInt("1844")
		const addresscr9yJd = accounts[0]
		const uintbhTdd1 = BigInt("306")
		const addressTsqoqUy = accounts[2]
		const addressBsIc9Y9 = accounts[1]
		const uint256h7rxfne = await XenoFelixcFaQvQE.burn.call(uintJW1ad6S, {from: accounts[0]});
		const uint256LPxe1SN = await XenoFelixcFaQvQE.balanceOf.call(addresseGkND3h, {from: accounts[1]});
		const boolqSgoDFJ = await XenoFelixcFaQvQE.transfer.call(addresscr9yJd, uintXFrBtKC, {from: accounts[1]});
		const boolb0ZXWB = await XenoFelixcFaQvQE.transferFrom.call(addressBsIc9Y9, addressTsqoqUy, uintbhTdd1, {from: accounts[3]});

		assert.equal(uint256LPxe1SN, BigInt("0"))
		await expect(XenoFelixcFaQvQE.transfer.call(addresscr9yJd, uintXFrBtKC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpj6BVow = "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp"
		const stringwe0qjJm = "t"
		const uintl0cXvYO = BigInt("1969")
		const uintFyHs8GN = BigInt("12")
		const XenoFelixcFaQvQE = await XenoFelix.new(stringpj6BVow, stringwe0qjJm, uintl0cXvYO, uintFyHs8GN, {from: accounts[0]});
		const uintK5FQhSF = BigInt("1006")
		const uintZMSyAHM = BigInt("306")
		const addressS0t21n = accounts[1]
		const addressk2oQWxf = accounts[1]
		await XenoFelixcFaQvQE.renouncePauser.call({from: accounts[1]});
		const uint256h7rxfne = await XenoFelixcFaQvQE.burn.call(uintK5FQhSF, {from: accounts[0]});
		const boolb0ZXWB = await XenoFelixcFaQvQE.transferFrom.call(addressk2oQWxf, addressS0t21n, uintZMSyAHM, {from: accounts[3]});

		await expect(XenoFelixcFaQvQE.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringOIbhGa4 = "Tsxvo2CKqUUlqEqHU2H8DnCuGzjSJlzf2GP1"
		const stringgug75x = "EcuksaC8YHd44cXSmCbEhExG1VBYDyATK5LTnC"
		const uintIuzPVYN = BigInt("448")
		const uintTIN4A3r = BigInt("171")
		const XenoFelixsDJVJAH = await XenoFelix.new(stringOIbhGa4, stringgug75x, uintIuzPVYN, uintTIN4A3r, {from: accounts[4]});
		const addressGoWd7oO = accounts[3]
		const addressSJ7Zn3c = accounts[1]
		const uint1tUUnd = BigInt("1775")
		const uintLQQJ90 = BigInt("732")
		const addressVruBBg2 = accounts[4]
		const addressbhUXb01 = await XenoFelixsDJVJAH.removePauser.call(addressGoWd7oO, {from: accounts[4]});
		const addressL6Enplx = await XenoFelixsDJVJAH.transferOwnership.call(addressSJ7Zn3c, {from: accounts[0]});
		const boolANveMuO = await XenoFelixsDJVJAH.transferWithLock.call(addressVruBBg2, uintLQQJ90, uint1tUUnd, {from: accounts[2]});

		await expect(XenoFelixsDJVJAH.removePauser.call(addressGoWd7oO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpj6BVow = "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp"
		const stringwe0qjJm = "t"
		const uintBs4Pe0L = BigInt("1969")
		const uintxYE9rGu = BigInt("12")
		const XenoFelixcFaQvQE = await XenoFelix.new(stringpj6BVow, stringwe0qjJm, uintBs4Pe0L, uintxYE9rGu, {from: accounts[0]});
		const addressobiLxPx = accounts[5]
		const addressVHsf7Dp = accounts[1]
		const uintZHb8RJg = BigInt("1019")
		const uintCuJwxio = BigInt("1844")
		const addresshrjVMYY = accounts[0]
		const uint256vle35zW = await XenoFelixcFaQvQE.allowance.call(addressVHsf7Dp, addressobiLxPx, {from: accounts[4]});
		await XenoFelixcFaQvQE.renouncePauser.call({from: accounts[1]});
		const uint256h7rxfne = await XenoFelixcFaQvQE.burn.call(uintZHb8RJg, {from: accounts[0]});
		const boolqSgoDFJ = await XenoFelixcFaQvQE.transfer.call(addresshrjVMYY, uintCuJwxio, {from: accounts[1]});

		assert.equal(uint256vle35zW, BigInt("0"))
		await expect(XenoFelixcFaQvQE.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpj6BVow = "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp"
		const stringwe0qjJm = "t"
		const uintg3zpdaO = BigInt("1969")
		const uintwAQde7 = BigInt("12")
		const XenoFelixcFaQvQE = await XenoFelix.new(stringpj6BVow, stringwe0qjJm, uintg3zpdaO, uintwAQde7, {from: accounts[0]});
		const addressoBiy7wl = "0x0000000000000000000000000000000000000001"
		const uintNBcd2rV = BigInt("1844")
		const addresskELiPaC = accounts[0]
		const uintb6DlFhb = BigInt("1185")
		const addresscowy5qc = accounts[1]
		const addressPhAY7c = accounts[1]
		const uint256LPxe1SN = await XenoFelixcFaQvQE.balanceOf.call(addressoBiy7wl, {from: accounts[1]});
		await XenoFelixcFaQvQE.pause.call({from: accounts[0]});
		const boolqSgoDFJ = await XenoFelixcFaQvQE.transfer.call(addresskELiPaC, uintNBcd2rV, {from: accounts[1]});
		const boolsMlIC72 = await XenoFelixcFaQvQE.transferFrom.call(addressPhAY7c, addresscowy5qc, uintb6DlFhb, {from: accounts[4]});

		assert.equal(uint256LPxe1SN, BigInt("0"))
		await expect(XenoFelixcFaQvQE.pause.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpj6BVow = "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp"
		const stringwe0qjJm = "t"
		const uintKorDnei = BigInt("1969")
		const uintYu5fkJf = BigInt("12")
		const XenoFelixcFaQvQE = await XenoFelix.new(stringpj6BVow, stringwe0qjJm, uintKorDnei, uintYu5fkJf, {from: accounts[0]});
		const uintt1sL1Ub = BigInt("632")
		const addressuhEwfu9 = "0x0000000000000000000000000000000000000001"
		const addressLux7kII = "0x0000000000000000000000000000000000000001"
		const uintO1nbXQa = BigInt("1866")
		const addressBwHVjx = accounts[0]
		const uintimvdz2V = BigInt("218")
		const address4lKjWr = accounts[1]
		const boolzMun3rP = await XenoFelixcFaQvQE.decreaseAllowance.call(addressuhEwfu9, uintt1sL1Ub, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LPxe1SN = await XenoFelixcFaQvQE.balanceOf.call(addressLux7kII, {from: accounts[1]});
		const boolqSgoDFJ = await XenoFelixcFaQvQE.transfer.call(addressBwHVjx, uintO1nbXQa, {from: accounts[1]});
		const boolaxRZOf = await XenoFelixcFaQvQE.transfer.call(address4lKjWr, uintimvdz2V, {from: accounts[4]});

		await expect(XenoFelixcFaQvQE.decreaseAllowance.call(addressuhEwfu9, uintt1sL1Ub, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpj6BVow = "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp"
		const stringwe0qjJm = "t"
		const uint8Til1C = BigInt("1969")
		const uintvpORB4I = BigInt("12")
		const XenoFelixcFaQvQE = await XenoFelix.new(stringpj6BVow, stringwe0qjJm, uint8Til1C, uintvpORB4I, {from: accounts[0]});
		const addressIy9zCL = "0x0000000000000000000000000000000000000001"
		const uintRTeZJr = BigInt("13")
		const addresseUj8PH2 = accounts[0]
		const uintrVUeyd4 = BigInt("1001")
		const addressE8ByK5V = accounts[3]
		const uintmPB4Qih = BigInt("1844")
		const addressujaVSap = accounts[0]
		const uint256LPxe1SN = await XenoFelixcFaQvQE.balanceOf.call(addressIy9zCL, {from: accounts[1]});
		const addressfvyfzIn = await XenoFelixcFaQvQE.burnFrom.call(addresseUj8PH2, uintRTeZJr, {from: "0x0000000000000000000000000000000000000001"});
		const boolbBhBnJS = await XenoFelixcFaQvQE.increaseAllowance.call(addressE8ByK5V, uintrVUeyd4, {from: accounts[1]});
		const boolqSgoDFJ = await XenoFelixcFaQvQE.transfer.call(addressujaVSap, uintmPB4Qih, {from: accounts[1]});

		assert.equal(uint256LPxe1SN, BigInt("0"))
		await expect(XenoFelixcFaQvQE.burnFrom.call(addresseUj8PH2, uintRTeZJr, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringRsWLVMv = "Yhda2Bcj3HLjAz4LLKpS3ZCJpEN0BVBe"
		const stringglr7DIw = "rW0SBEjbtMsbAMchEkmJVbhxqbu6aFwAEN5U98HnjYnQmyBOAjAX756lx3Z4iNfnBdFMDhm7PlXbxho8MjuB"
		const uintdpbBSem = BigInt("252")
		const XenoFelixWPGMYbz = await XenoFelix.new(stringRsWLVMv, stringglr7DIw, uintdpbBSem, {from: accounts[1]});
		const uintxLoQkpw = BigInt("1647")
		const addressCpjyRC = "0x0000000000000000000000000000000000000001"
		const addressINFeeub = accounts[3]
		const addresszDKLRE = accounts[3]
		const addressc7EIbR = await XenoFelixWPGMYbz.burnFrom.call(addressCpjyRC, uintxLoQkpw, {from: accounts[1]});
		await XenoFelixWPGMYbz.whenNotPaused.call({from: accounts[2]});
		const uint256bI8FnL = await XenoFelixWPGMYbz.balanceOf.call(addressINFeeub, {from: accounts[0]});
		const addressy3rdF8r = await XenoFelixWPGMYbz.transferOwnership.call(addresszDKLRE, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixWPGMYbz.whenPaused.call({from: accounts[1]});
	});

	it('test for XenoFelix', async () => {
		const stringpj6BVow = "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp"
		const stringwe0qjJm = "t"
		const uintk6Ly7fI = BigInt("1969")
		const uintyOiQ8oZ = BigInt("12")
		const XenoFelixcFaQvQE = await XenoFelix.new(stringpj6BVow, stringwe0qjJm, uintk6Ly7fI, uintyOiQ8oZ, {from: accounts[0]});
		const addressZdvqgN = "0x00000000000000000000000000000000000000-1"
		const uintWgBFKV = BigInt("261")
		const uintw1276t = BigInt("695")
		const addressZjcJ1c = "0x0000000000000000000000000000000000000001"
		const uint256LPxe1SN = await XenoFelixcFaQvQE.balanceOf.call(addressZdvqgN, {from: accounts[1]});
		const boolORru6is = await XenoFelixcFaQvQE.transferWithLock.call(addressZjcJ1c, uintw1276t, uintWgBFKV, {from: accounts[1]});

		await expect(XenoFelixcFaQvQE.balanceOf.call(addressZdvqgN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpj6BVow = "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp"
		const stringwe0qjJm = "t"
		const uintsfRRrEL = BigInt("1969")
		const uintFS8v3nu = BigInt("12")
		const XenoFelixcFaQvQE = await XenoFelix.new(stringpj6BVow, stringwe0qjJm, uintsfRRrEL, uintFS8v3nu, {from: accounts[0]});
		const addressnonHfJE = "0x0000000000000000000000000000000000000001"
		const uintFJcruBZ = BigInt("1844")
		const addressGiRbJwT = accounts[1]
		const uint256LPxe1SN = await XenoFelixcFaQvQE.balanceOf.call(addressnonHfJE, {from: accounts[1]});
		const uint8ZlyC7x0 = await XenoFelixcFaQvQE.decimals.call({from: accounts[3]});
		await XenoFelixcFaQvQE.renouncePauser.call({from: accounts[2]});
		const boolqSgoDFJ = await XenoFelixcFaQvQE.transfer.call(addressGiRbJwT, uintFJcruBZ, {from: accounts[1]});

		assert.equal(uint256LPxe1SN, BigInt("0"))
		assert.equal(uint8ZlyC7x0, BigInt("12"))
		await expect(XenoFelixcFaQvQE.renouncePauser.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpj6BVow = "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp"
		const stringwe0qjJm = "t"
		const uintjgYOtS0 = BigInt("1969")
		const uintjxzswJJ = BigInt("12")
		const XenoFelixcFaQvQE = await XenoFelix.new(stringpj6BVow, stringwe0qjJm, uintjgYOtS0, uintjxzswJJ, {from: accounts[0]});
		const addressagPyYUv = accounts[0]
		const uintTJlfTpJ = BigInt("1844")
		const addressDBKIQHo = accounts[0]
		const boolUIrR2wb = await XenoFelixcFaQvQE.isOwner.call(addressagPyYUv, {from: accounts[1]});
		const boolqSgoDFJ = await XenoFelixcFaQvQE.transfer.call(addressDBKIQHo, uintTJlfTpJ, {from: accounts[1]});

		assert.equal(boolUIrR2wb, true)
		await expect(XenoFelixcFaQvQE.transfer.call(addressDBKIQHo, uintTJlfTpJ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpj6BVow = "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp"
		const stringwe0qjJm = "t"
		const uintsLQ8u4Q = BigInt("1969")
		const uintoFG2EEI = BigInt("12")
		const XenoFelixcFaQvQE = await XenoFelix.new(stringpj6BVow, stringwe0qjJm, uintsLQ8u4Q, uintoFG2EEI, {from: accounts[0]});
		const uintGtVwzNt = BigInt("1980")
		const uintiLufGBu = BigInt("1260")
		const addresscKdJVK1 = accounts[5]
		const addressBRy3iNT = accounts[4]
		const addressjD8eJvo = accounts[1]
		const uintdGI18o7 = BigInt("306")
		const addressAYryKsC = accounts[2]
		const addressbJar2qy = accounts[2]
		const boolwABnFVI = await XenoFelixcFaQvQE.lock.call(addresscKdJVK1, uintiLufGBu, uintGtVwzNt, {from: accounts[0]});
		const boolfV2uly = await XenoFelixcFaQvQE.isOwner.call(addressBRy3iNT, {from: accounts[2]});
		const addressoAYdXx2 = await XenoFelixcFaQvQE.addPauser.call(addressjD8eJvo, {from: accounts[3]});
		const boolb0ZXWB = await XenoFelixcFaQvQE.transferFrom.call(addressbJar2qy, addressAYryKsC, uintdGI18o7, {from: accounts[3]});

		await expect(XenoFelixcFaQvQE.lock.call(addresscKdJVK1, uintiLufGBu, uintGtVwzNt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpj6BVow = "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp"
		const stringwe0qjJm = "t"
		const uinttCgaNf7 = BigInt("1969")
		const uintkLl9jV = BigInt("12")
		const XenoFelixcFaQvQE = await XenoFelix.new(stringpj6BVow, stringwe0qjJm, uinttCgaNf7, uintkLl9jV, {from: accounts[0]});
		const uinthq5e47C = BigInt("306")
		const addressCqqEJV = accounts[2]
		const addressNpJjyhO = accounts[3]
		const uint5XqCS0 = BigInt("1698")
		const uintRnEmuVc = BigInt("1411")
		const addressziAIpf2 = accounts[2]
		const stringJToxKxf = await XenoFelixcFaQvQE.name.call({from: accounts[1]});
		const stringRJAR9X = await XenoFelixcFaQvQE.symbol.call({from: accounts[4]});
		const boolb0ZXWB = await XenoFelixcFaQvQE.transferFrom.call(addressNpJjyhO, addressCqqEJV, uinthq5e47C, {from: accounts[3]});
		await XenoFelixcFaQvQE.renouncePauser.call({from: accounts[3]});
		await XenoFelixcFaQvQE.pause.call({from: accounts[0]});
		const boolHVZqU3n = await XenoFelixcFaQvQE.transferWithLock.call(addressziAIpf2, uintRnEmuVc, uint5XqCS0, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringJToxKxf, "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp")
		assert.equal(stringRJAR9X, "t")
		await expect(XenoFelixcFaQvQE.transferFrom.call(addressNpJjyhO, addressCqqEJV, uinthq5e47C, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringStEVxXj = "hQQF6XzGm2kmCpXOGSY"
		const stringHfJSYII = "TCnLkLglLaCXuyFogDpxiIyJXOOU1BDSQoLuWtf9RxoSvcf9RQNXO21FndaX36ejmrDfmp3VA0EA0DETplh9EP8g"
		const uintSCCZtTP = BigInt("206")
		const XenoFelixvz2bE46 = await XenoFelix.new(stringStEVxXj, stringHfJSYII, uintSCCZtTP, {from: accounts[5]});
		const uintGOVnEu0 = BigInt("409")
		const addressf2gGwXw = accounts[4]
		const uintrKft6bp = BigInt("1441")
		const boolhuXcS8x = await XenoFelixvz2bE46.approve.call(addressf2gGwXw, uintGOVnEu0, {from: "0x0000000000000000000000000000000000000001"});
		const uint8wSQa0f5 = await XenoFelixvz2bE46.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8Fz7wpNK = await XenoFelixvz2bE46.decimals.call({from: accounts[2]});
		const uint256peyvMWE = await XenoFelixvz2bE46.burn.call(uintrKft6bp, {from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringrgVSnfz = "E1JXnn4kjCBGDfxi3kL6J67jGpmZROV45wXXE4cyvecEroEpUEPpTkaFx4Wyc2"
		const stringdXsM3Iz = "fY7kXBPX3WqiNJBO4K6PovrzslyUBuPRzVmO"
		const uintWRMo6yI = BigInt("1896")
		const uintFpVA0d = BigInt("48")
		const XenoFelixXzj14NV = await XenoFelix.new(stringrgVSnfz, stringdXsM3Iz, uintWRMo6yI, uintFpVA0d, {from: accounts[4]});
		const uintXJY9XTg = BigInt("581")
		const addressdwf8qGy = accounts[0]
		const addressolHy7m = accounts[4]
		const addressU6ccHDJ = accounts[1]
		const addressm6vSIXM = accounts[3]
		const uintH0ePmOr = BigInt("1070")
		const addressCOtjeP = accounts[3]
		await XenoFelixXzj14NV.renouncePauser.call({from: accounts[4]});
		const boolEFlDzmr = await XenoFelixXzj14NV.transferFrom.call(addressolHy7m, addressdwf8qGy, uintXJY9XTg, {from: accounts[4]});
		const addressEo6KVvD = await XenoFelixXzj14NV.addPauser.call(addressU6ccHDJ, {from: accounts[5]});
		const uint256kJ0IgO = await XenoFelixXzj14NV.balanceOf.call(addressm6vSIXM, {from: accounts[1]});
		const boolxyKhxY = await XenoFelixXzj14NV.approve.call(addressCOtjeP, uintH0ePmOr, {from: accounts[3]});

		await expect(XenoFelixXzj14NV.renouncePauser.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringpj6BVow = "ht9JV864vgx7ckXhkjaDBoCaWbncayWrrvLj74x2xX44dOHg4ELPzGBzuGiNg7ScxhpXFc0jM9yUp"
		const stringwe0qjJm = "t"
		const uint6F3XDU = BigInt("1969")
		const uinto6grCXY = BigInt("12")
		const XenoFelixcFaQvQE = await XenoFelix.new(stringpj6BVow, stringwe0qjJm, uint6F3XDU, uinto6grCXY, {from: accounts[0]});
		const addressTmPNdV = "0x0000000000000000000000000000000000000001"
		const uintNqK4q1U = BigInt("306")
		const addressNtRBupb = accounts[2]
		const addressDHD14fp = accounts[2]
		const addressgUVJki4 = accounts[0]
		const addressRazC5Tr = accounts[2]
		const boolbWQosXn = await XenoFelixcFaQvQE.unfreezeAccount.call(addressTmPNdV, {from: accounts[0]});
		const boolb0ZXWB = await XenoFelixcFaQvQE.transferFrom.call(addressDHD14fp, addressNtRBupb, uintNqK4q1U, {from: accounts[3]});
		const addressdNUZwBL = await XenoFelixcFaQvQE.notFrozenAndTransaction.call(addressRazC5Tr, addressgUVJki4, {from: accounts[5]});
		const uint256lBCNdeY = await XenoFelixcFaQvQE.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(XenoFelixcFaQvQE.unfreezeAccount.call(addressTmPNdV, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})