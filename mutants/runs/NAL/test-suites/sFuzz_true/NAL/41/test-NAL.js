const NAL = artifacts.require("NAL");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('NAL', (accounts) => {
	it('test for NAL', async () => {
		const NALE1TyV9B = await NAL.new({from: accounts[0]});
		const addressFsWr9SC = accounts[4]
		const addressQ2if4K2 = accounts[0]
		const uintEa1KdBC = BigInt("1725")
		const addressfMBGPwn = accounts[3]
		const addressLO01zp = accounts[3]
		await NALE1TyV9B.renounceAdmin.call({from: accounts[2]});
		const addresscF757us = await NALE1TyV9B.addAdmin.call(addressFsWr9SC, {from: accounts[3]});
		await NALE1TyV9B.unpause.call({from: accounts[5]});
		const uint256BHgwHr3 = await NALE1TyV9B.balanceOf.call(addressQ2if4K2, {from: accounts[1]});
		const uint8esMc78h = await NALE1TyV9B.decimals.call({from: accounts[0]});
		const boolBIqjODO = await NALE1TyV9B.transferFrom.call(addressLO01zp, addressfMBGPwn, uintEa1KdBC, {from: accounts[0]});

		await expect(NALE1TyV9B.renounceAdmin.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const stringSAkCEzq = "CxJRIYktDE4"
		const stringQl6jTPY = "x7ApJozCLqeLlfA2tUdizUGEjIJu5TXe3B7eyuhAtEuIXogZfAoUguD5DxzStg"
		const uintcHdiYj = BigInt("87")
		const NALhBt6Azp = await NAL.new(stringSAkCEzq, stringQl6jTPY, uintcHdiYj, {from: accounts[0]});
		const uintCwV7AFi = BigInt("1537")
		const addressw8ImmPm = accounts[2]
		const addressOQiMITn = accounts[4]
		const boolkAZa3Ny = await NALhBt6Azp.approve.call(addressw8ImmPm, uintCwV7AFi, {from: accounts[1]});
		const addressfBI0nNQ = await NALhBt6Azp.transferOwnership.call(addressOQiMITn, {from: accounts[2]});
		await NALhBt6Azp.renounceAdmin.call({from: accounts[3]});
		await NALhBt6Azp.unpause.call({from: accounts[0]});
	});

	it('test for NAL', async () => {
		const NALvI08F9N = await NAL.new({from: accounts[0]});
		const addressyZiMblt = accounts[2]
		const addressWSOVOEx = accounts[2]
		const addressyFe1Dqp = accounts[0]
		const uintHYDHqTL = BigInt("20")
		const boolXMdKczC = await NALvI08F9N.freezeAccount.call(addressyZiMblt, {from: accounts[0]});
		const boolZzUjEt1 = await NALvI08F9N.isOwner.call(addressWSOVOEx, {from: accounts[0]});
		await NALvI08F9N.pause.call({from: accounts[2]});
		const addressfQ2cvG = await NALvI08F9N.addAdmin.call(addressyFe1Dqp, {from: accounts[1]});
		const uint256xjJ1IDW = await NALvI08F9N.burn.call(uintHYDHqTL, {from: accounts[5]});

		assert.equal(boolXMdKczC, true)
		assert.equal(boolZzUjEt1, false)
		await expect(NALvI08F9N.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALq1BKU1p = await NAL.new({from: "0x0000000000000000000000000000000000000001"});
		const addresstoh6XPO = "0x0000000000000000000000000000000000000001"
		const uintAcxJ763 = BigInt("2008")
		const addressfSl1hTg = accounts[2]
		const addressiJQerRq = accounts[2]
		const addressDhtXZ6b = await NALq1BKU1p.removeAdmin.call(addresstoh6XPO, {from: accounts[0]});
		const boolI1Y13Fe = await NALq1BKU1p.increaseAllowance.call(addressfSl1hTg, uintAcxJ763, {from: "0x0000000000000000000000000000000000000001"});
		const boolQTYsY0G = await NALq1BKU1p.isAdmin.call(addressiJQerRq, {from: accounts[2]});
	});

	it('test for NAL', async () => {
		const NALnr1Rjgi = await NAL.new({from: accounts[2]});
		const addresskRo3MxH = accounts[4]
		await NALnr1Rjgi.whenPaused.call({from: accounts[4]});
		const boolqh9xyOA = await NALnr1Rjgi.isOwner.call(addresskRo3MxH, {from: accounts[3]});

		await expect(NALnr1Rjgi.whenPaused.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const addressulrL6E5 = accounts[3]
		const stringR5wKf55 = await NALCZjkQIe.symbol.call({from: accounts[1]});
		const uint256OFKBSnM = await NALCZjkQIe.balanceOf.call(addressulrL6E5, {from: accounts[5]});
		await NALCZjkQIe.onlyAdmin.call({from: accounts[5]});

		assert.equal(stringR5wKf55, "NAL")
		assert.equal(uint256OFKBSnM, BigInt("0"))
		await expect(NALCZjkQIe.onlyAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const uintXy0mZ9z = BigInt("1232")
		const addressp9XEIPK = accounts[5]
		const addressF9LuLob = accounts[5]
		const addressTUqpsLb = accounts[3]
		const uintqv9u0d8 = BigInt("1535")
		const addressIv79G4h = accounts[4]
		const addressBY7AvpI = "0x0000000000000000000000000000000000000001"
		const stringR5wKf55 = await NALCZjkQIe.symbol.call({from: accounts[1]});
		const booldh6pgfb = await NALCZjkQIe.transferFrom.call(addressF9LuLob, addressp9XEIPK, uintXy0mZ9z, {from: accounts[3]});
		const uint256OFKBSnM = await NALCZjkQIe.balanceOf.call(addressTUqpsLb, {from: accounts[5]});
		const boolGmYOM4 = await NALCZjkQIe.transferFrom.call(addressBY7AvpI, addressIv79G4h, uintqv9u0d8, {from: accounts[2]});
		await NALCZjkQIe.onlyAdmin.call({from: accounts[5]});

		assert.equal(stringR5wKf55, "NAL")
		await expect(NALCZjkQIe.transferFrom.call(addressF9LuLob, addressp9XEIPK, uintXy0mZ9z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const addresshBtYMAu = accounts[4]
		const stringR5wKf55 = await NALCZjkQIe.symbol.call({from: accounts[1]});
		const stringopdG6Dc = await NALCZjkQIe.name.call({from: accounts[0]});
		const uint256OFKBSnM = await NALCZjkQIe.balanceOf.call(addresshBtYMAu, {from: accounts[5]});
		await NALCZjkQIe.onlyAdmin.call({from: accounts[5]});

		assert.equal(stringR5wKf55, "NAL")
		assert.equal(stringopdG6Dc, "Personal Token")
		assert.equal(uint256OFKBSnM, BigInt("2000000000000000000000000000"))
		await expect(NALCZjkQIe.onlyAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const uintRjjBTms = BigInt("1835")
		const addressXj7KdAo = accounts[0]
		const stringR5wKf55 = await NALCZjkQIe.symbol.call({from: accounts[1]});
		const addressDJNu2UT = await NALCZjkQIe.burnFrom.call(addressXj7KdAo, uintRjjBTms, {from: accounts[2]});
		await NALCZjkQIe.onlyAdmin.call({from: accounts[5]});

		assert.equal(stringR5wKf55, "NAL")
		await expect(NALCZjkQIe.burnFrom.call(addressXj7KdAo, uintRjjBTms, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const uintp5NXqVv = BigInt("1835")
		const addressoPXNcT1 = accounts[0]
		const uintyE4PYqg = BigInt("1549")
		const address7mcRiu = "0x0000000000000000000000000000000000000001"
		const boolbban9w4 = await NALCZjkQIe.paused.call({from: accounts[5]});
		const stringR5wKf55 = await NALCZjkQIe.symbol.call({from: accounts[1]});
		const addressDJNu2UT = await NALCZjkQIe.burnFrom.call(addressoPXNcT1, uintp5NXqVv, {from: accounts[2]});
		const boolqMYukIH = await NALCZjkQIe.approve.call(address7mcRiu, uintyE4PYqg, {from: accounts[4]});
		await NALCZjkQIe.onlyAdmin.call({from: accounts[5]});

		assert.equal(boolbban9w4, false)
		assert.equal(stringR5wKf55, "NAL")
		await expect(NALCZjkQIe.burnFrom.call(addressoPXNcT1, uintp5NXqVv, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const uintScfu0zu = BigInt("900")
		const addresss2NGHRm = accounts[2]
		const addressCKmXVTq = accounts[3]
		const boolUjZLgaL = await NALCZjkQIe.increaseAllowance.call(addresss2NGHRm, uintScfu0zu, {from: "0x0000000000000000000000000000000000000001"});
		const stringR5wKf55 = await NALCZjkQIe.symbol.call({from: accounts[1]});
		const uint256OFKBSnM = await NALCZjkQIe.balanceOf.call(addressCKmXVTq, {from: accounts[5]});
		await NALCZjkQIe.onlyAdmin.call({from: accounts[5]});

		assert.equal(boolUjZLgaL, true)
		assert.equal(stringR5wKf55, "NAL")
		assert.equal(uint256OFKBSnM, BigInt("0"))
		await expect(NALCZjkQIe.onlyAdmin.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const addresskgngVMs = accounts[4]
		const uintKD4OCo0 = BigInt("295")
		const addressjqCff1G = accounts[4]
		const uint256OFKBSnM = await NALCZjkQIe.balanceOf.call(addresskgngVMs, {from: accounts[5]});
		const boolh5sF1VO = await NALCZjkQIe.approve.call(addressjqCff1G, uintKD4OCo0, {from: accounts[2]});

		assert.equal(boolh5sF1VO, true)
		assert.equal(uint256OFKBSnM, BigInt("2000000000000000000000000000"))
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const uintZnO0Ldv = BigInt("1750")
		const addressGj1p9r = accounts[4]
		const addressmCY7L70 = accounts[4]
		const addressbG8oTz2 = accounts[4]
		const boolo7NmYTp = await NALCZjkQIe.transfer.call(addressGj1p9r, uintZnO0Ldv, {from: accounts[3]});
		const uint256OFKBSnM = await NALCZjkQIe.balanceOf.call(addressmCY7L70, {from: accounts[5]});
		const addresswXIi5ck = await NALCZjkQIe.notFrozen.call(addressbG8oTz2, {from: accounts[4]});

		await expect(NALCZjkQIe.transfer.call(addressGj1p9r, uintZnO0Ldv, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const uintjEYiiYR = BigInt("1823")
		const addressrBY1Dyt = accounts[0]
		const uint256H56NmYM = await NALCZjkQIe.totalSupply.call({from: accounts[2]});
		const stringR5wKf55 = await NALCZjkQIe.symbol.call({from: accounts[1]});
		const addressDJNu2UT = await NALCZjkQIe.burnFrom.call(addressrBY1Dyt, uintjEYiiYR, {from: accounts[2]});

		assert.equal(stringR5wKf55, "NAL")
		assert.equal(uint256H56NmYM, BigInt("2000000000000000000000000000"))
		await expect(NALCZjkQIe.burnFrom.call(addressrBY1Dyt, uintjEYiiYR, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const addressTovvMOC = accounts[4]
		const uintyzPbgX7 = BigInt("1024")
		const addressrUFggdX = accounts[1]
		const addressXPGZmrU = accounts[1]
		const uintS05YPS2 = BigInt("1867")
		const uint256OFKBSnM = await NALCZjkQIe.balanceOf.call(addressTovvMOC, {from: accounts[5]});
		const boolmrSWfEI = await NALCZjkQIe.transfer.call(addressrUFggdX, uintyzPbgX7, {from: accounts[4]});
		const booldepg8v1 = await NALCZjkQIe.unfreezeAccount.call(addressXPGZmrU, {from: accounts[5]});
		const uint256k0gAmhA = await NALCZjkQIe.burn.call(uintS05YPS2, {from: accounts[1]});

		assert.equal(boolmrSWfEI, true)
		assert.equal(uint256OFKBSnM, BigInt("2000000000000000000000000000"))
		await expect(NALCZjkQIe.unfreezeAccount.call(addressXPGZmrU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const uintYKey36q = BigInt("151")
		const addresstaUD709 = accounts[1]
		const addressoOZ9lG4 = accounts[3]
		const addressVSszMDh = accounts[3]
		const boolbCvLlUC = await NALCZjkQIe.decreaseAllowance.call(addresstaUD709, uintYKey36q, {from: "0x0000000000000000000000000000000000000001"});
		const uint256OFKBSnM = await NALCZjkQIe.balanceOf.call(addressoOZ9lG4, {from: accounts[5]});
		const boolxmu1jAZ = await NALCZjkQIe.unfreezeAccount.call(addressVSszMDh, {from: accounts[0]});

		await expect(NALCZjkQIe.decreaseAllowance.call(addresstaUD709, uintYKey36q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const addressNDwFKTd = accounts[0]
		const uintEyixO1h = BigInt("976")
		const addresse1PZTXV = accounts[4]
		const addressE9VdVVj = accounts[2]
		const uintLRKaxWL = BigInt("772")
		const addressYlEr9us = accounts[1]
		const addressnANagXs = accounts[1]
		const stringR5wKf55 = await NALCZjkQIe.symbol.call({from: accounts[1]});
		const addressK7cNO7j = await NALCZjkQIe.transferOwnership.call(addressNDwFKTd, {from: accounts[4]});
		const boolLfOgH9b = await NALCZjkQIe.transferFrom.call(addressE9VdVVj, addresse1PZTXV, uintEyixO1h, {from: accounts[3]});
		const boolCnpD7ac = await NALCZjkQIe.transferFrom.call(addressnANagXs, addressYlEr9us, uintLRKaxWL, {from: accounts[4]});

		assert.equal(stringR5wKf55, "NAL")
		await expect(NALCZjkQIe.transferFrom.call(addressE9VdVVj, addresse1PZTXV, uintEyixO1h, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const uintZqT0q8 = BigInt("768")
		const addressYBthsj = accounts[1]
		const addresskN0uvXQ = accounts[1]
		const stringR5wKf55 = await NALCZjkQIe.symbol.call({from: accounts[1]});
		const uint8FjltPKp = await NALCZjkQIe.decimals.call({from: accounts[2]});
		const boolCnpD7ac = await NALCZjkQIe.transferFrom.call(addresskN0uvXQ, addressYBthsj, uintZqT0q8, {from: accounts[4]});
		await NALCZjkQIe.onlyAdmin.call({from: accounts[3]});

		assert.equal(stringR5wKf55, "NAL")
		assert.equal(uint8FjltPKp, BigInt("18"))
		await expect(NALCZjkQIe.transferFrom.call(addresskN0uvXQ, addressYBthsj, uintZqT0q8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const uintym9SLX = BigInt("527")
		const uintAgeHYVC = BigInt("791")
		const addressbNYuqr = accounts[0]
		const addressy4AXbe = accounts[3]
		const boolqq62dJp = await NALCZjkQIe.lock.call(addressbNYuqr, uintAgeHYVC, uintym9SLX, {from: accounts[4]});
		const uint256OFKBSnM = await NALCZjkQIe.balanceOf.call(addressy4AXbe, {from: accounts[5]});

		await expect(NALCZjkQIe.lock.call(addressbNYuqr, uintAgeHYVC, uintym9SLX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const addresslfTQwu3 = accounts[3]
		const addresskZ2ahd3 = accounts[3]
		const uinttiEFZ6L = BigInt("746")
		const addressfwL2fTU = accounts[3]
		const addressbRjur8q = accounts[1]
		const uint256KKBmEDM = await NALCZjkQIe.allowance.call(addresskZ2ahd3, addresslfTQwu3, {from: accounts[0]});
		const uint256ZK8SDpT = await NALCZjkQIe.totalSupply.call({from: accounts[0]});
		const boolCnpD7ac = await NALCZjkQIe.transferFrom.call(addressbRjur8q, addressfwL2fTU, uinttiEFZ6L, {from: accounts[4]});

		assert.equal(uint256KKBmEDM, BigInt("0"))
		assert.equal(uint256ZK8SDpT, BigInt("2000000000000000000000000000"))
		await expect(NALCZjkQIe.transferFrom.call(addressbRjur8q, addressfwL2fTU, uinttiEFZ6L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALky17vMk = await NAL.new({from: accounts[2]});
		const addressDnEygg = accounts[0]
		const uintkn4UXVt = BigInt("368")
		const addressPQKGlMl = accounts[1]
		const addresspyhfRqi = await NALky17vMk.removeAdmin.call(addressDnEygg, {from: accounts[2]});
		const boolLj3kHf6 = await NALky17vMk.decreaseAllowance.call(addressPQKGlMl, uintkn4UXVt, {from: accounts[3]});
		await NALky17vMk.whenNotPaused.call({from: accounts[2]});

		await expect(NALky17vMk.removeAdmin.call(addressDnEygg, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALMVgdobi = await NAL.new({from: accounts[1]});
		const uintIlV9pY5 = BigInt("1436")
		const uintSBUr8i = BigInt("204")
		const addresstMTn1xa = accounts[5]
		const uint256ClopeoS = await NALMVgdobi.burn.call(uintIlV9pY5, {from: accounts[0]});
		await NALMVgdobi.pause.call({from: accounts[0]});
		const addressnqVoD3b = await NALMVgdobi.burnFrom.call(addresstMTn1xa, uintSBUr8i, {from: accounts[1]});
		const stringJHTK0p = await NALMVgdobi.symbol.call({from: accounts[0]});
		await NALMVgdobi.unpause.call({from: accounts[0]});

		await expect(NALMVgdobi.burn.call(uintIlV9pY5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALalbXuKq = await NAL.new({from: accounts[4]});
		const uintaSgvXx = BigInt("493")
		const uintBxf8GX = BigInt("1368")
		const addressEO4Bogs = accounts[2]
		const uint4il63L = BigInt("153")
		const addressxetCg4 = accounts[2]
		const boolOXBRu7g = await NALalbXuKq.transferWithLock.call(addressEO4Bogs, uintBxf8GX, uintaSgvXx, {from: accounts[4]});
		await NALalbXuKq.unpause.call({from: accounts[5]});
		const boolaxTcdT = await NALalbXuKq.approve.call(addressxetCg4, uint4il63L, {from: accounts[3]});

		assert.equal(boolOXBRu7g, true)
		await expect(NALalbXuKq.unpause.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const addressRZBS4Ex = accounts[4]
		const uintQ5ddXS3 = BigInt("1435")
		const addressaBlR3Eb = accounts[3]
		const uint256OFKBSnM = await NALCZjkQIe.balanceOf.call(addressRZBS4Ex, {from: accounts[5]});
		const boolF5uMqa0 = await NALCZjkQIe.unlock.call(addressaBlR3Eb, uintQ5ddXS3, {from: accounts[4]});
		await NALCZjkQIe.whenPaused.call({from: accounts[3]});

		assert.equal(uint256OFKBSnM, BigInt("2000000000000000000000000000"))
		await expect(NALCZjkQIe.unlock.call(addressaBlR3Eb, uintQ5ddXS3, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const addressvmb1mfY = accounts[3]
		await NALCZjkQIe.renounceAdmin.call({from: accounts[4]});
		await NALCZjkQIe.renounceAdmin.call({from: accounts[0]});
		const uint256OFKBSnM = await NALCZjkQIe.balanceOf.call(addressvmb1mfY, {from: accounts[5]});

		await expect(NALCZjkQIe.renounceAdmin.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const addresspw8nUXq = "0x0000000000000000000000000000000000000001"
		const uintWdPhPM = BigInt("1036")
		const addressQ8LwR0j = accounts[0]
		const addressbpnC6Gq = accounts[1]
		const uintaqTQHgr = BigInt("746")
		const addressJZZUCYE = accounts[2]
		const address7rwdLH = accounts[1]
		const addressdAn4Seb = await NALCZjkQIe.upgradeTo.call(addresspw8nUXq, {from: accounts[4]});
		const boolTEE89zM = await NALCZjkQIe.transferFrom.call(addressbpnC6Gq, addressQ8LwR0j, uintWdPhPM, {from: accounts[0]});
		const boolCnpD7ac = await NALCZjkQIe.transferFrom.call(address7rwdLH, addressJZZUCYE, uintaqTQHgr, {from: accounts[4]});

		await expect(NALCZjkQIe.transferFrom.call(addressbpnC6Gq, addressQ8LwR0j, uintWdPhPM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for NAL', async () => {
		const NALCZjkQIe = await NAL.new({from: accounts[4]});
		const addresswPPrK1O = accounts[4]
		const addresspICbgIr = accounts[4]
		const uint256OFKBSnM = await NALCZjkQIe.balanceOf.call(addresswPPrK1O, {from: accounts[5]});
		const boolP1DE69s = await NALCZjkQIe.isOwner.call(addresspICbgIr, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolP1DE69s, true)
		assert.equal(uint256OFKBSnM, BigInt("2000000000000000000000000000"))
	});
})