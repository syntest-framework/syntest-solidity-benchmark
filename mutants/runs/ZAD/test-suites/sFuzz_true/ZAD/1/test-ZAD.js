const ZAD = artifacts.require("ZAD");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ZAD', (accounts) => {
	it('test for ZAD', async () => {
		const ZADbcWFL72 = await ZAD.new({from: accounts[4]});
		const addressrEncmUw = accounts[1]
		const addresswVWz4ab = accounts[1]
		const addressalLJlv = accounts[4]
		const addressDJ3gYW = accounts[1]
		const uintCILpI3t = BigInt("110")
		const addressbsKSGJO = accounts[4]
		const uintIDH5QVH = BigInt("1450")
		const addressOP1eUn3 = accounts[0]
		const uint256k9BVxDp = await ZADbcWFL72.allowance.call(addresswVWz4ab, addressrEncmUw, {from: accounts[1]});
		const uint256pDCkZo3 = await ZADbcWFL72.allowance.call(addressDJ3gYW, addressalLJlv, {from: accounts[1]});
		const boolWn22yfn = await ZADbcWFL72.transfer.call(addressbsKSGJO, uintCILpI3t, {from: accounts[0]});
		const boolecdoVup = await ZADbcWFL72.increaseAllowance.call(addressOP1eUn3, uintIDH5QVH, {from: accounts[5]});
		const stringWtEXKlX = await ZADbcWFL72.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256k9BVxDp, BigInt("0"))
		assert.equal(uint256pDCkZo3, BigInt("0"))
		await expect(ZADbcWFL72.transfer.call(addressbsKSGJO, uintCILpI3t, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADoiMks69 = await ZAD.new({from: accounts[2]});
		const uintp2MBNYB = BigInt("1654")
		const uint256JR9f4fg = await ZADoiMks69._burn.call(uintp2MBNYB, {from: accounts[2]});
		const uint256ZZwGQb = await ZADoiMks69.totalSupply.call({from: accounts[2]});
		const uint8N7qKcWP = await ZADoiMks69.decimals.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(ZADoiMks69._burn.call(uintp2MBNYB, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADEz9YPk = await ZAD.new({from: accounts[0]});
		const uintDeglSw1 = BigInt("283")
		const addressKeAN9le = accounts[1]
		const addressm08f5nl = accounts[4]
		const addressVZOqRMA = accounts[2]
		const uintiDnm9Ok = BigInt("329")
		const booliaueZIg = await ZADEz9YPk.approve.call(addressKeAN9le, uintDeglSw1, {from: accounts[0]});
		const uint256hXQpF62 = await ZADEz9YPk.allowance.call(addressVZOqRMA, addressm08f5nl, {from: accounts[5]});
		const uint256ucHb0fp = await ZADEz9YPk._burn.call(uintiDnm9Ok, {from: accounts[4]});

		assert.equal(booliaueZIg, true)
		assert.equal(uint256hXQpF62, BigInt("0"))
		await expect(ZADEz9YPk._burn.call(uintiDnm9Ok, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADU9gR6LD = await ZAD.new({from: accounts[1]});
		const uintMTR4Ulg = BigInt("1452")
		const addressjfA4UOZ = accounts[4]
		const uintAcDmYBr = BigInt("648")
		const addressdiZmSjv = accounts[4]
		const uintFpkaCiC = BigInt("1513")
		const addressKEetXSL = accounts[4]
		const boolfrXvN3M = await ZADU9gR6LD.increaseAllowance.call(addressjfA4UOZ, uintMTR4Ulg, {from: accounts[2]});
		const boolm8tjhHk = await ZADU9gR6LD.decreaseAllowance.call(addressdiZmSjv, uintAcDmYBr, {from: accounts[2]});
		const booltmc2yf = await ZADU9gR6LD.transfer.call(addressKEetXSL, uintFpkaCiC, {from: accounts[4]});

		assert.equal(boolfrXvN3M, true)
		await expect(ZADU9gR6LD.decreaseAllowance.call(addressdiZmSjv, uintAcDmYBr, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADw7cy728 = await ZAD.new({from: accounts[5]});
		const uintlFttfG0 = BigInt("1318")
		const addressINAfwGH = accounts[2]
		const uintKGBzfsK = BigInt("767")
		const addressq872T8x = accounts[0]
		const uintG6fbEQ2 = BigInt("790")
		const addressBbHyZKa = accounts[2]
		const addressP8Vlkpz = accounts[5]
		const uint8j5q06r0 = await ZADw7cy728.decimals.call({from: accounts[4]});
		const booloxEQnDa = await ZADw7cy728.transfer.call(addressINAfwGH, uintlFttfG0, {from: accounts[1]});
		const boolYmEfXy = await ZADw7cy728.increaseAllowance.call(addressq872T8x, uintKGBzfsK, {from: accounts[4]});
		const boolSQnq7RK = await ZADw7cy728.transferFrom.call(addressP8Vlkpz, addressBbHyZKa, uintG6fbEQ2, {from: accounts[4]});

		assert.equal(uint8j5q06r0, BigInt("18"))
		await expect(ZADw7cy728.transfer.call(addressINAfwGH, uintlFttfG0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADyMJs4sx = await ZAD.new({from: accounts[3]});
		const uintdnOp2yK = BigInt("1616")
		const addressfI2EScv = accounts[3]
		const uintQBmDroM = BigInt("1779")
		const addressEg6R3pf = accounts[4]
		const uintH8c1DJn = BigInt("233")
		const addressqMViG7 = accounts[0]
		const addressBaVwshi = accounts[4]
		const addressJozOZO7 = "0x0000000000000000000000000000000000000001"
		const booluFEPC5y = await ZADyMJs4sx.approve.call(addressfI2EScv, uintdnOp2yK, {from: accounts[1]});
		const stringQWIStUa = await ZADyMJs4sx.symbol.call({from: accounts[5]});
		const boolkBRxw2Y = await ZADyMJs4sx.transfer.call(addressEg6R3pf, uintQBmDroM, {from: accounts[0]});
		const boolS43197U = await ZADyMJs4sx.transferFrom.call(addressBaVwshi, addressqMViG7, uintH8c1DJn, {from: accounts[2]});
		const uint256VHvvqcZ = await ZADyMJs4sx.balanceOf.call(addressJozOZO7, {from: accounts[2]});

		assert.equal(booluFEPC5y, true)
		assert.equal(stringQWIStUa, "ZAD")
		await expect(ZADyMJs4sx.transfer.call(addressEg6R3pf, uintQBmDroM, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADcIyr8D = await ZAD.new({from: accounts[5]});
		const addressqyFtahc = accounts[2]
		const addressGJZJXl1 = accounts[5]
		const uintpEC9Per = BigInt("854")
		const addressooaDs8O = accounts[0]
		const addressTzAFjyf = accounts[4]
		const stringzc5ixeU = await ZADcIyr8D.symbol.call({from: accounts[3]});
		const uint256sRzyctT = await ZADcIyr8D.allowance.call(addressGJZJXl1, addressqyFtahc, {from: accounts[5]});
		const boolxmUssiN = await ZADcIyr8D.transferFrom.call(addressTzAFjyf, addressooaDs8O, uintpEC9Per, {from: accounts[1]});

		assert.equal(stringzc5ixeU, "ZAD")
		assert.equal(uint256sRzyctT, BigInt("0"))
		await expect(ZADcIyr8D.transferFrom.call(addressTzAFjyf, addressooaDs8O, uintpEC9Per, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADU9gR6LD = await ZAD.new({from: accounts[1]});
		const uintYmzYsry = BigInt("651")
		const address6S8hLo = accounts[4]
		const uint256GRwITp = await ZADU9gR6LD.totalSupply.call({from: accounts[3]});
		const boolm8tjhHk = await ZADU9gR6LD.decreaseAllowance.call(address6S8hLo, uintYmzYsry, {from: accounts[2]});

		assert.equal(uint256GRwITp, BigInt("100000000000000000000000000"))
		await expect(ZADU9gR6LD.decreaseAllowance.call(address6S8hLo, uintYmzYsry, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZAD1SMvxj = await ZAD.new({from: accounts[4]});
		const addressreHXOY = accounts[2]
		const addressWx5pKaE = accounts[3]
		const addressAqyAtPe = accounts[4]
		const uintxusDuCS = BigInt("1049")
		const addressDsgkkHP = accounts[0]
		const uint256ZRsuP5Y = await ZAD1SMvxj.balanceOf.call(addressreHXOY, {from: accounts[2]});
		const uint256xJoCP4x = await ZAD1SMvxj.allowance.call(addressAqyAtPe, addressWx5pKaE, {from: accounts[5]});
		const booltpEpMjI = await ZAD1SMvxj.approve.call(addressDsgkkHP, uintxusDuCS, {from: accounts[2]});

		assert.equal(booltpEpMjI, true)
		assert.equal(uint256ZRsuP5Y, BigInt("0"))
		assert.equal(uint256xJoCP4x, BigInt("0"))
	});

	it('test for ZAD', async () => {
		const ZADU9gR6LD = await ZAD.new({from: accounts[1]});
		const uintclAfQZj = BigInt("643")
		const addressE9W3I1R = accounts[4]
		const uintlHRC0X2 = BigInt("881")
		const addressIv1sMt0 = accounts[4]
		const addressdRo8U1b = accounts[0]
		const stringYZ1sGPq = await ZADU9gR6LD.name.call({from: accounts[2]});
		const boolm8tjhHk = await ZADU9gR6LD.decreaseAllowance.call(addressE9W3I1R, uintclAfQZj, {from: accounts[2]});
		const uint256kbclGOg = await ZADU9gR6LD.totalSupply.call({from: accounts[2]});
		const boolUfEFdGM = await ZADU9gR6LD.transferFrom.call(addressdRo8U1b, addressIv1sMt0, uintlHRC0X2, {from: accounts[2]});

		assert.equal(stringYZ1sGPq, "Zadkiel")
		await expect(ZADU9gR6LD.decreaseAllowance.call(addressE9W3I1R, uintclAfQZj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ZAD', async () => {
		const ZADfePAV3A = await ZAD.new({from: "0x0000000000000000000000000000000000000001"});
		const addressMUkadPw = accounts[0]
		const addressS5n3gDS = accounts[3]
		const addressPxpWomn = accounts[0]
		const uint256LW0o7z = await ZADfePAV3A.allowance.call(addressS5n3gDS, addressMUkadPw, {from: accounts[1]});
		const uint256RoQ9qs = await ZADfePAV3A.balanceOf.call(addressPxpWomn, {from: "0x0000000000000000000000000000000000000001"});
	});
})