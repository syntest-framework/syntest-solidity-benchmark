const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2Fafl3Z5 = await BTCParamV2.new({from: accounts[3]});
		const booliIjWDCN = false
		const addressv3Arvju = accounts[0]
		const uintfZEVUCA = BigInt("344")
		const uintgY1Nmla = BigInt("1500")
		const addressnlTMSEZ = accounts[4]
		const addressjuCNoy0 = accounts[0]
		const addressHtiKp4T = accounts[4]
		const addressqFRgSrT = accounts[4]
		const uintVDHPkgB = BigInt("898")
//		const addressdqSuOgK = await BTCParamV2Fafl3Z5.initialize.call(addressjuCNoy0, addressnlTMSEZ, uintgY1Nmla, uintfZEVUCA, addressv3Arvju, booliIjWDCN, {from: accounts[1]});
//		const uint256GzVWl7w = await BTCParamV2Fafl3Z5.btcPrice.call({from: accounts[2]});
//		await BTCParamV2Fafl3Z5.onlyParamSetter.call({from: accounts[2]});
//		const addressDXETk5u = await BTCParamV2Fafl3Z5.setParamSetter.call(addressHtiKp4T, {from: accounts[2]});
//		const boolaLCC7Px = await BTCParamV2Fafl3Z5.removeListener.call(addressqFRgSrT, {from: accounts[5]});
//		const uint256rQFRVrP = await BTCParamV2Fafl3Z5.setBtcTxFeeRewardRate.call(uintVDHPkgB, {from: accounts[0]});

		await expect(BTCParamV2Fafl3Z5.initialize.call(addressjuCNoy0, addressnlTMSEZ, uintgY1Nmla, uintfZEVUCA, addressv3Arvju, booliIjWDCN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2zUEFuDG = await BTCParamV2.new({from: accounts[4]});
		const addressZzMd348 = accounts[4]
		const addresskYKyyg = accounts[2]
		const addresszBshnny = accounts[4]
//		const boolgqxWXP4 = await BTCParamV2zUEFuDG.removeListener.call(addressZzMd348, {from: accounts[4]});
//		const addressIeMAWPD = await BTCParamV2zUEFuDG.transferOwnership.call(addresskYKyyg, {from: accounts[3]});
//		const uint256R6WApiH = await BTCParamV2zUEFuDG.btcPrice.call({from: accounts[2]});
//		await BTCParamV2zUEFuDG.updateBtcPrice.call({from: accounts[0]});
//		const boolI4y5E0L = await BTCParamV2zUEFuDG.removeListener.call(addresszBshnny, {from: accounts[4]});

		await expect(BTCParamV2zUEFuDG.removeListener.call(addressZzMd348, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2QmF98Ds = await BTCParamV2.new({from: accounts[2]});
		const addressVgjn00z = accounts[3]
		const uint256X5xLgpn = await BTCParamV2QmF98Ds.btcPrice.call({from: accounts[3]});
//		const uint256U6uUGBU = await BTCParamV2QmF98Ds.btcIncomePerTPerSecInWei.call({from: accounts[0]});
//		const addressjKm5CeT = await BTCParamV2QmF98Ds.transferOwnership.call(addressVgjn00z, {from: accounts[4]});
//		await BTCParamV2QmF98Ds.updateBtcPrice.call({from: accounts[5]});

		assert.equal(uint256X5xLgpn, BigInt("0"))
		await expect(BTCParamV2QmF98Ds.btcIncomePerTPerSecInWei.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2UexSjia = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintlPL6iQe = BigInt("1629")
		const addresspOoqAJt = accounts[0]
		const addressmMCc2Z = accounts[2]
		const uint256ZYmaq0f = await BTCParamV2UexSjia.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintlPL6iQe, {from: accounts[3]});
		const addresspf2Eiww = await BTCParamV2UexSjia.setParamSetter.call(addresspOoqAJt, {from: accounts[5]});
		await BTCParamV2UexSjia.updateBtcPrice.call({from: accounts[3]});
		const boolYOxyo88 = await BTCParamV2UexSjia.removeListener.call(addressmMCc2Z, {from: accounts[0]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2TMopO6a = await BTCParamV2.new({from: accounts[1]});
		const uintBU2SqMk = BigInt("1545")
//		await BTCParamV2TMopO6a.onlyParamSetter.call({from: accounts[0]});
//		const uint256mkb5xdU = await BTCParamV2TMopO6a.setBtcBlockReward.call(uintBU2SqMk, {from: accounts[0]});
//		const uint256QfjOlZd = await BTCParamV2TMopO6a.btcPrice.call({from: accounts[2]});

		await expect(BTCParamV2TMopO6a.onlyParamSetter.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2WEhuuy = await BTCParamV2.new({from: accounts[4]});
		const addressAglOmKx = "0x0000000000000000000000000000000000000001"
		const addressETRCEu = accounts[2]
//		const addresshlMARyV = await BTCParamV2WEhuuy.transferOwnership.call(addressAglOmKx, {from: accounts[4]});
//		const addressI4ZXI7j = await BTCParamV2WEhuuy.transferOwnership.call(addressETRCEu, {from: accounts[2]});
//		const uint256hPzsBq = await BTCParamV2WEhuuy.btcPrice.call({from: accounts[4]});

		await expect(BTCParamV2WEhuuy.transferOwnership.call(addressAglOmKx, {from: accounts[4]})).to.be.rejectedWith(Error);
	});
})