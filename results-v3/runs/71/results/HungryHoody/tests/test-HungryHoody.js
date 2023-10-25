const HungryHoody = artifacts.require("HungryHoody");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('HungryHoody', (accounts) => {
	it('test for HungryHoody', async () => {
		const HungryHoodyP3wftkd = await HungryHoody.new({from: accounts[3]});
		const uintqMe0uRC = BigInt("956")
		const addressqbXkzkp = accounts[1]
		const uintzzTEupw = BigInt("964")
		const uintN0Npw0g = BigInt("93")
		const uint0wvW87 = BigInt("184")
		const uintPhMOU45 = BigInt("174")
		const boolAIQGYql = await HungryHoodyP3wftkd.transfer.call(addressqbXkzkp, uintqMe0uRC, {from: accounts[1]});
		const uintCrO3pHK = await HungryHoodyP3wftkd.safeSub.call(uintN0Npw0g, uintzzTEupw, {from: accounts[3]});
		const uintWO4K3w9 = await HungryHoodyP3wftkd.safeMul.call(uintPhMOU45, uint0wvW87, {from: accounts[3]});

		await expect(HungryHoodyP3wftkd.transfer.call(addressqbXkzkp, uintqMe0uRC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyImbZBBG = await HungryHoody.new({from: accounts[1]});
		const uintHVx0Q28 = BigInt("338")
		const addresswc9ZIvZ = accounts[4]
		const addressunTXbaq = accounts[3]
		const uintqN2L7V8 = BigInt("119")
		const uintlZzvzjj = BigInt("1718")
		const booltwd4OMt = await HungryHoodyImbZBBG.approve.call(addresswc9ZIvZ, uintHVx0Q28, {from: accounts[3]});
		const uintuWTnfuY = await HungryHoodyImbZBBG.balanceOf.call(addressunTXbaq, {from: accounts[1]});
		const uinty8Ar03N = await HungryHoodyImbZBBG.safeSub.call(uintlZzvzjj, uintqN2L7V8, {from: accounts[2]});

		assert.equal(booltwd4OMt, true)
		assert.equal(uintuWTnfuY, BigInt("0"))
		assert.equal(uinty8Ar03N, BigInt("1599"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyv6iDTpM = await HungryHoody.new({from: accounts[1]});
		const uintqcv73Sw = BigInt("235")
		const addressAhiG7gQ = accounts[0]
		const addressWxgIA2 = accounts[1]
		const uintNHYE8Ns = BigInt("1265")
		const uintWvqyTRb = BigInt("1173")
		const uintoOF31nX = BigInt("1874")
		const addressQQ8WH0L = accounts[4]
		const boolk7Yr9pF = await HungryHoodyv6iDTpM.transfer.call(addressAhiG7gQ, uintqcv73Sw, {from: accounts[1]});
		const uintOxYDPOX = await HungryHoodyv6iDTpM.balanceOf.call(addressWxgIA2, {from: accounts[1]});
		const uintE7h7Imj = await HungryHoodyv6iDTpM.safeDiv.call(uintWvqyTRb, uintNHYE8Ns, {from: accounts[1]});
		const boolVawVqOc = await HungryHoodyv6iDTpM.approve.call(addressQQ8WH0L, uintoOF31nX, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolVawVqOc, true)
		assert.equal(boolk7Yr9pF, true)
		assert.equal(uintE7h7Imj, BigInt("0"))
		assert.equal(uintOxYDPOX, BigInt("25000000000000000000"))
	});

	it('test for HungryHoody', async () => {
		const HungryHoodysecU8gl = await HungryHoody.new({from: accounts[2]});
		const uintuAq02mF = BigInt("2")
		const addressY3sp1lb = accounts[1]
		const addresstMnJyid = accounts[1]
		const addresskDXAiy = accounts[1]
		const addressG2D4p52 = accounts[4]
		const addressQ2aRzMv = accounts[0]
		const boolc0YWXHU = await HungryHoodysecU8gl.transferFrom.call(addresstMnJyid, addressY3sp1lb, uintuAq02mF, {from: accounts[2]});
		const uintG7NYBg0 = await HungryHoodysecU8gl.allowance.call(addressG2D4p52, addresskDXAiy, {from: accounts[0]});
		const uinteSK64Z = await HungryHoodysecU8gl.balanceOf.call(addressQ2aRzMv, {from: accounts[2]});

		await expect(HungryHoodysecU8gl.transferFrom.call(addresstMnJyid, addressY3sp1lb, uintuAq02mF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodyk5c8kwz = await HungryHoody.new({from: accounts[3]});
		const addresst1vC68W = "0x0000000000000000000000000000000000000001"
		const addressEcqjiYq = accounts[4]
		const uintsa12jf7 = BigInt("218")
		const addressB4XApp = accounts[5]
		const uintUsL6kzO = BigInt("1826")
		const addressZSxh9Dq = accounts[4]
		const addresstwMnZry = accounts[4]
		const addressmJow0V = accounts[4]
		const uint8HsmtL = await HungryHoodyk5c8kwz.totalSupply.call({from: accounts[4]});
		const uintyptF3Oh = await HungryHoodyk5c8kwz.allowance.call(addressEcqjiYq, addresst1vC68W, {from: accounts[3]});
		const boolpcuFM4K = await HungryHoodyk5c8kwz.approve.call(addressB4XApp, uintsa12jf7, {from: accounts[0]});
		const boolcvXpIpw = await HungryHoodyk5c8kwz.transferFrom.call(addresstwMnZry, addressZSxh9Dq, uintUsL6kzO, {from: "0x0000000000000000000000000000000000000001"});
		const uintkX92qE5 = await HungryHoodyk5c8kwz.balanceOf.call(addressmJow0V, {from: accounts[1]});

		assert.equal(boolpcuFM4K, true)
		assert.equal(uint8HsmtL, BigInt("25000000000000000000"))
		assert.equal(uintyptF3Oh, BigInt("0"))
		await expect(HungryHoodyk5c8kwz.transferFrom.call(addresstwMnZry, addressZSxh9Dq, uintUsL6kzO, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for HungryHoody', async () => {
		const HungryHoodywl2Ej8B = await HungryHoody.new({from: "0x0000000000000000000000000000000000000001"});
		const uinth0Ox3Lf = BigInt("1447")
		const uintyxLP8Ql = BigInt("613")
		const uint4ANdIr = BigInt("521")
		const addressKfZvwFy = accounts[1]
		const uintCWcaDQ0 = BigInt("1852")
		const uintaGtEa07 = BigInt("297")
		const uints93dBz = BigInt("205")
		const uintFp1EC1P = BigInt("333")
		const uintYIrBC2i = BigInt("526")
		const addressCTAF3Ky = accounts[2]
		const addressYPYcKg0 = "0x0000000000000000000000000000000000000001"
		const uintXsCGtr6 = await HungryHoodywl2Ej8B.safeAdd.call(uintyxLP8Ql, uinth0Ox3Lf, {from: accounts[3]});
		const boolJwM6dT = await HungryHoodywl2Ej8B.transfer.call(addressKfZvwFy, uint4ANdIr, {from: accounts[4]});
		const uintS2hyItJ = await HungryHoodywl2Ej8B.safeMul.call(uintaGtEa07, uintCWcaDQ0, {from: accounts[2]});
		const uintQNOli7E = await HungryHoodywl2Ej8B.safeDiv.call(uintFp1EC1P, uints93dBz, {from: accounts[3]});
		const boolBmJRpQa = await HungryHoodywl2Ej8B.transferFrom.call(addressYPYcKg0, addressCTAF3Ky, uintYIrBC2i, {from: accounts[3]});
		const uintVFvBxaq = await HungryHoodywl2Ej8B.totalSupply.call({from: accounts[1]});
	});
})