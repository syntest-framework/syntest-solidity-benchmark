const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2eHAbHTK = await BTCParamV2.new({from: accounts[3]});
		const uintDXvlgvJ = BigInt("116")
		await BTCParamV2eHAbHTK.onlyOwner.call({from: accounts[4]});
		await BTCParamV2eHAbHTK.onlyOwner.call({from: accounts[4]});
		const uint256m06QJwF = await BTCParamV2eHAbHTK.setBtcNetDiff.call(uintDXvlgvJ, {from: accounts[3]});

		await expect(BTCParamV2eHAbHTK.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2TTuNfrz = await BTCParamV2.new({from: accounts[1]});
		const addressPrBnqWi = accounts[4]
		const addressFGTrPPj = accounts[3]
		const addressJmR99Hf = accounts[2]
		const addressmi7vFO6 = accounts[0]
		const addressrN9gGbv = await BTCParamV2TTuNfrz.addListener.call(addressPrBnqWi, {from: accounts[5]});
		const addressP7aAaE = await BTCParamV2TTuNfrz.transferOwnership.call(addressFGTrPPj, {from: accounts[2]});
		const addressOS3xrid = await BTCParamV2TTuNfrz.setParamSetter.call(addressJmR99Hf, {from: accounts[2]});
		const addresslxpJhyj = await BTCParamV2TTuNfrz.addListener.call(addressmi7vFO6, {from: "0x0000000000000000000000000000000000000001"});

		await expect(BTCParamV2TTuNfrz.addListener.call(addressPrBnqWi, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2o3c1fvX = await BTCParamV2.new({from: accounts[3]});
		const addressMVku3Ga = accounts[0]
		const uint9v5z5v = BigInt("1114")
		const uintF4YoaF = BigInt("1562")
		const addressdfmvPrg = accounts[0]
		const addressAuqtWNl = await BTCParamV2o3c1fvX.transferOwnership.call(addressMVku3Ga, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BaXAAWl = await BTCParamV2o3c1fvX.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uint9v5z5v, {from: accounts[1]});
		const uint256zpmUjXn = await BTCParamV2o3c1fvX.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintF4YoaF, {from: accounts[3]});
		const addressToKOax3 = await BTCParamV2o3c1fvX.transferOwnership.call(addressdfmvPrg, {from: accounts[2]});

		await expect(BTCParamV2o3c1fvX.transferOwnership.call(addressMVku3Ga, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2c0tehTn = await BTCParamV2.new({from: accounts[0]});
		const uint256FaJ4UWw = await BTCParamV2c0tehTn.btcPrice.call({from: accounts[1]});
		await BTCParamV2c0tehTn.onlyOwner.call({from: accounts[1]});

		assert.equal(uint256FaJ4UWw, BigInt("0"))
		await expect(BTCParamV2c0tehTn.onlyOwner.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2tt6KwC = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintM6PVNES = BigInt("828")
		const uinthI2y7oZ = BigInt("1151")
		const uinterH5zuU = BigInt("956")
		const uintjvNm6Nm = BigInt("990")
		const uint256oQY9zDh = await BTCParamV2tt6KwC.setBtcBlockReward.call(uintM6PVNES, {from: accounts[0]});
		const uint256AwLJ21Y = await BTCParamV2tt6KwC.setBtcBlockReward.call(uinthI2y7oZ, {from: accounts[2]});
		const uint256NMHinrS = await BTCParamV2tt6KwC.setBtcTxFeeRewardRate.call(uinterH5zuU, {from: accounts[3]});
		const uint256Uvo61ef = await BTCParamV2tt6KwC.setBtcTxFeeRewardRate.call(uintjvNm6Nm, {from: accounts[0]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2cDTpeU4 = await BTCParamV2.new({from: accounts[0]});
		const bool2bbeRM = false
		const addressqURZGHE = accounts[1]
		const uintqkTTidE = BigInt("2016")
		const uintDXer89 = BigInt("107")
		const addressQsKBKQX = accounts[2]
		const addressk94WB6c = accounts[1]
		const addressPH7sfJj = accounts[1]
		const addresshZoapE2 = await BTCParamV2cDTpeU4.initialize.call(addressk94WB6c, addressQsKBKQX, uintDXer89, uintqkTTidE, addressqURZGHE, bool2bbeRM, {from: "0x0000000000000000000000000000000000000001"});
		const addressLIvLWNb = await BTCParamV2cDTpeU4.addListener.call(addressPH7sfJj, {from: accounts[1]});

		await expect(BTCParamV2cDTpeU4.initialize.call(addressk94WB6c, addressQsKBKQX, uintDXer89, uintqkTTidE, addressqURZGHE, bool2bbeRM, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2TTuNfrz = await BTCParamV2.new({from: accounts[1]});
		const addresszZBK5Pl = accounts[4]
		const addressCrjGnz = accounts[3]
		const addressRXaWWwR = accounts[2]
		const addressBWgav3 = accounts[1]
		const uint256zqCgbz = await BTCParamV2TTuNfrz.btcPrice.call({from: accounts[2]});
		const uint256c9HDKyo = await BTCParamV2TTuNfrz.btcIncomePerTPerSecInWei.call({from: accounts[4]});
		const addressrN9gGbv = await BTCParamV2TTuNfrz.addListener.call(addresszZBK5Pl, {from: accounts[5]});
		const addressP7aAaE = await BTCParamV2TTuNfrz.transferOwnership.call(addressCrjGnz, {from: accounts[2]});
		const addressOS3xrid = await BTCParamV2TTuNfrz.setParamSetter.call(addressRXaWWwR, {from: accounts[2]});
		const addresslxpJhyj = await BTCParamV2TTuNfrz.addListener.call(addressBWgav3, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256zqCgbz, BigInt("0"))
		await expect(BTCParamV2TTuNfrz.btcIncomePerTPerSecInWei.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});
})