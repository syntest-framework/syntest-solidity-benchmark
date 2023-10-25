const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolN8MZad = await ETFXPool.new({from: accounts[1]});
//		await ETFXPoolN8MZad.getReward.call({from: accounts[2]});
//		const addressv6SlbZ = await ETFXPoolN8MZad.owner.call({from: accounts[0]});
//		await ETFXPoolN8MZad.renounceOwnership.call({from: accounts[0]});
//		await ETFXPoolN8MZad.exit.call({from: accounts[0]});

		await expect(ETFXPoolN8MZad.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolDTA7IY = await ETFXPool.new({from: accounts[5]});
		const uintRAqriEu = BigInt("1838")
//		const uint256IRlmFRu = await ETFXPoolDTA7IY.stake.call(uintRAqriEu, {from: accounts[2]});
//		await ETFXPoolDTA7IY.getReward.call({from: accounts[4]});

		await expect(ETFXPoolDTA7IY.stake.call(uintRAqriEu, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTmN0jw = await ETFXPool.new({from: accounts[5]});
//		await ETFXPoolTmN0jw.renounceOwnership.call({from: accounts[3]});
//		await ETFXPoolTmN0jw.nonReentrant.call({from: accounts[3]});
//		const strings9IIQdA = await ETFXPoolTmN0jw.symbol.call({from: accounts[4]});
//		const addressFSFaDW = await ETFXPoolTmN0jw.owner.call({from: accounts[2]});
//		await ETFXPoolTmN0jw.renounceOwnership.call({from: accounts[1]});

		await expect(ETFXPoolTmN0jw.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolIzIoRA0 = await ETFXPool.new({from: accounts[4]});
		const uintEOwrGw2 = BigInt("1751")
		const address1VGW6Z = accounts[1]
		const uintEOw40rL = BigInt("103")
//		const boolbP67g0g = await ETFXPoolIzIoRA0.decreaseAllowance.call(address1VGW6Z, uintEOwrGw2, {from: accounts[0]});
//		await ETFXPoolIzIoRA0.getReward.call({from: accounts[2]});
//		const uint256VV5snJ1 = await ETFXPoolIzIoRA0.withdraw.call(uintEOw40rL, {from: accounts[3]});

		await expect(ETFXPoolIzIoRA0.decreaseAllowance.call(address1VGW6Z, uintEOwrGw2, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolIPm2RhF = await ETFXPool.new({from: accounts[0]});
		const uintodSDrk9 = BigInt("317")
		const addressNB2kcxX = accounts[0]
		const uintZh0wiAa = BigInt("150")
//		await ETFXPoolIPm2RhF.renounceOwnership.call({from: accounts[0]});
//		const boolS9amZlp = await ETFXPoolIPm2RhF.increaseAllowance.call(addressNB2kcxX, uintodSDrk9, {from: accounts[3]});
//		const uint256wmhbbwK = await ETFXPoolIPm2RhF.stake.call(uintZh0wiAa, {from: accounts[4]});
//		await ETFXPoolIPm2RhF.nonReentrant.call({from: accounts[0]});

		await expect(ETFXPoolIPm2RhF.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolc9qCz69 = await ETFXPool.new({from: accounts[0]});
		const addresslElO3s = accounts[4]
		const addressROFCnkB = accounts[2]
		const addresszJ5hztW = accounts[5]
		const uint256qGmeJsi = await ETFXPoolc9qCz69.rewardPerToken.call({from: accounts[3]});
		const uint256xWuBa1y = await ETFXPoolc9qCz69.allowance.call(addressROFCnkB, addresslElO3s, {from: accounts[2]});
//		const addressBVJhV1r = await ETFXPoolc9qCz69.transferOwnership.call(addresszJ5hztW, {from: accounts[5]});

		assert.equal(uint256qGmeJsi, BigInt("0"))
		assert.equal(uint256xWuBa1y, BigInt("0"))
		await expect(ETFXPoolc9qCz69.transferOwnership.call(addresszJ5hztW, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringCrzCiaB = "JJ3sy3KGe1rD59Uy43bz5479JUhq6BYELB1Mwqb8lpzVcHpiYZ8l"
		const stringdiDAgE = "09g3bcJ0ljOhpWre2BQ5DwQ"
		const uintIX2t8kC = BigInt("161")
		const ETFXPoolK8yD5J0 = await ETFXPool.new(stringCrzCiaB, stringdiDAgE, uintIX2t8kC, {from: accounts[1]});
		const uintqBZZhFW = BigInt("600")
		const addressJu6IKXh = accounts[0]
		const addressgzdi46u = accounts[5]
		await ETFXPoolK8yD5J0.nonReentrant.call({from: accounts[4]});
		const booladLdYZt = await ETFXPoolK8yD5J0.approve.call(addressJu6IKXh, uintqBZZhFW, {from: accounts[4]});
		await ETFXPoolK8yD5J0.renounceOwnership.call({from: accounts[3]});
		const uint256WdmjpJ = await ETFXPoolK8yD5J0.earned.call(addressgzdi46u, {from: accounts[4]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolGXJSjf = await ETFXPool.new({from: accounts[4]});
		const uinthemaTEW = BigInt("1670")
		const addressBcwLlHQ = accounts[5]
		const addressYS8r1om = accounts[0]
//		await ETFXPoolGXJSjf.exit.call({from: accounts[1]});
//		const uint256T1pZX7w = await ETFXPoolGXJSjf.stake.call(uinthemaTEW, {from: "0x0000000000000000000000000000000000000001"});
//		const addressoJCnADJ = await ETFXPoolGXJSjf.owner.call({from: accounts[2]});
//		const uint256lWZ3Xbn = await ETFXPoolGXJSjf.allowance.call(addressYS8r1om, addressBcwLlHQ, {from: accounts[2]});

		await expect(ETFXPoolGXJSjf.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolc9qCz69 = await ETFXPool.new({from: accounts[0]});
		const addressparHrtn = accounts[4]
		const addressdNQ0tDl = accounts[2]
		const uintOpslH0I = BigInt("627")
		const addressXB8cx8Y = accounts[0]
		const addresszBl0Bgj = accounts[5]
		const uint256qGmeJsi = await ETFXPoolc9qCz69.rewardPerToken.call({from: accounts[3]});
		const uint256xWuBa1y = await ETFXPoolc9qCz69.allowance.call(addressdNQ0tDl, addressparHrtn, {from: accounts[2]});
		const uint8oV31mZ2 = await ETFXPoolc9qCz69.decimals.call({from: "0x0000000000000000000000000000000000000001"});
//		const booli5uvbMi = await ETFXPoolc9qCz69.transfer.call(addressXB8cx8Y, uintOpslH0I, {from: accounts[1]});
//		const addressBVJhV1r = await ETFXPoolc9qCz69.transferOwnership.call(addresszBl0Bgj, {from: accounts[5]});

		assert.equal(uint256qGmeJsi, BigInt("0"))
		assert.equal(uint256xWuBa1y, BigInt("0"))
		assert.equal(uint8oV31mZ2, BigInt("8"))
		await expect(ETFXPoolc9qCz69.transfer.call(addressXB8cx8Y, uintOpslH0I, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolZZ1AsBc = await ETFXPool.new({from: accounts[3]});
		const uintcDzxgSK = BigInt("1633")
		const addresscVQWLAU = accounts[4]
		const addresslnspyak = accounts[0]
		const uintYONkuDY = BigInt("1542")
		const uintdplmNEw = BigInt("327")
		const addressAmT4LG2 = "0x0000000000000000000000000000000000000001"
		const addressqWIuj46 = accounts[1]
//		const boolWJ27PLU = await ETFXPoolZZ1AsBc.transferFrom.call(addresslnspyak, addresscVQWLAU, uintcDzxgSK, {from: accounts[4]});
//		const uint256r2K1xze = await ETFXPoolZZ1AsBc.stake.call(uintYONkuDY, {from: accounts[1]});
//		const boolI5L6DfH = await ETFXPoolZZ1AsBc.decreaseAllowance.call(addressAmT4LG2, uintdplmNEw, {from: accounts[1]});
//		const uint256Z0y69s9 = await ETFXPoolZZ1AsBc.balanceOf.call(addressqWIuj46, {from: accounts[5]});
//		const addressDbQz6t7 = await ETFXPoolZZ1AsBc.owner.call({from: accounts[3]});
//		await ETFXPoolZZ1AsBc.renounceOwnership.call({from: accounts[3]});

		await expect(ETFXPoolZZ1AsBc.transferFrom.call(addresslnspyak, addresscVQWLAU, uintcDzxgSK, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolIzIoRA0 = await ETFXPool.new({from: accounts[4]});
		const uintvAcduA5 = BigInt("100")
//		const uint256VV5snJ1 = await ETFXPoolIzIoRA0.withdraw.call(uintvAcduA5, {from: accounts[3]});

		await expect(ETFXPoolIzIoRA0.withdraw.call(uintvAcduA5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooluEq0Vii = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const addressxtc0pKR = accounts[5]
		const uintyG3a53H = BigInt("1911")
		const addressRMThv5F = accounts[0]
		const addressVKqG2CZ = accounts[2]
		const uint256aqYKEjV = await ETFXPooluEq0Vii.earned.call(addressxtc0pKR, {from: accounts[4]});
		const uint8mIOYFPI = await ETFXPooluEq0Vii.decimals.call({from: accounts[4]});
		await ETFXPooluEq0Vii.exit.call({from: accounts[3]});
		const boollqaNxfN = await ETFXPooluEq0Vii.transferFrom.call(addressVKqG2CZ, addressRMThv5F, uintyG3a53H, {from: accounts[0]});
		await ETFXPooluEq0Vii.renounceOwnership.call({from: accounts[3]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolIzIoRA0 = await ETFXPool.new({from: accounts[4]});
		const uintie3N5gT = BigInt("1778")
		const uintN1WSCM4 = BigInt("88")
//		await ETFXPoolIzIoRA0.nonReentrant.call({from: accounts[4]});
//		const addresscuVRTP3 = await ETFXPoolIzIoRA0.owner.call({from: accounts[2]});
//		const uint256KurueJ5 = await ETFXPoolIzIoRA0.withdraw.call(uintie3N5gT, {from: accounts[5]});
//		const uint256VV5snJ1 = await ETFXPoolIzIoRA0.withdraw.call(uintN1WSCM4, {from: accounts[3]});

		await expect(ETFXPoolIzIoRA0.nonReentrant.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooljoexQXj = await ETFXPool.new({from: accounts[3]});
		const uint401qfU = BigInt("139")
		const addressJpCDyZz = "0x0000000000000000000000000000000000000001"
		const uint8y8iMoiy = await ETFXPooljoexQXj.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const stringnPzv0xp = await ETFXPooljoexQXj.name.call({from: accounts[5]});
//		await ETFXPooljoexQXj.getReward.call({from: accounts[3]});
//		const uint256CSGDelf = await ETFXPooljoexQXj.withdraw.call(uint401qfU, {from: accounts[1]});
//		const addresscVPNOm9 = await ETFXPooljoexQXj.transferOwnership.call(addressJpCDyZz, {from: accounts[2]});

		assert.equal(stringnPzv0xp, "ETFX-FARM")
		assert.equal(uint8y8iMoiy, BigInt("8"))
		await expect(ETFXPooljoexQXj.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolIzIoRA0 = await ETFXPool.new({from: accounts[4]});
		const address90YaFc = accounts[1]
		const uintpXGgfUN = BigInt("1770")
		const addressi49FwwE = accounts[2]
		const addressjDeKJZ9 = await ETFXPoolIzIoRA0.transferOwnership.call(address90YaFc, {from: accounts[4]});
		const stringd8gudZr = await ETFXPoolIzIoRA0.symbol.call({from: accounts[2]});
//		const boolbP67g0g = await ETFXPoolIzIoRA0.decreaseAllowance.call(addressi49FwwE, uintpXGgfUN, {from: accounts[0]});

		assert.equal(stringd8gudZr, "FETFX")
		await expect(ETFXPoolIzIoRA0.decreaseAllowance.call(addressi49FwwE, uintpXGgfUN, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolIzIoRA0 = await ETFXPool.new({from: accounts[4]});
		const uintVcrxKAV = BigInt("100")
		const addressfPJjbYK = await ETFXPoolIzIoRA0.owner.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256VV5snJ1 = await ETFXPoolIzIoRA0.withdraw.call(uintVcrxKAV, {from: accounts[3]});

		assert.equal(addressfPJjbYK, 0x9791135a1398353361CF55C00465c911FA208E28)
		await expect(ETFXPoolIzIoRA0.withdraw.call(uintVcrxKAV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolIzIoRA0 = await ETFXPool.new({from: accounts[4]});
		const uinttzqLKG = BigInt("159")
		const addressW1eQyO2 = accounts[2]
		const uinty7vmer8 = BigInt("100")
		const boolqhXfrsP = await ETFXPoolIzIoRA0.approve.call(addressW1eQyO2, uinttzqLKG, {from: accounts[2]});
//		const uint256VV5snJ1 = await ETFXPoolIzIoRA0.withdraw.call(uinty7vmer8, {from: accounts[3]});

		assert.equal(boolqhXfrsP, true)
		await expect(ETFXPoolIzIoRA0.withdraw.call(uinty7vmer8, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})