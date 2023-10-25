const ETFXPool = artifacts.require("ETFXPool");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('ETFXPool', (accounts) => {
	it('test for ETFXPool', async () => {
		const ETFXPoolN592Zqp = await ETFXPool.new({from: accounts[3]});
		const addressNmATVBG = accounts[1]
		const addresssAxu6Pf = accounts[4]
		const addresscFBr2iN = accounts[3]
		const addressozsb1n = "0x0000000000000000000000000000000000000001"
		const addressykDDpV = accounts[2]
		const uintpn2F9Ur = BigInt("764")
		const addressIBvNcWx = accounts[5]
		const addressjB3ZPsz = accounts[2]
		const uintcpZUlKO = BigInt("1468")
		const addresszr2n9y8 = accounts[1]
		await ETFXPoolN592Zqp.getReward.call({from: accounts[4]});
		const uint256epLntO = await ETFXPoolN592Zqp.balanceOf.call(addressNmATVBG, {from: accounts[2]});
		const uint256M11zdCa = await ETFXPoolN592Zqp.allowance.call(addresscFBr2iN, addresssAxu6Pf, {from: accounts[0]});
		const uint256YLjUvWV = await ETFXPoolN592Zqp.allowance.call(addressykDDpV, addressozsb1n, {from: "0x0000000000000000000000000000000000000001"});
		const booldCSSryX = await ETFXPoolN592Zqp.transferFrom.call(addressjB3ZPsz, addressIBvNcWx, uintpn2F9Ur, {from: accounts[0]});
		const boolKRSW2Rm = await ETFXPoolN592Zqp.approve.call(addresszr2n9y8, uintcpZUlKO, {from: accounts[1]});

		await expect(ETFXPoolN592Zqp.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoollydJIP4 = await ETFXPool.new({from: accounts[0]});
		const uintLVy8C7g = BigInt("1295")
		const addressYSQlRLl = accounts[2]
		const uintxYrwI2D = BigInt("188")
		const addressFTiLSip = accounts[4]
		const addressb03v3MU = accounts[4]
		const uintbtcrJhw = BigInt("1710")
		const addresst1HE9T8 = accounts[2]
		const boolrruHbZu = await ETFXPoollydJIP4.approve.call(addressYSQlRLl, uintLVy8C7g, {from: "0x0000000000000000000000000000000000000001"});
		const addressKJ20lwi = await ETFXPoollydJIP4.owner.call({from: accounts[4]});
		await ETFXPoollydJIP4.nonReentrant.call({from: accounts[3]});
		const boolTQxGBfI = await ETFXPoollydJIP4.transferFrom.call(addressb03v3MU, addressFTiLSip, uintxYrwI2D, {from: accounts[3]});
		const booluFCOXF = await ETFXPoollydJIP4.decreaseAllowance.call(addresst1HE9T8, uintbtcrJhw, {from: accounts[1]});

		assert.equal(addressKJ20lwi, 0x2bE2Fe33C0EE87FDe6860d105Df7E3E9839db713)
		assert.equal(boolrruHbZu, true)
		await expect(ETFXPoollydJIP4.nonReentrant.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolYXYYfhb = await ETFXPool.new({from: accounts[0]});
		const uintKc0Wah = BigInt("941")
		const addressTh3q0ai = "0x0000000000000000000000000000000000000001"
		const addressgBBoDbh = accounts[0]
		const addressbF2hkq = accounts[1]
		const boolchqTC0 = await ETFXPoolYXYYfhb.transfer.call(addressTh3q0ai, uintKc0Wah, {from: accounts[1]});
		await ETFXPoolYXYYfhb.exit.call({from: accounts[3]});
		const uint2569YijES = await ETFXPoolYXYYfhb.earned.call(addressgBBoDbh, {from: accounts[1]});
		const uint256kkyAE22 = await ETFXPoolYXYYfhb.totalSupply.call({from: accounts[2]});
		const uint256EXpXYSE = await ETFXPoolYXYYfhb.balanceOf.call(addressbF2hkq, {from: accounts[5]});

		await expect(ETFXPoolYXYYfhb.transfer.call(addressTh3q0ai, uintKc0Wah, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolA8HU6GN = await ETFXPool.new({from: accounts[2]});
		const addressdznoQNt = accounts[0]
		const addressUTZWQjZ = "0x0000000000000000000000000000000000000001"
		const uintxVxnFaf = BigInt("1331")
		const addressOfkK1M = accounts[0]
		const uint256et4FJL8 = await ETFXPoolA8HU6GN.allowance.call(addressUTZWQjZ, addressdznoQNt, {from: accounts[4]});
		const addressUXMTJRU = await ETFXPoolA8HU6GN.owner.call({from: accounts[5]});
		const boolkGpCPo2 = await ETFXPoolA8HU6GN.approve.call(addressOfkK1M, uintxVxnFaf, {from: accounts[4]});

		assert.equal(addressUXMTJRU, 0x75e262ec6670cB4462d8810c15Af0D65f9E97091)
		assert.equal(boolkGpCPo2, true)
		assert.equal(uint256et4FJL8, BigInt("0"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolCR6sBQo = await ETFXPool.new({from: accounts[4]});
		const uintnjl69hO = BigInt("16")
		const uintB1XIEer = BigInt("827")
		const addressuoN233 = accounts[1]
		const uint256N0kaznD = await ETFXPoolCR6sBQo.withdraw.call(uintnjl69hO, {from: accounts[2]});
		const boolsJSMMk4 = await ETFXPoolCR6sBQo.increaseAllowance.call(addressuoN233, uintB1XIEer, {from: accounts[3]});
		await ETFXPoolCR6sBQo.onlyOwner.call({from: accounts[2]});

		await expect(ETFXPoolCR6sBQo.withdraw.call(uintnjl69hO, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolr5V8N1t = await ETFXPool.new({from: accounts[0]});
		const uintN75CoME = BigInt("1229")
		const addressLiQM1h = accounts[2]
		const uintRw1Aoh8 = BigInt("1646")
		const addresstpaaw73 = accounts[3]
		await ETFXPoolr5V8N1t.renounceOwnership.call({from: accounts[0]});
		const boolGvGo0k = await ETFXPoolr5V8N1t.transfer.call(addressLiQM1h, uintN75CoME, {from: accounts[3]});
		const boolkhky1Mw = await ETFXPoolr5V8N1t.decreaseAllowance.call(addresstpaaw73, uintRw1Aoh8, {from: accounts[3]});

		await expect(ETFXPoolr5V8N1t.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooleUpIlB3 = await ETFXPool.new({from: accounts[4]});
		const uintf4zv2e9 = BigInt("1315")
		const addressCO0SmRM = accounts[4]
		const boolKgteoAt = await ETFXPooleUpIlB3.decreaseAllowance.call(addressCO0SmRM, uintf4zv2e9, {from: "0x0000000000000000000000000000000000000001"});
		await ETFXPooleUpIlB3.renounceOwnership.call({from: accounts[3]});
		await ETFXPooleUpIlB3.getReward.call({from: accounts[1]});

		await expect(ETFXPooleUpIlB3.decreaseAllowance.call(addressCO0SmRM, uintf4zv2e9, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const stringvFExvf = "Vw8tnkfSYV2egWvA50d2ckEWpV9WxoVwtEbF5IJkFpxAcit"
		const stringT5WWyN1 = "mTxVo1"
		const uinthyi0ZfG = BigInt("57")
		const ETFXPoolQm28aSh = await ETFXPool.new(stringvFExvf, stringT5WWyN1, uinthyi0ZfG, {from: "0x0000000000000000000000000000000000000001"});
		const uintiVg4E71 = BigInt("879")
		const addressVUe3Kdp = accounts[1]
		const boolDHWhBU = await ETFXPoolQm28aSh.increaseAllowance.call(addressVUe3Kdp, uintiVg4E71, {from: accounts[3]});
		await ETFXPoolQm28aSh.getReward.call({from: accounts[0]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolZ0l053J = await ETFXPool.new({from: "0x0000000000000000000000000000000000000001"});
		const addressNdAk0hZ = accounts[1]
		const uint256LkUbyoL = await ETFXPoolZ0l053J.earned.call(addressNdAk0hZ, {from: "0x0000000000000000000000000000000000000001"});
		await ETFXPoolZ0l053J.nonReentrant.call({from: accounts[4]});
		await ETFXPoolZ0l053J.onlyOwner.call({from: accounts[5]});
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolTcJKe2B = await ETFXPool.new({from: accounts[4]});
		const uintCuiN2ig = BigInt("1310")
		const addressmT16RQb = accounts[1]
		const uint8lUcYEI8 = await ETFXPoolTcJKe2B.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const uint8hkeNmUd = await ETFXPoolTcJKe2B.decimals.call({from: accounts[0]});
		const uint8aU8uWjD = await ETFXPoolTcJKe2B.decimals.call({from: "0x0000000000000000000000000000000000000001"});
		const boolhYinEed = await ETFXPoolTcJKe2B.increaseAllowance.call(addressmT16RQb, uintCuiN2ig, {from: accounts[3]});

		assert.equal(boolhYinEed, true)
		assert.equal(uint8aU8uWjD, BigInt("8"))
		assert.equal(uint8hkeNmUd, BigInt("8"))
		assert.equal(uint8lUcYEI8, BigInt("8"))
	});

	it('test for ETFXPool', async () => {
		const ETFXPoola2hUfmB = await ETFXPool.new({from: accounts[4]});
		const uinta19xh9W = BigInt("137")
		const addressuy7P46J = accounts[2]
		const boolRMARsY = await ETFXPoola2hUfmB.increaseAllowance.call(addressuy7P46J, uinta19xh9W, {from: accounts[3]});
		const strings1I8t2B = await ETFXPoola2hUfmB.symbol.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(boolRMARsY, true)
		assert.equal(strings1I8t2B, "FETFX")
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolUw5cU8r = await ETFXPool.new({from: accounts[3]});
		const uintp84Ya4Y = BigInt("1899")
		const stringGjt9qfM = await ETFXPoolUw5cU8r.name.call({from: accounts[4]});
		const uint256D2nOXds = await ETFXPoolUw5cU8r.withdraw.call(uintp84Ya4Y, {from: accounts[0]});
		await ETFXPoolUw5cU8r.renounceOwnership.call({from: accounts[3]});

		assert.equal(stringGjt9qfM, "ETFX-FARM")
		await expect(ETFXPoolUw5cU8r.withdraw.call(uintp84Ya4Y, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolx68lpYM = await ETFXPool.new({from: accounts[5]});
		const uintOTnhF8 = BigInt("877")
		const addresspOd70c = accounts[1]
		const addressPvgFB8h = accounts[2]
		const uint9UZVVZ = BigInt("1403")
		const addressIA5W6Ni = accounts[0]
		const addressI6sefK9 = accounts[3]
		const boolm8rW8oy = await ETFXPoolx68lpYM.transferFrom.call(addressPvgFB8h, addresspOd70c, uintOTnhF8, {from: accounts[2]});
		const uint256jyWQvt8 = await ETFXPoolx68lpYM.stake.call(uint9UZVVZ, {from: accounts[2]});
		const uint256T94D3B = await ETFXPoolx68lpYM.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256h3naQpQ = await ETFXPoolx68lpYM.allowance.call(addressI6sefK9, addressIA5W6Ni, {from: accounts[3]});

		await expect(ETFXPoolx68lpYM.transferFrom.call(addressPvgFB8h, addresspOd70c, uintOTnhF8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooleUpIlB3 = await ETFXPool.new({from: accounts[4]});
		const addressYVAwAFA = accounts[3]
		const uintoFPVYCn = BigInt("569")
		const addressTIwHO3z = accounts[4]
		const addressQ5iK8iQ = await ETFXPooleUpIlB3.transferOwnership.call(addressYVAwAFA, {from: accounts[4]});
		const boolKgteoAt = await ETFXPooleUpIlB3.decreaseAllowance.call(addressTIwHO3z, uintoFPVYCn, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPooleUpIlB3.decreaseAllowance.call(addressTIwHO3z, uintoFPVYCn, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolV7Rvwww = await ETFXPool.new({from: accounts[0]});
		const addressR1aOcPP = accounts[4]
		const uintooEBC1y = BigInt("1127")
		const uintguqOuR = BigInt("1149")
		const addressZxUJGf = accounts[3]
		const stringcS7N17o = await ETFXPoolV7Rvwww.symbol.call({from: accounts[0]});
		const addressRHDuzEm = await ETFXPoolV7Rvwww.transferOwnership.call(addressR1aOcPP, {from: accounts[0]});
		const uint256rZUDWF2 = await ETFXPoolV7Rvwww.stake.call(uintooEBC1y, {from: accounts[2]});
		await ETFXPoolV7Rvwww.renounceOwnership.call({from: accounts[5]});
		const boolgw67mA = await ETFXPoolV7Rvwww.decreaseAllowance.call(addressZxUJGf, uintguqOuR, {from: accounts[0]});

		assert.equal(stringcS7N17o, "FETFX")
		await expect(ETFXPoolV7Rvwww.stake.call(uintooEBC1y, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooleUpIlB3 = await ETFXPool.new({from: accounts[4]});
		const uintm6UzmtW = BigInt("569")
		const addressKCgt4GU = accounts[5]
		await ETFXPooleUpIlB3.exit.call({from: accounts[3]});
		const boolKgteoAt = await ETFXPooleUpIlB3.decreaseAllowance.call(addressKCgt4GU, uintm6UzmtW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPooleUpIlB3.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPooleUpIlB3 = await ETFXPool.new({from: accounts[4]});
		const uintKPCiThG = BigInt("569")
		const addressJizuO3 = accounts[4]
		await ETFXPooleUpIlB3.renounceOwnership.call({from: accounts[2]});
		const boolKgteoAt = await ETFXPooleUpIlB3.decreaseAllowance.call(addressJizuO3, uintKPCiThG, {from: "0x0000000000000000000000000000000000000001"});

		await expect(ETFXPooleUpIlB3.renounceOwnership.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for ETFXPool', async () => {
		const ETFXPoolsO1P71X = await ETFXPool.new({from: accounts[0]});
		const addressjAFcdnI = accounts[2]
		const uint256k4Vyycq = await ETFXPoolsO1P71X.rewardPerToken.call({from: accounts[4]});
		const stringwl8Hir = await ETFXPoolsO1P71X.symbol.call({from: accounts[1]});
		const uint256A0DUDMJ = await ETFXPoolsO1P71X.totalSupply.call({from: accounts[2]});
		const uint256DOOlnyx = await ETFXPoolsO1P71X.balanceOf.call(addressjAFcdnI, {from: "0x0000000000000000000000000000000000000001"});
		const uint256FFT9n12 = await ETFXPoolsO1P71X.totalSupply.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(stringwl8Hir, "FETFX")
		assert.equal(uint256A0DUDMJ, BigInt("0"))
		assert.equal(uint256DOOlnyx, BigInt("0"))
		assert.equal(uint256FFT9n12, BigInt("0"))
		assert.equal(uint256k4Vyycq, BigInt("0"))
	});
})