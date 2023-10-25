const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsb9r5O1h = await SSTRewards.new({from: accounts[2]});
		const uintA8tcJLR = BigInt("931")
		const uint256fwhSSWs = await SSTRewardsb9r5O1h.rewardPerToken.call({from: accounts[2]});
		const uint256LofiPXu = await SSTRewardsb9r5O1h.withdraw.call(uintA8tcJLR, {from: "0x0000000000000000000000000000000000000001"});
		await SSTRewardsb9r5O1h.exit.call({from: accounts[1]});
		const uint256DtGfDAI = await SSTRewardsb9r5O1h.totalSupply.call({from: accounts[3]});

		assert.equal(uint256fwhSSWs, BigInt("0"))
		await expect(SSTRewardsb9r5O1h.withdraw.call(uintA8tcJLR, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsW5YWqzW = await SSTRewards.new({from: accounts[5]});
		const uintiGzjgV8 = BigInt("211")
		await SSTRewardsW5YWqzW.getReward.call({from: accounts[0]});
		const uint256mm31YD4 = await SSTRewardsW5YWqzW.stake.call(uintiGzjgV8, {from: accounts[3]});
		const uint256oFVQ4U = await SSTRewardsW5YWqzW.rewardPerToken.call({from: accounts[0]});

		await expect(SSTRewardsW5YWqzW.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsiZAJbWu = await SSTRewards.new({from: accounts[0]});
		const addresshVmGVVA = accounts[1]
		const uintQ1CtImW = BigInt("604")
		await SSTRewardsiZAJbWu.exit.call({from: accounts[0]});
		const uint256PcrIMJQ = await SSTRewardsiZAJbWu.earned.call(addresshVmGVVA, {from: accounts[2]});
		await SSTRewardsiZAJbWu.checkStart.call({from: accounts[5]});
		const uint256OvhxvgQ = await SSTRewardsiZAJbWu.withdraw.call(uintQ1CtImW, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SSTRewardsiZAJbWu.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsjaLYnxk = await SSTRewards.new({from: accounts[0]});
		const addresstK04wZ = accounts[1]
		const uintfNUijIc = BigInt("254")
		const uintjyjTKLY = BigInt("285")
		const addressb4zaJn0 = await SSTRewardsjaLYnxk.updateReward.call(addresstK04wZ, {from: accounts[1]});
		const uint256JytC3bH = await SSTRewardsjaLYnxk.withdraw.call(uintfNUijIc, {from: accounts[2]});
		const uint256p01Q7N7 = await SSTRewardsjaLYnxk.withdraw.call(uintjyjTKLY, {from: accounts[1]});

		await expect(SSTRewardsjaLYnxk.updateReward.call(addresstK04wZ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsHS6ttJL = await SSTRewards.new({from: accounts[1]});
		const uintEJb67n = BigInt("440")
		const uintVCUMfPd = BigInt("14")
		const uint256gH7sgEb = await SSTRewardsHS6ttJL.notifyRewardAmount.call(uintEJb67n, {from: accounts[3]});
		const uint256zMqfIZu = await SSTRewardsHS6ttJL.withdraw.call(uintVCUMfPd, {from: accounts[4]});

		await expect(SSTRewardsHS6ttJL.notifyRewardAmount.call(uintEJb67n, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsujjHcut = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintJKAObcB = BigInt("217")
		const uint256J4FQgXr = await SSTRewardsujjHcut.rewardPerToken.call({from: accounts[2]});
		const uint256N9gMt0 = await SSTRewardsujjHcut.stake.call(uintJKAObcB, {from: accounts[0]});
		const uint2564WZfQe = await SSTRewardsujjHcut.lastTimeRewardApplicable.call({from: accounts[4]});
	});
})