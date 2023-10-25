const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnsBFy0NU = await Weedburn.new({from: accounts[4]});
		const uintU5sG07I = BigInt("3")
		const strings4xXxrc = await WeedburnsBFy0NU.name.call({from: accounts[0]});
		const uint256M5gaTFV = await WeedburnsBFy0NU.burn.call(uintU5sG07I, {from: accounts[3]});

		assert.equal(strings4xXxrc, "t.me/burnweed1")
		await expect(WeedburnsBFy0NU.burn.call(uintU5sG07I, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const stringVHMYoNF = "fZ3thRACdDLHPVg8qeZwEqwEKbGOR2Jlcet1eCHY3y1Sh3uOnCvjtfg1Go5vxMm"
		const stringaD68ufA = "uoGmsswePguCiDzYpNDqeGYRdWENifx3o6ciSe72VENYGRd8gVO20vad35L3PJlvpGCibePQYl7YdOpPVwks25z2sItPf"
		const uintO5gRJ5e = BigInt("115")
		const Weedburnc5QaMnI = await Weedburn.new(stringVHMYoNF, stringaD68ufA, uintO5gRJ5e, {from: accounts[0]});
		const uintbFS50SU = BigInt("1179")
		const addressdhNRi0j = "0x0000000000000000000000000000000000000001"
		await Weedburnc5QaMnI.enableDevMode.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256EPf0LaU = await Weedburnc5QaMnI.burn.call(uintbFS50SU, {from: accounts[3]});
		const uint256Zg24Wjk = await Weedburnc5QaMnI.balanceOf.call(addressdhNRi0j, {from: accounts[4]});
	});

	it('test for Weedburn', async () => {
		const WeedburnWxRwnhQ = await Weedburn.new({from: accounts[1]});
		const uintaVfTWLR = BigInt("1076")
		const addressYl6EZDK = accounts[2]
		const addressukynnxK = accounts[3]
		const boolqQK3RPz = await WeedburnWxRwnhQ.approve.call(addressYl6EZDK, uintaVfTWLR, {from: accounts[1]});
		const uint256jiEirYk = await WeedburnWxRwnhQ.balanceOf.call(addressukynnxK, {from: accounts[3]});
		await WeedburnWxRwnhQ.enableLimitMode.call({from: accounts[2]});

		assert.equal(boolqQK3RPz, true)
		assert.equal(uint256jiEirYk, BigInt("0"))
		await expect(WeedburnWxRwnhQ.enableLimitMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnDkz0rYS = await Weedburn.new({from: accounts[0]});
		const uintvTHCQ7 = BigInt("1415")
		const addressc5l7yPw = accounts[4]
		const uintqxvgCiW = BigInt("1223")
		const addressHUDLtxt = accounts[4]
		const uintHuXuSXJ = BigInt("1406")
		const addressQLTLqj9 = accounts[3]
		const boolEcne1qN = await WeedburnDkz0rYS.decreaseAllowance.call(addressc5l7yPw, uintvTHCQ7, {from: accounts[4]});
		const boolCdL0IQu = await WeedburnDkz0rYS.increaseAllowance.call(addressHUDLtxt, uintqxvgCiW, {from: "0x0000000000000000000000000000000000000001"});
		const addresswD0EQvD = await WeedburnDkz0rYS.burnFrom.call(addressQLTLqj9, uintHuXuSXJ, {from: accounts[4]});

		await expect(WeedburnDkz0rYS.decreaseAllowance.call(addressc5l7yPw, uintvTHCQ7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnsBFy0NU = await Weedburn.new({from: accounts[4]});
		const strings4xXxrc = await WeedburnsBFy0NU.name.call({from: accounts[0]});
		await WeedburnsBFy0NU.disableLimitMode.call({from: accounts[2]});

		assert.equal(strings4xXxrc, "t.me/burnweed1")
		await expect(WeedburnsBFy0NU.disableLimitMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnsBFy0NU = await Weedburn.new({from: accounts[4]});
		const uintDc0205z = BigInt("1220")
		const addressSRz8dJ = "0x0000000000000000000000000000000000000001"
		const uintzKBXbD1 = BigInt("1651")
		const address5BV6w6 = accounts[3]
		const uinta4EyBT = BigInt("1009")
		const booldKTxJ94 = await WeedburnsBFy0NU.increaseAllowance.call(addressSRz8dJ, uintDc0205z, {from: accounts[1]});
		const boolpVeZvfk = await WeedburnsBFy0NU.approve.call(address5BV6w6, uintzKBXbD1, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ppWkdQ5 = await WeedburnsBFy0NU.burn.call(uinta4EyBT, {from: accounts[0]});
		const strings4xXxrc = await WeedburnsBFy0NU.name.call({from: accounts[0]});

		assert.equal(booldKTxJ94, true)
		assert.equal(boolpVeZvfk, true)
		await expect(WeedburnsBFy0NU.burn.call(uinta4EyBT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnsBFy0NU = await Weedburn.new({from: accounts[4]});
		const uint7HWWA5 = BigInt("1330")
		const addressZyeMsf9 = accounts[3]
		const uintDGwu8f = BigInt("3")
		const uint256JZsxPx0 = await WeedburnsBFy0NU.totalSupply.call({from: accounts[3]});
		const boolOLYCFFl = await WeedburnsBFy0NU.decreaseAllowance.call(addressZyeMsf9, uint7HWWA5, {from: accounts[0]});
		const strings4xXxrc = await WeedburnsBFy0NU.name.call({from: accounts[0]});
		const uint256M5gaTFV = await WeedburnsBFy0NU.burn.call(uintDGwu8f, {from: accounts[3]});
		await WeedburnsBFy0NU.disableLimitMode.call({from: accounts[1]});

		assert.equal(uint256JZsxPx0, BigInt("100000000000000000000000"))
		await expect(WeedburnsBFy0NU.decreaseAllowance.call(addressZyeMsf9, uint7HWWA5, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnsBFy0NU = await Weedburn.new({from: accounts[4]});
		const strings4xXxrc = await WeedburnsBFy0NU.name.call({from: accounts[0]});
		await WeedburnsBFy0NU.enableDevMode.call({from: accounts[4]});
		await WeedburnsBFy0NU.disableLimitMode.call({from: accounts[0]});

		assert.equal(strings4xXxrc, "t.me/burnweed1")
		await expect(WeedburnsBFy0NU.enableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnsBFy0NU = await Weedburn.new({from: accounts[4]});
		const uintvnNE9z1 = BigInt("1089")
		const addresslTRncN6 = accounts[1]
		const uintB3JpxyA = BigInt("1084")
		const addresswkZIwKq = accounts[1]
		const addressULX7TkE = accounts[2]
		const uintxQ45viD = BigInt("26")
		const boolM98VRVX = await WeedburnsBFy0NU.increaseAllowance.call(addresslTRncN6, uintvnNE9z1, {from: accounts[1]});
		const boolE64BDft = await WeedburnsBFy0NU.transferFrom.call(addressULX7TkE, addresswkZIwKq, uintB3JpxyA, {from: accounts[5]});
		const uint256M5gaTFV = await WeedburnsBFy0NU.burn.call(uintxQ45viD, {from: accounts[3]});

		assert.equal(boolM98VRVX, true)
		await expect(WeedburnsBFy0NU.transferFrom.call(addressULX7TkE, addresswkZIwKq, uintB3JpxyA, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnsBFy0NU = await Weedburn.new({from: accounts[4]});
		const uintgQE5NG = BigInt("0")
		const uintPKtPf4C = BigInt("1792")
		const addressDB3fgxa = accounts[2]
		const addressVVuwgE = accounts[3]
		await WeedburnsBFy0NU.disableDevMode.call({from: accounts[0]});
		const uint256M5gaTFV = await WeedburnsBFy0NU.burn.call(uintgQE5NG, {from: accounts[3]});
		const boolI3nur1 = await WeedburnsBFy0NU.transferFrom.call(addressVVuwgE, addressDB3fgxa, uintPKtPf4C, {from: accounts[5]});

		await expect(WeedburnsBFy0NU.disableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnsBFy0NU = await Weedburn.new({from: accounts[4]});
		const addressp3XLc1 = accounts[3]
		const addressc4HjEFJ = accounts[5]
		const uintb7fePi = BigInt("3")
		const uint256SLkU8K7 = await WeedburnsBFy0NU.allowance.call(addressc4HjEFJ, addressp3XLc1, {from: accounts[4]});
		const uint256M5gaTFV = await WeedburnsBFy0NU.burn.call(uintb7fePi, {from: accounts[3]});

		assert.equal(uint256SLkU8K7, BigInt("0"))
		await expect(WeedburnsBFy0NU.burn.call(uintb7fePi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnsBFy0NU = await Weedburn.new({from: accounts[4]});
		const uintMQhGURm = BigInt("129")
		const addresswKOdrCP = accounts[4]
		const uinttXNHW7A = BigInt("0")
		const addresswBWrmwz = await WeedburnsBFy0NU.burnFrom.call(addresswKOdrCP, uintMQhGURm, {from: accounts[0]});
		const uint256M5gaTFV = await WeedburnsBFy0NU.burn.call(uinttXNHW7A, {from: accounts[3]});

		await expect(WeedburnsBFy0NU.burnFrom.call(addresswKOdrCP, uintMQhGURm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnsBFy0NU = await Weedburn.new({from: accounts[4]});
		const uintJqF1FxQ = BigInt("1551")
		const stringJwqVImj = await WeedburnsBFy0NU.symbol.call({from: accounts[1]});
		const uint256M5gaTFV = await WeedburnsBFy0NU.burn.call(uintJqF1FxQ, {from: accounts[3]});

		assert.equal(stringJwqVImj, "Weedburn")
		await expect(WeedburnsBFy0NU.burn.call(uintJqF1FxQ, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnsBFy0NU = await Weedburn.new({from: accounts[4]});
		const uintCwwTJY7 = BigInt("1016")
		const addresslaLGkr2 = accounts[2]
		const addresst1jgmB1 = accounts[4]
		const uintfQ12Cux = BigInt("1084")
		const addressl64QfBZ = accounts[2]
		const addressKwd75b0 = accounts[2]
		const uint256wmijV9k = await WeedburnsBFy0NU.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolJG399BO = await WeedburnsBFy0NU.transferFrom.call(addresst1jgmB1, addresslaLGkr2, uintCwwTJY7, {from: accounts[2]});
		const boolE64BDft = await WeedburnsBFy0NU.transferFrom.call(addressKwd75b0, addressl64QfBZ, uintfQ12Cux, {from: accounts[5]});

		assert.equal(uint256wmijV9k, BigInt("100000000000000000000000"))
		await expect(WeedburnsBFy0NU.transferFrom.call(addresst1jgmB1, addresslaLGkr2, uintCwwTJY7, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnsBFy0NU = await Weedburn.new({from: accounts[4]});
		const uintVpLjjNU = BigInt("1084")
		const addressmX7OeAb = accounts[1]
		const addressFN47ejF = accounts[2]
		const uint8nJVT3CU = await WeedburnsBFy0NU.decimals.call({from: accounts[4]});
		const boolE64BDft = await WeedburnsBFy0NU.transferFrom.call(addressFN47ejF, addressmX7OeAb, uintVpLjjNU, {from: accounts[5]});

		assert.equal(uint8nJVT3CU, BigInt("18"))
		await expect(WeedburnsBFy0NU.transferFrom.call(addressFN47ejF, addressmX7OeAb, uintVpLjjNU, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnsBFy0NU = await Weedburn.new({from: accounts[4]});
		const uintSHjjsDm = BigInt("1169")
		const addressBujeyH8 = accounts[0]
		const uintVzSSel = BigInt("17")
		const boolfuGSo4m = await WeedburnsBFy0NU.transfer.call(addressBujeyH8, uintSHjjsDm, {from: accounts[4]});
		await WeedburnsBFy0NU.enableLimitMode.call({from: accounts[3]});
		const uint256M5gaTFV = await WeedburnsBFy0NU.burn.call(uintVzSSel, {from: accounts[3]});

		assert.equal(boolfuGSo4m, true)
		await expect(WeedburnsBFy0NU.enableLimitMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnsBFy0NU = await Weedburn.new({from: accounts[4]});
		const uintxBuqlRG = BigInt("859")
		const uintWfmHGdz = BigInt("3")
		const uint32nyZw = BigInt("263")
		const addressEGtY1S2 = accounts[0]
		const addressRaawwHO = accounts[4]
		const uint256TupB6s0 = await WeedburnsBFy0NU.burn.call(uintxBuqlRG, {from: accounts[4]});
		const uint256M5gaTFV = await WeedburnsBFy0NU.burn.call(uintWfmHGdz, {from: accounts[3]});
		const boolg6enexz = await WeedburnsBFy0NU.transferFrom.call(addressRaawwHO, addressEGtY1S2, uint32nyZw, {from: accounts[5]});

		await expect(WeedburnsBFy0NU.burn.call(uintWfmHGdz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnzyIWsEz = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintcwnwdzP = BigInt("1690")
		const addressLwUh8Y5 = accounts[4]
		const uintQmqsxET = BigInt("506")
		const address8ET57d = accounts[3]
		const addressHcOJYYO = accounts[0]
		const boolOwRX1f8 = await WeedburnzyIWsEz.transfer.call(addressLwUh8Y5, uintcwnwdzP, {from: accounts[1]});
		const uint256JCOQd7P = await WeedburnzyIWsEz.totalSupply.call({from: accounts[1]});
		const boolbPpL7HL = await WeedburnzyIWsEz.transferFrom.call(addressHcOJYYO, address8ET57d, uintQmqsxET, {from: accounts[0]});
		await WeedburnzyIWsEz.disableLimitMode.call({from: accounts[5]});
		const uint8znMK2Y8 = await WeedburnzyIWsEz.decimals.call({from: accounts[1]});
	});
})