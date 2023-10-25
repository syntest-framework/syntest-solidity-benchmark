const DJCoin = artifacts.require("DJCoin");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DJCoin', (accounts) => {
	it('test for DJCoin', async () => {
		const DJCoinl6CNMQY = await DJCoin.new({from: accounts[0]});
		const uintWk4covj = BigInt("22")
		const addressYh1EWKz = accounts[0]
		const addressXi4PueT = accounts[0]
		const addresszjQxZDR = accounts[3]
		const uintbFHEc5T = BigInt("1149")
		const addressDptAhb = accounts[1]
//		const boolkw6U0o8 = await DJCoinl6CNMQY.transferFrom.call(addressXi4PueT, addressYh1EWKz, uintWk4covj, {from: accounts[0]});
//		const addresszYLu8cX = await DJCoinl6CNMQY.transferOwnership.call(addresszjQxZDR, {from: accounts[4]});
//		await DJCoinl6CNMQY.renounceOwnership.call({from: accounts[4]});
//		const boolHYV4ZMi = await DJCoinl6CNMQY.transfer.call(addressDptAhb, uintbFHEc5T, {from: accounts[2]});

		await expect(DJCoinl6CNMQY.transferFrom.call(addressXi4PueT, addressYh1EWKz, uintWk4covj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinyX76S66 = await DJCoin.new({from: accounts[2]});
		const uintqwIYJes = BigInt("2009")
		const addressvNh6Wz6 = accounts[4]
		const addressgLbVK4D = accounts[4]
		const uintN9AH95D = BigInt("1715")
		const addressvAr5XtC = accounts[5]
		const uintDUNPU8X = BigInt("1610")
		const address06CxF2 = accounts[1]
		const addressvZsy2cZ = accounts[2]
		const boolw5fK0BV = await DJCoinyX76S66.increaseAllowance.call(addressvNh6Wz6, uintqwIYJes, {from: accounts[0]});
		const uint256OtnhuNi = await DJCoinyX76S66.balanceOf.call(addressgLbVK4D, {from: "0x0000000000000000000000000000000000000001"});
		const boolVigUu3 = await DJCoinyX76S66.decreaseAllowance.call(addressvAr5XtC, uintN9AH95D, {from: accounts[0]});
		const boolCzom41E = await DJCoinyX76S66.decreaseAllowance.call(address06CxF2, uintDUNPU8X, {from: accounts[1]});
//		const addressXjcyTMd = await DJCoinyX76S66.validRecipient.call(addressvZsy2cZ, {from: accounts[2]});

		assert.equal(boolCzom41E, true)
		assert.equal(boolVigUu3, true)
		assert.equal(boolw5fK0BV, true)
		assert.equal(uint256OtnhuNi, BigInt("0"))
		await expect(DJCoinyX76S66.validRecipient.call(addressvZsy2cZ, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoineRWdgpL = await DJCoin.new({from: accounts[4]});
		const uintO0SlgGl = BigInt("840")
		const addressu2DShPD = accounts[4]
		const boolOGv1eNs = await DJCoineRWdgpL.changetokensPerBlock.call(uintO0SlgGl, {from: accounts[1]});
//		const addressTq7WUNP = await DJCoineRWdgpL.validRecipient.call(addressu2DShPD, {from: accounts[2]});
//		await DJCoineRWdgpL.onlyOwner.call({from: accounts[5]});
//		await DJCoineRWdgpL.renounceOwnership.call({from: accounts[0]});

		assert.equal(boolOGv1eNs, true)
		await expect(DJCoineRWdgpL.validRecipient.call(addressu2DShPD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinM5h3uDg = await DJCoin.new({from: accounts[2]});
		const addressbEWzrax = "0x0000000000000000000000000000000000000001"
		const addressm6At63q = accounts[4]
		const addressyjfpj8D = accounts[3]
		const uinttWSEAUO = BigInt("1940")
		const addressSCIszXS = accounts[4]
		const uint256Y7cxgo6 = await DJCoinM5h3uDg.totalSupply.call({from: accounts[4]});
//		const addressTroipo = await DJCoinM5h3uDg.validRecipient.call(addressbEWzrax, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256sl5Bak0 = await DJCoinM5h3uDg.allowance.call(addressyjfpj8D, addressm6At63q, {from: accounts[5]});
//		const boolPt7EXA1 = await DJCoinM5h3uDg.approve.call(addressSCIszXS, uinttWSEAUO, {from: accounts[2]});

		assert.equal(uint256Y7cxgo6, BigInt("2100000000000"))
		await expect(DJCoinM5h3uDg.validRecipient.call(addressbEWzrax, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinVKCUl7O = await DJCoin.new({from: accounts[4]});
		const addressOq4kVZ3 = "0x0000000000000000000000000000000000000001"
		const addressMCzAZwH = accounts[0]
		const addressDESFftw = accounts[3]
		const uintdsTRGVC = BigInt("213")
		const addressikElzl3 = accounts[0]
		const uint256RVTmRwr = await DJCoinVKCUl7O.allowance.call(addressMCzAZwH, addressOq4kVZ3, {from: accounts[0]});
//		const addressP00D9Ue = await DJCoinVKCUl7O.transferOwnership.call(addressDESFftw, {from: accounts[5]});
//		const uint256ByCtn8 = await DJCoinVKCUl7O.totalSupply.call({from: accounts[5]});
//		await DJCoinVKCUl7O.renounceOwnership.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolrwCy721 = await DJCoinVKCUl7O.decreaseAllowance.call(addressikElzl3, uintdsTRGVC, {from: accounts[5]});

		assert.equal(uint256RVTmRwr, BigInt("0"))
		await expect(DJCoinVKCUl7O.transferOwnership.call(addressDESFftw, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinAdtH6aD = await DJCoin.new({from: accounts[1]});
		const uintBYCI70R = BigInt("1830")
		const addressOAjeAUr = await DJCoinAdtH6aD.owner.call({from: accounts[0]});
//		await DJCoinAdtH6aD.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const boollPyN6Z = await DJCoinAdtH6aD.changetokensPerBlock.call(uintBYCI70R, {from: accounts[5]});

		assert.equal(addressOAjeAUr, 0x23BE96123eaFaC2465c02Ebc144b9064Ab5b2D53)
		await expect(DJCoinAdtH6aD.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinAdtH6aD = await DJCoin.new({from: accounts[1]});
		const uintl4Xabl6 = BigInt("1808")
		const uintqu9U9mY = BigInt("1351")
		const uintoKRVQyp = BigInt("1408")
		const addressT5fGH3X = accounts[2]
		const boollPyN6Z = await DJCoinAdtH6aD.changetokensPerBlock.call(uintl4Xabl6, {from: accounts[5]});
		const uint256AEPQG9W = await DJCoinAdtH6aD.burn.call(uintoKRVQyp, uintqu9U9mY, {from: accounts[1]});
		const uint256f4FKVEC = await DJCoinAdtH6aD.balanceOf.call(addressT5fGH3X, {from: accounts[2]});

		assert.equal(boollPyN6Z, true)
		assert.equal(uint256AEPQG9W, BigInt("1816290000000"))
		assert.equal(uint256f4FKVEC, BigInt("0"))
	});

	it('test for DJCoin', async () => {
		const DJCoinAdtH6aD = await DJCoin.new({from: accounts[1]});
		const uintuFlrg4 = BigInt("1808")
		const uintwn1MXQD = BigInt("2012")
		const addressgrWOzGc = accounts[3]
		const uintnozMZQy = BigInt("620")
		const addresshdDkq0I = accounts[0]
		const addressNoexa18 = accounts[1]
		const boollPyN6Z = await DJCoinAdtH6aD.changetokensPerBlock.call(uintuFlrg4, {from: accounts[5]});
//		const bool9yocbR = await DJCoinAdtH6aD.transfer.call(addressgrWOzGc, uintwn1MXQD, {from: "0x0000000000000000000000000000000000000001"});
//		const booloVDmbCq = await DJCoinAdtH6aD.transferFrom.call(addressNoexa18, addresshdDkq0I, uintnozMZQy, {from: accounts[1]});

		assert.equal(boollPyN6Z, true)
		await expect(DJCoinAdtH6aD.transfer.call(addressgrWOzGc, uintwn1MXQD, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinAdtH6aD = await DJCoin.new({from: accounts[1]});
		const uinty6rTAit = BigInt("1808")
		const uinttOQA5HO = BigInt("1163")
		const addressG8InyJ5 = accounts[3]
		const boollPyN6Z = await DJCoinAdtH6aD.changetokensPerBlock.call(uinty6rTAit, {from: accounts[5]});
		const boolX2Vcbhl = await DJCoinAdtH6aD.approve.call(addressG8InyJ5, uinttOQA5HO, {from: accounts[3]});

		assert.equal(boolX2Vcbhl, true)
		assert.equal(boollPyN6Z, true)
	});

	it('test for DJCoin', async () => {
		const DJCoinV28JHfe = await DJCoin.new({from: "0x0000000000000000000000000000000000000001"});
		const uintPKnDX8O = BigInt("1615")
		const uintWnNVNGb = BigInt("719")
		const uints78HXL = BigInt("696")
		const address7RNcxm = accounts[4]
		const addressd388zXF = accounts[3]
		const uint256cKKcJcA = await DJCoinV28JHfe.burn.call(uintWnNVNGb, uintPKnDX8O, {from: accounts[2]});
		const addressX2N3UnN = await DJCoinV28JHfe.owner.call({from: accounts[4]});
		await DJCoinV28JHfe.onlyOwner.call({from: accounts[1]});
		const boolvEZLsGg = await DJCoinV28JHfe.transfer.call(address7RNcxm, uints78HXL, {from: accounts[2]});
		const uint256Vho1Gl = await DJCoinV28JHfe.balanceOf.call(addressd388zXF, {from: accounts[0]});
	});

	it('test for DJCoin', async () => {
		const DJCoinAdtH6aD = await DJCoin.new({from: accounts[1]});
		const uintaC9FjGP = BigInt("1819")
		const addresszQuncP = "0x0000000000000000000000000000000000000001"
		const uintoM9aMfB = BigInt("94")
		const addressC5dlfV7 = accounts[1]
		const uint256mmZeFTK = await DJCoinAdtH6aD.totalSupply.call({from: accounts[1]});
		const boollPyN6Z = await DJCoinAdtH6aD.changetokensPerBlock.call(uintaC9FjGP, {from: accounts[5]});
		const addressiAxijUv = await DJCoinAdtH6aD.transferOwnership.call(addresszQuncP, {from: accounts[1]});
//		const boolscoeHsl = await DJCoinAdtH6aD.transfer.call(addressC5dlfV7, uintoM9aMfB, {from: accounts[0]});

		assert.equal(boollPyN6Z, true)
		assert.equal(uint256mmZeFTK, BigInt("2100000000000"))
		await expect(DJCoinAdtH6aD.transfer.call(addressC5dlfV7, uintoM9aMfB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinLm5Opmq = await DJCoin.new({from: accounts[3]});
		const uintajCjg8Q = BigInt("1234")
		const uintAeCRU9H = BigInt("1041")
		const addressH7S6yOW = "0x0000000000000000000000000000000000000001"
		const addresshLn6CB1 = accounts[3]
		const addressldSIvVo = accounts[2]
//		await DJCoinLm5Opmq.renounceOwnership.call({from: accounts[3]});
//		const boolFnBpUUG = await DJCoinLm5Opmq.changetokensPerBlock.call(uintajCjg8Q, {from: "0x0000000000000000000000000000000000000001"});
//		await DJCoinLm5Opmq.onlyOwner.call({from: accounts[0]});
//		const booldUXqIIU = await DJCoinLm5Opmq.transferFrom.call(addresshLn6CB1, addressH7S6yOW, uintAeCRU9H, {from: accounts[3]});
//		const addressF8sFGSz = await DJCoinLm5Opmq.transferOwnership.call(addressldSIvVo, {from: accounts[1]});

		await expect(DJCoinLm5Opmq.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DJCoin', async () => {
		const DJCoinAdtH6aD = await DJCoin.new({from: accounts[1]});
		const uintNajROx = BigInt("0")
		const addressLycaSN2 = accounts[2]
		const boolscoeHsl = await DJCoinAdtH6aD.transfer.call(addressLycaSN2, uintNajROx, {from: accounts[0]});

		assert.equal(boolscoeHsl, true)
	});
})