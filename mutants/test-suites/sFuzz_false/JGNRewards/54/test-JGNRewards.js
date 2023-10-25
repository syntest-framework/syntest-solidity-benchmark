const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsfm1S5tf = await JGNRewards.new({from: accounts[4]});
		const uinthgYpFHr = BigInt("1608")
		const uintkSetjgQ = BigInt("1709")
		const uintntmaRUQ = BigInt("774")
		const uintXc27n7F = BigInt("1073")
//		await JGNRewardsfm1S5tf.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256wxsvWe6 = await JGNRewardsfm1S5tf.stake.call(uinthgYpFHr, {from: accounts[2]});
//		const uint256uVMCwY4 = await JGNRewardsfm1S5tf.stake.call(uintkSetjgQ, {from: accounts[0]});
//		const uint256zVzOljt = await JGNRewardsfm1S5tf.withdraw.call(uintntmaRUQ, {from: accounts[1]});
//		const uint256k5ylKey = await JGNRewardsfm1S5tf.withdraw.call(uintXc27n7F, {from: accounts[2]});

		await expect(JGNRewardsfm1S5tf.checkStart.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsaappvVh = await JGNRewards.new({from: accounts[0]});
		const uint256DWgHXn2 = await JGNRewardsaappvVh.totalSupply.call({from: accounts[0]});
//		await JGNRewardsaappvVh.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256l3vOHDT = await JGNRewardsaappvVh.totalSupply.call({from: accounts[5]});
//		const uint256uqBlPG = await JGNRewardsaappvVh.rewardPerToken.call({from: accounts[0]});

		assert.equal(uint256DWgHXn2, BigInt("0"))
		await expect(JGNRewardsaappvVh.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsQJSOz6P = await JGNRewards.new({from: accounts[3]});
		const uint0mdbVQ = BigInt("353")
		const uintf0KRwP9 = BigInt("1274")
//		await JGNRewardsQJSOz6P.getReward.call({from: accounts[2]});
//		await JGNRewardsQJSOz6P.getReward.call({from: accounts[4]});
//		const uint256RHeIAQ8 = await JGNRewardsQJSOz6P.withdraw.call(uint0mdbVQ, {from: accounts[5]});
//		const uint256r2Vu11Y = await JGNRewardsQJSOz6P.notifyRewardAmount.call(uintf0KRwP9, {from: accounts[1]});

		await expect(JGNRewardsQJSOz6P.getReward.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsCpTTuhQ = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUHVP6Ha = BigInt("1656")
		const uintEc3fnMB = BigInt("1265")
		const uint256nsQ0E9u = await JGNRewardsCpTTuhQ.withdraw.call(uintUHVP6Ha, {from: accounts[3]});
		const uint256EKrWaRq = await JGNRewardsCpTTuhQ.notifyRewardAmount.call(uintEc3fnMB, {from: accounts[0]});
		await JGNRewardsCpTTuhQ.checkStart.call({from: "0x0000000000000000000000000000000000000001"});
		await JGNRewardsCpTTuhQ.exit.call({from: accounts[4]});
		const uint256b2lGh4F = await JGNRewardsCpTTuhQ.lastTimeRewardApplicable.call({from: accounts[0]});
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsAkzlaE5 = await JGNRewards.new({from: accounts[5]});
		const uintJ1zP0zP = BigInt("1471")
		const uintl0qnAus = BigInt("352")
		const uintS3MlKts = BigInt("2025")
		const addresseqo5D9 = "0x0000000000000000000000000000000000000001"
//		const uint256sD3qH45 = await JGNRewardsAkzlaE5.stake.call(uintJ1zP0zP, {from: accounts[1]});
//		const uint256XBu16E4 = await JGNRewardsAkzlaE5.notifyRewardAmount.call(uintl0qnAus, {from: accounts[4]});
//		const uint256tEwc8mW = await JGNRewardsAkzlaE5.stake.call(uintS3MlKts, {from: accounts[4]});
//		const uint256UzOuHf1 = await JGNRewardsAkzlaE5.lastTimeRewardApplicable.call({from: accounts[5]});
//		const uint256v3okMz4 = await JGNRewardsAkzlaE5.earned.call(addresseqo5D9, {from: accounts[3]});

		await expect(JGNRewardsAkzlaE5.stake.call(uintJ1zP0zP, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsaappvVh = await JGNRewards.new({from: accounts[0]});
		const uint256DWgHXn2 = await JGNRewardsaappvVh.totalSupply.call({from: accounts[0]});
//		await JGNRewardsaappvVh.exit.call({from: accounts[2]});
//		await JGNRewardsaappvVh.checkStart.call({from: accounts[0]});
//		await JGNRewardsaappvVh.getReward.call({from: "0x0000000000000000000000000000000000000001"});

		assert.equal(uint256DWgHXn2, BigInt("0"))
		await expect(JGNRewardsaappvVh.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsaappvVh = await JGNRewards.new({from: accounts[0]});
		const uintdAaM40z = BigInt("670")
//		await JGNRewardsaappvVh.getReward.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Z6GRvaV = await JGNRewardsaappvVh.notifyRewardAmount.call(uintdAaM40z, {from: "0x0000000000000000000000000000000000000001"});

		await expect(JGNRewardsaappvVh.getReward.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});
})