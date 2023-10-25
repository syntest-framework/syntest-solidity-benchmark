const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2ASUFNm = await BTCParamV2.new({from: accounts[0]});
		const uintJ3KAbqE = BigInt("1527")
		await BTCParamV2ASUFNm.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256PdH3Vz1 = await BTCParamV2ASUFNm.setBtcTxFeeRewardRate.call(uintJ3KAbqE, {from: accounts[3]});

		await expect(BTCParamV2ASUFNm.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2M3gJlnH = await BTCParamV2.new({from: accounts[4]});
		const uintUWckvL = BigInt("1777")
		const uintB8akRPZ = BigInt("660")
		const uint256ytRiTmx = await BTCParamV2M3gJlnH.setBtcBlockReward.call(uintUWckvL, {from: accounts[5]});
		const uint256g1Dq9yy = await BTCParamV2M3gJlnH.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintB8akRPZ, {from: accounts[3]});

		await expect(BTCParamV2M3gJlnH.setBtcBlockReward.call(uintUWckvL, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2jv51oAt = await BTCParamV2.new({from: accounts[3]});
		const addresstVEt64d = accounts[3]
		const boolIvJ89Rx = false
		const addressyNhTkcX = accounts[0]
		const uintCkC7rFT = BigInt("1903")
		const uintwr4JT3i = BigInt("1417")
		const addressqWnmvvm = accounts[2]
		const addressuWcj0Sn = accounts[0]
		const uintynJKRDX = BigInt("1086")
		const boollGyS1oo = false
		const addressSlwOUBo = "0x0000000000000000000000000000000000000001"
		const uintbaedUGm = BigInt("1443")
		const uintocelwcW = BigInt("1027")
		const addressGfcn7mw = accounts[0]
		const addressvaSbV5x = accounts[3]
		const addressVcAT9ut = await BTCParamV2jv51oAt.setParamSetter.call(addresstVEt64d, {from: accounts[5]});
		const addressfaKrqA5 = await BTCParamV2jv51oAt.initialize.call(addressuWcj0Sn, addressqWnmvvm, uintwr4JT3i, uintCkC7rFT, addressyNhTkcX, boolIvJ89Rx, {from: accounts[3]});
		await BTCParamV2jv51oAt.updateBtcPrice.call({from: accounts[2]});
		const uint2566k1jnO = await BTCParamV2jv51oAt.setBtcTxFeeRewardRate.call(uintynJKRDX, {from: accounts[3]});
		const addressIgccncq = await BTCParamV2jv51oAt.initialize.call(addressvaSbV5x, addressGfcn7mw, uintocelwcW, uintbaedUGm, addressSlwOUBo, boollGyS1oo, {from: accounts[2]});

		await expect(BTCParamV2jv51oAt.setParamSetter.call(addresstVEt64d, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2n43LpG = await BTCParamV2.new({from: accounts[1]});
		const addressjhLRlqR = accounts[3]
		const uintqBJq0Aj = BigInt("1866")
		const uint256WbkSBMQ = await BTCParamV2n43LpG.btcIncomePerTPerSecInWei.call({from: "0x0000000000000000000000000000000000000001"});
		const addresssGPFjTV = await BTCParamV2n43LpG.transferOwnership.call(addressjhLRlqR, {from: accounts[3]});
		const uint256jsfkbE = await BTCParamV2n43LpG.btcIncomePerTPerSecInWei.call({from: accounts[3]});
		const uint256pbZqX62 = await BTCParamV2n43LpG.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintqBJq0Aj, {from: accounts[3]});
		await BTCParamV2n43LpG.updateBtcPrice.call({from: accounts[5]});

		await expect(BTCParamV2n43LpG.btcIncomePerTPerSecInWei.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2dZBB3a = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const uintqMCje4I = BigInt("1891")
		const uintsiCEVvG = BigInt("1167")
		const uintZ1HMZgL = BigInt("1474")
		const uintxcPL1pC = BigInt("1031")
		const uint256yVgKRw8 = await BTCParamV2dZBB3a.setBtcNetDiff.call(uintqMCje4I, {from: accounts[4]});
		const uint256Y1B7VuI = await BTCParamV2dZBB3a.setBtcNetDiff.call(uintsiCEVvG, {from: accounts[3]});
		const uint256qUMcWhE = await BTCParamV2dZBB3a.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintZ1HMZgL, {from: accounts[0]});
		const uint256DSTLGWI = await BTCParamV2dZBB3a.setBtcBlockReward.call(uintxcPL1pC, {from: accounts[5]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2ASUFNm = await BTCParamV2.new({from: accounts[0]});
		const uintzQM7MO3 = BigInt("1541")
		const uint256mwej9Mu = await BTCParamV2ASUFNm.btcPrice.call({from: accounts[1]});
		await BTCParamV2ASUFNm.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
		await BTCParamV2ASUFNm.updateBtcPrice.call({from: accounts[3]});
		const uint256PdH3Vz1 = await BTCParamV2ASUFNm.setBtcTxFeeRewardRate.call(uintzQM7MO3, {from: accounts[3]});

		assert.equal(uint256mwej9Mu, BigInt("0"))
		await expect(BTCParamV2ASUFNm.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2JoNoNcx = await BTCParamV2.new({from: accounts[0]});
		const boolnHar7K = false
		const addressOAUjEXZ = accounts[0]
		const uintp4jRpVE = BigInt("1628")
		const uintwUWJHXQ = BigInt("95")
		const addressJDztQfW = accounts[0]
		const addressjlWumbq = accounts[5]
		const addressrkUjBth = accounts[1]
		const addressWM0M4c6 = await BTCParamV2JoNoNcx.initialize.call(addressjlWumbq, addressJDztQfW, uintwUWJHXQ, uintp4jRpVE, addressOAUjEXZ, boolnHar7K, {from: accounts[1]});
		const addressuyhpDWg = await BTCParamV2JoNoNcx.transferOwnership.call(addressrkUjBth, {from: accounts[4]});

		await expect(BTCParamV2JoNoNcx.initialize.call(addressjlWumbq, addressJDztQfW, uintwUWJHXQ, uintp4jRpVE, addressOAUjEXZ, boolnHar7K, {from: accounts[1]})).to.be.rejectedWith(Error);
	});
})