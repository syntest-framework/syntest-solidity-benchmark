const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2ercWsCW = await BTCParamV2.new({from: accounts[1]});
		const addressUfqo9xD = accounts[2]
		const uintdy8uS1W = BigInt("1514")
		const addressIQsrtsG = accounts[4]
		const uintRKnAqt2 = BigInt("1000")
		const uint256ivU6WlA = await BTCParamV2ercWsCW.btcPrice.call({from: accounts[0]});
		const addressQYXZYZq = await BTCParamV2ercWsCW.transferOwnership.call(addressUfqo9xD, {from: accounts[2]});
		const uint256znZTozu = await BTCParamV2ercWsCW.setBtcNetDiff.call(uintdy8uS1W, {from: "0x0000000000000000000000000000000000000001"});
		const addressML04rI7 = await BTCParamV2ercWsCW.addListener.call(addressIQsrtsG, {from: accounts[1]});
		await BTCParamV2ercWsCW.onlyParamSetter.call({from: accounts[0]});
		const uint256t2Azz4y = await BTCParamV2ercWsCW.setBtcTxFeeRewardRate.call(uintRKnAqt2, {from: accounts[1]});

		assert.equal(uint256ivU6WlA, BigInt("0"))
		await expect(BTCParamV2ercWsCW.transferOwnership.call(addressUfqo9xD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2k8kBE7 = await BTCParamV2.new({from: accounts[1]});
		const addressBW6M1q5 = accounts[0]
		const addressEQGcGfD = accounts[4]
		const uintYAnKgqL = BigInt("526")
		const uint256WqeLhe = await BTCParamV2k8kBE7.btcIncomePerTPerSecInWei.call({from: accounts[1]});
		const addressCBmj1vG = await BTCParamV2k8kBE7.setParamSetter.call(addressBW6M1q5, {from: accounts[0]});
		const addressdq1kOA2 = await BTCParamV2k8kBE7.transferOwnership.call(addressEQGcGfD, {from: accounts[5]});
		const uint256nHCFAbe = await BTCParamV2k8kBE7.setBtcTxFeeRewardRate.call(uintYAnKgqL, {from: accounts[2]});
		await BTCParamV2k8kBE7.onlyParamSetter.call({from: accounts[4]});
		const uint256AWcHnEn = await BTCParamV2k8kBE7.btcPrice.call({from: accounts[5]});

		await expect(BTCParamV2k8kBE7.btcIncomePerTPerSecInWei.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2xe5JPIQ = await BTCParamV2.new({from: accounts[1]});
		const uintgTggdhW = BigInt("902")
		const uintGLm8xMt = BigInt("720")
		const uint256cR6dlxw = await BTCParamV2xe5JPIQ.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintgTggdhW, {from: accounts[1]});
		const uint256AGYmYfv = await BTCParamV2xe5JPIQ.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintGLm8xMt, {from: accounts[5]});
		const uint256ZWqJwSE = await BTCParamV2xe5JPIQ.btcPrice.call({from: accounts[1]});

		await expect(BTCParamV2xe5JPIQ.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintgTggdhW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2TvpLnEO = await BTCParamV2.new({from: accounts[1]});
		const uintmf8bp39 = BigInt("1682")
		const uinti4o8hk9 = BigInt("1834")
		const addressclRpsy = accounts[0]
		const addresse2OIU3i = "0x0000000000000000000000000000000000000001"
		const addresszU7s2CN = accounts[5]
		await BTCParamV2TvpLnEO.onlyOwner.call({from: accounts[0]});
		const uint256tlddZ1g = await BTCParamV2TvpLnEO.setBtcNetDiff.call(uintmf8bp39, {from: accounts[4]});
		const uint256rIeu9i2 = await BTCParamV2TvpLnEO.setBtcNetDiff.call(uinti4o8hk9, {from: accounts[3]});
		const addressOWjuNc1 = await BTCParamV2TvpLnEO.transferOwnership.call(addressclRpsy, {from: accounts[1]});
		const addressmvXC1Ik = await BTCParamV2TvpLnEO.addListener.call(addresse2OIU3i, {from: accounts[0]});
		const addressz9ZaHtQ = await BTCParamV2TvpLnEO.addListener.call(addresszU7s2CN, {from: accounts[5]});

		await expect(BTCParamV2TvpLnEO.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2xe5JPIQ = await BTCParamV2.new({from: accounts[1]});
		const boolMY9eK05 = true
		const addressumMRHs2 = accounts[2]
		const uintWC4Ejoc = BigInt("575")
		const uintxN0rUsn = BigInt("1055")
		const addressc3Y192 = accounts[1]
		const addressa9K6Gz = accounts[4]
		const uintmFJBSOd = BigInt("902")
		const addressSsvu7aG = accounts[3]
		const uintmyozPz = BigInt("732")
		const addressXu9hB4J = await BTCParamV2xe5JPIQ.initialize.call(addressa9K6Gz, addressc3Y192, uintxN0rUsn, uintWC4Ejoc, addressumMRHs2, boolMY9eK05, {from: accounts[0]});
		const uint256cR6dlxw = await BTCParamV2xe5JPIQ.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintmFJBSOd, {from: accounts[1]});
		const addressmE2FxnT = await BTCParamV2xe5JPIQ.addListener.call(addressSsvu7aG, {from: accounts[2]});
		const uint256AGYmYfv = await BTCParamV2xe5JPIQ.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintmyozPz, {from: accounts[5]});
		const uint256ZWqJwSE = await BTCParamV2xe5JPIQ.btcPrice.call({from: accounts[1]});

		await expect(BTCParamV2xe5JPIQ.initialize.call(addressa9K6Gz, addressc3Y192, uintxN0rUsn, uintWC4Ejoc, addressumMRHs2, boolMY9eK05, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2rdQSnL = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressBg0vALS = accounts[3]
		const uint256UfLEX9 = await BTCParamV2rdQSnL.btcPrice.call({from: accounts[5]});
		const addressRMUoAW5 = await BTCParamV2rdQSnL.transferOwnership.call(addressBg0vALS, {from: accounts[4]});
		await BTCParamV2rdQSnL.onlyParamSetter.call({from: accounts[2]});
		const uint256hmLIRFb = await BTCParamV2rdQSnL.btcPrice.call({from: accounts[4]});
		await BTCParamV2rdQSnL.onlyParamSetter.call({from: accounts[2]});
	});
})