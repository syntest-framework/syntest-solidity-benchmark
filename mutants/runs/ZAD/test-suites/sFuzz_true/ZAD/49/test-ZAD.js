const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADEiyPXcd = await ZAD.new({from: accounts[2]});
		const addressYrl0X7 = accounts[3]
		const addresszsidR4G = accounts[1]
		const addressI2T4bqr = accounts[3]
		const uint256pDSo3Bg = await ZADEiyPXcd.totalSupply.call({from: accounts[0]});
		const uint256EVrnFMN = await ZADEiyPXcd.allowance.call(addresszsidR4G, addressYrl0X7, {from: accounts[2]});
		const uint256yDZlpIH = await ZADEiyPXcd.balanceOf.call(addressI2T4bqr, {from: accounts[1]});

		assert.equal(uint256EVrnFMN, BigInt("0"))
		assert.equal(uint256pDSo3Bg, BigInt("100000000000000000000000000"))
		assert.equal(uint256yDZlpIH, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADKmDy1Kc = await ZAD.new({from: accounts[3]});
		const uintdsx5IPl = BigInt("1489")
		const uintkiHWaL = BigInt("1932")
		const address4zgXvi = accounts[3]
		const uint8eEKGX1X = await ZADKmDy1Kc.decimals.call({from: accounts[4]});
		const uint256ZdZnnR4 = await ZADKmDy1Kc._burn.call(uintdsx5IPl, {from: accounts[4]});
		const boolxFh0cxF = await ZADKmDy1Kc.approve.call(address4zgXvi, uintkiHWaL, {from: accounts[0]});

		assert.equal(uint8eEKGX1X, BigInt("18"))
		await expect(ZADKmDy1Kc._burn.call(uintdsx5IPl, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADMrdZjOY = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const addressZdGGEZe = accounts[0]
		const addressugRF2WY = accounts[4]
		const uintsM9RLGv = BigInt("1469")
		const addressRufAxa = accounts[3]
		const uint8YcVAZA0 = await ZADMrdZjOY.decimals.call({from: accounts[2]});
		const uint8MDeaH8 = await ZADMrdZjOY.decimals.call({from: accounts[3]});
		const uint8zPvF1b6 = await ZADMrdZjOY.decimals.call({from: accounts[2]});
		const uint256NockwES = await ZADMrdZjOY.allowance.call(addressugRF2WY, addressZdGGEZe, {from: accounts[2]});
		const boolZTZ6Z6 = await ZADMrdZjOY.transfer.call(addressRufAxa, uintsM9RLGv, {from: accounts[0]});
	});

	it('test for ZAD', async () => {
		const ZADGEng1rr = await ZAD.new({from: accounts[0]});
		const addressznwl9G = accounts[1]
		const addressGu7dIm = accounts[2]
		const uintaHwc2Ol = BigInt("1598")
		const addressHtj4P9 = "0x0000000000000000000000000000000000000001"
		const uintmryppY = BigInt("382")
		const uintzYPUs9I = BigInt("1287")
		const addressLZ9atX3 = accounts[3]
		const addressvKmnZbW = accounts[1]
		const uint256jthTdz = await ZADGEng1rr.allowance.call(addressGu7dIm, addressznwl9G, {from: accounts[0]});
		const boollNttXcM = await ZADGEng1rr.decreaseAllowance.call(addressHtj4P9, uintaHwc2Ol, {from: accounts[5]});
		const stringlmbm0uD = await ZADGEng1rr.symbol.call({from: accounts[1]});
		const uint256a47mWF4 = await ZADGEng1rr._burn.call(uintmryppY, {from: accounts[1]});
		const boolZbqAV6r = await ZADGEng1rr.transferFrom.call(addressvKmnZbW, addressLZ9atX3, uintzYPUs9I, {from: accounts[1]});

		assert.equal(uint256jthTdz, BigInt("0"))
		await expect(ZADGEng1rr.decreaseAllowance.call(addressHtj4P9, uintaHwc2Ol, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADsNUwu5Y = await ZAD.new({from: accounts[4]});
		const uint256WRNoCQ0 = await ZADsNUwu5Y.totalSupply.call({from: accounts[1]});
		const stringLgPOxkW = await ZADsNUwu5Y.name.call({from: accounts[3]});
		const stringWEc4nTO = await ZADsNUwu5Y.symbol.call({from: accounts[0]});
		const stringBgUMaMz = await ZADsNUwu5Y.symbol.call({from: accounts[4]});

		assert.equal(stringBgUMaMz, "ZAD")
		assert.equal(stringLgPOxkW, "Zadkiel")
		assert.equal(stringWEc4nTO, "ZAD")
		assert.equal(uint256WRNoCQ0, BigInt("100000000000000000000000000"))
	});

	it('test for ZAD', async () => {
		const ZADGbYhTBA = await ZAD.new({from: accounts[2]});
		const uintItbtG11 = BigInt("299")
		const addressUYew908 = accounts[3]
		const addressjwngn07 = accounts[4]
		const addressuDPuVw2 = accounts[4]
		const addressWig5YHW = accounts[0]
		const uintK6IbfZS = BigInt("1967")
		const addressXXlWpMB = accounts[4]
		const uintcfixZFw = BigInt("1284")
		const address5vHaEr = accounts[0]
		const uintfKVRK4u = BigInt("1635")
		const addressVYaSz6J = "0x0000000000000000000000000000000000000001"
		const boolcjssiYG = await ZADGbYhTBA.transferFrom.call(addressjwngn07, addressUYew908, uintItbtG11, {from: accounts[4]});
		const uint256nrPnayk = await ZADGbYhTBA.allowance.call(addressWig5YHW, addressuDPuVw2, {from: accounts[1]});
		const boolOOFN6o = await ZADGbYhTBA.increaseAllowance.call(addressXXlWpMB, uintK6IbfZS, {from: accounts[0]});
		const boolCTmHqa7 = await ZADGbYhTBA.transfer.call(address5vHaEr, uintcfixZFw, {from: accounts[1]});
		const boolTq2ORst = await ZADGbYhTBA.transfer.call(addressVYaSz6J, uintfKVRK4u, {from: accounts[2]});

		await expect(ZADGbYhTBA.transferFrom.call(addressjwngn07, addressUYew908, uintItbtG11, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADN8KFWiJ = await ZAD.new({from: accounts[4]});
		const uintxpsjghQ = BigInt("1228")
		const addressdFbPgKH = accounts[4]
		const uintu1qqa9R = BigInt("1804")
		const addressReRHV36 = accounts[3]
		const uintihfTCl = BigInt("1455")
		const addressPA7kYI = accounts[0]
		const addressWWuBFcd = accounts[2]
		const uintJop1qpH = BigInt("20")
		const addressGIQKHXx = accounts[5]
		const boolr86w6gF = await ZADN8KFWiJ.approve.call(addressdFbPgKH, uintxpsjghQ, {from: accounts[4]});
		const boolqpKhAi = await ZADN8KFWiJ.transfer.call(addressReRHV36, uintu1qqa9R, {from: accounts[2]});
		const boolJpNrbaN = await ZADN8KFWiJ.transferFrom.call(addressWWuBFcd, addressPA7kYI, uintihfTCl, {from: accounts[1]});
		const uint256H0o4p1v = await ZADN8KFWiJ.totalSupply.call({from: accounts[3]});
		const boolsVDz7rW = await ZADN8KFWiJ.approve.call(addressGIQKHXx, uintJop1qpH, {from: accounts[3]});

		assert.equal(boolr86w6gF, true)
		await expect(ZADN8KFWiJ.transfer.call(addressReRHV36, uintu1qqa9R, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADGEng1rr = await ZAD.new({from: accounts[0]});
		const addressycooJ8 = accounts[1]
		const addressIjMTdUj = accounts[2]
		const uintcpsNpY3 = BigInt("800")
		const addressZ26qT7Y = accounts[2]
		const uintZvhfpYH = BigInt("1598")
		const addresscgsiGn = "0x0000000000000000000000000000000000000001"
		const uintsXqNlnY = BigInt("382")
		const uintIdkTzEc = BigInt("1023")
		const addressxtBaAi = accounts[0]
		const uintibA6kvd = BigInt("1287")
		const addressGUHDaHa = accounts[3]
		const addressSzlfKAd = accounts[1]
		const uint256jthTdz = await ZADGEng1rr.allowance.call(addressIjMTdUj, addressycooJ8, {from: accounts[0]});
		const boolFxIGg5O = await ZADGEng1rr.increaseAllowance.call(addressZ26qT7Y, uintcpsNpY3, {from: accounts[1]});
		const uint8RRAfot2 = await ZADGEng1rr.decimals.call({from: accounts[3]});
		const boollNttXcM = await ZADGEng1rr.decreaseAllowance.call(addresscgsiGn, uintZvhfpYH, {from: accounts[5]});
		const uint256a47mWF4 = await ZADGEng1rr._burn.call(uintsXqNlnY, {from: accounts[1]});
		const boolhbFsp1u = await ZADGEng1rr.decreaseAllowance.call(addressxtBaAi, uintIdkTzEc, {from: accounts[0]});
		const boolZbqAV6r = await ZADGEng1rr.transferFrom.call(addressSzlfKAd, addressGUHDaHa, uintibA6kvd, {from: accounts[1]});

		assert.equal(boolFxIGg5O, true)
		assert.equal(uint256jthTdz, BigInt("0"))
		assert.equal(uint8RRAfot2, BigInt("18"))
		await expect(ZADGEng1rr.decreaseAllowance.call(addresscgsiGn, uintZvhfpYH, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADfgJlrHl = await ZAD.new({from: accounts[1]});
		const uintbEyRRfr = BigInt("610")
		const addresshnG8xwI = "0x0000000000000000000000000000000000000000"
		const boolnV8Loaf = await ZADfgJlrHl.transfer.call(addresshnG8xwI, uintbEyRRfr, {from: accounts[2]});

		await expect(ZADfgJlrHl.transfer.call(addresshnG8xwI, uintbEyRRfr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})