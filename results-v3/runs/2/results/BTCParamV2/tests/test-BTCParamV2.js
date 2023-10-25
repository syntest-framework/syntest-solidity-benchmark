const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2SuZ0MIb = await BTCParamV2.new({from: accounts[2]});
		const uintewIW0z1 = BigInt("47")
		const addresstminiu1 = accounts[3]
		const uint256yviJDZF = await BTCParamV2SuZ0MIb.setBtcBlockReward.call(uintewIW0z1, {from: accounts[5]});
		const uint256LiUA9xq = await BTCParamV2SuZ0MIb.btcIncomePerTPerSecInWei.call({from: "0x0000000000000000000000000000000000000001"});
		await BTCParamV2SuZ0MIb.updateBtcPrice.call({from: accounts[4]});
		const addressqB6Sksr = await BTCParamV2SuZ0MIb.addListener.call(addresstminiu1, {from: "0x0000000000000000000000000000000000000001"});
		const uint25681gkZ4 = await BTCParamV2SuZ0MIb.btcIncomePerTPerSecInWei.call({from: accounts[2]});

		await expect(BTCParamV2SuZ0MIb.setBtcBlockReward.call(uintewIW0z1, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2A7L2pVB = await BTCParamV2.new({from: accounts[3]});
		const addressrba9d5Z = accounts[0]
		const uintvenSwC9 = BigInt("1518")
		const addresslpLqqS = await BTCParamV2A7L2pVB.transferOwnership.call(addressrba9d5Z, {from: accounts[4]});
		const uint256yLM5h5e = await BTCParamV2A7L2pVB.btcIncomePerTPerSecInWei.call({from: accounts[3]});
		const uint256JIZkJSy = await BTCParamV2A7L2pVB.setBtcTxFeeRewardRate.call(uintvenSwC9, {from: accounts[3]});

		await expect(BTCParamV2A7L2pVB.transferOwnership.call(addressrba9d5Z, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2W0wtunZ = await BTCParamV2.new({from: accounts[2]});
		const uint256MYBH2ED = await BTCParamV2W0wtunZ.btcIncomePerTPerSecInWei.call({from: accounts[2]});
		const uint256NPgT5a = await BTCParamV2W0wtunZ.btcIncomePerTPerSecInWei.call({from: accounts[2]});

		await expect(BTCParamV2W0wtunZ.btcIncomePerTPerSecInWei.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2UAegCXl = await BTCParamV2.new({from: accounts[4]});
		const uintkJI1CFu = BigInt("90")
		const uint256BzPYNf9 = await BTCParamV2UAegCXl.btcPrice.call({from: accounts[0]});
		await BTCParamV2UAegCXl.onlyParamSetter.call({from: accounts[1]});
		const uint256qYx6eok = await BTCParamV2UAegCXl.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintkJI1CFu, {from: accounts[0]});

		assert.equal(uint256BzPYNf9, BigInt("0"))
		await expect(BTCParamV2UAegCXl.onlyParamSetter.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2W0wtunZ = await BTCParamV2.new({from: accounts[2]});
		const boolA0jIe6 = true
		const addressMQqSps = accounts[3]
		const uinttpQMXt7 = BigInt("649")
		const uintpXbE7gn = BigInt("1159")
		const addressUkGqiQm = accounts[1]
		const addresskvdESsq = accounts[3]
		const addressdQbopZd = accounts[3]
		const addressKIN9UrW = await BTCParamV2W0wtunZ.initialize.call(addresskvdESsq, addressUkGqiQm, uintpXbE7gn, uinttpQMXt7, addressMQqSps, boolA0jIe6, {from: accounts[2]});
		const boolGaXdc0F = await BTCParamV2W0wtunZ.removeListener.call(addressdQbopZd, {from: accounts[4]});
		const uint256NPgT5a = await BTCParamV2W0wtunZ.btcIncomePerTPerSecInWei.call({from: accounts[2]});

		await expect(BTCParamV2W0wtunZ.initialize.call(addresskvdESsq, addressUkGqiQm, uintpXbE7gn, uinttpQMXt7, addressMQqSps, boolA0jIe6, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2AL6kRDW = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUzXVLFo = BigInt("621")
		const uinte5oLkkn = BigInt("1570")
		const uint256oFH3uiF = await BTCParamV2AL6kRDW.setBtcTxFeeRewardRate.call(uintUzXVLFo, {from: accounts[0]});
		const uint256iHEoxqZ = await BTCParamV2AL6kRDW.setBtcTxFeeRewardRate.call(uinte5oLkkn, {from: "0x0000000000000000000000000000000000000001"});
		await BTCParamV2AL6kRDW.onlyParamSetter.call({from: "0x0000000000000000000000000000000000000001"});
	});
})