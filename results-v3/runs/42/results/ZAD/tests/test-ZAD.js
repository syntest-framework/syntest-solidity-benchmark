const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADHLj8d1b = await ZAD.new({from: accounts[3]});
		const uintW1pUEuA = BigInt("1296")
		const addressngTgM1t = accounts[0]
		const uint8wLRmG = BigInt("1555")
		const addresslDAyq8Z = "0x0000000000000000000000000000000000000001"
		const uintMUQ00sN = BigInt("37")
		const addressTX7VW2u = accounts[2]
		const uintm2vuCpr = BigInt("1937")
		const addresssiaLkb1 = accounts[0]
		const uintpwsSwqv = BigInt("663")
		const addressk4pMTMU = accounts[2]
		const booli3J7KBJ = await ZADHLj8d1b.approve.call(addressngTgM1t, uintW1pUEuA, {from: accounts[4]});
		const boolXJVeDLo = await ZADHLj8d1b.approve.call(addresslDAyq8Z, uint8wLRmG, {from: "0x0000000000000000000000000000000000000001"});
		const boolufoDxMt = await ZADHLj8d1b.approve.call(addressTX7VW2u, uintMUQ00sN, {from: accounts[0]});
		const boolVCmFjIa = await ZADHLj8d1b.decreaseAllowance.call(addresssiaLkb1, uintm2vuCpr, {from: accounts[0]});
		const boola31iYa3 = await ZADHLj8d1b.increaseAllowance.call(addressk4pMTMU, uintpwsSwqv, {from: accounts[2]});

		assert.equal(boolXJVeDLo, true)
		assert.equal(booli3J7KBJ, true)
		assert.equal(boolufoDxMt, true)
		await expect(ZADHLj8d1b.decreaseAllowance.call(addresssiaLkb1, uintm2vuCpr, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADWywigz = await ZAD.new({from: accounts[5]});
		const uintd7Hk85y = BigInt("1294")
		const uintRKv8pv6 = BigInt("124")
		const addresslAw7UqI = accounts[3]
		const addressRR16JoB = accounts[5]
		const uintXH69JTP = BigInt("996")
		const addressI10580T = accounts[0]
		const uintENw0bsK = BigInt("1590")
		const addressJHzjU3u = accounts[0]
		const uint256jnssao8 = await ZADWywigz._burn.call(uintd7Hk85y, {from: "0x0000000000000000000000000000000000000001"});
		const boolbnrFELF = await ZADWywigz.transferFrom.call(addressRR16JoB, addresslAw7UqI, uintRKv8pv6, {from: accounts[2]});
		const stringarocgk = await ZADWywigz.name.call({from: accounts[4]});
		const boolhJuUb4K = await ZADWywigz.decreaseAllowance.call(addressI10580T, uintXH69JTP, {from: accounts[0]});
		const boolDwtgPT8 = await ZADWywigz.transfer.call(addressJHzjU3u, uintENw0bsK, {from: accounts[3]});

		await expect(ZADWywigz._burn.call(uintd7Hk85y, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADyHvZIA = await ZAD.new({from: accounts[3]});
		const uintTu8iBj = BigInt("55")
		const addressnoiEvL8 = accounts[1]
		const uintYys4W2Z = BigInt("270")
		const addresssle9vT2 = accounts[0]
		const addressLBCMikh = accounts[5]
		const addressH6LvvoC = accounts[4]
		const uintragGlw2 = BigInt("413")
		const addresshDyNlf = accounts[5]
		const boolHXLVk26 = await ZADyHvZIA.increaseAllowance.call(addressnoiEvL8, uintTu8iBj, {from: accounts[1]});
		const booluZo1QCh = await ZADyHvZIA.decreaseAllowance.call(addresssle9vT2, uintYys4W2Z, {from: accounts[3]});
		const uint256aynkcwQ = await ZADyHvZIA.allowance.call(addressH6LvvoC, addressLBCMikh, {from: accounts[0]});
		const boolC8Jtfpz = await ZADyHvZIA.decreaseAllowance.call(addresshDyNlf, uintragGlw2, {from: accounts[0]});
		const uint8TbEJex3 = await ZADyHvZIA.decimals.call({from: accounts[4]});

		assert.equal(boolHXLVk26, true)
		await expect(ZADyHvZIA.decreaseAllowance.call(addresssle9vT2, uintYys4W2Z, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADmWnksns = await ZAD.new({from: accounts[1]});
		const address4XrfKh = accounts[1]
		const uintE745rB = BigInt("56")
		const addressGzyTTHM = accounts[1]
		const uintcgBz5M = BigInt("616")
		const addressIcaV3Vd = "0x0000000000000000000000000000000000000001"
		const uint256qd9D0Dt = await ZADmWnksns.balanceOf.call(address4XrfKh, {from: accounts[4]});
		const boolcDWCcJX = await ZADmWnksns.approve.call(addressGzyTTHM, uintE745rB, {from: accounts[0]});
		const booleGu74w1 = await ZADmWnksns.decreaseAllowance.call(addressIcaV3Vd, uintcgBz5M, {from: accounts[4]});

		assert.equal(boolcDWCcJX, true)
		assert.equal(uint256qd9D0Dt, BigInt("0"))
		await expect(ZADmWnksns.decreaseAllowance.call(addressIcaV3Vd, uintcgBz5M, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADxe0rEAC = await ZAD.new({from: accounts[4]});
		const uintHKgcq9J = BigInt("663")
		const addressxShi8dh = accounts[3]
		const boolrownI5m = await ZADxe0rEAC.transfer.call(addressxShi8dh, uintHKgcq9J, {from: accounts[4]});
		const stringSd5IrGE = await ZADxe0rEAC.name.call({from: accounts[2]});
		const stringhRsz2e5 = await ZADxe0rEAC.name.call({from: accounts[3]});

		await expect(ZADxe0rEAC.transfer.call(addressxShi8dh, uintHKgcq9J, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADXHKFm8 = await ZAD.new({from: accounts[3]});
		const uintQExnLh3 = BigInt("1800")
		const addressg2dtK6C = accounts[0]
		const addressT5a87nn = accounts[5]
		const uint256HwK2Cz = await ZADXHKFm8.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});
		const boolTgnvfOc = await ZADXHKFm8.decreaseAllowance.call(addressg2dtK6C, uintQExnLh3, {from: accounts[0]});
		const uint256VIKsvgN = await ZADXHKFm8.balanceOf.call(addressT5a87nn, {from: accounts[0]});
		const uint2567y0DQ2 = await ZADXHKFm8.totalSupply.call({from: accounts[2]});

		assert.equal(uint256HwK2Cz, BigInt("100000000000000000000000000"))
		await expect(ZADXHKFm8.decreaseAllowance.call(addressg2dtK6C, uintQExnLh3, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADxSqfTg = await ZAD.new({from: accounts[1]});
		const uintQcd34i = BigInt("254")
		const addresswCLv70P = accounts[3]
		const uintTGXXTJU = BigInt("1714")
		const uintC3rw0F1 = BigInt("711")
		const stringruMXEsS = await ZADxSqfTg.name.call({from: accounts[2]});
		const boolqITe511 = await ZADxSqfTg.decreaseAllowance.call(addresswCLv70P, uintQcd34i, {from: accounts[1]});
		const uint256lToUygk = await ZADxSqfTg._burn.call(uintTGXXTJU, {from: accounts[4]});
		const stringkF0s9LU = await ZADxSqfTg.symbol.call({from: accounts[1]});
		const uint256OXYU8A1 = await ZADxSqfTg._burn.call(uintC3rw0F1, {from: accounts[3]});

		assert.equal(stringruMXEsS, "Zadkiel")
		await expect(ZADxSqfTg.decreaseAllowance.call(addresswCLv70P, uintQcd34i, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADoC4kito = await ZAD.new({from: accounts[3]});
		const uintIH7QYTk = BigInt("255")
		const addressDKbMXTN = accounts[1]
		const addressfMz4dCZ = accounts[4]
		const boolWI4y43c = await ZADoC4kito.increaseAllowance.call(addressDKbMXTN, uintIH7QYTk, {from: accounts[3]});
		const uint8QalHsx = await ZADoC4kito.decimals.call({from: accounts[2]});
		const uint256Wcaw9A = await ZADoC4kito.balanceOf.call(addressfMz4dCZ, {from: accounts[3]});

		assert.equal(boolWI4y43c, true)
		assert.equal(uint256Wcaw9A, BigInt("0"))
		assert.equal(uint8QalHsx, BigInt("18"))
	});

	it('test for ZAD', async () => {
		const ZADdMCKN9U = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const uintDUQR5C8 = BigInt("16")
		const addressVBm0YGO = accounts[4]
		const addresst3SdVNN = accounts[4]
		const boolYkvvXTs = await ZADdMCKN9U.transferFrom.call(addresst3SdVNN, addressVBm0YGO, uintDUQR5C8, {from: accounts[4]});
		const uint8CNMh4lf = await ZADdMCKN9U.decimals.call({from: accounts[1]});
	});

	it('test for ZAD', async () => {
		const ZADAc8ehyt = await ZAD.new({from: accounts[3]});
		const uintmpQy8FU = BigInt("1876")
		const addressLD1DW1W = accounts[2]
		const addresscidx8zz = accounts[0]
		const uint8mzVJWud = await ZADAc8ehyt.decimals.call({from: accounts[0]});
		const uint256Yi6i1tE = await ZADAc8ehyt.totalSupply.call({from: accounts[1]});
		const stringG9dJCUg = await ZADAc8ehyt.name.call({from: accounts[0]});
		const boolTA0c1W9 = await ZADAc8ehyt.transferFrom.call(addresscidx8zz, addressLD1DW1W, uintmpQy8FU, {from: accounts[3]});

		assert.equal(stringG9dJCUg, "Zadkiel")
		assert.equal(uint256Yi6i1tE, BigInt("100000000000000000000000000"))
		assert.equal(uint8mzVJWud, BigInt("18"))
		await expect(ZADAc8ehyt.transferFrom.call(addresscidx8zz, addressLD1DW1W, uintmpQy8FU, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADAc8ehyt = await ZAD.new({from: accounts[3]});
		const addressgxGS2lQ = accounts[1]
		const addressK4dxq6M = accounts[0]
		const uintH7DD4LC = BigInt("1532")
		const addressWpqIUOC = accounts[0]
		const addresspXdPqN8 = "0x0000000000000000000000000000000000000001"
		const uint8mzVJWud = await ZADAc8ehyt.decimals.call({from: accounts[0]});
		const uint256J0DDXyj = await ZADAc8ehyt.allowance.call(addressK4dxq6M, addressgxGS2lQ, {from: accounts[2]});
		const boolLZ2nlkp = await ZADAc8ehyt.transferFrom.call(addresspXdPqN8, addressWpqIUOC, uintH7DD4LC, {from: accounts[1]});

		assert.equal(uint256J0DDXyj, BigInt("0"))
		assert.equal(uint8mzVJWud, BigInt("18"))
		await expect(ZADAc8ehyt.transferFrom.call(addresspXdPqN8, addressWpqIUOC, uintH7DD4LC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADAc8ehyt = await ZAD.new({from: accounts[3]});
		const stringGrdTAAI = await ZADAc8ehyt.symbol.call({from: accounts[3]});
		const uint8mzVJWud = await ZADAc8ehyt.decimals.call({from: accounts[0]});

		assert.equal(stringGrdTAAI, "ZAD")
		assert.equal(uint8mzVJWud, BigInt("18"))
	});
})