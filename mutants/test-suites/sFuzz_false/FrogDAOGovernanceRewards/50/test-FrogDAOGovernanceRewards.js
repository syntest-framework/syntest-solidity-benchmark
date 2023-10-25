const FrogDAOGovernanceRewards = artifacts.require("FrogDAOGovernanceRewards");
const chai = require('chai');
const expect = chai.expect;
chai.use(require('chai-as-promised'));

contract('FrogDAOGovernanceRewards', (accounts) => {
	it('test for FrogDAOGovernanceRewards', async () => {
		const addressNrT6m7 = accounts[3]
		const FrogDAOGovernanceRewardshaRaMxz = await FrogDAOGovernanceRewards.new(addressNrT6m7, {from: accounts[4]});
		const addressyBJ4zIo = accounts[4]
		const uintCx0xpt = BigInt("1300")
		const uintqtkEZm2 = BigInt("1182")
//		const addressbpdlTwR = await FrogDAOGovernanceRewardshaRaMxz.updateReward.call(addressyBJ4zIo, {from: accounts[0]});
//		const uint256p1eUkn7 = await FrogDAOGovernanceRewardshaRaMxz.stake.call(uintCx0xpt, {from: accounts[3]});
//		const uint256C1QtznQ = await FrogDAOGovernanceRewardshaRaMxz.withdrawDevFund.call(uintqtkEZm2, {from: accounts[1]});
//		await FrogDAOGovernanceRewardshaRaMxz.checkStart.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardshaRaMxz.updateReward.call(addressyBJ4zIo, {from: accounts[0]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressjTtpMr5 = accounts[2]
		const FrogDAOGovernanceRewardsPIjtBgS = await FrogDAOGovernanceRewards.new(addressjTtpMr5, {from: accounts[2]});
		const addressC0to65X = accounts[0]
		const addressIhwVon0 = accounts[3]
//		const addressPcgQzWi = await FrogDAOGovernanceRewardsPIjtBgS.transferDevAddr.call(addressC0to65X, {from: accounts[5]});
//		await FrogDAOGovernanceRewardsPIjtBgS.checkhalve.call({from: "0x0000000000000000000000000000000000000001"});
//		const addressz5AqkZ = await FrogDAOGovernanceRewardsPIjtBgS.updateReward.call(addressIhwVon0, {from: accounts[1]});
//		await FrogDAOGovernanceRewardsPIjtBgS.exit.call({from: accounts[0]});
//		await FrogDAOGovernanceRewardsPIjtBgS.checkStart.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsPIjtBgS.transferDevAddr.call(addressC0to65X, {from: accounts[5]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressah89Fjw = accounts[4]
		const FrogDAOGovernanceRewardsVbYnCP4 = await FrogDAOGovernanceRewards.new(addressah89Fjw, {from: accounts[4]});
		const addressB0MlI4I = accounts[3]
		const uintEMgvn7S = BigInt("1416")
		const addressugyLqV = accounts[0]
		const uintDjbf8E = BigInt("1638")
		const uint256anMeJ0b = await FrogDAOGovernanceRewardsVbYnCP4.earned.call(addressB0MlI4I, {from: accounts[4]});
//		const uint256T3F8aF = await FrogDAOGovernanceRewardsVbYnCP4.withdraw.call(uintEMgvn7S, {from: accounts[3]});
//		await FrogDAOGovernanceRewardsVbYnCP4.exit.call({from: "0x0000000000000000000000000000000000000001"});
//		const uint256Pfx7j0d = await FrogDAOGovernanceRewardsVbYnCP4.earned.call(addressugyLqV, {from: accounts[2]});
//		const uint256KrefZ1t = await FrogDAOGovernanceRewardsVbYnCP4.notifyRewardAmount.call(uintDjbf8E, {from: accounts[0]});

		assert.equal(uint256anMeJ0b, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsVbYnCP4.withdraw.call(uintEMgvn7S, {from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressTL2SSF0 = accounts[0]
		const FrogDAOGovernanceRewardsPhiBwfQ = await FrogDAOGovernanceRewards.new(addressTL2SSF0, {from: accounts[0]});
		const uint256OupXZ65 = await FrogDAOGovernanceRewardsPhiBwfQ.devFundAvailable.call({from: accounts[3]});
		const uint256lSYim7G = await FrogDAOGovernanceRewardsPhiBwfQ.devFundAvailable.call({from: accounts[3]});
		const uint256FoO1nck = await FrogDAOGovernanceRewardsPhiBwfQ.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256FoO1nck, BigInt("0"))
		assert.equal(uint256OupXZ65, BigInt("0"))
		assert.equal(uint256lSYim7G, BigInt("0"))
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressoOTEoB8 = accounts[0]
		const FrogDAOGovernanceRewardsktJjTqW = await FrogDAOGovernanceRewards.new(addressoOTEoB8, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsktJjTqW.getReward.call({from: accounts[4]});
//		await FrogDAOGovernanceRewardsktJjTqW.exit.call({from: accounts[1]});
//		const uint256y6vP6GU = await FrogDAOGovernanceRewardsktJjTqW.devFundAvailable.call({from: accounts[1]});

		await expect(FrogDAOGovernanceRewardsktJjTqW.getReward.call({from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressom1BMyI = accounts[3]
		const FrogDAOGovernanceRewardsaXPQzQP = await FrogDAOGovernanceRewards.new(addressom1BMyI, {from: accounts[0]});
		const uintZkqAjxk = BigInt("838")
//		await FrogDAOGovernanceRewardsaXPQzQP.exit.call({from: accounts[1]});
//		await FrogDAOGovernanceRewardsaXPQzQP.checkStart.call({from: accounts[4]});
//		await FrogDAOGovernanceRewardsaXPQzQP.checkStart.call({from: accounts[0]});
//		const uint256XneQ1Ec = await FrogDAOGovernanceRewardsaXPQzQP.withdraw.call(uintZkqAjxk, {from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsaXPQzQP.exit.call({from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressptr1Hoi = accounts[0]
		const FrogDAOGovernanceRewardsPhiBwfQ = await FrogDAOGovernanceRewards.new(addressptr1Hoi, {from: accounts[0]});
		const uintKXXpD8 = BigInt("392")
		const uintkJyEZnk = BigInt("493")
//		const uint256jP4obdv = await FrogDAOGovernanceRewardsPhiBwfQ.notifyRewardAmount.call(uintKXXpD8, {from: accounts[4]});
//		const uint256txP7Bxx = await FrogDAOGovernanceRewardsPhiBwfQ.withdrawDevFund.call(uintkJyEZnk, {from: accounts[2]});
//		const uint256x9oV1ae = await FrogDAOGovernanceRewardsPhiBwfQ.rewardPerToken.call({from: accounts[4]});
//		const uint256lSYim7G = await FrogDAOGovernanceRewardsPhiBwfQ.devFundAvailable.call({from: accounts[3]});
//		const uint256FoO1nck = await FrogDAOGovernanceRewardsPhiBwfQ.rewardPerToken.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsPhiBwfQ.notifyRewardAmount.call(uintKXXpD8, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressRsA8czX = accounts[0]
		const FrogDAOGovernanceRewardsPhiBwfQ = await FrogDAOGovernanceRewards.new(addressRsA8czX, {from: accounts[0]});
		const addressrEV48G6 = "0x0000000000000000000000000000000000000001"
		const uint256lSYim7G = await FrogDAOGovernanceRewardsPhiBwfQ.devFundAvailable.call({from: accounts[3]});
		const addressmwjeUuL = await FrogDAOGovernanceRewardsPhiBwfQ.transferDevAddr.call(addressrEV48G6, {from: accounts[0]});
//		await FrogDAOGovernanceRewardsPhiBwfQ.renounceDevAddr.call({from: accounts[3]});
//		const uint256FoO1nck = await FrogDAOGovernanceRewardsPhiBwfQ.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256lSYim7G, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsPhiBwfQ.renounceDevAddr.call({from: accounts[3]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressYisvvfc = accounts[0]
		const FrogDAOGovernanceRewardsPhiBwfQ = await FrogDAOGovernanceRewards.new(addressYisvvfc, {from: accounts[0]});
		const uintPuXcf4K = BigInt("250")
		const uintXHuUmDd = BigInt("1039")
		const uint256lSYim7G = await FrogDAOGovernanceRewardsPhiBwfQ.devFundAvailable.call({from: accounts[3]});
//		const uint256H5M8lNE = await FrogDAOGovernanceRewardsPhiBwfQ.withdrawDevFund.call(uintPuXcf4K, {from: accounts[4]});
//		const uint256Hd2vmPu = await FrogDAOGovernanceRewardsPhiBwfQ.withdraw.call(uintXHuUmDd, {from: accounts[4]});
//		const uint256FoO1nck = await FrogDAOGovernanceRewardsPhiBwfQ.rewardPerToken.call({from: accounts[3]});

		assert.equal(uint256lSYim7G, BigInt("0"))
		await expect(FrogDAOGovernanceRewardsPhiBwfQ.withdrawDevFund.call(uintPuXcf4K, {from: accounts[4]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressg5cxAxJ = accounts[1]
		const FrogDAOGovernanceRewardseDhE8aY = await FrogDAOGovernanceRewards.new(addressg5cxAxJ, {from: accounts[4]});
		const uintsoogTfQ = BigInt("570")
		const uintBAyHip = BigInt("2022")
//		const uint256w7IKlpk = await FrogDAOGovernanceRewardseDhE8aY.withdrawDevFund.call(uintsoogTfQ, {from: accounts[1]});
//		await FrogDAOGovernanceRewardseDhE8aY.getReward.call({from: accounts[3]});
//		const uint256dB2FaWD = await FrogDAOGovernanceRewardseDhE8aY.rewardPerToken.call({from: accounts[4]});
//		const uint256TnLxtOU = await FrogDAOGovernanceRewardseDhE8aY.rewardPerToken.call({from: accounts[4]});
//		const uint256H2dWhzZ = await FrogDAOGovernanceRewardseDhE8aY.withdraw.call(uintBAyHip, {from: "0x0000000000000000000000000000000000000001"});

		await expect(FrogDAOGovernanceRewardseDhE8aY.withdrawDevFund.call(uintsoogTfQ, {from: accounts[1]})).to.be.rejectedWith(Error);
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressp5x42V = accounts[5]
		const FrogDAOGovernanceRewardsMXDkjsf = await FrogDAOGovernanceRewards.new(addressp5x42V, {from: "0x0000000000000000000000000000000000000001"});
		const uint256bubM7LU = await FrogDAOGovernanceRewardsMXDkjsf.rewardPerToken.call({from: accounts[2]});
		await FrogDAOGovernanceRewardsMXDkjsf.getReward.call({from: accounts[1]});
		await FrogDAOGovernanceRewardsMXDkjsf.renounceDevAddr.call({from: "0x0000000000000000000000000000000000000001"});
	});

	it('test for FrogDAOGovernanceRewards', async () => {
		const addressIOUgNYv = accounts[0]
		const FrogDAOGovernanceRewardsPhiBwfQ = await FrogDAOGovernanceRewards.new(addressIOUgNYv, {from: accounts[0]});
		const uintdvhCYT = BigInt("412")
//		const uint256oEtBMfV = await FrogDAOGovernanceRewardsPhiBwfQ.notifyRewardAmount.call(uintdvhCYT, {from: accounts[0]});
//		const uint256lSYim7G = await FrogDAOGovernanceRewardsPhiBwfQ.devFundAvailable.call({from: accounts[3]});

		await expect(FrogDAOGovernanceRewardsPhiBwfQ.notifyRewardAmount.call(uintdvhCYT, {from: accounts[0]})).to.be.rejectedWith(Error);
	});
})