const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsuBUKsFF = await SSTRewards.new({from: accounts[2]});
		const uintKJ0WZ6T = BigInt("1333")
		const uintdNh6nLF = BigInt("1727")
		const uint256OMOhld = await SSTRewardsuBUKsFF.rewardPerToken.call({from: accounts[3]});
		const uint256VsA36YB = await SSTRewardsuBUKsFF.withdraw.call(uintKJ0WZ6T, {from: accounts[4]});
		const uint256qmq3U4t = await SSTRewardsuBUKsFF.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256GSZEL9O = await SSTRewardsuBUKsFF.stake.call(uintdNh6nLF, {from: accounts[0]});

		assert.equal(uint256OMOhld, BigInt("0"))
		await expect(SSTRewardsuBUKsFF.withdraw.call(uintKJ0WZ6T, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsQoaHY1X = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintNCa8zoR = BigInt("1881")
		const uintrnTSxTh = BigInt("6")
		const uintpCkNNhU = BigInt("1231")
		const uint256uy3ENw5 = await SSTRewardsQoaHY1X.stake.call(uintNCa8zoR, {from: accounts[5]});
		const uint256gPNj0HW = await SSTRewardsQoaHY1X.totalSupply.call({from: accounts[2]});
		const uint256SUB5v3A = await SSTRewardsQoaHY1X.notifyRewardAmount.call(uintrnTSxTh, {from: accounts[4]});
		const uint256RZTKtEV = await SSTRewardsQoaHY1X.stake.call(uintpCkNNhU, {from: accounts[3]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsZD7VJuI = await SSTRewards.new({from: accounts[0]});
		const uintuYQS1yC = BigInt("1531")
		const addresswgEreY = accounts[0]
		const uintYskQr1F = BigInt("269")
		const uint256dhaDHLJ = await SSTRewardsZD7VJuI.stake.call(uintuYQS1yC, {from: accounts[1]});
		const addressGAsns9s = await SSTRewardsZD7VJuI.updateReward.call(addresswgEreY, {from: accounts[3]});
		const uint256M4q1gh = await SSTRewardsZD7VJuI.notifyRewardAmount.call(uintYskQr1F, {from: accounts[1]});

		await expect(SSTRewardsZD7VJuI.stake.call(uintuYQS1yC, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewards1hx77M = await SSTRewards.new({from: accounts[1]});
		const addressRAno1zm = accounts[2]
		const addressPTgTX2K = accounts[3]
		const uintbR6DLaf = BigInt("620")
		await SSTRewards1hx77M.exit.call({from: accounts[0]});
		const uint256FSBNK0 = await SSTRewards1hx77M.earned.call(addressRAno1zm, {from: accounts[1]});
		const uint256HAHudT = await SSTRewards1hx77M.balanceOf.call(addressPTgTX2K, {from: accounts[3]});
		const uint256p6PF3L = await SSTRewards1hx77M.stake.call(uintbR6DLaf, {from: accounts[3]});
		await SSTRewards1hx77M.getReward.call({from: accounts[2]});

		await expect(SSTRewards1hx77M.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsixxS3OF = await SSTRewards.new({from: accounts[3]});
		const addresstygShYt = accounts[1]
		const addressfmr53QX = accounts[0]
		const uintZxp5YFT = BigInt("1162")
		const addressdlklTO = accounts[4]
		const uint256Ac5y9aa = await SSTRewardsixxS3OF.earned.call(addresstygShYt, {from: accounts[2]});
		const uint256B0j5YM = await SSTRewardsixxS3OF.rewardPerToken.call({from: accounts[2]});
		const addressBMe8Zgc = await SSTRewardsixxS3OF.updateReward.call(addressfmr53QX, {from: accounts[4]});
		const uint256Y7vDXdT = await SSTRewardsixxS3OF.stake.call(uintZxp5YFT, {from: accounts[0]});
		const addressO1M0kX = await SSTRewardsixxS3OF.updateReward.call(addressdlklTO, {from: accounts[0]});

		assert.equal(uint256Ac5y9aa, BigInt("0"))
		assert.equal(uint256B0j5YM, BigInt("0"))
		await expect(SSTRewardsixxS3OF.updateReward.call(addressfmr53QX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsZD7VJuI = await SSTRewards.new({from: accounts[0]});
		const uintutLOJVv = BigInt("269")
		const uint256M4q1gh = await SSTRewardsZD7VJuI.notifyRewardAmount.call(uintutLOJVv, {from: accounts[1]});

		await expect(SSTRewardsZD7VJuI.notifyRewardAmount.call(uintutLOJVv, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsZD7VJuI = await SSTRewards.new({from: accounts[0]});
		const uintqG3SOd = BigInt("1559")
		const uint256lgjIJps = await SSTRewardsZD7VJuI.lastTimeRewardApplicable.call({from: accounts[4]});
		await SSTRewardsZD7VJuI.getReward.call({from: accounts[2]});
		const uint256dhaDHLJ = await SSTRewardsZD7VJuI.stake.call(uintqG3SOd, {from: accounts[1]});

		assert.equal(uint256lgjIJps, BigInt("0"))
		await expect(SSTRewardsZD7VJuI.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});
})