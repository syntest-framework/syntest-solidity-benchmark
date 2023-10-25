const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADDHrmjGM = await ZAD.new({from: accounts[4]});
		const uintYaGWsi = BigInt("1023")
		const addressOEQ3TYM = accounts[0]
		const uintoldAyb = BigInt("1187")
		const addressR8stm01 = accounts[1]
		const addressxWN1ABQ = accounts[5]
		const uintYLiTHB4 = BigInt("1406")
		const addressuZcLpaR = accounts[5]
		const uintQWyIxHB = BigInt("2031")
		const addressHNbVQnh = accounts[2]
		const uintsqySfxU = BigInt("1599")
		const addressS3hU9s = accounts[4]
		const addressRq9cOHL = accounts[1]
//		const boolKQfzLEv = await ZADDHrmjGM.transfer.call(addressOEQ3TYM, uintYaGWsi, {from: accounts[2]});
//		const boolyCfiDOP = await ZADDHrmjGM.transferFrom.call(addressxWN1ABQ, addressR8stm01, uintoldAyb, {from: accounts[4]});
//		const boolBs3HSdg = await ZADDHrmjGM.decreaseAllowance.call(addressuZcLpaR, uintYLiTHB4, {from: accounts[2]});
//		const boolAuo72oo = await ZADDHrmjGM.decreaseAllowance.call(addressHNbVQnh, uintQWyIxHB, {from: accounts[4]});
//		const booldUfJewr = await ZADDHrmjGM.transferFrom.call(addressRq9cOHL, addressS3hU9s, uintsqySfxU, {from: accounts[4]});

		await expect(ZADDHrmjGM.transfer.call(addressOEQ3TYM, uintYaGWsi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADZAAX0Ha = await ZAD.new({from: accounts[1]});
		const uintUFkG3xM = BigInt("93")
		const addressZpL3hM = accounts[2]
		const uintQ1A9CG = BigInt("243")
		const addressWqpyemS = accounts[2]
		const boolqmeWsy = await ZADZAAX0Ha.increaseAllowance.call(addressZpL3hM, uintUFkG3xM, {from: accounts[1]});
		const stringuFx5OdP = await ZADZAAX0Ha.symbol.call({from: accounts[3]});
//		const boolc6wXY8P = await ZADZAAX0Ha.transfer.call(addressWqpyemS, uintQ1A9CG, {from: accounts[1]});

		assert.equal(boolqmeWsy, true)
		assert.equal(stringuFx5OdP, "ZAD")
		await expect(ZADZAAX0Ha.transfer.call(addressWqpyemS, uintQ1A9CG, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADyleb9GC = await ZAD.new({from: accounts[1]});
		const address0GpJLk = accounts[0]
		const addressq2D6nng = accounts[1]
		const uint256YD87VkO = await ZADyleb9GC.allowance.call(addressq2D6nng, address0GpJLk, {from: accounts[4]});
		const stringfYNifYX = await ZADyleb9GC.symbol.call({from: accounts[1]});
		const uint8uvjWeR = await ZADyleb9GC.decimals.call({from: accounts[0]});
		const uint256wk98JGp = await ZADyleb9GC.totalSupply.call({from: accounts[4]});

		assert.equal(stringfYNifYX, "ZAD")
		assert.equal(uint256YD87VkO, BigInt("0"))
		assert.equal(uint256wk98JGp, BigInt("100000000000000000000000000"))
		assert.equal(uint8uvjWeR, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADAOr1YZr = await ZAD.new({from: accounts[0]});
		const uintFosOrHM = BigInt("1064")
		const addressp8AAfkn = accounts[0]
		const uintWMD2zUy = BigInt("972")
		const addressbUnFTp1 = accounts[3]
		const uintpJV0ml8 = BigInt("1748")
		const addresskkwvxQp = accounts[2]
		const uintJu72EZn = BigInt("1329")
		const addressFB7Nbxq = accounts[4]
//		const boolOVjazd6 = await ZADAOr1YZr.decreaseAllowance.call(addressp8AAfkn, uintFosOrHM, {from: accounts[2]});
//		const boolYN0NeOh = await ZADAOr1YZr.transfer.call(addressbUnFTp1, uintWMD2zUy, {from: accounts[3]});
//		const stringkMOkXEh = await ZADAOr1YZr.symbol.call({from: accounts[2]});
//		const boolmebfYQR = await ZADAOr1YZr.transfer.call(addresskkwvxQp, uintpJV0ml8, {from: accounts[1]});
//		const boolTVkVmHf = await ZADAOr1YZr.decreaseAllowance.call(addressFB7Nbxq, uintJu72EZn, {from: accounts[4]});

		await expect(ZADAOr1YZr.decreaseAllowance.call(addressp8AAfkn, uintFosOrHM, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADCtKGRgY = await ZAD.new({from: accounts[3]});
		const addressVu1T60f = "0x0000000000000000000000000000000000000001"
		const addressRewBDSN = accounts[4]
		const uintRt9VJwm = BigInt("1168")
		const addresspry0v5R = accounts[3]
		const stringoZuLbUu = await ZADCtKGRgY.symbol.call({from: accounts[1]});
		const uint256OiTJIiR = await ZADCtKGRgY.balanceOf.call(addressVu1T60f, {from: accounts[5]});
		const uint256cvWZRKt = await ZADCtKGRgY.balanceOf.call(addressRewBDSN, {from: "0x0000000000000000000000000000000000000001"});
//		const boolGTMSScS = await ZADCtKGRgY.transfer.call(addresspry0v5R, uintRt9VJwm, {from: accounts[1]});
//		const stringi7wz50g = await ZADCtKGRgY.symbol.call({from: accounts[3]});
//		const stringtiJxTp = await ZADCtKGRgY.symbol.call({from: accounts[4]});

		assert.equal(stringoZuLbUu, "ZAD")
		assert.equal(uint256OiTJIiR, BigInt("0"))
		assert.equal(uint256cvWZRKt, BigInt("0"))
		await expect(ZADCtKGRgY.transfer.call(addresspry0v5R, uintRt9VJwm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADyMM5Zn = await ZAD.new({from: accounts[2]});
		const addressmgTTLpi = accounts[1]
		const addressu9iAPn = accounts[3]
		const uintphv5RqM = BigInt("1919")
		const addressV0VMNqL = accounts[0]
		const uintqAmafaq = BigInt("1299")
		const addressbR8ogxl = accounts[3]
		const uint256ubhLoBL = await ZADyMM5Zn.balanceOf.call(addressmgTTLpi, {from: accounts[1]});
		const uint256UeEHqn3 = await ZADyMM5Zn.balanceOf.call(addressu9iAPn, {from: accounts[4]});
		const boolcVmH2sv = await ZADyMM5Zn.increaseAllowance.call(addressV0VMNqL, uintphv5RqM, {from: accounts[5]});
		const boolsFk8fOI = await ZADyMM5Zn.approve.call(addressbR8ogxl, uintqAmafaq, {from: accounts[5]});

		assert.equal(boolcVmH2sv, true)
		assert.equal(boolsFk8fOI, true)
		assert.equal(uint256UeEHqn3, BigInt("0"))
		assert.equal(uint256ubhLoBL, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADnjabXjo = await ZAD.new({from: accounts[3]});
		const string3TzGbA = await ZADnjabXjo.name.call({from: accounts[1]});
		const uint256qsS3xFW = await ZADnjabXjo.totalSupply.call({from: accounts[5]});

		assert.equal(string3TzGbA, "Zadkiel")
		assert.equal(uint256qsS3xFW, BigInt("100000000000000000000000000"))
	});

	it('test for ZAD', async () => {
		const ZADrTB0wVP = await ZAD.new({from: accounts[0]});
		const uinthFEO72p = BigInt("1036")
		const addresssy4HaoU = accounts[4]
		const addressvY0moJN = accounts[4]
		const uintW6e2kfu = BigInt("1718")
		const addressA4UUySj = accounts[3]
		const uintogSrq3i = BigInt("321")
		const addressidkQ7bj = accounts[0]
		const addressdUMMwj8 = "0x0000000000000000000000000000000000000001"
//		const boolQxICzX4 = await ZADrTB0wVP.transferFrom.call(addressvY0moJN, addresssy4HaoU, uinthFEO72p, {from: "0x0000000000000000000000000000000000000001"});
//		const stringAOhHILt = await ZADrTB0wVP.symbol.call({from: accounts[3]});
//		const stringTgbfgGZ = await ZADrTB0wVP.symbol.call({from: accounts[0]});
//		const boolH9KgJJ5 = await ZADrTB0wVP.approve.call(addressA4UUySj, uintW6e2kfu, {from: accounts[5]});
//		const boolATHo44N = await ZADrTB0wVP.increaseAllowance.call(addressidkQ7bj, uintogSrq3i, {from: accounts[3]});
//		const uint256xPUT2w = await ZADrTB0wVP.balanceOf.call(addressdUMMwj8, {from: accounts[5]});

		await expect(ZADrTB0wVP.transferFrom.call(addressvY0moJN, addresssy4HaoU, uinthFEO72p, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADgEeC4I0 = await ZAD.new({from: accounts[0]});
		const uintyhZv06s = BigInt("112")
		const uinteyEkWJE = BigInt("1546")
		const addressuaHyu8 = accounts[5]
		const address0Xe5hb = accounts[1]
		const addressnExsHCr = accounts[0]
//		const uint256VK9qAp7 = await ZADgEeC4I0._burn.call(uintyhZv06s, {from: accounts[1]});
//		const booldQA3Wvq = await ZADgEeC4I0.increaseAllowance.call(addressuaHyu8, uinteyEkWJE, {from: accounts[4]});
//		const uint256hEmFvZ = await ZADgEeC4I0.allowance.call(addressnExsHCr, address0Xe5hb, {from: accounts[3]});
//		const uint256lj9Ng6 = await ZADgEeC4I0.totalSupply.call({from: accounts[0]});

		await expect(ZADgEeC4I0._burn.call(uintyhZv06s, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADZ0jcRV = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const stringIHZau3O = await ZADZ0jcRV.name.call({from: accounts[1]});
		const uint8a7VuAX6 = await ZADZ0jcRV.decimals.call({from: accounts[5]});
		const uint256vZTRtwd = await ZADZ0jcRV.totalSupply.call({from: accounts[1]});
	});
})