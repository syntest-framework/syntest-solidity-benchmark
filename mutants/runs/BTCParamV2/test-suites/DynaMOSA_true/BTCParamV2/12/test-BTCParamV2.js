const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2nrh9lji = await BTCParamV2.new({from: accounts[3]});
		const addressKOT0rCf = accounts[4]
		const uintszPIrN = BigInt("287")
		const uintRcR4hDc = BigInt("1502")
		const uintZXqXZ56 = BigInt("1630")
		const uintabH5Xf7 = BigInt("836")
		const boolevLVz1j = await BTCParamV2nrh9lji.removeListener.call(addressKOT0rCf, {from: accounts[1]});
		const uint256RdY8Mzx = await BTCParamV2nrh9lji.setBtcBlockReward.call(uintszPIrN, {from: accounts[0]});
		await BTCParamV2nrh9lji.updateBtcPrice.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256aR2GZTL = await BTCParamV2nrh9lji.setBtcBlockReward.call(uintRcR4hDc, {from: accounts[2]});
		const uint256MDiqcjS = await BTCParamV2nrh9lji.setBtcNetDiff.call(uintZXqXZ56, {from: "0x0000000000000000000000000000000000000001"});
		const uint256LyGqKqr = await BTCParamV2nrh9lji.setBtcTxFeeRewardRate.call(uintabH5Xf7, {from: accounts[0]});

		await expect(BTCParamV2nrh9lji.removeListener.call(addressKOT0rCf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2I1gkopA = await BTCParamV2.new({from: accounts[3]});
		const uintszwNNzJ = BigInt("983")
		const uints30hs08 = BigInt("504")
		const uint2562F5k5C = await BTCParamV2I1gkopA.btcPrice.call({from: accounts[1]});
		const uint256EEaEBuZ = await BTCParamV2I1gkopA.btcPrice.call({from: accounts[4]});
		const uint256Mzii4Lh = await BTCParamV2I1gkopA.btcIncomePerTPerSecInWei.call({from: accounts[3]});
		const uint256dcwnKN = await BTCParamV2I1gkopA.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintszwNNzJ, {from: accounts[2]});
		const uint256WzAjI02 = await BTCParamV2I1gkopA.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uints30hs08, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint2562F5k5C, BigInt("0"))
		assert.equal(uint256EEaEBuZ, BigInt("0"))
		await expect(BTCParamV2I1gkopA.btcIncomePerTPerSecInWei.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2p2yaC9u = await BTCParamV2.new({from: accounts[0]});
		const addressjopUgAU = accounts[4]
		const uintaXsrZ8G = BigInt("1164")
		const addressIyWcxxj = accounts[2]
		const addressnXWRwXm = await BTCParamV2p2yaC9u.transferOwnership.call(addressjopUgAU, {from: accounts[4]});
		const uint256XLH5szZ = await BTCParamV2p2yaC9u.setBtcBlockReward.call(uintaXsrZ8G, {from: accounts[2]});
		const addressFiKko1n = await BTCParamV2p2yaC9u.transferOwnership.call(addressIyWcxxj, {from: accounts[5]});

		await expect(BTCParamV2p2yaC9u.transferOwnership.call(addressjopUgAU, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2E4FNQr = await BTCParamV2.new({from: accounts[4]});
		const addresszEs2aKX = accounts[1]
		const addresskZ6C7H7 = accounts[1]
		await BTCParamV2E4FNQr.onlyOwner.call({from: accounts[3]});
		const addressUlqYYTD = await BTCParamV2E4FNQr.setParamSetter.call(addresszEs2aKX, {from: accounts[3]});
		const addressgdcuiM7 = await BTCParamV2E4FNQr.setParamSetter.call(addresskZ6C7H7, {from: accounts[2]});

		await expect(BTCParamV2E4FNQr.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2J30WzIE = await BTCParamV2.new({from: accounts[2]});
		const boolhvrPmpY = false
		const addressr3vbC62 = accounts[5]
		const uintLxp8Kx = BigInt("1971")
		const uintsrYZ6A6 = BigInt("1467")
		const addressYy7txW = accounts[3]
		const addresszLdkKaT = accounts[1]
		const uintIILHA4h = BigInt("1280")
		const addressydn1OIN = await BTCParamV2J30WzIE.initialize.call(addresszLdkKaT, addressYy7txW, uintsrYZ6A6, uintLxp8Kx, addressr3vbC62, boolhvrPmpY, {from: "0x0000000000000000000000000000000000000001"});
		await BTCParamV2J30WzIE.onlyParamSetter.call({from: accounts[3]});
		const uint256tM5S9Yu = await BTCParamV2J30WzIE.setBtcBlockReward.call(uintIILHA4h, {from: accounts[2]});

		await expect(BTCParamV2J30WzIE.initialize.call(addresszLdkKaT, addressYy7txW, uintsrYZ6A6, uintLxp8Kx, addressr3vbC62, boolhvrPmpY, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2HgTDPzi = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const boolEKSCp6B = false
		const addresspUkhLbh = accounts[0]
		const uinteWRF1NT = BigInt("221")
		const uintkmlqWIZ = BigInt("1490")
		const addressKf54BY = accounts[0]
		const addresseNJp6yJ = accounts[3]
		const addressfb5LgES = accounts[4]
		const address1myEjb = accounts[4]
		const addressb8wA0xI = await BTCParamV2HgTDPzi.initialize.call(addresseNJp6yJ, addressKf54BY, uintkmlqWIZ, uinteWRF1NT, addresspUkhLbh, boolEKSCp6B, {from: accounts[2]});
		const uint256TJg820z = await BTCParamV2HgTDPzi.btcIncomePerTPerSecInWei.call({from: accounts[3]});
		const addressvDGq6bc = await BTCParamV2HgTDPzi.addListener.call(addressfb5LgES, {from: accounts[4]});
		const addressAm3goXW = await BTCParamV2HgTDPzi.addListener.call(address1myEjb, {from: accounts[4]});
	});
})