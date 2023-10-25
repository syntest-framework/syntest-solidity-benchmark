const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsyrtV3JE = await SSTRewards.new({from: accounts[3]});
		const uintsL9BCZW = BigInt("706")
		const uintGxhxJmo = BigInt("1291")
		const addressgal1gh5 = accounts[0]
		const addressvLMDZXC = accounts[4]
		const uint256gUsG6H0 = await SSTRewardsyrtV3JE.notifyRewardAmount.call(uintsL9BCZW, {from: accounts[1]});
		const uint256TbJlcqV = await SSTRewardsyrtV3JE.stake.call(uintGxhxJmo, {from: accounts[4]});
		await SSTRewardsyrtV3JE.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256mJh9bqH = await SSTRewardsyrtV3JE.balanceOf.call(addressgal1gh5, {from: accounts[4]});
		const addressia945Sb = await SSTRewardsyrtV3JE.updateReward.call(addressvLMDZXC, {from: accounts[1]});
		const uint256VxlRGal = await SSTRewardsyrtV3JE.rewardPerToken.call({from: accounts[0]});

		await expect(SSTRewardsyrtV3JE.notifyRewardAmount.call(uintsL9BCZW, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsObYCjUN = await SSTRewards.new({from: accounts[2]});
		const uintJiEmX6l = BigInt("225")
		await SSTRewardsObYCjUN.checkStart.call({from: accounts[0]});
		await SSTRewardsObYCjUN.checkStart.call({from: accounts[3]});
		const uint256h60bXt4 = await SSTRewardsObYCjUN.lastTimeRewardApplicable.call({from: accounts[3]});
		await SSTRewardsObYCjUN.getReward.call({from: accounts[4]});
		const uint256aqca8yt = await SSTRewardsObYCjUN.withdraw.call(uintJiEmX6l, {from: accounts[0]});

		await expect(SSTRewardsObYCjUN.checkStart.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsYmWd7dy = await SSTRewards.new({from: accounts[3]});
		const addresswyuB1MY = accounts[4]
		const uintNVRf6No = BigInt("1484")
		const uintmSoSCMU = BigInt("808")
		const addressnzHx4tW = accounts[1]
		const addressVBtPeVE = accounts[0]
		const uint256ohwLOR1 = await SSTRewardsYmWd7dy.earned.call(addresswyuB1MY, {from: accounts[3]});
		const uint256ygtGFzl = await SSTRewardsYmWd7dy.stake.call(uintNVRf6No, {from: accounts[4]});
		const uint256noKOQFW = await SSTRewardsYmWd7dy.stake.call(uintmSoSCMU, {from: accounts[3]});
		const uint256XcfteK0 = await SSTRewardsYmWd7dy.earned.call(addressnzHx4tW, {from: accounts[0]});
		const uint256QskLnYV = await SSTRewardsYmWd7dy.balanceOf.call(addressVBtPeVE, {from: accounts[1]});

		assert.equal(uint256ohwLOR1, BigInt("0"))
		await expect(SSTRewardsYmWd7dy.stake.call(uintNVRf6No, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewards1cyoi5 = await SSTRewards.new({from: accounts[1]});
		const addressiKEtLw1 = accounts[3]
		const addressSWAxvB = accounts[1]
		const addresslkzmNz0 = accounts[4]
		const addressyg1GoR = accounts[1]
		await SSTRewards1cyoi5.getReward.call({from: accounts[1]});
		const uint256Bnjmezu = await SSTRewards1cyoi5.earned.call(addressiKEtLw1, {from: accounts[5]});
		const addressaKqDQKM = await SSTRewards1cyoi5.updateReward.call(addressSWAxvB, {from: accounts[4]});
		const uint256KZFBCuB = await SSTRewards1cyoi5.balanceOf.call(addresslkzmNz0, {from: accounts[4]});
		await SSTRewards1cyoi5.checkStart.call({from: accounts[0]});
		const addressIoaKyHk = await SSTRewards1cyoi5.updateReward.call(addressyg1GoR, {from: accounts[1]});

		await expect(SSTRewards1cyoi5.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsihdywrB = await SSTRewards.new({from: accounts[3]});
		const uintgbiVGte = BigInt("1159")
		const uint256EIlZ5Ck = await SSTRewardsihdywrB.rewardPerToken.call({from: accounts[1]});
		const uint256nB6cOVM = await SSTRewardsihdywrB.withdraw.call(uintgbiVGte, {from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256EIlZ5Ck, BigInt("0"))
		await expect(SSTRewardsihdywrB.withdraw.call(uintgbiVGte, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsB19y4ff = await SSTRewards.new({from: accounts[1]});
		await SSTRewardsB19y4ff.exit.call({from: accounts[4]});
		const uint256p8Plr3j = await SSTRewardsB19y4ff.rewardPerToken.call({from: accounts[3]});
		await SSTRewardsB19y4ff.getReward.call({from: accounts[2]});
		const uint256Cjd6Sf = await SSTRewardsB19y4ff.rewardPerToken.call({from: accounts[4]});

		await expect(SSTRewardsB19y4ff.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsDfAVJVM = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addresskTPj1ln = accounts[0]
		const uint256FWDaCV = await SSTRewardsDfAVJVM.rewardPerToken.call({from: accounts[1]});
		const uint256Ov8UZlm = await SSTRewardsDfAVJVM.rewardPerToken.call({from: accounts[3]});
		const uint256aYl3tTX = await SSTRewardsDfAVJVM.earned.call(addresskTPj1ln, {from: accounts[3]});
	});
})