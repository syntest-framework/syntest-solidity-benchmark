const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2ojhVECW = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintCJDL4QJ = BigInt("540")
		const addressfnZcn2D = accounts[3]
		const boolDBuv1pW = true
		const addressGfNXYIS = accounts[2]
		const uintt3E30m3 = BigInt("1973")
		const uintVy1mYkm = BigInt("1185")
		const addressFEHBek = accounts[1]
		const addresszZAaC8G = accounts[3]
		const addressqAGWXz = accounts[1]
		await BTCParamV2ojhVECW.updateBtcPrice.call({from: accounts[0]});
		const uint256LjrE1Dc = await BTCParamV2ojhVECW.setBtcTxFeeRewardRate.call(uintCJDL4QJ, {from: accounts[2]});
		await BTCParamV2ojhVECW.updateBtcPrice.call({from: accounts[0]});
		const addressh0KuRVc = await BTCParamV2ojhVECW.setParamSetter.call(addressfnZcn2D, {from: accounts[0]});
		const addressuBjQXAf = await BTCParamV2ojhVECW.initialize.call(addresszZAaC8G, addressFEHBek, uintVy1mYkm, uintt3E30m3, addressGfNXYIS, boolDBuv1pW, {from: accounts[1]});
		const addressgymA3Bb = await BTCParamV2ojhVECW.transferOwnership.call(addressqAGWXz, {from: accounts[2]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2rEfPOeY = await BTCParamV2.new({from: accounts[2]});
		const addressHydK51e = "0x0000000000000000000000000000000000000001"
		const addresssNyi0ZW = accounts[4]
		const addresscKCNifM = accounts[3]
//		await BTCParamV2rEfPOeY.updateBtcPrice.call({from: accounts[0]});
//		const addressrB2IqCG = await BTCParamV2rEfPOeY.addListener.call(addressHydK51e, {from: accounts[2]});
//		const uint256UAeW2p3 = await BTCParamV2rEfPOeY.btcIncomePerTPerSecInWei.call({from: accounts[4]});
//		const addressVLhHGgn = await BTCParamV2rEfPOeY.addListener.call(addresssNyi0ZW, {from: accounts[1]});
//		const addresstsBOEvP = await BTCParamV2rEfPOeY.addListener.call(addresscKCNifM, {from: accounts[3]});

		await expect(BTCParamV2rEfPOeY.updateBtcPrice.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2nVpb2ca = await BTCParamV2.new({from: accounts[1]});
		const uint256BmWy9iL = await BTCParamV2nVpb2ca.btcPrice.call({from: accounts[3]});
//		await BTCParamV2nVpb2ca.updateBtcPrice.call({from: accounts[0]});
//		await BTCParamV2nVpb2ca.onlyOwner.call({from: accounts[0]});

		assert.equal(uint256BmWy9iL, BigInt("0"))
		await expect(BTCParamV2nVpb2ca.updateBtcPrice.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2ybgMK1K = await BTCParamV2.new({from: accounts[0]});
		const addressErAk97L = accounts[4]
		const uintWmaTSC3 = BigInt("470")
		const uintq5t3nsY = BigInt("699")
//		const uint256yMkgFt2 = await BTCParamV2ybgMK1K.btcIncomePerTPerSecInWei.call({from: accounts[2]});
//		const addressyKUijdG = await BTCParamV2ybgMK1K.transferOwnership.call(addressErAk97L, {from: accounts[1]});
//		const uint256wfZNZG8 = await BTCParamV2ybgMK1K.setBtcNetDiff.call(uintWmaTSC3, {from: accounts[0]});
//		const uint256KkEvFRk = await BTCParamV2ybgMK1K.setBtcBlockReward.call(uintq5t3nsY, {from: accounts[2]});
//		const uint256VCJhQie = await BTCParamV2ybgMK1K.btcIncomePerTPerSecInWei.call({from: accounts[4]});

		await expect(BTCParamV2ybgMK1K.btcIncomePerTPerSecInWei.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2MqvHVe = await BTCParamV2.new({from: accounts[0]});
		const addressGI1MfM3 = accounts[1]
//		await BTCParamV2MqvHVe.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressEq0QNcg = await BTCParamV2MqvHVe.transferOwnership.call(addressGI1MfM3, {from: accounts[0]});

		await expect(BTCParamV2MqvHVe.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2rEfPOeY = await BTCParamV2.new({from: accounts[2]});
		const addressEKK6YJ6 = accounts[3]
		const addressvoXckJc = "0x0000000000000000000000000000000000000001"
		const addressCYGBHCp = accounts[4]
		const addressXCRyRAb = accounts[3]
//		const addressQ2fMyAZ = await BTCParamV2rEfPOeY.setParamSetter.call(addressEKK6YJ6, {from: accounts[0]});
//		await BTCParamV2rEfPOeY.updateBtcPrice.call({from: accounts[0]});
//		const addressrB2IqCG = await BTCParamV2rEfPOeY.addListener.call(addressvoXckJc, {from: accounts[2]});
//		const uint256UAeW2p3 = await BTCParamV2rEfPOeY.btcIncomePerTPerSecInWei.call({from: accounts[4]});
//		const addressVLhHGgn = await BTCParamV2rEfPOeY.addListener.call(addressCYGBHCp, {from: accounts[1]});
//		const addresstsBOEvP = await BTCParamV2rEfPOeY.addListener.call(addressXCRyRAb, {from: accounts[3]});

		await expect(BTCParamV2rEfPOeY.setParamSetter.call(addressEKK6YJ6, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2HXHdIj6 = await BTCParamV2.new({from: accounts[3]});
		const bool00H18T = false
		const addressHNeWXqt = accounts[4]
		const uintNU91Ofa = BigInt("320")
		const uintIlcfZ2D = BigInt("1058")
		const addressYPj4R6z = accounts[5]
		const addressX4PzBtL = accounts[3]
		const addresscynyG5B = accounts[0]
		const addressOZnNrnE = accounts[5]
		const uintbrZo6U = BigInt("121")
		const uintG7ORIB8 = BigInt("208")
//		const addressyOWdZXN = await BTCParamV2HXHdIj6.initialize.call(addressX4PzBtL, addressYPj4R6z, uintIlcfZ2D, uintNU91Ofa, addressHNeWXqt, bool00H18T, {from: accounts[4]});
//		const addressRJEJHPx = await BTCParamV2HXHdIj6.addListener.call(addresscynyG5B, {from: accounts[0]});
//		const addresssYAqwL6 = await BTCParamV2HXHdIj6.addListener.call(addressOZnNrnE, {from: accounts[4]});
//		await BTCParamV2HXHdIj6.updateBtcPrice.call({from: accounts[2]});
//		const uint256K0LphxT = await BTCParamV2HXHdIj6.setBtcBlockReward.call(uintbrZo6U, {from: accounts[1]});
//		const uint256Z3o8Rne = await BTCParamV2HXHdIj6.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintG7ORIB8, {from: accounts[4]});

		await expect(BTCParamV2HXHdIj6.initialize.call(addressX4PzBtL, addressYPj4R6z, uintIlcfZ2D, uintNU91Ofa, addressHNeWXqt, bool00H18T, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})