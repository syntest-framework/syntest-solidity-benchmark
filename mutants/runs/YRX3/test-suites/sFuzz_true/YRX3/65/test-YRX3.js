const YRX3 = artifacts.require("YRX3");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('YRX3', (accounts) => {
	it('test for YRX3', async () => {
		const YRX3GOimSKm = await YRX3.new({from: accounts[5]});
		const addressSHsUIKW = accounts[1]
		const uint256dzgXQPC = await YRX3GOimSKm.lastTimeRewardApplicable.call({from: accounts[2]});
		await YRX3GOimSKm.onlyOwner.call({from: accounts[2]});
		const uint256i7hQMeE = await YRX3GOimSKm.earned.call(addressSHsUIKW, {from: accounts[0]});
		const uint256nYSVvR0 = await YRX3GOimSKm.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256dzgXQPC, BigInt("0"))
		await expect(YRX3GOimSKm.onlyOwner.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3oFCee76 = await YRX3.new({from: accounts[2]});
		const uintX1vPVQX = BigInt("648")
		const uintibLTePy = BigInt("760")
		const uintwAM28QL = BigInt("397")
		const uint256CUYBd6k = await YRX3oFCee76.stake.call(uintX1vPVQX, {from: accounts[1]});
		await YRX3oFCee76.checkNextEpoch.call({from: accounts[4]});
		const uint256NvGMvT = await YRX3oFCee76.stake.call(uintibLTePy, {from: accounts[4]});
		const uint256CxW1MmB = await YRX3oFCee76.stake.call(uintwAM28QL, {from: accounts[3]});

		await expect(YRX3oFCee76.stake.call(uintX1vPVQX, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3sOyP6Mf = await YRX3.new({from: accounts[4]});
		const addresswyBJsPY = accounts[3]
		const addresszRE9HQa = accounts[2]
		const addresslVH9YcF = accounts[2]
		const addressM0CJY3j = await YRX3sOyP6Mf.setRewardDistribution.call(addresswyBJsPY, {from: accounts[0]});
		await YRX3sOyP6Mf.exit.call({from: accounts[1]});
		const uint256GhwPz9X = await YRX3sOyP6Mf.balanceOf.call(addresszRE9HQa, {from: accounts[3]});
		await YRX3sOyP6Mf.onlyOwner.call({from: accounts[2]});
		const addressSNLCUo7 = await YRX3sOyP6Mf.emergencyDrain.call(addresslVH9YcF, {from: accounts[2]});

		await expect(YRX3sOyP6Mf.setRewardDistribution.call(addresswyBJsPY, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3YEf7Y9p = await YRX3.new({from: accounts[1]});
		const uintLMi5T0d = BigInt("404")
		const uint256EkLXSsP = await YRX3YEf7Y9p.rewardPerToken.call({from: accounts[2]});
		const boolGZwaW5d = await YRX3YEf7Y9p.isOwner.call({from: accounts[4]});
		await YRX3YEf7Y9p.notifyRewardAmount.call({from: accounts[2]});
		const addresswPHQv3j = await YRX3YEf7Y9p.owner.call({from: "0x0000000000000000000000000000000000000001"});
		await YRX3YEf7Y9p.renounceOwnership.call({from: accounts[3]});
		const uint256hgQnkK0 = await YRX3YEf7Y9p.withdraw.call(uintLMi5T0d, {from: accounts[4]});

		assert.equal(boolGZwaW5d, false)
		assert.equal(uint256EkLXSsP, BigInt("0"))
		await expect(YRX3YEf7Y9p.notifyRewardAmount.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3pf98bWr = await YRX3.new({from: "0x0000000000000000000000000000000000000001"});
		const addressGcj5qSA = accounts[4]
		const addressG9xPV8h = accounts[4]
		const addressAE82aNa = accounts[0]
		const addressvOJKS1M = await YRX3pf98bWr.owner.call({from: accounts[1]});
		await YRX3pf98bWr.checkNextEpoch.call({from: accounts[1]});
		const uint256POEKCC = await YRX3pf98bWr.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256UvNUwlg = await YRX3pf98bWr.balanceOf.call(addressGcj5qSA, {from: accounts[4]});
		const addresssNWDc5F = await YRX3pf98bWr.toPayable.call(addressG9xPV8h, {from: accounts[3]});
		const addressatHhhCw = await YRX3pf98bWr.emergencyDrain.call(addressAE82aNa, {from: accounts[2]});
	});

	it('test for YRX3', async () => {
		const YRX3h9LOwO6 = await YRX3.new({from: accounts[2]});
		const addressFj4bAc = accounts[4]
		await YRX3h9LOwO6.getReward.call({from: accounts[0]});
		const addressnYfbwby = await YRX3h9LOwO6.transferOwnership.call(addressFj4bAc, {from: accounts[0]});
		await YRX3h9LOwO6.renounceOwnership.call({from: accounts[2]});
		await YRX3h9LOwO6.renounceOwnership.call({from: accounts[1]});

		await expect(YRX3h9LOwO6.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX37Uli6L = await YRX3.new({from: accounts[4]});
		const uintKcR2HYd = BigInt("1323")
		await YRX37Uli6L.renounceOwnership.call({from: accounts[4]});
		await YRX37Uli6L.checkStart.call({from: accounts[1]});
		const uint256ZXnSU4z = await YRX37Uli6L.withdraw.call(uintKcR2HYd, {from: accounts[0]});
		await YRX37Uli6L.checkNextEpoch.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX37Uli6L.renounceOwnership.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3J0IVK9I = await YRX3.new({from: accounts[2]});
		const addressKk0A42z = accounts[1]
		await YRX3J0IVK9I.getReward.call({from: accounts[1]});
		await YRX3J0IVK9I.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const addressbxN1Bhr = await YRX3J0IVK9I.transferOwnership.call(addressKk0A42z, {from: "0x0000000000000000000000000000000000000001"});

		await expect(YRX3J0IVK9I.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3btHL6Iq = await YRX3.new({from: accounts[4]});
		const uintuJUwna1 = BigInt("1793")
		const uintIo7JZ8g = BigInt("511")
		const uint256iRjROQO = await YRX3btHL6Iq.withdraw.call(uintuJUwna1, {from: accounts[4]});
		const uint256Vpl0Jjs = await YRX3btHL6Iq.stake.call(uintIo7JZ8g, {from: accounts[0]});

		await expect(YRX3btHL6Iq.withdraw.call(uintuJUwna1, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3btHL6Iq = await YRX3.new({from: accounts[4]});
		const uinteCAkpzA = BigInt("518")
		const addressbdPtXJR = await YRX3btHL6Iq.owner.call({from: accounts[2]});
		await YRX3btHL6Iq.getReward.call({from: accounts[2]});
		const uint256Vpl0Jjs = await YRX3btHL6Iq.stake.call(uinteCAkpzA, {from: accounts[0]});
		await YRX3btHL6Iq.onlyRewardDistribution.call({from: accounts[2]});

		assert.equal(addressbdPtXJR, 0x4227555AF9b93bdc2abC11458EaEfA6d55910Ae9)
		await expect(YRX3btHL6Iq.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3btHL6Iq = await YRX3.new({from: accounts[4]});
		const addressOut1oiB = accounts[2]
		const uintmsTFh8G = BigInt("1551")
		const addressN5d6e2p = await YRX3btHL6Iq.setRewardDistribution.call(addressOut1oiB, {from: accounts[4]});
		const uint256Vpl0Jjs = await YRX3btHL6Iq.stake.call(uintmsTFh8G, {from: accounts[0]});

		await expect(YRX3btHL6Iq.stake.call(uintmsTFh8G, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for YRX3', async () => {
		const YRX3btHL6Iq = await YRX3.new({from: accounts[4]});
		const addressVy6p86u = accounts[0]
		const uintvCpBD0B = BigInt("508")
		const addresstPNVUOE = accounts[5]
		const addressEqv0UAv = await YRX3btHL6Iq.transferOwnership.call(addressVy6p86u, {from: accounts[4]});
		const uint256Vpl0Jjs = await YRX3btHL6Iq.stake.call(uintvCpBD0B, {from: accounts[0]});
		const addresshrjfE5y = await YRX3btHL6Iq.updateReward.call(addresstPNVUOE, {from: accounts[5]});

		await expect(YRX3btHL6Iq.stake.call(uintvCpBD0B, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})