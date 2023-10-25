const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2MgIPtRD = await BTCParamV2.new({from: accounts[5]});
		const uint256ZYejITj = await BTCParamV2MgIPtRD.btcPrice.call({from: accounts[5]});
//		await BTCParamV2MgIPtRD.updateBtcPrice.call({from: accounts[3]});
//		const uint256q3AHuG = await BTCParamV2MgIPtRD.btcIncomePerTPerSecInWei.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256ZYejITj, BigInt("0"))
		await expect(BTCParamV2MgIPtRD.updateBtcPrice.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2DKeTLcU = await BTCParamV2.new({from: accounts[4]});
//		const uint256UM5HUl2 = await BTCParamV2DKeTLcU.btcIncomePerTPerSecInWei.call({from: accounts[1]});
//		await BTCParamV2DKeTLcU.updateBtcPrice.call({from: accounts[4]});

		await expect(BTCParamV2DKeTLcU.btcIncomePerTPerSecInWei.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2xPfuYeX = await BTCParamV2.new({from: accounts[2]});
		const uintIzokHC5 = BigInt("1905")
		const uintg8EclQw = BigInt("1811")
		const addressFk0czT8 = accounts[0]
		const uintVotTW4M = BigInt("1812")
//		await BTCParamV2xPfuYeX.onlyOwner.call({from: accounts[2]});
//		await BTCParamV2xPfuYeX.onlyOwner.call({from: accounts[5]});
//		const uint256Pv4dIgQ = await BTCParamV2xPfuYeX.setBtcTxFeeRewardRate.call(uintIzokHC5, {from: accounts[1]});
//		const uint256X89ogVB = await BTCParamV2xPfuYeX.setBtcBlockReward.call(uintg8EclQw, {from: accounts[3]});
//		const addressX6yshmM = await BTCParamV2xPfuYeX.setParamSetter.call(addressFk0czT8, {from: accounts[4]});
//		const uint2567d4N06 = await BTCParamV2xPfuYeX.setBtcNetDiff.call(uintVotTW4M, {from: accounts[2]});

		await expect(BTCParamV2xPfuYeX.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2iY6P8zb = await BTCParamV2.new({from: accounts[4]});
		const addressIcWCKHn = accounts[1]
//		const addressXNnMaHu = await BTCParamV2iY6P8zb.transferOwnership.call(addressIcWCKHn, {from: accounts[1]});
//		await BTCParamV2iY6P8zb.updateBtcPrice.call({from: accounts[1]});

		await expect(BTCParamV2iY6P8zb.transferOwnership.call(addressIcWCKHn, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2yPvo6Bu = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressIwgHSRL = accounts[4]
		const uint3VNt6y = BigInt("520")
		const booleoC6UMt = await BTCParamV2yPvo6Bu.removeListener.call(addressIwgHSRL, {from: accounts[1]});
		await BTCParamV2yPvo6Bu.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await BTCParamV2yPvo6Bu.updateBtcPrice.call({from: accounts[2]});
		const uint256BJaOfme = await BTCParamV2yPvo6Bu.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uint3VNt6y, {from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2DKeTLcU = await BTCParamV2.new({from: accounts[4]});
		const boolh81bPvO = true
		const addressSppGV0R = accounts[2]
		const uintAfrHuWc = BigInt("682")
		const uintFzx5diP = BigInt("1081")
		const addresskuwDykr = "0x0000000000000000000000000000000000000001"
		const addresstVZvvOo = "0x0000000000000000000000000000000000000001"
//		const addresse9fRrZ0 = await BTCParamV2DKeTLcU.initialize.call(addresstVZvvOo, addresskuwDykr, uintFzx5diP, uintAfrHuWc, addressSppGV0R, boolh81bPvO, {from: accounts[0]});
//		const uint256UM5HUl2 = await BTCParamV2DKeTLcU.btcIncomePerTPerSecInWei.call({from: accounts[1]});

		await expect(BTCParamV2DKeTLcU.initialize.call(addresstVZvvOo, addresskuwDykr, uintFzx5diP, uintAfrHuWc, addressSppGV0R, boolh81bPvO, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})