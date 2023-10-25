const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const LUPtSZgJqT = await LUP.new({from: accounts[2]});
		const uintgDbDhc5 = BigInt("1879")
		const uintZcvssDw = BigInt("983")
		const addressaQiufgt = accounts[5]
		const uintpgqDiPr = BigInt("59")
		const addressknXc4W = accounts[5]
		const booljde6EEO = false
		const addresssdpblLS = "0x0000000000000000000000000000000000000001"
		const booloJuWl7A = await LUPtSZgJqT.transferWithLock.call(addressaQiufgt, uintZcvssDw, uintgDbDhc5, {from: accounts[2]});
		const boolDCEviri = await LUPtSZgJqT.unlock.call(addressknXc4W, uintpgqDiPr, {from: accounts[5]});
		const boolNTKHjC1 = await LUPtSZgJqT.freezeAccount.call(addresssdpblLS, booljde6EEO, {from: accounts[1]});
		const stringiJtQw1s = await LUPtSZgJqT.symbol.call({from: accounts[4]});

		assert.equal(booloJuWl7A, true)
		await expect(LUPtSZgJqT.unlock.call(addressknXc4W, uintpgqDiPr, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPSl6hEXa = await LUP.new({from: accounts[2]});
		const boolon0qnra = true
		const addressEUTlLKn = accounts[1]
		const stringVpVe68o = await LUPSl6hEXa.symbol.call({from: accounts[1]});
		const boolTKON6hJ = await LUPSl6hEXa.freezeAccount.call(addressEUTlLKn, boolon0qnra, {from: accounts[3]});

		assert.equal(stringVpVe68o, "LUP")
		await expect(LUPSl6hEXa.freezeAccount.call(addressEUTlLKn, boolon0qnra, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const stringgKwquno = "EJabirY3ApR3eg6i6hVX3IVE6x42"
		const stringZK1eX7i = "7BY6b3CTusJq"
		const uintIpwnTyg = BigInt("42")
		const LUPAAoMPDP = await LUP.new(stringgKwquno, stringZK1eX7i, uintIpwnTyg, {from: accounts[4]});
		const boolW3HD1e = true
		const addresszZcT6d8 = accounts[1]
		const uintyhVcjTO = BigInt("596")
		const uintzWetWcV = BigInt("170")
		const addresswoCK5HN = accounts[1]
		const uintpaWwyy1 = BigInt("1417")
		const addressWvsuUBz = accounts[2]
		const booligcRV8h = await LUPAAoMPDP.freezeAccount.call(addresszZcT6d8, boolW3HD1e, {from: accounts[2]});
		const boolFdJDFin = await LUPAAoMPDP.transferWithLock.call(addresswoCK5HN, uintzWetWcV, uintyhVcjTO, {from: accounts[0]});
		const boolZGiAjWl = await LUPAAoMPDP.transfer.call(addressWvsuUBz, uintpaWwyy1, {from: accounts[1]});
	});

	it('test for LUP', async () => {
		const LUPjVzIhUP = await LUP.new({from: accounts[4]});
		const uintTKbxlNe = BigInt("514")
		const addressCUlXuYY = accounts[3]
		const boolZ3FVWKN = false
		const addressrhsaAD0 = accounts[4]
		const uint8C22bAAY = await LUPjVzIhUP.decimals.call({from: accounts[1]});
		const boolpMIKFhV = await LUPjVzIhUP.transfer.call(addressCUlXuYY, uintTKbxlNe, {from: accounts[0]});
		const stringnbqNUsp = await LUPjVzIhUP.name.call({from: accounts[4]});
		const stringIWZZlB = await LUPjVzIhUP.symbol.call({from: accounts[1]});
		const boolZ3itQSo = await LUPjVzIhUP.freezeAccount.call(addressrhsaAD0, boolZ3FVWKN, {from: accounts[0]});

		assert.equal(uint8C22bAAY, BigInt("18"))
		await expect(LUPjVzIhUP.transfer.call(addressCUlXuYY, uintTKbxlNe, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPbLDi5Zy = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addresslNa5HdG = accounts[5]
		const uints8ZYw3l = BigInt("1589")
		const addresspAfa6hk = accounts[3]
		const addressethBP2x = await LUPbLDi5Zy.notFrozen.call(addresslNa5HdG, {from: accounts[3]});
		const boolsAGmU1y = await LUPbLDi5Zy.transfer.call(addresspAfa6hk, uints8ZYw3l, {from: accounts[3]});
	});

	it('test for LUP', async () => {
		const LUPexlJpJY = await LUP.new({from: accounts[2]});
		const uintR8mUX7j = BigInt("1015")
		const uintjZsgjkh = BigInt("25")
		const addresskpYdb9v = accounts[2]
		const uinthE75Ccj = BigInt("594")
		const addresswhXF2ML = accounts[2]
		const addressKbWOaSD = accounts[1]
		const stringiqu3ZXh = await LUPexlJpJY.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8LUGO8DE = await LUPexlJpJY.decimals.call({from: accounts[0]});
		const boolEace1d6 = await LUPexlJpJY.transferWithLock.call(addresskpYdb9v, uintjZsgjkh, uintR8mUX7j, {from: accounts[0]});
		const boolU2txnJU = await LUPexlJpJY.transfer.call(addresswhXF2ML, uinthE75Ccj, {from: accounts[0]});
		const addressrEUUavn = await LUPexlJpJY.notFrozen.call(addressKbWOaSD, {from: accounts[3]});

		assert.equal(stringiqu3ZXh, "LINKUP Token")
		assert.equal(uint8LUGO8DE, BigInt("18"))
		await expect(LUPexlJpJY.transferWithLock.call(addresskpYdb9v, uintjZsgjkh, uintR8mUX7j, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPt7Rd9nH = await LUP.new({from: accounts[3]});
		const addresseLsKqeh = accounts[5]
		const boolSGMnkk = true
		const addresswKGHHRi = accounts[4]
		const uintimNfhfK = BigInt("2030")
		const addressMimJI3 = accounts[4]
		const uintCjscDTe = BigInt("1598")
		const uintfvTA4oM = BigInt("538")
		const addressbof6C6 = accounts[1]
		const addresswxYobBL = accounts[1]
		const addressXVbIwv1 = await LUPt7Rd9nH.notFrozen.call(addresseLsKqeh, {from: accounts[0]});
		const stringq8fTQ2R = await LUPt7Rd9nH.symbol.call({from: accounts[3]});
		const boolxNjxlXR = await LUPt7Rd9nH.freezeAccount.call(addresswKGHHRi, boolSGMnkk, {from: accounts[4]});
		const boolTAWOZKr = await LUPt7Rd9nH.transfer.call(addressMimJI3, uintimNfhfK, {from: accounts[4]});
		const boolDcD50cR = await LUPt7Rd9nH.transferWithLock.call(addressbof6C6, uintfvTA4oM, uintCjscDTe, {from: accounts[1]});
		const uint256ZR9Iv8K = await LUPt7Rd9nH.balanceOf.call(addresswxYobBL, {from: accounts[1]});

		await expect(LUPt7Rd9nH.notFrozen.call(addresseLsKqeh, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPSl6hEXa = await LUP.new({from: accounts[2]});
		const addressVxNXcK = accounts[1]
		const boolon0qnra = false
		const addressT601B4d = accounts[1]
		const stringsarzoGH = await LUPSl6hEXa.name.call({from: accounts[2]});
		const stringVpVe68o = await LUPSl6hEXa.symbol.call({from: accounts[1]});
		const uint256w9evX9G = await LUPSl6hEXa.balanceOf.call(addressVxNXcK, {from: accounts[2]});
		const boolTKON6hJ = await LUPSl6hEXa.freezeAccount.call(addressT601B4d, boolon0qnra, {from: accounts[3]});

		assert.equal(stringVpVe68o, "LUP")
		assert.equal(stringsarzoGH, "LINKUP Token")
		assert.equal(uint256w9evX9G, BigInt("0"))
		await expect(LUPSl6hEXa.freezeAccount.call(addressT601B4d, boolon0qnra, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPSl6hEXa = await LUP.new({from: accounts[2]});
		const boolkGgOHL0 = true
		const addressDKqshVV = accounts[5]
		const stringVpVe68o = await LUPSl6hEXa.symbol.call({from: accounts[1]});
		const boolHYlHAQV = await LUPSl6hEXa.freezeAccount.call(addressDKqshVV, boolkGgOHL0, {from: accounts[2]});

		assert.equal(boolHYlHAQV, true)
		assert.equal(stringVpVe68o, "LUP")
	});

	it('test for LUP', async () => {
		const LUPSl6hEXa = await LUP.new({from: accounts[2]});
		const addressi6weC4 = accounts[1]
		const addressmAaNboH = accounts[1]
		const boolon0qnra = false
		const addresspEP3674 = accounts[1]
		const stringsarzoGH = await LUPSl6hEXa.name.call({from: accounts[2]});
		const addressMnhcz6m = await LUPSl6hEXa.upgradeTo.call(addressi6weC4, {from: accounts[2]});
		const stringVpVe68o = await LUPSl6hEXa.symbol.call({from: accounts[1]});
		const uint256w9evX9G = await LUPSl6hEXa.balanceOf.call(addressmAaNboH, {from: accounts[2]});
		const boolTKON6hJ = await LUPSl6hEXa.freezeAccount.call(addresspEP3674, boolon0qnra, {from: accounts[3]});

		assert.equal(stringVpVe68o, "LUP")
		assert.equal(stringsarzoGH, "LINKUP Token")
		assert.equal(uint256w9evX9G, BigInt("0"))
		await expect(LUPSl6hEXa.freezeAccount.call(addresspEP3674, boolon0qnra, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPSl6hEXa = await LUP.new({from: accounts[2]});
		const uintvUB669i = BigInt("1102")
		const addressY9mZL5b = accounts[2]
		const booll13D9FX = await LUPSl6hEXa.unlock.call(addressY9mZL5b, uintvUB669i, {from: accounts[2]});
		const stringC5JVGgf = await LUPSl6hEXa.name.call({from: accounts[0]});
		const stringVpVe68o = await LUPSl6hEXa.symbol.call({from: accounts[1]});

		await expect(LUPSl6hEXa.unlock.call(addressY9mZL5b, uintvUB669i, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPexlJpJY = await LUP.new({from: accounts[2]});
		const uintZeUe12d = BigInt("678")
		const uintxDeW50c = BigInt("248")
		const addressGYklzQ4 = accounts[1]
		const addressSrx3fV6 = accounts[1]
		const addressA0ishn8 = accounts[4]
		const uintAcXIVF = BigInt("571")
		const addresseHqHkal = accounts[3]
		const uinteF8XITE = BigInt("1588")
		const addresspFQIC6w = accounts[4]
		const addressNUvIS5 = accounts[2]
		const stringiqu3ZXh = await LUPexlJpJY.name.call({from: "0x0000000000000000000000000000000000000001"});
		const boolk0WPWIO = await LUPexlJpJY.transferWithLock.call(addressGYklzQ4, uintxDeW50c, uintZeUe12d, {from: accounts[2]});
		const uint8jb0vdm = await LUPexlJpJY.decimals.call({from: accounts[0]});
		const uint8UH076oW = await LUPexlJpJY.decimals.call({from: accounts[4]});
		const addressFZ2mJJ = await LUPexlJpJY.upgradeTo.call(addressSrx3fV6, {from: accounts[1]});
		const uint256nHarqYX = await LUPexlJpJY.balanceOf.call(addressA0ishn8, {from: "0x0000000000000000000000000000000000000001"});
		const boolU2txnJU = await LUPexlJpJY.transfer.call(addresseHqHkal, uintAcXIVF, {from: accounts[0]});
		const boolpX3xPDh = await LUPexlJpJY.unlock.call(addresspFQIC6w, uinteF8XITE, {from: accounts[3]});
		const addressrEUUavn = await LUPexlJpJY.notFrozen.call(addressNUvIS5, {from: accounts[3]});

		assert.equal(boolk0WPWIO, true)
		assert.equal(stringiqu3ZXh, "LINKUP Token")
		assert.equal(uint8UH076oW, BigInt("18"))
		assert.equal(uint8jb0vdm, BigInt("18"))
		await expect(LUPexlJpJY.upgradeTo.call(addressSrx3fV6, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPSl6hEXa = await LUP.new({from: accounts[2]});
		const uintilX0cB2 = BigInt("1440")
		const uintXsrg5eP = BigInt("1674")
		const addressC5q1q4Q = accounts[2]
		const addresswbZNqV4 = accounts[3]
		const boolF5IHqJJ = await LUPSl6hEXa.lock.call(addressC5q1q4Q, uintXsrg5eP, uintilX0cB2, {from: accounts[2]});
		const uint256v9g9xtN = await LUPSl6hEXa.balanceOf.call(addresswbZNqV4, {from: accounts[5]});

		assert.equal(boolF5IHqJJ, true)
		assert.equal(uint256v9g9xtN, BigInt("0"))
	});

	it('test for LUP', async () => {
		const LUPSl6hEXa = await LUP.new({from: accounts[2]});
		const uintfb2rIwD = BigInt("270")
		const uintdU7OAe4 = BigInt("1494")
		const addressAKNnc6v = accounts[0]
		const addressQyPYt3y = accounts[1]
		const uinto9wGUGV = BigInt("1107")
		const addressPKeOMXP = accounts[1]
		const stringsarzoGH = await LUPSl6hEXa.name.call({from: accounts[2]});
		const boollpFzqym = await LUPSl6hEXa.lock.call(addressAKNnc6v, uintdU7OAe4, uintfb2rIwD, {from: accounts[2]});
		const stringVpVe68o = await LUPSl6hEXa.symbol.call({from: accounts[1]});
		const uint256w9evX9G = await LUPSl6hEXa.balanceOf.call(addressQyPYt3y, {from: accounts[2]});
		const boolKgwARH = await LUPSl6hEXa.transfer.call(addressPKeOMXP, uinto9wGUGV, {from: accounts[4]});
		const stringOxzMz7n = await LUPSl6hEXa.symbol.call({from: accounts[3]});
		const stringy78XKV = await LUPSl6hEXa.name.call({from: accounts[0]});

		assert.equal(stringsarzoGH, "LINKUP Token")
		await expect(LUPSl6hEXa.lock.call(addressAKNnc6v, uintdU7OAe4, uintfb2rIwD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})