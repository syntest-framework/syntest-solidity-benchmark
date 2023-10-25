const Weedburn = artifacts.require("Weedburn");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('Weedburn', (accounts) => {
	it('test for Weedburn', async () => {
		const WeedburnU3EG2d5 = await Weedburn.new({from: accounts[3]});
		const stringY8SPpSn = await WeedburnU3EG2d5.name.call({from: "0x0000000000000000000000000000000000000001"});
		const stringJOfIR2I = await WeedburnU3EG2d5.symbol.call({from: accounts[2]});

		assert.equal(stringJOfIR2I, "Weedburn")
		assert.equal(stringY8SPpSn, "t.me/burnweed1")
	});

	it('test for Weedburn', async () => {
		const stringQMef1hf = "k31QDFAeNtBoANTWLxX4VEqIoHFQn7VArdKxOgB2UTk"
		const stringmmITzJr = "Lj3T4FK4HGURuHYvLKE6wU3on3B09"
		const uintqBBoZkN = BigInt("13")
		const WeedburnUJOFSKD = await Weedburn.new(stringQMef1hf, stringmmITzJr, uintqBBoZkN, {from: accounts[1]});
		const uintlJMYSQw = BigInt("1895")
		const addresspNPLkzc = accounts[5]
		const uinthy0rao7 = BigInt("1356")
		const addressZ8Lw5g7 = accounts[2]
		const addressIY0pZgw = accounts[4]
		const addressGB69jeg = accounts[0]
		const boolZxi0mrw = await WeedburnUJOFSKD.increaseAllowance.call(addresspNPLkzc, uintlJMYSQw, {from: accounts[4]});
		const boolqmB3IS7 = await WeedburnUJOFSKD.approve.call(addressZ8Lw5g7, uinthy0rao7, {from: accounts[0]});
		const stringL44ln2Q = await WeedburnUJOFSKD.symbol.call({from: accounts[1]});
		const uint256hjnOlUu = await WeedburnUJOFSKD.totalSupply.call({from: accounts[3]});
		const uint256mkSzfWM = await WeedburnUJOFSKD.allowance.call(addressGB69jeg, addressIY0pZgw, {from: accounts[2]});
	});

	it('test for Weedburn', async () => {
		const WeedburnI7WyFur = await Weedburn.new({from: "0x0000000000000000000000000000000000000001"});
		const uintKC7oRRN = BigInt("1201")
		const addressT6OvuwZ = accounts[1]
		const uintfhUXkTD = BigInt("1352")
		const uintsB62VW6 = BigInt("1487")
		const addressPGB7DE2 = accounts[4]
		const addressG5KTjid = accounts[2]
		const addressmb3dm8N = accounts[4]
		await WeedburnI7WyFur.disableLimitMode.call({from: "0x0000000000000000000000000000000000000001"});
		const booluIO82Fi = await WeedburnI7WyFur.increaseAllowance.call(addressT6OvuwZ, uintKC7oRRN, {from: accounts[2]});
		const uint256dpd5SY = await WeedburnI7WyFur.burn.call(uintfhUXkTD, {from: accounts[3]});
		const boold97LxT = await WeedburnI7WyFur.transferFrom.call(addressG5KTjid, addressPGB7DE2, uintsB62VW6, {from: accounts[0]});
		const uint256w6mJmI = await WeedburnI7WyFur.balanceOf.call(addressmb3dm8N, {from: accounts[4]});
	});

	it('test for Weedburn', async () => {
		const WeedburnLI514Ni = await Weedburn.new({from: accounts[1]});
		const addressYkLDhhL = accounts[5]
		const uintnt7PP2S = BigInt("409")
		const addresstK2vAy1 = accounts[2]
		const uint256XhWdTln = await WeedburnLI514Ni.balanceOf.call(addressYkLDhhL, {from: accounts[2]});
//		const addressq8ditXz = await WeedburnLI514Ni.burnFrom.call(addresstK2vAy1, uintnt7PP2S, {from: accounts[1]});

		assert.equal(uint256XhWdTln, BigInt("0"))
		await expect(WeedburnLI514Ni.burnFrom.call(addresstK2vAy1, uintnt7PP2S, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnsDsXWLp = await Weedburn.new({from: accounts[3]});
		const uintU0G6iTf = BigInt("925")
		const addressPTGTddJ = accounts[4]
//		await WeedburnsDsXWLp.enableLimitMode.call({from: accounts[0]});
//		const stringOBVcJI9 = await WeedburnsDsXWLp.symbol.call({from: accounts[3]});
//		await WeedburnsDsXWLp.enableLimitMode.call({from: accounts[2]});
//		const booleFWyMfl = await WeedburnsDsXWLp.approve.call(addressPTGTddJ, uintU0G6iTf, {from: accounts[0]});

		await expect(WeedburnsDsXWLp.enableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnGhgFDUZ = await Weedburn.new({from: accounts[1]});
		const uintSa37Tq9 = BigInt("571")
		const addressd2kDuUb = accounts[5]
//		await WeedburnGhgFDUZ.enableDevMode.call({from: accounts[5]});
//		const stringG8OhX0T = await WeedburnGhgFDUZ.symbol.call({from: accounts[1]});
//		const boolhDsbOdx = await WeedburnGhgFDUZ.transfer.call(addressd2kDuUb, uintSa37Tq9, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256YEVF65Y = await WeedburnGhgFDUZ.totalSupply.call({from: accounts[4]});
//		await WeedburnGhgFDUZ.disableLimitMode.call({from: accounts[3]});

		await expect(WeedburnGhgFDUZ.enableDevMode.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnzozATaB = await Weedburn.new({from: accounts[2]});
		const uintsaifFmH = BigInt("1608")
		const addressyzkYTF5 = accounts[1]
		const uintflXBGL1 = BigInt("1409")
		const addressb7Cn1XV = accounts[2]
		const addressrd57dUH = accounts[5]
		const addressa3EV7Y = accounts[3]
		const uintOUxTKOu = BigInt("1266")
		const addressCSRIB6k = accounts[0]
		const boolGPPsazy = await WeedburnzozATaB.approve.call(addressyzkYTF5, uintsaifFmH, {from: "0x0000000000000000000000000000000000000001"});
//		const addresspf1Gzaz = await WeedburnzozATaB.burnFrom.call(addressb7Cn1XV, uintflXBGL1, {from: accounts[0]});
//		const uint256pFI3cat = await WeedburnzozATaB.allowance.call(addressa3EV7Y, addressrd57dUH, {from: accounts[4]});
//		const boolGCsNxyS = await WeedburnzozATaB.transfer.call(addressCSRIB6k, uintOUxTKOu, {from: accounts[0]});

		assert.equal(boolGPPsazy, true)
		await expect(WeedburnzozATaB.burnFrom.call(addressb7Cn1XV, uintflXBGL1, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnU3EG2d5 = await Weedburn.new({from: accounts[3]});
		const uintourxMDk = BigInt("1559")
		const addressCUvwtcH = accounts[0]
		const stringY8SPpSn = await WeedburnU3EG2d5.name.call({from: "0x0000000000000000000000000000000000000001"});
		const stringJOfIR2I = await WeedburnU3EG2d5.symbol.call({from: accounts[2]});
		const stringnTzOFc = await WeedburnU3EG2d5.symbol.call({from: "0x0000000000000000000000000000000000000001"});
		const boolV7eWIwr = await WeedburnU3EG2d5.increaseAllowance.call(addressCUvwtcH, uintourxMDk, {from: accounts[5]});

		assert.equal(boolV7eWIwr, true)
		assert.equal(stringJOfIR2I, "Weedburn")
		assert.equal(stringY8SPpSn, "t.me/burnweed1")
		assert.equal(stringnTzOFc, "Weedburn")
	});

	it('test for Weedburn', async () => {
		const WeedburnU3EG2d5 = await Weedburn.new({from: accounts[3]});
		const addressbDaeiQP = "0x0000000000000000000000000000000000000001"
		const uinttqq2F3S = BigInt("360")
		const addresszIXa3kJ = accounts[3]
		const stringY8SPpSn = await WeedburnU3EG2d5.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256NCBYJ0Q = await WeedburnU3EG2d5.balanceOf.call(addressbDaeiQP, {from: accounts[3]});
//		const boollJwsfaY = await WeedburnU3EG2d5.decreaseAllowance.call(addresszIXa3kJ, uinttqq2F3S, {from: accounts[2]});
//		const stringJOfIR2I = await WeedburnU3EG2d5.symbol.call({from: accounts[2]});

		assert.equal(stringY8SPpSn, "t.me/burnweed1")
		assert.equal(uint256NCBYJ0Q, BigInt("0"))
		await expect(WeedburnU3EG2d5.decreaseAllowance.call(addresszIXa3kJ, uinttqq2F3S, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnU3EG2d5 = await Weedburn.new({from: accounts[3]});
		const uintAQPSCet = BigInt("841")
		const addresssqm7U8 = accounts[3]
		const addressW9tmWlc = accounts[0]
		const stringY8SPpSn = await WeedburnU3EG2d5.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolOiSrSX8 = await WeedburnU3EG2d5.transferFrom.call(addressW9tmWlc, addresssqm7U8, uintAQPSCet, {from: accounts[4]});
//		const stringJOfIR2I = await WeedburnU3EG2d5.symbol.call({from: accounts[2]});

		assert.equal(stringY8SPpSn, "t.me/burnweed1")
		await expect(WeedburnU3EG2d5.transferFrom.call(addressW9tmWlc, addresssqm7U8, uintAQPSCet, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnU3EG2d5 = await Weedburn.new({from: accounts[3]});
		const uintL2nFh8i = BigInt("1869")
		const addresswnPotEm = accounts[0]
		const stringY8SPpSn = await WeedburnU3EG2d5.name.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolHKphIWk = await WeedburnU3EG2d5.transfer.call(addresswnPotEm, uintL2nFh8i, {from: accounts[5]});

		assert.equal(stringY8SPpSn, "t.me/burnweed1")
		await expect(WeedburnU3EG2d5.transfer.call(addresswnPotEm, uintL2nFh8i, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnU3EG2d5 = await Weedburn.new({from: accounts[3]});
		const stringY8SPpSn = await WeedburnU3EG2d5.name.call({from: "0x0000000000000000000000000000000000000001"});
//		await WeedburnU3EG2d5.disableDevMode.call({from: accounts[4]});

		assert.equal(stringY8SPpSn, "t.me/burnweed1")
		await expect(WeedburnU3EG2d5.disableDevMode.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnU3EG2d5 = await Weedburn.new({from: accounts[3]});
		const addresswAG8AkB = accounts[3]
		const addressytVqP2Y = "0x0000000000000000000000000000000000000001"
		const uint256V3GnaZp = await WeedburnU3EG2d5.allowance.call(addressytVqP2Y, addresswAG8AkB, {from: accounts[2]});
		const stringY8SPpSn = await WeedburnU3EG2d5.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringY8SPpSn, "t.me/burnweed1")
		assert.equal(uint256V3GnaZp, BigInt("0"))
	});

	it('test for Weedburn', async () => {
		const WeedburnU3EG2d5 = await Weedburn.new({from: accounts[3]});
//		await WeedburnU3EG2d5.disableLimitMode.call({from: accounts[0]});
//		const stringY8SPpSn = await WeedburnU3EG2d5.name.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(WeedburnU3EG2d5.disableLimitMode.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for Weedburn', async () => {
		const WeedburnU3EG2d5 = await Weedburn.new({from: accounts[3]});
		const uint5mTp7C = BigInt("800")
		const addressQOVbGv3 = accounts[0]
		const boolRxzu5US = await WeedburnU3EG2d5.increaseAllowance.call(addressQOVbGv3, uint5mTp7C, {from: "0x0000000000000000000000000000000000000001"});
		const uint256w4cNjMA = await WeedburnU3EG2d5.totalSupply.call({from: accounts[4]});
		const stringY8SPpSn = await WeedburnU3EG2d5.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRxzu5US, true)
		assert.equal(stringY8SPpSn, "t.me/burnweed1")
		assert.equal(uint256w4cNjMA, BigInt("100000000000000000000000"))
	});

	it('test for Weedburn', async () => {
		const WeedburnU3EG2d5 = await Weedburn.new({from: accounts[3]});
		const uintuPFTarS = BigInt("1640")
		const uint256Jgo12e = await WeedburnU3EG2d5.burn.call(uintuPFTarS, {from: accounts[3]});
		const stringY8SPpSn = await WeedburnU3EG2d5.name.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringY8SPpSn, "t.me/burnweed1")
	});

	it('test for Weedburn', async () => {
		const WeedburnU3EG2d5 = await Weedburn.new({from: accounts[3]});
		const addressmezRKtY = "0x0000000000000000000000000000000000000001"
		const stringY8SPpSn = await WeedburnU3EG2d5.name.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8UlokARk = await WeedburnU3EG2d5.decimals.call({from: accounts[4]});
		const uint256XDxhTNP = await WeedburnU3EG2d5.balanceOf.call(addressmezRKtY, {from: accounts[2]});

		assert.equal(stringY8SPpSn, "t.me/burnweed1")
		assert.equal(uint256XDxhTNP, BigInt("0"))
		assert.equal(uint8UlokARk, BigInt("18"))
	});

	it('test for Weedburn', async () => {
		const Weedburnw6c88wZ = await Weedburn.new({from: accounts[1]});
		const uintqhPbarN = BigInt("38")
		const addresstKpQSYh = accounts[0]
		const uintrb5mXcO = BigInt("148")
		const addressa6178yo = accounts[1]
		const boolJSLsOU3 = await Weedburnw6c88wZ.transfer.call(addresstKpQSYh, uintqhPbarN, {from: accounts[1]});
//		const boolRl2TTjr = await Weedburnw6c88wZ.transfer.call(addressa6178yo, uintrb5mXcO, {from: accounts[2]});
//		const uint8YM0BR3P = await Weedburnw6c88wZ.decimals.call({from: accounts[4]});

		assert.equal(boolJSLsOU3, true)
		await expect(Weedburnw6c88wZ.transfer.call(addressa6178yo, uintrb5mXcO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})