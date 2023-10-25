const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2GCmASfW = await BTCParamV2.new({from: accounts[2]});
		const addressjrGucqr = accounts[1]
		const uinthGODh0q = BigInt("807")
		const addressJJQ6dYV = await BTCParamV2GCmASfW.addListener.call(addressjrGucqr, {from: accounts[1]});
		const uint256hH6sHnj = await BTCParamV2GCmASfW.btcPrice.call({from: accounts[1]});
		const uint256BoBgyfI = await BTCParamV2GCmASfW.btcIncomePerTPerSecInWei.call({from: accounts[3]});
		const uint256oEFp2V = await BTCParamV2GCmASfW.setBtcNetDiff.call(uinthGODh0q, {from: accounts[5]});

		await expect(BTCParamV2GCmASfW.addListener.call(addressjrGucqr, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2m3zsaH = await BTCParamV2.new({from: accounts[5]});
		const addressQkqPF0 = accounts[2]
		const uintg3wgi8S = BigInt("80")
		const addressl6sRerD = accounts[0]
		const addressRMk2JKf = await BTCParamV2m3zsaH.transferOwnership.call(addressQkqPF0, {from: accounts[4]});
		const uint256L23C8o8 = await BTCParamV2m3zsaH.setBtcTxFeeRewardRate.call(uintg3wgi8S, {from: accounts[0]});
		await BTCParamV2m3zsaH.updateBtcPrice.call({from: accounts[4]});
		const addressYhpM8fV = await BTCParamV2m3zsaH.setParamSetter.call(addressl6sRerD, {from: accounts[3]});
		const uint256Ps0kKF = await BTCParamV2m3zsaH.btcIncomePerTPerSecInWei.call({from: accounts[1]});

		await expect(BTCParamV2m3zsaH.transferOwnership.call(addressQkqPF0, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2AZIOhDh = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintMAwQW5e = BigInt("1417")
		const addressPwUjIez = accounts[5]
		const uint256ANZ5eSj = await BTCParamV2AZIOhDh.setBtcBlockReward.call(uintMAwQW5e, {from: accounts[1]});
		await BTCParamV2AZIOhDh.onlyOwner.call({from: accounts[5]});
		await BTCParamV2AZIOhDh.updateBtcPrice.call({from: "0x0000000000000000000000000000000000000001"});
		const addressc7VhuE2 = await BTCParamV2AZIOhDh.addListener.call(addressPwUjIez, {from: accounts[4]});
		const uint256uuIIxkC = await BTCParamV2AZIOhDh.btcIncomePerTPerSecInWei.call({from: accounts[0]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2Ac8LKYS = await BTCParamV2.new({from: accounts[1]});
		const addressjomvFmg = accounts[1]
		const addressLuH9iu = accounts[2]
		const uintnYv6gdm = BigInt("1677")
		await BTCParamV2Ac8LKYS.onlyOwner.call({from: accounts[3]});
		const addresseQ4F3gX = await BTCParamV2Ac8LKYS.addListener.call(addressjomvFmg, {from: accounts[0]});
		const addressYpeIP1 = await BTCParamV2Ac8LKYS.transferOwnership.call(addressLuH9iu, {from: accounts[0]});
		const uint256vZcMqPU = await BTCParamV2Ac8LKYS.setBtcBlockReward.call(uintnYv6gdm, {from: accounts[5]});
		const uint256fQkFEni = await BTCParamV2Ac8LKYS.btcIncomePerTPerSecInWei.call({from: accounts[0]});

		await expect(BTCParamV2Ac8LKYS.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2AwSzJHk = await BTCParamV2.new({from: accounts[5]});
		const boolPL0s66H = false
		const addressQbOq87q = accounts[2]
		const uintn5yxhAW = BigInt("1063")
		const uintUAYxYs = BigInt("439")
		const addressIfYFzJ = accounts[2]
		const addresslSDEizA = accounts[0]
		const addressIfk5EAI = await BTCParamV2AwSzJHk.initialize.call(addresslSDEizA, addressIfYFzJ, uintUAYxYs, uintn5yxhAW, addressQbOq87q, boolPL0s66H, {from: "0x0000000000000000000000000000000000000001"});
		await BTCParamV2AwSzJHk.onlyOwner.call({from: accounts[0]});

		await expect(BTCParamV2AwSzJHk.initialize.call(addresslSDEizA, addressIfYFzJ, uintUAYxYs, uintn5yxhAW, addressQbOq87q, boolPL0s66H, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2GCmASfW = await BTCParamV2.new({from: accounts[2]});
		const uintv7FGchu = BigInt("807")
		const uint256hH6sHnj = await BTCParamV2GCmASfW.btcPrice.call({from: accounts[1]});
		const uint256BoBgyfI = await BTCParamV2GCmASfW.btcIncomePerTPerSecInWei.call({from: accounts[3]});
		const uint256oEFp2V = await BTCParamV2GCmASfW.setBtcNetDiff.call(uintv7FGchu, {from: accounts[5]});

		assert.equal(uint256hH6sHnj, BigInt("0"))
		await expect(BTCParamV2GCmASfW.btcIncomePerTPerSecInWei.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})