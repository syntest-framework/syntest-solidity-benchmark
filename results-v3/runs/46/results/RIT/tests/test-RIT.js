const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITTW5wxta = await RIT.new({from: accounts[4]});
		const uintnx7rndw = BigInt("517")
		const addressVxyKHfu = accounts[2]
		const uintsUeXHu = BigInt("159")
		const addressSZ97GgM = accounts[0]
		const boolYeWfgtF = await RITTW5wxta.increaseAllowance.call(addressVxyKHfu, uintnx7rndw, {from: accounts[1]});
		const booltZR1y7i = await RITTW5wxta.decreaseAllowance.call(addressSZ97GgM, uintsUeXHu, {from: accounts[4]});

		assert.equal(boolYeWfgtF, true)
		await expect(RITTW5wxta.decreaseAllowance.call(addressSZ97GgM, uintsUeXHu, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITZZj1ER = await RIT.new({from: accounts[1]});
		const uintnB6fpeX = BigInt("818")
		const addressvEO8Tor = "0x0000000000000000000000000000000000000001"
		const addressNxC9uTi = accounts[4]
		const uintN2GQ0Mv = BigInt("1863")
		const addressiTXiezQ = accounts[3]
		const boolC2M4G2 = await RITZZj1ER.transferFrom.call(addressNxC9uTi, addressvEO8Tor, uintnB6fpeX, {from: accounts[3]});
		const stringXJO0nTl = await RITZZj1ER.name.call({from: accounts[0]});
		const boolQjxT1v6 = await RITZZj1ER.decreaseAllowance.call(addressiTXiezQ, uintN2GQ0Mv, {from: accounts[4]});

		await expect(RITZZj1ER.transferFrom.call(addressNxC9uTi, addressvEO8Tor, uintnB6fpeX, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITtDEkucT = await RIT.new({from: accounts[4]});
		const uintzNoId40 = BigInt("1805")
		const addressTT54zHK = accounts[1]
		const uintYx2UY6 = BigInt("432")
		const addressoJdmPKx = accounts[3]
		const uintETLGTwt = BigInt("990")
		const addressX1fiHhc = accounts[2]
		const boolIxBaXPi = await RITtDEkucT.transfer.call(addressTT54zHK, uintzNoId40, {from: "0x0000000000000000000000000000000000000001"});
		const boolPbYorKw = await RITtDEkucT.increaseAllowance.call(addressoJdmPKx, uintYx2UY6, {from: accounts[1]});
		const boolXScEZmj = await RITtDEkucT.decreaseAllowance.call(addressX1fiHhc, uintETLGTwt, {from: accounts[3]});

		await expect(RITtDEkucT.transfer.call(addressTT54zHK, uintzNoId40, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITnHcvlZK = await RIT.new({from: accounts[4]});
		const addressw8VUjYf = accounts[0]
		const addressKc2LIzR = accounts[3]
		const addressrzA4Z6H = accounts[2]
		const uint3edXzD = BigInt("304")
		const addressENKYA8Z = accounts[0]
		const uint256geCfZ6G = await RITnHcvlZK.balanceOf.call(addressw8VUjYf, {from: accounts[3]});
		const uint256AMU708M = await RITnHcvlZK.balanceOf.call(addressKc2LIzR, {from: accounts[0]});
		const uint256SjIbPuU = await RITnHcvlZK.balanceOf.call(addressrzA4Z6H, {from: accounts[1]});
		const uint8OK3Hi7 = await RITnHcvlZK.decimals.call({from: accounts[2]});
		const boolOC5UDe = await RITnHcvlZK.transfer.call(addressENKYA8Z, uint3edXzD, {from: accounts[2]});

		assert.equal(uint256AMU708M, BigInt("0"))
		assert.equal(uint256SjIbPuU, BigInt("0"))
		assert.equal(uint256geCfZ6G, BigInt("0"))
		assert.equal(uint8OK3Hi7, BigInt("18"))
		await expect(RITnHcvlZK.transfer.call(addressENKYA8Z, uint3edXzD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITka7YFO = await RIT.new({from: accounts[2]});
		const addressF8CrmRQ = accounts[1]
		const addressFgTZDro = accounts[2]
		const addressONDfEYL = accounts[4]
		const addressIyouorR = accounts[5]
		const uint256vskJs7m = await RITka7YFO.allowance.call(addressFgTZDro, addressF8CrmRQ, {from: accounts[5]});
		const uint256oWRyOcW = await RITka7YFO.allowance.call(addressIyouorR, addressONDfEYL, {from: accounts[1]});

		assert.equal(uint256oWRyOcW, BigInt("0"))
		assert.equal(uint256vskJs7m, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITTW5wxta = await RIT.new({from: accounts[4]});
		const uintM3G3Tbc = BigInt("517")
		const addressdkf5Axp = accounts[2]
		const uintd5j7WgR = BigInt("159")
		const addressH5E0DKV = accounts[0]
		const uint256y06iYzu = await RITTW5wxta.totalSupply.call({from: accounts[5]});
		const boolYeWfgtF = await RITTW5wxta.increaseAllowance.call(addressdkf5Axp, uintM3G3Tbc, {from: accounts[1]});
		const booltZR1y7i = await RITTW5wxta.decreaseAllowance.call(addressH5E0DKV, uintd5j7WgR, {from: accounts[4]});

		assert.equal(boolYeWfgtF, true)
		assert.equal(uint256y06iYzu, BigInt("500000000000000000000000000"))
		await expect(RITTW5wxta.decreaseAllowance.call(addressH5E0DKV, uintd5j7WgR, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITxgtVI4t = await RIT.new({from: accounts[4]});
		const uintXQsWEzg = BigInt("1390")
		const addressHStvbLJ = accounts[2]
		const addressSI27y3J = "0x0000000000000000000000000000000000000001"
		const addressd2epwNE = accounts[3]
		const addresssd0P7e = accounts[3]
		const addressqySASu = accounts[3]
		const boolur7aB3S = await RITxgtVI4t.increaseAllowance.call(addressHStvbLJ, uintXQsWEzg, {from: accounts[0]});
		const stringQ2F7d1J = await RITxgtVI4t.symbol.call({from: accounts[1]});
		const uint256R9EMjOV = await RITxgtVI4t.allowance.call(addressd2epwNE, addressSI27y3J, {from: accounts[1]});
		const stringwbXbf64 = await RITxgtVI4t.symbol.call({from: accounts[0]});
		const uint256NkaQv5B = await RITxgtVI4t.allowance.call(addressqySASu, addresssd0P7e, {from: accounts[2]});

		assert.equal(boolur7aB3S, true)
		assert.equal(stringQ2F7d1J, "RIT 2.0")
		assert.equal(stringwbXbf64, "RIT 2.0")
		assert.equal(uint256NkaQv5B, BigInt("0"))
		assert.equal(uint256R9EMjOV, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITTW5wxta = await RIT.new({from: accounts[4]});
		const uintUGehgeS = BigInt("359")
		const addressfKV5MqP = accounts[1]
		const uintz3hGNH = BigInt("160")
		const addressXcdcKwJ = accounts[0]
		const uint256E9O8L20 = await RITTW5wxta._burn.call(uintUGehgeS, {from: accounts[0]});
		const uint256ATdTDcB = await RITTW5wxta.balanceOf.call(addressfKV5MqP, {from: accounts[4]});
		const booltZR1y7i = await RITTW5wxta.decreaseAllowance.call(addressXcdcKwJ, uintz3hGNH, {from: accounts[4]});

		await expect(RITTW5wxta._burn.call(uintUGehgeS, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITTW5wxta = await RIT.new({from: accounts[4]});
		const uintS3nyKDi = BigInt("292")
		const addressDW5iVsp = accounts[0]
		const uintiEGzpI = BigInt("159")
		const addresskedGytk = accounts[1]
		const uintyZBjRgk = BigInt("1050")
		const addressHQQwF3f = accounts[2]
		const boolDWpdUEH = await RITTW5wxta.approve.call(addressDW5iVsp, uintS3nyKDi, {from: accounts[2]});
		const booltZR1y7i = await RITTW5wxta.decreaseAllowance.call(addresskedGytk, uintiEGzpI, {from: accounts[4]});
		const boolO6SZovd = await RITTW5wxta.decreaseAllowance.call(addressHQQwF3f, uintyZBjRgk, {from: accounts[3]});

		assert.equal(boolDWpdUEH, true)
		await expect(RITTW5wxta.decreaseAllowance.call(addresskedGytk, uintiEGzpI, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITqYQecqA = await RIT.new({from: accounts[1]});
		const addressmzOJDC = accounts[2]
		const addressL3uLH8g = accounts[4]
		const addressXg2KiX = accounts[2]
		const uint1yY9uw = BigInt("146")
		const addresszOml3wy = accounts[1]
		const uint256dLSbs5 = await RITqYQecqA.allowance.call(addressL3uLH8g, addressmzOJDC, {from: "0x0000000000000000000000000000000000000001"});
		const uint256S3W4phV = await RITqYQecqA.balanceOf.call(addressXg2KiX, {from: accounts[5]});
		const boolraSuUGj = await RITqYQecqA.approve.call(addresszOml3wy, uint1yY9uw, {from: accounts[0]});
		const uint256ZvqYg4I = await RITqYQecqA.totalSupply.call({from: accounts[5]});
		const stringA86ay1O = await RITqYQecqA.name.call({from: accounts[4]});

		assert.equal(boolraSuUGj, true)
		assert.equal(stringA86ay1O, "Real Estate Investment Token")
		assert.equal(uint256S3W4phV, BigInt("0"))
		assert.equal(uint256ZvqYg4I, BigInt("500000000000000000000000000"))
		assert.equal(uint256dLSbs5, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITBj32ll5 = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintI6G85Hq = BigInt("410")
		const addressH2U9WbZ = accounts[4]
		const addressAhQpr1r = accounts[3]
		const boolNuyTmY = await RITBj32ll5.transferFrom.call(addressAhQpr1r, addressH2U9WbZ, uintI6G85Hq, {from: accounts[1]});
		const uint256MNMLefa = await RITBj32ll5.totalSupply.call({from: accounts[0]});
	});
})