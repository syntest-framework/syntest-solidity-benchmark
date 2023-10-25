const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressC3GmKCx = accounts[0]
		const FrogDAOGovernanceRewardsB1wKKzG = await FrogDAOGovernanceRewards.new(addressC3GmKCx, {from: accounts[5]});
		await FrogDAOGovernanceRewardsB1wKKzG.exit.call({from: accounts[3]});
		const uint256SqJBOIt = await FrogDAOGovernanceRewardsB1wKKzG.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsB1wKKzG.exit.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressXtqwVch = accounts[0]
		const FrogDAOGovernanceRewardsrv9gawc = await FrogDAOGovernanceRewards.new(addressXtqwVch, {from: accounts[3]});
		const uintoXOpbX3 = BigInt("676")
		const uintcQiMZ1W = BigInt("1753")
		const uint256TBq6cMD = await FrogDAOGovernanceRewardsrv9gawc.rewardPerToken.call({from: accounts[1]});
		const uint2564CNJMY = await FrogDAOGovernanceRewardsrv9gawc.withdraw.call(uintoXOpbX3, {from: "0x0000000000000000000000000000000000000001"});
		const uint256gv6rDr = await FrogDAOGovernanceRewardsrv9gawc.notifyRewardAmount.call(uintcQiMZ1W, {from: accounts[0]});

		assert.equal(uint256TBq6cMD, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsrv9gawc.withdraw.call(uintoXOpbX3, {from: "0x0000000000000000000000000000000000000001"})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressvTTYXy = accounts[4]
		const FrogDAOGovernanceRewardslFP0PZ9 = await FrogDAOGovernanceRewards.new(addressvTTYXy, {from: accounts[0]});
		const uintCgNbsXe = BigInt("877")
		const uintkUcJ2fu = BigInt("1700")
		const uintaYGJhA2 = BigInt("1178")
		const uint256MIFzPMl = await FrogDAOGovernanceRewardslFP0PZ9.stake.call(uintCgNbsXe, {from: accounts[2]});
		const uint2564K5QA2 = await FrogDAOGovernanceRewardslFP0PZ9.rewardPerToken.call({from: accounts[3]});
		const uint256CX0SSVm = await FrogDAOGovernanceRewardslFP0PZ9.stake.call(uintkUcJ2fu, {from: accounts[2]});
		const uint256AU3bLim = await FrogDAOGovernanceRewardslFP0PZ9.stake.call(uintaYGJhA2, {from: accounts[4]});

		await expect(FrogDAOGovernanceRewardslFP0PZ9.stake.call(uintCgNbsXe, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressaaRSke = accounts[2]
		const FrogDAOGovernanceRewardsXl7foMJ = await FrogDAOGovernanceRewards.new(addressaaRSke, {from: accounts[0]});
		const uintTuFHAM0 = BigInt("1038")
		const addressduIMDue = accounts[0]
		const uintlCyIfya = BigInt("2043")
		const uint256xEoWiH9 = await FrogDAOGovernanceRewardsXl7foMJ.notifyRewardAmount.call(uintTuFHAM0, {from: accounts[1]});
		await FrogDAOGovernanceRewardsXl7foMJ.getReward.call({from: accounts[3]});
		const uint256EDk9qS5 = await FrogDAOGovernanceRewardsXl7foMJ.earned.call(addressduIMDue, {from: accounts[0]});
		const uint256bNpyJkj = await FrogDAOGovernanceRewardsXl7foMJ.stake.call(uintlCyIfya, {from: accounts[4]});
		const uint256hHDmqd8 = await FrogDAOGovernanceRewardsXl7foMJ.devFundAvailable.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsXl7foMJ.notifyRewardAmount.call(uintTuFHAM0, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresshj3rsI = accounts[3]
		const FrogDAOGovernanceRewardsX7vETHG = await FrogDAOGovernanceRewards.new(addresshj3rsI, {from: accounts[5]});
		const uintP4Awy5O = BigInt("1351")
		const addressmSeDJZN = accounts[5]
		await FrogDAOGovernanceRewardsX7vETHG.checkhalve.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsX7vETHG.renounceDevAddr.call({from: accounts[1]});
		const uint256hiz6JKp = await FrogDAOGovernanceRewardsX7vETHG.stake.call(uintP4Awy5O, {from: accounts[3]});
		await FrogDAOGovernanceRewardsX7vETHG.getReward.call({from: accounts[0]});
		const uint256tbPnRTI = await FrogDAOGovernanceRewardsX7vETHG.earned.call(addressmSeDJZN, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsX7vETHG.checkhalve.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressdt2oc9X = accounts[4]
		const FrogDAOGovernanceRewardsY1cfe5y = await FrogDAOGovernanceRewards.new(addressdt2oc9X, {from: accounts[2]});
		const uintaACiRri = BigInt("681")
		const addresswUO6pZ = accounts[3]
		await FrogDAOGovernanceRewardsY1cfe5y.renounceDevAddr.call({from: accounts[0]});
		const uint256T907dPp = await FrogDAOGovernanceRewardsY1cfe5y.rewardPerToken.call({from: accounts[1]});
		const uint256pZQKcd = await FrogDAOGovernanceRewardsY1cfe5y.notifyRewardAmount.call(uintaACiRri, {from: accounts[1]});
		const addressL7NB9fX = await FrogDAOGovernanceRewardsY1cfe5y.updateReward.call(addresswUO6pZ, {from: accounts[2]});
		const uint256aUShhaG = await FrogDAOGovernanceRewardsY1cfe5y.lastTimeRewardApplicable.call({from: accounts[5]});
		await FrogDAOGovernanceRewardsY1cfe5y.checkhalve.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsY1cfe5y.renounceDevAddr.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressnjpdwjK = accounts[0]
		const FrogDAOGovernanceRewardsB1wKKzG = await FrogDAOGovernanceRewards.new(addressnjpdwjK, {from: accounts[5]});
		const addressgunC3A = accounts[2]
		const uint256HXx5rOR = await FrogDAOGovernanceRewardsB1wKKzG.devFundAvailable.call({from: accounts[2]});
		const uint256vUKViR9 = await FrogDAOGovernanceRewardsB1wKKzG.earned.call(addressgunC3A, {from: accounts[3]});
		await FrogDAOGovernanceRewardsB1wKKzG.checkhalve.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsB1wKKzG.exit.call({from: accounts[3]});

		assert.equal(uint256HXx5rOR, BigInt("0"))
		assert.equal(uint256vUKViR9, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsB1wKKzG.checkhalve.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressttRuOBV = accounts[0]
		const FrogDAOGovernanceRewardsrY2uKXr = await FrogDAOGovernanceRewards.new(addressttRuOBV, {from: accounts[5]});
		const addresserwXTNK = accounts[2]
		const uintq0hSgCb = BigInt("181")
		const addressLVAGtu9 = await FrogDAOGovernanceRewardsrY2uKXr.transferDevAddr.call(addresserwXTNK, {from: accounts[2]});
		const uint256ngHAlEF = await FrogDAOGovernanceRewardsrY2uKXr.withdrawDevFund.call(uintq0hSgCb, {from: accounts[2]});
		await FrogDAOGovernanceRewardsrY2uKXr.checkhalve.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsrY2uKXr.getReward.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsrY2uKXr.transferDevAddr.call(addresserwXTNK, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressgZppZN = accounts[0]
		const FrogDAOGovernanceRewardsrY2uKXr = await FrogDAOGovernanceRewards.new(addressgZppZN, {from: accounts[5]});
		const uinttZNbbxS = BigInt("181")
		const uint256ngHAlEF = await FrogDAOGovernanceRewardsrY2uKXr.withdrawDevFund.call(uinttZNbbxS, {from: accounts[2]});
		await FrogDAOGovernanceRewardsrY2uKXr.checkhalve.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsrY2uKXr.getReward.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsrY2uKXr.withdrawDevFund.call(uinttZNbbxS, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressLLiWWRq = accounts[0]
		const FrogDAOGovernanceRewardsrY2uKXr = await FrogDAOGovernanceRewards.new(addressLLiWWRq, {from: accounts[5]});
		const uintflyD8wE = BigInt("1453")
		const addressG5OLF4 = accounts[3]
		const uint256dcnbcIE = await FrogDAOGovernanceRewardsrY2uKXr.notifyRewardAmount.call(uintflyD8wE, {from: accounts[5]});
		const addressLVAGtu9 = await FrogDAOGovernanceRewardsrY2uKXr.transferDevAddr.call(addressG5OLF4, {from: accounts[2]});
		await FrogDAOGovernanceRewardsrY2uKXr.getReward.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsrY2uKXr.getReward.call({from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsrY2uKXr.notifyRewardAmount.call(uintflyD8wE, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressd4nrfyi = accounts[0]
		const FrogDAOGovernanceRewardsrY2uKXr = await FrogDAOGovernanceRewards.new(addressd4nrfyi, {from: accounts[5]});
		const uinteNlJF0F = BigInt("1743")
		const uintL31nC3 = BigInt("181")
		const uint256zS4oXA = await FrogDAOGovernanceRewardsrY2uKXr.withdrawDevFund.call(uinteNlJF0F, {from: accounts[0]});
		const uint256ngHAlEF = await FrogDAOGovernanceRewardsrY2uKXr.withdrawDevFund.call(uintL31nC3, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsrY2uKXr.withdrawDevFund.call(uinteNlJF0F, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressfUI6WDA = accounts[1]
		const FrogDAOGovernanceRewardsSGEnMo = await FrogDAOGovernanceRewards.new(addressfUI6WDA, {from: "0x0000000000000000000000000000000000000001"});
		const addressS1yghgk = accounts[2]
		const addressw8X2Xc0 = await FrogDAOGovernanceRewardsSGEnMo.updateReward.call(addressS1yghgk, {from: accounts[3]});
		await FrogDAOGovernanceRewardsSGEnMo.getReward.call({from: accounts[4]});
		const uint256qm5Lmjw = await FrogDAOGovernanceRewardsSGEnMo.devFundAvailable.call({from: accounts[1]});
		await FrogDAOGovernanceRewardsSGEnMo.checkhalve.call({from: accounts[2]});
		const uint256YDUQCuj = await FrogDAOGovernanceRewardsSGEnMo.lastTimeRewardApplicable.call({from: accounts[5]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressHNOydvE = accounts[0]
		const FrogDAOGovernanceRewardsrY2uKXr = await FrogDAOGovernanceRewards.new(addressHNOydvE, {from: accounts[5]});
		const addressuXw5Xao = accounts[4]
		const uintBh0gt5Z = BigInt("311")
		const addressQxbucR = await FrogDAOGovernanceRewardsrY2uKXr.transferDevAddr.call(addressuXw5Xao, {from: accounts[0]});
		const uint256yvhb4ei = await FrogDAOGovernanceRewardsrY2uKXr.devFundAvailable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256zS4oXA = await FrogDAOGovernanceRewardsrY2uKXr.withdrawDevFund.call(uintBh0gt5Z, {from: accounts[0]});

		assert.equal(uint256yvhb4ei, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsrY2uKXr.withdrawDevFund.call(uintBh0gt5Z, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})