const RIT = artifacts.require("RIT");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RIT', (accounts) => {
	it('test for RIT', async () => {
		const RITnZXCYXD = await RIT.new({from: accounts[1]});
		const uints0hzU8 = BigInt("402")
		const addressKH4uVY = accounts[1]
		const addressMfJNOWX = accounts[1]
		const addresspdI6JWi = accounts[3]
		const boolDrUCiw = await RITnZXCYXD.approve.call(addressKH4uVY, uints0hzU8, {from: accounts[4]});
		const uint8qMwTl6N = await RITnZXCYXD.decimals.call({from: accounts[3]});
		const uint8Jp6WUxf = await RITnZXCYXD.decimals.call({from: accounts[3]});
		const uint256QMZTEO3 = await RITnZXCYXD.allowance.call(addresspdI6JWi, addressMfJNOWX, {from: accounts[5]});

		assert.equal(boolDrUCiw, true)
		assert.equal(uint256QMZTEO3, BigInt("0"))
		assert.equal(uint8Jp6WUxf, BigInt("18"))
		assert.equal(uint8qMwTl6N, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITFoOGoKk = await RIT.new({from: accounts[3]});
		const addressda4tNWQ = accounts[5]
		const addresshWqBse = accounts[5]
		const stringUOtyYdi = await RITFoOGoKk.symbol.call({from: accounts[2]});
		const uint8fpaWCG = await RITFoOGoKk.decimals.call({from: accounts[5]});
		const uint256Nip9yvk = await RITFoOGoKk.totalSupply.call({from: accounts[3]});
		const uint256c2387Xl = await RITFoOGoKk.totalSupply.call({from: accounts[4]});
		const uint256PEKNsDg = await RITFoOGoKk.allowance.call(addresshWqBse, addressda4tNWQ, {from: accounts[3]});

		assert.equal(stringUOtyYdi, "RIT 2.0")
		assert.equal(uint256Nip9yvk, BigInt("500000000000000000000000000"))
		assert.equal(uint256PEKNsDg, BigInt("0"))
		assert.equal(uint256c2387Xl, BigInt("500000000000000000000000000"))
		assert.equal(uint8fpaWCG, BigInt("18"))
	});

	it('test for RIT', async () => {
		const RITvRCwL4P = await RIT.new({from: accounts[4]});
		const uintK7U1oDX = BigInt("76")
		const addressbl7LCpi = accounts[3]
		const uintrWrlsFj = BigInt("1715")
		const addressVYc3Dxl = accounts[2]
		const addresssslpFFp = accounts[1]
		const boolsdlsxeR = await RITvRCwL4P.approve.call(addressbl7LCpi, uintK7U1oDX, {from: accounts[1]});
		const boolqhW9ct3 = await RITvRCwL4P.transferFrom.call(addresssslpFFp, addressVYc3Dxl, uintrWrlsFj, {from: accounts[1]});

		assert.equal(boolsdlsxeR, true)
		await expect(RITvRCwL4P.transferFrom.call(addresssslpFFp, addressVYc3Dxl, uintrWrlsFj, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITUKRmcwf = await RIT.new({from: accounts[3]});
		const addressrNGoy1 = accounts[2]
		const addressTJp923L = accounts[3]
		const addressGtc07PD = accounts[4]
		const uintT9HiRf3 = BigInt("1583")
		const addressBSMDMpX = accounts[2]
		const uint256CY4Ya12 = await RITUKRmcwf.balanceOf.call(addressrNGoy1, {from: accounts[4]});
		const uint256TBcCtXr = await RITUKRmcwf.allowance.call(addressGtc07PD, addressTJp923L, {from: accounts[4]});
		const uint256LDn1gG7 = await RITUKRmcwf._burn.call(uintT9HiRf3, {from: accounts[3]});
		const uint256OAdqSB = await RITUKRmcwf.balanceOf.call(addressBSMDMpX, {from: accounts[4]});

		assert.equal(uint256CY4Ya12, BigInt("0"))
		assert.equal(uint256TBcCtXr, BigInt("0"))
		await expect(RITUKRmcwf._burn.call(uintT9HiRf3, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITIrKg6Sj = await RIT.new({from: accounts[1]});
		const addressFK5B2gj = accounts[4]
		const uinttLZUp4B = BigInt("372")
		const addressAhiYhtG = accounts[3]
		const stringXws2AD3 = await RITIrKg6Sj.symbol.call({from: accounts[3]});
		const uint256DyAnAFw = await RITIrKg6Sj.balanceOf.call(addressFK5B2gj, {from: accounts[5]});
		const stringrp8oGxF = await RITIrKg6Sj.name.call({from: accounts[2]});
		const boolYbdsI9j = await RITIrKg6Sj.approve.call(addressAhiYhtG, uinttLZUp4B, {from: accounts[0]});

		assert.equal(boolYbdsI9j, true)
		assert.equal(stringXws2AD3, "RIT 2.0")
		assert.equal(stringrp8oGxF, "Real Estate Investment Token")
		assert.equal(uint256DyAnAFw, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITEQYKlsL = await RIT.new({from: "0x0000000000000000000000000000000000000001"});
		const uintVIMh0xu = BigInt("1726")
		const addressKNlBKzE = accounts[4]
		const uintDpKbRS = BigInt("409")
		const addressslaXpYh = accounts[1]
		const boolBAIXDxS = await RITEQYKlsL.approve.call(addressKNlBKzE, uintVIMh0xu, {from: accounts[2]});
		const uint256EI1P1et = await RITEQYKlsL._burn.call(uintDpKbRS, {from: accounts[2]});
		const uint256Xug0eNp = await RITEQYKlsL.balanceOf.call(addressslaXpYh, {from: accounts[1]});
		const stringDxKqSc8 = await RITEQYKlsL.name.call({from: accounts[1]});
	});

	it('test for RIT', async () => {
		const RIT7rnWMI = await RIT.new({from: accounts[0]});
		const uintFMDwmmo = BigInt("1925")
		const addressHWCxux0 = accounts[5]
		const uintYsNsXHX = BigInt("1137")
		const address2lL3NK = accounts[4]
		const uintBZ3yP8e = BigInt("1141")
		const addressZzLDETC = accounts[5]
		const boolR1nRQh5 = await RIT7rnWMI.approve.call(addressHWCxux0, uintFMDwmmo, {from: accounts[0]});
		const boolUSLgTwA = await RIT7rnWMI.approve.call(address2lL3NK, uintYsNsXHX, {from: accounts[3]});
		const boolq3Qmljk = await RIT7rnWMI.transfer.call(addressZzLDETC, uintBZ3yP8e, {from: accounts[0]});
		const stringTSR6Kd = await RIT7rnWMI.name.call({from: accounts[2]});

		assert.equal(boolR1nRQh5, true)
		assert.equal(boolUSLgTwA, true)
		await expect(RIT7rnWMI.transfer.call(addressZzLDETC, uintBZ3yP8e, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITFoOGoKk = await RIT.new({from: accounts[3]});
		const addressEomNEd1 = "0x0000000000000000000000000000000000000001"
		const addressJayMReq = accounts[0]
		const uintNjb4xbk = BigInt("2011")
		const addressOvozDIf = accounts[1]
		const addressIUM67s9 = accounts[5]
		const addressJdDs1nh = accounts[5]
		const stringUOtyYdi = await RITFoOGoKk.symbol.call({from: accounts[2]});
		const uint2561K2O8N = await RITFoOGoKk.allowance.call(addressJayMReq, addressEomNEd1, {from: "0x0000000000000000000000000000000000000001"});
		const uint8fpaWCG = await RITFoOGoKk.decimals.call({from: accounts[5]});
		const uint256Nip9yvk = await RITFoOGoKk.totalSupply.call({from: accounts[3]});
		const boolDW9KMHB = await RITFoOGoKk.decreaseAllowance.call(addressOvozDIf, uintNjb4xbk, {from: accounts[3]});
		const uint256c2387Xl = await RITFoOGoKk.totalSupply.call({from: accounts[4]});
		const uint256PEKNsDg = await RITFoOGoKk.allowance.call(addressJdDs1nh, addressIUM67s9, {from: accounts[3]});

		assert.equal(stringUOtyYdi, "RIT 2.0")
		assert.equal(uint2561K2O8N, BigInt("0"))
		assert.equal(uint256Nip9yvk, BigInt("500000000000000000000000000"))
		assert.equal(uint8fpaWCG, BigInt("18"))
		await expect(RITFoOGoKk.decreaseAllowance.call(addressOvozDIf, uintNjb4xbk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RIT', async () => {
		const RITIrKg6Sj = await RIT.new({from: accounts[1]});
		const addresstaemja6 = accounts[4]
		const uintTblD4DB = BigInt("243")
		const addressvRUtmhJ = accounts[2]
		const addressRouEEC6 = accounts[0]
		const address20svWO = accounts[4]
		const uintlm6486t = BigInt("372")
		const addressO0beBf = accounts[3]
		const stringXws2AD3 = await RITIrKg6Sj.symbol.call({from: accounts[3]});
		const uint256DyAnAFw = await RITIrKg6Sj.balanceOf.call(addresstaemja6, {from: accounts[5]});
		const boolH8XnskP = await RITIrKg6Sj.increaseAllowance.call(addressvRUtmhJ, uintTblD4DB, {from: accounts[2]});
		const uint256dgx81Hg = await RITIrKg6Sj.allowance.call(address20svWO, addressRouEEC6, {from: accounts[1]});
		const stringrp8oGxF = await RITIrKg6Sj.name.call({from: accounts[2]});
		const boolYbdsI9j = await RITIrKg6Sj.approve.call(addressO0beBf, uintlm6486t, {from: accounts[0]});

		assert.equal(boolH8XnskP, true)
		assert.equal(boolYbdsI9j, true)
		assert.equal(stringXws2AD3, "RIT 2.0")
		assert.equal(stringrp8oGxF, "Real Estate Investment Token")
		assert.equal(uint256DyAnAFw, BigInt("0"))
		assert.equal(uint256dgx81Hg, BigInt("0"))
	});

	it('test for RIT', async () => {
		const RITL3eMy4F = await RIT.new({from: accounts[0]});
		const addressjaVOzLq = accounts[3]
		const addressf50tXTT = accounts[4]
		const addressv6L5ak = accounts[5]
		const addressGA4cVJl = accounts[0]
		const uintHWxRh0u = BigInt("1397")
		const addressK7QdV6M = accounts[1]
		const addressnVvDK3X = "0x0000000000000000000000000000000000000000"
		const uint8XHzO9W9 = await RITL3eMy4F.decimals.call({from: accounts[5]});
		const uint256nvYR5hG = await RITL3eMy4F.allowance.call(addressf50tXTT, addressjaVOzLq, {from: accounts[1]});
		const stringndCpGEL = await RITL3eMy4F.symbol.call({from: accounts[3]});
		const uint256psbkWd = await RITL3eMy4F.allowance.call(addressGA4cVJl, addressv6L5ak, {from: accounts[4]});
		const stringFcW6bD4 = await RITL3eMy4F.symbol.call({from: accounts[0]});
		const booltzDOnct = await RITL3eMy4F.transferFrom.call(addressnVvDK3X, addressK7QdV6M, uintHWxRh0u, {from: accounts[1]});
		const stringewWA9G = await RITL3eMy4F.symbol.call({from: accounts[2]});

		assert.equal(stringFcW6bD4, "RIT 2.0")
		assert.equal(stringndCpGEL, "RIT 2.0")
		assert.equal(uint256nvYR5hG, BigInt("0"))
		assert.equal(uint256psbkWd, BigInt("0"))
		assert.equal(uint8XHzO9W9, BigInt("18"))
		await expect(RITL3eMy4F.transferFrom.call(addressnVvDK3X, addressK7QdV6M, uintHWxRh0u, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})