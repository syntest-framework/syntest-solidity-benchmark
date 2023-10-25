const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const stringeCujY3r = "23MCv"
		const stringo2mTJ5 = "jMFljo2BChxGj"
		const uint9AymGg = BigInt("144")
		const WeedburnowtuBfr = await Weedburn.new(stringeCujY3r, stringo2mTJ5, uint9AymGg, {from: accounts[3]});
		await WeedburnowtuBfr.disableLimitMode.call({from: accounts[2]});
		await WeedburnowtuBfr.enableDevMode.call({from: accounts[4]});
	});

	it('test for Weedburn', async () => {
		const WeedburnLEhx5eD = await Weedburn.new({from: accounts[3]});
		const stringYS5zDNk = await WeedburnLEhx5eD.symbol.call({from: accounts[3]});
//		await WeedburnLEhx5eD.disableLimitMode.call({from: accounts[3]});
//		await WeedburnLEhx5eD.enableDevMode.call({from: accounts[1]});
//		await WeedburnLEhx5eD.enableDevMode.call({from: accounts[4]});
//		await WeedburnLEhx5eD.disableLimitMode.call({from: accounts[2]});

		assert.equal(stringYS5zDNk, "Weedburn")
		await expect(WeedburnLEhx5eD.disableLimitMode.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJT2US8t = await Weedburn.new({from: accounts[1]});
		const uintR9Uf7mt = BigInt("542")
		const addressKSNTw43 = "0x0000000000000000000000000000000000000001"
		const addressslK9rBP = accounts[2]
		const addressy1yqyO5 = accounts[5]
		const booldGi8jeX = await WeedburnJT2US8t.increaseAllowance.call(addressKSNTw43, uintR9Uf7mt, {from: accounts[0]});
//		await WeedburnJT2US8t.disableDevMode.call({from: accounts[2]});
//		await WeedburnJT2US8t.enableDevMode.call({from: accounts[1]});
//		const uint256o6CQJR = await WeedburnJT2US8t.allowance.call(addressy1yqyO5, addressslK9rBP, {from: accounts[4]});

		assert.equal(booldGi8jeX, true)
		await expect(WeedburnJT2US8t.disableDevMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnMeo2kk = await Weedburn.new({from: accounts[1]});
		const uint0Q71aA = BigInt("976")
		const addressUMxGvO2 = accounts[3]
		const addresscxrWIsx = accounts[5]
		const uintospZeho = BigInt("1254")
		const addressmxxIa1q = accounts[1]
//		const booljj0kvS5 = await WeedburnMeo2kk.transferFrom.call(addresscxrWIsx, addressUMxGvO2, uint0Q71aA, {from: accounts[0]});
//		const boolK6sXuyh = await WeedburnMeo2kk.decreaseAllowance.call(addressmxxIa1q, uintospZeho, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnMeo2kk.transferFrom.call(addresscxrWIsx, addressUMxGvO2, uint0Q71aA, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnciAARvR = await Weedburn.new({from: accounts[4]});
		const uintEN6xhlD = BigInt("1756")
		const addressG6uio0a = accounts[3]
		const uintDF88bfi = BigInt("687")
		const addressVVELfgJ = accounts[4]
//		const booleeDi10M = await WeedburnciAARvR.transfer.call(addressG6uio0a, uintEN6xhlD, {from: "0x0000000000000000000000000000000000000001"});
//		const uint8x1B9v0e = await WeedburnciAARvR.decimals.call({from: accounts[0]});
//		const boolthDhw5b = await WeedburnciAARvR.increaseAllowance.call(addressVVELfgJ, uintDF88bfi, {from: accounts[2]});
//		await WeedburnciAARvR.disableLimitMode.call({from: accounts[4]});

		await expect(WeedburnciAARvR.transfer.call(addressG6uio0a, uintEN6xhlD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnG9OcmzM = await Weedburn.new({from: accounts[4]});
		const uintvhbB5wu = BigInt("628")
		const addressmm0MIXd = accounts[2]
		const uintEn5FV3d = BigInt("968")
		const addressypB7Gnz = accounts[0]
		const boolM91N8tI = await WeedburnG9OcmzM.increaseAllowance.call(addressmm0MIXd, uintvhbB5wu, {from: accounts[5]});
		const uint256oxMe2IJ = await WeedburnG9OcmzM.totalSupply.call({from: accounts[4]});
		const boolV5gb0XC = await WeedburnG9OcmzM.approve.call(addressypB7Gnz, uintEn5FV3d, {from: accounts[3]});

		assert.equal(boolM91N8tI, true)
		assert.equal(boolV5gb0XC, true)
		assert.equal(uint256oxMe2IJ, BigInt("100000000000000000000000"))
	});

	it('test for Weedburn', async () => {
		const WeedburnMeo2kk = await Weedburn.new({from: accounts[1]});
		const uintyx07N1W = BigInt("1254")
		const addresslANaJPR = accounts[2]
//		const boolK6sXuyh = await WeedburnMeo2kk.decreaseAllowance.call(addresslANaJPR, uintyx07N1W, {from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnMeo2kk.decreaseAllowance.call(addresslANaJPR, uintyx07N1W, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnmDiFOEW = await Weedburn.new({from: accounts[2]});
		const uintwDEG9Jb = BigInt("969")
		const addressrKH8YsT = accounts[2]
//		const addressZXxViQp = await WeedburnmDiFOEW.burnFrom.call(addressrKH8YsT, uintwDEG9Jb, {from: accounts[3]});
//		await WeedburnmDiFOEW.disableLimitMode.call({from: accounts[2]});
//		await WeedburnmDiFOEW.enableLimitMode.call({from: accounts[5]});
//		await WeedburnmDiFOEW.disableLimitMode.call({from: accounts[5]});

		await expect(WeedburnmDiFOEW.burnFrom.call(addressrKH8YsT, uintwDEG9Jb, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJEeLa4G = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintSVeoTsO = BigInt("17")
		const addressSuO1LTf = "0x0000000000000000000000000000000000000001"
		const addressqQVVsl = await WeedburnJEeLa4G.burnFrom.call(addressSuO1LTf, uintSVeoTsO, {from: accounts[0]});
		await WeedburnJEeLa4G.disableLimitMode.call({from: accounts[1]});
		await WeedburnJEeLa4G.enableDevMode.call({from: accounts[3]});
	});

	it('test for Weedburn', async () => {
		const Weedburnvr42Sbr = await Weedburn.new({from: accounts[0]});
		const address2RqZDn = "0x0000000000000000000000000000000000000001"
		const uintteeYp7 = BigInt("1365")
		const addressZwnQfDs = accounts[2]
		const uintUTl7ZBr = BigInt("463")
		const uintlulo3qM = BigInt("145")
		const addressJdtWjvX = accounts[0]
		const uint256xjoE5oi = await Weedburnvr42Sbr.balanceOf.call(address2RqZDn, {from: accounts[4]});
//		const boolTPioNQv = await Weedburnvr42Sbr.transfer.call(addressZwnQfDs, uintteeYp7, {from: accounts[4]});
//		const uint256jPQeT3N = await Weedburnvr42Sbr.burn.call(uintUTl7ZBr, {from: accounts[5]});
//		const stringkX32cOL = await Weedburnvr42Sbr.symbol.call({from: accounts[2]});
//		const boolYqkkVII = await Weedburnvr42Sbr.transfer.call(addressJdtWjvX, uintlulo3qM, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256xjoE5oi, BigInt("0"))
		await expect(Weedburnvr42Sbr.transfer.call(addressZwnQfDs, uintteeYp7, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnJiAQPmA = await Weedburn.new({from: accounts[2]});
		const addressqjg45mT = accounts[3]
		const addressNqflZ2 = accounts[3]
		const addressXU1cVTT = accounts[1]
		const addressAiyBvTc = accounts[1]
		const uint256z4fvx5y = await WeedburnJiAQPmA.balanceOf.call(addressqjg45mT, {from: accounts[5]});
		const uint256FbRTQ8z = await WeedburnJiAQPmA.allowance.call(addressXU1cVTT, addressNqflZ2, {from: accounts[1]});
		const uint256EyTFs2O = await WeedburnJiAQPmA.balanceOf.call(addressAiyBvTc, {from: accounts[0]});
//		await WeedburnJiAQPmA.enableDevMode.call({from: accounts[0]});

		assert.equal(uint256EyTFs2O, BigInt("0"))
		assert.equal(uint256FbRTQ8z, BigInt("0"))
		assert.equal(uint256z4fvx5y, BigInt("0"))
		await expect(WeedburnJiAQPmA.enableDevMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburnl609Z66 = await Weedburn.new({from: accounts[3]});
		const uint6bSVEg = BigInt("1167")
		const addressrwBCoz0 = accounts[0]
		const addressBN4CNfR = accounts[4]
		const uintrpKdTUu = BigInt("1659")
		const addressR8H90hU = accounts[1]
		const uintBdon8eA = BigInt("1996")
		const addressELgSmsw = accounts[0]
		const addressFr3QQWH = accounts[2]
		const uintIxyUMFy = BigInt("1489")
		const addressgq37z7 = accounts[4]
		const uint256ztxieqF = await Weedburnl609Z66.burn.call(uint6bSVEg, {from: accounts[3]});
		const uint256OXWgDVY = await Weedburnl609Z66.allowance.call(addressBN4CNfR, addressrwBCoz0, {from: accounts[2]});
		const uint256kUI3xEC = await Weedburnl609Z66.totalSupply.call({from: accounts[2]});
//		const addressMiwU60p = await Weedburnl609Z66.burnFrom.call(addressR8H90hU, uintrpKdTUu, {from: accounts[3]});
//		const boolQJqEuZD = await Weedburnl609Z66.transferFrom.call(addressFr3QQWH, addressELgSmsw, uintBdon8eA, {from: accounts[4]});
//		const boolvy9r5Ib = await Weedburnl609Z66.increaseAllowance.call(addressgq37z7, uintIxyUMFy, {from: accounts[2]});

		assert.equal(uint256OXWgDVY, BigInt("0"))
		assert.equal(uint256kUI3xEC, BigInt("100000000000000000000000"))
		await expect(Weedburnl609Z66.burnFrom.call(addressR8H90hU, uintrpKdTUu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnrAnE6b = await Weedburn.new({from: accounts[2]});
		const uintVZ2eHzI = BigInt("693")
		const addressAt6kxtj = accounts[1]
		const stringgyb85jt = await WeedburnrAnE6b.name.call({from: accounts[4]});
		const uint256N6f5tHC = await WeedburnrAnE6b.totalSupply.call({from: accounts[3]});
		const stringYmlxOxh = await WeedburnrAnE6b.symbol.call({from: accounts[4]});
//		const boolorUZWlH = await WeedburnrAnE6b.transfer.call(addressAt6kxtj, uintVZ2eHzI, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringYmlxOxh, "Weedburn")
		assert.equal(stringgyb85jt, "t.me/burnweed1")
		assert.equal(uint256N6f5tHC, BigInt("100000000000000000000000"))
		await expect(WeedburnrAnE6b.transfer.call(addressAt6kxtj, uintVZ2eHzI, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnAbAZtJS = await Weedburn.new({from: accounts[0]});
		const addressUSNFy32 = accounts[3]
		const addressf0KRdpQ = accounts[0]
		const addressiy5DSsK = accounts[1]
		const addressOLIEnFE = accounts[3]
		const addressG6ep5DD = accounts[0]
		const addressua9SqqF = accounts[4]
		const uint256aoh5jEb = await WeedburnAbAZtJS.allowance.call(addressf0KRdpQ, addressUSNFy32, {from: "0x0000000000000000000000000000000000000001"});
		const uint256avfx4lL = await WeedburnAbAZtJS.allowance.call(addressOLIEnFE, addressiy5DSsK, {from: accounts[4]});
//		await WeedburnAbAZtJS.enableLimitMode.call({from: accounts[2]});
//		const uint256bIHuNHe = await WeedburnAbAZtJS.allowance.call(addressua9SqqF, addressG6ep5DD, {from: accounts[1]});
//		await WeedburnAbAZtJS.disableLimitMode.call({from: accounts[5]});

		assert.equal(uint256aoh5jEb, BigInt("0"))
		assert.equal(uint256avfx4lL, BigInt("0"))
		await expect(WeedburnAbAZtJS.enableLimitMode.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const Weedburno8rBG5r = await Weedburn.new({from: accounts[3]});
		const uintDBW1Fwe = BigInt("1336")
		const addresscDGJ3k3 = accounts[1]
		const booluhieUZ1 = await Weedburno8rBG5r.transfer.call(addresscDGJ3k3, uintDBW1Fwe, {from: accounts[3]});
		const stringg8oBSuE = await Weedburno8rBG5r.name.call({from: accounts[3]});

		assert.equal(booluhieUZ1, true)
		assert.equal(stringg8oBSuE, "t.me/burnweed1")
	});

	it('test for Weedburn', async () => {
		const WeedburnhCXYL9m = await Weedburn.new({from: accounts[5]});
		const uint2n0P6V = BigInt("1061")
		const addressFOH9fJ9 = accounts[4]
		const uint2oYX6r = BigInt("1767")
		const uintnUxF9x = BigInt("1456")
		const addressve95ujl = "0x0000000000000000000000000000000000000001"
		const uint8lsRkGxp = await WeedburnhCXYL9m.decimals.call({from: accounts[0]});
		const boolsAo5Io = await WeedburnhCXYL9m.approve.call(addressFOH9fJ9, uint2n0P6V, {from: accounts[0]});
//		const uint256xHwOPMi = await WeedburnhCXYL9m.burn.call(uint2oYX6r, {from: accounts[2]});
//		await WeedburnhCXYL9m.enableDevMode.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressP9TgMXt = await WeedburnhCXYL9m.burnFrom.call(addressve95ujl, uintnUxF9x, {from: accounts[1]});
//		await WeedburnhCXYL9m.disableLimitMode.call({from: accounts[0]});

		assert.equal(boolsAo5Io, true)
		assert.equal(uint8lsRkGxp, BigInt("18"))
		await expect(WeedburnhCXYL9m.burn.call(uint2oYX6r, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})