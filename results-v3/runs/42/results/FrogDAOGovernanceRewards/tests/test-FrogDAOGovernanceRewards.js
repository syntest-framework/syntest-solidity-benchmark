const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressyG8Ai0X = accounts[4]
		const FrogDAOGovernanceRewardskVjZIO = await FrogDAOGovernanceRewards.new(addressyG8Ai0X, {from: accounts[1]});
		const addressWLAdWjF = accounts[3]
		const addressi8kxqeU = await FrogDAOGovernanceRewardskVjZIO.updateReward.call(addressWLAdWjF, {from: accounts[2]});
		await FrogDAOGovernanceRewardskVjZIO.getReward.call({from: accounts[2]});
		await FrogDAOGovernanceRewardskVjZIO.exit.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardskVjZIO.updateReward.call(addressWLAdWjF, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressV3OhAG2 = accounts[0]
		const FrogDAOGovernanceRewardscGp0DML = await FrogDAOGovernanceRewards.new(addressV3OhAG2, {from: accounts[1]});
		const uintYVipdXf = BigInt("1148")
		const uint256SH2alBc = await FrogDAOGovernanceRewardscGp0DML.rewardPerToken.call({from: accounts[5]});
		const uint256Hk1H3Kn = await FrogDAOGovernanceRewardscGp0DML.withdraw.call(uintYVipdXf, {from: accounts[1]});
		await FrogDAOGovernanceRewardscGp0DML.exit.call({from: accounts[5]});
		await FrogDAOGovernanceRewardscGp0DML.renounceDevAddr.call({from: accounts[5]});

		assert.equal(uint256SH2alBc, BigInt("0"))
		await expect(FrogDAOGovernanceRewardscGp0DML.withdraw.call(uintYVipdXf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressFznqUh5 = accounts[0]
		const FrogDAOGovernanceRewardsTNBBRX9 = await FrogDAOGovernanceRewards.new(addressFznqUh5, {from: accounts[0]});
		const uintjd594jN = BigInt("1834")
		const uintSa3YLaS = BigInt("57")
		const uint256n8ZUqI6 = await FrogDAOGovernanceRewardsTNBBRX9.withdrawDevFund.call(uintjd594jN, {from: accounts[1]});
		await FrogDAOGovernanceRewardsTNBBRX9.getReward.call({from: accounts[1]});
		const uint256ZknG9rL = await FrogDAOGovernanceRewardsTNBBRX9.lastTimeRewardApplicable.call({from: accounts[4]});
		const uint256cPwwean = await FrogDAOGovernanceRewardsTNBBRX9.withdraw.call(uintSa3YLaS, {from: accounts[2]});

		await expect(FrogDAOGovernanceRewardsTNBBRX9.withdrawDevFund.call(uintjd594jN, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressdBynjhD = accounts[1]
		const FrogDAOGovernanceRewardswHjkgK = await FrogDAOGovernanceRewards.new(addressdBynjhD, {from: accounts[0]});
		await FrogDAOGovernanceRewardswHjkgK.exit.call({from: accounts[0]});
		const uint256nXgHSCC = await FrogDAOGovernanceRewardswHjkgK.devFundAvailable.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardswHjkgK.exit.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressiZOdNNq = accounts[4]
		const FrogDAOGovernanceRewardst41sUxs = await FrogDAOGovernanceRewards.new(addressiZOdNNq, {from: accounts[4]});
		const addresszUecnC7 = "0x0000000000000000000000000000000000000001"
		const uintDNSWroK = BigInt("1954")
		const uint256cohrR2t = await FrogDAOGovernanceRewardst41sUxs.earned.call(addresszUecnC7, {from: "0x0000000000000000000000000000000000000001"});
		await FrogDAOGovernanceRewardst41sUxs.getReward.call({from: accounts[0]});
		await FrogDAOGovernanceRewardst41sUxs.exit.call({from: accounts[0]});
		const uint256h6Z7WYe = await FrogDAOGovernanceRewardst41sUxs.notifyRewardAmount.call(uintDNSWroK, {from: accounts[2]});
		await FrogDAOGovernanceRewardst41sUxs.checkhalve.call({from: accounts[0]});
		const uint256sWhfM4z = await FrogDAOGovernanceRewardst41sUxs.lastTimeRewardApplicable.call({from: accounts[3]});

		assert.equal(uint256cohrR2t, BigInt("0"))
		await expect(FrogDAOGovernanceRewardst41sUxs.getReward.call({from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressMai3fN = accounts[3]
		const FrogDAOGovernanceRewardsYLhUKxi = await FrogDAOGovernanceRewards.new(addressMai3fN, {from: accounts[4]});
		const uintFwUrlE3 = BigInt("478")
		const uint256X4dNPSk = await FrogDAOGovernanceRewardsYLhUKxi.notifyRewardAmount.call(uintFwUrlE3, {from: accounts[1]});
		await FrogDAOGovernanceRewardsYLhUKxi.getReward.call({from: accounts[1]});
		const uint256H7EeHn0 = await FrogDAOGovernanceRewardsYLhUKxi.lastTimeRewardApplicable.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsYLhUKxi.notifyRewardAmount.call(uintFwUrlE3, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressXmx5dTR = accounts[0]
		const FrogDAOGovernanceRewardsfgG9hj7 = await FrogDAOGovernanceRewards.new(addressXmx5dTR, {from: accounts[2]});
		const addressgKGuFaD = accounts[1]
		const uint256PxxLmqm = await FrogDAOGovernanceRewardsfgG9hj7.devFundAvailable.call({from: "0x0000000000000000000000000000000000000001"});
		const uint256wC0LnZE = await FrogDAOGovernanceRewardsfgG9hj7.rewardPerToken.call({from: accounts[4]});
		const uint256gmG2heD = await FrogDAOGovernanceRewardsfgG9hj7.earned.call(addressgKGuFaD, {from: accounts[1]});
		await FrogDAOGovernanceRewardsfgG9hj7.renounceDevAddr.call({from: accounts[1]});
		await FrogDAOGovernanceRewardsfgG9hj7.exit.call({from: accounts[3]});

		assert.equal(uint256PxxLmqm, BigInt("0"))
		assert.equal(uint256gmG2heD, BigInt("0"))
		assert.equal(uint256wC0LnZE, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsfgG9hj7.renounceDevAddr.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresspGirkQx = accounts[1]
		const FrogDAOGovernanceRewardswHjkgK = await FrogDAOGovernanceRewards.new(addresspGirkQx, {from: accounts[0]});
		const addresswuqghe = accounts[3]
		const addressDKE3SE = await FrogDAOGovernanceRewardswHjkgK.transferDevAddr.call(addresswuqghe, {from: accounts[3]});
		const uint256nXgHSCC = await FrogDAOGovernanceRewardswHjkgK.devFundAvailable.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardswHjkgK.transferDevAddr.call(addresswuqghe, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressC2BKpe = accounts[1]
		const FrogDAOGovernanceRewardswHjkgK = await FrogDAOGovernanceRewards.new(addressC2BKpe, {from: accounts[0]});
		const uintiwzRjsv = BigInt("1055")
		const uint256nXgHSCC = await FrogDAOGovernanceRewardswHjkgK.devFundAvailable.call({from: accounts[1]});
		const uint256DrdTWEM = await FrogDAOGovernanceRewardswHjkgK.notifyRewardAmount.call(uintiwzRjsv, {from: accounts[0]});
		const uint256FkGF57 = await FrogDAOGovernanceRewardswHjkgK.rewardPerToken.call({from: accounts[4]});

		assert.equal(uint256nXgHSCC, BigInt("0"))
		await expect(FrogDAOGovernanceRewardswHjkgK.notifyRewardAmount.call(uintiwzRjsv, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressD6964PL = accounts[1]
		const FrogDAOGovernanceRewardswHjkgK = await FrogDAOGovernanceRewards.new(addressD6964PL, {from: accounts[0]});
		const uintkIdrpIe = BigInt("2028")
		const uint256j3exKho = await FrogDAOGovernanceRewardswHjkgK.withdrawDevFund.call(uintkIdrpIe, {from: accounts[1]});
		const uint256nXgHSCC = await FrogDAOGovernanceRewardswHjkgK.devFundAvailable.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardswHjkgK.withdrawDevFund.call(uintkIdrpIe, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressjEbkSQ3 = accounts[1]
		const FrogDAOGovernanceRewardsiLZFbG6 = await FrogDAOGovernanceRewards.new(addressjEbkSQ3, {from: "0x0000000000000000000000000000000000000001"});
		const uintjiOYSpE = BigInt("1870")
		const uintexHqR9 = BigInt("1685")
		await FrogDAOGovernanceRewardsiLZFbG6.renounceDevAddr.call({from: accounts[1]});
		const uint256s1INRkc = await FrogDAOGovernanceRewardsiLZFbG6.notifyRewardAmount.call(uintjiOYSpE, {from: accounts[0]});
		await FrogDAOGovernanceRewardsiLZFbG6.checkStart.call({from: accounts[4]});
		await FrogDAOGovernanceRewardsiLZFbG6.renounceDevAddr.call({from: accounts[3]});
		await FrogDAOGovernanceRewardsiLZFbG6.exit.call({from: accounts[0]});
		const uint256QJdG4p4 = await FrogDAOGovernanceRewardsiLZFbG6.notifyRewardAmount.call(uintexHqR9, {from: accounts[5]});
	});
})