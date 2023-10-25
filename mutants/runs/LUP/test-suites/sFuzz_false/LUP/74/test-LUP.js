const LUP = artifacts.require("LUP");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('LUP', (accounts) => {
	it('test for LUP', async () => {
		const stringcrTimDG = "C6VCGB0cBLrbra9zXVxRYjcrFLieiMBQyZXW0uL368Mk1ovrGX3PifJlV67gA01QN0IM8B6U5ik5iKA1qfy597YG8"
		const stringjkzuMaf = "TNx5fjKEQnE4Y3ETHrBihcngIaBWIqZq2NfD2EYQMQ2fSMgV7CVuKllz38A7pOJBXJXqoCTuS3m2vw2691KWz"
		const uintFx0rwUo = BigInt("91")
		const LUPPi3Ewme = await LUP.new(stringcrTimDG, stringjkzuMaf, uintFx0rwUo, {from: accounts[4]});
		const uintHrjwHUg = BigInt("181")
		const uintVJKtR5w = BigInt("1956")
		const addressrymesUY = accounts[5]
		const uintuG2qPQy = BigInt("1322")
		const addressFPTGGMD = "0x0000000000000000000000000000000000000001"
		const uint8iYWzuAe = await LUPPi3Ewme.decimals.call({from: accounts[5]});
		const uint8YFtUcXo = await LUPPi3Ewme.decimals.call({from: accounts[4]});
		const booltYgPKo7 = await LUPPi3Ewme.transferWithLock.call(addressrymesUY, uintVJKtR5w, uintHrjwHUg, {from: accounts[1]});
		const boolKkofpJ = await LUPPi3Ewme.transfer.call(addressFPTGGMD, uintuG2qPQy, {from: accounts[2]});
	});

	it('test for LUP', async () => {
		const LUPXIzlH4Y = await LUP.new({from: accounts[4]});
		const addressYHRzLvl = accounts[1]
		const addressGtKSK1j = accounts[2]
		const uintC7Ohefz = BigInt("1805")
		const addressrAgLopn = accounts[4]
		const uintZGgNZIh = BigInt("39")
		const uintexRjWJt = BigInt("337")
		const addressgVOrxuO = accounts[2]
		const uint256xEsceZO = await LUPXIzlH4Y.balanceOf.call(addressYHRzLvl, {from: accounts[1]});
		const uint256FGq3yQs = await LUPXIzlH4Y.balanceOf.call(addressGtKSK1j, {from: accounts[4]});
		const boolppiZd2 = await LUPXIzlH4Y.unlock.call(addressrAgLopn, uintC7Ohefz, {from: accounts[0]});
		const booleHln7YY = await LUPXIzlH4Y.lock.call(addressgVOrxuO, uintexRjWJt, uintZGgNZIh, {from: accounts[0]});

		assert.equal(uint256FGq3yQs, BigInt("0"))
		assert.equal(uint256xEsceZO, BigInt("0"))
		await expect(LUPXIzlH4Y.unlock.call(addressrAgLopn, uintC7Ohefz, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPCJJhNU = await LUP.new({from: accounts[0]});
		const addresseXE5wk = accounts[4]
		const addressiw8JHoE = accounts[1]
		const address5rGXBo = "0x0000000000000000000000000000000000000001"
		const addressP1LkEe1 = await LUPCJJhNU.upgradeTo.call(addresseXE5wk, {from: accounts[0]});
		const addressEaH7UN9 = await LUPCJJhNU.upgradeTo.call(addressiw8JHoE, {from: accounts[4]});
		const stringXQ76a2 = await LUPCJJhNU.name.call({from: accounts[4]});
		const addresskcXDSsh = await LUPCJJhNU.notFrozen.call(address5rGXBo, {from: accounts[0]});
		const stringh7BmIbK = await LUPCJJhNU.name.call({from: accounts[4]});

		await expect(LUPCJJhNU.upgradeTo.call(addressiw8JHoE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPHAtOCsP = await LUP.new({from: "0x0000000000000000000000000000000000000001"});
		const addressXtmbiY = accounts[1]
		const uintUYIBYV = BigInt("99")
		const uintDwpCI3d = BigInt("1556")
		const addressolgv9O = accounts[1]
		const uint256e8q20HO = await LUPHAtOCsP.balanceOf.call(addressXtmbiY, {from: accounts[3]});
		const boolaflG1Rs = await LUPHAtOCsP.transferWithLock.call(addressolgv9O, uintDwpCI3d, uintUYIBYV, {from: accounts[0]});
		const uint8Q5FrLrj = await LUPHAtOCsP.decimals.call({from: accounts[3]});
	});

	it('test for LUP', async () => {
		const LUPXIzlH4Y = await LUP.new({from: accounts[4]});
		const uintjsgxPlL = BigInt("421")
		const addresssIdJhRI = "0x0000000000000000000000000000000000000001"
		const addressi6rfFRs = accounts[1]
		const addressc9KWVnK = accounts[3]
		const addressR4XAncJ = accounts[5]
		const uintjyazkU3 = BigInt("1805")
		const addresslXNgx7 = accounts[4]
		const uintpL9uiyj = BigInt("39")
		const uintOkeRUSg = BigInt("337")
		const addressLCBDdVP = accounts[2]
		const boolpqkC0J = await LUPXIzlH4Y.transfer.call(addresssIdJhRI, uintjsgxPlL, {from: accounts[2]});
		const uint256xEsceZO = await LUPXIzlH4Y.balanceOf.call(addressi6rfFRs, {from: accounts[1]});
		const uint256FGq3yQs = await LUPXIzlH4Y.balanceOf.call(addressc9KWVnK, {from: accounts[4]});
		const uint256fqCauw4 = await LUPXIzlH4Y.balanceOf.call(addressR4XAncJ, {from: accounts[4]});
		const boolppiZd2 = await LUPXIzlH4Y.unlock.call(addresslXNgx7, uintjyazkU3, {from: accounts[0]});
		const booleHln7YY = await LUPXIzlH4Y.lock.call(addressLCBDdVP, uintOkeRUSg, uintpL9uiyj, {from: accounts[0]});

		await expect(LUPXIzlH4Y.transfer.call(addresssIdJhRI, uintjsgxPlL, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPZfgDIvL = await LUP.new({from: accounts[3]});
		const uint8UBGZNJV = await LUPZfgDIvL.decimals.call({from: accounts[3]});

		assert.equal(uint8UBGZNJV, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPZfgDIvL = await LUP.new({from: accounts[3]});
		const addresseAjYSII = accounts[4]
		const addressUE6g3rX = await LUPZfgDIvL.notFrozen.call(addresseAjYSII, {from: accounts[0]});
		const uint8UBGZNJV = await LUPZfgDIvL.decimals.call({from: accounts[3]});

		await expect(LUPZfgDIvL.notFrozen.call(addresseAjYSII, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPXIzlH4Y = await LUP.new({from: accounts[4]});
		const addresstIVbZtp = accounts[1]
		const uintVEG4diJ = BigInt("1805")
		const addressL9Q6L8w = accounts[4]
		const uintZdo9qVy = BigInt("39")
		const uintHVB8rO9 = BigInt("337")
		const addressRuG3vL4 = accounts[3]
		const uint8uQavAZT = await LUPXIzlH4Y.decimals.call({from: accounts[2]});
		const uint8gw4ChGw = await LUPXIzlH4Y.decimals.call({from: accounts[5]});
		const stringYLNLms7 = await LUPXIzlH4Y.name.call({from: accounts[1]});
		const uint256xEsceZO = await LUPXIzlH4Y.balanceOf.call(addresstIVbZtp, {from: accounts[1]});
		const boolppiZd2 = await LUPXIzlH4Y.unlock.call(addressL9Q6L8w, uintVEG4diJ, {from: accounts[0]});
		const booleHln7YY = await LUPXIzlH4Y.lock.call(addressRuG3vL4, uintHVB8rO9, uintZdo9qVy, {from: accounts[0]});

		assert.equal(stringYLNLms7, "LINKUP Token")
		assert.equal(uint256xEsceZO, BigInt("0"))
		assert.equal(uint8gw4ChGw, BigInt("18"))
		assert.equal(uint8uQavAZT, BigInt("18"))
		await expect(LUPXIzlH4Y.unlock.call(addressL9Q6L8w, uintVEG4diJ, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPA01Ws4 = await LUP.new({from: accounts[3]});
		const uintjYy2o8 = BigInt("242")
		const uint8RgwSR = BigInt("1934")
		const addresswV6u83b = accounts[0]
		const boolCyqvB8K = true
		const addressYWhcDt5 = accounts[4]
		const stringza4dpum = await LUPA01Ws4.symbol.call({from: accounts[2]});
		const boolr3LucZM = await LUPA01Ws4.transferWithLock.call(addresswV6u83b, uint8RgwSR, uintjYy2o8, {from: accounts[3]});
		const boolgbWQbpz = await LUPA01Ws4.freezeAccount.call(addressYWhcDt5, boolCyqvB8K, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolr3LucZM, true)
		assert.equal(stringza4dpum, "LUP")
		await expect(LUPA01Ws4.freezeAccount.call(addressYWhcDt5, boolCyqvB8K, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPXIzlH4Y = await LUP.new({from: accounts[4]});
		const uintkQuQLvu = BigInt("851")
		const addressaSdTGnp = accounts[4]
		const addresslWMnBs4 = accounts[3]
		const uintWbL4iKe = BigInt("1044")
		const addressNlYwNW = accounts[0]
		const boolzyIU1Ly = await LUPXIzlH4Y.unlock.call(addressaSdTGnp, uintkQuQLvu, {from: accounts[4]});
		const uint256xEsceZO = await LUPXIzlH4Y.balanceOf.call(addresslWMnBs4, {from: accounts[1]});
		const boolZtnWmPi = await LUPXIzlH4Y.unlock.call(addressNlYwNW, uintWbL4iKe, {from: accounts[4]});

		await expect(LUPXIzlH4Y.unlock.call(addressaSdTGnp, uintkQuQLvu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for LUP', async () => {
		const LUPZfgDIvL = await LUP.new({from: accounts[3]});
		const boolEtvnSwU = false
		const address4mJq5c = accounts[4]
		const boolD5gO1IY = await LUPZfgDIvL.freezeAccount.call(address4mJq5c, boolEtvnSwU, {from: accounts[3]});
		const uint8UBGZNJV = await LUPZfgDIvL.decimals.call({from: accounts[3]});
		const uint8wn8TRl = await LUPZfgDIvL.decimals.call({from: accounts[4]});

		assert.equal(boolD5gO1IY, true)
		assert.equal(uint8UBGZNJV, BigInt("18"))
		assert.equal(uint8wn8TRl, BigInt("18"))
	});

	it('test for LUP', async () => {
		const LUPZfgDIvL = await LUP.new({from: accounts[3]});
		const uintlZVozOY = BigInt("1297")
		const uintHcvNrF2 = BigInt("126")
		const address5BSGM2 = accounts[0]
		const uint8UBGZNJV = await LUPZfgDIvL.decimals.call({from: accounts[3]});
		const boolfK1y5lI = await LUPZfgDIvL.lock.call(address5BSGM2, uintHcvNrF2, uintlZVozOY, {from: accounts[3]});

		assert.equal(uint8UBGZNJV, BigInt("18"))
		await expect(LUPZfgDIvL.lock.call(address5BSGM2, uintHcvNrF2, uintlZVozOY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})