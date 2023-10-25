const DMONDETHRewards = artifacts.require("DMONDETHRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('DMONDETHRewards', (accounts) => {
	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsK9bsHhR = await DMONDETHRewards.new({from: accounts[1]});
		const addressPe1aTTV = accounts[5]
		const uintmvdRih5 = BigInt("1005")
		const address4NpGin = accounts[2]
		const addressRlrK5me = accounts[5]
		const addressuGu76NC = accounts[4]
		const addresshXtyPk = await DMONDETHRewardsK9bsHhR.transferOwnership.call(addressPe1aTTV, {from: accounts[1]});
		const uint256aKEHNuI = await DMONDETHRewardsK9bsHhR.notifyRewardAmount.call(uintmvdRih5, {from: accounts[3]});
		const addressq9qu7cv = await DMONDETHRewardsK9bsHhR.setRewardDistribution.call(address4NpGin, {from: accounts[3]});
		const uint256pMswJ2w = await DMONDETHRewardsK9bsHhR.balanceOf.call(addressRlrK5me, {from: accounts[3]});
		const addressjZ0OHD5 = await DMONDETHRewardsK9bsHhR.setStakeAddress.call(addressuGu76NC, {from: accounts[3]});

		await expect(DMONDETHRewardsK9bsHhR.notifyRewardAmount.call(uintmvdRih5, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsuP7EPa6 = await DMONDETHRewards.new({from: accounts[4]});
		const uint256I6UUrp = await DMONDETHRewardsuP7EPa6.remainingReward.call({from: accounts[2]});
		const uint256mmkCOZk = await DMONDETHRewardsuP7EPa6.totalSupply.call({from: accounts[1]});

		await expect(DMONDETHRewardsuP7EPa6.remainingReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsWUEpiA0 = await DMONDETHRewards.new({from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsWUEpiA0.exit.call({from: "0x0000000000000000000000000000000000000001"});
		await DMONDETHRewardsWUEpiA0.getReward.call({from: accounts[1]});
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardshgddnu = await DMONDETHRewards.new({from: accounts[0]});
		const addressjNaRQor = accounts[0]
		const uintcz4c4OA = BigInt("1186")
		const addressHttcctn = accounts[4]
		const uint256glrhr7H = await DMONDETHRewardshgddnu.balanceOf.call(addressjNaRQor, {from: accounts[1]});
		const uint256AyfrAmS = await DMONDETHRewardshgddnu.stake.call(uintcz4c4OA, {from: accounts[1]});
		const address5vFEts = await DMONDETHRewardshgddnu.setRewardDistribution.call(addressHttcctn, {from: accounts[3]});

		assert.equal(uint256glrhr7H, BigInt("0"))
		await expect(DMONDETHRewardshgddnu.stake.call(uintcz4c4OA, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsQpZhI3 = await DMONDETHRewards.new({from: accounts[3]});
		const uintr68nbzj = BigInt("510")
		const addressJ0EcedP = accounts[4]
		const addresszCnDODB = accounts[3]
		const addresssXvvcGr = accounts[2]
		const uint256HLnDB17 = await DMONDETHRewardsQpZhI3.withdraw.call(uintr68nbzj, {from: accounts[0]});
		await DMONDETHRewardsQpZhI3.onlyOwner.call({from: accounts[2]});
		const addressWBxU7Pt = await DMONDETHRewardsQpZhI3.updateReward.call(addressJ0EcedP, {from: accounts[3]});
		const uint256sN89CwN = await DMONDETHRewardsQpZhI3.earned.call(addresszCnDODB, {from: accounts[3]});
		const addressFd9wn2k = await DMONDETHRewardsQpZhI3.updateReward.call(addresssXvvcGr, {from: accounts[1]});

		await expect(DMONDETHRewardsQpZhI3.withdraw.call(uintr68nbzj, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsXoHhfOd = await DMONDETHRewards.new({from: accounts[3]});
		const addressk3M5zb = accounts[4]
		const addressZ7EhLwP = accounts[1]
		const addresseQWuQp2 = await DMONDETHRewardsXoHhfOd.setRewardDistribution.call(addressk3M5zb, {from: accounts[4]});
		const addressx1gr1OS = await DMONDETHRewardsXoHhfOd.setRewardDistribution.call(addressZ7EhLwP, {from: accounts[3]});
		await DMONDETHRewardsXoHhfOd.onlyOwner.call({from: accounts[4]});
		const uint256mIDGyFA = await DMONDETHRewardsXoHhfOd.remainingReward.call({from: accounts[1]});

		await expect(DMONDETHRewardsXoHhfOd.setRewardDistribution.call(addressk3M5zb, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsAiajJb = await DMONDETHRewards.new({from: accounts[1]});
		await DMONDETHRewardsAiajJb.onlyRewardDistribution.call({from: accounts[0]});
		await DMONDETHRewardsAiajJb.checkStart.call({from: accounts[5]});

		await expect(DMONDETHRewardsAiajJb.onlyRewardDistribution.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsamxOMrw = await DMONDETHRewards.new({from: accounts[4]});
		const uint256ruh9Lr1 = await DMONDETHRewardsamxOMrw.totalSupply.call({from: accounts[1]});
		const uint256LlCvlxI = await DMONDETHRewardsamxOMrw.lastTimeRewardApplicable.call({from: accounts[0]});
		await DMONDETHRewardsamxOMrw.exit.call({from: accounts[3]});

		assert.equal(uint256LlCvlxI, BigInt("0"))
		assert.equal(uint256ruh9Lr1, BigInt("0"))
		await expect(DMONDETHRewardsamxOMrw.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardsMQcj5ne = await DMONDETHRewards.new({from: accounts[1]});
		const addressGDXEul = accounts[4]
		const uintf7Xgm7s = BigInt("907")
		const addressvXJ0cqJ = accounts[4]
		const addressdP9Pwzl = await DMONDETHRewardsMQcj5ne.setStakeAddress.call(addressGDXEul, {from: accounts[1]});
		const uint256kSixCiH = await DMONDETHRewardsMQcj5ne.stake.call(uintf7Xgm7s, {from: accounts[2]});
		const addressbXzryxp = await DMONDETHRewardsMQcj5ne.updateReward.call(addressvXJ0cqJ, {from: "0x0000000000000000000000000000000000000001"});

		await expect(DMONDETHRewardsMQcj5ne.stake.call(uintf7Xgm7s, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardshgddnu = await DMONDETHRewards.new({from: accounts[0]});
		const addressBHJBNc = accounts[1]
		const uintdcY9j1B = BigInt("1147")
		await DMONDETHRewardshgddnu.getReward.call({from: accounts[1]});
		await DMONDETHRewardshgddnu.exit.call({from: accounts[4]});
		const uint256glrhr7H = await DMONDETHRewardshgddnu.balanceOf.call(addressBHJBNc, {from: accounts[1]});
		const uint256AyfrAmS = await DMONDETHRewardshgddnu.stake.call(uintdcY9j1B, {from: accounts[1]});

		await expect(DMONDETHRewardshgddnu.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardshgddnu = await DMONDETHRewards.new({from: accounts[0]});
		const addresskrJUtzu = accounts[2]
		const uintIEMYa6b = BigInt("1668")
		await DMONDETHRewardshgddnu.getReward.call({from: accounts[1]});
		const addressJTGZVRy = await DMONDETHRewardshgddnu.owner.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256glrhr7H = await DMONDETHRewardshgddnu.balanceOf.call(addresskrJUtzu, {from: accounts[1]});
		await DMONDETHRewardshgddnu.onlyOwner.call({from: accounts[4]});
		const uint256AyfrAmS = await DMONDETHRewardshgddnu.stake.call(uintIEMYa6b, {from: accounts[1]});

		await expect(DMONDETHRewardshgddnu.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardshgddnu = await DMONDETHRewards.new({from: accounts[0]});
		const uintyHTNGA = BigInt("221")
		const addressWiVtaeG = accounts[0]
		const uint256b5R9Dz8 = await DMONDETHRewardshgddnu.setStartTime.call(uintyHTNGA, {from: accounts[0]});
		const address0gkFzw = await DMONDETHRewardshgddnu.setStakeAddress.call(addressWiVtaeG, {from: accounts[4]});
		await DMONDETHRewardshgddnu.getReward.call({from: accounts[1]});

		await expect(DMONDETHRewardshgddnu.setStakeAddress.call(addressWiVtaeG, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardswhtXk1o = await DMONDETHRewards.new({from: accounts[4]});
		const uintFiGMh0T = BigInt("1491")
		const uintX3UGya = BigInt("1881")
		const uint256aZcFCmR = await DMONDETHRewardswhtXk1o.notifyRewardAmount.call(uintFiGMh0T, {from: accounts[4]});
		const uint256zJzvPCw = await DMONDETHRewardswhtXk1o.remainingReward.call({from: accounts[1]});
		const uint256zDbbbTY = await DMONDETHRewardswhtXk1o.notifyRewardAmount.call(uintX3UGya, {from: accounts[1]});

		await expect(DMONDETHRewardswhtXk1o.remainingReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardshgddnu = await DMONDETHRewards.new({from: accounts[0]});
		const uintmqy8kKN = BigInt("1503")
		const uintkEMUy1y = BigInt("1147")
		await DMONDETHRewardshgddnu.renounceOwnership.call({from: accounts[0]});
		const uint256sR7AgR0 = await DMONDETHRewardshgddnu.withdraw.call(uintmqy8kKN, {from: accounts[4]});
		const uint256AyfrAmS = await DMONDETHRewardshgddnu.stake.call(uintkEMUy1y, {from: accounts[1]});

		await expect(DMONDETHRewardshgddnu.renounceOwnership.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for DMONDETHRewards', async () => {
		const DMONDETHRewardshgddnu = await DMONDETHRewards.new({from: accounts[0]});
		const addressbE5dARy = accounts[4]
		const addresspY71rUY = await DMONDETHRewardshgddnu.setRewardDistribution.call(addressbE5dARy, {from: accounts[0]});
		const uint256C14MniG = await DMONDETHRewardshgddnu.lastTimeRewardApplicable.call({from: accounts[0]});
		await DMONDETHRewardshgddnu.getReward.call({from: accounts[1]});

		assert.equal(uint256C14MniG, BigInt("0"))
		await expect(DMONDETHRewardshgddnu.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});
})