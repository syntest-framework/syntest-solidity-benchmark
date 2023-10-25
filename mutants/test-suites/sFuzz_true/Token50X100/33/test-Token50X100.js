const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100gvId6Jh = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const addressL9MiLK = accounts[1]
		const uinto4O04KZ = BigInt("911")
		const uintlSVP9vK = BigInt("574")
		const uintxAkSXht = BigInt("945")
		const addressR8QP3E3 = accounts[5]
		const addressVeWeh3T = accounts[2]
		const uintlbiD23b = BigInt("1910")
		const uintbdalg8W = BigInt("1017")
		const addressJ8ykq3e = accounts[0]
		await Token50X100gvId6Jh.setTokenContract.call(addressL9MiLK, {from: accounts[1]});
		const boolsHPM7se = await Token50X100gvId6Jh.safeLock.call(uintlSVP9vK, uinto4O04KZ, {from: "0x0000000000000000000000000000000000000001"});
		const boolozFSiEs = await Token50X100gvId6Jh.transfer.call(addressR8QP3E3, uintxAkSXht, {from: accounts[2]});
		await Token50X100gvId6Jh.setTokenContract.call(addressVeWeh3T, {from: accounts[2]});
		const boolxsONUC = await Token50X100gvId6Jh.setVesting.call(addressJ8ykq3e, uintbdalg8W, uintlbiD23b, {from: accounts[2]});
	});

	it('test for Token50X100', async () => {
		const Token50X100t9dwmIe = await Token50X100.new({from: accounts[1]});
		const addressOdbGY2P = accounts[4]
		const boole0XTakd = true
		const addressymuVwqK = accounts[3]
		const uintRB5olq3 = BigInt("476")
		const addressep0uiVS = accounts[4]
		const addressb1Q3os = accounts[3]
		const addressQkThcO = accounts[1]
		const addressMIhwTVr = "0x0000000000000000000000000000000000000001"
		const uint256hSur5BV = await Token50X100t9dwmIe.balanceOf.call(addressOdbGY2P, {from: accounts[1]});
//		await Token50X100t9dwmIe.setWhiteListReceivers.call(addressymuVwqK, boole0XTakd, {from: accounts[1]});
//		const boollRFTrM2 = await Token50X100t9dwmIe.transferFrom.call(addressb1Q3os, addressep0uiVS, uintRB5olq3, {from: accounts[2]});
//		const addressab5KRYQ = await Token50X100t9dwmIe.setOriginalContract.call(addressQkThcO, {from: accounts[5]});
//		const addressxcBtGBv = await Token50X100t9dwmIe.setOriginalContract.call(addressMIhwTVr, {from: accounts[0]});

		assert.equal(uint256hSur5BV, BigInt("0"))
		await expect(Token50X100t9dwmIe.setWhiteListReceivers.call(addressymuVwqK, boole0XTakd, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100VoMMUgB = await Token50X100.new({from: accounts[3]});
		const uintwtzzewd = BigInt("1980")
		const addressXjw9uSu = accounts[1]
		const addressqIwAyyO = "0x0000000000000000000000000000000000000001"
		const addressA6RXrQG = accounts[3]
		const boolyDVn9ZU = await Token50X100VoMMUgB.setMaxLockPeriod.call(uintwtzzewd, {from: accounts[2]});
		const uint256py9n6gW = await Token50X100VoMMUgB.balanceOf.call(addressXjw9uSu, {from: accounts[5]});
		const uint256hnDU9RU = await Token50X100VoMMUgB.allowance.call(addressA6RXrQG, addressqIwAyyO, {from: accounts[0]});

		assert.equal(boolyDVn9ZU, false)
		assert.equal(uint256hnDU9RU, BigInt("0"))
		assert.equal(uint256py9n6gW, BigInt("0"))
	});

	it('test for Token50X100', async () => {
		const Token50X100l5Y4uFg = await Token50X100.new({from: accounts[1]});
		const uintGQqZe63 = BigInt("1060")
		const uintqGZo3d = BigInt("513")
		const uintcqqo5nl = BigInt("562")
		const addressQ4zwTVr = "0x0000000000000000000000000000000000000001"
		const uintVdkbq0P = BigInt("23")
		const uintl3APChX = BigInt("948")
		const addressAHT92A0 = accounts[0]
		const addressYnTYJyG = accounts[1]
//		const bool8bfnHi = await Token50X100l5Y4uFg.safeLock.call(uintqGZo3d, uintGQqZe63, {from: accounts[1]});
//		await Token50X100l5Y4uFg.onlyOwner.call({from: accounts[1]});
//		const boolvYhDzNq = await Token50X100l5Y4uFg.approve.call(addressQ4zwTVr, uintcqqo5nl, {from: accounts[1]});
//		const boolamaxJSJ = await Token50X100l5Y4uFg.setVesting.call(addressAHT92A0, uintl3APChX, uintVdkbq0P, {from: accounts[0]});
//		const addressBlZzKgd = await Token50X100l5Y4uFg.setOriginalContract.call(addressYnTYJyG, {from: accounts[1]});

		await expect(Token50X100l5Y4uFg.safeLock.call(uintqGZo3d, uintGQqZe63, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100Kn9FQxu = await Token50X100.new({from: accounts[4]});
		const uintQrILK3o = BigInt("833")
		const uintzS0aa26 = BigInt("1721")
		const addressvrO5mhS = accounts[0]
		const uinte7fhIX = BigInt("376")
		const uintwqrbAos = BigInt("1264")
		const uintEajxfrl = BigInt("137")
		const uintJAf6Vpe = BigInt("354")
		const uintMMfhA5p = BigInt("966")
		const addressINjlwA = "0x0000000000000000000000000000000000000001"
//		await Token50X100Kn9FQxu.onlyOwner.call({from: accounts[0]});
//		const boolQ47VzI9 = await Token50X100Kn9FQxu.setVesting.call(addressvrO5mhS, uintzS0aa26, uintQrILK3o, {from: accounts[0]});
//		const boolXHREr8I = await Token50X100Kn9FQxu.safeLock.call(uintwqrbAos, uinte7fhIX, {from: accounts[4]});
//		const boolXlMQuzZ = await Token50X100Kn9FQxu.setMaxLockPeriod.call(uintEajxfrl, {from: accounts[2]});
//		const boolzXer1Nd = await Token50X100Kn9FQxu.setVesting.call(addressINjlwA, uintMMfhA5p, uintJAf6Vpe, {from: accounts[0]});

		await expect(Token50X100Kn9FQxu.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UbMl7E = await Token50X100.new({from: accounts[3]});
		const addressz9rLs7h = accounts[4]
		const addressbAqOgZK = accounts[0]
		const uintBBTqEdV = BigInt("516")
		const uintINGk1fc = BigInt("1371")
		const addressRVG8dra = accounts[3]
		const addressfOcAvUZ = accounts[2]
		const addressElUh9v = accounts[1]
		const uintsHaOnvI = BigInt("1334")
		const addressWpH6zSd = accounts[0]
		const uint256YHPw1HO = await Token50X100UbMl7E.allowance.call(addressbAqOgZK, addressz9rLs7h, {from: accounts[0]});
		const boolcGmtUSb = await Token50X100UbMl7E.setMaxLockPeriod.call(uintBBTqEdV, {from: accounts[1]});
//		const boolbO6lkt1 = await Token50X100UbMl7E.transfer.call(addressRVG8dra, uintINGk1fc, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256zGNNLS = await Token50X100UbMl7E.allowance.call(addressElUh9v, addressfOcAvUZ, {from: accounts[1]});
//		const boolP4l8tSk = await Token50X100UbMl7E.increaseApproval.call(addressWpH6zSd, uintsHaOnvI, {from: accounts[1]});

		assert.equal(boolcGmtUSb, false)
		assert.equal(uint256YHPw1HO, BigInt("0"))
		await expect(Token50X100UbMl7E.transfer.call(addressRVG8dra, uintINGk1fc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100WKzN3oE = await Token50X100.new({from: accounts[2]});
		const uintEUBrKQ1 = BigInt("916")
		const uintdFOHBe = BigInt("653")
		const addressWCYdgMC = accounts[1]
		const addressqqyvQJu = accounts[4]
		const address0isCVK = accounts[5]
		const uint256mJJDoSG = await Token50X100WKzN3oE.totalSupply.call({from: accounts[2]});
//		const boolYr2bexA = await Token50X100WKzN3oE._transfer.call(addressqqyvQJu, addressWCYdgMC, uintdFOHBe, uintEUBrKQ1, {from: accounts[0]});
//		const addressBQqaJD8 = await Token50X100WKzN3oE.transferOwnership.call(address0isCVK, {from: accounts[4]});
//		await Token50X100WKzN3oE.lock.call({from: accounts[3]});
//		await Token50X100WKzN3oE.release.call({from: accounts[0]});

		assert.equal(uint256mJJDoSG, BigInt("4714285714285710"))
		await expect(Token50X100WKzN3oE._transfer.call(addressqqyvQJu, addressWCYdgMC, uintdFOHBe, uintEUBrKQ1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UbMl7E = await Token50X100.new({from: accounts[3]});
		const addressKY9Iyu5 = accounts[4]
		const addressDcaA3pN = accounts[0]
		const uintDzaaXGJ = BigInt("1201")
		const addresslNsGQvm = "0x0000000000000000000000000000000000000001"
		const uinthAPTcW = BigInt("189")
		const uintBD396wD = BigInt("1334")
		const addressRAMsYf = accounts[2]
		const addressb0DTxb4 = accounts[1]
		const uintizcyPbj = BigInt("148")
		const stringoxlyjxv = "S8sgXZXfB2Yk2HmtkWQFaDcAuLQFcIoKyofCX3SyfyCEuNXgDg6GuXyX"
		const stringGOiBG0W = "3AWbvLPEjqzyBY3ibUjjgjoVnUyIq"
		const uint256YHPw1HO = await Token50X100UbMl7E.allowance.call(addressDcaA3pN, addressKY9Iyu5, {from: accounts[0]});
		const boolOnPjRGc = await Token50X100UbMl7E.approve.call(addresslNsGQvm, uintDzaaXGJ, {from: accounts[1]});
//		const booliBs4Ra = await Token50X100UbMl7E.safeLock.call(uintBD396wD, uinthAPTcW, {from: accounts[5]});
//		const uint256zGNNLS = await Token50X100UbMl7E.allowance.call(addressb0DTxb4, addressRAMsYf, {from: accounts[1]});
//		await Token50X100UbMl7E.setSymbolNameDecimals.call(stringGOiBG0W, stringoxlyjxv, uintizcyPbj, {from: accounts[0]});

		assert.equal(boolOnPjRGc, true)
		assert.equal(uint256YHPw1HO, BigInt("0"))
		await expect(Token50X100UbMl7E.safeLock.call(uintBD396wD, uinthAPTcW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100GtQnm0R = await Token50X100.new({from: accounts[4]});
		const uintzQWdyd0 = BigInt("242")
		const stringi4CgM59 = "xtpry1I1SZ4oYgpF"
		const stringWR3lzsM = "BUIbTZffraF0fMIFjLaShUXh3dvVTY9vNDiOj1oAlPdRUrog5LWp"
//		await Token50X100GtQnm0R.setSymbolNameDecimals.call(stringWR3lzsM, stringi4CgM59, uintzQWdyd0, {from: accounts[4]});

		await expect(Token50X100GtQnm0R.setSymbolNameDecimals.call(stringWR3lzsM, stringi4CgM59, uintzQWdyd0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UbMl7E = await Token50X100.new({from: accounts[3]});
		const uintUmoD5Dh = BigInt("458")
		const addressPTKI5sH = accounts[2]
		const uintUgfvqt = BigInt("583")
		const uintZmnvf6v = BigInt("1859")
		const addressm7JoIvC = accounts[4]
		const uintB0PWqm = BigInt("208")
		const uintTKlo6ym = BigInt("1338")
		const addresslQQ3VFQ = accounts[2]
		const addressH8AkLvo = accounts[1]
		const boolao4t3Cc = await Token50X100UbMl7E.decreaseApproval.call(addressPTKI5sH, uintUmoD5Dh, {from: accounts[2]});
//		const boolMzjLiI2 = await Token50X100UbMl7E.setVesting.call(addressm7JoIvC, uintZmnvf6v, uintUgfvqt, {from: accounts[0]});
//		const booliBs4Ra = await Token50X100UbMl7E.safeLock.call(uintTKlo6ym, uintB0PWqm, {from: accounts[5]});
//		const uint256zGNNLS = await Token50X100UbMl7E.allowance.call(addressH8AkLvo, addresslQQ3VFQ, {from: accounts[1]});

		assert.equal(boolao4t3Cc, true)
		await expect(Token50X100UbMl7E.setVesting.call(addressm7JoIvC, uintZmnvf6v, uintUgfvqt, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UbMl7E = await Token50X100.new({from: accounts[3]});
		const uinte8HZKA = BigInt("458")
		const addresshe7OnXz = accounts[2]
		const uintBrDrgWM = BigInt("1027")
		const addressUO4sGvf = accounts[4]
		const uintdhWidOb = BigInt("583")
		const uintUSXBghF = BigInt("1859")
		const addressmsjoB4T = accounts[5]
		const uintGmEwtx9 = BigInt("208")
		const uintuRupKF = BigInt("1338")
		const addressLh8TiZP = accounts[2]
		const addressJ5XhIh = accounts[1]
		const boolao4t3Cc = await Token50X100UbMl7E.decreaseApproval.call(addresshe7OnXz, uinte8HZKA, {from: accounts[2]});
		const bool2eKpCz = await Token50X100UbMl7E.increaseApproval.call(addressUO4sGvf, uintBrDrgWM, {from: "0x0000000000000000000000000000000000000001"});
//		const boolMzjLiI2 = await Token50X100UbMl7E.setVesting.call(addressmsjoB4T, uintUSXBghF, uintdhWidOb, {from: accounts[0]});
//		const booliBs4Ra = await Token50X100UbMl7E.safeLock.call(uintuRupKF, uintGmEwtx9, {from: accounts[5]});
//		const uint256zGNNLS = await Token50X100UbMl7E.allowance.call(addressJ5XhIh, addressLh8TiZP, {from: accounts[1]});

		assert.equal(bool2eKpCz, true)
		assert.equal(boolao4t3Cc, true)
		await expect(Token50X100UbMl7E.setVesting.call(addressmsjoB4T, uintUSXBghF, uintdhWidOb, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UbMl7E = await Token50X100.new({from: accounts[3]});
		const uintopyvUr0 = BigInt("243")
		const uint4BkjND = BigInt("1626")
		const uintAyGJmSx = BigInt("1406")
		const addressXCpWKuE = "0x0000000000000000000000000000000000000001"
		const uintqvqMGYt = BigInt("959")
		const addressGJ9WZDE = "0x0000000000000000000000000000000000000001"
		const uintXYS4bVC = BigInt("1596")
		const addressZzM3qV7 = "0x0000000000000000000000000000000000000001"
		const addressRq20ZY1 = accounts[2]
		const uintTBtxtgz = BigInt("189")
		const uintJXW3Ef = BigInt("776")
		const boolKKFoJAL = await Token50X100UbMl7E.setMaxLockPeriod.call(uintopyvUr0, {from: "0x0000000000000000000000000000000000000001"});
		const boolVTfU3sB = await Token50X100UbMl7E.setVesting.call(addressXCpWKuE, uintAyGJmSx, uint4BkjND, {from: accounts[3]});
//		const boolZPaEzMt = await Token50X100UbMl7E.transfer.call(addressGJ9WZDE, uintqvqMGYt, {from: accounts[5]});
//		const boolzNP8Vil = await Token50X100UbMl7E.transferFrom.call(addressRq20ZY1, addressZzM3qV7, uintXYS4bVC, {from: accounts[2]});
//		const booliBs4Ra = await Token50X100UbMl7E.safeLock.call(uintJXW3Ef, uintTBtxtgz, {from: accounts[5]});

		assert.equal(boolKKFoJAL, false)
		assert.equal(boolVTfU3sB, true)
		await expect(Token50X100UbMl7E.transfer.call(addressGJ9WZDE, uintqvqMGYt, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100fZb9PLY = await Token50X100.new({from: accounts[4]});
		const uintmNZFwwY = BigInt("1993")
		const addressq7bBmvk = "0x0000000000000000000000000000000000000001"
		const uintcEdhBTf = BigInt("488")
		const addressfWhV6gJ = accounts[5]
		const boolDVDfKCV = false
		const addressGsvwfS = accounts[0]
		const boolYbReZFD = await Token50X100fZb9PLY.setMaxLockPeriod.call(uintmNZFwwY, {from: accounts[5]});
//		await Token50X100fZb9PLY.release.call({from: accounts[4]});
//		const addressgWC1YMF = await Token50X100fZb9PLY.transferOwnership.call(addressq7bBmvk, {from: accounts[0]});
//		const boolTkVF6rf = await Token50X100fZb9PLY.transfer.call(addressfWhV6gJ, uintcEdhBTf, {from: accounts[4]});
//		await Token50X100fZb9PLY.setWhiteList.call(addressGsvwfS, boolDVDfKCV, {from: accounts[2]});

		assert.equal(boolYbReZFD, false)
		await expect(Token50X100fZb9PLY.release.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100QtoHlvo = await Token50X100.new({from: accounts[2]});
		const addresscxkiX18 = accounts[2]
		const address4zgJjP = accounts[0]
		const uintpgVcD7E = BigInt("705")
		const uintyfRlKkW = BigInt("1150")
		const addressFoBEV0x = accounts[3]
		const addressfPnBMt = accounts[4]
		const uint256Mij62t = await Token50X100QtoHlvo.allowance.call(address4zgJjP, addresscxkiX18, {from: accounts[3]});
//		const booldfxjVyT = await Token50X100QtoHlvo._transfer.call(addressfPnBMt, addressFoBEV0x, uintyfRlKkW, uintpgVcD7E, {from: accounts[2]});

		assert.equal(uint256Mij62t, BigInt("0"))
		await expect(Token50X100QtoHlvo._transfer.call(addressfPnBMt, addressFoBEV0x, uintyfRlKkW, uintpgVcD7E, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UbMl7E = await Token50X100.new({from: accounts[3]});
		const uintLhZ6sCR = BigInt("959")
		const addressGQedKEL = "0x0000000000000000000000000000000000000000"
//		const boolZPaEzMt = await Token50X100UbMl7E.transfer.call(addressGQedKEL, uintLhZ6sCR, {from: accounts[5]});
//		await Token50X100UbMl7E.release.call({from: accounts[0]});

		await expect(Token50X100UbMl7E.transfer.call(addressGQedKEL, uintLhZ6sCR, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UbMl7E = await Token50X100.new({from: accounts[3]});
		const addressmTZRqKD = accounts[2]
		const addressE4wvvQH = accounts[1]
		const uintEQJqwgn = BigInt("458")
		const addressAArhX7p = accounts[2]
		const addresskkQWJI2 = accounts[3]
		const address2nYg9S = accounts[2]
//		await Token50X100UbMl7E.setLinkingAddresses.call(addressE4wvvQH, addressmTZRqKD, {from: accounts[3]});
//		await Token50X100UbMl7E.lock.call({from: accounts[1]});
//		const boolao4t3Cc = await Token50X100UbMl7E.decreaseApproval.call(addressAArhX7p, uintEQJqwgn, {from: accounts[2]});
//		const uint256zGNNLS = await Token50X100UbMl7E.allowance.call(address2nYg9S, addresskkQWJI2, {from: accounts[1]});

		await expect(Token50X100UbMl7E.setLinkingAddresses.call(addressE4wvvQH, addressmTZRqKD, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UbMl7E = await Token50X100.new({from: accounts[3]});
		const addressio3noAO = accounts[2]
		const uinthkaLG2H = BigInt("1596")
		const addressNA9lQe9 = "0x0000000000000000000000000000000000000002"
		const addressGpz3GOJ = accounts[2]
//		await Token50X100UbMl7E.setTokenContract.call(addressio3noAO, {from: accounts[3]});
//		const boolzNP8Vil = await Token50X100UbMl7E.transferFrom.call(addressGpz3GOJ, addressNA9lQe9, uinthkaLG2H, {from: accounts[2]});

		await expect(Token50X100UbMl7E.setTokenContract.call(addressio3noAO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UbMl7E = await Token50X100.new({from: accounts[3]});
		const uintuq1Em3J = BigInt("0")
		const addresshC4kzic = accounts[3]
		const uintLECi6A3 = BigInt("154")
		const addressg10WH6t = accounts[5]
		const uinthRnGEzQ = BigInt("22")
		const stringfbDOC61 = "gKeqvbuVdAxUe272Y1lFc879MGAAb9N3NAdw50HK3lTUn47qurxWgILmCWbtWJ9vI953yCBvOi"
		const stringzmFE3NR = "qxLWoIDxq3jVBNKq79LVTnC7"
		const boollyJYhkH = await Token50X100UbMl7E.decreaseApproval.call(addresshC4kzic, uintuq1Em3J, {from: accounts[3]});
		const booliRso1r7 = await Token50X100UbMl7E.decreaseApproval.call(addressg10WH6t, uintLECi6A3, {from: accounts[0]});
//		const booliB3zqI = await Token50X100UbMl7E.setSymbolNameDecimals.call(stringzmFE3NR, stringfbDOC61, uinthRnGEzQ, {from: accounts[2]});

		assert.equal(booliRso1r7, true)
		assert.equal(boollyJYhkH, true)
		await expect(Token50X100UbMl7E.setSymbolNameDecimals.call(stringzmFE3NR, stringfbDOC61, uinthRnGEzQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100UbMl7E = await Token50X100.new({from: accounts[3]});
		const boolD3AVD5c = true
		const addressL6qTVeO = accounts[3]
		const uintVuuj2Xg = BigInt("1596")
		const addressx29oxyi = "0x0000000000000000000000000000000000000002"
		const addressmTO6f7y = accounts[2]
		const uintkPEjMcz = BigInt("1836")
		const addressunS3n0I = "0x0000000000000000000000000000000000000001"
		const addresszhlsQbU = accounts[3]
//		await Token50X100UbMl7E.setWhiteList.call(addressL6qTVeO, boolD3AVD5c, {from: accounts[3]});
//		await Token50X100UbMl7E.lock.call({from: accounts[1]});
//		const boolzNP8Vil = await Token50X100UbMl7E.transferFrom.call(addressmTO6f7y, addressx29oxyi, uintVuuj2Xg, {from: accounts[2]});
//		const boolDs8ppkh = await Token50X100UbMl7E.issueTokens.call(addresszhlsQbU, addressunS3n0I, uintkPEjMcz, {from: accounts[1]});

		await expect(Token50X100UbMl7E.setWhiteList.call(addressL6qTVeO, boolD3AVD5c, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})