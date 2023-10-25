const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2pR9Ljvl = await BTCParamV2.new({from: accounts[0]});
		const boolyEZOKhh = true
		const addresslKZwayV = "0x0000000000000000000000000000000000000001"
		const uintkgP1KPp = BigInt("395")
		const uintNeqgayQ = BigInt("1529")
		const addresshjPG0f2 = accounts[1]
		const addressSczunZo = "0x0000000000000000000000000000000000000001"
		const uintQ2HMOZD = BigInt("802")
		const uintCyI1mtm = BigInt("979")
		const addressn3ed9H = accounts[5]
//		const addressb1QlrAy = await BTCParamV2pR9Ljvl.initialize.call(addressSczunZo, addresshjPG0f2, uintNeqgayQ, uintkgP1KPp, addresslKZwayV, boolyEZOKhh, {from: accounts[4]});
//		const uint256Zlpq6UX = await BTCParamV2pR9Ljvl.setBtcNetDiff.call(uintQ2HMOZD, {from: accounts[4]});
//		const uint256X52qkD = await BTCParamV2pR9Ljvl.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintCyI1mtm, {from: accounts[2]});
//		await BTCParamV2pR9Ljvl.onlyOwner.call({from: accounts[2]});
//		const addressTrsQgY1 = await BTCParamV2pR9Ljvl.transferOwnership.call(addressn3ed9H, {from: accounts[3]});

		await expect(BTCParamV2pR9Ljvl.initialize.call(addressSczunZo, addresshjPG0f2, uintNeqgayQ, uintkgP1KPp, addresslKZwayV, boolyEZOKhh, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2THLwHLZ = await BTCParamV2.new({from: accounts[0]});
		const uintSTqQ4H = BigInt("360")
		const addressmfWXc0h = accounts[0]
		const uintYGDCMwH = BigInt("1408")
//		const uint256i24faDr = await BTCParamV2THLwHLZ.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintSTqQ4H, {from: accounts[1]});
//		const address6KGgxZ = await BTCParamV2THLwHLZ.transferOwnership.call(addressmfWXc0h, {from: accounts[0]});
//		const uint256fsAYpNp = await BTCParamV2THLwHLZ.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintYGDCMwH, {from: accounts[4]});
//		await BTCParamV2THLwHLZ.onlyOwner.call({from: accounts[2]});
//		const uint256l7j06k = await BTCParamV2THLwHLZ.btcIncomePerTPerSecInWei.call({from: accounts[2]});

		await expect(BTCParamV2THLwHLZ.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintSTqQ4H, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2ENZ9dI = await BTCParamV2.new({from: accounts[3]});
		const uintN2V0T3 = BigInt("1793")
//		const uint256fYakhMY = await BTCParamV2ENZ9dI.btcIncomePerTPerSecInWei.call({from: accounts[4]});
//		const uint256AI2X3Lj = await BTCParamV2ENZ9dI.setBtcBlockReward.call(uintN2V0T3, {from: accounts[1]});

		await expect(BTCParamV2ENZ9dI.btcIncomePerTPerSecInWei.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2T7zDX1 = await BTCParamV2.new({from: accounts[4]});
		const addresstDQt51e = accounts[3]
		const uintJcWiT5c = BigInt("1782")
		const addressUHgiZ11 = accounts[1]
		const addressVaczaL = accounts[4]
//		await BTCParamV2T7zDX1.onlyOwner.call({from: accounts[0]});
//		await BTCParamV2T7zDX1.onlyParamSetter.call({from: accounts[0]});
//		const addressvNj0NY = await BTCParamV2T7zDX1.transferOwnership.call(addresstDQt51e, {from: accounts[0]});
//		const uint256AKGF8bW = await BTCParamV2T7zDX1.setBtcNetDiff.call(uintJcWiT5c, {from: accounts[4]});
//		const addresslO3OJIh = await BTCParamV2T7zDX1.setParamSetter.call(addressUHgiZ11, {from: accounts[0]});
//		const addressPmcXcr4 = await BTCParamV2T7zDX1.transferOwnership.call(addressVaczaL, {from: accounts[4]});

		await expect(BTCParamV2T7zDX1.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2P8oGpfu = await BTCParamV2.new({from: accounts[0]});
		const addressXtcNBp9 = accounts[5]
//		const addressN2ozCNy = await BTCParamV2P8oGpfu.setParamSetter.call(addressXtcNBp9, {from: accounts[4]});
//		await BTCParamV2P8oGpfu.updateBtcPrice.call({from: accounts[4]});

		await expect(BTCParamV2P8oGpfu.setParamSetter.call(addressXtcNBp9, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2eqggD3d = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintrT2Iw2B = BigInt("904")
		const uintWGIT6K0 = BigInt("1702")
		const uintboL1gLu = BigInt("1386")
		const uint256tEnfz0O = await BTCParamV2eqggD3d.setBtcNetDiff.call(uintrT2Iw2B, {from: accounts[4]});
		const uint256lVnVHYf = await BTCParamV2eqggD3d.setBtcTxFeeRewardRate.call(uintWGIT6K0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Fi1Xteb = await BTCParamV2eqggD3d.setBtcTxFeeRewardRate.call(uintboL1gLu, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2XR2O9nv = await BTCParamV2.new({from: accounts[2]});
		const uintN7rQzHj = BigInt("510")
		const addressxxIzCcJ = accounts[1]
		const uint256YBM6uMk = await BTCParamV2XR2O9nv.btcPrice.call({from: accounts[3]});
//		const uint256kojBDAz = await BTCParamV2XR2O9nv.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintN7rQzHj, {from: accounts[2]});
//		await BTCParamV2XR2O9nv.updateBtcPrice.call({from: accounts[3]});
//		await BTCParamV2XR2O9nv.onlyParamSetter.call({from: accounts[3]});
//		const addressavdxPFP = await BTCParamV2XR2O9nv.transferOwnership.call(addressxxIzCcJ, {from: accounts[0]});

		assert.equal(uint256YBM6uMk, BigInt("0"))
		await expect(BTCParamV2XR2O9nv.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintN7rQzHj, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})