const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2hNqKcO6 = await BTCParamV2.new({from: accounts[4]});
		await BTCParamV2hNqKcO6.updateBtcPrice.call({from: "0x0000000000000000000000000000000000000001"});
		await BTCParamV2hNqKcO6.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256EOUVdJE = await BTCParamV2hNqKcO6.btcPrice.call({from: accounts[0]});

		await expect(BTCParamV2hNqKcO6.updateBtcPrice.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2XFYtNQ = await BTCParamV2.new({from: accounts[0]});
		const addressynfJVgu = accounts[3]
		const addressfNP2Obx = accounts[0]
		const addressZ05ZsqV = accounts[1]
		const uintaRVjpZO = BigInt("610")
		const addressoDnKWfR = await BTCParamV2XFYtNQ.setParamSetter.call(addressynfJVgu, {from: accounts[3]});
		const boolFMkJfRF = await BTCParamV2XFYtNQ.removeListener.call(addressfNP2Obx, {from: accounts[4]});
		const addressXNxwS5 = await BTCParamV2XFYtNQ.transferOwnership.call(addressZ05ZsqV, {from: accounts[3]});
		const uint256HaY3glD = await BTCParamV2XFYtNQ.btcIncomePerTPerSecInWei.call({from: accounts[0]});
		const uint256j8GGer = await BTCParamV2XFYtNQ.setBtcTxFeeRewardRate.call(uintaRVjpZO, {from: accounts[4]});

		await expect(BTCParamV2XFYtNQ.setParamSetter.call(addressynfJVgu, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2Lp0YS84 = await BTCParamV2.new({from: accounts[4]});
		const addressL9nsk8 = "0x0000000000000000000000000000000000000001"
		await BTCParamV2Lp0YS84.onlyParamSetter.call({from: accounts[4]});
		const boolOkYApHg = await BTCParamV2Lp0YS84.removeListener.call(addressL9nsk8, {from: accounts[4]});

		await expect(BTCParamV2Lp0YS84.onlyParamSetter.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2YwznnPL = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressuL3zcF = accounts[4]
		const addressvJkaSYB = accounts[2]
		const uintC71FNW5 = BigInt("77")
		const addressPEYtbgz = await BTCParamV2YwznnPL.addListener.call(addressuL3zcF, {from: accounts[3]});
		const addressmnyDKJE = await BTCParamV2YwznnPL.transferOwnership.call(addressvJkaSYB, {from: accounts[4]});
		const uint256hnsLSaU = await BTCParamV2YwznnPL.setBtcBlockReward.call(uintC71FNW5, {from: accounts[1]});
		const uint256mdsf7J = await BTCParamV2YwznnPL.btcIncomePerTPerSecInWei.call({from: accounts[0]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2FBhpl4b = await BTCParamV2.new({from: accounts[2]});
		const uintneoFec = BigInt("636")
		const address2Qrrz0 = accounts[4]
		const uint256M2hRZ1p = await BTCParamV2FBhpl4b.btcPrice.call({from: accounts[5]});
		const uint256LwDnI9S = await BTCParamV2FBhpl4b.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintneoFec, {from: accounts[4]});
		const boolaGCLVCt = await BTCParamV2FBhpl4b.removeListener.call(address2Qrrz0, {from: accounts[3]});

		assert.equal(uint256M2hRZ1p, BigInt("0"))
		await expect(BTCParamV2FBhpl4b.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintneoFec, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2FBhpl4b = await BTCParamV2.new({from: accounts[2]});
		const boolOXCwPyt = true
		const addressIUu0jdr = accounts[2]
		const uintxW5TGp8 = BigInt("152")
		const uintep4mwuS = BigInt("771")
		const addressGKnaUQK = accounts[4]
		const addressSJ8ockX = accounts[3]
		const addressT32bMgD = accounts[4]
		const addressMLZZ9G = await BTCParamV2FBhpl4b.initialize.call(addressSJ8ockX, addressGKnaUQK, uintep4mwuS, uintxW5TGp8, addressIUu0jdr, boolOXCwPyt, {from: "0x0000000000000000000000000000000000000001"});
		await BTCParamV2FBhpl4b.onlyOwner.call({from: accounts[1]});
		const boolaGCLVCt = await BTCParamV2FBhpl4b.removeListener.call(addressT32bMgD, {from: accounts[3]});

		await expect(BTCParamV2FBhpl4b.initialize.call(addressSJ8ockX, addressGKnaUQK, uintep4mwuS, uintxW5TGp8, addressIUu0jdr, boolOXCwPyt, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2FBhpl4b = await BTCParamV2.new({from: accounts[2]});
		const uintckvOHSJ = BigInt("945")
		const addresshdDK0Qd = accounts[4]
		const uint256T5RtwQp = await BTCParamV2FBhpl4b.btcIncomePerTPerSecInWei.call({from: accounts[0]});
		const uint256WT9Fyl = await BTCParamV2FBhpl4b.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintckvOHSJ, {from: accounts[3]});
		const boolaGCLVCt = await BTCParamV2FBhpl4b.removeListener.call(addresshdDK0Qd, {from: accounts[3]});

		await expect(BTCParamV2FBhpl4b.btcIncomePerTPerSecInWei.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});
})