const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100UmQHrTJ = await Token50X100.new({from: accounts[1]});
		const uintyQei3A3 = BigInt("763")
		const addressPFnqfXF = accounts[0]
		const addressNCZtwgg = accounts[2]
		const addressDtOhGYC = accounts[3]
		const uintTGeZ9rl = BigInt("1934")
		const addresseciteGK = accounts[4]
		const addresszJfkbSP = accounts[0]
		const uintxp0MnpQ = BigInt("624")
		const uintwM1tmYB = BigInt("892")
		const boolYI7M7n = await Token50X100UmQHrTJ.decreaseApproval.call(addressPFnqfXF, uintyQei3A3, {from: accounts[2]});
//		const addressyWRiZ10 = await Token50X100UmQHrTJ.setOriginalContract.call(addressNCZtwgg, {from: accounts[1]});
//		const uint256QpYjxj = await Token50X100UmQHrTJ.balanceOf.call(addressDtOhGYC, {from: accounts[1]});
//		const boolOvKlU3P = await Token50X100UmQHrTJ.transferFrom.call(addresszJfkbSP, addresseciteGK, uintTGeZ9rl, {from: accounts[0]});
//		const boolpzZmlFe = await Token50X100UmQHrTJ.safeLock.call(uintwM1tmYB, uintxp0MnpQ, {from: accounts[0]});

		assert.equal(boolYI7M7n, true)
		await expect(Token50X100UmQHrTJ.setOriginalContract.call(addressNCZtwgg, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100sk39DCL = await Token50X100.new({from: accounts[4]});
		const boolX64zQfz = true
		const addressklI3h7u = accounts[4]
		const uintegefgo1 = BigInt("794")
		const addressnK4lCJC = accounts[4]
		const addresstIZKjcW = accounts[2]
		const addressgTb4XEg = accounts[3]
		const addressXrpgSKe = accounts[1]
		const uintJr4EZBH = BigInt("8")
		const uintNi4YI01 = BigInt("1819")
		const addressb8QIFHc = accounts[5]
//		await Token50X100sk39DCL.setWhiteList.call(addressklI3h7u, boolX64zQfz, {from: accounts[5]});
//		const boolod1yQPv = await Token50X100sk39DCL.transferFrom.call(addresstIZKjcW, addressnK4lCJC, uintegefgo1, {from: accounts[4]});
//		const addressiVJGkmw = await Token50X100sk39DCL.setOriginalContract.call(addressgTb4XEg, {from: accounts[0]});
//		const uint256zozHf04 = await Token50X100sk39DCL.balanceOf.call(addressXrpgSKe, {from: accounts[0]});
//		const boolxqIbqan = await Token50X100sk39DCL.setVesting.call(addressb8QIFHc, uintNi4YI01, uintJr4EZBH, {from: accounts[3]});

		await expect(Token50X100sk39DCL.setWhiteList.call(addressklI3h7u, boolX64zQfz, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100JZzOAKJ = await Token50X100.new({from: accounts[0]});
		const addresszZaWLXa = accounts[0]
		const addresszpmB2pO = accounts[0]
		const addressOdMwE6h = accounts[0]
		const uintS2ZKvRu = BigInt("848")
		const addressoAhUXqH = accounts[0]
		const addressIbwv0S = accounts[5]
		const addressmhmVOAQ = accounts[0]
		const uint256Swb3W3B = await Token50X100JZzOAKJ.balanceOf.call(addresszZaWLXa, {from: accounts[5]});
//		await Token50X100JZzOAKJ.setLinkingAddresses.call(addressOdMwE6h, addresszpmB2pO, {from: accounts[4]});
//		const boolz6l91xm = await Token50X100JZzOAKJ.decreaseApproval.call(addressoAhUXqH, uintS2ZKvRu, {from: accounts[2]});
//		const uint256h6EVzDm = await Token50X100JZzOAKJ.allowance.call(addressmhmVOAQ, addressIbwv0S, {from: accounts[3]});

		assert.equal(uint256Swb3W3B, BigInt("0"))
		await expect(Token50X100JZzOAKJ.setLinkingAddresses.call(addressOdMwE6h, addresszpmB2pO, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kZk6d0 = await Token50X100.new({from: accounts[1]});
		const addressZcPwKTT = "0x0000000000000000000000000000000000000001"
		const addressu2UpUsf = accounts[1]
		const uintzbs5HZA = BigInt("1111")
		const uintuJhxr8c = BigInt("198")
		const addressFTtoGYn = accounts[3]
		const uint256uvladjH = await Token50X100kZk6d0.allowance.call(addressu2UpUsf, addressZcPwKTT, {from: accounts[0]});
//		const boolJKALtZa = await Token50X100kZk6d0.setVesting.call(addressFTtoGYn, uintuJhxr8c, uintzbs5HZA, {from: accounts[0]});

		assert.equal(uint256uvladjH, BigInt("0"))
		await expect(Token50X100kZk6d0.setVesting.call(addressFTtoGYn, uintuJhxr8c, uintzbs5HZA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100qSgYnzK = await Token50X100.new({from: accounts[0]});
		const uintIwK82L = BigInt("1574")
		const addressSyFenb = accounts[0]
		const uintPyaFbph = BigInt("10")
		const stringgcCgJsH = "TJJDxQZ26F"
		const stringiatbpSM = "YTXQRoSbZng5G8wXG12NYzZWB374OFcgz3FeLfabHJlBIywdLzIc0ChtwzKD9d5wCcTIbQdIurJsKqGgOah3JGt52Y"
		const uintzewIId = BigInt("561")
		const uintezZTb1L = BigInt("1765")
		const addressHJOZk0 = accounts[4]
		const addressD9lm7b9 = accounts[0]
//		const booluuOQ21e = await Token50X100qSgYnzK.transfer.call(addressSyFenb, uintIwK82L, {from: accounts[4]});
//		await Token50X100qSgYnzK.setSymbolNameDecimals.call(stringiatbpSM, stringgcCgJsH, uintPyaFbph, {from: accounts[2]});
//		const boolBCjV23O = await Token50X100qSgYnzK._transfer.call(addressD9lm7b9, addressHJOZk0, uintezZTb1L, uintzewIId, {from: accounts[1]});

		await expect(Token50X100qSgYnzK.transfer.call(addressSyFenb, uintIwK82L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100N4oZWZR = await Token50X100.new({from: accounts[1]});
		const uintOSgVTaP = BigInt("112")
		const uintHkgJxFE = BigInt("1759")
		const addresspDXv91c = accounts[4]
		const uintljs9Wmq = BigInt("30")
		const stringwGzJTl9 = "Y6FyAQ2b8QItezHZRaDs"
		const stringBoUFwc4 = "q4dKG7SUVgc5eklNr9H9rK5hewx6AfLrM7bQu5uIBcgJegec6FmiyaAmujHRZvQuzTo83Dwcf3"
		const uintZqG8H8W = BigInt("1943")
		const addressjXcYkYR = accounts[2]
		const boolgrqtl4b = await Token50X100N4oZWZR.setVesting.call(addresspDXv91c, uintHkgJxFE, uintOSgVTaP, {from: accounts[1]});
//		const boolegYpEKu = await Token50X100N4oZWZR.setSymbolNameDecimals.call(stringBoUFwc4, stringwGzJTl9, uintljs9Wmq, {from: accounts[3]});
//		const boolzQWO54t = await Token50X100N4oZWZR.transfer.call(addressjXcYkYR, uintZqG8H8W, {from: accounts[2]});

		assert.equal(boolgrqtl4b, true)
		await expect(Token50X100N4oZWZR.setSymbolNameDecimals.call(stringBoUFwc4, stringwGzJTl9, uintljs9Wmq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100WviUC0u = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const addressIr9GFJT = accounts[3]
		const uintgUuK3Qc = BigInt("167")
		const stringqmiB5TU = "FE5UiedoUDAR2QzhirlXNTatCVXfwyyu5m5aYCPR"
		const stringDkbh1r = "RWKPfuK4MEji15ha2wP27Lf5toCCcelLlM2LyiO4xnQcMwt7v2JpuZCI55bxqLpstNyJiAz1aXTKl"
		const addresslxV1tBO = accounts[2]
		const uintCRRh35F = BigInt("1465")
		const uint0lFw7T = BigInt("837")
		const addressfKGuLxO = "0x0000000000000000000000000000000000000001"
		const addressAldtesS = accounts[1]
		const uint256QYIfnCj = await Token50X100WviUC0u.balanceOf.call(addressIr9GFJT, {from: accounts[2]});
		const boolNscqjQG = await Token50X100WviUC0u.setSymbolNameDecimals.call(stringDkbh1r, stringqmiB5TU, uintgUuK3Qc, {from: accounts[3]});
		const addressR6loMs7 = await Token50X100WviUC0u.setOriginalContract.call(addresslxV1tBO, {from: accounts[2]});
		const boolAgpK4J = await Token50X100WviUC0u.setMaxLockPeriod.call(uintCRRh35F, {from: accounts[1]});
		const boolGCDFzuY = await Token50X100WviUC0u.transferFrom.call(addressAldtesS, addressfKGuLxO, uint0lFw7T, {from: accounts[2]});
	});

	it('test for Token50X100', async () => {
		const Token50X100Ss9W1mx = await Token50X100.new({from: accounts[3]});
		const uintvfBy0ZN = BigInt("1526")
		const uintnTWIunp = BigInt("1795")
		const uintH7GHaPW = BigInt("1259")
		const addressxQdpoQL = accounts[3]
//		const boolt09CqAT = await Token50X100Ss9W1mx.safeLock.call(uintnTWIunp, uintvfBy0ZN, {from: accounts[4]});
//		const boolZ4BDhP3 = await Token50X100Ss9W1mx.transfer.call(addressxQdpoQL, uintH7GHaPW, {from: accounts[5]});

		await expect(Token50X100Ss9W1mx.safeLock.call(uintnTWIunp, uintvfBy0ZN, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100N4oZWZR = await Token50X100.new({from: accounts[1]});
		const uintfOIZDGo = BigInt("1758")
		const uintkh7jyQO = BigInt("1556")
		const uintb3mNdt = BigInt("1620")
		const addressZOhjfXp = accounts[1]
		const addresskjTTzuW = accounts[0]
		const uintJ4vfHNS = BigInt("112")
		const uintErCl22 = BigInt("1759")
		const addresspVRkbHZ = accounts[4]
		const uintxyvkpWr = BigInt("30")
		const stringwGzJTl9 = "Y6FyAQ2b8QItezHZRaDs"
		const stringBoUFwc4 = "q4dKG7SUVgc5eklNr9H9rK5hewx6AfLrM7bQu5uIBcgJegec6FmiyaAmujHRZvQuzTo83Dwcf3"
		const uintdr7RU82 = BigInt("1942")
		const addressvvjAwqD = accounts[2]
		const boolVu70LA = await Token50X100N4oZWZR.setMaxLockPeriod.call(uintfOIZDGo, {from: accounts[3]});
//		const boolXSqUr25 = await Token50X100N4oZWZR._transfer.call(addresskjTTzuW, addressZOhjfXp, uintb3mNdt, uintkh7jyQO, {from: accounts[3]});
//		const boolgrqtl4b = await Token50X100N4oZWZR.setVesting.call(addresspVRkbHZ, uintErCl22, uintJ4vfHNS, {from: accounts[1]});
//		const boolegYpEKu = await Token50X100N4oZWZR.setSymbolNameDecimals.call(stringBoUFwc4, stringwGzJTl9, uintxyvkpWr, {from: accounts[3]});
//		const boolzQWO54t = await Token50X100N4oZWZR.transfer.call(addressvvjAwqD, uintdr7RU82, {from: accounts[2]});

		assert.equal(boolVu70LA, false)
		await expect(Token50X100N4oZWZR._transfer.call(addresskjTTzuW, addressZOhjfXp, uintb3mNdt, uintkh7jyQO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kZk6d0 = await Token50X100.new({from: accounts[1]});
		const addressySRxe3X = "0x0000000000000000000000000000000000000001"
		const addressPDlipZU = accounts[1]
		const uintFDCbVRl = BigInt("662")
		const addresspt3e0xa = "0x0000000000000000000000000000000000000001"
		const uintCblh7Ym = BigInt("1111")
		const uintdHrssYK = BigInt("203")
		const addressfq8N1fg = accounts[3]
		const uint256uvladjH = await Token50X100kZk6d0.allowance.call(addressPDlipZU, addressySRxe3X, {from: accounts[0]});
		const boolBqo0KM = await Token50X100kZk6d0.increaseApproval.call(addresspt3e0xa, uintFDCbVRl, {from: accounts[3]});
//		const boolJKALtZa = await Token50X100kZk6d0.setVesting.call(addressfq8N1fg, uintdHrssYK, uintCblh7Ym, {from: accounts[0]});

		assert.equal(boolBqo0KM, true)
		assert.equal(uint256uvladjH, BigInt("0"))
		await expect(Token50X100kZk6d0.setVesting.call(addressfq8N1fg, uintdHrssYK, uintCblh7Ym, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kZk6d0 = await Token50X100.new({from: accounts[1]});
		const addresswKtx4eK = "0x0000000000000000000000000000000000000001"
		const addresspERZMv7 = accounts[2]
		const addressqHFEe8I = accounts[4]
		const addressOmnIbEJ = accounts[3]
		const uintU9ySXAI = BigInt("1111")
		const uintkdhKB1N = BigInt("198")
		const addressFKuP5X = accounts[3]
		const uint256uvladjH = await Token50X100kZk6d0.allowance.call(addresspERZMv7, addresswKtx4eK, {from: accounts[0]});
//		await Token50X100kZk6d0.setLinkingAddresses.call(addressOmnIbEJ, addressqHFEe8I, {from: accounts[1]});
//		const boolJKALtZa = await Token50X100kZk6d0.setVesting.call(addressFKuP5X, uintkdhKB1N, uintU9ySXAI, {from: accounts[0]});

		assert.equal(uint256uvladjH, BigInt("0"))
		await expect(Token50X100kZk6d0.setLinkingAddresses.call(addressOmnIbEJ, addressqHFEe8I, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100oJkeNst = await Token50X100.new({from: accounts[2]});
		const uintl6JNeHD = BigInt("1760")
		const addressFQH9lX4 = accounts[4]
		const boolkyKxiF = true
		const addressFt3YB1w = accounts[3]
		const addressxTJRmVT = accounts[1]
		const addressWZleLAK = accounts[0]
		const uintKdboZ0l = BigInt("326")
		const addressWbYHx8 = accounts[3]
		const uintO4TVwui = BigInt("849")
		const uintKaYElFi = BigInt("73")
		const addressJjuqjHo = accounts[3]
		const addresstkBtADq = accounts[1]
		const boolRT9IvB2 = await Token50X100oJkeNst.approve.call(addressFQH9lX4, uintl6JNeHD, {from: accounts[1]});
//		await Token50X100oJkeNst.setWhiteList.call(addressFt3YB1w, boolkyKxiF, {from: accounts[3]});
//		await Token50X100oJkeNst.setLinkingAddresses.call(addressWZleLAK, addressxTJRmVT, {from: accounts[5]});
//		const boolwotOZzo = await Token50X100oJkeNst.transfer.call(addressWbYHx8, uintKdboZ0l, {from: accounts[2]});
//		const boolUqfRxNR = await Token50X100oJkeNst._transfer.call(addresstkBtADq, addressJjuqjHo, uintKaYElFi, uintO4TVwui, {from: accounts[2]});

		assert.equal(boolRT9IvB2, true)
		await expect(Token50X100oJkeNst.setWhiteList.call(addressFt3YB1w, boolkyKxiF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100qSgYnzK = await Token50X100.new({from: accounts[0]});
		const uintTjiAUEZ = BigInt("53")
		const stringNT3wHrj = "txbjjB7VM5mYuy3VQb5gLBKkp6kcW2rb9WQ8dz7LDqPeaJfdz2m6IKP"
		const stringNyMeZyz = "Fc2nYPBCm7Nj7hIyd95"
		const uintf9sgywn = BigInt("10")
		const stringgcCgJsH = "TJJDxQZG26F"
		const stringiatbpSM = "YTXQRoSbZng5G8wXG12NYzZWB374OFcgz3FeLfabHJlBIywdLzIc0ChtwzKD9d5wCcTIbQdIurJsKqGgOah3JGt52Y"
//		await Token50X100qSgYnzK.setSymbolNameDecimals.call(stringNyMeZyz, stringNT3wHrj, uintTjiAUEZ, {from: accounts[0]});
//		await Token50X100qSgYnzK.setSymbolNameDecimals.call(stringiatbpSM, stringgcCgJsH, uintf9sgywn, {from: accounts[2]});

		await expect(Token50X100qSgYnzK.setSymbolNameDecimals.call(stringNyMeZyz, stringNT3wHrj, uintTjiAUEZ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100pZt16fZ = await Token50X100.new({from: accounts[2]});
		const uintu7GOwpO = BigInt("1085")
		const address8ifJ6S = accounts[5]
		const addressxYn6QDX = accounts[4]
//		const boolVw0W7qY = await Token50X100pZt16fZ.transferFrom.call(addressxYn6QDX, address8ifJ6S, uintu7GOwpO, {from: accounts[2]});
//		await Token50X100pZt16fZ.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100pZt16fZ.transferFrom.call(addressxYn6QDX, address8ifJ6S, uintu7GOwpO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100pZt16fZ = await Token50X100.new({from: accounts[2]});
		const uinto6bmiIR = BigInt("614")
		const addressCI5iQPk = accounts[4]
		const boolmTZXcUi = false
		const addresspZHoge0 = "0x00000000000000000000000000000000000000-1"
		const uintaumF2jm = BigInt("1469")
		const addressZbDpDih = "0x0000000000000000000000000000000000000001"
		const addressvvS2RCH = accounts[4]
		const addressw8CMs1U = accounts[4]
		const boolGnT2zte = await Token50X100pZt16fZ.decreaseApproval.call(addressCI5iQPk, uinto6bmiIR, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100pZt16fZ.setWhiteList.call(addresspZHoge0, boolmTZXcUi, {from: accounts[3]});
//		const boolrS57IDp = await Token50X100pZt16fZ.transfer.call(addressZbDpDih, uintaumF2jm, {from: accounts[5]});
//		const uint256XSugF8B = await Token50X100pZt16fZ.allowance.call(addressw8CMs1U, addressvvS2RCH, {from: accounts[5]});

		assert.equal(boolGnT2zte, true)
		await expect(Token50X100pZt16fZ.setWhiteList.call(addresspZHoge0, boolmTZXcUi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100pZt16fZ = await Token50X100.new({from: accounts[2]});
		const uintIRjeKfX = BigInt("614")
		const addresssggVdAn = accounts[4]
		const uintrX2KeDR = BigInt("194")
		const boolmTZXcUi = false
		const addressRTTzgjH = "0x0000000000000000000000000000000000000002"
		const boolGnT2zte = await Token50X100pZt16fZ.decreaseApproval.call(addresssggVdAn, uintIRjeKfX, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100pZt16fZ.release.call({from: accounts[2]});
//		const boolN8BvCRL = await Token50X100pZt16fZ.setMaxLockPeriod.call(uintrX2KeDR, {from: accounts[1]});
//		await Token50X100pZt16fZ.setWhiteList.call(addressRTTzgjH, boolmTZXcUi, {from: accounts[3]});

		assert.equal(boolGnT2zte, true)
		await expect(Token50X100pZt16fZ.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100pZt16fZ = await Token50X100.new({from: accounts[2]});
		const uintdShNbNO = BigInt("614")
		const addressWKHhg9D = accounts[4]
		const uintzoUz63z = BigInt("1469")
		const addressIfz5Co = "0x0000000000000000000000000000000000000001"
		const uintBi8vrJK = BigInt("1727")
		const address17N0tz = accounts[4]
		const addressGbSJSk = accounts[5]
		const addresszoEpisg = accounts[4]
		const addressnQhV2vv = accounts[4]
		const boolGnT2zte = await Token50X100pZt16fZ.decreaseApproval.call(addressWKHhg9D, uintdShNbNO, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Ap8ytp6 = await Token50X100pZt16fZ.totalSupply.call({from: accounts[4]});
//		const boolrS57IDp = await Token50X100pZt16fZ.transfer.call(addressIfz5Co, uintzoUz63z, {from: accounts[5]});
//		const boolBzB8V8 = await Token50X100pZt16fZ.issueTokens.call(addressGbSJSk, address17N0tz, uintBi8vrJK, {from: accounts[0]});
//		const uint256XSugF8B = await Token50X100pZt16fZ.allowance.call(addressnQhV2vv, addresszoEpisg, {from: accounts[5]});

		assert.equal(boolGnT2zte, true)
		assert.equal(uint256Ap8ytp6, BigInt("4714285714285710"))
		await expect(Token50X100pZt16fZ.transfer.call(addressIfz5Co, uintzoUz63z, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100pZt16fZ = await Token50X100.new({from: accounts[2]});
		const uintq02FMY = BigInt("614")
		const addressvMNQHVa = accounts[4]
		const boolmTZXcUi = true
		const addressNwvHZi7 = "0x00000000000000000000000000000000000000-2"
		const uintiaNtEOr = BigInt("1106")
		const addressEpi4zQP = accounts[0]
		const addressNuAJ7rx = accounts[3]
		const uintYMoyKgk = BigInt("1469")
		const addressGhLIqV9 = "0x0000000000000000000000000000000000000001"
		const uintuip6ODf = BigInt("1727")
		const addressfO5OIm6 = accounts[4]
		const addressXHsfT5c = accounts[5]
		const uint6HUSEY = BigInt("911")
		const addressDWnyAHk = accounts[4]
		const addressDzAPcJ = accounts[4]
		const boolGnT2zte = await Token50X100pZt16fZ.decreaseApproval.call(addressvMNQHVa, uintq02FMY, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100pZt16fZ.setWhiteList.call(addressNwvHZi7, boolmTZXcUi, {from: accounts[3]});
//		const boolXVVbMrc = await Token50X100pZt16fZ.transferFrom.call(addressNuAJ7rx, addressEpi4zQP, uintiaNtEOr, {from: accounts[4]});
//		const uint256Ap8ytp6 = await Token50X100pZt16fZ.totalSupply.call({from: accounts[4]});
//		const boolrS57IDp = await Token50X100pZt16fZ.transfer.call(addressGhLIqV9, uintYMoyKgk, {from: accounts[5]});
//		const boolBzB8V8 = await Token50X100pZt16fZ.issueTokens.call(addressXHsfT5c, addressfO5OIm6, uintuip6ODf, {from: accounts[0]});
//		const boolgFAKjn4 = await Token50X100pZt16fZ.setMaxLockPeriod.call(uint6HUSEY, {from: accounts[5]});
//		await Token50X100pZt16fZ.release.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256XSugF8B = await Token50X100pZt16fZ.allowance.call(addressDzAPcJ, addressDWnyAHk, {from: accounts[5]});

		assert.equal(boolGnT2zte, true)
		await expect(Token50X100pZt16fZ.setWhiteList.call(addressNwvHZi7, boolmTZXcUi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100pZt16fZ = await Token50X100.new({from: accounts[2]});
		const addressHzJ7D3n = accounts[4]
		const boolmTZXcUi = false
		const addressTo0EYIf = "0x0000000000000000000000000000000000000001"
//		await Token50X100pZt16fZ.setTokenContract.call(addressHzJ7D3n, {from: accounts[2]});
//		await Token50X100pZt16fZ.setWhiteList.call(addressTo0EYIf, boolmTZXcUi, {from: accounts[3]});

		await expect(Token50X100pZt16fZ.setTokenContract.call(addressHzJ7D3n, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100pZt16fZ = await Token50X100.new({from: accounts[2]});
		const uintYRsYDtQ = BigInt("598")
		const addressCWA3nkZ = accounts[4]
		const uintCzxgJu = BigInt("1000")
		const uintVLZUBbF = BigInt("1251")
		const uintAtUXVjb = BigInt("1008")
		const uintJif0taz = BigInt("647")
		const addressGU3svrD = "0x0000000000000000000000000000000000000001"
		const addressM904pEY = accounts[4]
		const uintxdIM3W = BigInt("1469")
		const addressSEonfFE = "0x0000000000000000000000000000000000000001"
		const uintscA2oo = BigInt("693")
		const addressTQ8jYcR = "0x0000000000000000000000000000000000000001"
		const addressgiZ6dAz = accounts[2]
		const uintPnmtKHk = BigInt("1727")
		const addressOlvsP6l = accounts[4]
		const addressfn3nUnu = accounts[5]
		const addressIHGXzV = "0x0000000000000000000000000000000000000001"
		const boolGnT2zte = await Token50X100pZt16fZ.decreaseApproval.call(addressCWA3nkZ, uintYRsYDtQ, {from: "0x0000000000000000000000000000000000000001"});
		const boolHTSsum = await Token50X100pZt16fZ.setMaxLockPeriod.call(uintCzxgJu, {from: accounts[5]});
		const boolgRmlHep = await Token50X100pZt16fZ.setMaxLockPeriod.call(uintVLZUBbF, {from: "0x0000000000000000000000000000000000000001"});
//		const boolq4Gl8So = await Token50X100pZt16fZ._transfer.call(addressM904pEY, addressGU3svrD, uintJif0taz, uintAtUXVjb, {from: accounts[2]});
//		const boolrS57IDp = await Token50X100pZt16fZ.transfer.call(addressSEonfFE, uintxdIM3W, {from: accounts[5]});
//		const boolTIsSFN = await Token50X100pZt16fZ.transferFrom.call(addressgiZ6dAz, addressTQ8jYcR, uintscA2oo, {from: accounts[2]});
//		const boolBzB8V8 = await Token50X100pZt16fZ.issueTokens.call(addressfn3nUnu, addressOlvsP6l, uintPnmtKHk, {from: accounts[0]});
//		const addressEnXfmWw = await Token50X100pZt16fZ.transferOwnership.call(addressIHGXzV, {from: accounts[4]});

		assert.equal(boolGnT2zte, true)
		assert.equal(boolHTSsum, false)
		assert.equal(boolgRmlHep, false)
		await expect(Token50X100pZt16fZ._transfer.call(addressM904pEY, addressGU3svrD, uintJif0taz, uintAtUXVjb, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100pZt16fZ = await Token50X100.new({from: accounts[2]});
		const uintHqz1nPS = BigInt("598")
		const addressBcSwsDv = accounts[4]
		const boolb2mkVYI = false
		const addressjq0wCt = "0x0000000000000000000000000000000000000001"
		const uintRTX26BT = BigInt("1248")
		const uintRsZ7D41 = BigInt("312")
		const addressmVQgmQT = accounts[4]
		const uintiAR0zmv = BigInt("1932")
		const uintpflIlWF = BigInt("112")
		const uintoDfcom4 = BigInt("1790")
		const addressgiLOqCG = accounts[4]
		const uintdMSvhIg = BigInt("1469")
		const addressKlPXzcc = "0x0000000000000000000000000000000000000001"
		const addressMPfPxFa = "0x0000000000000000000000000000000000000001"
		const boolGnT2zte = await Token50X100pZt16fZ.decreaseApproval.call(addressBcSwsDv, uintHqz1nPS, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100pZt16fZ.setWhiteListReceivers.call(addressjq0wCt, boolb2mkVYI, {from: accounts[2]});
//		const boolgRmlHep = await Token50X100pZt16fZ.setMaxLockPeriod.call(uintRTX26BT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolrFK8vQW = await Token50X100pZt16fZ.decreaseApproval.call(addressmVQgmQT, uintRsZ7D41, {from: accounts[0]});
//		const booldakjni9 = await Token50X100pZt16fZ.safeLock.call(uintpflIlWF, uintiAR0zmv, {from: accounts[5]});
//		const boolk6SbhsQ = await Token50X100pZt16fZ.transfer.call(addressgiLOqCG, uintoDfcom4, {from: accounts[5]});
//		const boolrS57IDp = await Token50X100pZt16fZ.transfer.call(addressKlPXzcc, uintdMSvhIg, {from: accounts[5]});
//		const addressEnXfmWw = await Token50X100pZt16fZ.transferOwnership.call(addressMPfPxFa, {from: accounts[4]});

		assert.equal(boolGnT2zte, true)
		await expect(Token50X100pZt16fZ.setWhiteListReceivers.call(addressjq0wCt, boolb2mkVYI, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100pZt16fZ = await Token50X100.new({from: accounts[2]});
		const uinthcMk6F = BigInt("598")
		const addresslPTt6T7 = accounts[5]
		const uintGVUCfLv = BigInt("1248")
		const uintjXdbmgn = BigInt("1469")
		const addressHwcBmLL = "0x0000000000000000000000000000000000000001"
		const uintucht2MK = BigInt("1727")
		const addressebBU45w = accounts[4]
		const addresspJf39ac = accounts[5]
		const boolGnT2zte = await Token50X100pZt16fZ.decreaseApproval.call(addresslPTt6T7, uinthcMk6F, {from: "0x0000000000000000000000000000000000000001"});
//		await Token50X100pZt16fZ.lock.call({from: accounts[2]});
//		const boolgRmlHep = await Token50X100pZt16fZ.setMaxLockPeriod.call(uintGVUCfLv, {from: "0x0000000000000000000000000000000000000001"});
//		const boolrS57IDp = await Token50X100pZt16fZ.transfer.call(addressHwcBmLL, uintjXdbmgn, {from: accounts[5]});
//		const boolBzB8V8 = await Token50X100pZt16fZ.issueTokens.call(addresspJf39ac, addressebBU45w, uintucht2MK, {from: accounts[0]});

		assert.equal(boolGnT2zte, true)
		await expect(Token50X100pZt16fZ.lock.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100pZt16fZ = await Token50X100.new({from: accounts[2]});
		const uintsau9RV = BigInt("1427")
		const addressAPQbRM = "0x0000000000000000000000000000000000000000"
		const uint3MhFRq = BigInt("547")
		const uinteDUaTQh = BigInt("1304")
		const addresszQEzlJ5 = accounts[4]
		const uintfNB68a9 = BigInt("1760")
		const addressPttb8UR = accounts[4]
//		const boolrS57IDp = await Token50X100pZt16fZ.transfer.call(addressAPQbRM, uintsau9RV, {from: accounts[5]});
//		const bool9m1JGe = await Token50X100pZt16fZ.setVesting.call(addresszQEzlJ5, uinteDUaTQh, uint3MhFRq, {from: accounts[0]});
//		const boolNGj6UdW = await Token50X100pZt16fZ.transfer.call(addressPttb8UR, uintfNB68a9, {from: accounts[2]});

		await expect(Token50X100pZt16fZ.transfer.call(addressAPQbRM, uintsau9RV, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100pZt16fZ = await Token50X100.new({from: accounts[2]});
		const uintHj5z5bV = BigInt("0")
		const address0jxOaL = accounts[4]
		const address2MPmBF = accounts[0]
		const addressZtveOe = accounts[3]
		const uintqGFgapj = BigInt("481")
		const addressPCv4OH0 = accounts[4]
		const addressdqoZHI0 = accounts[0]
		const uintzhyhbRN = BigInt("684")
		const uintgHFkjbe = BigInt("1522")
		const addressOkQp4LS = "0x0000000000000000000000000000000000000001"
		const uintNz4k1cF = BigInt("1008")
		const uint22Fyi0 = BigInt("647")
		const addressrVELXK = "0x0000000000000000000000000000000000000001"
		const addressHbKMx87 = accounts[5]
		const boolGnT2zte = await Token50X100pZt16fZ.decreaseApproval.call(address0jxOaL, uintHj5z5bV, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OvpBbw = await Token50X100pZt16fZ.allowance.call(addressZtveOe, address2MPmBF, {from: accounts[5]});
//		const boolja8p1Di = await Token50X100pZt16fZ.issueTokens.call(addressdqoZHI0, addressPCv4OH0, uintqGFgapj, {from: accounts[1]});
//		const boolDWYoSzH = await Token50X100pZt16fZ.setVesting.call(addressOkQp4LS, uintgHFkjbe, uintzhyhbRN, {from: accounts[1]});
//		const boolq4Gl8So = await Token50X100pZt16fZ._transfer.call(addressHbKMx87, addressrVELXK, uint22Fyi0, uintNz4k1cF, {from: accounts[2]});

		assert.equal(boolGnT2zte, true)
		assert.equal(uint256OvpBbw, BigInt("0"))
		await expect(Token50X100pZt16fZ.issueTokens.call(addressdqoZHI0, addressPCv4OH0, uintqGFgapj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})