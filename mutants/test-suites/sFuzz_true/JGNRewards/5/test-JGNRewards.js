const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsMtVL474 = await JGNRewards.new({from: accounts[4]});
		const uintVjuPQu = BigInt("1996")
		const uint256L3fQk0Q = await JGNRewardsMtVL474.lastTimeRewardApplicable.call({from: accounts[1]});
		const uint256LMMJmjo = await JGNRewardsMtVL474.lastTimeRewardApplicable.call({from: accounts[0]});
//		const uint256OGPLrPr = await JGNRewardsMtVL474.withdraw.call(uintVjuPQu, {from: accounts[1]});
//		await JGNRewardsMtVL474.checkStart.call({from: accounts[2]});
//		const uint25627UyCG = await JGNRewardsMtVL474.rewardPerToken.call({from: accounts[2]});

		assert.equal(uint256L3fQk0Q, BigInt("0"))
		assert.equal(uint256LMMJmjo, BigInt("0"))
		await expect(JGNRewardsMtVL474.withdraw.call(uintVjuPQu, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsB73YQgf = await JGNRewards.new({from: accounts[0]});
		const addressFOPvTIE = accounts[2]
		const addressfcmZ85f = accounts[4]
		const uint256iZHRw1E = await JGNRewardsB73YQgf.lastTimeRewardApplicable.call({from: accounts[5]});
		const uint256XpaLQF = await JGNRewardsB73YQgf.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256unXfir = await JGNRewardsB73YQgf.earned.call(addressFOPvTIE, {from: accounts[0]});
//		await JGNRewardsB73YQgf.exit.call({from: accounts[4]});
//		const uint256vkAdRlA = await JGNRewardsB73YQgf.balanceOf.call(addressfcmZ85f, {from: accounts[2]});

		assert.equal(uint256XpaLQF, BigInt("0"))
		assert.equal(uint256iZHRw1E, BigInt("0"))
		assert.equal(uint256unXfir, BigInt("0"))
		await expect(JGNRewardsB73YQgf.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsrTrGDd9 = await JGNRewards.new({from: accounts[5]});
		const uintqT1hIz0 = BigInt("1928")
		const uintBuEnwSA = BigInt("1902")
		const uintyf2kpzM = BigInt("500")
//		await JGNRewardsrTrGDd9.checkStart.call({from: accounts[2]});
//		const uint256CH9opEp = await JGNRewardsrTrGDd9.stake.call(uintqT1hIz0, {from: accounts[3]});
//		const uint256KZ4eZlP = await JGNRewardsrTrGDd9.notifyRewardAmount.call(uintBuEnwSA, {from: accounts[3]});
//		const uint256efZyrgM = await JGNRewardsrTrGDd9.rewardPerToken.call({from: accounts[5]});
//		await JGNRewardsrTrGDd9.exit.call({from: accounts[1]});
//		const uint256scPY61 = await JGNRewardsrTrGDd9.notifyRewardAmount.call(uintyf2kpzM, {from: accounts[2]});

		await expect(JGNRewardsrTrGDd9.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsTbrrLno = await JGNRewards.new({from: accounts[1]});
		const uintEJxpfYe = BigInt("1189")
		const uintbMIDlJ5 = BigInt("1650")
		const uintUR2N6cH = BigInt("566")
		const uintdsJ3ziQ = BigInt("224")
//		const uint256os91Sk = await JGNRewardsTbrrLno.stake.call(uintEJxpfYe, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256IkxoYGd = await JGNRewardsTbrrLno.withdraw.call(uintbMIDlJ5, {from: accounts[1]});
//		const uint256MBLWPPo = await JGNRewardsTbrrLno.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256nXFuFzp = await JGNRewardsTbrrLno.withdraw.call(uintUR2N6cH, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256d0af3AB = await JGNRewardsTbrrLno.withdraw.call(uintdsJ3ziQ, {from: "0x0000000000000000000000000000000000000001"});
//		const uint256CretsYU = await JGNRewardsTbrrLno.rewardPerToken.call({from: accounts[0]});

		await expect(JGNRewardsTbrrLno.stake.call(uintEJxpfYe, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsonIg8ya = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressTVD0h8p = accounts[4]
		const uint256VTqvXB = await JGNRewardsonIg8ya.balanceOf.call(addressTVD0h8p, {from: accounts[3]});
		await JGNRewardsonIg8ya.exit.call({from: accounts[0]});
		const uint256QKprQYC = await JGNRewardsonIg8ya.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsgYnEjS = await JGNRewards.new({from: accounts[0]});
//		await JGNRewardsgYnEjS.getReward.call({from: accounts[2]});
//		await JGNRewardsgYnEjS.getReward.call({from: accounts[3]});
//		await JGNRewardsgYnEjS.exit.call({from: accounts[1]});
//		const uint256Xhoo6K3 = await JGNRewardsgYnEjS.rewardPerToken.call({from: accounts[1]});

		await expect(JGNRewardsgYnEjS.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsOsvXTPR = await JGNRewards.new({from: accounts[0]});
		const uintMu4RGxi = BigInt("1467")
//		const uint256Awkigxf = await JGNRewardsOsvXTPR.notifyRewardAmount.call(uintMu4RGxi, {from: accounts[2]});
//		await JGNRewardsOsvXTPR.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		await JGNRewardsOsvXTPR.getReward.call({from: accounts[1]});

		await expect(JGNRewardsOsvXTPR.notifyRewardAmount.call(uintMu4RGxi, {from: accounts[2]})).to.be.rejectedWith(Error);
	});
})