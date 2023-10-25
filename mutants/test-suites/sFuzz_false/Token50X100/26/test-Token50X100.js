const Token50X100 = artifacts.require("Token50X100");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Token50X100', (accounts) => {
	it('test for Token50X100', async () => {
		const Token50X100kUHeViq = await Token50X100.new({from: accounts[1]});
		const uint0c3kie = BigInt("603")
		const addressHcFFmi = accounts[2]
		const addressNkutsM9 = accounts[0]
		const uintzhKWrC0 = BigInt("1098")
		const addresspdOWnyX = accounts[2]
		const uintlGyGwkI = BigInt("36")
		const stringv0PuI20 = "R3ix9YJg"
		const stringl3mPFW = "XtFnPzioVzCWHyDYDyRb67foProPPoLEEHrGNQdvtiYv992a78ucmYYbo1Tl3z5RgD2HEB"
//		const boolHNmNKV4 = await Token50X100kUHeViq.transferFrom.call(addressNkutsM9, addressHcFFmi, uint0c3kie, {from: accounts[0]});
//		const boolYvrZ2LH = await Token50X100kUHeViq.increaseApproval.call(addresspdOWnyX, uintzhKWrC0, {from: accounts[3]});
//		const boolNerqDNc = await Token50X100kUHeViq.setSymbolNameDecimals.call(stringl3mPFW, stringv0PuI20, uintlGyGwkI, {from: accounts[3]});

		await expect(Token50X100kUHeViq.transferFrom.call(addressNkutsM9, addressHcFFmi, uint0c3kie, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100torPFo6 = await Token50X100.new({from: accounts[0]});
		const uintiWfrhQa = BigInt("617")
		const addressJN5FaPN = accounts[5]
		const uintyvpvwkO = BigInt("179")
		const stringKODtQi = "dwP9zEcsVsveNWtwIDvIC0lUKMfVXlKvAPV2LOVhej"
		const stringOELJ2EL = "PWCC3aYsSBxIItmIW1zhlLd83VzEfAnA7cpMu"
		const boolxpd9HI2 = false
		const addressWLqzOPz = accounts[3]
//		const booleRiEgA = await Token50X100torPFo6.transfer.call(addressJN5FaPN, uintiWfrhQa, {from: accounts[5]});
//		await Token50X100torPFo6.lock.call({from: accounts[2]});
//		const boolpeFFp0s = await Token50X100torPFo6.setSymbolNameDecimals.call(stringOELJ2EL, stringKODtQi, uintyvpvwkO, {from: accounts[1]});
//		await Token50X100torPFo6.setWhiteListReceivers.call(addressWLqzOPz, boolxpd9HI2, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100torPFo6.transfer.call(addressJN5FaPN, uintiWfrhQa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100YTvO7LP = await Token50X100.new({from: accounts[3]});
		const addressrWIHlfm = accounts[2]
		const addressVPnkGbe = accounts[5]
		const addresssrz8Z3P = accounts[3]
		const uint256PaNtbdl = await Token50X100YTvO7LP.balanceOf.call(addressrWIHlfm, {from: accounts[1]});
//		const addressk7RHoL = await Token50X100YTvO7LP.setOriginalContract.call(addressVPnkGbe, {from: "0x0000000000000000000000000000000000000001"});
//		const addressgkfyRp6 = await Token50X100YTvO7LP.transferOwnership.call(addresssrz8Z3P, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256PaNtbdl, BigInt("0"))
		await expect(Token50X100YTvO7LP.setOriginalContract.call(addressVPnkGbe, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100udXL491 = await Token50X100.new({from: accounts[4]});
		const uintuWiZnk = BigInt("1276")
		const addressQyv48O2 = "0x0000000000000000000000000000000000000001"
		const addressaAw5pdU = accounts[1]
		const addresszOi98FI = accounts[0]
		const addressySPQZWz = accounts[2]
		const boolH8YcAmB = await Token50X100udXL491.approve.call(addressQyv48O2, uintuWiZnk, {from: accounts[4]});
		const uint256N8lDPz = await Token50X100udXL491.balanceOf.call(addressaAw5pdU, {from: "0x0000000000000000000000000000000000000001"});
		const uint256e3vaguU = await Token50X100udXL491.balanceOf.call(addresszOi98FI, {from: accounts[0]});
//		const addressLmXqB2t = await Token50X100udXL491.setOriginalContract.call(addressySPQZWz, {from: accounts[2]});

		assert.equal(boolH8YcAmB, true)
		assert.equal(uint256N8lDPz, BigInt("0"))
		assert.equal(uint256e3vaguU, BigInt("0"))
		await expect(Token50X100udXL491.setOriginalContract.call(addressySPQZWz, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kUHeViq = await Token50X100.new({from: accounts[1]});
		const uintl9fHWA7 = BigInt("1097")
		const addressuOLgeZz = accounts[2]
		const boolYvrZ2LH = await Token50X100kUHeViq.increaseApproval.call(addressuOLgeZz, uintl9fHWA7, {from: accounts[3]});

		assert.equal(boolYvrZ2LH, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100kUHeViq = await Token50X100.new({from: accounts[1]});
		const uintPZ2dyw8 = BigInt("1038")
		const uintbhbW4g7 = BigInt("1521")
		const addressJ4Kq0u9 = accounts[4]
		const addressu756k7M = accounts[0]
		const uintQbiWrWn = BigInt("2033")
		const addressatu5htZ = accounts[3]
		const uintirwPeS = BigInt("1692")
		const addresss6OJ014 = accounts[0]
		const uintL4SiVuo = BigInt("603")
		const addressHNYMID1 = accounts[3]
		const addressI1vXcu5 = accounts[0]
		const uintcAFhiVy = BigInt("1097")
		const addresstIuehNn = accounts[2]
//		const boolR0qdTEd = await Token50X100kUHeViq._transfer.call(addressu756k7M, addressJ4Kq0u9, uintbhbW4g7, uintPZ2dyw8, {from: accounts[1]});
//		const boolX8T1GFq = await Token50X100kUHeViq.transfer.call(addressatu5htZ, uintQbiWrWn, {from: "0x0000000000000000000000000000000000000001"});
//		const boolXZ1WyMc = await Token50X100kUHeViq.approve.call(addresss6OJ014, uintirwPeS, {from: accounts[0]});
//		const boolHNmNKV4 = await Token50X100kUHeViq.transferFrom.call(addressI1vXcu5, addressHNYMID1, uintL4SiVuo, {from: accounts[0]});
//		const boolYvrZ2LH = await Token50X100kUHeViq.increaseApproval.call(addresstIuehNn, uintcAFhiVy, {from: accounts[3]});

		await expect(Token50X100kUHeViq._transfer.call(addressu756k7M, addressJ4Kq0u9, uintbhbW4g7, uintPZ2dyw8, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100torPFo6 = await Token50X100.new({from: accounts[0]});
		const uintU5T5A4N = BigInt("165")
		const uintehPkW4 = BigInt("617")
		const addressPasCT9g = accounts[5]
		const uintKkUBAbU = BigInt("179")
		const stringKODtQi = "dwP9zEcsVsveNWtwIDvIC0lUKMfVXlKvAPV2LOVhej"
		const stringOELJ2EL = "PWCC3aYsSBxIItmIW1zhlLd83VzEfAnA7cpMu"
		const boolxpd9HI2 = false
		const addresspdkr0K3 = accounts[3]
		const boolEPCOzaw = await Token50X100torPFo6.setMaxLockPeriod.call(uintU5T5A4N, {from: accounts[3]});
//		const booleRiEgA = await Token50X100torPFo6.transfer.call(addressPasCT9g, uintehPkW4, {from: accounts[5]});
//		await Token50X100torPFo6.lock.call({from: accounts[2]});
//		const boolpeFFp0s = await Token50X100torPFo6.setSymbolNameDecimals.call(stringOELJ2EL, stringKODtQi, uintKkUBAbU, {from: accounts[1]});
//		await Token50X100torPFo6.setWhiteListReceivers.call(addresspdkr0K3, boolxpd9HI2, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolEPCOzaw, false)
		await expect(Token50X100torPFo6.transfer.call(addressPasCT9g, uintehPkW4, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100mhq6iRa = await Token50X100.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJ74eGln = BigInt("414")
		const addressuWSEF1Z = accounts[5]
		const addressHBqhjPc = "0x0000000000000000000000000000000000000001"
		const addressu0ysHu = accounts[5]
		const boolZ6x5Ajp = await Token50X100mhq6iRa.transfer.call(addressuWSEF1Z, uintJ74eGln, {from: accounts[3]});
		await Token50X100mhq6iRa.setLinkingAddresses.call(addressu0ysHu, addressHBqhjPc, {from: accounts[1]});
	});

	it('test for Token50X100', async () => {
		const Token50X100RiTxLr2 = await Token50X100.new({from: accounts[0]});
		const uintdbRGIBC = BigInt("253")
		const stringPbcHIRK = "yCaps6ScS79qgyoPUCibRTuaPYUwQVhclzYsqO6mk9xyyYfMS7mD"
		const stringkOxBRlV = "bHSnA6Bbzjn6MSnT41P4odahXxoug4jan3jILBy"
		const uintUuQcI7B = BigInt("642")
		const uintsI8pq8 = BigInt("1359")
		const addressYz7TNOA = accounts[0]
		const addressqi0Iztu = accounts[2]
		const uintrKKB7Ck = BigInt("1160")
		const addresslNBskPF = accounts[1]
		const addressJn3oBaK = accounts[4]
		const uintHzCgTJK = BigInt("359")
		const addressB4v8GK = accounts[1]
		const addressiLW7OOK = accounts[3]
//		await Token50X100RiTxLr2.setSymbolNameDecimals.call(stringkOxBRlV, stringPbcHIRK, uintdbRGIBC, {from: accounts[0]});
//		const boolJFGiJdC = await Token50X100RiTxLr2._transfer.call(addressqi0Iztu, addressYz7TNOA, uintsI8pq8, uintUuQcI7B, {from: accounts[3]});
//		const boolc2DtRqj = await Token50X100RiTxLr2.transferFrom.call(addressJn3oBaK, addresslNBskPF, uintrKKB7Ck, {from: accounts[1]});
//		const boolm9L2AiT = await Token50X100RiTxLr2.transferFrom.call(addressiLW7OOK, addressB4v8GK, uintHzCgTJK, {from: accounts[0]});

		await expect(Token50X100RiTxLr2.setSymbolNameDecimals.call(stringkOxBRlV, stringPbcHIRK, uintdbRGIBC, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kUHeViq = await Token50X100.new({from: accounts[1]});
		const uintqBKkjIf = BigInt("1839")
		const uintD2P3f3v = BigInt("332")
		const uintqoqzS1Y = BigInt("1097")
		const addressloYEe6I = accounts[3]
//		const boolI9Aga93 = await Token50X100kUHeViq.safeLock.call(uintD2P3f3v, uintqBKkjIf, {from: "0x0000000000000000000000000000000000000001"});
//		const boolYvrZ2LH = await Token50X100kUHeViq.increaseApproval.call(addressloYEe6I, uintqoqzS1Y, {from: accounts[3]});

		await expect(Token50X100kUHeViq.safeLock.call(uintD2P3f3v, uintqBKkjIf, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kUHeViq = await Token50X100.new({from: accounts[1]});
		const uintxPnvPFN = BigInt("1160")
		const addressmbNKOAj = accounts[2]
		const uintvcrSyJv = BigInt("52")
		const address13kce9 = accounts[1]
		const addressw6WYSde = accounts[0]
		const boolYvrZ2LH = await Token50X100kUHeViq.increaseApproval.call(addressmbNKOAj, uintxPnvPFN, {from: accounts[3]});
		const boolrH4UPe1 = await Token50X100kUHeViq.decreaseApproval.call(address13kce9, uintvcrSyJv, {from: accounts[5]});
//		const addressQNCL8nn = await Token50X100kUHeViq.transferOwnership.call(addressw6WYSde, {from: accounts[3]});

		assert.equal(boolYvrZ2LH, true)
		assert.equal(boolrH4UPe1, true)
		await expect(Token50X100kUHeViq.transferOwnership.call(addressw6WYSde, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kUHeViq = await Token50X100.new({from: accounts[1]});
		const uintEPsfEB2 = BigInt("1160")
		const addressdxFFasJ = accounts[3]
		const addressl09mDb9 = accounts[0]
		const addressul1UHdI = "0x0000000000000000000000000000000000000001"
		const uintcKf5VgQ = BigInt("52")
		const addresssYd1ld = accounts[1]
		const addressiXS9zXe = accounts[0]
//		await Token50X100kUHeViq.release.call({from: accounts[1]});
//		const boolYvrZ2LH = await Token50X100kUHeViq.increaseApproval.call(addressdxFFasJ, uintEPsfEB2, {from: accounts[3]});
//		const uint256KnfTFNh = await Token50X100kUHeViq.allowance.call(addressul1UHdI, addressl09mDb9, {from: accounts[4]});
//		const boolrH4UPe1 = await Token50X100kUHeViq.decreaseApproval.call(addresssYd1ld, uintcKf5VgQ, {from: accounts[5]});
//		const addressQNCL8nn = await Token50X100kUHeViq.transferOwnership.call(addressiXS9zXe, {from: accounts[3]});

		await expect(Token50X100kUHeViq.release.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100xU3fcUg = await Token50X100.new({from: accounts[2]});
		const addressSy70EAy = accounts[0]
		const addressA1kp2WJ = accounts[1]
		const uint256Rc0czPV = await Token50X100xU3fcUg.allowance.call(addressA1kp2WJ, addressSy70EAy, {from: accounts[5]});
		const uint256oz1Mipg = await Token50X100xU3fcUg.totalSupply.call({from: accounts[0]});
//		await Token50X100xU3fcUg.release.call({from: accounts[2]});

		assert.equal(uint256Rc0czPV, BigInt("0"))
		assert.equal(uint256oz1Mipg, BigInt("4714285714285710"))
		await expect(Token50X100xU3fcUg.release.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kUHeViq = await Token50X100.new({from: accounts[1]});
		const uintN0ZDp7v = BigInt("1160")
		const addressxzkYYaJ = accounts[2]
		const uintvxqTRfI = BigInt("1713")
		const uinta5vP7Gw = BigInt("188")
		const addressVRYSVdY = accounts[3]
		const uintO4CQML2 = BigInt("24")
		const addressV6yUP5b = accounts[1]
		const addressS7x0RPQ = accounts[0]
		const uintZYVbnLj = BigInt("1725")
		const uintf0uqWl = BigInt("576")
		const boolYvrZ2LH = await Token50X100kUHeViq.increaseApproval.call(addressxzkYYaJ, uintN0ZDp7v, {from: accounts[3]});
		const uint256wk19D9r = await Token50X100kUHeViq.totalSupply.call({from: accounts[5]});
		const booliN0kwH = await Token50X100kUHeViq.setVesting.call(addressVRYSVdY, uinta5vP7Gw, uintvxqTRfI, {from: accounts[1]});
		const boolrH4UPe1 = await Token50X100kUHeViq.decreaseApproval.call(addressV6yUP5b, uintO4CQML2, {from: accounts[5]});
//		const addressQNCL8nn = await Token50X100kUHeViq.transferOwnership.call(addressS7x0RPQ, {from: accounts[3]});
//		const boolsTLsHtw = await Token50X100kUHeViq.safeLock.call(uintf0uqWl, uintZYVbnLj, {from: accounts[4]});

		assert.equal(boolYvrZ2LH, true)
		assert.equal(booliN0kwH, true)
		assert.equal(boolrH4UPe1, true)
		assert.equal(uint256wk19D9r, BigInt("4714285714285710"))
		await expect(Token50X100kUHeViq.transferOwnership.call(addressS7x0RPQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kUHeViq = await Token50X100.new({from: accounts[1]});
		const addressZJyQ4u9 = accounts[2]
		const addressVgoWvl = accounts[1]
		const uintT5oyJtg = BigInt("1097")
		const addressRiJ1opf = accounts[4]
//		await Token50X100kUHeViq.setLinkingAddresses.call(addressVgoWvl, addressZJyQ4u9, {from: accounts[1]});
//		const boolYvrZ2LH = await Token50X100kUHeViq.increaseApproval.call(addressRiJ1opf, uintT5oyJtg, {from: accounts[3]});

		await expect(Token50X100kUHeViq.setLinkingAddresses.call(addressVgoWvl, addressZJyQ4u9, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kUHeViq = await Token50X100.new({from: accounts[1]});
		const uintvEuUlpm = BigInt("1778")
		const addressA43Ton = accounts[3]
		const boolYvrZ2LH = await Token50X100kUHeViq.increaseApproval.call(addressA43Ton, uintvEuUlpm, {from: accounts[3]});
//		await Token50X100kUHeViq.lock.call({from: accounts[1]});

		assert.equal(boolYvrZ2LH, true)
		await expect(Token50X100kUHeViq.lock.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kUHeViq = await Token50X100.new({from: accounts[1]});
		const uintT65MksN = BigInt("843")
		const addressVNMlWqY = accounts[3]
		const addressI34ld3 = accounts[0]
		const boolYvrZ2LH = await Token50X100kUHeViq.increaseApproval.call(addressVNMlWqY, uintT65MksN, {from: accounts[3]});
		const addressKCDik4M = await Token50X100kUHeViq.transferOwnership.call(addressI34ld3, {from: accounts[1]});

		assert.equal(boolYvrZ2LH, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100kUHeViq = await Token50X100.new({from: accounts[1]});
		const uintRavqafi = BigInt("1097")
		const addressysRqnv1 = accounts[3]
		const addresseThF6xz = accounts[2]
		const uintbpOdY3x = BigInt("260")
		const addresshD8kczW = accounts[3]
		const boolYvrZ2LH = await Token50X100kUHeViq.increaseApproval.call(addressysRqnv1, uintRavqafi, {from: accounts[3]});
//		await Token50X100kUHeViq.setTokenContract.call(addresseThF6xz, {from: accounts[1]});
//		const boolsF8UiCc = await Token50X100kUHeViq.increaseApproval.call(addresshD8kczW, uintbpOdY3x, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolYvrZ2LH, true)
		await expect(Token50X100kUHeViq.setTokenContract.call(addresseThF6xz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100torPFo6 = await Token50X100.new({from: accounts[0]});
		const uintigiTOc = BigInt("1181")
		const address9ko9Bb = "0x0000000000000000000000000000000000000000"
//		const booluNIJvza = await Token50X100torPFo6.transfer.call(address9ko9Bb, uintigiTOc, {from: "0x0000000000000000000000000000000000000001"});

		await expect(Token50X100torPFo6.transfer.call(address9ko9Bb, uintigiTOc, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100torPFo6 = await Token50X100.new({from: accounts[0]});
		const boolvq1aAt5 = true
		const addressx33PRFI = accounts[2]
		const uintTnIQNTT = BigInt("1181")
		const addresspElciXP = "0x0000000000000000000000000000000000000001"
		const uinto3iE7Z9 = BigInt("1263")
		const uintOdjKtZ = BigInt("901")
//		await Token50X100torPFo6.setWhiteListReceivers.call(addressx33PRFI, boolvq1aAt5, {from: accounts[0]});
//		const booluNIJvza = await Token50X100torPFo6.transfer.call(addresspElciXP, uintTnIQNTT, {from: "0x0000000000000000000000000000000000000001"});
//		const boolLJ0v0TG = await Token50X100torPFo6.safeLock.call(uintOdjKtZ, uinto3iE7Z9, {from: accounts[2]});

		await expect(Token50X100torPFo6.setWhiteListReceivers.call(addressx33PRFI, boolvq1aAt5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Token50X100', async () => {
		const Token50X100kUHeViq = await Token50X100.new({from: accounts[1]});
		const uints7aiMj = BigInt("0")
		const addressMSL85E = accounts[1]
		const boolrH4UPe1 = await Token50X100kUHeViq.decreaseApproval.call(addressMSL85E, uints7aiMj, {from: accounts[5]});

		assert.equal(boolrH4UPe1, true)
	});

	it('test for Token50X100', async () => {
		const Token50X100kUHeViq = await Token50X100.new({from: accounts[1]});
		const boolCUSUUat = true
		const addressGSBN4N = "0x0000000000000000000000000000000000000001"
		const uintmry8tOK = BigInt("1097")
		const addressXbl1nLf = accounts[3]
		const uintuBouS9Z = BigInt("1195")
		const addresstPuO7J4 = accounts[0]
//		await Token50X100kUHeViq.setWhiteList.call(addressGSBN4N, boolCUSUUat, {from: accounts[1]});
//		const boolYvrZ2LH = await Token50X100kUHeViq.increaseApproval.call(addressXbl1nLf, uintmry8tOK, {from: accounts[3]});
//		const boolyzYWZyH = await Token50X100kUHeViq.transfer.call(addresstPuO7J4, uintuBouS9Z, {from: accounts[0]});

		await expect(Token50X100kUHeViq.setWhiteList.call(addressGSBN4N, boolCUSUUat, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})