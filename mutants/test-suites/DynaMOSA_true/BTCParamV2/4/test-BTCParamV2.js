const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV27nlNHf = await BTCParamV2.new({from: accounts[3]});
		const addresslbqj371 = accounts[3]
		const addressgAthmov = "0x0000000000000000000000000000000000000001"
		const uintfEXdtN7 = BigInt("1864")
		const uint256f4bluP0 = await BTCParamV27nlNHf.btcPrice.call({from: accounts[4]});
//		const addressTUWCmAD = await BTCParamV27nlNHf.addListener.call(addresslbqj371, {from: accounts[0]});
//		const uint256ZmCwtpz = await BTCParamV27nlNHf.btcIncomePerTPerSecInWei.call({from: accounts[0]});
//		const addresseDuOktx = await BTCParamV27nlNHf.addListener.call(addressgAthmov, {from: accounts[2]});
//		const uint256WV6cE9B = await BTCParamV27nlNHf.setBtcBlockReward.call(uintfEXdtN7, {from: accounts[0]});

		assert.equal(uint256f4bluP0, BigInt("0"))
		await expect(BTCParamV27nlNHf.addListener.call(addresslbqj371, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2in1gKWk = await BTCParamV2.new({from: accounts[1]});
		const addressQpXHirs = accounts[2]
		const uintt7YGl50 = BigInt("1188")
		const uintqZRizyE = BigInt("538")
//		const addressjH1o4aI = await BTCParamV2in1gKWk.transferOwnership.call(addressQpXHirs, {from: accounts[2]});
//		const uint2561xqMow = await BTCParamV2in1gKWk.setBtcTxFeeRewardRate.call(uintt7YGl50, {from: accounts[0]});
//		const uint256ZI6gTj = await BTCParamV2in1gKWk.btcPrice.call({from: accounts[2]});
//		await BTCParamV2in1gKWk.onlyParamSetter.call({from: accounts[2]});
//		const uint256kD0CC8 = await BTCParamV2in1gKWk.setBtcNetDiff.call(uintqZRizyE, {from: accounts[4]});
//		await BTCParamV2in1gKWk.updateBtcPrice.call({from: accounts[4]});

		await expect(BTCParamV2in1gKWk.transferOwnership.call(addressQpXHirs, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2dueedzZ = await BTCParamV2.new({from: accounts[4]});
		const addressIEIh7qi = accounts[0]
//		const uint256oRT5FjC = await BTCParamV2dueedzZ.btcIncomePerTPerSecInWei.call({from: accounts[4]});
//		const boolC8bu23l = await BTCParamV2dueedzZ.removeListener.call(addressIEIh7qi, {from: accounts[5]});
//		await BTCParamV2dueedzZ.onlyParamSetter.call({from: accounts[3]});

		await expect(BTCParamV2dueedzZ.btcIncomePerTPerSecInWei.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2JmMRElR = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressSUKDYvD = accounts[2]
		const uintHX6mItb = BigInt("862")
		const addressKpkSiSU = accounts[5]
		await BTCParamV2JmMRElR.updateBtcPrice.call({from: accounts[2]});
		const boolQru6ngG = await BTCParamV2JmMRElR.removeListener.call(addressSUKDYvD, {from: accounts[1]});
		const uint256n3PTROE = await BTCParamV2JmMRElR.setBtcNetDiff.call(uintHX6mItb, {from: accounts[3]});
		const addressMUznCMi = await BTCParamV2JmMRElR.setParamSetter.call(addressKpkSiSU, {from: accounts[3]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2xGn3cGk = await BTCParamV2.new({from: accounts[0]});
		const boolIC1rFfw = false
		const addressvx9xLvG = accounts[5]
		const uintoVFWw0c = BigInt("1160")
		const uintPviDC0L = BigInt("579")
		const addressRrz6G2K = accounts[1]
		const addresshQToexh = accounts[4]
		const uintGh9DFYi = BigInt("1769")
//		const addresseGOtdI5 = await BTCParamV2xGn3cGk.initialize.call(addresshQToexh, addressRrz6G2K, uintPviDC0L, uintoVFWw0c, addressvx9xLvG, boolIC1rFfw, {from: accounts[3]});
//		const uint256I46WD3C = await BTCParamV2xGn3cGk.setBtcTxFeeRewardRate.call(uintGh9DFYi, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256LaKgcb2 = await BTCParamV2xGn3cGk.btcPrice.call({from: accounts[5]});

		await expect(BTCParamV2xGn3cGk.initialize.call(addresshQToexh, addressRrz6G2K, uintPviDC0L, uintoVFWw0c, addressvx9xLvG, boolIC1rFfw, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2kf6pgK7 = await BTCParamV2.new({from: accounts[4]});
		const addressIAd1ReD = accounts[4]
//		await BTCParamV2kf6pgK7.onlyOwner.call({from: accounts[1]});
//		const addressfRWCtub = await BTCParamV2kf6pgK7.addListener.call(addressIAd1ReD, {from: accounts[1]});

		await expect(BTCParamV2kf6pgK7.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})