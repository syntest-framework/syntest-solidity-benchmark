const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2P5QXWEs = await BTCParamV2.new({from: accounts[1]});
		const addresspzYVHH6 = accounts[2]
		const addressadHtSGQ = accounts[4]
		await BTCParamV2P5QXWEs.updateBtcPrice.call({from: accounts[1]});
		const addressdeyhYoQ = await BTCParamV2P5QXWEs.addListener.call(addresspzYVHH6, {from: accounts[3]});
		const boolcjaGTvz = await BTCParamV2P5QXWEs.removeListener.call(addressadHtSGQ, {from: accounts[0]});

		await expect(BTCParamV2P5QXWEs.updateBtcPrice.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2AnBt146 = await BTCParamV2.new({from: accounts[4]});
		const boolSa56muO = false
		const addressWpb2bns = "0x0000000000000000000000000000000000000001"
		const uintv4WyQw0 = BigInt("645")
		const uintwgbbpfc = BigInt("2015")
		const addressKgtMEaP = accounts[5]
		const addressQWip0rH = accounts[5]
		const uintmUUWJkz = BigInt("1260")
		const uintwQZAr9W = BigInt("565")
		const addressWqA0G6 = accounts[1]
		const addressRVBqacq = accounts[0]
		const addressP3n3O6Q = await BTCParamV2AnBt146.initialize.call(addressQWip0rH, addressKgtMEaP, uintwgbbpfc, uintv4WyQw0, addressWpb2bns, boolSa56muO, {from: accounts[3]});
		const uint256M6AHKi = await BTCParamV2AnBt146.setBtcBlockReward.call(uintmUUWJkz, {from: accounts[1]});
		const uint256dQKl8fL = await BTCParamV2AnBt146.setBtcBlockReward.call(uintwQZAr9W, {from: accounts[4]});
		const addressXqPYvUf = await BTCParamV2AnBt146.setParamSetter.call(addressWqA0G6, {from: accounts[4]});
		const boolcggGu9i = await BTCParamV2AnBt146.removeListener.call(addressRVBqacq, {from: accounts[2]});

		await expect(BTCParamV2AnBt146.initialize.call(addressQWip0rH, addressKgtMEaP, uintwgbbpfc, uintv4WyQw0, addressWpb2bns, boolSa56muO, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2UW480U9 = await BTCParamV2.new({from: accounts[0]});
		const uintwd0D0P7 = BigInt("2043")
		const uint256OugJAzP = await BTCParamV2UW480U9.btcPrice.call({from: accounts[3]});
		const uint256eGSTtwF = await BTCParamV2UW480U9.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintwd0D0P7, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256OugJAzP, BigInt("0"))
		await expect(BTCParamV2UW480U9.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintwd0D0P7, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2hL4JIdG = await BTCParamV2.new({from: accounts[4]});
		const uint256HjsXmnq = await BTCParamV2hL4JIdG.btcPrice.call({from: accounts[4]});
		const uint256s2seXfy = await BTCParamV2hL4JIdG.btcIncomePerTPerSecInWei.call({from: accounts[3]});

		assert.equal(uint256HjsXmnq, BigInt("0"))
		await expect(BTCParamV2hL4JIdG.btcIncomePerTPerSecInWei.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2UW480U9 = await BTCParamV2.new({from: accounts[0]});
		await BTCParamV2UW480U9.onlyParamSetter.call({from: accounts[0]});
		const uint256FCF7JDN = await BTCParamV2UW480U9.btcIncomePerTPerSecInWei.call({from: accounts[4]});
		const uint256OugJAzP = await BTCParamV2UW480U9.btcPrice.call({from: accounts[3]});

		await expect(BTCParamV2UW480U9.onlyParamSetter.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2UW480U9 = await BTCParamV2.new({from: accounts[0]});
		const addresss0vQtcf = accounts[0]
		const addressyrHNB4 = await BTCParamV2UW480U9.transferOwnership.call(addresss0vQtcf, {from: accounts[1]});
		const uint256OugJAzP = await BTCParamV2UW480U9.btcPrice.call({from: accounts[3]});

		await expect(BTCParamV2UW480U9.transferOwnership.call(addresss0vQtcf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2EgLqoSA = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const bool3DQp4b = false
		const addressfzKZhWX = accounts[3]
		const uintyGptuuj = BigInt("1977")
		const uintrYKdZd = BigInt("1377")
		const addressOeMo8rd = accounts[1]
		const addressbaWFGjz = accounts[5]
		const addressg23ZD68 = accounts[4]
		const addressm5RQ4s0 = accounts[3]
		const addressF8AaWr0 = await BTCParamV2EgLqoSA.initialize.call(addressbaWFGjz, addressOeMo8rd, uintrYKdZd, uintyGptuuj, addressfzKZhWX, bool3DQp4b, {from: "0x0000000000000000000000000000000000000001"});
		const addressAKSeka1 = await BTCParamV2EgLqoSA.setParamSetter.call(addressg23ZD68, {from: accounts[0]});
		const addressv9B7dUU = await BTCParamV2EgLqoSA.setParamSetter.call(addressm5RQ4s0, {from: accounts[2]});
	});
})