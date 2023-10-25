const QuickToken = artifacts.require("QuickToken");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('QuickToken', (accounts) => {
	it('test for QuickToken', async () => {
		const addressOa6pgV3 = accounts[1]
		const addressIloMm5r = accounts[5]
		const QuickTokenF5kgo44 = await QuickToken.new(addressOa6pgV3, addressIloMm5r, {from: accounts[3]});
		const addressg9FR1ZZ = accounts[4]
		const addressKfWjsG4 = accounts[3]
		const uintv7mTDOd = BigInt("1440")
		const addressyS0Ei4J = accounts[3]
		const addressS1SSIsh = accounts[4]
		const uintT32mpS = await QuickTokenF5kgo44.allowance.call(addressKfWjsG4, addressg9FR1ZZ, {from: accounts[3]});
		const addressIGzSHOK = await QuickTokenF5kgo44.mint.call(addressyS0Ei4J, uintv7mTDOd, {from: accounts[3]});
		const uintqzUBHOI = await QuickTokenF5kgo44.balanceOf.call(addressS1SSIsh, {from: accounts[1]});

		assert.equal(uintT32mpS, BigInt("0"))
		await expect(QuickTokenF5kgo44.mint.call(addressyS0Ei4J, uintv7mTDOd, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressKInzgAa = accounts[0]
		const addressH3sIQOX = accounts[1]
		const QuickTokeng6qRud9 = await QuickToken.new(addressKInzgAa, addressH3sIQOX, {from: accounts[5]});
		const addresshbcc83n = accounts[5]
		const uintYWe2Nea = BigInt("1686")
		const addressmaddSa = accounts[4]
		const uintcSW2dQt = BigInt("1120")
		const addressTK8wXiu = accounts[3]
		const uint0e0SHH = BigInt("1489")
		const addressuLeYsLN = accounts[2]
		const addressTti5nDp = accounts[1]
		const uintMynJlD7 = await QuickTokeng6qRud9.balanceOf.call(addresshbcc83n, {from: "0x0000000000000000000000000000000000000001"});
		const boolEEuTX5 = await QuickTokeng6qRud9.transfer.call(addressmaddSa, uintYWe2Nea, {from: accounts[1]});
		const boolaLk2Xj0 = await QuickTokeng6qRud9.transfer.call(addressTK8wXiu, uintcSW2dQt, {from: accounts[2]});
		const boolfUA03U = await QuickTokeng6qRud9.transferFrom.call(addressTti5nDp, addressuLeYsLN, uint0e0SHH, {from: accounts[3]});

		assert.equal(uintMynJlD7, BigInt("0"))
		await expect(QuickTokeng6qRud9.transfer.call(addressmaddSa, uintYWe2Nea, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressgvRQnvV = "0x0000000000000000000000000000000000000001"
		const addressCPHHtrO = accounts[3]
		const QuickTokenBR3cf3m = await QuickToken.new(addressgvRQnvV, addressCPHHtrO, {from: accounts[0]});
		const addressWUvqZT = accounts[0]
		const addressNHUSpW = accounts[1]
		const uintRP2nCnw = BigInt("549")
		const addressQI7SY7E = accounts[3]
		const addressXezdI8h = await QuickTokenBR3cf3m.setMinter.call(addressWUvqZT, {from: accounts[1]});
		const uintHaDtiTR = await QuickTokenBR3cf3m.balanceOf.call(addressNHUSpW, {from: accounts[0]});
		const boolnH5nNlG = await QuickTokenBR3cf3m.approve.call(addressQI7SY7E, uintRP2nCnw, {from: accounts[2]});

		await expect(QuickTokenBR3cf3m.setMinter.call(addressWUvqZT, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressSgarIun = accounts[4]
		const addressmH2U3Cc = accounts[0]
		const QuickTokenQeEBow2 = await QuickToken.new(addressSgarIun, addressmH2U3Cc, {from: "0x0000000000000000000000000000000000000001"});
		const addressjhAfvF8 = accounts[4]
		const uintaURMYh8 = BigInt("668")
		const addressI7mZAVB = accounts[3]
		const addressy0q39BI = accounts[2]
		const addressJWAgwp = accounts[4]
		const addressySbkq6x = accounts[1]
		const addressyrjeXj8 = accounts[3]
		const uintdcgBbb = await QuickTokenQeEBow2.balanceOf.call(addressjhAfvF8, {from: accounts[2]});
		const addressXwXDd1h = await QuickTokenQeEBow2.mint.call(addressI7mZAVB, uintaURMYh8, {from: accounts[2]});
		const uintlv26vko = await QuickTokenQeEBow2.allowance.call(addressJWAgwp, addressy0q39BI, {from: accounts[0]});
		const uintkuax880 = await QuickTokenQeEBow2.allowance.call(addressyrjeXj8, addressySbkq6x, {from: accounts[2]});
	});

	it('test for QuickToken', async () => {
		const addressqeRuyD = accounts[4]
		const addressVOf6VHz = accounts[2]
		const QuickTokennuFo9iR = await QuickToken.new(addressqeRuyD, addressVOf6VHz, {from: accounts[3]});
		const uintpfWeghJ = BigInt("318")
		const addressPLZYpq = accounts[3]
		const uintlcEZFU5 = BigInt("1466")
		const addressM1bSYJ = accounts[3]
		const uintlSEOGWS = BigInt("1975")
		const addressw0New3C = accounts[3]
		const uintBjAT6od = BigInt("40")
		const addressUJd3U3Q = accounts[4]
		const addressZhxFX83 = accounts[5]
		const boolIYWhJVn = await QuickTokennuFo9iR.approve.call(addressPLZYpq, uintpfWeghJ, {from: accounts[2]});
		const boolx6jFUSE = await QuickTokennuFo9iR.transfer.call(addressM1bSYJ, uintlcEZFU5, {from: accounts[2]});
		const boolTYXGdy4 = await QuickTokennuFo9iR.approve.call(addressw0New3C, uintlSEOGWS, {from: accounts[4]});
		const addressKJyCqQ = await QuickTokennuFo9iR.mint.call(addressUJd3U3Q, uintBjAT6od, {from: accounts[0]});
		const uintw9syKw = await QuickTokennuFo9iR.balanceOf.call(addressZhxFX83, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolIYWhJVn, true)
		await expect(QuickTokennuFo9iR.transfer.call(addressM1bSYJ, uintlcEZFU5, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressNTfIqSc = "0x0000000000000000000000000000000000000001"
		const addressWTRuAah = accounts[3]
		const QuickTokenBR3cf3m = await QuickToken.new(addressNTfIqSc, addressWTRuAah, {from: accounts[0]});
		const addressxXV92Rw = accounts[2]
		const uintdsiH1oz = BigInt("1994")
		const addressAgumV0l = accounts[1]
		const addressJhm9PMN = accounts[1]
		const addressIl01Edm = accounts[0]
		const uints4vPhVc = await QuickTokenBR3cf3m.balanceOf.call(addressxXV92Rw, {from: accounts[1]});
		const boolwOEt9mT = await QuickTokenBR3cf3m.transferFrom.call(addressJhm9PMN, addressAgumV0l, uintdsiH1oz, {from: accounts[1]});
		const addressXezdI8h = await QuickTokenBR3cf3m.setMinter.call(addressIl01Edm, {from: accounts[1]});

		assert.equal(uints4vPhVc, BigInt("0"))
		await expect(QuickTokenBR3cf3m.transferFrom.call(addressJhm9PMN, addressAgumV0l, uintdsiH1oz, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressw8lBPwH = "0x0000000000000000000000000000000000000001"
		const addressYeclV4s = accounts[3]
		const QuickTokenBR3cf3m = await QuickToken.new(addressw8lBPwH, addressYeclV4s, {from: accounts[0]});
		const uintusTlvyI = BigInt("1408")
		const addressx0TS2fT = accounts[5]
		const addressrWz5nsQ = accounts[0]
		const addressSnFDJvb = accounts[1]
		const boolFxFHcA = await QuickTokenBR3cf3m.transferFrom.call(addressrWz5nsQ, addressx0TS2fT, uintusTlvyI, {from: "0x0000000000000000000000000000000000000001"});
		const addressXezdI8h = await QuickTokenBR3cf3m.setMinter.call(addressSnFDJvb, {from: accounts[1]});

		await expect(QuickTokenBR3cf3m.transferFrom.call(addressrWz5nsQ, addressx0TS2fT, uintusTlvyI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressltJ0xnp = "0x0000000000000000000000000000000000000001"
		const addressNtBicFq = accounts[3]
		const QuickTokenBR3cf3m = await QuickToken.new(addressltJ0xnp, addressNtBicFq, {from: accounts[0]});
		const uintGcVBW4u = BigInt("873")
		const addressoPTAAUi = accounts[1]
		const uintHfxyNR = BigInt("297")
		const addressC7ppUjv = accounts[1]
		const addressQdT9Fzp = accounts[0]
		const uintXB5cwcq = BigInt("900")
		const addressf1EwrK = accounts[2]
		const uintuDW72Hp = BigInt("1408")
		const addressdLZtxu = accounts[3]
		const addressHb8Db8M = accounts[0]
		const boolzKJPLh8 = await QuickTokenBR3cf3m.approve.call(addressoPTAAUi, uintGcVBW4u, {from: accounts[0]});
		const booluiQ73SR = await QuickTokenBR3cf3m.transfer.call(addressC7ppUjv, uintHfxyNR, {from: "0x0000000000000000000000000000000000000001"});
		const uintvFe1lav = await QuickTokenBR3cf3m.balanceOf.call(addressQdT9Fzp, {from: accounts[4]});
		const addresshSXnj4a = await QuickTokenBR3cf3m.mint.call(addressf1EwrK, uintXB5cwcq, {from: accounts[3]});
		const boolFxFHcA = await QuickTokenBR3cf3m.transferFrom.call(addressHb8Db8M, addressdLZtxu, uintuDW72Hp, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(booluiQ73SR, true)
		assert.equal(boolzKJPLh8, true)
		assert.equal(uintvFe1lav, BigInt("0"))
		await expect(QuickTokenBR3cf3m.transferFrom.call(addressHb8Db8M, addressdLZtxu, uintuDW72Hp, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for QuickToken', async () => {
		const addressxqSgcQt = "0x0000000000000000000000000000000000000001"
		const addressJsvOJ3B = accounts[3]
		const QuickTokenBR3cf3m = await QuickToken.new(addressxqSgcQt, addressJsvOJ3B, {from: accounts[0]});
		const addresswt6wDxp = accounts[0]
		const address20c5dZ = accounts[5]
		const addressGEAr9Kv = accounts[4]
		const uintHT0U3iG = BigInt("1646")
		const addresstwX7i9 = "0x0000000000000000000000000000000000000000"
		const uintrIW2SF7 = await QuickTokenBR3cf3m.allowance.call(address20c5dZ, addresswt6wDxp, {from: accounts[2]});
		const uinttOqwJXX = await QuickTokenBR3cf3m.balanceOf.call(addressGEAr9Kv, {from: accounts[4]});
		const addressPiode7M = await QuickTokenBR3cf3m.mint.call(addresstwX7i9, uintHT0U3iG, {from: accounts[3]});

		assert.equal(uintrIW2SF7, BigInt("0"))
		assert.equal(uinttOqwJXX, BigInt("0"))
		await expect(QuickTokenBR3cf3m.mint.call(addresstwX7i9, uintHT0U3iG, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})