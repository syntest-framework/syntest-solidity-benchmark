const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITRX0YxW = await RIT.new({from: accounts[4]});
		const addressiXL2Eoz = accounts[2]
		const uint8pQgu7uS = await RITRX0YxW.decimals.call({from: accounts[3]});
		const uint256kOAMBYX = await RITRX0YxW.balanceOf.call(addressiXL2Eoz, {from: accounts[3]});
		const uint8gymIn70 = await RITRX0YxW.decimals.call({from: accounts[1]});

		assert.equal(uint256kOAMBYX, BigInt("0"))
		assert.equal(uint8gymIn70, BigInt("18"))
		assert.equal(uint8pQgu7uS, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITZMrK5XB = await RIT.new({from: accounts[2]});
		const uintqrD4yNe = BigInt("912")
		const addressAfWkaWs = accounts[3]
		const uintbF0LXQZ = BigInt("771")
		const addressN6qgq0M = accounts[3]
		const booluqoUo7W = await RITZMrK5XB.increaseAllowance.call(addressAfWkaWs, uintqrD4yNe, {from: accounts[3]});
		const boolJJqXL1 = await RITZMrK5XB.approve.call(addressN6qgq0M, uintbF0LXQZ, {from: accounts[5]});

		assert.equal(boolJJqXL1, true)
		assert.equal(booluqoUo7W, true)
	});

	it('test for RIT', async () => {
		const RITIsTquQF = await RIT.new({from: accounts[4]});
		const addresshvM2aLK = accounts[2]
		const uintJ8RW6hB = BigInt("623")
		const addressNDJhJGi = accounts[0]
		const uintPXLqmIF = BigInt("386")
		const addressJzPvPu4 = accounts[1]
		const addressXxchmZ7 = accounts[2]
		const uint2567MYiHj = await RITIsTquQF.balanceOf.call(addresshvM2aLK, {from: accounts[4]});
		const booljyHFPHj = await RITIsTquQF.transfer.call(addressNDJhJGi, uintJ8RW6hB, {from: "0x0000000000000000000000000000000000000001"});
		const uint256pLftG2s = await RITIsTquQF.totalSupply.call({from: accounts[1]});
		const boolepPkdIN = await RITIsTquQF.transferFrom.call(addressXxchmZ7, addressJzPvPu4, uintPXLqmIF, {from: accounts[3]});

		assert.equal(uint2567MYiHj, BigInt("0"))
		await expect(RITIsTquQF.transfer.call(addressNDJhJGi, uintJ8RW6hB, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITD1DB2I4 = await RIT.new({from: accounts[2]});
		const uintfdMcZeT = BigInt("2001")
		const addressFuIbtJo = accounts[3]
		const addressjnaG0aM = accounts[0]
		const uintnVG4dif = BigInt("1102")
		const addresszoEDBGL = accounts[3]
		const uintYzWErLC = BigInt("1463")
		const uint8HvoCiCr = await RITD1DB2I4.decimals.call({from: accounts[0]});
		const boolxO8kRTc = await RITD1DB2I4.transferFrom.call(addressjnaG0aM, addressFuIbtJo, uintfdMcZeT, {from: accounts[4]});
		const boolXyBD2sh = await RITD1DB2I4.approve.call(addresszoEDBGL, uintnVG4dif, {from: accounts[0]});
		const uint256ODI5swZ = await RITD1DB2I4._burn.call(uintYzWErLC, {from: accounts[1]});

		assert.equal(uint8HvoCiCr, BigInt("18"))
		await expect(RITD1DB2I4.transferFrom.call(addressjnaG0aM, addressFuIbtJo, uintfdMcZeT, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITaE8fj3 = await RIT.new({from: accounts[5]});
		const addressKMlKilM = accounts[4]
		const addressAB2wm0v = accounts[1]
		const addressDh6Fxaf = accounts[0]
		const addressJhQ7W1S = accounts[0]
		const uint8vmHQZjq = await RITaE8fj3.decimals.call({from: accounts[4]});
		const uint256MPO9IKN = await RITaE8fj3.allowance.call(addressAB2wm0v, addressKMlKilM, {from: "0x0000000000000000000000000000000000000001"});
		const stringHHVRZq = await RITaE8fj3.symbol.call({from: accounts[3]});
		const uint256rd5ADlN = await RITaE8fj3.allowance.call(addressJhQ7W1S, addressDh6Fxaf, {from: accounts[4]});

		assert.equal(stringHHVRZq, "RIT 2.0")
		assert.equal(uint256MPO9IKN, BigInt("0"))
		assert.equal(uint256rd5ADlN, BigInt("0"))
		assert.equal(uint8vmHQZjq, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITlsN0fyF = await RIT.new({from: accounts[0]});
		const uintpLDf6V8 = BigInt("282")
		const addressfjS94g = accounts[3]
		const addressAMzAFYq = "0x0000000000000000000000000000000000000001"
		const uint256DHIDT5 = await RITlsN0fyF._burn.call(uintpLDf6V8, {from: accounts[3]});
		const uint256P44ZXLm = await RITlsN0fyF.allowance.call(addressAMzAFYq, addressfjS94g, {from: "0x0000000000000000000000000000000000000001"});
		const uint8zm67IZ = await RITlsN0fyF.decimals.call({from: accounts[4]});
		const uint256SgU4lMB = await RITlsN0fyF.totalSupply.call({from: accounts[1]});

		await expect(RITlsN0fyF._burn.call(uintpLDf6V8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITcFOncGF = await RIT.new({from: accounts[1]});
		const addressRMiC1c = accounts[3]
		const address5PGks8 = accounts[1]
		const stringXUJZ6hG = await RITcFOncGF.name.call({from: accounts[3]});
		const uint256nvpXr18 = await RITcFOncGF.allowance.call(address5PGks8, addressRMiC1c, {from: accounts[2]});

		assert.equal(stringXUJZ6hG, "Real Estate Investment Token")
		assert.equal(uint256nvpXr18, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RIT5ZfIJG = await RIT.new({from: accounts[2]});
		const addressRsfaTsk = accounts[0]
		const uintPH0Owic = BigInt("803")
		const addressC7peKFf = accounts[1]
		const uint256NY2s9Zn = await RIT5ZfIJG.balanceOf.call(addressRsfaTsk, {from: accounts[1]});
		const boolKrwudUq = await RIT5ZfIJG.decreaseAllowance.call(addressC7peKFf, uintPH0Owic, {from: accounts[4]});

		assert.equal(uint256NY2s9Zn, BigInt("0"))
		await expect(RIT5ZfIJG.decreaseAllowance.call(addressC7peKFf, uintPH0Owic, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITH6XAqGA = await RIT.new({from: accounts[4]});
		const uintThfpFC5 = BigInt("1346")
		const addressbBmWf24 = accounts[5]
		const uintZVg4z5q = BigInt("346")
		const uintsV7F9aF = BigInt("1739")
		const addressT7wDrrv = "0x0000000000000000000000000000000000000001"
		const uint256PaxVFtv = await RITH6XAqGA.totalSupply.call({from: accounts[1]});
		const booluXjcRqb = await RITH6XAqGA.approve.call(addressbBmWf24, uintThfpFC5, {from: accounts[3]});
		const uint256u87DSJa = await RITH6XAqGA._burn.call(uintZVg4z5q, {from: accounts[2]});
		const booln9adJUL = await RITH6XAqGA.transfer.call(addressT7wDrrv, uintsV7F9aF, {from: accounts[3]});

		assert.equal(booluXjcRqb, true)
		assert.equal(uint256PaxVFtv, BigInt("500000000000000000000000000"))
		await expect(RITH6XAqGA._burn.call(uintZVg4z5q, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITiJbRBzd = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintWzqVKPJ = BigInt("1816")
		const addressa18yPt = accounts[2]
		const stringqDS2kuM = await RITiJbRBzd.symbol.call({from: accounts[4]});
		const stringbYKI3l = await RITiJbRBzd.symbol.call({from: accounts[3]});
		const uint256SaysW1n = await RITiJbRBzd._burn.call(uintWzqVKPJ, {from: accounts[2]});
		const stringjxTczzR = await RITiJbRBzd.symbol.call({from: accounts[1]});
		const uint256WX1EiF = await RITiJbRBzd.balanceOf.call(addressa18yPt, {from: accounts[4]});
	});
})