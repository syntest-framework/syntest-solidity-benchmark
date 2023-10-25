const RainbowRAK = artifacts.require("RainbowRAK");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('RainbowRAK', (accounts) => {
	it('test for RainbowRAK', async () => {
		const RainbowRAKPDLBRK5 = await RainbowRAK.new({from: accounts[4]});
		const addressLqoP2Qa = accounts[2]
		const addressjnrO73 = accounts[4]
//		const addressfivd6Kl = await RainbowRAKPDLBRK5.updateReward.call(addressLqoP2Qa, {from: accounts[2]});
//		await RainbowRAKPDLBRK5.renounceOwnership.call({from: accounts[0]});
//		const addresskG1qERQ = await RainbowRAKPDLBRK5.transferOwnership.call(addressjnrO73, {from: accounts[3]});

		await expect(RainbowRAKPDLBRK5.updateReward.call(addressLqoP2Qa, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKpnTUvKV = await RainbowRAK.new({from: accounts[5]});
		const uintmayJvi8 = BigInt("1186")
		const addressD9IkKJ = accounts[5]
		const uintJMpn0X = BigInt("79")
//		const uint256kHPrfCi = await RainbowRAKpnTUvKV.notifyRewardAmount.call(uintmayJvi8, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256RyBQbyW = await RainbowRAKpnTUvKV.earned.call(addressD9IkKJ, {from: accounts[5]});
//		const uint256z4r1ht = await RainbowRAKpnTUvKV.stake.call(uintJMpn0X, {from: accounts[3]});

		await expect(RainbowRAKpnTUvKV.notifyRewardAmount.call(uintmayJvi8, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKjwUpHVZ = await RainbowRAK.new({from: accounts[3]});
		const uintfWs9VB = BigInt("210")
		const addressarrayDqamrVM = await RainbowRAKjwUpHVZ.getCommunity.call({from: accounts[3]});
//		const uint256HlpT8rB = await RainbowRAKjwUpHVZ.stake.call(uintfWs9VB, {from: accounts[0]});
//		const boolR8w8cy1 = await RainbowRAKjwUpHVZ.isOwner.call({from: accounts[1]});

		assert.equal(addressarrayDqamrVM, )
		await expect(RainbowRAKjwUpHVZ.stake.call(uintfWs9VB, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKL2AymRN = await RainbowRAK.new({from: accounts[2]});
		const addressk2aCW50 = accounts[5]
		const addressoYwLgn = accounts[3]
		const uint256jE4mf4t = await RainbowRAKL2AymRN.earned.call(addressk2aCW50, {from: accounts[3]});
		const uint256ALrn0Rb = await RainbowRAKL2AymRN.getCurrentRewardReserve.call({from: accounts[0]});
		const uint256w25j6LQ = await RainbowRAKL2AymRN.earned.call(addressoYwLgn, {from: accounts[0]});
//		await RainbowRAKL2AymRN.claimRewards.call({from: accounts[0]});
//		const uint256SYYUh0s = await RainbowRAKL2AymRN.lastTimeRewardApplicable.call({from: accounts[1]});
//		await RainbowRAKL2AymRN.exit.call({from: accounts[3]});

		assert.equal(uint256ALrn0Rb, BigInt("0"))
		assert.equal(uint256jE4mf4t, BigInt("0"))
		assert.equal(uint256w25j6LQ, BigInt("0"))
		await expect(RainbowRAKL2AymRN.claimRewards.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKKP9hLm7 = await RainbowRAK.new({from: accounts[1]});
		const uintlJVn7z = BigInt("670")
		const uint256WuU4tD = await RainbowRAKKP9hLm7.lastTimeRewardApplicable.call({from: accounts[5]});
		const addressIwdmETm = await RainbowRAKKP9hLm7.owner.call({from: accounts[0]});
//		const uint256AoR9F0p = await RainbowRAKKP9hLm7.unstake.call(uintlJVn7z, {from: accounts[2]});
//		const uint256MLzEex6 = await RainbowRAKKP9hLm7.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressIwdmETm, 0x8a650818E8F92C48e16a06C30dE58652E1805499)
		assert.equal(uint256WuU4tD, BigInt("0"))
		await expect(RainbowRAKKP9hLm7.unstake.call(uintlJVn7z, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKG6MaAd2 = await RainbowRAK.new({from: accounts[0]});
		const addressNdjbrCo = accounts[0]
		const uint256j5Pw6me = await RainbowRAKG6MaAd2.earned.call(addressNdjbrCo, {from: accounts[0]});
//		await RainbowRAKG6MaAd2.exit.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256j5Pw6me, BigInt("0"))
		await expect(RainbowRAKG6MaAd2.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKjsqpOHV = await RainbowRAK.new({from: "0x0000000000000000000000000000000000000001"});
		const uintwr1PBcg = BigInt("825")
		await RainbowRAKjsqpOHV.exit.call({from: accounts[2]});
		const uint256hlOdaQj = await RainbowRAKjsqpOHV.unstake.call(uintwr1PBcg, {from: accounts[0]});
		await RainbowRAKjsqpOHV.claimRewards.call({from: accounts[4]});
		await RainbowRAKjsqpOHV.exit.call({from: accounts[1]});
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKG6MaAd2 = await RainbowRAK.new({from: accounts[0]});
		const addressuEpzQ2 = accounts[4]
		const addressCP58U7t = accounts[0]
		const addressarrayZKTf1r = await RainbowRAKG6MaAd2.getCommunity.call({from: accounts[5]});
		const addressfv0hMGG = await RainbowRAKG6MaAd2.transferOwnership.call(addressuEpzQ2, {from: accounts[0]});
		const uint256j5Pw6me = await RainbowRAKG6MaAd2.earned.call(addressCP58U7t, {from: accounts[0]});

		assert.equal(addressarrayZKTf1r, )
		assert.equal(uint256j5Pw6me, BigInt("0"))
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKpYLKp50 = await RainbowRAK.new({from: accounts[3]});
		const addressiVoyLGS = accounts[1]
		const uint256JQlp9TS = await RainbowRAKpYLKp50.rewardPerToken.call({from: accounts[2]});
//		await RainbowRAKpYLKp50.renounceOwnership.call({from: accounts[3]});
//		const addressvKKNkV = await RainbowRAKpYLKp50.updateReward.call(addressiVoyLGS, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256r1pYm75 = await RainbowRAKpYLKp50.getCurrentRewardReserve.call({from: accounts[3]});
//		const addressarrayNMcLr33 = await RainbowRAKpYLKp50.getCommunity.call({from: accounts[3]});

		assert.equal(uint256JQlp9TS, BigInt("0"))
		await expect(RainbowRAKpYLKp50.renounceOwnership.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for RainbowRAK', async () => {
		const RainbowRAKjwUpHVZ = await RainbowRAK.new({from: accounts[3]});
		const uintbHdNnQ6 = BigInt("965")
		const addressarraya77sXBM = await RainbowRAKjwUpHVZ.getCommunity.call({from: accounts[0]});
		const booliB0TFVO = await RainbowRAKjwUpHVZ.isOwner.call({from: accounts[0]});
		const uint256Q4o2OTq = await RainbowRAKjwUpHVZ.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256XX4h4P = await RainbowRAKjwUpHVZ.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256xio7WFa = await RainbowRAKjwUpHVZ.notifyRewardAmount.call(uintbHdNnQ6, {from: accounts[3]});
//		const boolvioPMRi = await RainbowRAKjwUpHVZ.isOwner.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(addressarraya77sXBM, )
		assert.equal(booliB0TFVO, false)
		assert.equal(uint256Q4o2OTq, BigInt("0"))
		assert.equal(uint256XX4h4P, BigInt("0"))
		await expect(RainbowRAKjwUpHVZ.notifyRewardAmount.call(uintbHdNnQ6, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})