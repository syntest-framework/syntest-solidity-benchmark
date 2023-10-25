const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsB25uH3A = await JGNRewards.new({from: accounts[4]});
		const uintqvmjcp8 = BigInt("305")
		const addressixXe8Ou = accounts[2]
//		const uint256HIRnyM = await JGNRewardsB25uH3A.withdraw.call(uintqvmjcp8, {from: accounts[2]});
//		const uint256OFI818 = await JGNRewardsB25uH3A.lastTimeRewardApplicable.call({from: "0x0000000000000000000000000000000000000001"});
//		const addresssWCo3nl = await JGNRewardsB25uH3A.updateReward.call(addressixXe8Ou, {from: accounts[1]});

		await expect(JGNRewardsB25uH3A.withdraw.call(uintqvmjcp8, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsU67aIQ0 = await JGNRewards.new({from: accounts[2]});
		const uintEqagLk7 = BigInt("1761")
		const addressqqlBjJ = accounts[2]
//		await JGNRewardsU67aIQ0.checkStart.call({from: accounts[2]});
//		const uint256tbVL9N5 = await JGNRewardsU67aIQ0.withdraw.call(uintEqagLk7, {from: accounts[1]});
//		await JGNRewardsU67aIQ0.checkStart.call({from: accounts[5]});
//		const address237IVv = await JGNRewardsU67aIQ0.updateReward.call(addressqqlBjJ, {from: accounts[1]});
//		await JGNRewardsU67aIQ0.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardsU67aIQ0.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsqZ4aJnD = await JGNRewards.new({from: accounts[4]});
		const uintATLX1PT = BigInt("380")
//		const uint256YUa9cdf = await JGNRewardsqZ4aJnD.stake.call(uintATLX1PT, {from: accounts[5]});
//		await JGNRewardsqZ4aJnD.exit.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardsqZ4aJnD.stake.call(uintATLX1PT, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsu5Axfkg = await JGNRewards.new({from: accounts[1]});
		const addresso7gTPC4 = accounts[2]
		const uint256SM1nPWM = await JGNRewardsu5Axfkg.earned.call(addresso7gTPC4, {from: accounts[3]});
		const uint256Ztc0PmL = await JGNRewardsu5Axfkg.lastTimeRewardApplicable.call({from: accounts[3]});
//		await JGNRewardsu5Axfkg.getReward.call({from: accounts[4]});
		await JGNRewardsu5Axfkg.getReward.call({from: accounts[4]});

		assert.equal(uint256SM1nPWM, BigInt("0"))
		assert.equal(uint256Ztc0PmL, BigInt("0"))
		await expect(JGNRewardsu5Axfkg.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsfLQaYxU = await JGNRewards.new({from: accounts[1]});
		const uintLJ8yAW0 = BigInt("225")
		const uinthG8voJL = BigInt("1883")
		const addressJssN5tw = accounts[5]
//		await JGNRewardsfLQaYxU.exit.call({from: accounts[4]});
//		const uint256H72E3y5 = await JGNRewardsfLQaYxU.withdraw.call(uintLJ8yAW0, {from: accounts[1]});
//		const uint256LSq40BT = await JGNRewardsfLQaYxU.stake.call(uinthG8voJL, {from: accounts[0]});
//		const uint256c0Wd6HA = await JGNRewardsfLQaYxU.balanceOf.call(addressJssN5tw, {from: accounts[2]});

		await expect(JGNRewardsfLQaYxU.exit.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardscjbP0NL = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressLPUSj8W = accounts[1]
		const addressdWl8hB4 = accounts[4]
		await JGNRewardscjbP0NL.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		const addressUaXkzLP = await JGNRewardscjbP0NL.updateReward.call(addressLPUSj8W, {from: accounts[0]});
		const addressT2K3jV7 = await JGNRewardscjbP0NL.updateReward.call(addressdWl8hB4, {from: accounts[2]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsu5Axfkg = await JGNRewards.new({from: accounts[1]});
		const addressO2Eh421 = accounts[2]
		const uinte1vdCMR = BigInt("805")
		const uintY0sOREt = BigInt("903")
		const uint256SM1nPWM = await JGNRewardsu5Axfkg.earned.call(addressO2Eh421, {from: accounts[3]});
//		const uint256iYaw3Nc = await JGNRewardsu5Axfkg.notifyRewardAmount.call(uinte1vdCMR, {from: accounts[0]});
//		await JGNRewardsu5Axfkg.getReward.call({from: accounts[4]});
//		const uint256H0u7dAl = await JGNRewardsu5Axfkg.withdraw.call(uintY0sOREt, {from: accounts[2]});
//		await JGNRewardsu5Axfkg.getReward.call({from: accounts[4]});

		assert.equal(uint256SM1nPWM, BigInt("0"))
		await expect(JGNRewardsu5Axfkg.notifyRewardAmount.call(uinte1vdCMR, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})