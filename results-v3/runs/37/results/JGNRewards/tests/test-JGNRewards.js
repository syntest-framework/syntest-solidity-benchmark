const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsSLzzik8 = await JGNRewards.new({from: accounts[0]});
		const addressHlGxQPt = "0x0000000000000000000000000000000000000001"
		const addressnD4Q62r = accounts[1]
		const uintGilUuk5 = BigInt("225")
		await JGNRewardsSLzzik8.getReward.call({from: accounts[0]});
		const uint256dzKfUAu = await JGNRewardsSLzzik8.balanceOf.call(addressHlGxQPt, {from: accounts[4]});
		const uint256CF6HCOK = await JGNRewardsSLzzik8.earned.call(addressnD4Q62r, {from: accounts[5]});
		const uint256xtCXWFE = await JGNRewardsSLzzik8.withdraw.call(uintGilUuk5, {from: accounts[3]});

		await expect(JGNRewardsSLzzik8.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsJGG9JxC = await JGNRewards.new({from: accounts[1]});
		const uintM88Y2pm = BigInt("979")
		const addressKhj0ER = "0x0000000000000000000000000000000000000001"
		const uint256zPtenGB = await JGNRewardsJGG9JxC.stake.call(uintM88Y2pm, {from: accounts[1]});
		const uint256XpBIGu0 = await JGNRewardsJGG9JxC.earned.call(addressKhj0ER, {from: accounts[5]});
		const uint256P1cnD5V = await JGNRewardsJGG9JxC.lastTimeRewardApplicable.call({from: accounts[3]});

		await expect(JGNRewardsJGG9JxC.stake.call(uintM88Y2pm, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardslZsYUH5 = await JGNRewards.new({from: accounts[0]});
		const uintREdHFC = BigInt("144")
		await JGNRewardslZsYUH5.exit.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256EzS1Neu = await JGNRewardslZsYUH5.withdraw.call(uintREdHFC, {from: accounts[2]});
		await JGNRewardslZsYUH5.checkStart.call({from: accounts[3]});

		await expect(JGNRewardslZsYUH5.exit.call({from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsE4oRWvo = await JGNRewards.new({from: accounts[1]});
		const uintChhFSxP = BigInt("484")
		const uintfP0oICe = BigInt("21")
		const uint256NmlcmA7 = await JGNRewardsE4oRWvo.lastTimeRewardApplicable.call({from: accounts[3]});
		const uint256heNOcx0 = await JGNRewardsE4oRWvo.notifyRewardAmount.call(uintChhFSxP, {from: accounts[5]});
		const uint256tdgxW1i = await JGNRewardsE4oRWvo.stake.call(uintfP0oICe, {from: accounts[4]});

		assert.equal(uint256NmlcmA7, BigInt("0"))
		await expect(JGNRewardsE4oRWvo.notifyRewardAmount.call(uintChhFSxP, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsmhDqZQ = await JGNRewards.new({from: accounts[1]});
		const addressQkxw7Q = accounts[4]
		const uintCZzBFBU = BigInt("444")
		const addressdNJbsY = accounts[4]
		const addressN0yKgvB = await JGNRewardsmhDqZQ.updateReward.call(addressQkxw7Q, {from: "0x0000000000000000000000000000000000000001"});
		const uint256qV3xYZK = await JGNRewardsmhDqZQ.rewardPerToken.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256PFJ8Qol = await JGNRewardsmhDqZQ.withdraw.call(uintCZzBFBU, {from: accounts[0]});
		const uint256a3y9I0N = await JGNRewardsmhDqZQ.balanceOf.call(addressdNJbsY, {from: accounts[0]});
		await JGNRewardsmhDqZQ.getReward.call({from: accounts[3]});

		await expect(JGNRewardsmhDqZQ.updateReward.call(addressQkxw7Q, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsSApZksy = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintUE2wcTW = BigInt("343")
		const uint256eiP4Ji9 = await JGNRewardsSApZksy.stake.call(uintUE2wcTW, {from: accounts[5]});
		await JGNRewardsSApZksy.checkStart.call({from: accounts[5]});
		const uint2560GkL01 = await JGNRewardsSApZksy.lastTimeRewardApplicable.call({from: accounts[3]});
	});
})