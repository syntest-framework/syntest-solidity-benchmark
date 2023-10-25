const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsvNqyASL = await JGNRewards.new({from: accounts[5]});
		const uintmyUwIj = BigInt("1931")
		const addressrqnhgy6 = accounts[0]
		const addressjMrNhwg = accounts[3]
		const uint256EwQuVhG = await JGNRewardsvNqyASL.stake.call(uintmyUwIj, {from: "0x0000000000000000000000000000000000000001"});
		const addressglec9xP = await JGNRewardsvNqyASL.updateReward.call(addressrqnhgy6, {from: accounts[3]});
		const uint256X8Nm4Xd = await JGNRewardsvNqyASL.balanceOf.call(addressjMrNhwg, {from: accounts[0]});

		await expect(JGNRewardsvNqyASL.stake.call(uintmyUwIj, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsPJLXUiv = await JGNRewards.new({from: accounts[3]});
		const uint256Kc4IabB = await JGNRewardsPJLXUiv.totalSupply.call({from: accounts[0]});
		await JGNRewardsPJLXUiv.getReward.call({from: accounts[1]});

		assert.equal(uint256Kc4IabB, BigInt("0"))
		await expect(JGNRewardsPJLXUiv.getReward.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsVdiHKc = await JGNRewards.new({from: accounts[1]});
		const addressWHwZtY8 = accounts[3]
		const addressC9kQHPp = "0x0000000000000000000000000000000000000001"
		const uintMFNSbka = BigInt("635")
		const uint256tR1SEXC = await JGNRewardsVdiHKc.earned.call(addressWHwZtY8, {from: "0x0000000000000000000000000000000000000001"});
		await JGNRewardsVdiHKc.checkStart.call({from: accounts[5]});
		await JGNRewardsVdiHKc.exit.call({from: accounts[0]});
		const addressVyjm9XW = await JGNRewardsVdiHKc.updateReward.call(addressC9kQHPp, {from: accounts[2]});
		const uint256MqnzUHG = await JGNRewardsVdiHKc.withdraw.call(uintMFNSbka, {from: accounts[4]});

		assert.equal(uint256tR1SEXC, BigInt("0"))
		await expect(JGNRewardsVdiHKc.checkStart.call({from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsdWAr45E = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const addressQAxp6Ar = accounts[2]
		const addressys9yb6g = accounts[0]
		await JGNRewardsdWAr45E.getReward.call({from: accounts[5]});
		await JGNRewardsdWAr45E.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256Wrf7Loh = await JGNRewardsdWAr45E.earned.call(addressQAxp6Ar, {from: accounts[3]});
		const uint256UcxnWiN = await JGNRewardsdWAr45E.earned.call(addressys9yb6g, {from: accounts[2]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsnKov5EZ = await JGNRewards.new({from: accounts[0]});
		const addresshCjJvGd = "0x0000000000000000000000000000000000000001"
		const uint256vemTnnV = await JGNRewardsnKov5EZ.balanceOf.call(addresshCjJvGd, {from: accounts[0]});
		await JGNRewardsnKov5EZ.exit.call({from: accounts[0]});

		assert.equal(uint256vemTnnV, BigInt("0"))
		await expect(JGNRewardsnKov5EZ.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardskHgopXt = await JGNRewards.new({from: accounts[5]});
		const uintmjuRRuX = BigInt("1335")
		const uint256f6F7y3M = await JGNRewardskHgopXt.withdraw.call(uintmjuRRuX, {from: accounts[4]});
		await JGNRewardskHgopXt.exit.call({from: accounts[2]});
		await JGNRewardskHgopXt.getReward.call({from: "0x0000000000000000000000000000000000000001"});
		await JGNRewardskHgopXt.exit.call({from: accounts[1]});

		await expect(JGNRewardskHgopXt.withdraw.call(uintmjuRRuX, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsK5PpKkM = await JGNRewards.new({from: accounts[0]});
		const uintYir9ziD = BigInt("333")
		await JGNRewardsK5PpKkM.getReward.call({from: accounts[3]});
		await JGNRewardsK5PpKkM.getReward.call({from: accounts[0]});
		const uint256uv3lKuk = await JGNRewardsK5PpKkM.notifyRewardAmount.call(uintYir9ziD, {from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardsK5PpKkM.getReward.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});
})