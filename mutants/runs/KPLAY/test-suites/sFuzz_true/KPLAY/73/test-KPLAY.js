const KPLAY = artifacts.require("KPLAY");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('KPLAY', (accounts) => {
	it('test for KPLAY', async () => {
		const KPLAYtSZgJqT = await KPLAY.new({from: accounts[2]});
		const addressSvssDwd = accounts[2]
		const addressEviri6 = accounts[0]
		const uint1DnFsG = BigInt("1867")
		const addressJKHjC1Z = accounts[1]
		const uintjuXat5i = BigInt("1218")
		const addresstQw1s2 = accounts[3]
		const uint256gDbDhc5 = await KPLAYtSZgJqT.lockCount.call(addressSvssDwd, {from: accounts[5]});
		const uint256kxnk1J = await KPLAYtSZgJqT.balanceOf.call(addressEviri6, {from: accounts[4]});
		await KPLAYtSZgJqT.lockState.call(addressJKHjC1Z, uint1DnFsG, {from: accounts[1]});
		const bool2dpblL = await KPLAYtSZgJqT.approve.call(addresstQw1s2, uintjuXat5i, {from: accounts[1]});

		assert.equal(uint256gDbDhc5, BigInt("0"))
		assert.equal(uint256kxnk1J, BigInt("0"))
		await expect(KPLAYtSZgJqT.lockState.call(addressJKHjC1Z, uint1DnFsG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYgWdhI0n = await KPLAY.new({from: accounts[2]});
		const addressbsX9jR9 = accounts[5]
		const uintxRnj37R = BigInt("973")
		const addressHaPRPEk = accounts[1]
		const uintVpVe68o = BigInt("663")
		const addresstHul2VI = accounts[0]
		const uintMOUTlLK = BigInt("1305")
		const addressMA5CfHl = accounts[2]
		const boolv8KSKM = await KPLAYgWdhI0n.isFrozen.call(addressbsX9jR9, {from: "0x0000000000000000000000000000000000000001"});
		const addressznHoNl1 = await KPLAYgWdhI0n.unlock.call(addressHaPRPEk, uintxRnj37R, {from: accounts[3]});
		const boolcl2JNt = await KPLAYgWdhI0n.transfer.call(addresstHul2VI, uintVpVe68o, {from: accounts[2]});
		const boolon0qnra = await KPLAYgWdhI0n.increaseAllowance.call(addressMA5CfHl, uintMOUTlLK, {from: accounts[0]});

		assert.equal(boolv8KSKM, false)
		await expect(KPLAYgWdhI0n.unlock.call(addressHaPRPEk, uintxRnj37R, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYmNcD50c = await KPLAY.new({from: accounts[1]});
		const addressDjxlXRw = accounts[5]
		const addressIGMnkkW = accounts[0]
		const uintTAWOZKr = BigInt("1562")
		const uint256fcQgrPp = await KPLAYmNcD50c.allowance.call(addressIGMnkkW, addressDjxlXRw, {from: accounts[3]});
		const uint256Twg4l11 = await KPLAYmNcD50c.afterTime.call(uintTAWOZKr, {from: accounts[3]});
		await KPLAYmNcD50c.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256Twg4l11, BigInt("1630229861"))
		assert.equal(uint256fcQgrPp, BigInt("0"))
		await expect(KPLAYmNcD50c.whenNotFrozen.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYjVzIhUP = await KPLAY.new({from: accounts[4]});
		const uintSDvqh4G = BigInt("1766")
		const uintC22bAAY = BigInt("636")
		const addressytsZH7M = accounts[2]
		const addressCUlXuYY = accounts[3]
		const addresspUfsZqC = accounts[2]
		const addressWZZlBQ = accounts[0]
		const uintZ3FVWKN = BigInt("1322")
		const addressrhsaAD0 = accounts[4]
		const uint256xnkylLD = await KPLAYjVzIhUP.afterTime.call(uintSDvqh4G, {from: accounts[2]});
		const boolKu68CdG = await KPLAYjVzIhUP.increaseAllowance.call(addressytsZH7M, uintC22bAAY, {from: accounts[4]});
		const addressTKbxlNe = await KPLAYjVzIhUP.unfreeze.call(addressCUlXuYY, {from: accounts[1]});
		const uint256nbqNUsp = await KPLAYjVzIhUP.allowance.call(addressWZZlBQ, addresspUfsZqC, {from: accounts[4]});
		const boolZ3itQSo = await KPLAYjVzIhUP.transfer.call(addressrhsaAD0, uintZ3FVWKN, {from: accounts[0]});

		assert.equal(boolKu68CdG, true)
		assert.equal(uint256xnkylLD, BigInt("1630230064"))
		await expect(KPLAYjVzIhUP.unfreeze.call(addressCUlXuYY, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYVVTSnZw = await KPLAY.new({from: accounts[1]});
		const uintO1YGqr = BigInt("1859")
		const addressz2kyCO = accounts[5]
		const addressn8BaDgO = accounts[3]
		const uintk36gkbx = BigInt("1188")
		const addressaFk6Wjm = accounts[2]
		const addressLoRWTE = accounts[5]
		const uintHnU3PTC = BigInt("59")
		const addressUuJqlW0 = accounts[3]
		const uintZiie9P = BigInt("1413")
		const uint9vthW2 = BigInt("303")
		const addressSTq6JRE = accounts[1]
		const boolRueiAX1 = await KPLAYVVTSnZw.mint.call(addressz2kyCO, uintO1YGqr, {from: accounts[1]});
		const uint256zgratDY = await KPLAYVVTSnZw.balanceOf.call(addressn8BaDgO, {from: accounts[1]});
		const boolEKaWosa = await KPLAYVVTSnZw.transferFrom.call(addressLoRWTE, addressaFk6Wjm, uintk36gkbx, {from: "0x0000000000000000000000000000000000000001"});
		await KPLAYVVTSnZw.lockState.call(addressUuJqlW0, uintHnU3PTC, {from: accounts[5]});
		const addressmI5B5xH = await KPLAYVVTSnZw.lock.call(addressSTq6JRE, uint9vthW2, uintZiie9P, {from: accounts[2]});

		assert.equal(boolRueiAX1, true)
		assert.equal(uint256zgratDY, BigInt("0"))
		await expect(KPLAYVVTSnZw.transferFrom.call(addressLoRWTE, addressaFk6Wjm, uintk36gkbx, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAY1EUUav = await KPLAY.new({from: accounts[3]});
		const uintLUGO8DE = BigInt("311")
		const addressL58bV2L = accounts[1]
		const uintjZsgjkh = BigInt("25")
		const addresskpYdb9v = accounts[2]
		const addresspuv1xVv = accounts[5]
		const addresswhXF2ML = accounts[2]
		const boolfRu4FKm = await KPLAY1EUUav.approve.call(addressL58bV2L, uintLUGO8DE, {from: "0x0000000000000000000000000000000000000001"});
		const boolR8mUX7j = await KPLAY1EUUav.transferFrom.call(addresspuv1xVv, addresskpYdb9v, uintjZsgjkh, {from: accounts[2]});
		const addresshE75Ccj = await KPLAY1EUUav.unfreeze.call(addresswhXF2ML, {from: accounts[1]});

		assert.equal(boolfRu4FKm, true)
		await expect(KPLAY1EUUav.transferFrom.call(addresspuv1xVv, addresskpYdb9v, uintjZsgjkh, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYtSZgJqT = await KPLAY.new({from: accounts[2]});
		const addressrq9B2FE = accounts[2]
		const addressZh0FeQo = accounts[0]
		const uintotd07FY = BigInt("1218")
		const address3lrtzb = accounts[3]
		const uint256gDbDhc5 = await KPLAYtSZgJqT.lockCount.call(addressrq9B2FE, {from: accounts[5]});
		const uint256kxnk1J = await KPLAYtSZgJqT.balanceOf.call(addressZh0FeQo, {from: accounts[4]});
		const uint256gRXGGyI = await KPLAYtSZgJqT.currentTime.call({from: accounts[2]});
		const bool2dpblL = await KPLAYtSZgJqT.approve.call(address3lrtzb, uintotd07FY, {from: accounts[1]});

		assert.equal(bool2dpblL, true)
		assert.equal(uint256gDbDhc5, BigInt("0"))
		assert.equal(uint256gRXGGyI, BigInt("1630228305"))
		assert.equal(uint256kxnk1J, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAYk6ibXP = await KPLAY.new({from: accounts[3]});
		const addressdByfmKU = accounts[4]
		const uintXoDCfC8 = BigInt("1913")
		const uintvSD2UP = BigInt("1722")
		const addressZxVgmws = accounts[4]
		const uintylEsC1F = BigInt("145")
		const uintko6T1Y6 = BigInt("1955")
		const addressm7uvLpK = accounts[3]
		await KPLAYk6ibXP.unpause.call({from: accounts[3]});
		const uint256oFeNrzD = await KPLAYk6ibXP.balanceOf.call(addressdByfmKU, {from: accounts[4]});
		const boolN6d6y3V = await KPLAYk6ibXP.transferWithLockAfter.call(addressZxVgmws, uintvSD2UP, uintXoDCfC8, {from: accounts[3]});
		const addressph1iaq6 = await KPLAYk6ibXP.lock.call(addressm7uvLpK, uintko6T1Y6, uintylEsC1F, {from: accounts[5]});

		await expect(KPLAYk6ibXP.unpause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAY1EUUav = await KPLAY.new({from: accounts[3]});
		const uintPKpUzUb = BigInt("1147")
		const addresst6sUe8L = accounts[1]
		const uintRaWJNQ = BigInt("1109")
		const addressuZRhoB = accounts[2]
		const addressbS5ZF8 = accounts[3]
		const addresslLCkFYA = accounts[2]
		const boolfRu4FKm = await KPLAY1EUUav.approve.call(addresst6sUe8L, uintPKpUzUb, {from: "0x0000000000000000000000000000000000000001"});
		const boolLITptf4 = await KPLAY1EUUav.transferFrom.call(addressbS5ZF8, addressuZRhoB, uintRaWJNQ, {from: accounts[2]});
		const uint256bAYdA0i = await KPLAY1EUUav.lockCount.call(addresslLCkFYA, {from: accounts[1]});

		assert.equal(boolfRu4FKm, true)
		await expect(KPLAY1EUUav.transferFrom.call(addressbS5ZF8, addressuZRhoB, uintRaWJNQ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYk6ibXP = await KPLAY.new({from: accounts[3]});
		const uintjofklYF = BigInt("1536")
		const uintRrOtKrQ = BigInt("172")
		const addressrHWYTlm = accounts[3]
		const addressq8p70G3 = accounts[4]
		const uint256KsjM28 = await KPLAYk6ibXP.totalSupply.call({from: accounts[3]});
		const addressVkeJEc = await KPLAYk6ibXP.lock.call(addressrHWYTlm, uintRrOtKrQ, uintjofklYF, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oFeNrzD = await KPLAYk6ibXP.balanceOf.call(addressq8p70G3, {from: accounts[4]});

		assert.equal(uint256KsjM28, BigInt("10000000000000000"))
		await expect(KPLAYk6ibXP.lock.call(addressrHWYTlm, uintRrOtKrQ, uintjofklYF, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYPh3fJaC = await KPLAY.new({from: accounts[4]});
		const uintEw2Set7 = BigInt("817")
		const addressPocjINW = accounts[3]
		const uintDc1043D = BigInt("719")
		const addressEgWOGAR = accounts[3]
		const addressdUad9fu = accounts[3]
		const addressrRRuDDf = accounts[5]
		const addressx9qshRA = await KPLAYPh3fJaC.burn.call(addressPocjINW, uintEw2Set7, {from: accounts[4]});
		const addressc1W6wJn = await KPLAYPh3fJaC.unlock.call(addressEgWOGAR, uintDc1043D, {from: accounts[5]});
		const uint256WUFlok = await KPLAYPh3fJaC.allowance.call(addressrRRuDDf, addressdUad9fu, {from: accounts[4]});

		await expect(KPLAYPh3fJaC.burn.call(addressPocjINW, uintEw2Set7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYk6ibXP = await KPLAY.new({from: accounts[3]});
		const uintJ5pML1M = BigInt("1440")
		const addresso56A7AD = accounts[4]
		const addressxo2pWxy = accounts[6]
		const boolPZ8ueYU = await KPLAYk6ibXP.transfer.call(addresso56A7AD, uintJ5pML1M, {from: accounts[3]});
		const uint256oFeNrzD = await KPLAYk6ibXP.balanceOf.call(addressxo2pWxy, {from: accounts[4]});

		assert.equal(boolPZ8ueYU, true)
		assert.equal(uint256oFeNrzD, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAY657XRX = await KPLAY.new({from: "0x0000000000000000000000000000000000000001"});
		const uintTiIPOEL = BigInt("1568")
		const addresswDdxxNZ = accounts[1]
		const uinty4TtA9X = BigInt("729")
		const addressaRFNdzk = accounts[1]
		const addressv4QhLnp = accounts[3]
		const addressKUHF6Uy = accounts[3]
		await KPLAY657XRX.lockState.call(addresswDdxxNZ, uintTiIPOEL, {from: accounts[1]});
		await KPLAY657XRX.pause.call({from: "0x0000000000000000000000000000000000000001"});
		const addressohQFl0C = await KPLAY657XRX.unlock.call(addressaRFNdzk, uinty4TtA9X, {from: accounts[5]});
		await KPLAY657XRX.pause.call({from: accounts[3]});
		const uint256Zh2ndRW = await KPLAY657XRX.allowance.call(addressKUHF6Uy, addressv4QhLnp, {from: accounts[2]});
	});

	it('test for KPLAY', async () => {
		const KPLAYk6ibXP = await KPLAY.new({from: accounts[3]});
		const addressVBUg8jL = accounts[6]
		const addresssoXbJIT = "0x0000000000000000000000000000000000000001"
		const uint256oFeNrzD = await KPLAYk6ibXP.balanceOf.call(addressVBUg8jL, {from: accounts[4]});
		const addressOD65BQf = await KPLAYk6ibXP.freeze.call(addresssoXbJIT, {from: accounts[3]});

		assert.equal(uint256oFeNrzD, BigInt("0"))
	});

	it('test for KPLAY', async () => {
		const KPLAY1EUUav = await KPLAY.new({from: accounts[3]});
		const addressgXAwrnq = accounts[5]
		const uintUvhLQdj = BigInt("653")
		const addresssjAV1v9 = accounts[1]
		await KPLAY1EUUav.pause.call({from: accounts[3]});
		await KPLAY1EUUav.renounceOwnership.call({from: accounts[1]});
		const addresspwlO2RP = await KPLAY1EUUav.unfreeze.call(addressgXAwrnq, {from: accounts[0]});
		const boolfRu4FKm = await KPLAY1EUUav.approve.call(addresssjAV1v9, uintUvhLQdj, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAY1EUUav.pause.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAY1EUUav = await KPLAY.new({from: accounts[3]});
		const uintfJBqnDv = BigInt("1006")
		const addressSoYC8B = accounts[0]
		const uintAY456Bi = BigInt("678")
		const addressyq80LtU = accounts[1]
		const uintJ4YOStZ = BigInt("1568")
		const addresszwWeqTC = accounts[0]
		const boolQpb9ba8 = await KPLAY1EUUav.mint.call(addressSoYC8B, uintfJBqnDv, {from: accounts[3]});
		const boolfRu4FKm = await KPLAY1EUUav.approve.call(addressyq80LtU, uintAY456Bi, {from: "0x0000000000000000000000000000000000000001"});
		const boolWgzpE5K = await KPLAY1EUUav.decreaseAllowance.call(addresszwWeqTC, uintJ4YOStZ, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolQpb9ba8, true)
		assert.equal(boolfRu4FKm, true)
		await expect(KPLAY1EUUav.decreaseAllowance.call(addresszwWeqTC, uintJ4YOStZ, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYIrm5kQ = await KPLAY.new({from: accounts[1]});
		const uintn8LD0SX = BigInt("824")
		const uintgbHWOBs = BigInt("1736")
		const addressGdyubWw = accounts[3]
		const boolpw0KWW3 = await KPLAYIrm5kQ.transferWithLock.call(addressGdyubWw, uintgbHWOBs, uintn8LD0SX, {from: accounts[1]});
		await KPLAYIrm5kQ.pause.call({from: accounts[2]});

		assert.equal(boolpw0KWW3, true)
		await expect(KPLAYIrm5kQ.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAY1EUUav = await KPLAY.new({from: accounts[3]});
		const uintyvw2pOH = BigInt("757")
		const uintryX2sGv = BigInt("1164")
		const addressD7VRIAV = accounts[4]
		const uintVTgpOig = BigInt("311")
		const addressp5YBWuB = accounts[2]
		const address10uCD1 = await KPLAY1EUUav.lock.call(addressD7VRIAV, uintryX2sGv, uintyvw2pOH, {from: accounts[3]});
		const boolfRu4FKm = await KPLAY1EUUav.approve.call(addressp5YBWuB, uintVTgpOig, {from: "0x0000000000000000000000000000000000000001"});

		await expect(KPLAY1EUUav.lock.call(addressD7VRIAV, uintryX2sGv, uintyvw2pOH, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYk6ibXP = await KPLAY.new({from: accounts[3]});
		const addressutsAx87 = accounts[6]
		const uintnaM1PE = BigInt("1864")
		const addressmTpuoNk = accounts[3]
		const uint256oFeNrzD = await KPLAYk6ibXP.balanceOf.call(addressutsAx87, {from: accounts[4]});
		const addressPzp4zl = await KPLAYk6ibXP.burn.call(addressmTpuoNk, uintnaM1PE, {from: accounts[3]});
		await KPLAYk6ibXP.pause.call({from: accounts[2]});

		assert.equal(uint256oFeNrzD, BigInt("0"))
		await expect(KPLAYk6ibXP.pause.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYk6ibXP = await KPLAY.new({from: accounts[3]});
		const uintdl5WvZ = BigInt("1706")
		const addressQr1KzDH = accounts[0]
		const uintvdglDTz = BigInt("1504")
		const addressBa1MI1H = accounts[0]
		const addressNBQPIw0 = accounts[5]
		const addresss6hPQqR = await KPLAYk6ibXP.unlock.call(addressQr1KzDH, uintdl5WvZ, {from: accounts[3]});
		const addresszWapZK5 = await KPLAYk6ibXP.unlock.call(addressBa1MI1H, uintvdglDTz, {from: "0x0000000000000000000000000000000000000001"});
		const uint256oFeNrzD = await KPLAYk6ibXP.balanceOf.call(addressNBQPIw0, {from: accounts[4]});

		await expect(KPLAYk6ibXP.unlock.call(addressQr1KzDH, uintdl5WvZ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYk6ibXP = await KPLAY.new({from: accounts[3]});
		const uintsxfz6fy = BigInt("267")
		const uintMleAOJF = BigInt("1783")
		const addressLJ65dio = accounts[3]
		const addressvXRcF2s = accounts[5]
		const addressP1WVpC8 = accounts[6]
		const addresspqctWav = await KPLAYk6ibXP.lockAfter.call(addressLJ65dio, uintMleAOJF, uintsxfz6fy, {from: accounts[3]});
		const addressxS4o15d = await KPLAYk6ibXP.transferOwnership.call(addressvXRcF2s, {from: accounts[4]});
		const uint256oFeNrzD = await KPLAYk6ibXP.balanceOf.call(addressP1WVpC8, {from: accounts[4]});

		await expect(KPLAYk6ibXP.transferOwnership.call(addressvXRcF2s, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAY1EUUav = await KPLAY.new({from: accounts[3]});
		const uint2vqGKZ = BigInt("685")
		const addressm0YXIpv = accounts[3]
		const address3kKahH = accounts[5]
		const addressavMcEY = accounts[5]
		const uintiQANbMJ = BigInt("25")
		const addressiH3lQ5K = accounts[3]
		const addressW1KWf1 = accounts[5]
		const boolqGsyVnj = await KPLAY1EUUav.mint.call(addressm0YXIpv, uint2vqGKZ, {from: accounts[3]});
		const addressumNthO5 = await KPLAY1EUUav.transferOwnership.call(address3kKahH, {from: accounts[3]});
		const addressrQAIIVf = await KPLAY1EUUav.freeze.call(addressavMcEY, {from: accounts[4]});
		const boolR8mUX7j = await KPLAY1EUUav.transferFrom.call(addressW1KWf1, addressiH3lQ5K, uintiQANbMJ, {from: accounts[2]});

		assert.equal(boolqGsyVnj, true)
		await expect(KPLAY1EUUav.freeze.call(addressavMcEY, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYk6ibXP = await KPLAY.new({from: accounts[3]});
		const addressoAZNvy = accounts[7]
		await KPLAYk6ibXP.renounceOwnership.call({from: accounts[3]});
		const uint256oFeNrzD = await KPLAYk6ibXP.balanceOf.call(addressoAZNvy, {from: accounts[4]});

		await expect(KPLAYk6ibXP.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for KPLAY', async () => {
		const KPLAYWxVsfZ8 = await KPLAY.new({from: accounts[2]});
		const addresswfLyMir = accounts[2]
		const addressuPVlvMw = accounts[2]
		const uintcUd9fs = BigInt("1372")
		const uintbq4Lz7n = BigInt("1607")
		const addressqN5CvUn = accounts[4]
		const uintlMiNqB2 = BigInt("1636")
		const addressccot0yl = accounts[3]
		const addressq59fzLv = accounts[3]
		const addressU7ruROq = accounts[4]
		const addressaxP8Dyb = accounts[4]
		const uint256bU0jfby = await KPLAYWxVsfZ8.allowance.call(addressuPVlvMw, addresswfLyMir, {from: accounts[1]});
		const boolKSzCE6s = await KPLAYWxVsfZ8.transferWithLockAfter.call(addressqN5CvUn, uintbq4Lz7n, uintcUd9fs, {from: accounts[2]});
		const boolMzfVwf = await KPLAYWxVsfZ8.transferFrom.call(addressq59fzLv, addressccot0yl, uintlMiNqB2, {from: accounts[5]});
		const uint256L7J9o2M = await KPLAYWxVsfZ8.balanceOf.call(addressU7ruROq, {from: accounts[2]});
		const boolgxiGHNp = await KPLAYWxVsfZ8.isFrozen.call(addressaxP8Dyb, {from: accounts[1]});
		await KPLAYWxVsfZ8.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolKSzCE6s, true)
		assert.equal(uint256bU0jfby, BigInt("0"))
		await expect(KPLAYWxVsfZ8.transferFrom.call(addressq59fzLv, addressccot0yl, uintlMiNqB2, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})