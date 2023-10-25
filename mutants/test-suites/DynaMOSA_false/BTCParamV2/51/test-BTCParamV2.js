const BTCParamV2 = artifacts.require("BTCParamV2");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('BTCParamV2', (accounts) => {
	it('test for BTCParamV2', async () => {
		const BTCParamV2TiM9xWN = await BTCParamV2.new({from: accounts[0]});
		const uintqqjmGlc = BigInt("751")
		const uintkd1rUAL = BigInt("1352")
		const boolULMdIQw = true
		const addressCp1Db8l = accounts[0]
		const uintG9UDs4A = BigInt("934")
		const uintfsP9aGK = BigInt("1738")
		const addressJOGDMAC = accounts[4]
		const addressFgZ8qB = accounts[4]
//		const uint256eTGzmm1 = await BTCParamV2TiM9xWN.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintqqjmGlc, {from: accounts[4]});
//		const uint256tetHc52 = await BTCParamV2TiM9xWN.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintkd1rUAL, {from: accounts[0]});
//		const addressJpqK5YG = await BTCParamV2TiM9xWN.initialize.call(addressFgZ8qB, addressJOGDMAC, uintfsP9aGK, uintG9UDs4A, addressCp1Db8l, boolULMdIQw, {from: accounts[4]});
//		const uint256My7hRL7 = await BTCParamV2TiM9xWN.btcPrice.call({from: accounts[1]});

		await expect(BTCParamV2TiM9xWN.setBtcTxFeeRewardRateAndUpdateBtcPrice.call(uintqqjmGlc, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2sPHFOT = await BTCParamV2.new({from: accounts[3]});
		const addressQbq61wM = "0x0000000000000000000000000000000000000001"
		const uintOWLEJ0F = BigInt("1068")
		const addressvZr2bAa = accounts[4]
//		const addressG4Zrfp = await BTCParamV2sPHFOT.setParamSetter.call(addressQbq61wM, {from: accounts[3]});
//		const uint256TcSPg6o = await BTCParamV2sPHFOT.setBtcTxFeeRewardRate.call(uintOWLEJ0F, {from: accounts[3]});
//		const addressBH6OjjY = await BTCParamV2sPHFOT.transferOwnership.call(addressvZr2bAa, {from: accounts[3]});

		await expect(BTCParamV2sPHFOT.setParamSetter.call(addressQbq61wM, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2Kj3tmW0 = await BTCParamV2.new({from: accounts[0]});
		const addresssjj8iEz = accounts[0]
		const uints4iy3TG = BigInt("1386")
//		await BTCParamV2Kj3tmW0.onlyOwner.call({from: accounts[4]});
//		const addressni6vYM = await BTCParamV2Kj3tmW0.transferOwnership.call(addresssjj8iEz, {from: accounts[5]});
//		const uint256NQmCR4M = await BTCParamV2Kj3tmW0.setBtcBlockReward.call(uints4iy3TG, {from: accounts[4]});
//		await BTCParamV2Kj3tmW0.onlyOwner.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(BTCParamV2Kj3tmW0.onlyOwner.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV21a0PvO = await BTCParamV2.new({from: accounts[4]});
		const uintJX7mcmI = BigInt("483")
		const addressoO354Zq = accounts[1]
		const uint256jU6s1Ni = await BTCParamV21a0PvO.btcPrice.call({from: accounts[0]});
//		const uint256Xhs52J0 = await BTCParamV21a0PvO.setBtcTxFeeRewardRate.call(uintJX7mcmI, {from: accounts[0]});
//		const boolasjJO23 = await BTCParamV21a0PvO.removeListener.call(addressoO354Zq, {from: accounts[0]});

		assert.equal(uint256jU6s1Ni, BigInt("0"))
		await expect(BTCParamV21a0PvO.setBtcTxFeeRewardRate.call(uintJX7mcmI, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2bKnFHo8 = await BTCParamV2.new({from: accounts[0]});
		const uinteF0d33u = BigInt("251")
		const uintq4aL5Pf = BigInt("1686")
//		const uint256eAjDqK8 = await BTCParamV2bKnFHo8.btcIncomePerTPerSecInWei.call({from: accounts[2]});
//		const uint256u9HbgE = await BTCParamV2bKnFHo8.setBtcBlockReward.call(uinteF0d33u, {from: accounts[3]});
//		const uint256dwS5gcp = await BTCParamV2bKnFHo8.btcPrice.call({from: accounts[2]});
//		const uint256H6tEFOi = await BTCParamV2bKnFHo8.btcIncomePerTPerSecInWei.call({from: accounts[5]});
//		const uint256viF5of7 = await BTCParamV2bKnFHo8.setBtcNetDiff.call(uintq4aL5Pf, {from: accounts[0]});

		await expect(BTCParamV2bKnFHo8.btcIncomePerTPerSecInWei.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2xAWYtvF = await BTCParamV2.new({from: accounts[4]});
		const boolIi0LLIo = false
		const addressX1l9iGP = accounts[2]
		const uintuPcXZh = BigInt("1177")
		const uintcq6jan5 = BigInt("504")
		const addressnOlWc6A = accounts[3]
		const addresswQN4xi0 = accounts[2]
		const uintlZ7hOQY = BigInt("229")
		const addressRAVh51n = accounts[1]
//		const addressUeoEUH7 = await BTCParamV2xAWYtvF.initialize.call(addresswQN4xi0, addressnOlWc6A, uintcq6jan5, uintuPcXZh, addressX1l9iGP, boolIi0LLIo, {from: accounts[3]});
//		const uint256i4ygPkG = await BTCParamV2xAWYtvF.setBtcBlockReward.call(uintlZ7hOQY, {from: accounts[2]});
//		const addressQUsP91x = await BTCParamV2xAWYtvF.addListener.call(addressRAVh51n, {from: accounts[1]});

		await expect(BTCParamV2xAWYtvF.initialize.call(addresswQN4xi0, addressnOlWc6A, uintcq6jan5, uintuPcXZh, addressX1l9iGP, boolIi0LLIo, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for BTCParamV2', async () => {
		const BTCParamV2UybV7Ov = await BTCParamV2.new({from: "0x0000000000000000000000000000000000000001"});
		const addresslUscXYw = accounts[2]
		const addressjuhdfIZ = accounts[0]
		const uintc9FbfBH = BigInt("742")
		const uintUQgmqtQ = BigInt("837")
		const uintrAcAIYM = BigInt("1395")
		const addressM7EpCAL = await BTCParamV2UybV7Ov.setParamSetter.call(addresslUscXYw, {from: accounts[1]});
		const addressIJUR6eg = await BTCParamV2UybV7Ov.addListener.call(addressjuhdfIZ, {from: accounts[2]});
		const uint256ESgf09G = await BTCParamV2UybV7Ov.setBtcNetDiff.call(uintc9FbfBH, {from: accounts[0]});
		const uint256GOMIhN5 = await BTCParamV2UybV7Ov.setBtcBlockReward.call(uintUQgmqtQ, {from: accounts[2]});
		const uint256UmSdK3U = await BTCParamV2UybV7Ov.setBtcNetDiff.call(uintrAcAIYM, {from: accounts[2]});
	});
})