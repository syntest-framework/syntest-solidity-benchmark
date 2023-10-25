const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADJiLIFC6 = await ZAD.new({from: accounts[0]});
		const uintP23XYNa = BigInt("829")
		const addressRfNa99c = "0x0000000000000000000000000000000000000001"
		const stringe9MnBdZ = await ZADJiLIFC6.symbol.call({from: accounts[2]});
		const uint8G8v1S1I = await ZADJiLIFC6.decimals.call({from: accounts[5]});
		const uint256sRN4pB0 = await ZADJiLIFC6.totalSupply.call({from: accounts[5]});
//		const boolg5x4QYy = await ZADJiLIFC6.decreaseAllowance.call(addressRfNa99c, uintP23XYNa, {from: accounts[5]});

		assert.equal(stringe9MnBdZ, "ZAD")
		assert.equal(uint256sRN4pB0, BigInt("100000000000000000000000000"))
		assert.equal(uint8G8v1S1I, BigInt("18"))
		await expect(ZADJiLIFC6.decreaseAllowance.call(addressRfNa99c, uintP23XYNa, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADRNjoGzE = await ZAD.new({from: accounts[4]});
		const addressmITTTg9 = accounts[0]
		const addresscYU14W6 = accounts[3]
		const uintrO87PQc = BigInt("1314")
		const uintmyuWyk1 = BigInt("1736")
		const addressandh1Rq = accounts[3]
		const uint256nhvVfjv = await ZADRNjoGzE.balanceOf.call(addressmITTTg9, {from: accounts[3]});
		const uint256vp1XCFo = await ZADRNjoGzE.balanceOf.call(addresscYU14W6, {from: accounts[3]});
//		const uint256ieV12AL = await ZADRNjoGzE._burn.call(uintrO87PQc, {from: accounts[2]});
//		const boolWjkht5m = await ZADRNjoGzE.transfer.call(addressandh1Rq, uintmyuWyk1, {from: accounts[2]});

		assert.equal(uint256nhvVfjv, BigInt("0"))
		assert.equal(uint256vp1XCFo, BigInt("0"))
		await expect(ZADRNjoGzE._burn.call(uintrO87PQc, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADNPjSlrA = await ZAD.new({from: accounts[4]});
		const addresskRha1V = accounts[0]
		const address0ReyNe = accounts[2]
		const uintS8JzJk9 = BigInt("1665")
		const addressIhRM31O = accounts[0]
		const uinttzwGPje = BigInt("509")
		const addressrh9YkMN = accounts[4]
		const uintL1Jz8XI = BigInt("866")
		const address0tQpeF = accounts[2]
		const addressYqmn3v = "0x0000000000000000000000000000000000000001"
		const uint256jJfC1uQ = await ZADNPjSlrA.allowance.call(address0ReyNe, addresskRha1V, {from: accounts[3]});
		const boolfSH7iqx = await ZADNPjSlrA.increaseAllowance.call(addressIhRM31O, uintS8JzJk9, {from: accounts[3]});
		const uint8tP2FkX9 = await ZADNPjSlrA.decimals.call({from: accounts[1]});
		const boolF1PzKX = await ZADNPjSlrA.increaseAllowance.call(addressrh9YkMN, uinttzwGPje, {from: accounts[4]});
//		const boolkGYMGr = await ZADNPjSlrA.transferFrom.call(addressYqmn3v, address0tQpeF, uintL1Jz8XI, {from: accounts[5]});

		assert.equal(boolF1PzKX, true)
		assert.equal(boolfSH7iqx, true)
		assert.equal(uint256jJfC1uQ, BigInt("0"))
		assert.equal(uint8tP2FkX9, BigInt("18"))
		await expect(ZADNPjSlrA.transferFrom.call(addressYqmn3v, address0tQpeF, uintL1Jz8XI, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADsbB9reU = await ZAD.new({from: accounts[1]});
		const address3OPThB = accounts[2]
		const addressDLpi7A9 = accounts[1]
		const addressnNGDUeB = accounts[4]
		const uintrMP4kl = BigInt("1905")
		const addressosFw0q = accounts[1]
		const uintOMlb4v3 = BigInt("1306")
		const address2ANm4A = accounts[4]
		const uint256fJ94R0b = await ZADsbB9reU.allowance.call(addressDLpi7A9, address3OPThB, {from: accounts[1]});
		const uint256f1tzygl = await ZADsbB9reU.balanceOf.call(addressnNGDUeB, {from: accounts[4]});
//		const boolO0GirG = await ZADsbB9reU.transfer.call(addressosFw0q, uintrMP4kl, {from: accounts[2]});
//		const boolBdmEdq3 = await ZADsbB9reU.transfer.call(address2ANm4A, uintOMlb4v3, {from: accounts[3]});
//		const uint8wK1VXZN = await ZADsbB9reU.decimals.call({from: accounts[1]});

		assert.equal(uint256f1tzygl, BigInt("0"))
		assert.equal(uint256fJ94R0b, BigInt("0"))
		await expect(ZADsbB9reU.transfer.call(addressosFw0q, uintrMP4kl, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADVPSbn91 = await ZAD.new({from: accounts[0]});
		const addressEZJIkaw = accounts[0]
		const uintdGodrN = BigInt("1772")
		const addresshVquBNF = accounts[1]
		const uint256uBPzhhk = await ZADVPSbn91.balanceOf.call(addressEZJIkaw, {from: accounts[3]});
		const boolh7FOQFG = await ZADVPSbn91.approve.call(addresshVquBNF, uintdGodrN, {from: "0x0000000000000000000000000000000000000001"});
		const stringnLrzO8p = await ZADVPSbn91.symbol.call({from: accounts[0]});

		assert.equal(boolh7FOQFG, true)
		assert.equal(stringnLrzO8p, "ZAD")
		assert.equal(uint256uBPzhhk, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADR1EFwAM = await ZAD.new({from: accounts[4]});
		const addressKGZsjrT = accounts[4]
		const uintLzYKThM = BigInt("356")
		const addressONHidll = accounts[4]
		const uint256TqObxZZ = await ZADR1EFwAM.balanceOf.call(addressKGZsjrT, {from: accounts[0]});
		const boolYebaG1D = await ZADR1EFwAM.increaseAllowance.call(addressONHidll, uintLzYKThM, {from: accounts[4]});
		const stringj7KdUxd = await ZADR1EFwAM.name.call({from: accounts[1]});
		const stringz2l9LvU = await ZADR1EFwAM.symbol.call({from: accounts[0]});

		assert.equal(boolYebaG1D, true)
		assert.equal(stringj7KdUxd, "Zadkiel")
		assert.equal(stringz2l9LvU, "ZAD")
		assert.equal(uint256TqObxZZ, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADiRI0jhC = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintXPRFqPk = BigInt("957")
		const addressgVtzGtz = accounts[4]
		const address7ZBJqk = accounts[1]
		const uintS0zv4Og = BigInt("867")
		const addresszhCJZy0 = accounts[4]
		const addressqjbH7Vx = accounts[2]
		const uintpb5rDcr = BigInt("1076")
		const addressT77Vci5 = accounts[2]
		const boolpGad8l8 = await ZADiRI0jhC.transferFrom.call(address7ZBJqk, addressgVtzGtz, uintXPRFqPk, {from: accounts[5]});
		const stringVI6CW74 = await ZADiRI0jhC.name.call({from: accounts[1]});
		const boolPWC9keK = await ZADiRI0jhC.transferFrom.call(addressqjbH7Vx, addresszhCJZy0, uintS0zv4Og, {from: accounts[4]});
		const bool25Juob = await ZADiRI0jhC.increaseAllowance.call(addressT77Vci5, uintpb5rDcr, {from: "0x0000000000000000000000000000000000000001"});
	});
})