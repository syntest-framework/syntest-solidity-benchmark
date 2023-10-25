const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardspkBa4Ha = await SSTRewards.new({from: accounts[4]});
		const uintCtbYgV = BigInt("741")
		await SSTRewardspkBa4Ha.exit.call({from: accounts[0]});
		await SSTRewardspkBa4Ha.getReward.call({from: accounts[1]});
		await SSTRewardspkBa4Ha.exit.call({from: accounts[1]});
		const uint256gm5zEwc = await SSTRewardspkBa4Ha.notifyRewardAmount.call(uintCtbYgV, {from: accounts[2]});

		await expect(SSTRewardspkBa4Ha.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsX78QeKQ = await SSTRewards.new({from: accounts[5]});
		const addresse723QMH = accounts[3]
		const uintmTpkpIj = BigInt("1378")
		const addressiGfv6Bw = await SSTRewardsX78QeKQ.updateReward.call(addresse723QMH, {from: "0x0000000000000000000000000000000000000001"});
		const uint256Pcctc1z = await SSTRewardsX78QeKQ.stake.call(uintmTpkpIj, {from: accounts[2]});

		await expect(SSTRewardsX78QeKQ.updateReward.call(addresse723QMH, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsl0vHc8f = await SSTRewards.new({from: accounts[1]});
		const addressYiwsCQs = "0x0000000000000000000000000000000000000001"
		const addressx2zTp8p = accounts[4]
		await SSTRewardsl0vHc8f.getReward.call({from: accounts[4]});
		const addressLnwxEEd = await SSTRewardsl0vHc8f.updateReward.call(addressYiwsCQs, {from: accounts[0]});
		const uint256MkwsAKa = await SSTRewardsl0vHc8f.earned.call(addressx2zTp8p, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SSTRewardsl0vHc8f.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsg76Pgxa = await SSTRewards.new({from: accounts[4]});
		const uintfhgarab = BigInt("1152")
		const addressxZy7hw0 = accounts[0]
		const uint256Ak8aJhm = await SSTRewardsg76Pgxa.totalSupply.call({from: accounts[0]});
		const uint256AyCgbD = await SSTRewardsg76Pgxa.notifyRewardAmount.call(uintfhgarab, {from: accounts[0]});
		const uint256vVcTTFQ = await SSTRewardsg76Pgxa.balanceOf.call(addressxZy7hw0, {from: accounts[1]});

		assert.equal(uint256Ak8aJhm, BigInt("0"))
		await expect(SSTRewardsg76Pgxa.notifyRewardAmount.call(uintfhgarab, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsAvia5E = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintAPz7jFC = BigInt("662")
		const uint256YJOIgq = await SSTRewardsAvia5E.rewardPerToken.call({from: accounts[4]});
		const uint256JWgaXRw = await SSTRewardsAvia5E.withdraw.call(uintAPz7jFC, {from: accounts[5]});
		const uint256vwSydD = await SSTRewardsAvia5E.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256n8EZMDt = await SSTRewardsAvia5E.lastTimeRewardApplicable.call({from: accounts[3]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsSyfBOp = await SSTRewards.new({from: accounts[2]});
		const uintFzx0zEm = BigInt("1793")
		const uinte4CJtYX = BigInt("1278")
		const uint256IHg8Lvu = await SSTRewardsSyfBOp.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256ZhWBfWq = await SSTRewardsSyfBOp.rewardPerToken.call({from: accounts[3]});
		const uint256ySfyP1 = await SSTRewardsSyfBOp.stake.call(uintFzx0zEm, {from: accounts[4]});
		const uint256iWI4tN = await SSTRewardsSyfBOp.withdraw.call(uinte4CJtYX, {from: accounts[3]});

		assert.equal(uint256IHg8Lvu, BigInt("0"))
		assert.equal(uint256ZhWBfWq, BigInt("0"))
		await expect(SSTRewardsSyfBOp.stake.call(uintFzx0zEm, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsmkxxDMA = await SSTRewards.new({from: accounts[1]});
		const uintKzCr13f = BigInt("1745")
		const addressVi9o6dQ = accounts[1]
		const uintrmONN3m = BigInt("1699")
		const addressA3GIUEk = accounts[5]
		const uint256ajoKr8 = await SSTRewardsmkxxDMA.withdraw.call(uintKzCr13f, {from: accounts[5]});
		const uint256e3DxfT5 = await SSTRewardsmkxxDMA.earned.call(addressVi9o6dQ, {from: accounts[1]});
		const uint256GyFeGz = await SSTRewardsmkxxDMA.withdraw.call(uintrmONN3m, {from: accounts[1]});
		const uint256SoswONl = await SSTRewardsmkxxDMA.rewardPerToken.call({from: accounts[5]});
		const uint256ip4CWI = await SSTRewardsmkxxDMA.balanceOf.call(addressA3GIUEk, {from: accounts[0]});

		await expect(SSTRewardsmkxxDMA.withdraw.call(uintKzCr13f, {from: accounts[5]})).to.be.rejectedWith(Error);
	});
})