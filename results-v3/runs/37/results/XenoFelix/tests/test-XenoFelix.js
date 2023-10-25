const XenoFelix = artifacts.require("XenoFelix");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('XenoFelix', (accounts) => {
	it('test for XenoFelix', async () => {
		const stringTvw3E5b = "oub4VbGWxjkUVB"
		const stringcUL8qEo = "zmIfGJ1STpCgQtbVefHKbiIvzb7I1rGl2HaLJTkeVnO4r6uxdMUVwWx9dFSdqG20DUVfn4eE62Fb2UxQqS2QLDETbk4nA2kNra"
		const uintkCoR4V2 = BigInt("59")
		const XenoFelixyXOUnU6 = await XenoFelix.new(stringTvw3E5b, stringcUL8qEo, uintkCoR4V2, {from: accounts[0]});
		const addressuxBObsl = accounts[0]
		const addressmppZfLK = accounts[3]
		const uint256oByPUGJ = await XenoFelixyXOUnU6.balanceOf.call(addressuxBObsl, {from: accounts[2]});
		const addressJUpTnSX = await XenoFelixyXOUnU6.removePauser.call(addressmppZfLK, {from: accounts[4]});
		await XenoFelixyXOUnU6.onlyOwner.call({from: accounts[0]});
		const boolMKCxOrg = await XenoFelixyXOUnU6.paused.call({from: accounts[0]});
	});

	it('test for XenoFelix', async () => {
		const stringpq3ZuvD = "BATVgM4534Qg3LU9dGVu5hOcBM"
		const stringROFCgpY = "YjUUmNV4BnLbxSgyNAPsZF6mLC6U3pg3dA94NASxbB0x6Z"
		const uintOFGRekz = BigInt("152")
		const XenoFelixgG514lx = await XenoFelix.new(stringpq3ZuvD, stringROFCgpY, uintOFGRekz, {from: accounts[4]});
		const uintP8P0QVc = BigInt("218")
		const addressuOTAsP7 = accounts[4]
		const addressLJIoa88 = "0x0000000000000000000000000000000000000001"
		const addressdgp5fa8 = accounts[1]
		const boolLRewAob = await XenoFelixgG514lx.transfer.call(addressuOTAsP7, uintP8P0QVc, {from: accounts[3]});
		const boolBJBFaq = await XenoFelixgG514lx.isOwner.call(addressLJIoa88, {from: accounts[1]});
		const boolFlqOck = await XenoFelixgG514lx.isOwner.call(addressdgp5fa8, {from: accounts[4]});
	});

	it('test for XenoFelix', async () => {
		const XenoFelixmaJNGe2 = await XenoFelix.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSn97Kpn = accounts[3]
		const uintmAmSTTo = BigInt("840")
		const uintAQwOlO = BigInt("196")
		const boolprMS1D6 = await XenoFelixmaJNGe2.freezeAccount.call(addressSn97Kpn, {from: accounts[0]});
		await XenoFelixmaJNGe2.onlyNewOwner.call({from: accounts[5]});
		const uint256Pj0c2CS = await XenoFelixmaJNGe2.burn.call(uintmAmSTTo, {from: accounts[2]});
		const uint256PONWkbi = await XenoFelixmaJNGe2.burn.call(uintAQwOlO, {from: accounts[2]});
		await XenoFelixmaJNGe2.whenNotPaused.call({from: accounts[1]});
		await XenoFelixmaJNGe2.onlyNewOwner.call({from: accounts[3]});
	});

	it('test for XenoFelix', async () => {
		const stringRZN7aMo = "0cJ8vaT6vzaxFG90HaiBZKdLtbrRt3Rzq4lp7NHCOo2hzCKUhQqGOv4WPdGyfzbUv9qv5AqaonfVDwLb9y1oP"
		const stringFmJZMfQ = "ahUsoH7gjYGHjJ6H2r"
		const uintRLmOTi5 = BigInt("235")
		const XenoFelixJlHlY9C = await XenoFelix.new(stringRZN7aMo, stringFmJZMfQ, uintRLmOTi5, {from: accounts[5]});
		const uintGvLKYRn = BigInt("233")
		const addresscxWhYe0 = accounts[0]
		await XenoFelixJlHlY9C.unpause.call({from: accounts[3]});
		await XenoFelixJlHlY9C.unpause.call({from: accounts[4]});
		const booluGUujnf = await XenoFelixJlHlY9C.transfer.call(addresscxWhYe0, uintGvLKYRn, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringJ9Cyp2c = "NMaOS2rTOfXa2yJklNavNaakBcyO5dUQwTqLdGuDkadpUDb722v2QxvUc1xsyuw8"
		const stringgIERcqq = "lt"
		const uintLAHwjKh = BigInt("1285")
		const uintzOer5bX = BigInt("187")
		const XenoFelixPRhSEYn = await XenoFelix.new(stringJ9Cyp2c, stringgIERcqq, uintLAHwjKh, uintzOer5bX, {from: accounts[1]});
		const boolucMHbwC = await XenoFelixPRhSEYn.paused.call({from: accounts[4]});
		await XenoFelixPRhSEYn.unpause.call({from: accounts[1]});
		await XenoFelixPRhSEYn.renouncePauser.call({from: accounts[0]});

		assert.equal(boolucMHbwC, false)
		await expect(XenoFelixPRhSEYn.unpause.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringmxA5CSh = "QSmKmUIKarEgGwFOiQFRW8FbWKA7cXAxwd8wnZytyY5QI"
		const stringXguUHiB = "Q9dCYZaSCPPtthl28p8mggcTRs6bf5YK3OHLuvuTtOT"
		const uintHN5SPVV = BigInt("232")
		const XenoFelixBlnZew1 = await XenoFelix.new(stringmxA5CSh, stringXguUHiB, uintHN5SPVV, {from: accounts[1]});
		const uintT7YK4q9 = BigInt("1378")
		const addressnfnCQka = accounts[2]
		const uintduE5Zj = BigInt("1244")
		const addressw3GUupr = accounts[1]
		const addressiOK38Zn = accounts[3]
		const addressA0eONMU = "0x0000000000000000000000000000000000000001"
		const uintf8yNB78 = BigInt("25")
		const uintKdXAfxg = BigInt("1870")
		const addresso4GtuIW = accounts[4]
		const addressMLGYwHO = await XenoFelixBlnZew1.burnFrom.call(addressnfnCQka, uintT7YK4q9, {from: accounts[0]});
		const boolelO49VF = await XenoFelixBlnZew1.transfer.call(addressw3GUupr, uintduE5Zj, {from: accounts[3]});
		const addresseAonloG = await XenoFelixBlnZew1.removePauser.call(addressiOK38Zn, {from: accounts[5]});
		const boolYSyFbMa = await XenoFelixBlnZew1.isPauser.call(addressA0eONMU, {from: accounts[4]});
		const boolUln1szt = await XenoFelixBlnZew1.transferWithLock.call(addresso4GtuIW, uintKdXAfxg, uintf8yNB78, {from: accounts[3]});
		const boolgPFMMi = await XenoFelixBlnZew1.paused.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintnzugmPR = BigInt("682")
		const uintT3guwyN = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintnzugmPR, uintT3guwyN, {from: accounts[2]});
		const addressrdEFz3 = accounts[2]
		const addressR6SLMvJ = accounts[2]
		const stringGvsJBDr = await XenoFelixhZEsK9H.symbol.call({from: accounts[1]});
		const uint256H8Dh7lW = await XenoFelixhZEsK9H.balanceOf.call(addressrdEFz3, {from: accounts[2]});
		const addressDVX55EN = await XenoFelixhZEsK9H.notFrozen.call(addressR6SLMvJ, {from: accounts[3]});

		assert.equal(stringGvsJBDr, "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9")
		assert.equal(uint256H8Dh7lW, BigInt("682000"))
		await expect(XenoFelixhZEsK9H.notFrozen.call(addressR6SLMvJ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintTJu3r7 = BigInt("682")
		const uintvdQWgVc = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintTJu3r7, uintvdQWgVc, {from: accounts[2]});
		const addressxPWEK6B = accounts[4]
		const addressJSgRms = accounts[2]
		const booliJIkq40 = await XenoFelixhZEsK9H.unfreezeAccount.call(addressxPWEK6B, {from: accounts[1]});
		const stringGvsJBDr = await XenoFelixhZEsK9H.symbol.call({from: accounts[1]});
		const uint256H8Dh7lW = await XenoFelixhZEsK9H.balanceOf.call(addressJSgRms, {from: accounts[2]});

		await expect(XenoFelixhZEsK9H.unfreezeAccount.call(addressxPWEK6B, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintKcHYmOH = BigInt("682")
		const uintIo6aIl = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintKcHYmOH, uintIo6aIl, {from: accounts[2]});
		const uintJnbyC1G = BigInt("396")
		const addressSL2mT8X = accounts[2]
		const addressqR9LEAv = accounts[2]
		const stringGvsJBDr = await XenoFelixhZEsK9H.symbol.call({from: accounts[1]});
		const uint256GxNAl0o = await XenoFelixhZEsK9H.burn.call(uintJnbyC1G, {from: accounts[5]});
		const uint256H8Dh7lW = await XenoFelixhZEsK9H.balanceOf.call(addressSL2mT8X, {from: accounts[2]});
		const addressDVX55EN = await XenoFelixhZEsK9H.notFrozen.call(addressqR9LEAv, {from: accounts[3]});

		assert.equal(stringGvsJBDr, "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9")
		await expect(XenoFelixhZEsK9H.burn.call(uintJnbyC1G, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintAS6HJhE = BigInt("682")
		const uintMvMmMAT = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintAS6HJhE, uintMvMmMAT, {from: accounts[2]});
		const addresso1Vj1X = accounts[3]
		const addresstO7tjVk = accounts[2]
		await XenoFelixhZEsK9H.pause.call({from: accounts[2]});
		const stringGvsJBDr = await XenoFelixhZEsK9H.symbol.call({from: accounts[1]});
		const uint256H8Dh7lW = await XenoFelixhZEsK9H.balanceOf.call(addresso1Vj1X, {from: accounts[2]});
		const boolOR7fHed = await XenoFelixhZEsK9H.paused.call({from: accounts[1]});
		const addressDVX55EN = await XenoFelixhZEsK9H.notFrozen.call(addresstO7tjVk, {from: accounts[3]});

		await expect(XenoFelixhZEsK9H.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintvdEc2W9 = BigInt("682")
		const uintYtDIM9X = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintvdEc2W9, uintYtDIM9X, {from: accounts[2]});
		const uintcVURvfd = BigInt("1462")
		const addressKcrOjnK = accounts[2]
		const addressoyoMe4S = accounts[2]
		const stringGvsJBDr = await XenoFelixhZEsK9H.symbol.call({from: accounts[1]});
		const boolNqnzeDL = await XenoFelixhZEsK9H.transfer.call(addressKcrOjnK, uintcVURvfd, {from: accounts[0]});
		await XenoFelixhZEsK9H.onlyNewOwner.call({from: accounts[4]});
		await XenoFelixhZEsK9H.renouncePauser.call({from: accounts[1]});
		const addressDVX55EN = await XenoFelixhZEsK9H.notFrozen.call(addressoyoMe4S, {from: accounts[3]});

		assert.equal(stringGvsJBDr, "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9")
		await expect(XenoFelixhZEsK9H.transfer.call(addressKcrOjnK, uintcVURvfd, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintO1pdxyd = BigInt("682")
		const uinttUChhLZ = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintO1pdxyd, uinttUChhLZ, {from: accounts[2]});
		const uintjrJIC8T = BigInt("67")
		const address8bz9qT = accounts[0]
		const addresspnGKVvj = accounts[2]
		const addressAItKAAP = accounts[2]
		const stringGvsJBDr = await XenoFelixhZEsK9H.symbol.call({from: accounts[1]});
		const boolHXfVeKD = await XenoFelixhZEsK9H.decreaseAllowance.call(address8bz9qT, uintjrJIC8T, {from: accounts[2]});
		const uint256H8Dh7lW = await XenoFelixhZEsK9H.balanceOf.call(addresspnGKVvj, {from: accounts[2]});
		const addressDVX55EN = await XenoFelixhZEsK9H.notFrozen.call(addressAItKAAP, {from: accounts[3]});

		assert.equal(stringGvsJBDr, "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9")
		await expect(XenoFelixhZEsK9H.decreaseAllowance.call(address8bz9qT, uintjrJIC8T, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintJW1f7Gf = BigInt("682")
		const uintNGkaxYx = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintJW1f7Gf, uintNGkaxYx, {from: accounts[2]});
		const addresssPizhVX = accounts[2]
		const addressVE6MBpN = accounts[4]
		const stringGvsJBDr = await XenoFelixhZEsK9H.symbol.call({from: accounts[1]});
		const uint256H8Dh7lW = await XenoFelixhZEsK9H.balanceOf.call(addresssPizhVX, {from: accounts[2]});
		const addresssySLZDk = await XenoFelixhZEsK9H.removePauser.call(addressVE6MBpN, {from: accounts[2]});

		assert.equal(stringGvsJBDr, "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9")
		assert.equal(uint256H8Dh7lW, BigInt("682000"))
		await expect(XenoFelixhZEsK9H.removePauser.call(addressVE6MBpN, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintYluMNCK = BigInt("682")
		const uintMuxLzVg = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintYluMNCK, uintMuxLzVg, {from: accounts[2]});
		const addressLdxfVtd = accounts[2]
		const stringGvsJBDr = await XenoFelixhZEsK9H.symbol.call({from: accounts[1]});
		const boolv3oTicn = await XenoFelixhZEsK9H.isOwner.call(addressLdxfVtd, {from: accounts[2]});

		assert.equal(boolv3oTicn, true)
		assert.equal(stringGvsJBDr, "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9")
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintm6XCkQ2 = BigInt("682")
		const uintvJBJyf = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintm6XCkQ2, uintvJBJyf, {from: accounts[2]});
		const uintONfPPe = BigInt("1824")
		const addressfwyIfmK = accounts[2]
		const address8FMNO9 = accounts[2]
		const boolKC8uajS = await XenoFelixhZEsK9H.approve.call(addressfwyIfmK, uintONfPPe, {from: accounts[3]});
		const stringGvsJBDr = await XenoFelixhZEsK9H.symbol.call({from: accounts[1]});
		const uint256H8Dh7lW = await XenoFelixhZEsK9H.balanceOf.call(address8FMNO9, {from: accounts[2]});

		assert.equal(boolKC8uajS, true)
		assert.equal(stringGvsJBDr, "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9")
		assert.equal(uint256H8Dh7lW, BigInt("682000"))
	});

	it('test for XenoFelix', async () => {
		const stringsQqqjGC = "TPsf4WrPniyyHTpHO1SQrfb4xk01cezQ9XWa"
		const stringBIhXzpC = "w0oqS0piXBz7iGVsTdOfJEG7iTa3HsGe3XzFKMGaFVqX1h8LM3SWw8Xa66j"
		const uintiYiRr62 = BigInt("64")
		const XenoFelixMfLjUU = await XenoFelix.new(stringsQqqjGC, stringBIhXzpC, uintiYiRr62, {from: accounts[3]});
		const uintQYRxWZ2 = BigInt("1398")
		const addressWWEx0YA = accounts[4]
		const addressiPQql6M = accounts[1]
		const addressNJk9CrJ = accounts[5]
		const uintQZL7kee = BigInt("2018")
		const uintHcyn6GL = BigInt("347")
		const addressO6IGOXW = accounts[5]
		const uintRoWd5KO = BigInt("1902")
		const addressipPqNOi = accounts[5]
		const bool9vn0Z9 = await XenoFelixMfLjUU.transferFrom.call(addressiPQql6M, addressWWEx0YA, uintQYRxWZ2, {from: accounts[1]});
		const addressXacYdnw = await XenoFelixMfLjUU.notFrozen.call(addressNJk9CrJ, {from: accounts[5]});
		await XenoFelixMfLjUU.renouncePauser.call({from: accounts[1]});
		await XenoFelixMfLjUU.onlyPauser.call({from: accounts[0]});
		const boolGmGGUkD = await XenoFelixMfLjUU.transferWithLock.call(addressO6IGOXW, uintHcyn6GL, uintQZL7kee, {from: accounts[1]});
		const boolQouiQ0b = await XenoFelixMfLjUU.decreaseAllowance.call(addressipPqNOi, uintRoWd5KO, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintaGm3fsf = BigInt("682")
		const uintFel5YHs = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintaGm3fsf, uintFel5YHs, {from: accounts[2]});
		const uintyXAum5H = BigInt("1462")
		const addressyxKKlOE = accounts[2]
		const addressDLtBZQ = accounts[5]
		const stringGvsJBDr = await XenoFelixhZEsK9H.symbol.call({from: accounts[1]});
		const uint8P3PPr8b = await XenoFelixhZEsK9H.decimals.call({from: accounts[4]});
		const boolNqnzeDL = await XenoFelixhZEsK9H.transfer.call(addressyxKKlOE, uintyXAum5H, {from: accounts[0]});
		const addressMIvEup7 = await XenoFelixhZEsK9H.notFrozen.call(addressDLtBZQ, {from: accounts[1]});
		await XenoFelixhZEsK9H.renouncePauser.call({from: accounts[1]});
		const boolqdAE5K3 = await XenoFelixhZEsK9H.paused.call({from: accounts[0]});

		assert.equal(stringGvsJBDr, "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9")
		assert.equal(uint8P3PPr8b, BigInt("3"))
		await expect(XenoFelixhZEsK9H.transfer.call(addressyxKKlOE, uintyXAum5H, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintTKWlsiN = BigInt("682")
		const uintAXgDoTY = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintTKWlsiN, uintAXgDoTY, {from: accounts[2]});
		const addressHzfHqfx = accounts[5]
		const uintkLGCa1t = BigInt("140")
		const addressCtlos6 = accounts[0]
		const uintCmRTmGQ = BigInt("1497")
		const addressCR2jyXV = accounts[2]
		const boolHHJIPrR = await XenoFelixhZEsK9H.unfreezeAccount.call(addressHzfHqfx, {from: accounts[2]});
		const stringGvsJBDr = await XenoFelixhZEsK9H.symbol.call({from: accounts[1]});
		const boolxwfeyLi = await XenoFelixhZEsK9H.approve.call(addressCtlos6, uintkLGCa1t, {from: accounts[2]});
		const boolNqnzeDL = await XenoFelixhZEsK9H.transfer.call(addressCR2jyXV, uintCmRTmGQ, {from: accounts[0]});
		await XenoFelixhZEsK9H.renouncePauser.call({from: accounts[1]});

		await expect(XenoFelixhZEsK9H.unfreezeAccount.call(addressHzfHqfx, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintRJ3kGVw = BigInt("682")
		const uintjQlliZU = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintRJ3kGVw, uintjQlliZU, {from: accounts[2]});
		const addresssAVEyF5 = accounts[2]
		const uintEBbEzZf = BigInt("1431")
		const addressc5TXJ6h = accounts[5]
		const stringGvsJBDr = await XenoFelixhZEsK9H.symbol.call({from: accounts[1]});
		const uint256H8Dh7lW = await XenoFelixhZEsK9H.balanceOf.call(addresssAVEyF5, {from: accounts[2]});
		const addressdmEhrMx = await XenoFelixhZEsK9H.burnFrom.call(addressc5TXJ6h, uintEBbEzZf, {from: accounts[3]});

		assert.equal(stringGvsJBDr, "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9")
		assert.equal(uint256H8Dh7lW, BigInt("682000"))
		await expect(XenoFelixhZEsK9H.burnFrom.call(addressc5TXJ6h, uintEBbEzZf, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringk804Olk = "G7GwnMQxX1UroIGxFQELj6x5roTQcMxaqgt2nB3zvDCBq2t5g9PnzU2vMgGqfYGhCi6rlQs2uk2WPFrWgQ883u"
		const stringSCoyBmr = "Y5VWI2fiJJhukiHVGBk5G04TssQjWkabXdOh38LtG5B851AU"
		const uintuuMBaML = BigInt("734")
		const uintmmaBiNZ = BigInt("100")
		const XenoFelixBQ6h2HD = await XenoFelix.new(stringk804Olk, stringSCoyBmr, uintuuMBaML, uintmmaBiNZ, {from: accounts[2]});
		const uintUq9I6S9 = BigInt("824")
		const addressnjbLvbs = accounts[1]
		const addresscgI0rc1 = accounts[1]
		const addressDDfN3y = accounts[4]
		const uintYSymkvx = BigInt("727")
		const addressmFIQJcX = accounts[2]
		const boolUhC5B3x = await XenoFelixBQ6h2HD.transfer.call(addressnjbLvbs, uintUq9I6S9, {from: accounts[2]});
		const uint256rZ5NIQm = await XenoFelixBQ6h2HD.allowance.call(addressDDfN3y, addresscgI0rc1, {from: accounts[4]});
		await XenoFelixBQ6h2HD.onlyOwner.call({from: accounts[0]});
		await XenoFelixBQ6h2HD.unpause.call({from: accounts[4]});
		const boolQLGbk0P = await XenoFelixBQ6h2HD.transfer.call(addressmFIQJcX, uintYSymkvx, {from: accounts[5]});

		assert.equal(boolUhC5B3x, true)
		assert.equal(uint256rZ5NIQm, BigInt("0"))
		await expect(XenoFelixBQ6h2HD.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringJoO2ujF = "LGgorc8QTiC5KxI0HjGRbzwpJ1Ysr3UzuIQX"
		const stringGR3ladm = "ohuJqfTc2uBgS9Ua92z1rEPN1182G"
		const uintUNKL2Ln = BigInt("128")
		const XenoFelixcCuIr3H = await XenoFelix.new(stringJoO2ujF, stringGR3ladm, uintUNKL2Ln, {from: accounts[2]});
		const uintWih1hWK = BigInt("1071")
		const addressWsT0Sak = accounts[1]
		const uinted0DNhU = BigInt("405")
		const addressxdEXETt = accounts[3]
		const addressKlm8jsy = "0x0000000000000000000000000000000000000001"
		const uintrOzpKNI = BigInt("1034")
		const addressaE0q8Yl = accounts[4]
		const addressxnyE7ew = accounts[0]
		const boolkLyQx3o = await XenoFelixcCuIr3H.transfer.call(addressWsT0Sak, uintWih1hWK, {from: accounts[2]});
		const bool9w73S0 = await XenoFelixcCuIr3H.transfer.call(addressxdEXETt, uinted0DNhU, {from: accounts[2]});
		const addressEXInKfA = await XenoFelixcCuIr3H.removePauser.call(addressKlm8jsy, {from: accounts[5]});
		const boolbvSSeuC = await XenoFelixcCuIr3H.transfer.call(addressaE0q8Yl, uintrOzpKNI, {from: "0x0000000000000000000000000000000000000001"});
		await XenoFelixcCuIr3H.unpause.call({from: accounts[0]});
		const addressnHFiiV4 = await XenoFelixcCuIr3H.transferOwnership.call(addressxnyE7ew, {from: accounts[2]});
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintheXH6Sh = BigInt("682")
		const uintZuvDmaz = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintheXH6Sh, uintZuvDmaz, {from: accounts[2]});
		const uintpOR2Qzm = BigInt("1029")
		const addressdhzlcjr = accounts[3]
		const addressXFooifi = accounts[3]
		const boolBS4KI5z = await XenoFelixhZEsK9H.transferFrom.call(addressXFooifi, addressdhzlcjr, uintpOR2Qzm, {from: accounts[2]});
		const stringGvsJBDr = await XenoFelixhZEsK9H.symbol.call({from: accounts[1]});

		await expect(XenoFelixhZEsK9H.transferFrom.call(addressXFooifi, addressdhzlcjr, uintpOR2Qzm, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintrN2SVOs = BigInt("682")
		const uintbeKWrs = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintrN2SVOs, uintbeKWrs, {from: accounts[2]});
		const addressxnRSrFW = accounts[1]
		const address8K5dYQ = "0x0000000000000000000000000000000000000001"
		const uintCz3DsRn = BigInt("1858")
		const addressUvZrDz = accounts[0]
		const addresswJUxIx = accounts[2]
		const uint256ctI4N3r = await XenoFelixhZEsK9H.allowance.call(address8K5dYQ, addressxnRSrFW, {from: accounts[0]});
		const boolFT9M4Cv = await XenoFelixhZEsK9H.increaseAllowance.call(addressUvZrDz, uintCz3DsRn, {from: accounts[2]});
		const uint256H8Dh7lW = await XenoFelixhZEsK9H.balanceOf.call(addresswJUxIx, {from: accounts[2]});

		assert.equal(boolFT9M4Cv, true)
		assert.equal(uint256H8Dh7lW, BigInt("682000"))
		assert.equal(uint256ctI4N3r, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintMUIhNuN = BigInt("682")
		const uintw9ZDSSV = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintMUIhNuN, uintw9ZDSSV, {from: accounts[2]});
		const stringRcGVOl = await XenoFelixhZEsK9H.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringRcGVOl, "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS")
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintlk49tc5 = BigInt("682")
		const uintlmU4gVz = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintlk49tc5, uintlmU4gVz, {from: accounts[2]});
		const uintad05srO = BigInt("1074")
		const addresspOB4hQZ = accounts[3]
		const uintsouyj0S = BigInt("1462")
		const addressqEggwp = accounts[2]
		await XenoFelixhZEsK9H.renouncePauser.call({from: accounts[1]});
		const boolcpsxMM = await XenoFelixhZEsK9H.transfer.call(addresspOB4hQZ, uintad05srO, {from: accounts[4]});
		const boolNqnzeDL = await XenoFelixhZEsK9H.transfer.call(addressqEggwp, uintsouyj0S, {from: accounts[0]});

		await expect(XenoFelixhZEsK9H.renouncePauser.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintUSkgVO = BigInt("682")
		const uintiw6k87b = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintUSkgVO, uintiw6k87b, {from: accounts[2]});
		const addresspKnl4mC = accounts[3]
		const uint256ugfpY20 = await XenoFelixhZEsK9H.totalSupply.call({from: accounts[1]});
		const uint256H8Dh7lW = await XenoFelixhZEsK9H.balanceOf.call(addresspKnl4mC, {from: accounts[2]});

		assert.equal(uint256H8Dh7lW, BigInt("0"))
		assert.equal(uint256ugfpY20, BigInt("682000"))
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintoqHc70Y = BigInt("682")
		const uintA4I3uC0 = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintoqHc70Y, uintA4I3uC0, {from: accounts[2]});
		const addressgEhu0na = accounts[3]
		const uintILrqb9B = BigInt("25")
		const uintc999DGn = BigInt("564")
		const addressFdxwa87 = accounts[3]
		const addressSgb5qjB = accounts[1]
		const uint256H8Dh7lW = await XenoFelixhZEsK9H.balanceOf.call(addressgEhu0na, {from: accounts[2]});
		const boolcI6jEOG = await XenoFelixhZEsK9H.lock.call(addressFdxwa87, uintc999DGn, uintILrqb9B, {from: accounts[2]});
		const boolQZg9P6w = await XenoFelixhZEsK9H.freezeAccount.call(addressSgb5qjB, {from: accounts[5]});

		assert.equal(uint256H8Dh7lW, BigInt("0"))
		await expect(XenoFelixhZEsK9H.lock.call(addressFdxwa87, uintc999DGn, uintILrqb9B, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintmA2iA5K = BigInt("682")
		const uintW2ww5QR = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintmA2iA5K, uintW2ww5QR, {from: accounts[2]});
		const addressKwyRJM7 = accounts[3]
		const uintZLIbs2p = BigInt("899")
		const uintNb79H7z = BigInt("1194")
		const addressdRYFPRw = accounts[3]
		const uint256H8Dh7lW = await XenoFelixhZEsK9H.balanceOf.call(addressKwyRJM7, {from: accounts[2]});
		const booluZt8dTq = await XenoFelixhZEsK9H.transferWithLock.call(addressdRYFPRw, uintNb79H7z, uintZLIbs2p, {from: accounts[2]});

		assert.equal(booluZt8dTq, true)
		assert.equal(uint256H8Dh7lW, BigInt("0"))
	});

	it('test for XenoFelix', async () => {
		const stringPcuC5sO = "UzQ29tWKFMc0ws2Z3wBo52OzX5WqXk8QBttLScqDpvsLVO1ukZKbWZrWV1LvQWCYXXWLP8lrNjOUvVb5DiVwYrDVTS"
		const stringqDdpPQm = "tLEL8JCZThVbQarjOjFORoVCTH3Pr8z8ky3OvYuRb2JEJQewXSI7tKYYqED3xNGoVHwr9unEr5I2zgDa3Mazr8mx9"
		const uintnZoQU4f = BigInt("682")
		const uintdQhERR = BigInt("3")
		const XenoFelixhZEsK9H = await XenoFelix.new(stringPcuC5sO, stringqDdpPQm, uintnZoQU4f, uintdQhERR, {from: accounts[2]});
		const addressFw4aeQU = accounts[0]
		const addressKl1kTkV = accounts[2]
		const addresspHsJA5 = await XenoFelixhZEsK9H.transferOwnership.call(addressFw4aeQU, {from: accounts[2]});
		const uint8RB9W3Za = await XenoFelixhZEsK9H.decimals.call({from: accounts[1]});
		const uint256H8Dh7lW = await XenoFelixhZEsK9H.balanceOf.call(addressKl1kTkV, {from: accounts[2]});

		assert.equal(uint256H8Dh7lW, BigInt("682000"))
		assert.equal(uint8RB9W3Za, BigInt("3"))
	});
})