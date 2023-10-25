const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADRdocBzS = await ZAD.new({from: accounts[3]});
		const addressTV8jiCA = accounts[3]
		const addressKai1xqN = accounts[4]
		const addressze5N0yb = accounts[5]
		const uint8O0w8XoA = await ZADRdocBzS.decimals.call({from: accounts[5]});
		const uint256k1ljh3e = await ZADRdocBzS.allowance.call(addressKai1xqN, addressTV8jiCA, {from: accounts[3]});
		const uint256X6MIOmj = await ZADRdocBzS.balanceOf.call(addressze5N0yb, {from: accounts[2]});

		assert.equal(uint256X6MIOmj, BigInt("0"))
		assert.equal(uint256k1ljh3e, BigInt("0"))
		assert.equal(uint8O0w8XoA, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADj19UaX9 = await ZAD.new({from: accounts[1]});
		const uintMxciNxF = BigInt("647")
		const uintN9hhwK1 = BigInt("955")
		const addressQjlZ3hA = accounts[1]
		const uintzrngyUl = BigInt("359")
		const addressb5QS0Om = accounts[0]
		const addresst5MikK1 = accounts[2]
		const uintqPurUDf = BigInt("785")
		const addressBzRFHqK = accounts[5]
		const addressfLYInrs = accounts[3]
		const uint256JTPVRIT = await ZADj19UaX9._burn.call(uintMxciNxF, {from: accounts[3]});
		const uint8ZYWb7LJ = await ZADj19UaX9.decimals.call({from: accounts[4]});
		const boolOluxUS6 = await ZADj19UaX9.decreaseAllowance.call(addressQjlZ3hA, uintN9hhwK1, {from: accounts[0]});
		const stringNflgxwJ = await ZADj19UaX9.symbol.call({from: accounts[5]});
		const boolyKvre3S = await ZADj19UaX9.transferFrom.call(addresst5MikK1, addressb5QS0Om, uintzrngyUl, {from: accounts[0]});
		const boolJ44sPyo = await ZADj19UaX9.transferFrom.call(addressfLYInrs, addressBzRFHqK, uintqPurUDf, {from: accounts[2]});

		await expect(ZADj19UaX9._burn.call(uintMxciNxF, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADcldZbo = await ZAD.new({from: accounts[4]});
		const addresswnk4l9q = accounts[2]
		const uintAGFWOQb = BigInt("1842")
		const addresst3A0XTA = accounts[0]
		const uint256ioDUNU = await ZADcldZbo.balanceOf.call(addresswnk4l9q, {from: accounts[1]});
		const uint8lqoBZb2 = await ZADcldZbo.decimals.call({from: accounts[0]});
		const stringawRPkgS = await ZADcldZbo.symbol.call({from: accounts[0]});
		const boollNlSvWV = await ZADcldZbo.increaseAllowance.call(addresst3A0XTA, uintAGFWOQb, {from: accounts[1]});

		assert.equal(boollNlSvWV, true)
		assert.equal(stringawRPkgS, "ZAD")
		assert.equal(uint256ioDUNU, BigInt("0"))
		assert.equal(uint8lqoBZb2, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADFmTlqaw = await ZAD.new({from: accounts[3]});
		const uintknbXXLr = BigInt("1862")
		const addressJMUIxxG = accounts[0]
		const uinttaB8gHG = BigInt("850")
		const uint256VuEuNrh = await ZADFmTlqaw.totalSupply.call({from: accounts[1]});
		const boolnyeTgGp = await ZADFmTlqaw.decreaseAllowance.call(addressJMUIxxG, uintknbXXLr, {from: accounts[2]});
		const uint256sbhqXcH = await ZADFmTlqaw._burn.call(uinttaB8gHG, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256VuEuNrh, BigInt("100000000000000000000000000"))
		await expect(ZADFmTlqaw.decreaseAllowance.call(addressJMUIxxG, uintknbXXLr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADYM6MGtk = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintj8BaSLN = BigInt("1979")
		const addressCO8hBh5 = accounts[3]
		const uintDZ60r8t = BigInt("798")
		const addressnN0tePy = accounts[1]
		const addressbyBZl4z = accounts[0]
		const boolD8ID0c3 = await ZADYM6MGtk.decreaseAllowance.call(addressCO8hBh5, uintj8BaSLN, {from: accounts[4]});
		const uint256HzhByvq = await ZADYM6MGtk.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolUfDpOhR = await ZADYM6MGtk.transferFrom.call(addressbyBZl4z, addressnN0tePy, uintDZ60r8t, {from: accounts[4]});
	});

	it('test for ZAD', async () => {
		const ZADIi9Eey2 = await ZAD.new({from: accounts[3]});
		const addressZ1Oq3C = "0x0000000000000000000000000000000000000001"
		const addressMC5MxU = accounts[3]
		const uint6QkbQT = BigInt("1502")
		const addressGSZRdHY = accounts[0]
		const addressmIDDo5 = accounts[1]
		const addressIlo3smP = accounts[0]
		const uinth9dDLUn = BigInt("1736")
		const addressQEC37f = accounts[0]
		const uintIjv8k58 = BigInt("1908")
		const addressQsab54 = accounts[0]
		const uint256AWiCvDX = await ZADIi9Eey2.allowance.call(addressMC5MxU, addressZ1Oq3C, {from: accounts[2]});
		const boolfQ3MS7h = await ZADIi9Eey2.increaseAllowance.call(addressGSZRdHY, uint6QkbQT, {from: accounts[4]});
		const uint256D4bfvlA = await ZADIi9Eey2.allowance.call(addressIlo3smP, addressmIDDo5, {from: "0x0000000000000000000000000000000000000001"});
		const boolIabcXw = await ZADIi9Eey2.transfer.call(addressQEC37f, uinth9dDLUn, {from: accounts[1]});
		const boole9FAam = await ZADIi9Eey2.increaseAllowance.call(addressQsab54, uintIjv8k58, {from: accounts[0]});

		assert.equal(boolfQ3MS7h, true)
		assert.equal(uint256AWiCvDX, BigInt("0"))
		assert.equal(uint256D4bfvlA, BigInt("0"))
		await expect(ZADIi9Eey2.transfer.call(addressQEC37f, uinth9dDLUn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADIi9Eey2 = await ZAD.new({from: accounts[3]});
		const addressG9zasN7 = "0x0000000000000000000000000000000000000001"
		const addressA2irSKj = accounts[3]
		const uintRZ8mplW = BigInt("1486")
		const addresscMdShjM = accounts[0]
		const uintMcQVoEY = BigInt("827")
		const addressD9UJ42s = accounts[0]
		const addressjU69XfR = accounts[1]
		const addressTN5fd7L = accounts[0]
		const uintDwi91b = BigInt("614")
		const addressKoPwJfi = "0x0000000000000000000000000000000000000001"
		const uintjK9oNFB = BigInt("1908")
		const addressKNIX5vo = accounts[0]
		const uint256AWiCvDX = await ZADIi9Eey2.allowance.call(addressA2irSKj, addressG9zasN7, {from: accounts[2]});
		const boolfQ3MS7h = await ZADIi9Eey2.increaseAllowance.call(addresscMdShjM, uintRZ8mplW, {from: accounts[4]});
		const boolci1NYw5 = await ZADIi9Eey2.approve.call(addressD9UJ42s, uintMcQVoEY, {from: accounts[1]});
		const uint256D4bfvlA = await ZADIi9Eey2.allowance.call(addressTN5fd7L, addressjU69XfR, {from: "0x0000000000000000000000000000000000000001"});
		const boold5W6fbf = await ZADIi9Eey2.decreaseAllowance.call(addressKoPwJfi, uintDwi91b, {from: accounts[1]});
		const boole9FAam = await ZADIi9Eey2.increaseAllowance.call(addressKNIX5vo, uintjK9oNFB, {from: accounts[0]});

		assert.equal(boolci1NYw5, true)
		assert.equal(boolfQ3MS7h, true)
		assert.equal(uint256AWiCvDX, BigInt("0"))
		assert.equal(uint256D4bfvlA, BigInt("0"))
		await expect(ZADIi9Eey2.decreaseAllowance.call(addressKoPwJfi, uintDwi91b, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADIi9Eey2 = await ZAD.new({from: accounts[3]});
		const addressPyJgJwl = "0x0000000000000000000000000000000000000001"
		const addressJyAGbl = accounts[3]
		const uintlQh8fVi = BigInt("1800")
		const addressoZMeNV = accounts[0]
		const addressJ80zLde = accounts[4]
		const uintmAUGb0I = BigInt("1502")
		const addressKByHE91 = accounts[0]
		const addresscheeqKD = accounts[1]
		const addresskidHnmL = accounts[0]
		const addressIjKjjXs = accounts[1]
		const uintv3LU8Mi = BigInt("1736")
		const addresss0S0fWt = accounts[1]
		const uintLY7Ad5 = BigInt("1908")
		const addressC2Kxxl6 = accounts[0]
		const uint256AWiCvDX = await ZADIi9Eey2.allowance.call(addressJyAGbl, addressPyJgJwl, {from: accounts[2]});
		const stringQd7LcLC = await ZADIi9Eey2.symbol.call({from: accounts[2]});
		const boolkPquh7d = await ZADIi9Eey2.transferFrom.call(addressJ80zLde, addressoZMeNV, uintlQh8fVi, {from: accounts[3]});
		const boolfQ3MS7h = await ZADIi9Eey2.increaseAllowance.call(addressKByHE91, uintmAUGb0I, {from: accounts[4]});
		const uint256D4bfvlA = await ZADIi9Eey2.allowance.call(addresskidHnmL, addresscheeqKD, {from: "0x0000000000000000000000000000000000000001"});
		const uint256JinzFBn = await ZADIi9Eey2.balanceOf.call(addressIjKjjXs, {from: accounts[2]});
		const boolIabcXw = await ZADIi9Eey2.transfer.call(addresss0S0fWt, uintv3LU8Mi, {from: accounts[1]});
		const boole9FAam = await ZADIi9Eey2.increaseAllowance.call(addressC2Kxxl6, uintLY7Ad5, {from: accounts[0]});

		assert.equal(stringQd7LcLC, "ZAD")
		assert.equal(uint256AWiCvDX, BigInt("0"))
		await expect(ZADIi9Eey2.transferFrom.call(addressJ80zLde, addressoZMeNV, uintlQh8fVi, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADAbKDW77 = await ZAD.new({from: accounts[2]});
		const uintJAML0bE = BigInt("528")
		const addressLcdoogQ = accounts[4]
		const addresskujkclk = accounts[1]
		const stringYxhn83i = await ZADAbKDW77.name.call({from: accounts[1]});
		const boolrsdfbsn = await ZADAbKDW77.transferFrom.call(addresskujkclk, addressLcdoogQ, uintJAML0bE, {from: accounts[4]});
		const uint86alTyx = await ZADAbKDW77.decimals.call({from: accounts[0]});

		assert.equal(stringYxhn83i, "Zadkiel")
		await expect(ZADAbKDW77.transferFrom.call(addresskujkclk, addressLcdoogQ, uintJAML0bE, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})