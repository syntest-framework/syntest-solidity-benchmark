const JGNRewards = artifacts.require("JGNRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('JGNRewards', (accounts) => {
	it('test for JGNRewards', async () => {
		const JGNRewardsiXS2pr3 = await JGNRewards.new({from: accounts[4]});
		const addressK3a5aiU = accounts[1]
		const uint256jmPj1Jm = await JGNRewardsiXS2pr3.rewardPerToken.call({from: accounts[3]});
		const uint256rcv7n6V = await JGNRewardsiXS2pr3.earned.call(addressK3a5aiU, {from: accounts[0]});
		const uint256mbtfe9 = await JGNRewardsiXS2pr3.lastTimeRewardApplicable.call({from: accounts[0]});

		assert.equal(uint256jmPj1Jm, BigInt("0"))
		assert.equal(uint256mbtfe9, BigInt("0"))
		assert.equal(uint256rcv7n6V, BigInt("0"))
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsYOsa15m = await JGNRewards.new({from: accounts[3]});
		const addressxnVaFPn = accounts[0]
		const uinti1WyA8L = BigInt("824")
		const uintTdxH0Pz = BigInt("1802")
		const uint256MIn52CG = await JGNRewardsYOsa15m.earned.call(addressxnVaFPn, {from: accounts[2]});
		const uint256MadyHe = await JGNRewardsYOsa15m.notifyRewardAmount.call(uinti1WyA8L, {from: accounts[4]});
		const uint256EOjzEZ = await JGNRewardsYOsa15m.withdraw.call(uintTdxH0Pz, {from: accounts[4]});
		const uint256rGOIBgh = await JGNRewardsYOsa15m.lastTimeRewardApplicable.call({from: accounts[2]});

		assert.equal(uint256MIn52CG, BigInt("0"))
		await expect(JGNRewardsYOsa15m.notifyRewardAmount.call(uinti1WyA8L, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsrl0k2Nn = await JGNRewards.new({from: accounts[2]});
		const addressZMKb0JA = accounts[4]
		const uint256Rp5HCm = await JGNRewardsrl0k2Nn.balanceOf.call(addressZMKb0JA, {from: "0x0000000000000000000000000000000000000001"});
		await JGNRewardsrl0k2Nn.getReward.call({from: accounts[0]});

		assert.equal(uint256Rp5HCm, BigInt("0"))
		await expect(JGNRewardsrl0k2Nn.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsZZWmGN2 = await JGNRewards.new({from: accounts[3]});
		const addressiF8tyLO = accounts[4]
		const addressOEQbsVk = accounts[2]
		const uintrMFQ0x0 = BigInt("675")
		const addressdT6cr0N = accounts[3]
		const addresseixIC1a = accounts[4]
		const uint256yXyGTo = await JGNRewardsZZWmGN2.earned.call(addressiF8tyLO, {from: "0x0000000000000000000000000000000000000001"});
		const uint256BACAN6I = await JGNRewardsZZWmGN2.balanceOf.call(addressOEQbsVk, {from: accounts[3]});
		const uint256q9G7SXh = await JGNRewardsZZWmGN2.stake.call(uintrMFQ0x0, {from: "0x0000000000000000000000000000000000000001"});
		const uint256QwYVn9n = await JGNRewardsZZWmGN2.balanceOf.call(addressdT6cr0N, {from: accounts[2]});
		const uint256o4FgIeB = await JGNRewardsZZWmGN2.earned.call(addresseixIC1a, {from: accounts[4]});

		assert.equal(uint256BACAN6I, BigInt("0"))
		assert.equal(uint256yXyGTo, BigInt("0"))
		await expect(JGNRewardsZZWmGN2.stake.call(uintrMFQ0x0, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsSxVvagS = await JGNRewards.new({from: accounts[1]});
		const uintiJb5RAk = BigInt("881")
		const uint9ZlgNi = BigInt("607")
		const addressMV160e = accounts[0]
		const addressbYXgDFL = "0x0000000000000000000000000000000000000001"
		const uint256YWeQP1k = await JGNRewardsSxVvagS.withdraw.call(uintiJb5RAk, {from: accounts[3]});
		const uint256SckggGB = await JGNRewardsSxVvagS.stake.call(uint9ZlgNi, {from: accounts[1]});
		const uint256xaytOeT = await JGNRewardsSxVvagS.balanceOf.call(addressMV160e, {from: "0x0000000000000000000000000000000000000001"});
		const uint256dAPVZQs = await JGNRewardsSxVvagS.earned.call(addressbYXgDFL, {from: accounts[1]});
		await JGNRewardsSxVvagS.getReward.call({from: accounts[4]});

		await expect(JGNRewardsSxVvagS.withdraw.call(uintiJb5RAk, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsg0Yd5O4 = await JGNRewards.new({from: accounts[1]});
		const addressZjIcb5o = accounts[0]
		const addressy5dbO8D = "0x0000000000000000000000000000000000000001"
		const addressdZVtrkc = await JGNRewardsg0Yd5O4.updateReward.call(addressZjIcb5o, {from: accounts[4]});
		const uint256iL1mXFH = await JGNRewardsg0Yd5O4.rewardPerToken.call({from: accounts[4]});
		const addressIgaSHhJ = await JGNRewardsg0Yd5O4.updateReward.call(addressy5dbO8D, {from: accounts[2]});
		const uint256LuRgm1w = await JGNRewardsg0Yd5O4.rewardPerToken.call({from: accounts[2]});

		await expect(JGNRewardsg0Yd5O4.updateReward.call(addressZjIcb5o, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsrl0k2Nn = await JGNRewards.new({from: accounts[2]});
		const addressfvmjOEl = accounts[4]
		const uint256Rp5HCm = await JGNRewardsrl0k2Nn.balanceOf.call(addressfvmjOEl, {from: "0x0000000000000000000000000000000000000001"});
		await JGNRewardsrl0k2Nn.exit.call({from: accounts[2]});
		await JGNRewardsrl0k2Nn.getReward.call({from: accounts[0]});

		assert.equal(uint256Rp5HCm, BigInt("0"))
		await expect(JGNRewardsrl0k2Nn.exit.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for JGNRewards', async () => {
		const JGNRewardsh5WTICk = await JGNRewards.new({from: "0x0000000000000000000000000000000000000001"});
		const uintzvRE9Vh = BigInt("30")
		await JGNRewardsh5WTICk.getReward.call({from: accounts[4]});
		const uint2568gMXGd = await JGNRewardsh5WTICk.notifyRewardAmount.call(uintzvRE9Vh, {from: "0x0000000000000000000000000000000000000001"});
		const uint256ZRHySVt = await JGNRewardsh5WTICk.lastTimeRewardApplicable.call({from: accounts[0]});
		await JGNRewardsh5WTICk.getReward.call({from: accounts[4]});
	});
})