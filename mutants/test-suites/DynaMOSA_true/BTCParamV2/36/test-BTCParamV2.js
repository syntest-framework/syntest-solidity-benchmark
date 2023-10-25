const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2PPWuEpw = await BTCParamV2.new({from: accounts[1]});
		const addressG0bla9S = accounts[1]
		const uintPe3sn3 = BigInt("1686")
		const uintJYMBsvD = BigInt("28")
		const uintESZ3Ern = BigInt("772")
//		const boolKiLev5g = await BTCParamV2PPWuEpw.removeListener.call(addressG0bla9S, {from: accounts[4]});
//		const uint256qFPBsIl = await BTCParamV2PPWuEpw.setBtcBlockReward.call(uintPe3sn3, {from: accounts[1]});
//		const uint256qpELakT = await BTCParamV2PPWuEpw.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintJYMBsvD, {from: accounts[0]});
//		const uint256d0KrH0c = await BTCParamV2PPWuEpw.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintESZ3Ern, {from: accounts[0]});

		await expect(BTCParamV2PPWuEpw.removeListener.call(addressG0bla9S, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2b5Gt7o2 = await BTCParamV2.new({from: accounts[1]});
		const addressFDQJ98P = accounts[4]
//		const addresshHV1yRh = await BTCParamV2b5Gt7o2.transferOwnership.call(addressFDQJ98P, {from: accounts[3]});
//		await BTCParamV2b5Gt7o2.updateBtcPrice.call({from: accounts[5]});

		await expect(BTCParamV2b5Gt7o2.transferOwnership.call(addressFDQJ98P, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2zBLSDUE = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uint256PZ57ez1 = await BTCParamV2zBLSDUE.btcIncomePerTPerSecInWei.call({from: "0x0000000000000000000000000000000000000001"});
		await BTCParamV2zBLSDUE.updateBtcPrice.call({from: accounts[2]});
		const uint256T2auBub = await BTCParamV2zBLSDUE.btcIncomePerTPerSecInWei.call({from: accounts[1]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2OMNVdSX = await BTCParamV2.new({from: accounts[2]});
		const addressMCT6guT = accounts[4]
		const addressvXGi7v3 = accounts[3]
//		const uint256zjVjX5 = await BTCParamV2OMNVdSX.btcIncomePerTPerSecInWei.call({from: accounts[0]});
//		const addressKfXpS9m = await BTCParamV2OMNVdSX.transferOwnership.call(addressMCT6guT, {from: accounts[0]});
//		const addressmO8N6ko = await BTCParamV2OMNVdSX.addListener.call(addressvXGi7v3, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256uH3fcpi = await BTCParamV2OMNVdSX.btcPrice.call({from: accounts[0]});

		await expect(BTCParamV2OMNVdSX.btcIncomePerTPerSecInWei.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2OTKqjHw = await BTCParamV2.new({from: accounts[4]});
		const uintKdEgEEb = BigInt("83")
		const addressoxWjHoY = accounts[1]
		const addressg9pkoig = accounts[4]
		const uintiHsDjl8 = BigInt("860")
//		await BTCParamV2OTKqjHw.onlyOwner.call({from: accounts[0]});
//		const uint256JXa5Qbw = await BTCParamV2OTKqjHw.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintKdEgEEb, {from: accounts[1]});
//		const addressaEBI06 = await BTCParamV2OTKqjHw.setParamSetter.call(addressoxWjHoY, {from: accounts[4]});
//		const addressapAQJoP = await BTCParamV2OTKqjHw.addListener.call(addressg9pkoig, {from: accounts[5]});
//		const uint256bIZsrT3 = await BTCParamV2OTKqjHw.setBtcTxFeeRewardRate.call(uintiHsDjl8, {from: accounts[0]});

		await expect(BTCParamV2OTKqjHw.onlyOwner.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2Nb42a9K = await BTCParamV2.new({from: accounts[4]});
		const addressrs38K3A = accounts[0]
		const addressyIGmI4I = accounts[0]
		const uint256UDdR08K = await BTCParamV2Nb42a9K.btcPrice.call({from: "0x0000000000000000000000000000000000000001"});
//		const boolOxcAH5K = await BTCParamV2Nb42a9K.removeListener.call(addressrs38K3A, {from: "0x0000000000000000000000000000000000000001"});
//		await BTCParamV2Nb42a9K.updateBtcPrice.call({from: accounts[2]});
//		const addresszpNI0QZ = await BTCParamV2Nb42a9K.addListener.call(addressyIGmI4I, {from: accounts[0]});
//		const uint256PG4nMW = await BTCParamV2Nb42a9K.btcPrice.call({from: accounts[2]});

		assert.equal(uint256UDdR08K, BigInt("0"))
		await expect(BTCParamV2Nb42a9K.removeListener.call(addressrs38K3A, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2b5Gt7o2 = await BTCParamV2.new({from: accounts[1]});
		const boolaMD9VEz = true
		const addressuSF75c0 = accounts[2]
		const uintDdDiI9X = BigInt("452")
		const uintHFTUYio = BigInt("1519")
		const addressRBuuJB2 = accounts[3]
		const addressR1YIP0p = accounts[3]
//		const addressTkz6dMW = await BTCParamV2b5Gt7o2.initialize.call(addressR1YIP0p, addressRBuuJB2, uintHFTUYio, uintDdDiI9X, addressuSF75c0, boolaMD9VEz, {from: "0x0000000000000000000000000000000000000001"});
//		await BTCParamV2b5Gt7o2.onlyParamSetter.call({from: accounts[4]});
//		await BTCParamV2b5Gt7o2.updateBtcPrice.call({from: accounts[5]});

		await expect(BTCParamV2b5Gt7o2.initialize.call(addressR1YIP0p, addressRBuuJB2, uintHFTUYio, uintDdDiI9X, addressuSF75c0, boolaMD9VEz, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})