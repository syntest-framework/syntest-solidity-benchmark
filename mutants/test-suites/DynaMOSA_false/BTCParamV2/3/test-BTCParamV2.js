const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2Nt5GvmQ = await BTCParamV2.new({from: accounts[1]});
		const uintcojHTSr = BigInt("30")
//		await BTCParamV2Nt5GvmQ.updateBtcPrice.call({from: accounts[4]});
//		const uint256usjhfDW = await BTCParamV2Nt5GvmQ.btcIncomePerTPerSecInWei.call({from: accounts[0]});
//		const uint256wDl6tnK = await BTCParamV2Nt5GvmQ.setBtcNetDiff.call(uintcojHTSr, {from: accounts[4]});
		await BTCParamV2Nt5GvmQ.updateBtcPrice.call({from: accounts[4]});
//		await BTCParamV2Nt5GvmQ.onlyOwner.call({from: accounts[3]});

		await expect(BTCParamV2Nt5GvmQ.updateBtcPrice.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2AM89Q5g = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addressrTL7dr3 = accounts[2]
		const addressFaquSQ = accounts[1]
		const boolHgB1YM2 = await BTCParamV2AM89Q5g.removeListener.call(addressrTL7dr3, {from: accounts[0]});
		await BTCParamV2AM89Q5g.onlyOwner.call({from: accounts[0]});
		const addressaJZIjO = await BTCParamV2AM89Q5g.setParamSetter.call(addressFaquSQ, {from: accounts[5]});
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2dWqOdA = await BTCParamV2.new({from: accounts[5]});
		const addressjNvp5L = accounts[4]
		const addresso8B1pih = accounts[2]
		const uintB3VczMC = BigInt("361")
		const addressuSjJ4S = accounts[2]
		const uintTIXEwCx = BigInt("414")
//		const addressFdUu9Z = await BTCParamV2dWqOdA.transferOwnership.call(addressjNvp5L, {from: accounts[1]});
//		const addressUKqm9Xz = await BTCParamV2dWqOdA.setParamSetter.call(addresso8B1pih, {from: accounts[1]});
//		const uint256oEzLL7y = await BTCParamV2dWqOdA.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintB3VczMC, {from: accounts[5]});
//		const addressAjhCXD = await BTCParamV2dWqOdA.setParamSetter.call(addressuSjJ4S, {from: accounts[2]});
//		const uint256RGmfDvo = await BTCParamV2dWqOdA.setBtcTxFeeRewardRate.call(uintTIXEwCx, {from: accounts[0]});

		await expect(BTCParamV2dWqOdA.transferOwnership.call(addressjNvp5L, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2sywJ0WD = await BTCParamV2.new({from: accounts[1]});
		const addressihZ3Ve9 = accounts[4]
//		await BTCParamV2sywJ0WD.onlyOwner.call({from: accounts[3]});
//		await BTCParamV2sywJ0WD.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});
//		await BTCParamV2sywJ0WD.onlyOwner.call({from: accounts[0]});
//		const addressojuqANB = await BTCParamV2sywJ0WD.setParamSetter.call(addressihZ3Ve9, {from: accounts[2]});

		await expect(BTCParamV2sywJ0WD.onlyOwner.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2WVKy5Ar = await BTCParamV2.new({from: accounts[1]});
		const uintVS9PMsd = BigInt("1386")
//		const uint256k2wxZbM = await BTCParamV2WVKy5Ar.btcIncomePerTPerSecInWei.call({from: accounts[0]});
//		const uint256KtaHkH2 = await BTCParamV2WVKy5Ar.btcIncomePerTPerSecInWei.call({from: accounts[2]});
//		const uint256jjz3sf6 = await BTCParamV2WVKy5Ar.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintVS9PMsd, {from: accounts[5]});

		await expect(BTCParamV2WVKy5Ar.btcIncomePerTPerSecInWei.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2u8w1tm = await BTCParamV2.new({from: accounts[0]});
		const uint3ksMwY = BigInt("1888")
		const uintNLSOXYU = BigInt("963")
		const uinthPkd6Jl = BigInt("96")
		const uint25637rNGz = await BTCParamV2u8w1tm.btcPrice.call({from: accounts[4]});
//		const uint256AlUch7B = await BTCParamV2u8w1tm.setBtcBlockReward.call(uint3ksMwY, {from: accounts[3]});
//		const uint256LeswZZ = await BTCParamV2u8w1tm.setBtcBlockReward.call(uintNLSOXYU, {from: accounts[4]});
//		const uint256os6RQgB = await BTCParamV2u8w1tm.setBtcBlockReward.call(uinthPkd6Jl, {from: accounts[0]});

		assert.equal(uint25637rNGz, BigInt("0"))
		await expect(BTCParamV2u8w1tm.setBtcBlockReward.call(uint3ksMwY, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2azj3P1 = await BTCParamV2.new({from: accounts[4]});
		const boolNUkARV = false
		const addressuZgtUW = accounts[2]
		const uintauLzVLk = BigInt("534")
		const uintOTZlR2Q = BigInt("688")
		const addressGORaZ8p = accounts[2]
		const addressk7LtF0w = accounts[1]
		const uintTBJ8VU = BigInt("2031")
		const addressDNE0jH = accounts[2]
		const addresspnWS6t = accounts[3]
//		const addresso9e6jQr = await BTCParamV2azj3P1.initialize.call(addressk7LtF0w, addressGORaZ8p, uintOTZlR2Q, uintauLzVLk, addressuZgtUW, boolNUkARV, {from: accounts[3]});
//		const uint256EGj5oUx = await BTCParamV2azj3P1.btcPrice.call({from: accounts[4]});
//		const uint256qgfiSyJ = await BTCParamV2azj3P1.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintTBJ8VU, {from: accounts[1]});
//		const addressaVy64CZ = await BTCParamV2azj3P1.setParamSetter.call(addressDNE0jH, {from: accounts[3]});
//		const addressT2ImK0c = await BTCParamV2azj3P1.setParamSetter.call(addresspnWS6t, {from: accounts[4]});

		await expect(BTCParamV2azj3P1.initialize.call(addressk7LtF0w, addressGORaZ8p, uintOTZlR2Q, uintauLzVLk, addressuZgtUW, boolNUkARV, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})