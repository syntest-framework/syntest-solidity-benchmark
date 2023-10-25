const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2l36oT5K = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressyJIN1PI = accounts[1]
		const addressrvP7GZm = await BTCParamV2l36oT5K.addListener.call(addressyJIN1PI, {from: accounts[2]});
		await BTCParamV2l36oT5K.onlyOwner.call({from: accounts[1]});
		await BTCParamV2l36oT5K.onlyParamSetter.call({from: accounts[0]});
		await BTCParamV2l36oT5K.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2Aj5OjMG = await BTCParamV2.new({from: accounts[3]});
		const uintHTPSUZN = BigInt("37")
		const addressy3oeBEQ = accounts[1]
		const addressujKoof5 = accounts[1]
		const uintxk3kCkn = BigInt("1092")
		const uint256o2RMw59 = await BTCParamV2Aj5OjMG.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintHTPSUZN, {from: "0x0000000000000000000000000000000000000001"});
		const addresswVb4VTd = await BTCParamV2Aj5OjMG.setParamSetter.call(addressy3oeBEQ, {from: accounts[3]});
		const addressxgwKNr7 = await BTCParamV2Aj5OjMG.transferOwnership.call(addressujKoof5, {from: accounts[4]});
		const uint256pmhrBdV = await BTCParamV2Aj5OjMG.setBtcTxFeeRewardRate.call(uintxk3kCkn, {from: accounts[0]});
		await BTCParamV2Aj5OjMG.onlyOwner.call({from: accounts[1]});

		await expect(BTCParamV2Aj5OjMG.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintHTPSUZN, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2PlRzb3c = await BTCParamV2.new({from: accounts[0]});
		const addressenn7qBu = accounts[3]
		const uintv0GTRCA = BigInt("1355")
		const uintiGA8v7p = BigInt("2014")
		const addressoyxjTZ4 = await BTCParamV2PlRzb3c.transferOwnership.call(addressenn7qBu, {from: accounts[0]});
		await BTCParamV2PlRzb3c.updateBtcPrice.call({from: accounts[0]});
		const uint256irCmXtc = await BTCParamV2PlRzb3c.setBtcTxFeeRewardRate.call(uintv0GTRCA, {from: accounts[4]});
		const uint256RiLiOYg = await BTCParamV2PlRzb3c.setBtcBlockReward.call(uintiGA8v7p, {from: accounts[0]});

		await expect(BTCParamV2PlRzb3c.transferOwnership.call(addressenn7qBu, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2Z98NQXf = await BTCParamV2.new({from: accounts[0]});
		const addresszACGf3 = accounts[0]
		const uintQrJnJtF = BigInt("3")
		const uintSQGNOXx = BigInt("440")
		const uintCLSzvwt = BigInt("940")
		await BTCParamV2Z98NQXf.onlyParamSetter.call({from: accounts[4]});
		const uint256YmcXTQ = await BTCParamV2Z98NQXf.btcIncomePerTPerSecInWei.call({from: accounts[4]});
		const addressOzptvXV = await BTCParamV2Z98NQXf.addListener.call(addresszACGf3, {from: accounts[2]});
		const uint256hneLqdT = await BTCParamV2Z98NQXf.setBtcNetDiff.call(uintQrJnJtF, {from: accounts[4]});
		const uint256PH7wnJU = await BTCParamV2Z98NQXf.setBtcBlockReward.call(uintSQGNOXx, {from: accounts[0]});
		const uint256NkaWld = await BTCParamV2Z98NQXf.setBtcBlockReward.call(uintCLSzvwt, {from: accounts[4]});

		await expect(BTCParamV2Z98NQXf.onlyParamSetter.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2vS7Zea4 = await BTCParamV2.new({from: accounts[5]});
		const addressjZlYTrS = accounts[2]
		const addressqgT6fXu = accounts[1]
		const uint256NLkGibo = await BTCParamV2vS7Zea4.btcPrice.call({from: "0x0000000000000000000000000000000000000001"});
		const boollxQE8ay = await BTCParamV2vS7Zea4.removeListener.call(addressjZlYTrS, {from: accounts[3]});
		await BTCParamV2vS7Zea4.updateBtcPrice.call({from: accounts[4]});
		const boolGMPUfBB = await BTCParamV2vS7Zea4.removeListener.call(addressqgT6fXu, {from: accounts[1]});
		const uint256Mk55oS = await BTCParamV2vS7Zea4.btcIncomePerTPerSecInWei.call({from: accounts[3]});

		assert.equal(uint256NLkGibo, BigInt("0"))
		await expect(BTCParamV2vS7Zea4.removeListener.call(addressjZlYTrS, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2CEsSX4m = await BTCParamV2.new({from: accounts[4]});
		const uint256i6cO1iE = await BTCParamV2CEsSX4m.btcIncomePerTPerSecInWei.call({from: accounts[5]});

		await expect(BTCParamV2CEsSX4m.btcIncomePerTPerSecInWei.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2P04dsWX = await BTCParamV2.new({from: accounts[2]});
		const boolSGG4YAm = false
		const addressk2aKLFT = accounts[5]
		const uintucTfQfG = BigInt("1866")
		const uintsTeMeSa = BigInt("1029")
		const addressvi8p9cj = accounts[3]
		const addressrsXbSNe = accounts[1]
		const addressCSKHmmw = accounts[0]
		const addressI1A6HMd = accounts[5]
		const addressiUDAYMV = accounts[2]
		const addressHJrdA0 = await BTCParamV2P04dsWX.initialize.call(addressrsXbSNe, addressvi8p9cj, uintsTeMeSa, uintucTfQfG, addressk2aKLFT, boolSGG4YAm, {from: accounts[0]});
		const addressVytkfGw = await BTCParamV2P04dsWX.addListener.call(addressCSKHmmw, {from: accounts[0]});
		const addressaqIxmKQ = await BTCParamV2P04dsWX.setParamSetter.call(addressI1A6HMd, {from: accounts[5]});
		const boolOmkRxzv = await BTCParamV2P04dsWX.removeListener.call(addressiUDAYMV, {from: accounts[0]});
		await BTCParamV2P04dsWX.updateBtcPrice.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BTCParamV2P04dsWX.initialize.call(addressrsXbSNe, addressvi8p9cj, uintsTeMeSa, uintucTfQfG, addressk2aKLFT, boolSGG4YAm, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})