const SSTRewards = artifacts.require("SSTRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('SSTRewards', (accounts) => {
	it('test for SSTRewards', async () => {
		const SSTRewardsbkNa58W = await SSTRewards.new({from: accounts[4]});
		const addressk6yOLLT = "0x0000000000000000000000000000000000000001"
		const uintc7WXbXj = BigInt("184")
		const uintRq0Y5x4 = BigInt("19")
//		const addressZ377y30 = await SSTRewardsbkNa58W.updateReward.call(addressk6yOLLT, {from: accounts[0]});
//		const uint256cbdVIMF = await SSTRewardsbkNa58W.stake.call(uintc7WXbXj, {from: accounts[1]});
//		await SSTRewardsbkNa58W.exit.call({from: accounts[0]});
//		const uint256fgaVcYW = await SSTRewardsbkNa58W.stake.call(uintRq0Y5x4, {from: "0x0000000000000000000000000000000000000001"});

		await expect(SSTRewardsbkNa58W.updateReward.call(addressk6yOLLT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsFdCNFp = await SSTRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintowc3ctW = BigInt("1834")
		const uint256C24toNE = await SSTRewardsFdCNFp.notifyRewardAmount.call(uintowc3ctW, {from: accounts[4]});
		await SSTRewardsFdCNFp.exit.call({from: accounts[3]});
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsiMXQ9g = await SSTRewards.new({from: accounts[2]});
		const addressWdCVxYg = accounts[0]
		const addressTU8y5F = accounts[1]
		const uinti7Bl1gq = BigInt("276")
//		await SSTRewardsiMXQ9g.getReward.call({from: accounts[3]});
//		const uint256BXmXb0f = await SSTRewardsiMXQ9g.balanceOf.call(addressWdCVxYg, {from: accounts[1]});
//		const uint256rdXvjFj = await SSTRewardsiMXQ9g.earned.call(addressTU8y5F, {from: accounts[5]});
//		const uint256x4LTMqh = await SSTRewardsiMXQ9g.stake.call(uinti7Bl1gq, {from: accounts[4]});

		await expect(SSTRewardsiMXQ9g.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsFYlaV9a = await SSTRewards.new({from: accounts[4]});
		const uintsQFiQ5k = BigInt("1439")
//		await SSTRewardsFYlaV9a.exit.call({from: accounts[2]});
//		await SSTRewardsFYlaV9a.getReward.call({from: accounts[4]});
//		const uint256yp05zv8 = await SSTRewardsFYlaV9a.withdraw.call(uintsQFiQ5k, {from: accounts[2]});

		await expect(SSTRewardsFYlaV9a.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardscfRKwM6 = await SSTRewards.new({from: accounts[4]});
		const uintG6Ubaa = BigInt("1011")
		const addressnAzU3ju = accounts[5]
		const uinto7ytzbO = BigInt("1070")
//		const uint256dMyXHkz = await SSTRewardscfRKwM6.withdraw.call(uintG6Ubaa, {from: accounts[0]});
//		const uint256xydAe3y = await SSTRewardscfRKwM6.balanceOf.call(addressnAzU3ju, {from: accounts[3]});
//		const uint256xf6YXu = await SSTRewardscfRKwM6.stake.call(uinto7ytzbO, {from: accounts[1]});
//		await SSTRewardscfRKwM6.getReward.call({from: accounts[4]});

		await expect(SSTRewardscfRKwM6.withdraw.call(uintG6Ubaa, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for SSTRewards', async () => {
		const SSTRewardsJDrCcya = await SSTRewards.new({from: accounts[4]});
		const uintkpeGLvx = BigInt("1624")
		const addressxr9Qp0S = accounts[5]
		const addressap0CvJb = accounts[1]
		const uintYHilw8 = BigInt("1694")
//		const uint256lI1Dx7y = await SSTRewardsJDrCcya.notifyRewardAmount.call(uintkpeGLvx, {from: accounts[0]});
//		const uint256TwOC9ll = await SSTRewardsJDrCcya.earned.call(addressxr9Qp0S, {from: accounts[3]});
//		const uint256ftPO0FU = await SSTRewardsJDrCcya.earned.call(addressap0CvJb, {from: accounts[5]});
//		const uint256t7Mh6JA = await SSTRewardsJDrCcya.totalSupply.call({from: accounts[1]});
//		const uint256AjN33jo = await SSTRewardsJDrCcya.withdraw.call(uintYHilw8, {from: accounts[0]});

		await expect(SSTRewardsJDrCcya.notifyRewardAmount.call(uintkpeGLvx, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})