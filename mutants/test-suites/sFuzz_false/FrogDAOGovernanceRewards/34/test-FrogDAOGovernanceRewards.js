const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressyJRyzs3 = accounts[1]
		const FrogDAOGovernanceRewardsm9VDTtF = await FrogDAOGovernanceRewards.new(addressyJRyzs3, {from: accounts[4]});
		const uintYensuoD = BigInt("841")
		const address0OCnyx = accounts[1]
//		const uint256feXJzRe = await FrogDAOGovernanceRewardsm9VDTtF.notifyRewardAmount.call(uintYensuoD, {from: accounts[2]});
//		const uint256fcXLYnV = await FrogDAOGovernanceRewardsm9VDTtF.lastTimeRewardApplicable.call({from: accounts[2]});
//		const uint256PSATYry = await FrogDAOGovernanceRewardsm9VDTtF.earned.call(address0OCnyx, {from: accounts[4]});
//		const uint256DHAQzOj = await FrogDAOGovernanceRewardsm9VDTtF.rewardPerToken.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsm9VDTtF.notifyRewardAmount.call(uintYensuoD, {from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressrSTgGWD = accounts[5]
		const FrogDAOGovernanceRewardsnEaWLwO = await FrogDAOGovernanceRewards.new(addressrSTgGWD, {from: accounts[0]});
		const uintSSJiGH2 = BigInt("1531")
		const uint256kXfH0oY = await FrogDAOGovernanceRewardsnEaWLwO.devFundAvailable.call({from: accounts[5]});
		const uint256Shk5rL8 = await FrogDAOGovernanceRewardsnEaWLwO.devFundAvailable.call({from: accounts[4]});
//		const uint2563grfT4 = await FrogDAOGovernanceRewardsnEaWLwO.withdraw.call(uintSSJiGH2, {from: accounts[4]});
//		await FrogDAOGovernanceRewardsnEaWLwO.checkhalve.call({from: accounts[3]});

		assert.equal(uint256Shk5rL8, BigInt("0"))
		assert.equal(uint256kXfH0oY, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsnEaWLwO.withdraw.call(uintSSJiGH2, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressd1P7n1A = accounts[4]
		const FrogDAOGovernanceRewardslird4PZ = await FrogDAOGovernanceRewards.new(addressd1P7n1A, {from: accounts[4]});
		const addressVSVYTyD = accounts[1]
		const uintJZWP6wq = BigInt("142")
		const uintEhqpLoi = BigInt("1318")
		const uint256VLThynr = await FrogDAOGovernanceRewardslird4PZ.earned.call(addressVSVYTyD, {from: accounts[0]});
//		const uint256aCXbvh = await FrogDAOGovernanceRewardslird4PZ.stake.call(uintJZWP6wq, {from: accounts[3]});
//		await FrogDAOGovernanceRewardslird4PZ.getReward.call({from: accounts[2]});
//		const uint256Xn5VUGq = await FrogDAOGovernanceRewardslird4PZ.stake.call(uintEhqpLoi, {from: accounts[4]});
//		const uint256A4alw3P = await FrogDAOGovernanceRewardslird4PZ.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256VLThynr, BigInt("0"))
		await expect(FrogDAOGovernanceRewardslird4PZ.stake.call(uintJZWP6wq, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresswTwmjJ0 = accounts[2]
		const FrogDAOGovernanceRewardscBDJOdh = await FrogDAOGovernanceRewards.new(addresswTwmjJ0, {from: accounts[1]});
//		await FrogDAOGovernanceRewardscBDJOdh.checkStart.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardscBDJOdh.getReward.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardscBDJOdh.checkStart.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressJh3WD4K = accounts[4]
		const FrogDAOGovernanceRewardsSmJ53U = await FrogDAOGovernanceRewards.new(addressJh3WD4K, {from: accounts[2]});
		const addressauRV3iS = accounts[0]
		const uint256TNxoWD8 = await FrogDAOGovernanceRewardsSmJ53U.earned.call(addressauRV3iS, {from: accounts[4]});
		const uint256P7N3Vdb = await FrogDAOGovernanceRewardsSmJ53U.lastTimeRewardApplicable.call({from: accounts[0]});
		const uint256VTTPU7S = await FrogDAOGovernanceRewardsSmJ53U.rewardPerToken.call({from: accounts[5]});
//		await FrogDAOGovernanceRewardsSmJ53U.exit.call({from: accounts[1]});

		assert.equal(uint256P7N3Vdb, BigInt("0"))
		assert.equal(uint256TNxoWD8, BigInt("0"))
		assert.equal(uint256VTTPU7S, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsSmJ53U.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressE3oHC6T = accounts[2]
		const FrogDAOGovernanceRewardscBDJOdh = await FrogDAOGovernanceRewards.new(addressE3oHC6T, {from: accounts[1]});
		const uintth9VbHf = BigInt("24")
//		const uint256FGMobLL = await FrogDAOGovernanceRewardscBDJOdh.notifyRewardAmount.call(uintth9VbHf, {from: accounts[1]});
//		await FrogDAOGovernanceRewardscBDJOdh.checkStart.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardscBDJOdh.getReward.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardscBDJOdh.notifyRewardAmount.call(uintth9VbHf, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressBRO4Mg = accounts[3]
		const FrogDAOGovernanceRewardsbPLFGZv = await FrogDAOGovernanceRewards.new(addressBRO4Mg, {from: accounts[1]});
		const uintsc7WpsY = BigInt("132")
//		await FrogDAOGovernanceRewardsbPLFGZv.renounceDevAddr.call({from: accounts[3]});
//		const uint256kId6flB = await FrogDAOGovernanceRewardsbPLFGZv.withdraw.call(uintsc7WpsY, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsbPLFGZv.renounceDevAddr.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresspoLgbHQ = accounts[3]
		const FrogDAOGovernanceRewardsGo62l8V = await FrogDAOGovernanceRewards.new(addresspoLgbHQ, {from: accounts[3]});
		const uintkLRroEg = BigInt("566")
//		await FrogDAOGovernanceRewardsGo62l8V.renounceDevAddr.call({from: accounts[2]});
//		const uint256U1OdMM3 = await FrogDAOGovernanceRewardsGo62l8V.notifyRewardAmount.call(uintkLRroEg, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsGo62l8V.exit.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardsGo62l8V.checkhalve.call({from: accounts[4]});
//		const uint256OAWFdQ6 = await FrogDAOGovernanceRewardsGo62l8V.rewardPerToken.call({from: accounts[4]});

		await expect(FrogDAOGovernanceRewardsGo62l8V.renounceDevAddr.call({from: accounts[2]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressW3IyNBs = accounts[4]
		const FrogDAOGovernanceRewardsqNsaMqI = await FrogDAOGovernanceRewards.new(addressW3IyNBs, {from: "0x0000000000000000000000000000000000000001"});
		const uintCeVH2b3 = BigInt("2021")
		const addresshRNYSeV = accounts[3]
		const uint256B6VZqw2 = await FrogDAOGovernanceRewardsqNsaMqI.lastTimeRewardApplicable.call({from: accounts[2]});
		const uint256UpAiR7X = await FrogDAOGovernanceRewardsqNsaMqI.withdraw.call(uintCeVH2b3, {from: accounts[3]});
		const addressJ77SRwS = await FrogDAOGovernanceRewardsqNsaMqI.transferDevAddr.call(addresshRNYSeV, {from: accounts[2]});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressgdfkNiD = accounts[2]
		const FrogDAOGovernanceRewardslIsQ6Rh = await FrogDAOGovernanceRewards.new(addressgdfkNiD, {from: accounts[1]});
		const uintVBkC7GP = BigInt("539")
		const uintVQWqjLE = BigInt("1336")
		const addressHy3Y0Ci = accounts[2]
//		const uint256aF7t5ep = await FrogDAOGovernanceRewardslIsQ6Rh.withdrawDevFund.call(uintVBkC7GP, {from: accounts[3]});
//		const uint256crZfuK = await FrogDAOGovernanceRewardslIsQ6Rh.notifyRewardAmount.call(uintVQWqjLE, {from: accounts[4]});
//		const addressjeuzk7 = await FrogDAOGovernanceRewardslIsQ6Rh.transferDevAddr.call(addressHy3Y0Ci, {from: accounts[1]});
//		await FrogDAOGovernanceRewardslIsQ6Rh.checkhalve.call({from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardslIsQ6Rh.withdrawDevFund.call(uintVBkC7GP, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addresszKgT6PB = accounts[0]
		const FrogDAOGovernanceRewardsZGA31kS = await FrogDAOGovernanceRewards.new(addresszKgT6PB, {from: accounts[3]});
		const uintwGwoXP = BigInt("145")
//		const uint256F04LdhN = await FrogDAOGovernanceRewardsZGA31kS.withdrawDevFund.call(uintwGwoXP, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsZGA31kS.checkStart.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardsZGA31kS.checkStart.call({from: accounts[1]});
//		const uint256XqNZ5uC = await FrogDAOGovernanceRewardsZGA31kS.devFundAvailable.call({from: accounts[2]});
//		await FrogDAOGovernanceRewardsZGA31kS.getReward.call({from: accounts[0]});

		await expect(FrogDAOGovernanceRewardsZGA31kS.withdrawDevFund.call(uintwGwoXP, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressNov1Lgw = accounts[3]
		const FrogDAOGovernanceRewardsbPLFGZv = await FrogDAOGovernanceRewards.new(addressNov1Lgw, {from: accounts[1]});
		const addressHZqcXKE = accounts[2]
		const uintyGf28Jz = BigInt("98")
		const addressHYBCL3 = await FrogDAOGovernanceRewardsbPLFGZv.transferDevAddr.call(addressHZqcXKE, {from: accounts[3]});
//		const uint256kId6flB = await FrogDAOGovernanceRewardsbPLFGZv.withdraw.call(uintyGf28Jz, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsbPLFGZv.withdraw.call(uintyGf28Jz, {from: accounts[3]})).to.be.rejectedWith(Error);
	});
})